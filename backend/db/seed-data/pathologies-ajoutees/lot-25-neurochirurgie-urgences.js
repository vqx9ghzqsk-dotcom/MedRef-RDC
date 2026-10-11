'use strict';

/**
 * Lot 25 (neurochirurgie et urgences chirurgicales) — hématome extradural, hématome
 * sous-dural, traumatisme vertébro-médullaire, compression médullaire, abdomen aigu
 * (démarche), choc hémorragique traumatique. Rédigé par IA (BTF, NICE, ATLS, WSES) : à valider.
 */

const NCH = { departement: 'chirurgie', specialite: 'Neurochirurgie' };
const URGCH = { departement: 'chirurgie', specialite: 'Urgences chirurgicales' };

module.exports = [
  // =================================================================== HED
  {
    ...NCH,
    slug: 'hematome-extradural',
    nom: 'Hématome extradural',
    resume:
      'Saignement artériel entre l’os et la dure-mère après un traumatisme crânien (fracture temporale) : intervalle libre puis aggravation rapide, mydriase homolatérale ; scanner (lentille biconvexe) ; évacuation chirurgicale en extrême urgence (trépanation).',
    definition:
      'Collection de sang entre la table interne du crâne et la dure-mère, le plus souvent d’origine artérielle (artère méningée moyenne), compliquant une fracture du crâne.',
    physiopathologie:
      '## Mécanismes\n- Fracture temporale déchirant l’artère méningée moyenne\n- Collection rapidement expansive : hypertension intracrânienne, engagement temporal\n- Lésion cérébrale sous-jacente souvent minime : excellent pronostic si opéré tôt',
    diagnostic:
      '## Clinique\n- Traumatisme crânien avec perte de connaissance initiale possible\n- **Intervalle libre** (patient conscient) puis aggravation : céphalées, vomissements, somnolence\n- **Mydriase homolatérale**, hémiparésie controlatérale, bradycardie, HTA\n\n## Imagerie\n- **Scanner** : lentille biconvexe hyperdense, effet de masse\n- Sans scanner : signes cliniques d’engagement après traumatisme = trépanation exploratrice',
    examens: [
      ['confirmation', 'scanner-cerebral', 'Lentille biconvexe hyperdense.'],
      ['premiere_intention', 'radiographie-osseuse', 'Fracture du crâne si scanner indisponible.'],
      ['pretherapeutique', 'nfs', 'Hb, plaquettes.'],
      ['pretherapeutique', 'hemostase', 'Coagulation.'],
      ['pretherapeutique', 'groupage-rai', 'Chirurgie.'],
      ['premiere_intention', 'glycemie', 'Éliminer une hypoglycémie.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['hematome-sous-dural', 'Croissant concave, sujet âgé, lésions cérébrales associées.'],
      ['traumatisme-cranien', 'Contusion cérébrale sans collection.'],
      ['Intoxication alcoolique', 'Conscience altérée sans signe de localisation (prudence).'],
    ],
    etiologies:
      '## Mécanismes\n- Chutes, accidents de la route, agressions (coup sur la tempe)\n- Adulte jeune, enfant',
    principes: [
      [
        'Évacuation urgente',
        'Sauver la vie.',
        '- **Craniotomie** (ou trépanation) en extrême urgence si hématome symptomatique ou > 30 mL\n- Sans neurochirurgien : trépanation de sauvetage par un chirurgien formé\n- Petit hématome asymptomatique : surveillance neurochirurgicale rapprochée',
      ],
      [
        'Neuroprotection',
        'Limiter les lésions secondaires.',
        '- Voies aériennes, oxygène (SpO2 > 94 %), PAS > 110 mmHg, normoglycémie\n- Tête surélevée à 30°\n- Hypertension intracrânienne en attendant la chirurgie : **mannitol** 0,5–1 g/kg ou **NaCl 3 %**\n- Convulsions : **lévétiracétam** ou phénytoïne',
      ],
    ],
    molecules: [
      ['mannitol', 'premiere', 'Hypertension intracrânienne'],
      ['chlorure-de-sodium-hypertonique', 'alternative', 'Hypertension intracrânienne'],
      ['levetiracetam', 'adjuvant', 'Convulsions'],
      ['phenytoine', 'alternative', 'Convulsions'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage isotonique'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Engagement cérébral et décès',
        description: 'Retard opératoire.',
        traitement: '- Évacuation urgente',
        clinique: '- Coma, mydriase, bradycardie',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Séquelles neurologiques',
        fiche: 'epilepsie',
        description: 'Lésions associées.',
        traitement: '- Rééducation, antiépileptiques',
        clinique: '- Déficit, crises',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Mortalité < 10 % si opéré avant le coma profond ; très élevée si retard',
    urgences: ['traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Céphalées', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Troubles de la conscience', 'tres_frequent'],
      ['Déficit moteur', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'Guidelines for the Management of Severe Traumatic Brain Injury (4th edition)',
      'Head injury: assessment and early management (NICE guideline NG232)',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Surveillance de la conscience après traumatisme, transfert immédiat si aggravation',
        '- Tout traumatisme crânien avec intervalle libre ou aggravation',
      ],
      hgr: ['- Trépanation de sauvetage, neuroprotection', '- Scanner, neurochirurgie'],
      tert: ['- Neurochirurgie, réanimation', ''],
    },
    alertes: {
      'traumatisme-cranien-grave-urgence':
        'Traumatisé crânien qui s’aggrave après un intervalle libre ou mydriase unilatérale',
    },
    formes: [
      {
        nom: 'HED avec intervalle libre',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Adulte jeune, fracture temporale',
        fonctionnels: '- Céphalées croissantes',
        generaux: '',
        physiques: '- Somnolence progressive, mydriase',
        paraclinique: '- Lentille biconvexe',
        etiologies: '- Artère méningée moyenne',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
        examens: [['scanner-cerebral', 'Diagnostic']],
      },
      {
        nom: 'HED avec engagement',
        type: 'gravite',
        description: 'Coma.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Bradycardie, HTA',
        physiques: '- Coma, mydriase aréactive',
        paraclinique: '- Effet de masse',
        etiologies: '',
        syndromes: ['syndrome-d-engagement-cerebral'],
      },
    ],
  },

  // =================================================================== HSD
  {
    ...NCH,
    slug: 'hematome-sous-dural',
    nom: 'Hématome sous-dural',
    resume:
      'Saignement veineux entre dure-mère et arachnoïde : aigu (traumatisme grave, lésions cérébrales associées) ou chronique (sujet âgé, alcool, anticoagulants : céphalées, confusion, déficit progressifs) ; scanner (croissant) ; évacuation chirurgicale (trous de trépan pour le chronique).',
    definition:
      'Collection hématique dans l’espace sous-dural, par rupture des veines ponts ; aiguë (< 3 jours), subaiguë ou chronique (> 3 semaines).',
    physiopathologie:
      '## Mécanismes\n- Rupture des veines corticales lors d’une accélération-décélération\n- Aigu : traumatisme violent, contusions associées, pronostic réservé\n- Chronique : traumatisme minime, atrophie cérébrale (sujet âgé, alcool), anticoagulants ; collection lentement croissante\n- Nourrisson : bébé secoué',
    diagnostic:
      '## Aigu\n- Coma d’emblée ou rapidement progressif après un traumatisme sévère\n\n## Chronique\n- Sujet âgé, alcoolique, sous anticoagulant ; traumatisme parfois oublié\n- Céphalées, **confusion**, troubles de la marche, déficit progressif sur des semaines\n\n## Imagerie\n- **Scanner** : croissant concave (hyperdense si aigu, hypodense si chronique), effet de masse',
    examens: [
      ['confirmation', 'scanner-cerebral', 'Croissant sous-dural.'],
      ['pretherapeutique', 'hemostase', 'Anticoagulants, troubles de la coagulation.'],
      ['pretherapeutique', 'nfs', 'Plaquettes.'],
      ['premiere_intention', 'glycemie', 'Confusion.'],
      ['premiere_intention', 'ionogramme', 'Confusion du sujet âgé.'],
      ['gravite', 'fond-d-oeil', 'Nourrisson : hémorragies rétiniennes (maltraitance).'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['hematome-extradural', 'Lentille biconvexe, intervalle libre.'],
      ['avc', 'Début brutal, sans traumatisme.'],
      ['Démence, syndrome confusionnel métabolique', 'Scanner normal.'],
      ['maltraitance-enfant', 'Nourrisson.'],
    ],
    etiologies:
      '## Facteurs\n- Traumatismes, sujet âgé, alcool, anticoagulants et antiagrégants, troubles de la coagulation\n- Nourrisson : secouement',
    principes: [
      [
        'Hématome aigu',
        'Évacuer en urgence.',
        '- Craniotomie si épaisseur > 10 mm, déviation > 5 mm ou dégradation neurologique\n- Neuroprotection (fiche *Hématome extradural*)',
      ],
      [
        'Hématome chronique',
        'Drainer.',
        '- **Trous de trépan** et drainage si symptomatique\n- Arrêt ou antagonisation des anticoagulants (**vitamine K1**)\n- Petits hématomes asymptomatiques : surveillance',
      ],
      [
        'Prévention des récidives',
        'Réduire les risques.',
        '- Prévention des chutes, sevrage alcoolique, réévaluation des anticoagulants',
      ],
    ],
    molecules: [
      ['mannitol', 'premiere', 'Hypertension intracrânienne'],
      ['vitamine-k1-phytomenadione', 'premiere', 'Antagonisation des AVK'],
      ['levetiracetam', 'adjuvant', 'Convulsions'],
      ['acide-tranexamique', 'adjuvant', 'Traumatisme récent'],
      ['paracetamol', 'adjuvant', 'Céphalées'],
    ],
    complications: [
      {
        nom: 'Engagement',
        description: 'Aigu.',
        traitement: '- Chirurgie',
        clinique: '- Coma',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Récidive',
        description: 'Chronique (10 à 20 %).',
        traitement: '- Nouveau drainage',
        clinique: '- Retour des symptômes',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Épilepsie',
        fiche: 'epilepsie',
        description: 'Lésions corticales.',
        traitement: '- Antiépileptiques',
        clinique: '- Crises',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Aigu : mortalité 40 à 60 % ; chronique : excellent après drainage',
    urgences: ['traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Céphalées', 'frequent'],
      ['Troubles de la conscience', 'tres_frequent'],
      ['Déficit moteur', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'Guidelines for the Management of Severe Traumatic Brain Injury (4th edition)',
      'Head injury: assessment and early management (NICE guideline NG232)',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Évoquer devant une confusion progressive du sujet âgé, transfert', '- Toute suspicion'],
      hgr: ['- Trous de trépan si formé, scanner', ''],
      tert: ['- Neurochirurgie', ''],
    },
    alertes: {
      'traumatisme-cranien-grave-urgence': 'Traumatisé crânien comateux ou sujet âgé confus avec déficit',
    },
    formes: [
      {
        nom: 'Hématome sous-dural chronique',
        type: 'commune',
        description: 'Sujet âgé.',
        terrain: '- Sujet âgé, alcool, anticoagulants',
        fonctionnels: '- Céphalées, confusion',
        generaux: '',
        physiques: '- Troubles de la marche, hémiparésie',
        paraclinique: '- Croissant hypodense',
        etiologies: '- Traumatisme minime',
        syndromes: ['syndrome-confusionnel'],
        examens: [['scanner-cerebral', 'Diagnostic']],
      },
      {
        nom: 'Hématome sous-dural aigu',
        type: 'gravite',
        description: 'Traumatisme grave.',
        terrain: '- Accident à haute énergie',
        fonctionnels: '',
        generaux: '',
        physiques: '- Coma',
        paraclinique: '- Croissant hyperdense, contusions',
        etiologies: '',
        syndromes: ['syndrome-d-engagement-cerebral'],
      },
    ],
  },

  // =================================================================== Trauma vertébro-médullaire
  {
    ...NCH,
    slug: 'traumatisme-vertebro-medullaire',
    nom: 'Traumatisme vertébro-médullaire',
    resume:
      'Lésion du rachis avec ou sans atteinte de la moelle (chutes d’arbre, accidents, portage de charges) : immobilisation du rachis dès la prise en charge, examen neurologique (niveau, complet ou incomplet), imagerie, chirurgie de stabilisation ou décompression ; prévention des escarres et des complications urinaires.',
    definition:
      'Fracture ou luxation de la colonne vertébrale pouvant léser la moelle épinière ou les racines, avec paralysie (tétraplégie, paraplégie) complète ou incomplète.',
    physiopathologie:
      '## Mécanismes\n- Chutes de hauteur (arbres, palmiers), accidents de moto, plongeons, chute de charges sur la tête\n- Lésion primaire (contusion, section) et secondaire (ischémie, œdème : hypotension et hypoxie aggravent)\n- Choc spinal, choc neurogénique (lésions hautes : hypotension avec bradycardie)',
    diagnostic:
      '## Évaluation\n- Suspecter chez tout traumatisé inconscient ou avec douleur rachidienne, déficit, paresthésies\n- Examen neurologique : force, sensibilité (niveau), réflexes, **sensibilité périnéale et tonus anal** (lésion complète ou incomplète, échelle ASIA)\n- Respiration (lésions cervicales hautes), priapisme, rétention urinaire\n\n## Imagerie\n- Radiographies du rachis (face, profil, C1-C2 bouche ouverte), scanner, IRM si déficit',
    examens: [
      ['premiere_intention', 'radiographie-osseuse', 'Rachis cervical, dorsal, lombaire.'],
      ['deuxieme_intention', 'irm-rachidienne', 'Lésion médullaire, compression.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Scanner du rachis si disponible.'],
      ['premiere_intention', 'nfs', 'Hémorragie associée.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Insuffisance respiratoire.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['compression-medullaire', 'Installation progressive, sans traumatisme.'],
      ['mal-de-pott', 'Douleur chronique, gibbosité.'],
      ['Syndrome de Guillain-Barré', 'Paralysie ascendante sans traumatisme.'],
    ],
    etiologies:
      '## Mécanismes\n- Chutes d’arbres (récolte), accidents de la route, plongeons, portage, violences',
    principes: [
      [
        'Immobilisation',
        'Éviter l’aggravation.',
        '- Immobilisation du rachis cervical (collier) et du corps (plan dur, retournement en monobloc) dès le ramassage\n- Ne retirer qu’après examen et imagerie',
      ],
      [
        'Réanimation',
        'Prévenir les lésions secondaires.',
        '- Oxygène, ventilation si lésion cervicale haute\n- PAM > 85 mmHg ; choc neurogénique : remplissage, **noradrénaline**, **atropine** si bradycardie\n- Pas de corticoïdes à forte dose en routine',
      ],
      [
        'Traitement spécifique',
        'Stabiliser et décomprimer.',
        '- Chirurgie de décompression et de stabilisation (précoce si déficit incomplet) ou traitement orthopédique (traction, corset)',
      ],
      [
        'Prévention des complications',
        'Préserver la vie et la fonction.',
        '- Escarres : retournements toutes les 2 h, matelas\n- Vessie : sondage intermittent ; intestin : programme de défécation\n- **Thromboprophylaxie**, nutrition, kinésithérapie, réadaptation, soutien psychologique',
      ],
    ],
    molecules: [
      ['noradrenaline', 'premiere', 'Choc neurogénique'],
      ['atropine', 'premiere', 'Bradycardie'],
      ['oxygene', 'premiere', 'Hypoxie'],
      ['enoxaparine', 'premiere', 'Thromboprophylaxie'],
      ['morphine', 'premiere', 'Douleur'],
      ['baclofene', 'adjuvant', 'Spasticité secondaire'],
      ['lactulose', 'adjuvant', 'Programme intestinal'],
    ],
    complications: [
      {
        nom: 'Insuffisance respiratoire',
        description: 'Lésions cervicales hautes.',
        traitement: '- Ventilation',
        clinique: '- Respiration abdominale, épuisement',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Escarres',
        description: 'Immobilité, anesthésie.',
        traitement: '- Prévention, soins',
        clinique: '- Plaies sacrées',
        paraclinique: '',
      },
      {
        nom: 'Infections urinaires et lithiase',
        fiche: 'infections-urinaires-adulte',
        description: 'Vessie neurologique.',
        traitement: '- Sondage intermittent',
        clinique: '- Fièvre',
        paraclinique: '- ECBU',
      },
      {
        nom: 'Thrombose et embolie pulmonaire',
        fiche: 'embolie-pulmonaire',
        description: 'Immobilité.',
        traitement: '- Anticoagulation',
        clinique: '- Dyspnée',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération possible des lésions incomplètes ; les lésions complètes au-delà de 72 h récupèrent rarement',
    urgences: [],
    symptomes: [
      ['Douleur rachidienne', 'tres_frequent'],
      ['Déficit moteur', 'frequent'],
      ['Troubles sphinctériens', 'frequent'],
      ['Rétention urinaire', 'frequent'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: [
      'AANS — recommandations de pratique clinique',
      'ACS TQIP — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Immobilisation, examen neurologique, transfert à plat', '- Toute suspicion'],
      hgr: ['- Radiographies, réanimation, prévention des complications', '- Chirurgie rachidienne'],
      tert: ['- Neurochirurgie, centre de réadaptation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Paraplégie traumatique',
        type: 'commune',
        description: 'Lésion dorsolombaire.',
        terrain: '- Chute d’arbre',
        fonctionnels: '- Jambes paralysées, rétention',
        generaux: '',
        physiques: '- Déficit moteur et sensitif, niveau',
        paraclinique: '- Fracture-luxation',
        etiologies: '',
        syndromes: ['syndrome-pyramidal'],
      },
      {
        nom: 'Tétraplégie avec choc neurogénique',
        type: 'gravite',
        description: 'Lésion cervicale.',
        terrain: '- Plongeon, accident',
        fonctionnels: '- Détresse respiratoire',
        generaux: '- Hypotension, bradycardie',
        physiques: '- Paralysie des 4 membres',
        paraclinique: '- Lésion cervicale',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Compression médullaire
  {
    ...NCH,
    slug: 'compression-medullaire',
    nom: 'Compression médullaire',
    resume:
      'Urgence neurologique non traumatique : douleur rachidienne puis déficit des membres inférieurs, niveau sensitif, troubles sphinctériens ; causes : mal de Pott, métastases (prostate, sein), lymphome ; IRM, dexaméthasone, décompression chirurgicale ou radiothérapie, traitement de la cause.',
    definition:
      'Compression de la moelle épinière par une lésion du canal rachidien (osseuse, épidurale, intradurale), responsable d’un syndrome lésionnel et sous-lésionnel progressif.',
    physiopathologie:
      '## Causes\n- **Tuberculose vertébrale** (mal de Pott, fréquent en RDC)\n- **Métastases** vertébrales (prostate, sein, poumon, rein, thyroïde), myélome, lymphome\n- Abcès épidural, hernie discale, tumeurs médullaires, traumatisme ancien',
    diagnostic:
      '## Clinique\n- **Douleur rachidienne** inflammatoire, radiculaire (en ceinture)\n- Faiblesse des membres inférieurs, troubles de la marche, **niveau sensitif**\n- **Troubles sphinctériens** (rétention, incontinence)\n- Signes pyramidaux (réflexes vifs, Babinski) ; flasque si installation brutale\n\n## Imagerie\n- **IRM** en urgence (référence), sinon scanner ou radiographies\n- Recherche de la cause : radiographie thoracique, PSA, électrophorèse, biopsie',
    examens: [
      ['confirmation', 'irm-rachidienne', 'Siège et nature de la compression.'],
      ['premiere_intention', 'radiographie-osseuse', 'Lyse vertébrale, tassement.'],
      ['etiologique', 'radiographie-thoracique', 'Tuberculose, cancer.'],
      ['etiologique', 'psa', 'Cancer de la prostate.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose.'],
      ['etiologique', 'biopsie-histologie', 'Nature de la lésion.'],
      ['premiere_intention', 'tdr-vih', 'Terrain.'],
      ['premiere_intention', 'nfs', 'Hémopathie.'],
    ],
    scores: [],
    differentiels: [
      ['konzo', 'Paraparésie brutale non progressive, manioc.'],
      ['Paraparésie spastique tropicale (HTLV-1)', 'Progressive, sans compression à l’IRM.'],
      ['Syndrome de Guillain-Barré', 'Aréflexie, pas de niveau sensitif.'],
      ['Myélite transverse', 'IRM sans compression.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Mal de Pott, métastases (prostate chez l’homme, sein chez la femme), lymphomes, abcès',
    principes: [
      [
        'Urgence',
        'Préserver la marche.',
        '- **Dexaméthasone** 8–16 mg IV puis dose dégressive (compression tumorale)\n- Décompression chirurgicale si déficit récent ou instabilité\n- Radiothérapie en urgence (métastases radiosensibles)',
      ],
      [
        'Traitement de la cause',
        'Traiter la maladie.',
        '- Tuberculose : antituberculeux 12 mois ± chirurgie\n- Cancer de la prostate : castration (**goséréline**, orchidectomie), radiothérapie\n- Abcès : drainage, antibiotiques',
      ],
      ['Prévention des complications', 'Soins généraux.', '- Escarres, vessie, thromboses, rééducation'],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Compression tumorale'],
      ['rifampicine', 'premiere', 'Mal de Pott'],
      ['isoniazide', 'premiere', 'Mal de Pott'],
      ['goserelin', 'alternative', 'Cancer de la prostate'],
      ['morphine', 'premiere', 'Douleur'],
      ['enoxaparine', 'adjuvant', 'Thromboprophylaxie'],
    ],
    complications: [
      {
        nom: 'Paraplégie définitive',
        description: 'Retard de décompression.',
        traitement: '- Réadaptation',
        clinique: '- Paralysie',
        paraclinique: '',
      },
      {
        nom: 'Escarres et infections urinaires',
        fiche: 'infections-urinaires-adulte',
        description: 'Immobilité, vessie neurologique.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de l’état neurologique au moment du traitement : les patients qui marchent encore le gardent le plus souvent',
    urgences: [],
    symptomes: [
      ['Douleur rachidienne', 'tres_frequent'],
      ['Déficit moteur', 'tres_frequent'],
      ['Troubles sphinctériens', 'frequent'],
      ['Rétention urinaire', 'frequent'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'AANS — recommandations de pratique clinique',
      'ESMO — recommandations de pratique clinique',
      'Guide technique de prise en charge de la tuberculose',
    ],
    niveaux: {
      cs: [
        '- Reconnaître, transfert en urgence',
        '- Tout déficit des membres inférieurs avec douleur rachidienne',
      ],
      hgr: ['- Dexaméthasone, imagerie, antituberculeux', '- Décompression chirurgicale'],
      tert: ['- IRM, neurochirurgie, radiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Compression médullaire lente',
        type: 'commune',
        description: 'Paraparésie spastique progressive.',
        terrain: '- Tuberculose, cancer',
        fonctionnels: '- Douleur, marche difficile',
        generaux: '- Amaigrissement',
        physiques: '- Réflexes vifs, niveau sensitif',
        paraclinique: '- Compression à l’IRM',
        etiologies: '- Mal de Pott, métastases',
        syndromes: ['syndrome-pyramidal'],
        examens: [['irm-rachidienne', 'Diagnostic']],
      },
      {
        nom: 'Compression médullaire aiguë',
        type: 'gravite',
        description: 'Paraplégie flasque rapide.',
        terrain: '- Métastase, abcès épidural',
        fonctionnels: '- Rétention urinaire',
        generaux: '',
        physiques: '- Paralysie flasque',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Abdomen aigu
  {
    ...URGCH,
    slug: 'abdomen-aigu-demarche',
    nom: 'Abdomen aigu (démarche)',
    resume:
      'Douleur abdominale aiguë nécessitant une décision rapide : signes de gravité (choc, péritonite, occlusion), β-hCG chez la femme, glycémie, TDR paludisme, échographie et ASP ; distinguer causes chirurgicales (appendicite, perforation, occlusion, GEU) et médicales (paludisme, drépanocytose, acidocétose, infarctus).',
    definition:
      'Douleur abdominale d’apparition récente (< 1 semaine), intense, faisant discuter une urgence chirurgicale.',
    physiopathologie:
      '## Grands mécanismes\n- **Inflammation/infection** : appendicite, cholécystite, salpingite, abcès\n- **Perforation** : ulcère, typhoïde, péritonite\n- **Occlusion** : hernie étranglée, volvulus, brides, invagination\n- **Ischémie** : ischémie mésentérique, torsion\n- **Hémorragie** : GEU, rupture de rate, HRP\n- **Causes médicales** : paludisme, crise drépanocytaire, acidocétose, pyélonéphrite, pneumonie de la base, infarctus',
    diagnostic:
      '## Démarche\n- **Gravité** : pouls, PA, conscience, choc\n- Douleur (siège, début brutal ou progressif), vomissements, transit, fièvre\n- Examen : défense, contracture, orifices herniaires, toucher rectal et vaginal\n- **β-hCG chez toute femme en âge de procréer**\n- Glycémie, TDR paludisme, bandelette urinaire, NFS, CRP\n- **Échographie**, ASP debout (pneumopéritoine, niveaux), ECG',
    examens: [
      ['premiere_intention', 'beta-hcg', 'Femme en âge de procréer.'],
      ['premiere_intention', 'echographie-abdominale', 'Épanchement, appendice, vésicule, annexes.'],
      ['premiere_intention', 'abdomen-sans-preparation', 'Pneumopéritoine, niveaux hydro-aériques.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose, anémie.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'glycemie', 'Acidocétose.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'bandelette-urinaire', 'Pyélonéphrite, colique néphrétique.'],
      ['gravite', 'ecg', 'Infarctus inférieur.'],
      ['gravite', 'lactates', 'Ischémie, choc.'],
    ],
    scores: ['alvarado', 'qsofa'],
    differentiels: [
      ['appendicite-aigue', 'Fosse iliaque droite.'],
      ['grossesse-extra-uterine', 'β-hCG positive.'],
      ['perforation-ulcere-gastroduodenal', 'Contracture, pneumopéritoine.'],
      ['occlusion-intestinale-aigue', 'Arrêt des matières, vomissements.'],
      ['crise-vaso-occlusive-drepanocytaire-adulte', 'Drépanocytaire.'],
      ['acidocetose-diabetique', 'Glycémie élevée, cétose.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Appendicite, perforation typhique, hernies étranglées, volvulus, GEU, péritonites\n- Causes médicales : paludisme, drépanocytose, infections urinaires',
    principes: [
      [
        'Mesures initiales',
        'Stabiliser et orienter.',
        '- Voie veineuse, remplissage si choc, à jeun, sonde gastrique si vomissements ou occlusion\n- **Antalgie** sans attendre (paracétamol, **morphine** titrée) : ne masque pas le diagnostic\n- Antibiotiques si péritonite ou sepsis',
      ],
      [
        'Décision',
        'Opérer ou surveiller.',
        '- Péritonite, occlusion avec signes d’ischémie, hémorragie interne, choc : chirurgie\n- Doute : réévaluation clinique répétée toutes les 2 à 4 h, examens complémentaires',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Antalgie'],
      ['morphine', 'premiere', 'Antalgie titrée'],
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['ceftriaxone', 'premiere', 'Péritonite'],
      ['metronidazole', 'premiere', 'Péritonite'],
      ['phloroglucinol', 'adjuvant', 'Coliques'],
    ],
    complications: [
      {
        nom: 'Péritonite généralisée',
        fiche: 'peritonite-aigue',
        description: 'Retard diagnostique.',
        traitement: '- Chirurgie',
        clinique: '- Contracture',
        paraclinique: '',
      },
      {
        nom: 'Choc',
        fiche: 'sepsis-et-choc-septique',
        description: 'Hémorragique ou septique.',
        traitement: '- Réanimation',
        clinique: '- Hypotension',
        paraclinique: '- Lactates',
      },
    ],
    evolution: '## Pronostic\n- Dépend de la cause et du délai de prise en charge',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Arrêt des matières et des gaz', 'occasionnel'],
      ['Hypotension', 'occasionnel'],
    ],
    sources: [
      'WSES — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'The management of intra-abdominal infections from a global perspective: 2017 WSES guidelines',
    ],
    niveaux: {
      cs: [
        '- Évaluation, β-hCG, TDR, antalgie, transfert',
        '- Défense, choc, vomissements, arrêt du transit',
      ],
      hgr: ['- Échographie, ASP, chirurgie', ''],
      tert: ['- Scanner, chirurgie spécialisée', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Douleur abdominale avec défense, contracture, choc ou arrêt du transit',
    },
    formes: [
      {
        nom: 'Abdomen aigu chirurgical',
        type: 'commune',
        description: 'Péritonite, occlusion, hémorragie.',
        terrain: '',
        fonctionnels: '- Douleur intense',
        generaux: '- Fièvre ou choc',
        physiques: '- Défense, contracture',
        paraclinique: '- Pneumopéritoine, épanchement',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-occlusif'],
        examens: [['echographie-abdominale', 'Orientation']],
      },
      {
        nom: 'Fausse urgence chirurgicale',
        type: 'etiologique',
        description: 'Cause médicale.',
        terrain: '- Drépanocytose, diabète, paludisme',
        fonctionnels: '- Douleur diffuse',
        generaux: '- Fièvre',
        physiques: '- Pas de contracture',
        paraclinique: '- TDR, glycémie',
        etiologies: '- Paludisme, CVO, acidocétose',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Choc hémorragique traumatique
  {
    ...URGCH,
    slug: 'choc-hemorragique-traumatique',
    nom: 'Choc hémorragique traumatique',
    resume:
      'Première cause de décès évitable après un traumatisme : contrôle de l’hémorragie (garrot, compression, ceinture pelvienne, chirurgie), hypotension permissive, transfusion précoce (sang total ou ratio 1:1:1), acide tranexamique dans les 3 h, réchauffement, éviter la triade létale.',
    definition:
      'Insuffisance circulatoire aiguë due à une perte sanguine traumatique, classée selon l’ATLS (classes I à IV).',
    physiopathologie:
      '## Mécanismes\n- Hypovolémie, vasoconstriction compensatrice, puis hypotension\n- **Triade létale** : hypothermie, acidose, coagulopathie\n- Sources : thorax, abdomen, bassin, os longs, plaies externes (« sur la route »)',
    diagnostic:
      '## Reconnaissance\n- Tachycardie, TRC allongé, pâleur, agitation, oligurie ; hypotension tardive\n- **Index de choc** ≥ 1\n- Classes ATLS : I (< 15 %), II (15–30 %), III (30–40 %, hypotension), IV (> 40 %)\n\n## Recherche de la source\n- Plaies externes, FAST (abdomen, plèvres, péricarde), radiographie thoracique et du bassin, fémurs',
    examens: [
      ['premiere_intention', 'echographie-abdominale', 'FAST.'],
      ['premiere_intention', 'radiographie-thoracique', 'Hémothorax.'],
      ['premiere_intention', 'radiographie-osseuse', 'Bassin, fémurs.'],
      ['premiere_intention', 'nfs', 'Hb (tardivement abaissée).'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'hemostase', 'Coagulopathie.'],
      ['gravite', 'lactates', 'Gravité.'],
    ],
    scores: ['index-de-choc', 'glasgow'],
    differentiels: [
      ['Choc neurogénique', 'Lésion médullaire : hypotension avec bradycardie.'],
      ['Pneumothorax compressif, tamponnade', 'Choc obstructif : jugulaires turgescentes.'],
    ],
    etiologies: '## Causes\n- Accidents de la route, chutes, plaies par arme blanche ou à feu, écrasements',
    principes: [
      [
        'Contrôle de l’hémorragie',
        'Priorité absolue.',
        '- **Garrot** (membres), compression directe, pansements hémostatiques, **ceinture pelvienne**\n- Chirurgie ou embolisation : laparotomie, thoracotomie, packing pelvien (« damage control »)',
      ],
      [
        'Réanimation hémostatique',
        'Restaurer la perfusion sans aggraver le saignement.',
        '- **Hypotension permissive** : PAS 80–90 mmHg jusqu’à l’hémostase (sauf traumatisme crânien : PAS > 110)\n- Limiter les cristalloïdes (≤ 1 L), **transfusion précoce** : sang total frais ou culots/plasma/plaquettes 1:1:1\n- **Acide tranexamique** 1 g en 10 min puis 1 g en 8 h (dans les 3 h)\n- **Calcium** (gluconate) lors des transfusions massives\n- **Réchauffement** (couvertures, solutés chauds)',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Dans les 3 h'],
      ['ringer-lactate', 'premiere', 'Remplissage limité'],
      ['gluconate-de-calcium', 'adjuvant', 'Transfusion massive'],
      ['ketamine', 'premiere', 'Analgésie, induction (stabilité hémodynamique)'],
      ['morphine', 'alternative', 'Analgésie titrée'],
      ['noradrenaline', 'deuxieme', 'Hypotension réfractaire après remplissage'],
    ],
    complications: [
      {
        nom: 'Coagulopathie traumatique',
        description: 'Dilution, consommation, hypothermie.',
        traitement: '- Plasma, plaquettes, fibrinogène',
        clinique: '- Saignement diffus',
        paraclinique: '- TP, fibrinogène',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hypoperfusion.',
        traitement: '- Restaurer la perfusion',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Défaillance multiviscérale',
        description: 'Choc prolongé.',
        traitement: '- Réanimation',
        clinique: '',
        paraclinique: '- Lactates',
      },
    ],
    evolution: '## Pronostic\n- Survie liée au délai d’hémostase et à la disponibilité du sang',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Hypotension', 'tres_frequent'],
      ['Pâleur', 'tres_frequent'],
      ['Hémorragies', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Oligurie', 'frequent'],
    ],
    sources: [
      'ACS TQIP — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Garrot, compression, voie veineuse, acide tranexamique, transfert', '- Tout choc traumatique'],
      hgr: ['- Transfusion, chirurgie d’écourtement', ''],
      tert: ['- Centre de traumatologie, banque de sang', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Traumatisé en choc avec abdomen douloureux ou FAST positive' },
    formes: [
      {
        nom: 'Choc hémorragique compensé',
        type: 'commune',
        description: 'Classes I–II.',
        terrain: '',
        fonctionnels: '- Soif, anxiété',
        generaux: '- Tachycardie',
        physiques: '- TRC allongé, PA normale',
        paraclinique: '- Lactates modérés',
        etiologies: '',
        syndromes: ['syndrome-d-hemorragie-interne'],
      },
      {
        nom: 'Choc hémorragique décompensé',
        type: 'gravite',
        description: 'Classes III–IV.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Hypotension, confusion',
        physiques: '- Pâleur extrême, extrémités froides',
        paraclinique: '- Lactates élevés, coagulopathie',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },
];
