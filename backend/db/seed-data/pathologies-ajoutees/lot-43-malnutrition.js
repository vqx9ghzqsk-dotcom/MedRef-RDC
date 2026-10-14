'use strict';

/**
 * Lot 43 (phase 2, malnutrition) — marasme, carences en micronutriments (zinc, iode), obésité de
 * l'enfant, malnutrition de l'enfant infecté par le VIH. Rédigé par IA (OMS 2023, UNICEF, PCIME,
 * Pocket book) : à valider.
 */

const MAL = { departement: 'pediatrie', specialite: 'Malnutrition' };

module.exports = [
  // =================================================================== Marasme
  {
    ...MAL,
    slug: 'marasme',
    nom: 'Marasme',
    resume:
      'Forme non œdémateuse de malnutrition aiguë sévère : amaigrissement extrême (P/T < −3 Z, PB < 115 mm), fonte musculaire et graisseuse, aspect de « vieillard », enfant souvent alerte et affamé ; test de l’appétit ; sans complication : ATPE en ambulatoire (UNTA) ; avec complication ou appétit absent : hospitalisation (UNTI), F-75 puis F-100/ATPE, antibiotiques systématiques, prévention de l’hypoglycémie et de l’hypothermie, ReSoMal prudent.',
    definition:
      'Malnutrition aiguë sévère sans œdèmes, définie chez l’enfant de 6 à 59 mois par un rapport poids/taille < −3 Z-score et/ou un périmètre brachial < 115 mm, traduisant une carence énergétique globale prolongée.',
    physiopathologie:
      '## Mécanismes\n- Apports énergétiques insuffisants prolongés (sevrage précoce, alimentation pauvre, insécurité alimentaire) et **infections** répétées (diarrhée, rougeole, tuberculose, VIH)\n- Utilisation des réserves graisseuses puis musculaires ; **adaptation réductive** : métabolisme ralenti, réserves en glycogène faibles, thermorégulation altérée, immunité déprimée\n- Risque d’**hypoglycémie**, d’**hypothermie**, d’infections silencieuses et de surcharge hydrique si réhydratation rapide\n\n## Formes associées\n- **Marasme-kwashiorkor** : amaigrissement sévère avec œdèmes (le plus grave)',
    diagnostic:
      '## Critères (6–59 mois)\n- **P/T < −3 Z** et/ou **PB < 115 mm**, **sans œdèmes bilatéraux**\n\n## Clinique\n- Amaigrissement extrême, **côtes et omoplates saillantes**, **fesses « en culotte flottante »**, visage de vieillard\n- Peau fine et plissée, cheveux clairsemés, enfant irritable ou apathique, souvent **affamé**\n\n## Recherche des complications (hospitalisation)\n- **Test de l’appétit** (ATPE) échoué, léthargie, convulsions, hypoglycémie, **hypothermie**, déshydratation, fièvre élevée, pneumonie, anémie sévère, lésions cutanées, vomissements incoercibles\n\n## Examens\n- **Glycémie**, **TDR paludisme**, **test VIH**, NFS, bandelette urinaire, radiographie et Xpert (tuberculose) selon le contexte',
    examens: [
      ['confirmation', 'anthropometrie', 'P/T, PB.'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose.'],
      ['etiologique', 'bandelette-urinaire', 'Infection urinaire.'],
    ],
    scores: [],
    differentiels: [
      ['kwashiorkor', 'Œdèmes bilatéraux prenant le godet.'],
      ['malnutrition-aigue-moderee', 'P/T entre −3 et −2 Z, PB 115–124 mm.'],
      ['malnutrition-chronique', 'Petite taille, P/T normal.'],
      ['infection-vih-enfant', 'Cause sous-jacente fréquente.'],
      ['tuberculose-enfant', 'Cause sous-jacente fréquente.'],
    ],
    etiologies:
      '## Causes\n- Insécurité alimentaire, sevrage précoce, diarrhées, rougeole, VIH, tuberculose, conflits et déplacements',
    principes: [
      [
        'MAS sans complication (UNTA)',
        'Ambulatoire.',
        '- **ATPE** ≈ 200 kcal/kg/j selon le poids, poursuite de l’allaitement, eau potable\n- **Amoxicilline** 50–100 mg/kg/j pendant 5 jours\n- Albendazole à la 2e visite, vaccination contre la rougeole, suivi hebdomadaire (poids, PB, appétit)',
      ],
      [
        'MAS compliquée (UNTI) — phase de stabilisation',
        'Stabiliser.',
        '- **Prévenir l’hypoglycémie** (repas toutes les 2–3 h, jour et nuit ; glucose 10 % 5 mL/kg si < 3 mmol/L) et l’**hypothermie** (peau à peau, couverture)\n- **F-75** 130 mL/kg/j en 8 à 12 repas\n- **Antibiotiques** systématiques : amoxicilline ou ampicilline + gentamicine si compliquée\n- Déshydratation : **ReSoMal** 5 mL/kg toutes les 30 min pendant 2 h puis 5–10 mL/kg/h (surveiller la surcharge) ; perfusion seulement en cas de choc\n- Pas de fer en phase initiale',
      ],
      [
        'Transition et réhabilitation',
        'Rattraper.',
        '- **F-100** ou ATPE progressivement, stimulation psychomotrice, éducation nutritionnelle\n- Sortie : P/T ≥ −2 Z ou PB ≥ 125 mm sur 2 visites, sans œdèmes',
      ],
    ],
    molecules: [
      ['atpe', 'premiere', 'MAS sans complication, réhabilitation'],
      ['lait-f75', 'premiere', 'Phase de stabilisation'],
      ['lait-f100', 'premiere', 'Transition'],
      ['amoxicilline', 'premiere', 'Antibiothérapie systématique'],
      ['gentamicine', 'alternative', 'MAS compliquée'],
      ['resomal', 'premiere', 'Déshydratation'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['albendazole', 'adjuvant', 'Déparasitage'],
    ],
    complications: [
      {
        nom: 'Hypoglycémie',
        fiche: 'hypoglycemie-enfant',
        description: 'Réserves faibles.',
        traitement: '- Glucose 10 %, repas fréquents',
        clinique: '- Léthargie, convulsions',
        paraclinique: '- Glycémie < 3 mmol/L',
      },
      {
        nom: 'Hypothermie',
        description: 'Thermorégulation altérée.',
        traitement: '- Peau à peau, réchauffement',
        clinique: '- T° < 35,5 °C',
        paraclinique: '',
      },
      {
        nom: 'Surcharge hydrique',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Réhydratation trop rapide.',
        traitement: '- Arrêt des apports, furosémide',
        clinique: '- Polypnée, hépatomégalie',
        paraclinique: '',
      },
      {
        nom: 'Syndrome de renutrition inappropriée',
        description: 'Apports trop rapides.',
        traitement: '- Progression lente, phosphore, potassium',
        clinique: '- Insuffisance cardiaque, troubles neurologiques',
        paraclinique: '- Hypophosphatémie',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité < 5 % avec un protocole bien appliqué ; bien plus élevée en cas de VIH ou de complications non prises en charge',
    urgences: ['malnutrition-aigue-severe-compliquee'],
    symptomes: [
      ['Perte de poids', 'tres_frequent'],
      ['Retard de croissance', 'frequent'],
      ['Diarrhée', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Anorexie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'UNICEF — santé et nutrition de l’enfant',
      'Pocket book of hospital care for children (2e édition)',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
    ],
    niveaux: {
      cs: [
        '- Dépistage (PB), test de l’appétit, ATPE, amoxicilline (UNTA)',
        '- Complications, échec du test de l’appétit',
      ],
      hgr: ['- UNTI : F-75, F-100, antibiotiques', ''],
      tert: ['- Cas complexes, VIH, tuberculose', ''],
    },
    alertes: {
      'malnutrition-aigue-severe-compliquee': 'Enfant émacié léthargique, hypotherme ou sans appétit',
    },
    formes: [
      {
        nom: 'Marasme non compliqué',
        type: 'commune',
        description: 'Prise en charge ambulatoire.',
        terrain: '- Enfant de 6 à 59 mois',
        fonctionnels: '- Appétit conservé',
        generaux: '- Amaigrissement extrême',
        physiques: '- Fonte musculaire, côtes saillantes',
        paraclinique: '- P/T < −3 Z, PB < 115 mm',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Marasme compliqué',
        type: 'gravite',
        description: 'Hospitalisation.',
        terrain: '',
        fonctionnels: '- Anorexie',
        generaux: '- Hypothermie, léthargie',
        physiques: '- Déshydratation, pneumonie',
        paraclinique: '- Hypoglycémie',
        etiologies: '- Infections',
        syndromes: [],
      },
      {
        nom: 'Marasme-kwashiorkor',
        type: 'evolutive',
        description: 'Forme mixte.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Amaigrissement',
        physiques: '- Émaciation et œdèmes',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-malnutrition-oedemateuse'],
      },
    ],
  },

  // =================================================================== Micronutriments
  {
    ...MAL,
    slug: 'carences-micronutriments-enfant',
    nom: 'Carences en micronutriments (zinc, iode)',
    resume:
      'Faim cachée de l’enfant : carence en zinc (diarrhées prolongées, retard de croissance, infections, dermatose péri-orificielle) et en iode (goitre, crétinisme, retard intellectuel, surtout au Kivu et dans les zones montagneuses), souvent associées aux carences en fer et vitamine A ; zinc pendant chaque diarrhée (10 mg/j < 6 mois, 20 mg/j ≥ 6 mois, 10–14 jours), sel iodé universel, supplémentation en iode des femmes enceintes, aliments enrichis, diversification alimentaire.',
    definition:
      'Insuffisance d’apport ou d’absorption de vitamines et de minéraux indispensables à la croissance et au développement de l’enfant ; cette fiche traite principalement des carences en zinc et en iode (fer et vitamine A : fiches dédiées).',
    physiopathologie:
      '## Zinc\n- Apports pauvres (céréales riches en phytates, peu de produits animaux), pertes digestives (diarrhées)\n- Rôle dans l’immunité, la croissance, la réparation de la muqueuse intestinale\n- Conséquences : diarrhées plus longues et plus graves, pneumonies, retard de croissance, dermatose, alopécie, retard de cicatrisation\n\n## Iode\n- Sols pauvres en iode (régions montagneuses, Kivu, Ituri), goitrogènes (**manioc mal roussi** : thiocyanates)\n- Hormones thyroïdiennes indispensables au développement cérébral du fœtus et du nourrisson\n- Conséquences : **goitre**, hypothyroïdie, **crétinisme** (déficience intellectuelle, surdi-mutité, petite taille), fausses couches, mortinatalité',
    diagnostic:
      '## Carence en zinc\n- Diagnostic clinique et contextuel : diarrhée prolongée, malnutrition, **dermatite péri-orificielle et des extrémités** (acrodermatite), alopécie, retard de croissance, infections répétées\n\n## Carence en iode\n- **Goitre** (palpation de la thyroïde, classification OMS 0-1-2)\n- Nourrisson : hypothyroïdie (ictère prolongé, hypotonie, constipation, macroglossie, hernie ombilicale)\n- Enfant : retard scolaire, petite taille, surdité\n- Examens : **TSH**, T4 libre, échographie thyroïdienne ; iodurie (enquêtes de population)\n\n## Rechercher les carences associées\n- Anémie (fer), vitamine A (xérophtalmie), vitamine D (rachitisme)',
    examens: [
      ['confirmation', 'tsh', 'Hypothyroïdie.'],
      ['premiere_intention', 't4-libre', 'Hypothyroïdie.'],
      ['deuxieme_intention', 'echographie-thyroidienne', 'Goitre.'],
      ['premiere_intention', 'nfs', 'Anémie associée.'],
      ['premiere_intention', 'anthropometrie', 'Retard de croissance.'],
      ['premiere_intention', 'ferritine', 'Carence martiale associée.'],
    ],
    scores: [],
    differentiels: [
      ['goitre-et-carence-iodee', 'Fiche de l’adulte.'],
      ['carence-en-vitamine-a', 'Xérophtalmie, cécité crépusculaire.'],
      ['anemie-ferriprive', 'Pâleur, ferritine basse.'],
      ['rachitisme-carentiel', 'Déformations osseuses.'],
      ['Dermatite atopique', 'Eczéma (diagnostic différentiel de l’acrodermatite).'],
      ['konzo', 'Paraparésie spastique liée au manioc.'],
    ],
    etiologies:
      '## Causes\n- Alimentation monotone (manioc), pauvreté, diarrhées, malnutrition, sols pauvres en iode, absence de sel iodé',
    principes: [
      [
        'Zinc',
        'Traiter et prévenir.',
        '- **Toute diarrhée** : zinc **10 mg/j < 6 mois, 20 mg/j ≥ 6 mois pendant 10–14 jours** avec la SRO\n- Acrodermatite et carence sévère : supplémentation prolongée (2–3 mg/kg/j de zinc élément, avis spécialisé)\n- Aliments : viande, poisson, œufs, chenilles, termites, légumineuses ; aliments de complément enrichis',
      ],
      [
        'Iode',
        'Prévenir avant tout.',
        '- **Sel iodé** pour tous les ménages (programme national)\n- Femmes enceintes et allaitantes : **250 µg/j** d’iode (ou huile iodée dans les zones de forte carence selon le programme)\n- Hypothyroïdie confirmée : **lévothyroxine** (avis spécialisé) ; goitre volumineux compressif : chirurgie\n- Rouissage correct du manioc (réduction des goitrogènes)',
      ],
      [
        'Carences associées',
        'Corriger globalement.',
        '- Vitamine A tous les 6 mois (6–59 mois), fer selon le programme, déparasitage, diversification alimentaire, allaitement',
      ],
    ],
    molecules: [
      ['zinc', 'premiere', 'Diarrhée, carence en zinc'],
      ['iode', 'premiere', 'Prévention de la carence iodée'],
      ['levothyroxine', 'alternative', 'Hypothyroïdie confirmée'],
      ['vitamine-a-retinol', 'adjuvant', 'Supplémentation associée'],
      ['sro', 'adjuvant', 'Diarrhée'],
      ['multivitamines', 'adjuvant', 'Carences multiples'],
    ],
    complications: [
      {
        nom: 'Crétinisme',
        description: 'Carence iodée fœtale.',
        traitement: '- Prévention (sel iodé, iode chez la femme enceinte)',
        clinique: '- Déficience intellectuelle, surdité, petite taille',
        paraclinique: '- TSH',
      },
      {
        nom: 'Retard de croissance',
        fiche: 'malnutrition-chronique',
        description: 'Carences prolongées.',
        traitement: '- Nutrition, zinc',
        clinique: '- Petite taille',
        paraclinique: '- Anthropométrie',
      },
      {
        nom: 'Diarrhées graves et prolongées',
        fiche: 'diarrhee-persistante-enfant',
        description: 'Carence en zinc.',
        traitement: '- Zinc, SRO',
        clinique: '- Diarrhée > 14 jours',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Réversible pour la carence en zinc ; séquelles neurologiques définitives du crétinisme : la prévention est essentielle',
    urgences: [],
    symptomes: [
      ['Retard de croissance', 'tres_frequent'],
      ['Diarrhée', 'frequent'],
      ['Lésions eczématiformes', 'occasionnel'],
      ['Retard de développement psychomoteur', 'occasionnel'],
      ['Constipation', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'UNICEF — santé et nutrition de l’enfant',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Zinc avec la SRO, vitamine A, conseils nutritionnels, palpation de la thyroïde',
        '- Goitre, retard de développement',
      ],
      hgr: ['- TSH, échographie, prise en charge', ''],
      tert: ['- Endocrinologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Carence en zinc',
        type: 'commune',
        description: 'Diarrhées, croissance.',
        terrain: '- Nourrisson et jeune enfant',
        fonctionnels: '- Diarrhées répétées',
        generaux: '- Retard de croissance',
        physiques: '- Dermatite péri-orificielle, alopécie',
        paraclinique: '',
        etiologies: '- Alimentation pauvre, diarrhées',
        syndromes: [],
      },
      {
        nom: 'Carence en iode',
        type: 'etiologique',
        description: 'Goitre, crétinisme.',
        terrain: '- Zones montagneuses, Kivu',
        fonctionnels: '- Retard scolaire',
        generaux: '- Petite taille',
        physiques: '- Goitre',
        paraclinique: '- TSH élevée',
        etiologies: '- Sols pauvres en iode, manioc',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Obésité enfant
  {
    ...MAL,
    slug: 'obesite-enfant',
    nom: 'Obésité de l’enfant',
    resume:
      'Excès de masse grasse de l’enfant, en hausse dans les villes de RDC (boissons sucrées, aliments frits, sédentarité, écrans) : IMC/âge > +2 Z (5–19 ans) ou P/T > +3 Z (< 5 ans) ; rechercher les complications (HTA, diabète de type 2, apnées, troubles orthopédiques, souffrance psychologique) et les rares causes endocriniennes ou génétiques (petite taille associée) ; prise en charge familiale du mode de vie ; metformine seulement si diabète.',
    definition:
      'Chez l’enfant de 5 à 19 ans, IMC pour l’âge supérieur à +2 Z-scores (courbes OMS) ; chez l’enfant de moins de 5 ans, poids pour taille supérieur à +3 Z-scores (surpoids : > +2 Z).',
    physiopathologie:
      '## Facteurs\n- **Alimentation** : boissons sucrées, fritures, grignotage, portions importantes, alimentation industrielle\n- **Sédentarité**, écrans, manque de sommeil, transport motorisé\n- Facteurs familiaux (parents obèses), diabète maternel pendant la grossesse, faible poids de naissance suivi d’une prise de poids rapide\n- Perception culturelle valorisant l’embonpoint de l’enfant\n\n## Causes secondaires (rares)\n- Endocriniennes (hypothyroïdie, Cushing, corticothérapie) : **ralentissement de la croissance staturale**\n- Génétiques (syndrome de Prader-Willi) : retard de développement, dysmorphie',
    diagnostic:
      '## Mesures\n- Poids, taille, **IMC rapporté aux courbes OMS**, tour de taille, **tension artérielle** (brassard adapté)\n\n## Rechercher\n- Complications : HTA, acanthosis nigricans (insulinorésistance), **ronflements et apnées**, douleurs de hanche ou de genou (épiphysiolyse), genu valgum, stéatose, troubles des règles (SOPK), moqueries, dépression\n- Cause secondaire : vitesse de croissance staturale diminuée, retard de développement, prise de corticoïdes\n\n## Examens\n- **Glycémie à jeun ou HbA1c**, **bilan lipidique**, transaminases (stéatose)\n- TSH si ralentissement de la croissance',
    examens: [
      ['confirmation', 'anthropometrie', 'IMC/âge.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'hba1c', 'Diabète.'],
      ['premiere_intention', 'bilan-lipidique', 'Dyslipidémie.'],
      ['premiere_intention', 'bilan-hepatique', 'Stéatose.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
    ],
    scores: [],
    differentiels: [
      ['obesite-adulte', 'Adolescent en fin de croissance.'],
      ['syndrome-nephrotique-enfant', 'Prise de poids par œdèmes.'],
      ['hypothyroidie-adulte', 'Hypothyroïdie (aussi chez l’enfant) : petite taille, TSH.'],
      ['Syndrome de Cushing', 'Corticoïdes, vergetures pourpres, ralentissement statural.'],
    ],
    etiologies: '## Facteurs\n- Alimentation trop riche, sédentarité, facteurs familiaux et socioculturels',
    principes: [
      [
        'Mode de vie (toute la famille)',
        'Stabiliser le poids pendant la croissance.',
        '- Supprimer les **boissons sucrées**, eau à volonté, repas réguliers en famille, fruits et légumes, limiter fritures et grignotage\n- **Activité physique** ≥ 60 min par jour, limiter les écrans à < 2 h, sommeil suffisant\n- Objectif : stabilisation du poids (l’enfant « grandit dans son poids »), approche sans culpabilisation',
      ],
      [
        'Complications',
        'Traiter.',
        '- HTA, dyslipidémie : mesures hygiéno-diététiques puis traitement\n- **Diabète de type 2** : **metformine** (≥ 10 ans) ; apnées : avis ORL\n- Soutien psychologique, lutte contre la stigmatisation',
      ],
      [
        'Prévention',
        'Agir tôt.',
        '- Allaitement maternel, pas de boissons sucrées chez le jeune enfant, suivi de la courbe d’IMC',
      ],
    ],
    molecules: [['metformine', 'alternative', 'Diabète de type 2 de l’adolescent']],
    complications: [
      {
        nom: 'Hypertension artérielle',
        fiche: 'hypertension-arterielle-enfant',
        description: 'Fréquente chez l’adolescent obèse.',
        traitement: '- Mode de vie, antihypertenseurs',
        clinique: '- Souvent asymptomatique',
        paraclinique: '- Mesures répétées',
      },
      {
        nom: 'Diabète de type 2',
        fiche: 'diabete-type-2',
        description: 'Insulinorésistance.',
        traitement: '- Mode de vie, metformine',
        clinique: '- Acanthosis nigricans, polyurie',
        paraclinique: '- Glycémie, HbA1c',
      },
      {
        nom: 'Dyslipidémie',
        fiche: 'dyslipidemies',
        description: 'Risque cardiovasculaire.',
        traitement: '- Alimentation',
        clinique: '',
        paraclinique: '- Bilan lipidique',
      },
      {
        nom: 'Souffrance psychologique',
        description: 'Stigmatisation.',
        traitement: '- Soutien',
        clinique: '- Isolement, tristesse',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Persistance fréquente à l’âge adulte, surtout chez l’adolescent ; amélioration si prise en charge familiale précoce',
    urgences: [],
    symptomes: [
      ['Prise de poids', 'tres_frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Polyurie-polydipsie', 'occasionnel'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
      'ADA — Standards of Care in Diabetes',
    ],
    niveaux: {
      cs: [
        '- Mesure de l’IMC, conseils à la famille, tension artérielle',
        '- Complications, suspicion de cause secondaire',
      ],
      hgr: ['- Bilan métabolique, diététique', ''],
      tert: ['- Endocrinologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Obésité commune',
        type: 'commune',
        description: 'Mode de vie.',
        terrain: '- Enfant urbain',
        fonctionnels: '',
        generaux: '- Croissance staturale normale ou avancée',
        physiques: '- IMC > +2 Z',
        paraclinique: '',
        etiologies: '- Alimentation, sédentarité',
        syndromes: [],
      },
      {
        nom: 'Obésité compliquée de l’adolescent',
        type: 'gravite',
        description: 'Complications métaboliques.',
        terrain: '- Adolescent',
        fonctionnels: '- Ronflements',
        generaux: '',
        physiques: '- Acanthosis nigricans, HTA',
        paraclinique: '- Hyperglycémie, dyslipidémie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Obésité secondaire',
        type: 'etiologique',
        description: 'Endocrinienne ou génétique.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Ralentissement statural',
        physiques: '- Dysmorphie, vergetures',
        paraclinique: '- TSH, cortisol',
        etiologies: '- Hypothyroïdie, Cushing, Prader-Willi',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Malnutrition VIH
  {
    ...MAL,
    slug: 'malnutrition-enfant-vih',
    nom: 'Malnutrition de l’enfant infecté par le VIH',
    resume:
      'Malnutrition aiguë très fréquente chez l’enfant vivant avec le VIH (besoins énergétiques augmentés, diarrhées, infections opportunistes) et mortalité plusieurs fois plus élevée : tester le VIH chez tout enfant malnutri ; protocole MAS standard (F-75, F-100/ATPE, antibiotiques), cotrimoxazole, débuter les ARV dès que l’enfant est stabilisé (en général dans les 2 semaines), rechercher activement la tuberculose et les candidoses ; apports énergétiques augmentés de 10 % (asymptomatique) à 50–100 % (perte de poids).',
    definition:
      'Malnutrition aiguë (modérée ou sévère) ou chronique chez un enfant infecté par le VIH, dont la prise en charge associe la renutrition, le traitement des infections opportunistes et le traitement antirétroviral.',
    physiopathologie:
      '## Mécanismes\n- **Besoins énergétiques augmentés** : +10 % chez l’enfant asymptomatique, +20–30 % en cas de symptômes, **+50–100 %** en cas de perte de poids\n- Apports diminués (candidose buccale, ulcérations, anorexie), **malabsorption** (entéropathie du VIH, diarrhée chronique, cryptosporidiose)\n- Infections opportunistes (**tuberculose**, pneumonies, sepsis)\n- Malnutrition et VIH s’aggravent mutuellement',
    diagnostic:
      '## Critères\n- Mêmes critères anthropométriques que la malnutrition aiguë (P/T, PB, œdèmes) ; suivi de la courbe de poids\n\n## Rechercher\n- **Test VIH** chez tout enfant malnutri (PCR avant 18 mois si la mère est séropositive)\n- **Candidose oropharyngée**, diarrhée chronique, pneumonie, **tuberculose** (contage, toux, fièvre, adénopathies), lésions cutanées, parotides\n- Échec de la renutrition : penser VIH, tuberculose\n\n## Examens\n- TDR VIH, PCR VIH du nourrisson, **CD4**, charge virale si sous ARV\n- **Xpert MTB/RIF**, TB-LAM, radiographie thoracique\n- Glycémie, NFS, TDR paludisme',
    examens: [
      ['confirmation', 'tdr-vih', 'VIH (> 18 mois).'],
      ['confirmation', 'pcr-vih-nourrisson', 'VIH (< 18 mois).'],
      ['premiere_intention', 'anthropometrie', 'P/T, PB.'],
      ['premiere_intention', 'cd4', 'Immunodépression.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose.'],
      ['etiologique', 'tb-lam', 'Tuberculose.'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'charge-virale-vih', 'Suivi sous ARV.'],
    ],
    scores: [],
    differentiels: [
      ['marasme', 'Malnutrition sans VIH.'],
      ['kwashiorkor', 'Œdèmes.'],
      ['tuberculose-enfant', 'Infection associée fréquente.'],
      ['diarrhee-persistante-enfant', 'Diarrhée prolongée.'],
    ],
    etiologies:
      '## Facteurs\n- VIH non traité, infections opportunistes, insécurité alimentaire, décès ou maladie des parents',
    principes: [
      [
        'Renutrition',
        'Protocole standard adapté.',
        '- Malnutrition aiguë sévère : **F-75 puis F-100/ATPE** selon le protocole national, antibiotiques systématiques\n- **Besoins augmentés** : +10 % à +100 % selon les symptômes\n- Soutien à l’alimentation (candidose buccale : nystatine ou fluconazole)',
      ],
      [
        'VIH',
        'Traiter.',
        '- **Cotrimoxazole** prophylactique\n- **ARV** dès la stabilisation clinique (en général dans les 2 semaines suivant l’admission) : schéma à base de **dolutégravir** selon l’âge et le poids\n- Surveillance du syndrome de reconstitution immunitaire',
      ],
      [
        'Infections associées',
        'Rechercher et traiter.',
        '- **Tuberculose** (recherche active, traitement ; isoniazide préventif si non malade)\n- Paludisme, pneumonies, diarrhées (zinc, SRO ou ReSoMal)',
      ],
      [
        'Accompagnement',
        'Assurer le suivi.',
        '- Soutien psychosocial et nutritionnel de la famille, observance, dépistage des frères et sœurs et des parents',
      ],
    ],
    molecules: [
      ['lait-f75', 'premiere', 'Stabilisation (MAS)'],
      ['lait-f100', 'premiere', 'Transition (MAS)'],
      ['atpe', 'premiere', 'Réhabilitation'],
      ['cotrimoxazole', 'premiere', 'Prophylaxie'],
      ['dolutegravir', 'premiere', 'Traitement antirétroviral'],
      ['amoxicilline', 'premiere', 'Antibiothérapie systématique'],
      ['fluconazole', 'alternative', 'Candidose œsophagienne'],
      ['nystatine', 'alternative', 'Candidose buccale'],
      ['isoniazide', 'adjuvant', 'Prévention de la tuberculose'],
      ['zinc', 'adjuvant', 'Diarrhée'],
    ],
    complications: [
      {
        nom: 'Tuberculose',
        fiche: 'tuberculose-enfant',
        description: 'Infection fréquente.',
        traitement: '- Traitement antituberculeux',
        clinique: '- Toux, fièvre, adénopathies',
        paraclinique: '- Xpert',
      },
      {
        nom: 'Candidose œsophagienne',
        fiche: 'candidose-oropharyngee-et-oesophagienne',
        description: 'Refus de manger.',
        traitement: '- Fluconazole',
        clinique: '- Dysphagie',
        paraclinique: '',
      },
      {
        nom: 'Syndrome de reconstitution immunitaire',
        description: 'Après le début des ARV.',
        traitement: '- Poursuite des ARV, traitement des infections',
        clinique: '- Aggravation paradoxale',
        paraclinique: '',
      },
      {
        nom: 'Décès',
        description: 'Mortalité élevée.',
        traitement: '- Prise en charge intégrée précoce',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité 2 à 3 fois plus élevée que chez l’enfant malnutri non infecté ; nette amélioration avec ARV précoces',
    urgences: ['malnutrition-aigue-severe-compliquee'],
    symptomes: [
      ['Perte de poids', 'tres_frequent'],
      ['Diarrhée', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Toux', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Œdèmes', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: [
        '- Test VIH chez tout enfant malnutri, ATPE, cotrimoxazole, orientation',
        '- MAS compliquée, VIH positif',
      ],
      hgr: ['- UNTI, ARV, recherche de tuberculose', ''],
      tert: ['- Cas complexes, échec thérapeutique', ''],
    },
    alertes: {
      'malnutrition-aigue-severe-compliquee': 'Enfant VIH émacié avec complications ou sans appétit',
    },
    formes: [
      {
        nom: 'Malnutrition aiguë sévère et VIH',
        type: 'commune',
        description: 'Forme fréquente à l’hôpital.',
        terrain: '- Enfant VIH non traité',
        fonctionnels: '- Diarrhée, anorexie',
        generaux: '- Amaigrissement',
        physiques: '- Candidose, adénopathies',
        paraclinique: '- VIH positif, CD4 bas',
        etiologies: '- VIH, infections opportunistes',
        syndromes: [],
      },
      {
        nom: 'Malnutrition et tuberculose associée',
        type: 'gravite',
        description: 'Échec de la renutrition.',
        terrain: '- Contage',
        fonctionnels: '- Toux',
        generaux: '- Fièvre prolongée',
        physiques: '- Adénopathies',
        paraclinique: '- Xpert positif',
        etiologies: '',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
      },
    ],
  },
];
