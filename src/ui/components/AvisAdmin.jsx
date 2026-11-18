import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { LienCible } from './Avis.jsx';
import { PROFILS, STATUTS_AVIS, TYPES_AVIS } from '../../core/labels.js';

/**
 * Modération des avis (lot E) : publier, demander un complément ou rejeter (motif obligatoire),
 * traiter les signalements, et saisir les coordonnées officielles de pharmacovigilance (admin).
 */

function Decision({ avis, onFait }) {
  const { api } = useServices();
  const [motif, setMotif] = useState('');
  const [erreur, setErreur] = useState(null);
  const decider = async (decision) => {
    setErreur(null);
    try {
      await api.adminModererAvis(avis.id, decision, motif.trim() || undefined);
      onFait();
    } catch (ex) {
      setErreur(ex.details?.motif || ex.message);
    }
  };
  return (
    <div className="avis-decision">
      <input
        aria-label={`Motif pour « ${avis.titre} »`}
        value={motif}
        maxLength={2000}
        onChange={(e) => setMotif(e.target.value)}
        placeholder="Motif (obligatoire pour un complément ou un rejet)"
      />
      <div className="ordo-actions">
        <button type="button" className="btn btn-primary btn-small" onClick={() => decider('publier')}>
          Publier
        </button>
        <button type="button" className="btn btn-secondary btn-small" onClick={() => decider('complement')}>
          Demander un complément
        </button>
        <button type="button" className="btn btn-danger btn-small" onClick={() => decider('rejeter')}>
          Rejeter
        </button>
      </div>
      {erreur && <p className="form-error">{erreur}</p>}
    </div>
  );
}

function Contact({ estAdmin }) {
  const { api } = useServices();
  const [contact, setContact] = useState('');
  const [etat, setEtat] = useState(null);
  useEffect(() => {
    api
      .pharmacovigilance()
      .then((d) => setContact(d?.contact || ''))
      .catch(() => {});
  }, [api]);
  if (!estAdmin) return null;
  return (
    <section className="card">
      <h3>Coordonnées officielles de pharmacovigilance</h3>
      <p className="hint">
        Affichées avec chaque avis sur un effet indésirable grave ou un produit suspect. À recopier depuis une
        source officielle de l’ACOREP ; ne rien saisir d’incertain.
      </p>
      <textarea
        aria-label="Coordonnées de pharmacovigilance"
        rows={3}
        maxLength={2000}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <div className="ordo-actions">
        <button
          type="button"
          className="btn btn-secondary btn-small"
          onClick={async () => {
            try {
              await api.adminSavePharmacovigilance(contact.trim() || null);
              setEtat('Enregistré.');
            } catch (ex) {
              setEtat(ex.message);
            }
          }}
        >
          Enregistrer les coordonnées
        </button>
        {etat && <span className="muted">{etat}</span>}
      </div>
    </section>
  );
}

export function AvisAdmin({ user }) {
  const { api } = useServices();
  const [statut, setStatut] = useState('soumis');
  const [liste, setListe] = useState(null);
  const [signalements, setSignalements] = useState([]);
  const [erreur, setErreur] = useState(null);

  const charger = useCallback(() => {
    api
      .adminAvis(statut)
      .then(setListe)
      .catch((e) => setErreur(e.message));
    api
      .adminSignalements()
      .then(setSignalements)
      .catch(() => {});
  }, [api, statut]);
  useEffect(() => charger(), [charger]);

  return (
    <section aria-label="Avis">
      {signalements.length > 0 && (
        <section className="card">
          <h3>Signalements à traiter ({signalements.length})</h3>
          <ul className="actu-liste">
            {signalements.map((s) => (
              <li key={s.id} className="avis-carte">
                <p>
                  <Link to={`/avis/${s.avis_id}`}>{s.avis_titre}</Link> — « {s.motif} »
                  {s.auteur_nom && <span className="row-sub">signalé par {s.auteur_nom}</span>}
                </p>
                {s.commentaire_texte && <p className="actu-resume">Commentaire : {s.commentaire_texte}</p>}
                <div className="ordo-actions">
                  {s.commentaire_id && !s.commentaire_masque && (
                    <button
                      type="button"
                      className="btn btn-danger btn-small"
                      onClick={() => api.adminTraiterSignalement(s.id, true).then(charger)}
                    >
                      Masquer le commentaire
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-secondary btn-small"
                    onClick={() => api.adminTraiterSignalement(s.id, false).then(charger)}
                  >
                    Marquer comme traité
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="field">
        <label htmlFor="avis-statut">Statut</label>
        <select id="avis-statut" value={statut} onChange={(e) => setStatut(e.target.value)}>
          {Object.entries(STATUTS_AVIS).map(([k, l]) => (
            <option key={k} value={k}>
              {l}
            </option>
          ))}
          <option value="">Tous</option>
        </select>
      </div>
      {erreur && <p className="form-error">{erreur}</p>}
      {liste && !liste.length && <p className="muted">Aucun avis pour ce statut.</p>}
      {liste && liste.length > 0 && (
        <ul className="actu-liste">
          {liste.map((a) => (
            <li key={a.id} className={`avis-carte${a.grave ? ' avis-grave' : ''}`}>
              <p className="actu-type">
                {TYPES_AVIS[a.type]}
                {a.grave && ' · grave'} · {STATUTS_AVIS[a.statut]}
                {a.signalements > 0 && ` · ${a.signalements} signalement${a.signalements > 1 ? 's' : ''}`}
              </p>
              <h3>
                <Link to={`/avis/${a.id}`}>{a.titre}</Link>
              </h3>
              <p>
                <LienCible cible={a.cible} />
                <span className="row-sub">
                  {[a.auteur_nom, PROFILS[a.auteur_profil]].filter(Boolean).join(', ')} · {a.votes} vote
                  {a.votes > 1 ? 's' : ''} · {a.commentaires} commentaire{a.commentaires > 1 ? 's' : ''}
                </span>
              </p>
              {a.auteur_id !== user?.id && a.statut !== 'retire' && <Decision avis={a} onFait={charger} />}
            </li>
          ))}
        </ul>
      )}
      <Contact estAdmin={user?.role === 'admin'} />
    </section>
  );
}
