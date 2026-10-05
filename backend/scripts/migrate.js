'use strict';

/**
 * Crée le schéma et (optionnellement) insère les données d'amorçage.
 *   node scripts/migrate.js            → schéma uniquement (DROP + CREATE)
 *   node scripts/migrate.js --seed     → schéma + données
 *
 * Le schéma supprime et recrée toutes les tables : NE PAS lancer en production
 * sur une base contenant des données réelles.
 */

const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const config = require('../src/config');
const { seed } = require('../db/seed');

async function main() {
  const withSeed = process.argv.includes('--seed');
  const conn = await mysql.createConnection({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    multipleStatements: true,
    charset: 'utf8mb4',
  });
  try {
    await conn.query(
      `CREATE DATABASE IF NOT EXISTS \`${config.db.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`,
    );
    await conn.query(`USE \`${config.db.database}\``);
    const schema = fs.readFileSync(path.join(__dirname, '..', 'db', 'schema.sql'), 'utf8');
    await conn.query(schema);
    console.log('✔ Schéma créé');
    if (withSeed) {
      const counts = await seed(conn);
      console.log('✔ Données insérées', counts);
    }
  } finally {
    await conn.end();
  }
}

main().catch((err) => {
  console.error('✖ Migration échouée :', err.message);
  process.exit(1);
});
