import { useEffect, useRef } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { RichText } from '../components/RichText.jsx';
import { ProduitList } from '../components/Pharmaco.jsx';
import {
  CATEGORIES_EXAMEN,
  FREQUENCES,
  GRADES,
  LIGNES,
  NIVEAUX_SOINS,
  NIVEAUX_SOURCE,
  ONGLETS,
  RUBRIQUES_SEMIOLOGIE,
  TYPES_EXAMEN,
  TYPES_FORME,
} from '../../core/labels.js';

/** Sommaire d'ancres en tête d'onglet (utile sur mobile pour les fiches longues). */
function Sommaire({ items }) {
  const visibles = items.filter((i) => i.show);
  if (visibles.length < 2) return null;
  return (
    <nav className="sommaire" aria-label="Sommaire de l’onglet">
      {visibles.map((i) => (
        <a key={i.id} href={`#${i.id}`}>
          {i.label}
        </a>
      ))}
    </nav>
  );
}

function Rubrique({ id, title, children }) {
  return (
    <section className="rubrique" aria-labelledby={id}>
      <h3 id={id} className="rubrique-title">
        {title}
      </h3>
      {children}
    </section>
  );
}

// ------------------------------------------------------------------ Formes cliniques

const ancreForme = (f) => `forme-${f.id}`;

function TypeForme({ type }) {
  return <span className={`tag forme-${type}`}>{TYPES_FORME[type] || type}</span>;
}

/** Onglet Définition : liste des formes cliniques, chacune renvoyant à sa sémiologie. */
function FormesCliniques({ formes }) {
  if (!formes?.length) return null;
  return (
    <section className="formes-liste" aria-labelledby="def-formes">
      <h3 id="def-formes">Formes cliniques</h3>
      <ul>
        {formes.map((f) => (
          <li key={f.id}>
            <div className="forme-ligne">
              <Link to={`?onglet=diagnostic#${ancreForme(f)}`} className="forme-nom">
                {f.nom}
              </Link>
              <TypeForme type={f.type} />
            </div>
            {f.description && <RichText text={f.description} glossaire vide={null} />}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Sémiologie systématisée d'une forme : rubriques dans l'ordre de l'examen, syndromes, examens. */
function SemiologieForme({ forme, ouverte }) {
  return (
    <details className="forme" id={ancreForme(forme)} open={ouverte}>
      <summary>
        <span className="forme-nom">{forme.nom}</span>
        <TypeForme type={forme.type} />
      </summary>
      <div className="forme-corps">
        {RUBRIQUES_SEMIOLOGIE.filter(([k]) => forme[k]).map(([k, label]) => (
          <div key={k} className={`semio semio-${k}`}>
            <h5 className="semio-titre">{label}</h5>
            <RichText text={forme[k]} headingLevel={6} glossaire vide={null} />
          </div>
        ))}
        {forme.syndromes.length > 0 && (
          <div className="semio semio-syndromes">
            <h5 className="semio-titre">Regroupement syndromique</h5>
            <ul className="chips">
              {forme.syndromes.map((sy) => (
                <li key={sy.slug}>
                  <Link to={`/syndromes/${sy.slug}`} className="chip chip-syndrome">
                    {sy.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {forme.examens.length > 0 && (
          <div className="semio semio-examens">
            <h5 className="semio-titre">Examens de confirmation</h5>
            <ul className="examen-list">
              {forme.examens.map((e) => (
                <li key={e.slug} className="examen">
                  <Link to={`/examens/${e.slug}`} className="examen-name">
                    {e.nom}
                  </Link>
                  {e.interpretation && <p className="examen-interp">{e.interpretation}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </details>
  );
}

// ------------------------------------------------------------------ Diagnostic

function ExamenItem({ examen }) {
  return (
    <li className="examen">
      <div className="examen-head">
        <Link to={`/examens/${examen.slug}`} className="examen-name">
          {examen.nom}
        </Link>
      </div>
      {examen.interpretation && <p className="examen-interp">{examen.interpretation}</p>}
      {examen.valeurs_normales && (
        <details className="examen-normes">
          <summary>Valeurs normales</summary>
          <RichText text={examen.valeurs_normales} headingLevel={5} />
        </details>
      )}
    </li>
  );
}

/** Examens d'un type, regroupés par catégorie (1re intention, confirmation…). */
function BilanParCategorie({ examens }) {
  return Object.entries(CATEGORIES_EXAMEN)
    .map(([key, label]) => [key, label, examens.filter((e) => e.categorie === key)])
    .filter(([, , items]) => items.length)
    .map(([key, label, items]) => (
      <div key={key} className="bilan-groupe">
        <h4 className="bilan-categorie">
          <span className={`tag cat-${key}`}>{label}</span>
        </h4>
        <ul className="examen-list">
          {items.map((e) => (
            <ExamenItem key={`${e.id}-${e.categorie}`} examen={e} />
          ))}
        </ul>
      </div>
    ));
}

function DiagnosticPanel({ content }) {
  const { clinique, examens, scores, differentiels, formes = [] } = content;
  // Ouvre la forme ciblée par l'ancre (lien depuis l'onglet Définition), sinon la première
  const cible = useLocation().hash.slice(1);
  useEffect(() => {
    if (cible.startsWith('forme-')) document.getElementById(cible)?.scrollIntoView?.({ block: 'start' });
  }, [cible]);
  const ouverte = (f, i) => (cible.startsWith('forme-') ? cible === ancreForme(f) : i === 0);
  const parType = Object.keys(TYPES_EXAMEN).map((type) => [type, examens.filter((e) => e.type === type)]);
  return (
    <>
      <Sommaire
        items={[
          { id: 'diag-semiologie', label: 'Sémiologie', show: formes.length > 0 },
          { id: 'diag-clinique', label: 'Synthèse', show: Boolean(clinique) },
          ...parType.map(([type, items]) => ({
            id: `diag-${type}`,
            label: TYPES_EXAMEN[type],
            show: items.length > 0,
          })),
          { id: 'diag-scores', label: 'Scores', show: scores.length > 0 },
          { id: 'diag-differentiels', label: 'Différentiels', show: differentiels.length > 0 },
        ]}
      />
      {formes.length > 0 && (
        <Rubrique id="diag-semiologie" title="Sémiologie par forme clinique">
          <p className="hint">
            Pour chaque forme : terrain, signes fonctionnels, généraux et physiques, regroupement syndromique
            et examens de confirmation. Touchez un terme souligné pour voir sa définition.
          </p>
          {formes.map((f, i) => (
            <SemiologieForme key={f.id} forme={f} ouverte={ouverte(f, i)} />
          ))}
        </Rubrique>
      )}
      {clinique && (
        <Rubrique
          id="diag-clinique"
          title={formes.length ? 'Synthèse et critères diagnostiques' : 'Diagnostic clinique'}
        >
          <RichText text={clinique} headingLevel={4} glossaire />
        </Rubrique>
      )}
      {parType
        .filter(([, items]) => items.length)
        .map(([type, items]) => (
          <Rubrique key={type} id={`diag-${type}`} title={`Bilan — ${TYPES_EXAMEN[type].toLowerCase()}`}>
            <BilanParCategorie examens={items} />
          </Rubrique>
        ))}
      {scores.length > 0 && (
        <Rubrique id="diag-scores" title="Scores cliniques et paracliniques">
          <ul className="score-list">
            {scores.map((s) => (
              <li key={s.id}>
                <Link to={`/scores/${s.slug}`} className="score-name">
                  {s.nom}
                </Link>
                {s.code && <span className="tag ligne-premiere">Calcul en ligne</span>}
                {s.description && <p className="muted">{s.description}</p>}
                {s.interpretation && <p className="score-interp">{s.interpretation}</p>}
              </li>
            ))}
          </ul>
        </Rubrique>
      )}
      {differentiels.length > 0 && (
        <Rubrique id="diag-differentiels" title="Diagnostics différentiels">
          <ul className="diff-list">
            {differentiels.map((d) => (
              <li key={d.id}>
                {d.fiche ? (
                  <Link to={`/pathologies/${d.fiche.slug}`} className="diff-name">
                    {d.nom}
                  </Link>
                ) : (
                  <span className="diff-name">{d.nom}</span>
                )}
                {d.fiche && <span className="tag">Fiche disponible</span>}
                {d.elements_distinctifs && <p>{d.elements_distinctifs}</p>}
              </li>
            ))}
          </ul>
        </Rubrique>
      )}
    </>
  );
}

// ------------------------------------------------------------------ Thérapeutique

function MoleculeBlock({ molecule }) {
  const seuls = molecule.produits.filter((p) => !p.association);
  const assoc = molecule.produits.filter((p) => p.association);
  return (
    <li className="molecule">
      <div className="molecule-head">
        <Link to={`/molecules/${molecule.slug}`} className="molecule-name">
          {molecule.dci}
        </Link>
        <span className={`tag ligne-${molecule.ligne}`}>{LIGNES[molecule.ligne]}</span>
        {molecule.classe && <span className="muted molecule-classe">{molecule.classe}</span>}
      </div>
      {molecule.contexte && <p className="molecule-contexte">{molecule.contexte}</p>}
      {molecule.produits.length > 0 && (
        <details className="molecule-produits">
          <summary>
            Produits par opérateur (
            {[
              seuls.length > 0 && `${seuls.length} seul${seuls.length > 1 ? 's' : ''}`,
              assoc.length > 0 && `${assoc.length} en association`,
            ]
              .filter(Boolean)
              .join(', ')}
            )
          </summary>
          <ProduitList produits={molecule.produits} />
        </details>
      )}
    </li>
  );
}

function TherapeutiquePanel({ content }) {
  const { principes, notes, molecules, complications } = content;
  return (
    <>
      <Sommaire
        items={[
          { id: 'ttt-principes', label: 'Principes', show: principes.length > 0 },
          { id: 'ttt-molecules', label: 'Médicaments', show: molecules.length > 0 },
          { id: 'ttt-complications', label: 'Complications', show: complications.length > 0 },
        ]}
      />
      {principes.length > 0 && (
        <Rubrique id="ttt-principes" title="Principes de prise en charge">
          <ol className="principes-sommaire">
            {principes.map((pr) => (
              <li key={pr.id}>
                <a href={`#principe-${pr.ordre}`}>{pr.titre}</a>
                {pr.objectif && <span className="muted"> — {pr.objectif}</span>}
              </li>
            ))}
          </ol>
          {principes.map((pr) => (
            <article key={pr.id} className="principe" id={`principe-${pr.ordre}`}>
              <h4>
                <span className="principe-num">{pr.ordre}</span> {pr.titre}
              </h4>
              <GradeBadge principe={pr} />
              {pr.objectif && <p className="principe-objectif">Objectif : {pr.objectif}</p>}
              <RichText text={pr.details} headingLevel={5} />
            </article>
          ))}
        </Rubrique>
      )}
      {notes && (
        <Rubrique id="ttt-notes" title="Notes complémentaires">
          <RichText text={notes} headingLevel={4} />
        </Rubrique>
      )}
      {molecules.length > 0 && (
        <Rubrique id="ttt-molecules" title="Médicaments : molécules et produits">
          <p className="muted">
            Chaque molécule ouvre sa fiche pharmacologique ; chaque produit, la fiche de son opérateur.
          </p>
          <ul className="molecule-list">
            {molecules.map((m) => (
              <MoleculeBlock key={m.id} molecule={m} />
            ))}
          </ul>
        </Rubrique>
      )}
      {complications.length > 0 && (
        <Rubrique id="ttt-complications" title="Traitement des complications">
          {complications.map((c) => (
            <article key={c.id} className="complication">
              <h4>
                {c.nom}
                {c.fiche && (
                  <Link to={`/pathologies/${c.fiche.slug}`} className="complication-fiche">
                    Voir la fiche
                  </Link>
                )}
              </h4>
              {c.description && <p className="muted">{c.description}</p>}
              <RichText text={c.traitement} headingLevel={5} />
            </article>
          ))}
        </Rubrique>
      )}
      {!principes.length && !molecules.length && !complications.length && !notes && (
        <p className="muted">Contenu à rédiger.</p>
      )}
    </>
  );
}

/** « OMS — Recommandation forte · certitude des preuves élevée » */
function GradeBadge({ principe: pr }) {
  if (!pr.grade_force && !pr.grade_detail) return null;
  const libelle = [pr.grade_force && GRADES[pr.grade_force], pr.grade_detail].filter(Boolean).join(' · ');
  return (
    <p className={`grade grade-${pr.grade_force || 'preuve'}`}>
      <span className="grade-label">Grade</span>
      {pr.grade_source && <span className="grade-source">{pr.grade_source} — </span>}
      {libelle}
    </p>
  );
}

// ------------------------------------------------------------------ Niveaux de soins

function NiveauxPanel({ content }) {
  if (!content.length) return <p className="muted">Contenu à rédiger.</p>;
  return (
    <>
      <p className="muted">
        Ce qu’on peut faire à chaque niveau de la pyramide sanitaire et quand transférer. À adapter au plateau
        technique réellement disponible.
      </p>
      <ol className="niveaux">
        {content.map((n) => (
          <li key={n.niveau} className={`niveau-soins niveau-${n.niveau}`}>
            <h3 className="niveau-titre">
              {NIVEAUX_SOINS[n.niveau].label}
              <span className="row-sub">{NIVEAUX_SOINS[n.niveau].sub}</span>
            </h3>
            {n.prise_en_charge && (
              <div className="niveau-bloc">
                <h4 className="surveillance-label">Sur place</h4>
                <RichText text={n.prise_en_charge} headingLevel={5} />
              </div>
            )}
            {n.criteres_transfert && (
              <div className="niveau-bloc niveau-transfert">
                <h4 className="surveillance-label">Quand transférer</h4>
                <RichText text={n.criteres_transfert} headingLevel={5} />
              </div>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}

/** Statut de relecture médicale de la fiche. */
// Une date seule (AAAA-MM-JJ) est lue en heure locale, pas en UTC (sinon décalage d'un jour)
const dateFr = (d) =>
  d ? new Date(d.length === 10 ? `${d}T00:00:00` : d.replace(' ', 'T')).toLocaleDateString('fr-FR') : null;

function ValidationBanner({ validation }) {
  if (!validation) return null;
  if (validation.statut === 'valide') {
    const date = dateFr(validation.valide_le);
    if (validation.a_revoir) {
      return (
        <p className="validation validation-revoir" role="note">
          Fiche validée{date ? ` le ${date}` : ''}, <strong>révision en retard</strong> depuis le{' '}
          {dateFr(validation.revision_le)} : vérifier qu’aucune recommandation n’a changé depuis.
        </p>
      );
    }
    return (
      <p className="validation validation-ok" role="note">
        Fiche validée{validation.valide_par ? ` par ${validation.valide_par}` : ''}
        {date ? ` le ${date}` : ''}
        {validation.revision_le ? `, prochaine révision le ${dateFr(validation.revision_le)}` : ''}.
      </p>
    );
  }
  return (
    <p className="validation validation-pending" role="note">
      <strong>
        Fiche{' '}
        {validation.statut === 'brouillon' ? 'en cours de rédaction' : 'en attente de validation médicale'}
      </strong>{' '}
      : ne pas l’utiliser comme seule référence. Vérifier les posologies avec le protocole national et la
      notice du produit.
    </p>
  );
}

// ------------------------------------------------------------------ Évolution

function EvolutionPanel({ content }) {
  const { texte, complications } = content;
  return (
    <>
      {texte && (
        <Rubrique id="evo-texte" title="Évolution et pronostic">
          <RichText text={texte} headingLevel={4} />
        </Rubrique>
      )}
      {complications.length > 0 && (
        <Rubrique id="evo-surveillance" title="Surveillance des complications">
          {complications.map((c) => (
            <article key={c.id} className="complication">
              <h4>
                {c.nom}
                {c.fiche && (
                  <Link to={`/pathologies/${c.fiche.slug}`} className="complication-fiche">
                    Voir la fiche
                  </Link>
                )}
              </h4>
              <div className="surveillance-grid">
                <div>
                  <h5 className="surveillance-label">Clinique</h5>
                  <RichText text={c.surveillance_clinique} headingLevel={6} />
                </div>
                <div>
                  <h5 className="surveillance-label">Paraclinique</h5>
                  <RichText text={c.surveillance_paraclinique} headingLevel={6} />
                </div>
              </div>
            </article>
          ))}
        </Rubrique>
      )}
      {!texte && !complications.length && <p className="muted">Contenu à rédiger.</p>}
    </>
  );
}

// ------------------------------------------------------------------ Onglets

/** Étiologies générales, puis étiologies propres à chaque forme clinique. */
function EtiologiesPanel({ content }) {
  // Compatibilité : anciennes réponses (cache hors ligne) où l'onglet était un simple texte
  const { texte, formes = [] } = typeof content === 'string' ? { texte: content } : content || {};
  return (
    <>
      <Sommaire
        items={[
          { id: 'etio-generales', label: 'Vue d’ensemble', show: Boolean(texte) },
          { id: 'etio-formes', label: 'Selon la forme', show: formes.length > 0 },
        ]}
      />
      {(texte || !formes.length) && (
        <Rubrique id="etio-generales" title="Étiologies et facteurs favorisants">
          <RichText text={texte} headingLevel={4} glossaire />
        </Rubrique>
      )}
      {formes.length > 0 && (
        <Rubrique id="etio-formes" title="Étiologies selon la forme clinique">
          <ul className="etio-formes">
            {formes.map((f) => (
              <li key={f.id}>
                <div className="forme-ligne">
                  <span className="forme-nom">{f.nom}</span>
                  <TypeForme type={f.type} />
                </div>
                <RichText text={f.etiologies} headingLevel={5} glossaire vide={null} />
              </li>
            ))}
          </ul>
        </Rubrique>
      )}
    </>
  );
}

function TabContent({ active, content }) {
  switch (active) {
    case 'definition':
      return (
        <>
          <RichText text={content.definition} />
          <FormesCliniques formes={content.formes} />
          {content.physiopathologie && (
            <>
              <h3>Physiopathologie</h3>
              <RichText text={content.physiopathologie} headingLevel={4} />
            </>
          )}
        </>
      );
    case 'etiologies':
      return <EtiologiesPanel content={content} />;
    case 'diagnostic':
      return <DiagnosticPanel content={content} />;
    case 'therapeutique':
      return <TherapeutiquePanel content={content} />;
    case 'niveaux':
      return <NiveauxPanel content={content || []} />;
    case 'evolution':
      return <EvolutionPanel content={content} />;
    default:
      return <RichText text={content} />;
  }
}

function Tabs({ fiche }) {
  const [params, setParams] = useSearchParams();
  const active = ONGLETS.some((o) => o.key === params.get('onglet')) ? params.get('onglet') : 'definition';
  const refs = useRef({});

  const select = (key, focus = false) => {
    setParams(
      (p) => {
        const next = new URLSearchParams(p);
        next.set('onglet', key);
        return next;
      },
      { replace: true },
    );
    if (focus) refs.current[key]?.focus();
  };

  const onKeyDown = (e, index) => {
    const delta = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (delta) {
      e.preventDefault();
      select(ONGLETS[(index + delta + ONGLETS.length) % ONGLETS.length].key, true);
    } else if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      select(ONGLETS[e.key === 'Home' ? 0 : ONGLETS.length - 1].key, true);
    }
  };

  return (
    <div className="tabs">
      <div role="tablist" aria-label="Sections de la fiche" className="tablist">
        {ONGLETS.map((o, i) => (
          <button
            key={o.key}
            ref={(el) => {
              refs.current[o.key] = el;
            }}
            role="tab"
            type="button"
            id={`tab-${o.key}`}
            aria-selected={active === o.key}
            aria-controls={`panel-${o.key}`}
            tabIndex={active === o.key ? 0 : -1}
            onClick={() => select(o.key)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {o.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="tabpanel"
        tabIndex={0}
      >
        <TabContent active={active} content={fiche.onglets[active]} />
      </div>
    </div>
  );
}

function Related({ title, children, count }) {
  if (!count) return null;
  return (
    <section className="related" aria-label={title}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function PathologiePage() {
  const { slug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.pathologie(slug), [api, slug]);

  return (
    <AsyncView state={state}>
      {(f) => (
        <article className="fiche">
          <Breadcrumb
            items={[
              { label: f.departement.nom, to: `/departements/${f.departement.slug}` },
              { label: f.specialite.nom, to: `/specialites/${f.specialite.slug}` },
              { label: f.nom },
            ]}
          />
          <header className="page-header">
            <h1>{f.nom}</h1>
            {f.resume && <p className="lead">{f.resume}</p>}
            <ValidationBanner validation={f.validation} />
          </header>

          {f.urgences.length > 0 && (
            <aside className="urgence-strip" aria-label="Urgences associées : signes d’alerte">
              <span className="urgence-strip-title">
                {f.urgences.length > 1 ? 'Urgences associées' : 'Urgence associée'}
              </span>
              <ul>
                {f.urgences.map((u) => (
                  <li key={u.id}>
                    <span className="urgence-signes">{u.signes_alerte || 'Signes de gravité'}</span> (
                    <Link to={`/urgences/${u.slug}`}>{u.nom}</Link>)
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="fiche-layout">
            <Tabs fiche={f} />

            <div className="fiche-side">
              <Related title="Symptômes" count={f.symptomes.length}>
                <ul className="chips">
                  {f.symptomes.map((s) => (
                    <li key={s.id}>
                      <Link to={`/symptomes/${s.slug}`} className={`chip freq-${s.frequence}`}>
                        {s.nom}
                        <span className="chip-meta">{FREQUENCES[s.frequence]}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Related>

              <Related title="Médicaments" count={f.molecules.length}>
                <ul className="side-list">
                  {f.molecules.map((m) => (
                    <li key={m.id}>
                      <Link to={`/molecules/${m.slug}`}>
                        <strong>{m.dci}</strong>
                      </Link>
                      <span className={`tag ligne-${m.ligne}`}>{LIGNES[m.ligne]}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/prescriptions?pathologie=${f.slug}`} className="btn btn-secondary btn-small">
                  Rédiger une prescription
                </Link>
              </Related>

              <Related title="Calculatrices et scores" count={f.scores.length}>
                <ul className="side-list">
                  {f.scores.map((s) => (
                    <li key={s.id}>
                      <Link to={`/scores/${s.slug}`}>{s.nom}</Link>
                    </li>
                  ))}
                </ul>
              </Related>

              <Related title="Sources" count={f.sources.length}>
                <ul className="side-list sources-mini">
                  {f.sources.map((s) => (
                    <li key={s.id}>
                      <span className={`niveau niveau-${s.niveau}`} title={NIVEAUX_SOURCE[s.niveau]}>
                        N{s.niveau}
                      </span>
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noreferrer">
                          {s.titre}
                        </a>
                      ) : (
                        <span>{s.titre}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </Related>
            </div>
          </div>
        </article>
      )}
    </AsyncView>
  );
}
