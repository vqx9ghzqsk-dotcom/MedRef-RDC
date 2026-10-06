'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');
const { HttpError } = require('../utils/http');

const EDITOR_ROLES = ['admin', 'medecin'];

/**
 * Jeton signé : `tv` (token_version) permet de révoquer toutes les sessions d'un
 * compte (changement de mot de passe). Les comptes éditeurs ont des sessions courtes.
 */
function signToken(user) {
  return jwt.sign(
    { sub: String(user.id), role: user.role, tv: Number(user.token_version) || 0 },
    config.jwt.secret,
    { expiresIn: EDITOR_ROLES.includes(user.role) ? config.jwt.editorExpiresIn : config.jwt.expiresIn },
  );
}

/** Exige un en-tête `Authorization: Bearer <jwt>` valide. */
function requireAuth(req, _res, next) {
  const header = req.get('authorization') || '';
  const [scheme, token] = header.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return next(new HttpError(401, 'Authentification requise'));
  }
  try {
    const payload = jwt.verify(token, config.jwt.secret);
    req.user = { id: Number(payload.sub), role: payload.role, tv: Number(payload.tv) || 0 };
    return next();
  } catch {
    return next(new HttpError(401, 'Session invalide ou expirée'));
  }
}

/** Vérifie, avec la ligne `users` relue en base, que la session n'a pas été révoquée. */
function assertSessionActive(req, user) {
  if (!user) throw new HttpError(401, 'Utilisateur introuvable');
  if ((Number(user.token_version) || 0) !== req.user.tv) {
    throw new HttpError(401, 'Session expirée : reconnectez-vous');
  }
}

/** Restreint l'accès à certains rôles (préparé pour les phases ultérieures). */
const requireRole =
  (...roles) =>
  (req, _res, next) =>
    req.user && roles.includes(req.user.role) ? next() : next(new HttpError(403, 'Accès refusé'));

module.exports = { signToken, requireAuth, requireRole, assertSessionActive, EDITOR_ROLES };
