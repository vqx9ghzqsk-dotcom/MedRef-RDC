'use strict';

const express = require('express');
const db = require('../db');
const { asyncHandler } = require('../utils/http');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

/** Fréquence d'un symptôme dans une fiche, codée sur un chiffre pour alléger le jeu de données. */
const FREQUENCES = { tres_frequent: 3, frequent: 2, occasionnel: 1, rare: 0 };

const normal = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

/**
 * Public visé par une fiche, déduit de sa spécialité et de son nom (les fiches n'ont pas de champ
 * dédié) : tranches d'âge (nn = moins de 2 mois, petit = 2 mois à 5 ans, grand = 5 à 14 ans,
 * adulte, age = plus de 65 ans), sexe (F/M) et contexte obstétrical. null = tout public.
 */
function publicVise(nom, specialite) {
  const n = normal(nom);
  const s = normal(specialite);
  const cible = { ages: null, sexe: null, obstetrique: false };
  if (/neonat|nouveau-ne/.test(s) || /neonat|nouveau-ne/.test(n)) cible.ages = ['nn'];
  else if (/nourrisson/.test(n)) cible.ages = ['nn', 'petit'];
  else if (
    /pediatri|de l.enfant|enfant et de l.adolescent/.test(s) ||
    /de l.enfant|chez l.enfant|infantile/.test(n)
  )
    cible.ages = ['nn', 'petit', 'grand'];
  else if (/adolescent/.test(s)) cible.ages = ['grand', 'adulte'];
  else if (/de l.adulte|chez l.adulte/.test(n)) cible.ages = ['adulte', 'age'];
  else if (/geriatr|demence/.test(s)) cible.ages = ['adulte', 'age'];
  if (/grossesse|obstetric|accouchement|post-partum|materno-foetale/.test(s)) {
    cible.sexe = 'F';
    cible.obstetrique = true;
  } else if (/gynecolog|senologie|planification familiale|urogynecolog/.test(s)) cible.sexe = 'F';
  else if (/prostat|testic|scrot|verge|penis|cryptorchid/.test(n)) cible.sexe = 'M';
  return cible;
}

/**
 * Données du moteur d'aide au diagnostic (calcul fait dans le navigateur, hors connexion) :
 * fiches avec leur public visé, symptômes, liens fiche-symptôme avec fréquence, examens de
 * confirmation ou de présomption, et fiches liées à une urgence.
 */
router.get(
  '/diagnostic/donnees',
  requireAuth,
  asyncHandler(async (_req, res) => {
    const [pathologies, symptomes, liens, examens, urgences] = await Promise.all([
      db.query(
        `SELECT p.id, p.slug, p.nom, p.statut, s.nom AS specialite
           FROM pathologies p JOIN specialites s ON s.id = p.specialite_id
          WHERE p.statut <> 'brouillon'
          ORDER BY p.nom`,
      ),
      db.query('SELECT id, nom, slug FROM symptomes ORDER BY nom'),
      db.query('SELECT pathologie_id, symptome_id, frequence FROM pathologie_symptomes'),
      db.query(
        `SELECT pe.pathologie_id, e.id, e.slug, e.nom, pe.categorie
           FROM pathologie_examens pe JOIN examens e ON e.id = pe.examen_id
          WHERE pe.categorie IN ('confirmation', 'presomption')`,
      ),
      db.query('SELECT DISTINCT pathologie_id FROM pathologie_urgences'),
    ]);
    const urgentes = new Set(urgences.map((u) => u.pathologie_id));
    const tests = new Map();
    const examensUtiles = new Map();
    for (const e of examens) {
      if (!tests.has(e.pathologie_id)) tests.set(e.pathologie_id, {});
      tests.get(e.pathologie_id)[e.id] = e.categorie === 'confirmation' ? 'c' : 'p';
      examensUtiles.set(e.id, { id: e.id, slug: e.slug, nom: e.nom });
    }
    res.json({
      data: {
        pathologies: pathologies.map((p) => ({
          id: p.id,
          slug: p.slug,
          nom: p.nom,
          specialite: p.specialite,
          validee: p.statut === 'valide',
          urgence: urgentes.has(p.id),
          public: publicVise(p.nom, p.specialite),
          tests: tests.get(p.id) || {},
        })),
        symptomes,
        // [pathologie, symptôme, fréquence 0 à 3]
        liens: liens.map((l) => [l.pathologie_id, l.symptome_id, FREQUENCES[l.frequence] ?? 2]),
        examens: [...examensUtiles.values()].sort((a, b) => a.nom.localeCompare(b.nom, 'fr')),
      },
    });
  }),
);

module.exports = router;
module.exports.publicVise = publicVise;
