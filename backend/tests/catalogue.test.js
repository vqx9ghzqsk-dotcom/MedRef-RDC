'use strict';

jest.mock('../src/db', () => ({ query: jest.fn(), transaction: jest.fn(), close: jest.fn() }));

const request = require('supertest');
const db = require('../src/db');
const { createApp } = require('../src/app');

const app = createApp();
beforeEach(() => db.query.mockReset());

describe('Catalogue', () => {
  it('liste les départements', async () => {
    db.query.mockResolvedValueOnce([{ id: 1, nom: 'Pédiatrie', slug: 'pediatrie', nb_specialites: 5 }]);
    const res = await request(app).get('/api/departements');
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(1);
  });

  it('renvoie un département avec ses spécialités', async () => {
    db.query
      .mockResolvedValueOnce([{ id: 2, nom: 'Chirurgie', slug: 'chirurgie' }])
      .mockResolvedValueOnce([{ id: 10, nom: 'Chirurgie digestive', slug: 'chirurgie-chirurgie-digestive' }]);
    const res = await request(app).get('/api/departements/chirurgie');
    expect(res.status).toBe(200);
    expect(res.body.data.specialites[0].nom).toBe('Chirurgie digestive');
    expect(db.query.mock.calls[1][1]).toEqual([2]);
  });

  it('404 pour un département inconnu', async () => {
    db.query.mockResolvedValueOnce([]);
    const res = await request(app).get('/api/departements/inconnu');
    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Département introuvable');
  });

  it('renvoie une spécialité avec son fil d’Ariane et ses pathologies', async () => {
    db.query
      .mockResolvedValueOnce([
        {
          id: 5,
          nom: 'Cardiologie',
          slug: 'mi-cardio',
          departement_id: 1,
          departement_nom: 'Médecine interne',
          departement_slug: 'medecine-interne',
        },
      ])
      .mockResolvedValueOnce([{ id: 9, nom: 'Hypertension artérielle', slug: 'hypertension-arterielle' }]);
    const res = await request(app).get('/api/specialites/mi-cardio');
    expect(res.status).toBe(200);
    expect(res.body.data.departement).toEqual({ id: 1, nom: 'Médecine interne', slug: 'medecine-interne' });
    expect(res.body.data.pathologies).toHaveLength(1);
  });

  it('assemble la fiche pathologie à 5 onglets et ses blocs liés', async () => {
    db.query
      .mockResolvedValueOnce([
        {
          id: 1,
          nom: 'Paludisme grave',
          slug: 'paludisme-grave',
          resume: 'r',
          definition: 'def',
          physiopathologie: 'physio',
          diagnostic: 'diag',
          etiologies: 'etio',
          therapeutique: 'ttt',
          evolution: 'evo',
          updated_at: '2026-01-01',
          specialite_id: 3,
          specialite_nom: 'Infectiologie',
          specialite_slug: 'mi-infectio',
          departement_id: 1,
          departement_nom: 'Médecine interne',
          departement_slug: 'medecine-interne',
          statut: 'valide',
          valide_le: '2026-10-01 10:00:00',
          valide_par_nom: 'Dr Mingalu',
        },
      ])
      .mockResolvedValueOnce([{ id: 1, nom: 'Paludisme grave', slug: 'pg', categorie: 'medicale' }])
      .mockResolvedValueOnce([{ id: 1, nom: 'Fièvre', slug: 'fievre', frequence: 'tres_frequent' }])
      .mockResolvedValueOnce([
        { id: 1, dci: 'Artésunate', slug: 'artesunate', ligne: 'premiere', contexte: 'IV/IM' },
        { id: 2, dci: 'Quinine', slug: 'quinine', ligne: 'alternative', contexte: null },
      ])
      // Produits : Artesun (seul), ASAQ (association), aucun pour la quinine
      .mockResolvedValueOnce([
        {
          molecule_id: 1,
          id: 10,
          nom_commercial: 'Artesun',
          operateur: 'Fosun',
          nb_molecules: 1,
          disponible_rdc: 1,
        },
        {
          molecule_id: 1,
          id: 11,
          nom_commercial: 'ASAQ',
          operateur: 'Sanofi',
          nb_molecules: 2,
          disponible_rdc: 0,
        },
      ])
      .mockResolvedValueOnce([{ id: 1, nom: 'Glasgow', slug: 'glasgow', code: 'glasgow' }])
      .mockResolvedValueOnce([{ id: 1, titre: 'WHO', niveau: 1 }])
      .mockResolvedValueOnce([
        {
          id: 3,
          nom: 'TDR',
          slug: 'tdr-paludisme',
          type: 'biologie',
          categorie: 'confirmation',
          interpretation: 'Positif',
        },
      ])
      .mockResolvedValueOnce([
        { id: 1, nom: 'Méningite', elements_distinctifs: 'LCR', fiche_slug: 'meningite-bacterienne' },
        { id: 2, nom: 'Fièvre typhoïde', elements_distinctifs: 'Hémocultures', fiche_slug: null },
      ])
      .mockResolvedValueOnce([
        {
          id: 1,
          ordre: 1,
          titre: 'Artésunate sans délai',
          objectif: 'o',
          details: 'd',
          grade_force: 'forte',
          grade_detail: 'certitude des preuves élevée',
          grade_source: 'OMS',
        },
      ])
      .mockResolvedValueOnce([
        {
          id: 4,
          ordre: 1,
          nom: 'IRA',
          description: 'desc',
          traitement: 'dialyse',
          surveillance_clinique: 'diurèse',
          surveillance_paraclinique: 'créatinine',
          fiche_slug: 'insuffisance-renale-aigue',
          fiche_nom: 'Insuffisance rénale aiguë',
        },
      ])
      .mockResolvedValueOnce([
        {
          niveau: 'centre_sante',
          prise_en_charge: 'Artésunate rectal',
          criteres_transfert: 'Tout cas grave',
        },
      ]);
    const res = await request(app).get('/api/pathologies/paludisme-grave');
    expect(res.status).toBe(200);
    const fiche = res.body.data;
    expect(Object.keys(fiche.onglets)).toEqual([
      'definition',
      'diagnostic',
      'etiologies',
      'therapeutique',
      'niveaux',
      'evolution',
    ]);
    expect(fiche.validation).toEqual({
      statut: 'valide',
      valide_le: '2026-10-01 10:00:00',
      valide_par: 'Dr Mingalu',
    });
    expect(fiche.onglets.niveaux[0]).toMatchObject({
      niveau: 'centre_sante',
      criteres_transfert: 'Tout cas grave',
    });
    expect(fiche.onglets.therapeutique.principes[0]).toMatchObject({
      grade_force: 'forte',
      grade_source: 'OMS',
    });
    expect(db.query.mock.calls[0][0]).toMatch(/LEFT JOIN users v ON v\.id = p\.valide_par/);
    expect(fiche.onglets.definition).toEqual({ definition: 'def', physiopathologie: 'physio' });
    expect(fiche.departement.slug).toBe('medecine-interne');
    expect(fiche.urgences).toHaveLength(1);
    expect(fiche.symptomes[0].frequence).toBe('tres_frequent');
    expect(fiche.molecules[0].ligne).toBe('premiere');
    expect(fiche.scores[0].code).toBe('glasgow');
    expect(fiche.sources[0].niveau).toBe(1);

    const { diagnostic, therapeutique, evolution } = fiche.onglets;
    expect(diagnostic.clinique).toBe('diag');
    expect(diagnostic.examens[0]).toMatchObject({ categorie: 'confirmation', interpretation: 'Positif' });
    expect(diagnostic.scores).toHaveLength(1);
    expect(diagnostic.differentiels.map((d) => d.fiche)).toEqual([{ slug: 'meningite-bacterienne' }, null]);

    expect(therapeutique.principes[0].titre).toBe('Artésunate sans délai');
    expect(therapeutique.notes).toBe('ttt');
    const [artesunate, quinine] = therapeutique.molecules;
    expect(artesunate.produits).toEqual([
      expect.objectContaining({ id: 10, association: false, disponible_rdc: true }),
      expect.objectContaining({ id: 11, association: true, disponible_rdc: false }),
    ]);
    expect(artesunate.produits[0]).not.toHaveProperty('molecule_id');
    expect(quinine.produits).toEqual([]);
    expect(therapeutique.complications[0]).toEqual({
      id: 4,
      nom: 'IRA',
      description: 'desc',
      traitement: 'dialyse',
      fiche: { slug: 'insuffisance-renale-aigue', nom: 'Insuffisance rénale aiguë' },
    });

    expect(evolution.texte).toBe('evo');
    expect(evolution.complications[0]).toMatchObject({
      surveillance_clinique: 'diurèse',
      surveillance_paraclinique: 'créatinine',
    });
  });

  it('404 pour une pathologie inconnue', async () => {
    db.query.mockResolvedValueOnce([]);
    const res = await request(app).get('/api/pathologies/xyz');
    expect(res.status).toBe(404);
  });
});

describe('Urgences / Symptômes / Scores', () => {
  it('liste les urgences en ordre alphabétique (ORDER BY nom)', async () => {
    db.query.mockResolvedValueOnce([]);
    await request(app).get('/api/urgences');
    expect(db.query.mock.calls[0][0]).toMatch(/ORDER BY u\.nom/);
  });

  it('filtre les urgences par catégorie', async () => {
    db.query.mockResolvedValueOnce([]);
    const res = await request(app).get('/api/urgences?categorie=pediatrique');
    expect(res.status).toBe(200);
    expect(db.query.mock.calls[0][1]).toEqual(['pediatrique']);
  });

  it('refuse une catégorie inconnue', async () => {
    const res = await request(app).get('/api/urgences?categorie=autre');
    expect(res.status).toBe(400);
  });

  it('renvoie une urgence avec ses pathologies cliquables', async () => {
    db.query
      .mockResolvedValueOnce([{ id: 4, nom: 'Éclampsie', slug: 'eclampsie' }])
      .mockResolvedValueOnce([{ id: 3, nom: 'Pré-éclampsie sévère', slug: 'pre-eclampsie-severe' }]);
    const res = await request(app).get('/api/urgences/eclampsie');
    expect(res.body.data.pathologies[0].slug).toBe('pre-eclampsie-severe');
  });

  it('trie les pathologies d’un symptôme par fréquence', async () => {
    db.query.mockResolvedValueOnce([{ id: 1, nom: 'Fièvre', slug: 'fievre' }]).mockResolvedValueOnce([]);
    const res = await request(app).get('/api/symptomes/fievre');
    expect(res.status).toBe(200);
    expect(db.query.mock.calls[1][0]).toMatch(
      /FIELD\(ps\.frequence, 'tres_frequent', 'frequent', 'occasionnel', 'rare'\)/,
    );
  });

  it('renvoie un score avec ses pathologies liées', async () => {
    db.query
      .mockResolvedValueOnce([{ id: 2, nom: 'Glasgow', slug: 'glasgow', code: 'glasgow' }])
      .mockResolvedValueOnce([{ id: 1, nom: 'Paludisme grave' }]);
    const res = await request(app).get('/api/scores/glasgow');
    expect(res.body.data.code).toBe('glasgow');
    expect(res.body.data.pathologies).toHaveLength(1);
  });
});

describe('Médicaments et sources', () => {
  it('applique les filtres opérateur, classe et molécule (seule ou en association)', async () => {
    db.query.mockResolvedValueOnce([]);
    await request(app).get('/api/medicaments?operateur=2&classe=3&molecule=Artésunate');
    const [sql, params] = db.query.mock.calls[0];
    expect(sql).toMatch(/m\.operateur_id = \?/);
    expect(sql).toMatch(/mo\.classe_id = \?/);
    expect(sql).toMatch(/mo\.dci = \?/);
    expect(sql).toMatch(/medicament_molecules/);
    expect(params).toEqual([2, 3, 'Artésunate']);
  });

  it('ignore un filtre non numérique', async () => {
    db.query.mockResolvedValueOnce([]);
    await request(app).get('/api/medicaments?operateur=abc');
    expect(db.query.mock.calls[0][1]).toEqual([]);
  });

  it('renvoie la fiche produit : composition, pathologies dédoublonnées, même composition', async () => {
    db.query
      .mockResolvedValueOnce([
        { id: 4, nom_commercial: 'Coartem', dci: 'Artéméther + Luméfantrine', disponible_rdc: 1 },
      ])
      .mockResolvedValueOnce([
        { id: 2, dci: 'Artéméther', slug: 'artemether', dosage: '20 mg', mecanisme: 'endoperoxyde' },
        { id: 3, dci: 'Luméfantrine', slug: 'lumefantrine', dosage: '120 mg', mecanisme: 'hème' },
      ])
      // Deux molécules liées à la même pathologie : on garde la meilleure ligne
      .mockResolvedValueOnce([
        { id: 9, nom: 'Paludisme simple', slug: 'paludisme-simple', ligne: 'premiere' },
        { id: 9, nom: 'Paludisme simple', slug: 'paludisme-simple', ligne: 'adjuvant' },
        { id: 1, nom: 'Paludisme grave', slug: 'paludisme-grave', ligne: 'adjuvant' },
      ])
      .mockResolvedValueOnce([{ id: 5, nom_commercial: 'Coartem Dispersible', operateur: 'Novartis' }]);
    const res = await request(app).get('/api/medicaments/4');
    expect(res.status).toBe(200);
    const m = res.body.data;
    expect(m.disponible_rdc).toBe(true);
    expect(m.association).toBe(true);
    expect(m.composition.map((c) => c.dci)).toEqual(['Artéméther', 'Luméfantrine']);
    expect(m.pathologies).toEqual([
      expect.objectContaining({ slug: 'paludisme-grave', ligne: 'adjuvant' }),
      expect.objectContaining({ slug: 'paludisme-simple', ligne: 'premiere' }),
    ]);
    expect(db.query.mock.calls[3][1]).toEqual(['Artéméther + Luméfantrine', 4]);
  });

  it('renvoie les filtres disponibles (molécules issues du référentiel)', async () => {
    db.query
      .mockResolvedValueOnce([{ id: 1, nom: 'Novartis' }])
      .mockResolvedValueOnce([{ id: 1, nom: 'Antipaludiques' }])
      .mockResolvedValueOnce([{ dci: 'Artésunate' }, { dci: 'Quinine' }]);
    const res = await request(app).get('/api/medicaments/filtres');
    expect(res.body.data.molecules).toEqual(['Artésunate', 'Quinine']);
    expect(db.query.mock.calls[2][0]).toMatch(/FROM molecules/);
  });

  it('renvoie une molécule avec ses produits (seule ou en association) et ses pathologies', async () => {
    db.query
      .mockResolvedValueOnce([{ id: 1, dci: 'Artésunate', slug: 'artesunate', mecanisme: 'endoperoxyde' }])
      .mockResolvedValueOnce([
        { id: 10, nom_commercial: 'Artesun', nb_molecules: 1, disponible_rdc: 1 },
        { id: 11, nom_commercial: 'ASAQ', nb_molecules: 2, disponible_rdc: 0 },
      ])
      .mockResolvedValueOnce([{ id: 1, nom: 'Paludisme grave', slug: 'paludisme-grave', ligne: 'premiere' }])
      // DECIMAL renvoyés en chaîne par mysql2 : convertis en nombres
      .mockResolvedValueOnce([
        {
          id: 5,
          molecule_id: 1,
          population: 'enfant',
          dose_texte: '3 mg/kg',
          dose_par_kg: '3.000',
          dose_max: null,
        },
      ]);
    const res = await request(app).get('/api/molecules/artesunate');
    expect(res.status).toBe(200);
    expect(res.body.data.produits.map((p) => p.association)).toEqual([false, true]);
    expect(res.body.data.produits[0]).not.toHaveProperty('nb_molecules');
    expect(res.body.data.pathologies).toHaveLength(1);
    expect(res.body.data.posologies).toEqual([
      { id: 5, population: 'enfant', dose_texte: '3 mg/kg', dose_par_kg: 3, dose_max: null },
    ]);
  });

  it('404 pour une molécule inconnue', async () => {
    db.query.mockResolvedValueOnce([]);
    const res = await request(app).get('/api/molecules/inconnue');
    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Molécule introuvable');
  });

  it('renvoie un examen avec son interprétation dans chaque pathologie', async () => {
    db.query
      .mockResolvedValueOnce([{ id: 3, nom: 'TDR', slug: 'tdr-paludisme', valeurs_normales: 'Négatif' }])
      .mockResolvedValueOnce([
        {
          id: 1,
          nom: 'Paludisme grave',
          slug: 'paludisme-grave',
          categorie: 'confirmation',
          interpretation: 'Positif',
        },
      ]);
    const res = await request(app).get('/api/examens/tdr-paludisme');
    expect(res.status).toBe(200);
    expect(res.body.data.valeurs_normales).toBe('Négatif');
    expect(res.body.data.pathologies[0].categorie).toBe('confirmation');
    expect(db.query.mock.calls[1][1]).toEqual([3]);
  });

  it('filtre les sources globales', async () => {
    db.query.mockResolvedValueOnce([]);
    await request(app).get('/api/sources?scope=global');
    expect(db.query.mock.calls[0][0]).toMatch(/so\.departement_id IS NULL/);
  });

  it('filtre les sources par pathologie et niveau', async () => {
    db.query.mockResolvedValueOnce([]);
    await request(app).get('/api/sources?scope=pathologie&pathologie=paludisme-grave&niveau=1');
    const [sql, params] = db.query.mock.calls[0];
    expect(sql).toMatch(/JOIN pathologie_sources/);
    expect(params).toEqual(['paludisme-grave', 1]);
  });

  it('exige le paramètre département', async () => {
    const res = await request(app).get('/api/sources?scope=departement');
    expect(res.status).toBe(400);
  });
});
