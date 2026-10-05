import { useSearchParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView, Empty } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { NIVEAUX_SOURCE } from '../../core/labels.js';

export function SourcesPage() {
  const { api } = useServices();
  const [params, setParams] = useSearchParams();
  const scope = params.get('scope') || '';
  const departement = params.get('departement') || '';
  const pathologie = params.get('pathologie') || '';
  const niveau = params.get('niveau') || '';

  const deps = useAsync(() => api.departements(), [api]);
  const state = useAsync(() => {
    const filtres = { niveau };
    if (scope === 'global') filtres.scope = 'global';
    if (scope === 'departement' && departement) Object.assign(filtres, { scope, departement });
    if (scope === 'pathologie' && pathologie) Object.assign(filtres, { scope, pathologie });
    return api.sources(filtres);
  }, [api, scope, departement, pathologie, niveau]);

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
      <Breadcrumb items={[{ label: 'Sources' }]} />
      <header className="page-header">
        <h1>Sources</h1>
        <p className="lead">
          Chaque fiche s’appuie sur des sources hiérarchisées : les recommandations OMS et les programmes
          nationaux de la RDC priment sur les autres niveaux.
        </p>
      </header>

      <form className="filter-bar" onSubmit={(e) => e.preventDefault()} aria-label="Filtres">
        <div className="field">
          <label htmlFor="s-scope">Portée</label>
          <select
            id="s-scope"
            value={scope === 'departement' ? `dep:${departement}` : scope}
            onChange={(e) => {
              const v = e.target.value;
              if (v.startsWith('dep:'))
                update({ scope: 'departement', departement: v.slice(4), pathologie: '' });
              else update({ scope: v, departement: '', pathologie: '' });
            }}
          >
            <option value="">Toutes les sources</option>
            <option value="global">Sources transversales</option>
            {deps.data?.map((d) => (
              <option key={d.slug} value={`dep:${d.slug}`}>
                {d.nom}
              </option>
            ))}
            {scope === 'pathologie' && <option value="pathologie">Fiche : {pathologie}</option>}
          </select>
        </div>
        <div className="field">
          <label htmlFor="s-niveau">Niveau</label>
          <select id="s-niveau" value={niveau} onChange={(e) => update({ niveau: e.target.value })}>
            <option value="">Tous</option>
            {Object.entries(NIVEAUX_SOURCE).map(([n, label]) => (
              <option key={n} value={n}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </form>

      <AsyncView state={state}>
        {(list) => {
          if (!list.length) return <Empty>Aucune source pour ces critères.</Empty>;
          return [1, 2, 3, 4]
            .map((n) => [n, list.filter((s) => s.niveau === n)])
            .filter(([, items]) => items.length)
            .map(([n, items]) => (
              <section key={n} className="section">
                <h2 className="section-title">
                  <span className={`niveau niveau-${n}`}>N{n}</span>{' '}
                  {NIVEAUX_SOURCE[n].replace(/^Niveau \d : /, '')}
                </h2>
                <ul className="source-list">
                  {items.map((s) => (
                    <li key={s.id}>
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noreferrer">
                          {s.titre}
                        </a>
                      ) : (
                        <span className="source-title">{s.titre}</span>
                      )}
                      <span className="row-sub">
                        {[s.organisation, s.annee, s.domaine || s.departement || 'Transversale']
                          .filter(Boolean)
                          .join(', ')}
                      </span>
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
