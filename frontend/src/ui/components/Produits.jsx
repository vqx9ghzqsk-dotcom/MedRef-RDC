import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView } from './Status.jsx';
import { RichText } from './RichText.jsx';

const mini = (url) => (url && url.startsWith('/medias/') ? url.replace(/\.webp$/, '-mini.webp') : url);

/** Photo d'un produit : vignette chargée à la demande, emplacement réservé si absente. */
export function PhotoProduit({ produit, grande = false }) {
  const [erreur, setErreur] = useState(false);
  if (!produit.photo_url || erreur) {
    return (
      <span className="produit-photo produit-photo-vide" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="28" height="28">
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
    );
  }
  return (
    <img
      className={`produit-photo${grande ? ' produit-photo-grande' : ''}`}
      src={grande ? produit.photo_url : mini(produit.photo_url)}
      alt={`Conditionnement de ${produit.nom_commercial}`}
      loading="lazy"
      decoding="async"
      onError={() => setErreur(true)}
    />
  );
}

/** Rubrique de la fiche produit (texte du catalogue ou saisi dans /admin). */
function Rubrique({ titre, texte }) {
  if (!texte) return null;
  return (
    <div className="panneau-rubrique">
      <h3>{titre}</h3>
      <RichText text={texte} headingLevel={4} vide={null} glossaire />
    </div>
  );
}

/**
 * Fiche pharmacologique d'un produit, en panneau latéral (plein écran sur téléphone).
 * Échap, le bouton Fermer ou un clic sur le fond referment le panneau.
 */
export function ProduitPanneau({ id, onClose, onOuvrir }) {
  const { api } = useServices();
  const state = useAsync(() => api.medicament(id), [api, id]);
  const fermer = useRef(null);
  const titreId = useId();

  useEffect(() => {
    fermer.current?.focus();
    const avant = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const echap = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', echap);
    return () => {
      document.body.style.overflow = avant;
      document.removeEventListener('keydown', echap);
    };
  }, [onClose]);

  return (
    <div className="panneau-fond" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <aside className="panneau" role="dialog" aria-modal="true" aria-labelledby={titreId}>
        <div className="panneau-barre">
          <span className="muted">Fiche produit</span>
          <button ref={fermer} type="button" className="btn btn-ghost btn-small" onClick={onClose}>
            Fermer
          </button>
        </div>
        <AsyncView state={state}>
          {(p) => (
            <div className="panneau-corps">
              <PhotoProduit produit={p} grande />
              <h2 id={titreId} className="panneau-titre">
                {p.nom_commercial}
              </h2>
              <p className="panneau-firme">
                {[p.operateur, p.operateur_pays].filter(Boolean).join(' · ')}
                {p.catalogue_classe && <span className="muted"> — {p.catalogue_classe}</span>}
              </p>
              <div className="tag-row">
                {p.forme_categorie && <span className="tag">{p.forme_categorie}</span>}
                {p.association && <span className="tag tag-assoc">Association</span>}
                {p.pediatrique && <span className="tag tag-enfant">Adapté à l’enfant</span>}
                {p.disponible_rdc && <span className="tag tag-ok">Circuit national RDC</span>}
              </div>

              <dl className="panneau-identite">
                {p.presentation && (
                  <div>
                    <dt>Présentation</dt>
                    <dd>{p.presentation}</dd>
                  </div>
                )}
                <div>
                  <dt>DCI</dt>
                  <dd>{p.dci}</dd>
                </div>
                {p.composition_texte && (
                  <div>
                    <dt>Composition</dt>
                    <dd>{p.composition_texte}</dd>
                  </div>
                )}
                {p.composition.length > 0 && (
                  <div>
                    <dt>Fiches molécules</dt>
                    <dd>
                      <ul className="chips">
                        {p.composition.map((c) => (
                          <li key={c.id}>
                            <Link to={`/molecules/${c.slug}`} className="chip" onClick={onClose}>
                              {c.dci}
                              {c.dosage && <span className="chip-meta">{c.dosage}</span>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
              </dl>

              <Rubrique titre="Mécanisme d’action" texte={p.mecanisme} />
              <Rubrique titre="Indications" texte={p.indication} />
              <Rubrique titre="Repère posologique" texte={p.posologie} />
              <Rubrique titre="Contre-indications" texte={p.contre_indications} />
              <Rubrique titre="Effets indésirables" texte={p.effets_indesirables} />
              <Rubrique titre="Interactions" texte={p.interactions} />
              <Rubrique titre="Conservation" texte={p.conservation} />
              {p.sources_text && <p className="hint panneau-source">{p.sources_text}</p>}

              {p.autres_produits.length > 0 && (
                <div className="panneau-rubrique">
                  <h3>Même composition, autres produits</h3>
                  <ul className="vignettes">
                    {p.autres_produits.slice(0, 12).map((a) => (
                      <li key={a.id}>
                        <button type="button" className="vignette" onClick={() => onOuvrir(a.id)}>
                          <PhotoProduit produit={a} />
                          <span className="vignette-nom">{a.nom_commercial}</span>
                          <span className="vignette-firme">{a.operateur}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link to={`/medicaments/${p.id}`} className="btn btn-secondary" onClick={onClose}>
                Ouvrir la fiche complète
              </Link>
            </div>
          )}
        </AsyncView>
      </aside>
    </div>
  );
}

/** Ouvre la fiche d'un produit en panneau ; renvoie [ouvrir, panneau à rendre]. */
export function usePanneauProduit() {
  const [id, setId] = useState(null);
  const panneau = id ? (
    <ProduitPanneau key={id} id={id} onClose={() => setId(null)} onOuvrir={setId} />
  ) : null;
  return [setId, panneau];
}

function CarteProduit({ produit: p, onOuvrir }) {
  return (
    <li className="carte-produit">
      <button
        type="button"
        className="carte-photo"
        onClick={() => onOuvrir(p.id)}
        tabIndex={-1}
        aria-hidden="true"
      >
        <PhotoProduit produit={p} />
      </button>
      <div className="carte-texte">
        <button type="button" className="carte-titre" onClick={() => onOuvrir(p.id)}>
          {p.nom_commercial}
        </button>
        <span className="carte-firme">{p.operateur}</span>
        <span className="carte-meta">
          {[p.forme_categorie || p.forme, p.dosage].filter(Boolean).join(' · ')}
        </span>
        {p.association && <span className="carte-compo">{p.composition}</span>}
        <span className="tag-row">
          {p.pediatrique && <span className="tag tag-enfant">Enfant</span>}
          {p.disponible_rdc && <span className="tag tag-ok">RDC</span>}
        </span>
      </div>
    </li>
  );
}

const TOUS = '';

/**
 * Galerie des produits contenant une molécule, seule puis en association, avec
 * filtres (forme, firme, adapté à l'enfant). Un clic sur le titre ouvre la fiche.
 */
export function ProduitsGalerie({ produits, dci }) {
  const [forme, setForme] = useState(TOUS);
  const [firme, setFirme] = useState(TOUS);
  const [enfant, setEnfant] = useState(false);
  const [ouvrir, panneau] = usePanneauProduit();
  const idForme = useId();
  const idFirme = useId();

  const formes = useMemo(
    () =>
      [...new Set(produits.map((p) => p.forme_categorie).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b, 'fr'),
      ),
    [produits],
  );
  const firmes = useMemo(
    () =>
      [...new Set(produits.map((p) => p.operateur).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'fr')),
    [produits],
  );
  const filtres = produits.filter(
    (p) =>
      (!forme || p.forme_categorie === forme) &&
      (!firme || p.operateur === firme) &&
      (!enfant || p.pediatrique),
  );
  const seuls = filtres.filter((p) => !p.association);
  const assoc = filtres.filter((p) => p.association);
  const actifs = forme || firme || enfant;

  if (!produits.length) {
    return <p className="muted">Aucun produit des catalogues ne contient encore {dci}.</p>;
  }
  return (
    <div className="galerie">
      <form
        className="filter-bar galerie-filtres"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Filtrer les produits"
      >
        {formes.length > 1 && (
          <div className="field">
            <label htmlFor={idForme}>Forme</label>
            <select id={idForme} value={forme} onChange={(e) => setForme(e.target.value)}>
              <option value={TOUS}>Toutes</option>
              {formes.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>
        )}
        {firmes.length > 1 && (
          <div className="field">
            <label htmlFor={idFirme}>Firme</label>
            <select id={idFirme} value={firme} onChange={(e) => setFirme(e.target.value)}>
              <option value={TOUS}>Toutes</option>
              {firmes.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>
        )}
        <label className="field-check galerie-enfant">
          <input type="checkbox" checked={enfant} onChange={(e) => setEnfant(e.target.checked)} /> Adaptés à
          l’enfant
        </label>
        {actifs && (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => {
              setForme(TOUS);
              setFirme(TOUS);
              setEnfant(false);
            }}
          >
            Tout afficher
          </button>
        )}
      </form>
      <p className="muted" role="status">
        {filtres.length} produit{filtres.length > 1 ? 's' : ''} de{' '}
        {new Set(filtres.map((p) => p.operateur)).size} firme
        {new Set(filtres.map((p) => p.operateur)).size > 1 ? 's' : ''}
      </p>
      {seuls.length > 0 && (
        <section aria-label={`${dci} seule`}>
          <h3 className="galerie-groupe">
            {dci} seule <span className="count">({seuls.length})</span>
          </h3>
          <ul className="cartes-produits">
            {seuls.map((p) => (
              <CarteProduit key={p.id} produit={p} onOuvrir={ouvrir} />
            ))}
          </ul>
        </section>
      )}
      {assoc.length > 0 && (
        <section aria-label={`${dci} en association`}>
          <h3 className="galerie-groupe">
            En association <span className="count">({assoc.length})</span>
          </h3>
          <ul className="cartes-produits">
            {assoc.map((p) => (
              <CarteProduit key={p.id} produit={p} onOuvrir={ouvrir} />
            ))}
          </ul>
        </section>
      )}
      {!filtres.length && <p className="muted">Aucun produit ne correspond à ces filtres.</p>}
      {panneau}
    </div>
  );
}

/** Bande de vignettes (onglet Thérapeutique des pathologies) ; clic = fiche produit. */
export function VignettesProduits({ produits, slug, max = 8 }) {
  const [ouvrir, panneau] = usePanneauProduit();
  if (!produits.length) return null;
  // Produits avec photo d'abord, la molécule seule avant les associations
  const tries = [...produits].sort(
    (a, b) => Boolean(b.photo_url) - Boolean(a.photo_url) || Number(a.association) - Number(b.association),
  );
  return (
    <div className="vignettes-bloc">
      <ul className="vignettes">
        {tries.slice(0, max).map((p) => (
          <li key={p.id}>
            <button type="button" className="vignette" onClick={() => ouvrir(p.id)}>
              <PhotoProduit produit={p} />
              <span className="vignette-nom">{p.nom_commercial}</span>
              <span className="vignette-firme">
                {p.operateur}
                {p.association ? ' · association' : ''}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {produits.length > max && (
        <Link to={`/molecules/${slug}#produits`} className="btn btn-link">
          Voir les {produits.length} produits
        </Link>
      )}
      {panneau}
    </div>
  );
}
