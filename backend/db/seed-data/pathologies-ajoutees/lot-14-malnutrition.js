'use strict';

/**
 * Lot 14 (malnutrition) — malnutrition aiguë modérée, kwashiorkor, alimentation du
 * nourrisson et diversification, malnutrition du nourrisson de moins de 6 mois.
 * Rédigé par IA (OMS 2023, protocole national PCIMA, UNICEF) : à valider.
 */

const MAL = { departement: 'pediatrie', specialite: 'Malnutrition' };

module.exports = [
  // =================================================================== MAM
  {
    ...MAL,
    slug: 'malnutrition-aigue-moderee',
    nom: 'Malnutrition aiguë modérée',
    resume:
      'Enfant de 6 à 59 mois avec PB 115–124 mm ou poids pour taille entre −3 et −2 z, sans œdème : programme de supplémentation (ASPE ou farines enrichies), conseils nutritionnels, déparasitage, vitamine A, suivi toutes les 2 semaines.',
    definition:
      'Émaciation modérée : périmètre brachial (PB) ≥ 115 et < 125 mm, ou poids pour taille ≥ −3 et < −2 z-scores, sans œdèmes nutritionnels.',
    physiopathologie:
      '## Mécanismes\n- Apports insuffisants (quantité, qualité), infections répétées (diarrhée, paludisme, rougeole)\n- Risque d’évolution vers la malnutrition aiguë sévère et de décès par infection',
    diagnostic:
      '## Dépistage\n- **PB** (bande à 3 couleurs : jaune 115–124 mm), poids et taille, recherche d’œdèmes bilatéraux\n- Dépistage communautaire (relais, mères formées au PB)\n\n## Évaluation\n- Appétit, complications médicales (fièvre, toux, diarrhée), vaccination, allaitement\n- Une complication médicale grave ou un PB < 115 mm oriente vers la prise en charge de la malnutrition sévère',
    examens: [
      ['confirmation', 'anthropometrie', 'PB, poids pour taille, œdèmes.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
      ['etiologique', 'tdr-vih', 'Échec ou malnutrition récidivante.'],
      ['etiologique', 'examen-parasitologique-selles', 'Parasitoses.'],
    ],
    scores: [],
    differentiels: [
      ['malnutrition-aigue-severe', 'PB < 115 mm, poids pour taille < −3 z ou œdèmes.'],
      ['retard-staturo-ponderal', 'Petite taille avec poids pour taille normal (malnutrition chronique).'],
    ],
    etiologies:
      '## Causes\n- Insécurité alimentaire, pratiques d’alimentation inadaptées\n- Maladies infectieuses, parasitoses, VIH, tuberculose\n- Pauvreté, conflits, déplacements',
    principes: [
      [
        'Supplémentation nutritionnelle',
        'Récupération.',
        '- **ASPE** 1 sachet/jour (ou farine enrichie selon le programme) en plus des repas familiaux et de l’allaitement\n- Démonstrations culinaires, aliments locaux riches en énergie et protéines',
      ],
      [
        'Traitements systématiques',
        'Traiter les facteurs associés.',
        '- **Vitamine A** si non reçue dans les 6 mois\n- **Albendazole** à partir de 12 mois\n- Mise à jour vaccinale, TDR et traitement du paludisme, moustiquaire',
      ],
      [
        'Suivi',
        'Guérir sans rechute.',
        '- Visite toutes les 2 semaines : PB, poids, œdèmes, appétit\n- Guérison : PB ≥ 125 mm à 2 visites consécutives\n- Référence vers la malnutrition sévère si aggravation',
      ],
    ],
    molecules: [
      ['aspe', 'premiere', '1 sachet par jour'],
      ['vitamine-a-retinol', 'premiere', 'Supplémentation'],
      ['albendazole', 'premiere', 'Déparasitage'],
      ['mebendazole', 'alternative', 'Déparasitage'],
      ['zinc', 'adjuvant', 'Diarrhée associée'],
    ],
    complications: [
      {
        nom: 'Malnutrition aiguë sévère',
        fiche: 'malnutrition-aigue-severe',
        description: 'Aggravation.',
        traitement: '- ATPE, prise en charge PCIMA',
        clinique: '- PB < 115 mm, œdèmes',
        paraclinique: '- PB',
      },
      {
        nom: 'Infections graves',
        fiche: 'sepsis-enfant',
        description: 'Immunité diminuée.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, léthargie',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Guérison dans la majorité des cas en 2 à 3 mois avec la supplémentation',
    urgences: ['malnutrition-aigue-severe-compliquee'],
    symptomes: [
      ['Perte de poids', 'tres_frequent'],
      ['Anorexie', 'occasionnel'],
      ['Diarrhée', 'occasionnel'],
      ['Retard de croissance', 'frequent'],
    ],
    sources: [
      'Protocole national PCIMA',
      'WHO guideline on the prevention and management of wasting and nutritional oedema',
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: ['- Dépistage par PB, supplémentation, conseils, suivi', '- PB < 115 mm, œdèmes, complication'],
      hgr: ['- Prise en charge des complications', ''],
      tert: ['', ''],
    },
    alertes: {
      'malnutrition-aigue-severe-compliquee':
        'Enfant malnutri avec œdèmes, PB < 115 mm, refus de manger ou signe de danger',
    },
    formes: [
      {
        nom: 'Émaciation modérée',
        type: 'commune',
        description: 'PB jaune.',
        terrain: '- Enfant de 6 à 59 mois',
        fonctionnels: '- Appétit conservé',
        generaux: '- Maigreur',
        physiques: '- PB 115–124 mm, pas d’œdème',
        paraclinique: '- z-score poids/taille entre −3 et −2',
        etiologies: '- Apports insuffisants, infections',
        syndromes: [],
        examens: [['anthropometrie', 'PB']],
      },
    ],
  },

  // =================================================================== Kwashiorkor
  {
    ...MAL,
    slug: 'kwashiorkor',
    nom: 'Kwashiorkor',
    resume:
      'Malnutrition aiguë sévère œdémateuse : œdèmes bilatéraux prenant le godet, dermatose, cheveux décolorés, apathie, gros foie ; toujours une malnutrition sévère ; prise en charge PCIMA (F-75 puis F-100 ou ATPE), antibiotiques, réhydratation prudente.',
    definition:
      'Forme œdémateuse de la malnutrition aiguë sévère, définie par la présence d’**œdèmes nutritionnels bilatéraux** (grade + à +++), quel que soit le PB ou le poids pour taille ; marasme-kwashiorkor si émaciation associée.',
    physiopathologie:
      '## Mécanismes\n- Déséquilibre de l’apport protéino-énergétique, stress oxydatif, infections\n- Hypoalbuminémie, fuite capillaire, stéatose hépatique\n- Atteinte de la peau et des muqueuses, immunodépression profonde\n- Très grande fragilité : hypoglycémie, hypothermie, surcharge cardiaque à la réhydratation ou à la réalimentation',
    diagnostic:
      '## Clinique\n- **Œdèmes bilatéraux** prenant le godet : pieds (+), jambes et mains (++), généralisés avec visage (+++)\n- **Dermatose** : plaques hyperpigmentées, desquamation « en peinture écaillée », ulcérations\n- Cheveux fins, décolorés, défrisés, cassants\n- Apathie, irritabilité, anorexie, hépatomégalie\n\n## Évaluation\n- Test de l’appétit (ATPE)\n- Complications médicales : hypoglycémie, hypothermie, déshydratation, infections, anémie sévère',
    examens: [
      ['confirmation', 'anthropometrie', 'Œdèmes, PB, poids pour taille.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'tdr-vih', 'Systématique.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['etiologique', 'bandelette-urinaire', 'Protéinurie (syndrome néphrotique), infection.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose.'],
    ],
    scores: [],
    differentiels: [
      ['Syndrome néphrotique de l’enfant', 'Protéinurie massive, pas de dermatose ni de cheveux décolorés.'],
      ['insuffisance-cardiaque-enfant', 'Cardiomégalie, souffle, hépatomégalie douloureuse.'],
      ['Cirrhose, hypoalbuminémie hépatique', 'Ascite, ictère.'],
    ],
    etiologies:
      '## Facteurs\n- Sevrage brutal, alimentation pauvre en protéines (bouillie de manioc)\n- Infections (rougeole, diarrhée), insécurité alimentaire\n- Enfant de 1 à 4 ans',
    principes: [
      [
        'Stabilisation (si complications ou manque d’appétit)',
        'Éviter les décès précoces.',
        '- **F-75** en repas fréquents (8 à 12 par jour)\n- Prévenir et traiter hypoglycémie et hypothermie\n- **Antibiotiques systématiques** (**amoxicilline** ; ampicilline + gentamicine si compliqué)\n- Déshydratation : **ReSoMal** prudent ; pas de perfusion sauf choc\n- Soins de peau (pommade à l’oxyde de zinc, antiseptique), soins des yeux',
      ],
      [
        'Transition et réhabilitation',
        'Récupération.',
        '- **ATPE** ou **F-100** progressivement quand l’appétit revient et les œdèmes régressent\n- Ambulatoire avec ATPE si appétit conservé et absence de complication\n- Pas de fer en phase initiale ; **acide folique**, vitamine A selon le protocole',
      ],
      [
        'Suivi',
        'Guérison.',
        '- Disparition des œdèmes et critères de sortie du protocole national\n- Éducation nutritionnelle, stimulation psychomotrice',
      ],
    ],
    molecules: [
      ['lait-f75', 'premiere', 'Phase de stabilisation'],
      ['lait-f100', 'premiere', 'Phase de réhabilitation'],
      ['atpe', 'premiere', 'Réhabilitation ambulatoire'],
      ['resomal', 'premiere', 'Déshydratation'],
      ['amoxicilline', 'premiere', 'Antibiothérapie systématique'],
      ['acide-folique', 'adjuvant', 'Supplémentation'],
      ['vitamine-a-retinol', 'adjuvant', 'Selon le protocole'],
      ['oxyde-de-zinc-pommade', 'adjuvant', 'Dermatose'],
    ],
    complications: [
      {
        nom: 'Hypoglycémie et hypothermie',
        fiche: 'hypoglycemie-neonatale',
        description: 'Réserves épuisées.',
        traitement: '- Glucose 10 %, réchauffement, repas fréquents',
        clinique: '- Léthargie, froid',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Surcharge cardiaque',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Réhydratation ou réalimentation trop rapide.',
        traitement: '- Arrêt des apports, furosémide',
        clinique: '- Polypnée, hépatomégalie',
        paraclinique: '',
      },
      {
        nom: 'Infections et sepsis',
        fiche: 'sepsis-enfant',
        description: 'Immunodépression.',
        traitement: '- Antibiotiques',
        clinique: '- Signes parfois absents',
        paraclinique: '',
      },
      {
        nom: 'Syndrome de renutrition inappropriée',
        description: 'Hypophosphatémie.',
        traitement: '- Progressivité',
        clinique: '- Défaillance cardiaque',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée en cas de complications ; < 5 % avec un protocole PCIMA bien appliqué',
    urgences: ['malnutrition-aigue-severe-compliquee'],
    symptomes: [
      ['Œdèmes', 'tres_frequent'],
      ['Anorexie', 'frequent'],
      ['Éruption cutanée', 'frequent'],
      ['Diarrhée', 'frequent'],
      ['Retard de croissance', 'frequent'],
      ['Troubles du comportement', 'frequent'],
    ],
    sources: [
      'Protocole national PCIMA',
      'WHO guideline on the prevention and management of wasting and nutritional oedema',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Dépistage des œdèmes, test de l’appétit, ATPE ambulatoire si non compliqué',
        '- Œdèmes +++, complications, anorexie',
      ],
      hgr: ['- Unité nutritionnelle thérapeutique : F-75, F-100, antibiotiques', ''],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {
      'malnutrition-aigue-severe-compliquee':
        'Enfant œdémateux qui ne mange pas, léthargique, hypotherme ou avec diarrhée sévère',
    },
    formes: [
      {
        nom: 'Kwashiorkor',
        type: 'commune',
        description: 'Œdèmes et dermatose.',
        terrain: '- Enfant de 1 à 4 ans, sevrage',
        fonctionnels: '- Apathie, anorexie',
        generaux: '',
        physiques: '- Œdèmes bilatéraux, dermatose, cheveux décolorés, hépatomégalie',
        paraclinique: '- Hypoglycémie possible',
        etiologies: '- Malnutrition sévère',
        syndromes: ['syndrome-de-malnutrition-oedemateuse'],
        examens: [['anthropometrie', 'Œdèmes']],
      },
      {
        nom: 'Marasme-kwashiorkor',
        type: 'gravite',
        description: 'Œdèmes et émaciation sévère.',
        terrain: '- Malnutrition prolongée',
        fonctionnels: '- Anorexie',
        generaux: '- Hypothermie',
        physiques: '- Œdèmes, fonte musculaire',
        paraclinique: '- PB < 115 mm',
        etiologies: '',
        syndromes: ['syndrome-de-malnutrition-oedemateuse'],
      },
    ],
  },

  // =================================================================== Alimentation du nourrisson
  {
    ...MAL,
    slug: 'alimentation-nourrisson-diversification',
    nom: 'Alimentation du nourrisson et diversification',
    resume:
      'Allaitement dans l’heure qui suit la naissance, allaitement exclusif 6 mois, puis aliments de complément adaptés (fréquence, quantité, diversité, hygiène) avec poursuite de l’allaitement jusqu’à 2 ans ou plus.',
    definition:
      'Ensemble des pratiques recommandées d’alimentation du nourrisson et du jeune enfant (ANJE) : allaitement maternel et alimentation de complément à partir de 6 mois.',
    physiopathologie:
      '## Enjeux\n- Le lait maternel couvre tous les besoins jusqu’à 6 mois et protège des infections\n- Après 6 mois, les besoins en énergie, fer, zinc et vitamine A dépassent les apports du lait : la diversification est indispensable\n- La période 6–24 mois est celle du plus grand risque de malnutrition',
    diagnostic:
      '## Évaluation de l’alimentation (PCIME)\n- Allaitement : fréquence, jour et nuit, autres liquides ou aliments avant 6 mois\n- Alimentation de complément : âge de début, nombre de repas, consistance, diversité (groupes d’aliments), qui nourrit l’enfant\n- Croissance : courbe de poids\n- Problèmes d’allaitement : mauvaise prise du sein, crevasses, mastite, faible production',
    examens: [['premiere_intention', 'anthropometrie', 'Suivi de la croissance.']],
    scores: [],
    differentiels: [
      ['retard-staturo-ponderal', 'Cassure de la courbe malgré une alimentation correcte.'],
      ['malnutrition-aigue-moderee', 'PB réduit.'],
    ],
    etiologies:
      '## Pratiques à risque\n- Introduction d’eau, de tisanes ou de bouillies avant 6 mois\n- Bouillies trop liquides (manioc seul), repas peu fréquents, faible diversité\n- Biberons mal nettoyés, sevrage brutal, croyances alimentaires',
    principes: [
      [
        'Allaitement maternel',
        'Protéger la santé du nourrisson.',
        '- Mise au sein **dans l’heure** suivant la naissance, colostrum\n- **Allaitement exclusif jusqu’à 6 mois** (pas d’eau, pas de tisanes), à la demande, jour et nuit\n- Bonne position et bonne prise du sein\n- Mère vivant avec le VIH sous ARV : allaitement recommandé',
      ],
      [
        'Alimentation de complément dès 6 mois',
        'Couvrir les besoins.',
        '- 6–8 mois : 2–3 repas + 1–2 collations ; 9–23 mois : 3–4 repas + 1–2 collations\n- Bouillies épaisses enrichies (arachide, soja, poisson séché, œuf, huile), purée de légumes et fruits, feuilles vertes (pondu, amarante)\n- Au moins 5 groupes d’aliments sur 8 par jour ; aliments d’origine animale quotidiennement si possible\n- Poursuite de l’allaitement jusqu’à 2 ans ou plus',
      ],
      [
        'Hygiène et alimentation active',
        'Prévenir diarrhées et refus.',
        '- Lavage des mains, eau potable, préparation fraîche, tasse plutôt que biberon\n- Alimentation patiente et active, enfant ayant sa propre assiette\n- Pendant et après une maladie : poursuivre et augmenter les repas',
      ],
      [
        'Micronutriments',
        'Prévenir les carences.',
        '- Vitamine A tous les 6 mois, déparasitage dès 12 mois, sel iodé, poudres de micronutriments selon le programme',
      ],
    ],
    molecules: [
      ['vitamine-a-retinol', 'premiere', 'Supplémentation à partir de 6 mois'],
      ['albendazole', 'adjuvant', 'Déparasitage dès 12 mois'],
      ['multivitamines', 'adjuvant', 'Poudres de micronutriments selon le programme'],
    ],
    complications: [
      {
        nom: 'Malnutrition aiguë et chronique',
        fiche: 'malnutrition-aigue-moderee',
        description: 'Alimentation insuffisante.',
        traitement: '- Conseils, supplémentation',
        clinique: '- Cassure de courbe',
        paraclinique: '- PB',
      },
      {
        nom: 'Diarrhées',
        fiche: 'diarrhee-aigue-enfant',
        description: 'Hygiène insuffisante, biberons.',
        traitement: '- SRO, zinc',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Anémie ferriprive',
        fiche: 'anemie-enfant',
        description: 'Apports en fer insuffisants.',
        traitement: '- Fer, aliments riches en fer',
        clinique: '- Pâleur',
        paraclinique: '- Hb',
      },
    ],
    evolution:
      '## Bénéfices\n- L’allaitement optimal et une bonne alimentation de complément pourraient éviter une part importante des décès d’enfants de moins de 5 ans',
    urgences: [],
    symptomes: [
      ['Retard de croissance', 'occasionnel'],
      ['Anorexie', 'occasionnel'],
    ],
    sources: [
      'UNICEF — santé et nutrition de l’enfant',
      'OMS — lignes directrices et publications',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
    ],
    niveaux: {
      cs: [
        '- Conseil en allaitement et alimentation, démonstrations culinaires, suivi de croissance',
        '- Problèmes d’allaitement non résolus, malnutrition',
      ],
      hgr: ['- Consultation de lactation, prise en charge des mères malades', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Pratiques d’alimentation inadaptées',
        type: 'commune',
        description: 'Diversification précoce ou pauvre.',
        terrain: '- Nourrisson de 0 à 24 mois',
        fonctionnels: '- Repas peu fréquents, bouillies liquides',
        generaux: '',
        physiques: '- Croissance ralentie',
        paraclinique: '- Courbe de croissance',
        etiologies: '- Méconnaissance, pauvreté',
        syndromes: [],
        examens: [['anthropometrie', 'Croissance']],
      },
    ],
  },

  // =================================================================== Malnutrition < 6 mois
  {
    ...MAL,
    slug: 'malnutrition-nourrisson-moins-6-mois',
    nom: 'Malnutrition du nourrisson de moins de 6 mois',
    resume:
      'Nourrisson < 6 mois avec poids pour taille < −3 z, œdèmes ou difficulté d’allaitement efficace : rétablir l’allaitement exclusif (technique de supplémentation par succion), F-75 ou F-100 dilué si nécessaire, prise en charge de la mère ; pas d’ATPE.',
    definition:
      'Malnutrition aiguë sévère du nourrisson de moins de 6 mois : poids pour taille < −3 z, œdèmes bilatéraux, ou faiblesse ne lui permettant pas de téter efficacement, ou absence de prise de poids malgré l’allaitement ; l’OMS 2023 propose une approche intégrée « MAMI » (mère et nourrisson à risque).',
    physiopathologie:
      '## Mécanismes\n- Allaitement insuffisant ou absent (décès ou maladie de la mère, mauvaise technique), alimentation de substitution diluée ou contaminée\n- Faible poids de naissance, maladies (VIH, cardiopathie, infections)\n- Très grande vulnérabilité : hypoglycémie, hypothermie, infections',
    diagnostic:
      '## Critères\n- Poids pour taille < −3 z (si taille ≥ 45 cm) ou perte de poids, œdèmes\n- Nourrisson trop faible pour téter, échec de l’allaitement\n- Signes de danger, maladie associée\n\n## Évaluation de la dyade mère-enfant\n- Observation d’une tétée, santé physique et mentale de la mère, nutrition maternelle, statut VIH',
    examens: [
      ['confirmation', 'anthropometrie', 'Poids, taille, z-scores, œdèmes.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'tdr-vih', 'Mère et nourrisson (PCR chez le nourrisson).'],
      ['etiologique', 'pcr-vih-nourrisson', 'Mère séropositive.'],
      ['gravite', 'hemocultures', 'Infection.'],
    ],
    scores: [],
    differentiels: [
      ['faible-poids-naissance-methode-kangourou', 'Petit poids depuis la naissance avec bonne croissance.'],
      ['cardiopathies-congenitales', 'Essoufflement aux tétées, souffle.'],
      ['infection-vih-enfant', 'À rechercher systématiquement.'],
    ],
    etiologies:
      '## Facteurs\n- Mère décédée, malade, dénutrie ou déprimée\n- Mauvaise technique d’allaitement, introduction précoce d’eau ou d’aliments\n- Faible poids de naissance, prématurité, handicap, infections',
    principes: [
      [
        'Rétablir l’allaitement',
        'Priorité absolue.',
        '- Soutien à l’allaitement (position, prise du sein, fréquence)\n- **Technique de supplémentation par succion** : le nourrisson tète le sein tout en recevant du lait thérapeutique par une fine sonde, ce qui stimule la lactation\n- Lait thérapeutique : **F-75** (stabilisation) ou **F-100 dilué** (récupération) selon le protocole\n- Nourrisson sans possibilité d’allaitement : préparation pour nourrissons à la tasse',
      ],
      [
        'Traitements médicaux',
        'Prévenir les complications.',
        '- Antibiotiques (**amoxicilline** ; ampicilline + gentamicine si compliqué)\n- Prévention de l’hypoglycémie et de l’hypothermie (peau à peau)\n- **Pas d’ATPE avant 6 mois**',
      ],
      [
        'Prise en charge de la mère',
        'Soigner la dyade.',
        '- Nutrition et supplémentation de la mère, dépistage de la dépression, soutien psychosocial\n- Prise en charge du VIH, planification familiale',
      ],
      [
        'Suivi',
        'Prévenir la rechute.',
        '- Prise de poids ≥ 20 g/jour pendant 5 jours avec allaitement exclusif avant la sortie\n- Suivi rapproché communautaire',
      ],
    ],
    molecules: [
      ['lait-f75', 'premiere', 'Stabilisation'],
      ['lait-f100', 'premiere', 'F-100 dilué en récupération'],
      ['amoxicilline', 'premiere', 'Antibiothérapie systématique'],
      ['ampicilline', 'alternative', 'Formes compliquées'],
      ['gentamicine', 'alternative', 'Formes compliquées'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Hypoglycémie et hypothermie',
        fiche: 'hypothermie-neonatale',
        description: 'Faibles réserves.',
        traitement: '- Glucose, peau à peau',
        clinique: '- Léthargie, froid',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Infections graves',
        fiche: 'sepsis-enfant',
        description: 'Immunodépression.',
        traitement: '- Antibiotiques IV',
        clinique: '- Refus de téter',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Décès',
        description: 'Mortalité élevée.',
        traitement: '- Prise en charge précoce',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité plus élevée que chez l’enfant plus âgé ; bon pronostic si l’allaitement est rétabli',
    urgences: ['malnutrition-aigue-severe-compliquee'],
    symptomes: [
      ['Perte de poids', 'tres_frequent'],
      ['Refus de téter', 'frequent'],
      ['Hypothermie', 'occasionnel'],
      ['Diarrhée', 'occasionnel'],
      ['Œdèmes', 'occasionnel'],
    ],
    sources: [
      'WHO guideline on the prevention and management of wasting and nutritional oedema',
      'Protocole national PCIMA',
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: ['- Repérage, soutien à l’allaitement, transfert', '- Tout nourrisson < 6 mois malnutri'],
      hgr: ['- Unité nutritionnelle : supplémentation par succion, F-75/F-100 dilué', ''],
      tert: ['- Pédiatrie spécialisée', ''],
    },
    alertes: {
      'malnutrition-aigue-severe-compliquee': 'Nourrisson < 6 mois très maigre ou œdémateux qui ne tète plus',
    },
    formes: [
      {
        nom: 'Nourrisson émacié avec échec d’allaitement',
        type: 'commune',
        description: 'Perte de poids sous allaitement inefficace.',
        terrain: '- Mère malade ou mauvaise technique',
        fonctionnels: '- Tétées faibles et courtes',
        generaux: '- Hypothermie',
        physiques: '- Maigreur, plis cutanés',
        paraclinique: '- z-score < −3',
        etiologies: '- Allaitement insuffisant',
        syndromes: [],
        examens: [['anthropometrie', 'Z-score']],
      },
    ],
  },
];
