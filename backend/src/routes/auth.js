'use strict';

const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');
const config = require('../config');
const { signToken, requireAuth, assertSessionActive } = require('../middleware/auth');
const { HttpError, asyncHandler } = require('../utils/http');
const { verifierMotDePasse } = require('../utils/motDePasse');

const router = express.Router();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const publicUser = (u) => ({ id: u.id, email: u.email, nom: u.nom, role: u.role });

function validateCredentials(body, { withName }) {
  const errors = {};
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const password = typeof body.password === 'string' ? body.password : '';
  const nom = typeof body.nom === 'string' ? body.nom.trim() : '';
  if (!EMAIL_RE.test(email) || email.length > 190) errors.email = 'Adresse e-mail invalide';
  if (withName) {
    const probleme = verifierMotDePasse(password, { email, nom });
    if (probleme) errors.password = probleme;
  } else if (!password || password.length > 128) {
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

/**
 * Connexion. Après `maxEchecs` mots de passe erronés, le compte est bloqué
 * `blocageMinutes` (même avec le bon mot de passe) : protège contre le devinage.
 */
router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password } = validateCredentials(req.body || {}, { withName: false });
    const rows = await db.query(
      `SELECT id, email, nom, role, password_hash, token_version, echecs_connexion,
              bloque_jusqu_a > NOW() AS bloque
         FROM users WHERE email = ?`,
      [email],
    );
    const user = rows[0];
    if (user && Number(user.bloque)) {
      throw new HttpError(
        429,
        `Trop d'essais : compte bloqué temporairement, réessayez dans ${config.securite.blocageMinutes} minutes`,
      );
    }
    const ok = user ? await bcrypt.compare(password, user.password_hash) : false;
    if (!ok) {
      if (user) {
        const echecs = (Number(user.echecs_connexion) || 0) + 1;
        const bloquer = echecs >= config.securite.maxEchecs;
        await db.query(
          `UPDATE users SET echecs_connexion = ?,
                  bloque_jusqu_a = ${bloquer ? 'DATE_ADD(NOW(), INTERVAL ? MINUTE)' : 'bloque_jusqu_a'}
            WHERE id = ?`,
          bloquer ? [0, config.securite.blocageMinutes, user.id] : [echecs, user.id],
        );
      }
      throw new HttpError(401, 'E-mail ou mot de passe incorrect');
    }
    if (Number(user.echecs_connexion)) {
      await db.query('UPDATE users SET echecs_connexion = 0, bloque_jusqu_a = NULL WHERE id = ?', [user.id]);
    }
    res.json({ token: signToken(user), user: publicUser(user) });
  }),
);

router.get(
  '/me',
  requireAuth,
  asyncHandler(async (req, res) => {
    const rows = await db.query('SELECT id, email, nom, role, token_version FROM users WHERE id = ?', [
      req.user.id,
    ]);
    assertSessionActive(req, rows[0]);
    res.json({ user: publicUser(rows[0]) });
  }),
);

/** Changement de mot de passe : déconnecte toutes les autres sessions du compte. */
router.post(
  '/password',
  requireAuth,
  asyncHandler(async (req, res) => {
    const body = req.body || {};
    const actuel = typeof body.actuel === 'string' ? body.actuel : '';
    const nouveau = typeof body.nouveau === 'string' ? body.nouveau : '';
    const rows = await db.query(
      'SELECT id, email, nom, role, password_hash, token_version FROM users WHERE id = ?',
      [req.user.id],
    );
    const user = rows[0];
    assertSessionActive(req, user);
    if (!actuel || !(await bcrypt.compare(actuel, user.password_hash))) {
      throw new HttpError(400, 'Données invalides', { actuel: 'Mot de passe actuel incorrect' });
    }
    const probleme =
      verifierMotDePasse(nouveau, user) ||
      (nouveau === actuel ? 'Le nouveau mot de passe doit être différent de l’actuel' : null);
    if (probleme) throw new HttpError(400, 'Données invalides', { nouveau: probleme });
    const hash = await bcrypt.hash(nouveau, 10);
    await db.query('UPDATE users SET password_hash = ?, token_version = token_version + 1 WHERE id = ?', [
      hash,
      user.id,
    ]);
    const updated = { ...user, token_version: (Number(user.token_version) || 0) + 1 };
    res.json({ token: signToken(updated), user: publicUser(updated) });
  }),
);

module.exports = router;
