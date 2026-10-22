/**
 * Actualités gardées sur l'appareil pour la lecture hors connexion (IndexedDB via `idb`).
 *
 * Le serveur fournit des lots (GET /api/actualites/lot) : le premier contient toutes les
 * actualités valables, les suivants seulement les nouveautés depuis le lot précédent. Chaque
 * actualité est gardée jusqu'à sa date `expire_hors_ligne` (30 jours après sa publication, ou
 * plus tôt pour une alerte qui a sa propre fin), puis effacée avec sa photo. Les photos sont
 * gardées dans le cache du navigateur, que le service worker sert quand le réseau manque.
 */

import { openDB as idbOpenDB } from 'idb';

export const DB_ACTUALITES = 'medref-actualites';
export const CACHE_PHOTOS = 'medref-actualites-photos-v1';
const STORE = 'actualites';
const META = 'meta';
const PARALLELE = 3;

export function openActualitesDB(openDB = idbOpenDB, name = DB_ACTUALITES) {
  return openDB(name, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: 'id' });
      if (!db.objectStoreNames.contains(META)) db.createObjectStore(META);
    },
  });
}

/** Fin de journée de la date AAAA-MM-JJ (une actualité « jusqu'au 20 » se lit encore le 20). */
const finDuJour = (d) => (d ? new Date(`${String(d).slice(0, 10)}T23:59:59`) : null);

/**
 * @param {Promise<import('idb').IDBPDatabase>} dbPromise
 * @param {{ now?: () => Date, cachesImpl?: CacheStorage, fetchImpl?: typeof fetch }} [opts]
 */
export function createActualitesHorsLigne(
  dbPromise,
  {
    now = () => new Date(),
    cachesImpl = globalThis.caches,
    fetchImpl = globalThis.fetch?.bind(globalThis),
    baseUrl = '',
  } = {},
) {
  const db = () => dbPromise;
  const expiree = (a) => {
    const fin = finDuJour(a.expire_hors_ligne);
    return Boolean(fin) && fin < now();
  };

  async function cachePhotos() {
    return cachesImpl && typeof cachesImpl.open === 'function' ? cachesImpl.open(CACHE_PHOTOS) : null;
  }

  /**
   * Photo gardée pour la lecture hors connexion : téléchargée par le relais du serveur (même
   * site), rangée sous l'adresse d'origine, que le service worker sert quand le réseau manque.
   */
  async function garderPhoto(cache, a) {
    if (!cache || !fetchImpl || !a.image_url) return false;
    if (await cache.match(a.image_url)) return true;
    try {
      const res = await fetchImpl(`${baseUrl}/api/actualites/${a.id}/photo`);
      if (!res.ok) return false;
      await cache.put(a.image_url, res);
      return true;
    } catch {
      return false;
    }
  }

  /** Efface les actualités expirées ou retirées, et leurs photos. */
  async function purger(idsValables = null) {
    const d = await db();
    const toutes = await d.getAll(STORE);
    const cache = await cachePhotos();
    let effacees = 0;
    for (const a of toutes) {
      if (expiree(a) || (idsValables && !idsValables.has(a.id))) {
        await d.delete(STORE, a.id);
        if (cache && a.image_url && !toutes.some((b) => b.id !== a.id && b.image_url === a.image_url)) {
          await cache.delete(a.image_url);
        }
        effacees += 1;
      }
    }
    return effacees;
  }

  return {
    /**
     * Télécharge le lot de nouveautés depuis le dernier lot, efface ce qui a expiré ou a été
     * retiré, puis garde les photos manquantes. Renvoie un bilan.
     */
    async synchroniser(api) {
      const d = await db();
      const meta = (await d.get(META, 'lot')) || null;
      const lot = await api.lotActualites(meta?.genere_le);
      for (const a of lot.data || []) await d.put(STORE, a);
      const effacees = await purger(new Set(lot.ids || []));
      const cache = await cachePhotos();
      const aGarder = (await d.getAll(STORE)).filter((a) => a.image_url && !a.photo_gardee);
      let photos = 0;
      const file = [...aGarder];
      await Promise.all(
        Array.from({ length: PARALLELE }, async () => {
          for (let a = file.shift(); a; a = file.shift()) {
            if (await garderPhoto(cache, a)) {
              photos += 1;
              await d.put(STORE, { ...a, photo_gardee: true });
            }
          }
        }),
      );
      const etat = {
        genere_le: lot.genere_le,
        telecharge_le: now().toISOString(),
        conservation_jours: lot.conservation_jours,
      };
      await d.put(META, etat, 'lot');
      return { nouvelles: (lot.data || []).length, effacees, photos, total: (await d.count(STORE)) || 0 };
    },

    /** Actualités encore valables, les plus récentes d'abord. */
    async lister() {
      const toutes = await (await db()).getAll(STORE);
      return toutes
        .filter((a) => !expiree(a))
        .sort((x, y) => String(y.publie_le).localeCompare(String(x.publie_le)) || y.id - x.id);
    },

    /** Date du dernier lot et nombre d'actualités gardées. */
    async etat() {
      const d = await db();
      const meta = (await d.get(META, 'lot')) || null;
      const toutes = await d.getAll(STORE);
      return {
        telecharge_le: meta?.telecharge_le || null,
        conservation_jours: meta?.conservation_jours || null,
        actualites: toutes.filter((a) => !expiree(a)).length,
        photos: toutes.filter((a) => !expiree(a) && a.photo_gardee).length,
      };
    },

    purger,

    /** Efface toutes les actualités gardées et leurs photos. */
    async vider() {
      const d = await db();
      await d.clear(STORE);
      await d.delete(META, 'lot');
      if (cachesImpl && typeof cachesImpl.delete === 'function') await cachesImpl.delete(CACHE_PHOTOS);
    },
  };
}

/**
 * Données de l'accueil reconstruites à partir des actualités gardées, quand le réseau manque :
 * mêmes règles qu'en ligne (sur l'accueil, la veille seulement avec photo ; 10 par type).
 */
export function accueilHorsLigne(actualites, etat) {
  const parType = new Map();
  const visibles = actualites
    .filter((a) => a.image_url || a.origine === 'manuelle')
    .filter((a) => {
      const n = parType.get(a.type) || 0;
      parType.set(a.type, n + 1);
      return n < 10;
    });
  const alerte = (a) => a.type === 'alerte_sanitaire' || a.type === 'pharmacovigilance';
  return {
    alertes: visibles.filter(alerte),
    actualites: visibles.filter((a) => !alerte(a)),
    produits: [],
    produits_decouverte: [],
    fiches_validees: [],
    fiches_mises_a_jour: [],
    totaux: null,
    hors_ligne: etat,
  };
}
