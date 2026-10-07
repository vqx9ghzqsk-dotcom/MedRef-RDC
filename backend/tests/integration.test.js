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

  it('formes cliniques, sémiologie, syndromes, glossaire et signes d’alerte', async () => {
    const data = require('../db/seed-data');
    // Toutes les fiches ont une sémiologie par forme
    for (const p of data.pathologies) {
      const f = (await request(app).get(`/api/pathologies/${p.slug}`)).body.data;
      expect(f.onglets.diagnostic.formes.length).toBeGreaterThan(0);
      expect(f.urgences.every((u) => u.signes_alerte)).toBe(true);
    }
    const { onglets, urgences } = (await request(app).get('/api/pathologies/meningite-bacterienne')).body
      .data;
    expect(onglets.definition.formes.map((f) => f.type)).toContain('gravite');
    const commune = onglets.diagnostic.formes[0];
    expect(commune.signes_physiques).toMatch(/signe de Kernig/);
    expect(commune.syndromes.map((s) => s.slug)).toContain('syndrome-meninge');
    expect(commune.examens[0].slug).toBe('lcr');
    expect(onglets.etiologies.formes.length).toBe(onglets.diagnostic.formes.length);
    expect(urgences.find((u) => u.slug === 'choc-septique').signes_alerte).toMatch(/Purpura/);

    const syndrome = (await request(app).get('/api/syndromes/syndrome-meninge')).body.data;
    expect(syndrome.symptomes.map((s) => s.nom)).toContain('Raideur de nuque');
    expect(syndrome.pathologies.map((p) => p.slug)).toContain('meningite-bacterienne');
    expect(syndrome.termes.map((t) => t.terme)).toContain('Signe de Kernig');
    const glossaire = (await request(app).get('/api/glossaire')).body.data;
    expect(glossaire.find((t) => t.terme === 'Signe de Kernig')).toMatchObject({
      variantes: ['Kernig'],
      syndrome: { slug: 'syndrome-meninge' },
    });
    const recherche = (await request(app).get('/api/recherche?q=kernig')).body.data;
    expect(recherche.glossaire.map((t) => t.terme)).toContain('Signe de Kernig');

    // Enrichissement d'une base en service : rien n'est ajouté deux fois
    const { connect } = require('../db/connexion');
    const { chargerSemiologie } = require('../db/semiologie');
    const conn = await connect();
    const compte = await chargerSemiologie(conn, data);
    await conn.end();
    expect(compte).toMatchObject({ syndromes: 0, glossaire: 0, formes: 0, signes_alerte: 0 });
    expect(compte.fiches_conservees).toBe(data.pathologies.length);
  });

  it('administration des formes, des signes d’alerte, du glossaire et des syndromes', async () => {
    const r = await request(app)
      .post('/api/auth/register')
      .send({ email: `semio-${Date.now()}@medref.cd`, password: 'Quinine-2026', nom: 'Dr Sémiologie' });
    await db.query("UPDATE users SET role = 'admin' WHERE id = ?", [r.body.user.id]);
    const headers = { Authorization: `Bearer ${r.body.token}` };
    const resume = (await request(app).get('/api/admin/resume').set(headers)).body.data;
    const { id } = resume.pathologies.find((p) => p.slug === 'cholera');

    const fiche = (await request(app).get(`/api/admin/pathologies/${id}`).set(headers)).body.data;
    expect(fiche.options.syndromes.length).toBeGreaterThan(30);
    const { options: _o, historique: _h, ...payload } = fiche;
    payload.formes[0].signes_physiques += '\n- Crampes des mollets';
    payload.formes.push({
      nom: 'Forme de l’enfant',
      type: 'terrain',
      syndromes: ['syndrome-meninge-inconnu'],
    });
    payload.urgences[0].signes_alerte = 'Selles « eau de riz », léthargie';
    const refus = await request(app).put(`/api/admin/pathologies/${id}`).set(headers).send(payload);
    expect(refus.status).toBe(400);
    expect(refus.body.details['formes[3].syndromes[0]']).toBe('Syndrome inconnu');

    payload.formes[3].syndromes = ['syndrome-de-deshydratation-extracellulaire'];
    payload.formes[3].examens = [{ examen_slug: 'ionogramme', interpretation: 'Hypokaliémie' }];
    expect((await request(app).put(`/api/admin/pathologies/${id}`).set(headers).send(payload)).status).toBe(
      200,
    );
    const publique = (await request(app).get('/api/pathologies/cholera')).body.data;
    expect(publique.onglets.diagnostic.formes).toHaveLength(4);
    expect(publique.onglets.diagnostic.formes[3].examens[0].slug).toBe('ionogramme');
    expect(publique.urgences[0].signes_alerte).toBe('Selles « eau de riz », léthargie');
    const hist = (await request(app).get(`/api/admin/pathologies/${id}`).set(headers)).body.data.historique;
    expect(hist[0].resume).toMatch(/formes cliniques/);

    // Glossaire : création, modification, doublon refusé
    const cree = await request(app).post('/api/admin/glossaire').set(headers).send({
      terme: 'Signe de Murphy',
      definition: 'Arrêt de l’inspiration à la palpation de la vésicule.',
    });
    expect(cree.status).toBe(201);
    const maj = await request(app)
      .put(`/api/admin/glossaire/${cree.body.id}`)
      .set(headers)
      .send({ terme: 'Signe de Murphy', definition: 'Inspiration bloquée.', variantes: ['Murphy'] });
    expect(maj.status).toBe(200);
    const doublon = await request(app)
      .post('/api/admin/glossaire')
      .set(headers)
      .send({ terme: 'Signe de Murphy', definition: 'x' });
    expect(doublon.status).toBe(409);
    expect(
      (await request(app).get('/api/glossaire')).body.data.find((t) => t.terme === 'Signe de Murphy')
        .variantes,
    ).toEqual(['Murphy']);

    // Syndrome : le slug reste stable quand le nom change
    const semio = (await request(app).get('/api/admin/semiologie').set(headers)).body.data;
    const meninge = semio.syndromes.find((s) => s.slug === 'syndrome-meninge');
    const avantSyndrome = (await request(app).get(`/api/admin/syndromes/${meninge.id}`).set(headers)).body
      .data;
    const majSyndrome = await request(app)
      .put(`/api/admin/syndromes/${meninge.id}`)
      .set(headers)
      .send({ ...avantSyndrome, nom: 'Syndrome méningé (irritation méningée)', symptomes: ['Céphalées'] });
    expect(majSyndrome.status).toBe(200);
    const page = (await request(app).get('/api/syndromes/syndrome-meninge')).body.data;
    expect(page.nom).toBe('Syndrome méningé (irritation méningée)');
    expect(page.symptomes.map((s) => s.nom)).toEqual(['Céphalées']);
  });

  it('catalogues des firmes : produits avec photo sur la fiche molécule, seuls et en association', async () => {
    const mol = (await request(app).get('/api/molecules/paracetamol')).body.data;
    const firmes = new Set(mol.produits.map((p) => p.operateur));
    for (const f of ['Shalina Healthcare', 'Denk Pharma', 'Arauphar']) expect(firmes).toContain(f);
    const seul = mol.produits.find((p) => p.operateur === 'Shalina Healthcare' && !p.association);
    const assoc = mol.produits.find((p) => p.nom_commercial === 'Dologan Denk');
    expect(seul.photo_url).toMatch(/^\/medias\/produits\/shalina-healthcare\/.+\.webp$/);
    expect(assoc).toMatchObject({ association: true });
    expect(mol.produits.some((p) => p.pediatrique)).toBe(true);

    // La photo est servie, avec un cache long
    const photo = await request(app).get(seul.photo_url);
    expect(photo.status).toBe(200);
    expect(photo.headers['content-type']).toBe('image/webp');
    expect(photo.headers['cache-control']).toMatch(/max-age=2592000/);
    expect((await request(app).get(seul.photo_url.replace('.webp', '-mini.webp'))).status).toBe(200);
    expect((await request(app).get('/medias/produits/inconnu.webp')).status).toBe(404);

    // Fiche du produit : rubriques du catalogue et molécules liées
    const fiche = (await request(app).get(`/api/medicaments/${assoc.id}`)).body.data;
    expect(fiche).toMatchObject({ operateur: 'Denk Pharma', association: true, liaison: 'partielle' });
    expect(fiche.mecanisme).toBeTruthy();
    expect(fiche.sources_text).toMatch(/à vérifier sur la notice/);
    expect(fiche.composition.map((c) => c.slug)).toEqual(
      expect.arrayContaining(['paracetamol', 'ibuprofene']),
    );

    // Onglet Thérapeutique d'une pathologie : produits avec photo sous chaque molécule
    const palu = (await request(app).get('/api/pathologies/paludisme-simple')).body.data;
    const produitsPalu = palu.onglets.therapeutique.molecules.flatMap((m) => m.produits);
    expect(produitsPalu.some((p) => p.photo_url && p.operateur === 'Shalina Healthcare')).toBe(true);
  });

  it('administration du catalogue : liaisons, création de molécule et rapprochement', async () => {
    const r = await request(app)
      .post('/api/auth/register')
      .send({ email: `catalogue-${Date.now()}@medref.cd`, password: 'Quinine-2026', nom: 'Dr Catalogue' });
    await db.query("UPDATE users SET role = 'admin' WHERE id = ?", [r.body.user.id]);
    const headers = { Authorization: `Bearer ${r.body.token}` };

    const cat = (await request(app).get('/api/admin/catalogue').set(headers)).body.data;
    expect(cat.firmes).toHaveLength(6);
    expect(cat.compteurs.aucune).toBeGreaterThan(100);
    const avant = cat.compteurs.aucune;

    // Créer la molécule clotrimazole relie automatiquement les produits qui en contiennent
    const cree = await request(app)
      .post('/api/admin/molecules')
      .set(headers)
      .send({ dci: 'Clotrimazole', classe: 'Antifongiques' });
    expect(cree.status).toBe(201);
    expect(cree.body.produits_lies).toBeGreaterThan(3);
    const apres = (await request(app).get('/api/admin/catalogue').set(headers)).body.data;
    expect(apres.compteurs.aucune).toBeLessThan(avant);
    const clotri = (await request(app).get('/api/molecules/clotrimazole')).body.data;
    expect(clotri.produits.length).toBe(cree.body.produits_lies);
    expect(
      (await request(app).post('/api/admin/molecules').set(headers).send({ dci: 'Clotrimazole' })).status,
    ).toBe(409);

    // Lien manuel depuis la fiche molécule, puis retrait
    const para = (await request(app).get('/api/admin/resume').set(headers)).body.data.molecules.find(
      (m) => m.slug === 'paracetamol',
    );
    const { suggestions, lies } = (
      await request(app).get(`/api/admin/molecules/${para.id}/produits`).set(headers)
    ).body.data;
    expect(lies.length).toBeGreaterThan(20);
    const libre = (await request(app).get('/api/admin/catalogue?liaison=aucune&q=Tramadol').set(headers)).body
      .data.produits[0];
    expect(
      (
        await request(app)
          .post(`/api/admin/molecules/${para.id}/produits`)
          .set(headers)
          .send({ medicament_id: libre.id })
      ).status,
    ).toBe(201);
    const lie = (await request(app).get(`/api/admin/medicaments/${libre.id}`).set(headers)).body.data;
    expect(lie.molecules.map((m) => m.molecule_slug)).toContain('paracetamol');
    expect(lie.historique[0].resume).toMatch(/Lié à Paracétamol/);
    expect(
      (await request(app).delete(`/api/admin/molecules/${para.id}/produits/${libre.id}`).set(headers)).status,
    ).toBe(204);
    expect(Array.isArray(suggestions)).toBe(true);

    // Édition des molécules d'un produit : liaison vérifiée
    const { options: _o, historique: _h, ...produit } = lie;
    const maj = await request(app)
      .put(`/api/admin/medicaments/${libre.id}`)
      .set(headers)
      .send({
        ...produit,
        nb_composants: 1,
        molecules: [{ molecule_slug: 'paracetamol', dosage: '500 mg' }],
      });
    expect(maj.status).toBe(200);
    expect(
      (await request(app).get(`/api/admin/medicaments/${libre.id}`).set(headers)).body.data.liaison,
    ).toBe('verifiee');
    const refus = await request(app)
      .put(`/api/admin/medicaments/${libre.id}`)
      .set(headers)
      .send({ ...produit, photo_url: '/autre/chemin.webp' });
    expect(refus.status).toBe(400);
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
