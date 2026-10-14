'use strict';

jest.mock('../src/db', () => ({ query: jest.fn(), transaction: jest.fn(), close: jest.fn() }));

const request = require('supertest');
const db = require('../src/db');
const { createApp } = require('../src/app');
const { tokenFor } = require('./helpers');

const app = createApp();
const auth = (role = 'admin') => ({ Authorization: `Bearer ${tokenFor(7, role)}` });

/**
 * Connexion de transaction factice : SELECT … FOR UPDATE trouve l'entité ; la lecture
 * de l'état (avant / après) renvoie `etats` dans l'ordre ; collections vides ; le reste réussit.
 */
function fakeTransaction({ exists = true, failOn, etats, dernierAuteur } = {}) {
  let n = 0;
  const suite = etats || [
    { nom: 'Avant', statut: 'a_valider' },
    { nom: 'Après', statut: 'a_valider' },
  ];
  const conn = {
    execute: jest.fn(async (sql) => {
      if (failOn && sql.includes(failOn)) throw Object.assign(new Error('dup'), { code: 'ER_DUP_ENTRY' });
      if (sql.includes('FOR UPDATE')) return [exists ? [{ id: 3 }] : []];
      if (sql.includes('FROM modifications')) return [dernierAuteur ? [{ user_id: dernierAuteur }] : []];
      if (/^\s*SELECT/.test(sql) && /WHERE id = \?/.test(sql)) {
        const etat = suite[Math.min(n, suite.length - 1)];
        n += 1;
        return [[etat]];
      }
      if (/^\s*SELECT/.test(sql)) return [[]];
      return [{ affectedRows: 1 }];
    }),
  };
  db.transaction.mockImplementation(async (fn) => fn(conn));
  return conn;
}

/** Corps minimal valide pour l'enregistrement d'une fiche. */
const fiche = (patch = {}) => ({
  nom: 'Paludisme grave',
  resume: 'Urgence',
  statut: 'a_valider',
  definition: 'def',
  principes: [{ titre: 'Artésunate', grade_force: 'forte', grade_source: 'OMS' }],
  complications: [{ nom: 'IRA', fiche_slug: 'insuffisance-renale-aigue' }],
  niveaux: [
    { niveau: 'centre_sante', prise_en_charge: 'Dose pré-transfert', criteres_transfert: 'Toujours' },
  ],
  examens: [{ examen_slug: 'tdr-paludisme', categorie: 'confirmation', interpretation: 'Positif' }],
  differentiels: [{ fiche_slug: null, nom: 'Fièvre typhoïde', elements_distinctifs: 'Hémocultures' }],
  ...patch,
});

/** Mocks des lectures précédant un enregistrement de fiche : rôle, examens, fiches. */
const mockRefs = (role = 'admin') =>
  db.query
    .mockResolvedValueOnce([{ id: 7, nom: 'Dr Test', role }])
    .mockResolvedValueOnce([{ id: 1, slug: 'tdr-paludisme' }])
    .mockResolvedValueOnce([{ id: 9, slug: 'insuffisance-renale-aigue', nom: 'Insuffisance rénale aiguë' }])
    .mockResolvedValueOnce([{ id: 5, slug: 'syndrome-meninge' }])
    .mockResolvedValueOnce([{ id: 2, slug: 'paludisme-grave-urgence' }]);

beforeEach(() => {
  db.query.mockReset();
  db.transaction.mockReset();
});

describe('Accès à l’administration', () => {
  it('401 sans jeton', async () => {
    const res = await request(app).get('/api/admin/resume');
    expect(res.status).toBe(401);
    expect(db.query).not.toHaveBeenCalled();
  });

  it('403 si le rôle en base n’est pas éditeur (même avec un jeton « admin » ancien)', async () => {
    db.query.mockResolvedValueOnce([{ id: 7, nom: 'Ex-admin', role: 'user' }]);
    const res = await request(app).get('/api/admin/resume').set(auth('admin'));
    expect(res.status).toBe(403);
    expect(db.query.mock.calls[0]).toEqual([
      'SELECT id, nom, role, token_version FROM users WHERE id = ?',
      [7],
    ]);
  });

  it('le rôle « medecin » accède au tableau de bord', async () => {
    db.query
      .mockResolvedValueOnce([{ id: 7, nom: 'Dr Test', role: 'medecin' }])
      .mockResolvedValueOnce([
        { id: 1, nom: 'A', statut: 'valide', a_revoir: 1 },
        { id: 2, nom: 'B', statut: 'a_valider', a_revoir: 0 },
      ])
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([{ id: 4, nom_commercial: 'Coartem', disponible_rdc: 1 }])
      .mockResolvedValueOnce([]);
    const res = await request(app).get('/api/admin/resume').set(auth('medecin'));
    expect(res.status).toBe(200);
    expect(res.body.data.statuts).toEqual({ brouillon: 0, a_valider: 1, valide: 1, a_revoir: 1 });
    expect(res.body.data.pathologies[0].a_revoir).toBe(true);
    expect(res.body.data.parametres).toEqual({ double_validation: false, revision_mois: 24 });
    expect(res.body.data.medicaments[0].disponible_rdc).toBe(true);
  });
});

describe('PUT /api/admin/pathologies/:id', () => {
  it('refuse les données invalides avec le détail par champ', async () => {
    mockRefs();
    const res = await request(app)
      .put('/api/admin/pathologies/3')
      .set(auth())
      .send(
        fiche({
          nom: '',
          statut: 'publie',
          principes: [{ titre: '', grade_force: 'tres_forte' }],
          examens: [
            { examen_slug: 'inconnu', categorie: 'confirmation' },
            { examen_slug: 'tdr-paludisme', categorie: 'confirmation' },
            { examen_slug: 'tdr-paludisme', categorie: 'confirmation' },
          ],
          complications: [{ nom: 'IRA', fiche_slug: 'fiche-inexistante' }],
        }),
      );
    expect(res.status).toBe(400);
    expect(res.body.details).toMatchObject({
      nom: 'Champ requis',
      statut: 'Valeur non autorisée',
      'principes[0].titre': 'Champ requis',
      'principes[0].grade_force': 'Valeur non autorisée',
      'examens[0].examen_slug': 'Examen inconnu',
      'examens[2].categorie': 'Examen déjà présent dans cette catégorie',
      'complications[0].fiche_slug': 'Fiche inconnue',
    });
    expect(db.transaction).not.toHaveBeenCalled();
  });

  it('enregistre la fiche et ses collections dans une transaction, trace la modification', async () => {
    mockRefs();
    const conn = fakeTransaction();
    const res = await request(app).put('/api/admin/pathologies/3').set(auth()).send(fiche());
    expect(res.status).toBe(200);
    const sqls = conn.execute.mock.calls.map(([sql]) => sql.replace(/\s+/g, ' ').trim());
    expect(sqls[0]).toMatch(/FOR UPDATE/);
    const update = sqls.findIndex((q) => q.startsWith('UPDATE pathologies'));
    expect(sqls[update]).toMatch(/valide_le = NULL, revision_le = NULL/);
    // Non validée : pas de validateur
    expect(conn.execute.mock.calls[update][1].slice(-2)).toEqual([null, 3]);
    for (const table of [
      'pathologie_principes',
      'complications',
      'pathologie_niveaux',
      'pathologie_examens',
      'pathologie_differentiels',
    ]) {
      expect(sqls.some((s) => s.startsWith(`DELETE FROM ${table}`))).toBe(true);
      expect(sqls.some((s) => s.startsWith(`INSERT INTO ${table}`))).toBe(true);
    }
    const complication = conn.execute.mock.calls.find(([sql]) => sql.startsWith('INSERT INTO complications'));
    expect(complication[1].at(-1)).toBe(9); // fiche liée résolue par son slug
    const log = conn.execute.mock.calls.at(-1);
    expect(log[0]).toMatch(/INSERT INTO modifications/);
    expect(log[1].slice(0, 5)).toEqual([
      7,
      'pathologie',
      3,
      'modification',
      'Fiche modifiée : nom (statut : a valider)',
    ]);
    // Versions complètes avant / après conservées
    expect(JSON.parse(log[1][5])).toMatchObject({ nom: 'Avant' });
    expect(JSON.parse(log[1][6])).toMatchObject({ nom: 'Après' });
  });

  it('la validation enregistre le validateur et la date', async () => {
    mockRefs('medecin');
    const meme = { nom: 'Paludisme grave', statut: 'a_valider' };
    const conn = fakeTransaction({ etats: [meme, { ...meme, statut: 'valide' }] });
    const res = await request(app)
      .put('/api/admin/pathologies/3')
      .set(auth('medecin'))
      .send(fiche({ statut: 'valide' }));
    expect(res.status).toBe(200);
    const [sql, params] = conn.execute.mock.calls.find(([q]) => q.includes('UPDATE pathologies'));
    expect(sql).toMatch(/valide_le = NOW\(\)/);
    // Date de révision : dans 24 mois
    expect(sql).toMatch(/revision_le = DATE_ADD\(CURDATE\(\), INTERVAL \? MONTH\)/);
    expect(params.slice(-3)).toEqual([7, 24, 3]);
    expect(conn.execute.mock.calls.at(-1)[1].slice(0, 5)).toEqual([
      7,
      'pathologie',
      3,
      'validation',
      'Fiche validée',
    ]);
  });

  it('404 si la fiche n’existe pas, 409 si le nom est déjà pris', async () => {
    mockRefs();
    fakeTransaction({ exists: false });
    expect((await request(app).put('/api/admin/pathologies/3').set(auth()).send(fiche())).status).toBe(404);

    mockRefs();
    fakeTransaction({ failOn: 'UPDATE pathologies' });
    const res = await request(app).put('/api/admin/pathologies/3').set(auth()).send(fiche());
    expect(res.status).toBe(409);
  });
});

describe('Double validation (VALIDATION_DOUBLE=1)', () => {
  const config = require('../src/config');
  beforeEach(() => {
    config.contenu.doubleValidation = true;
  });
  afterEach(() => {
    config.contenu.doubleValidation = false;
  });
  const meme = { nom: 'Paludisme grave', statut: 'a_valider' };

  it('refuse de modifier et valider dans le même enregistrement', async () => {
    mockRefs();
    fakeTransaction({ etats: [meme, { ...meme, nom: 'Autre', statut: 'valide' }] });
    const res = await request(app)
      .put('/api/admin/pathologies/3')
      .set(auth())
      .send(fiche({ statut: 'valide' }));
    expect(res.status).toBe(409);
    expect(res.body.error).toMatch(/à valider/);
  });

  it('refuse de valider la version qu’on a soi-même rédigée', async () => {
    mockRefs();
    fakeTransaction({ etats: [meme, { ...meme, statut: 'valide' }], dernierAuteur: 7 });
    const res = await request(app)
      .put('/api/admin/pathologies/3')
      .set(auth())
      .send(fiche({ statut: 'valide' }));
    expect(res.status).toBe(409);
    expect(res.body.error).toMatch(/autre relecteur/);
  });

  it('accepte la validation par un second relecteur', async () => {
    mockRefs();
    fakeTransaction({ etats: [meme, { ...meme, statut: 'valide' }], dernierAuteur: 3 });
    const res = await request(app)
      .put('/api/admin/pathologies/3')
      .set(auth())
      .send(fiche({ statut: 'valide' }));
    expect(res.status).toBe(200);
  });
});

describe('POST /api/admin/pathologies/validation (validation groupée)', () => {
  const role = (r = 'medecin') => db.query.mockResolvedValueOnce([{ id: 7, nom: 'Dr Test', role: r }]);

  /** Transaction factice : `fiches` répond au SELECT … FOR UPDATE, états minimaux ensuite. */
  function fakeValidation(fiches, { dernierAuteur } = {}) {
    const conn = {
      execute: jest.fn(async (sql) => {
        if (sql.includes('FOR UPDATE')) return [fiches];
        if (sql.includes('FROM modifications')) return [dernierAuteur ? [{ user_id: dernierAuteur }] : []];
        if (/^\s*SELECT/.test(sql) && /WHERE id = \?/.test(sql))
          return [[{ nom: 'Fiche', statut: 'a_valider' }]];
        if (/^\s*SELECT/.test(sql)) return [[]];
        return [{ affectedRows: 1 }];
      }),
    };
    db.transaction.mockImplementation(async (fn) => fn(conn));
    return conn;
  }

  it('exige la confirmation et une liste d’identifiants valide', async () => {
    role();
    let res = await request(app)
      .post('/api/admin/pathologies/validation')
      .set(auth('medecin'))
      .send({ ids: [1] });
    expect(res.status).toBe(400);
    expect(res.body.details.confirme).toBeDefined();
    role();
    res = await request(app)
      .post('/api/admin/pathologies/validation')
      .set(auth('medecin'))
      .send({ ids: ['x', -2], confirme: true });
    expect(res.status).toBe(400);
    expect(res.body.details.ids).toBeDefined();
    expect(db.transaction).not.toHaveBeenCalled();
  });

  it('refuse un utilisateur non éditeur', async () => {
    role('user');
    const res = await request(app)
      .post('/api/admin/pathologies/validation')
      .set(auth('admin'))
      .send({ ids: [1], confirme: true });
    expect(res.status).toBe(403);
  });

  it('valide les fiches « à valider », ignore les autres et trace chaque validation', async () => {
    role();
    const conn = fakeValidation([
      { id: 1, nom: 'Paludisme', statut: 'a_valider' },
      { id: 2, nom: 'Typhoïde', statut: 'valide' },
      { id: 3, nom: 'Brouillon', statut: 'brouillon' },
    ]);
    const res = await request(app)
      .post('/api/admin/pathologies/validation')
      .set(auth('medecin'))
      .send({ ids: [1, 2, 3, 4], confirme: true });
    expect(res.status).toBe(200);
    expect(res.body.validees).toEqual([{ id: 1, nom: 'Paludisme' }]);
    expect(res.body.ignorees.map((f) => [f.id, f.raison])).toEqual([
      [2, 'Déjà validée'],
      [3, 'Brouillon (fiche non terminée)'],
      [4, 'Fiche introuvable'],
    ]);
    const updates = conn.execute.mock.calls.filter(([q]) => q.includes('UPDATE pathologies'));
    expect(updates).toHaveLength(1);
    expect(updates[0][0]).toMatch(/statut = 'valide'.*valide_le = NOW\(\)/s);
    expect(updates[0][1]).toEqual([7, 24, 1]);
    const logs = conn.execute.mock.calls.filter(([q]) => q.includes('INSERT INTO modifications'));
    expect(logs).toHaveLength(1);
    expect(logs[0][1].slice(0, 5)).toEqual([
      7,
      'pathologie',
      1,
      'validation',
      'Fiche validée (validation groupée)',
    ]);
    expect(JSON.parse(logs[0][1][5]).statut).toBe('a_valider');
    expect(JSON.parse(logs[0][1][6]).statut).toBe('valide');
  });

  it('en double validation, ignore les fiches dont on a rédigé la dernière version', async () => {
    const config = require('../src/config');
    config.contenu.doubleValidation = true;
    try {
      role();
      const conn = fakeValidation([{ id: 1, nom: 'Paludisme', statut: 'a_valider' }], { dernierAuteur: 7 });
      const res = await request(app)
        .post('/api/admin/pathologies/validation')
        .set(auth('medecin'))
        .send({ ids: [1], confirme: true });
      expect(res.body.validees).toEqual([]);
      expect(res.body.ignorees[0].raison).toMatch(/dernière version/);
      expect(conn.execute.mock.calls.some(([q]) => q.includes('UPDATE pathologies'))).toBe(false);
    } finally {
      config.contenu.doubleValidation = false;
    }
  });
});

describe('Versions et enregistrements sans changement', () => {
  it('n’ajoute rien à l’historique si rien n’a changé', async () => {
    mockRefs();
    const meme = { nom: 'Paludisme grave', statut: 'a_valider' };
    const conn = fakeTransaction({ etats: [meme, meme] });
    const res = await request(app).put('/api/admin/pathologies/3').set(auth()).send(fiche());
    expect(res.body).toMatchObject({ ok: true, inchange: true });
    expect(conn.execute.mock.calls.some(([q]) => q.includes('INSERT INTO modifications'))).toBe(false);
  });

  it('renvoie une version avec les rubriques modifiées', async () => {
    db.query.mockResolvedValueOnce([{ id: 7, nom: 'Dr Test', role: 'admin' }]).mockResolvedValueOnce([
      {
        id: 12,
        entite: 'pathologie',
        avant: { nom: 'A', principes: [{ titre: 'x' }], statut: 'valide' },
        apres: { nom: 'A', principes: [{ titre: 'y' }], statut: 'a_valider' },
      },
    ]);
    const res = await request(app).get('/api/admin/modifications/12').set(auth());
    expect(res.status).toBe(200);
    expect(res.body.data.rubriques.sort()).toEqual(['principes', 'statut']);
  });
});

describe('Molécules et produits', () => {
  it('remplace les posologies d’une molécule', async () => {
    db.query.mockResolvedValueOnce([{ id: 7, nom: 'Dr Test', role: 'admin' }]);
    const conn = fakeTransaction();
    const res = await request(app)
      .put('/api/admin/molecules/3')
      .set(auth())
      .send({
        mecanisme: 'Endoperoxyde',
        posologies: [
          { population: 'enfant', dose_texte: '3 mg/kg', dose_par_kg: '3', dose_max: '', unite: '' },
          { population: 'grossesse', dose_texte: 'Posologie adulte', securite: 'autorise' },
        ],
      });
    expect(res.status).toBe(200);
    const inserts = conn.execute.mock.calls.filter(([sql]) =>
      sql.includes('INSERT INTO molecule_posologies'),
    );
    expect(inserts).toHaveLength(2);
    // dose_par_kg converti en nombre, dose_max vide → NULL, unité par défaut « mg »
    expect(inserts[0][1].slice(5, 8)).toEqual([3, null, 'mg']);
  });

  it('valide la population et la dose des posologies', async () => {
    db.query.mockResolvedValueOnce([{ id: 7, nom: 'Dr Test', role: 'admin' }]);
    const res = await request(app)
      .put('/api/admin/molecules/3')
      .set(auth())
      .send({ posologies: [{ population: 'vieillard', dose_texte: '', dose_par_kg: 'beaucoup' }] });
    expect(res.status).toBe(400);
    expect(Object.keys(res.body.details)).toEqual(
      expect.arrayContaining([
        'posologies[0].population',
        'posologies[0].dose_texte',
        'posologies[0].dose_par_kg',
      ]),
    );
  });

  it('met à jour un produit (disponibilité, prix) et refuse une photo non http', async () => {
    db.query.mockResolvedValueOnce([{ id: 7, nom: 'Dr Test', role: 'admin' }]);
    const bad = await request(app)
      .put('/api/admin/medicaments/4')
      .set(auth())
      .send({ disponible_rdc: 'oui', photo_url: 'javascript:alert(1)', prix_indicatif_cdf: -5 });
    expect(bad.status).toBe(400);
    expect(Object.keys(bad.body.details).sort()).toEqual([
      'disponible_rdc',
      'photo_url',
      'prix_indicatif_cdf',
    ]);

    db.query.mockResolvedValueOnce([{ id: 7, nom: 'Dr Test', role: 'admin' }]);
    const conn = fakeTransaction();
    const ok = await request(app)
      .put('/api/admin/medicaments/4')
      .set(auth())
      .send({ disponible_rdc: true, prix_indicatif_cdf: '12500', forme: 'Comprimé' });
    expect(ok.status).toBe(200);
    const params = conn.execute.mock.calls.find(([q]) => q.includes('UPDATE medicaments'))[1];
    // photo, disponibilité, prix, nombre de composants, id
    expect(params.slice(-5)).toEqual([null, 1, 12500, null, 4]);
  });
});

describe('Comptes : vérification et liens de réinitialisation (lot A)', () => {
  const role = (r = 'admin') => db.query.mockResolvedValueOnce([{ id: 7, nom: 'Admin', role: r }]);

  it('réservé au rôle admin (pas aux relecteurs « medecin »)', async () => {
    role('medecin');
    const res = await request(app).get('/api/admin/comptes').set(auth('medecin'));
    expect(res.status).toBe(403);
  });

  it('liste les comptes et les demandes de réinitialisation', async () => {
    role();
    db.query
      .mockResolvedValueOnce([{ id: 3, nom: 'Dr B', verification: 'en_attente' }])
      .mockResolvedValueOnce([{ id: 1, user_id: 3, nom: 'Dr B' }]);
    const res = await request(app).get('/api/admin/comptes').set(auth());
    expect(res.status).toBe(200);
    expect(res.body.data.comptes).toHaveLength(1);
    expect(res.body.data.demandes_reinitialisation).toHaveLength(1);
  });

  it('vérifie ou refuse (motif obligatoire) une demande de vérification', async () => {
    role();
    let res = await request(app)
      .post('/api/admin/comptes/3/verification')
      .set(auth())
      .send({ decision: 'refuse' });
    expect(res.status).toBe(400);
    expect(res.body.details.motif).toBeDefined();

    role();
    db.query
      .mockResolvedValueOnce([{ id: 3, verification: 'en_attente', numero_ordre: 'CNOM/1' }])
      .mockResolvedValueOnce({});
    res = await request(app)
      .post('/api/admin/comptes/3/verification')
      .set(auth())
      .send({ decision: 'verifie' });
    expect(res.status).toBe(200);
    const [sql, params] = db.query.mock.calls.at(-1);
    expect(sql).toMatch(/verifie_le = NOW\(\)/);
    expect(params).toEqual(['verifie', 7, null, 3]);
  });

  it('génère un lien de réinitialisation et clôt les demandes en attente', async () => {
    role();
    db.query
      .mockResolvedValueOnce([{ id: 3, nom: 'Dr B', email: 'b@c.cd' }])
      .mockResolvedValueOnce({})
      .mockResolvedValueOnce({});
    const res = await request(app).post('/api/admin/comptes/3/lien-reinitialisation').set(auth());
    expect(res.status).toBe(200);
    expect(res.body.lien).toMatch(/\/reinitialiser-mot-de-passe\?jeton=[\w-]{20,}/);
    expect(db.query.mock.calls[2][1][2]).toBe('admin');
    expect(db.query.mock.calls[3][0]).toMatch(/traite_le = NOW\(\)/);
  });
});
