'use strict';

const { HttpError } = require('../utils/http');
const journal = require('../journal');

function notFoundHandler(req, _res, next) {
  next(new HttpError(404, `Route introuvable : ${req.method} ${req.originalUrl}`));
}

function errorHandler(err, req, res, _next) {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'JSON invalide' });
  }
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Données trop volumineuses' });
  }
  if (err.code === 'ER_DUP_ENTRY') {
    return res.status(409).json({ error: 'Cette ressource existe déjà' });
  }
  const status = err instanceof HttpError ? err.status : err.status || 500;
  const body = { error: status >= 500 ? 'Erreur interne du serveur' : err.message };
  if (status >= 500) {
    // Détail complet au journal, référence seule pour l'utilisateur
    journal.ecrire('erreur', err.message, {
      reference: req.reference,
      methode: req.method,
      route: req.originalUrl,
      utilisateur: req.user?.id ?? null,
      code: err.code,
      pile: err.stack,
    });
    if (req.reference) body.reference = req.reference;
  }
  if (err.details) body.details = err.details;
  return res.status(status).json(body);
}

module.exports = { notFoundHandler, errorHandler };
