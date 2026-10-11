import { useEffect, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { PhotoProduit, useFicheProduit } from './Produits.jsx';

const DELAI = 200;

/**
 * Recherche instantanée de produits et de molécules (dès 2 lettres) : marque, DCI ou
 * firme. Un produit ouvre sa fiche en panneau, une molécule sa page. Entrée sans choix
 * lance la recherche complète (`onRechercher`, sinon la page Médicaments filtrée).
 * Clavier : flèches pour parcourir, Entrée pour choisir, Échap pour fermer.
 */
export function RechercheProduit({
  id: idFourni,
  valeurInitiale = '',
  onRechercher,
  label = 'Chercher un produit ou une molécule',
  grand = false,
}) {
  const { api } = useServices();
  const ouvrir = useFicheProduit();
  const navigate = useNavigate();
  const idAuto = useId();
  const id = idFourni || `recherche-produit-${idAuto}`;
  const listeId = `${id}-liste`;
  const [q, setQ] = useState(valeurInitiale);
  const [resultats, setResultats] = useState(null);
  const [chargement, setChargement] = useState(false);
  const [ouvert, setOuvert] = useState(false);
  const [actif, setActif] = useState(-1);

  useEffect(() => {
    const texte = q.trim();
    if (texte.length < 2) {
      setResultats(null);
      return undefined;
    }
    let annule = false;
    setChargement(true);
    const minuteur = setTimeout(() => {
      api
        .suggestionsProduits(texte)
        .then((r) => !annule && setResultats(r))
        .catch(() => !annule && setResultats({ produits: [], molecules: [] }))
        .finally(() => !annule && setChargement(false));
    }, DELAI);
    return () => {
      annule = true;
      clearTimeout(minuteur);
    };
  }, [api, q]);

  const options = resultats
    ? [
        ...resultats.produits.map((p) => ({ type: 'produit', cle: `p${p.id}`, ...p })),
        ...resultats.molecules.map((m) => ({ type: 'molecule', cle: `m${m.id}`, ...m })),
      ]
    : [];
  const visible = ouvert && q.trim().length >= 2 && resultats !== null;

  const fermer = () => {
    setOuvert(false);
    setActif(-1);
  };
  const choisir = (o) => {
    fermer();
    if (o.type === 'produit') ouvrir(o.id);
    else navigate(`/molecules/${o.slug}`);
  };
  const toutVoir = () => {
    const texte = q.trim();
    fermer();
    if (onRechercher) onRechercher(texte);
    else navigate(texte ? `/medicaments?q=${encodeURIComponent(texte)}` : '/medicaments');
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown' && options.length) {
      e.preventDefault();
      setOuvert(true);
      setActif((i) => (i + 1) % options.length);
    } else if (e.key === 'ArrowUp' && options.length) {
      e.preventDefault();
      setOuvert(true);
      setActif((i) => (i <= 0 ? options.length - 1 : i - 1));
    } else if (e.key === 'Escape') {
      fermer();
    } else if (e.key === 'Enter' && visible && actif >= 0 && options[actif]) {
      e.preventDefault();
      choisir(options[actif]);
    }
  };

  return (
    <form
      role="search"
      className={`recherche-produit${grand ? ' recherche-produit-grande' : ''}`}
      onSubmit={(e) => {
        e.preventDefault();
        toutVoir();
      }}
    >
      <label htmlFor={id} className="recherche-produit-label">
        {label}
      </label>
      <div className="recherche-produit-champ">
        <input
          id={id}
          type="search"
          role="combobox"
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={visible}
          aria-controls={listeId}
          aria-activedescendant={visible && actif >= 0 ? `${listeId}-${actif}` : undefined}
          placeholder="ex. Coartem, amoxicilline, Shalina"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOuvert(true);
            setActif(-1);
          }}
          onFocus={() => setOuvert(true)}
          onBlur={fermer}
          onKeyDown={onKeyDown}
        />
        <button type="submit" className="btn btn-primary">
          Rechercher
        </button>
        {visible && (
          <div className="suggestions">
            {options.length > 0 ? (
              <ul id={listeId} role="listbox" aria-label="Suggestions">
                {options.map((o, i) => (
                  <li
                    key={o.cle}
                    id={`${listeId}-${i}`}
                    role="option"
                    aria-selected={i === actif}
                    className={`suggestion${i === actif ? ' suggestion-active' : ''}`}
                    // Avant le blur du champ, pour que le clic soit pris en compte
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => choisir(o)}
                    onMouseEnter={() => setActif(i)}
                  >
                    {o.type === 'produit' ? (
                      <>
                        <PhotoProduit produit={o} />
                        <span className="suggestion-texte">
                          <span className="suggestion-nom">{o.nom_commercial}</span>
                          <span className="suggestion-meta">
                            {[o.dci, o.forme_categorie, o.operateur].filter(Boolean).join(' · ')}
                          </span>
                        </span>
                        {o.amm && <span className="tag tag-amm">AMM</span>}
                      </>
                    ) : (
                      <>
                        <span className="suggestion-pastille" aria-hidden="true">
                          DCI
                        </span>
                        <span className="suggestion-texte">
                          <span className="suggestion-nom">{o.dci}</span>
                          <span className="suggestion-meta">
                            Molécule
                            {o.groupe_therapeutique ? ` · ${o.groupe_therapeutique}` : ''} · {o.nb_produits}{' '}
                            produit{o.nb_produits > 1 ? 's' : ''}
                          </span>
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="suggestion-vide" role="status">
                {chargement ? 'Recherche…' : `Aucun produit ni molécule pour « ${q.trim()} ».`}
              </p>
            )}
            <button
              type="button"
              className="suggestion-tout"
              onMouseDown={(e) => e.preventDefault()}
              onClick={toutVoir}
            >
              Voir tous les produits pour « {q.trim()} »
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
