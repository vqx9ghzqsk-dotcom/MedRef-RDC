'use strict';

/**
 * Posologies — lot 7 : molécules 121 à 140 les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, THA), MSF Guide clinique et thérapeutique
 * et Médicaments essentiels, DNDi (fexinidazole), notices.
 * Chimiothérapies : doses indicatives, protocole d'oncologie obligatoire. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Acétylcystéine
  acetylcysteine: [
    p('adulte', '150 mg/kg en 1 h, puis 50 mg/kg en 4 h, puis 100 mg/kg en 16 h (schéma IV en 3 poches)', {
      ind: 'Intoxication au paracétamol',
      voie: 'IV',
      kg: 150,
      f: 'schema',
      durees: [[21, null, 'heures', 'Poursuivre si bilan hépatique anormal']],
      rem: 'Débuter dans les 8 h si possible, même tardivement. Plafonner le poids de calcul à 110 kg. Schéma en 2 poches (200 mg/kg en 4 h puis 100 mg/kg en 16 h) mieux toléré.',
    }),
    p('enfant', 'Même schéma en mg/kg, volumes adaptés au poids', {
      ind: 'Intoxication au paracétamol',
      voie: 'IV',
      kg: 150,
      f: 'schema',
    }),
    p('adulte', '200 mg 3 fois par jour (ou 600 mg/j)', {
      ind: 'Mucolytique (BPCO, bronchite)',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[5, 10, 'jours']],
      rem: 'Intérêt clinique limité ; contre-indiqué avant 2 ans comme mucolytique.',
    }),
    p('grossesse', 'Utilisable (intoxication au paracétamol)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Acide folinique
  'acide-folinique': [
    p('adulte', '10–25 mg/j per os, pendant toute la durée du traitement par pyriméthamine', {
      ind: 'Prévention de la toxicité de la pyriméthamine (toxoplasmose)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('adulte', '15 mg toutes les 6 h, à débuter 24 h après le méthotrexate à forte dose, selon les taux', {
      ind: 'Sauvetage après méthotrexate à forte dose ; avec le 5-FU (modulation, protocole)',
      voie: 'IV, IM ou orale',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      rem: 'Ne jamais administrer en intrathécal.',
    }),
    p('enfant', '5–10 mg 3 fois par semaine (toxoplasmose congénitale)', {
      ind: 'Avec pyriméthamine',
      voie: 'Orale',
      f: 'schema',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Acide salicylique
  'acide-salicylique': [
    p('adulte', 'Préparation à 10–17 % : 1 application par jour sur la verrue, après décapage', {
      ind: 'Verrues, cors',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[4, 12, 'semaines']],
      rem: 'Protéger la peau saine. Pommade à 2–5 % (kératolytique) : psoriasis, dermite séborrhéique, avec dermocorticoïde. Pommade de Whitfield (avec acide benzoïque) : dermatophyties.',
    }),
    p('enfant', 'Mêmes préparations sur de petites surfaces', {
      ind: 'Verrues',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
      rem: 'Éviter les grandes surfaces chez le nourrisson (salicylisme).',
    }),
    p('grossesse', 'Usage local limité possible', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Caféine
  cafeine: [
    p(
      'nouveau_ne',
      'Citrate de caféine : 20 mg/kg IV ou per os (dose de charge), puis 5–10 mg/kg/j en 1 prise',
      {
        ind: 'Apnées du prématuré',
        voie: 'IV ou orale',
        kg: 20,
        freq: 'Charge puis 1 fois par jour',
        f: 'schema',
        rem: 'Doses exprimées en citrate de caféine (2 mg de citrate = 1 mg de caféine base). Arrêt vers 34–36 SA d’âge corrigé.',
      },
    ),
    p('adulte', '100–200 mg per os (avec le traitement de la crise)', {
      ind: 'Céphalée post-ponction durale, migraine (associations)',
      voie: 'Orale',
      f: 'unique',
    }),
    p('grossesse', 'Limiter à 200 mg/j de caféine', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Carbimazole
  carbimazole: [
    p('adulte', '20–40 mg/j en 1 à 2 prises, puis réduire à 5–15 mg/j selon la T4 libre', {
      ind: 'Hyperthyroïdie (maladie de Basedow, nodules toxiques avant traitement radical)',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      durees: [[12, 18, 'mois', 'Maladie de Basedow']],
      rem: 'Agranulocytose : NFS si fièvre ou angine (arrêt immédiat). Bêtabloquant associé au début.',
    }),
    p('enfant', '0,25–0,5 mg/kg/j en 1 à 2 prises (maximum 30 mg/j)', {
      ind: 'Maladie de Basedow',
      voie: 'Orale',
      kg: 0.5,
      max: 30,
      base: 'par_jour',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p(
      'grossesse',
      'À éviter au 1er trimestre (préférer le propylthiouracile), utilisable ensuite à dose minimale',
      {
        sec: 'prudence',
      },
    ),
  ],

  // ------------------------------------------------------------ Carboplatine
  carboplatine: [
    p('adulte', 'Dose selon la formule de Calvert : AUC 5–6 × (DFG + 25) mg, toutes les 3 semaines', {
      ind: 'Cancers de l’ovaire, du poumon, ORL, rétinoblastome (protocoles d’oncologie)',
      voie: 'IV',
      f: 'schema',
      rem: 'Myélosuppression (thrombopénie) ; moins néphrotoxique que le cisplatine.',
    }),
    p('enfant', 'Selon le protocole d’oncologie pédiatrique', {
      ind: 'Rétinoblastome, tumeurs cérébrales, neuroblastome',
      voie: 'IV',
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiqué au 1er trimestre', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Chloramphénicol
  chloramphenicol: [
    p('adulte', '1 g IV toutes les 6 à 8 h', {
      ind: 'Méningite (si alternatives indisponibles), typhoïde, rickettsioses, peste',
      voie: 'IV ou orale',
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[10, 14, 'jours']],
      rem: 'Aplasie médullaire rare mais grave ; NFS si traitement prolongé.',
    }),
    p('adulte', 'Forme huileuse : 100 mg/kg en dose unique IM (maximum 3 g)', {
      ind: 'Méningite à méningocoque en situation d’épidémie (si ceftriaxone indisponible)',
      voie: 'IM',
      kg: 100,
      max: 3000,
      f: 'unique',
    }),
    p('enfant', '25 mg/kg toutes les 6 à 8 h (maximum 1 g par dose)', {
      ind: 'Méningite, typhoïde, infections graves si alternatives indisponibles',
      voie: 'IV ou orale',
      kg: 25,
      max: 1000,
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[10, null, 'jours']],
    }),
    p('nouveau_ne', 'À éviter (syndrome gris) ; si indispensable : 12,5 mg/kg toutes les 12 h', {
      ind: 'Infections graves sans alternative',
      voie: 'IV',
      kg: 12.5,
      freq: 'Toutes les 12 h',
      f: { h: 12 },
      sec: 'contre_indique',
    }),
    p('grossesse', 'À éviter en fin de grossesse ; collyre utilisable', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Clobétasol (propionate)
  'clobetasol-propionate': [
    p('adulte', 'Crème ou pommade à 0,05 % : 1 à 2 applications par jour en couche fine', {
      ind: 'Psoriasis, lichen plan, eczéma résistant, lupus discoïde, pelade',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      durees: [[2, 4, 'semaines', 'Maximum 50 g par semaine']],
      rem: 'Dermocorticoïde très fort : jamais sur le visage ni les plis, pas sous occlusion prolongée. Usage dépigmentant (« maquillage ») dangereux.',
    }),
    p('enfant', 'Déconseillé avant 12 ans ; cures très courtes sur zones limitées (avis spécialisé)', {
      ind: 'Dermatoses résistantes localisées',
      voie: 'Cutanée',
      unite: 'application',
      f: { n: 1 },
      sec: 'contre_indique',
    }),
    p('grossesse', 'Surfaces limitées et courte durée seulement', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Clomifène
  clomifene: [
    p(
      'adulte',
      '50 mg/j du 2e au 6e jour du cycle (ou du 5e au 9e), augmenter à 100 mg/j si pas d’ovulation',
      {
        ind: 'Infertilité par anovulation (syndrome des ovaires polykystiques)',
        voie: 'Orale',
        freq: '1 fois par jour',
        f: { n: 1 },
        durees: [[5, null, 'jours', 'Par cycle, 6 cycles au maximum']],
        rem: 'Surveillance échographique (grossesses multiples, hyperstimulation).',
      },
    ),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Donépézil
  donepezil: [
    p('adulte', '5 mg/j au coucher, augmenter à 10 mg/j après 4 à 6 semaines', {
      ind: 'Maladie d’Alzheimer légère à modérée',
      voie: 'Orale',
      freq: '1 fois par jour, le soir',
      f: { n: 1 },
      rem: 'Bradycardie, troubles digestifs ; prudence si trouble de la conduction.',
    }),
    p('grossesse', 'Sans objet', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Fexinidazole
  fexinidazole: [
    p('adulte', '≥ 35 kg : 1 800 mg/j pendant 4 jours, puis 1 200 mg/j pendant 6 jours', {
      ind: 'Trypanosomiase humaine africaine à T. b. gambiense (stade 1 et stade 2 non sévère)',
      voie: 'Orale, au cours d’un repas, prise supervisée',
      freq: '1 fois par jour',
      f: 'schema',
      durees: [[10, null, 'jours']],
      rem: 'À prendre au repas principal (absorption). Stade 2 sévère (leucocytes du LCR > 100/µL) : NECT. Allongement du QT.',
    }),
    p(
      'enfant',
      '≥ 6 ans et ≥ 20 kg : 20–34 kg : 1 200 mg/j pendant 4 jours puis 600 mg/j pendant 6 jours ; ≥ 35 kg : dose adulte',
      {
        ind: 'Trypanosomiase humaine africaine à T. b. gambiense',
        voie: 'Orale, au cours d’un repas',
        freq: '1 fois par jour',
        f: 'schema',
        durees: [[10, null, 'jours']],
      },
    ),
    p('grossesse', 'Utilisable après le 1er trimestre si nécessaire (avis du programme)', {
      sec: 'prudence',
    }),
  ],

  // ------------------------------------------------------------ Gluconate ferrique de sodium
  'gluconate-ferrique-de-sodium': [
    p('adulte', '125 mg de fer IV par séance (dilué, en 1 h), jusqu’à correction du déficit', {
      ind: 'Carence martiale en hémodialyse (avec érythropoïétine), intolérance au fer oral',
      voie: 'IV',
      f: 'schema',
      rem: 'Calcul du déficit (formule de Ganzoni). Surveiller les réactions d’hypersensibilité.',
    }),
    p('enfant', '1,5 mg/kg de fer IV par séance (maximum 125 mg), avis spécialisé', {
      ind: 'Carence martiale en hémodialyse',
      voie: 'IV',
      kg: 1.5,
      max: 125,
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Éviter au 1er trimestre ; possible ensuite', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Goséréline
  goserelin: [
    p('adulte', 'Implant de 3,6 mg SC tous les 28 jours ou 10,8 mg toutes les 12 semaines', {
      ind: 'Cancer de la prostate avancé, cancer du sein hormonodépendant (femme non ménopausée), endométriose',
      voie: 'Sous-cutanée (paroi abdominale)',
      f: 'schema',
      rem: 'Prostate : antiandrogène les premières semaines (effet flare). Ostéoporose au long cours.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Hydroxyzine
  hydroxyzine: [
    p('adulte', '25 mg 2 à 3 fois par jour (maximum 100 mg/j ; sujet âgé 50 mg/j)', {
      ind: 'Prurit, anxiété, prémédication',
      voie: 'Orale',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      rem: 'Allongement du QT. Somnolence.',
    }),
    p('enfant', '≥ 12 mois : 1–2 mg/kg/j en plusieurs prises (maximum 2 mg/kg/j)', {
      ind: 'Prurit, urticaire',
      voie: 'Orale',
      kg: 1,
      max: 50,
      base: 'par_jour',
      freq: '2 à 3 fois par jour',
      f: { n: 2 },
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiquée au 1er trimestre ; à éviter ensuite', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Kétoprofène
  ketoprofene: [
    p(
      'adulte',
      '50 mg 3 fois par jour ou 100 mg 2 fois par jour (maximum 200 mg/j) ; IV : 100 mg 1 à 2 fois par jour pendant 48 h',
      {
        ind: 'Douleurs aiguës, colique néphrétique, rhumatismes inflammatoires',
        voie: 'Orale ou IV',
        freq: '2 à 3 fois par jour, au repas',
        f: { n: 2 },
        durees: [[3, 7, 'jours']],
        rem: 'Gel : photosensibilisation, éviter le soleil pendant le traitement et 2 semaines après.',
      },
    ),
    p('enfant', '≥ 6 mois : 0,5 mg/kg 3 à 4 fois par jour (maximum 2 mg/kg/j)', {
      ind: 'Douleur, fièvre',
      voie: 'Orale',
      kg: 0.5,
      max: 50,
      freq: '3 à 4 fois par jour',
      f: { n: 3 },
      durees: [[3, null, 'jours']],
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiqué à partir de 20 SA ; éviter avant', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Lévodopa
  levodopa: [
    p(
      'adulte',
      'Lévodopa + carbidopa : 50–100 mg de lévodopa 3 fois par jour, augmenter progressivement (habituellement 300–800 mg/j)',
      {
        ind: 'Maladie de Parkinson',
        voie: 'Orale',
        freq: '3 fois par jour',
        f: { n: 3 },
        rem: 'Toujours associée à un inhibiteur de la décarboxylase. À distance des repas riches en protéines. Ne jamais arrêter brutalement (syndrome malin).',
      },
    ),
    p('enfant', 'Dystonie dopa-sensible : 1–4 mg/kg/j de lévodopa en 2 à 3 prises (avis spécialisé)', {
      ind: 'Dystonie dopa-sensible (maladie de Segawa)',
      voie: 'Orale',
      kg: 1,
      base: 'par_jour',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter si possible', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Méropénème
  meropeneme: [
    p('adulte', '1 g IV toutes les 8 h (2 g toutes les 8 h si méningite)', {
      ind: 'Infections graves à bactéries multirésistantes (BLSE), sepsis nosocomial',
      voie: 'IV (perfusion de 30 min, prolongée possible)',
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[7, 14, 'jours']],
      rem: 'Réserver aux bactéries résistantes (programme de bon usage). Adapter à la fonction rénale. Diminue les taux de valproate.',
    }),
    p('enfant', '20 mg/kg IV toutes les 8 h (40 mg/kg si méningite ; maximum 2 g par dose)', {
      ind: 'Infections graves à bactéries résistantes',
      voie: 'IV',
      kg: 20,
      max: 2000,
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[7, 14, 'jours']],
    }),
    p('nouveau_ne', '20 mg/kg IV toutes les 12 h (< 7 jours) ou 8 h (≥ 7 jours)', {
      ind: 'Sepsis néonatal à BLSE',
      voie: 'IV',
      kg: 20,
      freq: 'Toutes les 8 à 12 h',
      f: 'schema',
      durees: [[10, 14, 'jours']],
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Méthylphénidate
  methylphenidate: [
    p(
      'enfant',
      '≥ 6 ans : 5 mg 1 à 2 fois par jour, augmenter de 5–10 mg par semaine (maximum 60 mg/j ou 1 mg/kg/j)',
      {
        ind: 'Trouble déficit de l’attention avec hyperactivité (TDAH)',
        voie: 'Orale',
        freq: '1 à 2 fois par jour (matin et midi)',
        f: { n: 2 },
        sec: 'prudence',
        rem: 'Prescription spécialisée ; surveiller poids, taille, tension et sommeil.',
      },
    ),
    p('adulte', '10 mg 2 fois par jour, augmentation progressive (maximum 60–100 mg/j selon la forme)', {
      ind: 'TDAH de l’adulte, narcolepsie',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Stupéfiant : risque de mésusage.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Naltrexone
  naltrexone: [
    p('adulte', '50 mg/j', {
      ind: 'Dépendance à l’alcool (réduction des rechutes), dépendance aux opioïdes après sevrage',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[3, 6, 'mois']],
      rem: 'Débuter après 7 à 10 jours sans opioïde (sevrage brutal). Bilan hépatique. Bloque l’effet antalgique des opioïdes.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Néostigmine
  neostigmine: [
    p('adulte', '0,04–0,05 mg/kg IV (maximum 5 mg), avec atropine 0,015–0,02 mg/kg ou glycopyrrolate', {
      ind: 'Antagonisation des curares non dépolarisants',
      voie: 'IV lente',
      kg: 0.05,
      max: 5,
      f: 'unique',
    }),
    p('adulte', '15–30 mg per os toutes les 4 à 6 h, ou 0,5–2,5 mg IM ou SC', {
      ind: 'Myasthénie (la pyridostigmine est préférée per os)',
      voie: 'Orale, IM ou SC',
      freq: 'Toutes les 4 à 6 h',
      f: { h: 6 },
    }),
    p('enfant', '0,05 mg/kg IV avec atropine', {
      ind: 'Antagonisation des curares',
      voie: 'IV lente',
      kg: 0.05,
      max: 2.5,
      f: 'unique',
    }),
    p('grossesse', 'Utilisable (myasthénie)', { sec: 'prudence' }),
  ],
};
