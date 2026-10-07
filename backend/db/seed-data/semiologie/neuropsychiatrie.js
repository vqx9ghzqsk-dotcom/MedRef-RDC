'use strict';

/**
 * Formes cliniques, sémiologie systématisée et étiologies par forme — neurologie.
 * Format : voir semiologie/infectiologie.js. Contenu à valider par un médecin.
 */

module.exports = {
  // =================================================================== État de mal épileptique
  'etat-de-mal-epileptique': {
    urgences: {
      'etat-de-mal-epileptique-urgence':
        'Convulsions qui durent plus de 5 minutes ou se répètent sans reprise de conscience entre les crises',
    },
    formes: [
      {
        nom: 'État de mal tonico-clonique généralisé (forme commune)',
        type: 'commune',
        description:
          'Crise tonico-clonique de plus de 5 min, ou crises successives sans retour à la conscience : urgence vitale.',
        terrain:
          '- Épileptique connu (arrêt ou sous-dosage du traitement, sevrage alcoolique)\n- Première crise révélant une cause aiguë (infection, AVC, trouble métabolique)',
        generaux:
          '- Hyperthermie, tachycardie, HTA puis hypotension\n- Hypersécrétion bronchique, encombrement, hypoxie',
        physiques:
          '- Crises tonico-cloniques généralisées répétées ou continues\n- Coma entre les crises, morsure de langue, perte d’urines\n- Rechercher un signe de localisation, un syndrome méningé, un purpura, une fièvre',
        paraclinique:
          '- Glycémie capillaire immédiate\n- Ionogramme (natrémie, calcémie, magnésémie), TDR paludisme, dosage des antiépileptiques\n- Scanner cérébral, ponction lombaire si fièvre (après le scanner si signe de localisation)',
        etiologies:
          '- **Chez l’épileptique connu** : arrêt ou mauvaise observance du traitement, sevrage alcoolique, privation de sommeil\n- **Causes aiguës** : neuropaludisme, méningite, encéphalite, AVC, traumatisme crânien, éclampsie\n- **Métaboliques** : hypoglycémie, hyponatrémie, hypocalcémie\n- **Toxiques** : alcool, intoxications',
        syndromes: ['syndrome-convulsif'],
        examens: [
          ['glycemie', 'À faire immédiatement : corriger une hypoglycémie.'],
          ['tdr-paludisme', 'Neuropaludisme : cause fréquente chez l’enfant en RDC.'],
          ['scanner-cerebral', 'Lésion aiguë (AVC, tumeur, traumatisme).'],
        ],
      },
      {
        nom: 'État de mal de l’enfant et convulsions fébriles prolongées',
        type: 'terrain',
        description:
          'Chez l’enfant, la fièvre et les infections du système nerveux sont les causes principales.',
        terrain: '- Enfant de 6 mois à 5 ans, fièvre, zone d’endémie palustre',
        fonctionnels: '- Fièvre, vomissements, diarrhée avant les crises',
        generaux: '- Fièvre élevée, signes de déshydratation possibles',
        physiques:
          '- Crises généralisées ou focales prolongées\n- Fontanelle bombée, raideur de nuque, purpura à rechercher',
        paraclinique: '- Glycémie, TDR paludisme, ponction lombaire, natrémie, calcémie',
        etiologies:
          '- Neuropaludisme, méningite bactérienne, encéphalite\n- Convulsion fébrile complexe (diagnostic d’élimination)\n- Hypoglycémie, hypocalcémie, déshydratation hypernatrémique',
        syndromes: ['syndrome-convulsif', 'syndrome-infectieux'],
        examens: [['lcr', 'Méningite ou encéphalite.']],
      },
      {
        nom: 'État de mal non convulsif',
        type: 'paraclinique',
        description: 'Activité épileptique continue sans convulsions visibles ; diagnostic à l’EEG.',
        terrain: '- Sujet âgé, coma persistant après un état de mal convulsif, réanimation',
        fonctionnels: '- Confusion inexpliquée, comportement bizarre',
        generaux: '- Variable',
        physiques: '- Confusion fluctuante, mutisme, clonies discrètes (paupières, bouche), regard fixe',
        paraclinique: '- EEG : décharges continues',
        etiologies: '- Mêmes causes que l’état de mal convulsif',
        syndromes: ['syndrome-confusionnel'],
        examens: [['eeg', 'Indispensable au diagnostic.']],
      },
    ],
  },

  // =================================================================== Épilepsie
  epilepsie: {
    urgences: {
      'etat-de-mal-epileptique-urgence':
        'Crise qui dure plus de 5 minutes, crises répétées sans réveil entre elles, blessure ou détresse respiratoire',
    },
    formes: [
      {
        nom: 'Épilepsie généralisée (crises tonico-cloniques)',
        type: 'commune',
        description:
          'Crises récurrentes non provoquées d’emblée bilatérales, dont la plus connue est la crise tonico-clonique.',
        terrain:
          '- Antécédents familiaux, souffrance néonatale, convulsions fébriles complexes\n- Facteurs déclenchants : manque de sommeil, alcool, arrêt du traitement, stimulation lumineuse',
        fonctionnels: '- Parfois prodromes vagues (irritabilité, céphalées) ; pas d’aura',
        generaux: '- Entre les crises : examen normal',
        physiques:
          '- **Crise tonico-clonique** : perte de connaissance brutale, chute, phase tonique, phase clonique, phase résolutive avec stertor\n- Morsure latérale de langue, perte d’urines, confusion post-critique\n- **Absences** (enfant) : rupture de contact brève de quelques secondes, regard fixe\n- **Myoclonies** : secousses brèves, matinales',
        paraclinique:
          '- EEG intercritique : pointes-ondes généralisées (peut être normal)\n- Imagerie si crise atypique ou signe focal',
        etiologies:
          '- **Génétiques** (idiopathiques) : épilepsie-absences, épilepsie myoclonique juvénile\n- **Structurelles** et **infectieuses** à éliminer selon le contexte',
        syndromes: ['syndrome-convulsif'],
        examens: [['eeg', 'Oriente le type d’épilepsie.']],
      },
      {
        nom: 'Épilepsie focale (partielle)',
        type: 'topographique',
        description:
          'Crises naissant d’une zone du cerveau ; la sémiologie dépend de cette zone et oriente vers une lésion.',
        terrain:
          '- Antécédent de méningite, de neuropaludisme, de traumatisme crânien, d’AVC, de neurocysticercose',
        fonctionnels:
          '- **Aura** : sensation épigastrique ascendante, peur, déjà-vu (temporal), fourmillements (pariétal), éclairs (occipital)',
        physiques:
          '- Crise focale motrice (secousses d’un membre, marche bravais-jacksonienne), sensitive ou visuelle\n- Rupture de contact avec automatismes (mâchonnement, gestes stéréotypés) : temporale\n- Généralisation secondaire possible\n- Déficit post-critique transitoire (paralysie de Todd)',
        paraclinique:
          '- EEG : anomalies focales\n- Imagerie cérébrale (scanner, IRM) : recherche d’une lésion',
        etiologies:
          '- **Séquelles d’infections** : méningite, neuropaludisme, encéphalite\n- **Neurocysticercose** (*Taenia solium*), toxoplasmose (VIH)\n- **Vasculaires** : AVC, malformations ; **traumatiques** ; **tumorales** ; souffrance néonatale',
        syndromes: [],
        examens: [
          ['irm-cerebrale', 'Recherche de la lésion responsable.'],
          ['scanner-cerebral', 'Calcifications (neurocysticercose), séquelles.'],
        ],
      },
      {
        nom: 'Épilepsies de l’enfant (encéphalopathies épileptiques)',
        type: 'terrain',
        description: 'Épilepsies sévères avec retentissement sur le développement.',
        terrain: '- Nourrisson ou jeune enfant, souffrance néonatale, infections du système nerveux',
        fonctionnels: '- Régression des acquisitions',
        generaux: '- Retard psychomoteur',
        physiques: '- Spasmes en flexion par salves (syndrome de West), chutes (Lennox-Gastaut)',
        paraclinique: '- EEG : hypsarythmie (West)',
        etiologies: '- Lésionnelles (anoxo-ischémie, infections), génétiques, métaboliques',
        syndromes: [],
        examens: [['eeg', 'Hypsarythmie, pointes-ondes lentes.']],
      },
    ],
  },

  // =================================================================== AVC
  avc: {
    urgences: {
      'avc-aigu':
        'Visage asymétrique, faiblesse d’un bras ou d’une jambe, trouble de la parole, d’apparition brutale (« VITE »)',
      'urgence-hypertensive': 'PA très élevée avec céphalées, vomissements et troubles de la conscience',
    },
    formes: [
      {
        nom: 'AVC ischémique carotidien (forme commune)',
        type: 'commune',
        description: 'Infarctus cérébral dans le territoire de l’artère cérébrale moyenne, le plus fréquent.',
        terrain:
          '- HTA (1er facteur), diabète, tabac, dyslipidémie, fibrillation atriale, drépanocytose chez le jeune',
        fonctionnels: '- Déficit brutal, souvent au réveil ; trouble du langage ; céphalées rares',
        generaux: '- HTA fréquente à la phase aiguë',
        physiques:
          '- **Hémiplégie** controlatérale à prédominance brachio-faciale\n- Hémianesthésie, hémianopsie latérale homonyme\n- **Aphasie** (hémisphère gauche) ou négligence de l’hémicorps gauche (hémisphère droit)\n- Signe de Babinski',
        paraclinique:
          '- Scanner cérébral sans injection en urgence : normal à la phase précoce, élimine une hémorragie\n- Glycémie, ECG (fibrillation atriale), bilan lipidique, échographie des troncs supra-aortiques',
        etiologies:
          '- **Athérosclérose** des grosses artères\n- **Cardio-embolique** : fibrillation atriale, valvulopathie rhumatismale, cardiomyopathie\n- **Lacunes** (petites artères, HTA)\n- Chez le jeune : drépanocytose, VIH, dissection, syphilis',
        syndromes: ['syndrome-pyramidal'],
        examens: [
          ['scanner-cerebral', 'Élimine une hémorragie ; hypodensité tardive.'],
          ['ecg', 'Fibrillation atriale.'],
          ['glycemie', 'Éliminer une hypoglycémie simulant un AVC.'],
        ],
      },
      {
        nom: 'AVC hémorragique (hématome intracérébral)',
        type: 'etiologique',
        description:
          'Saignement dans le parenchyme cérébral ; proportion plus élevée en Afrique subsaharienne.',
        terrain: '- HTA sévère mal contrôlée, alcool, anticoagulants, sujet plus jeune',
        fonctionnels: '- Céphalées brutales, vomissements, déficit d’installation rapide',
        generaux: '- HTA très élevée',
        physiques: '- Déficit neurologique focal, troubles de la conscience précoces\n- Signes d’HTIC',
        paraclinique: '- Scanner : hyperdensité spontanée intraparenchymateuse',
        etiologies:
          '- HTA (hématomes profonds : noyaux gris, thalamus, cervelet)\n- Malformations vasculaires, troubles de l’hémostase, anticoagulants, angiopathie amyloïde (sujet âgé)',
        syndromes: ['syndrome-d-hypertension-intracranienne', 'syndrome-pyramidal'],
        examens: [['scanner-cerebral', 'Hyperdensité : hématome.']],
      },
      {
        nom: 'AVC vertébro-basilaire (fosse postérieure)',
        type: 'topographique',
        description: 'Atteinte du tronc cérébral ou du cervelet, avec signes croisés ou cérébelleux.',
        terrain: '- Mêmes facteurs de risque vasculaire',
        fonctionnels:
          '- Vertiges, troubles de l’équilibre, vision double (diplopie), troubles de la déglutition',
        generaux: '- Vomissements',
        physiques:
          '- **Syndrome alterne** : atteinte d’un nerf crânien d’un côté, déficit moteur ou sensitif de l’autre\n- Syndrome cérébelleux (ataxie, dysmétrie), nystagmus\n- Dysarthrie, troubles de la déglutition',
        paraclinique: '- IRM (le scanner voit mal la fosse postérieure)',
        etiologies: '- Athérosclérose vertébro-basilaire, embolie, dissection vertébrale',
        syndromes: [],
        examens: [['irm-cerebrale', 'Meilleur examen pour la fosse postérieure.']],
      },
      {
        nom: 'Accident ischémique transitoire (AIT)',
        type: 'evolutive',
        description:
          'Déficit neurologique régressant totalement, généralement en moins d’une heure, sans lésion à l’imagerie : alerte majeure.',
        terrain: '- Facteurs de risque vasculaire',
        fonctionnels: '- Déficit transitoire, cécité monoculaire transitoire (amaurose fugace)',
        physiques: '- Examen normal après l’épisode',
        paraclinique: '- Bilan étiologique en urgence (ECG, doppler des troncs supra-aortiques)',
        etiologies: '- Mêmes causes que l’infarctus ; risque élevé d’AVC constitué dans les jours suivants',
        syndromes: [],
        examens: [['ecg', 'Rechercher une source cardio-embolique.']],
      },
    ],
  },
};
