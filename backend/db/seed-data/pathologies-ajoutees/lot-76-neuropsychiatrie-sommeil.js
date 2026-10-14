'use strict';

/**
 * Lot 76 (phase 2, dernier lot) — syndrome sérotoninergique, deuil compliqué, narcolepsie,
 * parasomnies, hypersomnies. Rédigé par IA (mhGAP, OMS, Harrison) : à valider.
 */

const URG = { departement: 'neuropsychiatrie', specialite: 'Urgences neuropsychiatriques' };
const PTR = { departement: 'neuropsychiatrie', specialite: 'Psychotraumatologie' };
const NEU = { departement: 'neuropsychiatrie', specialite: 'Neurologie' };

module.exports = [
  // =================================================================== Syndrome sérotoninergique
  {
    ...URG,
    slug: 'syndrome-serotoninergique',
    nom: 'Syndrome sérotoninergique',
    resume:
      'Intoxication par excès de sérotonine, d’installation rapide (quelques heures) après l’introduction, l’augmentation ou l’association de médicaments sérotoninergiques : antidépresseurs (ISRS, clomipramine, venlafaxine), tramadol, ondansétron, métoclopramide, linézolide, bleu de méthylène, triptans, lithium, ecstasy, cocaïne, millepertuis ; triade : troubles mentaux (agitation, anxiété, confusion), dysautonomie (tachycardie, HTA, sueurs, mydriase, diarrhée, hyperthermie) et hyperactivité neuromusculaire (tremblements, myoclonies, clonus spontané ou inductible surtout aux membres inférieurs, hyperréflexie, rigidité) ; formes graves avec hyperthermie > 40 °C, rigidité, convulsions, rhabdomyolyse, CIVD ; différent du syndrome malin des neuroleptiques (installation lente, bradykinésie, rigidité en tuyau de plomb) ; traitement : arrêt des sérotoninergiques, benzodiazépines, refroidissement, hydratation, cyproheptadine, réanimation si forme grave ; évolution favorable en 24–72 h.',
    definition:
      'Toxidrome lié à une stimulation excessive des récepteurs sérotoninergiques centraux et périphériques, généralement d’origine médicamenteuse.',
    physiopathologie:
      '## Mécanismes\n- Excès de **sérotonine** (récepteurs 5-HT2A surtout) par augmentation de la synthèse, de la libération, inhibition de la recapture ou du métabolisme\n\n## Causes\n- **Associations** : ISRS + tramadol, ISRS + triptan, antidépresseur + linézolide, IMAO + tout sérotoninergique\n- **Surdosage** volontaire d’antidépresseurs\n- **Drogues** : ecstasy, amphétamines, cocaïne\n- Interactions métaboliques (inhibiteurs enzymatiques)',
    diagnostic:
      '## Clinique (critères de Hunter)\n- Prise d’un sérotoninergique et au moins un des signes : **clonus spontané**, **clonus inductible** avec agitation ou sueurs, **clonus oculaire** avec agitation ou sueurs, **tremblements et hyperréflexie**, **hypertonie avec fièvre > 38 °C** et clonus\n- **Agitation**, confusion, **tachycardie**, **HTA**, **sueurs**, **mydriase**, **diarrhée**, hyperthermie\n\n## Gravité\n- **Hyperthermie > 40 °C**, rigidité, convulsions, troubles du rythme, rhabdomyolyse, acidose, insuffisance rénale, CIVD\n\n## Examens\n- **CPK**, ionogramme, créatinine, glycémie, gaz du sang, NFS, hémostase, ECG\n- Dépistage toxicologique selon le contexte ; éliminer infection (méningite, neuropaludisme)',
    examens: [
      ['gravite', 'cpk', 'Rhabdomyolyse.'],
      ['gravite', 'ionogramme', 'Hyperkaliémie.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['gravite', 'ecg', 'Troubles du rythme, QT.'],
      ['gravite', 'gaz-du-sang', 'Acidose.'],
      ['gravite', 'hemostase', 'CIVD.'],
      ['etiologique', 'goutte-epaisse', 'Neuropaludisme.'],
      ['etiologique', 'depistage-urinaire-drogues', 'Ecstasy, cocaïne.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['syndrome-malin-des-neuroleptiques', 'Installation lente, bradykinésie, rigidité en tuyau de plomb.'],
      ['usage-de-cocaine-et-d-amphetamines', 'Syndrome sympathomimétique.'],
      ['sevrage-alcoolique-delirium-tremens', 'Sevrage.'],
      ['meningite-bacterienne', 'Fièvre, raideur de nuque.'],
      ['hyperthyroidie-basedow', 'Crise thyréotoxique.'],
      ['Syndrome anticholinergique', 'Peau sèche, rétention, iléus, réflexes normaux.'],
    ],
    etiologies:
      '## Causes\n- ISRS, clomipramine, tramadol, triptans, ondansétron, linézolide, lithium, ecstasy, cocaïne',
    principes: [
      [
        'Mesures générales',
        'Toujours.',
        '- **Arrêt** de tous les médicaments sérotoninergiques\n- **Benzodiazépines** (diazépam, lorazépam) : agitation, tremblements, tachycardie\n- **Hydratation** IV, refroidissement externe, surveillance cardiaque',
      ],
      [
        'Antidote',
        'Formes modérées.',
        '- **Cyproheptadine** 12 mg per os ou par sonde, puis 2 mg toutes les 2 h si symptômes persistent (entretien 8 mg toutes les 6 h)',
      ],
      [
        'Formes graves',
        'Réanimation.',
        '- Hyperthermie > 41 °C : **sédation**, **curarisation** non dépolarisante et ventilation (éviter le suxaméthonium : hyperkaliémie)\n- Pas d’antipyrétique efficace (hyperthermie musculaire) ; éviter la contention physique\n- Correction de l’hyperkaliémie, de l’acidose ; dialyse si insuffisance rénale\n- Éviter halopéridol et chlorpromazine (aggravation possible)',
      ],
    ],
    molecules: [
      ['cyproheptadine', 'premiere', 'Antidote (antagoniste 5-HT2A)'],
      ['diazepam', 'premiere', 'Agitation, tremblements'],
      ['lorazepam', 'alternative', 'Agitation'],
      ['rocuronium', 'adjuvant', 'Curarisation (hyperthermie grave)'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Hydratation'],
    ],
    complications: [
      {
        nom: 'Rhabdomyolyse et insuffisance rénale',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hyperactivité musculaire.',
        traitement: '- Hydratation, dialyse',
        clinique: '- Urines foncées',
        paraclinique: '- CPK',
      },
      {
        nom: 'Hyperthermie maligne',
        description: 'Forme grave.',
        traitement: '- Curarisation, ventilation',
        clinique: '- Température > 41 °C',
        paraclinique: '',
      },
      {
        nom: 'Convulsions et arythmies',
        fiche: 'etat-de-mal-epileptique',
        description: 'Forme grave.',
        traitement: '- Benzodiazépines',
        clinique: '',
        paraclinique: '- ECG',
      },
    ],
    evolution:
      '## Pronostic\n- Régression en 24–72 h après l’arrêt chez la majorité ; mortalité des formes graves avec hyperthermie',
    urgences: [],
    symptomes: [
      ['Agitation', 'tres_frequent'],
      ['Tremblements', 'tres_frequent'],
      ['Sueurs', 'frequent'],
      ['Hyperthermie', 'frequent'],
      ['Diarrhée', 'frequent'],
      ['Rigidité musculaire', 'occasionnel'],
      ['Palpitations', 'frequent'],
      ['Désorientation', 'frequent'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Arrêt des sérotoninergiques, diazépam, hydratation, référence',
        '- Fièvre, rigidité, confusion',
      ],
      hgr: ['- Cyproheptadine, surveillance, bilan', ''],
      tert: ['- Réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme modérée',
        type: 'commune',
        description: 'Après association de sérotoninergiques.',
        terrain: '- ISRS + tramadol',
        fonctionnels: '- Agitation, diarrhée',
        generaux: '- Tachycardie',
        physiques: '- Clonus, tremblements, hyperréflexie',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme grave',
        type: 'gravite',
        description: 'Hyperthermie.',
        terrain: '- Surdosage, ecstasy',
        fonctionnels: '- Confusion',
        generaux: '- Température > 40 °C',
        physiques: '- Rigidité',
        paraclinique: '- CPK, acidose',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Deuil compliqué
  {
    ...PTR,
    slug: 'deuil-complique',
    nom: 'Deuil compliqué',
    resume:
      'Réaction de deuil anormalement intense et prolongée (au-delà de 6–12 mois, en tenant compte des normes culturelles et religieuses), fréquente après des décès brutaux ou violents (conflits armés, accidents, épidémies comme Ebola ou COVID-19, mort d’un enfant, disparitions sans corps) : nostalgie et préoccupation envahissantes du défunt, douleur émotionnelle intense, incapacité d’accepter la mort, colère ou culpabilité, évitement des rappels ou au contraire recherche constante, sentiment de vide, retrait social, incapacité à reprendre les activités ; associé à la dépression, au stress post-traumatique, à l’alcool, au risque suicidaire ; à distinguer du deuil normal (qui ne doit pas être médicalisé) ; prise en charge : écoute, respect des rites culturels, soutien communautaire et religieux, psychothérapie centrée sur le deuil, traitement de la dépression associée, évaluation du risque suicidaire.',
    definition:
      'Réaction de deuil persistante et envahissante, dépassant la durée et l’intensité attendues dans le contexte culturel, entraînant une souffrance et une altération significatives du fonctionnement.',
    physiopathologie:
      '## Facteurs de risque\n- **Mort brutale, violente ou traumatique** (meurtre, conflit, accident, suicide, épidémie), **décès d’un enfant**, **disparition** sans corps\n- Impossibilité d’accomplir les **rites funéraires** (épidémies, conflits, déplacement)\n- Relation de dépendance avec le défunt, deuils multiples, isolement, pauvreté, antécédents de dépression\n- Conflits familiaux, accusations de sorcellerie liées au décès',
    diagnostic:
      '## Clinique\n- **Nostalgie intense** et préoccupation constante pour le défunt\n- Douleur émotionnelle, **incapacité d’accepter** la mort, sentiment d’irréalité\n- **Colère**, **culpabilité**, difficulté à faire confiance, **retrait social**, perte de sens\n- Évitement des rappels ou recherche constante du défunt\n- Durée > **6–12 mois** selon les normes culturelles, avec retentissement important\n\n## Évaluation\n- **Dépression**, **stress post-traumatique**, alcool, **idées suicidaires** (désir de rejoindre le défunt)\n- Contexte culturel et religieux, soutien disponible',
    examens: [],
    scores: [],
    differentiels: [
      ['depression', 'Humeur dépressive généralisée, dévalorisation.'],
      ['etat-de-stress-post-traumatique', 'Reviviscences du traumatisme.'],
      ['trouble-de-l-adaptation', 'Réaction à un autre stress.'],
      ['Deuil normal', 'Intensité décroissante, fonctionnement préservé.'],
    ],
    etiologies: '## Facteurs\n- Décès brutal ou violent, perte d’un enfant, absence de rites, isolement',
    principes: [
      [
        'Soutien',
        'Respect de la culture.',
        '- **Écoute** empathique, normalisation des réactions de deuil\n- Respect et facilitation des **rites** culturels et religieux (même symboliques si le corps est absent)\n- Mobilisation du **soutien familial, communautaire et religieux**',
      ],
      [
        'Interventions psychologiques',
        'Deuil compliqué.',
        '- **Psychothérapie centrée sur le deuil** (TCC du deuil compliqué), résolution de problèmes, activation comportementale\n- Groupes de soutien pour les endeuillés',
      ],
      [
        'Comorbidités',
        'Traiter.',
        '- **Dépression** : antidépresseur (sertraline) ; stress post-traumatique : TCC centrée sur le trauma\n- **Évaluer le risque suicidaire** ; éviter les benzodiazépines au long cours',
      ],
    ],
    molecules: [['sertraline', 'alternative', 'Dépression associée']],
    complications: [
      {
        nom: 'Dépression',
        fiche: 'depression',
        description: 'Comorbidité.',
        traitement: '- Traitement',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Désir de rejoindre le défunt.',
        traitement: '- Évaluation, prévention',
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
      '## Pronostic\n- Amélioration avec un soutien adapté et une psychothérapie ciblée ; chronicité sans prise en charge',
    urgences: [],
    symptomes: [
      ['Humeur dépressive', 'tres_frequent'],
      ['Repli sur soi', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Anxiété', 'frequent'],
      ['Idées suicidaires', 'occasionnel'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Écoute, soutien communautaire, évaluation du risque suicidaire', ''],
      hgr: ['- Suivi psychologique, traitement de la dépression', ''],
      tert: ['- Psychothérapie spécialisée', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Deuil prolongé',
        type: 'commune',
        description: 'Au-delà des normes culturelles.',
        terrain: '- Perte d’un proche',
        fonctionnels: '- Nostalgie, incapacité d’accepter',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Deuil traumatique',
        type: 'etiologique',
        description: 'Mort violente.',
        terrain: '- Conflit, épidémie, disparition',
        fonctionnels: '- Reviviscences, culpabilité',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Narcolepsie
  {
    ...NEU,
    slug: 'narcolepsie',
    nom: 'Narcolepsie',
    resume:
      'Maladie rare du sommeil, débutant à l’adolescence ou chez l’adulte jeune, liée à un déficit en hypocrétine (orexine) : somnolence diurne excessive avec accès de sommeil irrésistibles et brefs, rafraîchissants, survenant dans des situations inhabituelles (en classe, au travail, en mangeant, en conduisant), cataplexie (perte brutale du tonus déclenchée par le rire ou la surprise, conscience conservée : chute de la tête, dérobement des genoux), hallucinations à l’endormissement ou au réveil, paralysies du sommeil, sommeil nocturne fragmenté ; souvent prise pour de la paresse, de l’épilepsie ou un trouble psychiatrique ; diagnostic par polysomnographie et tests de latence d’endormissement (centre spécialisé) ; traitement : siestes programmées, hygiène du sommeil, modafinil ou méthylphénidate pour la somnolence, antidépresseurs (clomipramine, venlafaxine) pour la cataplexie, aménagements scolaires et professionnels, prudence pour la conduite.',
    definition:
      'Hypersomnie centrale chronique caractérisée par une somnolence diurne excessive, avec (type 1) ou sans (type 2) cataplexie, liée dans le type 1 à une perte des neurones à hypocrétine.',
    physiopathologie:
      '## Mécanismes\n- **Perte auto-immune des neurones à hypocrétine** (hypothalamus latéral) → instabilité éveil-sommeil, intrusion du sommeil paradoxal dans l’éveil (cataplexie, hallucinations, paralysies)\n- Prédisposition génétique (HLA DQB1*06:02) ; déclenchants infectieux possibles\n- Formes secondaires rares : lésions hypothalamiques (tumeurs, encéphalites, trypanosomiase)',
    diagnostic:
      '## Clinique\n- **Somnolence diurne** quotidienne, accès de sommeil irrésistibles, siestes brèves et réparatrices\n- **Cataplexie** : perte du tonus brutale et brève déclenchée par une émotion positive, conscience conservée\n- **Hallucinations** hypnagogiques ou hypnopompiques, **paralysies du sommeil**\n- Sommeil nocturne fragmenté, comportements automatiques\n\n## Examens\n- **Polysomnographie** et **tests itératifs de latence d’endormissement**\n- Éliminer : manque de sommeil, apnées, dépression, médicaments sédatifs, **trypanosomiase humaine africaine** en zone d’endémie, épilepsie',
    examens: [
      ['confirmation', 'polysomnographie', 'Latence courte, endormissements en sommeil paradoxal.'],
      ['etiologique', 'depistage-tha', 'Trypanosomiase en zone d’endémie.'],
      ['deuxieme_intention', 'eeg', 'Diagnostic différentiel avec l’épilepsie.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Forme secondaire.'],
    ],
    scores: [],
    differentiels: [
      ['hypersomnies', 'Autres causes de somnolence.'],
      ['tha-phase-neurologique', 'Troubles du sommeil en zone d’endémie.'],
      ['epilepsie', 'Chutes avec perte de conscience.'],
      ['syncope-et-malaise', 'Perte de connaissance.'],
      ['depression', 'Hypersomnie dépressive.'],
      ['schizophrenie', 'Hallucinations.'],
    ],
    etiologies: '## Causes\n- Déficit en hypocrétine (auto-immun) ; rares formes secondaires',
    principes: [
      [
        'Mesures comportementales',
        'Toujours.',
        '- **Siestes programmées** courtes (15–20 min), horaires de sommeil réguliers\n- Aménagements scolaires et professionnels, information de l’entourage\n- **Conduite** : prudence, restriction tant que la somnolence n’est pas contrôlée',
      ],
      [
        'Somnolence',
        'Éveillants.',
        '- **Modafinil** 100–400 mg/j ; **méthylphénidate** en alternative (centre spécialisé)',
      ],
      [
        'Cataplexie',
        'Antidépresseurs.',
        '- **Clomipramine** 10–75 mg/j ou venlafaxine, fluoxétine\n- Oxybate de sodium en centre spécialisé (disponibilité limitée)',
      ],
    ],
    molecules: [
      ['modafinil', 'premiere', 'Somnolence diurne'],
      ['methylphenidate', 'alternative', 'Somnolence diurne'],
      ['clomipramine', 'premiere', 'Cataplexie'],
      ['fluoxetine', 'alternative', 'Cataplexie'],
    ],
    complications: [
      {
        nom: 'Accidents',
        description: 'Endormissement au volant ou au travail.',
        traitement: '- Traitement, restrictions',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Échec scolaire et professionnel',
        description: 'Somnolence méconnue.',
        traitement: '- Aménagements',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression',
        fiche: 'depression',
        description: 'Retentissement.',
        traitement: '- Traitement',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Maladie chronique, stable ; bon contrôle des symptômes sous traitement',
    urgences: [],
    symptomes: [
      ['Somnolence', 'tres_frequent'],
      ['Cataplexie', 'frequent'],
      ['Hallucinations', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Difficultés scolaires', 'occasionnel'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Repérer une somnolence anormale, éliminer la trypanosomiase, orienter', ''],
      hgr: ['- Évaluation neurologique', ''],
      tert: ['- Polysomnographie, traitement spécialisé', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Narcolepsie avec cataplexie',
        type: 'commune',
        description: 'Type 1.',
        terrain: '- Adolescent, adulte jeune',
        fonctionnels: '- Accès de sommeil, chutes au rire',
        generaux: '',
        physiques: '',
        paraclinique: '- Polysomnographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Narcolepsie sans cataplexie',
        type: 'etiologique',
        description: 'Type 2.',
        terrain: '',
        fonctionnels: '- Somnolence',
        generaux: '',
        physiques: '',
        paraclinique: '- Latence d’endormissement courte',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Parasomnies
  {
    ...NEU,
    slug: 'parasomnies',
    nom: 'Parasomnies',
    resume:
      'Comportements ou phénomènes anormaux survenant pendant le sommeil, à l’endormissement ou au réveil : parasomnies du sommeil lent profond (somnambulisme, terreurs nocturnes, éveils confusionnels : en première partie de nuit, sans souvenir, fréquentes chez l’enfant, favorisées par le manque de sommeil, le stress, la fièvre, l’alcool), parasomnies du sommeil paradoxal (cauchemars répétés, notamment post-traumatiques ; trouble du comportement en sommeil paradoxal du sujet âgé qui « vit ses rêves », se débat, peut se blesser ou blesser son conjoint, souvent annonciateur d’une maladie de Parkinson ou d’une démence à corps de Lewy ; paralysies du sommeil), bruxisme, énurésie ; souvent interprétées comme des attaques spirituelles ; éliminer des crises d’épilepsie nocturnes ; prise en charge : réassurance, sécurisation de l’environnement, hygiène du sommeil, traitement du stress ou du traumatisme ; clonazépam ou mélatonine pour le trouble du comportement en sommeil paradoxal.',
    definition:
      'Troubles du sommeil caractérisés par des événements physiques ou des expériences indésirables survenant à l’endormissement, pendant le sommeil ou au réveil.',
    physiopathologie:
      '## Sommeil lent profond\n- Éveil partiel et dissocié : corps actif, cerveau partiellement endormi (**somnambulisme**, **terreurs nocturnes**, éveils confusionnels)\n- Facteurs : génétique, **privation de sommeil**, stress, fièvre, alcool, apnées\n\n## Sommeil paradoxal\n- **Cauchemars** (stress, traumatisme, médicaments)\n- **Trouble du comportement en sommeil paradoxal** : perte de l’atonie musculaire normale → mise en acte des rêves ; marqueur précoce des **synucléinopathies** (Parkinson, Lewy)\n- **Paralysies du sommeil** (persistance de l’atonie au réveil), souvent avec hallucinations',
    diagnostic:
      '## Interrogatoire du patient et du conjoint\n- Heure de survenue (début de nuit : sommeil lent ; fin de nuit : sommeil paradoxal), souvenir, durée, stéréotypie\n- **Somnambulisme et terreurs** : enfant, début de nuit, pas de souvenir, confusion\n- **Trouble du comportement en sommeil paradoxal** : homme de plus de 50 ans, rêves agités vécus, blessures\n- **Paralysie du sommeil** : impossibilité de bouger au réveil, sensation de présence (interprétée parfois comme une attaque)\n\n## Éliminer\n- **Épilepsie nocturne** (épisodes stéréotypés, multiples par nuit) : EEG\n- Apnées du sommeil, médicaments, alcool ; stress post-traumatique (cauchemars)\n\n## Examens\n- Vidéo familiale ; **polysomnographie** si cas atypique, violent ou trouble du sommeil paradoxal',
    examens: [
      ['deuxieme_intention', 'polysomnographie', 'Cas atypiques, trouble du sommeil paradoxal.'],
      ['deuxieme_intention', 'eeg', 'Épilepsie nocturne.'],
    ],
    scores: [],
    differentiels: [
      ['epilepsie', 'Crises nocturnes stéréotypées.'],
      ['troubles-du-sommeil-de-l-enfant', 'Parasomnies de l’enfant.'],
      ['etat-de-stress-post-traumatique', 'Cauchemars traumatiques.'],
      ['demence-a-corps-de-lewy', 'Trouble du comportement en sommeil paradoxal.'],
      ['expressions-culturelles-de-la-detresse', 'Interprétation spirituelle.'],
    ],
    etiologies:
      '## Facteurs\n- Génétique, privation de sommeil, stress, fièvre, alcool, traumatisme, synucléinopathies',
    principes: [
      [
        'Mesures générales',
        'Rassurer et sécuriser.',
        '- Explication (phénomène bénin chez l’enfant), **régularité du sommeil**, éviter la privation de sommeil et l’alcool\n- **Sécuriser** : fermer portes et fenêtres, retirer les objets dangereux, matelas au sol si besoin\n- Ne pas réveiller brutalement un somnambule ; le raccompagner au lit',
      ],
      [
        'Traitements ciblés',
        'Selon la forme.',
        '- **Trouble du comportement en sommeil paradoxal** : **mélatonine** 3–12 mg ou **clonazépam** 0,25–1 mg au coucher ; surveiller l’apparition d’une maladie de Parkinson ou d’une démence\n- **Cauchemars** post-traumatiques : thérapie par répétition d’imagerie mentale, TCC du trauma\n- Formes fréquentes et dangereuses du sommeil lent : clonazépam à faible dose ponctuellement',
      ],
      [
        'Contexte',
        'Traumatisme et culture.',
        '- Rechercher stress, violences, dépression ; expliquer la paralysie du sommeil sans nier les interprétations culturelles',
      ],
    ],
    molecules: [
      ['melatonine', 'premiere', 'Trouble du comportement en sommeil paradoxal'],
      ['clonazepam', 'alternative', 'Formes dangereuses'],
    ],
    complications: [
      {
        nom: 'Blessures',
        description: 'Somnambulisme, sommeil paradoxal agité.',
        traitement: '- Sécurisation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Évolution vers une synucléinopathie',
        fiche: 'maladie-de-parkinson',
        description: 'Trouble du comportement en sommeil paradoxal.',
        traitement: '- Suivi neurologique',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Anxiété et privation de sommeil',
        description: 'Peur de s’endormir.',
        traitement: '- Réassurance',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Parasomnies de l’enfant habituellement résolutives à l’adolescence ; trouble du comportement en sommeil paradoxal à surveiller',
    urgences: [],
    symptomes: [
      ['Cauchemars et terreurs nocturnes', 'tres_frequent'],
      ['Troubles du sommeil', 'tres_frequent'],
      ['Agitation', 'frequent'],
      ['Hallucinations', 'occasionnel'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'Nelson Textbook of Pediatrics'],
    niveaux: {
      cs: ['- Réassurance, conseils de sécurité et d’hygiène du sommeil', ''],
      hgr: ['- EEG si doute', ''],
      tert: ['- Polysomnographie, neurologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Somnambulisme et terreurs nocturnes',
        type: 'commune',
        description: 'Enfant.',
        terrain: '- Enfant',
        fonctionnels: '- Déambulation, cris en début de nuit',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Trouble du comportement en sommeil paradoxal',
        type: 'gravite',
        description: 'Sujet âgé.',
        terrain: '- Homme de plus de 50 ans',
        fonctionnels: '- Rêves agités vécus',
        generaux: '',
        physiques: '',
        paraclinique: '- Polysomnographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Paralysies du sommeil',
        type: 'etiologique',
        description: 'Au réveil.',
        terrain: '- Adolescent, adulte jeune',
        fonctionnels: '- Impossibilité de bouger, sensation de présence',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hypersomnies
  {
    ...NEU,
    slug: 'hypersomnies',
    nom: 'Hypersomnies',
    resume:
      'Somnolence diurne excessive ou besoin de sommeil anormalement long, à explorer systématiquement en RDC où la trypanosomiase humaine africaine (maladie du sommeil) reste endémique dans de nombreuses provinces : causes les plus fréquentes : privation chronique de sommeil, syndrome d’apnées obstructives du sommeil (ronflements, pauses respiratoires, obésité, HTA), médicaments sédatifs (benzodiazépines, antihistaminiques, antipsychotiques, antiépileptiques), alcool et cannabis, dépression, hypothyroïdie, insuffisance rénale ou hépatique, anémie, séquelles de traumatisme crânien ou d’encéphalite ; causes infectieuses : trypanosomiase (troubles du sommeil, inversion du rythme, adénopathies cervicales, troubles du comportement), VIH ; hypersomnies centrales rares (narcolepsie, hypersomnie idiopathique) ; démarche : interrogatoire, agenda du sommeil, échelle d’Epworth, dépistage de la trypanosomiase, bilan biologique, polysomnographie en centre spécialisé ; traitement de la cause.',
    definition:
      'Somnolence diurne excessive ou allongement pathologique du temps de sommeil, survenant malgré un sommeil nocturne suffisant ou non, avec retentissement sur la vigilance et le fonctionnement.',
    physiopathologie:
      '## Causes\n- **Privation de sommeil**, horaires de travail décalés\n- **Apnées obstructives du sommeil** : obésité, hypertrophie amygdalienne, malformations\n- **Médicaments** et substances : benzodiazépines, antihistaminiques, antipsychotiques, antiépileptiques, opioïdes, alcool, cannabis\n- **Psychiatriques** : dépression (surtout bipolaire)\n- **Médicales** : **hypothyroïdie**, anémie, insuffisance rénale ou hépatique, hypercapnie\n- **Infectieuses** : **trypanosomiase humaine africaine** (phase méningo-encéphalitique), VIH, encéphalites\n- **Neurologiques** : traumatisme crânien, tumeurs hypothalamiques, maladie de Parkinson\n- **Hypersomnies centrales** : narcolepsie, hypersomnie idiopathique, syndrome de Kleine-Levin',
    diagnostic:
      '## Évaluation\n- Durée du sommeil, horaires, travail de nuit, agenda du sommeil sur 2 semaines\n- **Échelle d’Epworth** (> 10 : somnolence excessive)\n- Ronflements, pauses respiratoires, céphalées matinales, obésité, HTA (apnées)\n- Médicaments, alcool, cannabis ; humeur\n- **Zone d’endémie de trypanosomiase** : troubles du sommeil, adénopathies cervicales postérieures, fièvre, céphalées, troubles du comportement\n\n## Examens\n- **Dépistage de la trypanosomiase** (CATT, recherche de trypanosomes), **TSH**, NFS, glycémie, créatinine, bilan hépatique, test VIH\n- **Polysomnographie** et tests de latence d’endormissement en centre spécialisé',
    examens: [
      ['premiere_intention', 'depistage-tha', 'Trypanosomiase en zone d’endémie.'],
      ['premiere_intention', 'tsh', 'Hypothyroïdie.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['etiologique', 'creatinine', 'Insuffisance rénale.'],
      ['etiologique', 'bilan-hepatique', 'Insuffisance hépatique.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['confirmation', 'polysomnographie', 'Apnées, hypersomnie centrale.'],
      ['etiologique', 'lcr', 'Trypanosomiase en phase 2.'],
    ],
    scores: ['imc'],
    differentiels: [
      ['trypanosomiase-humaine-africaine', 'Maladie du sommeil.'],
      ['narcolepsie', 'Cataplexie, accès de sommeil.'],
      ['depression', 'Hypersomnie dépressive.'],
      ['hypothyroidie-adulte', 'Fatigue, frilosité, prise de poids.'],
      ['dependance-aux-benzodiazepines', 'Somnolence iatrogène.'],
      ['obesite-adulte', 'Apnées du sommeil.'],
    ],
    etiologies:
      '## Causes\n- Privation de sommeil, apnées, médicaments, dépression, hypothyroïdie, trypanosomiase, VIH, lésions neurologiques, narcolepsie',
    principes: [
      [
        'Causes fréquentes',
        'Traiter.',
        '- **Allonger et régulariser le sommeil**, adapter le travail de nuit\n- **Réviser les médicaments** sédatifs, réduire l’alcool et le cannabis\n- **Hypothyroïdie** : lévothyroxine ; **dépression** : antidépresseur non sédatif ; anémie, insuffisance d’organe',
      ],
      [
        'Apnées du sommeil',
        'Orientation.',
        '- Perte de poids, éviter alcool et sédatifs le soir, position latérale\n- **Pression positive continue** en centre spécialisé ; adéno-amygdalectomie chez l’enfant',
      ],
      [
        'Trypanosomiase et hypersomnies centrales',
        'Spécifique.',
        '- **Trypanosomiase** : traitement selon le programme national (fexinidazole, NECT selon le stade)\n- **Narcolepsie** et hypersomnie idiopathique : modafinil en centre spécialisé\n- Prudence pour la **conduite** tant que la somnolence persiste',
      ],
    ],
    molecules: [
      ['modafinil', 'alternative', 'Hypersomnies centrales'],
      ['levothyroxine', 'premiere', 'Hypothyroïdie'],
      ['fexinidazole', 'premiere', 'Trypanosomiase (programme national)'],
    ],
    complications: [
      {
        nom: 'Accidents de la route et du travail',
        description: 'Endormissement.',
        traitement: '- Traitement, restrictions',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Complications cardiovasculaires',
        fiche: 'hypertension-arterielle',
        description: 'Apnées non traitées.',
        traitement: '- Pression positive continue',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Évolution d’une trypanosomiase',
        fiche: 'tha-phase-neurologique',
        description: 'Diagnostic tardif.',
        traitement: '- Traitement spécifique',
        clinique: '- Troubles neurologiques',
        paraclinique: '- LCR',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause ; bon après traitement des apnées, de l’hypothyroïdie ou de la trypanosomiase',
    urgences: [],
    symptomes: [
      ['Somnolence', 'tres_frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Ronflements', 'frequent'],
      ['Céphalées', 'occasionnel'],
      ['Troubles de la concentration', 'frequent'],
      ['Troubles du comportement', 'occasionnel'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Dépistage de la trypanosomiase, révision des médicaments, hygiène du sommeil',
        '- Somnolence avec adénopathies cervicales ou troubles du comportement',
      ],
      hgr: ['- Bilan, TSH, ponction lombaire si trypanosomiase', ''],
      tert: ['- Polysomnographie, pression positive continue', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Somnolence par apnées du sommeil',
        type: 'commune',
        description: 'Adulte obèse.',
        terrain: '- Obésité, HTA',
        fonctionnels: '- Ronflements, pauses, céphalées matinales',
        generaux: '',
        physiques: '- Obésité',
        paraclinique: '- Polysomnographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Somnolence de la trypanosomiase',
        type: 'etiologique',
        description: 'Maladie du sommeil.',
        terrain: '- Zone d’endémie',
        fonctionnels: '- Inversion du rythme, troubles du comportement',
        generaux: '- Fièvre',
        physiques: '- Adénopathies cervicales',
        paraclinique: '- Trypanosomes',
        etiologies: '- Trypanosoma brucei gambiense',
        syndromes: [],
      },
      {
        nom: 'Somnolence iatrogène',
        type: 'etiologique',
        description: 'Sédatifs.',
        terrain: '- Benzodiazépines, antipsychotiques',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
