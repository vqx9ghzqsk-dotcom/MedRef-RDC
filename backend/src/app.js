'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const config = require('./config');
const journal = require('./journal');
const { notFoundHandler, errorHandler } = require('./middleware/errors');

const limiter = (limit, message) =>
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    ...(message ? { message: { error: message } } : {}),
    skip: () => config.env === 'test',
  });

const texte = (v, max) => (typeof v === 'string' ? v.slice(0, max) : null);

/**
 * Dossier de l'interface compilée (frontend/dist) servi par l'API elle-même :
 * un seul programme à lancer pour une mise en ligne simple. Désactivé si absent.
 */
function dossierInterface() {
  const dir = process.env.FRONTEND_DIST
    ? path.resolve(process.env.FRONTEND_DIST)
    : config.env === 'production'
      ? path.join(__dirname, '..', '..', 'frontend', 'dist')
      : null;
  return dir && fs.existsSync(path.join(dir, 'index.html')) ? dir : null;
}

function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  app.use(journal.referenceRequete);
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          // Photos de produits hébergées ailleurs (adresses http(s) saisies dans /admin)
          'img-src': ["'self'", 'data:', 'https:'],
        },
      },
    }),
  );
  app.use(
    cors({
      origin: config.corsOrigin,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
      exposedHeaders: ['X-Request-Id'],
    }),
  );
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'medref-rdc-api' }));

  app.use('/api', limiter(1000));
  app.use(
    '/api/auth',
    limiter(20, 'Trop de tentatives, réessayez dans quelques minutes'),
    require('./routes/auth'),
  );

  // Erreurs survenues dans l'interface (écran « Une erreur est survenue ») : consignées au journal
  app.post('/api/journal/erreur', limiter(30), (req, res) => {
    const b = req.body || {};
    const ligne = journal.ecrire('erreur', `Interface : ${texte(b.message, 500) || 'erreur inconnue'}`, {
      reference: req.reference,
      origine: 'interface',
      page: texte(b.page, 300),
      pile: texte(b.pile, 4000),
      navigateur: texte(req.get('user-agent'), 300),
    });
    res.status(201).json({ reference: ligne.reference });
  });

  app.use('/api', require('./routes/catalogue'));
  app.use('/api', require('./routes/referentiels'));
  app.use('/api', require('./routes/medicaments'));
  app.use('/api', require('./routes/sources'));
  app.use('/api', require('./routes/recherche'));
  app.use('/api', require('./routes/horsLigne'));
  app.use('/api', require('./routes/prescriptions'));
  app.use('/api', require('./routes/admin'));

  const ui = dossierInterface();
  if (ui) {
    app.use(
      express.static(ui, {
        index: false,
        setHeaders(res, file) {
          if (file.endsWith('service-worker.js')) res.set('Cache-Control', 'no-cache');
          else if (file.includes(`${path.sep}assets${path.sep}`)) {
            res.set('Cache-Control', 'public, max-age=31536000, immutable');
          }
        },
      }),
    );
    // Application monopage : toute route hors /api renvoie index.html
    app.get(/^(?!\/api\/).*/, (_req, res) => res.sendFile(path.join(ui, 'index.html')));
  }

  app.use(notFoundHandler);
  app.use(errorHandler);
  return app;
}

module.exports = { createApp };
