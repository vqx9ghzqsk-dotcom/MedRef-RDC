'use strict';

/**
 * Lecture du texte existant des posologies et des dosages du catalogue pour en tirer
 * une structure (lot B). Fonctions pures : elles n'inventent rien, elles ne lisent que
 * ce qui est écrit ; tout texte ambigu renvoie null et reste à compléter à la main.
 * La structure produite est marquée « à valider » par le script qui l'enregistre.
 */

const nettoyer = (s) =>
  String(s || '')
    .replace(/\u00a0/g, ' ')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

const nombre = (s) => Number(String(s).replace(',', '.'));

/**
 * Fréquence : « 1 fois par jour », « 2 fois par jour, au repas », « toutes les 8 h »,
 * « dose unique », « perfusion » / « par heure », schémas (H0, H12…, dose de charge).
 */
function analyserFrequence(texte) {
  const t = nettoyer(texte);
  if (!t) return null;
  if (/^dose unique|^prise unique|^en une seule prise|^une seule dose/.test(t)) {
    return { frequence_type: 'dose_unique', prises_par_jour: null, intervalle_heures: null };
  }
  if (/^perfusion|^par heure|perfusion continue|seringue électrique/.test(t)) {
    return { frequence_type: 'perfusion', prises_par_jour: null, intervalle_heures: null };
  }
  if (/\bh0\b|dose de charge|^charge|puis toutes les/.test(t)) {
    return { frequence_type: 'schema', prises_par_jour: null, intervalle_heures: null };
  }
  let m = t.match(/^(\d+) fois par jour\b/);
  if (m) return { frequence_type: 'prises_par_jour', prises_par_jour: Number(m[1]), intervalle_heures: null };
  if (/^une fois par jour\b|^par jour\b/.test(t) && !/réparti|repas/.test(t.replace(/^par jour\b/, ''))) {
    return { frequence_type: 'prises_par_jour', prises_par_jour: 1, intervalle_heures: null };
  }
  m = t.match(/^toutes les (\d+(?:[.,]\d+)?) ?h(?:eures?)?$/);
  if (m) {
    const h = nombre(m[1]);
    const prises = 24 / h;
    return {
      frequence_type: 'intervalle',
      prises_par_jour: Number.isInteger(prises) ? prises : null,
      intervalle_heures: h,
    };
  }
  return null;
}

const UNITES_DUREE = [
  [/^(?:h|heures?)$/, 'heures'],
  [/^(?:j|jours?)$/, 'jours'],
  [/^semaines?$/, 'semaines'],
  [/^mois$/, 'mois'],
  [/^(?:doses?|prises?|injections?)$/, 'doses'],
];
const unite = (u) => (UNITES_DUREE.find(([re]) => re.test(u)) || [])[1] || null;

/**
 * Durée : « 3 jours », « 5-7 jours », « ≤ 5-7 jours », « 10-14 jours », « 6 mois », « 4 doses »,
 * « maximum 10 h ». Une seule durée lue ; tout le reste (conditions, « jusqu'à… ») → null.
 */
function analyserDuree(texte) {
  const t = nettoyer(texte);
  if (!t) return null;
  const m = t.match(
    /^(?:≤|<=|maximum|max\.?|au plus)?\s*(\d+(?:[.,]\d+)?)(?:\s*(?:-|à)\s*(\d+(?:[.,]\d+)?))?\s*([a-zé]+)$/,
  );
  if (!m) return null;
  const u = unite(m[3]);
  if (!u) return null;
  const min = nombre(m[1]);
  const max = m[2] ? nombre(m[2]) : null;
  if (!(min > 0) || (max !== null && max < min)) return null;
  return [{ min, max, unite: u, contexte: null, defaut: true }];
}

// ------------------------------------------------------------------ Présentations (catalogue)

const FORME_SOLIDE = {
  Comprimé: ['comprime', 'comprime', 'orale'],
  Gélule: ['gelule', 'gelule', 'orale'],
  'Sachet / poudre orale': ['sachet', 'sachet', 'orale'],
  Suppositoire: ['suppositoire', 'suppositoire', 'rectale'],
  'Ovule / voie vaginale': ['ovule', 'ovule', 'vaginale'],
};

/** Quantité de principe actif : « 500 mg », « 1 g », « 1,5 g », « 100 000 UI », « 200 µg ». */
function lireQuantite(s) {
  const m = s.match(/^(\d[\d\s]*(?:[.,]\d+)?)\s*(mg|g|gr|µg|mcg|ug|ui|u\.i\.)$/i);
  if (!m) return null;
  let q = nombre(m[1].replace(/\s/g, ''));
  let u = m[2].toLowerCase();
  if (u === 'g' || u === 'gr') {
    q *= 1000;
    u = 'mg';
  } else if (u === 'mcg' || u === 'ug') u = 'µg';
  else if (u === 'ui' || u === 'u.i.') u = 'UI';
  return q > 0 ? { quantite: q, unite: u } : null;
}

const libelleForme = {
  comprime: 'Comprimé',
  gelule: 'Gélule',
  sachet: 'Sachet',
  suppositoire: 'Suppositoire',
  ovule: 'Ovule',
  suspension_buvable: 'Solution ou suspension buvable',
  injectable: 'Injectable',
};

const fmt = (n) => String(n).replace('.', ',');

/**
 * Présentations lues dans le dosage d'un produit à un seul principe actif.
 * « 125 mg/5 ml » → liquide buvable (ou injectable) par 5 mL ; « 500 mg » → par unité de la forme
 * solide du produit. Une forme non reconnue ou un dosage illisible ne produisent rien.
 */
function analyserDosage(dosage, formeCategorie, formeTexte = '') {
  const resultats = [];
  const injectable = formeCategorie === 'Injectable' || /inj/i.test(formeTexte);
  const buvable =
    formeCategorie === 'Sirop, suspension, solution buvable' ||
    /susp|sirop|sol\.? ?buv|buv/i.test(formeTexte);
  for (const brut of String(dosage || '').split(/;|\bet\b/)) {
    const s = brut.replace(/\s+/g, ' ').trim();
    if (!s) continue;
    const liquide = s.match(/^(.+?)\s*\/\s*(\d+(?:[.,]\d+)?)?\s*ml$/i);
    if (liquide) {
      const q = lireQuantite(liquide[1].trim());
      const vol = liquide[2] ? nombre(liquide[2]) : 1;
      if (!q || !(vol > 0)) continue;
      const forme = injectable && !buvable ? 'injectable' : buvable ? 'suspension_buvable' : null;
      if (!forme) continue;
      resultats.push({
        forme,
        voie: forme === 'injectable' ? 'injectable' : 'orale',
        ...q,
        par_quantite: vol,
        par_unite: 'ml',
        libelle: `${libelleForme[forme]} ${fmt(q.quantite)} ${q.unite}/${fmt(vol)} mL`,
      });
      continue;
    }
    const q = lireQuantite(s);
    if (!q) continue;
    if (FORME_SOLIDE[formeCategorie]) {
      const [forme, parUnite, voie] = FORME_SOLIDE[formeCategorie];
      resultats.push({
        forme,
        voie,
        ...q,
        par_quantite: 1,
        par_unite: parUnite,
        libelle: `${libelleForme[forme]} ${fmt(q.quantite)} ${q.unite}`,
      });
    } else if (formeCategorie === 'Injectable') {
      resultats.push({
        forme: 'injectable',
        voie: 'injectable',
        ...q,
        par_quantite: 1,
        par_unite: 'flacon',
        libelle: `Injectable ${fmt(q.quantite)} ${q.unite} (flacon ou ampoule)`,
      });
    }
  }
  return resultats;
}

/** Clé de dédoublonnage d'une présentation pour une molécule. */
const clePresentation = (p) => [p.forme, p.quantite, p.unite, p.par_quantite, p.par_unite].join('|');

module.exports = { analyserFrequence, analyserDuree, analyserDosage, clePresentation };
