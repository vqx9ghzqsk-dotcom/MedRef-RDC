'use strict';

/**
 * Attribue un rôle à un compte existant (l'inscription crée toujours un « user »).
 *   npm run user:role -- email@exemple.cd admin
 *   npm run user:role -- email@exemple.cd medecin
 *   npm run user:role -- email@exemple.cd user      (retirer les droits)
 * Le changement est pris en compte immédiatement pour l'administration (le rôle est
 * relu en base) ; l'utilisateur doit se reconnecter pour voir le lien dans le menu.
 */

const mysql = require('mysql2/promise');
const config = require('../src/config');

const ROLES = ['user', 'medecin', 'admin'];

async function main() {
  const [email, role] = process.argv.slice(2);
  if (!email || !ROLES.includes(role)) {
    console.error(`Usage : npm run user:role -- <email> <${ROLES.join('|')}>`);
    process.exit(1);
  }
  const conn = await mysql.createConnection({ ...config.db, charset: 'utf8mb4' });
  try {
    const [result] = await conn.execute('UPDATE users SET role = ? WHERE email = ?', [
      role,
      email.trim().toLowerCase(),
    ]);
    if (!result.affectedRows) {
      console.error(`✖ Aucun compte pour « ${email} ». Créez-le d'abord depuis l'application (Inscription).`);
      process.exit(1);
    }
    console.log(`✔ ${email} a maintenant le rôle « ${role} »`);
  } finally {
    await conn.end();
  }
}

main().catch((err) => {
  console.error('✖', err.message);
  process.exit(1);
});
