'use strict';

jest.mock('../src/db', () => ({ query: jest.fn(), transaction: jest.fn(), close: jest.fn() }));

const request = require('supertest');
const db = require('../src/db');
const { createApp } = require('../src/app');
const { validateItem, decide, toSqlDate, fromSqlDate } = require('../src/services/prescriptionSync');
const { tokenFor, createFakePrescriptionStore } = require('./helpers');

const app = createApp();
const ID = '3f2b8c1e-9a4d-4c7e-8b1a-2d3e4f5a6b7c';
const ID2 = '7c6b5a4f-3e2d-4a1b-9c8d-7e6f5a4b3c2d';
const item = (over = {}) => ({
  id: ID,
  patient_label: 'Enfant 4 ans',
  contenu: { lignes: [{ dci: 'Artésunate', posologie: '2,4 mg/kg' }] },
  updated_at: '2026-09-01T10:00:00.000Z',
  ...over,
});

let store;
beforeEach(() => {
  store = createFakePrescriptionStore();
  db.query.mockReset();
  db.transaction.mockReset();
  db.transaction.mockImplementation(store.transaction);
  db.query.mockImplementation(async (sql, params) => {
    if (sql.includes('FROM prescriptions WHERE user_id')) return store.listFor(params[0]);
    return [];
  });
});

describe('validateItem', () => {
  it('accepte un élément valide et normalise l’id', () => {
    const r = validateItem(item({ id: ID.toUpperCase() }));
    expect(r.ok).toBe(true);
    expect(r.value.id).toBe(ID);
  });
  it.each([
    ['id non UUID', { id: '123' }],
    ['date invalide', { updated_at: 'hier' }],
    ['date dans le futur', { updated_at: new Date(Date.now() + 3600e3).toISOString() }],
    ['contenu tableau', { contenu: [] }],
    ['libellé trop long', { patient_label: 'x'.repeat(191) }],
  ])('refuse : %s', (_label, over) => {
    expect(validateItem(item(over)).ok).toBe(false);
  });
  it('accepte une suppression sans contenu', () => {
    expect(validateItem(item({ contenu: undefined, deleted: true })).ok).toBe(true);
  });
});

describe('decide', () => {
  const it0 = { updated_at: Date.parse('2026-09-01T10:00:00Z') };
  it('crée si absent', () => expect(decide(undefined, it0, 1)).toBe('created'));
  it('conflit si autre propriétaire', () =>
    expect(decide({ user_id: 2, client_updated_at: '2026-01-01 00:00:00.000' }, it0, 1)).toBe('conflict'));
  it('met à jour si plus récent', () =>
    expect(decide({ user_id: 1, client_updated_at: '2026-08-01 00:00:00.000' }, it0, 1)).toBe('updated'));
  it('ignore si identique (rejeu)', () =>
    expect(decide({ user_id: 1, client_updated_at: '2026-09-01 10:00:00.000' }, it0, 1)).toBe('unchanged'));
  it('aller-retour de dates SQL', () => {
    const ms = Date.parse('2026-09-01T10:00:00.123Z');
    expect(fromSqlDate(toSqlDate(ms))).toBe(ms);
  });
});

describe('POST /api/prescriptions/sync', () => {
  const sync = (body, userId = 1) =>
    request(app)
      .post('/api/prescriptions/sync')
      .set('Authorization', `Bearer ${tokenFor(userId)}`)
      .send(body);

  it('exige une authentification', async () => {
    const res = await request(app).post('/api/prescriptions/sync').send({ prescriptions: [] });
    expect(res.status).toBe(401);
  });

  it('exige un tableau', async () => {
    const res = await sync({ prescriptions: 'x' });
    expect(res.status).toBe(400);
  });

  it('est idempotent : rejouer le même lot ne change rien', async () => {
    const first = await sync({ prescriptions: [item()] });
    expect(first.status).toBe(200);
    expect(first.body.results).toEqual([{ id: ID, status: 'created' }]);
    expect(first.body.data).toHaveLength(1);
    expect(first.body.data[0].updated_at).toBe('2026-09-01T10:00:00.000Z');

    const second = await sync({ prescriptions: [item()] });
    expect(second.body.results).toEqual([{ id: ID, status: 'unchanged' }]);
    expect(store.rows.size).toBe(1);
    expect(second.body.data).toEqual(first.body.data);
  });

  it('applique la version la plus récente (dernier écrit gagne)', async () => {
    await sync({ prescriptions: [item()] });
    const res = await sync({
      prescriptions: [item({ patient_label: 'Modifié', updated_at: '2026-09-02T10:00:00.000Z' })],
    });
    expect(res.body.results[0].status).toBe('updated');
    expect(res.body.data[0].patient_label).toBe('Modifié');

    const stale = await sync({ prescriptions: [item({ patient_label: 'Ancien' })] });
    expect(stale.body.results[0].status).toBe('unchanged');
    expect(stale.body.data[0].patient_label).toBe('Modifié');
  });

  it('propage les suppressions (tombstone)', async () => {
    await sync({ prescriptions: [item()] });
    const res = await sync({
      prescriptions: [{ id: ID, deleted: true, updated_at: '2026-09-03T10:00:00.000Z' }],
    });
    expect(res.body.results[0].status).toBe('updated');
    expect(res.body.data).toHaveLength(0);
  });

  it('refuse d’écraser la prescription d’un autre utilisateur', async () => {
    await sync({ prescriptions: [item()] }, 1);
    const res = await sync({ prescriptions: [item({ updated_at: '2026-09-05T10:00:00.000Z' })] }, 2);
    expect(res.body.results[0].status).toBe('conflict');
    expect(store.rows.get(ID).user_id).toBe(1);
  });

  it('traite chaque élément indépendamment', async () => {
    const res = await sync({ prescriptions: [item(), { id: 'bad' }, item({ id: ID2 })] });
    expect(res.body.results.map((r) => r.status)).toEqual(['created', 'invalid', 'created']);
  });

  it('limite la taille des lots', async () => {
    const res = await sync({ prescriptions: Array.from({ length: 201 }, () => item()) });
    expect(res.status).toBe(413);
  });
});

describe('GET / DELETE /api/prescriptions', () => {
  it('liste les prescriptions de l’utilisateur', async () => {
    const res = await request(app)
      .get('/api/prescriptions')
      .set('Authorization', `Bearer ${tokenFor(1)}`);
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
  });

  it('supprime logiquement une prescription', async () => {
    db.query.mockResolvedValueOnce({ affectedRows: 1 });
    const res = await request(app)
      .delete(`/api/prescriptions/${ID}`)
      .set('Authorization', `Bearer ${tokenFor(1)}`);
    expect(res.status).toBe(204);
    expect(db.query.mock.calls[0][1].slice(2)).toEqual([ID, 1]);
  });

  it('404 si la prescription n’existe pas', async () => {
    db.query.mockResolvedValueOnce({ affectedRows: 0 });
    const res = await request(app)
      .delete(`/api/prescriptions/${ID}`)
      .set('Authorization', `Bearer ${tokenFor(1)}`);
    expect(res.status).toBe(404);
  });
});
