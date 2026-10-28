'use strict';

/**
 * Liste lisible des signes discriminants (db/seed-data/signes-fiches.js) pour la relecture
 * médicale : docs/signes-discriminants.md.
 *   npm run diagnostic:signes
 */

const fs = require('fs');
const path = require('path');
const data = require('../db/seed-data');
const { SIGNES_FICHES } = require('../db/seed-data/signes-fiches');
const { TERRAINS, CONTEXTES } = require('../db/seed-data/diagnostic');

const FREQ = {
  tres_frequent: 'très fréquent',
  frequent: 'fréquent',
  occasionnel: 'occasionnel',
  rare: 'rare',
};
const fiches = new Map([...data.pathologies, ...(data.ajouts.fiches || [])].map((p) => [p.slug, p]));
const libelle = (liste, id) => liste.find((x) => x.id === id)?.libelle || id;

const lignes = [
  '# Signes discriminants des fiches (à valider)',
  '',
  'Source : backend/db/seed-data/signes-fiches.js (`npm run diagnostic:signes` régénère cette page).',
  'Ces signes complètent les fiches dans l’aide au diagnostic seulement :',
  '',
  '- **Signes ajoutés** : manquaient au tableau de la fiche.',
  '- **Signes clés** : presque constants ; notés absents, ils affaiblissent nettement l’hypothèse (× 0,6).',
  '- **Signes d’exclusion** : présents, ils rendent l’hypothèse peu probable (× 0,7).',
  '- **Terrain requis** : sans lui, l’hypothèse recule (× 0,85).',
  '',
  'Dites-moi simplement ce qu’il faut corriger (fiche, signe, fréquence).',
  '',
  `**${Object.keys(SIGNES_FICHES).length} fiches** traitées.`,
  '',
];
const tri = Object.entries(SIGNES_FICHES).sort(([a], [b]) =>
  (fiches.get(a)?.nom || a).localeCompare(fiches.get(b)?.nom || b, 'fr'),
);
for (const [slug, s] of tri) {
  const fiche = fiches.get(slug);
  lignes.push(`## ${fiche?.nom || slug}`, '');
  const actuels = (fiche?.symptomes || []).map(([n, f]) => `${n} (${FREQ[f] || f})`).join(', ');
  if (actuels) lignes.push(`- Tableau actuel : ${actuels}`);
  if (s.ajouter?.length)
    lignes.push(`- Signes ajoutés : ${s.ajouter.map(([n, f]) => `${n} (${FREQ[f]})`).join(', ')}`);
  if (s.cles?.length) lignes.push(`- Signes clés : ${s.cles.join(', ')}`);
  if (s.exclusion?.length) lignes.push(`- Signes d’exclusion : ${s.exclusion.join(', ')}`);
  if (s.requiert) {
    const requis = [
      ...(s.requiert.terrains || []).map((t) => libelle(TERRAINS, t)),
      ...(s.requiert.contextes || []).map((c) => libelle(CONTEXTES, c)),
    ];
    lignes.push(`- Terrain ou contexte requis (l’un des) : ${requis.join(', ')}`);
  }
  lignes.push('');
}
fs.writeFileSync(path.join(__dirname, '..', '..', 'docs', 'signes-discriminants.md'), lignes.join('\n'));
console.log(`✔ docs/signes-discriminants.md : ${tri.length} fiches`);
