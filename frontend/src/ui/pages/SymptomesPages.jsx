import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView, Empty } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { FREQUENCES, groupByInitial } from '../../core/labels.js';

const normalize = (s) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

export function SymptomesPage() {
  const { api } = useServices();
  const state = useAsync(() => api.symptomes(), [api]);
  const [filter, setFilter] = useState('');

  return (
    <>
      <Breadcrumb items={[{ label: 'Symptômes' }]} />
      <header className="page-header">
        <h1>Symptômes</h1>
        <p className="lead">Partez de ce que présente le patient pour retrouver les pathologies à évoquer.</p>
      </header>
      <div className="field field-inline">
        <label htmlFor="filtre-symptome">Filtrer</label>
        <input
          id="filtre-symptome"
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="ex. fièvre"
        />
      </div>
      <AsyncView state={state}>
        {(list) => {
          const shown = list.filter((s) => normalize(s.nom).includes(normalize(filter)));
          if (!shown.length) return <Empty>Aucun symptôme ne correspond à « {filter} ».</Empty>;
          return groupByInitial(shown).map(([letter, items]) => (
            <section key={letter} className="alpha-group" aria-label={letter}>
              <h2 className="alpha-letter">{letter}</h2>
              <ul className="list-links">
                {items.map((s) => (
                  <li key={s.id}>
                    <Link to={`/symptomes/${s.slug}`}>
                      <span>{s.nom}</span>
                      <span className="count">
                        {s.nb_pathologies} pathologie{s.nb_pathologies > 1 ? 's' : ''}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ));
        }}
      </AsyncView>
    </>
  );
}

export function SymptomePage() {
  const { slug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.symptome(slug), [api, slug]);

  return (
    <AsyncView state={state}>
      {(s) => (
        <article>
          <Breadcrumb items={[{ label: 'Symptômes', to: '/symptomes' }, { label: s.nom }]} />
          <header className="page-header">
            <h1>{s.nom}</h1>
            {s.description && <p className="lead">{s.description}</p>}
          </header>
          <h2 className="section-title">Pathologies à évoquer, de la plus à la moins fréquente</h2>
          {s.pathologies.length ? (
            <ul className="patho-list">
              {s.pathologies.map((p) => (
                <li key={p.id}>
                  <Link to={`/pathologies/${p.slug}`}>
                    <span className="patho-name">
                      {p.nom} <span className={`tag freq-${p.frequence}`}>{FREQUENCES[p.frequence]}</span>
                    </span>
                    <span className="patho-resume">
                      {p.departement}, {p.specialite}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <Empty>Aucune pathologie n’est encore reliée à ce symptôme.</Empty>
          )}
        </article>
      )}
    </AsyncView>
  );
}
