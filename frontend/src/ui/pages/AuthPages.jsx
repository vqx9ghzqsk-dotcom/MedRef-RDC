import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth.jsx';

function AuthForm({ mode }) {
  const isRegister = mode === 'register';
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ nom: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

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

  const field = (key, label, props) => (
    <div className="field">
      <label htmlFor={`auth-${key}`}>{label}</label>
      <input
        id={`auth-${key}`}
        value={form[key]}
        onChange={update(key)}
        aria-invalid={fieldErrors[key] ? 'true' : undefined}
        aria-describedby={fieldErrors[key] ? `auth-${key}-err` : undefined}
        required
        {...props}
      />
      {fieldErrors[key] && (
        <p id={`auth-${key}-err`} className="field-error">
          {fieldErrors[key]}
        </p>
      )}
    </div>
  );

  return (
    <section className="auth narrow">
      <h1>{isRegister ? 'Créer un compte' : 'Se connecter'}</h1>
      <p className="muted">
        {isRegister
          ? 'Un compte permet de sauvegarder vos prescriptions et de les retrouver sur vos autres appareils.'
          : 'Connectez-vous pour synchroniser vos prescriptions.'}
      </p>
      <form onSubmit={submit} noValidate>
        {isRegister && field('nom', 'Nom complet', { autoComplete: 'name' })}
        {field('email', 'Adresse e-mail', { type: 'email', autoComplete: 'email', inputMode: 'email' })}
        {field('password', 'Mot de passe', {
          type: 'password',
          autoComplete: isRegister ? 'new-password' : 'current-password',
          minLength: isRegister ? 10 : undefined,
        })}
        {isRegister && <p className="hint">10 caractères minimum, avec au moins une lettre et un chiffre.</p>}
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
            Pas encore de compte ? <Link to="/inscription">Créer un compte</Link>
          </>
        )}
      </p>
    </section>
  );
}

export const LoginPage = () => <AuthForm mode="login" />;
export const RegisterPage = () => <AuthForm mode="register" />;
