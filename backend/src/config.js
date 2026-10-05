'use strict';

require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {
  env,
  port: Number(process.env.PORT) || 4000,
  corsOrigin: (process.env.CORS_ORIGIN || 'http://localhost:5173')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'medref',
    password: process.env.DB_PASSWORD || 'medref',
    database: process.env.DB_NAME || 'medref_rdc',
  },
  jwt: {
    secret: process.env.JWT_SECRET || (env === 'production' ? '' : 'dev-secret-medref-rdc'),
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
};

if (env === 'production' && !config.jwt.secret) {
  throw new Error('JWT_SECRET doit être défini en production');
}

module.exports = config;
