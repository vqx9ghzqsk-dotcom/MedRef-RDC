'use strict';

const express = require('express');
const db = require('../db');
const { asyncHandler, HttpError, toInt } = require('../utils/http');

const router = express.Router();
const SCOPES = ['global', 'departement', 'pathologie'];

/**
 * GET /api/sources
 *   ?scope=global                       → sources transversales (sans département)
 *   ?scope=departement&departement=slug → sources rattachées à un département
 *   ?scope=pathologie&pathologie=slug   → sources citées par une fiche
 *   ?niveau=1..4                        → filtre par niveau de preuve
 */
router.get(
  '/sources',
  asyncHandler(async (req, res) => {
    const { scope, departement, pathologie } = req.query;
    if (scope && !SCOPES.includes(scope)) throw new HttpError(400, 'Portée invalide', { scopes: SCOPES });

    const joins = ['LEFT JOIN departements d ON d.id = so.departement_id'];
    const where = [];
    const params = [];

    if (scope === 'global') where.push('so.departement_id IS NULL');
    if (scope === 'departement') {
      if (!departement) throw new HttpError(400, 'Paramètre « departement » requis');
      where.push('d.slug = ?');
      params.push(departement);
    }
    if (scope === 'pathologie') {
      if (!pathologie) throw new HttpError(400, 'Paramètre « pathologie » requis');
      joins.push(
        'JOIN pathologie_sources psrc ON psrc.source_id = so.id JOIN pathologies p ON p.id = psrc.pathologie_id',
      );
      where.push('p.slug = ?');
      params.push(pathologie);
    }
    const niveau = toInt(req.query.niveau, { min: 1, max: 4 });
    if (niveau) {
      where.push('so.niveau = ?');
      params.push(niveau);
    }

    const rows = await db.query(
      `SELECT so.id, so.titre, so.organisation, so.niveau, so.type, so.annee, so.url, so.domaine,
              d.nom AS departement, d.slug AS departement_slug
         FROM sources so ${joins.join(' ')}
        ${where.length ? `WHERE ${where.join(' AND ')}` : ''}
        ORDER BY so.niveau, so.titre`,
      params,
    );
    res.json({ data: rows });
  }),
);

module.exports = router;
