import { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { useServices } from '../context/services.jsx';

/**
 * Remplace une page qui plante par un message clair (au lieu d'un écran blanc)
 * et consigne l'erreur dans le journal du serveur, avec une référence à communiquer.
 */
class Boundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, reference: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    const { signaler } = this.props;
    if (!signaler) return;
    signaler({
      message: String(error?.message || error),
      page: typeof window !== 'undefined' ? window.location.pathname : null,
      pile: `${error?.stack || ''}\n${info?.componentStack || ''}`,
    })
      .then((r) => this.setState({ reference: r?.reference || null }))
      .catch(() => {});
  }

  render() {
    const { error, reference } = this.state;
    if (!error) return this.props.children;
    return (
      <div className="status status-error crash" role="alert">
        <h1>Une erreur est survenue sur cette page</h1>
        <p>
          L’affichage a été interrompu. Vos prescriptions et vos données enregistrées ne sont pas affectées.
        </p>
        <div className="crash-actions">
          <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
            Recharger la page
          </button>
          <a className="btn btn-secondary" href="/">
            Retour à l’accueil
          </a>
        </div>
        {reference && (
          <p className="muted">
            Erreur enregistrée. Si elle se reproduit, communiquez la référence <code>{reference}</code>.
          </p>
        )}
      </div>
    );
  }
}

/** Réinitialisé à chaque changement de page : une erreur ne bloque pas toute la navigation. */
export function ErrorBoundary({ children }) {
  const { pathname } = useLocation();
  const { api } = useServices();
  return (
    <Boundary key={pathname} signaler={api.signalerErreur}>
      {children}
    </Boundary>
  );
}
