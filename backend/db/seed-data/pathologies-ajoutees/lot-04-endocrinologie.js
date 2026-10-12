'use strict';

/**
 * Lot 4 (endocrinologie) — diabète de type 1 de l'adulte, acidocétose diabétique.
 * Rédigé par IA (ADA, ISPAD, IDF, OMS) : à valider.
 */

const ENDO = { departement: 'medecine-interne', specialite: 'Endocrinologie et diabétologie' };

module.exports = [
  // =================================================================== Diabète de type 1
  {
    ...ENDO,
    slug: 'diabete-type-1-adulte',
    nom: 'Diabète de type 1 de l’adulte',
    resume:
      'Carence absolue en insuline d’origine auto-immune : syndrome polyuro-polydipsique et amaigrissement, souvent révélé par une acidocétose ; insulinothérapie à vie.',
    definition:
      'Diabète par destruction auto-immune des cellules bêta du pancréas, entraînant une carence absolue en insuline ; il débute surtout avant 30 ans mais peut survenir à tout âge (dont la forme lente de l’adulte, LADA).',
    physiopathologie:
      '## Mécanismes\n- Destruction auto-immune des cellules bêta (anticorps anti-GAD, anti-IA2, anti-îlots)\n- Carence en insuline : hyperglycémie, lipolyse, cétogenèse\n- Sans insuline : acidocétose, décès',
    diagnostic:
      '## Critères du diabète (OMS)\n- Glycémie à jeun ≥ 1,26 g/L (7 mmol/L) à 2 reprises\n- Ou glycémie quelconque ≥ 2 g/L (11,1 mmol/L) avec symptômes\n- Ou HbA1c ≥ 6,5 %\n\n## Arguments pour un type 1\n- Sujet jeune, mince, début rapide\n- Polyurie, polydipsie, amaigrissement marqué, **cétonurie**\n- Révélation par une acidocétose\n- Anticorps anti-GAD positifs (si disponibles), peptide C bas',
    examens: [
      ['confirmation', 'glycemie', 'Glycémie à jeun ≥ 1,26 g/L ou quelconque ≥ 2 g/L avec symptômes.'],
      ['confirmation', 'hba1c', '≥ 6,5 % ; objectif de suivi < 7 %.'],
      [
        'premiere_intention',
        'bandelette-urinaire',
        'Glycosurie et **cétonurie** : orientent vers un type 1.',
      ],
      ['premiere_intention', 'ionogramme', 'Recherche d’une acidocétose débutante.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['suivi', 'fond-d-oeil', 'Rétinopathie : annuel à partir de 5 ans d’évolution.'],
      ['suivi', 'bilan-lipidique', 'Risque cardiovasculaire.'],
      ['suivi', 'tsh', 'Thyroïdite auto-immune associée.'],
    ],
    scores: [],
    differentiels: [
      ['diabete-type-2', 'Surpoids, début progressif, antécédents familiaux, pas de cétose.'],
      [
        'Diabète lié à la malnutrition ou pancréatique',
        'Pancréatite chronique, calcifications, malnutrition.',
      ],
      [
        'Diabète de type 2 cétosique (« Africain »)',
        'Révélé par une cétose mais rémission possible sans insuline après quelques mois.',
      ],
      ['Diabète cortico-induit', 'Prise de corticoïdes.'],
    ],
    etiologies:
      '## Cause\n- Auto-immunité contre les cellules bêta, sur terrain génétique (HLA)\n\n## Associations\n- Thyroïdite, maladie cœliaque, insuffisance surrénale, vitiligo',
    principes: [
      [
        'Insulinothérapie à vie',
        'Remplacer l’insuline absente.',
        '- Schéma basal-bolus : insuline lente (**NPH** 2 fois par jour ou **glargine** 1 fois par jour) + insuline **rapide** avant les repas\n- Dose de départ 0,5 à 0,7 U/kg/j (40 à 50 % en basal)\n- Schéma à 2 injections de mélange si autosurveillance limitée\n- Ne jamais arrêter l’insuline, même si le patient ne mange pas (adapter la dose)',
      ],
      [
        'Autosurveillance et objectifs',
        'Équilibrer sans hypoglycémie.',
        '- Glycémies capillaires avant les repas et au coucher\n- Objectifs : 0,8–1,3 g/L avant les repas, HbA1c < 7 %',
      ],
      [
        'Éducation thérapeutique',
        'Rendre le patient autonome.',
        '- Technique d’injection, rotation des sites, conservation de l’insuline (frais, à l’abri de la chaleur)\n- Reconnaître et traiter l’hypoglycémie (15 g de sucre)\n- Règles en cas de maladie : ne pas arrêter l’insuline, chercher la cétonurie, consulter',
      ],
      [
        'Prévention des complications',
        'Préserver yeux, reins, nerfs, pieds.',
        '- Fond d’œil, microalbuminurie, examen des pieds annuels\n- Contrôle de la PA et des lipides',
      ],
    ],
    molecules: [
      ['insuline-humaine-rapide', 'premiere', 'Bolus avant les repas'],
      ['insuline-nph', 'premiere', 'Insuline basale (2 injections par jour)'],
      ['insuline-glargine', 'alternative', 'Insuline basale (1 injection par jour)'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie sévère (avec glucose 30 % si disponible)'],
    ],
    complications: [
      {
        nom: 'Acidocétose diabétique',
        fiche: 'acidocetose-diabetique',
        description: 'Arrêt de l’insuline, infection.',
        traitement: '- Réhydratation, insuline IV, potassium',
        clinique: '- Polypnée, déshydratation, troubles de conscience',
        paraclinique: '- Glycémie, cétonurie, ionogramme',
      },
      {
        nom: 'Hypoglycémie',
        description: 'Surdosage, repas sauté, effort.',
        traitement: '- Sucre per os ; glucose IV si trouble de conscience',
        clinique: '- Sueurs, tremblements, confusion, coma',
        paraclinique: '- Glycémie capillaire',
      },
      {
        nom: 'Microangiopathie',
        description: 'Rétinopathie, néphropathie, neuropathie.',
        traitement: '- Équilibre glycémique, IEC, contrôle de la PA',
        clinique: '- Baisse de vision, pieds insensibles',
        paraclinique: '- Fond d’œil, protéinurie',
      },
    ],
    evolution:
      '## Pronostic\n- Bon sous insuline et éducation ; principal risque en RDC : rupture d’insuline et acidocétose',
    urgences: ['acidocetose-diabetique-urgence'],
    symptomes: [
      ['Polyurie-polydipsie', 'tres_frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Troubles visuels', 'occasionnel'],
    ],
    sources: ['ADA — Standards of Care in Diabetes', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Glycémie capillaire, cétonurie, poursuite de l’insuline, éducation',
        '- Suspicion de diabète de type 1, cétose, déséquilibre',
      ],
      hgr: [
        '- Mise sous insuline, éducation, dépistage des complications',
        '- Acidocétose grave, complications avancées',
      ],
      tert: ['- Endocrinologie, pompe ou capteurs selon disponibilité', ''],
    },
    alertes: {
      'acidocetose-diabetique-urgence':
        'Diabétique avec vomissements, polypnée, douleurs abdominales ou cétonurie',
    },
    formes: [
      {
        nom: 'Forme typique de l’adulte jeune',
        type: 'commune',
        description: 'Syndrome cardinal d’installation rapide.',
        terrain: '- Adulte jeune mince',
        fonctionnels: '- Polyurie, polydipsie, polyphagie',
        generaux: '- Amaigrissement rapide, asthénie',
        physiques: '- Déshydratation',
        paraclinique: '- Hyperglycémie, cétonurie',
        etiologies: '- Auto-immunité',
        syndromes: [],
        examens: [['bandelette-urinaire', 'Cétonurie']],
      },
      {
        nom: 'Diabète auto-immun lent de l’adulte (LADA)',
        type: 'evolutive',
        description: 'Évolution vers l’insulinodépendance en quelques années.',
        terrain: '- Adulte de plus de 30 ans, mince',
        fonctionnels: '- Syndrome polyuro-polydipsique',
        generaux: '',
        physiques: '',
        paraclinique: '- Anticorps anti-GAD positifs',
        etiologies: '- Auto-immunité',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Acidocétose
  {
    ...ENDO,
    slug: 'acidocetose-diabetique',
    nom: 'Acidocétose diabétique',
    resume:
      'Urgence métabolique par carence en insuline : hyperglycémie, cétose, acidose ; réhydratation au sérum salé, insuline IV, potassium, recherche du facteur déclenchant.',
    definition:
      'Complication aiguë du diabète associant hyperglycémie (> 2,5 g/L), cétose (cétonurie ≥ ++ ou cétonémie ≥ 3 mmol/L) et acidose métabolique (pH < 7,30 ou bicarbonates < 15 mmol/L).',
    physiopathologie:
      '## Mécanismes\n- Carence en insuline + hormones de contre-régulation\n- Hyperglycémie : diurèse osmotique, déshydratation, perte de potassium\n- Lipolyse et cétogenèse : acidose métabolique\n- Le potassium sanguin peut être normal ou élevé malgré un déficit total important',
    diagnostic:
      '## Clinique\n- Syndrome polyuro-polydipsique aggravé, asthénie\n- Nausées, vomissements, **douleurs abdominales**\n- **Polypnée de Kussmaul**, haleine acétonique\n- Déshydratation, troubles de conscience\n\n## Biologie\n- Glycémie > 2,5 g/L, cétonurie ≥ ++\n- pH < 7,30, bicarbonates < 15 mmol/L\n- Sévère : pH < 7,0, bicarbonates < 5, troubles de conscience',
    examens: [
      ['confirmation', 'glycemie', '> 2,5 g/L (14 mmol/L).'],
      ['confirmation', 'bandelette-urinaire', 'Cétonurie ≥ ++, glycosurie.'],
      ['gravite', 'gaz-du-sang', 'pH, bicarbonates : sévérité.'],
      ['premiere_intention', 'ionogramme', 'Kaliémie avant l’insuline ; natrémie corrigée.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale fonctionnelle.'],
      ['premiere_intention', 'ecg', 'Signes d’hypo- ou d’hyperkaliémie.'],
      ['etiologique', 'nfs', 'Infection.'],
      ['etiologique', 'tdr-paludisme', 'Facteur déclenchant fréquent.'],
      ['etiologique', 'radiographie-thoracique', 'Pneumonie.'],
      ['etiologique', 'ecbu', 'Infection urinaire.'],
      ['etiologique', 'beta-hcg', 'Femme en âge de procréer.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['Syndrome hyperosmolaire', 'Sujet âgé, type 2, glycémie très élevée (> 6 g/L), peu ou pas de cétose.'],
      ['Cétose de jeûne ou alcoolique', 'Glycémie normale ou basse.'],
      ['Acidose lactique', 'Choc, metformine, lactates élevés.'],
      ['Abdomen chirurgical', 'Les douleurs abdominales de l’acidocétose régressent avec le traitement.'],
      [
        'paludisme-grave',
        'Acidose et troubles de conscience, TDR positif (peut aussi déclencher l’acidocétose).',
      ],
    ],
    etiologies:
      '## Facteurs déclenchants\n- **Arrêt ou rupture de l’insuline** (coût, disponibilité)\n- **Infections** : paludisme, pneumonie, infection urinaire, tuberculose\n- Diabète inaugural (type 1)\n- Grossesse, infarctus, corticoïdes',
    principes: [
      [
        'Réhydratation',
        'Restaurer la volémie.',
        '- **NaCl 0,9 %** : 1 L la 1re heure (15–20 mL/kg), puis 500 mL/h selon l’état, environ 4 à 6 L sur 24 h\n- Quand la glycémie < 2,5 g/L : ajouter du **glucose 10 %** (ou passer au glucosé) pour continuer l’insuline\n- Prudence chez le sujet âgé et le cardiaque',
      ],
      [
        'Potassium',
        'Éviter l’hypokaliémie mortelle.',
        '- K < 3,3 mmol/L : corriger avant l’insuline\n- K 3,3–5,3 : **KCl** 1,5 à 2 g (20 à 30 mmol) par litre de soluté\n- K > 5,3 : pas de potassium, contrôle à 2 h\n- Sans ionogramme : potassium dès la diurèse reprise et l’ECG sans signe d’hyperkaliémie',
      ],
      [
        'Insuline',
        'Stopper la cétogenèse.',
        '- **Insuline rapide IV** : 0,1 U/kg/h en continu (ou 0,1 U/kg IM/SC toutes les heures si pas de seringue électrique)\n- Baisse attendue de la glycémie : 0,5 à 0,7 g/L par heure\n- Poursuivre jusqu’à la disparition de la cétose ; relais sous-cutané en chevauchant de 1 à 2 h',
      ],
      ['Bicarbonate', 'Usage restreint.', '- **Bicarbonate de sodium** seulement si pH < 6,9'],
      [
        'Facteur déclenchant et surveillance',
        'Éviter la récidive.',
        '- Traiter l’infection (paludisme, antibiotiques)\n- Glycémie horaire, cétonurie, diurèse, conscience, ionogramme toutes les 4 h\n- Éducation, accès à l’insuline à la sortie',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Réhydratation initiale'],
      ['insuline-humaine-rapide', 'premiere', 'IV continue 0,1 U/kg/h'],
      ['chlorure-de-potassium', 'premiere', 'Supplémentation selon la kaliémie'],
      ['glucose-10', 'premiere', 'Quand la glycémie descend sous 2,5 g/L'],
      ['ringer-lactate', 'alternative', 'Réhydratation'],
      ['bicarbonate-de-sodium', 'adjuvant', 'Seulement si pH < 6,9'],
      ['insuline-nph', 'adjuvant', 'Relais sous-cutané'],
    ],
    complications: [
      {
        nom: 'Hypokaliémie',
        description: 'Sous insuline sans apport de potassium.',
        traitement: '- KCl',
        clinique: '- Faiblesse, arythmies',
        paraclinique: '- Ionogramme, ECG',
      },
      {
        nom: 'Hypoglycémie',
        description: 'Insuline sans apport de glucose.',
        traitement: '- Glucose',
        clinique: '- Sueurs, confusion',
        paraclinique: '- Glycémie capillaire',
      },
      {
        nom: 'Œdème cérébral',
        description: 'Surtout chez l’enfant et l’adulte jeune, correction trop rapide.',
        traitement: '- Mannitol, réduction des apports',
        clinique: '- Céphalées, baisse de conscience',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Déshydratation.',
        traitement: '- Réhydratation',
        clinique: '- Diurèse',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité < 5 % si prise en charge correcte ; bien plus élevée en cas de retard ou de coma\n- Résolution habituelle en 12 à 24 h',
    urgences: ['acidocetose-diabetique-urgence'],
    symptomes: [
      ['Polyurie-polydipsie', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'ADA — Standards of Care in Diabetes',
      'Hyperglycemic Crises in Adults With Diabetes: A Consensus Report',
    ],
    niveaux: {
      cs: [
        '- Glycémie capillaire, cétonurie, NaCl 0,9 % 1 L, insuline rapide 0,1 U/kg IM ou SC, transfert',
        '- Toute acidocétose',
      ],
      hgr: [
        '- Protocole complet : réhydratation, insuline, potassium, facteur déclenchant',
        '- Coma, choc, pH < 7, échec',
      ],
      tert: ['- Réanimation', ''],
    },
    alertes: {
      'acidocetose-diabetique-urgence': 'Glycémie > 2,5 g/L avec cétonurie, polypnée, vomissements',
    },
    formes: [
      {
        nom: 'Acidocétose modérée',
        type: 'commune',
        description: 'Patient conscient, vomissements.',
        terrain: '- Diabétique de type 1, rupture d’insuline ou infection',
        fonctionnels: '- Soif, polyurie, nausées, douleurs abdominales',
        generaux: '- Déshydratation',
        physiques: '- Polypnée, haleine acétonique',
        paraclinique: '- pH 7,0–7,30, cétonurie',
        etiologies: '- Carence en insuline',
        syndromes: [
          'syndrome-de-deshydratation-extracellulaire',
          'syndrome-de-deshydratation-intracellulaire',
        ],
        examens: [['bandelette-urinaire', 'Cétonurie']],
      },
      {
        nom: 'Acidocétose sévère',
        type: 'gravite',
        description: 'Troubles de conscience, choc.',
        terrain: '- Retard de prise en charge',
        fonctionnels: '',
        generaux: '- Hypotension, hypothermie',
        physiques: '- Kussmaul, coma',
        paraclinique: '- pH < 7,0, bicarbonates < 5',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },
];
