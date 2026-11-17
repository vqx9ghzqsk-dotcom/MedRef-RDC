import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView, Empty } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { RichText } from '../components/RichText.jsx';
import { CATEGORIES_URGENCE, groupByInitial } from '../../core/labels.js';

export function UrgencesPage() {
  const { api } = useServices();
  const [params, setParams] = useSearchParams();
  const categorie = params.get('categorie') || '';
  const state = useAsync(() => api.urgences(categorie || undefined), [api, categorie]);

  return (
    <>
      <Breadcrumb items={[{ label: 'Urgences' }]} />
      <header className="page-header page-header-urgence">
        <h1>Urgences</h1>
        <p className="lead">Signes de gravité, conduite ABCDE et critères de transfert, de A à Z.</p>
      </header>
      <div className="filters" role="group" aria-label="Filtrer par catégorie">
        <button type="button" className="filter" aria-pressed={!categorie} onClick={() => setParams({})}>
          Toutes
        </button>
        {Object.entries(CATEGORIES_URGENCE).map(([value, label]) => (
          <button
            key={value}
            type="button"
            className="filter"
            aria-pressed={categorie === value}
            onClick={() => setParams({ categorie: value })}
          >
            {label}
          </button>
        ))}
      </div>
      <AsyncView state={state}>
        {(list) =>
          list.length ? (
            groupByInitial(list).map(([letter, items]) => (
              <section key={letter} className="alpha-group" aria-label={letter}>
                <h2 className="alpha-letter">{letter}</h2>
                <ul className="list-links">
                  {items.map((u) => (
                    <li key={u.id}>
                      <Link to={`/urgences/${u.slug}`}>
                        <span>
                          {u.nom}
                          <span className="row-sub">{CATEGORIES_URGENCE[u.categorie]}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          ) : (
            <Empty>Aucune urgence dans cette catégorie pour le moment.</Empty>
          )
        }
      </AsyncView>
    </>
  );
}

export function UrgencePage() {
  const { slug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.urgence(slug), [api, slug]);

  return (
    <AsyncView state={state}>
      {(u) => (
        <article>
          <Breadcrumb items={[{ label: 'Urgences', to: '/urgences' }, { label: u.nom }]} />
          <header className="page-header page-header-urgence">
            <h1>{u.nom}</h1>
            <p className="lead">
              Urgence {CATEGORIES_URGENCE[u.categorie].toLowerCase()}
              {u.description ? `. ${u.description}` : ''}
            </p>
          </header>
          <div className="urgence-grid">
            <section className="card card-alert">
              <h2>Signes de gravité</h2>
              <RichText text={u.signes_gravite} />
            </section>
            <section className="card">
              <h2>Conduite à tenir (ABCDE)</h2>
              <RichText text={u.conduite_abcde} />
            </section>
            <section className="card">
              <h2>Quand transférer</h2>
              <RichText text={u.quand_transferer} />
            </section>
          </div>
          {u.pathologies.length > 0 && (
            <section className="related">
              <h2>Pathologies associées</h2>
              <ul className="patho-list">
                {u.pathologies.map((p) => (
                  <li key={p.id}>
                    <Link to={`/pathologies/${p.slug}`} className="patho-name">
                      {p.nom}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      )}
    </AsyncView>
  );
}
