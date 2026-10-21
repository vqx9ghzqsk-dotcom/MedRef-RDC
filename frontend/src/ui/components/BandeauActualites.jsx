import { Link } from 'react-router-dom';
import { dateLocale } from '../../core/dates.js';

/**
 * Fil d'actualités qui défile tout seul : dernières actualités publiées (veille automatique des
 * sources officielles et publications des administrateurs), chacune avec sa source, sa date et
 * le lien vers la page d'origine. Le défilement s'arrête au survol et au clavier ; il est
 * remplacé par une liste qu'on fait glisser si l'utilisateur a demandé moins d'animations.
 */

const ETIQUETTES = {
  alerte_sanitaire: 'Alerte',
  pharmacovigilance: 'Pharmacovigilance',
  protocole: 'Recommandation',
  innovation: 'Innovation',
  information: 'Information',
};

const LANGUES = { en: 'l’anglais', es: 'l’espagnol', pt: 'le portugais', de: 'l’allemand' };

const date = (d) => (d ? dateLocale(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }) : '');

/** Note de traduction : « Traduit automatiquement de l’anglais — titre original : … ». */
export function noteTraduction(a) {
  if (!a?.traduction_auto) return '';
  const langue = LANGUES[a.langue_originale] || 'une autre langue';
  return `Traduit automatiquement de ${langue}${a.titre_original ? ` — titre original : ${a.titre_original}` : ''}`;
}

function Element({ a, cache }) {
  const note = noteTraduction(a);
  return (
    <li className="ba-element" aria-hidden={cache || undefined}>
      <span className={`ba-type ba-${a.type}`}>{ETIQUETTES[a.type] || 'Actualité'}</span>
      {a.source_url ? (
        <a
          href={a.source_url}
          target="_blank"
          rel="noopener noreferrer"
          title={note || undefined}
          tabIndex={cache ? -1 : undefined}
        >
          {a.titre}
        </a>
      ) : (
        <span title={note || undefined}>{a.titre}</span>
      )}
      <span className="ba-source">
        {a.source_titre}
        {a.zone ? ` · ${a.zone}` : ''} · {date(a.publie_le)}
        {note ? ' · traduit' : ''}
      </span>
    </li>
  );
}

export function BandeauActualites({ actualites, max = 20, className = '' }) {
  const liste = [...(actualites || [])]
    .sort((x, y) => String(y.publie_le || '').localeCompare(String(x.publie_le || '')) || y.id - x.id)
    .slice(0, max);
  if (!liste.length) return null;
  // Environ 7 secondes par actualité : le temps de lire un titre
  const duree = `${Math.max(40, liste.length * 7)}s`;
  return (
    <section
      className={`bandeau-actu ${className}`.trim()}
      aria-label="Fil d’actualités des sources officielles"
    >
      <p className="ba-titre">
        <span className="ba-direct" aria-hidden="true" />
        En direct des sources officielles
      </p>
      <div className="ba-fenetre">
        <ul className="ba-piste" style={{ '--ba-duree': duree }}>
          {liste.map((a) => (
            <Element key={a.id} a={a} />
          ))}
          {/* Copie pour un défilement sans à-coup ; ignorée des lecteurs d'écran */}
          {liste.map((a) => (
            <Element key={`copie-${a.id}`} a={a} cache />
          ))}
        </ul>
      </div>
      <Link to="/actualites" className="ba-tout">
        Toutes les actualités
      </Link>
    </section>
  );
}
