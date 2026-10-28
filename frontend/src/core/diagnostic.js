/**
 * Moteur d'aide au diagnostic, sans dépendance UI et utilisable hors connexion. Il suit la
 * démarche sémiologique : motif et histoire de la maladie, terrain, examen clinique (constantes
 * et signes présents ou absents par appareil), synthèse syndromique, hypothèses, question
 * suivante.
 *
 * Données (GET /api/diagnostic/donnees) : fiches avec leur public visé, symptômes, liens
 * [pathologie, symptôme, fréquence 0-3], examens de confirmation (c) ou de présomption (p),
 * syndromes, molécules et référentiel (appareils, signes d'examen, terrains, contextes).
 *
 * Score d'une fiche :
 *  - chaque signe présent pèse selon sa rareté parmi les fiches (la fièvre départage peu) et sa
 *    fréquence dans la fiche ; le motif de consultation pèse davantage et doit être expliqué ;
 *  - part du cas expliquée par la fiche (70 %) et part du tableau de la fiche retrouvée (30 %) ;
 *  - un signe noté ABSENT que la fiche attend fait reculer la fiche (c'est ainsi qu'on élimine) ;
 *  - examens : un examen de confirmation positif fait monter, négatif fait reculer ;
 *  - terrain, contexte épidémique, constantes anormales et durée orientent sans décider ;
 *  - les fiches d'un autre public (âge, sexe, grossesse) sont écartées.
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
const ENFANT = ['nn', 'petit', 'grand'];

export const DUREES = [
  { id: 'heures', libelle: 'Quelques heures' },
  { id: 'jours', libelle: 'Quelques jours (moins de 2 semaines)' },
  { id: 'semaines', libelle: '2 à 6 semaines' },
  { id: 'mois', libelle: 'Plus de 6 semaines' },
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

export const sansAccents = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

/** Index construit une fois par jeu de données (le moteur est rappelé à chaque saisie). */
export function indexer(donnees) {
  const symptomes = new Map(donnees.symptomes.map((s) => [s.id, s]));
  const parNom = new Map(donnees.symptomes.map((s) => [s.nom, s.id]));
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
  const nomsFiches = new Map(donnees.pathologies.map((p) => [p.id, sansAccents(p.nom)]));
  const motifs = (liste) => new Map((liste || []).map((t) => [t.id, new RegExp(t.motif)]));
  return {
    donnees,
    symptomes,
    parNom,
    parFiche,
    rarete,
    nomsFiches,
    physiques: new Set(donnees.physiques || []),
    terrains: motifs(donnees.terrains),
    contextes: motifs(donnees.contextes),
  };
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

const nombre = (v) => {
  if (v === '' || v === null || v === undefined) return null;
  const n = Number(String(v).replace(',', '.'));
  return Number.isFinite(n) ? n : null;
};

/**
 * Lecture des constantes : signes déduits (présents ou absents), alertes et orientations.
 * Seuils : fièvre ≥ 38 °C ; hypothermie < 35,5 °C ; tachypnée selon l'âge (PCIME : ≥ 60 avant
 * 2 mois, ≥ 40 jusqu'à 5 ans ; ≥ 30 de 5 à 14 ans ; ≥ 22 chez l'adulte) ; hypotension (PAS
 * < 90 mmHg chez l'adulte, < 70 avant 5 ans, < 80 de 5 à 14 ans) ; SpO2 < 90 % ; glycémie
 * < 2,2 mmol/L (hypoglycémie) ou ≥ 14 mmol/L ; Glasgow ≤ 13 ; périmètre brachial < 115 mm
 * (malnutrition aiguë sévère, 6 à 59 mois).
 */
export function lireConstantes(constantes = {}, age = '') {
  const c = Object.fromEntries(Object.entries(constantes).map(([k, v]) => [k, nombre(v)]));
  const presents = [];
  const absents = [];
  const alertes = [];
  const orientations = [];
  if (c.temperature !== null && c.temperature !== undefined) {
    if (c.temperature >= 38) presents.push('Fièvre');
    else if (c.temperature >= 35.5) absents.push('Fièvre');
    if (c.temperature >= 40) presents.push('Hyperthermie');
    if (c.temperature < 35.5) presents.push('Hypothermie');
  }
  if (c.fr) {
    const seuil = { nn: 60, petit: 40, grand: 30 }[age] || 22;
    if (c.fr >= seuil) presents.push('Tachypnée');
    else absents.push('Tachypnée');
  }
  if (c.tas) {
    const seuil = { nn: 60, petit: 70, grand: 80 }[age] || 90;
    if (c.tas < seuil) presents.push('Hypotension');
    else absents.push('Hypotension');
  }
  if (c.spo2 !== null && c.spo2 !== undefined && c.spo2 < 90) {
    alertes.push(`Hypoxémie (SpO2 ${c.spo2} %) : oxygène sans attendre`);
  }
  if (c.glycemie !== null && c.glycemie !== undefined) {
    if (c.glycemie < 2.2) {
      alertes.push(`Hypoglycémie (${c.glycemie} mmol/L) : sucre par voie IV ou orale immédiatement`);
      orientations.push('hypoglyc');
    } else if (c.glycemie >= 14) {
      alertes.push(`Hyperglycémie (${c.glycemie} mmol/L) : rechercher une cétose`);
      orientations.push('diabet|acidocetose|hyperosmolaire');
    }
  }
  if (c.glasgow) {
    if (c.glasgow <= 13) presents.push('Troubles de la conscience');
    else if (c.glasgow === 15) absents.push('Troubles de la conscience');
    if (c.glasgow <= 8) alertes.push(`Glasgow ${c.glasgow} : coma, protéger les voies aériennes`);
  }
  if (c.fc) {
    const seuil = { nn: 180, petit: 160, grand: 130 }[age] || 120;
    if (c.fc >= seuil) alertes.push(`Tachycardie (${c.fc}/min)`);
  }
  if (c.pb && age === 'petit') {
    if (c.pb < 115) {
      alertes.push(`Périmètre brachial ${c.pb} mm : malnutrition aiguë sévère`);
      orientations.push('malnutrition');
    } else if (c.pb < 125) orientations.push('malnutrition');
  }
  return { presents, absents, alertes, orientations };
}

/** Signes présents et absents du cas : saisis, puis déduits des constantes s'ils ne l'ont pas été. */
export function etatDesSignes(index, cas) {
  const presents = new Set(cas.symptomes || []);
  const absents = new Set();
  for (const [id, etat] of Object.entries(cas.signes || {})) {
    const n = Number(id);
    if (etat === 'present') presents.add(n);
    else if (etat === 'absent') absents.add(n);
  }
  if (cas.motif) presents.add(Number(cas.motif));
  const lecture = lireConstantes(cas.constantes, cas.age);
  const deduits = [];
  for (const nom of lecture.presents) {
    const id = index.parNom.get(nom);
    if (id && !presents.has(id) && !absents.has(id)) {
      presents.add(id);
      deduits.push({ id, nom, etat: 'present' });
    }
  }
  for (const nom of lecture.absents) {
    const id = index.parNom.get(nom);
    if (id && !presents.has(id) && !absents.has(id)) {
      absents.add(id);
      deduits.push({ id, nom, etat: 'absent' });
    }
  }
  return { presents, absents, deduits, lecture };
}

function niveau(score, premier) {
  if (premier && score >= 0.7) return 'tres_probable';
  if (score >= 0.55) return 'probable';
  return 'possible';
}

/** Coup de pouce du terrain, du contexte, des constantes et de la durée (plafonné). */
function orientation(index, fiche, cas, lecture) {
  const nom = index.nomsFiches.get(fiche.id) || '';
  const raisons = [];
  let bonus = 0;
  for (const id of cas.terrains || []) {
    const motif = index.terrains.get(id);
    if (motif?.test(nom)) {
      bonus += 0.06;
      raisons.push(index.donnees.terrains.find((t) => t.id === id).libelle);
    }
  }
  for (const id of cas.contextes || []) {
    const motif = index.contextes.get(id);
    if (motif?.test(nom)) {
      bonus += 0.08;
      raisons.push(index.donnees.contextes.find((t) => t.id === id).libelle);
    }
  }
  for (const motif of lecture.orientations) {
    if (new RegExp(motif).test(nom)) {
      bonus += 0.1;
      raisons.push('constantes');
    }
  }
  bonus = Math.min(bonus, 0.2);
  const chronique = /chronique/.test(nom);
  const aigue = /aigu/.test(nom);
  if (cas.duree === 'semaines' || cas.duree === 'mois') {
    if (chronique) bonus += 0.05;
    if (aigue) bonus -= 0.08;
  } else if (cas.duree === 'heures' || cas.duree === 'jours') {
    if (aigue) bonus += 0.03;
    if (chronique) bonus -= 0.08;
  }
  return { bonus, raisons: [...new Set(raisons)] };
}

/**
 * Hypothèses classées pour un cas :
 *   cas = { age, sexe, grossesse, motif, duree, signes: { [id]: 'present' | 'absent' },
 *           constantes, terrains, contextes, examens: { [id]: 'positif' | 'negatif' } }
 * (`symptomes: [id]` reste accepté : signes présents.)
 * Renvoie { hypotheses, gravite, alertes, deduits, syndromes, questions, aRechercher }.
 */
export function analyser(index, cas) {
  const { donnees, symptomes, parFiche, rarete } = index;
  const { presents, absents, deduits, lecture } = etatDesSignes(index, cas);
  const signes = [...presents].filter((s) => symptomes.has(s));
  const gravite = signes.map((s) => symptomes.get(s)).filter((s) => SIGNES_GRAVITE.has(s.nom));
  const syndromes = syntheseSyndromique(index, presents, absents, cas);
  const vide = {
    hypotheses: [],
    gravite,
    alertes: lecture.alertes,
    deduits,
    syndromes,
    questions: [],
    aRechercher: [],
  };
  if (!signes.length) return vide;

  const motif = cas.motif ? Number(cas.motif) : null;
  const poidsSigne = (s) => (rarete.get(s) || 0) * (s === motif ? 1.5 : 1);
  const poidsCas = signes.reduce((t, s) => t + poidsSigne(s), 0) || 1;
  const examens = cas.examens || {};
  const resultats = [];
  for (const fiche of donnees.pathologies) {
    if (!convientAuPatient(fiche, cas)) continue;
    const tableau = parFiche.get(fiche.id);
    if (!tableau) continue;
    let explique = 0;
    let poidsFiche = 0;
    let contre = 0;
    const concordants = [];
    const discordants = [];
    for (const [s, f] of tableau) {
      const w = (rarete.get(s) || 0) * POIDS_FREQUENCE[f];
      poidsFiche += w;
      if (presents.has(s)) {
        explique += w * (s === motif ? 1.5 : 1);
        concordants.push({ id: s, nom: symptomes.get(s).nom, frequence: f });
      } else if (absents.has(s)) {
        contre += w;
        discordants.push({ id: s, nom: symptomes.get(s).nom, frequence: f });
      }
    }
    if (!concordants.length) continue;
    let score =
      0.7 * (explique / poidsCas) + 0.3 * (explique / (poidsFiche || 1)) - 0.5 * (contre / (poidsFiche || 1));
    // Le motif de consultation doit être expliqué par l'hypothèse
    if (motif && !tableau.has(motif)) score *= 0.8;
    const tests = [];
    for (const [id, resultat] of Object.entries(examens)) {
      const role = fiche.tests?.[id];
      if (!role || !resultat) continue;
      const nom = donnees.examens.find((e) => String(e.id) === String(id))?.nom || '';
      if (resultat === 'positif') score += role === 'c' ? 0.25 : 0.1;
      else score *= role === 'c' ? 0.4 : 0.75;
      tests.push({ nom, resultat, role });
    }
    const { bonus, raisons } = orientation(index, fiche, cas, lecture);
    score += bonus;
    // À tableau égal, la fiche consacrée à l'âge du patient passe devant la fiche générale
    if (cas.age && fiche.public?.ages?.includes(cas.age)) score += 0.04;
    const manquants = [...tableau]
      .filter(([s, f]) => f >= 2 && !presents.has(s) && !absents.has(s))
      .sort((a, b) => b[1] - a[1] || (rarete.get(b[0]) || 0) - (rarete.get(a[0]) || 0))
      .map(([s]) => symptomes.get(s).nom);
    resultats.push({
      fiche,
      score: Math.max(0, Math.min(score, 1)),
      concordants: concordants.sort((a, b) => b.frequence - a.frequence),
      discordants,
      aRechercher: manquants.slice(0, 4),
      tests,
      raisons,
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
  const questions = questionsSuivantes(index, hypotheses, presents, absents);
  return {
    ...vide,
    hypotheses,
    questions,
    aRechercher: questions.map((q) => q.symptome),
  };
}

/** Les signes clés du syndrome sont-ils réunis ? (référentiel SIGNES_CLES ; sans clés : non) */
function clesReunies(cles, presents, cas) {
  if (!cles || (!cles.tous?.length && !cles.un?.length)) return false;
  if (cles.grossesse && cas.grossesse !== true) return false;
  if (cles.terrain && !(cas.terrains || []).includes(cles.terrain)) return false;
  if (!(cles.tous || []).every((s) => presents.has(s))) return false;
  return !cles.un?.length || cles.un.some((s) => presents.has(s));
}

/**
 * Synthèse syndromique : un syndrome est retenu quand ses signes clés sont réunis (pas de
 * syndrome méningé sans raideur de nuque ni fontanelle bombée), avec au moins deux de ses signes
 * présents, et que ses signes notés absents ne l'emportent pas sur les signes présents.
 */
export function syntheseSyndromique(index, presents, absents = new Set(), cas = {}) {
  return (index.donnees.syndromes || [])
    .map((sy) => {
      const cles = [...(sy.cles?.tous || []), ...(sy.cles?.un || [])];
      const vus = [...new Set([...sy.symptomes, ...cles])].filter((s) => presents.has(s));
      return {
        ...sy,
        signes: vus.map((s) => index.symptomes.get(s)?.nom).filter(Boolean),
        part: vus.length / sy.symptomes.length,
        reuni: clesReunies(sy.cles, presents, cas),
        contre: sy.symptomes.filter((s) => absents.has(s)).length,
      };
    })
    .filter((sy) => sy.reuni && sy.signes.length >= 2 && sy.contre < sy.signes.length)
    .sort((a, b) => b.part - a.part || b.signes.length - a.signes.length);
}

/**
 * Question suivante : le signe pas encore exploré qui sépare le mieux les premières
 * hypothèses (présent dans certaines, pas dans d'autres), pondéré par leur score. Les signes
 * d'examen sont signalés comme tels (« à rechercher à l'examen »).
 */
export function questionsSuivantes(index, hypotheses, presents, absents, nombreMax = 3) {
  const tete = hypotheses.slice(0, 6);
  if (tete.length < 2) return [];
  const poids = tete.map((h) => h.score ** 2 || 0.0001);
  const total = poids.reduce((a, b) => a + b, 0);
  const candidats = new Set();
  for (const h of tete) {
    for (const [s] of index.parFiche.get(h.fiche.id) || []) {
      if (!presents.has(s) && !absents.has(s)) candidats.add(s);
    }
  }
  return [...candidats]
    .map((s) => {
      let p = 0;
      tete.forEach((h, i) => {
        const f = index.parFiche.get(h.fiche.id)?.get(s);
        if (f !== undefined) p += poids[i] * POIDS_FREQUENCE[f];
      });
      p /= total;
      return { s, gain: p * (1 - p) * (0.5 + (index.rarete.get(s) || 0) / 6) };
    })
    .filter((x) => x.gain > 0)
    .sort((a, b) => b.gain - a.gain)
    .slice(0, nombreMax)
    .map(({ s }) => ({
      symptome: index.symptomes.get(s),
      examen: index.physiques.has(s),
    }));
}

/** Voie suggérée par le contexte de la molécule dans la fiche (« relais oral », « rectal pré-transfert »…). */
const VOIES = [
  [/relais oral|per os|\boral/, /oral/],
  [/rectal/, /rectal/],
  [/\biv\b|intraveineu|perfusion/, /\biv\b|intraveineu|perfusion/],
  [/\bim\b|intramusculaire/, /\bim\b|intramusculaire/],
];

/**
 * Posologie de la fiche molécule adaptée au cas : population enfant avant 15 ans, adulte
 * ensuite ; puis la ligne dont l'indication correspond à la pathologie et dont la voie
 * correspond au contexte de la molécule dans la fiche (relais oral, rectal, IV…).
 */
export function posologiePour(posologies, pathologieNom, age, contexte = '') {
  const population = ENFANT.includes(age) ? 'enfant' : 'adulte';
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

/**
 * Signes du cas qui peuvent être un effet indésirable d'un traitement en cours (recherche du
 * nom du signe dans le texte « effets indésirables » de la fiche molécule).
 */
export function effetsIndesirablesPossibles(molecules, nomsSignes) {
  const resultats = [];
  for (const m of molecules) {
    const texte = sansAccents(m.effets_indesirables);
    if (!texte) continue;
    const signes = nomsSignes.filter((n) => {
      const cle = sansAccents(n).split(/[ ’']/)[0];
      return cle.length >= 4 && texte.includes(cle);
    });
    if (signes.length) resultats.push({ molecule: m, signes });
  }
  return resultats;
}

/* ---------- Parcours adaptatif : chaque réponse oriente la suite ---------- */

/** Normes des constantes selon l'âge, affichées en aide à la saisie. */
export const NORMES = {
  temperature: () => '36 – 37,5',
  fr: (age) => ({ nn: '40 – 60', petit: '20 – 40', grand: '15 – 25' })[age] || '12 – 20',
  fc: (age) => ({ nn: '100 – 180', petit: '80 – 150', grand: '70 – 120' })[age] || '60 – 100',
  tas: (age) => ({ nn: '≥ 60', petit: '≥ 70', grand: '≥ 80' })[age] || '90 – 140',
  tad: (age) => (ENFANT.includes(age) ? '' : '60 – 90'),
  spo2: () => '≥ 94',
  glycemie: () => '3,9 – 7,8',
  glasgow: () => '15',
  pb: () => '≥ 125',
};

/** Le terrain ou le contexte concerne-t-il ce patient ? (âge et sexe déclarés dans le référentiel) */
export function terrainPossible(t, cas) {
  if (t.sexe && cas.sexe && t.sexe !== cas.sexe) return false;
  if (t.ages && cas.age && !t.ages.includes(cas.age)) return false;
  return true;
}

/** Le patient satisfait-il la règle ? (critère non renseigné : la règle ne masque rien) */
function respecte(regle, cas) {
  if (regle.sexe && cas.sexe && regle.sexe !== cas.sexe) return false;
  if (regle.ages && cas.age && !regle.ages.includes(cas.age)) return false;
  if (regle.grossesse && cas.grossesse !== true) return false;
  return true;
}

/**
 * Profil du patient : fiches qui peuvent le concerner (âge, sexe, grossesse) et signes
 * possibles. Un signe n'est masqué que s'il est impossible pour ce patient selon une règle
 * clinique explicite du référentiel (aménorrhée chez un homme, fontanelle chez l'adulte,
 * céphalées chez le nouveau-né) : l'absence d'une fiche ne suffit pas à cacher un signe.
 * `masques` donne, pour chaque signe masqué, la règle en cause.
 */
export function profilDuPatient(index, cas) {
  const fiches = index.donnees.pathologies.filter((f) => convientAuPatient(f, cas));
  const masques = new Map();
  for (const regle of index.donnees.restrictions || []) {
    if (respecte(regle, cas)) continue;
    for (const s of regle.symptomes) if (!masques.has(s)) masques.set(s, regle.motif);
  }
  const signes = new Set(index.donnees.symptomes.map((s) => s.id).filter((s) => !masques.has(s)));
  return { fiches, signes, masques };
}

/**
 * Pertinence de chaque signe pour la suite de l'examen :
 *  - s'il y a des hypothèses, poids du signe dans les hypothèses en tête (selon leur score) ;
 *  - sinon, si le motif est connu, dans les fiches possibles qui comportent ce motif ;
 *  - sinon, nombre de fiches possibles où le signe est fréquent.
 * Les signes déjà notés (présents ou absents) ne sont pas repris.
 */
export function pertinenceSignes(index, cas, hypotheses, profil) {
  const scores = new Map();
  const ajouter = (s, v) => scores.set(s, (scores.get(s) || 0) + v);
  if (hypotheses.length) {
    for (const h of hypotheses.slice(0, 8)) {
      for (const [s, f] of index.parFiche.get(h.fiche.id) || [])
        ajouter(s, h.score ** 2 * POIDS_FREQUENCE[f]);
    }
  } else if (cas.motif) {
    for (const fiche of profil.fiches) {
      const tableau = index.parFiche.get(fiche.id);
      const fm = tableau?.get(Number(cas.motif));
      if (fm === undefined) continue;
      for (const [s, f] of tableau) ajouter(s, POIDS_FREQUENCE[fm] * POIDS_FREQUENCE[f]);
    }
  } else {
    for (const fiche of profil.fiches) {
      for (const [s, f] of index.parFiche.get(fiche.id) || []) if (f >= 2) ajouter(s, 1);
    }
  }
  const notes = new Set([...Object.keys(cas.signes || {}).map(Number), Number(cas.motif)]);
  for (const s of notes) scores.delete(s);
  return scores;
}

/**
 * Motifs de consultation les plus fréquents pour ce patient : signes très fréquents des fiches
 * qui peuvent le concerner, les fiches propres à son âge ou à sa grossesse comptant triple.
 */
export function motifsFrequents(index, profil, nombreMax = 10, cas = {}) {
  const compte = new Map();
  for (const fiche of profil.fiches) {
    const pub = fiche.public || {};
    const propre = (cas.age && pub.ages?.includes(cas.age)) || (cas.grossesse && pub.obstetrique);
    for (const [s, f] of index.parFiche.get(fiche.id) || []) {
      if (f === 3 && profil.signes.has(s)) compte.set(s, (compte.get(s) || 0) + (propre ? 3 : 1));
    }
  }
  return [...compte]
    .sort((a, b) => b[1] - a[1])
    .slice(0, nombreMax)
    .map(([s]) => index.symptomes.get(s));
}

/**
 * Examens utiles pour les hypothèses en tête : ceux qui confirment (ou orientent vers) une ou
 * plusieurs d'entre elles, les plus discriminants d'abord, avec les hypothèses concernées.
 */
export function examensUtiles(index, hypotheses, dejaFaits = {}, nombreMax = 8) {
  const parExamen = new Map();
  for (const h of hypotheses.slice(0, 6)) {
    for (const [id, role] of Object.entries(h.fiche.tests || {})) {
      if (dejaFaits[id]) continue;
      if (!parExamen.has(id)) parExamen.set(id, { poids: 0, hypotheses: [] });
      const e = parExamen.get(id);
      e.poids += h.score * (role === 'c' ? 1 : 0.5);
      e.hypotheses.push({ nom: h.fiche.nom, role });
    }
  }
  return [...parExamen]
    .map(([id, e]) => ({ examen: index.donnees.examens.find((x) => String(x.id) === id), ...e }))
    .filter((e) => e.examen)
    .sort((a, b) => b.poids - a.poids)
    .slice(0, nombreMax);
}

/** Terrains et contextes qui pèseraient sur les hypothèses en tête (à demander au patient). */
export function terrainsAPreciser(index, hypotheses, liste) {
  const noms = hypotheses.slice(0, 5).map((h) => index.nomsFiches.get(h.fiche.id) || '');
  return new Set((liste || []).filter((t) => noms.some((n) => new RegExp(t.motif).test(n))).map((t) => t.id));
}
