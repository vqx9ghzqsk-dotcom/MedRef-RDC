'use strict';

/**
 * Import des catalogues de firmes (seed-data/catalogues/*.json, produits par
 * scripts/catalogues/extraire_catalogues.py) dans la table `medicaments`.
 *
 * Sans perte : un produit déjà importé (même `catalogue_ref`) n'est jamais modifié,
 * pour conserver les corrections faites dans /admin (photo, liens, disponibilité…).
 */

const { construireIndex, rapprocher } = require('./correspondance');

const AVERTISSEMENT = 'informations générales du catalogue, à vérifier sur la notice (RCP) du produit';
const tronquer = (s, n) => (s && s.length > n ? `${s.slice(0, n - 1)}…` : s || null);

async function indexMolecules(conn) {
  const [rows] = await conn.execute('SELECT id, slug, dci FROM molecules');
  return { index: construireIndex(rows), ids: new Map(rows.map((r) => [r.slug, r.id])) };
}

async function firme(conn, f) {
  const [[existant]] = await conn.execute('SELECT id FROM operateurs WHERE nom = ? OR slug = ?', [
    f.nom,
    f.slug,
  ]);
  if (existant) {
    // Compléter sans écraser ce qui a pu être saisi
    await conn.execute(
      `UPDATE operateurs SET slug = COALESCE(slug, ?), pays = COALESCE(pays, ?), site_web = COALESCE(site_web, ?),
              source_catalogue = COALESCE(source_catalogue, ?) WHERE id = ?`,
      [f.slug, f.pays, f.site_web, f.source, existant.id],
    );
    return existant.id;
  }
  const [r] = await conn.execute(
    'INSERT INTO operateurs (nom, slug, type, pays, site_web, source_catalogue) VALUES (?, ?, ?, ?, ?, ?)',
    [f.nom, f.slug, f.type || 'fabricant', f.pays || null, f.site_web || null, f.source || null],
  );
  return r.insertId;
}

async function lier(conn, medicamentId, slugs, ids) {
  for (const [i, slug] of slugs.entries()) {
    await conn.execute(
      `INSERT IGNORE INTO medicament_molecules (medicament_id, molecule_id, ordre, origine)
       VALUES (?, ?, ?, 'auto')`,
      [medicamentId, ids.get(slug), i + 1],
    );
  }
}

/** Importe les catalogues ; renvoie le nombre de produits ajoutés et de liens créés. */
async function chargerCatalogues(conn, catalogues) {
  const { index, ids } = await indexMolecules(conn);
  const compte = { firmes: 0, produits: 0, conserves: 0, lies_auto: 0, lies_partiels: 0, a_lier: 0 };
  for (const { firme: f, produits } of catalogues) {
    const operateurId = await firme(conn, f);
    compte.firmes += 1;
    for (const p of produits) {
      const [[deja]] = await conn.execute('SELECT id FROM medicaments WHERE catalogue_ref = ?', [p.ref]);
      if (deja) {
        compte.conserves += 1;
        continue;
      }
      const r = rapprocher(p, index);
      const [ins] = await conn.execute(
        `INSERT INTO medicaments (nom_commercial, dci, operateur_id, forme, presentation, indication, posologie,
           photo_url, disponible_rdc, sources_text, catalogue_ref, catalogue_classe, catalogue_sous_classe,
           composition_texte, mecanisme, forme_categorie, pediatrique, nb_composants, liaison)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          tronquer(p.nom, 190),
          tronquer(p.dci || p.composition || p.nom, 500),
          operateurId,
          tronquer(p.forme, 120),
          tronquer(p.presentation, 255),
          p.indications || null,
          p.posologie || null,
          p.photo || null,
          `Catalogue ${f.nom} — ${AVERTISSEMENT}.`,
          p.ref,
          tronquer(p.classe, 190),
          tronquer(p.sous_classe, 190),
          tronquer(p.composition, 500),
          p.mecanisme || null,
          tronquer(p.forme, 80),
          p.enfant ? 1 : 0,
          Math.min(r.nbComposants, 255),
          r.liaison,
        ],
      );
      await lier(conn, ins.insertId, r.molecules, ids);
      compte.produits += 1;
      if (r.liaison === 'auto') compte.lies_auto += 1;
      else if (r.liaison === 'partielle') compte.lies_partiels += 1;
      else compte.a_lier += 1;
    }
  }
  return compte;
}

/**
 * Relance le rapprochement automatique pour les produits de catalogue pas encore
 * entièrement liés (après la création de nouvelles molécules) : ajoute les liens
 * trouvés, ne retire jamais un lien existant ni ne touche aux produits vérifiés.
 */
async function relierAutomatiquement(conn) {
  const { index, ids } = await indexMolecules(conn);
  const [produits] = await conn.execute(
    `SELECT m.id, m.dci, m.composition_texte AS composition,
            (SELECT COUNT(*) FROM medicament_molecules x WHERE x.medicament_id = m.id) AS nb_liens
       FROM medicaments m
      WHERE m.catalogue_ref IS NOT NULL AND m.liaison IN ('aucune', 'partielle')`,
  );
  let nouveaux = 0;
  for (const p of produits) {
    const r = rapprocher(p, index);
    if (!r.molecules.length) continue;
    await lier(conn, p.id, r.molecules, ids);
    const [[{ n }]] = await conn.execute(
      'SELECT COUNT(*) AS n FROM medicament_molecules WHERE medicament_id = ?',
      [p.id],
    );
    if (Number(n) > Number(p.nb_liens)) nouveaux += 1;
    await conn.execute(
      'UPDATE medicaments SET liaison = ?, nb_composants = GREATEST(COALESCE(nb_composants, 0), ?) WHERE id = ?',
      [r.liaison, r.nbComposants, p.id],
    );
  }
  return { examines: produits.length, completes: nouveaux };
}

module.exports = { chargerCatalogues, relierAutomatiquement };
