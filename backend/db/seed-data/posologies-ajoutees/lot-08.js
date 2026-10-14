'use strict';

/**
 * Posologies — lot 8 : molécules 141 à 160 les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, PEV, IST), MSF Guide clinique et
 * thérapeutique et Médicaments essentiels, notices. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Noréthistérone
  norethisterone: [
    p(
      'adulte',
      '5 mg 3 fois par jour pendant 10 jours, puis 5 mg 2 fois par jour du 5e au 25e jour des cycles suivants',
      {
        ind: 'Saignements utérins anormaux, ménorragies',
        voie: 'Orale',
        freq: '2 à 3 fois par jour',
        f: { n: 3 },
        durees: [[10, null, 'jours', 'Arrêt du saignement']],
        rem: 'Report des règles : 5 mg 3 fois par jour à débuter 3 jours avant. Énanthate injectable (200 mg IM tous les 2 mois) : contraception.',
      },
    ),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Octréotide
  octreotide: [
    p('adulte', '50 µg IV en bolus puis 25–50 µg/h en perfusion continue', {
      ind: 'Hémorragie par rupture de varices œsophagiennes (avec endoscopie et antibioprophylaxie)',
      voie: 'IV',
      unite: 'µg',
      f: 'perfusion',
      durees: [[2, 5, 'jours']],
    }),
    p('adulte', '50–100 µg SC 2 à 3 fois par jour', {
      ind: 'Tumeurs neuroendocrines, acromégalie, fistules digestives, vomissements de l’occlusion en soins palliatifs',
      voie: 'SC',
      unite: 'µg',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
    }),
    p('enfant', '1 µg/kg IV en bolus puis 1 µg/kg/h (avis spécialisé)', {
      ind: 'Hémorragie variqueuse, hyperinsulinisme',
      voie: 'IV',
      kg: 1,
      max: 50,
      unite: 'µg',
      f: 'perfusion',
      sec: 'prudence',
    }),
    p('grossesse', 'Si nécessaire uniquement', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Ofloxacine
  ofloxacine: [
    p('adulte', '200–400 mg 2 fois par jour', {
      ind: 'Infections urinaires, prostatite, typhoïde, urétrite, orchi-épididymite',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [
        [7, 14, 'jours', 'Typhoïde, pyélonéphrite', true],
        [14, 28, 'jours', 'Prostatite, orchi-épididymite'],
      ],
      rem: 'Tendinopathies, allongement du QT ; à distance des antiacides et du fer.',
    }),
    p('adulte', 'Collyre ou gouttes auriculaires à 0,3 % : 1 à 2 gouttes 3 à 4 fois par jour', {
      ind: 'Conjonctivite bactérienne, ulcère cornéen, otite externe, otite chronique perforée',
      voie: 'Ophtalmique ou auriculaire',
      unite: 'goutte',
      freq: '3 à 4 fois par jour',
      f: { n: 4 },
      durees: [[7, 10, 'jours']],
    }),
    p('enfant', 'Voie orale à éviter (sauf absence d’alternative) ; gouttes utilisables', {
      ind: 'Otite chronique, conjonctivite',
      voie: 'Auriculaire ou ophtalmique',
      unite: 'goutte',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('grossesse', 'Voie orale à éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Phloroglucinol
  phloroglucinol: [
    p('adulte', '80–160 mg 3 fois par jour per os ; 40–80 mg IV ou IM', {
      ind: 'Douleurs spasmodiques digestives, biliaires, urinaires et gynécologiques',
      voie: 'Orale, IV ou IM',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[1, 5, 'jours']],
    }),
    p('enfant', '≥ 2 ans : 6 mg/kg/j en 2 à 3 prises', {
      ind: 'Douleurs spasmodiques',
      voie: 'Orale',
      kg: 2,
      max: 80,
      freq: '3 fois par jour',
      f: { n: 3 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Pipéracilline (+ tazobactam)
  piperacilline: [
    p('adulte', 'Pipéracilline-tazobactam 4 g/0,5 g IV toutes les 6 à 8 h', {
      ind: 'Infections nosocomiales graves, neutropénie fébrile, infections intra-abdominales, Pseudomonas',
      voie: 'IV (perfusion de 30 min ou prolongée)',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      durees: [[7, 14, 'jours']],
      rem: 'Adapter à la fonction rénale.',
    }),
    p('enfant', '90 mg/kg de pipéracilline IV toutes les 6 à 8 h (maximum 4 g par dose)', {
      ind: 'Infections graves, neutropénie fébrile',
      voie: 'IV',
      kg: 90,
      max: 4000,
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      durees: [[7, 14, 'jours']],
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Sulfadiazine
  sulfadiazine: [
    p('adulte', '1 g (< 60 kg) ou 1,5 g (≥ 60 kg) 4 fois par jour, avec pyriméthamine et acide folinique', {
      ind: 'Toxoplasmose cérébrale ou oculaire',
      voie: 'Orale',
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[6, null, 'semaines', 'Puis prophylaxie secondaire']],
      rem: 'Boire au moins 2 L/j (cristallurie). Allergie aux sulfamides : contre-indiqué.',
    }),
    p('enfant', '50 mg/kg 2 fois par jour, avec pyriméthamine et acide folinique', {
      ind: 'Toxoplasmose congénitale',
      voie: 'Orale',
      kg: 50,
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[12, null, 'mois']],
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable avec la pyriméthamine après 18 SA si infection fœtale ; éviter à terme', {
      sec: 'prudence',
    }),
  ],

  // ------------------------------------------------------------ Testostérone
  testosterone: [
    p('adulte', 'Énanthate : 250 mg IM toutes les 3 à 4 semaines ; gel : 50 mg/j', {
      ind: 'Hypogonadisme masculin confirmé',
      voie: 'IM ou cutanée',
      f: 'schema',
      rem: 'Hématocrite, PSA, bilan lipidique. Contre-indiqué si cancer de la prostate ou du sein.',
    }),
    p('enfant', 'Induction pubertaire : 50 mg IM par mois, augmenter progressivement (avis spécialisé)', {
      ind: 'Retard pubertaire, hypogonadisme',
      voie: 'IM',
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiqué (virilisation fœtale)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Tinidazole
  tinidazole: [
    p('adulte', '2 g en dose unique', {
      ind: 'Trichomonase, vaginose bactérienne, giardiase, amibiase intestinale (2 g/j pendant 3 jours)',
      voie: 'Orale, au cours du repas',
      f: 'unique',
      rem: 'Effet antabuse : pas d’alcool pendant 72 h. Traiter le partenaire (trichomonase).',
    }),
    p('enfant', '50 mg/kg en dose unique (maximum 2 g)', {
      ind: 'Giardiase, amibiase intestinale (3 jours)',
      voie: 'Orale',
      kg: 50,
      max: 2000,
      f: 'unique',
    }),
    p('grossesse', 'À éviter au 1er trimestre ; préférer le métronidazole', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Topiramate
  topiramate: [
    p(
      'adulte',
      '25 mg/j, augmenter de 25–50 mg par semaine jusqu’à 100–200 mg/j en 2 prises (épilepsie : maximum 400 mg/j)',
      {
        ind: 'Épilepsies, prévention de la migraine (50–100 mg/j)',
        voie: 'Orale',
        freq: '2 fois par jour',
        f: { n: 2 },
        rem: 'Lithiase rénale, troubles cognitifs, perte de poids, glaucome aigu. Diminue l’efficacité de la pilule.',
      },
    ),
    p('enfant', '≥ 2 ans : 0,5–1 mg/kg/j, augmenter progressivement jusqu’à 5–9 mg/kg/j en 2 prises', {
      ind: 'Épilepsies (association)',
      voie: 'Orale',
      kg: 1,
      base: 'par_jour',
      freq: '2 fois par jour',
      f: { n: 2 },
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter (fentes labiopalatines, petit poids)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Toxine botulinique de type A
  'toxine-botulinique-type-a': [
    p(
      'adulte',
      'Dose en unités selon la spécialité et le muscle injecté (par exemple 100–300 U au total pour la spasticité d’un membre)',
      {
        ind: 'Spasticité focale, dystonies, blépharospasme, hyperactivité vésicale, hyperhidrose',
        voie: 'IM ou intradétrusorienne (médecin formé)',
        unite: 'U',
        f: 'schema',
        rem: 'Unités non interchangeables entre spécialités. Effet en 1 à 2 semaines, dure 3 à 4 mois.',
      },
    ),
    p(
      'enfant',
      'Spasticité (paralysie cérébrale) : selon le muscle et le poids, en unités/kg (avis spécialisé)',
      {
        ind: 'Spasticité de l’enfant',
        voie: 'IM',
        unite: 'U',
        f: 'schema',
        sec: 'prudence',
      },
    ),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Vaccin pentavalent
  'vaccin-pentavalent': [
    p('enfant', '0,5 mL IM à 6, 10 et 14 semaines', {
      ind: 'Vaccination de routine (diphtérie, tétanos, coqueluche, hépatite B, Haemophilus influenzae b)',
      voie: 'IM (face antérolatérale de la cuisse)',
      unite: 'mL',
      f: 'schema',
      rem: 'Intervalle minimal de 4 semaines entre les doses. Rattrapage possible. Rappels DTC selon le calendrier national.',
    }),
  ],

  // ------------------------------------------------------------ Vaccin rougeole-rubéole
  'vaccin-rougeole-rubeole': [
    p('enfant', '0,5 mL SC à 9 mois, 2e dose à 15–18 mois', {
      ind: 'Vaccination de routine et campagnes (riposte aux épidémies dès 6 mois)',
      voie: 'SC (ou IM)',
      unite: 'mL',
      f: 'schema',
      rem: 'Vaccin vivant : contre-indiqué si immunodépression sévère. Vitamine A associée en campagne selon le programme.',
    }),
    p('adulte', '0,5 mL SC en dose unique (femme en âge de procréer non immune)', {
      ind: 'Rattrapage, prévention de la rubéole congénitale',
      voie: 'SC',
      unite: 'mL',
      f: 'unique',
      rem: 'Éviter une grossesse dans le mois qui suit.',
    }),
    p('grossesse', 'Contre-indiqué (vaccin vivant)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Valaciclovir
  valaciclovir: [
    p('adulte', '1 g 3 fois par jour', {
      ind: 'Zona (dans les 72 h)',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[7, null, 'jours']],
    }),
    p('adulte', '500 mg–1 g 2 fois par jour', {
      ind: 'Herpès génital',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [
        [7, 10, 'jours', 'Primo-infection', true],
        [3, 5, 'jours', 'Récurrence'],
      ],
      rem: 'Prévention des récurrences : 500 mg/j. Herpès labial : 2 g 2 fois sur 1 jour. Adapter à la fonction rénale.',
    }),
    p('enfant', '≥ 12 ans : dose adulte ; avant : 20 mg/kg 3 fois par jour (maximum 1 g par prise)', {
      ind: 'Varicelle, zona, herpès',
      voie: 'Orale',
      kg: 20,
      max: 1000,
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[5, 7, 'jours']],
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Acide alendronique
  'acide-alendronique': [
    p('adulte', '70 mg une fois par semaine (ou 10 mg/j)', {
      ind: 'Ostéoporose post-ménopausique, ostéoporose cortisonique, ostéoporose masculine',
      voie: 'Orale',
      freq: '1 fois par semaine',
      f: 'schema',
      durees: [[5, null, 'mois', 'Réévaluer à 5 ans']],
      rem: 'À jeun avec un grand verre d’eau, rester debout 30 min. Calcium et vitamine D. Bilan dentaire avant.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Acide fusidique
  'acide-fusidique': [
    p('adulte', 'Crème à 2 % : 2 à 3 applications par jour', {
      ind: 'Impétigo localisé, infections cutanées superficielles à staphylocoque',
      voie: 'Cutanée',
      unite: 'application',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      durees: [[5, 7, 'jours']],
      rem: 'Durée courte (résistances).',
    }),
    p('enfant', 'Crème à 2 % : 2 à 3 applications par jour ; collyre : 1 goutte 2 fois par jour', {
      ind: 'Impétigo localisé, conjonctivite bactérienne',
      voie: 'Cutanée ou ophtalmique',
      unite: 'application',
      freq: '2 à 3 fois par jour',
      f: { n: 2 },
      durees: [[5, 7, 'jours']],
    }),
    p('grossesse', 'Usage local utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Amiodarone
  amiodarone: [
    p('adulte', '300 mg IV après le 3e choc, puis 150 mg après le 5e', {
      ind: 'Arrêt cardiaque en FV ou TV sans pouls',
      voie: 'IV',
      f: 'schema',
    }),
    p(
      'adulte',
      '5 mg/kg IV en 20 min à 2 h, puis 900–1 200 mg/24 h ; relais oral 200 mg 3 fois par jour pendant 1 semaine, puis 200 mg/j',
      {
        ind: 'Tachycardies ventriculaires, fibrillation atriale (réduction, contrôle)',
        voie: 'IV puis orale',
        kg: 5,
        max: 450,
        f: 'schema',
        rem: 'Thyroïde, foie, poumon, peau : surveillance. Interactions (warfarine, digoxine). Voie centrale de préférence.',
      },
    ),
    p('enfant', '5 mg/kg IV (arrêt cardiaque : bolus ; sinon en 20–60 min), maximum 300 mg', {
      ind: 'Arrêt cardiaque en rythme choquable, tachycardies graves (avis spécialisé)',
      voie: 'IV ou intra-osseuse',
      kg: 5,
      max: 300,
      f: 'schema',
    }),
    p('grossesse', 'À éviter (hypothyroïdie fœtale) sauf urgence vitale', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Calcitriol
  calcitriol: [
    p('adulte', '0,25 µg/j, augmenter selon la calcémie (0,5–1 µg/j)', {
      ind: 'Hypoparathyroïdie, ostéodystrophie rénale, rachitisme vitamino-résistant',
      voie: 'Orale',
      unite: 'µg',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Calcémie et phosphatémie régulières (hypercalcémie).',
    }),
    p('enfant', '0,01–0,05 µg/kg/j (avis spécialisé)', {
      ind: 'Hypoparathyroïdie, rachitisme hypophosphatémique, insuffisance rénale chronique',
      voie: 'Orale',
      kg: 0.02,
      base: 'par_jour',
      max: 1,
      unite: 'µg',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Si nécessaire, sous surveillance de la calcémie', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Carbonate de calcium
  'carbonate-de-calcium': [
    p('adulte', '1,25–2,5 g/j (500 mg–1 g de calcium élément) en 2 prises', {
      ind: 'Supplémentation calcique (ostéoporose, avec vitamine D)',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('adulte', '1–2 g au cours des repas, 3 fois par jour (selon la phosphatémie)', {
      ind: 'Chélateur du phosphore (insuffisance rénale chronique)',
      voie: 'Orale, au milieu des repas',
      freq: '3 fois par jour',
      f: { n: 3 },
      rem: 'Surveillance de la calcémie et de la phosphatémie.',
    }),
    p('enfant', '50 mg/kg/j de calcium élément en 3 prises (maximum 1 g/j)', {
      ind: 'Rachitisme, hypocalcémie chronique',
      voie: 'Orale',
      kg: 50,
      max: 1000,
      base: 'par_jour',
      unite: 'mg calcium élément',
      freq: '3 fois par jour',
      f: { n: 3 },
    }),
    p('grossesse', '1,5–2 g de calcium élément par jour (prévention de la pré-éclampsie)', {
      sec: 'autorise',
    }),
  ],

  // ------------------------------------------------------------ Céfuroxime
  cefuroxime: [
    p('adulte', '250–500 mg 2 fois par jour per os ; 750 mg–1,5 g IV toutes les 8 h', {
      ind: 'Infections respiratoires, ORL, urinaires, maladie de Lyme, antibioprophylaxie',
      voie: 'Orale (au repas) ou IV',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[5, 10, 'jours']],
    }),
    p(
      'enfant',
      '15 mg/kg 2 fois par jour per os (maximum 500 mg par prise) ; 25–50 mg/kg IV toutes les 8 h',
      {
        ind: 'Otite, sinusite, pneumonie',
        voie: 'Orale ou IV',
        kg: 15,
        max: 500,
        freq: '2 fois par jour',
        f: { n: 2 },
        durees: [[5, 10, 'jours']],
      },
    ),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],
};
