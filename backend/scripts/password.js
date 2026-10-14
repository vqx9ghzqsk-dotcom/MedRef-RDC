'use strict';

/**
 * Réinitialise le mot de passe d'un compte existant (mot de passe oublié), en local :
 *   npm run user:password -- email@exemple.cd
 * Le nouveau mot de passe est demandé deux fois, en saisie masquée ; il doit respecter
 * la même politique que l'application. Les sessions ouvertes sont déconnectées et un
 * éventuel blocage pour essais infructueux est levé.
 */

const readline = require('readline');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
const config = require('../src/config');
const { verifierMotDePasse } = require('../src/utils/motDePasse');

/** Lit une ligne sans l'afficher dans le terminal. */
function saisieMasquee(question) {
  return new Promise((resolve, reject) => {
    if (!process.stdin.isTTY) {
      reject(new Error('Lancez ce script dans un terminal interactif (saisie masquée requise)'));
      return;
    }
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    rl.stdoutMuted = true;
    rl._writeToOutput = (texte) => {
      if (!rl.stdoutMuted || texte.startsWith(question)) rl.output.write(texte);
    };
    rl.question(question, (reponse) => {
      rl.output.write('\n');
      rl.close();
      resolve(reponse);
    });
  });
}

async function main() {
  const email = (process.argv[2] || '').trim().toLowerCase();
  if (!email) {
    console.error('Usage : npm run user:password -- <email>');
    process.exit(1);
  }
  const conn = await mysql.createConnection({ ...config.db, charset: 'utf8mb4' });
  try {
    const [[user]] = await conn.execute('SELECT id, email, nom FROM users WHERE email = ?', [email]);
    if (!user) {
      console.error(`✖ Aucun compte pour « ${email} ».`);
      process.exit(1);
    }
    console.log(
      `Nouveau mot de passe pour ${user.nom} (${user.email}) — 10 caractères minimum, lettres et chiffres.`,
    );
    const premier = await saisieMasquee('Nouveau mot de passe : ');
    const probleme = verifierMotDePasse(premier, { email: user.email, nom: user.nom });
    if (probleme) {
      console.error(`✖ ${probleme}`);
      process.exit(1);
    }
    const second = await saisieMasquee('Confirmez le mot de passe : ');
    if (second !== premier) {
      console.error('✖ Les deux saisies ne correspondent pas.');
      process.exit(1);
    }
    const hash = await bcrypt.hash(premier, 10);
    await conn.execute(
      `UPDATE users SET password_hash = ?, token_version = token_version + 1,
              echecs_connexion = 0, bloque_jusqu_a = NULL
        WHERE id = ?`,
      [hash, user.id],
    );
    console.log(`✔ Mot de passe de ${user.email} modifié. Connectez-vous avec le nouveau mot de passe.`);
  } finally {
    await conn.end();
  }
}

main().catch((err) => {
  console.error('✖', err.message);
  process.exit(1);
});
