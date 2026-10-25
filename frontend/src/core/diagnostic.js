/**
 * Moteur d'aide au diagnostic, sans dépendance UI et utilisable hors connexion.
 *
 * Données (GET /api/diagnostic/donnees) : fiches avec leur public visé, symptômes, liens
 * [pathologie, symptôme, fréquence 0-3] et examens de confirmation (c) ou de présomption (p).
 *
 * Principe : chaque signe du cas pèse selon sa rareté parmi les fiches (un signe présent dans
 * peu de fiches départage mieux que la fièvre) et selon sa fréquence dans la fiche. Le score
 * combine la part du cas expliquée par la fiche et la part du tableau de la fiche retrouvée.
 * Un examen positif qui confirme la fiche la fait monter, un examen négatif la fait descendre.
 * Les fiches d'un autre public (âge, sexe, grossesse) sont écartées ; celles qui visent
 * précisément l'âge du patient passent devant les fiches générales.
 */

/** Poids d'un signe selon sa fréquence dans la fiche (rare, occasionnel, fréquent, très fréquent). */
const POIDS_FREQUENCE = [0.3, 0.5, 0.8, 1];
export const LIBELLES_FREQUENCE = ['rare', 'occasionnel', 'fréquent', 'très fréquent'];

export const TRANCHES_AGE = [
  { id: 'nn', libelle: 'Moins de 2 mois' },
  { id: 'petit', libelle: '2 mois – 5 ans' },
  { id: 'grand', libelle: '5 – 14 ans' },
  { id: 'adulte', libelle: 'Adulte' },
  { id: 'age', libelle: 'Plus de 65 ans' },
];

/** Signes qui imposent une conduite d'urgence, quel que soit le diagnostic. */
export const SIGNES_GRAVITE = new Set([
  'Convulsions',
  'Troubles de la conscience',
  'Stupeur',
  'Hypotension',
  'Cyanose',
  'Stridor',
  'Geignement expiratoire',
  'Hémorragies',
  'Hématémèse',
  'Méléna',
  'Purpura',
  'Syncope',
  'Raideur de nuque',
  'Fontanelle bombée',
  'Paralysie flasque',
  'Membre froid et pâle',
  'Refus de téter',
  'Anurie',
  'Idées suicidaires',
]);

const MAX_HYPOTHESES = 8;

/** Index construit une fois par jeu de données (le moteur est rappelé à chaque saisie). */
export function indexer(donnees) {
  const symptomes = new Map(donnees.symptomes.map((s) => [s.id, s]));
  const parFiche = new Map();
  const nbFiches = new Map();
  for (const [p, s, f] of donnees.liens) {
    if (!parFiche.has(p)) parFiche.set(p, new Map());
    parFiche.get(p).set(s, f);
    nbFiches.set(s, (nbFiches.get(s) || 0) + 1);
  }
  const total = donnees.pathologies.length || 1;
  const rarete = new Map();
  for (const [s, n] of nbFiches) rarete.set(s, Math.log(1 + total / n));
  return { donnees, symptomes, parFiche, rarete };
}

/** La fiche s'adresse-t-elle à ce patient ? (critère manquant = pas de restriction) */
export function convientAuPatient(fiche, cas) {
  const pub = fiche.public || {};
  if (cas.age && pub.ages && !pub.ages.includes(cas.age)) return false;
  if (cas.sexe && pub.sexe && pub.sexe !== cas.sexe) return false;
  if (pub.obstetrique && cas.sexe === 'F' && cas.grossesse === false) return false;
  if (pub.obstetrique && (cas.sexe === 'M' || ['nn', 'petit'].includes(cas.age))) return false;
  return true;
}

function niveau(score, premier) {
  if (premier && score >= 0.7) return 'tres_probable';
  if (score >= 0.55) return 'probable';
  return 'possible';
}

/**
 * Hypothèses classées pour un cas :
 *   cas = { age, sexe, grossesse, symptomes: [id], examens: { [id]: 'positif' | 'negatif' } }
 * Renvoie { hypotheses, gravite, aRechercher }.
 */
export function analyser(index, cas) {
  const { donnees, symptomes, parFiche, rarete } = index;
  const signes = [...new Set(cas.symptomes || [])].filter((s) => symptomes.has(s));
  const gravite = signes.map((s) => symptomes.get(s)).filter((s) => SIGNES_GRAVITE.has(s.nom));
  if (!signes.length) return { hypotheses: [], gravite, aRechercher: [] };

  const poidsCas = signes.reduce((t, s) => t + (rarete.get(s) || 0), 0) || 1;
  const examens = cas.examens || {};
  const resultats = [];
  for (const fiche of donnees.pathologies) {
    if (!convientAuPatient(fiche, cas)) continue;
    const tableau = parFiche.get(fiche.id);
    if (!tableau) continue;
    let explique = 0;
    let poidsFiche = 0;
    const concordants = [];
    for (const [s, f] of tableau) {
      const w = (rarete.get(s) || 0) * POIDS_FREQUENCE[f];
      poidsFiche += w;
      if (signes.includes(s)) {
        explique += w;
        concordants.push({ id: s, nom: symptomes.get(s).nom, frequence: f });
      }
    }
    if (!concordants.length) continue;
    let score = 0.7 * (explique / poidsCas) + 0.3 * (explique / (poidsFiche || 1));
    const tests = [];
    for (const [id, resultat] of Object.entries(examens)) {
      const role = fiche.tests?.[id];
      if (!role || !resultat) continue;
      const nom = donnees.examens.find((e) => String(e.id) === String(id))?.nom || '';
      if (resultat === 'positif') score += role === 'c' ? 0.25 : 0.1;
      else score *= role === 'c' ? 0.4 : 0.75;
      tests.push({ nom, resultat, role });
    }
    // À tableau égal, la fiche consacrée à l'âge du patient passe devant la fiche générale
    if (cas.age && fiche.public?.ages?.includes(cas.age)) score += 0.04;
    const manquants = [...tableau]
      .filter(([s, f]) => f >= 2 && !signes.includes(s))
      .sort((a, b) => b[1] - a[1] || (rarete.get(b[0]) || 0) - (rarete.get(a[0]) || 0))
      .map(([s]) => symptomes.get(s).nom);
    resultats.push({
      fiche,
      score: Math.min(score, 1),
      concordants: concordants.sort((a, b) => b.frequence - a.frequence),
      aRechercher: manquants.slice(0, 4),
      tests,
    });
  }
  resultats.sort((a, b) => b.score - a.score || a.fiche.nom.localeCompare(b.fiche.nom, 'fr'));
  // Les deux fiches graves les mieux placées après la première : à éliminer avant de conclure
  let graves = 0;
  const hypotheses = resultats.slice(0, MAX_HYPOTHESES).map((h, i) => {
    const aEliminer = i > 0 && h.fiche.urgence && h.score >= 0.5 && graves < 2;
    if (aEliminer) graves += 1;
    return { ...h, niveau: niveau(h.score, i === 0), aEliminer };
  });
  return { hypotheses, gravite, aRechercher: signesQuiDepartagent(index, hypotheses, signes) };
}

/**
 * Signes à rechercher pour départager les premières hypothèses : présents (fréquents) dans
 * certaines seulement, pas encore saisis, les plus discriminants d'abord.
 */
export function signesQuiDepartagent(index, hypotheses, signes) {
  const tete = hypotheses.slice(0, 5);
  if (tete.length < 2) return [];
  const compte = new Map();
  for (const h of tete) {
    for (const [s, f] of index.parFiche.get(h.fiche.id) || []) {
      if (f >= 2 && !signes.includes(s)) compte.set(s, (compte.get(s) || 0) + 1);
    }
  }
  return [...compte]
    .filter(([, n]) => n < tete.length)
    .sort((a, b) => (index.rarete.get(b[0]) || 0) - (index.rarete.get(a[0]) || 0))
    .slice(0, 6)
    .map(([s]) => index.symptomes.get(s));
}

/** Voie suggérée par le contexte de la molécule dans la fiche (« relais oral », « rectal pré-transfert »…). */
const VOIES = [
  [/relais oral|per os|\boral/, /oral/],
  [/rectal/, /rectal/],
  [/\biv\b|intraveineu|perfusion/, /\biv\b|intraveineu|perfusion/],
  [/\bim\b|intramusculaire/, /\bim\b|intramusculaire/],
];

const sansAccents = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

/**
 * Posologie de la fiche molécule adaptée au cas : population enfant avant 15 ans, adulte
 * ensuite ; puis la ligne dont l'indication correspond à la pathologie et dont la voie
 * correspond au contexte de la molécule dans la fiche (relais oral, rectal, IV…).
 */
export function posologiePour(posologies, pathologieNom, age, contexte = '') {
  const enfant = ['nn', 'petit', 'grand'].includes(age);
  const population = enfant ? 'enfant' : 'adulte';
  const nom = sansAccents(pathologieNom);
  const ctx = sansAccents(contexte);
  const candidates = (posologies || []).filter((p) => p.population === population);
  const liste = candidates.length ? candidates : posologies || [];
  if (!liste.length) return null;
  const points = (p) => {
    const indication = sansAccents(p.indication);
    const voie = sansAccents(p.voie);
    let n = 0;
    if (indication && nom.includes(indication)) n += 3;
    else if (indication && indication.includes(nom.split(' de ')[0])) n += 2;
    for (const [motif, voieAttendue] of VOIES) {
      if (motif.test(ctx)) n += voieAttendue.test(voie) ? 4 : -2;
    }
    return n;
  };
  return liste.reduce((meilleure, p) => (points(p) > points(meilleure) ? p : meilleure), liste[0]);
}
