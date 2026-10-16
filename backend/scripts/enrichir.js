'use strict';

/**
 * Ajoute à une base en service le contenu nouveau des fichiers seed-data/ sans
 * rien écraser : formes cliniques des fiches qui n’en ont pas encore, syndromes et
 * termes du glossaire absents, signes d'alerte non renseignés, produits des catalogues,
 * répertoire des AMM de l'ACOREP, fiches des substances absentes, posologies des molécules
 * qui n'en ont aucune et protocoles de validation des fiches (sources et liens manquants).
 *   npm run db:enrichir
 * Une sauvegarde est faite avant toute écriture.
 */

const config = require('../src/config');
const { connect, analyserTables } = require('../db/connexion');
const { backup } = require('../db/sauvegarde');
const { chargerSemiologie } = require('../db/semiologie');
const { chargerCatalogues } = require('../db/catalogues');
const { chargerAcorep } = require('../db/acorep');
const { appliquerSelection } = require('../db/selection');
const { chargerNouvellesFiches } = require('../db/fiches');
const { chargerPosologiesAjoutees } = require('../db/posologiesAjoutees');
const { chargerProtocolesValidation } = require('../db/protocolesValidation');
const data = require('../db/seed-data');

async function main() {
  const conn = await connect();
  try {
    const s = await backup(conn, { dir: config.backup.dir, keep: 0, motif: 'avant-enrichissement' });
    console.log(`✔ Sauvegarde préalable : ${s.file}`);
    await conn.beginTransaction();
    const semiologie = await chargerSemiologie(conn, data);
    const catalogues = await chargerCatalogues(conn, data.catalogues);
    const acorep = await chargerAcorep(conn, data.acorep);
    const selection = await appliquerSelection(conn, data.selection);
    const fiches = await chargerNouvellesFiches(conn, data, data.ajouts);
    const posologies = await chargerPosologiesAjoutees(conn, data.posologiesAjoutees);
    const protocoles = await chargerProtocolesValidation(conn, data.protocolesValidation);
    await conn.commit();
    await analyserTables(conn);
    console.log('✔ Contenu ajouté', {
      semiologie,
      catalogues,
      acorep,
      selection,
      fiches,
      posologies,
      protocoles,
    });
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
