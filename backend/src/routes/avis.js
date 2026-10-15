'use strict';

/**
 * Avis argumentés sur les produits, les molécules et les traitements des fiches (lot E).
 *
 * Circuit : un professionnel vérifié soumet un avis (sources obligatoires pour une donnée
 * scientifique, liens d'intérêts déclarés) → les pairs vérifiés commentent et votent « élément
 * pertinent et sourcé » sans pouvoir le modifier → un relecteur (rôle admin ou medecin) publie,
 * demande un complément ou rejette, avec motif. Signalements et historique complet.
 * Tous les droits sont vérifiés ici, à partir du rôle, du profil et du statut « vérifié » relus en base.
 */

const crypto = require('crypto');
const fs = require('fs/promises');
const path = require('path');
const express = require('express');
const db = require('../db');
const { requireAuth, assertSessionActive, EDITOR_ROLES } = require('../middleware/auth');
const { asyncHandler, HttpError, notFound, toInt } = require('../utils/http');
const { createValidator, logModification } = require('./admin');

const router = express.Router();

const DOSSIER_PHOTOS = path.join(__dirname, '..', '..', 'medias', 'avis');
const PHOTOS_MAX = 4;
const PHOTO_OCTETS_MAX = 900 * 1024;

const CIBLES = ['produit', 'molecule', 'pathologie'];
const TYPES = ['efficacite', 'tolerance', 'qualite', 'disponibilite_prix', 'donnee_scientifique'];
const TYPES_SOURCE = ['etude', 'recommandation', 'notice', 'autre'];
/** Types d'avis qui affirment une donnée scientifique : au moins une source exigée. */
const TYPES_SOURCES_OBLIGATOIRES = ['efficacite', 'donnee_scientifique'];
/** Profils autorisés à donner un avis et à examiner ceux des autres (compte vérifié). */
const PROFILS_AVIS = ['medecin_generaliste', 'medecin_specialiste', 'pharmacien', 'infirmier', 'sage_femme'];
const URL_RE = /^https?:\/\/\S+$/i;

// ------------------------------------------------------------------ droits

async function utilisateur(req) {
  const [u] = await db.query(
    'SELECT id, nom, role, profil, verification, token_version FROM users WHERE id = ?',
    [req.user.id],
  );
  assertSessionActive(req, u);
  return u;
}

const estEditeur = (u) => Boolean(u) && EDITOR_ROLES.includes(u.role);
const peutContribuer = (u) => Boolean(u) && u.verification === 'verifie' && PROFILS_AVIS.includes(u.profil);

/** Authentification facultative : un avis publié se lit sans compte. */
const authFacultative = (req, res, next) =>
  req.headers.authorization ? requireAuth(req, res, next) : next();

/** Qui peut lire un avis selon son statut. */
function peutLire(avis, u) {
  if (avis.statut === 'publie') return true;
  if (!u) return false;
  if (estEditeur(u) || avis.auteur_id === u.id) return true;
  // Examen par les pairs : les avis soumis sont lisibles par les professionnels vérifiés
  return avis.statut === 'soumis' && peutContribuer(u);
}

// ------------------------------------------------------------------ lecture

const COLONNES = `a.id, a.auteur_id, a.cible_type, a.numero_lot, a.type, a.grave, a.titre, a.description,
  a.nb_patients, a.duree_observation, a.population, a.liens_interets, a.statut, a.motif_moderation,
  a.modere_le, a.created_at, a.updated_at,
  u.nom AS auteur_nom, u.profil AS auteur_profil, mp.nom AS modere_par_nom,
  a.medicament_id, me.nom_commercial AS produit_nom, a.molecule_id, mo.slug AS molecule_slug, mo.dci AS molecule_dci,
  a.pathologie_id, p.slug AS pathologie_slug, p.nom AS pathologie_nom,
  (SELECT COUNT(*) FROM avis_votes v WHERE v.avis_id = a.id) AS votes,
  (SELECT COUNT(*) FROM avis_commentaires c WHERE c.avis_id = a.id AND c.masque = 0) AS commentaires`;
const JOINTURES = `FROM avis a
  LEFT JOIN users u ON u.id = a.auteur_id
  LEFT JOIN users mp ON mp.id = a.modere_par
  LEFT JOIN medicaments me ON me.id = a.medicament_id
  LEFT JOIN molecules mo ON mo.id = a.molecule_id
  LEFT JOIN pathologies p ON p.id = a.pathologie_id`;

const versAvis = (r) => ({
  ...r,
  grave: Boolean(r.grave),
  votes: Number(r.votes || 0),
  commentaires: Number(r.commentaires || 0),
  cible:
    r.cible_type === 'produit'
      ? { type: 'produit', id: r.medicament_id, nom: r.produit_nom }
      : r.cible_type === 'molecule'
        ? { type: 'molecule', slug: r.molecule_slug, nom: r.molecule_dci }
        : { type: 'pathologie', slug: r.pathologie_slug, nom: r.pathologie_nom },
});

async function lireAvis(id) {
  const [r] = await db.query(`SELECT ${COLONNES} ${JOINTURES} WHERE a.id = ?`, [id]);
  return r ? versAvis(r) : null;
}

/** Retrouve l'identifiant de la cible (id de produit, slug de molécule ou de fiche). */
async function resoudreCible(type, cible) {
  if (type === 'produit') {
    const id = toInt(cible);
    if (!id) return null;
    const [m] = await db.query('SELECT id FROM medicaments WHERE id = ?', [id]);
    return m ? { medicament_id: m.id } : null;
  }
  if (typeof cible !== 'string' || !cible.trim()) return null;
  const table = type === 'molecule' ? 'molecules' : 'pathologies';
  const [r] = await db.query(`SELECT id FROM ${table} WHERE slug = ?`, [cible.trim()]);
  if (!r) return null;
  return type === 'molecule' ? { molecule_id: r.id } : { pathologie_id: r.id };
}

/** GET /api/avis?cible_type=produit&cible=9 : avis publiés sur une cible. */
router.get(
  '/avis',
  asyncHandler(async (req, res) => {
    const type = req.query.cible_type;
    if (!CIBLES.includes(type)) throw new HttpError(400, 'cible_type invalide');
    const cible = await resoudreCible(type, req.query.cible);
    if (!cible) return res.json({ data: [] });
    const [colonne, valeur] = Object.entries(cible)[0];
    const rows = await db.query(
      `SELECT ${COLONNES} ${JOINTURES} WHERE a.statut = 'publie' AND a.${colonne} = ? ORDER BY a.modere_le DESC, a.id DESC`,
      [valeur],
    );
    res.json({ data: rows.map(versAvis) });
  }),
);

/** GET /api/avis/mes : mes avis, tous statuts. */
router.get(
  '/avis/mes',
  requireAuth,
  asyncHandler(async (req, res) => {
    const u = await utilisateur(req);
    const rows = await db.query(
      `SELECT ${COLONNES} ${JOINTURES} WHERE a.auteur_id = ? ORDER BY a.created_at DESC`,
      [u.id],
    );
    res.json({ data: rows.map(versAvis) });
  }),
);

/** GET /api/avis/examen : avis soumis à l'examen des pairs (hors les miens). */
router.get(
  '/avis/examen',
  requireAuth,
  asyncHandler(async (req, res) => {
    const u = await utilisateur(req);
    if (!peutContribuer(u) && !estEditeur(u)) {
      throw new HttpError(403, 'Examen réservé aux professionnels vérifiés');
    }
    const rows = await db.query(
      `SELECT ${COLONNES}, EXISTS (SELECT 1 FROM avis_votes v WHERE v.avis_id = a.id AND v.user_id = ?) AS a_vote
         ${JOINTURES}
        WHERE a.statut = 'soumis' AND (a.auteur_id IS NULL OR a.auteur_id <> ?)
        ORDER BY a.created_at`,
      [u.id, u.id],
    );
    res.json({ data: rows.map((r) => ({ ...versAvis(r), a_vote: Boolean(Number(r.a_vote)) })) });
  }),
);

router.get(
  '/avis/:id',
  authFacultative,
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    const avis = id && (await lireAvis(id));
    const u = req.user ? await utilisateur(req) : null;
    if (!avis || !peutLire(avis, u)) throw notFound('Avis');
    const editeur = estEditeur(u);
    const [sources, photos, commentaires, vote] = await Promise.all([
      db.query('SELECT type, titre, url FROM avis_sources WHERE avis_id = ? ORDER BY ordre, id', [id]),
      db.query('SELECT id, fichier, legende FROM avis_photos WHERE avis_id = ? ORDER BY id', [id]),
      db.query(
        `SELECT c.id, c.texte, c.masque, c.created_at, u.nom AS auteur_nom, u.profil AS auteur_profil
           FROM avis_commentaires c LEFT JOIN users u ON u.id = c.auteur_id
          WHERE c.avis_id = ? ${editeur ? '' : 'AND c.masque = 0'}
          ORDER BY c.created_at, c.id`,
        [id],
      ),
      u ? db.query('SELECT 1 AS ok FROM avis_votes WHERE avis_id = ? AND user_id = ?', [id, u.id]) : [],
    ]);
    const auteur = Boolean(u) && avis.auteur_id === u.id;
    res.json({
      data: {
        ...avis,
        sources,
        photos: photos.map((p) => ({ id: p.id, url: `/medias/avis/${p.fichier}`, legende: p.legende })),
        commentaires: commentaires.map((c) => ({ ...c, masque: Boolean(c.masque) })),
        a_vote: vote.length > 0,
        droits: {
          modifier: auteur && ['soumis', 'complement_demande'].includes(avis.statut),
          retirer: auteur && avis.statut !== 'retire' && avis.statut !== 'rejete',
          examiner: !auteur && avis.statut === 'soumis' && peutContribuer(u),
          moderer: editeur && !auteur,
          signaler: Boolean(u),
        },
      },
    });
  }),
);

// ------------------------------------------------------------------ soumission

async function lireCorps(body, { creation }) {
  const v = createValidator();
  let cible = null;
  let cibleType = null;
  if (creation) {
    cibleType = v.oneOf(body.cible_type, CIBLES, 'cible_type', { required: true });
    if (cibleType) {
      cible = await resoudreCible(cibleType, body.cible);
      if (!cible) v.errors.cible = 'Produit, molécule ou fiche introuvable';
    }
  }
  const type = v.oneOf(body.type, TYPES, 'type', { required: true });
  const titre = v.text(body.titre, 190, 'titre', { required: true });
  const description = v.text(body.description, 5000, 'description', { required: true });
  const nbPatients = v.number(body.nb_patients, 'nb_patients', { min: 0, max: 1000000 });
  if (nbPatients !== null && !Number.isInteger(nbPatients)) v.errors.nb_patients = 'Nombre entier attendu';
  const duree = v.text(body.duree_observation, 120, 'duree_observation');
  const population = v.text(body.population, 190, 'population');
  const lot = v.text(body.numero_lot, 80, 'numero_lot');
  const liens = v.text(body.liens_interets, 1000, 'liens_interets', { required: true });
  if (body.grave !== undefined && typeof body.grave !== 'boolean') v.errors.grave = 'Oui ou non attendu';
  if (body.engagement !== true) {
    v.errors.engagement =
      'Engagement requis : faits vérifiables, ni publicité ni critique nominative d’un confrère';
  }
  const sources = (v.list(body.sources, 'sources', 10) || []).map((s, i) => {
    const url = v.text(s.url, 500, `sources[${i}].url`);
    if (url && !URL_RE.test(url)) v.errors[`sources[${i}].url`] = 'Adresse http(s) attendue';
    return {
      type: v.oneOf(s.type, TYPES_SOURCE, `sources[${i}].type`, { required: true }),
      titre: v.text(s.titre, 500, `sources[${i}].titre`, { required: true }),
      url,
    };
  });
  if (TYPES_SOURCES_OBLIGATOIRES.includes(type) && !sources.length) {
    v.errors.sources = 'Au moins une source (étude, recommandation, notice) pour une donnée scientifique';
  }
  v.check();
  return {
    cibleType,
    cible,
    champs: {
      type,
      grave: body.grave === true ? 1 : 0,
      titre,
      description,
      nb_patients: nbPatients,
      duree_observation: duree,
      population,
      numero_lot: cibleType === 'produit' || !creation ? lot : null,
      liens_interets: liens,
    },
    sources,
  };
}

async function remplacerSources(conn, avisId, sources) {
  await conn.execute('DELETE FROM avis_sources WHERE avis_id = ?', [avisId]);
  for (const [i, s] of sources.entries()) {
    await conn.execute('INSERT INTO avis_sources (avis_id, type, titre, url, ordre) VALUES (?, ?, ?, ?, ?)', [
      avisId,
      s.type,
      s.titre,
      s.url,
      i + 1,
    ]);
  }
}

router.post(
  '/avis',
  requireAuth,
  asyncHandler(async (req, res) => {
    const u = await utilisateur(req);
    if (!peutContribuer(u)) {
      throw new HttpError(
        403,
        'Avis réservés aux médecins, pharmaciens, infirmiers et sages-femmes au compte vérifié (numéro d’ordre)',
      );
    }
    const { cibleType, cible, champs, sources } = await lireCorps(req.body || {}, { creation: true });
    const id = await db.transaction(async (conn) => {
      const colonnes = { auteur_id: u.id, cible_type: cibleType, ...cible, ...champs };
      const noms = Object.keys(colonnes);
      const [r] = await conn.execute(
        `INSERT INTO avis (${noms.join(', ')}) VALUES (${noms.map(() => '?').join(', ')})`,
        noms.map((k) => colonnes[k]),
      );
      await remplacerSources(conn, r.insertId, sources);
      await logModification(conn, {
        userId: u.id,
        entite: 'avis',
        entiteId: r.insertId,
        action: 'modification',
        resume: `Avis soumis : ${champs.titre}`.slice(0, 300),
        avant: null,
        apres: { ...colonnes, sources },
      });
      return r.insertId;
    });
    res.status(201).json({ data: await lireAvis(id) });
  }),
);

/** L'auteur complète ou corrige son avis tant qu'il n'est pas publié ; il repasse « soumis ». */
router.put(
  '/avis/:id',
  requireAuth,
  asyncHandler(async (req, res) => {
    const u = await utilisateur(req);
    const id = toInt(req.params.id);
    const avant = id && (await lireAvis(id));
    if (!avant || avant.auteur_id !== u.id) throw notFound('Avis');
    if (!['soumis', 'complement_demande'].includes(avant.statut)) {
      throw new HttpError(409, 'Avis déjà modéré : il ne peut plus être modifié');
    }
    const { champs, sources } = await lireCorps(req.body || {}, { creation: false });
    await db.transaction(async (conn) => {
      const noms = Object.keys(champs);
      await conn.execute(
        `UPDATE avis SET ${noms.map((k) => `${k} = ?`).join(', ')}, statut = 'soumis' WHERE id = ?`,
        [...noms.map((k) => champs[k]), id],
      );
      await remplacerSources(conn, id, sources);
      await logModification(conn, {
        userId: u.id,
        entite: 'avis',
        entiteId: id,
        action: 'modification',
        resume: `Avis complété par son auteur : ${champs.titre}`.slice(0, 300),
        avant,
        apres: { ...champs, sources, statut: 'soumis' },
      });
    });
    res.json({ data: await lireAvis(id) });
  }),
);

router.post(
  '/avis/:id/retirer',
  requireAuth,
  asyncHandler(async (req, res) => {
    const u = await utilisateur(req);
    const id = toInt(req.params.id);
    const avant = id && (await lireAvis(id));
    if (!avant || avant.auteur_id !== u.id) throw notFound('Avis');
    if (['retire', 'rejete'].includes(avant.statut)) throw new HttpError(409, 'Avis déjà clos');
    await db.transaction(async (conn) => {
      await conn.execute("UPDATE avis SET statut = 'retire' WHERE id = ?", [id]);
      await logModification(conn, {
        userId: u.id,
        entite: 'avis',
        entiteId: id,
        action: 'modification',
        resume: `Avis retiré par son auteur : ${avant.titre}`.slice(0, 300),
        avant: { statut: avant.statut },
        apres: { statut: 'retire' },
      });
    });
    res.json({ data: await lireAvis(id) });
  }),
);

// ------------------------------------------------------------------ photos

/** Type d'image d'après les premiers octets (on ne se fie pas à l'extension déclarée). */
function typeImage(buf) {
  if (buf.length > 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpg';
  if (
    buf.length > 8 &&
    buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
  )
    return 'png';
  if (buf.length > 12 && buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP')
    return 'webp';
  return null;
}

router.post(
  '/avis/:id/photos',
  requireAuth,
  asyncHandler(async (req, res) => {
    const u = await utilisateur(req);
    const id = toInt(req.params.id);
    const avis = id && (await lireAvis(id));
    if (!avis || avis.auteur_id !== u.id) throw notFound('Avis');
    if (!['soumis', 'complement_demande'].includes(avis.statut)) {
      throw new HttpError(409, 'Photos ajoutables seulement avant la modération');
    }
    const [{ n }] = await db.query('SELECT COUNT(*) AS n FROM avis_photos WHERE avis_id = ?', [id]);
    if (Number(n) >= PHOTOS_MAX) throw new HttpError(409, `${PHOTOS_MAX} photos maximum`);
    const brut = typeof req.body?.data === 'string' ? req.body.data : '';
    const m = /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)$/.exec(brut);
    if (!m) throw new HttpError(400, 'Image JPEG, PNG ou WebP attendue');
    const buf = Buffer.from(m[2], 'base64');
    if (buf.length > PHOTO_OCTETS_MAX) throw new HttpError(413, 'Image trop lourde (900 Ko maximum)');
    const ext = typeImage(buf);
    if (!ext) throw new HttpError(400, 'Le fichier n’est pas une image valide');
    const legende =
      typeof req.body.legende === 'string' && req.body.legende.trim()
        ? req.body.legende.trim().slice(0, 190)
        : null;
    const fichier = `${crypto.randomBytes(16).toString('hex')}.${ext}`;
    await fs.mkdir(DOSSIER_PHOTOS, { recursive: true });
    await fs.writeFile(path.join(DOSSIER_PHOTOS, fichier), buf);
    const r = await db.query('INSERT INTO avis_photos (avis_id, fichier, legende) VALUES (?, ?, ?)', [
      id,
      fichier,
      legende,
    ]);
    res.status(201).json({ data: { id: r.insertId, url: `/medias/avis/${fichier}`, legende } });
  }),
);

// ------------------------------------------------------------------ examen par les pairs

async function avisEnExamen(req) {
  const u = await utilisateur(req);
  const id = toInt(req.params.id);
  const avis = id && (await lireAvis(id));
  if (!avis || !peutLire(avis, u)) throw notFound('Avis');
  if (!peutContribuer(u)) throw new HttpError(403, 'Examen réservé aux professionnels vérifiés');
  if (avis.auteur_id === u.id) throw new HttpError(403, 'Vous ne pouvez pas examiner votre propre avis');
  if (avis.statut !== 'soumis') throw new HttpError(409, 'Cet avis n’est plus en examen');
  return { u, avis };
}

/** Vote « élément pertinent et sourcé » (bascule). */
router.post(
  '/avis/:id/vote',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { u, avis } = await avisEnExamen(req);
    const r = await db.query('DELETE FROM avis_votes WHERE avis_id = ? AND user_id = ?', [avis.id, u.id]);
    if (!r.affectedRows)
      await db.query('INSERT INTO avis_votes (avis_id, user_id) VALUES (?, ?)', [avis.id, u.id]);
    const [{ n }] = await db.query('SELECT COUNT(*) AS n FROM avis_votes WHERE avis_id = ?', [avis.id]);
    res.json({ data: { a_vote: !r.affectedRows, votes: Number(n) } });
  }),
);

router.post(
  '/avis/:id/commentaires',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { u, avis } = await avisEnExamen(req);
    const v = createValidator();
    const texte = v.text(req.body?.texte, 3000, 'texte', { required: true });
    v.check();
    const r = await db.query('INSERT INTO avis_commentaires (avis_id, auteur_id, texte) VALUES (?, ?, ?)', [
      avis.id,
      u.id,
      texte,
    ]);
    res.status(201).json({ data: { id: r.insertId, texte, auteur_nom: u.nom, auteur_profil: u.profil } });
  }),
);

router.post(
  '/avis/:id/signalements',
  requireAuth,
  asyncHandler(async (req, res) => {
    const u = await utilisateur(req);
    const id = toInt(req.params.id);
    const avis = id && (await lireAvis(id));
    if (!avis || !peutLire(avis, u)) throw notFound('Avis');
    const v = createValidator();
    const motif = v.text(req.body?.motif, 500, 'motif', { required: true });
    const commentaireId = req.body?.commentaire_id ? toInt(req.body.commentaire_id) : null;
    v.check();
    if (commentaireId) {
      const [c] = await db.query('SELECT id FROM avis_commentaires WHERE id = ? AND avis_id = ?', [
        commentaireId,
        id,
      ]);
      if (!c) throw notFound('Commentaire');
    }
    await db.query(
      'INSERT INTO avis_signalements (avis_id, commentaire_id, auteur_id, motif) VALUES (?, ?, ?, ?)',
      [id, commentaireId, u.id, motif],
    );
    res.status(201).json({ ok: true });
  }),
);

// ------------------------------------------------------------------ paramètres publics

/** Coordonnées officielles de pharmacovigilance saisies par un administrateur (null sinon). */
router.get(
  '/parametres/pharmacovigilance',
  asyncHandler(async (_req, res) => {
    const [p] = await db.query(
      "SELECT valeur, updated_at FROM parametres WHERE cle = 'pharmacovigilance_contact'",
    );
    res.json({ data: { contact: p?.valeur || null, mis_a_jour: p?.updated_at || null } });
  }),
);

// ------------------------------------------------------------------ modération

const requireEditeur = asyncHandler(async (req, _res, next) => {
  const u = await utilisateur(req);
  if (!estEditeur(u)) throw new HttpError(403, 'Accès réservé aux administrateurs');
  req.editeur = u;
  next();
});

router.get(
  '/admin/avis',
  requireAuth,
  requireEditeur,
  asyncHandler(async (req, res) => {
    const statut = typeof req.query.statut === 'string' && req.query.statut ? req.query.statut : null;
    const rows = await db.query(
      `SELECT ${COLONNES},
              (SELECT COUNT(*) FROM avis_signalements s WHERE s.avis_id = a.id AND s.traite_le IS NULL) AS signalements
         ${JOINTURES}
        ${statut ? 'WHERE a.statut = ?' : ''}
        ORDER BY FIELD(a.statut, 'soumis', 'complement_demande', 'publie', 'rejete', 'retire'), a.created_at DESC
        LIMIT 300`,
      statut ? [statut] : [],
    );
    res.json({ data: rows.map((r) => ({ ...versAvis(r), signalements: Number(r.signalements || 0) })) });
  }),
);

const DECISIONS = { publier: 'publie', complement: 'complement_demande', rejeter: 'rejete' };

router.post(
  '/admin/avis/:id/moderation',
  requireAuth,
  requireEditeur,
  asyncHandler(async (req, res) => {
    const u = req.editeur;
    const id = toInt(req.params.id);
    const avant = id && (await lireAvis(id));
    if (!avant) throw notFound('Avis');
    if (avant.auteur_id === u.id) throw new HttpError(403, 'Vous ne pouvez pas modérer votre propre avis');
    const v = createValidator();
    const decision = v.oneOf(req.body?.decision, Object.keys(DECISIONS), 'decision', { required: true });
    const motif = v.text(req.body?.motif, 2000, 'motif', { required: decision !== 'publier' });
    v.check();
    if (['retire'].includes(avant.statut)) throw new HttpError(409, 'Avis retiré par son auteur');
    const statut = DECISIONS[decision];
    await db.transaction(async (conn) => {
      await conn.execute(
        'UPDATE avis SET statut = ?, motif_moderation = ?, modere_par = ?, modere_le = NOW() WHERE id = ?',
        [statut, motif, u.id, id],
      );
      await logModification(conn, {
        userId: u.id,
        entite: 'avis',
        entiteId: id,
        action: decision === 'publier' ? 'validation' : 'modification',
        resume:
          `Avis ${decision === 'publier' ? 'publié' : decision === 'rejeter' ? 'rejeté' : 'en attente de complément'} : ${avant.titre}`.slice(
            0,
            300,
          ),
        avant: { statut: avant.statut, motif_moderation: avant.motif_moderation },
        apres: { statut, motif_moderation: motif },
      });
    });
    res.json({ data: await lireAvis(id) });
  }),
);

router.get(
  '/admin/signalements',
  requireAuth,
  requireEditeur,
  asyncHandler(async (_req, res) => {
    const rows = await db.query(
      `SELECT s.id, s.avis_id, s.commentaire_id, s.motif, s.created_at, u.nom AS auteur_nom,
              a.titre AS avis_titre, c.texte AS commentaire_texte, c.masque AS commentaire_masque
         FROM avis_signalements s
         JOIN avis a ON a.id = s.avis_id
         LEFT JOIN users u ON u.id = s.auteur_id
         LEFT JOIN avis_commentaires c ON c.id = s.commentaire_id
        WHERE s.traite_le IS NULL
        ORDER BY s.created_at`,
    );
    res.json({ data: rows.map((r) => ({ ...r, commentaire_masque: Boolean(r.commentaire_masque) })) });
  }),
);

router.post(
  '/admin/signalements/:id/traiter',
  requireAuth,
  requireEditeur,
  asyncHandler(async (req, res) => {
    const id = toInt(req.params.id);
    const [s] = id
      ? await db.query('SELECT id, commentaire_id FROM avis_signalements WHERE id = ?', [id])
      : [];
    if (!s) throw notFound('Signalement');
    await db.transaction(async (conn) => {
      if (req.body?.masquer_commentaire === true && s.commentaire_id) {
        await conn.execute('UPDATE avis_commentaires SET masque = 1 WHERE id = ?', [s.commentaire_id]);
      }
      await conn.execute('UPDATE avis_signalements SET traite_le = NOW(), traite_par = ? WHERE id = ?', [
        req.editeur.id,
        id,
      ]);
    });
    res.json({ ok: true });
  }),
);

/** Coordonnées de pharmacovigilance : saisies par un administrateur, jamais inventées. */
router.put(
  '/admin/parametres/pharmacovigilance',
  requireAuth,
  requireEditeur,
  asyncHandler(async (req, res) => {
    if (req.editeur.role !== 'admin') throw new HttpError(403, 'Accès réservé aux administrateurs');
    const v = createValidator();
    const contact = v.text(req.body?.contact, 2000, 'contact');
    v.check();
    await db.query(
      `INSERT INTO parametres (cle, valeur, updated_by) VALUES ('pharmacovigilance_contact', ?, ?)
       ON DUPLICATE KEY UPDATE valeur = VALUES(valeur), updated_by = VALUES(updated_by)`,
      [contact, req.editeur.id],
    );
    res.json({ data: { contact } });
  }),
);

module.exports = router;
module.exports.peutContribuer = peutContribuer;
module.exports.typeImage = typeImage;
