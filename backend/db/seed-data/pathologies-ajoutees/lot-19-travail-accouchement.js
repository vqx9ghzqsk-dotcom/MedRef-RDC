'use strict';

/**
 * Lot 19 (travail et accouchement) — accouchement normal, travail prolongé et partogramme,
 * dystocie et disproportion fœto-pelvienne, souffrance fœtale aiguë, césarienne, procidence
 * du cordon, délivrance et gestion active de la troisième période, rétention placentaire.
 * Rédigé par IA (OMS 2018 soins intrapartum, FIGO, RCOG) : à valider.
 */

const TRAV = { departement: 'gynecologie-obstetrique', specialite: 'Travail et accouchement' };

module.exports = [
  // =================================================================== Accouchement normal
  {
    ...TRAV,
    slug: 'accouchement-normal',
    nom: 'Accouchement normal et soins pendant le travail',
    resume:
      'Travail spontané à terme, présentation céphalique : accompagnement respectueux, surveillance (BCF toutes les 15–30 min, contractions, dilatation, constantes), liberté de position, hydratation, gestion active de la délivrance, soins essentiels du nouveau-né.',
    definition:
      'Accouchement à terme (37–42 SA) d’un fœtus unique en présentation céphalique, débutant spontanément, à faible risque, aboutissant à la naissance spontanée d’un enfant en bonne santé, suivie de la délivrance.',
    physiopathologie:
      '## Phases\n- **1re période** : phase de latence (jusqu’à 5 cm), phase active (5 cm à dilatation complète)\n- **2e période** : expulsion\n- **3e période** : délivrance\n- **4e période** : surveillance des 2 heures suivantes',
    diagnostic:
      '## Diagnostic du travail\n- Contractions régulières douloureuses avec modification du col\n\n## Surveillance (OMS 2018)\n- BCF toutes les 15–30 min en phase active, toutes les 5 min à l’expulsion\n- Contractions, dilatation toutes les 4 h (phase active), descente de la présentation\n- PA, pouls, température, diurèse\n- **Partogramme** ou outil de l’OMS (Labour Care Guide)',
    examens: [
      [
        'premiere_intention',
        'cardiotocographie',
        'Auscultation intermittente (Pinard, Doppler) ou enregistrement.',
      ],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie à l’admission.'],
      ['premiere_intention', 'tdr-vih', 'Si statut inconnu.'],
      ['premiere_intention', 'nfs', 'Hb à l’admission si possible.'],
    ],
    scores: ['apgar'],
    differentiels: [
      ['Faux travail', 'Contractions irrégulières sans modification du col.'],
      ['menace-accouchement-premature', 'Avant 37 SA.'],
    ],
    etiologies:
      '## Facteurs favorables\n- CPN suivies, accompagnement continu, accouchement par du personnel qualifié',
    principes: [
      [
        'Soins respectueux',
        'Améliorer l’expérience et les résultats.',
        '- Accompagnant(e) de son choix, intimité, consentement\n- Liberté de mouvement et de position, boissons et repas légers\n- Pas de rasage, de lavement ni d’épisiotomie systématiques\n- Analgésie selon les possibilités',
      ],
      [
        'Surveillance',
        'Dépister tôt les anomalies.',
        '- Partogramme ; durée de la phase active variable (pas de règle « 1 cm/h » isolée selon l’OMS 2018)\n- Expulsion : poussées spontanées, position libre, protection du périnée',
      ],
      [
        'Délivrance et nouveau-né',
        'Prévenir l’hémorragie.',
        '- **Ocytocine** 10 UI IM dans la minute suivant la naissance (gestion active)\n- Clampage retardé du cordon (1–3 min), **peau à peau**, allaitement dans l’heure\n- Soins essentiels : séchage, chaleur, vitamine K, prophylaxie oculaire, chlorhexidine du cordon',
      ],
      [
        'Post-partum immédiat',
        'Surveiller.',
        '- Saignement, tonicité utérine, PA, pouls toutes les 15 min pendant 2 h\n- Planification familiale du post-partum',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Gestion active de la délivrance'],
      ['vitamine-k1-phytomenadione', 'premiere', 'Nouveau-né'],
      ['tetracycline', 'premiere', 'Prophylaxie oculaire du nouveau-né'],
      ['chlorhexidine-gluconate', 'premiere', 'Soins du cordon'],
      ['lidocaine', 'adjuvant', 'Réfection du périnée'],
      ['paracetamol', 'adjuvant', 'Douleur du post-partum'],
    ],
    complications: [
      {
        nom: 'Travail prolongé',
        fiche: 'travail-prolonge-partogramme',
        description: 'Stagnation.',
        traitement: '- Évaluation, ocytocine, césarienne',
        clinique: '- Partogramme franchi',
        paraclinique: '',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Atonie.',
        traitement: '- Utérotoniques',
        clinique: '- Saignement',
        paraclinique: '',
      },
      {
        nom: 'Déchirures périnéales',
        description: 'Expulsion.',
        traitement: '- Suture',
        clinique: '- Saignement',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent avec un personnel qualifié et une surveillance adaptée',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Contractions utérines', 'tres_frequent'],
      ['Douleur pelvienne', 'tres_frequent'],
      ['Écoulement de liquide amniotique', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- Accouchement eutocique par une sage-femme, partogramme, GATPA, soins du nouveau-né',
        '- Anomalie au partogramme, signes de danger',
      ],
      hgr: ['- Prise en charge des complications', ''],
      tert: ['', ''],
    },
    alertes: { 'hemorragie-du-post-partum-urgence': 'Saignement > 500 mL ou utérus mou après la naissance' },
    formes: [
      {
        nom: 'Travail eutocique',
        type: 'commune',
        description: 'Évolution normale.',
        terrain: '- Femme à terme, grossesse normale',
        fonctionnels: '- Contractions régulières',
        generaux: '',
        physiques: '- Dilatation progressive, présentation céphalique',
        paraclinique: '- BCF normaux',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Travail prolongé
  {
    ...TRAV,
    slug: 'travail-prolonge-partogramme',
    nom: 'Travail prolongé et partogramme',
    resume:
      'Partogramme : outil de surveillance du travail (dilatation, descente, contractions, BCF, constantes) ; franchissement de la ligne d’alerte = évaluer, ligne d’action = intervenir ; causes : contractions insuffisantes (ocytocine), disproportion (césarienne), malposition.',
    definition:
      'Travail dont la progression est anormalement lente en phase active (dilatation ou descente), exposant à la rupture utérine, aux fistules obstétricales, à l’infection et à la souffrance fœtale.',
    physiopathologie:
      '## Causes (3 P)\n- **Puissance** : contractions insuffisantes (dynamique)\n- **Passager** : macrosomie, malposition (occipito-postérieure), présentation anormale\n- **Passage** : bassin rétréci (malnutrition, rachitisme, adolescence), obstacle',
    diagnostic:
      '## Partogramme\n- Ligne d’alerte (1 cm/h à partir de 4–5 cm) et ligne d’action (4 heures à droite)\n- L’outil OMS (Labour Care Guide) fixe des seuils de durée par centimètre\n\n## Évaluation à l’alerte\n- Contractions (fréquence, durée), état de la vessie, hydratation\n- Signes de disproportion : bosse sérosanguine, chevauchement des os du crâne, col œdématié, présentation non engagée\n- État fœtal (BCF, liquide méconial), fièvre maternelle',
    examens: [
      ['premiere_intention', 'cardiotocographie', 'État fœtal.'],
      ['premiere_intention', 'bandelette-urinaire', 'Cétonurie (déshydratation), protéinurie.'],
      ['premiere_intention', 'nfs', 'Infection, anémie.'],
    ],
    scores: [],
    differentiels: [
      ['Faux travail', 'Pas de modification du col.'],
      ['dystocie-disproportion-foeto-pelvienne', 'Obstacle mécanique.'],
    ],
    etiologies:
      '## Facteurs\n- Primipare, adolescente, petite taille, macrosomie\n- Malpositions, déshydratation, épuisement\n- Absence de surveillance par partogramme',
    principes: [
      [
        'Mesures générales',
        'Corriger les facteurs.',
        '- Hydratation, vidange vésicale, mobilisation, soutien\n- Rupture artificielle des membranes si dilatation ≥ 4–5 cm et membranes intactes',
      ],
      [
        'Contractions insuffisantes',
        'Renforcer.',
        '- **Ocytocine** en perfusion lente (débuter à 2,5 mUI/min, augmenter toutes les 30 min, max 20–32 mUI/min), sous surveillance des BCF et des contractions\n- **Jamais** d’ocytocine si disproportion, utérus cicatriciel mal évalué ou souffrance fœtale ; prudence chez la grande multipare',
      ],
      [
        'Disproportion ou échec',
        'Extraire.',
        '- **Césarienne** ; ventouse si dilatation complète et tête engagée\n- Antibiotiques si travail > 18 h ou fièvre\n- Sonde vésicale prolongée (prévention des fistules) après travail très prolongé',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Hypocinésie utérine'],
      ['ringer-lactate', 'premiere', 'Hydratation'],
      ['ampicilline', 'adjuvant', 'Travail prolongé, fièvre'],
      ['gentamicine', 'adjuvant', 'Chorioamniotite'],
    ],
    complications: [
      {
        nom: 'Rupture utérine',
        description: 'Travail bloqué, ocytocine.',
        traitement: '- Laparotomie urgente',
        clinique: '- Douleur, choc, arrêt des contractions',
        paraclinique: '',
      },
      {
        nom: 'Fistule obstétricale',
        description: 'Compression prolongée de la vessie et du rectum.',
        traitement: '- Sonde vésicale, chirurgie de la fistule',
        clinique: '- Fuites d’urine ou de selles',
        paraclinique: '',
      },
      {
        nom: 'Souffrance fœtale et asphyxie',
        fiche: 'souffrance-foetale-aigue',
        description: 'Hypoxie.',
        traitement: '- Extraction',
        clinique: '- BCF anormaux',
        paraclinique: '',
      },
      {
        nom: 'Infection',
        fiche: 'sepsis-et-choc-septique',
        description: 'Chorioamniotite, endométrite.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Le partogramme et l’accès à la césarienne évitent les complications graves',
    urgences: [],
    symptomes: [
      ['Contractions utérines', 'tres_frequent'],
      ['Douleur pelvienne', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- Partogramme, mesures générales, transfert dès la ligne d’alerte',
        '- Ligne d’alerte franchie, disproportion',
      ],
      hgr: ['- Ocytocine, ventouse, césarienne', ''],
      tert: ['- Chirurgie des fistules', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Phase active prolongée',
        type: 'commune',
        description: 'Ligne d’alerte franchie.',
        terrain: '- Primipare',
        fonctionnels: '- Fatigue',
        generaux: '- Déshydratation',
        physiques: '- Dilatation stagnante',
        paraclinique: '- Cétonurie',
        etiologies: '- Hypocinésie, malposition',
        syndromes: [],
      },
      {
        nom: 'Travail bloqué',
        type: 'gravite',
        description: 'Obstacle.',
        terrain: '- Bassin rétréci, macrosomie',
        fonctionnels: '- Douleurs intenses',
        generaux: '- Fièvre, tachycardie',
        physiques: '- Anneau de rétraction, bosse sérosanguine',
        paraclinique: '',
        etiologies: '- Disproportion',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dystocie / DFP
  {
    ...TRAV,
    slug: 'dystocie-disproportion-foeto-pelvienne',
    nom: 'Dystocie et disproportion fœto-pelvienne',
    resume:
      'Obstacle mécanique à l’accouchement (bassin rétréci, macrosomie, présentation anormale : siège, transverse, front) : dépistage en CPN, évaluation pendant le travail, césarienne ; dystocie des épaules : manœuvres de McRoberts et pression sus-pubienne.',
    definition:
      'Accouchement difficile par anomalie mécanique : disproportion entre la tête fœtale et le bassin maternel, présentations dystociques (front, face menton postérieur, épaule/transverse, siège), dystocie des épaules.',
    physiopathologie:
      '## Mécanismes\n- Bassin rétréci : malnutrition dans l’enfance, adolescence, rachitisme, traumatismes du bassin\n- Fœtus macrosome (diabète), hydrocéphalie\n- Présentations anormales (grande multiparité, placenta prævia, malformations utérines)',
    diagnostic:
      '## En CPN\n- Taille < 150 cm, boiterie, antécédent de césarienne pour dystocie, hauteur utérine excessive, présentation non céphalique à 36 SA\n\n## Pendant le travail\n- Présentation non engagée, stagnation, bosse sérosanguine, chevauchement des os\n- Présentation transverse : épaule ou bras au toucher (procidence du bras)\n\n## Dystocie des épaules\n- Tête sortie qui se rétracte contre le périnée (« signe de la tortue »)',
    examens: [
      ['premiere_intention', 'echographie-obstetricale', 'Présentation, poids estimé.'],
      ['premiere_intention', 'cardiotocographie', 'État fœtal.'],
    ],
    scores: [],
    differentiels: [['travail-prolonge-partogramme', 'Hypocinésie sans obstacle.']],
    etiologies:
      '## Facteurs\n- Adolescence, petite taille, malnutrition, macrosomie, diabète, grande multiparité',
    principes: [
      [
        'Présentations anormales',
        'Choisir la voie.',
        '- Siège à 36 SA : version par manœuvre externe si pas de contre-indication ; accouchement du siège par voie basse possible par un personnel expérimenté, sinon césarienne\n- Présentation transverse, front, face menton postérieur : **césarienne**',
      ],
      [
        'Disproportion',
        'Éviter le travail bloqué.',
        '- **Césarienne** (pas d’ocytocine)\n- Symphysiotomie : alternative dans des contextes particuliers sans accès rapide à la césarienne',
      ],
      [
        'Dystocie des épaules',
        'Libérer les épaules.',
        '- Appel à l’aide, **McRoberts** (hyperflexion des cuisses) + **pression sus-pubienne**\n- Puis manœuvres internes (Wood, extraction du bras postérieur), position à quatre pattes\n- Ne pas tirer sur la tête ni appuyer sur le fond utérin\n- Prévention de l’hémorragie, examen du nouveau-né (plexus brachial, clavicule)',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Prévention de l’hémorragie après l’accouchement'],
      ['cefazoline', 'premiere', 'Antibioprophylaxie de la césarienne'],
      ['nifedipine', 'alternative', 'Tocolyse pour version externe'],
    ],
    complications: [
      {
        nom: 'Rupture utérine',
        description: 'Obstacle non levé.',
        traitement: '- Laparotomie',
        clinique: '- Choc, douleur',
        paraclinique: '',
      },
      {
        nom: 'Fistule obstétricale',
        description: 'Travail prolongé.',
        traitement: '- Chirurgie',
        clinique: '- Incontinence',
        paraclinique: '',
      },
      {
        nom: 'Traumatismes néonatals',
        description: 'Plexus brachial, fractures, asphyxie.',
        traitement: '- Réanimation, rééducation',
        clinique: '- Paralysie du bras',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon si la dystocie est anticipée et la césarienne accessible',
    urgences: [],
    symptomes: [
      ['Contractions utérines', 'tres_frequent'],
      ['Douleur pelvienne', 'tres_frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'RCOG — recommandations de pratique clinique',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- Repérage en CPN, orientation pour accouchement en hôpital, manœuvres de base',
        '- Présentation anormale, bassin suspect',
      ],
      hgr: ['- Césarienne, accouchement du siège, manœuvres', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Disproportion fœto-pelvienne',
        type: 'commune',
        description: 'Tête non engagée.',
        terrain: '- Petite taille, adolescente',
        fonctionnels: '- Travail long',
        generaux: '',
        physiques: '- Présentation haute, bosse sérosanguine',
        paraclinique: '',
        etiologies: '- Bassin rétréci',
        syndromes: [],
      },
      {
        nom: 'Présentation transverse',
        type: 'gravite',
        description: 'Accouchement impossible par voie basse.',
        terrain: '- Grande multipare',
        fonctionnels: '',
        generaux: '',
        physiques: '- Utérus élargi, bras procident',
        paraclinique: '- Échographie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== SFA
  {
    ...TRAV,
    slug: 'souffrance-foetale-aigue',
    nom: 'Souffrance fœtale aiguë',
    resume:
      'BCF anormaux pendant le travail (< 110 ou > 160/min, décélérations tardives, absence de récupération) ou liquide méconial épais : position latérale gauche, arrêt de l’ocytocine, hydratation, oxygène ; extraction rapide si persistance ; réanimation néonatale prête.',
    definition:
      'Hypoxie fœtale pendant le travail se traduisant par des anomalies du rythme cardiaque fœtal, pouvant aboutir à l’acidose, à l’asphyxie et à la mort fœtale.',
    physiopathologie:
      '## Mécanismes\n- Diminution des échanges utéro-placentaires : hypercinésie (ocytocine), hypotension maternelle, HRP, pré-éclampsie\n- Compression du cordon (procidence, circulaire, oligoamnios)\n- Infection, anémie maternelle sévère',
    diagnostic:
      '## Signes\n- **BCF < 110/min** ou **> 160/min** persistants\n- Décélérations tardives (après la contraction), variables sévères, absence de récupération\n- Liquide amniotique méconial épais\n- Absence de mouvements\n\n## Rechercher la cause\n- Contractions excessives, hypotension, saignement, procidence du cordon, fièvre',
    examens: [
      ['confirmation', 'cardiotocographie', 'Rythme cardiaque fœtal.'],
      ['premiere_intention', 'nfs', 'Anémie maternelle.'],
    ],
    scores: ['apgar'],
    differentiels: [
      ['Tachycardie fœtale par fièvre maternelle', 'Fièvre, chorioamniotite.'],
      ['Enregistrement du pouls maternel', 'Comparer avec le pouls de la mère.'],
    ],
    etiologies:
      '## Causes\n- Hypercinésie utérine (ocytocine, misoprostol)\n- HRP, procidence du cordon, rupture utérine\n- Pré-éclampsie, anémie, infection, post-terme',
    principes: [
      [
        'Mesures de réanimation intra-utérine',
        'Améliorer l’oxygénation fœtale.',
        '- **Position latérale gauche**, **arrêt de l’ocytocine**\n- Remplissage (Ringer lactate), correction de l’hypotension\n- Oxygène maternel si hypoxie maternelle\n- Tocolyse aiguë (**salbutamol** ou **nifédipine**) si hypercinésie',
      ],
      [
        'Extraction',
        'Si persistance.',
        '- Dilatation complète, tête engagée : **ventouse** ou forceps\n- Sinon : **césarienne** en urgence',
      ],
      [
        'Nouveau-né',
        'Préparer la réanimation.',
        '- Personnel formé, ballon-masque prêt (Helping Babies Breathe)',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['salbutamol', 'alternative', 'Tocolyse aiguë'],
      ['nifedipine', 'alternative', 'Tocolyse'],
      ['oxygene', 'adjuvant', 'Hypoxie maternelle'],
    ],
    complications: [
      {
        nom: 'Asphyxie périnatale',
        fiche: 'asphyxie-perinatale',
        description: 'Hypoxie prolongée.',
        traitement: '- Réanimation néonatale',
        clinique: '- Nouveau-né qui ne respire pas',
        paraclinique: '- Apgar',
      },
      {
        nom: 'Mort fœtale intra partum',
        fiche: 'mort-foetale-in-utero',
        description: 'Absence d’extraction.',
        traitement: '- Prévention',
        clinique: '- BCF absents',
        paraclinique: '',
      },
      {
        nom: 'Inhalation méconiale',
        description: 'Liquide méconial.',
        traitement: '- Réanimation',
        clinique: '- Détresse respiratoire',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon si l’extraction est rapide ; la surveillance des BCF est essentielle',
    urgences: [],
    symptomes: [['Contractions utérines', 'tres_frequent']],
    sources: [
      'OMS — lignes directrices et publications',
      'FIGO — recommandations de pratique clinique',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- Auscultation régulière, mesures de réanimation intra-utérine, transfert',
        '- BCF anormaux persistants',
      ],
      hgr: ['- Ventouse, césarienne, réanimation néonatale', ''],
      tert: ['- Néonatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Bradycardie fœtale',
        type: 'commune',
        description: 'BCF < 110/min.',
        terrain: '- Travail sous ocytocine',
        fonctionnels: '',
        generaux: '',
        physiques: '- BCF lents, contractions rapprochées',
        paraclinique: '- Décélérations',
        etiologies: '- Hypercinésie',
        syndromes: [],
        examens: [['cardiotocographie', 'Rythme fœtal']],
      },
    ],
  },

  // =================================================================== Césarienne
  {
    ...TRAV,
    slug: 'cesarienne',
    nom: 'Césarienne : indications et complications',
    resume:
      'Intervention fréquente et salvatrice (disproportion, travail bloqué, souffrance fœtale, placenta prævia, HRP, présentation transverse, éclampsie) : antibioprophylaxie (céfazoline), prévention de l’hémorragie et des thromboses ; complications : hémorragie, infection, rupture utérine ultérieure.',
    definition:
      'Extraction du fœtus par incision de la paroi abdominale et de l’utérus (le plus souvent segmentaire transversale).',
    physiopathologie:
      '## Indications principales\n- Maternelles : disproportion, travail bloqué, utérus bicicatriciel, placenta prævia recouvrant, HRP avec fœtus vivant, éclampsie non accouchée\n- Fœtales : souffrance fœtale aiguë, procidence du cordon, présentation transverse ou du front\n- Taux recommandé par l’OMS : environ 10–15 % ; trop faible dans de nombreuses zones rurales',
    diagnostic:
      '## Bilan préopératoire\n- Hb, groupe-rhésus, consentement, indication documentée\n- Évaluation anesthésique (rachianesthésie de préférence)\n\n## Surveillance post-opératoire\n- Saignement, tonicité utérine, PA, pouls, diurèse, température, plaie, douleur',
    examens: [
      ['pretherapeutique', 'nfs', 'Hb.'],
      ['pretherapeutique', 'groupage-rai', 'Transfusion.'],
      ['pretherapeutique', 'hemostase', 'HRP, pré-éclampsie.'],
      ['suivi', 'nfs', 'Hb post-opératoire.'],
    ],
    scores: [],
    differentiels: [],
    etiologies: '## Facteurs de recours\n- Dystocies, utérus cicatriciel, complications de la grossesse',
    principes: [
      [
        'Avant et pendant',
        'Réduire les complications.',
        '- **Antibioprophylaxie** : **céfazoline** 2 g IV avant l’incision (ou ampicilline) ; + azithromycine si travail ou rupture des membranes\n- Rachianesthésie (**bupivacaïne**) de préférence\n- **Ocytocine** ou **carbétocine** après l’extraction ; **acide tranexamique** si saignement',
      ],
      [
        'Après',
        'Récupération rapide.',
        '- Lever et alimentation précoces, analgésie (paracétamol, AINS, morphine)\n- **Thromboprophylaxie** (énoxaparine) si facteurs de risque\n- Allaitement précoce, peau à peau',
      ],
      [
        'Grossesse suivante',
        'Prévenir la rupture utérine.',
        '- Intervalle d’au moins 18 mois\n- Épreuve du travail possible après 1 césarienne segmentaire en milieu équipé\n- Accouchement en hôpital',
      ],
    ],
    molecules: [
      ['cefazoline', 'premiere', 'Antibioprophylaxie'],
      ['ampicilline', 'alternative', 'Antibioprophylaxie'],
      ['bupivacaine', 'premiere', 'Rachianesthésie'],
      ['ocytocine', 'premiere', 'Prévention de l’hémorragie'],
      ['carbetocine', 'alternative', 'Prévention de l’hémorragie'],
      ['acide-tranexamique', 'adjuvant', 'Hémorragie'],
      ['enoxaparine', 'adjuvant', 'Thromboprophylaxie'],
      ['morphine', 'adjuvant', 'Analgésie'],
    ],
    complications: [
      {
        nom: 'Hémorragie',
        fiche: 'hemorragie-post-partum',
        description: 'Atonie, lésions.',
        traitement: '- Utérotoniques, chirurgie',
        clinique: '- Saignement',
        paraclinique: '- Hb',
      },
      {
        nom: 'Infection de paroi et endométrite',
        fiche: 'sepsis-et-choc-septique',
        description: 'Travail prolongé, asepsie.',
        traitement: '- Antibiotiques, drainage',
        clinique: '- Fièvre, plaie purulente',
        paraclinique: '',
      },
      {
        nom: 'Thrombose veineuse',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Post-partum.',
        traitement: '- Anticoagulation',
        clinique: '- Œdème du mollet',
        paraclinique: '- Doppler',
      },
      {
        nom: 'Rupture utérine ultérieure et placenta accreta',
        fiche: 'placenta-praevia',
        description: 'Utérus cicatriciel.',
        traitement: '- Surveillance des grossesses suivantes',
        clinique: '',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Intervention sûre en milieu équipé ; mortalité plus élevée en cas d’intervention tardive (travail bloqué, infection)',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Douleur abdominale', 'frequent'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'FIGO — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Identification des indications, transfert à temps', '- Indication de césarienne'],
      hgr: ['- Césarienne, réanimation, transfusion', ''],
      tert: ['- Césariennes complexes, accretisme', ''],
    },
    alertes: { 'hemorragie-du-post-partum-urgence': 'Saignement abondant ou choc après une césarienne' },
    formes: [
      {
        nom: 'Césarienne en urgence',
        type: 'commune',
        description: 'Pendant le travail.',
        terrain: '- Travail bloqué, SFA',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Césarienne programmée',
        type: 'etiologique',
        description: 'Avant le travail.',
        terrain: '- Placenta prævia, utérus bicicatriciel',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Procidence du cordon
  {
    ...TRAV,
    slug: 'procidence-du-cordon',
    nom: 'Procidence du cordon',
    resume:
      'Cordon descendu devant la présentation après rupture des membranes : urgence fœtale ; repousser la présentation (doigts ou remplissage vésical), position genu-pectorale ou Trendelenburg, ne pas manipuler le cordon ; césarienne immédiate (ou extraction si dilatation complète).',
    definition:
      'Chute du cordon ombilical en avant de la présentation, dans le vagin ou à la vulve, après la rupture des membranes, exposant à la compression du cordon et à l’asphyxie fœtale.',
    physiopathologie:
      '## Mécanismes\n- Présentation mal appliquée sur le col (siège, transverse, prématuré, hydramnios, grossesse gémellaire)\n- Rupture des membranes (spontanée ou artificielle) avec présentation haute\n- Compression et spasme du cordon : bradycardie, mort fœtale',
    diagnostic:
      '## Clinique\n- Cordon visible à la vulve ou palpé au toucher vaginal\n- Bradycardie fœtale brutale après la rupture des membranes\n- Vérifier la vitalité (battements du cordon, BCF)',
    examens: [
      ['premiere_intention', 'cardiotocographie', 'BCF.'],
      ['deuxieme_intention', 'echographie-obstetricale', 'Vitalité (sans retarder l’extraction).'],
    ],
    scores: ['apgar'],
    differentiels: [
      ['Procubitus du cordon', 'Cordon devant la présentation avec membranes intactes.'],
      ['Procidence d’un membre', 'Bras ou pied palpé.'],
    ],
    etiologies:
      '## Facteurs\n- Présentation de siège ou transverse, prématurité, grossesse gémellaire, hydramnios, multiparité\n- Rupture artificielle des membranes avec présentation haute',
    principes: [
      [
        'Gestes immédiats',
        'Décomprimer le cordon.',
        '- Appel à l’aide\n- Repousser la présentation avec la main vaginale et la maintenir jusqu’à l’extraction, ou **remplissage vésical** (500 mL de sérum par sonde)\n- Position **genu-pectorale** ou Trendelenburg\n- Ne pas manipuler le cordon ; le garder dans le vagin (compresses chaudes s’il est extériorisé)\n- Tocolyse (salbutamol, nifédipine) si contractions',
      ],
      [
        'Extraction',
        'Sauver le fœtus.',
        '- **Césarienne immédiate** si fœtus vivant et dilatation incomplète\n- Dilatation complète : extraction instrumentale ou accouchement rapide\n- Réanimation néonatale prête\n- Fœtus mort : accouchement par voie basse',
      ],
    ],
    molecules: [
      ['salbutamol', 'adjuvant', 'Tocolyse'],
      ['nifedipine', 'alternative', 'Tocolyse'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage vésical'],
    ],
    complications: [
      {
        nom: 'Asphyxie et mort fœtale',
        fiche: 'asphyxie-perinatale',
        description: 'Compression du cordon.',
        traitement: '- Extraction rapide, réanimation',
        clinique: '- Bradycardie',
        paraclinique: '- Apgar',
      },
    ],
    evolution: '## Pronostic\n- Fœtal favorable si l’extraction a lieu dans les 30 minutes',
    urgences: [],
    symptomes: [['Écoulement de liquide amniotique', 'tres_frequent']],
    sources: [
      'RCOG — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: ['- Gestes de décompression, transfert immédiat en position genu-pectorale', '- Toute procidence'],
      hgr: ['- Césarienne immédiate', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Procidence du cordon à fœtus vivant',
        type: 'commune',
        description: 'Urgence.',
        terrain: '- Siège, prématuré, rupture des membranes',
        fonctionnels: '',
        generaux: '',
        physiques: '- Cordon battant dans le vagin',
        paraclinique: '- Bradycardie',
        etiologies: '- Présentation mal appliquée',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Délivrance / GATPA
  {
    ...TRAV,
    slug: 'delivrance-gestion-active',
    nom: 'Délivrance et gestion active de la troisième période',
    resume:
      'Gestion active de la troisième période du travail (GATPA) : ocytocine 10 UI IM ou IV dans la minute suivant la naissance, traction contrôlée du cordon, massage utérin et surveillance ; examen du placenta ; première mesure de prévention de l’hémorragie du post-partum.',
    definition:
      'La délivrance est l’expulsion du placenta et des membranes après la naissance (normalement en moins de 30 minutes) ; la GATPA est l’ensemble des gestes recommandés pour la sécuriser.',
    physiopathologie:
      '## Mécanismes\n- Contraction et rétraction utérines : décollement placentaire et hémostase (« ligatures vivantes »)\n- Atonie utérine : principale cause d’hémorragie du post-partum',
    diagnostic:
      '## Surveillance\n- Signes de décollement : remontée du fond utérin, allongement du cordon, petit saignement\n- **Examen du placenta** (cotylédons, membranes) : rétention ?\n- Saignement, tonicité utérine, pouls et PA toutes les 15 min pendant 2 heures\n- Examen du périnée et du col',
    examens: [['suivi', 'nfs', 'Hb si saignement.']],
    scores: ['index-de-choc'],
    differentiels: [
      ['retention-placentaire', 'Placenta non délivré à 30 min.'],
      ['hemorragie-post-partum', 'Saignement ≥ 500 mL.'],
    ],
    etiologies:
      '## Facteurs de risque d’hémorragie\n- Travail prolongé, grande multiparité, surdistension (jumeaux, macrosomie, hydramnios), anémie, pré-éclampsie, chorioamniotite',
    principes: [
      [
        'Utérotonique',
        'Prévenir l’atonie.',
        '- **Ocytocine** 10 UI IM (ou IV lente) dans la minute suivant la naissance (après vérification de l’absence d’un 2e fœtus)\n- Alternatives : **carbétocine** 100 µg, **misoprostol** 600 µg per os (accouchement à domicile, ocytocine indisponible), ergométrine (sauf HTA)',
      ],
      [
        'Gestes',
        'Délivrer en sécurité.',
        '- Clampage du cordon après 1 à 3 minutes\n- **Traction contrôlée du cordon** avec contre-pression sus-pubienne (si personnel formé)\n- Évaluation de la tonicité utérine toutes les 15 min pendant 2 h (massage si mou)',
      ],
      [
        'Après',
        'Repérer les complications.',
        '- Examen du placenta, du périnée ; mesure du saignement (sac collecteur)\n- Prise en charge immédiate de toute hémorragie (fiche *Hémorragie du post-partum*)',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', '10 UI IM dans la minute'],
      ['carbetocine', 'alternative', 'Thermostable'],
      ['misoprostol', 'alternative', 'Ocytocine indisponible'],
      ['ergometrine', 'alternative', 'Sauf HTA'],
      ['acide-tranexamique', 'adjuvant', 'Hémorragie avérée'],
    ],
    complications: [
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Atonie, rétention, déchirures.',
        traitement: '- Protocole HPP',
        clinique: '- Saignement ≥ 500 mL',
        paraclinique: '',
      },
      {
        nom: 'Rétention placentaire',
        fiche: 'retention-placentaire',
        description: 'Placenta non délivré.',
        traitement: '- Délivrance artificielle',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Inversion utérine',
        description: 'Traction excessive.',
        traitement: '- Réduction immédiate',
        clinique: '- Choc, masse vaginale',
        paraclinique: '',
      },
    ],
    evolution: '## Bénéfices\n- La GATPA réduit d’environ 60 % les hémorragies graves du post-partum',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [['Saignement vaginal', 'frequent']],
    sources: [
      'WHO recommendations for the prevention and treatment of postpartum haemorrhage',
      'FIGO recommendations on the management of postpartum hemorrhage 2022',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- GATPA systématique, examen du placenta, surveillance 2 h', '- Hémorragie, rétention'],
      hgr: ['- Prise en charge des complications', ''],
      tert: ['', ''],
    },
    alertes: { 'hemorragie-du-post-partum-urgence': 'Saignement > 500 mL ou utérus mou après la naissance' },
    formes: [
      {
        nom: 'Délivrance normale',
        type: 'commune',
        description: 'Placenta complet en moins de 30 min.',
        terrain: '- Accouchement par voie basse',
        fonctionnels: '',
        generaux: '',
        physiques: '- Utérus tonique, saignement modéré',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Rétention placentaire
  {
    ...TRAV,
    slug: 'retention-placentaire',
    nom: 'Rétention placentaire',
    resume:
      'Placenta non délivré 30 minutes après la naissance ou délivrance incomplète : vidange vésicale, ocytocine, traction contrôlée ; délivrance artificielle sous analgésie et antibioprophylaxie ; révision utérine si incomplet ; risque d’hémorragie et d’infection ; accretisme.',
    definition:
      'Absence de délivrance du placenta 30 minutes après la naissance malgré la gestion active (rétention complète) ou persistance de fragments placentaires ou de membranes (rétention partielle).',
    physiopathologie:
      '## Mécanismes\n- Placenta décollé mais retenu (col refermé, vessie pleine)\n- Placenta adhérent (atonie) ou **accreta** (insertion anormale, cicatrices de césarienne ou de curetage)\n- Conséquences : hémorragie, infection',
    diagnostic:
      '## Clinique\n- Placenta non expulsé à 30 min ; saignement plus ou moins abondant\n- Examen du placenta délivré : cotylédon ou membranes manquants (rétention partielle)\n- Rechercher : choc, utérus mou',
    examens: [
      ['premiere_intention', 'nfs', 'Hb.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['deuxieme_intention', 'echographie-pelvienne', 'Rétention partielle, accretisme.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['hemorragie-post-partum', 'Saignement d’autre cause (atonie, déchirures).'],
      ['Inversion utérine', 'Masse vaginale, fond utérin non palpable.'],
    ],
    etiologies:
      '## Facteurs\n- Antécédents de césarienne, de curetage, d’endométrite\n- Prématurité, grande multiparité, vessie pleine, absence de GATPA',
    principes: [
      [
        'Premières mesures',
        'Favoriser la délivrance.',
        '- Vidange vésicale, **ocytocine** 10 UI (si non faite), traction contrôlée du cordon\n- Voie veineuse, groupage, surveillance du saignement',
      ],
      [
        'Délivrance artificielle',
        'Extraire le placenta.',
        '- Sous analgésie (**kétamine**, morphine ou rachianesthésie) et **antibioprophylaxie** (**ampicilline** ou céfazoline)\n- Main intra-utérine, décollement doux, puis **ocytocine** en perfusion et massage\n- Révision utérine si délivrance incomplète\n- Placenta accreta (pas de plan de clivage) : ne pas forcer, laparotomie (hystérectomie)',
      ],
      [
        'Après',
        'Prévenir les complications.',
        '- Surveillance du saignement, de la température ; correction de l’anémie',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Utérotonique'],
      ['ketamine', 'premiere', 'Analgésie'],
      ['ampicilline', 'premiere', 'Antibioprophylaxie'],
      ['cefazoline', 'alternative', 'Antibioprophylaxie'],
      ['misoprostol', 'adjuvant', 'Hémorragie'],
      ['acide-tranexamique', 'adjuvant', 'Hémorragie'],
    ],
    complications: [
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Rétention.',
        traitement: '- Délivrance, utérotoniques, transfusion',
        clinique: '- Saignement, choc',
        paraclinique: '- Hb',
      },
      {
        nom: 'Endométrite',
        description: 'Rétention partielle, manœuvres.',
        traitement: '- Antibiotiques, évacuation',
        clinique: '- Fièvre, lochies fétides',
        paraclinique: '',
      },
      {
        nom: 'Perforation et inversion utérine',
        description: 'Manœuvres.',
        traitement: '- Chirurgie, réduction',
        clinique: '- Douleur, choc',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec une délivrance artificielle rapide ; grave en cas d’accretisme ou de retard',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Saignement vaginal', 'frequent'],
      ['Hypotension', 'occasionnel'],
    ],
    sources: [
      'WHO recommendations for the prevention and treatment of postpartum haemorrhage',
      'FIGO recommendations on the management of postpartum hemorrhage 2022',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- GATPA, vidange vésicale, délivrance artificielle si formée, transfert',
        '- Échec, hémorragie, accretisme',
      ],
      hgr: ['- Délivrance artificielle, transfusion, chirurgie', ''],
      tert: ['- Prise en charge de l’accretisme', ''],
    },
    alertes: { 'hemorragie-du-post-partum-urgence': 'Placenta non délivré avec saignement abondant' },
    formes: [
      {
        nom: 'Rétention placentaire complète',
        type: 'commune',
        description: 'Placenta non délivré à 30 min.',
        terrain: '- Accouchement par voie basse',
        fonctionnels: '',
        generaux: '',
        physiques: '- Cordon sans progression, saignement',
        paraclinique: '',
        etiologies: '- Placenta adhérent',
        syndromes: [],
      },
      {
        nom: 'Placenta accreta',
        type: 'gravite',
        description: 'Insertion anormale.',
        terrain: '- Utérus cicatriciel',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Pas de plan de clivage',
        paraclinique: '- Échographie',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },
];
