'use strict';

/**
 * Lot 53 (phase 2, travail et accouchement) — utérus cicatriciel, dystocie des épaules, analgésie
 * obstétricale, accouchement gémellaire, déchirures périnéales. Rédigé par IA (OMS, Normes et
 * directives SR, Guide clinique et thérapeutique) : à valider.
 */

const TRAV = { departement: 'gynecologie-obstetrique', specialite: 'Travail et accouchement' };

module.exports = [
  // =================================================================== Utérus cicatriciel
  {
    ...TRAV,
    slug: 'uterus-cicatriciel',
    nom: 'Utérus cicatriciel',
    resume:
      'Grossesse après césarienne (ou myomectomie) : risques de rupture utérine pendant le travail, de placenta prævia et accreta ; tentative de voie basse (épreuve utérine) possible après une césarienne segmentaire transversale, sans autre indication de césarienne, en structure capable de réaliser une césarienne en urgence, avec surveillance continue ; pas de misoprostol pour le déclenchement, ocytocine avec prudence ; césarienne itérative si ≥ 2 césariennes (selon le contexte), incision corporéale, rupture antérieure, placenta prævia ; intervalle intergénésique ≥ 18 mois.',
    definition:
      'Utérus portant une ou plusieurs cicatrices de chirurgie (césarienne, myomectomie, réparation de rupture), exposant à la rupture et aux anomalies d’insertion placentaire.',
    physiopathologie:
      '## Risques\n- **Rupture utérine** pendant le travail : 0,5–1 % après une césarienne segmentaire transversale, beaucoup plus après une incision **corporéale** ou en T, ou avec l’usage de **prostaglandines**\n- **Placenta prævia** et **placenta accreta** (risque croissant avec le nombre de césariennes)\n- Facteurs aggravants : intervalle court (< 18 mois), infection postopératoire, déclenchement, macrosomie\n\n## En RDC\n- Compte rendu opératoire souvent indisponible ; césariennes parfois réalisées dans des conditions difficiles → prudence',
    diagnostic:
      '## Évaluation prénatale\n- **Antécédents** : nombre de césariennes, indication, type d’incision (compte rendu opératoire), suites (infection), intervalle\n- **Échographie** : localisation du placenta (prævia, signes d’accreta), présentation, poids\n- Indications actuelles de césarienne (présentation, bassin, placenta)\n\n## Pendant le travail\n- **Signes de rupture** : douleur sus-pubienne persistante entre les contractions, saignement, anomalies du rythme fœtal (premier signe), arrêt des contractions, remontée de la présentation, choc',
    examens: [
      ['premiere_intention', 'echographie-obstetricale', 'Placenta, présentation.'],
      ['premiere_intention', 'cardiotocographie', 'Surveillance continue pendant le travail.'],
      ['gravite', 'groupage-rai', 'Sang disponible.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
    ],
    scores: [],
    differentiels: [
      ['rupture-uterine', 'Complication principale.'],
      ['placenta-accreta', 'Placenta antérieur bas sur cicatrice.'],
      ['hematome-retroplacentaire', 'Douleur, utérus dur.'],
    ],
    etiologies: '## Causes\n- Césariennes antérieures, myomectomie, réparation de rupture utérine',
    principes: [
      [
        'Choix de la voie d’accouchement',
        'Décision anticipée.',
        '- **Épreuve utérine (voie basse)** possible si : une césarienne segmentaire transversale, pas d’autre indication de césarienne, présentation céphalique, travail spontané, **structure équipée** (bloc, sang, opérateur disponible en permanence)\n- **Césarienne itérative** : ≥ 2 césariennes (selon le contexte), incision corporéale ou inconnue à risque, antécédent de rupture, placenta prævia, présentation anormale, macrosomie importante',
      ],
      [
        'Pendant l’épreuve utérine',
        'Surveiller.',
        '- Surveillance **continue** du rythme fœtal et de la douleur, **partogramme** ; césarienne si stagnation\n- **Pas de misoprostol** ; ocytocine seulement si nécessaire, à doses prudentes ; sonde de Foley pour la maturation\n- Rupture suspectée : laparotomie en urgence',
      ],
      [
        'Après l’accouchement',
        'Conseiller.',
        '- **Espacement des naissances** (≥ 18–24 mois), contraception\n- Carnet avec le type d’incision et le déroulement',
      ],
    ],
    molecules: [
      ['ocytocine', 'alternative', 'Accélération prudente, délivrance'],
      ['cefazoline', 'premiere', 'Antibioprophylaxie de la césarienne'],
      ['acide-tranexamique', 'adjuvant', 'Hémorragie'],
    ],
    complications: [
      {
        nom: 'Rupture utérine',
        fiche: 'rupture-uterine',
        description: 'Désunion de la cicatrice.',
        traitement: '- Laparotomie urgente',
        clinique: '- Douleur, anomalies du RCF, choc',
        paraclinique: '',
      },
      {
        nom: 'Placenta accreta',
        fiche: 'placenta-accreta',
        description: 'Placenta sur la cicatrice.',
        traitement: '- Césarienne-hystérectomie',
        clinique: '- Hémorragie',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Placenta prævia',
        fiche: 'placenta-praevia',
        description: 'Insertion basse.',
        traitement: '- Césarienne',
        clinique: '- Saignements',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Succès de l’épreuve utérine dans 60–75 % des cas sélectionnés ; risque maternel élevé si l’épreuve a lieu sans possibilité de césarienne rapide',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'occasionnel'],
      ['Saignement vaginal', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Identifier les femmes avec cicatrice, référence pour accoucher en hôpital',
        '- Femme cicatricielle en travail',
      ],
      hgr: ['- Épreuve utérine, césarienne', ''],
      tert: ['', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical':
        'Femme avec cicatrice utérine, douleur continue et anomalies du cœur fœtal pendant le travail',
    },
    formes: [
      {
        nom: 'Utérus unicicatriciel',
        type: 'commune',
        description: 'Épreuve utérine possible.',
        terrain: '- Une césarienne segmentaire',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Placenta haut',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Utérus multicicatriciel',
        type: 'gravite',
        description: 'Césarienne itérative.',
        terrain: '- ≥ 2 césariennes',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Rechercher un accreta',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dystocie des épaules
  {
    ...TRAV,
    slug: 'dystocie-des-epaules',
    nom: 'Dystocie des épaules',
    resume:
      'Urgence obstétricale imprévisible : après la sortie de la tête, les épaules restent bloquées derrière la symphyse (signe de la tortue : tête rétractée contre le périnée) ; risque d’asphyxie fœtale en quelques minutes et de lésions du plexus brachial ; facteurs : macrosomie, diabète, obésité, travail prolongé, extraction instrumentale ; appeler à l’aide, noter l’heure, manœuvre de McRoberts + pression sus-pubienne (résout la majorité), puis manœuvres internes (Wood, Rubin, extraction du bras postérieur), position à quatre pattes ; ne jamais tirer fort sur la tête ni appuyer sur le fond utérin.',
    definition:
      'Échec de l’expulsion des épaules après la naissance de la tête, nécessitant des manœuvres obstétricales spécifiques, par blocage de l’épaule antérieure derrière la symphyse pubienne.',
    physiopathologie:
      '## Mécanisme\n- Diamètre bi-acromial trop grand par rapport au bassin, épaule antérieure bloquée sous la symphyse (ou postérieure sur le promontoire)\n- Compression du cordon et du thorax → **asphyxie** (le pH baisse rapidement)\n- Tractions excessives → **lésions du plexus brachial** (paralysie d’Erb), fractures\n\n## Facteurs\n- **Macrosomie**, **diabète**, obésité, grossesse prolongée, antécédent, travail prolongé, **extraction instrumentale**',
    diagnostic:
      '## Reconnaissance\n- Tête sortie qui **remonte et se plaque** contre le périnée (« signe de la tortue »)\n- Absence de rotation externe et d’expulsion des épaules malgré une traction douce et les efforts maternels\n\n## Après la naissance\n- Évaluation du nouveau-né (Apgar, réanimation), mobilité des bras, clavicules\n- Examen du périnée et du col (déchirures), hémorragie',
    examens: [],
    scores: [],
    differentiels: [
      ['Cordon court ou circulaire serré', 'Tête qui remonte sans blocage des épaules.'],
      ['Tumeur ou malformation fœtale', 'Abdomen ou thorax volumineux.'],
    ],
    etiologies: '## Facteurs\n- Macrosomie, diabète, obésité, extraction instrumentale, travail prolongé',
    principes: [
      [
        'Manœuvres (mnémonique ALARMER)',
        'Agir dans l’ordre, calmement.',
        '- **Appeler à l’aide** (sage-femme, médecin, réanimateur néonatal), noter l’heure\n- **McRoberts** : hyperflexion des cuisses de la mère sur l’abdomen (deux aides) + **pression sus-pubienne** (paume au-dessus du pubis, du côté du dos fœtal) en continu puis en rythme\n- **Épisiotomie** si besoin pour faciliter les manœuvres internes\n- Manœuvres internes : **Rubin II**, **Wood** (rotation des épaules), **extraction du bras postérieur**\n- **Position à quatre pattes** (Gaskin) puis répéter les manœuvres\n- **Ne pas** : tirer fort sur la tête, exercer une expression utérine, couper le cordon avant la naissance',
      ],
      [
        'Après l’accouchement',
        'Prendre en charge mère et enfant.',
        '- **Réanimation néonatale**, examen du plexus brachial et des clavicules\n- **Gestion active de la délivrance**, révision, réparation des déchirures\n- Compte rendu détaillé (heure, manœuvres, durée), information des parents',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Gestion active de la délivrance'],
      ['lidocaine', 'alternative', 'Épisiotomie'],
    ],
    complications: [
      {
        nom: 'Asphyxie périnatale',
        fiche: 'asphyxie-perinatale',
        description: 'Délai tête-corps prolongé.',
        traitement: '- Réanimation néonatale',
        clinique: '- Apgar bas',
        paraclinique: '',
      },
      {
        nom: 'Paralysie du plexus brachial et fractures',
        fiche: 'traumatismes-obstetricaux-nouveau-ne',
        description: 'Tractions.',
        traitement: '- Kinésithérapie',
        clinique: '- Bras inerte',
        paraclinique: '',
      },
      {
        nom: 'Hémorragie du post-partum et déchirures',
        fiche: 'hemorragie-post-partum',
        description: 'Manœuvres, atonie.',
        traitement: '- Utérotoniques, réparation',
        clinique: '- Saignement',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si les manœuvres sont réalisées rapidement par une équipe entraînée ; la majorité des paralysies du plexus récupèrent',
    urgences: [],
    symptomes: [],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- McRoberts et pression sus-pubienne, réanimation néonatale', ''],
      hgr: ['- Manœuvres internes, prise en charge des complications', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dystocie des épaules résolue par McRoberts',
        type: 'commune',
        description: 'La majorité.',
        terrain: '- Macrosomie',
        fonctionnels: '',
        generaux: '',
        physiques: '- Signe de la tortue',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dystocie sévère',
        type: 'gravite',
        description: 'Manœuvres internes.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Échec des premières manœuvres',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Analgésie obstétricale
  {
    ...TRAV,
    slug: 'analgesie-obstetricale',
    nom: 'Analgésie obstétricale',
    resume:
      'Soulagement de la douleur du travail, droit de la femme et facteur de qualité des soins : méthodes non médicamenteuses (accompagnant de son choix, mobilité, positions, massage, eau chaude, respiration) ; opioïdes (péthidine, morphine, tramadol) avec risque de dépression respiratoire du nouveau-né (naloxone disponible) ; analgésie péridurale ou rachianalgésie là où un anesthésiste est disponible ; anesthésie locale pour l’épisiotomie et la réparation des déchirures ; anesthésie pour la césarienne (rachianesthésie de préférence, kétamine en recours).',
    definition:
      'Ensemble des méthodes pharmacologiques et non pharmacologiques visant à soulager la douleur pendant le travail, l’accouchement et les gestes obstétricaux.',
    physiopathologie:
      '## Douleur du travail\n- 1re phase : contractions et dilatation du col (T10–L1) ; 2e phase : distension du périnée (S2–S4)\n- Douleur intense mal soulagée → anxiété, hyperventilation, sécrétion de catécholamines, mauvaise expérience\n\n## Risques des médicaments\n- **Opioïdes** : nausées, sédation, dépression respiratoire néonatale (surtout si administrés 1–4 h avant la naissance)\n- **Péridurale** : hypotension, fièvre, prolongation de la 2e phase, céphalées post-ponction',
    diagnostic:
      '## Évaluation\n- Intensité de la douleur (échelle), phase du travail, souhaits de la femme\n- Contre-indications de l’analgésie neuraxiale : troubles de la coagulation, thrombopénie < 75 000, infection au point de ponction, hypovolémie non corrigée, refus\n- Disponibilité : anesthésiste, surveillance, naloxone, matériel de réanimation',
    examens: [
      ['premiere_intention', 'nfs', 'Plaquettes avant analgésie neuraxiale.'],
      ['premiere_intention', 'hemostase', 'Avant analgésie neuraxiale si pathologie.'],
    ],
    scores: [],
    differentiels: [
      ['rupture-uterine', 'Douleur continue anormale.'],
      ['hematome-retroplacentaire', 'Douleur permanente, utérus dur.'],
    ],
    etiologies:
      '## Contexte\n- Travail, accouchement, gestes obstétricaux (épisiotomie, réparation, révision, césarienne)',
    principes: [
      [
        'Méthodes non médicamenteuses',
        'Pour toutes.',
        '- **Accompagnant** de son choix, information, **liberté de mouvement** et de position, massage, chaleur, respiration, hydratation\n- Respect et soutien continu (OMS : expérience positive de l’accouchement)',
      ],
      [
        'Médicaments',
        'Selon la demande et le contexte.',
        '- **Opioïdes** : **péthidine** 50–100 mg IM ou **morphine** 0,1 mg/kg, **tramadol** 50–100 mg ; éviter dans l’heure précédant la naissance ; **naloxone** disponible pour le nouveau-né\n- **Analgésie péridurale** (bupivacaïne faible concentration ± fentanyl) si anesthésiste et surveillance disponibles\n- **Paracétamol** en complément ; pas d’AINS avant l’accouchement',
      ],
      [
        'Gestes et césarienne',
        'Anesthésier.',
        '- **Lidocaïne** 1 % en infiltration (épisiotomie, réparation), bloc pudendal\n- Césarienne : **rachianesthésie** (bupivacaïne hyperbare) de préférence ; **kétamine** en anesthésie générale si rachianesthésie impossible\n- Post-partum : paracétamol, ibuprofène, morphine si césarienne',
      ],
    ],
    molecules: [
      ['morphine', 'alternative', 'Opioïde pendant le travail'],
      ['tramadol', 'alternative', 'Opioïde pendant le travail'],
      ['bupivacaine', 'premiere', 'Péridurale, rachianesthésie'],
      ['fentanyl', 'adjuvant', 'Péridurale'],
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['ketamine', 'alternative', 'Anesthésie générale (césarienne)'],
      ['naloxone', 'adjuvant', 'Dépression respiratoire néonatale'],
      ['paracetamol', 'adjuvant', 'Complément, post-partum'],
    ],
    complications: [
      {
        nom: 'Dépression respiratoire du nouveau-né',
        fiche: 'reanimation-nouveau-ne-salle-de-naissance',
        description: 'Opioïdes.',
        traitement: '- Ventilation, naloxone',
        clinique: '- Apnée, hypotonie',
        paraclinique: '',
      },
      {
        nom: 'Hypotension maternelle',
        description: 'Analgésie neuraxiale.',
        traitement: '- Remplissage, éphédrine ou phényléphrine',
        clinique: '- Malaise, bradycardie fœtale',
        paraclinique: '',
      },
      {
        nom: 'Céphalée post-ponction',
        description: 'Brèche dure-mérienne.',
        traitement: '- Repos, hydratation, antalgiques',
        clinique: '- Céphalée posturale',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Meilleure expérience de l’accouchement ; sécurité assurée par la surveillance et la disponibilité de la réanimation',
    urgences: [],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Douleur lombaire', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Méthodes non médicamenteuses, accompagnant, lidocaïne', ''],
      hgr: ['- Opioïdes, rachianesthésie pour césarienne', ''],
      tert: ['- Analgésie péridurale', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Analgésie du travail',
        type: 'commune',
        description: 'Douleur des contractions.',
        terrain: '- Femme en travail',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Anesthésie pour césarienne',
        type: 'gravite',
        description: 'Rachianesthésie ou générale.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Accouchement gémellaire
  {
    ...TRAV,
    slug: 'accouchement-gemellaire',
    nom: 'Accouchement gémellaire',
    resume:
      'Conduite de l’accouchement des jumeaux : en hôpital avec équipe complète (deux réanimations néonatales, possibilité de césarienne, sang) ; voie basse si le premier jumeau est en présentation céphalique ; après la naissance du premier, vérifier la présentation et le cœur du second, rompre les membranes une fois la présentation engagée, ocytocine si contractions insuffisantes, version par manœuvre interne et grande extraction du siège si présentation transversale (opérateur formé), délai idéal < 30 min entre les deux naissances ; ne pas donner d’ocytocine avant la naissance du second ; gestion active de la délivrance renforcée (risque d’hémorragie).',
    definition:
      'Accouchement d’une grossesse gémellaire, comportant la naissance du premier puis du second jumeau et la délivrance.',
    physiopathologie:
      '## Risques\n- Présentations anormales (surtout du **2e jumeau**), procidence du cordon, décollement placentaire après la naissance du premier\n- **Souffrance du 2e jumeau** si le délai entre les naissances se prolonge\n- **Hémorragie du post-partum** par atonie (surdistension)\n- Prématurité, petit poids, enchevêtrement des cordons (monoamniotiques), accrochage des mentons (rare)',
    diagnostic:
      '## Avant le travail\n- Chorionicité, présentations (**échographie**), poids estimés, placenta\n\n## Pendant le travail\n- Surveillance des deux rythmes cardiaques fœtaux, partogramme\n- Après le 1er : **palpation et échographie** (présentation du 2e), auscultation, toucher vaginal',
    examens: [
      ['premiere_intention', 'echographie-obstetricale', 'Présentations, chorionicité.'],
      ['premiere_intention', 'cardiotocographie', 'Deux rythmes cardiaques.'],
      ['gravite', 'groupage-rai', 'Hémorragie.'],
    ],
    scores: [],
    differentiels: [],
    etiologies: '## Contexte\n- Grossesse gémellaire',
    principes: [
      [
        'Choix de la voie',
        'Selon le premier jumeau.',
        '- **Voie basse** si 1er jumeau en présentation céphalique et absence de contre-indication\n- **Césarienne** : 1er jumeau en siège ou transversal (selon l’expérience), monoamniotiques, jumeaux conjoints, autres indications obstétricales',
      ],
      [
        'Naissance du second jumeau',
        'Délai court.',
        '- Après le 1er : clamper le cordon, **vérifier la présentation et le cœur du 2e**, maintenir la présentation longitudinale\n- Céphalique : attendre l’engagement, **amniotomie**, ocytocine si contractions insuffisantes\n- Transversale : **version par manœuvre interne** et **grande extraction du siège** (membranes intactes, opérateur formé) ou césarienne\n- Souffrance fœtale, procidence, saignement : extraction rapide (ventouse, grande extraction, césarienne)\n- **Pas d’ocytocine pour la délivrance avant la naissance du dernier jumeau**',
      ],
      [
        'Délivrance',
        'Prévenir l’hémorragie.',
        '- **Ocytocine** 10 UI IM après le dernier jumeau + perfusion d’ocytocine 2–4 h, traction contrôlée du cordon, massage utérin, surveillance rapprochée',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Contractions du 2e temps, délivrance'],
      ['misoprostol', 'alternative', 'Prévention de l’hémorragie si ocytocine indisponible'],
      ['acide-tranexamique', 'adjuvant', 'Hémorragie'],
    ],
    complications: [
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Atonie.',
        traitement: '- Utérotoniques, réanimation',
        clinique: '- Saignement',
        paraclinique: '',
      },
      {
        nom: 'Asphyxie du 2e jumeau',
        fiche: 'asphyxie-perinatale',
        description: 'Délai prolongé, décollement.',
        traitement: '- Extraction, réanimation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Procidence du cordon',
        fiche: 'procidence-du-cordon',
        description: 'Présentation non engagée.',
        traitement: '- Extraction',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon en structure équipée ; le 2e jumeau est plus exposé',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Référence pour accoucher en hôpital ; si accouchement imprévu : ne pas donner d’ocytocine avant le 2e',
        '',
      ],
      hgr: ['- Accouchement, version interne, césarienne', ''],
      tert: ['', ''],
    },
    alertes: { 'hemorragie-du-post-partum-urgence': 'Saignement abondant après un accouchement gémellaire' },
    formes: [
      {
        nom: 'Jumeaux céphalique-céphalique',
        type: 'commune',
        description: 'Voie basse.',
        terrain: '- Grossesse gémellaire',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Deux présentations céphaliques',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Second jumeau en présentation transversale',
        type: 'gravite',
        description: 'Version interne.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Déchirures périnéales
  {
    ...TRAV,
    slug: 'dechirures-perineales',
    nom: 'Déchirures périnéales',
    resume:
      'Lésions du périnée lors de l’accouchement : 1er degré (peau, muqueuse), 2e degré (muscles du périnée), 3e degré (sphincter anal), 4e degré (muqueuse rectale) ; examiner systématiquement le périnée, le vagin et l’anus (toucher rectal) après tout accouchement ; réparer sous anesthésie locale (1er–2e degré) en fil résorbable, réparation des 3e–4e degrés par un opérateur formé au bloc avec antibiotiques ; prévention par la protection du périnée, l’épisiotomie seulement si indiquée ; rechercher hématome, infection, incontinence ou fistule.',
    definition:
      'Lésions traumatiques du périnée, du vagin et éventuellement du sphincter anal et du rectum survenant au cours de l’accouchement par voie basse.',
    physiopathologie:
      '## Facteurs\n- **Primiparité**, **macrosomie**, **extraction instrumentale** (forceps), expulsion rapide ou mal contrôlée, présentation postérieure, dystocie des épaules, mutilations génitales\n\n## Conséquences\n- Hémorragie, **hématome** vulvo-vaginal, infection, douleur, **incontinence anale** (3e–4e degrés mal réparés), **fistule recto-vaginale**, dyspareunie',
    diagnostic:
      '## Examen après l’accouchement\n- Inspection du périnée, du vagin, du col (avec valves et bon éclairage)\n- **Toucher rectal** systématique pour rechercher une atteinte du sphincter et de la muqueuse rectale\n\n## Classification\n- **1er degré** : peau et muqueuse vaginale\n- **2e degré** : muscles du périnée (sans sphincter)\n- **3e degré** : sphincter anal (a : < 50 %, b : > 50 %, c : sphincter interne)\n- **4e degré** : muqueuse rectale\n\n## Suites\n- Douleur croissante (hématome), fièvre, écoulement purulent, désunion, incontinence, fuite de selles par le vagin',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['deuxieme_intention', 'prelevement-de-pus', 'Infection.'],
    ],
    scores: [],
    differentiels: [
      ['fistules-obstetricales', 'Fuite d’urine ou de selles après un travail prolongé.'],
      ['Hématome vulvo-vaginal', 'Douleur intense, masse bleutée.'],
      ['hemorragie-post-partum', 'Autres causes de saignement (atonie).'],
    ],
    etiologies: '## Facteurs\n- Primiparité, macrosomie, forceps, expulsion rapide, mutilations génitales',
    principes: [
      [
        'Prévention',
        'Protéger le périnée.',
        '- Accouchement en position confortable, **expulsion lente et contrôlée** de la tête, compresses chaudes, massage périnéal\n- **Épisiotomie** seulement si indiquée (souffrance fœtale, extraction instrumentale, périnée cicatriciel ou infibulation), pas systématique',
      ],
      [
        'Réparation',
        'Bien réparer.',
        '- 1er–2e degrés : **lidocaïne** 1 % en infiltration, **fil résorbable** (surjet vaginal, points musculaires, peau en intradermique)\n- 3e–4e degrés : au **bloc**, sous bonne anesthésie, opérateur formé, réparation de la muqueuse rectale puis du sphincter ; **antibiotiques** (céfazoline ou amoxicilline-acide clavulanique + métronidazole) ; **laxatifs** (lactulose) 10 jours\n- Hématome : évacuation, hémostase',
      ],
      [
        'Suivi',
        'Prévenir les séquelles.',
        '- Antalgiques (paracétamol, ibuprofène), hygiène, bains de siège\n- Consultation à 6 semaines : continence, cicatrisation ; rééducation périnéale si incontinence',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'alternative', 'Douleur'],
      ['cefazoline', 'alternative', 'Déchirures du 3e–4e degré'],
      ['metronidazole', 'alternative', 'Déchirures du 3e–4e degré'],
      ['lactulose', 'adjuvant', 'Selles molles après réparation sphinctérienne'],
    ],
    complications: [
      {
        nom: 'Hématome périnéal',
        description: 'Saignement sous la réparation.',
        traitement: '- Évacuation, hémostase',
        clinique: '- Douleur intense, masse',
        paraclinique: '- Hb',
      },
      {
        nom: 'Infection et désunion',
        fiche: 'infection-du-site-operatoire',
        description: 'Contamination.',
        traitement: '- Soins, antibiotiques, reprise différée',
        clinique: '- Fièvre, pus',
        paraclinique: '',
      },
      {
        nom: 'Incontinence anale et fistule recto-vaginale',
        fiche: 'fistules-obstetricales',
        description: 'Lésion sphinctérienne méconnue.',
        traitement: '- Chirurgie réparatrice',
        clinique: '- Fuite de gaz ou de selles',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent pour les 1er–2e degrés ; incontinence persistante possible après les 3e–4e degrés, réduite par une réparation correcte',
    urgences: [],
    symptomes: [
      ['Douleur périnéale', 'tres_frequent'],
      ['Saignement vaginal', 'frequent'],
      ['Incontinence urinaire', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Examen systématique, réparation 1er–2e degrés', '- 3e–4e degrés, hématome'],
      hgr: ['- Réparation des lésions sphinctériennes', ''],
      tert: ['- Fistules, incontinence', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Déchirure du 1er ou 2e degré',
        type: 'commune',
        description: 'Fréquente.',
        terrain: '- Primipare',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Plaie périnéale',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Déchirure du 3e ou 4e degré',
        type: 'gravite',
        description: 'Atteinte sphinctérienne.',
        terrain: '- Forceps, macrosomie',
        fonctionnels: '',
        generaux: '',
        physiques: '- Sphincter ou rectum atteint au toucher rectal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
