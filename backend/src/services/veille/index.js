'use strict';

/**
 * Veille automatique des actualités : relève chaque source officielle, écarte ce qui est déjà
 * connu, fait trier et traduire le reste, puis publie directement les actualités retenues
 * (statut « publie », origine « veille »). Les actualités écartées sont gardées en « archive »
 * pour ne pas être traitées deux fois ; un administrateur peut les republier.
 *
 * Programmation : au démarrage de l'API (après une minute) puis toutes les N heures.
 */

const crypto = require('crypto');
const config = require('../../config');
const { SOURCES } = require('./sources');
const { collecter } = require('./collecte');
const { trierSansModele, traiterParModele, creerClient } = require('./traitement');
const { completerImages } = require('./images');

const HEURE = 60 * 60 * 1000;
const PAR_SOURCE = 10;
const LOT = 20;
// Une actualité plus ancienne n'est pas publiée (première relève, flux qui reprennent des archives)
const FRAICHEUR_JOURS = 45;
// Les alertes quittent l'accueil après ce délai (elles restent dans l'archive)
const DUREE_ALERTE_JOURS = 30;

const cle = (url) => crypto.createHash('sha1').update(url).digest('hex');
const aujourdhui = () => new Date().toISOString().slice(0, 10);
const plusJours = (date, n) =>
  new Date(Date.parse(`${date}T00:00:00Z`) + n * 24 * HEURE).toISOString().slice(0, 10);

let enCours = null;

async function noterEtat(db, slug, etat) {
  await db.query(
    `INSERT INTO veille_sources (slug, derniere_releve, dernier_succes, derniere_erreur, items_lus, items_publies, items_ecartes)
     VALUES (?, NOW(), ${etat.erreur ? 'NULL' : 'NOW()'}, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE derniere_releve = NOW(),
       dernier_succes = ${etat.erreur ? 'dernier_succes' : 'NOW()'},
       derniere_erreur = VALUES(derniere_erreur),
       items_lus = items_lus + VALUES(items_lus),
       items_publies = items_publies + VALUES(items_publies),
       items_ecartes = items_ecartes + VALUES(items_ecartes)`,
    [
      slug,
      etat.erreur ? String(etat.erreur).slice(0, 490) : null,
      etat.lus || 0,
      etat.publies || 0,
      etat.ecartes || 0,
    ],
  );
}

/**
 * Exécute une relève complète. Options injectables pour les tests : `sources`, `collecter`,
 * `client` (client Claude, null pour le tri par mots-clés), `photos` (false : pas de recherche de
 * photos), `chargerPage` (lecture des pages d'articles), `log`.
 */
async function executerVeille(db, options = {}) {
  const {
    sources = SOURCES,
    lire = collecter,
    client = creerClient(),
    modele = config.veille.modele,
    photos = true,
    chargerPage,
    log = console,
  } = options;
  const bilan = { sources: 0, erreurs: 0, nouveaux: 0, publies: 0, ecartes: 0, traduction: Boolean(client) };
  const limite = plusJours(aujourdhui(), -FRAICHEUR_JOURS);

  // 1. Relève : éléments récents et inconnus de chaque source
  const nouveaux = [];
  const etats = new Map();
  for (const source of sources) {
    const etat = { lus: 0, publies: 0, ecartes: 0, erreur: null };
    etats.set(source.slug, etat);
    try {
      const items = (await lire(source)).filter((it) => !it.date || it.date >= limite);
      etat.lus = items.length;
      if (items.length) {
        const cles = items.map((it) => cle(it.url));
        const connus = new Set(
          (
            await db.query(
              `SELECT url_cle FROM actualites WHERE url_cle IN (${cles.map(() => '?').join(',')})`,
              cles,
            )
          ).map((r) => r.url_cle),
        );
        const frais = items.filter((it, i) => !connus.has(cles[i]) && cles.indexOf(cles[i]) === i);
        for (const it of frais.slice(0, source.max || PAR_SOURCE)) nouveaux.push({ ...it, source });
      }
      bilan.sources += 1;
    } catch (err) {
      etat.erreur = err.message;
      bilan.erreurs += 1;
      log.error?.(`✖ Veille ${source.slug} : ${err.message}`);
    }
  }
  bilan.nouveaux = nouveaux.length;

  // 2. Tri et traduction, par lots
  const decisions = new Map();
  if (nouveaux.length && client) {
    const fiches = await db.query("SELECT slug FROM pathologies WHERE statut <> 'brouillon' ORDER BY slug");
    const slugs = fiches.map((f) => f.slug);
    for (let i = 0; i < nouveaux.length; i += LOT) {
      const lot = nouveaux.slice(i, i + LOT).map((it, k) => ({ ...it, id: i + k, source: it.source.nom }));
      try {
        const parId = await traiterParModele(client, lot, { slugs, modele });
        for (const it of lot) if (parId.has(it.id)) decisions.set(it.id, parId.get(it.id));
      } catch (err) {
        // Lot non traité : ses éléments seront repris à la prochaine relève
        log.error?.(`✖ Veille : traitement d'un lot impossible (${err.message})`);
        for (const it of lot) decisions.set(it.id, null);
      }
    }
  }

  // 3. Publication
  for (let i = 0; i < nouveaux.length; i += 1) {
    const it = nouveaux[i];
    let d = client ? decisions.get(i) : trierSansModele(it);
    if (d === null) continue; // à reprendre
    if (d === undefined) d = trierSansModele(it);
    const etat = etats.get(it.source.slug);
    const date = it.date && it.date <= aujourdhui() ? it.date : aujourdhui();
    const [pathologie] = d.pathologie
      ? await db.query('SELECT id FROM pathologies WHERE slug = ?', [d.pathologie])
      : [];
    const traduit = Boolean(d.traduit) && it.langue !== 'fr';
    await db.query(
      `INSERT IGNORE INTO actualites (type, titre, resume, source_titre, source_url, zone, pathologie_id, publie_le,
         expire_le, statut, origine, veille_source, url_cle, titre_original, langue_originale, traduction_auto)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'veille', ?, ?, ?, ?, ?)`,
      [
        d.type,
        d.titre || it.titre.slice(0, 185),
        d.resume || '',
        it.source.nom,
        it.url.slice(0, 500),
        d.zone || null,
        pathologie ? pathologie.id : null,
        date,
        d.type === 'alerte_sanitaire' ? plusJours(date, DUREE_ALERTE_JOURS) : null,
        d.garder ? 'publie' : 'archive',
        it.source.slug,
        cle(it.url),
        it.titre.slice(0, 500),
        it.langue,
        traduit ? 1 : 0,
      ],
    );
    if (d.garder) {
      etat.publies += 1;
      bilan.publies += 1;
    } else {
      etat.ecartes += 1;
      bilan.ecartes += 1;
    }
  }

  for (const [slug, etat] of etats) await noterEtat(db, slug, etat);

  // 4. Photos : l'image que chaque source associe à son article (actualités sans photo cherchée)
  if (photos) {
    try {
      const p = await completerImages(db, { sources, log, ...(chargerPage ? { charger: chargerPage } : {}) });
      bilan.photos = p.trouvees;
    } catch (err) {
      log.error?.(`✖ Veille : recherche des photos impossible (${err.message})`);
    }
  }
  log.log?.(
    `✔ Veille : ${bilan.publies} actualité(s) publiée(s), ${bilan.ecartes} écartée(s), ${bilan.erreurs} source(s) en erreur` +
      (client ? '' : ' (sans traduction : ANTHROPIC_API_KEY absente)'),
  );
  return bilan;
}

let derniereFin = null;

/** Une seule relève à la fois : un appel pendant une relève renvoie la relève en cours. */
function relancer(db, options) {
  if (!enCours) {
    enCours = executerVeille(db, options).finally(() => {
      enCours = null;
      derniereFin = Date.now();
    });
  }
  return enCours;
}

/**
 * Relève demandée au retour du réseau (par l'application ou par la surveillance de la
 * connexion) : lancée seulement si la dernière a plus de `ageMinutes`, pour qu'une série de
 * reconnexions ne relise pas les sources en boucle.
 */
async function actualiserSiAncienne(db, { ageMinutes = 15, maintenant = Date.now(), ...options } = {}) {
  if (enCours) return { statut: 'en_cours', bilan: await enCours };
  if (derniereFin && maintenant - derniereFin < ageMinutes * 60 * 1000) {
    return { statut: 'recente', derniere: new Date(derniereFin).toISOString() };
  }
  return { statut: 'faite', bilan: await relancer(db, options) };
}

/** Accès à internet : une page officielle répond-elle (en-têtes seulement, 8 s au plus) ? */
async function internetDisponible(charger = fetch) {
  try {
    const res = await charger('https://www.who.int/', { method: 'HEAD', signal: AbortSignal.timeout(8000) });
    return res.status > 0;
  } catch {
    return false;
  }
}

/**
 * Surveille la connexion de l'ordinateur qui héberge l'API : à chaque retour d'internet après
 * une coupure, les actualités sont relevées aussitôt, sans attendre la relève périodique.
 * Renvoie la fonction de vérification (appelée par le minuteur, et par les tests).
 */
function surveillerConnexion(
  db,
  { verifier = internetDisponible, relever = actualiserSiAncienne, log = console } = {},
) {
  let enLigne = null;
  return async function verifierConnexion() {
    const maintenant = await verifier();
    const retour = enLigne === false && maintenant;
    enLigne = maintenant;
    if (!retour) return false;
    log.log?.('✔ Connexion internet retrouvée : actualisation des actualités');
    await relever(db, { ageMinutes: 5 }).catch((err) => log.error?.(`✖ Veille : ${err.message}`));
    return true;
  };
}

function demarrer(db) {
  if (!config.veille.auto) return null;
  const lancer = () => relancer(db).catch((err) => console.error(`✖ Veille : ${err.message}`));
  const premier = setTimeout(lancer, 60 * 1000);
  premier.unref();
  const timer = setInterval(lancer, config.veille.intervalleHeures * HEURE);
  timer.unref();
  const verifierConnexion = surveillerConnexion(db);
  const surveillance = setInterval(verifierConnexion, config.veille.verificationMinutes * 60 * 1000);
  surveillance.unref();
  return timer;
}

module.exports = {
  executerVeille,
  relancer,
  actualiserSiAncienne,
  internetDisponible,
  surveillerConnexion,
  demarrer,
  cle,
};
