'use strict';

/**
 * Posologies — lot 3 : molécules 41 à 60 les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, vaccination, santé maternelle),
 * MSF Guide clinique et thérapeutique et Médicaments essentiels, notices.
 * Chimiothérapies : doses en mg/m² données à titre indicatif, protocole d'oncologie obligatoire.
 * Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Baclofène
  baclofene: [
    p(
      'adulte',
      '5 mg 3 fois par jour, augmenter de 15 mg/j tous les 3 jours (habituellement 30–75 mg/j, maximum 100 mg/j)',
      {
        ind: 'Spasticité (lésion médullaire, sclérose en plaques, séquelles d’AVC)',
        voie: 'Orale',
        freq: '3 fois par jour',
        f: { n: 3 },
        rem: 'Arrêt progressif sur 1 à 2 semaines (risque de sevrage : convulsions, hallucinations). Réduire en insuffisance rénale.',
      },
    ),
    p('enfant', '0,3 mg/kg/j en 3 prises au début, augmenter progressivement jusqu’à 0,75–2 mg/kg/j', {
      ind: 'Spasticité (paralysie cérébrale)',
      voie: 'Orale',
      kg: 0.3,
      base: 'par_jour',
      max: 60,
      freq: '3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
      rem: 'Maximum 40 mg/j avant 8 ans, 60 mg/j après.',
    }),
    p('grossesse', 'À éviter, surtout au 1er trimestre', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Cyclophosphamide
  cyclophosphamide: [
    p('adulte', '500–1 000 mg/m² IV toutes les 3 à 4 semaines selon le protocole', {
      ind: 'Lymphomes, cancer du sein, autres cancers (protocoles d’oncologie)',
      voie: 'IV',
      f: 'schema',
      rem: 'Hydratation abondante et mesna selon la dose (cystite hémorragique). Numération avant chaque cure.',
    }),
    p('adulte', '500–1 000 mg/m² IV par mois (ou 500 mg toutes les 2 semaines, schéma Euro-Lupus)', {
      ind: 'Néphrite lupique, vascularites sévères (avis spécialisé)',
      voie: 'IV',
      f: 'schema',
      durees: [[3, 6, 'mois', 'Induction']],
    }),
    p('enfant', '40 mg/kg IV (schéma lymphome de Burkitt, protocole pédiatrique africain)', {
      ind: 'Lymphome de Burkitt (protocole GFAOP)',
      voie: 'IV',
      kg: 40,
      f: 'schema',
      sec: 'prudence',
      rem: 'Protocole d’oncologie pédiatrique obligatoire ; hydratation et prévention du syndrome de lyse.',
    }),
    p('grossesse', 'Contre-indiqué au 1er trimestre (tératogène) ; décision spécialisée ensuite', {
      sec: 'contre_indique',
    }),
  ],

  // ------------------------------------------------------------ Héparine non fractionnée
  'heparine-non-fractionnee': [
    p('adulte', 'Bolus de 80 UI/kg IV puis 18 UI/kg/h, à adapter au TCA (1,5–2,5 fois le témoin)', {
      ind: 'Thrombose veineuse, embolie pulmonaire, insuffisance rénale sévère',
      voie: 'IV continue (pousse-seringue)',
      kg: 80,
      unite: 'UI',
      freq: 'Bolus puis perfusion continue',
      f: 'perfusion',
      durees: [[5, null, 'jours', 'Jusqu’à 2 INR dans la cible sous AVK']],
      rem: 'TCA 6 h après le début puis après chaque changement ; plaquettes 2 fois par semaine (TIH).',
    }),
    p('adulte', '5 000 UI SC toutes les 8 à 12 h', {
      ind: 'Prévention de la thrombose veineuse',
      voie: 'SC',
      unite: 'UI',
      freq: 'Toutes les 12 h',
      f: { h: 12 },
    }),
    p('enfant', 'Bolus de 75 UI/kg IV puis 20 UI/kg/h (≥ 1 an) ou 28 UI/kg/h (< 1 an)', {
      ind: 'Thrombose (avis spécialisé)',
      voie: 'IV continue',
      kg: 75,
      unite: 'UI',
      f: 'perfusion',
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable (ne traverse pas le placenta)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Bicarbonate de sodium
  'bicarbonate-de-sodium': [
    p('adulte', '1 mmol/kg IV lente (8,4 % : 1 mL = 1 mmol), à répéter selon les gaz du sang', {
      ind: 'Acidose métabolique sévère (pH < 7,1), hyperkaliémie avec acidose, intoxication aux tricycliques',
      voie: 'IV lente',
      kg: 1,
      unite: 'mmol',
      f: 'schema',
      rem: 'Pas d’intérêt systématique dans l’acidocétose. Ne pas mélanger au calcium (précipité).',
    }),
    p('enfant', '1 mmol/kg IV lente (solution à 4,2 % chez le nourrisson)', {
      ind: 'Acidose métabolique sévère, hyperkaliémie',
      voie: 'IV lente',
      kg: 1,
      unite: 'mmol',
      f: 'schema',
    }),
    p('nouveau_ne', '1–2 mmol/kg IV lente de bicarbonate 4,2 % (dilué)', {
      ind: 'Acidose métabolique documentée',
      voie: 'IV lente',
      kg: 1,
      unite: 'mmol',
      f: 'schema',
      sec: 'prudence',
      rem: 'Plus recommandé en routine lors de la réanimation néonatale.',
    }),
    p('grossesse', 'Mêmes doses en urgence', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Érythromycine
  erythromycine: [
    p('adulte', '500 mg 4 fois par jour (ou 1 g 2 fois par jour)', {
      ind: 'Infections respiratoires, coqueluche, chlamydia, allergie à la pénicilline',
      voie: 'Orale',
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [
        [7, null, 'jours', 'Chlamydia', true],
        [14, null, 'jours', 'Coqueluche'],
      ],
    }),
    p('enfant', '12,5 mg/kg 4 fois par jour (maximum 500 mg par prise)', {
      ind: 'Coqueluche, infections respiratoires, impétigo',
      voie: 'Orale',
      kg: 12.5,
      max: 500,
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[7, 14, 'jours']],
    }),
    p('nouveau_ne', '12,5 mg/kg 4 fois par jour', {
      ind: 'Conjonctivite ou pneumonie à chlamydia',
      voie: 'Orale',
      kg: 12.5,
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[14, null, 'jours']],
      rem: 'Risque de sténose du pylore avant 2 semaines de vie.',
    }),
    p(
      'grossesse',
      '500 mg 4 fois par jour (rupture prématurée des membranes : 250 mg 4 fois par jour pendant 10 jours)',
      {
        sec: 'autorise',
        rem: 'Éviter la forme estolate.',
      },
    ),
  ],

  // ------------------------------------------------------------ Multivitamines
  multivitamines: [
    p('adulte', '1 comprimé par jour', {
      ind: 'Dénutrition, convalescence, supplémentation',
      voie: 'Orale',
      unite: 'comprimé',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[1, 3, 'mois']],
    }),
    p('enfant', '1 comprimé par jour (ou dose pédiatrique en sirop selon le produit)', {
      ind: 'Malnutrition, convalescence',
      voie: 'Orale',
      unite: 'comprimé',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[1, 3, 'mois']],
      rem: 'Malnutrition aiguë sévère : inutile si F-75, F-100 ou ATPE (déjà enrichis).',
    }),
    p('grossesse', 'Préférer les micronutriments prénatals (fer et acide folique au minimum)', {
      sec: 'autorise',
      rem: 'Éviter les préparations riches en vitamine A.',
    }),
  ],

  // ------------------------------------------------------------ Vaccin hépatite B
  'vaccin-hepatite-b': [
    p('nouveau_ne', '0,5 mL IM (face antérolatérale de la cuisse) dans les 24 h après la naissance', {
      ind: 'Dose de naissance (PEV)',
      voie: 'IM',
      unite: 'mL',
      f: 'unique',
      rem: 'Mère AgHBs positive : associer des immunoglobulines anti-HBs si disponibles. Puis vaccin pentavalent à 6, 10 et 14 semaines.',
    }),
    p('enfant', '0,5 mL IM : 3 doses (pentavalent à 6, 10 et 14 semaines, ou rattrapage à 0, 1 et 6 mois)', {
      ind: 'Vaccination de routine et rattrapage',
      voie: 'IM',
      unite: 'mL',
      f: 'schema',
    }),
    p('adulte', '1 mL IM (deltoïde) à 0, 1 et 6 mois', {
      ind: 'Personnel de santé, sujets à risque, contacts',
      voie: 'IM',
      unite: 'mL',
      f: 'schema',
      rem: 'Schéma accéléré possible (0, 1, 2 et 12 mois). Contrôle des anti-HBs chez le personnel de santé.',
    }),
    p('grossesse', 'Utilisable chez la femme à risque', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Immunoglobulines anti-D
  'immunoglobulines-anti-d': [
    p('grossesse', '300 µg (1 500 UI) IM ou IV à 28 SA chez la femme Rh négatif non immunisée', {
      ind: 'Prévention systématique de l’allo-immunisation anti-D',
      voie: 'IM ou IV',
      unite: 'µg',
      f: 'unique',
      sec: 'autorise',
    }),
    p('adulte', '200–300 µg IM ou IV dans les 72 h', {
      ind: 'Après accouchement d’un enfant Rh positif, avortement, grossesse extra-utérine, traumatisme abdominal',
      voie: 'IM ou IV',
      unite: 'µg',
      f: 'unique',
      rem: 'Adapter la dose au test de Kleihauer si hémorragie fœto-maternelle importante.',
    }),
  ],

  // ------------------------------------------------------------ Noradrénaline
  noradrenaline: [
    p('adulte', '0,05–0,1 µg/kg/min IV continue, à adapter (habituellement jusqu’à 1 µg/kg/min)', {
      ind: 'Choc septique, choc vasoplégique (objectif PAM ≥ 65 mmHg)',
      voie: 'IV continue (voie centrale de préférence)',
      unite: 'µg/kg/min',
      f: 'perfusion',
      rem: 'Après correction de l’hypovolémie. Voie périphérique possible brièvement sur une grosse veine (surveiller l’extravasation).',
    }),
    p('enfant', '0,05–0,1 µg/kg/min IV continue, à adapter (maximum 1–2 µg/kg/min)', {
      ind: 'Choc septique chaud, choc réfractaire au remplissage',
      voie: 'IV continue',
      unite: 'µg/kg/min',
      f: 'perfusion',
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable en cas de choc', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Vancomycine
  vancomycine: [
    p('adulte', '15–20 mg/kg IV toutes les 8 à 12 h (dose de charge 25–30 mg/kg si grave)', {
      ind: 'Infections à SARM, endocardite, méningite (avec céphalosporine)',
      voie: 'IV (perfusion d’au moins 1 h)',
      kg: 15,
      max: 2000,
      freq: 'Toutes les 12 h',
      f: { h: 12 },
      durees: [[7, 14, 'jours']],
      rem: 'Dosage de la résiduelle (15–20 mg/L) ; adapter à la fonction rénale. Perfusion trop rapide : « red man syndrome ».',
    }),
    p('adulte', '125 mg per os 4 fois par jour', {
      ind: 'Colite à Clostridioides difficile',
      voie: 'Orale',
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[10, null, 'jours']],
    }),
    p('enfant', '15 mg/kg IV toutes les 6 h', {
      ind: 'Infections graves à SARM, méningite',
      voie: 'IV',
      kg: 15,
      max: 1000,
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      durees: [[7, 14, 'jours']],
    }),
    p('nouveau_ne', '10–15 mg/kg IV toutes les 8 à 12 h selon l’âge', {
      ind: 'Sepsis à staphylocoque résistant',
      voie: 'IV',
      kg: 15,
      freq: 'Toutes les 12 h',
      f: { h: 12 },
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable si nécessaire avec surveillance des taux', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Cétirizine
  cetirizine: [
    p('adulte', '10 mg/j', {
      ind: 'Rhinite allergique, urticaire, prurit',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Urticaire chronique : jusqu’à 4 fois la dose (avis spécialisé). Insuffisance rénale : 5 mg/j.',
    }),
    p('enfant', '2–6 ans : 2,5 mg 2 fois par jour ; 6–12 ans : 5 mg 2 fois par jour (ou 10 mg/j)', {
      ind: 'Rhinite allergique, urticaire',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: '6 mois–2 ans : 2,5 mg 1 fois par jour (urticaire).',
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Cisplatine
  cisplatine: [
    p('adulte', '50–100 mg/m² IV toutes les 3 à 4 semaines, ou 40 mg/m² par semaine avec la radiothérapie', {
      ind: 'Cancers du col utérin, ORL, bronchique, testicule, vessie (protocoles d’oncologie)',
      voie: 'IV',
      f: 'schema',
      rem: 'Hyperhydratation, antiémétiques puissants, surveillance de la créatinine, du magnésium et de l’audition.',
    }),
    p('enfant', 'Selon le protocole d’oncologie pédiatrique (exprimé en mg/m²)', {
      ind: 'Tumeurs solides de l’enfant (hépatoblastome, neuroblastome, ostéosarcome)',
      voie: 'IV',
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiqué au 1er trimestre ; décision spécialisée ensuite', {
      sec: 'contre_indique',
    }),
  ],

  // ------------------------------------------------------------ Estradiol
  estradiol: [
    p('adulte', '1–2 mg/j per os, ou gel ou patch (25–50 µg/24 h), associé à un progestatif si utérus', {
      ind: 'Traitement hormonal de la ménopause, insuffisance ovarienne prématurée',
      voie: 'Orale ou transdermique',
      freq: '1 fois par jour (patch : 1 à 2 fois par semaine)',
      f: { n: 1 },
      rem: 'Dose minimale efficace ; réévaluer chaque année. Contre-indiqué si cancer du sein, antécédent thromboembolique.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Éthinylestradiol
  ethinylestradiol: [
    p('adulte', '20–35 µg/j en association avec un progestatif (pilule combinée), 21 jours sur 28', {
      ind: 'Contraception orale combinée',
      voie: 'Orale',
      unite: 'µg',
      freq: '1 fois par jour, à heure fixe',
      f: { n: 1 },
      rem: 'Contre-indiqué : > 35 ans fumeuse, HTA non contrôlée, migraine avec aura, antécédent thromboembolique, post-partum < 6 semaines.',
    }),
    p('grossesse', 'Contre-indiqué (inutile)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Fluconazole
  fluconazole: [
    p('adulte', '150 mg en dose unique', {
      ind: 'Candidose vaginale',
      voie: 'Orale',
      f: 'unique',
      rem: 'Récidivante : 150 mg à J1, J4 et J7 puis 1 fois par semaine pendant 6 mois.',
    }),
    p('adulte', '200 mg le 1er jour puis 100–200 mg/j', {
      ind: 'Candidose oropharyngée ou œsophagienne',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [7, 14, 'jours', 'Oropharyngée', true],
        [14, 21, 'jours', 'Œsophagienne'],
      ],
    }),
    p('adulte', '1 200 mg/j (avec flucytosine ou amphotéricine B), puis 800 mg/j puis 200 mg/j', {
      ind: 'Méningite à cryptocoque (VIH)',
      voie: 'Orale ou IV',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [2, null, 'semaines', 'Induction', true],
        [8, null, 'semaines', 'Consolidation (800 mg/j)'],
        [12, null, 'mois', 'Entretien (200 mg/j)'],
      ],
    }),
    p('enfant', '3–6 mg/kg/j en 1 prise (12 mg/kg/j dans la méningite à cryptocoque)', {
      ind: 'Candidoses, cryptococcose',
      voie: 'Orale',
      kg: 6,
      max: 400,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[7, 14, 'jours']],
    }),
    p(
      'grossesse',
      'Éviter les doses élevées et prolongées (malformations) ; dose unique de 150 mg déconseillée au 1er trimestre',
      {
        sec: 'prudence',
      },
    ),
  ],

  // ------------------------------------------------------------ Mélatonine
  melatonine: [
    p('adulte', '2 mg 1 à 2 h avant le coucher (formes à libération prolongée)', {
      ind: 'Insomnie du sujet de plus de 55 ans, troubles du rythme circadien',
      voie: 'Orale',
      freq: '1 fois par jour, le soir',
      f: { n: 1 },
      durees: [[3, 13, 'semaines']],
    }),
    p('enfant', '1–3 mg 30 à 60 min avant le coucher, maximum 5–6 mg', {
      ind: 'Troubles du sommeil de l’enfant avec trouble neurodéveloppemental (TSA, TDAH)',
      voie: 'Orale',
      freq: '1 fois par jour, le soir',
      f: { n: 1 },
      sec: 'prudence',
      rem: 'Après échec des mesures d’hygiène du sommeil.',
    }),
    p('grossesse', 'Déconseillée (données insuffisantes)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Ondansétron
  ondansetron: [
    p('adulte', '4–8 mg IV ou per os toutes les 8 à 12 h (maximum 16 mg par dose IV)', {
      ind: 'Nausées et vomissements (chimiothérapie, postopératoires)',
      voie: 'Orale ou IV',
      freq: 'Toutes les 12 h',
      f: { h: 12 },
      rem: 'Allongement du QT : prudence avec les autres médicaments qui l’allongent.',
    }),
    p('enfant', '0,15 mg/kg (maximum 4–8 mg) per os ou IV', {
      ind: 'Vomissements de la gastro-entérite (permettre la réhydratation orale), chimiothérapie',
      voie: 'Orale ou IV',
      kg: 0.15,
      max: 8,
      freq: 'Dose unique (gastro-entérite) ; toutes les 8 à 12 h (chimiothérapie)',
      f: 'unique',
    }),
    p('grossesse', 'Utilisable après échec des autres antiémétiques ; éviter si possible au 1er trimestre', {
      sec: 'prudence',
    }),
  ],

  // ------------------------------------------------------------ Tétracycline
  tetracycline: [
    p('adulte', '250–500 mg 4 fois par jour', {
      ind: 'Choléra (alternative), brucellose, rickettsioses, acné',
      voie: 'Orale',
      freq: '4 fois par jour',
      f: { n: 4 },
      durees: [[7, 14, 'jours']],
      rem: 'À jeun, avec un grand verre d’eau ; à distance des antiacides, du fer et du calcium.',
    }),
    p('adulte', 'Pommade ophtalmique à 1 % : 2 fois par jour', {
      ind: 'Trachome, conjonctivite bactérienne',
      voie: 'Ophtalmique',
      unite: 'application',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[6, null, 'semaines', 'Trachome']],
    }),
    p('nouveau_ne', 'Pommade ophtalmique à 1 % dans chaque œil à la naissance', {
      ind: 'Prophylaxie de la conjonctivite néonatale',
      voie: 'Ophtalmique',
      unite: 'application',
      f: 'unique',
    }),
    p('enfant', 'Voie orale contre-indiquée avant 8 ans (coloration dentaire)', {
      ind: 'Pommade ophtalmique utilisable à tout âge',
      voie: 'Ophtalmique',
      sec: 'contre_indique',
    }),
    p('grossesse', 'Voie orale contre-indiquée (2e et 3e trimestres)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Vincristine
  vincristine: [
    p('adulte', '1,4 mg/m² IV (maximum 2 mg par injection), selon le protocole', {
      ind: 'Lymphomes, leucémies aiguës, sarcome de Kaposi',
      voie: 'IV stricte',
      f: 'schema',
      rem: 'MORTELLE EN INTRATHÉCAL. Neurotoxicité (paresthésies, constipation). Vésicante.',
    }),
    p('enfant', '1,5 mg/m² IV (maximum 2 mg), selon le protocole d’oncologie pédiatrique', {
      ind: 'Leucémie aiguë lymphoblastique, néphroblastome, lymphome de Burkitt, rétinoblastome',
      voie: 'IV stricte',
      f: 'schema',
      sec: 'prudence',
      rem: 'Nourrisson < 10 kg : dose calculée en mg/kg (0,05 mg/kg) selon le protocole.',
    }),
    p('grossesse', 'Contre-indiquée au 1er trimestre ; décision spécialisée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Cyanocobalamine (vitamine B12)
  'cyanocobalamine-vitamine-b12': [
    p(
      'adulte',
      '1 000 µg IM tous les 2 jours pendant 1 à 2 semaines, puis 1 fois par semaine jusqu’à correction, puis tous les 1 à 3 mois',
      {
        ind: 'Carence en vitamine B12, maladie de Biermer',
        voie: 'IM',
        unite: 'µg',
        f: 'schema',
        rem: 'Biermer : traitement à vie. Voie orale (1 000–2 000 µg/j) possible en dehors de la malabsorption sévère.',
      },
    ),
    p('enfant', '250–1 000 µg IM selon l’âge, même schéma', {
      ind: 'Carence en vitamine B12',
      voie: 'IM',
      unite: 'µg',
      f: 'schema',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],
};
