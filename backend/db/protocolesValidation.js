'use strict';

/**
 * Protocoles de prise en charge servant à valider les fiches (docs/protocoles-validation).
 * Données : seed-data/protocoles-validation.json (catalogue des sources + protocoles de chaque fiche).
 *
 * Chargement non destructif et idempotent :
 *  - une source déjà présente (même titre) est réutilisée telle quelle, jamais modifiée ;
 *  - seuls les liens fiche → source absents sont ajoutés ; aucun lien existant n'est retiré.
 * Toute fiche, source ou département inconnu arrête le chargement (données incohérentes).
 */

const NIVEAUX = [1, 2, 3, 4];
const TYPES = ['guide', 'recommandation', 'revue', 'ouvrage', 'base_de_donnees'];

/** Vérifie la cohérence des données ; renvoie la liste des problèmes (vide si tout va bien). */
function verifierDonnees(data) {
  const pb = [];
  const codes = new Set();
  const titres = new Set();
  for (const s of data.sources || []) {
    if (!s.code || codes.has(s.code)) pb.push(`source : code absent ou en double (${s.code})`);
    codes.add(s.code);
    if (!s.titre || s.titre.length > 300) pb.push(`${s.code} : titre absent ou trop long`);
    // Le chargement retrouve les sources par titre sans tenir compte de la casse
    const cle = String(s.titre || '').toLowerCase();
    if (titres.has(cle)) pb.push(`${s.code} : titre en double`);
    titres.add(cle);
    if (s.type === 'revue' && s.niveau !== 3) pb.push(`${s.code} : une revue est de niveau 3`);
    if (!NIVEAUX.includes(s.niveau)) pb.push(`${s.code} : niveau ${s.niveau}`);
    if (!TYPES.includes(s.type)) pb.push(`${s.code} : type ${s.type}`);
    if (s.url && !/^https?:\/\/\S+$/.test(s.url)) pb.push(`${s.code} : adresse invalide`);
  }
  for (const [slug, liste] of Object.entries(data.fiches || {})) {
    if (!Array.isArray(liste) || !liste.length) pb.push(`${slug} : aucun protocole`);
    for (const c of liste || []) if (!codes.has(c)) pb.push(`${slug} : source inconnue ${c}`);
  }
  return pb;
}

/**
 * @param conn connexion mysql2 (promesses)
 * @returns {{ sources_ajoutees: number, liens_ajoutes: number }}
 */
async function chargerProtocolesValidation(conn, data) {
  const pb = verifierDonnees(data);
  if (pb.length) throw new Error(`Protocoles de validation incohérents :\n- ${pb.slice(0, 20).join('\n- ')}`);

  const [deps] = await conn.query('SELECT id, slug FROM departements');
  const depId = new Map(deps.map((d) => [d.slug, d.id]));
  const [paths] = await conn.query('SELECT id, slug FROM pathologies');
  const pathId = new Map(paths.map((p) => [p.slug, p.id]));
  const inconnues = Object.keys(data.fiches).filter((slug) => !pathId.has(slug));
  if (inconnues.length) throw new Error(`Fiches inconnues : ${inconnues.slice(0, 10).join(', ')}`);

  // Sources déjà en base (titre unique) : réutilisées telles quelles
  const [existantes] = await conn.query('SELECT id, titre FROM sources');
  const parTitre = new Map(existantes.map((s) => [s.titre.toLowerCase(), s.id]));

  let sourcesAjoutees = 0;
  const sourceId = new Map();
  for (const s of data.sources) {
    if (s.departement && !depId.has(s.departement)) throw new Error(`Département inconnu : ${s.departement}`);
    const deja = parTitre.get(s.titre.toLowerCase());
    if (deja) {
      sourceId.set(s.code, deja);
      continue;
    }
    const [r] = await conn.query(
      `INSERT INTO sources (titre, organisation, niveau, type, annee, url, domaine, departement_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        s.titre,
        s.organisation || null,
        s.niveau,
        s.type,
        s.annee || null,
        s.url || null,
        s.domaine || null,
        s.departement ? depId.get(s.departement) : null,
      ],
    );
    sourcesAjoutees += 1;
    sourceId.set(s.code, r.insertId);
    parTitre.set(s.titre.toLowerCase(), r.insertId);
  }

  let liensAjoutes = 0;
  for (const [slug, codes] of Object.entries(data.fiches)) {
    for (const code of codes) {
      const [r] = await conn.query(
        'INSERT IGNORE INTO pathologie_sources (pathologie_id, source_id) VALUES (?, ?)',
        [pathId.get(slug), sourceId.get(code)],
      );
      liensAjoutes += r.affectedRows;
    }
  }
  return { sources_ajoutees: sourcesAjoutees, liens_ajoutes: liensAjoutes };
}

module.exports = { chargerProtocolesValidation, verifierDonnees };
