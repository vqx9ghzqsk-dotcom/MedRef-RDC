import { createContext, createElement, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useServices } from '../context/services.jsx';
import { useAuth } from '../context/auth.jsx';
import { useOnline } from './useOnline.js';
import { syncPrescriptions } from '../../core/offline/sync.js';

const DELAI_REPRISE_MS = 250;
const PrescriptionsContext = createContext(null);

/**
 * Prescriptions locales (IndexedDB) + synchronisation automatique quand
 * l'utilisateur est connecté et que le réseau est disponible.
 */
function usePrescriptionsState() {
  const { api, repo } = useServices();
  const { user } = useAuth();
  const online = useOnline();
  const userId = user ? user.id : null;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncState, setSyncState] = useState({ running: false, error: null, last: null });
  const running = useRef(false);
  const repriseTimer = useRef(null);

  const refresh = useCallback(async () => {
    setItems(await repo.list(userId));
    setLoading(false);
  }, [repo, userId]);

  const sync = useCallback(async () => {
    if (!userId || running.current) return;
    running.current = true;
    setSyncState((s) => ({ ...s, running: true, error: null }));
    try {
      const last = await syncPrescriptions({ repo, api, userId });
      setSyncState({ running: false, error: null, last });
    } catch (err) {
      setSyncState({ running: false, error: err.message, last: null });
    } finally {
      running.current = false;
      await refresh();
    }
  }, [api, repo, userId, refresh]);

  useEffect(() => {
    refresh().catch(() => setLoading(false));
  }, [refresh]);

  // Synchronise au montage et au retour du réseau.
  useEffect(() => {
    if (online && userId) sync();
  }, [online, userId, sync]);

  const programmerSynchroAuRetour = useCallback(() => {
    if (!userId) return;
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
      clearTimeout(repriseTimer.current);
      repriseTimer.current = null;
      return;
    }

    clearTimeout(repriseTimer.current);
    repriseTimer.current = setTimeout(() => {
      repriseTimer.current = null;
      const visible = typeof document === 'undefined' || document.visibilityState !== 'hidden';
      const connecte = typeof navigator === 'undefined' || navigator.onLine !== false;
      if (visible && connecte) sync();
    }, DELAI_REPRISE_MS);
  }, [sync, userId]);

  // iOS peut suspendre une PWA en arrière-plan : reprend la synchro à son retour au premier plan.
  useEffect(() => {
    if (!userId) return undefined;
    window.addEventListener('pageshow', programmerSynchroAuRetour);
    window.addEventListener('focus', programmerSynchroAuRetour);
    document.addEventListener('visibilitychange', programmerSynchroAuRetour);
    return () => {
      window.removeEventListener('pageshow', programmerSynchroAuRetour);
      window.removeEventListener('focus', programmerSynchroAuRetour);
      document.removeEventListener('visibilitychange', programmerSynchroAuRetour);
      clearTimeout(repriseTimer.current);
      repriseTimer.current = null;
    };
  }, [programmerSynchroAuRetour, userId]);

  const create = useCallback(
    async (draft) => {
      const record = await repo.create(draft, userId);
      await refresh();
      if (online && userId) sync();
      return record;
    },
    [repo, userId, refresh, online, sync],
  );

  const remove = useCallback(
    async (id) => {
      await repo.remove(id);
      await refresh();
      if (online && userId) sync();
    },
    [repo, refresh, online, userId, sync],
  );

  return { items, loading, online, canSync: Boolean(userId), syncState, sync, create, remove };
}

export function PrescriptionsProvider({ children }) {
  const state = usePrescriptionsState();
  return createElement(PrescriptionsContext.Provider, { value: state }, children);
}

export function usePrescriptions() {
  const state = useContext(PrescriptionsContext);
  if (!state) throw new Error('usePrescriptions doit être utilisé dans <PrescriptionsProvider>');
  return state;
}
