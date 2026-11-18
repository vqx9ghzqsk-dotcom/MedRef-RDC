import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Terme sémiologique cliquable : sa définition s'ouvre au survol, au focus clavier
 * ou au toucher (mobile), et se ferme avec Échap ou en sortant du terme.
 */
export function Terme({ texte, terme }) {
  const [ouvert, setOuvert] = useState(false);
  const [epingle, setEpingle] = useState(false);
  const id = useId();
  const racine = useRef(null);
  const visible = ouvert || epingle;

  useEffect(() => {
    if (!epingle) return undefined;
    // Toucher ailleurs ferme la définition épinglée (mobile)
    const fermer = (e) => {
      if (racine.current && !racine.current.contains(e.target)) setEpingle(false);
    };
    document.addEventListener('pointerdown', fermer);
    return () => document.removeEventListener('pointerdown', fermer);
  }, [epingle]);

  return (
    <span
      ref={racine}
      className="terme-wrap"
      onMouseEnter={() => setOuvert(true)}
      onMouseLeave={() => setOuvert(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOuvert(false);
          setEpingle(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setOuvert(false);
          setEpingle(false);
        }
      }}
    >
      {/* Élément de texte (et non <button>) pour que les termes longs passent à la ligne */}
      <span
        role="button"
        tabIndex={0}
        className="terme"
        aria-expanded={visible}
        aria-describedby={visible ? id : undefined}
        onFocus={() => setOuvert(true)}
        onClick={() => setEpingle((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setEpingle((v) => !v);
          }
        }}
      >
        {texte}
      </span>
      {visible && (
        <span id={id} role="tooltip" className="terme-bulle">
          <strong className="terme-titre">{terme.terme}</strong>
          <span className="terme-def">{terme.definition}</span>
          <span className="terme-liens">
            <Link to={`/glossaire#${terme.slug}`}>Glossaire</Link>
            {terme.syndrome && (
              <>
                {' · '}
                <Link to={`/syndromes/${terme.syndrome.slug}`}>{terme.syndrome.nom}</Link>
              </>
            )}
          </span>
        </span>
      )}
    </span>
  );
}
