'use strict';

/**
 * Lot 30 (mouvements anormaux, psychiatrie 1) — maladie de Parkinson, dépression, trouble
 * bipolaire, schizophrénie, troubles psychotiques aigus et transitoires. Rédigé par IA (OMS
 * mhGAP, MDS, ouvrages de référence) : à valider.
 */

const MVT = { departement: 'neuropsychiatrie', specialite: 'Mouvements anormaux' };
const PSY = { departement: 'neuropsychiatrie', specialite: 'Psychiatrie' };

module.exports = [
  // =================================================================== Parkinson
  {
    ...MVT,
    slug: 'maladie-de-parkinson',
    nom: 'Maladie de Parkinson',
    resume:
      'Maladie neurodégénérative du sujet de plus de 50 ans : tremblement de repos unilatéral, lenteur (akinésie), rigidité, puis troubles de la marche ; diagnostic clinique ; lévodopa (associée à un inhibiteur de la dopa-décarboxylase) en traitement de référence ; éliminer un parkinsonisme médicamenteux (halopéridol, métoclopramide) ; kinésithérapie, prévention des chutes.',
    definition:
      'Affection neurodégénérative progressive caractérisée par la perte des neurones dopaminergiques de la substance noire, responsable d’un syndrome parkinsonien (akinésie, rigidité, tremblement de repos) dopa-sensible.',
    physiopathologie:
      '## Mécanismes\n- Dégénérescence des neurones dopaminergiques de la voie nigro-striée, corps de Lewy (alpha-synucléine)\n- Signes moteurs quand 60 à 80 % des neurones sont perdus\n- Signes non moteurs : constipation, troubles de l’odorat, dépression, troubles du sommeil, hypotension orthostatique, troubles cognitifs tardifs\n\n## Parkinsonismes secondaires\n- **Médicamenteux** : neuroleptiques (halopéridol, chlorpromazine), métoclopramide, flunarizine\n- Vasculaires, post-encéphalitiques, toxiques, maladie de Wilson (sujet jeune)',
    diagnostic:
      '## Clinique\n- **Akinésie/bradykinésie** obligatoire : lenteur, micrographie, visage figé, voix monotone\n- + **tremblement de repos** (« émiettement de pain ») et/ou **rigidité** en roue dentée\n- Début **asymétrique**, évolution lente\n- Troubles de la marche (petits pas, festination), instabilité posturale tardive\n- Bonne réponse à la lévodopa\n\n## Signes d’alerte (autre diagnostic)\n- Chutes précoces, troubles cognitifs ou dysautonomie précoces, signes pyramidaux ou cérébelleux, absence de réponse à la lévodopa, prise de neuroleptiques\n\n## Examens\n- Aucun examen indispensable ; imagerie si signes atypiques ; TSH, glycémie selon le contexte',
    examens: [
      ['deuxieme_intention', 'irm-cerebrale', 'Formes atypiques (vasculaire, tumeur, hydrocéphalie).'],
      ['etiologique', 'tsh', 'Hypothyroïdie (lenteur).'],
      ['etiologique', 'bilan-hepatique', 'Sujet jeune : maladie de Wilson.'],
    ],
    scores: [],
    differentiels: [
      ['Parkinsonisme médicamenteux', 'Neuroleptiques, métoclopramide ; symétrique ; régressif à l’arrêt.'],
      [
        'Tremblement essentiel',
        'Tremblement d’attitude et d’action, bilatéral, familial, amélioré par l’alcool.',
      ],
      ['Parkinsonisme vasculaire', 'HTA, atteinte prédominant aux membres inférieurs, signes pyramidaux.'],
      ['Hypothyroïdie', 'Lenteur, frilosité, TSH élevée.'],
      ['depression', 'Ralentissement psychomoteur sans tremblement ni rigidité.'],
    ],
    etiologies:
      '## Facteurs\n- Âge (> 60 ans), sexe masculin, formes génétiques chez le sujet jeune, exposition aux pesticides',
    principes: [
      [
        'Traitement dopaminergique',
        'Améliorer la motricité.',
        '- **Lévodopa** associée à la carbidopa ou au bensérazide : 50–100 mg 3 fois/j, augmentation progressive selon la gêne\n- Agonistes dopaminergiques (sujet jeune) si disponibles ; **trihexyphénidyle** pour le tremblement chez le sujet jeune (éviter chez le sujet âgé : confusion)\n- Ne jamais arrêter brutalement la lévodopa (syndrome malin)',
      ],
      [
        'Mesures non médicamenteuses',
        'Préserver l’autonomie.',
        '- **Kinésithérapie**, exercice physique régulier, orthophonie\n- Prévention des chutes, aménagement du domicile',
      ],
      [
        'Signes non moteurs',
        'Améliorer la qualité de vie.',
        '- Constipation (fibres, **lactulose**), hypotension orthostatique, dépression (**sertraline**), troubles du sommeil\n- Hallucinations : réduire les médicaments, éviter halopéridol et métoclopramide (préférer la **dompéridone** pour les nausées)',
      ],
    ],
    molecules: [
      ['levodopa', 'premiere', 'Avec carbidopa ou bensérazide'],
      ['trihexyphenidyle', 'alternative', 'Tremblement, sujet jeune'],
      ['domperidone', 'adjuvant', 'Nausées (pas de métoclopramide)'],
      ['lactulose', 'adjuvant', 'Constipation'],
      ['sertraline', 'adjuvant', 'Dépression associée'],
    ],
    complications: [
      {
        nom: 'Fluctuations motrices et dyskinésies',
        description: 'Après plusieurs années de lévodopa.',
        traitement: '- Fractionner les doses, ajuster',
        clinique: '- Blocages, mouvements involontaires',
        paraclinique: '',
      },
      {
        nom: 'Chutes et fractures',
        fiche: 'fracture-col-du-femur',
        description: 'Instabilité posturale.',
        traitement: '- Kinésithérapie, prévention',
        clinique: '- Chutes',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Troubles cognitifs et hallucinations',
        description: 'Stades avancés, médicaments.',
        traitement: '- Réduction des traitements',
        clinique: '- Confusion, hallucinations visuelles',
        paraclinique: '',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Troubles de la déglutition.',
        traitement: '- Antibiotiques',
        clinique: '- Toux, fièvre',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Évolution lente sur 10 à 20 ans ; handicap progressif ; bonne réponse initiale à la lévodopa',
    urgences: [],
    symptomes: [
      ['Tremblements', 'tres_frequent'],
      ['Lenteur des mouvements', 'tres_frequent'],
      ['Rigidité musculaire', 'tres_frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Humeur dépressive', 'occasionnel'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'MDS — recommandations de pratique clinique',
      "Adams and Victor's Principles of Neurology",
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Reconnaître, arrêter les médicaments en cause, orienter',
        '- Diagnostic initial, signes atypiques',
      ],
      hgr: ['- Lévodopa, kinésithérapie', ''],
      tert: ['- Neurologie, formes compliquées', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme tremblante',
        type: 'commune',
        description: 'Forme classique.',
        terrain: '- Sujet > 60 ans',
        fonctionnels: '- Tremblement de repos unilatéral',
        generaux: '',
        physiques: '- Akinésie, rigidité en roue dentée',
        paraclinique: '- Aucun examen nécessaire',
        etiologies: '- Dégénérative',
        syndromes: [],
      },
      {
        nom: 'Parkinsonisme médicamenteux',
        type: 'etiologique',
        description: 'Neuroleptiques.',
        terrain: '- Patient sous halopéridol, chlorpromazine, métoclopramide',
        fonctionnels: '- Lenteur, raideur',
        generaux: '',
        physiques: '- Syndrome symétrique',
        paraclinique: '',
        etiologies: '- Antidopaminergiques',
        syndromes: [],
      },
      {
        nom: 'Forme évoluée',
        type: 'evolutive',
        description: 'Complications motrices et cognitives.',
        terrain: '',
        fonctionnels: '- Chutes, blocages',
        generaux: '- Amaigrissement',
        physiques: '- Instabilité posturale',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dépression
  {
    ...PSY,
    slug: 'depression',
    nom: 'Dépression',
    resume:
      'Trouble mental fréquent et sous-diagnostiqué (plaintes somatiques, fatigue, troubles du sommeil) : humeur triste et perte d’intérêt depuis au moins 2 semaines ; évaluer systématiquement le risque suicidaire ; interventions psychosociales (psychoéducation, activation, thérapie interpersonnelle, soutien), antidépresseur (fluoxétine, sertraline, amitriptyline) pour les formes modérées à sévères, au moins 9 à 12 mois.',
    definition:
      'Épisode dépressif caractérisé : humeur dépressive et/ou perte d’intérêt ou de plaisir presque tous les jours pendant au moins 2 semaines, avec d’autres symptômes et un retentissement sur le fonctionnement.',
    physiopathologie:
      '## Facteurs\n- Biologiques (monoamines, génétique), psychologiques, sociaux (pauvreté, deuils, conflits armés, violences, chômage)\n- Maladies chroniques : VIH, diabète, AVC, épilepsie, cancer, douleurs chroniques\n- Post-partum, ménopause\n- Médicaments (efavirenz, corticoïdes), alcool et drogues',
    diagnostic:
      '## Symptômes (mhGAP)\n- **Humeur dépressive** persistante et/ou **perte d’intérêt ou de plaisir**\n- Fatigue, troubles du sommeil, de l’appétit, de la concentration, sentiment de culpabilité ou d’inutilité, ralentissement ou agitation, **idées de mort ou de suicide**\n- Plaintes somatiques fréquentes (douleurs diffuses, céphalées, « chaleur dans la tête »)\n- Retentissement sur la vie quotidienne\n\n## Évaluation\n- **Risque suicidaire** à chaque consultation\n- Rechercher un épisode maniaque antérieur (trouble bipolaire), des symptômes psychotiques, l’usage d’alcool\n- Rechercher une cause organique : hypothyroïdie, anémie, VIH, médicaments\n- Échelle PHQ-9',
    examens: [
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'nfs', 'Anémie.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'glycemie', 'Diabète.'],
    ],
    scores: [],
    differentiels: [
      ['trouble-bipolaire', 'Antécédent d’épisode maniaque.'],
      ['Deuil normal', 'Réaction proportionnée, régression progressive.'],
      ['Hypothyroïdie', 'TSH élevée.'],
      ['Trouble de l’usage de l’alcool', 'Consommation excessive d’alcool.'],
      ['etat-de-stress-post-traumatique', 'Reviviscences, évitement après un traumatisme.'],
      ['maladie-de-parkinson', 'Tremblement, rigidité.'],
    ],
    etiologies:
      '## Terrain à risque\n- Femmes, post-partum, maladies chroniques (VIH, diabète), survivants de violences et de conflits, pauvreté, isolement',
    principes: [
      [
        'Interventions psychosociales',
        'Pour tous.',
        '- **Psychoéducation** (maladie fréquente et traitable), réduction du stress, **activation comportementale**, renforcement du soutien social\n- Thérapie interpersonnelle ou cognitivo-comportementale (y compris par des agents formés)\n- Traiter les problèmes sociaux, les maladies associées',
      ],
      [
        'Antidépresseurs',
        'Dépression modérée à sévère.',
        '- **Fluoxétine** 20 mg/j (jusqu’à 40–60 mg) ou **sertraline** 50 mg/j ; **amitriptyline** 25 mg le soir puis 75–150 mg/j (prudence : toxicité en surdosage)\n- Effet en 4 à 6 semaines ; poursuivre **9 à 12 mois** après la rémission ; arrêt progressif\n- Grossesse et allaitement : sertraline ; adolescents : fluoxétine, avec prudence ; pas d’antidépresseur chez l’enfant < 12 ans',
      ],
      [
        'Suivi',
        'Prévenir le suicide et la rechute.',
        '- Revoir à 1–2 semaines puis régulièrement ; évaluer le risque suicidaire ; limiter les quantités de médicaments remises\n- Orientation spécialisée si symptômes psychotiques, échec, risque suicidaire élevé',
      ],
    ],
    molecules: [
      ['fluoxetine', 'premiere', 'ISRS'],
      ['sertraline', 'premiere', 'ISRS (grossesse, allaitement)'],
      ['amitriptyline', 'alternative', 'Antidépresseur tricyclique'],
      ['paroxetine', 'alternative', 'ISRS'],
    ],
    complications: [
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Risque majeur.',
        traitement: '- Évaluation, protection, traitement',
        clinique: '- Idées suicidaires',
        paraclinique: '',
      },
      {
        nom: 'Chronicité et rechutes',
        description: 'Arrêt précoce du traitement.',
        traitement: '- Traitement prolongé',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Usage d’alcool et de substances',
        description: 'Automédication.',
        traitement: '- Prise en charge conjointe',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon avec un traitement adapté ; récidive fréquente (50 % après un épisode)',
    urgences: [],
    symptomes: [
      ['Humeur dépressive', 'tres_frequent'],
      ['Troubles du sommeil', 'tres_frequent'],
      ['Asthénie', 'tres_frequent'],
      ['Anorexie', 'frequent'],
      ['Idées suicidaires', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Anxiété', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'WHO Model List of Essential Medicines',
    ],
    niveaux: {
      cs: [
        '- Dépistage, psychoéducation, fluoxétine, suivi',
        '- Risque suicidaire élevé, symptômes psychotiques, échec',
      ],
      hgr: ['- Psychiatre ou médecin formé, psychothérapie', ''],
      tert: ['- Psychiatrie, formes résistantes', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Épisode dépressif modéré',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Adulte, femme',
        fonctionnels: '- Tristesse, perte d’intérêt, fatigue, insomnie',
        generaux: '- Perte d’appétit',
        physiques: '- Ralentissement',
        paraclinique: '- Bilan normal',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dépression sévère avec idées suicidaires ou symptômes psychotiques',
        type: 'gravite',
        description: 'Urgence psychiatrique.',
        terrain: '',
        fonctionnels: '- Idées suicidaires, idées délirantes de culpabilité',
        generaux: '- Refus alimentaire',
        physiques: '- Prostration',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dépression à expression somatique',
        type: 'etiologique',
        description: 'Plaintes physiques au premier plan.',
        terrain: '',
        fonctionnels: '- Douleurs diffuses, céphalées, fatigue',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Trouble bipolaire
  {
    ...PSY,
    slug: 'trouble-bipolaire',
    nom: 'Trouble bipolaire',
    resume:
      'Alternance d’épisodes maniaques (euphorie ou irritabilité, réduction du besoin de sommeil, logorrhée, dépenses, conduites à risque) et dépressifs : épisode maniaque = antipsychotique (halopéridol, olanzapine, rispéridone) ± benzodiazépine ; prévention par le lithium (si surveillance possible) ou le valproate (pas chez la femme en âge de procréer) ; pas d’antidépresseur seul.',
    definition:
      'Trouble de l’humeur caractérisé par la survenue d’au moins un épisode maniaque (ou hypomaniaque), le plus souvent alternant avec des épisodes dépressifs, séparés par des intervalles de rémission.',
    physiopathologie:
      '## Facteurs\n- Forte composante génétique, début chez l’adulte jeune\n- Déclencheurs : manque de sommeil, stress, cannabis et autres drogues, post-partum, antidépresseurs, corticoïdes',
    diagnostic:
      '## Épisode maniaque (≥ 1 semaine)\n- Humeur **euphorique ou irritable**, **réduction du besoin de sommeil**, hyperactivité, **logorrhée**, fuite des idées, idées de grandeur, dépenses excessives, désinhibition sexuelle, conduites à risque\n- Symptômes psychotiques possibles (idées délirantes de grandeur)\n\n## Épisode dépressif\n- Voir dépression ; rechercher systématiquement les antécédents maniaques avant tout antidépresseur\n\n## Évaluation\n- Éliminer une cause organique ou toxique (cannabis, alcool, corticoïdes, hyperthyroïdie, VIH, THA, neurosyphilis)\n- Bilan avant lithium : créatinine, TSH, β-hCG',
    examens: [
      ['etiologique', 'tsh', 'Hyperthyroïdie, avant lithium.'],
      ['premiere_intention', 'creatinine', 'Avant lithium.'],
      ['premiere_intention', 'lithemie', 'Surveillance du lithium.'],
      ['etiologique', 'tdr-vih', 'Cause organique.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
      ['premiere_intention', 'beta-hcg', 'Avant valproate ou lithium.'],
      ['etiologique', 'depistage-tha', 'Zone d’endémie.'],
    ],
    scores: [],
    differentiels: [
      ['schizophrenie', 'Symptômes psychotiques chroniques sans épisodes thymiques francs.'],
      ['troubles-psychotiques-aigus', 'Épisode bref, polymorphe.'],
      ['depression', 'Pas d’épisode maniaque.'],
      ['Intoxication au cannabis ou aux stimulants', 'Contexte de consommation.'],
      ['Hyperthyroïdie', 'TSH basse, tremblement, amaigrissement.'],
      ['tha-phase-neurologique', 'Zone d’endémie, troubles du sommeil.'],
    ],
    etiologies: '## Terrain\n- Adulte jeune, antécédents familiaux, consommation de cannabis, post-partum',
    principes: [
      [
        'Épisode maniaque',
        'Calmer et protéger.',
        '- **Halopéridol** 5–10 mg/j, **olanzapine** 10–20 mg/j ou **rispéridone** 2–6 mg/j\n- **Diazépam** à court terme pour l’agitation et l’insomnie\n- Arrêter les antidépresseurs ; hospitalisation si danger\n- Associer le thymorégulateur dès que possible',
      ],
      [
        'Prévention des rechutes',
        'Stabiliser l’humeur.',
        '- **Lithium** (lithémie 0,6–1,0 mmol/L) si la surveillance biologique est possible\n- **Valproate** 500 mg/j au début puis 1 000–2 000 mg/j (**pas chez la femme en âge de procréer**), carbamazépine\n- Ou poursuite de l’antipsychotique efficace\n- Durée prolongée (souvent à vie)',
      ],
      [
        'Épisode dépressif bipolaire',
        'Éviter le virage.',
        '- Thymorégulateur ± antidépresseur (ISRS) seulement en association, jamais seul',
      ],
      [
        'Psychoéducation',
        'Prévenir.',
        '- Repérage des signes précoces, régularité du sommeil, arrêt du cannabis et de l’alcool, observance, implication de la famille',
      ],
    ],
    molecules: [
      ['haloperidol', 'premiere', 'Épisode maniaque'],
      ['olanzapine', 'premiere', 'Épisode maniaque, prévention'],
      ['risperidone', 'alternative', 'Épisode maniaque'],
      ['lithium', 'premiere', 'Prévention des rechutes'],
      [
        'valproate-de-sodium-acide-valproique',
        'alternative',
        'Prévention (pas chez la femme en âge de procréer)',
      ],
      ['carbamazepine', 'alternative', 'Prévention'],
      ['diazepam', 'adjuvant', 'Agitation, insomnie'],
    ],
    complications: [
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Risque élevé (phases dépressives et mixtes).',
        traitement: '- Protection, lithium',
        clinique: '- Idées suicidaires',
        paraclinique: '',
      },
      {
        nom: 'Intoxication au lithium',
        description: 'Déshydratation, interactions.',
        traitement: '- Arrêt, hydratation, dialyse',
        clinique: '- Tremblements, diarrhée, confusion',
        paraclinique: '- Lithémie',
      },
      {
        nom: 'Conséquences sociales',
        description: 'Dépenses, conflits, conduites à risque.',
        traitement: '- Soutien, protection juridique',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Maladie chronique à rechutes ; bon contrôle avec un traitement régulier',
    urgences: [],
    symptomes: [
      ['Agitation', 'tres_frequent'],
      ['Troubles du sommeil', 'tres_frequent'],
      ['Troubles du comportement', 'tres_frequent'],
      ['Idées délirantes', 'frequent'],
      ['Humeur dépressive', 'frequent'],
      ['Idées suicidaires', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'WHO Model List of Essential Medicines',
    ],
    niveaux: {
      cs: ['- Reconnaître, halopéridol, diazépam, orientation', '- Agitation dangereuse, premier épisode'],
      hgr: ['- Hospitalisation, thymorégulateur', ''],
      tert: ['- Psychiatrie, lithium avec surveillance', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Épisode maniaque',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Euphorie ou irritabilité, insomnie sans fatigue, logorrhée',
        generaux: '',
        physiques: '- Agitation, désinhibition',
        paraclinique: '- Bilan normal',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Manie avec symptômes psychotiques',
        type: 'gravite',
        description: 'Délire de grandeur, agressivité.',
        terrain: '',
        fonctionnels: '- Idées délirantes, hallucinations',
        generaux: '- Épuisement, déshydratation',
        physiques: '- Agitation extrême',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Épisode dépressif bipolaire',
        type: 'evolutive',
        description: 'Phase dépressive.',
        terrain: '',
        fonctionnels: '- Tristesse, ralentissement',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Schizophrénie
  {
    ...PSY,
    slug: 'schizophrenie',
    nom: 'Schizophrénie',
    resume:
      'Psychose chronique de l’adulte jeune : idées délirantes, hallucinations (voix), désorganisation, retrait social ; rechercher une cause organique ou toxique ; antipsychotique à dose minimale efficace (halopéridol, rispéridone, olanzapine), forme retard (fluphénazine décanoate) si mauvaise observance, psychoéducation familiale, réhabilitation ; lutter contre la stigmatisation et les entraves.',
    definition:
      'Trouble psychotique chronique caractérisé par des symptômes positifs (délire, hallucinations), négatifs (apathie, retrait) et une désorganisation, persistant plus de 1 mois (avec retentissement durable sur le fonctionnement).',
    physiopathologie:
      '## Facteurs\n- Vulnérabilité génétique et neurodéveloppementale\n- Hyperactivité dopaminergique mésolimbique (symptômes positifs)\n- Facteurs déclenchants : **cannabis**, stress, migration, traumatismes',
    diagnostic:
      '## Clinique\n- **Symptômes positifs** : idées délirantes (persécution, ensorcellement, influence), **hallucinations** auditives (voix qui commentent), comportement bizarre\n- **Désorganisation** : discours incohérent, comportement inadapté\n- **Symptômes négatifs** : apathie, retrait social, pauvreté du discours, émoussement affectif\n- Début entre 15 et 30 ans, durée > 1 mois (diagnostic définitif après 6 mois selon le DSM)\n\n## Éliminer une cause organique ou toxique\n- Cannabis, alcool, drogues, médicaments (corticoïdes, efavirenz)\n- Épilepsie, VIH, **THA**, neurosyphilis, paludisme, hypo/hyperthyroïdie, tumeurs\n- Glycémie, NFS, TDR paludisme, test VIH, sérologie syphilis, dépistage THA en zone d’endémie',
    examens: [
      ['etiologique', 'tdr-vih', 'Cause organique.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
      ['etiologique', 'depistage-tha', 'Zone d’endémie.'],
      ['premiere_intention', 'glycemie', 'Avant antipsychotique (olanzapine).'],
      ['etiologique', 'tsh', 'Thyroïde.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Signes neurologiques, début tardif.'],
    ],
    scores: [],
    differentiels: [
      ['troubles-psychotiques-aigus', 'Début brutal, durée < 1–3 mois.'],
      ['trouble-bipolaire', 'Épisodes maniaques ou dépressifs francs.'],
      ['Psychose induite par le cannabis ou l’alcool', 'Contexte de consommation, amélioration à l’arrêt.'],
      ['tha-phase-neurologique', 'Zone d’endémie, troubles du sommeil.'],
      ['epilepsie', 'Psychoses de l’épileptique.'],
      ['Démence liée au VIH', 'VIH avancé, troubles cognitifs.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Antécédents familiaux, cannabis, complications obstétricales, urbanisation, migration',
    principes: [
      [
        'Antipsychotiques',
        'Contrôler les symptômes.',
        '- **Halopéridol** 2–10 mg/j, **rispéridone** 2–6 mg/j, **olanzapine** 10–20 mg/j ou **chlorpromazine** 100–600 mg/j : commencer bas, augmenter progressivement\n- Effets extrapyramidaux : **trihexyphénidyle** 2–4 mg/j si besoin (pas systématique)\n- Forme retard (**fluphénazine décanoate**) si mauvaise observance\n- Durée : au moins 12 mois après un premier épisode, souvent prolongée',
      ],
      [
        'Interventions psychosociales',
        'Rétablissement.',
        '- Psychoéducation du patient et de la famille, signes de rechute, observance\n- Réhabilitation, travail, réseaux de soutien ; arrêt du cannabis\n- **Respect des droits** : ni chaînes ni enfermement ; collaboration avec les tradipraticiens et les églises sans abandon du traitement',
      ],
      [
        'Surveillance',
        'Prévenir les effets indésirables.',
        '- Poids, glycémie, lipides (olanzapine, rispéridone), mouvements anormaux, syndrome malin',
      ],
    ],
    molecules: [
      ['haloperidol', 'premiere', 'Antipsychotique'],
      ['risperidone', 'premiere', 'Antipsychotique'],
      ['olanzapine', 'alternative', 'Antipsychotique'],
      ['chlorpromazine', 'alternative', 'Antipsychotique sédatif'],
      ['fluphenazine', 'premiere', 'Forme retard'],
      ['trihexyphenidyle', 'adjuvant', 'Effets extrapyramidaux'],
      ['diazepam', 'adjuvant', 'Agitation à court terme'],
    ],
    complications: [
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Risque élevé.',
        traitement: '- Évaluation régulière',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Syndrome malin des neuroleptiques',
        fiche: 'syndrome-malin-des-neuroleptiques',
        description: 'Rare et grave.',
        traitement: '- Arrêt, réanimation',
        clinique: '- Fièvre, rigidité, confusion',
        paraclinique: '- CPK',
      },
      {
        nom: 'Rechutes',
        description: 'Arrêt du traitement, cannabis.',
        traitement: '- Observance, forme retard',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Exclusion sociale et violations des droits',
        description: 'Stigmatisation, entraves.',
        traitement: '- Soutien, plaidoyer',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Variable : rémission chez un tiers, évolution par rechutes ou chronique chez les autres ; meilleur avec un traitement précoce et continu',
    urgences: [],
    symptomes: [
      ['Hallucinations', 'tres_frequent'],
      ['Idées délirantes', 'tres_frequent'],
      ['Troubles du comportement', 'tres_frequent'],
      ['Agitation', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'WHO Model List of Essential Medicines',
    ],
    niveaux: {
      cs: [
        '- Reconnaître, antipsychotique, suivi, psychoéducation',
        '- Premier épisode, agitation dangereuse',
      ],
      hgr: ['- Hospitalisation, bilan organique', ''],
      tert: ['- Psychiatrie, formes résistantes', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Schizophrénie paranoïde',
        type: 'commune',
        description: 'Délire et hallucinations.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Voix, idées de persécution',
        generaux: '',
        physiques: '- Comportement bizarre',
        paraclinique: '- Bilan organique normal',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme déficitaire',
        type: 'evolutive',
        description: 'Symptômes négatifs.',
        terrain: '',
        fonctionnels: '- Retrait, apathie',
        generaux: '- Incurie',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Psychose avec consommation de cannabis',
        type: 'etiologique',
        description: 'Facteur déclenchant.',
        terrain: '- Jeune consommateur',
        fonctionnels: '- Délire, hallucinations',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Cannabis',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Psychoses aiguës
  {
    ...PSY,
    slug: 'troubles-psychotiques-aigus',
    nom: 'Troubles psychotiques aigus et transitoires',
    resume:
      'Psychose d’apparition brutale (moins de 2 semaines), souvent après un stress, avec délire et hallucinations polymorphes et changeants : rechercher d’abord une cause organique (paludisme, méningite, VIH, THA, hypoglycémie, sevrage alcoolique, intoxication, post-partum) ; antipsychotique à faible dose sur une courte durée, protection, soutien ; guérison habituelle en quelques semaines.',
    definition:
      'Épisode psychotique d’installation aiguë (< 2 semaines), de durée limitée (en général < 1 à 3 mois), avec rémission complète, souvent déclenché par un stress aigu.',
    physiopathologie:
      '## Facteurs\n- Stress aigu (deuil, conflit, violence, migration, examens), privation de sommeil\n- Plus fréquent en Afrique (« bouffée délirante aiguë »), chez la femme\n- Peut inaugurer une schizophrénie ou un trouble bipolaire',
    diagnostic:
      '## Clinique\n- Début **brutal** chez une personne auparavant bien adaptée\n- **Idées délirantes** et **hallucinations** variées et changeantes (thèmes mystiques, de persécution, d’ensorcellement), perplexité, angoisse\n- Troubles du comportement, agitation, insomnie\n\n## Priorité : éliminer une cause organique\n- **Confusion** (désorientation, troubles de la vigilance) = délirium → cause médicale\n- Fièvre (paludisme, méningite, encéphalite), VIH, THA, hypoglycémie, sevrage alcoolique, intoxications (cannabis, stimulants), post-partum, épilepsie\n- Glycémie, TDR paludisme, test VIH, NFS ; ponction lombaire si fièvre ou signes neurologiques',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'nfs', 'Infection.'],
      ['deuxieme_intention', 'lcr', 'Fièvre, signes neurologiques.'],
      ['etiologique', 'depistage-tha', 'Zone d’endémie.'],
      ['etiologique', 'beta-hcg', 'Grossesse, post-partum.'],
    ],
    scores: [],
    differentiels: [
      ['Syndrome confusionnel (délirium)', 'Désorientation, fluctuation de la vigilance : cause organique.'],
      ['schizophrenie', 'Évolution prolongée, symptômes négatifs.'],
      ['trouble-bipolaire', 'Euphorie, épisode maniaque.'],
      ['psychose-puerperale', 'Post-partum.'],
      ['neuropaludisme-adulte', 'Fièvre, TDR positif.'],
      ['Sevrage alcoolique (delirium tremens)', 'Sevrage, tremblements, sueurs, confusion.'],
    ],
    etiologies: '## Déclencheurs\n- Stress aigu, traumatismes, privation de sommeil, cannabis',
    principes: [
      [
        'Mesures immédiates',
        'Protéger.',
        '- Environnement calme, présence d’un proche, communication rassurante\n- Agitation : **halopéridol** 5 mg IM ± **diazépam** ou **prométhazine**',
      ],
      [
        'Traitement',
        'Guérir sans prolonger.',
        '- Antipsychotique à faible dose (**halopéridol** 2–5 mg/j, **rispéridone** 1–4 mg/j) pendant quelques semaines, puis arrêt progressif 1 à 3 mois après la rémission\n- Traitement de l’insomnie à court terme\n- Soutien psychologique, gestion du facteur de stress',
      ],
      [
        'Suivi',
        'Dépister une évolution chronique.',
        '- Suivi pendant au moins 1 an ; réévaluer si persistance ou rechute (schizophrénie, trouble bipolaire)',
      ],
    ],
    molecules: [
      ['haloperidol', 'premiere', 'Antipsychotique'],
      ['risperidone', 'alternative', 'Antipsychotique'],
      ['diazepam', 'adjuvant', 'Agitation, angoisse'],
      ['promethazine', 'adjuvant', 'Agitation, insomnie'],
    ],
    complications: [
      {
        nom: 'Passage à la chronicité',
        fiche: 'schizophrenie',
        description: 'Évolution vers une schizophrénie.',
        traitement: '- Traitement prolongé',
        clinique: '- Persistance des symptômes',
        paraclinique: '',
      },
      {
        nom: 'Passage à l’acte',
        fiche: 'risque-suicidaire',
        description: 'Délire, angoisse.',
        traitement: '- Protection, hospitalisation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Rémission complète en quelques semaines chez la majorité ; récidive possible',
    urgences: [],
    symptomes: [
      ['Idées délirantes', 'tres_frequent'],
      ['Hallucinations', 'tres_frequent'],
      ['Agitation', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Anxiété', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Éliminer une cause organique (glycémie, TDR paludisme), halopéridol, orientation',
        '- Confusion, fièvre, agitation dangereuse',
      ],
      hgr: ['- Bilan organique, hospitalisation', ''],
      tert: ['- Psychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Bouffée délirante aiguë',
        type: 'commune',
        description: 'Délire polymorphe brutal.',
        terrain: '- Adulte jeune, stress récent',
        fonctionnels: '- Délire, hallucinations, angoisse',
        generaux: '',
        physiques: '- Agitation, perplexité',
        paraclinique: '- Bilan normal',
        etiologies: '- Stress aigu',
        syndromes: [],
      },
      {
        nom: 'Psychose d’origine organique',
        type: 'etiologique',
        description: 'Cause médicale ou toxique.',
        terrain: '',
        fonctionnels: '- Délire, désorientation',
        generaux: '- Fièvre',
        physiques: '- Signes neurologiques',
        paraclinique: '- TDR, LCR, glycémie anormaux',
        etiologies: '- Paludisme, VIH, THA, toxiques',
        syndromes: ['syndrome-confusionnel'],
      },
    ],
  },
];
