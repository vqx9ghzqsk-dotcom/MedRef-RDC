import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { usePrescriptions } from '../hooks/usePrescriptions.js';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { Empty, Loading } from '../components/Status.jsx';

const emptyLine = () => ({ dci: '', posologie: '', duree: '' });

function PrescriptionForm({ onCreate }) {
  const { api } = useServices();
  const [params, setParams] = useSearchParams();
  const pathologieSlug = params.get('pathologie');
  const [label, setLabel] = useState('');
  const [lignes, setLignes] = useState([emptyLine()]);
  const [notes, setNotes] = useState('');
  const [source, setSource] = useState(null);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false);

  // Pré-remplissage depuis une fiche pathologie (molécules de 1re intention).
  useEffect(() => {
    if (!pathologieSlug) return undefined;
    let cancelled = false;
    api
      .pathologie(pathologieSlug)
      .then((f) => {
        if (cancelled) return;
        const meds = f.molecules.filter((m) => m.ligne === 'premiere');
        setSource({ nom: f.nom, slug: f.slug });
        if (meds.length) setLignes(meds.map((m) => ({ ...emptyLine(), dci: m.dci })));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [api, pathologieSlug]);

  const setLine = (i, key, value) =>
    setLignes((ls) => ls.map((l, j) => (j === i ? { ...l, [key]: value } : l)));

  const submit = async (e) => {
    e.preventDefault();
    const filled = lignes.filter((l) => l.dci.trim());
    if (!filled.length) {
      setError('Ajoutez au moins un médicament.');
      return;
    }
    setError(null);
    await onCreate({
      patient_label: label,
      contenu: {
        lignes: filled.map((l) => ({
          dci: l.dci.trim(),
          posologie: l.posologie.trim(),
          duree: l.duree.trim(),
        })),
        notes: notes.trim(),
        pathologie: source,
      },
    });
    setLabel('');
    setLignes([emptyLine()]);
    setNotes('');
    setSource(null);
    setSaved(true);
    if (pathologieSlug) setParams({}, { replace: true });
  };

  return (
    <form className="card prescription-form" onSubmit={submit} noValidate>
      <h2>Nouvelle prescription</h2>
      {source && (
        <p className="muted">
          Pré-remplie depuis <Link to={`/pathologies/${source.slug}`}>{source.nom}</Link>. Complétez posologie
          et durée selon le patient.
        </p>
      )}
      <div className="field">
        <label htmlFor="rx-label">Patient (initiales, âge, poids…)</label>
        <input id="rx-label" value={label} maxLength={190} onChange={(e) => setLabel(e.target.value)} />
        <p className="hint">
          Évitez le nom complet : ces données restent sur l’appareil jusqu’à la synchronisation.
        </p>
      </div>
      <fieldset className="rx-lines">
        <legend>Médicaments</legend>
        {lignes.map((l, i) => (
          <div className="rx-line" key={i}>
            <div className="field">
              <label htmlFor={`rx-dci-${i}`}>Molécule (DCI)</label>
              <input id={`rx-dci-${i}`} value={l.dci} onChange={(e) => setLine(i, 'dci', e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor={`rx-pos-${i}`}>Posologie</label>
              <input
                id={`rx-pos-${i}`}
                value={l.posologie}
                onChange={(e) => setLine(i, 'posologie', e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor={`rx-duree-${i}`}>Durée</label>
              <input
                id={`rx-duree-${i}`}
                value={l.duree}
                onChange={(e) => setLine(i, 'duree', e.target.value)}
              />
            </div>
            {lignes.length > 1 && (
              <button
                type="button"
                className="btn btn-ghost btn-small"
                onClick={() => setLignes((ls) => ls.filter((_, j) => j !== i))}
                aria-label={`Retirer le médicament ${i + 1}`}
              >
                Retirer
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary btn-small"
          onClick={() => setLignes((ls) => [...ls, emptyLine()])}
        >
          Ajouter un médicament
        </button>
      </fieldset>
      <div className="field">
        <label htmlFor="rx-notes">Consignes</label>
        <textarea id="rx-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="btn btn-primary">
        Enregistrer la prescription
      </button>
      {saved && (
        <p className="form-success" role="status">
          Prescription enregistrée sur cet appareil.
        </p>
      )}
    </form>
  );
}

function SyncBadge({ item }) {
  if (item.sync_status === 'synced') return <span className="tag tag-ok">Synchronisée</span>;
  if (item.sync_status === 'error')
    return <span className="tag tag-error">Non envoyée : {item.sync_error}</span>;
  return <span className="tag tag-pending">En attente</span>;
}

function PrescriptionItem({ item, onRemove }) {
  const [confirming, setConfirming] = useState(false);
  const date = new Date(item.updated_at).toLocaleString('fr-FR', { dateStyle: 'medium', timeStyle: 'short' });
  return (
    <li className="rx-item">
      <div className="rx-item-head">
        <h3>{item.patient_label || 'Patient non précisé'}</h3>
        <SyncBadge item={item} />
      </div>
      <p className="muted">
        {date}
        {item.contenu?.pathologie && (
          <>
            {', '}
            <Link to={`/pathologies/${item.contenu.pathologie.slug}`}>{item.contenu.pathologie.nom}</Link>
          </>
        )}
      </p>
      <ul className="rx-item-lines">
        {item.contenu?.lignes?.map((l, i) => (
          <li key={i}>
            <strong>{l.dci}</strong>
            {l.posologie && `, ${l.posologie}`}
            {l.duree && `, ${l.duree}`}
          </li>
        ))}
      </ul>
      {item.contenu?.notes && <p>{item.contenu.notes}</p>}
      <div className="rx-item-actions">
        {confirming ? (
          <>
            <span>Supprimer cette prescription ?</span>
            <button type="button" className="btn btn-danger btn-small" onClick={() => onRemove(item.id)}>
              Supprimer
            </button>
            <button type="button" className="btn btn-ghost btn-small" onClick={() => setConfirming(false)}>
              Annuler
            </button>
          </>
        ) : (
          <button type="button" className="btn btn-ghost btn-small" onClick={() => setConfirming(true)}>
            Supprimer
          </button>
        )}
      </div>
    </li>
  );
}

export function PrescriptionsPage() {
  const { items, loading, online, canSync, syncState, sync, create, remove } = usePrescriptions();
  const pending = items.filter((i) => i.sync_status !== 'synced').length;

  return (
    <>
      <Breadcrumb items={[{ label: 'Prescriptions' }]} />
      <header className="page-header">
        <h1>Prescriptions</h1>
        <p className="lead">
          Rédigez vos prescriptions même sans réseau ; elles sont envoyées dès que la connexion revient.
        </p>
      </header>

      <div className="sync-bar" role="status">
        {!canSync ? (
          <p>
            Vos prescriptions sont enregistrées sur cet appareil uniquement.{' '}
            <Link to="/connexion" state={{ from: '/prescriptions' }}>
              Connectez-vous
            </Link>{' '}
            pour les sauvegarder en ligne.
          </p>
        ) : (
          <>
            <p>
              {pending ? (
                <span className="tag tag-pending">{pending} en attente</span>
              ) : (
                <span className="tag tag-ok">Tout est synchronisé</span>
              )}{' '}
              {!online && 'Hors connexion : envoi automatique au retour du réseau.'}
              {syncState.error && <span className="form-error"> Échec de l’envoi : {syncState.error}</span>}
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-small"
              onClick={sync}
              disabled={!online || syncState.running}
            >
              {syncState.running ? 'Synchronisation…' : 'Synchroniser maintenant'}
            </button>
          </>
        )}
      </div>

      <div className="rx-layout">
        <PrescriptionForm onCreate={create} />
        <section aria-labelledby="rx-list-title">
          <h2 id="rx-list-title" className="section-title">
            Mes prescriptions
          </h2>
          {loading ? (
            <Loading />
          ) : items.length ? (
            <ul className="rx-list">
              {items.map((item) => (
                <PrescriptionItem key={item.id} item={item} onRemove={remove} />
              ))}
            </ul>
          ) : (
            <Empty>Aucune prescription pour l’instant. Rédigez-en une avec le formulaire.</Empty>
          )}
        </section>
      </div>
    </>
  );
}
