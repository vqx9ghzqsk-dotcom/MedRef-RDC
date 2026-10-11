'use strict';

/**
 * Lot 17 (gynéco-obstétrique : grossesse) — consultation prénatale, anémie de la grossesse,
 * paludisme et grossesse, VIH et grossesse (PTME), syphilis et grossesse, infections
 * urinaires de la grossesse, diabète gestationnel.
 * Rédigé par IA (OMS 2016 CPN, PNLP, PNLS, FIGO, ACOG) : à valider.
 */

const GROS = { departement: 'gynecologie-obstetrique', specialite: 'Grossesse' };

module.exports = [
  // =================================================================== CPN
  {
    ...GROS,
    slug: 'consultation-prenatale',
    nom: 'Consultation prénatale et suivi de la grossesse',
    resume:
      'Au moins 8 contacts (OMS 2016), le premier avant 12 SA : datation, dépistages (VIH, syphilis, hépatite B, anémie, groupe, protéinurie), fer-acide folique, TPI-SP, moustiquaire, vaccin Td, plan d’accouchement, repérage des signes de danger.',
    definition:
      'Ensemble des soins délivrés à la femme enceinte pour surveiller la grossesse, prévenir et dépister les complications et préparer l’accouchement ; l’OMS recommande au moins 8 contacts.',
    physiopathologie:
      '## Enjeux en RDC\n- Mortalité maternelle élevée : hémorragies, éclampsie, infections, avortements à risque, anémie, paludisme\n- Nombreuses complications évitables par des interventions simples (fer, TPI, dépistage du VIH et de la syphilis, Td)',
    diagnostic:
      '## Calendrier (OMS 2016)\n- 1er contact avant 12 SA, puis 20, 26, 30, 34, 36, 38 et 40 SA\n\n## À chaque contact\n- PA, poids, hauteur utérine, bruits du cœur fœtal (après 20 SA), présentation, œdèmes\n- Recherche des **signes de danger** : saignement, céphalées et troubles visuels, convulsions, fièvre, douleurs abdominales, perte de liquide, diminution des mouvements fœtaux\n\n## Examens\n- Groupe et rhésus, Hb, VIH, syphilis, hépatite B, bandelette urinaire (protéinurie, bactériurie), glycémie, échographie avant 24 SA',
    examens: [
      ['premiere_intention', 'tdr-vih', 'Dépistage au 1er contact (et au 3e trimestre).'],
      ['premiere_intention', 'serologie-syphilis', 'TDR syphilis au 1er contact.'],
      ['premiere_intention', 'marqueurs-vhb', 'AgHBs.'],
      ['premiere_intention', 'nfs', 'Hb : anémie.'],
      ['premiere_intention', 'groupage-rai', 'Groupe, rhésus.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie, bactériurie.'],
      [
        'premiere_intention',
        'echographie-obstetricale',
        'Avant 24 SA : âge gestationnel, grossesse multiple.',
      ],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['deuxieme_intention', 'hgpo-75g', '24–28 SA si facteurs de risque.'],
    ],
    scores: [],
    differentiels: [],
    etiologies:
      '## Facteurs de risque à repérer\n- Âge < 18 ou > 35 ans, grande multiparité, antécédent de césarienne ou de complication\n- HTA, diabète, drépanocytose, VIH, cardiopathie\n- Grossesse multiple, présentation anormale, petite taille',
    principes: [
      [
        'Supplémentations',
        'Prévenir l’anémie et les malformations.',
        '- **Fer** 30–60 mg + **acide folique** 0,4 mg par jour pendant toute la grossesse\n- **Calcium** 1,5–2 g/j si apports faibles (prévention de la pré-éclampsie)\n- **Mébendazole** ou **albendazole** au 2e trimestre',
      ],
      [
        'Prévention du paludisme et du tétanos',
        'Protéger la mère et l’enfant.',
        '- **TPI-SP** (sulfadoxine-pyriméthamine) à chaque contact dès 13 SA, à au moins 1 mois d’intervalle (sauf femme sous cotrimoxazole)\n- **Moustiquaire imprégnée**\n- **Vaccin Td** selon le statut vaccinal',
      ],
      [
        'Dépistages et traitements',
        'Agir tôt.',
        '- VIH positif : ARV le jour même (PTME)\n- Syphilis positive : benzathine pénicilline\n- Bactériurie : antibiotique\n- Aspirine 75–150 mg dès 12 SA si risque élevé de pré-éclampsie',
      ],
      [
        'Préparation à l’accouchement',
        'Réduire les retards.',
        '- Plan d’accouchement (lieu, transport, argent, donneur de sang), accouchement en structure\n- Conseils : nutrition, allaitement, planification familiale du post-partum, signes de danger',
      ],
    ],
    molecules: [
      ['fumarate-ferreux-fer', 'premiere', 'Supplémentation'],
      ['acide-folique', 'premiere', 'Supplémentation'],
      ['sulfadoxine', 'premiere', 'TPI (avec pyriméthamine)'],
      ['pyrimethamine', 'premiere', 'TPI (avec sulfadoxine)'],
      ['calcium', 'adjuvant', 'Prévention de la pré-éclampsie'],
      ['mebendazole', 'adjuvant', 'Déparasitage'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Vaccin Td'],
      ['acide-acetylsalicylique', 'adjuvant', 'Risque de pré-éclampsie'],
    ],
    complications: [
      {
        nom: 'Pré-éclampsie',
        fiche: 'pre-eclampsie-severe',
        description: 'HTA et protéinurie après 20 SA.',
        traitement: '- Prise en charge spécialisée',
        clinique: '- PA ≥ 140/90',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Anémie',
        fiche: 'anemie-de-la-grossesse',
        description: 'Fréquente.',
        traitement: '- Fer',
        clinique: '- Pâleur',
        paraclinique: '- Hb',
      },
      {
        nom: 'Paludisme',
        fiche: 'paludisme-et-grossesse',
        description: 'Risques maternels et fœtaux.',
        traitement: '- Traitement adapté au trimestre',
        clinique: '- Fièvre',
        paraclinique: '- TDR',
      },
    ],
    evolution:
      '## Bénéfices\n- Les CPN de qualité réduisent la mortalité maternelle, la mortinatalité et le faible poids de naissance',
    urgences: ['eclampsie', 'hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Aménorrhée', 'tres_frequent'],
      ['Vomissements', 'occasionnel'],
      ['Œdèmes', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- CPN recentrée, dépistages par TDR, supplémentations, TPI, Td',
        '- Grossesse à risque, signes de danger',
      ],
      hgr: ['- Échographie, prise en charge des grossesses à risque', ''],
      tert: ['- Médecine fœto-maternelle', ''],
    },
    alertes: {
      eclampsie: 'Femme enceinte avec céphalées, troubles visuels, PA ≥ 160/110 ou convulsions',
      'hemorragie-du-post-partum-urgence': 'Saignement abondant pendant la grossesse ou après l’accouchement',
    },
    formes: [
      {
        nom: 'Grossesse normale',
        type: 'commune',
        description: 'Suivi de routine.',
        terrain: '- Femme enceinte',
        fonctionnels: '- Nausées au 1er trimestre',
        generaux: '',
        physiques: '- Hauteur utérine conforme, BCF présents',
        paraclinique: '- Bilans normaux',
        etiologies: '',
        syndromes: [],
        examens: [['echographie-obstetricale', 'Datation']],
      },
      {
        nom: 'Grossesse à risque',
        type: 'terrain',
        description: 'Facteurs de risque identifiés.',
        terrain: '- Antécédents, maladie chronique, âge',
        fonctionnels: '',
        generaux: '',
        physiques: '- HTA, utérus cicatriciel',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Anémie grossesse
  {
    ...GROS,
    slug: 'anemie-de-la-grossesse',
    nom: 'Anémie de la grossesse',
    resume:
      'Hb < 11 g/dL : carence en fer, paludisme, helminthes, drépanocytose ; fer 120 mg + acide folique, traitement du paludisme et déparasitage ; transfusion si Hb < 7 g/dL avec mauvaise tolérance ou près du terme.',
    definition:
      'Hémoglobine inférieure à 11 g/dL pendant la grossesse (10,5 g/dL au 2e trimestre selon certaines définitions) ; sévère si < 7 g/dL.',
    physiopathologie:
      '## Mécanismes\n- Besoins accrus en fer et folates, hémodilution physiologique\n- Paludisme (hémolyse, placenta), ankylostomes, schistosomiase, VIH, drépanocytose\n- Conséquences : hémorragie mal tolérée à l’accouchement, prématurité, petit poids de naissance, décès maternel',
    diagnostic:
      '## Clinique\n- Pâleur, fatigue, essoufflement, palpitations\n- Sévère : dyspnée de repos, tachycardie, insuffisance cardiaque\n\n## Biologie\n- Hb, VGM, ferritine si disponible, TDR paludisme, selles, électrophorèse si orientation',
    examens: [
      ['confirmation', 'nfs', 'Hb < 11 g/dL, VGM.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['etiologique', 'ferritine', 'Carence martiale.'],
      ['etiologique', 'examen-parasitologique-selles', 'Ankylostomes.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['pretherapeutique', 'groupage-rai', 'Transfusion.'],
    ],
    scores: [],
    differentiels: [
      ['anemie-ferriprive', 'Carence martiale hors grossesse.'],
      ['Drépanocytose et grossesse', 'Anémie hémolytique chronique, crises.'],
      ['paludisme-et-grossesse', 'Anémie palustre.'],
    ],
    etiologies:
      '## Causes\n- Carence en fer (première cause), folates\n- Paludisme, helminthiases, schistosomiase\n- Grossesses rapprochées, hémorragies, VIH, drépanocytose',
    principes: [
      [
        'Traitement de l’anémie',
        'Restaurer l’Hb.',
        '- **Fer élément 120 mg + acide folique 0,4 mg** par jour jusqu’à normalisation puis dose préventive\n- **Fer IV** (gluconate ferrique) si intolérance ou anémie sévère au 3e trimestre\n- Traitement du paludisme (ACT après le 1er trimestre), **mébendazole** au 2e trimestre',
      ],
      [
        'Anémie sévère',
        'Éviter le décès.',
        '- Hospitalisation\n- **Transfusion** si Hb < 7 g/dL avec signes de décompensation ou près du terme (culot, débit lent, furosémide)\n- Accouchement en structure avec possibilité de transfusion',
      ],
      [
        'Prévention',
        'Réduire l’anémie.',
        '- Supplémentation systématique, TPI-SP, moustiquaire, déparasitage, espacement des naissances, clampage retardé du cordon',
      ],
    ],
    molecules: [
      ['fumarate-ferreux-fer', 'premiere', 'Traitement'],
      ['acide-folique', 'premiere', 'Associé au fer'],
      ['gluconate-ferrique-de-sodium', 'deuxieme', 'Fer IV'],
      ['mebendazole', 'adjuvant', 'Déparasitage (2e trimestre)'],
      ['furosemide', 'adjuvant', 'Pendant la transfusion'],
    ],
    complications: [
      {
        nom: 'Décompensation cardiaque',
        description: 'Anémie sévère.',
        traitement: '- Transfusion lente, diurétique',
        clinique: '- Dyspnée, œdèmes',
        paraclinique: '- Hb',
      },
      {
        nom: 'Hémorragie du post-partum mal tolérée',
        fiche: 'hemorragie-post-partum',
        description: 'Faible réserve.',
        traitement: '- Prévention, transfusion',
        clinique: '- Choc',
        paraclinique: '- Hb',
      },
      {
        nom: 'Prématurité et petit poids',
        fiche: 'faible-poids-naissance-methode-kangourou',
        description: 'Retentissement fœtal.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Correction progressive sous fer ; l’anémie sévère est une cause importante de mortalité maternelle',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Asthénie', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Palpitations', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Hb à chaque trimestre, fer-acide folique, TDR, déparasitage',
        '- Hb < 7 g/dL, mauvaise tolérance',
      ],
      hgr: ['- Fer IV, transfusion, accouchement sécurisé', ''],
      tert: ['', ''],
    },
    alertes: {
      'hemorragie-du-post-partum-urgence': 'Femme anémique qui saigne pendant ou après l’accouchement',
    },
    formes: [
      {
        nom: 'Anémie ferriprive de la grossesse',
        type: 'commune',
        description: 'Microcytaire.',
        terrain: '- Grossesses rapprochées',
        fonctionnels: '- Fatigue',
        generaux: '',
        physiques: '- Pâleur',
        paraclinique: '- Hb < 11, VGM bas',
        etiologies: '- Carence en fer',
        syndromes: ['syndrome-anemique'],
        examens: [['nfs', 'Hb']],
      },
      {
        nom: 'Anémie sévère',
        type: 'gravite',
        description: 'Hb < 7 g/dL.',
        terrain: '- Paludisme, carence',
        fonctionnels: '- Dyspnée de repos',
        generaux: '- Tachycardie',
        physiques: '- Souffle, œdèmes',
        paraclinique: '- Hb très basse',
        etiologies: '',
        syndromes: ['syndrome-anemique', 'syndrome-d-insuffisance-cardiaque-gauche'],
      },
    ],
  },

  // =================================================================== Paludisme et grossesse
  {
    ...GROS,
    slug: 'paludisme-et-grossesse',
    nom: 'Paludisme et grossesse',
    resume:
      'Risque d’anémie, de paludisme grave, d’avortement, de prématurité et de petit poids de naissance : TPI-SP et moustiquaire ; traitement : quinine + clindamycine au 1er trimestre (ou artéméther-luméfantrine selon l’OMS 2022), ACT aux 2e et 3e trimestres, artésunate IV si grave.',
    definition:
      'Infection palustre chez la femme enceinte, plus fréquente et plus grave (immunité diminuée, séquestration placentaire), avec des conséquences maternelles et fœtales.',
    physiopathologie:
      '## Mécanismes\n- Séquestration placentaire de *P. falciparum* (adhésion à la chondroïtine sulfate A)\n- Anémie, hypoglycémie, œdème pulmonaire, paludisme grave\n- Insuffisance placentaire : retard de croissance, prématurité, mort fœtale\n- Primigestes et femmes VIH+ plus exposées',
    diagnostic:
      '## Clinique\n- Fièvre, céphalées, frissons, vomissements ; parfois asymptomatique (parasitémie placentaire)\n- Signes de gravité : prostration, convulsions, détresse respiratoire, hypoglycémie, anémie sévère, ictère\n\n## Confirmation\n- **TDR** ou microscopie chez toute femme enceinte fébrile',
    examens: [
      ['confirmation', 'tdr-paludisme', 'Toute fièvre.'],
      ['premiere_intention', 'goutte-epaisse', 'Densité parasitaire.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie (fréquente, surtout sous quinine).'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'echographie-obstetricale', 'Vitalité et croissance fœtales.'],
    ],
    scores: [],
    differentiels: [
      ['infections-urinaires-de-la-grossesse', 'Pyélonéphrite : douleur lombaire, ECBU.'],
      ['Chorioamniotite', 'Rupture des membranes, liquide fétide.'],
      ['hepatites-virales-aigues-a-et-e', 'Ictère, hépatite E grave au 3e trimestre.'],
      ['pre-eclampsie-severe', 'Céphalées, HTA, sans fièvre.'],
    ],
    etiologies:
      '## Facteurs\n- Zone d’endémie (toute la RDC), absence de moustiquaire, primigestité, VIH, absence de TPI',
    principes: [
      [
        'Paludisme simple',
        'Traiter selon le trimestre.',
        '- **1er trimestre** : **quinine** 10 mg/kg 3 fois par jour + **clindamycine** 7 jours ; l’OMS (2022) autorise aussi l’**artéméther-luméfantrine** au 1er trimestre\n- **2e et 3e trimestres** : **ACT** (artéméther-luméfantrine) 3 jours\n- Paracétamol, hydratation',
      ],
      [
        'Paludisme grave',
        'Urgence.',
        '- **Artésunate IV** à tous les trimestres (2,4 mg/kg à H0, H12, H24 puis par jour)\n- Glucose, transfusion si anémie sévère, surveillance fœtale\n- Prise en charge obstétricale',
      ],
      [
        'Prévention',
        'Protéger mère et enfant.',
        '- **TPI-SP** dès 13 SA à chaque contact (au moins 3 doses)\n- **Moustiquaire imprégnée**\n- Femme VIH+ sous cotrimoxazole : pas de SP',
      ],
    ],
    molecules: [
      ['quinine', 'premiere', '1er trimestre (avec clindamycine)'],
      ['clindamycine', 'premiere', 'Avec la quinine'],
      ['artemether', 'premiere', '2e et 3e trimestres (avec luméfantrine)'],
      ['lumefantrine', 'premiere', 'Avec artéméther'],
      ['artesunate', 'premiere', 'Paludisme grave'],
      ['sulfadoxine', 'premiere', 'TPI'],
      ['pyrimethamine', 'premiere', 'TPI'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Paludisme grave maternel',
        fiche: 'paludisme-grave',
        description: 'Neuropaludisme, œdème pulmonaire.',
        traitement: '- Artésunate IV',
        clinique: '- Coma, détresse',
        paraclinique: '- TDR, glycémie',
      },
      {
        nom: 'Anémie sévère',
        fiche: 'anemie-de-la-grossesse',
        description: 'Hémolyse.',
        traitement: '- Transfusion, fer',
        clinique: '- Pâleur',
        paraclinique: '- Hb',
      },
      {
        nom: 'Avortement, prématurité, mort fœtale',
        description: 'Insuffisance placentaire.',
        traitement: '- Prévention',
        clinique: '- Contractions, absence de mouvements',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Faible poids de naissance',
        fiche: 'faible-poids-naissance-methode-kangourou',
        description: 'Retard de croissance.',
        traitement: '- TPI, moustiquaire',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Le TPI et les moustiquaires réduisent fortement l’anémie maternelle et le faible poids de naissance',
    urgences: ['paludisme-grave-urgence'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'WHO guidelines for malaria',
      'Directives nationales de prise en charge du paludisme',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- TPI, moustiquaire, TDR, traitement du paludisme simple, artésunate pré-transfert',
        '- Paludisme grave, 1er trimestre compliqué',
      ],
      hgr: ['- Artésunate IV, transfusion, surveillance fœtale', ''],
      tert: ['- Réanimation', ''],
    },
    alertes: {
      'paludisme-grave-urgence':
        'Femme enceinte fébrile avec convulsions, somnolence, respiration difficile ou pâleur extrême',
    },
    formes: [
      {
        nom: 'Paludisme simple de la femme enceinte',
        type: 'commune',
        description: 'Fièvre, TDR positif.',
        terrain: '- Primigeste, zone d’endémie',
        fonctionnels: '- Céphalées, frissons',
        generaux: '- Fièvre',
        physiques: '- Pâleur',
        paraclinique: '- TDR positif',
        etiologies: '- P. falciparum',
        syndromes: ['syndrome-infectieux'],
        examens: [['tdr-paludisme', 'Diagnostic']],
      },
      {
        nom: 'Paludisme grave de la femme enceinte',
        type: 'gravite',
        description: 'Défaillance d’organe.',
        terrain: '- 2e et 3e trimestres',
        fonctionnels: '',
        generaux: '- Prostration',
        physiques: '- Coma, convulsions, OAP',
        paraclinique: '- Hypoglycémie, anémie',
        etiologies: '',
        syndromes: ['syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== VIH et grossesse
  {
    ...GROS,
    slug: 'vih-et-grossesse',
    nom: 'VIH et grossesse (prévention de la transmission mère-enfant)',
    resume:
      'Dépistage de toutes les femmes enceintes ; ARV à vie le jour même (TLD) ; charge virale à 34–36 SA ; accouchement sécurisé ; prophylaxie du nouveau-né ; allaitement exclusif sous ARV ; objectif : élimination de la transmission mère-enfant.',
    definition:
      'Prise en charge de l’infection à VIH pendant la grossesse, l’accouchement et l’allaitement pour la santé de la mère et la prévention de la transmission mère-enfant (PTME).',
    physiopathologie:
      '## Transmission\n- In utero (fin de grossesse), à l’accouchement (majoritaire), allaitement\n- Risque principal : charge virale maternelle détectable\n- Sans intervention : 15 à 45 % de transmission ; < 2 % avec ARV',
    diagnostic:
      '## Dépistage\n- TDR VIH au 1er contact prénatal, à répéter au 3e trimestre (et pendant l’allaitement) dans les zones à forte prévalence\n- Confirmation selon l’algorithme national\n- Dépistage du partenaire\n\n## Bilan\n- Charge virale (à l’initiation si possible, à 34–36 SA), CD4 si disponible, créatinine, AgHBs, dépistage de la tuberculose',
    examens: [
      ['confirmation', 'tdr-vih', 'Algorithme national.'],
      ['suivi', 'charge-virale-vih', '3 mois après le début des ARV et à 34–36 SA.'],
      ['premiere_intention', 'cd4', 'Stade.'],
      ['premiere_intention', 'creatinine', 'Avant ténofovir.'],
      ['premiere_intention', 'marqueurs-vhb', 'Coïnfection.'],
      ['premiere_intention', 'serologie-syphilis', 'Double élimination.'],
      ['etiologique', 'xpert-mtb-rif', 'Signes de tuberculose.'],
    ],
    scores: ['stades-oms-vih'],
    differentiels: [],
    etiologies:
      '## Facteurs de transmission\n- Charge virale élevée, séroconversion pendant la grossesse ou l’allaitement\n- Début tardif des ARV, mauvaise observance\n- Rupture prolongée des membranes, gestes invasifs, allaitement mixte',
    principes: [
      [
        'ARV maternels',
        'Supprimer la charge virale.',
        '- Début **le jour même** du diagnostic, à vie\n- Schéma préféré : **TLD** (ténofovir + lamivudine + **dolutégravir**), y compris au 1er trimestre\n- Soutien à l’observance, charge virale de contrôle',
      ],
      [
        'Accouchement',
        'Réduire l’exposition.',
        '- Accouchement en structure, éviter les gestes invasifs inutiles (épisiotomie, rupture artificielle précoce)\n- Césarienne non systématique (selon la charge virale et l’indication obstétricale)',
      ],
      [
        'Nouveau-né',
        'Prévenir l’infection.',
        '- Prophylaxie : **névirapine** 6 semaines (bas risque) ; **névirapine + zidovudine** (haut risque)\n- PCR à 6 semaines, cotrimoxazole, vaccination (fiche *Nouveau-né exposé au VIH*)',
      ],
      [
        'Allaitement et suivi',
        'Allaiter en sécurité.',
        '- Allaitement maternel exclusif 6 mois puis poursuite sous ARV maternels\n- Charge virale maternelle pendant l’allaitement, planification familiale, dépistage du partenaire',
      ],
    ],
    molecules: [
      ['dolutegravir', 'premiere', 'TLD'],
      ['tenofovir-disoproxil', 'premiere', 'TLD'],
      ['lamivudine', 'premiere', 'TLD'],
      ['nevirapine', 'premiere', 'Prophylaxie du nouveau-né'],
      ['zidovudine', 'alternative', 'Prophylaxie renforcée du nouveau-né'],
      ['cotrimoxazole', 'adjuvant', 'Prophylaxie maternelle selon les CD4'],
    ],
    complications: [
      {
        nom: 'Transmission à l’enfant',
        fiche: 'nouveau-ne-expose-au-vih',
        description: 'Charge virale détectable.',
        traitement: '- Prophylaxie, diagnostic précoce',
        clinique: '',
        paraclinique: '- PCR',
      },
      {
        nom: 'Infections opportunistes maternelles',
        fiche: 'infection-vih',
        description: 'Immunodépression.',
        traitement: '- ARV, prophylaxies',
        clinique: '',
        paraclinique: '- CD4',
      },
      {
        nom: 'Tuberculose',
        fiche: 'coinfection-tuberculose-vih',
        description: 'Plus fréquente pendant la grossesse.',
        traitement: '- Antituberculeux',
        clinique: '- Toux, fièvre',
        paraclinique: '- Xpert',
      },
    ],
    evolution:
      '## Pronostic\n- Transmission < 2 % avec ARV précoces et charge virale supprimée ; bonne santé maternelle sous traitement',
    urgences: [],
    symptomes: [
      ['Perte de poids', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      "Guide national de prise en charge de l'infection à VIH",
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Dépistage, TLD le jour même, suivi de l’observance, prophylaxie du nouveau-né',
        '- Échec virologique, complications',
      ],
      hgr: ['- Charge virale, accouchement sécurisé', ''],
      tert: ['- Prise en charge spécialisée', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Femme enceinte vivant avec le VIH',
        type: 'commune',
        description: 'Diagnostic en CPN ou connu.',
        terrain: '- Femme enceinte',
        fonctionnels: '',
        generaux: '',
        physiques: '- Souvent asymptomatique',
        paraclinique: '- TDR positifs',
        etiologies: '- VIH',
        syndromes: [],
        examens: [['charge-virale-vih', 'Suivi']],
      },
    ],
  },

  // =================================================================== Syphilis et grossesse
  {
    ...GROS,
    slug: 'syphilis-et-grossesse',
    nom: 'Syphilis et grossesse',
    resume:
      'Dépistage par TDR au premier contact : toute femme positive reçoit de la benzathine pénicilline (2,4 MUI IM, 3 doses à 1 semaine si syphilis tardive ou inconnue), le partenaire aussi ; prévient mort fœtale et syphilis congénitale.',
    definition:
      'Infection par *Treponema pallidum* pendant la grossesse, transmissible au fœtus à tous les stades, responsable d’avortements, de morts fœtales, de prématurité et de syphilis congénitale.',
    physiopathologie:
      '## Mécanismes\n- Passage transplacentaire, surtout en syphilis récente\n- Atteinte fœtale : hydrops, hépatosplénomégalie, lésions osseuses et cutanées',
    diagnostic:
      '## Dépistage\n- **TDR syphilis** (ou TDR double VIH-syphilis) au 1er contact, idéalement avant 16 SA, à répéter au 3e trimestre si risque\n- Souvent asymptomatique ; rechercher chancre, éruption, condylomes plats\n- Confirmation par test non tréponémique (RPR) si disponible (suivi du traitement)',
    examens: [
      ['confirmation', 'serologie-syphilis', 'TDR tréponémique, RPR.'],
      ['premiere_intention', 'tdr-vih', 'Double élimination.'],
      ['suivi', 'echographie-obstetricale', 'Signes fœtaux (hydrops, hépatomégalie).'],
    ],
    scores: [],
    differentiels: [
      ['infections-sexuellement-transmissibles', 'Autres IST associées.'],
      ['syphilis', 'Syphilis hors grossesse.'],
    ],
    etiologies: '## Facteurs\n- IST non traitées, partenaires multiples, absence de dépistage du partenaire',
    principes: [
      [
        'Traitement',
        'Guérir et protéger le fœtus.',
        '- **Benzathine benzylpénicilline** 2,4 MUI IM\n  - Syphilis récente (< 2 ans) : dose unique\n  - Tardive ou durée inconnue : 3 doses à 1 semaine d’intervalle\n- Allergie : désensibilisation recommandée ; à défaut érythromycine ou azithromycine (n’assurent pas le traitement du fœtus) — l’enfant devra être traité à la naissance\n- Réaction de Jarisch-Herxheimer possible (fièvre, contractions)',
      ],
      [
        'Partenaire et nouveau-né',
        'Éviter la réinfection.',
        '- Traitement du ou des partenaires\n- Nouveau-né : examen, sérologie, traitement si mère non ou mal traitée',
      ],
    ],
    molecules: [
      ['benzathine-benzylpenicilline', 'premiere', '2,4 MUI IM'],
      ['erythromycine', 'alternative', 'Allergie (ne traite pas le fœtus)'],
      ['azithromycine', 'alternative', 'Allergie'],
      ['benzylpenicilline-penicilline-g', 'premiere', 'Syphilis congénitale du nouveau-né'],
    ],
    complications: [
      {
        nom: 'Mort fœtale et avortement',
        description: 'Syphilis non traitée.',
        traitement: '- Dépistage précoce',
        clinique: '',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Syphilis congénitale',
        description: 'Atteinte du nouveau-né.',
        traitement: '- Benzylpénicilline 10 jours',
        clinique: '- Hépatosplénomégalie, pemphigus palmo-plantaire, rhinite',
        paraclinique: '- Sérologie',
      },
      {
        nom: 'Prématurité et petit poids',
        fiche: 'prematurite',
        description: 'Infection fœtale.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Le traitement avant 28 SA prévient la grande majorité des issues défavorables',
    urgences: [],
    symptomes: [
      ['Ulcération génitale', 'occasionnel'],
      ['Éruption cutanée', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'CDC — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- TDR, benzathine pénicilline, traitement du partenaire', '- Allergie à la pénicilline'],
      hgr: ['- Prise en charge du nouveau-né', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Syphilis latente découverte en CPN',
        type: 'commune',
        description: 'Asymptomatique.',
        terrain: '- Femme enceinte',
        fonctionnels: '',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- TDR positif',
        etiologies: '- T. pallidum',
        syndromes: [],
        examens: [['serologie-syphilis', 'Dépistage']],
      },
    ],
  },

  // =================================================================== IU grossesse
  {
    ...GROS,
    slug: 'infections-urinaires-de-la-grossesse',
    nom: 'Infections urinaires de la grossesse',
    resume:
      'Bactériurie asymptomatique, cystite et pyélonéphrite, favorisées par la grossesse : dépistage par bandelette ou ECBU, traitement de toute bactériurie (amoxicilline, céfixime, nitrofurantoïne, fosfomycine) ; pyélonéphrite = hospitalisation, ceftriaxone ; risque d’accouchement prématuré.',
    definition:
      'Infections bactériennes des voies urinaires pendant la grossesse : bactériurie asymptomatique (≥ 10⁵ UFC/mL), cystite, pyélonéphrite aiguë gravidique.',
    physiopathologie:
      '## Mécanismes\n- Dilatation des voies urinaires (progestérone, compression utérine), stase\n- La bactériurie non traitée évolue vers la pyélonéphrite dans 20 à 40 % des cas\n- Risques : accouchement prématuré, petit poids, sepsis maternel',
    diagnostic:
      '## Clinique\n- Bactériurie asymptomatique : aucun signe\n- Cystite : brûlures, pollakiurie\n- Pyélonéphrite : fièvre, frissons, douleur lombaire (souvent à droite), vomissements, contractions\n\n## Biologie\n- Bandelette (leucocytes, nitrites), **ECBU** avec antibiogramme',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Dépistage.'],
      ['confirmation', 'ecbu', 'Germe, antibiogramme ; contrôle après traitement.'],
      ['gravite', 'hemocultures', 'Pyélonéphrite.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
      ['gravite', 'echographie-renale', 'Obstacle, abcès.'],
      ['premiere_intention', 'creatinine', 'Pyélonéphrite.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-et-grossesse', 'Fièvre, TDR positif.'],
      ['Chorioamniotite', 'Rupture des membranes, utérus douloureux.'],
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite haute.'],
      ['Hématome rétroplacentaire', 'Douleur utérine, saignement, HTA.'],
    ],
    etiologies: '## Germes\n- *E. coli* (70–80 %), *Klebsiella*, *Proteus*, streptocoque B, entérocoque',
    principes: [
      [
        'Bactériurie et cystite',
        'Prévenir la pyélonéphrite.',
        '- Antibiotique selon l’antibiogramme, 5 à 7 jours : **amoxicilline**, **céfixime**, **nitrofurantoïne** (éviter près du terme), **fosfomycine** dose unique\n- ECBU de contrôle 1 à 2 semaines après, puis mensuel',
      ],
      [
        'Pyélonéphrite',
        'Traitement hospitalier.',
        '- **Ceftriaxone** 1–2 g/j IV, relais oral à l’apyrexie (14 jours au total)\n- Hydratation, paracétamol, surveillance obstétricale (contractions)\n- Échographie rénale si échec ou obstacle\n- **Pas de fluoroquinolones**',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Selon l’antibiogramme'],
      ['cefixime', 'premiere', 'Cystite, relais'],
      ['nitrofurantoine', 'alternative', 'Cystite (pas en fin de grossesse)'],
      ['fosfomycine', 'alternative', 'Dose unique'],
      ['ceftriaxone', 'premiere', 'Pyélonéphrite'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Accouchement prématuré',
        fiche: 'prematurite',
        description: 'Pyélonéphrite.',
        traitement: '- Tocolyse, corticoïdes anténatals',
        clinique: '- Contractions',
        paraclinique: '',
      },
      {
        nom: 'Sepsis maternel',
        fiche: 'sepsis-et-choc-septique',
        description: 'Pyélonéphrite grave.',
        traitement: '- Antibiotiques IV, remplissage',
        clinique: '- Hypotension',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Récidives',
        description: 'Fréquentes.',
        traitement: '- ECBU mensuels',
        clinique: '',
        paraclinique: '- ECBU',
      },
    ],
    evolution: '## Pronostic\n- Bon si dépistées et traitées ; la pyélonéphrite expose à la prématurité',
    urgences: ['choc-septique'],
    symptomes: [
      ['Brûlures mictionnelles', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Douleur lombaire', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: ['- Bandelette à chaque CPN, traitement de la cystite', '- Pyélonéphrite, contractions'],
      hgr: ['- ECBU, ceftriaxone, surveillance obstétricale', ''],
      tert: ['', ''],
    },
    alertes: { 'choc-septique': 'Femme enceinte avec fièvre, douleur lombaire et hypotension ou confusion' },
    formes: [
      {
        nom: 'Bactériurie asymptomatique',
        type: 'commune',
        description: 'Découverte au dépistage.',
        terrain: '- Femme enceinte',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- ECBU ≥ 10⁵ UFC/mL',
        etiologies: '- E. coli',
        syndromes: [],
        examens: [['ecbu', 'Confirmation']],
      },
      {
        nom: 'Pyélonéphrite gravidique',
        type: 'gravite',
        description: 'Atteinte rénale.',
        terrain: '- 2e et 3e trimestres',
        fonctionnels: '- Douleur lombaire droite',
        generaux: '- Fièvre, frissons',
        physiques: '- Fosse lombaire douloureuse',
        paraclinique: '- Hyperleucocytose',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Diabète gestationnel
  {
    ...GROS,
    slug: 'diabete-gestationnel',
    nom: 'Diabète gestationnel',
    resume:
      'Hyperglycémie découverte pendant la grossesse : HGPO 75 g à 24–28 SA chez les femmes à risque ; règles hygiéno-diététiques, autosurveillance, metformine ou insuline si objectifs non atteints ; risques de macrosomie et de dystocie ; dépistage du diabète après l’accouchement.',
    definition:
      'Trouble de la tolérance glucidique apparu ou découvert pendant la grossesse, n’atteignant pas les critères du diabète franc (glycémie à jeun 0,92–1,25 g/L ou HGPO pathologique) ; un diabète franc découvert pendant la grossesse (à jeun ≥ 1,26 g/L) est un diabète préexistant.',
    physiopathologie:
      '## Mécanismes\n- Insulinorésistance physiologique (hormones placentaires) au 2e et 3e trimestres\n- Insuffisance de la sécrétion d’insuline\n- Hyperinsulinisme fœtal : macrosomie, hypoglycémie néonatale',
    diagnostic:
      '## Dépistage\n- Facteurs de risque : obésité, âge > 35 ans, antécédent de diabète gestationnel ou de macrosomie, diabète familial\n- Glycémie à jeun au 1er contact\n- **HGPO 75 g** à 24–28 SA : diabète gestationnel si à jeun ≥ 0,92, 1 h ≥ 1,80 ou 2 h ≥ 1,53 g/L',
    examens: [
      ['confirmation', 'hgpo-75g', 'Entre 24 et 28 SA.'],
      ['premiere_intention', 'glycemie', 'À jeun au 1er contact.'],
      ['suivi', 'echographie-obstetricale', 'Croissance fœtale, liquide amniotique.'],
      ['premiere_intention', 'bandelette-urinaire', 'Glycosurie, protéinurie, infection.'],
      ['suivi', 'hba1c', 'Diabète préexistant.'],
    ],
    scores: ['imc'],
    differentiels: [
      ['diabete-type-2', 'Glycémie à jeun ≥ 1,26 g/L : diabète préexistant.'],
      ['diabete-type-1-adulte', 'Cétose, sujet jeune mince.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Surpoids, obésité, âge, antécédents familiaux de diabète\n- Antécédent de diabète gestationnel, de macrosomie, de mort fœtale',
    principes: [
      [
        'Mesures hygiéno-diététiques',
        'Atteindre les objectifs glycémiques.',
        '- Alimentation fractionnée (3 repas + 2–3 collations), limitation des sucres rapides, aliments à index glycémique bas\n- Activité physique 30 min/jour (marche)\n- Autosurveillance : à jeun < 0,95 g/L, 1 h après le repas < 1,40 g/L (ou 2 h < 1,20 g/L)',
      ],
      [
        'Traitement médicamenteux',
        'Si objectifs non atteints en 1 à 2 semaines.',
        '- **Insuline** (NPH ± rapide), traitement de référence\n- **Metformine** acceptable selon les recommandations\n- Pas de sulfamides',
      ],
      [
        'Accouchement et post-partum',
        'Prévenir les complications.',
        '- Surveillance de la croissance fœtale, accouchement vers 39–40 SA (plus tôt si mal équilibré)\n- Glycémie du nouveau-né (hypoglycémie)\n- Allaitement encouragé\n- **Glycémie ou HGPO 6 à 12 semaines après l’accouchement**, puis dépistage régulier du diabète de type 2',
      ],
    ],
    molecules: [
      ['insuline-nph', 'premiere', 'Insuline basale'],
      ['insuline-humaine-rapide', 'premiere', 'Bolus'],
      ['metformine', 'alternative', 'Selon les recommandations'],
      ['acide-folique', 'adjuvant', 'Supplémentation'],
    ],
    complications: [
      {
        nom: 'Macrosomie et dystocie des épaules',
        description: 'Hyperinsulinisme fœtal.',
        traitement: '- Équilibre glycémique, accouchement adapté',
        clinique: '- Hauteur utérine excessive',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Hypoglycémie néonatale',
        fiche: 'hypoglycemie-neonatale',
        description: 'Hyperinsulinisme.',
        traitement: '- Allaitement précoce, glucose',
        clinique: '- Trémulations',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Pré-éclampsie',
        fiche: 'pre-eclampsie-severe',
        description: 'Risque accru.',
        traitement: '- Surveillance',
        clinique: '- HTA',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Diabète de type 2 ultérieur',
        fiche: 'diabete-type-2',
        description: '50 % à 10 ans.',
        traitement: '- Dépistage, prévention',
        clinique: '',
        paraclinique: '- Glycémie',
      },
    ],
    evolution:
      '## Pronostic\n- Disparition après l’accouchement, mais risque élevé de récidive et de diabète de type 2',
    urgences: [],
    symptomes: [['Polyurie-polydipsie', 'rare']],
    sources: [
      'ADA — Standards of Care in Diabetes',
      'FIGO — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Glycémie au 1er contact, conseils diététiques, orientation', '- Diabète gestationnel confirmé'],
      hgr: ['- HGPO, insuline, surveillance fœtale, accouchement', ''],
      tert: ['- Endocrinologie, médecine fœto-maternelle', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Diabète gestationnel sous régime',
        type: 'commune',
        description: 'Équilibré par les mesures hygiéno-diététiques.',
        terrain: '- Femme en surpoids, 2e trimestre',
        fonctionnels: '',
        generaux: '',
        physiques: '- Prise de poids',
        paraclinique: '- HGPO pathologique',
        etiologies: '- Insulinorésistance',
        syndromes: [],
        examens: [['hgpo-75g', 'Diagnostic']],
      },
      {
        nom: 'Diabète gestationnel insulinorequérant',
        type: 'gravite',
        description: 'Objectifs non atteints.',
        terrain: '- Obésité, diabète familial',
        fonctionnels: '',
        generaux: '',
        physiques: '- Hauteur utérine excessive',
        paraclinique: '- Macrosomie, hydramnios',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
