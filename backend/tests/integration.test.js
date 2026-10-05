'use strict';

/**
 * Tests d'intégration contre un vrai MySQL 8 (exécutés en CI, ou en local avec
 * `DB_INTEGRATION=1 npm run test:integration`). ATTENTION : la base DB_NAME est
 * entièrement recréée — utilisez une base dédiée aux tests.
 */

const fs = require('fs');
const path = require('path');

const enabled = process.env.DB_INTEGRATION === '1';
const describeDb = enabled ? describe : describe.skip;

describeDb('Intégration MySQL', () => {
  let request;
  let app;
  let db;

  beforeAll(async () => {
    const mysql = require('mysql2/promise');
    const config = require('../src/config');
    const { seed } = require('../db/seed');
    const conn = await mysql.createConnection({
      host: config.db.host,
      port: config.db.port,
      user: config.db.user,
      password: config.db.password,
      multipleStatements: true,
    });
    await conn.query(`CREATE DATABASE IF NOT EXISTS \`${config.db.database}\` CHARACTER SET utf8mb4`);
    await conn.query(`USE \`${config.db.database}\``);
    await conn.query(fs.readFileSync(path.join(__dirname, '..', 'db', 'schema.sql'), 'utf8'));
    await seed(conn);
    await conn.end();

    request = require('supertest');
    app = require('../src/app').createApp();
    db = require('../src/db');
  }, 60000);

  afterAll(async () => {
    if (db) await db.close();
  });

  it('parcourt Département → Spécialité → Pathologie', async () => {
    const deps = await request(app).get('/api/departements');
    expect(deps.body.data).toHaveLength(5);
    const mi = await request(app).get('/api/departements/medecine-interne');
    const infectio = mi.body.data.specialites.find((s) => s.nom === 'Infectiologie');
    expect(infectio.nb_pathologies).toBe(5);
    const sp = await request(app).get(`/api/specialites/${infectio.slug}`);
    expect(sp.body.data.pathologies.map((p) => p.slug)).toContain('paludisme-grave');
    const fiche = await request(app).get('/api/pathologies/paludisme-grave');
    expect(fiche.status).toBe(200);
    expect(fiche.body.data.molecules[0].dci).toBe('Artésunate');
    expect(fiche.body.data.symptomes[0].frequence).toBe('tres_frequent');
  });

  it('fiche structurée : bilan, différentiels, principes, produits, complications', async () => {
    const { onglets } = (await request(app).get('/api/pathologies/paludisme-grave')).body.data;
    const tdr = onglets.diagnostic.examens.find((e) => e.slug === 'tdr-paludisme');
    expect(tdr.categorie).toBe('confirmation');
    expect(tdr.valeurs_normales).toMatch(/Négatif/);
    expect(onglets.diagnostic.differentiels.find((d) => d.fiche)?.fiche.slug).toBe('meningite-bacterienne');
    expect(onglets.therapeutique.principes.length).toBeGreaterThanOrEqual(3);
    const artesunate = onglets.therapeutique.molecules.find((m) => m.slug === 'artesunate');
    expect(artesunate.produits.some((p) => p.association)).toBe(true);
    expect(onglets.evolution.complications.every((c) => c.surveillance_clinique)).toBe(true);
    const ira = onglets.therapeutique.complications.find((c) => c.fiche);
    expect(ira.fiche.slug).toBe('insuffisance-renale-aigue');

    const coartem = await request(app).get('/api/medicaments?molecule=Luméfantrine');
    expect(coartem.body.data.map((m) => m.nom_commercial)).toContain('Coartem');
    const examen = await request(app).get('/api/examens/nfs');
    expect(examen.body.data.pathologies.length).toBeGreaterThan(5);
  });

  it('recherche plein texte avec préfixe et sans accents', async () => {
    const res = await request(app).get('/api/recherche?q=palu');
    expect(res.status).toBe(200);
    expect(res.body.data.pathologies.map((p) => p.slug)).toContain('paludisme-grave');
    const acc = await request(app).get('/api/recherche?q=artesunate');
    expect(acc.body.data.medicaments.map((m) => m.dci)).toContain('Artésunate');
  });

  it('filtre médicaments et sources', async () => {
    const f = await request(app).get('/api/medicaments/filtres');
    const anti = f.body.data.classes.find((c) => c.nom === 'Antipaludiques');
    const meds = await request(app).get(`/api/medicaments?classe=${anti.id}`);
    expect(meds.body.data.length).toBeGreaterThanOrEqual(3);
    const src = await request(app).get('/api/sources?scope=global');
    expect(src.body.data.every((s) => s.departement === null)).toBe(true);
  });

  it('inscription, connexion, synchronisation idempotente', async () => {
    const email = `test-${Date.now()}@medref.cd`;
    const reg = await request(app)
      .post('/api/auth/register')
      .send({ email, password: 'motdepasse123', nom: 'Test' });
    expect(reg.status).toBe(201);
    const auth = { Authorization: `Bearer ${reg.body.token}` };
    const body = {
      prescriptions: [
        {
          id: '3f2b8c1e-9a4d-4c7e-8b1a-2d3e4f5a6b7c',
          patient_label: 'Patient A',
          contenu: { lignes: [{ dci: 'Amlodipine', posologie: '5 mg/j' }] },
          updated_at: new Date(Date.now() - 1000).toISOString(),
        },
      ],
    };
    const a = await request(app).post('/api/prescriptions/sync').set(auth).send(body);
    expect(a.body.results[0].status).toBe('created');
    const b = await request(app).post('/api/prescriptions/sync').set(auth).send(body);
    expect(b.body.results[0].status).toBe('unchanged');
    expect(b.body.data).toHaveLength(1);
    expect(b.body.data[0].contenu.lignes[0].dci).toBe('Amlodipine');
    const del = await request(app).delete(`/api/prescriptions/${body.prescriptions[0].id}`).set(auth);
    expect(del.status).toBe(204);
    const list = await request(app).get('/api/prescriptions').set(auth);
    expect(list.body.data).toHaveLength(0);
  });
});
