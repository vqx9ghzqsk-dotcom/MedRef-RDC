import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useServices } from '../context/services.jsx';
import { useActualisationAuRetour } from '../hooks/useActualisationAuRetour.js';
import { useSynchroActualites } from '../hooks/useSynchroActualites.js';
import { useAuth } from '../context/auth.jsx';
import { useOnline } from '../hooks/useOnline.js';
import { isEditor } from './AdminForm.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import { GlossaireProvider } from '../context/glossaire.jsx';
import { PanneauProduitProvider } from './Produits.jsx';
import { PrescriptionsProvider } from '../hooks/usePrescriptions.js';
import { VitrinePage } from '../pages/VitrinePage.jsx';
import { LogoMedRef } from './LogoMedRef.jsx';

const PAGES_AUTH = ['/connexion', '/inscription', '/mot-de-passe-oublie', '/reinitialiser-mot-de-passe'];

export const QUICK_ACCESS = [
  { to: '/urgences', label: 'Urgences', hint: 'Conduite ABCDE, signes de gravité', tone: 'urgence' },
  { to: '/diagnostic', label: 'Aide au diagnostic', hint: 'Du cas clinique aux produits' },
  { to: '/symptomes', label: 'Symptômes', hint: 'Partir de ce que présente le patient' },
  { to: '/scores', label: 'Calculatrices', hint: 'Scores et calculs de doses' },
  { to: '/medicaments', label: 'Médicaments', hint: 'DCI, produits disponibles en RDC' },
  { to: '/examens', label: 'Examens', hint: 'Valeurs normales et interprétation' },
  { to: '/glossaire', label: 'Sémiologie', hint: 'Glossaire des signes et syndromes' },
  { to: '/sources', label: 'Sources', hint: 'OMS, programmes nationaux, références' },
];

const ICONES_ACCES = {
  '/espace': <path d="m3 10 9-7 9 7M5 9v11h14V9M9 20v-6h6v6" />,
  '/urgences': <path d="M12 3v18M3 12h18" />,
  '/diagnostic': (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  '/symptomes': <path d="M3 12h4l2-6 4 12 2-6h6" />,
  '/scores': (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h2m4 0h2m-8 4h2m4 0h2" />
    </>
  ),
  '/medicaments': (
    <>
      <path d="M7 17a4 4 0 0 1 0-6l4-4a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0Z" />
      <path d="m9 15 6-6" />
    </>
  ),
  '/examens': (
    <>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
      <path d="M8 15h8" />
    </>
  ),
  '/glossaire': (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z" />
      <path d="M4 16h16M8 7h8m-8 4h6" />
    </>
  ),
  '/sources': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
};

export function IconeAcces({ to }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONES_ACCES[to] || <path d="M4 5h16v14H4zM8 9h8m-8 4h5" />}
    </svg>
  );
}

const NAV_MOBILE = [
  { to: '/espace', label: 'Espace' },
  { to: '/urgences', label: 'Urgences' },
  { to: '/diagnostic', label: 'Diagnostic' },
  { to: '/medicaments', label: 'Médicaments' },
];

function NavigationMobile() {
  return (
    <nav className="mobile-nav" aria-label="Navigation mobile">
      {NAV_MOBILE.map((item) => (
        <NavLink key={item.to} to={item.to} end={item.to === '/espace'}>
          <IconeAcces to={item.to} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

/**
 * Pastille « N alertes en cours » : les alertes sanitaires ne s'affichent que sur la page
 * d'accueil ; ailleurs, seule leur présence est signalée, avec un lien vers l'accueil.
 */
function PastilleAlertes() {
  const { api } = useServices();
  const [n, setN] = useState(0);
  const [version, setVersion] = useState(0);
  // Retour d'internet : nombre d'alertes recompté après la relève des sources
  const recompter = useCallback(() => setVersion((v) => v + 1), []);
  useActualisationAuRetour(recompter);
  useEffect(() => {
    if (typeof api.accueil !== 'function') return undefined;
    let actif = true;
    Promise.resolve()
      .then(() => api.accueil())
      .then((a) => actif && setN((a?.alertes || []).filter((x) => x.type === 'alerte_sanitaire').length))
      .catch(() => {});
    return () => {
      actif = false;
    };
  }, [api, version]);
  if (!n) return null;
  return (
    <Link to="/" className="pastille-alertes" title="Alertes sanitaires en cours : voir la page d’accueil">
      <span className="pastille-point" aria-hidden="true" />
      {n} alerte{n > 1 ? 's' : ''}
      <span className="visually-hidden"> en cours</span>
    </Link>
  );
}

export function Layout() {
  const { user, logout } = useAuth();
  // Lot d'actualités gardé sur l'appareil pour la lecture hors connexion
  useSynchroActualites();
  const online = useOnline();
  const { pathname } = useLocation();

  // Remonte en haut à chaque changement de page.
  useEffect(() => {
    if (typeof window.scrollTo === 'function') window.scrollTo(0, 0);
  }, [pathname]);

  // « / » : page d'accueil pour tous, connectés ou non, sans l'en-tête de l'application.
  if (pathname === '/') return <VitrinePage />;
  // Connexion, inscription et mot de passe : fenêtre ouverte par-dessus la page de présentation.
  if (!user && PAGES_AUTH.includes(pathname)) {
    return (
      <>
        <div inert="" aria-hidden="true">
          <VitrinePage />
        </div>
        <Outlet />
      </>
    );
  }

  return (
    <div className="app">
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <header className="topbar">
        <div className={`topbar-inner${user ? ' is-connecte' : ''}`}>
          <Link
            to="/"
            className="brand"
            aria-label="MedRef RDC, retour à l’accueil"
            title="Retour à l’accueil"
          >
            <LogoMedRef />
          </Link>
          <nav aria-label="Navigation principale" className="mainnav">
            {user && (
              <NavLink to="/espace" className="nav-espace">
                Mon espace
              </NavLink>
            )}
            {QUICK_ACCESS.map((q) => (
              <NavLink key={q.to} to={q.to} className={q.tone === 'urgence' ? 'nav-urgence' : undefined}>
                {q.label}
              </NavLink>
            ))}
            <NavLink to="/prescriptions">Prescriptions</NavLink>
            {isEditor(user) && <NavLink to="/admin">Administration</NavLink>}
          </nav>
          <div className="account">
            {user ? (
              <>
                <PastilleAlertes />
                <Link to="/compte" className="account-name" title={`${user.email} — mon compte`}>
                  {user.nom}
                </Link>
                <button type="button" className="btn btn-ghost" onClick={logout}>
                  Se déconnecter
                </button>
              </>
            ) : (
              <Link to="/connexion" className="btn btn-ghost">
                Se connecter
              </Link>
            )}
          </div>
        </div>
        {!online && (
          <p className="offline-banner" role="status">
            Hors connexion : les fiches déjà consultées ou <Link to="/hors-ligne">téléchargées</Link> restent
            lisibles ; vos prescriptions seront envoyées au retour du réseau ou à la réouverture de l’application.
          </p>
        )}
      </header>

      <main id="contenu" className="content" tabIndex={-1}>
        <GlossaireProvider>
          <PanneauProduitProvider>
            <PrescriptionsProvider>
              <ErrorBoundary>
                <Outlet />
              </ErrorBoundary>
            </PrescriptionsProvider>
          </PanneauProduitProvider>
        </GlossaireProvider>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p>
            <strong>MedRef RDC</strong> par le Dr Ben Mingalu. Bibliothèque de référence pour les
            professionnels de santé. Elle ne remplace pas le jugement clinique.
          </p>
          <p>
            <Link to="/hors-ligne">Utiliser sans connexion</Link> · Contact :{' '}
            <a href="mailto:bmingalu@gmail.com">bmingalu@gmail.com</a>
          </p>
        </div>
      </footer>
      <NavigationMobile />
    </div>
  );
}
