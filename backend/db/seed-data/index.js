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
};
