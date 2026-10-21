'use strict';

/**
 * Relève immédiate de la veille des actualités (sans attendre la programmation de l'API).
 * Usage : npm run veille
 */
const db = require('../src/db');
const { executerVeille } = require('../src/services/veille');

executerVeille(db)
  .then((bilan) => {
    console.log(bilan);
    return db.close();
  })
  .catch(async (err) => {
    console.error(`✖ ${err.message}`);
    await db.close();
    process.exitCode = 1;
  });
