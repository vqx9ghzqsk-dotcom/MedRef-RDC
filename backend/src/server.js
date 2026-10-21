'use strict';

const config = require('./config');
const { createApp } = require('./app');
const db = require('./db');
const journal = require('./journal');
const sauvegardeAuto = require('./sauvegardeAuto');
const veille = require('./services/veille');

process.on('unhandledRejection', (err) => {
  journal.ecrire('erreur', `Promesse rejetée non gérée : ${err?.message || err}`, { pile: err?.stack });
});
process.on('uncaughtException', (err) => {
  journal.ecrire('erreur', `Exception non gérée : ${err.message}`, { pile: err.stack });
  process.exit(1);
});

const app = createApp();
const server = app.listen(config.port, () => {
  console.log(`MedRef RDC API à l'écoute sur http://localhost:${config.port}`);
  journal.ecrire('info', 'Démarrage de l’API', { port: config.port, env: config.env });
  journal.nettoyer();
  sauvegardeAuto.demarrer();
  veille.demarrer(db);
});

async function shutdown(signal) {
  console.log(`${signal} reçu, arrêt en cours…`);
  server.close(async () => {
    await db.close();
    process.exit(0);
  });
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
