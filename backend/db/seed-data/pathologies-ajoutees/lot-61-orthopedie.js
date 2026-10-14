'use strict';

/**
 * Lot 61 (phase 2, orthopédie) — ostéoarthrite tuberculeuse, pied bot congénital, dysplasie de la
 * hanche, genu varum et genu valgum, pseudarthroses et cals vicieux, tumeurs osseuses. Rédigé par
 * IA (OMS tuberculose, AAOS, Nelson, Sabiston) : à valider.
 */

const ORTHO = { departement: 'chirurgie', specialite: 'Orthopédie' };

module.exports = [
  // =================================================================== Ostéoarthrite tuberculeuse
  {
    ...ORTHO,
    slug: 'osteoarthrite-tuberculeuse',
    nom: 'Ostéoarthrite tuberculeuse',
    resume:
      'Tuberculose des os et des articulations périphériques (hanche, genou, cheville, poignet, coude ; le rachis est traité dans la fiche « mal de Pott »), fréquente chez l’enfant et la personne vivant avec le VIH : monoarthrite chronique, gonflement peu inflammatoire (« tumeur blanche »), douleur, boiterie, amyotrophie, abcès froids et fistules, altération de l’état général ; radiographies (déminéralisation, pincement, érosions), ponction et biopsie synoviale (Xpert, culture, histologie), radiographie thoracique, test VIH ; traitement antituberculeux 12 mois (2RHZE/10RH), immobilisation courte puis rééducation, drainage des abcès, chirurgie des séquelles.',
    definition:
      'Infection tuberculeuse d’une articulation et des os adjacents (arthrite et ostéite tuberculeuses), en dehors du rachis.',
    physiopathologie:
      '## Mécanismes\n- Dissémination **hématogène** de Mycobacterium tuberculosis à partir d’un foyer pulmonaire (souvent ancien)\n- Synovite granulomateuse → destruction lente du cartilage et de l’os → **ankylose**, déformations\n\n## Terrain\n- Enfant, **VIH**, malnutrition, diabète, contage tuberculeux',
    diagnostic:
      '## Clinique\n- **Monoarthrite chronique** (hanche, genou surtout) évoluant sur des semaines ou des mois\n- Gonflement peu chaud (« **tumeur blanche** »), douleur, **boiterie**, limitation, **amyotrophie**\n- **Abcès froids**, **fistules**, adénopathies\n- Signes généraux : fièvre vespérale, sueurs, amaigrissement\n\n## Examens\n- **Radiographies** : déminéralisation, pincement, géodes, érosions\n- **Ponction articulaire** (liquide lymphocytaire, **Xpert MTB/RIF**, culture) et **biopsie synoviale** (granulome caséeux)\n- **Radiographie thoracique**, **test VIH**, VS, CRP, NFS\n- IRM si disponible (abcès, extension)',
    examens: [
      ['premiere_intention', 'radiographie-osseuse', 'Déminéralisation, érosions.'],
      ['confirmation', 'ponction-articulaire', 'Liquide, Xpert, culture.'],
      ['confirmation', 'xpert-mtb-rif', 'Mycobacterium tuberculosis.'],
      ['confirmation', 'biopsie-histologie', 'Granulome caséeux.'],
      ['premiere_intention', 'radiographie-thoracique', 'Foyer pulmonaire.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'vitesse-sedimentation', 'Inflammation.'],
      ['deuxieme_intention', 'irm-osteo-articulaire', 'Extension, abcès.'],
    ],
    scores: [],
    differentiels: [
      ['arthrite-septique', 'Arthrite aiguë fébrile.'],
      ['arthrite-juvenile-idiopathique', 'Arthrite chronique de l’enfant.'],
      ['osteomyelite-chronique', 'Ostéite à pyogènes.'],
      ['mal-de-pott', 'Tuberculose vertébrale.'],
      ['tumeurs-osseuses', 'Lésion osseuse lytique.'],
    ],
    etiologies: '## Agent\n- Mycobacterium tuberculosis ; terrain : enfant, VIH, malnutrition',
    principes: [
      [
        'Antituberculeux',
        'Traitement prolongé.',
        '- **2 mois RHZE** (rifampicine, isoniazide, pyrazinamide, éthambutol) puis **10 mois RH** (12 mois au total, selon les directives nationales)\n- **Pyridoxine** ; traitement ARV si VIH ; recherche des contacts',
      ],
      [
        'Mesures orthopédiques',
        'Préserver l’articulation.',
        '- **Immobilisation** courte (attelle, traction) pour la douleur, puis **rééducation** précoce\n- **Drainage** des abcès froids, curetage-synovectomie dans certains cas\n- Séquelles : arthrodèse, arthroplastie (centre spécialisé)',
      ],
    ],
    molecules: [
      ['rifampicine', 'premiere', 'RHZE puis RH'],
      ['isoniazide', 'premiere', 'RHZE puis RH'],
      ['pyrazinamide', 'premiere', 'RHZE'],
      ['ethambutol', 'premiere', 'RHZE'],
      ['pyridoxine', 'adjuvant', 'Prévention de la neuropathie'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Ankylose et destruction articulaire',
        description: 'Diagnostic tardif.',
        traitement: '- Arthrodèse, arthroplastie',
        clinique: '- Raideur, déformation',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Fistules et surinfection',
        fiche: 'osteomyelite-chronique',
        description: 'Abcès froids.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Écoulement',
        paraclinique: '',
      },
      {
        nom: 'Inégalité de longueur (enfant)',
        description: 'Atteinte du cartilage de croissance.',
        traitement: '- Orthopédie',
        clinique: '- Boiterie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison sous traitement ; séquelles fonctionnelles fréquentes si diagnostic tardif',
    urgences: [],
    symptomes: [
      ['Gonflement articulaire', 'tres_frequent'],
      ['Boiterie', 'frequent'],
      ['Douleurs osseuses', 'frequent'],
      ['Sueurs nocturnes', 'frequent'],
      ['Perte de poids', 'frequent'],
    ],
    sources: [
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
      'Sabiston Textbook of Surgery',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Monoarthrite chronique : référence, test VIH', ''],
      hgr: ['- Radiographies, ponction, Xpert, antituberculeux', ''],
      tert: ['- Biopsie, chirurgie des séquelles', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Coxite tuberculeuse',
        type: 'commune',
        description: 'Hanche.',
        terrain: '- Enfant',
        fonctionnels: '- Boiterie, douleur du genou référée',
        generaux: '- Fièvre vespérale',
        physiques: '- Limitation de la hanche',
        paraclinique: '- Pincement, géodes',
        etiologies: '- M. tuberculosis',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
      },
      {
        nom: 'Tumeur blanche du genou',
        type: 'topographique',
        description: 'Genou.',
        terrain: '- Adulte, VIH',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Gonflement peu chaud, amyotrophie',
        paraclinique: '- Liquide lymphocytaire',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Pied bot
  {
    ...ORTHO,
    slug: 'pied-bot-congenital',
    nom: 'Pied bot congénital',
    resume:
      'Malformation congénitale fréquente (≈ 1–2/1 000 naissances, garçons, souvent bilatérale) : pied en équin, varus, adduction et cavus, non réductible ; diagnostic à la naissance (examen systématique du nouveau-né) ; méthode de Ponseti (plâtres successifs hebdomadaires, ténotomie percutanée du tendon d’Achille, puis attelle d’abduction jusqu’à 4–5 ans), très efficace et accessible, à débuter dans les premières semaines ; non traité : handicap majeur à la marche (marche sur le dos du pied) ; distinguer du pied positionnel (réductible) et rechercher un spina bifida.',
    definition:
      'Déformation congénitale fixée du pied associant équin de l’arrière-pied, varus du talon, adduction et supination de l’avant-pied et cavus (pied bot varus équin).',
    physiopathologie:
      '## Formes\n- **Idiopathique** (la majorité)\n- **Secondaire** : spina bifida, arthrogrypose, syndromes génétiques\n\n## Mécanisme\n- Rétraction des structures médiales et postérieures, anomalies des os du tarse\n- Les tissus du nouveau-né sont malléables : correction progressive possible par plâtres',
    diagnostic:
      '## Clinique\n- Pied en **équin**, **varus**, **adduction**, **cavus**, **non réductible** manuellement (≠ pied positionnel)\n- Mollet fin, pli plantaire médial, uni- ou bilatéral\n- Rechercher : **spina bifida** (rachis), hanches, autres malformations\n- Score de Pirani (sévérité, suivi)\n\n## Examens\n- Diagnostic clinique ; échographie anténatale possible\n- Radiographies non indispensables chez le nourrisson',
    examens: [
      ['deuxieme_intention', 'radiographie-osseuse', 'Formes tardives.'],
      ['etiologique', 'echographie-transfontanellaire', 'Malformations associées si signes neurologiques.'],
      ['etiologique', 'irm-rachidienne', 'Spina bifida.'],
    ],
    scores: [],
    differentiels: [
      ['Pied positionnel (talus, metatarsus adductus)', 'Réductible, bénin.'],
      ['spina-bifida-defauts-tube-neural', 'Pied bot neurologique.'],
      ['paralysie-cerebrale', 'Équin acquis spastique.'],
      ['malformations-congenitales-majeures', 'Syndromes associés.'],
    ],
    etiologies: '## Causes\n- Idiopathique, spina bifida, arthrogrypose, syndromes génétiques',
    principes: [
      [
        'Méthode de Ponseti',
        'Dès les premières semaines.',
        '- **Plâtres** cruro-pédieux changés **chaque semaine** (5–8 plâtres) avec manipulation progressive\n- **Ténotomie percutanée du tendon d’Achille** (sous anesthésie locale) chez la majorité pour corriger l’équin, puis plâtre 3 semaines\n- **Attelle d’abduction** (« chaussures à barre ») 23 h/24 pendant 3 mois puis la nuit jusqu’à 4–5 ans (observance essentielle)',
      ],
      [
        'Formes tardives ou résistantes',
        'Adapter.',
        '- Ponseti possible même chez l’enfant plus âgé ; chirurgie (libération postéro-médiale, transfert du tibial antérieur) en cas de récidive',
      ],
      [
        'Programme',
        'Accompagner.',
        '- Éducation des parents (attelle), suivi régulier, programmes nationaux de prise en charge du pied bot',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Ténotomie percutanée'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Récidive',
        description: 'Arrêt de l’attelle.',
        traitement: '- Nouveaux plâtres, chirurgie',
        clinique: '- Retour de la déformation',
        paraclinique: '',
      },
      {
        nom: 'Handicap à la marche',
        description: 'Absence de traitement.',
        traitement: '- Chirurgie lourde',
        clinique: '- Marche sur le bord externe du pied',
        paraclinique: '',
      },
      {
        nom: 'Escarres sous plâtre',
        description: 'Plâtre mal toléré.',
        traitement: '- Soins, réfection',
        clinique: '- Plaie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Correction dans plus de 90 % des cas avec la méthode de Ponseti bien conduite ; récidives liées à l’abandon de l’attelle',
    urgences: [],
    symptomes: [
      ['Déformation d’un membre', 'tres_frequent'],
      ['Troubles de la marche', 'occasionnel'],
    ],
    sources: [
      'AAOS — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Dépistage à la naissance, orientation précoce', ''],
      hgr: ['- Méthode de Ponseti, ténotomie', ''],
      tert: ['- Formes résistantes', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Pied bot idiopathique',
        type: 'commune',
        description: 'Ponseti.',
        terrain: '- Nouveau-né, garçon',
        fonctionnels: '',
        generaux: '',
        physiques: '- Équin, varus, adduction non réductibles',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Pied bot neurologique ou syndromique',
        type: 'etiologique',
        description: 'Plus résistant.',
        terrain: '- Spina bifida, arthrogrypose',
        fonctionnels: '',
        generaux: '',
        physiques: '- Malformations associées',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dysplasie de la hanche
  {
    ...ORTHO,
    slug: 'dysplasie-de-la-hanche',
    nom: 'Dysplasie de la hanche',
    resume:
      'Anomalie du développement de la hanche (cotyle peu profond, hanche instable ou luxée), à dépister à la naissance et lors des visites du nourrisson (manœuvres de Barlow et d’Ortolani, limitation de l’abduction, asymétrie des plis) chez les nourrissons à risque (siège, antécédents familiaux, fille, premier-né) ; échographie avant 4–6 mois, radiographie ensuite ; harnais de Pavlik chez le nourrisson, réduction et plâtre plus tard, chirurgie après 18 mois ; portage traditionnel sur le dos, jambes écartées, favorable ; non traitée : boiterie, arthrose précoce.',
    definition:
      'Anomalie du développement de l’articulation coxo-fémorale allant de l’insuffisance du cotyle à l’instabilité et à la luxation complète de la tête fémorale.',
    physiopathologie:
      '## Facteurs de risque\n- **Présentation du siège**, **antécédents familiaux**, **sexe féminin**, premier-né, oligoamnios, autres anomalies posturales (torticolis, pied)\n- **Emmaillotage** jambes serrées en extension (défavorable) ; portage jambes écartées (favorable)\n\n## Évolution\n- La hanche instable se stabilise souvent en quelques semaines ; sinon luxation, cotyle déformé, boiterie, arthrose',
    diagnostic:
      '## Nouveau-né et nourrisson\n- **Manœuvres d’Ortolani** (ressaut de réduction) et **de Barlow** (instabilité), jusqu’à 3 mois\n- **Limitation de l’abduction**, asymétrie des plis, raccourcissement (signe de Galeazzi)\n\n## Enfant qui marche\n- **Boiterie** indolore, démarche dandinante (bilatérale), hyperlordose, inégalité de longueur\n\n## Examens\n- **Échographie** des hanches (méthode de Graf) avant 4–6 mois\n- **Radiographie** du bassin après 4–6 mois',
    examens: [
      ['confirmation', 'echographie-parties-molles', 'Échographie des hanches (< 6 mois).'],
      ['confirmation', 'radiographie-osseuse', 'Bassin (> 4–6 mois).'],
    ],
    scores: [],
    differentiels: [
      ['boiterie-enfant', 'Autres causes de boiterie.'],
      ['paralysie-cerebrale', 'Luxation neurologique.'],
      ['arthrite-septique', 'Hanche fébrile du nourrisson.'],
      ['Coxa vara congénitale', 'Radiographie.'],
    ],
    etiologies: '## Facteurs\n- Siège, antécédents familiaux, fille, emmaillotage serré',
    principes: [
      [
        'Nourrisson < 6 mois',
        'Harnais.',
        '- Hanche instable à la naissance : contrôle à 2–6 semaines (stabilisation fréquente)\n- **Harnais de Pavlik** (flexion-abduction) 6–12 semaines avec contrôles échographiques\n- Éviter l’emmaillotage jambes serrées ; **portage sur le dos** jambes écartées',
      ],
      [
        '6–18 mois',
        'Réduction.',
        '- **Réduction orthopédique** sous anesthésie (± ténotomie des adducteurs) et **plâtre pelvi-pédieux** en position humaine',
      ],
      [
        'Après 18 mois',
        'Chirurgie.',
        '- Réduction chirurgicale, ostéotomies du bassin ou du fémur (centre spécialisé)\n- Suivi radiologique jusqu’à la fin de la croissance',
      ],
    ],
    molecules: [['paracetamol', 'adjuvant', 'Douleur postopératoire']],
    complications: [
      {
        nom: 'Ostéonécrose de la tête fémorale',
        fiche: 'osteonecrose-tete-femorale',
        description: 'Traitement forcé.',
        traitement: '- Surveillance, chirurgie',
        clinique: '- Boiterie',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Arthrose précoce',
        description: 'Dysplasie résiduelle.',
        traitement: '- Ostéotomie, prothèse',
        clinique: '- Douleur de hanche chez l’adulte jeune',
        paraclinique: '',
      },
      {
        nom: 'Boiterie et inégalité de longueur',
        fiche: 'boiterie-enfant',
        description: 'Diagnostic tardif.',
        traitement: '- Chirurgie',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent si traitée avant 6 mois ; résultats moins bons et chirurgie plus lourde après 18 mois',
    urgences: [],
    symptomes: [
      ['Boiterie', 'frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Déformation d’un membre', 'occasionnel'],
    ],
    sources: ['AAOS — recommandations de pratique clinique', 'Nelson Textbook of Pediatrics'],
    niveaux: {
      cs: [
        '- Examen des hanches du nourrisson, conseils de portage, orientation',
        '- Hanche instable, boiterie',
      ],
      hgr: ['- Échographie, harnais de Pavlik', ''],
      tert: ['- Réduction, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hanche instable du nouveau-né',
        type: 'commune',
        description: 'Dépistage.',
        terrain: '- Siège, fille, antécédents',
        fonctionnels: '',
        generaux: '',
        physiques: '- Ortolani ou Barlow positif',
        paraclinique: '- Échographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Luxation diagnostiquée à la marche',
        type: 'gravite',
        description: 'Diagnostic tardif.',
        terrain: '- Enfant qui marche',
        fonctionnels: '- Boiterie indolore',
        generaux: '',
        physiques: '- Inégalité de longueur',
        paraclinique: '- Radiographie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Genu varum / valgum
  {
    ...ORTHO,
    slug: 'genu-varum-genu-valgum',
    nom: 'Genu varum et genu valgum',
    resume:
      'Déformations frontales des membres inférieurs : physiologiques chez l’enfant (genu varum jusqu’à 2 ans, genu valgum de 3 à 7 ans, correction spontanée) ou pathologiques (rachitisme carentiel très fréquent en Afrique, maladie de Blount chez l’enfant marchant tôt et en surpoids, séquelles de fracture ou d’infection, dysplasies, fluorose, drépanocytose) ; signes d’alerte : asymétrie, aggravation, petite taille, douleur, persistance après 3 ans (varum) ou 8 ans (valgum) ; radiographie, bilan phosphocalcique ; vitamine D et calcium pour le rachitisme, attelles, épiphysiodèse ou ostéotomie.',
    definition:
      'Genu varum : déviation des genoux en dehors (jambes arquées, écart entre les genoux) ; genu valgum : déviation en dedans (genoux qui se touchent, écart entre les chevilles).',
    physiopathologie:
      '## Physiologique\n- Varum du nourrisson → redressement vers 2 ans → valgum maximal vers 3–4 ans → alignement adulte vers 7–8 ans\n\n## Pathologique\n- **Rachitisme carentiel** (vitamine D, calcium), rachitisme vitamino-résistant (hypophosphatémique)\n- **Maladie de Blount** (tibia vara : atteinte du plateau tibial interne)\n- Séquelles de **fracture** ou d’**ostéomyélite** du cartilage de croissance, dysplasies osseuses, fluorose, obésité',
    diagnostic:
      '## Évaluation\n- Mesure de l’écart inter-condylien (varum) ou inter-malléolaire (valgum), symétrie, évolution\n- Taille, poids, signes de rachitisme (bourrelets des poignets, chapelet costal, retard de dentition)\n- **Signes d’alerte** : asymétrie, aggravation, petite taille, douleur, âge inhabituel\n\n## Examens\n- **Radiographie** des membres inférieurs en charge (axe mécanique, métaphyses)\n- **Bilan phosphocalcique** : calcémie, phosphorémie, **phosphatases alcalines**, vitamine D si disponible',
    examens: [
      ['premiere_intention', 'radiographie-osseuse', 'Membres inférieurs en charge.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Rachitisme.'],
      ['premiere_intention', 'phosphoremie', 'Rachitisme.'],
      ['premiere_intention', 'phosphatases-alcalines', 'Rachitisme actif.'],
      ['premiere_intention', 'anthropometrie', 'Taille, poids.'],
    ],
    scores: [],
    differentiels: [
      ['rachitisme-carentiel', 'Cause la plus fréquente.'],
      ['Maladie de Blount', 'Tibia vara, enfant en surpoids marchant tôt.'],
      ['petite-taille-enfant', 'Dysplasie osseuse.'],
      ['osteomyelite-chronique', 'Séquelle infectieuse.'],
    ],
    etiologies:
      '## Causes\n- Physiologiques, rachitisme, Blount, séquelles traumatiques ou infectieuses, dysplasies',
    principes: [
      [
        'Formes physiologiques',
        'Rassurer.',
        '- Surveillance tous les 6 mois ; pas d’attelle ni de chaussures orthopédiques',
      ],
      [
        'Rachitisme',
        'Traiter la carence.',
        '- **Vitamine D** (cholécalciférol, dose de traitement selon le protocole) + **calcium** 500–1 000 mg/j, exposition solaire, alimentation\n- Correction spontanée fréquente des déformations après traitement chez le jeune enfant',
      ],
      [
        'Déformations persistantes',
        'Chirurgie.',
        '- Blount : attelles chez le jeune enfant, ostéotomie tibiale ensuite\n- **Épiphysiodèse** temporaire (plaques en 8) chez l’enfant en croissance, **ostéotomie** de correction',
      ],
    ],
    molecules: [
      ['cholecalciferol-vitamine-d3', 'premiere', 'Rachitisme'],
      ['calcium', 'premiere', 'Rachitisme'],
      ['ergocalciferol-vitamine-d2', 'alternative', 'Rachitisme'],
    ],
    complications: [
      {
        nom: 'Arthrose précoce du genou',
        description: 'Déformation persistante.',
        traitement: '- Ostéotomie',
        clinique: '- Douleur',
        paraclinique: '',
      },
      {
        nom: 'Troubles de la marche',
        description: 'Déformation sévère.',
        traitement: '- Correction',
        clinique: '- Boiterie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Correction spontanée des formes physiologiques ; bonne réponse du rachitisme au traitement précoce',
    urgences: [],
    symptomes: [
      ['Déformation d’un membre', 'tres_frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Retard de croissance', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'AAOS — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Rassurer, vitamine D et calcium si rachitisme', '- Signes d’alerte'],
      hgr: ['- Radiographie, bilan phosphocalcique', ''],
      tert: ['- Épiphysiodèse, ostéotomie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Genu varum physiologique',
        type: 'commune',
        description: 'Avant 2 ans.',
        terrain: '- Nourrisson',
        fonctionnels: '',
        generaux: '',
        physiques: '- Varum symétrique',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Déformation rachitique',
        type: 'etiologique',
        description: 'Carence.',
        terrain: '- Jeune enfant',
        fonctionnels: '',
        generaux: '- Retard de croissance',
        physiques: '- Bourrelets, chapelet costal',
        paraclinique: '- PAL élevées',
        etiologies: '- Vitamine D, calcium',
        syndromes: [],
      },
      {
        nom: 'Maladie de Blount',
        type: 'gravite',
        description: 'Évolutive.',
        terrain: '- Enfant en surpoids',
        fonctionnels: '',
        generaux: '',
        physiques: '- Varum asymétrique progressif',
        paraclinique: '- Plateau tibial interne',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Pseudarthroses
  {
    ...ORTHO,
    slug: 'pseudarthroses-cals-vicieux',
    nom: 'Pseudarthroses et cals vicieux',
    resume:
      'Séquelles fréquentes des fractures en RDC (traitements traditionnels par rebouteurs, immobilisation insuffisante, fractures ouvertes infectées, retard de prise en charge) : pseudarthrose = absence de consolidation après 6 mois (mobilité anormale, douleur), aseptique (hypertrophique par instabilité, atrophique par défaut biologique) ou septique ; cal vicieux = consolidation en mauvaise position (angulation, rotation, raccourcissement) ; radiographies, bilan infectieux ; traitement : stabilisation (enclouage, plaque, fixateur), greffe osseuse, traitement de l’infection, ostéotomie de correction ; prévention : prise en charge correcte des fractures.',
    definition:
      'Pseudarthrose : absence de consolidation d’une fracture au-delà du délai habituel (6 mois) ; cal vicieux : consolidation en position anormale entraînant une gêne fonctionnelle ou esthétique.',
    physiopathologie:
      '## Pseudarthrose\n- **Hypertrophique** : bonne vascularisation mais instabilité (traitement insuffisant)\n- **Atrophique** : défaut biologique (dévascularisation, perte osseuse, tabac, malnutrition, diabète)\n- **Septique** : fracture ouverte infectée, ostéite\n\n## Cal vicieux\n- Réduction imparfaite ou déplacement secondaire ; **traitements traditionnels** (massages, attelles serrées) fréquents',
    diagnostic:
      '## Clinique\n- **Douleur** persistante, **mobilité anormale** au foyer, impossibilité d’appui\n- Cal vicieux : angulation, rotation, **raccourcissement**, boiterie, arthrose secondaire\n- Signes d’infection : fistule, écoulement, rougeur\n\n## Examens\n- **Radiographies** (absence de pont osseux, extrémités arrondies ou condensées, matériel)\n- Bilan infectieux : NFS, CRP, VS, prélèvements\n- Scanner si doute ; bilan nutritionnel, glycémie, test VIH',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Absence de consolidation, angulation.'],
      ['premiere_intention', 'crp', 'Infection.'],
      ['premiere_intention', 'vitesse-sedimentation', 'Infection.'],
      ['premiere_intention', 'nfs', 'Infection, anémie.'],
      ['etiologique', 'prelevement-de-pus', 'Pseudarthrose septique.'],
      ['etiologique', 'glycemie', 'Diabète.'],
    ],
    scores: [],
    differentiels: [
      ['osteomyelite-chronique', 'Ostéite sans fracture.'],
      ['Retard de consolidation', 'Moins de 6 mois.'],
      ['tumeurs-osseuses', 'Fracture pathologique.'],
    ],
    etiologies:
      '## Causes\n- Immobilisation insuffisante, fractures ouvertes, infection, traitements traditionnels, malnutrition, tabac',
    principes: [
      [
        'Pseudarthrose aseptique',
        'Stabiliser et stimuler.',
        '- **Hypertrophique** : stabilisation rigide (enclouage, plaque)\n- **Atrophique** : stabilisation + **greffe osseuse** autologue (crête iliaque), avivement\n- Correction des facteurs : nutrition, arrêt du tabac, diabète',
      ],
      [
        'Pseudarthrose septique',
        'Traiter l’infection.',
        '- **Débridement** de l’os infecté, ablation du matériel, **fixateur externe**, antibiotiques adaptés (6 semaines), puis reconstruction (greffe, technique de Masquelet, transport osseux)',
      ],
      [
        'Cal vicieux',
        'Corriger si gênant.',
        '- **Ostéotomie** de correction et ostéosynthèse en cas de gêne fonctionnelle, de raccourcissement ou de risque d’arthrose',
      ],
      [
        'Prévention',
        'Bien traiter les fractures.',
        '- Prise en charge correcte des fractures, information sur les risques des traitements traditionnels',
      ],
    ],
    molecules: [
      ['cefazoline', 'premiere', 'Antibioprophylaxie'],
      ['cloxacilline', 'alternative', 'Pseudarthrose septique (staphylocoque)'],
      ['paracetamol', 'adjuvant', 'Douleur'],
      ['calcium', 'adjuvant', 'Nutrition osseuse'],
      ['cholecalciferol-vitamine-d3', 'adjuvant', 'Carence en vitamine D'],
    ],
    complications: [
      {
        nom: 'Ostéite chronique',
        fiche: 'osteomyelite-chronique',
        description: 'Pseudarthrose septique.',
        traitement: '- Débridement, antibiotiques',
        clinique: '- Fistule',
        paraclinique: '',
      },
      {
        nom: 'Arthrose',
        description: 'Cal vicieux.',
        traitement: '- Ostéotomie, prothèse',
        clinique: '- Douleur articulaire',
        paraclinique: '',
      },
      {
        nom: 'Amputation',
        fiche: 'amputations-traumatiques',
        description: 'Échec des traitements.',
        traitement: '- Appareillage',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Consolidation obtenue dans la majorité après traitement adapté ; pseudarthroses septiques longues à traiter',
    urgences: [],
    symptomes: [
      ['Douleurs osseuses', 'tres_frequent'],
      ['Déformation d’un membre', 'frequent'],
      ['Boiterie', 'frequent'],
      ['Impotence fonctionnelle', 'frequent'],
    ],
    sources: ['AAOS — recommandations de pratique clinique', 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: ['- Repérer, orientation', ''],
      hgr: ['- Radiographie, fixateur, ostéosynthèse', ''],
      tert: ['- Greffe osseuse, reconstruction', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Pseudarthrose aseptique',
        type: 'commune',
        description: 'Instabilité.',
        terrain: '- Fracture mal immobilisée',
        fonctionnels: '- Douleur, mobilité anormale',
        generaux: '',
        physiques: '',
        paraclinique: '- Absence de pont osseux',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Pseudarthrose septique',
        type: 'gravite',
        description: 'Infection.',
        terrain: '- Fracture ouverte',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Fistule',
        paraclinique: '- Séquestre',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Cal vicieux',
        type: 'evolutive',
        description: 'Mauvaise position.',
        terrain: '- Traitement traditionnel',
        fonctionnels: '- Boiterie',
        generaux: '',
        physiques: '- Angulation, raccourcissement',
        paraclinique: '- Consolidation en mauvaise position',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Tumeurs osseuses
  {
    ...ORTHO,
    slug: 'tumeurs-osseuses',
    nom: 'Tumeurs osseuses',
    resume:
      'Tumeurs primitives bénignes (ostéochondrome, kystes osseux, tumeur à cellules géantes) ou malignes (ostéosarcome et sarcome d’Ewing de l’enfant et de l’adolescent, chondrosarcome de l’adulte) et, surtout chez l’adulte, métastases osseuses (sein, prostate, poumon, rein, thyroïde) et myélome ; douleur osseuse persistante et nocturne, tuméfaction, fracture pathologique ; signes d’alerte chez le jeune : douleur nocturne + masse ; radiographie, puis IRM, scanner thoracique, biopsie dans un centre spécialisé (par l’équipe qui opérera) ; chimiothérapie et chirurgie des sarcomes ; radiothérapie et bisphosphonates pour les métastases.',
    definition:
      'Proliférations tumorales primitives (bénignes ou malignes) ou secondaires (métastases) du tissu osseux.',
    physiopathologie:
      '## Tumeurs primitives\n- **Bénignes** : ostéochondrome (exostose), kyste osseux essentiel et anévrismal, ostéome ostéoïde (douleur nocturne calmée par l’aspirine), tumeur à cellules géantes\n- **Malignes** : **ostéosarcome** (métaphyse du genou, 10–25 ans), **sarcome d’Ewing** (diaphyse, enfant, fièvre), chondrosarcome (adulte)\n\n## Tumeurs secondaires\n- **Métastases** (sein, **prostate**, poumon, rein, thyroïde), **myélome**, lymphome de Burkitt (mâchoire), neuroblastome (enfant)',
    diagnostic:
      '## Clinique\n- **Douleur osseuse** persistante, **nocturne**, non mécanique\n- **Tuméfaction** dure, fixée, augmentant de volume\n- **Fracture pathologique** (traumatisme minime)\n- Fièvre, altération de l’état général (Ewing, métastases), compression médullaire\n\n## Examens\n- **Radiographie** : lésion lytique ou condensante, limites (bénigne bien limitée ; maligne mal limitée, réaction périostée en « feu d’herbe », triangle de Codman, « bulbe d’oignon »)\n- **IRM**, **scanner thoracique** (métastases pulmonaires), scintigraphie\n- **Biopsie** en centre spécialisé (par le chirurgien qui opérera)\n- **Phosphatases alcalines**, LDH, calcémie, NFS, électrophorèse des protéines (myélome), PSA (homme)',
    examens: [
      ['premiere_intention', 'radiographie-osseuse', 'Aspect de la lésion.'],
      ['confirmation', 'biopsie-histologie', 'Diagnostic (centre spécialisé).'],
      ['deuxieme_intention', 'irm-osteo-articulaire', 'Extension locale.'],
      ['gravite', 'scanner-thoracique', 'Métastases pulmonaires.'],
      ['premiere_intention', 'phosphatases-alcalines', 'Ostéosarcome, métastases.'],
      ['premiere_intention', 'ldh', 'Pronostic.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypercalcémie.'],
      ['etiologique', 'electrophorese-proteines', 'Myélome.'],
      ['etiologique', 'psa', 'Métastases prostatiques.'],
    ],
    scores: [],
    differentiels: [
      ['osteomyelite-chronique', 'Ostéite (aspect proche de l’Ewing).'],
      ['osteoarthrite-tuberculeuse', 'Lésion lytique tuberculeuse.'],
      ['myelome-multiple', 'Lésions lytiques multiples de l’adulte.'],
      ['lymphome-de-burkitt', 'Tumeur de la mâchoire de l’enfant.'],
      ['crise-vaso-occlusive-enfant-drepanocytaire', 'Infarctus osseux.'],
    ],
    etiologies:
      '## Types\n- Primitives bénignes et malignes, métastases (sein, prostate, poumon, rein, thyroïde), myélome',
    principes: [
      [
        'Tumeurs bénignes',
        'Selon les symptômes.',
        '- Surveillance ; exérèse ou curetage-comblement si douleur, fracture, croissance',
      ],
      [
        'Sarcomes',
        'Centre spécialisé.',
        '- **Ostéosarcome** : chimiothérapie préopératoire (**méthotrexate** à haute dose, **doxorubicine**, **cisplatine**), chirurgie (conservation du membre ou amputation), chimiothérapie postopératoire\n- **Ewing** : chimiothérapie (vincristine, doxorubicine, cyclophosphamide, étoposide), chirurgie et/ou radiothérapie\n- Pas de biopsie ni de chirurgie improvisée hors centre spécialisé',
      ],
      [
        'Métastases et myélome',
        'Contrôler la douleur, prévenir les fractures.',
        '- **Radiothérapie** antalgique, **bisphosphonates** (acide zolédronique), traitement du cancer primitif\n- Ostéosynthèse préventive ou des fractures pathologiques, décompression médullaire\n- Antalgiques (morphine), soins palliatifs',
      ],
    ],
    molecules: [
      ['methotrexate', 'premiere', 'Ostéosarcome (centre spécialisé)'],
      ['doxorubicine', 'premiere', 'Ostéosarcome, Ewing'],
      ['cisplatine', 'premiere', 'Ostéosarcome'],
      ['cyclophosphamide', 'alternative', 'Ewing'],
      ['vincristine', 'alternative', 'Ewing'],
      ['etoposide', 'alternative', 'Ewing'],
      ['acide-zoledronique', 'alternative', 'Métastases osseuses'],
      ['morphine', 'adjuvant', 'Douleurs'],
    ],
    complications: [
      {
        nom: 'Fracture pathologique',
        description: 'Os fragilisé.',
        traitement: '- Ostéosynthèse',
        clinique: '- Douleur, impotence',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Métastases pulmonaires',
        description: 'Sarcomes.',
        traitement: '- Chimiothérapie, chirurgie',
        clinique: '- Toux',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Compression médullaire',
        fiche: 'compression-medullaire',
        description: 'Métastases vertébrales.',
        traitement: '- Corticoïdes, radiothérapie, chirurgie',
        clinique: '- Paraplégie',
        paraclinique: '- IRM',
      },
      {
        nom: 'Hypercalcémie',
        description: 'Métastases, myélome.',
        traitement: '- Hydratation, bisphosphonates',
        clinique: '- Confusion, vomissements',
        paraclinique: '- Calcémie',
      },
    ],
    evolution:
      '## Pronostic\n- Ostéosarcome et Ewing localisés : survie 60–70 % en centre spécialisé ; métastases : pronostic du cancer primitif',
    urgences: [],
    symptomes: [
      ['Douleurs osseuses', 'tres_frequent'],
      ['Tuméfaction des parties molles', 'frequent'],
      ['Impotence fonctionnelle', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'NCCN — recommandations de pratique clinique',
      'ESMO — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Douleur osseuse nocturne persistante, masse : référence', ''],
      hgr: ['- Radiographie, bilan', ''],
      tert: ['- IRM, biopsie, chimiothérapie, chirurgie, radiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ostéosarcome',
        type: 'commune',
        description: 'Adolescent.',
        terrain: '- 10–25 ans',
        fonctionnels: '- Douleur nocturne du genou',
        generaux: '',
        physiques: '- Masse métaphysaire',
        paraclinique: '- Feu d’herbe, PAL élevées',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Sarcome d’Ewing',
        type: 'terrain',
        description: 'Enfant.',
        terrain: '- 5–20 ans',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre',
        physiques: '- Masse diaphysaire',
        paraclinique: '- Bulbe d’oignon',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Métastases osseuses',
        type: 'gravite',
        description: 'Adulte.',
        terrain: '- Cancer connu ou non',
        fonctionnels: '- Douleurs',
        generaux: '- Altération de l’état général',
        physiques: '- Fracture pathologique',
        paraclinique: '- Lésions multiples',
        etiologies: '- Sein, prostate, poumon',
        syndromes: [],
      },
    ],
  },
];
