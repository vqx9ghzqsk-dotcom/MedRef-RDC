'use strict';

/**
 * Contrôle de conformité du contenu aux protocoles de prise en charge
 * (seed-data/controles). Pour chaque fiche contrôlée : un rapport (protocoles
 * consultés, points vérifiés, écarts corrigés, points à arbitrer) et des
 * corrections ciblées.
 *
 * Chaque correction est vérifiable et idempotente :
 *  - `remplacer: [ancien, nouveau]` remplace un passage d'un champ texte. Si le
 *    nouveau texte est déjà là, rien n'est fait ; si l'ancien n'est plus là (fiche
 *    retouchée depuis par un médecin), c'est un conflit : la correction n'est pas
 *    appliquée et elle est signalée ;
 *  - `valeur` (avec `ancienne`) fixe une valeur, sous la même condition ;
 *  - `ajouter` crée un élément absent ; `retirer` enlève un lien molécule → fiche,
 *    ou un examen mal rattaché (`examen` + `categorie`).
 * Un lot peut aussi corriger le référentiel des examens (`examens`), commun à
 * toutes les fiches ; le motif et le passage avant / après figurent dans son rapport.
 *
 * Toute fiche modifiée reçoit une entrée d'historique (version complète avant /
 * après, comparable dans l'administration). Le contrôle ne vaut pas validation :
 * une fiche validée qu'une correction modifie repasse « à valider ».
 */

const {
  etatPathologie,
  etatMolecule,
  PATHOLOGIE_TEXTES,
  FICHE_PHARMACO,
  NIVEAUX,
} = require('../src/services/etats');

const FORME_TEXTES = [
  'description',
  'terrain',
  'signes_fonctionnels',
  'signes_generaux',
  'signes_physiques',
  'paraclinique',
  'etiologies',
];
const LIGNES = ['premiere', 'deuxieme', 'alternative', 'adjuvant'];
const CATEGORIES = [
  'premiere_intention',
  'deuxieme_intention',
  'confirmation',
  'presomption',
  'etiologique',
  'gravite',
  'pretherapeutique',
  'suivi',
];
const POPULATIONS = ['adulte', 'enfant', 'nouveau_ne', 'grossesse'];

/**
 * Cibles des corrections d'une fiche pathologie : table, clé de la ligne visée et
 * champs modifiables. `cle` reçoit l'opération et renvoie [clause WHERE, paramètres].
 */
const CIBLES_PATHOLOGIE = {
  champ: { table: 'pathologies', champs: ['resume', ...PATHOLOGIE_TEXTES], cle: () => ['id = ?', []] },
  principe: {
    table: 'pathologie_principes',
    champs: ['titre', 'objectif', 'details', 'grade_force', 'grade_detail', 'grade_source'],
    cle: (op) => ['pathologie_id = ? AND titre = ?', [op.principe]],
  },
  complication: {
    table: 'complications',
    champs: ['nom', 'description', 'traitement', 'surveillance_clinique', 'surveillance_paraclinique'],
    cle: (op) => ['pathologie_id = ? AND nom = ?', [op.complication]],
  },
  niveau: {
    table: 'pathologie_niveaux',
    champs: ['prise_en_charge', 'criteres_transfert'],
    cle: (op) => ['pathologie_id = ? AND niveau = ?', [op.niveau]],
  },
  examen: {
    table: 'pathologie_examens',
    champs: ['interpretation'],
    cle: (op) => [
      'pathologie_id = ? AND categorie = ? AND examen_id = (SELECT id FROM examens WHERE slug = ?)',
      [op.categorie, op.examen],
    ],
  },
  differentiel: {
    table: 'pathologie_differentiels',
    champs: ['nom', 'elements_distinctifs'],
    cle: (op) => ['pathologie_id = ? AND nom = ?', [op.differentiel]],
  },
  forme: {
    table: 'pathologie_formes',
    champs: FORME_TEXTES,
    cle: (op) => ['pathologie_id = ? AND nom = ?', [op.forme]],
  },
  molecule: {
    table: 'molecule_pathologies',
    champs: ['contexte', 'ligne'],
    cle: (op) => [
      'pathologie_id = ? AND molecule_id = (SELECT id FROM molecules WHERE slug = ?)',
      [op.molecule],
    ],
  },
};

const CIBLES_MOLECULE = {
  champ: { table: 'molecules', champs: FICHE_PHARMACO, cle: () => ['id = ?', []] },
  posologie: {
    table: 'molecule_posologies',
    champs: [
      'indication',
      'voie',
      'dose_texte',
      'dose_par_kg',
      'dose_par_m2',
      'dose_max',
      'unite',
      'frequence',
      'duree',
      'securite',
      'remarque',
    ],
    cle: (op) => {
      const { population, indication = null, voie } = op.posologie;
      const clauses = ['molecule_id = ?', 'population = ?', 'indication <=> ?'];
      const params = [population, indication];
      if (voie !== undefined) {
        clauses.push('voie <=> ?');
        params.push(voie);
      }
      return [clauses.join(' AND '), params];
    },
  },
};

/** Référentiel des examens, commun à toutes les fiches : `lot.examens` = [{ slug, motif, champ, ... }]. */
const CIBLE_EXAMEN = {
  table: 'examens',
  champs: ['nom', 'description', 'valeurs_normales'],
  cle: () => ['id = ?', []],
};

const AJOUTS_PATHOLOGIE = ['principe', 'complication', 'examen', 'differentiel', 'molecule'];
const AJOUTS_MOLECULE = ['posologie'];
const RETRAITS = ['molecule', 'examen'];

/** Type d'une opération : la clé de cible présente (ou `ajouter` / `retirer`). */
function cibleDe(op, cibles) {
  if (op.ajouter) return 'ajouter';
  if (op.retirer) return 'retirer';
  return Object.keys(cibles).find((k) => k !== 'champ' && op[k] !== undefined) || 'champ';
}

/**
 * Remplacement d'un passage. Renvoie { etat: 'applique' | 'deja' | 'conflit', valeur }.
 * « Déjà appliqué » : le nouveau texte est présent et l'ancien a disparu (ou il est
 * contenu dans le nouveau, quand la correction complète un passage).
 */
function remplacerPassage(valeur, [ancien, nouveau]) {
  const texte = valeur == null ? '' : String(valeur);
  const deja = texte.includes(nouveau) && (!texte.includes(ancien) || nouveau.includes(ancien));
  if (deja) return { etat: 'deja', valeur: texte };
  const premier = texte.indexOf(ancien);
  if (premier < 0) return { etat: 'conflit', valeur: texte };
  if (texte.indexOf(ancien, premier + 1) >= 0) return { etat: 'ambigu', valeur: texte };
  return {
    etat: 'applique',
    valeur: texte.slice(0, premier) + nouveau + texte.slice(premier + ancien.length),
  };
}

const egal = (a, b) => (a == null && b == null) || String(a) === String(b);

/** Une modification de champ porte un remplacement valide, ou une valeur avec l'ancienne. */
function verifierModification(op, ici, pb) {
  const r = op.remplacer;
  const remplacement = Array.isArray(r) && r.length === 2 && r.every((t) => typeof t === 'string' && t);
  if (r !== undefined && (!remplacement || r[0] === r[1])) pb.push(`${ici} : remplacement invalide`);
  if (r === undefined && !('valeur' in op && 'ancienne' in op)) pb.push(`${ici} : ni remplacement ni valeur`);
}

/** Vérifie la cohérence des données ; renvoie la liste des problèmes. */
function verifierDonnees(lots) {
  const pb = [];
  const ids = new Set();
  const vus = { pathologie: new Set(), molecule: new Set() };
  for (const lot of lots || []) {
    if (!lot.lot || ids.has(lot.lot)) pb.push(`lot absent ou en double (${lot.lot})`);
    ids.add(lot.lot);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(lot.date || '')) pb.push(`${lot.lot} : date invalide`);
    for (const [entite, liste, cibles, ajouts] of [
      ['pathologie', lot.fiches || [], CIBLES_PATHOLOGIE, AJOUTS_PATHOLOGIE],
      ['molecule', lot.molecules || [], CIBLES_MOLECULE, AJOUTS_MOLECULE],
    ]) {
      for (const f of liste) {
        const nom = `${lot.lot}/${f.slug}`;
        if (!f.slug) pb.push(`${lot.lot} : fiche sans identifiant`);
        if (vus[entite].has(f.slug)) pb.push(`${nom} : contrôlée deux fois`);
        vus[entite].add(f.slug);
        if (!Array.isArray(f.protocoles) || !f.protocoles.length) pb.push(`${nom} : aucun protocole cité`);
        if (!f.verifie) pb.push(`${nom} : points vérifiés absents`);
        for (const [i, op] of (f.corrections || []).entries()) {
          const ici = `${nom} correction ${i + 1}`;
          const type = cibleDe(op, cibles);
          if (type === 'ajouter') {
            if (!ajouts.includes(op.ajouter)) pb.push(`${ici} : ajout inconnu ${op.ajouter}`);
            continue;
          }
          if (type === 'retirer') {
            if (!RETRAITS.includes(op.retirer) || entite !== 'pathologie' || !op[op.retirer])
              pb.push(`${ici} : retrait inconnu`);
            else if (op.retirer === 'examen' && !CATEGORIES.includes(op.categorie))
              pb.push(`${ici} : catégorie ${op.categorie}`);
            continue;
          }
          const cible = cibles[type];
          if (!cible.champs.includes(op.champ))
            pb.push(`${ici} : champ ${op.champ} non modifiable (${type})`);
          verifierModification(op, ici, pb);
          if (type === 'niveau' && !NIVEAUX.includes(op.niveau)) pb.push(`${ici} : niveau ${op.niveau}`);
          if (type === 'examen' && !CATEGORIES.includes(op.categorie))
            pb.push(`${ici} : catégorie ${op.categorie}`);
          if (op.champ === 'ligne' && !LIGNES.includes(op.valeur)) pb.push(`${ici} : ligne ${op.valeur}`);
          if (type === 'posologie' && !POPULATIONS.includes(op.posologie?.population))
            pb.push(`${ici} : population`);
        }
      }
    }
    for (const [i, op] of (lot.examens || []).entries()) {
      const ici = `${lot.lot} examen ${op.slug || i + 1}`;
      if (!op.slug) pb.push(`${ici} : examen sans identifiant`);
      if (!op.motif) pb.push(`${ici} : motif absent`);
      if (!CIBLE_EXAMEN.champs.includes(op.champ)) pb.push(`${ici} : champ ${op.champ} non modifiable (examen)`);
      verifierModification(op, ici, pb);
    }
  }
  return pb;
}

/** Exécuteur de requêtes sur une connexion mysql2 : renvoie les lignes. */
const executeur =
  (conn) =>
  async (sql, params = []) =>
    (await conn.query(sql, params))[0];

/** Liens molécule → fiche, ajoutés à la version de la fiche pour l'historique. */
const moleculesDe = (q, id) =>
  q(
    `SELECT mo.slug AS molecule, mp.ligne, mp.contexte
       FROM molecule_pathologies mp JOIN molecules mo ON mo.id = mp.molecule_id
      WHERE mp.pathologie_id = ? ORDER BY mo.slug`,
    [id],
  );

/** Applique une modification de champ sur une ligne ciblée. */
async function modifierChamp(q, cible, id, op) {
  const [where, params] = cible.cle(op);
  const lignes = await q(`SELECT ${op.champ} AS v FROM ${cible.table} WHERE ${where}`, [id, ...params]);
  if (lignes.length !== 1) return lignes.length ? 'ambigu' : 'introuvable';
  const actuelle = lignes[0].v;
  let nouvelle;
  if (op.remplacer) {
    const r = remplacerPassage(actuelle, op.remplacer);
    if (r.etat !== 'applique') return r.etat;
    nouvelle = r.valeur;
  } else {
    if (egal(actuelle, op.valeur)) return 'deja';
    if (!egal(actuelle, op.ancienne)) return 'conflit';
    nouvelle = op.valeur;
  }
  await q(`UPDATE ${cible.table} SET ${op.champ} = ? WHERE ${where}`, [nouvelle, id, ...params]);
  return 'applique';
}

/** Retire un lien d'une fiche pathologie : molécule, ou examen dans une catégorie. */
async function retirerLien(q, id, op) {
  const r =
    op.retirer === 'examen'
      ? await q(
          `DELETE FROM pathologie_examens
            WHERE pathologie_id = ? AND categorie = ? AND examen_id = (SELECT id FROM examens WHERE slug = ?)`,
          [id, op.categorie, op.examen],
        )
      : await q(
          `DELETE FROM molecule_pathologies
            WHERE pathologie_id = ? AND molecule_id = (SELECT id FROM molecules WHERE slug = ?)`,
          [id, op.molecule],
        );
  return r.affectedRows ? 'applique' : 'deja';
}

/** Ajoute un élément absent d'une fiche pathologie. */
async function ajouterPathologie(q, id, op) {
  const unId = async (sql, params) => (await q(sql, params))[0]?.id;
  const ordreSuivant = async (table) =>
    ((await q(`SELECT MAX(ordre) AS m FROM ${table} WHERE pathologie_id = ?`, [id]))[0].m || 0) + 1;
  switch (op.ajouter) {
    case 'principe': {
      if (
        await unId('SELECT id FROM pathologie_principes WHERE pathologie_id = ? AND titre = ?', [
          id,
          op.titre,
        ])
      )
        return 'deja';
      let ordre = await ordreSuivant('pathologie_principes');
      if (op.apres) {
        const [ref] = await q(
          'SELECT ordre FROM pathologie_principes WHERE pathologie_id = ? AND titre = ?',
          [id, op.apres],
        );
        if (!ref) return 'introuvable';
        ordre = ref.ordre + 1;
        await q('UPDATE pathologie_principes SET ordre = ordre + 1 WHERE pathologie_id = ? AND ordre >= ?', [
          id,
          ordre,
        ]);
      }
      await q(
        `INSERT INTO pathologie_principes (pathologie_id, ordre, titre, objectif, details, grade_force, grade_detail,
           grade_source) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          id,
          ordre,
          op.titre,
          op.objectif || null,
          op.details || null,
          op.grade_force || null,
          op.grade_detail || null,
          op.grade_source || null,
        ],
      );
      return 'applique';
    }
    case 'complication': {
      if (await unId('SELECT id FROM complications WHERE pathologie_id = ? AND nom = ?', [id, op.nom]))
        return 'deja';
      await q(
        `INSERT INTO complications (pathologie_id, ordre, nom, description, traitement, surveillance_clinique,
           surveillance_paraclinique) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          id,
          await ordreSuivant('complications'),
          op.nom,
          op.description || null,
          op.traitement || null,
          op.surveillance_clinique || null,
          op.surveillance_paraclinique || null,
        ],
      );
      return 'applique';
    }
    case 'examen': {
      const examenId = await unId('SELECT id FROM examens WHERE slug = ?', [op.examen]);
      if (!examenId) return 'introuvable';
      const [deja] = await q(
        'SELECT 1 FROM pathologie_examens WHERE pathologie_id = ? AND examen_id = ? AND categorie = ?',
        [id, examenId, op.categorie],
      );
      if (deja) return 'deja';
      await q(
        `INSERT INTO pathologie_examens (pathologie_id, examen_id, categorie, interpretation, ordre)
         VALUES (?, ?, ?, ?, ?)`,
        [id, examenId, op.categorie, op.interpretation || null, await ordreSuivant('pathologie_examens')],
      );
      return 'applique';
    }
    case 'differentiel': {
      if (
        await unId('SELECT id FROM pathologie_differentiels WHERE pathologie_id = ? AND nom = ?', [
          id,
          op.nom,
        ])
      )
        return 'deja';
      const ficheId = op.fiche ? await unId('SELECT id FROM pathologies WHERE slug = ?', [op.fiche]) : null;
      if (op.fiche && !ficheId) return 'introuvable';
      await q(
        `INSERT INTO pathologie_differentiels (pathologie_id, differentiel_id, nom, elements_distinctifs, ordre)
         VALUES (?, ?, ?, ?, ?)`,
        [
          id,
          ficheId,
          op.nom,
          op.elements_distinctifs || null,
          await ordreSuivant('pathologie_differentiels'),
        ],
      );
      return 'applique';
    }
    case 'molecule': {
      const moleculeId = await unId('SELECT id FROM molecules WHERE slug = ?', [op.molecule]);
      if (!moleculeId) return 'introuvable';
      const [deja] = await q(
        'SELECT 1 FROM molecule_pathologies WHERE molecule_id = ? AND pathologie_id = ?',
        [moleculeId, id],
      );
      if (deja) return 'deja';
      await q(
        'INSERT INTO molecule_pathologies (molecule_id, pathologie_id, ligne, contexte) VALUES (?, ?, ?, ?)',
        [moleculeId, id, op.ligne || 'premiere', op.contexte || null],
      );
      return 'applique';
    }
    default:
      return 'introuvable';
  }
}

/** Ajoute une posologie absente à une molécule. */
async function ajouterPosologie(q, id, op) {
  const [deja] = await q(
    'SELECT 1 FROM molecule_posologies WHERE molecule_id = ? AND population = ? AND indication <=> ? AND voie <=> ?',
    [id, op.population, op.indication ?? null, op.voie ?? null],
  );
  if (deja) return 'deja';
  const [{ m }] = await q('SELECT MAX(ordre) AS m FROM molecule_posologies WHERE molecule_id = ?', [id]);
  await q(
    `INSERT INTO molecule_posologies (molecule_id, population, indication, voie, dose_texte, dose_par_kg, dose_max,
       unite, frequence, duree, securite, remarque, ordre) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id,
      op.population,
      op.indication ?? null,
      op.voie ?? null,
      op.dose_texte,
      op.dose_par_kg ?? null,
      op.dose_max ?? null,
      op.unite || 'mg',
      op.frequence ?? null,
      op.duree ?? null,
      op.securite ?? null,
      op.remarque ?? null,
      (m || 0) + 1,
    ],
  );
  return 'applique';
}

const LIBELLES_CHAMPS = {
  resume: 'résumé',
  definition: 'définition',
  diagnostic: 'diagnostic',
  etiologies: 'étiologies',
  therapeutique: 'thérapeutique',
  evolution: 'évolution',
  details: 'détails',
  objectif: 'objectif',
  titre: 'titre',
  traitement: 'traitement',
  description: 'description',
  interpretation: 'interprétation',
  elements_distinctifs: 'éléments distinctifs',
  prise_en_charge: 'prise en charge',
  criteres_transfert: 'critères de transfert',
  contexte: 'contexte',
  ligne: 'ligne de traitement',
  dose_texte: 'dose',
  nom: 'libellé',
  valeurs_normales: 'valeurs normales',
};

/** Libellé court d'une opération, pour les conflits et l'historique. */
function libelle(op, type) {
  if (type === 'ajouter')
    return `ajout ${op.ajouter} « ${op.titre || op.nom || op.examen || op.molecule || op.indication || ''} »`;
  if (type === 'retirer')
    return `retrait du lien ${op.retirer === 'examen' ? `examen ${op.examen}` : op.molecule}`;
  const qui =
    type === 'champ' ? '' : ` ${type} « ${type === 'posologie' ? JSON.stringify(op.posologie) : op[type]} »`;
  return `${LIBELLES_CHAMPS[op.champ] || op.champ.replace(/_/g, ' ')}${qui}`;
}

/**
 * @param conn connexion mysql2 (promesses), dans une transaction
 * @param lots données seed-data/controles
 * @param options.strict lève une erreur au moindre conflit (chargement d'une base neuve)
 */
async function chargerControles(conn, lots, { strict = false } = {}) {
  const pb = verifierDonnees(lots);
  if (pb.length) throw new Error(`Contrôles de conformité incohérents :\n- ${pb.slice(0, 20).join('\n- ')}`);
  const q = executeur(conn);
  const bilan = { fiches: 0, molecules: 0, corrections_appliquees: 0, deja_appliquees: 0, conflits: [] };

  for (const lot of lots) {
    for (const [entite, liste] of [
      ['pathologie', lot.fiches || []],
      ['molecule', lot.molecules || []],
    ]) {
      const table = entite === 'pathologie' ? 'pathologies' : 'molecules';
      const cibles = entite === 'pathologie' ? CIBLES_PATHOLOGIE : CIBLES_MOLECULE;
      const etat = async (id) =>
        entite === 'pathologie'
          ? { ...(await etatPathologie(q, id)), molecules: await moleculesDe(q, id) }
          : etatMolecule(q, id);
      for (const f of liste) {
        const [row] = await q(`SELECT id FROM ${table} WHERE slug = ?`, [f.slug]);
        if (!row) throw new Error(`Contrôle ${lot.lot} : ${entite} inconnue ${f.slug}`);
        const id = row.id;
        const avant = await etat(id);
        const faites = [];
        for (const op of f.corrections || []) {
          const type = cibleDe(op, cibles);
          let resultat;
          if (type === 'ajouter') {
            resultat =
              entite === 'pathologie'
                ? await ajouterPathologie(q, id, op)
                : await ajouterPosologie(q, id, op);
          } else if (type === 'retirer') {
            resultat = await retirerLien(q, id, op);
          } else {
            resultat = await modifierChamp(q, cibles[type], id, op);
          }
          if (resultat === 'applique') {
            bilan.corrections_appliquees += 1;
            faites.push(libelle(op, type));
          } else if (resultat === 'deja') {
            bilan.deja_appliquees += 1;
          } else {
            bilan.conflits.push(`${lot.lot} — ${f.slug} : ${libelle(op, type)} (${resultat})`);
          }
        }

        if (faites.length) {
          let apres = await etat(id);
          // Le contrôle ne vaut pas validation : une fiche validée et corrigée repasse « à valider »
          if (entite === 'pathologie' && avant.statut === 'valide') {
            await q(
              `UPDATE pathologies SET statut = 'a_valider', valide_par = NULL, valide_le = NULL, revision_le = NULL
                WHERE id = ?`,
              [id],
            );
            apres = await etat(id);
          }
          const resume = `Contrôle de conformité aux protocoles (lot ${lot.lot}) : ${faites.join(' ; ')}`;
          await q(
            `INSERT INTO modifications (user_id, entite, entite_id, action, resume, avant, apres)
             VALUES (NULL, ?, ?, 'modification', ?, ?, ?)`,
            [entite, id, resume.slice(0, 300), JSON.stringify(avant), JSON.stringify(apres)],
          );
        }

        await q(
          `INSERT INTO controles_conformite (entite, entite_id, lot, controle_le, protocoles, verifie, corrige,
             a_arbitrer, nb_corrections) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
           ON DUPLICATE KEY UPDATE lot = VALUES(lot), controle_le = VALUES(controle_le),
             protocoles = VALUES(protocoles), verifie = VALUES(verifie), corrige = VALUES(corrige),
             a_arbitrer = VALUES(a_arbitrer), nb_corrections = VALUES(nb_corrections)`,
          [
            entite,
            id,
            lot.lot,
            lot.date,
            f.protocoles.join('\n'),
            f.verifie,
            f.corrige || null,
            f.a_arbitrer || null,
            (f.corrections || []).length,
          ],
        );
        bilan[entite === 'pathologie' ? 'fiches' : 'molecules'] += 1;
      }
    }

    // Référentiel des examens : le motif et le passage avant / après figurent dans le rapport du lot
    for (const op of lot.examens || []) {
      const [row] = await q('SELECT id FROM examens WHERE slug = ?', [op.slug]);
      if (!row) throw new Error(`Contrôle ${lot.lot} : examen inconnu ${op.slug}`);
      const resultat = await modifierChamp(q, CIBLE_EXAMEN, row.id, op);
      if (resultat === 'applique') bilan.corrections_appliquees += 1;
      else if (resultat === 'deja') bilan.deja_appliquees += 1;
      else bilan.conflits.push(`${lot.lot} — examen ${op.slug} : ${op.champ} (${resultat})`);
    }
  }
  if (strict && bilan.conflits.length) {
    throw new Error(`Corrections non applicables :\n- ${bilan.conflits.slice(0, 20).join('\n- ')}`);
  }
  return bilan;
}

module.exports = { chargerControles, verifierDonnees, remplacerPassage, LIBELLES_CHAMPS };
