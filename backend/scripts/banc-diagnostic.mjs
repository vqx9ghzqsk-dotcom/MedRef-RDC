/**
 * Banc de cas cliniques de l'aide au diagnostic : fait passer les cas de
 * db/seed-data/cas-cliniques.js dans le moteur (frontend/src/core/diagnostic.js) avec les
 * données réelles de la base, mesure la part de bons diagnostics en 1re position et dans les
 * 3 premiers, et écrit le rapport docs/banc-diagnostic.md.
 *   npm run diagnostic:banc
 */
/* global console, process */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const ici = path.dirname(fileURLToPath(import.meta.url));
const racine = path.resolve(ici, '..', '..');
const { CAS } = require('../db/seed-data/cas-cliniques');
const route = require('../src/routes/diagnostic');
const db = require('../src/db');
const moteur = await import(pathToFileURL(path.join(racine, 'frontend/src/core/diagnostic.js')).href);

const donnees = await new Promise((resolve, reject) => {
  const couche = route.stack.find((l) => l.route?.path === '/diagnostic/donnees');
  couche.route.stack.at(-1).handle({}, { json: (o) => resolve(o.data) }, reject);
});
const index = moteur.indexer(donnees);
const slugs = new Set(donnees.pathologies.map((p) => p.slug));
const idSigne = (nom) => {
  const id = index.parNom.get(nom);
  if (!id) throw new Error(`Signe inconnu dans le banc : « ${nom} »`);
  return id;
};
const idExamen = (slug) => {
  const e = donnees.examens.find((x) => x.slug === slug);
  if (!e) throw new Error(`Examen inconnu dans le banc : « ${slug} »`);
  return e.id;
};

const resultats = CAS.map((c) => {
  const attendus = c.attendu.filter((s) => slugs.has(s));
  if (!attendus.length) throw new Error(`Aucun diagnostic attendu n'existe pour « ${c.titre} »`);
  const signes = {};
  for (const n of c.presents || []) signes[idSigne(n)] = 'present';
  for (const n of c.absents || []) signes[idSigne(n)] = 'absent';
  const cas = {
    age: c.age || '',
    ageValeur: c.ageValeur || '',
    ageUnite: c.ageUnite || 'ans',
    sexe: c.sexe || '',
    grossesse: Boolean(c.grossesse),
    periode: c.periode || '',
    motif: c.motif ? idSigne(c.motif) : null,
    duree: c.duree || '',
    signes,
    constantes: c.constantes || {},
    biologie: c.biologie || {},
    terrains: c.terrains || [],
    contextes: c.contextes || [],
    examens: Object.fromEntries(Object.entries(c.examens || {}).map(([s, r]) => [idExamen(s), r])),
  };
  if (!cas.age && cas.ageValeur) cas.age = moteur.trancheDepuisAge(moteur.ageEnMois(cas));
  const r = moteur.analyser(index, cas);
  const rang = r.hypotheses.findIndex((h) => attendus.includes(h.fiche.slug)) + 1;
  return { titre: c.titre, attendus, rang, tete: r.hypotheses.slice(0, 3).map((h) => h.fiche.nom) };
});

const n = resultats.length;
const top1 = resultats.filter((r) => r.rang === 1).length;
const top3 = resultats.filter((r) => r.rang >= 1 && r.rang <= 3).length;
const pct = (x) => `${Math.round((100 * x) / n)} %`;
const lignes = [
  '# Banc de cas cliniques de l’aide au diagnostic',
  '',
  `Généré le ${new Date().toLocaleDateString('fr-FR')} par \`npm run diagnostic:banc\` (cas : backend/db/seed-data/cas-cliniques.js, à valider).`,
  '',
  `- **${n} cas** · bon diagnostic **en 1re position : ${top1} (${pct(top1)})** · **dans les 3 premiers : ${top3} (${pct(top3)})**`,
  '',
  '| Cas | Rang du bon diagnostic | 3 premières hypothèses |',
  '|---|---|---|',
  ...resultats.map((r) => `| ${r.titre} | ${r.rang || 'absent'} | ${r.tete.join(' ; ')} |`),
  '',
];
fs.writeFileSync(path.join(racine, 'docs/banc-diagnostic.md'), lignes.join('\n'));
console.log(`${n} cas · 1re position : ${top1} (${pct(top1)}) · 3 premiers : ${top3} (${pct(top3)})`);
for (const r of resultats.filter((x) => x.rang !== 1))
  console.log(`  rang ${r.rang || '—'} · ${r.titre} → ${r.tete.join(' ; ')}`);
await db.end?.();
process.exit(0);
