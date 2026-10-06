'use strict';

/**
 * Formes cliniques d'une fiche, avec leurs syndromes et leurs examens de confirmation.
 * `q(sql, params)` : exécuteur de requêtes (pool ou connexion de transaction).
 */
async function chargerFormes(q, pathologieId) {
  const [formes, syndromes, examens] = await Promise.all([
    q(
      `SELECT id, nom, type, description, terrain, signes_fonctionnels, signes_generaux, signes_physiques,
              paraclinique, etiologies
         FROM pathologie_formes WHERE pathologie_id = ? ORDER BY ordre, id`,
      [pathologieId],
    ),
    q(
      `SELECT fs.forme_id, s.slug, s.nom
         FROM forme_syndromes fs
         JOIN syndromes s ON s.id = fs.syndrome_id
         JOIN pathologie_formes f ON f.id = fs.forme_id
        WHERE f.pathologie_id = ? ORDER BY fs.ordre`,
      [pathologieId],
    ),
    q(
      `SELECT fe.forme_id, e.slug, e.nom, e.type, fe.interpretation
         FROM forme_examens fe
         JOIN examens e ON e.id = fe.examen_id
         JOIN pathologie_formes f ON f.id = fe.forme_id
        WHERE f.pathologie_id = ? ORDER BY fe.ordre`,
      [pathologieId],
    ),
  ]);
  const parForme = (rows, id) => rows.filter((r) => r.forme_id === id).map(({ forme_id: _f, ...r }) => r);
  return formes.map((f) => ({
    ...f,
    syndromes: parForme(syndromes, f.id),
    examens: parForme(examens, f.id),
  }));
}

/**
 * Signes d'alerte d'une urgence pour une fiche : ceux propres au lien, sinon les
 * premiers signes de gravité de l'urgence (lignes « - … » du texte).
 */
function signesAlerte(propres, signesGravite) {
  if (propres) return propres;
  if (!signesGravite) return null;
  const lignes = signesGravite
    .split('\n')
    .map((l) =>
      l
        .replace(/^\s*[-*]\s*/, '')
        .replace(/\*\*/g, '')
        .trim(),
    )
    .filter(Boolean)
    .slice(0, 3);
  return lignes.length ? lignes.join(' ; ') : null;
}

module.exports = { chargerFormes, signesAlerte };
