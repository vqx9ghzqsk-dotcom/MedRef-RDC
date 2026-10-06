'use strict';

jest.mock('../src/db', () => ({ query: jest.fn(), transaction: jest.fn(), close: jest.fn() }));

const fs = require('fs');
const os = require('os');
const path = require('path');
const request = require('supertest');
const db = require('../src/db');
const { createApp } = require('../src/app');

beforeEach(() => db.query.mockReset());

describe('Journal des erreurs', () => {
  const app = createApp();

  it('donne une référence à chaque requête et la renvoie avec une erreur interne', async () => {
    db.query.mockRejectedValueOnce(new Error('connexion perdue'));
    const res = await request(app).get('/api/departements');
    expect(res.status).toBe(500);
    expect(res.body.reference).toMatch(/^[0-9a-f]{12}$/);
    expect(res.headers['x-request-id']).toBe(res.body.reference);
    expect(JSON.stringify(res.body)).not.toMatch(/connexion perdue/);
  });

  it('reprend la référence fournie par le client si elle est valide', async () => {
    const res = await request(app).get('/api/health').set('X-Request-Id', 'abc12345-xyz');
    expect(res.headers['x-request-id']).toBe('abc12345-xyz');
    const bad = await request(app).get('/api/health').set('X-Request-Id', '<script>');
    expect(bad.headers['x-request-id']).not.toBe('<script>');
  });

  it('consigne une erreur de l’interface et renvoie sa référence', async () => {
    const res = await request(app)
      .post('/api/journal/erreur')
      .send({ message: 'x is undefined', page: '/pathologies/paludisme-grave', pile: 'a'.repeat(9000) });
    expect(res.status).toBe(201);
    expect(res.body.reference).toEqual(expect.any(String));
  });

  it('supprime les journaux de plus de 30 jours', () => {
    jest.isolateModules(() => {
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'medref-logs-'));
      process.env.LOG_DIR = dir;
      const journal = require('../src/journal');
      fs.writeFileSync(path.join(dir, 'api-2020-01-01.log'), '');
      fs.writeFileSync(path.join(dir, `api-${new Date().toISOString().slice(0, 10)}.log`), '');
      expect(journal.nettoyer()).toEqual(['api-2020-01-01.log']);
      delete process.env.LOG_DIR;
      fs.rmSync(dir, { recursive: true, force: true });
    });
  });
});

describe('Consultation hors ligne', () => {
  it('liste toutes les adresses publiques à mettre en cache', async () => {
    db.query
      .mockResolvedValueOnce([{ slug: 'medecine-interne' }])
      .mockResolvedValueOnce([{ slug: 'infectiologie' }])
      .mockResolvedValueOnce([{ slug: 'paludisme-grave' }])
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([{ slug: 'glasgow' }])
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([{ slug: 'artesunate' }])
      .mockResolvedValueOnce([{ id: 4 }]);
    const res = await request(createApp()).get('/api/hors-ligne');
    expect(res.status).toBe(200);
    expect(res.body.data.urls).toEqual(
      expect.arrayContaining([
        '/api/departements',
        '/api/pathologies/paludisme-grave',
        '/api/scores/glasgow',
        '/api/molecules/artesunate',
        '/api/medicaments/4',
      ]),
    );
    expect(res.body.data.urls.some((u) => /admin|prescriptions|auth/.test(u))).toBe(false);
  });
});

describe('Interface servie par l’API (mise en ligne simple)', () => {
  it('sert index.html pour les routes de l’application, sans masquer les 404 de l’API', async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'medref-dist-'));
    fs.writeFileSync(path.join(dir, 'index.html'), '<!doctype html><title>MedRef</title>');
    fs.writeFileSync(path.join(dir, 'service-worker.js'), '// sw');
    process.env.FRONTEND_DIST = dir;
    try {
      const app = createApp();
      const page = await request(app).get('/pathologies/paludisme-grave');
      expect(page.status).toBe(200);
      expect(page.text).toMatch(/MedRef/);
      const sw = await request(app).get('/service-worker.js');
      expect(sw.headers['cache-control']).toBe('no-cache');
      const api = await request(app).get('/api/inexistant');
      expect(api.status).toBe(404);
      expect(api.body.error).toMatch(/Route introuvable/);
    } finally {
      delete process.env.FRONTEND_DIST;
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});
