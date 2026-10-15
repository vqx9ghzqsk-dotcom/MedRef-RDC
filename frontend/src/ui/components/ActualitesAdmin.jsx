import { useCallback, useEffect, useState } from 'react';
import { useServices } from '../context/services.jsx';
import { SelectField, TextArea, TextField } from './AdminForm.jsx';
import { STATUTS_ACTUALITE, TYPES_ACTUALITE } from '../../core/labels.js';

/**
 * Actualités de la page d'accueil (lot D) : alertes sanitaires, pharmacovigilance, protocoles,
 * innovations. Source obligatoire. Un relecteur « medecin » propose un brouillon ; seul un
 * administrateur publie.
 */

/** Date du jour en heure locale (et non UTC), au format AAAA-MM-JJ. */
const aujourdHui = () => {
  const d = new Date();
  const deux = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${deux(d.getMonth() + 1)}-${deux(d.getDate())}`;
};

const vide = () => ({
  id: null,
  type: 'alerte_sanitaire',
  titre: '',
  resume: '',
  source_titre: '',
  source_url: '',
  zone: '',
  pathologie_slug: '',
  molecule_slug: '',
  publie_le: aujourdHui(),
  expire_le: '',
  statut: 'brouillon',
});

function EditeurActualite({ initial, estAdmin, onFini }) {
  const { api } = useServices();
  const [a, setA] = useState(initial);
  const [erreurs, setErreurs] = useState({});
  const [message, setMessage] = useState(null);
  const [envoi, setEnvoi] = useState(false);
  const set = (k) => (v) => setA((x) => ({ ...x, [k]: v }));
  const err = (k) => erreurs[k];

  const enregistrer = async (e) => {
    e.preventDefault();
    setEnvoi(true);
    setErreurs({});
    setMessage(null);
    try {
      const payload = { ...a };
      delete payload.id;
      await api.adminSaveActualite(a.id, payload);
      onFini();
    } catch (ex) {
      setErreurs(ex.details || {});
      setMessage(ex.message || 'Enregistrement impossible');
    } finally {
      setEnvoi(false);
    }
  };

  const statuts = Object.entries(STATUTS_ACTUALITE).filter(([k]) => estAdmin || k !== 'publie');
  return (
    <form className="card" onSubmit={enregistrer} noValidate aria-label="Actualité">
      <h2>{a.id ? 'Modifier l’actualité' : 'Nouvelle actualité'}</h2>
      <div className="form-grid form-grid-3">
        <SelectField
          label="Type"
          value={a.type}
          onChange={set('type')}
          options={Object.entries(TYPES_ACTUALITE)}
          error={err('type')}
          required
        />
        <TextField
          label="Date de publication"
          type="date"
          value={a.publie_le}
          onChange={set('publie_le')}
          error={err('publie_le')}
          required
        />
        <TextField
          label="Fin d’affichage"
          type="date"
          value={a.expire_le || ''}
          onChange={set('expire_le')}
          error={err('expire_le')}
          hint="Facultative : l’alerte disparaît de l’accueil après cette date"
        />
      </div>
      <TextField
        label="Titre"
        value={a.titre}
        onChange={set('titre')}
        error={err('titre')}
        maxLength={190}
        required
      />
      <TextArea
        label="Résumé"
        value={a.resume}
        onChange={set('resume')}
        error={err('resume')}
        rows={4}
        maxLength={4000}
      />
      <div className="form-grid form-grid-2">
        <TextField
          label="Source"
          value={a.source_titre}
          onChange={set('source_titre')}
          error={err('source_titre')}
          placeholder="ex. Ministère de la Santé, communiqué du …"
          maxLength={255}
          required
        />
        <TextField
          label="Lien de la source"
          value={a.source_url || ''}
          onChange={set('source_url')}
          error={err('source_url')}
          placeholder="https://…"
          maxLength={500}
        />
      </div>
      <div className="form-grid form-grid-3">
        <TextField
          label="Zone concernée"
          value={a.zone || ''}
          onChange={set('zone')}
          error={err('zone')}
          placeholder="ex. Kinshasa ; vide = tout le pays"
          maxLength={190}
        />
        <TextField
          label="Fiche liée (slug)"
          value={a.pathologie_slug || ''}
          onChange={set('pathologie_slug')}
          error={err('pathologie_slug')}
          placeholder="ex. cholera"
          maxLength={190}
        />
        <TextField
          label="Molécule liée (slug)"
          value={a.molecule_slug || ''}
          onChange={set('molecule_slug')}
          error={err('molecule_slug')}
          placeholder="ex. artesunate"
          maxLength={190}
        />
      </div>
      <SelectField
        label="Statut"
        value={a.statut}
        onChange={set('statut')}
        options={statuts}
        error={err('statut')}
        required
      />
      {!estAdmin && (
        <p className="hint">
          Votre proposition reste un brouillon jusqu’à sa publication par un administrateur.
        </p>
      )}
      {message && (
        <p className="form-error" role="alert">
          {message}
        </p>
      )}
      <div className="ordo-actions">
        <button type="submit" className="btn btn-primary" disabled={envoi}>
          Enregistrer
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => onFini(false)}>
          Annuler
        </button>
      </div>
    </form>
  );
}

export function ActualitesAdmin({ user }) {
  const { api } = useServices();
  const [liste, setListe] = useState(null);
  const [erreur, setErreur] = useState(null);
  const [edition, setEdition] = useState(null);
  const estAdmin = user?.role === 'admin';

  const charger = useCallback(() => {
    api
      .adminActualites()
      .then(setListe)
      .catch((e) => setErreur(e.message));
  }, [api]);
  useEffect(() => charger(), [charger]);

  const ouvrir = async (id) => {
    const a = await api.adminActualite(id);
    setEdition({ ...vide(), ...a, source_url: a.source_url || '', expire_le: a.expire_le || '' });
  };

  if (edition) {
    return (
      <EditeurActualite
        initial={edition}
        estAdmin={estAdmin}
        onFini={() => {
          setEdition(null);
          charger();
        }}
      />
    );
  }
  return (
    <section aria-label="Actualités">
      <p>
        Alertes sanitaires, pharmacovigilance et retraits de lots, changements de protocoles nationaux,
        innovations : affichées sur l’accueil avec leur source. Les nouveautés produits et fiches s’affichent
        automatiquement.
      </p>
      <button type="button" className="btn btn-primary" onClick={() => setEdition(vide())}>
        Nouvelle actualité
      </button>
      {erreur && <p className="form-error">{erreur}</p>}
      {liste && !liste.length && <p className="muted">Aucune actualité pour l’instant.</p>}
      {liste && liste.length > 0 && (
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th scope="col">Titre</th>
                <th scope="col">Type</th>
                <th scope="col">Statut</th>
                <th scope="col">Publication</th>
              </tr>
            </thead>
            <tbody>
              {liste.map((a) => (
                <tr key={a.id}>
                  <td>
                    <button type="button" className="btn-link" onClick={() => ouvrir(a.id)}>
                      {a.titre}
                    </button>
                    {a.auteur && <span className="row-sub">{a.auteur}</span>}
                  </td>
                  <td>{TYPES_ACTUALITE[a.type]}</td>
                  <td>{STATUTS_ACTUALITE[a.statut]}</td>
                  <td>
                    {a.publie_le}
                    {a.expire_le && <span className="row-sub">jusqu’au {a.expire_le}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
