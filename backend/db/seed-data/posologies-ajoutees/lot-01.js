'use strict';

/**
 * Posologies — lot 1 : les 20 molécules les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, liste des médicaments essentiels, PEV), MSF Guide clinique et
 * thérapeutique et Médicaments essentiels, notices. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Oxygène
  oxygene: [
    p('adulte', 'Débit adapté pour une SpO2 ≥ 94 % (88–92 % en cas de BPCO)', {
      ind: 'Hypoxémie',
      voie: 'Lunettes nasales ou masque',
      unite: 'L/min',
      freq: 'En continu, selon la SpO2',
      f: 'perfusion',
      rem: 'Lunettes 1–5 L/min ; masque simple 5–10 L/min ; masque à réserve 10–15 L/min. Réévaluer la SpO2 régulièrement.',
    }),
    p('enfant', '1–2 L/min par lunettes nasales (0,5–1 L/min chez le nourrisson)', {
      ind: 'Hypoxémie (SpO2 < 90 %)',
      voie: 'Lunettes nasales',
      unite: 'L/min',
      freq: 'En continu, selon la SpO2',
      f: 'perfusion',
      rem: 'Objectif SpO2 ≥ 90 % (≥ 94 % en cas de signes d’urgence). Arrêt quand la SpO2 reste ≥ 90 % à l’air ambiant.',
    }),
    p('nouveau_ne', '0,5–1 L/min par lunettes nasales', {
      ind: 'Hypoxémie, détresse respiratoire',
      voie: 'Lunettes nasales',
      unite: 'L/min',
      freq: 'En continu, selon la SpO2',
      f: 'perfusion',
      rem: 'Objectif SpO2 90–95 % ; éviter l’hyperoxie chez le prématuré (rétinopathie).',
    }),
  ],

  // ------------------------------------------------------------ Lidocaïne
  lidocaine: [
    p('adulte', 'Anesthésie locale : 3 mg/kg au maximum (7 mg/kg avec adrénaline), sans dépasser 200 mg', {
      ind: 'Anesthésie locale ou locorégionale',
      voie: 'Infiltration',
      kg: 3,
      max: 200,
      freq: 'Dose totale par acte',
      f: 'unique',
      rem: 'Solution à 1 % = 10 mg/mL. Avec adrénaline : 7 mg/kg, maximum 500 mg (jamais aux extrémités). Aspirer avant d’injecter.',
    }),
    p('enfant', 'Anesthésie locale : 3 mg/kg au maximum (sans adrénaline)', {
      ind: 'Anesthésie locale',
      voie: 'Infiltration',
      kg: 3,
      max: 200,
      freq: 'Dose totale par acte',
      f: 'unique',
      rem: 'Solution à 1 % = 10 mg/mL : 0,3 mL/kg au maximum.',
    }),
    p('grossesse', 'Mêmes doses que l’adulte', { ind: 'Anesthésie locale', sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Énoxaparine
  enoxaparine: [
    p('adulte', '40 mg (4 000 UI) SC 1 fois par jour', {
      ind: 'Prévention de la maladie thromboembolique (risque élevé)',
      voie: 'SC',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [7, 10, 'jours', 'Chirurgie, immobilisation', true],
        [4, 6, 'semaines', 'Post-partum ou chirurgie orthopédique à haut risque'],
      ],
      rem: 'Clairance de la créatinine < 30 mL/min : 20 mg/j.',
    }),
    p('adulte', '1 mg/kg (100 UI/kg) SC toutes les 12 h', {
      ind: 'Traitement de la thrombose veineuse ou de l’embolie pulmonaire',
      voie: 'SC',
      kg: 1,
      freq: 'Toutes les 12 h',
      f: { h: 12 },
      durees: [[5, 10, 'jours', 'Jusqu’au relais par antivitamine K (INR 2–3 deux jours de suite)']],
      rem: 'Clairance < 30 mL/min : 1 mg/kg 1 fois par jour. Surveiller les plaquettes.',
    }),
    p('enfant', '1 mg/kg SC toutes les 12 h (≥ 2 mois)', {
      ind: 'Traitement d’une thrombose (avis spécialisé)',
      voie: 'SC',
      kg: 1,
      freq: 'Toutes les 12 h',
      f: { h: 12 },
      sec: 'prudence',
      rem: 'Avant 2 mois : 1,5 mg/kg toutes les 12 h. Surveillance de l’activité anti-Xa si possible.',
    }),
    p('grossesse', 'Mêmes doses que l’adulte (poids de début de grossesse)', {
      ind: 'Prévention et traitement de la thrombose',
      voie: 'SC',
      sec: 'autorise',
      rem: 'Anticoagulant de choix pendant la grossesse (ne traverse pas le placenta).',
    }),
  ],

  // ------------------------------------------------------------ Cloxacilline
  cloxacilline: [
    p('adulte', '1 g per os toutes les 6 à 8 h ; formes graves : 2 g IV toutes les 6 h', {
      ind: 'Infections à staphylocoque (peau, os, articulations)',
      voie: 'Orale ou IV',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      durees: [
        [7, 10, 'jours', 'Infection cutanée', true],
        [4, 6, 'semaines', 'Ostéomyélite, arthrite septique'],
      ],
      rem: 'Per os, à prendre à jeun (1 h avant le repas).',
    }),
    p(
      'enfant',
      '25 mg/kg toutes les 6 h (100 mg/kg/j) ; formes graves : jusqu’à 50 mg/kg toutes les 6 h IV',
      {
        ind: 'Infections à staphylocoque',
        voie: 'Orale ou IV',
        kg: 25,
        max: 2000,
        freq: 'Toutes les 6 h',
        f: { h: 6 },
        durees: [
          [7, 10, 'jours', 'Infection cutanée, pneumonie à staphylocoque', true],
          [3, 6, 'semaines', 'Ostéomyélite, arthrite septique'],
        ],
      },
    ),
    p('nouveau_ne', '25–50 mg/kg IV toutes les 12 h (< 7 jours) ou toutes les 8 h (≥ 7 jours)', {
      ind: 'Infection à staphylocoque',
      voie: 'IV',
      kg: 50,
      freq: 'Toutes les 12 h (< 7 j) ou 8 h (≥ 7 j)',
      f: 'schema',
    }),
    p('grossesse', 'Mêmes doses que l’adulte', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Fumarate ferreux (fer)
  'fumarate-ferreux-fer': [
    p('adulte', '120–200 mg de fer élément par jour en 2 prises (fumarate 200 mg = 65 mg de fer élément)', {
      ind: 'Anémie ferriprive',
      voie: 'Orale',
      unite: 'mg fer élément',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[3, null, 'mois', 'Poursuivre 3 mois après la normalisation de l’hémoglobine']],
      rem: 'Associer l’acide folique ; prendre à distance du thé, du lait et des antiacides.',
    }),
    p('enfant', '3 mg/kg/j de fer élément (jusqu’à 6 mg/kg/j) en 1 ou 2 prises', {
      ind: 'Anémie ferriprive',
      voie: 'Orale',
      kg: 3,
      max: 200,
      base: 'par_jour',
      unite: 'mg fer élément',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
      durees: [[3, null, 'mois', 'Poursuivre 3 mois après la normalisation de l’hémoglobine']],
      rem: 'Ne pas donner pendant la phase aiguë d’un paludisme ou d’une malnutrition aiguë sévère (attendre 2 semaines).',
    }),
    p(
      'grossesse',
      'Prévention : 60 mg de fer élément + 400 µg d’acide folique par jour ; traitement : 120 mg/j',
      {
        ind: 'Prévention et traitement de l’anémie',
        voie: 'Orale',
        unite: 'mg fer élément',
        freq: '1 fois par jour',
        f: { n: 1 },
        sec: 'autorise',
        rem: 'Supplémentation pendant toute la grossesse et 3 mois après l’accouchement (OMS).',
      },
    ),
  ],

  // ------------------------------------------------------------ Sertraline
  sertraline: [
    p('adulte', '50 mg/j, augmenter par paliers de 50 mg toutes les 1 à 2 semaines (maximum 200 mg/j)', {
      ind: 'Dépression, troubles anxieux, stress post-traumatique',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[6, 12, 'mois', 'Après la rémission']],
      rem: 'Débuter à 25 mg/j dans le trouble panique et chez le sujet âgé. Arrêt progressif.',
    }),
    p('enfant', 'TOC : 25 mg/j (6–12 ans) ou 50 mg/j (13–17 ans), augmentation lente (maximum 200 mg/j)', {
      ind: 'Trouble obsessionnel compulsif (avis spécialisé)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
      rem: 'Surveiller le risque suicidaire en début de traitement.',
    }),
    p('grossesse', 'Utilisable si nécessaire, à la dose minimale efficace', {
      sec: 'prudence',
      rem: 'ISRS de choix pendant la grossesse et l’allaitement ; surveiller le nouveau-né (adaptation).',
    }),
  ],

  // ------------------------------------------------------------ Kétamine
  ketamine: [
    p('adulte', 'Induction : 1–2 mg/kg IV lente (ou 4–8 mg/kg IM)', {
      ind: 'Anesthésie générale',
      voie: 'IV',
      kg: 2,
      freq: 'Induction, réinjections de 0,5–1 mg/kg',
      f: 'schema',
      rem: 'Personnel formé, matériel de ventilation. Associer une benzodiazépine pour limiter les hallucinations.',
    }),
    p('adulte', 'Analgésie : 0,15–0,3 mg/kg IV lente', {
      ind: 'Analgésie (gestes douloureux, épargne morphinique)',
      voie: 'IV',
      kg: 0.3,
      max: 30,
      freq: 'Dose unique, à renouveler si besoin',
      f: 'unique',
    }),
    p('enfant', 'Induction : 1–2 mg/kg IV lente (ou 4–8 mg/kg IM)', {
      ind: 'Anesthésie, sédation pour un geste',
      voie: 'IV',
      kg: 2,
      f: 'schema',
    }),
    p('grossesse', 'Mêmes doses que l’adulte', {
      sec: 'prudence',
      rem: 'Utilisée pour la césarienne en urgence si la rachianesthésie est impossible.',
    }),
  ],

  // ------------------------------------------------------------ Amitriptyline
  amitriptyline: [
    p('adulte', '10–25 mg le soir, augmenter progressivement (maximum 75 mg/j)', {
      ind: 'Douleurs neuropathiques, céphalée de tension chronique',
      voie: 'Orale',
      freq: '1 fois par jour, le soir',
      f: { n: 1 },
      rem: 'Sujet âgé : 10 mg le soir. Effets anticholinergiques.',
    }),
    p('adulte', '25–50 mg le soir, augmenter jusqu’à 75–150 mg/j', {
      ind: 'Dépression',
      voie: 'Orale',
      freq: '1 fois par jour, le soir',
      f: { n: 1 },
      durees: [[6, 12, 'mois', 'Après la rémission']],
      rem: 'Toxicité cardiaque grave en cas de surdosage : délivrance limitée si risque suicidaire.',
    }),
    p('enfant', 'Non recommandée avant 12 ans', { sec: 'contre_indique' }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Fluoxétine
  fluoxetine: [
    p('adulte', '20 mg/j le matin (maximum 60 mg/j)', {
      ind: 'Dépression, troubles anxieux, TOC',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[6, 12, 'mois', 'Après la rémission']],
      rem: 'Boulimie : 60 mg/j. Demi-vie longue : arrêt sans décroissance prolongée.',
    }),
    p('enfant', 'Dépression (≥ 8 ans) : 10 mg/j, puis 20 mg/j après 1 à 2 semaines', {
      ind: 'Dépression de l’enfant et de l’adolescent',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
      rem: 'Seul antidépresseur recommandé en première intention chez l’adolescent ; surveiller le risque suicidaire.',
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Acide clavulanique (amoxicilline + acide clavulanique)
  'acide-clavulanique': [
    p(
      'adulte',
      'Amoxicilline-acide clavulanique : 1 g (875/125 mg) 2 fois par jour ou 500/125 mg 3 fois par jour',
      {
        ind: 'Infections (morsures, sinusite, otite, infections respiratoires et urinaires)',
        voie: 'Orale',
        unite: 'mg amoxicilline',
        freq: '2 à 3 fois par jour',
        f: { n: 2 },
        durees: [[5, 7, 'jours']],
        rem: 'Dose exprimée en amoxicilline. Ne pas dépasser 375 mg/j d’acide clavulanique (diarrhée).',
      },
    ),
    p('enfant', '45–50 mg/kg/j d’amoxicilline en 2 prises (formulation 7:1 ou 8:1)', {
      ind: 'Infections ORL et respiratoires, morsures',
      voie: 'Orale',
      kg: 50,
      max: 3000,
      base: 'par_jour',
      unite: 'mg amoxicilline',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[5, 7, 'jours']],
      rem: 'Dose exprimée en amoxicilline ; acide clavulanique ≤ 12,5 mg/kg/j.',
    }),
    p('grossesse', 'Mêmes doses que l’adulte', {
      sec: 'prudence',
      rem: 'Éviter en cas de rupture prématurée des membranes.',
    }),
  ],

  // ------------------------------------------------------------ Adrénaline
  'adrenaline-epinephrine': [
    p('adulte', '0,5 mg IM (0,5 mL de la solution à 1 mg/mL) dans la face antérolatérale de la cuisse', {
      ind: 'Anaphylaxie',
      voie: 'IM',
      freq: 'À répéter après 5 min si besoin',
      f: 'unique',
    }),
    p('adulte', '1 mg IV ou intra-osseux toutes les 3 à 5 min', {
      ind: 'Arrêt cardiaque',
      voie: 'IV ou IO',
      freq: 'Toutes les 3 à 5 min',
      f: 'schema',
    }),
    p('enfant', '0,01 mg/kg IM (0,01 mL/kg de la solution à 1 mg/mL), maximum 0,5 mg', {
      ind: 'Anaphylaxie',
      voie: 'IM',
      kg: 0.01,
      max: 0.5,
      freq: 'À répéter après 5 à 15 min si besoin',
      f: 'unique',
    }),
    p('enfant', '0,01 mg/kg IV ou IO (0,1 mL/kg de la solution à 0,1 mg/mL) toutes les 3 à 5 min', {
      ind: 'Arrêt cardiaque',
      voie: 'IV ou IO',
      kg: 0.01,
      max: 1,
      freq: 'Toutes les 3 à 5 min',
      f: 'schema',
    }),
    p('nouveau_ne', '0,01–0,03 mg/kg IV (0,1–0,3 mL/kg de la solution à 0,1 mg/mL)', {
      ind: 'Réanimation en salle de naissance (FC < 60/min malgré ventilation et massage)',
      voie: 'IV (veine ombilicale)',
      kg: 0.01,
      freq: 'Toutes les 3 à 5 min',
      f: 'schema',
      rem: 'Le calcul affiche la dose basse (0,01 mg/kg) ; voie endotrachéale possible à 0,05–0,1 mg/kg.',
    }),
    p('grossesse', 'Mêmes doses que l’adulte en cas d’anaphylaxie', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Clindamycine
  clindamycine: [
    p('adulte', '600 mg IV toutes les 8 h ; per os 300–450 mg toutes les 6 à 8 h', {
      ind: 'Infections à anaérobies, fasciite nécrosante (avec pénicilline), allergie aux bêtalactamines',
      voie: 'IV ou orale',
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[7, 14, 'jours']],
    }),
    p('enfant', '10 mg/kg toutes les 8 h (maximum 600 mg par prise)', {
      ind: 'Infections à anaérobies ou à staphylocoque, allergie aux bêtalactamines',
      voie: 'Orale ou IV',
      kg: 10,
      max: 600,
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[7, 14, 'jours']],
    }),
    p('grossesse', 'Mêmes doses que l’adulte', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Anatoxines tétanique et diphtérique (Td)
  'anatoxines-tetanique-diphterique': [
    p('adulte', '0,5 mL IM par dose ; primovaccination 3 doses (J0, 1 mois, 6–12 mois) puis rappels', {
      ind: 'Vaccination antitétanique et antidiphtérique, plaie à risque',
      voie: 'IM',
      unite: 'mL',
      freq: 'Selon le calendrier',
      f: 'schema',
      rem: 'Plaie : 1 dose si la dernière date de plus de 10 ans (5 ans si plaie souillée) ; associer les immunoglobulines si vaccination incomplète.',
    }),
    p('enfant', '0,5 mL IM (Td à partir de 7 ans ; avant, vaccins combinés du PEV)', {
      ind: 'Rappel antitétanique',
      voie: 'IM',
      unite: 'mL',
      f: 'schema',
    }),
    p(
      'grossesse',
      '0,5 mL IM : 2 doses à 4 semaines d’intervalle chez la femme non vaccinée, la 2e au moins 2 semaines avant l’accouchement',
      {
        ind: 'Prévention du tétanos maternel et néonatal',
        voie: 'IM',
        unite: 'mL',
        f: 'schema',
        sec: 'autorise',
        rem: 'Puis rappels pour atteindre 5 doses au total (OMS).',
      },
    ),
  ],

  // ------------------------------------------------------------ Benzathine benzylpénicilline
  'benzathine-benzylpenicilline': [
    p('adulte', '2,4 MUI IM en dose unique (1,2 MUI dans chaque fesse)', {
      ind: 'Syphilis précoce (primaire, secondaire, latente < 2 ans)',
      voie: 'IM profonde',
      unite: 'MUI',
      freq: 'Dose unique',
      f: 'unique',
      rem: 'Syphilis latente tardive : 2,4 MUI une fois par semaine pendant 3 semaines.',
    }),
    p('adulte', '1,2 MUI IM toutes les 3 à 4 semaines', {
      ind: 'Prévention secondaire du rhumatisme articulaire aigu',
      voie: 'IM profonde',
      unite: 'MUI',
      freq: 'Toutes les 3 à 4 semaines',
      f: 'schema',
    }),
    p('enfant', '50 000 UI/kg IM en dose unique (maximum 2,4 MUI)', {
      ind: 'Syphilis précoce, angine streptococcique',
      voie: 'IM profonde',
      kg: 50000,
      max: 2400000,
      unite: 'UI',
      freq: 'Dose unique',
      f: 'unique',
      rem: 'Angine : 600 000 UI si < 30 kg, 1,2 MUI au-delà. Prévention du RAA : même dose toutes les 3 à 4 semaines.',
    }),
    p('nouveau_ne', '50 000 UI/kg IM en dose unique', {
      ind: 'Nouveau-né asymptomatique de mère syphilitique insuffisamment traitée',
      voie: 'IM',
      kg: 50000,
      unite: 'UI',
      f: 'unique',
      rem: 'Syphilis congénitale symptomatique : pénicilline G IV pendant 10 jours.',
    }),
    p('grossesse', '2,4 MUI IM en dose unique (syphilis précoce)', {
      ind: 'Syphilis pendant la grossesse',
      voie: 'IM profonde',
      unite: 'MUI',
      f: 'unique',
      sec: 'autorise',
      rem: 'Seul traitement efficace pour prévenir la syphilis congénitale.',
    }),
  ],

  // ------------------------------------------------------------ Vitamine K1 (phytoménadione)
  'vitamine-k1-phytomenadione': [
    p('nouveau_ne', '1 mg IM à la naissance (0,5 mg si poids < 1 500 g)', {
      ind: 'Prévention de la maladie hémorragique du nouveau-né',
      voie: 'IM',
      freq: 'Dose unique',
      f: 'unique',
      rem: 'Traitement d’un syndrome hémorragique : 1 mg IV lente, à répéter si besoin.',
    }),
    p('adulte', '1–10 mg per os ou IV lente selon l’INR et la gravité du saignement', {
      ind: 'Surdosage en antivitamine K',
      voie: 'Orale ou IV lente',
      freq: 'Dose unique, à répéter selon l’INR',
      f: 'unique',
      rem: 'Saignement grave : 10 mg IV lente avec du plasma ou des facteurs de coagulation.',
    }),
    p('grossesse', 'Selon l’indication', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Propranolol
  propranolol: [
    p('adulte', '20–40 mg toutes les 6 à 8 h', {
      ind: 'Hyperthyroïdie (contrôle des symptômes), tachycardie',
      voie: 'Orale',
      freq: '3 à 4 fois par jour',
      f: { n: 3 },
    }),
    p('adulte', '40 mg 2 à 3 fois par jour (80–160 mg/j)', {
      ind: 'Prévention de la migraine, tremblement essentiel, prévention des hémorragies digestives (cirrhose)',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Contre-indiqué en cas d’asthme, de bloc auriculo-ventriculaire, d’insuffisance cardiaque décompensée.',
    }),
    p('enfant', '1 mg/kg 2 fois par jour (après 1 semaine à 0,5 mg/kg 2 fois par jour)', {
      ind: 'Hémangiome infantile compliqué (avis spécialisé)',
      voie: 'Orale',
      kg: 1,
      freq: '2 fois par jour, au repas',
      f: { n: 2 },
      sec: 'prudence',
      rem: 'Surveillance de la fréquence cardiaque, de la tension et de la glycémie (risque d’hypoglycémie).',
    }),
    p('grossesse', 'Utilisable si nécessaire', {
      sec: 'prudence',
      rem: 'Risque de retard de croissance et de bradycardie ou d’hypoglycémie néonatales.',
    }),
  ],

  // ------------------------------------------------------------ Albendazole
  albendazole: [
    p('adulte', '400 mg en dose unique', {
      ind: 'Géohelminthiases (ascaris, ankylostome, trichocéphale)',
      voie: 'Orale',
      freq: 'Dose unique',
      f: 'unique',
      rem: 'Trichocéphalose intense ou strongyloïdose : 400 mg/j pendant 3 jours.',
    }),
    p('adulte', '15 mg/kg/j en 2 prises (maximum 1 200 mg/j)', {
      ind: 'Neurocysticercose (kystes viables, avec corticoïdes)',
      voie: 'Orale',
      kg: 15,
      max: 1200,
      base: 'par_jour',
      freq: '2 fois par jour, au repas',
      f: { n: 2 },
      durees: [[10, 14, 'jours']],
    }),
    p('enfant', '400 mg en dose unique (200 mg de 1 à 2 ans)', {
      ind: 'Géohelminthiases, déparasitage de masse',
      voie: 'Orale',
      freq: 'Dose unique',
      f: 'unique',
      rem: 'Comprimé à croquer ou écrasé chez le jeune enfant.',
    }),
    p('grossesse', 'Éviter au 1er trimestre ; possible aux 2e et 3e trimestres (déparasitage)', {
      sec: 'prudence',
    }),
  ],

  // ------------------------------------------------------------ Immunoglobulines antitétaniques
  'serum-immunoglobuline-antitetanique': [
    p('adulte', 'Prévention : 250 UI IM (500 UI si plaie très souillée ou de plus de 24 h)', {
      ind: 'Plaie à risque chez un sujet non ou mal vacciné',
      voie: 'IM',
      unite: 'UI',
      freq: 'Dose unique',
      f: 'unique',
      rem: 'Injecter dans un site différent du vaccin antitétanique, administré en même temps.',
    }),
    p('adulte', 'Traitement : 500 UI IM en dose unique (MSF ; certains protocoles 3 000–6 000 UI)', {
      ind: 'Tétanos déclaré',
      voie: 'IM',
      unite: 'UI',
      f: 'unique',
    }),
    p('enfant', 'Prévention : 250 UI IM ; traitement : 500 UI IM', {
      ind: 'Plaie à risque, tétanos',
      voie: 'IM',
      unite: 'UI',
      f: 'unique',
    }),
    p('nouveau_ne', 'Traitement : 500 UI IM en dose unique', {
      ind: 'Tétanos néonatal',
      voie: 'IM',
      unite: 'UI',
      f: 'unique',
    }),
    p('grossesse', 'Mêmes doses que l’adulte', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Chlorhexidine (digluconate)
  'chlorhexidine-gluconate': [
    p(
      'nouveau_ne',
      'Digluconate de chlorhexidine 7,1 % (4 % de chlorhexidine) : 1 application sur le cordon par jour',
      {
        ind: 'Soins du cordon ombilical (zones à forte mortalité néonatale)',
        voie: 'Cutanée',
        unite: 'application',
        freq: '1 fois par jour',
        f: { n: 1 },
        durees: [[7, null, 'jours', 'Ou jusqu’à la chute du cordon']],
        rem: 'Ne pas appliquer sur les yeux ni les oreilles.',
      },
    ),
    p('adulte', 'Bain de bouche à 0,12–0,2 % : 10–15 mL pendant 1 min, 2 fois par jour', {
      ind: 'Gingivite, soins de bouche',
      voie: 'Buccale',
      unite: 'mL',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[7, 14, 'jours']],
      rem: 'Antisepsie cutanée préopératoire : solution alcoolique à 2 %.',
    }),
    p('grossesse', 'Usage local sans restriction', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Médroxyprogestérone
  medroxyprogesterone: [
    p('adulte', 'Contraception : 150 mg IM toutes les 12 semaines (ou 104 mg SC toutes les 13 semaines)', {
      ind: 'Contraception injectable',
      voie: 'IM ou SC',
      freq: 'Toutes les 12 à 13 semaines',
      f: 'schema',
      rem: 'Première injection dans les 7 premiers jours du cycle. Délai de grâce de 4 semaines pour la réinjection (OMS).',
    }),
    p('adulte', '10 mg/j pendant 10 jours', {
      ind: 'Test aux progestatifs, aménorrhée, régularisation du cycle',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[10, null, 'jours']],
    }),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],
};
