'use strict';

/**
 * Portes d'entrée transversales : Urgences, Symptômes, Scores/Calculatrices.
 */

const express = require('express');
const db = require('../db');
const { asyncHandler, notFound, HttpError } = require('../utils/http');

const router = express.Router();

const CATEGORIES = ['medicale', 'chirurgicale', 'gyneco-obstetricale', 'pediatrique'];
const pathoCols = `p.id, p.nom, p.slug, p.resume, s.nom AS specialite, d.nom AS departement`;
const pathoJoins = `JOIN specialites s ON s.id = p.specialite_id JOIN departements d ON d.id = s.departement_id`;

// ---------------------------------------------------------------- Urgences
router.get(
  '/urgences',
  asyncHandler(async (req, res) => {
    const { categorie } = req.query;
    if (categorie && !CATEGORIES.includes(categorie)) {
      throw new HttpError(400, 'Catégorie invalide', { categories: CATEGORIES });
    }
    const rows = await db.query(
      `SELECT u.id, u.nom, u.slug, u.categorie, u.description, COUNT(pu.pathologie_id) AS nb_pathologies
         FROM urgences u LEFT JOIN pathologie_urgences pu ON pu.urgence_id = u.id
        ${categorie ? 'WHERE u.categorie = ?' : ''}
        GROUP BY u.id
        ORDER BY u.nom`,
      categorie ? [categorie] : [],
    );
    res.json({ data: rows });
  }),
);

router.get(
  '/urgences/:slug',
  asyncHandler(async (req, res) => {
    const [u] = await db.query(
      `SELECT id, nom, slug, categorie, description, signes_gravite, conduite_abcde, quand_transferer
         FROM urgences WHERE slug = ?`,
      [req.params.slug],
    );
    if (!u) throw notFound('Urgence');
    const pathologies = await db.query(
      `SELECT ${pathoCols} FROM pathologie_urgences pu
         JOIN pathologies p ON p.id = pu.pathologie_id ${pathoJoins}
        WHERE pu.urgence_id = ? ORDER BY p.nom`,
      [u.id],
    );
    res.json({ data: { ...u, pathologies } });
  }),
);

// ---------------------------------------------------------------- Symptômes
router.get(
  '/symptomes',
  asyncHandler(async (_req, res) => {
    const rows = await db.query(
      `SELECT sy.id, sy.nom, sy.slug, sy.description, COUNT(ps.pathologie_id) AS nb_pathologies
         FROM symptomes sy LEFT JOIN pathologie_symptomes ps ON ps.symptome_id = sy.id
        GROUP BY sy.id
        ORDER BY sy.nom`,
    );
    res.json({ data: rows });
  }),
);

router.get(
  '/symptomes/:slug',
  asyncHandler(async (req, res) => {
    const [sy] = await db.query('SELECT id, nom, slug, description FROM symptomes WHERE slug = ?', [
      req.params.slug,
    ]);
    if (!sy) throw notFound('Symptôme');
    const pathologies = await db.query(
      `SELECT ${pathoCols}, ps.frequence FROM pathologie_symptomes ps
         JOIN pathologies p ON p.id = ps.pathologie_id ${pathoJoins}
        WHERE ps.symptome_id = ?
        ORDER BY FIELD(ps.frequence, 'tres_frequent', 'frequent', 'occasionnel', 'rare'), p.nom`,
      [sy.id],
    );
    res.json({ data: { ...sy, pathologies } });
  }),
);

// ---------------------------------------------------------------- Scores
router.get(
  '/scores',
  asyncHandler(async (_req, res) => {
    const rows = await db.query('SELECT id, nom, slug, code, type, description FROM scores ORDER BY nom');
    res.json({ data: rows });
  }),
);

router.get(
  '/scores/:slug',
  asyncHandler(async (req, res) => {
    const [sc] = await db.query(
      `SELECT id, nom, slug, code, type, description, interpretation, reference
         FROM scores WHERE slug = ?`,
      [req.params.slug],
    );
    if (!sc) throw notFound('Score');
    const pathologies = await db.query(
      `SELECT ${pathoCols} FROM pathologie_scores psc
         JOIN pathologies p ON p.id = psc.pathologie_id ${pathoJoins}
        WHERE psc.score_id = ? ORDER BY p.nom`,
      [sc.id],
    );
    res.json({ data: { ...sc, pathologies } });
  }),
);

// ---------------------------------------------------------------- Examens
router.get(
  '/examens',
  asyncHandler(async (_req, res) => {
    const rows = await db.query(
      `SELECT e.id, e.nom, e.slug, e.type, e.description, COUNT(DISTINCT pe.pathologie_id) AS nb_pathologies
         FROM examens e LEFT JOIN pathologie_examens pe ON pe.examen_id = e.id
        GROUP BY e.id
        ORDER BY FIELD(e.type, 'biologie', 'imagerie', 'exploration'), e.nom`,
    );
    res.json({ data: rows });
  }),
);

/** Examen : valeurs normales universelles + interprétation dans chaque pathologie. */
router.get(
  '/examens/:slug',
  asyncHandler(async (req, res) => {
    const [e] = await db.query(
      'SELECT id, nom, slug, type, description, valeurs_normales FROM examens WHERE slug = ?',
      [req.params.slug],
    );
    if (!e) throw notFound('Examen');
    const pathologies = await db.query(
      `SELECT ${pathoCols}, pe.categorie, pe.interpretation
         FROM pathologie_examens pe
         JOIN pathologies p ON p.id = pe.pathologie_id ${pathoJoins}
        WHERE pe.examen_id = ? ORDER BY p.nom, pe.ordre`,
      [e.id],
    );
    res.json({ data: { ...e, pathologies } });
  }),
);

module.exports = router;
module.exports.CATEGORIES = CATEGORIES;
