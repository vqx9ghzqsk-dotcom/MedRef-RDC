'use strict';

/**
 * Lot 14 (hématologie et oncologie pédiatriques) — crise vaso-occlusive de l'enfant
 * drépanocytaire, séquestration splénique aiguë, AVC de l'enfant drépanocytaire, infections
 * de l'enfant drépanocytaire, lymphome de Burkitt, transfusion chez l'enfant.
 * Rédigé par IA (OMS, NHLBI, SIOP Afrique, programmes nationaux) : à valider.
 */

const HOP = { departement: 'pediatrie', specialite: 'Hématologie et oncologie pédiatriques' };

module.exports = [
  // =================================================================== CVO enfant
  {
    ...HOP,
    slug: 'crise-vaso-occlusive-enfant-drepanocytaire',
    nom: 'Crise vaso-occlusive de l’enfant drépanocytaire',
    resume:
      'Douleur aiguë de l’enfant SS : dactylite du nourrisson (mains-pieds), douleurs osseuses ; antalgie rapide par paliers (paracétamol, ibuprofène, morphine orale ou IV), hydratation, recherche d’infection et de complications.',
    definition:
      'Épisode douloureux aigu par occlusion microvasculaire chez l’enfant drépanocytaire ; chez le nourrisson de 6 mois à 2 ans, il se manifeste souvent par un syndrome pieds-mains (dactylite).',
    physiopathologie:
      '## Mécanismes\n- Falciformation, adhésion, vaso-occlusion, ischémie osseuse et médullaire\n- Facteurs : fièvre, infection, déshydratation, froid, stress',
    diagnostic:
      '## Clinique\n- **Dactylite** (nourrisson) : gonflement douloureux du dos des mains et des pieds\n- Douleurs des membres, du dos, de l’abdomen, du thorax\n- Évaluer la douleur avec une échelle adaptée à l’âge\n\n## Rechercher les signes de gravité\n- Fièvre ≥ 38,5 °C (infection, ostéomyélite), pâleur et grosse rate (séquestration), toux et douleur thoracique (syndrome thoracique aigu), déficit neurologique (AVC), priapisme',
    examens: [
      ['premiere_intention', 'nfs', 'Hb comparée à l’Hb de base.'],
      ['premiere_intention', 'reticulocytes', 'Érythroblastopénie.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme déclenchant.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Syndrome thoracique aigu.'],
      ['gravite', 'hemocultures', 'Fièvre.'],
      ['gravite', 'radiographie-thoracique', 'Signes respiratoires.'],
      ['confirmation', 'electrophorese-hb', 'Diagnostic de la drépanocytose si inconnu.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Ostéomyélite', 'Fièvre persistante, douleur localisée, gonflement, Salmonella.'],
      ['Arthrite septique', 'Articulation chaude, ponction.'],
      ['appendicite-aigue', 'Douleur abdominale localisée.'],
      ['rhumatisme-articulaire-aigu-enfant', 'Polyarthrite migratrice, ASLO.'],
    ],
    etiologies:
      '## Facteurs déclenchants\n- Infections (paludisme, infections respiratoires), fièvre\n- Déshydratation, froid, baignade en eau froide, effort intense',
    principes: [
      [
        'Antalgie par paliers',
        'Soulager rapidement.',
        '- Douleur légère à modérée : **paracétamol** 15 mg/kg toutes les 6 h + **ibuprofène** 10 mg/kg toutes les 8 h (si pas de déshydratation ni d’atteinte rénale)\n- Douleur sévère : **morphine** orale 0,2–0,4 mg/kg toutes les 4 h ou IV titrée (0,1 mg/kg puis 0,025 mg/kg toutes les 5 min)\n- Réévaluation régulière, surveillance de la sédation et de la respiration',
      ],
      [
        'Hydratation et mesures associées',
        'Limiter la falciformation.',
        '- Hydratation orale abondante ou perfusion (1,5 fois les besoins d’entretien, sans surcharge)\n- Réchauffement, **spirométrie incitative** (souffler dans une bouteille) en cas de douleur thoracique\n- Oxygène si SpO2 < 95 %',
      ],
      [
        'Infections et traitement de fond',
        'Prévenir les complications.',
        '- Fièvre : antibiotiques (**ceftriaxone**) après hémocultures, TDR\n- **Hydroxycarbamide** dès 9 mois (recommandé pour tous les enfants SS selon les directives actuelles)\n- Acide folique, prophylaxie par pénicilline, vaccinations',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Toutes les crises'],
      ['ibuprofene', 'premiere', 'Association'],
      ['morphine', 'premiere', 'Douleur sévère'],
      ['ceftriaxone', 'adjuvant', 'Fièvre'],
      ['hydroxycarbamide', 'premiere', 'Traitement de fond'],
      ['acide-folique', 'adjuvant', 'Traitement de fond'],
      ['phenoxymethylpenicilline', 'adjuvant', 'Prophylaxie anti-infectieuse'],
    ],
    complications: [
      {
        nom: 'Syndrome thoracique aigu',
        fiche: 'syndrome-thoracique-aigu-drepanocytaire',
        description: 'Complication pulmonaire.',
        traitement: '- Oxygène, antibiotiques, transfusion',
        clinique: '- Douleur thoracique, toux, fièvre',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Ostéomyélite',
        description: 'Salmonella, staphylocoque.',
        traitement: '- Antibiotiques prolongés',
        clinique: '- Fièvre, douleur localisée persistante',
        paraclinique: '- Radiographie, échographie',
      },
      {
        nom: 'Priapisme',
        description: 'Urgence urologique.',
        traitement: '- Hydratation, antalgie, drainage si > 4 h',
        clinique: '- Érection douloureuse prolongée',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Crise résolutive en quelques jours ; la fréquence diminue sous hydroxycarbamide',
    urgences: ['crise-drepanocytaire-grave'],
    symptomes: [
      ['Douleurs osseuses', 'tres_frequent'],
      ['Gonflement articulaire', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Ictère', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
    ],
    sources: [
      'Evidence-Based Management of Sickle Cell Disease: Expert Panel Report',
      'American Society of Hematology 2020 guidelines for sickle cell disease: management of acute and chronic pain',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Paracétamol, ibuprofène, hydratation, TDR, acide folique, pénicilline',
        '- Douleur non contrôlée, fièvre, signes respiratoires, pâleur',
      ],
      hgr: [
        '- Morphine, perfusion, hydroxycarbamide, prise en charge des complications',
        '- Échange transfusionnel',
      ],
      tert: ['- Centre de la drépanocytose', ''],
    },
    alertes: {
      'crise-drepanocytaire-grave':
        'Enfant drépanocytaire avec douleur non soulagée, fièvre, pâleur intense, détresse respiratoire ou déficit',
    },
    formes: [
      {
        nom: 'Syndrome pieds-mains (dactylite)',
        type: 'terrain',
        description: 'Première manifestation du nourrisson.',
        terrain: '- Nourrisson SS de 6 mois à 2 ans',
        fonctionnels: '- Pleurs, refus d’utiliser les mains',
        generaux: '- Fébricule',
        physiques: '- Gonflement douloureux du dos des mains et des pieds',
        paraclinique: '- Électrophorèse SS',
        etiologies: '- Infarctus osseux',
        syndromes: ['syndrome-vaso-occlusif'],
      },
      {
        nom: 'Crise osseuse de l’enfant',
        type: 'commune',
        description: 'Douleurs des os longs.',
        terrain: '- Enfant SS',
        fonctionnels: '- Douleurs des membres, du dos',
        generaux: '- Fièvre modérée',
        physiques: '- Sensibilité osseuse, subictère',
        paraclinique: '- Hb stable',
        etiologies: '- Froid, infection',
        syndromes: ['syndrome-vaso-occlusif', 'syndrome-hemolytique'],
        examens: [['nfs', 'Hb de base']],
      },
    ],
  },

  // =================================================================== Séquestration splénique
  {
    ...HOP,
    slug: 'sequestration-splenique-aigue',
    nom: 'Séquestration splénique aiguë',
    resume:
      'Urgence vitale du jeune enfant drépanocytaire : augmentation brutale de la rate, pâleur intense, chute de l’Hb ≥ 2 g/dL, choc ; transfusion prudente (5–10 mL/kg) en urgence ; apprendre aux parents à palper la rate.',
    definition:
      'Piégeage brutal des globules rouges dans la rate chez l’enfant drépanocytaire (surtout SS de 6 mois à 5 ans), avec augmentation rapide du volume de la rate et baisse de l’Hb d’au moins 2 g/dL par rapport à la valeur de base.',
    physiopathologie:
      '## Mécanismes\n- Obstruction de la circulation splénique, accumulation massive du sang dans la rate\n- Hypovolémie et anémie aiguë : choc\n- Lors de la transfusion, la rate relargue des globules rouges : risque d’hyperviscosité',
    diagnostic:
      '## Clinique\n- **Pâleur** brutale, fatigue, irritabilité, douleur ou ballonnement abdominal\n- **Splénomégalie** rapidement croissante\n- Tachycardie, polypnée, **choc** dans les formes sévères\n\n## Biologie\n- **Hb ≥ 2 g/dL sous l’Hb de base**, réticulocytes élevés, thrombopénie',
    examens: [
      ['confirmation', 'nfs', 'Chute de l’Hb, thrombopénie.'],
      ['premiere_intention', 'reticulocytes', 'Élevés (≠ érythroblastopénie).'],
      ['pretherapeutique', 'groupage-rai', 'Transfusion urgente.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme associé.'],
      ['gravite', 'hemocultures', 'Infection.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      [
        'Érythroblastopénie aiguë (parvovirus B19)',
        'Anémie avec réticulocytes effondrés, rate non augmentée.',
      ],
      ['paludisme-grave-enfant', 'Anémie palustre, TDR positif.'],
      ['Crise hyperhémolytique', 'Ictère intense, réticulocytes élevés, rate stable.'],
    ],
    etiologies:
      '## Terrain\n- Drépanocytose SS de 6 mois à 5 ans ; plus tardive dans les formes SC et S-bêta-thalassémie\n- Facteurs : infection (paludisme), fièvre',
    principes: [
      [
        'Urgence',
        'Restaurer la volémie.',
        '- **Transfusion** de culot globulaire en urgence, **volumes prudents** (5 à 10 mL/kg), objectif Hb ≤ 8 g/dL (relargage splénique)\n- Remplissage si choc en attendant le sang\n- Oxygène, surveillance de la taille de la rate et de l’Hb',
      ],
      [
        'Traitements associés',
        'Traiter la cause.',
        '- Antibiotiques si fièvre, antipaludique si TDR positif',
      ],
      [
        'Prévention des récidives',
        'Éviter le décès.',
        '- **Éducation des parents à la palpation de la rate** et à reconnaître la pâleur\n- Splénectomie après 2 épisodes (après 2 ans) ou programme transfusionnel\n- Vaccinations (pneumocoque, méningocoque, Hib), pénicilline prophylactique',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage en attendant la transfusion'],
      ['oxygene', 'premiere', 'Choc, détresse'],
      ['ceftriaxone', 'adjuvant', 'Fièvre'],
      ['phenoxymethylpenicilline', 'adjuvant', 'Prophylaxie'],
      ['vaccin-pneumococcique-conjugue', 'adjuvant', 'Prévention des infections'],
    ],
    complications: [
      {
        nom: 'Choc hypovolémique et décès',
        description: 'Séquestration massive.',
        traitement: '- Transfusion urgente',
        clinique: '- Pâleur extrême, pouls filant',
        paraclinique: '- Hb',
      },
      {
        nom: 'Récidive',
        description: 'Environ 50 % des cas.',
        traitement: '- Splénectomie, transfusions',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Surcharge et hyperviscosité',
        fiche: 'transfusion-chez-l-enfant',
        description: 'Transfusion trop abondante.',
        traitement: '- Volumes prudents',
        clinique: '- Hypertension, détresse',
        paraclinique: '- Hb',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée sans transfusion rapide ; l’éducation des parents réduit les décès',
    urgences: ['crise-drepanocytaire-grave'],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Splénomégalie', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Hypotension', 'occasionnel'],
      ['Tachypnée', 'frequent'],
    ],
    sources: [
      'Evidence-Based Management of Sickle Cell Disease: Expert Panel Report',
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Reconnaître (pâleur, grosse rate), remplissage, transfert immédiat ; éducation des parents',
        '- Toute suspicion',
      ],
      hgr: ['- Transfusion urgente, surveillance', '- Splénectomie'],
      tert: ['- Chirurgie pédiatrique, programme transfusionnel', ''],
    },
    alertes: {
      'crise-drepanocytaire-grave':
        'Jeune enfant drépanocytaire subitement très pâle avec un ventre ou une rate qui grossit',
    },
    formes: [
      {
        nom: 'Séquestration splénique aiguë majeure',
        type: 'gravite',
        description: 'Choc anémique.',
        terrain: '- Nourrisson SS',
        fonctionnels: '- Irritabilité, refus de manger',
        generaux: '- Pâleur extrême, tachycardie',
        physiques: '- Rate très augmentée, choc',
        paraclinique: '- Hb effondrée, thrombopénie',
        etiologies: '- Drépanocytose',
        syndromes: ['syndrome-anemique', 'syndrome-de-choc'],
        examens: [['nfs', 'Chute de l’Hb']],
      },
      {
        nom: 'Séquestration mineure',
        type: 'commune',
        description: 'Augmentation modérée de la rate.',
        terrain: '- Enfant SC ou SS',
        fonctionnels: '- Gêne abdominale',
        generaux: '- Pâleur',
        physiques: '- Rate augmentée',
        paraclinique: '- Baisse modérée de l’Hb',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== AVC drépanocytaire
  {
    ...HOP,
    slug: 'avc-enfant-drepanocytaire',
    nom: 'AVC de l’enfant drépanocytaire',
    resume:
      'Complication grave (≈ 10 % des enfants SS sans dépistage) : déficit brutal, convulsions, troubles du langage ; échange transfusionnel ou transfusion en urgence ; prévention par Doppler transcrânien annuel et hydroxycarbamide ou transfusions.',
    definition:
      'Accident vasculaire cérébral, le plus souvent ischémique, survenant chez l’enfant drépanocytaire par vasculopathie des grosses artères cérébrales.',
    physiopathologie:
      '## Mécanismes\n- Atteinte de la paroi des artères cérébrales (carotide interne, cérébrale moyenne) : sténoses\n- Accélération du flux (vitesses élevées au Doppler transcrânien)\n- Infarctus cérébraux, parfois silencieux ; hémorragies plus rares (adolescent)',
    diagnostic:
      '## Clinique\n- **Hémiparésie**, aphasie, troubles visuels, convulsions, céphalées, troubles de conscience\n- Parfois troubles cognitifs et scolaires (infarctus silencieux)\n\n## Examens\n- Scanner ou IRM cérébrale\n- Hb, HbS si disponible\n\n## Dépistage\n- **Doppler transcrânien** annuel de 2 à 16 ans : vitesse ≥ 200 cm/s = risque élevé',
    examens: [
      ['confirmation', 'scanner-cerebral', 'Infarctus, hémorragie.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Infarctus silencieux, vasculopathie.'],
      ['premiere_intention', 'nfs', 'Hb.'],
      ['premiere_intention', 'glycemie', 'Éliminer une hypoglycémie.'],
      ['pretherapeutique', 'groupage-rai', 'Transfusion ou échange.'],
      ['suivi', 'doppler-transcranien', 'Dépistage annuel du risque d’AVC.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['meningite-bacterienne-enfant', 'Fièvre, syndrome méningé.'],
      ['paludisme-grave-enfant', 'Coma fébrile, TDR positif.'],
      ['hypoglycemie-neonatale', 'Glycémie basse.'],
      ['Abcès cérébral', 'Fièvre, déficit progressif.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Drépanocytose SS, vitesses élevées au Doppler transcrânien\n- Anémie sévère, syndrome thoracique aigu récent, absence de traitement de fond',
    principes: [
      [
        'Traitement urgent',
        'Limiter l’infarctus.',
        '- **Échange transfusionnel** (objectif HbS < 30 %) ; à défaut, **transfusion simple** pour Hb ≤ 10 g/dL\n- Oxygène, hydratation, traitement des convulsions (**diazépam**, phénobarbital)\n- Pas de thrombolyse chez l’enfant drépanocytaire',
      ],
      [
        'Prévention secondaire',
        'Éviter la récidive (60–90 % sans traitement).',
        '- Programme transfusionnel chronique ou **hydroxycarbamide** à dose maximale tolérée si transfusions impossibles\n- Greffe de moelle (centre spécialisé)',
      ],
      [
        'Prévention primaire',
        'Dépister les enfants à risque.',
        '- Doppler transcrânien annuel de 2 à 16 ans ; vitesses élevées : hydroxycarbamide ou transfusions',
      ],
      ['Rééducation', 'Réduire le handicap.', '- Kinésithérapie, orthophonie, soutien scolaire'],
    ],
    molecules: [
      ['hydroxycarbamide', 'premiere', 'Prévention primaire et secondaire'],
      ['diazepam', 'premiere', 'Convulsions'],
      ['phenobarbital', 'alternative', 'Convulsions'],
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['acide-folique', 'adjuvant', 'Traitement de fond'],
    ],
    complications: [
      {
        nom: 'Séquelles motrices et cognitives',
        description: 'Hémiplégie, troubles scolaires.',
        traitement: '- Rééducation',
        clinique: '- Déficit',
        paraclinique: '',
      },
      {
        nom: 'Récidive',
        fiche: 'avc',
        description: 'Sans prévention secondaire.',
        traitement: '- Transfusions chroniques, hydroxycarbamide',
        clinique: '- Nouveau déficit',
        paraclinique: '- Imagerie',
      },
      {
        nom: 'Surcharge en fer',
        fiche: 'transfusion-chez-l-enfant',
        description: 'Transfusions répétées.',
        traitement: '- Chélation',
        clinique: '',
        paraclinique: '- Ferritine',
      },
    ],
    evolution: '## Pronostic\n- Séquelles fréquentes ; récidive très fréquente sans prévention',
    urgences: ['avc-aigu', 'crise-drepanocytaire-grave'],
    symptomes: [
      ['Déficit moteur', 'tres_frequent'],
      ['Troubles du langage', 'frequent'],
      ['Convulsions', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'Evidence-Based Management of Sickle Cell Disease: Expert Panel Report',
      'ASH — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Reconnaître le déficit, glycémie, diazépam, transfert immédiat', '- Tout déficit neurologique'],
      hgr: ['- Transfusion, scanner, hydroxycarbamide', '- Échange transfusionnel'],
      tert: ['- Échange, Doppler transcrânien, neurologie pédiatrique', ''],
    },
    alertes: {
      'avc-aigu': 'Enfant drépanocytaire avec faiblesse d’un côté, trouble de la parole ou convulsions',
      'crise-drepanocytaire-grave': 'Tout signe neurologique chez un enfant drépanocytaire',
    },
    formes: [
      {
        nom: 'AVC ischémique',
        type: 'commune',
        description: 'Déficit brutal.',
        terrain: '- Enfant SS de 2 à 10 ans',
        fonctionnels: '- Faiblesse d’un côté, aphasie',
        generaux: '',
        physiques: '- Hémiparésie',
        paraclinique: '- Infarctus au scanner',
        etiologies: '- Vasculopathie cérébrale',
        syndromes: ['syndrome-pyramidal'],
        examens: [['scanner-cerebral', 'Diagnostic']],
      },
      {
        nom: 'Infarctus silencieux',
        type: 'evolutive',
        description: 'Sans déficit évident.',
        terrain: '- Enfant SS d’âge scolaire',
        fonctionnels: '- Difficultés scolaires',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- Lésions à l’IRM',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Infections drépanocytaires
  {
    ...HOP,
    slug: 'infections-enfant-drepanocytaire',
    nom: 'Infections de l’enfant drépanocytaire',
    resume:
      'Asplénie fonctionnelle dès 6 mois : risque de septicémie foudroyante à pneumocoque et d’ostéomyélite à Salmonella ; toute fièvre ≥ 38,5 °C est une urgence (ceftriaxone après hémoculture) ; prévention par pénicilline V, vaccins, moustiquaire.',
    definition:
      'Infections bactériennes graves favorisées par l’asplénie fonctionnelle de l’enfant drépanocytaire : bactériémies et méningites (pneumocoque, Haemophilus, Salmonella), ostéomyélites, pneumonies, paludisme grave.',
    physiopathologie:
      '## Mécanismes\n- Infarctus spléniques répétés : perte de la fonction de filtre de la rate (asplénie fonctionnelle) dès les premiers mois\n- Sensibilité aux germes encapsulés\n- Os ischémiques : terrain d’ostéomyélite à Salmonella',
    diagnostic:
      '## Toute fièvre ≥ 38,5 °C = urgence\n- Rechercher : signes de choc, méningite, pneumonie, douleur osseuse localisée\n- Paludisme (TDR)\n\n## Ostéomyélite\n- Fièvre, douleur et gonflement localisés persistants, à distinguer d’une crise vaso-occlusive',
    examens: [
      ['premiere_intention', 'hemocultures', 'Avant les antibiotiques.'],
      ['premiere_intention', 'tdr-paludisme', 'Systématique.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose, Hb.'],
      ['premiere_intention', 'crp', 'Infection.'],
      ['gravite', 'lcr', 'Signes méningés.'],
      ['gravite', 'radiographie-thoracique', 'Pneumonie, syndrome thoracique aigu.'],
      ['etiologique', 'radiographie-osseuse', 'Ostéomyélite.'],
    ],
    scores: [],
    differentiels: [
      ['crise-vaso-occlusive-enfant-drepanocytaire', 'Douleurs multiples, fièvre modérée.'],
      ['paludisme-grave-enfant', 'TDR positif.'],
      ['syndrome-thoracique-aigu-drepanocytaire', 'Signes respiratoires et opacité.'],
    ],
    etiologies:
      '## Germes\n- *Streptococcus pneumoniae*, *Haemophilus influenzae* b, méningocoque\n- *Salmonella* non typhiques (ostéomyélites, bactériémies), *S. aureus*\n- *Plasmodium falciparum*',
    principes: [
      [
        'Fièvre : antibiothérapie urgente',
        'Prévenir le choc septique.',
        '- **Ceftriaxone** 50–100 mg/kg IV/IM après hémoculture, sans délai\n- Hospitalisation si < 1 an, fièvre > 39,5 °C, signes de gravité ou suivi impossible\n- Ostéomyélite : ceftriaxone + **cloxacilline**, 4 à 6 semaines',
      ],
      [
        'Prévention',
        'Réduire la mortalité.',
        '- **Pénicilline V** orale de 2 mois à 5 ans (125 mg 2 fois par jour avant 3 ans, 250 mg 2 fois par jour après ; ou benzathine pénicilline mensuelle)\n- **Vaccins** : pneumocoque conjugué (+ polysaccharidique 23 à 2 ans), Hib, méningocoque, typhoïde conjugué\n- Moustiquaire, chimioprophylaxie antipaludique selon le programme\n- Éducation : consulter immédiatement en cas de fièvre',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Toute fièvre'],
      ['cloxacilline', 'adjuvant', 'Ostéomyélite'],
      ['phenoxymethylpenicilline', 'premiere', 'Prophylaxie de 2 mois à 5 ans'],
      ['benzathine-benzylpenicilline', 'alternative', 'Prophylaxie mensuelle'],
      ['vaccin-pneumococcique-conjugue', 'premiere', 'Prévention'],
      ['vaccin-haemophilus-influenzae-b', 'premiere', 'Prévention'],
      ['artesunate', 'adjuvant', 'Paludisme grave associé'],
    ],
    complications: [
      {
        nom: 'Septicémie et méningite à pneumocoque',
        fiche: 'meningite-bacterienne-enfant',
        description: 'Évolution fulminante.',
        traitement: '- Ceftriaxone, réanimation',
        clinique: '- Choc, purpura',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Ostéomyélite chronique',
        description: 'Salmonella.',
        traitement: '- Antibiotiques prolongés, chirurgie',
        clinique: '- Fistule, déformation',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Syndrome thoracique aigu',
        fiche: 'syndrome-thoracique-aigu-drepanocytaire',
        description: 'Pneumonie.',
        traitement: '- Antibiotiques, transfusion',
        clinique: '- Toux, douleur thoracique',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- La pénicilline prophylactique et la vaccination réduisent de plus de 80 % les infections à pneumocoque',
    urgences: ['crise-drepanocytaire-grave', 'choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Douleurs osseuses', 'frequent'],
      ['Toux', 'occasionnel'],
      ['Pâleur', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'Evidence-Based Management of Sickle Cell Disease: Expert Panel Report',
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Pénicilline V, vaccins, première dose de ceftriaxone devant toute fièvre, transfert',
        '- Fièvre ≥ 38,5 °C chez l’enfant < 1 an ou avec signes de gravité',
      ],
      hgr: ['- Hémocultures, antibiotiques IV, prise en charge des complications', ''],
      tert: ['- Centre de la drépanocytose', ''],
    },
    alertes: {
      'choc-septique': 'Enfant drépanocytaire fébrile avec extrémités froides, léthargie ou purpura',
      'crise-drepanocytaire-grave': 'Toute fièvre ≥ 38,5 °C chez un enfant drépanocytaire',
    },
    formes: [
      {
        nom: 'Fièvre de l’enfant drépanocytaire',
        type: 'commune',
        description: 'Bactériémie possible.',
        terrain: '- Enfant SS < 5 ans',
        fonctionnels: '- Abattement',
        generaux: '- Fièvre ≥ 38,5 °C',
        physiques: '- Examen à la recherche d’un foyer',
        paraclinique: '- Hémocultures',
        etiologies: '- Pneumocoque, Salmonella',
        syndromes: ['syndrome-infectieux'],
        examens: [['hemocultures', 'Germe']],
      },
      {
        nom: 'Ostéomyélite à Salmonella',
        type: 'etiologique',
        description: 'Infection osseuse.',
        terrain: '- Enfant SS',
        fonctionnels: '- Douleur localisée persistante',
        generaux: '- Fièvre prolongée',
        physiques: '- Gonflement, chaleur locale',
        paraclinique: '- Hémocultures positives, lésions radiologiques',
        etiologies: '- Salmonella',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Burkitt
  {
    ...HOP,
    slug: 'lymphome-de-burkitt',
    nom: 'Lymphome de Burkitt',
    resume:
      'Cancer le plus fréquent de l’enfant en Afrique équatoriale (forme endémique, liée à l’EBV et au paludisme) : tumeur de la mâchoire ou abdominale à croissance très rapide ; biopsie, prévention du syndrome de lyse, cyclophosphamide ; guérison possible.',
    definition:
      'Lymphome non hodgkinien B de haut grade, à prolifération extrêmement rapide ; forme endémique africaine chez l’enfant de 4 à 10 ans, associée au virus d’Epstein-Barr et au paludisme holo-endémique.',
    physiopathologie:
      '## Mécanismes\n- Translocation impliquant l’oncogène MYC\n- EBV et stimulation chronique par le paludisme\n- Temps de doublement de 24 à 48 h : syndrome de lyse tumorale spontané ou au début du traitement',
    diagnostic:
      '## Clinique\n- **Tumeur de la mâchoire** ou de l’orbite (exophtalmie), déchaussement dentaire\n- **Masse abdominale** (reins, ovaires, ganglions), ascite\n- Paraplégie (atteinte épidurale), atteinte du système nerveux central\n- Croissance visible en quelques jours\n\n## Confirmation\n- **Cytoponction ou biopsie** (cytologie, histologie)\n- Bilan d’extension : échographie abdominale, radiographie, LCR, moelle\n- Bilan de lyse : créatinine, acide urique, potassium',
    examens: [
      ['confirmation', 'biopsie-histologie', 'Diagnostic (ou cytoponction).'],
      ['premiere_intention', 'echographie-abdominale', 'Extension abdominale.'],
      ['premiere_intention', 'uricemie', 'Syndrome de lyse.'],
      ['premiere_intention', 'creatinine', 'Syndrome de lyse.'],
      ['premiere_intention', 'ionogramme', 'Hyperkaliémie.'],
      ['premiere_intention', 'ldh', 'Masse tumorale.'],
      ['premiere_intention', 'nfs', 'Envahissement médullaire.'],
      ['gravite', 'lcr', 'Atteinte méningée.'],
      ['premiere_intention', 'tdr-vih', 'Terrain.'],
    ],
    scores: [],
    differentiels: [
      ['Abcès dentaire, ostéomyélite de la mâchoire', 'Fièvre, douleur, pus.'],
      ['Néphroblastome', 'Masse rénale de l’enfant plus jeune, croissance plus lente.'],
      ['tuberculose-enfant', 'Adénopathies, ascite tuberculeuse.'],
      ['Rétinoblastome', 'Leucocorie chez le jeune enfant.'],
    ],
    etiologies:
      '## Facteurs\n- Virus d’Epstein-Barr, paludisme holo-endémique (« ceinture du lymphome » africaine)\n- VIH (forme associée)',
    principes: [
      [
        'Prévention du syndrome de lyse',
        'Éviter l’insuffisance rénale.',
        '- **Hyperhydratation** (3 L/m²/j), **allopurinol**\n- Surveillance de la diurèse, du potassium, de la créatinine',
      ],
      [
        'Chimiothérapie',
        'Guérir.',
        '- Protocole africain à base de **cyclophosphamide** (± vincristine, méthotrexate, prednisolone, chimiothérapie intrathécale) selon le centre (réseau GFAOP)\n- Soins de support : transfusion, antibiotiques, nutrition, antalgiques\n- Ne pas retarder la mise en route',
      ],
      [
        'Accompagnement',
        'Assurer la réussite du traitement.',
        '- Prise en charge des frais, soutien de la famille, éviter les abandons de traitement\n- Soins palliatifs en cas d’échec',
      ],
    ],
    molecules: [
      ['cyclophosphamide', 'premiere', 'Chimiothérapie de base'],
      ['vincristine', 'alternative', 'Selon le protocole'],
      ['methotrexate', 'alternative', 'Selon le protocole (intrathécal)'],
      ['prednisolone', 'adjuvant', 'Selon le protocole'],
      ['allopurinol', 'premiere', 'Prévention du syndrome de lyse'],
      ['morphine', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Syndrome de lyse tumorale',
        fiche: 'insuffisance-renale-aigue',
        description: 'Destruction tumorale massive.',
        traitement: '- Hydratation, allopurinol, correction de la kaliémie, dialyse',
        clinique: '- Oligurie, arythmies',
        paraclinique: '- Potassium, créatinine, acide urique',
      },
      {
        nom: 'Compression médullaire',
        description: 'Atteinte épidurale.',
        traitement: '- Chimiothérapie urgente',
        clinique: '- Paraplégie',
        paraclinique: '- Imagerie',
      },
      {
        nom: 'Infections et neutropénie fébrile',
        fiche: 'sepsis-enfant',
        description: 'Chimiothérapie.',
        traitement: '- Antibiotiques larges',
        clinique: '- Fièvre',
        paraclinique: '- NFS',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison dans 50 à 70 % des cas avec les protocoles africains si le traitement est mené à terme',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Tuméfaction faciale', 'tres_frequent'],
      ['Masse abdominale', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Distension abdominale', 'frequent'],
      ['Paralysie flasque', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
      'ASCO — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Repérer toute tuméfaction à croissance rapide, transfert sans délai',
        '- Toute suspicion de cancer',
      ],
      hgr: ['- Cytoponction, hydratation, allopurinol, orientation', '- Chimiothérapie'],
      tert: ['- Unité d’oncologie pédiatrique', ''],
    },
    alertes: {
      'hyperkaliemie-menacante': 'Enfant sous chimiothérapie pour Burkitt avec urines rares ou faiblesse',
    },
    formes: [
      {
        nom: 'Forme maxillo-faciale',
        type: 'commune',
        description: 'Tumeur de la mâchoire.',
        terrain: '- Enfant de 4 à 8 ans',
        fonctionnels: '- Déformation du visage, dents mobiles',
        generaux: '- Amaigrissement',
        physiques: '- Tuméfaction ferme de la mâchoire, exophtalmie',
        paraclinique: '- Cytologie typique',
        etiologies: '- EBV, paludisme',
        syndromes: [],
        examens: [['biopsie-histologie', 'Diagnostic']],
      },
      {
        nom: 'Forme abdominale',
        type: 'topographique',
        description: 'Masse abdominale volumineuse.',
        terrain: '- Enfant plus âgé',
        fonctionnels: '- Ballonnement, douleurs',
        generaux: '- Fièvre, amaigrissement',
        physiques: '- Masse, ascite',
        paraclinique: '- LDH très élevées, risque de lyse',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Transfusion enfant
  {
    ...HOP,
    slug: 'transfusion-chez-l-enfant',
    nom: 'Transfusion sanguine chez l’enfant',
    resume:
      'Indications strictes (Hb < 4 g/dL, ou < 6 g/dL avec gravité ; hémorragie ; séquestration) ; volume selon le poids (culot 10–15 mL/kg, sang total 20 mL/kg) en 3–4 h ; sécurité et surveillance ; furosémide si surcharge.',
    definition:
      'Administration de produits sanguins à l’enfant, dont l’indication principale en RDC est l’anémie sévère (paludisme, drépanocytose, malnutrition).',
    physiopathologie:
      '## Enjeux\n- Volume sanguin de l’enfant : 80 mL/kg (85 chez le nouveau-né)\n- Risques : surcharge (anémie chronique, malnutrition), réactions, infections transmissibles, erreurs d’identification\n- Pénurie de sang : indications à respecter strictement',
    diagnostic:
      '## Indications (OMS)\n- **Hb < 4 g/dL** (ou hématocrite < 12 %)\n- **Hb 4–6 g/dL** avec signes de gravité : détresse respiratoire (acidose), choc, insuffisance cardiaque, troubles de conscience, parasitémie très élevée\n- Hémorragie aiguë avec choc, séquestration splénique, AVC drépanocytaire, syndrome thoracique aigu\n- Malnutrition sévère : Hb < 4 g/dL ou < 6 g/dL avec détresse, volume réduit\n\n## Sécurité\n- Groupe, compatibilité, produit testé, contrôle ultime au lit, surveillance (constantes à 15 min puis toutes les heures)',
    examens: [
      ['pretherapeutique', 'groupage-rai', 'Groupe, compatibilité.'],
      ['pretherapeutique', 'nfs', 'Hb : indication et contrôle.'],
      ['gravite', 'test-de-coombs-direct', 'Réaction hémolytique.'],
      ['etiologique', 'tdr-paludisme', 'Cause de l’anémie.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['anemie-enfant', 'Anémie bien tolérée : fer et traitement de la cause sans transfusion.'],
    ],
    etiologies:
      '## Causes d’anémie nécessitant une transfusion\n- Paludisme (première cause), drépanocytose (séquestration, érythroblastopénie)\n- Hémorragies (traumatisme, chirurgie), malnutrition, leucémies, VIH',
    principes: [
      [
        'Volume et débit',
        'Corriger sans surcharger.',
        '- **Culot globulaire 10–15 mL/kg** ou **sang total 20 mL/kg** en 3 à 4 h\n- Malnutrition sévère ou insuffisance cardiaque : culot 10 mL/kg lentement avec **furosémide** 1 mg/kg\n- Choc hémorragique : volumes plus rapides',
      ],
      [
        'Surveillance',
        'Repérer les réactions.',
        '- Température, pouls, FR, PA avant, à 15 min puis toutes les heures\n- Réaction : **arrêter la transfusion**, prévenir la banque de sang (voir *Transfusion sanguine et réactions transfusionnelles*)\n- Hb de contrôle ; traitement de la cause',
      ],
      [
        'Après la transfusion',
        'Prévenir la récidive.',
        '- Fer et acide folique (sauf drépanocytose avec surcharge), traitement du paludisme, moustiquaire\n- Transfusions répétées : surveillance de la ferritine (chélation)',
      ],
    ],
    molecules: [
      ['furosemide', 'premiere', 'Prévention de la surcharge'],
      ['paracetamol', 'adjuvant', 'Réaction fébrile'],
      ['chlorphenamine', 'adjuvant', 'Réaction allergique'],
      ['adrenaline-epinephrine', 'adjuvant', 'Anaphylaxie'],
      ['acide-folique', 'adjuvant', 'Après transfusion'],
    ],
    complications: [
      {
        nom: 'Surcharge circulatoire',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Volume ou débit excessif.',
        traitement: '- Arrêt, furosémide, oxygène',
        clinique: '- Polypnée, hépatomégalie, crépitants',
        paraclinique: '',
      },
      {
        nom: 'Réactions transfusionnelles',
        fiche: 'transfusion-sanguine-et-reactions-transfusionnelles',
        description: 'Hémolyse, allergie, fièvre.',
        traitement: '- Arrêt, traitement adapté',
        clinique: '- Fièvre, urticaire, choc',
        paraclinique: '- Coombs',
      },
      {
        nom: 'Infections transmises',
        fiche: 'infection-vih-enfant',
        description: 'Dépistage insuffisant.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '- Sérologies',
      },
    ],
    evolution:
      '## Pronostic\n- La transfusion sauve des vies dans l’anémie sévère ; elle doit rester réservée aux indications reconnues',
    urgences: ['paludisme-grave-urgence'],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Tachypnée', 'frequent'],
      ['Asthénie', 'frequent'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
      'WHO guidelines for malaria',
    ],
    niveaux: {
      cs: ['- Repérer l’anémie sévère, transfert vers une structure qui transfuse', '- Pâleur sévère'],
      hgr: ['- Transfusion sécurisée, surveillance, hémovigilance', ''],
      tert: ['- Banque de sang, aphérèse', ''],
    },
    alertes: {
      'paludisme-grave-urgence': 'Enfant très pâle avec respiration rapide ou troubles de conscience',
    },
    formes: [
      {
        nom: 'Transfusion pour anémie palustre sévère',
        type: 'commune',
        description: 'Indication la plus fréquente.',
        terrain: '- Enfant < 5 ans',
        fonctionnels: '- Essoufflement',
        generaux: '- Pâleur extrême',
        physiques: '- Polypnée, tachycardie',
        paraclinique: '- Hb < 5 g/dL',
        etiologies: '- Paludisme',
        syndromes: ['syndrome-anemique'],
        examens: [['nfs', 'Indication']],
      },
    ],
  },
];
