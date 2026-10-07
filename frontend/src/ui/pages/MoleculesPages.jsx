import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { FichePharmaco, Posologies } from '../components/Pharmaco.jsx';
import { ProduitsGalerie } from '../components/Produits.jsx';
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
  const { hash } = useLocation();

  // Lien « Voir les N produits » (/molecules/x#produits) : aller directement à la galerie
  useEffect(() => {
    if (hash === '#produits' && state.data) document.getElementById('produits')?.scrollIntoView?.();
  }, [hash, state.data]);

  return (
    <AsyncView state={state}>
      {(m) => {
        const firmes = new Set(m.produits.map((p) => p.operateur)).size;
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
                {m.produits.length > 0 && (
                  <p className="related">
                    <a href="#produits">
                      {m.produits.length} produit{m.produits.length > 1 ? 's' : ''} de {firmes} firme
                      {firmes > 1 ? 's' : ''}, en photos ↓
                    </a>
                  </p>
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

            {/* Tout en bas : les produits des firmes contenant la molécule, en photos */}
            <section id="produits" className="card section-produits">
              <h2>Produits disponibles chez les firmes</h2>
              <p className="hint">
                Seule ou en association. Touchez le nom d’un produit pour afficher sa fiche pharmacologique.
              </p>
              <ProduitsGalerie produits={m.produits} dci={m.dci} />
            </section>
          </article>
        );
      }}
    </AsyncView>
  );
}
