'use strict';

/**
 * Connexion MySQL « administrative » partagée par les scripts (migrations,
 * sauvegardes, restauration) : multi-instructions autorisées, dates et JSON
 * lus tels quels pour être réécrits à l'identique.
 */

const mysql = require('mysql2/promise');
const config = require('../src/config');

/** Une base de test se reconnaît à son nom (medref_rdc_test, medref_test…). */
function isTestDatabase(name) {
  return /(^|_)test(_|$)/i.test(name);
}

async function connect({ database = config.db.database, createIfMissing = false } = {}) {
  const conn = await mysql.createConnection({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    multipleStatements: true,
    charset: 'utf8mb4',
    dateStrings: true,
    supportBigNumbers: true,
    bigNumberStrings: true,
    typeCast(field, next) {
      // JSON gardé en texte : il sera réinséré tel quel lors d'une restauration
      if (field.type === 'JSON') return field.string('utf8');
      return next();
    },
  });
  if (database) {
    if (!/^[\w$]+$/.test(database)) {
      await conn.end();
      throw new Error(`Nom de base invalide : ${database}`);
    }
    if (createIfMissing) {
      await conn.query(
        `CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`,
      );
    }
    await conn.query(`USE \`${database}\``);
  }
  return conn;
}

module.exports = { connect, isTestDatabase };
