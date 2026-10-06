/**
 * Téléchargement du contenu pour la consultation hors ligne. Chaque adresse est
 * demandée une fois : le service worker garde la réponse dans son cache.
 * Fonctions pures et injectables (fetch, caches, stockage) pour être testées.
 */

export const API_CACHE = 'medref-api-v1';
const CLE_ETAT = 'medref.horsligne';

/** Exécute `taches` avec au plus `limite` en parallèle ; `onProgres(fait, total, echecs)`. */
export async function telechargerTout(urls, { fetchImpl = globalThis.fetch, limite = 4, onProgres } = {}) {
  let suivant = 0;
  let fait = 0;
  const echecs = [];
  async function ouvrier() {
    while (suivant < urls.length) {
      const url = urls[suivant];
      suivant += 1;
      try {
        const res = await fetchImpl(url, { headers: { Accept: 'application/json' } });
        if (!res.ok) echecs.push(url);
      } catch {
        echecs.push(url);
      }
      fait += 1;
      if (onProgres) onProgres(fait, urls.length, echecs.length);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limite, urls.length) }, ouvrier));
  return { total: urls.length, echecs };
}

/** Nombre de réponses de l'API gardées en cache (null si le cache n'est pas disponible). */
export async function compterEnCache(cachesImpl = globalThis.caches) {
  if (!cachesImpl) return null;
  try {
    if (!(await cachesImpl.has(API_CACHE))) return 0;
    const cache = await cachesImpl.open(API_CACHE);
    return (await cache.keys()).length;
  } catch {
    return null;
  }
}

export async function viderCache(cachesImpl = globalThis.caches) {
  if (cachesImpl) await cachesImpl.delete(API_CACHE);
  ecrireEtat(null);
}

export function lireEtat(storage = globalThis.localStorage) {
  try {
    const raw = storage?.getItem(CLE_ETAT);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function ecrireEtat(etat, storage = globalThis.localStorage) {
  try {
    if (etat) storage?.setItem(CLE_ETAT, JSON.stringify(etat));
    else storage?.removeItem(CLE_ETAT);
  } catch {
    // stockage indisponible (navigation privée) : sans conséquence
  }
}
