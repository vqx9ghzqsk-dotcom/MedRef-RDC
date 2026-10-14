'use strict';

/**
 * Lot 73 (phase 2, psychiatrie) — trouble délirant persistant, troubles dissociatifs et de conversion,
 * dysfonctions sexuelles, expressions culturelles de la détresse, troubles psychiatriques du sujet
 * âgé. Rédigé par IA (mhGAP, OMS, Harrison) : à valider.
 */

const PSY = { departement: 'neuropsychiatrie', specialite: 'Psychiatrie' };
const DEM = { departement: 'neuropsychiatrie', specialite: 'Démences et neurogériatrie' };

module.exports = [
  // =================================================================== Trouble délirant persistant
  {
    ...PSY,
    slug: 'trouble-delirant-persistant',
    nom: 'Trouble délirant persistant',
    resume:
      'Idées délirantes non bizarres, systématisées et persistantes (plus de 3 mois) chez un adulte d’âge moyen, sans hallucinations marquées ni désorganisation, avec un fonctionnement en dehors du thème du délire relativement préservé : délire de persécution (empoisonnement, complot, sorcellerie), de jalousie (conjoint infidèle : risque de violence), érotomaniaque, de grandeur, hypocondriaque (parasites sous la peau, odeur corporelle) ; peu de conscience du trouble, refus fréquent des soins ; à distinguer des croyances culturellement partagées (sorcellerie), de la schizophrénie, d’une dépression délirante et des causes organiques (démence, substances, VIH) ; prise en charge : alliance thérapeutique sans confrontation directe, antipsychotique à faible dose (rispéridone, halopéridol), évaluation du risque de violence et de suicide.',
    definition:
      'Trouble psychotique caractérisé par une ou plusieurs idées délirantes persistant au moins 3 mois, en l’absence de schizophrénie, de trouble de l’humeur ou de cause organique.',
    physiopathologie:
      '## Facteurs\n- Personnalité méfiante ou sensible, isolement social, migration, surdité, stress chronique\n- Hyperactivité dopaminergique ; antécédents familiaux\n\n## Thèmes\n- **Persécution** (le plus fréquent), **jalousie**, **érotomanie**, **grandeur**, **somatique** (infestation parasitaire, odeur, malformation)',
    diagnostic:
      '## Clinique\n- **Idées délirantes** non bizarres (plausibles), systématisées, durée > 3 mois\n- Pas d’hallucinations marquées (sauf liées au thème), pas de désorganisation ni de symptômes négatifs\n- Comportement cohérent avec le délire (plaintes, procès, déménagements, agressions)\n- Conscience du trouble absente\n\n## Distinguer\n- **Croyances culturelles** partagées par le groupe (sorcellerie) : non pathologiques en soi ; le délire est individuel, inébranlable et disproportionné\n- **Schizophrénie**, **dépression** avec idées délirantes, **trouble bipolaire**\n- **Causes organiques** : démence, substances (cannabis, amphétamines), VIH, syphilis, lésions cérébrales\n\n## Évaluer\n- **Risque de violence** (jalousie, persécution), risque suicidaire',
    examens: [
      ['etiologique', 'tdr-vih', 'Cause organique.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
      ['etiologique', 'tsh', 'Dysthyroïdie.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Début tardif, signes neurologiques.'],
    ],
    scores: [],
    differentiels: [
      ['schizophrenie', 'Hallucinations, désorganisation, symptômes négatifs.'],
      ['depression', 'Idées délirantes congruentes à l’humeur.'],
      ['troubles-psychiatriques-d-origine-organique', 'Cause organique.'],
      ['maladie-d-alzheimer', 'Idées de vol ou de préjudice chez le dément.'],
      ['expressions-culturelles-de-la-detresse', 'Croyances partagées.'],
    ],
    etiologies: '## Facteurs\n- Personnalité, isolement, stress, génétique',
    principes: [
      [
        'Alliance',
        'Sans confrontation.',
        '- Ne pas argumenter contre le délire ni le valider ; s’intéresser à la souffrance (anxiété, insomnie)\n- Impliquer la famille, assurer la sécurité (jalousie : protection du conjoint)',
      ],
      [
        'Médicaments',
        'Faibles doses.',
        '- **Rispéridone** 1–4 mg/j ou **halopéridol** 1,5–5 mg/j ; olanzapine ; forme retard si mauvaise observance\n- Durée prolongée ; surveiller les effets extrapyramidaux et métaboliques',
      ],
      [
        'Soutien',
        'Psychosocial.',
        '- Psychothérapie de soutien, thérapie cognitive ; réduction de l’isolement, correction d’une surdité',
      ],
    ],
    molecules: [
      ['risperidone', 'premiere', 'Antipsychotique'],
      ['haloperidol', 'premiere', 'Antipsychotique'],
      ['olanzapine', 'alternative', 'Antipsychotique'],
      ['fluphenazine', 'alternative', 'Forme retard'],
    ],
    complications: [
      {
        nom: 'Violence',
        description: 'Délire de jalousie ou de persécution.',
        traitement: '- Protection, hospitalisation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression et suicide',
        fiche: 'risque-suicidaire',
        description: 'Isolement.',
        traitement: '- Évaluation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Problèmes judiciaires et sociaux',
        description: 'Plaintes, conflits.',
        traitement: '- Accompagnement',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Chronique, avec amélioration partielle sous antipsychotique chez la moitié environ',
    urgences: [],
    symptomes: [
      ['Idées délirantes', 'tres_frequent'],
      ['Anxiété', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Troubles du sommeil', 'occasionnel'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Repérage, évaluation du risque, orientation', ''],
      hgr: ['- Antipsychotique, suivi psychiatrique', ''],
      tert: ['- Psychiatrie, formes résistantes', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Délire de persécution',
        type: 'commune',
        description: 'Empoisonnement, complot.',
        terrain: '- Adulte d’âge moyen',
        fonctionnels: '- Méfiance, plaintes',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Délire de jalousie',
        type: 'gravite',
        description: 'Risque de violence.',
        terrain: '- Homme, alcool',
        fonctionnels: '- Surveillance du conjoint',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Délire somatique',
        type: 'etiologique',
        description: 'Parasitose délirante.',
        terrain: '- Femme âgée',
        fonctionnels: '- Sensation de parasites sous la peau',
        generaux: '',
        physiques: '- Lésions de grattage',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles dissociatifs et de conversion
  {
    ...PSY,
    slug: 'troubles-dissociatifs-et-de-conversion',
    nom: 'Troubles dissociatifs et de conversion',
    resume:
      'Perturbations de la conscience, de la mémoire, de l’identité, de la perception ou de la motricité sans cause neurologique, souvent déclenchées par un stress ou un traumatisme (violences, conflits, deuil) : conversion ou trouble neurologique fonctionnel (paralysie, faiblesse, troubles de la marche, cécité, aphonie, anesthésie, crises non épileptiques, incohérents avec l’anatomie), amnésie dissociative, fugue, dépersonnalisation, états de transe ou de possession non culturellement sanctionnés ; fréquents chez les adolescentes et les jeunes femmes, parfois en épidémies collectives scolaires ; examen neurologique soigneux (signes positifs : Hoover, faiblesse incohérente) ; éliminer une cause organique ; prise en charge : annonce bienveillante (« trouble réel, fonctionnel, réversible »), éviter les traitements inutiles, rééducation (kinésithérapie), psychothérapie, traitement des traumatismes, de la dépression et de l’anxiété.',
    definition:
      'Troubles caractérisés par une perturbation ou une discontinuité de l’intégration normale de la conscience, de la mémoire, de l’identité, des émotions, de la perception ou du contrôle moteur, sans cause organique suffisante.',
    physiopathologie:
      '## Mécanismes\n- Réaction à un **stress** ou à un **traumatisme** intolérable, non simulée\n- Altération du contrôle attentionnel et de l’agentivité du mouvement (troubles neurologiques fonctionnels)\n- Facteurs : violences sexuelles, conflits armés, deuil, conflits familiaux, pression scolaire ; contagion collective\n\n## Formes\n- **Conversion** (motrice, sensorielle, crises), **amnésie** et **fugue dissociatives**, **dépersonnalisation-déréalisation**, **transe et possession** pathologiques',
    diagnostic:
      '## Clinique\n- Paralysie, faiblesse, **troubles de la marche**, tremblements, crises, **cécité**, **aphonie**, anesthésie\n- **Signes positifs** : signe de Hoover, faiblesse en lâchage, distribution non anatomique, distractibilité\n- **Amnésie** d’une période ou d’informations personnelles, fugue\n- **Transe ou possession** involontaire, source de souffrance, hors d’un rituel culturel\n- Indifférence apparente possible, souvent un événement déclenchant\n\n## Démarche\n- Examen neurologique complet ; examens orientés seulement (éviter la multiplication)\n- Rechercher **violences**, **dépression**, **stress post-traumatique**, **idées suicidaires**',
    examens: [
      ['deuxieme_intention', 'eeg', 'Crises non épileptiques.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Doute avec une lésion.'],
      ['etiologique', 'glycemie', 'Malaise métabolique.'],
    ],
    scores: [],
    differentiels: [
      ['crises-non-epileptiques-psychogenes', 'Forme convulsive.'],
      ['avc', 'Déficit de topographie anatomique.'],
      ['sclerose-en-plaques', 'Signes neurologiques objectifs.'],
      ['syndrome-de-guillain-barre', 'Aréflexie.'],
      ['expressions-culturelles-de-la-detresse', 'Transe rituelle culturellement admise.'],
      ['etat-de-stress-post-traumatique', 'Trouble associé.'],
    ],
    etiologies: '## Facteurs\n- Stress, traumatismes, violences, conflits, deuil',
    principes: [
      [
        'Annonce',
        'Étape clé.',
        '- Expliquer que le trouble est **réel**, **involontaire**, **fonctionnel** et **réversible**\n- Éviter « rien de grave », « c’est dans la tête », simulation ; impliquer la famille',
      ],
      [
        'Traitement',
        'Rééducation et psychothérapie.',
        '- **Kinésithérapie** adaptée (troubles moteurs), orthophonie (aphonie)\n- **Psychothérapie** (TCC, approches centrées sur le traumatisme), gestion du stress\n- Traitement de la **dépression** et de l’**anxiété** (fluoxétine, sertraline)\n- Épidémies scolaires : calme, séparation des élèves atteints, information',
      ],
      ['Éviter', 'Iatrogénie.', '- Injections, hospitalisations prolongées, examens répétés'],
    ],
    molecules: [
      ['fluoxetine', 'alternative', 'Dépression, anxiété associées'],
      ['sertraline', 'alternative', 'Stress post-traumatique associé'],
    ],
    complications: [
      {
        nom: 'Handicap prolongé',
        description: 'Diagnostic tardif.',
        traitement: '- Rééducation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Iatrogénie',
        description: 'Examens et traitements inutiles.',
        traitement: '- Coordination',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression',
        fiche: 'depression',
        description: 'Comorbidité.',
        traitement: '- Traitement',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pour les formes aiguës de l’adolescent ; plus réservé pour les formes chroniques',
    urgences: [],
    symptomes: [
      ['Paralysie flasque', 'frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Convulsions', 'frequent'],
      ['Amnésie', 'occasionnel'],
      ['États de transe ou de possession', 'occasionnel'],
      ['Troubles visuels', 'occasionnel'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Examen, réassurance, recherche de violences, orientation', ''],
      hgr: ['- Examen neurologique, kinésithérapie, suivi psychologique', ''],
      tert: ['- Neurologie, psychothérapie spécialisée', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Conversion motrice',
        type: 'commune',
        description: 'Paralysie fonctionnelle.',
        terrain: '- Adolescente, jeune femme',
        fonctionnels: '- Faiblesse, troubles de la marche',
        generaux: '',
        physiques: '- Signe de Hoover',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Amnésie et fugue dissociatives',
        type: 'etiologique',
        description: 'Mémoire.',
        terrain: '- Traumatisme',
        fonctionnels: '- Perte de mémoire',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Épidémie collective',
        type: 'terrain',
        description: 'Milieu scolaire.',
        terrain: '- Élèves',
        fonctionnels: '- Malaises, crises',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dysfonctions sexuelles
  {
    ...PSY,
    slug: 'dysfonctions-sexuelles',
    nom: 'Dysfonctions sexuelles',
    resume:
      'Difficultés persistantes de la réponse sexuelle sources de souffrance, souvent tues par honte : chez l’homme, troubles de l’érection (vasculaires : diabète, HTA, tabac ; neurologiques ; hormonaux ; médicamenteux : bêtabloquants, thiazidiques, antidépresseurs, antipsychotiques ; psychologiques), éjaculation précoce, baisse du désir ; chez la femme, baisse du désir, troubles de l’excitation, dyspareunie (infections, atrophie vaginale de la ménopause, excision, séquelles obstétricales), vaginisme, anorgasmie ; marqueur de maladie cardiovasculaire et de diabète ; rechercher dépression, conflits conjugaux, violences, IST ; bilan (glycémie, lipides, testostérone, prolactine) ; traitement : facteurs de risque, revue des médicaments, sexothérapie et thérapie de couple, inhibiteurs de la PDE5 (sildénafil, tadalafil) pour l’érection, dapoxétine pour l’éjaculation précoce ; attention aux produits aphrodisiaques non contrôlés.',
    definition:
      'Perturbations du désir, de l’excitation, de l’orgasme ou douleurs lors des rapports, persistantes (au moins 6 mois) et sources de détresse.',
    physiopathologie:
      '## Homme\n- **Troubles de l’érection** : vasculaires (athérosclérose, **diabète**, **HTA**, tabac), neurologiques (neuropathie, médullaires), hormonaux (hypogonadisme, hyperprolactinémie), **médicaments**, **psychologiques** (anxiété de performance, dépression)\n- **Éjaculation précoce** : primaire ou acquise (anxiété, prostatite)\n\n## Femme\n- **Baisse du désir** (fatigue, dépression, conflits, contraception, post-partum), **dyspareunie** (infections, sécheresse, **ménopause**, mutilations génitales, cicatrices, endométriose), **vaginisme** (contraction réflexe, souvent après traumatisme)\n\n## Communs\n- Dépression, anxiété, **violences sexuelles**, alcool, conflits conjugaux',
    diagnostic:
      '## Évaluation\n- Entretien dans un cadre **confidentiel**, sans jugement, en présence du partenaire si souhaité\n- Type de difficulté, ancienneté, contexte (partenaire, situation), érections matinales (organique si absentes)\n- **Facteurs de risque** cardiovasculaires, médicaments, alcool, tabac, dépression, violences\n\n## Examen\n- TA, IMC, pouls, examen génital (Peyronie, testicules, prostate ; vulve, vagin)\n\n## Examens\n- **Glycémie** ou HbA1c, **bilan lipidique**, **testostérone** matinale, prolactine si baisse du désir, TSH ; dépistage des IST\n- Bilan cardiovasculaire si trouble de l’érection (marqueur précoce)',
    examens: [
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'bilan-lipidique', 'Risque cardiovasculaire.'],
      ['etiologique', 'testosteronemie', 'Hypogonadisme.'],
      ['etiologique', 'prolactinemie', 'Hyperprolactinémie.'],
      ['etiologique', 'tsh', 'Dysthyroïdie.'],
      ['etiologique', 'hba1c', 'Équilibre du diabète.'],
      ['etiologique', 'serologie-syphilis', 'IST.'],
    ],
    scores: [],
    differentiels: [
      ['depression', 'Perte d’intérêt globale.'],
      ['infections-sexuellement-transmissibles', 'Douleurs et écoulements.'],
      ['menopause', 'Sécheresse vaginale.'],
      ['hypertrophie-benigne-prostate', 'Troubles urinaires associés.'],
      ['violences-sexuelles-prise-en-charge-psychologique', 'Vaginisme, aversion.'],
    ],
    etiologies:
      '## Causes\n- Diabète, HTA, tabac, médicaments, hypogonadisme, ménopause, infections, dépression, anxiété, violences, conflits conjugaux',
    principes: [
      [
        'Causes et facteurs',
        'D’abord.',
        '- Contrôle du **diabète**, de l’**HTA**, arrêt du **tabac** et réduction de l’alcool, activité physique\n- **Revue des médicaments** (bêtabloquant, thiazidique, ISRS, antipsychotique) : adapter si possible\n- Traitement de la dépression, des infections ; hypogonadisme prouvé : testostérone (centre spécialisé)',
      ],
      [
        'Traitements spécifiques',
        'Selon le trouble.',
        '- **Troubles de l’érection** : **sildénafil** 50 mg (25–100) 1 h avant le rapport ou **tadalafil** 10–20 mg ; **contre-indiqués avec les dérivés nitrés**\n- **Éjaculation précoce** : techniques comportementales, **dapoxétine** à la demande, ISRS\n- **Dyspareunie** de la ménopause : lubrifiants, œstrogènes locaux ; vaginisme : sexothérapie, rééducation\n- Chirurgie réparatrice des mutilations génitales en centre spécialisé',
      ],
      [
        'Couple et prévention',
        'Soutien.',
        '- **Sexothérapie**, thérapie de couple, information\n- Mise en garde contre les **produits aphrodisiaques** non contrôlés (contenant souvent du sildénafil en dose inconnue)',
      ],
    ],
    molecules: [
      ['sildenafil', 'premiere', 'Troubles de l’érection'],
      ['tadalafil', 'premiere', 'Troubles de l’érection'],
      ['dapoxetine', 'premiere', 'Éjaculation précoce'],
      ['testosterone', 'alternative', 'Hypogonadisme prouvé'],
      ['metformine', 'adjuvant', 'Diabète'],
    ],
    complications: [
      {
        nom: 'Conflits conjugaux et infertilité',
        fiche: 'infertilite-du-couple',
        description: 'Absence de rapports.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Maladie cardiovasculaire méconnue',
        fiche: 'hypertension-arterielle',
        description: 'Trouble de l’érection marqueur.',
        traitement: '- Bilan cardiovasculaire',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Accidents avec les aphrodisiaques',
        description: 'Associations aux nitrés, priapisme.',
        traitement: '- Information',
        clinique: '- Hypotension, érection prolongée',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon avec le traitement des causes et les traitements spécifiques',
    urgences: [],
    symptomes: [
      ['Troubles de l’érection', 'tres_frequent'],
      ['Baisse de la libido', 'frequent'],
      ['Dyspareunie', 'frequent'],
      ['Anxiété', 'frequent'],
    ],
    sources: ['OMS — lignes directrices et publications', "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: ['- Écoute, dépistage des facteurs de risque, conseils', ''],
      hgr: ['- Bilan, inhibiteurs de la PDE5', ''],
      tert: ['- Urologie, endocrinologie, sexologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Troubles de l’érection',
        type: 'commune',
        description: 'Homme.',
        terrain: '- Homme de plus de 40 ans, diabète, HTA',
        fonctionnels: '- Érection insuffisante',
        generaux: '',
        physiques: '',
        paraclinique: '- Glycémie, lipides',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dyspareunie et vaginisme',
        type: 'etiologique',
        description: 'Femme.',
        terrain: '- Ménopause, mutilations, violences',
        fonctionnels: '- Douleur aux rapports',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Éjaculation précoce',
        type: 'etiologique',
        description: 'Homme jeune.',
        terrain: '- Anxiété',
        fonctionnels: '- Éjaculation rapide',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Expressions culturelles de la détresse
  {
    ...PSY,
    slug: 'expressions-culturelles-de-la-detresse',
    nom: 'Expressions culturelles de la détresse (possession, sorcellerie)',
    resume:
      'En RDC, la souffrance psychique et la maladie sont souvent interprétées en termes de sorcellerie, d’envoûtement, de possession par des esprits, de transgression d’interdits ou de malédiction, conduisant à consulter d’abord tradipraticiens et églises de réveil ; ces explications sont légitimes et partagées par la communauté, mais elles peuvent retarder le diagnostic d’une maladie traitable (épilepsie, psychose, dépression, neuropaludisme, VIH, trypanosomiase) et exposer à des maltraitances (enfants accusés de sorcellerie, exorcismes violents, jeûnes forcés, enchaînement, abandon) ; l’approche clinique respecte les croyances (entretien sur le modèle explicatif du patient), distingue croyance partagée et délire, recherche systématiquement une cause médicale ou un trouble mental, collabore avec les leaders religieux et tradipraticiens, et protège les personnes vulnérables (signalement des maltraitances).',
    definition:
      'Façons culturellement codifiées d’exprimer, d’expliquer et de vivre la détresse psychologique et la maladie (possession, sorcellerie, envoûtement), qui influencent la présentation des symptômes et le recours aux soins.',
    physiopathologie:
      '## Modèles explicatifs\n- **Sorcellerie** (attaque par un proche jaloux), **possession** par des esprits, ancêtres mécontents, transgression d’interdits, malédiction\n- Expression corporelle de la détresse (chaleur dans la tête, vers dans le corps, fatigue)\n\n## Enjeux\n- **Retard** de soins pour des maladies traitables : épilepsie, psychoses, dépression, troubles neurologiques, infections\n- **Maltraitances** : enfants accusés de sorcellerie (souvent orphelins, handicapés, épileptiques, enfants de la rue), personnes âgées accusées, exorcismes violents, privations\n- Les rituels peuvent aussi apporter **soutien et sens** (transe culturellement admise)',
    diagnostic:
      '## Entretien culturel\n- **Modèle explicatif** du patient et de la famille : « Qu’est-ce qui se passe selon vous ? Quelle en est la cause ? Qu’avez-vous déjà fait ? Que craignez-vous ? »\n- Itinéraire thérapeutique (tradipraticiens, églises, produits ingérés)\n\n## Distinguer\n- **Croyance partagée** par le groupe (non pathologique) vs **idée délirante** individuelle, inébranlable, avec désorganisation\n- **Transe rituelle** contrôlée vs **trouble dissociatif** subi et source de souffrance\n\n## Rechercher systématiquement\n- **Épilepsie**, **psychose**, **dépression**, **stress post-traumatique**, déficience intellectuelle, autisme\n- **Causes médicales** : neuropaludisme, VIH, trypanosomiase, méningite, intoxication (plantes, produits traditionnels)\n- **Maltraitance** : traces de coups, brûlures, privation de nourriture, enchaînement',
    examens: [
      ['premiere_intention', 'goutte-epaisse', 'Neuropaludisme.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'eeg', 'Épilepsie.'],
    ],
    scores: [],
    differentiels: [
      ['epilepsie', 'Crises interprétées comme possession.'],
      ['schizophrenie', 'Délire individuel, désorganisation.'],
      ['troubles-dissociatifs-et-de-conversion', 'Transe pathologique.'],
      ['depression', 'Détresse exprimée par le corps.'],
      ['tha-phase-neurologique', 'Troubles du comportement en zone d’endémie.'],
      ['maltraitance-enfant', 'Enfant accusé de sorcellerie.'],
    ],
    etiologies:
      '## Contexte\n- Croyances traditionnelles et religieuses, détresse psychologique, maladies non reconnues',
    principes: [
      [
        'Approche respectueuse',
        'Alliance.',
        '- **Respecter** les croyances, ne pas les ridiculiser ; proposer une approche **complémentaire**\n- Expliquer la maladie avec des mots accessibles, impliquer la famille et les personnes de confiance',
      ],
      [
        'Soigner',
        'Ne pas manquer une maladie.',
        '- Traiter la cause médicale ou le trouble mental (antiépileptiques, antipsychotiques, antidépresseurs selon le diagnostic)\n- Soutien psychosocial, interventions communautaires',
      ],
      [
        'Protéger et collaborer',
        'Communauté.',
        '- **Signaler** et protéger les victimes de maltraitance (enfants dits sorciers, personnes enchaînées) : services sociaux, protection de l’enfance\n- **Collaboration** avec tradipraticiens et responsables religieux (orientation, refus des pratiques violentes)\n- Sensibilisation communautaire (épilepsie non contagieuse, maladie mentale soignable)',
      ],
    ],
    molecules: [
      ['phenobarbital', 'premiere', 'Épilepsie méconnue'],
      ['haloperidol', 'premiere', 'Psychose'],
      ['fluoxetine', 'premiere', 'Dépression'],
    ],
    complications: [
      {
        nom: 'Maltraitance et abandon',
        fiche: 'maltraitance-enfant',
        description: 'Enfants accusés de sorcellerie.',
        traitement: '- Protection',
        clinique: '- Coups, brûlures, dénutrition',
        paraclinique: '',
      },
      {
        nom: 'Retard de soins',
        description: 'Maladie traitable non soignée.',
        traitement: '- Diagnostic',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Intoxications par produits traditionnels',
        fiche: 'intoxications-enfant',
        description: 'Plantes, purges.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de l’affection sous-jacente ; meilleure adhésion aux soins quand les croyances sont respectées',
    urgences: [],
    symptomes: [
      ['États de transe ou de possession', 'frequent'],
      ['Plaintes somatiques multiples', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Anxiété', 'frequent'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Entretien culturel, recherche d’une maladie, protection', '- Maltraitance, enchaînement'],
      hgr: ['- Diagnostic psychiatrique et neurologique', ''],
      tert: ['- Psychiatrie transculturelle', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Détresse interprétée comme sorcellerie',
        type: 'commune',
        description: 'Plaintes somatiques et anxiété.',
        terrain: '- Adulte, conflit familial',
        fonctionnels: '- Peur, plaintes somatiques',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Enfant accusé de sorcellerie',
        type: 'gravite',
        description: 'Maltraitance.',
        terrain: '- Orphelin, enfant handicapé ou épileptique',
        fonctionnels: '',
        generaux: '- Dénutrition',
        physiques: '- Traces de violences',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Possession pathologique',
        type: 'etiologique',
        description: 'Trouble dissociatif.',
        terrain: '- Femme jeune, traumatisme',
        fonctionnels: '- Transe involontaire',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles psychiatriques du sujet âgé
  {
    ...DEM,
    slug: 'troubles-psychiatriques-du-sujet-age',
    nom: 'Troubles psychiatriques du sujet âgé',
    resume:
      'Troubles mentaux fréquents et sous-diagnostiqués après 65 ans : dépression (souvent masquée par des plaintes somatiques, une perte d’appétit, un ralentissement ou des troubles cognitifs ; risque suicidaire élevé chez l’homme âgé isolé), anxiété, syndrome confusionnel (urgence : rechercher infection, rétention urinaire, déshydratation, médicaments), démences et leurs troubles du comportement (agitation, idées de vol, hallucinations, déambulation), psychoses tardives (délire de préjudice, surdité, isolement), abus d’alcool et de benzodiazépines ; polymédication et sensibilité accrue aux effets indésirables ; évaluation cognitive, bilan somatique (TSH, B12, glycémie, ionogramme, vision, audition) ; prise en charge : approche non médicamenteuse d’abord, ISRS (sertraline) pour la dépression, antipsychotiques à très faible dose et durée courte, éviter benzodiazépines et anticholinergiques, soutien des aidants, prévention de la maltraitance.',
    definition:
      'Ensemble des troubles mentaux survenant chez la personne âgée, dont la présentation, les causes et le traitement sont modifiés par le vieillissement, les maladies associées et les médicaments.',
    physiopathologie:
      '## Particularités\n- Vieillissement cérébral, maladies vasculaires, **démences**, **déficits sensoriels** (surdité, cataracte), **polymédication**\n- Facteurs sociaux : isolement, deuils, perte d’autonomie, pauvreté, accusations de sorcellerie\n\n## Troubles\n- **Dépression** (présentation somatique, pseudo-démence), **anxiété**\n- **Syndrome confusionnel** (cause somatique ou médicamenteuse)\n- **Symptômes psychologiques et comportementaux des démences**\n- **Psychoses tardives**, **abus** d’alcool et de benzodiazépines',
    diagnostic:
      '## Évaluation\n- **Humeur** (échelle de dépression gériatrique), **idées suicidaires**, anxiété\n- **Cognition** (test rapide), début brutal ou fluctuant (confusion) vs progressif (démence)\n- **Revue des médicaments** (benzodiazépines, anticholinergiques, corticoïdes, antiparkinsoniens)\n- Vision, audition, douleur, constipation, rétention urinaire, nutrition\n- Situation sociale, aidants, **maltraitance**\n\n## Examens\n- **NFS**, **ionogramme**, **glycémie**, **créatinine**, **TSH**, **vitamine B12**, calcémie ; ECBU si confusion\n- Test VIH et sérologie syphilitique selon le contexte ; **scanner** cérébral si début récent, signes focaux ou chute',
    examens: [
      ['premiere_intention', 'ionogramme', 'Hyponatrémie.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie, diabète.'],
      ['premiere_intention', 'tsh', 'Hypothyroïdie.'],
      ['premiere_intention', 'vitamine-b12-folates', 'Carence.'],
      ['premiere_intention', 'nfs', 'Anémie, infection.'],
      ['premiere_intention', 'creatinine', 'Adaptation des doses.'],
      ['etiologique', 'ecbu', 'Infection urinaire (confusion).'],
      ['deuxieme_intention', 'scanner-cerebral', 'Hématome sous-dural, AVC.'],
      ['etiologique', 'calcemie-magnesemie', 'Hypercalcémie.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-confusionnel-aigu', 'Début brutal, fluctuant.'],
      ['maladie-d-alzheimer', 'Déclin cognitif progressif.'],
      ['depression', 'Dépression de l’adulte.'],
      ['hematome-sous-dural', 'Chute, confusion progressive.'],
      ['hypothyroidie-adulte', 'Ralentissement, dépression.'],
      ['hydrocephalie-a-pression-normale', 'Marche, cognition, urines.'],
    ],
    etiologies:
      '## Facteurs\n- Démences, maladies somatiques, médicaments, déficits sensoriels, isolement, deuils',
    principes: [
      [
        'Non médicamenteux',
        'D’abord.',
        '- Correction de la **vision** et de l’**audition**, douleur, constipation, sommeil\n- Activités, lien social, soutien et formation des **aidants**\n- Démence agitée : environnement calme, routines, recherche d’une cause (douleur, infection, rétention)',
      ],
      [
        'Médicaments',
        'Commencer bas, augmenter lentement.',
        '- **Dépression** : **sertraline** 25 puis 50–100 mg/j, mirtazapine ; éviter amitriptyline et paroxétine (anticholinergiques)\n- **Psychose** ou agitation sévère : **rispéridone** 0,25–1 mg/j ou **halopéridol** 0,5–1 mg, durée courte, réévaluation\n- **Éviter** benzodiazépines (chutes, confusion), antihistaminiques sédatifs, anticholinergiques ; sevrage progressif\n- Démence : donépézil en centre spécialisé',
      ],
      [
        'Prévention',
        'Suicide et maltraitance.',
        '- Évaluation du **risque suicidaire** (homme âgé isolé, maladie), sécurisation des médicaments\n- Repérage de la **maltraitance** et de l’abandon (accusations de sorcellerie)',
      ],
    ],
    molecules: [
      ['sertraline', 'premiere', 'Dépression, anxiété'],
      ['mirtazapine', 'alternative', 'Dépression avec insomnie, anorexie'],
      ['risperidone', 'alternative', 'Psychose, agitation (très faible dose)'],
      ['haloperidol', 'alternative', 'Agitation aiguë (faible dose)'],
      ['donepezil', 'alternative', 'Démence (centre spécialisé)'],
      ['melatonine', 'adjuvant', 'Troubles du sommeil'],
    ],
    complications: [
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Homme âgé isolé.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Chutes et fractures',
        fiche: 'fracture-col-du-femur',
        description: 'Psychotropes.',
        traitement: '- Révision des traitements',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Confusion iatrogène',
        fiche: 'syndrome-confusionnel-aigu',
        description: 'Polymédication.',
        traitement: '- Arrêt du médicament',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Maltraitance',
        description: 'Dépendance, accusations.',
        traitement: '- Protection',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépression et anxiété traitables à tout âge ; pronostic des démences lié à l’évolution neurodégénérative',
    urgences: [],
    symptomes: [
      ['Humeur dépressive', 'frequent'],
      ['Troubles de la mémoire', 'frequent'],
      ['Désorientation', 'frequent'],
      ['Agitation', 'frequent'],
      ['Hallucinations', 'occasionnel'],
      ['Troubles du sommeil', 'frequent'],
      ['Plaintes somatiques multiples', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Repérage, révision des médicaments, soutien des aidants',
        '- Confusion brutale, idées suicidaires',
      ],
      hgr: ['- Bilan somatique, prise en charge psychiatrique', ''],
      tert: ['- Gériatrie, neurologie, psychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dépression du sujet âgé',
        type: 'commune',
        description: 'Présentation somatique.',
        terrain: '- Plus de 65 ans, isolement',
        fonctionnels: '- Fatigue, perte d’appétit, plaintes',
        generaux: '- Amaigrissement',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Troubles du comportement de la démence',
        type: 'evolutive',
        description: 'Agitation, délire.',
        terrain: '- Démence',
        fonctionnels: '- Agitation, idées de vol',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Psychose tardive',
        type: 'etiologique',
        description: 'Délire de préjudice.',
        terrain: '- Femme âgée isolée, surdité',
        fonctionnels: '- Idées de persécution',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
