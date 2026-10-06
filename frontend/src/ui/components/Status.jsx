import { Link } from 'react-router-dom';

export function Loading({ label = 'Chargement…' }) {
  return (
    <p className="status status-loading" role="status" aria-live="polite">
      {label}
    </p>
  );
}

/** Erreur API avec message actionnable et bouton de réessai. */
export function ErrorState({ error, onRetry }) {
  if (error && error.status === 404) {
    return (
      <div className="status status-error" role="alert">
        <p>Cette page n’existe pas ou a été déplacée.</p>
        <Link to="/">Revenir à l’accueil</Link>
      </div>
    );
  }
  const offline = error && error.status === 0;
  return (
    <div className="status status-error" role="alert">
      <p>
        {offline
          ? 'Contenu indisponible hors connexion. Reconnectez-vous puis réessayez.'
          : (error && error.message) || 'Une erreur est survenue.'}
      </p>
      {error && error.reference && (
        <p className="muted">
          Si le problème persiste, communiquez la référence <code>{error.reference}</code>.
        </p>
      )}
      {onRetry && (
        <button type="button" className="btn btn-secondary" onClick={onRetry}>
          Réessayer
        </button>
      )}
    </div>
  );
}

export function Empty({ children }) {
  return <p className="status status-empty">{children}</p>;
}

/** Affiche loading / error / contenu selon l'état d'un useAsync. */
export function AsyncView({ state, children }) {
  if (state.loading && !state.data) return <Loading />;
  if (state.error) return <ErrorState error={state.error} onRetry={state.reload} />;
  if (!state.data) return null;
  return children(state.data);
}
