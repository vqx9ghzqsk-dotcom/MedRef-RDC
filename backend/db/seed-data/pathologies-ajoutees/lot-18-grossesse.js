'use strict';

/**
 * Lot 18 (grossesse) — drépanocytose et grossesse, saignements du premier trimestre,
 * fièvre pendant la grossesse, nutrition et supplémentation pendant la grossesse.
 * Rédigé par IA (OMS, RCOG, ACOG, FIGO) : à valider.
 */

const GROS = { departement: 'gynecologie-obstetrique', specialite: 'Grossesse' };

module.exports = [
  // =================================================================== Drépanocytose et grossesse
  {
    ...GROS,
    slug: 'drepanocytose-et-grossesse',
    nom: 'Drépanocytose et grossesse',
    resume:
      'Grossesse à haut risque (crises, syndrome thoracique aigu, infections, pré-éclampsie, thromboses, retard de croissance, mortalité maternelle) : suivi conjoint, acide folique 5 mg, arrêt de l’hydroxycarbamide, prévention du paludisme, transfusion selon les complications, thromboprophylaxie, accouchement en structure.',
    definition:
      'Grossesse chez une femme atteinte de drépanocytose (SS, SC, S-bêta-thalassémie), associée à une augmentation importante des complications maternelles et fœtales.',
    physiopathologie:
      '## Mécanismes\n- Grossesse : hypercoagulabilité, besoins accrus en folates, aggravation de l’anémie\n- Crises vaso-occlusives plus fréquentes, syndrome thoracique aigu\n- Vasculopathie placentaire : retard de croissance, pré-éclampsie, mort fœtale',
    diagnostic:
      '## Suivi\n- Consultation préconceptionnelle (arrêt de l’hydroxycarbamide 3 mois avant, acide folique 5 mg)\n- Électrophorèse du partenaire (risque d’enfant SS), conseil génétique\n- Hb, ferritine, fonction rénale, protéinurie, PA à chaque visite\n- Échographies de croissance mensuelles à partir de 24 SA\n- Recherche d’infections (urinaires, paludisme)',
    examens: [
      ['confirmation', 'electrophorese-hb', 'Type de drépanocytose ; dépistage du partenaire.'],
      ['premiere_intention', 'nfs', 'Hb de base, réticulocytes.'],
      ['premiere_intention', 'ecbu', 'Bactériurie (fréquente).'],
      ['premiere_intention', 'proteinurie', 'Pré-éclampsie, néphropathie.'],
      ['suivi', 'echographie-obstetricale', 'Croissance fœtale.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
      ['pretherapeutique', 'groupage-rai', 'Allo-immunisation (transfusions antérieures).'],
      ['etiologique', 'ferritine', 'Carence ou surcharge en fer.'],
    ],
    scores: [],
    differentiels: [
      ['anemie-de-la-grossesse', 'Anémie d’autre cause.'],
      ['pre-eclampsie-severe', 'HTA et protéinurie.'],
    ],
    etiologies:
      '## Facteurs d’aggravation\n- Forme SS, antécédents de syndrome thoracique ou d’AVC\n- Paludisme, infections, déshydratation, anémie',
    principes: [
      [
        'Suivi spécialisé',
        'Réduire les complications.',
        '- Suivi conjoint obstétricien-hématologue, CPN rapprochées\n- **Acide folique 5 mg/j**, fer seulement si carence prouvée\n- **Arrêt de l’hydroxycarbamide** (tératogène)\n- **Aspirine** 75–150 mg dès 12 SA (prévention de la pré-éclampsie)\n- Prévention du paludisme (moustiquaire, TPI selon le programme), pénicilline, vaccinations',
      ],
      [
        'Crises et complications',
        'Traiter rapidement.',
        '- Crise douloureuse : hydratation, paracétamol, **morphine** (pas d’AINS après 20 SA et en fin de grossesse)\n- Syndrome thoracique aigu : oxygène, antibiotiques, transfusion\n- **Transfusion** si anémie sévère, complications aiguës ; programme transfusionnel selon les antécédents\n- **Thromboprophylaxie** (énoxaparine) en cas d’hospitalisation et dans le post-partum',
      ],
      [
        'Accouchement',
        'Sécuriser.',
        '- En structure avec banque de sang, vers 38–39 SA\n- Hydratation, oxygène, réchauffement, analgésie\n- Post-partum : surveillance rapprochée (période à haut risque)',
      ],
    ],
    molecules: [
      ['acide-folique', 'premiere', '5 mg/j'],
      ['acide-acetylsalicylique', 'premiere', 'Prévention de la pré-éclampsie'],
      ['morphine', 'premiere', 'Crise douloureuse'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['enoxaparine', 'adjuvant', 'Thromboprophylaxie'],
      ['phenoxymethylpenicilline', 'adjuvant', 'Prophylaxie anti-infectieuse'],
      ['sulfadoxine', 'adjuvant', 'TPI (avec pyriméthamine)'],
    ],
    complications: [
      {
        nom: 'Syndrome thoracique aigu',
        fiche: 'syndrome-thoracique-aigu-drepanocytaire',
        description: 'Grave pendant la grossesse.',
        traitement: '- Oxygène, antibiotiques, transfusion',
        clinique: '- Douleur thoracique, fièvre',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Pré-éclampsie',
        fiche: 'pre-eclampsie-severe',
        description: 'Risque accru.',
        traitement: '- Prise en charge spécialisée',
        clinique: '- HTA',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Retard de croissance et mort fœtale',
        description: 'Vasculopathie placentaire.',
        traitement: '- Surveillance, extraction',
        clinique: '',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Thromboses',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Hypercoagulabilité.',
        traitement: '- Anticoagulation',
        clinique: '- Œdème d’un membre',
        paraclinique: '- Doppler',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité maternelle et périnatale élevée sans suivi spécialisé ; nettement réduite par une prise en charge organisée',
    urgences: ['crise-drepanocytaire-grave'],
    symptomes: [
      ['Douleurs osseuses', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Ictère', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Douleur thoracique', 'occasionnel'],
    ],
    sources: [
      'RCOG — recommandations de pratique clinique',
      'Evidence-Based Management of Sickle Cell Disease: Expert Panel Report',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Repérage, acide folique, prévention du paludisme, orientation précoce',
        '- Toute femme drépanocytaire enceinte',
      ],
      hgr: ['- Suivi rapproché, transfusion, accouchement', '- Complications graves'],
      tert: ['- Centre de référence, réanimation', ''],
    },
    alertes: {
      'crise-drepanocytaire-grave':
        'Femme enceinte drépanocytaire avec douleur thoracique, dyspnée, fièvre ou douleur intense',
    },
    formes: [
      {
        nom: 'Grossesse chez une femme SS',
        type: 'commune',
        description: 'Suivi à haut risque.',
        terrain: '- Drépanocytose SS',
        fonctionnels: '- Fatigue, crises plus fréquentes',
        generaux: '',
        physiques: '- Pâleur, subictère',
        paraclinique: '- Hb 6–9 g/dL',
        etiologies: '- Drépanocytose',
        syndromes: ['syndrome-anemique', 'syndrome-vaso-occlusif'],
        examens: [['nfs', 'Hb de base']],
      },
    ],
  },

  // =================================================================== Saignements T1
  {
    ...GROS,
    slug: 'saignements-premier-trimestre',
    nom: 'Saignements du premier trimestre (démarche)',
    resume:
      'Saignement avant 14 SA : éliminer d’abord la grossesse extra-utérine (choc, douleur, β-hCG, échographie) ; causes : menace d’avortement, avortement en cours ou incomplet, môle hydatiforme ; immunoglobulines anti-D si rhésus négatif.',
    definition:
      'Saignement vaginal survenant pendant les 13 premières semaines d’aménorrhée, symptôme fréquent (20 à 25 % des grossesses) dont la gravité dépend de la cause.',
    physiopathologie:
      '## Causes\n- **Grossesse extra-utérine** (urgence vitale)\n- **Avortement spontané** : menace, inévitable, incomplet, complet, rétention (grossesse arrêtée)\n- **Môle hydatiforme**\n- Saignements bénins : décollement trophoblastique, lésions du col, infections',
    diagnostic:
      '## Démarche\n- **Signes de choc** ? (pouls, PA, pâleur) : réanimation, suspicion de GEU rompue\n- Âge gestationnel, douleur, abondance, débris\n- Examen au spéculum (col ouvert ou fermé, produits de conception), toucher vaginal\n- **β-hCG** et **échographie** (grossesse intra-utérine, vitalité, masse annexielle, épanchement)\n\n## Orientation\n- Col fermé + embryon vivant : menace d’avortement\n- Col ouvert : avortement inévitable ou incomplet\n- Utérus vide + β-hCG > seuil + épanchement : GEU\n- Utérus trop grand, β-hCG très élevée, aspect en flocons de neige : môle',
    examens: [
      ['confirmation', 'beta-hcg', 'Grossesse, cinétique.'],
      ['confirmation', 'echographie-pelvienne', 'Localisation, vitalité, môle, épanchement.'],
      ['premiere_intention', 'nfs', 'Retentissement.'],
      ['premiere_intention', 'groupage-rai', 'Rhésus (anti-D), transfusion.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['grossesse-extra-uterine', 'Douleur, utérus vide, masse annexielle, choc.'],
      ['avortement-spontane', 'Contractions, col ouvert, débris.'],
      ['Môle hydatiforme', 'Vomissements intenses, utérus trop gros, β-hCG très élevée.'],
      ['Lésions du col (polype, cancer, cervicite)', 'Examen au spéculum.'],
    ],
    etiologies:
      '## Facteurs\n- Antécédents d’IST, de GEU, de chirurgie tubaire\n- Âge, anomalies chromosomiques, paludisme, avortement provoqué clandestin',
    principes: [
      [
        'Urgence',
        'Traiter le choc.',
        '- 2 voies veineuses, remplissage, groupage, transfusion\n- GEU rompue : chirurgie en urgence (fiche *Grossesse extra-utérine*)',
      ],
      [
        'Selon la cause',
        'Prise en charge adaptée.',
        '- Menace d’avortement : repos relatif, pas de traitement prouvé, surveillance\n- Avortement incomplet : **misoprostol** ou aspiration manuelle intra-utérine (fiche dédiée)\n- Môle : aspiration, suivi de la β-hCG jusqu’à négativation, contraception',
      ],
      [
        'Mesures associées',
        'Prévenir les complications.',
        '- **Immunoglobulines anti-D** si rhésus négatif\n- Soutien psychologique, planification familiale',
      ],
    ],
    molecules: [
      ['misoprostol', 'premiere', 'Avortement incomplet'],
      ['immunoglobulines-anti-d', 'premiere', 'Rhésus négatif'],
      ['ringer-lactate', 'premiere', 'Choc'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        description: 'GEU rompue, avortement hémorragique.',
        traitement: '- Remplissage, transfusion, chirurgie',
        clinique: '- Pâleur, pouls rapide',
        paraclinique: '- Hb',
      },
      {
        nom: 'Infection',
        fiche: 'avortement-incomplet-soins-apres-avortement',
        description: 'Rétention.',
        traitement: '- Évacuation, antibiotiques',
        clinique: '- Fièvre, pertes malodorantes',
        paraclinique: '',
      },
      {
        nom: 'Allo-immunisation rhésus',
        description: 'Rhésus négatif non protégé.',
        traitement: '- Anti-D',
        clinique: '',
        paraclinique: '- RAI',
      },
    ],
    evolution:
      '## Pronostic\n- La moitié des menaces d’avortement évoluent favorablement ; la GEU reste une cause importante de décès maternel du 1er trimestre',
    urgences: ['grossesse-extra-uterine-rompue'],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Aménorrhée', 'tres_frequent'],
      ['Hypotension', 'occasionnel'],
      ['Syncope', 'occasionnel'],
    ],
    sources: [
      'RCOG Green-top Guideline No. 21: Diagnosis and Management of Ectopic Pregnancy',
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Évaluation, signes de choc, test de grossesse, misoprostol, transfert',
        '- Choc, douleur, suspicion de GEU ou de môle',
      ],
      hgr: ['- Échographie, AMIU, chirurgie, transfusion', ''],
      tert: ['- Prise en charge de la môle et de ses complications', ''],
    },
    alertes: {
      'grossesse-extra-uterine-rompue': 'Retard de règles avec douleur abdominale, malaise ou choc',
    },
    formes: [
      {
        nom: 'Menace d’avortement',
        type: 'commune',
        description: 'Saignement modéré, col fermé.',
        terrain: '- 1er trimestre',
        fonctionnels: '- Saignement, légères douleurs',
        generaux: '',
        physiques: '- Col fermé, utérus conforme',
        paraclinique: '- Embryon vivant',
        etiologies: '',
        syndromes: [],
        examens: [['echographie-pelvienne', 'Vitalité']],
      },
      {
        nom: 'Saignement avec choc',
        type: 'gravite',
        description: 'GEU rompue ou avortement hémorragique.',
        terrain: '- Retard de règles',
        fonctionnels: '- Douleur intense, malaise',
        generaux: '- Pâleur, tachycardie, hypotension',
        physiques: '- Défense, cri du Douglas',
        paraclinique: '- Épanchement abondant',
        etiologies: '',
        syndromes: ['syndrome-d-hemorragie-interne', 'syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Fièvre grossesse
  {
    ...GROS,
    slug: 'fievre-pendant-la-grossesse',
    nom: 'Fièvre pendant la grossesse',
    resume:
      'Fièvre chez une femme enceinte : paludisme (TDR systématique), pyélonéphrite, chorioamniotite, listériose, infections respiratoires, typhoïde ; traiter la cause sans délai, paracétamol, surveillance fœtale.',
    definition:
      'Température ≥ 38 °C pendant la grossesse, symptôme nécessitant une recherche étiologique systématique en raison des risques maternels (sepsis) et fœtaux (fausse couche, prématurité, infection fœtale).',
    physiopathologie:
      '## Mécanismes\n- Immunité modifiée par la grossesse, séquestration placentaire du paludisme\n- Infections ascendantes (chorioamniotite) après rupture des membranes\n- Fièvre élevée : contractions, souffrance fœtale',
    diagnostic:
      '## Démarche\n- **TDR paludisme** systématique\n- Signes urinaires et douleur lombaire : **pyélonéphrite** (ECBU)\n- Rupture des membranes, liquide fétide, utérus douloureux, tachycardie fœtale : **chorioamniotite**\n- Toux, dyspnée : pneumonie, COVID-19, grippe\n- Ictère : hépatite (E), paludisme ; diarrhée : listériose, typhoïde\n- Signes de sepsis\n- Bien-être fœtal (BCF, mouvements)',
    examens: [
      ['premiere_intention', 'tdr-paludisme', 'Systématique.'],
      ['premiere_intention', 'ecbu', 'Pyélonéphrite.'],
      ['premiere_intention', 'nfs', 'Infection, anémie.'],
      ['premiere_intention', 'crp', 'Infection.'],
      ['gravite', 'hemocultures', 'Sepsis, listériose.'],
      ['premiere_intention', 'bandelette-urinaire', 'Infection urinaire.'],
      ['suivi', 'cardiotocographie', 'Bien-être fœtal.'],
      ['etiologique', 'radiographie-thoracique', 'Pneumonie (avec protection abdominale).'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['paludisme-et-grossesse', 'TDR positif.'],
      ['infections-urinaires-de-la-grossesse', 'Douleur lombaire, ECBU.'],
      ['hepatites-virales-aigues-a-et-e', 'Ictère, transaminases élevées.'],
      ['fievre-typhoide', 'Fièvre prolongée, hémocultures.'],
    ],
    etiologies:
      '## Causes\n- Paludisme (première cause)\n- Pyélonéphrite, chorioamniotite, endométrite du post-partum\n- Infections respiratoires, typhoïde, listériose, hépatites, VIH',
    principes: [
      [
        'Mesures générales',
        'Protéger la mère et le fœtus.',
        '- **Paracétamol** (pas d’AINS ni d’aspirine à dose anti-inflammatoire), hydratation\n- Surveillance des BCF et des contractions',
      ],
      [
        'Traitement de la cause',
        'Sans délai.',
        '- Paludisme : selon le trimestre (fiche dédiée)\n- Pyélonéphrite : **ceftriaxone**\n- Chorioamniotite : **ampicilline** + **gentamicine** et extraction fœtale\n- Listériose : amoxicilline forte dose\n- Sepsis : antibiotiques dans l’heure, remplissage',
      ],
      [
        'Signes d’alerte',
        'Orienter.',
        '- Fièvre avec choc, troubles de conscience, détresse respiratoire, rupture des membranes, contractions : hospitalisation',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Fièvre'],
      ['ceftriaxone', 'premiere', 'Pyélonéphrite, sepsis'],
      ['ampicilline', 'premiere', 'Chorioamniotite, listériose'],
      ['gentamicine', 'premiere', 'Chorioamniotite'],
      ['amoxicilline', 'alternative', 'Listériose'],
      ['artemether', 'premiere', 'Paludisme (2e–3e trimestres, avec luméfantrine)'],
    ],
    complications: [
      {
        nom: 'Sepsis maternel',
        fiche: 'sepsis-et-choc-septique',
        description: 'Pyélonéphrite, chorioamniotite.',
        traitement: '- Antibiotiques, remplissage',
        clinique: '- Hypotension',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Accouchement prématuré',
        fiche: 'menace-accouchement-premature',
        description: 'Fièvre, infection.',
        traitement: '- Traitement de la cause',
        clinique: '- Contractions',
        paraclinique: '',
      },
      {
        nom: 'Mort fœtale',
        description: 'Infection, fièvre élevée.',
        traitement: '- Prise en charge obstétricale',
        clinique: '- Arrêt des mouvements',
        paraclinique: '- Échographie',
      },
    ],
    evolution: '## Pronostic\n- Bon si la cause est rapidement traitée',
    urgences: ['paludisme-grave-urgence', 'choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Frissons', 'frequent'],
      ['Brûlures mictionnelles', 'occasionnel'],
      ['Contractions utérines', 'occasionnel'],
    ],
    sources: [
      'WHO guidelines for malaria',
      'Normes et directives de santé de la reproduction',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- TDR, bandelette, paracétamol, traitement du paludisme simple, transfert si signe de gravité',
        '- Gravité, chorioamniotite, pyélonéphrite',
      ],
      hgr: ['- Bilan, antibiotiques IV, surveillance fœtale', ''],
      tert: ['- Réanimation', ''],
    },
    alertes: {
      'paludisme-grave-urgence': 'Femme enceinte fébrile prostrée, confuse ou convulsant',
      'choc-septique': 'Femme enceinte fébrile avec hypotension ou extrémités froides',
    },
    formes: [
      {
        nom: 'Fièvre palustre de la grossesse',
        type: 'commune',
        description: 'Cause la plus fréquente.',
        terrain: '- Zone d’endémie',
        fonctionnels: '- Céphalées, frissons',
        generaux: '- Fièvre',
        physiques: '- Pâleur',
        paraclinique: '- TDR positif',
        etiologies: '- P. falciparum',
        syndromes: ['syndrome-infectieux'],
        examens: [['tdr-paludisme', 'Systématique']],
      },
      {
        nom: 'Chorioamniotite',
        type: 'etiologique',
        description: 'Infection intra-amniotique.',
        terrain: '- Rupture prolongée des membranes',
        fonctionnels: '- Douleurs abdominales',
        generaux: '- Fièvre, tachycardie',
        physiques: '- Utérus sensible, liquide fétide, tachycardie fœtale',
        paraclinique: '- Hyperleucocytose',
        etiologies: '- Bactéries vaginales',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Nutrition grossesse
  {
    ...GROS,
    slug: 'nutrition-supplementation-grossesse',
    nom: 'Nutrition et supplémentation pendant la grossesse',
    resume:
      'Alimentation diversifiée (un repas supplémentaire par jour), fer-acide folique quotidien, calcium si apports faibles, iode (sel iodé), déparasitage ; surveillance du poids et du PB ; supplémentation énergétique et protéique si dénutrition (PB < 23 cm).',
    definition:
      'Ensemble des mesures nutritionnelles recommandées pendant la grossesse pour couvrir les besoins accrus de la mère et du fœtus et prévenir l’anémie, le faible poids de naissance et les malformations.',
    physiopathologie:
      '## Besoins\n- Énergie : +300 kcal/j aux 2e et 3e trimestres\n- Fer (doublement), acide folique (tube neural), iode (développement cérébral), calcium, protéines\n- Dénutrition maternelle : petit poids de naissance, anémie, complications',
    diagnostic:
      '## Évaluation\n- Poids, taille, IMC avant grossesse, **périmètre brachial** (PB < 23 cm : dénutrition)\n- Prise de poids attendue : 11,5–16 kg (IMC normal)\n- Interrogatoire alimentaire, interdits alimentaires, pica (géophagie)\n- Hb',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Poids, PB.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['etiologique', 'examen-parasitologique-selles', 'Helminthiases.'],
    ],
    scores: ['imc'],
    differentiels: [
      ['anemie-de-la-grossesse', 'Anémie installée.'],
      ['Hyperemesis gravidarum', 'Vomissements incoercibles, perte de poids.'],
    ],
    etiologies:
      '## Facteurs de dénutrition\n- Pauvreté, insécurité alimentaire, interdits alimentaires\n- Grossesses rapprochées, adolescence, VIH, tuberculose, parasitoses',
    principes: [
      [
        'Conseils alimentaires',
        'Couvrir les besoins.',
        '- Un repas supplémentaire par jour, aliments variés : céréales, légumineuses, légumes verts (pondu), fruits, poisson, œufs, viande, produits laitiers\n- Sel iodé, eau potable\n- Éviter l’alcool, limiter le café ; viande et œufs bien cuits',
      ],
      [
        'Supplémentations',
        'Prévenir les carences.',
        '- **Fer 30–60 mg + acide folique 0,4 mg** par jour pendant toute la grossesse\n- **Calcium** 1,5–2 g/j si apports faibles (prévention de la pré-éclampsie)\n- **Mébendazole** ou albendazole au 2e trimestre\n- Pas de fortes doses de vitamine A (sauf carence avérée selon le programme)\n- Micronutriments multiples selon le programme national',
      ],
      [
        'Dénutrition',
        'Soutien nutritionnel.',
        '- PB < 23 cm : supplémentation énergétique et protéique (farines enrichies, ASPE selon le programme)\n- Prise en charge des causes (VIH, tuberculose)',
      ],
    ],
    molecules: [
      ['fumarate-ferreux-fer', 'premiere', '30–60 mg/j'],
      ['acide-folique', 'premiere', '0,4 mg/j'],
      ['calcium', 'premiere', 'Apports faibles'],
      ['carbonate-de-calcium', 'alternative', 'Supplémentation calcique'],
      ['mebendazole', 'adjuvant', 'Déparasitage'],
      ['iode', 'adjuvant', 'Zones de carence'],
      ['multivitamines', 'adjuvant', 'Micronutriments multiples'],
    ],
    complications: [
      {
        nom: 'Anémie',
        fiche: 'anemie-de-la-grossesse',
        description: 'Carence en fer.',
        traitement: '- Fer',
        clinique: '- Pâleur',
        paraclinique: '- Hb',
      },
      {
        nom: 'Faible poids de naissance',
        fiche: 'faible-poids-naissance-methode-kangourou',
        description: 'Dénutrition maternelle.',
        traitement: '- Supplémentation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Anomalies du tube neural',
        description: 'Carence en folates.',
        traitement: '- Acide folique avant la conception',
        clinique: '',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Bénéfices\n- La supplémentation réduit l’anémie maternelle et le faible poids de naissance',
    urgences: [],
    symptomes: [
      ['Asthénie', 'frequent'],
      ['Pâleur', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: ['- Conseils, fer-acide folique, calcium, déparasitage, PB', '- Dénutrition sévère, anémie sévère'],
      hgr: ['- Prise en charge de la dénutrition et des causes', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Femme enceinte bien nourrie',
        type: 'commune',
        description: 'Prévention.',
        terrain: '- Toute femme enceinte',
        fonctionnels: '',
        generaux: '',
        physiques: '- Prise de poids normale',
        paraclinique: '- Hb normale',
        etiologies: '',
        syndromes: [],
        examens: [['anthropometrie', 'Suivi']],
      },
      {
        nom: 'Femme enceinte dénutrie',
        type: 'gravite',
        description: 'PB < 23 cm.',
        terrain: '- Adolescente, insécurité alimentaire',
        fonctionnels: '- Fatigue',
        generaux: '- Maigreur',
        physiques: '- PB bas, prise de poids insuffisante',
        paraclinique: '- Anémie',
        etiologies: '- Apports insuffisants',
        syndromes: [],
      },
    ],
  },
];
