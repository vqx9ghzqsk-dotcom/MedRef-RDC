'use strict';

/**
 * États éditables complets d'une fiche pathologie et d'une fiche molécule : ce
 * qu'on enregistre et qu'on versionne dans `modifications` (avant / après).
 * Partagés par l'administration et par le chargement des contrôles de conformité,
 * pour que toutes les versions se comparent de la même façon.
 * `q(sql, params)` : exécuteur de requêtes (pool ou connexion de transaction).
 */

const { chargerFormes } = require('./formes');

const NIVEAUX = ['centre_sante', 'hopital_general', 'hopital_tertiaire'];
const FICHE_PHARMACO = [
  'mecanisme',
  'pharmacocinetique',
  'indications',
  'posologie',
  'contre_indications',
  'effets_indesirables',
  'interactions',
  'grossesse_allaitement',
  'surveillance',
  'precautions',
];
const PATHOLOGIE_TEXTES = [
  'definition',
  'physiopathologie',
  'diagnostic',
  'etiologies',
  'therapeutique',
  'evolution',
];

/** État éditable complet d'une fiche (celui qu'on enregistre et qu'on versionne). */
async function etatPathologie(q, id) {
  const [p] = await q(
    `SELECT nom, resume, ${PATHOLOGIE_TEXTES.join(', ')}, statut FROM pathologies WHERE id = ?`,
    [id],
  );
  if (!p) return null;
  const [principes, complications, niveaux, examens, differentiels] = await Promise.all([
    q(
      `SELECT titre, objectif, details, grade_force, grade_detail, grade_source
         FROM pathologie_principes WHERE pathologie_id = ? ORDER BY ordre`,
      [id],
    ),
    q(
      `SELECT c.nom, c.description, c.traitement, c.surveillance_clinique, c.surveillance_paraclinique,
              f.slug AS fiche_slug
         FROM complications c LEFT JOIN pathologies f ON f.id = c.fiche_id
        WHERE c.pathologie_id = ? ORDER BY c.ordre`,
      [id],
    ),
    q('SELECT niveau, prise_en_charge, criteres_transfert FROM pathologie_niveaux WHERE pathologie_id = ?', [
      id,
    ]),
    q(
      `SELECT e.slug AS examen_slug, pe.categorie, pe.interpretation
         FROM pathologie_examens pe JOIN examens e ON e.id = pe.examen_id
        WHERE pe.pathologie_id = ? ORDER BY pe.ordre`,
      [id],
    ),
    q(
      `SELECT f.slug AS fiche_slug, d.nom, d.elements_distinctifs
         FROM pathologie_differentiels d LEFT JOIN pathologies f ON f.id = d.differentiel_id
        WHERE d.pathologie_id = ? ORDER BY d.ordre`,
      [id],
    ),
  ]);
  return {
    ...p,
    principes,
    complications,
    niveaux: NIVEAUX.map(
      (niveau) =>
        niveaux.find((n) => n.niveau === niveau) || {
          niveau,
          prise_en_charge: null,
          criteres_transfert: null,
        },
    ),
    examens,
    differentiels,
    formes: (await chargerFormes(q, id)).map(({ id: _id, syndromes, examens: ex, ...f }) => ({
      ...f,
      syndromes: syndromes.map((sy) => sy.slug),
      examens: ex.map((e) => ({ examen_slug: e.slug, interpretation: e.interpretation })),
    })),
    urgences: await q(
      `SELECT u.slug AS urgence_slug, u.nom, pu.signes_alerte
         FROM pathologie_urgences pu JOIN urgences u ON u.id = pu.urgence_id
        WHERE pu.pathologie_id = ? ORDER BY u.nom`,
      [id],
    ),
  };
}

const nombreOuNull = (v) => (v === null || v === undefined ? null : Number(v));

async function etatMolecule(q, id) {
  const [mo] = await q(`SELECT ${FICHE_PHARMACO.join(', ')}, fiche_a_valider FROM molecules WHERE id = ?`, [
    id,
  ]);
  if (!mo) return null;
  mo.fiche_a_valider = Boolean(mo.fiche_a_valider);
  const [posologies, presentations] = await Promise.all([
    q(
      `SELECT population, indication, voie, dose_texte, dose_par_kg, dose_par_m2, dose_max, dose_base, unite, frequence,
              frequence_type, prises_par_jour, intervalle_heures, duree, durees, securite, remarque,
              structure_a_valider
         FROM molecule_posologies WHERE molecule_id = ? ORDER BY ordre`,
      [id],
    ),
    q(
      `SELECT forme, voie, quantite, unite, par_quantite, par_unite, secable, conditionnement_quantite,
              conditionnement_unite, libelle, source, a_valider
         FROM molecule_presentations WHERE molecule_id = ? ORDER BY ordre, id`,
      [id],
    ),
  ]);
  return {
    ...mo,
    posologies: posologies.map((p) => ({
      ...p,
      dose_par_kg: nombreOuNull(p.dose_par_kg),
      dose_par_m2: nombreOuNull(p.dose_par_m2),
      dose_max: nombreOuNull(p.dose_max),
      intervalle_heures: nombreOuNull(p.intervalle_heures),
      durees: typeof p.durees === 'string' ? JSON.parse(p.durees) : p.durees || [],
      structure_a_valider: Boolean(p.structure_a_valider),
    })),
    presentations: presentations.map((pr) => ({
      ...pr,
      quantite: Number(pr.quantite),
      par_quantite: Number(pr.par_quantite),
      conditionnement_quantite: nombreOuNull(pr.conditionnement_quantite),
      secable: Boolean(pr.secable),
      a_valider: Boolean(pr.a_valider),
    })),
  };
}

module.exports = { etatPathologie, etatMolecule, nombreOuNull, NIVEAUX, FICHE_PHARMACO, PATHOLOGIE_TEXTES };
