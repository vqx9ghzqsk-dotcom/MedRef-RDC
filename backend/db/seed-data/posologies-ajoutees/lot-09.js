'use strict';

/**
 * Posologies — lot 9 : molécules suivantes les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, lèpre, THA, filarioses, VIH),
 * MSF Guide clinique et thérapeutique et Médicaments essentiels, DNDi, notices.
 * Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Clofazimine
  clofazimine: [
    p('adulte', '300 mg une fois par mois (supervisé) + 50 mg/j, avec rifampicine et dapsone', {
      ind: 'Lèpre multibacillaire (polychimiothérapie OMS) ; réaction lépreuse de type 2 (jusqu’à 300 mg/j, courte durée)',
      voie: 'Orale',
      freq: 'Mensuelle supervisée + quotidienne',
      f: 'schema',
      durees: [[12, null, 'mois']],
      rem: 'Coloration brun-rouge de la peau, réversible lentement. Utilisée aussi dans la tuberculose multirésistante (100 mg/j).',
    }),
    p(
      'enfant',
      '10–14 ans : 150 mg une fois par mois + 50 mg tous les 2 jours ; < 10 ans : 100 mg par mois + 50 mg 2 fois par semaine',
      {
        ind: 'Lèpre multibacillaire',
        voie: 'Orale',
        f: 'schema',
        durees: [[12, null, 'mois']],
      },
    ),
    p('grossesse', 'Polychimiothérapie de la lèpre poursuivie', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Clomipramine
  clomipramine: [
    p('adulte', '25 mg/j, augmenter progressivement jusqu’à 75–150 mg/j (maximum 250 mg/j)', {
      ind: 'Dépression, trouble obsessionnel compulsif, attaques de panique',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      rem: 'Effets anticholinergiques, hypotension, troubles du rythme ; ECG si cardiopathie. Toxique en surdosage.',
    }),
    p('enfant', '≥ 10 ans, TOC : 25 mg/j, augmenter jusqu’à 3 mg/kg/j (maximum 200 mg/j), avis spécialisé', {
      ind: 'Trouble obsessionnel compulsif, énurésie (2e intention)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Si nécessaire ; sevrage néonatal possible', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Clonazépam
  clonazepam: [
    p('adulte', '0,5 mg/j au coucher, augmenter progressivement (habituellement 2–8 mg/j en 2 à 3 prises)', {
      ind: 'Épilepsies (myoclonies), état de mal (si autres benzodiazépines indisponibles)',
      voie: 'Orale',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      rem: 'Sédation, dépendance ; arrêt progressif. Usage hors épilepsie déconseillé.',
    }),
    p('enfant', '0,01–0,03 mg/kg/j en 2 à 3 prises, augmenter jusqu’à 0,1–0,2 mg/kg/j', {
      ind: 'Épilepsies (spasmes, myoclonies)',
      voie: 'Orale',
      kg: 0.02,
      base: 'par_jour',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('grossesse', 'Si nécessaire ; risque de sédation et de sevrage néonatal', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Dactinomycine
  dactinomycine: [
    p(
      'enfant',
      '15 µg/kg/j IV pendant 5 jours ou 45 µg/kg en dose unique (maximum 2 mg), selon le protocole',
      {
        ind: 'Néphroblastome, rhabdomyosarcome, sarcome d’Ewing (protocoles d’oncologie pédiatrique)',
        voie: 'IV',
        kg: 45,
        max: 2000,
        unite: 'µg',
        f: 'schema',
        sec: 'prudence',
        rem: 'Vésicante. Maladie veino-occlusive hépatique.',
      },
    ),
    p(
      'adulte',
      '0,5 mg IV par jour pendant 5 jours, toutes les 2 semaines (ou 1,25 mg/m² toutes les 2 semaines)',
      {
        ind: 'Tumeurs trophoblastiques gestationnelles (bas risque), sarcomes',
        voie: 'IV',
        f: 'schema',
      },
    ),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Dantrolène
  dantrolene: [
    p('adulte', '2,5 mg/kg IV, puis 1 mg/kg toutes les 5 à 10 min jusqu’à la réponse (maximum 10 mg/kg)', {
      ind: 'Hyperthermie maligne peranesthésique, syndrome malin des neuroleptiques',
      voie: 'IV rapide',
      kg: 2.5,
      f: 'schema',
      rem: 'Arrêter l’agent déclenchant. Entretien : 1 mg/kg toutes les 4 à 6 h pendant 24 h.',
    }),
    p('enfant', '2,5 mg/kg IV, à répéter (maximum 10 mg/kg)', {
      ind: 'Hyperthermie maligne',
      voie: 'IV',
      kg: 2.5,
      f: 'schema',
    }),
    p('grossesse', 'Utilisable en urgence', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Desmopressine
  desmopressine: [
    p(
      'adulte',
      '0,1–0,2 mg per os 2 à 3 fois par jour ; 10–20 µg intranasal 1 à 2 fois par jour ; 1–4 µg IV ou SC',
      {
        ind: 'Diabète insipide central',
        voie: 'Orale, nasale ou injectable',
        freq: '2 à 3 fois par jour',
        f: { n: 2 },
        rem: 'Risque d’hyponatrémie : limiter les boissons, surveiller la natrémie.',
      },
    ),
    p('adulte', '0,3 µg/kg IV en 30 min', {
      ind: 'Hémophilie A mineure, maladie de Willebrand type 1 (avant geste)',
      voie: 'IV',
      kg: 0.3,
      max: 20,
      unite: 'µg',
      f: 'unique',
    }),
    p('enfant', '≥ 6 ans : 0,2–0,4 mg per os au coucher (lyophilisat 120–240 µg)', {
      ind: 'Énurésie nocturne primaire',
      voie: 'Orale',
      freq: '1 fois par jour, au coucher',
      f: { n: 1 },
      durees: [[3, null, 'mois', 'Puis fenêtre thérapeutique']],
      rem: 'Pas de boisson 1 h avant et 8 h après la prise.',
    }),
    p('grossesse', 'Utilisable (diabète insipide)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Diéthylcarbamazine
  diethylcarbamazine: [
    p(
      'adulte',
      '6 mg/kg en dose unique annuelle (avec albendazole) ; traitement individuel : 6 mg/kg/j pendant 12 jours',
      {
        ind: 'Filariose lymphatique (hors zones d’onchocercose)',
        voie: 'Orale',
        kg: 6,
        f: 'unique',
        rem: 'Contre-indiquée en zone d’onchocercose (réaction de Mazzotti grave) et de loase à forte charge (encéphalopathie).',
      },
    ),
    p('enfant', '≥ 2 ans : 6 mg/kg en dose unique annuelle', {
      ind: 'Filariose lymphatique',
      voie: 'Orale',
      kg: 6,
      f: 'unique',
    }),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Dompéridone
  domperidone: [
    p('adulte', '10 mg jusqu’à 3 fois par jour (maximum 30 mg/j)', {
      ind: 'Nausées et vomissements',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[1, 7, 'jours']],
      rem: 'Allongement du QT, mort subite : dose minimale, durée maximale 1 semaine, éviter si cardiopathie.',
    }),
    p('enfant', '≥ 12 ans et ≥ 35 kg : dose adulte ; avant : 0,25 mg/kg jusqu’à 3 fois par jour', {
      ind: 'Nausées et vomissements',
      voie: 'Orale',
      kg: 0.25,
      max: 10,
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[1, 7, 'jours']],
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Éflornithine
  eflornithine: [
    p(
      'adulte',
      'NECT : éflornithine 200 mg/kg IV toutes les 12 h pendant 7 jours + nifurtimox 5 mg/kg per os 3 fois par jour pendant 10 jours',
      {
        ind: 'Trypanosomiase humaine africaine à T. b. gambiense, stade 2 sévère',
        voie: 'IV (perfusion de 2 h)',
        kg: 200,
        freq: 'Toutes les 12 h',
        f: { h: 12 },
        durees: [[7, null, 'jours']],
        rem: 'Hospitalisation ; convulsions, myélosuppression.',
      },
    ),
    p('enfant', 'NECT : même schéma en mg/kg', {
      ind: 'Trypanosomiase humaine africaine, stade 2 sévère',
      voie: 'IV',
      kg: 200,
      freq: 'Toutes les 12 h',
      f: { h: 12 },
      durees: [[7, null, 'jours']],
    }),
    p('grossesse', 'Selon le programme national THA (bénéfice-risque)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Fludrocortisone
  fludrocortisone: [
    p('adulte', '50–100 µg/j (0,05–0,1 mg)', {
      ind: 'Insuffisance surrénale primaire (avec hydrocortisone), hypotension orthostatique',
      voie: 'Orale',
      unite: 'µg',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Surveiller tension, kaliémie, œdèmes.',
    }),
    p('enfant', '50–100 µg/j (nourrisson : jusqu’à 150 µg/j avec sel)', {
      ind: 'Hyperplasie congénitale des surrénales avec perte de sel, insuffisance surrénale',
      voie: 'Orale',
      unite: 'µg',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Poursuivre si insuffisance surrénale', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Fosfomycine trométamol
  fosfomycine: [
    p('adulte', '3 g en dose unique', {
      ind: 'Cystite aiguë simple de la femme',
      voie: 'Orale, à jeun ou à distance des repas',
      unite: 'g',
      f: 'unique',
    }),
    p('enfant', 'Adolescente ≥ 12 ans : 3 g en dose unique', {
      ind: 'Cystite simple',
      voie: 'Orale',
      unite: 'g',
      f: 'unique',
    }),
    p('grossesse', '3 g en dose unique (cystite gravidique)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Imipénème + cilastatine
  'imipeneme-cilastatine': [
    p('adulte', '500 mg toutes les 6 h ou 1 g toutes les 8 h IV (maximum 4 g/j)', {
      ind: 'Infections graves à bactéries multirésistantes',
      voie: 'IV (perfusion de 30 à 60 min)',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      durees: [[7, 14, 'jours']],
      rem: 'Risque de convulsions (préférer le méropénème en cas d’atteinte neurologique). Adapter à la fonction rénale.',
    }),
    p('enfant', '15–25 mg/kg IV toutes les 6 h (maximum 1 g par dose)', {
      ind: 'Infections graves (hors méningite)',
      voie: 'IV',
      kg: 15,
      max: 1000,
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      durees: [[7, 14, 'jours']],
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Kétoconazole
  ketoconazole: [
    p('adulte', 'Crème ou gel moussant à 2 % : 1 à 2 applications par jour (gel : 2 fois par semaine)', {
      ind: 'Pityriasis versicolor, dermite séborrhéique, dermatophyties',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      durees: [[2, 4, 'semaines']],
      rem: 'Voie orale abandonnée (hépatotoxicité), sauf syndrome de Cushing en milieu spécialisé.',
    }),
    p('enfant', 'Crème ou gel moussant à 2 % : même utilisation', {
      ind: 'Pityriasis versicolor, dermite séborrhéique, teigne (en complément)',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[2, 4, 'semaines']],
    }),
    p('grossesse', 'Usage local possible ; voie orale contre-indiquée', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Lorazépam
  lorazepam: [
    p('adulte', '4 mg IV lente (0,1 mg/kg), à répéter une fois après 10 à 15 min', {
      ind: 'État de mal épileptique',
      voie: 'IV',
      kg: 0.1,
      max: 4,
      f: 'schema',
      rem: 'Matériel de ventilation à disposition. Conservation au froid.',
    }),
    p('adulte', '0,5–2 mg per os 2 à 3 fois par jour (courte durée)', {
      ind: 'Anxiété aiguë, sevrage alcoolique (insuffisance hépatique)',
      voie: 'Orale',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      durees: [[1, 4, 'semaines', 'Arrêt progressif']],
    }),
    p('enfant', '0,1 mg/kg IV (maximum 4 mg), à répéter une fois', {
      ind: 'État de mal épileptique',
      voie: 'IV ou intra-osseuse',
      kg: 0.1,
      max: 4,
      f: 'schema',
    }),
    p('grossesse', 'Si nécessaire (état de mal) ; éviter l’usage prolongé', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Mirtazapine
  mirtazapine: [
    p('adulte', '15 mg au coucher, augmenter à 30–45 mg/j', {
      ind: 'Dépression (notamment avec insomnie ou perte d’appétit)',
      voie: 'Orale',
      freq: '1 fois par jour, le soir',
      f: { n: 1 },
      durees: [[6, 12, 'mois', 'Après rémission']],
      rem: 'Prise de poids, somnolence. Agranulocytose rare.',
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Mométasone (furoate)
  'mometasone-furoate': [
    p(
      'adulte',
      'Spray nasal 50 µg : 2 pulvérisations par narine 1 fois par jour ; crème à 0,1 % : 1 application par jour',
      {
        ind: 'Rhinite allergique, polypose nasale ; dermatoses inflammatoires (crème)',
        voie: 'Nasale ou cutanée',
        unite: 'pulvérisation',
        freq: '1 fois par jour',
        f: { n: 1 },
      },
    ),
    p(
      'enfant',
      '3–11 ans : 1 pulvérisation par narine 1 fois par jour ; crème : 1 application par jour (≥ 2 ans)',
      {
        ind: 'Rhinite allergique, hypertrophie adénoïdienne, eczéma',
        voie: 'Nasale ou cutanée',
        unite: 'pulvérisation',
        freq: '1 fois par jour',
        f: { n: 1 },
      },
    ),
    p('grossesse', 'Utilisable (spray nasal)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Névirapine
  nevirapine: [
    p('nouveau_ne', 'Prophylaxie : 2 mg/kg/j (< 2 kg), 10 mg/j (2–2,5 kg), 15 mg/j (≥ 2,5 kg)', {
      ind: 'Prévention de la transmission mère-enfant du VIH (nourrisson exposé)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [6, null, 'semaines', 'Risque standard', true],
        [12, null, 'semaines', 'Haut risque (avec zidovudine)'],
      ],
    }),
    p('adulte', '200 mg/j pendant 14 jours, puis 200 mg 2 fois par jour', {
      ind: 'Infection à VIH (schémas anciens, si dolutégravir non utilisable)',
      voie: 'Orale',
      freq: '1 puis 2 fois par jour',
      f: 'schema',
      rem: 'Hépatotoxicité et éruptions graves surtout les 6 premières semaines.',
    }),
    p('grossesse', 'Utilisable si déjà en cours et bien toléré', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Nifurtimox
  nifurtimox: [
    p('adulte', 'NECT : 5 mg/kg 3 fois par jour (15 mg/kg/j) pendant 10 jours, avec l’éflornithine', {
      ind: 'Trypanosomiase humaine africaine à T. b. gambiense, stade 2 sévère',
      voie: 'Orale',
      kg: 5,
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[10, null, 'jours']],
      rem: 'Troubles digestifs et neurologiques ; prendre au repas.',
    }),
    p('enfant', 'NECT : 5 mg/kg 3 fois par jour pendant 10 jours', {
      ind: 'Trypanosomiase humaine africaine, stade 2 sévère',
      voie: 'Orale',
      kg: 5,
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[10, null, 'jours']],
    }),
    p('grossesse', 'Selon le programme national THA', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Pentamidine
  pentamidine: [
    p('adulte', '4 mg/kg IM ou IV une fois par jour pendant 7 jours', {
      ind: 'Trypanosomiase humaine africaine à T. b. gambiense, stade 1 (si fexinidazole non utilisable)',
      voie: 'IM ou IV (perfusion de 2 h)',
      kg: 4,
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[7, null, 'jours']],
      rem: 'Patient allongé (hypotension) ; hypoglycémie. Pneumocystose : 4 mg/kg/j IV pendant 21 jours si cotrimoxazole impossible.',
    }),
    p('enfant', '4 mg/kg IM une fois par jour pendant 7 jours', {
      ind: 'Trypanosomiase humaine africaine, stade 1',
      voie: 'IM',
      kg: 4,
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[7, null, 'jours']],
    }),
    p('grossesse', 'Utilisable (THA stade 1)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Perméthrine
  permethrine: [
    p(
      'adulte',
      'Crème à 5 % sur tout le corps (du cou aux pieds), rincer après 8 à 12 h ; renouveler à J7–J14',
      {
        ind: 'Gale',
        voie: 'Cutanée',
        unite: 'application',
        f: 'schema',
        rem: 'Traiter les contacts le même jour ; laver le linge à 60 °C. Lotion à 1 % : pédiculose.',
      },
    ),
    p(
      'enfant',
      '≥ 2 mois : même schéma (inclure cuir chevelu et visage chez le nourrisson, en évitant yeux et bouche)',
      {
        ind: 'Gale',
        voie: 'Cutanée',
        unite: 'application',
        f: 'schema',
      },
    ),
    p('grossesse', 'Traitement de choix de la gale', { sec: 'autorise' }),
  ],
};
