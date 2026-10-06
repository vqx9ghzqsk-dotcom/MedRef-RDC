import { Link, useParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { FichePharmaco, Posologies, ProduitList } from '../components/Pharmaco.jsx';
import { LIGNES } from '../../core/labels.js';

export function MoleculesPage() {
  const { api } = useServices();
  const state = useAsync(() => api.molecules(), [api]);

  return (
    <>
      <Breadcrumb items={[{ label: 'Médicaments', to: '/medicaments' }, { label: 'Molécules' }]} />
      <header className="page-header">
        <h1>Molécules (DCI)</h1>
        <p className="lead">
          Fiche pharmacologique de référence de chaque molécule et produits qui la contiennent, seule ou en
          association.
        </p>
      </header>
      <AsyncView state={state}>
        {(list) => {
          const groups = new Map();
          for (const m of list) {
            const key = m.classe || 'Autres';
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key).push(m);
          }
          return [...groups.entries()]
            .sort(([a], [b]) => a.localeCompare(b, 'fr'))
            .map(([classe, items]) => (
              <section key={classe} className="section">
                <h2 className="section-title">{classe}</h2>
                <ul className="list-links">
                  {items.map((m) => (
                    <li key={m.id}>
                      <Link to={`/molecules/${m.slug}`}>
                        <span>{m.dci}</span>
                        <span className="count">
                          {m.nb_produits} produit{m.nb_produits > 1 ? 's' : ''}
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

export function MoleculePage() {
  const { slug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.molecule(slug), [api, slug]);

  return (
    <AsyncView state={state}>
      {(m) => {
        const seuls = m.produits.filter((p) => !p.association);
        const assoc = m.produits.filter((p) => p.association);
        return (
          <article>
            <Breadcrumb
              items={[
                { label: 'Médicaments', to: '/medicaments' },
                { label: 'Molécules', to: '/molecules' },
                { label: m.dci },
              ]}
            />
            <header className="page-header">
              <h1>{m.dci}</h1>
              {m.classe && <p className="lead">{m.classe}</p>}
            </header>

            <div className="fiche-layout">
              <div>
                {m.posologies?.length > 0 && (
                  <section className="card">
                    <h2>Posologies par population</h2>
                    <Posologies posologies={m.posologies} />
                  </section>
                )}
                <section className="card">
                  <h2>Fiche pharmacologique</h2>
                  <FichePharmaco molecule={m} headingLevel={3} />
                </section>
              </div>
              <div className="fiche-side">
                <section className="related" aria-label="Produits">
                  <h2>Produits contenant la molécule seule ({seuls.length})</h2>
                  <ProduitList produits={seuls} />
                </section>
                {assoc.length > 0 && (
                  <section className="related" aria-label="Associations">
                    <h2>En association ({assoc.length})</h2>
                    <ProduitList produits={assoc} />
                  </section>
                )}
                {m.pathologies.length > 0 && (
                  <section className="related" aria-label="Pathologies">
                    <h2>Utilisée dans</h2>
                    <ul className="side-list">
                      {m.pathologies.map((p) => (
                        <li key={p.id}>
                          <Link to={`/pathologies/${p.slug}?onglet=therapeutique`}>{p.nom}</Link>
                          <span className={`tag ligne-${p.ligne}`}>{LIGNES[p.ligne]}</span>
                          {p.contexte && <span className="row-sub">{p.contexte}</span>}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </article>
        );
      }}
    </AsyncView>
  );
}
