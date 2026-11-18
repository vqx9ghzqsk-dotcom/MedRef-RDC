import { Link, useParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { CalculatorForm } from '../components/CalculatorForm.jsx';
import { getCalculator } from '../../core/calculators/index.js';
import { TYPES_SCORE } from '../../core/labels.js';

export function ScoresPage() {
  const { api } = useServices();
  const state = useAsync(() => api.scores(), [api]);

  return (
    <>
      <Breadcrumb items={[{ label: 'Calculatrices' }]} />
      <header className="page-header">
        <h1>Calculatrices et scores</h1>
        <p className="lead">
          Les calculs se font sur votre appareil et fonctionnent sans connexion une fois la page ouverte.
        </p>
      </header>
      <AsyncView state={state}>
        {(list) => (
          <>
            {Object.entries(TYPES_SCORE).map(([type, title]) => (
              <section key={type} className="section">
                <h2 className="section-title">{title}</h2>
                <ul className="list-links">
                  {list
                    .filter((s) => s.type === type)
                    .map((s) => (
                      <li key={s.id}>
                        <Link to={`/scores/${s.slug}`}>
                          <span>
                            {s.nom}
                            {s.description && <span className="row-sub">{s.description}</span>}
                          </span>
                          {s.code && <span className="count">Calcul</span>}
                        </Link>
                      </li>
                    ))}
                </ul>
              </section>
            ))}
          </>
        )}
      </AsyncView>
    </>
  );
}

export function ScorePage() {
  const { slug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.score(slug), [api, slug]);

  return (
    <AsyncView state={state}>
      {(s) => (
        <article>
          <Breadcrumb items={[{ label: 'Calculatrices', to: '/scores' }, { label: s.nom }]} />
          <header className="page-header">
            <h1>{s.nom}</h1>
            {s.description && <p className="lead">{s.description}</p>}
          </header>
          <div className="score-layout">
            {s.code && getCalculator(s.code) ? (
              <section className="card">
                <h2>Calcul</h2>
                <CalculatorForm code={s.code} />
              </section>
            ) : (
              <section className="card">
                <h2>Utilisation</h2>
                <p className="muted">
                  Score ou classification descriptif : se reporter aux critères d’interprétation ci-contre.
                </p>
              </section>
            )}
            <div>
              {s.interpretation && (
                <section className="card">
                  <h2>Interprétation</h2>
                  <p>{s.interpretation}</p>
                  {s.reference && <p className="muted">Référence : {s.reference}</p>}
                </section>
              )}
              {s.pathologies.length > 0 && (
                <section className="related">
                  <h2>Utilisé dans</h2>
                  <ul className="side-list">
                    {s.pathologies.map((p) => (
                      <li key={p.id}>
                        <Link to={`/pathologies/${p.slug}`}>{p.nom}</Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </article>
      )}
    </AsyncView>
  );
}
