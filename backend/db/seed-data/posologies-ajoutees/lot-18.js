'use strict';

/**
 * Posologies — lot 18 : molécules suivantes les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, paludisme, tuberculose, grippe),
 * MSF Guide clinique et thérapeutique et Médicaments essentiels, notices.
 * Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Mercaptopurine
  mercaptopurine: [
    p('enfant', '50–75 mg/m²/j le soir, à adapter à la NFS (protocole d’entretien des LAL)', {
      ind: 'Leucémie aiguë lymphoblastique (entretien)',
      voie: 'Orale, le soir à jeun',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
      rem: 'Réduire de 75 % avec l’allopurinol. Déficit en TPMT : toxicité.',
    }),
    p('adulte', '1–1,5 mg/kg/j (MICI) ; 50–75 mg/m²/j (leucémie)', {
      ind: 'Maladies inflammatoires intestinales, leucémie aiguë lymphoblastique',
      voie: 'Orale',
      kg: 1,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'NFS et bilan hépatique réguliers.',
    }),
    p('grossesse', 'Si nécessaire (MICI) ; avis spécialisé', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Méthadone
  methadone: [
    p(
      'adulte',
      'Substitution : 20–30 mg le 1er jour (maximum 40 mg), augmenter de 5–10 mg tous les 3 à 5 jours (entretien 60–120 mg/j)',
      {
        ind: 'Traitement de la dépendance aux opioïdes',
        voie: 'Orale (sirop)',
        freq: '1 fois par jour',
        f: { n: 1 },
        rem: 'Accumulation les premiers jours : risque de surdose. Allongement du QT (ECG > 100 mg/j). Interactions (rifampicine, éfavirenz).',
      },
    ),
    p('grossesse', 'Utilisable (substitution recommandée) ; sevrage néonatal à surveiller', {
      sec: 'autorise',
    }),
  ],

  // ------------------------------------------------------------ Moxifloxacine
  moxifloxacine: [
    p('adulte', '400 mg/j', {
      ind: 'Pneumonie communautaire, sinusite compliquée, tuberculose multirésistante (selon le programme)',
      voie: 'Orale ou IV',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [7, 10, 'jours', 'Pneumonie, sinusite', true],
        [6, 9, 'mois', 'Tuberculose résistante'],
      ],
      rem: 'Allongement du QT, tendinopathies, hépatotoxicité.',
    }),
    p('enfant', 'Tuberculose résistante : 10–15 mg/kg/j (bandes de poids du programme)', {
      ind: 'Tuberculose multirésistante',
      voie: 'Orale',
      kg: 10,
      base: 'par_jour',
      max: 400,
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter sauf tuberculose résistante', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Moxifloxacine (collyre)
  'moxifloxacine-collyre': [
    p('adulte', 'Collyre à 0,5 % : 1 goutte 3 fois par jour (kératite : toutes les heures au début)', {
      ind: 'Conjonctivite bactérienne, kératite bactérienne, prophylaxie postopératoire',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[5, 7, 'jours']],
    }),
    p('enfant', '1 goutte 3 fois par jour', {
      ind: 'Conjonctivite bactérienne',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[5, 7, 'jours']],
    }),
    p('grossesse', 'Usage local possible', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Néfopam
  nefopam: [
    p('adulte', '20 mg IV lente ou IM toutes les 4 à 6 h (maximum 120 mg/j)', {
      ind: 'Douleurs aiguës, notamment postopératoires',
      voie: 'IV (perfusion de 30 min) ou IM',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      rem: 'Effets anticholinergiques, tachycardie, sueurs. Contre-indiqué si épilepsie, glaucome, rétention urinaire.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Nicotinamide (vitamine B3/PP)
  'nicotinamide-vitamine-b3-pp': [
    p('adulte', '100 mg 3 fois par jour (pellagre), puis 50–100 mg/j', {
      ind: 'Pellagre',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[3, 4, 'semaines']],
      rem: 'Associer d’autres vitamines B et une alimentation diversifiée.',
    }),
    p('enfant', '10–50 mg 3 fois par jour selon l’âge', {
      ind: 'Pellagre',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[3, 4, 'semaines']],
    }),
    p('grossesse', 'Utilisable (carence)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Nicotine
  nicotine: [
    p(
      'adulte',
      'Patch 21 mg/24 h (> 20 cigarettes/j) ou 14 mg/24 h, avec formes orales 2–4 mg à la demande, puis diminution progressive',
      {
        ind: 'Sevrage tabagique',
        voie: 'Transdermique, buccale',
        freq: '1 patch par jour',
        f: { n: 1 },
        durees: [[8, 12, 'semaines']],
        rem: 'Sous-dosage fréquent : adapter aux signes de manque. Associer un accompagnement.',
      },
    ),
    p('grossesse', 'Utilisable si échec de l’arrêt sans aide (moins nocif que le tabac)', {
      sec: 'prudence',
    }),
  ],

  // ------------------------------------------------------------ Nimodipine
  nimodipine: [
    p('adulte', '60 mg toutes les 4 h per os', {
      ind: 'Prévention du vasospasme après hémorragie méningée anévrismale',
      voie: 'Orale (ou IV 1–2 mg/h)',
      freq: 'Toutes les 4 h',
      f: { h: 4 },
      durees: [[21, null, 'jours']],
      rem: 'Hypotension : 30 mg toutes les 2 h si besoin.',
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Olopatadine
  olopatadine: [
    p('adulte', 'Collyre à 0,1 % : 1 goutte 2 fois par jour', {
      ind: 'Conjonctivite allergique',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('enfant', '≥ 3 ans : 1 goutte 2 fois par jour', {
      ind: 'Conjonctivite allergique',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Orlistat
  orlistat: [
    p('adulte', '120 mg 3 fois par jour au cours des repas contenant des graisses', {
      ind: 'Obésité (IMC ≥ 30, ou ≥ 28 avec facteurs de risque), avec régime',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[12, null, 'semaines', 'Arrêter si perte < 5 % à 12 semaines']],
      rem: 'Selles grasses ; supplémentation en vitamines liposolubles au coucher.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Oseltamivir
  oseltamivir: [
    p('adulte', '75 mg 2 fois par jour (prophylaxie : 75 mg/j pendant 10 jours)', {
      ind: 'Grippe grave ou à risque de complications (dans les 48 h, ou plus tard si grave)',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[5, null, 'jours']],
      rem: 'Adapter à la fonction rénale.',
    }),
    p(
      'enfant',
      '≥ 1 an : ≤ 15 kg : 30 mg ; 15–23 kg : 45 mg ; 23–40 kg : 60 mg ; > 40 kg : 75 mg, 2 fois par jour',
      {
        ind: 'Grippe',
        voie: 'Orale',
        freq: '2 fois par jour',
        f: { n: 2 },
        durees: [[5, null, 'jours']],
        rem: 'Nourrisson < 1 an : 3 mg/kg 2 fois par jour.',
      },
    ),
    p('grossesse', 'Utilisable (femme enceinte à haut risque de grippe grave)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Oxaliplatine
  oxaliplatine: [
    p('adulte', '85 mg/m² IV toutes les 2 semaines (FOLFOX) ou 130 mg/m² toutes les 3 semaines (XELOX)', {
      ind: 'Cancers colorectal, gastrique, pancréatique (protocoles d’oncologie)',
      voie: 'IV (perfusion de 2 h dans du glucose 5 %)',
      f: 'schema',
      rem: 'Neuropathie aggravée par le froid ; hypersensibilité.',
    }),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Oxcarbazépine
  oxcarbazepine: [
    p('adulte', '300 mg 2 fois par jour, augmenter de 600 mg/j par semaine jusqu’à 600–2 400 mg/j', {
      ind: 'Épilepsies focales',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Hyponatrémie (natrémie) ; éruptions (HLA-B*1502). Diminue l’efficacité de la pilule.',
    }),
    p('enfant', '≥ 6 ans : 8–10 mg/kg/j en 2 prises, augmenter jusqu’à 30 mg/kg/j', {
      ind: 'Épilepsies focales',
      voie: 'Orale',
      kg: 10,
      base: 'par_jour',
      max: 2400,
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('grossesse', 'Si nécessaire (préférer la lamotrigine ou le lévétiracétam)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Pancréatine
  pancreatine: [
    p('adulte', '25 000–80 000 unités de lipase par repas principal, la moitié pour une collation', {
      ind: 'Insuffisance pancréatique exocrine (pancréatite chronique, pancréatectomie)',
      voie: 'Orale, au début du repas',
      unite: 'unités de lipase',
      f: 'schema',
      rem: 'Ajuster selon la stéatorrhée. Ne pas croquer les microgranules.',
    }),
    p(
      'enfant',
      'Nourrisson : 2 000–4 000 unités de lipase par 120 mL de lait ; enfant : 1 000–2 500 unités/kg par repas (maximum 10 000/kg/j)',
      {
        ind: 'Mucoviscidose, insuffisance pancréatique',
        voie: 'Orale',
        unite: 'unités de lipase',
        f: 'schema',
        rem: 'Fortes doses : colopathie fibrosante.',
      },
    ),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Pantoprazole
  pantoprazole: [
    p('adulte', '40 mg/j (20 mg/j en prévention sous AINS)', {
      ind: 'Reflux gastro-œsophagien, ulcère, prévention sous AINS ou antiagrégants',
      voie: 'Orale, avant le repas',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[4, 8, 'semaines']],
      rem: 'Moins d’interactions que l’oméprazole (préféré avec le clopidogrel).',
    }),
    p('adulte', '80 mg IV puis 40 mg IV toutes les 12 h (ou 8 mg/h)', {
      ind: 'Hémorragie digestive haute',
      voie: 'IV',
      f: 'schema',
      durees: [[72, null, 'heures', 'Puis relais oral']],
    }),
    p('enfant', '≥ 12 ans : 20–40 mg/j', {
      ind: 'Reflux gastro-œsophagien',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[4, 8, 'semaines']],
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Pénicilline (procaïne / benzathine)
  'penicilline-procaine-benzathine': [
    p(
      'adulte',
      'Pénicilline procaïne : 1,2 MUI IM 1 fois par jour (neurosyphilis : 2,4 MUI/j avec probénécide)',
      {
        ind: 'Syphilis tardive ou neurosyphilis (si pénicilline G IV impossible), pneumonie (alternative)',
        voie: 'IM profonde (jamais IV)',
        unite: 'MUI',
        freq: '1 fois par jour',
        f: { n: 1 },
        durees: [[10, 14, 'jours']],
      },
    ),
    p('enfant', 'Pénicilline procaïne : 50 000 UI/kg IM 1 fois par jour (maximum 1,2 MUI)', {
      ind: 'Pneumonie, syphilis congénitale (nouveau-né sans atteinte neurologique : 10 jours)',
      voie: 'IM',
      kg: 50000,
      max: 1200000,
      unite: 'UI',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[10, null, 'jours']],
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Phényléphrine
  phenylephrine: [
    p('adulte', '50–100 µg IV, à répéter ; perfusion 25–50 µg/min', {
      ind: 'Hypotension de la rachianesthésie (césarienne), hypotension peranesthésique',
      voie: 'IV',
      unite: 'µg',
      f: 'schema',
      rem: 'Bradycardie réflexe.',
    }),
    p('adulte', 'Collyre à 2,5–10 % : 1 goutte (avec le tropicamide)', {
      ind: 'Dilatation pupillaire pour l’examen',
      voie: 'Ophtalmique',
      unite: 'goutte',
      f: 'unique',
      rem: '10 % : éviter si cardiopathie ou HTA.',
    }),
    p('enfant', 'Collyre à 2,5 % : 1 goutte (prématuré : 1 %)', {
      ind: 'Dilatation pupillaire',
      voie: 'Ophtalmique',
      unite: 'goutte',
      f: 'unique',
    }),
    p('grossesse', 'Utilisable (césarienne)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Pramipexole
  pramipexole: [
    p(
      'adulte',
      '0,088 mg (base) 3 fois par jour, augmenter chaque semaine jusqu’à 0,5–1 mg 3 fois par jour',
      {
        ind: 'Maladie de Parkinson ; syndrome des jambes sans repos (0,088–0,54 mg le soir)',
        voie: 'Orale',
        freq: '3 fois par jour',
        f: { n: 3 },
        rem: 'Somnolence soudaine, troubles du contrôle des impulsions, hallucinations.',
      },
    ),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Prétomanide
  pretomanide: [
    p('adulte', '200 mg/j avec bédaquiline, linézolide (± moxifloxacine)', {
      ind: 'Tuberculose multirésistante ou ultrarésistante (schémas BPaL/BPaLM, ≥ 14 ans)',
      voie: 'Orale, au repas',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[6, null, 'mois']],
      rem: 'Bilan hépatique ; neuropathie et myélosuppression liées au linézolide.',
    }),
    p('grossesse', 'Données insuffisantes (programme national)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Primaquine
  primaquine: [
    p('adulte', '0,25 mg/kg en dose unique (avec le traitement à base d’artémisinine)', {
      ind: 'Paludisme à P. falciparum : réduction de la transmission (dose unique faible, OMS)',
      voie: 'Orale',
      kg: 0.25,
      max: 15,
      f: 'unique',
      rem: 'Dose unique faible utilisable sans test G6PD. P. vivax/ovale : 0,25–0,5 mg/kg/j pendant 7 à 14 jours après test G6PD.',
    }),
    p('enfant', '0,25 mg/kg en dose unique (≥ 6 mois)', {
      ind: 'Réduction de la transmission de P. falciparum',
      voie: 'Orale',
      kg: 0.25,
      max: 15,
      f: 'unique',
    }),
    p('grossesse', 'Contre-indiquée (et allaitement d’un enfant < 6 mois)', { sec: 'contre_indique' }),
  ],
};
