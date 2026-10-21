'use strict';

/**
 * Page d'accueil (lot D).
 *   GET /api/accueil          : blocs publics (actualités publiées, nouveaux produits, fiches validées
 *                               ou mises à jour, innovations et protocoles) — mis en cache hors ligne.
 *   GET /api/actualites       : toutes les actualités publiées (archive filtrable par type et zone).
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

/** Actualités publiées et non expirées, les plus récentes d'abord (les alertes sont séparées plus bas). */
const ACTUALITES_PUBLIEES = `SELECT a.id, a.type, a.titre, a.resume, a.source_titre, a.source_url, a.zone,
       a.publie_le, a.expire_le, a.origine, a.traduction_auto, a.langue_originale, a.titre_original,
       p.nom AS pathologie_nom, p.slug AS pathologie_slug,
       mo.dci AS molecule_dci, mo.slug AS molecule_slug
  FROM actualites a
  LEFT JOIN pathologies p ON p.id = a.pathologie_id
  LEFT JOIN molecules mo ON mo.id = a.molecule_id
 WHERE a.statut = 'publie' AND a.publie_le <= CURDATE()
   AND (a.expire_le IS NULL OR a.expire_le >= CURDATE())
 ORDER BY a.publie_le DESC, a.id DESC
 LIMIT 40`;

router.get(
  '/accueil',
  asyncHandler(async (_req, res) => {
    const [actualites, produits, validees, misesAJour, totaux] = await Promise.all([
      db.query(ACTUALITES_PUBLIEES),
      // Produits avec photo, les derniers modifiés d'abord : une photo ajoutée les fait remonter
      db.query(
        `SELECT m.id, m.nom_commercial, m.dci, m.forme, m.dosage, m.photo_url, m.created_at,
                COALESCE(o.nom_affiche, o.nom) AS operateur
           FROM medicaments m LEFT JOIN operateurs o ON o.id = m.operateur_id
          WHERE ${PERIMETRE} AND m.photo_url IS NOT NULL
          ORDER BY m.updated_at DESC, m.id DESC
          LIMIT ${LIMITE}`,
      ),
      db.query(
        `SELECT p.nom, p.slug, p.valide_le, v.nom AS valide_par, v.profil AS valide_par_profil,
                v.specialite_exercee AS valide_par_specialite, s.nom AS specialite
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

const TYPES = ['alerte_sanitaire', 'pharmacovigilance', 'protocole', 'innovation', 'information'];
const PAR_PAGE = 20;

/** Archive publique : actualités publiées (expirées comprises, signalées), les plus récentes d'abord. */
router.get(
  '/actualites',
  asyncHandler(async (req, res) => {
    const where = ["a.statut = 'publie'", 'a.publie_le <= CURDATE()'];
    const params = [];
    const { type, zone } = req.query;
    if (typeof type === 'string' && TYPES.includes(type)) {
      where.push('a.type = ?');
      params.push(type);
    }
    if (typeof zone === 'string' && zone.trim()) {
      // Une actualité sans zone concerne tout le pays : elle reste affichée
      where.push("(a.zone LIKE ? OR a.zone IS NULL OR a.zone = '')");
      params.push(`%${zone.trim().slice(0, 100)}%`);
    }
    const page = Math.max(1, Math.min(500, Number.parseInt(req.query.page, 10) || 1));
    const [lignes, total] = await Promise.all([
      db.query(
        `SELECT a.id, a.type, a.titre, a.resume, a.source_titre, a.source_url, a.zone, a.publie_le, a.expire_le,
                a.origine, a.traduction_auto, a.langue_originale, a.titre_original,
                (a.expire_le IS NOT NULL AND a.expire_le < CURDATE()) AS expiree,
                p.nom AS pathologie_nom, p.slug AS pathologie_slug, mo.dci AS molecule_dci, mo.slug AS molecule_slug
           FROM actualites a
           LEFT JOIN pathologies p ON p.id = a.pathologie_id
           LEFT JOIN molecules mo ON mo.id = a.molecule_id
          WHERE ${where.join(' AND ')}
          ORDER BY a.publie_le DESC, a.id DESC
          LIMIT ${PAR_PAGE} OFFSET ${(page - 1) * PAR_PAGE}`,
        params,
      ),
      db.query(`SELECT COUNT(*) AS n FROM actualites a WHERE ${where.join(' AND ')}`, params),
    ]);
    res.json({
      data: lignes.map((a) => ({ ...a, expiree: Boolean(Number(a.expiree)) })),
      page,
      par_page: PAR_PAGE,
      total: Number(total[0]?.n || 0),
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
