import { useEffect, useId, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAuth } from '../context/auth.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView } from '../components/Status.jsx';
import { LienProduit, PhotoProduit } from '../components/Produits.jsx';
import {
  ageEnMois,
  analyser,
  DUREES,
  effetsIndesirablesPossibles,
  examensUtiles,
  indexer,
  LIBELLES_FREQUENCE,
  motifsFrequents,
  NORMES,
  pertinenceSignes,
  posologiePour,
  profilDuPatient,
  sansAccents,
  terrainPossible,
  terrainsAPreciser,
  TRANCHES_AGE,
  trancheDepuisAge,
} from '../../core/diagnostic.js';
import { calculerDose } from '../../core/posologie.js';
import { LIGNES } from '../../core/labels.js';

const NIVEAUX = { tres_probable: 'Très probable', probable: 'Probable', possible: 'Possible' };

const ETAPES = [
  { id: 'motif', titre: '1 · Motif et histoire' },
  { id: 'terrain', titre: '2 · Terrain' },
  { id: 'examen', titre: '3 · Examen clinique' },
  { id: 'paraclinique', titre: '4 · Paraclinique' },
];

const DEBUTS = [
  ['brutal', 'Brutal'],
  ['progressif', 'Progressif'],
];
const EVOLUTIONS = [
  ['aggravation', 'S’aggrave'],
  ['stable', 'Stable'],
  ['amelioration', 'S’améliore'],
  ['intermittente', 'Par épisodes'],
];

const CONSTANTES = [
  ['temperature', 'Température', '°C'],
  ['fc', 'Fréquence cardiaque', '/min'],
  ['fr', 'Fréquence respiratoire', '/min'],
  ['tas', 'Pression systolique', 'mmHg'],
  ['tad', 'Pression diastolique', 'mmHg'],
  ['spo2', 'Saturation (SpO2)', '%'],
  ['glycemie', 'Glycémie', 'mmol/L'],
  ['glasgow', 'Score de Glasgow', '/15'],
  ['pb', 'Périmètre brachial', 'mm'],
];

const UNITES_AGE = [
  ['jours', 'jours'],
  ['mois', 'mois'],
  ['ans', 'ans'],
];

const EXAMENS_RAPIDES = ['tdr-paludisme', 'goutte-epaisse', 'xpert-mtb-rif', 'hemocultures', 'lcr'];

const CAS_VIDE = {
  age: '',
  ageValeur: '',
  ageUnite: 'ans',
  sexe: '',
  grossesse: false,
  terme: '',
  poids: '',
  motif: null,
  debut: '',
  duree: '',
  evolution: '',
  histoire: '',
  terrains: [],
  traitements: [],
  allergies: [],
  contextes: [],
  constantes: {},
  signes: {},
  examens: {},
};

/**
 * Aide au diagnostic, selon la démarche sémiologique : motif et histoire de la maladie, terrain
 * (antécédents, traitements en cours, allergies, contexte), examen clinique (constantes, signes
 * présents ou absents par appareil), paraclinique ; synthèse syndromique, hypothèses, question
 * suivante, traitement sécurisé et observation imprimable. Moteur hors connexion
 * (core/diagnostic.js). Réservé aux comptes connectés ; rien n'est enregistré sur le serveur.
 */
export function DiagnosticPage() {
  const { user } = useAuth();
  if (!user) {
    return (
      <div className="page-header">
        <h1>Aide au diagnostic</h1>
        <p className="lead">
          Outil réservé aux professionnels de santé.{' '}
          <Link to="/connexion" state={{ from: '/diagnostic' }}>
            Connectez-vous
          </Link>{' '}
          pour l’utiliser.
        </p>
      </div>
    );
  }
  return <Diagnostic />;
}

function Diagnostic() {
  const { api } = useServices();
  const state = useAsync(() => api.diagnosticDonnees(), [api]);
  return (
    <>
      <div className="page-header no-print">
        <h1>Aide au diagnostic</h1>
        <p className="lead">
          Suivez la démarche : motif, terrain, examen clinique, paraclinique. La synthèse et les hypothèses se
          mettent à jour à chaque information.
        </p>
        <p className="diag-avertissement">
          Aide à la décision : elle ne remplace ni l’examen clinique ni le jugement du soignant. Aucune donnée
          du patient n’est enregistrée.
        </p>
      </div>
      <AsyncView state={state}>{(donnees) => <Moteur donnees={donnees} />}</AsyncView>
    </>
  );
}

/**
 * Cas en cours gardé dans l'onglet (sessionStorage) : la touche retour, le passage par une fiche
 * ou un rechargement ne font plus perdre la saisie. Rien ne quitte l'appareil ; l'onglet fermé
 * ou « Nouveau cas » l'effacent.
 */
const CLE_CAS = 'medref.diagnostic.cas';

/** Lieu de soins du soignant (préférence de l'appareil, pas une donnée du patient). */
const CLE_NIVEAU = 'medref.diagnostic.niveau';
const NIVEAUX_LIEU = [
  ['centre_sante', 'Centre de santé', 1],
  ['hopital_general', 'Hôpital général', 2],
  ['hopital_tertiaire', 'Hôpital tertiaire', 3],
];
const RANG_NIVEAU = Object.fromEntries(NIVEAUX_LIEU.map(([id, , rang]) => [id, rang]));
const LIEU_NIVEAU = { 1: 'au centre de santé', 2: 'à l’hôpital général', 3: 'au niveau tertiaire' };

/** Disponibilité d'un examen au lieu de soins choisi (référentiel NIVEAUX_EXAMENS). */
function disponibilite(slug, niveau, niveauxExamens = {}) {
  const requis = niveauxExamens[slug] || 3;
  if (!niveau) return { ici: null, requis };
  return { ici: requis <= RANG_NIVEAU[niveau], requis };
}

function BadgeDispo({ slug, niveau, niveauxExamens }) {
  const d = disponibilite(slug, niveau, niveauxExamens);
  if (d.ici === null) return null;
  return d.ici ? (
    <span className="tag tag-ok">disponible ici</span>
  ) : (
    <span className="tag tag-alerte">{LIEU_NIVEAU[d.requis]}</span>
  );
}

function niveauEnregistre() {
  try {
    return localStorage.getItem(CLE_NIVEAU) || '';
  } catch {
    return '';
  }
}

function casEnregistre() {
  try {
    const brut = sessionStorage.getItem(CLE_CAS);
    return brut ? { ...CAS_VIDE, ...JSON.parse(brut) } : CAS_VIDE;
  } catch {
    return CAS_VIDE;
  }
}

function Moteur({ donnees }) {
  const index = useMemo(() => indexer(donnees), [donnees]);
  const [cas, setCas] = useState(casEnregistre);
  // L'étape est dans l'adresse (?etape=…) : la touche retour revient à l'étape précédente
  const [params, setParams] = useSearchParams();
  const etape = ETAPES.some((e) => e.id === params.get('etape')) ? params.get('etape') : 'motif';
  const setEtape = (id) => {
    if (id === etape) return;
    const suite = new URLSearchParams(params);
    suite.set('etape', id);
    setParams(suite);
  };
  const choix = params.get('hypothese');
  const setChoix = (slug) => {
    const suite = new URLSearchParams(params);
    if (slug) suite.set('hypothese', slug);
    else suite.delete('hypothese');
    setParams(suite);
  };
  useEffect(() => {
    try {
      if (cas === CAS_VIDE) sessionStorage.removeItem(CLE_CAS);
      else sessionStorage.setItem(CLE_CAS, JSON.stringify(cas));
    } catch {
      // Stockage indisponible (navigation privée) : la saisie reste en mémoire
    }
  }, [cas]);
  const resultat = useMemo(() => analyser(index, cas), [index, cas]);
  // Parcours adaptatif : le profil restreint les signes possibles, le motif et les hypothèses
  // en tête ordonnent ce qu'il faut rechercher ensuite
  const profil = useMemo(
    () => profilDuPatient(index, cas),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [index, cas.age, cas.sexe, cas.grossesse],
  );
  const pertinence = useMemo(
    () => pertinenceSignes(index, cas, resultat.hypotheses, profil),
    [index, cas, resultat.hypotheses, profil],
  );
  const maj = (champ, valeur) => setCas((c) => ({ ...c, [champ]: valeur }));
  const regler = (id, etat) =>
    setCas((c) => {
      const signes = { ...c.signes };
      if (!etat || signes[id] === etat) delete signes[id];
      else signes[id] = etat;
      return { ...c, signes };
    });
  const basculer = (champ, id) =>
    setCas((c) => ({
      ...c,
      [champ]: c[champ].includes(id) ? c[champ].filter((x) => x !== id) : [...c[champ], id],
    }));
  const choisie = resultat.hypotheses.find((h) => h.fiche.slug === choix);
  const nouveau = () => {
    setCas(CAS_VIDE);
    setReference(null);
    setParams({}, { replace: true });
  };
  const [niveau, setNiveau] = useState(niveauEnregistre);
  const [reference, setReference] = useState(null);
  const choisirNiveau = (id) => {
    setNiveau(id);
    try {
      localStorage.setItem(CLE_NIVEAU, id);
    } catch {
      // préférence non gardée (stockage indisponible)
    }
  };

  return (
    <>
      <div className="diag-grille">
        <section className="card diag-cas no-print" aria-label="Observation du patient">
          <fieldset className="diag-champ diag-lieu">
            <legend>Je travaille en</legend>
            <div className="chips">
              {NIVEAUX_LIEU.map(([id, libelle]) => (
                <button
                  key={id}
                  type="button"
                  className="chip chip-bouton"
                  aria-pressed={niveau === id}
                  onClick={() => choisirNiveau(id)}
                >
                  {libelle}
                </button>
              ))}
            </div>
          </fieldset>
          <nav className="diag-etapes" aria-label="Étapes de la démarche">
            {ETAPES.map((e) => (
              <button
                key={e.id}
                type="button"
                className="chip chip-bouton"
                aria-current={etape === e.id ? 'step' : undefined}
                aria-pressed={etape === e.id}
                onClick={() => setEtape(e.id)}
              >
                {e.titre}
              </button>
            ))}
          </nav>
          {etape === 'motif' && (
            <EtapeMotif index={index} cas={cas} maj={maj} setCas={setCas} profil={profil} />
          )}
          {etape === 'terrain' && (
            <EtapeTerrain
              donnees={donnees}
              index={index}
              cas={cas}
              maj={maj}
              basculer={basculer}
              hypotheses={resultat.hypotheses}
            />
          )}
          {etape === 'examen' && (
            <EtapeExamen
              donnees={donnees}
              index={index}
              cas={cas}
              maj={maj}
              regler={regler}
              deduits={resultat.deduits}
              profil={profil}
              pertinence={pertinence}
            />
          )}
          {etape === 'paraclinique' && (
            <EtapeParaclinique
              index={index}
              examens={donnees.examens}
              valeurs={cas.examens}
              hypotheses={resultat.hypotheses}
              onChange={(v) => maj('examens', v)}
              niveau={niveau}
              niveauxExamens={donnees.niveauxExamens}
            />
          )}
          <div className="diag-pied-etape">
            {etape !== 'paraclinique' && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEtape(ETAPES[ETAPES.findIndex((e) => e.id === etape) + 1].id)}
              >
                Étape suivante
              </button>
            )}
            <button type="button" className="btn btn-ghost" onClick={nouveau}>
              Nouveau cas
            </button>
          </div>
        </section>

        <section className="diag-resultats no-print" aria-label="Synthèse et hypothèses" aria-live="polite">
          <Alertes resultat={resultat} />
          {resultat.syndromes.length > 0 && (
            <div className="card">
              <h2>Synthèse syndromique</h2>
              <ul className="diag-liste">
                {resultat.syndromes.map((sy) => (
                  <li key={sy.id}>
                    <Link to={`/syndromes/${sy.slug}`}>
                      <b>{sy.nom}</b>
                    </Link>{' '}
                    : {sy.signes.join(', ')}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {resultat.questions.length > 0 && (
            <QuestionSuivante questions={resultat.questions} regler={regler} />
          )}
          <EffetsTraitements traitements={cas.traitements} donnees={donnees} index={index} cas={cas} />
          <h2>Hypothèses diagnostiques</h2>
          {!resultat.hypotheses.length ? (
            <p className="muted">
              Indiquez le motif de consultation, puis les signes présents ou absents : les hypothèses
              apparaîtront ici.
            </p>
          ) : (
            <ol className="diag-hypotheses">
              {resultat.hypotheses.map((h, i) => (
                <Hypothese
                  key={h.fiche.id}
                  h={h}
                  rang={i + 1}
                  choisie={h.fiche.slug === choix}
                  onChoisir={() => setChoix(h.fiche.slug)}
                />
              ))}
            </ol>
          )}
          {choisie && (
            <Traitement
              fiche={choisie.fiche}
              cas={cas}
              donnees={donnees}
              niveau={niveau}
              onReference={setReference}
            />
          )}
        </section>
      </div>
      <Observation cas={cas} index={index} donnees={donnees} resultat={resultat} />
      {reference && choisie?.fiche.slug === reference.slug && (
        <FicheReference reference={reference} onFermer={() => setReference(null)} />
      )}
    </>
  );
}

/* ---------- Étape 1 : motif et histoire de la maladie ---------- */

function EtapeMotif({ index, cas, maj, setCas, profil }) {
  const idHistoire = useId();
  // L'âge exact fixe la tranche d'âge (seuils PCIME, fiches et doses de l'âge)
  const majAge = (valeur, unite) =>
    setCas((c) => {
      const suite = { ...c, ageValeur: valeur, ageUnite: unite };
      const tranche = trancheDepuisAge(ageEnMois(suite));
      return { ...suite, age: tranche || (valeur ? c.age : '') };
    });
  return (
    <>
      <h2>Le patient</h2>
      <fieldset className="diag-champ">
        <legend>Âge exact</legend>
        <div className="diag-ligne">
          <label className="diag-petit-champ">
            <input
              type="text"
              inputMode="decimal"
              aria-label="Âge"
              value={cas.ageValeur}
              onChange={(e) => majAge(e.target.value, cas.ageUnite)}
            />
          </label>
          <div className="chips">
            {UNITES_AGE.map(([id, libelle]) => (
              <button
                key={id}
                type="button"
                className="chip chip-bouton"
                aria-pressed={cas.ageUnite === id}
                onClick={() => majAge(cas.ageValeur, id)}
              >
                {libelle}
              </button>
            ))}
          </div>
        </div>
      </fieldset>
      <Boutons
        legende="Ou tranche d’âge (si l’âge exact est inconnu)"
        options={TRANCHES_AGE.map((t) => [t.id, t.libelle])}
        valeur={cas.age}
        onChange={(v) => setCas((c) => ({ ...c, age: v, ageValeur: '' }))}
      />
      <Boutons
        legende="Sexe"
        options={[
          ['M', 'Masculin'],
          ['F', 'Féminin'],
        ]}
        valeur={cas.sexe}
        onChange={(v) => {
          maj('sexe', v);
          if (v !== 'F') maj('grossesse', false);
        }}
      />
      {cas.sexe === 'F' && !['nn', 'petit'].includes(cas.age) && (
        <div className="diag-ligne">
          <label className="diag-case">
            <input
              type="checkbox"
              checked={cas.grossesse}
              onChange={(e) => maj('grossesse', e.target.checked)}
            />{' '}
            Enceinte ou accouchée récemment
          </label>
          {cas.grossesse && (
            <label className="diag-petit-champ">
              Terme (SA)
              <input
                type="text"
                inputMode="decimal"
                value={cas.terme}
                onChange={(e) => maj('terme', e.target.value)}
              />
            </label>
          )}
        </div>
      )}
      <label className="diag-petit-champ">
        Poids (kg)
        <input
          type="text"
          inputMode="decimal"
          value={cas.poids}
          onChange={(e) => maj('poids', e.target.value)}
        />
      </label>

      <h2>Motif de consultation</h2>
      {cas.motif ? (
        <p className="diag-motif">
          <b>{index.symptomes.get(cas.motif)?.nom}</b>{' '}
          <button type="button" className="btn-link" onClick={() => maj('motif', null)}>
            Changer
          </button>
        </p>
      ) : (
        <>
          <RechercheListe
            libelle="Plainte principale"
            elements={index.donnees.symptomes.filter((s) => profil.signes.has(s.id))}
            dejaPris={[]}
            onChoix={(s) => maj('motif', s.id)}
          />
          <p className="muted">
            Motifs fréquents
            {cas.age || cas.sexe ? ' pour ce patient' : ''} :
          </p>
          <div className="chips">
            {motifsFrequents(index, profil, 10, cas).map((s) => (
              <button
                key={s.id}
                type="button"
                className="chip chip-bouton"
                onClick={() => maj('motif', s.id)}
              >
                {s.nom}
              </button>
            ))}
          </div>
        </>
      )}
      <h2>Histoire de la maladie</h2>
      <Boutons legende="Début" options={DEBUTS} valeur={cas.debut} onChange={(v) => maj('debut', v)} />
      <Boutons
        legende="Durée"
        options={DUREES.map((d) => [d.id, d.libelle])}
        valeur={cas.duree}
        onChange={(v) => maj('duree', v)}
      />
      <Boutons
        legende="Évolution"
        options={EVOLUTIONS}
        valeur={cas.evolution}
        onChange={(v) => maj('evolution', v)}
      />
      <label htmlFor={idHistoire} className="diag-etiquette">
        Chronologie, signes associés, traitements déjà pris (notes)
      </label>
      <textarea
        id={idHistoire}
        className="diag-notes"
        rows={4}
        value={cas.histoire}
        onChange={(e) => maj('histoire', e.target.value)}
        placeholder="Sans nom ni identité du patient"
      />
    </>
  );
}

/* ---------- Étape 2 : terrain ---------- */

function EtapeTerrain({ donnees, index, cas, maj, basculer, hypotheses }) {
  // Seuls les antécédents et contextes qui concernent ce patient ; ceux qui pèseraient sur les
  // hypothèses en tête sont demandés en premier
  const terrains = donnees.terrains.filter((t) => terrainPossible(t, cas));
  const contextes = donnees.contextes.filter((t) => terrainPossible(t, cas));
  const aPreciser = terrainsAPreciser(index, hypotheses, [...terrains, ...contextes]);
  const groupes = [...new Set(terrains.filter((t) => !aPreciser.has(t.id)).map((t) => t.groupe))];
  const molecule = (id) => donnees.molecules.find((m) => m.id === id);
  const bouton = (t, champ) => (
    <button
      key={t.id}
      type="button"
      className={`chip chip-bouton${aPreciser.has(t.id) ? ' diag-a-preciser' : ''}`}
      aria-pressed={cas[champ].includes(t.id)}
      onClick={() => basculer(champ, t.id)}
    >
      {t.libelle}
    </button>
  );
  const prioritaires = [...terrains, ...contextes].filter((t) => aPreciser.has(t.id));
  return (
    <>
      {prioritaires.length > 0 && (
        <div className="diag-prioritaire">
          <h2>À préciser pour les hypothèses actuelles</h2>
          <div className="chips">
            {prioritaires.map((t) => bouton(t, terrains.includes(t) ? 'terrains' : 'contextes'))}
          </div>
        </div>
      )}
      <h2>Antécédents et terrain</h2>
      {groupes.map((g) => (
        <fieldset key={g} className="diag-champ">
          <legend>{g}</legend>
          <div className="chips">
            {terrains.filter((t) => t.groupe === g && !aPreciser.has(t.id)).map((t) => bouton(t, 'terrains'))}
          </div>
        </fieldset>
      ))}
      <h2>Traitements en cours</h2>
      <ListeMolecules
        libelle="Ajouter un médicament pris actuellement"
        molecules={donnees.molecules}
        valeurs={cas.traitements}
        onChange={(v) => maj('traitements', v)}
        molecule={molecule}
      />
      <h2>Allergies médicamenteuses</h2>
      <ListeMolecules
        libelle="Ajouter une allergie (molécule)"
        molecules={donnees.molecules}
        valeurs={cas.allergies}
        onChange={(v) => maj('allergies', v)}
        molecule={molecule}
        avecClasse
      />
      <h2>Exposition et contexte épidémique</h2>
      <div className="chips">
        {contextes.filter((c) => !aPreciser.has(c.id)).map((c) => bouton(c, 'contextes'))}
      </div>
    </>
  );
}

function ListeMolecules({ libelle, molecules, valeurs, onChange, molecule, avecClasse = false }) {
  const elements = useMemo(() => molecules.map((m) => ({ ...m, nom: m.dci })), [molecules]);
  return (
    <>
      <RechercheListe
        libelle={libelle}
        elements={elements}
        dejaPris={valeurs}
        onChoix={(m) => onChange([...valeurs, m.id])}
      />
      {valeurs.length > 0 && (
        <ul className="chips" aria-label={libelle}>
          {valeurs.map((id) => {
            const m = molecule(id);
            return (
              <li key={id} className="chip chip-retirable">
                {m?.dci}
                {avecClasse && m?.classe ? <span className="muted"> ({m.classe})</span> : null}
                <button
                  type="button"
                  className="btn-link"
                  aria-label={`Retirer ${m?.dci}`}
                  onClick={() => onChange(valeurs.filter((x) => x !== id))}
                >
                  ×
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

/* ---------- Étape 3 : examen clinique ---------- */

function EtapeExamen({ donnees, index, cas, maj, regler, deduits, profil, pertinence }) {
  const [toutVoir, setToutVoir] = useState(false);
  const physiques = index.physiques;
  const deduitDe = new Map(deduits.map((d) => [d.id, d.etat]));
  // Signes possibles pour ce patient (sauf s'ils sont déjà notés), triés par pertinence pour le cas
  const visible = (s) => toutVoir || profil.signes.has(s) || cas.signes[s];
  const rang = (s) => pertinence.get(s) || 0;
  const cles = [...pertinence]
    .filter(([s, v]) => v > 0 && profil.signes.has(s))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([s]) => s);
  const appareils = donnees.appareils
    .map((a) => ({
      ...a,
      signes: a.symptomes.filter(visible).sort((x, y) => rang(y) - rang(x)),
      poids: a.symptomes.reduce((t, s) => t + rang(s), 0),
    }))
    .filter((a) => a.signes.length)
    .sort((a, b) => b.poids - a.poids);
  const masques = donnees.symptomes.filter((s) => !profil.signes.has(s.id)).length;
  const constantes = CONSTANTES.filter(([id]) => id !== 'pb' || cas.age === 'petit').filter(
    ([id]) => id !== 'tad' || !['nn', 'petit', 'grand'].includes(cas.age),
  );
  return (
    <>
      <h2>Constantes</h2>
      <div className="diag-constantes">
        {constantes.map(([id, libelle, unite]) => (
          <label key={id}>
            {libelle} <span className="muted">({unite})</span>
            <input
              type="text"
              inputMode="decimal"
              value={cas.constantes[id] ?? ''}
              onChange={(e) => maj('constantes', { ...cas.constantes, [id]: e.target.value })}
              placeholder={NORMES[id]?.(cas.age) ? `N : ${NORMES[id](cas.age)}` : undefined}
            />
          </label>
        ))}
      </div>
      {cles.length > 0 && (
        <div className="diag-prioritaire">
          <h2>
            {cas.motif || Object.keys(cas.signes).length
              ? 'Signes clés pour ce cas'
              : 'Signes les plus fréquents pour ce patient'}
          </h2>
          <ul className="diag-signes">
            {cles.map((id) => (
              <LigneSigne
                key={id}
                nom={index.symptomes.get(id)?.nom}
                precision={physiques.has(id) ? 'examen' : 'interrogatoire'}
                etat={cas.signes[id] || deduitDe.get(id) || ''}
                deduit={!cas.signes[id] && deduitDe.has(id)}
                onChange={(e) => regler(id, e)}
              />
            ))}
          </ul>
        </div>
      )}
      <h2>Examen par appareil</h2>
      <RechercheListe
        libelle="Chercher un signe"
        elements={donnees.symptomes.filter((s) => visible(s.id))}
        dejaPris={Object.keys(cas.signes).map(Number)}
        onChoix={(s) => regler(s.id, 'present')}
      />
      <p className="muted">
        Appareils et signes classés selon le cas : <b>interrogatoire</b> (signes fonctionnels) puis{' '}
        <b>examen</b> (signes physiques). Noter un signe <b>absent</b> aide autant à éliminer qu’un signe
        présent à confirmer.
        {masques > 0 && !toutVoir && (
          <>
            {' '}
            {masques} signes impossibles pour ce patient (sexe, âge, grossesse) sont masqués.{' '}
            <button type="button" className="btn-link" onClick={() => setToutVoir(true)}>
              Tout afficher
            </button>
          </>
        )}
      </p>
      {appareils.map((a) => {
        const notes = a.symptomes.filter((s) => cas.signes[s]).length;
        return (
          <details key={a.id} className="diag-appareil">
            <summary>
              {a.nom}
              {notes > 0 && <span className="tag">{notes}</span>}
            </summary>
            {[
              ['Interrogatoire', a.signes.filter((s) => !physiques.has(s))],
              ['Examen', a.signes.filter((s) => physiques.has(s))],
            ]
              .filter(([, liste]) => liste.length)
              .map(([titre, liste]) => (
                <div key={titre}>
                  <h3>{titre}</h3>
                  <ul className="diag-signes">
                    {liste.map((id) => (
                      <LigneSigne
                        key={id}
                        nom={index.symptomes.get(id)?.nom}
                        etat={cas.signes[id] || deduitDe.get(id) || ''}
                        deduit={!cas.signes[id] && deduitDe.has(id)}
                        onChange={(e) => regler(id, e)}
                      />
                    ))}
                  </ul>
                </div>
              ))}
          </details>
        );
      })}
    </>
  );
}

function LigneSigne({ nom, etat, deduit, precision, onChange }) {
  return (
    <li className={`diag-signe diag-signe-${etat || 'inconnu'}`}>
      <span>
        {nom}
        {precision && <span className="muted"> ({precision})</span>}
        {deduit && <span className="muted"> (d’après les constantes)</span>}
      </span>
      <span className="diag-tri">
        <button
          type="button"
          aria-pressed={etat === 'present'}
          aria-label={`${nom} : présent`}
          onClick={() => onChange('present')}
        >
          Présent
        </button>
        <button
          type="button"
          aria-pressed={etat === 'absent'}
          aria-label={`${nom} : absent`}
          onClick={() => onChange('absent')}
        >
          Absent
        </button>
      </span>
    </li>
  );
}

/* ---------- Étape 4 : paraclinique ---------- */

function EtapeParaclinique({ index, examens, valeurs, hypotheses, onChange, niveau, niveauxExamens }) {
  // Examens qui confirment ou orientent vers les hypothèses en tête ; sans hypothèse, les
  // examens rapides courants
  const utiles = examensUtiles(index, hypotheses, valeurs);
  const proposes = utiles.length
    ? utiles.map((u) => u.examen)
    : EXAMENS_RAPIDES.map((slug) => examens.find((e) => e.slug === slug)).filter(Boolean);
  const pour = new Map(utiles.map((u) => [u.examen.id, u.hypotheses]));
  const faits = Object.keys(valeurs)
    .map((id) => examens.find((e) => String(e.id) === id))
    .filter(Boolean);
  const liste = [...faits, ...proposes.filter((e) => !faits.includes(e))];
  const regler = (id, v) => {
    const suite = { ...valeurs };
    if (!v || suite[id] === v) delete suite[id];
    else suite[id] = v;
    onChange(suite);
  };
  return (
    <>
      <h2>{utiles.length ? 'Examens utiles pour les hypothèses actuelles' : 'Examens complémentaires'}</h2>
      <p className="muted">
        Résultat positif (en faveur) ou négatif ; laisser vide si l’examen n’a pas été fait.
      </p>
      <ul className="diag-examens">
        {liste.map((e) => (
          <li key={e.id}>
            <span>
              {e.nom} <BadgeDispo slug={e.slug} niveau={niveau} niveauxExamens={niveauxExamens} />
              {pour.has(e.id) && (
                <span className="muted diag-examen-pour">
                  {' '}
                  {pour
                    .get(e.id)
                    .map((h) => `${h.role === 'c' ? 'confirme' : 'oriente vers'} ${h.nom}`)
                    .join(' ; ')}
                </span>
              )}
            </span>
            <span className="diag-tri">
              {[
                ['positif', 'Positif'],
                ['negatif', 'Négatif'],
              ].map(([v, libelle]) => (
                <button
                  key={v}
                  type="button"
                  aria-pressed={valeurs[e.id] === v}
                  aria-label={`${e.nom} : ${libelle}`}
                  onClick={() => regler(e.id, v)}
                >
                  {libelle}
                </button>
              ))}
            </span>
          </li>
        ))}
      </ul>
      <RechercheListe
        libelle="Ajouter un autre examen"
        elements={examens}
        dejaPris={liste.map((e) => e.id)}
        onChoix={(e) => regler(e.id, 'positif')}
      />
    </>
  );
}

/* ---------- Synthèse ---------- */

function Alertes({ resultat }) {
  if (!resultat.gravite.length && !resultat.alertes.length) return null;
  return (
    <div className="diag-urgence" role="alert">
      <strong>Urgence</strong>
      <ul>
        {resultat.gravite.length > 0 && (
          <li>
            Signes de gravité : {resultat.gravite.map((s) => s.nom).join(', ')}. Conduite ABCDE, glycémie
            capillaire.
          </li>
        )}
        {resultat.alertes.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
      <Link to="/urgences">Conduites d’urgence</Link>
    </div>
  );
}

function QuestionSuivante({ questions, regler }) {
  return (
    <div className="card diag-question">
      <h2>À explorer maintenant</h2>
      <p className="muted">Ces signes départagent le mieux les hypothèses en tête.</p>
      <ul className="diag-signes">
        {questions.map(({ symptome, examen }) => (
          <li key={symptome.id} className="diag-signe">
            <span>
              <b>{symptome.nom}</b>{' '}
              <span className="muted">{examen ? '(à l’examen)' : '(à l’interrogatoire)'}</span>
            </span>
            <span className="diag-tri">
              <button
                type="button"
                aria-label={`${symptome.nom} : présent`}
                onClick={() => regler(symptome.id, 'present')}
              >
                Présent
              </button>
              <button
                type="button"
                aria-label={`${symptome.nom} : absent`}
                onClick={() => regler(symptome.id, 'absent')}
              >
                Absent
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EffetsTraitements({ traitements, donnees, index, cas }) {
  const { api } = useServices();
  const slugs = traitements.map((id) => donnees.molecules.find((m) => m.id === id)?.slug).filter(Boolean);
  const state = useAsync(
    () => Promise.all(slugs.map((s) => api.molecule(s).catch(() => null))),
    [api, slugs.join(',')],
  );
  const presents = Object.entries(cas.signes)
    .filter(([, e]) => e === 'present')
    .map(([id]) => index.symptomes.get(Number(id))?.nom)
    .concat(cas.motif ? [index.symptomes.get(cas.motif)?.nom] : [])
    .filter(Boolean);
  if (!slugs.length || !presents.length || !state.data) return null;
  const effets = effetsIndesirablesPossibles(state.data.filter(Boolean), presents);
  if (!effets.length) return null;
  return (
    <div className="card diag-effets">
      <h2>Cause médicamenteuse possible</h2>
      <ul className="diag-liste">
        {effets.map(({ molecule, signes }) => (
          <li key={molecule.slug}>
            <Link to={`/molecules/${molecule.slug}`}>
              <b>{molecule.dci}</b>
            </Link>{' '}
            peut donner : {signes.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Hypothese({ h, rang, choisie, onChoisir }) {
  return (
    <li className={`card diag-hypothese diag-${h.niveau}${choisie ? ' diag-choisie' : ''}`}>
      <div className="diag-hyp-tete">
        <span className="tag">{`${rang} · ${NIVEAUX[h.niveau]}`}</span>
        {h.aEliminer && <span className="tag tag-alerte">À éliminer</span>}
        <h3>
          <Link to={`/pathologies/${h.fiche.slug}`}>{h.fiche.nom}</Link>
        </h3>
        {h.fiche.validee ? (
          <span className="tag tag-ok">Fiche validée</span>
        ) : (
          <span className="tag tag-pending">À valider</span>
        )}
      </div>
      <div
        className="diag-barre"
        role="meter"
        aria-label="Concordance avec le cas"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(h.score * 100)}
      >
        <i style={{ width: `${Math.round(h.score * 100)}%` }} />
      </div>
      <p className="diag-detail">
        <b>Pour :</b> {h.concordants.map((c) => `${c.nom} (${LIBELLES_FREQUENCE[c.frequence]})`).join(', ')}
        {h.tests
          .filter((t) => t.resultat === 'positif')
          .map((t) => ` · ${t.nom} positif`)
          .join('')}
      </p>
      {(h.discordants.length > 0 || h.tests.some((t) => t.resultat === 'negatif')) && (
        <p className="diag-detail">
          <b>Contre :</b>{' '}
          {[
            ...h.discordants.map((c) => `${c.nom} absent`),
            ...h.tests.filter((t) => t.resultat === 'negatif').map((t) => `${t.nom} négatif`),
          ].join(', ')}
        </p>
      )}
      {h.raisons.length > 0 && (
        <p className="diag-detail">
          <b>Terrain :</b> {h.raisons.join(', ')}
        </p>
      )}
      {h.aRechercher.length > 0 && (
        <p className="diag-detail">
          <b>À rechercher :</b> {h.aRechercher.join(', ')}
        </p>
      )}
      <button type="button" className="btn btn-primary btn-small" onClick={onChoisir} aria-pressed={choisie}>
        Traitement et produits
      </button>
    </li>
  );
}

/* ---------- Traitement de l'hypothèse choisie ---------- */

function Traitement({ fiche, cas, donnees, niveau, onReference }) {
  const { api } = useServices();
  const state = useAsync(() => api.pathologie(fiche.slug), [api, fiche.slug]);
  return (
    <section className="card diag-traitement" aria-labelledby="diag-trait-titre">
      <h2 id="diag-trait-titre">{fiche.nom} : traitement</h2>
      <AsyncView state={state}>
        {(p) => {
          const examens = (p.onglets?.diagnostic?.examens || []).filter((e) =>
            ['confirmation', 'gravite', 'premiere_intention'].includes(e.categorie),
          );
          const molecules = p.onglets?.therapeutique?.molecules || [];
          return (
            <>
              {p.urgences?.length > 0 && (
                <p className="diag-urgence">
                  Urgence liée :{' '}
                  {p.urgences.map((u, i) => (
                    <span key={u.id}>
                      {i > 0 && ', '}
                      <Link to={`/urgences/${u.slug}`}>{u.nom}</Link>
                    </span>
                  ))}
                </p>
              )}
              {examens.length > 0 && (
                <>
                  <h3>Examens à demander</h3>
                  <ul className="diag-liste">
                    {examens.slice(0, 6).map((e) => (
                      <li key={`${e.id}-${e.categorie}`}>
                        <b>{e.nom}</b>{' '}
                        <BadgeDispo slug={e.slug} niveau={niveau} niveauxExamens={donnees.niveauxExamens} />
                        {e.interpretation ? ` ${e.interpretation}` : ''}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <NiveauDeSoins
                p={p}
                niveau={niveau}
                examens={examens}
                donnees={donnees}
                onReference={onReference}
              />
              <h3>Molécules</h3>
              <ul className="diag-molecules">
                {molecules.map((m) => (
                  <Molecule key={m.id} m={m} pathologie={p.nom} cas={cas} donnees={donnees} />
                ))}
              </ul>
              <div className="diag-actions">
                <Link
                  to={`/prescriptions?pathologie=${encodeURIComponent(p.slug)}`}
                  className="btn btn-primary"
                >
                  Préparer l’ordonnance
                </Link>
                <Link to={`/pathologies/${p.slug}?onglet=therapeutique`} className="btn btn-secondary">
                  Fiche complète
                </Link>
              </div>
              <p className="muted">Posologies de la fiche, à vérifier par le prescripteur.</p>
            </>
          );
        }}
      </AsyncView>
    </section>
  );
}

/**
 * Prise en charge au lieu de soins choisi (onglet « Niveaux de soins » de la fiche) : ce qui
 * peut être fait sur place, critères de transfert, examens à faire ailleurs.
 */
function NiveauDeSoins({ p, niveau, examens, donnees, onReference }) {
  if (!niveau) {
    return (
      <p className="muted">
        Indiquez où vous travaillez (en haut de l’observation) pour voir la prise en charge possible sur place
        et les critères de transfert.
      </p>
    );
  }
  const ligne = (p.onglets?.niveaux || []).find((n) => n.niveau === niveau);
  const ailleurs = examens.filter((e) => disponibilite(e.slug, niveau, donnees.niveauxExamens).ici === false);
  const preTransfert = (p.onglets?.therapeutique?.molecules || []).filter((m) =>
    /transfert/i.test(m.contexte || ''),
  );
  const libelle = NIVEAUX_LIEU.find(([id]) => id === niveau)?.[1];
  return (
    <div className="diag-niveau">
      <h3>À votre niveau : {libelle}</h3>
      {ligne?.prise_en_charge && <p className="diag-texte">{ligne.prise_en_charge}</p>}
      {ligne?.criteres_transfert && (
        <>
          <h3>Transférer si</h3>
          <p className="diag-texte">{ligne.criteres_transfert}</p>
        </>
      )}
      {ailleurs.length > 0 && (
        <p className="diag-detail">
          <b>Examens non disponibles ici :</b> {ailleurs.map((e) => e.nom).join(', ')}
        </p>
      )}
      {niveau !== 'hopital_tertiaire' && (
        <button
          type="button"
          className="btn btn-secondary btn-small"
          onClick={() =>
            onReference({
              slug: p.slug,
              nom: p.nom,
              depuis: libelle,
              criteres: ligne?.criteres_transfert || '',
              examens: ailleurs.map((e) => e.nom),
              preTransfert: preTransfert.map((m) => `${m.dci}${m.contexte ? ` (${m.contexte})` : ''}`),
            })
          }
        >
          Préparer la fiche de référence
        </button>
      )}
    </div>
  );
}

/** Fiche de référence (transfert) imprimée avec l'observation. */
function FicheReference({ reference, onFermer }) {
  const [vers, setVers] = useState('');
  const [faits, setFaits] = useState('');
  const date = new Date().toLocaleDateString('fr-FR');
  return (
    <section className="card diag-observation diag-reference" aria-labelledby="diag-ref-titre">
      <div className="diag-hyp-tete">
        <h2 id="diag-ref-titre">Fiche de référence</h2>
        <button type="button" className="btn btn-secondary btn-small no-print" onClick={() => window.print()}>
          Imprimer avec l’observation
        </button>
        <button type="button" className="btn btn-ghost btn-small no-print" onClick={onFermer}>
          Fermer
        </button>
      </div>
      <dl className="diag-obs">
        <dt>Date</dt>
        <dd>{date}</dd>
        <dt>Référé depuis</dt>
        <dd>{reference.depuis}</dd>
        <dt>Référé vers</dt>
        <dd>
          <input
            type="text"
            aria-label="Structure de destination"
            value={vers}
            onChange={(e) => setVers(e.target.value)}
            placeholder="Hôpital, service"
          />
        </dd>
        <dt>Diagnostic évoqué</dt>
        <dd>{reference.nom}</dd>
        <dt>Motif du transfert</dt>
        <dd className="diag-texte">{reference.criteres || '—'}</dd>
        <dt>Examens à réaliser</dt>
        <dd>{reference.examens.join(', ') || '—'}</dd>
        <dt>Traitement pré-transfert prévu</dt>
        <dd>{reference.preTransfert.join(' ; ') || '—'}</dd>
        <dt>Soins déjà donnés</dt>
        <dd>
          <textarea
            aria-label="Soins déjà donnés"
            rows={2}
            value={faits}
            onChange={(e) => setFaits(e.target.value)}
            placeholder="Médicaments, doses et heures"
          />
        </dd>
      </dl>
    </section>
  );
}

/** Allergie déclarée à la molécule elle-même ou à une molécule de la même classe. */
function allergie(m, cas, donnees) {
  const declarees = cas.allergies.map((id) => donnees.molecules.find((x) => x.id === id)).filter(Boolean);
  const fiche = donnees.molecules.find((x) => x.id === m.id);
  return declarees.find((a) => a.id === m.id || (a.classe_id && fiche?.classe_id === a.classe_id));
}

function Molecule({ m, pathologie, cas, donnees }) {
  // Chez l'enfant, les présentations pédiatriques d'abord ; puis les produits en photo
  const enfant = ['nn', 'petit', 'grand'].includes(cas.age);
  const rang = (pr) => (enfant && pr.pediatrique ? 2 : 0) + (pr.photo_url ? 1 : 0);
  const produits = [...(m.produits || [])].sort((a, b) => rang(b) - rang(a)).slice(0, 4);
  const principal = ['premiere', 'deuxieme'].includes(m.ligne);
  const allergique = allergie(m, cas, donnees);
  return (
    <li className={`diag-molecule${principal ? ' diag-molecule-principale' : ''}`}>
      <p>
        <span className="tag">{LIGNES[m.ligne] || m.ligne}</span>{' '}
        <Link to={`/molecules/${m.slug}`}>
          <b>{m.dci}</b>
        </Link>
        {m.contexte ? ` · ${m.contexte}` : ''}
      </p>
      {allergique && (
        <p className="diag-securite">
          Allergie déclarée : {allergique.dci}
          {allergique.id !== m.id && allergique.classe ? ` (même classe : ${allergique.classe})` : ''}.
          Choisir une alternative.
        </p>
      )}
      {(principal || cas.grossesse || cas.traitements.length > 0) && (
        <DetailMolecule
          slug={m.slug}
          pathologie={pathologie}
          contexte={m.contexte}
          cas={cas}
          donnees={donnees}
          calcul={principal}
        />
      )}
      {produits.length > 0 && (
        <ul className="vignettes">
          {produits.map((pr) => (
            <li key={pr.id}>
              <LienProduit id={pr.id} className="vignette">
                <PhotoProduit produit={pr} />
                <span className="vignette-nom">{pr.nom_commercial}</span>
                <span className="vignette-firme">{pr.operateur}</span>
              </LienProduit>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/** Dose au poids, grossesse et interactions avec les traitements en cours (fiche molécule). */
function DetailMolecule({ slug, pathologie, contexte, cas, donnees, calcul }) {
  const { api } = useServices();
  const state = useAsync(() => api.molecule(slug), [api, slug]);
  if (!state.data) return null;
  const mol = state.data;
  const poso = calcul ? posologiePour(mol.posologies, pathologie, cas.age, contexte) : null;
  const dose = poso && cas.poids ? calculerDose(poso, cas.poids) : null;
  const texteInteractions = sansAccents(mol.interactions);
  const interactions = cas.traitements
    .map((id) => donnees.molecules.find((x) => x.id === id))
    .filter((t) => t && t.slug !== slug && texteInteractions.includes(sansAccents(t.dci).split(' ')[0]));
  return (
    <>
      {poso && (
        <p className="diag-dose">
          {dose ? (
            <>
              <b>
                {dose.affichage}
                {poso.dose_base === 'par_jour' ? ' par jour' : ' par prise'}
              </b>{' '}
              ({poso.dose_texte}
              {dose.plafonnee ? ', plafonnée' : ''})
            </>
          ) : (
            <b>{poso.dose_texte}</b>
          )}
          {poso.voie ? ` · ${poso.voie}` : ''}
          {poso.frequence ? ` · ${poso.frequence}` : ''}
          {poso.remarque ? <span className="muted"> · {poso.remarque}</span> : null}
        </p>
      )}
      {cas.grossesse && mol.grossesse_allaitement && (
        <p className="diag-securite">Grossesse : {mol.grossesse_allaitement}</p>
      )}
      {interactions.length > 0 && (
        <p className="diag-securite">
          Interaction possible avec le traitement en cours : {interactions.map((t) => t.dci).join(', ')} (voir
          la fiche).
        </p>
      )}
    </>
  );
}

/* ---------- Observation imprimable ---------- */

function Observation({ cas, index, donnees, resultat }) {
  const nom = (id) => index.symptomes.get(Number(id))?.nom;
  const presents = Object.entries(cas.signes)
    .filter(([, e]) => e === 'present')
    .map(([id]) => nom(id));
  const absents = Object.entries(cas.signes)
    .filter(([, e]) => e === 'absent')
    .map(([id]) => nom(id));
  const deduits = resultat.deduits.map((d) => `${d.nom} ${d.etat === 'present' ? 'présent' : 'absent'}`);
  const libelle = (liste, id) => liste.find((x) => x[0] === id)?.[1];
  const constantes = CONSTANTES.filter(([id]) => cas.constantes[id]).map(
    ([id, l, u]) => `${l} ${cas.constantes[id]} ${u}`,
  );
  const mols = (ids) => ids.map((id) => donnees.molecules.find((m) => m.id === id)?.dci).filter(Boolean);
  const examens = Object.entries(cas.examens).map(
    ([id, r]) => `${donnees.examens.find((e) => String(e.id) === id)?.nom} : ${r}`,
  );
  if (!cas.motif && !presents.length) return null;
  return (
    <section className="card diag-observation" aria-labelledby="diag-obs-titre">
      <div className="diag-hyp-tete">
        <h2 id="diag-obs-titre">Observation</h2>
        <button type="button" className="btn btn-secondary btn-small no-print" onClick={() => window.print()}>
          Imprimer
        </button>
      </div>
      <dl className="diag-obs">
        <dt>Patient</dt>
        <dd>
          {[
            cas.ageValeur
              ? `${cas.ageValeur} ${cas.ageUnite}`
              : TRANCHES_AGE.find((t) => t.id === cas.age)?.libelle,
            { M: 'masculin', F: 'féminin' }[cas.sexe],
            cas.poids && `${cas.poids} kg`,
            cas.grossesse && `enceinte${cas.terme ? ` (${cas.terme} SA)` : ''}`,
          ]
            .filter(Boolean)
            .join(', ') || '—'}
        </dd>
        <dt>Motif</dt>
        <dd>{cas.motif ? nom(cas.motif) : '—'}</dd>
        <dt>Histoire</dt>
        <dd>
          {[
            libelle(DEBUTS, cas.debut) && `début ${libelle(DEBUTS, cas.debut).toLowerCase()}`,
            DUREES.find((d) => d.id === cas.duree)?.libelle.toLowerCase(),
            libelle(EVOLUTIONS, cas.evolution)?.toLowerCase(),
          ]
            .filter(Boolean)
            .join(', ') || '—'}
          {cas.histoire && <span className="diag-obs-notes">{cas.histoire}</span>}
        </dd>
        <dt>Terrain</dt>
        <dd>
          {[
            ...cas.terrains.map((id) => donnees.terrains.find((t) => t.id === id)?.libelle),
            ...cas.contextes.map((id) => donnees.contextes.find((t) => t.id === id)?.libelle),
          ]
            .filter(Boolean)
            .join(' ; ') || '—'}
        </dd>
        <dt>Traitements en cours</dt>
        <dd>{mols(cas.traitements).join(', ') || '—'}</dd>
        <dt>Allergies</dt>
        <dd>{mols(cas.allergies).join(', ') || 'aucune connue'}</dd>
        <dt>Constantes</dt>
        <dd>{constantes.join(' · ') || '—'}</dd>
        <dt>Signes présents</dt>
        <dd>{presents.join(', ') || '—'}</dd>
        <dt>Signes absents</dt>
        <dd>{[...absents, ...deduits.filter((d) => d.endsWith('absent'))].join(', ') || '—'}</dd>
        <dt>Paraclinique</dt>
        <dd>{examens.join(' ; ') || '—'}</dd>
        <dt>Synthèse</dt>
        <dd>{resultat.syndromes.map((s) => s.nom).join(', ') || '—'}</dd>
        <dt>Hypothèses</dt>
        <dd>
          {resultat.hypotheses
            .slice(0, 4)
            .map((h) => `${h.fiche.nom} (${NIVEAUX[h.niveau].toLowerCase()})`)
            .join(' ; ') || '—'}
        </dd>
      </dl>
      <p className="muted">Établie avec l’aide au diagnostic MedRef RDC, à compléter par le soignant.</p>
    </section>
  );
}

/* ---------- Éléments communs ---------- */

function Boutons({ legende, options, valeur, onChange }) {
  return (
    <fieldset className="diag-champ">
      <legend>{legende}</legend>
      <div className="chips">
        {options.map(([id, libelle]) => (
          <button
            key={id}
            type="button"
            className="chip chip-bouton"
            aria-pressed={valeur === id}
            onClick={() => onChange(valeur === id ? '' : id)}
          >
            {libelle}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

/** Champ de recherche avec propositions (au moins deux lettres ; Entrée prend la première). */
function RechercheListe({ libelle, elements, dejaPris, onChoix }) {
  const [q, setQ] = useState('');
  const id = useId();
  const propositions = useMemo(() => {
    const n = sansAccents(q.trim());
    if (n.length < 2) return [];
    return elements
      .filter((e) => !dejaPris.includes(e.id) && sansAccents(e.nom).includes(n))
      .sort((a, b) => sansAccents(a.nom).indexOf(n) - sansAccents(b.nom).indexOf(n))
      .slice(0, 8);
  }, [q, elements, dejaPris]);
  const prendre = (e) => {
    onChoix(e);
    setQ('');
  };
  return (
    <div className="diag-recherche">
      <label htmlFor={id}>{libelle}</label>
      <input
        id={id}
        type="search"
        value={q}
        placeholder="Tapez au moins deux lettres"
        autoComplete="off"
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && propositions[0]) {
            e.preventDefault();
            prendre(propositions[0]);
          }
        }}
      />
      {propositions.length > 0 && (
        <ul className="diag-propositions" aria-label={`Propositions : ${libelle}`}>
          {propositions.map((e) => (
            <li key={e.id}>
              <button type="button" onClick={() => prendre(e)}>
                {e.nom}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
