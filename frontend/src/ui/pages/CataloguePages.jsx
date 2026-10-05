import { Link, useParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView, Empty } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';

export function DepartementPage() {
  const { slug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.departement(slug), [api, slug]);

  return (
    <AsyncView state={state}>
      {(dep) => (
        <>
          <Breadcrumb items={[{ label: dep.nom }]} />
          <header className="page-header">
            <h1>
              <span aria-hidden="true">{dep.icone} </span>
              {dep.nom}
            </h1>
            {dep.description && <p className="lead">{dep.description}</p>}
          </header>
          <ul className="list-links">
            {dep.specialites.map((s) => (
              <li key={s.id}>
                <Link to={`/specialites/${s.slug}`}>
                  <span>{s.nom}</span>
                  <span className="count">
                    {Number(s.nb_pathologies)
                      ? `${s.nb_pathologies} fiche${s.nb_pathologies > 1 ? 's' : ''}`
                      : 'À venir'}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </AsyncView>
  );
}

export function SpecialitePage() {
  const { slug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.specialite(slug), [api, slug]);

  return (
    <AsyncView state={state}>
      {(sp) => (
        <>
          <Breadcrumb
            items={[
              { label: sp.departement.nom, to: `/departements/${sp.departement.slug}` },
              { label: sp.nom },
            ]}
          />
          <header className="page-header">
            <h1>{sp.nom}</h1>
            <p className="lead">{sp.departement.nom}</p>
          </header>
          {sp.pathologies.length ? (
            <ul className="patho-list">
              {sp.pathologies.map((p) => (
                <li key={p.id}>
                  <Link to={`/pathologies/${p.slug}`}>
                    <span className="patho-name">{p.nom}</span>
                    {p.resume && <span className="patho-resume">{p.resume}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <Empty>Les fiches de cette spécialité sont en cours de rédaction.</Empty>
          )}
        </>
      )}
    </AsyncView>
  );
}
