'use strict';

/**
 * Journal des erreurs : une ligne JSON par événement dans logs/api-AAAA-MM-JJ.log
 * (30 jours conservés). Chaque requête reçoit une référence (en-tête X-Request-Id)
 * qui est renvoyée à l'utilisateur en cas d'erreur, pour retrouver la ligne du journal.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const config = require('./config');

const CONSERVATION_JOURS = 30;
const actif = () => config.env !== 'test';

function fichierDuJour(date = new Date()) {
  return path.join(config.logDir, `api-${date.toISOString().slice(0, 10)}.log`);
}

/** Écrit un événement ; ne lève jamais d'exception (le journal ne doit pas casser l'API). */
function ecrire(niveau, message, details = {}) {
  const ligne = { date: new Date().toISOString(), niveau, message, ...details };
  if (niveau === 'erreur' && actif()) console.error(`[${ligne.date}] ${message}`, details.reference || '');
  if (!actif()) return ligne;
  try {
    fs.mkdirSync(config.logDir, { recursive: true });
    fs.appendFileSync(fichierDuJour(), `${JSON.stringify(ligne)}\n`);
  } catch (err) {
    console.error('Journal indisponible :', err.message);
  }
  return ligne;
}

/** Supprime les journaux de plus de 30 jours. */
function nettoyer(maintenant = Date.now()) {
  if (!fs.existsSync(config.logDir)) return [];
  const limite = maintenant - CONSERVATION_JOURS * 86400000;
  const supprimes = [];
  for (const f of fs.readdirSync(config.logDir)) {
    const m = /^api-(\d{4}-\d{2}-\d{2})\.log$/.exec(f);
    if (m && Date.parse(m[1]) < limite) {
      fs.unlinkSync(path.join(config.logDir, f));
      supprimes.push(f);
    }
  }
  return supprimes;
}

/** Middleware : référence unique par requête. */
function referenceRequete(req, res, next) {
  const recue = req.get('x-request-id');
  req.reference = recue && /^[\w-]{8,64}$/.test(recue) ? recue : crypto.randomBytes(6).toString('hex');
  res.set('X-Request-Id', req.reference);
  next();
}

module.exports = { ecrire, nettoyer, referenceRequete, fichierDuJour };
