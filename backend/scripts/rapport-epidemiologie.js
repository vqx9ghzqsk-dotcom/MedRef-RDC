'use strict';

/**
 * Liste lisible de l'épidémiologie des fiches (db/seed-data/epidemiologie.js) pour la relecture
 * médicale : docs/epidemiologie-rdc.md.
 *   npm run diagnostic:epidemiologie
 */

const fs = require('fs');
const path = require('path');
const data = require('../db/seed-data');
const epi = require('../db/seed-data/epidemiologie');

const nom = new Map([...data.pathologies, ...(data.ajouts.fiches || [])].map((p) => [p.slug, p.nom]));
const liste = (slugs) =>
  slugs
    .map((s) => nom.get(s) || s)
    .sort((a, b) => a.localeCompare(b, 'fr'))
    .join(' · ');

const lignes = [
  '# Épidémiologie des fiches en RDC (à valider)',
  '',
  'Source : backend/db/seed-data/epidemiologie.js (`npm run diagnostic:epidemiologie` régénère cette page).',
  'Sert de probabilité de départ dans l’aide au diagnostic : à tableau clinique égal, une maladie très',
  'fréquente passe devant une maladie rare. Bonus : très fréquente +0,06 · fréquente +0,03 · rare −0,05 ·',
  'saison correspondante +0,03 · province de foyer +0,08 (hors foyer −0,04). Toute fiche non listée est',
  '« peu fréquente ».',
  '',
  'Dites-moi simplement les changements (ajouter, retirer, déplacer une fiche).',
  '',
  `## Très fréquentes (${epi.TRES_FREQUENTES.length})`,
  '',
  liste(epi.TRES_FREQUENTES),
  '',
  `## Fréquentes (${epi.FREQUENTES.length})`,
  '',
  liste(epi.FREQUENTES),
  '',
  `## Rares (${epi.RARES.length})`,
  '',
  liste(epi.RARES),
  '',
  '## Saisons',
  '',
  ...Object.entries(epi.SAISONS).map(
    ([saison, motif]) =>
      `- ${saison === 'pluies' ? 'Saison des pluies' : 'Saison sèche'} : fiches dont le nom répond à ${motif}`,
  ),
  '',
  '## Foyers géographiques',
  '',
  ...Object.entries(epi.FOYERS).map(
    ([slug, provinces]) => `- ${nom.get(slug) || slug} : ${provinces.join(', ')}`,
  ),
  '',
];
fs.writeFileSync(path.join(__dirname, '..', '..', 'docs', 'epidemiologie-rdc.md'), lignes.join('\n'));
console.log('✔ docs/epidemiologie-rdc.md');
