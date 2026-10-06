'use strict';

/**
 * Administration du contenu médical (rôles « admin » et « medecin »).
 *
 * - Le rôle est relu en base à chaque requête : un rôle retiré prend effet
 *   immédiatement, sans attendre l'expiration du jeton.
 * - Une fiche est enregistrée en bloc (champs + collections) dans une transaction ;
 *   les collections envoyées remplacent les anciennes.
 * - Toute modification d'une fiche la repasse « à valider », sauf si elle est
 *   enregistrée explicitement comme « validée » (la validation est tracée).
 * - Chaque enregistrement conserve l'état complet avant / après (table
 *   `modifications`) : on peut comparer deux versions et revenir en arrière.
 * - Une fiche validée reçoit une date de révision (config.contenu.revisionMois).
 * - Double validation (VALIDATION_DOUBLE=1) : on ne valide pas ce qu'on vient
 *   de rédiger soi-même.
 */

const express = require('express');
const db = require('../db');
const config = require('../config');
const { requireAuth, assertSessionActive, EDITOR_ROLES } = require('../middleware/auth');
const { asyncHandler, HttpError, notFound, toInt } = require('../utils/http');

const router = express.Router();

const STATUTS = ['brouillon', 'a_valider', 'valide'];
const GRADES = ['forte', 'conditionnelle', 'bonne_pratique', 'consensus'];
const NIVEAUX = ['centre_sante', 'hopital_general', 'hopital_tertiaire'];
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
const SECURITES = ['autorise', 'prudence', 'contre_indique'];
const LONG = 20000;
const FICHE_PHARMACO = [
  'mecanisme',
  'pharmacocinetique',
  'indications',
  'posologie',
  'contre_indications',
  'effets_indesirables',
  'interactions',
  'grossesse_allaitement',
  'surveillance',
];
const PATHOLOGIE_TEXTES = [
  'definition',
  'physiopathologie',
  'diagnostic',
  'etiologies',
  'therapeutique',
  'evolution',
];

/** Relit le rôle en base : seuls « admin » et « medecin » accèdent à l'administration. */
const requireEditor = asyncHandler(async (req, _res, next) => {
  const [user] = await db.query('SELECT id, nom, role, token_version FROM users WHERE id = ?', [req.user.id]);
  if (user) assertSessionActive(req, user);
  if (!user || !EDITOR_ROLES.includes(user.role))
    throw new HttpError(403, 'Accès réservé aux administrateurs');
  req.editor = user;
  next();
});

router.use('/admin', requireAuth, requireEditor);

// ---------------------------------------------------------------- Validation des entrées

/** Collecte les erreurs champ par champ, puis lève une 400 unique. */
function createValidator() {
  const errors = {};
  const v = {
    errors,
    text(value, max, field, { required = false } = {}) {
      if (value === undefined || value === null || (typeof value === 'string' && !value.trim())) {
        if (required) errors[field] = 'Champ requis';
        return null;
      }
      if (typeof value !== 'string') {
        errors[field] = 'Texte attendu';
        return null;
      }
      const t = value.trim();
      if (t.length > max) errors[field] = `${max} caractères maximum`;
      return t;
    },
    oneOf(value, allowed, field, { required = false } = {}) {
      if (value === undefined || value === null || value === '') {
        if (required) errors[field] = 'Champ requis';
        return null;
      }
      if (!allowed.includes(value)) errors[field] = 'Valeur non autorisée';
      return value;
    },
    number(value, field, { min = 0, max = 1e7 } = {}) {
      if (value === undefined || value === null || value === '') return null;
      const n = typeof value === 'number' ? value : Number(String(value).replace(',', '.'));
      if (!Number.isFinite(n) || n < min || n > max) {
        errors[field] = `Nombre entre ${min} et ${max} attendu`;
        return null;
      }
      return n;
    },
    list(value, field, max = 100) {
      if (value === undefined) return undefined;
      if (!Array.isArray(value)) {
        errors[field] = 'Liste attendue';
        return [];
      }
      if (value.length > max) errors[field] = `${max} éléments maximum`;
      return value.slice(0, max).map((item) => (item && typeof item === 'object' ? item : {}));
    },
    check() {
      if (Object.keys(errors).length) throw new HttpError(400, 'Données invalides', errors);
    },
  };
  return v;
}

/** Erreur de doublon MySQL → 409 lisible. */
async function withDuplicateCheck(fn, message) {
  try {
    return await fn();
  } catch (err) {
    if (err && err.code === 'ER_DUP_ENTRY') throw new HttpError(409, message);
    throw err;
  }
}

const logModification = (conn, { userId, entite, entiteId, action, resume, avant, apres }) =>
  conn.execute(
    `INSERT INTO modifications (user_id, entite, entite_id, action, resume, avant, apres)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [userId, entite, entiteId, action, resume, JSON.stringify(avant), JSON.stringify(apres)],
  );

const historique = (entite, id) =>
  db
    .query(
      `SELECT m.id, m.action, m.resume, m.created_at, u.nom AS auteur,
            (m.avant IS NOT NULL OR m.apres IS NOT NULL) AS a_version
       FROM modifications m LEFT JOIN users u ON u.id = m.user_id
      WHERE m.entite = ? AND m.entite_id = ? ORDER BY m.created_at DESC, m.id DESC LIMIT 50`,
      [entite, id],
    )
    .then((rows) => rows.map((r) => ({ ...r, a_version: Boolean(Number(r.a_version)) })));

/** Exécuteur de requêtes : le pool, ou la connexion d'une transaction en cours. */
const viaPool = (sql, params = []) => db.query(sql, params);
const viaConn =
  (conn) =>
  async (sql, params = []) =>
    (await conn.execute(sql, params))[0];

/** Comparaison stable de deux états (ordre des clés indifférent). */
function stable(value) {
  if (Array.isArray(value)) return `[${value.map(stable).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value)
      .sort()
      .map((k) => `${JSON.stringify(k)}:${stable(value[k])}`)
      .join(',')}}`;
  }
  return JSON.stringify(value === undefined ? null : value);
}

/** Rubriques qui diffèrent entre deux états (hors `ignorer`). */
function rubriquesModifiees(avant, apres, ignorer = []) {
  const cles = new Set([...Object.keys(avant || {}), ...Object.keys(apres || {})]);
  return [...cles].filter((k) => !ignorer.includes(k) && stable(avant?.[k]) !== stable(apres?.[k]));
}

const LIBELLES_RUBRIQUES = {
  nom: 'nom',
  resume: 'résumé',
  definition: 'définition',
  physiopathologie: 'physiopathologie',
  diagnostic: 'diagnostic',
  etiologies: 'étiologies',
  therapeutique: 'thérapeutique',
  evolution: 'évolution',
  principes: 'principes',
  complications: 'complications',
  niveaux: 'niveaux de soins',
  examens: 'examens',
  differentiels: 'différentiels',
  posologies: 'posologies',
};

const listeRubriques = (cles) => cles.map((k) => LIBELLES_RUBRIQUES[k] || k.replace(/_/g, ' ')).join(', ');

// ---------------------------------------------------------------- Versions

router.get(
  '/admin/modifications/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Version');
    const [m] = await db.query(
      `SELECT m.id, m.entite, m.entite_id, m.action, m.resume, m.created_at, m.avant, m.apres, u.nom AS auteur
         FROM modifications m LEFT JOIN users u ON u.id = m.user_id WHERE m.id = ?`,
      [id],
    );
    if (!m) throw notFound('Version');
    const parse = (v) => (typeof v === 'string' ? JSON.parse(v) : v);
    const avant = parse(m.avant);
    const apres = parse(m.apres);
    res.json({ data: { ...m, avant, apres, rubriques: rubriquesModifiees(avant, apres) } });
  }),
);

// ---------------------------------------------------------------- Tableau de bord

router.get(
  '/admin/resume',
  asyncHandler(async (_req, res) => {
    const [pathologies, molecules, medicaments, modifications] = await Promise.all([
      db.query(
        `SELECT p.id, p.nom, p.slug, p.statut, p.updated_at, p.valide_le, v.nom AS valide_par, p.revision_le,
                (p.statut = 'valide' AND p.revision_le IS NOT NULL AND p.revision_le <= CURDATE()) AS a_revoir,
                s.nom AS specialite, d.nom AS departement
           FROM pathologies p
           JOIN specialites s ON s.id = p.specialite_id
           JOIN departements d ON d.id = s.departement_id
           LEFT JOIN users v ON v.id = p.valide_par
          ORDER BY d.ordre, p.nom`,
      ),
      db.query(
        `SELECT mo.id, mo.dci, mo.slug, c.nom AS classe, COUNT(pos.id) AS nb_posologies
           FROM molecules mo
           LEFT JOIN classes_pharmacologiques c ON c.id = mo.classe_id
           LEFT JOIN molecule_posologies pos ON pos.molecule_id = mo.id
          GROUP BY mo.id ORDER BY mo.dci`,
      ),
      db.query(
        `SELECT m.id, m.nom_commercial, m.dci, m.disponible_rdc, m.prix_indicatif_cdf, o.nom AS operateur
           FROM medicaments m LEFT JOIN operateurs o ON o.id = m.operateur_id
          ORDER BY m.nom_commercial`,
      ),
      db.query(
        `SELECT m.id, m.entite, m.entite_id, m.action, m.resume, m.created_at, u.nom AS auteur,
                COALESCE(p.nom, mo.dci, me.nom_commercial) AS libelle
           FROM modifications m
           LEFT JOIN users u ON u.id = m.user_id
           LEFT JOIN pathologies p ON m.entite = 'pathologie' AND p.id = m.entite_id
           LEFT JOIN molecules mo ON m.entite = 'molecule' AND mo.id = m.entite_id
           LEFT JOIN medicaments me ON m.entite = 'medicament' AND me.id = m.entite_id
          ORDER BY m.created_at DESC, m.id DESC LIMIT 30`,
      ),
    ]);
    const fiches = pathologies.map((p) => ({ ...p, a_revoir: Boolean(Number(p.a_revoir)) }));
    const statuts = Object.fromEntries(STATUTS.map((s) => [s, fiches.filter((p) => p.statut === s).length]));
    statuts.a_revoir = fiches.filter((p) => p.a_revoir).length;
    res.json({
      data: {
        statuts,
        parametres: {
          double_validation: config.contenu.doubleValidation,
          revision_mois: config.contenu.revisionMois,
        },
        pathologies: fiches,
        molecules,
        medicaments: medicaments.map((m) => ({ ...m, disponible_rdc: Boolean(m.disponible_rdc) })),
        modifications,
      },
    });
  }),
);

// ---------------------------------------------------------------- Pathologies

/** État éditable complet d'une fiche (celui qu'on enregistre et qu'on versionne). */
async function etatPathologie(q, id) {
  const [p] = await q(
    `SELECT nom, resume, ${PATHOLOGIE_TEXTES.join(', ')}, statut FROM pathologies WHERE id = ?`,
    [id],
  );
  if (!p) return null;
  const [principes, complications, niveaux, examens, differentiels] = await Promise.all([
    q(
      `SELECT titre, objectif, details, grade_force, grade_detail, grade_source
         FROM pathologie_principes WHERE pathologie_id = ? ORDER BY ordre`,
      [id],
    ),
    q(
      `SELECT c.nom, c.description, c.traitement, c.surveillance_clinique, c.surveillance_paraclinique,
              f.slug AS fiche_slug
         FROM complications c LEFT JOIN pathologies f ON f.id = c.fiche_id
        WHERE c.pathologie_id = ? ORDER BY c.ordre`,
      [id],
    ),
    q('SELECT niveau, prise_en_charge, criteres_transfert FROM pathologie_niveaux WHERE pathologie_id = ?', [
      id,
    ]),
    q(
      `SELECT e.slug AS examen_slug, pe.categorie, pe.interpretation
         FROM pathologie_examens pe JOIN examens e ON e.id = pe.examen_id
        WHERE pe.pathologie_id = ? ORDER BY pe.ordre`,
      [id],
    ),
    q(
      `SELECT f.slug AS fiche_slug, d.nom, d.elements_distinctifs
         FROM pathologie_differentiels d LEFT JOIN pathologies f ON f.id = d.differentiel_id
        WHERE d.pathologie_id = ? ORDER BY d.ordre`,
      [id],
    ),
  ]);
  return {
    ...p,
    principes,
    complications,
    niveaux: NIVEAUX.map(
      (niveau) =>
        niveaux.find((n) => n.niveau === niveau) || {
          niveau,
          prise_en_charge: null,
          criteres_transfert: null,
        },
    ),
    examens,
    differentiels,
  };
}

router.get(
  '/admin/pathologies/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Pathologie');
    const [meta] = await db.query(
      `SELECT p.id, p.slug, p.valide_le, v.nom AS valide_par, p.revision_le, p.updated_at,
              (p.statut = 'valide' AND p.revision_le IS NOT NULL AND p.revision_le <= CURDATE()) AS a_revoir
         FROM pathologies p LEFT JOIN users v ON v.id = p.valide_par
        WHERE p.id = ?`,
      [id],
    );
    if (!meta) throw notFound('Pathologie');
    const [etat, optExamens, optPathologies, hist] = await Promise.all([
      etatPathologie(viaPool, id),
      db.query(
        "SELECT slug, nom, type FROM examens ORDER BY FIELD(type, 'biologie', 'imagerie', 'exploration'), nom",
      ),
      db.query('SELECT slug, nom FROM pathologies WHERE id <> ? ORDER BY nom', [id]),
      historique('pathologie', id),
    ]);
    res.json({
      data: {
        ...meta,
        a_revoir: Boolean(Number(meta.a_revoir)),
        ...etat,
        options: { examens: optExamens, pathologies: optPathologies },
        historique: hist,
      },
    });
  }),
);

/** Valide et normalise le corps d'enregistrement d'une fiche. */
function parsePathologie(body, refs) {
  const v = createValidator();
  const out = {
    nom: v.text(body.nom, 190, 'nom', { required: true }),
    resume: v.text(body.resume, 500, 'resume'),
    statut: v.oneOf(body.statut, STATUTS, 'statut', { required: true }),
  };
  for (const champ of PATHOLOGIE_TEXTES) out[champ] = v.text(body[champ], LONG, champ);

  out.principes = v.list(body.principes, 'principes', 30)?.map((pr, i) => ({
    titre: v.text(pr.titre, 190, `principes[${i}].titre`, { required: true }),
    objectif: v.text(pr.objectif, 500, `principes[${i}].objectif`),
    details: v.text(pr.details, LONG, `principes[${i}].details`),
    grade_force: v.oneOf(pr.grade_force, GRADES, `principes[${i}].grade_force`),
    grade_detail: v.text(pr.grade_detail, 190, `principes[${i}].grade_detail`),
    grade_source: v.text(pr.grade_source, 190, `principes[${i}].grade_source`),
  }));

  const ficheId = (slug, field) => {
    if (!slug) return null;
    const f = refs.pathologies.get(slug);
    if (!f) v.errors[field] = 'Fiche inconnue';
    return f ? f.id : null;
  };

  out.complications = v.list(body.complications, 'complications', 30)?.map((c, i) => ({
    nom: v.text(c.nom, 190, `complications[${i}].nom`, { required: true }),
    description: v.text(c.description, LONG, `complications[${i}].description`),
    traitement: v.text(c.traitement, LONG, `complications[${i}].traitement`),
    surveillance_clinique: v.text(c.surveillance_clinique, LONG, `complications[${i}].surveillance_clinique`),
    surveillance_paraclinique: v.text(
      c.surveillance_paraclinique,
      LONG,
      `complications[${i}].surveillance_paraclinique`,
    ),
    fiche_id: ficheId(c.fiche_slug, `complications[${i}].fiche_slug`),
  }));

  out.niveaux = v.list(body.niveaux, 'niveaux', NIVEAUX.length)?.map((n, i) => ({
    niveau: v.oneOf(n.niveau, NIVEAUX, `niveaux[${i}].niveau`, { required: true }),
    prise_en_charge: v.text(n.prise_en_charge, LONG, `niveaux[${i}].prise_en_charge`),
    criteres_transfert: v.text(n.criteres_transfert, LONG, `niveaux[${i}].criteres_transfert`),
  }));
  if (out.niveaux && new Set(out.niveaux.map((n) => n.niveau)).size !== out.niveaux.length) {
    v.errors.niveaux = 'Chaque niveau ne peut apparaître qu’une fois';
  }

  const vus = new Set();
  out.examens = v.list(body.examens, 'examens', 80)?.map((e, i) => {
    const examen = refs.examens.get(e.examen_slug);
    if (!examen) v.errors[`examens[${i}].examen_slug`] = 'Examen inconnu';
    const categorie = v.oneOf(e.categorie, CATEGORIES, `examens[${i}].categorie`, { required: true });
    const cle = `${e.examen_slug}|${categorie}`;
    if (vus.has(cle)) v.errors[`examens[${i}].categorie`] = 'Examen déjà présent dans cette catégorie';
    vus.add(cle);
    return {
      examen_id: examen ? examen.id : null,
      categorie,
      interpretation: v.text(e.interpretation, LONG, `examens[${i}].interpretation`),
    };
  });

  out.differentiels = v.list(body.differentiels, 'differentiels', 30)?.map((d, i) => {
    const fiche = d.fiche_slug ? refs.pathologies.get(d.fiche_slug) : null;
    if (d.fiche_slug && !fiche) v.errors[`differentiels[${i}].fiche_slug`] = 'Fiche inconnue';
    const nom = fiche ? fiche.nom : v.text(d.nom, 190, `differentiels[${i}].nom`, { required: true });
    return {
      differentiel_id: fiche ? fiche.id : null,
      nom,
      elements_distinctifs: v.text(d.elements_distinctifs, LONG, `differentiels[${i}].elements_distinctifs`),
    };
  });

  v.check();
  return out;
}

/**
 * Double validation : on ne valide ni une fiche qu'on modifie dans le même
 * enregistrement, ni la dernière version qu'on a soi-même rédigée.
 */
async function verifierDoubleValidation(q, { id, editorId, rubriques }) {
  if (rubriques.length) {
    throw new HttpError(
      409,
      'Validation à deux relecteurs : enregistrez d’abord vos modifications « à valider » ; ' +
        'un autre relecteur validera la fiche.',
    );
  }
  const [dernier] = await q(
    `SELECT user_id FROM modifications
      WHERE entite = 'pathologie' AND entite_id = ? AND action = 'modification'
      ORDER BY id DESC LIMIT 1`,
    [id],
  );
  if (dernier && dernier.user_id === editorId) {
    throw new HttpError(
      409,
      'Validation à deux relecteurs : vous avez rédigé la dernière version, un autre relecteur doit la valider.',
    );
  }
}

router.put(
  '/admin/pathologies/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Pathologie');
    const [examens, pathologies] = await Promise.all([
      db.query('SELECT id, slug FROM examens'),
      db.query('SELECT id, slug, nom FROM pathologies WHERE id <> ?', [id]),
    ]);
    const refs = {
      examens: new Map(examens.map((e) => [e.slug, e])),
      pathologies: new Map(pathologies.map((p) => [p.slug, p])),
    };
    const data = parsePathologie(req.body || {}, refs);
    const valide = data.statut === 'valide';

    const resultat = await withDuplicateCheck(
      () =>
        db.transaction(async (conn) => {
          const q = viaConn(conn);
          const [current] = await q('SELECT id FROM pathologies WHERE id = ? FOR UPDATE', [id]);
          if (!current) throw notFound('Pathologie');
          const avant = await etatPathologie(q, id);
          await conn.execute(
            `UPDATE pathologies SET nom = ?, resume = ?, ${PATHOLOGIE_TEXTES.map((c) => `${c} = ?`).join(', ')},
                    statut = ?, valide_par = ?, valide_le = ${valide ? 'NOW()' : 'NULL'},
                    revision_le = ${valide ? 'DATE_ADD(CURDATE(), INTERVAL ? MONTH)' : 'NULL'}
              WHERE id = ?`,
            [
              data.nom,
              data.resume,
              ...PATHOLOGIE_TEXTES.map((c) => data[c]),
              data.statut,
              valide ? req.editor.id : null,
              ...(valide ? [config.contenu.revisionMois] : []),
              id,
            ],
          );
          if (data.principes) {
            await conn.execute('DELETE FROM pathologie_principes WHERE pathologie_id = ?', [id]);
            for (const [i, pr] of data.principes.entries()) {
              await conn.execute(
                `INSERT INTO pathologie_principes (pathologie_id, ordre, titre, objectif, details, grade_force,
                   grade_detail, grade_source) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                  id,
                  i + 1,
                  pr.titre,
                  pr.objectif,
                  pr.details,
                  pr.grade_force,
                  pr.grade_detail,
                  pr.grade_source,
                ],
              );
            }
          }
          if (data.complications) {
            await conn.execute('DELETE FROM complications WHERE pathologie_id = ?', [id]);
            for (const [i, c] of data.complications.entries()) {
              await conn.execute(
                `INSERT INTO complications (pathologie_id, ordre, nom, description, traitement, surveillance_clinique,
                   surveillance_paraclinique, fiche_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                  id,
                  i + 1,
                  c.nom,
                  c.description,
                  c.traitement,
                  c.surveillance_clinique,
                  c.surveillance_paraclinique,
                  c.fiche_id,
                ],
              );
            }
          }
          if (data.niveaux) {
            await conn.execute('DELETE FROM pathologie_niveaux WHERE pathologie_id = ?', [id]);
            for (const n of data.niveaux.filter((x) => x.prise_en_charge || x.criteres_transfert)) {
              await conn.execute(
                `INSERT INTO pathologie_niveaux (pathologie_id, niveau, prise_en_charge, criteres_transfert)
                 VALUES (?, ?, ?, ?)`,
                [id, n.niveau, n.prise_en_charge, n.criteres_transfert],
              );
            }
          }
          if (data.examens) {
            await conn.execute('DELETE FROM pathologie_examens WHERE pathologie_id = ?', [id]);
            for (const [i, e] of data.examens.entries()) {
              await conn.execute(
                `INSERT INTO pathologie_examens (pathologie_id, examen_id, categorie, interpretation, ordre)
                 VALUES (?, ?, ?, ?, ?)`,
                [id, e.examen_id, e.categorie, e.interpretation, i + 1],
              );
            }
          }
          if (data.differentiels) {
            await conn.execute('DELETE FROM pathologie_differentiels WHERE pathologie_id = ?', [id]);
            for (const [i, d] of data.differentiels.entries()) {
              await conn.execute(
                `INSERT INTO pathologie_differentiels (pathologie_id, differentiel_id, nom, elements_distinctifs, ordre)
                 VALUES (?, ?, ?, ?, ?)`,
                [id, d.differentiel_id, d.nom, d.elements_distinctifs, i + 1],
              );
            }
          }

          const apres = await etatPathologie(q, id);
          const rubriques = rubriquesModifiees(avant, apres, ['statut']);
          if (valide && config.contenu.doubleValidation) {
            await verifierDoubleValidation(q, { id, editorId: req.editor.id, rubriques });
          }
          // Rien n'a changé (ni contenu ni statut) : pas d'entrée d'historique
          if (!valide && !rubriques.length && avant.statut === apres.statut) return { inchange: true };

          const statutLisible = data.statut.replace('_', ' ');
          let resume;
          if (valide) {
            resume = rubriques.length
              ? `Fiche modifiée et validée : ${listeRubriques(rubriques)}`
              : 'Fiche validée';
          } else if (rubriques.length) {
            resume = `Fiche modifiée : ${listeRubriques(rubriques)} (statut : ${statutLisible})`;
          } else {
            resume = `Statut changé : ${statutLisible}`;
          }
          await logModification(conn, {
            userId: req.editor.id,
            entite: 'pathologie',
            entiteId: id,
            action: valide ? 'validation' : 'modification',
            resume: resume.slice(0, 300),
            avant,
            apres,
          });
          return { inchange: false };
        }),
      'Une autre fiche de cette spécialité porte déjà ce nom',
    );
    res.json({ ok: true, statut: data.statut, inchange: resultat.inchange });
  }),
);

// ---------------------------------------------------------------- Molécules

const nombreOuNull = (v) => (v === null || v === undefined ? null : Number(v));

async function etatMolecule(q, id) {
  const [mo] = await q(`SELECT ${FICHE_PHARMACO.join(', ')} FROM molecules WHERE id = ?`, [id]);
  if (!mo) return null;
  const posologies = await q(
    `SELECT population, indication, voie, dose_texte, dose_par_kg, dose_max, unite, frequence, duree,
            securite, remarque
       FROM molecule_posologies WHERE molecule_id = ? ORDER BY ordre`,
    [id],
  );
  return {
    ...mo,
    posologies: posologies.map((p) => ({
      ...p,
      dose_par_kg: nombreOuNull(p.dose_par_kg),
      dose_max: nombreOuNull(p.dose_max),
    })),
  };
}

router.get(
  '/admin/molecules/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Molécule');
    const [meta] = await db.query('SELECT id, dci, slug FROM molecules WHERE id = ?', [id]);
    if (!meta) throw notFound('Molécule');
    const [etat, hist] = await Promise.all([etatMolecule(viaPool, id), historique('molecule', id)]);
    res.json({ data: { ...meta, ...etat, historique: hist } });
  }),
);

router.put(
  '/admin/molecules/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Molécule');
    const body = req.body || {};
    const v = createValidator();
    const fiche = Object.fromEntries(FICHE_PHARMACO.map((c) => [c, v.text(body[c], LONG, c)]));
    const posologies = v.list(body.posologies, 'posologies', 60)?.map((p, i) => ({
      population: v.oneOf(p.population, POPULATIONS, `posologies[${i}].population`, { required: true }),
      indication: v.text(p.indication, 190, `posologies[${i}].indication`),
      voie: v.text(p.voie, 60, `posologies[${i}].voie`),
      dose_texte: v.text(p.dose_texte, 400, `posologies[${i}].dose_texte`, { required: true }),
      dose_par_kg: v.number(p.dose_par_kg, `posologies[${i}].dose_par_kg`, { min: 0, max: 100000 }),
      dose_max: v.number(p.dose_max, `posologies[${i}].dose_max`, { min: 0, max: 1000000 }),
      unite: v.text(p.unite, 20, `posologies[${i}].unite`) || 'mg',
      frequence: v.text(p.frequence, 160, `posologies[${i}].frequence`),
      duree: v.text(p.duree, 160, `posologies[${i}].duree`),
      securite: v.oneOf(p.securite, SECURITES, `posologies[${i}].securite`),
      remarque: v.text(p.remarque, LONG, `posologies[${i}].remarque`),
    }));
    v.check();

    const resultat = await db.transaction(async (conn) => {
      const q = viaConn(conn);
      const [current] = await q('SELECT id FROM molecules WHERE id = ? FOR UPDATE', [id]);
      if (!current) throw notFound('Molécule');
      const avant = await etatMolecule(q, id);
      await conn.execute(
        `UPDATE molecules SET ${FICHE_PHARMACO.map((c) => `${c} = ?`).join(', ')} WHERE id = ?`,
        [...FICHE_PHARMACO.map((c) => fiche[c]), id],
      );
      if (posologies) {
        await conn.execute('DELETE FROM molecule_posologies WHERE molecule_id = ?', [id]);
        for (const [i, p] of posologies.entries()) {
          await conn.execute(
            `INSERT INTO molecule_posologies (molecule_id, population, indication, voie, dose_texte, dose_par_kg,
               dose_max, unite, frequence, duree, securite, remarque, ordre)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              id,
              p.population,
              p.indication,
              p.voie,
              p.dose_texte,
              p.dose_par_kg,
              p.dose_max,
              p.unite,
              p.frequence,
              p.duree,
              p.securite,
              p.remarque,
              i + 1,
            ],
          );
        }
      }
      const apres = await etatMolecule(q, id);
      const rubriques = rubriquesModifiees(avant, apres);
      if (!rubriques.length) return { inchange: true };
      await logModification(conn, {
        userId: req.editor.id,
        entite: 'molecule',
        entiteId: id,
        action: 'modification',
        resume: `Fiche modifiée : ${listeRubriques(rubriques)}`.slice(0, 300),
        avant,
        apres,
      });
      return { inchange: false };
    });
    res.json({ ok: true, inchange: resultat.inchange });
  }),
);

// ---------------------------------------------------------------- Produits

const PRODUIT_TEXTES = [
  ['forme', 120],
  ['dosage', 120],
  ['presentation', 255],
  ['conservation', 255],
  ['indication', LONG],
  ['posologie', LONG],
  ['contre_indications', LONG],
  ['effets_indesirables', LONG],
  ['interactions', LONG],
  ['sources_text', LONG],
];

async function etatMedicament(q, id) {
  const [m] = await q(
    `SELECT ${PRODUIT_TEXTES.map(([c]) => c).join(', ')}, photo_url, disponible_rdc, prix_indicatif_cdf
       FROM medicaments WHERE id = ?`,
    [id],
  );
  if (!m) return null;
  return {
    ...m,
    disponible_rdc: Boolean(m.disponible_rdc),
    prix_indicatif_cdf: nombreOuNull(m.prix_indicatif_cdf),
  };
}

router.get(
  '/admin/medicaments/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Médicament');
    const [meta] = await db.query(
      `SELECT m.id, m.nom_commercial, m.dci, o.nom AS operateur
         FROM medicaments m LEFT JOIN operateurs o ON o.id = m.operateur_id
        WHERE m.id = ?`,
      [id],
    );
    if (!meta) throw notFound('Médicament');
    const [etat, hist] = await Promise.all([etatMedicament(viaPool, id), historique('medicament', id)]);
    res.json({ data: { ...meta, ...etat, historique: hist } });
  }),
);

router.put(
  '/admin/medicaments/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Médicament');
    const body = req.body || {};
    const v = createValidator();
    const champs = Object.fromEntries(PRODUIT_TEXTES.map(([c, max]) => [c, v.text(body[c], max, c)]));
    const photo = v.text(body.photo_url, 255, 'photo_url');
    if (photo && !/^https?:\/\//i.test(photo)) v.errors.photo_url = 'Adresse http(s) attendue';
    if (typeof body.disponible_rdc !== 'boolean') v.errors.disponible_rdc = 'Oui ou non attendu';
    const prix = v.number(body.prix_indicatif_cdf, 'prix_indicatif_cdf', { min: 0, max: 1e10 });
    v.check();

    const resultat = await db.transaction(async (conn) => {
      const q = viaConn(conn);
      const [current] = await q('SELECT id FROM medicaments WHERE id = ? FOR UPDATE', [id]);
      if (!current) throw notFound('Médicament');
      const avant = await etatMedicament(q, id);
      await conn.execute(
        `UPDATE medicaments SET ${PRODUIT_TEXTES.map(([c]) => `${c} = ?`).join(', ')}, photo_url = ?,
                disponible_rdc = ?, prix_indicatif_cdf = ?
          WHERE id = ?`,
        [...PRODUIT_TEXTES.map(([c]) => champs[c]), photo, body.disponible_rdc ? 1 : 0, prix, id],
      );
      const apres = await etatMedicament(q, id);
      const rubriques = rubriquesModifiees(avant, apres);
      if (!rubriques.length) return { inchange: true };
      await logModification(conn, {
        userId: req.editor.id,
        entite: 'medicament',
        entiteId: id,
        action: 'modification',
        resume: `Produit modifié : ${listeRubriques(rubriques)}`.slice(0, 300),
        avant,
        apres,
      });
      return { inchange: false };
    });
    res.json({ ok: true, inchange: resultat.inchange });
  }),
);

module.exports = router;
module.exports.parsePathologie = parsePathologie;
module.exports.rubriquesModifiees = rubriquesModifiees;
