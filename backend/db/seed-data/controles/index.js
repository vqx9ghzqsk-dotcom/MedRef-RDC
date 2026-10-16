'use strict';

/**
 * Contrôle de conformité du contenu aux protocoles de prise en charge, par lots
 * (docs/controle-conformite). Chaque lot exporte { lot, date, titre, fiches, molecules } ;
 * chargé par db/controles.js (corrections ciblées, tracées dans l'historique).
 */

const LOTS = [
  'C01-infectiologie',
  'C02-cardiologie-nephrologie-medecine-generale',
  'C03-dermatologie-endocrinologie',
  'C04-gastro-enterologie-hematologie',
];

module.exports = LOTS.map((lot) => require(`./${lot}`));
