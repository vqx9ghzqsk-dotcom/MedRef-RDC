/** Libellés d'affichage des valeurs codées de l'API. */

export const FREQUENCES = {
  tres_frequent: 'Très fréquent',
  frequent: 'Fréquent',
  occasionnel: 'Occasionnel',
  rare: 'Rare',
};

export const LIGNES = {
  premiere: '1re intention',
  deuxieme: '2e intention',
  alternative: 'Alternative',
  adjuvant: 'Traitement associé',
};

export const CATEGORIES_URGENCE = {
  medicale: 'Médicale',
  chirurgicale: 'Chirurgicale',
  'gyneco-obstetricale': 'Gynéco-obstétricale',
  pediatrique: 'Pédiatrique',
};

export const NIVEAUX_SOURCE = {
  1: 'Niveau 1 : OMS et sources nationales RDC',
  2: 'Niveau 2 : Sociétés savantes',
  3: 'Niveau 3 : Revues et méta-analyses',
  4: 'Niveau 4 : Ouvrages de référence',
};

export const ONGLETS = [
  { key: 'definition', label: 'Définition' },
  { key: 'diagnostic', label: 'Diagnostic' },
  { key: 'etiologies', label: 'Étiologies' },
  { key: 'therapeutique', label: 'Thérapeutique' },
  { key: 'niveaux', label: 'Niveaux de soins' },
  { key: 'evolution', label: 'Évolution' },
];

/** Catégories du bilan paraclinique, dans l'ordre d'affichage. */
export const CATEGORIES_EXAMEN = {
  premiere_intention: '1re intention',
  deuxieme_intention: '2e intention',
  presomption: 'Présomption',
  confirmation: 'Confirmation',
  gravite: 'Gravité et retentissement',
  etiologique: 'Étiologique',
  pretherapeutique: 'Pré-thérapeutique',
  suivi: 'Suivi',
};

export const TYPES_EXAMEN = {
  biologie: 'Biologie',
  imagerie: 'Imagerie',
  exploration: 'Explorations fonctionnelles',
};

export const TYPES_SCORE = {
  score: 'Scores cliniques',
  classification: 'Classifications',
  calculatrice: 'Calculs',
};

/** Rubriques de la fiche pharmacologique d'une molécule. */
/** Nature d'un produit (le répertoire des AMM contient aussi cosmétiques et dispositifs). */
export const NATURES_PRODUIT = {
  medicament: 'Médicaments',
  complement: 'Compléments alimentaires',
  dispositif: 'Dispositifs médicaux',
  cosmetique: 'Cosmétiques',
  autre: 'Autres (désinfectants, solutés…)',
};

export const FICHE_PHARMACO = [
  ['mecanisme', 'Mécanisme d’action'],
  ['pharmacocinetique', 'Pharmacocinétique'],
  ['indications', 'Indications'],
  ['posologie', 'Posologie'],
  ['contre_indications', 'Contre-indications'],
  ['effets_indesirables', 'Effets indésirables'],
  ['precautions', 'Précautions'],
  ['interactions', 'Interactions'],
  ['grossesse_allaitement', 'Grossesse et allaitement'],
  ['surveillance', 'Surveillance'],
];

/** Pyramide sanitaire de la RDC. */
export const NIVEAUX_SOINS = {
  centre_sante: {
    label: 'Centre de santé',
    sub: 'Soins primaires : infirmier titulaire, TDR, médicaments essentiels',
  },
  hopital_general: {
    label: 'Hôpital général de référence',
    sub: 'Zone de santé : médecin, laboratoire, imagerie de base, bloc, transfusion',
  },
  hopital_tertiaire: {
    label: 'Hôpital provincial / universitaire',
    sub: 'Spécialistes, réanimation, scanner, dialyse',
  },
};

export const GRADES = {
  forte: 'Recommandation forte',
  conditionnelle: 'Recommandation conditionnelle',
  bonne_pratique: 'Bonne pratique',
  consensus: 'Consensus d’experts',
};

export const STATUTS_FICHE = {
  brouillon: 'Brouillon',
  a_valider: 'À valider',
  valide: 'Validée',
};

export const POPULATIONS = {
  adulte: 'Adulte',
  enfant: 'Enfant',
  nouveau_ne: 'Nouveau-né',
  grossesse: 'Grossesse',
};

export const SECURITES = {
  autorise: 'Autorisé',
  prudence: 'Prudence',
  contre_indique: 'Contre-indiqué',
};

export const formatPrixCdf = (prix) =>
  prix === null || prix === undefined || prix === ''
    ? 'Non renseigné'
    : `${Number(prix).toLocaleString('fr-FR')} FC`;

/** Regroupe une liste triée par la première lettre (A, B, …), accents ignorés. */
export function groupByInitial(items, key = 'nom') {
  const groups = new Map();
  for (const item of items) {
    const letter = String(item[key] || '#')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .charAt(0)
      .toUpperCase();
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter).push(item);
  }
  return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b, 'fr'));
}

/** Types de formes cliniques (sémiologie systématisée). */
export const TYPES_FORME = {
  commune: 'Forme commune',
  gravite: 'Forme grave',
  terrain: 'Forme selon le terrain',
  topographique: 'Forme topographique',
  evolutive: 'Forme évolutive',
  paraclinique: 'Forme paraclinique',
  etiologique: 'Forme étiologique',
};

/** Rubriques de la sémiologie, dans l'ordre de l'examen clinique. */
export const RUBRIQUES_SEMIOLOGIE = [
  ['terrain', 'Terrain et circonstances de découverte'],
  ['signes_fonctionnels', 'Signes fonctionnels'],
  ['signes_generaux', 'Signes généraux'],
  ['signes_physiques', 'Signes physiques'],
  ['paraclinique', 'Signes paracliniques évocateurs'],
];

// ------------------------------------------------------------------ Comptes (lot A)

/** Profils professionnels (le profil décrit le métier ; le rôle donne les droits). */
export const PROFILS = {
  medecin_generaliste: 'Médecin généraliste',
  medecin_specialiste: 'Médecin spécialiste',
  infirmier: 'Infirmier(ère)',
  sage_femme: 'Sage-femme',
  pharmacien: 'Pharmacien(ne)',
  etudiant: 'Étudiant(e) / interne',
};

export const STRUCTURES = {
  centre_sante: 'Centre de santé',
  hopital_general: 'Hôpital général de référence',
  hopital_tertiaire: 'Hôpital tertiaire / universitaire',
  clinique_privee: 'Clinique privée',
  pharmacie: 'Pharmacie',
  universite: 'Université / institut',
  autre: 'Autre',
};

export const ORDRES = {
  medecins: 'Ordre des médecins',
  pharmaciens: 'Ordre des pharmaciens',
  infirmiers: 'Ordre des infirmiers',
  sages_femmes: 'Ordre des sages-femmes',
};

/** Ordre attendu selon le profil (l'étudiant n'en a pas). */
export const ORDRE_DU_PROFIL = {
  medecin_generaliste: 'medecins',
  medecin_specialiste: 'medecins',
  infirmier: 'infirmiers',
  sage_femme: 'sages_femmes',
  pharmacien: 'pharmaciens',
};

export const VERIFICATIONS = {
  non_demandee: 'Non vérifié',
  en_attente: 'Vérification en attente',
  verifie: 'Compte vérifié',
  refuse: 'Vérification refusée',
};

export const PROVINCES = [
  'Bas-Uélé',
  'Équateur',
  'Haut-Katanga',
  'Haut-Lomami',
  'Haut-Uélé',
  'Ituri',
  'Kasaï',
  'Kasaï-Central',
  'Kasaï-Oriental',
  'Kinshasa',
  'Kongo-Central',
  'Kwango',
  'Kwilu',
  'Lomami',
  'Lualaba',
  'Mai-Ndombe',
  'Maniema',
  'Mongala',
  'Nord-Kivu',
  'Nord-Ubangi',
  'Sankuru',
  'Sud-Kivu',
  'Sud-Ubangi',
  'Tanganyika',
  'Tshopo',
  'Tshuapa',
];

// ------------------------------------------------------------------ Posologies structurées (lot B)

export const DOSE_BASES = {
  par_prise: 'Par prise',
  par_jour: 'Par jour (à répartir entre les prises)',
};

export const FREQUENCE_TYPES = {
  prises_par_jour: 'Nombre de prises par jour',
  intervalle: 'Toutes les N heures',
  dose_unique: 'Dose unique',
  perfusion: 'Perfusion continue',
  schema: 'Schéma particulier (texte)',
};

export const UNITES_DUREE = {
  heures: 'heure(s)',
  jours: 'jour(s)',
  semaines: 'semaine(s)',
  mois: 'mois',
  doses: 'dose(s)',
};

export const FORMES_PRESENTATION = {
  comprime: 'Comprimé',
  gelule: 'Gélule',
  suspension_buvable: 'Suspension buvable',
  sirop: 'Sirop',
  solution_buvable: 'Solution buvable',
  gouttes_buvables: 'Gouttes buvables',
  sachet: 'Sachet',
  injectable: 'Injectable',
  perfusion: 'Perfusion',
  suppositoire: 'Suppositoire',
  ovule: 'Ovule',
  creme_pommade: 'Crème / pommade',
  collyre: 'Collyre',
  inhalation: 'Inhalation',
  autre: 'Autre',
};

export const PAR_UNITES = {
  comprime: 'comprimé',
  gelule: 'gélule',
  ml: 'mL',
  sachet: 'sachet',
  ampoule: 'ampoule',
  flacon: 'flacon',
  suppositoire: 'suppositoire',
  ovule: 'ovule',
  dose: 'dose',
  g: 'g',
};
