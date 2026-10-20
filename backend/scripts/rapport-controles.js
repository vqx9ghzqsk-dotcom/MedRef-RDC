'use strict';

/**
 * Rapports du contrôle de conformité aux protocoles (docs/controle-conformite) :
 * une synthèse et un rapport par lot (protocoles consultés, points vérifiés, écarts
 * corrigés avec le passage avant / après, points à arbitrer par le médecin).
 *   node scripts/rapport-controles.js
 * Lit les noms des fiches dans la base (lecture seule).
 */

const fs = require('fs');
const path = require('path');
const { connect } = require('../db/connexion');
const lots = require('../db/seed-data/controles');
const { LIBELLES_CHAMPS } = require('../db/controles');

const SORTIE = path.join(__dirname, '..', '..', 'docs', 'controle-conformite');
const nomFichier = (lot) =>
  `${lot.lot}-${lot.titre
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}.md`;

/** Cible lisible d'une correction. */
function cible(op) {
  if (op.ajouter) return `ajout (${op.ajouter})`;
  if (op.retirer === 'examen') return `retrait de l’examen ${op.examen} (${op.categorie})`;
  if (op.retirer) return `retrait du lien avec ${op.molecule}`;
  for (const [cle, libelle] of [
    ['principe', 'principe'],
    ['complication', 'complication'],
    ['niveau', 'niveau de soins'],
    ['examen', 'examen'],
    ['differentiel', 'diagnostic différentiel'],
    ['forme', 'forme clinique'],
    ['molecule', 'molécule'],
    ['posologie', 'posologie'],
  ]) {
    if (op[cle] !== undefined) {
      const valeur = cle === 'posologie' ? Object.values(op.posologie).filter(Boolean).join(', ') : op[cle];
      return `${libelle} « ${valeur} », ${LIBELLES_CHAMPS[op.champ] || op.champ}`;
    }
  }
  return LIBELLES_CHAMPS[op.champ] || op.champ;
}

const citer = (texte) =>
  texte
    .split('\n')
    .map((l) => `> ${l}`)
    .join('\n');

async function main() {
  const conn = await connect();
  let noms;
  try {
    const [p] = await conn.query(
      `SELECT p.slug, p.nom, s.nom AS spe FROM pathologies p JOIN specialites s ON s.id = p.specialite_id`,
    );
    const [m] = await conn.query('SELECT slug, dci AS nom, NULL AS spe FROM molecules');
    noms = new Map([...p, ...m].map((x) => [x.slug, x]));
  } finally {
    await conn.end();
  }
  fs.mkdirSync(SORTIE, { recursive: true });

  const bilan = [];
  const arbitrages = [];
  for (const lot of lots) {
    const entites = [...(lot.fiches || []), ...(lot.molecules || [])];
    const referentiel = lot.examens || [];
    const nbCorrections = entites.reduce((n, f) => n + (f.corrections || []).length, 0) + referentiel.length;
    const md = [
      `# Lot ${lot.lot} — ${lot.titre}`,
      '',
      `Contrôle du ${lot.date.split('-').reverse().join('/')} : ${entites.length} fiches, ${nbCorrections} corrections. Chaque correction d’une fiche est aussi visible dans son historique (administration, « Voir les changements »).`,
    ];
    for (const f of entites) {
      const info = noms.get(f.slug) || { nom: f.slug };
      md.push(
        '',
        `## ${info.nom}`,
        '',
        `\`${f.slug}\`${info.spe ? ` — ${info.spe}` : ''}`,
        '',
        '**Protocoles consultés**',
        '',
      );
      for (const p of f.protocoles) md.push(`- ${p}`);
      md.push('', `**Points vérifiés** : ${f.verifie}`);
      if (f.corrige) {
        md.push('', '**Écarts corrigés**', '', f.corrige);
        for (const op of f.corrections || []) {
          md.push('', `*${cible(op)}*`, '');
          if (op.remplacer)
            md.push('Avant :', '', citer(op.remplacer[0]), '', 'Après :', '', citer(op.remplacer[1]));
          else if ('valeur' in op) md.push(`Avant : ${op.ancienne} — après : ${op.valeur}`);
          else md.push(citer(JSON.stringify(op)));
        }
      } else {
        md.push('', '**Écarts corrigés** : aucun.');
      }
      if (f.a_arbitrer) {
        md.push('', `**À arbitrer** : ${f.a_arbitrer}`);
        arbitrages.push(`- **${info.nom}** (lot ${lot.lot}) : ${f.a_arbitrer}`);
      }
    }
    if (referentiel.length) {
      md.push('', '## Référentiel des examens', '', 'Libellés communs à toutes les fiches qui citent l’examen.');
      for (const op of referentiel) {
        md.push('', `*Examen \`${op.slug}\`, ${LIBELLES_CHAMPS[op.champ] || op.champ}* : ${op.motif}`, '');
        const [avant, apres] = op.remplacer || [String(op.ancienne), String(op.valeur)];
        md.push('Avant :', '', citer(avant), '', 'Après :', '', citer(apres));
      }
    }
    fs.writeFileSync(path.join(SORTIE, nomFichier(lot)), md.join('\n') + '\n');
    bilan.push({
      lot,
      fiches: entites.length,
      corrigees: entites.filter((f) => (f.corrections || []).length).length,
      corrections: nbCorrections,
      arbitrer: entites.filter((f) => f.a_arbitrer).length,
    });
  }

  const total = (k) => bilan.reduce((n, b) => n + b[k], 0);
  const readme = [
    '# Contrôle de conformité aux protocoles',
    '',
    'Chaque fiche de MedRef RDC est relue contre ses protocoles de prise en charge (docs/protocoles-validation) : démarche diagnostique, critères de gravité, traitements, doses, durées, niveaux de soins. Les doses sont vérifiées dans les textes (OMS, guides MSF des médicaments essentiels et guide clinique, recommandations des sociétés savantes) quand un doute existe.',
    '',
    '- Les écarts sont **corrigés dans la fiche** ; chaque correction est tracée dans l’historique (version avant / après) et listée ci-dessous, lot par lot.',
    '- Les divergences entre recommandations (OMS, programme national, autres pays) sont laissées **à l’arbitrage du médecin** et signalées.',
    '- Le contrôle **ne vaut pas validation** : les fiches restent « à valider » jusqu’à la relecture du médecin, qui valide dans l’administration (rapport de contrôle affiché en tête de chaque fiche).',
    '',
    '## Avancement',
    '',
    '| Lot | Domaine | Fiches | Fiches corrigées | Corrections | À arbitrer |',
    '|---|---|---:|---:|---:|---:|',
    ...bilan.map(
      (b) =>
        `| [${b.lot.lot}](${nomFichier(b.lot)}) | ${b.lot.titre} | ${b.fiches} | ${b.corrigees} | ${b.corrections} | ${b.arbitrer} |`,
    ),
    `| **Total** | | **${total('fiches')}** | **${total('corrigees')}** | **${total('corrections')}** | **${total('arbitrer')}** |`,
    '',
    '## Points à arbitrer',
    '',
    ...(arbitrages.length ? arbitrages : ['Aucun.']),
    '',
  ];
  fs.writeFileSync(path.join(SORTIE, 'README.md'), readme.join('\n'));
  console.log(
    `✔ ${bilan.length} lot(s), ${total('fiches')} fiches, ${total('corrections')} corrections → ${SORTIE}`,
  );
}

main().catch((err) => {
  console.error(`✖ ${err.message}`);
  process.exit(1);
});
