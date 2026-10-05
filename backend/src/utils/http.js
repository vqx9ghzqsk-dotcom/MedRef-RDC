'use strict';

class HttpError extends Error {
  constructor(status, message, details) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

/** Enveloppe un handler async pour transmettre les erreurs à Express. */
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

const notFound = (what = 'Ressource') => new HttpError(404, `${what} introuvable`);

/** Entier positif ou valeur par défaut, borné. */
function toInt(value, { min = 1, max = Number.MAX_SAFE_INTEGER, fallback = null } = {}) {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(Math.max(n, min), max);
}

module.exports = { HttpError, asyncHandler, notFound, toInt };
