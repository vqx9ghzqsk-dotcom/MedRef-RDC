'use strict';

/**
 * Ajoute à une base en service le contenu nouveau des fichiers seed-data/ sans
 * rien écraser : formes cliniques des fiches qui n’en ont pas encore, syndromes et
 * termes du glossaire absents, signes d'alerte non renseignés.
 *   npm run db:enrichir
 * Une sauvegarde est faite avant toute écriture.
 */

const config = require('../src/config');
const { connect } = require('../db/connexion');
const { backup } = require('../db/sauvegarde');
const { chargerSemiologie } = require('../db/semiologie');
const { chargerCatalogues } = require('../db/catalogues');
const data = require('../db/seed-data');

async function main() {
  const conn = await connect();
  try {
    const s = await backup(conn, { dir: config.backup.dir, keep: 0, motif: 'avant-enrichissement' });
    console.log(`✔ Sauvegarde préalable : ${s.file}`);
    await conn.beginTransaction();
    const semiologie = await chargerSemiologie(conn, data);
    const catalogues = await chargerCatalogues(conn, data.catalogues);
    await conn.commit();
    console.log('✔ Contenu ajouté', { semiologie, catalogues });
  } catch (err) {
    await conn.rollback().catch(() => {});
    throw err;
  } finally {
    await conn.end();
  }
}

main().catch((err) => {
  console.error(`✖ ${err.message}`);
  process.exit(1);
});
