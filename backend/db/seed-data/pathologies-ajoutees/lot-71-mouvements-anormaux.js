'use strict';

/**
 * Lot 71 (phase 2, mouvements anormaux) — syndromes parkinsoniens médicamenteux, tremblement
 * essentiel, dystonies, chorées, syndrome des jambes sans repos, tics. Rédigé par IA (MDS, Harrison,
 * mhGAP, Nelson) : à valider.
 */

const MVT = { departement: 'neuropsychiatrie', specialite: 'Mouvements anormaux' };

module.exports = [
  // =================================================================== Syndromes parkinsoniens médicamenteux
  {
    ...MVT,
    slug: 'syndromes-parkinsoniens-medicamenteux',
    nom: 'Syndromes parkinsoniens médicamenteux',
    resume:
      'Effets extrapyramidaux des médicaments bloquant les récepteurs dopaminergiques, très fréquents en RDC où l’halopéridol, la chlorpromazine et la fluphénazine retard sont largement utilisés, ainsi que le métoclopramide et la prométhazine : syndrome parkinsonien (lenteur, rigidité, tremblement, faciès figé, bilatéral et symétrique, apparu dans les semaines suivant le début ou l’augmentation du traitement), dystonie aiguë (torticolis, crise oculogyre, protrusion de la langue, trismus — souvent chez l’homme jeune dans les 72 h, spectaculaire et effrayante), akathisie (impossibilité de rester en place), dyskinésies tardives (mouvements bucco-linguo-faciaux après des mois ou années) ; traitement : réduire la dose ou passer à un antipsychotique moins incisif, bipéridène ou trihexyphénidyle pour la dystonie aiguë et le parkinsonisme, propranolol pour l’akathisie ; ne pas confondre avec le syndrome malin des neuroleptiques (fièvre, rigidité, troubles de conscience : urgence).',
    definition:
      'Ensemble des troubles moteurs extrapyramidaux (parkinsonisme, dystonie aiguë, akathisie, dyskinésies tardives) induits par les médicaments antagonistes des récepteurs dopaminergiques.',
    physiopathologie:
      '## Mécanisme\n- **Blocage des récepteurs D2** du striatum → déséquilibre dopamine-acétylcholine\n- Dyskinésies tardives : hypersensibilité des récepteurs après blocage prolongé\n\n## Médicaments en cause\n- **Antipsychotiques** : halopéridol, **fluphénazine** retard, chlorpromazine, rispéridone (dose-dépendante)\n- **Antiémétiques** : **métoclopramide**, prométhazine ; flunarizine, cinnarizine\n- Valproate (tremblement, parkinsonisme), lithium\n\n## Facteurs de risque\n- Doses élevées, antipsychotiques incisifs et retard, sujet âgé (parkinsonisme), homme jeune (dystonie aiguë), femme âgée (dyskinésies tardives)',
    diagnostic:
      '## Formes\n- **Dystonie aiguë** (heures à jours) : torticolis, opisthotonos, **crise oculogyre**, protrusion de la langue, trismus, laryngospasme (rare, grave)\n- **Akathisie** (jours à semaines) : agitation motrice, piétinement, angoisse (souvent confondue avec une aggravation psychotique)\n- **Parkinsonisme** (semaines) : **bradykinésie**, **rigidité**, tremblement, marche à petits pas, hypersialorrhée, symétrique\n- **Dyskinésies tardives** (mois, années) : mâchonnements, mouvements de langue, grimaces, mouvements choréiques\n\n## Éliminer\n- **Syndrome malin des neuroleptiques** : fièvre, rigidité intense, troubles de conscience, instabilité tensionnelle, CPK élevées\n- Maladie de Parkinson (asymétrique, préexistante), maladie de Wilson (sujet jeune)',
    examens: [
      ['gravite', 'cpk', 'Syndrome malin des neuroleptiques.'],
      ['etiologique', 'ceruloplasmine-cuivre', 'Maladie de Wilson (sujet jeune).'],
      ['etiologique', 'tsh', 'Dysthyroïdie.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Cause structurelle si atypique.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-malin-des-neuroleptiques', 'Fièvre, rigidité, troubles de conscience.'],
      ['maladie-de-parkinson', 'Asymétrique, sans médicament en cause.'],
      ['tetanos', 'Trismus avec contractures et spasmes, plaie.'],
      ['dystonies', 'Dystonies primaires ou secondaires.'],
      ['crises-non-epileptiques-psychogenes', 'Mouvements fonctionnels.'],
    ],
    etiologies:
      '## Causes\n- Halopéridol, fluphénazine, chlorpromazine, rispéridone, métoclopramide, prométhazine, flunarizine, valproate',
    principes: [
      [
        'Dystonie aiguë',
        'Urgence rassurante.',
        '- **Bipéridène** 2,5–5 mg IM ou IV (ou prométhazine, diphénhydramine IM ; diazépam) : effet en minutes\n- Relais oral par **trihexyphénidyle** quelques jours ; réévaluer le traitement en cause',
      ],
      [
        'Parkinsonisme et akathisie',
        'Ajuster.',
        '- **Réduire la dose** ou passer à un antipsychotique moins incisif (rispéridone à faible dose, olanzapine)\n- Parkinsonisme : **trihexyphénidyle** 2–6 mg/j, sur une durée limitée\n- Akathisie : **propranolol** 10–40 mg/j, benzodiazépine\n- Éviter le métoclopramide au long cours (préférer la dompéridone chez l’adulte si indiqué)',
      ],
      [
        'Dyskinésies tardives',
        'Prévenir.',
        '- Doses minimales efficaces, réévaluation régulière, pas d’anticholinergiques en continu\n- Traitement : réduire progressivement le neuroleptique, tétrabénazine en centre spécialisé',
      ],
    ],
    molecules: [
      ['biperidene', 'premiere', 'Dystonie aiguë (IM)'],
      ['trihexyphenidyle', 'premiere', 'Parkinsonisme, relais'],
      ['promethazine', 'alternative', 'Dystonie aiguë'],
      ['diphenhydramine', 'alternative', 'Dystonie aiguë'],
      ['diazepam', 'alternative', 'Dystonie aiguë, akathisie'],
      ['propranolol', 'premiere', 'Akathisie'],
      ['tetrabenazine', 'alternative', 'Dyskinésies tardives sévères'],
      ['olanzapine', 'alternative', 'Antipsychotique de substitution'],
    ],
    complications: [
      {
        nom: 'Syndrome malin des neuroleptiques',
        fiche: 'syndrome-malin-des-neuroleptiques',
        description: 'Urgence vitale.',
        traitement: '- Arrêt du neuroleptique, réanimation',
        clinique: '- Fièvre, rigidité',
        paraclinique: '- CPK',
      },
      {
        nom: 'Arrêt du traitement et rechute psychotique',
        fiche: 'schizophrenie',
        description: 'Effets indésirables mal tolérés.',
        traitement: '- Adapter plutôt qu’arrêter',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Laryngospasme',
        description: 'Dystonie laryngée.',
        traitement: '- Bipéridène IV, oxygène',
        clinique: '- Stridor',
        paraclinique: '',
      },
      {
        nom: 'Chutes et fausses routes',
        description: 'Parkinsonisme du sujet âgé.',
        traitement: '- Réduction du traitement',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dystonie aiguë, akathisie et parkinsonisme réversibles ; dyskinésies tardives souvent persistantes',
    urgences: [],
    symptomes: [
      ['Rigidité musculaire', 'frequent'],
      ['Lenteur des mouvements', 'frequent'],
      ['Tremblements', 'frequent'],
      ['Mouvements involontaires', 'frequent'],
      ['Postures anormales', 'frequent'],
      ['Anxiété', 'occasionnel'],
    ],
    sources: [
      'MDS — recommandations de pratique clinique',
      'mhGAP Intervention Guide 2.0',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Reconnaître, bipéridène ou prométhazine IM, réduire la dose', '- Fièvre avec rigidité'],
      hgr: ['- Adaptation du traitement antipsychotique', ''],
      tert: ['- Dyskinésies tardives, neurologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dystonie aiguë',
        type: 'commune',
        description: 'Premiers jours.',
        terrain: '- Homme jeune, halopéridol, métoclopramide',
        fonctionnels: '- Torticolis, crise oculogyre',
        generaux: '',
        physiques: '- Postures anormales',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Parkinsonisme médicamenteux',
        type: 'terrain',
        description: 'Sujet âgé.',
        terrain: '- Sujet âgé sous neuroleptique',
        fonctionnels: '- Lenteur',
        generaux: '',
        physiques: '- Rigidité symétrique',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dyskinésies tardives',
        type: 'evolutive',
        description: 'Après des années.',
        terrain: '- Neuroleptique prolongé',
        fonctionnels: '',
        generaux: '',
        physiques: '- Mouvements bucco-linguo-faciaux',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Tremblement essentiel
  {
    ...MVT,
    slug: 'tremblement-essentiel',
    nom: 'Tremblement essentiel',
    resume:
      'Trouble du mouvement le plus fréquent de l’adulte, souvent familial : tremblement d’action (postural et cinétique) bilatéral des mains, gênant pour écrire, boire, manger, parfois de la tête (« oui-oui » ou « non-non ») et de la voix, absent au repos, aggravé par l’émotion, la fatigue, la caféine, amélioré par l’alcool ; sans autre signe neurologique ; à distinguer du tremblement de repos parkinsonien, des tremblements physiologiques exagérés (hyperthyroïdie, anxiété, sevrage alcoolique, hypoglycémie), médicamenteux (salbutamol, valproate, lithium, antidépresseurs) ; TSH ; traitement si gêne : propranolol ou primidone, mesures pratiques ; évolution lente.',
    definition:
      'Tremblement d’action isolé et bilatéral des membres supérieurs, évoluant depuis au moins 3 ans, avec ou sans tremblement de la tête, de la voix ou des membres inférieurs, sans autre signe neurologique.',
    physiopathologie:
      '## Mécanismes\n- Oscillation anormale des circuits **cérébello-thalamo-corticaux**\n- **Héréditaire** dans plus de la moitié des cas (transmission autosomique dominante)\n\n## Facteurs aggravants\n- Émotion, fatigue, caféine, froid, médicaments',
    diagnostic:
      '## Clinique\n- **Tremblement postural** (bras tendus) et **cinétique** (épreuve doigt-nez, écriture, verre d’eau, spirale)\n- **Bilatéral**, plus ou moins symétrique ; **tête**, voix\n- **Absent au repos** ; **amélioré par l’alcool** ; antécédents familiaux\n- **Examen neurologique normal** (pas de rigidité ni de bradykinésie)\n\n## Éliminer\n- **Hyperthyroïdie** (TSH), anxiété, **sevrage alcoolique**, hypoglycémie, **médicaments** (salbutamol, valproate, lithium, corticoïdes, antidépresseurs, caféine)\n- **Maladie de Parkinson** (tremblement de repos, asymétrique, rigidité)\n- **Maladie de Wilson** chez le sujet de moins de 40 ans (céruloplasmine)',
    examens: [
      ['premiere_intention', 'tsh', 'Hyperthyroïdie.'],
      ['etiologique', 'glycemie', 'Hypoglycémie.'],
      ['etiologique', 'ceruloplasmine-cuivre', 'Wilson avant 40 ans.'],
      ['etiologique', 'bilan-hepatique', 'Alcool, Wilson.'],
    ],
    scores: [],
    differentiels: [
      ['maladie-de-parkinson', 'Tremblement de repos, rigidité, bradykinésie.'],
      ['hyperthyroidie-basedow', 'Tremblement fin, amaigrissement, tachycardie.'],
      ['sevrage-alcoolique-delirium-tremens', 'Tremblement de sevrage, sueurs.'],
      ['trouble-anxieux-generalise', 'Tremblement émotionnel.'],
      ['syndromes-parkinsoniens-medicamenteux', 'Tremblement médicamenteux.'],
    ],
    etiologies: '## Cause\n- Héréditaire ou sporadique',
    principes: [
      [
        'Mesures non médicamenteuses',
        'Toujours.',
        '- Explication du caractère bénin, éviter la caféine et le manque de sommeil\n- Astuces : tasses lestées, gobelets à couvercle, couverts épais, poignets lestés',
      ],
      [
        'Traitement médical',
        'Si gêne.',
        '- **Propranolol** 40–160 mg/j (contre-indiqué si asthme, bradycardie, BPCO sévère)\n- **Primidone** 25 mg le soir, augmentation lente jusqu’à 50–250 mg/j\n- Alternatives : topiramate, gabapentine ; propranolol ponctuel avant une situation stressante',
      ],
      [
        'Formes sévères',
        'Centre spécialisé.',
        '- Toxine botulique (tête, voix), stimulation cérébrale profonde ou thalamotomie',
      ],
    ],
    molecules: [
      ['propranolol', 'premiere', 'Traitement de première intention'],
      ['primidone', 'premiere', 'Traitement de première intention'],
      ['topiramate', 'alternative', 'Deuxième ligne'],
      ['gabapentine', 'alternative', 'Deuxième ligne'],
      ['toxine-botulinique-type-a', 'alternative', 'Tremblement de la tête ou de la voix'],
    ],
    complications: [
      {
        nom: 'Handicap fonctionnel et social',
        description: 'Écriture, repas, gêne sociale.',
        traitement: '- Traitement, aides techniques',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Abus d’alcool',
        fiche: 'trouble-de-l-usage-de-l-alcool',
        description: 'Automédication par l’alcool.',
        traitement: '- Information, traitement',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Anxiété et isolement',
        fiche: 'trouble-anxieux-generalise',
        description: 'Retentissement.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bénin mais lentement progressif ; peut devenir invalidant avec l’âge',
    urgences: [],
    symptomes: [
      ['Tremblements', 'tres_frequent'],
      ['Anxiété', 'occasionnel'],
    ],
    sources: ['MDS — recommandations de pratique clinique', "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: ['- Diagnostic clinique, TSH, propranolol', ''],
      hgr: ['- Primidone, bilan', ''],
      tert: ['- Toxine botulique, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tremblement essentiel des mains',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Adulte, antécédents familiaux',
        fonctionnels: '- Gêne pour écrire, boire',
        generaux: '',
        physiques: '- Tremblement postural et cinétique',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Tremblement céphalique et vocal',
        type: 'topographique',
        description: 'Tête, voix.',
        terrain: '- Femme âgée',
        fonctionnels: '- Voix chevrotante',
        generaux: '',
        physiques: '- Tremblement de la tête',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dystonies
  {
    ...MVT,
    slug: 'dystonies',
    nom: 'Dystonies',
    resume:
      'Troubles du mouvement caractérisés par des contractions musculaires involontaires et prolongées entraînant des torsions, des postures anormales et des mouvements répétitifs : focales (torticolis spasmodique, blépharospasme, crampe de l’écrivain, dystonie oromandibulaire), segmentaires ou généralisées (début dans l’enfance, souvent génétique) ; secondaires à l’asphyxie périnatale et à l’ictère nucléaire (paralysie cérébrale dyskinétique), aux médicaments (neuroleptiques, métoclopramide : dystonie aiguë), à la maladie de Wilson, aux AVC et aux encéphalites ; « geste antagoniste » caractéristique (toucher le menton calme le torticolis) ; traitement : arrêt du médicament en cause, bipéridène en aigu, toxine botulique pour les formes focales, trihexyphénidyle et baclofène pour les formes généralisées, lévodopa d’épreuve chez l’enfant (dystonie dopa-sensible), kinésithérapie ; rechercher une maladie de Wilson avant 40 ans.',
    definition:
      'Syndrome moteur caractérisé par des contractions musculaires soutenues ou intermittentes provoquant des mouvements et/ou des postures anormales, souvent répétitifs et en torsion.',
    physiopathologie:
      '## Mécanismes\n- Dysfonctionnement des **noyaux gris centraux** et des réseaux sensorimoteurs (perte de l’inhibition, co-contraction des agonistes et antagonistes)\n\n## Causes\n- **Primaires** (isolées) : génétiques (DYT1), focales de l’adulte\n- **Secondaires** : **asphyxie périnatale**, **ictère nucléaire** (paralysie cérébrale dyskinétique), **médicaments** (neuroleptiques, métoclopramide), **maladie de Wilson**, AVC, encéphalites, traumatismes, lésions des noyaux gris\n- **Dystonie dopa-sensible** (enfant, aggravation vespérale)',
    diagnostic:
      '## Clinique\n- **Postures anormales** en torsion (cou, tronc, membres), mouvements répétitifs, parfois tremblement dystonique\n- Déclenchées ou aggravées par l’action (crampe de l’écrivain), le stress\n- **Geste antagoniste** (toucher le menton ou la joue) qui atténue la dystonie\n- Focales : **torticolis** (rotation ou inclinaison de la tête, douleur cervicale), **blépharospasme** (fermeture involontaire des yeux), dystonie oromandibulaire, laryngée (voix serrée)\n\n## Bilan\n- **Interrogatoire médicamenteux**, antécédents périnatals\n- Avant 40 ans : **céruloplasmine**, cuivre (Wilson), examen ophtalmologique (anneau de Kayser-Fleischer), bilan hépatique\n- **IRM cérébrale** (formes secondaires) ; épreuve à la lévodopa chez l’enfant',
    examens: [
      ['etiologique', 'ceruloplasmine-cuivre', 'Maladie de Wilson.'],
      ['etiologique', 'bilan-hepatique', 'Wilson.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Lésions des noyaux gris centraux.'],
      ['etiologique', 'tsh', 'Diagnostic différentiel.'],
    ],
    scores: [],
    differentiels: [
      ['syndromes-parkinsoniens-medicamenteux', 'Dystonie aiguë médicamenteuse.'],
      ['paralysie-cerebrale', 'Forme dyskinétique de l’enfant.'],
      ['tetanos', 'Trismus et contractures avec spasmes.'],
      ['tics', 'Mouvements brefs, répétés, contrôlables.'],
      ['Torticolis musculaire', 'Contracture aiguë douloureuse.'],
      ['crises-non-epileptiques-psychogenes', 'Troubles moteurs fonctionnels.'],
    ],
    etiologies:
      '## Causes\n- Génétiques, asphyxie périnatale, ictère nucléaire, médicaments, maladie de Wilson, AVC, encéphalites',
    principes: [
      [
        'Dystonie aiguë médicamenteuse',
        'Urgence.',
        '- **Bipéridène** IM ou IV, arrêt du médicament en cause',
      ],
      [
        'Dystonies focales',
        'Toxine botulique.',
        '- **Toxine botulique de type A** dans les muscles concernés, renouvelée tous les 3–4 mois (centre spécialisé)\n- Kinésithérapie, techniques de rééducation sensorimotrice',
      ],
      [
        'Dystonies généralisées et de l’enfant',
        'Médicaments.',
        '- **Lévodopa** d’épreuve chez l’enfant (dystonie dopa-sensible : réponse spectaculaire)\n- **Trihexyphénidyle** à doses progressives (bien toléré chez l’enfant), **baclofène**, clonazépam\n- Maladie de Wilson : chélateurs du cuivre, zinc\n- Stimulation cérébrale profonde en centre spécialisé ; kinésithérapie, orthèses',
      ],
    ],
    molecules: [
      ['biperidene', 'premiere', 'Dystonie aiguë'],
      ['toxine-botulinique-type-a', 'premiere', 'Dystonies focales'],
      ['trihexyphenidyle', 'premiere', 'Dystonies généralisées'],
      ['levodopa', 'premiere', 'Épreuve chez l’enfant'],
      ['baclofene', 'alternative', 'Dystonies généralisées'],
      ['clonazepam', 'alternative', 'Association'],
      ['zinc', 'adjuvant', 'Maladie de Wilson'],
    ],
    complications: [
      {
        nom: 'Douleurs et arthrose cervicale',
        description: 'Torticolis prolongé.',
        traitement: '- Toxine botulique, antalgiques',
        clinique: '- Douleur',
        paraclinique: '',
      },
      {
        nom: 'Handicap fonctionnel',
        description: 'Formes généralisées.',
        traitement: '- Rééducation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'État de mal dystonique',
        description: 'Crise dystonique généralisée.',
        traitement: '- Réanimation, sédation',
        clinique: '- Contractures continues, fièvre',
        paraclinique: '- CPK, rhabdomyolyse',
      },
    ],
    evolution:
      '## Pronostic\n- Dystonies focales de l’adulte : stables ; formes généralisées de l’enfant : handicap variable ; dystonie dopa-sensible : guérison fonctionnelle sous lévodopa',
    urgences: [],
    symptomes: [
      ['Postures anormales', 'tres_frequent'],
      ['Mouvements involontaires', 'tres_frequent'],
      ['Douleur rachidienne', 'occasionnel'],
      ['Tremblements', 'occasionnel'],
    ],
    sources: [
      'MDS — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Dystonie aiguë médicamenteuse : bipéridène ; orientation des autres formes', ''],
      hgr: ['- Bilan, trihexyphénidyle', ''],
      tert: ['- Toxine botulique, IRM, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Torticolis spasmodique',
        type: 'commune',
        description: 'Dystonie cervicale.',
        terrain: '- Adulte de 30–50 ans',
        fonctionnels: '- Douleur cervicale',
        generaux: '',
        physiques: '- Rotation de la tête, geste antagoniste',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dystonie généralisée de l’enfant',
        type: 'terrain',
        description: 'Génétique ou secondaire.',
        terrain: '- Enfant',
        fonctionnels: '- Troubles de la marche',
        generaux: '',
        physiques: '- Torsions du tronc et des membres',
        paraclinique: '- IRM',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dystonie aiguë médicamenteuse',
        type: 'etiologique',
        description: 'Neuroleptiques.',
        terrain: '- Sujet jeune',
        fonctionnels: '',
        generaux: '',
        physiques: '- Crise oculogyre, torticolis',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Chorées
  {
    ...MVT,
    slug: 'chorees',
    nom: 'Chorées',
    resume:
      'Mouvements involontaires brusques, brefs, irréguliers et imprévisibles, passant d’un segment du corps à l’autre (impression d’agitation, de « danse »), avec maladresse et instabilité de la marche : chez l’enfant et l’adolescent en RDC, chorée de Sydenham (manifestation du rhumatisme articulaire aigu, après une angine streptococcique, souvent associée à une cardite à rechercher par échocardiographie) ; chez l’adulte, causes médicamenteuses (neuroleptiques, lévodopa), métaboliques (hyperglycémie non cétosique, hyperthyroïdie), vasculaires (AVC : hémiballisme), auto-immunes (lupus, antiphospholipides), grossesse (chorée gravidique, contraception), VIH (toxoplasmose), maladie de Huntington (héréditaire) ; traitement de la cause, prophylaxie par benzathine-pénicilline au long cours pour Sydenham, halopéridol, valproate ou tétrabénazine si gêne.',
    definition:
      'Mouvements anormaux involontaires, rapides, irréguliers et non stéréotypés, touchant de façon aléatoire différentes parties du corps.',
    physiopathologie:
      '## Mécanisme\n- Dysfonctionnement du **striatum** avec hyperactivité dopaminergique relative\n\n## Causes\n- **Sydenham** : anticorps croisés anti-streptococciques dirigés contre les noyaux gris centraux (rhumatisme articulaire aigu)\n- **Médicaments** : neuroleptiques (dyskinésies tardives), lévodopa, anticonvulsivants, contraceptifs\n- **Métaboliques** : **hyperglycémie non cétosique** (hémichorée du diabétique âgé), hyperthyroïdie, hyponatrémie\n- **Vasculaires** : AVC des noyaux gris (hémiballisme)\n- **Auto-immunes** : lupus, syndrome des antiphospholipides\n- **Infectieuses** : VIH (toxoplasmose, encéphalite), neurosyphilis\n- **Grossesse** (chorée gravidique), **maladie de Huntington** (génétique, démence associée), maladie de Wilson',
    diagnostic:
      '## Clinique\n- Mouvements **brusques, irréguliers, imprévisibles**, parfois intégrés dans des gestes volontaires\n- Grimaces, langue « en trombone » (ne peut rester tirée), main « de laitière », maladresse, chute d’objets\n- **Sydenham** : enfant de 5–15 ans, souvent fille, labilité émotionnelle, troubles obsessionnels ; rechercher **cardite** (souffle), arthrite\n- Hémichorée ou hémiballisme : AVC, hyperglycémie\n\n## Examens\n- **ASLO** (peut être normale dans Sydenham), **échocardiographie** (cardite rhumatismale)\n- **Glycémie**, TSH, ionogramme, β-hCG\n- Anticorps antinucléaires et antiphospholipides, test VIH, sérologie syphilitique\n- **Céruloplasmine** avant 40 ans ; **IRM** cérébrale ; test génétique (Huntington) avec conseil',
    examens: [
      ['etiologique', 'aslo', 'Infection streptococcique.'],
      ['gravite', 'echocardiographie', 'Cardite rhumatismale.'],
      ['premiere_intention', 'glycemie', 'Hyperglycémie non cétosique.'],
      ['etiologique', 'tsh', 'Hyperthyroïdie.'],
      ['etiologique', 'beta-hcg', 'Chorée gravidique.'],
      ['etiologique', 'anticorps-antinucleaires', 'Lupus.'],
      ['etiologique', 'anticorps-antiphospholipides', 'Syndrome des antiphospholipides.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'ceruloplasmine-cuivre', 'Maladie de Wilson.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Lésion des noyaux gris.'],
    ],
    scores: [],
    differentiels: [
      ['tics', 'Mouvements stéréotypés, contrôlables.'],
      ['trouble-deficit-attention-hyperactivite', 'Agitation sans mouvements involontaires.'],
      ['dystonies', 'Postures prolongées.'],
      ['syndromes-parkinsoniens-medicamenteux', 'Dyskinésies tardives.'],
      ['epilepsie-enfant', 'Myoclonies épileptiques.'],
    ],
    etiologies:
      '## Causes\n- Sydenham (rhumatisme articulaire aigu), médicaments, hyperglycémie, hyperthyroïdie, AVC, lupus, VIH, grossesse, Huntington, Wilson',
    principes: [
      [
        'Chorée de Sydenham',
        'Rhumatisme articulaire aigu.',
        '- Éradication du streptocoque : **benzathine-benzylpénicilline** 1,2 MUI IM (ou pénicilline V, amoxicilline 10 jours)\n- **Prophylaxie secondaire** : benzathine-pénicilline toutes les 3–4 semaines (au moins jusqu’à 21 ans, plus si cardite)\n- Mouvements gênants : **valproate** (premier choix chez l’enfant), carbamazépine, halopéridol à faible dose ; corticoïdes dans les formes sévères\n- Échocardiographie et suivi cardiologique',
      ],
      [
        'Autres causes',
        'Traiter la cause.',
        '- Hyperglycémie : **équilibre glycémique** (régression en jours à semaines)\n- Médicament : arrêt ou réduction ; hyperthyroïdie : antithyroïdiens ; lupus : immunosuppression\n- Chorée gravidique : régresse après l’accouchement',
      ],
      [
        'Traitement symptomatique',
        'Si gêne.',
        '- **Halopéridol** 0,5–3 mg/j, **tétrabénazine**, rispéridone, olanzapine\n- Huntington : prise en charge multidisciplinaire, conseil génétique, soutien',
      ],
    ],
    molecules: [
      ['benzathine-benzylpenicilline', 'premiere', 'Éradication et prophylaxie (Sydenham)'],
      ['valproate-de-sodium-acide-valproique', 'premiere', 'Chorée de Sydenham'],
      ['haloperidol', 'alternative', 'Chorée gênante'],
      ['tetrabenazine', 'alternative', 'Chorée sévère, Huntington'],
      ['carbamazepine', 'alternative', 'Chorée de Sydenham'],
      ['prednisolone', 'alternative', 'Sydenham sévère'],
      ['risperidone', 'alternative', 'Chorée gênante'],
    ],
    complications: [
      {
        nom: 'Cardite rhumatismale',
        fiche: 'rhumatisme-articulaire-aigu-enfant',
        description: 'Sydenham.',
        traitement: '- Prophylaxie, cardiologie',
        clinique: '- Souffle',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Blessures et handicap',
        description: 'Chorée intense.',
        traitement: '- Protection, traitement symptomatique',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Troubles psychiatriques',
        description: 'Sydenham, Huntington.',
        traitement: '- Prise en charge',
        clinique: '- Obsessions, dépression',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Sydenham : guérison en quelques mois, récidives possibles sans prophylaxie ; Huntington : évolution progressive vers la démence',
    urgences: [],
    symptomes: [
      ['Mouvements involontaires', 'tres_frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Troubles du comportement', 'occasionnel'],
      ['Irritabilité', 'occasionnel'],
    ],
    sources: [
      'MDS — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Benzathine-pénicilline, référence pour échocardiographie', ''],
      hgr: ['- Bilan des causes, valproate, halopéridol', ''],
      tert: ['- IRM, neurologie, cardiologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Chorée de Sydenham',
        type: 'commune',
        description: 'Rhumatisme articulaire aigu.',
        terrain: '- Enfant 5–15 ans',
        fonctionnels: '- Maladresse, labilité émotionnelle',
        generaux: '',
        physiques: '- Mouvements choréiques, souffle possible',
        paraclinique: '- ASLO, échocardiographie',
        etiologies: '- Streptocoque A',
        syndromes: [],
      },
      {
        nom: 'Hémichorée hyperglycémique',
        type: 'etiologique',
        description: 'Diabétique âgé.',
        terrain: '- Diabète déséquilibré',
        fonctionnels: '- Mouvements d’un hémicorps',
        generaux: '',
        physiques: '',
        paraclinique: '- Glycémie élevée',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Chorée gravidique',
        type: 'terrain',
        description: 'Grossesse.',
        terrain: '- Femme enceinte, antécédent de Sydenham',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Syndrome des jambes sans repos
  {
    ...MVT,
    slug: 'syndrome-des-jambes-sans-repos',
    nom: 'Syndrome des jambes sans repos',
    resume:
      'Besoin impérieux de bouger les jambes, accompagné de sensations désagréables (fourmillements, brûlures, tiraillements), survenant au repos et le soir ou la nuit, soulagé par le mouvement (marcher, étirer) : insomnie d’endormissement, fatigue diurne ; primaire (familial) ou secondaire : carence en fer (ferritine < 75 µg/L) très fréquente, grossesse (3e trimestre), insuffisance rénale chronique et dialyse, neuropathies, médicaments (antihistaminiques sédatifs, neuroleptiques, métoclopramide, antidépresseurs) ; diagnostic clinique ; ferritine systématique ; traitement : supplémentation en fer, hygiène du sommeil, arrêt des médicaments aggravants, gabapentine ou prégabaline, agonistes dopaminergiques à faible dose (pramipexole) avec risque d’augmentation.',
    definition:
      'Trouble sensorimoteur neurologique caractérisé par un besoin impérieux de bouger les membres inférieurs, survenant ou s’aggravant au repos et le soir, et soulagé par le mouvement.',
    physiopathologie:
      '## Mécanismes\n- **Carence en fer cérébrale** et dysfonctionnement **dopaminergique**\n- Composante **génétique** (formes familiales précoces)\n\n## Causes secondaires\n- **Carence martiale**, **grossesse**, **insuffisance rénale chronique**, neuropathies périphériques (diabète)\n- **Médicaments** : antihistaminiques (prométhazine), neuroleptiques, métoclopramide, antidépresseurs (ISRS, mirtazapine)\n- Caféine, alcool, tabac, privation de sommeil',
    diagnostic:
      '## Critères\n- **Besoin impérieux** de bouger les jambes, souvent avec sensations désagréables\n- **Survenue ou aggravation au repos** (assis, couché)\n- **Soulagement par le mouvement**\n- **Prédominance vespérale ou nocturne**\n- Non expliqué par une autre cause (crampes, inconfort positionnel, œdèmes, arthrose)\n\n## Retentissement\n- Insomnie, fatigue, troubles de l’humeur ; mouvements périodiques des jambes pendant le sommeil\n\n## Examens\n- **Ferritine** et bilan martial (objectif > 75 µg/L), NFS\n- **Créatinine**, glycémie ; β-hCG selon le contexte',
    examens: [
      ['premiere_intention', 'ferritine', 'Carence en fer.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['etiologique', 'creatinine', 'Insuffisance rénale.'],
      ['etiologique', 'glycemie', 'Diabète, neuropathie.'],
      ['etiologique', 'tsh', 'Dysthyroïdie.'],
    ],
    scores: [],
    differentiels: [
      ['neuropathie-diabetique', 'Brûlures sans besoin de bouger.'],
      ['Crampes nocturnes', 'Contraction douloureuse soulagée par l’étirement.'],
      ['Akathisie', 'Agitation globale sous neuroleptique.'],
      ['varices-membres-inferieurs', 'Jambes lourdes soulagées par la surélévation.'],
    ],
    etiologies:
      '## Causes\n- Primaire familiale ; carence en fer, grossesse, insuffisance rénale, neuropathies, médicaments',
    principes: [
      [
        'Mesures générales',
        'Toujours.',
        '- **Hygiène du sommeil**, activité physique modérée, éviter caféine, alcool et tabac le soir\n- **Arrêt des médicaments aggravants** (antihistaminiques sédatifs, métoclopramide, neuroleptiques)\n- Massages, bains, étirements, activités mentales le soir',
      ],
      [
        'Fer',
        'Si ferritine < 75 µg/L.',
        '- **Fer oral** (fumarate ferreux, un jour sur deux avec vitamine C) ; fer IV si intolérance ou malabsorption',
      ],
      [
        'Traitement médicamenteux',
        'Formes gênantes.',
        '- **Gabapentine** ou **prégabaline** le soir (première intention, pas de phénomène d’augmentation)\n- **Pramipexole** à faible dose (risque d’augmentation et de troubles du contrôle des impulsions)\n- Grossesse : fer, mesures non médicamenteuses ; régression après l’accouchement',
      ],
    ],
    molecules: [
      ['fumarate-ferreux-fer', 'premiere', 'Carence en fer'],
      ['gabapentine', 'premiere', 'Traitement de fond'],
      ['pregabaline', 'premiere', 'Traitement de fond'],
      ['pramipexole', 'alternative', 'Formes sévères'],
      ['levodopa', 'alternative', 'Symptômes intermittents'],
      ['clonazepam', 'adjuvant', 'Insomnie associée'],
    ],
    complications: [
      {
        nom: 'Insomnie chronique',
        description: 'Troubles de l’endormissement.',
        traitement: '- Traitement du syndrome',
        clinique: '- Fatigue diurne',
        paraclinique: '',
      },
      {
        nom: 'Dépression et anxiété',
        fiche: 'depression',
        description: 'Retentissement.',
        traitement: '- Prise en charge (éviter les ISRS aggravants)',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Phénomène d’augmentation',
        description: 'Agonistes dopaminergiques.',
        traitement: '- Changement de traitement',
        clinique: '- Symptômes plus précoces et étendus',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Chronique et fluctuant ; formes secondaires améliorées par le traitement de la cause (fer, grossesse terminée, greffe rénale)',
    urgences: [],
    symptomes: [
      ['Impatiences des jambes', 'tres_frequent'],
      ['Troubles du sommeil', 'tres_frequent'],
      ['Paresthésies', 'frequent'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'MDS — recommandations de pratique clinique'],
    niveaux: {
      cs: ['- Diagnostic clinique, ferritine, fer, conseils', ''],
      hgr: ['- Gabapentine, bilan des causes', ''],
      tert: ['- Neurologie, formes réfractaires', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme primaire',
        type: 'commune',
        description: 'Familiale.',
        terrain: '- Adulte, antécédents familiaux',
        fonctionnels: '- Besoin de bouger le soir',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme de la grossesse',
        type: 'terrain',
        description: '3e trimestre.',
        terrain: '- Femme enceinte',
        fonctionnels: '- Insomnie',
        generaux: '',
        physiques: '',
        paraclinique: '- Ferritine basse',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme de l’insuffisance rénale',
        type: 'etiologique',
        description: 'Dialysé.',
        terrain: '- Insuffisance rénale chronique',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Créatinine',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Tics
  {
    ...MVT,
    slug: 'tics',
    nom: 'Tics',
    resume:
      'Mouvements (tics moteurs : clignement des yeux, grimaces, haussements d’épaules) ou sons (tics vocaux : raclements de gorge, reniflements, mots) brusques, brefs, répétitifs et stéréotypés, précédés d’une sensation d’urgence et temporairement contrôlables, apparaissant chez l’enfant (5–10 ans, garçons surtout), fluctuants, aggravés par le stress, la fatigue et l’excitation ; tics transitoires très fréquents et bénins ; syndrome de Gilles de la Tourette si tics moteurs multiples et au moins un tic vocal pendant plus d’un an, souvent associé au TDAH, aux troubles obsessionnels compulsifs et à l’anxiété ; éliminer chorée de Sydenham, épilepsie et causes médicamenteuses ; prise en charge : information et réassurance de la famille et de l’école, thérapie comportementale (inversion d’habitude), médicaments seulement si gêne importante (rispéridone, halopéridol à faible dose, aripiprazole, clonidine).',
    definition:
      'Mouvements ou vocalisations involontaires, soudains, rapides, récurrents et non rythmiques, pouvant être temporairement réprimés.',
    physiopathologie:
      '## Mécanismes\n- Dysfonctionnement des circuits **cortico-striato-thalamo-corticaux**, hyperactivité dopaminergique\n- Forte composante **génétique**\n\n## Classification\n- **Tics transitoires** (< 1 an), **tics chroniques** moteurs ou vocaux (> 1 an), **syndrome de Gilles de la Tourette**\n- Tics secondaires : médicaments (stimulants, lamotrigine), lésions cérébrales, encéphalites',
    diagnostic:
      '## Clinique\n- **Tics moteurs simples** (clignements, grimaces, mouvements de tête ou d’épaules) ou complexes (sauts, toucher)\n- **Tics vocaux** simples (raclements, reniflements, toux) ou complexes (mots, coprolalie rare)\n- **Sensation prémonitoire** et capacité de **suppression** temporaire ; persistent parfois pendant le sommeil léger\n- Fluctuation dans le temps, aggravation par le stress et l’excitation\n- **Comorbidités** : TDAH, troubles obsessionnels compulsifs, anxiété, troubles des apprentissages\n\n## Éliminer\n- **Chorée de Sydenham** (mouvements non stéréotypés, ASLO, souffle), **épilepsie** (absences, myoclonies : EEG), dystonie, médicaments',
    examens: [
      ['deuxieme_intention', 'eeg', 'Doute avec une épilepsie.'],
      ['etiologique', 'aslo', 'Chorée de Sydenham.'],
    ],
    scores: [],
    differentiels: [
      ['chorees', 'Mouvements irréguliers, non stéréotypés.'],
      ['epilepsie-absences', 'Absences avec clignements.'],
      ['trouble-deficit-attention-hyperactivite', 'Comorbidité fréquente.'],
      ['dystonies', 'Postures prolongées.'],
      ['Stéréotypies', 'Mouvements rythmiques (autisme, déficience).'],
    ],
    etiologies: '## Causes\n- Génétique ; secondaires (médicaments, lésions)',
    principes: [
      [
        'Information',
        'Souvent suffisant.',
        '- Expliquer le caractère involontaire et souvent transitoire des tics, ne pas les réprimander\n- Informer l’école, réduire le stress, lutter contre la moquerie',
      ],
      [
        'Thérapie comportementale',
        'Première intention si gêne.',
        '- **Thérapie d’inversion d’habitude** (intervention comportementale globale)\n- Prise en charge des comorbidités (TDAH, TOC, anxiété)',
      ],
      [
        'Médicaments',
        'Gêne importante.',
        '- **Rispéridone** 0,25–2 mg/j, **halopéridol** 0,25–2 mg/j (effets extrapyramidaux), aripiprazole, clonidine (surtout si TDAH)\n- Tétrabénazine ou toxine botulique (tics focaux) en centre spécialisé',
      ],
    ],
    molecules: [
      ['risperidone', 'premiere', 'Tics invalidants'],
      ['haloperidol', 'alternative', 'Tics invalidants'],
      ['tetrabenazine', 'alternative', 'Formes réfractaires'],
      ['toxine-botulinique-type-a', 'alternative', 'Tics focaux'],
      ['fluoxetine', 'adjuvant', 'TOC associés'],
    ],
    complications: [
      {
        nom: 'Retentissement scolaire et social',
        description: 'Moqueries, exclusion.',
        traitement: '- Information, soutien',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Troubles associés',
        fiche: 'trouble-deficit-attention-hyperactivite',
        description: 'TDAH, TOC, anxiété.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Douleurs et blessures',
        description: 'Tics violents.',
        traitement: '- Traitement',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Maximum vers 10–12 ans puis amélioration nette à l’adolescence chez la majorité',
    urgences: [],
    symptomes: [
      ['Mouvements involontaires', 'tres_frequent'],
      ['Troubles de la concentration', 'occasionnel'],
      ['Anxiété', 'occasionnel'],
    ],
    sources: [
      'MDS — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'mhGAP Intervention Guide 2.0',
    ],
    niveaux: {
      cs: ['- Information de la famille et de l’école', ''],
      hgr: ['- Pédopsychiatrie, thérapie comportementale', ''],
      tert: ['- Neuropédiatrie, formes sévères', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tics transitoires de l’enfant',
        type: 'commune',
        description: 'Bénins.',
        terrain: '- Enfant 5–10 ans',
        fonctionnels: '- Clignements, grimaces',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Syndrome de Gilles de la Tourette',
        type: 'gravite',
        description: 'Tics moteurs et vocaux > 1 an.',
        terrain: '- Garçon',
        fonctionnels: '- Tics vocaux',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
