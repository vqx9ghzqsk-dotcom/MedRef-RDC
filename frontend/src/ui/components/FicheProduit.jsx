import { Link } from 'react-router-dom';
import { RichText } from './RichText.jsx';
import { Posologies } from './Pharmaco.jsx';
import { FICHE_PHARMACO, formatPrixCdf } from '../../core/labels.js';

/** Rubrique de la fiche molécule → champ propre au produit (catalogue ou /admin). */
const CHAMP_PRODUIT = {
  mecanisme: 'mecanisme',
  indications: 'indication',
  posologie: 'posologie',
  contre_indications: 'contre_indications',
  effets_indesirables: 'effets_indesirables',
  interactions: 'interactions',
};

const comparable = (t) => String(t).replace(/\s+/g, ' ').trim().toLowerCase();

/**
 * Rubriques de la fiche fusionnée : pour chaque rubrique pharmacologique, le texte
 * propre au produit puis celui de chaque molécule, sans répéter un texte identique.
 * → [{ key, label, textes: [{ source, texte }], posologies: [{ molecule, posologies }] }]
 */
export function fusionnerFiche(produit) {
  const molecules = produit.composition || [];
  return FICHE_PHARMACO.map(([key, label]) => {
    const textes = [];
    const vus = new Set();
    const ajouter = (source, texte) => {
      if (!texte || vus.has(comparable(texte))) return;
      vus.add(comparable(texte));
      textes.push({ source, texte });
    };
    ajouter(produit.operateur ? `Catalogue ${produit.operateur}` : 'Produit', produit[CHAMP_PRODUIT[key]]);
    for (const c of molecules) {
      ajouter(c.fiche_a_valider ? `Fiche ${c.dci} — à valider` : `Fiche MedRef — ${c.dci}`, c[key]);
      for (const fe of c.fiches_externes || []) {
        ajouter(`Fiche ${fe.source} — ${fe.nom}${fe.a_valider ? ', à valider' : ''}`, fe[key]);
      }
    }
    const posologies =
      key === 'posologie'
        ? molecules
            .filter((c) => c.posologies?.length)
            .map((c) => ({ molecule: c, posologies: c.posologies }))
        : [];
    return { key, label, textes, posologies };
  }).filter((r) => r.textes.length || r.posologies.length);
}

/** Autorisations de mise sur le marché enregistrées (une ligne par dosage ou conditionnement). */
function Autorisations({ autorisations, titre: T }) {
  if (!autorisations?.length) return null;
  return (
    <div className="amm">
      <T className="pharmaco-label">
        Autorisation{autorisations.length > 1 ? 's' : ''} de mise sur le marché en RDC
      </T>
      <div className="table-scroll">
        <table className="table-amm">
          <thead>
            <tr>
              <th scope="col">Marque</th>
              <th scope="col">Dosage</th>
              <th scope="col">Forme</th>
              <th scope="col">Conditionnement</th>
              <th scope="col">Provenance</th>
              <th scope="col">N° AMM</th>
            </tr>
          </thead>
          <tbody>
            {autorisations.map((a) => (
              <tr key={a.id}>
                <td>{a.marque}</td>
                <td>{a.dosage}</td>
                <td>{a.forme}</td>
                <td>{a.conditionnement}</td>
                <td>{a.provenance}</td>
                <td>{a.numero}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="hint">
        Source : répertoire des AMM de l’{autorisations[0].source} (enregistrements 2021-2024, extraction du 7
        octobre 2026).
      </p>
    </div>
  );
}

function Ligne({ label, children }) {
  if (!children) return null;
  return (
    <div className="dl-row">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

/**
 * Fiche unique d'un produit : identification, puis pharmacologie où les données du
 * produit et celles de la (des) molécule(s) sont fusionnées rubrique par rubrique.
 * Chaque texte indique sa provenance (catalogue de la firme ou fiche MedRef de la molécule).
 */
export function FicheProduit({ produit: m, headingLevel = 2, onNavigate }) {
  const H = `h${headingLevel}`;
  const H2 = `h${headingLevel + 1}`;
  const rubriques = fusionnerFiche(m);
  const plusieurs = m.composition.length > 1;

  return (
    <div className="fiche-produit">
      <section className="section">
        <H className="section-title">Identification</H>
        <dl className="dl">
          <Ligne label="Opérateur">
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
          </Ligne>
          <Ligne label="Composition">
            {m.composition.length > 0 && (
              <ul className="compo-list">
                {m.composition.map((c) => (
                  <li key={c.id}>
                    <Link to={`/molecules/${c.slug}`} onClick={onNavigate}>
                      {c.dci}
                    </Link>
                    {c.dosage && <span className="muted"> {c.dosage}</span>}
                    {c.classe && <span className="muted"> · {c.classe}</span>}
                  </li>
                ))}
              </ul>
            )}
          </Ligne>
          <Ligne label="DCI (catalogue)">{m.catalogue_ref || !m.composition.length ? m.dci : null}</Ligne>
          <Ligne label="Composition détaillée">{m.composition_texte}</Ligne>
          <Ligne label="Forme">{m.forme}</Ligne>
          <Ligne label="Dosage">{m.dosage}</Ligne>
          <Ligne label="Présentation">{m.presentation}</Ligne>
          <Ligne label="Conservation">{m.conservation}</Ligne>
          <Ligne label="Prix indicatif">{formatPrixCdf(m.prix_indicatif_cdf)}</Ligne>
        </dl>
        <Autorisations autorisations={m.autorisations} titre={H2} />
      </section>

      <section className="section">
        <H className="section-title">Pharmacologie</H>
        {rubriques.length === 0 ? (
          <p className="muted">
            {m.composition.length
              ? 'Fiche pharmacologique à compléter.'
              : 'Molécule pas encore reliée à une fiche MedRef : fiche pharmacologique à compléter.'}
          </p>
        ) : (
          <dl className="pharmaco fiche-fusionnee">
            {rubriques.map((r) => (
              <div key={r.key} className="pharmaco-row">
                <dt>
                  <H2 className="pharmaco-label">{r.label}</H2>
                </dt>
                <dd>
                  {r.textes.map((t) => (
                    <div key={t.source} className="fiche-texte">
                      <span className="fiche-source">{t.source}</span>
                      <RichText text={t.texte} headingLevel={headingLevel + 2} glossaire />
                    </div>
                  ))}
                  {r.posologies.map(({ molecule, posologies }) => (
                    <section
                      key={molecule.id}
                      className="pharmaco-posologies"
                      aria-label={`Posologies : ${molecule.dci}`}
                    >
                      <span className="fiche-source">
                        Posologies par population{plusieurs ? ` — ${molecule.dci}` : ''}
                      </span>
                      <Posologies posologies={posologies} />
                    </section>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        )}
        {m.association && m.composition.length > 0 && m.composition.length < (m.nb_composants || 0) && (
          <p className="muted">
            Certaines molécules de ce produit n’ont pas encore de fiche MedRef : se reporter à la notice.
          </p>
        )}
        {m.sources_text && <p className="hint fiche-sources">Sources : {m.sources_text}</p>}
      </section>
    </div>
  );
}
