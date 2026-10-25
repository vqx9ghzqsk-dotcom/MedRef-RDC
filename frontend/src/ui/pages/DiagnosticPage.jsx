import { useId, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAuth } from '../context/auth.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView } from '../components/Status.jsx';
import { LienProduit, PhotoProduit } from '../components/Produits.jsx';
import { analyser, indexer, LIBELLES_FREQUENCE, posologiePour, TRANCHES_AGE } from '../../core/diagnostic.js';
import { calculerDose } from '../../core/posologie.js';
import { LIGNES } from '../../core/labels.js';

const NIVEAUX = {
  tres_probable: 'Très probable',
  probable: 'Probable',
  possible: 'Possible',
};

const sansAccents = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

const CAS_VIDE = { age: '', sexe: '', grossesse: false, poids: '', symptomes: [], examens: {} };

/**
 * Aide au diagnostic : saisie du cas par cases à cocher, hypothèses classées en direct à partir
 * des fiches (moteur hors connexion, core/diagnostic.js), puis traitement de la fiche choisie,
 * dose au poids et produits disponibles en RDC. Réservé aux comptes connectés.
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
      <div className="page-header">
        <h1>Aide au diagnostic</h1>
        <p className="lead">
          Décrivez le patient et ses signes : les hypothèses se classent à partir des fiches MedRef RDC, avec
          les examens à demander, le traitement et les produits disponibles.
        </p>
        <p className="diag-avertissement">
          Aide à la décision : elle ne remplace ni l’examen clinique ni le jugement du soignant.
        </p>
      </div>
      <AsyncView state={state}>{(donnees) => <Moteur donnees={donnees} />}</AsyncView>
    </>
  );
}

function Moteur({ donnees }) {
  const index = useMemo(() => indexer(donnees), [donnees]);
  const [cas, setCas] = useState(CAS_VIDE);
  const [choix, setChoix] = useState(null);
  const resultat = useMemo(() => analyser(index, cas), [index, cas]);
  const maj = (champ, valeur) => setCas((c) => ({ ...c, [champ]: valeur }));
  const ajouter = (id) =>
    setCas((c) => (c.symptomes.includes(id) ? c : { ...c, symptomes: [...c.symptomes, id] }));
  const retirer = (id) => setCas((c) => ({ ...c, symptomes: c.symptomes.filter((s) => s !== id) }));
  const choisie = resultat.hypotheses.find((h) => h.fiche.slug === choix);

  return (
    <div className="diag-grille">
      <section className="card diag-cas" aria-labelledby="diag-cas-titre">
        <h2 id="diag-cas-titre">Le patient</h2>
        <Boutons
          legende="Âge"
          options={TRANCHES_AGE.map((t) => [t.id, t.libelle])}
          valeur={cas.age}
          onChange={(v) => maj('age', v)}
        />
        <Boutons
          legende="Sexe"
          options={[
            ['M', 'Masculin'],
            ['F', 'Féminin'],
          ]}
          valeur={cas.sexe}
          onChange={(v) => setCas((c) => ({ ...c, sexe: v, grossesse: v === 'F' && c.grossesse }))}
        />
        {cas.sexe === 'F' && !['nn', 'petit'].includes(cas.age) && (
          <label className="diag-case">
            <input
              type="checkbox"
              checked={cas.grossesse}
              onChange={(e) => maj('grossesse', e.target.checked)}
            />{' '}
            Enceinte ou accouchée récemment
          </label>
        )}
        <label className="diag-poids">
          Poids (kg), pour le calcul des doses
          <input
            type="text"
            inputMode="decimal"
            value={cas.poids}
            onChange={(e) => maj('poids', e.target.value)}
          />
        </label>

        <h2>Signes et symptômes</h2>
        <RechercheSigne symptomes={donnees.symptomes} dejaPris={cas.symptomes} onAjout={ajouter} />
        {cas.symptomes.length > 0 && (
          <ul className="chips" aria-label="Signes retenus">
            {cas.symptomes.map((id) => {
              const s = index.symptomes.get(id);
              return (
                <li key={id} className="chip chip-retirable">
                  {s?.nom}
                  <button
                    type="button"
                    className="btn-link"
                    aria-label={`Retirer ${s?.nom}`}
                    onClick={() => retirer(id)}
                  >
                    ×
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        {resultat.aRechercher.length > 0 && (
          <div className="diag-suggestions">
            <p>À rechercher pour départager :</p>
            <div className="chips">
              {resultat.aRechercher.map((s) => (
                <button key={s.id} type="button" className="chip chip-bouton" onClick={() => ajouter(s.id)}>
                  + {s.nom}
                </button>
              ))}
            </div>
          </div>
        )}

        <ExamensRapides examens={donnees.examens} valeurs={cas.examens} onChange={(v) => maj('examens', v)} />
        {(cas.symptomes.length > 0 || cas.age) && (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setCas(CAS_VIDE);
              setChoix(null);
            }}
          >
            Nouveau cas
          </button>
        )}
      </section>

      <section className="diag-resultats" aria-labelledby="diag-hyp-titre" aria-live="polite">
        {resultat.gravite.length > 0 && (
          <div className="diag-urgence" role="alert">
            <strong>Signes de gravité :</strong> {resultat.gravite.map((s) => s.nom).join(', ')}. Conduite
            ABCDE, glycémie capillaire, prise en charge en urgence.{' '}
            <Link to="/urgences">Conduites d’urgence</Link>
          </div>
        )}
        <h2 id="diag-hyp-titre">Hypothèses</h2>
        {!cas.symptomes.length ? (
          <p className="muted">Ajoutez au moins un signe pour voir les hypothèses.</p>
        ) : !resultat.hypotheses.length ? (
          <p className="muted">Aucune fiche ne correspond à ces signes pour ce patient.</p>
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
        {choisie && <Traitement fiche={choisie.fiche} cas={cas} />}
      </section>
    </div>
  );
}

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

function RechercheSigne({ symptomes, dejaPris, onAjout }) {
  const [q, setQ] = useState('');
  const id = useId();
  const propositions = useMemo(() => {
    const n = sansAccents(q.trim());
    if (n.length < 2) return [];
    return symptomes
      .filter((s) => !dejaPris.includes(s.id) && sansAccents(s.nom).includes(n))
      .sort((a, b) => sansAccents(a.nom).indexOf(n) - sansAccents(b.nom).indexOf(n))
      .slice(0, 8);
  }, [q, symptomes, dejaPris]);
  return (
    <div className="diag-recherche">
      <label htmlFor={id}>Ajouter un signe</label>
      <input
        id={id}
        type="search"
        value={q}
        placeholder="Tapez : fièvre, toux, ictère…"
        autoComplete="off"
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && propositions[0]) {
            e.preventDefault();
            onAjout(propositions[0].id);
            setQ('');
          }
        }}
      />
      {propositions.length > 0 && (
        <ul className="diag-propositions" aria-label="Signes proposés">
          {propositions.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => {
                  onAjout(s.id);
                  setQ('');
                }}
              >
                {s.nom}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const EXAMENS_RAPIDES = ['tdr-paludisme', 'goutte-epaisse', 'xpert-mtb-rif', 'hemocultures', 'lcr'];

function ExamensRapides({ examens, valeurs, onChange }) {
  const liste = EXAMENS_RAPIDES.map((slug) => examens.find((e) => e.slug === slug)).filter(Boolean);
  if (!liste.length) return null;
  const regler = (id, v) => {
    const suite = { ...valeurs };
    if (!v || suite[id] === v) delete suite[id];
    else suite[id] = v;
    onChange(suite);
  };
  return (
    <fieldset className="diag-champ">
      <legend>Examens déjà faits (facultatif)</legend>
      <ul className="diag-examens">
        {liste.map((e) => (
          <li key={e.id}>
            <span>{e.nom}</span>
            <span className="chips">
              {[
                ['positif', 'Positif'],
                ['negatif', 'Négatif'],
              ].map(([v, libelle]) => (
                <button
                  key={v}
                  type="button"
                  className="chip chip-bouton"
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
    </fieldset>
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
        <b>Concordant :</b>{' '}
        {h.concordants.map((c) => `${c.nom} (${LIBELLES_FREQUENCE[c.frequence]})`).join(', ')}
        {h.tests.map((t) => ` · ${t.nom} ${t.resultat}`).join('')}
      </p>
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

function Traitement({ fiche, cas }) {
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
                        <b>{e.nom}</b>
                        {e.interpretation ? ` : ${e.interpretation}` : ''}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <h3>Molécules</h3>
              <ul className="diag-molecules">
                {molecules.map((m) => (
                  <Molecule key={m.id} m={m} pathologie={p.nom} cas={cas} />
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

function Molecule({ m, pathologie, cas }) {
  // Chez l'enfant, les présentations pédiatriques d'abord ; puis les produits en photo
  const enfant = ['nn', 'petit', 'grand'].includes(cas.age);
  const rang = (pr) => (enfant && pr.pediatrique ? 2 : 0) + (pr.photo_url ? 1 : 0);
  const produits = [...(m.produits || [])].sort((a, b) => rang(b) - rang(a)).slice(0, 4);
  const principal = ['premiere', 'deuxieme'].includes(m.ligne);
  return (
    <li className={`diag-molecule${principal ? ' diag-molecule-principale' : ''}`}>
      <p>
        <span className="tag">{LIGNES[m.ligne] || m.ligne}</span>{' '}
        <Link to={`/molecules/${m.slug}`}>
          <b>{m.dci}</b>
        </Link>
        {m.contexte ? ` · ${m.contexte}` : ''}
      </p>
      {principal && cas.poids && (
        <Dose slug={m.slug} pathologie={pathologie} contexte={m.contexte} cas={cas} />
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

function Dose({ slug, pathologie, contexte, cas }) {
  const { api } = useServices();
  const state = useAsync(() => api.molecule(slug), [api, slug]);
  if (!state.data) return null;
  const poso = posologiePour(state.data.posologies, pathologie, cas.age, contexte);
  if (!poso) return null;
  const dose = calculerDose(poso, cas.poids);
  return (
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
  );
}
