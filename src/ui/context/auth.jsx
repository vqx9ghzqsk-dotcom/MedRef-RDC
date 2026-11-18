import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useServices } from './services.jsx';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { api, tokenStore, onSessionExpired } = useServices();
  const [user, setUser] = useState(() => (tokenStore.getToken() ? tokenStore.getUser() : null));

  const logout = useCallback(() => {
    tokenStore.clear();
    setUser(null);
  }, [tokenStore]);

  // Revalide la session au démarrage (hors ligne : on garde l'utilisateur en cache).
  useEffect(() => {
    if (!tokenStore.getToken()) return undefined;
    let cancelled = false;
    api
      .me()
      .then((fresh) => {
        if (cancelled) return;
        tokenStore.setUser(fresh);
        setUser(fresh);
      })
      .catch((err) => {
        if (!cancelled && err.status === 401) logout();
      });
    return () => {
      cancelled = true;
    };
  }, [api, tokenStore, logout]);

  useEffect(() => (onSessionExpired ? onSessionExpired(logout) : undefined), [onSessionExpired, logout]);

  const authenticate = useCallback(
    async (action, payload, { persistant = true } = {}) => {
      const { token, user: u } = await api[action](payload);
      tokenStore.save(token, u, { persistant });
      setUser(u);
      return u;
    },
    [api, tokenStore],
  );

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      // options.persistant : « Rester connecté » (session gardée après fermeture du navigateur)
      login: (payload, options) => authenticate('login', payload, options),
      register: (payload) => authenticate('register', payload),
      // Nouveau jeton : les autres sessions du compte sont déconnectées
      changePassword: (payload) =>
        authenticate('changePassword', payload, {
          persistant: tokenStore.estPersistant ? tokenStore.estPersistant() : true,
        }),
      // Profil modifié côté serveur (même jeton) : met à jour l'utilisateur en cache
      updateUser: (u) => {
        tokenStore.setUser(u);
        setUser(u);
      },
      logout,
    }),
    [user, authenticate, logout, tokenStore],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth doit être utilisé dans <AuthProvider>');
  return ctx;
}
