/**
 * Repérage des termes du glossaire dans un texte (fonctions pures, sans React).
 *
 * - Insensible à la casse, mais respecte les accents ; les sigles en majuscules
 *   (PB, AEG, TRC…) ne sont reconnus qu'écrits en majuscules.
 * - Mot entier uniquement (« galop » ne s'active pas dans « galopant »).
 * - Le terme le plus long l'emporte (« signe de Kernig » plutôt que « Kernig »).
 * - Apostrophes droites et typographiques équivalentes.
 */

const echapper = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const motif = (s) => echapper(s).replace(/['’]/g, "['’]");
const cle = (s) => s.toLocaleLowerCase('fr').replace(/’/g, "'");
const estSigle = (s) => s.length >= 2 && s === s.toLocaleUpperCase('fr') && /\p{Lu}/u.test(s);

/** Construit l'index de recherche à partir de la liste renvoyée par /api/glossaire. */
export function construireIndex(termes) {
  const formes = new Map();
  for (const t of termes || []) {
    for (const forme of [t.terme, ...(t.variantes || [])]) {
      const k = cle(forme);
      if (forme && !formes.has(k)) formes.set(k, { forme, terme: t, sigle: estSigle(forme) });
    }
  }
  if (!formes.size) return null;
  const alternatives = [...formes.values()]
    .map((f) => f.forme)
    .sort((a, b) => b.length - a.length)
    .map(motif);
  const regex = new RegExp(`(?<![\\p{L}\\p{N}])(?:${alternatives.join('|')})(?![\\p{L}\\p{N}])`, 'giu');
  return { regex, formes };
}

/**
 * Découpe `texte` en morceaux { type: 'texte' | 'terme', texte, terme }.
 * `dejaVus` (Set de slugs) : un terme n'est signalé qu'à sa première apparition.
 */
export function decouper(texte, index, dejaVus = new Set()) {
  if (!index || !texte) return [{ type: 'texte', texte }];
  const morceaux = [];
  let dernier = 0;
  index.regex.lastIndex = 0;
  for (const m of texte.matchAll(index.regex)) {
    const trouve = index.formes.get(cle(m[0]));
    if (!trouve || (trouve.sigle && m[0] !== trouve.forme) || dejaVus.has(trouve.terme.slug)) continue;
    dejaVus.add(trouve.terme.slug);
    if (m.index > dernier) morceaux.push({ type: 'texte', texte: texte.slice(dernier, m.index) });
    morceaux.push({ type: 'terme', texte: m[0], terme: trouve.terme });
    dernier = m.index + m[0].length;
  }
  if (dernier < texte.length) morceaux.push({ type: 'texte', texte: texte.slice(dernier) });
  return morceaux;
}

/** Initiale de regroupement alphabétique (sans accent). */
export function initiale(terme) {
  const c = terme.normalize('NFD').replace(/[̀-ͯ]/g, '').charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : '#';
}
