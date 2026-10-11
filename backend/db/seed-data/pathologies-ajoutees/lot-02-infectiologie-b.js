'use strict';

/**
 * Lot 2 (partie B) — infectiologie prioritaire en RDC : syphilis, lèpre, ulcère de
 * Buruli, fièvre jaune, tuberculose extrapulmonaire. Fiches rédigées par IA (OMS, MSF,
 * programmes nationaux) : à valider par un médecin.
 */

const MI = { departement: 'medecine-interne', specialite: 'Infectiologie' };

module.exports = [
  // =================================================================== Syphilis
  {
    ...MI,
    slug: 'syphilis',
    nom: 'Syphilis',
    resume:
      'IST à Treponema pallidum évoluant par stades ; dépistage systématique en CPN, une injection de benzathine pénicilline guérit la syphilis précoce.',
    definition:
      'Infection due à *Treponema pallidum*, transmise par voie sexuelle, materno-fœtale ou sanguine, évoluant en syphilis primaire, secondaire, latente puis tertiaire en l’absence de traitement.',
    physiopathologie:
      '## Mécanismes\n- Pénétration par une muqueuse ou une microlésion cutanée, chancre au point d’inoculation\n- Dissémination hématogène précoce (syphilis secondaire)\n- Latence de plusieurs années, puis atteintes tertiaires (aorte, système nerveux, gommes)\n- Passage transplacentaire : avortement, mort fœtale, syphilis congénitale',
    diagnostic:
      '## Stades\n- **Primaire** (10 à 90 jours) : chancre génital unique, indolore, induré, avec adénopathie inguinale\n- **Secondaire** (2 mois à 2 ans) : roséole, syphilides papuleuses palmo-plantaires, plaques muqueuses, alopécie, adénopathies, fièvre\n- **Latente** : sérologie positive sans signe (précoce < 2 ans, tardive > 2 ans)\n- **Tertiaire** : gommes, aortite, neurosyphilis (méningite, tabès, démence)\n- Neurosyphilis possible à tout stade (troubles visuels, auditifs, méningés)\n\n## Sérologie\n- Test tréponémique (TDR, TPHA) + test non tréponémique titré (RPR)',
    examens: [
      [
        'confirmation',
        'serologie-syphilis',
        'TDR ou TPHA positif + RPR positif = syphilis active ; titre RPR pour le suivi.',
      ],
      ['premiere_intention', 'tdr-vih', 'Co-infection fréquente.'],
      [
        'deuxieme_intention',
        'lcr',
        'Signes neurologiques ou oculaires : VDRL du LCR, protéinorachie, cellularité.',
      ],
      ['suivi', 'serologie-syphilis', 'RPR à 6 et 12 mois : baisse d’au moins 4 fois attendue.'],
    ],
    scores: [],
    differentiels: [
      ['Herpès génital', 'Vésicules groupées douloureuses, récidivantes.'],
      ['Chancre mou', 'Ulcération douloureuse, molle, à bords décollés, bubon suppuré.'],
      ['Toxidermie ou pityriasis rosé', 'Éruption sans atteinte palmo-plantaire ni sérologie positive.'],
      ['mpox', 'Pustules ombiliquées, PCR mpox positive.'],
    ],
    etiologies:
      '## Agent\n- *Treponema pallidum* subsp. *pallidum*\n\n## Transmission\n- Rapports sexuels non protégés\n- Transmission materno-fœtale (toute la grossesse)\n- Transfusion de sang non dépisté',
    principes: [
      [
        'Syphilis précoce (primaire, secondaire, latente < 2 ans)',
        'Guérir en une injection.',
        '- **Benzathine benzylpénicilline** 2,4 MUI IM en dose unique\n- Allergie (hors grossesse) : doxycycline 100 mg 2 fois par jour pendant 14 jours',
      ],
      [
        'Syphilis latente tardive ou d’ancienneté inconnue',
        'Traitement prolongé.',
        '- Benzathine benzylpénicilline 2,4 MUI IM une fois par semaine pendant 3 semaines\n- Allergie : doxycycline 30 jours',
      ],
      [
        'Neurosyphilis et syphilis oculaire',
        'Atteindre des concentrations méningées.',
        '- **Benzylpénicilline** (pénicilline G) 18 à 24 MUI/j IV pendant 10 à 14 jours\n- Alternative : ceftriaxone 2 g/j IV 10 à 14 jours',
      ],
      [
        'Grossesse',
        'Prévenir la syphilis congénitale.',
        '- Dépistage à la première CPN (et au 3e trimestre si risque)\n- Pénicilline uniquement, même en cas d’allergie déclarée (désensibilisation)\n- Examiner et traiter le nouveau-né',
      ],
      [
        'Partenaires et suivi',
        'Éviter la réinfection.',
        '- Traiter les partenaires des 3 derniers mois\n- RPR à 6 et 12 mois, dépistage VIH\n- Prévenir la réaction de Jarisch-Herxheimer (fièvre dans les 24 h, paracétamol)',
      ],
    ],
    molecules: [
      ['benzathine-benzylpenicilline', 'premiere', 'Syphilis précoce (dose unique) et tardive (3 doses)'],
      ['benzylpenicilline-penicilline-g', 'premiere', 'Neurosyphilis, syphilis oculaire'],
      ['doxycycline', 'alternative', 'Allergie à la pénicilline hors grossesse'],
      ['ceftriaxone', 'alternative', 'Neurosyphilis en cas d’allergie non grave'],
      ['paracetamol', 'adjuvant', 'Réaction de Jarisch-Herxheimer'],
    ],
    complications: [
      {
        nom: 'Syphilis congénitale',
        description:
          'Avortement, mort fœtale, prématurité, nouveau-né infecté (pemphigus palmo-plantaire, hépatosplénomégalie, rhinite).',
        traitement: '- Dépistage et traitement de la mère ; benzylpénicilline du nouveau-né',
        clinique: '- Examen du nouveau-né',
        paraclinique: '- RPR du nouveau-né',
      },
      {
        nom: 'Neurosyphilis',
        description: 'Méningite, atteinte des nerfs crâniens, AVC, démence, tabès.',
        traitement: '- Pénicilline G IV 10 à 14 jours',
        clinique: '- Signes neurologiques, oculaires',
        paraclinique: '- LCR',
      },
      {
        nom: 'Syphilis cardiovasculaire',
        description: 'Aortite, insuffisance aortique, anévrysme.',
        traitement: '- Pénicilline, prise en charge cardiologique',
        clinique: '- Souffle diastolique',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison sous pénicilline à tous les stades ; les lésions tertiaires constituées peuvent persister\n- Le test tréponémique reste positif à vie',
    urgences: [],
    symptomes: [
      ['Ulcération génitale', 'frequent'],
      ['Éruption cutanée', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Troubles visuels', 'rare'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- TDR syphilis en CPN et devant toute IST, benzathine pénicilline, traitement des partenaires',
        '- Signes neurologiques ou oculaires, allergie chez la femme enceinte',
      ],
      hgr: ['- RPR titré, ponction lombaire, pénicilline G IV, syphilis congénitale', ''],
      tert: ['- Neurosyphilis et syphilis cardiovasculaire', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Syphilis primaire',
        type: 'evolutive',
        description: 'Chancre d’inoculation.',
        terrain: '- Rapport non protégé 3 semaines auparavant',
        fonctionnels: '- Plaie génitale indolore',
        generaux: '',
        physiques: '- Chancre unique, propre, induré ; adénopathie inguinale indolore',
        paraclinique: '- TDR positif (peut être négatif au tout début)',
        etiologies: '- *T. pallidum*',
        syndromes: [],
        examens: [['serologie-syphilis', 'Diagnostic']],
      },
      {
        nom: 'Syphilis secondaire',
        type: 'commune',
        description: 'Dissémination cutanéo-muqueuse.',
        terrain: '- Chancre non traité quelques semaines à mois auparavant',
        fonctionnels: '- Céphalées, malaise',
        generaux: '- Fièvre modérée',
        physiques: '- Roséole, syphilides palmo-plantaires, plaques muqueuses, alopécie, polyadénopathie',
        paraclinique: '- RPR à titre élevé',
        etiologies: '- Dissémination hématogène',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Syphilis de la femme enceinte',
        type: 'terrain',
        description: 'Risque de transmission au fœtus à tous les stades.',
        terrain: '- Grossesse',
        fonctionnels: '- Souvent asymptomatique',
        generaux: '',
        physiques: '',
        paraclinique: '- TDR positif en CPN',
        etiologies: '- Passage transplacentaire',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Lèpre
  {
    ...MI,
    slug: 'lepre',
    nom: 'Lèpre',
    resume:
      'Mycobactériose de la peau et des nerfs : taches hypopigmentées insensibles, nerfs hypertrophiés ; polychimiothérapie OMS gratuite, prévenir les invalidités.',
    definition:
      'Infection chronique due à *Mycobacterium leprae* atteignant la peau et les nerfs périphériques, classée pour le traitement en paucibacillaire (≤ 5 lésions) ou multibacillaire (> 5 lésions ou frottis positif).',
    physiopathologie:
      '## Mécanismes\n- Transmission par les gouttelettes nasales lors de contacts prolongés\n- Incubation longue (2 à 10 ans)\n- Tropisme pour les cellules de Schwann : névrite, perte de sensibilité, paralysies\n- Spectre selon l’immunité : tuberculoïde (peu de bacilles) à lépromateuse (nombreux bacilles)\n- Réactions immunologiques aiguës (réaction reverse, érythème noueux lépreux) aggravant les névrites',
    diagnostic:
      '## Signes cardinaux (OMS) : 1 seul suffit\n- Tache cutanée hypopigmentée ou rougeâtre avec **perte de sensibilité**\n- **Nerf périphérique hypertrophié** (cubital, sciatique poplité externe, auriculaire) avec atteinte sensitive ou motrice\n- Bacilles acido-alcoolo-résistants dans un frottis cutané\n\n## Classification\n- Paucibacillaire : 1 à 5 lésions, frottis négatif\n- Multibacillaire : plus de 5 lésions, ou atteinte de plus d’un tronc nerveux, ou frottis positif\n\n## Bilan d’invalidité\n- Sensibilité des mains et des pieds, force motrice, fermeture des paupières, acuité visuelle',
    examens: [
      [
        'confirmation',
        'frottis-lepre',
        'BAAR positifs : forme multibacillaire. Négatif n’exclut pas la lèpre.',
      ],
      ['pretherapeutique', 'nfs', 'Anémie avant dapsone ; hémolyse sous traitement.'],
      ['deuxieme_intention', 'bilan-hepatique', 'Avant rifampicine si hépatopathie.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Pityriasis versicolor', 'Taches squameuses sans perte de sensibilité, prurit.'],
      ['Vitiligo', 'Dépigmentation complète, sensibilité normale.'],
      ['Dermatophyties', 'Lésions annulaires prurigineuses, sensibilité normale.'],
      [
        'Neuropathies diabétique ou alcoolique',
        'Atteinte symétrique distale, pas de taches ni de nerfs hypertrophiés.',
      ],
    ],
    etiologies:
      '## Agent\n- *Mycobacterium leprae* (et *M. lepromatosis*)\n\n## Facteurs\n- Contact familial prolongé avec un malade multibacillaire non traité\n- Pauvreté, promiscuité\n- Foyers en RDC : Équateur, Tshopo, Sankuru, Haut-Lomami, Tanganyika…',
    principes: [
      [
        'Polychimiothérapie OMS (3 médicaments pour tous)',
        'Guérir et interrompre la transmission.',
        '- Adulte : **rifampicine** 600 mg + **clofazimine** 300 mg une fois par mois (supervisés), **clofazimine** 50 mg/j + **dapsone** 100 mg/j\n- Durée : 6 mois (paucibacillaire), 12 mois (multibacillaire)\n- Blisters enfant selon l’âge et le poids',
      ],
      [
        'Reconnaître et traiter les réactions',
        'Protéger les nerfs.',
        '- Réaction reverse (type 1) ou névrite : **prednisolone** 40 mg/j dégressive sur 12 à 20 semaines\n- Érythème noueux lépreux (type 2) : prednisolone, clofazimine à forte dose\n- Poursuivre la polychimiothérapie',
      ],
      [
        'Prévenir les invalidités',
        'Éviter plaies et mutilations.',
        '- Inspection quotidienne des mains et des pieds, chaussures protectrices, soins des plaies\n- Protection oculaire (lagophtalmie), kinésithérapie',
      ],
      [
        'Prophylaxie des contacts',
        'Réduire les nouveaux cas.',
        '- Examen des contacts ; rifampicine en dose unique (SDR-PEP) selon le programme national',
      ],
      [
        'Lutter contre la stigmatisation',
        'Faciliter le dépistage précoce.',
        '- Information : maladie curable, non contagieuse après le début du traitement',
      ],
    ],
    molecules: [
      ['rifampicine', 'premiere', 'Dose mensuelle supervisée ; prophylaxie des contacts'],
      ['clofazimine', 'premiere', 'Mensuelle et quotidienne ; réactions de type 2'],
      ['dapsone', 'premiere', 'Quotidienne'],
      ['prednisolone', 'adjuvant', 'Réactions lépreuses et névrites'],
    ],
    complications: [
      {
        nom: 'Névrite et paralysies',
        description: 'Griffe cubitale, pied tombant, lagophtalmie.',
        traitement: '- Prednisolone, attelles, rééducation, chirurgie palliative',
        clinique: '- Test de la sensibilité et de la force tous les mois',
        paraclinique: '',
      },
      {
        nom: 'Maux perforants plantaires',
        description: 'Ulcères sur zones insensibles.',
        traitement: '- Décharge, soins de plaie, chaussures adaptées',
        clinique: '- Plaies des pieds',
        paraclinique: '',
      },
      {
        nom: 'Atteinte oculaire',
        description: 'Lagophtalmie, kératite, cécité.',
        traitement: '- Protection oculaire, avis ophtalmologique',
        clinique: '- Fermeture des paupières, acuité visuelle',
        paraclinique: '',
      },
      {
        nom: 'Hémolyse sous dapsone',
        description: 'Surtout en cas de déficit en G6PD.',
        traitement: '- Arrêt de la dapsone si anémie sévère',
        clinique: '- Pâleur, ictère',
        paraclinique: '- NFS',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison bactériologique sous polychimiothérapie ; rechutes rares\n- Les invalidités constituées sont définitives : d’où le dépistage précoce\n- La clofazimine colore la peau de façon réversible',
    urgences: [],
    symptomes: [
      ['Taches cutanées hypopigmentées', 'tres_frequent'],
      ['Anesthésie cutanée', 'tres_frequent'],
      ['Déficit moteur', 'occasionnel'],
      ['Ulcère cutané', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: [
        '- Diagnostic clinique (signes cardinaux), polychimiothérapie, examen des contacts, éducation',
        '- Réaction lépreuse, névrite aiguë, doute diagnostique',
      ],
      hgr: ['- Frottis, prednisolone, prise en charge des plaies', '- Chirurgie palliative'],
      tert: ['- Chirurgie de réhabilitation, cas complexes', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Lèpre paucibacillaire',
        type: 'commune',
        description: '1 à 5 taches hypopigmentées insensibles.',
        terrain: '- Contact familial',
        fonctionnels: '- Tache insensible',
        generaux: '',
        physiques: '- Macules hypopigmentées à bords nets, anesthésiques ; nerf hypertrophié parfois',
        paraclinique: '- Frottis négatif',
        etiologies: '- *M. leprae* (bonne immunité cellulaire)',
        syndromes: [],
      },
      {
        nom: 'Lèpre multibacillaire',
        type: 'commune',
        description: 'Lésions nombreuses, infiltrées, nerfs atteints.',
        terrain: '- Faible immunité',
        fonctionnels: '- Obstruction nasale, épistaxis, faiblesse des mains',
        generaux: '',
        physiques: '- Plus de 5 lésions, infiltration du visage, nodules, plusieurs nerfs hypertrophiés',
        paraclinique: '- Frottis positif',
        etiologies: '- *M. leprae*',
        syndromes: [],
        examens: [['frottis-lepre', 'Indice bacillaire']],
      },
      {
        nom: 'Réaction lépreuse',
        type: 'evolutive',
        description: 'Inflammation aiguë menaçant les nerfs.',
        terrain: '- Avant, pendant ou après le traitement',
        fonctionnels: '- Douleurs des nerfs, perte de force',
        generaux: '- Fièvre (type 2)',
        physiques: '- Lésions gonflées (type 1), nodules douloureux (type 2), nerfs douloureux',
        paraclinique: '',
        etiologies: '- Réaction immunologique',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Ulcère de Buruli
  {
    ...MI,
    slug: 'ulcere-de-buruli',
    nom: 'Ulcère de Buruli',
    resume:
      'Mycobactériose cutanée nécrosante à M. ulcerans : ulcère indolore à bords décollés ; rifampicine + clarithromycine 8 semaines et soins de plaies.',
    definition:
      'Infection de la peau et des tissus sous-cutanés due à *Mycobacterium ulcerans*, provoquant des ulcères étendus et indolores pouvant laisser des invalidités, en zones humides et marécageuses.',
    physiopathologie:
      '## Mécanismes\n- Mode de transmission imparfaitement connu (environnement aquatique, microtraumatismes)\n- Production de mycolactone : toxine nécrosante et immunosuppressive, responsable de l’absence de douleur\n- Nécrose du tissu graisseux sous-cutané, ulcère creusant à bords décollés',
    diagnostic:
      '## Clinique\n- Lésions de début : **nodule** indolore, plaque, œdème diffus d’un membre\n- Puis **ulcère indolore**, fond nécrotique blanc jaunâtre, bords décollés\n- Siège : membres (70 %), enfants de 5 à 15 ans surtout\n- Peu de fièvre, état général conservé\n\n## Catégories OMS\n- I : lésion unique < 5 cm ; II : 5 à 15 cm ; III : > 15 cm, lésions multiples, sites critiques (œil, articulation, organes génitaux), ostéomyélite',
    examens: [
      [
        'confirmation',
        'pcr-buruli',
        'PCR IS2404 positive : confirmation ; Ziehl sur écouvillon en complément.',
      ],
      ['premiere_intention', 'tdr-vih', 'VIH associé : formes plus graves.'],
      ['gravite', 'nfs', 'Anémie, surinfection.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Ulcère phagédénique tropical', 'Ulcère douloureux, évolution rapide, odeur fétide.'],
      ['Ulcère drépanocytaire ou veineux', 'Terrain, siège malléolaire.'],
      ['Mycétome', 'Tuméfaction avec fistules et grains.'],
      ['Cellulite bactérienne', 'Douleur, fièvre, rougeur.'],
    ],
    etiologies:
      '## Agent\n- *Mycobacterium ulcerans*\n\n## Facteurs\n- Proximité de zones humides, rivières, marécages\n- Foyers en RDC : Kongo-Central (Songololo), Bas-Uele, Maniema, Tshopo',
    principes: [
      [
        'Antibiothérapie de 8 semaines',
        'Stériliser la lésion.',
        '- **Rifampicine** 10 mg/kg/j + **clarithromycine** 7,5 mg/kg 2 fois par jour pendant 8 semaines (OMS)\n- Femme enceinte : clarithromycine possible (éviter la streptomycine)',
      ],
      [
        'Soins de plaies',
        'Favoriser la cicatrisation.',
        '- Pansements réguliers, détersion, nutrition\n- Greffe de peau pour les grandes pertes de substance',
      ],
      [
        'Prévention des invalidités',
        'Préserver la fonction des membres.',
        '- Kinésithérapie précoce, positionnement des articulations',
      ],
      [
        'Dépistage précoce',
        'Traiter au stade de nodule.',
        '- Recherche active dans les villages, sensibilisation',
      ],
    ],
    molecules: [
      ['rifampicine', 'premiere', '8 semaines'],
      ['clarithromycine', 'premiere', '8 semaines'],
      ['paracetamol', 'adjuvant', 'Douleurs lors des pansements'],
    ],
    complications: [
      {
        nom: 'Rétractions et invalidités',
        description: 'Contractures articulaires, ankyloses, amputations.',
        traitement: '- Kinésithérapie, chirurgie réparatrice',
        clinique: '- Mobilité articulaire',
        paraclinique: '',
      },
      {
        nom: 'Ostéomyélite',
        description: 'Atteinte osseuse sous-jacente.',
        traitement: '- Antibiothérapie, chirurgie',
        clinique: '- Douleurs osseuses, fistules',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Réaction paradoxale',
        description: 'Aggravation transitoire sous antibiotiques.',
        traitement: '- Poursuite du traitement',
        clinique: '- Extension, nouvelle lésion',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison sans chirurgie pour la plupart des lésions de catégories I et II\n- Séquelles fonctionnelles surtout pour les lésions étendues ou proches des articulations',
    urgences: [],
    symptomes: [
      ['Ulcère cutané', 'tres_frequent'],
      ['Nodules sous-cutanés', 'frequent'],
      ['Œdèmes', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Dépistage, prélèvement si possible, soins de plaies',
        '- Toute suspicion : centre de traitement',
      ],
      hgr: [
        '- PCR, rifampicine-clarithromycine, soins de plaies, kinésithérapie',
        '- Catégorie III, besoin de greffe ou de chirurgie',
      ],
      tert: ['- Chirurgie, greffes, réhabilitation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme ulcérée',
        type: 'commune',
        description: 'Ulcère indolore à bords décollés.',
        terrain: '- Enfant, zone humide',
        fonctionnels: '- Plaie non douloureuse',
        generaux: '- État général conservé',
        physiques: '- Ulcère à fond nécrotique, bords décollés, induration périphérique',
        paraclinique: '- PCR IS2404 positive',
        etiologies: '- *M. ulcerans*',
        syndromes: [],
        examens: [['pcr-buruli', 'Confirmation']],
      },
      {
        nom: 'Formes pré-ulcératives',
        type: 'evolutive',
        description: 'Nodule, plaque ou œdème.',
        terrain: '- Début de la maladie',
        fonctionnels: '- Gonflement indolore',
        generaux: '',
        physiques: '- Nodule ferme, plaque indurée, œdème d’un membre',
        paraclinique: '- PCR sur ponction',
        etiologies: '- *M. ulcerans*',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Fièvre jaune
  {
    ...MI,
    slug: 'fievre-jaune',
    nom: 'Fièvre jaune',
    resume:
      'Arbovirose hémorragique transmise par Aedes ; ictère, hémorragies, insuffisance rénale ; pas de traitement spécifique, prévention par une dose de vaccin à vie.',
    definition:
      'Infection due au virus de la fièvre jaune (flavivirus), transmise par la piqûre de moustiques *Aedes* et *Haemagogus*, se manifestant par une fièvre aiguë et, dans 15 % des cas, une phase toxique avec hépatite, hémorragies et insuffisance rénale.',
    physiopathologie:
      '## Mécanismes\n- Réplication dans les ganglions puis le foie (nécrose médiolobulaire)\n- Atteinte rénale, myocardique, troubles de la coagulation\n- Cycle selvatique (singes), intermédiaire et urbain (*Aedes aegypti*) à potentiel épidémique',
    diagnostic:
      '## Clinique\n- Incubation 3 à 6 jours\n- Phase d’infection : fièvre brutale, céphalées, lombalgies, myalgies, nausées, bradycardie relative\n- Rémission de 24 à 48 h\n- **Phase toxique** (15 %) : ictère, hémorragies (hématémèse, épistaxis, gingivorragies), oligurie, encéphalopathie\n\n## Définition de cas suspect\n- Fièvre aiguë suivie d’un ictère dans les 14 jours\n\n## Confirmation\n- RT-PCR (premiers jours), IgM après J5, laboratoire de référence (INRB)',
    examens: [
      [
        'confirmation',
        'serologie-fievre-jaune',
        'IgM ou RT-PCR positives ; confirmation au laboratoire de référence.',
      ],
      [
        'premiere_intention',
        'tdr-paludisme',
        'Paludisme grave : premier différentiel, co-infection possible.',
      ],
      ['gravite', 'bilan-hepatique', 'Transaminases très élevées (ASAT > ALAT), bilirubine élevée.'],
      ['gravite', 'creatinine', 'Insuffisance rénale de la phase toxique.'],
      ['gravite', 'nfs', 'Leucopénie, thrombopénie.'],
      ['gravite', 'hemostase', 'Troubles de la coagulation.'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-grave', 'TDR positif, ictère hémolytique.'],
      ['Hépatites virales aiguës', 'Pas de fièvre élevée au moment de l’ictère ; marqueurs viraux.'],
      ['Leptospirose', 'Exposition à l’eau, suffusion conjonctivale.'],
      ['maladie-a-virus-ebola', 'Contact avec un cas, diarrhée profuse ; PCR Ebola.'],
      ['fievre-typhoide', 'Fièvre en plateau, pouls dissocié.'],
    ],
    etiologies:
      '## Agent\n- Virus de la fièvre jaune (*Orthoflavivirus flavi*)\n\n## Facteurs\n- Absence de vaccination\n- Zones forestières (cycle selvatique), villes (*Aedes aegypti*) : épidémies urbaines (Kinshasa 2016)',
    principes: [
      [
        'Notifier et isoler du moustique',
        'Éviter la transmission épidémique.',
        '- Notification immédiate de tout cas suspect\n- Moustiquaire pour le malade, lutte antivectorielle autour du cas',
      ],
      [
        'Soins de soutien',
        'Passer le cap de la phase toxique.',
        '- Hydratation, correction de l’hypoglycémie, antipyrétique (**paracétamol** à dose prudente)\n- **Pas d’aspirine ni d’AINS**\n- Vitamine K, transfusion si hémorragie\n- Pas de traitement antiviral spécifique',
      ],
      [
        'Traiter les défaillances',
        'Réduire la mortalité.',
        '- Prise en charge de l’insuffisance rénale (dialyse), de l’encéphalopathie, du choc\n- Traiter un paludisme associé',
      ],
      [
        'Vaccination',
        'Prévention définitive.',
        '- Une dose à 9 mois (PEV), immunité à vie\n- Campagnes de riposte autour des cas',
      ],
    ],
    molecules: [
      ['vaccin-antiamaril', 'premiere', 'Prévention, riposte'],
      ['paracetamol', 'adjuvant', 'Fièvre (dose prudente, hépatite)'],
      ['vitamine-k1-phytomenadione', 'adjuvant', 'Troubles de la coagulation'],
      ['ringer-lactate', 'adjuvant', 'Réhydratation'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['artesunate', 'adjuvant', 'Paludisme associé'],
    ],
    complications: [
      {
        nom: 'Hépatite fulminante',
        description: 'Ictère intense, encéphalopathie, hypoglycémie.',
        traitement: '- Soins de soutien, glucose',
        clinique: '- Conscience, ictère',
        paraclinique: '- Bilan hépatique, glycémie',
      },
      {
        nom: 'Hémorragies',
        description: 'Coagulopathie, thrombopénie.',
        traitement: '- Vitamine K, transfusion',
        clinique: '- Saignements',
        paraclinique: '- Hb, hémostase',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Nécrose tubulaire.',
        traitement: '- Équilibre hydrique, dialyse',
        clinique: '- Diurèse',
        paraclinique: '- Créatinine, kaliémie',
      },
    ],
    evolution:
      '## Pronostic\n- Forme bénigne : guérison sans séquelle, immunité définitive\n- Phase toxique : létalité 30 à 60 %, décès entre J7 et J10',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Céphalées', 'tres_frequent'],
      ['Ictère', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Hémorragies', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: [
        '- Repérer le cas suspect (fièvre + ictère), prélèvement selon l’organisation, notification',
        '- Tout cas suspect avec signes de gravité',
      ],
      hgr: [
        '- Soins de soutien, prise en charge des hémorragies, traitement du paludisme associé',
        '- Insuffisance rénale, encéphalopathie',
      ],
      tert: ['- Réanimation, dialyse', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme commune bénigne',
        type: 'commune',
        description: 'Fièvre aiguë guérissant en quelques jours.',
        terrain: '- Non vacciné, zone d’endémie',
        fonctionnels: '- Céphalées, lombalgies, myalgies, nausées',
        generaux: '- Fièvre brutale, bradycardie relative',
        physiques: '- Injection conjonctivale',
        paraclinique: '- RT-PCR ou IgM positives',
        etiologies: '- Virus de la fièvre jaune',
        syndromes: ['syndrome-infectieux'],
        examens: [['serologie-fievre-jaune', 'Confirmation']],
      },
      {
        nom: 'Forme toxique',
        type: 'gravite',
        description: 'Hépatonéphrite hémorragique après une courte rémission.',
        terrain: '- 15 % des formes symptomatiques',
        fonctionnels: '- Vomissements « noirs », douleurs abdominales',
        generaux: '- Reprise de la fièvre',
        physiques: '- Ictère, hémorragies, oligurie, confusion',
        paraclinique: '- Cytolyse majeure, insuffisance rénale, coagulopathie',
        etiologies: '- Atteinte hépatique et rénale',
        syndromes: ['syndrome-d-insuffisance-hepatocellulaire', 'syndrome-hemorragique', 'syndrome-uremique'],
      },
    ],
  },

  // =================================================================== Tuberculose extrapulmonaire
  {
    ...MI,
    slug: 'tuberculose-extrapulmonaire',
    nom: 'Tuberculose extrapulmonaire',
    resume:
      'Localisations ganglionnaire, pleurale, péritonéale, péricardique, ostéoarticulaire et méningée de la tuberculose ; fréquentes chez la PVVIH, traitement 2RHZE/4RH ou plus long.',
    definition:
      'Tuberculose touchant un organe autre que le parenchyme pulmonaire (ganglions, plèvre, péritoine, péricarde, os et articulations, méninges, appareil urogénital), diagnostiquée sur des arguments bactériologiques, histologiques ou cliniques.',
    physiopathologie:
      '## Mécanismes\n- Dissémination lymphatique ou hématogène de *M. tuberculosis* lors de la primo-infection ou d’une réactivation\n- Granulomes avec nécrose caséeuse dans l’organe atteint\n- Plus fréquente chez l’enfant et la PVVIH (formes disséminées)',
    diagnostic:
      '## Localisations\n- **Ganglionnaire** : adénopathies cervicales fermes puis fistulisées\n- **Pleurale** : épanchement liquidien unilatéral, exsudat lymphocytaire\n- **Péritonéale** : ascite exsudative, douleurs, masses\n- **Péricardique** : épanchement, tamponnade, constriction\n- **Ostéoarticulaire** : mal de Pott (spondylodiscite), arthrite chronique\n- **Méningée** : céphalées subaiguës, paralysies des nerfs crâniens, confusion\n- **Miliaire** : forme disséminée fébrile\n\n## Signes généraux\n- Fièvre vespérale, sueurs nocturnes, amaigrissement',
    examens: [
      [
        'confirmation',
        'xpert-mtb-rif',
        'Sur ponction, pus ganglionnaire, liquide d’épanchement, LCR : détecte M. tuberculosis et la résistance à la rifampicine.',
      ],
      ['confirmation', 'cytoponction-ganglionnaire', 'Granulome caséeux, BAAR.'],
      ['premiere_intention', 'ponction-epanchement', 'Exsudat lymphocytaire, ADA élevée.'],
      ['premiere_intention', 'tdr-vih', 'Systématique.'],
      ['premiere_intention', 'tb-lam', 'PVVIH avec CD4 bas ou malade grave : LAM urinaire positif.'],
      [
        'premiere_intention',
        'radiographie-thoracique',
        'Atteinte pulmonaire associée, épanchement, cardiomégalie.',
      ],
      ['deuxieme_intention', 'echographie-abdominale', 'Ascite, adénopathies abdominales, péricardite.'],
      [
        'deuxieme_intention',
        'lcr',
        'Méningite : liquide clair lymphocytaire, hypoglycorachie, hyperprotéinorachie.',
      ],
    ],
    scores: ['dose-ponderale', 'stades-oms-vih'],
    differentiels: [
      ['Lymphome', 'Adénopathies non fistulisées ; biopsie.'],
      ['Sarcome de Kaposi ganglionnaire', 'Contexte VIH, lésions cutanées violacées.'],
      ['Péricardite ou pleurésie bactérienne', 'Liquide purulent, polynucléaires.'],
      ['meningite-a-cryptocoque', 'CrAg positif.'],
      ['Ascite de cirrhose', 'Transsudat, signes d’hypertension portale.'],
    ],
    etiologies:
      '## Agent\n- *Mycobacterium tuberculosis* (rarement *M. bovis*)\n\n## Terrain\n- VIH (première cause), enfant, malnutrition, diabète, contact d’un tuberculeux',
    principes: [
      [
        'Confirmer autant que possible',
        'Rechercher la résistance.',
        '- GeneXpert sur tout prélèvement accessible\n- Traitement présomptif si forte suspicion et état grave',
      ],
      [
        'Traitement standard',
        'Guérir.',
        '- 2 mois de **rifampicine, isoniazide, pyrazinamide, éthambutol** (2RHZE) puis 4 mois de rifampicine-isoniazide (4RH)\n- Méningite et formes ostéoarticulaires : 2RHZE puis 10RH (12 mois)\n- **Pyridoxine** avec l’isoniazide',
      ],
      [
        'Corticothérapie',
        'Limiter les séquelles inflammatoires.',
        '- Méningite : **dexaméthasone** 6 à 8 semaines (dégressive)\n- Péricardite : corticoïdes discutés (prednisolone), surtout hors VIH',
      ],
      [
        'Gestes associés',
        'Traiter les complications mécaniques.',
        '- Ponction évacuatrice de la plèvre ou du péricarde (tamponnade)\n- Immobilisation et avis chirurgical du mal de Pott compressif',
      ],
      [
        'VIH et suivi',
        'Réduire la mortalité.',
        '- ARV dans les 2 semaines (sauf méningite : 4 à 8 semaines), cotrimoxazole\n- Observance (DOT), dépistage des contacts',
      ],
    ],
    molecules: [
      ['rifampicine', 'premiere', '6 à 12 mois selon la localisation'],
      ['isoniazide', 'premiere', '6 à 12 mois'],
      ['pyrazinamide', 'premiere', '2 premiers mois'],
      ['ethambutol', 'premiere', '2 premiers mois'],
      ['pyridoxine', 'adjuvant', 'Prévention de la neuropathie à l’isoniazide'],
      ['dexamethasone', 'adjuvant', 'Méningite tuberculeuse'],
      ['prednisolone', 'adjuvant', 'Péricardite, forme compressive'],
      ['cotrimoxazole', 'adjuvant', 'Prophylaxie chez la PVVIH'],
    ],
    complications: [
      {
        nom: 'Tamponnade et péricardite constrictive',
        description: 'Épanchement compressif puis fibrose.',
        traitement: '- Péricardiocentèse, corticoïdes, péricardectomie',
        clinique: '- Turgescence jugulaire, pouls paradoxal, hépatomégalie',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Compression médullaire (mal de Pott)',
        description: 'Paraplégie par abcès ou cyphose.',
        traitement: '- Antituberculeux, immobilisation, chirurgie de décompression',
        clinique: '- Force et sensibilité des membres inférieurs, sphincters',
        paraclinique: '- Radiographie, scanner',
      },
      {
        nom: 'Séquelles de méningite',
        description: 'Hydrocéphalie, déficits, épilepsie, cécité.',
        traitement: '- Dérivation si hydrocéphalie, rééducation',
        clinique: '- Conscience, déficits',
        paraclinique: '- Scanner cérébral',
      },
      {
        nom: 'Hépatotoxicité des antituberculeux',
        description: 'Surtout isoniazide et pyrazinamide.',
        traitement: '- Arrêt et réintroduction progressive',
        clinique: '- Ictère, vomissements',
        paraclinique: '- Bilan hépatique',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison dans la majorité des formes ganglionnaires et pleurales\n- Méningite : mortalité élevée (30 % ou plus), séquelles fréquentes\n- Réaction paradoxale possible sous traitement (surtout sous ARV)',
    urgences: ['syndrome-meninge-febrile'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Sueurs nocturnes', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Distension abdominale', 'occasionnel'],
      ['Céphalées', 'occasionnel'],
      ['Douleurs osseuses', 'occasionnel'],
    ],
    sources: [
      'Guide technique de prise en charge de la tuberculose',
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Suspicion, dépistage du VIH, prélèvement pour GeneXpert, suivi du traitement (DOT)',
        '- Méningite, tamponnade, compression médullaire, diagnostic incertain',
      ],
      hgr: [
        '- Ponctions, cytoponction, mise sous traitement, corticoïdes, ARV',
        '- Chirurgie du rachis, péricardectomie',
      ],
      tert: ['- Imagerie, chirurgie, formes résistantes', ''],
    },
    alertes: {
      'syndrome-meninge-febrile': 'Céphalées subaiguës, fièvre, paralysie d’un nerf crânien, confusion',
    },
    formes: [
      {
        nom: 'Tuberculose ganglionnaire',
        type: 'commune',
        description: 'Forme extrapulmonaire la plus fréquente.',
        terrain: '- Enfant, adulte jeune, PVVIH',
        fonctionnels: '- Tuméfaction du cou',
        generaux: '- Fièvre, sueurs, amaigrissement',
        physiques: '- Adénopathies cervicales fermes, confluentes, puis fluctuantes et fistulisées',
        paraclinique: '- Cytoponction : granulome, GeneXpert positif',
        etiologies: '- *M. tuberculosis*',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
        examens: [['cytoponction-ganglionnaire', 'Confirmation']],
      },
      {
        nom: 'Pleurésie tuberculeuse',
        type: 'topographique',
        description: 'Épanchement pleural exsudatif.',
        terrain: '- Adulte jeune, PVVIH',
        fonctionnels: '- Douleur thoracique, toux sèche, dyspnée',
        generaux: '- Fièvre',
        physiques: '- Matité, abolition du murmure vésiculaire',
        paraclinique: '- Exsudat lymphocytaire, ADA élevée',
        etiologies: '- *M. tuberculosis*',
        syndromes: ['syndrome-d-epanchement-pleural-liquidien'],
      },
      {
        nom: 'Méningite tuberculeuse',
        type: 'gravite',
        description: 'Méningo-encéphalite subaiguë.',
        terrain: '- Enfant, PVVIH',
        fonctionnels: '- Céphalées, vomissements, troubles du comportement',
        generaux: '- Fièvre',
        physiques: '- Raideur de nuque, paralysies oculomotrices, confusion',
        paraclinique: '- LCR clair lymphocytaire, hypoglycorachie',
        etiologies: '- *M. tuberculosis*',
        syndromes: ['syndrome-meninge'],
      },
      {
        nom: 'Mal de Pott',
        type: 'topographique',
        description: 'Spondylodiscite tuberculeuse.',
        terrain: '- Tout âge',
        fonctionnels: '- Rachialgies chroniques',
        generaux: '- Signes généraux inconstants',
        physiques: '- Gibbosité, abcès froid, déficit des membres inférieurs',
        paraclinique: '- Pincement discal et érosions vertébrales',
        etiologies: '- *M. tuberculosis*',
        syndromes: ['syndrome-pyramidal'],
      },
    ],
  },
];
