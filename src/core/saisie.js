/**
 * Normalisation des saisies (fonctions pures, partagées par toute l'interface).
 *
 * Nombres : virgule ou point décimal, espaces de milliers (« 1 000 », « 1 000 »)
 * et unité tapée à la suite (« 70 kg », « 120mmHg ») sont acceptés.
 */

const ESPACES = /\s/g;

/** Convertit une saisie en nombre ; null si vide, NaN si illisible. */
export function normaliserNombre(brut) {
  if (brut === undefined || brut === null) return null;
  if (typeof brut === 'number') return Number.isFinite(brut) ? brut : NaN;
  let s = String(brut).trim();
  if (!s) return null;
  // Unité ou symbole tapé après le nombre : kg, mmHg, g/dL, %, /min…
  s = s.replace(/^([-+]?[\d\s.,]+)\s*[^\d\s.,-][^\d]*$/u, '$1');
  s = s.replace(ESPACES, '');
  // « 1.234,5 » (milliers à point) ou « 1,234.5 » : le dernier séparateur est décimal
  const virgule = s.lastIndexOf(',');
  const point = s.lastIndexOf('.');
  if (virgule >= 0 && point >= 0) {
    s = virgule > point ? s.replace(/\./g, '').replace(',', '.') : s.replace(/,/g, '');
  } else {
    s = s.replace(',', '.');
  }
  if (!/^[-+]?(\d+\.?\d*|\.\d+)$/.test(s)) return NaN;
  return Number(s);
}

/** Affichage français d'un nombre (virgule décimale, espace fine pour les milliers). */
export function formatNombre(n, decimales = 2) {
  if (n === null || n === undefined || !Number.isFinite(n)) return '';
  return n.toLocaleString('fr-FR', { maximumFractionDigits: decimales });
}

/** Exemples de saisie par nom de champ, pour les placeholders. */
const EXEMPLES = {
  poids: 12.5,
  taille: 110,
  age: 45,
  creatinine: 90,
  volume: 500,
  duree: 8,
  dose: 15,
  max: 1000,
  fc: 110,
  pas: 100,
  asat: 40,
  lsn: 40,
  plaquettes: 250,
  dose_par_kg: 2.4,
  dose_max: 1000,
  prix_indicatif_cdf: 12500,
};

/** Placeholder « ex. 12,5 » pour un champ numérique ({ name, exemple, min, max }). */
export function exempleNombre(champ = {}) {
  let ex = champ.exemple ?? EXEMPLES[champ.name];
  if (ex === undefined && Number.isFinite(champ.min) && Number.isFinite(champ.max)) {
    ex = Math.round((champ.min + (champ.max - champ.min) / 4) * 10) / 10;
  }
  return ex === undefined ? '' : `ex. ${formatNombre(ex)}`;
}

/** Texte d'aide « Entre 1 et 400 kg ». */
export function bornesTexte({ min, max, unit } = {}) {
  const u = unit ? ` ${unit}` : '';
  if (Number.isFinite(min) && Number.isFinite(max))
    return `Entre ${formatNombre(min)} et ${formatNombre(max)}${u}`;
  if (Number.isFinite(min)) return `Au moins ${formatNombre(min)}${u}`;
  if (Number.isFinite(max)) return `Au plus ${formatNombre(max)}${u}`;
  return '';
}

/**
 * Valide une saisie numérique : { valeur, erreur }. `valeur` est null si le champ
 * est vide et facultatif ; `erreur` est un message prêt à afficher sous le champ.
 */
export function validerNombre(brut, { label = 'Ce champ', min, max, unit, optional = false } = {}) {
  const n = normaliserNombre(brut);
  if (n === null) return { valeur: null, erreur: optional ? null : `Renseignez « ${label} »` };
  if (Number.isNaN(n)) return { valeur: null, erreur: `« ${label} » doit être un nombre (ex. 12,5)` };
  if ((Number.isFinite(min) && n < min) || (Number.isFinite(max) && n > max)) {
    return { valeur: n, erreur: `« ${label} » : ${bornesTexte({ min, max, unit }).toLowerCase()}` };
  }
  return { valeur: n, erreur: null };
}

/** Texte libre : espaces superflus retirés, longueur maximale respectée. */
export function nettoyerTexte(brut, max) {
  const s = String(brut ?? '')
    .replace(/[^\S\r\n]+/g, ' ')
    .trim();
  return max ? s.slice(0, max) : s;
}

/** Suggestions proposées dans les champs à vocabulaire courant (listes déroulantes à saisie libre). */
export const SUGGESTIONS = {
  voie: [
    'Orale',
    'IV',
    'IV lente',
    'IV en perfusion',
    'IM',
    'SC',
    'Rectale',
    'Inhalée',
    'Sublinguale',
    'Locale',
  ],
  unite: ['mg', 'g', 'µg', 'UI', 'mL', 'mmol', 'kcal', 'gouttes', 'bouffées'],
  frequence: [
    'Dose unique',
    '1 fois par jour',
    '2 fois par jour',
    '3 fois par jour',
    'Toutes les 4 h',
    'Toutes les 6 h',
    'Toutes les 8 h',
    'Toutes les 12 h',
    'Si besoin',
  ],
  duree: [
    '1 jour',
    '3 jours',
    '5 jours',
    '7 jours',
    '10 jours',
    '14 jours',
    '1 mois',
    '3 mois',
    'Au long cours',
  ],
};
