'use strict';

/**
 * Évolution du schéma sans perte de données.
 *
 * - `db/schema.sql` est le schéma DE DÉPART (version 000) : il n'est exécuté que
 *   sur une base vide ou lors d'un `db:reset`. Il ne doit plus être modifié.
 * - Toute évolution s'écrit dans `db/migrations/NNN_description.sql`
 *   (ALTER TABLE, CREATE TABLE…). Les fichiers sont appliqués une seule fois,
 *   dans l'ordre, et consignés dans la table `schema_migrations`.
 * - Une migration déjà appliquée ne doit jamais être modifiée : son empreinte
 *   est vérifiée et toute divergence bloque la migration.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const SCHEMA_FILE = path.join(__dirname, 'schema.sql');
const MIGRATIONS_DIR = path.join(__dirname, 'migrations');
const BASELINE = '000';
const FILE_RE = /^(\d{3})_([a-z0-9_-]+)\.sql$/;

function checksum(text) {
  return crypto.createHash('sha256').update(text.replace(/\r\n/g, '\n')).digest('hex');
}

/** Migrations présentes sur le disque, triées par version. */
function listMigrations(dir = MIGRATIONS_DIR) {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.sql'));
  const migrations = files.map((file) => {
    const match = FILE_RE.exec(file);
    if (!match) {
      throw new Error(`Nom de migration invalide : ${file} (attendu : 001_description.sql)`);
    }
    const sql = fs.readFileSync(path.join(dir, file), 'utf8');
    return { version: match[1], nom: match[2], file, sql, checksum: checksum(sql) };
  });
  migrations.sort((a, b) => a.version.localeCompare(b.version));
  for (let i = 1; i < migrations.length; i += 1) {
    if (migrations[i].version === migrations[i - 1].version) {
      throw new Error(`Deux migrations portent le numéro ${migrations[i].version}`);
    }
  }
  if (migrations.some((m) => m.version === BASELINE)) {
    throw new Error(`Le numéro ${BASELINE} est réservé au schéma de départ (schema.sql)`);
  }
  return migrations;
}

async function ensureTable(conn) {
  await conn.query(`CREATE TABLE IF NOT EXISTS schema_migrations (
    version    CHAR(3) PRIMARY KEY,
    nom        VARCHAR(150) NOT NULL,
    checksum   CHAR(64) NOT NULL,
    applied_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`);
}

async function tableExists(conn, name) {
  const [rows] = await conn.query(
    'SELECT 1 FROM information_schema.TABLES WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?',
    [name],
  );
  return rows.length > 0;
}

async function record(conn, version, nom, sum) {
  await conn.query('INSERT INTO schema_migrations (version, nom, checksum) VALUES (?, ?, ?)', [
    version,
    nom,
    sum,
  ]);
}

/** Recrée entièrement le schéma de départ (DESTRUCTIF) puis le marque comme appliqué. */
async function createBaseline(conn) {
  const sql = fs.readFileSync(SCHEMA_FILE, 'utf8');
  // Toutes les tables, y compris celles créées par des migrations : la base repart vide
  const [tables] = await conn.query(
    "SELECT TABLE_NAME AS name FROM information_schema.TABLES WHERE TABLE_SCHEMA = DATABASE() AND TABLE_TYPE = 'BASE TABLE'",
  );
  await conn.query('SET FOREIGN_KEY_CHECKS = 0');
  for (const { name } of tables) await conn.query(`DROP TABLE IF EXISTS \`${name.replace(/`/g, '``')}\``);
  await conn.query('SET FOREIGN_KEY_CHECKS = 1');
  await conn.query(sql);
  await ensureTable(conn);
  await record(conn, BASELINE, 'schema_initial', checksum(sql));
}

/** État des migrations : appliquées (en base) et en attente (sur le disque). */
async function status(conn, { dir } = {}) {
  const disque = listMigrations(dir);
  const appliquees = (await tableExists(conn, 'schema_migrations'))
    ? (
        await conn.query('SELECT version, nom, checksum, applied_at FROM schema_migrations ORDER BY version')
      )[0]
    : [];
  const parVersion = new Map(appliquees.map((m) => [m.version, m]));
  const modifiees = disque.filter(
    (m) => parVersion.has(m.version) && parVersion.get(m.version).checksum !== m.checksum,
  );
  const enAttente = disque.filter((m) => !parVersion.has(m.version));
  return { appliquees, enAttente, modifiees };
}

/**
 * Amène la base à la dernière version, sans rien supprimer.
 * - base vide : crée le schéma de départ ;
 * - base existante sans suivi (créée avant les migrations) : la marque à la version 000 ;
 * - puis applique les migrations en attente.
 */
async function migrate(conn, { dir, log = () => {} } = {}) {
  const baseExistante = await tableExists(conn, 'pathologies');
  const suivie = await tableExists(conn, 'schema_migrations');
  if (!baseExistante) {
    await createBaseline(conn);
    log('✔ Schéma de départ créé (base vide)');
  } else if (!suivie) {
    await ensureTable(conn);
    await record(conn, BASELINE, 'schema_initial', checksum(fs.readFileSync(SCHEMA_FILE, 'utf8')));
    log('✔ Base existante prise en charge par le suivi des migrations (version 000)');
  }

  const { enAttente, modifiees } = await status(conn, { dir });
  if (modifiees.length) {
    throw new Error(
      `Migration(s) déjà appliquée(s) puis modifiée(s) : ${modifiees.map((m) => m.file).join(', ')}. ` +
        'Ne modifiez jamais une migration appliquée : créez-en une nouvelle.',
    );
  }
  for (const m of enAttente) {
    try {
      await conn.query(m.sql);
    } catch (err) {
      // MySQL valide chaque ALTER immédiatement : signaler où l'on s'est arrêté
      throw new Error(`Échec de la migration ${m.file} : ${err.message}`);
    }
    await record(conn, m.version, m.nom, m.checksum);
    log(`✔ Migration ${m.file} appliquée`);
  }
  if (!enAttente.length) log('✔ Schéma à jour, aucune migration en attente');
  return enAttente.map((m) => m.file);
}

module.exports = { migrate, createBaseline, status, listMigrations, checksum, MIGRATIONS_DIR };
