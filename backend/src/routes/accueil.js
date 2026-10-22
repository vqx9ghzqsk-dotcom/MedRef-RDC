'use strict';

/**
 * Page d'accueil (lot D).
 *   GET /api/accueil          : blocs publics (actualités publiées, nouveaux produits, fiches validées
 *                               ou mises à jour, innovations et protocoles) — mis en cache hors ligne.
 *   GET /api/actualites       : toutes les actualités publiées (archive filtrable par type et zone).
 *   POST /api/actualites/actualiser : relève des sources au retour du réseau (si la dernière a plus de 15 min).
 *   GET /api/actualites/lot   : lot de nouveautés à garder sur l'appareil pour la lecture hors connexion.
 *   GET /api/actualites/:id/photo : photo d'une actualité relayée depuis sa source (téléchargement hors ligne).
 *   GET /api/accueil/pour-moi : bloc personnel selon le rôle (fiches à valider, comptes à vérifier,
 *                               fiches à revoir, état de la vérification du compte).
 */

const express = require('express');
const db = require('../db');
const config = require('../config');
const { requireAuth, assertSessionActive, EDITOR_ROLES } = require('../middleware/auth');
const { asyncHandler } = require('../utils/http');
const { PERIMETRE } = require('./medicaments');
const veille = require('../services/veille');

const router = express.Router();

const LIMITE = 8;
// Un produit est « nouveau » pendant les jours qui suivent son ajout à la base
const NOUVEAUTE_JOURS = 7;
const NOUVEAUX_MAX = 20;
// Produits de la base présentés au hasard sur l'accueil, renouvelés à chaque visite
const DECOUVERTE = 12;
const PRODUIT_ACCUEIL = `SELECT m.id, m.nom_commercial, m.dci, m.forme, m.dosage, m.photo_url, m.created_at,
                COALESCE(o.nom_affiche, o.nom) AS operateur
           FROM medicaments m LEFT JOIN operateurs o ON o.id = m.operateur_id
          WHERE ${PERIMETRE} AND m.photo_url IS NOT NULL`;

/**
 * Actualités publiées et non expirées : les 10 plus récentes de chaque type, pour que chaque
 * rubrique de l'accueil (alertes, pharmacovigilance, protocoles, innovations, informations)
 * ait de quoi défiler ; les plus récentes d'abord. Une actualité de la veille ne paraît sur
 * l'accueil qu'avec sa propre photo (celle que la source publie pour cet article) ; les autres
 * restent dans l'archive. Les actualités saisies par les administrateurs paraissent toujours.
 */
const PAR_TYPE = 10;
const ACTUALITES_PUBLIEES = `SELECT * FROM (
  SELECT a.id, a.type, a.titre, a.resume, a.source_titre, a.source_url, a.image_url, a.zone,
         a.publie_le, a.expire_le, a.origine, a.veille_source, a.traduction_auto, a.langue_originale, a.titre_original,
         p.nom AS pathologie_nom, p.slug AS pathologie_slug,
         mo.dci AS molecule_dci, mo.slug AS molecule_slug,
         ROW_NUMBER() OVER (PARTITION BY a.type ORDER BY a.publie_le DESC, a.id DESC) AS rang
    FROM actualites a
    LEFT JOIN pathologies p ON p.id = a.pathologie_id
    LEFT JOIN molecules mo ON mo.id = a.molecule_id
   WHERE a.statut = 'publie' AND a.publie_le <= CURDATE()
     AND (a.expire_le IS NULL OR a.expire_le >= CURDATE())
     AND (a.image_url IS NOT NULL OR a.origine = 'manuelle')
) t
 WHERE t.rang <= ${PAR_TYPE}
 ORDER BY t.publie_le DESC, t.id DESC`;

/**
 * Fiche du jour de l'accueil : une fiche validée (avec résumé) différente chaque jour, la même
 * pour tous les visiteurs ce jour-là ; à défaut de fiche validée, une fiche en relecture.
 */
async function choisirFicheDuJour(nbValidees, maintenant = Date.now()) {
  const jour = Math.floor(maintenant / 86400000);
  const validee = nbValidees > 0;
  const condition = validee ? "p.statut = 'valide'" : "p.statut <> 'brouillon'";
  const [{ n } = { n: 0 }] = await db.query(
    `SELECT COUNT(*) AS n FROM pathologies p WHERE ${condition} AND p.resume IS NOT NULL`,
  );
  if (!Number(n)) return null;
  const [fiche] = await db.query(
    `SELECT p.nom, p.slug, p.resume, p.statut, p.valide_le, v.nom AS valide_par, v.profil AS valide_par_profil,
            s.nom AS specialite
       FROM pathologies p
       JOIN specialites s ON s.id = p.specialite_id
       LEFT JOIN users v ON v.id = p.valide_par
      WHERE ${condition} AND p.resume IS NOT NULL
      ORDER BY p.id
      LIMIT 1 OFFSET ${jour % Number(n)}`,
  );
  return fiche || null;
}

/**
 * Calcul de dose du jour : un médicament pédiatrique courant en RDC, différent chaque jour, dont
 * la posologie de l'enfant au poids est structurée dans sa fiche (dose par kg, maximum, prises).
 * Liste choisie pour des doses simples (une dose par prise, sans dose de charge) ; l'indication
 * précise la ligne de posologie quand la molécule en a plusieurs.
 */
const CALCULS_DU_JOUR = [
  { slug: 'paracetamol' },
  { slug: 'amoxicilline', indication: 'Pneumonie (PCIME)' },
  { slug: 'artesunate', indication: 'Paludisme grave' },
  { slug: 'ibuprofene' },
  { slug: 'ceftriaxone', indication: 'Autres infections graves' },
  { slug: 'azithromycine', indication: 'Choléra' },
  { slug: 'diazepam', voie: 'Intrarectale' },
  { slug: 'cotrimoxazole', indication: 'Prophylaxie (VIH)' },
  { slug: 'metronidazole' },
  { slug: 'ampicilline' },
  { slug: 'gentamicine' },
  { slug: 'prednisolone', indication: 'Exacerbation d’asthme' },
];
// Enfant d'environ 3 à 4 ans : sous 20 kg (seuil de l'artésunate IV à 3 mg/kg)
const POIDS_EXEMPLE = 15;

async function choisirCalculDuJour(maintenant = Date.now()) {
  const jour = Math.floor(maintenant / 86400000);
  // À partir du choix du jour, le premier médicament de la liste dont la posologie est en base
  for (let i = 0; i < CALCULS_DU_JOUR.length; i += 1) {
    const c = CALCULS_DU_JOUR[(jour + i) % CALCULS_DU_JOUR.length];
    const conditions = ['mo.slug = ?', "p.population = 'enfant'", 'p.dose_par_kg IS NOT NULL'];
    const params = [c.slug];
    if (c.indication) {
      conditions.push('p.indication = ?');
      params.push(c.indication);
    }
    if (c.voie) {
      conditions.push('p.voie = ?');
      params.push(c.voie);
    }
    const [p] = await db.query(
      `SELECT mo.dci, mo.slug, p.indication, p.voie, p.dose_texte, p.dose_par_kg, p.dose_max, p.dose_base,
              p.unite, p.frequence, p.prises_par_jour, p.structure_a_valider
         FROM molecule_posologies p JOIN molecules mo ON mo.id = p.molecule_id
        WHERE ${conditions.join(' AND ')}
        ORDER BY p.ordre, p.id
        LIMIT 1`,
      params,
    );
    if (p) {
      return {
        ...p,
        dose_par_kg: Number(p.dose_par_kg),
        dose_max: p.dose_max === null ? null : Number(p.dose_max),
        poids_exemple: POIDS_EXEMPLE,
      };
    }
  }
  return null;
}

router.get(
  '/accueil',
  asyncHandler(async (_req, res) => {
    const [actualites, produits, validees, misesAJour, totaux, decouverte] = await Promise.all([
      db.query(ACTUALITES_PUBLIEES),
      // Nouveaux produits : ajoutés à la base ces derniers jours, avec photo, les plus récents d'abord
      db.query(
        `${PRODUIT_ACCUEIL} AND m.created_at >= CURDATE() - INTERVAL ${NOUVEAUTE_JOURS} DAY
          ORDER BY m.created_at DESC, m.id DESC
          LIMIT ${NOUVEAUX_MAX}`,
      ),
      db.query(
        `SELECT p.nom, p.slug, p.valide_le, v.nom AS valide_par, v.profil AS valide_par_profil,
                v.specialite_exercee AS valide_par_specialite, s.nom AS specialite
           FROM pathologies p
           JOIN specialites s ON s.id = p.specialite_id
           LEFT JOIN users v ON v.id = p.valide_par
          WHERE p.statut = 'valide' AND p.valide_le IS NOT NULL
          ORDER BY p.valide_le DESC
          LIMIT ${LIMITE}`,
      ),
      db.query(
        `SELECT p.nom, p.slug, p.statut, p.updated_at, s.nom AS specialite
           FROM pathologies p JOIN specialites s ON s.id = p.specialite_id
          WHERE p.statut <> 'brouillon'
          ORDER BY p.updated_at DESC
          LIMIT ${LIMITE}`,
      ),
      db.query(
        `SELECT (SELECT COUNT(*) FROM pathologies WHERE statut <> 'brouillon') AS fiches,
                (SELECT COUNT(*) FROM pathologies WHERE statut = 'valide') AS fiches_validees,
                (SELECT COUNT(*) FROM molecules) AS molecules,
                (SELECT COUNT(*) FROM medicaments m WHERE ${PERIMETRE}) AS produits,
                (SELECT COUNT(*) FROM autorisations_amm) AS amm`,
      ),
      // Produits de la base au hasard (hors nouveautés), différents à chaque visite
      db.query(
        `${PRODUIT_ACCUEIL} AND m.created_at < CURDATE() - INTERVAL ${NOUVEAUTE_JOURS} DAY
          ORDER BY RAND()
          LIMIT ${DECOUVERTE}`,
      ),
    ]);
    const t = totaux[0] || {};
    const ficheDuJour = await choisirFicheDuJour(Number(t.fiches_validees) || 0);
    const calculDuJour = await choisirCalculDuJour();
    res.json({
      data: {
        alertes: actualites.filter((a) => a.type === 'alerte_sanitaire' || a.type === 'pharmacovigilance'),
        actualites: actualites.filter((a) => a.type !== 'alerte_sanitaire' && a.type !== 'pharmacovigilance'),
        produits,
        produits_decouverte: decouverte || [],
        fiche_du_jour: ficheDuJour,
        calcul_du_jour: calculDuJour,
        fiches_validees: validees,
        fiches_mises_a_jour: misesAJour,
        totaux: Object.fromEntries(Object.entries(t).map(([k, v]) => [k, Number(v)])),
      },
    });
  }),
);

const TYPES = ['alerte_sanitaire', 'pharmacovigilance', 'protocole', 'innovation', 'information'];

const PHOTO_MAX = 5 * 1024 * 1024;
const TYPES_IMAGE = {
  ffd8ff: 'image/jpeg',
  '89504e47': 'image/png',
  47494638: 'image/gif',
  52494646: 'image/webp',
};

/**
 * Photo d'une actualité relayée depuis le site de sa source, pour que l'application puisse la
 * garder sur l'appareil (la politique de sécurité du site interdit à la page de télécharger
 * directement chez un tiers). Seule la photo enregistrée pour cette actualité est relayée, rien
 * n'est conservé sur le serveur ; le navigateur peut la garder un jour.
 */
router.get(
  '/actualites/:id/photo',
  asyncHandler(async (req, res) => {
    const id = Number.parseInt(req.params.id, 10);
    const [a] = Number.isInteger(id)
      ? await db.query("SELECT image_url FROM actualites WHERE id = ? AND statut = 'publie'", [id])
      : [];
    if (!a?.image_url) return res.status(404).json({ error: 'Photo introuvable' });
    let reponse;
    try {
      reponse = await fetch(a.image_url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MedRefRDC-veille/1.0)' },
        signal: AbortSignal.timeout(20000),
      });
    } catch {
      return res.status(502).json({ error: 'Source injoignable' });
    }
    if (!reponse.ok) return res.status(502).json({ error: 'Photo indisponible à la source' });
    const corps = Buffer.from(await reponse.arrayBuffer());
    if (corps.length > PHOTO_MAX) return res.status(502).json({ error: 'Photo trop volumineuse' });
    const declare = reponse.headers.get('content-type') || '';
    const signature = corps.subarray(0, 4).toString('hex');
    const type = /^image\//i.test(declare)
      ? declare
      : Object.entries(TYPES_IMAGE).find(([sig]) => signature.startsWith(sig))?.[1];
    if (!type) return res.status(502).json({ error: 'Pas une image' });
    res.set({ 'Content-Type': type, 'Cache-Control': 'public, max-age=86400' });
    return res.send(corps);
  }),
);

/**
 * Lot d'actualités pour la lecture hors connexion : publiées depuis moins de `conservationJours`
 * et non expirées. Avec `depuis` (date du lot précédent), seules les actualités nouvelles ou
 * modifiées depuis sont renvoyées ; `ids` liste toutes celles encore valables, pour que
 * l'appareil efface celles qui ont été retirées. Chaque actualité porte la date jusqu'à laquelle
 * l'appareil peut la garder (`expire_hors_ligne`).
 */
router.get(
  '/actualites/lot',
  asyncHandler(async (req, res) => {
    const jours = config.veille.conservationJours;
    const depuis =
      typeof req.query.depuis === 'string' && !Number.isNaN(Date.parse(req.query.depuis))
        ? new Date(req.query.depuis)
        : null;
    const valables = `a.statut = 'publie' AND a.publie_le <= CURDATE()
       AND a.publie_le >= CURDATE() - INTERVAL ${jours} DAY
       AND (a.expire_le IS NULL OR a.expire_le >= CURDATE())`;
    const [lignes, ids] = await Promise.all([
      db.query(
        `SELECT a.id, a.type, a.titre, a.resume, a.source_titre, a.source_url, a.image_url, a.zone,
                a.publie_le, a.expire_le, a.origine, a.veille_source, a.traduction_auto, a.langue_originale,
                a.titre_original, a.updated_at, p.nom AS pathologie_nom, p.slug AS pathologie_slug,
                mo.dci AS molecule_dci, mo.slug AS molecule_slug,
                LEAST(COALESCE(a.expire_le, a.publie_le + INTERVAL ${jours} DAY), a.publie_le + INTERVAL ${jours} DAY)
                  AS expire_hors_ligne
           FROM actualites a
           LEFT JOIN pathologies p ON p.id = a.pathologie_id
           LEFT JOIN molecules mo ON mo.id = a.molecule_id
          WHERE ${valables}${depuis ? ' AND a.updated_at > ?' : ''}
          ORDER BY a.publie_le DESC, a.id DESC`,
        depuis ? [depuis] : [],
      ),
      db.query(`SELECT a.id FROM actualites a WHERE ${valables}`),
    ]);
    res.json({
      data: lignes,
      ids: ids.map((r) => r.id),
      genere_le: new Date().toISOString(),
      conservation_jours: jours,
    });
  }),
);
const PAR_PAGE = 20;

/** Archive publique : actualités publiées (expirées comprises, signalées), les plus récentes d'abord. */
router.get(
  '/actualites',
  asyncHandler(async (req, res) => {
    const where = ["a.statut = 'publie'", 'a.publie_le <= CURDATE()'];
    const params = [];
    const { type, zone } = req.query;
    if (typeof type === 'string' && TYPES.includes(type)) {
      where.push('a.type = ?');
      params.push(type);
    }
    if (typeof zone === 'string' && zone.trim()) {
      // Une actualité sans zone concerne tout le pays : elle reste affichée
      where.push("(a.zone LIKE ? OR a.zone IS NULL OR a.zone = '')");
      params.push(`%${zone.trim().slice(0, 100)}%`);
    }
    const page = Math.max(1, Math.min(500, Number.parseInt(req.query.page, 10) || 1));
    const [lignes, total] = await Promise.all([
      db.query(
        `SELECT a.id, a.type, a.titre, a.resume, a.source_titre, a.source_url, a.image_url, a.zone, a.publie_le, a.expire_le,
                a.origine, a.veille_source, a.traduction_auto, a.langue_originale, a.titre_original,
                (a.expire_le IS NOT NULL AND a.expire_le < CURDATE()) AS expiree,
                p.nom AS pathologie_nom, p.slug AS pathologie_slug, mo.dci AS molecule_dci, mo.slug AS molecule_slug
           FROM actualites a
           LEFT JOIN pathologies p ON p.id = a.pathologie_id
           LEFT JOIN molecules mo ON mo.id = a.molecule_id
          WHERE ${where.join(' AND ')}
          ORDER BY a.publie_le DESC, a.id DESC
          LIMIT ${PAR_PAGE} OFFSET ${(page - 1) * PAR_PAGE}`,
        params,
      ),
      db.query(`SELECT COUNT(*) AS n FROM actualites a WHERE ${where.join(' AND ')}`, params),
    ]);
    res.json({
      data: lignes.map((a) => ({ ...a, expiree: Boolean(Number(a.expiree)) })),
      page,
      par_page: PAR_PAGE,
      total: Number(total[0]?.n || 0),
    });
  }),
);

/**
 * Appelé par l'application quand l'appareil retrouve internet : relève les sources si la dernière
 * relève a plus de 15 minutes (sinon répond aussitôt), puis renvoie le bilan. Public : une relève
 * récente n'est jamais relancée, quel que soit le nombre d'appels.
 */
router.post(
  '/actualites/actualiser',
  asyncHandler(async (_req, res) => {
    const r = await veille.actualiserSiAncienne(db);
    res.json({
      data: {
        statut: r.statut,
        derniere: r.derniere || null,
        publiees: r.bilan?.publies ?? 0,
      },
    });
  }),
);

router.get(
  '/accueil/pour-moi',
  requireAuth,
  asyncHandler(async (req, res) => {
    const [user] = await db.query(
      'SELECT id, role, profil, verification, token_version FROM users WHERE id = ?',
      [req.user.id],
    );
    assertSessionActive(req, user);
    const data = { role: user.role, verification: user.verification || 'non_demandee', profil: user.profil };
    if (EDITOR_ROLES.includes(user.role)) {
      const [c] = await db.query(
        `SELECT (SELECT COUNT(*) FROM pathologies WHERE statut = 'a_valider') AS fiches_a_valider,
                (SELECT COUNT(*) FROM pathologies
                  WHERE statut = 'valide' AND revision_le IS NOT NULL AND revision_le <= CURDATE()) AS fiches_a_revoir,
                (SELECT COUNT(*) FROM actualites WHERE statut = 'brouillon') AS actualites_a_publier,
                (SELECT COUNT(*) FROM users WHERE verification = 'en_attente') AS comptes_a_verifier`,
      );
      data.fiches_a_valider = Number(c.fiches_a_valider);
      data.fiches_a_revoir = Number(c.fiches_a_revoir);
      data.actualites_a_publier = Number(c.actualites_a_publier);
      // La vérification des comptes est réservée au rôle « admin »
      if (user.role === 'admin') data.comptes_a_verifier = Number(c.comptes_a_verifier);
    }
    res.json({ data });
  }),
);

module.exports = router;
