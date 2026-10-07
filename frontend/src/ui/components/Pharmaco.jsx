import { useId, useState } from 'react';
import { RichText } from './RichText.jsx';
import { FICHE_PHARMACO, POPULATIONS, SECURITES } from '../../core/labels.js';
import {
  alertesPoids,
  alertesPosologie,
  calculerDose,
  parsePoids,
  POIDS_MAX,
  POIDS_MIN,
} from '../../core/posologie.js';
import { NumberField } from './NumberField.jsx';

/** Poids typique proposé en exemple selon la population. */
const POIDS_EXEMPLE = { nouveau_ne: 3.2, enfant: 12.5, adulte: 60, grossesse: 65 };

function Alertes({ alertes }) {
  if (!alertes.length) return null;
  return (
    <ul className="alertes-dose">
      {alertes.map((a) => (
        <li key={a.message} className={`alerte-dose alerte-${a.niveau}`} role="alert">
          {a.message}
        </li>
      ))}
    </ul>
  );
}

function PosologieLigne({ posologie: p, poids }) {
  // Pas de calcul affiché pour une posologie contre-indiquée
  const dose = p.securite === 'contre_indique' ? null : calculerDose(p, poids);
  const alertes = poids ? alertesPosologie(p, poids) : [];
  return (
    <li className="posologie">
      <div className="posologie-head">
        {p.indication && <span className="posologie-indication">{p.indication}</span>}
        {p.securite && <span className={`tag securite-${p.securite}`}>{SECURITES[p.securite]}</span>}
      </div>
      <p className="posologie-dose">
        <strong>{p.dose_texte}</strong>
        {p.voie && <span className="muted"> · {p.voie}</span>}
      </p>
      {(p.frequence || p.duree) && (
        <p className="posologie-rythme">{[p.frequence, p.duree].filter(Boolean).join(' · ')}</p>
      )}
      {dose && (
        <p className="posologie-calcul" role="status">
          Pour {String(poids).replace('.', ',')} kg : <strong>{dose.affichage}</strong>
          {dose.plafonnee && <span className="tag tag-warn"> dose maximale</span>}
        </p>
      )}
      <Alertes alertes={alertes} />
      {p.remarque && <p className="muted posologie-remarque">{p.remarque}</p>}
    </li>
  );
}

/**
 * Posologies par population (adulte, enfant, nouveau-né, grossesse) avec calcul
 * automatique selon le poids pour les doses exprimées par kg.
 */
export function Posologies({ posologies }) {
  const populations = Object.keys(POPULATIONS).filter((pop) => posologies.some((p) => p.population === pop));
  const [active, setActive] = useState(populations.includes('enfant') ? 'enfant' : populations[0]);
  const [poids, setPoids] = useState('');
  const inputId = useId();
  if (!posologies.length) return null;
  const courant = populations.includes(active) ? active : populations[0];
  const liste = posologies.filter((p) => p.population === courant);
  const ponderale = liste.some((p) => p.dose_par_kg);
  const poidsValide = parsePoids(poids);

  return (
    <div className="posologies">
      <div className="segmented" role="group" aria-label="Population">
        {populations.map((pop) => (
          <button
            key={pop}
            type="button"
            aria-pressed={courant === pop}
            className="segmented-btn"
            onClick={() => setActive(pop)}
          >
            {POPULATIONS[pop]}
          </button>
        ))}
      </div>
      {ponderale && (
        <div className="posologie-poids">
          <NumberField
            id={inputId}
            name="poids"
            label="Poids du patient"
            unit="kg"
            min={POIDS_MIN}
            max={POIDS_MAX}
            exemple={POIDS_EXEMPLE[courant]}
            value={poids}
            onChange={setPoids}
            hint="Calcul par prise, plafonné à la dose maximale"
          />
        </div>
      )}
      {ponderale && <Alertes alertes={alertesPoids(courant, poidsValide)} />}
      <ul className="posologie-list">
        {liste.map((p) => (
          <PosologieLigne key={p.id ?? `${p.population}-${p.dose_texte}`} posologie={p} poids={poidsValide} />
        ))}
      </ul>
      <p className="muted posologie-avert">
        Aide au calcul : vérifier la notice du produit, le protocole national et la fonction rénale ou
        hépatique.
      </p>
    </div>
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
