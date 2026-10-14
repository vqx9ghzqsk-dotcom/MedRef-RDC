'use strict';

/**
 * Lot 52 (phase 2, travail et accouchement) — présentation du siège, présentations anormales
 * (front, face, transversale), déclenchement artificiel du travail, accouchement instrumental.
 * Rédigé par IA (OMS, Normes et directives SR, Guide clinique et thérapeutique) : à valider.
 */

const TRAV = { departement: 'gynecologie-obstetrique', specialite: 'Travail et accouchement' };

module.exports = [
  // =================================================================== Siège
  {
    ...TRAV,
    slug: 'presentation-du-siege',
    nom: 'Présentation du siège',
    resume:
      'Fœtus en présentation podalique (3–4 % à terme, plus fréquent chez le prématuré et les jumeaux) : version par manœuvre externe proposée à 36–37 semaines en l’absence de contre-indication ; accouchement par voie basse possible en structure avec un opérateur expérimenté si conditions favorables (siège complet ou décomplété, poids estimé 2 500–3 800 g, tête fléchie, bassin normal, travail régulier) ; césarienne sinon ; risques : rétention de la tête dernière, procidence du cordon, traumatismes ; manœuvres de Mauriceau et de Lovset.',
    definition:
      'Présentation longitudinale dans laquelle les fesses et/ou les pieds du fœtus se présentent en premier au détroit supérieur : siège décomplété (mode des fesses), complet (fesses et pieds), incomplet (un ou deux pieds).',
    physiopathologie:
      '## Facteurs\n- **Prématurité**, grossesse **gémellaire**, **hydramnios** ou oligoamnios, **placenta prævia**, malformations utérines, fibromes, multiparité, anomalies fœtales (hydrocéphalie)\n\n## Risques à l’accouchement\n- **Rétention de la tête dernière** (asphyxie, traumatisme), **procidence du cordon** (siège incomplet), relèvement des bras, traumatismes (plexus brachial, fractures)',
    diagnostic:
      '## Clinique\n- Pôle céphalique dur et arrondi au fond utérin, bruits du cœur fœtal au-dessus de l’ombilic\n- Toucher vaginal : présentation molle, irrégulière, sillon interfessier, pieds ; méconium\n\n## Examens\n- **Échographie** : type de siège, flexion de la tête, poids estimé, placenta, malformations, liquide\n- Évaluation du bassin (clinique ± radiopelvimétrie si disponible)',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Type de siège, tête, poids.'],
      ['premiere_intention', 'cardiotocographie', 'Bien-être fœtal.'],
      ['gravite', 'groupage-rai', 'Avant version ou césarienne.'],
    ],
    scores: [],
    differentiels: [
      ['presentations-anormales', 'Face, front, transversale.'],
      ['Présentation céphalique', 'Erreur de diagnostic clinique.'],
    ],
    etiologies:
      '## Facteurs\n- Prématurité, gémellaire, anomalies du liquide, placenta prævia, malformations utérines',
    principes: [
      [
        'Version par manœuvre externe',
        'Tenter de retourner le fœtus.',
        '- À **36–37 semaines** (nullipare) ou 37 semaines (multipare), en structure, avec cardiotocographie avant et après, tocolyse possible (nifédipine ou salbutamol)\n- Contre-indications : placenta prævia, saignement, rupture des membranes, utérus cicatriciel (relative), anomalie du rythme fœtal, grossesse multiple\n- **Immunoglobulines anti-D** si rhésus négatif',
      ],
      [
        'Voie basse',
        'Conditions favorables.',
        '- Opérateur expérimenté, structure avec césarienne, siège complet ou décomplété, poids 2 500–3 800 g, tête fléchie, bassin normal, travail spontané et régulier\n- **Ne pas tirer** sur le fœtus ; laisser l’expulsion spontanée jusqu’aux omoplates ; **Lovset** pour les bras, **Mauriceau** pour la tête dernière',
      ],
      [
        'Césarienne',
        'Sinon.',
        '- Siège incomplet, tête défléchie, macrosomie, prématurité extrême, utérus cicatriciel, opérateur inexpérimenté, dystocie du travail',
      ],
    ],
    molecules: [
      ['nifedipine', 'alternative', 'Tocolyse pour la version'],
      ['salbutamol', 'alternative', 'Tocolyse pour la version'],
      ['immunoglobulines-anti-d', 'adjuvant', 'Rhésus négatif'],
      ['ocytocine', 'premiere', 'Gestion active de la délivrance'],
    ],
    complications: [
      {
        nom: 'Rétention de la tête dernière',
        description: 'Tête bloquée.',
        traitement: '- Manœuvre de Mauriceau, symphysiotomie en dernier recours',
        clinique: '- Tronc expulsé, tête retenue',
        paraclinique: '',
      },
      {
        nom: 'Procidence du cordon',
        fiche: 'procidence-du-cordon',
        description: 'Siège incomplet.',
        traitement: '- Césarienne urgente',
        clinique: '- Cordon palpable',
        paraclinique: '',
      },
      {
        nom: 'Asphyxie et traumatismes du nouveau-né',
        fiche: 'traumatismes-obstetricaux-nouveau-ne',
        description: 'Extraction difficile.',
        traitement: '- Réanimation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon avec une sélection rigoureuse des voies basses et des opérateurs formés',
    urgences: [],
    symptomes: [],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Repérer le siège en fin de grossesse, référence pour l’accouchement', '- Siège en travail'],
      hgr: ['- Version, accouchement du siège, césarienne', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Siège décomplété (mode des fesses)',
        type: 'commune',
        description: 'Le plus fréquent.',
        terrain: '- Primipare',
        fonctionnels: '',
        generaux: '',
        physiques: '- Fesses au toucher',
        paraclinique: '- Jambes en extension',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Siège incomplet',
        type: 'gravite',
        description: 'Risque de procidence.',
        terrain: '- Prématuré',
        fonctionnels: '',
        generaux: '',
        physiques: '- Pied au toucher',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Présentations anormales
  {
    ...TRAV,
    slug: 'presentations-anormales',
    nom: 'Présentations anormales (front, face, transversale)',
    resume:
      'Présentation de la face (tête défléchie : accouchement par voie basse possible seulement en menton antérieur), du front (tête intermédiaire : diamètre trop grand, voie basse impossible chez un fœtus de taille normale → césarienne), transversale ou de l’épaule (voie basse impossible : risque de rupture utérine et de procidence du bras → césarienne ; version externe possible avant le travail) ; facteurs : multiparité, prématurité, placenta prævia, malformations, bassin rétréci ; diagnostic par palpation, toucher vaginal et échographie ; accouchement en structure.',
    definition:
      'Présentations autres que le sommet (céphalique fléchie) et le siège : face, front, épaule (transversale ou oblique), et présentation composée.',
    physiopathologie:
      '## Facteurs\n- **Grande multiparité** (utérus et paroi relâchés), **prématurité**, **placenta prævia**, **hydramnios**, grossesse gémellaire (2e jumeau), malformations utérines, fibromes, **bassin rétréci**, anomalies fœtales (anencéphalie, goitre)\n\n## Mécanique\n- **Face** : tête totalement défléchie ; accouchement possible si le menton tourne en avant (mento-pubien), impossible en mento-sacré\n- **Front** : diamètre le plus grand (13,5 cm) → arrêt de la progression, rupture utérine\n- **Épaule** : présentation transversale → accouchement impossible, épaule enclavée, procidence du bras, rupture utérine',
    diagnostic:
      '## Clinique\n- Utérus élargi transversalement, excavation vide (transversale), pôles fœtaux latéraux\n- Toucher vaginal : nez, bouche, menton (face) ; racine du nez et fontanelle antérieure (front) ; épaule, bras ou main (transversale)\n- Travail qui ne progresse pas, bosse séro-sanguine\n\n## Examens\n- **Échographie** : présentation, placenta, malformations\n- Partogramme',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Type de présentation, placenta.'],
      ['premiere_intention', 'cardiotocographie', 'Bien-être fœtal.'],
      ['gravite', 'groupage-rai', 'Avant césarienne.'],
    ],
    scores: [],
    differentiels: [
      ['presentation-du-siege', 'Présentation podalique.'],
      ['dystocie-disproportion-foeto-pelvienne', 'Arrêt de progression en présentation du sommet.'],
      ['placenta-praevia', 'Cause de présentation anormale.'],
    ],
    etiologies:
      '## Facteurs\n- Grande multiparité, prématurité, placenta prævia, hydramnios, bassin rétréci, malformations',
    principes: [
      [
        'Avant le travail',
        'Corriger si possible.',
        '- Transversale à 37 semaines : **version par manœuvre externe** (sans contre-indication) ; sinon césarienne programmée\n- Recherche d’un placenta prævia (échographie) avant tout toucher vaginal en cas de saignement',
      ],
      [
        'Pendant le travail',
        'Choisir la voie.',
        '- **Face mento-antérieure** : voie basse possible avec surveillance (pas de ventouse) ; **mento-postérieure** persistante : césarienne\n- **Front** persistant (fœtus vivant de taille normale) : **césarienne**\n- **Transversale / épaule** : **césarienne** (fœtus vivant ou mort) ; ne jamais tirer sur un bras procident ; version interne réservée au 2e jumeau\n- Surveillance de la rupture utérine (douleur, anneau de Bandl), sonde urinaire',
      ],
      ['Délivrance', 'Prévenir l’hémorragie.', '- **Gestion active de la délivrance** (multiparité)'],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Gestion active de la délivrance'],
      ['nifedipine', 'alternative', 'Tocolyse pour la version'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie de la césarienne'],
    ],
    complications: [
      {
        nom: 'Rupture utérine',
        fiche: 'rupture-uterine',
        description: 'Front, épaule négligée.',
        traitement: '- Laparotomie',
        clinique: '- Douleur, choc, arrêt des contractions',
        paraclinique: '',
      },
      {
        nom: 'Procidence du cordon ou du bras',
        fiche: 'procidence-du-cordon',
        description: 'Présentation non engagée.',
        traitement: '- Césarienne',
        clinique: '- Cordon ou bras dans le vagin',
        paraclinique: '',
      },
      {
        nom: 'Fistule obstétricale',
        fiche: 'fistules-obstetricales',
        description: 'Travail prolongé.',
        traitement: '- Réparation',
        clinique: '- Fuites d’urine',
        paraclinique: '',
      },
      {
        nom: 'Mort fœtale per-partum',
        fiche: 'souffrance-foetale-aigue',
        description: 'Travail bloqué.',
        traitement: '- Césarienne précoce',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec un diagnostic précoce et une césarienne ; mortalité maternelle et fœtale élevée en cas d’épaule négligée',
    urgences: [],
    symptomes: [['Douleur abdominale', 'frequent']],
    sources: [
      'Normes et directives de santé de la reproduction',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Palpation en fin de grossesse, référence, ne pas tirer sur un membre procident',
        '- Présentation transversale, travail bloqué',
      ],
      hgr: ['- Version externe, césarienne', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Présentation de la face',
        type: 'commune',
        description: 'Tête défléchie.',
        terrain: '- Multipare',
        fonctionnels: '',
        generaux: '',
        physiques: '- Nez, bouche, menton au toucher',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Présentation du front',
        type: 'gravite',
        description: 'Voie basse impossible.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Racine du nez, fontanelle antérieure',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Présentation transversale (épaule)',
        type: 'gravite',
        description: 'Césarienne obligatoire.',
        terrain: '- Grande multipare, placenta prævia',
        fonctionnels: '',
        generaux: '',
        physiques: '- Utérus élargi, excavation vide',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Déclenchement
  {
    ...TRAV,
    slug: 'declenchement-artificiel-du-travail',
    nom: 'Déclenchement artificiel du travail',
    resume:
      'Induction du travail lorsque la poursuite de la grossesse est plus risquée que l’accouchement : grossesse prolongée (≥ 41 semaines), rupture prématurée des membranes à terme, pré-éclampsie, diabète, RCIU, mort fœtale in utero, chorioamniotite ; évaluer le col (score de Bishop) ; col défavorable : misoprostol (25 µg vaginal toutes les 6 h ou 25 µg oral toutes les 2 h) ou sonde de Foley ; col favorable : amniotomie et ocytocine ; contre-indications (placenta prævia, présentation transversale, utérus avec cicatrice corporéale) ; surveiller l’hypercinésie et le rythme fœtal.',
    definition:
      'Provocation artificielle des contractions utérines avant leur début spontané, dans le but d’obtenir un accouchement par voie basse.',
    physiopathologie:
      '## Principes\n- **Maturation cervicale** (prostaglandines : misoprostol ; méthodes mécaniques : sonde de Foley) si col défavorable (Bishop ≤ 6)\n- **Induction des contractions** (ocytocine) et **amniotomie** si col favorable\n\n## Risques\n- **Hypercinésie** et hypertonie utérine → souffrance fœtale, **rupture utérine** (surtout utérus cicatriciel, grande multipare)\n- Échec du déclenchement → césarienne ; infection',
    diagnostic:
      '## Avant le déclenchement\n- Indication et terme vérifiés, **présentation céphalique**, absence de contre-indication à la voie basse\n- **Score de Bishop** (dilatation, effacement, consistance, position du col, hauteur de la présentation)\n- **Cardiotocographie** préalable, tension artérielle\n\n## Contre-indications\n- Placenta prævia, vasa prævia, présentation transversale, procidence du cordon, antécédent de césarienne corporéale ou de rupture utérine, herpès génital actif, disproportion fœto-pelvienne évidente\n- Misoprostol contre-indiqué sur utérus cicatriciel',
    examens: [
      ['premiere_intention', 'cardiotocographie', 'Avant et pendant le déclenchement.'],
      ['premiere_intention', 'echographie-obstetricale', 'Présentation, liquide.'],
    ],
    scores: [],
    differentiels: [],
    etiologies:
      '## Indications\n- Grossesse prolongée, RPM à terme, pré-éclampsie, diabète, RCIU, mort fœtale, chorioamniotite',
    principes: [
      [
        'Col défavorable (Bishop ≤ 6)',
        'Mûrir le col.',
        '- **Misoprostol** 25 µg par voie vaginale toutes les 6 h ou 25 µg per os toutes les 2 h (max 24 h selon le protocole) ; **pas d’ocytocine moins de 4 h après la dernière dose**\n- **Sonde de Foley** intracervicale (ballonnet 30–60 mL) : alternative sûre, notamment sur utérus cicatriciel\n- Mort fœtale : doses de misoprostol adaptées au terme',
      ],
      [
        'Col favorable',
        'Induire les contractions.',
        '- **Amniotomie** puis **ocytocine** en perfusion : débuter à 2,5 mUI/min, augmenter toutes les 30 min jusqu’à 3–4 contractions efficaces en 10 min (max 20–32 mUI/min selon le protocole)',
      ],
      [
        'Surveillance',
        'Sécurité.',
        '- **Fréquence des contractions**, rythme fœtal, partogramme\n- **Hypercinésie** : arrêter l’ocytocine, décubitus latéral gauche, tocolyse (salbutamol, nifédipine) si besoin\n- Utérus cicatriciel : sonde de Foley et ocytocine prudente, en structure équipée pour la césarienne',
      ],
    ],
    molecules: [
      ['misoprostol', 'premiere', 'Maturation cervicale'],
      ['ocytocine', 'premiere', 'Induction des contractions'],
      ['salbutamol', 'adjuvant', 'Hypercinésie'],
      ['nifedipine', 'adjuvant', 'Hypercinésie'],
    ],
    complications: [
      {
        nom: 'Rupture utérine',
        fiche: 'rupture-uterine',
        description: 'Hypercinésie, utérus cicatriciel.',
        traitement: '- Laparotomie',
        clinique: '- Douleur, arrêt des contractions, choc',
        paraclinique: '',
      },
      {
        nom: 'Souffrance fœtale',
        fiche: 'souffrance-foetale-aigue',
        description: 'Hypercinésie.',
        traitement: '- Arrêt de l’ocytocine, tocolyse',
        clinique: '',
        paraclinique: '- CTG',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Épuisement utérin.',
        traitement: '- Utérotoniques',
        clinique: '- Saignement',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Accouchement par voie basse dans 70–80 % des déclenchements bien indiqués',
    urgences: [],
    symptomes: [],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Référence pour déclenchement', ''],
      hgr: ['- Déclenchement sous surveillance, césarienne disponible', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Déclenchement sur col défavorable',
        type: 'commune',
        description: 'Maturation.',
        terrain: '- Bishop ≤ 6',
        fonctionnels: '',
        generaux: '',
        physiques: '- Col long et fermé',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Déclenchement sur utérus cicatriciel',
        type: 'gravite',
        description: 'Risque de rupture.',
        terrain: '- Antécédent de césarienne segmentaire',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Accouchement instrumental
  {
    ...TRAV,
    slug: 'accouchement-instrumental',
    nom: 'Accouchement instrumental (ventouse, forceps)',
    resume:
      'Extraction de la tête fœtale par ventouse obstétricale ou forceps lors de la 2e phase du travail : indications (efforts expulsifs inefficaces ou épuisement, phase d’expulsion prolongée, anomalies du rythme fœtal, cardiopathie ou pathologie maternelle contre-indiquant les efforts) ; conditions strictes (dilatation complète, membranes rompues, tête engagée — pas plus d’un cinquième palpable au-dessus de la symphyse, présentation céphalique connue, vessie vide, opérateur formé) ; la ventouse est l’instrument le plus accessible ; en cas d’échec, césarienne ; surveiller les déchirures et l’hémorragie.',
    definition:
      'Extraction instrumentale du fœtus par voie vaginale à l’aide d’une ventouse (vacuum) ou d’un forceps pendant la phase d’expulsion.',
    physiopathologie:
      '## Principes\n- **Ventouse** : cupule appliquée sur le crâne (point de flexion), traction synchronisée avec les contractions et les efforts maternels ; moins de déchirures maternelles\n- **Forceps** : cuillères appliquées sur la tête, efficacité supérieure mais plus de lésions périnéales\n\n## Complications\n- Mère : déchirures périnéales et cervicales, hémorragie, rétention urinaire, fistules\n- Nouveau-né : céphalhématome, bosse séro-sanguine, hématome sous-galéal (grave), lésions cutanées, paralysie faciale (forceps), hémorragie intracrânienne',
    diagnostic:
      '## Indications\n- **Fœtales** : anomalies du rythme cardiaque fœtal pendant l’expulsion\n- **Maternelles** : efforts expulsifs inefficaces, épuisement, expulsion prolongée (> 2–3 h nullipare, > 1–2 h multipare selon l’analgésie), cardiopathie, pré-éclampsie sévère\n\n## Conditions préalables\n- **Dilatation complète**, **membranes rompues**, **tête engagée** (0/5 ou 1/5 palpable par l’abdomen), position de la tête connue\n- Présentation du sommet, pas de disproportion, vessie vide, analgésie, consentement\n- Possibilité de césarienne en cas d’échec\n\n## Contre-indications\n- Tête non engagée, présentation de la face ou du front (ventouse), prématurité < 34 semaines (ventouse), suspicion de troubles de coagulation fœtale',
    examens: [['premiere_intention', 'cardiotocographie', 'Indication fœtale.']],
    scores: [],
    differentiels: [],
    etiologies:
      '## Indications\n- Expulsion prolongée, épuisement maternel, souffrance fœtale, pathologie maternelle',
    principes: [
      [
        'Technique (ventouse)',
        'Extraction sûre.',
        '- Vérifier les conditions, vider la vessie, épisiotomie si nécessaire\n- Cupule sur le **point de flexion** (3 cm en avant de la fontanelle postérieure), vide progressif, **traction pendant les contractions**, perpendiculaire au plan de la cupule\n- **Arrêter** après 3 tractions sans progression ou 3 décollements de la cupule, ou au-delà de 20 min : **césarienne**\n- Pas d’association ventouse puis forceps (traumatisme fœtal)',
      ],
      [
        'Après l’accouchement',
        'Rechercher les lésions.',
        '- **Gestion active de la délivrance**, révision du col et du vagin, réparation des déchirures\n- Sondage urinaire si besoin, prévention des infections\n- Examen du nouveau-né : céphalhématome, **hématome sous-galéal** (gonflement mou étendu du crâne, pâleur, choc : urgence), vitamine K',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Gestion active de la délivrance'],
      ['lidocaine', 'premiere', 'Anesthésie locale (épisiotomie, réparation)'],
      ['vitamine-k1-phytomenadione', 'premiere', 'Nouveau-né'],
      ['cefazoline', 'adjuvant', 'Déchirures graves'],
    ],
    complications: [
      {
        nom: 'Déchirures périnéales et cervicales',
        description: 'Forceps surtout.',
        traitement: '- Réparation',
        clinique: '- Saignement',
        paraclinique: '',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Déchirures, atonie.',
        traitement: '- Réparation, utérotoniques',
        clinique: '- Saignement',
        paraclinique: '',
      },
      {
        nom: 'Traumatismes du nouveau-né',
        fiche: 'traumatismes-obstetricaux-nouveau-ne',
        description: 'Céphalhématome, hématome sous-galéal.',
        traitement: '- Surveillance, transfusion',
        clinique: '- Gonflement crânien, pâleur',
        paraclinique: '- Hb',
      },
      {
        nom: 'Fistule obstétricale',
        fiche: 'fistules-obstetricales',
        description: 'Travail prolongé, extraction difficile.',
        traitement: '- Réparation',
        clinique: '- Fuites',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si les conditions sont respectées ; alternative essentielle à la césarienne dans les structures à ressources limitées',
    urgences: [],
    symptomes: [],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Ventouse si opérateur formé et conditions réunies, sinon référence', ''],
      hgr: ['- Ventouse, forceps, césarienne en cas d’échec', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Extraction par ventouse',
        type: 'commune',
        description: 'Instrument de choix.',
        terrain: '- Expulsion prolongée',
        fonctionnels: '',
        generaux: '',
        physiques: '- Tête engagée, dilatation complète',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Extraction difficile ou échec',
        type: 'gravite',
        description: 'Césarienne.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Absence de progression',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
