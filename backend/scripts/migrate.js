'use strict';

/**
 * Gestion du schéma de la base.
 *   npm run db:migrate   → applique les migrations en attente (sans perte de données)
 *   npm run db:status    → affiche les migrations appliquées et en attente
 *   npm run db:reset     → DESTRUCTIF : recrée tout le schéma et recharge seed-data/
 *
 * Sur une base qui n'est pas une base de test, db:reset exige la confirmation
 * explicite du nom de la base et fait d'abord une sauvegarde :
 *   npm run db:reset -- --confirmer=medref_rdc
 */

const config = require('../src/config');
const { connect, isTestDatabase, analyserTables } = require('../db/connexion');
const { migrate, createBaseline, status } = require('../db/migrations');
const { backup } = require('../db/sauvegarde');
const { seed } = require('../db/seed');

const args = process.argv.slice(2);
const database = config.db.database;

function option(name) {
  const arg = args.find((a) => a.startsWith(`--${name}=`));
  return arg ? arg.slice(name.length + 3) : undefined;
}

async function compterPathologies(conn) {
  try {
    const [[{ n }]] = await conn.query('SELECT COUNT(*) AS n FROM pathologies');
    return Number(n);
  } catch {
    return 0;
  }
}

async function reset(conn) {
  const protegee = !isTestDatabase(database);
  if (protegee && option('confirmer') !== database) {
    throw new Error(
      `db:reset efface TOUTES les données de « ${database} » (corrections et validations faites dans /admin, ` +
        'comptes, prescriptions) et les remplace par les fichiers seed-data/.\n' +
        `  Pour confirmer : npm run db:reset -- --confirmer=${database}`,
    );
  }
  if (protegee && (await compterPathologies(conn)) > 0) {
    const s = await backup(conn, { dir: config.backup.dir, keep: 0, motif: 'avant-reset' });
    console.log(`✔ Sauvegarde préalable : ${s.file}`);
  }
  await createBaseline(conn);
  console.log('✔ Schéma de départ recréé');
  await migrate(conn, { log: console.log });
  if (args.includes('--seed')) {
    const counts = await seed(conn);
    await analyserTables(conn);
    console.log('✔ Données insérées', counts);
  }
}

async function afficherStatut(conn) {
  const { appliquees, enAttente, modifiees } = await status(conn);
  console.log(`Base : ${database}`);
  if (!appliquees.length) console.log('  Aucun suivi : lancez npm run db:migrate');
  for (const m of appliquees) console.log(`  ✔ ${m.version} ${m.nom} (${m.applied_at})`);
  for (const m of enAttente) console.log(`  … ${m.file} en attente`);
  for (const m of modifiees) console.log(`  ✖ ${m.file} modifiée après application`);
}

async function main() {
  const conn = await connect({ database, createIfMissing: true });
  try {
    if (args.includes('--reset')) {
      await reset(conn);
    } else if (args.includes('--status')) {
      await afficherStatut(conn);
    } else {
      const { enAttente } = await status(conn);
      if (enAttente.length && (await compterPathologies(conn)) > 0) {
        const s = await backup(conn, { dir: config.backup.dir, keep: 0, motif: 'avant-migration' });
        console.log(`✔ Sauvegarde préalable : ${s.file}`);
      }
      await migrate(conn, { log: console.log });
    }
  } finally {
    await conn.end();
  }
}

main().catch((err) => {
  console.error(`✖ ${err.message}`);
  process.exit(1);
});
