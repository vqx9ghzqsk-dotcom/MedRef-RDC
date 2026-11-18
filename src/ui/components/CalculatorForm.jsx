import { useState } from 'react';
import { getCalculator, runCalculator } from '../../core/calculators/index.js';
import { NumberField } from './NumberField.jsx';

/** Formulaire généré à partir de la définition de la calculatrice (core). */
export function CalculatorForm({ code }) {
  const calc = getCalculator(code);
  const [values, setValues] = useState({});
  const [outcome, setOutcome] = useState(null);

  if (!calc) return <p className="muted">Cette calculatrice sera bientôt disponible.</p>;

  const set = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    setOutcome(null);
  };

  const submit = (e) => {
    e.preventDefault();
    setOutcome(runCalculator(code, values));
  };

  const reset = () => {
    setValues({});
    setOutcome(null);
  };

  return (
    <form className="calculator" onSubmit={submit} noValidate>
      {calc.fields.map((f) => {
        const id = `calc-${code}-${f.name}`;
        if (f.type === 'boolean') {
          return (
            <div className="field field-check" key={f.name}>
              <input
                id={id}
                type="checkbox"
                checked={Boolean(values[f.name])}
                onChange={(e) => set(f.name, e.target.checked)}
              />
              <label htmlFor={id}>
                {f.label} <span className="muted">(+{f.points})</span>
              </label>
            </div>
          );
        }
        if (f.type === 'select') {
          return (
            <div className="field" key={f.name}>
              <label htmlFor={id}>{f.label}</label>
              <select id={id} value={values[f.name] ?? ''} onChange={(e) => set(f.name, e.target.value)}>
                <option value="">Choisir…</option>
                {f.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          );
        }
        return (
          <NumberField
            key={f.name}
            id={id}
            name={f.name}
            label={f.label}
            unit={f.unit}
            min={f.min}
            max={f.max}
            exemple={f.exemple}
            optional={f.optional}
            required={!f.optional}
            value={values[f.name] ?? ''}
            onChange={(v) => set(f.name, v)}
          />
        );
      })}
      <div className="calc-actions">
        <button type="submit" className="btn btn-primary">
          Calculer
        </button>
        <button type="button" className="btn btn-ghost" onClick={reset}>
          Effacer
        </button>
      </div>
      <div aria-live="polite">
        {outcome && !outcome.ok && (
          <p className="form-error" role="alert">
            {outcome.error}
          </p>
        )}
        {outcome && outcome.ok && (
          <div className={`calc-result level-${outcome.result.level}`}>
            <p className="calc-value">
              {outcome.result.display}
              {outcome.result.unit && <span className="calc-unit"> {outcome.result.unit}</span>}
            </p>
            <p className="calc-interpretation">{outcome.result.interpretation}</p>
            {outcome.result.details?.map((d) => (
              <p key={d} className="muted">
                {d}
              </p>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
