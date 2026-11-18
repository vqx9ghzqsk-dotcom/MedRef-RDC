/**
 * Scores cliniques guidés de l'aide au diagnostic : le soignant répond item par item, le
 * total et son interprétation s'affichent ; certains alimentent le moteur (Glasgow, Blantyre,
 * CURB-65, Wells). Barèmes publiés (Teasdale, Molyneux, Lim, Wells, Apgar, Bishop) ;
 * interprétations à valider par le Dr Mingalu.
 */

const oui = (points) => [
  [0, 'Non'],
  [points, 'Oui'],
];

export const SCORES_GUIDES = [
  {
    id: 'glasgow',
    nom: 'Glasgow',
    public: (p) => !p.petitEnfant,
    items: [
      {
        id: 'y',
        libelle: 'Ouverture des yeux',
        options: [
          [4, 'Spontanée'],
          [3, 'À la voix'],
          [2, 'À la douleur'],
          [1, 'Aucune'],
        ],
      },
      {
        id: 'v',
        libelle: 'Réponse verbale',
        options: [
          [5, 'Orientée'],
          [4, 'Confuse'],
          [3, 'Mots inappropriés'],
          [2, 'Sons incompréhensibles'],
          [1, 'Aucune'],
        ],
      },
      {
        id: 'm',
        libelle: 'Réponse motrice',
        options: [
          [6, 'Obéit aux ordres'],
          [5, 'Localise la douleur'],
          [4, 'Évitement'],
          [3, 'Flexion anormale'],
          [2, 'Extension'],
          [1, 'Aucune'],
        ],
      },
    ],
    interpreter: (t) =>
      t <= 8
        ? { texte: 'coma : protéger les voies aériennes', grave: true }
        : t <= 13
          ? { texte: 'trouble de la conscience modéré', grave: true }
          : { texte: t === 15 ? 'conscience normale' : 'trouble léger de la conscience', grave: false },
  },
  {
    id: 'blantyre',
    nom: 'Blantyre (enfant de moins de 5 ans)',
    public: (p) => p.petitEnfant,
    items: [
      {
        id: 'yeux',
        libelle: 'Mouvements des yeux',
        options: [
          [1, 'Suit du regard'],
          [0, 'Ne suit pas'],
        ],
      },
      {
        id: 'moteur',
        libelle: 'Réponse motrice à la douleur',
        options: [
          [2, 'Localise'],
          [1, 'Retire le membre'],
          [0, 'Non spécifique ou absente'],
        ],
      },
      {
        id: 'verbal',
        libelle: 'Réponse verbale',
        options: [
          [2, 'Cri approprié'],
          [1, 'Gémissement ou cri inapproprié'],
          [0, 'Aucune'],
        ],
      },
    ],
    interpreter: (t) =>
      t <= 2
        ? { texte: 'coma : paludisme grave à traiter sans attendre, glycémie', grave: true }
        : t <= 4
          ? { texte: 'trouble de la conscience', grave: true }
          : { texte: 'normal', grave: false },
  },
  {
    id: 'curb65',
    nom: 'CURB-65 (pneumonie de l’adulte)',
    public: (p) => p.adulte,
    items: [
      { id: 'c', libelle: 'Confusion récente', options: oui(1) },
      { id: 'u', libelle: 'Urée > 7 mmol/L', options: oui(1) },
      { id: 'r', libelle: 'Fréquence respiratoire ≥ 30/min', options: oui(1) },
      { id: 'b', libelle: 'PAS < 90 ou PAD ≤ 60 mmHg', options: oui(1) },
      { id: 'a', libelle: 'Âge ≥ 65 ans', options: oui(1) },
    ],
    interpreter: (t) =>
      t >= 3
        ? { texte: 'pneumonie sévère : hospitaliser, envisager les soins intensifs', grave: true }
        : t === 2
          ? { texte: 'risque intermédiaire : hospitalisation à discuter', grave: false }
          : { texte: 'risque faible : traitement ambulatoire possible', grave: false },
  },
  {
    id: 'wells-ep',
    nom: 'Wells (embolie pulmonaire)',
    public: (p) => p.adulte,
    orientation: { seuil: 4.5, motif: 'embolie' },
    items: [
      { id: 'tvp', libelle: 'Signes cliniques de thrombose veineuse profonde', options: oui(3) },
      { id: 'ep', libelle: 'L’embolie est le diagnostic le plus probable', options: oui(3) },
      { id: 'fc', libelle: 'Fréquence cardiaque > 100/min', options: oui(1.5) },
      { id: 'immob', libelle: 'Immobilisation ≥ 3 jours ou chirurgie < 4 semaines', options: oui(1.5) },
      { id: 'atcd', libelle: 'Antécédent de thrombose ou d’embolie', options: oui(1.5) },
      { id: 'hemoptysie', libelle: 'Hémoptysie', options: oui(1) },
      { id: 'cancer', libelle: 'Cancer évolutif', options: oui(1) },
    ],
    interpreter: (t) =>
      t > 6
        ? {
            texte: 'probabilité forte : imagerie (angioscanner) et anticoagulation sans attendre',
            grave: true,
          }
        : t >= 2
          ? { texte: 'probabilité intermédiaire : D-dimères puis imagerie si positifs', grave: false }
          : { texte: 'probabilité faible : D-dimères pour exclure', grave: false },
  },
  {
    id: 'wells-tvp',
    nom: 'Wells (thrombose veineuse profonde)',
    public: (p) => p.adulte,
    orientation: { seuil: 2, motif: 'thrombose veineuse' },
    items: [
      { id: 'cancer', libelle: 'Cancer évolutif', options: oui(1) },
      { id: 'paralysie', libelle: 'Paralysie ou plâtre récent du membre inférieur', options: oui(1) },
      { id: 'alitement', libelle: 'Alitement > 3 jours ou chirurgie < 12 semaines', options: oui(1) },
      { id: 'trajet', libelle: 'Douleur sur le trajet veineux', options: oui(1) },
      { id: 'membre', libelle: 'Œdème de tout le membre', options: oui(1) },
      { id: 'mollet', libelle: 'Mollet augmenté de plus de 3 cm', options: oui(1) },
      { id: 'godet', libelle: 'Œdème prenant le godet du côté atteint', options: oui(1) },
      { id: 'veines', libelle: 'Veines superficielles collatérales', options: oui(1) },
      { id: 'atcd', libelle: 'Antécédent de thrombose', options: oui(1) },
      { id: 'autre', libelle: 'Autre diagnostic au moins aussi probable', options: oui(-2) },
    ],
    interpreter: (t) =>
      t >= 2
        ? { texte: 'thrombose probable : écho-doppler veineux', grave: false }
        : { texte: 'thrombose peu probable : D-dimères pour exclure', grave: false },
  },
  {
    id: 'apgar',
    nom: 'Apgar (nouveau-né)',
    public: (p) => p.nouveauNe,
    items: [
      {
        id: 'fc',
        libelle: 'Fréquence cardiaque',
        options: [
          [2, '> 100/min'],
          [1, '< 100/min'],
          [0, 'Absente'],
        ],
      },
      {
        id: 'resp',
        libelle: 'Respiration',
        options: [
          [2, 'Cri vigoureux'],
          [1, 'Lente, irrégulière'],
          [0, 'Absente'],
        ],
      },
      {
        id: 'tonus',
        libelle: 'Tonus',
        options: [
          [2, 'Mouvements actifs'],
          [1, 'Flexion des membres'],
          [0, 'Flasque'],
        ],
      },
      {
        id: 'reactivite',
        libelle: 'Réactivité',
        options: [
          [2, 'Cri, toux'],
          [1, 'Grimace'],
          [0, 'Aucune'],
        ],
      },
      {
        id: 'coloration',
        libelle: 'Coloration',
        options: [
          [2, 'Rose'],
          [1, 'Extrémités bleues'],
          [0, 'Bleu ou pâle'],
        ],
      },
    ],
    interpreter: (t) =>
      t <= 3
        ? { texte: 'détresse sévère : réanimation néonatale immédiate', grave: true }
        : t <= 6
          ? { texte: 'détresse modérée : stimuler, ventiler au ballon si besoin', grave: true }
          : { texte: 'adaptation normale', grave: false },
  },
  {
    id: 'bishop',
    nom: 'Bishop (col utérin)',
    public: (p) => p.enceinte,
    items: [
      {
        id: 'dilatation',
        libelle: 'Dilatation',
        options: [
          [0, 'Fermé'],
          [1, '1-2 cm'],
          [2, '3-4 cm'],
          [3, '≥ 5 cm'],
        ],
      },
      {
        id: 'effacement',
        libelle: 'Effacement',
        options: [
          [0, '0-30 %'],
          [1, '40-50 %'],
          [2, '60-70 %'],
          [3, '≥ 80 %'],
        ],
      },
      {
        id: 'station',
        libelle: 'Hauteur de la présentation',
        options: [
          [0, '−3'],
          [1, '−2'],
          [2, '−1 ou 0'],
          [3, '+1 ou +2'],
        ],
      },
      {
        id: 'consistance',
        libelle: 'Consistance',
        options: [
          [0, 'Ferme'],
          [1, 'Moyenne'],
          [2, 'Molle'],
        ],
      },
      {
        id: 'position',
        libelle: 'Position',
        options: [
          [0, 'Postérieure'],
          [1, 'Intermédiaire'],
          [2, 'Antérieure'],
        ],
      },
    ],
    interpreter: (t) =>
      t >= 8
        ? { texte: 'col favorable : déclenchement probablement efficace', grave: false }
        : { texte: 'col défavorable : maturation cervicale avant déclenchement', grave: false },
  },
];

/** Profil du patient pour savoir quels scores proposer. */
export function profilScores(cas, mois) {
  const connu = mois !== null && mois !== undefined;
  return {
    nouveauNe: connu ? mois < 1 : cas.age === 'nn',
    petitEnfant: connu ? mois < 60 : ['nn', 'petit'].includes(cas.age),
    adulte: connu ? mois >= 216 : ['adulte', 'age'].includes(cas.age),
    enceinte: cas.grossesse === true && cas.periode !== 'post-partum',
  };
}

/** Total d'un score guidé (null tant que tous les items ne sont pas renseignés). */
export function evaluerScoreGuide(def, reponses = {}) {
  if (!def.items.every((i) => reponses[i.id] !== undefined && reponses[i.id] !== null)) return null;
  const total = def.items.reduce((t, i) => t + Number(reponses[i.id]), 0);
  return { total, ...def.interpreter(total) };
}

/** Scores guidés complets d'un cas : { id, nom, total, texte, grave, orientation }. */
export function scoresGuidesDuCas(cas) {
  return SCORES_GUIDES.map((def) => {
    const r = evaluerScoreGuide(def, cas.scoresGuides?.[def.id]);
    if (!r) return null;
    const oriente = def.orientation && r.total >= def.orientation.seuil ? def.orientation.motif : null;
    return { id: def.id, nom: def.nom, ...r, orientation: oriente };
  }).filter(Boolean);
}
