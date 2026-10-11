'use strict';

/**
 * Lot 24 (orthopédie) — ostéomyélite aiguë, ostéomyélite chronique, arthrite septique,
 * ostéonécrose de la tête fémorale (drépanocytose). Rédigé par IA (IDSA, ESPID, AAOS, MSF) :
 * à valider.
 */

const ORTHO = { departement: 'chirurgie', specialite: 'Orthopédie' };

module.exports = [
  // =================================================================== Ostéomyélite aiguë
  {
    ...ORTHO,
    slug: 'osteomyelite-aigue',
    nom: 'Ostéomyélite aiguë',
    resume:
      'Infection osseuse hématogène de l’enfant (métaphyses des os longs) à S. aureus, ou Salmonella chez le drépanocytaire : fièvre, douleur osseuse, refus d’utiliser le membre ; hémocultures, échographie ; antibiotiques IV précoces (cloxacilline, ceftriaxone si drépanocytose), drainage d’un abcès sous-périosté.',
    definition:
      'Infection aiguë de l’os et de la moelle osseuse, le plus souvent par voie hématogène chez l’enfant, touchant les métaphyses des os longs (près du genou, loin du coude).',
    physiopathologie:
      '## Mécanismes\n- Bactériémie, nidation dans les capillaires métaphysaires\n- Abcès sous-périosté, nécrose osseuse (séquestre), extension articulaire\n- Germes : *S. aureus* (majorité), *Salmonella* (drépanocytose), streptocoque, *Kingella* (jeune enfant)',
    diagnostic:
      '## Clinique\n- Fièvre, **douleur osseuse** intense, boiterie, refus d’utiliser le membre (pseudo-paralysie)\n- Douleur métaphysaire à la palpation, puis tuméfaction, rougeur\n\n## Examens\n- NFS, CRP, **hémocultures**\n- Radiographie (normale les 10 premiers jours ; élimine un diagnostic différentiel)\n- **Échographie** : abcès sous-périosté, épanchement articulaire\n- Ponction de l’abcès (culture)',
    examens: [
      ['premiere_intention', 'hemocultures', 'Germe.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Diagnostic et suivi.'],
      [
        'premiere_intention',
        'radiographie-osseuse',
        'Normale au début, appositions périostées après 10 jours.',
      ],
      ['premiere_intention', 'echographie-parties-molles', 'Abcès sous-périosté.'],
      ['deuxieme_intention', 'irm-osteo-articulaire', 'Diagnostic précoce si disponible.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['crise-vaso-occlusive-enfant-drepanocytaire', 'Douleurs multiples, fièvre modérée, CRP moins élevée.'],
      ['arthrite-septique', 'Atteinte articulaire.'],
      ['pyomyosite-tropicale', 'Abcès musculaire.'],
      ['Tumeur osseuse (sarcome d’Ewing)', 'Évolution lente, radiographie.'],
    ],
    etiologies:
      '## Facteurs\n- Enfant, drépanocytose, malnutrition, VIH, infections cutanées, traumatismes minimes',
    principes: [
      [
        'Antibiotiques précoces',
        'Éviter le passage à la chronicité.',
        '- Après hémocultures : **cloxacilline** 50 mg/kg toutes les 6 h IV (ou céfazoline)\n- **Drépanocytaire** : **ceftriaxone** (Salmonella) + cloxacilline\n- Allergie, SARM : **clindamycine**\n- Relais oral dès l’apyrexie et la baisse de la CRP (3–5 jours), durée totale 3 à 4 semaines',
      ],
      [
        'Chirurgie',
        'Drainer.',
        '- Drainage d’un abcès sous-périosté, trépanation si absence d’amélioration à 48–72 h',
      ],
      ['Soutien', 'Favoriser la guérison.', '- Antalgiques, immobilisation temporaire, nutrition'],
    ],
    molecules: [
      ['cloxacilline', 'premiere', 'Staphylocoque'],
      ['flucloxacilline', 'alternative', 'Staphylocoque'],
      ['cefazoline', 'alternative', 'Staphylocoque'],
      ['ceftriaxone', 'premiere', 'Drépanocytose (Salmonella)'],
      ['clindamycine', 'alternative', 'Allergie, SARM'],
      ['ciprofloxacine', 'alternative', 'Salmonella (adolescent, relais)'],
      ['paracetamol', 'premiere', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Ostéomyélite chronique',
        fiche: 'osteomyelite-chronique',
        description: 'Traitement tardif.',
        traitement: '- Séquestrectomie',
        clinique: '- Fistule',
        paraclinique: '- Séquestre',
      },
      {
        nom: 'Arthrite septique',
        fiche: 'arthrite-septique',
        description: 'Extension articulaire.',
        traitement: '- Lavage articulaire',
        clinique: '- Articulation gonflée',
        paraclinique: '- Ponction',
      },
      {
        nom: 'Fracture pathologique, troubles de croissance',
        description: 'Atteinte du cartilage de croissance.',
        traitement: '- Orthopédie',
        clinique: '- Inégalité de longueur',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-enfant',
        description: 'Bactériémie.',
        traitement: '- Antibiotiques IV',
        clinique: '- Choc',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison sans séquelle si traitée dans les premiers jours ; chronicité fréquente si retard',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Douleurs osseuses', 'tres_frequent'],
      ['Impotence fonctionnelle', 'frequent'],
      ['Tuméfaction des parties molles', 'frequent'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'ESPID — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Suspicion, première dose d’antibiotique, transfert', '- Toute suspicion'],
      hgr: ['- Antibiotiques IV, échographie, drainage', ''],
      tert: ['- Orthopédie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ostéomyélite aiguë de l’enfant',
        type: 'commune',
        description: 'Métaphyse fémorale ou tibiale.',
        terrain: '- Enfant de 2 à 12 ans',
        fonctionnels: '- Douleur, boiterie',
        generaux: '- Fièvre',
        physiques: '- Douleur métaphysaire',
        paraclinique: '- CRP élevée, hémocultures positives',
        etiologies: '- S. aureus',
        syndromes: ['syndrome-infectieux'],
        examens: [['hemocultures', 'Germe']],
      },
      {
        nom: 'Ostéomyélite du drépanocytaire',
        type: 'terrain',
        description: 'Salmonella, multifocale.',
        terrain: '- Drépanocytose',
        fonctionnels: '- Douleur persistante',
        generaux: '- Fièvre prolongée',
        physiques: '- Tuméfaction',
        paraclinique: '- Salmonella',
        etiologies: '- Salmonella',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Ostéomyélite chronique
  {
    ...ORTHO,
    slug: 'osteomyelite-chronique',
    nom: 'Ostéomyélite chronique',
    resume:
      'Infection osseuse persistante avec séquestre et fistule, séquelle d’une ostéomyélite aiguë mal traitée ou d’une fracture ouverte : radiographie (séquestre, involucrum) ; séquestrectomie après formation de l’involucrum, antibiotiques adaptés, soins de la fistule.',
    definition:
      'Infection osseuse évoluant depuis plusieurs semaines à plusieurs années, caractérisée par de l’os mort infecté (séquestre), un néo-os périosté (involucrum) et des fistules.',
    physiopathologie:
      '## Mécanismes\n- Os nécrosé avasculaire : les antibiotiques n’y pénètrent pas\n- Biofilm bactérien (S. aureus)\n- Poussées, fistulisation, fractures pathologiques',
    diagnostic:
      '## Clinique\n- **Fistule** chronique avec écoulement purulent, parfois issue de fragments osseux\n- Douleur, tuméfaction, poussées fébriles\n- Déformation, raccourcissement\n\n## Imagerie\n- Radiographie : **séquestre** (os dense isolé), **involucrum**, cavités\n- Prélèvements peropératoires (culture, histologie : éliminer tuberculose et cancer)',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Séquestre, involucrum.'],
      ['premiere_intention', 'nfs', 'Anémie inflammatoire.'],
      ['premiere_intention', 'crp', 'Poussées.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Tuberculose, carcinome sur fistule.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['etiologique', 'tdr-vih', 'Terrain.'],
    ],
    scores: [],
    differentiels: [
      ['mal-de-pott', 'Tuberculose ostéo-articulaire.'],
      ['ulcere-de-buruli', 'Ostéomyélite associée à l’ulcère.'],
      ['Mycétome', 'Grains dans l’écoulement, pied.'],
      ['Tumeur osseuse', 'Biopsie.'],
    ],
    etiologies:
      '## Causes\n- Ostéomyélite aiguë non ou mal traitée, fractures ouvertes, chirurgie, ulcère de Buruli\n- Drépanocytose, malnutrition',
    principes: [
      [
        'Chirurgie',
        'Retirer l’os mort.',
        '- **Séquestrectomie** une fois l’involucrum suffisant (sinon risque de fracture)\n- Curetage des cavités, excision des fistules, immobilisation\n- Comblement, couverture des parties molles',
      ],
      [
        'Antibiotiques',
        'Traiter l’infection résiduelle.',
        '- Adaptés aux prélèvements peropératoires (**cloxacilline**, **clindamycine**, ciprofloxacine + rifampicine selon le germe), 6 semaines ou plus\n- Les antibiotiques seuls ne guérissent pas',
      ],
      [
        'Soutien',
        'Préserver la fonction.',
        '- Soins de la fistule, nutrition, traitement de l’anémie, kinésithérapie',
      ],
    ],
    molecules: [
      ['cloxacilline', 'premiere', 'Staphylocoque'],
      ['clindamycine', 'alternative', 'Bonne diffusion osseuse'],
      ['ciprofloxacine', 'alternative', 'Gram négatifs'],
      ['rifampicine', 'adjuvant', 'Association anti-staphylococcique (biofilm)'],
      ['paracetamol', 'premiere', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Fracture pathologique',
        description: 'Os fragilisé.',
        traitement: '- Immobilisation, fixation externe',
        clinique: '- Douleur, déformation',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Carcinome épidermoïde sur fistule (ulcère de Marjolin)',
        description: 'Fistule ancienne.',
        traitement: '- Chirurgie, amputation',
        clinique: '- Bourgeonnement',
        paraclinique: '- Biopsie',
      },
      {
        nom: 'Amylose, anémie',
        description: 'Inflammation chronique.',
        traitement: '- Traitement de l’infection',
        clinique: '- Œdèmes',
        paraclinique: '- Protéinurie',
      },
    ],
    evolution: '## Pronostic\n- Guérison possible après chirurgie bien conduite ; récidives fréquentes',
    urgences: [],
    symptomes: [
      ['Douleurs osseuses', 'frequent'],
      ['Ulcère cutané', 'frequent'],
      ['Déformation d’un membre', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Soins de fistule, orientation', '- Toute fistule osseuse'],
      hgr: ['- Radiographie, séquestrectomie, antibiotiques', ''],
      tert: ['- Orthopédie, chirurgie reconstructrice', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ostéomyélite chronique fistulisée',
        type: 'commune',
        description: 'Fistule et séquestre.',
        terrain: '- Enfant ou adulte jeune',
        fonctionnels: '- Écoulement chronique',
        generaux: '',
        physiques: '- Fistule, membre épaissi',
        paraclinique: '- Séquestre',
        etiologies: '- S. aureus',
        syndromes: [],
        examens: [['radiographie-osseuse', 'Séquestre']],
      },
    ],
  },

  // =================================================================== Arthrite septique
  {
    ...ORTHO,
    slug: 'arthrite-septique',
    nom: 'Arthrite septique',
    resume:
      'Infection articulaire (genou, hanche) : articulation chaude, gonflée, très douloureuse, mobilisation impossible, fièvre ; ponction articulaire avant antibiotiques ; lavage articulaire et antibiotiques IV (cloxacilline, ceftriaxone si gonocoque ou drépanocytose) ; hanche de l’enfant = urgence.',
    definition:
      'Infection bactérienne d’une articulation, le plus souvent par voie hématogène, menaçant la fonction articulaire en quelques jours.',
    physiopathologie:
      '## Mécanismes\n- Bactériémie, plaie ou injection intra-articulaire, contiguïté (ostéomyélite)\n- Destruction du cartilage par les enzymes bactériennes et leucocytaires en quelques jours\n- Germes : S. aureus, streptocoques, gonocoque (adulte jeune), Salmonella (drépanocytose), Kingella (jeune enfant)',
    diagnostic:
      '## Clinique\n- Monoarthrite aiguë : douleur intense, gonflement, chaleur, **impossibilité de mobiliser**\n- Fièvre\n- Hanche (enfant) : boiterie, hanche en flexion-rotation externe, douleur à la mobilisation\n- Gonococcie : polyarthralgies, ténosynovites, pustules cutanées\n\n## Examens\n- **Ponction articulaire** (avant antibiotique) : liquide trouble, > 50 000 leucocytes/mm³, Gram, culture, cristaux\n- Hémocultures, NFS, CRP\n- Échographie (épanchement de hanche)',
    examens: [
      ['confirmation', 'ponction-articulaire', 'Liquide purulent, Gram, culture, cristaux.'],
      ['premiere_intention', 'hemocultures', 'Germe.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Suivi.'],
      ['premiere_intention', 'echographie-parties-molles', 'Épanchement de hanche.'],
      ['premiere_intention', 'radiographie-osseuse', 'Ostéomyélite associée.'],
      ['etiologique', 'prelevement-vaginal', 'Gonocoque (adulte jeune).'],
    ],
    scores: [],
    differentiels: [
      ['goutte', 'Cristaux d’urate, adulte.'],
      ['rhumatisme-articulaire-aigu-enfant', 'Polyarthrite migratrice.'],
      ['Synovite transitoire de hanche', 'Enfant, peu ou pas de fièvre, CRP normale.'],
      ['crise-vaso-occlusive-enfant-drepanocytaire', 'Crise douloureuse.'],
    ],
    etiologies:
      '## Facteurs\n- Enfant, drépanocytose, VIH, diabète, injections intra-articulaires, polyarthrite rhumatoïde, IST (gonocoque)',
    principes: [
      [
        'Évacuation',
        'Préserver le cartilage.',
        '- **Lavage articulaire** (arthrotomie ou ponctions répétées), en urgence pour la hanche de l’enfant',
      ],
      [
        'Antibiotiques',
        'Stériliser.',
        '- Après ponction et hémocultures : **cloxacilline** IV (ou céfazoline)\n- **Ceftriaxone** si gonocoque suspecté, drépanocytose ou jeune enfant\n- Relais oral après amélioration ; durée 2 à 4 semaines (enfant), 4 à 6 semaines (adulte)',
      ],
      [
        'Mesures associées',
        'Récupérer la fonction.',
        '- Antalgiques, immobilisation courte puis mobilisation précoce, kinésithérapie\n- Gonocoque : traitement du partenaire, dépistage VIH',
      ],
    ],
    molecules: [
      ['cloxacilline', 'premiere', 'Staphylocoque'],
      ['ceftriaxone', 'premiere', 'Gonocoque, drépanocytose, jeune enfant'],
      ['cefazoline', 'alternative', 'Staphylocoque'],
      ['clindamycine', 'alternative', 'Allergie, SARM'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Destruction articulaire et ankylose',
        description: 'Retard de traitement.',
        traitement: '- Prévention',
        clinique: '- Raideur',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Ostéonécrose de la tête fémorale, luxation',
        fiche: 'osteonecrose-tete-femorale',
        description: 'Hanche de l’enfant.',
        traitement: '- Orthopédie',
        clinique: '- Boiterie',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Bactériémie.',
        traitement: '- Antibiotiques IV',
        clinique: '- Choc',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si lavage et antibiotiques précoces ; séquelles fonctionnelles fréquentes si retard (surtout la hanche)',
    urgences: ['choc-septique'],
    symptomes: [
      ['Gonflement articulaire', 'tres_frequent'],
      ['Arthralgies', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Impotence fonctionnelle', 'tres_frequent'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'EULAR — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Suspicion, première dose d’antibiotique après hémoculture si possible, transfert',
        '- Toute monoarthrite fébrile',
      ],
      hgr: ['- Ponction, lavage, antibiotiques IV', ''],
      tert: ['- Arthroscopie, orthopédie', ''],
    },
    alertes: { 'choc-septique': 'Arthrite fébrile avec hypotension ou confusion' },
    formes: [
      {
        nom: 'Arthrite septique du genou',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Enfant, adulte',
        fonctionnels: '- Douleur intense',
        generaux: '- Fièvre',
        physiques: '- Genou chaud, gonflé, mobilisation impossible',
        paraclinique: '- Liquide purulent',
        etiologies: '- S. aureus',
        syndromes: ['syndrome-infectieux'],
        examens: [['ponction-articulaire', 'Diagnostic']],
      },
      {
        nom: 'Arthrite septique de hanche de l’enfant',
        type: 'gravite',
        description: 'Urgence chirurgicale.',
        terrain: '- Nourrisson, jeune enfant',
        fonctionnels: '- Refus de marcher',
        generaux: '- Fièvre',
        physiques: '- Hanche fléchie, douleur à la mobilisation',
        paraclinique: '- Épanchement à l’échographie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Ostéonécrose
  {
    ...ORTHO,
    slug: 'osteonecrose-tete-femorale',
    nom: 'Ostéonécrose de la tête fémorale (drépanocytose)',
    resume:
      'Nécrose ischémique de la tête fémorale, fréquente chez le drépanocytaire (adolescent, adulte jeune) : douleur de hanche mécanique, boiterie ; radiographie (IRM au début) ; antalgiques, décharge, kinésithérapie ; chirurgie (forage, prothèse) aux stades avancés.',
    definition:
      'Mort cellulaire de l’os de la tête fémorale par ischémie, évoluant vers l’effondrement de la tête et l’arthrose de hanche (classification de Ficat ou ARCO).',
    physiopathologie:
      '## Mécanismes\n- Occlusions vasculaires répétées (drépanocytose), corticoïdes, alcool, traumatisme (fracture du col), VIH\n- Nécrose sous-chondrale, fracture, effondrement, arthrose secondaire\n- Bilatérale dans près de la moitié des cas',
    diagnostic:
      '## Clinique\n- Douleur de l’aine ou de la hanche, mécanique, d’installation progressive ou brutale\n- **Boiterie**, limitation des rotations\n\n## Imagerie\n- Radiographie du bassin et des hanches : normale au début, puis condensation, coquille, effondrement\n- **IRM** : diagnostic aux stades précoces',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Stade radiologique.'],
      ['deuxieme_intention', 'irm-osteo-articulaire', 'Stades précoces, hanche controlatérale.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['etiologique', 'tdr-vih', 'Facteur de risque.'],
      ['premiere_intention', 'nfs', 'Hb.'],
    ],
    scores: [],
    differentiels: [
      ['arthrite-septique', 'Fièvre, douleur aiguë, ponction.'],
      ['arthrose', 'Sujet âgé, pincement.'],
      ['crise-vaso-occlusive-drepanocytaire-adulte', 'Douleur aiguë transitoire.'],
      ['mal-de-pott', 'Douleur rachidienne.'],
    ],
    etiologies:
      '## Facteurs\n- **Drépanocytose** (SS, SC), corticothérapie prolongée, alcool, VIH, fracture du col du fémur',
    principes: [
      [
        'Traitement conservateur',
        'Soulager et ralentir.',
        '- Antalgiques (**paracétamol**, AINS de courte durée)\n- Décharge (cannes), kinésithérapie, perte de poids\n- **Hydroxycarbamide** et prise en charge globale de la drépanocytose',
      ],
      [
        'Chirurgie',
        'Préserver puis remplacer.',
        '- Stades précoces : **forage-décompression** de la tête fémorale\n- Stades avancés (effondrement, arthrose) : **prothèse totale de hanche** (centres spécialisés ; risques infectieux et hémorragiques chez le drépanocytaire)',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'alternative', 'Cures courtes'],
      ['tramadol', 'alternative', 'Douleur'],
      ['hydroxycarbamide', 'adjuvant', 'Drépanocytose'],
      ['acide-folique', 'adjuvant', 'Drépanocytose'],
    ],
    complications: [
      {
        nom: 'Effondrement de la tête et arthrose',
        fiche: 'arthrose',
        description: 'Évolution naturelle.',
        traitement: '- Prothèse',
        clinique: '- Douleur, raideur',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Handicap et inégalité de longueur',
        description: 'Stades avancés.',
        traitement: '- Chirurgie, appareillage',
        clinique: '- Boiterie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Évolution vers l’effondrement dans la majorité des cas symptomatiques sans chirurgie',
    urgences: [],
    symptomes: [
      ['Douleurs osseuses', 'tres_frequent'],
      ['Impotence fonctionnelle', 'frequent'],
      ['Arthralgies', 'frequent'],
    ],
    sources: [
      'AAOS — recommandations de pratique clinique',
      'Evidence-Based Management of Sickle Cell Disease: Expert Panel Report',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Antalgiques, orientation des drépanocytaires avec douleur de hanche', '- Boiterie persistante'],
      hgr: ['- Radiographie, décharge, kinésithérapie', '- Indication chirurgicale'],
      tert: ['- Forage, prothèse de hanche', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ostéonécrose de l’adolescent drépanocytaire',
        type: 'commune',
        description: 'Douleur de hanche progressive.',
        terrain: '- Drépanocytose SS ou SC',
        fonctionnels: '- Douleur de l’aine, boiterie',
        generaux: '',
        physiques: '- Limitation des rotations',
        paraclinique: '- Condensation, coquille',
        etiologies: '- Vaso-occlusion',
        syndromes: ['syndrome-vaso-occlusif'],
        examens: [['radiographie-osseuse', 'Stade']],
      },
    ],
  },
];
