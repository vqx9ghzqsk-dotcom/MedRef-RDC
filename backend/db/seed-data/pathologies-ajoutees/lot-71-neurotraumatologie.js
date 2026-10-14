'use strict';

/**
 * Lot 71 (phase 2, neurotraumatologie) — traumatisme crânien léger, commotion cérébrale, séquelles de
 * traumatisme crânien, syndrome post-commotionnel. Rédigé par IA (Brain Trauma Foundation, ACS TQIP,
 * Harrison, OMS) : à valider.
 */

const NTR = { departement: 'neuropsychiatrie', specialite: 'Neurotraumatologie' };

module.exports = [
  // =================================================================== Traumatisme crânien léger
  {
    ...NTR,
    slug: 'traumatisme-cranien-leger',
    nom: 'Traumatisme crânien léger',
    resume:
      'Traumatisme crânien avec score de Glasgow de 13 à 15 (90 % des traumatismes crâniens), très fréquent après les accidents de moto, les chutes et les agressions : perte de connaissance brève (< 30 min) ou amnésie, confusion transitoire, céphalées, vomissements ; risque faible mais réel de lésion intracrânienne (hématome extradural ou sous-dural) : rechercher les facteurs de risque imposant un scanner (Glasgow < 15 à 2 h, vomissements répétés, suspicion de fracture du crâne ouverte ou de la base, crise convulsive, déficit focal, âge > 65 ans, anticoagulants ou antiagrégants, troubles de l’hémostase, mécanisme violent, amnésie > 30 min, intoxication) ; surveillance de 6 à 24 h si scanner indisponible ; consignes écrites de surveillance au domicile ; paracétamol, repos relatif, reprise progressive des activités ; information sur le syndrome post-commotionnel.',
    definition:
      'Traumatisme crânien avec score de Glasgow initial de 13 à 15, associé ou non à une perte de connaissance brève, une amnésie post-traumatique ou une confusion transitoire.',
    physiopathologie:
      '## Mécanismes\n- **Accidents de moto** (sans casque), chutes, agressions, sport\n- Lésions diffuses fonctionnelles (commotion) ; plus rarement **hématome extradural** (intervalle libre), **sous-dural**, contusion, fracture\n\n## Facteurs de risque de lésion\n- Âge > 65 ans, **anticoagulants**, antiagrégants, alcool, troubles de l’hémostase, hémophilie, drépanocytose, VIH avancé',
    diagnostic:
      '## Évaluation initiale\n- **Glasgow**, pupilles, examen neurologique, recherche de plaie du scalp, d’embarrure, de signes de fracture de la base (ecchymose périorbitaire, rétro-auriculaire, otorragie, rhinorrhée de LCR)\n- **Rachis cervical** (immobilisation si douleur ou mécanisme violent), lésions associées, glycémie, alcool\n\n## Indications du scanner cérébral\n- Glasgow < 15 à 2 h ou < 13 à tout moment\n- **Vomissements** répétés (≥ 2), suspicion de **fracture** ouverte, embarrure ou fracture de la base\n- **Crise convulsive**, **déficit focal**, **âge > 65 ans**, **anticoagulants**\n- Amnésie antérograde > 30 min, mécanisme violent (éjection, chute > 1 m ou 5 marches)\n\n## Sans scanner disponible\n- **Surveillance** en milieu hospitalier 6–24 h (Glasgow, pupilles toutes les heures), transfert si aggravation',
    examens: [
      ['premiere_intention', 'scanner-cerebral', 'Selon les critères de risque.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie, trouble de conscience.'],
      ['gravite', 'hemostase', 'Anticoagulants, saignement.'],
      ['deuxieme_intention', 'radiographie-osseuse', 'Rachis cervical, crâne si scanner indisponible.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['hematome-extradural', 'Intervalle libre puis aggravation.'],
      ['hematome-sous-dural', 'Sujet âgé, anticoagulé.'],
      ['traumatisme-cranien', 'Traumatisme crânien modéré ou grave.'],
      ['hypoglycemie-adulte', 'Malaise avec chute.'],
      ['epilepsie', 'Crise avec chute.'],
      ['intoxications-enfant', 'Intoxication associée.'],
    ],
    etiologies: '## Causes\n- Accidents de la route (moto), chutes, agressions, sport',
    principes: [
      [
        'Orientation',
        'Selon le risque.',
        '- **Risque faible** (Glasgow 15, pas de facteur de risque) : retour au domicile avec un adulte et **consignes écrites**\n- **Facteurs de risque** : scanner ou surveillance hospitalière 24 h\n- **Lésion au scanner** ou aggravation : avis neurochirurgical',
      ],
      [
        'Traitement',
        'Simple.',
        '- **Paracétamol** (éviter AINS et aspirine les premières 24 h), antiémétique si besoin\n- Suture des plaies du scalp, **vaccin antitétanique**\n- Repos relatif 24–48 h puis reprise progressive ; pas d’alcool ni de conduite',
      ],
      [
        'Consignes de retour urgent',
        'Information.',
        '- Somnolence inhabituelle, confusion, céphalées croissantes, **vomissements répétés**, convulsions, faiblesse d’un membre, troubles de la vision, écoulement clair du nez ou de l’oreille\n- Prévention : **port du casque**, sécurité routière, prévention des chutes',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Céphalées'],
      ['metoclopramide', 'alternative', 'Vomissements'],
      ['ondansetron', 'alternative', 'Vomissements'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Plaie du scalp'],
      ['lidocaine', 'premiere', 'Suture du scalp'],
    ],
    complications: [
      {
        nom: 'Hématome extradural',
        fiche: 'hematome-extradural',
        description: 'Intervalle libre.',
        traitement: '- Évacuation chirurgicale urgente',
        clinique: '- Aggravation, mydriase',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Hématome sous-dural',
        fiche: 'hematome-sous-dural',
        description: 'Sujet âgé, anticoagulé.',
        traitement: '- Chirurgie selon le volume',
        clinique: '- Céphalées, confusion',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Syndrome post-commotionnel',
        fiche: 'syndrome-post-commotionnel',
        description: 'Symptômes persistants.',
        traitement: '- Information, reprise progressive',
        clinique: '- Céphalées, fatigue',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération complète en quelques jours à semaines chez la majorité ; lésion neurochirurgicale chez moins de 1 %',
    urgences: ['traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Amnésie', 'frequent'],
      ['Vertiges', 'frequent'],
      ['Désorientation', 'occasionnel'],
    ],
    sources: [
      'Guidelines for the Management of Severe Traumatic Brain Injury (4th edition)',
      'ACS TQIP — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Glasgow, pupilles, suture, consignes, référence si facteur de risque',
        '- Vomissements répétés, somnolence, déficit, anticoagulant',
      ],
      hgr: ['- Surveillance 24 h, scanner si disponible', ''],
      tert: ['- Scanner, neurochirurgie', ''],
    },
    alertes: { 'traumatisme-cranien-grave-urgence': 'Baisse du Glasgow, anisocorie, déficit' },
    formes: [
      {
        nom: 'Traumatisme crânien léger à faible risque',
        type: 'commune',
        description: 'Retour au domicile.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Céphalées',
        generaux: '',
        physiques: '- Glasgow 15',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Traumatisme crânien léger à risque',
        type: 'gravite',
        description: 'Scanner, surveillance.',
        terrain: '- Plus de 65 ans, anticoagulants',
        fonctionnels: '- Vomissements',
        generaux: '',
        physiques: '- Glasgow 13–14',
        paraclinique: '- Scanner',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Traumatisme crânien léger de l’enfant',
        type: 'terrain',
        description: 'Chutes.',
        terrain: '- Enfant',
        fonctionnels: '- Pleurs, vomissements',
        generaux: '',
        physiques: '- Hématome du scalp',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Commotion cérébrale
  {
    ...NTR,
    slug: 'commotion-cerebrale',
    nom: 'Commotion cérébrale',
    resume:
      'Dysfonctionnement cérébral transitoire d’origine traumatique sans lésion visible à l’imagerie, fréquent dans les sports de contact (football, boxe, arts martiaux, rugby), les chutes et les accidents : perte de connaissance brève inconstante, regard vague, confusion, amnésie de l’événement, céphalées, vertiges, nausées, troubles de l’équilibre, sensibilité à la lumière et au bruit, troubles de la concentration, irritabilité, somnolence ; tout joueur suspect doit être retiré immédiatement du jeu et ne pas reprendre le jour même ; évaluation (outil SCAT, signes d’alarme imposant le transfert) ; repos physique et cognitif relatif 24–48 h puis reprise progressive par paliers (école avant le sport) ; retour au sport seulement après disparition des symptômes ; risque du syndrome du second impact chez le jeune.',
    definition:
      'Lésion cérébrale traumatique légère, fonctionnelle et habituellement réversible, provoquée par une force transmise à la tête, sans anomalie structurelle à l’imagerie standard.',
    physiopathologie:
      '## Mécanismes\n- Accélération-décélération et rotation du cerveau → **crise métabolique neuronale** (flux ioniques, demande énergétique accrue, débit sanguin réduit)\n- Période de **vulnérabilité** : un second choc peut entraîner un œdème cérébral massif (**syndrome du second impact**, surtout chez l’adolescent)\n\n## Contextes\n- **Sports** de contact, chutes, accidents de la route, agressions, explosions',
    diagnostic:
      '## Signes observables\n- Perte de connaissance ou absence de réaction, regard vide, lenteur à se relever, troubles de l’équilibre, désorientation, plaie de la face\n\n## Symptômes\n- **Céphalées**, pression dans la tête, **vertiges**, **nausées**, vision floue, sensibilité à la lumière et au bruit\n- Sensation d’être « dans le brouillard », **troubles de la concentration** et de la mémoire, **irritabilité**, tristesse, somnolence ou troubles du sommeil\n\n## Signes d’alarme (transfert urgent)\n- Douleur ou raideur du cou, **vision double**, faiblesse ou fourmillements d’un membre, **céphalée croissante**, **convulsions**, **vomissements répétés**, perte de connaissance, aggravation de la confusion\n\n## Examens\n- Évaluation structurée (SCAT, mémoire, équilibre) ; **scanner** seulement selon les critères du traumatisme crânien léger',
    examens: [
      ['deuxieme_intention', 'scanner-cerebral', 'Signes d’alarme ou facteurs de risque.'],
      ['premiere_intention', 'glycemie', 'Diagnostic différentiel.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['traumatisme-cranien-leger', 'Lésion intracrânienne possible.'],
      ['hematome-extradural', 'Aggravation secondaire.'],
      ['traumatisme-vertebro-medullaire', 'Douleur cervicale, déficit.'],
      ['hypoglycemie-adulte', 'Malaise pendant l’effort.'],
      ['syncope-et-malaise', 'Perte de connaissance sans choc.'],
    ],
    etiologies: '## Causes\n- Sports de contact, chutes, accidents, agressions',
    principes: [
      [
        'Sur le terrain',
        'Retirer du jeu.',
        '- **Retrait immédiat** de tout joueur suspect, **pas de reprise le jour même**\n- Recherche des signes d’alarme ; immobilisation du cou si douleur cervicale ; transfert si alarme\n- Ne pas laisser seul les premières heures',
      ],
      [
        'Reprise progressive',
        'Par paliers.',
        '- **Repos relatif** 24–48 h (réduire écrans et efforts intenses), sommeil\n- Reprise des activités quotidiennes puis **scolaires** (aménagements) avant le sport\n- **Retour au sport** par paliers d’au moins 24 h (marche, course, exercices sans contact, entraînement avec contact, compétition) après disparition des symptômes et avis médical',
      ],
      [
        'Traitement',
        'Symptomatique.',
        '- **Paracétamol** les premiers jours (éviter l’abus d’antalgiques), pas d’alcool\n- Consultation si symptômes > 2–4 semaines (syndrome post-commotionnel)',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Céphalées'],
      ['ondansetron', 'alternative', 'Nausées'],
    ],
    complications: [
      {
        nom: 'Syndrome post-commotionnel',
        fiche: 'syndrome-post-commotionnel',
        description: 'Symptômes prolongés.',
        traitement: '- Prise en charge active',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Syndrome du second impact',
        description: 'Nouveau choc avant récupération.',
        traitement: '- Réanimation, neurochirurgie',
        clinique: '- Coma rapide',
        paraclinique: '- Œdème cérébral',
      },
      {
        nom: 'Encéphalopathie traumatique chronique',
        fiche: 'sequelles-de-traumatisme-cranien',
        description: 'Commotions répétées (boxe).',
        traitement: '- Prévention',
        clinique: '- Troubles cognitifs et de l’humeur',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération en 10–14 jours chez l’adulte, jusqu’à 4 semaines chez l’enfant et l’adolescent',
    urgences: ['traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Vertiges', 'frequent'],
      ['Nausées', 'frequent'],
      ['Troubles de la concentration', 'frequent'],
      ['Amnésie', 'frequent'],
      ['Irritabilité', 'occasionnel'],
      ['Troubles du sommeil', 'occasionnel'],
    ],
    sources: [
      'ACS TQIP — recommandations de pratique clinique',
      'Guidelines for the Management of Severe Traumatic Brain Injury (4th edition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Retrait du jeu, recherche des signes d’alarme, conseils de reprise', '- Signes d’alarme'],
      hgr: ['- Évaluation, scanner si critères', ''],
      tert: ['- Neurologie du sport, formes prolongées', ''],
    },
    alertes: { 'traumatisme-cranien-grave-urgence': 'Signes d’alarme après un choc' },
    formes: [
      {
        nom: 'Commotion du sportif',
        type: 'commune',
        description: 'Sports de contact.',
        terrain: '- Adolescent, adulte jeune',
        fonctionnels: '- Céphalées, brouillard',
        generaux: '',
        physiques: '- Troubles de l’équilibre',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Commotion de l’enfant',
        type: 'terrain',
        description: 'Récupération plus lente.',
        terrain: '- Enfant',
        fonctionnels: '- Irritabilité, troubles scolaires',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Séquelles de traumatisme crânien
  {
    ...NTR,
    slug: 'sequelles-de-traumatisme-cranien',
    nom: 'Séquelles de traumatisme crânien',
    resume:
      'Conséquences durables des traumatismes crâniens modérés et graves, fréquents chez l’adulte jeune après les accidents de moto en RDC : troubles cognitifs (mémoire, attention, fonctions exécutives, lenteur), troubles du comportement (irritabilité, impulsivité, désinhibition, apathie), troubles de l’humeur (dépression, anxiété, stress post-traumatique), déficits moteurs (hémiparésie, spasticité, ataxie), épilepsie post-traumatique, céphalées chroniques, troubles sensoriels (anosmie, surdité, troubles visuels), troubles endocriniens (insuffisance hypophysaire) ; hydrocéphalie et hygromas à rechercher en cas d’aggravation ; prise en charge par une rééducation multidisciplinaire précoce (kinésithérapie, orthophonie, ergothérapie, neuropsychologie), traitement de l’épilepsie et de la spasticité, soutien des familles, réinsertion scolaire et professionnelle ; « handicap invisible » souvent méconnu.',
    definition:
      'Ensemble des déficiences physiques, cognitives, comportementales et émotionnelles persistant au-delà de la phase aiguë d’un traumatisme crânien.',
    physiopathologie:
      '## Lésions\n- **Lésions axonales diffuses**, contusions frontales et temporales, hématomes, lésions hypoxiques et ischémiques secondaires\n\n## Séquelles\n- **Cognitives** (atteinte frontale : fonctions exécutives, attention, mémoire)\n- **Comportementales** et émotionnelles\n- **Motrices**, **épilepsie** post-traumatique (contusions, hématomes, embarrures)\n- **Endocriniennes** (lésion hypothalamo-hypophysaire)\n- Complications tardives : **hydrocéphalie**, hygromas sous-duraux, encéphalopathie traumatique chronique',
    diagnostic:
      '## Évaluation\n- **Cognitive** : mémoire, attention, lenteur, planification, jugement (tests neuropsychologiques)\n- **Comportement** : irritabilité, agressivité, impulsivité, apathie, désinhibition (souvent rapportés par l’entourage)\n- **Humeur** : dépression, anxiété, stress post-traumatique, consommation d’alcool\n- **Moteur** : hémiparésie, spasticité, ataxie, troubles de la marche\n- Crises d’épilepsie, céphalées, troubles du sommeil, anosmie, troubles visuels et auditifs\n- Signes endocriniens : fatigue, aménorrhée, polyurie (diabète insipide)\n\n## Examens\n- **Scanner** ou IRM si aggravation (hydrocéphalie, hygroma)\n- **EEG** si crises ; bilan hormonal hypophysaire si signes cliniques',
    examens: [
      ['deuxieme_intention', 'scanner-cerebral', 'Hydrocéphalie, hygroma.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Lésions axonales.'],
      ['deuxieme_intention', 'eeg', 'Épilepsie post-traumatique.'],
      ['etiologique', 'ionogramme', 'Diabète insipide, hyponatrémie.'],
      ['etiologique', 'tsh', 'Insuffisance hypophysaire.'],
    ],
    scores: [],
    differentiels: [
      ['depression', 'Troubles de l’humeur.'],
      ['etat-de-stress-post-traumatique', 'Reviviscences, évitement.'],
      ['hydrocephalie-a-pression-normale', 'Aggravation de la marche et de la cognition.'],
      ['trouble-de-l-usage-de-l-alcool', 'Aggravation par l’alcool.'],
      ['hematome-sous-dural', 'Hématome chronique.'],
    ],
    etiologies:
      '## Causes\n- Traumatismes crâniens modérés et graves (accidents de moto, agressions, chutes)',
    principes: [
      [
        'Rééducation',
        'Précoce et multidisciplinaire.',
        '- **Kinésithérapie** (motricité, équilibre), **orthophonie**, **ergothérapie** (autonomie), **rééducation cognitive**\n- Programme adapté et objectifs avec le patient et la famille',
      ],
      [
        'Traitements médicaux',
        'Selon les séquelles.',
        '- **Épilepsie** : lévétiracétam, carbamazépine, valproate (pas de prophylaxie prolongée au-delà de 7 jours sans crise)\n- **Spasticité** : baclofène, toxine botulique\n- **Dépression** : sertraline ; agitation : propranolol, éviter les neuroleptiques et benzodiazépines au long cours\n- Céphalées : amitriptyline ; insuffisance hypophysaire : substitution',
      ],
      [
        'Réinsertion',
        'Famille et société.',
        '- Information et **soutien des familles** (handicap invisible), aide aux aidants\n- Reprise scolaire et professionnelle aménagée, conduite à réévaluer\n- Abstinence d’alcool ; prévention des récidives (casque)',
      ],
    ],
    molecules: [
      ['levetiracetam', 'premiere', 'Épilepsie post-traumatique'],
      ['carbamazepine', 'alternative', 'Épilepsie, agressivité'],
      ['baclofene', 'premiere', 'Spasticité'],
      ['toxine-botulinique-type-a', 'alternative', 'Spasticité focale'],
      ['sertraline', 'premiere', 'Dépression'],
      ['propranolol', 'alternative', 'Agitation, agressivité'],
      ['amitriptyline', 'alternative', 'Céphalées chroniques'],
    ],
    complications: [
      {
        nom: 'Épilepsie post-traumatique',
        fiche: 'epilepsie',
        description: 'Contusions, hématomes.',
        traitement: '- Antiépileptiques',
        clinique: '- Crises',
        paraclinique: '- EEG',
      },
      {
        nom: 'Hydrocéphalie post-traumatique',
        fiche: 'hydrocephalie-a-pression-normale',
        description: 'Troubles de la résorption.',
        traitement: '- Dérivation',
        clinique: '- Aggravation',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Dépression et suicide',
        fiche: 'depression',
        description: 'Fréquente.',
        traitement: '- Antidépresseurs, soutien',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Désinsertion sociale',
        description: 'Troubles cognitifs et comportementaux.',
        traitement: '- Réinsertion',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération possible pendant 1–2 ans ; séquelles cognitives et comportementales fréquentes après un traumatisme grave',
    urgences: [],
    symptomes: [
      ['Troubles de la mémoire', 'tres_frequent'],
      ['Troubles de la concentration', 'tres_frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Irritabilité', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Déficit moteur', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
      ['Humeur dépressive', 'frequent'],
    ],
    sources: [
      'Guidelines for the Management of Severe Traumatic Brain Injury (4th edition)',
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Suivi, soutien des familles, rééducation communautaire', ''],
      hgr: ['- Kinésithérapie, traitement de l’épilepsie', ''],
      tert: ['- Rééducation spécialisée, neuropsychologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Séquelles cognitives et comportementales',
        type: 'commune',
        description: 'Handicap invisible.',
        terrain: '- Adulte jeune après traumatisme grave',
        fonctionnels: '- Troubles de la mémoire, irritabilité',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Séquelles motrices',
        type: 'gravite',
        description: 'Hémiparésie, spasticité.',
        terrain: '',
        fonctionnels: '- Troubles de la marche',
        generaux: '',
        physiques: '- Spasticité',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-pyramidal'],
      },
      {
        nom: 'Épilepsie post-traumatique',
        type: 'evolutive',
        description: 'Crises tardives.',
        terrain: '- Contusion, embarrure',
        fonctionnels: '- Crises',
        generaux: '',
        physiques: '',
        paraclinique: '- EEG',
        etiologies: '',
        syndromes: ['syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== Syndrome post-commotionnel
  {
    ...NTR,
    slug: 'syndrome-post-commotionnel',
    nom: 'Syndrome post-commotionnel',
    resume:
      'Persistance au-delà de 4 semaines (parfois des mois) de symptômes après un traumatisme crânien léger ou une commotion : céphalées, vertiges, fatigue, troubles du sommeil, troubles de la concentration et de la mémoire, irritabilité, anxiété, humeur dépressive, sensibilité au bruit et à la lumière ; favorisé par des antécédents de migraine, d’anxiété ou de dépression, le stress, les litiges, l’abus d’antalgiques, une information insuffisante ; examen normal ; éliminer une complication (hématome sous-dural chronique, hydrocéphalie) si aggravation ou signe focal ; prise en charge active : information rassurante et précoce, reprise progressive des activités, activité physique adaptée, hygiène du sommeil, traitement des céphalées (éviter l’abus d’antalgiques, amitriptyline), rééducation vestibulaire, thérapie cognitivo-comportementale, traitement de la dépression et de l’anxiété ; bon pronostic dans la majorité des cas.',
    definition:
      'Ensemble de symptômes somatiques, cognitifs et émotionnels persistant plus de quatre semaines après un traumatisme crânien léger, sans lésion structurelle expliquant leur intensité.',
    physiopathologie:
      '## Mécanismes\n- Dysfonctionnement neuronal persistant (composante organique) et **facteurs psychologiques** (anxiété, attentes négatives, stress)\n- Facteurs vestibulaires et cervicaux (vertiges, céphalées cervicogènes)\n\n## Facteurs de risque\n- Antécédents de **migraine**, d’**anxiété**, de **dépression**, de commotions antérieures\n- Sexe féminin, stress, litiges, **abus d’antalgiques**, repos prolongé excessif',
    diagnostic:
      '## Clinique\n- **Somatiques** : céphalées, vertiges, fatigue, nausées, sensibilité au bruit et à la lumière, troubles du sommeil\n- **Cognitifs** : troubles de la concentration, de la mémoire, lenteur\n- **Émotionnels** : irritabilité, anxiété, humeur dépressive\n- **Examen neurologique normal**\n\n## Éliminer\n- **Hématome sous-dural chronique** (sujet âgé, céphalées croissantes, signes focaux), hydrocéphalie : **scanner**\n- Dépression, stress post-traumatique, céphalée par abus d’antalgiques, troubles vestibulaires (VPPB post-traumatique)',
    examens: [
      ['deuxieme_intention', 'scanner-cerebral', 'Si aggravation ou signes focaux.'],
      ['deuxieme_intention', 'epreuves-vestibulaires', 'VPPB post-traumatique.'],
    ],
    scores: [],
    differentiels: [
      ['hematome-sous-dural', 'Hématome chronique.'],
      ['depression', 'Humeur dépressive au premier plan.'],
      ['etat-de-stress-post-traumatique', 'Reviviscences, évitement.'],
      ['cephalee-de-tension', 'Céphalée par abus d’antalgiques.'],
      ['vertiges', 'VPPB post-traumatique.'],
    ],
    etiologies: '## Cause\n- Traumatisme crânien léger ou commotion, avec facteurs de vulnérabilité',
    principes: [
      [
        'Information',
        'Clé du traitement.',
        '- **Expliquer** les symptômes, leur caractère attendu et leur bon pronostic, dès la prise en charge initiale\n- Éviter le repos prolongé et l’arrêt total des activités',
      ],
      [
        'Reprise active',
        'Progressive.',
        '- Reprise progressive des activités, de l’école et du travail (aménagements temporaires)\n- **Activité physique** aérobie adaptée, **hygiène du sommeil**\n- **Rééducation vestibulaire** si vertiges ; kinésithérapie cervicale',
      ],
      [
        'Traitements',
        'Ciblés.',
        '- Céphalées : limiter les antalgiques (< 10 jours par mois), **amitriptyline** le soir\n- **Dépression** et **anxiété** : sertraline, thérapie cognitivo-comportementale\n- Insomnie : mesures comportementales, mélatonine',
      ],
    ],
    molecules: [
      ['amitriptyline', 'premiere', 'Céphalées, sommeil'],
      ['paracetamol', 'alternative', 'Céphalées (usage limité)'],
      ['sertraline', 'alternative', 'Dépression, anxiété'],
      ['melatonine', 'adjuvant', 'Troubles du sommeil'],
    ],
    complications: [
      {
        nom: 'Chronicisation',
        description: 'Symptômes > 3 mois.',
        traitement: '- Prise en charge multidisciplinaire',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Céphalée par abus d’antalgiques',
        fiche: 'cephalee-de-tension',
        description: 'Prises répétées.',
        traitement: '- Sevrage',
        clinique: '- Céphalée quotidienne',
        paraclinique: '',
      },
      {
        nom: 'Dépression',
        fiche: 'depression',
        description: 'Retentissement.',
        traitement: '- Antidépresseurs',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Guérison en 3 mois chez la majorité ; 10–15 % de formes prolongées',
    urgences: [],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Vertiges', 'frequent'],
      ['Troubles de la concentration', 'frequent'],
      ['Troubles de la mémoire', 'frequent'],
      ['Irritabilité', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Anxiété', 'frequent'],
    ],
    sources: [
      'ACS TQIP — recommandations de pratique clinique',
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Information, reprise progressive, amitriptyline', '- Céphalées croissantes, signe focal'],
      hgr: ['- Scanner si alerte, prise en charge de l’humeur', ''],
      tert: ['- Rééducation vestibulaire, neuropsychologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme habituelle',
        type: 'commune',
        description: 'Récupération en semaines.',
        terrain: '- Après traumatisme léger',
        fonctionnels: '- Céphalées, fatigue',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme prolongée',
        type: 'evolutive',
        description: 'Plus de 3 mois.',
        terrain: '- Anxiété, dépression, litiges',
        fonctionnels: '- Troubles cognitifs',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
