import { createContext, useContext } from 'react';
import { createApiClient } from '../../core/api/client.js';
import { createMedRefApi } from '../../core/api/endpoints.js';
import { createTokenStore } from '../../core/auth/tokenStore.js';
import { createPrescriptionsRepo, openMedRefDB } from '../../core/offline/prescriptionsRepo.js';

const ServicesContext = createContext(null);

/**
 * Assemble les services « cœur » (API, session, stockage hors ligne).
 * Seul point où l'on choisit les implémentations propres au web.
 */
export function createWebServices({ baseUrl = import.meta.env.VITE_API_URL || '' } = {}) {
  const tokenStore = createTokenStore();
  const expiredListeners = new Set();
  const client = createApiClient({
    baseUrl,
    getToken: tokenStore.getToken,
    onUnauthorized: () => expiredListeners.forEach((fn) => fn()),
  });

  // Ouverture paresseuse d'IndexedDB (uniquement quand on touche aux prescriptions).
  let dbPromise;
  const lazyDb = {
    then(resolve, reject) {
      dbPromise = dbPromise || openMedRefDB();
      return dbPromise.then(resolve, reject);
    },
  };

  return {
    api: createMedRefApi(client),
    tokenStore,
    repo: createPrescriptionsRepo(lazyDb),
    onSessionExpired(fn) {
      expiredListeners.add(fn);
      return () => expiredListeners.delete(fn);
    },
  };
}

export function ServicesProvider({ services, children }) {
  return <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>;
}

export function useServices() {
  const ctx = useContext(ServicesContext);
  if (!ctx) throw new Error('useServices doit être utilisé dans <ServicesProvider>');
  return ctx;
}
