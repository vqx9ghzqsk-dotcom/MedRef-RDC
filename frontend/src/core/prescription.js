/**
 * Ordonnance guidée (lot C) : fonctions pures, sans dépendance UI, testées dans
 * tests/prescription.test.js.
 *
 * Tout part des posologies structurées de la molécule (lot B) :
 *   dose_par_kg / dose_par_m2, dose_base (par_prise | par_jour), dose_max (même base),
 *   frequence_type, prises_par_jour, intervalle_heures, durees [{min, max, unite, contexte, defaut}]
 * et de ses présentations (quantite unite pour par_quantite par_unite, secable, conditionnement).
 */

import { normaliserNombre } from './saisie.js';

// ------------------------------------------------------------------ outils

export const sansAccents = (s) =>
  String(s ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();

const nombre = (brut) => {
  if (typeof brut === 'number') return Number.isFinite(brut) ? brut : null;
  return normaliserNombre(brut);
};

const fr = (n, decimales = 2) =>
  Number(n).toLocaleString('fr-FR', { maximumFractionDigits: decimales, minimumFractionDigits: 0 });

/** Arrondi d'affichage d'une dose : entier au-delà de 100, 1 décimale au-delà de 10, sinon 2. */
export const arrondiDose = (n) => {
  if (n >= 100) return Math.round(n);
  if (n >= 10) return Math.round(n * 10) / 10;
  return Math.round(n * 100) / 100;
};

// ------------------------------------------------------------------ recherche de diagnostic

/** Distance d'édition (une inversion de deux lettres compte pour une faute), bornée à max + 1. */
function distance(a, b, max = 2) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let avant = null;
  let prec = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i += 1) {
    const cour = [i];
    let minLigne = i;
    for (let j = 1; j <= b.length; j += 1) {
      cour[j] = Math.min(prec[j] + 1, cour[j - 1] + 1, prec[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (avant && i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        cour[j] = Math.min(cour[j], avant[j - 2] + 1);
      }
      minLigne = Math.min(minLigne, cour[j]);
    }
    if (minLigne > max) return max + 1;
    avant = prec;
    prec = cour;
  }
  return prec[b.length];
}

/**
 * Recherche de pathologies tolérante aux accents et aux fautes de frappe.
 * Chaque mot de la requête doit correspondre à un mot du nom (début de mot, ou une faute
 * pour les mots de 5 lettres et plus). Les noms qui commencent par la requête passent en tête.
 */
export function rechercherPathologies(liste, requete, limite = 12) {
  const q = sansAccents(requete);
  if (q.length < 2) return [];
  const motsQ = q.split(/[^a-z0-9]+/).filter(Boolean);
  const resultats = [];
  for (const p of liste || []) {
    const nom = sansAccents(p.nom);
    const motsN = nom.split(/[^a-z0-9]+/).filter(Boolean);
    let score = 0;
    let ok = true;
    for (const mq of motsQ) {
      if (motsN.some((mn) => mn.startsWith(mq))) score += 2;
      else if (
        mq.length >= 5 &&
        motsN.some((mn) => distance(mq, mn.slice(0, mq.length + 1)) <= 1 || distance(mq, mn) <= 1)
      )
        score += 1;
      else {
        ok = false;
        break;
      }
    }
    if (!ok) continue;
    if (nom.startsWith(q)) score += 3;
    resultats.push({ p, score });
  }
  return resultats
    .sort((a, b) => b.score - a.score || a.p.nom.localeCompare(b.p.nom, 'fr'))
    .slice(0, limite)
    .map((r) => r.p);
}

// ------------------------------------------------------------------ patient

export const AGE_UNITES = { jours: 'jours', mois: 'mois', ans: 'ans' };
export const AGE_ENFANT_MAX_ANS = 15;
export const AGE_NOUVEAU_NE_MAX_JOURS = 28;

/** Âge en jours (null si non renseigné ou invalide). */
export function ageEnJours(age) {
  const v = nombre(age?.valeur);
  if (v === null || v < 0) return null;
  if (age.unite === 'jours') return v;
  if (age.unite === 'mois') return v * 30.44;
  return v * 365.25;
}

/**
 * Populations à consulter, de la plus spécifique à la plus générale :
 * - nouveau-né (< 28 jours) : nouveau_ne puis enfant ;
 * - enfant (< 15 ans) : enfant ;
 * - femme enceinte : grossesse puis adulte (les lignes « grossesse » portent surtout la sécurité) ;
 * - adulte : adulte.
 */
export function populationsPatient(patient) {
  const jours = ageEnJours(patient?.age);
  if (jours !== null && jours < AGE_NOUVEAU_NE_MAX_JOURS) return ['nouveau_ne', 'enfant'];
  if (jours !== null && jours < AGE_ENFANT_MAX_ANS * 365.25) {
    return patient?.grossesse ? ['grossesse', 'enfant', 'adulte'] : ['enfant'];
  }
  if (patient?.grossesse) return ['grossesse', 'adulte'];
  return ['adulte'];
}

/** Population principale (celle qui donne la dose). */
export function populationPrincipale(patient) {
  const liste = populationsPatient(patient);
  return liste[0] === 'grossesse' ? liste[1] : liste[0];
}

/** Surface corporelle (formule de Mosteller), en m², arrondie au centième. */
export function surfaceCorporelle(poidsBrut, tailleBrute) {
  const poids = nombre(poidsBrut);
  const taille = nombre(tailleBrute);
  if (!(poids > 0) || !(taille > 0) || taille < 30 || taille > 250) return null;
  return Math.round(Math.sqrt((poids * taille) / 3600) * 100) / 100;
}

/** Poids attendu approximatif selon l'âge (bornes larges) pour détecter une erreur de saisie. */
export function bornesPoidsAttendu(jours) {
  if (jours === null) return null;
  const ans = jours / 365.25;
  if (jours < AGE_NOUVEAU_NE_MAX_JOURS) return [0.4, 6];
  if (ans < 1) return [2, 14];
  if (ans < 5) return [6, 30];
  if (ans < 10) return [12, 55];
  if (ans < 15) return [20, 90];
  return [30, 250];
}

export function alertesPatient(patient) {
  const alertes = [];
  const poids = nombre(patient?.poids);
  if (poids === null) {
    alertes.push({ niveau: 'danger', message: 'Poids obligatoire : les doses sont calculées au poids.' });
    return alertes;
  }
  const bornes = bornesPoidsAttendu(ageEnJours(patient?.age));
  if (bornes && (poids < bornes[0] || poids > bornes[1])) {
    alertes.push({
      niveau: 'attention',
      message: `Poids de ${fr(poids)} kg inhabituel pour cet âge (attendu entre ${bornes[0]} et ${bornes[1]} kg) : vérifier la saisie.`,
    });
  }
  return alertes;
}

// ------------------------------------------------------------------ posologies

/** Lignes de posologie applicables au patient, la population la plus spécifique d'abord. */
export function posologiesPour(posologies, patient) {
  const pops = populationsPatient(patient);
  return (posologies || [])
    .filter((p) => pops.includes(p.population))
    .sort((a, b) => pops.indexOf(a.population) - pops.indexOf(b.population));
}

/** Lignes qui donnent une dose (on écarte les lignes « grossesse » qui ne portent que la sécurité). */
export function posologiesDosees(posologies, patient) {
  const toutes = posologiesPour(posologies, patient);
  const dosees = toutes.filter(
    (p) => p.population !== 'grossesse' || p.dose_par_kg || p.dose_par_m2 || p.voie,
  );
  return dosees.length ? dosees : toutes;
}

/** Ligne « grossesse » de la molécule (pour l'alerte de sécurité). */
export const posologieGrossesse = (posologies) =>
  (posologies || []).find((p) => p.population === 'grossesse');

/** Choix par défaut : la ligne dont l'indication ressemble le plus au diagnostic, sinon la première. */
export function choisirPosologie(lignes, indices = []) {
  if (!lignes.length) return null;
  const mots = indices.flatMap((t) => sansAccents(t).split(/[^a-z0-9]+/)).filter((m) => m.length > 3);
  let meilleure = lignes[0];
  let score = 0;
  for (const l of lignes) {
    const ind = sansAccents(l.indication);
    const s = mots.filter((m) => ind.includes(m)).length;
    if (s > score) {
      score = s;
      meilleure = l;
    }
  }
  return meilleure;
}

/** Nombre de prises par jour déduit de la fréquence structurée (null si inconnu). */
export function prisesParJour(posologie) {
  if (!posologie) return null;
  if (posologie.frequence_type === 'dose_unique') return 1;
  if (posologie.prises_par_jour > 0) return Number(posologie.prises_par_jour);
  if (posologie.intervalle_heures > 0) return 24 / Number(posologie.intervalle_heures);
  return null;
}

export function libelleFrequence(posologie) {
  if (!posologie) return '';
  if (posologie.frequence) return posologie.frequence;
  switch (posologie.frequence_type) {
    case 'dose_unique':
      return 'Dose unique';
    case 'intervalle':
      return `Toutes les ${fr(posologie.intervalle_heures)} h`;
    case 'prises_par_jour':
      return posologie.prises_par_jour === 1
        ? '1 fois par jour'
        : `${posologie.prises_par_jour} fois par jour`;
    case 'perfusion':
      return 'Perfusion continue';
    default:
      return '';
  }
}

/**
 * Dose calculée pour le patient : { parPrise, parJour, unite, plafonnee, brute, base, calcul }
 * ou null si la posologie n'est ni au poids ni à la surface.
 */
export function calculerDosePatient(posologie, { poids, surface } = {}) {
  if (!posologie) return null;
  const p = nombre(poids);
  const sc = nombre(surface);
  const unite = posologie.unite || 'mg';
  let brute = null;
  let calcul = null;
  if (posologie.dose_par_m2 > 0 && sc > 0) {
    brute = Number(posologie.dose_par_m2) * sc;
    calcul = `${fr(posologie.dose_par_m2)} ${unite}/m² × ${fr(sc)} m²`;
  } else if (posologie.dose_par_kg > 0 && p > 0) {
    brute = Number(posologie.dose_par_kg) * p;
    calcul = `${fr(posologie.dose_par_kg, 3)} ${unite}/kg × ${fr(p)} kg`;
  }
  if (brute === null) return null;
  const max = Number(posologie.dose_max) || null;
  const plafonnee = Boolean(max) && brute > max;
  const valeur = arrondiDose(plafonnee ? max : brute);
  const base = posologie.dose_base === 'par_jour' ? 'par_jour' : 'par_prise';
  const prises = prisesParJour(posologie);
  let parPrise = null;
  let parJour = null;
  if (base === 'par_jour') {
    parJour = valeur;
    parPrise = prises ? arrondiDose(valeur / prises) : null;
  } else {
    parPrise = valeur;
    parJour = prises ? arrondiDose(valeur * prises) : null;
  }
  calcul += ` = ${fr(arrondiDose(brute))} ${unite}${base === 'par_jour' ? ' par jour' : ' par prise'}`;
  if (plafonnee) calcul += `, plafonné à ${fr(max)} ${unite}`;
  if (base === 'par_jour' && prises && prises > 1)
    calcul += `, soit ${fr(parPrise)} ${unite} × ${fr(prises)} prises`;
  return { parPrise, parJour, unite, plafonnee, brute: arrondiDose(brute), base, prises, calcul };
}

// ------------------------------------------------------------------ présentations

const FACTEURS = { g: 1000, mg: 1, µg: 0.001, mcg: 0.001 };

/** Convertit une quantité d'une unité de masse vers une autre (null si non convertible). */
export function convertirMasse(valeur, de, vers) {
  const a = FACTEURS[sansAccents(de)] ?? FACTEURS[de];
  const b = FACTEURS[sansAccents(vers)] ?? FACTEURS[vers];
  if (sansAccents(de) === sansAccents(vers)) return valeur;
  if (!a || !b) return null;
  return (valeur * a) / b;
}

const DISCRETES = ['comprime', 'gelule', 'sachet', 'suppositoire', 'ovule', 'dose'];
/** Injectables : on prélève une fraction du flacon ou de l'ampoule (pas d'arrondi à l'unité). */
export const PRELEVEMENT = ['flacon', 'ampoule'];

/**
 * Arrondi pratique : demi-comprimé si sécable, unité entière sinon ; mL à 0,5 (ou 0,1 sous 2 mL) ;
 * flacon ou ampoule au centième (fraction prélevée).
 */
export function arrondiPratique(nombreExact, parUnite, secable) {
  if (PRELEVEMENT.includes(parUnite)) return Math.max(0.01, Math.round(nombreExact * 100) / 100);
  if (parUnite === 'ml') {
    if (nombreExact < 2) return Math.max(0.1, Math.round(nombreExact * 10) / 10);
    return Math.round(nombreExact * 2) / 2;
  }
  if (DISCRETES.includes(parUnite)) {
    const pas = secable && (parUnite === 'comprime' || parUnite === 'sachet') ? 0.5 : 1;
    return Math.max(pas, Math.round(nombreExact / pas) * pas);
  }
  return Math.round(nombreExact * 100) / 100;
}

const LIBELLES_UNITE = {
  comprime: ['comprimé', 'comprimés'],
  gelule: ['gélule', 'gélules'],
  ml: ['mL', 'mL'],
  sachet: ['sachet', 'sachets'],
  ampoule: ['ampoule', 'ampoules'],
  flacon: ['flacon', 'flacons'],
  suppositoire: ['suppositoire', 'suppositoires'],
  ovule: ['ovule', 'ovules'],
  dose: ['dose', 'doses'],
  g: ['g', 'g'],
};

export const libelleUnite = (parUnite, n) => {
  const l = LIBELLES_UNITE[parUnite] || [parUnite, parUnite];
  return n > 1 ? l[1] : l[0];
};

/**
 * Quantité de la présentation pour une dose : { exact, nombre, unite, ecart, texte }
 * ou null si la dose et la présentation ne sont pas dans des unités compatibles.
 */
export function quantitePresentation(dose, uniteDose, presentation) {
  if (!presentation || !(dose > 0) || !(presentation.quantite > 0)) return null;
  const doseDansUnite = convertirMasse(dose, uniteDose, presentation.unite);
  if (doseDansUnite === null) return null;
  const exact = (doseDansUnite * (Number(presentation.par_quantite) || 1)) / Number(presentation.quantite);
  const nombreArrondi = arrondiPratique(exact, presentation.par_unite, presentation.secable);
  const ecart = exact > 0 ? (nombreArrondi - exact) / exact : 0;
  return {
    exact: Math.round(exact * 1000) / 1000,
    nombre: nombreArrondi,
    unite: presentation.par_unite,
    ecart,
    texte: `${fr(nombreArrondi)} ${libelleUnite(presentation.par_unite, nombreArrondi)}`,
  };
}

/** Présentations compatibles avec la voie de la posologie (toutes si la voie est inconnue). */
export function presentationsCompatibles(presentations, posologie) {
  const voie = sansAccents(posologie?.voie);
  const liste = presentations || [];
  if (!voie) return liste;
  const orale = /oral|bouche|sublingu|buccal/.test(voie);
  const injectable = /\biv\b|\bim\b|\bsc\b|injecta|perfusion|intraveine|intramusc|sous-cut/.test(voie);
  const filtre = liste.filter((pr) => {
    const v = sansAccents(pr.voie);
    if (orale && v.includes('oral')) return true;
    if (injectable && (v.includes('inject') || v.includes('perfusion'))) return true;
    return !orale && !injectable;
  });
  return filtre.length ? filtre : liste;
}

/**
 * Présentation par défaut : celle dont l'arrondi s'écarte le moins de la dose calculée.
 * Si la voie orale est possible, les formes orales passent devant les injectables ; avant 6 ans,
 * les formes buvables (mL) passent devant les comprimés à écart comparable (moins de 10 %).
 * Renvoie l'index dans la liste (0 si aucune ne permet la conversion).
 */
export function meilleurePresentation(
  presentations,
  dose,
  uniteDose,
  { jeuneEnfant = false, oralePossible = false } = {},
) {
  let meilleur = 0;
  let cout = Infinity;
  (presentations || []).forEach((pr, i) => {
    const q = quantitePresentation(dose, uniteDose, pr);
    if (!q) return;
    const injectable = /inject|perfusion/.test(sansAccents(pr.voie)) || PRELEVEMENT.includes(pr.par_unite);
    let c = Math.abs(q.ecart);
    if (oralePossible && injectable) c += 1;
    else if (injectable) c += 0.05; // à écart égal, préférer une forme non injectable
    if (jeuneEnfant && !injectable && pr.par_unite !== 'ml') c += 0.1;
    if (c < cout) {
      cout = c;
      meilleur = i;
    }
  });
  return meilleur;
}

// ------------------------------------------------------------------ durées

const JOURS_PAR_UNITE = { heures: 1 / 24, jours: 1, semaines: 7, mois: 30 };

export function libelleDuree(d) {
  if (!d) return '';
  const unites = { heures: 'h', jours: 'jours', semaines: 'semaines', mois: 'mois', doses: 'doses' };
  const u = unites[d.unite] || d.unite;
  const valeur = d.max && d.max !== d.min ? `${fr(d.min)} à ${fr(d.max)} ${u}` : `${fr(d.min)} ${u}`;
  const singulier =
    !d.max && d.min === 1 ? valeur.replace(/jours$/, 'jour').replace(/semaines$/, 'semaine') : valeur;
  return d.contexte ? `${singulier} (${d.contexte})` : singulier;
}

/** Options du menu « Durée » : celles de la posologie, avec la durée par défaut marquée. */
export function optionsDuree(posologie) {
  const durees = posologie?.durees || [];
  return durees.map((d, i) => ({
    cle: `d${i}`,
    libelle: libelleDuree(d),
    duree: d,
    defaut: Boolean(d.defaut),
  }));
}

/** Durée en jours retenue pour le calcul des quantités (borne haute si fourchette). */
export function dureeEnJours(d) {
  if (!d || !(JOURS_PAR_UNITE[d.unite] > 0)) return null;
  const v = Number(d.max || d.min);
  return v > 0 ? Math.ceil(v * JOURS_PAR_UNITE[d.unite]) : null;
}

/**
 * Quantité à délivrer : { unites, conditionnements, texte } ou null.
 * Dose unique : une prise. Sinon prises/jour × jours × nombre par prise.
 */
export function quantiteADelivrer({ nombreParPrise, prises, jours, presentation, doseUnique = false }) {
  if (!(nombreParPrise > 0) || !presentation) return null;
  const total = doseUnique
    ? nombreParPrise
    : prises > 0 && jours > 0
      ? nombreParPrise * prises * jours
      : null;
  if (total === null) return null;
  const unite = presentation.par_unite;
  // Flacon ou ampoule entamé : un flacon neuf par administration (pas de conservation après ouverture)
  const parAdministration = PRELEVEMENT.includes(unite) ? Math.ceil(nombreParPrise) : null;
  const totalArrondi = parAdministration
    ? parAdministration * (doseUnique ? 1 : prises * jours)
    : unite === 'ml'
      ? Math.ceil(total)
      : Math.ceil(total * 2) / 2;
  const contenance = Number(presentation.conditionnement_quantite) || null;
  const memeUnite = contenance && (presentation.conditionnement_unite || unite) === unite;
  const conditionnements = memeUnite ? Math.ceil(totalArrondi / contenance) : null;
  let texte = `${fr(totalArrondi)} ${libelleUnite(unite, totalArrondi)}`;
  if (conditionnements)
    texte += ` (${conditionnements} ${conditionnements > 1 ? 'boîtes ou flacons' : 'boîte ou flacon'})`;
  return { unites: totalArrondi, conditionnements, texte };
}

// ------------------------------------------------------------------ alertes

const contient = (texte, terme) => {
  const t = sansAccents(terme);
  return t.length >= 4 && sansAccents(texte).includes(t);
};

/** Premier mot significatif d'une DCI (« Amoxicilline + acide clavulanique » → « amoxicilline »). */
const motCle = (dci) =>
  sansAccents(dci)
    .split(/[^a-z0-9]+/)
    .find((m) => m.length >= 4) || sansAccents(dci);

/**
 * Alertes d'une ligne de traitement pour ce patient.
 * ligne : { molecule, posologie, dose, quantite }
 */
export function alertesLigne(ligne, patient) {
  const alertes = [];
  const { molecule, posologie, dose, quantite } = ligne;
  if (!molecule) return alertes;
  const add = (niveau, message) => alertes.push({ niveau, message });

  if (posologie?.securite === 'contre_indique') {
    add('danger', `${molecule.dci} : contre-indiqué dans cette population.`);
  } else if (posologie?.securite === 'prudence') {
    add('attention', `${molecule.dci} : à utiliser avec prudence dans cette population.`);
  }
  if (patient?.grossesse) {
    const g = posologieGrossesse(molecule.posologies);
    if (g?.securite === 'contre_indique')
      add('danger', `${molecule.dci} : contre-indiqué pendant la grossesse.`);
    else if (g?.securite === 'prudence') add('attention', `${molecule.dci} : prudence pendant la grossesse.`);
    else if (!g)
      add('info', `${molecule.dci} : pas de ligne « grossesse » dans la fiche, vérifier la sécurité.`);
  }
  if (
    patient?.allaitement &&
    contient(molecule.grossesse_allaitement, 'allaitement') &&
    /contre-indiqu|deconseill|eviter/.test(sansAccents(molecule.grossesse_allaitement))
  ) {
    add(
      'attention',
      `${molecule.dci} : vérifier la compatibilité avec l’allaitement (fiche pharmacologique).`,
    );
  }
  const allergies = sansAccents(patient?.allergies);
  if (allergies) {
    const termes = [motCle(molecule.dci), ...sansAccents(molecule.classe).split(/[^a-z0-9]+/)].filter(
      (m) => m.length >= 5,
    );
    const touche = termes.find((m) => allergies.includes(m) || allergies.includes(m.replace(/s$/, '')));
    if (touche)
      add(
        'danger',
        `${molecule.dci} : allergie signalée (« ${touche} ») — ne pas prescrire sans vérification.`,
      );
  }
  const texteRisque = `${molecule.contre_indications || ''} ${molecule.precautions || ''}`;
  if (patient?.insuffisance_renale && /renal|renale|clairance|dfg|creatinin/.test(sansAccents(texteRisque))) {
    add(
      'attention',
      `${molecule.dci} : insuffisance rénale signalée, la fiche prévoit une adaptation ou une précaution.`,
    );
  }
  if (patient?.insuffisance_hepatique && /hepati/.test(sansAccents(texteRisque))) {
    add('attention', `${molecule.dci} : insuffisance hépatique signalée, voir précautions de la fiche.`);
  }
  if (dose?.plafonnee) {
    add(
      'attention',
      `${molecule.dci} : dose plafonnée à la dose maximale (calcul au poids : ${fr(dose.brute)} ${dose.unite}).`,
    );
  }
  if (
    posologie &&
    !posologie.dose_max &&
    (posologie.dose_par_kg || posologie.dose_par_m2) &&
    nombre(patient?.poids) >= 40
  ) {
    add('info', `${molecule.dci} : pas de dose maximale renseignée, ne pas dépasser la dose adulte.`);
  }
  if (quantite && Math.abs(quantite.ecart) > 0.15) {
    add(
      'attention',
      `${molecule.dci} : l’arrondi à ${quantite.texte} s’écarte de ${Math.round(Math.abs(quantite.ecart) * 100)} % de la dose calculée ; choisir une autre présentation si possible.`,
    );
  }
  if (posologie?.structure_a_valider || molecule.fiche_a_valider) {
    add('info', `${molecule.dci} : posologie non encore validée par un médecin.`);
  }
  return alertes;
}

/** Alertes entre les lignes de l'ordonnance : doublon de molécule ou de classe, interactions citées. */
export function alertesOrdonnance(lignes) {
  const alertes = [];
  const mols = lignes.map((l) => l.molecule).filter(Boolean);
  const vues = new Map();
  for (const m of mols) {
    if (vues.has(m.slug)) alertes.push({ niveau: 'attention', message: `${m.dci} est prescrit deux fois.` });
    vues.set(m.slug, m);
  }
  const uniques = [...vues.values()];
  const parClasse = new Map();
  for (const m of uniques) {
    const c = sansAccents(m.classe);
    if (!c) continue;
    parClasse.set(c, [...(parClasse.get(c) || []), m]);
  }
  for (const [, liste] of parClasse) {
    if (liste.length > 1) {
      alertes.push({
        niveau: 'attention',
        message: `Même classe (${liste[0].classe}) : ${liste.map((m) => m.dci).join(', ')} — vérifier qu’il ne s’agit pas d’un doublon.`,
      });
    }
  }
  for (const a of uniques) {
    for (const b of uniques) {
      if (a === b) continue;
      const cle = motCle(b.dci);
      const classe = sansAccents(b.classe);
      const texte = sansAccents(a.interactions);
      if (!texte) continue;
      if (
        (cle.length >= 5 && texte.includes(cle)) ||
        (classe.length >= 6 && texte.includes(classe.replace(/s$/, '')))
      ) {
        alertes.push({
          niveau: 'attention',
          message: `Interaction possible : la fiche de ${a.dci} cite ${b.dci} (« ${String(a.interactions).slice(0, 140)}${String(a.interactions).length > 140 ? '…' : ''} »).`,
        });
      }
    }
  }
  return alertes;
}

// ------------------------------------------------------------------ texte de l'ordonnance

/** Minuscule initiale d'un mot ordinaire seulement (pas « IV », « H0 », « SC »). */
const minusculeInitiale = (t) => (/^[A-ZÀ-Ý][a-zà-ÿ]/.test(t) ? t.charAt(0).toLowerCase() + t.slice(1) : t);

/** Posologie en clair pour l'ordonnance. */
export function posologieEnClair(ligne) {
  const morceaux = [];
  const { quantite, dose, posologie, presentation } = ligne;
  if (quantite && dose && PRELEVEMENT.includes(quantite.unite)) {
    morceaux.push(
      `${fr(dose.parPrise)} ${dose.unite} (${quantite.texte}${presentation?.libelle ? ` de ${presentation.libelle}` : ''})`,
    );
  } else if (quantite) {
    morceaux.push(`${quantite.texte}${presentation?.libelle ? ` de ${presentation.libelle}` : ''}`);
  } else if (dose?.parPrise) {
    morceaux.push(`${fr(dose.parPrise)} ${dose.unite} par prise`);
  } else if (ligne.doseLibre) {
    morceaux.push(ligne.doseLibre);
  } else if (posologie?.dose_texte) {
    morceaux.push(posologie.dose_texte);
  }
  const freq = ligne.frequence || libelleFrequence(posologie);
  if (freq) morceaux.push(minusculeInitiale(freq));
  // Voie : celle de la présentation choisie si elle est orale (la fiche peut citer plusieurs voies)
  const voie =
    presentation && /oral/.test(sansAccents(presentation.voie)) && /oral/.test(sansAccents(posologie?.voie))
      ? 'orale'
      : posologie?.voie;
  if (voie) morceaux.push(`voie ${minusculeInitiale(voie)}`);
  return morceaux.join(', ');
}

// ------------------------------------------------------------------ prescripteur

export const PROFILS_PRESCRIPTEURS = [
  'medecin_generaliste',
  'medecin_specialiste',
  'infirmier',
  'sage_femme',
];

/**
 * Droit d'imprimer une ordonnance avec en-tête : compte vérifié et profil prescripteur.
 * Renvoie { entete: bool, motif } (motif explique pourquoi l'en-tête est absent).
 */
export function droitOrdonnance(user) {
  if (!user)
    return {
      entete: false,
      motif: 'Connectez-vous avec un compte vérifié pour imprimer une ordonnance à en-tête.',
    };
  if (!PROFILS_PRESCRIPTEURS.includes(user.profil)) {
    return {
      entete: false,
      motif: 'Votre profil ne permet pas de délivrer une ordonnance : document de travail uniquement.',
    };
  }
  if (user.verification !== 'verifie') {
    return {
      entete: false,
      motif:
        'Compte non vérifié : document sans valeur d’ordonnance tant que votre numéro d’ordre n’est pas vérifié.',
    };
  }
  return { entete: true, motif: null };
}
