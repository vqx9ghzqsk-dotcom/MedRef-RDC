'use strict';

/**
 * Recherche globale : un seul endpoint, résultats regroupés par type.
 * FULLTEXT (mode booléen, préfixes) sur pathologies et médicaments + LIKE en repli,
 * LIKE sur molécules, examens, urgences, symptômes et scores.
 */

const express = require('express');
const db = require('../db');
const { asyncHandler, HttpError } = require('../utils/http');
const { OPERATEUR_VISIBLE } = require('../utils/visibilite');

const router = express.Router();
const LIMIT = 10;

/** "paludisme grave" → "+paludisme* +grave*" (opérateurs booléens neutralisés). */
function toBooleanQuery(q) {
  const tokens = q
    .replace(/[+\-<>()~*"@]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length >= 3);
  return tokens.length ? tokens.map((t) => `+${t}*`).join(' ') : null;
}

router.get(
  '/recherche',
  asyncHandler(async (req, res) => {
    const q = typeof req.query.q === 'string' ? req.query.q.trim() : '';
    if (q.length < 2) throw new HttpError(400, 'La recherche doit contenir au moins 2 caractères');
    if (q.length > 100) throw new HttpError(400, 'Recherche trop longue');

    const like = `%${q}%`;
    const boolean = toBooleanQuery(q);

    const pathologiesSql = boolean
      ? `SELECT p.id, p.nom, p.slug, p.resume, s.nom AS specialite, d.nom AS departement,
                MATCH(p.nom, p.definition) AGAINST (? IN BOOLEAN MODE) + (p.nom LIKE ?) * 10 AS score
           FROM pathologies p JOIN specialites s ON s.id = p.specialite_id JOIN departements d ON d.id = s.departement_id
          WHERE MATCH(p.nom, p.definition) AGAINST (? IN BOOLEAN MODE) OR p.nom LIKE ?
          ORDER BY score DESC, p.nom LIMIT ${LIMIT}`
      : `SELECT p.id, p.nom, p.slug, p.resume, s.nom AS specialite, d.nom AS departement
           FROM pathologies p JOIN specialites s ON s.id = p.specialite_id JOIN departements d ON d.id = s.departement_id
          WHERE p.nom LIKE ? ORDER BY p.nom LIMIT ${LIMIT}`;
    const pathologiesParams = boolean ? [boolean, like, boolean, like] : [like];

    const medicamentsSql = boolean
      ? `SELECT m.id, m.nom_commercial, m.dci, m.forme, m.dosage,
                MATCH(m.nom_commercial, m.dci, m.indication) AGAINST (? IN BOOLEAN MODE)
                  + (m.nom_commercial LIKE ? OR m.dci LIKE ?) * 10 AS score
           FROM medicaments m
          WHERE (MATCH(m.nom_commercial, m.dci, m.indication) AGAINST (? IN BOOLEAN MODE)
             OR m.nom_commercial LIKE ? OR m.dci LIKE ?) AND ${OPERATEUR_VISIBLE}
          ORDER BY score DESC, m.dci LIMIT ${LIMIT}`
      : `SELECT m.id, m.nom_commercial, m.dci, m.forme, m.dosage FROM medicaments m
          WHERE (m.nom_commercial LIKE ? OR m.dci LIKE ?) AND ${OPERATEUR_VISIBLE} ORDER BY m.dci LIMIT ${LIMIT}`;
    const medicamentsParams = boolean ? [boolean, like, like, boolean, like, like] : [like, like];

    const [pathologies, medicaments, molecules, examens, urgences, symptomes, scores, syndromes, glossaire] =
      await Promise.all([
        db.query(pathologiesSql, pathologiesParams),
        db.query(medicamentsSql, medicamentsParams),
        db.query(
          `SELECT mo.id, mo.dci, mo.slug, c.nom AS classe FROM molecules mo
           LEFT JOIN classes_pharmacologiques c ON c.id = mo.classe_id
          WHERE mo.dci LIKE ? ORDER BY mo.dci LIMIT ${LIMIT}`,
          [like],
        ),
        db.query(
          `SELECT id, nom, slug, type FROM examens WHERE nom LIKE ? OR description LIKE ?
          ORDER BY nom LIMIT ${LIMIT}`,
          [like, like],
        ),
        db.query(
          `SELECT id, nom, slug, categorie FROM urgences WHERE nom LIKE ? OR description LIKE ?
          ORDER BY nom LIMIT ${LIMIT}`,
          [like, like],
        ),
        db.query(`SELECT id, nom, slug FROM symptomes WHERE nom LIKE ? ORDER BY nom LIMIT ${LIMIT}`, [like]),
        db.query(
          `SELECT id, nom, slug, type FROM scores WHERE nom LIKE ? OR description LIKE ?
          ORDER BY nom LIMIT ${LIMIT}`,
          [like, like],
        ),
        db.query(`SELECT id, nom, slug FROM syndromes WHERE nom LIKE ? ORDER BY nom LIMIT ${LIMIT}`, [like]),
        db.query(
          `SELECT id, terme, slug, definition FROM glossaire WHERE terme LIKE ? OR variantes LIKE ?
          ORDER BY terme LIMIT ${LIMIT}`,
          [like, like],
        ),
      ]);

    const strip = (rows) => rows.map(({ score: _score, ...rest }) => rest);
    const data = {
      pathologies: strip(pathologies),
      medicaments: strip(medicaments),
      molecules,
      examens,
      urgences,
      symptomes,
      scores,
      syndromes,
      glossaire,
    };
    const total = Object.values(data).reduce((n, list) => n + list.length, 0);
    res.json({ query: q, total, data });
  }),
);

module.exports = router;
module.exports.toBooleanQuery = toBooleanQuery;
