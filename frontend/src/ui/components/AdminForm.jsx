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

export function TextField({ label, value, onChange, error, hint, required, suggestions, ...rest }) {
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
        list={suggestions ? `${id}-liste` : undefined}
        {...rest}
      />
      {suggestions && (
        <datalist id={`${id}-liste`}>
          {suggestions.map((s) => (
            <option key={s} value={s} />
          ))}
        </datalist>
      )}
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
export function TextArea({
  label,
  value,
  onChange,
  error,
  rows = 4,
  markdown = true,
  hint,
  placeholder,
  maxLength,
}) {
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
          <RichText text={value} headingLevel={4} glossaire />
        </div>
      ) : (
        <textarea
          id={id}
          rows={rows}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${id}-err` : hint ? `${id}-hint` : undefined}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      )}
      {hint && !error && (
        <span id={`${id}-hint`} className="hint">
          {hint}
        </span>
      )}
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
const LIBELLES_RUBRIQUES = {
  nom: 'Nom',
  resume: 'Résumé',
  statut: 'Statut',
  definition: 'Définition',
  physiopathologie: 'Physiopathologie',
  diagnostic: 'Diagnostic clinique',
  etiologies: 'Étiologies',
  therapeutique: 'Notes thérapeutiques',
  evolution: 'Évolution',
  principes: 'Principes de traitement',
  complications: 'Complications',
  niveaux: 'Niveaux de soins',
  examens: 'Examens',
  differentiels: 'Diagnostics différentiels',
  posologies: 'Posologies',
  disponible_rdc: 'Disponible en RDC',
  prix_indicatif_cdf: 'Prix indicatif',
  photo_url: 'Photo',
};

/** Résumé lisible d'une valeur versionnée (texte, liste d'éléments, booléen…). */
function resumeValeur(v) {
  if (v === null || v === undefined || v === '') return '—';
  if (typeof v === 'boolean') return v ? 'Oui' : 'Non';
  if (Array.isArray(v)) {
    if (!v.length) return '(aucun élément)';
    return v
      .map((item, i) => {
        if (!item || typeof item !== 'object') return `${i + 1}. ${item}`;
        const titre =
          item.titre || item.nom || item.examen_slug || item.niveau || item.population || `élément ${i + 1}`;
        const detail = item.dose_texte || item.categorie || item.grade_force || item.prise_en_charge || '';
        return `${i + 1}. ${titre}${detail ? ` — ${String(detail).slice(0, 120)}` : ''}`;
      })
      .join('\n');
  }
  if (typeof v === 'object') return JSON.stringify(v, null, 2);
  return String(v);
}

/** Comparaison avant / après d'un enregistrement, avec restauration de l'une ou l'autre version. */
function Version({ id, charger, onRestaurer }) {
  const [etat, setEtat] = useState({ loading: true });
  useEffect(() => {
    let annule = false;
    charger(id)
      .then((data) => !annule && setEtat({ data }))
      .catch((error) => !annule && setEtat({ error }));
    return () => {
      annule = true;
    };
  }, [id, charger]);
  if (etat.loading) return <p className="muted">Chargement de la version…</p>;
  if (etat.error) return <p className="field-error">{etat.error.message}</p>;
  const { avant, apres, rubriques } = etat.data;
  if (!avant && !apres) return <p className="muted">Version non conservée (enregistrement antérieur).</p>;
  return (
    <div className="version">
      {rubriques.length === 0 && <p className="muted">Aucune différence de contenu.</p>}
      {rubriques.map((k) => (
        <div key={k} className="version-rubrique">
          <h4>{LIBELLES_RUBRIQUES[k] || k.replace(/_/g, ' ')}</h4>
          <div className="version-cols">
            <div>
              <span className="version-label">Avant</span>
              <pre className="version-texte version-avant">{resumeValeur(avant?.[k])}</pre>
            </div>
            <div>
              <span className="version-label">Après</span>
              <pre className="version-texte version-apres">{resumeValeur(apres?.[k])}</pre>
            </div>
          </div>
        </div>
      ))}
      {onRestaurer && (
        <div className="version-actions">
          {avant && (
            <button type="button" className="btn btn-secondary btn-small" onClick={() => onRestaurer(avant)}>
              Revenir à la version d’avant
            </button>
          )}
          {apres && (
            <button type="button" className="btn btn-ghost btn-small" onClick={() => onRestaurer(apres)}>
              Reprendre cette version
            </button>
          )}
          <span className="hint">Le formulaire est rempli ; vérifiez puis enregistrez.</span>
        </div>
      )}
    </div>
  );
}

/**
 * Historique d'une fiche. Chaque enregistrement récent garde l'état complet
 * avant / après : on peut comparer et revenir en arrière (`onRestaurer`).
 */
export function Historique({ items, charger, onRestaurer }) {
  const [ouvert, setOuvert] = useState(null);
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
            {h.a_version && charger && (
              <>
                {' '}
                <button
                  type="button"
                  className="btn btn-link"
                  aria-expanded={ouvert === h.id}
                  onClick={() => setOuvert(ouvert === h.id ? null : h.id)}
                >
                  {ouvert === h.id ? 'Masquer' : 'Voir les changements'}
                </button>
                {ouvert === h.id && (
                  <Version
                    id={h.id}
                    charger={charger}
                    onRestaurer={
                      onRestaurer &&
                      ((etat) => {
                        onRestaurer(etat);
                        setOuvert(null);
                      })
                    }
                  />
                )}
              </>
            )}
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
