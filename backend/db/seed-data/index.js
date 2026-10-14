'use strict';

/**
 * Données d'amorçage MedRef RDC, rassemblées depuis des fichiers thématiques.
 *
 * ⚠️ Contenu de référence rédigé à partir des recommandations citées (OMS,
 * programmes nationaux RDC, sociétés savantes). Chaque fiche doit être relue et
 * validée par le Dr Ben Mingalu avant usage clinique. Les prix indicatifs ne sont
 * volontairement pas renseignés (à compléter localement).
 *
 * Format des textes longs : markdown léger
 *   "## Titre"  → sous-titre
 *   "- item"    → puce
 *   "**gras**"  → emphase
 *   ligne vide  → nouveau paragraphe
 */

const { departements, urgences, symptomes, scores, examens } = require('./referentiels');
const { operateurs, classes, molecules, medicaments } = require('./medicaments');
const { sources } = require('./sources');
const niveaux = require('./niveaux');
const grades = require('./grades');
const posologies = require('./posologies');
const syndromes = require('./syndromes');
const glossaire = require('./glossaire');
const semiologie = require('./semiologie');
const catalogues = require('./catalogues');
// Répertoire des AMM de l'ACOREP + fiches des substances (scripts/catalogues/extraire_acorep.py)
const acorep = require('./acorep.json');
// Opérateurs affichés dans l'application et titulaires des marques
const selection = require('./operateurs-retenus');
// Fiches de pathologies ajoutées par lots (feuille de route)
const ajouts = require('./pathologies-ajoutees');
// Posologies ajoutées par lots (molécules citées dans les fiches qui n'en avaient pas)
const posologiesAjoutees = require('./posologies-ajoutees');

const pathologies = [
  ...require('./pathologies/infectiologie'),
  ...require('./pathologies/medecine-interne'),
  ...require('./pathologies/pediatrie'),
  ...require('./pathologies/gyneco-obstetrique'),
  ...require('./pathologies/chirurgie'),
  ...require('./pathologies/neuropsychiatrie'),
];

module.exports = {
  departements,
  urgences,
  symptomes,
  scores,
  examens,
  operateurs,
  classes,
  molecules,
  medicaments,
  sources,
  pathologies,
  niveaux,
  grades,
  posologies,
  syndromes,
  glossaire,
  semiologie,
  catalogues,
  acorep,
  selection,
  ajouts,
  posologiesAjoutees,
};
