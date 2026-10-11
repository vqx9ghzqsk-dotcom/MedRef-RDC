'use strict';

/**
 * Lot 5 (endocrinologie et métabolisme) — état hyperosmolaire, hypoglycémie de l'adulte,
 * pied diabétique, goitre et carence iodée, hyponatrémie, dyskaliémies.
 * Rédigé par IA (ADA, IWGDF, OMS, Endocrine Society, ESE, KDIGO) : à valider.
 */

const ENDO = { departement: 'medecine-interne', specialite: 'Endocrinologie et diabétologie' };

module.exports = [
  // =================================================================== Hyperosmolaire
  {
    ...ENDO,
    slug: 'etat-hyperosmolaire-hyperglycemique',
    nom: 'État hyperosmolaire hyperglycémique',
    resume:
      'Décompensation du diabète de type 2 du sujet âgé : hyperglycémie majeure, déshydratation profonde et troubles de conscience sans cétose ; réhydratation prudente puis insuline à faible dose.',
    definition:
      'Complication aiguë du diabète associant hyperglycémie > 6 g/L (33 mmol/L), osmolalité plasmatique > 320 mOsm/kg et déshydratation massive, sans cétose ni acidose significatives.',
    physiopathologie:
      '## Mécanismes\n- Carence relative en insuline : l’insuline résiduelle empêche la cétose mais pas l’hyperglycémie\n- Diurèse osmotique prolongée sur plusieurs jours : pertes d’eau (8 à 12 L) et d’électrolytes\n- Hyperosmolalité : déshydratation intracellulaire cérébrale, troubles de conscience\n- Hyperviscosité : thromboses',
    diagnostic:
      '## Clinique\n- Installation sur plusieurs jours : polyurie, soif (souvent non perçue chez le sujet âgé)\n- Déshydratation sévère : pli cutané, muqueuses sèches, hypotension\n- Troubles de conscience (obnubilation à coma), signes neurologiques focaux, convulsions\n- **Pas de polypnée de Kussmaul**\n\n## Biologie\n- Glycémie > 6 g/L, cétonurie absente ou faible\n- Osmolalité calculée = 2 × Na + glycémie (mmol/L) > 320 mOsm/kg\n- pH > 7,30, bicarbonates > 15 mmol/L\n- Natrémie corrigée = Na + 1,6 × (glycémie en g/L − 1)',
    examens: [
      ['confirmation', 'glycemie', '> 6 g/L (33 mmol/L).'],
      ['confirmation', 'ionogramme', 'Natrémie (et natrémie corrigée), kaliémie ; calcul de l’osmolalité.'],
      ['premiere_intention', 'bandelette-urinaire', 'Glycosurie massive, cétonurie absente ou faible.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale fonctionnelle quasi constante.'],
      ['gravite', 'gaz-du-sang', 'pH > 7,30 (à la différence de l’acidocétose).'],
      ['premiere_intention', 'ecg', 'Dyskaliémie, infarctus déclenchant.'],
      ['etiologique', 'nfs', 'Infection.'],
      ['etiologique', 'tdr-paludisme', 'Facteur déclenchant fréquent.'],
      ['etiologique', 'ecbu', 'Infection urinaire.'],
      ['etiologique', 'radiographie-thoracique', 'Pneumonie.'],
      ['etiologique', 'troponine', 'Infarctus silencieux.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['acidocetose-diabetique', 'Cétonurie ≥ ++, acidose, polypnée ; formes mixtes possibles.'],
      [
        'avc',
        'Déficit focal brutal ; scanner (l’hyperosmolarité peut donner des signes focaux réversibles).',
      ],
      ['paludisme-grave', 'TDR positif ; peut aussi déclencher la décompensation.'],
      ['meningite-bacterienne', 'Fièvre, syndrome méningé, LCR.'],
    ],
    etiologies:
      '## Terrain\n- Diabète de type 2 du sujet âgé, parfois méconnu\n- Accès limité à l’eau (dépendance, démence)\n\n## Facteurs déclenchants\n- **Infections** (pneumonie, infection urinaire, paludisme)\n- Diurétiques, corticoïdes, arrêt du traitement\n- AVC, infarctus, diarrhée, vomissements',
    principes: [
      [
        'Réhydratation',
        'Restaurer la volémie, puis corriger lentement l’osmolalité.',
        '- **NaCl 0,9 %** : 1 L la 1re heure, puis 0,5 à 1 L/h selon l’état hémodynamique\n- Objectif : baisse de l’osmolalité de 3 à 8 mOsm/kg/h, de la natrémie ≤ 10 mmol/L par 24 h\n- Quand la glycémie < 3 g/L : glucosé 5 % ou 10 % associé\n- Déficit total à compenser en 24 à 48 h ; prudence chez le cardiaque',
      ],
      [
        'Insuline',
        'Baisse progressive de la glycémie.',
        '- Commencer l’insuline **après** le début de la réhydratation (la réhydratation seule fait baisser la glycémie)\n- **Insuline rapide** 0,05 U/kg/h IV, à adapter pour une baisse de 0,5 à 1 g/L par heure\n- Relais sous-cutané quand le patient mange',
      ],
      [
        'Potassium',
        'Éviter l’hypokaliémie.',
        '- **KCl** selon la kaliémie (comme dans l’acidocétose) dès que la diurèse est reprise',
      ],
      [
        'Prévention des thromboses et prise en charge du terrain',
        'Réduire la mortalité.',
        '- **Énoxaparine** préventive\n- Traitement du facteur déclenchant\n- Soins de nursing (escarres), surveillance de la conscience',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Réhydratation'],
      ['insuline-humaine-rapide', 'premiere', 'IV 0,05 U/kg/h après le début de la réhydratation'],
      ['chlorure-de-potassium', 'premiere', 'Selon la kaliémie'],
      ['glucose-10', 'adjuvant', 'Quand la glycémie < 3 g/L'],
      ['enoxaparine', 'adjuvant', 'Prévention des thromboses'],
    ],
    complications: [
      {
        nom: 'Œdème cérébral et myélinolyse',
        description: 'Correction trop rapide de l’osmolalité ou de la natrémie.',
        traitement: '- Ralentir la correction',
        clinique: '- Aggravation de la conscience',
        paraclinique: '- Ionogramme toutes les 2 à 4 h',
      },
      {
        nom: 'Thromboses',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Hyperviscosité, immobilisation.',
        traitement: '- Héparine',
        clinique: '- Œdème de membre, déficit',
        paraclinique: '- Écho-Doppler',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hypovolémie.',
        traitement: '- Réhydratation',
        clinique: '- Diurèse',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité 10 à 20 % (plus élevée que l’acidocétose), liée à l’âge et au facteur déclenchant',
    urgences: [],
    symptomes: [
      ['Polyurie-polydipsie', 'tres_frequent'],
      ['Troubles de la conscience', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Hypotension', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Déficit moteur', 'occasionnel'],
    ],
    sources: [
      'Hyperglycemic Crises in Adults With Diabetes: A Consensus Report',
      'ADA — Standards of Care in Diabetes',
    ],
    niveaux: {
      cs: [
        '- Glycémie capillaire chez tout diabétique confus ou déshydraté, NaCl 0,9 %, transfert',
        '- Tout état hyperosmolaire',
      ],
      hgr: ['- Réhydratation, insuline IV, potassium, facteur déclenchant', '- Coma profond, choc'],
      tert: ['- Réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme typique du sujet âgé',
        type: 'commune',
        description: 'Coma hyperosmolaire progressif.',
        terrain: '- Sujet âgé diabétique de type 2, dépendant',
        fonctionnels: '- Polyurie, puis somnolence',
        generaux: '- Déshydratation profonde, fièvre si infection',
        physiques: '- Pli cutané, hypotension, obnubilation',
        paraclinique: '- Glycémie > 6 g/L, osmolalité > 320, pas de cétose',
        etiologies: '- Infection, diurétiques',
        syndromes: [
          'syndrome-de-deshydratation-intracellulaire',
          'syndrome-de-deshydratation-extracellulaire',
          'syndrome-confusionnel',
        ],
        examens: [['ionogramme', 'Osmolalité']],
      },
    ],
  },

  // =================================================================== Hypoglycémie
  {
    ...ENDO,
    slug: 'hypoglycemie-adulte',
    nom: 'Hypoglycémie de l’adulte',
    resume:
      'Glycémie < 0,70 g/L chez le diabétique traité (insuline, sulfamides) ou < 0,55 g/L hors diabète : sucre per os ou glucose IV, puis recherche de la cause.',
    definition:
      'Baisse de la glycémie en dessous de 0,70 g/L (3,9 mmol/L) chez le diabétique traité, ou de 0,55 g/L (3 mmol/L) chez le non-diabétique avec symptômes corrigés par le resucrage (triade de Whipple) ; sévère si l’aide d’un tiers est nécessaire.',
    physiopathologie:
      '## Mécanismes\n- Excès d’insuline (exogène ou sulfamide) par rapport aux apports et aux besoins\n- Défaut de production hépatique de glucose (jeûne, alcool, insuffisance hépatique, sepsis, paludisme grave)\n- Signes adrénergiques puis neuroglucopéniques (le cerveau dépend du glucose)',
    diagnostic:
      '## Clinique\n- **Signes adrénergiques** : sueurs, tremblements, palpitations, faim, anxiété\n- **Signes neuroglucopéniques** : troubles du comportement, confusion, troubles visuels, déficit focal, convulsions, coma\n- Signes masqués par les bêtabloquants et chez le diabétique ancien\n\n## Confirmation\n- **Glycémie capillaire** immédiate devant tout trouble de conscience\n- Correction des symptômes par le resucrage',
    examens: [
      ['confirmation', 'glycemie', '< 0,70 g/L (diabétique traité) ; < 0,55 g/L (non-diabétique).'],
      ['etiologique', 'tdr-paludisme', 'Paludisme grave (et quinine) : cause fréquente.'],
      ['etiologique', 'creatinine', 'Insuffisance rénale : accumulation des sulfamides et de l’insuline.'],
      ['etiologique', 'bilan-hepatique', 'Insuffisance hépatique.'],
      ['etiologique', 'hemocultures', 'Sepsis.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['avc', 'Déficit focal : toujours vérifier la glycémie d’abord.'],
      ['epilepsie', 'Crise convulsive avec glycémie normale.'],
      ['Intoxication alcoolique', 'Peut être associée à une hypoglycémie.'],
      ['paludisme-grave', 'Coma fébrile, TDR positif, hypoglycémie associée.'],
    ],
    etiologies:
      '## Chez le diabétique\n- Insuline ou **sulfamides** (glibenclamide surtout) : surdosage, repas sauté, effort, alcool, insuffisance rénale\n\n## Hors diabète\n- Paludisme grave, quinine, sepsis, malnutrition, alcool\n- Insuffisance hépatique, rénale ou surrénalienne\n- Insulinome (rare)',
    principes: [
      [
        'Patient conscient',
        'Resucrer rapidement.',
        '- 15 g de sucre rapide : 3 morceaux de sucre, 150 mL de jus ou de soda sucré\n- Contrôle à 15 min, répéter si < 0,70 g/L\n- Puis collation avec glucides lents',
      ],
      [
        'Patient inconscient ou incapable d’avaler',
        'Restaurer la glycémie en urgence.',
        '- **Glucose 30 %** 50 mL IV (ou glucose 10 % 150 à 250 mL)\n- Sans voie veineuse : **glucagon** 1 mg IM ou SC (si patient sous insuline)\n- Puis perfusion de **glucose 10 %** et resucrage oral au réveil',
      ],
      [
        'Hypoglycémie sous sulfamide',
        'Prévenir la récidive prolongée.',
        '- Hospitalisation et perfusion de glucose 24 à 72 h (effet prolongé du glibenclamide)',
      ],
      [
        'Prévention',
        'Éviter les récidives.',
        '- Revoir les doses, éducation (repas, effort, alcool), carnet de glycémies\n- Préférer le gliclazide ou la metformine chez le sujet âgé et l’insuffisant rénal',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', 'Perfusion d’entretien ou bolus'],
      ['glucose-solute', 'premiere', 'Glucose 30 % IV en bolus'],
      ['glucagon', 'alternative', 'Sans voie veineuse, patient sous insuline'],
    ],
    complications: [
      {
        nom: 'Coma et séquelles neurologiques',
        description: 'Hypoglycémie prolongée.',
        traitement: '- Glucose IV',
        clinique: '- Conscience',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Arythmies et ischémie',
        description: 'Décharge adrénergique.',
        traitement: '- Correction',
        clinique: '- Douleur thoracique',
        paraclinique: '- ECG',
      },
      {
        nom: 'Chutes et traumatismes',
        description: 'Surtout chez le sujet âgé.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération rapide si traitée tôt ; séquelles possibles après un coma prolongé',
    urgences: [],
    symptomes: [
      ['Sueurs', 'tres_frequent'],
      ['Tremblements', 'frequent'],
      ['Palpitations', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Troubles visuels', 'occasionnel'],
    ],
    sources: [
      'ADA — Standards of Care in Diabetes',
      'Endocrine Society — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Glycémie capillaire, resucrage oral, glucose IV ou glucagon',
        '- Hypoglycémie sous sulfamide, récidive, cause inconnue',
      ],
      hgr: ['- Perfusion de glucose prolongée, recherche de la cause', ''],
      tert: ['- Exploration d’une hypoglycémie hors diabète', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hypoglycémie du diabétique traité',
        type: 'commune',
        description: 'Signes adrénergiques puis confusion.',
        terrain: '- Diabétique sous insuline ou sulfamide',
        fonctionnels: '- Faim, sueurs, tremblements, palpitations',
        generaux: '',
        physiques: '- Pâleur, confusion',
        paraclinique: '- Glycémie < 0,70 g/L',
        etiologies: '- Repas sauté, surdosage, effort',
        syndromes: [],
        examens: [['glycemie', 'Confirmation']],
      },
      {
        nom: 'Coma hypoglycémique',
        type: 'gravite',
        description: 'Trouble de conscience avec ou sans convulsions.',
        terrain: '- Sulfamide chez le sujet âgé, alcool, paludisme grave',
        fonctionnels: '',
        generaux: '- Hypothermie possible',
        physiques: '- Coma, signe de Babinski bilatéral, sueurs',
        paraclinique: '- Glycémie très basse',
        etiologies: '- Insuline, sulfamide, paludisme grave',
        syndromes: ['syndrome-confusionnel', 'syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== Pied diabétique
  {
    ...ENDO,
    slug: 'pied-diabetique',
    nom: 'Pied diabétique',
    resume:
      'Plaie du pied chez le diabétique, liée à la neuropathie et à l’artériopathie, souvent infectée : décharge, soins locaux, antibiothérapie si infection, revascularisation ; prévention par l’examen des pieds.',
    definition:
      'Ensemble des lésions du pied du diabétique (ulcération, infection, gangrène, ostéite) résultant de la neuropathie, de l’artériopathie et de l’infection, principale cause d’amputation non traumatique.',
    physiopathologie:
      '## Mécanismes\n- **Neuropathie** : perte de sensibilité (plaies non ressenties), déformations, pression excessive (mal perforant plantaire)\n- **Artériopathie** : ischémie, cicatrisation lente\n- **Infection** : diffusion rapide, ostéite, gangrène humide',
    diagnostic:
      '## Examen\n- Plaie : siège, taille, profondeur, contact osseux (« probe-to-bone »)\n- Neuropathie : monofilament 10 g, diapason\n- Artériopathie : pouls pédieux et tibiaux postérieurs, IPS\n- Infection (IWGDF) : rougeur > 0,5 cm, chaleur, induration, pus ; grave si signes généraux\n\n## Classification\n- Neuropathique, ischémique ou mixte ; infection légère, modérée ou sévère',
    examens: [
      ['premiere_intention', 'glycemie', 'Déséquilibre fréquent.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Infection, suivi.'],
      ['premiere_intention', 'radiographie-osseuse', 'Ostéite, gaz, corps étranger.'],
      [
        'premiere_intention',
        'ips-cheville-bras',
        'Artériopathie (IPS < 0,9) ; > 1,3 si artères incompressibles.',
      ],
      ['premiere_intention', 'creatinine', 'Choix des antibiotiques.'],
      ['etiologique', 'hemocultures', 'Infection sévère.'],
      ['suivi', 'hba1c', 'Équilibre glycémique.'],
    ],
    scores: [],
    differentiels: [
      ['ulcere-de-buruli', 'Ulcère à bords décollés, non diabétique, zone d’endémie.'],
      ['Ulcère veineux', 'Malléole interne, insuffisance veineuse.'],
      ['Érysipèle', 'Placard inflammatoire sans plaie profonde.'],
      ['lepre', 'Mal perforant sur anesthésie lépreuse.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Neuropathie, artériopathie, déformations du pied, antécédent d’ulcère ou d’amputation\n- Marche pieds nus, chaussures inadaptées, brûlures, mauvais équilibre glycémique, tabac\n\n## Germes\n- Staphylocoque doré, streptocoques ; bacilles Gram négatif et anaérobies dans les plaies chroniques et ischémiques',
    principes: [
      [
        'Décharge et soins locaux',
        'Permettre la cicatrisation.',
        '- **Décharge** stricte (repos, chaussure de décharge, béquilles)\n- Débridement des tissus nécrotiques et de l’hyperkératose\n- Pansements humides adaptés, pas d’antiseptique agressif prolongé',
      ],
      [
        'Antibiothérapie si infection',
        'Contrôler l’infection.',
        '- Pas d’antibiotique sur une plaie non infectée\n- Légère : **amoxicilline-acide clavulanique** ou **cloxacilline** 1 à 2 semaines\n- Modérée à sévère : amoxicilline-clavulanate IV ou **ceftriaxone** + **métronidazole** ; **clindamycine** si allergie\n- Ostéite : 6 semaines, adapter aux prélèvements profonds',
      ],
      [
        'Chirurgie et revascularisation',
        'Sauver le membre.',
        '- Drainage d’un abcès, débridement d’une gangrène humide en urgence\n- Bilan vasculaire et revascularisation si ischémie\n- Amputation la plus distale possible en dernier recours',
      ],
      [
        'Équilibre et prévention',
        'Éviter la récidive.',
        '- Insuline pendant l’infection\n- Examen des pieds à chaque consultation, gradation du risque\n- Éducation : ne pas marcher pieds nus, inspection quotidienne, chaussures adaptées, soins des ongles\n- Vaccination antitétanique',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Associée à l’acide clavulanique'],
      ['acide-clavulanique', 'premiere', 'Associé à l’amoxicilline'],
      ['cloxacilline', 'alternative', 'Infection légère à staphylocoque'],
      ['ceftriaxone', 'deuxieme', 'Infection modérée ou sévère, avec métronidazole'],
      ['metronidazole', 'deuxieme', 'Anaérobies'],
      ['clindamycine', 'alternative', 'Allergie aux bêtalactamines'],
      ['insuline-humaine-rapide', 'adjuvant', 'Équilibre glycémique pendant l’infection'],
    ],
    complications: [
      {
        nom: 'Ostéite',
        description: 'Contact osseux, plaie chronique.',
        traitement: '- Antibiotiques 6 semaines, chirurgie',
        clinique: '- Os palpable au stylet',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Gangrène et amputation',
        description: 'Infection et ischémie.',
        traitement: '- Chirurgie',
        clinique: '- Nécrose noire ou humide',
        paraclinique: '- IPS',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Infection profonde.',
        traitement: '- Antibiotiques IV, drainage',
        clinique: '- Fièvre, hypotension',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution: '## Pronostic\n- Récidive fréquente ; mortalité élevée après amputation majeure',
    urgences: ['choc-septique'],
    symptomes: [
      ['Ulcère cutané', 'tres_frequent'],
      ['Fièvre', 'occasionnel'],
      ['Anesthésie cutanée', 'frequent'],
      ['Œdème d’un membre', 'occasionnel'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'ADA — Standards of Care in Diabetes',
      'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
    ],
    niveaux: {
      cs: ['- Examen des pieds, éducation, soins simples, décharge', '- Plaie infectée, ischémie, nécrose'],
      hgr: ['- Débridement, antibiothérapie, radiographie, chirurgie', '- Revascularisation'],
      tert: ['- Chirurgie vasculaire, centre du pied diabétique', ''],
    },
    alertes: { 'choc-septique': 'Diabétique avec plaie du pied, fièvre et hypotension' },
    formes: [
      {
        nom: 'Mal perforant plantaire neuropathique',
        type: 'commune',
        description: 'Ulcère indolore sous un point d’appui.',
        terrain: '- Diabète ancien, neuropathie',
        fonctionnels: '- Plaie indolore',
        generaux: '',
        physiques: '- Ulcère à bords hyperkératosiques, pouls perçus, monofilament non perçu',
        paraclinique: '- IPS normal',
        etiologies: '- Neuropathie',
        syndromes: [],
        examens: [['radiographie-osseuse', 'Ostéite']],
      },
      {
        nom: 'Pied diabétique infecté sévère',
        type: 'gravite',
        description: 'Cellulite extensive, abcès, gangrène.',
        terrain: '- Plaie négligée',
        fonctionnels: '- Douleur, écoulement',
        generaux: '- Fièvre, déséquilibre glycémique',
        physiques: '- Rougeur étendue, crépitation, nécrose',
        paraclinique: '- Gaz à la radiographie, CRP élevée',
        etiologies: '- Polymicrobienne',
        syndromes: ['syndrome-infectieux', 'syndrome-de-reponse-inflammatoire-systemique'],
      },
    ],
  },

  // =================================================================== Goitre
  {
    ...ENDO,
    slug: 'goitre-et-carence-iodee',
    nom: 'Goitre et troubles dus à la carence iodée',
    resume:
      'Augmentation de volume de la thyroïde, endémique en RDC par carence en iode : TSH, échographie ; prévention par le sel iodé, chirurgie si compression.',
    definition:
      'Le goitre est une augmentation de volume de la glande thyroïde ; les troubles dus à la carence iodée regroupent goitre, hypothyroïdie, crétinisme et troubles du développement de l’enfant exposé in utero.',
    physiopathologie:
      '## Mécanismes\n- Carence en iode : baisse de synthèse des hormones thyroïdiennes, stimulation par la TSH, hypertrophie\n- Facteurs goitrigènes : manioc mal préparé (thiocyanates), carence en sélénium (zones d’endémie de RDC)\n- Évolution vers un goitre multinodulaire, parfois toxique',
    diagnostic:
      '## Clinique\n- Tuméfaction cervicale antérieure mobile à la déglutition\n- Classification OMS : grade 0 (non palpable), 1 (palpable), 2 (visible cou en position normale)\n- Signes de compression : dysphagie, dyspnée, dysphonie, turgescence veineuse\n- Signes de dysthyroïdie\n\n## Confirmation\n- **TSH** (euthyroïdie le plus souvent), échographie',
    examens: [
      ['premiere_intention', 'tsh', 'Euthyroïdie, hypothyroïdie (TSH élevée) ou hyperthyroïdie (TSH basse).'],
      ['confirmation', 'echographie-thyroidienne', 'Volume, nodules, caractère plongeant.'],
      [
        'deuxieme_intention',
        'biopsie-histologie',
        'Cytoponction d’un nodule suspect (EU-TIRADS 4–5) : cytologie.',
      ],
      ['gravite', 'radiographie-thoracique', 'Goitre plongeant, déviation trachéale.'],
    ],
    scores: [],
    differentiels: [
      ['Cancer de la thyroïde', 'Nodule dur, adénopathies, croissance rapide, dysphonie.'],
      ['Thyroïdite', 'Thyroïde douloureuse ou ferme, contexte auto-immun.'],
      ['Adénopathies cervicales (tuberculose, lymphome)', 'Masses latérales, non mobiles à la déglutition.'],
      ['Maladie de Basedow', 'Goitre diffus avec hyperthyroïdie et exophtalmie.'],
    ],
    etiologies:
      '## Causes\n- **Carence iodée** (zones de montagne, Kivu, Ubangi, Uele historiquement)\n- Goitrigènes (manioc), carence en sélénium\n- Thyroïdites, maladie de Basedow, nodules',
    principes: [
      [
        'Prévention de la carence iodée',
        'Supprimer l’endémie.',
        '- **Sel iodé** pour tous les ménages\n- Huile iodée ou supplémentation chez la femme enceinte et allaitante en zone de carence persistante\n- Bonne préparation du manioc (rouissage)',
      ],
      [
        'Goitre euthyroïdien simple',
        'Surveiller ; corriger la carence.',
        '- Surveillance clinique et échographique\n- Lévothyroxine non recommandée en routine',
      ],
      [
        'Hypothyroïdie associée',
        'Restaurer l’euthyroïdie.',
        '- **Lévothyroxine** 1,6 µg/kg/j (doses faibles chez le sujet âgé et le cardiaque), ajustée sur la TSH',
      ],
      [
        'Chirurgie',
        'Lever la compression ou traiter un nodule suspect.',
        '- Thyroïdectomie si compression, goitre plongeant, nodule suspect, gêne esthétique importante\n- Après thyroïdectomie totale : lévothyroxine à vie, surveillance de la calcémie',
      ],
    ],
    molecules: [
      ['iode', 'premiere', 'Prévention (sel iodé, huile iodée)'],
      ['levothyroxine', 'premiere', 'Hypothyroïdie associée, après thyroïdectomie'],
      ['propranolol', 'adjuvant', 'Signes adrénergiques d’un goitre toxique'],
    ],
    complications: [
      {
        nom: 'Compression trachéale ou œsophagienne',
        description: 'Goitre volumineux ou plongeant.',
        traitement: '- Thyroïdectomie',
        clinique: '- Dyspnée, stridor, dysphagie',
        paraclinique: '- Radiographie, échographie',
      },
      {
        nom: 'Hyperthyroïdie (goitre multinodulaire toxique)',
        description: 'Autonomisation des nodules, parfois après apport d’iode.',
        traitement: '- Antithyroïdiens, bêtabloquant, chirurgie',
        clinique: '- Amaigrissement, palpitations',
        paraclinique: '- TSH basse',
      },
      {
        nom: 'Hypothyroïdie et crétinisme',
        description: 'Carence sévère, enfant exposé in utero.',
        traitement: '- Lévothyroxine, prévention',
        clinique: '- Retard de croissance et mental',
        paraclinique: '- TSH',
      },
    ],
    evolution:
      '## Pronostic\n- Régression partielle des goitres récents après correction de la carence ; goitres anciens nodulaires persistants',
    urgences: [],
    symptomes: [
      ['Tuméfaction cervicale', 'tres_frequent'],
      ['Dysphagie', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Asthénie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'ATA — recommandations de pratique clinique',
      'ESE — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Dépistage, promotion du sel iodé, TSH si signes de dysthyroïdie',
        '- Compression, nodule dur, dysthyroïdie',
      ],
      hgr: ['- Échographie, TSH, lévothyroxine, thyroïdectomie', ''],
      tert: ['- Cytoponction, chirurgie des goitres plongeants, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Goitre endémique simple',
        type: 'commune',
        description: 'Goitre diffus euthyroïdien.',
        terrain: '- Femme jeune, zone de carence iodée',
        fonctionnels: '- Gêne cervicale',
        generaux: '',
        physiques: '- Thyroïde augmentée, souple, mobile à la déglutition',
        paraclinique: '- TSH normale',
        etiologies: '- Carence iodée',
        syndromes: [],
        examens: [['echographie-thyroidienne', 'Volume']],
      },
      {
        nom: 'Goitre compressif ou plongeant',
        type: 'gravite',
        description: 'Signes de compression.',
        terrain: '- Goitre ancien multinodulaire',
        fonctionnels: '- Dyspnée, dysphagie, dysphonie',
        generaux: '',
        physiques: '- Pôle inférieur non palpable, turgescence jugulaire',
        paraclinique: '- Déviation trachéale',
        etiologies: '- Goitre multinodulaire',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Hyponatrémie
  {
    ...ENDO,
    slug: 'hyponatremie',
    nom: 'Hyponatrémie',
    resume:
      'Natrémie < 135 mmol/L, le plus fréquent des troubles ioniques à l’hôpital : évaluer la gravité et la volémie, NaCl 3 % si symptômes sévères, correction lente pour éviter la myélinolyse.',
    definition:
      'Natrémie inférieure à 135 mmol/L traduisant le plus souvent un excès d’eau par rapport au sodium ; sévère si < 125 mmol/L ou symptomatique.',
    physiopathologie:
      '## Mécanismes\n- Hyponatrémie hypotonique : excès d’eau libre (sécrétion d’ADH, apports d’eau excessifs) ou perte de sodium\n- Œdème cérébral si installation rapide (< 48 h)\n- Adaptation cérébrale en cas d’hyponatrémie chronique : risque de **myélinolyse osmotique** si correction trop rapide',
    diagnostic:
      '## Symptômes\n- Modérés : nausées, céphalées, confusion, chutes\n- Sévères : vomissements, somnolence, convulsions, coma, détresse respiratoire\n\n## Démarche\n1. Éliminer une fausse hyponatrémie (hyperglycémie : natrémie corrigée)\n2. Osmolalité urinaire et natriurèse\n3. Volémie :\n   - **Hypovolémie** : diarrhée, vomissements, diurétiques thiazidiques, insuffisance surrénalienne\n   - **Euvolémie** : SIADH (pneumonie, méningite, tuberculose, médicaments), hypothyroïdie, potomanie\n   - **Hypervolémie** : insuffisance cardiaque, cirrhose, syndrome néphrotique, insuffisance rénale',
    examens: [
      ['confirmation', 'ionogramme', 'Natrémie < 135 mmol/L ; kaliémie.'],
      ['premiere_intention', 'glycemie', 'Fausse hyponatrémie (hyperglycémie).'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'radiographie-thoracique', 'Pneumonie, tuberculose (SIADH).'],
      ['etiologique', 'bilan-hepatique', 'Cirrhose.'],
      ['etiologique', 'proteinurie', 'Syndrome néphrotique.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      [
        'Pseudo-hyponatrémie',
        'Hyperglycémie, hyperprotidémie, hyperlipidémie : osmolalité normale ou élevée.',
      ],
      ['meningite-bacterienne', 'Confusion fébrile, syndrome méningé (peut causer un SIADH).'],
      ['avc', 'Signes focaux, scanner.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Diarrhées et vomissements compensés par de l’eau seule\n- **Diurétiques thiazidiques**\n- SIADH : pneumonie, tuberculose, méningite, paludisme grave, carbamazépine, antidépresseurs, douleur, nausées\n- Insuffisance cardiaque, cirrhose, insuffisance rénale\n- Perfusions de glucosé hypotoniques en postopératoire',
    principes: [
      [
        'Hyponatrémie avec symptômes sévères',
        'Lever le risque d’engagement cérébral.',
        '- **NaCl 3 %** 150 mL (ou 2 mL/kg) en 20 min, à répéter jusqu’à 2 fois selon la natrémie\n- Objectif : + 5 mmol/L en 1 h, puis **≤ 10 mmol/L par 24 h** (≤ 8 si alcool, malnutrition, hypokaliémie)',
      ],
      [
        'Hyponatrémie hypovolémique',
        'Restaurer la volémie.',
        '- **NaCl 0,9 %**, arrêt des diurétiques\n- Surveillance : correction rapide spontanée possible à la reprise de la diurèse',
      ],
      [
        'SIADH et hypervolémie',
        'Réduire l’excès d’eau.',
        '- Restriction hydrique (500 à 1 000 mL/j)\n- Traiter la cause (pneumonie, tuberculose, insuffisance cardiaque)\n- Hypervolémie : diurétique de l’anse (**furosémide**)',
      ],
      [
        'Surveillance',
        'Éviter la myélinolyse.',
        '- Natrémie toutes les 2 à 4 h au début\n- Si correction excessive : glucosé 5 % pour redescendre',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-hypertonique', 'premiere', 'Symptômes sévères'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Hyponatrémie hypovolémique'],
      ['furosemide', 'adjuvant', 'Hyponatrémie hypervolémique'],
      ['hydrocortisone', 'adjuvant', 'Insuffisance surrénalienne'],
    ],
    complications: [
      {
        nom: 'Œdème cérébral',
        description: 'Hyponatrémie aiguë profonde.',
        traitement: '- NaCl 3 %',
        clinique: '- Convulsions, coma',
        paraclinique: '- Natrémie',
      },
      {
        nom: 'Myélinolyse osmotique',
        description: 'Correction trop rapide d’une hyponatrémie chronique, 2 à 6 jours après.',
        traitement: '- Prévention ; re-baisse de la natrémie si dépassement',
        clinique: '- Dysarthrie, dysphagie, tétraparésie',
        paraclinique: '- IRM cérébrale',
      },
    ],
    evolution:
      '## Pronostic\n- Lié surtout à la cause ; l’hyponatrémie est un marqueur de gravité de l’insuffisance cardiaque et de la cirrhose',
    urgences: [],
    symptomes: [
      ['Vomissements', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'ESE — recommandations de pratique clinique',
      'ERA — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Reconnaître une confusion chez un patient sous thiazidique ou diarrhéique, transfert',
        '- Confusion, convulsions',
      ],
      hgr: [
        '- Ionogramme, NaCl 3 % ou 0,9 %, restriction hydrique, recherche de la cause',
        '- Coma, hyponatrémie réfractaire',
      ],
      tert: ['- Réanimation, IRM', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hyponatrémie chronique modérée',
        type: 'commune',
        description: 'Peu symptomatique.',
        terrain: '- Sujet âgé, thiazidique, insuffisance cardiaque',
        fonctionnels: '- Asthénie, nausées, troubles de la marche',
        generaux: '',
        physiques: '- Selon la volémie',
        paraclinique: '- Natrémie 125–134 mmol/L',
        etiologies: '- Médicaments, SIADH',
        syndromes: [],
        examens: [['ionogramme', 'Natrémie']],
      },
      {
        nom: 'Hyponatrémie aiguë sévère',
        type: 'gravite',
        description: 'Œdème cérébral.',
        terrain: '- Perfusions hypotoniques, potomanie',
        fonctionnels: '- Céphalées, vomissements',
        generaux: '',
        physiques: '- Confusion, convulsions, coma',
        paraclinique: '- Natrémie < 125 mmol/L',
        etiologies: '- Excès d’eau rapide',
        syndromes: ['syndrome-d-hypertension-intracranienne', 'syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== Dyskaliémies
  {
    ...ENDO,
    slug: 'dyskaliemies',
    nom: 'Dyskaliémies (hyper- et hypokaliémie)',
    resume:
      'Troubles du potassium à risque d’arythmie mortelle : ECG en premier ; hyperkaliémie = calcium, insuline-glucose, salbutamol, épuration ; hypokaliémie = KCl oral ou IV lent.',
    definition:
      'Hyperkaliémie : kaliémie > 5,0 mmol/L (sévère ≥ 6,5 ou avec signes ECG). Hypokaliémie : kaliémie < 3,5 mmol/L (sévère < 2,5 ou avec signes ECG ou musculaires).',
    physiopathologie:
      '## Mécanismes\n- Le potassium règle l’excitabilité cardiaque et musculaire\n- **Hyperkaliémie** : défaut d’élimination rénale, transfert hors des cellules (acidose, lyse), apports\n- **Hypokaliémie** : pertes digestives ou rénales, transfert dans les cellules (insuline, bêta-2-mimétiques, alcalose)',
    diagnostic:
      '## Hyperkaliémie\n- Souvent asymptomatique ; faiblesse musculaire, paresthésies\n- ECG : ondes T pointues, allongement du PR, élargissement du QRS, onde sinusoïdale, bradycardie, arrêt\n- Éliminer une fausse hyperkaliémie (hémolyse du prélèvement)\n\n## Hypokaliémie\n- Faiblesse, crampes, constipation, iléus, paralysie\n- ECG : ondes U, sous-décalage du ST, allongement du QT, arythmies (torsades de pointes)',
    examens: [
      ['confirmation', 'ionogramme', 'Kaliémie ; natrémie, bicarbonates.'],
      ['gravite', 'ecg', 'Signes de gravité : élargissement du QRS, arythmies.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale (cause principale d’hyperkaliémie).'],
      ['premiere_intention', 'glycemie', 'Acidocétose, insuline.'],
      ['premiere_intention', 'gaz-du-sang', 'Acidose ou alcalose.'],
      ['etiologique', 'calcemie-magnesemie', 'Hypomagnésémie : hypokaliémie réfractaire.'],
      ['etiologique', 'ldh', 'Lyse cellulaire (rhabdomyolyse, hémolyse, lyse tumorale).'],
    ],
    scores: [],
    differentiels: [
      ['Fausse hyperkaliémie', 'Hémolyse du prélèvement, garrot prolongé ; ECG normal.'],
      ['Paralysies périodiques', 'Accès de paralysie avec hypokaliémie de transfert (thyrotoxicose).'],
    ],
    etiologies:
      '## Hyperkaliémie\n- Insuffisance rénale aiguë ou chronique\n- Médicaments : IEC, sartans, spironolactone, AINS, cotrimoxazole à forte dose, héparine\n- Acidocétose, rhabdomyolyse, hémolyse, insuffisance surrénalienne\n\n## Hypokaliémie\n- **Diarrhées** (choléra), vomissements\n- Diurétiques (furosémide, thiazidiques), insuline, salbutamol\n- Amphotéricine B, malnutrition, hypomagnésémie',
    principes: [
      [
        'Hyperkaliémie menaçante (ECG anormal ou K ≥ 6,5)',
        'Protéger le cœur puis faire baisser le potassium.',
        '- **Gluconate de calcium 10 %** 10 mL IV en 5 à 10 min (à répéter si l’ECG reste anormal)\n- **Insuline rapide** 10 U IV + **glucose** 25 g (glucose 10 % 250 mL ou 30 % 80 mL), surveillance de la glycémie\n- **Salbutamol** nébulisé 10 à 20 mg\n- **Bicarbonate de sodium** si acidose métabolique',
      ],
      [
        'Épuration du potassium',
        'Éliminer l’excès.',
        '- **Furosémide** si diurèse conservée\n- **Polystyrène sulfonate de sodium** (action lente)\n- **Dialyse** si insuffisance rénale ou échec\n- Arrêt des médicaments hyperkaliémiants',
      ],
      [
        'Hypokaliémie',
        'Restaurer le potassium sans danger.',
        '- Modérée : **KCl** per os 2 à 6 g/j (aliments riches : bananes, haricots)\n- Sévère : KCl IV **≤ 10 à 20 mmol/h** dilué (jamais en bolus, jamais pur), sous surveillance ECG\n- Corriger une hypomagnésémie\n- Traiter la cause (réhydratation dans le choléra avec soluté contenant du potassium)',
      ],
    ],
    molecules: [
      ['gluconate-de-calcium', 'premiere', 'Hyperkaliémie avec signes ECG'],
      ['insuline-humaine-rapide', 'premiere', 'Avec glucose : transfert du potassium'],
      ['glucose-10', 'premiere', 'Associé à l’insuline'],
      ['salbutamol', 'premiere', 'Nébulisation : transfert du potassium'],
      ['bicarbonate-de-sodium', 'adjuvant', 'Hyperkaliémie avec acidose'],
      ['furosemide', 'adjuvant', 'Épuration rénale'],
      ['polystyrene-sulfonate-de-sodium', 'adjuvant', 'Épuration digestive'],
      ['chlorure-de-potassium', 'premiere', 'Hypokaliémie'],
    ],
    complications: [
      {
        nom: 'Arythmies et arrêt cardiaque',
        description: 'Hyperkaliémie ou hypokaliémie sévères.',
        traitement: '- Calcium, insuline-glucose, KCl selon le cas',
        clinique: '- Pouls, syncope',
        paraclinique: '- ECG',
      },
      {
        nom: 'Paralysie et insuffisance respiratoire',
        description: 'Hypokaliémie profonde.',
        traitement: '- KCl IV',
        clinique: '- Faiblesse des membres et respiratoire',
        paraclinique: '- Kaliémie',
      },
      {
        nom: 'Hypoglycémie',
        description: 'Traitement insuline-glucose.',
        traitement: '- Glucose',
        clinique: '- Sueurs, confusion',
        paraclinique: '- Glycémie horaire',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si la cause est traitée ; récidive fréquente dans l’insuffisance rénale chronique',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Faiblesse musculaire', 'frequent'],
      ['Palpitations', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Syncope', 'occasionnel'],
    ],
    sources: [
      'KDIGO — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- KCl oral, SRO, repérage des patients à risque, transfert',
        '- Faiblesse, palpitations, insuffisance rénale',
      ],
      hgr: ['- Ionogramme, ECG, traitement d’urgence de l’hyperkaliémie, KCl IV', '- Besoin de dialyse'],
      tert: ['- Dialyse, réanimation', ''],
    },
    alertes: { 'hyperkaliemie-menacante': 'Kaliémie ≥ 6,5 mmol/L ou anomalies ECG (T pointues, QRS larges)' },
    formes: [
      {
        nom: 'Hyperkaliémie de l’insuffisant rénal',
        type: 'commune',
        description: 'Souvent découverte au bilan.',
        terrain: '- Insuffisance rénale, IEC, spironolactone',
        fonctionnels: '- Faiblesse',
        generaux: '',
        physiques: '- Bradycardie',
        paraclinique: '- K > 6 mmol/L, T pointues',
        etiologies: '- Défaut d’élimination',
        syndromes: ['syndrome-uremique'],
        examens: [['ecg', 'Gravité']],
      },
      {
        nom: 'Hypokaliémie des pertes digestives',
        type: 'commune',
        description: 'Diarrhée profuse, choléra.',
        terrain: '- Diarrhée, vomissements',
        fonctionnels: '- Crampes, faiblesse',
        generaux: '- Déshydratation',
        physiques: '- Hypotonie, iléus',
        paraclinique: '- K < 3 mmol/L, ondes U',
        etiologies: '- Pertes digestives',
        syndromes: ['syndrome-choleriforme'],
      },
    ],
  },
];
