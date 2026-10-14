'use strict';

/**
 * Posologies ajoutées par lots (seed-data/posologies-ajoutees/) pour les molécules citées
 * dans les fiches qui n'en ont aucune. Chargement non destructif (seed et db:enrichir) :
 * une molécule qui a déjà au moins une posologie n'est jamais modifiée. Tout ce qui est
 * chargé est marqué « structure à valider » (rédigé par IA, relecture médicale requise).
 */

const POPULATIONS = ['adulte', 'enfant', 'nouveau_ne', 'grossesse'];
const SECURITES = [null, 'autorise', 'prudence', 'contre_indique'];
const BASES = [null, 'par_prise', 'par_jour'];
const FREQUENCES = [null, 'prises_par_jour', 'intervalle', 'dose_unique', 'perfusion', 'schema'];
const UNITES_DUREE = ['heures', 'jours', 'semaines', 'mois', 'doses'];

/** Vérifie une ligne ; renvoie la liste des problèmes (vide si la ligne est correcte). */
function verifierLigne(slug, l, i) {
  const ou = `${slug}[${i}]`;
  const pb = [];
  if (!POPULATIONS.includes(l.population)) pb.push(`${ou} : population « ${l.population} »`);
  if (!l.dose_texte) pb.push(`${ou} : dose_texte manquante`);
  if (!SECURITES.includes(l.securite)) pb.push(`${ou} : sécurité « ${l.securite} »`);
  if (!BASES.includes(l.dose_base)) pb.push(`${ou} : base « ${l.dose_base} »`);
  if (!FREQUENCES.includes(l.frequence_type)) pb.push(`${ou} : fréquence « ${l.frequence_type} »`);
  if (l.frequence_type === 'prises_par_jour' && !(l.prises_par_jour >= 1)) pb.push(`${ou} : prises par jour`);
  if (l.frequence_type === 'intervalle' && !(l.intervalle_heures > 0)) pb.push(`${ou} : intervalle`);
  if (l.dose_par_kg !== null && !l.dose_base) pb.push(`${ou} : dose par kg sans base`);
  for (const d of l.durees) {
    if (!(d.min > 0) || !UNITES_DUREE.includes(d.unite) || (d.max !== null && d.max < d.min)) {
      pb.push(`${ou} : durée ${JSON.stringify(d)}`);
    }
  }
  if (l.durees.filter((d) => d.defaut).length > 1) pb.push(`${ou} : plusieurs durées par défaut`);
  return pb;
}

/**
 * @param conn connexion mysql2 (transaction en cours)
 * @param lots { slug: [ligne, …] } (voir seed-data/posologies-ajoutees/index.js)
 */
async function chargerPosologiesAjoutees(conn, lots) {
  const problemes = [];
  for (const [slug, lignes] of Object.entries(lots)) {
    lignes.forEach((l, i) => problemes.push(...verifierLigne(slug, l, i)));
  }
  const [molecules] = await conn.query('SELECT id, slug FROM molecules');
  const ids = new Map(molecules.map((m) => [m.slug, m.id]));
  for (const slug of Object.keys(lots)) if (!ids.has(slug)) problemes.push(`${slug} : molécule inconnue`);
  if (problemes.length) {
    throw new Error(`Posologies ajoutées invalides :\n  - ${problemes.join('\n  - ')}`);
  }

  const [existantes] = await conn.query('SELECT DISTINCT molecule_id FROM molecule_posologies');
  const dejaRenseignees = new Set(existantes.map((r) => r.molecule_id));
  let molecules_completees = 0;
  let lignes_ajoutees = 0;
  for (const [slug, lignes] of Object.entries(lots)) {
    const id = ids.get(slug);
    if (dejaRenseignees.has(id)) continue;
    for (const [i, l] of lignes.entries()) {
      await conn.query(
        `INSERT INTO molecule_posologies (molecule_id, population, indication, voie, dose_texte, dose_par_kg,
           dose_max, dose_base, unite, frequence, frequence_type, prises_par_jour, intervalle_heures, duree,
           durees, securite, remarque, structure_a_valider, ordre)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)`,
        [
          id,
          l.population,
          l.indication,
          l.voie,
          l.dose_texte,
          l.dose_par_kg,
          l.dose_max,
          l.dose_base,
          l.unite,
          l.frequence,
          l.frequence_type,
          l.prises_par_jour,
          l.intervalle_heures,
          l.duree,
          l.durees.length ? JSON.stringify(l.durees) : null,
          l.securite,
          l.remarque,
          i + 1,
        ],
      );
      lignes_ajoutees += 1;
    }
    molecules_completees += 1;
  }
  return { molecules_completees, lignes_ajoutees };
}

module.exports = { chargerPosologiesAjoutees, verifierLigne };
