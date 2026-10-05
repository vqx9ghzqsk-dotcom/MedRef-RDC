/**
 * Persistance de la session. Le stockage est injectable : localStorage sur le
 * web, Capacitor Preferences / SecureStorage sur mobile (même interface
 * getItem/setItem/removeItem).
 */

const TOKEN_KEY = 'medref.token';
const USER_KEY = 'medref.user';

function safeStorage() {
  try {
    const s = globalThis.localStorage;
    s.setItem('medref.probe', '1');
    s.removeItem('medref.probe');
    return s;
  } catch {
    // Navigation privée ou stockage bloqué : session en mémoire seulement.
    const mem = new Map();
    return {
      getItem: (k) => (mem.has(k) ? mem.get(k) : null),
      setItem: (k, v) => mem.set(k, String(v)),
      removeItem: (k) => mem.delete(k),
    };
  }
}

export function createTokenStore(storage = safeStorage()) {
  return {
    getToken: () => storage.getItem(TOKEN_KEY),
    getUser: () => {
      try {
        return JSON.parse(storage.getItem(USER_KEY) || 'null');
      } catch {
        return null;
      }
    },
    save(token, user) {
      storage.setItem(TOKEN_KEY, token);
      storage.setItem(USER_KEY, JSON.stringify(user));
    },
    setUser(user) {
      storage.setItem(USER_KEY, JSON.stringify(user));
    },
    clear() {
      storage.removeItem(TOKEN_KEY);
      storage.removeItem(USER_KEY);
    },
  };
}
