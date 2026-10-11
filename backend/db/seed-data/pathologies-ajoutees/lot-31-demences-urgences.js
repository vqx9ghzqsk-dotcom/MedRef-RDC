'use strict';

/**
 * Lot 31 (démences et neurogériatrie, urgences neuropsychiatriques) — maladie d'Alzheimer,
 * syndrome confusionnel aigu, agitation aiguë. Rédigé par IA (OMS mhGAP, ouvrages de
 * référence) : à valider.
 */

const DEM = { departement: 'neuropsychiatrie', specialite: 'Démences et neurogériatrie' };
const URG = { departement: 'neuropsychiatrie', specialite: 'Urgences neuropsychiatriques' };

module.exports = [
  // =================================================================== Alzheimer
  {
    ...DEM,
    slug: 'maladie-d-alzheimer',
    nom: 'Maladie d’Alzheimer',
    resume:
      'Première cause de démence du sujet âgé : troubles progressifs de la mémoire récente puis des autres fonctions cognitives et de l’autonomie ; rechercher les causes curables (carence en B12, hypothyroïdie, VIH, syphilis, hématome sous-dural, dépression, médicaments) ; soutien des aidants, activités, sécurité ; donépézil si disponible ; éviter les psychotropes sédatifs ; lutter contre l’accusation de sorcellerie.',
    definition:
      'Maladie neurodégénérative responsable d’une démence progressive, débutant typiquement par des troubles de la mémoire épisodique, avec perte d’autonomie dans les activités quotidiennes.',
    physiopathologie:
      '## Mécanismes\n- Dépôts de peptide amyloïde (plaques séniles) et dégénérescence neurofibrillaire (protéine tau), atrophie hippocampique puis corticale\n\n## Facteurs\n- Âge, antécédents familiaux, HTA, diabète, sédentarité, faible niveau d’éducation, surdité non corrigée, dépression\n\n## Autres démences\n- Vasculaire (HTA, AVC), liée au VIH, alcoolique, mixte',
    diagnostic:
      '## Clinique\n- Installation **progressive** sur des mois ou années\n- **Troubles de la mémoire récente** (oublis, questions répétées, objets égarés), désorientation dans le temps puis l’espace\n- Troubles du langage, des gestes, du jugement, de la reconnaissance\n- **Perte d’autonomie** (argent, cuisine, toilette)\n- Symptômes comportementaux : apathie, irritabilité, agitation, idées de vol, errance, troubles du sommeil\n- Vigilance conservée (contrairement à la confusion)\n\n## Évaluation\n- Tests cognitifs adaptés (CSI-D, RUDAS, MMSE)\n- **Causes curables** : NFS, glycémie, TSH, créatinine, ionogramme, calcémie, test VIH, sérologie syphilis, B12 si disponible\n- Dépression, troubles auditifs et visuels, médicaments ; imagerie si évolution rapide ou signes focaux',
    examens: [
      ['premiere_intention', 'evaluation-cognitive', 'Dépistage et suivi.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'nfs', 'Macrocytose (B12).'],
      ['etiologique', 'tdr-vih', 'Démence liée au VIH.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
      ['etiologique', 'glycemie', 'Diabète, hypoglycémies.'],
      ['etiologique', 'calcemie-magnesemie', 'Hypercalcémie.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Hématome sous-dural, AVC, hydrocéphalie.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-confusionnel-aigu', 'Début brutal, vigilance fluctuante.'],
      ['depression', 'Plaintes mnésiques, tristesse, réversible.'],
      ['hematome-sous-dural', 'Chute, évolution sur semaines.'],
      ['Démence vasculaire', 'AVC, HTA, évolution par à-coups.'],
      ['Démence liée au VIH', 'VIH, sujet plus jeune.'],
      ['Hypothyroïdie', 'Lenteur, TSH élevée.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Âge > 65 ans, antécédents familiaux, HTA, diabète, faible éducation, surdité, isolement',
    principes: [
      [
        'Soutien et soins',
        'Préserver l’autonomie et la dignité.',
        '- **Psychoéducation** du patient et des **aidants**, soutien à la famille (épuisement)\n- Activités cognitives et physiques, routines, orientation (calendrier), sécurité du domicile\n- Correction de l’audition et de la vue, traitement des facteurs vasculaires (HTA, diabète)\n- Protection contre la maltraitance et les accusations de sorcellerie',
      ],
      [
        'Médicaments',
        'Bénéfice modeste.',
        '- **Donépézil** 5 puis 10 mg/j si disponible (formes légères à modérées)\n- Symptômes comportementaux : mesures non médicamenteuses d’abord ; antipsychotique à très faible dose (**rispéridone** 0,25–1 mg) seulement si danger, sur une courte durée (risque d’AVC et de décès)\n- Éviter les benzodiazépines et les anticholinergiques ; dépression : **sertraline**',
      ],
      ['Planification', 'Anticiper.', '- Directives sur les soins, protection juridique, fin de vie'],
    ],
    molecules: [
      ['donepezil', 'premiere', 'Formes légères à modérées'],
      ['sertraline', 'adjuvant', 'Dépression associée'],
      ['risperidone', 'adjuvant', 'Agitation dangereuse, courte durée'],
      ['melatonine', 'adjuvant', 'Troubles du sommeil'],
    ],
    complications: [
      {
        nom: 'Syndrome confusionnel surajouté',
        fiche: 'syndrome-confusionnel-aigu',
        description: 'Infection, médicaments.',
        traitement: '- Traiter la cause',
        clinique: '- Aggravation brutale',
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
        nom: 'Dénutrition et escarres',
        description: 'Stades avancés.',
        traitement: '- Aide aux repas, soins',
        clinique: '- Amaigrissement',
        paraclinique: '',
      },
      {
        nom: 'Épuisement et maltraitance',
        description: 'Aidants surmenés.',
        traitement: '- Soutien des aidants',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Évolution progressive sur 8 à 12 ans vers la dépendance totale',
    urgences: [],
    symptomes: [
      ['Troubles de la mémoire', 'tres_frequent'],
      ['Désorientation', 'frequent'],
      ['Troubles du langage', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Agitation', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      "Adams and Victor's Principles of Neurology",
    ],
    niveaux: {
      cs: [
        '- Repérage, recherche des causes curables, soutien des aidants',
        '- Évolution rapide, sujet jeune, signes focaux',
      ],
      hgr: ['- Bilan, imagerie', ''],
      tert: ['- Neurologie, gériatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme typique',
        type: 'commune',
        description: 'Début mnésique.',
        terrain: '- Sujet > 65 ans',
        fonctionnels: '- Oublis récents, questions répétées',
        generaux: '',
        physiques: '- Examen neurologique normal',
        paraclinique: '- Tests cognitifs anormaux, bilan des causes curables normal',
        etiologies: '- Neurodégénérative',
        syndromes: [],
      },
      {
        nom: 'Stade sévère',
        type: 'evolutive',
        description: 'Dépendance.',
        terrain: '',
        fonctionnels: '- Perte du langage',
        generaux: '- Dénutrition',
        physiques: '- Troubles de la marche, incontinence',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Démence mixte ou vasculaire',
        type: 'etiologique',
        description: 'Composante vasculaire.',
        terrain: '- HTA, diabète, AVC',
        fonctionnels: '- Lenteur, troubles exécutifs',
        generaux: '',
        physiques: '- Signes focaux',
        paraclinique: '- Lésions vasculaires à l’imagerie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Syndrome confusionnel
  {
    ...DEM,
    slug: 'syndrome-confusionnel-aigu',
    nom: 'Syndrome confusionnel aigu',
    resume:
      'Défaillance cérébrale aiguë et fluctuante (délirium), très fréquente chez le sujet âgé hospitalisé : troubles de l’attention et de la vigilance, désorientation, agitation ou somnolence, s’aggravant le soir ; c’est un signe d’une maladie somatique (infection, paludisme, hypoglycémie, déshydratation, rétention urinaire, médicaments, sevrage) : rechercher et traiter la cause, mesures non médicamenteuses, halopéridol faible dose seulement si danger.',
    definition:
      'Trouble aigu (heures à jours) et fluctuant de l’attention, de la vigilance et des fonctions cognitives, causé directement par une affection médicale, un toxique, un médicament ou un sevrage.',
    physiopathologie:
      '## Causes (souvent multiples)\n- **Infections** : paludisme, pneumonie, infection urinaire, sepsis, méningite\n- **Métaboliques** : hypoglycémie, hyponatrémie, déshydratation, hypercalcémie, urémie, encéphalopathie hépatique, hypoxie\n- **Médicaments** : benzodiazépines, opioïdes, anticholinergiques, corticoïdes, antipaludiques\n- **Sevrage** (alcool, benzodiazépines), intoxications\n- **Neurologiques** : AVC, hématome sous-dural, état post-critique\n- Douleur, **rétention urinaire**, **fécalome**, privation de sommeil\n\n## Terrain\n- Âge avancé, démence, déficits sensoriels, polymédication, chirurgie',
    diagnostic:
      '## Clinique\n- Début **aigu**, évolution **fluctuante** (aggravation vespérale)\n- **Troubles de l’attention** (incapacité à suivre une conversation), désorientation, propos incohérents\n- Formes **hyperactives** (agitation, hallucinations visuelles) ou **hypoactives** (somnolence, apathie, souvent méconnues)\n- Inversion du rythme veille-sommeil\n- Outil : CAM (Confusion Assessment Method)\n\n## Bilan étiologique\n- Constantes, glycémie, **TDR paludisme**, NFS, ionogramme, créatinine, calcémie, bandelette urinaire, SpO2\n- Examen : globe vésical, fécalome, foyer infectieux, signes focaux, revue des médicaments\n- Radiographie thoracique, ECG ; scanner et ponction lombaire selon le contexte',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie, déshydratation.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'nfs', 'Infection, anémie.'],
      ['premiere_intention', 'bandelette-urinaire', 'Infection urinaire.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxie.'],
      ['etiologique', 'calcemie-magnesemie', 'Hypercalcémie.'],
      ['deuxieme_intention', 'radiographie-thoracique', 'Pneumonie.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Signes focaux, traumatisme.'],
      ['deuxieme_intention', 'lcr', 'Fièvre et signes méningés.'],
    ],
    scores: [],
    differentiels: [
      ['maladie-d-alzheimer', 'Installation progressive, vigilance normale.'],
      ['troubles-psychotiques-aigus', 'Vigilance et orientation conservées.'],
      ['depression', 'Forme hypoactive confondue avec une dépression.'],
      ['Aphasie (AVC)', 'Trouble du langage isolé, signes focaux.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Infections (paludisme, urinaires, pulmonaires), déshydratation, médicaments, sevrage alcoolique, rétention urinaire, hypoglycémie',
    principes: [
      [
        'Traiter la cause',
        'Priorité absolue.',
        '- Antipaludique, antibiotiques, réhydratation, correction de la glycémie et des électrolytes, oxygène\n- **Arrêt ou réduction des médicaments** en cause\n- Sondage d’une rétention, traitement d’un fécalome, antalgie\n- Sevrage alcoolique : diazépam et thiamine',
      ],
      [
        'Mesures non médicamenteuses',
        'Réorienter et sécuriser.',
        '- Présence d’un proche, éclairage adapté, horloge, lunettes et appareils auditifs, mobilisation, hydratation, respect du sommeil\n- Éviter la contention physique et les changements de chambre',
      ],
      [
        'Médicaments',
        'Seulement si danger.',
        '- **Halopéridol** 0,5–1 mg per os ou IM, renouvelable, sur une courte durée\n- Éviter les benzodiazépines (sauf sevrage alcoolique)',
      ],
    ],
    molecules: [
      ['haloperidol', 'premiere', 'Agitation dangereuse, faible dose'],
      ['vitamine-b1-thiamine', 'adjuvant', 'Alcoolisme, dénutrition'],
      ['diazepam', 'adjuvant', 'Uniquement sevrage alcoolique'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Chutes et traumatismes',
        description: 'Agitation, désorientation.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Déclin cognitif durable',
        fiche: 'maladie-d-alzheimer',
        description: 'Révélation ou aggravation d’une démence.',
        traitement: '- Suivi',
        clinique: '',
        paraclinique: '- Tests cognitifs',
      },
      {
        nom: 'Décès',
        description: 'Cause grave sous-jacente.',
        traitement: '- Traitement précoce de la cause',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Régression en quelques jours à semaines après traitement de la cause ; marqueur de gravité et de mortalité chez le sujet âgé',
    urgences: ['paludisme-grave-urgence', 'syndrome-meninge-febrile'],
    symptomes: [
      ['Désorientation', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Agitation', 'frequent'],
      ['Hallucinations', 'occasionnel'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Glycémie, TDR paludisme, hydratation, recherche de rétention, revue des médicaments, transfert',
        '- Fièvre, signes focaux, cause non trouvée',
      ],
      hgr: ['- Bilan étiologique complet, traitement', ''],
      tert: ['- Gériatrie, neurologie', ''],
    },
    alertes: {
      'paludisme-grave-urgence': 'Confusion fébrile en zone d’endémie',
      'syndrome-meninge-febrile': 'Confusion avec fièvre et raideur de nuque',
    },
    formes: [
      {
        nom: 'Confusion hyperactive',
        type: 'commune',
        description: 'Agitation.',
        terrain: '- Sujet âgé, infection',
        fonctionnels: '- Agitation, hallucinations visuelles',
        generaux: '- Fièvre possible',
        physiques: '- Désorientation, inattention',
        paraclinique: '- Cause identifiée au bilan',
        etiologies: '- Infections, médicaments, sevrage',
        syndromes: ['syndrome-confusionnel'],
      },
      {
        nom: 'Confusion hypoactive',
        type: 'etiologique',
        description: 'Souvent méconnue.',
        terrain: '- Sujet très âgé',
        fonctionnels: '- Somnolence, apathie',
        generaux: '',
        physiques: '- Ralentissement',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-confusionnel'],
      },
    ],
  },

  // =================================================================== Agitation aiguë
  {
    ...URG,
    slug: 'agitation-aigue',
    nom: 'Agitation aiguë',
    resume:
      'Urgence fréquente : sécurité du patient, de l’entourage et des soignants ; désescalade verbale d’abord ; toujours rechercher une cause médicale (hypoglycémie, hypoxie, paludisme, méningite, sevrage, intoxication, traumatisme crânien, rétention urinaire) ; sédation si nécessaire : halopéridol 5 mg IM ± prométhazine 25–50 mg IM (ou diazépam si sevrage) ; surveillance après sédation ; ni chaînes ni contention prolongée.',
    definition:
      'État d’excitation psychomotrice excessive, avec tension, irritabilité et risque de violence envers soi ou autrui, quelle qu’en soit la cause (psychiatrique, médicale, toxique).',
    physiopathologie:
      '## Causes\n- **Médicales** : hypoglycémie, hypoxie, neuropaludisme, méningite, encéphalite, sepsis, traumatisme crânien, épilepsie (post-critique), confusion du sujet âgé, douleur, rétention urinaire\n- **Toxiques** : intoxication (alcool, cannabis, stimulants, médicaments), **sevrage alcoolique**\n- **Psychiatriques** : manie, schizophrénie, psychose aiguë, trouble de la personnalité, crise d’angoisse\n- THA en phase neurologique',
    diagnostic:
      '## Évaluation (sans se mettre en danger)\n- Constantes, **glycémie capillaire**, SpO2, température, signes de traumatisme\n- **Confusion** (désorientation, vigilance fluctuante) = cause médicale jusqu’à preuve du contraire\n- Fièvre, raideur de nuque, signes focaux, odeur d’alcool, pupilles\n- Antécédents psychiatriques, prises de toxiques, traitements, arrêt d’alcool\n\n## Examens\n- Glycémie, TDR paludisme, ionogramme, NFS ; scanner si traumatisme ou signes focaux ; ponction lombaire si fièvre',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxie.'],
      ['premiere_intention', 'tdr-paludisme', 'Neuropaludisme.'],
      ['premiere_intention', 'ionogramme', 'Désordres métaboliques.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Traumatisme, signes focaux.'],
      ['deuxieme_intention', 'lcr', 'Fièvre, raideur de nuque.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-confusionnel-aigu', 'Désorientation, fluctuation : cause médicale.'],
      ['sevrage-alcoolique-delirium-tremens', 'Sevrage, tremblements, sueurs.'],
      ['trouble-bipolaire', 'Épisode maniaque.'],
      ['schizophrenie', 'Psychose chronique.'],
      ['neuropaludisme-adulte', 'Fièvre, TDR positif.'],
      ['hypoglycemie-adulte', 'Glycémie basse.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Psychoses, manie, intoxications et sevrage alcoolique, confusion d’origine médicale, traumatisme crânien',
    principes: [
      [
        'Sécurité et désescalade',
        'Calmer sans violence.',
        '- Environnement calme, une seule personne qui parle, voix posée, écoute, proposer de l’aide et un traitement oral\n- Équipe suffisante, voie de sortie libre, retirer les objets dangereux\n- Contention physique uniquement en dernier recours, brève, surveillée, jamais de chaînes',
      ],
      [
        'Sédation médicamenteuse',
        'Si danger persistant.',
        '- Proposer d’abord la voie orale\n- **Halopéridol** 5 mg IM ± **prométhazine** 25–50 mg IM, renouvelable après 30–60 minutes\n- **Diazépam** 10 mg (oral ou IV lent) si sevrage alcoolique, intoxication aux stimulants ou contre-indication aux neuroleptiques\n- Sujet âgé : doses réduites (halopéridol 0,5–1 mg) ; dystonie aiguë : trihexyphénidyle ou prométhazine',
      ],
      [
        'Surveillance et suite',
        'Éviter les complications.',
        '- Constantes, conscience, respiration après sédation\n- Traitement de la cause médicale ou psychiatrique, hospitalisation adaptée',
      ],
    ],
    molecules: [
      ['haloperidol', 'premiere', 'Sédation IM'],
      ['promethazine', 'premiere', 'Associée à l’halopéridol'],
      ['diazepam', 'premiere', 'Sevrage, stimulants'],
      ['olanzapine', 'alternative', 'Voie orale'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['trihexyphenidyle', 'adjuvant', 'Dystonie aiguë'],
    ],
    complications: [
      {
        nom: 'Blessures',
        description: 'Patient, entourage, soignants.',
        traitement: '- Prévention, soins',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression respiratoire et inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Sédation excessive.',
        traitement: '- Surveillance, oxygène',
        clinique: '- Somnolence, désaturation',
        paraclinique: '',
      },
      {
        nom: 'Syndrome malin des neuroleptiques',
        fiche: 'syndrome-malin-des-neuroleptiques',
        description: 'Neuroleptiques IM répétés, déshydratation.',
        traitement: '- Arrêt, réanimation',
        clinique: '- Fièvre, rigidité',
        paraclinique: '- CPK',
      },
      {
        nom: 'Rhabdomyolyse',
        description: 'Agitation prolongée, contention.',
        traitement: '- Hydratation',
        clinique: '- Urines foncées',
        paraclinique: '- CPK',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si la cause est identifiée et traitée ; risque de décès en cas de cause médicale méconnue ou de contention prolongée',
    urgences: ['paludisme-grave-urgence', 'traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Agitation', 'tres_frequent'],
      ['Troubles du comportement', 'tres_frequent'],
      ['Hallucinations', 'occasionnel'],
      ['Idées délirantes', 'occasionnel'],
      ['Désorientation', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Désescalade, glycémie, halopéridol + prométhazine, transfert',
        '- Cause médicale suspectée, agitation incontrôlable',
      ],
      hgr: ['- Bilan étiologique, hospitalisation', ''],
      tert: ['- Psychiatrie, réanimation', ''],
    },
    alertes: {
      'paludisme-grave-urgence': 'Agitation fébrile en zone d’endémie',
      'traumatisme-cranien-grave-urgence': 'Agitation après traumatisme crânien',
    },
    formes: [
      {
        nom: 'Agitation d’origine psychiatrique',
        type: 'commune',
        description: 'Psychose, manie.',
        terrain: '- Antécédents psychiatriques',
        fonctionnels: '- Agitation, délire',
        generaux: '- Apyrexie',
        physiques: '- Orientation conservée',
        paraclinique: '- Bilan normal',
        etiologies: '- Schizophrénie, manie, psychose aiguë',
        syndromes: [],
      },
      {
        nom: 'Agitation d’origine médicale',
        type: 'gravite',
        description: 'Cause organique.',
        terrain: '- Sujet âgé, fièvre, traumatisme',
        fonctionnels: '- Confusion',
        generaux: '- Fièvre, hypoxie',
        physiques: '- Désorientation, signes focaux',
        paraclinique: '- Glycémie, TDR, imagerie anormaux',
        etiologies: '- Paludisme, méningite, hypoglycémie',
        syndromes: ['syndrome-confusionnel'],
      },
      {
        nom: 'Agitation toxique',
        type: 'etiologique',
        description: 'Intoxication ou sevrage.',
        terrain: '- Alcool, drogues',
        fonctionnels: '',
        generaux: '- Sueurs, tachycardie',
        physiques: '- Tremblements, mydriase',
        paraclinique: '',
        etiologies: '- Alcool, cannabis, stimulants',
        syndromes: [],
      },
    ],
  },
];
