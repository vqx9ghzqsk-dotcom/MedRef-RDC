'use strict';

/**
 * Sélection des opérateurs affichés (seed-data/operateurs-retenus.js) et rattachement
 * des marques à leur titulaire. Rejouable : recalcule la visibilité de chaque opérateur.
 */

const nomNormalise = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

async function appliquerSelection(conn, { OPERATEURS_RETENUS, TITULAIRES }) {
  const [operateurs] = await conn.execute('SELECT id, nom FROM operateurs');
  const retenus = operateurs.filter((o) => OPERATEURS_RETENUS.some((r) => r.motif.test(nomNormalise(o.nom))));
  await conn.execute('UPDATE operateurs SET visible = 0');
  if (retenus.length) {
    await conn.query('UPDATE operateurs SET visible = 1 WHERE id IN (?)', [retenus.map((o) => o.id)]);
  }

  // Variantes d'écriture d'une même firme (« Macleods … Plot », « … Phase ») : leurs produits
  // créés depuis le répertoire rejoignent la variante qui a le plus d'AMM
  let regroupes = 0;
  for (const r of OPERATEURS_RETENUS) {
    const variantes = retenus.filter((o) => r.motif.test(nomNormalise(o.nom)));
    if (!variantes.length) continue;
    if (variantes.length < 2) {
      await conn.execute('UPDATE operateurs SET nom_affiche = ? WHERE id = ?', [r.nom, variantes[0].id]);
      continue;
    }
    const [comptes] = await conn.query(
      `SELECT o.id, (SELECT COUNT(*) FROM autorisations_amm a WHERE a.operateur_id = o.id) AS n
         FROM operateurs o WHERE o.id IN (?) ORDER BY n DESC, o.id`,
      [variantes.map((o) => o.id)],
    );
    const [principal, ...autres] = comptes.map((c) => c.id);
    await conn.execute('UPDATE operateurs SET nom_affiche = ? WHERE id = ?', [r.nom, principal]);
    const [res] = await conn.query(
      `UPDATE medicaments SET operateur_id = ? WHERE operateur_id IN (?) AND catalogue_ref LIKE 'acorep:%'`,
      [principal, autres],
    );
    regroupes += res.affectedRows;
  }

  // Marques enregistrées au nom du fabricant : produit du catalogue du titulaire s'il existe
  // (avec sa photo), sinon le produit créé depuis le répertoire passe au titulaire.
  let rattaches = 0;
  for (const { titulaire, marques } of TITULAIRES) {
    const [[t]] = await conn.execute('SELECT id FROM operateurs WHERE nom = ?', [titulaire]);
    if (!t) continue;
    for (const marque of marques) {
      const [[catalogue]] = await conn.execute(
        `SELECT id FROM medicaments WHERE operateur_id = ? AND nom_commercial = ?
            AND (catalogue_ref IS NULL OR catalogue_ref NOT LIKE 'acorep:%') ORDER BY id LIMIT 1`,
        [t.id, marque],
      );
      if (catalogue) {
        const [r] = await conn.execute(
          `UPDATE autorisations_amm a JOIN medicaments m ON m.id = a.medicament_id
              SET a.medicament_id = ?
            WHERE a.marque = ? AND m.catalogue_ref LIKE 'acorep:%'`,
          [catalogue.id, marque],
        );
        rattaches += r.affectedRows;
      } else {
        const [r] = await conn.execute(
          `UPDATE medicaments m SET m.operateur_id = ?
            WHERE m.nom_commercial = ? AND m.catalogue_ref LIKE 'acorep:%' AND m.operateur_id <> ?`,
          [t.id, marque, t.id],
        );
        rattaches += r.affectedRows;
      }
    }
  }
  return { visibles: retenus.length, masques: operateurs.length - retenus.length, regroupes, rattaches };
}

module.exports = { appliquerSelection, nomNormalise };
