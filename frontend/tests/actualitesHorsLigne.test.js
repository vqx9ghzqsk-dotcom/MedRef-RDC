import { describe, expect, it, vi } from 'vitest';
import { openDB } from 'idb';
import {
  accueilHorsLigne,
  createActualitesHorsLigne,
  openActualitesDB,
} from '../src/core/offline/actualitesHorsLigne.js';

let compteur = 0;

/** Faux cache de photos du navigateur (Cache API). */
function fauxCaches() {
  const photos = new Map();
  const cache = {
    match: async (url) => photos.get(url),
    put: async (url, res) => photos.set(url, res),
    delete: async (url) => photos.delete(url),
  };
  return { photos, open: async () => cache, delete: async () => photos.clear() };
}

function creer(maintenant = '2026-10-21T10:00:00Z') {
  compteur += 1;
  const horloge = { date: new Date(maintenant) };
  const caches = fauxCaches();
  // Relais du serveur /api/actualites/:id/photo (la photo de l'actualité 99 est indisponible)
  const fetchImpl = vi.fn(async (url) => ({ ok: !url.includes('/actualites/99/'), url }));
  const stock = createActualitesHorsLigne(openActualitesDB(openDB, `actus-test-${compteur}`), {
    now: () => horloge.date,
    cachesImpl: caches,
    fetchImpl,
  });
  return { stock, horloge, caches, fetchImpl };
}

const actu = (id, extra = {}) => ({
  id,
  type: 'alerte_sanitaire',
  titre: `Actualité ${id}`,
  publie_le: '2026-10-20',
  expire_hors_ligne: '2026-11-19',
  image_url: `https://okapi.net/photo-${id}.jpg`,
  origine: 'veille',
  ...extra,
});

describe('actualités gardées pour la lecture hors connexion', () => {
  it('premier lot complet, puis seulement les nouveautés depuis le lot précédent', async () => {
    const { stock, caches, fetchImpl } = creer();
    const api = {
      lotActualites: vi
        .fn()
        .mockResolvedValueOnce({
          data: [actu(1), actu(2)],
          ids: [1, 2],
          genere_le: 'L1',
          conservation_jours: 30,
        })
        .mockResolvedValueOnce({ data: [actu(3)], ids: [1, 2, 3], genere_le: 'L2', conservation_jours: 30 }),
    };
    expect(await stock.synchroniser(api)).toMatchObject({ nouvelles: 2, photos: 2, total: 2 });
    expect(api.lotActualites).toHaveBeenLastCalledWith(undefined);
    await stock.synchroniser(api);
    // Le second lot ne demande que ce qui est nouveau depuis le premier
    expect(api.lotActualites).toHaveBeenLastCalledWith('L1');
    expect((await stock.lister()).map((a) => a.id)).toEqual([3, 2, 1]);
    expect(caches.photos.size).toBe(3);
    // Photo téléchargée par le relais du serveur (même site), rangée sous son adresse d'origine
    expect(fetchImpl).toHaveBeenCalledWith('/api/actualites/1/photo');
    expect(caches.photos.has('https://okapi.net/photo-1.jpg')).toBe(true);
    expect(await stock.etat()).toMatchObject({ actualites: 3, photos: 3, conservation_jours: 30 });
  });

  it('efface les actualités retirées par le serveur et celles qui ont expiré, avec leurs photos', async () => {
    const { stock, horloge, caches } = creer();
    const api = {
      lotActualites: vi
        .fn()
        .mockResolvedValueOnce({
          data: [actu(1), actu(2, { expire_hors_ligne: '2026-10-25' })],
          ids: [1, 2],
          genere_le: 'L1',
        })
        .mockResolvedValueOnce({ data: [], ids: [2], genere_le: 'L2' }),
    };
    await stock.synchroniser(api);
    // L'actualité 1 est retirée côté serveur : effacée au lot suivant, photo comprise
    expect(await stock.synchroniser(api)).toMatchObject({ effacees: 1, total: 1 });
    expect(caches.photos.has('https://okapi.net/photo-1.jpg')).toBe(false);
    // Le 26 octobre, l'actualité 2 (gardée jusqu'au 25) n'est plus lisible
    horloge.date = new Date('2026-10-26T08:00:00');
    expect(await stock.lister()).toEqual([]);
    expect(await stock.purger()).toBe(1);
  });

  it('une photo impossible à télécharger sera retentée au lot suivant', async () => {
    const { stock, fetchImpl } = creer();
    const api = {
      lotActualites: vi.fn(async () => ({
        data: [actu(99)],
        ids: [99],
        genere_le: 'L',
      })),
    };
    expect((await stock.synchroniser(api)).photos).toBe(0);
    const appels = fetchImpl.mock.calls.length;
    await stock.synchroniser(api);
    expect(fetchImpl.mock.calls.length).toBeGreaterThan(appels);
  });

  it('vider efface tout', async () => {
    const { stock, caches } = creer();
    await stock.synchroniser({ lotActualites: async () => ({ data: [actu(1)], ids: [1], genere_le: 'L' }) });
    await stock.vider();
    expect(await stock.etat()).toMatchObject({ actualites: 0, telecharge_le: null });
    expect(caches.photos.size).toBe(0);
  });
});

describe('accueil reconstruit hors connexion', () => {
  it('mêmes règles qu’en ligne : veille avec photo seulement, 10 par type, alertes séparées', () => {
    const liste = [
      ...Array.from({ length: 12 }, (_, i) => actu(i + 1)),
      actu(50, { type: 'information', image_url: null }),
      actu(51, { type: 'information', image_url: null, origine: 'manuelle' }),
    ];
    const etat = { telecharge_le: '2026-10-21T10:00:00Z', conservation_jours: 30 };
    const a = accueilHorsLigne(liste, etat);
    expect(a.alertes).toHaveLength(10);
    expect(a.actualites.map((x) => x.id)).toEqual([51]);
    expect(a.hors_ligne).toBe(etat);
  });
});
