'use strict';

/**
 * Médicaments : classe → molécule (DCI, fiche pharmacologique) → produit
 * commercial d'un opérateur (seul ou en association).
 */

const express = require('express');
const db = require('../db');
const { asyncHandler, notFound, toInt } = require('../utils/http');
const { OPERATEUR_VISIBLE } = require('../utils/visibilite');

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
  mo.effets_indesirables, mo.interactions, mo.grossesse_allaitement, mo.surveillance, mo.precautions,
  mo.fiche_source, mo.fiche_a_valider`;
const LIMITE_LISTE = 300;
/** Le produit a au moins une autorisation de mise sur le marché enregistrée (ACOREP). */
const AMM_EXISTE = 'EXISTS (SELECT 1 FROM autorisations_amm a WHERE a.medicament_id = m.id)';
/**
 * Périmètre de la page Médicaments : médicaments des opérateurs retenus, autorisés en RDC
 * (AMM ACOREP) ou présentés avec leur photo dans le catalogue fourni par une firme (sans
 * condition d'AMM). Les produits ajoutés par l'IA (`ajoute_par_ia`, ex. Organon) suivent la
 * règle des produits sans photo : AMM obligatoire. Cosmétiques, dispositifs et compléments restent en base, hors page.
 */
const PERIMETRE = `m.nature = 'medicament' AND (${AMM_EXISTE} OR (m.photo_url IS NOT NULL AND m.ajoute_par_ia = 0)) AND ${OPERATEUR_VISIBLE}`;
const EXTERNES_COLS =
  'fe.molecule_id, fe.source, fe.nom, fe.classe, fe.mecanisme, fe.indications, fe.posologie, fe.precautions, fe.a_valider';

const versFiche = (mo) => ({ ...mo, fiche_a_valider: Boolean(mo.fiche_a_valider) });
const versExterne = ({ molecule_id: _m, a_valider: v, ...fe }) => ({ ...fe, a_valider: Boolean(v) });

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
    // Seulement les opérateurs, classes et molécules qui ont des médicaments du périmètre
    const [operateurs, classes, molecules] = await Promise.all([
      db.query(
        `SELECT o.id, COALESCE(o.nom_affiche, o.nom) AS nom, o.type, o.pays FROM operateurs o
          WHERE EXISTS (SELECT 1 FROM medicaments m WHERE m.operateur_id = o.id AND ${PERIMETRE})
          ORDER BY o.nom`,
      ),
      db.query(
        `SELECT c.id, c.nom FROM classes_pharmacologiques c
          WHERE EXISTS (SELECT 1 FROM molecules mo JOIN medicament_molecules mm ON mm.molecule_id = mo.id
                          JOIN medicaments m ON m.id = mm.medicament_id
                         WHERE mo.classe_id = c.id AND ${PERIMETRE})
          ORDER BY c.nom`,
      ),
      db.query(
        `SELECT mo.dci FROM molecules mo
          WHERE EXISTS (SELECT 1 FROM medicament_molecules mm JOIN medicaments m ON m.id = mm.medicament_id
                         WHERE mm.molecule_id = mo.id AND ${PERIMETRE})
          ORDER BY mo.dci`,
      ),
    ]);
    res.json({ data: { operateurs, classes, molecules: molecules.map((m) => m.dci) } });
  }),
);

/** Groupe thérapeutique du produit : celui de sa première molécule qui en a un. */
const GROUPE_PRODUIT = `(SELECT mo.groupe_therapeutique FROM medicament_molecules mm
    JOIN molecules mo ON mo.id = mm.molecule_id
   WHERE mm.medicament_id = m.id AND mo.groupe_therapeutique IS NOT NULL
   ORDER BY mm.ordre LIMIT 1)`;

/**
 * Suggestions instantanées (dès 2 lettres) : produits par marque, DCI ou firme, et
 * molécules ; les noms qui commencent par la saisie d'abord.
 */
router.get(
  '/medicaments/suggestions',
  asyncHandler(async (req, res) => {
    const q = typeof req.query.q === 'string' ? req.query.q.trim().slice(0, 80) : '';
    if (q.length < 2) return res.json({ data: { produits: [], molecules: [] } });
    const debut = `${q}%`;
    const dedans = `%${q}%`;
    const [produits, molecules] = await Promise.all([
      db.query(
        `SELECT m.id, m.nom_commercial, m.dci, m.dosage, m.forme_categorie, m.photo_url, m.nature,
                COALESCE(o.nom_affiche, o.nom) AS operateur, ${AMM_EXISTE} AS amm
           FROM medicaments m LEFT JOIN operateurs o ON o.id = m.operateur_id
          WHERE ${PERIMETRE} AND (m.nom_commercial LIKE ? OR m.dci LIKE ? OR o.nom LIKE ?)
          ORDER BY (m.nom_commercial LIKE ?) DESC, (m.dci LIKE ?) DESC, m.photo_url IS NULL, m.nom_commercial
          LIMIT 10`,
        [dedans, dedans, dedans, debut, debut],
      ),
      db.query(
        `SELECT mo.id, mo.dci, mo.slug, mo.groupe_therapeutique,
                (SELECT COUNT(*) FROM medicament_molecules mm JOIN medicaments m ON m.id = mm.medicament_id
                  WHERE mm.molecule_id = mo.id AND ${PERIMETRE}) AS nb_produits
           FROM molecules mo
          WHERE mo.dci LIKE ?
          HAVING nb_produits > 0
          ORDER BY (mo.dci LIKE ?) DESC, nb_produits DESC
          LIMIT 5`,
        [dedans, debut],
      ),
    ]);
    res.json({
      data: {
        produits: produits.map((p) => ({ ...p, amm: Boolean(p.amm) })),
        molecules: molecules.map((m) => ({ ...m, nb_produits: Number(m.nb_produits) })),
      },
    });
  }),
);

/** Entrées par domaine de la page Médicaments : groupes, formes, enfant, firmes, avec compteurs. */
router.get(
  '/medicaments/domaines',
  asyncHandler(async (_req, res) => {
    const [groupes, formes, [enfant], firmes] = await Promise.all([
      db.query(
        `SELECT mo.groupe_therapeutique AS nom, COUNT(DISTINCT mm.medicament_id) AS n
           FROM medicament_molecules mm JOIN molecules mo ON mo.id = mm.molecule_id
           JOIN medicaments m ON m.id = mm.medicament_id
          WHERE mo.groupe_therapeutique IS NOT NULL AND ${PERIMETRE}
          GROUP BY mo.groupe_therapeutique ORDER BY n DESC`,
      ),
      db.query(
        `SELECT m.forme_categorie AS nom, COUNT(*) AS n FROM medicaments m
          WHERE m.forme_categorie IS NOT NULL AND m.forme_categorie <> 'Forme non précisée' AND ${PERIMETRE}
          GROUP BY m.forme_categorie ORDER BY n DESC`,
      ),
      db.query(`SELECT COUNT(*) AS n FROM medicaments m WHERE m.pediatrique = 1 AND ${PERIMETRE}`),
      db.query(
        `SELECT o.id, COALESCE(o.nom_affiche, o.nom) AS nom, COUNT(*) AS n, SUM(m.photo_url IS NOT NULL) AS photos
           FROM medicaments m JOIN operateurs o ON o.id = m.operateur_id
          WHERE ${PERIMETRE}
          GROUP BY o.id ORDER BY n DESC LIMIT 60`,
      ),
    ]);
    const nombre = (rows) => rows.map((r) => ({ ...r, n: Number(r.n) }));
    res.json({
      data: {
        groupes: nombre(groupes),
        formes: nombre(formes),
        enfant: Number(enfant?.n || 0),
        firmes: firmes.map((f) => ({ ...f, n: Number(f.n), photos: Number(f.photos) })),
      },
    });
  }),
);

router.get(
  '/medicaments',
  asyncHandler(async (req, res) => {
    const where = [PERIMETRE];
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
    // Entrées par domaine : groupe thérapeutique d'une des molécules, forme, adapté à l'enfant
    if (typeof req.query.groupe === 'string' && req.query.groupe.trim()) {
      where.push(`EXISTS (SELECT 1 FROM medicament_molecules mm JOIN molecules mo ON mo.id = mm.molecule_id
                   WHERE mm.medicament_id = m.id AND mo.groupe_therapeutique = ?)`);
      params.push(req.query.groupe.trim());
    }
    if (typeof req.query.forme === 'string' && req.query.forme.trim()) {
      where.push('m.forme_categorie = ?');
      params.push(req.query.forme.trim());
    }
    if (req.query.enfant === '1') where.push('m.pediatrique = 1');
    // Plusieurs milliers de produits (répertoire des AMM) : une page à la fois, total en plus
    const rows = await db.query(
      `SELECT m.id, m.nom_commercial, m.dci, m.nature, m.forme, m.dosage, m.photo_url, m.disponible_rdc,
              m.prix_indicatif_cdf, m.forme_categorie, m.catalogue_classe, ${AMM_EXISTE} AS amm,
              c.id AS classe_id, c.nom AS classe, o.id AS operateur_id, COALESCE(o.nom_affiche, o.nom) AS operateur,
              m.pediatrique, ${GROUPE_PRODUIT} AS groupe, COUNT(*) OVER () AS total
         FROM medicaments m
         LEFT JOIN classes_pharmacologiques c ON c.id = m.classe_id
         LEFT JOIN operateurs o ON o.id = m.operateur_id
        WHERE ${where.join(' AND ')}
        ORDER BY groupe IS NULL, groupe, m.nom_commercial
        LIMIT ${LIMITE_LISTE}`,
      params,
    );
    res.json({
      data: rows.map(({ total: _t, ...r }) => ({
        ...r,
        disponible_rdc: Boolean(r.disponible_rdc),
        amm: Boolean(r.amm),
        pediatrique: Boolean(r.pediatrique),
      })),
      total: Number(rows[0]?.total || 0),
      limite: LIMITE_LISTE,
    });
  }),
);

/** Fiche produit : identification, données propres au produit et fiche de chaque molécule. */
router.get(
  '/medicaments/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Médicament');
    const [m] = await db.query(
      `SELECT m.*, c.nom AS classe, COALESCE(o.nom_affiche, o.nom) AS operateur, o.slug AS operateur_slug, o.type AS operateur_type,
              o.pays AS operateur_pays, o.site_web AS operateur_site
         FROM medicaments m
         LEFT JOIN classes_pharmacologiques c ON c.id = m.classe_id
         LEFT JOIN operateurs o ON o.id = m.operateur_id
        WHERE m.id = ?`,
      [id],
    );
    if (!m) throw notFound('Médicament');
    const [composition, pathologies, autres_produits, posologies, autorisations, externes] =
      await Promise.all([
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
          `SELECT m.id, m.nom_commercial, m.photo_url, m.forme_categorie, COALESCE(o.nom_affiche, o.nom) AS operateur
           FROM medicaments m LEFT JOIN operateurs o ON o.id = m.operateur_id
          WHERE m.dci = ? AND m.id <> ? AND ${OPERATEUR_VISIBLE} ORDER BY o.nom, m.nom_commercial`,
          [m.dci, id],
        ),
        db.query(
          `SELECT ${POSOLOGIE_COLS}
           FROM molecule_posologies pos
           JOIN medicament_molecules mm ON mm.molecule_id = pos.molecule_id
          WHERE mm.medicament_id = ? ORDER BY ${POSOLOGIE_ORDER}`,
          [id],
        ),
        db.query(
          `SELECT id, source, marque, dci, dosage, forme, conditionnement, classe, provenance, numero
           FROM autorisations_amm WHERE medicament_id = ? ORDER BY id`,
          [id],
        ),
        db.query(
          `SELECT ${EXTERNES_COLS}
           FROM medicament_molecules mm JOIN molecule_fiches_externes fe ON fe.molecule_id = mm.molecule_id
          WHERE mm.medicament_id = ?`,
          [id],
        ),
      ]);
    res.json({
      data: {
        ...m,
        disponible_rdc: Boolean(m.disponible_rdc),
        pediatrique: Boolean(m.pediatrique),
        association: (m.nb_composants ?? composition.length) > 1,
        amm: (autorisations || []).length > 0,
        autorisations: autorisations || [],
        composition: composition.map((c) => ({
          ...versFiche(c),
          posologies: (posologies || []).filter((pos) => pos.molecule_id === c.id).map(toPosologie),
          fiches_externes: (externes || []).filter((fe) => fe.molecule_id === c.id).map(versExterne),
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
      `SELECT mo.id, mo.dci, mo.slug, c.nom AS classe, mo.groupe_therapeutique, mo.fiche_a_valider,
              COUNT(mm.medicament_id) AS nb_produits
         FROM molecules mo
         LEFT JOIN classes_pharmacologiques c ON c.id = mo.classe_id
         LEFT JOIN medicament_molecules mm ON mm.molecule_id = mo.id
        GROUP BY mo.id
        ORDER BY mo.dci`,
    );
    res.json({ data: rows.map(versFiche) });
  }),
);

/** Fiche molécule : pharmacologie + produits de chaque opérateur (seule ou en association). */
router.get(
  '/molecules/:slug',
  asyncHandler(async (req, res) => {
    const [mo] = await db.query(
      `SELECT mo.id, mo.dci, mo.slug, c.nom AS classe, mo.groupe_therapeutique, ${FICHE_COLS}
         FROM molecules mo LEFT JOIN classes_pharmacologiques c ON c.id = mo.classe_id
        WHERE mo.slug = ?`,
      [req.params.slug],
    );
    if (!mo) throw notFound('Molécule');
    const [produits, pathologies, posologies, externes] = await Promise.all([
      db.query(
        `SELECT m.id, m.nom_commercial, m.dci AS composition, m.forme, m.dosage, m.disponible_rdc,
                m.photo_url, m.presentation, m.forme_categorie, m.pediatrique, m.catalogue_classe, ${AMM_EXISTE} AS amm,
                mm.dosage AS dosage_molecule, o.id AS operateur_id, COALESCE(o.nom_affiche, o.nom) AS operateur, o.pays AS operateur_pays,
                COALESCE(m.nb_composants, (SELECT COUNT(*) FROM medicament_molecules x WHERE x.medicament_id = m.id)) AS nb_molecules
           FROM medicament_molecules mm
           JOIN medicaments m ON m.id = mm.medicament_id
           LEFT JOIN operateurs o ON o.id = m.operateur_id
          WHERE mm.molecule_id = ? AND ${OPERATEUR_VISIBLE}
          ORDER BY nb_molecules, m.photo_url IS NULL, o.nom, m.nom_commercial`,
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
      db.query(`SELECT ${EXTERNES_COLS} FROM molecule_fiches_externes fe WHERE fe.molecule_id = ?`, [mo.id]),
    ]);
    res.json({
      data: {
        ...versFiche(mo),
        fiches_externes: (externes || []).map(versExterne),
        posologies: (posologies || []).map(toPosologie),
        produits: produits.map(({ nb_molecules: nb, disponible_rdc: rdc, pediatrique, amm, ...p }) => ({
          ...p,
          amm: Boolean(amm),
          disponible_rdc: Boolean(rdc),
          pediatrique: Boolean(pediatrique),
          association: Number(nb) > 1,
        })),
        pathologies,
      },
    });
  }),
);

module.exports = router;
module.exports.dedupePathologies = dedupePathologies;
