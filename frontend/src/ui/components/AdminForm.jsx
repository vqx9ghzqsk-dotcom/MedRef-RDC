import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth.jsx';
import { RichText } from './RichText.jsx';

export const EDITOR_ROLES = ['admin', 'medecin'];
export const isEditor = (user) => Boolean(user && EDITOR_ROLES.includes(user.role));

/** Réserve une page aux rôles admin et medecin. */
export function EditorGuard({ children }) {
  const { user } = useAuth();
  if (!user) {
    return (
      <div className="status status-error" role="alert">
        <p>Connectez-vous avec un compte administrateur pour accéder à cet espace.</p>
        <Link to="/connexion">Se connecter</Link>
      </div>
    );
  }
  if (!isEditor(user)) {
    return (
      <div className="status status-error" role="alert">
        <p>Accès réservé aux administrateurs et aux médecins validateurs.</p>
        <Link to="/">Revenir à l’accueil</Link>
      </div>
    );
  }
  return children;
}

function FieldError({ id, error }) {
  if (!error) return null;
  return (
    <span id={id} className="form-error field-error">
      {error}
    </span>
  );
}

export function TextField({ label, value, onChange, error, hint, required, ...rest }) {
  const id = useId();
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        type="text"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-err` : hint ? `${id}-hint` : undefined}
        required={required}
        {...rest}
      />
      {hint && !error && (
        <span id={`${id}-hint`} className="hint">
          {hint}
        </span>
      )}
      <FieldError id={`${id}-err`} error={error} />
    </div>
  );
}

/** Zone de texte en markdown léger, avec aperçu du rendu. */
export function TextArea({ label, value, onChange, error, rows = 4, markdown = true, hint }) {
  const id = useId();
  const [apercu, setApercu] = useState(false);
  return (
    <div className="field">
      <div className="field-head">
        <label htmlFor={id}>{label}</label>
        {markdown && (
          <button
            type="button"
            className="btn-link"
            aria-pressed={apercu}
            onClick={() => setApercu((a) => !a)}
          >
            {apercu ? 'Modifier' : 'Aperçu'}
          </button>
        )}
      </div>
      {apercu ? (
        <div className="apercu">
          <RichText text={value} headingLevel={4} />
        </div>
      ) : (
        <textarea
          id={id}
          rows={rows}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${id}-err` : undefined}
        />
      )}
      {hint && !error && <span className="hint">{hint}</span>}
      <FieldError id={`${id}-err`} error={error} />
    </div>
  );
}

export function SelectField({ label, value, onChange, options, error, emptyLabel, required }) {
  const id = useId();
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <select
        id={id}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value || null)}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
      >
        {emptyLabel !== undefined && <option value="">{emptyLabel}</option>}
        {options.map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </select>
      <FieldError id={`${id}-err`} error={error} />
    </div>
  );
}

/**
 * Liste éditable : ajout, suppression, déplacement.
 * renderItem(item, update, index) ; update(patch) fusionne dans l'élément.
 */
export function ListEditor({ title, items, onChange, renderItem, newItem, itemLabel, addLabel = 'Ajouter' }) {
  const update = (i, patch) => onChange(items.map((it, j) => (j === i ? { ...it, ...patch } : it)));
  const remove = (i) => onChange(items.filter((_, j) => j !== i));
  const move = (i, delta) => {
    const j = i + delta;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };
  return (
    <fieldset className="list-editor">
      <legend>
        {title} <span className="count">({items.length})</span>
      </legend>
      {items.map((item, i) => (
        // L'index sert de clé : les éléments n'ont pas d'identifiant stable côté formulaire
        <div key={i} className="list-editor-item">
          <div className="list-editor-head">
            <span className="list-editor-title">
              {i + 1}. {itemLabel(item) || 'Nouvel élément'}
            </span>
            <span className="list-editor-actions">
              <button
                type="button"
                className="btn btn-ghost btn-small"
                onClick={() => move(i, -1)}
                disabled={i === 0}
                aria-label={`Monter l’élément ${i + 1}`}
              >
                ↑
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-small"
                onClick={() => move(i, 1)}
                disabled={i === items.length - 1}
                aria-label={`Descendre l’élément ${i + 1}`}
              >
                ↓
              </button>
              <button
                type="button"
                className="btn btn-danger btn-small"
                onClick={() => remove(i)}
                aria-label={`Supprimer l’élément ${i + 1}`}
              >
                Supprimer
              </button>
            </span>
          </div>
          {renderItem(item, (patch) => update(i, patch), i)}
        </div>
      ))}
      <button
        type="button"
        className="btn btn-secondary btn-small"
        onClick={() => onChange([...items, newItem()])}
      >
        + {addLabel}
      </button>
    </fieldset>
  );
}

/** Avertit avant de quitter la page avec des modifications non enregistrées. */
export function useUnsavedWarning(dirty) {
  useEffect(() => {
    if (!dirty) return undefined;
    const handler = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [dirty]);
}

/** Barre d'enregistrement collante + résumé des erreurs renvoyées par l'API. */
export function SaveBar({ saving, dirty, message, error, onSave, children }) {
  return (
    <div className="save-bar" role="region" aria-label="Enregistrement">
      <div className="save-bar-inner">
        <div className="save-bar-status" aria-live="polite">
          {error && <span className="form-error">{error}</span>}
          {!error && message && <span className="form-success">{message}</span>}
          {!error && !message && dirty && <span className="muted">Modifications non enregistrées</span>}
        </div>
        {children}
        <button type="button" className="btn btn-primary" onClick={onSave} disabled={saving}>
          {saving ? 'Enregistrement…' : 'Enregistrer'}
        </button>
      </div>
    </div>
  );
}

/** Historique des modifications d'une entité. */
export function Historique({ items }) {
  if (!items?.length) return null;
  return (
    <section className="card">
      <h2>Historique</h2>
      <ul className="historique">
        {items.map((h) => (
          <li key={h.id}>
            <span className={`tag ${h.action === 'validation' ? 'tag-ok' : ''}`}>
              {h.action === 'validation' ? 'Validation' : 'Modification'}
            </span>{' '}
            {h.resume}{' '}
            <span className="muted">
              — {h.auteur || 'compte supprimé'}, {formatDateTime(h.created_at)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function formatDateTime(value) {
  if (!value) return '';
  const d = new Date(String(value).replace(' ', 'T'));
  return Number.isNaN(d.getTime())
    ? String(value)
    : d.toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' });
}
