'use strict';

/**
 * Consultation hors ligne : liste des adresses publiques de l'API que
 * l'application télécharge pour les garder en cache (service worker).
 * Les adresses correspondent exactement à celles appelées par l'interface.
 */

const express = require('express');
const db = require('../db');
const { asyncHandler } = require('../utils/http');

const router = express.Router();

router.get(
  '/hors-ligne',
  asyncHandler(async (_req, res) => {
    const [
      departements,
      specialites,
      pathologies,
      urgences,
      symptomes,
      scores,
      examens,
      molecules,
      medicaments,
    ] = await Promise.all([
      db.query('SELECT slug FROM departements ORDER BY ordre'),
      db.query('SELECT slug FROM specialites ORDER BY nom'),
      db.query("SELECT slug FROM pathologies ORDER BY statut = 'valide' DESC, nom"),
      db.query('SELECT slug FROM urgences ORDER BY nom'),
      db.query('SELECT slug FROM symptomes ORDER BY nom'),
      db.query('SELECT slug FROM scores ORDER BY nom'),
      db.query('SELECT slug FROM examens ORDER BY nom'),
      db.query('SELECT slug FROM molecules ORDER BY dci'),
      db.query('SELECT id FROM medicaments ORDER BY nom_commercial'),
    ]);
    const enc = encodeURIComponent;
    const urls = [
      '/api/departements',
      '/api/urgences',
      '/api/symptomes',
      '/api/scores',
      '/api/examens',
      '/api/molecules',
      '/api/medicaments',
      '/api/medicaments/filtres',
      '/api/sources',
      ...departements.map((r) => `/api/departements/${enc(r.slug)}`),
      ...specialites.map((r) => `/api/specialites/${enc(r.slug)}`),
      ...pathologies.map((r) => `/api/pathologies/${enc(r.slug)}`),
      ...urgences.map((r) => `/api/urgences/${enc(r.slug)}`),
      ...symptomes.map((r) => `/api/symptomes/${enc(r.slug)}`),
      ...scores.map((r) => `/api/scores/${enc(r.slug)}`),
      ...examens.map((r) => `/api/examens/${enc(r.slug)}`),
      ...molecules.map((r) => `/api/molecules/${enc(r.slug)}`),
      ...medicaments.map((r) => `/api/medicaments/${r.id}`),
    ];
    res.json({ data: { genere_le: new Date().toISOString(), urls } });
  }),
);

module.exports = router;
