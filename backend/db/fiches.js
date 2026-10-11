'use strict';

/**
 * Chargement des fiches de pathologies ajoutées après le référentiel de départ
 * (seed-data/pathologies-ajoutees/) : sur une base neuve (seed) comme sur une base en
 * service (`npm run db:enrichir`). Une fiche déjà présente (même slug) n'est jamais
 * modifiée : les corrections faites dans /admin sont conservées.
 *
 * Les références (molécules, examens, scores, urgences, symptômes, sources, syndromes)
 * sont résolues dans la base, ce qui donne accès aux molécules des fiches ACOREP. Toutes
 * les références sont vérifiées avant la moindre écriture.
 *
 * Format d'une fiche : celui de seed-data/pathologies/*.js, plus
 *   departement : slug du département (une spécialité peut exister dans deux départements)
 *   niveaux     : { cs: [prise en charge, critères de transfert], hgr: [...], tert: [...] }
 *   formes      : formes cliniques (format de seed-data/semiologie)
 *   alertes     : { slugUrgence: 'signes d’alerte' }
 */

const { slugify } = require('../src/utils/slugify');
const { chargerSemiologie } = require('./semiologie');
const { relierAutomatiquement } = require('./catalogues');

const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const NIVEAUX = { cs: 'centre_sante', hgr: 'hopital_general', tert: 'hopital_tertiaire' };
const SOURCE_FICHE = 'MedRef RDC — fiche rédigée par IA, à valider par un médecin';

const orNull = (v) => (v === undefined ? null : v);

async function carte(conn, sql) {
  const [rows] = await conn.query(sql);
  return new Map(rows.map((r) => [r.k, r.id]));
}

/** Spécialités, examens, symptômes et molécules nouveaux demandés par les fiches. */
async function chargerReferentiels(conn, ref, compte) {
  const departements = await carte(conn, 'SELECT id, slug AS k FROM departements');
  for (const s of ref.specialites || []) {
    const depId = departements.get(s.departement);
    if (!depId) throw new Error(`Fiches : département inconnu « ${s.departement} » (${s.nom})`);
    const slug = `${s.departement}-${slugify(s.nom)}`;
    const [[deja]] = await conn.query('SELECT id FROM specialites WHERE slug = ?', [slug]);
    if (deja) continue;
    const [[{ ordre }]] = await conn.query(
      'SELECT COALESCE(MAX(ordre), 0) + 1 AS ordre FROM specialites WHERE departement_id = ?',
      [depId],
    );
    await conn.execute(
      'INSERT INTO specialites (departement_id, nom, slug, description, ordre) VALUES (?, ?, ?, ?, ?)',
      [depId, s.nom, slug, orNull(s.description), ordre],
    );
    compte.specialites += 1;
  }
  for (const e of ref.examens || []) {
    const [r] = await conn.execute(
      'INSERT IGNORE INTO examens (nom, slug, type, description, valeurs_normales) VALUES (?, ?, ?, ?, ?)',
      [e.nom, e.slug, e.type, orNull(e.description), orNull(e.valeurs_normales)],
    );
    compte.examens += r.affectedRows;
  }
  for (const s of ref.symptomes || []) {
    const [nom, description] = Array.isArray(s) ? s : [s, null];
    const [r] = await conn.execute('INSERT IGNORE INTO symptomes (nom, slug, description) VALUES (?, ?, ?)', [
      nom,
      slugify(nom),
      description,
    ]);
    compte.symptomes += r.affectedRows;
  }
  for (const m of ref.molecules || []) {
    const [[deja]] = await conn.query('SELECT id FROM molecules WHERE slug = ? OR dci = ?', [m.slug, m.dci]);
    if (deja) continue;
    let classeId = null;
    if (m.classe) {
      await conn.execute('INSERT IGNORE INTO classes_pharmacologiques (nom) VALUES (?)', [m.classe]);
      [[{ id: classeId }]] = await conn.query('SELECT id FROM classes_pharmacologiques WHERE nom = ?', [
        m.classe,
      ]);
    }
    await conn.execute(
      `INSERT INTO molecules (dci, slug, classe_id, groupe_therapeutique, mecanisme, indications, posologie,
         contre_indications, effets_indesirables, precautions, fiche_source, fiche_a_valider)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`,
      [
        m.dci,
        m.slug,
        classeId,
        orNull(m.groupe),
        orNull(m.mecanisme),
        orNull(m.indications),
        orNull(m.posologie),
        orNull(m.contre_indications),
        orNull(m.effets_indesirables),
        orNull(m.precautions),
        SOURCE_FICHE,
      ],
    );
    compte.molecules += 1;
  }
}

/** Vérifie toutes les références des fiches à ajouter ; lève une erreur listant les manques. */
function verifier(fiches, cartes, slugsFiches) {
  const erreurs = [];
  const exige = (map, cle, quoi, ou) => {
    if (!map.has(cle)) erreurs.push(`${ou} : ${quoi} « ${cle} »`);
  };
  const vus = new Set();
  for (const p of fiches) {
    if (vus.has(p.slug)) erreurs.push(`slug en double « ${p.slug} »`);
    vus.add(p.slug);
    if (!cartes.specialites.has(`${p.departement}|${p.specialite}`)) {
      erreurs.push(`${p.slug} : spécialité « ${p.specialite} » (${p.departement})`);
    }
    for (const u of p.urgences || []) exige(cartes.urgences, u, 'urgence', p.slug);
    for (const [s] of p.symptomes || []) exige(cartes.symptomes, s, 'symptôme', p.slug);
    for (const [, slug] of p.examens || []) exige(cartes.examens, slug, 'examen', p.slug);
    for (const [slug] of p.molecules || []) exige(cartes.molecules, slug, 'molécule', p.slug);
    for (const s of p.scores || []) exige(cartes.scores, s, 'score', p.slug);
    for (const s of p.sources || []) exige(cartes.sources, s, 'source', p.slug);
    for (const [ref] of p.differentiels || []) {
      if (SLUG_RE.test(ref) && !slugsFiches.has(ref))
        erreurs.push(`${p.slug} : fiche différentielle « ${ref} »`);
    }
    for (const c of p.complications || []) {
      if (c.fiche && !slugsFiches.has(c.fiche))
        erreurs.push(`${p.slug} : fiche de complication « ${c.fiche} »`);
    }
    for (const f of p.formes || []) {
      for (const [slug] of f.examens || [])
        exige(cartes.examens, slug, 'examen (forme)', `${p.slug} / ${f.nom}`);
    }
    for (const u of Object.keys(p.alertes || {})) {
      if (!(p.urgences || []).includes(u))
        erreurs.push(`${p.slug} : alerte pour une urgence non liée « ${u} »`);
    }
  }
  if (erreurs.length)
    throw new Error(`Fiches ajoutées : références invalides\n  - ${erreurs.join('\n  - ')}`);
}

/**
 * Ajoute les fiches absentes de la base. `data` fournit syndromes et glossaire (pour le
 * chargeur de sémiologie) ; `ajouts` = { referentiels, fiches }.
 */
async function chargerNouvellesFiches(conn, data, ajouts) {
  const compte = { specialites: 0, examens: 0, symptomes: 0, molecules: 0, fiches: 0, conservees: 0 };
  if (!ajouts?.fiches?.length) return compte;
  await chargerReferentiels(conn, ajouts.referentiels || {}, compte);

  const [specialites] = await conn.query(
    'SELECT s.id, s.nom, d.slug AS dep FROM specialites s JOIN departements d ON d.id = s.departement_id',
  );
  const cartes = {
    specialites: new Map(specialites.map((s) => [`${s.dep}|${s.nom}`, s.id])),
    urgences: await carte(conn, 'SELECT id, slug AS k FROM urgences'),
    symptomes: await carte(conn, 'SELECT id, nom AS k FROM symptomes'),
    examens: await carte(conn, 'SELECT id, slug AS k FROM examens'),
    molecules: await carte(conn, 'SELECT id, slug AS k FROM molecules'),
    scores: await carte(conn, 'SELECT id, slug AS k FROM scores'),
    sources: await carte(conn, 'SELECT id, titre AS k FROM sources'),
    pathologies: await carte(conn, 'SELECT id, slug AS k FROM pathologies'),
  };
  const slugsFiches = new Set([...cartes.pathologies.keys(), ...ajouts.fiches.map((p) => p.slug)]);
  verifier(ajouts.fiches, cartes, slugsFiches);

  const nouvelles = ajouts.fiches.filter((p) => !cartes.pathologies.has(p.slug));
  compte.conservees = ajouts.fiches.length - nouvelles.length;
  const run = (sql, params) => conn.execute(sql, params);

  // 1er passage : les fiches (pour lier différentiels et complications entre elles)
  for (const p of nouvelles) {
    const [r] = await run(
      `INSERT INTO pathologies (specialite_id, nom, slug, resume, definition, physiopathologie, diagnostic,
         etiologies, therapeutique, evolution)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        cartes.specialites.get(`${p.departement}|${p.specialite}`),
        p.nom,
        p.slug,
        p.resume,
        p.definition,
        orNull(p.physiopathologie),
        orNull(p.diagnostic),
        orNull(p.etiologies),
        orNull(p.therapeutique),
        orNull(p.evolution),
      ],
    );
    cartes.pathologies.set(p.slug, r.insertId);
  }
  const [noms] = await conn.query('SELECT slug, nom FROM pathologies');
  const nomDe = new Map(noms.map((n) => [n.slug, n.nom]));
  const fiche = (ref) => (ref && SLUG_RE.test(ref) ? cartes.pathologies.get(ref) : null);

  // 2e passage : liaisons et contenu structuré
  for (const p of nouvelles) {
    const pid = cartes.pathologies.get(p.slug);
    for (const u of p.urgences || []) {
      await run('INSERT INTO pathologie_urgences (pathologie_id, urgence_id) VALUES (?, ?)', [
        pid,
        cartes.urgences.get(u),
      ]);
    }
    for (const [s, freq] of p.symptomes || []) {
      await run('INSERT INTO pathologie_symptomes (pathologie_id, symptome_id, frequence) VALUES (?, ?, ?)', [
        pid,
        cartes.symptomes.get(s),
        freq,
      ]);
    }
    for (const [i, [categorie, slug, interpretation]] of (p.examens || []).entries()) {
      await run(
        `INSERT INTO pathologie_examens (pathologie_id, examen_id, categorie, interpretation, ordre)
         VALUES (?, ?, ?, ?, ?)`,
        [pid, cartes.examens.get(slug), categorie, orNull(interpretation), i + 1],
      );
    }
    for (const [slug, ligne, contexte] of p.molecules || []) {
      await run(
        'INSERT INTO molecule_pathologies (molecule_id, pathologie_id, ligne, contexte) VALUES (?, ?, ?, ?)',
        [cartes.molecules.get(slug), pid, ligne, orNull(contexte)],
      );
    }
    for (const s of p.scores || []) {
      await run('INSERT INTO pathologie_scores (pathologie_id, score_id) VALUES (?, ?)', [
        pid,
        cartes.scores.get(s),
      ]);
    }
    for (const s of p.sources || []) {
      await run('INSERT INTO pathologie_sources (pathologie_id, source_id) VALUES (?, ?)', [
        pid,
        cartes.sources.get(s),
      ]);
    }
    for (const [i, [ref, distinctifs]] of (p.differentiels || []).entries()) {
      const lie = fiche(ref);
      await run(
        `INSERT INTO pathologie_differentiels (pathologie_id, differentiel_id, nom, elements_distinctifs, ordre)
         VALUES (?, ?, ?, ?, ?)`,
        [pid, lie, lie ? nomDe.get(ref) : ref, orNull(distinctifs), i + 1],
      );
    }
    for (const [i, [titre, objectif, details]] of (p.principes || []).entries()) {
      const [force, detail, source] = (p.grades || {})[i + 1] || [];
      await run(
        `INSERT INTO pathologie_principes (pathologie_id, ordre, titre, objectif, details, grade_force,
           grade_detail, grade_source)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [pid, i + 1, titre, orNull(objectif), orNull(details), orNull(force), orNull(detail), orNull(source)],
      );
    }
    for (const [cle, niveau] of Object.entries(NIVEAUX)) {
      const [priseEnCharge, transfert] = (p.niveaux || {})[cle] || [];
      if (!priseEnCharge && !transfert) continue;
      await run(
        `INSERT INTO pathologie_niveaux (pathologie_id, niveau, prise_en_charge, criteres_transfert)
         VALUES (?, ?, ?, ?)`,
        [pid, niveau, orNull(priseEnCharge), orNull(transfert)],
      );
    }
    for (const [i, c] of (p.complications || []).entries()) {
      await run(
        `INSERT INTO complications (pathologie_id, ordre, nom, description, traitement, surveillance_clinique,
           surveillance_paraclinique, fiche_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          pid,
          i + 1,
          c.nom,
          orNull(c.description),
          orNull(c.traitement),
          orNull(c.clinique),
          orNull(c.paraclinique),
          fiche(c.fiche),
        ],
      );
    }
    compte.fiches += 1;
  }

  // Formes cliniques et signes d'alerte : chargeur de sémiologie (n'écrase rien)
  const semiologie = Object.fromEntries(
    nouvelles.filter((p) => p.formes?.length).map((p) => [p.slug, { formes: p.formes, urgences: p.alertes }]),
  );
  if (Object.keys(semiologie).length) {
    const s = await chargerSemiologie(conn, {
      syndromes: data.syndromes,
      glossaire: data.glossaire,
      semiologie,
    });
    compte.formes = s.formes;
  }
  // Molécules des référentiels (ce lot et les précédents) : relier les produits qui les contiennent
  compte.produits = await relierAutomatiquement(conn);
  return compte;
}

module.exports = { chargerNouvellesFiches };
