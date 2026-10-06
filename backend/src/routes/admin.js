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
 */

const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');
const { asyncHandler, HttpError, notFound, toInt } = require('../utils/http');

const router = express.Router();

const EDITOR_ROLES = ['admin', 'medecin'];
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
  const [user] = await db.query('SELECT id, nom, role FROM users WHERE id = ?', [req.user.id]);
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

const logModification = (conn, { userId, entite, entiteId, action, resume }) =>
  conn.execute(
    'INSERT INTO modifications (user_id, entite, entite_id, action, resume) VALUES (?, ?, ?, ?, ?)',
    [userId, entite, entiteId, action, resume],
  );

const historique = (entite, id) =>
  db.query(
    `SELECT m.id, m.action, m.resume, m.created_at, u.nom AS auteur
       FROM modifications m LEFT JOIN users u ON u.id = m.user_id
      WHERE m.entite = ? AND m.entite_id = ? ORDER BY m.created_at DESC, m.id DESC LIMIT 20`,
    [entite, id],
  );

// ---------------------------------------------------------------- Tableau de bord

router.get(
  '/admin/resume',
  asyncHandler(async (_req, res) => {
    const [pathologies, molecules, medicaments, modifications] = await Promise.all([
      db.query(
        `SELECT p.id, p.nom, p.slug, p.statut, p.updated_at, p.valide_le, v.nom AS valide_par,
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
    const statuts = Object.fromEntries(
      STATUTS.map((s) => [s, pathologies.filter((p) => p.statut === s).length]),
    );
    res.json({
      data: {
        statuts,
        pathologies,
        molecules,
        medicaments: medicaments.map((m) => ({ ...m, disponible_rdc: Boolean(m.disponible_rdc) })),
        modifications,
      },
    });
  }),
);

// ---------------------------------------------------------------- Pathologies

router.get(
  '/admin/pathologies/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Pathologie');
    const [p] = await db.query(
      `SELECT p.id, p.nom, p.slug, p.resume, ${PATHOLOGIE_TEXTES.map((c) => `p.${c}`).join(', ')},
              p.statut, p.valide_le, v.nom AS valide_par, p.updated_at
         FROM pathologies p LEFT JOIN users v ON v.id = p.valide_par
        WHERE p.id = ?`,
      [id],
    );
    if (!p) throw notFound('Pathologie');
    const [principes, complications, niveaux, examens, differentiels, optExamens, optPathologies, hist] =
      await Promise.all([
        db.query(
          `SELECT titre, objectif, details, grade_force, grade_detail, grade_source
             FROM pathologie_principes WHERE pathologie_id = ? ORDER BY ordre`,
          [id],
        ),
        db.query(
          `SELECT c.nom, c.description, c.traitement, c.surveillance_clinique, c.surveillance_paraclinique,
                  f.slug AS fiche_slug
             FROM complications c LEFT JOIN pathologies f ON f.id = c.fiche_id
            WHERE c.pathologie_id = ? ORDER BY c.ordre`,
          [id],
        ),
        db.query(
          'SELECT niveau, prise_en_charge, criteres_transfert FROM pathologie_niveaux WHERE pathologie_id = ?',
          [id],
        ),
        db.query(
          `SELECT e.slug AS examen_slug, pe.categorie, pe.interpretation
             FROM pathologie_examens pe JOIN examens e ON e.id = pe.examen_id
            WHERE pe.pathologie_id = ? ORDER BY pe.ordre`,
          [id],
        ),
        db.query(
          `SELECT f.slug AS fiche_slug, d.nom, d.elements_distinctifs
             FROM pathologie_differentiels d LEFT JOIN pathologies f ON f.id = d.differentiel_id
            WHERE d.pathologie_id = ? ORDER BY d.ordre`,
          [id],
        ),
        db.query(
          "SELECT slug, nom, type FROM examens ORDER BY FIELD(type, 'biologie', 'imagerie', 'exploration'), nom",
        ),
        db.query('SELECT slug, nom FROM pathologies WHERE id <> ? ORDER BY nom', [id]),
        historique('pathologie', id),
      ]);
    res.json({
      data: {
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

    await withDuplicateCheck(
      () =>
        db.transaction(async (conn) => {
          const [[current]] = await conn.execute('SELECT id FROM pathologies WHERE id = ? FOR UPDATE', [id]);
          if (!current) throw notFound('Pathologie');
          await conn.execute(
            `UPDATE pathologies SET nom = ?, resume = ?, ${PATHOLOGIE_TEXTES.map((c) => `${c} = ?`).join(', ')},
                    statut = ?, valide_par = ?, valide_le = ${valide ? 'NOW()' : 'NULL'}
              WHERE id = ?`,
            [
              data.nom,
              data.resume,
              ...PATHOLOGIE_TEXTES.map((c) => data[c]),
              data.statut,
              valide ? req.editor.id : null,
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
          await logModification(conn, {
            userId: req.editor.id,
            entite: 'pathologie',
            entiteId: id,
            action: valide ? 'validation' : 'modification',
            resume: valide ? 'Fiche validée' : `Fiche modifiée (statut : ${data.statut.replace('_', ' ')})`,
          });
        }),
      'Une autre fiche de cette spécialité porte déjà ce nom',
    );
    res.json({ ok: true, statut: data.statut });
  }),
);

// ---------------------------------------------------------------- Molécules

router.get(
  '/admin/molecules/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Molécule');
    const [mo] = await db.query(
      `SELECT id, dci, slug, ${FICHE_PHARMACO.join(', ')} FROM molecules WHERE id = ?`,
      [id],
    );
    if (!mo) throw notFound('Molécule');
    const [posologies, hist] = await Promise.all([
      db.query(
        `SELECT population, indication, voie, dose_texte, dose_par_kg, dose_max, unite, frequence, duree,
                securite, remarque
           FROM molecule_posologies WHERE molecule_id = ? ORDER BY ordre`,
        [id],
      ),
      historique('molecule', id),
    ]);
    res.json({
      data: {
        ...mo,
        posologies: posologies.map((p) => ({
          ...p,
          dose_par_kg: p.dose_par_kg === null ? null : Number(p.dose_par_kg),
          dose_max: p.dose_max === null ? null : Number(p.dose_max),
        })),
        historique: hist,
      },
    });
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

    await db.transaction(async (conn) => {
      const [[current]] = await conn.execute('SELECT id FROM molecules WHERE id = ? FOR UPDATE', [id]);
      if (!current) throw notFound('Molécule');
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
      await logModification(conn, {
        userId: req.editor.id,
        entite: 'molecule',
        entiteId: id,
        action: 'modification',
        resume: posologies
          ? `Fiche et posologies modifiées (${posologies.length} posologies)`
          : 'Fiche modifiée',
      });
    });
    res.json({ ok: true });
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

router.get(
  '/admin/medicaments/:id',
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    if (!id) throw notFound('Médicament');
    const [m] = await db.query(
      `SELECT m.id, m.nom_commercial, m.dci, ${PRODUIT_TEXTES.map(([c]) => `m.${c}`).join(', ')},
              m.photo_url, m.disponible_rdc, m.prix_indicatif_cdf, o.nom AS operateur
         FROM medicaments m LEFT JOIN operateurs o ON o.id = m.operateur_id
        WHERE m.id = ?`,
      [id],
    );
    if (!m) throw notFound('Médicament');
    res.json({
      data: {
        ...m,
        disponible_rdc: Boolean(m.disponible_rdc),
        prix_indicatif_cdf: m.prix_indicatif_cdf === null ? null : Number(m.prix_indicatif_cdf),
        historique: await historique('medicament', id),
      },
    });
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

    await db.transaction(async (conn) => {
      const [[current]] = await conn.execute('SELECT id FROM medicaments WHERE id = ? FOR UPDATE', [id]);
      if (!current) throw notFound('Médicament');
      await conn.execute(
        `UPDATE medicaments SET ${PRODUIT_TEXTES.map(([c]) => `${c} = ?`).join(', ')}, photo_url = ?,
                disponible_rdc = ?, prix_indicatif_cdf = ?
          WHERE id = ?`,
        [...PRODUIT_TEXTES.map(([c]) => champs[c]), photo, body.disponible_rdc ? 1 : 0, prix, id],
      );
      await logModification(conn, {
        userId: req.editor.id,
        entite: 'medicament',
        entiteId: id,
        action: 'modification',
        resume: 'Produit modifié',
      });
    });
    res.json({ ok: true });
  }),
);

module.exports = router;
module.exports.parsePathologie = parsePathologie;
