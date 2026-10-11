'use strict';

/**
 * Import des documents tirés du répertoire des AMM de l'ACOREP (seed-data/acorep.json,
 * produit par scripts/catalogues/extraire_acorep.py) : firmes de la liste, puis tous
 * les opérateurs (médicaments, compléments, dispositifs, cosmétiques) :
 *
 * 1. fiches des substances : conservées intactes (molecule_fiches_externes) ; une
 *    substance absente de MedRef devient une molécule marquée « à valider » ; une
 *    molécule existante garde sa fiche MedRef ;
 * 2. répertoire des AMM : chaque ligne est conservée (autorisations_amm) et rattachée
 *    au produit de catalogue de la même firme et de la même marque, sinon à un
 *    produit créé pour l'occasion (un par marque + DCI) ;
 * 3. synthèse par firme et tableau de tous les opérateurs, source bibliographique, puis rapprochement des produits de
 *    catalogue encore non liés avec les nouvelles molécules.
 *
 * Sans perte et rejouable : rien de ce qui existe n'est modifié (références uniques) ;
 * une ligne AMM d'un document précédent est complétée (conditionnement), pas dupliquée.
 */

const crypto = require('node:crypto');
const { construireIndex, rapprocher, normaliser, trouver } = require('./correspondance');
const { relierAutomatiquement } = require('./catalogues');
const { slugify } = require('../src/utils/slugify');

const SOURCE = 'ACOREP';
const SOURCE_FICHE = 'ACOREP — fiche rédigée par IA (document du 7 octobre 2026)';
const SOURCE_PRODUIT =
  'Répertoire des AMM de l’ACOREP (extraction du 7 octobre 2026) — informations réglementaires, ' +
  'à vérifier sur la notice (RCP) du produit.';
const SOURCE_BIBLIO = {
  titre: 'Répertoire des autorisations de mise sur le marché (AMM) — ACOREP',
  organisation: 'ACOREP',
  url: 'https://acorep.gouv.cd/repectoire-amm',
};

const tronquer = (s, n) => (s && s.length > n ? `${s.slice(0, n - 1)}…` : s || null);
const cle = (s) => slugify(s).replace(/-/g, '');
/** Référence courte et stable (les colonnes ref sont limitées à 120 caractères). */
const ref = (...parties) => {
  const brut = parties.map((p) => slugify(String(p))).join(':');
  return brut.length <= 120
    ? brut
    : `${brut.slice(0, 100)}:${crypto.createHash('sha1').update(brut).digest('hex').slice(0, 12)}`;
};

// Marque sans dose ni forme : « AMIDOL 500 mg comprimés » → « amidol »
const MOTS_FORME =
  /\b(comprimes?|co|gelules?|caps|capsules?|sirop|sir|suspension|susp|solution|sol|injectable|inj|creme|pommade|gel|collyre|ovules?|suppositoires?|supp|sachets?|poudre|pd|pediatrique)\b/g;
const marque = (s) => normaliser(s).replace(MOTS_FORME, ' ').replace(/\s+/g, ' ').trim();
const premierNombre = (s) => (String(s || '').match(/\d+(?:[.,]\d+)?/) || [null])[0]?.replace(',', '.');

// ------------------------------------------------------------------ 1. Fiches des substances

async function classeId(conn, nom) {
  if (!nom) return null;
  await conn.execute('INSERT IGNORE INTO classes_pharmacologiques (nom) VALUES (?)', [tronquer(nom, 190)]);
  const [[c]] = await conn.execute('SELECT id FROM classes_pharmacologiques WHERE nom = ?', [
    tronquer(nom, 190),
  ]);
  return c.id;
}

/** Molécule MedRef correspondant à une substance du document (nom, nom sans parenthèses, parenthèses). */
function moleculeExistante(nom, { index, parNom }) {
  const sansParentheses = nom.replace(/\([^)]*\)/g, ' ').trim();
  const dedans = (nom.match(/\(([^)]*)\)/) || [])[1];
  // « Magnésium (sulfate) » → aussi « sulfate de magnésium »
  const inverse = dedans && `${dedans} de ${sansParentheses}`;
  for (const essai of [nom, sansParentheses, inverse, dedans].filter(Boolean)) {
    const n = normaliser(essai);
    if (parNom.has(n)) return parNom.get(n);
    const slug = trouver(essai, index);
    if (slug) return slug;
  }
  return null;
}

async function chargerSubstances(conn, substances, compte) {
  const [rows] = await conn.execute('SELECT id, slug, dci FROM molecules');
  const ids = new Map(rows.map((r) => [r.slug, r.id]));
  const reperes = {
    index: construireIndex(rows),
    // Y compris les solutés exclus du rapprochement des produits
    parDci: new Map(rows.map((r) => [r.dci.trim().toLowerCase(), r.slug])),
    parNom: new Map(
      rows.flatMap((r) => [
        [normaliser(r.dci), r.slug],
        [normaliser(r.slug.replace(/-/g, ' ')), r.slug],
      ]),
    ),
  };
  const dejaPrises = new Set();
  for (const s of substances) {
    // Même nom exact : toujours cette molécule (import précédent du même document)
    const exacte = reperes.parDci.get(s.nom.trim().toLowerCase());
    let slug = exacte || moleculeExistante(s.nom, reperes);
    // Deux substances du document rapprochées de la même molécule : la seconde a sa propre fiche
    if (!exacte && slug && dejaPrises.has(slug)) slug = null;
    let id = slug && ids.get(slug);
    if (id) {
      compte.substances_existantes += 1;
      await conn.execute(
        'UPDATE molecules SET groupe_therapeutique = COALESCE(groupe_therapeutique, ?) WHERE id = ?',
        [s.groupe, id],
      );
    } else {
      slug = ids.has(s.slug) ? `${s.slug}-acorep` : s.slug;
      const [r] = await conn.execute(
        `INSERT INTO molecules (dci, slug, classe_id, groupe_therapeutique, mecanisme, indications, posologie,
           precautions, fiche_source, fiche_a_valider)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`,
        [
          tronquer(s.nom, 190),
          slug,
          await classeId(conn, s.classe),
          s.groupe,
          s.mecanisme,
          s.indications,
          s.posologie,
          s.precautions,
          SOURCE_FICHE,
        ],
      );
      id = r.insertId;
      ids.set(slug, id);
      reperes.parNom.set(normaliser(s.nom), slug);
      reperes.parDci.set(s.nom.trim().toLowerCase(), slug);
      compte.molecules_creees += 1;
    }
    dejaPrises.add(slug);
    const [ins] = await conn.execute(
      `INSERT IGNORE INTO molecule_fiches_externes (molecule_id, source, nom, classe, groupe, mecanisme,
         indications, posologie, precautions, presente_chez, nb_amm)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        SOURCE,
        tronquer(s.nom, 190),
        tronquer(s.classe, 190),
        s.groupe,
        s.mecanisme,
        s.indications,
        s.posologie,
        s.precautions,
        tronquer(s.presente_chez.join(', '), 1000),
        s.nb_amm ?? null,
      ],
    );
    compte.fiches += ins.affectedRows;
    if (!ins.affectedRows && s.nb_amm != null) {
      // Fiche déjà importée : compléter le nombre d'AMM du répertoire complet
      await conn.execute(
        'UPDATE molecule_fiches_externes SET nb_amm = ? WHERE molecule_id = ? AND source = ?',
        [s.nb_amm, id, SOURCE],
      );
    }
  }
}

// ------------------------------------------------------------------ 2. Firmes et AMM

/** Premier pays cité : « Inde (224), inde (1) » → « Inde ». */
const premierPays = (texte) => tronquer((texte || '').split(/\s*\(\d+\)/)[0].trim(), 80);

async function operateurs(conn, d) {
  const [rows] = await conn.execute('SELECT id, nom FROM operateurs');
  const existants = rows.map((r) => ({ ...r, cle: cle(r.nom) }));
  const roles = new Map(d.synthese.map((s) => [s.firme, s]));
  const pays = new Map((d.operateurs || []).map((o) => [o.nom, premierPays(o.pays)]));
  // Firmes de la liste : variantes d'écriture tolérées (« Arau Phar » = « Arauphar »)
  const trouverFirme = (nom) => {
    for (const v of [nom, ...nom.split('/')].map(cle).filter((x) => x.length >= 3)) {
      const o = existants.find(
        (e) =>
          e.cle === v ||
          (v.length >= 4 && (e.cle.startsWith(v) || (v.startsWith(e.cle) && e.cle.length >= 4))),
      );
      if (o) return o.id;
    }
    return null;
  };
  // Autres opérateurs (plusieurs centaines) : nom identique seulement, pour ne rien confondre
  const exact = (nom) => existants.find((e) => e.cle === cle(nom))?.id || null;

  const ids = new Map();
  for (const f of d.firmes) {
    let id = f.section === 'autre' ? exact(f.nom) : trouverFirme(f.nom);
    if (!id) {
      const s = roles.get(f.nom);
      const [r] = await conn.execute(
        'INSERT INTO operateurs (nom, slug, type, pays, source_catalogue) VALUES (?, ?, ?, ?, ?)',
        [
          tronquer(f.nom, 190),
          tronquer(slugify(f.nom), 190),
          s && s.amm_importateur > s.amm_fabricant ? 'importateur' : 'fabricant',
          pays.get(f.nom) || null,
          SOURCE_BIBLIO.titre,
        ],
      );
      id = r.insertId;
      existants.push({ id, nom: f.nom, cle: cle(f.nom) });
    }
    ids.set(f.nom, id);
  }
  for (const nom of d.firmes_sans_amm) if (!ids.has(nom)) ids.set(nom, trouverFirme(nom));
  return { ids, exact };
}

async function synthese(conn, d, { ids, exact }) {
  const lignes = [
    ...d.synthese,
    ...d.firmes_sans_amm
      .filter((f) => !d.synthese.some((s) => s.firme === f))
      .map((firme) => ({ firme, amm_fabricant: 0, amm_importateur: 0, lignes: 0, produits_distincts: 0 })),
  ];
  for (const s of lignes) {
    await conn.execute(
      `INSERT IGNORE INTO repertoire_amm_firmes (source, section, firme, operateur_id, amm_fabricant,
         amm_importateur, lignes, produits_distincts) VALUES (?, 'liste', ?, ?, ?, ?, ?, ?)`,
      [
        SOURCE,
        s.firme,
        ids.get(s.firme) || null,
        s.amm_fabricant,
        s.amm_importateur,
        s.lignes,
        s.produits_distincts,
      ],
    );
  }
  // Tous les opérateurs (fabricants) du répertoire, avec pays et importateurs principaux
  for (const o of d.operateurs || []) {
    await conn.execute(
      `INSERT IGNORE INTO repertoire_amm_firmes (source, section, firme, firme_liste, operateur_id, lignes,
         produits_distincts, pays, importateurs) VALUES (?, 'fabricant', ?, ?, ?, ?, ?, ?, ?)`,
      [
        SOURCE,
        tronquer(o.nom, 255),
        tronquer(o.firme_liste, 190),
        ids.get(o.nom) || (o.firme_liste && ids.get(o.firme_liste)) || exact(o.nom),
        o.lignes,
        o.produits_distincts,
        tronquer(o.pays, 255),
        tronquer(o.importateurs, 500),
      ],
    );
  }
}

/** Produits de catalogue d'une firme, indexés par marque. */
async function produitsCatalogue(conn, operateurId) {
  const [rows] = await conn.execute(
    `SELECT id, nom_commercial, forme_categorie,
            CONCAT_WS(' ', nom_commercial, dosage, presentation, composition_texte) AS texte
       FROM medicaments WHERE operateur_id = ? AND (catalogue_ref IS NULL OR catalogue_ref NOT LIKE 'acorep:%')`,
    [operateurId],
  );
  const parMarque = new Map();
  for (const r of rows) {
    const m = marque(r.nom_commercial);
    if (!m) continue;
    if (!parMarque.has(m)) parMarque.set(m, []);
    parMarque.get(m).push(r);
  }
  return parMarque;
}

/**
 * Produit de catalogue pour une ligne AMM : même marque et forme compatible, de
 * préférence avec le même dosage. Aucun produit compatible → null (produit créé).
 */
function produitPourLigne(candidats, ligne) {
  const compatibles = (candidats || []).filter(
    (r) => !r.forme_categorie || !ligne.forme_categorie || r.forme_categorie === ligne.forme_categorie,
  );
  if (!compatibles.length) return null;
  const n = premierNombre(ligne.dosage);
  const contient = (r) => n && new RegExp(`(^|[^0-9.,])${n.replace('.', '[.,]')}([^0-9]|$)`).test(r.texte);
  const score = (r) => (r.forme_categorie === ligne.forme_categorie ? 2 : 0) + (contient(r) ? 1 : 0);
  return [...compatibles].sort((a, b) => score(b) - score(a))[0].id;
}

async function lierMolecules(conn, medicamentId, slugs, ids) {
  for (const [i, slug] of slugs.entries()) {
    await conn.execute(
      `INSERT IGNORE INTO medicament_molecules (medicament_id, molecule_id, ordre, origine) VALUES (?, ?, ?, 'auto')`,
      [medicamentId, ids.get(slug), i + 1],
    );
  }
}

/** Cosmétiques et dispositifs : pas de principe actif à lier aux molécules. */
const SANS_PRINCIPE_ACTIF = new Set(['cosmetique', 'dispositif']);

/** Produit MedRef créé pour des lignes AMM sans produit de catalogue (une marque + DCI). */
async function creerProduit(conn, f, operateurId, lignes, { index, ids }, compte) {
  const p0 = lignes[0];
  const nature = p0.nature || 'medicament';
  const sansObjet = SANS_PRINCIPE_ACTIF.has(nature);
  const refProduit = ref('acorep', f.nom, p0.marque, p0.dci);
  const [[deja]] = await conn.execute('SELECT id, nature FROM medicaments WHERE catalogue_ref = ?', [
    refProduit,
  ]);
  if (deja) {
    // Produit d'un import précédent sans nature : la renseigner (et retirer les liens automatiques)
    if (deja.nature === 'medicament' && nature !== 'medicament') {
      await conn.execute(
        `UPDATE medicaments SET nature = ?, liaison = IF(?, 'sans_objet', liaison) WHERE id = ?`,
        [nature, sansObjet, deja.id],
      );
      if (sansObjet) {
        await conn.execute(`DELETE FROM medicament_molecules WHERE medicament_id = ? AND origine = 'auto'`, [
          deja.id,
        ]);
      }
      compte.natures_corrigees += 1;
    }
    return deja.id;
  }
  const dci = p0.dci && !/^n\.?a$/i.test(p0.dci) ? p0.dci : p0.marque;
  const r = sansObjet
    ? { molecules: [], nbComposants: null, liaison: 'sans_objet' }
    : rapprocher(
        { dci: dci.replace(/\s*,\s*/g, ' + '), dosage: lignes.map((l) => l.dosage).join(' ; ') },
        index,
      );
  const uniques = (champ) => [
    ...new Set(lignes.map((l) => l[champ]).filter((v) => v && !/^n\.?a$/i.test(v))),
  ];
  const [ins] = await conn.execute(
    `INSERT INTO medicaments (nom_commercial, dci, nature, operateur_id, forme, dosage, presentation, disponible_rdc,
       sources_text, catalogue_ref, catalogue_classe, forme_categorie, pediatrique, nb_composants, liaison)
     VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?, ?, ?, ?, ?, ?, ?)`,
    [
      tronquer(p0.marque, 190),
      tronquer(dci, 500),
      nature,
      operateurId,
      tronquer(uniques('forme').join(' ; '), 120),
      tronquer(uniques('dosage').join(' ; '), 120),
      tronquer(uniques('conditionnement').join(' ; '), 255),
      SOURCE_PRODUIT,
      refProduit,
      tronquer(p0.classe, 190),
      lignes.map((l) => l.forme_categorie).find(Boolean) || null,
      lignes.some((l) => l.enfant) ? 1 : 0,
      r.nbComposants === null ? null : Math.min(r.nbComposants, 255),
      r.liaison,
    ],
  );
  await lierMolecules(conn, ins.insertId, r.molecules, ids);
  compte.produits_crees += 1;
  compte[`liaison_${r.liaison}`] += 1;
  return ins.insertId;
}

/**
 * Enregistre une ligne du répertoire. Une ligne déjà importée par un document précédent
 * (même opérateur, marque, dosage et n° AMM) est complétée (conditionnement) au lieu
 * d'être dupliquée.
 */
async function ligneAmm(conn, l, refLigne, section, operateurId, medicamentId, compte) {
  const [[existe]] = await conn.execute('SELECT id FROM autorisations_amm WHERE ref = ?', [refLigne]);
  if (existe) {
    compte.lignes_deja_presentes += 1;
    return;
  }
  const valeurs = {
    marque: tronquer(l.marque, 255),
    dosage: tronquer(l.dosage, 400),
    forme: tronquer(l.forme, 255),
    conditionnement: tronquer(l.conditionnement, 255),
    numero: tronquer(l.amm, 190),
  };
  const [[ancienne]] = await conn.execute(
    `SELECT id FROM autorisations_amm
      WHERE ref LIKE 'acorep:%' AND operateur_id <=> ? AND marque = ? AND dosage <=> ? AND numero <=> ?
      ORDER BY id LIMIT 1`,
    [operateurId, valeurs.marque, tronquer(l.dosage, 190), valeurs.numero],
  );
  if (ancienne) {
    await conn.execute(
      'UPDATE autorisations_amm SET ref = ?, section = ?, forme = ?, conditionnement = ? WHERE id = ?',
      [refLigne, section, valeurs.forme, valeurs.conditionnement, ancienne.id],
    );
    compte.lignes_completees += 1;
    return;
  }
  await conn.execute(
    `INSERT INTO autorisations_amm (source, section, ref, operateur_id, medicament_id, marque, dci, dosage, forme,
       conditionnement, classe, provenance, numero, fiche)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      SOURCE,
      section,
      refLigne,
      operateurId,
      medicamentId,
      valeurs.marque,
      tronquer(l.dci, 500),
      valeurs.dosage,
      valeurs.forme,
      valeurs.conditionnement,
      tronquer(l.classe, 190),
      tronquer(l.provenance, 120),
      valeurs.numero,
      tronquer(l.fiche, 30),
    ],
  );
  compte.lignes_amm += 1;
}

async function chargerAmm(conn, d, { ids: operateurIds }, compte) {
  const [mols] = await conn.execute('SELECT id, slug, dci FROM molecules');
  const molecules = { index: construireIndex(mols), ids: new Map(mols.map((m) => [m.slug, m.id])) };
  const refsVues = new Set();

  for (const f of d.firmes) {
    const operateurId = operateurIds.get(f.nom);
    const section = f.section === 'autre' ? 'autre' : 'liste';
    const catalogue = await produitsCatalogue(conn, operateurId);
    // Lignes regroupées en produits distincts (marque + DCI), comme dans le document
    const groupes = new Map();
    for (const p of f.produits) {
      const k = `${marque(p.marque) || normaliser(p.marque)}|${normaliser(p.dci)}`;
      if (!groupes.has(k)) groupes.set(k, []);
      groupes.get(k).push(p);
    }

    for (const lignes of groupes.values()) {
      const candidats = catalogue.get(marque(lignes[0].marque));
      const cibles = lignes.map((l) => produitPourLigne(candidats, l));
      const reste = lignes.filter((_, i) => !cibles[i]);
      const creeId = reste.length ? await creerProduit(conn, f, operateurId, reste, molecules, compte) : null;

      for (const [i, l] of lignes.entries()) {
        if (cibles[i]) compte.lignes_sur_catalogue += 1;
        // Référence tirée du contenu de la ligne : stable d'un document à l'autre
        const base = ref('amm', f.nom, l.marque, l.dosage, l.forme, l.conditionnement || '', l.amm);
        let refLigne = base;
        for (let n = 2; refsVues.has(refLigne); n += 1) refLigne = `${base.slice(0, 112)}:${n}`;
        refsVues.add(refLigne);
        await ligneAmm(conn, l, refLigne, section, operateurId, cibles[i] || creeId, compte);
      }
    }
  }
}

/** Importe tout le document ; renvoie les compteurs de l'import. */
async function chargerAcorep(conn, d) {
  if (!d) return null;
  const compte = {
    fiches: 0,
    substances_existantes: 0,
    molecules_creees: 0,
    lignes_amm: 0,
    lignes_completees: 0,
    lignes_deja_presentes: 0,
    produits_crees: 0,
    natures_corrigees: 0,
    lignes_sur_catalogue: 0,
    liaison_auto: 0,
    liaison_partielle: 0,
    liaison_aucune: 0,
    liaison_sans_objet: 0,
  };
  await chargerSubstances(conn, d.substances, compte);
  const operateursTrouves = await operateurs(conn, d);
  await synthese(conn, d, operateursTrouves);
  await chargerAmm(conn, d, operateursTrouves, compte);
  await conn.execute(
    `INSERT IGNORE INTO sources (titre, organisation, niveau, type, url, domaine)
     VALUES (?, ?, 1, 'base_de_donnees', ?, 'Pharmacologie')`,
    [SOURCE_BIBLIO.titre, SOURCE_BIBLIO.organisation, SOURCE_BIBLIO.url],
  );
  // Les nouvelles molécules permettent de lier des produits de catalogue jusqu'ici orphelins
  compte.catalogues = await relierAutomatiquement(conn);
  return compte;
}

module.exports = { chargerAcorep, marque };
