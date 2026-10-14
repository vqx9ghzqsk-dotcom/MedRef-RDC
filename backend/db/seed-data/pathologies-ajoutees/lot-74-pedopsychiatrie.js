'use strict';

/**
 * Lot 74 (phase 2, pédopsychiatrie) — troubles anxieux de l'enfant, troubles des conduites, troubles
 * du sommeil de l'enfant, troubles de l'attachement, encoprésie, mutisme sélectif, refus scolaire
 * anxieux. Rédigé par IA (mhGAP, OMS, Nelson) : à valider.
 */

const PEDOPSY = { departement: 'neuropsychiatrie', specialite: 'Psychiatrie de l’enfant et de l’adolescent' };

module.exports = [
  // =================================================================== Troubles anxieux de l'enfant
  {
    ...PEDOPSY,
    slug: 'troubles-anxieux-de-l-enfant',
    nom: 'Troubles anxieux de l’enfant',
    resume:
      'Troubles psychiatriques les plus fréquents de l’enfant et de l’adolescent : anxiété de séparation (peur excessive d’être séparé des parents, refus de dormir seul ou d’aller à l’école, plaintes somatiques le matin), anxiété généralisée (inquiétudes multiples, perfectionnisme, besoin de réassurance), phobies spécifiques, anxiété sociale, mutisme sélectif, trouble panique de l’adolescent ; souvent exprimés par des plaintes physiques (maux de ventre, céphalées), des troubles du sommeil et des difficultés scolaires ; facteurs : tempérament, anxiété parentale, violences, conflits armés, deuils ; éliminer une cause somatique (hyperthyroïdie, asthme, médicaments) ; prise en charge : psychoéducation de l’enfant et des parents, thérapie cognitivo-comportementale avec exposition progressive, guidance parentale (ne pas renforcer l’évitement), collaboration avec l’école ; fluoxétine ou sertraline seulement pour les formes sévères ou résistantes.',
    definition:
      'Peur et anxiété excessives, inadaptées au stade de développement, persistantes et responsables d’une souffrance ou d’une gêne dans le fonctionnement de l’enfant.',
    physiopathologie:
      '## Facteurs\n- **Tempérament** inhibé, prédisposition **génétique**, **anxiété parentale** (modèle, surprotection)\n- Événements de vie : **violences**, **conflits armés**, déplacement, deuils, séparations, maladie d’un parent, harcèlement scolaire\n\n## Entretien du trouble\n- **Évitement** renforcé par l’entourage → absence d’habituation → anxiété croissante',
    diagnostic:
      '## Clinique selon l’âge\n- **Anxiété de séparation** (enfant de 6–10 ans) : détresse à la séparation, peur qu’il arrive malheur aux parents, cauchemars, plaintes somatiques\n- **Anxiété généralisée** : inquiétudes multiples (école, santé, famille), tension, fatigue, troubles du sommeil\n- **Phobies**, **anxiété sociale** (adolescent), **attaques de panique**\n- Plaintes **somatiques** (douleurs abdominales, céphalées), irritabilité, pleurs, colères\n\n## Évaluation\n- Durée (> 4 semaines pour l’anxiété de séparation, 6 mois pour les autres), retentissement scolaire et familial\n- Rechercher violences, harcèlement, dépression, TDAH ; éliminer hyperthyroïdie, asthme, médicaments (salbutamol), caféine',
    examens: [['etiologique', 'tsh', 'Hyperthyroïdie si signes évocateurs.']],
    scores: [],
    differentiels: [
      ['depression-de-l-adolescent', 'Humeur dépressive, perte d’intérêt.'],
      ['trouble-deficit-attention-hyperactivite', 'Agitation sans inquiétude.'],
      ['refus-scolaire-anxieux', 'Anxiété centrée sur l’école.'],
      ['etat-de-stress-post-traumatique', 'Traumatisme, reviviscences.'],
      ['douleurs-abdominales-recurrentes-enfant', 'Plaintes somatiques.'],
      ['hyperthyroidie-basedow', 'Agitation, amaigrissement.'],
    ],
    etiologies: '## Facteurs\n- Tempérament, génétique, anxiété parentale, violences, conflits, deuils',
    principes: [
      [
        'Psychoéducation et guidance parentale',
        'Base.',
        '- Expliquer l’anxiété et le rôle de l’évitement ; parents rassurants mais encourageant l’exposition\n- Routines, sommeil, activités, réduire les écrans et la caféine',
      ],
      [
        'Thérapie cognitivo-comportementale',
        'Référence.',
        '- Exposition progressive aux situations redoutées, gestion des pensées anxieuses, relaxation\n- Collaboration avec l’école (aménagements temporaires)',
      ],
      [
        'Médicaments',
        'Formes sévères.',
        '- **Fluoxétine** ou **sertraline** à faible dose progressive (à partir de 7–8 ans), sur avis spécialisé, avec surveillance de l’humeur\n- Éviter les benzodiazépines',
      ],
    ],
    molecules: [
      ['fluoxetine', 'alternative', 'Formes sévères'],
      ['sertraline', 'alternative', 'Formes sévères'],
    ],
    complications: [
      {
        nom: 'Refus scolaire',
        fiche: 'refus-scolaire-anxieux',
        description: 'Anxiété de séparation.',
        traitement: '- Retour progressif',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression',
        fiche: 'depression-de-l-adolescent',
        description: 'Évolution fréquente.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Troubles anxieux de l’adulte',
        fiche: 'trouble-anxieux-generalise',
        description: 'Persistance.',
        traitement: '- TCC',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bonne réponse à la TCC ; persistance à l’âge adulte sans prise en charge',
    urgences: [],
    symptomes: [
      ['Anxiété', 'tres_frequent'],
      ['Angoisse de séparation', 'frequent'],
      ['Peurs excessives', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'Nelson Textbook of Pediatrics'],
    niveaux: {
      cs: ['- Psychoéducation, conseils aux parents, liaison avec l’école', ''],
      hgr: ['- Prise en charge psychologique', ''],
      tert: ['- Pédopsychiatrie, TCC', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Anxiété de séparation',
        type: 'commune',
        description: 'Enfant d’âge scolaire.',
        terrain: '- Enfant 6–10 ans',
        fonctionnels: '- Refus de se séparer, plaintes le matin',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Anxiété généralisée',
        type: 'etiologique',
        description: 'Inquiétudes multiples.',
        terrain: '- Enfant perfectionniste',
        fonctionnels: '- Inquiétudes, insomnie',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Anxiété post-traumatique de l’enfant',
        type: 'terrain',
        description: 'Conflits, violences.',
        terrain: '- Enfant déplacé',
        fonctionnels: '- Peurs, cauchemars',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles des conduites
  {
    ...PEDOPSY,
    slug: 'troubles-des-conduites',
    nom: 'Troubles des conduites',
    resume:
      'Comportements répétés et persistants transgressant les droits d’autrui et les règles sociales chez l’enfant et l’adolescent : agressions envers les personnes et les animaux, destructions, vols, mensonges, fugues, absentéisme, bagarres ; trouble oppositionnel avec provocation chez le plus jeune (colères, désobéissance, provocation) ; facteurs : maltraitance, violences familiales, négligence, enfants de la rue, enfants associés aux groupes armés, pauvreté, TDAH, troubles des apprentissages, consommation de substances ; rechercher une dépression, un traumatisme, un TDAH, une déficience intellectuelle, une épilepsie ; prise en charge : formation aux compétences parentales (règles claires, renforcement positif, cohérence, pas de châtiments corporels), soutien scolaire, programmes communautaires, réinsertion des enfants sortis des groupes armés, traitement des troubles associés ; rispéridone à faible dose seulement pour une agressivité sévère, sur une courte durée.',
    definition:
      'Ensemble de comportements répétitifs et persistants dans lesquels sont bafoués les droits fondamentaux d’autrui ou les normes sociales correspondant à l’âge.',
    physiopathologie:
      '## Facteurs\n- **Familiaux** : maltraitance, négligence, violences conjugales, éducation incohérente ou punitive, parents en difficulté (alcool, maladie mentale)\n- **Sociaux** : pauvreté, rue, **groupes armés**, déplacement, pairs délinquants\n- **Individuels** : tempérament, **TDAH**, troubles des apprentissages, déficience intellectuelle, traumatismes, substances',
    diagnostic:
      '## Clinique\n- **Trouble oppositionnel** : colères fréquentes, refus des règles, provocation, rancune (enfant plus jeune)\n- **Trouble des conduites** : **agressions**, cruauté, destructions, vols, mensonges, fugues, absentéisme, violations graves des règles\n- Durée > 6–12 mois, retentissement familial, scolaire et social\n\n## Évaluation\n- Rechercher **maltraitance**, **violences sexuelles**, exploitation, consommation de substances\n- Dépression, stress post-traumatique, TDAH, déficience, épilepsie, troubles sensoriels\n- Contexte familial et scolaire, ressources disponibles',
    examens: [],
    scores: [],
    differentiels: [
      ['trouble-deficit-attention-hyperactivite', 'Impulsivité, inattention.'],
      ['depression-de-l-adolescent', 'Irritabilité, repli.'],
      ['etat-de-stress-post-traumatique', 'Traumatisme.'],
      ['usage-substances-adolescent', 'Consommation.'],
      ['deficience-intellectuelle', 'Comportements inadaptés au niveau cognitif.'],
      ['trouble-bipolaire', 'Épisodes d’exaltation.'],
    ],
    etiologies:
      '## Facteurs\n- Maltraitance, violences, négligence, pauvreté, groupes armés, TDAH, substances',
    principes: [
      [
        'Compétences parentales',
        'Première ligne (mhGAP).',
        '- Règles claires et cohérentes, **renforcement positif**, temps de qualité avec l’enfant\n- Conséquences prévisibles non violentes ; **pas de châtiments corporels**\n- Soutien des parents (stress, alcool, santé mentale)',
      ],
      [
        'Interventions psychosociales',
        'Communauté et école.',
        '- Soutien scolaire, activités structurées (sport, apprentissage), entraînement aux habiletés sociales et à la gestion de la colère\n- **Réinsertion** des enfants sortis des groupes armés et des enfants de la rue, protection de l’enfance',
      ],
      [
        'Troubles associés et médicaments',
        'Limités.',
        '- Traiter TDAH, dépression, stress post-traumatique, substances\n- **Rispéridone** à faible dose (0,25–1 mg/j) pour une agressivité sévère, courte durée, sur avis spécialisé ; surveillance du poids',
      ],
    ],
    molecules: [
      ['risperidone', 'alternative', 'Agressivité sévère (courte durée)'],
      ['methylphenidate', 'alternative', 'TDAH associé (spécialiste)'],
    ],
    complications: [
      {
        nom: 'Délinquance et violences',
        description: 'Évolution.',
        traitement: '- Interventions précoces',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Usage de substances',
        fiche: 'usage-substances-adolescent',
        description: 'Fréquent.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Personnalité dyssociale',
        fiche: 'troubles-de-la-personnalite',
        description: 'À l’âge adulte.',
        traitement: '',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration avec les programmes parentaux et psychosociaux précoces ; évolution défavorable si début précoce et environnement violent',
    urgences: [],
    symptomes: [
      ['Comportements agressifs', 'tres_frequent'],
      ['Troubles du comportement', 'tres_frequent'],
      ['Difficultés scolaires', 'frequent'],
      ['Irritabilité', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Conseils parentaux, repérage des violences, liaison école', ''],
      hgr: ['- Prise en charge psychosociale', ''],
      tert: ['- Pédopsychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Trouble oppositionnel avec provocation',
        type: 'commune',
        description: 'Enfant jeune.',
        terrain: '- Enfant 4–10 ans',
        fonctionnels: '- Colères, désobéissance',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Trouble des conduites de l’adolescent',
        type: 'gravite',
        description: 'Transgressions graves.',
        terrain: '- Adolescent, rue, groupes armés',
        fonctionnels: '- Violences, vols, fugues',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles du sommeil de l'enfant
  {
    ...PEDOPSY,
    slug: 'troubles-du-sommeil-de-l-enfant',
    nom: 'Troubles du sommeil de l’enfant',
    resume:
      'Problèmes fréquents : insomnie comportementale du nourrisson et du jeune enfant (difficultés d’endormissement, réveils nocturnes liés aux habitudes : biberon, bercement, absence de rituel), parasomnies (terreurs nocturnes en début de nuit avec cris et agitation sans souvenir, somnambulisme, cauchemars en fin de nuit), apnées obstructives du sommeil (ronflements, pauses respiratoires, sommeil agité, somnolence, hyperactivité, liées à l’hypertrophie des amygdales et des végétations), retard de phase de l’adolescent (écrans) ; causes médicales à rechercher : douleurs, otites, asthme nocturne, reflux, prurit (gale, eczéma), oxyurose, anémie ferriprive, paludisme, épilepsie ; prise en charge : hygiène du sommeil et rituel du coucher, conseils comportementaux aux parents, sécurisation pendant les parasomnies, chirurgie ORL des apnées ; mélatonine dans des cas particuliers (TSA, TDAH), pas de sédatifs antihistaminiques.',
    definition:
      'Perturbations de la quantité, de la qualité ou du déroulement du sommeil chez l’enfant, avec retentissement sur l’enfant ou la famille.',
    physiopathologie:
      '## Types\n- **Insomnie comportementale** : associations d’endormissement inadaptées, absence de limites\n- **Parasomnies du sommeil lent profond** (terreurs nocturnes, somnambulisme) : éveil partiel, favorisées par le manque de sommeil, la fièvre\n- **Cauchemars** : sommeil paradoxal, stress, traumatismes\n- **Apnées obstructives** : hypertrophie adéno-amygdalienne, obésité, drépanocytose\n- **Retard de phase** de l’adolescent, écrans, caféine',
    diagnostic:
      '## Interrogatoire\n- Horaires, rituel, lieu de sommeil, écrans, durée totale, siestes\n- Description des épisodes nocturnes (heure, souvenir, durée)\n- **Ronflements**, pauses respiratoires, respiration buccale, énurésie, somnolence ou hyperactivité diurnes\n- Retentissement scolaire et familial ; stress, violences\n\n## Causes médicales\n- Douleurs, otites, **asthme**, reflux, **prurit** (gale, eczéma, **oxyurose**), **anémie ferriprive** (jambes sans repos), épilepsie nocturne\n\n## Examens\n- Selon l’orientation : NFS, ferritine, examen ORL ; EEG si épisodes stéréotypés évocateurs de crises ; polygraphie en centre spécialisé',
    examens: [
      ['etiologique', 'ferritine', 'Carence martiale.'],
      ['etiologique', 'nfs', 'Anémie.'],
      ['deuxieme_intention', 'eeg', 'Crises nocturnes.'],
    ],
    scores: [],
    differentiels: [
      ['epilepsie-enfant', 'Crises nocturnes stéréotypées.'],
      ['hypertrophie-adenoidienne', 'Apnées obstructives.'],
      ['troubles-anxieux-de-l-enfant', 'Anxiété de séparation au coucher.'],
      ['trouble-deficit-attention-hyperactivite', 'Hyperactivité diurne.'],
      ['enuresie', 'Énurésie nocturne.'],
    ],
    etiologies: '## Causes\n- Habitudes, anxiété, apnées, douleurs, prurit, anémie, épilepsie, écrans',
    principes: [
      [
        'Hygiène du sommeil',
        'Base.',
        '- Horaires réguliers, **rituel du coucher** calme, lieu de sommeil sûr\n- Pas d’écrans 1 h avant le coucher, pas de caféine (sodas, thé)\n- Endormissement autonome progressif (éviter biberon et bercement prolongés)',
      ],
      [
        'Parasomnies',
        'Rassurer et sécuriser.',
        '- Terreurs nocturnes et somnambulisme : ne pas réveiller, **sécuriser** l’environnement (portes, escaliers, fenêtres), éviter la privation de sommeil\n- Cauchemars répétés : rechercher stress et traumatisme',
      ],
      [
        'Causes spécifiques',
        'Traiter.',
        '- **Apnées** : avis ORL, adéno-amygdalectomie ; asthme, reflux, prurit (traitement de la gale, de l’oxyurose), **fer** si carence\n- **Mélatonine** dans les troubles du neurodéveloppement (TSA, TDAH) ; pas d’antihistaminiques sédatifs',
      ],
    ],
    molecules: [
      ['melatonine', 'alternative', 'TSA, TDAH'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Carence martiale'],
      ['mebendazole', 'adjuvant', 'Oxyurose'],
    ],
    complications: [
      {
        nom: 'Troubles de l’attention et du comportement',
        fiche: 'trouble-deficit-attention-hyperactivite',
        description: 'Manque de sommeil.',
        traitement: '- Hygiène du sommeil',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Retentissement des apnées',
        description: 'Retard de croissance, HTA, cœur pulmonaire.',
        traitement: '- Chirurgie ORL',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Épuisement parental',
        description: 'Insomnie du jeune enfant.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec les mesures comportementales ; parasomnies disparaissant habituellement à l’adolescence',
    urgences: [],
    symptomes: [
      ['Troubles du sommeil', 'tres_frequent'],
      ['Cauchemars et terreurs nocturnes', 'frequent'],
      ['Ronflements', 'occasionnel'],
      ['Somnolence', 'occasionnel'],
      ['Irritabilité', 'frequent'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Conseils d’hygiène du sommeil, recherche des causes médicales', ''],
      hgr: ['- Avis ORL, pédiatrie', ''],
      tert: ['- Polygraphie, pédopsychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Insomnie comportementale',
        type: 'commune',
        description: 'Jeune enfant.',
        terrain: '- Nourrisson, jeune enfant',
        fonctionnels: '- Réveils nocturnes',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Parasomnies',
        type: 'etiologique',
        description: 'Terreurs, somnambulisme.',
        terrain: '- Enfant 3–12 ans',
        fonctionnels: '- Cris en début de nuit',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Apnées obstructives',
        type: 'gravite',
        description: 'Hypertrophie adéno-amygdalienne.',
        terrain: '- Enfant 2–8 ans',
        fonctionnels: '- Ronflements, pauses',
        generaux: '',
        physiques: '- Grosses amygdales',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles de l'attachement
  {
    ...PEDOPSY,
    slug: 'troubles-de-l-attachement',
    nom: 'Troubles de l’attachement',
    resume:
      'Perturbations sévères du lien entre l’enfant et ses figures de soin, apparaissant avant 5 ans chez des enfants ayant subi une carence de soins (négligence grave, maltraitance, placements multiples, institutionnalisation en orphelinat, séparations répétées, décès ou maladie des parents, enfants des rues, conflits armés) : trouble réactionnel (enfant inhibé, triste, ne cherchant ni n’acceptant le réconfort) ou désinhibition du contact social (familiarité excessive et indiscriminée avec les inconnus) ; retard de croissance, de langage et de développement associés ; prise en charge : assurer un environnement de soins stable et chaleureux avec une figure d’attachement durable (famille d’accueil, placement familial plutôt qu’institutionnel), soutien et formation des soignants, interventions sur la sensibilité parentale, traitement de la malnutrition et des retards, protection de l’enfance.',
    definition:
      'Troubles du comportement relationnel de l’enfant traduisant l’absence ou la perturbation grave de l’établissement d’un lien d’attachement sélectif, consécutifs à des soins insuffisants dans la petite enfance.',
    physiopathologie:
      '## Mécanisme\n- Besoin fondamental d’une **figure d’attachement** stable et sensible pour le développement émotionnel, cognitif et social\n- **Carence de soins** : négligence, maltraitance, institutionnalisation, changements répétés de soignants\n\n## Contextes à risque\n- Orphelins (VIH, conflits, épidémies), enfants placés en institution, enfants des rues, mère gravement malade ou déprimée, enfants associés aux forces armées',
    diagnostic:
      '## Formes\n- **Trouble réactionnel de l’attachement** : retrait émotionnel, peu de recherche de réconfort, tristesse, irritabilité, peur inexpliquée\n- **Désinhibition du contact social** : familiarité excessive avec les inconnus, absence de vérification auprès du soignant, suit facilement un étranger (risque d’abus)\n\n## Évaluation\n- Histoire des soins (séparations, institution, maltraitance)\n- **Croissance**, nutrition, développement psychomoteur, langage, audition et vision\n- Rechercher maltraitance actuelle, TSA (diagnostic différentiel), déficience intellectuelle',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Retard de croissance, malnutrition.'],
      ['etiologique', 'audiometrie', 'Surdité.'],
      ['etiologique', 'tdr-vih', 'Orphelin du VIH.'],
    ],
    scores: [],
    differentiels: [
      ['troubles-du-spectre-autistique', 'Troubles de la communication présents malgré des soins adéquats.'],
      ['deficience-intellectuelle', 'Retard global.'],
      ['maltraitance-enfant', 'Maltraitance actuelle.'],
      ['depression-de-l-adolescent', 'Dépression.'],
      ['malnutrition-chronique', 'Retard de croissance.'],
    ],
    etiologies: '## Causes\n- Négligence, maltraitance, institutionnalisation, séparations, orphelinage',
    principes: [
      [
        'Environnement stable',
        'Priorité.',
        '- Figure d’attachement **stable** et disponible ; préférer l’accueil **familial** à l’institution\n- Limiter les changements de soignants, réunification familiale si possible',
      ],
      [
        'Soutien des soignants',
        'Sensibilité.',
        '- Guidance pour répondre aux besoins de l’enfant (interactions, jeux, réconfort), programmes de stimulation précoce\n- Soutien psychologique et matériel des familles d’accueil',
      ],
      [
        'Soins associés',
        'Global.',
        '- **Renutrition**, rattrapage du développement (stimulation, langage), scolarisation\n- **Protection de l’enfance**, prévention des abus (désinhibition)',
      ],
    ],
    molecules: [],
    complications: [
      {
        nom: 'Retard de développement',
        fiche: 'retard-developpement-psychomoteur',
        description: 'Carence de stimulation.',
        traitement: '- Stimulation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Malnutrition',
        fiche: 'malnutrition-chronique',
        description: 'Négligence.',
        traitement: '- Renutrition',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Abus et exploitation',
        fiche: 'violences-sexuelles',
        description: 'Désinhibition sociale.',
        traitement: '- Protection',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration nette après placement dans un environnement stable et chaleureux, surtout si précoce',
    urgences: [],
    symptomes: [
      ['Repli sur soi', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Retard de développement psychomoteur', 'frequent'],
      ['Irritabilité', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      'mhGAP Intervention Guide 2.0',
    ],
    niveaux: {
      cs: ['- Repérage, nutrition, soutien des soignants, protection', ''],
      hgr: ['- Évaluation pédiatrique et psychologique', ''],
      tert: ['- Pédopsychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Trouble réactionnel de l’attachement',
        type: 'commune',
        description: 'Inhibé.',
        terrain: '- Négligence, institution',
        fonctionnels: '- Retrait, peu de recherche de réconfort',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Désinhibition du contact social',
        type: 'gravite',
        description: 'Risque d’abus.',
        terrain: '- Placements multiples',
        fonctionnels: '- Familiarité avec les inconnus',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Encoprésie
  {
    ...PEDOPSY,
    slug: 'encopresie',
    nom: 'Encoprésie',
    resume:
      'Émission répétée de selles dans les vêtements ou en des lieux inappropriés après l’âge de 4 ans : dans plus de 80 % des cas, encoprésie rétentionnelle par constipation chronique (fécalome, souillures par débordement de selles liquides, douleurs abdominales, selles volumineuses bouchant les toilettes, refus d’aller aux toilettes), plus rarement sans constipation (contexte émotionnel, maltraitance, violences sexuelles) ; source de honte, de moqueries et de punitions ; éliminer une cause organique (maladie de Hirschsprung, anomalies médullaires, hypothyroïdie) ; prise en charge : explication déculpabilisante, évacuation du fécalome, laxatifs osmotiques au long cours (macrogol, lactulose), passages programmés aux toilettes après les repas, alimentation riche en fibres et en eau, calendrier avec renforcement positif, pas de punitions, soutien psychologique.',
    definition:
      'Émissions répétées, volontaires ou non, de selles dans des endroits inappropriés, au moins une fois par mois pendant 3 mois, chez un enfant de plus de 4 ans.',
    physiopathologie:
      '## Encoprésie rétentionnelle\n- **Constipation chronique** (douleur à la défécation, retenue, toilettes inadaptées à l’école) → **fécalome** → dilatation rectale, perte de la sensation de besoin → **fuites** de selles liquides autour du fécalome\n\n## Encoprésie non rétentionnelle\n- Facteurs **émotionnels** : conflits, naissance d’un frère, séparation, **maltraitance**, **violences sexuelles**, trouble oppositionnel',
    diagnostic:
      '## Clinique\n- Souillures fréquentes, odeur, enfant qui semble ne pas sentir\n- Constipation : selles rares, dures, volumineuses, douleurs, rétention ; masse abdominale\n- Toucher rectal ou palpation : **fécalome** ; examen de la région lombo-sacrée et de l’anus\n- Retentissement : honte, isolement, moqueries, punitions\n\n## Éliminer\n- **Maladie de Hirschsprung** (retard d’émission du méconium, constipation depuis la naissance, ampoule rectale vide)\n- Anomalies médullaires (signes neurologiques, fossette sacrée), hypothyroïdie, maladie cœliaque\n- **Violences sexuelles** (lésions anales, changement brutal de comportement)\n\n## Examens\n- Le plus souvent aucun ; radiographie de l’abdomen si doute sur un fécalome ; TSH',
    examens: [
      ['deuxieme_intention', 'abdomen-sans-preparation', 'Fécalome.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
    ],
    scores: [],
    differentiels: [
      ['constipation-enfant', 'Constipation sans souillures.'],
      ['maladie-de-hirschsprung', 'Constipation depuis la naissance.'],
      ['maltraitance-enfant', 'Violences, abus sexuels.'],
      ['enuresie', 'Énurésie associée.'],
      ['diarrhee-persistante-enfant', 'Diarrhée vraie.'],
    ],
    etiologies: '## Causes\n- Constipation chronique ; facteurs émotionnels, maltraitance',
    principes: [
      [
        'Déculpabiliser',
        'Base.',
        '- Expliquer le mécanisme (l’enfant ne le fait pas exprès), **arrêter les punitions** et les moqueries',
      ],
      [
        'Traiter la constipation',
        'Durée prolongée.',
        '- **Évacuation** du fécalome : **macrogol** à forte dose 3–6 jours (ou lavements)\n- Entretien : **macrogol** 0,4–0,8 g/kg/j ou **lactulose**, plusieurs mois\n- **Passages aux toilettes** 5–10 min après les repas, marchepied, calendrier avec récompenses\n- Eau, fibres, fruits, activité physique',
      ],
      [
        'Soutien',
        'Psychologique.',
        '- Recherche d’un contexte émotionnel ou de violences, soutien de la famille, collaboration avec l’école (accès aux toilettes)',
      ],
    ],
    molecules: [
      ['macrogol', 'premiere', 'Évacuation et entretien'],
      ['lactulose', 'alternative', 'Entretien'],
      ['bisacodyl', 'adjuvant', 'Laxatif stimulant de courte durée'],
    ],
    complications: [
      {
        nom: 'Rechutes',
        description: 'Arrêt précoce des laxatifs.',
        traitement: '- Traitement prolongé',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Infections urinaires et énurésie',
        fiche: 'infection-urinaire-enfant',
        description: 'Fécalome.',
        traitement: '- Traitement de la constipation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Isolement et troubles émotionnels',
        description: 'Moqueries.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison chez la majorité en 6–12 mois avec un traitement bien conduit ; rechutes fréquentes',
    urgences: [],
    symptomes: [
      ['Incontinence fécale', 'tres_frequent'],
      ['Constipation', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Explication, laxatifs, conseils',
        '- Constipation depuis la naissance, signes neurologiques, suspicion de violences',
      ],
      hgr: ['- Évacuation du fécalome, pédiatrie', ''],
      tert: ['- Gastro-entérologie pédiatrique, pédopsychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Encoprésie rétentionnelle',
        type: 'commune',
        description: 'Constipation.',
        terrain: '- Enfant 4–10 ans',
        fonctionnels: '- Souillures, selles rares',
        generaux: '',
        physiques: '- Fécalome',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Encoprésie non rétentionnelle',
        type: 'etiologique',
        description: 'Contexte émotionnel.',
        terrain: '- Stress, violences',
        fonctionnels: '- Selles normales dans les vêtements',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Mutisme sélectif
  {
    ...PEDOPSY,
    slug: 'mutisme-selectif',
    nom: 'Mutisme sélectif',
    resume:
      'Trouble anxieux de l’enfant (début habituel entre 2 et 5 ans, souvent repéré à l’entrée à l’école) caractérisé par une incapacité persistante à parler dans certaines situations sociales (école, avec les adultes inconnus), alors que l’enfant parle normalement à la maison avec ses proches ; il communique parfois par gestes ; durée de plus d’un mois (hors premier mois d’école) ; souvent associé à une timidité extrême, une anxiété sociale, parfois à un trouble du langage ou un bilinguisme récent (langue d’enseignement différente) ; à distinguer d’une surdité, d’un trouble du langage, d’un TSA ou d’un traumatisme ; prise en charge : ne pas forcer la parole ni punir, réduire la pression, exposition progressive (techniques comportementales, « stimulus fading »), collaboration étroite parents-école, orthophonie si trouble du langage ; fluoxétine dans les formes sévères persistantes.',
    definition:
      'Incapacité régulière à parler dans des situations sociales spécifiques où l’on s’attend à ce que l’enfant parle, alors qu’il parle dans d’autres situations, persistant au moins un mois et nuisant à la scolarité ou à la communication.',
    physiopathologie:
      '## Mécanismes\n- Forme d’**anxiété sociale** : la parole déclenche une anxiété intense, l’évitement soulage et entretient le trouble\n- Tempérament inhibé, antécédents familiaux d’anxiété\n- Facteurs : **trouble du langage**, **bilinguisme** ou changement de langue, migration, déplacement',
    diagnostic:
      '## Clinique\n- **Mutisme** constant dans certaines situations (classe, adultes inconnus), parole normale à la maison\n- Communication non verbale (gestes, chuchotements), visage figé, timidité\n- Durée > 1 mois (hors premier mois de scolarisation)\n\n## Éliminer\n- **Surdité** (audiométrie), **trouble du langage**, **TSA**, déficience intellectuelle\n- **Mutisme post-traumatique** (apparition brutale après un événement)\n- Méconnaissance de la langue d’enseignement',
    examens: [['premiere_intention', 'audiometrie', 'Surdité.']],
    scores: [],
    differentiels: [
      ['surdite', 'Absence de parole partout.'],
      ['troubles-du-spectre-autistique', 'Troubles de la communication dans tous les contextes.'],
      ['troubles-anxieux-de-l-enfant', 'Anxiété sociale.'],
      ['deficience-intellectuelle', 'Retard global.'],
      ['trouble-de-stress-aigu', 'Mutisme après un traumatisme.'],
    ],
    etiologies: '## Facteurs\n- Anxiété sociale, tempérament, trouble du langage, changement de langue',
    principes: [
      [
        'Réduire la pression',
        'Ne pas forcer.',
        '- Ne pas punir ni forcer à parler ; accepter la communication non verbale au début\n- Information des enseignants et des parents',
      ],
      [
        'Exposition progressive',
        'Comportementale.',
        '- Faire parler l’enfant en présence d’un parent, puis introduire progressivement l’enseignant (« stimulus fading »)\n- Renforcement positif de chaque progrès ; enregistrements audio\n- Orthophonie si trouble du langage',
      ],
      [
        'Médicaments',
        'Formes sévères.',
        '- **Fluoxétine** à faible dose progressive sur avis spécialisé si absence de progrès après prise en charge comportementale',
      ],
    ],
    molecules: [['fluoxetine', 'alternative', 'Formes sévères persistantes']],
    complications: [
      {
        nom: 'Retentissement scolaire',
        fiche: 'troubles-des-apprentissages',
        description: 'Évaluations impossibles.',
        traitement: '- Aménagements',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Anxiété sociale persistante',
        fiche: 'phobies',
        description: 'Adolescence.',
        traitement: '- TCC',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec une prise en charge précoce ; persistance d’une anxiété sociale chez certains',
    urgences: [],
    symptomes: [
      ['Mutisme', 'tres_frequent'],
      ['Anxiété', 'frequent'],
      ['Difficultés scolaires', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'mhGAP Intervention Guide 2.0'],
    niveaux: {
      cs: ['- Conseils aux parents et à l’école, audiométrie', ''],
      hgr: ['- Évaluation, orthophonie', ''],
      tert: ['- Pédopsychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Mutisme sélectif scolaire',
        type: 'commune',
        description: 'École.',
        terrain: '- Enfant 3–6 ans',
        fonctionnels: '- Ne parle pas en classe',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Mutisme et bilinguisme',
        type: 'terrain',
        description: 'Changement de langue.',
        terrain: '- Enfant déplacé, migrant',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Refus scolaire anxieux
  {
    ...PEDOPSY,
    slug: 'refus-scolaire-anxieux',
    nom: 'Refus scolaire anxieux',
    resume:
      'Difficulté persistante, d’origine anxieuse, à aller ou rester à l’école, avec plaintes somatiques le matin (maux de ventre, céphalées, nausées) qui disparaissent en fin de semaine et pendant les vacances, crises d’angoisse au moment du départ, alors que l’enfant ne fait pas l’école buissonnière et reste à la maison avec l’accord des parents ; causes : anxiété de séparation (jeune enfant), phobie scolaire, anxiété sociale, harcèlement, violences, difficultés d’apprentissage, dépression (adolescent), événements familiaux ; éliminer une cause somatique et rechercher le harcèlement et les violences (y compris par des enseignants) ; prise en charge : retour à l’école le plus tôt possible et progressif, collaboration parents-école-soignant, TCC, traitement de l’anxiété ou de la dépression associée.',
    definition:
      'Refus ou difficulté importante à fréquenter l’école lié à une détresse émotionnelle (anxiété, dépression), avec absentéisme connu des parents.',
    physiopathologie:
      '## Mécanismes\n- **Anxiété** (séparation, situations scolaires, examens, relations) → évitement → soulagement → renforcement du refus\n- Bénéfices secondaires de la présence au domicile\n\n## Facteurs\n- **Harcèlement**, violences à l’école (y compris châtiments corporels), troubles des apprentissages, changement d’école, déplacement\n- Événements familiaux (maladie, deuil, conflit), dépression, anxiété parentale',
    diagnostic:
      '## Clinique\n- Plaintes **somatiques** matinales (douleur abdominale, céphalées, nausées, vomissements), pleurs, colères au moment du départ\n- Amélioration en fin de semaine et pendant les vacances\n- Enfant à la maison avec la connaissance des parents (différent de l’école buissonnière)\n\n## Évaluation\n- Rechercher **harcèlement**, **violences**, **troubles des apprentissages**, **dépression**, idées suicidaires\n- Éliminer une cause somatique (examen clinique, examens orientés seulement)\n- Durée de l’absentéisme (gravité si > 2 semaines)',
    examens: [],
    scores: [],
    differentiels: [
      ['troubles-anxieux-de-l-enfant', 'Anxiété de séparation, anxiété généralisée.'],
      ['depression-de-l-adolescent', 'Dépression de l’adolescent.'],
      ['troubles-des-conduites', 'Absentéisme sans anxiété (école buissonnière).'],
      ['troubles-des-apprentissages', 'Difficultés scolaires spécifiques.'],
      ['douleurs-abdominales-recurrentes-enfant', 'Douleurs abdominales récurrentes.'],
    ],
    etiologies:
      '## Causes\n- Anxiété de séparation, phobie scolaire, harcèlement, violences, troubles des apprentissages, dépression',
    principes: [
      [
        'Retour à l’école',
        'Le plus tôt possible.',
        '- Plan de **retour progressif** (horaires réduits, personne de référence à l’école), sans céder au refus\n- Éviter les certificats médicaux d’absence prolongée',
      ],
      [
        'Collaboration',
        'Parents-école-soignant.',
        '- Traiter le **harcèlement** et les violences, aménagements scolaires temporaires\n- Guidance parentale (fermeté bienveillante, gestion des plaintes somatiques)',
      ],
      [
        'Traitement',
        'Psychologique.',
        '- **TCC** (exposition progressive, gestion de l’anxiété)\n- Traitement de la dépression ou de l’anxiété associée ; **fluoxétine** ou sertraline pour les formes sévères',
      ],
    ],
    molecules: [
      ['fluoxetine', 'alternative', 'Formes sévères, dépression associée'],
      ['sertraline', 'alternative', 'Anxiété sévère'],
    ],
    complications: [
      {
        nom: 'Déscolarisation',
        description: 'Absentéisme prolongé.',
        traitement: '- Retour progressif',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Isolement social et dépression',
        fiche: 'depression-de-l-adolescent',
        description: 'Évolution.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si le retour est rapide ; risque de déscolarisation et de troubles anxieux persistants si prolongé',
    urgences: [],
    symptomes: [
      ['Anxiété', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Angoisse de séparation', 'frequent'],
      ['Difficultés scolaires', 'frequent'],
      ['Nausées', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'mhGAP Intervention Guide 2.0'],
    niveaux: {
      cs: ['- Examen, recherche de harcèlement, conseils, liaison avec l’école', ''],
      hgr: ['- Prise en charge psychologique', ''],
      tert: ['- Pédopsychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Refus scolaire du jeune enfant',
        type: 'commune',
        description: 'Anxiété de séparation.',
        terrain: '- Enfant 5–7 ans',
        fonctionnels: '- Pleurs au départ',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Refus scolaire de l’adolescent',
        type: 'gravite',
        description: 'Dépression, anxiété sociale.',
        terrain: '- Adolescent',
        fonctionnels: '- Absentéisme prolongé, repli',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
