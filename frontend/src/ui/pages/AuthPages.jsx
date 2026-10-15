import { useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/auth.jsx';
import { useServices } from '../context/services.jsx';
import { PROFILS } from '../../core/labels.js';
import { AuthScene } from '../components/AuthScene.jsx';

/** Champ texte avec message d'erreur rattaché (accessibilité). Les mots de passe ont un bouton œil. */
function Champ({ id, label, value, onChange, error, type, ...props }) {
  const [visible, setVisible] = useState(false);
  const motDePasse = type === 'password';
  const input = (
    <input
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={motDePasse && visible ? 'text' : type}
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={error ? `${id}-err` : undefined}
      {...props}
    />
  );
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {motDePasse ? (
        <div className="field-mdp">
          {input}
          <button
            type="button"
            className="field-mdp-voir"
            aria-label={visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
            aria-pressed={visible}
            onClick={() => setVisible((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
              {visible && <path d="M4 4l16 16" />}
            </svg>
          </button>
        </div>
      ) : (
        input
      )}
      {error && (
        <p id={`${id}-err`} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}

function AuthForm({ mode }) {
  const isRegister = mode === 'register';
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ nom: '', email: '', password: '', profil: '', specialite_exercee: '' });
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const set = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setFieldErrors({});
    try {
      if (isRegister) await register(form);
      else await login({ email: form.email, password: form.password });
      navigate(location.state?.from || '/', { replace: true });
    } catch (err) {
      setError(err.message);
      setFieldErrors(err.details || {});
    } finally {
      setBusy(false);
    }
  };

  return (
    <AuthScene>
      <h1>{isRegister ? 'Créer un compte' : 'Se connecter'}</h1>
      <p className="muted">
        {isRegister
          ? 'Un compte permet de sauvegarder vos prescriptions et de les retrouver sur vos autres appareils.'
          : 'Connectez-vous pour synchroniser vos prescriptions.'}
      </p>
      <form onSubmit={submit} noValidate>
        {isRegister && (
          <Champ
            id="auth-nom"
            label="Nom complet"
            value={form.nom}
            onChange={set('nom')}
            error={fieldErrors.nom}
            autoComplete="name"
            placeholder="ex. Dr Prénom Nom"
            maxLength={120}
            required
          />
        )}
        <Champ
          id="auth-email"
          label="Adresse e-mail"
          value={form.email}
          onChange={set('email')}
          error={fieldErrors.email}
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="nom@exemple.cd"
          maxLength={190}
          autoCapitalize="none"
          spellCheck={false}
          required
        />
        <Champ
          id="auth-password"
          label="Mot de passe"
          value={form.password}
          onChange={set('password')}
          error={fieldErrors.password}
          type="password"
          autoComplete={isRegister ? 'new-password' : 'current-password'}
          minLength={isRegister ? 10 : undefined}
          required
        />
        {isRegister && <p className="hint">10 caractères minimum, avec au moins une lettre et un chiffre.</p>}
        {isRegister && (
          <div className="field">
            <label htmlFor="auth-profil">Profil professionnel</label>
            <select
              id="auth-profil"
              value={form.profil}
              onChange={(e) => set('profil')(e.target.value)}
              aria-invalid={fieldErrors.profil ? 'true' : undefined}
              aria-describedby={fieldErrors.profil ? 'auth-profil-err' : undefined}
              required
            >
              <option value="">— Choisir —</option>
              {Object.entries(PROFILS).map(([k, label]) => (
                <option key={k} value={k}>
                  {label}
                </option>
              ))}
            </select>
            {fieldErrors.profil && (
              <p id="auth-profil-err" className="field-error">
                {fieldErrors.profil}
              </p>
            )}
          </div>
        )}
        {isRegister && form.profil === 'medecin_specialiste' && (
          <Champ
            id="auth-specialite"
            label="Spécialité"
            value={form.specialite_exercee}
            onChange={set('specialite_exercee')}
            error={fieldErrors.specialite_exercee}
            placeholder="ex. Pédiatrie, Gynécologie-obstétrique"
            maxLength={120}
            required
          />
        )}
        {isRegister && (
          <p className="hint">
            Votre numéro d’inscription à l’ordre se saisit ensuite dans « Mon compte », pour faire vérifier
            votre statut professionnel.
          </p>
        )}
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <button type="submit" className="btn btn-primary btn-block" disabled={busy}>
          {busy ? 'Patientez…' : isRegister ? 'Créer mon compte' : 'Se connecter'}
        </button>
      </form>
      <p className="auth-switch">
        {isRegister ? (
          <>
            Déjà inscrit ? <Link to="/connexion">Se connecter</Link>
          </>
        ) : (
          <>
            <Link to="/mot-de-passe-oublie">Mot de passe oublié ?</Link>
            <br />
            Pas encore de compte ? <Link to="/inscription">Créer un compte</Link>
          </>
        )}
      </p>
    </AuthScene>
  );
}

export const LoginPage = () => <AuthForm mode="login" />;
export const RegisterPage = () => <AuthForm mode="register" />;

/** Demande de lien de réinitialisation (réponse identique que le compte existe ou non). */
export function MotDePasseOubliePage() {
  const { api } = useServices();
  const [email, setEmail] = useState('');
  const [etat, setEtat] = useState({ busy: false, message: null, error: null, details: {} });

  const submit = async (e) => {
    e.preventDefault();
    setEtat({ busy: true, message: null, error: null, details: {} });
    try {
      const r = await api.motDePasseOublie(email);
      setEtat({ busy: false, message: r.message, error: null, details: {} });
    } catch (err) {
      setEtat({ busy: false, message: null, error: err.message, details: err.details || {} });
    }
  };

  return (
    <AuthScene>
      <h1>Mot de passe oublié</h1>
      <p className="muted">
        Indiquez l’adresse e-mail de votre compte. Vous recevrez un lien pour choisir un nouveau mot de passe,
        par e-mail ou par l’intermédiaire d’un administrateur de MedRef RDC.
      </p>
      {etat.message ? (
        <p className="form-success" role="status">
          {etat.message}
        </p>
      ) : (
        <form onSubmit={submit} noValidate>
          <Champ
            id="oubli-email"
            label="Adresse e-mail"
            value={email}
            onChange={setEmail}
            error={etat.details.email}
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={190}
            autoCapitalize="none"
            spellCheck={false}
            required
          />
          {etat.error && !etat.details.email && (
            <p className="form-error" role="alert">
              {etat.error}
            </p>
          )}
          <button type="submit" className="btn btn-primary btn-block" disabled={etat.busy}>
            {etat.busy ? 'Patientez…' : 'Demander un lien'}
          </button>
        </form>
      )}
      <p className="auth-switch">
        <Link to="/connexion">Retour à la connexion</Link>
      </p>
    </AuthScene>
  );
}

/** Choix du nouveau mot de passe à partir du lien reçu (?jeton=…). */
export function ReinitialiserMotDePassePage() {
  const { api } = useServices();
  const [params] = useSearchParams();
  const jeton = params.get('jeton') || '';
  const [form, setForm] = useState({ nouveau: '', confirmation: '' });
  const [etat, setEtat] = useState({ busy: false, ok: false, error: null, details: {} });

  const submit = async (e) => {
    e.preventDefault();
    if (form.nouveau !== form.confirmation) {
      setEtat({
        busy: false,
        ok: false,
        error: null,
        details: { confirmation: 'Les deux saisies diffèrent' },
      });
      return;
    }
    setEtat({ busy: true, ok: false, error: null, details: {} });
    try {
      await api.reinitialiserMotDePasse(jeton, form.nouveau);
      setEtat({ busy: false, ok: true, error: null, details: {} });
    } catch (err) {
      setEtat({ busy: false, ok: false, error: err.message, details: err.details || {} });
    }
  };

  if (!jeton) {
    return (
      <AuthScene>
        <h1>Nouveau mot de passe</h1>
        <p className="form-error" role="alert">
          Lien incomplet. Ouvrez le lien reçu en entier, ou{' '}
          <Link to="/mot-de-passe-oublie">faites une nouvelle demande</Link>.
        </p>
      </AuthScene>
    );
  }

  return (
    <AuthScene>
      <h1>Nouveau mot de passe</h1>
      {etat.ok ? (
        <p className="form-success" role="status">
          Mot de passe modifié. <Link to="/connexion">Connectez-vous</Link> avec votre nouveau mot de passe.
        </p>
      ) : (
        <form onSubmit={submit} noValidate>
          <Champ
            id="reinit-nouveau"
            label="Nouveau mot de passe"
            value={form.nouveau}
            onChange={(v) => setForm((f) => ({ ...f, nouveau: v }))}
            error={etat.details.nouveau}
            type="password"
            autoComplete="new-password"
            minLength={10}
            required
          />
          <p className="hint">10 caractères minimum, avec au moins une lettre et un chiffre.</p>
          <Champ
            id="reinit-confirmation"
            label="Confirmer le mot de passe"
            value={form.confirmation}
            onChange={(v) => setForm((f) => ({ ...f, confirmation: v }))}
            error={etat.details.confirmation}
            type="password"
            autoComplete="new-password"
            required
          />
          {etat.error && !etat.details.nouveau && (
            <p className="form-error" role="alert">
              {etat.error} <Link to="/mot-de-passe-oublie">Nouvelle demande</Link>
            </p>
          )}
          <button type="submit" className="btn btn-primary btn-block" disabled={etat.busy}>
            {etat.busy ? 'Patientez…' : 'Enregistrer le mot de passe'}
          </button>
        </form>
      )}
    </AuthScene>
  );
}
