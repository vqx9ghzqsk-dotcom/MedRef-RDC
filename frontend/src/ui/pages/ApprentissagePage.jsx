import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAuth } from '../context/auth.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import {
  ageEnMois,
  analyser,
  indexer,
  sansAccents,
  trancheDepuisAge,
  TRANCHES_AGE,
} from '../../core/diagnostic.js';

/** Cas d'entraînement → cas du moteur (signes par nom → identifiants). */
export function casDepuisExercice(ex, index, examens) {
  const id = (nom) => index.parNom.get(nom);
  const signes = {};
  for (const n of ex.presents || []) if (id(n)) signes[id(n)] = 'present';
  for (const n of ex.absents || []) if (id(n)) signes[id(n)] = 'absent';
  const cas = {
    age: ex.age || '',
    ageValeur: ex.ageValeur || '',
    ageUnite: ex.ageUnite || 'ans',
    sexe: ex.sexe || '',
    grossesse: Boolean(ex.grossesse),
    periode: ex.periode || '',
    motif: ex.motif ? id(ex.motif) : null,
    duree: ex.duree || '',
    signes,
    constantes: ex.constantes || {},
    biologie: ex.biologie || {},
    terrains: ex.terrains || [],
    contextes: ex.contextes || [],
    examens: Object.fromEntries(
      Object.entries(ex.examens || {})
        .map(([slug, r]) => [examens.find((e) => e.slug === slug)?.id, r])
        .filter(([k]) => k),
    ),
  };
  if (!cas.age && cas.ageValeur) cas.age = trancheDepuisAge(ageEnMois(cas));
  return cas;
}

/**
 * Mode apprentissage : un cas clinique, le soignant propose son diagnostic, puis voit la réponse
 * attendue, le raisonnement de l'outil (arguments pour et contre) et son score de la séance.
 */
export function ApprentissagePage() {
  const { api } = useServices();
  const { user } = useAuth();
  const state = useAsync(
    () =>
      user ? Promise.all([api.diagnosticDonnees(), api.diagnosticApprentissage()]) : Promise.resolve(null),
    [api, user],
  );
  return (
    <>
      <Breadcrumb items={[{ label: 'Aide au diagnostic', to: '/diagnostic' }, { label: 'Apprentissage' }]} />
      <h1>Mode apprentissage</h1>
      {!user ? (
        <p>
          Réservé aux professionnels de santé : <Link to="/connexion">connectez-vous</Link>.
        </p>
      ) : (
        <AsyncView state={state}>{(d) => d && <Exercices donnees={d[0]} exercices={d[1]} />}</AsyncView>
      )}
    </>
  );
}

function Exercices({ donnees, exercices }) {
  const index = useMemo(() => indexer(donnees), [donnees]);
  const fiches = useMemo(
    () =>
      donnees.pathologies
        .filter((p) => p.diagnostic !== false)
        .sort((a, b) => a.nom.localeCompare(b.nom, 'fr')),
    [donnees.pathologies],
  );
  const [rang, setRang] = useState(0);
  const [reponse, setReponse] = useState('');
  const [recherche, setRecherche] = useState('');
  const [corrige, setCorrige] = useState(false);
  const [score, setScore] = useState({ justes: 0, faits: 0 });
  const ex = exercices[rang % exercices.length];
  const cas = useMemo(() => casDepuisExercice(ex, index, donnees.examens), [ex, index, donnees.examens]);
  const resultat = useMemo(() => analyser(index, cas), [index, cas]);
  const nomFiche = (slug) => donnees.pathologies.find((p) => p.slug === slug)?.nom || slug;
  const juste = ex.attendu.includes(reponse);
  const choix =
    sansAccents(recherche).length >= 2
      ? fiches.filter((f) => sansAccents(f.nom).includes(sansAccents(recherche))).slice(0, 12)
      : [];
  const corriger = () => {
    setCorrige(true);
    setScore((s) => ({ justes: s.justes + (juste ? 1 : 0), faits: s.faits + 1 }));
  };
  const suivant = () => {
    setRang((r) => r + 1);
    setReponse('');
    setRecherche('');
    setCorrige(false);
  };
  const tranche = TRANCHES_AGE.find((t) => t.id === cas.age)?.libelle;
  return (
    <div className="apprentissage">
      <p className="muted">
        Cas {(rang % exercices.length) + 1} sur {exercices.length} · score de la séance : {score.justes}/
        {score.faits}
      </p>
      <section className="card" aria-label="Présentation du cas">
        <h2>Le patient</h2>
        <p>
          {[ex.ageValeur ? `${ex.ageValeur} ${ex.ageUnite}` : tranche, { M: 'homme', F: 'femme' }[ex.sexe]]
            .filter(Boolean)
            .join(', ')}
          {ex.grossesse && (ex.periode === 'post-partum' ? ', accouchée récemment' : ', enceinte')}
        </p>
        {ex.motif && (
          <p>
            <b>Motif :</b> {ex.motif}
            {ex.duree ? ` (${ex.duree})` : ''}
          </p>
        )}
        {ex.presents?.length > 0 && (
          <p>
            <b>Signes :</b> {ex.presents.join(', ')}
          </p>
        )}
        {ex.absents?.length > 0 && (
          <p>
            <b>Absents :</b> {ex.absents.join(', ')}
          </p>
        )}
        {Object.keys(ex.constantes || {}).length > 0 && (
          <p>
            <b>Constantes :</b>{' '}
            {Object.entries(ex.constantes)
              .map(([k, v]) => `${k} ${v}`)
              .join(' ; ')}
          </p>
        )}
        {Object.keys(ex.biologie || {}).length > 0 && (
          <p>
            <b>Biologie :</b>{' '}
            {Object.entries(ex.biologie)
              .map(([k, v]) => `${k} ${v}`)
              .join(' ; ')}
          </p>
        )}
        {Object.keys(ex.examens || {}).length > 0 && (
          <p>
            <b>Examens :</b>{' '}
            {Object.entries(ex.examens)
              .map(([k, v]) => `${donnees.examens.find((e) => e.slug === k)?.nom || k} ${v}`)
              .join(' ; ')}
          </p>
        )}
        {(ex.terrains?.length > 0 || ex.contextes?.length > 0) && (
          <p>
            <b>Terrain et contexte :</b>{' '}
            {[
              ...(ex.terrains || []).map((t) => donnees.terrains.find((x) => x.id === t)?.libelle || t),
              ...(ex.contextes || []).map((c) => donnees.contextes.find((x) => x.id === c)?.libelle || c),
            ].join(', ')}
          </p>
        )}
      </section>

      {!corrige ? (
        <section className="card" aria-label="Votre diagnostic">
          <h2>Votre diagnostic</h2>
          <label htmlFor="appr-recherche">Chercher une fiche</label>
          <input
            id="appr-recherche"
            type="search"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="ex. paludisme, méningite"
          />
          {choix.length > 0 && (
            <ul className="chips" aria-label="Fiches proposées">
              {choix.map((f) => (
                <li key={f.slug}>
                  <button
                    type="button"
                    className="chip chip-bouton"
                    aria-pressed={reponse === f.slug}
                    onClick={() => setReponse(f.slug)}
                  >
                    {f.nom}
                  </button>
                </li>
              ))}
            </ul>
          )}
          {reponse && (
            <p>
              Votre réponse : <b>{nomFiche(reponse)}</b>
            </p>
          )}
          <button type="button" className="btn btn-primary" disabled={!reponse} onClick={corriger}>
            Corriger
          </button>
        </section>
      ) : (
        <section className="card" aria-label="Correction" aria-live="polite">
          <h2>{juste ? 'Bonne réponse' : 'Réponse attendue'}</h2>
          <p>
            {!juste && <>Vous avez proposé {nomFiche(reponse)}. Attendu : </>}
            {ex.attendu.map((s, i) => (
              <span key={s}>
                {i > 0 && ' ou '}
                <Link to={`/pathologies/${s}`}>{nomFiche(s)}</Link>
              </span>
            ))}
          </p>
          <h3>Le raisonnement de l’outil</h3>
          <ol className="diag-liste">
            {resultat.hypotheses.slice(0, 3).map((h) => (
              <li key={h.fiche.slug}>
                <b>{h.fiche.nom}</b>
                {ex.attendu.includes(h.fiche.slug) && <span className="tag tag-ok"> attendu</span>}
                <br />
                Pour : {h.concordants.map((c) => c.nom).join(', ') || '—'}
                {h.discordants.length > 0 && (
                  <>
                    {' '}
                    · Contre :{' '}
                    {h.discordants
                      .map((c) => (c.exclusion ? `${c.nom} présent` : `${c.nom} absent`))
                      .join(', ')}
                  </>
                )}
                {h.aRechercher.length > 0 && <> · À rechercher : {h.aRechercher.join(', ')}</>}
              </li>
            ))}
          </ol>
          <button type="button" className="btn btn-primary" onClick={suivant}>
            Cas suivant
          </button>
        </section>
      )}
    </div>
  );
}
