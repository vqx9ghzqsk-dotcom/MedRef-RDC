'use strict';

/**
 * Lot 54 (phase 2, post-partum et gynécologie) — difficultés de l'allaitement, dépression du
 * post-partum, anémie du post-partum, aménorrhées et troubles du cycle, dysménorrhée. Rédigé par
 * IA (OMS, UNICEF, mhGAP, Normes et directives SR) : à valider.
 */

const PP = { departement: 'gynecologie-obstetrique', specialite: 'Post-partum' };
const GYN = { departement: 'gynecologie-obstetrique', specialite: 'Gynécologie' };

module.exports = [
  // =================================================================== Allaitement
  {
    ...PP,
    slug: 'difficultes-allaitement',
    nom: 'Difficultés de l’allaitement',
    resume:
      'Problèmes fréquents des premières semaines qui conduisent à l’arrêt de l’allaitement exclusif : mauvaise prise du sein (cause principale), crevasses, engorgement, canal lactifère bouché, mastite, sentiment d’« insuffisance de lait », candidose du mamelon, enfant qui tète mal (prématuré, frein de langue) ; observer une tétée, corriger la position et la prise du sein, tétées à la demande et fréquentes (8–12 par 24 h), poursuivre l’allaitement en cas de mastite, antibiotiques si mastite infectieuse ; soutien et conseil (initiative Hôpital ami des bébés).',
    definition:
      'Ensemble des difficultés maternelles ou infantiles compromettant la mise en place ou la poursuite de l’allaitement maternel exclusif recommandé jusqu’à 6 mois.',
    physiopathologie:
      '## Mécanismes\n- **Mauvaise prise du sein** → crevasses, douleur, vidange incomplète → engorgement, baisse de production\n- Production de lait régulée par la **demande** (prolactine) et l’éjection par l’ocytocine (freinée par le stress et la douleur)\n- Stase de lait → **engorgement**, **canal bouché**, **mastite** (inflammatoire puis infectieuse : Staphylococcus aureus), **abcès**\n\n## Facteurs\n- Séparation mère-enfant, compléments (biberons, eau, tétines), césarienne, prématurité, croyances (colostrum jeté), retour au travail, VIH (conseil spécifique)',
    diagnostic:
      '## Évaluation\n- **Observer une tétée** : position (enfant face au sein, ventre contre ventre), **prise du sein** (bouche grande ouverte, lèvre inférieure retroussée, menton contre le sein, plus d’aréole visible au-dessus), succion lente et profonde, déglutition audible\n- Nombre de tétées, de couches mouillées (≥ 6/24 h après J5), selles, **courbe de poids** (reprise du poids de naissance vers J10–14)\n\n## Problèmes\n- **Crevasses** : douleur à la tétée, fissures\n- **Engorgement** : seins durs, tendus, douloureux, bilatéraux (J3–J5)\n- **Mastite** : zone rouge, chaude, douloureuse, unilatérale, **fièvre**, malaise\n- **Abcès** : masse fluctuante\n- **Candidose** : douleur brûlante, mamelon rose brillant, muguet chez l’enfant',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Poids de l’enfant.'],
      ['deuxieme_intention', 'echographie-parties-molles', 'Abcès du sein.'],
    ],
    scores: [],
    differentiels: [
      ['mastite-abces-du-sein', 'Infection du sein.'],
      ['Insuffisance réelle de lait', 'Mauvaise prise de poids malgré une bonne technique.'],
      ['allergie-proteines-lait-vache', 'Symptômes digestifs de l’enfant.'],
    ],
    etiologies: '## Causes\n- Mauvaise prise du sein, tétées insuffisantes, compléments, séparation, douleur',
    principes: [
      [
        'Bases',
        'Bonne technique et demande.',
        '- **Mise au sein dans l’heure** suivant la naissance, contact peau à peau, cohabitation\n- Tétées **à la demande**, 8–12 fois par 24 h, les deux seins, sans biberon ni eau\n- Corriger la **position et la prise du sein** (aide pratique)',
      ],
      [
        'Problèmes du sein',
        'Traiter sans arrêter l’allaitement.',
        '- **Crevasses** : corriger la prise, appliquer du lait maternel, laisser sécher\n- **Engorgement** : tétées fréquentes, expression manuelle, compresses froides après, chaudes avant\n- **Mastite** : **continuer l’allaitement** (ou exprimer), repos, antalgiques (**paracétamol**, **ibuprofène**) ; si fièvre > 24 h ou crevasse infectée : **cloxacilline** 500 mg 4 fois par jour pendant 10–14 jours\n- **Abcès** : drainage (ponction ou incision), antibiotiques, allaitement possible du côté sain\n- **Candidose** : miconazole ou nystatine sur le mamelon et dans la bouche de l’enfant',
      ],
      [
        'Soutien',
        'Accompagner.',
        '- Conseil par des agents formés, groupes de soutien, implication du conjoint\n- Expression et conservation du lait au retour au travail\n- Mère VIH positive sous ARV : allaitement exclusif recommandé (OMS)',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'premiere', 'Douleur, inflammation'],
      ['cloxacilline', 'premiere', 'Mastite infectieuse'],
      ['miconazole-nitrate', 'alternative', 'Candidose du mamelon'],
      ['nystatine', 'alternative', 'Muguet de l’enfant'],
      ['domperidone', 'deuxieme', 'Insuffisance de lait persistante (avis spécialisé)'],
    ],
    complications: [
      {
        nom: 'Mastite et abcès du sein',
        fiche: 'mastite-abces-du-sein',
        description: 'Stase, crevasse.',
        traitement: '- Antibiotiques, drainage',
        clinique: '- Sein rouge, fièvre',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Arrêt précoce de l’allaitement',
        description: 'Difficultés non résolues.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Mauvaise prise de poids de l’enfant',
        fiche: 'difficultes-alimentation-nouveau-ne',
        description: 'Transfert de lait insuffisant.',
        traitement: '- Correction de la technique, compléments si nécessaire',
        clinique: '- Courbe plate',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- La grande majorité des difficultés se résolvent avec un soutien pratique adapté',
    urgences: [],
    symptomes: [
      ['Douleur mammaire', 'tres_frequent'],
      ['Fièvre', 'occasionnel'],
      ['Pleurs excessifs', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'UNICEF — santé et nutrition de l’enfant',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Observation de la tétée, conseil, traitement de la mastite',
        '- Abcès, enfant qui ne prend pas de poids',
      ],
      hgr: ['- Drainage d’abcès', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Crevasses et engorgement',
        type: 'commune',
        description: 'Premiers jours.',
        terrain: '- Primipare',
        fonctionnels: '- Douleur à la tétée',
        generaux: '',
        physiques: '- Seins tendus, fissures',
        paraclinique: '',
        etiologies: '- Mauvaise prise du sein',
        syndromes: [],
      },
      {
        nom: 'Mastite',
        type: 'gravite',
        description: 'Inflammation infectieuse.',
        terrain: '',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre',
        physiques: '- Zone rouge chaude',
        paraclinique: '',
        etiologies: '- S. aureus',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Dépression du post-partum
  {
    ...PP,
    slug: 'depression-du-post-partum',
    nom: 'Dépression du post-partum',
    resume:
      'Épisode dépressif dans l’année qui suit l’accouchement (10–20 % des mères, davantage en contexte de pauvreté, de violences et de conflits) : tristesse, pleurs, perte d’intérêt, fatigue, troubles du sommeil indépendants du bébé, culpabilité, sentiment d’incapacité, idées de mort ; à distinguer du « baby blues » (J3–J10, transitoire) et de la psychose puerpérale (urgence) ; dépistage aux consultations postnatales (EPDS, questions simples), soutien psychosocial, thérapie (Thinking Healthy, mhGAP), sertraline compatible avec l’allaitement ; évaluer le risque suicidaire et la sécurité de l’enfant.',
    definition:
      'Épisode dépressif caractérisé débutant pendant la grossesse ou dans les 12 mois suivant l’accouchement.',
    physiopathologie:
      '## Facteurs\n- Antécédents de dépression, **violences conjugales**, **manque de soutien**, pauvreté, grossesse non désirée, adolescence\n- Complications obstétricales, **décès ou maladie du nouveau-né**, mort-né, VIH, conflits armés, déplacement\n- Chute hormonale, privation de sommeil\n\n## Conséquences\n- Souffrance maternelle, **suicide** (cause de décès maternel), difficultés d’allaitement, interactions mère-enfant altérées → retard de croissance et de développement de l’enfant',
    diagnostic:
      '## Clinique (≥ 2 semaines)\n- **Humeur triste**, pleurs, **perte d’intérêt** et de plaisir\n- Fatigue, troubles du sommeil et de l’appétit, difficultés de concentration\n- **Culpabilité**, sentiment d’être une mauvaise mère, anxiété excessive pour le bébé, pensées intrusives\n- **Idées de mort** ou de suicide, parfois d’infanticide\n- Plaintes somatiques fréquentes (céphalées, douleurs)\n\n## Distinguer\n- **Baby blues** : J3–J10, labilité émotionnelle, résolutif en 2 semaines\n- **Psychose puerpérale** : délire, confusion, hallucinations (urgence)\n\n## Dépistage\n- EPDS (échelle d’Édimbourg) ou 2 questions (humeur, perte d’intérêt) aux CPN et consultations postnatales\n- **Évaluer le risque suicidaire** et la sécurité de l’enfant ; TSH, NFS (anémie)',
    examens: [
      ['etiologique', 'tsh', 'Thyroïdite du post-partum.'],
      ['etiologique', 'nfs', 'Anémie.'],
    ],
    scores: [],
    differentiels: [
      ['psychose-puerperale', 'Délire, confusion : urgence.'],
      ['depression', 'Épisode dépressif hors post-partum.'],
      ['anemie-du-post-partum', 'Fatigue, essoufflement.'],
      ['dysthyroidies-et-grossesse', 'Thyroïdite du post-partum.'],
      ['Baby blues', 'Transitoire, J3–J10.'],
    ],
    etiologies:
      '## Facteurs\n- Antécédents, violences, manque de soutien, pauvreté, complications obstétricales, perte d’un enfant',
    principes: [
      [
        'Interventions psychosociales',
        'En première intention.',
        '- Écoute, **psychoéducation**, implication du conjoint et de la famille, aide pratique (sommeil, tâches)\n- **Thérapies brèves** : programme OMS « Thinking Healthy », activation comportementale, thérapie interpersonnelle (agents communautaires formés)\n- Dépistage et prise en charge des **violences**',
      ],
      [
        'Médicaments',
        'Dépression modérée à sévère.',
        '- **Sertraline** 25–50 mg/j puis jusqu’à 100–200 mg/j (compatible avec l’allaitement), ou fluoxétine ; poursuite 6–12 mois après la rémission\n- Éviter l’amitriptyline à forte dose (toxicité en surdosage)',
      ],
      [
        'Sécurité',
        'Évaluer le risque.',
        '- **Idées suicidaires** ou d’infanticide : surveillance rapprochée, ne pas laisser seule, hospitalisation si risque élevé (mhGAP)\n- Suivi de la croissance et du développement de l’enfant',
      ],
    ],
    molecules: [
      ['sertraline', 'premiere', 'Dépression modérée à sévère'],
      ['fluoxetine', 'alternative', 'Dépression'],
    ],
    complications: [
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Dépression sévère.',
        traitement: '- Évaluation, protection, traitement',
        clinique: '- Idées de mort',
        paraclinique: '',
      },
      {
        nom: 'Troubles du développement de l’enfant',
        fiche: 'retard-developpement-psychomoteur',
        description: 'Interactions altérées.',
        traitement: '- Traitement maternel, stimulation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Arrêt de l’allaitement',
        fiche: 'difficultes-allaitement',
        description: 'Épuisement.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bonne réponse au traitement ; récidive fréquente aux grossesses suivantes (prévention)',
    urgences: [],
    symptomes: [
      ['Humeur dépressive', 'tres_frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Anxiété', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Idées suicidaires', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Dépistage aux consultations postnatales, soutien psychosocial',
        '- Idées suicidaires, psychose',
      ],
      hgr: ['- Sertraline, suivi', ''],
      tert: ['- Psychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dépression du post-partum modérée',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Mère dans l’année suivant l’accouchement',
        fonctionnels: '- Tristesse, fatigue, culpabilité',
        generaux: '',
        physiques: '',
        paraclinique: '- EPDS élevé',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dépression sévère avec idées suicidaires',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Idées de mort, d’infanticide',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Anémie du post-partum
  {
    ...PP,
    slug: 'anemie-du-post-partum',
    nom: 'Anémie du post-partum',
    resume:
      'Très fréquente en RDC (anémie de la grossesse + pertes de l’accouchement, hémorragie du post-partum) : fatigue, essoufflement, palpitations, vertiges, difficultés d’allaitement, dépression, infections ; Hb < 11 g/dL (sévère < 7 g/dL) ; fer oral 60–120 mg/j + acide folique pendant au moins 3 mois, fer IV si anémie modérée à sévère ou intolérance, transfusion si anémie mal tolérée ou Hb < 7 avec symptômes ; traiter le paludisme et les parasitoses ; prévention : supplémentation pendant la grossesse, prévention de l’hémorragie du post-partum.',
    definition:
      'Hémoglobine inférieure à 11 g/dL (ou 10 g/dL selon les seuils) dans les semaines suivant l’accouchement ; sévère si < 7 g/dL.',
    physiopathologie:
      '## Causes\n- **Anémie préexistante** (carence martiale, paludisme, parasitoses, drépanocytose)\n- **Hémorragie** de l’accouchement ou du post-partum, césarienne\n- Carences en folates et B12, infections, VIH\n\n## Conséquences\n- Fatigue, dépression, difficultés d’allaitement et de soins de l’enfant, infections, insuffisance cardiaque (formes sévères)',
    diagnostic:
      '## Clinique\n- **Pâleur**, fatigue, **essoufflement**, palpitations, vertiges, céphalées\n- Signes de gravité : dyspnée de repos, tachycardie, hypotension, insuffisance cardiaque\n\n## Examens\n- **Hb** (NFS), ferritine si disponible, frottis\n- **TDR paludisme**, examen des selles, électrophorèse de l’hémoglobine si contexte\n- Recherche d’un saignement persistant (rétention placentaire, endométrite)',
    examens: [
      ['confirmation', 'nfs', 'Hémoglobine.'],
      ['premiere_intention', 'ferritine', 'Carence martiale.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
      ['etiologique', 'examen-parasitologique-selles', 'Parasitoses.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['premiere_intention', 'reticulocytes', 'Régénération.'],
    ],
    scores: [],
    differentiels: [
      ['anemie-de-la-grossesse', 'Anémie pendant la grossesse.'],
      ['hemorragie-secondaire-post-partum', 'Saignement persistant.'],
      ['depression-du-post-partum', 'Fatigue, tristesse.'],
      ['cardiomyopathie-du-peripartum', 'Dyspnée d’origine cardiaque.'],
    ],
    etiologies:
      '## Causes\n- Carence martiale, hémorragie du post-partum, paludisme, parasitoses, drépanocytose',
    principes: [
      [
        'Fer',
        'Reconstituer les réserves.',
        '- **Fer oral** 60–120 mg de fer élément par jour + **acide folique** 400 µg, pendant au moins **3 mois** (compatible avec l’allaitement)\n- **Fer IV** (fer dextran ou carboxymaltose si disponible) si Hb < 9–10 g/dL, intolérance, mauvaise observance ou besoin de correction rapide',
      ],
      [
        'Transfusion',
        'Si nécessaire.',
        '- Hb < 7 g/dL avec symptômes, signes d’insuffisance cardiaque, saignement actif',
      ],
      [
        'Causes et prévention',
        'Traiter.',
        '- Traitement du paludisme, déparasitage, prise en charge du saignement\n- Prévention : fer-acide folique pendant la grossesse, **gestion active de la délivrance**, espacement des naissances, alimentation riche en fer',
      ],
    ],
    molecules: [
      ['fumarate-ferreux-fer', 'premiere', 'Fer oral'],
      ['acide-folique', 'premiere', 'Supplémentation'],
      ['fer-dextran', 'alternative', 'Fer IV'],
      ['gluconate-ferrique-de-sodium', 'alternative', 'Fer IV'],
      ['albendazole', 'adjuvant', 'Déparasitage'],
    ],
    complications: [
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque',
        description: 'Anémie sévère.',
        traitement: '- Transfusion lente, diurétique',
        clinique: '- Dyspnée, œdèmes',
        paraclinique: '',
      },
      {
        nom: 'Dépression du post-partum',
        fiche: 'depression-du-post-partum',
        description: 'Fatigue persistante.',
        traitement: '- Correction de l’anémie, soutien',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Infections',
        fiche: 'sepsis-maternel-endometrite',
        description: 'Immunité diminuée.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Correction en 6 à 12 semaines sous fer ; récidive fréquente si les grossesses sont rapprochées',
    urgences: [],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Asthénie', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Palpitations', 'frequent'],
      ['Vertiges', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Normes et directives de santé de la reproduction'],
    niveaux: {
      cs: ['- Hb, fer-acide folique, TDR paludisme', '- Hb < 7 g/dL, dyspnée'],
      hgr: ['- Fer IV, transfusion', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Anémie modérée du post-partum',
        type: 'commune',
        description: 'Fer oral.',
        terrain: '- Accouchée',
        fonctionnels: '- Fatigue',
        generaux: '',
        physiques: '- Pâleur',
        paraclinique: '- Hb 7–11 g/dL',
        etiologies: '- Carence martiale, saignement',
        syndromes: ['syndrome-anemique'],
      },
      {
        nom: 'Anémie sévère',
        type: 'gravite',
        description: 'Transfusion.',
        terrain: '- Après HPP',
        fonctionnels: '- Dyspnée de repos',
        generaux: '',
        physiques: '- Tachycardie',
        paraclinique: '- Hb < 7 g/dL',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Aménorrhées
  {
    ...GYN,
    slug: 'amenorrhees-troubles-du-cycle',
    nom: 'Aménorrhées et troubles du cycle',
    resume:
      'Aménorrhée primaire (absence de règles à 15 ans ou 3 ans après le début des seins) ou secondaire (arrêt des règles > 3 mois, 6 mois si cycles irréguliers) et cycles irréguliers : éliminer d’abord une grossesse (β-hCG) ; causes fréquentes : allaitement, contraception (injectable, implant), syndrome des ovaires polykystiques, hyperprolactinémie (médicaments), dysthyroïdie, malnutrition et stress, insuffisance ovarienne, synéchies après curetage ou infection (tuberculose génitale) ; examen, β-hCG, TSH, prolactine, échographie pelvienne ; traitement selon la cause.',
    definition:
      'Absence de règles (primaire ou secondaire) et anomalies de la fréquence, de la régularité ou de la durée des cycles menstruels.',
    physiopathologie:
      '## Causes physiologiques\n- **Grossesse** (toujours à éliminer), **allaitement**, ménopause, contraception progestative (injectable, implant)\n\n## Causes hypothalamo-hypophysaires\n- **Malnutrition**, perte de poids, stress, sport intensif, maladie chronique\n- **Hyperprolactinémie** : médicaments (antipsychotiques, métoclopramide), prolactinome, hypothyroïdie\n- Syndrome de Sheehan (après hémorragie du post-partum)\n\n## Causes ovariennes\n- **Syndrome des ovaires polykystiques** (SOPK) : cycles longs, hirsutisme, acné, surpoids\n- Insuffisance ovarienne prématurée, syndrome de Turner\n\n## Causes utérines\n- **Synéchies** (après curetage, endométrite, **tuberculose génitale**), malformations, hymen imperforé (aménorrhée primaire avec douleurs cycliques)',
    diagnostic:
      '## Démarche\n- **β-hCG** systématique\n- Interrogatoire : contraception, allaitement, médicaments, poids, stress, curetage ou infection, hémorragie du post-partum, galactorrhée, bouffées de chaleur, hirsutisme\n- Examen : poids, IMC, caractères sexuels secondaires, pilosité, galactorrhée, examen gynécologique\n\n## Examens\n- **TSH**, **prolactine**, **FSH/LH**, œstradiol\n- **Échographie pelvienne** (ovaires polykystiques, utérus, endomètre)\n- Caryotype (aménorrhée primaire), hystérosalpingographie (synéchies)',
    examens: [
      ['premiere_intention', 'beta-hcg', 'Grossesse.'],
      ['premiere_intention', 'tsh', 'Dysthyroïdie.'],
      ['premiere_intention', 'prolactinemie', 'Hyperprolactinémie.'],
      ['premiere_intention', 'gonadotrophines-lh-fsh', 'Origine centrale ou ovarienne.'],
      ['premiere_intention', 'echographie-pelvienne', 'SOPK, utérus.'],
      ['etiologique', 'caryotype', 'Aménorrhée primaire.'],
      ['etiologique', 'hysterosalpingographie', 'Synéchies.'],
    ],
    scores: [],
    differentiels: [
      ['retard-pubertaire', 'Aménorrhée primaire avec absence de puberté.'],
      ['syndrome-de-turner', 'Petite taille, aménorrhée primaire.'],
      ['menometrorragies', 'Saignements abondants ou irréguliers.'],
      ['infertilite-du-couple', 'Troubles de l’ovulation.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Grossesse, allaitement, contraception, SOPK, hyperprolactinémie, malnutrition, synéchies',
    principes: [
      [
        'Traitement selon la cause',
        'Étiologique.',
        '- **SOPK** : perte de poids, **pilule œstroprogestative** ou progestatif cyclique (protection de l’endomètre), **metformine** si troubles métaboliques ; désir de grossesse : **clomifène** ou **létrozole**\n- **Hyperprolactinémie** : arrêt du médicament en cause, **bromocriptine** ou cabergoline (prolactinome)\n- **Hypothyroïdie** : lévothyroxine ; **malnutrition**, stress : prise en charge globale\n- **Synéchies** : hystéroscopie (centre spécialisé) ; tuberculose génitale : antituberculeux\n- **Insuffisance ovarienne** : traitement hormonal substitutif',
      ],
      [
        'Information',
        'Rassurer.',
        '- Aménorrhée sous contraceptif progestatif : sans danger, information\n- Conseil sur la fertilité',
      ],
    ],
    molecules: [
      ['medroxyprogesterone', 'premiere', 'Progestatif cyclique'],
      ['ethinylestradiol', 'alternative', 'Pilule œstroprogestative (SOPK)'],
      ['metformine', 'alternative', 'SOPK avec troubles métaboliques'],
      ['clomifene', 'alternative', 'Induction de l’ovulation'],
      ['letrozole', 'alternative', 'Induction de l’ovulation (SOPK)'],
      ['bromocriptine', 'alternative', 'Hyperprolactinémie'],
      ['levothyroxine', 'adjuvant', 'Hypothyroïdie'],
    ],
    complications: [
      {
        nom: 'Infertilité',
        fiche: 'infertilite-du-couple',
        description: 'Anovulation, synéchies.',
        traitement: '- Traitement de la cause',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Hyperplasie de l’endomètre',
        description: 'SOPK sans progestatif.',
        traitement: '- Progestatifs',
        clinique: '- Saignements anormaux',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Ostéoporose',
        description: 'Carence en œstrogènes prolongée.',
        traitement: '- Traitement hormonal',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon dans la plupart des causes fonctionnelles ; fertilité dépendante de la cause',
    urgences: [],
    symptomes: [
      ['Aménorrhée', 'tres_frequent'],
      ['Troubles du cycle menstruel', 'tres_frequent'],
      ['Galactorrhée', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- β-hCG, interrogatoire, conseils', '- Aménorrhée inexpliquée, galactorrhée'],
      hgr: ['- Bilan hormonal, échographie', ''],
      tert: ['- Gynécologie-endocrinologie, hystéroscopie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Aménorrhée secondaire',
        type: 'commune',
        description: 'Arrêt des règles.',
        terrain: '- Femme en âge de procréer',
        fonctionnels: '- Absence de règles',
        generaux: '',
        physiques: '',
        paraclinique: '- β-hCG négative',
        etiologies: '- SOPK, prolactine, malnutrition',
        syndromes: [],
      },
      {
        nom: 'Aménorrhée primaire',
        type: 'etiologique',
        description: 'Jamais de règles.',
        terrain: '- Adolescente',
        fonctionnels: '',
        generaux: '- Petite taille possible',
        physiques: '- Caractères sexuels absents ou présents',
        paraclinique: '- Caryotype, FSH',
        etiologies: '- Turner, malformations, hymen imperforé',
        syndromes: [],
      },
      {
        nom: 'Syndrome des ovaires polykystiques',
        type: 'etiologique',
        description: 'Cycles longs.',
        terrain: '- Surpoids',
        fonctionnels: '- Spanioménorrhée',
        generaux: '',
        physiques: '- Hirsutisme, acné',
        paraclinique: '- Ovaires multifolliculaires',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dysménorrhée
  {
    ...GYN,
    slug: 'dysmenorrhee',
    nom: 'Dysménorrhée',
    resume:
      'Douleurs pelviennes menstruelles de la femme adulte : primaire (sans lésion, débutant tôt après les premières règles) ou secondaire, plus fréquente à l’âge adulte (endométriose, adénomyose, fibromes, séquelles d’infection génitale haute, sténose cervicale, DIU au cuivre) ; AINS en première intention, contraception hormonale ; dysménorrhée qui apparaît ou s’aggrave, résistante aux AINS ou associée à une dyspareunie, à une infertilité ou à des saignements anormaux : examen gynécologique et échographie.',
    definition:
      'Douleurs pelviennes cycliques associées aux règles, primaires (sans pathologie pelvienne) ou secondaires (liées à une lésion).',
    physiopathologie:
      '## Primaire\n- Excès de **prostaglandines** endométriales → contractions utérines, ischémie\n\n## Secondaire\n- **Endométriose** (tissu endométrial hors de l’utérus) : dysménorrhée progressive, dyspareunie, infertilité\n- **Adénomyose** : utérus augmenté, règles abondantes\n- **Fibromes** sous-muqueux, **infection génitale haute** et séquelles (adhérences), sténose du col (après conisation ou curetage), **DIU au cuivre**',
    diagnostic:
      '## Clinique\n- Douleur en crampes au début des règles, irradiations lombaires et aux cuisses, nausées, diarrhée, céphalées\n\n## Orientation vers une cause secondaire\n- Début tardif ou aggravation progressive, **résistance aux AINS**, **dyspareunie** profonde, douleurs hors règles, **infertilité**, **ménorragies**, masse pelvienne, fièvre, leucorrhées\n\n## Examens\n- Examen gynécologique, **échographie pelvienne** (fibromes, endométriome, adénomyose)\n- Dépistage des IST, β-hCG si doute\n- Cœlioscopie (endométriose) en centre spécialisé',
    examens: [
      ['premiere_intention', 'echographie-pelvienne', 'Fibromes, endométriose, adénomyose.'],
      ['etiologique', 'prelevement-vaginal', 'Infection.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
      ['premiere_intention', 'nfs', 'Anémie (ménorragies).'],
    ],
    scores: [],
    differentiels: [
      ['dysmenorrhee-adolescente', 'Forme de l’adolescente.'],
      ['infection-genitale-haute', 'Fièvre, leucorrhées.'],
      ['fibromes-uterins', 'Ménorragies, utérus augmenté.'],
      ['kystes-de-l-ovaire', 'Masse annexielle.'],
      ['grossesse-extra-uterine', 'Retard de règles, saignements.'],
    ],
    etiologies: '## Causes\n- Primaire ; secondaire (endométriose, adénomyose, fibromes, infection, DIU)',
    principes: [
      [
        'Dysménorrhée primaire',
        'Soulager.',
        '- **AINS** dès le début des règles : **ibuprofène** 400 mg toutes les 6–8 h, **acide méfénamique** 500 mg 3 fois par jour, 2–3 jours\n- **Contraception hormonale** (pilule œstroprogestative, progestatifs, DIU au lévonorgestrel) si contraception souhaitée ou échec\n- Chaleur, activité physique',
      ],
      [
        'Dysménorrhée secondaire',
        'Traiter la cause.',
        '- **Endométriose** : AINS, progestatifs en continu (dydrogestérone, médroxyprogestérone), pilule en continu ; chirurgie en centre spécialisé\n- **Fibromes**, adénomyose : traitement médical ou chirurgical\n- **Infection** : antibiotiques ; DIU au cuivre mal toléré : changer de méthode',
      ],
    ],
    molecules: [
      ['ibuprofene', 'premiere', 'Douleur'],
      ['acide-mefenamique', 'premiere', 'Douleur'],
      ['ethinylestradiol', 'alternative', 'Contraception œstroprogestative'],
      ['levonorgestrel', 'alternative', 'Contraception, DIU hormonal'],
      ['dydrogesterone', 'alternative', 'Endométriose'],
      ['medroxyprogesterone', 'alternative', 'Endométriose'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Infertilité',
        fiche: 'infertilite-du-couple',
        description: 'Endométriose, séquelles infectieuses.',
        traitement: '- Prise en charge spécialisée',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Anémie',
        fiche: 'anemie-ferriprive',
        description: 'Ménorragies associées.',
        traitement: '- Fer',
        clinique: '- Pâleur',
        paraclinique: '- NFS',
      },
    ],
    evolution: '## Pronostic\n- Primaire : bonne réponse aux AINS ; secondaire : selon la cause',
    urgences: [],
    symptomes: [
      ['Dysménorrhée', 'tres_frequent'],
      ['Douleur pelvienne', 'tres_frequent'],
      ['Nausées', 'occasionnel'],
      ['Douleur lombaire', 'occasionnel'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- AINS, contraception', '- Dysménorrhée secondaire suspectée'],
      hgr: ['- Échographie, gynécologie', ''],
      tert: ['- Cœlioscopie (endométriose)', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dysménorrhée primaire',
        type: 'commune',
        description: 'Sans lésion.',
        terrain: '- Femme jeune',
        fonctionnels: '- Crampes menstruelles',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '',
        etiologies: '- Prostaglandines',
        syndromes: [],
      },
      {
        nom: 'Dysménorrhée secondaire',
        type: 'etiologique',
        description: 'Lésion pelvienne.',
        terrain: '- Femme de plus de 25 ans',
        fonctionnels: '- Dyspareunie, douleurs progressives',
        generaux: '',
        physiques: '- Utérus augmenté, nodules',
        paraclinique: '- Échographie anormale',
        etiologies: '- Endométriose, adénomyose, fibromes',
        syndromes: [],
      },
    ],
  },
];
