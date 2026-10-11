'use strict';

/**
 * Lot 28 (neuropsychiatrie : AVC et épilepsie) — AVC ischémique, AVC hémorragique, accident
 * ischémique transitoire, hémorragie méningée, première crise convulsive de l'adulte, épilepsie
 * associée à l'onchocercose. Rédigé par IA (ESO, AHA, ILAE, OMS) : à valider.
 */

const AVC = { departement: 'neuropsychiatrie', specialite: 'AVC' };
const EPI = { departement: 'neuropsychiatrie', specialite: 'Épilepsie' };

module.exports = [
  // =================================================================== AVC ischémique
  {
    ...AVC,
    slug: 'avc-ischemique',
    nom: 'AVC ischémique',
    resume:
      'Déficit neurologique brutal par occlusion artérielle cérébrale (80 % des AVC), surtout lié à l’HTA en RDC : « le temps, c’est du cerveau » ; scanner pour éliminer une hémorragie ; thrombolyse (altéplase) avant 4 h 30 si disponible ; sinon aspirine 160–300 mg dès l’exclusion de l’hémorragie ; unité neurovasculaire ou soins organisés, prévention des complications, rééducation, prévention secondaire.',
    definition:
      'Déficit neurologique focal d’installation brutale lié à l’occlusion d’une artère cérébrale, avec infarctus du parenchyme cérébral confirmé par l’imagerie ou par la persistance des symptômes au-delà de 24 heures.',
    physiopathologie:
      '## Mécanismes\n- **Athérosclérose** des grosses artères (carotides, vertébrales)\n- **Lacunes** (petites artères perforantes : HTA, diabète)\n- **Cardio-embolique** : fibrillation atriale, valvulopathies rhumatismales, cardiomyopathie, endocardite\n- Autres : drépanocytose, dissection, VIH (vasculopathie), syphilis, tuberculose méningée\n\n## Pénombre ischémique\n- Zone de tissu récupérable autour du cœur de l’infarctus : justifie la reperfusion précoce',
    diagnostic:
      '## Clinique (FAST : Face, Arm, Speech, Time)\n- Début **brutal** : hémiparésie, paralysie faciale, **aphasie**, troubles de la sensibilité, troubles visuels (hémianopsie), vertiges et ataxie (territoire vertébro-basilaire)\n- **Heure de début** (ou dernière fois vu normal)\n- Tension artérielle, glycémie capillaire (**hypoglycémie** = diagnostic différentiel), pouls irrégulier (FA)\n- Score NIHSS\n\n## Examens\n- **Scanner cérébral sans injection** en urgence (élimine l’hémorragie)\n- Glycémie, NFS, hémostase, ionogramme, créatinine, ECG, bilan lipidique, test VIH, sérologie syphilis\n- Bilan étiologique : écho-Doppler des troncs supra-aortiques, échocardiographie, Holter',
    examens: [
      ['premiere_intention', 'scanner-cerebral', 'Éliminer une hémorragie.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie, hyperglycémie.'],
      ['premiere_intention', 'ecg', 'Fibrillation atriale.'],
      ['premiere_intention', 'nfs', 'Polyglobulie, thrombopénie.'],
      ['premiere_intention', 'hemostase', 'Avant thrombolyse.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Ischémie précoce, tronc cérébral.'],
      ['etiologique', 'echo-doppler-tsa', 'Sténose carotidienne.'],
      ['etiologique', 'echocardiographie', 'Source embolique.'],
      ['etiologique', 'bilan-lipidique', 'Facteur de risque.'],
      ['etiologique', 'tdr-vih', 'Vasculopathie VIH.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
    ],
    scores: [],
    differentiels: [
      ['avc-hemorragique', 'Scanner : hyperdensité.'],
      ['hypoglycemie-adulte', 'Glycémie basse ; corrigée par le sucre.'],
      [
        'Crise d’épilepsie avec déficit post-critique (Todd)',
        'Crise observée, régression en quelques heures.',
      ],
      ['hematome-sous-dural', 'Chute, installation progressive.'],
      [
        'Tumeur ou abcès cérébral',
        'Installation progressive, fièvre (toxoplasmose cérébrale chez le patient VIH).',
      ],
      ['paludisme-grave', 'Fièvre, troubles de conscience, zone d’endémie.'],
    ],
    etiologies:
      '## Facteurs de risque\n- **HTA** (principal), diabète, tabac, dyslipidémie, obésité, sédentarité, alcool\n- Fibrillation atriale, cardiopathies rhumatismales, drépanocytose, VIH, contraception œstroprogestative chez la fumeuse',
    principes: [
      [
        'Phase aiguë',
        'Sauver la pénombre.',
        '- **Alerte** et transfert rapide vers une structure avec scanner\n- **Thrombolyse IV (altéplase 0,9 mg/kg)** avant 4 h 30 si critères réunis et centre équipé ; thrombectomie (centres de référence)\n- Hors thrombolyse : **aspirine** 160–300 mg/j dès l’hémorragie exclue (par sonde si troubles de déglutition)',
      ],
      [
        'Mesures générales',
        'Éviter l’aggravation.',
        '- Tension artérielle : **ne pas baisser** sauf > 220/120 mmHg (ou > 185/110 avant thrombolyse) — **labétalol** ou **nicardipine**\n- Glycémie 1,4–1,8 g/L, traitement de la fièvre, oxygène si SpO2 < 94 %\n- **Test de déglutition** avant toute alimentation orale ; tête à 30°\n- Prévention des escarres, de la thrombose veineuse (mobilisation, **enoxaparine** après 24–48 h), des pneumopathies',
      ],
      [
        'Rééducation et prévention secondaire',
        'Limiter les séquelles et la récidive.',
        '- Kinésithérapie et orthophonie précoces, soutien des familles\n- Antiagrégant au long cours (**aspirine** ou **clopidogrel**), **statine** (atorvastatine)\n- Contrôle de la tension (**amlodipine**, IEC, diurétique), du diabète, arrêt du tabac\n- FA : anticoagulation (warfarine, apixaban, rivaroxaban) après 3–14 jours selon la taille de l’infarctus',
      ],
    ],
    molecules: [
      ['alteplase', 'premiere', 'Thrombolyse < 4 h 30'],
      ['acide-acetylsalicylique', 'premiere', 'Phase aiguë et prévention secondaire'],
      ['clopidogrel', 'alternative', 'Prévention secondaire'],
      ['atorvastatine', 'premiere', 'Prévention secondaire'],
      ['labetalol', 'premiere', 'HTA sévère à la phase aiguë'],
      ['nicardipine', 'alternative', 'HTA sévère à la phase aiguë'],
      ['amlodipine', 'premiere', 'HTA (prévention secondaire)'],
      ['enoxaparine', 'adjuvant', 'Prévention de la thrombose veineuse'],
      ['apixaban', 'alternative', 'Fibrillation atriale'],
      ['warfarine', 'alternative', 'Fibrillation atriale, valvulopathie'],
    ],
    complications: [
      {
        nom: 'Œdème cérébral et engagement',
        description: 'Infarctus étendu (sylvien malin).',
        traitement: '- Tête à 30°, osmothérapie, craniectomie décompressive',
        clinique: '- Aggravation de la conscience',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Troubles de la déglutition.',
        traitement: '- Antibiotiques, kinésithérapie',
        clinique: '- Fièvre, toux',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Thrombose veineuse et embolie',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Immobilisation.',
        traitement: '- Anticoagulation',
        clinique: '- Œdème du mollet',
        paraclinique: '- Écho-Doppler',
      },
      {
        nom: 'Transformation hémorragique',
        fiche: 'avc-hemorragique',
        description: 'Spontanée ou après thrombolyse.',
        traitement: '- Arrêt des antithrombotiques',
        clinique: '- Aggravation',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Dépression, épilepsie, spasticité',
        description: 'Séquelles.',
        traitement: '- Antidépresseurs, antiépileptiques, rééducation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 20 à 30 % à 1 mois en Afrique ; handicap fréquent ; récidive de 10 % par an sans prévention',
    urgences: ['avc-aigu', 'urgence-hypertensive'],
    symptomes: [
      ['Déficit moteur', 'tres_frequent'],
      ['Troubles du langage', 'frequent'],
      ['Troubles sensitifs', 'frequent'],
      ['Troubles visuels', 'occasionnel'],
      ['Vertiges', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      'European Stroke Organisation (ESO) guidelines on intravenous thrombolysis for acute ischaemic stroke',
      'Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update',
      "Adams and Victor's Principles of Neurology",
    ],
    niveaux: {
      cs: ['- Reconnaître (FAST), glycémie, heure de début, transfert immédiat', '- Tout déficit brutal'],
      hgr: ['- Scanner, aspirine, mesures générales, rééducation', '- Thrombolyse si équipé'],
      tert: ['- Unité neurovasculaire, thrombolyse, thrombectomie', ''],
    },
    alertes: {
      'avc-aigu': 'Déficit neurologique brutal : noter l’heure de début',
      'urgence-hypertensive': 'AVC avec tension ≥ 220/120 mmHg',
    },
    formes: [
      {
        nom: 'Infarctus sylvien',
        type: 'commune',
        description: 'Territoire de l’artère cérébrale moyenne.',
        terrain: '- Hypertendu',
        fonctionnels: '- Hémiparésie, aphasie (hémisphère gauche)',
        generaux: '',
        physiques: '- Hémiplégie à prédominance brachio-faciale, déviation de la tête et des yeux',
        paraclinique: '- Hypodensité au scanner',
        etiologies: '- Athérome, embolie',
        syndromes: ['syndrome-pyramidal'],
        examens: [['scanner-cerebral', 'Hypodensité ou normal précocement']],
      },
      {
        nom: 'Lacune',
        type: 'topographique',
        description: 'Petite artère perforante.',
        terrain: '- HTA, diabète',
        fonctionnels: '- Déficit moteur ou sensitif pur',
        generaux: '',
        physiques: '- Hémiplégie proportionnelle',
        paraclinique: '- Petite lésion profonde',
        etiologies: '- Lipohyalinose',
        syndromes: ['syndrome-pyramidal'],
      },
      {
        nom: 'AVC vertébro-basilaire',
        type: 'topographique',
        description: 'Tronc cérébral, cervelet.',
        terrain: '',
        fonctionnels: '- Vertiges, troubles de la déglutition, diplopie',
        generaux: '- Troubles de conscience',
        physiques: '- Syndrome alterne, ataxie',
        paraclinique: '- IRM',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Infarctus malin',
        type: 'gravite',
        description: 'Œdème massif.',
        terrain: '- Sujet jeune',
        fonctionnels: '',
        generaux: '- Coma',
        physiques: '- Hémiplégie massive',
        paraclinique: '- Effet de masse',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne', 'syndrome-d-engagement-cerebral'],
      },
    ],
  },

  // =================================================================== AVC hémorragique
  {
    ...AVC,
    slug: 'avc-hemorragique',
    nom: 'AVC hémorragique',
    resume:
      'Hémorragie intraparenchymateuse cérébrale, proportionnellement fréquente en Afrique (20–40 % des AVC), surtout due à l’HTA mal contrôlée de l’adulte jeune : déficit brutal avec céphalées, vomissements, troubles de conscience ; scanner ; baisser la PAS vers 140 mmHg (nicardipine, labétalol), corriger l’anticoagulation, neurochirurgie dans certains cas.',
    definition:
      'Saignement spontané (non traumatique) dans le parenchyme cérébral, avec ou sans inondation ventriculaire.',
    physiopathologie:
      '## Causes\n- **HTA chronique** (localisations profondes : noyaux gris, thalamus, pont, cervelet)\n- Anticoagulants, troubles de la coagulation, thrombopénie\n- Malformations artério-veineuses, anévrismes (sujet jeune), angiopathie amyloïde (sujet âgé)\n- Éclampsie, drogues (cocaïne), tumeurs\n\n## Évolution\n- Expansion de l’hématome dans les premières heures, œdème, hypertension intracrânienne, hydrocéphalie',
    diagnostic:
      '## Clinique\n- Déficit focal brutal, souvent avec **céphalées**, **vomissements**, **HTA sévère**, troubles de conscience d’aggravation rapide\n- Convulsions possibles\n- Score de Glasgow\n\n## Examens\n- **Scanner cérébral** : hyperdensité spontanée (volume, siège, inondation ventriculaire, effet de masse)\n- NFS, plaquettes, hémostase (TP/INR), glycémie, créatinine\n- Angioscanner si sujet jeune, siège atypique (malformation)',
    examens: [
      ['confirmation', 'scanner-cerebral', 'Hyperdensité intraparenchymateuse.'],
      ['premiere_intention', 'hemostase', 'Anticoagulants, coagulopathie.'],
      ['premiere_intention', 'nfs', 'Thrombopénie.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie, hyperglycémie.'],
      ['premiere_intention', 'creatinine', 'Retentissement de l’HTA.'],
      ['premiere_intention', 'ecg', 'Hypertrophie ventriculaire gauche.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Cause sous-jacente.'],
    ],
    scores: [],
    differentiels: [
      ['avc-ischemique', 'Scanner : pas d’hyperdensité.'],
      ['hemorragie-meningee', 'Sang dans les espaces sous-arachnoïdiens.'],
      ['hematome-sous-dural', 'Collection extra-cérébrale, traumatisme.'],
      ['eclampsie', 'Grossesse ou post-partum, convulsions, protéinurie.'],
      ['Tumeur cérébrale hémorragique', 'Prise de contraste, œdème important.'],
    ],
    etiologies: '## Facteurs de risque\n- **HTA** non traitée ou mal contrôlée, alcool, anticoagulants, âge',
    principes: [
      [
        'Phase aiguë',
        'Limiter l’expansion de l’hématome.',
        '- Protection des voies aériennes si Glasgow ≤ 8\n- **Baisse de la PAS vers 140 mmHg** (entre 130 et 150) dans les premières heures : **nicardipine** IV ou **labétalol** IV, sans chute brutale\n- **Anticoagulants** : arrêt ; antivitamine K : **vitamine K** IV + plasma ou concentré de complexe prothrombinique\n- Pas d’aspirine ni d’héparine à visée curative',
      ],
      [
        'Mesures générales',
        'Prévenir les complications.',
        '- Tête à 30°, normothermie, glycémie, natrémie\n- Convulsions : antiépileptique (**lévétiracétam**, phénytoïne), pas de prophylaxie systématique\n- Hypertension intracrânienne : **mannitol** en attente de chirurgie\n- Prévention de la thrombose veineuse : compression, **enoxaparine** après 24–48 h si hématome stable',
      ],
      [
        'Chirurgie',
        'Situations sélectionnées.',
        '- **Hématome cérébelleux** > 3 cm avec compression ou hydrocéphalie : évacuation\n- Hydrocéphalie : dérivation ventriculaire externe\n- Hématome lobaire volumineux avec aggravation chez le sujet jeune',
      ],
      [
        'Prévention secondaire',
        'Éviter la récidive.',
        '- Contrôle strict de la tension artérielle (< 130/80 mmHg), arrêt de l’alcool, rééducation',
      ],
    ],
    molecules: [
      ['nicardipine', 'premiere', 'Baisse tensionnelle'],
      ['labetalol', 'premiere', 'Baisse tensionnelle'],
      ['vitamine-k1-phytomenadione', 'premiere', 'Hémorragie sous antivitamine K'],
      ['mannitol', 'adjuvant', 'Hypertension intracrânienne'],
      ['levetiracetam', 'adjuvant', 'Crises convulsives'],
      ['amlodipine', 'premiere', 'Prévention secondaire'],
      ['paracetamol', 'adjuvant', 'Céphalées, fièvre'],
    ],
    complications: [
      {
        nom: 'Engagement cérébral',
        description: 'Effet de masse.',
        traitement: '- Osmothérapie, chirurgie',
        clinique: '- Mydriase, coma',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Hydrocéphalie aiguë',
        description: 'Inondation ventriculaire.',
        traitement: '- Dérivation ventriculaire',
        clinique: '- Aggravation de la conscience',
        paraclinique: '- Dilatation ventriculaire',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Troubles de conscience et de déglutition.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Épilepsie séquellaire',
        fiche: 'epilepsie',
        description: 'Hématome cortical.',
        traitement: '- Antiépileptiques',
        clinique: '- Crises',
        paraclinique: '- EEG',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 30 à 50 % à 1 mois ; facteurs pronostiques : volume, Glasgow, inondation ventriculaire, siège infratentoriel, âge',
    urgences: ['avc-aigu', 'urgence-hypertensive'],
    symptomes: [
      ['Déficit moteur', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Troubles du langage', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'AHA — recommandations de pratique clinique',
      'ESO — recommandations de pratique clinique',
      "Adams and Victor's Principles of Neurology",
    ],
    niveaux: {
      cs: [
        '- Reconnaître, glycémie, position, transfert',
        '- Tout déficit brutal avec céphalées ou troubles de conscience',
      ],
      hgr: ['- Scanner, contrôle tensionnel, mesures générales', '- Neurochirurgie'],
      tert: ['- Neurochirurgie, réanimation', ''],
    },
    alertes: {
      'avc-aigu': 'Déficit brutal avec céphalées, vomissements, HTA sévère',
      'urgence-hypertensive': 'Hémorragie cérébrale avec PAS > 180 mmHg',
    },
    formes: [
      {
        nom: 'Hématome profond hypertensif',
        type: 'commune',
        description: 'Noyaux gris, capsule interne.',
        terrain: '- Hypertendu de 40 à 60 ans',
        fonctionnels: '- Hémiplégie brutale, céphalées',
        generaux: '- HTA sévère',
        physiques: '- Hémiplégie proportionnelle',
        paraclinique: '- Hyperdensité profonde',
        etiologies: '- HTA',
        syndromes: ['syndrome-pyramidal'],
        examens: [['scanner-cerebral', 'Hyperdensité']],
      },
      {
        nom: 'Hématome cérébelleux',
        type: 'topographique',
        description: 'Risque de compression du tronc.',
        terrain: '',
        fonctionnels: '- Vertiges, vomissements, céphalées occipitales',
        generaux: '',
        physiques: '- Ataxie',
        paraclinique: '- Hydrocéphalie',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
      {
        nom: 'Hémorragie grave avec inondation ventriculaire',
        type: 'gravite',
        description: 'Coma.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Coma',
        physiques: '- Signes d’engagement',
        paraclinique: '- Sang intraventriculaire',
        etiologies: '',
        syndromes: ['syndrome-d-engagement-cerebral'],
      },
    ],
  },

  // =================================================================== AIT
  {
    ...AVC,
    slug: 'accident-ischemique-transitoire',
    nom: 'Accident ischémique transitoire',
    resume:
      'Déficit neurologique brutal régressant complètement (le plus souvent en moins d’une heure), sans infarctus à l’imagerie : urgence car risque d’AVC constitué élevé dans les jours qui suivent ; aspirine immédiate (± clopidogrel 21 jours), bilan étiologique rapide (ECG, Doppler, échocardiographie), contrôle des facteurs de risque.',
    definition:
      'Épisode bref de dysfonction neurologique dû à une ischémie focale cérébrale ou rétinienne, sans lésion d’infarctus à l’imagerie.',
    physiopathologie:
      '## Mécanismes\n- Mêmes que l’AVC ischémique : athérome carotidien ou vertébral, embolie cardiaque (FA), petites artères\n- Signal d’alarme : risque d’AVC de 5 à 10 % dans les 7 jours',
    diagnostic:
      '## Clinique\n- Déficit focal **brutal** et **transitoire** : faiblesse ou engourdissement d’un hémicorps, aphasie, **cécité monoculaire transitoire** (amaurose fugace), diplopie, vertige avec autres signes\n- Examen souvent normal au moment de la consultation\n- Score **ABCD²** (âge, tension, clinique, durée, diabète) pour estimer le risque\n\n## Examens\n- Scanner ou IRM cérébrale, ECG, glycémie, NFS, bilan lipidique\n- **Écho-Doppler des troncs supra-aortiques**, échocardiographie, Holter ECG',
    examens: [
      ['premiere_intention', 'scanner-cerebral', 'Éliminer une autre cause.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Infarctus récent (redéfinit l’AIT en AVC).'],
      ['premiere_intention', 'ecg', 'Fibrillation atriale.'],
      ['etiologique', 'echo-doppler-tsa', 'Sténose carotidienne.'],
      ['etiologique', 'echocardiographie', 'Source cardio-embolique.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie, diabète.'],
      ['etiologique', 'bilan-lipidique', 'Facteur de risque.'],
    ],
    scores: [],
    differentiels: [
      ['avc-ischemique', 'Persistance du déficit ou infarctus à l’imagerie.'],
      ['hypoglycemie-adulte', 'Glycémie basse.'],
      ['Migraine avec aura', 'Symptômes positifs progressifs (scintillements), céphalée.'],
      ['Crise d’épilepsie focale', 'Mouvements cloniques, déficit post-critique.'],
      ['Syncope', 'Perte de connaissance brève sans déficit focal.'],
    ],
    etiologies:
      '## Facteurs de risque\n- HTA, diabète, tabac, dyslipidémie, fibrillation atriale, cardiopathies rhumatismales',
    principes: [
      [
        'Traitement immédiat',
        'Prévenir l’AVC.',
        '- **Aspirine** 160–300 mg dès l’hémorragie éliminée\n- AIT à haut risque : **aspirine + clopidogrel** pendant 21 jours puis antiagrégant seul\n- **Statine** de forte intensité (atorvastatine)',
      ],
      [
        'Bilan et traitement étiologique',
        'Agir sur la cause.',
        '- FA : anticoagulation\n- Sténose carotidienne symptomatique ≥ 70 % : endartériectomie dans les 2 semaines (centres équipés)\n- Contrôle tensionnel, diabète, arrêt du tabac, activité physique',
      ],
    ],
    molecules: [
      ['acide-acetylsalicylique', 'premiere', 'Antiagrégant'],
      ['clopidogrel', 'premiere', 'Double antiagrégation 21 jours'],
      ['atorvastatine', 'premiere', 'Statine'],
      ['amlodipine', 'premiere', 'HTA'],
      ['apixaban', 'alternative', 'Fibrillation atriale'],
      ['warfarine', 'alternative', 'Fibrillation atriale, valvulopathie'],
    ],
    complications: [
      {
        nom: 'AVC ischémique constitué',
        fiche: 'avc-ischemique',
        description: 'Risque maximal dans les 48 premières heures.',
        traitement: '- Prise en charge de l’AVC',
        clinique: '- Déficit persistant',
        paraclinique: '- Imagerie',
      },
    ],
    evolution:
      '## Pronostic\n- Risque d’AVC fortement réduit par un bilan et un traitement dans les 24–48 heures',
    urgences: ['avc-aigu'],
    symptomes: [
      ['Déficit moteur', 'frequent'],
      ['Troubles du langage', 'frequent'],
      ['Troubles sensitifs', 'frequent'],
      ['Troubles visuels', 'occasionnel'],
      ['Vertiges', 'occasionnel'],
    ],
    sources: [
      'AHA — recommandations de pratique clinique',
      'ESO — recommandations de pratique clinique',
      'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
    ],
    niveaux: {
      cs: [
        '- Reconnaître, aspirine si hémorragie exclue, contrôle tensionnel, orientation rapide',
        '- Tout déficit transitoire',
      ],
      hgr: ['- Imagerie, ECG, Doppler, traitement', ''],
      tert: ['- Neurologie vasculaire, chirurgie carotidienne', ''],
    },
    alertes: { 'avc-aigu': 'Déficit neurologique transitoire récent : risque d’AVC imminent' },
    formes: [
      {
        nom: 'AIT carotidien',
        type: 'commune',
        description: 'Territoire antérieur.',
        terrain: '- Hypertendu, diabétique',
        fonctionnels: '- Faiblesse d’un hémicorps, aphasie, amaurose fugace',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- Sténose carotidienne possible',
        etiologies: '- Athérome',
        syndromes: [],
      },
      {
        nom: 'AIT vertébro-basilaire',
        type: 'topographique',
        description: 'Territoire postérieur.',
        terrain: '',
        fonctionnels: '- Vertiges, diplopie, troubles de l’équilibre',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hémorragie méningée
  {
    ...AVC,
    slug: 'hemorragie-meningee',
    nom: 'Hémorragie méningée',
    resume:
      'Saignement dans les espaces sous-arachnoïdiens, surtout par rupture d’anévrisme : céphalée brutale « en coup de tonnerre », vomissements, raideur de nuque sans fièvre ; scanner (ou ponction lombaire si scanner normal) ; repos, antalgie, nimodipine, contrôle tensionnel, transfert neurochirurgical pour sécuriser l’anévrisme.',
    definition:
      'Irruption de sang dans les espaces sous-arachnoïdiens, d’origine non traumatique, due dans 85 % des cas à la rupture d’un anévrisme artériel intracrânien.',
    physiopathologie:
      '## Causes\n- **Rupture d’anévrisme** (polygone de Willis)\n- Malformations artério-veineuses, dissections, troubles de la coagulation\n\n## Complications\n- **Resaignement** (précoce, grave), **vasospasme** (J4–J14) avec ischémie retardée, **hydrocéphalie**, hyponatrémie',
    diagnostic:
      '## Clinique\n- **Céphalée brutale, intense, inhabituelle** (« la pire de ma vie »), maximale en quelques secondes\n- Vomissements, photophobie, **raideur de nuque**, troubles de conscience, convulsions\n- Pas de fièvre au début ; déficit focal possible\n- Classification de la WFNS (Glasgow et déficit)\n\n## Examens\n- **Scanner cérébral sans injection** (sang dans les citernes) : très sensible dans les 6 premières heures\n- **Ponction lombaire** si scanner normal (> 6–12 h) : liquide uniformément hémorragique, xanthochromie\n- Angioscanner ou artériographie : anévrisme',
    examens: [
      ['confirmation', 'scanner-cerebral', 'Sang sous-arachnoïdien.'],
      ['deuxieme_intention', 'lcr', 'Si scanner normal : liquide hémorragique, xanthochromie.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie.'],
      ['premiere_intention', 'hemostase', 'Troubles de la coagulation.'],
      ['premiere_intention', 'ecg', 'Anomalies ECG fréquentes.'],
      ['gravite', 'doppler-transcranien', 'Vasospasme.'],
    ],
    scores: [],
    differentiels: [
      ['meningite-bacterienne', 'Fièvre, liquide trouble.'],
      ['avc-hemorragique', 'Hématome intraparenchymateux.'],
      ['Céphalée migraineuse', 'Antécédents identiques, installation progressive.'],
      ['urgences-hypertensives', 'Encéphalopathie hypertensive.'],
      ['Thrombose veineuse cérébrale', 'Céphalées progressives, post-partum.'],
    ],
    etiologies:
      '## Facteurs de risque\n- HTA, tabac, alcool, polykystose rénale, antécédents familiaux d’anévrisme',
    principes: [
      [
        'Mesures immédiates',
        'Prévenir le resaignement.',
        '- Repos strict, tête à 30°, environnement calme\n- Antalgie (**paracétamol**, **morphine**), antiémétique, laxatifs\n- PAS < 160 mmHg jusqu’à sécurisation de l’anévrisme (**nicardipine**, **labétalol**)\n- Pas d’aspirine ni d’AINS',
      ],
      [
        'Prévention de l’ischémie retardée',
        'Limiter le vasospasme.',
        '- **Nimodipine** 60 mg toutes les 4 heures pendant 21 jours\n- Normovolémie, natrémie normale (pas de restriction hydrique)',
      ],
      [
        'Traitement de l’anévrisme',
        'Sécuriser.',
        '- **Transfert neurochirurgical** : embolisation ou clippage dans les 72 heures\n- Hydrocéphalie : dérivation ventriculaire\n- Convulsions : lévétiracétam',
      ],
    ],
    molecules: [
      ['nimodipine', 'premiere', 'Prévention du vasospasme'],
      ['paracetamol', 'premiere', 'Céphalées'],
      ['morphine', 'alternative', 'Céphalées intenses'],
      ['nicardipine', 'premiere', 'Contrôle tensionnel'],
      ['labetalol', 'alternative', 'Contrôle tensionnel'],
      ['ondansetron', 'adjuvant', 'Vomissements'],
      ['levetiracetam', 'adjuvant', 'Convulsions'],
      ['lactulose', 'adjuvant', 'Éviter les efforts de poussée'],
    ],
    complications: [
      {
        nom: 'Resaignement',
        description: 'Surtout dans les 24 premières heures.',
        traitement: '- Sécurisation précoce de l’anévrisme',
        clinique: '- Aggravation brutale',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Vasospasme et ischémie retardée',
        fiche: 'avc-ischemique',
        description: 'J4–J14.',
        traitement: '- Nimodipine, normovolémie',
        clinique: '- Déficit secondaire, confusion',
        paraclinique: '- Doppler transcrânien',
      },
      {
        nom: 'Hydrocéphalie',
        description: 'Blocage de la circulation du LCR.',
        traitement: '- Dérivation ventriculaire',
        clinique: '- Troubles de conscience',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Hyponatrémie',
        fiche: 'hyponatremie',
        description: 'Perte de sel cérébrale, SIADH.',
        traitement: '- Sérum salé',
        clinique: '- Confusion',
        paraclinique: '- Natrémie',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 30 à 40 % ; séquelles fréquentes ; meilleur pronostic si l’anévrisme est traité tôt',
    urgences: ['avc-aigu'],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Raideur de nuque', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Photophobie', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'AHA — recommandations de pratique clinique',
      'ESO — recommandations de pratique clinique',
      "Adams and Victor's Principles of Neurology",
    ],
    niveaux: {
      cs: ['- Reconnaître la céphalée brutale, antalgie, transfert', '- Toute céphalée brutale inhabituelle'],
      hgr: ['- Scanner, ponction lombaire, nimodipine', '- Neurochirurgie'],
      tert: ['- Embolisation, clippage, réanimation', ''],
    },
    alertes: { 'avc-aigu': 'Céphalée brutale « en coup de tonnerre » avec vomissements ou raideur de nuque' },
    formes: [
      {
        nom: 'Hémorragie méningée anévrismale',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Adulte de 40 à 60 ans',
        fonctionnels: '- Céphalée brutale, vomissements',
        generaux: '- Apyrexie initiale',
        physiques: '- Raideur de nuque',
        paraclinique: '- Sang dans les citernes',
        etiologies: '- Anévrisme',
        syndromes: ['syndrome-meninge'],
        examens: [['scanner-cerebral', 'Hyperdensité des citernes']],
      },
      {
        nom: 'Forme grave',
        type: 'gravite',
        description: 'Coma d’emblée.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Coma',
        physiques: '- Déficit, signes d’engagement',
        paraclinique: '- Hémorragie abondante, hydrocéphalie',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
    ],
  },

  // =================================================================== Première crise
  {
    ...EPI,
    slug: 'premiere-crise-convulsive-adulte',
    nom: 'Première crise convulsive de l’adulte (démarche)',
    resume:
      'Devant une première crise chez l’adulte : protéger, glycémie, rechercher une cause aiguë (hypoglycémie, paludisme grave, méningite, toxoplasmose ou cryptococcose chez le VIH, AVC, éclampsie, sevrage alcoolique, troubles ioniques) ; une crise isolée sans cause et sans anomalie ne justifie pas toujours un traitement de fond.',
    definition:
      'Premier épisode de crise épileptique chez l’adulte, provoquée (symptomatique aiguë, liée à une agression cérébrale ou systémique) ou non provoquée (pouvant inaugurer une épilepsie).',
    physiopathologie:
      '## Crises symptomatiques aiguës\n- **Métaboliques** : hypoglycémie, hyponatrémie, hypocalcémie, urémie\n- **Infectieuses** : **neuropaludisme**, **méningites**, encéphalites, **toxoplasmose cérébrale**, cryptococcose, neurocysticercose, THA\n- Vasculaires : AVC, thrombose veineuse cérébrale, **éclampsie**\n- Toxiques : **sevrage alcoolique**, intoxications, médicaments\n- Traumatisme crânien\n\n## Crise non provoquée\n- Peut révéler une **épilepsie** (lésion séquellaire, tumeur, cause génétique)',
    diagnostic:
      '## Affirmer la crise\n- Témoins : début, mouvements tonico-cloniques, morsure latérale de langue, perte d’urines, confusion post-critique\n- Différencier d’une **syncope** (pâleur, récupération rapide), d’une crise psychogène\n\n## Rechercher une cause\n- **Glycémie capillaire** immédiate, température, tension artérielle, grossesse\n- Examen neurologique (déficit focal), signes méningés, alcool, médicaments, VIH\n\n## Examens\n- Glycémie, ionogramme, calcémie, créatinine, NFS, **TDR paludisme**, test VIH, β-hCG\n- **Scanner cérébral** si déficit, VIH, traumatisme, âge > 40 ans, crise focale\n- **Ponction lombaire** si fièvre ou signes méningés (après scanner si signes focaux)\n- **EEG** à distance',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypocalcémie.'],
      ['premiere_intention', 'tdr-paludisme', 'Neuropaludisme.'],
      ['premiere_intention', 'tdr-vih', 'Infections opportunistes.'],
      ['premiere_intention', 'beta-hcg', 'Éclampsie.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Lésion focale.'],
      ['deuxieme_intention', 'lcr', 'Méningite, encéphalite.'],
      ['deuxieme_intention', 'eeg', 'Risque de récidive, type d’épilepsie.'],
      ['etiologique', 'crag-cryptocoque', 'Cryptococcose (VIH).'],
    ],
    scores: [],
    differentiels: [
      ['Syncope convulsivante', 'Pâleur, récupération rapide sans confusion.'],
      ['Crise psychogène non épileptique', 'Yeux fermés, mouvements asynchrones, contexte émotionnel.'],
      ['hypoglycemie-adulte', 'Glycémie basse.'],
      ['Accident ischémique transitoire', 'Symptômes déficitaires, pas de mouvements.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Neuropaludisme, méningites, VIH (toxoplasmose, cryptococcose), alcool, AVC, éclampsie, neurocysticercose, traumatismes crâniens',
    principes: [
      [
        'Pendant la crise',
        'Protéger.',
        '- Position latérale de sécurité, ne rien mettre dans la bouche, chronométrer\n- Crise > 5 minutes : **diazépam** 10 mg intrarectal ou **midazolam** buccal/IM → protocole d’état de mal',
      ],
      [
        'Après la crise',
        'Traiter la cause.',
        '- **Glucose** si hypoglycémie (+ **thiamine** chez l’alcoolique)\n- Traitement du paludisme grave, de la méningite, de l’éclampsie (**sulfate de magnésium**), des troubles ioniques',
      ],
      [
        'Traitement de fond',
        'Décider au cas par cas.',
        '- Crise provoquée : pas de traitement de fond au long cours en général\n- Crise non provoquée : traitement si lésion cérébrale, EEG épileptiforme, crise nocturne, déficit, ou après une **deuxième crise**\n- Choix : **carbamazépine** (crises focales), **valproate** (généralisées, éviter chez la femme en âge de procréer), **phénobarbital** (accessible), **lévétiracétam**\n- Conseils : pas de conduite, pas de baignade seul, éviter le feu de cuisine, observance',
      ],
    ],
    molecules: [
      ['diazepam', 'premiere', 'Crise prolongée'],
      ['midazolam', 'alternative', 'Crise prolongée (buccal, IM)'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['vitamine-b1-thiamine', 'premiere', 'Alcoolisme, dénutrition'],
      ['carbamazepine', 'premiere', 'Traitement de fond (crises focales)'],
      ['valproate-de-sodium-acide-valproique', 'alternative', 'Crises généralisées'],
      ['phenobarbital', 'alternative', 'Traitement de fond accessible'],
      ['levetiracetam', 'alternative', 'Traitement de fond'],
    ],
    complications: [
      {
        nom: 'État de mal épileptique',
        fiche: 'etat-de-mal-epileptique',
        description: 'Crise prolongée ou répétée.',
        traitement: '- Benzodiazépine, phénobarbital',
        clinique: '- Crise > 5 min',
        paraclinique: '',
      },
      {
        nom: 'Traumatismes et brûlures',
        description: 'Chute, feu de cuisine.',
        traitement: '- Soins adaptés',
        clinique: '- Plaies, brûlures',
        paraclinique: '',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Troubles de conscience.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, toux',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Récidive dans 30 à 50 % des cas après une première crise non provoquée ; risque plus élevé si lésion ou EEG anormal',
    urgences: ['etat-de-mal-epileptique-urgence', 'paludisme-grave-urgence', 'syndrome-meninge-febrile'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Céphalées', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
      ['Incontinence urinaire', 'occasionnel'],
    ],
    sources: [
      'ILAE — A practical clinical definition of epilepsy',
      'mhGAP Intervention Guide 2.0',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Protection, glycémie, TDR paludisme, diazépam, transfert',
        '- Fièvre, déficit, crise prolongée, VIH, grossesse',
      ],
      hgr: ['- Bilan étiologique, scanner, ponction lombaire, traitement de fond', ''],
      tert: ['- EEG, IRM, neurologie', ''],
    },
    alertes: {
      'etat-de-mal-epileptique-urgence':
        'Crise de plus de 5 minutes ou crises répétées sans reprise de conscience',
      'paludisme-grave-urgence': 'Convulsions avec fièvre en zone d’endémie',
      'syndrome-meninge-febrile': 'Convulsions avec fièvre et raideur de nuque',
    },
    formes: [
      {
        nom: 'Crise symptomatique aiguë',
        type: 'commune',
        description: 'Cause aiguë identifiée.',
        terrain: '- Adulte',
        fonctionnels: '- Crise tonico-clonique',
        generaux: '- Fièvre, contexte',
        physiques: '- Signes de la cause',
        paraclinique: '- Hypoglycémie, paludisme, méningite…',
        etiologies: '- Métaboliques, infectieuses, toxiques',
        syndromes: ['syndrome-convulsif'],
      },
      {
        nom: 'Première crise non provoquée',
        type: 'etiologique',
        description: 'Peut révéler une épilepsie.',
        terrain: '',
        fonctionnels: '- Crise isolée',
        generaux: '',
        physiques: '- Examen normal ou déficit',
        paraclinique: '- EEG, imagerie',
        etiologies: '- Lésion séquellaire, tumeur, génétique',
        syndromes: ['syndrome-convulsif'],
      },
      {
        nom: 'Crise chez le patient VIH',
        type: 'terrain',
        description: 'Infection opportuniste.',
        terrain: '- VIH avancé',
        fonctionnels: '- Crise, céphalées',
        generaux: '- Fièvre',
        physiques: '- Déficit focal',
        paraclinique: '- Lésions au scanner, CrAg',
        etiologies: '- Toxoplasmose, cryptococcose, lymphome',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Épilepsie-onchocercose
  {
    ...EPI,
    slug: 'epilepsie-onchocercose',
    nom: 'Épilepsie associée à l’onchocercose (syndrome du hochement de tête)',
    resume:
      'Épilepsie de l’enfant et de l’adolescent (3–18 ans) en zone de forte transmission de l’onchocercose (Bas-Uele, Tshopo, Ituri…), dont le syndrome du hochement de tête (nodding) : crises, retard de croissance, troubles cognitifs ; antiépileptiques (phénobarbital, valproate), ivermectine de masse renforcée (2 fois/an) et lutte antivectorielle pour la prévention.',
    definition:
      'Épilepsie survenant entre 3 et 18 ans chez un enfant auparavant normal, vivant dans une zone de forte endémie onchocerquienne, avec une fréquence anormalement élevée dans la communauté ; inclut le syndrome du hochement de tête, le syndrome de Nakalanga (retard de croissance) et d’autres types de crises.',
    physiopathologie:
      '## Mécanismes\n- Association épidémiologique forte avec la charge microfilarienne d’Onchocerca volvulus ; mécanisme encore discuté (auto-immunité, inflammation)\n- Atteinte de l’hippocampe et du tronc cérébral\n- La distribution d’ivermectine réduit l’incidence des nouveaux cas',
    diagnostic:
      '## Clinique\n- Début entre **3 et 18 ans**, chez un enfant normal auparavant\n- **Hochements de tête** (atonies brèves répétées, déclenchées par la nourriture ou le froid), crises tonico-cloniques généralisées, absences\n- **Retard de croissance**, retard pubertaire (Nakalanga), **déclin cognitif**, troubles psychiatriques\n- Lésions cutanées d’onchocercose, nodules, prurit\n- Plusieurs cas dans le village ou la famille\n\n## Examens\n- Biopsie cutanée exsangue (microfilaires), EEG si disponible, anthropométrie\n- Éliminer une autre cause (paludisme, neurocysticercose, méningite)',
    examens: [
      ['confirmation', 'biopsie-cutanee-exsangue', 'Microfilaires d’O. volvulus.'],
      ['deuxieme_intention', 'eeg', 'Anomalies épileptiformes.'],
      ['premiere_intention', 'anthropometrie', 'Retard de croissance, malnutrition.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
    ],
    scores: [],
    differentiels: [
      ['epilepsie-enfant', 'Hors zone d’endémie, autre cause.'],
      ['Neurocysticercose', 'Kystes au scanner, élevage de porcs.'],
      ['konzo', 'Paraparésie spastique brutale, manioc.'],
      ['paralysie-cerebrale', 'Atteinte depuis la naissance.'],
      ['Séquelles de neuropaludisme ou de méningite', 'Antécédent infectieux grave.'],
    ],
    etiologies:
      '## Terrain\n- Enfant de 3 à 18 ans vivant près de rivières à courant rapide (simulies) en zone d’hyperendémie, couverture insuffisante en ivermectine',
    principes: [
      [
        'Traitement antiépileptique',
        'Contrôler les crises.',
        '- **Phénobarbital** (accessible, peu coûteux) ou **valproate** ; **carbamazépine** possible\n- Observance, approvisionnement continu (gratuité), suivi régulier\n- Programmes communautaires : agents formés à l’identification et au suivi',
      ],
      [
        'Traitement de l’onchocercose',
        'Réduire la charge parasitaire.',
        '- **Ivermectine** 150 µg/kg (contre-indiquée < 15 kg et chez la femme enceinte ; attention à la loase)\n- Doxycycline 6 semaines (Wolbachia) chez certains patients',
      ],
      [
        'Prévention et soutien',
        'Diminuer les nouveaux cas.',
        '- **Ivermectine sous traitement de masse renforcé** (2 fois par an) dans les foyers, lutte antivectorielle (« slash and clear » des gîtes de simulies)\n- Nutrition, scolarisation, lutte contre la stigmatisation, prévention des brûlures et des noyades',
      ],
    ],
    molecules: [
      ['phenobarbital', 'premiere', 'Antiépileptique accessible'],
      ['valproate-de-sodium-acide-valproique', 'alternative', 'Antiépileptique'],
      ['carbamazepine', 'alternative', 'Antiépileptique'],
      ['ivermectine', 'premiere', 'Onchocercose ; traitement de masse'],
      ['doxycycline', 'adjuvant', 'Anti-Wolbachia'],
      ['diazepam', 'adjuvant', 'Crise prolongée'],
    ],
    complications: [
      {
        nom: 'État de mal épileptique',
        fiche: 'etat-de-mal-epileptique',
        description: 'Crises non contrôlées.',
        traitement: '- Benzodiazépines, phénobarbital',
        clinique: '- Crises répétées',
        paraclinique: '',
      },
      {
        nom: 'Brûlures, noyades, traumatismes',
        description: 'Crises près du feu ou de l’eau.',
        traitement: '- Prévention, soins',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Malnutrition et retard de croissance',
        fiche: 'malnutrition-chronique',
        description: 'Hochements aux repas, Nakalanga.',
        traitement: '- Renutrition',
        clinique: '- Retard statural',
        paraclinique: '- Anthropométrie',
      },
      {
        nom: 'Déclin cognitif et stigmatisation',
        description: 'Exclusion scolaire et sociale.',
        traitement: '- Soutien psychosocial, éducation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité prématurée élevée (crises, accidents, malnutrition) ; amélioration avec un traitement régulier ; incidence en baisse avec l’ivermectine',
    urgences: ['etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Hochements de tête', 'frequent'],
      ['Convulsions', 'tres_frequent'],
      ['Retard de croissance', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Prurit', 'frequent'],
      ['Nodules sous-cutanés', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'mhGAP Intervention Guide 2.0',
      'ILAE — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Identification, phénobarbital, ivermectine, suivi communautaire',
        '- Crises non contrôlées, état de mal',
      ],
      hgr: ['- Ajustement du traitement, bilan', ''],
      tert: ['- EEG, IRM, recherche', ''],
    },
    alertes: { 'etat-de-mal-epileptique-urgence': 'Crise de plus de 5 minutes chez un enfant épileptique' },
    formes: [
      {
        nom: 'Épilepsie avec crises généralisées',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Enfant de 3 à 18 ans, zone d’hyperendémie',
        fonctionnels: '- Crises tonico-cloniques',
        generaux: '',
        physiques: '- Signes cutanés d’onchocercose',
        paraclinique: '- Microfilaires',
        etiologies: '- Onchocerca volvulus',
        syndromes: ['syndrome-convulsif'],
      },
      {
        nom: 'Syndrome du hochement de tête',
        type: 'etiologique',
        description: 'Nodding syndrome.',
        terrain: '- Enfant de 5 à 15 ans',
        fonctionnels: '- Hochements de tête aux repas ou au froid',
        generaux: '- Retard de croissance',
        physiques: '- Déclin cognitif',
        paraclinique: '- EEG anormal',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Syndrome de Nakalanga',
        type: 'terrain',
        description: 'Nanisme et retard pubertaire.',
        terrain: '- Adolescent',
        fonctionnels: '',
        generaux: '- Petite taille, retard pubertaire',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
