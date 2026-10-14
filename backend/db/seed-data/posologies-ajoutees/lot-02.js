'use strict';

/**
 * Posologies — lot 2 : molécules 21 à 40 les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, programmes PNLO/NTD, santé maternelle),
 * MSF Guide clinique et thérapeutique et Médicaments essentiels, notices. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Vitamine B1 (thiamine)
  'vitamine-b1-thiamine': [
    p('adulte', '200–500 mg IV toutes les 8 h pendant 3 à 5 jours, puis 100 mg/j per os', {
      ind: 'Encéphalopathie de Gayet-Wernicke (suspicion comprise)',
      voie: 'IV puis orale',
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[3, 5, 'jours', 'Phase IV, puis relais oral']],
      rem: 'Toujours avant tout soluté glucosé chez l’alcoolique ou le dénutri.',
    }),
    p('adulte', '100 mg/j per os', {
      ind: 'Prévention chez l’alcoolique, dénutrition, carence',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('enfant', 'Béribéri : 10–25 mg IM ou IV par jour (nourrisson), puis 10–50 mg/j per os', {
      ind: 'Carence en thiamine (béribéri)',
      voie: 'IM, IV puis orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[6, null, 'semaines', 'Relais oral']],
    }),
    p('grossesse', '100 mg/j (vomissements incoercibles : IV avant toute perfusion de glucose)', {
      ind: 'Hyperemesis gravidarum, carence',
      sec: 'autorise',
    }),
  ],

  // ------------------------------------------------------------ Lactulose
  lactulose: [
    p('adulte', '15–30 mL/j en 1 ou 2 prises', {
      ind: 'Constipation',
      voie: 'Orale',
      unite: 'mL',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      rem: 'Effet en 24 à 48 h. Ballonnements en début de traitement.',
    }),
    p('adulte', '20–30 mL 3 à 4 fois par jour, à adapter pour obtenir 2 à 3 selles molles par jour', {
      ind: 'Encéphalopathie hépatique',
      voie: 'Orale ou par sonde',
      unite: 'mL',
      freq: '3 à 4 fois par jour',
      f: { n: 3 },
    }),
    p('enfant', '1 mL/kg/j en 1 ou 2 prises (0,5–1,5 mL/kg/j), maximum 30 mL/j', {
      ind: 'Constipation de l’enfant',
      voie: 'Orale',
      kg: 1,
      max: 30,
      base: 'par_jour',
      unite: 'mL',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      rem: 'Le macrogol est souvent mieux toléré après 6 mois.',
    }),
    p('grossesse', 'Mêmes doses que l’adulte', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Atropine
  atropine: [
    p('adulte', '0,5 mg IV, à répéter toutes les 3 à 5 min (maximum 3 mg)', {
      ind: 'Bradycardie symptomatique',
      voie: 'IV',
      freq: 'Toutes les 3 à 5 min si besoin',
      f: 'schema',
    }),
    p('adulte', '2 mg IV, puis doubler la dose toutes les 5 min jusqu’à l’atropinisation', {
      ind: 'Intoxication aux organophosphorés',
      voie: 'IV',
      f: 'schema',
      rem: 'Objectif : poumons secs, FC > 80/min, PAS > 80 mmHg, pupilles non punctiformes ; puis perfusion d’entretien.',
    }),
    p('enfant', '0,02 mg/kg IV (minimum 0,1 mg, maximum 0,5 mg)', {
      ind: 'Bradycardie, prémédication',
      voie: 'IV ou IM',
      kg: 0.02,
      max: 0.5,
      freq: 'À répéter une fois si besoin',
      f: 'unique',
    }),
    p('enfant', '0,05 mg/kg IV, puis doubler toutes les 5 min jusqu’à l’atropinisation', {
      ind: 'Intoxication aux organophosphorés',
      voie: 'IV',
      kg: 0.05,
      f: 'schema',
    }),
    p('grossesse', 'Mêmes doses que l’adulte en urgence', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Halopéridol
  haloperidol: [
    p('adulte', '2–5 mg IM, renouvelable après 30 à 60 min (maximum 20 mg/j)', {
      ind: 'Agitation aiguë, épisode psychotique aigu',
      voie: 'IM',
      freq: 'À renouveler si besoin',
      f: 'schema',
      rem: 'Associer une benzodiazépine si nécessaire ; prévoir un anticholinergique (bipéridène) en cas de dystonie.',
    }),
    p('adulte', '2–10 mg/j per os en 1 à 2 prises', {
      ind: 'Schizophrénie, psychoses',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
      rem: 'Sujet âgé ou confusion : 0,5–1 mg, à répéter avec prudence.',
    }),
    p('enfant', '0,025–0,05 mg/kg/j en 2 prises (≥ 3 ans, avis spécialisé)', {
      ind: 'Agitation, tics sévères',
      voie: 'Orale',
      kg: 0.05,
      max: 6,
      base: 'par_jour',
      freq: '2 fois par jour',
      f: { n: 2 },
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable si nécessaire à faible dose', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Rispéridone
  risperidone: [
    p('adulte', '1–2 mg/j, augmenter jusqu’à 4–6 mg/j (maximum 16 mg/j)', {
      ind: 'Schizophrénie, manie, psychoses',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      rem: 'Sujet âgé : 0,25–0,5 mg 2 fois par jour. Surveiller le poids, la glycémie et les effets extrapyramidaux.',
    }),
    p(
      'enfant',
      '≥ 5 ans : 0,25 mg/j (< 20 kg) ou 0,5 mg/j (≥ 20 kg), augmentation progressive (maximum 1–3 mg/j)',
      {
        ind: 'Troubles graves du comportement, irritabilité de l’autisme, tics',
        voie: 'Orale',
        freq: '1 fois par jour',
        f: { n: 1 },
        sec: 'prudence',
      },
    ),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Aciclovir
  aciclovir: [
    p('adulte', '400 mg 3 fois par jour', {
      ind: 'Herpès génital ou oral',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [
        [7, 10, 'jours', 'Primo-infection', true],
        [5, null, 'jours', 'Récurrence'],
      ],
    }),
    p('adulte', '800 mg 5 fois par jour', {
      ind: 'Zona (dans les 72 h), varicelle de l’adulte',
      voie: 'Orale',
      freq: '5 fois par jour',
      f: { n: 5 },
      durees: [[7, null, 'jours']],
    }),
    p('adulte', '10 mg/kg IV toutes les 8 h', {
      ind: 'Encéphalite herpétique, zona grave de l’immunodéprimé',
      voie: 'IV (perfusion d’1 h)',
      kg: 10,
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[14, 21, 'jours']],
      rem: 'Bonne hydratation ; adapter à la fonction rénale.',
    }),
    p('enfant', '15 mg/kg 5 fois par jour (maximum 200 mg par prise)', {
      ind: 'Gingivostomatite herpétique (dans les 72–96 h)',
      voie: 'Orale',
      kg: 15,
      max: 200,
      freq: '5 fois par jour',
      f: { n: 5 },
      durees: [[5, 7, 'jours']],
    }),
    p('enfant', '10–15 mg/kg IV toutes les 8 h', {
      ind: 'Encéphalite herpétique',
      voie: 'IV',
      kg: 10,
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[14, 21, 'jours']],
    }),
    p('nouveau_ne', '20 mg/kg IV toutes les 8 h', {
      ind: 'Herpès néonatal',
      voie: 'IV',
      kg: 20,
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [
        [14, null, 'jours', 'Forme cutanéo-muqueuse', true],
        [21, null, 'jours', 'Forme disséminée ou neurologique'],
      ],
    }),
    p('grossesse', 'Mêmes doses que l’adulte', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Lévothyroxine
  levothyroxine: [
    p(
      'adulte',
      '1,6 µg/kg/j ; débuter à 25–50 µg/j, augmenter de 25 µg toutes les 4 à 6 semaines selon la TSH',
      {
        ind: 'Hypothyroïdie',
        voie: 'Orale (à jeun)',
        kg: 1.6,
        base: 'par_jour',
        unite: 'µg',
        freq: '1 fois par jour, le matin à jeun',
        f: { n: 1 },
        rem: 'Sujet âgé ou cardiaque : débuter à 12,5–25 µg/j. Traitement à vie le plus souvent.',
      },
    ),
    p('nouveau_ne', '10–15 µg/kg/j en 1 prise', {
      ind: 'Hypothyroïdie congénitale',
      voie: 'Orale (comprimé écrasé)',
      kg: 10,
      base: 'par_jour',
      unite: 'µg',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Débuter le plus tôt possible ; contrôle de la T4 et de la TSH à 2 et 4 semaines.',
    }),
    p('enfant', 'Selon l’âge : 5–6 µg/kg/j (1–5 ans), 3–5 µg/kg/j (6–12 ans), puis dose adulte', {
      ind: 'Hypothyroïdie',
      voie: 'Orale',
      unite: 'µg',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('grossesse', 'Augmenter la dose de 25 à 30 % dès le début de la grossesse', {
      sec: 'autorise',
      rem: 'TSH toutes les 4 semaines au 1er trimestre.',
    }),
  ],

  // ------------------------------------------------------------ Oméprazole
  omeprazole: [
    p('adulte', '20 mg/j (40 mg/j si œsophagite sévère)', {
      ind: 'Reflux gastro-œsophagien, ulcère, prévention sous AINS',
      voie: 'Orale',
      freq: '1 fois par jour, avant le repas',
      f: { n: 1 },
      durees: [[4, 8, 'semaines']],
    }),
    p('adulte', '20 mg 2 fois par jour avec l’antibiothérapie', {
      ind: 'Éradication d’Helicobacter pylori',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[7, 14, 'jours']],
    }),
    p('adulte', '80 mg IV puis 40 mg IV toutes les 12 h', {
      ind: 'Hémorragie digestive haute',
      voie: 'IV',
      freq: 'Toutes les 12 h',
      f: 'schema',
      durees: [[72, null, 'heures', 'Puis relais oral']],
    }),
    p('enfant', '1 mg/kg/j en 1 prise (maximum 20–40 mg/j)', {
      ind: 'Reflux gastro-œsophagien, ulcère',
      voie: 'Orale',
      kg: 1,
      max: 40,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[4, 8, 'semaines']],
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Benzylpénicilline (pénicilline G)
  'benzylpenicilline-penicilline-g': [
    p('adulte', '3–4 MUI IV toutes les 4 h', {
      ind: 'Neurosyphilis, méningite, endocardite à streptocoque',
      voie: 'IV',
      unite: 'MUI',
      freq: 'Toutes les 4 h',
      f: { h: 4 },
      durees: [
        [10, 14, 'jours', 'Neurosyphilis', true],
        [4, 6, 'semaines', 'Endocardite'],
      ],
    }),
    p('adulte', '1–2 MUI IV toutes les 4 à 6 h', {
      ind: 'Pneumonie, infections à streptocoque',
      voie: 'IV',
      unite: 'MUI',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      durees: [[7, 10, 'jours']],
    }),
    p('enfant', '50 000 UI/kg IV toutes les 6 h', {
      ind: 'Pneumonie grave (avec gentamicine)',
      voie: 'IV ou IM',
      kg: 50000,
      max: 4000000,
      unite: 'UI',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      durees: [[5, 10, 'jours']],
      rem: 'Méningite : 100 000 UI/kg toutes les 4 à 6 h (maximum 4 MUI par dose).',
    }),
    p('nouveau_ne', '50 000 UI/kg IV toutes les 12 h (< 7 jours) ou toutes les 8 h (≥ 7 jours)', {
      ind: 'Sepsis néonatal (avec gentamicine), syphilis congénitale',
      voie: 'IV',
      kg: 50000,
      unite: 'UI',
      freq: 'Toutes les 12 h (< 7 j) ou 8 h (≥ 7 j)',
      f: 'schema',
      durees: [
        [7, 10, 'jours', 'Sepsis', true],
        [10, null, 'jours', 'Syphilis congénitale'],
      ],
    }),
    p('grossesse', 'Mêmes doses que l’adulte', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Gabapentine
  gabapentine: [
    p(
      'adulte',
      '300 mg le 1er jour, 300 mg 2 fois le 2e, 300 mg 3 fois le 3e, puis augmenter jusqu’à 900–3 600 mg/j en 3 prises',
      {
        ind: 'Douleurs neuropathiques, épilepsie (association)',
        voie: 'Orale',
        freq: '3 fois par jour',
        f: { n: 3 },
        rem: 'Adapter à la fonction rénale. Somnolence, vertiges.',
      },
    ),
    p('enfant', '≥ 6 ans : 10–15 mg/kg/j en 3 prises, augmenter jusqu’à 25–35 mg/kg/j', {
      ind: 'Épilepsie focale (association, avis spécialisé)',
      voie: 'Orale',
      kg: 15,
      base: 'par_jour',
      max: 3600,
      freq: '3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Calcium
  calcium: [
    p('adulte', '1 000–1 500 mg de calcium élément par jour en 2 à 3 prises', {
      ind: 'Supplémentation (ostéoporose, carence, avec vitamine D)',
      voie: 'Orale',
      unite: 'mg calcium élément',
      freq: '2 à 3 fois par jour',
      f: { n: 2 },
      rem: 'Carbonate de calcium 1,25 g = 500 mg de calcium élément. Espacer de 2 h des cyclines, du fer et de la lévothyroxine.',
    }),
    p('enfant', '50 mg/kg/j de calcium élément en 3 prises (maximum 1 000 mg/j)', {
      ind: 'Rachitisme carentiel (avec vitamine D)',
      voie: 'Orale',
      kg: 50,
      max: 1000,
      base: 'par_jour',
      unite: 'mg calcium élément',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[3, 6, 'mois']],
    }),
    p('grossesse', '1,5–2 g de calcium élément par jour en 3 prises à partir de 20 SA', {
      ind: 'Prévention de la pré-éclampsie (apport alimentaire faible, OMS)',
      voie: 'Orale',
      unite: 'mg calcium élément',
      freq: '3 fois par jour',
      f: { n: 3 },
      sec: 'autorise',
      rem: 'Prendre à distance du fer (au moins 2 h).',
    }),
  ],

  // ------------------------------------------------------------ Cholécalciférol (vitamine D3)
  'cholecalciferol-vitamine-d3': [
    p('adulte', 'Carence : 50 000 UI par semaine pendant 8 semaines, puis 800–2 000 UI/j', {
      ind: 'Carence en vitamine D, ostéomalacie',
      voie: 'Orale',
      unite: 'UI',
      freq: '1 fois par semaine, puis par jour',
      f: 'schema',
      rem: 'Prévention : 800–1 000 UI/j (sujet âgé, peu exposé au soleil).',
    }),
    p('enfant', 'Prévention : 400 UI/j (nourrisson) ; rachitisme : 2 000 UI/j pendant 3 mois', {
      ind: 'Prévention et traitement du rachitisme',
      voie: 'Orale',
      unite: 'UI',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[3, null, 'mois', 'Rachitisme, avec calcium']],
      rem: 'Alternative : dose unique de 100 000–150 000 UI selon l’âge (avis médical).',
    }),
    p('grossesse', '400–600 UI/j si apport insuffisant', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Vitamine A (rétinol)
  'vitamine-a-retinol': [
    p('enfant', '< 6 mois : 50 000 UI ; 6–11 mois : 100 000 UI ; ≥ 12 mois : 200 000 UI per os', {
      ind: 'Rougeole, xérophtalmie, supplémentation (tous les 4 à 6 mois)',
      voie: 'Orale',
      unite: 'UI',
      freq: 'Rougeole : J1 et J2 ; xérophtalmie : J1, J2 et J14',
      f: 'schema',
      rem: 'Ne pas donner si une dose a été reçue dans le mois (sauf rougeole ou xérophtalmie).',
    }),
    p('adulte', '200 000 UI per os à J1, J2 et J14', {
      ind: 'Xérophtalmie (femme non enceinte, homme)',
      voie: 'Orale',
      unite: 'UI',
      f: 'schema',
    }),
    p('grossesse', 'Fortes doses contre-indiquées : maximum 10 000 UI/j ou 25 000 UI/semaine', {
      sec: 'contre_indique',
      rem: 'Tératogène à forte dose.',
    }),
  ],

  // ------------------------------------------------------------ Warfarine
  warfarine: [
    p('adulte', '5 mg/j pendant 2 à 3 jours (2,5–5 mg chez le sujet âgé), puis adapter selon l’INR', {
      ind: 'Thrombose veineuse, embolie pulmonaire, fibrillation atriale, valve mécanique',
      voie: 'Orale',
      freq: '1 fois par jour, à heure fixe',
      f: { n: 1 },
      durees: [
        [3, 6, 'mois', 'Thrombose veineuse provoquée', true],
        [12, null, 'mois', 'Valve mécanique, fibrillation atriale : au long cours'],
      ],
      rem: 'INR cible 2–3 (2,5–3,5 pour une valve mécanique). Chevauchement avec l’héparine jusqu’à 2 INR dans la cible.',
    }),
    p('enfant', '0,2 mg/kg le 1er jour (maximum 10 mg), puis selon l’INR', {
      ind: 'Thrombose, valve mécanique (avis spécialisé)',
      voie: 'Orale',
      kg: 0.2,
      max: 10,
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiquée (tératogène au 1er trimestre) : utiliser une héparine', {
      sec: 'contre_indique',
      rem: 'Valve mécanique : décision spécialisée.',
    }),
  ],

  // ------------------------------------------------------------ Praziquantel
  praziquantel: [
    p('adulte', '40 mg/kg en dose unique (ou en 2 prises à 4 h d’intervalle)', {
      ind: 'Schistosomiase (urinaire et intestinale)',
      voie: 'Orale',
      kg: 40,
      freq: 'Dose unique',
      f: 'unique',
      rem: 'Téniasis : 5–10 mg/kg en dose unique.',
    }),
    p('adulte', '50 mg/kg/j en 3 prises avec l’albendazole', {
      ind: 'Neurocysticercose (kystes multiples, avec corticoïdes)',
      voie: 'Orale',
      kg: 50,
      base: 'par_jour',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[10, 14, 'jours']],
    }),
    p('enfant', '40 mg/kg en dose unique', {
      ind: 'Schistosomiase',
      voie: 'Orale',
      kg: 40,
      freq: 'Dose unique',
      f: 'unique',
      rem: 'Comprimé écrasé chez le jeune enfant ; formulation pédiatrique selon disponibilité.',
    }),
    p('grossesse', 'Utilisable (traitement de masse possible selon l’OMS)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Méthylprednisolone
  methylprednisolone: [
    p('adulte', '1 g IV par jour', {
      ind: 'Poussée de sclérose en plaques ou de neuromyélite optique, vascularites, lupus grave',
      voie: 'IV (perfusion de 1 à 3 h)',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[3, 5, 'jours']],
      rem: 'Surveiller la glycémie, la tension et la kaliémie.',
    }),
    p('adulte', '40–80 mg IV par jour', {
      ind: 'Asthme aigu grave, BPCO exacerbée',
      voie: 'IV',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[5, null, 'jours']],
    }),
    p('enfant', '30 mg/kg/j IV (maximum 1 g)', {
      ind: 'Bolus : maladies inflammatoires sévères (avis spécialisé)',
      voie: 'IV',
      kg: 30,
      max: 1000,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[3, null, 'jours']],
    }),
    p('enfant', '1–2 mg/kg/j IV', {
      ind: 'Asthme aigu grave',
      voie: 'IV',
      kg: 1,
      max: 60,
      base: 'par_jour',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Valproate de sodium
  'valproate-de-sodium-acide-valproique': [
    p('adulte', '500 mg/j en 2 prises, augmenter jusqu’à 1 000–2 000 mg/j (20–30 mg/kg/j)', {
      ind: 'Épilepsies, trouble bipolaire',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Bilan hépatique avant et pendant les 6 premiers mois. Contre-indiqué chez la femme en âge de procréer sans contraception efficace.',
    }),
    p('enfant', '10–15 mg/kg/j en 2 prises, augmenter jusqu’à 20–30 mg/kg/j', {
      ind: 'Épilepsies, absences',
      voie: 'Orale',
      kg: 15,
      max: 2000,
      base: 'par_jour',
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('grossesse', 'Contre-indiqué (malformations, troubles du neurodéveloppement)', {
      sec: 'contre_indique',
      rem: 'Ne pas arrêter brutalement : avis spécialisé pour le changement de traitement.',
    }),
  ],

  // ------------------------------------------------------------ Tramadol
  tramadol: [
    p('adulte', '50–100 mg toutes les 4 à 6 h (maximum 400 mg/j)', {
      ind: 'Douleur modérée à intense',
      voie: 'Orale ou IV',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      rem: 'Sujet âgé : maximum 300 mg/j. Risque de convulsions et de syndrome sérotoninergique (associations).',
    }),
    p(
      'enfant',
      'Déconseillé avant 12 ans ; après 12 ans : 1–2 mg/kg toutes les 6 h (maximum 100 mg par prise)',
      {
        ind: 'Douleur modérée (adolescent)',
        voie: 'Orale',
        kg: 1,
        max: 100,
        freq: 'Toutes les 6 h',
        f: { h: 6 },
        sec: 'prudence',
        rem: 'Les recommandations de l’OMS sur la douleur de l’enfant ne retiennent pas le tramadol.',
      },
    ),
    p('grossesse', 'À éviter ; usage ponctuel si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Bupivacaïne
  bupivacaine: [
    p('adulte', 'Infiltration ou bloc : 2 mg/kg au maximum (150 mg sans adrénaline)', {
      ind: 'Anesthésie locorégionale, infiltration de la plaie',
      voie: 'Infiltration, bloc nerveux',
      kg: 2,
      max: 150,
      freq: 'Dose totale par acte',
      f: 'unique',
      rem: 'Jamais en IV (toxicité cardiaque). Aspirer avant d’injecter.',
    }),
    p('enfant', '2 mg/kg au maximum par acte', {
      ind: 'Anesthésie locorégionale (anesthésiste)',
      voie: 'Infiltration, bloc',
      kg: 2,
      max: 150,
      f: 'unique',
      sec: 'prudence',
    }),
    p('grossesse', 'Rachianesthésie pour césarienne : 8–12 mg de bupivacaïne hyperbare 0,5 % (1,6–2,4 mL)', {
      ind: 'Césarienne',
      voie: 'Intrathécale',
      f: 'unique',
      sec: 'autorise',
    }),
  ],

  // ------------------------------------------------------------ Ivermectine
  ivermectine: [
    p('adulte', '0,15 mg/kg (150 µg/kg) en dose unique, tous les 6 à 12 mois', {
      ind: 'Onchocercose, filariose lymphatique (avec albendazole)',
      voie: 'Orale',
      kg: 0.15,
      freq: 'Dose unique',
      f: 'unique',
      rem: 'Zone de loase : rechercher une microfilarémie élevée avant traitement (risque d’encéphalopathie).',
    }),
    p('adulte', '0,2 mg/kg (200 µg/kg) en dose unique, à répéter à J8–J14', {
      ind: 'Gale, strongyloïdose (1 à 2 jours)',
      voie: 'Orale',
      kg: 0.2,
      freq: 'Dose unique, renouvelée',
      f: 'unique',
    }),
    p('enfant', 'Mêmes doses par kg à partir de 15 kg', {
      ind: 'Onchocercose, gale, strongyloïdose',
      voie: 'Orale',
      kg: 0.2,
      f: 'unique',
      sec: 'prudence',
      rem: 'Non recommandée chez l’enfant de moins de 15 kg.',
    }),
    p('grossesse', 'Exclue des traitements de masse ; à éviter', { sec: 'contre_indique' }),
  ],
};
