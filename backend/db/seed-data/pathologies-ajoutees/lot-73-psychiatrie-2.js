'use strict';

/**
 * Lot 73 (phase 2, psychiatrie) — trouble de stress aigu, troubles psychiques de l'épilepsie, troubles
 * psychiques des maladies chroniques, troubles des apprentissages, dépression de l'adolescent. Rédigé
 * par IA (mhGAP, OMS, ILAE, Nelson) : à valider.
 */

const PSY = { departement: 'neuropsychiatrie', specialite: 'Psychiatrie' };
const PTR = { departement: 'neuropsychiatrie', specialite: 'Psychotraumatologie' };
const PEDOPSY = { departement: 'neuropsychiatrie', specialite: 'Psychiatrie de l’enfant et de l’adolescent' };

module.exports = [
  // =================================================================== Trouble de stress aigu
  {
    ...PTR,
    slug: 'trouble-de-stress-aigu',
    nom: 'Trouble de stress aigu',
    resume:
      'Réaction intense survenant dans les jours suivant un événement traumatique (violences sexuelles, attaques armées, accidents, catastrophes, mort violente d’un proche, enlèvement), très fréquente dans l’Est de la RDC : reviviscences (souvenirs intrusifs, cauchemars, flash-back), évitement, symptômes dissociatifs (sidération, sentiment d’irréalité, amnésie), hypervigilance, sursauts, insomnie, irritabilité, troubles de la concentration, durant de 3 jours à 1 mois ; la plupart des réactions se résolvent spontanément ; premiers secours psychologiques (sécurité, besoins de base, écoute sans forcer le récit, reconnexion avec les proches), prise en charge médicale et juridique des violences (prophylaxie post-exposition au VIH, contraception d’urgence), éviter les benzodiazépines ; suivi : orientation vers une TCC centrée sur le trauma si les symptômes persistent (stress post-traumatique).',
    definition:
      'Ensemble de symptômes d’intrusion, d’humeur négative, de dissociation, d’évitement et d’hyperéveil apparaissant après un événement traumatique et durant de 3 jours à 1 mois.',
    physiopathologie:
      '## Mécanismes\n- Réaction de stress (axe corticotrope, système adrénergique), encodage intense du souvenir traumatique\n- Réaction normale à une situation anormale chez la majorité ; évolution vers un **stress post-traumatique** chez une partie\n\n## Facteurs de risque d’évolution défavorable\n- Gravité et répétition des traumatismes, dissociation péritraumatique, blessures, perte de proches, absence de soutien, antécédents psychiatriques, déplacement',
    diagnostic:
      '## Clinique (3 jours à 1 mois après l’événement)\n- **Reviviscences** : souvenirs intrusifs, **cauchemars**, flash-back, détresse aux rappels\n- **Dissociation** : sidération, sentiment d’irréalité, **amnésie** d’une partie de l’événement\n- **Évitement** des lieux, personnes, pensées liés à l’événement\n- **Hyperéveil** : insomnie, irritabilité, hypervigilance, sursauts, troubles de la concentration\n- Humeur négative, culpabilité, honte\n\n## Évaluation\n- Besoins immédiats (sécurité, abri, nourriture), **blessures**, violences sexuelles (délai pour la PPE et la contraception d’urgence)\n- **Risque suicidaire**, consommation d’alcool',
    examens: [['etiologique', 'tdr-vih', 'Violences sexuelles (statut initial avant PPE).']],
    scores: [],
    differentiels: [
      ['etat-de-stress-post-traumatique', 'Symptômes au-delà de 1 mois.'],
      ['trouble-de-l-adaptation', 'Stress non traumatique.'],
      ['traumatisme-cranien-leger', 'Amnésie et confusion post-traumatiques.'],
      ['troubles-dissociatifs-et-de-conversion', 'Dissociation durable.'],
      ['depression', 'Humeur dépressive au premier plan.'],
    ],
    etiologies:
      '## Événements\n- Violences sexuelles, attaques armées, accidents, catastrophes, deuils violents, enlèvements',
    principes: [
      [
        'Premiers secours psychologiques',
        'OMS.',
        '- **Observer** (sécurité, besoins urgents), **écouter** sans forcer le récit, **relier** aux proches, aux services et aux ressources\n- Information sur les réactions normales au stress, techniques de respiration et de relaxation\n- Ne pas imposer de « débriefing » psychologique',
      ],
      [
        'Soins associés',
        'Médicaux et juridiques.',
        '- Soins des blessures ; violences sexuelles : **PPE VIH** dans les 72 h, **contraception d’urgence**, prévention des IST, vaccination hépatite B, certificat médical\n- Protection, orientation sociale et juridique',
      ],
      [
        'Suivi',
        'Prévenir la chronicisation.',
        '- Réévaluation à 2–4 semaines ; **TCC centrée sur le trauma** ou EMDR si symptômes persistants ou sévères\n- Insomnie sévère : mesures d’hygiène, hydroxyzine ou zopiclone de très courte durée ; **éviter les benzodiazépines**',
      ],
    ],
    molecules: [
      ['hydroxyzine', 'alternative', 'Anxiété, insomnie (courte durée)'],
      ['zopiclone', 'alternative', 'Insomnie sévère (quelques jours)'],
      ['propranolol', 'alternative', 'Hyperéveil adrénergique'],
    ],
    complications: [
      {
        nom: 'État de stress post-traumatique',
        fiche: 'etat-de-stress-post-traumatique',
        description: 'Persistance > 1 mois.',
        traitement: '- TCC centrée sur le trauma',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression et suicide',
        fiche: 'risque-suicidaire',
        description: 'Après violences.',
        traitement: '- Évaluation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Abus d’alcool',
        fiche: 'trouble-de-l-usage-de-l-alcool',
        description: 'Automédication.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Résolution spontanée chez la majorité ; évolution vers un stress post-traumatique chez une minorité, plus fréquente après violences interpersonnelles',
    urgences: [],
    symptomes: [
      ['Anxiété', 'tres_frequent'],
      ['Troubles du sommeil', 'tres_frequent'],
      ['Irritabilité', 'frequent'],
      ['Amnésie', 'occasionnel'],
      ['Troubles de la concentration', 'frequent'],
      ['Humeur dépressive', 'frequent'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Premiers secours psychologiques, PPE, contraception d’urgence, orientation', ''],
      hgr: ['- Suivi psychologique, prise en charge médico-légale', ''],
      tert: ['- Psychotraumatologie spécialisée', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Après violences sexuelles',
        type: 'commune',
        description: 'Prise en charge globale.',
        terrain: '- Femme, adolescente, enfant',
        fonctionnels: '- Reviviscences, honte',
        generaux: '',
        physiques: '- Lésions possibles',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Avec dissociation marquée',
        type: 'gravite',
        description: 'Risque d’évolution.',
        terrain: '',
        fonctionnels: '- Sidération, amnésie',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Chez l’enfant',
        type: 'terrain',
        description: 'Régression, jeux répétitifs.',
        terrain: '- Enfant',
        fonctionnels: '- Cauchemars, énurésie, agrippement',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles psychiques de l'épilepsie
  {
    ...PSY,
    slug: 'troubles-psychiques-de-l-epilepsie',
    nom: 'Troubles psychiques de l’épilepsie',
    resume:
      'Troubles psychiatriques très fréquents chez les personnes épileptiques (un sur trois) : dépression et anxiété (stigmatisation, exclusion scolaire et sociale, peur des crises), risque suicidaire accru, psychoses (post-critiques après une salve de crises, interictales chroniques, alternantes lors du contrôle brutal des crises), troubles du comportement et confusion post-critique, troubles cognitifs, effets psychiatriques des antiépileptiques (phénobarbital : dépression, hyperactivité de l’enfant ; lévétiracétam : irritabilité, agressivité ; topiramate : troubles cognitifs ; valproate et carbamazépine : stabilisateurs de l’humeur) ; dépistage systématique ; traitement : ISRS (sertraline, sans abaisser le seuil épileptogène aux doses usuelles), antipsychotiques à faible dose (rispéridone ; éviter la chlorpromazine et la clozapine), adaptation des antiépileptiques, lutte contre la stigmatisation (l’épilepsie n’est ni contagieuse ni une possession).',
    definition:
      'Troubles mentaux survenant chez les personnes épileptiques, liés à la maladie épileptique, aux crises, aux antiépileptiques ou au contexte psychosocial.',
    physiopathologie:
      '## Mécanismes\n- **Neurobiologiques** communs (lésions temporales et frontales, réseaux limbiques)\n- **Crises** : manifestations péricritiques (aura anxieuse, confusion et psychose post-critiques)\n- **Antiépileptiques** : effets psychotropes négatifs (phénobarbital, lévétiracétam, topiramate, vigabatrin) ou positifs (valproate, carbamazépine, lamotrigine)\n- **Psychosociaux** : **stigmatisation**, exclusion scolaire, chômage, croyances (possession, contagion), isolement',
    diagnostic:
      '## Formes\n- **Dépression** et **anxiété** (les plus fréquentes), idées suicidaires\n- **Psychose post-critique** : après une série de crises, intervalle lucide de 1–3 jours, puis délire et hallucinations pendant quelques jours\n- **Psychose interictale** chronique (épilepsie temporale ancienne)\n- **Troubles du comportement** de l’enfant (hyperactivité sous phénobarbital), irritabilité sous lévétiracétam\n- Confusion post-critique, état de mal non convulsif (à évoquer devant une confusion prolongée)\n\n## Évaluation\n- Lien temporel avec les crises et les changements de traitement\n- **Risque suicidaire**, observance, EEG si confusion prolongée',
    examens: [
      ['deuxieme_intention', 'eeg', 'État de mal non convulsif, lien avec les crises.'],
      ['etiologique', 'ionogramme', 'Hyponatrémie (carbamazépine).'],
      ['etiologique', 'bilan-hepatique', 'Tolérance des antiépileptiques.'],
    ],
    scores: [],
    differentiels: [
      ['crises-non-epileptiques-psychogenes', 'Crises psychogènes associées.'],
      ['schizophrenie', 'Psychose primaire.'],
      ['depression', 'Dépression sans épilepsie.'],
      ['troubles-psychiatriques-d-origine-organique', 'Autres causes organiques.'],
      ['etat-de-mal-epileptique', 'Confusion par état de mal non convulsif.'],
    ],
    etiologies: '## Causes\n- Épilepsie (temporale surtout), crises, antiépileptiques, stigmatisation',
    principes: [
      [
        'Dépression et anxiété',
        'Traiter.',
        '- Interventions psychologiques, soutien, lutte contre la stigmatisation\n- **Sertraline** ou fluoxétine (peu d’effet sur le seuil épileptogène) ; éviter bupropion, clomipramine à forte dose\n- **Évaluer le risque suicidaire**',
      ],
      [
        'Psychoses',
        'Prudence.',
        '- Post-critique : contrôle des crises, **rispéridone** ou halopéridol à faible dose pendant quelques jours à semaines\n- Interictale : rispéridone, olanzapine ; éviter chlorpromazine et clozapine (seuil épileptogène)\n- Penser aux interactions (carbamazépine diminue les taux des antipsychotiques)',
      ],
      [
        'Antiépileptiques',
        'Adapter.',
        '- Remplacer un antiépileptique à effet psychiatrique (phénobarbital chez l’enfant hyperactif, lévétiracétam si irritabilité)\n- Valproate, carbamazépine ou lamotrigine si trouble de l’humeur associé ; ne pas arrêter brutalement\n- Information des familles et de l’école',
      ],
    ],
    molecules: [
      ['sertraline', 'premiere', 'Dépression, anxiété'],
      ['fluoxetine', 'alternative', 'Dépression'],
      ['risperidone', 'premiere', 'Psychose'],
      ['haloperidol', 'alternative', 'Psychose post-critique'],
      ['valproate-de-sodium-acide-valproique', 'alternative', 'Épilepsie avec trouble de l’humeur'],
      ['lamotrigine', 'alternative', 'Épilepsie avec dépression'],
    ],
    complications: [
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Risque accru.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Mauvaise observance et crises',
        fiche: 'epilepsie-pharmacoresistante',
        description: 'Dépression, stigmatisation.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Exclusion scolaire et sociale',
        description: 'Stigmatisation.',
        traitement: '- Sensibilisation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration avec le contrôle des crises, le traitement psychiatrique et la réduction de la stigmatisation',
    urgences: ['etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Humeur dépressive', 'frequent'],
      ['Anxiété', 'frequent'],
      ['Hallucinations', 'occasionnel'],
      ['Troubles du comportement', 'frequent'],
      ['Irritabilité', 'frequent'],
      ['Idées suicidaires', 'occasionnel'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'ILAE — recommandations de pratique clinique'],
    niveaux: {
      cs: [
        '- Dépistage de la dépression, éducation, lutte contre la stigmatisation',
        '- Psychose, idées suicidaires',
      ],
      hgr: ['- Adaptation des traitements, psychiatrie', ''],
      tert: ['- Neuropsychiatrie, EEG', ''],
    },
    alertes: { 'etat-de-mal-epileptique-urgence': 'Confusion prolongée ou crises répétées' },
    formes: [
      {
        nom: 'Dépression de l’épileptique',
        type: 'commune',
        description: 'La plus fréquente.',
        terrain: '- Épilepsie mal contrôlée, stigmatisation',
        fonctionnels: '- Tristesse, isolement',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Psychose post-critique',
        type: 'evolutive',
        description: 'Après une salve de crises.',
        terrain: '- Épilepsie temporale',
        fonctionnels: '- Délire, hallucinations',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Troubles médicamenteux',
        type: 'etiologique',
        description: 'Phénobarbital, lévétiracétam.',
        terrain: '- Enfant sous phénobarbital',
        fonctionnels: '- Hyperactivité, irritabilité',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles psychiques des maladies chroniques
  {
    ...PSY,
    slug: 'troubles-psychiques-des-maladies-chroniques',
    nom: 'Troubles psychiques des maladies chroniques',
    resume:
      'Dépression, anxiété et détresse psychologique fréquentes au cours des maladies chroniques (diabète, HTA et insuffisance cardiaque, AVC, insuffisance rénale et dialyse, drépanocytose, cancers, tuberculose, VIH, épilepsie, douleurs chroniques), deux à trois fois plus que dans la population générale : elles réduisent l’observance, l’autosoin et la qualité de vie et aggravent le pronostic ; symptômes souvent attribués à la maladie (fatigue, perte d’appétit, insomnie) ; dépistage systématique (PHQ-2/PHQ-9) ; causes médicales et médicamenteuses à rechercher (corticoïdes, bêtabloquants, efavirenz, isoniazide, interféron, hypothyroïdie, anémie) ; traitement : interventions psychologiques brèves, soutien par les pairs, ISRS (sertraline : peu d’interactions et sûre en cardiologie), traitement de la douleur, soins palliatifs ; intégration des soins de santé mentale aux consultations des maladies chroniques.',
    definition:
      'Troubles mentaux (dépression, anxiété, troubles de l’adaptation) survenant au cours d’une maladie somatique chronique, en lien avec la maladie, ses traitements et leurs conséquences.',
    physiopathologie:
      '## Mécanismes\n- **Psychologiques** : annonce, incertitude, douleur, handicap, perte de rôle, coût des soins\n- **Biologiques** : inflammation, atteinte cérébrale (AVC, VIH), troubles métaboliques (urémie, hypoglycémie)\n- **Médicaments** : corticoïdes, bêtabloquants, efavirenz, isoniazide, interféron, antiépileptiques\n- **Sociaux** : stigmatisation (VIH, tuberculose, épilepsie, drépanocytose), pauvreté\n\n## Cercle vicieux\n- Dépression → mauvaise observance et autosoin → aggravation de la maladie → dépression',
    diagnostic:
      '## Dépistage\n- **PHQ-2** puis **PHQ-9** aux consultations de suivi ; anxiété (GAD-7)\n- Distinguer symptômes somatiques et dépressifs : privilégier tristesse, perte d’intérêt, culpabilité, idées de mort\n- **Idées suicidaires** (surtout en cas de douleur, de handicap, de maladie évolutive)\n\n## Rechercher\n- Causes contributives : **hypothyroïdie**, **anémie**, hyponatrémie, hypoglycémie, médicaments\n- Douleur non contrôlée, troubles du sommeil, consommation d’alcool',
    examens: [
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'nfs', 'Anémie.'],
      ['etiologique', 'ionogramme', 'Hyponatrémie.'],
      ['etiologique', 'glycemie', 'Hypoglycémie, déséquilibre.'],
    ],
    scores: [],
    differentiels: [
      ['depression', 'Dépression primaire.'],
      ['trouble-de-l-adaptation', 'Réaction à l’annonce.'],
      ['troubles-psychiatriques-d-origine-organique', 'Cause organique directe.'],
      ['syndrome-confusionnel-aigu', 'Confusion.'],
      ['hypothyroidie-adulte', 'Fatigue, ralentissement.'],
    ],
    etiologies:
      '## Contextes\n- Diabète, maladies cardiovasculaires, AVC, insuffisance rénale, drépanocytose, cancers, tuberculose, VIH, épilepsie, douleurs chroniques',
    principes: [
      [
        'Interventions psychologiques',
        'Première ligne.',
        '- **Psychoéducation**, résolution de problèmes, activation comportementale, gestion du stress\n- **Groupes de soutien** et pairs éducateurs, implication de la famille\n- Soutien à l’observance et à l’autosoin',
      ],
      [
        'Médicaments',
        'Choisir en fonction de la maladie.',
        '- **Sertraline** (cardiopathie, post-AVC, VIH : peu d’interactions), fluoxétine ; mirtazapine si anorexie ou insomnie\n- Éviter les tricycliques en cas de cardiopathie ; adapter à la fonction rénale et hépatique\n- Traiter la **douleur** (amitriptyline à faible dose si neuropathique et pas de contre-indication)',
      ],
      [
        'Organisation des soins',
        'Intégrer.',
        '- Dépistage systématique dans les consultations de diabète, HTA, VIH, tuberculose, drépanocytose, oncologie\n- Soins palliatifs, prise en charge sociale ; orientation psychiatrique si risque suicidaire ou échec',
      ],
    ],
    molecules: [
      ['sertraline', 'premiere', 'Dépression, anxiété'],
      ['fluoxetine', 'alternative', 'Dépression'],
      ['mirtazapine', 'alternative', 'Dépression avec anorexie, insomnie'],
      ['amitriptyline', 'alternative', 'Douleur neuropathique (sans cardiopathie)'],
    ],
    complications: [
      {
        nom: 'Mauvaise observance',
        description: 'Dépression.',
        traitement: '- Traitement de la dépression',
        clinique: '- Déséquilibre de la maladie',
        paraclinique: '',
      },
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Douleur, handicap, maladie grave.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Surmortalité',
        description: 'Dépression non traitée.',
        traitement: '- Soins intégrés',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration de l’humeur, de l’observance et du contrôle de la maladie avec une prise en charge intégrée',
    urgences: [],
    symptomes: [
      ['Humeur dépressive', 'tres_frequent'],
      ['Anxiété', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Idées suicidaires', 'occasionnel'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Dépistage PHQ, interventions brèves, sertraline', '- Idées suicidaires'],
      hgr: ['- Psychiatrie de liaison', ''],
      tert: ['- Psycho-oncologie, soins palliatifs', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dépression comorbide',
        type: 'commune',
        description: 'La plus fréquente.',
        terrain: '- Diabète, VIH, insuffisance cardiaque',
        fonctionnels: '- Tristesse, perte d’intérêt',
        generaux: '- Fatigue',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dépression post-AVC',
        type: 'etiologique',
        description: 'Un tiers des patients.',
        terrain: '- AVC',
        fonctionnels: '- Démotivation',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Détresse en oncologie et fin de vie',
        type: 'gravite',
        description: 'Soins palliatifs.',
        terrain: '- Cancer avancé',
        fonctionnels: '- Désespoir, douleur',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles des apprentissages
  {
    ...PEDOPSY,
    slug: 'troubles-des-apprentissages',
    nom: 'Troubles des apprentissages',
    resume:
      'Difficultés durables et spécifiques d’acquisition de la lecture (dyslexie), de l’orthographe et de l’écriture (dysorthographie, dysgraphie), du calcul (dyscalculie) ou de la coordination (dyspraxie), chez un enfant d’intelligence normale, scolarisé et sans déficit sensoriel : lecture lente et hachée, inversions, erreurs d’orthographe persistantes, difficulté à comprendre les nombres, maladresse ; souvent associés au TDAH, aux troubles du langage oral et à l’anxiété ; avant de conclure, éliminer une baisse de vision ou d’audition, une déficience intellectuelle, une absence ou irrégularité de scolarisation, la malnutrition, le paludisme et l’anémie répétés, l’épilepsie-absences, les difficultés émotionnelles (violences, deuils) ; repérage par l’enseignant, évaluation de la vision et de l’audition, bilan orthophonique et psychologique ; prise en charge : rééducation, aménagements pédagogiques (temps supplémentaire, oral), soutien scolaire, valorisation de l’estime de soi.',
    definition:
      'Troubles neurodéveloppementaux caractérisés par des difficultés persistantes et inattendues dans l’acquisition de compétences scolaires spécifiques (lecture, écriture, calcul), malgré une intelligence normale et un enseignement adapté.',
    physiopathologie:
      '## Mécanismes\n- Dysfonctionnement **neurodéveloppemental** des réseaux du langage écrit (traitement phonologique), du nombre ou de la planification motrice\n- Composante **génétique** forte ; prématurité, faible poids de naissance\n\n## Facteurs aggravants en RDC\n- Classes surchargées, langue d’enseignement différente de la langue maternelle, absentéisme, **malnutrition**, **anémie**, **paludisme**, troubles sensoriels non dépistés',
    diagnostic:
      '## Repérage\n- Difficultés persistantes (> 6 mois) malgré l’aide : lecture lente, erreurs de déchiffrage, confusions de lettres (b/d, p/q), orthographe très déficitaire, écriture illisible, difficulté avec les nombres et les opérations, maladresse\n- Contraste avec les capacités orales ou générales\n- Retentissement : redoublements, découragement, troubles du comportement\n\n## Éliminer\n- **Baisse de vision** (acuité visuelle) et **d’audition** (audiométrie, otites séromuqueuses)\n- **Déficience intellectuelle**, **TDAH**, **épilepsie-absences**, troubles émotionnels, violences\n- Malnutrition, anémie, paludisme répétés ; scolarisation insuffisante\n\n## Évaluation\n- Bilan orthophonique (langage oral et écrit), psychologique (efficience intellectuelle), psychomoteur',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Trouble visuel.'],
      ['premiere_intention', 'audiometrie', 'Surdité.'],
      ['etiologique', 'nfs', 'Anémie.'],
      ['deuxieme_intention', 'eeg', 'Épilepsie-absences.'],
    ],
    scores: [],
    differentiels: [
      ['deficience-intellectuelle', 'Difficultés globales.'],
      ['trouble-deficit-attention-hyperactivite', 'Inattention, impulsivité.'],
      ['epilepsie-absences', 'Absences en classe.'],
      ['surdite', 'Troubles auditifs.'],
      ['troubles-de-la-refraction', 'Baisse de vision.'],
      ['anemie-enfant', 'Fatigue, difficultés de concentration.'],
    ],
    etiologies:
      '## Facteurs\n- Génétiques, neurodéveloppementaux, prématurité ; aggravés par l’environnement scolaire et la santé',
    principes: [
      [
        'Rééducation',
        'Spécialisée.',
        '- **Orthophonie** (dyslexie, dysorthographie), psychomotricité ou ergothérapie (dyspraxie, dysgraphie)\n- Soutien scolaire individualisé, méthodes multisensorielles',
      ],
      [
        'Aménagements scolaires',
        'Avec l’enseignant.',
        '- Temps supplémentaire, consignes lues à l’oral, évaluation orale, tolérance orthographique, place au premier rang\n- Éviter les humiliations et le redoublement non justifié',
      ],
      [
        'Mesures associées',
        'Santé et estime de soi.',
        '- Correction des troubles visuels et auditifs, traitement de l’anémie et du paludisme, alimentation\n- Prise en charge du TDAH associé ; valorisation des réussites, soutien des parents',
      ],
    ],
    molecules: [
      ['methylphenidate', 'alternative', 'TDAH associé (spécialiste)'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie ferriprive associée'],
    ],
    complications: [
      {
        nom: 'Échec et décrochage scolaires',
        description: 'Absence de prise en charge.',
        traitement: '- Aménagements',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Troubles émotionnels et du comportement',
        fiche: 'depression-de-l-adolescent',
        description: 'Faible estime de soi.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Troubles durables mais compensables ; bon devenir avec repérage précoce et aménagements',
    urgences: [],
    symptomes: [
      ['Difficultés scolaires', 'tres_frequent'],
      ['Troubles du langage', 'frequent'],
      ['Troubles de la concentration', 'frequent'],
      ['Troubles du comportement', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Vision, audition, anémie, conseils aux parents et enseignants', ''],
      hgr: ['- Bilan pédiatrique, orientation', ''],
      tert: ['- Orthophonie, psychologie, neuropédiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dyslexie-dysorthographie',
        type: 'commune',
        description: 'Langage écrit.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '- Lecture lente, fautes',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dyscalculie',
        type: 'etiologique',
        description: 'Nombres.',
        terrain: '',
        fonctionnels: '- Difficultés en calcul',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dyspraxie',
        type: 'etiologique',
        description: 'Coordination.',
        terrain: '- Prématuré',
        fonctionnels: '- Maladresse, écriture difficile',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dépression de l'adolescent
  {
    ...PEDOPSY,
    slug: 'depression-de-l-adolescent',
    nom: 'Dépression de l’adolescent',
    resume:
      'Épisode dépressif fréquent à l’adolescence, souvent méconnu car masqué par l’irritabilité, les troubles du comportement, le repli, la chute des résultats scolaires, l’absentéisme, les plaintes somatiques, la consommation d’alcool ou de cannabis ; facteurs : violences (sexuelles, familiales, harcèlement), grossesse précoce, deuils, conflits armés et déplacement, VIH, orphelinat, pauvreté ; risque suicidaire majeur (premières causes de décès des 15–19 ans) : rechercher systématiquement les idées et gestes suicidaires et les automutilations ; entretien confidentiel (HEADSS) ; prise en charge : interventions psychologiques en première ligne (TCC, thérapie interpersonnelle, résolution de problèmes), implication de la famille et de l’école, fluoxétine si dépression modérée à sévère (surveillance du risque suicidaire en début de traitement), protection contre les violences.',
    definition:
      'Épisode dépressif caractérisé survenant entre 10 et 19 ans, avec humeur triste ou irritable et/ou perte d’intérêt durant au moins deux semaines, associés à d’autres symptômes et à une altération du fonctionnement.',
    physiopathologie:
      '## Facteurs\n- **Biologiques** : génétique, puberté, maladies chroniques (VIH, drépanocytose, épilepsie)\n- **Psychosociaux** : **violences** sexuelles et familiales, **harcèlement**, deuils, orphelins, **conflits armés**, déplacement, pauvreté, **grossesse précoce**, exclusion scolaire, rupture amoureuse\n- Consommation de substances, troubles anxieux, troubles des apprentissages',
    diagnostic:
      '## Clinique\n- **Humeur triste ou irritable**, **perte d’intérêt**, fatigue, troubles du sommeil et de l’appétit\n- **Chute scolaire**, absentéisme, **repli sur soi**, conflits, fugues, consommation de substances\n- Plaintes somatiques (céphalées, douleurs abdominales)\n- **Idées suicidaires**, gestes suicidaires, **automutilations**\n\n## Entretien\n- **Confidentiel**, seul avec l’adolescent puis avec la famille ; grille **HEADSS** (domicile, école, activités, drogues, sexualité, suicide/sécurité)\n- Rechercher **violences**, grossesse, VIH, consommations\n\n## Examens\n- Selon le contexte : NFS, TSH, test VIH, test de grossesse',
    examens: [
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'nfs', 'Anémie.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
    ],
    scores: [],
    differentiels: [
      ['trouble-bipolaire', 'Épisodes d’exaltation.'],
      ['usage-substances-adolescent', 'Consommation au premier plan.'],
      ['trouble-de-l-adaptation', 'Réaction à un stress.'],
      ['etat-de-stress-post-traumatique', 'Traumatisme.'],
      ['troubles-des-apprentissages', 'Difficultés scolaires spécifiques.'],
      ['hypothyroidie-adulte', 'Fatigue, ralentissement.'],
    ],
    etiologies:
      '## Facteurs\n- Violences, harcèlement, deuils, conflits, pauvreté, grossesse, maladies chroniques, substances',
    principes: [
      [
        'Sécurité',
        'Toujours.',
        '- **Évaluer le risque suicidaire** à chaque consultation ; plan de sécurité, retrait des moyens létaux (pesticides, médicaments)\n- Hospitalisation si risque élevé ; **protection** en cas de violences (signalement)',
      ],
      [
        'Interventions psychologiques',
        'Première ligne.',
        '- **Psychoéducation** de l’adolescent et de la famille, activation comportementale, **résolution de problèmes**\n- **TCC**, thérapie interpersonnelle ; implication de l’école, activités, soutien par les pairs',
      ],
      [
        'Médicaments',
        'Formes modérées à sévères.',
        '- **Fluoxétine** 10 mg puis 20 mg/j (seul antidépresseur recommandé en première intention chez l’adolescent)\n- **Surveillance rapprochée** les premières semaines (idées suicidaires, agitation)\n- Durée au moins 6–12 mois après la rémission ; éviter les tricycliques (toxicité en surdosage)',
      ],
    ],
    molecules: [
      ['fluoxetine', 'premiere', 'Dépression modérée à sévère'],
      ['sertraline', 'alternative', 'Alternative'],
    ],
    complications: [
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Première cause de décès des 15–19 ans.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Usage de substances',
        fiche: 'usage-substances-adolescent',
        description: 'Automédication.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Décrochage scolaire et grossesse précoce',
        fiche: 'grossesse-adolescente',
        description: 'Conséquences sociales.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bonne réponse aux interventions ; récidives fréquentes à l’âge adulte',
    urgences: [],
    symptomes: [
      ['Humeur dépressive', 'tres_frequent'],
      ['Irritabilité', 'frequent'],
      ['Repli sur soi', 'frequent'],
      ['Difficultés scolaires', 'frequent'],
      ['Idées suicidaires', 'frequent'],
      ['Automutilations', 'occasionnel'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Entretien confidentiel, risque suicidaire, interventions brèves',
        '- Idées ou gestes suicidaires',
      ],
      hgr: ['- Fluoxétine, suivi', ''],
      tert: ['- Pédopsychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dépression à présentation comportementale',
        type: 'commune',
        description: 'Irritabilité.',
        terrain: '- Adolescent',
        fonctionnels: '- Irritabilité, chute scolaire, repli',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dépression avec risque suicidaire',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Violences, deuil',
        fonctionnels: '- Idées suicidaires, automutilations',
        generaux: '',
        physiques: '- Scarifications',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dépression de l’adolescente enceinte',
        type: 'terrain',
        description: 'Grossesse précoce.',
        terrain: '- Adolescente enceinte',
        fonctionnels: '- Tristesse, isolement',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
