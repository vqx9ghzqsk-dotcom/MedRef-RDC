import { Link } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { SearchBar } from '../components/SearchBar.jsx';
import { AsyncView } from '../components/Status.jsx';
import { QUICK_ACCESS } from '../components/Layout.jsx';

const plural = (n, one, many) => `${n} ${n > 1 ? many : one}`;

export function HomePage() {
  const { api } = useServices();
  const departements = useAsync(() => api.departements(), [api]);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">
          MedRef RDC
          <span className="hero-byline">par le Dr Ben Mingalu</span>
        </h1>
        <p className="hero-lead">
          La référence clinique pensée pour la République démocratique du Congo : pathologies, urgences,
          médicaments disponibles localement et protocoles nationaux, reliés entre eux.
        </p>
        <SearchBar size="large" />
      </section>

      <section aria-labelledby="acces-title" className="section">
        <h2 id="acces-title" className="section-title">
          Accès rapides
        </h2>
        <ul className="quick-grid">
          {QUICK_ACCESS.map((q) => (
            <li key={q.to}>
              <Link to={q.to} className={`quick-tile${q.tone ? ` quick-${q.tone}` : ''}`}>
                <span className="quick-label">{q.label}</span>
                <span className="quick-hint">{q.hint}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="dep-title" className="section">
        <h2 id="dep-title" className="section-title">
          Départements
        </h2>
        <AsyncView state={departements}>
          {(deps) => (
            <ul className="dep-grid">
              {deps.map((d) => (
                <li key={d.id}>
                  <Link to={`/departements/${d.slug}`} className="dep-card">
                    <span className="dep-icon" aria-hidden="true">
                      {d.icone}
                    </span>
                    <span className="dep-name">{d.nom}</span>
                    <span className="dep-desc">{d.description}</span>
                    <span className="dep-count">
                      {plural(Number(d.nb_specialites), 'spécialité', 'spécialités')},{' '}
                      {plural(Number(d.nb_pathologies), 'fiche', 'fiches')}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </AsyncView>
      </section>
    </>
  );
}
