'use strict';

const config = require('./config');
const { createApp } = require('./app');
const db = require('./db');
const sauvegardeAuto = require('./sauvegardeAuto');

const app = createApp();
const server = app.listen(config.port, () => {
  console.log(`MedRef RDC API à l'écoute sur http://localhost:${config.port}`);
  sauvegardeAuto.demarrer();
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
