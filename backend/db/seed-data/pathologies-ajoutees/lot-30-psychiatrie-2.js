'use strict';

/**
 * Lot 30 (psychiatrie 2) — trouble anxieux généralisé, état de stress post-traumatique, risque
 * suicidaire et tentative de suicide, psychose puerpérale, syndrome malin des neuroleptiques et
 * effets des psychotropes. Rédigé par IA (OMS mhGAP, ouvrages de référence) : à valider.
 */

const PSY = { departement: 'neuropsychiatrie', specialite: 'Psychiatrie' };

module.exports = [
  // =================================================================== TAG
  {
    ...PSY,
    slug: 'trouble-anxieux-generalise',
    nom: 'Trouble anxieux généralisé',
    resume:
      'Inquiétude excessive et incontrôlable sur de nombreux sujets depuis au moins plusieurs mois, avec tension, fatigue, troubles du sommeil et plaintes somatiques (palpitations, douleurs) : éliminer une cause organique (hyperthyroïdie, anémie, cardiopathie, sevrage) ; psychoéducation, gestion du stress, relaxation, TCC ; ISRS (fluoxétine, sertraline) si persistant ; éviter les benzodiazépines au long cours.',
    definition:
      'Anxiété et soucis excessifs, difficiles à contrôler, portant sur plusieurs domaines de la vie, présents la plupart du temps pendant au moins 6 mois et accompagnés de symptômes physiques.',
    physiopathologie:
      '## Facteurs\n- Vulnérabilité génétique et tempéramentale, stress chronique, insécurité, pauvreté, traumatismes\n- Fréquemment associé à la dépression et à l’usage d’alcool',
    diagnostic:
      '## Clinique\n- **Inquiétude excessive** et permanente (santé, famille, argent, travail)\n- Tension, nervosité, irritabilité, difficultés de concentration, **troubles du sommeil**, fatigue\n- **Plaintes somatiques** : palpitations, sueurs, tremblements, douleurs thoraciques ou abdominales, céphalées, « chaleur dans le corps »\n- Retentissement sur le fonctionnement\n\n## Éliminer\n- Hyperthyroïdie, anémie, hypoglycémie, troubles du rythme, asthme, sevrage alcoolique ou benzodiazépinique, caféine, stimulants\n- Dépression associée (fréquente), risque suicidaire',
    examens: [
      ['etiologique', 'tsh', 'Hyperthyroïdie.'],
      ['etiologique', 'nfs', 'Anémie.'],
      ['etiologique', 'glycemie', 'Hypoglycémie.'],
      ['etiologique', 'ecg', 'Palpitations : troubles du rythme.'],
    ],
    scores: [],
    differentiels: [
      ['depression', 'Humeur triste et perte d’intérêt au premier plan.'],
      ['etat-de-stress-post-traumatique', 'Traumatisme, reviviscences, évitement.'],
      ['Trouble panique', 'Attaques de panique brèves et récurrentes.'],
      ['Hyperthyroïdie', 'TSH basse, amaigrissement.'],
      ['fibrillation-atriale', 'Palpitations, pouls irrégulier.'],
    ],
    etiologies: '## Terrain\n- Femmes, adultes jeunes, stress chronique, contexte d’insécurité',
    principes: [
      [
        'Interventions psychosociales',
        'En première intention.',
        '- **Psychoéducation**, techniques de **gestion du stress** et de **relaxation** (respiration lente), activité physique, résolution de problèmes\n- Thérapie cognitivo-comportementale si accessible\n- Réduire la caféine et l’alcool',
      ],
      [
        'Médicaments',
        'Formes persistantes ou sévères.',
        '- **ISRS** : **fluoxétine** 20 mg/j ou **sertraline** 50 mg/j pendant au moins 6 à 12 mois\n- **Benzodiazépine** (diazépam) uniquement à court terme (< 2–4 semaines) : risque de dépendance\n- **Propranolol** pour les symptômes physiques (palpitations, tremblements) ponctuels',
      ],
    ],
    molecules: [
      ['fluoxetine', 'premiere', 'ISRS'],
      ['sertraline', 'premiere', 'ISRS'],
      ['paroxetine', 'alternative', 'ISRS'],
      ['diazepam', 'adjuvant', 'Court terme seulement'],
      ['propranolol', 'adjuvant', 'Symptômes physiques'],
    ],
    complications: [
      {
        nom: 'Dépression associée',
        fiche: 'depression',
        description: 'Fréquente.',
        traitement: '- Antidépresseur, psychothérapie',
        clinique: '- Tristesse, perte d’intérêt',
        paraclinique: '',
      },
      {
        nom: 'Dépendance aux benzodiazépines ou à l’alcool',
        description: 'Automédication.',
        traitement: '- Sevrage progressif',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Évolution chronique et fluctuante ; amélioration avec un traitement adapté',
    urgences: [],
    symptomes: [
      ['Anxiété', 'tres_frequent'],
      ['Troubles du sommeil', 'tres_frequent'],
      ['Palpitations', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Tremblements', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Psychoéducation, relaxation, ISRS, suivi', '- Échec, dépression sévère, risque suicidaire'],
      hgr: ['- Psychothérapie, avis psychiatrique', ''],
      tert: ['- Psychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Trouble anxieux généralisé',
        type: 'commune',
        description: 'Inquiétude chronique.',
        terrain: '- Adulte',
        fonctionnels: '- Soucis permanents, tension, insomnie',
        generaux: '- Fatigue',
        physiques: '- Tremblements, sueurs',
        paraclinique: '- Bilan normal',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme à expression somatique',
        type: 'etiologique',
        description: 'Plaintes physiques multiples.',
        terrain: '',
        fonctionnels: '- Douleurs, palpitations, vertiges',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== ESPT
  {
    ...PSY,
    slug: 'etat-de-stress-post-traumatique',
    nom: 'État de stress post-traumatique',
    resume:
      'Fréquent en RDC (conflits armés, violences sexuelles, déplacements, accidents) : reviviscences (cauchemars, flash-backs), évitement, hypervigilance, plus d’un mois après un événement traumatique ; premiers secours psychologiques après l’événement, puis TCC centrée sur le trauma ou EMDR, interventions de groupe ; ISRS si besoin ; pas de benzodiazépines.',
    definition:
      'Trouble survenant après l’exposition à un événement traumatique (menace de mort, blessure grave, violence sexuelle), caractérisé par des reviviscences, un évitement et une hyperactivation persistant plus d’un mois.',
    physiopathologie:
      '## Mécanismes\n- Mémorisation traumatique non intégrée, hyperréactivité de l’amygdale, dérégulation de l’axe du stress\n\n## Facteurs de risque\n- Gravité et répétition des traumatismes (conflits, viols, tortures), absence de soutien, antécédents psychiatriques, pertes multiples, déplacement',
    diagnostic:
      '## Clinique (> 1 mois après l’événement)\n- **Reviviscences** : souvenirs intrusifs, **cauchemars**, flash-backs, détresse face aux rappels\n- **Évitement** des lieux, personnes, pensées liés au traumatisme\n- **Hyperactivation** : hypervigilance, sursauts, irritabilité, insomnie, difficultés de concentration\n- Retentissement sur le fonctionnement ; dépression, usage d’alcool, idées suicidaires fréquemment associés\n\n## Distinguer\n- Réaction de stress aiguë (< 1 mois) : normale, premiers secours psychologiques\n- Deuil, dépression, psychose',
    examens: [],
    scores: [],
    differentiels: [
      ['depression', 'Humeur triste au premier plan (souvent associée).'],
      ['trouble-anxieux-generalise', 'Pas de traumatisme ni de reviviscences.'],
      ['Réaction de stress aiguë', 'Moins d’un mois après l’événement.'],
      ['troubles-psychotiques-aigus', 'Hallucinations et délire non liés aux souvenirs.'],
      ['traumatisme-cranien', 'Troubles cognitifs après un traumatisme physique.'],
    ],
    etiologies:
      '## Événements\n- Conflits armés, violences sexuelles, tortures, enlèvements, accidents, catastrophes, mort violente d’un proche',
    principes: [
      [
        'Après l’événement',
        'Prévenir.',
        '- **Premiers secours psychologiques** : sécurité, écoute sans forcer le récit, besoins de base, reconnexion avec les proches\n- Pas de débriefing systématique ni de benzodiazépines',
      ],
      [
        'ESPT constitué',
        'Traiter.',
        '- **Thérapie cognitivo-comportementale centrée sur le trauma**, **EMDR**, gestion du stress, y compris par des intervenants psychosociaux formés et en groupe\n- **ISRS** (**fluoxétine**, **sertraline**) si psychothérapie indisponible ou insuffisante, dépression associée\n- Cauchemars : prazosine si disponible',
      ],
      [
        'Approche globale',
        'Reconstruire.',
        '- Prise en charge médicale, juridique et socio-économique (survivants de violences sexuelles)\n- Repérage du risque suicidaire et de l’usage d’alcool',
      ],
    ],
    molecules: [
      ['fluoxetine', 'premiere', 'ISRS'],
      ['sertraline', 'premiere', 'ISRS'],
      ['paroxetine', 'alternative', 'ISRS'],
      ['amitriptyline', 'alternative', 'Alternative'],
    ],
    complications: [
      {
        nom: 'Dépression et suicide',
        fiche: 'risque-suicidaire',
        description: 'Fréquents.',
        traitement: '- Évaluation, traitement',
        clinique: '- Idées suicidaires',
        paraclinique: '',
      },
      {
        nom: 'Usage d’alcool et de drogues',
        description: 'Automédication.',
        traitement: '- Prise en charge conjointe',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Plaintes somatiques et handicap social',
        description: 'Chronicisation.',
        traitement: '- Soutien, réinsertion',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration chez la majorité avec un traitement adapté ; chronicité en cas de traumatismes répétés et d’insécurité persistante',
    urgences: [],
    symptomes: [
      ['Troubles du sommeil', 'tres_frequent'],
      ['Anxiété', 'tres_frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Humeur dépressive', 'frequent'],
      ['Idées suicidaires', 'occasionnel'],
      ['Palpitations', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Premiers secours psychologiques, repérage, orientation',
        '- Risque suicidaire, symptômes sévères',
      ],
      hgr: ['- Psychothérapie, ISRS', ''],
      tert: ['- Psychiatrie, psychotraumatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'ESPT typique',
        type: 'commune',
        description: 'Après un traumatisme.',
        terrain: '- Survivant de violences, de conflits',
        fonctionnels: '- Cauchemars, flash-backs, évitement, sursauts',
        generaux: '- Insomnie',
        physiques: '',
        paraclinique: '',
        etiologies: '- Traumatisme',
        syndromes: [],
      },
      {
        nom: 'ESPT complexe',
        type: 'gravite',
        description: 'Traumatismes répétés et prolongés.',
        terrain: '- Captivité, violences répétées, enfants soldats',
        fonctionnels: '- Troubles de la régulation émotionnelle, honte, difficultés relationnelles',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Suicide
  {
    ...PSY,
    slug: 'risque-suicidaire',
    nom: 'Risque suicidaire et tentative de suicide',
    resume:
      'Poser directement la question des idées suicidaires (cela ne les provoque pas) ; risque imminent (projet, moyens, tentative récente avec intention) : ne pas laisser seul, retirer les moyens (pesticides, médicaments, armes), hospitaliser ; après une tentative : soins médicaux (intoxication aux organophosphorés : atropine), évaluation psychiatrique, traitement de la cause, suivi rapproché.',
    definition:
      'Ensemble des pensées (idées suicidaires), des comportements (tentatives) et des facteurs exposant une personne au risque de mettre fin à ses jours.',
    physiopathologie:
      '## Facteurs de risque\n- **Troubles mentaux** : dépression, trouble bipolaire, schizophrénie, usage d’alcool et de drogues\n- **Tentative antérieure** (facteur le plus prédictif)\n- Douleurs chroniques, maladies graves (VIH), pertes, conflits familiaux, violences, dettes, isolement, stigmatisation\n- Accès aux moyens : **pesticides** (organophosphorés), médicaments, armes\n\n## Facteurs protecteurs\n- Soutien familial et social, croyances religieuses, responsabilités envers les enfants, accès aux soins',
    diagnostic:
      '## Évaluation (mhGAP)\n- Demander directement : « Avez-vous pensé à mettre fin à vos jours ? »\n- **Risque imminent** : idées actuelles avec **projet**, **moyens**, tentative récente avec intention, agitation, désespoir intense, refus d’aide\n- Rechercher un trouble mental, l’usage d’alcool, les facteurs de stress et de protection\n\n## Après une tentative\n- Bilan médical selon le moyen : intoxication (organophosphorés, médicaments, paracétamol, produits caustiques), pendaison, plaies\n- Glycémie, ionogramme, créatinine, bilan hépatique, paracétamolémie si disponible',
    examens: [
      ['gravite', 'glycemie', 'Intoxication.'],
      ['gravite', 'ionogramme', 'Intoxication.'],
      ['gravite', 'bilan-hepatique', 'Paracétamol.'],
      ['gravite', 'creatinine', 'Intoxication.'],
      ['gravite', 'ecg', 'Antidépresseurs tricycliques.'],
    ],
    scores: [],
    differentiels: [
      [
        'Automutilations sans intention suicidaire',
        'Soulagement d’une tension, pas d’intention de mourir (risque à évaluer quand même).',
      ],
      ['intoxications-aigues-adulte', 'Intoxication accidentelle.'],
    ],
    etiologies:
      '## Terrain\n- Adolescents et jeunes adultes, personnes âgées, hommes (décès), femmes (tentatives), survivants de violences, personnes vivant avec le VIH',
    principes: [
      [
        'Risque imminent',
        'Protéger.',
        '- **Ne pas laisser seul**, environnement sûr, **retirer les moyens** (pesticides, médicaments, armes, cordes)\n- Hospitalisation ou surveillance continue par un proche, avis spécialisé\n- Traitement de l’agitation si besoin',
      ],
      [
        'Après une tentative',
        'Soigner puis évaluer.',
        '- Traitement médical : organophosphorés (**atropine** à fortes doses, décontamination), médicaments (charbon activé si < 1 heure et voies aériennes protégées), paracétamol (**acétylcystéine**)\n- Évaluation psychiatrique avant la sortie ; ne pas juger, ne pas culpabiliser',
      ],
      [
        'Suivi',
        'Prévenir la récidive.',
        '- Traiter le trouble sous-jacent (dépression : ISRS plutôt que tricycliques), alcool\n- Plan de sécurité, implication de la famille, remise de petites quantités de médicaments\n- Contacts réguliers, surtout dans les semaines suivant la sortie\n- Prévention communautaire : restriction des pesticides, lutte contre la stigmatisation',
      ],
    ],
    molecules: [
      ['atropine', 'premiere', 'Intoxication aux organophosphorés'],
      ['charbon-active', 'premiere', 'Intoxication médicamenteuse récente'],
      ['acetylcysteine', 'premiere', 'Intoxication au paracétamol'],
      ['pralidoxime', 'alternative', 'Organophosphorés'],
      ['fluoxetine', 'premiere', 'Dépression sous-jacente'],
      ['diazepam', 'adjuvant', 'Agitation'],
    ],
    complications: [
      {
        nom: 'Décès',
        description: 'Suicide abouti.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Séquelles de la tentative',
        fiche: 'intoxications-aigues-adulte',
        description: 'Intoxications, pendaisons, plaies.',
        traitement: '- Soins médicaux et chirurgicaux',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Récidive',
        description: 'Risque maximal dans l’année qui suit.',
        traitement: '- Suivi rapproché',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Le risque de récidive et de suicide abouti est élevé dans l’année suivant une tentative ; réduit par un suivi actif',
    urgences: [],
    symptomes: [
      ['Idées suicidaires', 'tres_frequent'],
      ['Humeur dépressive', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Poser la question, protéger, retirer les moyens, soins de la tentative, orientation',
        '- Risque imminent, tentative grave',
      ],
      hgr: ['- Prise en charge médicale, hospitalisation, évaluation psychiatrique', ''],
      tert: ['- Psychiatrie, réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Idées suicidaires sans projet',
        type: 'commune',
        description: 'Risque à surveiller.',
        terrain: '- Dépression, détresse',
        fonctionnels: '- Pensées de mort',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Risque imminent',
        type: 'gravite',
        description: 'Projet et moyens.',
        terrain: '- Tentative antérieure, isolement',
        fonctionnels: '- Projet précis, désespoir',
        generaux: '- Agitation',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Tentative par organophosphorés',
        type: 'etiologique',
        description: 'Moyen fréquent en milieu rural.',
        terrain: '',
        fonctionnels: '- Hypersalivation, vomissements',
        generaux: '- Bradycardie, détresse respiratoire',
        physiques: '- Myosis, fasciculations',
        paraclinique: '',
        etiologies: '- Pesticides',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Psychose puerpérale
  {
    ...PSY,
    slug: 'psychose-puerperale',
    nom: 'Psychose puerpérale',
    resume:
      'Urgence psychiatrique des premières semaines du post-partum (surtout J3–J14) : insomnie, confusion, délire (concernant l’enfant), hallucinations, humeur instable ; éliminer une cause organique (sepsis, éclampsie, anémie, paludisme, thyroïde) ; hospitalisation, protection de la mère et de l’enfant, antipsychotique (halopéridol, olanzapine), allaitement selon le traitement ; souvent révélatrice d’un trouble bipolaire.',
    definition:
      'Épisode psychotique aigu survenant dans les semaines suivant l’accouchement, le plus souvent de nature thymique (bipolaire), avec risque de suicide et d’infanticide.',
    physiopathologie:
      '## Facteurs\n- Chute hormonale du post-partum, privation de sommeil\n- **Antécédents de trouble bipolaire** ou de psychose puerpérale (risque de récidive élevé), antécédents familiaux, primiparité\n- Complications obstétricales, infections',
    diagnostic:
      '## Clinique\n- Début brutal dans les **2 premières semaines** du post-partum\n- **Insomnie**, agitation ou prostration, **confusion** et perplexité fluctuantes\n- **Idées délirantes** (souvent centrées sur l’enfant : substitution, possession, ensorcellement), hallucinations\n- Humeur euphorique, irritable ou dépressive\n- Évaluer les risques de suicide et d’infanticide\n\n## Éliminer une cause organique\n- **Sepsis** (endométrite), **éclampsie**, anémie sévère, **paludisme**, hypoglycémie, thrombose veineuse cérébrale, thyroïdite, rétention de produits, sevrage\n- NFS, TDR paludisme, glycémie, tension artérielle, protéinurie, TSH, test VIH',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie, infection.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'proteinurie', 'Éclampsie.'],
      ['etiologique', 'tsh', 'Thyroïdite du post-partum.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Signes neurologiques (thrombose veineuse).'],
    ],
    scores: [],
    differentiels: [
      ['Baby blues', 'Tristesse transitoire des premiers jours, sans délire.'],
      ['depression', 'Dépression du post-partum sans symptômes psychotiques.'],
      ['eclampsie', 'HTA, protéinurie, convulsions.'],
      ['sepsis-maternel-endometrite', 'Fièvre, lochies fétides.'],
      ['troubles-psychotiques-aigus', 'Hors post-partum.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Antécédent de trouble bipolaire ou de psychose puerpérale, primipare, antécédents familiaux',
    principes: [
      [
        'Urgence',
        'Protéger la mère et l’enfant.',
        '- **Hospitalisation** ; ne pas laisser la mère seule avec l’enfant pendant la phase aiguë, en préservant le lien mère-enfant sous surveillance\n- Traitement de toute cause organique',
      ],
      [
        'Traitement',
        'Contrôler les symptômes.',
        '- Antipsychotique : **halopéridol** 2–10 mg/j ou **olanzapine** 5–20 mg/j ; benzodiazépine à court terme pour le sommeil\n- Thymorégulateur si trouble bipolaire (lithium déconseillé pendant l’allaitement ; valproate déconseillé chez la femme en âge de procréer)\n- **Allaitement** : possible avec la plupart des antipsychotiques, selon l’état de la mère et la surveillance de l’enfant',
      ],
      [
        'Suivi et prévention',
        'Prévenir la récidive.',
        '- Psychoéducation de la famille, contraception, suivi prolongé\n- Grossesses ultérieures : surveillance rapprochée et prévention du post-partum',
      ],
    ],
    molecules: [
      ['haloperidol', 'premiere', 'Antipsychotique'],
      ['olanzapine', 'premiere', 'Antipsychotique'],
      ['risperidone', 'alternative', 'Antipsychotique'],
      ['diazepam', 'adjuvant', 'Agitation, sommeil'],
      ['promethazine', 'adjuvant', 'Sommeil'],
    ],
    complications: [
      {
        nom: 'Suicide et infanticide',
        fiche: 'risque-suicidaire',
        description: 'Risques majeurs.',
        traitement: '- Hospitalisation, surveillance',
        clinique: '- Délire concernant l’enfant',
        paraclinique: '',
      },
      {
        nom: 'Trouble bipolaire ultérieur',
        fiche: 'trouble-bipolaire',
        description: 'Évolution fréquente.',
        traitement: '- Thymorégulateur',
        clinique: '- Épisodes thymiques',
        paraclinique: '',
      },
      {
        nom: 'Altération du lien mère-enfant et malnutrition de l’enfant',
        description: 'Soins impossibles.',
        traitement: '- Soutien familial, alimentation de l’enfant',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison de l’épisode en quelques semaines dans la plupart des cas ; récidive dans 30 à 50 % des grossesses ultérieures',
    urgences: [],
    symptomes: [
      ['Troubles du sommeil', 'tres_frequent'],
      ['Idées délirantes', 'tres_frequent'],
      ['Hallucinations', 'frequent'],
      ['Agitation', 'frequent'],
      ['Troubles du comportement', 'tres_frequent'],
      ['Idées suicidaires', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Reconnaître, éliminer une cause organique, protéger, transférer',
        '- Tout symptôme psychotique du post-partum',
      ],
      hgr: ['- Hospitalisation, antipsychotique, bilan', ''],
      tert: ['- Psychiatrie périnatale', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Psychose puerpérale thymique',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Primipare, J3–J14',
        fonctionnels: '- Insomnie, confusion, délire sur l’enfant',
        generaux: '',
        physiques: '- Agitation ou prostration',
        paraclinique: '- Bilan organique normal',
        etiologies: '- Trouble bipolaire',
        syndromes: [],
      },
      {
        nom: 'Psychose d’origine organique du post-partum',
        type: 'etiologique',
        description: 'Cause médicale.',
        terrain: '',
        fonctionnels: '- Confusion',
        generaux: '- Fièvre, HTA',
        physiques: '',
        paraclinique: '- Sepsis, éclampsie, paludisme',
        etiologies: '- Infection, éclampsie',
        syndromes: ['syndrome-confusionnel'],
      },
    ],
  },

  // =================================================================== SMN
  {
    ...PSY,
    slug: 'syndrome-malin-des-neuroleptiques',
    nom: 'Syndrome malin des neuroleptiques et effets des psychotropes',
    resume:
      'Complication rare mais mortelle des antipsychotiques (halopéridol, chlorpromazine, fluphénazine, surtout à l’introduction, à forte dose ou en IM) : fièvre, rigidité, confusion, instabilité tensionnelle, CPK élevées ; arrêt immédiat, réanimation, refroidissement, hydratation, benzodiazépines, dantrolène ou bromocriptine. Autres effets à connaître : dystonie aiguë, akathisie, parkinsonisme, syndrome sérotoninergique, intoxication au lithium.',
    definition:
      'Réaction idiosyncrasique grave aux antagonistes dopaminergiques associant hyperthermie, rigidité musculaire, troubles de conscience et dysautonomie ; la fiche couvre aussi les principaux effets indésirables aigus des psychotropes.',
    physiopathologie:
      '## Mécanismes\n- Blocage dopaminergique central (hypothalamus, striatum) → hyperthermie, rigidité, rhabdomyolyse\n- Facteurs : déshydratation, agitation, doses élevées ou rapides, formes injectables et retard, association au lithium, arrêt brutal de la lévodopa\n\n## Autres effets des psychotropes\n- **Dystonie aiguë** (torticolis, crise oculogyre, protrusion de la langue) : jeunes, halopéridol\n- **Akathisie**, **parkinsonisme**, dyskinésies tardives\n- **Syndrome sérotoninergique** (ISRS, tramadol, associations) : agitation, myoclonies, hyperréflexie, diarrhée\n- **Intoxication au lithium** : tremblements, diarrhée, ataxie, confusion\n- Syndrome anticholinergique (tricycliques, trihexyphénidyle)',
    diagnostic:
      '## Syndrome malin\n- **Fièvre** > 38 °C, **rigidité** « en tuyau de plomb », **confusion**, **dysautonomie** (tachycardie, tension instable, sueurs)\n- Installation sur 1 à 3 jours après l’introduction ou l’augmentation d’un neuroleptique\n- **CPK** très élevées, hyperleucocytose, insuffisance rénale (myoglobinurie)\n\n## Éliminer\n- **Méningite**, **neuropaludisme**, encéphalite, sepsis, coup de chaleur, syndrome sérotoninergique, catatonie maligne\n- TDR paludisme, ponction lombaire, hémocultures',
    examens: [
      ['confirmation', 'cpk', 'Très élevées.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'ionogramme', 'Hyperkaliémie, déshydratation.'],
      ['premiere_intention', 'bandelette-urinaire', 'Myoglobinurie.'],
      ['premiere_intention', 'tdr-paludisme', 'Neuropaludisme.'],
      ['deuxieme_intention', 'lcr', 'Méningite, encéphalite.'],
      ['etiologique', 'lithemie', 'Patient sous lithium.'],
    ],
    scores: [],
    differentiels: [
      ['meningite-bacterienne', 'Raideur de nuque, LCR anormal.'],
      ['neuropaludisme-adulte', 'TDR positif.'],
      ['Syndrome sérotoninergique', 'ISRS, myoclonies, hyperréflexie, installation rapide.'],
      ['Coup de chaleur', 'Exposition à la chaleur, peau sèche.'],
      ['Catatonie maligne', 'Antécédent catatonique, réponse aux benzodiazépines.'],
      ['sepsis-et-choc-septique', 'Foyer infectieux.'],
    ],
    etiologies:
      '## Médicaments en cause\n- Halopéridol, fluphénazine, chlorpromazine (plus rarement antipsychotiques atypiques), métoclopramide, prométhazine ; arrêt brutal de la lévodopa',
    principes: [
      [
        'Syndrome malin',
        'Urgence vitale.',
        '- **Arrêt immédiat** de tout antipsychotique et antidopaminergique\n- Réanimation : **refroidissement**, **hydratation** abondante (sérum salé), surveillance de la diurèse et de la kaliémie\n- **Benzodiazépine** (diazépam) pour l’agitation et la rigidité\n- Formes sévères : **dantrolène** IV et/ou **bromocriptine** 2,5 mg 3 fois/j\n- Prévention de la thrombose ; dialyse si insuffisance rénale\n- Réintroduction prudente après 2 semaines au moins, à faible dose, de préférence avec un antipsychotique atypique',
      ],
      [
        'Autres effets des psychotropes',
        'Reconnaître et traiter.',
        '- **Dystonie aiguë** : **trihexyphénidyle** ou **diphenhydramine**/**prométhazine** IM, diazépam\n- Parkinsonisme : réduire la dose, trihexyphénidyle\n- Akathisie : réduire la dose, **propranolol**\n- Syndrome sérotoninergique : arrêt, benzodiazépines, refroidissement\n- Intoxication au lithium : arrêt, hydratation, dialyse si grave',
      ],
    ],
    molecules: [
      ['dantrolene', 'premiere', 'Syndrome malin sévère'],
      ['bromocriptine', 'alternative', 'Syndrome malin'],
      ['diazepam', 'premiere', 'Agitation, rigidité'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Hydratation'],
      ['trihexyphenidyle', 'premiere', 'Dystonie, parkinsonisme'],
      ['promethazine', 'alternative', 'Dystonie aiguë'],
      ['propranolol', 'adjuvant', 'Akathisie'],
      ['enoxaparine', 'adjuvant', 'Prévention de la thrombose'],
    ],
    complications: [
      {
        nom: 'Rhabdomyolyse et insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Myoglobinurie.',
        traitement: '- Hydratation, dialyse',
        clinique: '- Oligurie, urines foncées',
        paraclinique: '- CPK, créatinine',
      },
      {
        nom: 'Détresse respiratoire et pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Rigidité, troubles de conscience.',
        traitement: '- Ventilation, antibiotiques',
        clinique: '- Dyspnée',
        paraclinique: '',
      },
      {
        nom: 'Décès',
        description: 'Mortalité de 10 à 20 %.',
        traitement: '- Reconnaissance précoce',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Régression en 1 à 2 semaines après l’arrêt (plus long avec les formes retard) ; mortalité réduite par la reconnaissance précoce',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Rigidité musculaire', 'tres_frequent'],
      ['Troubles de la conscience', 'tres_frequent'],
      ['Sueurs', 'frequent'],
      ['Tremblements', 'frequent'],
      ['Urines foncées', 'occasionnel'],
      ['Mouvements involontaires', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      "Harrison's Principles of Internal Medicine",
      "Adams and Victor's Principles of Neurology",
    ],
    niveaux: {
      cs: [
        '- Arrêt du neuroleptique, refroidissement, hydratation, transfert ; traitement des dystonies',
        '- Fièvre et rigidité sous neuroleptique',
      ],
      hgr: ['- Réanimation, CPK, bilan, diazépam', '- Insuffisance rénale, dantrolène'],
      tert: ['- Réanimation, dialyse', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Syndrome malin des neuroleptiques',
        type: 'gravite',
        description: 'Urgence vitale.',
        terrain: '- Introduction ou augmentation d’un neuroleptique, déshydratation',
        fonctionnels: '- Confusion',
        generaux: '- Fièvre, sueurs, tachycardie',
        physiques: '- Rigidité',
        paraclinique: '- CPK très élevées',
        etiologies: '- Halopéridol, fluphénazine',
        syndromes: [],
      },
      {
        nom: 'Dystonie aiguë',
        type: 'commune',
        description: 'Effet indésirable fréquent et impressionnant.',
        terrain: '- Adulte jeune, halopéridol, métoclopramide',
        fonctionnels: '- Torticolis, crise oculogyre, protrusion de la langue',
        generaux: '- Apyrexie',
        physiques: '- Contractures involontaires',
        paraclinique: '',
        etiologies: '- Antidopaminergiques',
        syndromes: [],
      },
      {
        nom: 'Syndrome sérotoninergique',
        type: 'etiologique',
        description: 'Excès de sérotonine.',
        terrain: '- ISRS, tramadol, associations',
        fonctionnels: '- Agitation, diarrhée',
        generaux: '- Fièvre, sueurs',
        physiques: '- Myoclonies, hyperréflexie',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
