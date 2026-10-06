'use strict';

/**
 * Sauvegarde et restauration de la base, en Node pur (aucune dépendance à
 * mysqldump) : un fichier .sql.gz qui recrée toutes les tables et leurs lignes.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const mysql = require('mysql2/promise');

const BATCH = 200;
const FILE_RE = /^(.+)-(\d{4}-\d{2}-\d{2}_\d{6})(-[a-z-]+)?\.sql\.gz$/;

function quoteId(name) {
  return `\`${String(name).replace(/`/g, '``')}\``;
}

function horodatage(date = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return (
    `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}_` +
    `${p(date.getHours())}${p(date.getMinutes())}${p(date.getSeconds())}`
  );
}

function escapeValue(value) {
  if (value === null || value === undefined) return 'NULL';
  if (Buffer.isBuffer(value)) return `X'${value.toString('hex')}'`;
  // Les dates arrivent en texte (dateStrings) et le JSON aussi : tout est échappé comme chaîne
  return mysql.escape(typeof value === 'object' ? JSON.stringify(value) : value);
}

/** Produit le script SQL complet de la base courante de `conn`. */
async function dumpSql(conn) {
  const [[{ db: database }]] = await conn.query('SELECT DATABASE() AS db');
  const [tables] = await conn.query(
    "SELECT TABLE_NAME AS name FROM information_schema.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_TYPE = 'BASE TABLE' ORDER BY TABLE_NAME",
    [database],
  );
  const out = [
    `-- Sauvegarde MedRef RDC de la base ${database}, ${new Date().toISOString()}`,
    `-- Tables : ${tables.length}`,
    'SET NAMES utf8mb4;',
    'SET FOREIGN_KEY_CHECKS = 0;',
    "SET SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO';",
    'SET UNIQUE_CHECKS = 0;',
  ];
  let lignes = 0;
  for (const { name } of tables) {
    const [[create]] = await conn.query(`SHOW CREATE TABLE ${quoteId(name)}`);
    out.push('', `DROP TABLE IF EXISTS ${quoteId(name)};`, `${create['Create Table']};`);
    const [rows] = await conn.query(`SELECT * FROM ${quoteId(name)}`);
    if (!rows.length) continue;
    const cols = Object.keys(rows[0]).map(quoteId).join(', ');
    for (let i = 0; i < rows.length; i += BATCH) {
      const values = rows
        .slice(i, i + BATCH)
        .map((row) => `(${Object.values(row).map(escapeValue).join(', ')})`)
        .join(',\n');
      out.push(`INSERT INTO ${quoteId(name)} (${cols}) VALUES\n${values};`);
    }
    lignes += rows.length;
  }
  out.push('', 'SET UNIQUE_CHECKS = 1;', 'SET FOREIGN_KEY_CHECKS = 1;', '');
  return { sql: out.join('\n'), database, tables: tables.length, lignes };
}

/** Liste les sauvegardes d'une base, de la plus récente à la plus ancienne. */
function listBackups(dir, database) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .map((file) => ({ file, match: FILE_RE.exec(file) }))
    .filter(({ match }) => match && match[1] === database)
    .map(({ file, match }) => {
      const full = path.join(dir, file);
      return { file: full, motif: match[3] ? match[3].slice(1) : null, mtime: fs.statSync(full).mtime };
    })
    .sort((a, b) => b.mtime - a.mtime);
}

/**
 * Supprime les sauvegardes périodiques au-delà des `keep` plus récentes. Les
 * sauvegardes faites avant une opération (avant-reset…) ne sont jamais supprimées.
 */
function pruneBackups(dir, database, keep) {
  const removed = [];
  for (const { file } of listBackups(dir, database)
    .filter((b) => !b.motif)
    .slice(keep)) {
    fs.unlinkSync(file);
    removed.push(file);
  }
  return removed;
}

/**
 * Écrit une sauvegarde compressée dans `dir` et applique la rotation.
 * `motif` (ex. « avant-reset ») est ajouté au nom du fichier.
 */
async function backup(conn, { dir, keep = 30, motif } = {}) {
  const { sql, database, tables, lignes } = await dumpSql(conn);
  fs.mkdirSync(dir, { recursive: true });
  const suffix = motif ? `-${motif}` : '';
  const file = path.join(dir, `${database}-${horodatage()}${suffix}.sql.gz`);
  const tmp = `${file}.partiel`;
  fs.writeFileSync(tmp, zlib.gzipSync(sql));
  fs.renameSync(tmp, file);
  const removed = keep > 0 ? pruneBackups(dir, database, keep) : [];
  return { file, database, tables, lignes, removed };
}

/** Recharge une sauvegarde (.sql ou .sql.gz) dans la base courante de `conn`. */
async function restore(conn, file) {
  const raw = fs.readFileSync(file);
  const sql = file.endsWith('.gz') ? zlib.gunzipSync(raw).toString('utf8') : raw.toString('utf8');
  if (!sql.startsWith('-- Sauvegarde MedRef RDC')) {
    throw new Error(`${path.basename(file)} n'est pas une sauvegarde MedRef RDC`);
  }
  await conn.query(sql);
}

module.exports = { dumpSql, backup, restore, listBackups, pruneBackups, horodatage };
