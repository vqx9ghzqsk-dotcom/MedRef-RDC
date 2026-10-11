'use strict';

/**
 * Lot 19 (pathologies obstétricales) — avortement septique, mort fœtale in utero, placenta
 * prævia, hématome rétroplacentaire. Rédigé par IA (OMS, FIGO, RCOG, ACOG) : à valider.
 */

const OBS = { departement: 'gynecologie-obstetrique', specialite: 'Pathologies obstétricales' };

module.exports = [
  // =================================================================== Avortement septique
  {
    ...OBS,
    slug: 'avortement-septique',
    nom: 'Avortement septique',
    resume:
      'Infection de l’utérus après un avortement (souvent provoqué à risque) : fièvre, pertes fétides, utérus douloureux, choc ; réanimation, antibiotiques IV larges dans l’heure, évacuation utérine, laparotomie si perforation ou nécrose ; prévention du tétanos.',
    definition:
      'Infection utérine (endométrite, myométrite) pouvant s’étendre au pelvis et au sang, compliquant un avortement spontané ou provoqué, première cause de décès lié aux avortements à risque.',
    physiopathologie:
      '## Mécanismes\n- Rétention de produits de conception, manœuvres non stériles, corps étrangers\n- Germes polymicrobiens : streptocoques, entérobactéries, anaérobies, *Clostridium*\n- Évolution : pelvipéritonite, sepsis, choc septique, CIVD, insuffisance rénale',
    diagnostic:
      '## Clinique\n- Fièvre, frissons, douleurs pelviennes, **pertes vaginales fétides**, saignement\n- Utérus augmenté et douloureux, col ouvert, lésions ou corps étranger au spéculum\n- **Signes de gravité** : choc, oligurie, ictère, troubles de conscience, crépitation (gangrène gazeuse), défense abdominale (perforation)',
    examens: [
      ['premiere_intention', 'hemocultures', 'Avant les antibiotiques.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose, anémie, thrombopénie.'],
      ['gravite', 'lactates', 'Choc septique.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['gravite', 'hemostase', 'CIVD.'],
      ['premiere_intention', 'echographie-pelvienne', 'Rétention, collection.'],
      ['gravite', 'abdomen-sans-preparation', 'Pneumopéritoine, corps étranger.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion, rhésus.'],
    ],
    scores: ['qsofa', 'index-de-choc'],
    differentiels: [
      ['avortement-incomplet-soins-apres-avortement', 'Sans infection.'],
      ['grossesse-extra-uterine', 'Utérus vide, masse annexielle.'],
      ['paludisme-grave', 'Fièvre, TDR positif.'],
    ],
    etiologies:
      '## Facteurs\n- Avortement provoqué clandestin (instruments, plantes, produits caustiques), rétention, absence de soins après avortement',
    principes: [
      [
        'Réanimation',
        'Traiter le choc septique.',
        '- 2 voies veineuses, **Ringer lactate** 30 mL/kg, oxygène, sonde urinaire\n- Noradrénaline si choc persistant, transfusion selon l’Hb',
      ],
      [
        'Antibiotiques dans l’heure',
        'Contrôler l’infection.',
        '- **Ampicilline** 2 g IV toutes les 6 h + **gentamicine** 5 mg/kg/j + **métronidazole** 500 mg IV toutes les 8 h\n- Ou ceftriaxone + métronidazole\n- Durée : jusqu’à 48 h d’apyrexie puis relais oral (7–14 jours au total)',
      ],
      [
        'Contrôle de la source',
        'Évacuer.',
        '- **Évacuation utérine** (AMIU) dès le début des antibiotiques\n- **Laparotomie** si perforation, abcès, nécrose utérine, gangrène gazeuse (hystérectomie parfois nécessaire)\n- Prévention du tétanos (immunoglobulines, vaccin)',
      ],
      ['Après', 'Prévenir.', '- Contraception, conseil, anti-D si rhésus négatif'],
    ],
    molecules: [
      ['ampicilline', 'premiere', 'Association'],
      ['gentamicine', 'premiere', 'Association'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['ceftriaxone', 'alternative', 'Avec métronidazole'],
      ['ringer-lactate', 'premiere', 'Réanimation'],
      ['noradrenaline', 'deuxieme', 'Choc septique'],
      ['misoprostol', 'adjuvant', 'Évacuation utérine'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Prévention du tétanos'],
    ],
    complications: [
      {
        nom: 'Choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Dissémination.',
        traitement: '- Réanimation, antibiotiques',
        clinique: '- Hypotension, marbrures',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Péritonite et perforation',
        fiche: 'peritonite-aigue',
        description: 'Manœuvres.',
        traitement: '- Laparotomie',
        clinique: '- Défense',
        paraclinique: '- ASP',
      },
      {
        nom: 'Insuffisance rénale et CIVD',
        fiche: 'insuffisance-renale-aigue',
        description: 'Sepsis.',
        traitement: '- Réanimation, dialyse',
        clinique: '- Oligurie, saignements',
        paraclinique: '- Créatinine, plaquettes',
      },
      {
        nom: 'Stérilité',
        description: 'Lésions tubaires, hystérectomie.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée en cas de retard ; évitable par l’accès à l’avortement sécurisé et aux soins après avortement',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Douleur pelvienne', 'tres_frequent'],
      ['Leucorrhées', 'frequent'],
      ['Saignement vaginal', 'frequent'],
      ['Hypotension', 'occasionnel'],
    ],
    sources: [
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Première dose d’antibiotiques, remplissage, transfert immédiat', '- Toute suspicion'],
      hgr: ['- Antibiotiques IV, évacuation, laparotomie', '- Défaillances d’organes'],
      tert: ['- Réanimation', ''],
    },
    alertes: { 'choc-septique': 'Femme fébrile après un avortement avec hypotension ou confusion' },
    formes: [
      {
        nom: 'Endométrite post-abortum',
        type: 'commune',
        description: 'Infection limitée à l’utérus.',
        terrain: '- Avortement récent',
        fonctionnels: '- Douleurs pelviennes',
        generaux: '- Fièvre',
        physiques: '- Utérus douloureux, pertes fétides',
        paraclinique: '- Hyperleucocytose',
        etiologies: '- Polymicrobienne',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Avortement septique grave',
        type: 'gravite',
        description: 'Choc, perforation, gangrène.',
        terrain: '- Manœuvres non stériles',
        fonctionnels: '- Douleur intense',
        generaux: '- Choc, ictère',
        physiques: '- Défense, crépitation',
        paraclinique: '- CIVD, insuffisance rénale',
        etiologies: '- Clostridium, anaérobies',
        syndromes: ['syndrome-de-choc', 'syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== MFIU
  {
    ...OBS,
    slug: 'mort-foetale-in-utero',
    nom: 'Mort fœtale in utero',
    resume:
      'Arrêt de l’activité cardiaque fœtale après 22 SA : diminution des mouvements actifs, absence de BCF ; confirmation échographique ; recherche de la cause (HTA, paludisme, syphilis, HRP, diabète) et des troubles de la coagulation ; déclenchement (misoprostol) ; accompagnement du deuil.',
    definition:
      'Décès du fœtus in utero après 22 SA (ou poids ≥ 500 g), avant le début du travail (mort ante partum) ou pendant le travail (mort intra partum).',
    physiopathologie:
      '## Causes\n- Insuffisance placentaire (pré-éclampsie, HTA, drépanocytose), hématome rétroplacentaire\n- Infections : paludisme, syphilis, chorioamniotite\n- Diabète, malformations, accidents funiculaires, travail prolongé (intra partum)\n- Rétention prolongée (> 4 semaines) : risque de CIVD',
    diagnostic:
      '## Clinique\n- Disparition des mouvements actifs fœtaux, régression des signes de grossesse\n- Absence de BCF au stéthoscope de Pinard ou au Doppler\n\n## Confirmation\n- **Échographie** : absence d’activité cardiaque\n\n## Bilan\n- PA, protéinurie, TDR, syphilis, glycémie, NFS, plaquettes, hémostase (fibrinogène), groupe-rhésus',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Absence d’activité cardiaque.'],
      ['premiere_intention', 'hemostase', 'CIVD (fibrinogène).'],
      ['premiere_intention', 'nfs', 'Plaquettes, anémie.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['etiologique', 'bandelette-urinaire', 'Protéinurie.'],
      ['premiere_intention', 'groupage-rai', 'Rhésus.'],
    ],
    scores: [],
    differentiels: [
      ['Diminution physiologique des mouvements', 'BCF présents.'],
      ['hematome-retroplacentaire', 'Cause fréquente avec douleur et utérus dur.'],
    ],
    etiologies:
      '## Facteurs\n- Absence de CPN, HTA, pré-éclampsie, paludisme, syphilis, anémie sévère\n- Travail prolongé ou dystocique non surveillé',
    principes: [
      [
        'Évacuation utérine',
        'Accoucher en sécurité.',
        '- Expectative possible quelques jours si état maternel stable et hémostase normale\n- **Déclenchement** : **misoprostol** (dose selon l’âge gestationnel : 25–50 µg vaginal toutes les 4 h au 3e trimestre ; 200–400 µg avant 28 SA), ± **mifépristone** 200 mg 24–48 h avant\n- Utérus cicatriciel : prudence (ballonnet, ocytocine, faibles doses)\n- Césarienne seulement pour une indication maternelle',
      ],
      [
        'Complications',
        'Prévenir.',
        '- CIVD : plasma, plaquettes, fibrinogène selon disponibilité\n- Prévention de l’hémorragie de la délivrance (ocytocine)\n- **Anti-D** si rhésus négatif',
      ],
      [
        'Accompagnement',
        'Soutenir la mère.',
        '- Annonce, possibilité de voir l’enfant, soutien psychologique, inhibition de la lactation\n- Recherche de la cause, contraception, conseil préconceptionnel',
      ],
    ],
    molecules: [
      ['misoprostol', 'premiere', 'Déclenchement'],
      ['mifepristone', 'adjuvant', 'Avant le misoprostol'],
      ['ocytocine', 'premiere', 'Prévention de l’hémorragie'],
      ['immunoglobulines-anti-d', 'premiere', 'Rhésus négatif'],
      ['acide-tranexamique', 'adjuvant', 'Hémorragie'],
    ],
    complications: [
      {
        nom: 'CIVD',
        description: 'Rétention prolongée, HRP.',
        traitement: '- Évacuation, produits sanguins',
        clinique: '- Saignements',
        paraclinique: '- Fibrinogène, plaquettes',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Atonie, CIVD.',
        traitement: '- Utérotoniques, transfusion',
        clinique: '- Saignement',
        paraclinique: '- Hb',
      },
      {
        nom: 'Infection',
        description: 'Rupture prolongée.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pronostic maternel si l’évacuation est sûre ; prévention des récidives par la recherche de la cause',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Saignement vaginal', 'occasionnel'],
      ['Douleur pelvienne', 'occasionnel'],
    ],
    sources: [
      'FIGO — recommandations de pratique clinique',
      'RCOG — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Absence de BCF : transfert pour confirmation et déclenchement', '- Toute suspicion'],
      hgr: ['- Échographie, bilan, déclenchement, prise en charge de la CIVD', ''],
      tert: ['- Examen fœto-placentaire', ''],
    },
    alertes: {
      'hemorragie-du-post-partum-urgence': 'Saignement abondant lors de l’expulsion d’un fœtus mort',
    },
    formes: [
      {
        nom: 'MFIU ante partum',
        type: 'commune',
        description: 'Arrêt des mouvements.',
        terrain: '- 3e trimestre',
        fonctionnels: '- Plus de mouvements fœtaux',
        generaux: '',
        physiques: '- BCF absents',
        paraclinique: '- Absence d’activité cardiaque',
        etiologies: '- Insuffisance placentaire, infection',
        syndromes: [],
        examens: [['echographie-obstetricale', 'Confirmation']],
      },
      {
        nom: 'MFIU avec CIVD',
        type: 'gravite',
        description: 'Rétention prolongée.',
        terrain: '- MFIU > 4 semaines, HRP',
        fonctionnels: '',
        generaux: '',
        physiques: '- Saignements, ecchymoses',
        paraclinique: '- Fibrinogène bas',
        etiologies: '',
        syndromes: ['syndrome-hemorragique'],
      },
    ],
  },

  // =================================================================== Placenta prævia
  {
    ...OBS,
    slug: 'placenta-praevia',
    nom: 'Placenta prævia',
    resume:
      'Saignement rouge, indolore, du 3e trimestre : placenta inséré sur le segment inférieur ; pas de toucher vaginal ; échographie ; repos, corticoïdes, transfusion ; césarienne en cas d’hémorragie grave ou à 36–37 SA si recouvrant.',
    definition:
      'Insertion de tout ou partie du placenta sur le segment inférieur de l’utérus, recouvrant ou atteignant l’orifice interne du col (prævia) ou situé à moins de 2 cm de celui-ci (bas inséré).',
    physiopathologie:
      '## Mécanismes\n- Décollement placentaire lors de la formation du segment inférieur : saignement maternel\n- Facteurs : utérus cicatriciel (césariennes), multiparité, curetages, grossesse multiple, tabac\n- Risque d’**accretisme placentaire** sur cicatrice de césarienne',
    diagnostic:
      '## Clinique\n- **Hémorragie rouge vif, indolore**, spontanée, récidivante, au 3e trimestre\n- **Utérus souple**, indolore ; présentation haute ou anormale\n- **Pas de toucher vaginal** (risque d’hémorragie massive) ; spéculum prudent\n- BCF généralement normaux\n\n## Confirmation\n- **Échographie** (endovaginale prudente si disponible)',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Localisation placentaire, accretisme.'],
      ['premiere_intention', 'nfs', 'Hb.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion, rhésus.'],
      ['premiere_intention', 'hemostase', 'Hémorragie abondante.'],
      ['suivi', 'cardiotocographie', 'Bien-être fœtal.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['hematome-retroplacentaire', 'Douleur, utérus dur, HTA, BCF anormaux.'],
      ['Rupture utérine', 'Douleur, utérus cicatriciel, choc, fœtus palpable.'],
      ['Lésions du col', 'Spéculum.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Césariennes antérieures, multiparité, âge > 35 ans, curetages, grossesse multiple',
    principes: [
      [
        'Hémorragie grave',
        'Sauver la mère.',
        '- Réanimation : 2 voies veineuses, remplissage, **transfusion**\n- **Césarienne** en urgence quel que soit le terme\n- Prévention et traitement de l’hémorragie du post-partum (ocytocine, acide tranexamique, gestes chirurgicaux)',
      ],
      [
        'Saignement modéré avant 37 SA',
        'Gagner du temps.',
        '- Hospitalisation, repos, surveillance, correction de l’anémie\n- **Corticoïdes anténatals** (24–34 SA), anti-D si rhésus négatif\n- Tocolyse discutée (nifédipine) si contractions',
      ],
      [
        'Accouchement',
        'Planifier.',
        '- Placenta recouvrant : **césarienne programmée** à 36–37 SA dans une structure avec banque de sang\n- Bas inséré (> 2 cm de l’orifice) : voie basse possible\n- Suspicion d’accretisme : centre spécialisé, préparation à l’hystérectomie',
      ],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Corticoïdes anténatals'],
      ['ocytocine', 'premiere', 'Prévention de l’hémorragie'],
      ['acide-tranexamique', 'premiere', 'Hémorragie'],
      ['immunoglobulines-anti-d', 'premiere', 'Rhésus négatif'],
      ['nifedipine', 'alternative', 'Tocolyse'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        description: 'Hémorragie massive.',
        traitement: '- Transfusion, césarienne',
        clinique: '- Pâleur, tachycardie',
        paraclinique: '- Hb',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Segment inférieur peu contractile.',
        traitement: '- Utérotoniques, chirurgie',
        clinique: '- Saignement',
        paraclinique: '',
      },
      {
        nom: 'Prématurité',
        fiche: 'prematurite',
        description: 'Extraction précoce.',
        traitement: '- Corticoïdes, soins néonatals',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Placenta accreta',
        description: 'Sur cicatrice de césarienne.',
        traitement: '- Hystérectomie',
        clinique: '- Hémorragie à la délivrance',
        paraclinique: '- Échographie Doppler',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec une césarienne programmée et du sang disponible ; mortalité maternelle élevée sinon',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Pâleur', 'frequent'],
      ['Hypotension', 'occasionnel'],
    ],
    sources: [
      'RCOG — recommandations de pratique clinique',
      'FIGO — recommandations de pratique clinique',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- Pas de toucher vaginal, voie veineuse, remplissage, transfert immédiat',
        '- Tout saignement du 3e trimestre',
      ],
      hgr: ['- Échographie, transfusion, césarienne', '- Accretisme'],
      tert: ['- Chirurgie de l’accretisme', ''],
    },
    alertes: { 'hemorragie-du-post-partum-urgence': 'Saignement rouge abondant au 3e trimestre' },
    formes: [
      {
        nom: 'Placenta prævia hémorragique',
        type: 'commune',
        description: 'Saignement indolore.',
        terrain: '- Multipare, utérus cicatriciel',
        fonctionnels: '- Saignement rouge sans douleur',
        generaux: '',
        physiques: '- Utérus souple, BCF normaux',
        paraclinique: '- Placenta bas inséré',
        etiologies: '',
        syndromes: [],
        examens: [['echographie-obstetricale', 'Localisation']],
      },
      {
        nom: 'Hémorragie massive',
        type: 'gravite',
        description: 'Choc.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Saignement abondant',
        paraclinique: '- Hb effondrée',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== HRP
  {
    ...OBS,
    slug: 'hematome-retroplacentaire',
    nom: 'Hématome rétroplacentaire',
    resume:
      'Décollement prématuré du placenta normalement inséré : douleur abdominale brutale, utérus dur « de bois », saignement noirâtre, choc, souffrance ou mort fœtale, CIVD ; réanimation, transfusion, accouchement en urgence (césarienne si fœtus vivant).',
    definition:
      'Décollement prématuré, partiel ou total, d’un placenta normalement inséré, avant l’expulsion du fœtus, avec formation d’un hématome entre placenta et paroi utérine.',
    physiopathologie:
      '## Mécanismes\n- Rupture des vaisseaux utéro-placentaires : hématome, décollement\n- Hypoxie fœtale, mort fœtale\n- Passage de thromboplastines : **CIVD**\n- Hémorragie souvent sous-estimée (saignement caché)',
    diagnostic:
      '## Clinique\n- **Douleur abdominale brutale**, intense, permanente\n- **Utérus dur, contracturé** (« de bois »), augmenté de volume\n- Saignement noirâtre peu abondant (sans rapport avec la gravité)\n- Choc, HTA (pré-éclampsie) ou hypotension\n- BCF anormaux ou absents\n\n## Biologie\n- NFS, plaquettes, **fibrinogène**, TP, test de coagulation au lit, groupe',
    examens: [
      ['premiere_intention', 'hemostase', 'CIVD (fibrinogène, TP).'],
      ['premiere_intention', 'test-de-coagulation-au-lit', 'Coagulation au lit si laboratoire indisponible.'],
      ['premiere_intention', 'nfs', 'Hb, plaquettes.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'cardiotocographie', 'Souffrance fœtale.'],
      ['deuxieme_intention', 'echographie-obstetricale', 'Vitalité (l’hématome n’est pas toujours visible).'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie (pré-éclampsie).'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['placenta-praevia', 'Saignement rouge indolore, utérus souple.'],
      ['Rupture utérine', 'Utérus cicatriciel, travail, fœtus sous la peau.'],
      ['appendicite-aigue', 'Douleur localisée, pas de contracture utérine.'],
    ],
    etiologies:
      '## Facteurs de risque\n- **Pré-éclampsie**, HTA, antécédent d’HRP\n- Traumatisme abdominal, cocaïne, tabac\n- Rupture des membranes avec hydramnios, grossesse multiple',
    principes: [
      [
        'Réanimation',
        'Traiter le choc et la CIVD.',
        '- 2 voies veineuses, remplissage, **transfusion** (culots, plasma, plaquettes), **acide tranexamique**\n- Surveillance de la diurèse, oxygène',
      ],
      [
        'Accouchement en urgence',
        'Évacuer l’utérus.',
        '- **Fœtus vivant** : césarienne en urgence (sauf accouchement imminent)\n- **Fœtus mort** : voie basse privilégiée (rupture des membranes, ocytocine), césarienne si état maternel instable\n- Contrôle tensionnel si pré-éclampsie, sulfate de magnésium si signes de gravité',
      ],
      [
        'Post-partum',
        'Prévenir l’hémorragie.',
        '- Utérotoniques (**ocytocine**), surveillance de l’hémorragie et de la fonction rénale\n- Anti-D si rhésus négatif',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Hémorragie'],
      ['ocytocine', 'premiere', 'Utérotonique'],
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['sulfate-de-magnesium', 'adjuvant', 'Pré-éclampsie sévère associée'],
      ['immunoglobulines-anti-d', 'adjuvant', 'Rhésus négatif'],
      ['misoprostol', 'adjuvant', 'Hémorragie du post-partum'],
    ],
    complications: [
      {
        nom: 'CIVD',
        description: 'Consommation des facteurs.',
        traitement: '- Évacuation, produits sanguins',
        clinique: '- Saignements diffus',
        paraclinique: '- Fibrinogène bas',
      },
      {
        nom: 'Mort fœtale',
        fiche: 'mort-foetale-in-utero',
        description: 'Décollement étendu.',
        traitement: '- Évacuation',
        clinique: '- BCF absents',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Utérus de Couvelaire, CIVD.',
        traitement: '- Utérotoniques, chirurgie',
        clinique: '- Saignement',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Choc, CIVD.',
        traitement: '- Réanimation, dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité fœtale élevée ; pronostic maternel lié à la rapidité de la réanimation et de l’évacuation',
    urgences: ['hemorragie-du-post-partum-urgence', 'eclampsie'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Saignement vaginal', 'frequent'],
      ['Hypotension', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      'RCOG — recommandations de pratique clinique',
      'WHO recommendations for the prevention and treatment of postpartum haemorrhage',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- Reconnaître (douleur, utérus dur), voie veineuse, remplissage, transfert immédiat',
        '- Toute suspicion',
      ],
      hgr: ['- Transfusion, césarienne, prise en charge de la CIVD', ''],
      tert: ['- Réanimation', ''],
    },
    alertes: {
      'hemorragie-du-post-partum-urgence':
        'Femme enceinte avec douleur abdominale brutale, utérus dur et malaise',
      eclampsie: 'HRP chez une femme hypertendue avec céphalées',
    },
    formes: [
      {
        nom: 'HRP avec fœtus vivant',
        type: 'commune',
        description: 'Décollement partiel.',
        terrain: '- Pré-éclampsie',
        fonctionnels: '- Douleur brutale',
        generaux: '',
        physiques: '- Utérus dur, BCF anormaux',
        paraclinique: '- Souffrance fœtale',
        etiologies: '- HTA',
        syndromes: ['syndrome-de-pre-eclampsie'],
      },
      {
        nom: 'HRP avec mort fœtale et CIVD',
        type: 'gravite',
        description: 'Décollement étendu.',
        terrain: '',
        fonctionnels: '- Douleur intense',
        generaux: '- Choc',
        physiques: '- Utérus de bois, BCF absents',
        paraclinique: '- Fibrinogène effondré',
        etiologies: '',
        syndromes: ['syndrome-de-choc', 'syndrome-hemorragique'],
      },
    ],
  },
];
