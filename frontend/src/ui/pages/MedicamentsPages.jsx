import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView, Empty } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { FicheProduit } from '../components/FicheProduit.jsx';
import { LienProduit } from '../components/Produits.jsx';
import { RechercheProduit } from '../components/RechercheProduit.jsx';
import { LIGNES, NATURES_PRODUIT } from '../../core/labels.js';

const FILTER_KEYS = ['q', 'groupe', 'forme', 'enfant', 'operateur', 'classe', 'molecule'];
const fr = (n) => Number(n).toLocaleString('fr-FR');

/**
 * Entrées par domaine : groupes thérapeutiques, formes, produits pour l'enfant et
 * principales firmes, chacun avec son nombre de produits. Un second clic désélectionne.
 */
function Domaines({ filtres, choisir }) {
  const { api } = useServices();
  const state = useAsync(() => api.medicamentDomaines(), [api]);
  const d = state.data;
  if (!d) return null;
  const bascule = (cle, valeur) => choisir(cle, String(filtres[cle]) === String(valeur) ? '' : valeur);
  return (
    <>
      <h2 id="domaines-titre" className="section-title">
        Parcourir par domaine
      </h2>
      <ul className="domaines-grille" aria-labelledby="domaines-titre">
        {d.groupes.map((g) => (
          <li key={g.nom}>
            <button
              type="button"
              className="domaine"
              aria-pressed={filtres.groupe === g.nom}
              onClick={() => bascule('groupe', g.nom)}
            >
              <span className="domaine-nom">{g.nom}</span>
              <span className="domaine-n">{fr(g.n)}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="domaines-ligne">
        <h3 id="formes-titre">Par forme</h3>
        <ul className="chips" aria-labelledby="formes-titre">
          <li>
            <button
              type="button"
              className="chip chip-bouton"
              aria-pressed={filtres.enfant === '1'}
              onClick={() => bascule('enfant', '1')}
            >
              Adaptés à l’enfant <span className="chip-meta">{fr(d.enfant)}</span>
            </button>
          </li>
          {d.formes.map((f) => (
            <li key={f.nom}>
              <button
                type="button"
                className="chip chip-bouton"
                aria-pressed={filtres.forme === f.nom}
                onClick={() => bascule('forme', f.nom)}
              >
                {f.nom} <span className="chip-meta">{fr(f.n)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="domaines-ligne">
        <h3 id="firmes-titre">Firmes</h3>
        <ul className="chips" aria-labelledby="firmes-titre">
          {d.firmes.map((f) => (
            <li key={f.id}>
              <button
                type="button"
                className="chip chip-bouton"
                aria-pressed={filtres.operateur === String(f.id)}
                onClick={() => bascule('operateur', String(f.id))}
              >
                {f.nom} <span className="chip-meta">{fr(f.n)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function MedicamentsPage() {
  const { api } = useServices();
  const [params, setParams] = useSearchParams();
  const filtres = Object.fromEntries(FILTER_KEYS.map((k) => [k, params.get(k) || '']));
  const filtresState = useAsync(() => api.medicamentFiltres(), [api]);
  const listState = useAsync(
    () => api.medicaments(filtres),
    [
      api,
      filtres.q,
      filtres.groupe,
      filtres.forme,
      filtres.enfant,
      filtres.operateur,
      filtres.classe,
      filtres.molecule,
    ],
  );

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const options = filtresState.data;
  const active = FILTER_KEYS.some((k) => filtres[k]);
  // Filtres sans liste déroulante : affichés en pastilles qu'on peut retirer
  const operateurNom = options?.operateurs.find((o) => String(o.id) === filtres.operateur)?.nom;
  const pastilles = [
    filtres.q && ['q', `« ${filtres.q} »`],
    filtres.groupe && ['groupe', filtres.groupe],
    filtres.forme && ['forme', filtres.forme],
    filtres.enfant && ['enfant', 'Adaptés à l’enfant'],
    filtres.operateur && operateurNom && ['operateur', operateurNom],
  ].filter(Boolean);

  return (
    <>
      <Breadcrumb items={[{ label: 'Médicaments' }]} />
      <header className="page-header">
        <h1>Médicaments</h1>
        <p className="lead">
          Les médicaments autorisés en RDC (AMM de l’ACOREP) et ceux présentés en photo par les firmes, par
          domaine, molécule, forme et firme : chaque produit, seul ou en association, ouvre sa fiche
          pharmacologique. <Link to="/molecules">Parcourir par molécule</Link>
        </p>
      </header>

      <RechercheProduit
        key={filtres.q}
        id="f-q"
        valeurInitiale={filtres.q}
        onRechercher={(texte) => setFilter('q', texte)}
        grand
      />

      {/* Ouvert tant qu'aucun filtre n'est choisi ; ensuite replié pour laisser voir les résultats */}
      <details key={active ? 'replie' : 'ouvert'} className="domaines" open={!active}>
        <summary>
          {active ? 'Changer de domaine, de forme ou de firme' : 'Domaines, formes et firmes'}
        </summary>
        <Domaines filtres={filtres} choisir={setFilter} />
      </details>

      {pastilles.length > 0 && (
        <ul className="chips filtres-actifs" aria-label="Filtres actifs">
          {pastilles.map(([cle, libelle]) => (
            <li key={cle}>
              <button
                type="button"
                className="chip chip-bouton"
                onClick={() => setFilter(cle, '')}
                aria-label={`Retirer le filtre ${libelle}`}
              >
                {libelle} <span aria-hidden="true">×</span>
              </button>
            </li>
          ))}
        </ul>
      )}

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
        {({ data: list, total, limite }) => {
          if (!list.length) return <Empty>Aucun produit ne correspond à ces filtres.</Empty>;
          const groups = new Map();
          for (const m of list) {
            // Groupe thérapeutique de la molécule
            const key = m.groupe || 'Molécule non encore reliée';
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key).push(m);
          }
          const sections = [...groups.entries()].map(([classe, items]) => (
            <section key={classe} className="section">
              <h2 className="section-title">{classe}</h2>
              <ul className="med-list">
                {items.map((m) => (
                  <li key={m.id}>
                    <LienProduit id={m.id}>
                      <span className="med-dci">{m.dci}</span>
                      <span className="med-brand">{m.nom_commercial}</span>
                      <span className="med-meta">
                        {[m.forme, m.dosage].filter(Boolean).join(', ')}
                        {m.operateur ? `. ${m.operateur}` : ''}
                      </span>
                      <span className="tag-row med-rdc">
                        {m.disponible_rdc && <span className="tag tag-ok">RDC</span>}
                        {m.amm && <span className="tag tag-amm">AMM</span>}
                        {m.pediatrique && <span className="tag tag-enfant">Enfant</span>}
                      </span>
                    </LienProduit>
                  </li>
                ))}
              </ul>
            </section>
          ));
          return (
            <>
              <p className="muted" role="status">
                {total} produit{total > 1 ? 's' : ''}
                {total > list.length &&
                  ` : les ${limite} premiers sont affichés, affinez avec la recherche ou les filtres`}
              </p>
              {sections}
            </>
          );
        }}
      </AsyncView>
    </>
  );
}

export function MedicamentPage() {
  const { id } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.medicament(id), [api, id]);

  return (
    <AsyncView state={state}>
      {(m) => {
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
                  {/* Produit de catalogue dont les molécules ne sont pas (toutes) dans MedRef : intitulé d'origine */}
                  {m.composition.length === 0 && m.dci}
                  {m.classe
                    ? `, ${m.classe.toLowerCase()}`
                    : m.catalogue_classe
                      ? ` — ${m.catalogue_classe}`
                      : ''}
                </p>
                <p className="tag-row">
                  <span className={`tag ${m.disponible_rdc ? 'tag-ok' : 'tag-warn'}`}>
                    {m.disponible_rdc ? 'Circuit national RDC' : 'Disponibilité à confirmer en RDC'}
                  </span>
                  {m.amm && <span className="tag tag-amm">AMM RDC</span>}
                  {m.nature && m.nature !== 'medicament' && (
                    <span className="tag">{NATURES_PRODUIT[m.nature]}</span>
                  )}
                  {m.association && <span className="tag tag-assoc">Association à dose fixe</span>}
                  {m.pediatrique && <span className="tag tag-enfant">Adapté à l’enfant</span>}
                  {m.forme_categorie && <span className="tag">{m.forme_categorie}</span>}
                </p>
              </div>
            </header>

            <FicheProduit produit={m} />

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
                      <LienProduit id={p.id}>{p.nom_commercial}</LienProduit>
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
