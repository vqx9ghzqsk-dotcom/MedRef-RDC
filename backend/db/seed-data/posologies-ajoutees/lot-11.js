'use strict';

/**
 * Posologies — lot 11 : molécules suivantes les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, VIH, lèpre), MSF Guide clinique et
 * thérapeutique et Médicaments essentiels, notices. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Xylométazoline
  xylometazoline: [
    p('adulte', 'Solution nasale à 0,1 % : 1 pulvérisation par narine 2 à 3 fois par jour', {
      ind: 'Congestion nasale (rhinite, sinusite aiguë)',
      voie: 'Nasale',
      unite: 'pulvérisation',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      durees: [[3, 5, 'jours', 'Maximum 5 jours (rhinite médicamenteuse)']],
    }),
    p('enfant', '6–12 ans : solution à 0,05 %, 1 pulvérisation par narine 1 à 2 fois par jour', {
      ind: 'Congestion nasale',
      voie: 'Nasale',
      unite: 'pulvérisation',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
      durees: [[3, 5, 'jours']],
      sec: 'prudence',
      rem: 'Contre-indiquée avant 6 ans (préférer le sérum physiologique).',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Zidovudine
  zidovudine: [
    p(
      'nouveau_ne',
      'Prophylaxie : 4 mg/kg 2 fois par jour (avec la névirapine chez le nourrisson à haut risque)',
      {
        ind: 'Prévention de la transmission mère-enfant du VIH (haut risque)',
        voie: 'Orale',
        kg: 4,
        freq: '2 fois par jour',
        f: { n: 2 },
        durees: [[6, null, 'semaines']],
        rem: 'Prématuré : doses réduites selon l’âge gestationnel.',
      },
    ),
    p('adulte', '300 mg 2 fois par jour (en association)', {
      ind: 'Infection à VIH (schémas de 2e ligne)',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Anémie, neutropénie : NFS. Éviter si Hb < 8 g/dL.',
    }),
    p('enfant', 'Selon les bandes de poids OMS (environ 180–240 mg/m² 2 fois par jour)', {
      ind: 'Infection à VIH (association)',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Zopiclone
  zopiclone: [
    p('adulte', '7,5 mg au coucher (sujet âgé, insuffisance hépatique : 3,75 mg)', {
      ind: 'Insomnie occasionnelle ou transitoire',
      voie: 'Orale',
      freq: '1 fois par jour, au coucher',
      f: { n: 1 },
      durees: [[2, 4, 'semaines', 'Durée maximale, sevrage compris']],
      rem: 'Goût amer, somnolence résiduelle ; dépendance.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Acide ursodésoxycholique
  'acide-ursodesoxycholique': [
    p('adulte', '13–15 mg/kg/j en 2 à 3 prises', {
      ind: 'Cholangite biliaire primitive, cholestase gravidique, lithiase biliaire cholestérolique',
      voie: 'Orale',
      kg: 15,
      base: 'par_jour',
      freq: '2 à 3 fois par jour',
      f: { n: 2 },
      rem: 'Lithiase : 8–10 mg/kg/j le soir, 6 à 24 mois.',
    }),
    p('enfant', '10–20 mg/kg/j en 2 à 3 prises', {
      ind: 'Cholestases de l’enfant (atrésie des voies biliaires opérée, mucoviscidose)',
      voie: 'Orale',
      kg: 15,
      base: 'par_jour',
      freq: '2 fois par jour',
      f: { n: 2 },
      sec: 'prudence',
    }),
    p('grossesse', '10–15 mg/kg/j (cholestase gravidique)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Alfuzosine
  alfuzosine: [
    p('adulte', '10 mg/j (libération prolongée) après le dîner', {
      ind: 'Hypertrophie bénigne de la prostate, rétention aiguë d’urine (avant ablation de sonde)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Hypotension orthostatique, surtout la 1re prise.',
    }),
    p('grossesse', 'Sans objet', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Alginate
  alginate: [
    p('adulte', '10–20 mL (ou 2 à 4 comprimés) après les 3 repas et au coucher', {
      ind: 'Reflux gastro-œsophagien, pyrosis',
      voie: 'Orale',
      unite: 'mL',
      freq: '4 fois par jour',
      f: { n: 4 },
    }),
    p('enfant', 'Nourrisson : 1–2 mL/kg/j répartis après les biberons ; > 6 ans : 5–10 mL après les repas', {
      ind: 'Reflux gastro-œsophagien',
      voie: 'Orale',
      unite: 'mL',
      freq: 'Après les repas',
      f: { n: 4 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Béclométasone inhalée
  'beclometasone-inhalee': [
    p('adulte', '100–400 µg 2 fois par jour selon la sévérité', {
      ind: 'Asthme persistant, BPCO avec exacerbations fréquentes',
      voie: 'Inhalée (avec chambre d’inhalation)',
      unite: 'µg',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Se rincer la bouche après (candidose). Vérifier la technique d’inhalation.',
    }),
    p('enfant', '50–200 µg 2 fois par jour avec chambre d’inhalation (avec masque avant 4 ans)', {
      ind: 'Asthme persistant',
      voie: 'Inhalée',
      unite: 'µg',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Surveiller la croissance.',
    }),
    p('grossesse', 'Utilisable : poursuivre (l’asthme non contrôlé est plus dangereux)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Benzoate de benzyle
  'benzoate-de-benzyle': [
    p('adulte', 'Lotion à 25 % sur tout le corps sauf le visage, laisser 24 h ; 2e application à J1 ou J8', {
      ind: 'Gale',
      voie: 'Cutanée',
      unite: 'application',
      f: 'schema',
      rem: 'Irritante. Traiter tous les contacts et laver le linge.',
    }),
    p(
      'enfant',
      '2–12 ans : lotion diluée (1 volume pour 1 volume d’eau), laisser 24 h ; < 2 ans : diluer à 1/3 et laisser 12 h',
      {
        ind: 'Gale',
        voie: 'Cutanée',
        unite: 'application',
        f: 'schema',
        sec: 'prudence',
      },
    ),
    p('grossesse', 'Lotion diluée, laisser 12 h au plus (préférer la perméthrine)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Bipéridène
  biperidene: [
    p('adulte', '2–5 mg IM ou IV lente, à répéter après 30 min si besoin', {
      ind: 'Dystonie aiguë aux neuroleptiques',
      voie: 'IM ou IV',
      f: 'schema',
    }),
    p('adulte', '1 mg 2 fois par jour, augmenter jusqu’à 3–12 mg/j en 3 prises', {
      ind: 'Syndrome parkinsonien, effets extrapyramidaux des neuroleptiques',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      rem: 'Confusion chez le sujet âgé ; ne pas prescrire systématiquement avec les neuroleptiques.',
    }),
    p('enfant', '0,04 mg/kg IM ou IV, à répéter après 30 min (maximum 4 fois)', {
      ind: 'Dystonie aiguë',
      voie: 'IM ou IV',
      kg: 0.04,
      max: 2,
      f: 'schema',
    }),
    p('grossesse', 'Usage ponctuel si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Capécitabine
  capecitabine: [
    p('adulte', '1 000–1 250 mg/m² 2 fois par jour, 14 jours sur 21, selon le protocole', {
      ind: 'Cancers colorectal, du sein et gastrique (protocoles d’oncologie)',
      voie: 'Orale, après le repas',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[14, null, 'jours', 'Par cycle de 21 jours']],
      rem: 'Syndrome main-pied, diarrhée. Déficit en DPD. Interaction avec la warfarine.',
    }),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Carvédilol
  carvedilol: [
    p(
      'adulte',
      '3,125 mg 2 fois par jour, doubler toutes les 2 semaines jusqu’à 25 mg 2 fois par jour (50 mg si > 85 kg)',
      {
        ind: 'Insuffisance cardiaque à fraction d’éjection réduite (stabilisée)',
        voie: 'Orale, au cours du repas',
        freq: '2 fois par jour',
        f: { n: 2 },
        rem: 'Surveiller tension, fréquence et signes de décompensation à chaque palier. Contre-indiqué si asthme.',
      },
    ),
    p('adulte', '12,5 mg/j pendant 2 jours puis 25 mg/j (maximum 50 mg/j)', {
      ind: 'Hypertension artérielle',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
    }),
    p('grossesse', 'Si nécessaire ; surveiller la croissance fœtale', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Céfépime
  cefepime: [
    p('adulte', '2 g IV toutes les 8 à 12 h', {
      ind: 'Neutropénie fébrile, infections nosocomiales, Pseudomonas',
      voie: 'IV',
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[7, 14, 'jours']],
      rem: 'Adapter à la fonction rénale (encéphalopathie si surdosage).',
    }),
    p('enfant', '50 mg/kg IV toutes les 8 h (maximum 2 g par dose)', {
      ind: 'Neutropénie fébrile, infections graves',
      voie: 'IV',
      kg: 50,
      max: 2000,
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[7, 14, 'jours']],
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Chlordiazépoxide
  chlordiazepoxide: [
    p('adulte', '25–50 mg 3 à 4 fois par jour le 1er jour, puis diminution progressive sur 5 à 7 jours', {
      ind: 'Sevrage alcoolique',
      voie: 'Orale',
      freq: '3 à 4 fois par jour',
      f: { n: 4 },
      durees: [[5, 7, 'jours']],
      rem: 'Adapter aux scores de sevrage (CIWA). Insuffisance hépatique : préférer l’oxazépam ou le lorazépam. Thiamine associée.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Clobazam
  clobazam: [
    p('adulte', '10 mg/j, augmenter jusqu’à 20–30 mg/j (maximum 60 mg/j)', {
      ind: 'Épilepsies (association), anxiété',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
      rem: 'Tolérance possible ; arrêt progressif.',
    }),
    p('enfant', '≥ 2 ans : 0,25 mg/kg/j, augmenter jusqu’à 0,5–1 mg/kg/j en 2 prises (maximum 40 mg/j)', {
      ind: 'Épilepsies (association, syndrome de Lennox-Gastaut)',
      voie: 'Orale',
      kg: 0.25,
      base: 'par_jour',
      max: 40,
      freq: '2 fois par jour',
      f: { n: 2 },
      sec: 'prudence',
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Colchicine
  colchicine: [
    p('adulte', 'Crise de goutte : 1 mg puis 0,5 mg 1 h après (J1), puis 0,5 mg 2 à 3 fois par jour', {
      ind: 'Crise de goutte (dans les 36 h), prévention lors de l’instauration de l’allopurinol (0,5–1 mg/j)',
      voie: 'Orale',
      freq: '2 à 3 fois par jour',
      f: { n: 2 },
      durees: [
        [3, 7, 'jours', 'Crise', true],
        [3, 6, 'mois', 'Prévention'],
      ],
      rem: 'Diarrhée = signe de surdosage. Interactions (clarithromycine, azolés) ; réduire en insuffisance rénale.',
    }),
    p('adulte', '0,5 mg 1 à 2 fois par jour', {
      ind: 'Péricardite aiguë (avec AINS), fièvre méditerranéenne familiale',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
      durees: [[3, null, 'mois', 'Péricardite']],
    }),
    p('enfant', 'Fièvre méditerranéenne familiale : 0,5–1,5 mg/j selon l’âge (avis spécialisé)', {
      ind: 'Fièvre méditerranéenne familiale',
      voie: 'Orale',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable si indication (fièvre méditerranéenne familiale)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Cromoglicate de sodium
  'cromoglicate-de-sodium': [
    p(
      'adulte',
      'Collyre à 2 % : 1 à 2 gouttes 2 à 4 fois par jour ; spray nasal : 1 pulvérisation par narine 4 fois par jour',
      {
        ind: 'Conjonctivite allergique (dont vernale), rhinite allergique',
        voie: 'Ophtalmique ou nasale',
        unite: 'goutte',
        freq: '4 fois par jour',
        f: { n: 4 },
        rem: 'Effet préventif : à poursuivre pendant la période d’exposition.',
      },
    ),
    p('enfant', 'Même posologie que l’adulte', {
      ind: 'Conjonctivite allergique, kératoconjonctivite vernale',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '4 fois par jour',
      f: { n: 4 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Cyproheptadine
  cyproheptadine: [
    p('adulte', '4 mg 3 fois par jour (maximum 32 mg/j)', {
      ind: 'Allergie, prurit ; syndrome sérotoninergique (12 mg puis 2 mg toutes les 2 h)',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      rem: 'Usage comme stimulant de l’appétit à décourager. Somnolence.',
    }),
    p('enfant', '2–6 ans : 2 mg 2 à 3 fois par jour ; 7–14 ans : 4 mg 2 à 3 fois par jour', {
      ind: 'Allergie, prurit',
      voie: 'Orale',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
      rem: 'Contre-indiquée avant 2 ans.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Dapsone
  dapsone: [
    p('adulte', '100 mg/j (avec rifampicine ± clofazimine)', {
      ind: 'Lèpre (polychimiothérapie OMS) ; prophylaxie de la pneumocystose si intolérance au cotrimoxazole',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [12, null, 'mois', 'Multibacillaire', true],
        [6, null, 'mois', 'Paucibacillaire'],
      ],
      rem: 'Hémolyse (déficit en G6PD), méthémoglobinémie, syndrome d’hypersensibilité.',
    }),
    p('enfant', '2 mg/kg/j (10–14 ans : 50 mg/j ; < 10 ans : 25 mg/j)', {
      ind: 'Lèpre',
      voie: 'Orale',
      kg: 2,
      max: 100,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('grossesse', 'Polychimiothérapie de la lèpre poursuivie', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Diosmine
  diosmine: [
    p(
      'adulte',
      '1 000 mg/j en 1 à 2 prises ; crise hémorroïdaire : 3 g/j pendant 4 jours puis 2 g/j pendant 3 jours',
      {
        ind: 'Insuffisance veineuse chronique, crise hémorroïdaire',
        voie: 'Orale, au repas',
        freq: '1 à 2 fois par jour',
        f: { n: 2 },
        rem: 'Effet symptomatique modeste.',
      },
    ),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Époétine alfa
  'epoetine-alfa': [
    p(
      'adulte',
      '50 UI/kg SC 3 fois par semaine (ou 100–150 UI/kg par semaine), puis ajuster selon l’hémoglobine',
      {
        ind: 'Anémie de l’insuffisance rénale chronique ; anémie sous chimiothérapie',
        voie: 'SC ou IV',
        kg: 50,
        unite: 'UI',
        f: 'schema',
        rem: 'Cible Hb 10–12 g/dL (pas au-delà). Corriger d’abord la carence martiale. HTA, thromboses.',
      },
    ),
    p('enfant', '50 UI/kg SC 2 à 3 fois par semaine (avis spécialisé)', {
      ind: 'Anémie de l’insuffisance rénale chronique',
      voie: 'SC',
      kg: 50,
      unite: 'UI',
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],
};
