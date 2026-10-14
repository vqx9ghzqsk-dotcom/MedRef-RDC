'use strict';

/**
 * Lot 75 (phase 2, démences et neuropsychiatrie) — démences vasculaires, troubles neurocognitifs
 * associés au VIH, troubles cognitifs légers, démence à corps de Lewy, démence fronto-temporale,
 * catatonie. Rédigé par IA (mhGAP, OMS, Harrison) : à valider.
 */

const DEM = { departement: 'neuropsychiatrie', specialite: 'Démences et neurogériatrie' };
const NIN = { departement: 'neuropsychiatrie', specialite: 'Neuro-infectiologie' };
const URG = { departement: 'neuropsychiatrie', specialite: 'Urgences neuropsychiatriques' };

module.exports = [
  // =================================================================== Démences vasculaires
  {
    ...DEM,
    slug: 'demences-vasculaires',
    nom: 'Démences vasculaires',
    resume:
      'Deuxième cause de démence, particulièrement fréquente en Afrique en raison de l’HTA mal contrôlée, du diabète et des AVC : déclin cognitif lié à des lésions vasculaires cérébrales (infarctus multiples, lacunes, lésions de la substance blanche, hémorragies), d’installation brutale ou en marches d’escalier après des AVC, ou progressive (forme sous-corticale) ; prédominance du ralentissement, des troubles de l’attention et des fonctions exécutives, de l’apathie, de la dépression, des troubles de la marche à petits pas et des troubles urinaires, avec signes neurologiques focaux ; imagerie cérébrale ; éliminer les causes curables (B12, thyroïde, syphilis, VIH, hématome sous-dural, hydrocéphalie) ; traitement : contrôle strict des facteurs de risque vasculaire (tension, diabète, statine, antiagrégant si AVC ischémique, arrêt du tabac), rééducation, traitement de la dépression, soutien des aidants.',
    definition:
      'Démence attribuée à des lésions cérébrovasculaires (infarctus, lésions de la substance blanche, hémorragies), avec un lien temporel ou topographique entre les lésions et le déclin cognitif.',
    physiopathologie:
      '## Mécanismes\n- **Infarctus multiples** corticaux (embolies, athérome), **infarctus stratégiques** (thalamus), **lacunes** et **leucoaraïose** (maladie des petites artères liée à l’HTA), hémorragies\n- Coexistence fréquente avec la maladie d’Alzheimer (démence mixte)\n\n## Facteurs de risque\n- **HTA**, **diabète**, dyslipidémie, tabac, fibrillation atriale, drépanocytose, VIH',
    diagnostic:
      '## Clinique\n- Début **brutal** après un AVC ou évolution **en marches d’escalier** ; forme sous-corticale progressive\n- **Ralentissement**, troubles de l’**attention** et des **fonctions exécutives**, mémoire relativement préservée au début\n- **Apathie**, **dépression**, labilité émotionnelle\n- **Signes focaux**, syndrome pseudo-bulbaire, **marche à petits pas**, **troubles urinaires**\n\n## Examens\n- **Évaluation cognitive**, **scanner** ou **IRM** cérébrale (infarctus, leucoaraïose)\n- Bilan des facteurs de risque (glycémie, lipides, ECG) et des causes curables (**B12**, **TSH**, **syphilis**, **VIH**, ionogramme, calcémie)',
    examens: [
      ['premiere_intention', 'evaluation-cognitive', 'Profil exécutif.'],
      ['confirmation', 'scanner-cerebral', 'Infarctus, lacunes.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Lésions de la substance blanche.'],
      ['etiologique', 'vitamine-b12-folates', 'Carence.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'bilan-lipidique', 'Dyslipidémie.'],
      ['premiere_intention', 'ecg', 'Fibrillation atriale.'],
    ],
    scores: [],
    differentiels: [
      ['maladie-d-alzheimer', 'Troubles de la mémoire au premier plan.'],
      ['hydrocephalie-a-pression-normale', 'Triade marche, cognition, urines.'],
      ['depression', 'Pseudo-démence dépressive.'],
      ['hematome-sous-dural', 'Chute, aggravation progressive.'],
      ['neurosyphilis', 'Démence infectieuse.'],
    ],
    etiologies: '## Causes\n- AVC multiples, maladie des petites artères (HTA, diabète), hémorragies',
    principes: [
      [
        'Prévention vasculaire',
        'Ralentir l’évolution.',
        '- Contrôle de la **tension** (< 130/80 si toléré), du **diabète**, **statine**, **antiagrégant** si AVC ischémique, anticoagulation si fibrillation atriale\n- Arrêt du tabac, activité physique, alimentation équilibrée',
      ],
      [
        'Symptômes',
        'Adapter.',
        '- **Dépression** et apathie : sertraline ; inhibiteurs de la cholinestérase et mémantine : bénéfice modeste (démence mixte)\n- Rééducation (marche, déglutition), prévention des chutes, prise en charge urinaire',
      ],
      [
        'Accompagnement',
        'Aidants.',
        '- Information, soutien et répit des **aidants**, aménagement du domicile, mesures de protection\n- Prévention de la maltraitance et de l’abandon',
      ],
    ],
    molecules: [
      ['acide-acetylsalicylique', 'premiere', 'Prévention secondaire des AVC'],
      ['atorvastatine', 'premiere', 'Prévention vasculaire'],
      ['amlodipine', 'premiere', 'HTA'],
      ['enalapril', 'alternative', 'HTA'],
      ['sertraline', 'alternative', 'Dépression, apathie'],
      ['donepezil', 'alternative', 'Démence mixte'],
      ['memantine', 'alternative', 'Démence mixte'],
    ],
    complications: [
      {
        nom: 'Récidive d’AVC',
        fiche: 'prevention-secondaire-des-avc',
        description: 'Facteurs mal contrôlés.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Chutes et fractures',
        fiche: 'fracture-col-du-femur',
        description: 'Troubles de la marche.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Troubles de la déglutition.',
        traitement: '- Antibiotiques',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépendance et escarres',
        fiche: 'escarres',
        description: 'Stade avancé.',
        traitement: '- Soins',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Évolution par paliers ; ralentie par le contrôle des facteurs de risque vasculaire',
    urgences: [],
    symptomes: [
      ['Troubles de la mémoire', 'frequent'],
      ['Apathie', 'frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Humeur dépressive', 'frequent'],
      ['Incontinence urinaire', 'occasionnel'],
      ['Déficit moteur', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'AHA — recommandations de pratique clinique',
      'mhGAP Intervention Guide 2.0',
    ],
    niveaux: {
      cs: ['- Contrôle tensionnel et glycémique, soutien des aidants', ''],
      hgr: ['- Scanner, bilan, rééducation', ''],
      tert: ['- IRM, neurologie, gériatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Démence post-AVC',
        type: 'commune',
        description: 'Après un ou plusieurs AVC.',
        terrain: '- HTA, AVC',
        fonctionnels: '- Déclin brutal',
        generaux: '',
        physiques: '- Déficit focal',
        paraclinique: '- Infarctus',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Démence sous-corticale',
        type: 'evolutive',
        description: 'Maladie des petites artères.',
        terrain: '- HTA ancienne',
        fonctionnels: '- Lenteur, apathie, marche à petits pas',
        generaux: '',
        physiques: '',
        paraclinique: '- Leucoaraïose, lacunes',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles neurocognitifs associés au VIH
  {
    ...NIN,
    slug: 'troubles-neurocognitifs-associes-au-vih',
    nom: 'Troubles neurocognitifs associés au VIH',
    resume:
      'Atteinte cognitive liée à l’infection à VIH du système nerveux central, du trouble léger asymptomatique à la démence associée au VIH (devenue rare sous TARV efficace mais encore observée chez les patients diagnostiqués tardivement ou en échec) : ralentissement psychomoteur, troubles de l’attention, de la mémoire et des fonctions exécutives, apathie, troubles de la marche, tremblements ; retentissement sur l’observance et l’autonomie ; diagnostic d’élimination après exclusion des infections opportunistes (toxoplasmose, cryptococcose, LEMP, tuberculose, neurosyphilis), de la dépression, des carences (B12), de l’alcool et des effets médicamenteux (efavirenz) ; examens : CD4, charge virale, imagerie, ponction lombaire ; traitement : TARV efficace (à débuter ou optimiser), soutien de l’observance (piluliers, aidant), rééducation cognitive, traitement de la dépression.',
    definition:
      'Troubles cognitifs, moteurs et comportementaux attribuables à l’atteinte du système nerveux central par le VIH, classés en déficit asymptomatique, trouble léger et démence associée au VIH.',
    physiopathologie:
      '## Mécanismes\n- Pénétration précoce du VIH dans le SNC (macrophages, microglie) → **inflammation chronique**, neurotoxicité, atteinte des circuits fronto-sous-corticaux\n- Facteurs : **CD4 bas** (nadir), charge virale élevée, âge, comorbidités vasculaires, coinfection VHC, alcool\n- Échappement viral dans le LCR malgré une charge plasmatique indétectable (rare)',
    diagnostic:
      '## Clinique\n- **Ralentissement** psychomoteur, troubles de l’**attention**, de la **mémoire**, difficultés à suivre une conversation ou un traitement\n- **Apathie**, retrait, irritabilité, dépression associée\n- **Troubles moteurs** : maladresse, marche instable, tremblements\n\n## Démarche\n- Dépistage simple (échelle internationale de démence VIH, évaluation cognitive)\n- **CD4**, **charge virale** ; **scanner** ou IRM (atrophie, lésions de la substance blanche) ; **ponction lombaire** (CrAg, VDRL, BK, charge virale du LCR)\n- Éliminer : infections opportunistes, **dépression**, **B12**, TSH, alcool, efavirenz',
    examens: [
      ['premiere_intention', 'cd4', 'Immunodépression.'],
      ['premiere_intention', 'charge-virale-vih', 'Contrôle virologique.'],
      ['premiere_intention', 'evaluation-cognitive', 'Dépistage.'],
      ['etiologique', 'scanner-cerebral', 'Atrophie, infection opportuniste.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Substance blanche, LEMP.'],
      ['etiologique', 'lcr', 'Infection opportuniste.'],
      ['etiologique', 'vitamine-b12-folates', 'Carence.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
    ],
    scores: ['stades-oms-vih'],
    differentiels: [
      ['leucoencephalopathie-multifocale-progressive', 'Déficits focaux progressifs.'],
      ['toxoplasmose-cerebrale', 'Lésions focales, fièvre.'],
      ['meningite-a-cryptocoque', 'Céphalées, HTIC.'],
      ['neurosyphilis', 'Démence infectieuse.'],
      ['troubles-psychiatriques-associes-au-vih', 'Dépression.'],
    ],
    etiologies: '## Cause\n- Infection du SNC par le VIH, immunodépression avancée',
    principes: [
      [
        'TARV',
        'Traitement principal.',
        '- Débuter ou **optimiser** le TARV (dolutégravir + ténofovir + lamivudine), contrôler la charge virale\n- Remplacer l’**efavirenz** en cas d’effets neuropsychiatriques\n- Traiter les infections opportunistes et les comorbidités vasculaires',
      ],
      [
        'Soutien',
        'Observance et autonomie.',
        '- Aide à l’observance : **pilulier**, rappels, **aidant** référent, visites à domicile\n- Rééducation cognitive, activités, soutien psychosocial\n- Traitement de la **dépression** (sertraline)',
      ],
      [
        'Suivi',
        'Réévaluer.',
        '- Évaluation cognitive périodique ; protection juridique et sociale si démence',
      ],
    ],
    molecules: [
      ['dolutegravir', 'premiere', 'TARV'],
      ['tenofovir-disoproxil', 'premiere', 'TARV'],
      ['sertraline', 'alternative', 'Dépression associée'],
      ['cotrimoxazole', 'adjuvant', 'Prophylaxie'],
    ],
    complications: [
      {
        nom: 'Mauvaise observance et échec du TARV',
        fiche: 'infection-vih',
        description: 'Troubles cognitifs.',
        traitement: '- Aidant, pilulier',
        clinique: '',
        paraclinique: '- Charge virale',
      },
      {
        nom: 'Perte d’autonomie',
        description: 'Démence associée au VIH.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression',
        fiche: 'troubles-psychiatriques-associes-au-vih',
        description: 'Comorbidité.',
        traitement: '- Traitement',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Stabilisation ou amélioration sous TARV efficace ; formes légères persistantes fréquentes',
    urgences: [],
    symptomes: [
      ['Troubles de la mémoire', 'tres_frequent'],
      ['Troubles de la concentration', 'frequent'],
      ['Apathie', 'frequent'],
      ['Troubles de la marche', 'occasionnel'],
      ['Tremblements', 'occasionnel'],
      ['Humeur dépressive', 'frequent'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      "Harrison's Principles of Internal Medicine",
      'mhGAP Intervention Guide 2.0',
    ],
    niveaux: {
      cs: ['- Dépistage cognitif, soutien à l’observance', ''],
      hgr: ['- CD4, charge virale, scanner, ponction lombaire', ''],
      tert: ['- IRM, neuropsychologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Trouble neurocognitif léger',
        type: 'commune',
        description: 'Gêne modérée.',
        terrain: '- VIH sous TARV',
        fonctionnels: '- Oublis, lenteur',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Démence associée au VIH',
        type: 'gravite',
        description: 'Perte d’autonomie.',
        terrain: '- CD4 bas, sans TARV',
        fonctionnels: '- Apathie, troubles de la marche',
        generaux: '',
        physiques: '- Ralentissement',
        paraclinique: '- Atrophie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles cognitifs légers
  {
    ...DEM,
    slug: 'troubles-cognitifs-legers',
    nom: 'Troubles cognitifs légers',
    resume:
      'Déclin cognitif objectivé (mémoire, attention, langage, fonctions exécutives) supérieur à celui attendu pour l’âge et le niveau d’instruction, mais sans retentissement significatif sur l’autonomie dans les activités quotidiennes : stade possible de début d’une maladie d’Alzheimer ou d’une démence vasculaire (10–15 % d’évolution par an), mais aussi réversible (dépression, carence en B12, hypothyroïdie, apnées du sommeil, médicaments sédatifs et anticholinergiques, alcool, VIH, syphilis) ; évaluation cognitive adaptée, bilan des causes curables, imagerie selon le contexte ; prise en charge : traitement des causes, contrôle des facteurs de risque vasculaire, révision des médicaments, activité physique, stimulation cognitive et sociale, correction auditive, suivi tous les 6–12 mois ; pas de traitement médicamenteux spécifique.',
    definition:
      'Déclin d’une ou plusieurs fonctions cognitives, rapporté et objectivé, sans perte d’autonomie dans les activités de la vie quotidienne, ne remplissant pas les critères d’une démence.',
    physiopathologie:
      '## Causes\n- **Neurodégénératives** débutantes (Alzheimer), **vasculaires**\n- **Réversibles** : **dépression**, **carence en B12**, **hypothyroïdie**, apnées du sommeil, **médicaments** (benzodiazépines, anticholinergiques, antihistaminiques), **alcool**, **VIH**, **syphilis**, insuffisance rénale ou hépatique\n- Facteurs de risque : HTA, diabète, faible niveau d’instruction, **surdité**, sédentarité, isolement',
    diagnostic:
      '## Clinique\n- Plainte cognitive du patient ou de l’entourage (oublis, difficultés à trouver les mots, à gérer l’argent ou les traitements)\n- **Autonomie préservée** dans les activités de la vie quotidienne\n\n## Évaluation\n- **Évaluation cognitive** (MoCA, MMSE) adaptée au niveau d’instruction, test de l’horloge\n- Humeur (dépression), sommeil, audition et vision, médicaments, alcool\n- Bilan : **B12**, **TSH**, glycémie, ionogramme, calcémie, créatinine, **VIH**, **syphilis** ; imagerie si évolution rapide, signes focaux ou sujet jeune',
    examens: [
      ['premiere_intention', 'evaluation-cognitive', 'Objectiver le déclin.'],
      ['etiologique', 'vitamine-b12-folates', 'Carence.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Lésion, AVC, hydrocéphalie.'],
    ],
    scores: [],
    differentiels: [
      ['maladie-d-alzheimer', 'Perte d’autonomie.'],
      ['depression', 'Plainte cognitive dépressive.'],
      ['demences-vasculaires', 'Lésions vasculaires.'],
      ['dependance-aux-benzodiazepines', 'Troubles cognitifs iatrogènes.'],
      ['hypothyroidie-adulte', 'Ralentissement.'],
    ],
    etiologies:
      '## Causes\n- Neurodégénératives, vasculaires, dépression, carences, médicaments, alcool, infections',
    principes: [
      [
        'Causes réversibles',
        'Rechercher et traiter.',
        '- Traitement de la **dépression**, de la carence en **B12**, de l’**hypothyroïdie**\n- **Révision des médicaments** (sevrage des benzodiazépines, arrêt des anticholinergiques), réduction de l’alcool',
      ],
      [
        'Prévention',
        'Facteurs de risque.',
        '- Contrôle de la **tension**, du **diabète**, des lipides ; arrêt du tabac\n- **Activité physique**, stimulation cognitive, vie sociale, correction de la **surdité** et de la vision, sommeil',
      ],
      [
        'Suivi',
        'Surveiller l’évolution.',
        '- Réévaluation tous les 6–12 mois ; information du patient et de la famille\n- Pas de traitement médicamenteux spécifique (inhibiteurs de la cholinestérase non indiqués)',
      ],
    ],
    molecules: [
      ['cyanocobalamine-vitamine-b12', 'adjuvant', 'Carence en B12'],
      ['sertraline', 'alternative', 'Dépression associée'],
    ],
    complications: [
      {
        nom: 'Évolution vers une démence',
        fiche: 'maladie-d-alzheimer',
        description: '10–15 % par an.',
        traitement: '- Suivi',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Erreurs de traitement',
        description: 'Oublis de prise.',
        traitement: '- Pilulier, aidant',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Stabilité, amélioration (causes réversibles) ou évolution vers une démence',
    urgences: [],
    symptomes: [
      ['Troubles de la mémoire', 'tres_frequent'],
      ['Troubles de la concentration', 'frequent'],
      ['Anxiété', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
      'mhGAP Intervention Guide 2.0',
    ],
    niveaux: {
      cs: ['- Évaluation simple, révision des médicaments, facteurs de risque', ''],
      hgr: ['- Bilan des causes curables', ''],
      tert: ['- Neurologie, gériatrie, neuropsychologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Trouble cognitif léger amnésique',
        type: 'commune',
        description: 'Mémoire.',
        terrain: '- Plus de 65 ans',
        fonctionnels: '- Oublis',
        generaux: '',
        physiques: '',
        paraclinique: '- MoCA abaissé',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Trouble cognitif réversible',
        type: 'etiologique',
        description: 'Cause curable.',
        terrain: '- Dépression, carence, médicaments',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Démence à corps de Lewy
  {
    ...DEM,
    slug: 'demence-a-corps-de-lewy',
    nom: 'Démence à corps de Lewy',
    resume:
      'Démence neurodégénérative du sujet âgé caractérisée par des fluctuations marquées de l’attention et de la vigilance, des hallucinations visuelles précoces, bien construites et récurrentes (personnes, animaux), un syndrome parkinsonien (rigidité, lenteur, troubles de la marche) et des troubles du comportement en sommeil paradoxal (le patient « vit ses rêves », crie, se débat) ; chutes, malaises, dysautonomie (hypotension orthostatique, constipation), sensibilité extrême aux neuroleptiques (aggravation sévère, syndrome malin, décès) ; à distinguer de la maladie d’Alzheimer, de la maladie de Parkinson avec démence, d’un syndrome confusionnel ; traitement : inhibiteurs de la cholinestérase (rivastigmine, donépézil) efficaces sur les hallucinations et la cognition, lévodopa prudente pour le parkinsonisme, éviter halopéridol et autres neuroleptiques classiques (quétiapine à très faible dose si indispensable), prévention des chutes, soutien des aidants.',
    definition:
      'Démence neurodégénérative liée à l’accumulation d’alpha-synucléine (corps de Lewy) dans le cortex et le tronc cérébral, associant fluctuations cognitives, hallucinations visuelles et syndrome parkinsonien.',
    physiopathologie:
      '## Mécanismes\n- Dépôts d’**alpha-synucléine** (corps de Lewy) corticaux et sous-corticaux, déficit **cholinergique** important et déficit **dopaminergique**\n- Proche de la maladie de Parkinson avec démence (règle de l’année : démence avant ou dans l’année suivant le parkinsonisme)',
    diagnostic:
      '## Critères principaux\n- **Fluctuations** de la cognition et de la vigilance (épisodes de somnolence, regard dans le vide, discours incohérent)\n- **Hallucinations visuelles** récurrentes et détaillées\n- **Trouble du comportement en sommeil paradoxal**\n- **Syndrome parkinsonien** (bradykinésie, rigidité, tremblement moins fréquent)\n\n## Signes associés\n- **Hypersensibilité aux neuroleptiques**, chutes répétées, syncopes, hypotension orthostatique, constipation, dépression, délires\n\n## Examens\n- Évaluation cognitive (atteinte attentionnelle et visuo-spatiale), imagerie, bilan des causes curables et d’un syndrome confusionnel (infection, médicaments)',
    examens: [
      ['premiere_intention', 'evaluation-cognitive', 'Atteinte attentionnelle et visuo-spatiale.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Diagnostic différentiel.'],
      ['etiologique', 'vitamine-b12-folates', 'Cause curable.'],
      ['etiologique', 'tsh', 'Cause curable.'],
      ['etiologique', 'ecbu', 'Infection (confusion).'],
    ],
    scores: [],
    differentiels: [
      ['maladie-d-alzheimer', 'Mémoire au premier plan, pas de fluctuations marquées.'],
      ['maladie-de-parkinson', 'Parkinsonisme ancien avant la démence.'],
      ['syndrome-confusionnel-aigu', 'Fluctuations aiguës avec cause somatique.'],
      ['syndromes-parkinsoniens-medicamenteux', 'Neuroleptiques.'],
      ['schizophrenie', 'Hallucinations auditives, sujet jeune.'],
    ],
    etiologies: '## Cause\n- Neurodégénérescence à corps de Lewy (alpha-synucléine)',
    principes: [
      [
        'Traitement cognitif et des hallucinations',
        'Inhibiteurs de la cholinestérase.',
        '- **Rivastigmine** ou **donépézil** : améliorent les hallucinations, la vigilance et la cognition\n- Mémantine en association possible',
      ],
      [
        'Prudence avec les neuroleptiques',
        'Danger.',
        '- **Éviter halopéridol**, chlorpromazine, rispéridone : aggravation parkinsonienne, syndrome malin, décès\n- Hallucinations gênantes persistantes : **quétiapine** à très faible dose (12,5–25 mg)\n- Lévodopa à faible dose pour le parkinsonisme (risque d’hallucinations)',
      ],
      [
        'Mesures associées',
        'Sécurité.',
        '- Prévention des **chutes**, de l’**hypotension orthostatique** (lever progressif, hydratation), constipation\n- Trouble du sommeil paradoxal : sécuriser le lit, mélatonine, clonazépam à faible dose\n- Soutien et information des **aidants** (fluctuations, hallucinations)',
      ],
    ],
    molecules: [
      ['rivastigmine', 'premiere', 'Cognition, hallucinations'],
      ['donepezil', 'premiere', 'Cognition, hallucinations'],
      ['memantine', 'alternative', 'Association'],
      ['quetiapine', 'alternative', 'Hallucinations sévères (très faible dose)'],
      ['levodopa', 'alternative', 'Parkinsonisme'],
      ['melatonine', 'adjuvant', 'Trouble du comportement en sommeil paradoxal'],
    ],
    complications: [
      {
        nom: 'Réaction grave aux neuroleptiques',
        fiche: 'syndrome-malin-des-neuroleptiques',
        description: 'Hypersensibilité.',
        traitement: '- Arrêt, réanimation',
        clinique: '- Rigidité, confusion',
        paraclinique: '- CPK',
      },
      {
        nom: 'Chutes et fractures',
        fiche: 'fracture-col-du-femur',
        description: 'Parkinsonisme, hypotension.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Stade avancé.',
        traitement: '- Antibiotiques',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Évolution progressive sur 5–8 ans, plus rapide que la maladie d’Alzheimer',
    urgences: [],
    symptomes: [
      ['Hallucinations', 'tres_frequent'],
      ['Troubles de la mémoire', 'frequent'],
      ['Rigidité musculaire', 'frequent'],
      ['Lenteur des mouvements', 'frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Syncope', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'MDS — recommandations de pratique clinique',
      'mhGAP Intervention Guide 2.0',
    ],
    niveaux: {
      cs: ['- Éviter les neuroleptiques classiques, soutien des aidants', ''],
      hgr: ['- Évaluation, bilan', ''],
      tert: ['- Neurologie, gériatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme typique',
        type: 'commune',
        description: 'Fluctuations, hallucinations, parkinsonisme.',
        terrain: '- Plus de 65 ans',
        fonctionnels: '- Hallucinations visuelles',
        generaux: '',
        physiques: '- Rigidité, lenteur',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Démence de la maladie de Parkinson',
        type: 'evolutive',
        description: 'Après un parkinsonisme ancien.',
        terrain: '- Parkinson depuis plus d’un an',
        fonctionnels: '- Déclin cognitif',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Démence fronto-temporale
  {
    ...DEM,
    slug: 'demence-fronto-temporale',
    nom: 'Démence fronto-temporale',
    resume:
      'Démence neurodégénérative à début souvent présénile (45–65 ans), fréquemment prise pour un trouble psychiatrique : variante comportementale (changement progressif de personnalité, désinhibition, comportements inadaptés, apathie, perte d’empathie, hyperoralité et changement des goûts alimentaires, comportements stéréotypés et rituels, perte d’autocritique, mémoire relativement préservée au début) ou aphasies progressives primaires (perte du sens des mots, difficultés d’expression) ; parfois associée à une sclérose latérale amyotrophique ; antécédents familiaux fréquents ; IRM (atrophie frontale et temporale) ; éliminer dépression, trouble bipolaire, tumeur frontale, neurosyphilis, VIH ; pas de traitement curatif : ISRS ou trazodone pour les troubles du comportement, éviter les inhibiteurs de la cholinestérase (inefficaces, parfois aggravants), orthophonie, soutien et protection des familles (conséquences financières et légales).',
    definition:
      'Groupe de démences neurodégénératives touchant préférentiellement les lobes frontaux et temporaux, avec troubles précoces du comportement ou du langage.',
    physiopathologie:
      '## Mécanismes\n- Dégénérescence des lobes **frontaux** et **temporaux antérieurs** (protéines tau, TDP-43)\n- Formes **familiales** (mutations C9orf72, MAPT, GRN), association possible à la **SLA**\n\n## Formes\n- **Variante comportementale** (la plus fréquente)\n- **Aphasies progressives primaires** (sémantique, non fluente)',
    diagnostic:
      '## Variante comportementale\n- **Désinhibition** (propos et gestes inadaptés, impulsivité, dépenses), **apathie**\n- **Perte d’empathie**, indifférence, **comportements stéréotypés** et compulsifs\n- **Hyperoralité** (boulimie, goût pour le sucré, alcool), perte d’autocritique\n- Fonctions exécutives atteintes, mémoire et orientation relativement préservées au début\n\n## Aphasies\n- Perte du sens des mots (sémantique) ou parole laborieuse, agrammatisme (non fluente)\n\n## Examens\n- **IRM** ou scanner : atrophie frontale et temporale\n- Éliminer : **dépression**, **trouble bipolaire**, schizophrénie tardive, **tumeur frontale**, **neurosyphilis**, **VIH**, hydrocéphalie ; examen neurologique (SLA)',
    examens: [
      ['premiere_intention', 'evaluation-cognitive', 'Fonctions exécutives.'],
      ['confirmation', 'irm-cerebrale', 'Atrophie fronto-temporale.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Tumeur frontale.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'electromyogramme', 'SLA associée.'],
    ],
    scores: [],
    differentiels: [
      ['maladie-d-alzheimer', 'Troubles de la mémoire au premier plan.'],
      ['trouble-bipolaire', 'Épisode maniaque.'],
      ['tumeurs-cerebrales', 'Tumeur frontale.'],
      ['neurosyphilis', 'Paralysie générale.'],
      ['sclerose-laterale-amyotrophique', 'Association.'],
      ['depression', 'Apathie dépressive.'],
    ],
    etiologies: '## Causes\n- Neurodégénérescence fronto-temporale, formes familiales',
    principes: [
      [
        'Troubles du comportement',
        'Symptomatique.',
        '- Approche non médicamenteuse : routines, environnement adapté, supervision\n- **Sertraline** ou autre ISRS (désinhibition, compulsions, hyperoralité), trazodone\n- Antipsychotique à faible dose seulement en cas d’agitation dangereuse ; **éviter** les inhibiteurs de la cholinestérase',
      ],
      ['Langage', 'Rééducation.', '- **Orthophonie** et moyens de communication alternatifs'],
      [
        'Familles',
        'Soutien et protection.',
        '- Information, soutien des aidants (épuisement important), conseil génétique si forme familiale\n- **Protection juridique et financière** (dépenses inconsidérées), conduite, travail',
      ],
    ],
    molecules: [
      ['sertraline', 'premiere', 'Troubles du comportement'],
      ['fluoxetine', 'alternative', 'Compulsions, hyperoralité'],
      ['quetiapine', 'alternative', 'Agitation sévère (faible dose)'],
    ],
    complications: [
      {
        nom: 'Conséquences financières et légales',
        description: 'Désinhibition.',
        traitement: '- Protection juridique',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Épuisement des aidants',
        description: 'Troubles du comportement.',
        traitement: '- Soutien, répit',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Troubles de la déglutition et dénutrition',
        description: 'Stade avancé.',
        traitement: '- Adaptation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Évolution progressive sur 6–10 ans ; plus rapide si SLA associée',
    urgences: [],
    symptomes: [
      ['Désinhibition', 'tres_frequent'],
      ['Apathie', 'frequent'],
      ['Troubles du comportement', 'tres_frequent'],
      ['Troubles du langage', 'frequent'],
      ['Troubles de la mémoire', 'occasionnel'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'mhGAP Intervention Guide 2.0'],
    niveaux: {
      cs: ['- Repérage d’un changement de personnalité après 45 ans, orientation', ''],
      hgr: ['- Scanner, bilan', ''],
      tert: ['- IRM, neurologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Variante comportementale',
        type: 'commune',
        description: 'Changement de personnalité.',
        terrain: '- Adulte de 45–65 ans',
        fonctionnels: '- Désinhibition, apathie',
        generaux: '',
        physiques: '',
        paraclinique: '- Atrophie frontale',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Aphasie progressive primaire',
        type: 'etiologique',
        description: 'Langage.',
        terrain: '',
        fonctionnels: '- Manque du mot, parole laborieuse',
        generaux: '',
        physiques: '',
        paraclinique: '- Atrophie temporale',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Catatonie
  {
    ...URG,
    slug: 'catatonie',
    nom: 'Catatonie',
    resume:
      'Syndrome psychomoteur grave et sous-diagnostiqué, rencontré dans les troubles de l’humeur (dépression sévère, manie), la schizophrénie, les causes médicales (encéphalites dont l’encéphalite auto-immune anti-NMDA, épilepsie, neuropaludisme, VIH, troubles métaboliques, lupus) et le sevrage des benzodiazépines : stupeur, mutisme, immobilité, catalepsie et flexibilité cireuse, maintien de postures, négativisme, refus alimentaire, échopraxie et écholalie, stéréotypies, parfois agitation ; forme maligne avec fièvre, instabilité tensionnelle et rigidité (proche du syndrome malin des neuroleptiques) ; complications : déshydratation, dénutrition, thromboses, escarres, pneumopathies ; test thérapeutique au lorazépam (amélioration rapide) ; traitement : lorazépam à doses progressives, électroconvulsivothérapie si échec ou forme maligne, éviter les antipsychotiques en phase aiguë, recherche et traitement de la cause, hydratation et prévention des complications.',
    definition:
      'Syndrome neuropsychiatrique associant au moins trois signes parmi stupeur, catalepsie, flexibilité cireuse, mutisme, négativisme, maintien de postures, maniérisme, stéréotypies, agitation, grimaces, écholalie et échopraxie.',
    physiopathologie:
      '## Mécanismes\n- Dysfonctionnement des circuits GABAergiques et glutamatergiques (réponse aux benzodiazépines)\n\n## Causes\n- **Psychiatriques** : **trouble de l’humeur** (dépression, manie, la plus fréquente), **schizophrénie**, troubles du neurodéveloppement (autisme)\n- **Médicales** : **encéphalites** (herpès, anti-NMDA), épilepsie (état de mal non convulsif), **neuropaludisme**, VIH, trypanosomiase, lupus, hyponatrémie, insuffisance hépatique\n- **Médicaments** : sevrage brutal des benzodiazépines, neuroleptiques (forme maligne)',
    diagnostic:
      '## Clinique\n- **Stupeur**, **mutisme**, immobilité, regard fixe\n- **Catalepsie** et **flexibilité cireuse** (le membre garde la position imposée), **maintien de postures**\n- **Négativisme**, **refus alimentaire** et de boire, stéréotypies, écholalie, échopraxie, grimaces\n- Parfois **agitation** catatonique\n- **Forme maligne** : fièvre, tachycardie, instabilité tensionnelle, sueurs, rigidité, CPK élevées\n\n## Examens\n- **Test au lorazépam** : 1–2 mg IV ou IM, amélioration en 30 min à 2 h\n- Glycémie, ionogramme, créatinine, **CPK**, NFS, bilan hépatique, **goutte épaisse**, VIH\n- **EEG** (état de mal non convulsif), **scanner** ou IRM, **ponction lombaire** (encéphalite)',
    examens: [
      ['gravite', 'cpk', 'Forme maligne, rhabdomyolyse.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie, déshydratation.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'goutte-epaisse', 'Neuropaludisme.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'eeg', 'État de mal non convulsif.'],
      ['etiologique', 'lcr', 'Encéphalite.'],
      ['etiologique', 'scanner-cerebral', 'Lésion cérébrale.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['syndrome-malin-des-neuroleptiques', 'Fièvre, rigidité sous neuroleptiques.'],
      ['encephalites-virales-adulte', 'Fièvre, LCR inflammatoire.'],
      ['etat-de-mal-epileptique', 'État de mal non convulsif.'],
      ['depression', 'Stupeur mélancolique.'],
      ['troubles-dissociatifs-et-de-conversion', 'Stupeur dissociative.'],
      ['syndromes-parkinsoniens-medicamenteux', 'Akinésie médicamenteuse.'],
    ],
    etiologies:
      '## Causes\n- Troubles de l’humeur, schizophrénie, encéphalites, épilepsie, neuropaludisme, troubles métaboliques, sevrage des benzodiazépines, neuroleptiques',
    principes: [
      [
        'Benzodiazépines',
        'Première intention.',
        '- **Lorazépam** 1–2 mg IV, IM ou per os toutes les 4–8 h, augmenté jusqu’à 8–24 mg/j selon la réponse (ou diazépam si indisponible)\n- Poursuivre jusqu’à la résolution, puis décroissance lente',
      ],
      [
        'Électroconvulsivothérapie',
        'Si échec ou forme maligne.',
        '- **ECT** en urgence si absence d’amélioration en 3–5 jours, forme maligne, refus alimentaire menaçant\n- Orientation vers un centre disposant de l’ECT',
      ],
      [
        'Mesures associées',
        'Prévenir les complications.',
        '- **Arrêter les antipsychotiques** en phase aiguë (risque de forme maligne)\n- **Hydratation** (IV si refus), nutrition par sonde, **prévention des thromboses** (HBPM) et des escarres, kinésithérapie\n- Traitement de la **cause** (antidépresseur, régulateur de l’humeur, antipaludique, aciclovir, correction métabolique)',
      ],
    ],
    molecules: [
      ['lorazepam', 'premiere', 'Traitement de première intention et test'],
      ['diazepam', 'alternative', 'Si lorazépam indisponible'],
      ['enoxaparine', 'adjuvant', 'Prévention thromboembolique'],
      ['dantrolene', 'adjuvant', 'Forme maligne avec hyperthermie'],
    ],
    complications: [
      {
        nom: 'Catatonie maligne',
        fiche: 'syndrome-malin-des-neuroleptiques',
        description: 'Fièvre, instabilité.',
        traitement: '- Réanimation, lorazépam, ECT',
        clinique: '- Fièvre, rigidité',
        paraclinique: '- CPK',
      },
      {
        nom: 'Déshydratation et insuffisance rénale',
        fiche: 'insuffisance-renale-aigue',
        description: 'Refus de boire.',
        traitement: '- Réhydratation',
        clinique: '',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Embolie pulmonaire',
        fiche: 'embolie-pulmonaire',
        description: 'Immobilité.',
        traitement: '- Anticoagulation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Escarres et pneumopathie',
        fiche: 'escarres',
        description: 'Immobilité.',
        traitement: '- Soins',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Réponse aux benzodiazépines chez 70–80 % ; forme maligne mortelle sans traitement',
    urgences: [],
    symptomes: [
      ['Stupeur', 'tres_frequent'],
      ['Mutisme', 'tres_frequent'],
      ['Rigidité musculaire', 'frequent'],
      ['Postures anormales', 'frequent'],
      ['Agitation', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Reconnaître, hydratation, référence urgente', '- Refus de boire, fièvre'],
      hgr: ['- Lorazépam, bilan des causes, arrêt des antipsychotiques', ''],
      tert: ['- ECT, réanimation, IRM', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Catatonie stuporeuse',
        type: 'commune',
        description: 'Immobilité, mutisme.',
        terrain: '- Trouble de l’humeur, schizophrénie',
        fonctionnels: '- Mutisme, refus alimentaire',
        generaux: '',
        physiques: '- Catalepsie, flexibilité cireuse',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Catatonie maligne',
        type: 'gravite',
        description: 'Urgence vitale.',
        terrain: '- Neuroleptiques',
        fonctionnels: '',
        generaux: '- Fièvre, tachycardie',
        physiques: '- Rigidité',
        paraclinique: '- CPK élevées',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Catatonie d’origine médicale',
        type: 'etiologique',
        description: 'Encéphalite, épilepsie.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Fièvre possible',
        physiques: '',
        paraclinique: '- LCR, EEG',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
