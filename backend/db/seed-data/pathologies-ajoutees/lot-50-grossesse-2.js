'use strict';

/**
 * Lot 50 (phase 2, grossesse, partie 2) — infections TORCH, grossesse de l'adolescente (suivi
 * obstétrical), grossesse après 40 ans, dysthyroïdies et grossesse, lupus et grossesse. Rédigé
 * par IA (OMS, Normes et directives SR, Harrison) : à valider.
 */

const GROS = { departement: 'gynecologie-obstetrique', specialite: 'Grossesse' };

module.exports = [
  // =================================================================== TORCH
  {
    ...GROS,
    slug: 'infections-torch-grossesse',
    nom: 'Infections TORCH (toxoplasmose, rubéole, CMV)',
    resume:
      'Infections maternelles transmissibles au fœtus avec risque de malformations et de séquelles : toxoplasmose (choriorétinite, hydrocéphalie, calcifications ; spiramycine si séroconversion), rubéole (cataracte, surdité, cardiopathie si infection avant 16 semaines ; prévention par la vaccination RR), CMV (première cause infectieuse de surdité et de retard congénitaux) ; aussi syphilis, VIH, herpès, varicelle, Zika ; prévention hygiéno-diététique, vaccination avant la grossesse, échographie morphologique, examen et suivi du nouveau-né.',
    definition:
      'Infections maternelles pendant la grossesse (Toxoplasmose, Others : syphilis, varicelle, VIH, Zika, parvovirus ; Rubéole, Cytomégalovirus, Herpès) pouvant entraîner une infection congénitale.',
    physiopathologie:
      '## Toxoplasmose\n- Viande peu cuite, crudités mal lavées, contact avec la terre ou les excréments de chat\n- Transmission croissante avec le terme, gravité décroissante : formes sévères au 1er trimestre\n\n## Rubéole\n- Infection avant 12 semaines : syndrome de rubéole congénitale dans 80–90 % des cas (cataracte, surdité, cardiopathie, microcéphalie)\n\n## CMV\n- Contact avec les urines et la salive des jeunes enfants ; primo-infection ou réinfection\n- Surdité, microcéphalie, retard, choriorétinite',
    diagnostic:
      '## Clinique maternelle\n- Souvent asymptomatique ou syndrome grippal, adénopathies, éruption (rubéole)\n\n## Examens\n- **Sérologies** IgG et IgM (toxoplasmose, rubéole selon disponibilité ; CMV non systématique), **syphilis** et **VIH** systématiques\n- IgM positives : confirmer (avidité, second prélèvement) dans un laboratoire de référence\n- **Échographie** : retard de croissance, microcéphalie, calcifications, hydrocéphalie, ventriculomégalie, cataracte, anasarque\n- Amniocentèse (PCR) en centre spécialisé\n\n## Nouveau-né\n- Examen, fond d’œil, audition, échographie transfontanellaire ; PCR CMV urinaire avant 21 jours',
    examens: [
      ['confirmation', 'serologies-torch', 'Toxoplasmose, rubéole, CMV.'],
      ['premiere_intention', 'serologie-syphilis', 'Syphilis.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'echographie-obstetricale', 'Signes fœtaux.'],
      ['etiologique', 'pcr-cmv', 'Nouveau-né.'],
      ['deuxieme_intention', 'echographie-transfontanellaire', 'Nouveau-né : calcifications.'],
    ],
    scores: [],
    differentiels: [
      ['syphilis-et-grossesse', 'Infection congénitale fréquente, traitable.'],
      ['vih-et-grossesse', 'Transmission mère-enfant.'],
      ['paludisme-et-grossesse', 'Fièvre, retard de croissance.'],
      ['rubeole', 'Fiche générale.'],
    ],
    etiologies:
      '## Agents\n- Toxoplasma gondii, virus de la rubéole, cytomégalovirus, herpès, varicelle, parvovirus B19, Zika, syphilis, VIH',
    principes: [
      [
        'Prévention',
        'Avant tout.',
        '- **Vaccination rubéole** (RR) des filles et des femmes avant la grossesse (vaccin vivant : contre-indiqué pendant la grossesse)\n- **Toxoplasmose** (femme non immunisée) : viande bien cuite, lavage des fruits et légumes, gants pour la terre, éviter la litière des chats\n- **CMV** : hygiène des mains après les changes et le contact avec la salive des jeunes enfants',
      ],
      [
        'Traitement',
        'Selon l’infection.',
        '- **Toxoplasmose** acquise pendant la grossesse : **spiramycine** 9 MUI/j jusqu’à l’accouchement ; infection fœtale prouvée : **pyriméthamine-sulfadiazine** + acide folinique (centre spécialisé)\n- Rubéole : pas de traitement ; information sur les risques selon le terme\n- CMV : pas de traitement standard pendant la grossesse ; **valganciclovir** chez le nouveau-né symptomatique (centre spécialisé)\n- Syphilis : benzathine pénicilline ; herpès : aciclovir en fin de grossesse',
      ],
      ['Nouveau-né', 'Dépister.', '- Examen clinique, audition, fond d’œil, suivi du développement'],
    ],
    molecules: [
      ['spiramycine', 'premiere', 'Toxoplasmose gravidique'],
      ['pyrimethamine', 'alternative', 'Infection fœtale à toxoplasme'],
      ['sulfadiazine', 'alternative', 'Infection fœtale à toxoplasme'],
      ['aciclovir', 'alternative', 'Herpès génital en fin de grossesse'],
      ['benzathine-benzylpenicilline', 'premiere', 'Syphilis'],
    ],
    complications: [
      {
        nom: 'Rubéole congénitale',
        fiche: 'cataracte-congenitale',
        description: 'Infection précoce.',
        traitement: '- Prise en charge des séquelles',
        clinique: '- Cataracte, surdité, cardiopathie',
        paraclinique: '',
      },
      {
        nom: 'CMV congénital',
        fiche: 'cmv-congenital',
        description: 'Transmission.',
        traitement: '- Valganciclovir chez le nouveau-né',
        clinique: '- Surdité, microcéphalie',
        paraclinique: '- PCR CMV',
      },
      {
        nom: 'Toxoplasmose congénitale',
        fiche: 'hydrocephalie-enfant',
        description: 'Infection fœtale.',
        traitement: '- Pyriméthamine-sulfadiazine',
        clinique: '- Choriorétinite, hydrocéphalie',
        paraclinique: '- Calcifications',
      },
      {
        nom: 'Mort fœtale',
        description: 'Infection sévère.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de l’agent et du terme : rubéole et toxoplasmose précoces plus graves ; prévention vaccinale très efficace pour la rubéole',
    urgences: [],
    symptomes: [
      ['Fièvre', 'occasionnel'],
      ['Éruption cutanée', 'occasionnel'],
      ['Adénopathies', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Conseils de prévention, dépistage syphilis et VIH, vaccination RR',
        '- Éruption fébrile pendant la grossesse',
      ],
      hgr: ['- Sérologies, échographie', ''],
      tert: ['- Diagnostic prénatal, traitement spécialisé', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Toxoplasmose gravidique',
        type: 'commune',
        description: 'Séroconversion.',
        terrain: '- Femme non immunisée',
        fonctionnels: '',
        generaux: '- Fièvre modérée',
        physiques: '- Adénopathies',
        paraclinique: '- IgM et IgG de faible avidité',
        etiologies: '- Toxoplasma gondii',
        syndromes: [],
      },
      {
        nom: 'Rubéole du 1er trimestre',
        type: 'gravite',
        description: 'Risque malformatif majeur.',
        terrain: '- Femme non vaccinée',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Éruption, adénopathies',
        paraclinique: '- IgM positives',
        etiologies: '- Virus de la rubéole',
        syndromes: [],
      },
      {
        nom: 'Infection à CMV',
        type: 'etiologique',
        description: 'Souvent silencieuse.',
        terrain: '- Contact avec de jeunes enfants',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Signes échographiques',
        etiologies: '- Cytomégalovirus',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Grossesse adolescente (suivi obstétrical)
  {
    ...GROS,
    slug: 'grossesse-adolescente-suivi-obstetrical',
    nom: 'Grossesse de l’adolescente (suivi obstétrical)',
    resume:
      'Volet obstétrical de la grossesse chez l’adolescente : CPN précoces (au moins 8 contacts), datation par échographie, prévention et dépistage de l’anémie, du paludisme (TPI), de la pré-éclampsie (aspirine à faible dose si facteurs de risque, calcium), des IST ; surveillance de la croissance fœtale ; accouchement en structure disposant d’une césarienne (disproportion fœto-pelvienne, travail prolongé, fistule) ; partogramme rigoureux ; gestion active de la délivrance ; contraception du post-partum ; voir aussi la fiche « Grossesse de l’adolescente » (aspects psychosociaux).',
    definition:
      'Organisation de la surveillance prénatale, de l’accouchement et du post-partum chez une adolescente enceinte (10–19 ans), à risque obstétrical élevé.',
    physiopathologie:
      '## Risques obstétricaux\n- Bassin immature (surtout < 15 ans) : **disproportion fœto-pelvienne**, **travail prolongé**, **fistule obstétricale**, rupture utérine\n- **Pré-éclampsie/éclampsie**, **anémie**, paludisme placentaire (primipares), IST\n- **Prématurité**, petit poids de naissance, mortinatalité\n- Consultation tardive, CPN incomplètes, accouchement à domicile',
    diagnostic:
      '## Suivi prénatal\n- **Échographie** avant 24 semaines (datation, grossesse multiple)\n- À chaque contact : tension, protéinurie, hauteur utérine, poids, mouvements fœtaux\n- Dépistages : **VIH**, **syphilis**, hépatite B, **anémie**, paludisme, infection urinaire\n- Évaluation du bassin en fin de grossesse (taille < 1,50 m, bassin rétréci)\n\n## Examens\n- NFS, groupage-rhésus, bandelette urinaire, TDR VIH et syphilis, AgHBs, échographie',
    examens: [
      ['premiere_intention', 'echographie-obstetricale', 'Datation, croissance.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'groupage-rai', 'Rhésus.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'serologie-syphilis', 'Syphilis.'],
      ['premiere_intention', 'aghbs', 'Hépatite B.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-adolescente', 'Volet psychosocial et services adaptés aux adolescents.'],
      ['consultation-prenatale', 'Suivi prénatal général.'],
    ],
    etiologies:
      '## Facteurs de risque obstétrical\n- Âge < 15 ans, petite taille, primiparité, malnutrition, VIH',
    principes: [
      [
        'CPN renforcées',
        'Prévenir.',
        '- **Au moins 8 contacts** (OMS), dont le premier avant 12 semaines\n- **Fer-acide folique**, **TPI** (sulfadoxine-pyriméthamine dès 13 semaines), moustiquaire, déparasitage (2e trimestre), vaccination antitétanique\n- **Calcium** 1,5–2 g/j si apports faibles ; **aspirine** 75–150 mg/j dès 12 semaines si facteurs de risque de pré-éclampsie (dont la primiparité associée à un autre facteur)\n- Conseils nutritionnels, signes de danger, plan d’accouchement',
      ],
      [
        'Accouchement',
        'En structure équipée.',
        '- Accouchement dans un établissement capable de réaliser une **césarienne** (adolescente < 15 ans, petite taille)\n- **Partogramme** rigoureux, intervention au franchissement de la ligne d’action\n- **Gestion active de la délivrance** (ocytocine), sondage vésical après travail prolongé (prévention des fistules)',
      ],
      [
        'Post-partum',
        'Suivre.',
        '- Consultations postnatales (J1, J3, J7–14, 6 semaines), allaitement, **contraception** (implant avant la sortie)\n- Dépistage de la dépression du post-partum, soutien au retour à l’école',
      ],
    ],
    molecules: [
      ['fumarate-ferreux-fer', 'premiere', 'Supplémentation'],
      ['acide-folique', 'premiere', 'Supplémentation'],
      ['sulfadoxine', 'premiere', 'TPI (sulfadoxine-pyriméthamine)'],
      ['acide-acetylsalicylique', 'alternative', 'Prévention de la pré-éclampsie'],
      ['calcium', 'adjuvant', 'Prévention de la pré-éclampsie'],
      ['ocytocine', 'premiere', 'Gestion active de la délivrance'],
      ['etonogestrel', 'alternative', 'Contraception du post-partum'],
    ],
    complications: [
      {
        nom: 'Disproportion fœto-pelvienne',
        fiche: 'dystocie-disproportion-foeto-pelvienne',
        description: 'Bassin immature.',
        traitement: '- Césarienne',
        clinique: '- Travail prolongé',
        paraclinique: '- Partogramme',
      },
      {
        nom: 'Fistule obstétricale',
        fiche: 'fistules-obstetricales',
        description: 'Travail prolongé.',
        traitement: '- Réparation chirurgicale',
        clinique: '- Fuites d’urine',
        paraclinique: '',
      },
      {
        nom: 'Éclampsie',
        fiche: 'hypertension-gravidique',
        description: 'Plus fréquente.',
        traitement: '- Sulfate de magnésium',
        clinique: '- Convulsions',
        paraclinique: '- Protéinurie',
      },
    ],
    evolution:
      '## Pronostic\n- Risques nettement réduits par le suivi prénatal complet et l’accouchement en structure',
    urgences: ['eclampsie'],
    symptomes: [
      ['Aménorrhée', 'tres_frequent'],
      ['Œdèmes', 'occasionnel'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- CPN, dépistages, plan d’accouchement, référence', '- HTA, saignements, travail prolongé'],
      hgr: ['- Accouchement, césarienne', ''],
      tert: ['', ''],
    },
    alertes: { eclampsie: 'Adolescente enceinte avec céphalées, troubles visuels ou convulsions' },
    formes: [
      {
        nom: 'Suivi de la grossesse adolescente',
        type: 'commune',
        description: 'CPN renforcées.',
        terrain: '- Adolescente enceinte',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Adolescente de moins de 15 ans',
        type: 'gravite',
        description: 'Risque obstétrical maximal.',
        terrain: '- < 15 ans, petite taille',
        fonctionnels: '',
        generaux: '',
        physiques: '- Bassin étroit',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Grossesse après 40 ans
  {
    ...GROS,
    slug: 'grossesse-apres-40-ans',
    nom: 'Grossesse après 40 ans',
    resume:
      'Grossesse à risque, fréquente chez les grandes multipares en RDC : risques accrus d’avortement spontané, d’anomalies chromosomiques (trisomie 21), d’HTA et de pré-éclampsie, de diabète gestationnel, de placenta prævia, de présentation anormale, d’hémorragie du post-partum (grande multiparité), de rupture utérine, de mort fœtale ; CPN renforcées, dépistage du diabète et de l’HTA, aspirine si facteurs de risque, échographie morphologique, accouchement en structure, gestion active de la délivrance, contraception ou ligature après l’accouchement selon le souhait.',
    definition:
      'Grossesse survenant chez une femme de 40 ans ou plus, souvent associée à une grande multiparité, avec des risques maternels et fœtaux accrus.',
    physiopathologie:
      '## Risques liés à l’âge\n- **Anomalies chromosomiques** (trisomie 21 : ≈ 1/100 à 40 ans), avortements spontanés\n- **HTA chronique**, **pré-éclampsie**, **diabète gestationnel**, obésité, fibromes\n\n## Risques liés à la grande multiparité (≥ 5)\n- **Hémorragie du post-partum** (atonie), **placenta prævia**, **présentations anormales**, **rupture utérine**, anémie',
    diagnostic:
      '## Évaluation\n- Antécédents obstétricaux (nombre d’accouchements, césariennes, hémorragies), maladies chroniques (HTA, diabète, drépanocytose)\n- **Tension artérielle**, **glycémie** (HGPO 24–28 semaines, ou plus tôt si facteurs de risque), protéinurie, NFS\n- **Échographie** : datation, morphologie (18–22 semaines), placenta, présentation',
    examens: [
      ['premiere_intention', 'echographie-obstetricale', 'Morphologie, placenta.'],
      ['premiere_intention', 'hgpo-75g', 'Diabète gestationnel.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'groupage-rai', 'Hémorragie.'],
    ],
    scores: [],
    differentiels: [
      ['consultation-prenatale', 'Suivi prénatal standard.'],
      ['hypertension-gravidique', 'HTA de la grossesse.'],
      ['diabete-gestationnel', 'Hyperglycémie.'],
    ],
    etiologies: '## Facteurs\n- Âge maternel, grande multiparité, maladies chroniques',
    principes: [
      [
        'Suivi prénatal',
        'Dépister tôt.',
        '- CPN renforcées, tension et protéinurie à chaque visite, dépistage du diabète\n- **Aspirine** 75–150 mg/j dès 12 semaines si facteurs de risque de pré-éclampsie (âge ≥ 40 ans en est un), **calcium**\n- Fer-acide folique, TPI, échographie morphologique ; information sur le risque chromosomique',
      ],
      [
        'Accouchement',
        'En structure.',
        '- Accouchement en hôpital (risque hémorragique, présentations anormales)\n- **Gestion active de la délivrance**, voie veineuse, sang disponible, surveillance post-partum rapprochée\n- Grande multipare : prudence avec l’ocytocine pendant le travail (rupture utérine)',
      ],
      [
        'Après l’accouchement',
        'Planifier.',
        '- Contraception efficace ou **ligature des trompes** si souhaitée (consentement éclairé)',
      ],
    ],
    molecules: [
      ['acide-acetylsalicylique', 'premiere', 'Prévention de la pré-éclampsie'],
      ['calcium', 'adjuvant', 'Prévention de la pré-éclampsie'],
      ['ocytocine', 'premiere', 'Gestion active de la délivrance'],
      ['misoprostol', 'alternative', 'Prévention de l’hémorragie si ocytocine indisponible'],
      ['fumarate-ferreux-fer', 'premiere', 'Supplémentation'],
    ],
    complications: [
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Grande multiparité.',
        traitement: '- Utérotoniques, réanimation',
        clinique: '- Saignement',
        paraclinique: '',
      },
      {
        nom: 'Pré-éclampsie',
        fiche: 'pre-eclampsie-severe',
        description: 'Âge.',
        traitement: '- Sulfate de magnésium, accouchement',
        clinique: '- HTA, céphalées',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Trisomie 21',
        fiche: 'trisomie-21',
        description: 'Âge maternel.',
        traitement: '- Accompagnement',
        clinique: '',
        paraclinique: '- Échographie, caryotype',
      },
      {
        nom: 'Rupture utérine',
        fiche: 'rupture-uterine',
        description: 'Grande multiparité, ocytocine.',
        traitement: '- Laparotomie',
        clinique: '- Douleur, choc',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec un suivi adapté ; mortalité maternelle accrue chez les grandes multipares sans accouchement assisté',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Aménorrhée', 'tres_frequent'],
      ['Œdèmes', 'occasionnel'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- CPN, dépistages, plan d’accouchement en hôpital', '- HTA, saignements'],
      hgr: ['- Accouchement, prise en charge des complications', ''],
      tert: ['', ''],
    },
    alertes: {
      'hemorragie-du-post-partum-urgence': 'Grande multipare avec saignement abondant après l’accouchement',
    },
    formes: [
      {
        nom: 'Grossesse tardive',
        type: 'commune',
        description: '≥ 40 ans.',
        terrain: '- Femme ≥ 40 ans',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Grande multipare âgée',
        type: 'gravite',
        description: 'Risque hémorragique.',
        terrain: '- ≥ 5 accouchements',
        fonctionnels: '',
        generaux: '',
        physiques: '- Utérus distendu',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dysthyroïdies
  {
    ...GROS,
    slug: 'dysthyroidies-et-grossesse',
    nom: 'Dysthyroïdies et grossesse',
    resume:
      'Hypothyroïdie (carence iodée, Hashimoto, après thyroïdectomie) : risque de fausse couche, pré-éclampsie, prématurité et retard du développement de l’enfant ; lévothyroxine en augmentant la dose de 25–30 % dès le début de grossesse, TSH < 2,5 mUI/L ; hyperthyroïdie (Basedow) : propylthiouracile au 1er trimestre puis carbimazole, à la dose minimale, propranolol si besoin ; distinguer de la thyrotoxicose gestationnelle transitoire (hyperemesis) ; iode 250 µg/j chez la femme enceinte ; surveiller le nouveau-né.',
    definition:
      'Hypothyroïdie ou hyperthyroïdie préexistante ou découverte pendant la grossesse, nécessitant un ajustement thérapeutique pour protéger la mère et le développement fœtal.',
    physiopathologie:
      '## Physiologie\n- Besoins en hormones thyroïdiennes et en **iode** augmentés ; l’hCG stimule la thyroïde au 1er trimestre (TSH basse physiologique)\n- Le fœtus dépend des hormones maternelles jusqu’à 12–16 semaines (développement cérébral)\n\n## Hypothyroïdie\n- **Carence iodée** (zones d’endémie), thyroïdite de Hashimoto, après chirurgie ou iode radioactif\n\n## Hyperthyroïdie\n- **Maladie de Basedow** (anticorps pouvant passer chez le fœtus : hyperthyroïdie fœtale et néonatale), goitre nodulaire\n- **Thyrotoxicose gestationnelle transitoire** (hCG, hyperemesis) : sans goitre ni orbitopathie, résolutive vers 16–20 semaines',
    diagnostic:
      '## Clinique\n- Hypothyroïdie : fatigue, prise de poids, constipation, frilosité, goitre (souvent peu spécifique)\n- Hyperthyroïdie : tachycardie, tremblements, perte de poids, goitre, exophtalmie, vomissements\n\n## Examens\n- **TSH**, **T4 libre** (normes adaptées au trimestre)\n- Anticorps anti-récepteur de la TSH (Basedow), échographie thyroïdienne\n- Échographie fœtale (croissance, goitre, tachycardie fœtale) dans la maladie de Basedow',
    examens: [
      ['confirmation', 'tsh', 'Normes du trimestre.'],
      ['confirmation', 't4-libre', 'Normes du trimestre.'],
      ['deuxieme_intention', 'echographie-thyroidienne', 'Goitre, nodules.'],
      ['premiere_intention', 'echographie-obstetricale', 'Croissance, goitre fœtal.'],
      ['premiere_intention', 'nfs', 'Sous antithyroïdiens (agranulocytose).'],
    ],
    scores: [],
    differentiels: [
      ['hyperemesis-gravidarum', 'Thyrotoxicose gestationnelle transitoire.'],
      ['hyperthyroidie-basedow', 'Fiche générale.'],
      ['hypothyroidie-adulte', 'Fiche générale.'],
      ['anemie-de-la-grossesse', 'Fatigue, tachycardie.'],
    ],
    etiologies: '## Causes\n- Carence iodée, thyroïdite auto-immune, maladie de Basedow, goitre nodulaire',
    principes: [
      [
        'Hypothyroïdie',
        'Substituer.',
        '- Femme déjà traitée : **augmenter la lévothyroxine de 25–30 %** dès le diagnostic de grossesse\n- Hypothyroïdie découverte : lévothyroxine 1,6–2 µg/kg/j\n- Objectif **TSH < 2,5 mUI/L** ; contrôle toutes les 4–6 semaines ; retour à la dose antérieure après l’accouchement\n- Prendre à distance du fer et du calcium',
      ],
      [
        'Hyperthyroïdie',
        'Contrôler à dose minimale.',
        '- **Propylthiouracile** 50–150 mg/j au **1er trimestre**, puis **carbimazole** 5–15 mg/j (moins hépatotoxique) ; objectif T4 libre à la limite haute de la normale\n- **Propranolol** 10–40 mg 3 fois par jour sur une courte durée si symptômes\n- Thyrotoxicose gestationnelle : traitement symptomatique (pas d’antithyroïdien)\n- Surveillance de la croissance fœtale ; examen du nouveau-né (hyperthyroïdie néonatale)',
      ],
      [
        'Prévention',
        'Iode.',
        '- **Iode** 250 µg/j chez la femme enceinte et allaitante dans les zones de carence ; sel iodé',
      ],
    ],
    molecules: [
      ['levothyroxine', 'premiere', 'Hypothyroïdie'],
      ['propylthiouracile', 'premiere', 'Hyperthyroïdie au 1er trimestre'],
      ['carbimazole', 'premiere', 'Hyperthyroïdie après le 1er trimestre'],
      ['propranolol', 'adjuvant', 'Symptômes adrénergiques'],
      ['iode', 'adjuvant', 'Prévention de la carence'],
    ],
    complications: [
      {
        nom: 'Retard du développement de l’enfant',
        fiche: 'hypothyroidie-congenitale',
        description: 'Hypothyroïdie maternelle non traitée.',
        traitement: '- Substitution précoce',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Crise aiguë thyrotoxique',
        fiche: 'hyperthyroidie-basedow',
        description: 'Basedow non contrôlé, accouchement, infection.',
        traitement: '- Antithyroïdiens, bêtabloquants, corticoïdes',
        clinique: '- Fièvre, tachycardie, agitation',
        paraclinique: '',
      },
      {
        nom: 'Pré-éclampsie et prématurité',
        fiche: 'hypertension-gravidique',
        description: 'Dysthyroïdie non contrôlée.',
        traitement: '- Contrôle hormonal',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si la fonction thyroïdienne est contrôlée tôt ; thyroïdite du post-partum possible',
    urgences: [],
    symptomes: [
      ['Asthénie', 'frequent'],
      ['Palpitations', 'occasionnel'],
      ['Tuméfaction cervicale', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Repérer goitre et signes, iode, orientation', '- Tachycardie, goitre, femme déjà traitée'],
      hgr: ['- TSH, T4 libre, ajustement du traitement', ''],
      tert: ['- Endocrinologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hypothyroïdie et grossesse',
        type: 'commune',
        description: 'Substitution.',
        terrain: '- Zone de carence iodée, Hashimoto',
        fonctionnels: '- Fatigue',
        generaux: '',
        physiques: '- Goitre possible',
        paraclinique: '- TSH élevée',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Maladie de Basedow et grossesse',
        type: 'gravite',
        description: 'Risque fœtal.',
        terrain: '',
        fonctionnels: '- Palpitations',
        generaux: '- Perte de poids',
        physiques: '- Goitre, exophtalmie',
        paraclinique: '- TSH effondrée, anticorps anti-RTSH',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Lupus et grossesse
  {
    ...GROS,
    slug: 'lupus-et-grossesse',
    nom: 'Lupus et grossesse',
    resume:
      'Grossesse à haut risque chez la femme lupique : poussées (rénales surtout), pré-éclampsie, fausses couches, mort fœtale, prématurité, retard de croissance ; syndrome des antiphospholipides (thromboses, pertes fœtales) ; lupus néonatal et bloc auriculo-ventriculaire congénital (anticorps anti-SSA) ; programmer la grossesse en période de rémission ≥ 6 mois ; poursuivre l’hydroxychloroquine, arrêter les médicaments tératogènes (méthotrexate, mycophénolate, cyclophosphamide, IEC) ; aspirine à faible dose, héparine si antiphospholipides ; suivi conjoint.',
    definition:
      'Grossesse chez une femme atteinte de lupus érythémateux systémique, avec ou sans syndrome des antiphospholipides.',
    physiopathologie:
      '## Risques maternels\n- **Poussées** lupiques (néphrite surtout), **pré-éclampsie** (difficile à distinguer d’une néphrite lupique), thromboses\n\n## Risques fœtaux\n- **Syndrome des antiphospholipides** : fausses couches répétées, mort fœtale, insuffisance placentaire\n- **Anticorps anti-SSA/anti-SSB** : **lupus néonatal** (éruption, cytopénies) et **bloc auriculo-ventriculaire congénital** (1–2 %)\n- Prématurité, retard de croissance',
    diagnostic:
      '## Bilan préconceptionnel et en début de grossesse\n- Activité du lupus (clinique, protéinurie, créatinine, complément, anti-ADN), tension\n- **Anticorps antiphospholipides**, **anti-SSA/SSB**\n- NFS, plaquettes, bandelette urinaire\n\n## Surveillance\n- Tension et **protéinurie** à chaque consultation, créatinine, complément\n- Échographie : croissance, Doppler ombilical ; auscultation du rythme cardiaque fœtal (16–26 semaines) si anti-SSA\n\n## Poussée ou pré-éclampsie ?\n- Néphrite lupique : sédiment actif, complément bas, anti-ADN élevés ; pré-éclampsie : après 20 semaines, HTA, thrombopénie, cytolyse',
    examens: [
      ['premiere_intention', 'anticorps-antinucleaires', 'Diagnostic du lupus.'],
      ['premiere_intention', 'anticorps-antiphospholipides', 'Syndrome des antiphospholipides.'],
      ['premiere_intention', 'complement-c3-c4', 'Activité.'],
      ['gravite', 'proteinurie', 'Néphrite, pré-éclampsie.'],
      ['gravite', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'nfs', 'Cytopénies.'],
      ['premiere_intention', 'echographie-obstetricale', 'Croissance, Doppler.'],
      ['premiere_intention', 'ecg', 'Nouveau-né : bloc auriculo-ventriculaire.'],
    ],
    scores: [],
    differentiels: [
      ['pre-eclampsie-severe', 'HTA et protéinurie après 20 semaines.'],
      ['lupus-erythemateux-systemique', 'Fiche générale.'],
      ['glomerulonephrites-aigues-adulte', 'Autres glomérulopathies.'],
      ['purpura-thrombopenique-immunologique', 'Thrombopénie isolée.'],
    ],
    etiologies: '## Terrain\n- Femme lupique, avec ou sans syndrome des antiphospholipides',
    principes: [
      [
        'Avant la grossesse',
        'Programmer.',
        '- Grossesse en **rémission depuis au moins 6 mois**, contraception efficace sinon\n- **Remplacer** méthotrexate, mycophénolate, cyclophosphamide, IEC par des traitements compatibles (azathioprine, hydroxychloroquine, nifédipine, méthyldopa)',
      ],
      [
        'Pendant la grossesse',
        'Prévenir et surveiller.',
        '- **Poursuivre l’hydroxychloroquine** (réduit les poussées et le risque de bloc congénital)\n- **Aspirine** 75–150 mg/j dès 12 semaines (prévention de la pré-éclampsie)\n- **Syndrome des antiphospholipides** : aspirine + **héparine** (préventive, curative si antécédent de thrombose)\n- Poussée : **prednisolone** (dose minimale), azathioprine si nécessaire\n- Suivi conjoint obstétrique-médecine interne, accouchement en hôpital',
      ],
      [
        'Post-partum',
        'Surveiller.',
        '- Risque de poussée et de thrombose ; héparine 6 semaines si antiphospholipides\n- Nouveau-né : ECG, NFS, examen de la peau si anti-SSA ; allaitement compatible avec l’hydroxychloroquine et la prednisolone',
      ],
    ],
    molecules: [
      ['hydroxychloroquine', 'premiere', 'Traitement de fond'],
      ['acide-acetylsalicylique', 'premiere', 'Prévention de la pré-éclampsie'],
      ['enoxaparine', 'premiere', 'Syndrome des antiphospholipides'],
      ['prednisolone', 'alternative', 'Poussées'],
      ['azathioprine', 'alternative', 'Traitement d’épargne cortisonique'],
      ['nifedipine', 'adjuvant', 'HTA'],
    ],
    complications: [
      {
        nom: 'Pré-éclampsie',
        fiche: 'pre-eclampsie-severe',
        description: 'Risque accru.',
        traitement: '- Sulfate de magnésium, accouchement',
        clinique: '- HTA, céphalées',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Pertes fœtales',
        description: 'Antiphospholipides.',
        traitement: '- Aspirine, héparine',
        clinique: '- Fausses couches répétées',
        paraclinique: '',
      },
      {
        nom: 'Bloc auriculo-ventriculaire congénital',
        fiche: 'troubles-du-rythme-enfant',
        description: 'Anticorps anti-SSA.',
        traitement: '- Stimulateur cardiaque',
        clinique: '- Bradycardie fœtale',
        paraclinique: '- ECG',
      },
      {
        nom: 'Néphrite lupique',
        fiche: 'lupus-erythemateux-systemique',
        description: 'Poussée.',
        traitement: '- Corticoïdes, azathioprine',
        clinique: '- Œdèmes, HTA',
        paraclinique: '- Protéinurie, complément',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si la grossesse est programmée en rémission ; risque élevé en cas de néphrite active ou de syndrome des antiphospholipides',
    urgences: ['eclampsie'],
    symptomes: [
      ['Arthralgies', 'frequent'],
      ['Œdèmes', 'occasionnel'],
      ['Éruption cutanée', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Repérer, orientation précoce', '- Femme lupique enceinte'],
      hgr: ['- Suivi, aspirine, héparine', ''],
      tert: ['- Médecine interne, grossesse à haut risque', ''],
    },
    alertes: { eclampsie: 'Femme lupique enceinte avec HTA, céphalées ou convulsions' },
    formes: [
      {
        nom: 'Lupus en rémission',
        type: 'commune',
        description: 'Grossesse programmée.',
        terrain: '- Femme lupique',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Complément normal',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Lupus avec syndrome des antiphospholipides',
        type: 'gravite',
        description: 'Risque thrombotique et fœtal.',
        terrain: '- Antécédent de thrombose ou de pertes fœtales',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Anticorps antiphospholipides',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
