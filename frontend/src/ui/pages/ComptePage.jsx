import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth.jsx';
import { useServices } from '../context/services.jsx';
import { isEditor } from '../components/AdminForm.jsx';
import { ORDRES, ORDRE_DU_PROFIL, PROFILS, PROVINCES, STRUCTURES, VERIFICATIONS } from '../../core/labels.js';

const ROLES = { user: 'Utilisateur', medecin: 'Médecin relecteur', admin: 'Administrateur' };

/** Mon compte : profil professionnel, vérification, mot de passe. */
export function ComptePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <section className="narrow">
        <h1>Mon compte</h1>
        <p>
          <Link to="/connexion" state={{ from: '/compte' }}>
            Connectez-vous
          </Link>{' '}
          pour gérer votre compte.
        </p>
      </section>
    );
  }

  return (
    <section className="narrow">
      <h1>Mon compte</h1>
      <dl className="dl">
        <div className="dl-row">
          <dt>E-mail</dt>
          <dd>{user.email}</dd>
        </div>
        <div className="dl-row">
          <dt>Rôle</dt>
          <dd>{ROLES[user.role] || user.role}</dd>
        </div>
        <div className="dl-row">
          <dt>Statut professionnel</dt>
          <dd>
            <span className={`tag verification-${user.verification || 'non_demandee'}`}>
              {VERIFICATIONS[user.verification || 'non_demandee']}
            </span>
          </dd>
        </div>
      </dl>
      {isEditor(user) && (
        <p className="hint">
          Par sécurité, les sessions des comptes qui peuvent modifier le contenu expirent après 12 heures.
        </p>
      )}
      {!user.profil && (
        <p className="form-error" role="alert">
          Complétez votre profil professionnel ci-dessous.
        </p>
      )}
      <ProfilSection />
      <VerificationSection />
      <MotDePasseSection />
    </section>
  );
}

function useEnvoi() {
  const [etat, setEtat] = useState({ busy: false, message: null, erreurs: {} });
  const envoyer = async (action, messageOk) => {
    setEtat({ busy: true, message: null, erreurs: {} });
    try {
      await action();
      setEtat({ busy: false, message: messageOk, erreurs: {} });
      return true;
    } catch (err) {
      setEtat({ busy: false, message: null, erreurs: err.details || { general: err.message } });
      return false;
    }
  };
  return [etat, envoyer, setEtat];
}

function Erreur({ id, message }) {
  return message ? (
    <p id={id} className="field-error">
      {message}
    </p>
  ) : null;
}

function Retour({ etat }) {
  return (
    <>
      {etat.erreurs.general && (
        <p className="form-error" role="alert">
          {etat.erreurs.general}
        </p>
      )}
      {etat.message && (
        <p className="form-success" role="status">
          {etat.message}
        </p>
      )}
    </>
  );
}

/** Profil professionnel et lieu d'exercice (choisis à l'inscription, modifiables ici). */
function ProfilSection() {
  const { api } = useServices();
  const { user, updateUser } = useAuth();
  const [form, setForm] = useState({
    nom: user.nom || '',
    profil: user.profil || '',
    specialite_exercee: user.specialite_exercee || '',
    structure_type: user.structure_type || '',
    structure_nom: user.structure_nom || '',
    province: user.province || '',
  });
  const [etat, envoyer] = useEnvoi();
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const changeDeProfil = user.profil && form.profil !== user.profil && user.verification !== 'non_demandee';

  const submit = (e) => {
    e.preventDefault();
    envoyer(async () => updateUser(await api.updateProfil(form)), 'Profil enregistré.');
  };

  const select = (key, label, options, { vide = '— Non précisé —' } = {}) => (
    <div className="field">
      <label htmlFor={`profil-${key}`}>{label}</label>
      <select
        id={`profil-${key}`}
        value={form[key]}
        onChange={set(key)}
        aria-invalid={etat.erreurs[key] ? 'true' : undefined}
        aria-describedby={etat.erreurs[key] ? `profil-${key}-err` : undefined}
      >
        <option value="">{vide}</option>
        {options.map(([k, l]) => (
          <option key={k} value={k}>
            {l}
          </option>
        ))}
      </select>
      <Erreur id={`profil-${key}-err`} message={etat.erreurs[key]} />
    </div>
  );

  const texte = (key, label, props = {}) => (
    <div className="field">
      <label htmlFor={`profil-${key}`}>{label}</label>
      <input
        id={`profil-${key}`}
        value={form[key]}
        onChange={set(key)}
        aria-invalid={etat.erreurs[key] ? 'true' : undefined}
        aria-describedby={etat.erreurs[key] ? `profil-${key}-err` : undefined}
        {...props}
      />
      <Erreur id={`profil-${key}-err`} message={etat.erreurs[key]} />
    </div>
  );

  return (
    <>
      <h2>Profil professionnel</h2>
      <form onSubmit={submit} noValidate>
        {texte('nom', 'Nom complet', { autoComplete: 'name', maxLength: 120, required: true })}
        {select('profil', 'Profil', Object.entries(PROFILS), { vide: '— Choisir —' })}
        {form.profil === 'medecin_specialiste' &&
          texte('specialite_exercee', 'Spécialité', { maxLength: 120, placeholder: 'ex. Pédiatrie' })}
        {select('structure_type', 'Lieu d’exercice', Object.entries(STRUCTURES))}
        {texte('structure_nom', 'Nom de la structure', {
          maxLength: 190,
          placeholder: 'ex. HGR de Kintambo',
        })}
        {select(
          'province',
          'Province',
          PROVINCES.map((p) => [p, p]),
        )}
        {changeDeProfil && (
          <p className="hint" role="note">
            Changer de profil annule la vérification de votre statut professionnel : il faudra la redemander.
          </p>
        )}
        <Retour etat={etat} />
        <button type="submit" className="btn btn-primary" disabled={etat.busy}>
          {etat.busy ? 'Patientez…' : 'Enregistrer le profil'}
        </button>
      </form>
    </>
  );
}

/** Numéro d'ordre (saisi après l'inscription) et suivi de la vérification par un administrateur. */
function VerificationSection() {
  const { api } = useServices();
  const { user, updateUser } = useAuth();
  const ordreAttendu = ORDRE_DU_PROFIL[user.profil];
  const [numero, setNumero] = useState(user.numero_ordre || '');
  const [etat, envoyer] = useEnvoi();

  if (!user.profil) return null;
  if (user.profil === 'etudiant') {
    return (
      <>
        <h2>Vérification du statut professionnel</h2>
        <p className="hint">Le profil étudiant ne nécessite pas de numéro d’inscription à un ordre.</p>
      </>
    );
  }

  const submit = (e) => {
    e.preventDefault();
    envoyer(
      async () =>
        updateUser(
          await api.demanderVerification({ ordre_professionnel: ordreAttendu, numero_ordre: numero }),
        ),
      'Demande envoyée : un administrateur vérifiera votre numéro.',
    );
  };

  return (
    <>
      <h2>Vérification du statut professionnel</h2>
      {user.verification === 'verifie' ? (
        <p className="form-success">
          Votre statut est vérifié ({ORDRES[user.ordre_professionnel]}, n° {user.numero_ordre}).
        </p>
      ) : (
        <>
          <p className="hint">
            Certaines fonctions (prescription imprimable, avis entre confrères, avis sur les produits) seront
            réservées aux comptes vérifiés. Indiquez votre numéro d’inscription : un administrateur le
            contrôlera.
          </p>
          {user.verification === 'en_attente' && (
            <p className="form-success" role="status">
              Demande en attente de vérification (n° {user.numero_ordre}). Vous pouvez corriger le numéro.
            </p>
          )}
          {user.verification === 'refuse' && (
            <p className="form-error" role="alert">
              Vérification refusée{user.verification_motif ? ` : ${user.verification_motif}` : ''}. Corrigez
              puis renvoyez votre demande.
            </p>
          )}
          <form onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="verif-ordre">Ordre professionnel</label>
              <input id="verif-ordre" value={ORDRES[ordreAttendu] || ''} readOnly />
            </div>
            <div className="field">
              <label htmlFor="verif-numero">Numéro d’inscription à l’ordre</label>
              <input
                id="verif-numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                maxLength={60}
                aria-invalid={etat.erreurs.numero_ordre ? 'true' : undefined}
                aria-describedby={etat.erreurs.numero_ordre ? 'verif-numero-err' : undefined}
                required
              />
              <Erreur
                id="verif-numero-err"
                message={etat.erreurs.numero_ordre || etat.erreurs.ordre_professionnel}
              />
            </div>
            <Retour etat={etat} />
            <button type="submit" className="btn btn-primary" disabled={etat.busy}>
              {etat.busy ? 'Patientez…' : 'Demander la vérification'}
            </button>
          </form>
        </>
      )}
    </>
  );
}

function MotDePasseSection() {
  const { changePassword } = useAuth();
  const [form, setForm] = useState({ actuel: '', nouveau: '', confirmation: '' });
  const [etat, envoyer, setEtat] = useEnvoi();
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    if (form.nouveau !== form.confirmation) {
      setEtat({
        busy: false,
        message: null,
        erreurs: { confirmation: 'Les deux mots de passe ne correspondent pas' },
      });
      return;
    }
    const ok = await envoyer(
      () => changePassword({ actuel: form.actuel, nouveau: form.nouveau }),
      'Mot de passe modifié. Vos autres appareils devront se reconnecter.',
    );
    if (ok) setForm({ actuel: '', nouveau: '', confirmation: '' });
  }

  const champ = (key, label, autoComplete) => (
    <div className="field">
      <label htmlFor={`compte-${key}`}>{label}</label>
      <input
        id={`compte-${key}`}
        type="password"
        autoComplete={autoComplete}
        value={form[key]}
        onChange={update(key)}
        aria-invalid={etat.erreurs[key] ? 'true' : undefined}
        aria-describedby={etat.erreurs[key] ? `compte-${key}-err` : undefined}
        required
      />
      <Erreur id={`compte-${key}-err`} message={etat.erreurs[key]} />
    </div>
  );

  return (
    <>
      <h2>Changer de mot de passe</h2>
      <form onSubmit={submit} noValidate>
        {champ('actuel', 'Mot de passe actuel', 'current-password')}
        {champ('nouveau', 'Nouveau mot de passe', 'new-password')}
        <p className="hint">10 caractères minimum, avec au moins une lettre et un chiffre.</p>
        {champ('confirmation', 'Confirmer le nouveau mot de passe', 'new-password')}
        <Retour etat={etat} />
        <button type="submit" className="btn btn-primary" disabled={etat.busy}>
          {etat.busy ? 'Patientez…' : 'Changer le mot de passe'}
        </button>
      </form>
    </>
  );
}
