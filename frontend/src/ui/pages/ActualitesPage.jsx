import { Link, useSearchParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView, Empty } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { PROVINCES, TYPES_ACTUALITE } from '../../core/labels.js';
import { noteTraduction } from '../components/BandeauActualites.jsx';
import { dateLocale } from '../../core/dates.js';

const date = (d) => (d ? dateLocale(d).toLocaleDateString('fr-FR', { dateStyle: 'long' }) : '');

/**
 * Archive publique des actualités (GET /api/actualites) : alertes sanitaires, pharmacovigilance,
 * protocoles… publiées par les administrateurs avec leur source, filtrables par type et province.
 */
export function ActualitesPage() {
  const { api } = useServices();
  const [params, setParams] = useSearchParams();
  const type = params.get('type') || '';
  const zone = params.get('zone') || '';
  const page = Math.max(1, Number(params.get('page')) || 1);

  const state = useAsync(() => api.actualites({ type, zone, page }), [api, type, zone, page]);

  const update = (changes) => {
    const next = new URLSearchParams(params);
    for (const [k, v] of Object.entries(changes)) {
      if (v) next.set(k, v);
      else next.delete(k);
    }
    setParams(next, { replace: true });
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'Actualités' }]} />
      <header className="page-header">
        <h1>Actualités</h1>
        <p className="lead">
          Alertes sanitaires, retraits de lots, recommandations et innovations relevés automatiquement sur les
          sites officiels (OMS, Africa CDC, ministère de la Santé, ACOREP, NICE, ESC, PubMed…) ou publiés par
          les administrateurs, chacun avec sa source.
        </p>
      </header>

      <form className="filter-bar" onSubmit={(e) => e.preventDefault()} aria-label="Filtres">
        <div className="field">
          <label htmlFor="a-type">Type</label>
          <select id="a-type" value={type} onChange={(e) => update({ type: e.target.value, page: '' })}>
            <option value="">Tous</option>
            {Object.entries(TYPES_ACTUALITE).map(([k, l]) => (
              <option key={k} value={k}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="a-zone">Province</label>
          <select id="a-zone" value={zone} onChange={(e) => update({ zone: e.target.value, page: '' })}>
            <option value="">Tout le pays</option>
            {PROVINCES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </form>

      <AsyncView state={state}>
        {(r) =>
          r.data.length === 0 ? (
            <Empty>
              {type || zone
                ? 'Aucune actualité pour ces filtres.'
                : 'Aucune actualité publiée pour le moment.'}
            </Empty>
          ) : (
            <>
              <ul className="actu-liste">
                {r.data.map((a) => (
                  <li key={a.id} className={`actu actu-${a.type}`}>
                    <p className="actu-type">
                      {TYPES_ACTUALITE[a.type] || 'Actualité'}
                      {a.zone ? ` · ${a.zone}` : ''} · {date(a.publie_le)}
                      {a.expiree && <span className="tag"> Terminée</span>}
                    </p>
                    <h2>{a.titre}</h2>
                    {a.resume && <p className="actu-resume">{a.resume}</p>}
                    {a.traduction_auto ? <p className="row-sub">{noteTraduction(a)}</p> : null}
                    <p className="row-sub">
                      {a.source_titre && (
                        <>
                          Source :{' '}
                          {a.source_url ? (
                            <a href={a.source_url} target="_blank" rel="noopener noreferrer">
                              {a.source_titre}
                            </a>
                          ) : (
                            a.source_titre
                          )}
                        </>
                      )}
                      {a.pathologie_slug && (
                        <>
                          {' · '}
                          Fiche : <Link to={`/pathologies/${a.pathologie_slug}`}>{a.pathologie_nom}</Link>
                        </>
                      )}
                      {a.molecule_slug && (
                        <>
                          {' · '}
                          Molécule : <Link to={`/molecules/${a.molecule_slug}`}>{a.molecule_dci}</Link>
                        </>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
              {r.total > r.par_page && (
                <nav className="pagination" aria-label="Pages">
                  <button
                    type="button"
                    className="btn btn-ghost"
                    disabled={r.page <= 1}
                    onClick={() => update({ page: r.page > 2 ? String(r.page - 1) : '' })}
                  >
                    Plus récentes
                  </button>
                  <span>
                    Page {r.page} sur {Math.ceil(r.total / r.par_page)}
                  </span>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    disabled={r.page * r.par_page >= r.total}
                    onClick={() => update({ page: String(r.page + 1) })}
                  >
                    Plus anciennes
                  </button>
                </nav>
              )}
            </>
          )
        }
      </AsyncView>
    </>
  );
}
