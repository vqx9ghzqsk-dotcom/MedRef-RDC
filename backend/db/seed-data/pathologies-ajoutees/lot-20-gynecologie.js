'use strict';

/**
 * Lot 20 (gynécologie) — infections génitales basses, infection génitale haute (salpingite),
 * abcès tubo-ovarien. Rédigé par IA (OMS 2021 IST, CDC, IUSTI) : à valider.
 */

const GYN = { departement: 'gynecologie-obstetrique', specialite: 'Gynécologie' };

module.exports = [
  // =================================================================== Infections basses
  {
    ...GYN,
    slug: 'infections-genitales-basses',
    nom: 'Infections génitales basses (vaginoses, candidoses, trichomonase)',
    resume:
      'Leucorrhées anormales : vaginose bactérienne (pertes grises malodorantes), candidose (pertes blanches grumeleuses, prurit), trichomonase (pertes verdâtres mousseuses) ; cervicite (gonocoque, Chlamydia) à rechercher ; métronidazole, clotrimazole ou fluconazole, traitement du partenaire selon la cause.',
    definition:
      'Infections de la vulve, du vagin et du col utérin : vaginose bactérienne (déséquilibre de la flore), candidose vulvo-vaginale, trichomonase (IST), cervicites à gonocoque et *Chlamydia trachomatis* (IST).',
    physiopathologie:
      '## Mécanismes\n- **Vaginose** : remplacement des lactobacilles par des anaérobies (*Gardnerella*)\n- **Candidose** : prolifération de *Candida albicans* (grossesse, diabète, antibiotiques, VIH)\n- **Trichomonase, gonocoque, Chlamydia** : transmission sexuelle ; risque d’infection haute',
    diagnostic:
      '## Clinique (approche syndromique OMS)\n- **Vaginose** : pertes grisâtres homogènes, odeur de poisson, peu de prurit\n- **Candidose** : pertes blanches épaisses « lait caillé », prurit, brûlures, vulve rouge\n- **Trichomonase** : pertes jaune-vert mousseuses, malodorantes, col « framboisé »\n- **Cervicite** : pertes purulentes du col, saignements au contact\n- Évaluer le risque d’IST (partenaire symptomatique, nouveaux partenaires) et rechercher une douleur pelvienne (infection haute)\n\n## Examens\n- Spéculum, pH, test à la potasse, examen direct ; TDR VIH et syphilis',
    examens: [
      ['confirmation', 'prelevement-vaginal', 'Examen direct, pH, culture, PCR des IST.'],
      ['premiere_intention', 'tdr-vih', 'Dépistage.'],
      ['premiere_intention', 'serologie-syphilis', 'Dépistage.'],
      ['etiologique', 'glycemie', 'Candidoses récidivantes.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
    ],
    scores: [],
    differentiels: [
      ['infection-genitale-haute', 'Douleur pelvienne, fièvre, douleur à la mobilisation du col.'],
      ['Leucorrhées physiologiques', 'Claires, sans odeur ni prurit.'],
      ['Cancer du col', 'Saignements, lésion cervicale.'],
      ['Corps étranger', 'Pertes fétides unilatérales.'],
    ],
    etiologies:
      '## Facteurs\n- Douches vaginales, partenaires multiples, absence de préservatif, grossesse, diabète, antibiotiques, VIH',
    principes: [
      [
        'Selon le syndrome',
        'Traiter.',
        '- **Vaginose ou trichomonase** : **métronidazole** 500 mg 2 fois par jour 7 jours (ou 2 g dose unique pour la trichomonase) ; tinidazole, secnidazole\n- **Candidose** : **clotrimazole** ovule 500 mg dose unique (ou 200 mg 3 jours), ou **fluconazole** 150 mg per os dose unique (pas pendant la grossesse)\n- **Cervicite** (gonocoque + Chlamydia) : **ceftriaxone** 500 mg IM + **doxycycline** 100 mg 2 fois par jour 7 jours (azithromycine 1 g si grossesse)',
      ],
      [
        'Partenaire et prévention',
        'Éviter la réinfection.',
        '- Traitement du partenaire pour la trichomonase et les cervicites (pas pour la vaginose ni la candidose isolée)\n- Préservatif, dépistage VIH/syphilis, vaccination contre le VPH\n- Éviter les douches vaginales',
      ],
      ['Grossesse', 'Adapter.', '- Métronidazole possible ; candidose : clotrimazole local 7 jours'],
    ],
    molecules: [
      ['metronidazole', 'premiere', 'Vaginose, trichomonase'],
      ['tinidazole', 'alternative', 'Vaginose, trichomonase'],
      ['secnidazole', 'alternative', 'Dose unique'],
      ['clotrimazole', 'premiere', 'Candidose'],
      ['miconazole-nitrate', 'alternative', 'Candidose'],
      ['fluconazole', 'alternative', 'Candidose (hors grossesse)'],
      ['ceftriaxone', 'premiere', 'Cervicite gonococcique'],
      ['doxycycline', 'premiere', 'Chlamydia'],
      ['azithromycine', 'alternative', 'Chlamydia (grossesse)'],
    ],
    complications: [
      {
        nom: 'Infection génitale haute',
        fiche: 'infection-genitale-haute',
        description: 'Cervicite non traitée.',
        traitement: '- Antibiotiques',
        clinique: '- Douleur pelvienne, fièvre',
        paraclinique: '',
      },
      {
        nom: 'Complications obstétricales',
        fiche: 'menace-accouchement-premature',
        description: 'Vaginose, trichomonase : prématurité.',
        traitement: '- Traitement pendant la grossesse',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Transmission du VIH',
        fiche: 'infection-vih',
        description: 'Les IST augmentent le risque.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Guérison sous traitement ; récidives fréquentes (vaginose, candidose)',
    urgences: [],
    symptomes: [
      ['Leucorrhées', 'tres_frequent'],
      ['Prurit', 'frequent'],
      ['Brûlures mictionnelles', 'occasionnel'],
      ['Douleur pelvienne', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'CDC — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Approche syndromique, traitement, partenaire, dépistage VIH/syphilis',
        '- Récidives, échec, douleur pelvienne',
      ],
      hgr: ['- Examens de laboratoire', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Vaginose bactérienne',
        type: 'commune',
        description: 'Pertes malodorantes.',
        terrain: '- Femme en âge de procréer',
        fonctionnels: '- Odeur de poisson',
        generaux: '',
        physiques: '- Pertes grisâtres homogènes',
        paraclinique: '- pH > 4,5, cellules cibles',
        etiologies: '- Gardnerella, anaérobies',
        syndromes: [],
        examens: [['prelevement-vaginal', 'Diagnostic']],
      },
      {
        nom: 'Candidose vulvo-vaginale',
        type: 'etiologique',
        description: 'Prurit et pertes épaisses.',
        terrain: '- Grossesse, diabète, antibiotiques',
        fonctionnels: '- Prurit, brûlures',
        generaux: '',
        physiques: '- Vulve rouge, pertes caillebottées',
        paraclinique: '- Levures',
        etiologies: '- Candida albicans',
        syndromes: [],
      },
      {
        nom: 'Cervicite',
        type: 'etiologique',
        description: 'IST.',
        terrain: '- Partenaires multiples',
        fonctionnels: '- Pertes purulentes, saignements',
        generaux: '',
        physiques: '- Col inflammatoire',
        paraclinique: '- Gonocoque, Chlamydia',
        etiologies: '- N. gonorrhoeae, C. trachomatis',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Salpingite
  {
    ...GYN,
    slug: 'infection-genitale-haute',
    nom: 'Infection génitale haute (salpingite)',
    resume:
      'Infection de l’utérus, des trompes et du pelvis (gonocoque, Chlamydia, anaérobies) : douleur pelvienne, douleur à la mobilisation du col, fièvre, leucorrhées ; ceftriaxone + doxycycline + métronidazole 14 jours ; traiter le partenaire ; risque de stérilité et de GEU.',
    definition:
      'Infection ascendante du tractus génital haut (endométrite, salpingite, pelvipéritonite), le plus souvent sexuellement transmise, chez la femme jeune.',
    physiopathologie:
      '## Mécanismes\n- Ascension de germes cervicaux (gonocoque, Chlamydia) puis surinfection polymicrobienne (anaérobies, entérobactéries)\n- Facteurs : post-partum, post-abortum, gestes endo-utérins, DIU (premières semaines)\n- Séquelles : obstruction tubaire, stérilité, GEU, douleurs chroniques',
    diagnostic:
      '## Clinique\n- Douleur pelvienne bilatérale, **douleur à la mobilisation utérine** ou annexielle\n- Fièvre (inconstante), leucorrhées, métrorragies, brûlures urinaires\n- Signes de gravité : défense, masse (abcès), altération, grossesse\n\n## Examens\n- β-hCG (éliminer une GEU), NFS, CRP, échographie pelvienne\n- Prélèvement endocervical (gonocoque, Chlamydia), VIH, syphilis',
    examens: [
      ['premiere_intention', 'beta-hcg', 'Éliminer une GEU.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'echographie-pelvienne', 'Abcès, pyosalpinx.'],
      ['etiologique', 'prelevement-vaginal', 'Gonocoque, Chlamydia.'],
      ['premiere_intention', 'tdr-vih', 'Dépistage.'],
      ['premiere_intention', 'ecbu', 'Infection urinaire.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-extra-uterine', 'β-hCG positive, saignement, utérus vide.'],
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite, troubles digestifs.'],
      ['Torsion d’annexe, kyste rompu', 'Douleur brutale, échographie.'],
      ['infections-urinaires-adulte', 'Signes urinaires, ECBU.'],
    ],
    etiologies:
      '## Facteurs\n- Âge < 25 ans, partenaires multiples, IST, absence de préservatif\n- Avortements à risque, accouchements non hygiéniques, gestes endo-utérins',
    principes: [
      [
        'Antibiothérapie',
        'Guérir et préserver la fertilité.',
        '- Ambulatoire : **ceftriaxone** 500 mg IM dose unique + **doxycycline** 100 mg 2 fois par jour 14 jours + **métronidazole** 500 mg 2 fois par jour 14 jours\n- Hospitalisation si forme sévère, abcès, grossesse, échec à 72 h, vomissements : ceftriaxone IV + doxycycline + métronidazole\n- DIU : peut être laissé en place si amélioration',
      ],
      [
        'Partenaire et prévention',
        'Éviter la récidive.',
        '- Traitement du ou des partenaires (ceftriaxone + doxycycline), abstinence ou préservatif\n- Dépistage VIH, syphilis, hépatite B',
      ],
      [
        'Surveillance',
        'Repérer les complications.',
        '- Réévaluation à 72 h : apyrexie, diminution de la douleur',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', '500 mg IM'],
      ['doxycycline', 'premiere', '14 jours'],
      ['metronidazole', 'premiere', '14 jours'],
      ['azithromycine', 'alternative', 'Grossesse, intolérance'],
      ['clindamycine', 'alternative', 'Formes sévères (avec gentamicine)'],
      ['gentamicine', 'alternative', 'Formes sévères'],
      ['ibuprofene', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Abcès tubo-ovarien',
        fiche: 'abces-tubo-ovarien',
        description: 'Collection.',
        traitement: '- Antibiotiques IV, drainage',
        clinique: '- Masse, fièvre persistante',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Stérilité tubaire et GEU',
        fiche: 'grossesse-extra-uterine',
        description: 'Séquelles.',
        traitement: '- Prévention, traitement précoce',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Douleurs pelviennes chroniques',
        description: 'Adhérences.',
        traitement: '- Antalgiques',
        clinique: '- Dyspareunie',
        paraclinique: '',
      },
      {
        nom: 'Pelvipéritonite',
        fiche: 'peritonite-aigue',
        description: 'Extension.',
        traitement: '- Hospitalisation, chirurgie',
        clinique: '- Défense',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison sous traitement ; 10 à 20 % de stérilité après un épisode, plus après plusieurs',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur pelvienne', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Leucorrhées', 'frequent'],
      ['Saignement vaginal', 'occasionnel'],
      ['Brûlures mictionnelles', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'CDC — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Traitement syndromique, partenaire, dépistage', '- Formes sévères, grossesse, masse'],
      hgr: ['- Échographie, antibiotiques IV', '- Abcès'],
      tert: ['- Chirurgie, cœlioscopie', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Femme fébrile avec douleur pelvienne intense et défense abdominale',
    },
    formes: [
      {
        nom: 'Salpingite aiguë',
        type: 'commune',
        description: 'Douleur pelvienne fébrile.',
        terrain: '- Femme jeune, IST',
        fonctionnels: '- Douleur pelvienne, leucorrhées',
        generaux: '- Fièvre',
        physiques: '- Douleur à la mobilisation utérine',
        paraclinique: '- CRP élevée',
        etiologies: '- Gonocoque, Chlamydia',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Pelvipéritonite',
        type: 'gravite',
        description: 'Extension péritonéale.',
        terrain: '',
        fonctionnels: '- Douleur intense',
        generaux: '- Fièvre élevée',
        physiques: '- Défense sous-ombilicale',
        paraclinique: '- Épanchement',
        etiologies: '- Polymicrobienne',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== Abcès tubo-ovarien
  {
    ...GYN,
    slug: 'abces-tubo-ovarien',
    nom: 'Abcès tubo-ovarien',
    resume:
      'Collection purulente annexielle compliquant une salpingite : douleur pelvienne, fièvre, masse latéro-utérine ; hospitalisation, antibiotiques IV (ceftriaxone + doxycycline + métronidazole), drainage si > 7–8 cm ou échec à 48–72 h ; rupture = urgence chirurgicale.',
    definition:
      'Collection purulente impliquant la trompe et l’ovaire, complication de l’infection génitale haute.',
    physiopathologie:
      '## Mécanismes\n- Infection polymicrobienne (anaérobies, entérobactéries, gonocoque, Chlamydia)\n- Risque de rupture : péritonite généralisée, choc septique',
    diagnostic:
      '## Clinique\n- Douleur pelvienne, fièvre, altération de l’état général\n- **Masse annexielle** douloureuse au toucher vaginal\n- Rupture : douleur brutale généralisée, défense, choc\n\n## Examens\n- **Échographie** : masse complexe annexielle\n- NFS, CRP, β-hCG, hémocultures',
    examens: [
      ['confirmation', 'echographie-pelvienne', 'Masse annexielle complexe.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Suivi.'],
      ['premiere_intention', 'beta-hcg', 'Éliminer une grossesse.'],
      ['gravite', 'hemocultures', 'Sepsis.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Doute diagnostique.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['grossesse-extra-uterine', 'β-hCG positive.'],
      ['appendicite-aigue', 'Abcès appendiculaire.'],
      ['Kyste de l’ovaire compliqué', 'Torsion, hémorragie.'],
      ['Cancer de l’ovaire', 'Masse sans fièvre, ascite.'],
    ],
    etiologies: '## Facteurs\n- Salpingite non ou mal traitée, IST, avortements à risque, DIU, VIH',
    principes: [
      [
        'Antibiotiques IV',
        'Traiter l’infection.',
        '- **Ceftriaxone** 1–2 g/j IV + **doxycycline** 100 mg 2 fois par jour + **métronidazole** 500 mg toutes les 8 h\n- Ou **clindamycine** + **gentamicine**\n- Relais oral après 24–48 h d’amélioration, 14 jours au total ou plus',
      ],
      [
        'Drainage',
        'Contrôler la source.',
        '- Abcès > 7–8 cm, absence d’amélioration à 48–72 h : drainage (échoguidé, cœlioscopie ou laparotomie)\n- **Rupture** : laparotomie en urgence',
      ],
      [
        'Après',
        'Prévenir.',
        '- Traitement du partenaire, dépistage VIH, contraception, suivi de la fertilité',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'IV'],
      ['doxycycline', 'premiere', 'Association'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['clindamycine', 'alternative', 'Avec gentamicine'],
      ['gentamicine', 'alternative', 'Avec clindamycine'],
      ['morphine', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Rupture et péritonite',
        fiche: 'peritonite-aigue',
        description: 'Urgence.',
        traitement: '- Laparotomie',
        clinique: '- Douleur généralisée, choc',
        paraclinique: '',
      },
      {
        nom: 'Choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Dissémination.',
        traitement: '- Réanimation',
        clinique: '- Hypotension',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Stérilité',
        description: 'Destruction tubaire.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon sous antibiotiques et drainage ; mortalité élevée en cas de rupture',
    urgences: ['abdomen-aigu-chirurgical', 'choc-septique'],
    symptomes: [
      ['Douleur pelvienne', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Leucorrhées', 'frequent'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'CDC — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Première dose d’antibiotiques, transfert', '- Toute suspicion'],
      hgr: ['- Échographie, antibiotiques IV, drainage', ''],
      tert: ['- Chirurgie gynécologique', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Douleur pelvienne brutale généralisée avec défense',
      'choc-septique': 'Fièvre et masse pelvienne avec hypotension',
    },
    formes: [
      {
        nom: 'Abcès tubo-ovarien non rompu',
        type: 'commune',
        description: 'Masse fébrile.',
        terrain: '- Salpingite récente',
        fonctionnels: '- Douleur pelvienne',
        generaux: '- Fièvre',
        physiques: '- Masse annexielle douloureuse',
        paraclinique: '- Masse complexe',
        etiologies: '- Polymicrobienne',
        syndromes: ['syndrome-infectieux'],
        examens: [['echographie-pelvienne', 'Diagnostic']],
      },
      {
        nom: 'Abcès rompu',
        type: 'gravite',
        description: 'Péritonite.',
        terrain: '',
        fonctionnels: '- Douleur brutale',
        generaux: '- Choc',
        physiques: '- Contracture',
        paraclinique: '- Épanchement',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-de-choc'],
      },
    ],
  },
];
