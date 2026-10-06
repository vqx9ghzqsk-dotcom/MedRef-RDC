/**
 * Service worker MedRef RDC.
 * - Met en cache les ressources statiques (coque de l'application, JS, CSS, icônes).
 * - Contenu médical public (/api) : réseau d'abord ; si le réseau échoue ou met plus
 *   de 5 s à répondre, la dernière version reçue est servie depuis le cache. La page
 *   « Hors ligne » peut pré-télécharger toutes les fiches.
 * - Jamais de cache pour les données personnelles ou d'administration
 *   (auth, prescriptions, admin, journal) : les prescriptions vivent dans IndexedDB.
 * - Navigation : réseau d'abord, repli sur index.html en cache (SPA hors ligne).
 */

const VERSION = 'medref-v2';
const API_CACHE = 'medref-api-v1';
const DELAI_RESEAU_MS = 5000;
const API_PRIVEES = ['/api/auth', '/api/prescriptions', '/api/admin', '/api/journal'];
const SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(VERSION)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== VERSION && k !== API_CACHE).map((k) => caches.delete(k))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) {
    if (API_PRIVEES.some((p) => url.pathname.startsWith(p))) return;
    event.respondWith(reseauPuisCache(request));
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put('/index.html', copy));
          return response;
        })
        .catch(() => caches.match('/index.html')),
    );
    return;
  }

  // Ressources statiques : cache d'abord, puis réseau (et mise en cache).
  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((response) => {
          if (response.ok && response.type === 'basic') {
            const copy = response.clone();
            caches.open(VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        }),
    ),
  );
});

/** Réseau d'abord ; repli sur la dernière réponse en cache si hors ligne, lent ou en panne. */
async function reseauPuisCache(request) {
  const cache = await caches.open(API_CACHE);
  const reseau = fetch(request).then((response) => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  });
  reseau.catch(() => {}); // évite un rejet non géré si la copie locale a déjà été servie
  const enCache = await cache.match(request, { ignoreVary: true });
  if (!enCache) return reseau;
  const delai = new Promise((resolve) => {
    setTimeout(() => resolve(null), DELAI_RESEAU_MS);
  });
  try {
    const response = await Promise.race([reseau, delai]);
    if (response && response.status < 500) return response;
  } catch {
    // réseau indisponible : on sert la copie locale
  }
  return enCache;
}
