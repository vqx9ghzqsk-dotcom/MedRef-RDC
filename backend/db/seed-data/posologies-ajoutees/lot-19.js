'use strict';

/**
 * Posologies — lot 19 : molécules suivantes les plus citées dans les fiches sans posologie.
 * Sources : OMS (médicaments essentiels, paludisme, tuberculose, hépatite C, VIH), MSF Guide
 * clinique et thérapeutique et Médicaments essentiels, notices. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Primidone
  primidone: [
    p(
      'adulte',
      '62,5 mg au coucher, augmenter progressivement jusqu’à 250–750 mg/j (tremblement : 50–250 mg/j)',
      {
        ind: 'Tremblement essentiel, épilepsies (2e intention)',
        voie: 'Orale',
        freq: '1 à 2 fois par jour',
        f: { n: 2 },
        rem: 'Métabolisée en phénobarbital : sédation, dépendance ; inducteur enzymatique.',
      },
    ),
    p('enfant', '10–25 mg/kg/j en 2 prises, augmentation lente (avis spécialisé)', {
      ind: 'Épilepsies',
      voie: 'Orale',
      kg: 15,
      base: 'par_jour',
      freq: '2 fois par jour',
      f: { n: 2 },
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter (préférer la lamotrigine ou le lévétiracétam)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Pyridostigmine
  pyridostigmine: [
    p('adulte', '30–60 mg 3 à 4 fois par jour, ajuster jusqu’à 120 mg toutes les 4 h au maximum', {
      ind: 'Myasthénie',
      voie: 'Orale',
      freq: '4 fois par jour',
      f: { n: 4 },
      rem: 'Effets muscariniques (diarrhée, hypersalivation) ; crise cholinergique en cas de surdosage.',
    }),
    p('enfant', '1 mg/kg toutes les 4 à 6 h (maximum 7 mg/kg/j)', {
      ind: 'Myasthénie, syndromes myasthéniques congénitaux',
      voie: 'Orale',
      kg: 1,
      max: 60,
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable (myasthénie)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Pyronaridine (+ artésunate)
  pyronaridine: [
    p('adulte', 'Pyronaridine-artésunate (180/60 mg) : 45–65 kg : 3 comprimés/j ; ≥ 65 kg : 4 comprimés/j', {
      ind: 'Paludisme simple à P. falciparum ou P. vivax',
      voie: 'Orale',
      unite: 'comprimé',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[3, null, 'jours']],
      rem: 'Bilan hépatique si antécédent d’hépatite.',
    }),
    p(
      'enfant',
      'Granulés (60/20 mg) ou comprimés selon le poids : 5–8 kg : 1 sachet ; 8–15 kg : 2 ; 15–20 kg : 3 ; 20–24 kg : 1 comprimé ; 24–45 kg : 2 comprimés',
      {
        ind: 'Paludisme simple (≥ 5 kg)',
        voie: 'Orale',
        freq: '1 fois par jour',
        f: { n: 1 },
        durees: [[3, null, 'jours']],
      },
    ),
    p('grossesse', 'Utilisable au 2e et 3e trimestres', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Remdésivir
  remdesivir: [
    p('adulte', '200 mg IV à J1, puis 100 mg/j', {
      ind: 'COVID-19 (hospitalisé sous oxygène ou à haut risque d’aggravation : 3 jours)',
      voie: 'IV',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [5, null, 'jours', 'Hospitalisé sous oxygène', true],
        [3, null, 'jours', 'Non hospitalisé à haut risque'],
      ],
      rem: 'Transaminases ; bradycardie.',
    }),
    p('enfant', '≥ 3 kg : 5 mg/kg IV à J1 puis 2,5 mg/kg/j (≥ 40 kg : dose adulte)', {
      ind: 'COVID-19',
      voie: 'IV',
      kg: 5,
      max: 200,
      f: 'schema',
      durees: [[5, null, 'jours']],
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Rifapentine
  rifapentine: [
    p(
      'adulte',
      '3HP : 900 mg + isoniazide 900 mg une fois par semaine pendant 12 semaines ; 1HP : 600 mg/j + isoniazide 300 mg/j pendant 1 mois',
      {
        ind: 'Traitement préventif de la tuberculose (infection latente)',
        voie: 'Orale',
        f: 'schema',
        durees: [
          [12, null, 'semaines', '3HP', true],
          [1, null, 'mois', '1HP'],
        ],
        rem: 'Pyridoxine associée. Interactions (contraception hormonale, antirétroviraux sauf dolutégravir et éfavirenz).',
      },
    ),
    p(
      'enfant',
      '≥ 2 ans, 3HP selon le poids : 10–15 kg : 300 mg ; 16–23 kg : 450 mg ; 24–30 kg : 600 mg ; ≥ 31 kg : 750–900 mg par semaine',
      {
        ind: 'Traitement préventif de la tuberculose',
        voie: 'Orale',
        f: 'schema',
        durees: [[12, null, 'semaines']],
      },
    ),
    p('grossesse', 'Données limitées (préférer l’isoniazide seule)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Rifaximine
  rifaximine: [
    p('adulte', '550 mg 2 fois par jour', {
      ind: 'Prévention des récidives d’encéphalopathie hépatique (avec lactulose)',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Diarrhée du voyageur non invasive : 200 mg 3 fois par jour pendant 3 jours.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Riluzole
  riluzole: [
    p('adulte', '50 mg 2 fois par jour', {
      ind: 'Sclérose latérale amyotrophique',
      voie: 'Orale, à jeun',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Transaminases mensuelles les 3 premiers mois ; neutropénie.',
    }),
  ],

  // ------------------------------------------------------------ Ritonavir
  ritonavir: [
    p(
      'adulte',
      '100 mg 1 à 2 fois par jour (« booster » d’un inhibiteur de protéase : atazanavir, darunavir, lopinavir)',
      {
        ind: 'Infection à VIH (potentialisation)',
        voie: 'Orale, au repas',
        freq: '1 à 2 fois par jour',
        f: { n: 1 },
        rem: 'Inhibiteur puissant du CYP3A4 : vérifier toutes les associations.',
      },
    ),
    p('enfant', 'Selon l’inhibiteur de protéase associé et les bandes de poids OMS', {
      ind: 'Infection à VIH',
      voie: 'Orale',
      f: { n: 2 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Rivastigmine
  rivastigmine: [
    p(
      'adulte',
      '1,5 mg 2 fois par jour, augmenter toutes les 2 semaines jusqu’à 3–6 mg 2 fois par jour ; patch 4,6 puis 9,5 mg/24 h',
      {
        ind: 'Maladie d’Alzheimer, démence de la maladie de Parkinson',
        voie: 'Orale (au repas) ou transdermique',
        freq: '2 fois par jour',
        f: { n: 2 },
        rem: 'Nausées, perte de poids, bradycardie. Reprendre à la dose initiale après 3 jours d’interruption.',
      },
    ),
  ],

  // ------------------------------------------------------------ Rizatriptan
  rizatriptan: [
    p('adulte', '10 mg au début de la crise, à renouveler après 2 h (maximum 20 mg/j)', {
      ind: 'Crise de migraine',
      voie: 'Orale',
      f: 'schema',
      rem: '5 mg avec le propranolol. Contre-indications cardiovasculaires.',
    }),
    p('enfant', '6–17 ans : 5 mg (< 40 kg) ou 10 mg (≥ 40 kg)', {
      ind: 'Crise de migraine',
      voie: 'Orale',
      f: 'unique',
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Salmétérol
  salmeterol: [
    p('adulte', '50 µg 2 fois par jour, toujours avec un corticoïde inhalé dans l’asthme', {
      ind: 'Asthme persistant (association), BPCO',
      voie: 'Inhalée',
      unite: 'µg',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Jamais en monothérapie dans l’asthme. Pas un traitement de crise.',
    }),
    p('enfant', '≥ 4 ans : 50 µg 2 fois par jour (avec corticoïde inhalé)', {
      ind: 'Asthme persistant',
      voie: 'Inhalée',
      unite: 'µg',
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Sévoflurane
  sevoflurane: [
    p('adulte', 'Induction : jusqu’à 8 % ; entretien : 0,5–3 %', {
      ind: 'Anesthésie générale par inhalation',
      voie: 'Inhalée (vaporisateur calibré)',
      unite: '%',
      f: 'schema',
      rem: 'Agitation au réveil ; hyperthermie maligne.',
    }),
    p('enfant', 'Induction au masque : jusqu’à 8 % ; entretien : 2–3 %', {
      ind: 'Anesthésie générale (agent d’induction de choix chez l’enfant)',
      voie: 'Inhalée',
      unite: '%',
      f: 'schema',
    }),
    p('grossesse', 'Utilisable ; relâchement utérin à forte concentration', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Sildénafil
  sildenafil: [
    p('adulte', '50 mg 1 h avant le rapport (25–100 mg ; 1 fois par 24 h au maximum)', {
      ind: 'Dysfonction érectile',
      voie: 'Orale',
      f: 'schema',
      rem: 'CONTRE-INDIQUÉ avec les dérivés nitrés (trinitrine). Hypotension.',
    }),
    p('adulte', '20 mg 3 fois par jour', {
      ind: 'Hypertension artérielle pulmonaire',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
    }),
    p('enfant', 'HTAP : 0,5–1 mg/kg 3 fois par jour (avis spécialisé)', {
      ind: 'Hypertension artérielle pulmonaire',
      voie: 'Orale',
      kg: 0.5,
      max: 20,
      freq: '3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('grossesse', 'HTAP : si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Simvastatine
  simvastatine: [
    p('adulte', '20–40 mg/j le soir', {
      ind: 'Hypercholestérolémie, prévention cardiovasculaire',
      voie: 'Orale',
      freq: '1 fois par jour, le soir',
      f: { n: 1 },
      rem: 'Myopathie : interactions (clarithromycine, azolés, amlodipine > 20 mg, inhibiteurs de protéase).',
    }),
    p('enfant', '≥ 10 ans : 10–40 mg/j (avis spécialisé)', {
      ind: 'Hypercholestérolémie familiale',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Sofosbuvir
  sofosbuvir: [
    p('adulte', '400 mg/j avec daclatasvir ou velpatasvir', {
      ind: 'Hépatite C chronique',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [12, null, 'semaines', 'Sans cirrhose', true],
        [24, null, 'semaines', 'Cirrhose (selon l’association)'],
      ],
      rem: 'Bradycardie grave avec l’amiodarone : contre-indiqué. Dépister l’hépatite B.',
    }),
    p('enfant', '≥ 3 ans : selon le poids (avis spécialisé)', {
      ind: 'Hépatite C chronique',
      voie: 'Orale',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Non recommandé (traiter après l’accouchement)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Solifénacine
  solifenacine: [
    p('adulte', '5 mg/j (maximum 10 mg/j)', {
      ind: 'Hyperactivité vésicale, incontinence par urgenturie',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Effets anticholinergiques ; prudence chez le sujet âgé (confusion). Contre-indiqué si glaucome à angle fermé, rétention.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Sorafénib
  sorafenib: [
    p('adulte', '400 mg 2 fois par jour, à jeun', {
      ind: 'Carcinome hépatocellulaire avancé, cancer du rein, cancer thyroïdien réfractaire',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Syndrome main-pied, hypertension, diarrhée.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Streptomycine
  streptomycine: [
    p('adulte', '15 mg/kg/j IM (maximum 1 g ; > 60 ans : 500–750 mg)', {
      ind: 'Tuberculose (schémas spécifiques), brucellose, peste, tularémie',
      voie: 'IM',
      kg: 15,
      base: 'par_jour',
      max: 1000,
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Ototoxicité (vestibulaire), néphrotoxicité.',
    }),
    p('enfant', '15–20 mg/kg/j IM (maximum 1 g)', {
      ind: 'Tuberculose, peste',
      voie: 'IM',
      kg: 15,
      base: 'par_jour',
      max: 1000,
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiquée (surdité congénitale)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Sucralfate
  sucralfate: [
    p('adulte', '1 g 4 fois par jour (1 h avant les repas et au coucher)', {
      ind: 'Ulcère gastroduodénal, prévention de l’ulcère de stress',
      voie: 'Orale',
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[4, 8, 'semaines']],
      rem: 'Espacer de 2 h des autres médicaments. Constipation ; aluminium (insuffisance rénale).',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Sumatriptan
  sumatriptan: [
    p(
      'adulte',
      '50–100 mg per os au début de la crise, à renouveler après 2 h (maximum 300 mg/j) ; 6 mg SC (algie vasculaire)',
      {
        ind: 'Crise de migraine, algie vasculaire de la face',
        voie: 'Orale, SC ou nasale',
        f: 'schema',
        rem: 'Contre-indiqué si coronaropathie, HTA non contrôlée, AVC.',
      },
    ),
    p('enfant', '≥ 12 ans : spray nasal 10 mg', {
      ind: 'Crise de migraine',
      voie: 'Nasale',
      f: 'unique',
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable si nécessaire (données rassurantes)', { sec: 'prudence' }),
  ],
};
