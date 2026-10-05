'use strict';

const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');
const { signToken, requireAuth } = require('../middleware/auth');
const { HttpError, asyncHandler } = require('../utils/http');

const router = express.Router();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const publicUser = (u) => ({ id: u.id, email: u.email, nom: u.nom, role: u.role });

function validateCredentials(body, { withName }) {
  const errors = {};
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const password = typeof body.password === 'string' ? body.password : '';
  const nom = typeof body.nom === 'string' ? body.nom.trim() : '';
  if (!EMAIL_RE.test(email) || email.length > 190) errors.email = 'Adresse e-mail invalide';
  if (withName && (password.length < 8 || password.length > 128)) {
    errors.password = 'Le mot de passe doit contenir entre 8 et 128 caractères';
  } else if (!password) {
    errors.password = 'Mot de passe requis';
  }
  if (withName && (nom.length < 2 || nom.length > 120)) errors.nom = 'Nom requis (2 à 120 caractères)';
  if (Object.keys(errors).length) throw new HttpError(400, 'Données invalides', errors);
  return { email, password, nom };
}

router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const { email, password, nom } = validateCredentials(req.body || {}, { withName: true });
    const existing = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length) throw new HttpError(409, 'Un compte existe déjà avec cette adresse');
    const hash = await bcrypt.hash(password, 10);
    // Phase 1 : seul le rôle « user » est attribuable à l'inscription.
    const result = await db.query('INSERT INTO users (email, password_hash, nom, role) VALUES (?, ?, ?, ?)', [
      email,
      hash,
      nom,
      'user',
    ]);
    const user = { id: result.insertId, email, nom, role: 'user' };
    res.status(201).json({ token: signToken(user), user: publicUser(user) });
  }),
);

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password } = validateCredentials(req.body || {}, { withName: false });
    const rows = await db.query('SELECT id, email, nom, role, password_hash FROM users WHERE email = ?', [
      email,
    ]);
    const user = rows[0];
    const ok = user ? await bcrypt.compare(password, user.password_hash) : false;
    if (!ok) throw new HttpError(401, 'E-mail ou mot de passe incorrect');
    res.json({ token: signToken(user), user: publicUser(user) });
  }),
);

router.get(
  '/me',
  requireAuth,
  asyncHandler(async (req, res) => {
    const rows = await db.query('SELECT id, email, nom, role FROM users WHERE id = ?', [req.user.id]);
    if (!rows.length) throw new HttpError(401, 'Utilisateur introuvable');
    res.json({ user: publicUser(rows[0]) });
  }),
);

module.exports = router;
