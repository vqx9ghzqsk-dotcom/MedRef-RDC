'use strict';

/**
 * Fiches de pathologies ajoutées au référentiel de départ, par lots (feuille de route
 * des 793 pathologies). Chargées par db/fiches.js, en seed et par `npm run db:enrichir`.
 * Contenu rédigé par IA : chaque fiche est créée « à valider ».
 */

const referentiels = require('./referentiels');

// Un lot par ligne : ajouter les nouveaux lots à la fin
const LOTS = [
  'lot-01-infectiologie-a',
  'lot-01-infectiologie-b',
  'lot-02-infectiologie-a',
  'lot-02-infectiologie-b',
  'lot-03-infectiologie',
  'lot-03-cardiologie',
  'lot-04-cardiologie',
  'lot-04-endocrinologie',
  'lot-05-endocrinologie',
  'lot-05-gastro',
  'lot-06-gastro',
  'lot-06-hematologie',
  'lot-07-nephrologie',
  'lot-07-pneumologie',
  'lot-08-rhumatologie',
  'lot-08-dermatologie',
  'lot-09-medecine-interne',
  'lot-09-neonatologie',
  'lot-10-neonatologie',
  'lot-10-pediatrie',
  'lot-11-pediatrie',
  'lot-11-infectiologie-pediatrique',
  'lot-12-infectiologie-pediatrique',
  'lot-12-pneumologie-pediatrique',
  'lot-13-pneumo-cardio-pediatrique',
  'lot-13-gastro-pediatrique',
  'lot-14-malnutrition',
  'lot-14-hemato-onco-pediatrique',
  'lot-15-nephro-endo-pediatrique',
  'lot-15-neuro-urgences-pediatriques',
  'lot-16-urgences-pediatriques',
  'lot-17-pediatrie',
  'lot-17-grossesse',
  'lot-18-grossesse',
  'lot-18-pathologies-obstetricales',
  'lot-19-pediatrie',
  'lot-19-pathologies-obstetricales',
  'lot-19-travail-accouchement',
  'lot-20-urgences-obstetricales-post-partum',
  'lot-20-gynecologie',
  'lot-21-gynecologie',
  'lot-21-reproduction-oncologie',
  'lot-22-gyneco-neonat',
  'lot-22-chirurgie-digestive',
  'lot-23-chirurgie-visc',
  'lot-23-chirurgie-generale',
  'lot-24-traumatologie',
  'lot-24-orthopedie',
  'lot-25-neurochirurgie-urgences',
  'lot-25-urologie',
  'lot-26-urologie-chir-pediatrique',
  'lot-26-chirurgie-thoracique',
  'lot-27-brulures-orl',
  'lot-27-ophtalmologie',
  'lot-28-chirurgie',
  'lot-28-neurologie',
];

const fiches = LOTS.flatMap((lot) => require(`./${lot}`));

module.exports = { referentiels, fiches };
