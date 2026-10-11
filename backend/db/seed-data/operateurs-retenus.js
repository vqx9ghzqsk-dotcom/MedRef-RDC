'use strict';

/**
 * Opérateurs affichés dans MedRef RDC (choix du Dr Mingalu, 9 octobre 2026). Les autres
 * opérateurs et leurs produits restent en base mais sont masqués. Chaque entrée reconnaît
 * les écritures du nom rencontrées dans le répertoire des AMM (motif sur le nom normalisé).
 */
const OPERATEURS_RETENUS = [
  // Firmes implantées en RDC (catalogues avec photos)
  { nom: 'Arauphar', motif: /^arauphar|^arau phar/ },
  { nom: 'Denk Pharma', motif: /^denk pharma/ },
  { nom: 'New Cesamex', motif: /^new cesamex/ },
  { nom: 'PrincePharma', motif: /^princepharma|^prince pharma$/ },
  { nom: 'Shalina Healthcare', motif: /^shalina/ },
  { nom: 'Unique Pharma', motif: /^unique pharma$/ },
  // Firmes internationales
  { nom: 'Organon', motif: /^organon/ },
  { nom: 'Sanofi', motif: /^sanofi/ },
  { nom: 'Novartis', motif: /^novartis/ },
  { nom: 'Viatris (Mylan)', motif: /^viatris|^mylan/ },
  { nom: 'Servier', motif: /^servier/ },
  { nom: 'GSK', motif: /^gsk$|^glaxo/ },
  { nom: 'Cipla', motif: /^cipla/ },
  { nom: 'Macleods', motif: /^macleods/ },
  { nom: 'Pfizer', motif: /^pfizer/ },
  { nom: 'Zydus Cadila', motif: /^zydus|^cadila/ },
  { nom: 'Emcure', motif: /^emcure/ },
  { nom: 'Pierre Fabre', motif: /^pierre fabre/ },
  { nom: 'Bayer', motif: /^bayer/ },
  { nom: 'Roche', motif: /^roche$|^f hoffmann la roche|^hoffmann la roche/ },
  { nom: 'Ipsen', motif: /^ipsen/ },
  { nom: 'Menarini', motif: /^menarini|^a menarini/ },
  { nom: 'Abbott', motif: /^abbott/ },
  { nom: 'MSD', motif: /^msd$|^merck sharp/ },
  { nom: 'Janssen (Johnson & Johnson)', motif: /^janssen/ },
  { nom: 'Sun Pharma', motif: /^sun pharma/ },
  { nom: 'Novo Nordisk', motif: /^novo nordisk/ },
  { nom: 'Sandoz', motif: /^sandoz/ },
  // Circuit national et référentiel MedRef (produits des protocoles, LNME, programmes)
  { nom: 'FEDECAME', motif: /^fedecame$/ },
  { nom: 'Générique multisource', motif: /^generique multisource$/ },
  { nom: 'UNICEF Supply Division', motif: /^unicef/ },
  { nom: 'Nutriset', motif: /^nutriset$/ },
];

/**
 * Marques dont l'AMM est enregistrée au nom du fabricant, rattachées à leur titulaire
 * (vérifié sur organon.com : Aerius, Arcoxia, Diprosone et Nasonex sont des marques Organon).
 */
const TITULAIRES = [{ titulaire: 'Organon', marques: ['Aerius', 'Arcoxia', 'Diprosone', 'Nasonex'] }];

module.exports = { OPERATEURS_RETENUS, TITULAIRES };
