'use strict';

/**
 * Lot 39 (phase 2, pédiatrie générale) — retard de développement psychomoteur, rachitisme
 * carentiel. Rédigé par IA (OMS, UNICEF « Care for Child Development », Nelson, consensus
 * mondial sur le rachitisme nutritionnel) : à valider.
 */

const PED = { departement: 'pediatrie', specialite: 'Pédiatrie générale' };

module.exports = [
  // =================================================================== Retard de développement
  {
    ...PED,
    slug: 'retard-developpement-psychomoteur',
    nom: 'Retard de développement psychomoteur',
    resume:
      'Acquisitions motrices, langagières, sociales ou cognitives en retard par rapport à l’âge (tenue de tête à 3 mois, assis à 9 mois, marche à 18 mois, premiers mots à 18 mois) : surveiller le développement à chaque consultation, vérifier la vue et l’audition, rechercher une cause (asphyxie, prématurité, malnutrition, méningite, neuropaludisme, hypothyroïdie, VIH, épilepsie, autisme, trisomie) ; stimulation précoce par les parents, rééducation, scolarisation adaptée.',
    definition:
      'Écart significatif entre les acquisitions d’un enfant et celles attendues pour son âge dans un ou plusieurs domaines (motricité globale ou fine, langage, socialisation, cognition) ; le retard global concerne au moins deux domaines.',
    physiopathologie:
      '## Causes\n- **Périnatales** : **asphyxie**, prématurité, ictère nucléaire, infections néonatales, hypoglycémie\n- **Postnatales** : **malnutrition**, **méningite**, **neuropaludisme**, traumatisme crânien, VIH, intoxication au plomb, konzo\n- **Génétiques** : trisomie 21, syndromes, maladies métaboliques\n- **Endocriniennes** : **hypothyroïdie** congénitale, carence iodée\n- **Sensorielles** : surdité, déficit visuel\n- **Environnementales** : manque de stimulation, négligence, dépression maternelle\n- Troubles du neurodéveloppement : autisme, déficience intellectuelle, paralysie cérébrale',
    diagnostic:
      '## Repères (âge d’acquisition limite)\n- **3 mois** : tient sa tête, sourire réponse\n- **9 mois** : tient assis sans appui, babille\n- **12 mois** : pointe du doigt, dit « papa/maman »\n- **18 mois** : **marche seul**, dit quelques mots\n- **24 mois** : associe deux mots, court\n- **Toute régression** (perte d’acquisitions) est une alerte\n\n## Évaluation\n- Courbe de croissance, **périmètre crânien**, examen neurologique (tonus, réflexes), dysmorphie\n- **Audition et vision**, interactions sociales\n- Antécédents périnatals, infections, carences, contexte familial\n\n## Examens\n- Selon l’orientation : **TSH**, NFS, test VIH, glycémie, EEG, imagerie cérébrale, audiométrie',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Croissance, périmètre crânien.'],
      ['premiere_intention', 'audiometrie', 'Surdité.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'tdr-vih', 'Encéphalopathie du VIH.'],
      ['etiologique', 'nfs', 'Anémie, carences.'],
      ['deuxieme_intention', 'eeg', 'Épilepsie.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Malformation, séquelles.'],
    ],
    scores: [],
    differentiels: [
      ['paralysie-cerebrale', 'Atteinte motrice prédominante non évolutive.'],
      ['troubles-du-spectre-autistique', 'Troubles des interactions sociales.'],
      ['malnutrition-chronique', 'Retard de croissance associé.'],
      ['epilepsie-enfant', 'Crises, régression.'],
      ['Surdité', 'Retard de langage isolé.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Asphyxie néonatale, prématurité, malnutrition, méningites, neuropaludisme, VIH, hypothyroïdie, manque de stimulation',
    principes: [
      [
        'Repérage',
        'Dépister tôt.',
        '- Surveiller le développement à chaque consultation (carnet de santé), écouter les inquiétudes des parents\n- Orienter vers une évaluation spécialisée en cas de retard ou de régression',
      ],
      [
        'Stimulation et rééducation',
        'Développer le potentiel.',
        '- Conseils de **stimulation précoce** aux parents (« Soins pour le développement de l’enfant » OMS/UNICEF : parler, jouer, lire, répondre à l’enfant)\n- **Kinésithérapie**, orthophonie, psychomotricité selon les besoins ; réadaptation à base communautaire\n- Correction auditive ou visuelle',
      ],
      [
        'Traitement de la cause',
        'Agir sur le curable.',
        '- Nutrition (malnutrition, carences), **lévothyroxine** (hypothyroïdie), ARV (VIH), antiépileptiques\n- Scolarisation inclusive, soutien des familles, lutte contre la stigmatisation',
      ],
    ],
    molecules: [
      ['levothyroxine', 'alternative', 'Hypothyroïdie'],
      ['phenobarbital', 'alternative', 'Épilepsie associée'],
      ['multivitamines', 'adjuvant', 'Carences associées'],
    ],
    complications: [
      {
        nom: 'Handicap persistant',
        fiche: 'paralysie-cerebrale',
        description: 'Prise en charge tardive.',
        traitement: '- Réadaptation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Malnutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Difficultés d’alimentation.',
        traitement: '- Soutien nutritionnel',
        clinique: '- Perte de poids',
        paraclinique: '- Anthropométrie',
      },
      {
        nom: 'Maltraitance et exclusion',
        fiche: 'maltraitance-enfant',
        description: 'Stigmatisation.',
        traitement: '- Protection, soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause et de la précocité de la stimulation ; progrès importants avec une prise en charge précoce',
    urgences: [],
    symptomes: [
      ['Retard de développement psychomoteur', 'tres_frequent'],
      ['Troubles du langage', 'frequent'],
      ['Hypotonie', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
      ['Retard de croissance', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'UNICEF — santé et nutrition de l’enfant',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Surveillance du développement, conseils de stimulation, orientation',
        '- Retard, régression, périmètre crânien anormal',
      ],
      hgr: ['- Bilan étiologique, kinésithérapie', ''],
      tert: ['- Neuropédiatrie, rééducation spécialisée', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Retard global du développement',
        type: 'commune',
        description: 'Plusieurs domaines.',
        terrain: '- Antécédent d’asphyxie ou de prématurité',
        fonctionnels: '- Acquisitions tardives',
        generaux: '',
        physiques: '- Hypotonie',
        paraclinique: '',
        etiologies: '- Périnatales, carences',
        syndromes: [],
      },
      {
        nom: 'Retard isolé du langage',
        type: 'etiologique',
        description: 'Langage seul.',
        terrain: '',
        fonctionnels: '- Peu ou pas de mots à 2 ans',
        generaux: '',
        physiques: '',
        paraclinique: '- Audiométrie',
        etiologies: '- Surdité, manque de stimulation, autisme',
        syndromes: [],
      },
      {
        nom: 'Régression des acquisitions',
        type: 'gravite',
        description: 'Alerte.',
        terrain: '',
        fonctionnels: '- Perte d’acquisitions',
        generaux: '',
        physiques: '- Signes neurologiques',
        paraclinique: '- EEG, imagerie',
        etiologies: '- Épilepsie, encéphalopathie, VIH',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Rachitisme
  {
    ...PED,
    slug: 'rachitisme-carentiel',
    nom: 'Rachitisme carentiel',
    resume:
      'Défaut de minéralisation de l’os en croissance par carence en vitamine D et/ou en calcium (enfant peu exposé au soleil, allaitement prolongé sans diversification, apports calciques faibles) : bourrelets des poignets, chapelet costal, jambes arquées, retard de marche, fontanelle large ; radiographie du poignet ; vitamine D (2 000 UI/j au moins 3 mois, ou dose de charge) et calcium 500 mg/j ; exposition solaire, alimentation riche en calcium.',
    definition:
      'Maladie de l’enfant en croissance due à un défaut de minéralisation des cartilages de croissance et de l’os, par carence en vitamine D, en calcium ou les deux (rachitisme nutritionnel).',
    physiopathologie:
      '## Mécanismes\n- Vitamine D nécessaire à l’absorption intestinale du calcium ; carence → hypocalcémie, hyperparathyroïdie, perte de phosphore\n- **Carence calcique alimentaire** fréquente en Afrique (alimentation à base de céréales et de manioc, peu de laitages)\n\n## Facteurs de risque\n- Enfant gardé à l’intérieur ou couvert, peau foncée, allaitement exclusif prolongé sans supplément, mère carencée, prématurité\n- Malnutrition, malabsorption, alimentation pauvre en calcium',
    diagnostic:
      '## Clinique\n- **Bourrelets** des poignets et des chevilles, **chapelet costal**, **jambes arquées** (genu varum) ou en X\n- Fontanelle large, craniotabès, retard de fermeture, retard de dentition\n- **Retard de la marche**, douleurs osseuses, faiblesse musculaire, ventre proéminent\n- Hypocalcémie : convulsions, tétanie (nourrisson)\n- Infections respiratoires fréquentes\n\n## Examens\n- **Radiographie du poignet** : métaphyses élargies, en cupule, effrangées\n- Calcémie, phosphorémie, **phosphatases alcalines** (élevées), vitamine D si disponible',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Poignet : métaphyses en cupule.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypocalcémie.'],
      ['premiere_intention', 'bilan-hepatique', 'Phosphatases alcalines élevées.'],
      ['premiere_intention', 'anthropometrie', 'Croissance, malnutrition.'],
      ['etiologique', 'creatinine', 'Rachitisme rénal (diagnostic différentiel).'],
    ],
    scores: [],
    differentiels: [
      ['Rachitisme vitamino-résistant (hypophosphatémique)', 'Familial, résistant à la vitamine D.'],
      ['Ostéodystrophie rénale', 'Insuffisance rénale chronique.'],
      ['Genu varum physiologique', 'Avant 2 ans, symétrique, sans signes osseux.'],
      ['malnutrition-chronique', 'Retard statural (souvent associé).'],
      ['drepanocytose', 'Douleurs osseuses, anémie.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Faible exposition solaire, alimentation pauvre en calcium (peu de lait, de poisson séché, de légumes verts), allaitement prolongé sans diversification, prématurité',
    principes: [
      [
        'Traitement',
        'Reminéraliser l’os.',
        '- **Vitamine D** (cholécalciférol) : **2 000 UI/j** pendant au moins **3 mois** (3 000–6 000 UI/j après 1 an selon le consensus), ou dose de charge unique (50 000 UI entre 3 et 12 mois ; 150 000 UI après 1 an), puis dose d’entretien de 400–600 UI/j\n- **Calcium** 500 mg/j (alimentation et/ou supplément), indispensable en particulier dans le rachitisme par carence calcique\n- Hypocalcémie symptomatique : gluconate de calcium IV (voir fiche hypocalcémie)',
      ],
      [
        'Mesures associées',
        'Prévenir la récidive.',
        '- **Exposition solaire** régulière (bras et jambes, 10–30 min/j), alimentation riche en calcium (lait, poisson séché avec arêtes, légumes à feuilles, légumineuses)\n- Traitement de la malnutrition associée\n- Déformations persistantes après 2–3 ans de traitement : avis orthopédique',
      ],
      [
        'Prévention',
        'Supplémenter les enfants à risque.',
        '- Vitamine D 400 UI/j chez le nourrisson à risque (prématuré, peu exposé au soleil), diversification alimentaire à 6 mois',
      ],
    ],
    molecules: [
      ['cholecalciferol-vitamine-d3', 'premiere', 'Vitamine D'],
      ['ergocalciferol-vitamine-d2', 'alternative', 'Vitamine D'],
      ['calcium', 'premiere', 'Supplément calcique'],
      ['gluconate-de-calcium', 'adjuvant', 'Hypocalcémie symptomatique'],
    ],
    complications: [
      {
        nom: 'Convulsions hypocalcémiques',
        fiche: 'hypocalcemie-neonatale',
        description: 'Nourrisson.',
        traitement: '- Calcium IV, vitamine D',
        clinique: '- Convulsions, tétanie',
        paraclinique: '- Calcémie basse',
      },
      {
        nom: 'Déformations osseuses persistantes',
        description: 'Rachitisme ancien.',
        traitement: '- Orthopédie',
        clinique: '- Genu varum ou valgum',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Infections respiratoires',
        fiche: 'pneumonie-enfant',
        description: 'Thorax déformé, hypotonie.',
        traitement: '- Antibiotiques',
        clinique: '- Toux, polypnée',
        paraclinique: '',
      },
      {
        nom: 'Bassin rétréci chez la fille',
        description: 'Dystocie future.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison radiologique en 3 mois sous traitement ; la plupart des déformations se corrigent avec la croissance',
    urgences: [],
    symptomes: [
      ['Déformation d’un membre', 'tres_frequent'],
      ['Retard de développement psychomoteur', 'frequent'],
      ['Douleurs osseuses', 'frequent'],
      ['Retard de croissance', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: [
        '- Repérage, vitamine D, calcium, conseils alimentaires et solaires',
        '- Convulsions, déformations importantes',
      ],
      hgr: ['- Radiographie, bilan phosphocalcique', ''],
      tert: ['- Pédiatrie, orthopédie, rachitismes résistants', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Rachitisme carentiel du jeune enfant',
        type: 'commune',
        description: 'Carence en vitamine D et/ou calcium.',
        terrain: '- Enfant de 6 mois à 3 ans',
        fonctionnels: '- Retard de marche',
        generaux: '',
        physiques: '- Bourrelets, chapelet costal, jambes arquées',
        paraclinique: '- Métaphyses en cupule, PAL élevées',
        etiologies: '- Carence en vitamine D ou en calcium',
        syndromes: [],
      },
      {
        nom: 'Rachitisme avec hypocalcémie',
        type: 'gravite',
        description: 'Nourrisson.',
        terrain: '- Nourrisson',
        fonctionnels: '- Convulsions, laryngospasme',
        generaux: '',
        physiques: '- Craniotabès',
        paraclinique: '- Calcémie basse',
        etiologies: '',
        syndromes: ['syndrome-convulsif'],
      },
    ],
  },
];
