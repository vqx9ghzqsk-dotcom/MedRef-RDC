'use strict';

/**
 * Posologies — lot 20 : dernières molécules citées dans les fiches sans posologie.
 * Sources : OMS (médicaments essentiels, PEV, paludisme, Ebola, hépatite C), MSF Guide clinique
 * et thérapeutique et Médicaments essentiels, notices. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Tadalafil
  tadalafil: [
    p('adulte', '10–20 mg 30 min avant le rapport, ou 5 mg/j en continu', {
      ind: 'Dysfonction érectile, hypertrophie bénigne de la prostate (5 mg/j)',
      voie: 'Orale',
      f: 'schema',
      rem: 'CONTRE-INDIQUÉ avec les dérivés nitrés. HTAP : 40 mg/j.',
    }),
    p('grossesse', 'HTAP : si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Tamoxifène
  tamoxifene: [
    p('adulte', '20 mg/j', {
      ind: 'Cancer du sein hormonodépendant (adjuvant, métastatique), femme non ménopausée',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[5, 10, 'mois', 'Adjuvant : en pratique 5 à 10 ans']],
      rem: 'Thromboses, cancer de l’endomètre (saignements à explorer). Contraception non hormonale.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Tazobactam
  tazobactam: [
    p('adulte', 'Toujours associé à la pipéracilline : 4 g/0,5 g IV toutes les 6 à 8 h', {
      ind: 'Infections graves (voir pipéracilline)',
      voie: 'IV',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      durees: [[7, 14, 'jours']],
      rem: 'Dose exprimée en pipéracilline. Ceftolozane-tazobactam : réserve (bacilles multirésistants).',
    }),
    p('enfant', 'Pipéracilline-tazobactam : 90 mg/kg de pipéracilline toutes les 6 à 8 h', {
      ind: 'Infections graves',
      voie: 'IV',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Terbutaline
  terbutaline: [
    p('adulte', '0,25–0,5 mg SC, à répéter après 15–30 min ; inhalé 0,5 mg à la demande', {
      ind: 'Asthme aigu (si salbutamol indisponible)',
      voie: 'SC ou inhalée',
      f: 'schema',
    }),
    p('enfant', '0,005–0,01 mg/kg SC (maximum 0,3 mg), à répéter après 15–20 min', {
      ind: 'Asthme aigu grave',
      voie: 'SC',
      kg: 0.01,
      max: 0.3,
      f: 'schema',
    }),
    p('grossesse', 'Tocolyse : 0,25 mg SC toutes les 20–30 min (courte durée, préférer la nifédipine)', {
      sec: 'prudence',
      rem: 'Tachycardie maternelle, œdème pulmonaire : pas d’usage prolongé.',
    }),
  ],

  // ------------------------------------------------------------ Tétracaïne
  tetracaine: [
    p('adulte', 'Collyre à 0,5–1 % : 1 à 2 gouttes avant l’examen ou le geste', {
      ind: 'Anesthésie de surface de la cornée (tonométrie, corps étranger)',
      voie: 'Ophtalmique',
      unite: 'goutte',
      f: 'unique',
      rem: 'Jamais en traitement prolongé (kératite toxique). Protéger l’œil pendant 1 h.',
    }),
    p('enfant', '1 goutte avant l’examen ; gel à 4 % sur la peau 30–45 min avant une ponction (≥ 1 mois)', {
      ind: 'Anesthésie locale de surface',
      voie: 'Ophtalmique ou cutanée',
      unite: 'goutte',
      f: 'unique',
    }),
    p('grossesse', 'Usage ponctuel possible', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Thiocolchicoside
  thiocolchicoside: [
    p('adulte', '8 mg 2 fois par jour per os (maximum 16 mg/j) ou 4 mg IM 2 fois par jour', {
      ind: 'Contractures musculaires douloureuses (rachis), en complément',
      voie: 'Orale ou IM',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[5, 7, 'jours', 'Maximum 7 jours per os, 5 jours en IM']],
      rem: 'Génotoxicité potentielle : durée et dose limitées. Contraception efficace.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Tiotropium
  tiotropium: [
    p('adulte', '18 µg (poudre) ou 5 µg (2 bouffées de brumisateur) une fois par jour', {
      ind: 'BPCO (bronchodilatateur de fond), asthme sévère en association',
      voie: 'Inhalée',
      unite: 'µg',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Sécheresse buccale, rétention urinaire ; éviter le contact avec les yeux (glaucome).',
    }),
    p('enfant', '≥ 6 ans : 2,5 µg (2 bouffées) une fois par jour (asthme sévère, avis spécialisé)', {
      ind: 'Asthme sévère',
      voie: 'Inhalée',
      unite: 'µg',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Tizanidine
  tizanidine: [
    p(
      'adulte',
      '2 mg le soir, augmenter de 2 mg tous les 3 à 4 jours jusqu’à 12–24 mg/j en 3 prises (maximum 36 mg/j)',
      {
        ind: 'Spasticité',
        voie: 'Orale',
        freq: '3 fois par jour',
        f: { n: 3 },
        rem: 'Hypotension, somnolence, hépatotoxicité. Contre-indiqué avec la ciprofloxacine ou la fluvoxamine.',
      },
    ),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Trastuzumab (biosimilaire)
  'trastuzumab-biosimilaire': [
    p(
      'adulte',
      '8 mg/kg IV (charge) puis 6 mg/kg toutes les 3 semaines ; ou 600 mg SC toutes les 3 semaines',
      {
        ind: 'Cancer du sein HER2+ (adjuvant 1 an, métastatique), cancer gastrique HER2+',
        voie: 'IV ou SC',
        kg: 6,
        f: 'schema',
        durees: [[12, null, 'mois', 'Adjuvant']],
        rem: 'Échographie cardiaque (FEVG) avant et tous les 3 mois.',
      },
    ),
    p('grossesse', 'Contre-indiqué (oligoamnios)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Trimétazidine
  trimetazidine: [
    p('adulte', '35 mg 2 fois par jour (libération modifiée), au repas', {
      ind: 'Angor stable (en association, 2e intention)',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Syndromes parkinsoniens : contre-indiquée si maladie de Parkinson ; 35 mg/j si insuffisance rénale modérée.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Vaccin antipaludique
  'vaccin-antipaludique-rts-s-r21': [
    p(
      'enfant',
      '0,5 mL IM : 4 doses à partir de 5 mois (3 doses à 1 mois d’intervalle, 4e dose 12 mois après la 3e)',
      {
        ind: 'Prévention du paludisme à P. falciparum chez l’enfant (selon le programme national)',
        voie: 'IM',
        unite: 'mL',
        f: 'schema',
        rem: 'Ne remplace pas les moustiquaires ni la chimioprévention. Administration saisonnière possible.',
      },
    ),
  ],

  // ------------------------------------------------------------ Vaccin Ebola (Zaïre)
  'vaccin-ebola-zaire': [
    p('adulte', 'rVSV-ZEBOV : 1 mL IM en dose unique', {
      ind: 'Vaccination en anneau autour des cas, agents de santé et de première ligne (épidémie à virus Zaïre)',
      voie: 'IM (deltoïde)',
      unite: 'mL',
      f: 'unique',
      rem: 'Vaccin vivant ; chaîne du froid ultra-basse. Selon le protocole de riposte national.',
    }),
    p('enfant', '1 mL IM en dose unique à partir de 6 mois (selon le protocole de riposte)', {
      ind: 'Vaccination en anneau',
      voie: 'IM',
      unite: 'mL',
      f: 'unique',
    }),
    p('grossesse', 'Proposé en situation d’épidémie (bénéfice supérieur au risque, OMS)', {
      sec: 'prudence',
    }),
  ],

  // ------------------------------------------------------------ Varénicline
  varenicline: [
    p('adulte', '0,5 mg/j J1–J3, 0,5 mg 2 fois par jour J4–J7, puis 1 mg 2 fois par jour', {
      ind: 'Sevrage tabagique',
      voie: 'Orale, au repas',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[12, null, 'semaines']],
      rem: 'Arrêt du tabac fixé entre J8 et J35. Nausées, rêves anormaux ; surveiller l’humeur.',
    }),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Velpatasvir (+ sofosbuvir)
  velpatasvir: [
    p('adulte', 'Sofosbuvir-velpatasvir 400/100 mg : 1 comprimé par jour', {
      ind: 'Hépatite C chronique (pangénotypique)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[12, null, 'semaines']],
      rem: 'Éviter les IPP à forte dose et les inducteurs ; amiodarone contre-indiquée. Dépister l’hépatite B.',
    }),
    p('enfant', '≥ 3 ans : selon le poids (avis spécialisé)', {
      ind: 'Hépatite C chronique',
      voie: 'Orale',
      f: { n: 1 },
      durees: [[12, null, 'semaines']],
      sec: 'prudence',
    }),
    p('grossesse', 'Non recommandé (traiter après l’accouchement)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Vérapamil
  verapamil: [
    p('adulte', '40–120 mg 3 fois par jour (ou 240 mg/j en libération prolongée)', {
      ind: 'Angor, tachycardies supraventriculaires, contrôle de la fréquence dans la fibrillation atriale, hypertension',
      voie: 'Orale',
      freq: '1 à 3 fois par jour',
      f: { n: 3 },
      rem: 'Jamais avec un bêtabloquant IV. Contre-indiqué si insuffisance cardiaque à FE réduite, bloc AV.',
    }),
    p('adulte', '5 mg IV en 2 min, à répéter après 10 min', {
      ind: 'Tachycardie supraventriculaire (si adénosine inefficace ou contre-indiquée)',
      voie: 'IV lente',
      f: 'schema',
    }),
    p('enfant', 'Avis spécialisé ; contre-indiqué en IV avant 1 an', {
      ind: 'Tachycardies supraventriculaires',
      voie: 'Orale',
      sec: 'prudence',
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Vigabatrin
  vigabatrin: [
    p('enfant', '50 mg/kg/j en 2 prises, augmenter jusqu’à 100–150 mg/kg/j', {
      ind: 'Spasmes infantiles (syndrome de West), surtout sclérose tubéreuse',
      voie: 'Orale',
      kg: 50,
      base: 'par_jour',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Rétrécissement irréversible du champ visuel : bilan ophtalmologique ; durée limitée.',
    }),
    p('adulte', '1 g/j, augmenter jusqu’à 2–3 g/j en 1 à 2 prises', {
      ind: 'Épilepsies focales réfractaires (avis spécialisé)',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Vitamines (association)
  'vitamines-association': [
    p('adulte', '1 comprimé ou 1 dose par jour selon le produit', {
      ind: 'Carences multiples, dénutrition, convalescence',
      voie: 'Orale',
      unite: 'comprimé',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[1, 3, 'mois']],
      rem: 'Vérifier la composition (vitamine A chez la femme enceinte).',
    }),
    p('enfant', 'Dose pédiatrique selon le produit', {
      ind: 'Carences, convalescence',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[1, 3, 'mois']],
    }),
    p('grossesse', 'Préférer les micronutriments prénatals', { sec: 'autorise' }),
  ],
};
