import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Foret } from './ForetFond.jsx';
import { LogoMedRef } from './LogoMedRef.jsx';
import '../../styles/auth-scene.css';

/**
 * Fenêtre de connexion / inscription : une scène plein écran (forêt équatoriale
 * et okapi, dessinés en SVG, aucune image à télécharger) avec une carte en verre
 * dépoli au centre. Elle se superpose à la page de présentation ; la croix,
 * la touche Échap ou le lien « Accueil » ramènent à « / ».
 */

const SELECTEUR_FOCUS =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function AuthScene({ children }) {
  const navigate = useNavigate();
  const carte = useRef(null);

  useEffect(() => {
    const fermer = (e) => {
      if (e.key === 'Escape') navigate('/');
    };
    window.addEventListener('keydown', fermer);
    const avant = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    carte.current?.focus();
    return () => {
      window.removeEventListener('keydown', fermer);
      document.body.style.overflow = avant;
    };
  }, [navigate]);

  // Le focus reste dans la fenêtre tant qu'elle est ouverte.
  const piege = (e) => {
    if (e.key !== 'Tab' || !carte.current) return;
    const cibles = [...carte.current.querySelectorAll(SELECTEUR_FOCUS)];
    if (cibles.length === 0) return;
    const premiere = cibles[0];
    const derniere = cibles[cibles.length - 1];
    if (e.shiftKey && (document.activeElement === premiere || document.activeElement === carte.current)) {
      e.preventDefault();
      derniere.focus();
    } else if (!e.shiftKey && document.activeElement === derniere) {
      e.preventDefault();
      premiere.focus();
    }
  };

  return (
    <div className="auth-scene">
      <Foret className="auth-fond" />
      <header className="auth-haut">
        <Link to="/" className="auth-brand" aria-label="MedRef RDC, retour à l’accueil">
          <LogoMedRef />
        </Link>
        <Link to="/" className="auth-retour">
          Accueil
        </Link>
      </header>
      <div className="auth-centre">
        <div
          className="auth-carte"
          role="dialog"
          aria-modal="true"
          aria-label="Accès à MedRef RDC"
          tabIndex={-1}
          ref={carte}
          onKeyDown={piege}
        >
          <Link to="/" className="auth-fermer" aria-label="Fermer">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
