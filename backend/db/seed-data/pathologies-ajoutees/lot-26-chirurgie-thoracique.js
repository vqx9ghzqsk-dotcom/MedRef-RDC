'use strict';

/**
 * Lot 26 (chirurgie thoracique) — traumatisme thoracique, hémothorax, empyème thoracique.
 * Rédigé par IA (ATLS, EAST, BTS, OMS) : à valider.
 */

const THO = { departement: 'chirurgie', specialite: 'Chirurgie thoracique' };

module.exports = [
  // =================================================================== Traumatisme thoracique
  {
    ...THO,
    slug: 'traumatisme-thoracique',
    nom: 'Traumatisme thoracique',
    resume:
      'Traumatisme fermé (accidents de la route, chutes) ou pénétrant (armes blanches, armes à feu) du thorax : rechercher et traiter immédiatement les lésions mortelles (pneumothorax compressif, hémothorax massif, tamponnade, volet costal) ; la plupart se traitent par drainage thoracique, oxygène et analgésie ; thoracotomie pour une minorité.',
    definition:
      'Ensemble des lésions de la paroi thoracique, de la plèvre, des poumons, du cœur et des gros vaisseaux, du diaphragme et de l’œsophage consécutives à un traumatisme fermé ou pénétrant.',
    physiopathologie:
      '## Mécanismes\n- **Fermé** : décélération, compression (accidents de moto, chutes) → fractures de côtes, volet costal, contusion pulmonaire, rupture aortique\n- **Pénétrant** : plaies par arme blanche ou arme à feu → pneumothorax, hémothorax, plaie du cœur\n\n## Lésions immédiatement mortelles\n- Obstruction des voies aériennes, **pneumothorax compressif**, pneumothorax ouvert, **hémothorax massif**, **volet costal** avec contusion, **tamponnade**',
    diagnostic:
      '## Évaluation (ABCDE)\n- **Détresse respiratoire**, cyanose, désaturation, tachycardie, hypotension\n- Inspection : plaie, respiration paradoxale (volet), asymétrie, turgescence jugulaire\n- Palpation : emphysème sous-cutané, crépitation costale\n- Percussion et auscultation : tympanisme (pneumothorax), matité (hémothorax), assourdissement des bruits du cœur (tamponnade)\n- **Pneumothorax compressif** = diagnostic clinique : décompression immédiate sans radiographie\n\n## Examens\n- Radiographie thoracique, échographie (eFAST), ECG, gaz du sang, NFS, groupage\n- Scanner thoracique si disponible et patient stable',
    examens: [
      [
        'premiere_intention',
        'radiographie-thoracique',
        'Pneumothorax, hémothorax, fractures, élargissement du médiastin.',
      ],
      [
        'premiere_intention',
        'echographie-abdominale',
        'eFAST : épanchement pleural, péricardique, péritonéal.',
      ],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxémie.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'nfs', 'Hémorragie.'],
      ['gravite', 'gaz-du-sang', 'Hypoxie, hypercapnie.'],
      ['gravite', 'ecg', 'Contusion myocardique, tamponnade.'],
      ['deuxieme_intention', 'angioscanner-thoracique', 'Lésions aortiques, contusions.'],
    ],
    scores: [],
    differentiels: [
      ['pneumothorax-spontane', 'Absence de traumatisme.'],
      ['Infarctus du myocarde', 'Douleur thoracique, ECG, sans traumatisme.'],
    ],
    etiologies:
      '## Causes\n- Accidents de la circulation (motos), chutes, agressions, violences armées, éboulements miniers',
    principes: [
      [
        'Lésions immédiatement mortelles',
        'Traiter dans l’examen primaire.',
        '- **Pneumothorax compressif** : exsufflation à l’aiguille (2e espace intercostal ou 4e–5e espace sur la ligne axillaire moyenne) puis drain\n- **Plaie soufflante** : pansement occlusif sur 3 côtés puis drain\n- **Hémothorax massif** : drain, transfusion, thoracotomie\n- **Tamponnade** : péricardiocentèse, thoracotomie\n- Oxygène, deux voies veineuses, remplissage prudent',
      ],
      [
        'Drainage thoracique',
        'Évacuer air et sang.',
        '- Drain 28–32 Ch au 5e espace intercostal, ligne axillaire moyenne, bocal sous eau\n- Antibioprophylaxie (**céfazoline**) pour les plaies et drains',
      ],
      [
        'Fractures de côtes et volet',
        'Prévenir l’insuffisance respiratoire.',
        '- **Analgésie** efficace : paracétamol, AINS, **morphine**, bloc intercostal\n- Kinésithérapie respiratoire, oxygène ; ventilation si volet avec détresse',
      ],
      [
        'Indications de thoracotomie',
        'Arrêter l’hémorragie.',
        '- Drainage initial > 1 500 mL ou > 200 mL/h pendant 2–4 heures\n- Tamponnade, plaie du cœur, fuite aérienne massive, lésion du diaphragme ou de l’œsophage',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['morphine', 'premiere', 'Analgésie'],
      ['paracetamol', 'premiere', 'Analgésie'],
      ['lidocaine', 'premiere', 'Anesthésie locale du drain, bloc intercostal'],
      ['bupivacaine', 'alternative', 'Bloc intercostal'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie du drainage'],
      ['acide-tranexamique', 'adjuvant', 'Hémorragie (dans les 3 heures)'],
      ['ringer-lactate', 'adjuvant', 'Remplissage'],
    ],
    complications: [
      {
        nom: 'Hémothorax',
        fiche: 'hemothorax',
        description: 'Saignement intrapleural.',
        traitement: '- Drainage, thoracotomie',
        clinique: '- Matité',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-traumatique',
        description: 'Hémothorax massif, lésion vasculaire.',
        traitement: '- Transfusion, chirurgie',
        clinique: '- Hypotension',
        paraclinique: '- Hémoglobine',
      },
      {
        nom: 'Empyème post-traumatique',
        fiche: 'empyeme-thoracique',
        description: 'Hémothorax caillotté infecté.',
        traitement: '- Drainage, antibiotiques, décortication',
        clinique: '- Fièvre',
        paraclinique: '- Ponction',
      },
      {
        nom: 'Pneumonie et SDRA',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Contusion pulmonaire, douleur.',
        traitement: '- Analgésie, kinésithérapie, antibiotiques',
        clinique: '- Dyspnée, fièvre',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Environ 85 % des traumatismes thoraciques sont traités sans thoracotomie ; mortalité élevée des lésions cardiaques et aortiques',
    urgences: [],
    symptomes: [
      ['Douleur thoracique', 'tres_frequent'],
      ['Dyspnée', 'tres_frequent'],
      ['Lésions traumatiques', 'tres_frequent'],
      ['Hypotension', 'frequent'],
      ['Hémoptysie', 'occasionnel'],
      ['Cyanose', 'occasionnel'],
    ],
    sources: [
      'EAST — recommandations de pratique clinique',
      'ACS TQIP — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Oxygène, exsufflation à l’aiguille, pansement occlusif, transfert',
        '- Détresse respiratoire, choc, plaie thoracique',
      ],
      hgr: [
        '- Drainage thoracique, transfusion, thoracotomie d’urgence',
        '- Lésions vasculaires et cardiaques',
      ],
      tert: ['- Chirurgie thoracique et cardiovasculaire, réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Traumatisme thoracique fermé',
        type: 'commune',
        description: 'Fractures de côtes, contusion.',
        terrain: '- Accident de la route, chute',
        fonctionnels: '- Douleur thoracique, dyspnée',
        generaux: '',
        physiques: '- Crépitation costale, emphysème sous-cutané',
        paraclinique: '- Fractures, épanchements',
        etiologies: '',
        syndromes: ['syndrome-d-epanchement-pleural-liquidien'],
      },
      {
        nom: 'Traumatisme pénétrant',
        type: 'etiologique',
        description: 'Arme blanche ou à feu.',
        terrain: '- Agression, conflit armé',
        fonctionnels: '- Dyspnée',
        generaux: '- Choc',
        physiques: '- Plaie, éventuellement soufflante',
        paraclinique: '- Hémopneumothorax',
        etiologies: '- Violences',
        syndromes: ['syndrome-d-hemorragie-interne'],
      },
      {
        nom: 'Volet costal',
        type: 'gravite',
        description: 'Fractures doubles étagées.',
        terrain: '',
        fonctionnels: '- Détresse respiratoire',
        generaux: '',
        physiques: '- Respiration paradoxale',
        paraclinique: '- Contusion pulmonaire, hypoxie',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Hémothorax
  {
    ...THO,
    slug: 'hemothorax',
    nom: 'Hémothorax',
    resume:
      'Épanchement de sang dans la plèvre, le plus souvent traumatique : matité, dyspnée, choc ; radiographie ou échographie ; drainage thoracique de gros calibre ; thoracotomie si drainage initial > 1 500 mL ou saignement > 200 mL/h ; évacuer l’hémothorax résiduel pour éviter empyème et fibrothorax.',
    definition:
      'Présence de sang dans la cavité pleurale, avec un hématocrite du liquide pleural supérieur à 50 % de celui du sang.',
    physiopathologie:
      '## Causes\n- **Traumatiques** (fermées ou pénétrantes) : vaisseaux intercostaux, mammaires internes, parenchyme pulmonaire, cœur et gros vaisseaux\n- Non traumatiques : iatrogènes (ponction, pose de cathéter), anticoagulants, tumeurs, rupture d’anévrisme, endométriose\n\n## Conséquences\n- Hypovolémie, compression pulmonaire, caillotage, infection (empyème), fibrothorax',
    diagnostic:
      '## Clinique\n- Dyspnée, douleur thoracique\n- **Matité**, diminution du murmure vésiculaire\n- Signes de choc hémorragique si massif (> 1 500 mL)\n\n## Examens\n- **Radiographie thoracique** (émoussement, opacité), **échographie** pleurale (eFAST)\n- Ponction ou drain : sang\n- NFS, groupage, hémostase',
    examens: [
      ['premiere_intention', 'radiographie-thoracique', 'Opacité pleurale.'],
      ['premiere_intention', 'echographie-abdominale', 'eFAST : épanchement pleural.'],
      ['confirmation', 'ponction-epanchement', 'Liquide hématique.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'hemostase', 'Troubles de la coagulation.'],
    ],
    scores: [],
    differentiels: [
      ['pleuresie', 'Contexte infectieux ou tuberculeux, liquide non hématique.'],
      ['Contusion pulmonaire', 'Opacité parenchymateuse, pas d’épanchement.'],
      ['Rupture diaphragmatique', 'Viscères abdominaux dans le thorax.'],
    ],
    etiologies: '## Terrain\n- Traumatisé thoracique, patient sous anticoagulants',
    principes: [
      [
        'Réanimation',
        'Compenser les pertes.',
        '- Oxygène, deux voies veineuses, remplissage, **transfusion**, **acide tranexamique** dans les 3 heures si traumatique',
      ],
      [
        'Drainage thoracique',
        'Évacuer le sang.',
        '- Drain de gros calibre (28–32 Ch), 5e espace intercostal, ligne axillaire moyenne\n- Mesure du volume initial et horaire\n- Autotransfusion possible si matériel',
      ],
      [
        'Thoracotomie',
        'Hémostase.',
        '- Drainage initial > 1 500 mL, saignement > 200 mL/h pendant 2–4 heures, instabilité persistante',
      ],
      [
        'Hémothorax résiduel',
        'Prévenir empyème et fibrothorax.',
        '- Évacuation (thoracoscopie, thoracotomie) si > 300 mL persistant après drainage\n- Décortication si fibrothorax',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Hémorragie traumatique'],
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['morphine', 'premiere', 'Analgésie'],
      ['lidocaine', 'premiere', 'Anesthésie locale du drain'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-traumatique',
        description: 'Hémothorax massif.',
        traitement: '- Transfusion, thoracotomie',
        clinique: '- Hypotension',
        paraclinique: '- Hémoglobine',
      },
      {
        nom: 'Empyème',
        fiche: 'empyeme-thoracique',
        description: 'Surinfection d’un hémothorax résiduel.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '- Pus',
      },
      {
        nom: 'Fibrothorax',
        description: 'Organisation du caillot.',
        traitement: '- Décortication',
        clinique: '- Dyspnée, déformation thoracique',
        paraclinique: '- Pachypleurite',
      },
    ],
    evolution: '## Pronostic\n- Bon si drainage complet ; fibrothorax et empyème si évacuation incomplète',
    urgences: [],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Douleur thoracique', 'tres_frequent'],
      ['Hypotension', 'frequent'],
      ['Pâleur', 'frequent'],
    ],
    sources: [
      'EAST — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'ACS TQIP — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Oxygène, voie veineuse, transfert', '- Dyspnée, choc après traumatisme thoracique'],
      hgr: ['- Drainage, transfusion, thoracotomie', ''],
      tert: ['- Thoracoscopie, décortication', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hémothorax traumatique de moyenne abondance',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Traumatisé thoracique',
        fonctionnels: '- Dyspnée, douleur',
        generaux: '',
        physiques: '- Matité de la base',
        paraclinique: '- Opacité pleurale',
        etiologies: '- Vaisseaux intercostaux, parenchyme',
        syndromes: ['syndrome-d-epanchement-pleural-liquidien'],
      },
      {
        nom: 'Hémothorax massif',
        type: 'gravite',
        description: '> 1 500 mL.',
        terrain: '',
        fonctionnels: '- Détresse respiratoire',
        generaux: '- Choc',
        physiques: '- Matité d’un hémithorax',
        paraclinique: '- Opacité complète',
        etiologies: '- Lésion vasculaire majeure',
        syndromes: ['syndrome-d-hemorragie-interne', 'syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Empyème
  {
    ...THO,
    slug: 'empyeme-thoracique',
    nom: 'Empyème thoracique',
    resume:
      'Pus dans la cavité pleurale de l’adulte, compliquant une pneumonie, un traumatisme ou une chirurgie : fièvre persistante, matité, liquide purulent ; drainage thoracique de gros calibre et antibiotiques prolongés (amoxicilline-acide clavulanique ou ceftriaxone + métronidazole) ; décortication si poche organisée ; rechercher la tuberculose et le VIH.',
    definition:
      'Collection purulente dans l’espace pleural (liquide macroscopiquement purulent, ou Gram/culture positifs, ou pH < 7,2).',
    physiopathologie:
      '## Stades\n- **Exsudatif** (liquide clair), **fibrinopurulent** (cloisons, pus), **organisé** (coque pleurale, poumon emprisonné)\n\n## Causes\n- Pneumonie (pneumocoque, staphylocoque, anaérobies, bacilles Gram négatif), abcès pulmonaire\n- Hémothorax post-traumatique, chirurgie thoracique, rupture de l’œsophage, abcès sous-phrénique ou amibien\n- **Tuberculose** (empyème tuberculeux)',
    diagnostic:
      '## Clinique\n- Fièvre persistante malgré antibiotiques, frissons, sueurs, altération de l’état général\n- Douleur thoracique, dyspnée, toux\n- **Syndrome d’épanchement pleural** (matité, abolition du murmure)\n\n## Examens\n- Radiographie (opacité, niveau hydro-aérique), **échographie** (cloisons, guidage)\n- **Ponction pleurale** : pus, pH, glucose, LDH, Gram, culture, recherche de BK (Xpert)\n- NFS, CRP, hémocultures, VIH',
    examens: [
      ['premiere_intention', 'radiographie-thoracique', 'Opacité pleurale.'],
      ['premiere_intention', 'echographie-abdominale', 'Échographie pleurale : cloisons, repérage.'],
      ['confirmation', 'ponction-epanchement', 'Pus, pH < 7,2, Gram, culture.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose pleurale.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['etiologique', 'hemocultures', 'Germe.'],
      ['etiologique', 'tdr-vih', 'Immunodépression.'],
    ],
    scores: [],
    differentiels: [
      ['pleuresie', 'Épanchement non purulent (tuberculeux, parapneumonique simple).'],
      ['Abcès pulmonaire', 'Collection intraparenchymateuse.'],
      ['abces-amibien-du-foie', 'Abcès sous-phrénique, rupture dans la plèvre.'],
      ['hemothorax', 'Contexte traumatique, liquide hématique.'],
    ],
    etiologies:
      '## Terrain\n- VIH, diabète, alcoolisme, dénutrition, mauvaise hygiène dentaire, traumatisme thoracique',
    principes: [
      [
        'Drainage',
        'Évacuer le pus.',
        '- **Drain thoracique** de gros calibre, aspiration douce, lavages au sérum salé\n- Retirer quand le drainage est < 50 mL/j et le patient apyrétique',
      ],
      [
        'Antibiotiques',
        'Traiter l’infection.',
        '- **Amoxicilline-acide clavulanique** ou **ceftriaxone + métronidazole** IV puis relais oral, durée 3 à 6 semaines\n- Adapter à la culture ; **cloxacilline** si staphylocoque\n- Tuberculose : traitement antituberculeux standard',
      ],
      [
        'Chirurgie',
        'Libérer le poumon.',
        '- Empyème cloisonné ou organisé, échec du drainage : thoracoscopie, **décortication**\n- Pleurostomie (fenêtre thoracique) chez le patient fragile',
      ],
      [
        'Mesures associées',
        'Récupérer.',
        '- Kinésithérapie respiratoire, nutrition, analgésie, dépistage VIH',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Avec acide clavulanique'],
      ['acide-clavulanique', 'premiere', 'Avec amoxicilline'],
      ['ceftriaxone', 'alternative', 'Avec métronidazole'],
      ['metronidazole', 'alternative', 'Anaérobies'],
      ['cloxacilline', 'deuxieme', 'Staphylocoque'],
      ['clindamycine', 'alternative', 'Allergie à la pénicilline'],
      ['paracetamol', 'adjuvant', 'Fièvre, douleur'],
    ],
    complications: [
      {
        nom: 'Fibrothorax et poumon emprisonné',
        description: 'Organisation de l’empyème.',
        traitement: '- Décortication',
        clinique: '- Dyspnée, rétraction thoracique',
        paraclinique: '- Pachypleurite',
      },
      {
        nom: 'Fistule broncho-pleurale',
        description: 'Communication avec les bronches.',
        traitement: '- Drainage, chirurgie',
        clinique: '- Vomique, bullage persistant',
        paraclinique: '- Niveau hydro-aérique',
      },
      {
        nom: 'Empyème de nécessité',
        description: 'Extériorisation à travers la paroi.',
        traitement: '- Drainage chirurgical',
        clinique: '- Tuméfaction pariétale',
        paraclinique: '',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Dissémination.',
        traitement: '- Antibiotiques, réanimation',
        clinique: '- Choc',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison si drainage précoce ; mortalité de 10 à 20 % chez les patients âgés ou immunodéprimés',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Douleur thoracique', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Toux', 'frequent'],
      ['Sueurs', 'frequent'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Antibiotiques, orientation', '- Fièvre persistante avec épanchement'],
      hgr: ['- Ponction, drainage thoracique, antibiotiques IV', '- Échec du drainage, empyème organisé'],
      tert: ['- Thoracoscopie, décortication', ''],
    },
    alertes: { 'choc-septique': 'Empyème avec hypotension ou signes de choc' },
    formes: [
      {
        nom: 'Empyème parapneumonique',
        type: 'commune',
        description: 'Complication de pneumonie.',
        terrain: '- Adulte, VIH, alcoolisme',
        fonctionnels: '- Douleur thoracique, dyspnée, toux',
        generaux: '- Fièvre persistante',
        physiques: '- Syndrome d’épanchement',
        paraclinique: '- Pus, pH < 7,2',
        etiologies: '- Pneumocoque, staphylocoque, anaérobies',
        syndromes: ['syndrome-d-epanchement-pleural-liquidien', 'syndrome-infectieux'],
        examens: [['ponction-epanchement', 'Pus']],
      },
      {
        nom: 'Empyème tuberculeux',
        type: 'etiologique',
        description: 'Évolution chronique.',
        terrain: '- VIH',
        fonctionnels: '- Toux, dyspnée',
        generaux: '- Sueurs nocturnes, amaigrissement',
        physiques: '- Épanchement',
        paraclinique: '- Xpert positif',
        etiologies: '- Mycobacterium tuberculosis',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
      },
      {
        nom: 'Empyème post-traumatique',
        type: 'etiologique',
        description: 'Après hémothorax ou drainage.',
        terrain: '- Traumatisé thoracique',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '',
        paraclinique: '- Liquide trouble',
        etiologies: '- Staphylocoque',
        syndromes: [],
      },
    ],
  },
];
