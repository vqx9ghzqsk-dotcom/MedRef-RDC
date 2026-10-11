'use strict';

/**
 * Lot 3 (infectiologie) — fin de l'infectiologie prioritaire : candidose oropharyngée et
 * œsophagienne, sarcome de Kaposi, COVID-19, tuberculose pharmacorésistante,
 * coïnfection tuberculose-VIH, accidents d'exposition au sang. Rédigé par IA (OMS,
 * programmes nationaux) : à valider par un médecin.
 */

const MI = { departement: 'medecine-interne', specialite: 'Infectiologie' };

module.exports = [
  // =================================================================== Candidose
  {
    ...MI,
    slug: 'candidose-oropharyngee-et-oesophagienne',
    nom: 'Candidose oropharyngée et œsophagienne',
    resume:
      'Infection à Candida de la bouche et de l’œsophage, marqueur d’immunodépression (VIH) : fluconazole et mise sous ARV.',
    definition:
      'Infection des muqueuses buccales et pharyngées (muguet) ou de l’œsophage par des levures du genre *Candida*, la candidose œsophagienne étant une maladie classant sida (stade OMS 4).',
    physiopathologie:
      '## Mécanismes\n- *Candida albicans* est un commensal du tube digestif\n- Prolifération en cas de baisse de l’immunité cellulaire, d’antibiothérapie ou de corticothérapie\n- Extension de la bouche vers l’œsophage quand les CD4 sont bas',
    diagnostic:
      '## Candidose oropharyngée\n- Plaques blanchâtres crémeuses détachables (muguet), langue, palais, joues\n- Forme érythémateuse, perlèche (chéilite angulaire)\n- Brûlures buccales, troubles du goût\n\n## Candidose œsophagienne\n- **Dysphagie** et douleurs à la déglutition (odynophagie), douleurs rétrosternales\n- Souvent associée à un muguet\n- Diagnostic présomptif chez la PVVIH : amélioration sous fluconazole\n- Endoscopie si échec : plaques blanchâtres œsophagiennes',
    examens: [
      ['premiere_intention', 'tdr-vih', 'Toute candidose sans cause évidente : dépistage du VIH.'],
      ['premiere_intention', 'cd4', 'Stade de l’immunodépression.'],
      ['premiere_intention', 'glycemie', 'Diabète favorisant.'],
      [
        'deuxieme_intention',
        'endoscopie-digestive-haute',
        'Échec du traitement : autre cause d’œsophagite (CMV, herpès, ulcère, cancer).',
      ],
    ],
    scores: ['stades-oms-vih'],
    differentiels: [
      ['Leucoplasie orale chevelue', 'Stries blanches non détachables sur les bords de la langue (EBV).'],
      ['Œsophagite herpétique ou à CMV', 'Ulcérations à l’endoscopie, échec du fluconazole.'],
      ['Reflux gastro-œsophagien', 'Pyrosis, absence de muguet.'],
      ['Cancer de l’œsophage', 'Dysphagie progressive, amaigrissement, sujet âgé.'],
    ],
    etiologies:
      '## Agents\n- *Candida albicans* (majoritaire), *C. glabrata*, *C. krusei* (résistants au fluconazole)\n\n## Facteurs\n- VIH avec CD4 bas, diabète, antibiotiques à large spectre, corticoïdes inhalés ou systémiques, prothèses dentaires, malnutrition, chimiothérapie',
    principes: [
      [
        'Candidose oropharyngée',
        'Soulager et éviter l’extension.',
        '- Forme légère : **miconazole** gel buccal ou **nystatine** suspension 4 fois par jour, 7 à 14 jours\n- Forme étendue ou PVVIH : **fluconazole** 100 à 200 mg/j (enfant 3–6 mg/kg/j) pendant 7 à 14 jours',
      ],
      [
        'Candidose œsophagienne',
        'Permettre de nouveau l’alimentation.',
        '- **Fluconazole** 200 à 400 mg/j (enfant 6 mg/kg/j) pendant 14 à 21 jours\n- Alimentation molle, hydratation, antalgiques',
      ],
      [
        'Traiter la cause',
        'Prévenir les récidives.',
        '- Mise sous ARV ou réévaluation du traitement antirétroviral\n- Contrôle du diabète, rinçage buccal après corticoïdes inhalés',
      ],
      [
        'Échec du traitement',
        'Rechercher une autre cause ou une résistance.',
        '- Endoscopie, prélèvement mycologique\n- Augmenter le fluconazole ou changer d’antifongique en centre spécialisé',
      ],
    ],
    molecules: [
      ['fluconazole', 'premiere', 'Candidose étendue, œsophagienne, PVVIH'],
      ['miconazole-nitrate', 'premiere', 'Gel buccal, forme légère'],
      ['nystatine', 'alternative', 'Suspension buvable, forme légère'],
      ['dolutegravir', 'adjuvant', 'Mise sous ARV (TLD)'],
    ],
    complications: [
      {
        nom: 'Dénutrition',
        description: 'Dysphagie limitant l’alimentation.',
        traitement: '- Alimentation adaptée, supplémentation',
        clinique: '- Poids',
        paraclinique: '',
      },
      {
        nom: 'Candidose systémique',
        description: 'Rare, chez l’immunodéprimé sévère ou le patient perfusé.',
        traitement: '- Antifongique IV',
        clinique: '- Fièvre persistante',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 1 à 2 semaines ; récidives fréquentes sans restauration immunitaire\n- La candidose œsophagienne signe un VIH avancé : mettre sous ARV rapidement',
    urgences: [],
    symptomes: [
      ['Dysphagie', 'tres_frequent'],
      ['Douleur thoracique', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      "Guide national de prise en charge de l'infection à VIH",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Traitement du muguet et de la candidose œsophagienne présumée, dépistage du VIH, ARV',
        '- Dysphagie persistante après 14 jours de fluconazole, impossibilité de boire',
      ],
      hgr: ['- Réhydratation, alimentation, bilan VIH avancé', '- Échec du traitement : endoscopie'],
      tert: ['- Endoscopie, mycologie, antifongiques de 2e ligne', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Muguet (candidose oropharyngée)',
        type: 'commune',
        description: 'Plaques blanches crémeuses de la bouche.',
        terrain: '- PVVIH, nourrisson, diabétique, antibiothérapie',
        fonctionnels: '- Brûlures buccales, goût altéré',
        generaux: '',
        physiques: '- Dépôts blanchâtres détachables, muqueuse rouge en dessous, perlèche',
        paraclinique: '- Diagnostic clinique',
        etiologies: '- *C. albicans*',
        syndromes: [],
      },
      {
        nom: 'Candidose œsophagienne',
        type: 'topographique',
        description: 'Dysphagie douloureuse, maladie classant sida.',
        terrain: '- VIH avec CD4 < 100',
        fonctionnels: '- Dysphagie, odynophagie, douleurs rétrosternales',
        generaux: '- Amaigrissement',
        physiques: '- Muguet associé fréquent',
        paraclinique: '- Endoscopie en cas d’échec',
        etiologies: '- *Candida*',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
        examens: [['endoscopie-digestive-haute', 'Si échec']],
      },
    ],
  },

  // =================================================================== Kaposi
  {
    ...MI,
    slug: 'sarcome-de-kaposi',
    nom: 'Sarcome de Kaposi',
    resume:
      'Tumeur vasculaire liée à l’herpèsvirus HHV-8, surtout chez la PVVIH : lésions violacées cutanées et muqueuses ; ARV pour tous, chimiothérapie des formes étendues.',
    definition:
      'Prolifération tumorale d’origine endothéliale induite par l’herpèsvirus humain de type 8 (HHV-8), se présentant sous forme épidémique (VIH), endémique africaine (adulte et enfant non infecté par le VIH) ou iatrogène.',
    physiopathologie:
      '## Mécanismes\n- HHV-8 transmis par la salive, endémique en Afrique centrale\n- Le virus infecte les cellules endothéliales et induit leur prolifération et une néoangiogenèse\n- L’immunodépression (VIH) lève le contrôle de l’infection',
    diagnostic:
      '## Clinique\n- Macules, plaques ou nodules **violacés** ou brun foncé, non prurigineux, sur les membres inférieurs, le visage, le tronc\n- Lésions muqueuses (palais, gencives) : risque d’atteinte digestive\n- **Œdème lymphatique** des membres ou du visage\n- Atteinte viscérale : pulmonaire (dyspnée, hémoptysie, épanchement), digestive (saignements)\n\n## Confirmation\n- Biopsie cutanée si doute (diagnostic souvent clinique)',
    examens: [
      ['premiere_intention', 'tdr-vih', 'Systématique.'],
      ['premiere_intention', 'cd4', 'Stade de l’immunodépression.'],
      [
        'confirmation',
        'biopsie-histologie',
        'Prolifération de cellules fusiformes et fentes vasculaires ; LANA-1 positif.',
      ],
      ['gravite', 'radiographie-thoracique', 'Atteinte pulmonaire (infiltrats, épanchement).'],
      ['etiologique', 'xpert-mtb-rif', 'Éliminer une tuberculose associée si signes respiratoires.'],
      ['pretherapeutique', 'nfs', 'Avant chimiothérapie.'],
    ],
    scores: ['stades-oms-vih'],
    differentiels: [
      [
        'Angiomatose bacillaire',
        'Papules angiomateuses chez la PVVIH, Bartonella ; répond aux antibiotiques.',
      ],
      ['Granulome pyogénique', 'Lésion unique saignante.'],
      ['Dermatofibrome, mélanome', 'Biopsie.'],
      ['tuberculose-extrapulmonaire', 'Atteinte pulmonaire ou ganglionnaire : GeneXpert.'],
    ],
    etiologies:
      '## Agent\n- Herpèsvirus humain de type 8 (HHV-8)\n\n## Formes\n- **Épidémique** : PVVIH, maladie classant sida\n- **Endémique africaine** : adulte de sexe masculin, forme lymphadénopathique agressive de l’enfant\n- **Iatrogène** : immunosuppresseurs',
    principes: [
      [
        'ARV pour tous',
        'La restauration immunitaire fait régresser la tumeur.',
        '- Débuter rapidement le TARV (TLD) ; régression des formes limitées en quelques mois',
      ],
      [
        'Chimiothérapie des formes étendues',
        'Contrôler les formes graves.',
        '- Indications : lésions étendues, œdèmes importants, atteinte viscérale, échec des ARV\n- **Paclitaxel** ou doxorubicine liposomale (OMS) ; à défaut **bléomycine + vincristine** (schéma BV)\n- En centre habilité',
      ],
      [
        'Prévenir le syndrome de reconstitution immunitaire',
        'Éviter l’aggravation sous ARV.',
        '- Surveillance rapprochée les 3 premiers mois\n- Éviter les corticoïdes (aggravent le Kaposi)',
      ],
      [
        'Soins de support',
        'Améliorer la qualité de vie.',
        '- Contention des œdèmes, soins des lésions ulcérées, antalgiques\n- Soutien nutritionnel et psychologique',
      ],
    ],
    molecules: [
      ['dolutegravir', 'premiere', 'TARV (TLD)'],
      ['tenofovir-disoproxil', 'premiere', 'TARV (TLD)'],
      ['lamivudine', 'premiere', 'TARV (TLD)'],
      ['paclitaxel', 'deuxieme', 'Chimiothérapie des formes étendues'],
      ['bleomycine', 'alternative', 'Schéma BV'],
      ['vincristine', 'alternative', 'Schéma BV'],
      ['cotrimoxazole', 'adjuvant', 'Prophylaxie des infections opportunistes'],
    ],
    complications: [
      {
        nom: 'Kaposi pulmonaire',
        description: 'Dyspnée, hémoptysie, épanchement pleural ; pronostic sombre.',
        traitement: '- Chimiothérapie, ARV',
        clinique: '- FR, SpO2',
        paraclinique: '- Radiographie thoracique',
      },
      {
        nom: 'Hémorragie digestive',
        description: 'Lésions digestives.',
        traitement: '- Transfusion, chimiothérapie',
        clinique: '- Méléna, hématémèse',
        paraclinique: '- Hb',
      },
      {
        nom: 'Lymphœdème et surinfection',
        description: 'Œdème chronique invalidant.',
        traitement: '- Contention, soins cutanés, antibiotiques si cellulite',
        clinique: '- Volume du membre',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Formes limitées : régression sous ARV\n- Formes viscérales : mortalité élevée sans chimiothérapie',
    urgences: [],
    symptomes: [
      ['Lésions cutanées violacées', 'tres_frequent'],
      ['Œdèmes', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      "Guide national de prise en charge de l'infection à VIH",
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Dépistage du VIH, mise sous ARV, cotrimoxazole',
        '- Lésions étendues, œdèmes, atteinte buccale, dyspnée',
      ],
      hgr: ['- Bilan, biopsie, ARV, soins de support', '- Indication de chimiothérapie'],
      tert: ['- Chimiothérapie, prise en charge des formes viscérales', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Kaposi épidémique cutanéo-muqueux',
        type: 'commune',
        description: 'Lésions violacées multiples chez la PVVIH.',
        terrain: '- VIH, souvent CD4 bas',
        fonctionnels: '- Lésions indolores, gêne esthétique',
        generaux: '',
        physiques: '- Macules, plaques et nodules violacés, lésions du palais',
        paraclinique: '- Biopsie si doute',
        etiologies: '- HHV-8',
        syndromes: [],
      },
      {
        nom: 'Kaposi viscéral',
        type: 'gravite',
        description: 'Atteinte pulmonaire ou digestive.',
        terrain: '- VIH avancé',
        fonctionnels: '- Dyspnée, toux, hémoptysie, saignements digestifs',
        generaux: '- Fièvre, amaigrissement',
        physiques: '- Épanchement pleural',
        paraclinique: '- Infiltrats pulmonaires',
        etiologies: '- HHV-8',
        syndromes: ['syndrome-d-epanchement-pleural-liquidien'],
      },
      {
        nom: 'Kaposi endémique de l’enfant',
        type: 'terrain',
        description: 'Forme ganglionnaire agressive.',
        terrain: '- Enfant, souvent VIH négatif',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Adénopathies généralisées',
        paraclinique: '- Biopsie ganglionnaire',
        etiologies: '- HHV-8',
        syndromes: [],
      },
    ],
  },

  // =================================================================== COVID-19
  {
    ...MI,
    slug: 'covid-19',
    nom: 'COVID-19',
    resume:
      'Infection respiratoire à SARS-CoV-2 : formes légères à critiques ; oxygène et dexaméthasone pour les formes sévères, vaccination des personnes à risque.',
    definition:
      'Infection due au coronavirus SARS-CoV-2, transmise par gouttelettes et aérosols, allant de l’infection asymptomatique à la pneumonie hypoxémiante, au syndrome de détresse respiratoire aiguë et au décès.',
    physiopathologie:
      '## Mécanismes\n- Entrée du virus par le récepteur ACE2 (voies respiratoires)\n- Pneumonie virale, puis réponse inflammatoire excessive vers J7–J10\n- Atteinte endothéliale et état prothrombotique (thromboses, embolies)',
    diagnostic:
      '## Clinique\n- Fièvre, toux, asthénie, céphalées, myalgies, mal de gorge, **perte de l’odorat et du goût**\n- Dyspnée : signe d’aggravation\n\n## Sévérité (OMS)\n- **Non sévère** : sans signe de pneumonie grave\n- **Sévère** : SpO2 < 90 %, FR > 30/min (adulte), détresse respiratoire\n- **Critique** : SDRA, sepsis, choc, besoin de ventilation\n\n## Facteurs de risque\n- Âge > 60 ans, diabète, HTA, obésité, maladie rénale ou pulmonaire chronique, VIH non contrôlé, grossesse',
    examens: [
      ['confirmation', 'test-covid', 'TDR antigénique ou RT-PCR positif.'],
      ['gravite', 'oxymetrie-de-pouls', 'SpO2 < 90 % = forme sévère : oxygène.'],
      ['gravite', 'radiographie-thoracique', 'Opacités bilatérales périphériques.'],
      ['gravite', 'glycemie', 'Hyperglycémie (diabète, dexaméthasone).'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre en zone d’endémie.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['Pneumonie bactérienne', 'Expectoration purulente, foyer localisé.'],
      ['tuberculose-pulmonaire', 'Toux > 2 semaines, sueurs, amaigrissement.'],
      ['Grippe', 'Contexte saisonnier ; test spécifique.'],
      ['Embolie pulmonaire', 'Douleur thoracique, tachycardie, facteurs de risque thrombo-emboliques.'],
      ['insuffisance-cardiaque', 'Orthopnée, œdèmes, crépitants bilatéraux, cardiomégalie.'],
    ],
    etiologies:
      '## Agent\n- SARS-CoV-2 (variants successifs)\n\n## Transmission\n- Gouttelettes et aérosols, espaces clos mal ventilés, contacts rapprochés',
    principes: [
      [
        'Formes non sévères',
        'Traiter les symptômes et surveiller.',
        '- Isolement, paracétamol, hydratation\n- Surveillance de la SpO2 et des signes d’alerte (dyspnée, douleur thoracique, confusion)\n- Pas d’antibiotique ni de corticoïde\n- Antiviral oral chez les patients à risque si disponible, selon le protocole national',
      ],
      [
        'Formes sévères : oxygène',
        'Corriger l’hypoxémie.',
        '- Oxygène pour SpO2 ≥ 94 % (88–92 % si BPCO), décubitus ventral vigile\n- Hospitalisation en isolement',
      ],
      [
        'Corticothérapie des formes sévères et critiques',
        'Réduire la mortalité.',
        '- **Dexaméthasone** 6 mg/j IV ou per os pendant 10 jours\n- Pas de corticoïde dans les formes non sévères',
      ],
      [
        'Prévenir les thromboses',
        'Limiter les complications.',
        '- **Énoxaparine** à dose préventive chez tout patient hospitalisé',
      ],
      [
        'Formes critiques',
        'Suppléer les organes.',
        '- Ventilation, prise en charge du choc (noradrénaline)\n- Antibiotiques seulement si surinfection suspectée',
      ],
      [
        'Prévention',
        'Protéger les personnes à risque.',
        '- Vaccination des groupes prioritaires, masque, ventilation des locaux',
      ],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Formes sévères et critiques, 10 jours'],
      ['enoxaparine', 'premiere', 'Prévention des thromboses chez le patient hospitalisé'],
      ['heparine-non-fractionnee', 'alternative', 'Prévention des thromboses (insuffisance rénale)'],
      ['paracetamol', 'premiere', 'Fièvre, douleurs'],
      ['remdesivir', 'alternative', 'Selon le protocole national, en centre spécialisé'],
      ['ceftriaxone', 'adjuvant', 'Surinfection bactérienne suspectée'],
    ],
    complications: [
      {
        nom: 'Syndrome de détresse respiratoire aiguë',
        description: 'Hypoxémie réfractaire.',
        traitement: '- Oxygène à haut débit, décubitus ventral, ventilation',
        clinique: '- FR, SpO2',
        paraclinique: '- Radiographie, gaz du sang',
      },
      {
        nom: 'Thromboses et embolie pulmonaire',
        description: 'État prothrombotique.',
        traitement: '- Anticoagulation curative',
        clinique: '- Douleur thoracique, tachycardie, mollet douloureux',
        paraclinique: '- Échographie veineuse, scanner',
      },
      {
        nom: 'COVID long',
        description: 'Asthénie, dyspnée, troubles cognitifs persistant plus de 3 mois.',
        traitement: '- Réadaptation progressive',
        clinique: '- Tolérance à l’effort',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Plus de 80 % de formes non sévères\n- Mortalité des formes critiques élevée sans réanimation\n- Aggravation possible entre J7 et J10',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Toux', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Perte de l’odorat et du goût', 'frequent'],
      ['Céphalées', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'CDC — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Test, isolement, traitement symptomatique, oxymétrie, vaccination',
        '- SpO2 < 94 %, dyspnée, comorbidités importantes, confusion',
      ],
      hgr: [
        '- Oxygène, dexaméthasone, énoxaparine, isolement',
        '- SpO2 < 90 % malgré l’oxygène, épuisement respiratoire, choc',
      ],
      tert: ['- Oxygène à haut débit, ventilation, réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme non sévère',
        type: 'commune',
        description: 'Syndrome grippal sans hypoxémie.',
        terrain: '- Tout âge',
        fonctionnels: '- Toux, mal de gorge, céphalées, myalgies, anosmie',
        generaux: '- Fièvre, asthénie',
        physiques: '- SpO2 ≥ 94 %',
        paraclinique: '- Test positif',
        etiologies: '- SARS-CoV-2',
        syndromes: ['syndrome-infectieux'],
        examens: [['test-covid', 'Confirmation']],
      },
      {
        nom: 'Forme sévère et critique',
        type: 'gravite',
        description: 'Pneumonie hypoxémiante, SDRA.',
        terrain: '- Âge, diabète, obésité, HTA',
        fonctionnels: '- Dyspnée, douleur thoracique',
        generaux: '- Fièvre, tachycardie',
        physiques: '- FR > 30/min, SpO2 < 90 %, signes de lutte',
        paraclinique: '- Opacités bilatérales',
        etiologies: '- SARS-CoV-2',
        syndromes: ['syndrome-de-detresse-respiratoire', 'syndrome-de-condensation-pulmonaire'],
      },
    ],
  },

  // =================================================================== TB pharmacorésistante
  {
    ...MI,
    slug: 'tuberculose-pharmacoresistante',
    nom: 'Tuberculose pharmacorésistante',
    resume:
      'Tuberculose résistante à la rifampicine (RR/MR) : détectée par GeneXpert ; schémas courts tout oral (BPaLM 6 mois) selon le PNLT.',
    definition:
      'Tuberculose due à une souche de *M. tuberculosis* résistante à la rifampicine (TB-RR), avec ou sans résistance à l’isoniazide (TB-MR), voire aux fluoroquinolones (pré-UR) ou aussi à la bédaquiline ou au linézolide (UR).',
    physiopathologie:
      '## Mécanismes\n- Mutations chromosomiques sélectionnées par des traitements incomplets ou mal conduits (résistance acquise)\n- Transmission directe d’une souche résistante (résistance primaire), de plus en plus fréquente',
    diagnostic:
      '## Quand y penser\n- Échec ou rechute après un traitement antituberculeux\n- Contact d’un cas de TB pharmacorésistante\n- Absence de négativation des crachats à 2–3 mois\n- Personnel de santé, détenus, migrants\n\n## Diagnostic\n- **GeneXpert MTB/RIF** : détection de la résistance à la rifampicine\n- Tests de sensibilité complémentaires : LPA, Xpert MTB/XDR, culture et antibiogramme (fluoroquinolones, bédaquiline, linézolide)',
    examens: [
      ['confirmation', 'xpert-mtb-rif', 'MTB détecté, résistance à la rifampicine détectée.'],
      [
        'confirmation',
        'sensibilite-tb',
        'Résistance aux fluoroquinolones et aux autres médicaments du schéma.',
      ],
      ['premiere_intention', 'tdr-vih', 'Systématique.'],
      ['pretherapeutique', 'ecg', 'QT de base (bédaquiline, moxifloxacine, clofazimine).'],
      ['pretherapeutique', 'nfs', 'Avant linézolide (myélotoxicité).'],
      ['pretherapeutique', 'bilan-hepatique', 'Hépatotoxicité.'],
      ['pretherapeutique', 'creatinine', 'Adaptation des doses.'],
      ['suivi', 'bacilloscopie', 'Mensuelle, avec culture.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['tuberculose-pulmonaire', 'Souche sensible : GeneXpert sans résistance à la rifampicine.'],
      ['Mycobactéries non tuberculeuses', 'Culture et identification.'],
      ['Mauvaise observance', 'Échec par traitement mal pris sans résistance : vérifier avant de conclure.'],
    ],
    etiologies:
      '## Facteurs\n- Antécédent de traitement antituberculeux (surtout interrompu)\n- Contact d’un cas résistant\n- Ruptures de stock, médicaments de mauvaise qualité, absence de supervision',
    principes: [
      [
        'Schéma BPaLM de 6 mois',
        'Guérir avec un schéma court tout oral.',
        '- **Bédaquiline + prétomanide + linézolide + moxifloxacine** pendant 6 mois\n- Patients ≥ 14 ans, sans résistance aux fluoroquinolones (sinon BPaL)\n- Selon le protocole du PNLT',
      ],
      [
        'Autres schémas',
        'Adapter au profil de résistance et au terrain.',
        '- Schéma court de 9 mois tout oral (bédaquiline, lévofloxacine, clofazimine, linézolide, isoniazide à forte dose, pyrazinamide, éthambutol) selon l’éligibilité\n- Schémas longs individualisés (enfant, grossesse, résistances étendues)',
      ],
      [
        'Surveillance des effets indésirables',
        'Assurer la sécurité.',
        '- ECG (QT) régulier\n- NFS et neuropathie, névrite optique (linézolide)\n- Bilan hépatique, kaliémie',
      ],
      [
        'Observance et soutien',
        'Éviter l’échec et l’amplification.',
        '- Traitement directement observé, soutien nutritionnel et financier\n- Gestion des effets indésirables',
      ],
      [
        'Contrôle de l’infection',
        'Protéger l’entourage.',
        '- Masque, aération, isolement les premières semaines\n- Dépistage et suivi des contacts',
      ],
    ],
    molecules: [
      ['bedaquiline', 'premiere', 'BPaLM et schémas courts'],
      ['pretomanide', 'premiere', 'BPaLM'],
      ['linezolide', 'premiere', 'BPaLM'],
      ['moxifloxacine', 'premiere', 'BPaLM'],
      ['levofloxacine', 'alternative', 'Schéma de 9 mois'],
      ['clofazimine', 'alternative', 'Schéma de 9 mois'],
      ['pyridoxine', 'adjuvant', 'Prévention de la neuropathie'],
    ],
    complications: [
      {
        nom: 'Allongement du QT',
        description: 'Bédaquiline, moxifloxacine, clofazimine.',
        traitement: '- Corriger la kaliémie, adapter le schéma si QTcF > 500 ms',
        clinique: '- Palpitations, syncope',
        paraclinique: '- ECG',
      },
      {
        nom: 'Toxicité du linézolide',
        description: 'Anémie, thrombopénie, neuropathie périphérique et optique.',
        traitement: '- Réduction de dose ou arrêt',
        clinique: '- Paresthésies, vision',
        paraclinique: '- NFS',
      },
      {
        nom: 'Échec et résistance étendue',
        description: 'Amplification des résistances.',
        traitement: '- Tests de sensibilité, schéma individualisé en centre de référence',
        clinique: '',
        paraclinique: '- Culture, antibiogramme',
      },
    ],
    evolution:
      '## Pronostic\n- Succès thérapeutique de 80 à 90 % avec BPaLM\n- Suivi 12 mois après la fin du traitement (rechute)',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Sueurs nocturnes', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Hémoptysie', 'occasionnel'],
    ],
    sources: [
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
      'Guide technique de prise en charge de la tuberculose',
    ],
    niveaux: {
      cs: [
        '- Repérer les cas à risque, prélèvement pour GeneXpert, suivi du DOT, soutien',
        '- Toute TB-RR : centre de prise en charge',
      ],
      hgr: ['- Démarrage selon l’organisation du PNLT, surveillance ECG et NFS', ''],
      tert: ['- Centre de référence : schémas individualisés, résistances étendues', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tuberculose résistante à la rifampicine',
        type: 'commune',
        description: 'Tuberculose pulmonaire avec Xpert RR.',
        terrain: '- Antécédent de traitement, contact de cas résistant',
        fonctionnels: '- Toux, hémoptysie',
        generaux: '- Fièvre, sueurs, amaigrissement',
        physiques: '- Râles, signes de cavité',
        paraclinique: '- Xpert : résistance à la rifampicine',
        etiologies: '- *M. tuberculosis* résistant',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
        examens: [['xpert-mtb-rif', 'Résistance à la rifampicine']],
      },
    ],
  },

  // =================================================================== TB-VIH
  {
    ...MI,
    slug: 'coinfection-tuberculose-vih',
    nom: 'Coïnfection tuberculose-VIH',
    resume:
      'Première cause de décès des PVVIH : dépister la TB chez toute PVVIH et le VIH chez tout tuberculeux, traiter les deux, prévenir par le TPT.',
    definition:
      'Association d’une tuberculose (pulmonaire ou extrapulmonaire) et d’une infection par le VIH, chaque infection aggravant l’autre ; nécessite une prise en charge intégrée.',
    physiopathologie:
      '## Mécanismes\n- Le VIH multiplie par 20 le risque de passer de l’infection latente à la tuberculose maladie\n- Formes extrapulmonaires, disséminées et pauci-bacillaires (crachats souvent négatifs) quand les CD4 sont bas\n- La tuberculose accélère la réplication du VIH',
    diagnostic:
      '## Dépistage croisé\n- Chez toute PVVIH à chaque visite : toux, fièvre, sueurs nocturnes, amaigrissement (un seul signe = examens)\n- Chez tout patient tuberculeux : test VIH\n\n## Diagnostic de la tuberculose chez la PVVIH\n- GeneXpert sur crachats ou autres prélèvements\n- **TB-LAM urinaire** si CD4 bas ou malade grave\n- Radiographie souvent atypique (sans cavité, miliaire, adénopathies)',
    examens: [
      ['premiere_intention', 'xpert-mtb-rif', 'Crachats et prélèvements extrapulmonaires.'],
      [
        'premiere_intention',
        'tb-lam',
        'PVVIH avec signes de TB et CD4 ≤ 200, ou malade grave quel que soit le taux.',
      ],
      ['premiere_intention', 'tdr-vih', 'Tout tuberculeux.'],
      ['premiere_intention', 'cd4', 'Stade de l’immunodépression.'],
      ['premiere_intention', 'radiographie-thoracique', 'Images souvent atypiques.'],
      ['etiologique', 'crag-cryptocoque', 'CD4 < 200 : cryptococcose associée.'],
      ['suivi', 'charge-virale-vih', 'À 6 mois de TARV.'],
    ],
    scores: ['stades-oms-vih'],
    differentiels: [
      ['Pneumocystose', 'Dyspnée progressive, toux sèche, hypoxémie, CD4 < 200.'],
      ['Pneumonie bactérienne', 'Début aigu, foyer.'],
      ['sarcome-de-kaposi', 'Lésions cutanées violacées, épanchement.'],
      ['meningite-a-cryptocoque', 'Céphalées, CrAg positif.'],
    ],
    etiologies:
      '## Facteurs\n- CD4 bas, absence de TARV, absence de traitement préventif de la tuberculose\n- Promiscuité, contact d’un tuberculeux, détention',
    principes: [
      [
        'Traiter la tuberculose',
        'Guérir la TB.',
        '- Schéma standard 2RHZE/4RH (plus long pour méningite et formes ostéoarticulaires)\n- Pyridoxine, cotrimoxazole',
      ],
      [
        'Débuter les ARV tôt',
        'Réduire la mortalité.',
        '- Dans les **2 semaines** après le début du traitement antituberculeux (quel que soit le taux de CD4)\n- Méningite tuberculeuse : attendre 4 à 8 semaines',
      ],
      [
        'Gérer les interactions',
        'Garder des concentrations efficaces.',
        '- Avec la rifampicine : **dolutégravir 50 mg 2 fois par jour** pendant le traitement et 2 semaines après\n- Éviter les inhibiteurs de protéase boostés avec la rifampicine',
      ],
      [
        'Prévenir et gérer l’IRIS',
        'Réduire l’aggravation paradoxale.',
        '- Aggravation clinique après le début des ARV : rechercher une autre cause ou une résistance\n- **Prednisolone** (1,5 mg/kg/j 2 semaines puis 0,75 mg/kg/j 2 semaines) en prévention ou en traitement selon le protocole',
      ],
      [
        'Traitement préventif (TPT)',
        'Éviter la tuberculose chez la PVVIH.',
        '- PVVIH sans tuberculose active : isoniazide 6 mois ou isoniazide-rifapentine 3 mois (3HP) selon le PNLT',
      ],
    ],
    molecules: [
      ['rifampicine', 'premiere', 'Traitement antituberculeux'],
      ['isoniazide', 'premiere', 'Traitement et prévention (TPT)'],
      ['pyrazinamide', 'premiere', 'Phase intensive'],
      ['ethambutol', 'premiere', 'Phase intensive'],
      ['dolutegravir', 'premiere', '50 mg 2 fois par jour avec la rifampicine'],
      ['tenofovir-disoproxil', 'premiere', 'TARV'],
      ['lamivudine', 'premiere', 'TARV'],
      ['cotrimoxazole', 'adjuvant', 'Prophylaxie'],
      ['pyridoxine', 'adjuvant', 'Avec l’isoniazide'],
      ['rifapentine', 'alternative', 'TPT court (3HP)'],
      ['prednisolone', 'adjuvant', 'Prévention et traitement de l’IRIS'],
    ],
    complications: [
      {
        nom: 'Syndrome inflammatoire de reconstitution immunitaire (IRIS)',
        description: 'Aggravation paradoxale dans les 3 mois suivant le TARV.',
        traitement: '- Poursuivre les traitements, prednisolone',
        clinique: '- Fièvre, adénopathies, épanchements',
        paraclinique: '- Exclure une résistance (GeneXpert)',
      },
      {
        nom: 'Hépatotoxicité',
        description: 'Cumul des toxicités (antituberculeux, cotrimoxazole, ARV).',
        traitement: '- Arrêt et réintroduction progressive',
        clinique: '- Ictère, vomissements',
        paraclinique: '- Bilan hépatique',
      },
      {
        nom: 'Tuberculose disséminée',
        description: 'Forme grave à CD4 bas.',
        traitement: '- Hospitalisation, traitement précoce',
        clinique: '- Fièvre, altération générale',
        paraclinique: '- LAM, hémocultures mycobactériennes',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée sans TARV ; nettement réduite par le TARV précoce et le TPT\n- Charge virale indétectable attendue à 6 mois',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Sueurs nocturnes', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
      "Guide national de prise en charge de l'infection à VIH",
      'Guide technique de prise en charge de la tuberculose',
    ],
    niveaux: {
      cs: [
        '- Dépistage croisé, GeneXpert, TB-LAM, traitement de la TB et des ARV intégrés, TPT',
        '- Malade grave, méningite, IRIS sévère',
      ],
      hgr: [
        '- Hospitalisation des formes graves, LAM, gestion des interactions',
        '- Résistance, complications neurologiques',
      ],
      tert: ['- Cas complexes, résistances', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tuberculose pulmonaire chez la PVVIH',
        type: 'commune',
        description: 'Souvent pauci-bacillaire et atypique.',
        terrain: '- PVVIH, CD4 bas',
        fonctionnels: '- Toux, dyspnée',
        generaux: '- Fièvre, sueurs, amaigrissement',
        physiques: '- Râles, adénopathies',
        paraclinique: '- GeneXpert, LAM positifs',
        etiologies: '- *M. tuberculosis*',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
        examens: [['tb-lam', 'PVVIH avec CD4 bas']],
      },
      {
        nom: 'Tuberculose disséminée',
        type: 'gravite',
        description: 'Atteintes multiples, fièvre prolongée.',
        terrain: '- CD4 < 100',
        fonctionnels: '- Diarrhée, douleurs abdominales',
        generaux: '- Fièvre, cachexie',
        physiques: '- Hépatosplénomégalie, adénopathies',
        paraclinique: '- LAM positif, miliaire',
        etiologies: '- Dissémination hématogène',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
      },
    ],
  },

  // =================================================================== AES
  {
    ...MI,
    slug: 'accidents-exposition-au-sang',
    nom: 'Accidents d’exposition au sang et prophylaxie post-exposition',
    resume:
      'Exposition à du sang ou à des liquides biologiques (piqûre, violences sexuelles) : premiers soins, évaluation du risque, PPE VIH dans les 72 h, hépatite B.',
    definition:
      'Contact avec du sang ou un liquide biologique potentiellement contaminant par piqûre, coupure, projection sur muqueuse ou peau lésée, ou rapport sexuel non protégé ou forcé, exposant au VIH, à l’hépatite B et à l’hépatite C.',
    physiopathologie:
      '## Risque de transmission\n- Piqûre avec aiguille creuse contaminée : VIH ≈ 0,3 %, hépatite B jusqu’à 30 % (sujet non vacciné), hépatite C ≈ 2 %\n- Facteurs aggravants : aiguille creuse, sang visible, blessure profonde, patient source avec charge virale élevée\n- La PPE bloque l’établissement de l’infection si elle débute tôt',
    diagnostic:
      '## Évaluation\n- Nature de l’exposition (piqûre, projection, sexuelle), délai, liquide en cause\n- Statut du patient source (VIH, hépatite B, hépatite C) si possible, avec son accord\n- Statut de la personne exposée : VIH, vaccination hépatite B, grossesse\n\n## Indication de la PPE VIH\n- Exposition significative dans les **72 heures**, source VIH positive ou inconnue',
    examens: [
      [
        'premiere_intention',
        'tdr-vih',
        'Personne exposée à J0 (ne pas retarder la PPE), puis à 6 semaines et 3 mois ; source si possible.',
      ],
      ['premiere_intention', 'aghbs', 'Personne exposée et source.'],
      ['premiere_intention', 'serologies-hepatites', 'Hépatite C chez la source et l’exposé.'],
      ['premiere_intention', 'beta-hcg', 'Femme exposée (contraception d’urgence, choix des molécules).'],
      ['premiere_intention', 'serologie-syphilis', 'Exposition sexuelle.'],
      ['pretherapeutique', 'creatinine', 'Si facteurs de risque rénaux (ténofovir).'],
    ],
    scores: [],
    differentiels: [],
    etiologies:
      '## Circonstances\n- Soignants : piqûres (recapuchonnage), coupures, projections\n- Violences sexuelles (fréquentes dans les zones de conflit)\n- Rapport sexuel non protégé avec un partenaire VIH positif ou de statut inconnu',
    principes: [
      [
        'Premiers soins immédiats',
        'Réduire l’inoculum.',
        '- Peau : laver à l’eau et au savon, ne pas faire saigner ni frotter, antiseptique\n- Muqueuses et yeux : rincer abondamment à l’eau ou au sérum physiologique 5 minutes',
      ],
      [
        'PPE VIH dans les 72 heures',
        'Prévenir l’infection par le VIH.',
        '- Le plus tôt possible (idéalement < 2 h)\n- **Ténofovir + lamivudine + dolutégravir** (TLD) pendant **28 jours**\n- Enfant : schéma adapté au poids',
      ],
      [
        'Hépatite B',
        'Prévenir la transmission.',
        '- Non vacciné ou non immunisé : vaccin hépatite B (+ immunoglobulines si source AgHBs positive et disponibles)',
      ],
      [
        'Violences sexuelles',
        'Prise en charge globale.',
        '- Contraception d’urgence : **lévonorgestrel** 1,5 mg dans les 72 h (jusqu’à 120 h)\n- Traitement présomptif des IST (ceftriaxone, azithromycine, métronidazole)\n- Prévention du tétanos, soins des lésions, soutien psychologique, certificat médical',
      ],
      [
        'Suivi',
        'Dépister une contamination.',
        '- Tests VIH à 6 semaines et 3 mois, hépatites à 3 et 6 mois\n- Observance et tolérance de la PPE, rapports protégés jusqu’aux résultats\n- Déclaration de l’accident de travail',
      ],
    ],
    molecules: [
      ['tenofovir-disoproxil', 'premiere', 'PPE VIH 28 jours'],
      ['lamivudine', 'premiere', 'PPE VIH 28 jours'],
      ['dolutegravir', 'premiere', 'PPE VIH 28 jours'],
      ['vaccin-hepatite-b', 'premiere', 'Personne exposée non immunisée'],
      ['levonorgestrel-1-5-mg', 'premiere', 'Contraception d’urgence après violences sexuelles'],
      ['ceftriaxone', 'adjuvant', 'Prévention des IST après violences sexuelles'],
      ['azithromycine', 'adjuvant', 'Prévention des IST après violences sexuelles'],
      ['metronidazole', 'adjuvant', 'Prévention de la trichomonase'],
    ],
    complications: [
      {
        nom: 'Séroconversion VIH',
        fiche: 'infection-vih',
        description: 'Échec ou absence de PPE.',
        traitement: '- Mise sous TARV',
        clinique: '- Syndrome de primo-infection',
        paraclinique: '- Test VIH à 6 semaines et 3 mois',
      },
      {
        nom: 'Hépatite B aiguë',
        description: 'Sujet non vacciné.',
        traitement: '- Soins de soutien',
        clinique: '- Ictère, asthénie',
        paraclinique: '- AgHBs, transaminases',
      },
      {
        nom: 'Effets indésirables de la PPE',
        description: 'Nausées, céphalées, fatigue ; arrêt prématuré.',
        traitement: '- Traitement symptomatique, encouragement à l’observance',
        clinique: '- Tolérance',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- PPE débutée tôt et bien suivie : réduction du risque de transmission du VIH d’au moins 80 %\n- Prévention : conteneurs à aiguilles, ne jamais recapuchonner, vaccination des soignants contre l’hépatite B',
    urgences: [],
    symptomes: [],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      "Guide national de prise en charge de l'infection à VIH",
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Premiers soins, évaluation, kit PPE, contraception d’urgence, prévention des IST',
        '- Kit PPE indisponible : orienter immédiatement (délai de 72 h)',
      ],
      hgr: ['- PPE, vaccination, prise en charge médico-légale et psychologique des violences', ''],
      tert: ['- Cas complexes (source avec VIH résistant, grossesse)', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Accident d’exposition professionnelle',
        type: 'commune',
        description: 'Piqûre ou projection chez un soignant.',
        terrain: '- Personnel de santé, agents d’entretien',
        fonctionnels: '',
        generaux: '',
        physiques: '- Plaie de piqûre ou de coupure',
        paraclinique: '- Statut de la source',
        etiologies: '- Aiguille creuse, bistouri, projection',
        syndromes: [],
      },
      {
        nom: 'Exposition sexuelle et violences sexuelles',
        type: 'etiologique',
        description: 'Rapport non protégé ou forcé.',
        terrain: '- Femmes et enfants en zones de conflit',
        fonctionnels: '- Douleurs, saignements génitaux',
        generaux: '- Détresse psychologique',
        physiques: '- Lésions génitales ou corporelles',
        paraclinique: '- β-hCG, VIH, syphilis',
        etiologies: '- Violences, rapport non protégé',
        syndromes: [],
      },
    ],
  },
];
