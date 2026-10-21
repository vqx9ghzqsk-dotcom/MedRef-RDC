'use strict';

const path = require('path');

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
  backup: {
    // Dossier des sauvegardes : de préférence hors du projet (disque externe, dossier synchronisé)
    dir: path.resolve(process.env.BACKUP_DIR || path.join(__dirname, '..', 'backups')),
    keep: Number(process.env.BACKUP_KEEP) || 30,
    // Sauvegarde automatique au démarrage de l'API puis toutes les N heures
    auto: process.env.BACKUP_AUTO ? process.env.BACKUP_AUTO !== '0' : env !== 'test',
    intervalHours: Number(process.env.BACKUP_INTERVAL_HOURS) || 24,
  },
  // Veille automatique des actualités (sources officielles), publiée sans validation manuelle
  veille: {
    auto: process.env.VEILLE_AUTO ? process.env.VEILLE_AUTO !== '0' : env !== 'test',
    intervalleHeures: Number(process.env.VEILLE_INTERVALLE_HEURES) || 3,
    // Traduction et tri : nécessite ANTHROPIC_API_KEY ; sinon tri par mots-clés sans traduction
    modele: process.env.VEILLE_MODELE || 'claude-opus-5-5',
  },
  contenu: {
    // Délai avant qu'une fiche validée soit signalée « à revoir »
    revisionMois: Number(process.env.REVISION_MOIS) || 24,
    // 1 = celui qui modifie une fiche ne peut pas la valider lui-même
    doubleValidation: process.env.VALIDATION_DOUBLE === '1',
  },
  securite: {
    maxEchecs: Number(process.env.CONNEXION_MAX_ECHECS) || 5,
    blocageMinutes: Number(process.env.CONNEXION_BLOCAGE_MINUTES) || 15,
    // Durée de validité d'un lien de réinitialisation du mot de passe
    reinitialisationHeures: Number(process.env.REINITIALISATION_HEURES) || 24,
  },
  // Adresse de l'application (liens envoyés : réinitialisation du mot de passe)
  appUrl: (process.env.APP_URL || 'http://localhost:5173').replace(/\/+$/, ''),
  // Envoi d'e-mails : facultatif ; sans SMTP_HOST, un administrateur génère les liens
  smtp: {
    host: process.env.SMTP_HOST || '',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === '1',
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
    from: process.env.SMTP_FROM || 'MedRef RDC <no-reply@medref.cd>',
  },
  logDir: path.resolve(process.env.LOG_DIR || path.join(__dirname, '..', 'logs')),
  jwt: {
    secret: process.env.JWT_SECRET || (env === 'production' ? '' : 'dev-secret-medref-rdc'),
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    // Sessions plus courtes pour les comptes qui peuvent modifier le contenu
    editorExpiresIn: process.env.JWT_EDITOR_EXPIRES_IN || '12h',
  },
};

/** Valeurs d'exemple ou de développement à ne jamais utiliser en production. */
const SECRETS_INTERDITS = ['change-me-with-a-long-random-string', 'dev-secret-medref-rdc', 'ci-secret'];

function verifierProduction(c) {
  const problemes = [];
  if (!c.jwt.secret || SECRETS_INTERDITS.includes(c.jwt.secret) || c.jwt.secret.length < 32) {
    problemes.push('JWT_SECRET doit être une chaîne aléatoire d’au moins 32 caractères');
  }
  if (!process.env.DB_PASSWORD || ['medref', 'root', ''].includes(c.db.password)) {
    problemes.push('DB_PASSWORD doit être défini et différent des valeurs par défaut');
  }
  if (problemes.length) {
    throw new Error(`Configuration de production refusée :\n  - ${problemes.join('\n  - ')}`);
  }
}

if (env === 'production') verifierProduction(config);

module.exports = config;
module.exports.verifierProduction = verifierProduction;
