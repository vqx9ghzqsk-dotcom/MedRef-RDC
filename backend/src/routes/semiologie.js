'use strict';

/** Glossaire sémiologique et syndromes (pages publiques). */

const express = require('express');
const db = require('../db');
const { asyncHandler, notFound } = require('../utils/http');

const router = express.Router();

const variantes = (v) => (v ? v.split('|').filter(Boolean) : []);

router.get(
  '/glossaire',
  asyncHandler(async (_req, res) => {
    const rows = await db.query(
      `SELECT g.terme, g.slug, g.variantes, g.definition, s.slug AS syndrome_slug, s.nom AS syndrome_nom
         FROM glossaire g LEFT JOIN syndromes s ON s.id = g.syndrome_id
        ORDER BY g.terme`,
    );
    res.json({
      data: rows.map(({ syndrome_slug: slug, syndrome_nom: nom, ...g }) => ({
        ...g,
        variantes: variantes(g.variantes),
        syndrome: slug ? { slug, nom } : null,
      })),
    });
  }),
);

router.get(
  '/syndromes',
  asyncHandler(async (_req, res) => {
    const rows = await db.query(
      `SELECT s.id, s.nom, s.slug, s.definition,
              (SELECT COUNT(DISTINCT f.pathologie_id) FROM forme_syndromes fs
                 JOIN pathologie_formes f ON f.id = fs.forme_id WHERE fs.syndrome_id = s.id) AS nb_pathologies
         FROM syndromes s ORDER BY s.nom`,
    );
    res.json({ data: rows.map((r) => ({ ...r, nb_pathologies: Number(r.nb_pathologies) })) });
  }),
);

router.get(
  '/syndromes/:slug',
  asyncHandler(async (req, res) => {
    const [s] = await db.query('SELECT id, nom, slug, definition, elements FROM syndromes WHERE slug = ?', [
      req.params.slug,
    ]);
    if (!s) throw notFound('Syndrome');
    const [symptomes, formes, termes] = await Promise.all([
      db.query(
        `SELECT sy.nom, sy.slug FROM syndrome_symptomes ss JOIN symptomes sy ON sy.id = ss.symptome_id
          WHERE ss.syndrome_id = ? ORDER BY sy.nom`,
        [s.id],
      ),
      db.query(
        `SELECT p.nom, p.slug, f.nom AS forme, sp.nom AS specialite
           FROM forme_syndromes fs
           JOIN pathologie_formes f ON f.id = fs.forme_id
           JOIN pathologies p ON p.id = f.pathologie_id
           JOIN specialites sp ON sp.id = p.specialite_id
          WHERE fs.syndrome_id = ? ORDER BY p.nom, f.ordre`,
        [s.id],
      ),
      db.query('SELECT terme, slug, definition FROM glossaire WHERE syndrome_id = ? ORDER BY terme', [s.id]),
    ]);
    // Une fiche peut présenter le syndrome dans plusieurs de ses formes
    const pathologies = [];
    for (const f of formes) {
      let p = pathologies.find((x) => x.slug === f.slug);
      if (!p) {
        p = { nom: f.nom, slug: f.slug, specialite: f.specialite, formes: [] };
        pathologies.push(p);
      }
      p.formes.push(f.forme);
    }
    const { id: _id, ...syndrome } = s;
    res.json({ data: { ...syndrome, symptomes, pathologies, termes } });
  }),
);

module.exports = router;
