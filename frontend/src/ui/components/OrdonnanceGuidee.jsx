import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { NumberField } from './NumberField.jsx';
import { CATEGORIES_EXAMEN, LIGNES, NIVEAUX_SOINS, POPULATIONS } from '../../core/labels.js';
import { nettoyerTexte, normaliserNombre } from '../../core/saisie.js';
import {
  AGE_UNITES,
  ageEnJours,
  alertesLigne,
  alertesOrdonnance,
  alertesPatient,
  calculerDosePatient,
  choisirPosologie,
  dureeEnJours,
  libelleFrequence,
  meilleurePresentation,
  optionsDuree,
  populationPrincipale,
  posologieEnClair,
  posologiesDosees,
  presentationsCompatibles,
  prisesParJour,
  quantiteADelivrer,
  quantitePresentation,
  rechercherPathologies,
  surfaceCorporelle,
} from '../../core/prescription.js';

/**
 * Ordonnance guidée par les fiches (lot C) : patient → diagnostics → bilans → traitements
 * (dose au poids ou à la surface, présentation, fréquence, durée de la fiche) → ordonnance.
 * Le brouillon reste sur l'appareil (localStorage) tant qu'il n'est pas enregistré.
 */

const CLE_BROUILLON = 'medref.ordonnance.brouillon';

const patientVide = () => ({
  code: '',
  age: { valeur: '', unite: 'ans' },
  sexe: '',
  poids: '',
  taille: '',
  grossesse: false,
  trimestre: '',
  allaitement: false,
  insuffisance_renale: false,
  insuffisance_hepatique: false,
  allergies: '',
  traitements_en_cours: '',
});

const brouillonVide = () => ({
  patient: patientVide(),
  niveau: 'hopital_general',
  diagnostics: [],
  bilans: {},
  traitements: [],
  conseils: '',
});

function lireBrouillon() {
  try {
    const brut = globalThis.localStorage?.getItem(CLE_BROUILLON);
    if (!brut) return null;
    const b = JSON.parse(brut);
    return b && typeof b === 'object'
      ? { ...brouillonVide(), ...b, patient: { ...patientVide(), ...b.patient } }
      : null;
  } catch {
    return null;
  }
}

function ecrireBrouillon(b) {
  try {
    if (b) globalThis.localStorage?.setItem(CLE_BROUILLON, JSON.stringify(b));
    else globalThis.localStorage?.removeItem(CLE_BROUILLON);
  } catch {
    /* stockage indisponible : le brouillon n'est simplement pas gardé */
  }
}

let compteur = 0;
const nouvelleCle = () => {
  compteur += 1;
  return `t${Date.now().toString(36)}${compteur}`;
};

function Alertes({ alertes }) {
  if (!alertes.length) return null;
  return (
    <ul className="alertes-dose">
      {alertes.map((a) => (
        <li key={a.message} className={`alerte-dose alerte-${a.niveau}`}>
          {a.message}
        </li>
      ))}
    </ul>
  );
}

// ------------------------------------------------------------------ calcul d'une ligne

/** Calcule tout ce qui découle de la fiche pour une ligne de traitement. */
export function evaluerLigne(t, molecule, patient, surface, diagnosticNom) {
  if (!molecule) return { t, molecule: null };
  const lignes = posologiesDosees(molecule.posologies, patient);
  const posologie =
    (t.posologie !== null && t.posologie !== undefined && lignes[t.posologie]) ||
    choisirPosologie(lignes, [diagnosticNom, t.contexte].filter(Boolean));
  const presentations = presentationsCompatibles(molecule.presentations, posologie);
  const dose = calculerDosePatient(posologie, { poids: patient.poids, surface });
  const jours = ageEnJours(patient.age);
  const parDefaut = dose?.parPrise
    ? meilleurePresentation(presentations, dose.parPrise, dose.unite, {
        jeuneEnfant: jours !== null && jours < 6 * 365.25,
        oralePossible: /oral|bouche|sublingu/i.test(posologie?.voie || ''),
      })
    : 0;
  const presentation =
    t.presentation === 'aucune'
      ? null
      : presentations[t.presentation ?? parDefaut] || presentations[0] || null;
  const quantite =
    dose?.parPrise && presentation ? quantitePresentation(dose.parPrise, dose.unite, presentation) : null;
  const options = optionsDuree(posologie);
  const optionDuree =
    t.duree === 'libre'
      ? null
      : options.find((o) => o.cle === t.duree) || options.find((o) => o.defaut) || options[0] || null;
  const joursTraitement = optionDuree ? dureeEnJours(optionDuree.duree) : normaliserNombre(t.dureeJours);
  const delivrer = quantite
    ? quantiteADelivrer({
        nombreParPrise: quantite.nombre,
        prises: prisesParJour(posologie),
        jours: joursTraitement,
        presentation,
        doseUnique: posologie?.frequence_type === 'dose_unique',
      })
    : null;
  const ligne = {
    molecule,
    posologie,
    presentation,
    dose,
    quantite,
    frequence: t.frequence,
    doseLibre: t.doseLibre,
  };
  return {
    t,
    molecule,
    lignes,
    posologie,
    presentations,
    presentation,
    dose,
    quantite,
    options,
    optionDuree,
    delivrer,
    texte: posologieEnClair(ligne),
    alertes: alertesLigne(ligne, patient),
  };
}

const libelleDureeChoisie = (ev) =>
  ev.optionDuree
    ? ev.optionDuree.libelle
    : [ev.t.dureeLibre, ev.t.justification && `(${ev.t.justification})`].filter(Boolean).join(' ');

// ------------------------------------------------------------------ sous-composants

function SectionPatient({ patient, setPatient, niveau, setNiveau, surface }) {
  const set = (k, v) => setPatient({ ...patient, [k]: v });
  const peutEtreEnceinte = patient.sexe !== 'M';
  return (
    <fieldset className="card ordo-section">
      <legend>1. Patient</legend>
      <div className="form-grid form-grid-3">
        <div className="field">
          <label htmlFor="ordo-code">Initiales ou code</label>
          <input
            id="ordo-code"
            value={patient.code}
            maxLength={60}
            onChange={(e) => set('code', e.target.value)}
            placeholder="ex. M. K. ou dossier 1234"
            autoComplete="off"
          />
          <p className="hint">
            Pas de nom complet : la fiche reste sur l’appareil jusqu’à la synchronisation.
          </p>
        </div>
        <div className="field">
          <label htmlFor="ordo-age">Âge</label>
          <div className="ordo-age">
            <input
              id="ordo-age"
              inputMode="decimal"
              value={patient.age.valeur}
              onChange={(e) => set('age', { ...patient.age, valeur: e.target.value })}
              placeholder="ex. 4"
              autoComplete="off"
            />
            <select
              aria-label="Unité de l’âge"
              value={patient.age.unite}
              onChange={(e) => set('age', { ...patient.age, unite: e.target.value })}
            >
              {Object.entries(AGE_UNITES).map(([k, l]) => (
                <option key={k} value={k}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="ordo-sexe">Sexe</label>
          <select id="ordo-sexe" value={patient.sexe} onChange={(e) => set('sexe', e.target.value)}>
            <option value="">—</option>
            <option value="F">Féminin</option>
            <option value="M">Masculin</option>
          </select>
        </div>
        <NumberField
          label="Poids"
          name="poids"
          unit="kg"
          min={0.3}
          max={300}
          required
          value={patient.poids}
          onChange={(v) => set('poids', v)}
          hint="Obligatoire : les doses sont calculées au poids"
        />
        <NumberField
          label="Taille"
          name="taille"
          unit="cm"
          min={30}
          max={250}
          optional
          value={patient.taille}
          onChange={(v) => set('taille', v)}
          hint={
            surface
              ? `Surface corporelle : ${surface.toLocaleString('fr-FR')} m² (Mosteller)`
              : 'Facultative : surface corporelle (doses en mg/m²)'
          }
        />
        <div className="field">
          <label htmlFor="ordo-niveau">Niveau de soins</label>
          <select id="ordo-niveau" value={niveau} onChange={(e) => setNiveau(e.target.value)}>
            {Object.entries(NIVEAUX_SOINS).map(([k, n]) => (
              <option key={k} value={k}>
                {n.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="ordo-cases">
        {peutEtreEnceinte && (
          <label className="checkbox">
            <input
              type="checkbox"
              checked={patient.grossesse}
              onChange={(e) => set('grossesse', e.target.checked)}
            />{' '}
            Grossesse
          </label>
        )}
        {peutEtreEnceinte && patient.grossesse && (
          <select
            aria-label="Trimestre"
            value={patient.trimestre}
            onChange={(e) => set('trimestre', e.target.value)}
          >
            <option value="">Trimestre…</option>
            <option value="1">1er trimestre</option>
            <option value="2">2e trimestre</option>
            <option value="3">3e trimestre</option>
          </select>
        )}
        {peutEtreEnceinte && (
          <label className="checkbox">
            <input
              type="checkbox"
              checked={patient.allaitement}
              onChange={(e) => set('allaitement', e.target.checked)}
            />{' '}
            Allaitement
          </label>
        )}
        <label className="checkbox">
          <input
            type="checkbox"
            checked={patient.insuffisance_renale}
            onChange={(e) => set('insuffisance_renale', e.target.checked)}
          />{' '}
          Insuffisance rénale
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={patient.insuffisance_hepatique}
            onChange={(e) => set('insuffisance_hepatique', e.target.checked)}
          />{' '}
          Insuffisance hépatique
        </label>
      </div>
      {patient.insuffisance_renale && (
        <p className="hint">
          Clairance de la créatinine : <Link to="/scores">calculateurs</Link> (Cockcroft-Gault, CKD-EPI,
          Schwartz).
        </p>
      )}
      <div className="form-grid form-grid-2">
        <div className="field">
          <label htmlFor="ordo-allergies">Allergies connues</label>
          <input
            id="ordo-allergies"
            value={patient.allergies}
            maxLength={300}
            onChange={(e) => set('allergies', e.target.value)}
            placeholder="ex. pénicilline, sulfamides"
            autoComplete="off"
          />
        </div>
        <div className="field">
          <label htmlFor="ordo-encours">Traitements en cours</label>
          <input
            id="ordo-encours"
            value={patient.traitements_en_cours}
            maxLength={400}
            onChange={(e) => set('traitements_en_cours', e.target.value)}
            placeholder="ex. dolutégravir, metformine"
            autoComplete="off"
          />
        </div>
      </div>
      <Alertes alertes={alertesPatient(patient)} />
      <p className="hint">
        Population retenue pour les doses : {POPULATIONS[populationPrincipale(patient)]}.
      </p>
    </fieldset>
  );
}

function SectionDiagnostics({ diagnostics, fiches, liste, onAjouter, onRetirer, onForme }) {
  const [q, setQ] = useState('');
  const resultats = useMemo(() => rechercherPathologies(liste, q), [liste, q]);
  const dejaPris = new Set(diagnostics.map((d) => d.slug));
  return (
    <fieldset className="card ordo-section">
      <legend>2. Diagnostics</legend>
      <div className="field">
        <label htmlFor="ordo-diag">Rechercher une pathologie</label>
        <input
          id="ordo-diag"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="ex. paludisme grave, pneumonie…"
          autoComplete="off"
        />
        {!liste.length && (
          <p className="hint">
            Liste des pathologies indisponible hors ligne tant qu’elle n’a pas été téléchargée.
          </p>
        )}
      </div>
      {resultats.length > 0 && (
        <ul className="ordo-resultats">
          {resultats.map((p) => (
            <li key={p.slug}>
              <button
                type="button"
                className="btn btn-ghost btn-small"
                disabled={dejaPris.has(p.slug)}
                onClick={() => {
                  onAjouter(p);
                  setQ('');
                }}
              >
                {p.nom}
              </button>
              <span className="muted"> {p.specialite}</span>
            </li>
          ))}
        </ul>
      )}
      {diagnostics.map((d) => {
        const fiche = fiches[d.slug];
        const formes = fiche?.onglets?.definition?.formes || [];
        const statut = fiche?.validation?.statut || d.statut;
        return (
          <div className="ordo-diagnostic" key={d.slug}>
            <div className="ordo-diagnostic-tete">
              <Link to={`/pathologies/${d.slug}`}>
                <strong>{d.nom}</strong>
              </Link>
              <button type="button" className="btn btn-ghost btn-small" onClick={() => onRetirer(d.slug)}>
                Retirer
              </button>
            </div>
            {statut !== 'valide' && (
              <p className="alerte-dose">
                Contenu non encore validé par un médecin : à vérifier avant usage.
              </p>
            )}
            {formes.length > 0 && (
              <div className="field">
                <label htmlFor={`ordo-forme-${d.slug}`}>Forme clinique ou gravité</label>
                <select
                  id={`ordo-forme-${d.slug}`}
                  value={d.forme || ''}
                  onChange={(e) => onForme(d.slug, e.target.value)}
                >
                  <option value="">—</option>
                  {formes.map((f) => (
                    <option key={f.id} value={f.nom}>
                      {f.nom}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {!fiche && <p className="muted">Chargement de la fiche…</p>}
          </div>
        );
      })}
    </fieldset>
  );
}

/** Examens des diagnostics retenus, par catégorie, sans doublon. */
export function bilansProposes(diagnostics, fiches) {
  const vus = new Map();
  for (const d of diagnostics) {
    for (const e of fiches[d.slug]?.onglets?.diagnostic?.examens || []) {
      if (!vus.has(e.slug))
        vus.set(e.slug, { slug: e.slug, nom: e.nom, categorie: e.categorie, diagnostics: [d.nom] });
      else if (!vus.get(e.slug).diagnostics.includes(d.nom)) vus.get(e.slug).diagnostics.push(d.nom);
    }
  }
  const groupes = Object.keys(CATEGORIES_EXAMEN)
    .map((c) => ({ categorie: c, examens: [...vus.values()].filter((e) => e.categorie === c) }))
    .filter((g) => g.examens.length);
  const autres = [...vus.values()].filter((e) => !CATEGORIES_EXAMEN[e.categorie]);
  if (autres.length) groupes.push({ categorie: 'autre', examens: autres });
  return groupes;
}

function SectionBilans({ groupes, coches, setCoches }) {
  return (
    <fieldset className="card ordo-section">
      <legend>3. Bilans</legend>
      {!groupes.length && (
        <p className="muted">Choisissez un diagnostic pour voir les examens proposés par la fiche.</p>
      )}
      {groupes.map((g) => (
        <div key={g.categorie} className="ordo-groupe">
          <h3>{CATEGORIES_EXAMEN[g.categorie] || 'Autres'}</h3>
          {g.examens.map((e) => (
            <label key={e.slug} className="checkbox">
              <input
                type="checkbox"
                checked={Boolean(coches[e.slug])}
                onChange={(ev) =>
                  setCoches({
                    ...coches,
                    [e.slug]: ev.target.checked ? { nom: e.nom, categorie: e.categorie } : undefined,
                  })
                }
              />{' '}
              {e.nom}
              {e.diagnostics.length > 1 && <span className="muted"> ({e.diagnostics.join(', ')})</span>}
            </label>
          ))}
        </div>
      ))}
    </fieldset>
  );
}

function LigneTraitement({ ev, onChange, onRetirer, index }) {
  const { t, molecule } = ev;
  const id = (k) => `ordo-${k}-${t.cle}`;
  if (!molecule) {
    return (
      <li className="ordo-ligne">
        <div className="ordo-ligne-tete">
          <strong>{t.dci}</strong>
          <button type="button" className="btn btn-ghost btn-small" onClick={onRetirer}>
            Retirer
          </button>
        </div>
        <p className="muted">
          {t.erreur ? 'Fiche de la molécule indisponible (hors ligne ?).' : 'Chargement de la fiche…'}
        </p>
      </li>
    );
  }
  const { lignes, posologie, presentations, dose, quantite, options, delivrer } = ev;
  return (
    <li className="ordo-ligne">
      <div className="ordo-ligne-tete">
        <span>
          <strong>
            {index + 1}. <Link to={`/molecules/${molecule.slug}`}>{molecule.dci}</Link>
          </strong>
          {t.ligne && <span className="tag"> {LIGNES[t.ligne] || t.ligne}</span>}
          {t.diagnostic && <span className="muted"> — {t.diagnostic}</span>}
        </span>
        <button type="button" className="btn btn-ghost btn-small" onClick={onRetirer}>
          Retirer
        </button>
      </div>
      {t.contexte && <p className="muted">{t.contexte}</p>}
      {!lignes.length ? (
        <p className="alerte-dose">
          Aucune posologie pour cette population dans la fiche : préciser la dose ci-dessous.
        </p>
      ) : (
        <div className="field">
          <label htmlFor={id('pos')}>Posologie de la fiche</label>
          <select
            id={id('pos')}
            value={lignes.indexOf(posologie)}
            onChange={(e) => onChange({ posologie: Number(e.target.value), duree: null, presentation: null })}
          >
            {lignes.map((l, i) => (
              <option key={i} value={i}>
                {POPULATIONS[l.population]} — {l.indication || l.dose_texte}
              </option>
            ))}
          </select>
          {posologie && (
            <p className="hint">
              {posologie.dose_texte}
              {posologie.voie ? ` · ${posologie.voie}` : ''}
              {posologie.remarque ? ` · ${posologie.remarque}` : ''}
            </p>
          )}
        </div>
      )}
      {presentations.length > 0 && (
        <div className="field">
          <label htmlFor={id('pres')}>Présentation</label>
          <select
            id={id('pres')}
            value={ev.presentation ? presentations.indexOf(ev.presentation) : 'aucune'}
            onChange={(e) =>
              onChange({ presentation: e.target.value === 'aucune' ? 'aucune' : Number(e.target.value) })
            }
          >
            {presentations.map((p, i) => (
              <option key={i} value={i}>
                {p.libelle}
              </option>
            ))}
            <option value="aucune">Sans conversion (dose en {dose?.unite || 'mg'})</option>
          </select>
        </div>
      )}
      {dose ? (
        <div className="ordo-calcul" role="status">
          <p>
            <strong>Calcul :</strong> {dose.calcul}
            {quantite && ev.presentation && (
              <>
                , soit <strong>{quantite.texte}</strong> de {ev.presentation.libelle}
                {Math.abs(quantite.ecart) > 0.001 && (
                  <span className="muted"> (exact : {quantite.exact.toLocaleString('fr-FR')})</span>
                )}
              </>
            )}
          </p>
          {dose.parJour && (
            <p className="muted">
              Dose par prise : {dose.parPrise?.toLocaleString('fr-FR')} {dose.unite} · par jour :{' '}
              {dose.parJour.toLocaleString('fr-FR')} {dose.unite}
            </p>
          )}
        </div>
      ) : (
        <div className="field">
          <label htmlFor={id('dose')}>Dose (non calculable au poids)</label>
          <input
            id={id('dose')}
            value={t.doseLibre || ''}
            maxLength={200}
            onChange={(e) => onChange({ doseLibre: e.target.value })}
            placeholder={posologie?.dose_texte || 'ex. 1 comprimé de 500 mg'}
            autoComplete="off"
          />
        </div>
      )}
      <div className="form-grid form-grid-2">
        <div className="field">
          <label htmlFor={id('freq')}>Fréquence</label>
          <input
            id={id('freq')}
            value={t.frequence ?? ''}
            maxLength={160}
            onChange={(e) => onChange({ frequence: e.target.value })}
            placeholder={libelleFrequence(posologie) || 'ex. 3 fois par jour'}
            autoComplete="off"
          />
          <p className="hint">Laisser vide pour garder celle de la fiche.</p>
        </div>
        <div className="field">
          <label htmlFor={id('duree')}>Durée</label>
          <select
            id={id('duree')}
            value={t.duree === 'libre' || !options.length ? 'libre' : ev.optionDuree?.cle}
            onChange={(e) => onChange({ duree: e.target.value })}
          >
            {options.map((o) => (
              <option key={o.cle} value={o.cle}>
                {o.libelle}
                {o.defaut ? ' — par défaut' : ''}
              </option>
            ))}
            <option value="libre">{options.length ? 'Autre durée (à justifier)' : 'Durée à préciser'}</option>
          </select>
          {posologie?.duree && <p className="hint">Fiche : {posologie.duree}</p>}
        </div>
      </div>
      {(t.duree === 'libre' || !options.length) && (
        <div className="form-grid form-grid-3">
          <div className="field">
            <label htmlFor={id('dl')}>Durée</label>
            <input
              id={id('dl')}
              value={t.dureeLibre || ''}
              maxLength={80}
              onChange={(e) => onChange({ dureeLibre: e.target.value })}
              placeholder="ex. 10 jours"
              autoComplete="off"
            />
          </div>
          <NumberField
            label="Soit en jours"
            name={`jours-${t.cle}`}
            unit="jours"
            min={1}
            max={3650}
            optional
            value={t.dureeJours || ''}
            onChange={(v) => onChange({ dureeJours: v })}
            hint="Pour calculer la quantité à délivrer"
          />
          {options.length > 0 && (
            <div className="field">
              <label htmlFor={id('just')}>Justification *</label>
              <input
                id={id('just')}
                value={t.justification || ''}
                maxLength={200}
                onChange={(e) => onChange({ justification: e.target.value })}
                placeholder="ex. réponse lente, forme compliquée"
                autoComplete="off"
              />
            </div>
          )}
        </div>
      )}
      {delivrer && (
        <p>
          <strong>À délivrer :</strong> {delivrer.texte}
        </p>
      )}
      <Alertes alertes={ev.alertes} />
    </li>
  );
}

function SectionTraitements({ diagnostics, fiches, evaluations, dcis, onAjouter, onChange, onRetirer }) {
  const [autre, setAutre] = useState('');
  const pris = new Set(evaluations.map((e) => `${e.t.diagnostic || ''}|${e.t.slug}`));
  const ajouterAutre = () => {
    const m = dcis.find((d) => d.dci.toLowerCase() === autre.trim().toLowerCase());
    if (!m) return;
    onAjouter({ slug: m.slug, dci: m.dci, classe: m.classe }, null);
    setAutre('');
  };
  return (
    <fieldset className="card ordo-section">
      <legend>4. Traitements</legend>
      {diagnostics.map((d) => {
        const mols = fiches[d.slug]?.molecules || [];
        if (!mols.length) return null;
        return (
          <div key={d.slug} className="ordo-groupe">
            <h3>Proposés par la fiche « {d.nom} »</h3>
            <ul className="ordo-propositions">
              {mols.map((m) => (
                <li key={`${m.slug}-${m.ligne}`}>
                  <button
                    type="button"
                    className="btn btn-secondary btn-small"
                    disabled={pris.has(`${d.nom}|${m.slug}`)}
                    onClick={() => onAjouter(m, d)}
                    aria-label={`Ajouter ${m.dci}`}
                  >
                    + {m.dci}
                  </button>{' '}
                  <span className="tag">{LIGNES[m.ligne] || m.ligne}</span>
                  {m.contexte && <span className="muted"> {m.contexte}</span>}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <div className="field ordo-autre">
        <label htmlFor="ordo-autre">Autre molécule (DCI)</label>
        <div className="ordo-age">
          <input
            id="ordo-autre"
            value={autre}
            onChange={(e) => setAutre(e.target.value)}
            list="ordo-dci"
            placeholder="ex. Paracétamol"
            autoComplete="off"
          />
          <button type="button" className="btn btn-secondary btn-small" onClick={ajouterAutre}>
            Ajouter
          </button>
        </div>
        <datalist id="ordo-dci">
          {dcis.map((d) => (
            <option key={d.slug} value={d.dci} />
          ))}
        </datalist>
      </div>
      {evaluations.length > 0 && (
        <ol className="ordo-lignes">
          {evaluations.map((ev, i) => (
            <LigneTraitement
              key={ev.t.cle}
              index={i}
              ev={ev}
              onChange={(patch) => onChange(ev.t.cle, patch)}
              onRetirer={() => onRetirer(ev.t.cle)}
            />
          ))}
        </ol>
      )}
    </fieldset>
  );
}

// ------------------------------------------------------------------ composant principal

export function OrdonnanceGuidee({ onCreate }) {
  const { api } = useServices();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [b, setB] = useState(() => lireBrouillon() || brouillonVide());
  const [fiches, setFiches] = useState({});
  const [molecules, setMolecules] = useState({});
  const [liste, setListe] = useState([]);
  const [dcis, setDcis] = useState([]);
  const [erreurs, setErreurs] = useState([]);
  const [lu, setLu] = useState(false);
  const [envoi, setEnvoi] = useState(false);

  const maj = (patch) => setB((x) => ({ ...x, ...patch }));
  const patient = b.patient;
  const surface = surfaceCorporelle(patient.poids, patient.taille);

  useEffect(() => ecrireBrouillon(b), [b]);

  // Listes de référence (gardées en cache pour l'usage hors ligne)
  useEffect(() => {
    let actif = true;
    if (typeof api.pathologies === 'function') {
      api
        .pathologies()
        .then((l) => actif && setListe(l || []))
        .catch(() => {});
    }
    if (typeof api.molecules === 'function') {
      api
        .molecules()
        .then((l) => actif && setDcis((l || []).map((m) => ({ slug: m.slug, dci: m.dci, classe: m.classe }))))
        .catch(() => {});
    }
    return () => {
      actif = false;
    };
  }, [api]);

  // Fiches des diagnostics retenus
  const slugsDiag = b.diagnostics.map((d) => d.slug).join(',');
  useEffect(() => {
    let actif = true;
    for (const d of b.diagnostics) {
      if (fiches[d.slug]) continue;
      api
        .pathologie(d.slug)
        .then((f) => actif && setFiches((x) => ({ ...x, [d.slug]: f })))
        .catch(() => {});
    }
    return () => {
      actif = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, slugsDiag]);

  // Fiches des molécules prescrites
  const slugsMol = [...new Set(b.traitements.map((t) => t.slug))].join(',');
  useEffect(() => {
    let actif = true;
    for (const slug of slugsMol ? slugsMol.split(',') : []) {
      if (molecules[slug]) continue;
      api
        .molecule(slug)
        .then((m) => actif && setMolecules((x) => ({ ...x, [slug]: m })))
        .catch(() => actif && setMolecules((x) => ({ ...x, [slug]: { erreur: true } })));
    }
    return () => {
      actif = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, slugsMol]);

  // Pré-remplissage depuis une fiche (?pathologie=slug)
  const depuis = params.get('pathologie');
  useEffect(() => {
    if (!depuis) return undefined;
    let actif = true;
    api
      .pathologie(depuis)
      .then((f) => {
        if (!actif) return;
        setFiches((x) => ({ ...x, [f.slug]: f }));
        setB((x) =>
          x.diagnostics.some((d) => d.slug === f.slug)
            ? x
            : {
                ...x,
                diagnostics: [
                  ...x.diagnostics,
                  { slug: f.slug, nom: f.nom, statut: f.validation?.statut, forme: '' },
                ],
              },
        );
        setParams({}, { replace: true });
      })
      .catch(() => {});
    return () => {
      actif = false;
    };
  }, [api, depuis, setParams]);

  const ajouterDiagnostic = (p) =>
    maj({ diagnostics: [...b.diagnostics, { slug: p.slug, nom: p.nom, statut: p.statut, forme: '' }] });
  const retirerDiagnostic = (slug) => {
    const nom = b.diagnostics.find((d) => d.slug === slug)?.nom;
    maj({
      diagnostics: b.diagnostics.filter((d) => d.slug !== slug),
      traitements: b.traitements.filter((t) => t.diagnostic !== nom),
    });
  };
  const ajouterTraitement = (m, diagnostic) =>
    maj({
      traitements: [
        ...b.traitements,
        {
          cle: nouvelleCle(),
          slug: m.slug,
          dci: m.dci,
          ligne: m.ligne || null,
          contexte: m.contexte || null,
          diagnostic: diagnostic?.nom || null,
          posologie: null,
          presentation: null,
          duree: null,
        },
      ],
    });
  const changerTraitement = (cle, patch) =>
    maj({ traitements: b.traitements.map((t) => (t.cle === cle ? { ...t, ...patch } : t)) });
  const retirerTraitement = (cle) => maj({ traitements: b.traitements.filter((t) => t.cle !== cle) });

  const evaluations = b.traitements.map((t) => {
    const m = molecules[t.slug];
    const ev = evaluerLigne(t, m && !m.erreur ? m : null, patient, surface, t.diagnostic);
    if (m?.erreur) ev.t = { ...t, erreur: true };
    return ev;
  });
  const alertesGlobales = alertesOrdonnance(evaluations.filter((e) => e.molecule));
  const toutesAlertes = [
    ...evaluations.flatMap((e) => e.alertes || []),
    ...alertesGlobales,
    ...alertesPatient(patient),
  ];
  const aDanger = toutesAlertes.some((a) => a.niveau === 'danger');
  const groupes = bilansProposes(b.diagnostics, fiches);
  const transferts = b.diagnostics
    .map((d) => {
      const n = (fiches[d.slug]?.onglets?.niveaux || []).find((x) => x.niveau === b.niveau);
      return n?.criteres_transfert ? { diagnostic: d.nom, texte: n.criteres_transfert } : null;
    })
    .filter(Boolean);

  const enregistrer = async () => {
    const pb = [];
    if (normaliserNombre(patient.poids) === null) pb.push('Le poids est obligatoire.');
    if (!b.diagnostics.length && !b.traitements.length)
      pb.push('Ajoutez au moins un diagnostic ou un traitement.');
    for (const ev of evaluations) {
      if (!ev.molecule) pb.push(`${ev.t.dci} : fiche de la molécule non chargée.`);
      else if (ev.t.duree === 'libre' && ev.options.length && !ev.t.justification?.trim())
        pb.push(`${ev.molecule.dci} : justifiez la durée choisie hors de la fiche.`);
      else if (!ev.optionDuree && !ev.t.dureeLibre?.trim() && ev.posologie?.frequence_type !== 'dose_unique')
        pb.push(`${ev.molecule.dci} : précisez la durée du traitement.`);
    }
    if (aDanger && !lu) pb.push('Cochez « J’ai pris connaissance des alertes » pour continuer.');
    setErreurs(pb);
    if (pb.length) return;
    setEnvoi(true);
    const traitements = evaluations.map((ev) => ({
      dci: ev.molecule.dci,
      slug: ev.molecule.slug,
      classe: ev.molecule.classe || null,
      diagnostic: ev.t.diagnostic,
      ligne: ev.t.ligne,
      posologie: nettoyerTexte(ev.texte, 400),
      calcul: ev.dose?.calcul || null,
      duree: nettoyerTexte(libelleDureeChoisie(ev), 200),
      justification: ev.t.justification || null,
      quantite: ev.delivrer?.texte || null,
      a_valider: Boolean(ev.posologie?.structure_a_valider || ev.molecule.fiche_a_valider),
    }));
    const bilans = Object.entries(b.bilans)
      .filter(([, v]) => v)
      .map(([slug, v]) => ({ slug, nom: v.nom, categorie: v.categorie }));
    const contenu = {
      version: 2,
      patient: { ...patient, surface },
      niveau: b.niveau,
      diagnostics: b.diagnostics.map((d) => ({
        ...d,
        statut: fiches[d.slug]?.validation?.statut || d.statut,
      })),
      bilans,
      traitements,
      alertes: toutesAlertes.filter((a) => a.niveau !== 'info').map((a) => a.message),
      transferts,
      conseils: b.conseils.trim(),
      // Compatibilité avec l'affichage des prescriptions simples
      lignes: traitements.map((t) => ({ dci: t.dci, posologie: t.posologie, duree: t.duree })),
      notes: b.conseils.trim(),
      pathologie: b.diagnostics[0] ? { nom: b.diagnostics[0].nom, slug: b.diagnostics[0].slug } : null,
    };
    const ageTexte = patient.age.valeur ? `${patient.age.valeur} ${patient.age.unite}` : null;
    const label = [patient.code, ageTexte, patient.poids && `${patient.poids} kg`].filter(Boolean).join(', ');
    try {
      const record = await onCreate({ patient_label: nettoyerTexte(label, 190), contenu });
      ecrireBrouillon(null);
      setB(brouillonVide());
      setLu(false);
      if (record?.id) navigate(`/prescriptions/${record.id}`);
    } finally {
      setEnvoi(false);
    }
  };

  return (
    <form className="ordo" onSubmit={(e) => e.preventDefault()} noValidate>
      <SectionPatient
        patient={patient}
        setPatient={(p) => maj({ patient: p })}
        niveau={b.niveau}
        setNiveau={(niveau) => maj({ niveau })}
        surface={surface}
      />
      <SectionDiagnostics
        diagnostics={b.diagnostics}
        fiches={fiches}
        liste={liste}
        onAjouter={ajouterDiagnostic}
        onRetirer={retirerDiagnostic}
        onForme={(slug, forme) =>
          maj({ diagnostics: b.diagnostics.map((d) => (d.slug === slug ? { ...d, forme } : d)) })
        }
      />
      <SectionBilans groupes={groupes} coches={b.bilans} setCoches={(bilans) => maj({ bilans })} />
      <SectionTraitements
        diagnostics={b.diagnostics}
        fiches={fiches}
        evaluations={evaluations}
        dcis={dcis}
        onAjouter={ajouterTraitement}
        onChange={changerTraitement}
        onRetirer={retirerTraitement}
      />
      <fieldset className="card ordo-section">
        <legend>5. Ordonnance</legend>
        <Alertes alertes={alertesGlobales} />
        {transferts.length > 0 && (
          <div className="ordo-groupe">
            <h3>Critères de transfert ({NIVEAUX_SOINS[b.niveau]?.label})</h3>
            {transferts.map((x) => (
              <p key={x.diagnostic} className="ordo-transfert">
                <strong>{x.diagnostic} :</strong> {x.texte.replace(/\*\*/g, '').replace(/^- /gm, '• ')}
              </p>
            ))}
          </div>
        )}
        <div className="field">
          <label htmlFor="ordo-conseils">Conseils au patient et critères de retour</label>
          <textarea
            id="ordo-conseils"
            rows={3}
            maxLength={2000}
            value={b.conseils}
            onChange={(e) => maj({ conseils: e.target.value })}
            placeholder="ex. Revenir immédiatement si convulsions, vomissements répétés ou fièvre après 48 h."
          />
        </div>
        {aDanger && (
          <label className="checkbox">
            <input type="checkbox" checked={lu} onChange={(e) => setLu(e.target.checked)} /> J’ai pris
            connaissance des alertes et je maintiens la prescription sous ma responsabilité.
          </label>
        )}
        {erreurs.length > 0 && (
          <ul className="form-error" role="alert">
            {erreurs.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
        <p className="hint">
          Aide à la prescription — la décision et la responsabilité restent celles du prescripteur.
        </p>
        <div className="ordo-actions">
          <button type="button" className="btn btn-primary" onClick={enregistrer} disabled={envoi}>
            Enregistrer et afficher l’ordonnance
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setB(brouillonVide());
              setErreurs([]);
              setLu(false);
            }}
          >
            Nouvelle ordonnance vide
          </button>
        </div>
      </fieldset>
    </form>
  );
}
