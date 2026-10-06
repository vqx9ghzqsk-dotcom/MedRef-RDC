import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../context/auth.jsx';
import { useOnline } from '../hooks/useOnline.js';
import { isEditor } from './AdminForm.jsx';

export const QUICK_ACCESS = [
  { to: '/urgences', label: 'Urgences', hint: 'Conduite ABCDE, signes de gravité', tone: 'urgence' },
  { to: '/symptomes', label: 'Symptômes', hint: 'Partir de ce que présente le patient' },
  { to: '/scores', label: 'Calculatrices', hint: 'Scores et calculs de doses' },
  { to: '/medicaments', label: 'Médicaments', hint: 'DCI, produits disponibles en RDC' },
  { to: '/examens', label: 'Examens', hint: 'Valeurs normales et interprétation' },
  { to: '/sources', label: 'Sources', hint: 'OMS, programmes nationaux, références' },
];

export function Layout() {
  const { user, logout } = useAuth();
  const online = useOnline();
  const { pathname } = useLocation();

  // Remonte en haut à chaque changement de page.
  useEffect(() => {
    if (typeof window.scrollTo === 'function') window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand" aria-label="MedRef RDC, accueil">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="28" height="28">
                <rect width="32" height="32" rx="7" fill="currentColor" />
                <path d="M13 7h6v6h6v6h-6v6h-6v-6H7v-6h6z" fill="#fff" />
                <path
                  d="M24.5 4.5l1 2.2 2.4.2-1.8 1.6.6 2.3-2.2-1.2-2.1 1.2.5-2.3-1.8-1.6 2.4-.2z"
                  fill="#f7d618"
                />
              </svg>
            </span>
            <span className="brand-name">MedRef RDC</span>
          </Link>
          <nav aria-label="Navigation principale" className="mainnav">
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
                <span className="account-name" title={user.email}>
                  {user.nom}
                </span>
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
            Hors connexion : vos prescriptions restent disponibles et seront envoyées au retour du réseau.
          </p>
        )}
      </header>

      <main id="contenu" className="content" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p>
            <strong>MedRef RDC</strong> par le Dr Ben Mingalu. Bibliothèque de référence pour les
            professionnels de santé. Elle ne remplace pas le jugement clinique.
          </p>
          <p>
            Contact : <a href="mailto:bmingalu@gmail.com">bmingalu@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
