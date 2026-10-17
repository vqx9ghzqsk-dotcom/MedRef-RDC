'use strict';

/**
 * Résumés tronqués : tant que `pathologies.resume` était limité à 500 caractères, MySQL (sans
 * mode strict) coupait en silence les résumés plus longs, souvent au milieu d'un mot. La
 * migration 015 porte la limite à 1 000 caractères ; ce module complète les résumés encore
 * coupés avec la fin du texte source.
 *
 * Un résumé n'est complété que s'il se termine exactement à l'endroit de la coupure : un résumé
 * réécrit depuis dans /admin n'est pas touché. Chaque ajout est consigné dans `modifications`.
 */

const { etatPathologie } = require('../src/services/etats');

const ANCIENNE_LIMITE = 500;
const TEMOIN = 30; // caractères précédant la coupure, qui doivent terminer le résumé en base

async function completerResumesTronques(conn, fiches) {
  const q = async (sql, params) => (await conn.query(sql, params))[0];
  const bilan = { completes: 0 };
  for (const f of fiches) {
    if (!f?.slug || typeof f.resume !== 'string') continue;
    // MySQL compte en caractères (points de code), pas en unités UTF-16
    const source = Array.from(f.resume);
    if (source.length <= ANCIENNE_LIMITE) continue;
    const [row] = await q('SELECT id, resume FROM pathologies WHERE slug = ?', [f.slug]);
    if (!row || typeof row.resume !== 'string') continue;
    const suite = source.slice(ANCIENNE_LIMITE).join('');
    const coupure = source.slice(ANCIENNE_LIMITE - TEMOIN, ANCIENNE_LIMITE).join('');
    if (row.resume.endsWith(suite) || !row.resume.endsWith(coupure)) continue;

    const avant = await etatPathologie(q, row.id);
    await q('UPDATE pathologies SET resume = ? WHERE id = ?', [row.resume + suite, row.id]);
    const apres = await etatPathologie(q, row.id);
    await q(
      `INSERT INTO modifications (user_id, entite, entite_id, action, resume, avant, apres)
       VALUES (NULL, 'pathologie', ?, 'modification', ?, ?, ?)`,
      [
        row.id,
        'Résumé complété : il avait été coupé à 500 caractères lors du chargement',
        JSON.stringify(avant),
        JSON.stringify(apres),
      ],
    );
    bilan.completes += 1;
  }
  return bilan;
}

module.exports = { completerResumesTronques, ANCIENNE_LIMITE };
