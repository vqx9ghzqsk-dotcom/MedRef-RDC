'use strict';

/**
 * Sauvegardes de la base.
 *   npm run db:backup                         → nouvelle sauvegarde (+ rotation)
 *   npm run db:backup -- --liste              → liste les sauvegardes existantes
 *   npm run db:restore -- <fichier.sql.gz>    → restaure une sauvegarde
 *
 * La restauration remplace le contenu actuel : sur une base qui n'est pas une
 * base de test, elle exige --confirmer=<nom de la base> et sauvegarde d'abord
 * l'état actuel (fichier « avant-restauration »).
 */

const fs = require('fs');
const path = require('path');
const config = require('../src/config');
const { connect, isTestDatabase } = require('../db/connexion');
const { backup, restore, listBackups } = require('../db/sauvegarde');

const args = process.argv.slice(2);
const database = config.db.database;
const { dir, keep } = config.backup;

function option(name) {
  const arg = args.find((a) => a.startsWith(`--${name}=`));
  return arg ? arg.slice(name.length + 3) : undefined;
}

function taille(file) {
  return `${(fs.statSync(file).size / 1024).toFixed(0)} Ko`;
}

function lister() {
  const backups = listBackups(dir, database);
  console.log(`Sauvegardes de ${database} dans ${dir} :`);
  if (!backups.length) console.log('  (aucune)');
  for (const b of backups) {
    console.log(`  ${path.basename(b.file)}  ${taille(b.file)}${b.motif ? '  (conservée)' : ''}`);
  }
}

async function sauvegarder() {
  const conn = await connect({ database });
  try {
    const s = await backup(conn, { dir, keep });
    console.log(`✔ Sauvegarde : ${s.file} (${s.tables} tables, ${s.lignes} lignes, ${taille(s.file)})`);
    for (const f of s.removed) console.log(`  rotation : ${path.basename(f)} supprimée`);
  } finally {
    await conn.end();
  }
}

async function restaurer() {
  const cible = args.find((a) => !a.startsWith('--'));
  if (!cible) throw new Error('Indiquez le fichier : npm run db:restore -- <fichier.sql.gz>');
  const file = fs.existsSync(cible) ? path.resolve(cible) : path.join(dir, cible);
  if (!fs.existsSync(file)) throw new Error(`Fichier introuvable : ${cible}`);
  if (!isTestDatabase(database) && option('confirmer') !== database) {
    throw new Error(
      `La restauration remplace tout le contenu actuel de « ${database} » par ${path.basename(file)}.\n` +
        `  Pour confirmer : npm run db:restore -- ${cible} --confirmer=${database}`,
    );
  }
  const conn = await connect({ database, createIfMissing: true });
  try {
    const avant = await backup(conn, { dir, keep: 0, motif: 'avant-restauration' });
    console.log(`✔ État actuel sauvegardé : ${avant.file}`);
    await restore(conn, file);
    console.log(`✔ ${path.basename(file)} restaurée dans ${database}`);
  } finally {
    await conn.end();
  }
}

async function main() {
  if (args.includes('--restaurer')) return restaurer();
  if (args.includes('--liste')) return lister();
  return sauvegarder();
}

main().catch((err) => {
  console.error(`✖ ${err.message}`);
  process.exit(1);
});
