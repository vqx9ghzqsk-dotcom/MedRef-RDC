'use strict';

/**
 * Page d'accueil (lot D).
 *   GET /api/accueil          : blocs publics (actualités publiées, nouveaux produits, fiches validées
 *                               ou mises à jour, innovations et protocoles) — mis en cache hors ligne.
 *   GET /api/accueil/pour-moi : bloc personnel selon le rôle (fiches à valider, comptes à vérifier,
 *                               fiches à revoir, état de la vérification du compte).
 */

const express = require('express');
const db = require('../db');
const { requireAuth, assertSessionActive, EDITOR_ROLES } = require('../middleware/auth');
const { asyncHandler } = require('../utils/http');
const { PERIMETRE } = require('./medicaments');

const router = express.Router();

const LIMITE = 8;

/** Actualités publiées et non expirées : alertes d'abord, puis les plus récentes. */
const ACTUALITES_PUBLIEES = `SELECT a.id, a.type, a.titre, a.resume, a.source_titre, a.source_url, a.zone,
       a.publie_le, a.expire_le, p.nom AS pathologie_nom, p.slug AS pathologie_slug,
       mo.dci AS molecule_dci, mo.slug AS molecule_slug
  FROM actualites a
  LEFT JOIN pathologies p ON p.id = a.pathologie_id
  LEFT JOIN molecules mo ON mo.id = a.molecule_id
 WHERE a.statut = 'publie' AND a.publie_le <= CURDATE()
   AND (a.expire_le IS NULL OR a.expire_le >= CURDATE())
 ORDER BY FIELD(a.type, 'alerte_sanitaire', 'pharmacovigilance', 'protocole', 'innovation', 'information'),
          a.publie_le DESC, a.id DESC
 LIMIT 30`;

router.get(
  '/accueil',
  asyncHandler(async (_req, res) => {
    const [actualites, produits, validees, misesAJour, totaux] = await Promise.all([
      db.query(ACTUALITES_PUBLIEES),
      db.query(
        `SELECT m.id, m.nom_commercial, m.dci, m.forme, m.dosage, m.photo_url, m.created_at,
                COALESCE(o.nom_affiche, o.nom) AS operateur
           FROM medicaments m LEFT JOIN operateurs o ON o.id = m.operateur_id
          WHERE ${PERIMETRE}
          ORDER BY m.created_at DESC, m.id DESC
          LIMIT ${LIMITE}`,
      ),
      db.query(
        `SELECT p.nom, p.slug, p.valide_le, v.nom AS valide_par, s.nom AS specialite
           FROM pathologies p
           JOIN specialites s ON s.id = p.specialite_id
           LEFT JOIN users v ON v.id = p.valide_par
          WHERE p.statut = 'valide' AND p.valide_le IS NOT NULL
          ORDER BY p.valide_le DESC
          LIMIT ${LIMITE}`,
      ),
      db.query(
        `SELECT p.nom, p.slug, p.statut, p.updated_at, s.nom AS specialite
           FROM pathologies p JOIN specialites s ON s.id = p.specialite_id
          WHERE p.statut <> 'brouillon'
          ORDER BY p.updated_at DESC
          LIMIT ${LIMITE}`,
      ),
      db.query(
        `SELECT (SELECT COUNT(*) FROM pathologies WHERE statut <> 'brouillon') AS fiches,
                (SELECT COUNT(*) FROM pathologies WHERE statut = 'valide') AS fiches_validees,
                (SELECT COUNT(*) FROM molecules) AS molecules,
                (SELECT COUNT(*) FROM medicaments m WHERE ${PERIMETRE}) AS produits,
                (SELECT COUNT(*) FROM autorisations_amm) AS amm`,
      ),
    ]);
    const t = totaux[0] || {};
    res.json({
      data: {
        alertes: actualites.filter((a) => a.type === 'alerte_sanitaire' || a.type === 'pharmacovigilance'),
        actualites: actualites.filter((a) => a.type !== 'alerte_sanitaire' && a.type !== 'pharmacovigilance'),
        produits,
        fiches_validees: validees,
        fiches_mises_a_jour: misesAJour,
        totaux: Object.fromEntries(Object.entries(t).map(([k, v]) => [k, Number(v)])),
      },
    });
  }),
);

router.get(
  '/accueil/pour-moi',
  requireAuth,
  asyncHandler(async (req, res) => {
    const [user] = await db.query(
      'SELECT id, role, profil, verification, token_version FROM users WHERE id = ?',
      [req.user.id],
    );
    assertSessionActive(req, user);
    const data = { role: user.role, verification: user.verification || 'non_demandee', profil: user.profil };
    if (EDITOR_ROLES.includes(user.role)) {
      const [c] = await db.query(
        `SELECT (SELECT COUNT(*) FROM pathologies WHERE statut = 'a_valider') AS fiches_a_valider,
                (SELECT COUNT(*) FROM pathologies
                  WHERE statut = 'valide' AND revision_le IS NOT NULL AND revision_le <= CURDATE()) AS fiches_a_revoir,
                (SELECT COUNT(*) FROM actualites WHERE statut = 'brouillon') AS actualites_a_publier,
                (SELECT COUNT(*) FROM users WHERE verification = 'en_attente') AS comptes_a_verifier`,
      );
      data.fiches_a_valider = Number(c.fiches_a_valider);
      data.fiches_a_revoir = Number(c.fiches_a_revoir);
      data.actualites_a_publier = Number(c.actualites_a_publier);
      // La vérification des comptes est réservée au rôle « admin »
      if (user.role === 'admin') data.comptes_a_verifier = Number(c.comptes_a_verifier);
    }
    res.json({ data });
  }),
);

module.exports = router;
