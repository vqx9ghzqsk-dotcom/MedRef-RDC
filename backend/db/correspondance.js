'use strict';

/**
 * Rapprochement automatique « produit de catalogue → molécule(s) MedRef ».
 *
 * Volontairement prudent : seule une correspondance exacte du nom (après retrait
 * des doses, des sels et des formes, et via une liste de synonymes) est retenue.
 * Tout le reste est laissé à la vérification humaine dans /admin.
 */

/** Synonymes reconnus pour les molécules existantes (slug → noms). */
const SYNONYMES = {
  paracetamol: ['acetaminophene', 'paracetamolum'],
  'acide-acetylsalicylique': ['aspirine', 'acetylsalicylic acid'],
  cotrimoxazole: ['co trimoxazole', 'sulfamethoxazole trimethoprime'],
  'acide-clavulanique': [
    'clavulanate de potassium',
    'clavulanate potassium',
    'potassium clavulanate',
    'clavulanic acid',
  ],
  amoxicilline: ['amoxicillin', 'amoxycillin'],
  'acide-folique': ['folic acid'],
  pyridoxine: ['vitamine b6', 'vitamin b6'],
  salbutamol: ['albuterol'],
  'sulfate-de-magnesium': ['magnesium sulfate'],
  dihydroartemisinine: ['dihydroartemisinin', 'dha'],
  ibuprofene: ['ibuprofen'],
  metformine: ['metformin'],
  'acide-tranexamique': ['tranexamic acid'],
  furosemide: ['frusemide'],
  'acide-valproique': ['valproate de sodium', 'valproate', 'sodium valproate'],
  ocytocine: ['oxytocine', 'oxytocin'],
  'tenofovir-disoproxil': ['tenofovir', 'tenofovir disoproxil fumarate'],
  hydroxycarbamide: ['hydroxyuree', 'hydroxyurea'],
  sro: ['sels de rehydratation orale', 'sro', 'ors'],
};

/** Molécules jamais rattachées automatiquement (risque de confusion : solutés). */
const EXCLUES = new Set(['chlorure-de-sodium-0-9', 'glucose-10', 'ringer-lactate']);

/** Mots de sel ou d'hydratation retirés en second essai (« losartan potassique » → « losartan »). */
const SELS = [
  'chlorhydrate',
  'bichlorhydrate',
  'dichlorhydrate',
  'hydrochloride',
  'hcl',
  'sodique',
  'sodium',
  'potassique',
  'potassium',
  'calcique',
  'calcium',
  'magnesique',
  'sulfate',
  'phosphate',
  'diphosphate',
  'tetraphosphate',
  'maleate',
  'besilate',
  'besylate',
  'mesilate',
  'mesylate',
  'fumarate',
  'succinate',
  'tartrate',
  'citrate',
  'acetate',
  'propionate',
  'valerate',
  'dipropionate',
  'hyclate',
  'trihydrate',
  'dihydrate',
  'monohydrate',
  'anhydre',
  'base',
  'bromure',
  'bromide',
  'nitrate',
  'lactate',
  'gluconate',
  'proxetil',
  'axetil',
  'disodique',
];

const FORMES =
  /\b(comprimes?|gelules?|sirop|suspension|solution|injectable|injection|poudre|creme|pommade|gel|collyre|ovules?|suppositoires?|sachets?|granules?|pediatriques?|buvable|dispersibles?|tablets?|capsules?|flacons?|ampoules?|pour|usage|oral|orale|iv|im)\b/g;

function normaliser(texte) {
  return (
    String(texte || '')
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[®™]/g, '')
      .replace(/\([^)]*\)/g, ' ')
      .replace(/\b(bp|usp|ip|ph\.? ?eur|eq\.?|equivalent a|eq a)\b/g, ' ')
      // Doses retirées, mais pas les chiffres collés à un nom (« vitamine b12 » ≠ « vitamine b6 »)
      .replace(/(?<![a-z0-9])\d+([.,]\d+)?\s*(mg|g|mcg|µg|ug|ml|ui|iu|%|mmol|mui)?\b/g, ' ')
      .replace(/[^a-z0-9 ]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

const sansSels = (n) =>
  n
    .split(' ')
    .filter((m) => !SELS.includes(m) && m !== 'de' && m !== 'd')
    .join(' ')
    .trim();

/** Index des noms reconnus : nom normalisé → slug de molécule. */
function construireIndex(molecules) {
  const index = new Map();
  for (const m of molecules) {
    if (EXCLUES.has(m.slug)) continue;
    const noms = [m.dci, m.slug.replace(/-/g, ' '), ...(SYNONYMES[m.slug] || [])];
    for (const nom of noms) {
      const n = normaliser(nom);
      if (n && !index.has(n)) index.set(n, m.slug);
    }
  }
  return index;
}

/** Variantes d'un nom anglais ou abrégé (« amoxicillin » → « amoxicilline »). */
function variantes(n) {
  const v = [n, sansSels(n)];
  for (const x of [...v]) {
    if (/in$/.test(x)) v.push(`${x}e`);
    if (/ine$/.test(x)) v.push(x.slice(0, -1));
  }
  return [...new Set(v.filter(Boolean))];
}

function trouver(composant, index) {
  for (const v of variantes(normaliser(composant))) if (index.has(v)) return index.get(v);
  return null;
}

/** Noms lus dans l'intitulé DCI : « Artéméther + Luméfantrine (comprimés) ». */
function depuisIntitule(texte) {
  return texte
    .replace(/\([^)]*\)/g, ' ')
    .replace(/sulfam[ée]thoxazole\s*(\+|et|&|\/)?\s*trim[ée]thoprime/gi, 'Cotrimoxazole')
    .split(/\s*(?:\+|&|\bet\b(?= [A-Z])|;|\/)\s*/);
}

/** Noms lus dans une composition dosée : « Pipéracilline 4 g Tazobactam 500 mg ». */
function depuisComposition(texte) {
  const source = texte.replace(
    /sulfam[ée]thoxazole\s*(\+|et|&|\/)?\s*trim[ée]thoprime/gi,
    'Cotrimoxazole 1 mg',
  );
  return [
    ...source.matchAll(/([A-Za-zÀ-ÿ'’ -]{3,}?)\s*[:=]?\s*\d+(?:[.,]\d+)?\s*(?:mg|g|mcg|µg|ml|ui|%)/gi),
  ].map(
    // « … et Artesunate 20 mg » : les mots de liaison ne font pas partie du nom
    (m) => m[1].replace(/^\s*(et|and|de|du|des)\s+/i, ''),
  );
}

const nettoyer = (parts) =>
  parts
    .map((p) => p.split(',')[0].trim())
    .map((p) => p.replace(FORMES, ' ').replace(/\s+/g, ' ').trim())
    .filter((p) => normaliser(p).length >= 3);

/**
 * Composants d'un produit, lus dans l'intitulé DCI et dans la composition dosée.
 * → { noms: [tous les noms candidats], nb: nombre de composants du produit }
 */
function composants(produit) {
  const intitule = nettoyer(depuisIntitule(produit.dci || ''));
  const detail = /\d/.test(produit.composition || '') ? nettoyer(depuisComposition(produit.composition)) : [];
  const noms = [...intitule, ...detail];
  // L'intitulé ne liste que les principes actifs ; la composition peut citer des excipients
  const nb =
    intitule.length && !/±/.test(produit.dci) ? intitule.length : Math.max(intitule.length, detail.length);
  return { noms, nb: Math.max(nb, 1) };
}

/**
 * Rapproche un produit des molécules connues.
 * → { molecules: [slug…], nbComposants, liaison: 'auto' | 'partielle' | 'aucune' }
 */
function rapprocher(produit, index) {
  const { noms, nb: nbLu } = composants(produit);
  const trouvees = [];
  for (const c of noms) {
    const slug = trouver(c, index);
    if (slug && !trouvees.includes(slug)) trouvees.push(slug);
  }
  // « Telmisartan (± Hydrochlorothiazide) » sans composition dosée : variante inconnue
  const incertain = /±/.test(produit.dci || '') && !/\d/.test(produit.composition || '');
  const nb = Math.max(nbLu, trouvees.length);
  let liaison = 'aucune';
  if (trouvees.length) liaison = trouvees.length >= nb && !incertain ? 'auto' : 'partielle';
  return { molecules: trouvees, nbComposants: nb, liaison };
}

module.exports = { normaliser, construireIndex, composants, rapprocher, EXCLUES };
