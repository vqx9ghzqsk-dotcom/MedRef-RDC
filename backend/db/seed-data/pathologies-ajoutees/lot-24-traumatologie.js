'use strict';

/**
 * Lot 24 (traumatologie) — polytraumatisé, fractures ouvertes, fracture du col du fémur,
 * fracture supracondylienne de l'humérus de l'enfant, syndrome des loges, plaies par arme à
 * feu. Rédigé par IA (ATLS, CICR chirurgie de guerre, AO, BOAST, OMS) : à valider.
 */

const TRAUMA = { departement: 'chirurgie', specialite: 'Traumatologie' };

module.exports = [
  // =================================================================== Polytraumatisé
  {
    ...TRAUMA,
    slug: 'polytraumatise',
    nom: 'Polytraumatisé',
    resume:
      'Blessé ayant au moins deux lésions dont une menace la vie, ou victime d’un traumatisme à haute énergie : examen primaire ABCDE, contrôle des hémorragies (garrot, compression, ceinture pelvienne), transfusion précoce et acide tranexamique, chirurgie d’écourtement, transfert organisé.',
    definition:
      'Patient atteint de plusieurs lésions traumatiques dont au moins une engage le pronostic vital, ou victime d’un mécanisme à haute énergie justifiant une prise en charge de traumatologie grave.',
    physiopathologie:
      '## Mécanismes\n- Accidents de la route (motos-taxis, piétons), chutes de hauteur, violences, effondrements\n- Décès précoces : hémorragie, lésions cérébrales, obstruction des voies aériennes, pneumothorax compressif\n- « Triade létale » : hypothermie, acidose, coagulopathie',
    diagnostic:
      '## Examen primaire (xABCDE)\n- **x** : hémorragie externe massive (garrot)\n- **A** : voies aériennes + protection du rachis cervical\n- **B** : ventilation (pneumothorax compressif, volet costal, hémothorax)\n- **C** : circulation (pouls, TRC, FAST, bassin, fémurs)\n- **D** : Glasgow, pupilles, déficit\n- **E** : exposition complète, hypothermie\n\n## Examen secondaire\n- Examen de la tête aux pieds, mécanisme, antécédents (AMPLE)\n- Radiographies (thorax, bassin, rachis), FAST, scanner « corps entier » si disponible',
    examens: [
      ['premiere_intention', 'echographie-abdominale', 'FAST (abdomen, péricarde, plèvres).'],
      ['premiere_intention', 'radiographie-thoracique', 'Pneumothorax, hémothorax.'],
      ['premiere_intention', 'radiographie-osseuse', 'Bassin, rachis cervical, membres.'],
      ['premiere_intention', 'nfs', 'Hb.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['gravite', 'lactates', 'Choc.'],
      ['gravite', 'scanner-cerebral', 'Traumatisme crânien.'],
    ],
    scores: ['glasgow', 'index-de-choc'],
    differentiels: [],
    etiologies:
      '## Mécanismes\n- Accidents de la circulation, chutes, violences, conflits armés, effondrements de bâtiments ou de mines',
    principes: [
      [
        'Contrôle des hémorragies et réanimation',
        'Survivre à la première heure.',
        '- **Garrot** pour les hémorragies de membre, compression, **ceinture pelvienne**\n- 2 voies veineuses ou intra-osseuse ; **hypotension permissive** (PAS 80–90) sauf traumatisme crânien\n- **Transfusion** précoce (sang total frais si seul disponible), **acide tranexamique** 1 g en 10 min puis 1 g en 8 h (dans les 3 h)\n- Oxygène, exsufflation d’un pneumothorax compressif, drainage thoracique\n- Réchauffement',
      ],
      [
        'Chirurgie',
        'Arrêter le saignement et stabiliser.',
        '- **Chirurgie d’écourtement** (« damage control ») chez le patient instable : hémostase, contrôle des contaminations, fixation externe\n- Chirurgie définitive après stabilisation',
      ],
      [
        'Mesures associées',
        'Prévenir les complications.',
        '- Analgésie (**morphine** titrée, **kétamine**), prévention du tétanos, antibiotiques des fractures ouvertes\n- Thromboprophylaxie dès que le risque hémorragique le permet\n- Transfert organisé vers un centre de traumatologie',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Dans les 3 h'],
      ['ringer-lactate', 'premiere', 'Remplissage limité'],
      ['morphine', 'premiere', 'Analgésie titrée'],
      ['ketamine', 'premiere', 'Analgésie, anesthésie (instabilité)'],
      ['oxygene', 'premiere', 'Hypoxie'],
      ['cefazoline', 'adjuvant', 'Fractures ouvertes'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Plaies'],
      ['enoxaparine', 'adjuvant', 'Thromboprophylaxie secondaire'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        description: 'Thorax, abdomen, bassin, fémurs, plaies.',
        traitement: '- Hémostase, transfusion',
        clinique: '- Tachycardie, hypotension',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Traumatisme crânien grave',
        fiche: 'traumatisme-cranien',
        description: 'Fréquent.',
        traitement: '- Neuroprotection, neurochirurgie',
        clinique: '- Glasgow bas',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Embolie graisseuse, SDRA',
        description: 'Fractures des os longs.',
        traitement: '- Oxygène, ventilation',
        clinique: '- Détresse, confusion, pétéchies',
        paraclinique: '',
      },
      {
        nom: 'Thromboses',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Immobilisation.',
        traitement: '- Anticoagulation',
        clinique: '- Œdème de membre',
        paraclinique: '- Doppler',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité concentrée sur les premières heures ; l’organisation préhospitalière et la transfusion sont déterminantes',
    urgences: ['traumatisme-cranien-grave-urgence', 'abdomen-aigu-chirurgical'],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Hypotension', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Hémorragies', 'frequent'],
      ['Déformation d’un membre', 'frequent'],
    ],
    sources: [
      'ACS TQIP — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- xABCDE, garrot, immobilisation, acide tranexamique, transfert', '- Tout polytraumatisé'],
      hgr: [
        '- Transfusion, chirurgie d’écourtement, drainage thoracique',
        '- Neurochirurgie, chirurgie vasculaire',
      ],
      tert: ['- Centre de traumatologie, réanimation', ''],
    },
    alertes: {
      'traumatisme-cranien-grave-urgence': 'Traumatisé avec Glasgow ≤ 8',
      'abdomen-aigu-chirurgical': 'Traumatisé avec abdomen douloureux et choc',
    },
    formes: [
      {
        nom: 'Polytraumatisé stable',
        type: 'commune',
        description: 'Bilan lésionnel complet.',
        terrain: '- Accident à haute énergie',
        fonctionnels: '- Douleurs multiples',
        generaux: '- Constantes stables',
        physiques: '- Lésions multiples',
        paraclinique: '- Bilan d’imagerie',
        etiologies: '- Accident de la route',
        syndromes: [],
      },
      {
        nom: 'Polytraumatisé en choc',
        type: 'gravite',
        description: 'Hémorragie active.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Hypotension, tachycardie',
        physiques: '- Pâleur, extrémités froides',
        paraclinique: '- FAST positive, lactates élevés',
        etiologies: '',
        syndromes: ['syndrome-de-choc', 'syndrome-d-hemorragie-interne'],
      },
    ],
  },

  // =================================================================== Fractures ouvertes
  {
    ...TRAUMA,
    slug: 'fractures-ouvertes',
    nom: 'Fractures ouvertes',
    resume:
      'Fracture communiquant avec une plaie : antibiotiques dans l’heure (céfazoline ± gentamicine, métronidazole si souillure tellurique), prévention du tétanos, pansement stérile et attelle, parage chirurgical dans les 24 h, stabilisation (fixateur externe), fermeture différée.',
    definition:
      'Fracture associée à une plaie mettant le foyer en communication avec l’extérieur, classée selon Gustilo-Anderson (I à III) ; à haut risque d’infection osseuse.',
    physiopathologie:
      '## Mécanismes\n- Haute énergie (accidents, armes à feu) ou ouverture de dedans en dehors\n- Contamination, dévitalisation des tissus, ischémie\n- Risque d’ostéite, de pseudarthrose, d’amputation',
    diagnostic:
      '## Évaluation\n- Plaie en regard d’une fracture, issue d’os ou de gouttelettes graisseuses\n- **Classification de Gustilo** : I (< 1 cm, propre), II (1–10 cm), III (> 10 cm, délabrement, contamination ; IIIC = lésion vasculaire)\n- État vasculaire et nerveux distal, syndrome des loges\n- Radiographies des articulations sus- et sous-jacentes',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Fracture, corps étrangers.'],
      ['premiere_intention', 'nfs', 'Hb.'],
      ['pretherapeutique', 'groupage-rai', 'Chirurgie.'],
      ['etiologique', 'glycemie', 'Terrain.'],
    ],
    scores: [],
    differentiels: [['Fracture fermée avec plaie non communicante', 'Exploration chirurgicale.']],
    etiologies: '## Mécanismes\n- Accidents de moto, chutes, armes à feu, machettes, écrasements',
    principes: [
      [
        'Urgence',
        'Prévenir l’infection.',
        '- **Antibiotiques dans l’heure** : **céfazoline** 2 g IV (ou cloxacilline) ; + **gentamicine** pour les Gustilo III ; + **métronidazole** (ou pénicilline) si souillure tellurique ou agricole ; 24–72 h\n- **Prévention du tétanos** (vaccin + immunoglobulines)\n- Photographie, pansement stérile humide, attelle, antalgiques',
      ],
      [
        'Chirurgie',
        'Nettoyer et stabiliser.',
        '- **Parage** (débridement de tous les tissus dévitalisés) et lavage abondant dans les 24 h\n- Stabilisation : **fixateur externe** (lésions sévères, contamination) ou ostéosynthèse interne si plaie propre\n- **Pas de fermeture primaire** des plaies contaminées : fermeture différée ou couverture (lambeau, greffe) à J3–J7\n- Lésion vasculaire : revascularisation urgente',
      ],
      ['Suivi', 'Dépister l’ostéite.', '- Surveillance de la plaie, de la fièvre, de la consolidation'],
    ],
    molecules: [
      ['cefazoline', 'premiere', 'Antibioprophylaxie'],
      ['gentamicine', 'premiere', 'Gustilo III'],
      ['metronidazole', 'premiere', 'Souillure tellurique'],
      ['cloxacilline', 'alternative', 'Antibioprophylaxie'],
      ['clindamycine', 'alternative', 'Allergie'],
      ['serum-immunoglobuline-antitetanique', 'premiere', 'Prévention du tétanos'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Vaccination'],
      ['morphine', 'premiere', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Ostéite chronique',
        fiche: 'osteomyelite-chronique',
        description: 'Infection du foyer.',
        traitement: '- Chirurgie, antibiotiques prolongés',
        clinique: '- Fistule, écoulement',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Gangrène gazeuse et tétanos',
        fiche: 'tetanos',
        description: 'Souillure.',
        traitement: '- Débridement, antibiotiques',
        clinique: '- Crépitation, trismus',
        paraclinique: '',
      },
      {
        nom: 'Pseudarthrose',
        description: 'Défaut de consolidation.',
        traitement: '- Reprise chirurgicale',
        clinique: '- Mobilité anormale',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Syndrome des loges',
        fiche: 'syndrome-des-loges',
        description: 'Jambe surtout.',
        traitement: '- Aponévrotomie',
        clinique: '- Douleur disproportionnée',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Infection dans 2 % (type I) à plus de 25 % (type III) ; amputations fréquentes en cas de retard',
    urgences: [],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Déformation d’un membre', 'tres_frequent'],
      ['Impotence fonctionnelle', 'tres_frequent'],
      ['Hémorragies', 'frequent'],
    ],
    sources: [
      'AO Foundation — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Antibiotiques, antitétanique, pansement, attelle, transfert', '- Toute fracture ouverte'],
      hgr: ['- Parage, fixateur externe', '- Lésion vasculaire, perte de substance'],
      tert: ['- Orthopédie, chirurgie plastique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fracture ouverte de jambe',
        type: 'commune',
        description: 'La plus fréquente.',
        terrain: '- Accident de moto',
        fonctionnels: '- Douleur, impotence',
        generaux: '',
        physiques: '- Plaie en regard du tibia, déformation',
        paraclinique: '- Fracture tibiale',
        etiologies: '',
        syndromes: [],
        examens: [['radiographie-osseuse', 'Diagnostic']],
      },
      {
        nom: 'Fracture ouverte Gustilo III',
        type: 'gravite',
        description: 'Délabrement.',
        terrain: '- Haute énergie, arme à feu',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Perte de substance, contamination, ischémie',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Col du fémur
  {
    ...TRAUMA,
    slug: 'fracture-col-du-femur',
    nom: 'Fracture du col du fémur',
    resume:
      'Fracture du sujet âgé après une chute simple (ostéoporose), ou du sujet jeune après un traumatisme violent ou sur drépanocytose : membre raccourci en rotation externe ; radiographie ; chirurgie dans les 48 h (ostéosynthèse ou prothèse), mobilisation précoce, thromboprophylaxie.',
    definition:
      'Fracture de l’extrémité supérieure du fémur entre la tête et le massif trochantérien (fractures cervicales, classification de Garden), à distinguer des fractures trochantériennes.',
    physiopathologie:
      '## Mécanismes\n- Sujet âgé : chute de sa hauteur sur os fragile\n- Sujet jeune : haute énergie\n- Vascularisation précaire de la tête : risque d’ostéonécrose et de pseudarthrose (fractures déplacées)',
    diagnostic:
      '## Clinique\n- Chute, douleur de l’aine, **impotence fonctionnelle**\n- Membre **raccourci, en rotation externe et adduction** (fractures déplacées)\n- Fractures engrenées : marche parfois possible\n\n## Imagerie\n- Radiographie du bassin de face et de la hanche de profil',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Bassin et hanche.'],
      ['pretherapeutique', 'nfs', 'Hb.'],
      ['pretherapeutique', 'creatinine', 'Fonction rénale.'],
      ['pretherapeutique', 'ionogramme', 'Bilan préopératoire.'],
      ['pretherapeutique', 'ecg', 'Bilan préopératoire.'],
      ['pretherapeutique', 'groupage-rai', 'Chirurgie.'],
      ['etiologique', 'electrophorese-hb', 'Sujet jeune (drépanocytose).'],
    ],
    scores: [],
    differentiels: [
      ['Fracture du bassin (branches pubiennes)', 'Radiographie.'],
      ['Fracture trochantérienne', 'Siège plus bas, ostéosynthèse par clou ou vis-plaque.'],
      ['arthrose', 'Douleur chronique sans traumatisme.'],
      ['osteonecrose-tete-femorale', 'Drépanocytaire, douleur progressive.'],
    ],
    etiologies:
      '## Facteurs\n- Âge, femme, ostéoporose, chutes (vue, médicaments, troubles de la marche)\n- Drépanocytose, métastases osseuses (fracture pathologique)',
    principes: [
      [
        'Avant la chirurgie',
        'Préparer.',
        '- Antalgiques (**paracétamol**, **morphine** titrée, bloc iliofascial à la **bupivacaïne**)\n- Hydratation, prévention des escarres, **énoxaparine**',
      ],
      [
        'Chirurgie dans les 48 h',
        'Restaurer la marche.',
        '- Fracture non déplacée ou sujet jeune : **ostéosynthèse** (vis)\n- Fracture déplacée du sujet âgé : **prothèse** (hémi-arthroplastie ou totale)\n- Traitement orthopédique (traction) seulement si chirurgie impossible : complications fréquentes',
      ],
      [
        'Après',
        'Récupération fonctionnelle.',
        '- Lever et marche dès J1, kinésithérapie\n- Thromboprophylaxie 4–5 semaines\n- Prévention des chutes, traitement de l’ostéoporose (calcium, vitamine D)',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'premiere', 'Douleur'],
      ['bupivacaine', 'premiere', 'Bloc iliofascial, rachianesthésie'],
      ['enoxaparine', 'premiere', 'Thromboprophylaxie'],
      ['cefazoline', 'premiere', 'Antibioprophylaxie'],
      ['calcium', 'adjuvant', 'Ostéoporose'],
      ['cholecalciferol-vitamine-d3', 'adjuvant', 'Ostéoporose'],
    ],
    complications: [
      {
        nom: 'Complications de décubitus',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Thrombose, escarres, pneumonie, confusion.',
        traitement: '- Mobilisation précoce, prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Ostéonécrose et pseudarthrose',
        fiche: 'osteonecrose-tete-femorale',
        description: 'Fractures déplacées ostéosynthésées.',
        traitement: '- Prothèse',
        clinique: '- Douleur persistante',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Infection de prothèse',
        fiche: 'infection-du-site-operatoire',
        description: 'Postopératoire.',
        traitement: '- Reprise',
        clinique: '- Fièvre, écoulement',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité à 1 an de 20 à 30 % chez le sujet âgé ; meilleure si chirurgie précoce',
    urgences: [],
    symptomes: [
      ['Impotence fonctionnelle', 'tres_frequent'],
      ['Douleurs osseuses', 'tres_frequent'],
      ['Déformation d’un membre', 'frequent'],
    ],
    sources: [
      'AAOS — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'EFORT — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Antalgiques, immobilisation, transfert', '- Toute suspicion'],
      hgr: ['- Radiographie, ostéosynthèse, hémi-arthroplastie', ''],
      tert: ['- Prothèse totale, orthogériatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fracture déplacée du sujet âgé',
        type: 'commune',
        description: 'Garden III–IV.',
        terrain: '- Femme âgée, chute simple',
        fonctionnels: '- Impossibilité de se relever',
        generaux: '',
        physiques: '- Raccourcissement, rotation externe',
        paraclinique: '- Fracture cervicale déplacée',
        etiologies: '- Ostéoporose',
        syndromes: [],
        examens: [['radiographie-osseuse', 'Diagnostic']],
      },
      {
        nom: 'Fracture du sujet jeune',
        type: 'terrain',
        description: 'Haute énergie ou drépanocytose.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Impotence',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Traumatisme violent',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Supracondylienne
  {
    ...TRAUMA,
    slug: 'fracture-supracondylienne-humerus-enfant',
    nom: 'Fracture supracondylienne de l’humérus de l’enfant',
    resume:
      'Fracture du coude la plus fréquente de l’enfant (chute sur la main) : évaluer pouls radial, nerfs et syndrome des loges ; non déplacée = plâtre ; déplacée = réduction et embrochage ; urgence vasculaire si main froide sans pouls.',
    definition:
      'Fracture de la palette humérale au-dessus des condyles, chez l’enfant de 3 à 10 ans, classée selon Gartland (I non déplacée, II partiellement, III complètement déplacée).',
    physiopathologie:
      '## Mécanismes\n- Chute sur la main bras tendu (extension, 95 %)\n- Risques : lésion de l’artère brachiale, des nerfs (médian, radial, ulnaire), syndrome des loges de l’avant-bras (contracture de Volkmann), cal vicieux (cubitus varus)',
    diagnostic:
      '## Clinique\n- Douleur, gonflement, déformation du coude, impotence\n- **Examen vasculaire** : pouls radial, couleur et chaleur de la main, recoloration\n- **Examen nerveux** : médian (pince pouce-index), radial (extension du poignet et des doigts), ulnaire (écartement des doigts)\n- Signes de syndrome des loges : douleur croissante, douleur à l’extension passive des doigts\n\n## Imagerie\n- Radiographies du coude de face et de profil',
    examens: [['confirmation', 'radiographie-osseuse', 'Coude face et profil.']],
    scores: [],
    differentiels: [
      ['Fracture du condyle latéral', 'Instable, souvent chirurgicale.'],
      ['Luxation du coude', 'Radiographie.'],
      ['Pronation douloureuse', 'Jeune enfant, traction sur la main, radiographie normale.'],
      ['maltraitance-enfant', 'Mécanisme incohérent, autres lésions.'],
    ],
    etiologies: '## Mécanisme\n- Chute d’un arbre, d’un lit, en jouant',
    principes: [
      [
        'Urgence',
        'Protéger le membre.',
        '- Antalgiques, attelle en légère flexion, surélévation\n- Main froide et sans pouls : réduction urgente au bloc ; exploration artérielle si la perfusion ne revient pas',
      ],
      [
        'Selon le déplacement',
        'Consolider en bonne position.',
        '- **Gartland I** : plâtre brachio-antébrachial 3 semaines\n- **Gartland II–III** : réduction sous anesthésie et **embrochage percutané**, plâtre ; à défaut traction (Dunlop)\n- Contrôle radiographique',
      ],
      [
        'Surveillance',
        'Dépister le syndrome des loges.',
        '- Surveillance horaire 24 h : douleur, couleur, mobilité des doigts, pouls\n- Ne pas faire de plâtre circulaire serré sur un coude gonflé',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Douleur intense'],
      ['ketamine', 'alternative', 'Sédation pour réduction'],
    ],
    complications: [
      {
        nom: 'Ischémie et syndrome de Volkmann',
        fiche: 'syndrome-des-loges',
        description: 'Lésion artérielle, syndrome des loges.',
        traitement: '- Réduction, aponévrotomie',
        clinique: '- Douleur, doigts en griffe',
        paraclinique: '',
      },
      {
        nom: 'Lésions nerveuses',
        description: 'Médian, radial, ulnaire.',
        traitement: '- Surveillance (récupération fréquente)',
        clinique: '- Déficit sensitivo-moteur',
        paraclinique: '',
      },
      {
        nom: 'Cubitus varus',
        description: 'Cal vicieux.',
        traitement: '- Ostéotomie',
        clinique: '- Déformation en « crosse de fusil »',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent si réduction correcte et absence de complication vasculaire',
    urgences: [],
    symptomes: [
      ['Impotence fonctionnelle', 'tres_frequent'],
      ['Déformation d’un membre', 'frequent'],
      ['Douleurs osseuses', 'tres_frequent'],
      ['Œdème d’un membre', 'frequent'],
    ],
    sources: [
      'AAOS — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'AO Foundation — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Attelle, antalgiques, examen vasculo-nerveux, transfert', '- Toute fracture du coude'],
      hgr: ['- Radiographie, plâtre, réduction et embrochage', '- Lésion vasculaire'],
      tert: ['- Orthopédie pédiatrique, chirurgie vasculaire', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fracture non déplacée (Gartland I)',
        type: 'commune',
        description: 'Plâtre.',
        terrain: '- Enfant de 5 à 8 ans',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Coude gonflé, pouls présent',
        paraclinique: '- Fracture non déplacée',
        etiologies: '- Chute sur la main',
        syndromes: [],
        examens: [['radiographie-osseuse', 'Diagnostic']],
      },
      {
        nom: 'Fracture déplacée avec main sans pouls',
        type: 'gravite',
        description: 'Urgence vasculaire.',
        terrain: '',
        fonctionnels: '- Douleur intense',
        generaux: '',
        physiques: '- Déformation, main froide, pouls absent',
        paraclinique: '- Gartland III',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Syndrome des loges
  {
    ...TRAUMA,
    slug: 'syndrome-des-loges',
    nom: 'Syndrome des loges',
    resume:
      'Augmentation de pression dans une loge musculaire inextensible (jambe, avant-bras) après fracture, écrasement, plâtre serré, morsure de serpent, reperfusion : douleur disproportionnée, douleur à l’étirement passif ; ouvrir plâtre et pansements, aponévrotomie en urgence (< 6 h).',
    definition:
      'Élévation de la pression tissulaire dans une loge ostéo-aponévrotique fermée, compromettant la perfusion des muscles et des nerfs, avec risque de nécrose musculaire et de séquelles définitives.',
    physiopathologie:
      '## Mécanismes\n- Augmentation du contenu (œdème, hématome, reperfusion) ou diminution du contenant (plâtre, pansement serré)\n- Collapsus veineux puis ischémie musculaire et nerveuse ; nécrose en 4 à 6 h\n- Rhabdomyolyse, insuffisance rénale',
    diagnostic:
      '## Clinique (diagnostic clinique)\n- **Douleur disproportionnée**, croissante, non soulagée par les antalgiques\n- **Douleur à l’étirement passif** des muscles de la loge (le signe le plus précoce)\n- Loge tendue, dure\n- Paresthésies, puis déficit moteur ; le pouls reste souvent présent (signe tardif s’il disparaît)\n\n## Examens\n- Mesure de pression intra-compartimentale si disponible\n- CPK, créatinine, kaliémie (rhabdomyolyse)',
    examens: [
      ['premiere_intention', 'creatinine', 'Rhabdomyolyse.'],
      ['premiere_intention', 'ionogramme', 'Hyperkaliémie.'],
      ['premiere_intention', 'bandelette-urinaire', 'Myoglobinurie (sang sans hématies).'],
    ],
    scores: [],
    differentiels: [
      ['thrombose-veineuse-profonde', 'Œdème sans loge tendue, contexte.'],
      ['Ischémie artérielle aiguë', 'Pouls absents, membre froid.'],
      ['fasciite-necrosante', 'Fièvre, nécrose cutanée.'],
    ],
    etiologies:
      '## Causes\n- Fractures (tibia, avant-bras, supracondylienne), écrasements, brûlures circulaires\n- Plâtres ou pansements serrés, reperfusion après ischémie\n- Envenimations, injections, positions prolongées (coma)',
    principes: [
      [
        'Mesures immédiates',
        'Lever la compression.',
        '- **Ouvrir le plâtre et les pansements** jusqu’à la peau\n- Membre à hauteur du cœur (ni surélevé ni déclive), oxygène, maintien de la PA',
      ],
      [
        'Aponévrotomie',
        'Sauver le membre.',
        '- **Fasciotomie** de toutes les loges en urgence si les signes persistent\n- Plaies laissées ouvertes, fermeture différée ou greffe\n- Débridement des muscles nécrosés',
      ],
      [
        'Rhabdomyolyse',
        'Protéger le rein.',
        '- Hydratation abondante (diurèse ≥ 200 mL/h chez l’adulte), traitement de l’hyperkaliémie',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Hydratation (rhabdomyolyse)'],
      ['chlorure-de-sodium-0-9', 'alternative', 'Hydratation'],
      ['morphine', 'premiere', 'Douleur'],
      ['ketamine', 'adjuvant', 'Anesthésie'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie'],
    ],
    complications: [
      {
        nom: 'Contracture ischémique (Volkmann)',
        description: 'Nécrose musculaire.',
        traitement: '- Rééducation, chirurgie',
        clinique: '- Griffe, raideur',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Rhabdomyolyse.',
        traitement: '- Hydratation, dialyse',
        clinique: '- Urines foncées',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Hyperkaliémie',
        fiche: 'dyskaliemies',
        description: 'Lyse musculaire.',
        traitement: '- Calcium, insuline-glucose',
        clinique: '- Arythmies',
        paraclinique: '- Kaliémie',
      },
      {
        nom: 'Amputation',
        description: 'Nécrose étendue.',
        traitement: '- Chirurgie',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération complète si fasciotomie dans les 6 h ; séquelles définitives au-delà',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Œdème d’un membre', 'tres_frequent'],
      ['Douleurs osseuses', 'tres_frequent'],
      ['Déficit moteur', 'occasionnel'],
      ['Urines foncées', 'occasionnel'],
    ],
    sources: [
      'AAOS — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'AO Foundation — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Ouvrir le plâtre, reconnaître, transfert immédiat', '- Toute suspicion'],
      hgr: ['- Fasciotomie, hydratation', ''],
      tert: ['- Réanimation, dialyse, chirurgie plastique', ''],
    },
    alertes: { 'hyperkaliemie-menacante': 'Écrasement de membre avec urines foncées ou faiblesse' },
    formes: [
      {
        nom: 'Syndrome des loges de jambe',
        type: 'commune',
        description: 'Après fracture du tibia.',
        terrain: '- Fracture de jambe, plâtre',
        fonctionnels: '- Douleur croissante',
        generaux: '',
        physiques: '- Loge tendue, douleur à l’extension passive des orteils',
        paraclinique: '',
        etiologies: '- Œdème post-traumatique',
        syndromes: [],
      },
      {
        nom: 'Syndrome d’écrasement (crush)',
        type: 'gravite',
        description: 'Rhabdomyolyse.',
        terrain: '- Effondrement, ensevelissement',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Membres tendus',
        paraclinique: '- Hyperkaliémie, myoglobinurie',
        etiologies: '',
        syndromes: ['syndrome-uremique'],
      },
    ],
  },

  // =================================================================== Plaies par arme à feu
  {
    ...TRAUMA,
    slug: 'plaies-par-arme-a-feu',
    nom: 'Plaies par arme à feu',
    resume:
      'Fréquentes dans les zones de conflit : xABCDE, garrot, triage ; parage chirurgical large et retardé de la fermeture (principes du CICR), antibiotiques (pénicilline ± métronidazole), prévention du tétanos ; ne pas rechercher systématiquement les projectiles.',
    definition:
      'Lésions causées par des projectiles (balles, éclats), dont la gravité dépend de l’énergie transmise, de la trajectoire et des organes traversés.',
    physiopathologie:
      '## Mécanismes\n- Cavité permanente (trajet) et temporaire (onde de choc) : dévitalisation tissulaire à distance\n- Contamination (débris, vêtements, terre)\n- Fractures comminutives, lésions vasculaires et viscérales',
    diagnostic:
      '## Évaluation\n- Triage en cas d’afflux massif de blessés\n- Orifices d’entrée et de sortie (examiner tout le corps), trajet probable\n- État hémodynamique, vasculaire et nerveux\n- Radiographies (projectiles, fractures), FAST',
    examens: [
      ['premiere_intention', 'radiographie-osseuse', 'Fractures, projectiles.'],
      ['premiere_intention', 'radiographie-thoracique', 'Plaies thoraciques.'],
      ['premiere_intention', 'echographie-abdominale', 'FAST.'],
      ['premiere_intention', 'nfs', 'Hb.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
    ],
    scores: ['glasgow', 'index-de-choc'],
    differentiels: [],
    etiologies: '## Contextes\n- Conflits armés (Est de la RDC), criminalité, accidents de chasse',
    principes: [
      [
        'Urgence',
        'Contrôler l’hémorragie.',
        '- **Garrot** ou compression, xABCDE, transfusion, **acide tranexamique**\n- Plaies abdominales ou thoraciques : laparotomie ou drainage selon la fiche dédiée',
      ],
      [
        'Parage des plaies des membres (principes CICR)',
        'Prévenir l’infection.',
        '- **Parage** : excision de tous les tissus morts et contaminés, lavage abondant, fasciotomie si besoin\n- **Pas de fermeture primaire** : pansement, fermeture primaire différée à J4–J5\n- Fractures : immobilisation (plâtre ou fixateur externe), pas d’ostéosynthèse interne en urgence\n- Projectiles retirés seulement s’ils sont accessibles ou dangereux',
      ],
      [
        'Médicaments',
        'Compléter.',
        '- **Benzylpénicilline** ou ampicilline (± **métronidazole** si plaie souillée, gentamicine si fracture ou abdomen)\n- **Prévention du tétanos**\n- Analgésie (**kétamine**, **morphine**)',
      ],
    ],
    molecules: [
      ['benzylpenicilline-penicilline-g', 'premiere', 'Antibioprophylaxie'],
      ['metronidazole', 'premiere', 'Plaies souillées'],
      ['gentamicine', 'adjuvant', 'Fractures, abdomen'],
      ['ceftriaxone', 'alternative', 'Antibioprophylaxie'],
      ['acide-tranexamique', 'premiere', 'Hémorragie'],
      ['ketamine', 'premiere', 'Analgésie, anesthésie'],
      ['morphine', 'premiere', 'Analgésie'],
      ['serum-immunoglobuline-antitetanique', 'premiere', 'Tétanos'],
    ],
    complications: [
      {
        nom: 'Infection et gangrène gazeuse',
        fiche: 'fasciite-necrosante',
        description: 'Parage insuffisant.',
        traitement: '- Reparage, antibiotiques',
        clinique: '- Crépitation, odeur',
        paraclinique: '',
      },
      {
        nom: 'Lésions vasculaires et amputation',
        description: 'Artère touchée.',
        traitement: '- Réparation, shunt temporaire',
        clinique: '- Membre froid',
        paraclinique: '',
      },
      {
        nom: 'Ostéite',
        fiche: 'osteomyelite-chronique',
        description: 'Fractures ouvertes.',
        traitement: '- Chirurgie',
        clinique: '- Fistule',
        paraclinique: '',
      },
      {
        nom: 'Stress post-traumatique',
        description: 'Contexte de violence.',
        traitement: '- Soutien psychologique',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Dépend du délai, des organes touchés et de la qualité du parage',
    urgences: ['abdomen-aigu-chirurgical', 'traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Hémorragies', 'tres_frequent'],
      ['Hypotension', 'frequent'],
      ['Impotence fonctionnelle', 'frequent'],
    ],
    sources: [
      'ACS TQIP — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Garrot, compression, antibiotiques, antitétanique, transfert', '- Tout blessé par balle'],
      hgr: ['- Parage, chirurgie d’urgence, transfusion', ''],
      tert: ['- Chirurgie de guerre, réanimation, chirurgie reconstructrice', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Blessé par balle au tronc avec choc',
      'traumatisme-cranien-grave-urgence': 'Blessé par balle à la tête',
    },
    formes: [
      {
        nom: 'Plaie par balle d’un membre',
        type: 'commune',
        description: 'Parage et fermeture différée.',
        terrain: '- Conflit armé',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Orifices, fracture associée',
        paraclinique: '- Projectile',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Plaie par balle du tronc',
        type: 'gravite',
        description: 'Hémorragie interne.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Défense, détresse respiratoire',
        paraclinique: '- FAST positive, hémothorax',
        etiologies: '',
        syndromes: ['syndrome-de-choc', 'syndrome-d-hemorragie-interne'],
      },
    ],
  },
];
