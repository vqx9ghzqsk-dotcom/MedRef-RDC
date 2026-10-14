'use strict';

/**
 * Envoi d'e-mails (facultatif). Actif seulement si SMTP_HOST est défini dans .env ;
 * sinon, les fonctions qui en dépendent se rabattent sur un traitement par un
 * administrateur (ex. lien de réinitialisation généré depuis l'administration).
 */

const config = require('../config');

let transport = null;

const courrielActif = () => Boolean(config.smtp.host);

function obtenirTransport() {
  if (!transport) {
    const nodemailer = require('nodemailer');
    transport = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.secure,
      auth: config.smtp.user ? { user: config.smtp.user, pass: config.smtp.pass } : undefined,
    });
  }
  return transport;
}

/** Envoie un message texte ; lève une erreur si l'envoi échoue. */
async function envoyerCourriel({ a, sujet, texte }) {
  if (!courrielActif()) throw new Error('Envoi d’e-mails non configuré');
  await obtenirTransport().sendMail({ from: config.smtp.from, to: a, subject: sujet, text: texte });
}

module.exports = { courrielActif, envoyerCourriel };
