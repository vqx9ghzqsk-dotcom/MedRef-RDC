import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Exécute une fonction asynchrone au montage et à chaque changement de `deps`.
 * Ignore les réponses obsolètes (navigation rapide entre fiches).
 */
export function useAsync(fn, deps) {
  const [state, setState] = useState({ data: null, error: null, loading: true });
  const callId = useRef(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const run = useCallback(fn, deps);

  const load = useCallback(() => {
    const id = ++callId.current;
    setState((s) => ({ data: s.data, error: null, loading: true }));
    Promise.resolve()
      .then(run)
      .then(
        (data) => id === callId.current && setState({ data, error: null, loading: false }),
        (error) => id === callId.current && setState({ data: null, error, loading: false }),
      );
  }, [run]);

  useEffect(() => {
    load();
  }, [load]);

  return { ...state, reload: load };
}
