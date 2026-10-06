import { Link, useSearchParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView, Empty } from '../components/Status.jsx';
import { SearchBar } from '../components/SearchBar.jsx';
import { CATEGORIES_URGENCE, TYPES_EXAMEN } from '../../core/labels.js';

const GROUPS = [
  {
    key: 'pathologies',
    title: 'Pathologies',
    to: (r) => `/pathologies/${r.slug}`,
    label: (r) => r.nom,
    sub: (r) => `${r.departement}, ${r.specialite}`,
  },
  {
    key: 'urgences',
    title: 'Urgences',
    to: (r) => `/urgences/${r.slug}`,
    label: (r) => r.nom,
    sub: (r) => `Urgence ${CATEGORIES_URGENCE[r.categorie]?.toLowerCase() || ''}`,
  },
  {
    key: 'medicaments',
    title: 'Médicaments',
    to: (r) => `/medicaments/${r.id}`,
    label: (r) => `${r.dci} (${r.nom_commercial})`,
    sub: (r) => [r.forme, r.dosage].filter(Boolean).join(', '),
  },
  {
    key: 'molecules',
    title: 'Molécules',
    to: (r) => `/molecules/${r.slug}`,
    label: (r) => r.dci,
    sub: (r) => r.classe,
  },
  {
    key: 'examens',
    title: 'Examens',
    to: (r) => `/examens/${r.slug}`,
    label: (r) => r.nom,
    sub: (r) => TYPES_EXAMEN[r.type],
  },
  { key: 'symptomes', title: 'Symptômes', to: (r) => `/symptomes/${r.slug}`, label: (r) => r.nom },
  {
    key: 'scores',
    title: 'Calculatrices',
    to: (r) => `/scores/${r.slug}`,
    label: (r) => r.nom,
  },
  { key: 'syndromes', title: 'Syndromes', to: (r) => `/syndromes/${r.slug}`, label: (r) => r.nom },
  {
    key: 'glossaire',
    title: 'Glossaire sémiologique',
    to: (r) => `/glossaire#${r.slug}`,
    label: (r) => r.terme,
    sub: (r) => r.definition,
  },
];

export function RecherchePage() {
  const [params] = useSearchParams();
  const q = (params.get('q') || '').trim();
  const { api } = useServices();
  const state = useAsync(() => (q.length >= 2 ? api.recherche(q) : Promise.resolve(null)), [api, q]);

  return (
    <>
      <header className="page-header">
        <h1>Recherche</h1>
      </header>
      <SearchBar key={q} initial={q} autoFocus={!q} />
      {q.length < 2 ? (
        <Empty>Saisissez au moins 2 caractères.</Empty>
      ) : (
        <AsyncView state={state}>
          {(res) =>
            res.total === 0 ? (
              <Empty>
                Aucun résultat pour « {q} ». Essayez un terme plus court ou le nom de la molécule (DCI).
              </Empty>
            ) : (
              <>
                <p className="muted" role="status">
                  {res.total} résultat{res.total > 1 ? 's' : ''} pour « {q} »
                </p>
                {GROUPS.filter((g) => res.data[g.key]?.length).map((g) => (
                  <section key={g.key} className="section">
                    <h2 className="section-title">{g.title}</h2>
                    <ul className="list-links">
                      {res.data[g.key].map((r) => (
                        <li key={r.id}>
                          <Link to={g.to(r)}>
                            <span>
                              {g.label(r)}
                              {g.sub && g.sub(r) && <span className="row-sub">{g.sub(r)}</span>}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </>
            )
          }
        </AsyncView>
      )}
    </>
  );
}
