'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');
const { HttpError } = require('../utils/http');

function signToken(user) {
  return jwt.sign({ sub: String(user.id), role: user.role }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
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
    req.user = { id: Number(payload.sub), role: payload.role };
    return next();
  } catch {
    return next(new HttpError(401, 'Session invalide ou expirée'));
  }
}

/** Restreint l'accès à certains rôles (préparé pour les phases ultérieures). */
const requireRole =
  (...roles) =>
  (req, _res, next) =>
    req.user && roles.includes(req.user.role) ? next() : next(new HttpError(403, 'Accès refusé'));

module.exports = { signToken, requireAuth, requireRole };
