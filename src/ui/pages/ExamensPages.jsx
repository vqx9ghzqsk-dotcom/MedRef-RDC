import { Link, useParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { RichText } from '../components/RichText.jsx';
import { CATEGORIES_EXAMEN, TYPES_EXAMEN } from '../../core/labels.js';

export function ExamensPage() {
  const { api } = useServices();
  const state = useAsync(() => api.examens(), [api]);

  return (
    <>
      <Breadcrumb items={[{ label: 'Examens' }]} />
      <header className="page-header">
        <h1>Examens complémentaires</h1>
        <p className="lead">
          Valeurs normales de référence, puis interprétation propre à chaque pathologie. Toujours se référer
          aux normes du laboratoire qui a réalisé l’examen.
        </p>
      </header>
      <AsyncView state={state}>
        {(list) =>
          Object.entries(TYPES_EXAMEN)
            .map(([type, label]) => [type, label, list.filter((e) => e.type === type)])
            .filter(([, , items]) => items.length)
            .map(([type, label, items]) => (
              <section key={type} className="section">
                <h2 className="section-title">{label}</h2>
                <ul className="list-links">
                  {items.map((e) => (
                    <li key={e.id}>
                      <Link to={`/examens/${e.slug}`}>
                        <span>
                          {e.nom}
                          {e.description && <span className="row-sub">{e.description}</span>}
                        </span>
                        {e.nb_pathologies > 0 && <span className="count">{e.nb_pathologies}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))
        }
      </AsyncView>
    </>
  );
}

export function ExamenPage() {
  const { slug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.examen(slug), [api, slug]);

  return (
    <AsyncView state={state}>
      {(e) => (
        <article>
          <Breadcrumb items={[{ label: 'Examens', to: '/examens' }, { label: e.nom }]} />
          <header className="page-header">
            <h1>{e.nom}</h1>
            <p className="lead">
              {TYPES_EXAMEN[e.type]}
              {e.description ? `. ${e.description}` : ''}
            </p>
          </header>
          {e.valeurs_normales && (
            <section className="card">
              <h2>Valeurs normales de référence</h2>
              <RichText text={e.valeurs_normales} headingLevel={3} />
            </section>
          )}
          {e.pathologies.length > 0 && (
            <section className="section">
              <h2 className="section-title">Interprétation selon la pathologie</h2>
              <ul className="examen-list">
                {e.pathologies.map((p) => (
                  <li key={`${p.id}-${p.categorie}`} className="examen">
                    <div className="examen-head">
                      <Link to={`/pathologies/${p.slug}?onglet=diagnostic`} className="examen-name">
                        {p.nom}
                      </Link>
                      <span className={`tag cat-${p.categorie}`}>{CATEGORIES_EXAMEN[p.categorie]}</span>
                    </div>
                    {p.interpretation && <p className="examen-interp">{p.interpretation}</p>}
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
