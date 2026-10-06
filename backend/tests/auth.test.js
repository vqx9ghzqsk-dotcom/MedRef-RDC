'use strict';

jest.mock('../src/db', () => ({ query: jest.fn(), transaction: jest.fn(), close: jest.fn() }));

const request = require('supertest');
const bcrypt = require('bcryptjs');
const db = require('../src/db');
const { createApp } = require('../src/app');
const { tokenFor } = require('./helpers');

const app = createApp();

beforeEach(() => db.query.mockReset());

describe('GET /api/health', () => {
  it('répond ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('ajoute les en-têtes de sécurité helmet', async () => {
    const res = await request(app).get('/api/health');
    expect(res.headers['x-content-type-options']).toBe('nosniff');
    expect(res.headers['x-powered-by']).toBeUndefined();
  });
});

describe('POST /api/auth/register', () => {
  it('refuse des données invalides', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'pas-un-email', password: '123', nom: '' });
    expect(res.status).toBe(400);
    expect(Object.keys(res.body.details)).toEqual(expect.arrayContaining(['email', 'password', 'nom']));
    expect(db.query).not.toHaveBeenCalled();
  });

  it('crée un compte avec le rôle user et renvoie un JWT', async () => {
    db.query.mockResolvedValueOnce([]).mockResolvedValueOnce({ insertId: 42 });
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'Dr.Test@Example.com ', password: 'Quinine-2026', nom: 'Dr Test', role: 'admin' });
    expect(res.status).toBe(201);
    expect(res.body.token).toEqual(expect.any(String));
    expect(res.body.user).toEqual({ id: 42, email: 'dr.test@example.com', nom: 'Dr Test', role: 'user' });
    const [, params] = db.query.mock.calls[1];
    expect(params[0]).toBe('dr.test@example.com');
    expect(params[1]).not.toBe('Quinine-2026'); // mot de passe haché
    expect(params[3]).toBe('user'); // le rôle envoyé par le client est ignoré
  });

  it('renvoie 409 si l’e-mail existe déjà', async () => {
    db.query.mockResolvedValueOnce([{ id: 1 }]);
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'a@b.cd', password: 'Quinine-2026', nom: 'Ab' });
    expect(res.status).toBe(409);
  });
});

describe('POST /api/auth/login', () => {
  const hash = bcrypt.hashSync('motdepasse123', 4);
  const user = { id: 7, email: 'a@b.cd', nom: 'Ab', role: 'user', password_hash: hash };

  it('connecte avec les bons identifiants', async () => {
    db.query.mockResolvedValueOnce([user]);
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'a@b.cd', password: 'motdepasse123' });
    expect(res.status).toBe(200);
    expect(res.body.user).toEqual({ id: 7, email: 'a@b.cd', nom: 'Ab', role: 'user' });
    expect(res.body.user.password_hash).toBeUndefined();
  });

  it('refuse un mauvais mot de passe', async () => {
    db.query.mockResolvedValueOnce([user]);
    const res = await request(app).post('/api/auth/login').send({ email: 'a@b.cd', password: 'mauvais-mdp' });
    expect(res.status).toBe(401);
  });

  it('refuse un e-mail inconnu avec le même message', async () => {
    db.query.mockResolvedValueOnce([]);
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'x@y.zz', password: 'motdepasse123' });
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('E-mail ou mot de passe incorrect');
  });
});

describe('GET /api/auth/me', () => {
  it('exige un jeton', async () => {
    const res = await request(app).get('/api/auth/me');
    expect(res.status).toBe(401);
  });

  it('refuse un jeton falsifié', async () => {
    const res = await request(app).get('/api/auth/me').set('Authorization', 'Bearer abc.def.ghi');
    expect(res.status).toBe(401);
  });

  it('renvoie l’utilisateur courant', async () => {
    db.query.mockResolvedValueOnce([{ id: 3, email: 'c@d.ef', nom: 'Cd', role: 'user' }]);
    const res = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${tokenFor(3)}`);
    expect(res.status).toBe(200);
    expect(res.body.user.id).toBe(3);
    expect(db.query.mock.calls[0][1]).toEqual([3]);
  });
});

describe('Erreurs génériques', () => {
  it('404 JSON pour une route inconnue', async () => {
    const res = await request(app).get('/api/inexistant');
    expect(res.status).toBe(404);
    expect(res.body.error).toMatch(/Route introuvable/);
  });

  it('400 pour un JSON mal formé', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .set('Content-Type', 'application/json')
      .send('{"email":');
    expect(res.status).toBe(400);
  });

  it('masque les erreurs internes', async () => {
    db.query.mockRejectedValueOnce(new Error('connexion perdue'));
    const res = await request(app).get('/api/departements');
    expect(res.status).toBe(500);
    expect(res.body.error).toBe('Erreur interne du serveur');
  });
});

describe('Sécurité des comptes', () => {
  const { verifierMotDePasse } = require('../src/utils/motDePasse');
  const hash = bcrypt.hashSync('Quinine-2026', 4);
  const compte = (patch = {}) => ({
    id: 7,
    email: 'a@b.cd',
    nom: 'Ab',
    role: 'user',
    password_hash: hash,
    token_version: 0,
    echecs_connexion: 0,
    bloque: 0,
    ...patch,
  });

  it('impose un mot de passe solide', () => {
    expect(verifierMotDePasse('court1')).toMatch(/entre 10 et 128/);
    expect(verifierMotDePasse('seulementdeslettres')).toMatch(/lettre et un chiffre/);
    expect(verifierMotDePasse('Password123')).toMatch(/courant/);
    expect(verifierMotDePasse('mingalu2026!', { email: 'b.mingalu@x.cd', nom: 'Ben Mingalu' })).toMatch(
      /e-mail ou votre nom/,
    );
    expect(verifierMotDePasse('Quinine-2026', { email: 'a@b.cd', nom: 'Ab' })).toBeNull();
  });

  it('bloque le compte après 5 échecs, même avec le bon mot de passe ensuite', async () => {
    db.query.mockResolvedValueOnce([compte({ echecs_connexion: 4 })]).mockResolvedValueOnce({});
    const echec = await request(app).post('/api/auth/login').send({ email: 'a@b.cd', password: 'mauvais' });
    expect(echec.status).toBe(401);
    const [sql, params] = db.query.mock.calls[1];
    expect(sql).toMatch(/bloque_jusqu_a = DATE_ADD\(NOW\(\), INTERVAL \? MINUTE\)/);
    expect(params).toEqual([0, 15, 7]);

    db.query.mockResolvedValueOnce([compte({ bloque: 1 })]);
    const bloque = await request(app)
      .post('/api/auth/login')
      .send({ email: 'a@b.cd', password: 'Quinine-2026' });
    expect(bloque.status).toBe(429);
    expect(bloque.body.error).toMatch(/bloqué/);
  });

  it('remet le compteur à zéro après une connexion réussie', async () => {
    db.query.mockResolvedValueOnce([compte({ echecs_connexion: 2 })]).mockResolvedValueOnce({});
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'a@b.cd', password: 'Quinine-2026' });
    expect(res.status).toBe(200);
    expect(db.query.mock.calls[1][0]).toMatch(/echecs_connexion = 0, bloque_jusqu_a = NULL/);
  });

  it('change le mot de passe et révoque les anciennes sessions', async () => {
    const ancien = { Authorization: `Bearer ${tokenFor(7)}` };
    db.query.mockResolvedValueOnce([compte()]);
    const mauvais = await request(app)
      .post('/api/auth/password')
      .set(ancien)
      .send({ actuel: 'faux', nouveau: 'Artesunate-2026' });
    expect(mauvais.status).toBe(400);
    expect(mauvais.body.details.actuel).toBeDefined();

    db.query.mockResolvedValueOnce([compte()]).mockResolvedValueOnce({});
    const ok = await request(app)
      .post('/api/auth/password')
      .set(ancien)
      .send({ actuel: 'Quinine-2026', nouveau: 'Artesunate-2026' });
    expect(ok.status).toBe(200);
    expect(db.query.mock.calls.at(-1)[0]).toMatch(/token_version = token_version \+ 1/);

    // L'ancien jeton (version 0) est refusé une fois la version passée à 1
    db.query.mockResolvedValueOnce([compte({ token_version: 1 })]);
    const me = await request(app).get('/api/auth/me').set(ancien);
    expect(me.status).toBe(401);
    db.query.mockResolvedValueOnce([compte({ token_version: 1 })]);
    const nouveau = await request(app).get('/api/auth/me').set('Authorization', `Bearer ${ok.body.token}`);
    expect(nouveau.status).toBe(200);
  });

  it('refuse une configuration de production avec des secrets d’exemple', () => {
    const { verifierProduction } = require('../src/config');
    const avant = process.env.DB_PASSWORD;
    process.env.DB_PASSWORD = 'medref';
    expect(() =>
      verifierProduction({
        jwt: { secret: 'change-me-with-a-long-random-string' },
        db: { password: 'medref' },
      }),
    ).toThrow(/JWT_SECRET[\s\S]*DB_PASSWORD/);
    process.env.DB_PASSWORD = 'un-vrai-mot-de-passe';
    expect(() =>
      verifierProduction({ jwt: { secret: 'x'.repeat(40) }, db: { password: 'un-vrai-mot-de-passe' } }),
    ).not.toThrow();
    if (avant === undefined) delete process.env.DB_PASSWORD;
    else process.env.DB_PASSWORD = avant;
  });
});
