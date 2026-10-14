'use strict';

const data = require('./seed-data');
const { slugify } = require('../src/utils/slugify');
const { chargerSemiologie } = require('./semiologie');
const { chargerCatalogues } = require('./catalogues');
const { chargerAcorep } = require('./acorep');
const { appliquerSelection } = require('./selection');
const { chargerNouvellesFiches } = require('./fiches');
const { chargerPosologiesAjoutees } = require('./posologiesAjoutees');

/** Référence à une fiche par son slug (sinon : libellé libre). */
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
/** Clés courtes des fichiers de données → valeurs de l'ENUM pathologie_niveaux.niveau */
const NIVEAUX = { cs: 'centre_sante', hgr: 'hopital_general', tert: 'hopital_tertiaire' };

/**
 * Insère les données d'amorçage via une connexion mysql2 (requêtes paramétrées).
 * Toute référence croisée inconnue (spécialité, molécule, examen, source…) arrête
 * le script avec un message explicite.
 * @param {import('mysql2/promise').Connection} conn
 */
async function seed(conn) {
  const ids = {
    departements: new Map(),
    specialites: new Map(),
    urgences: new Map(),
    symptomes: new Map(),
    scores: new Map(),
    examens: new Map(),
    operateurs: new Map(),
    classes: new Map(),
    molecules: new Map(),
    medicaments: new Map(),
    sources: new Map(),
    pathologies: new Map(),
  };
  const insert = async (sql, params) => (await conn.execute(sql, params))[0].insertId;
  const run = (sql, params) => conn.execute(sql, params);
  const need = (map, key, what, where) => {
    if (!map.has(key)) throw new Error(`Seed : ${what} introuvable « ${key} »${where ? ` (${where})` : ''}`);
    return map.get(key);
  };
  const orNull = (v) => (v === undefined ? null : v);

  for (const [i, d] of data.departements.entries()) {
    const depId = await insert(
      'INSERT INTO departements (nom, slug, description, icone, ordre) VALUES (?, ?, ?, ?, ?)',
      [d.nom, d.slug, d.description, d.icone, i + 1],
    );
    ids.departements.set(d.slug, depId);
    for (const [j, sp] of d.specialites.entries()) {
      const [nom, description] = Array.isArray(sp) ? sp : [sp, null];
      // Le slug est préfixé par le département pour rester unique (ex. Neurologie existe 2 fois)
      const slug = `${d.slug}-${slugify(nom)}`;
      const spId = await insert(
        'INSERT INTO specialites (departement_id, nom, slug, description, ordre) VALUES (?, ?, ?, ?, ?)',
        [depId, nom, slug, description, j + 1],
      );
      if (!ids.specialites.has(nom)) ids.specialites.set(nom, spId);
    }
  }

  for (const u of data.urgences) {
    ids.urgences.set(
      u.slug,
      await insert(
        `INSERT INTO urgences (nom, slug, categorie, description, signes_gravite, conduite_abcde, quand_transferer)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [u.nom, u.slug, u.categorie, u.description, u.signes_gravite, u.conduite_abcde, u.quand_transferer],
      ),
    );
  }

  for (const [nom, description] of data.symptomes) {
    ids.symptomes.set(
      nom,
      await insert('INSERT INTO symptomes (nom, slug, description) VALUES (?, ?, ?)', [
        nom,
        slugify(nom),
        description,
      ]),
    );
  }

  for (const s of data.scores) {
    ids.scores.set(
      s.slug,
      await insert(
        `INSERT INTO scores (nom, slug, code, type, description, interpretation, reference)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [s.nom, s.slug, orNull(s.code), s.type, s.description, s.interpretation, s.reference],
      ),
    );
  }

  for (const e of data.examens) {
    ids.examens.set(
      e.slug,
      await insert(
        'INSERT INTO examens (nom, slug, type, description, valeurs_normales) VALUES (?, ?, ?, ?, ?)',
        [e.nom, e.slug, e.type, orNull(e.description), orNull(e.valeurs_normales)],
      ),
    );
  }

  for (const [nom, type, pays, siteWeb] of data.operateurs) {
    ids.operateurs.set(
      nom,
      await insert('INSERT INTO operateurs (nom, type, pays, site_web) VALUES (?, ?, ?, ?)', [
        nom,
        type,
        pays,
        orNull(siteWeb),
      ]),
    );
  }

  for (const [nom, description] of data.classes) {
    ids.classes.set(
      nom,
      await insert('INSERT INTO classes_pharmacologiques (nom, description) VALUES (?, ?)', [
        nom,
        description,
      ]),
    );
  }

  const moleculesBySlug = new Map();
  for (const m of data.molecules) {
    moleculesBySlug.set(m.slug, m);
    ids.molecules.set(
      m.slug,
      await insert(
        `INSERT INTO molecules (dci, slug, classe_id, mecanisme, pharmacocinetique, indications, posologie,
           contre_indications, effets_indesirables, interactions, grossesse_allaitement, surveillance)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          m.dci,
          m.slug,
          need(ids.classes, m.classe, 'classe', m.dci),
          orNull(m.mecanisme),
          orNull(m.pharmacocinetique),
          orNull(m.indications),
          orNull(m.posologie),
          orNull(m.contre_indications),
          orNull(m.effets_indesirables),
          orNull(m.interactions),
          orNull(m.grossesse_allaitement),
          orNull(m.surveillance),
        ],
      ),
    );
  }

  let nbPosologies = 0;
  for (const [slug, lignes] of Object.entries(data.posologies)) {
    const moleculeId = need(ids.molecules, slug, 'molécule', 'posologies');
    for (const [i, l] of lignes.entries()) {
      await run(
        `INSERT INTO molecule_posologies (molecule_id, population, indication, voie, dose_texte, dose_par_kg,
           dose_max, unite, frequence, duree, securite, remarque, ordre)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          moleculeId,
          l.population,
          l.indication,
          l.voie,
          l.dose_texte,
          l.dose_par_kg,
          l.dose_max,
          l.unite,
          l.frequence,
          l.duree,
          l.securite,
          l.remarque,
          i + 1,
        ],
      );
      nbPosologies += 1;
    }
  }

  for (const p of data.medicaments) {
    const composition = p.composition.map(([slug, dosage]) => {
      need(ids.molecules, slug, 'molécule', p.nom);
      return { slug, dosage, molecule: moleculesBySlug.get(slug) };
    });
    const medId = await insert(
      `INSERT INTO medicaments (nom_commercial, dci, classe_id, operateur_id, forme, dosage, presentation,
         conservation, indication, posologie, contre_indications, effets_indesirables, interactions,
         disponible_rdc, prix_indicatif_cdf, sources_text)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, ?)`,
      [
        p.nom,
        composition.map((c) => c.molecule.dci).join(' + '),
        need(ids.classes, composition[0].molecule.classe, 'classe', p.nom),
        need(ids.operateurs, p.operateur, 'opérateur', p.nom),
        orNull(p.forme),
        orNull(p.dosage),
        orNull(p.presentation),
        orNull(p.conservation),
        orNull(p.indication),
        orNull(p.posologie),
        orNull(p.contre_indications),
        orNull(p.effets_indesirables),
        orNull(p.interactions),
        p.rdc ? 1 : 0,
        orNull(p.sources),
      ],
    );
    ids.medicaments.set(p.nom, medId);
    for (const [i, c] of composition.entries()) {
      await run(
        'INSERT INTO medicament_molecules (medicament_id, molecule_id, dosage, ordre) VALUES (?, ?, ?, ?)',
        [medId, ids.molecules.get(c.slug), orNull(c.dosage), i + 1],
      );
    }
  }

  for (const s of data.sources) {
    ids.sources.set(
      s.titre,
      await insert(
        `INSERT INTO sources (titre, organisation, niveau, type, annee, url, domaine, departement_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          s.titre,
          s.organisation,
          s.niveau,
          s.type,
          orNull(s.annee),
          orNull(s.url),
          orNull(s.domaine),
          s.departement ? need(ids.departements, s.departement, 'département', s.titre) : null,
        ],
      ),
    );
  }

  // 1er passage : les fiches (pour pouvoir lier différentiels et complications entre elles)
  for (const p of data.pathologies) {
    if (ids.pathologies.has(p.slug)) throw new Error(`Seed : slug de pathologie en double « ${p.slug} »`);
    ids.pathologies.set(
      p.slug,
      await insert(
        `INSERT INTO pathologies (specialite_id, nom, slug, resume, definition, physiopathologie, diagnostic,
           etiologies, therapeutique, evolution)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          need(ids.specialites, p.specialite, 'spécialité', p.slug),
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
      ),
    );
  }

  // Référence vers une autre fiche : un slug doit exister, un libellé reste libre.
  const ficheRef = (ref, where) => {
    if (!ref) return null;
    if (SLUG_RE.test(ref)) return need(ids.pathologies, ref, 'fiche', where);
    return null;
  };

  for (const slug of [...Object.keys(data.niveaux), ...Object.keys(data.grades)]) {
    need(ids.pathologies, slug, 'fiche', 'niveaux de soins / grades');
  }
  let nbExamens = 0;
  let nbGrades = 0;
  // 2e passage : liaisons et contenu structuré
  for (const p of data.pathologies) {
    const pid = ids.pathologies.get(p.slug);
    for (const u of p.urgences || []) {
      await run('INSERT INTO pathologie_urgences (pathologie_id, urgence_id) VALUES (?, ?)', [
        pid,
        need(ids.urgences, u, 'urgence', p.slug),
      ]);
    }
    for (const [s, freq] of p.symptomes || []) {
      await run('INSERT INTO pathologie_symptomes (pathologie_id, symptome_id, frequence) VALUES (?, ?, ?)', [
        pid,
        need(ids.symptomes, s, 'symptôme', p.slug),
        freq,
      ]);
    }
    for (const [i, [categorie, slug, interpretation]] of (p.examens || []).entries()) {
      await run(
        `INSERT INTO pathologie_examens (pathologie_id, examen_id, categorie, interpretation, ordre)
         VALUES (?, ?, ?, ?, ?)`,
        [pid, need(ids.examens, slug, 'examen', p.slug), categorie, orNull(interpretation), i + 1],
      );
      nbExamens += 1;
    }
    for (const [slug, ligne, contexte] of p.molecules || []) {
      await run(
        'INSERT INTO molecule_pathologies (molecule_id, pathologie_id, ligne, contexte) VALUES (?, ?, ?, ?)',
        [need(ids.molecules, slug, 'molécule', p.slug), pid, ligne, orNull(contexte)],
      );
    }
    for (const s of p.scores || []) {
      await run('INSERT INTO pathologie_scores (pathologie_id, score_id) VALUES (?, ?)', [
        pid,
        need(ids.scores, s, 'score', p.slug),
      ]);
    }
    for (const s of p.sources || []) {
      await run('INSERT INTO pathologie_sources (pathologie_id, source_id) VALUES (?, ?)', [
        pid,
        need(ids.sources, s, 'source', p.slug),
      ]);
    }
    for (const [i, [ref, distinctifs]] of (p.differentiels || []).entries()) {
      const linked = ficheRef(ref, `différentiel de ${p.slug}`);
      const nom = linked ? data.pathologies.find((x) => x.slug === ref).nom : ref;
      await run(
        `INSERT INTO pathologie_differentiels (pathologie_id, differentiel_id, nom, elements_distinctifs, ordre)
         VALUES (?, ?, ?, ?, ?)`,
        [pid, linked, nom, orNull(distinctifs), i + 1],
      );
    }
    const grades = data.grades[p.slug] || {};
    for (const ordre of Object.keys(grades)) {
      if (!p.principes?.[Number(ordre) - 1]) {
        throw new Error(`Seed : principe n° ${ordre} introuvable pour le grade de « ${p.slug} »`);
      }
    }
    for (const [i, [titre, objectif, details]] of (p.principes || []).entries()) {
      const [force, detail, source] = grades[i + 1] || [];
      await run(
        `INSERT INTO pathologie_principes (pathologie_id, ordre, titre, objectif, details, grade_force,
           grade_detail, grade_source)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [pid, i + 1, titre, orNull(objectif), orNull(details), orNull(force), orNull(detail), orNull(source)],
      );
      if (force || detail) nbGrades += 1;
    }
    const niveaux = data.niveaux[p.slug];
    if (niveaux) {
      for (const [cle, niveau] of Object.entries(NIVEAUX)) {
        const [priseEnCharge, transfert] = niveaux[cle] || [];
        if (!priseEnCharge && !transfert) continue;
        await run(
          `INSERT INTO pathologie_niveaux (pathologie_id, niveau, prise_en_charge, criteres_transfert)
           VALUES (?, ?, ?, ?)`,
          [pid, niveau, orNull(priseEnCharge), orNull(transfert)],
        );
      }
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
          ficheRef(c.fiche, `complication de ${p.slug}`),
        ],
      );
    }
  }

  // Formes cliniques, sémiologie, syndromes, glossaire, signes d'alerte des urgences
  const semiologie = await chargerSemiologie(conn, data);
  // Produits des catalogues de firmes (photos, fiches), liés aux molécules quand c'est sûr
  const catalogues = await chargerCatalogues(conn, data.catalogues);
  // Répertoire des AMM de l'ACOREP et fiches des substances (à valider)
  const acorep = await chargerAcorep(conn, data.acorep);
  // Opérateurs affichés (les autres restent en base, masqués)
  const selection = await appliquerSelection(conn, data.selection);
  // Fiches ajoutées par lots (références résolues dans la base, molécules ACOREP comprises)
  const fichesAjoutees = await chargerNouvellesFiches(conn, data, data.ajouts);
  // Posologies ajoutées par lots (seulement pour les molécules sans posologie)
  const posologiesAjoutees = await chargerPosologiesAjoutees(conn, data.posologiesAjoutees);

  return {
    semiologie,
    catalogues,
    acorep,
    selection,
    fichesAjoutees,
    posologiesAjoutees,
    departements: data.departements.length,
    pathologies: data.pathologies.length,
    molecules: data.molecules.length,
    medicaments: data.medicaments.length,
    examens: data.examens.length,
    examens_lies: nbExamens,
    posologies: nbPosologies,
    grades: nbGrades,
    niveaux_de_soins: Object.keys(data.niveaux).length,
    urgences: data.urgences.length,
    symptomes: data.symptomes.length,
    scores: data.scores.length,
    sources: data.sources.length,
  };
}

module.exports = { seed };
