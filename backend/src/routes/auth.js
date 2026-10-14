'use strict';

const crypto = require('crypto');
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');
const config = require('../config');
const journal = require('../journal');
const { signToken, requireAuth, assertSessionActive } = require('../middleware/auth');
const { HttpError, asyncHandler } = require('../utils/http');
const { verifierMotDePasse } = require('../utils/motDePasse');
const { PROFILS, STRUCTURES, ORDRES, ORDRE_DU_PROFIL, PROVINCES } = require('../utils/profils');
const courriel = require('../services/courriel');

const router = express.Router();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Colonnes du compte renvoyées à l'interface (jamais le hachage du mot de passe). */
const COLONNES_PROFIL = [
  'profil',
  'specialite_exercee',
  'structure_type',
  'structure_nom',
  'province',
  'ordre_professionnel',
  'numero_ordre',
  'verification',
  'verification_motif',
];
const SELECT_COMPTE = `SELECT id, email, nom, role, token_version, ${COLONNES_PROFIL.join(', ')} FROM users`;

const publicUser = (u) => ({
  id: u.id,
  email: u.email,
  nom: u.nom,
  role: u.role,
  ...Object.fromEntries(COLONNES_PROFIL.map((k) => [k, u[k] ?? null])),
  verification: u.verification || 'non_demandee',
});

const texte = (value, max) => (typeof value === 'string' && value.trim() ? value.trim().slice(0, max) : null);

function validateCredentials(body, { withName }) {
  const errors = {};
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const password = typeof body.password === 'string' ? body.password : '';
  const nom = typeof body.nom === 'string' ? body.nom.trim() : '';
  if (!EMAIL_RE.test(email) || email.length > 190) errors.email = 'Adresse e-mail invalide';
  if (withName) {
    const probleme = verifierMotDePasse(password, { email, nom });
    if (probleme) errors.password = probleme;
  } else if (!password || password.length > 128) {
    errors.password = 'Mot de passe requis';
  }
  if (withName && (nom.length < 2 || nom.length > 120)) errors.nom = 'Nom requis (2 à 120 caractères)';
  return { email, password, nom, errors };
}

/** Profil professionnel et lieu d'exercice (inscription et « Mon compte »). */
function lireProfil(body, errors, { requis }) {
  const profil = body.profil || null;
  if (!profil) {
    if (requis) errors.profil = 'Choisissez votre profil';
  } else if (!PROFILS[profil]) errors.profil = 'Profil inconnu';
  const specialite = texte(body.specialite_exercee, 120);
  if (profil === 'medecin_specialiste' && !specialite)
    errors.specialite_exercee = 'Précisez votre spécialité';
  const structure = body.structure_type || null;
  if (structure && !STRUCTURES[structure]) errors.structure_type = 'Type de structure inconnu';
  const province = body.province || null;
  if (province && !PROVINCES.includes(province)) errors.province = 'Province inconnue';
  return {
    profil,
    specialite_exercee: profil === 'medecin_specialiste' ? specialite : null,
    structure_type: structure,
    structure_nom: texte(body.structure_nom, 190),
    province,
  };
}

const chargerCompte = async (id) => (await db.query(`${SELECT_COMPTE} WHERE id = ?`, [id]))[0];

router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const body = req.body || {};
    const { email, password, nom, errors } = validateCredentials(body, { withName: true });
    const profil = lireProfil(body, errors, { requis: true });
    if (Object.keys(errors).length) throw new HttpError(400, 'Données invalides', errors);
    const existing = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length) throw new HttpError(409, 'Un compte existe déjà avec cette adresse');
    const hash = await bcrypt.hash(password, 10);
    // Seul le rôle « user » est attribuable à l'inscription ; le profil est déclaratif.
    const result = await db.query(
      `INSERT INTO users (email, password_hash, nom, role, profil, specialite_exercee, structure_type,
                          structure_nom, province)
       VALUES (?, ?, ?, 'user', ?, ?, ?, ?, ?)`,
      [
        email,
        hash,
        nom,
        profil.profil,
        profil.specialite_exercee,
        profil.structure_type,
        profil.structure_nom,
        profil.province,
      ],
    );
    const user = { id: result.insertId, email, nom, role: 'user', ...profil, verification: 'non_demandee' };
    res.status(201).json({ token: signToken(user), user: publicUser(user) });
  }),
);

/**
 * Connexion. Après `maxEchecs` mots de passe erronés, le compte est bloqué
 * `blocageMinutes` (même avec le bon mot de passe) : protège contre le devinage.
 */
router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password, errors } = validateCredentials(req.body || {}, { withName: false });
    if (Object.keys(errors).length) throw new HttpError(400, 'Données invalides', errors);
    const rows = await db.query(
      `SELECT id, email, nom, role, password_hash, token_version, echecs_connexion,
              bloque_jusqu_a > NOW() AS bloque, ${COLONNES_PROFIL.join(', ')}
         FROM users WHERE email = ?`,
      [email],
    );
    const user = rows[0];
    if (user && Number(user.bloque)) {
      throw new HttpError(
        429,
        `Trop d'essais : compte bloqué temporairement, réessayez dans ${config.securite.blocageMinutes} minutes`,
      );
    }
    const ok = user ? await bcrypt.compare(password, user.password_hash) : false;
    if (!ok) {
      if (user) {
        const echecs = (Number(user.echecs_connexion) || 0) + 1;
        const bloquer = echecs >= config.securite.maxEchecs;
        await db.query(
          `UPDATE users SET echecs_connexion = ?,
                  bloque_jusqu_a = ${bloquer ? 'DATE_ADD(NOW(), INTERVAL ? MINUTE)' : 'bloque_jusqu_a'}
            WHERE id = ?`,
          bloquer ? [0, config.securite.blocageMinutes, user.id] : [echecs, user.id],
        );
      }
      throw new HttpError(401, 'E-mail ou mot de passe incorrect');
    }
    if (Number(user.echecs_connexion)) {
      await db.query('UPDATE users SET echecs_connexion = 0, bloque_jusqu_a = NULL WHERE id = ?', [user.id]);
    }
    res.json({ token: signToken(user), user: publicUser(user) });
  }),
);

router.get(
  '/me',
  requireAuth,
  asyncHandler(async (req, res) => {
    const user = await chargerCompte(req.user.id);
    assertSessionActive(req, user);
    res.json({ user: publicUser(user) });
  }),
);

/**
 * Mise à jour du profil (nom, profil, lieu d'exercice). Changer de profil annule
 * une vérification acquise ou en cours : l'ordre professionnel n'est plus le même.
 */
router.put(
  '/profil',
  requireAuth,
  asyncHandler(async (req, res) => {
    const body = req.body || {};
    const user = await chargerCompte(req.user.id);
    assertSessionActive(req, user);
    const errors = {};
    const nom = typeof body.nom === 'string' ? body.nom.trim() : '';
    if (nom.length < 2 || nom.length > 120) errors.nom = 'Nom requis (2 à 120 caractères)';
    const profil = lireProfil(body, errors, { requis: true });
    if (Object.keys(errors).length) throw new HttpError(400, 'Données invalides', errors);
    const changeDeProfil = user.profil && user.profil !== profil.profil;
    await db.query(
      `UPDATE users SET nom = ?, profil = ?, specialite_exercee = ?, structure_type = ?, structure_nom = ?,
              province = ?
              ${
                changeDeProfil
                  ? `, verification = 'non_demandee', ordre_professionnel = NULL, numero_ordre = NULL,
                     verification_motif = NULL, verifie_par = NULL, verifie_le = NULL`
                  : ''
              }
        WHERE id = ?`,
      [
        nom,
        profil.profil,
        profil.specialite_exercee,
        profil.structure_type,
        profil.structure_nom,
        profil.province,
        user.id,
      ],
    );
    res.json({ user: publicUser(await chargerCompte(user.id)) });
  }),
);

/** Demande de vérification du statut professionnel (numéro d'ordre, saisi après l'inscription). */
router.post(
  '/verification',
  requireAuth,
  asyncHandler(async (req, res) => {
    const body = req.body || {};
    const user = await chargerCompte(req.user.id);
    assertSessionActive(req, user);
    if (!user.profil) throw new HttpError(409, 'Complétez d’abord votre profil professionnel');
    if (user.profil === 'etudiant') {
      throw new HttpError(409, 'Le profil étudiant ne nécessite pas de numéro d’ordre');
    }
    if (user.verification === 'verifie') throw new HttpError(409, 'Votre compte est déjà vérifié');
    const errors = {};
    const ordre = body.ordre_professionnel;
    if (!ORDRES[ordre]) errors.ordre_professionnel = 'Choisissez votre ordre professionnel';
    else if (ORDRE_DU_PROFIL[user.profil] !== ordre) {
      errors.ordre_professionnel = 'Cet ordre ne correspond pas à votre profil';
    }
    const numero = texte(body.numero_ordre, 60);
    if (!numero || numero.length < 2) errors.numero_ordre = 'Numéro d’inscription à l’ordre requis';
    if (Object.keys(errors).length) throw new HttpError(400, 'Données invalides', errors);
    await db.query(
      `UPDATE users SET ordre_professionnel = ?, numero_ordre = ?, verification = 'en_attente',
              verification_demandee_le = NOW(), verification_motif = NULL, verifie_par = NULL, verifie_le = NULL
        WHERE id = ?`,
      [ordre, numero, user.id],
    );
    res.json({ user: publicUser(await chargerCompte(user.id)) });
  }),
);

/** Changement de mot de passe : déconnecte toutes les autres sessions du compte. */
router.post(
  '/password',
  requireAuth,
  asyncHandler(async (req, res) => {
    const body = req.body || {};
    const actuel = typeof body.actuel === 'string' ? body.actuel : '';
    const nouveau = typeof body.nouveau === 'string' ? body.nouveau : '';
    const rows = await db.query(
      `SELECT id, email, nom, role, password_hash, token_version, ${COLONNES_PROFIL.join(', ')}
         FROM users WHERE id = ?`,
      [req.user.id],
    );
    const user = rows[0];
    assertSessionActive(req, user);
    if (!actuel || !(await bcrypt.compare(actuel, user.password_hash))) {
      throw new HttpError(400, 'Données invalides', { actuel: 'Mot de passe actuel incorrect' });
    }
    const probleme =
      verifierMotDePasse(nouveau, user) ||
      (nouveau === actuel ? 'Le nouveau mot de passe doit être différent de l’actuel' : null);
    if (probleme) throw new HttpError(400, 'Données invalides', { nouveau: probleme });
    const hash = await bcrypt.hash(nouveau, 10);
    await db.query('UPDATE users SET password_hash = ?, token_version = token_version + 1 WHERE id = ?', [
      hash,
      user.id,
    ]);
    const updated = { ...user, token_version: (Number(user.token_version) || 0) + 1 };
    res.json({ token: signToken(updated), user: publicUser(updated) });
  }),
);

// ---------------------------------------------------------------- Mot de passe oublié

const hacherJeton = (jeton) => crypto.createHash('sha256').update(jeton).digest('hex');

/** Crée un lien de réinitialisation à usage unique ; seul le hachage du jeton est stocké. */
async function creerLienReinitialisation(userId, { canal, creePar = null }) {
  const jeton = crypto.randomBytes(32).toString('base64url');
  await db.query(
    `INSERT INTO reinitialisations_mot_de_passe (user_id, jeton_hash, canal, expire_le, cree_par)
     VALUES (?, ?, ?, DATE_ADD(NOW(), INTERVAL ? HOUR), ?)`,
    [userId, hacherJeton(jeton), canal, config.securite.reinitialisationHeures, creePar],
  );
  return `${config.appUrl}/reinitialiser-mot-de-passe?jeton=${jeton}`;
}

const MESSAGE_OUBLI =
  'Si un compte existe pour cette adresse, un lien de réinitialisation vous sera transmis : ' +
  'par e-mail, ou par un administrateur de MedRef RDC.';

/**
 * Demande de réinitialisation. La réponse est identique que le compte existe ou non
 * (pas de divulgation des adresses inscrites). Avec un serveur d'e-mail configuré, un
 * lien est envoyé ; sinon (ou si l'envoi échoue), la demande attend un administrateur.
 */
router.post(
  '/mot-de-passe-oublie',
  asyncHandler(async (req, res) => {
    const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
    if (!EMAIL_RE.test(email) || email.length > 190) {
      throw new HttpError(400, 'Données invalides', { email: 'Adresse e-mail invalide' });
    }
    const [user] = await db.query('SELECT id, email, nom FROM users WHERE email = ?', [email]);
    if (user) {
      let envoye = false;
      if (courriel.courrielActif()) {
        try {
          const lien = await creerLienReinitialisation(user.id, { canal: 'email' });
          await courriel.envoyerCourriel({
            a: user.email,
            sujet: 'MedRef RDC — réinitialisation de votre mot de passe',
            texte:
              `Bonjour ${user.nom},\n\nPour choisir un nouveau mot de passe, ouvrez ce lien ` +
              `(valable ${config.securite.reinitialisationHeures} heures, utilisable une seule fois) :\n\n${lien}\n\n` +
              'Si vous n’êtes pas à l’origine de cette demande, ignorez ce message.\n\nMedRef RDC',
          });
          envoye = true;
        } catch (err) {
          journal.ecrire('erreur', `Envoi de l’e-mail de réinitialisation impossible : ${err.message}`, {
            reference: req.reference,
          });
        }
      }
      if (!envoye) {
        const [enAttente] = await db.query(
          `SELECT id FROM reinitialisations_mot_de_passe
            WHERE user_id = ? AND canal = 'demande' AND traite_le IS NULL LIMIT 1`,
          [user.id],
        );
        if (!enAttente) {
          await db.query(
            "INSERT INTO reinitialisations_mot_de_passe (user_id, canal) VALUES (?, 'demande')",
            [user.id],
          );
        }
      }
    }
    res.json({ ok: true, message: MESSAGE_OUBLI });
  }),
);

/** Choix du nouveau mot de passe à partir d'un lien valide (non expiré, non utilisé). */
router.post(
  '/reinitialiser-mot-de-passe',
  asyncHandler(async (req, res) => {
    const body = req.body || {};
    const jeton = typeof body.jeton === 'string' ? body.jeton.trim() : '';
    const nouveau = typeof body.nouveau === 'string' ? body.nouveau : '';
    if (!jeton || jeton.length > 200) throw new HttpError(400, 'Lien de réinitialisation invalide');
    const resultat = await db.transaction(async (conn) => {
      const [[lien]] = await conn.execute(
        `SELECT r.id, r.user_id, r.expire_le > NOW() AS valide, r.utilise_le, u.email, u.nom
           FROM reinitialisations_mot_de_passe r JOIN users u ON u.id = r.user_id
          WHERE r.jeton_hash = ? FOR UPDATE`,
        [hacherJeton(jeton)],
      );
      if (!lien || lien.utilise_le || !Number(lien.valide)) {
        throw new HttpError(
          400,
          'Ce lien est invalide, expiré ou déjà utilisé : faites une nouvelle demande',
        );
      }
      const probleme = verifierMotDePasse(nouveau, { email: lien.email, nom: lien.nom });
      if (probleme) throw new HttpError(400, 'Données invalides', { nouveau: probleme });
      const hash = await bcrypt.hash(nouveau, 10);
      await conn.execute(
        `UPDATE users SET password_hash = ?, token_version = token_version + 1, echecs_connexion = 0,
                bloque_jusqu_a = NULL WHERE id = ?`,
        [hash, lien.user_id],
      );
      // Le lien est consommé ; les autres liens encore valides du compte sont annulés
      await conn.execute(
        `UPDATE reinitialisations_mot_de_passe SET utilise_le = NOW()
          WHERE user_id = ? AND jeton_hash IS NOT NULL AND utilise_le IS NULL`,
        [lien.user_id],
      );
      return { email: lien.email };
    });
    res.json({ ok: true, email: resultat.email });
  }),
);

module.exports = router;
module.exports.creerLienReinitialisation = creerLienReinitialisation;
module.exports.publicUser = publicUser;
