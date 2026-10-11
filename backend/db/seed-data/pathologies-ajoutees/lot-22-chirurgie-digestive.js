'use strict';

/**
 * Lot 22 (chirurgie digestive) — hernie étranglée, cholécystite aiguë et lithiase biliaire,
 * volvulus du sigmoïde, perforation d'ulcère gastroduodénal, perforation typhique de l'iléon.
 * Rédigé par IA (WSES, Tokyo Guidelines, Sabiston, MSF chirurgie) : à valider.
 */

const CHIR = { departement: 'chirurgie', specialite: 'Chirurgie digestive' };

module.exports = [
  // =================================================================== Hernie étranglée
  {
    ...CHIR,
    slug: 'hernie-etranglee',
    nom: 'Hernie étranglée',
    resume:
      'Hernie (inguinale, crurale, ombilicale) devenue douloureuse, dure et irréductible, souvent avec occlusion : urgence chirurgicale (moins de 6 heures) ; réanimation, sonde gastrique, kélotomie avec examen de l’intestin et résection si nécrose ; ne pas forcer la réduction.',
    definition:
      'Constriction du contenu herniaire (intestin, épiploon) dans l’orifice herniaire, compromettant sa vascularisation, avec risque de nécrose intestinale et de péritonite.',
    physiopathologie:
      '## Mécanismes\n- Collet étroit : compression veineuse, œdème, puis ischémie artérielle\n- Nécrose intestinale en quelques heures, perforation, péritonite, sepsis\n- Occlusion intestinale associée',
    diagnostic:
      '## Clinique\n- Hernie connue devenue **douloureuse, tendue, dure, irréductible**, non impulsive à la toux\n- Signes d’**occlusion** : vomissements, arrêt des matières et des gaz, distension\n- Signes de gravité : rougeur cutanée, fièvre, choc (nécrose)\n- Toujours examiner les orifices herniaires devant une occlusion\n\n## Examens\n- Diagnostic clinique ; ASP (niveaux hydro-aériques), échographie si doute',
    examens: [
      ['premiere_intention', 'abdomen-sans-preparation', 'Occlusion.'],
      ['deuxieme_intention', 'echographie-abdominale', 'Contenu herniaire si doute.'],
      ['pretherapeutique', 'nfs', 'Hyperleucocytose.'],
      ['pretherapeutique', 'ionogramme', 'Troubles ioniques (vomissements).'],
      ['pretherapeutique', 'creatinine', 'Déshydratation.'],
      ['pretherapeutique', 'groupage-rai', 'Résection intestinale.'],
    ],
    scores: [],
    differentiels: [
      ['Adénopathie inguinale', 'Pas d’occlusion, masse ferme mobile.'],
      ['Torsion du testicule', 'Testicule ascensionné, douloureux.'],
      ['Hydrocèle', 'Transillumination positive, indolore.'],
      ['occlusion-intestinale-aigue', 'Autres causes d’occlusion.'],
    ],
    etiologies:
      '## Facteurs\n- Hernies inguinales non opérées (très fréquentes chez l’homme), hernies crurales (femme âgée), ombilicales\n- Efforts, toux chronique, constipation, ascite',
    principes: [
      [
        'Réanimation préopératoire',
        'Préparer.',
        '- Voie veineuse, **Ringer lactate**, sonde gastrique, sonde urinaire\n- Antalgiques (**morphine**), antibioprophylaxie (**ceftriaxone** + **métronidazole**)\n- **Ne pas tenter de réduction forcée** (risque de réintégrer un intestin nécrosé)',
      ],
      [
        'Chirurgie urgente',
        'Libérer et évaluer l’intestin.',
        '- Kélotomie, évaluation de la vitalité intestinale (couleur, péristaltisme, pouls mésentérique, sérum chaud)\n- Résection-anastomose si nécrose\n- Cure de la hernie (raphie, ou prothèse si pas de contamination)',
      ],
      ['Prévention', 'Opérer à froid.', '- Cure programmée des hernies symptomatiques'],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Réanimation'],
      ['ceftriaxone', 'premiere', 'Antibioprophylaxie'],
      ['metronidazole', 'premiere', 'Antibioprophylaxie'],
      ['morphine', 'premiere', 'Douleur'],
      ['ketamine', 'adjuvant', 'Anesthésie'],
      ['bupivacaine', 'alternative', 'Rachianesthésie'],
    ],
    complications: [
      {
        nom: 'Nécrose et perforation intestinale',
        fiche: 'peritonite-aigue',
        description: 'Retard opératoire.',
        traitement: '- Résection, lavage',
        clinique: '- Fièvre, choc',
        paraclinique: '',
      },
      {
        nom: 'Occlusion',
        fiche: 'occlusion-intestinale-aigue',
        description: 'Anse étranglée.',
        traitement: '- Chirurgie',
        clinique: '- Vomissements, distension',
        paraclinique: '- ASP',
      },
      {
        nom: 'Infection de paroi et récidive',
        description: 'Contamination.',
        traitement: '- Soins, reprise',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si opéré dans les 6 heures ; mortalité élevée en cas de nécrose chez le sujet âgé',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Tuméfaction inguinale', 'tres_frequent'],
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Arrêt des matières et des gaz', 'frequent'],
      ['Distension abdominale', 'frequent'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'WSES — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Reconnaître, voie veineuse, sonde gastrique, transfert immédiat',
        '- Toute hernie douloureuse irréductible',
      ],
      hgr: ['- Chirurgie urgente', ''],
      tert: ['', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Hernie devenue dure, douloureuse et irréductible, avec vomissements',
    },
    formes: [
      {
        nom: 'Hernie inguinale étranglée',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Homme, hernie ancienne',
        fonctionnels: '- Douleur inguinale, vomissements',
        generaux: '',
        physiques: '- Masse inguinale dure, irréductible, non impulsive',
        paraclinique: '- Niveaux hydro-aériques',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
      {
        nom: 'Hernie étranglée avec nécrose',
        type: 'gravite',
        description: 'Retard.',
        terrain: '- Sujet âgé, hernie crurale',
        fonctionnels: '',
        generaux: '- Fièvre, choc',
        physiques: '- Peau rouge, crépitante',
        paraclinique: '- Hyperleucocytose',
        etiologies: '',
        syndromes: ['syndrome-de-choc', 'syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== Cholécystite
  {
    ...CHIR,
    slug: 'cholecystite-lithiase-biliaire',
    nom: 'Cholécystite aiguë et lithiase biliaire',
    resume:
      'Lithiase vésiculaire (colique hépatique) compliquée de cholécystite (douleur de l’hypochondre droit, fièvre, signe de Murphy) ou d’angiocholite (douleur, fièvre, ictère) ; échographie ; antibiotiques, cholécystectomie précoce ; angiocholite = drainage biliaire urgent.',
    definition:
      'Présence de calculs dans la vésicule biliaire (lithiase), pouvant se compliquer d’inflammation et d’infection de la vésicule (cholécystite aiguë) ou de la voie biliaire principale (angiocholite), et de pancréatite.',
    physiopathologie:
      '## Mécanismes\n- Calculs cholestéroliques (femme, obésité, grossesse) ou pigmentaires (**hémolyse chronique : drépanocytose**)\n- Obstruction du canal cystique : cholécystite\n- Calcul de la voie biliaire principale : angiocholite, pancréatite',
    diagnostic:
      '## Colique hépatique\n- Douleur épigastrique ou de l’hypochondre droit, intense, irradiant à l’épaule droite, < 6 h, sans fièvre\n\n## Cholécystite aiguë\n- Douleur persistante, **fièvre**, **signe de Murphy**, défense de l’hypochondre droit\n\n## Angiocholite (triade de Charcot)\n- Douleur, **fièvre avec frissons**, puis **ictère** ; choc et confusion (formes graves)\n\n## Examens\n- **Échographie** : calculs, paroi épaissie, voies biliaires dilatées\n- NFS, CRP, bilan hépatique, lipase',
    examens: [
      [
        'confirmation',
        'echographie-abdominale',
        'Calculs, épaississement de la paroi, dilatation des voies biliaires.',
      ],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'bilan-hepatique', 'Cholestase, cytolyse.'],
      ['gravite', 'hemocultures', 'Angiocholite.'],
      ['gravite', 'creatinine', 'Défaillance rénale.'],
      ['etiologique', 'electrophorese-hb', 'Lithiase pigmentaire du sujet jeune.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['ulcere-gastroduodenal', 'Douleur épigastrique rythmée par les repas.'],
      ['Pancréatite aiguë', 'Douleur transfixiante, lipase > 3 N.'],
      ['abces-amibien-du-foie', 'Hépatomégalie douloureuse, abcès.'],
      ['Pyélonéphrite droite', 'Signes urinaires, ECBU.'],
      ['syndrome-coronarien-aigu-sans-st', 'ECG, troponine.'],
    ],
    etiologies:
      '## Facteurs\n- Femme, obésité, grossesses multiples, âge\n- Drépanocytose (lithiase pigmentaire dès l’enfance)\n- Parasites (ascaris dans les voies biliaires)',
    principes: [
      [
        'Colique hépatique',
        'Soulager.',
        '- Antalgiques (**paracétamol**, AINS, antispasmodiques), cholécystectomie programmée',
      ],
      [
        'Cholécystite aiguë',
        'Traiter l’infection et la cause.',
        '- À jeun, perfusion, antalgiques\n- **Ceftriaxone** + **métronidazole** (ou amoxicilline-acide clavulanique)\n- **Cholécystectomie** précoce (dans les 72 h–7 jours) ; drainage percutané si état précaire',
      ],
      [
        'Angiocholite',
        'Urgence.',
        '- Antibiotiques, réanimation\n- **Drainage biliaire** urgent (CPRE, chirurgie) si grave ou absence d’amélioration',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Cholécystite, angiocholite'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['amoxicilline', 'alternative', 'Avec acide clavulanique'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['phloroglucinol', 'adjuvant', 'Antispasmodique'],
      ['morphine', 'alternative', 'Douleur intense'],
    ],
    complications: [
      {
        nom: 'Angiocholite et choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Calcul de la voie biliaire principale.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Ictère, fièvre, choc',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Péritonite biliaire',
        fiche: 'peritonite-aigue',
        description: 'Perforation de la vésicule.',
        traitement: '- Chirurgie',
        clinique: '- Défense généralisée',
        paraclinique: '',
      },
      {
        nom: 'Pancréatite aiguë biliaire',
        description: 'Migration d’un calcul.',
        traitement: '- Réanimation, cholécystectomie',
        clinique: '- Douleur transfixiante',
        paraclinique: '- Lipase',
      },
    ],
    evolution: '## Pronostic\n- Bon après cholécystectomie ; récidives fréquentes sans chirurgie',
    urgences: ['abdomen-aigu-chirurgical', 'choc-septique'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Frissons', 'occasionnel'],
    ],
    sources: [
      'WSES — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'The management of intra-abdominal infections from a global perspective: 2017 WSES guidelines',
    ],
    niveaux: {
      cs: ['- Antalgiques, orientation pour échographie', '- Fièvre, ictère, défense'],
      hgr: ['- Échographie, antibiotiques, cholécystectomie', '- Angiocholite grave'],
      tert: ['- CPRE, cœlioscopie', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Douleur de l’hypochondre droit fébrile avec défense',
      'choc-septique': 'Douleur, fièvre, ictère avec hypotension ou confusion',
    },
    formes: [
      {
        nom: 'Cholécystite aiguë lithiasique',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Femme de plus de 40 ans, drépanocytaire',
        fonctionnels: '- Douleur de l’hypochondre droit',
        generaux: '- Fièvre',
        physiques: '- Signe de Murphy',
        paraclinique: '- Calculs, paroi épaissie',
        etiologies: '- Lithiase',
        syndromes: ['syndrome-infectieux'],
        examens: [['echographie-abdominale', 'Diagnostic']],
      },
      {
        nom: 'Angiocholite',
        type: 'gravite',
        description: 'Infection biliaire obstructive.',
        terrain: '- Calcul de la voie biliaire principale',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre, frissons, choc',
        physiques: '- Ictère',
        paraclinique: '- Voies biliaires dilatées, cholestase',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Volvulus du sigmoïde
  {
    ...CHIR,
    slug: 'volvulus-du-sigmoide',
    nom: 'Volvulus du sigmoïde',
    resume:
      'Occlusion basse fréquente en Afrique (dolichocôlon, régime riche en fibres) : distension abdominale énorme et asymétrique, arrêt des matières ; ASP (« grain de café ») ; détorsion endoscopique ou par sonde rectale si pas de nécrose, puis sigmoïdectomie ; nécrose = chirurgie urgente.',
    definition:
      'Torsion du côlon sigmoïde autour de son méso, entraînant une occlusion en anse fermée et un risque d’ischémie et de perforation.',
    physiopathologie:
      '## Mécanismes\n- Sigmoïde long et mobile avec méso étroit (dolichocôlon), fréquent en Afrique\n- Torsion : occlusion en anse fermée, distension massive, ischémie, nécrose, perforation',
    diagnostic:
      '## Clinique\n- Homme adulte ou âgé, constipation chronique\n- **Distension abdominale énorme**, asymétrique, tympanique\n- **Arrêt des matières et des gaz**, douleurs, vomissements tardifs\n- Signes de gravité : défense, fièvre, choc, sang au toucher rectal (nécrose)\n\n## Imagerie\n- **ASP** : anse sigmoïdienne très dilatée en « grain de café » (U inversé)\n- Scanner si disponible',
    examens: [
      ['confirmation', 'abdomen-sans-preparation', 'Image en grain de café.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Confirmation, signes d’ischémie.'],
      ['pretherapeutique', 'nfs', 'Hyperleucocytose (nécrose).'],
      ['pretherapeutique', 'ionogramme', 'Troubles ioniques.'],
      ['pretherapeutique', 'creatinine', 'Déshydratation.'],
      ['gravite', 'lactates', 'Ischémie.'],
      ['pretherapeutique', 'groupage-rai', 'Chirurgie.'],
    ],
    scores: [],
    differentiels: [
      ['occlusion-intestinale-aigue', 'Autres causes d’occlusion.'],
      ['Cancer colorectal sténosant', 'Altération de l’état général, installation progressive.'],
      ['Pseudo-obstruction colique (Ogilvie)', 'Patient alité, pas de torsion.'],
      ['Volvulus du cæcum', 'Distension à droite.'],
    ],
    etiologies:
      '## Facteurs\n- Dolichocôlon, constipation chronique, régime riche en fibres, âge, sexe masculin\n- Maladie de Chagas (hors Afrique), troubles neurologiques',
    principes: [
      [
        'Réanimation',
        'Préparer.',
        '- Voie veineuse, **Ringer lactate**, sonde gastrique, sonde urinaire, correction ionique',
      ],
      [
        'Sans signe de nécrose',
        'Détordre.',
        '- **Détorsion** par rectosigmoïdoscopie ou sonde rectale, laissée en place 24–48 h\n- Puis **sigmoïdectomie** programmée pendant la même hospitalisation (récidive > 50 %)',
      ],
      [
        'Nécrose, perforation ou échec',
        'Chirurgie urgente.',
        '- Laparotomie, sigmoïdectomie (intervention de Hartmann si nécrose ou péritonite)\n- Antibiotiques (**ceftriaxone** + **métronidazole**)',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Réanimation'],
      ['ceftriaxone', 'premiere', 'Antibioprophylaxie, nécrose'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['morphine', 'adjuvant', 'Douleur'],
      ['chlorure-de-potassium', 'adjuvant', 'Hypokaliémie'],
    ],
    complications: [
      {
        nom: 'Nécrose et perforation colique',
        fiche: 'peritonite-aigue',
        description: 'Ischémie.',
        traitement: '- Intervention de Hartmann',
        clinique: '- Défense, choc',
        paraclinique: '- Pneumopéritoine',
      },
      {
        nom: 'Choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Péritonite stercorale.',
        traitement: '- Réanimation, chirurgie',
        clinique: '- Hypotension',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Récidive',
        description: 'Sans sigmoïdectomie.',
        traitement: '- Chirurgie programmée',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon après détorsion et sigmoïdectomie ; mortalité élevée en cas de nécrose',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Distension abdominale', 'tres_frequent'],
      ['Arrêt des matières et des gaz', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'WSES — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Reconnaître l’occlusion, voie veineuse, transfert', '- Toute occlusion'],
      hgr: ['- ASP, détorsion, sigmoïdectomie', ''],
      tert: ['- Endoscopie, chirurgie', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Ventre très distendu avec arrêt des matières et des gaz' },
    formes: [
      {
        nom: 'Volvulus non compliqué',
        type: 'commune',
        description: 'Sans nécrose.',
        terrain: '- Homme de plus de 40 ans',
        fonctionnels: '- Arrêt des matières, ballonnement',
        generaux: '',
        physiques: '- Distension asymétrique, tympanisme',
        paraclinique: '- Grain de café',
        etiologies: '- Dolichocôlon',
        syndromes: ['syndrome-occlusif'],
        examens: [['abdomen-sans-preparation', 'Diagnostic']],
      },
      {
        nom: 'Volvulus nécrosé',
        type: 'gravite',
        description: 'Ischémie.',
        terrain: '- Retard',
        fonctionnels: '- Douleur intense',
        generaux: '- Fièvre, choc',
        physiques: '- Défense, sang au toucher rectal',
        paraclinique: '- Lactates élevés',
        etiologies: '',
        syndromes: ['syndrome-de-choc', 'syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== Perforation d'ulcère
  {
    ...CHIR,
    slug: 'perforation-ulcere-gastroduodenal',
    nom: 'Perforation d’ulcère gastroduodénal',
    resume:
      'Douleur épigastrique brutale « en coup de poignard », contracture abdominale (ventre de bois), pneumopéritoine : réanimation, sonde gastrique, IPP IV, antibiotiques, suture chirurgicale de l’ulcère et lavage ; éradication d’H. pylori ensuite.',
    definition:
      'Perforation de la paroi gastrique ou duodénale par un ulcère peptique, entraînant une péritonite chimique puis bactérienne.',
    physiopathologie:
      '## Mécanismes\n- Ulcère (H. pylori, AINS) creusant toute la paroi\n- Issue de liquide gastrique : péritonite chimique, puis infection après 6–12 h\n- Choc septique, défaillances',
    diagnostic:
      '## Clinique\n- **Douleur épigastrique brutale**, intense, « coup de poignard », puis diffuse\n- **Contracture abdominale** généralisée (« ventre de bois »), disparition de la matité préhépatique\n- Antécédent d’ulcère, prise d’AINS\n- Secondairement : fièvre, choc\n\n## Imagerie\n- **Pneumopéritoine** (radiographie debout, coupoles) ; scanner si doute',
    examens: [
      [
        'confirmation',
        'abdomen-sans-preparation',
        'Pneumopéritoine (cliché debout centré sur les coupoles).',
      ],
      ['deuxieme_intention', 'scanner-abdominal', 'Doute diagnostique.'],
      ['pretherapeutique', 'nfs', 'Hyperleucocytose.'],
      ['pretherapeutique', 'creatinine', 'Retentissement.'],
      ['gravite', 'lactates', 'Choc.'],
      ['pretherapeutique', 'groupage-rai', 'Chirurgie.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['Pancréatite aiguë', 'Lipase élevée, pas de pneumopéritoine.'],
      ['perforation-typhique-ileon', 'Fièvre prolongée préalable.'],
      ['syndrome-coronarien-aigu-st-plus', 'ECG.'],
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite.'],
    ],
    etiologies: '## Facteurs\n- H. pylori, **AINS** et aspirine, tabac, alcool, corticoïdes',
    principes: [
      [
        'Réanimation',
        'Préparer.',
        '- Voie veineuse, **Ringer lactate**, **sonde gastrique** en aspiration, sonde urinaire\n- **IPP IV** (**oméprazole** 40 mg toutes les 12 h)\n- Antibiotiques (**ceftriaxone** + **métronidazole**)\n- Antalgiques (**morphine**)',
      ],
      [
        'Chirurgie',
        'Fermer la perforation.',
        '- Laparotomie ou cœlioscopie : **suture de l’ulcère** avec épiplooplastie, lavage péritonéal abondant\n- Biopsie si ulcère gastrique (cancer)',
      ],
      ['Après', 'Prévenir la récidive.', '- IPP 8 semaines, **éradication d’H. pylori**, arrêt des AINS'],
    ],
    molecules: [
      ['omeprazole', 'premiere', 'IPP IV'],
      ['esomeprazole', 'alternative', 'IPP'],
      ['ceftriaxone', 'premiere', 'Péritonite'],
      ['metronidazole', 'premiere', 'Péritonite'],
      ['ringer-lactate', 'premiere', 'Réanimation'],
      ['morphine', 'premiere', 'Douleur'],
      ['amoxicilline', 'adjuvant', 'Éradication d’H. pylori'],
      ['clarithromycine', 'adjuvant', 'Éradication d’H. pylori'],
    ],
    complications: [
      {
        nom: 'Péritonite généralisée et choc septique',
        fiche: 'peritonite-aigue',
        description: 'Retard opératoire.',
        traitement: '- Chirurgie, réanimation',
        clinique: '- Choc',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Abcès résiduels',
        description: 'Lavage insuffisant.',
        traitement: '- Drainage',
        clinique: '- Fièvre persistante',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Fistule',
        description: 'Lâchage de suture.',
        traitement: '- Reprise',
        clinique: '- Écoulement digestif',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si opéré dans les 12 h ; mortalité élevée après 24 h et chez le sujet âgé',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Hypotension', 'occasionnel'],
    ],
    sources: [
      'WSES — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'The management of intra-abdominal infections from a global perspective: 2017 WSES guidelines',
    ],
    niveaux: {
      cs: ['- Reconnaître, voie veineuse, sonde gastrique, transfert immédiat', '- Toute suspicion'],
      hgr: ['- Radiographie, laparotomie, suture', ''],
      tert: ['- Cœlioscopie, réanimation', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Douleur épigastrique brutale avec ventre de bois' },
    formes: [
      {
        nom: 'Perforation d’ulcère duodénal',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Homme jeune, AINS',
        fonctionnels: '- Douleur en coup de poignard',
        generaux: '',
        physiques: '- Contracture généralisée',
        paraclinique: '- Pneumopéritoine',
        etiologies: '- Ulcère duodénal',
        syndromes: ['syndrome-d-irritation-peritoneale'],
        examens: [['abdomen-sans-preparation', 'Pneumopéritoine']],
      },
      {
        nom: 'Péritonite vue tardivement',
        type: 'gravite',
        description: 'Après 24 h.',
        terrain: '',
        fonctionnels: '- Douleur diffuse',
        generaux: '- Fièvre, choc',
        physiques: '- Distension, défense',
        paraclinique: '- Lactates élevés',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Perforation typhique
  {
    ...CHIR,
    slug: 'perforation-typhique-ileon',
    nom: 'Perforation typhique de l’iléon',
    resume:
      'Complication grave de la fièvre typhoïde (2e–3e semaine) chez l’enfant et l’adulte jeune : douleur et défense abdominales chez un patient fébrile depuis plusieurs jours ; réanimation, ceftriaxone + métronidazole, laparotomie avec suture ou résection iléale, lavage.',
    definition:
      'Perforation de l’iléon terminal au niveau des plaques de Peyer ulcérées par *Salmonella* Typhi, responsable d’une péritonite, fréquente en Afrique centrale.',
    physiopathologie:
      '## Mécanismes\n- Nécrose des plaques de Peyer infectées (iléon terminal, sur le bord antimésentérique)\n- Perforation unique ou multiple, péritonite stercorale\n- Terrain affaibli : malnutrition, retard de traitement',
    diagnostic:
      '## Clinique\n- Fièvre depuis 1 à 3 semaines (typhoïde), céphalées, troubles digestifs\n- **Douleur abdominale** d’apparition brutale ou progressive, **défense**, distension\n- Signes de choc, troubles de conscience\n\n## Examens\n- ASP ou radiographie thoracique debout : pneumopéritoine (inconstant)\n- Échographie : épanchement\n- NFS, hémocultures, TDR paludisme',
    examens: [
      ['premiere_intention', 'abdomen-sans-preparation', 'Pneumopéritoine (inconstant).'],
      ['premiere_intention', 'echographie-abdominale', 'Épanchement intrapéritonéal.'],
      ['premiere_intention', 'hemocultures', 'Salmonella Typhi.'],
      ['pretherapeutique', 'nfs', 'Leucopénie ou hyperleucocytose, anémie.'],
      ['pretherapeutique', 'ionogramme', 'Hypokaliémie.'],
      ['gravite', 'lactates', 'Choc.'],
      ['pretherapeutique', 'groupage-rai', 'Chirurgie.'],
      ['premiere_intention', 'tdr-paludisme', 'Différentiel.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite sans fièvre prolongée.'],
      ['perforation-ulcere-gastroduodenal', 'Douleur épigastrique brutale.'],
      ['Péritonite tuberculeuse', 'Évolution subaiguë, ascite.'],
      ['paludisme-grave', 'TDR positif, pas de défense.'],
    ],
    etiologies:
      '## Facteurs\n- Fièvre typhoïde non ou mal traitée, souches résistantes\n- Enfant et adulte jeune, malnutrition',
    principes: [
      [
        'Réanimation',
        'Stabiliser.',
        '- Voie veineuse, **Ringer lactate**, sonde gastrique, correction de l’hypokaliémie\n- **Ceftriaxone** + **métronidazole** (± gentamicine)',
      ],
      [
        'Chirurgie',
        'Contrôler la source.',
        '- Laparotomie précoce : **excision-suture** des perforations, ou **résection iléale** (perforations multiples), iléostomie si contamination majeure\n- Lavage péritonéal abondant\n- Examen de tout l’iléon (perforations multiples)',
      ],
      [
        'Après',
        'Guérir la typhoïde.',
        '- Antibiotiques 10 à 14 jours, nutrition\n- Prévention : eau potable, hygiène, vaccin typhoïdique conjugué',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Typhoïde, péritonite'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['gentamicine', 'adjuvant', 'Formes graves'],
      ['ringer-lactate', 'premiere', 'Réanimation'],
      ['morphine', 'premiere', 'Douleur'],
      ['chlorure-de-potassium', 'adjuvant', 'Hypokaliémie'],
      ['vaccin-typhoidique-conjugue-vi-tt', 'adjuvant', 'Prévention'],
    ],
    complications: [
      {
        nom: 'Choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Péritonite stercorale.',
        traitement: '- Réanimation',
        clinique: '- Hypotension',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Fistules et lâchage de suture',
        description: 'Tissus fragiles.',
        traitement: '- Reprise, iléostomie',
        clinique: '- Écoulement digestif',
        paraclinique: '',
      },
      {
        nom: 'Abcès et infection de paroi',
        description: 'Contamination.',
        traitement: '- Drainage, soins',
        clinique: '- Fièvre',
        paraclinique: '- Échographie',
      },
    ],
    evolution: '## Pronostic\n- Mortalité de 10 à 30 % selon le délai opératoire et l’état nutritionnel',
    urgences: ['abdomen-aigu-chirurgical', 'choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Douleur abdominale', 'tres_frequent'],
      ['Distension abdominale', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'WSES — recommandations de pratique clinique',
      'The management of intra-abdominal infections from a global perspective: 2017 WSES guidelines',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Suspicion devant une typhoïde avec douleur abdominale, antibiotiques, transfert',
        '- Toute défense abdominale chez un fébrile',
      ],
      hgr: ['- Laparotomie, réanimation', ''],
      tert: ['- Réanimation, chirurgie complexe', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical':
        'Patient fébrile depuis plusieurs jours avec douleur et défense abdominales',
      'choc-septique': 'Péritonite avec hypotension',
    },
    formes: [
      {
        nom: 'Perforation unique',
        type: 'commune',
        description: 'Péritonite localisée puis généralisée.',
        terrain: '- Enfant, adulte jeune',
        fonctionnels: '- Douleur abdominale',
        generaux: '- Fièvre prolongée',
        physiques: '- Défense de la fosse iliaque droite puis diffuse',
        paraclinique: '- Pneumopéritoine',
        etiologies: '- S. Typhi',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
      {
        nom: 'Perforations multiples avec choc',
        type: 'gravite',
        description: 'Péritonite stercorale.',
        terrain: '- Retard, malnutrition',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Distension, contracture',
        paraclinique: '- Épanchement abondant',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },
];
