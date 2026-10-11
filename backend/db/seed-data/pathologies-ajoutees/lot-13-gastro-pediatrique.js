'use strict';

/**
 * Lot 13 (gastro-entérologie pédiatrique) — diarrhée persistante, dysenterie, hépatites
 * virales et vomissements de l'enfant. Rédigé par IA (OMS, PCIME, ESPGHAN) : à valider.
 */

const GASTROPED = { departement: 'pediatrie', specialite: 'Gastro-entérologie pédiatrique' };

module.exports = [
  // =================================================================== Diarrhée persistante
  {
    ...GASTROPED,
    slug: 'diarrhee-persistante-enfant',
    nom: 'Diarrhée persistante de l’enfant',
    resume:
      'Diarrhée ≥ 14 jours : risque de malnutrition et de décès ; évaluer la déshydratation et l’état nutritionnel, dépister le VIH ; alimentation adaptée (allaitement, réduction du lait animal), zinc, vitamine A, multivitamines, traitement des causes.',
    definition:
      'Épisode de diarrhée d’origine présumée infectieuse débutant de façon aiguë et durant 14 jours ou plus ; « grave » s’il existe une déshydratation (PCIME).',
    physiopathologie:
      '## Mécanismes\n- Lésions persistantes de la muqueuse intestinale, malabsorption (intolérance secondaire au lactose)\n- Cercle vicieux diarrhée-malnutrition, carences en zinc et vitamine A\n- Infections : Cryptosporidium, Giardia, E. coli entéroagrégatif, Shigella ; VIH',
    diagnostic:
      '## Évaluation (PCIME)\n- Durée ≥ 14 jours, présence de sang\n- **Déshydratation** (plans A, B, C)\n- **État nutritionnel** : poids pour taille, PB, œdèmes\n- Signes de VIH, tuberculose\n\n## Classification\n- **Diarrhée persistante grave** (avec déshydratation) : réhydrater puis référer\n- **Diarrhée persistante** (sans déshydratation) : conseils alimentaires, zinc, vitamine A, revoir à 5 jours',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Malnutrition associée.'],
      ['premiere_intention', 'tdr-vih', 'Systématique.'],
      ['etiologique', 'examen-parasitologique-selles', 'Giardia, amibes, cryptosporidies.'],
      ['etiologique', 'coproculture', 'Sang dans les selles.'],
      ['gravite', 'ionogramme', 'Déshydratation, hypokaliémie.'],
      ['gravite', 'glycemie', 'Malnutrition.'],
    ],
    scores: ['deshydratation-oms'],
    differentiels: [
      ['diarrhee-aigue-enfant', 'Durée < 14 jours.'],
      ['infection-vih-enfant', 'Diarrhée chronique avec retard de croissance.'],
      ['malnutrition-aigue-severe', 'Diarrhée associée à la malnutrition : protocole PCIMA.'],
      ['Maladie cœliaque, mucoviscidose', 'Rares, diarrhée chronique dès la diversification.'],
    ],
    etiologies:
      '## Causes\n- Infections entériques (Cryptosporidium, Giardia, E. coli, Shigella)\n- VIH, malnutrition, déficit en zinc\n- Intolérance secondaire au lactose, alimentation inadaptée (biberons sales)',
    principes: [
      [
        'Réhydratation',
        'Corriger les pertes.',
        '- **SRO** selon le plan adapté ; ReSoMal si malnutrition sévère',
      ],
      [
        'Alimentation',
        'Rompre le cercle vicieux.',
        '- **Poursuivre l’allaitement**, l’augmenter\n- Réduire le lait animal de moitié ou le remplacer par des produits fermentés (yaourt), bouillies enrichies\n- 6 repas par jour, aliments riches en énergie',
      ],
      [
        'Micronutriments',
        'Favoriser la guérison.',
        '- **Zinc** 10–20 mg/j 10–14 jours\n- **Vitamine A**, **multivitamines** et minéraux 14 jours',
      ],
      [
        'Causes',
        'Traiter spécifiquement.',
        '- Sang dans les selles : antibiotique (ciprofloxacine)\n- Giardiase, amibiase : **métronidazole**\n- VIH : TARV, cotrimoxazole\n- Pas d’antibiotique systématique',
      ],
    ],
    molecules: [
      ['sro', 'premiere', 'Réhydratation'],
      ['resomal', 'alternative', 'Malnutrition sévère'],
      ['zinc', 'premiere', '10–14 jours'],
      ['vitamine-a-retinol', 'premiere', 'Supplémentation'],
      ['multivitamines', 'premiere', '14 jours'],
      ['metronidazole', 'adjuvant', 'Giardiase, amibiase'],
      ['ciprofloxacine', 'adjuvant', 'Sang dans les selles'],
    ],
    complications: [
      {
        nom: 'Malnutrition aiguë sévère',
        fiche: 'malnutrition-aigue-severe',
        description: 'Pertes et apports insuffisants.',
        traitement: '- PCIMA',
        clinique: '- Émaciation, œdèmes',
        paraclinique: '- PB',
      },
      {
        nom: 'Déshydratation et troubles ioniques',
        fiche: 'dyskaliemies',
        description: 'Pertes prolongées.',
        traitement: '- SRO, correction',
        clinique: '- Faiblesse',
        paraclinique: '- Ionogramme',
      },
      {
        nom: 'Infections systémiques',
        fiche: 'sepsis-enfant',
        description: 'Malnutrition, VIH.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, léthargie',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Responsable d’une part importante des décès par diarrhée ; bon pronostic avec une prise en charge nutritionnelle',
    urgences: ['deshydratation-severe-enfant'],
    symptomes: [
      ['Diarrhée', 'tres_frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Retard de croissance', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
    ],
    sources: [
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'The treatment of diarrhoea: a manual for physicians and other senior health workers',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Conseils alimentaires, SRO, zinc, vitamine A, test VIH, suivi à 5 jours',
        '- Déshydratation, malnutrition sévère, < 6 mois',
      ],
      hgr: ['- Prise en charge nutritionnelle, recherche de causes', ''],
      tert: ['- Gastro-entérologie pédiatrique', ''],
    },
    alertes: {
      'deshydratation-severe-enfant':
        'Enfant avec diarrhée prolongée devenu léthargique, incapable de boire, pli cutané très lent',
    },
    formes: [
      {
        nom: 'Diarrhée persistante sans déshydratation',
        type: 'commune',
        description: 'Diarrhée ≥ 14 jours.',
        terrain: '- Nourrisson de 6 à 24 mois',
        fonctionnels: '- Selles liquides répétées',
        generaux: '- Perte de poids',
        physiques: '- Pas de signe de déshydratation',
        paraclinique: '- Selles',
        etiologies: '- Infections entériques',
        syndromes: [],
        examens: [['anthropometrie', 'État nutritionnel']],
      },
      {
        nom: 'Diarrhée persistante grave',
        type: 'gravite',
        description: 'Avec déshydratation.',
        terrain: '- Malnutrition, VIH',
        fonctionnels: '- Diarrhée abondante',
        generaux: '- Soif, léthargie',
        physiques: '- Yeux enfoncés, pli cutané',
        paraclinique: '- Troubles ioniques',
        etiologies: '',
        syndromes: ['syndrome-de-deshydratation-extracellulaire'],
      },
    ],
  },

  // =================================================================== Dysenterie
  {
    ...GASTROPED,
    slug: 'dysenterie-enfant',
    nom: 'Dysenterie de l’enfant',
    resume:
      'Diarrhée avec sang visible chez l’enfant : surtout Shigella ; ciprofloxacine 3 jours (ou ceftriaxone si grave), SRO, zinc, alimentation ; revoir à 2 jours ; hospitaliser le nourrisson, le malnutri et les formes graves.',
    definition:
      'Diarrhée contenant du sang visible, d’origine infectieuse, principalement due à *Shigella* chez l’enfant de moins de 5 ans.',
    physiopathologie:
      '## Mécanismes\n- Invasion de la muqueuse colique : ulcérations, sang et glaires\n- Toxine Shiga : syndrome hémolytique et urémique\n- Pertes protéiques, anorexie : malnutrition',
    diagnostic:
      '## Clinique\n- Selles sanglantes, glaireuses, fréquentes et de faible volume\n- Fièvre, douleurs abdominales, ténesme\n- Évaluer la déshydratation et l’état nutritionnel\n\n## Signes de gravité\n- Nourrisson < 2 mois, malnutrition sévère, déshydratation, léthargie, convulsions, prolapsus rectal\n- Oligurie, pâleur (syndrome hémolytique et urémique)',
    examens: [
      ['premiere_intention', 'coproculture', 'Shigella et antibiogramme (épidémies).'],
      ['etiologique', 'examen-parasitologique-selles', 'Amibes (enfant plus grand).'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
      ['gravite', 'nfs', 'Anémie, thrombopénie (SHU).'],
      ['gravite', 'creatinine', 'Syndrome hémolytique et urémique.'],
    ],
    scores: ['deshydratation-oms'],
    differentiels: [
      ['amibiase-intestinale', 'Enfant > 5 ans, trophozoïtes hématophages.'],
      [
        'Invagination intestinale aiguë',
        'Nourrisson, crises de pleurs, selles « gelée de groseille », masse.',
      ],
      ['schistosomiase-hepatosplenique', 'Diarrhée sanglante chronique, œufs de S. mansoni.'],
      ['Entérocolite nécrosante', 'Nouveau-né, prématuré.'],
    ],
    etiologies:
      '## Germes\n- ***Shigella*** (première cause), *Campylobacter*, *Salmonella*, *E. coli* entéro-invasif et entérohémorragique\n- *Entamoeba histolytica* (moins fréquent chez le jeune enfant)',
    principes: [
      [
        'Antibiotique',
        'Traiter la shigellose.',
        '- **Ciprofloxacine** 15 mg/kg 2 fois par jour 3 jours\n- Forme grave ou nourrisson : **ceftriaxone** 50–80 mg/kg/j 3 à 5 jours\n- Alternatives selon la sensibilité : **azithromycine**\n- Métronidazole seulement si amibes confirmées',
      ],
      [
        'Réhydratation et alimentation',
        'Prévenir la malnutrition.',
        '- **SRO**, plan adapté\n- Alimentation et allaitement poursuivis\n- **Zinc** 10–14 jours',
      ],
      [
        'Suivi',
        'Vérifier l’efficacité.',
        '- Revoir à 2 jours : si pas d’amélioration, changer d’antibiotique ou référer\n- Hospitaliser : < 2 mois, malnutrition, déshydratation, signes de gravité',
      ],
    ],
    molecules: [
      ['ciprofloxacine', 'premiere', '3 jours'],
      ['ceftriaxone', 'premiere', 'Forme grave'],
      ['azithromycine', 'alternative', 'Selon la sensibilité'],
      ['metronidazole', 'adjuvant', 'Amibiase confirmée'],
      ['sro', 'premiere', 'Réhydratation'],
      ['zinc', 'premiere', '10–14 jours'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Syndrome hémolytique et urémique',
        fiche: 'insuffisance-renale-aigue',
        description: 'Toxine Shiga.',
        traitement: '- Prise en charge rénale, transfusion',
        clinique: '- Pâleur, oligurie, œdèmes',
        paraclinique: '- Hb, plaquettes, créatinine',
      },
      {
        nom: 'Malnutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Pertes protéiques.',
        traitement: '- Nutrition',
        clinique: '- Amaigrissement',
        paraclinique: '- PB',
      },
      {
        nom: 'Prolapsus rectal et perforation',
        description: 'Formes graves.',
        traitement: '- Réduction, chirurgie',
        clinique: '- Muqueuse extériorisée, ventre dur',
        paraclinique: '',
      },
      {
        nom: 'Convulsions',
        description: 'Fièvre, troubles ioniques, encéphalopathie.',
        traitement: '- Diazépam, correction',
        clinique: '- Crises',
        paraclinique: '- Glycémie',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration en 48 h sous antibiotique efficace ; mortalité élevée chez le malnutri',
    urgences: ['deshydratation-severe-enfant'],
    symptomes: [
      ['Diarrhée sanglante', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Convulsions', 'rare'],
    ],
    sources: [
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'The treatment of diarrhoea: a manual for physicians and other senior health workers',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Ciprofloxacine, SRO, zinc, contrôle à 2 jours',
        '- Nourrisson < 2 mois, malnutrition, déshydratation, échec',
      ],
      hgr: [
        '- Ceftriaxone, coproculture, prise en charge des complications',
        '- Syndrome hémolytique et urémique',
      ],
      tert: ['- Dialyse pédiatrique, chirurgie', ''],
    },
    alertes: {
      'deshydratation-severe-enfant': 'Enfant avec selles sanglantes, léthargique ou ne pouvant pas boire',
    },
    formes: [
      {
        nom: 'Shigellose de l’enfant',
        type: 'commune',
        description: 'Dysenterie fébrile.',
        terrain: '- Enfant de 1 à 5 ans',
        fonctionnels: '- Selles sanglantes fréquentes, ténesme',
        generaux: '- Fièvre',
        physiques: '- Sensibilité abdominale',
        paraclinique: '- Shigella',
        etiologies: '- Shigella',
        syndromes: ['syndrome-dysenterique'],
      },
      {
        nom: 'Dysenterie compliquée',
        type: 'gravite',
        description: 'Déshydratation, SHU, convulsions.',
        terrain: '- Nourrisson, malnutrition',
        fonctionnels: '',
        generaux: '- Léthargie',
        physiques: '- Pâleur, œdèmes, prolapsus',
        paraclinique: '- Anémie, insuffisance rénale',
        etiologies: '- Shigella dysenteriae type 1',
        syndromes: ['syndrome-hemolytique', 'syndrome-uremique'],
      },
    ],
  },

  // =================================================================== Hépatites enfant
  {
    ...GASTROPED,
    slug: 'hepatites-virales-enfant',
    nom: 'Hépatites virales de l’enfant',
    resume:
      'Hépatite A (fréquente, bénigne) et hépatite B (transmission mère-enfant, chronicité 90 % chez le nouveau-né) : ictère, urines foncées ; surveiller le TP ; vaccin hépatite B à la naissance et au PEV, immunoglobulines si mère AgHBs+.',
    definition:
      'Inflammation hépatique d’origine virale chez l’enfant : hépatite A (féco-orale, aiguë), hépatite B (périnatale et horizontale, risque de chronicité), hépatite E, C et D plus rares.',
    physiopathologie:
      '## Mécanismes\n- VHA : souvent asymptomatique chez le jeune enfant, immunité durable\n- VHB : plus l’infection est précoce, plus le risque de chronicité est élevé (90 % à la naissance, 30 % avant 5 ans) : cirrhose et carcinome à l’âge adulte',
    diagnostic:
      '## Hépatite aiguë\n- Fièvre, anorexie, nausées, douleurs abdominales, puis **ictère**, urines foncées, selles décolorées\n- Gravité : **TP < 50 %**, troubles de conscience, saignements (hépatite fulminante)\n\n## Hépatite B chronique de l’enfant\n- Souvent asymptomatique ; dépistage chez les enfants de mère AgHBs+\n\n## Examens\n- Transaminases, bilirubine, TP\n- IgM anti-VHA ; AgHBs, IgM anti-HBc',
    examens: [
      ['premiere_intention', 'bilan-hepatique', 'Transaminases, bilirubine.'],
      ['gravite', 'hemostase', 'TP : gravité.'],
      ['confirmation', 'serologies-hepatites', 'IgM anti-VHA, anti-VHE.'],
      ['confirmation', 'marqueurs-vhb', 'AgHBs, IgM anti-HBc.'],
      ['premiere_intention', 'tdr-paludisme', 'Ictère fébrile.'],
      ['gravite', 'glycemie', 'Hypoglycémie des formes graves.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-grave-enfant', 'Ictère fébrile, anémie, TDR positif.'],
      ['drepanocytose', 'Ictère hémolytique, électrophorèse.'],
      ['fievre-jaune', 'Contexte épidémique, saignements, atteinte rénale.'],
      ['Hépatite médicamenteuse', 'Antituberculeux, paracétamol, plantes.'],
      ['ictere-neonatal', 'Nouveau-né.'],
    ],
    etiologies:
      '## Virus\n- VHA (le plus fréquent), VHE (épidémies)\n- VHB (transmission mère-enfant, intrafamiliale, injections non sécurisées)\n- VHC, VHD (rares)',
    principes: [
      [
        'Hépatite aiguë',
        'Soutenir.',
        '- Repos, alimentation selon l’appétit, hydratation\n- Éviter les médicaments hépatotoxiques ; paracétamol à dose réduite\n- Hospitaliser si TP < 50 %, vomissements, troubles de conscience\n- **Vitamine K1** si TP bas',
      ],
      [
        'Hépatite B chronique',
        'Prévenir la progression.',
        '- Suivi (transaminases, AgHBe, charge virale, échographie)\n- Traitement antiviral selon les critères (ténofovir, entécavir) en centre spécialisé',
      ],
      [
        'Prévention',
        'Éliminer l’hépatite B.',
        '- **Vaccin hépatite B à la naissance** (dans les 24 h) puis dans le pentavalent\n- Immunoglobulines anti-HBs si mère AgHBs+ (si disponibles), ténofovir maternel pendant la grossesse si charge virale élevée\n- Hygiène, eau potable (VHA, VHE), sécurité des injections',
      ],
    ],
    molecules: [
      ['vaccin-hepatite-b', 'premiere', 'Naissance et PEV'],
      ['vitamine-k1-phytomenadione', 'adjuvant', 'TP bas'],
      ['paracetamol', 'adjuvant', 'Doses réduites'],
      ['glucose-10', 'adjuvant', 'Formes graves'],
      ['lactulose', 'adjuvant', 'Encéphalopathie'],
    ],
    complications: [
      {
        nom: 'Hépatite fulminante',
        description: 'TP < 50 % et encéphalopathie.',
        traitement: '- Réanimation',
        clinique: '- Confusion, saignements',
        paraclinique: '- TP, glycémie',
      },
      {
        nom: 'Hépatite B chronique',
        fiche: 'hepatite-b-chronique',
        description: 'Infection précoce.',
        traitement: '- Suivi, antiviraux',
        clinique: '',
        paraclinique: '- AgHBs',
      },
      {
        nom: 'Cirrhose et carcinome',
        fiche: 'carcinome-hepatocellulaire',
        description: 'À l’âge adulte.',
        traitement: '- Dépistage',
        clinique: '',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Hépatite A : guérison ; hépatite B périnatale : chronicité fréquente, d’où l’importance de la vaccination à la naissance',
    urgences: [],
    symptomes: [
      ['Ictère', 'tres_frequent'],
      ['Urines foncées', 'tres_frequent'],
      ['Anorexie', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Douleur abdominale', 'frequent'],
    ],
    sources: [
      'Guidelines for the prevention, diagnosis, care and treatment of people with chronic hepatitis B infection',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Conseils, vaccination à la naissance, repérage des signes de gravité',
        '- TP bas, confusion, saignements',
      ],
      hgr: ['- Bilan, hospitalisation des formes graves, suivi de l’hépatite B', ''],
      tert: ['- Hépatologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hépatite A de l’enfant',
        type: 'commune',
        description: 'Ictère fébrile bénin.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '- Anorexie, nausées',
        generaux: '- Fièvre',
        physiques: '- Ictère, foie sensible',
        paraclinique: '- IgM anti-VHA',
        etiologies: '- VHA',
        syndromes: [],
      },
      {
        nom: 'Hépatite B de transmission périnatale',
        type: 'terrain',
        description: 'Infection chronique silencieuse.',
        terrain: '- Mère AgHBs+, absence de vaccin à la naissance',
        fonctionnels: '',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- AgHBs persistant',
        etiologies: '- VHB',
        syndromes: [],
        examens: [['marqueurs-vhb', 'Dépistage']],
      },
    ],
  },

  // =================================================================== Vomissements
  {
    ...GASTROPED,
    slug: 'vomissements-enfant',
    nom: 'Vomissements de l’enfant',
    resume:
      'Symptôme fréquent aux causes multiples : gastro-entérite surtout, mais aussi paludisme, méningite, infection urinaire, occlusion, sténose du pylore ; évaluer la déshydratation et les signes d’alarme ; SRO par petites quantités, ondansétron si besoin.',
    definition:
      'Rejet actif par la bouche du contenu gastrique ; à distinguer des régurgitations du nourrisson (sans effort, bénignes).',
    physiopathologie:
      '## Mécanismes\n- Stimulation du centre du vomissement : causes digestives, infectieuses, neurologiques (hypertension intracrânienne), métaboliques (acidocétose), toxiques\n- Conséquences : déshydratation, alcalose hypochlorémique, hypokaliémie',
    diagnostic:
      '## Démarche\n- Âge, durée, aspect (alimentaire, bilieux, sanglant), relation avec les repas, fièvre, diarrhée\n- **Déshydratation**\n\n## Signes d’alarme\n- **Vomissements bilieux (verts)** : occlusion (urgence chirurgicale)\n- Vomissements en jet du nourrisson de 2 à 8 semaines : sténose du pylore\n- Ventre distendu, douloureux, pleurs paroxystiques (invagination)\n- Fièvre avec raideur de nuque, fontanelle bombée, somnolence\n- Hématémèse, polypnée (acidocétose), céphalées matinales\n- Vomit tout (signe général de danger PCIME)',
    examens: [
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie, acidocétose.'],
      ['premiere_intention', 'bandelette-urinaire', 'Infection urinaire, cétonurie.'],
      ['gravite', 'ionogramme', 'Hypokaliémie, alcalose.'],
      ['gravite', 'echographie-abdominale', 'Invagination, sténose du pylore, appendicite.'],
      ['gravite', 'abdomen-sans-preparation', 'Occlusion.'],
      ['gravite', 'lcr', 'Méningite.'],
    ],
    scores: ['deshydratation-oms'],
    differentiels: [
      ['diarrhee-aigue-enfant', 'Gastro-entérite.'],
      ['paludisme-simple-enfant', 'Fièvre, TDR positif.'],
      ['meningite-bacterienne-enfant', 'Fièvre, syndrome méningé.'],
      ['occlusion-intestinale-aigue', 'Vomissements bilieux, arrêt des matières.'],
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite.'],
      ['acidocetose-diabetique', 'Polypnée, polyurie, glycémie élevée.'],
    ],
    etiologies:
      '## Causes\n- **Gastro-entérite** (rotavirus)\n- Infections extradigestives : **paludisme**, otite, pneumonie, infection urinaire, méningite\n- Chirurgicales : sténose du pylore, invagination, appendicite, occlusion, hernie étranglée\n- Métaboliques : acidocétose, insuffisance surrénalienne ; intoxications\n- Reflux gastro-œsophagien, erreurs alimentaires, hypertension intracrânienne',
    principes: [
      [
        'Réhydratation orale fractionnée',
        'Prévenir la déshydratation.',
        '- **SRO** par petites quantités (5 mL toutes les 1 à 2 minutes à la cuillère), poursuivre l’allaitement\n- Échec ou déshydratation sévère : perfusion (Ringer lactate)',
      ],
      [
        'Antiémétique',
        'Faciliter la réhydratation.',
        '- **Ondansétron** 0,15 mg/kg per os (dose unique) chez l’enfant > 6 mois avec gastro-entérite\n- Éviter le métoclopramide et la dompéridone chez l’enfant (effets neurologiques, cardiaques)',
      ],
      [
        'Traiter la cause',
        'Ne pas méconnaître l’urgence.',
        '- Paludisme : ACT ou artésunate si vomit tout\n- Vomissements bilieux, masse, ventre dur : avis chirurgical urgent, sonde gastrique, à jeun\n- Méningite : ceftriaxone',
      ],
    ],
    molecules: [
      ['sro', 'premiere', 'Réhydratation fractionnée'],
      ['ondansetron', 'premiere', 'Gastro-entérite > 6 mois'],
      ['ringer-lactate', 'deuxieme', 'Déshydratation sévère'],
      ['zinc', 'adjuvant', 'Diarrhée associée'],
      ['metoclopramide', 'alternative', 'Déconseillé chez l’enfant'],
    ],
    complications: [
      {
        nom: 'Déshydratation',
        fiche: 'diarrhee-aigue-enfant',
        description: 'Pertes non compensées.',
        traitement: '- SRO, perfusion',
        clinique: '- Pli cutané, yeux enfoncés',
        paraclinique: '- Ionogramme',
      },
      {
        nom: 'Troubles ioniques',
        fiche: 'dyskaliemies',
        description: 'Hypokaliémie, alcalose.',
        traitement: '- Correction',
        clinique: '- Faiblesse',
        paraclinique: '- Ionogramme',
      },
      {
        nom: 'Inhalation',
        description: 'Troubles de conscience.',
        traitement: '- PLS, aspiration',
        clinique: '- Détresse respiratoire',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Bénin dans la majorité des gastro-entérites ; dépend de la cause pour les autres',
    urgences: ['deshydratation-severe-enfant', 'abdomen-aigu-chirurgical'],
    symptomes: [
      ['Vomissements', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Diarrhée', 'frequent'],
      ['Distension abdominale', 'occasionnel'],
    ],
    sources: [
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'ESPGHAN/ESPID evidence-based guidelines for the management of acute gastroenteritis in children in Europe',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- SRO fractionné, TDR, recherche des signes d’alarme, transfert',
        '- Vomissements bilieux, vomit tout, signes méningés, déshydratation sévère',
      ],
      hgr: ['- Perfusion, échographie, avis chirurgical', '- Urgence chirurgicale'],
      tert: ['- Chirurgie pédiatrique', ''],
    },
    alertes: {
      'deshydratation-severe-enfant': 'Enfant qui vomit tout et devient léthargique, yeux enfoncés',
      'abdomen-aigu-chirurgical': 'Vomissements verts, ventre distendu ou douloureux, arrêt des selles',
    },
    formes: [
      {
        nom: 'Vomissements de la gastro-entérite',
        type: 'commune',
        description: 'Vomissements puis diarrhée.',
        terrain: '- Nourrisson, enfant',
        fonctionnels: '- Vomissements alimentaires, diarrhée',
        generaux: '- Fièvre modérée',
        physiques: '- Abdomen souple',
        paraclinique: '',
        etiologies: '- Rotavirus',
        syndromes: [],
      },
      {
        nom: 'Vomissements chirurgicaux',
        type: 'gravite',
        description: 'Vomissements bilieux ou en jet.',
        terrain: '- Nourrisson (sténose du pylore, invagination)',
        fonctionnels: '- Pleurs paroxystiques, arrêt des selles',
        generaux: '- Déshydratation',
        physiques: '- Ventre distendu, masse, olive pylorique',
        paraclinique: '- Échographie',
        etiologies: '- Obstacle digestif',
        syndromes: ['syndrome-occlusif'],
      },
    ],
  },
];
