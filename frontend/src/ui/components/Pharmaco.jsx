import { Link } from 'react-router-dom';
import { RichText } from './RichText.jsx';
import { FICHE_PHARMACO } from '../../core/labels.js';

/** Produits commerciaux (par opérateur), seuls ou en association. */
export function ProduitList({ produits }) {
  if (!produits.length) return <p className="muted">Aucun produit référencé pour le moment.</p>;
  return (
    <ul className="produit-list">
      {produits.map((p) => (
        <li key={p.id}>
          <Link to={`/medicaments/${p.id}`} className="produit-name">
            {p.nom_commercial}
          </Link>
          <span className="produit-meta">
            {[
              p.operateur && `${p.operateur}${p.operateur_pays ? ` (${p.operateur_pays})` : ''}`,
              p.forme,
              p.dosage,
            ]
              .filter(Boolean)
              .join(' · ')}
          </span>
          <span className="produit-tags">
            {p.association && (
              <span className="tag tag-assoc" title={p.composition}>
                Association : {p.composition}
              </span>
            )}
            {p.disponible_rdc && <span className="tag tag-ok">Circuit national RDC</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Fiche pharmacologique de référence d'une molécule. */
export function FichePharmaco({ molecule, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  const rubriques = FICHE_PHARMACO.filter(([key]) => molecule[key]);
  if (!rubriques.length) return <p className="muted">Fiche pharmacologique à compléter.</p>;
  return (
    <dl className="pharmaco">
      {rubriques.map(([key, label]) => (
        <div key={key} className="pharmaco-row">
          <dt>
            <H className="pharmaco-label">{label}</H>
          </dt>
          <dd>
            <RichText text={molecule[key]} headingLevel={headingLevel + 1} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
