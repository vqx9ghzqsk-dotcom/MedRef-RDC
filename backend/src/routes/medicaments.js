'use strict';

/**
 * Médicaments : classe → molécule (DCI, fiche pharmacologique) → produit
 * commercial d'un opérateur (seul ou en association).
 */

const express = require('express');
const db = require('../db');
const { asyncHandler, notFound, toInt } = require('../utils/http');

const router = express.Router();

const LIGNE_RANK = { premiere: 1, deuxieme: 2, alternative: 3, adjuvant: 4 };
const POSOLOGIE_COLS = `pos.id, pos.molecule_id, pos.population, pos.indication, pos.voie, pos.dose_texte,
  pos.dose_par_kg, pos.dose_max, pos.unite, pos.frequence, pos.duree, pos.securite, pos.remarque`;
const POSOLOGIE_ORDER = "FIELD(pos.population, 'adulte', 'enfant', 'nouveau_ne', 'grossesse'), pos.ordre";

/** DECIMAL arrive en chaîne depuis mysql2 : on renvoie des nombres (ou null). */
const toPosologie = ({ molecule_id: _m, dose_par_kg: kg, dose_max: max, ...p }) => ({
  ...p,
  dose_par_kg: kg === null ? null : Number(kg),
  dose_max: max === null ? null : Number(max),
});

const FICHE_COLS = `mo.mecanisme, mo.pharmacocinetique, mo.indications, mo.posologie, mo.contre_indications,
  mo.effets_indesirables, mo.interactions, mo.grossesse_allaitement, mo.surveillance`;

/** Une ligne par pathologie, en gardant la meilleure ligne thérapeutique. */
function dedupePathologies(rows) {
  const byId = new Map();
  for (const row of rows) {
    const current = byId.get(row.id);
    if (!current || LIGNE_RANK[row.ligne] < LIGNE_RANK[current.ligne]) byId.set(row.id, row);
  }
  return [...byId.values()].sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
}

router.get(
  '/medicaments/filtres',
  asyncHandler(async (_req, res) => {
    const [operateurs, classes, molecules] = await Promise.all([
      db.query('SELECT id, nom, type, pays FROM operateurs ORDER BY nom'),
      db.query('SELECT id, nom FROM classes_pharmacologiques ORDER BY nom'),
      db.query('SELECT dci FROM molecules ORDER BY dci'),
    ]);
    res.json({ data: { operateurs, classes, molecules: molecules.map((m) => m.dci) } });
  }),
);

router.get(
  '/medicaments',
  asyncHandler(async (req, res) => {
    const where = [];
    const params = [];
    const operateur = toInt(req.query.operateur);
    const classe = toInt(req.query.classe);
    if (operateur) {
      where.push('m.operateur_id = ?');
      params.push(operateur);
    }
    // Molécule et classe : le produit les contient seule ou en association
    if (classe) {
      where.push(`EXISTS (SELECT 1 FROM medicament_molecules mm JOIN molecules mo ON mo.id = mm.molecule_id
                   WHERE mm.medicament_id = m.id AND mo.classe_id = ?)`);
      params.push(classe);
    }
    if (typeof req.query.molecule === 'string' && req.query.molecule.trim()) {
      where.push(`EXISTS (SELECT 1 FROM medicament_molecules mm JOIN molecules mo ON mo.id = mm.molecule_id
                   WHERE mm.medicament_id = m.id AND mo.dci = ?)`);
      params.push(req.query.molecule.trim());
    }
    if (typeof req.query.q === 'string' && req.query.q.trim()) {
      const like = `%${req.query.q.trim()}%`;
      where.push('(m.nom_commercial LIKE ? OR m.dci LIKE ?)');
      params.push(like, like);
    }
    const rows = await db.query(
      `SELECT m.id, m.nom_commercial, m.dci, m.forme, m.dosage, m.photo_url, m.disponible_rdc,
              m.prix_indicatif_cdf, c.id AS classe_id, c.nom AS classe, o.id AS operateur_id, o.nom AS operateur
         FROM medicaments m
         LEFT JOIN classes_pharmacologiques c ON c.id = m.classe_id
         LEFT JOIN operateurs o ON o.id = m.operateur_id
        ${where.length ? `WHERE ${where.join(' AND ')}` : ''}
        ORDER BY c.nom, m.dci, m.nom_commercial`,
      params,
    );
    res.json({ data: rows.map((r) => ({ ...r, disponible_rdc: Boolean(r.disponible_rdc) })) });
  }),
);

/** Fiche produit : identification, données propres au produit et fiche de chaque molécule. */
router.get(
  '/medicaments/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Médicament');
    const [m] = await db.query(
      `SELECT m.*, c.nom AS classe, o.nom AS operateur, o.type AS operateur_type, o.pays AS operateur_pays,
              o.site_web AS operateur_site
         FROM medicaments m
         LEFT JOIN classes_pharmacologiques c ON c.id = m.classe_id
         LEFT JOIN operateurs o ON o.id = m.operateur_id
        WHERE m.id = ?`,
      [id],
    );
    if (!m) throw notFound('Médicament');
    const [composition, pathologies, autres_produits, posologies] = await Promise.all([
      db.query(
        `SELECT mo.id, mo.dci, mo.slug, mm.dosage, c.nom AS classe, ${FICHE_COLS}
           FROM medicament_molecules mm
           JOIN molecules mo ON mo.id = mm.molecule_id
           LEFT JOIN classes_pharmacologiques c ON c.id = mo.classe_id
          WHERE mm.medicament_id = ? ORDER BY mm.ordre`,
        [id],
      ),
      db.query(
        `SELECT p.id, p.nom, p.slug, mp.ligne
           FROM medicament_molecules mm
           JOIN molecule_pathologies mp ON mp.molecule_id = mm.molecule_id
           JOIN pathologies p ON p.id = mp.pathologie_id
          WHERE mm.medicament_id = ? ORDER BY p.nom`,
        [id],
      ),
      // Même composition, autres opérateurs
      db.query(
        `SELECT m.id, m.nom_commercial, o.nom AS operateur
           FROM medicaments m LEFT JOIN operateurs o ON o.id = m.operateur_id
          WHERE m.dci = ? AND m.id <> ? ORDER BY m.nom_commercial`,
        [m.dci, id],
      ),
      db.query(
        `SELECT ${POSOLOGIE_COLS}
           FROM molecule_posologies pos
           JOIN medicament_molecules mm ON mm.molecule_id = pos.molecule_id
          WHERE mm.medicament_id = ? ORDER BY ${POSOLOGIE_ORDER}`,
        [id],
      ),
    ]);
    res.json({
      data: {
        ...m,
        disponible_rdc: Boolean(m.disponible_rdc),
        association: composition.length > 1,
        composition: composition.map((c) => ({
          ...c,
          posologies: (posologies || []).filter((pos) => pos.molecule_id === c.id).map(toPosologie),
        })),
        pathologies: dedupePathologies(pathologies),
        autres_produits,
      },
    });
  }),
);

// ---------------------------------------------------------------- Molécules
router.get(
  '/molecules',
  asyncHandler(async (_req, res) => {
    const rows = await db.query(
      `SELECT mo.id, mo.dci, mo.slug, c.nom AS classe, COUNT(mm.medicament_id) AS nb_produits
         FROM molecules mo
         LEFT JOIN classes_pharmacologiques c ON c.id = mo.classe_id
         LEFT JOIN medicament_molecules mm ON mm.molecule_id = mo.id
        GROUP BY mo.id
        ORDER BY mo.dci`,
    );
    res.json({ data: rows });
  }),
);

/** Fiche molécule : pharmacologie + produits de chaque opérateur (seule ou en association). */
router.get(
  '/molecules/:slug',
  asyncHandler(async (req, res) => {
    const [mo] = await db.query(
      `SELECT mo.id, mo.dci, mo.slug, c.nom AS classe, ${FICHE_COLS}
         FROM molecules mo LEFT JOIN classes_pharmacologiques c ON c.id = mo.classe_id
        WHERE mo.slug = ?`,
      [req.params.slug],
    );
    if (!mo) throw notFound('Molécule');
    const [produits, pathologies, posologies] = await Promise.all([
      db.query(
        `SELECT m.id, m.nom_commercial, m.dci AS composition, m.forme, m.dosage, m.disponible_rdc,
                mm.dosage AS dosage_molecule, o.nom AS operateur, o.pays AS operateur_pays,
                (SELECT COUNT(*) FROM medicament_molecules x WHERE x.medicament_id = m.id) AS nb_molecules
           FROM medicament_molecules mm
           JOIN medicaments m ON m.id = mm.medicament_id
           LEFT JOIN operateurs o ON o.id = m.operateur_id
          WHERE mm.molecule_id = ?
          ORDER BY nb_molecules, o.nom, m.nom_commercial`,
        [mo.id],
      ),
      db.query(
        `SELECT p.id, p.nom, p.slug, mp.ligne, mp.contexte
           FROM molecule_pathologies mp JOIN pathologies p ON p.id = mp.pathologie_id
          WHERE mp.molecule_id = ? ORDER BY p.nom`,
        [mo.id],
      ),
      db.query(
        `SELECT ${POSOLOGIE_COLS} FROM molecule_posologies pos WHERE pos.molecule_id = ? ORDER BY ${POSOLOGIE_ORDER}`,
        [mo.id],
      ),
    ]);
    res.json({
      data: {
        ...mo,
        posologies: (posologies || []).map(toPosologie),
        produits: produits.map(({ nb_molecules: nb, disponible_rdc: rdc, ...p }) => ({
          ...p,
          disponible_rdc: Boolean(rdc),
          association: Number(nb) > 1,
        })),
        pathologies,
      },
    });
  }),
);

module.exports = router;
module.exports.dedupePathologies = dedupePathologies;
