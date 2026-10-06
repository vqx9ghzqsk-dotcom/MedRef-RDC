'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const config = require('./config');
const { notFoundHandler, errorHandler } = require('./middleware/errors');

function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  app.use(helmet());
  app.use(
    cors({
      origin: config.corsOrigin,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    }),
  );
  app.use(express.json({ limit: '1mb' }));

  const isTest = config.env === 'test';
  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 1000,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    skip: () => isTest,
  });
  const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { error: 'Trop de tentatives, réessayez dans quelques minutes' },
    skip: () => isTest,
  });

  app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'medref-rdc-api' }));

  app.use('/api', apiLimiter);
  app.use('/api/auth', authLimiter, require('./routes/auth'));
  app.use('/api', require('./routes/catalogue'));
  app.use('/api', require('./routes/referentiels'));
  app.use('/api', require('./routes/medicaments'));
  app.use('/api', require('./routes/sources'));
  app.use('/api', require('./routes/recherche'));
  app.use('/api', require('./routes/prescriptions'));
  app.use('/api', require('./routes/admin'));

  app.use(notFoundHandler);
  app.use(errorHandler);
  return app;
}

module.exports = { createApp };
