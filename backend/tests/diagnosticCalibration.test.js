'use strict';

jest.mock('../src/db', () => ({ query: jest.fn(), transaction: jest.fn(), close: jest.fn() }));

const request = require('supertest');
const db = require('../src/db');
const { createApp } = require('../src/app');
const { tokenFor } = require('./helpers');

const app = createApp();
const auth = (role = 'user') => ({ Authorization: `Bearer ${tokenFor(7, role)}` });
beforeEach(() => db.query.mockReset());

describe('Aide au diagnostic : diagnostic retenu, signalements, calibration', () => {
  it('enregistre le diagnostic retenu sans donnée de patient ni compte', async () => {
    db.query
      .mockResolvedValueOnce([{ id: 12 }]) // fiche retenue
      .mockResolvedValueOnce([{ id: 30 }]) // première hypothèse
      .mockResolvedValueOnce({ affectedRows: 1 });
    const res = await request(app)
      .post('/api/diagnostic/retenu')
      .set(auth())
      .send({
        pathologie: 'paludisme-grave',
        premiere: 'meningite-bacterienne',
        rang: 2,
        nbHypotheses: 8,
        tranche: 'petit',
        niveau: 'centre_sante',
        nom: 'Jean Patient',
        signes: [1, 2],
      });
    expect(res.status).toBe(201);
    const [sql, valeurs] = db.query.mock.calls[2];
    expect(sql).toMatch(/INSERT INTO diagnostic_retenus/);
    expect(valeurs).toEqual([12, 30, 2, 8, 'petit', 'centre_sante', null]);
    // Rien d'autre que ces champs : ni nom, ni signes, ni identifiant d'utilisateur
    expect(JSON.stringify(valeurs)).not.toMatch(/Jean|7/);
  });

  it('refuse une fiche inconnue et exige une connexion', async () => {
    db.query.mockResolvedValueOnce([]);
    expect(
      (await request(app).post('/api/diagnostic/retenu').set(auth()).send({ pathologie: 'x' })).status,
    ).toBe(400);
    expect((await request(app).post('/api/diagnostic/retenu').send({ pathologie: 'x' })).status).toBe(401);
  });

  it('signalement : type et message contrôlés', async () => {
    expect(
      (
        await request(app)
          .post('/api/diagnostic/signalement')
          .set(auth())
          .send({ type: 'x', message: 'Long message' })
      ).status,
    ).toBe(400);
    expect(
      (
        await request(app)
          .post('/api/diagnostic/signalement')
          .set(auth())
          .send({ type: 'autre', message: 'ok' })
      ).status,
    ).toBe(400);
    db.query.mockResolvedValueOnce([]).mockResolvedValueOnce({ affectedRows: 1 });
    const res = await request(app)
      .post('/api/diagnostic/signalement')
      .set(auth())
      .send({ type: 'hypothese_manquante', pathologie: 'inconnue', message: 'La GEU n’apparaît pas' });
    expect(res.status).toBe(201);
    expect(db.query.mock.calls[1][1]).toEqual(['hypothese_manquante', null, 'La GEU n’apparaît pas', 7]);
  });

  it('calibration réservée aux relecteurs', async () => {
    expect((await request(app).get('/api/admin/diagnostic/calibration').set(auth('user'))).status).toBe(403);
    db.query
      .mockResolvedValueOnce([{ total: '10', premier: '7', trois: '9', absent: '1' }])
      .mockResolvedValueOnce([
        { nom: 'Paludisme grave', slug: 'paludisme-grave', total: '4', premier: '2', absent: '0' },
      ])
      .mockResolvedValueOnce([{ id: 1, type: 'autre', message: 'm', statut: 'nouveau' }]);
    const res = await request(app).get('/api/admin/diagnostic/calibration').set(auth('medecin'));
    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({ total: 10, premier: 7, trois: 9, absent: 1 });
    expect(res.body.data.fiches[0]).toMatchObject({ total: 4, premier: 2 });
    expect(res.body.data.signalements).toHaveLength(1);
  });
});
