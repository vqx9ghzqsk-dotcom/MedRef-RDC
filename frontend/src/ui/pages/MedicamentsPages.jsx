import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView, Empty } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { RichText } from '../components/RichText.jsx';
import { FichePharmaco } from '../components/Pharmaco.jsx';
import { LIGNES, formatPrixCdf } from '../../core/labels.js';

const FILTER_KEYS = ['operateur', 'classe', 'molecule'];

export function MedicamentsPage() {
  const { api } = useServices();
  const [params, setParams] = useSearchParams();
  const filtres = Object.fromEntries(FILTER_KEYS.map((k) => [k, params.get(k) || '']));
  const filtresState = useAsync(() => api.medicamentFiltres(), [api]);
  const listState = useAsync(
    () => api.medicaments(filtres),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [api, filtres.operateur, filtres.classe, filtres.molecule],
  );

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const options = filtresState.data;
  const active = FILTER_KEYS.some((k) => filtres[k]);

  return (
    <>
      <Breadcrumb items={[{ label: 'Médicaments' }]} />
      <header className="page-header">
        <h1>Médicaments</h1>
        <p className="lead">
          Par molécule (DCI), classe et opérateur : chaque produit, seul ou en association, a sa fiche
          pharmacologique. <Link to="/molecules">Parcourir par molécule</Link>
        </p>
      </header>

      <form className="filter-bar" onSubmit={(e) => e.preventDefault()} aria-label="Filtres">
        <div className="field">
          <label htmlFor="f-molecule">Molécule (DCI)</label>
          <select
            id="f-molecule"
            value={filtres.molecule}
            onChange={(e) => setFilter('molecule', e.target.value)}
          >
            <option value="">Toutes</option>
            {options?.molecules.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-classe">Classe</label>
          <select id="f-classe" value={filtres.classe} onChange={(e) => setFilter('classe', e.target.value)}>
            <option value="">Toutes</option>
            {options?.classes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nom}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-operateur">Opérateur</label>
          <select
            id="f-operateur"
            value={filtres.operateur}
            onChange={(e) => setFilter('operateur', e.target.value)}
          >
            <option value="">Tous</option>
            {options?.operateurs.map((o) => (
              <option key={o.id} value={o.id}>
                {o.nom}
              </option>
            ))}
          </select>
        </div>
        {active && (
          <button type="button" className="btn btn-ghost" onClick={() => setParams({}, { replace: true })}>
            Effacer les filtres
          </button>
        )}
      </form>

      <AsyncView state={listState}>
        {(list) => {
          if (!list.length) return <Empty>Aucun produit ne correspond à ces filtres.</Empty>;
          const groups = new Map();
          for (const m of list) {
            const key = m.classe || 'Autres';
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key).push(m);
          }
          return [...groups.entries()].map(([classe, items]) => (
            <section key={classe} className="section">
              <h2 className="section-title">{classe}</h2>
              <ul className="med-list">
                {items.map((m) => (
                  <li key={m.id}>
                    <Link to={`/medicaments/${m.id}`}>
                      <span className="med-dci">{m.dci}</span>
                      <span className="med-brand">{m.nom_commercial}</span>
                      <span className="med-meta">
                        {[m.forme, m.dosage].filter(Boolean).join(', ')}
                        {m.operateur ? `. ${m.operateur}` : ''}
                      </span>
                      {m.disponible_rdc && <span className="tag tag-ok med-rdc">RDC</span>}
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

function Row({ label, children, hint }) {
  if (!children) return null;
  return (
    <div className="dl-row">
      <dt>{label}</dt>
      <dd>
        {typeof children === 'string' ? <RichText text={children} headingLevel={4} /> : children}
        {hint && <span className="row-sub">{hint}</span>}
      </dd>
    </div>
  );
}

/** Champs cliniques : propres au produit, sinon hérités de la molécule (produit mono-molécule). */
const CLINIQUE = [
  ['indication', 'indications', 'Indications'],
  ['posologie', 'posologie', 'Posologie'],
  ['contre_indications', 'contre_indications', 'Contre-indications'],
  ['effets_indesirables', 'effets_indesirables', 'Effets indésirables'],
  ['interactions', 'interactions', 'Interactions'],
];

export function MedicamentPage() {
  const { id } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.medicament(id), [api, id]);

  return (
    <AsyncView state={state}>
      {(m) => {
        const seule = m.composition.length === 1 ? m.composition[0] : null;
        return (
          <article>
            <Breadcrumb items={[{ label: 'Médicaments', to: '/medicaments' }, { label: m.nom_commercial }]} />
            <header className="page-header med-header">
              <div className="med-photo">
                {m.photo_url ? (
                  <img src={m.photo_url} alt={`Conditionnement de ${m.nom_commercial}`} />
                ) : (
                  <span className="med-photo-empty">Photo à venir</span>
                )}
              </div>
              <div>
                <h1>{m.nom_commercial}</h1>
                <p className="lead">
                  {m.composition.map((c, i) => (
                    <span key={c.id}>
                      {i > 0 && ' + '}
                      <Link to={`/molecules/${c.slug}`}>{c.dci}</Link>
                    </span>
                  ))}
                  {m.classe ? `, ${m.classe.toLowerCase()}` : ''}
                </p>
                <p className="tag-row">
                  <span className={`tag ${m.disponible_rdc ? 'tag-ok' : 'tag-warn'}`}>
                    {m.disponible_rdc ? 'Circuit national RDC' : 'Disponibilité à confirmer en RDC'}
                  </span>
                  {m.association && <span className="tag tag-assoc">Association à dose fixe</span>}
                </p>
              </div>
            </header>

            <section className="section">
              <h2 className="section-title">Identification du produit</h2>
              <dl className="dl">
                <Row label="Opérateur">
                  {m.operateur && (
                    <>
                      {m.operateur}
                      {m.operateur_pays ? ` (${m.operateur_pays})` : ''}
                      {m.operateur_site && (
                        <>
                          {' — '}
                          <a href={m.operateur_site} target="_blank" rel="noreferrer">
                            site officiel
                          </a>
                        </>
                      )}
                    </>
                  )}
                </Row>
                <Row label="Composition">
                  {m.composition.length > 0 && (
                    <ul className="compo-list">
                      {m.composition.map((c) => (
                        <li key={c.id}>
                          <Link to={`/molecules/${c.slug}`}>{c.dci}</Link>
                          {c.dosage && <span className="muted"> {c.dosage}</span>}
                        </li>
                      ))}
                    </ul>
                  )}
                </Row>
                <Row label="Forme">{m.forme}</Row>
                <Row label="Dosage">{m.dosage}</Row>
                <Row label="Présentation">{m.presentation}</Row>
                <Row label="Conservation">{m.conservation}</Row>
                <Row label="Prix indicatif">{formatPrixCdf(m.prix_indicatif_cdf)}</Row>
              </dl>
            </section>

            <section className="section">
              <h2 className="section-title">Utilisation de ce produit</h2>
              <dl className="dl">
                {CLINIQUE.map(([champ, champMolecule, label]) => {
                  const propre = m[champ];
                  const herite = !propre && seule ? seule[champMolecule] : null;
                  return (
                    <Row key={champ} label={label} hint={herite ? 'D’après la fiche de la molécule' : null}>
                      {propre || herite}
                    </Row>
                  );
                })}
                <Row label="Sources">{m.sources_text}</Row>
              </dl>
              {m.association && (
                <p className="muted">
                  Pour les rubriques non renseignées ci-dessus, se reporter à la fiche de chaque molécule.
                </p>
              )}
            </section>

            <section className="section">
              <h2 className="section-title">
                Fiche pharmacologique {m.association ? 'des molécules' : 'de la molécule'}
              </h2>
              {m.composition.map((c) => (
                <article key={c.id} className="card">
                  <h3>
                    <Link to={`/molecules/${c.slug}`}>{c.dci}</Link>
                    {c.dosage && <span className="muted"> — {c.dosage}</span>}
                  </h3>
                  <FichePharmaco molecule={c} headingLevel={4} />
                </article>
              ))}
            </section>

            {m.pathologies.length > 0 && (
              <section className="related">
                <h2>Utilisé dans</h2>
                <ul className="side-list">
                  {m.pathologies.map((p) => (
                    <li key={p.id}>
                      <Link to={`/pathologies/${p.slug}`}>{p.nom}</Link>
                      <span className={`tag ligne-${p.ligne}`}>{LIGNES[p.ligne]}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {m.autres_produits.length > 0 && (
              <section className="related">
                <h2>Même composition chez d’autres opérateurs</h2>
                <ul className="side-list">
                  {m.autres_produits.map((p) => (
                    <li key={p.id}>
                      <Link to={`/medicaments/${p.id}`}>{p.nom_commercial}</Link>
                      {p.operateur && <span className="muted"> {p.operateur}</span>}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>
        );
      }}
    </AsyncView>
  );
}
