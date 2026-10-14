'use strict';

/**
 * Posologies ajoutées par lots pour les molécules citées dans les fiches qui n'en avaient
 * aucune (lot B des évolutions). Chargées sans rien écraser par db/posologiesAjoutees.js.
 */

const LOTS = [
  'lot-01',
  'lot-02',
  'lot-03',
  'lot-04',
  'lot-05',
  'lot-06',
  'lot-07',
  'lot-08',
  'lot-09',
  'lot-10',
  'lot-11',
];

module.exports = Object.assign({}, ...LOTS.map((lot) => require(`./${lot}`)));
