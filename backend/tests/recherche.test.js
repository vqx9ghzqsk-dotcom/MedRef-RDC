'use strict';

jest.mock('../src/db', () => ({ query: jest.fn(), transaction: jest.fn(), close: jest.fn() }));

const request = require('supertest');
const db = require('../src/db');
const { createApp } = require('../src/app');
const { toBooleanQuery } = require('../src/routes/recherche');

const app = createApp();
beforeEach(() => db.query.mockReset());

describe('toBooleanQuery', () => {
  it('construit une requête booléenne à préfixes', () => {
    expect(toBooleanQuery('paludisme grave')).toBe('+paludisme* +grave*');
  });
  it('neutralise les opérateurs booléens', () => {
    expect(toBooleanQuery('-palu* "grave" (test)')).toBe('+palu* +grave* +test*');
  });
  it('ignore les mots de moins de 3 lettres', () => {
    expect(toBooleanQuery('de la')).toBeNull();
  });
});

describe('GET /api/recherche', () => {
  it('exige au moins 2 caractères', async () => {
    const res = await request(app).get('/api/recherche?q=a');
    expect(res.status).toBe(400);
  });

  it('regroupe les résultats par type', async () => {
    db.query
      .mockResolvedValueOnce([{ id: 1, nom: 'Paludisme grave', slug: 'paludisme-grave', score: 12 }])
      .mockResolvedValueOnce([{ id: 2, nom_commercial: 'Artesun', dci: 'Artésunate', score: 3 }])
      .mockResolvedValueOnce([{ id: 4, dci: 'Artésunate', slug: 'artesunate' }])
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([{ id: 1, nom: 'Paludisme grave', slug: 'paludisme-grave-urgence' }])
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([{ id: 3, nom: 'Syndrome anémique', slug: 'syndrome-anemique' }])
      .mockResolvedValueOnce([]);
    const res = await request(app).get('/api/recherche?q=paludisme');
    expect(res.status).toBe(200);
    expect(res.body.total).toBe(5);
    expect(Object.keys(res.body.data)).toEqual([
      'pathologies',
      'medicaments',
      'molecules',
      'examens',
      'urgences',
      'symptomes',
      'scores',
      'syndromes',
      'glossaire',
    ]);
    expect(res.body.data.pathologies[0].score).toBeUndefined();
    expect(db.query.mock.calls[0][0]).toMatch(/MATCH\(p\.nom, p\.definition\)/);
    expect(db.query.mock.calls[1][0]).toMatch(/MATCH\(m\.nom_commercial, m\.dci, m\.indication\)/);
  });

  it('se replie sur LIKE pour les termes courts', async () => {
    for (let i = 0; i < 9; i += 1) db.query.mockResolvedValueOnce([]);
    const res = await request(app).get('/api/recherche?q=IV');
    expect(res.status).toBe(200);
    expect(db.query.mock.calls[0][0]).not.toMatch(/MATCH/);
    expect(db.query.mock.calls[0][1]).toEqual(['%IV%']);
  });
});
