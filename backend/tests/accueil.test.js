'use strict';

jest.mock('../src/db', () => ({ query: jest.fn(), transaction: jest.fn(), close: jest.fn() }));
jest.mock('../src/services/veille', () => ({
  actualiserSiAncienne: jest.fn(async () => ({ statut: 'faite', bilan: { publies: 3 } })),
  relancer: jest.fn(),
}));

const request = require('supertest');
const db = require('../src/db');
const { createApp } = require('../src/app');
const { tokenFor } = require('./helpers');

const app = createApp();
const auth = (role = 'admin') => ({ Authorization: `Bearer ${tokenFor(7, role)}` });
beforeEach(() => {
  db.query.mockReset();
  db.transaction.mockReset();
});

describe('Accueil (lot D)', () => {
  it('assemble les blocs publics : alertes séparées des autres actualités, produits, fiches, totaux', async () => {
    db.query
      .mockResolvedValueOnce([
        { id: 1, type: 'alerte_sanitaire', titre: 'Choléra', source_titre: 'Ministère de la Santé' },
        { id: 2, type: 'protocole', titre: 'Nouveau protocole', source_titre: 'PNLP' },
      ])
      .mockResolvedValueOnce([{ id: 9, nom_commercial: 'Produit', dci: 'Amoxicilline' }])
      .mockResolvedValueOnce([{ nom: 'Paludisme grave', slug: 'paludisme-grave', valide_par: 'Dr A' }])
      .mockResolvedValueOnce([{ nom: 'Rougeole', slug: 'rougeole', statut: 'a_valider' }])
      .mockResolvedValueOnce([
        { fiches: '792', fiches_validees: '0', molecules: '500', produits: '1200', amm: '6352' },
      ])
      .mockResolvedValueOnce([{ id: 4, nom_commercial: 'Coartem', photo_url: '/m/c.webp' }])
      // Fiche du jour : aucune fiche validée ici, donc une fiche en relecture
      .mockResolvedValueOnce([{ n: 3 }])
      .mockResolvedValueOnce([
        { nom: 'Rougeole', slug: 'rougeole', statut: 'a_valider', specialite: 'Pédiatrie' },
      ]);
    const res = await request(app).get('/api/accueil');
    expect(res.status).toBe(200);
    expect(res.body.data.alertes.map((a) => a.id)).toEqual([1]);
    expect(res.body.data.actualites.map((a) => a.id)).toEqual([2]);
    expect(res.body.data.totaux).toEqual({
      fiches: 792,
      fiches_validees: 0,
      molecules: 500,
      produits: 1200,
      amm: 6352,
    });
    // Seules les actualités publiées, déjà parues et non expirées sont lues
    expect(db.query.mock.calls[0][0]).toMatch(/statut = 'publie'.*publie_le <= CURDATE\(\)/s);
    expect(db.query.mock.calls[0][0]).toMatch(/expire_le IS NULL OR a.expire_le >= CURDATE\(\)/);
    // Sur l'accueil, la veille ne montre que les actualités qui ont leur propre photo
    expect(db.query.mock.calls[0][0]).toMatch(/image_url IS NOT NULL OR a.origine = 'manuelle'/);
    // Mêmes règles de visibilité des produits que la page Médicaments
    expect(db.query.mock.calls[1][0]).toMatch(/m.nature = 'medicament'/);
    // Seuls les produits avec photo, et le titre du médecin qui a validé
    expect(db.query.mock.calls[1][0]).toMatch(/photo_url IS NOT NULL/);
    // Nouveaux produits : ajoutés ces derniers jours ; découverte : produits plus anciens au hasard
    expect(db.query.mock.calls[1][0]).toMatch(/created_at >= CURDATE\(\) - INTERVAL 7 DAY/);
    expect(db.query.mock.calls[5][0]).toMatch(
      /created_at < CURDATE\(\) - INTERVAL 7 DAY[\s\S]*ORDER BY RAND\(\)/,
    );
    expect(res.body.data.produits_decouverte.map((p) => p.nom_commercial)).toEqual(['Coartem']);
    expect(res.body.data.fiche_du_jour).toMatchObject({ slug: 'rougeole', specialite: 'Pédiatrie' });
    expect(db.query.mock.calls[6][0]).toMatch(/statut <> 'brouillon'/);
    expect(db.query.mock.calls[7][0]).toMatch(/OFFSET [0-2]$/m);
    expect(db.query.mock.calls[2][0]).toMatch(/valide_par_profil/);
  });

  it('archive des actualités : publiées seulement, filtres sûrs, pagination', async () => {
    db.query
      .mockResolvedValueOnce([{ id: 3, type: 'alerte_sanitaire', titre: 'Mpox', expiree: 1 }])
      .mockResolvedValueOnce([{ n: '21' }]);
    const res = await request(app)
      .get('/api/actualites')
      .query({ type: 'alerte_sanitaire', zone: 'Ituri', page: 2 });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ page: 2, par_page: 20, total: 21 });
    expect(res.body.data[0].expiree).toBe(true);
    const [sql, params] = db.query.mock.calls[0];
    expect(sql).toMatch(/statut = 'publie'/);
    expect(sql).toMatch(/OFFSET 20/);
    expect(params).toEqual(['alerte_sanitaire', '%Ituri%']);
  });

  it('lot hors connexion : actualités valables, nouveautés depuis le lot précédent, ids pour effacer', async () => {
    db.query
      .mockResolvedValueOnce([{ id: 7, titre: 'Choléra', expire_hors_ligne: '2026-11-20' }])
      .mockResolvedValueOnce([{ id: 7 }, { id: 8 }]);
    const res = await request(app).get('/api/actualites/lot').query({ depuis: '2026-10-20T10:00:00.000Z' });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ ids: [7, 8], conservation_jours: 30 });
    expect(res.body.data[0].expire_hors_ligne).toBe('2026-11-20');
    const [sql, params] = db.query.mock.calls[0];
    expect(sql).toMatch(/updated_at > ?/);
    expect(sql).toMatch(/INTERVAL 30 DAY/);
    expect(params[0]).toEqual(new Date('2026-10-20T10:00:00.000Z'));
  });

  it('photo relayée pour le hors-ligne : image de la source, type reconnu même non déclaré', async () => {
    db.query.mockResolvedValueOnce([{ image_url: 'https://photos.radiookapi.net/a.jfif' }]);
    const jpeg = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 1, 2, 3]);
    const fetchOrigine = global.fetch;
    global.fetch = jest.fn(async () => ({
      ok: true,
      headers: { get: () => 'application/octet-stream' },
      arrayBuffer: async () => jpeg,
    }));
    try {
      const res = await request(app).get('/api/actualites/12/photo').buffer(true);
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toMatch(/image\/jpeg/);
      expect(global.fetch).toHaveBeenCalledWith('https://photos.radiookapi.net/a.jfif', expect.any(Object));
      // Seule la photo enregistrée pour une actualité publiée est relayée
      expect(db.query.mock.calls[0][0]).toMatch(/statut = 'publie'/);
    } finally {
      global.fetch = fetchOrigine;
    }
  });

  it('photo relayée : 404 sans photo, 502 si la source ne renvoie pas une image', async () => {
    db.query.mockResolvedValueOnce([]);
    expect((await request(app).get('/api/actualites/5/photo')).status).toBe(404);
    db.query.mockResolvedValueOnce([{ image_url: 'https://x.org/page' }]);
    const fetchOrigine = global.fetch;
    global.fetch = jest.fn(async () => ({
      ok: true,
      headers: { get: () => 'text/html' },
      arrayBuffer: async () => Buffer.from('<html>'),
    }));
    try {
      expect((await request(app).get('/api/actualites/6/photo')).status).toBe(502);
    } finally {
      global.fetch = fetchOrigine;
    }
  });

  it('lot hors connexion : sans date, le lot complet ; date illisible ignorée', async () => {
    db.query.mockResolvedValueOnce([]).mockResolvedValueOnce([]);
    await request(app).get('/api/actualites/lot').query({ depuis: 'pas une date' });
    expect(db.query.mock.calls[0][0]).not.toMatch(/updated_at >/);
    expect(db.query.mock.calls[0][1]).toEqual([]);
  });

  it('actualisation au retour du réseau : relève lancée et bilan renvoyé', async () => {
    const res = await request(app).post('/api/actualites/actualiser');
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual({ statut: 'faite', derniere: null, publiees: 3 });
  });

  it('archive des actualités : un type inconnu est ignoré', async () => {
    db.query.mockResolvedValueOnce([]).mockResolvedValueOnce([{ n: 0 }]);
    const res = await request(app).get('/api/actualites').query({ type: "x' OR 1=1" });
    expect(res.status).toBe(200);
    expect(db.query.mock.calls[0][1]).toEqual([]);
  });

  it('bloc personnel : compteurs d’administration pour un admin, rien pour un utilisateur', async () => {
    db.query
      .mockResolvedValueOnce([
        { id: 7, role: 'admin', profil: null, verification: 'non_demandee', token_version: 0 },
      ])
      .mockResolvedValueOnce([
        { fiches_a_valider: '792', fiches_a_revoir: '0', actualites_a_publier: '1', comptes_a_verifier: '2' },
      ]);
    const res = await request(app).get('/api/accueil/pour-moi').set(auth('admin'));
    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({
      fiches_a_valider: 792,
      comptes_a_verifier: 2,
      actualites_a_publier: 1,
    });

    db.query.mockReset();
    db.query.mockResolvedValueOnce([
      { id: 7, role: 'user', profil: 'medecin_generaliste', verification: 'en_attente', token_version: 0 },
    ]);
    const res2 = await request(app).get('/api/accueil/pour-moi').set(auth('user'));
    expect(res2.body.data).toEqual({
      role: 'user',
      profil: 'medecin_generaliste',
      verification: 'en_attente',
    });
  });

  it('bloc personnel : connexion requise', async () => {
    const res = await request(app).get('/api/accueil/pour-moi');
    expect(res.status).toBe(401);
  });
});

describe('Actualités dans l’administration', () => {
  const corps = (patch = {}) => ({
    type: 'alerte_sanitaire',
    titre: 'Épidémie de choléra',
    resume: 'Cas confirmés.',
    source_titre: 'Ministère de la Santé',
    source_url: 'https://example.org/communique',
    publie_le: '2026-10-14',
    statut: 'publie',
    ...patch,
  });

  /** Transaction factice : l'insertion renvoie l'id 5, la relecture renvoie l'actualité. */
  function transaction(statutAvant) {
    const conn = {
      execute: jest.fn(async (sql, params) => {
        if (/^\s*INSERT INTO actualites/.test(sql)) return [{ insertId: 5 }];
        if (/^\s*SELECT/.test(sql) && /FROM actualites a/.test(sql)) {
          const statut = conn.lectures++ === 0 && statutAvant ? statutAvant : conn.statutApres;
          return [[{ id: params[0], titre: 'Épidémie de choléra', statut, publie_le: '2026-10-14' }]];
        }
        return [{ affectedRows: 1 }];
      }),
      lectures: 0,
      statutApres: 'publie',
    };
    db.transaction.mockImplementation(async (fn) => fn(conn));
    return conn;
  }

  it('un administrateur publie, avec la source obligatoire et l’historique', async () => {
    db.query.mockResolvedValueOnce([{ id: 7, nom: 'Admin', role: 'admin', token_version: 0 }]);
    const conn = transaction(null);
    const res = await request(app).post('/api/admin/actualites').set(auth()).send(corps());
    expect(res.status).toBe(201);
    const insert = conn.execute.mock.calls.find(([sql]) => /INSERT INTO actualites/.test(sql));
    expect(insert[1]).toContain('publie');
    expect(insert[1].slice(-2)).toEqual([7, 7]); // auteur et publié par
    const journal = conn.execute.mock.calls.find(([sql]) => /INSERT INTO modifications/.test(sql));
    expect(journal[1].slice(1, 4)).toEqual(['actualite', 5, 'validation']);
  });

  it('un relecteur « medecin » ne peut que proposer un brouillon', async () => {
    db.query.mockResolvedValueOnce([{ id: 7, nom: 'Dr M', role: 'medecin', token_version: 0 }]);
    const conn = transaction(null);
    conn.statutApres = 'brouillon';
    const res = await request(app).post('/api/admin/actualites').set(auth('medecin')).send(corps());
    expect(res.status).toBe(201);
    const insert = conn.execute.mock.calls.find(([sql]) => /INSERT INTO actualites/.test(sql));
    expect(insert[1]).toContain('brouillon');
    expect(insert[1]).not.toContain('publie');
  });

  it('refuse une actualité sans source, une adresse non http et une expiration antérieure', async () => {
    db.query.mockResolvedValueOnce([{ id: 7, nom: 'Admin', role: 'admin', token_version: 0 }]);
    const res = await request(app)
      .post('/api/admin/actualites')
      .set(auth())
      .send(corps({ source_titre: '', source_url: 'javascript:alert(1)', expire_le: '2026-10-01' }));
    expect(res.status).toBe(400);
    expect(Object.keys(res.body.details || res.body.errors || {})).toEqual(
      expect.arrayContaining(['source_titre', 'source_url', 'expire_le']),
    );
  });
});
