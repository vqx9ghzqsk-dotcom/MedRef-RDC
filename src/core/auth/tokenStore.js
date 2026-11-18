/**
 * Persistance de la session. Le stockage est injectable : localStorage sur le
 * web, Capacitor Preferences / SecureStorage sur mobile (même interface
 * getItem/setItem/removeItem).
 *
 * « Rester connecté » : la session va dans le stockage durable (par défaut) ; sinon
 * dans le stockage de session du navigateur, effacé à sa fermeture.
 */

const TOKEN_KEY = 'medref.token';
const USER_KEY = 'medref.user';

function memoire() {
  const mem = new Map();
  return {
    getItem: (k) => (mem.has(k) ? mem.get(k) : null),
    setItem: (k, v) => mem.set(k, String(v)),
    removeItem: (k) => mem.delete(k),
  };
}

function safeStorage(nom = 'localStorage') {
  try {
    const s = globalThis[nom];
    s.setItem('medref.probe', '1');
    s.removeItem('medref.probe');
    return s;
  } catch {
    // Navigation privée ou stockage bloqué : session en mémoire seulement.
    return memoire();
  }
}

export function createTokenStore(storage = safeStorage(), session = safeStorage('sessionStorage')) {
  // Le stockage qui détient la session en cours (durable en priorité)
  const actif = () => (storage.getItem(TOKEN_KEY) ? storage : session.getItem(TOKEN_KEY) ? session : storage);
  return {
    getToken: () => actif().getItem(TOKEN_KEY),
    // La session en cours est-elle gardée après la fermeture du navigateur ?
    estPersistant: () => !session.getItem(TOKEN_KEY),
    getUser: () => {
      try {
        return JSON.parse(actif().getItem(USER_KEY) || 'null');
      } catch {
        return null;
      }
    },
    save(token, user, { persistant = true } = {}) {
      const cible = persistant ? storage : session;
      const autre = persistant ? session : storage;
      autre.removeItem(TOKEN_KEY);
      autre.removeItem(USER_KEY);
      cible.setItem(TOKEN_KEY, token);
      cible.setItem(USER_KEY, JSON.stringify(user));
    },
    setUser(user) {
      actif().setItem(USER_KEY, JSON.stringify(user));
    },
    clear() {
      for (const s of [storage, session]) {
        s.removeItem(TOKEN_KEY);
        s.removeItem(USER_KEY);
      }
    },
  };
}
