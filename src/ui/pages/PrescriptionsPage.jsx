import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePrescriptions } from '../hooks/usePrescriptions.js';
import { useAuth } from '../context/auth.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { Empty, Loading } from '../components/Status.jsx';
import { OrdonnanceGuidee } from '../components/OrdonnanceGuidee.jsx';
import { CATEGORIES_EXAMEN, NIVEAUX_SOINS, ORDRES, PROFILS, STRUCTURES } from '../../core/labels.js';
import { droitOrdonnance } from '../../core/prescription.js';

function SyncBadge({ item }) {
  if (item.sync_status === 'synced') return <span className="tag tag-ok">Synchronisée</span>;
  if (item.sync_status === 'error')
    return <span className="tag tag-error">Non envoyée : {item.sync_error}</span>;
  return <span className="tag tag-pending">En attente</span>;
}

function PrescriptionItem({ item, onRemove }) {
  const [confirming, setConfirming] = useState(false);
  const date = new Date(item.updated_at).toLocaleString('fr-FR', { dateStyle: 'medium', timeStyle: 'short' });
  const c = item.contenu || {};
  const diagnostics = c.version === 2 ? c.diagnostics || [] : c.pathologie ? [c.pathologie] : [];
  return (
    <li className="rx-item">
      <div className="rx-item-head">
        <h3>{item.patient_label || 'Patient non précisé'}</h3>
        <SyncBadge item={item} />
      </div>
      <p className="muted">
        {date}
        {diagnostics.map((d) => (
          <span key={d.slug}>
            {', '}
            <Link to={`/pathologies/${d.slug}`}>{d.nom}</Link>
          </span>
        ))}
      </p>
      <ul className="rx-item-lines">
        {c.lignes?.map((l, i) => (
          <li key={i}>
            <strong>{l.dci}</strong>
            {l.posologie && `, ${l.posologie}`}
            {l.duree && `, ${l.duree}`}
          </li>
        ))}
      </ul>
      {c.version !== 2 && c.notes && <p>{c.notes}</p>}
      <div className="rx-item-actions">
        <Link to={`/prescriptions/${item.id}`} className="btn btn-secondary btn-small">
          Ouvrir et imprimer
        </Link>
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

function BarreSynchro({ canSync, online, pending, syncState, sync }) {
  return (
    <div className="sync-bar no-print" role="status">
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
            {!online && 'Hors connexion : envoi au retour du réseau ou à la réouverture de l’application.'}
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
          Ordonnance guidée par les fiches : diagnostics, bilans, traitements avec calcul de dose au poids et
          durées de la fiche. Utilisable sans réseau ; envoi automatique au retour du réseau ou à la réouverture
          de l’application.
        </p>
      </header>

      <BarreSynchro canSync={canSync} online={online} pending={pending} syncState={syncState} sync={sync} />

      <OrdonnanceGuidee onCreate={create} />

      <section aria-labelledby="rx-list-title" className="rx-historique">
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
          <Empty>Aucune prescription pour l’instant.</Empty>
        )}
      </section>
    </>
  );
}

// ------------------------------------------------------------------ ordonnance imprimable

const sansMarkdown = (t) =>
  String(t || '')
    .replace(/\*\*/g, '')
    .replace(/^- /gm, '• ');

function EnTete({ user, droit }) {
  if (!droit.entete) return <p className="ordo-avertissement">{droit.motif}</p>;
  const profession = [PROFILS[user.profil], user.specialite_exercee].filter(Boolean).join(' — ');
  return (
    <div className="ordo-entete">
      <p className="ordo-prescripteur">{user.nom}</p>
      <p>{profession}</p>
      {user.numero_ordre && (
        <p>
          {ORDRES[user.ordre_professionnel] || 'Ordre professionnel'} : n° {user.numero_ordre}
        </p>
      )}
      {(user.structure_nom || user.structure_type) && (
        <p>
          {[user.structure_nom, STRUCTURES[user.structure_type], user.province].filter(Boolean).join(' — ')}
        </p>
      )}
    </div>
  );
}

function PatientLigne({ patient }) {
  if (!patient) return null;
  const morceaux = [
    patient.code,
    patient.age?.valeur && `${patient.age.valeur} ${patient.age.unite}`,
    patient.sexe === 'F' ? 'féminin' : patient.sexe === 'M' ? 'masculin' : null,
    patient.poids && `${patient.poids} kg`,
    patient.taille && `${patient.taille} cm`,
    patient.surface && `SC ${String(patient.surface).replace('.', ',')} m²`,
    patient.grossesse && `enceinte${patient.trimestre ? ` (T${patient.trimestre})` : ''}`,
    patient.allaitement && 'allaitement',
  ].filter(Boolean);
  return (
    <>
      <p>
        <strong>Patient :</strong> {morceaux.join(', ') || 'non précisé'}
      </p>
      {patient.allergies && (
        <p>
          <strong>Allergies :</strong> {patient.allergies}
        </p>
      )}
    </>
  );
}

export function OrdonnancePage() {
  const { id } = useParams();
  const { items, loading } = usePrescriptions();
  const { user } = useAuth();
  const [format, setFormat] = useState('A4');
  const item = items.find((i) => i.id === id);

  // Taille de page pour l'impression (A4 ou A5)
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `@page { size: ${format}; margin: 12mm; }`;
    document.head.appendChild(style);
    return () => style.remove();
  }, [format]);

  if (loading) return <Loading />;
  if (!item) {
    return (
      <Empty>
        Prescription introuvable sur cet appareil. <Link to="/prescriptions">Retour aux prescriptions</Link>
      </Empty>
    );
  }
  const c = item.contenu || {};
  const droit = droitOrdonnance(user);
  const nonValide =
    (c.diagnostics || []).some((d) => d.statut && d.statut !== 'valide') ||
    (c.traitements || []).some((t) => t.a_valider);
  const date = new Date(item.updated_at).toLocaleDateString('fr-FR', { dateStyle: 'long' });
  const traitements = c.version === 2 ? c.traitements || [] : c.lignes || [];
  const bilans = c.bilans || [];

  return (
    <>
      <Breadcrumb items={[{ label: 'Prescriptions', to: '/prescriptions' }, { label: 'Ordonnance' }]} />
      <div className="ordo-barre no-print">
        <label>
          Format{' '}
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="A4">A4</option>
            <option value="A5">A5</option>
          </select>
        </label>
        <button type="button" className="btn btn-primary" onClick={() => window.print()}>
          Imprimer ou enregistrer en PDF
        </button>
        <Link to="/prescriptions" className="btn btn-ghost">
          Retour
        </Link>
      </div>

      <article className={`ordonnance ordonnance-${format.toLowerCase()}`} aria-label="Ordonnance">
        <EnTete user={user} droit={droit} />
        <p className="ordo-date">Le {date}</p>
        <PatientLigne patient={c.patient} />
        {(c.diagnostics || []).length > 0 && (
          <p>
            <strong>Diagnostic{c.diagnostics.length > 1 ? 's' : ''} :</strong>{' '}
            {c.diagnostics.map((d) => (d.forme ? `${d.nom} (${d.forme})` : d.nom)).join(' ; ')}
          </p>
        )}

        {traitements.length > 0 && (
          <section>
            <h2>Traitement</h2>
            <ol className="ordo-traitements">
              {traitements.map((t, i) => (
                <li key={i}>
                  <strong>{t.dci}</strong>
                  {t.posologie && <> : {t.posologie}</>}
                  {t.duree && <>, pendant {t.duree}</>}
                  {t.quantite && <span className="ordo-qsp"> — Qté : {t.quantite}</span>}
                </li>
              ))}
            </ol>
          </section>
        )}

        {bilans.length > 0 && (
          <section>
            <h2>Examens demandés</h2>
            <ul>
              {bilans.map((b) => (
                <li key={b.slug}>
                  {b.nom}
                  {CATEGORIES_EXAMEN[b.categorie] && (
                    <span className="muted"> ({CATEGORIES_EXAMEN[b.categorie]})</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(c.conseils || (c.version !== 2 && c.notes)) && (
          <section>
            <h2>Conseils</h2>
            <p className="ordo-texte">{c.conseils || c.notes}</p>
          </section>
        )}

        {(c.transferts || []).length > 0 && (
          <section>
            <h2>Revenir ou être transféré si ({NIVEAUX_SOINS[c.niveau]?.label || 'niveau de soins'})</h2>
            {c.transferts.map((x) => (
              <p key={x.diagnostic} className="ordo-texte">
                <strong>{x.diagnostic} :</strong>
                {'\n'}
                {sansMarkdown(x.texte)}
              </p>
            ))}
          </section>
        )}

        <div className="ordo-signature">
          <p>Signature et cachet</p>
        </div>

        <footer className="ordo-pied">
          <p>
            Aide à la prescription MedRef RDC — la décision et la responsabilité restent celles du
            prescripteur.
          </p>
          {nonValide && <p>Contenu de référence en cours de validation médicale.</p>}
        </footer>
      </article>

      {(c.alertes || []).length > 0 && (
        <section className="card no-print">
          <h2>Alertes relevées à la rédaction</h2>
          <ul className="alertes-dose">
            {c.alertes.map((a) => (
              <li key={a} className="alerte-dose">
                {a}
              </li>
            ))}
          </ul>
        </section>
      )}
      {c.traitements?.some((t) => t.calcul) && (
        <section className="card no-print">
          <h2>Détail des calculs</h2>
          <ul>
            {c.traitements
              .filter((t) => t.calcul)
              .map((t) => (
                <li key={t.dci}>
                  <strong>{t.dci}</strong> : {t.calcul}
                </li>
              ))}
          </ul>
        </section>
      )}
    </>
  );
}
