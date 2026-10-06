import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth.jsx';
import { isEditor } from '../components/AdminForm.jsx';

const ROLES = { user: 'Utilisateur', medecin: 'Médecin relecteur', admin: 'Administrateur' };

/** Mon compte : informations et changement de mot de passe. */
export function ComptePage() {
  const { user, changePassword } = useAuth();
  const [form, setForm] = useState({ actuel: '', nouveau: '', confirmation: '' });
  const [erreurs, setErreurs] = useState({});
  const [message, setMessage] = useState(null);
  const [busy, setBusy] = useState(false);

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

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setMessage(null);
    if (form.nouveau !== form.confirmation) {
      setErreurs({ confirmation: 'Les deux mots de passe ne correspondent pas' });
      return;
    }
    setBusy(true);
    setErreurs({});
    try {
      await changePassword({ actuel: form.actuel, nouveau: form.nouveau });
      setForm({ actuel: '', nouveau: '', confirmation: '' });
      setMessage('Mot de passe modifié. Vos autres appareils devront se reconnecter.');
    } catch (err) {
      setErreurs(err.details || { general: err.message });
    } finally {
      setBusy(false);
    }
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
        aria-invalid={erreurs[key] ? 'true' : undefined}
        aria-describedby={erreurs[key] ? `compte-${key}-err` : undefined}
        required
      />
      {erreurs[key] && (
        <p id={`compte-${key}-err`} className="field-error">
          {erreurs[key]}
        </p>
      )}
    </div>
  );

  return (
    <section className="narrow">
      <h1>Mon compte</h1>
      <dl className="dl">
        <div className="dl-row">
          <dt>Nom</dt>
          <dd>{user.nom}</dd>
        </div>
        <div className="dl-row">
          <dt>E-mail</dt>
          <dd>{user.email}</dd>
        </div>
        <div className="dl-row">
          <dt>Rôle</dt>
          <dd>{ROLES[user.role] || user.role}</dd>
        </div>
      </dl>
      {isEditor(user) && (
        <p className="hint">
          Par sécurité, les sessions des comptes qui peuvent modifier le contenu expirent après 12 heures.
        </p>
      )}

      <h2>Changer de mot de passe</h2>
      <form onSubmit={submit} noValidate>
        {champ('actuel', 'Mot de passe actuel', 'current-password')}
        {champ('nouveau', 'Nouveau mot de passe', 'new-password')}
        <p className="hint">10 caractères minimum, avec au moins une lettre et un chiffre.</p>
        {champ('confirmation', 'Confirmer le nouveau mot de passe', 'new-password')}
        {erreurs.general && (
          <p className="form-error" role="alert">
            {erreurs.general}
          </p>
        )}
        {message && (
          <p className="form-success" role="status">
            {message}
          </p>
        )}
        <button type="submit" className="btn btn-primary" disabled={busy}>
          {busy ? 'Patientez…' : 'Changer le mot de passe'}
        </button>
      </form>
    </section>
  );
}
