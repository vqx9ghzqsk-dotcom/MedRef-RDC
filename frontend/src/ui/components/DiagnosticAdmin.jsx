import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useServices } from '../context/services.jsx';

const TYPES = {
  hypothese_manquante: 'Hypothèse manquante',
  hypothese_inadaptee: 'Hypothèse inadaptée',
  fiche: 'Erreur dans une fiche',
  traitement: 'Traitement',
  autre: 'Autre',
};

const pct = (x, n) => (n ? `${Math.round((100 * x) / n)} %` : '—');

/**
 * Calibration de l'aide au diagnostic : diagnostics retenus par les utilisateurs (anonymes),
 * part du bon diagnostic en 1re position et dans les 3 premiers, fiches le plus souvent
 * manquées, et signalements à traiter.
 */
export function DiagnosticAdmin() {
  const { api } = useServices();
  const [d, setD] = useState(null);
  const [erreur, setErreur] = useState(null);
  const charger = useCallback(
    () =>
      api
        .adminCalibrationDiagnostic()
        .then(setD)
        .catch((ex) => setErreur(ex.message)),
    [api],
  );
  useEffect(() => {
    charger();
  }, [charger]);
  if (erreur) return <p className="form-error">{erreur}</p>;
  if (!d) return <p className="muted">Chargement…</p>;
  const traiter = async (id) => {
    await api.adminTraiterSignalementDiagnostic(id);
    charger();
  };
  return (
    <div className="diag-admin">
      <section className="card">
        <h2>Calibration du moteur</h2>
        {d.total ? (
          <p>
            <b>{d.total}</b> diagnostics retenus · bon diagnostic en 1re position :{' '}
            <b>{pct(d.premier, d.total)}</b> · dans les 3 premiers : <b>{pct(d.trois, d.total)}</b> · absent
            des hypothèses : {pct(d.absent, d.total)}
          </p>
        ) : (
          <p className="muted">Aucun diagnostic retenu enregistré pour l’instant.</p>
        )}
        {d.fiches.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Fiche retenue</th>
                <th>Cas</th>
                <th>En 1re position</th>
                <th>Absente des hypothèses</th>
              </tr>
            </thead>
            <tbody>
              {d.fiches.map((f) => (
                <tr key={f.slug}>
                  <td>
                    <Link to={`/pathologies/${f.slug}`}>{f.nom}</Link>
                  </td>
                  <td>{f.total}</td>
                  <td>{pct(f.premier, f.total)}</td>
                  <td>{f.absent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
      <section className="card">
        <h2>Signalements</h2>
        {d.signalements.length ? (
          <ul className="diag-liste">
            {d.signalements.map((s) => (
              <li key={s.id}>
                <span className={`tag ${s.statut === 'nouveau' ? 'tag-pending' : 'tag-ok'}`}>
                  {s.statut === 'nouveau' ? 'Nouveau' : 'Traité'}
                </span>{' '}
                <b>{TYPES[s.type] || s.type}</b>
                {s.slug && (
                  <>
                    {' '}
                    · <Link to={`/pathologies/${s.slug}`}>{s.pathologie}</Link>
                  </>
                )}{' '}
                · {s.message}
                {s.statut === 'nouveau' && (
                  <>
                    {' '}
                    <button
                      type="button"
                      className="btn btn-secondary btn-small"
                      onClick={() => traiter(s.id)}
                    >
                      Marquer traité
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="muted">Aucun signalement.</p>
        )}
      </section>
    </div>
  );
}
