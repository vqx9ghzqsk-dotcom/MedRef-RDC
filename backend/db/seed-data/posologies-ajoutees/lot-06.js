'use strict';

/**
 * Posologies — lot 6 : molécules 101 à 120 les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, planification familiale, vaccination),
 * MSF Guide clinique et thérapeutique et Médicaments essentiels, notices.
 * Chimiothérapies et biothérapies : doses en mg/m² indicatives, protocole spécialisé obligatoire.
 * Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Nystatine
  nystatine: [
    p(
      'enfant',
      '100 000 UI 4 fois par jour dans la bouche, après les tétées ou les repas (nourrisson : 100 000 UI ; enfant : 100 000–500 000 UI)',
      {
        ind: 'Candidose buccale (muguet)',
        voie: 'Buccale (suspension)',
        unite: 'UI',
        freq: '4 fois par jour',
        f: { n: 4 },
        durees: [[7, null, 'jours', 'Poursuivre 48 h après la guérison']],
      },
    ),
    p('nouveau_ne', '100 000 UI 4 fois par jour dans la bouche', {
      ind: 'Muguet néonatal',
      voie: 'Buccale',
      unite: 'UI',
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[7, null, 'jours']],
      rem: 'Traiter aussi les mamelons de la mère si allaitement.',
    }),
    p('adulte', '400 000–600 000 UI 4 fois par jour ; ovule de 100 000 UI le soir pendant 14 jours', {
      ind: 'Candidose buccale, candidose vaginale',
      voie: 'Buccale ou vaginale',
      unite: 'UI',
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[7, 14, 'jours']],
    }),
    p('grossesse', 'Utilisable (non absorbée)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Oxyde de zinc (pommade)
  'oxyde-de-zinc-pommade': [
    p('enfant', 'Application en couche épaisse à chaque change', {
      ind: 'Érythème fessier, protection cutanée',
      voie: 'Cutanée',
      unite: 'application',
      freq: 'À chaque change',
      f: 'schema',
      rem: 'Changes fréquents, séchage ; si candidose associée, antifongique local.',
    }),
    p('adulte', '1 à 3 applications par jour', {
      ind: 'Dermite irritative, protection de la peau péristomiale ou périanale, escarre débutante',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 3 fois par jour',
      f: { n: 3 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Paroxétine
  paroxetine: [
    p(
      'adulte',
      '20 mg/j le matin, augmenter par paliers de 10 mg (maximum 50 mg/j ; 40 mg/j chez le sujet âgé)',
      {
        ind: 'Dépression, troubles anxieux (panique, anxiété généralisée, TOC, stress post-traumatique)',
        voie: 'Orale',
        freq: '1 fois par jour',
        f: { n: 1 },
        durees: [[6, 12, 'mois', 'Après rémission']],
        rem: 'Arrêt très progressif (syndrome de sevrage marqué). Risque suicidaire en début de traitement chez le jeune.',
      },
    ),
    p('grossesse', 'À éviter (malformations cardiaques au 1er trimestre) : préférer la sertraline', {
      sec: 'contre_indique',
    }),
  ],

  // ------------------------------------------------------------ Pyriméthamine
  pyrimethamine: [
    p(
      'adulte',
      '200 mg le 1er jour, puis 50 mg/j (< 60 kg) ou 75 mg/j (≥ 60 kg), avec sulfadiazine et acide folinique',
      {
        ind: 'Toxoplasmose cérébrale (VIH), toxoplasmose oculaire',
        voie: 'Orale',
        freq: '1 fois par jour',
        f: { n: 1 },
        durees: [[6, null, 'semaines', 'Puis prophylaxie secondaire']],
        rem: 'Acide folinique 10–25 mg/j obligatoire ; NFS chaque semaine. Alternative : cotrimoxazole à forte dose.',
      },
    ),
    p(
      'enfant',
      '1 mg/kg/j (maximum 25 mg/j) après une dose de charge de 2 mg/kg/j pendant 2 jours, avec sulfadiazine et acide folinique',
      {
        ind: 'Toxoplasmose congénitale',
        voie: 'Orale',
        kg: 1,
        max: 25,
        base: 'par_jour',
        freq: '1 fois par jour',
        f: { n: 1 },
        durees: [[12, null, 'mois']],
        sec: 'prudence',
      },
    ),
    p(
      'grossesse',
      'Contre-indiquée au 1er trimestre ; ensuite possible si atteinte fœtale (avis spécialisé)',
      {
        sec: 'prudence',
      },
    ),
  ],

  // ------------------------------------------------------------ Rituximab
  rituximab: [
    p('adulte', '375 mg/m² IV par cure, selon le protocole (lymphome : avec CHOP toutes les 3 semaines)', {
      ind: 'Lymphomes B CD20+, leucémie lymphoïde chronique',
      voie: 'IV (débit progressif)',
      f: 'schema',
      rem: 'Prémédication (paracétamol, antihistaminique, corticoïde). Dépister l’hépatite B (réactivation).',
    }),
    p('adulte', '1 g IV à J1 et J15, à répéter selon l’évolution', {
      ind: 'Polyarthrite rhumatoïde, vascularites, maladies auto-immunes (avis spécialisé)',
      voie: 'IV',
      unite: 'g',
      f: 'schema',
    }),
    p('grossesse', 'À éviter (déplétion B néonatale)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Sulfadiazine argentique
  'sulfadiazine-argentique': [
    p('adulte', 'Crème à 1 % : couche de 3–5 mm sur la brûlure, 1 à 2 fois par jour, sous pansement', {
      ind: 'Brûlures du 2e et du 3e degré, plaies infectées',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 2 fois par jour, à chaque pansement',
      f: { n: 1 },
      rem: 'Retirer les résidus à chaque pansement. Leucopénie transitoire si grande surface.',
    }),
    p('enfant', 'Même utilisation que l’adulte (≥ 2 mois)', {
      ind: 'Brûlures',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Contre-indiquée chez le nouveau-né et avant 2 mois (ictère nucléaire).',
    }),
    p('grossesse', 'À éviter en fin de grossesse et sur de grandes surfaces', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Triamcinolone
  triamcinolone: [
    p(
      'adulte',
      'Infiltration : 10–40 mg selon l’articulation (grosse articulation 40 mg) ; intralésionnel : 2,5–10 mg/mL',
      {
        ind: 'Arthrite inflammatoire, ténosynovite, chéloïdes',
        voie: 'Intra-articulaire ou intralésionnelle',
        f: 'unique',
        rem: 'Pas plus de 3 à 4 infiltrations par an dans la même articulation. Asepsie stricte.',
      },
    ),
    p('adulte', 'Pâte buccale à 0,1 % : 2 à 3 applications par jour', {
      ind: 'Aphtes, lésions buccales inflammatoires',
      voie: 'Buccale',
      unite: 'application',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      durees: [[5, 7, 'jours']],
    }),
    p(
      'enfant',
      'Infiltration intra-articulaire selon le poids (hexacétonide 1 mg/kg pour un genou ; avis spécialisé)',
      {
        ind: 'Arthrite juvénile idiopathique',
        voie: 'Intra-articulaire',
        kg: 1,
        max: 40,
        f: 'unique',
        sec: 'prudence',
      },
    ),
    p('grossesse', 'Usage local ponctuel possible', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Trihexyphénidyle
  trihexyphenidyle: [
    p('adulte', '1 mg/j, augmenter de 2 mg tous les 3 à 5 jours jusqu’à 6–10 mg/j en 3 prises', {
      ind: 'Syndrome parkinsonien et effets extrapyramidaux des neuroleptiques',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      rem: 'Effets anticholinergiques (confusion chez le sujet âgé, rétention urinaire, glaucome). Mésusage possible.',
    }),
    p('enfant', 'Dystonie : débuter à 1–2 mg/j, augmentation lente (avis spécialisé)', {
      ind: 'Dystonie (paralysie cérébrale)',
      voie: 'Orale',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Vaccin papillomavirus (HPV)
  'vaccin-papillomavirus-hpv': [
    p('enfant', '0,5 mL IM : 1 ou 2 doses chez la fille de 9 à 14 ans (selon le programme national)', {
      ind: 'Prévention du cancer du col de l’utérus',
      voie: 'IM (deltoïde)',
      unite: 'mL',
      f: 'schema',
      rem: 'L’OMS admet un schéma à dose unique de 9 à 20 ans. Immunodéprimées (VIH) : 3 doses.',
    }),
    p('adulte', '0,5 mL IM : 1 à 2 doses jusqu’à 20 ans, 2 doses ensuite (selon le programme)', {
      ind: 'Rattrapage, femme vivant avec le VIH',
      voie: 'IM',
      unite: 'mL',
      f: 'schema',
    }),
    p('grossesse', 'Reporter après la grossesse', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Acide méfénamique
  'acide-mefenamique': [
    p('adulte', '500 mg 3 fois par jour, au cours du repas', {
      ind: 'Dysménorrhée, ménorragies, douleurs',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[3, 5, 'jours', 'Pendant les règles']],
    }),
    p('enfant', '> 12 ans : même dose que l’adulte', {
      ind: 'Dysménorrhée de l’adolescente',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[3, null, 'jours']],
    }),
    p('grossesse', 'Contre-indiqué à partir de 20 SA ; éviter avant', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Albumine humaine
  'albumine-humaine': [
    p('adulte', '6–8 g d’albumine par litre d’ascite évacué au-delà de 5 L', {
      ind: 'Paracentèse évacuatrice de grand volume',
      voie: 'IV',
      unite: 'g',
      f: 'unique',
    }),
    p('adulte', '1,5 g/kg à J1 puis 1 g/kg à J3 (avec antibiotique)', {
      ind: 'Infection spontanée du liquide d’ascite ; syndrome hépatorénal (1 g/kg/j avec un vasoconstricteur)',
      voie: 'IV',
      kg: 1.5,
      max: 100,
      unite: 'g',
      f: 'schema',
    }),
    p('enfant', '0,5–1 g/kg IV en 2 à 4 h (albumine 20 %), avec furosémide', {
      ind: 'Syndrome néphrotique avec œdèmes réfractaires ou hypovolémie',
      voie: 'IV',
      kg: 1,
      unite: 'g',
      f: 'unique',
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Charbon activé
  'charbon-active': [
    p('adulte', '50 g per os ou par sonde gastrique, dans l’heure suivant l’ingestion', {
      ind: 'Intoxication médicamenteuse par voie orale (substance adsorbable)',
      voie: 'Orale ou sonde gastrique',
      unite: 'g',
      f: 'unique',
      rem: 'Inutile pour les caustiques, hydrocarbures, alcools, fer, lithium. Voies aériennes protégées. Doses répétées (25 g toutes les 4 h) pour certains toxiques (carbamazépine, phénobarbital, quinine).',
    }),
    p('enfant', '1 g/kg (maximum 50 g)', {
      ind: 'Intoxication par voie orale',
      voie: 'Orale ou sonde gastrique',
      kg: 1,
      max: 50,
      unite: 'g',
      f: 'unique',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Clotrimazole
  clotrimazole: [
    p('adulte', 'Crème à 1 % : 2 à 3 applications par jour', {
      ind: 'Dermatophyties, candidoses cutanées, pityriasis versicolor',
      voie: 'Cutanée',
      unite: 'application',
      freq: '2 à 3 fois par jour',
      f: { n: 2 },
      durees: [[2, 4, 'semaines']],
    }),
    p('adulte', 'Comprimé vaginal 500 mg en dose unique (ou 200 mg/j pendant 3 jours)', {
      ind: 'Candidose vaginale',
      voie: 'Vaginale',
      f: 'unique',
    }),
    p('enfant', 'Crème : 2 à 3 applications par jour', {
      ind: 'Dermatophyties, érythème fessier candidosique',
      voie: 'Cutanée',
      unite: 'application',
      freq: '2 à 3 fois par jour',
      f: { n: 2 },
      durees: [[2, 4, 'semaines']],
    }),
    p('grossesse', 'Utilisable (voie vaginale : sans applicateur en fin de grossesse)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Dydrogestérone
  dydrogesterone: [
    p('adulte', '10 mg 1 à 2 fois par jour du 11e au 25e jour du cycle', {
      ind: 'Troubles du cycle, endométriose, insuffisance lutéale, traitement hormonal de la ménopause (avec estrogène)',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
      durees: [[14, null, 'jours', 'Par cycle']],
    }),
    p(
      'grossesse',
      'Menace d’avortement : 40 mg puis 10 mg toutes les 8 h (preuves limitées, avis spécialisé)',
      {
        sec: 'prudence',
      },
    ),
  ],

  // ------------------------------------------------------------ Étonogestrel (implant)
  etonogestrel: [
    p('adulte', '1 implant de 68 mg en sous-cutané à la face interne du bras, efficace 3 ans', {
      ind: 'Contraception de longue durée',
      voie: 'Sous-cutanée (insertion par un prestataire formé)',
      unite: 'implant',
      f: 'unique',
      rem: 'Pose entre J1 et J5 du cycle (sinon préservatif 7 jours). Efficacité réduite avec les inducteurs enzymatiques (rifampicine, éfavirenz). Saignements irréguliers fréquents.',
    }),
    p('enfant', 'Adolescente : même utilisation que l’adulte', {
      ind: 'Contraception de l’adolescente',
      voie: 'Sous-cutanée',
      unite: 'implant',
      f: 'unique',
    }),
    p('grossesse', 'Sans objet (retirer si grossesse)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Glucagon
  glucagon: [
    p('adulte', '1 mg IM, SC ou IV', {
      ind: 'Hypoglycémie sévère sans accès veineux (patient sous insuline)',
      voie: 'IM, SC ou IV',
      f: 'unique',
      rem: 'Inefficace si réserves en glycogène épuisées (jeûne, alcool). Resucrer per os dès le réveil.',
    }),
    p('adulte', '3–10 mg IV en bolus puis 1–5 mg/h', {
      ind: 'Intoxication aux bêtabloquants',
      voie: 'IV',
      f: 'schema',
    }),
    p('enfant', '0,5 mg (< 25 kg ou < 8 ans) ou 1 mg (≥ 25 kg) IM, SC ou IV', {
      ind: 'Hypoglycémie sévère',
      voie: 'IM, SC ou IV',
      f: 'unique',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Glucose (soluté)
  'glucose-solute': [
    p(
      'adulte',
      'Glucose 10 % : 150–200 mL IV (ou 50 mL de glucose 50 % dilué), puis perfusion de glucose 5–10 %',
      {
        ind: 'Hypoglycémie sévère',
        voie: 'IV',
        unite: 'mL',
        f: 'schema',
        rem: 'Thiamine avant le glucose chez l’alcoolique ou le dénutri. Contrôle glycémique à 15 min.',
      },
    ),
    p('enfant', 'Glucose 10 % : 2–5 mL/kg IV, puis perfusion de glucose', {
      ind: 'Hypoglycémie (paludisme grave, malnutrition, sepsis)',
      voie: 'IV ou intra-osseuse',
      kg: 5,
      unite: 'mL',
      f: 'schema',
      rem: 'Sans voie veineuse : 0,5–1 mL/kg de glucose 50 % ou sucre sous la langue.',
    }),
    p('nouveau_ne', 'Glucose 10 % : 2 mL/kg IV, puis 60–80 mL/kg/j de glucose 10 %', {
      ind: 'Hypoglycémie néonatale',
      voie: 'IV',
      kg: 2,
      unite: 'mL',
      f: 'schema',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Hydroxychloroquine
  hydroxychloroquine: [
    p('adulte', '200–400 mg/j (maximum 5 mg/kg/j de poids réel)', {
      ind: 'Lupus, polyarthrite rhumatoïde, syndrome de Sjögren',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      rem: 'Bilan ophtalmologique initial puis annuel après 5 ans (rétinopathie). Allongement du QT.',
    }),
    p('enfant', '5 mg/kg/j (maximum 400 mg/j)', {
      ind: 'Lupus, arthrite juvénile (avis spécialisé)',
      voie: 'Orale',
      kg: 5,
      max: 400,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable ; poursuivre en cas de lupus', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Paclitaxel
  paclitaxel: [
    p('adulte', '175 mg/m² IV en 3 h toutes les 3 semaines, ou 80 mg/m² par semaine, selon le protocole', {
      ind: 'Cancers du sein, de l’ovaire, du poumon, du col ; sarcome de Kaposi',
      voie: 'IV',
      f: 'schema',
      rem: 'Prémédication (corticoïde, antihistaminique, anti-H2) contre l’hypersensibilité. Neuropathie, myélosuppression.',
    }),
    p('grossesse', 'Contre-indiqué au 1er trimestre', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Rivaroxaban
  rivaroxaban: [
    p('adulte', '15 mg 2 fois par jour pendant 21 jours, puis 20 mg/j au repas', {
      ind: 'Thrombose veineuse profonde, embolie pulmonaire',
      voie: 'Orale, au cours du repas',
      freq: '2 fois par jour, puis 1 fois par jour',
      f: 'schema',
      durees: [[3, 6, 'mois']],
    }),
    p('adulte', '20 mg/j (15 mg/j si clairance de la créatinine 15–49 mL/min)', {
      ind: 'Fibrillation atriale non valvulaire',
      voie: 'Orale, au cours du repas',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Non indiqué pour les valves mécaniques.',
    }),
    p('grossesse', 'Contre-indiqué : utiliser une héparine', { sec: 'contre_indique' }),
  ],
};
