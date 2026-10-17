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
  'C05-pneumologie-rhumatologie-addictologie',
  'C06-neurologie-avc',
  'C07-epilepsie-mouvements-demences-neuro-infectiologie',
  'C08-psychiatrie-psychotraumatologie',
  'C09-neurochirurgie-pedopsychiatrie-adolescent',
  'C10-grossesse-materno-foetale',
  'C11-pathologies-urgences-obstetricales',
  'C12-travail-post-partum-planification',
  'C13-gynecologie-urogynecologie',
  'C14-gyneco-onco-senologie-fertilite-genetique',
  'C15-neonatologie',
  'C16-infectiologie-pediatrique-malnutrition',
  'C17-pediatrie-generale-urgences',
  'C18-hemato-onco-nephro-cardio-pediatriques',
];

module.exports = LOTS.map((lot) => require(`./${lot}`));
