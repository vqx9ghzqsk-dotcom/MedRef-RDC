'use strict';

/**
 * Posologies — lot 5 : molécules 81 à 100 les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, paludisme, vaccination, TPI),
 * MSF Guide clinique et thérapeutique et Médicaments essentiels, notices.
 * Chimiothérapies : doses en mg/m² indicatives, protocole d'oncologie obligatoire.
 * Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Ésoméprazole
  esomeprazole: [
    p('adulte', '20–40 mg/j', {
      ind: 'Reflux gastro-œsophagien, ulcère, prévention sous AINS',
      voie: 'Orale',
      freq: '1 fois par jour, avant le repas',
      f: { n: 1 },
      durees: [[4, 8, 'semaines']],
    }),
    p('adulte', '80 mg IV puis 8 mg/h pendant 72 h', {
      ind: 'Hémorragie digestive haute (après endoscopie)',
      voie: 'IV',
      f: 'perfusion',
      durees: [[72, null, 'heures', 'Puis relais oral']],
    }),
    p('enfant', '1–11 ans : 10 mg/j (< 20 kg) ou 10–20 mg/j (≥ 20 kg)', {
      ind: 'Reflux gastro-œsophagien',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[8, null, 'semaines']],
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Fluorouracile
  fluorouracile: [
    p(
      'adulte',
      '400 mg/m² en bolus puis 2 400 mg/m² en perfusion de 46 h toutes les 2 semaines (FOLFOX), selon le protocole',
      {
        ind: 'Cancers colorectaux, gastriques, ORL, du sein (protocoles d’oncologie)',
        voie: 'IV',
        f: 'schema',
        rem: 'Mucite, diarrhée, syndrome main-pied, cardiotoxicité. Déficit en DPD : toxicité grave.',
      },
    ),
    p('adulte', 'Crème à 5 % : 1 à 2 applications par jour', {
      ind: 'Kératoses actiniques, carcinome basocellulaire superficiel',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
      durees: [[2, 4, 'semaines']],
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Lamotrigine
  lamotrigine: [
    p(
      'adulte',
      '25 mg/j pendant 2 semaines, 50 mg/j pendant 2 semaines, puis augmenter de 50–100 mg toutes les 1 à 2 semaines (entretien 100–400 mg/j)',
      {
        ind: 'Épilepsies, prévention des épisodes dépressifs bipolaires',
        voie: 'Orale',
        freq: '1 à 2 fois par jour',
        f: { n: 2 },
        rem: 'Titration lente obligatoire (syndrome de Stevens-Johnson). Avec valproate : diviser les doses par 2.',
      },
    ),
    p(
      'enfant',
      '0,3 mg/kg/j pendant 2 semaines puis augmentation progressive jusqu’à 1–10 mg/kg/j (selon les associations)',
      {
        ind: 'Épilepsies, absences',
        voie: 'Orale',
        kg: 0.3,
        base: 'par_jour',
        freq: '1 à 2 fois par jour',
        f: { n: 2 },
        sec: 'prudence',
      },
    ),
    p('grossesse', 'Antiépileptique de choix pendant la grossesse ; adapter la dose (taux en baisse)', {
      sec: 'autorise',
    }),
  ],

  // ------------------------------------------------------------ Miconazole (nitrate)
  'miconazole-nitrate': [
    p('adulte', 'Crème à 2 % : 2 applications par jour', {
      ind: 'Dermatophyties, candidoses cutanées, intertrigo',
      voie: 'Cutanée',
      unite: 'application',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[2, 4, 'semaines', 'Poursuivre 1 à 2 semaines après la guérison']],
    }),
    p('adulte', 'Gel buccal : 2,5 mL 4 fois par jour ; ovule vaginal 1 200 mg en dose unique', {
      ind: 'Candidose buccale, candidose vaginale',
      voie: 'Buccale ou vaginale',
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[7, 14, 'jours', 'Candidose buccale']],
      rem: 'Gel buccal contre-indiqué avec la warfarine (hémorragies).',
    }),
    p('enfant', 'Gel buccal : 1,25 mL 4 fois par jour (≥ 4 mois) ; crème : 2 fois par jour', {
      ind: 'Muguet, érythème fessier candidosique',
      voie: 'Buccale ou cutanée',
      unite: 'mL',
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[7, 14, 'jours']],
      rem: 'Gel buccal : appliquer en petites quantités (risque de fausse route chez le nourrisson).',
    }),
    p('grossesse', 'Voies cutanée et vaginale utilisables', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Olanzapine
  olanzapine: [
    p('adulte', '10 mg/j (5–20 mg/j) ; agitation : 10 mg IM', {
      ind: 'Schizophrénie, épisode maniaque, agitation',
      voie: 'Orale ou IM',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Prise de poids, diabète, dyslipidémie : surveiller. Sujet âgé : 5 mg/j.',
    }),
    p('grossesse', 'Utilisable si nécessaire ; surveiller la glycémie', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Sulfadoxine (avec pyriméthamine)
  sulfadoxine: [
    p(
      'grossesse',
      '3 comprimés de SP (500 mg de sulfadoxine / 25 mg de pyriméthamine) en dose unique, à chaque CPN dès 13 SA, à au moins 1 mois d’intervalle',
      {
        ind: 'Traitement préventif intermittent du paludisme (TPIp)',
        voie: 'Orale, prise supervisée',
        unite: 'comprimé',
        f: 'schema',
        sec: 'autorise',
        rem: 'Ne pas donner si cotrimoxazole (VIH). Acide folique ≤ 0,4 mg/j autorisé.',
      },
    ),
    p(
      'enfant',
      'SP en dose unique selon l’âge : 2–11 mois ½ comprimé ; 1–5 ans 1 comprimé (avec amodiaquine, CPS)',
      {
        ind: 'Chimioprévention saisonnière ou pérenne du paludisme (selon le programme)',
        voie: 'Orale',
        unite: 'comprimé',
        f: 'schema',
      },
    ),
    p('adulte', '25 mg/kg de sulfadoxine (3 comprimés à partir de 50 kg) en dose unique, en association', {
      ind: 'Paludisme (associations à base d’artésunate, selon le programme)',
      voie: 'Orale',
      kg: 25,
      max: 1500,
      f: 'unique',
      rem: 'Allergie aux sulfamides : contre-indiqué (syndrome de Lyell).',
    }),
  ],

  // ------------------------------------------------------------ Vaccin pneumococcique conjugué
  'vaccin-pneumococcique-conjugue': [
    p('enfant', '0,5 mL IM à 6, 10 et 14 semaines (PEV)', {
      ind: 'Vaccination de routine du nourrisson',
      voie: 'IM (cuisse)',
      unite: 'mL',
      f: 'schema',
      rem: 'Rattrapage possible jusqu’à 5 ans ; drépanocytose et asplénie : schéma renforcé.',
    }),
    p('adulte', '0,5 mL IM en dose unique', {
      ind: 'Adultes à risque (asplénie, drépanocytose, VIH, sujet âgé)',
      voie: 'IM',
      unite: 'mL',
      f: 'unique',
    }),
    p('grossesse', 'Non systématique ; possible si indication', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Acide zolédronique
  'acide-zoledronique': [
    p('adulte', '4 mg IV en 15 min, toutes les 3 à 4 semaines', {
      ind: 'Hypercalcémie maligne, métastases osseuses, myélome',
      voie: 'IV',
      f: 'schema',
      rem: 'Adapter à la fonction rénale ; hydratation ; ostéonécrose de la mâchoire (bilan dentaire avant).',
    }),
    p('adulte', '5 mg IV une fois par an', {
      ind: 'Ostéoporose post-ménopausique, maladie de Paget',
      voie: 'IV',
      f: 'unique',
      rem: 'Calcium et vitamine D associés.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Apixaban
  apixaban: [
    p(
      'adulte',
      '5 mg 2 fois par jour (2,5 mg 2 fois par jour si 2 critères parmi : ≥ 80 ans, ≤ 60 kg, créatinine ≥ 133 µmol/L)',
      {
        ind: 'Fibrillation atriale non valvulaire',
        voie: 'Orale',
        freq: '2 fois par jour',
        f: { n: 2 },
        rem: 'Non indiqué pour les valves mécaniques ni le rétrécissement mitral rhumatismal.',
      },
    ),
    p('adulte', '10 mg 2 fois par jour pendant 7 jours, puis 5 mg 2 fois par jour', {
      ind: 'Thrombose veineuse profonde, embolie pulmonaire',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[3, 6, 'mois']],
    }),
    p('grossesse', 'Contre-indiqué : utiliser une héparine', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Bétaméthasone (topique)
  'betamethasone-topique': [
    p('adulte', 'Crème ou pommade à 0,05–0,1 % : 1 à 2 applications par jour en couche fine', {
      ind: 'Eczéma, psoriasis, dermatoses inflammatoires',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      durees: [[1, 4, 'semaines']],
      rem: 'Dermocorticoïde fort : éviter le visage et les plis, arrêt progressif. Mésusage dépigmentant à proscrire.',
    }),
    p('enfant', '1 application par jour, sur une courte durée', {
      ind: 'Eczéma sévère, poussées localisées',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[5, 7, 'jours']],
      sec: 'prudence',
      rem: 'Éviter chez le nourrisson et sous les couches.',
    }),
    p('grossesse', 'Utilisable sur des surfaces limitées', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Bromocriptine
  bromocriptine: [
    p('adulte', '1,25 mg le soir, augmenter progressivement jusqu’à 2,5–15 mg/j en 2 à 3 prises', {
      ind: 'Hyperprolactinémie, prolactinome, acromégalie',
      voie: 'Orale',
      freq: '2 à 3 fois par jour, au repas',
      f: { n: 2 },
      rem: 'Hypotension orthostatique, nausées. La cabergoline est mieux tolérée.',
    }),
    p('adulte', '2,5 mg 2 fois par jour', {
      ind: 'Inhibition de la lactation (si indication médicale), cardiomyopathie du péripartum (avis spécialisé)',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[14, null, 'jours']],
      rem: 'Risque d’accidents cardiovasculaires post-partum : ne pas utiliser pour une simple inhibition de confort.',
    }),
    p('grossesse', 'Arrêter dès la grossesse sauf macroprolactinome (avis spécialisé)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Captopril
  captopril: [
    p('adulte', '12,5–25 mg 2 à 3 fois par jour (maximum 150 mg/j)', {
      ind: 'Hypertension artérielle, insuffisance cardiaque, néphropathie',
      voie: 'Orale',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      rem: 'Débuter à 6,25 mg si insuffisance cardiaque. Créatinine et kaliémie à 1–2 semaines. Toux, angio-œdème.',
    }),
    p('enfant', '0,1–0,3 mg/kg par prise 2 à 3 fois par jour (maximum 6 mg/kg/j)', {
      ind: 'Insuffisance cardiaque, hypertension (avis spécialisé)',
      voie: 'Orale',
      kg: 0.3,
      max: 50,
      freq: '3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiqué (2e et 3e trimestres : atteinte rénale fœtale)', {
      sec: 'contre_indique',
    }),
  ],

  // ------------------------------------------------------------ Céfixime
  cefixime: [
    p('adulte', '400 mg en dose unique', {
      ind: 'Gonococcie non compliquée (si ceftriaxone indisponible)',
      voie: 'Orale',
      f: 'unique',
    }),
    p('adulte', '200 mg 2 fois par jour', {
      ind: 'Infection urinaire, fièvre typhoïde (relais), shigellose',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [
        [7, 14, 'jours', 'Typhoïde', true],
        [5, 7, 'jours', 'Infection urinaire'],
      ],
    }),
    p('enfant', '8 mg/kg/j en 1 ou 2 prises (typhoïde : 15–20 mg/kg/j en 2 prises)', {
      ind: 'Infection urinaire, otite, typhoïde, shigellose',
      voie: 'Orale',
      kg: 4,
      max: 200,
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [
        [7, 14, 'jours', 'Typhoïde', true],
        [5, 10, 'jours', 'Autres infections'],
      ],
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Chlorure de sodium hypertonique 3 %
  'chlorure-de-sodium-hypertonique': [
    p('adulte', '150 mL de NaCl 3 % IV en 20 min, à répéter jusqu’à 2 fois selon la natrémie', {
      ind: 'Hyponatrémie symptomatique sévère (convulsions, coma)',
      voie: 'IV',
      unite: 'mL',
      f: 'schema',
      rem: 'Objectif : +5 mmol/L la 1re heure ; ne pas dépasser +10 mmol/L par 24 h (myélinolyse).',
    }),
    p('enfant', '2–5 mL/kg de NaCl 3 % IV en 10 à 20 min (maximum 150 mL)', {
      ind: 'Hyponatrémie symptomatique, hypertension intracrânienne',
      voie: 'IV',
      kg: 3,
      max: 150,
      unite: 'mL',
      f: 'schema',
    }),
    p('adulte', 'Nébulisation de 4 mL de NaCl 3 % à 7 %, 2 fois par jour', {
      ind: 'Mucoviscidose, bronchiolite hospitalisée (NaCl 3 %)',
      voie: 'Inhalée (nébulisation)',
      unite: 'mL',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Bronchodilatateur préalable si bronchospasme.',
    }),
    p('grossesse', 'Utilisable en urgence', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Clopidogrel
  clopidogrel: [
    p('adulte', 'Dose de charge 300–600 mg puis 75 mg/j', {
      ind: 'Syndrome coronarien aigu, angioplastie (avec aspirine), AVC ischémique',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [12, null, 'mois', 'Syndrome coronarien aigu', true],
        [21, null, 'jours', 'AIT ou AVC mineur (avec aspirine)'],
      ],
      rem: 'Éviter l’oméprazole (interaction) : préférer le pantoprazole.',
    }),
    p('grossesse', 'Si nécessaire uniquement', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Cyclopentolate
  cyclopentolate: [
    p('adulte', 'Collyre à 0,5–1 % : 1 goutte, à répéter après 5 à 10 min', {
      ind: 'Cycloplégie (réfraction), uvéite antérieure',
      voie: 'Ophtalmique',
      unite: 'goutte',
      f: 'schema',
    }),
    p('enfant', 'Collyre à 0,5 % (< 1 an) ou 1 % : 1 goutte, à répéter après 5 à 10 min', {
      ind: 'Réfraction sous cycloplégie',
      voie: 'Ophtalmique',
      unite: 'goutte',
      f: 'schema',
      sec: 'prudence',
      rem: 'Comprimer le point lacrymal (effets systémiques : agitation, tachycardie).',
    }),
    p('grossesse', 'Usage ponctuel possible', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Étoposide
  etoposide: [
    p('adulte', '100 mg/m²/j IV pendant 3 à 5 jours, toutes les 3 semaines, selon le protocole', {
      ind: 'Cancer bronchique à petites cellules, tumeurs germinales, lymphomes',
      voie: 'IV',
      f: 'schema',
      rem: 'Myélosuppression ; perfusion lente (hypotension).',
    }),
    p('enfant', 'Selon le protocole d’oncologie pédiatrique (mg/m²)', {
      ind: 'Leucémies, tumeurs solides de l’enfant',
      voie: 'IV',
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiqué au 1er trimestre', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Flucloxacilline
  flucloxacilline: [
    p('adulte', '500 mg–1 g 4 fois par jour per os ; 1–2 g IV toutes les 6 h si grave', {
      ind: 'Infections à staphylocoque (cellulite, impétigo étendu, ostéite, arthrite)',
      voie: 'Orale ou IV',
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [
        [7, 10, 'jours', 'Peau et tissus mous', true],
        [4, 6, 'semaines', 'Ostéite, arthrite'],
      ],
      rem: 'À jeun (1 h avant le repas). Hépatite cholestatique rare.',
    }),
    p('enfant', '12,5–25 mg/kg 4 fois par jour (maximum 1 g par prise)', {
      ind: 'Infections à staphylocoque',
      voie: 'Orale ou IV',
      kg: 25,
      max: 1000,
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[7, 10, 'jours']],
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Létrozole
  letrozole: [
    p('adulte', '2,5 mg/j', {
      ind: 'Cancer du sein hormonodépendant (femme ménopausée)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[5, null, 'mois', 'Adjuvant : en pratique 5 ans']],
      rem: 'Surveillance de la densité osseuse ; arthralgies.',
    }),
    p('adulte', '2,5–7,5 mg/j du 3e au 7e jour du cycle', {
      ind: 'Induction de l’ovulation (syndrome des ovaires polykystiques)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[5, null, 'jours']],
      rem: 'Surveillance échographique de la réponse ovarienne.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Nitrofurantoïne
  nitrofurantoine: [
    p('adulte', '100 mg 2 fois par jour (forme à libération prolongée) ou 50–100 mg 4 fois par jour', {
      ind: 'Cystite aiguë',
      voie: 'Orale, au cours du repas',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[5, 7, 'jours']],
      rem: 'Pas de traitement prolongé (atteintes pulmonaires et hépatiques). Contre-indiquée si DFG < 45 mL/min.',
    }),
    p('enfant', '≥ 3 mois : 1,5 mg/kg 4 fois par jour (maximum 100 mg par prise)', {
      ind: 'Cystite',
      voie: 'Orale',
      kg: 1.5,
      max: 100,
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[3, 5, 'jours']],
    }),
    p('grossesse', 'Utilisable sauf à terme (anémie hémolytique néonatale)', { sec: 'prudence' }),
  ],
};
