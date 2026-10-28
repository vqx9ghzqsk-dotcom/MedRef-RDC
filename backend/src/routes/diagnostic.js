'use strict';

const express = require('express');
const db = require('../db');
const { asyncHandler } = require('../utils/http');
const { requireAuth } = require('../middleware/auth');
const referentiel = require('../../db/seed-data/diagnostic');
const epidemiologie = require('../../db/seed-data/epidemiologie');
const { SIGNES_FICHES } = require('../../db/seed-data/signes-fiches');
const { PERFORMANCES } = require('../../db/seed-data/performances-examens');

const router = express.Router();

/** Fréquence d'un symptôme dans une fiche, codée sur un chiffre pour alléger le jeu de données. */
const FREQUENCES = { tres_frequent: 3, frequent: 2, occasionnel: 1, rare: 0 };

const normal = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

/**
 * Public visé par une fiche, déduit de sa spécialité et de son nom (les fiches n'ont pas de champ
 * dédié) : tranches d'âge (nn = moins de 2 mois, petit = 2 mois à 5 ans, grand = 5 à 14 ans,
 * adulte, age = plus de 65 ans), sexe (F/M) et contexte obstétrical. null = tout public.
 */
function publicVise(nom, specialite) {
  const n = normal(nom);
  const s = normal(specialite);
  const cible = { ages: null, sexe: null, obstetrique: false };
  if (/neonat|nouveau-ne/.test(s) || /neonat|nouveau-ne/.test(n)) cible.ages = ['nn'];
  else if (/nourrisson/.test(n)) cible.ages = ['nn', 'petit'];
  else if (
    /pediatri|de l.enfant|enfant et de l.adolescent/.test(s) ||
    /de l.enfant|chez l.enfant|infantile/.test(n)
  )
    cible.ages = ['nn', 'petit', 'grand'];
  else if (/adolescent/.test(s)) cible.ages = ['grand', 'adulte'];
  else if (/de l.adulte|chez l.adulte/.test(n)) cible.ages = ['adulte', 'age'];
  else if (/geriatr|demence/.test(s)) cible.ages = ['adulte', 'age'];
  // Obstétrique : par la spécialité ou par le nom (« Tuberculose et grossesse », « Psychose
  // puerpérale »…) ; la grossesse extra-utérine reste proposée à toute femme en âge de procréer
  const obstetricalParNom =
    /grossesse|gravidique|post-partum|peripartum|puerp|gestationnel/.test(n) && !/extra-uterine/.test(n);
  if (/grossesse|obstetric|accouchement|post-partum|materno-foetale/.test(s) || obstetricalParNom) {
    cible.sexe = 'F';
    cible.obstetrique = true;
  } else if (/gynecolog|senologie|planification familiale|urogynecolog/.test(s)) cible.sexe = 'F';
  if (/menopause/.test(n)) {
    cible.ages = ['adulte', 'age'];
    cible.horsGrossesse = true;
  } else if (/prostat|testic|scrot|verge|penis|cryptorchid/.test(n)) cible.sexe = 'M';
  return cible;
}

/**
 * Données du moteur d'aide au diagnostic (calcul fait dans le navigateur, hors connexion) :
 * fiches avec leur public visé, symptômes, liens fiche-symptôme avec fréquence, examens de
 * confirmation ou de présomption, fiches liées à une urgence, syndromes (synthèse syndromique),
 * molécules (traitements en cours, allergies) et référentiel de la démarche sémiologique
 * (signes par appareil, signes d'examen, terrains, contextes).
 */
router.get(
  '/diagnostic/donnees',
  requireAuth,
  asyncHandler(async (_req, res) => {
    const [pathologies, symptomes, liens, examens, urgences, syndromes, syndromeSignes, molecules] =
      await Promise.all([
        db.query(
          `SELECT p.id, p.slug, p.nom, p.statut, s.nom AS specialite
           FROM pathologies p JOIN specialites s ON s.id = p.specialite_id
          WHERE p.statut <> 'brouillon'
          ORDER BY p.nom`,
        ),
        db.query('SELECT id, nom, slug FROM symptomes ORDER BY nom'),
        db.query('SELECT pathologie_id, symptome_id, frequence FROM pathologie_symptomes'),
        db.query(
          `SELECT pe.pathologie_id, e.id, e.slug, e.nom, pe.categorie
           FROM pathologie_examens pe JOIN examens e ON e.id = pe.examen_id
          WHERE pe.categorie IN ('confirmation', 'presomption')`,
        ),
        db.query('SELECT DISTINCT pathologie_id FROM pathologie_urgences'),
        db.query('SELECT id, nom, slug FROM syndromes ORDER BY nom'),
        db.query('SELECT syndrome_id, symptome_id FROM syndrome_symptomes'),
        db.query(
          `SELECT mo.id, mo.dci, mo.slug, c.id AS classe_id, c.nom AS classe
           FROM molecules mo LEFT JOIN classes_pharmacologiques c ON c.id = mo.classe_id
          ORDER BY mo.dci`,
        ),
      ]);
    const idSymptome = new Map(symptomes.map((x) => [x.nom, x.id]));
    const ids = (noms) => noms.map((n) => idSymptome.get(n)).filter(Boolean);
    // Signes discriminants (à valider) : les signes manquants complètent le tableau des fiches,
    // la fréquence la plus haute l'emportant
    const idFiche = new Map(pathologies.map((p) => [p.slug, p.id]));
    const tableau = new Map(
      liens.map((l) => [
        `${l.pathologie_id}-${l.symptome_id}`,
        [l.pathologie_id, l.symptome_id, FREQUENCES[l.frequence] ?? 2],
      ]),
    );
    for (const [slug, s] of Object.entries(SIGNES_FICHES)) {
      const p = idFiche.get(slug);
      if (!p) continue;
      for (const [nom, frequence] of s.ajouter || []) {
        const sy = idSymptome.get(nom);
        if (!sy) continue;
        const cle = `${p}-${sy}`;
        const f = FREQUENCES[frequence];
        if (!tableau.has(cle) || tableau.get(cle)[2] < f) tableau.set(cle, [p, sy, f]);
      }
    }
    const signesDe = new Map();
    for (const l of syndromeSignes) {
      if (!signesDe.has(l.syndrome_id)) signesDe.set(l.syndrome_id, []);
      signesDe.get(l.syndrome_id).push(l.symptome_id);
    }
    const urgentes = new Set(urgences.map((u) => u.pathologie_id));
    const tests = new Map();
    const examensUtiles = new Map();
    for (const e of examens) {
      if (!tests.has(e.pathologie_id)) tests.set(e.pathologie_id, {});
      tests.get(e.pathologie_id)[e.id] = e.categorie === 'confirmation' ? 'c' : 'p';
      examensUtiles.set(e.id, { id: e.id, slug: e.slug, nom: e.nom });
    }
    res.json({
      data: {
        pathologies: pathologies.map((p) => ({
          id: p.id,
          slug: p.slug,
          nom: p.nom,
          specialite: p.specialite,
          validee: p.statut === 'valide',
          urgence: urgentes.has(p.id),
          public: publicVise(p.nom, p.specialite),
          diagnostic: estDiagnostic(p.nom),
          periode: periodeObstetricale(p.slug, p.specialite),
          tests: tests.get(p.id) || {},
          // Épidémiologie en RDC (à valider) : fréquence, saison, provinces de foyer
          frequence: epidemiologie.frequenceDe(p.slug),
          saison: epidemiologie.saisonDe(p.slug),
          foyers: epidemiologie.FOYERS[p.slug] || null,
          ...discriminants(SIGNES_FICHES[p.slug], ids),
        })),
        symptomes,
        // [pathologie, symptôme, fréquence 0 à 3]
        liens: [...tableau.values()],
        // Sensibilité et spécificité connues (à valider) : [Se %, Sp %]
        examens: [...examensUtiles.values()]
          .map((e) => ({ ...e, performance: PERFORMANCES[e.slug] || null }))
          .sort((a, b) => a.nom.localeCompare(b.nom, 'fr')),
        syndromes: syndromes
          .map((x) => {
            const cles = referentiel.SIGNES_CLES[x.slug] || {};
            return {
              ...x,
              symptomes: signesDe.get(x.id) || [],
              cles: {
                tous: ids(cles.tous || []),
                un: ids(cles.un || []),
                grossesse: Boolean(cles.grossesse),
                terrain: cles.terrain || null,
              },
            };
          })
          .filter((x) => x.symptomes.length >= 2),
        molecules,
        appareils: referentiel.APPAREILS.map((a) => ({ id: a.id, nom: a.nom, symptomes: ids(a.symptomes) })),
        physiques: ids(referentiel.PHYSIQUES),
        terrains: referentiel.TERRAINS,
        contextes: referentiel.CONTEXTES,
        // Niveau minimal de disponibilité de chaque examen : 1 centre de santé, 2 hôpital général, 3 tertiaire
        niveauxExamens: Object.fromEntries([
          ...referentiel.NIVEAUX_EXAMENS.centre_sante.map((slug) => [slug, 1]),
          ...referentiel.NIVEAUX_EXAMENS.hopital_general.map((slug) => [slug, 2]),
        ]),
        provinces: epidemiologie.PROVINCES,
        restrictions: referentiel.RESTRICTIONS.map(({ signes, ...r }) => ({ ...r, symptomes: ids(signes) })),
      },
    });
  }),
);

/**
 * Moment de la grossesse où la fiche se pose : 'avant' (grossesse en cours, travail compris)
 * ou 'apres' (accouchement récent) ; null si les deux ou hors grossesse.
 */
function periodeObstetricale(slug, specialite) {
  if (
    /post-partum|puerper|puerp|retention-placentaire|inversion-uterine|endometrite|dechirures-perineales|mastite|allaitement|infection-plaie-cesarienne|depression-du-post/.test(
      slug,
    ) ||
    specialite === 'Post-partum'
  ) {
    return 'apres';
  }
  if (
    /praevia|retroplacentaire|menace-accouchement|rupture-prematuree|troisieme-trimestre|premier-trimestre|avortement|mole-hydatiforme|hyperemesis|retard-croissance|oligoamnios|mort-foetale|macrosomie|beance|cholestase-gravidique|diabete-gestationnel|presentation|dystocie|travail-prolonge|procidence|souffrance-foetale|chorioamniotite|placenta-accreta|grossesse-abdominale|rupture-uterine/.test(
      slug,
    )
  ) {
    return 'avant';
  }
  return null;
}

/** Signes clés, d'exclusion et terrain requis d'une fiche, en identifiants (absents : rien). */
function discriminants(s, ids) {
  if (!s) return {};
  const d = {};
  if (s.cles?.length) d.cles = ids(s.cles);
  if (s.exclusion?.length) d.exclusion = ids(s.exclusion);
  if (s.requiert) d.requiert = { terrains: s.requiert.terrains || [], contextes: s.requiert.contextes || [] };
  return d;
}

/**
 * Fiches de prise en charge ou de prévention (contraception, suivi, rééducation, dépistage…) :
 * elles ne sont pas des diagnostics et ne sont pas proposées comme hypothèses.
 */
function estDiagnostic(nom) {
  return !/^(accouchement normal|consultation prenatale|contraception|delivrance|depistage|nutrition et supplementation|prevention|reeducation|soins essentiels|suivi postnatal|surveillance du bien-etre|vaccination|medicaments et grossesse|grossesse apres 40|grossesse gemellaire|grossesse prolongee|grossesse de l.adolescente|reanimation du nouveau-ne)/.test(
    normal(nom),
  );
}

module.exports = router;
module.exports.publicVise = publicVise;
module.exports.estDiagnostic = estDiagnostic;
module.exports.periodeObstetricale = periodeObstetricale;
