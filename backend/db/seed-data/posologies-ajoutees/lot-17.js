'use strict';

/**
 * Posologies — lot 17 : molécules suivantes les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, VIH, tuberculose), MSF Guide clinique et
 * thérapeutique et Médicaments essentiels, notices. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Fluorométholone
  fluorometholone: [
    p(
      'adulte',
      'Collyre à 0,1 % : 1 goutte 2 à 4 fois par jour (toutes les heures les 2 premiers jours si nécessaire)',
      {
        ind: 'Inflammation oculaire superficielle, conjonctivite allergique sévère, épisclérite',
        voie: 'Ophtalmique',
        unite: 'goutte',
        freq: '2 à 4 fois par jour',
        f: { n: 4 },
        durees: [[1, 2, 'semaines']],
        rem: 'Exclure une kératite herpétique ; surveiller la pression intraoculaire si > 10 jours.',
      },
    ),
    p('enfant', '≥ 2 ans : 1 goutte 2 à 4 fois par jour (avis ophtalmologique)', {
      ind: 'Kératoconjonctivite vernale, inflammation oculaire',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '2 à 4 fois par jour',
      f: { n: 4 },
      sec: 'prudence',
    }),
    p('grossesse', 'Usage local court possible', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Fluticasone
  'fluticasone-propionate-furoate': [
    p(
      'adulte',
      'Inhalé (propionate) : 100–500 µg 2 fois par jour ; spray nasal : 2 pulvérisations par narine 1 fois par jour',
      {
        ind: 'Asthme persistant, BPCO (avec bronchodilatateur), rhinite allergique',
        voie: 'Inhalée ou nasale',
        unite: 'µg',
        freq: '1 à 2 fois par jour',
        f: { n: 2 },
        rem: 'Se rincer la bouche après inhalation.',
      },
    ),
    p(
      'enfant',
      'Inhalé : 50–100 µg 2 fois par jour (≥ 4 ans) ; spray nasal (furoate) : 1 pulvérisation par narine/j (≥ 6 ans)',
      {
        ind: 'Asthme persistant, rhinite allergique',
        voie: 'Inhalée (chambre) ou nasale',
        unite: 'µg',
        freq: '2 fois par jour',
        f: { n: 2 },
        rem: 'Surveiller la croissance.',
      },
    ),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Fomépizole
  fomepizole: [
    p(
      'adulte',
      '15 mg/kg IV en 30 min, puis 10 mg/kg toutes les 12 h (4 doses), puis 15 mg/kg toutes les 12 h',
      {
        ind: 'Intoxication au méthanol ou à l’éthylène glycol',
        voie: 'IV',
        kg: 15,
        f: 'schema',
        rem: 'Hémodialyse selon la gravité (doses toutes les 4 h pendant la dialyse). Alternative : éthanol.',
      },
    ),
    p('enfant', 'Même schéma par kg', {
      ind: 'Intoxication au méthanol ou à l’éthylène glycol',
      voie: 'IV',
      kg: 15,
      f: 'schema',
    }),
    p('grossesse', 'Utilisable en urgence', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Gemcitabine
  gemcitabine: [
    p(
      'adulte',
      '1 000–1 250 mg/m² IV en 30 min à J1 et J8 (cycles de 21 jours) ou J1, J8, J15 (cycles de 28 jours)',
      {
        ind: 'Cancers du pancréas, du poumon, de la vessie, du sein, de l’ovaire',
        voie: 'IV',
        f: 'schema',
        rem: 'Myélosuppression, syndrome pseudo-grippal.',
      },
    ),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Glucosamine
  glucosamine: [
    p('adulte', '1 500 mg/j en 1 prise', {
      ind: 'Arthrose du genou symptomatique',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[3, 6, 'mois', 'Arrêter si pas d’amélioration']],
      rem: 'Bénéfice faible ; allergie aux crustacés : prudence.',
    }),
    p('grossesse', 'Sans objet', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Halothane
  halothane: [
    p('adulte', 'Induction : 2–4 % ; entretien : 0,5–2 % dans le mélange inhalé', {
      ind: 'Anesthésie générale par inhalation (si sévoflurane ou isoflurane indisponibles)',
      voie: 'Inhalée (vaporisateur calibré)',
      unite: '%',
      f: 'schema',
      rem: 'Anesthésiste. Arythmies (adrénaline), hépatite à l’halothane (éviter les expositions répétées < 3 mois), hyperthermie maligne.',
    }),
    p('enfant', 'Induction : jusqu’à 4 % ; entretien : 0,5–1,5 %', {
      ind: 'Anesthésie générale par inhalation',
      voie: 'Inhalée',
      unite: '%',
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Relâchement utérin (hémorragie) : éviter à la césarienne', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Hydroxyde d’aluminium
  'hydroxyde-d-aluminium': [
    p('adulte', '500 mg–1 g (ou 10 mL de suspension) 1 h après les repas et au coucher', {
      ind: 'Pyrosis, dyspepsie, hyperphosphatémie (courte durée)',
      voie: 'Orale',
      freq: '3 à 4 fois par jour',
      f: { n: 4 },
      rem: 'Constipation. Espacer de 2 h des autres médicaments (fer, cyclines, fluoroquinolones, lévothyroxine). Accumulation en insuffisance rénale.',
    }),
    p('enfant', 'Avis médical ; éviter l’usage prolongé', {
      ind: 'Dyspepsie',
      voie: 'Orale',
      sec: 'prudence',
    }),
    p('grossesse', 'Usage ponctuel', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Imatinib
  imatinib: [
    p('adulte', '400 mg/j (phase chronique) ; 600 mg/j (phase accélérée) ; GIST : 400 mg/j', {
      ind: 'Leucémie myéloïde chronique, tumeurs stromales gastro-intestinales (GIST)',
      voie: 'Orale, au repas',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Œdèmes, crampes, myélosuppression. Programmes d’accès disponibles en Afrique.',
    }),
    p('enfant', '340 mg/m²/j (maximum 600 mg), avis d’oncohématologie pédiatrique', {
      ind: 'Leucémie myéloïde chronique',
      voie: 'Orale',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Isoflurane
  isoflurane: [
    p('adulte', 'Induction : 1,5–3 % ; entretien : 1–2,5 % (avec protoxyde d’azote ou oxygène)', {
      ind: 'Anesthésie générale par inhalation',
      voie: 'Inhalée (vaporisateur calibré)',
      unite: '%',
      f: 'schema',
      rem: 'Odeur irritante (induction au masque difficile). Hyperthermie maligne.',
    }),
    p('enfant', 'Entretien : 1–2,5 % (induction intraveineuse ou au sévoflurane de préférence)', {
      ind: 'Anesthésie générale',
      voie: 'Inhalée',
      unite: '%',
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable ; relâchement utérin à forte concentration', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Itraconazole
  itraconazole: [
    p('adulte', '200 mg 1 à 2 fois par jour au repas', {
      ind: 'Histoplasmose, aspergillose chronique, sporotrichose, chromomycose, onychomycoses (pulses)',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
      durees: [[3, 12, 'mois', 'Selon l’infection']],
      rem: 'Insuffisance cardiaque : contre-indiqué. Interactions (CYP3A4). Bilan hépatique.',
    }),
    p('enfant', '5 mg/kg/j en 1 à 2 prises (maximum 400 mg/j)', {
      ind: 'Mycoses profondes, teignes (avis spécialisé)',
      voie: 'Orale',
      kg: 5,
      max: 400,
      base: 'par_jour',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiqué sauf mycose menaçante', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Ivabradine
  ivabradine: [
    p('adulte', '5 mg 2 fois par jour, ajuster à 2,5–7,5 mg 2 fois par jour selon la fréquence cardiaque', {
      ind: 'Insuffisance cardiaque (FC ≥ 70/min en rythme sinusal malgré bêtabloquant), angor stable',
      voie: 'Orale, au repas',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Objectif FC de repos 50–60/min. Phosphènes. Contre-indiquée si fibrillation atriale.',
    }),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Kétotifène
  ketotifene: [
    p('adulte', '1 mg 2 fois par jour ; collyre à 0,025 % : 1 goutte 2 fois par jour', {
      ind: 'Allergies (conjonctivite, urticaire), prévention de l’asthme allergique (effet modeste)',
      voie: 'Orale ou ophtalmique',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Sédation, prise de poids.',
    }),
    p('enfant', '≥ 3 ans : 1 mg 2 fois par jour ; 6 mois–3 ans : 0,05 mg/kg 2 fois par jour', {
      ind: 'Allergies',
      voie: 'Orale',
      kg: 0.05,
      max: 1,
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('grossesse', 'À éviter (collyre possible)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Latanoprost (collyre)
  'latanoprost-collyre': [
    p('adulte', 'Collyre à 0,005 % : 1 goutte le soir', {
      ind: 'Glaucome à angle ouvert, hypertonie oculaire',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '1 fois par jour, le soir',
      f: { n: 1 },
      rem: 'Pigmentation de l’iris, allongement des cils. Conserver au froid avant ouverture.',
    }),
    p('enfant', '1 goutte le soir (avis spécialisé)', {
      ind: 'Glaucome pédiatrique',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Lénalidomide
  lenalidomide: [
    p('adulte', '25 mg/j de J1 à J21 de cycles de 28 jours (avec dexaméthasone), selon le protocole', {
      ind: 'Myélome multiple, syndromes myélodysplasiques del(5q)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Tératogène : programme de prévention de la grossesse. Thromboprophylaxie (aspirine ou HBPM). Adapter à la fonction rénale.',
    }),
    p('grossesse', 'Contre-indiqué (tératogène)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Lévocarnitine
  levocarnitine: [
    p('enfant', '50–100 mg/kg/j en 2 à 3 prises (maximum 3 g/j)', {
      ind: 'Déficits en carnitine, aciduries organiques (avis spécialisé)',
      voie: 'Orale ou IV',
      kg: 75,
      max: 3000,
      base: 'par_jour',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('adulte', '1–3 g/j en 2 à 3 prises ; hémodialyse : 10–20 mg/kg IV après chaque séance', {
      ind: 'Déficit en carnitine (dont hémodialyse), toxicité du valproate (100 mg/kg IV)',
      voie: 'Orale ou IV',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Lévofloxacine
  levofloxacine: [
    p('adulte', '500–750 mg/j (tuberculose résistante : 750–1 000 mg/j)', {
      ind: 'Pneumonie, pyélonéphrite, prostatite, tuberculose multirésistante (selon le programme)',
      voie: 'Orale ou IV',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [5, 10, 'jours', 'Pneumonie, pyélonéphrite', true],
        [6, 9, 'mois', 'Tuberculose résistante'],
      ],
      rem: 'Tendinopathies, QT, dysglycémies. À distance des antiacides et du fer.',
    }),
    p('enfant', 'Tuberculose résistante : 15–20 mg/kg/j (bandes de poids du programme)', {
      ind: 'Tuberculose multirésistante, contacts (prophylaxie)',
      voie: 'Orale',
      kg: 15,
      base: 'par_jour',
      max: 750,
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter sauf tuberculose résistante', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Linézolide
  linezolide: [
    p('adulte', '600 mg 2 fois par jour (tuberculose résistante : 600 mg/j)', {
      ind: 'Infections à SARM ou entérocoque résistant, tuberculose multirésistante (BPaLM)',
      voie: 'Orale ou IV',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[10, 14, 'jours', 'Infections bactériennes']],
      rem: 'Myélosuppression, neuropathie (optique et périphérique) si > 28 jours ; syndrome sérotoninergique.',
    }),
    p('enfant', '< 12 ans : 10 mg/kg toutes les 8 h (maximum 600 mg par dose)', {
      ind: 'Infections à Gram positif résistantes',
      voie: 'Orale ou IV',
      kg: 10,
      max: 600,
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[10, 14, 'jours']],
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Lopéramide
  loperamide: [
    p('adulte', '4 mg, puis 2 mg après chaque selle liquide (maximum 16 mg/j)', {
      ind: 'Diarrhée aiguë non sanglante et non fébrile de l’adulte, diarrhée chronique',
      voie: 'Orale',
      f: 'schema',
      durees: [[1, 2, 'jours', 'Diarrhée aiguë']],
      rem: 'Contre-indiqué si dysenterie, fièvre, colite. La réhydratation reste prioritaire.',
    }),
    p('enfant', 'Contre-indiqué avant 2 ans ; non recommandé par l’OMS dans la diarrhée aiguë de l’enfant', {
      ind: 'Diarrhée aiguë',
      voie: 'Orale',
      sec: 'contre_indique',
    }),
    p('grossesse', 'Usage ponctuel', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Lopinavir (+ ritonavir)
  lopinavir: [
    p('adulte', 'Lopinavir/ritonavir 400/100 mg 2 fois par jour', {
      ind: 'Infection à VIH (2e ligne)',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Nombreuses interactions (rifampicine : doubler la dose ou changer de schéma). Troubles digestifs, dyslipidémie.',
    }),
    p('enfant', 'Selon les bandes de poids OMS (granulés ou comprimés pédiatriques)', {
      ind: 'Infection à VIH de l’enfant',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Loratadine
  loratadine: [
    p('adulte', '10 mg/j', {
      ind: 'Rhinite allergique, urticaire',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('enfant', '2–12 ans : 5 mg/j (< 30 kg) ou 10 mg/j (≥ 30 kg)', {
      ind: 'Rhinite allergique, urticaire',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],
};
