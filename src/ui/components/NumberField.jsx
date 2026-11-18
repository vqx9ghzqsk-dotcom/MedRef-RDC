import { useId, useState } from 'react';
import { bornesTexte, exempleNombre, validerNombre } from '../../core/saisie.js';

/**
 * Champ numérique normalisé : clavier numérique sur téléphone, unité affichée à
 * droite, exemple en placeholder, bornes en aide, erreur affichée sous le champ
 * dès que l'on quitte le champ (puis à chaque frappe).
 *
 * La valeur reste celle tapée (texte) ; la conversion se fait avec normaliserNombre.
 */
export function NumberField({
  label,
  name,
  value,
  onChange,
  unit,
  min,
  max,
  exemple,
  optional = false,
  required = false,
  error,
  hint,
  id: idExterne,
}) {
  const idInterne = useId();
  const id = idExterne || idInterne;
  const [touche, setTouche] = useState(false);
  const verif = validerNombre(value, { label, min, max, unit, optional: optional || !required });
  const erreurLocale = touche && value !== '' && value !== null && value !== undefined ? verif.erreur : null;
  const message = error || erreurLocale;
  const aide = hint ?? bornesTexte({ min, max, unit });
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <div className="input-unite">
        <input
          id={id}
          name={name}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={value ?? ''}
          placeholder={exempleNombre({ name, exemple, min, max })}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouche(true)}
          aria-invalid={message ? 'true' : undefined}
          aria-describedby={message ? `${id}-err` : aide ? `${id}-hint` : undefined}
          required={required}
        />
        {unit && (
          <span className="unite" aria-hidden="true">
            {unit}
          </span>
        )}
      </div>
      {aide && !message && (
        <span id={`${id}-hint`} className="hint">
          {aide}
        </span>
      )}
      {message && (
        <p id={`${id}-err`} className="field-error" role="alert">
          {message}
        </p>
      )}
    </div>
  );
}
