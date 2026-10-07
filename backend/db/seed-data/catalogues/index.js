'use strict';

/**
 * Catalogues de firmes pharmaceutiques, extraits des fichiers Word par
 * scripts/catalogues/extraire_catalogues.py (un fichier JSON par firme).
 * Photos correspondantes : backend/medias/produits/<firme>/.
 */

const fs = require('fs');
const path = require('path');

module.exports = fs
  .readdirSync(__dirname)
  .filter((f) => f.endsWith('.json'))
  .sort()
  .map((f) => JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8')));
