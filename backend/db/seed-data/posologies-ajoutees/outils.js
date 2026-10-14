'use strict';

/**
 * Aide à la rédaction des posologies ajoutées (structurées dès l'écriture).
 *   p(population, dose lisible, options)
 *   options : ind, voie, kg (dose par kg), max (plafond), base ('par_prise' | 'par_jour'),
 *             unite ('mg' par défaut), freq (texte affiché), duree (texte affiché),
 *             f : fréquence structurée → { n } prises par jour, { h } toutes les h heures,
 *                 'unique', 'perfusion' ou 'schema',
 *             durees : [[min, max|null, unite, contexte|null, defaut?], …],
 *             sec ('autorise' | 'prudence' | 'contre_indique'), rem
 * La base vaut « par_prise » par défaut dès qu'une dose par kg est donnée.
 */

function frequenceStructuree(f) {
  if (!f) return { frequence_type: null, prises_par_jour: null, intervalle_heures: null };
  if (f === 'unique')
    return { frequence_type: 'dose_unique', prises_par_jour: null, intervalle_heures: null };
  if (f === 'perfusion' || f === 'schema')
    return { frequence_type: f, prises_par_jour: null, intervalle_heures: null };
  if (f.h) {
    const prises = 24 / f.h;
    return {
      frequence_type: 'intervalle',
      prises_par_jour: Number.isInteger(prises) ? prises : null,
      intervalle_heures: f.h,
    };
  }
  return { frequence_type: 'prises_par_jour', prises_par_jour: f.n, intervalle_heures: null };
}

const p = (population, dose_texte, o = {}) => ({
  population,
  dose_texte,
  indication: o.ind ?? null,
  voie: o.voie ?? null,
  dose_par_kg: o.kg ?? null,
  dose_max: o.max ?? null,
  dose_base: o.base ?? (o.kg !== undefined ? 'par_prise' : null),
  unite: o.unite ?? 'mg',
  frequence: o.freq ?? null,
  ...frequenceStructuree(o.f),
  duree: o.duree ?? null,
  // Durée par défaut : celle marquée true, sinon la première
  durees: (o.durees || []).map(([min, max, unite, contexte, defaut], i, liste) => ({
    min,
    max: max ?? null,
    unite,
    contexte: contexte ?? null,
    defaut: liste.some((d) => d[4] === true) ? defaut === true : i === 0,
  })),
  securite: o.sec ?? null,
  remarque: o.rem ?? null,
});

module.exports = { p };
