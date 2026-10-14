'use strict';

/**
 * Posologies — lot 16 : molécules suivantes les plus citées dans les fiches sans posologie.
 * Sources : OMS (médicaments essentiels, VIH, cryptococcose), MSF Guide clinique et
 * thérapeutique et Médicaments essentiels, notices. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Dasatinib
  dasatinib: [
    p('adulte', '100 mg/j (phase chronique) ; 140 mg/j (phase accélérée ou blastique)', {
      ind: 'Leucémie myéloïde chronique, LAL Ph+ (oncohématologie)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Épanchements pleuraux, myélosuppression, hypertension pulmonaire.',
    }),
    p('enfant', 'Selon le poids (avis d’oncohématologie pédiatrique)', {
      ind: 'Leucémie myéloïde chronique, LAL Ph+',
      voie: 'Orale',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Déférasirox
  deferasirox: [
    p('enfant', '≥ 2 ans : 14–28 mg/kg/j (comprimés pelliculés) en 1 prise, selon la ferritine', {
      ind: 'Surcharge en fer post-transfusionnelle (drépanocytose, thalassémie)',
      voie: 'Orale',
      kg: 14,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Créatinine et bilan hépatique mensuels ; audition et vision annuelles. Débuter si ferritine > 1 000 µg/L.',
    }),
    p('adulte', '14–28 mg/kg/j en 1 prise', {
      ind: 'Surcharge en fer post-transfusionnelle',
      voie: 'Orale',
      kg: 14,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Déféroxamine
  deferoxamine: [
    p('adulte', 'Chélation : 20–60 mg/kg/j SC en perfusion de 8 à 12 h, 5 à 7 jours par semaine', {
      ind: 'Surcharge en fer post-transfusionnelle',
      voie: 'SC (pompe) ou IV',
      kg: 40,
      base: 'par_jour',
      f: 'perfusion',
      rem: 'Vitamine C 100–200 mg/j associée après 1 mois. Audition et vision.',
    }),
    p('adulte', '15 mg/kg/h IV (maximum 80 mg/kg/24 h)', {
      ind: 'Intoxication aiguë au fer grave',
      voie: 'IV continue',
      kg: 15,
      f: 'perfusion',
      rem: 'Urines couleur « vin rosé ».',
    }),
    p('enfant', '20–40 mg/kg/j SC sur 8 à 12 h ; intoxication : 15 mg/kg/h IV', {
      ind: 'Surcharge en fer, intoxication au fer',
      voie: 'SC ou IV',
      kg: 30,
      base: 'par_jour',
      f: 'perfusion',
    }),
    p('grossesse', 'Intoxication grave : utilisable', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Déflazacort
  deflazacort: [
    p('enfant', '0,9 mg/kg/j en 1 prise le matin', {
      ind: 'Myopathie de Duchenne (dès la stagnation motrice, avis spécialisé)',
      voie: 'Orale',
      kg: 0.9,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
      rem: 'Surveillance du poids, de la tension, de la glycémie, des os et des yeux (cataracte).',
    }),
    p('adulte', '6–90 mg/j selon l’indication (6 mg de déflazacort ≈ 5 mg de prednisone)', {
      ind: 'Maladies inflammatoires corticosensibles',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('grossesse', 'Si nécessaire (préférer la prednisolone)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Desloratadine
  desloratadine: [
    p('adulte', '5 mg/j', {
      ind: 'Rhinite allergique, urticaire',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('enfant', '1–5 ans : 1,25 mg/j ; 6–11 ans : 2,5 mg/j ; ≥ 12 ans : 5 mg/j', {
      ind: 'Rhinite allergique, urticaire',
      voie: 'Orale (sirop)',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('grossesse', 'À éviter (préférer la loratadine ou la cétirizine)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Diphenhydramine
  diphenhydramine: [
    p('adulte', '25–50 mg toutes les 6 à 8 h (maximum 300 mg/j)', {
      ind: 'Allergie, prurit, réactions extrapyramidales (25–50 mg IV ou IM)',
      voie: 'Orale, IM ou IV',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      rem: 'Sédation, effets anticholinergiques ; éviter chez le sujet âgé.',
    }),
    p('enfant', '≥ 2 ans : 1 mg/kg toutes les 6 h (maximum 50 mg par prise)', {
      ind: 'Allergie, réactions extrapyramidales',
      voie: 'Orale, IM ou IV',
      kg: 1,
      max: 50,
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      sec: 'prudence',
      rem: 'Contre-indiquée avant 2 ans.',
    }),
    p('grossesse', 'Usage ponctuel possible', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Docétaxel
  docetaxel: [
    p('adulte', '75 mg/m² IV toutes les 3 semaines, selon le protocole', {
      ind: 'Cancers du sein, de la prostate, du poumon, gastrique, ORL',
      voie: 'IV',
      f: 'schema',
      rem: 'Prémédication par dexaméthasone (rétention hydrique, hypersensibilité). Neutropénie.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Dorzolamide (collyre)
  'dorzolamide-collyre': [
    p('adulte', 'Collyre à 2 % : 1 goutte 3 fois par jour (2 fois par jour avec un bêtabloquant)', {
      ind: 'Glaucome à angle ouvert, hypertonie oculaire',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '3 fois par jour',
      f: { n: 3 },
      rem: 'Goût amer ; allergie aux sulfamides : prudence.',
    }),
    p('enfant', '1 goutte 3 fois par jour (avis spécialisé)', {
      ind: 'Glaucome congénital (avant chirurgie)',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Doxylamine
  doxylamine: [
    p('adulte', '7,5–15 mg au coucher', {
      ind: 'Insomnie occasionnelle',
      voie: 'Orale',
      freq: '1 fois par jour, au coucher',
      f: { n: 1 },
      durees: [[2, 5, 'jours']],
      rem: 'Effets anticholinergiques ; éviter chez le sujet âgé.',
    }),
    p('grossesse', 'Doxylamine 10 mg + pyridoxine 10 mg : 2 comprimés au coucher, jusqu’à 4 par jour', {
      ind: 'Nausées et vomissements de la grossesse',
      sec: 'autorise',
    }),
  ],

  // ------------------------------------------------------------ Duloxétine
  duloxetine: [
    p('adulte', '30 mg/j pendant 1 semaine, puis 60 mg/j (maximum 120 mg/j)', {
      ind: 'Dépression, anxiété généralisée, douleur neuropathique diabétique, fibromyalgie',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Nausées, hypertension ; hépatotoxicité. Arrêt progressif.',
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Dutastéride
  dutasteride: [
    p('adulte', '0,5 mg/j', {
      ind: 'Hypertrophie bénigne de la prostate (volume > 40 mL)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Effet après 3 à 6 mois ; divise le PSA par 2. Manipulation des capsules interdite à la femme enceinte.',
    }),
  ],

  // ------------------------------------------------------------ Éfavirenz
  efavirenz: [
    p('adulte', '600 mg/j au coucher (400 mg/j possible), en association', {
      ind: 'Infection à VIH (si dolutégravir non utilisable)',
      voie: 'Orale, à jeun',
      freq: '1 fois par jour, au coucher',
      f: { n: 1 },
      rem: 'Troubles neuropsychiques (rêves, vertiges). Inducteur enzymatique (implant contraceptif moins efficace).',
    }),
    p('enfant', '≥ 3 ans et ≥ 10 kg : selon les bandes de poids (200–600 mg/j)', {
      ind: 'Infection à VIH',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Empagliflozine
  empagliflozine: [
    p('adulte', '10 mg/j (diabète : jusqu’à 25 mg/j)', {
      ind: 'Diabète de type 2, insuffisance cardiaque, maladie rénale chronique',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Infections génitales, acidocétose euglycémique (arrêt avant chirurgie et en cas de maladie aiguë).',
    }),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Éphédrine
  ephedrine: [
    p('adulte', '3–9 mg IV, à répéter toutes les 3 à 5 min (maximum 30 mg)', {
      ind: 'Hypotension de la rachianesthésie ou de l’anesthésie générale',
      voie: 'IV',
      f: 'schema',
    }),
    p('enfant', '0,1–0,2 mg/kg IV, à répéter', {
      ind: 'Hypotension peranesthésique',
      voie: 'IV',
      kg: 0.1,
      max: 9,
      f: 'schema',
    }),
    p('grossesse', 'Utilisable (césarienne ; la phényléphrine est souvent préférée)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Erlotinib
  erlotinib: [
    p('adulte', '150 mg/j, 1 h avant ou 2 h après le repas', {
      ind: 'Cancer bronchique non à petites cellules avec mutation de l’EGFR',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Éruption acnéiforme, diarrhée. Le tabac réduit son efficacité.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Éthosuximide
  ethosuximide: [
    p(
      'enfant',
      '3–6 ans : 250 mg/j ; ≥ 6 ans : 500 mg/j ; augmenter de 250 mg tous les 4 à 7 jours (habituellement 20–40 mg/kg/j)',
      {
        ind: 'Épilepsie-absences de l’enfant',
        voie: 'Orale',
        freq: '1 à 2 fois par jour',
        f: { n: 2 },
        rem: 'Troubles digestifs, NFS (rare).',
      },
    ),
    p('adulte', '500 mg/j, augmenter progressivement (maximum 2 g/j)', {
      ind: 'Absences',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Ézétimibe
  ezetimibe: [
    p('adulte', '10 mg/j (seul ou avec une statine)', {
      ind: 'Hypercholestérolémie',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Fébuxostat
  febuxostat: [
    p('adulte', '80 mg/j (120 mg/j si uricémie non contrôlée)', {
      ind: 'Goutte chronique (intolérance ou contre-indication à l’allopurinol)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Prudence si cardiopathie ischémique. Prévention des crises par colchicine au début.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Flucytosine
  flucytosine: [
    p('adulte', '25 mg/kg 4 fois par jour (100 mg/kg/j), avec amphotéricine B puis fluconazole', {
      ind: 'Méningite à cryptocoque (phase d’induction, OMS)',
      voie: 'Orale',
      kg: 25,
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[14, null, 'jours']],
      rem: 'NFS, créatinine ; adapter à la fonction rénale.',
    }),
    p('enfant', '25 mg/kg 4 fois par jour', {
      ind: 'Méningite à cryptocoque',
      voie: 'Orale',
      kg: 25,
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[14, null, 'jours']],
    }),
    p('grossesse', 'À éviter au 1er trimestre (bénéfice-risque)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Fluorescéine
  fluoresceine: [
    p('adulte', 'Collyre à 0,5–2 % (ou bandelette) : 1 goutte pour l’examen', {
      ind: 'Recherche d’ulcération cornéenne, corps étranger, test de Seidel',
      voie: 'Ophtalmique',
      unite: 'goutte',
      f: 'unique',
      rem: 'Angiographie : 500 mg IV (examen spécialisé). Retirer les lentilles souples.',
    }),
    p('enfant', 'Collyre ou bandelette : 1 goutte pour l’examen', {
      ind: 'Ulcération cornéenne, corps étranger',
      voie: 'Ophtalmique',
      unite: 'goutte',
      f: 'unique',
    }),
    p('grossesse', 'Usage diagnostique local possible', { sec: 'autorise' }),
  ],
};
