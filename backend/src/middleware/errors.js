'use strict';

const { HttpError } = require('../utils/http');

function notFoundHandler(req, _res, next) {
  next(new HttpError(404, `Route introuvable : ${req.method} ${req.originalUrl}`));
}

function errorHandler(err, _req, res, _next) {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'JSON invalide' });
  }
  if (err.code === 'ER_DUP_ENTRY') {
    return res.status(409).json({ error: 'Cette ressource existe déjà' });
  }
  const status = err instanceof HttpError ? err.status : err.status || 500;
  if (status >= 500 && process.env.NODE_ENV !== 'test') {
    console.error(err);
  }
  const body = { error: status >= 500 ? 'Erreur interne du serveur' : err.message };
  if (err.details) body.details = err.details;
  return res.status(status).json(body);
}

module.exports = { notFoundHandler, errorHandler };
