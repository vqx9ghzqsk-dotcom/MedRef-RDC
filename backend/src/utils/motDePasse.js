'use strict';

/**
 * Politique de mot de passe (inscription et changement) : 10 à 128 caractères,
 * au moins une lettre et un chiffre, ni trop courant, ni dérivé de l'e-mail ou du nom.
 */

const MIN = 10;
const MAX = 128;
const COURANTS = new Set([
  'motdepasse',
  'motdepasse1',
  'motdepasse123',
  'password',
  'password1',
  'password123',
  'azerty123',
  'azertyuiop',
  'qwerty123',
  '1234567890',
  '0123456789',
  'medrefrdc',
  'medref2026',
  'kinshasa123',
  'congo12345',
  'docteur123',
  'medecin123',
]);

const normaliser = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

/** Renvoie un message d'erreur, ou null si le mot de passe est acceptable. */
function verifierMotDePasse(password, { email, nom } = {}) {
  if (typeof password !== 'string' || password.length < MIN || password.length > MAX) {
    return `Le mot de passe doit contenir entre ${MIN} et ${MAX} caractères`;
  }
  if (!/\p{L}/u.test(password) || !/\d/.test(password)) {
    return 'Le mot de passe doit contenir au moins une lettre et un chiffre';
  }
  const pw = normaliser(password);
  if (COURANTS.has(pw) || /^(.)\1+$/.test(pw)) return 'Ce mot de passe est trop courant';
  const identifiant = normaliser(email).split('@')[0];
  const morceaux = [identifiant, ...normaliser(nom).split(/[^a-z0-9]+/)].filter((m) => m.length >= 4);
  if (morceaux.some((m) => pw.includes(m))) {
    return 'Le mot de passe ne doit pas reprendre votre e-mail ou votre nom';
  }
  return null;
}

module.exports = { verifierMotDePasse, MIN };
