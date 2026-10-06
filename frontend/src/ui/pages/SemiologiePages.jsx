import { useEffect, useId, useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView, Empty } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { RichText } from '../components/RichText.jsx';
import { initiale } from '../../core/glossaire.js';

const sansAccents = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

function OngletsSemiologie({ actif }) {
  return (
    <nav className="segmented" aria-label="Sémiologie">
      <Link
        to="/glossaire"
        className="segmented-btn"
        aria-current={actif === 'glossaire' ? 'page' : undefined}
      >
        Glossaire
      </Link>
      <Link
        to="/syndromes"
        className="segmented-btn"
        aria-current={actif === 'syndromes' ? 'page' : undefined}
      >
        Syndromes
      </Link>
    </nav>
  );
}

// ================================================================== Glossaire

export function GlossairePage() {
  const { api } = useServices();
  const state = useAsync(() => api.glossaire(), [api]);
  const [q, setQ] = useState('');
  const { hash } = useLocation();
  const champ = useId();

  // Lien depuis une infobulle (/glossaire#slug) : faire défiler jusqu'au terme
  useEffect(() => {
    if (hash && state.data) document.getElementById(hash.slice(1))?.scrollIntoView?.({ block: 'center' });
  }, [hash, state.data]);

  return (
    <>
      <Breadcrumb items={[{ label: 'Glossaire sémiologique' }]} />
      <header className="page-header">
        <h1>Glossaire sémiologique</h1>
        <p className="lead">
          Les termes employés dans la sémiologie des fiches. Dans une fiche, touchez un terme souligné pour
          afficher sa définition.
        </p>
        <OngletsSemiologie actif="glossaire" />
      </header>
      <div className="field">
        <label htmlFor={champ}>Rechercher un terme</label>
        <input
          id={champ}
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="ex. Kernig, matité, tirage"
          autoComplete="off"
        />
      </div>
      <AsyncView state={state}>
        {(termes) => <ListeGlossaire termes={termes} q={q} cible={hash.slice(1)} />}
      </AsyncView>
    </>
  );
}

function ListeGlossaire({ termes, q, cible }) {
  const filtres = useMemo(() => {
    const n = sansAccents(q.trim());
    if (!n) return termes;
    return termes.filter((t) =>
      [t.terme, t.definition, ...t.variantes].some((x) => sansAccents(x).includes(n)),
    );
  }, [termes, q]);
  const groupes = useMemo(() => {
    const m = new Map();
    for (const t of filtres) {
      const l = initiale(t.terme);
      if (!m.has(l)) m.set(l, []);
      m.get(l).push(t);
    }
    return [...m.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtres]);

  if (!filtres.length) return <Empty>Aucun terme ne correspond à « {q} ».</Empty>;
  return (
    <>
      <p className="muted" role="status">
        {filtres.length} terme{filtres.length > 1 ? 's' : ''}
      </p>
      {groupes.map(([lettre, liste]) => (
        <section key={lettre} className="alpha-group" aria-labelledby={`lettre-${lettre}`}>
          <h2 id={`lettre-${lettre}`} className="alpha-letter">
            {lettre}
          </h2>
          <dl className="glossaire-liste">
            {liste.map((t) => (
              <div key={t.slug} id={t.slug} className={`glossaire-terme${cible === t.slug ? ' cible' : ''}`}>
                <dt>{t.terme}</dt>
                <dd>
                  {t.definition}
                  {t.variantes.length > 0 && (
                    <span className="muted"> Aussi : {t.variantes.join(', ')}.</span>
                  )}
                  {t.syndrome && (
                    <>
                      {' '}
                      <Link to={`/syndromes/${t.syndrome.slug}`}>{t.syndrome.nom}</Link>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </>
  );
}

// ================================================================== Syndromes

export function SyndromesPage() {
  const { api } = useServices();
  const state = useAsync(() => api.syndromes(), [api]);
  return (
    <>
      <Breadcrumb items={[{ label: 'Syndromes' }]} />
      <header className="page-header">
        <h1>Syndromes</h1>
        <p className="lead">
          Regroupements de signes cliniques et biologiques. Chaque syndrome renvoie aux symptômes qui le
          composent et aux pathologies qui le présentent.
        </p>
        <OngletsSemiologie actif="syndromes" />
      </header>
      <AsyncView state={state}>
        {(syndromes) => (
          <ul className="patho-list">
            {syndromes.map((s) => (
              <li key={s.slug}>
                <Link to={`/syndromes/${s.slug}`} className="patho-name">
                  {s.nom}
                </Link>
                {s.nb_pathologies > 0 && (
                  <span className="count">
                    {s.nb_pathologies} fiche{s.nb_pathologies > 1 ? 's' : ''}
                  </span>
                )}
                {s.definition && <p className="patho-resume">{s.definition}</p>}
              </li>
            ))}
          </ul>
        )}
      </AsyncView>
    </>
  );
}

export function SyndromePage() {
  const { slug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.syndrome(slug), [api, slug]);
  return (
    <AsyncView state={state}>
      {(s) => (
        <article>
          <Breadcrumb items={[{ label: 'Syndromes', to: '/syndromes' }, { label: s.nom }]} />
          <header className="page-header">
            <h1>{s.nom}</h1>
            {s.definition && <p className="lead">{s.definition}</p>}
          </header>
          {s.elements && (
            <section className="card">
              <h2>Éléments sémiologiques</h2>
              <RichText text={s.elements} headingLevel={3} glossaire />
            </section>
          )}
          {s.symptomes.length > 0 && (
            <section className="section">
              <h2>Symptômes</h2>
              <ul className="chips">
                {s.symptomes.map((sy) => (
                  <li key={sy.slug}>
                    <Link to={`/symptomes/${sy.slug}`} className="chip">
                      {sy.nom}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section className="section">
            <h2>Pathologies qui présentent ce syndrome</h2>
            {s.pathologies.length ? (
              <ul className="patho-list">
                {s.pathologies.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/pathologies/${p.slug}?onglet=diagnostic`} className="patho-name">
                      {p.nom}
                    </Link>
                    <span className="row-sub">{p.specialite}</span>
                    <p className="patho-resume">
                      Forme{p.formes.length > 1 ? 's' : ''} : {p.formes.join(' ; ')}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>Aucune fiche n’associe encore ce syndrome.</Empty>
            )}
          </section>
          {s.termes.length > 0 && (
            <section className="section">
              <h2>Termes du glossaire</h2>
              <dl className="glossaire-liste">
                {s.termes.map((t) => (
                  <div key={t.slug} className="glossaire-terme">
                    <dt>
                      <Link to={`/glossaire#${t.slug}`}>{t.terme}</Link>
                    </dt>
                    <dd>{t.definition}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </article>
      )}
    </AsyncView>
  );
}
