'use strict';

/**
 * Sauvegarde automatique pendant que l'API tourne : au démarrage si la dernière
 * sauvegarde périodique a plus de `intervalHours`, puis vérification toutes les heures.
 */

const config = require('./config');
const { connect } = require('../db/connexion');
const { backup, listBackups } = require('../db/sauvegarde');

const HEURE = 60 * 60 * 1000;

function derniereSauvegarde() {
  const periodique = listBackups(config.backup.dir, config.db.database).find((b) => !b.motif);
  return periodique ? periodique.mtime : null;
}

async function sauvegarderSiNecessaire({ maintenant = Date.now(), log = console } = {}) {
  const derniere = derniereSauvegarde();
  if (derniere && maintenant - derniere.getTime() < config.backup.intervalHours * HEURE) return null;
  let conn;
  try {
    conn = await connect();
    const s = await backup(conn, { dir: config.backup.dir, keep: config.backup.keep });
    log.log(`✔ Sauvegarde automatique : ${s.file}`);
    return s;
  } catch (err) {
    // Une sauvegarde ratée ne doit jamais arrêter l'API, mais doit se voir
    log.error(`✖ Sauvegarde automatique impossible : ${err.message}`);
    return null;
  } finally {
    if (conn) await conn.end().catch(() => {});
  }
}

function demarrer() {
  if (!config.backup.auto) return null;
  sauvegarderSiNecessaire();
  const timer = setInterval(() => sauvegarderSiNecessaire(), HEURE);
  timer.unref();
  return timer;
}

module.exports = { demarrer, sauvegarderSiNecessaire };
