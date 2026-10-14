'use strict';

/**
 * Lot 34 (phase 2, infectiologie) — filariose lymphatique, loase, pneumocystose. Rédigé par IA
 * (OMS, MSF, programmes nationaux de lutte contre les maladies tropicales négligées) : à valider.
 */

const INF = { departement: 'medecine-interne', specialite: 'Infectiologie' };

module.exports = [
  // =================================================================== Filariose lymphatique
  {
    ...INF,
    slug: 'filariose-lymphatique',
    nom: 'Filariose lymphatique',
    resume:
      'Infection par Wuchereria bancrofti transmise par les moustiques, endémique en RDC : lymphangites fébriles, lymphœdème puis éléphantiasis des membres, hydrocèle ; test antigénique rapide ou microfilaires nocturnes ; traitement de masse (albendazole ± ivermectine selon la présence d’onchocercose et de loase) ; hygiène du membre atteint et chirurgie de l’hydrocèle.',
    definition:
      'Parasitose due aux filaires lymphatiques (Wuchereria bancrofti en Afrique), dont les vers adultes vivent dans les vaisseaux lymphatiques et entraînent une atteinte lymphatique chronique.',
    physiopathologie:
      '## Transmission\n- Piqûres de moustiques (Anopheles, Culex) ; microfilaires sanguines à périodicité nocturne\n\n## Mécanismes\n- Dilatation et inflammation des lymphatiques par les vers adultes\n- **Attaques aiguës** d’adénolymphangite favorisées par les surinfections bactériennes\n- **Lymphœdème** progressif → **éléphantiasis** ; **hydrocèle** chez l’homme ; chylurie\n- Éosinophilie pulmonaire tropicale (forme rare)',
    diagnostic:
      '## Clinique\n- Accès de **lymphangite** centrifuge avec fièvre, adénopathies inflammatoires\n- **Lymphœdème** d’un membre inférieur, puis épaississement cutané, plis, verrucosités (éléphantiasis)\n- **Hydrocèle**, épaississement du cordon ; chylurie (urines laiteuses)\n\n## Examens\n- **Test antigénique rapide** (FTS) : antigène circulant de W. bancrofti\n- **Microfilaires** sur prélèvement sanguin nocturne (22 h – 2 h)\n- Rechercher une loase et une onchocercose avant tout traitement (risques)\n- Échographie scrotale (« danse des filaires »)',
    examens: [
      ['confirmation', 'recherche-microfilaires', 'Prélèvement nocturne, test antigénique.'],
      ['premiere_intention', 'nfs', 'Éosinophilie.'],
      ['etiologique', 'biopsie-cutanee-exsangue', 'Onchocercose associée.'],
      ['deuxieme_intention', 'echographie-doppler-scrotale', 'Hydrocèle, filaires adultes.'],
    ],
    scores: [],
    differentiels: [
      ['erysipele-et-cellulite', 'Infection cutanée aiguë sans lymphœdème chronique.'],
      ['Podoconiose', 'Éléphantiasis des pieds non filarien (sols volcaniques), bilatéral.'],
      ['thrombose-veineuse-profonde', 'Œdème aigu unilatéral, Doppler.'],
      ['Lymphœdème post-chirurgical ou tumoral', 'Antécédent, adénopathies.'],
      ['hernie-inguinale-adulte', 'Masse inguino-scrotale réductible.'],
    ],
    etiologies: '## Facteurs\n- Résidence en zone d’endémie, exposition prolongée aux piqûres de moustiques',
    principes: [
      [
        'Traitement de masse (programme national)',
        'Interrompre la transmission.',
        '- Zones de coendémie avec la loase (fréquentes en RDC) : **albendazole** 400 mg 2 fois par an + moustiquaires\n- Zones avec onchocercose sans loase : **ivermectine** 200 µg/kg + **albendazole** 400 mg 1 fois par an\n- Zones sans onchocercose ni loase : IDA (ivermectine + **diéthylcarbamazine** 6 mg/kg + albendazole)',
      ],
      [
        'Traitement individuel',
        'Tuer les vers adultes.',
        '- **Doxycycline** 200 mg/j pendant 4 à 6 semaines (anti-Wolbachia, macrofilaricide) chez l’adulte non enceinte\n- DEC uniquement si onchocercose et forte microfilarémie à Loa loa exclues',
      ],
      [
        'Prise en charge de la morbidité',
        'Limiter le handicap.',
        '- **Hygiène quotidienne** du membre (lavage, séchage, soins des plaies et des mycoses), surélévation, exercices, chaussures\n- Attaques aiguës : repos, antalgiques, antibiotiques si surinfection\n- **Hydrocèle** : chirurgie (hydrocélectomie)',
      ],
    ],
    molecules: [
      ['albendazole', 'premiere', 'Traitement de masse'],
      ['ivermectine', 'premiere', 'Traitement de masse (zones sans loase)'],
      ['diethylcarbamazine', 'alternative', 'Zones sans onchocercose ni loase'],
      ['doxycycline', 'alternative', 'Traitement individuel (anti-Wolbachia)'],
      ['amoxicilline', 'adjuvant', 'Surinfection bactérienne'],
    ],
    complications: [
      {
        nom: 'Éléphantiasis',
        description: 'Lymphœdème chronique.',
        traitement: '- Hygiène, soins, chirurgie de réduction',
        clinique: '- Membre volumineux, verrucosités',
        paraclinique: '',
      },
      {
        nom: 'Infections cutanées récidivantes',
        fiche: 'erysipele-et-cellulite',
        description: 'Portes d’entrée.',
        traitement: '- Antibiotiques, hygiène',
        clinique: '- Fièvre, rougeur',
        paraclinique: '',
      },
      {
        nom: 'Hydrocèle volumineuse',
        description: 'Retentissement social.',
        traitement: '- Hydrocélectomie',
        clinique: '- Masse scrotale',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Non mortelle mais très invalidante et stigmatisante ; le lymphœdème précoce peut régresser avec les soins d’hygiène',
    urgences: [],
    symptomes: [
      ['Œdème d’un membre', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Tuméfaction inguinale', 'occasionnel'],
      ['Douleur scrotale', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Traitement de masse, hygiène du membre, antalgiques', '- Hydrocèle, attaques répétées'],
      hgr: ['- Diagnostic, hydrocélectomie', ''],
      tert: ['- Chirurgie de l’éléphantiasis', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Lymphœdème filarien',
        type: 'commune',
        description: 'Forme chronique.',
        terrain: '- Adulte en zone d’endémie',
        fonctionnels: '- Lourdeur du membre',
        generaux: '',
        physiques: '- Œdème d’un membre inférieur',
        paraclinique: '- Antigène filarien positif',
        etiologies: '- Wuchereria bancrofti',
        syndromes: [],
      },
      {
        nom: 'Adénolymphangite aiguë',
        type: 'evolutive',
        description: 'Attaque aiguë.',
        terrain: '',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre, frissons',
        physiques: '- Traînée lymphangitique, adénopathie',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Hydrocèle filarienne',
        type: 'topographique',
        description: 'Atteinte génitale.',
        terrain: '- Homme',
        fonctionnels: '- Masse scrotale',
        generaux: '',
        physiques: '- Hydrocèle transilluminable',
        paraclinique: '- Échographie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Loase
  {
    ...INF,
    slug: 'loase',
    nom: 'Loase',
    resume:
      'Filariose à Loa loa transmise par les taons (Chrysops), fréquente dans les zones forestières de RDC : œdèmes de Calabar, passage du ver adulte sous la conjonctive, prurit ; microfilaires sur prélèvement diurne ; danger : encéphalopathie sous ivermectine ou DEC si microfilarémie élevée — quantifier avant tout traitement ; albendazole pour réduire la charge, extraction du ver oculaire.',
    definition:
      'Filariose sous-cutanée due à Loa loa, dont les vers adultes migrent sous la peau et la conjonctive et dont les microfilaires circulent dans le sang le jour.',
    physiopathologie:
      '## Transmission\n- Piqûres de taons du genre Chrysops (forêt, plantations), le jour\n\n## Mécanismes\n- Migration des vers adultes : réactions allergiques locales (œdèmes de Calabar)\n- Microfilarémie parfois très élevée : risque d’**encéphalopathie** lors de la destruction brutale des microfilaires par l’ivermectine ou la DEC\n- Complications rares : néphropathie, fibrose endomyocardique, encéphalite',
    diagnostic:
      '## Clinique\n- **Œdèmes de Calabar** : gonflements fugaces, prurigineux, des avant-bras ou du visage\n- **Passage du ver sous la conjonctive** (« ver de l’œil »), sensation de corps étranger\n- Prurit, arthralgies, fatigue ; souvent asymptomatique\n\n## Examens\n- **Microfilaires sur prélèvement diurne** (10 h – 15 h) avec **quantification** (mf/mL)\n- **Éosinophilie** souvent marquée\n- Rechercher l’onchocercose et la filariose lymphatique',
    examens: [
      ['confirmation', 'recherche-microfilaires', 'Prélèvement diurne avec quantification.'],
      ['premiere_intention', 'nfs', 'Hyperéosinophilie.'],
      ['etiologique', 'biopsie-cutanee-exsangue', 'Onchocercose associée.'],
      ['gravite', 'proteinurie', 'Atteinte rénale.'],
    ],
    scores: [],
    differentiels: [
      ['onchocercose', 'Prurit, nodules, lésions cutanées, biopsie cutanée.'],
      ['urticaire-et-angio-oedeme', 'Œdèmes allergiques sans éosinophilie parasitaire.'],
      ['filariose-lymphatique', 'Lymphœdème, prélèvement nocturne.'],
      ['Larva migrans', 'Sillon cutané serpigineux.'],
    ],
    etiologies:
      '## Terrain\n- Résidence en zone forestière (provinces de l’ouest, du centre et du nord de la RDC)',
    principes: [
      [
        'Avant tout traitement',
        'Éviter l’encéphalopathie.',
        '- **Quantifier la microfilarémie** : ne jamais donner d’ivermectine ou de DEC « à l’aveugle » à un patient de zone d’endémie ayant une forte charge\n- > 8 000 mf/mL : risque de réactions graves ; > 30 000 mf/mL : risque majeur d’encéphalopathie',
      ],
      [
        'Traitement selon la microfilarémie',
        'Traiter prudemment.',
        '- Faible charge (< 2 000 mf/mL) : **diéthylcarbamazine** à doses progressives (jusqu’à 8–10 mg/kg/j pendant 21 jours), sous surveillance\n- Charge élevée : **albendazole** 200 mg 2 fois par jour pendant 21 jours (réduction lente), puis réévaluation ; aphérèse en centre spécialisé\n- Antihistaminiques ou corticoïdes pour les réactions\n- **Ver oculaire** : extraction chirurgicale sous anesthésie locale',
      ],
      [
        'Programmes de masse',
        'Sécurité.',
        '- Dans les zones de coendémie, l’ivermectine de masse est réalisée avec des stratégies de sécurité (« test and not treat ») ; signaler tout effet indésirable grave',
      ],
    ],
    molecules: [
      ['albendazole', 'premiere', 'Réduction de la microfilarémie'],
      ['diethylcarbamazine', 'alternative', 'Faible microfilarémie, sous surveillance'],
      ['cetirizine', 'adjuvant', 'Prurit, œdèmes de Calabar'],
      ['prednisolone', 'adjuvant', 'Réactions au traitement'],
      ['lidocaine', 'adjuvant', 'Extraction du ver oculaire'],
    ],
    complications: [
      {
        nom: 'Encéphalopathie post-thérapeutique',
        fiche: 'coma-demarche',
        description: 'Ivermectine ou DEC avec forte microfilarémie.',
        traitement: '- Réanimation, soins de support',
        clinique: '- Confusion, coma',
        paraclinique: '- Microfilarémie élevée',
      },
      {
        nom: 'Néphropathie',
        description: 'Rare.',
        traitement: '- Traitement antiparasitaire prudent',
        clinique: '- Œdèmes',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Fibrose endomyocardique',
        fiche: 'insuffisance-cardiaque',
        description: 'Hyperéosinophilie prolongée.',
        traitement: '- Traitement de l’insuffisance cardiaque',
        clinique: '- Dyspnée',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution: '## Pronostic\n- Généralement bénigne ; gravité liée surtout aux réactions thérapeutiques',
    urgences: [],
    symptomes: [
      ['Œdème d’un membre', 'frequent'],
      ['Prurit', 'frequent'],
      ['Yeux rouges', 'occasionnel'],
      ['Arthralgies', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Suspecter, ne pas traiter à l’aveugle, orientation', '- Ver oculaire, forte microfilarémie'],
      hgr: ['- Quantification, albendazole, extraction du ver', ''],
      tert: ['- Aphérèse, cas compliqués', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Loase symptomatique',
        type: 'commune',
        description: 'Œdèmes de Calabar.',
        terrain: '- Zone forestière',
        fonctionnels: '- Gonflements fugaces, prurit',
        generaux: '',
        physiques: '- Œdème de l’avant-bras',
        paraclinique: '- Microfilaires diurnes, éosinophilie',
        etiologies: '- Loa loa',
        syndromes: [],
      },
      {
        nom: 'Ver sous-conjonctival',
        type: 'topographique',
        description: 'Passage oculaire.',
        terrain: '',
        fonctionnels: '- Gêne oculaire',
        generaux: '',
        physiques: '- Ver mobile sous la conjonctive',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forte microfilarémie',
        type: 'gravite',
        description: 'Risque thérapeutique.',
        terrain: '',
        fonctionnels: '- Souvent asymptomatique',
        generaux: '',
        physiques: '',
        paraclinique: '- > 30 000 mf/mL',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Pneumocystose
  {
    ...INF,
    slug: 'pneumocystose',
    nom: 'Pneumocystose',
    resume:
      'Pneumopathie à Pneumocystis jirovecii du patient VIH à CD4 < 200 (et du nourrisson exposé) : dyspnée progressive, toux sèche, fièvre, désaturation à l’effort, radiographie interstitielle bilatérale ; cotrimoxazole à forte dose 21 jours, corticoïdes si hypoxémie, puis prophylaxie par cotrimoxazole et ARV.',
    definition:
      'Infection pulmonaire opportuniste due au champignon Pneumocystis jirovecii, survenant chez les immunodéprimés, en particulier au stade avancé du VIH.',
    physiopathologie:
      '## Terrain\n- **VIH** avec CD4 < 200/mm³ sans prophylaxie, **nourrisson exposé ou infecté par le VIH** (2–6 mois)\n- Corticothérapie prolongée, chimiothérapies, transplantation\n\n## Mécanismes\n- Alvéolite avec exsudat spumeux, hypoxémie par trouble de diffusion',
    diagnostic:
      '## Clinique\n- **Dyspnée progressive** sur 1 à 3 semaines, **toux sèche**, fièvre\n- **Désaturation à l’effort**, polypnée, auscultation souvent pauvre\n- Nourrisson : pneumonie sévère avec hypoxémie ne répondant pas aux antibiotiques\n\n## Examens\n- **Radiographie thoracique** : opacités interstitielles bilatérales (parfois normale)\n- SpO2 au repos et à l’effort, gaz du sang, LDH élevées\n- Diagnostic de certitude (si disponible) : expectoration induite ou lavage broncho-alvéolaire (coloration, PCR)\n- Test VIH, CD4 ; rechercher la tuberculose (Xpert, TB-LAM)',
    examens: [
      ['premiere_intention', 'radiographie-thoracique', 'Opacités interstitielles bilatérales.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Désaturation à l’effort.'],
      ['gravite', 'gaz-du-sang', 'PaO2 < 70 mmHg : corticoïdes.'],
      ['premiere_intention', 'ldh', 'Élevées.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'cd4', 'Immunodépression.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose associée.'],
      ['etiologique', 'tb-lam', 'Tuberculose (VIH avancé).'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-pulmonaire', 'Évolution plus lente, Xpert positif.'],
      ['pneumonie-communautaire-adulte', 'Début brutal, condensation, réponse aux antibiotiques.'],
      ['sarcome-de-kaposi', 'Lésions cutanées ou buccales, épanchement.'],
      ['COVID-19', 'Contexte épidémique, test positif.'],
      ['Pneumopathie interstitielle lymphoïde', 'Enfant VIH, évolution chronique.'],
    ],
    etiologies:
      '## Terrain\n- VIH non traité (CD4 < 200), absence de prophylaxie par cotrimoxazole, nourrisson exposé au VIH',
    principes: [
      [
        'Traitement curatif',
        'Traiter l’infection.',
        '- **Cotrimoxazole** à forte dose : **15–20 mg/kg/j de triméthoprime** en 3–4 prises pendant **21 jours** (IV ou per os), adulte comme enfant\n- Alternatives : **clindamycine** 600 mg toutes les 8 h + **primaquine** 30 mg/j (après test G6PD) ; pentamidine IV ; atovaquone (formes légères)',
      ],
      [
        'Corticoïdes',
        'Si hypoxémie.',
        '- PaO2 < 70 mmHg ou SpO2 < 92 % : **prednisolone** 40 mg 2 fois par jour J1–J5, 40 mg/j J6–J10, 20 mg/j J11–J21, débutée avec le traitement\n- **Oxygène**',
      ],
      [
        'Après le traitement',
        'Prévenir les récidives.',
        '- **Prophylaxie secondaire** par cotrimoxazole 960 mg/j\n- **ARV** dans les 2 semaines\n- Prophylaxie primaire chez tous les patients VIH à CD4 < 350 (ou selon le protocole national) et les nourrissons exposés dès 6 semaines',
      ],
    ],
    molecules: [
      ['cotrimoxazole', 'premiere', 'Traitement et prophylaxie'],
      ['prednisolone', 'premiere', 'Hypoxémie'],
      ['clindamycine', 'alternative', 'Avec primaquine'],
      ['primaquine', 'alternative', 'Avec clindamycine (G6PD normal)'],
      ['pentamidine', 'alternative', 'Formes graves, intolérance'],
      ['atovaquone', 'alternative', 'Formes légères'],
      ['oxygene', 'premiere', 'Hypoxémie'],
    ],
    complications: [
      {
        nom: 'Insuffisance respiratoire aiguë',
        description: 'Formes graves.',
        traitement: '- Oxygène, ventilation, corticoïdes',
        clinique: '- Détresse respiratoire',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Pneumothorax',
        fiche: 'pneumothorax-spontane',
        description: 'Lésions kystiques.',
        traitement: '- Drainage',
        clinique: '- Douleur thoracique brutale',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Toxidermie au cotrimoxazole',
        fiche: 'toxidermies-graves',
        description: 'Fréquente chez le patient VIH.',
        traitement: '- Arrêt, alternative',
        clinique: '- Éruption, fièvre',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 10 à 20 % chez l’adulte, plus élevée chez le nourrisson et en cas d’hypoxémie sévère',
    urgences: [],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Toux', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Cyanose', 'occasionnel'],
      ['Perte de poids', 'frequent'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Suspecter chez le patient VIH, cotrimoxazole, oxygène si disponible, transfert',
        '- Désaturation, dyspnée',
      ],
      hgr: ['- Radiographie, cotrimoxazole forte dose, corticoïdes, oxygène', '- Ventilation'],
      tert: ['- Réanimation, lavage broncho-alvéolaire', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Pneumocystose de l’adulte VIH',
        type: 'commune',
        description: 'CD4 < 200.',
        terrain: '- VIH non traité',
        fonctionnels: '- Dyspnée progressive, toux sèche',
        generaux: '- Fièvre, amaigrissement',
        physiques: '- Polypnée, auscultation pauvre',
        paraclinique: '- Opacités interstitielles, désaturation',
        etiologies: '- Pneumocystis jirovecii',
        syndromes: [],
      },
      {
        nom: 'Pneumocystose du nourrisson',
        type: 'terrain',
        description: 'Nourrisson exposé au VIH.',
        terrain: '- 2 à 6 mois',
        fonctionnels: '- Toux, difficultés respiratoires',
        generaux: '- Fièvre modérée',
        physiques: '- Tirage, cyanose',
        paraclinique: '- Hypoxémie',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Forme hypoxémique',
        type: 'gravite',
        description: 'PaO2 < 70 mmHg.',
        terrain: '',
        fonctionnels: '- Dyspnée de repos',
        generaux: '',
        physiques: '- Cyanose',
        paraclinique: '- Hypoxémie',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },
];
