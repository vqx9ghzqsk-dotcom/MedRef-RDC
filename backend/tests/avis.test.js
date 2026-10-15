'use strict';

jest.mock('../src/db', () => ({ query: jest.fn(), transaction: jest.fn(), close: jest.fn() }));

const request = require('supertest');
const db = require('../src/db');
const { createApp } = require('../src/app');
const { typeImage } = require('../src/routes/avis');
const { tokenFor } = require('./helpers');

const app = createApp();
const auth = (id = 7, role = 'user') => ({ Authorization: `Bearer ${tokenFor(id, role)}` });

const utilisateur = (patch = {}) => ({
  id: 7,
  nom: 'Dr K',
  role: 'user',
  profil: 'medecin_generaliste',
  verification: 'verifie',
  token_version: 0,
  ...patch,
});

const avisLu = (patch = {}) => ({
  id: 3,
  auteur_id: 9,
  cible_type: 'produit',
  medicament_id: 12,
  produit_nom: 'Produit X',
  type: 'qualite',
  grave: 0,
  titre: 'Comprimés friables',
  statut: 'soumis',
  votes: '0',
  commentaires: '0',
  ...patch,
});

const corps = (patch = {}) => ({
  cible_type: 'produit',
  cible: 12,
  type: 'qualite',
  titre: 'Comprimés friables',
  description: 'Lot de 30 boîtes : comprimés effrités à l’ouverture.',
  numero_lot: 'AB123',
  liens_interets: 'Aucun',
  engagement: true,
  sources: [],
  ...patch,
});

function transactionFactice() {
  const conn = {
    execute: jest.fn(async (sql) =>
      /^\s*INSERT INTO avis /.test(sql) ? [{ insertId: 3 }] : [{ affectedRows: 1 }],
    ),
  };
  db.transaction.mockImplementation(async (fn) => fn(conn));
  return conn;
}

beforeEach(() => {
  db.query.mockReset();
  db.transaction.mockReset();
});

describe('Avis : soumission', () => {
  it('refuse un compte non vérifié ou un étudiant', async () => {
    db.query.mockResolvedValueOnce([utilisateur({ verification: 'en_attente' })]);
    let res = await request(app).post('/api/avis').set(auth()).send(corps());
    expect(res.status).toBe(403);
    db.query.mockResolvedValueOnce([utilisateur({ profil: 'etudiant' })]);
    res = await request(app).post('/api/avis').set(auth()).send(corps());
    expect(res.status).toBe(403);
  });

  it('exige l’engagement, les liens d’intérêts et des sources pour une donnée scientifique', async () => {
    db.query.mockResolvedValueOnce([utilisateur()]).mockResolvedValueOnce([{ id: 12 }]);
    const res = await request(app)
      .post('/api/avis')
      .set(auth())
      .send(corps({ type: 'donnee_scientifique', engagement: false, liens_interets: '', sources: [] }));
    expect(res.status).toBe(400);
    expect(Object.keys(res.body.details)).toEqual(
      expect.arrayContaining(['engagement', 'liens_interets', 'sources']),
    );
  });

  it('refuse un lien de source qui n’est pas http(s)', async () => {
    db.query.mockResolvedValueOnce([utilisateur()]).mockResolvedValueOnce([{ id: 12 }]);
    const res = await request(app)
      .post('/api/avis')
      .set(auth())
      .send(corps({ sources: [{ type: 'etude', titre: 'Essai', url: 'javascript:alert(1)' }] }));
    expect(res.status).toBe(400);
    expect(res.body.details['sources[0].url']).toBeDefined();
  });

  it('enregistre l’avis, ses sources et l’historique', async () => {
    db.query
      .mockResolvedValueOnce([utilisateur()])
      .mockResolvedValueOnce([{ id: 12 }])
      .mockResolvedValueOnce([avisLu({ auteur_id: 7 })]);
    const conn = transactionFactice();
    const res = await request(app)
      .post('/api/avis')
      .set(auth())
      .send(corps({ sources: [{ type: 'notice', titre: 'Notice du produit', url: 'https://example.org' }] }));
    expect(res.status).toBe(201);
    const insert = conn.execute.mock.calls.find(([sql]) => /INSERT INTO avis \(/.test(sql));
    expect(insert[0]).toMatch(/auteur_id, cible_type, medicament_id/);
    expect(insert[1].slice(0, 3)).toEqual([7, 'produit', 12]);
    expect(conn.execute.mock.calls.some(([sql]) => /INSERT INTO avis_sources/.test(sql))).toBe(true);
    const journal = conn.execute.mock.calls.find(([sql]) => /INSERT INTO modifications/.test(sql));
    expect(journal[1].slice(1, 3)).toEqual(['avis', 3]);
  });
});

describe('Avis : lecture et examen par les pairs', () => {
  it('un avis non publié est introuvable sans compte', async () => {
    db.query.mockResolvedValueOnce([avisLu()]);
    const res = await request(app).get('/api/avis/3');
    expect(res.status).toBe(404);
  });

  it('l’auteur ne vote pas pour son propre avis ; un pair vérifié vote', async () => {
    db.query.mockResolvedValueOnce([utilisateur({ id: 9 })]).mockResolvedValueOnce([avisLu()]);
    let res = await request(app).post('/api/avis/3/vote').set(auth(9));
    expect(res.status).toBe(403);

    db.query
      .mockResolvedValueOnce([utilisateur()])
      .mockResolvedValueOnce([avisLu()])
      .mockResolvedValueOnce({ affectedRows: 0 })
      .mockResolvedValueOnce({ insertId: 1 })
      .mockResolvedValueOnce([{ n: 1 }]);
    res = await request(app).post('/api/avis/3/vote').set(auth());
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual({ a_vote: true, votes: 1 });
  });

  it('un pharmacien non vérifié ne commente pas', async () => {
    db.query
      .mockResolvedValueOnce([utilisateur({ profil: 'pharmacien', verification: 'non_demandee' })])
      .mockResolvedValueOnce([avisLu({ statut: 'publie' })]);
    const res = await request(app).post('/api/avis/3/commentaires').set(auth()).send({ texte: 'Vu aussi' });
    expect(res.status).toBe(403);
  });
});

describe('Avis : modération', () => {
  it('motif obligatoire pour demander un complément ; pas de modération de son propre avis', async () => {
    db.query.mockResolvedValueOnce([utilisateur({ role: 'medecin' })]).mockResolvedValueOnce([avisLu()]);
    let res = await request(app)
      .post('/api/admin/avis/3/moderation')
      .set(auth(7, 'medecin'))
      .send({ decision: 'complement' });
    expect(res.status).toBe(400);

    db.query
      .mockResolvedValueOnce([utilisateur({ role: 'admin' })])
      .mockResolvedValueOnce([avisLu({ auteur_id: 7 })]);
    res = await request(app)
      .post('/api/admin/avis/3/moderation')
      .set(auth(7, 'admin'))
      .send({ decision: 'publier' });
    expect(res.status).toBe(403);
  });

  it('publie et journalise la validation', async () => {
    db.query
      .mockResolvedValueOnce([utilisateur({ role: 'medecin' })])
      .mockResolvedValueOnce([avisLu()])
      .mockResolvedValueOnce([avisLu({ statut: 'publie' })]);
    const conn = transactionFactice();
    const res = await request(app)
      .post('/api/admin/avis/3/moderation')
      .set(auth(7, 'medecin'))
      .send({ decision: 'publier' });
    expect(res.status).toBe(200);
    expect(conn.execute.mock.calls[0][1].slice(0, 3)).toEqual(['publie', null, 7]);
    const journal = conn.execute.mock.calls.find(([sql]) => /INSERT INTO modifications/.test(sql));
    expect(journal[1][3]).toBe('validation');
  });

  it('les coordonnées de pharmacovigilance sont saisies par un administrateur seulement', async () => {
    db.query.mockResolvedValueOnce([utilisateur({ role: 'medecin' })]);
    const res = await request(app)
      .put('/api/admin/parametres/pharmacovigilance')
      .set(auth(7, 'medecin'))
      .send({ contact: 'x' });
    expect(res.status).toBe(403);
  });
});

describe('Avis : photos', () => {
  it('reconnaît les images par leurs premiers octets', () => {
    expect(typeImage(Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0]))).toBe('jpg');
    expect(typeImage(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0]))).toBe('png');
    expect(typeImage(Buffer.from('RIFF0000WEBPVP8 '))).toBe('webp');
    expect(typeImage(Buffer.from('<svg onload=alert(1)>'))).toBeNull();
  });

  it('refuse un fichier qui n’est pas une image même déclaré comme tel', async () => {
    db.query
      .mockResolvedValueOnce([utilisateur()])
      .mockResolvedValueOnce([avisLu({ auteur_id: 7 })])
      .mockResolvedValueOnce([{ n: 0 }]);
    const faux = `data:image/png;base64,${Buffer.from('<script>alert(1)</script>').toString('base64')}`;
    const res = await request(app).post('/api/avis/3/photos').set(auth()).send({ data: faux });
    expect(res.status).toBe(400);
  });
});
