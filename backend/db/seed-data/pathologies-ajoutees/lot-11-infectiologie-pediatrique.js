'use strict';

/**
 * Lot 11 (infectiologie pédiatrique) — paludisme grave et simple de l'enfant, rougeole,
 * coqueluche, diphtérie. Rédigé par IA (OMS, PNLP, PEV, PCIME) : à valider.
 */

const INFPED = { departement: 'pediatrie', specialite: 'Infectiologie pédiatrique' };

module.exports = [
  // =================================================================== Paludisme grave enfant
  {
    ...INFPED,
    slug: 'paludisme-grave-enfant',
    nom: 'Paludisme grave de l’enfant',
    resume:
      'Première cause de décès de l’enfant en RDC : prostration, convulsions, détresse respiratoire, anémie sévère, hypoglycémie ; artésunate IV/IM (rectal avant transfert), glucose, transfusion, puis ACT 3 jours.',
    definition:
      'Paludisme à *Plasmodium falciparum* avec au moins un critère de gravité OMS chez l’enfant : troubles de conscience, prostration, convulsions répétées, détresse respiratoire (acidose), anémie sévère, hypoglycémie, ictère, hémoglobinurie, saignements, choc, insuffisance rénale, hyperparasitémie.',
    physiopathologie:
      '## Mécanismes\n- Séquestration des hématies parasitées dans la microcirculation (cerveau, rein)\n- Hémolyse et dysérythropoïèse : anémie sévère\n- Acidose lactique, hypoglycémie (consommation, quinine)\n- Formes de l’enfant : anémie sévère (< 2 ans) et neuropaludisme (2–5 ans)',
    diagnostic:
      '## Critères de gravité chez l’enfant\n- **Prostration** (ne peut pas s’asseoir ou téter), **coma** (score de Blantyre ≤ 2)\n- **Convulsions** répétées (≥ 2 en 24 h)\n- **Détresse respiratoire** (respiration acidosique profonde)\n- **Anémie sévère** (Hb < 5 g/dL), hypoglycémie (< 2,2 mmol/L)\n- Choc, ictère, urines coca, saignements, insuffisance rénale\n\n## Confirmation\n- **TDR** ou goutte épaisse (densité parasitaire)\n- Glycémie systématique, Hb',
    examens: [
      ['confirmation', 'tdr-paludisme', 'Positif (P. falciparum).'],
      ['confirmation', 'goutte-epaisse', 'Densité parasitaire, suivi.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie : à rechercher et corriger d’emblée.'],
      ['premiere_intention', 'nfs', 'Anémie sévère, thrombopénie.'],
      ['pretherapeutique', 'groupage-rai', 'Transfusion.'],
      ['gravite', 'lactates', 'Acidose.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['etiologique', 'lcr', 'Coma : éliminer une méningite (après stabilisation).'],
      ['etiologique', 'hemocultures', 'Bactériémie associée (Salmonella).'],
    ],
    scores: ['blantyre', 'glasgow', 'dose-ponderale'],
    differentiels: [
      ['meningite-bacterienne', 'Raideur de nuque, LCR anormal (peut coexister).'],
      ['sepsis-et-choc-septique', 'Hémocultures, TDR négatif.'],
      ['hypoglycemie-adulte', 'Glycémie basse d’autre cause.'],
      ['Encéphalites virales', 'TDR négatif, LCR lymphocytaire.'],
    ],
    etiologies:
      '## Cause\n- *Plasmodium falciparum* (plus de 95 % en RDC)\n\n## Facteurs\n- Enfant de 6 mois à 5 ans (immunité non acquise)\n- Retard de traitement, automédication, absence de moustiquaire\n- Malnutrition, drépanocytose (forme grave), VIH',
    principes: [
      [
        'Antipaludique parentéral sans délai',
        'Réduire la mortalité.',
        '- **Artésunate** 3 mg/kg (< 20 kg) ou 2,4 mg/kg (≥ 20 kg) IV ou IM à H0, H12, H24, puis toutes les 24 h jusqu’à pouvoir avaler (au moins 24 h)\n- Puis **ACT** oral complet de 3 jours\n- Pré-transfert (centre de santé) : **artésunate rectal** 10 mg/kg ou artésunate IM\n- **Quinine** IV seulement si artésunate indisponible',
      ],
      [
        'Traitements associés',
        'Corriger les défaillances.',
        '- **Hypoglycémie** : glucose 10 % 5 mL/kg IV puis perfusion de glucose\n- **Anémie sévère** : transfusion si Hb < 4 g/dL, ou < 6 g/dL avec détresse respiratoire ou parasitémie élevée (10 mL/kg de culot)\n- **Convulsions** : **diazépam** 0,5 mg/kg intrarectal ou 0,3 mg/kg IV, phénobarbital si répétées\n- **Choc** : remplissage prudent (pas de bolus systématique), antibiotiques\n- Fièvre : paracétamol ; position latérale de sécurité si coma',
      ],
      [
        'Antibiothérapie',
        'Couvrir les infections associées.',
        '- **Ceftriaxone** si choc, coma sans cause évidente ou suspicion de méningite',
      ],
      [
        'Prévention',
        'Éviter les récidives.',
        '- Moustiquaire imprégnée, chimioprévention saisonnière ou du nourrisson selon les zones\n- **Vaccin antipaludique** (RTS,S ou R21) selon le programme\n- Éducation : consulter dans les 24 h de toute fièvre',
      ],
    ],
    molecules: [
      ['artesunate', 'premiere', 'IV/IM ou rectal pré-transfert'],
      ['quinine', 'alternative', 'Si artésunate indisponible'],
      ['artemether', 'premiere', 'Relais oral (avec luméfantrine)'],
      ['lumefantrine', 'premiere', 'Relais oral'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['diazepam', 'premiere', 'Convulsions'],
      ['phenobarbital', 'alternative', 'Convulsions répétées'],
      ['ceftriaxone', 'adjuvant', 'Infection associée'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
      ['vaccin-antipaludique-rts-s-r21', 'adjuvant', 'Prévention'],
    ],
    complications: [
      {
        nom: 'Séquelles neurologiques',
        description: 'Neuropaludisme : 10 % des survivants.',
        traitement: '- Rééducation, suivi',
        clinique: '- Déficit, épilepsie, troubles cognitifs',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hémoglobinurie, déshydratation.',
        traitement: '- Hydratation, dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Anémie post-artésunate retardée',
        fiche: 'anemie-enfant',
        description: 'Hémolyse 1 à 3 semaines après.',
        traitement: '- Contrôle de l’Hb à J14–J28, transfusion si besoin',
        clinique: '- Pâleur',
        paraclinique: '- Hb',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 10 à 20 % même traité ; l’artésunate réduit la mortalité de 22 % par rapport à la quinine',
    urgences: ['paludisme-grave-urgence'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Convulsions', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Urines foncées', 'occasionnel'],
      ['Ictère', 'occasionnel'],
    ],
    sources: [
      'WHO guidelines for malaria',
      'Directives nationales de prise en charge du paludisme',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- TDR, glycémie, artésunate rectal ou IM, diazépam, glucose, transfert',
        '- Tout paludisme grave',
      ],
      hgr: [
        '- Artésunate IV, transfusion, prise en charge des défaillances',
        '- Insuffisance rénale nécessitant une dialyse',
      ],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {
      'paludisme-grave-urgence':
        'Enfant fébrile prostré, comateux, qui convulse, très pâle ou avec respiration profonde',
    },
    formes: [
      {
        nom: 'Anémie palustre sévère',
        type: 'commune',
        description: 'Forme du petit enfant.',
        terrain: '- Enfant de moins de 2 ans',
        fonctionnels: '- Fatigue, refus de manger',
        generaux: '- Fièvre',
        physiques: '- Pâleur extrême, tachycardie, polypnée',
        paraclinique: '- Hb < 5 g/dL, TDR positif',
        etiologies: '- P. falciparum',
        syndromes: ['syndrome-anemique'],
        examens: [['nfs', 'Hb']],
      },
      {
        nom: 'Neuropaludisme',
        type: 'gravite',
        description: 'Coma fébrile.',
        terrain: '- Enfant de 2 à 5 ans',
        fonctionnels: '',
        generaux: '- Fièvre élevée',
        physiques: '- Coma (Blantyre ≤ 2), convulsions, posture anormale',
        paraclinique: '- Hypoglycémie fréquente',
        etiologies: '',
        syndromes: ['syndrome-convulsif', 'syndrome-confusionnel'],
      },
      {
        nom: 'Détresse respiratoire acidosique',
        type: 'gravite',
        description: 'Respiration profonde.',
        terrain: '- Anémie sévère, déshydratation',
        fonctionnels: '',
        generaux: '',
        physiques: '- Respiration ample et rapide, sans signe pulmonaire',
        paraclinique: '- Lactates élevés',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Paludisme simple enfant
  {
    ...INFPED,
    slug: 'paludisme-simple-enfant',
    nom: 'Paludisme simple de l’enfant',
    resume:
      'Fièvre avec TDR positif sans signe de gravité : ACT (artéméther-luméfantrine ou artésunate-amodiaquine) 3 jours selon le poids, paracétamol, contrôle à J3 ; reconnaître tout signe de danger.',
    definition:
      'Infection palustre symptomatique (fièvre ou antécédent de fièvre) confirmée par TDR ou microscopie, sans aucun critère de gravité.',
    physiopathologie:
      '## Mécanismes\n- Cycle érythrocytaire du *Plasmodium* : accès fébriles\n- Évolution vers le paludisme grave possible en quelques heures chez le jeune enfant non traité',
    diagnostic:
      '## Clinique\n- Fièvre, frissons, sueurs, céphalées, vomissements, douleurs abdominales, perte d’appétit\n- Pâleur modérée, splénomégalie\n- **Absence de signe de danger** (peut boire, pas de convulsions, conscient, pas de vomissements incoercibles)\n\n## Confirmation\n- **TDR** (ou goutte épaisse) avant tout traitement',
    examens: [
      ['confirmation', 'tdr-paludisme', 'Systématique avant traitement.'],
      ['deuxieme_intention', 'goutte-epaisse', 'Si disponible.'],
      ['premiere_intention', 'nfs', 'Anémie (pâleur).'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['fievre-enfant-pcime', 'TDR négatif : chercher une autre cause.'],
      ['paludisme-grave-enfant', 'Présence d’un signe de gravité.'],
      ['fievre-typhoide', 'Fièvre prolongée, TDR négatif.'],
      ['otite-moyenne-aigue', 'Otalgie, tympan bombé (peut être associée).'],
    ],
    etiologies:
      '## Cause\n- *P. falciparum* (majorité), *P. malariae*, *P. ovale*\n\n## Facteurs\n- Absence de moustiquaire, saison des pluies, zone rurale',
    principes: [
      [
        'ACT 3 jours selon le poids',
        'Guérir.',
        '- **Artéméther-luméfantrine** 2 fois par jour 3 jours (à prendre avec un aliment gras ou du lait) : 5–14 kg 1 comprimé 20/120 mg par prise ; 15–24 kg 2 ; 25–34 kg 3 ; ≥ 35 kg 4\n- Ou **artésunate-amodiaquine** 1 prise par jour 3 jours\n- Alternatives : dihydroartémisinine-pipéraquine, artésunate-pyronaridine\n- Nourrisson < 5 kg : ACT selon le poids (avis)',
      ],
      [
        'Mesures associées',
        'Soulager et surveiller.',
        '- **Paracétamol** 15 mg/kg toutes les 6 h si fièvre\n- Boissons, allaitement, repas\n- Redonner la dose si vomissement dans les 30 minutes\n- Contrôle à **J3** si la fièvre persiste',
      ],
      [
        'Conseils',
        'Reconnaître la gravité.',
        '- Revenir immédiatement en cas de convulsions, somnolence, incapacité de boire, vomissements répétés, respiration difficile, pâleur extrême\n- Moustiquaire imprégnée, vaccin antipaludique selon le programme',
      ],
    ],
    molecules: [
      ['artemether', 'premiere', 'Avec luméfantrine'],
      ['lumefantrine', 'premiere', 'Avec artéméther'],
      ['artesunate', 'alternative', 'Avec amodiaquine'],
      ['amodiaquine', 'alternative', 'Avec artésunate'],
      ['dihydroartemisinine', 'alternative', 'Avec pipéraquine'],
      ['piperaquine', 'alternative', 'Avec dihydroartémisinine'],
      ['pyronaridine', 'alternative', 'Avec artésunate'],
      ['paracetamol', 'premiere', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Évolution vers le paludisme grave',
        fiche: 'paludisme-grave-enfant',
        description: 'Retard ou échec de traitement.',
        traitement: '- Artésunate parentéral',
        clinique: '- Signes de danger',
        paraclinique: '- TDR, glycémie',
      },
      {
        nom: 'Anémie',
        fiche: 'anemie-enfant',
        description: 'Accès répétés.',
        traitement: '- Fer après traitement',
        clinique: '- Pâleur',
        paraclinique: '- Hb',
      },
      {
        nom: 'Convulsions fébriles',
        description: 'Fièvre élevée.',
        traitement: '- Diazépam si > 5 min',
        clinique: '- Crise brève',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 3 jours sous ACT bien pris ; récidives fréquentes sans prévention',
    urgences: ['paludisme-grave-urgence'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Pâleur', 'occasionnel'],
      ['Splénomégalie', 'occasionnel'],
    ],
    sources: [
      'WHO guidelines for malaria',
      'Directives nationales de prise en charge du paludisme',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
    ],
    niveaux: {
      cs: [
        '- TDR, ACT, paracétamol, conseils (aussi par les relais communautaires)',
        '- Signe de danger, échec à J3',
      ],
      hgr: ['- Prise en charge des échecs', ''],
      tert: ['', ''],
    },
    alertes: {
      'paludisme-grave-urgence':
        'Enfant avec paludisme qui ne peut plus boire, vomit tout, convulse ou devient somnolent',
    },
    formes: [
      {
        nom: 'Accès palustre simple',
        type: 'commune',
        description: 'Fièvre isolée avec TDR positif.',
        terrain: '- Enfant de moins de 5 ans',
        fonctionnels: '- Céphalées, vomissements',
        generaux: '- Fièvre, frissons',
        physiques: '- Splénomégalie possible',
        paraclinique: '- TDR positif',
        etiologies: '- P. falciparum',
        syndromes: ['syndrome-infectieux'],
        examens: [['tdr-paludisme', 'Confirmation']],
      },
    ],
  },

  // =================================================================== Rougeole
  {
    ...INFPED,
    slug: 'rougeole',
    nom: 'Rougeole',
    resume:
      'Maladie virale épidémique très contagieuse : fièvre, éruption maculo-papuleuse, toux, rhinite, conjonctivite ; vitamine A J1-J2, traitement des complications (pneumonie, diarrhée, kératite) ; vaccination à 9 et 15 mois.',
    definition:
      'Infection virale (*Morbillivirus*) hautement contagieuse, à transmission aérienne, responsable d’épidémies répétées en RDC ; définition de cas : fièvre + éruption généralisée + (toux ou rhinite ou conjonctivite).',
    physiopathologie:
      '## Mécanismes\n- Transmission par aérosols ; contagiosité de 4 jours avant à 4 jours après l’éruption\n- Incubation 10 à 14 jours\n- Immunodépression transitoire (plusieurs semaines) : surinfections\n- Carence en vitamine A aggravée : kératite, cécité',
    diagnostic:
      '## Clinique\n- **Phase d’invasion** (3–4 jours) : fièvre élevée, toux, rhinite, **conjonctivite**, signe de Köplik (points blancs sur la muqueuse jugale)\n- **Éruption** maculo-papuleuse débutant derrière les oreilles et au visage, descendante, en 3 jours\n- Desquamation fine, hyperpigmentation\n\n## Rougeole compliquée (PCIME)\n- Rougeole grave compliquée : signe de danger, opacité cornéenne, ulcérations buccales profondes, pneumonie grave, malnutrition sévère → référer\n- Complications oculaires ou buccales simples → traitement local\n\n## Confirmation\n- IgM rougeole (surveillance épidémiologique)',
    examens: [
      ['confirmation', 'serologie-rougeole', 'IgM : confirmation des premiers cas d’une épidémie.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
      ['premiere_intention', 'anthropometrie', 'Malnutrition associée.'],
      ['gravite', 'oxymetrie-de-pouls', 'Pneumonie.'],
      ['gravite', 'radiographie-thoracique', 'Pneumonie grave.'],
    ],
    scores: [],
    differentiels: [
      ['Rubéole', 'Fièvre modérée, adénopathies occipitales.'],
      ['Exanthème subit (roséole)', 'Éruption après la chute de la fièvre, nourrisson.'],
      ['Scarlatine', 'Angine, langue framboisée, éruption en nappe.'],
      ['toxidermies-graves', 'Prise médicamenteuse, bulles, atteinte muqueuse.'],
      ['Dengue, chikungunya', 'Contexte épidémique, arthralgies.'],
    ],
    etiologies:
      '## Facteurs\n- Absence de vaccination ou une seule dose\n- Malnutrition, carence en vitamine A, VIH\n- Promiscuité, camps de déplacés',
    principes: [
      [
        'Vitamine A',
        'Réduire la mortalité et les complications oculaires.',
        '- **Vitamine A** J1 et J2 (J15 si signes oculaires) : < 6 mois 50 000 UI, 6–11 mois 100 000 UI, ≥ 12 mois 200 000 UI',
      ],
      [
        'Traitement symptomatique',
        'Soutenir.',
        '- **Paracétamol**, hydratation, allaitement et alimentation fréquente\n- Yeux : nettoyage, **tétracycline** pommade ophtalmique si conjonctivite purulente\n- Bouche : bains de bouche, violet de gentiane si ulcérations\n- Diarrhée : SRO + zinc',
      ],
      [
        'Complications',
        'Traiter.',
        '- Pneumonie : **amoxicilline** (ou ceftriaxone si grave), oxygène\n- Otite : amoxicilline\n- Kératite, opacité cornéenne : vitamine A + tétracycline, référer\n- Malnutrition : PCIMA',
      ],
      [
        'Prévention et riposte',
        'Interrompre l’épidémie.',
        '- **Vaccin RR** à 9 mois et 15–18 mois ; riposte vaccinale dès 6 mois en épidémie\n- Isolement des cas hospitalisés, notification immédiate',
      ],
    ],
    molecules: [
      ['vitamine-a-retinol', 'premiere', 'J1 et J2'],
      ['paracetamol', 'premiere', 'Fièvre'],
      ['tetracycline', 'premiere', 'Pommade ophtalmique'],
      ['amoxicilline', 'premiere', 'Pneumonie, otite'],
      ['ceftriaxone', 'alternative', 'Pneumonie grave'],
      ['sro', 'premiere', 'Diarrhée'],
      ['zinc', 'adjuvant', 'Diarrhée'],
      ['vaccin-rougeole-rubeole', 'premiere', 'Prévention, riposte'],
    ],
    complications: [
      {
        nom: 'Pneumonie',
        fiche: 'pneumonie-enfant',
        description: 'Première cause de décès.',
        traitement: '- Antibiotiques, oxygène',
        clinique: '- Respiration rapide, tirage',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Diarrhée et déshydratation',
        fiche: 'diarrhee-aigue-enfant',
        description: 'Atteinte digestive.',
        traitement: '- SRO, zinc',
        clinique: '- Diarrhée',
        paraclinique: '',
      },
      {
        nom: 'Kératite et cécité',
        fiche: 'carence-en-vitamine-a',
        description: 'Carence en vitamine A.',
        traitement: '- Vitamine A, soins oculaires',
        clinique: '- Opacité cornéenne',
        paraclinique: '',
      },
      {
        nom: 'Malnutrition aiguë',
        fiche: 'malnutrition-aigue-severe',
        description: 'Post-rougeole.',
        traitement: '- PCIMA',
        clinique: '- Amaigrissement',
        paraclinique: '- PB',
      },
      {
        nom: 'Encéphalite',
        description: 'Rare.',
        traitement: '- Soins de support',
        clinique: '- Convulsions, coma',
        paraclinique: '- LCR',
      },
    ],
    evolution:
      '## Pronostic\n- Létalité de 1 à 5 %, jusqu’à 10–30 % chez l’enfant malnutri en situation humanitaire',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Éruption cutanée', 'tres_frequent'],
      ['Toux', 'tres_frequent'],
      ['Yeux rouges', 'tres_frequent'],
      ['Diarrhée', 'frequent'],
      ['Tachypnée', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Vitamine A, soins symptomatiques, notification, vaccination', '- Rougeole grave compliquée'],
      hgr: ['- Prise en charge des complications, isolement', ''],
      tert: ['- Ophtalmologie, réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Rougeole non compliquée',
        type: 'commune',
        description: 'Fièvre, éruption, signes catarrhaux.',
        terrain: '- Enfant non vacciné',
        fonctionnels: '- Toux, rhinite, larmoiement',
        generaux: '- Fièvre élevée',
        physiques: '- Éruption maculo-papuleuse descendante, Köplik, conjonctivite',
        paraclinique: '- IgM positives',
        etiologies: '- Virus de la rougeole',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Rougeole grave compliquée',
        type: 'gravite',
        description: 'Pneumonie, déshydratation, atteinte cornéenne.',
        terrain: '- Malnutrition, VIH, < 1 an',
        fonctionnels: '- Ne peut pas boire',
        generaux: '- Léthargie',
        physiques: '- Tirage, opacité cornéenne, ulcérations buccales profondes',
        paraclinique: '- SpO2 basse',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Coqueluche
  {
    ...INFPED,
    slug: 'coqueluche',
    nom: 'Coqueluche',
    resume:
      'Infection respiratoire à Bordetella pertussis : toux quinteuse prolongée avec reprise inspiratoire et vomissements ; grave chez le nourrisson < 6 mois (apnées, cyanose) ; azithromycine, oxygène, vaccination.',
    definition:
      'Infection respiratoire bactérienne très contagieuse due à *Bordetella pertussis*, caractérisée par une toux quinteuse prolongée ; maladie évitable par la vaccination (pentavalent).',
    physiopathologie:
      '## Mécanismes\n- Toxines (toxine pertussique) : atteinte de l’épithélium cilié, hypersécrétion\n- Hyperlymphocytose\n- Nourrisson : apnées, hypoxémie, pneumonie, encéphalopathie',
    diagnostic:
      '## Clinique\n- Phase catarrhale (1–2 semaines) : rhinite, toux banale, contagiosité maximale\n- **Phase des quintes** (2–6 semaines) : quintes de toux suivies d’une **reprise inspiratoire bruyante** (« chant du coq »), **vomissements**, cyanose, apyrexie\n- Nourrisson : **apnées**, cyanose, bradycardie sans chant du coq\n- Toux ≥ 14 jours avec quintes, reprise ou vomissements (définition OMS)\n\n## Biologie\n- Hyperlymphocytose ; PCR nasopharyngée si disponible',
    examens: [
      ['premiere_intention', 'nfs', 'Hyperlymphocytose.'],
      ['gravite', 'oxymetrie-de-pouls', 'Désaturations, apnées.'],
      ['gravite', 'radiographie-thoracique', 'Pneumonie.'],
      ['premiere_intention', 'glycemie', 'Nourrisson grave.'],
    ],
    scores: [],
    differentiels: [
      ['toux-difficultes-respiratoires-enfant', 'Pneumonie : fièvre, respiration rapide.'],
      ['tuberculose-pulmonaire', 'Toux chronique, amaigrissement, contage.'],
      ['Corps étranger', 'Syndrome de pénétration.'],
      ['Bronchiolite', 'Nourrisson, sibilants, crépitants, épidémie virale.'],
    ],
    etiologies:
      '## Facteurs\n- Absence ou retard de vaccination (pentavalent)\n- Nourrisson trop jeune pour être vacciné, contamination par la fratrie ou les adultes',
    principes: [
      [
        'Antibiotique',
        'Réduire la contagiosité.',
        '- **Azithromycine** 10 mg/kg/j 5 jours (J1) puis 5 mg/kg/j J2–J5 ; nourrisson < 1 mois : azithromycine préférée\n- Ou **érythromycine** 14 jours, **clarithromycine** 7 jours\n- Efficace surtout en phase précoce ; n’écourte pas la toux installée',
      ],
      [
        'Soins de support',
        'Éviter les complications.',
        '- Hospitaliser les nourrissons < 6 mois et les formes graves\n- **Oxygène** si cyanose ou SpO2 < 90 %, aspiration douce des sécrétions\n- Alimentation fractionnée après les quintes, hydratation\n- Pas d’antitussifs, pas de sédatifs',
      ],
      [
        'Prévention',
        'Protéger les nourrissons.',
        '- **Vaccination pentavalent** à 6, 10 et 14 semaines, rappels\n- Antibioprophylaxie (azithromycine) des contacts proches non vaccinés et des nourrissons\n- Isolement 5 jours après le début de l’antibiotique',
      ],
    ],
    molecules: [
      ['azithromycine', 'premiere', '5 jours'],
      ['erythromycine', 'alternative', '14 jours'],
      ['clarithromycine', 'alternative', '7 jours'],
      ['oxygene', 'premiere', 'Cyanose, apnées'],
      ['vaccin-pentavalent', 'premiere', 'Prévention'],
    ],
    complications: [
      {
        nom: 'Apnées et décès du nourrisson',
        description: 'Nourrisson < 6 mois.',
        traitement: '- Surveillance, oxygène, stimulation',
        clinique: '- Cyanose, bradycardie',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Pneumonie',
        fiche: 'pneumonie-enfant',
        description: 'Surinfection.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, polypnée',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Malnutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Vomissements répétés.',
        traitement: '- Alimentation fractionnée',
        clinique: '- Perte de poids',
        paraclinique: '',
      },
      {
        nom: 'Convulsions et encéphalopathie',
        description: 'Hypoxie.',
        traitement: '- Anticonvulsivants, oxygène',
        clinique: '- Convulsions',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Toux de 6 à 10 semaines (« toux des 100 jours ») ; mortalité élevée chez le nourrisson non vacciné',
    urgences: [],
    symptomes: [
      ['Toux quinteuse', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Cyanose', 'frequent'],
      ['Toux', 'tres_frequent'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Azithromycine, conseils, vaccination, transfert des nourrissons < 6 mois',
        '- Nourrisson, apnées, cyanose',
      ],
      hgr: ['- Hospitalisation, oxygène, surveillance des apnées', ''],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Coqueluche typique de l’enfant',
        type: 'commune',
        description: 'Quintes avec chant du coq.',
        terrain: '- Enfant non ou incomplètement vacciné',
        fonctionnels: '- Quintes, vomissements après la toux',
        generaux: '- Apyrexie',
        physiques: '- Examen normal entre les quintes',
        paraclinique: '- Hyperlymphocytose',
        etiologies: '- B. pertussis',
        syndromes: [],
      },
      {
        nom: 'Coqueluche maligne du nourrisson',
        type: 'gravite',
        description: 'Apnées et défaillances.',
        terrain: '- Nourrisson < 3 mois',
        fonctionnels: '- Accès de cyanose',
        generaux: '- Tachycardie puis bradycardie',
        physiques: '- Apnées, détresse respiratoire',
        paraclinique: '- Hyperleucocytose majeure',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Diphtérie
  {
    ...INFPED,
    slug: 'diphterie',
    nom: 'Diphtérie',
    resume:
      'Angine à fausses membranes grisâtres adhérentes chez un enfant non vacciné, cou proconsulaire, risque d’obstruction et de myocardite : isolement, antitoxine diphtérique sans attendre, pénicilline ou érythromycine, notification et riposte vaccinale.',
    definition:
      'Infection toxinique due à *Corynebacterium diphtheriae* toxinogène, touchant les voies respiratoires supérieures (diphtérie respiratoire) ou la peau, maladie évitable par la vaccination.',
    physiopathologie:
      '## Mécanismes\n- Colonisation du pharynx, fausses membranes (nécrose, fibrine)\n- Toxine diphtérique diffusée : myocardite, neuropathie (paralysies), atteinte rénale\n- Obstruction des voies aériennes (croup)',
    diagnostic:
      '## Clinique\n- Mal de gorge, fièvre modérée, malaise\n- **Fausses membranes** grisâtres, épaisses, **adhérentes**, saignant au décollement, débordant les amygdales (luette, voile)\n- Adénopathies et **œdème du cou** (« cou proconsulaire »)\n- Voix nasonnée, stridor (laryngite), écoulement nasal sanglant\n- Signes de toxicité : pâleur, tachycardie, troubles du rythme, paralysie du voile\n\n## Confirmation\n- Prélèvement de gorge (culture et test de toxinogénèse) — ne pas attendre pour traiter',
    examens: [
      ['confirmation', 'prelevement-de-gorge', 'Culture de C. diphtheriae et toxinogénèse.'],
      ['gravite', 'ecg', 'Myocardite (troubles de conduction).'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose, thrombopénie.'],
      ['gravite', 'creatinine', 'Atteinte rénale.'],
      ['gravite', 'oxymetrie-de-pouls', 'Obstruction des voies aériennes.'],
    ],
    scores: [],
    differentiels: [
      ['angine-pharyngite-enfant', 'Exsudat non adhérent, pas d’œdème du cou.'],
      ['Mononucléose infectieuse', 'Fausses membranes non adhérentes, splénomégalie.'],
      ['Phlegmon péri-amygdalien', 'Trismus, voussure unilatérale.'],
      ['Épiglottite', 'Stridor, hypersalivation, position assise penchée.'],
    ],
    etiologies:
      '## Facteurs\n- **Absence de vaccination** (DTC) ou couverture insuffisante\n- Promiscuité, déplacements de population\n- Adolescents et adultes sans rappel',
    principes: [
      [
        'Antitoxine sans délai',
        'Neutraliser la toxine.',
        '- **Antitoxine diphtérique** IV dès la suspicion clinique : 20 000 à 100 000 UI selon la gravité et le délai\n- Adrénaline prête (réaction allergique)',
      ],
      [
        'Antibiothérapie',
        'Éliminer la bactérie.',
        '- **Benzylpénicilline** (puis pénicilline V) ou **érythromycine** / **azithromycine** 14 jours\n- Isolement respiratoire jusqu’à 2 cultures négatives',
      ],
      [
        'Soins de support',
        'Prévenir les décès.',
        '- Surveillance des voies aériennes : trachéotomie ou intubation si obstruction\n- Repos strict, **ECG** régulier (myocardite), surveillance des paralysies\n- Alimentation par sonde si paralysie du voile',
      ],
      [
        'Riposte',
        'Limiter l’épidémie.',
        '- Notification immédiate\n- Contacts : prélèvement, antibioprophylaxie (benzathine pénicilline ou érythromycine/azithromycine), mise à jour vaccinale\n- Vaccination du malade après guérison (la maladie n’immunise pas)',
      ],
    ],
    molecules: [
      ['antitoxine-diphterique', 'premiere', 'Dès la suspicion'],
      ['benzylpenicilline-penicilline-g', 'premiere', 'Antibiotique'],
      ['erythromycine', 'alternative', 'Antibiotique, prophylaxie des contacts'],
      ['azithromycine', 'alternative', 'Antibiotique'],
      ['benzathine-benzylpenicilline', 'adjuvant', 'Prophylaxie des contacts'],
      ['adrenaline-epinephrine', 'adjuvant', 'Réaction à l’antitoxine'],
      ['vaccin-pentavalent', 'premiere', 'Prévention'],
      ['anatoxines-tetanique-diphterique', 'adjuvant', 'Rappels (Td)'],
    ],
    complications: [
      {
        nom: 'Obstruction des voies aériennes',
        description: 'Fausses membranes laryngées, œdème.',
        traitement: '- Trachéotomie, intubation',
        clinique: '- Stridor, tirage',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Myocardite',
        fiche: 'insuffisance-cardiaque',
        description: '2e semaine.',
        traitement: '- Repos, prise en charge cardiaque',
        clinique: '- Tachycardie, insuffisance cardiaque',
        paraclinique: '- ECG',
      },
      {
        nom: 'Paralysies',
        description: 'Voile du palais, oculomotrices, membres.',
        traitement: '- Soins de support',
        clinique: '- Voix nasonnée, fausses routes',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Létalité de 5 à 10 %, plus élevée chez le jeune enfant et en cas de retard d’antitoxine',
    urgences: [],
    symptomes: [
      ['Mal de gorge', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Adénopathies', 'tres_frequent'],
      ['Dysphagie', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Palpitations', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Reconnaître les fausses membranes, isoler, première dose d’antibiotique, transfert, notification',
        '- Tout cas suspect',
      ],
      hgr: ['- Antitoxine, antibiotiques, ECG, isolement', '- Obstruction, myocardite'],
      tert: ['- Réanimation, trachéotomie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Diphtérie pharyngée',
        type: 'commune',
        description: 'Angine à fausses membranes.',
        terrain: '- Enfant non vacciné',
        fonctionnels: '- Mal de gorge, dysphagie',
        generaux: '- Fièvre modérée, pâleur',
        physiques: '- Fausses membranes grisâtres adhérentes, adénopathies',
        paraclinique: '- Culture positive',
        etiologies: '- C. diphtheriae toxinogène',
        syndromes: [],
        examens: [['prelevement-de-gorge', 'Confirmation']],
      },
      {
        nom: 'Diphtérie maligne',
        type: 'gravite',
        description: 'Forme toxique.',
        terrain: '- Retard de traitement',
        fonctionnels: '- Stridor',
        generaux: '- Prostration, tachycardie',
        physiques: '- Cou proconsulaire, hémorragies, fausses membranes extensives',
        paraclinique: '- Troubles de conduction',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },
];
