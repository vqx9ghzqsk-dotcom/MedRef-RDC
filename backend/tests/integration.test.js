'use strict';

/**
 * Tests d'intégration contre un vrai MySQL 8 (exécutés en CI, ou en local avec
 * `DB_INTEGRATION=1 npm run test:integration`). La base DB_NAME est
 * entièrement recréée : son nom doit désigner une base de test (medref_rdc_test).
 */

const fs = require('fs');
const os = require('os');
const path = require('path');

const enabled = process.env.DB_INTEGRATION === '1';
const describeDb = enabled ? describe : describe.skip;

describeDb('Intégration MySQL', () => {
  let request;
  let app;
  let db;

  beforeAll(async () => {
    const config = require('../src/config');
    const { connect, isTestDatabase } = require('../db/connexion');
    const { createBaseline, migrate } = require('../db/migrations');
    const { seed } = require('../db/seed');
    if (!isTestDatabase(config.db.database)) {
      throw new Error(`Refus : « ${config.db.database} » n'est pas une base de test (DB_NAME=…_test)`);
    }
    const conn = await connect({ createIfMissing: true });
    await createBaseline(conn);
    await migrate(conn);
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
      .send({ email, password: 'Quinine-2026', nom: 'Test' });
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

  it('administration : refus d’un compte ordinaire, édition, validation et historique', async () => {
    const inscrire = async (prefix) => {
      const r = await request(app)
        .post('/api/auth/register')
        .send({ email: `${prefix}-${Date.now()}@medref.cd`, password: 'Quinine-2026', nom: `Dr ${prefix}` });
      return { id: r.body.user.id, headers: { Authorization: `Bearer ${r.body.token}` } };
    };
    const simple = await inscrire('lecteur');
    expect((await request(app).get('/api/admin/resume').set(simple.headers)).status).toBe(403);

    // Promotion en base : le jeton existant suffit car le rôle est relu à chaque requête
    const editeur = await inscrire('validateur');
    await db.query("UPDATE users SET role = 'medecin' WHERE id = ?", [editeur.id]);

    const resume = await request(app).get('/api/admin/resume').set(editeur.headers);
    expect(resume.status).toBe(200);
    const { id } = resume.body.data.pathologies.find((p) => p.slug === 'paludisme-grave');

    const avant = (await request(app).get(`/api/admin/pathologies/${id}`).set(editeur.headers)).body.data;
    expect(avant.niveaux).toHaveLength(3);
    const {
      options: _o,
      historique: _h,
      id: _i,
      slug: _s,
      valide_le: _v,
      valide_par: _p,
      updated_at: _u,
      ...payload
    } = avant;
    payload.resume = 'Résumé relu et validé.';
    payload.statut = 'valide';
    payload.principes[0].grade_detail = 'déclaration de bonne pratique';
    const save = await request(app).put(`/api/admin/pathologies/${id}`).set(editeur.headers).send(payload);
    expect(save.status).toBe(200);

    const publique = (await request(app).get('/api/pathologies/paludisme-grave')).body.data;
    expect(publique.resume).toBe('Résumé relu et validé.');
    expect(publique.validation).toMatchObject({ statut: 'valide', valide_par: 'Dr validateur' });
    expect(publique.onglets.therapeutique.principes[0].grade_detail).toBe('déclaration de bonne pratique');
    // Les collections non modifiées sont conservées à l'identique
    expect(publique.onglets.diagnostic.examens).toHaveLength(avant.examens.length);
    expect(publique.onglets.niveaux).toHaveLength(3);

    const apres = (await request(app).get(`/api/admin/pathologies/${id}`).set(editeur.headers)).body.data;
    expect(apres.historique[0]).toMatchObject({
      action: 'validation',
      auteur: 'Dr validateur',
      a_version: true,
    });
    expect(apres.revision_le).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(publique.validation.revision_le).toBe(apres.revision_le);

    // Version complète : on retrouve l'ancien résumé et on peut le restaurer
    const version = (
      await request(app).get(`/api/admin/modifications/${apres.historique[0].id}`).set(editeur.headers)
    ).body.data;
    expect(version.avant.resume).toBe(avant.resume);
    expect(version.apres.resume).toBe('Résumé relu et validé.');
    expect(version.rubriques).toEqual(expect.arrayContaining(['resume', 'principes', 'statut']));
    const restauration = await request(app)
      .put(`/api/admin/pathologies/${id}`)
      .set(editeur.headers)
      .send({ ...version.avant, statut: 'a_valider' });
    expect(restauration.status).toBe(200);
    expect((await request(app).get('/api/pathologies/paludisme-grave')).body.data.resume).toBe(avant.resume);

    // Un nouvel enregistrement identique n'ajoute pas d'entrée à l'historique
    const encore = await request(app)
      .put(`/api/admin/pathologies/${id}`)
      .set(editeur.headers)
      .send({ ...version.avant, statut: 'a_valider' });
    expect(encore.body.inchange).toBe(true);

    const mol = resume.body.data.molecules.find((m) => m.slug === 'paracetamol');
    const fichePara = (await request(app).get(`/api/admin/molecules/${mol.id}`).set(editeur.headers)).body
      .data;
    const majMol = await request(app)
      .put(`/api/admin/molecules/${mol.id}`)
      .set(editeur.headers)
      .send({
        ...Object.fromEntries(
          Object.entries(fichePara).filter(([k]) => !['id', 'dci', 'slug', 'historique'].includes(k)),
        ),
        posologies: [
          ...fichePara.posologies,
          { population: 'nouveau_ne', dose_texte: '10 mg/kg', dose_par_kg: 10 },
        ],
      });
    expect(majMol.status).toBe(200);
    const publiqueMol = (await request(app).get('/api/molecules/paracetamol')).body.data;
    expect(publiqueMol.posologies.find((p) => p.population === 'nouveau_ne')).toMatchObject({
      dose_par_kg: 10,
    });
  });

  describe('migrations et sauvegardes', () => {
    const { connect } = require('../db/connexion');
    const { migrate, status } = require('../db/migrations');
    const { backup, restore, listBackups } = require('../db/sauvegarde');
    let conn;
    let tmp;

    beforeAll(async () => {
      conn = await connect();
      tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'medref-'));
    });

    afterAll(async () => {
      await conn.query('DROP TABLE IF EXISTS zz_essai_migration');
      await conn.query("DELETE FROM schema_migrations WHERE version = '901'");
      await conn.end();
      fs.rmSync(tmp, { recursive: true, force: true });
    });

    it('applique une migration une seule fois, sans toucher aux données, et refuse sa modification', async () => {
      const dir = path.join(tmp, 'migrations');
      fs.mkdirSync(dir);
      const file = path.join(dir, '901_essai.sql');
      fs.writeFileSync(
        file,
        'CREATE TABLE zz_essai_migration (id INT PRIMARY KEY);\nALTER TABLE zz_essai_migration ADD COLUMN nom VARCHAR(20);\n',
      );
      const [[avant]] = await conn.query('SELECT COUNT(*) AS n FROM pathologies');

      expect(await migrate(conn, { dir })).toEqual(['901_essai.sql']);
      expect(await migrate(conn, { dir })).toEqual([]);
      const { appliquees, enAttente } = await status(conn, { dir });
      const versions = appliquees.map((m) => m.version);
      expect([versions[0], versions.at(-1)]).toEqual(['000', '901']);
      expect(enAttente).toHaveLength(0);
      const [[apres]] = await conn.query('SELECT COUNT(*) AS n FROM pathologies');
      expect(apres.n).toEqual(avant.n);

      fs.appendFileSync(file, 'ALTER TABLE zz_essai_migration ADD COLUMN autre INT;\n');
      await expect(migrate(conn, { dir })).rejects.toThrow(/modifiée/);
    });

    it('sauvegarde puis restaure la base à l’identique (dates, JSON, accents)', async () => {
      const compter = async () => {
        const [rows] = await conn.query(
          'SELECT (SELECT COUNT(*) FROM pathologies) AS p, (SELECT COUNT(*) FROM molecule_posologies) AS po, ' +
            '(SELECT COUNT(*) FROM users) AS u, (SELECT COUNT(*) FROM modifications) AS m',
        );
        return rows[0];
      };
      const [[fiche]] = await conn.query(
        "SELECT resume, valide_le FROM pathologies WHERE slug = 'paludisme-grave'",
      );
      await conn.query(
        `INSERT INTO prescriptions (id, user_id, patient_label, contenu, client_updated_at)
         SELECT '0e9c5f3a-1b2c-4d5e-8f90-a1b2c3d4e5f6', id, 'Bébé « K. »', ?, '2026-10-05 08:30:15.123'
         FROM users ORDER BY id LIMIT 1`,
        [JSON.stringify({ lignes: [{ dci: 'Artésunate', posologie: "2,4 mg/kg \\ l'injection\n" }] })],
      );
      const [prescriptions] = await conn.query('SELECT * FROM prescriptions ORDER BY id');
      const comptes = await compter();

      const s = await backup(conn, { dir: tmp, keep: 30 });
      expect(fs.existsSync(s.file)).toBe(true);
      expect(listBackups(tmp, s.database)).toHaveLength(1);

      await conn.query("UPDATE pathologies SET resume = 'abîmé' WHERE slug = 'paludisme-grave'");
      await conn.query('DELETE FROM molecule_posologies');
      await conn.query('DELETE FROM prescriptions');
      await restore(conn, s.file);

      expect(await compter()).toEqual(comptes);
      const [[restauree]] = await conn.query(
        "SELECT resume, valide_le FROM pathologies WHERE slug = 'paludisme-grave'",
      );
      expect(restauree).toEqual(fiche);
      expect((await conn.query('SELECT * FROM prescriptions ORDER BY id'))[0]).toEqual(prescriptions);
      expect(prescriptions.some((p) => p.patient_label === 'Bébé « K. »')).toBe(true);
      const res = await request(app).get('/api/pathologies/paludisme-grave');
      expect(res.body.data.resume).toBe(fiche.resume);
    }, 120000);
  });
});
