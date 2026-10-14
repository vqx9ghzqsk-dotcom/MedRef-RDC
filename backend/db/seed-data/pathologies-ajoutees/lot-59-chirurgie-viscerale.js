'use strict';

/**
 * Lot 59 (phase 2, chirurgie viscérale) — rupture de la rate, pancréatite aiguë grave (prise en
 * charge chirurgicale), péritonite postopératoire, fistules digestives. Rédigé par IA (Sabiston,
 * WSES, EAST, ACS TQIP) : à valider.
 */

const VISC = { departement: 'chirurgie', specialite: 'Chirurgie viscérale' };

module.exports = [
  // =================================================================== Rupture de rate
  {
    ...VISC,
    slug: 'rupture-de-la-rate',
    nom: 'Rupture de la rate',
    resume:
      'Organe le plus souvent lésé dans les traumatismes abdominaux fermés (accidents de la route, chutes, coups) ; rupture spontanée ou après traumatisme minime sur grosse rate (paludisme, splénomégalie palustre, mononucléose, drépanocytose de l’enfant, leucémie) ; douleur de l’hypochondre gauche irradiant à l’épaule gauche, hémopéritoine, choc hémorragique ; échographie FAST, scanner si stable ; patient instable : laparotomie (splénectomie ou splénorraphie) ; stable : traitement non opératoire en milieu équipé ; après splénectomie : vaccinations (pneumocoque, méningocoque, Hib), antibioprophylaxie, prévention du paludisme.',
    definition:
      'Lésion traumatique ou spontanée de la rate entraînant un saignement intrapéritonéal ou un hématome sous-capsulaire, de gravité classée selon l’AAST (grades I à V).',
    physiopathologie:
      '## Causes\n- **Traumatisme abdominal fermé** (route, chute, agression), plaies pénétrantes\n- **Rupture pathologique** : rate augmentée et fragile (**paludisme**, splénomégalie palustre hyperréactive, mononucléose, leucémie, lymphome, drépanocytose de l’enfant)\n\n## Formes\n- Rupture immédiate (hémopéritoine, choc)\n- **Rupture en deux temps** : hématome sous-capsulaire qui se rompt après quelques jours\n\n## Après splénectomie\n- Risque d’**infections fulminantes** (pneumocoque, méningocoque, Haemophilus) et de **paludisme grave**',
    diagnostic:
      '## Clinique\n- Douleur de l’**hypochondre gauche**, irradiant à l’**épaule gauche** (signe de Kehr), défense\n- Signes de **choc** hémorragique : tachycardie, hypotension, pâleur, soif\n- Fractures des côtes gauches basses, contexte de grosse rate\n\n## Examens\n- **Échographie FAST** (épanchement intrapéritonéal)\n- **Scanner** abdominal injecté si patient **stable** (grade, blush actif)\n- NFS (Hb répétée), groupage-RAI, hémostase, TDR paludisme',
    examens: [
      ['confirmation', 'echographie-abdominale', 'FAST : hémopéritoine.'],
      ['confirmation', 'scanner-abdominal', 'Grade de la lésion (patient stable).'],
      ['gravite', 'nfs', 'Hb répétée.'],
      ['gravite', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'hemostase', 'Coagulation.'],
      ['etiologique', 'tdr-paludisme', 'Rate palustre.'],
    ],
    scores: [],
    differentiels: [
      ['traumatisme-abdominal-ferme', 'Autres lésions viscérales.'],
      ['choc-hemorragique-traumatique', 'Autres sources de saignement.'],
      ['grossesse-extra-uterine', 'Hémopéritoine de la femme jeune.'],
      ['sequestration-splenique-aigue', 'Enfant drépanocytaire, rate qui augmente sans traumatisme.'],
    ],
    etiologies: '## Causes\n- Traumatismes, rate pathologique (paludisme, mononucléose, hémopathies)',
    principes: [
      [
        'Patient instable',
        'Laparotomie.',
        '- Réanimation (2 voies veineuses, remplissage limité, **transfusion**, **acide tranexamique** dans les 3 h)\n- **Laparotomie** : **splénectomie** (ou splénorraphie, splénectomie partielle si possible)',
      ],
      [
        'Patient stable',
        'Traitement non opératoire.',
        '- Surveillance en milieu chirurgical (pouls, tension, Hb toutes les 6 h, examen abdominal), repos\n- Embolisation si disponible (blush actif)\n- Échec (instabilité, chute d’Hb) : laparotomie\n- Éviter les sports de contact 2–3 mois',
      ],
      [
        'Après splénectomie',
        'Prévenir les infections.',
        '- **Vaccins** : pneumocoque, méningocoque, Haemophilus influenzae b (idéalement 14 jours après la chirurgie)\n- **Antibioprophylaxie** (pénicilline V ou amoxicilline) au moins 2–3 ans (enfant : jusqu’à 5 ans et plus)\n- **Prévention du paludisme** (moustiquaire, traitement rapide de toute fièvre), carte de splénectomisé',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Hémorragie traumatique'],
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['vaccin-pneumococcique-conjugue', 'premiere', 'Après splénectomie'],
      ['vaccin-meningococcique-a-conjugue', 'premiere', 'Après splénectomie'],
      ['vaccin-haemophilus-influenzae-b', 'premiere', 'Après splénectomie'],
      ['amoxicilline', 'premiere', 'Antibioprophylaxie après splénectomie'],
      ['morphine', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-traumatique',
        description: 'Hémopéritoine.',
        traitement: '- Transfusion, laparotomie',
        clinique: '- Hypotension, tachycardie',
        paraclinique: '- Hb',
      },
      {
        nom: 'Infection fulminante post-splénectomie',
        fiche: 'sepsis-et-choc-septique',
        description: 'Pneumocoque.',
        traitement: '- Antibiotiques IV immédiats',
        clinique: '- Fièvre, choc',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Paludisme grave',
        fiche: 'paludisme-grave',
        description: 'Patient splénectomisé.',
        traitement: '- Artésunate',
        clinique: '- Fièvre',
        paraclinique: '- TDR',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec une prise en charge rapide ; risque infectieux à vie après splénectomie',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Douleur de l’épaule', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Lésions traumatiques', 'frequent'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'WSES — recommandations de pratique clinique',
      'EAST — recommandations de pratique clinique',
      'ACS TQIP — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Réanimation initiale, acide tranexamique, référence urgente',
        '- Traumatisme abdominal avec choc',
      ],
      hgr: ['- FAST, transfusion, laparotomie', ''],
      tert: ['- Scanner, embolisation, traitement non opératoire', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Traumatisme abdominal avec douleur de l’hypochondre gauche et choc',
    },
    formes: [
      {
        nom: 'Rupture traumatique',
        type: 'commune',
        description: 'Hémopéritoine.',
        terrain: '- Accident, chute',
        fonctionnels: '- Douleur de l’hypochondre gauche',
        generaux: '- Choc',
        physiques: '- Défense',
        paraclinique: '- FAST positif',
        etiologies: '- Traumatisme',
        syndromes: ['syndrome-d-hemorragie-interne'],
      },
      {
        nom: 'Rupture sur rate pathologique',
        type: 'etiologique',
        description: 'Traumatisme minime.',
        terrain: '- Paludisme, splénomégalie',
        fonctionnels: '- Douleur brutale',
        generaux: '',
        physiques: '- Splénomégalie',
        paraclinique: '',
        etiologies: '- Paludisme, mononucléose',
        syndromes: [],
      },
      {
        nom: 'Rupture en deux temps',
        type: 'evolutive',
        description: 'Hématome qui se rompt.',
        terrain: '- Quelques jours après le traumatisme',
        fonctionnels: '- Douleur secondaire',
        generaux: '- Choc brutal',
        physiques: '',
        paraclinique: '- Hématome sous-capsulaire',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Pancréatite aiguë grave chirurgie
  {
    ...VISC,
    slug: 'pancreatite-aigue-grave-chirurgie',
    nom: 'Pancréatite aiguë grave (prise en charge chirurgicale)',
    resume:
      'La pancréatite aiguë grave se traite d’abord médicalement (réanimation, remplissage guidé, analgésie, nutrition entérale précoce) ; la chirurgie a des indications limitées et tardives : nécrose infectée (fièvre, sepsis, gaz dans la nécrose au scanner) traitée par antibiotiques puis drainage selon une approche progressive (« step-up » : drainage percutané ou endoscopique, nécrosectomie mini-invasive, chirurgie ouverte en dernier recours, idéalement après 4 semaines), syndrome du compartiment abdominal, perforation, hémorragie ; cholécystectomie après pancréatite biliaire ; CPRE si angiocholite associée.',
    definition:
      'Prise en charge chirurgicale et interventionnelle des complications de la pancréatite aiguë sévère (nécrose infectée, collections, compartiment abdominal, hémorragie, perforation) et de sa cause biliaire.',
    physiopathologie:
      '## Évolution de la pancréatite grave\n- 1re semaine : **syndrome inflammatoire**, défaillances d’organes\n- Après 2–4 semaines : **nécrose** pancréatique et péri-pancréatique, **collections**, **surinfection** de la nécrose (germes digestifs) → sepsis\n\n## Complications chirurgicales\n- **Nécrose infectée**, **syndrome du compartiment abdominal**, **hémorragie** (pseudo-anévrisme), **perforation** colique, pseudokyste compressif',
    diagnostic:
      '## Indicateurs\n- **Nécrose infectée** : fièvre persistante ou réapparaissant après la 2e semaine, aggravation, **bulles de gaz** dans la nécrose au scanner, ponction positive\n- **Compartiment abdominal** : distension tendue, oligurie, défaillance respiratoire, pression intravésicale > 20 mmHg\n- Hémorragie : chute d’Hb, saignement digestif\n\n## Examens\n- **Scanner abdominal injecté** (après 72 h : étendue de la nécrose, collections, gaz)\n- **Lipasémie** (diagnostic), CRP (> 150 mg/L à 48 h), NFS, créatinine, calcémie, glycémie, **lactates**, gaz du sang, hémocultures\n- **Échographie** (lithiase biliaire), bilan hépatique',
    examens: [
      ['confirmation', 'scanner-abdominal', 'Nécrose, collections, gaz.'],
      ['premiere_intention', 'lipasemie', 'Diagnostic.'],
      ['gravite', 'crp', 'Gravité.'],
      ['premiere_intention', 'echographie-abdominale', 'Lithiase biliaire.'],
      ['gravite', 'creatinine', 'Défaillance rénale.'],
      ['gravite', 'calcemie-magnesemie', 'Hypocalcémie.'],
      ['gravite', 'lactates', 'Choc.'],
      ['premiere_intention', 'hemocultures', 'Nécrose infectée.'],
      ['premiere_intention', 'bilan-hepatique', 'Origine biliaire.'],
    ],
    scores: [],
    differentiels: [
      ['pancreatite-aigue', 'Fiche médicale.'],
      ['perforation-ulcere-gastroduodenal', 'Pneumopéritoine.'],
      ['occlusion-intestinale-aigue', 'Iléus, distension.'],
      ['angiocholite', 'Ictère fébrile.'],
    ],
    etiologies:
      '## Causes de pancréatite\n- Lithiase biliaire, alcool, hypertriglycéridémie, médicaments, traumatisme, ascaridiose',
    principes: [
      [
        'Traitement médical d’abord',
        'Réanimation.',
        '- **Remplissage** au Ringer lactate guidé par la diurèse, **analgésie** (morphine), **nutrition entérale précoce** (sonde)\n- **Pas d’antibiotiques prophylactiques** ; antibiotiques si nécrose infectée suspectée (**imipénème** ou méropénème, ou pipéracilline-tazobactam)',
      ],
      [
        'Nécrose infectée',
        'Approche progressive (step-up).',
        '- Antibiotiques, puis si échec : **drainage percutané** ou **endoscopique**, puis **nécrosectomie** mini-invasive ; chirurgie ouverte en dernier recours\n- Intervention **retardée** idéalement après 4 semaines (nécrose organisée)',
      ],
      [
        'Autres indications',
        'Cas particuliers.',
        '- **Syndrome du compartiment abdominal** : décompression (laparotomie de décharge)\n- Hémorragie : embolisation ou chirurgie ; perforation : chirurgie\n- **Pancréatite biliaire** : CPRE si angiocholite ; **cholécystectomie** pendant la même hospitalisation (forme légère) ou après résolution (forme grave)',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['morphine', 'premiere', 'Douleur'],
      ['imipeneme-cilastatine', 'premiere', 'Nécrose infectée'],
      ['meropeneme', 'alternative', 'Nécrose infectée'],
      ['piperacilline', 'alternative', 'Nécrose infectée'],
      ['enoxaparine', 'adjuvant', 'Thromboprophylaxie'],
    ],
    complications: [
      {
        nom: 'Défaillance multiviscérale',
        fiche: 'sepsis-et-choc-septique',
        description: 'Nécrose infectée.',
        traitement: '- Réanimation, drainage',
        clinique: '- Choc, insuffisance respiratoire',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Pseudokyste',
        description: 'Collection organisée.',
        traitement: '- Drainage si symptomatique',
        clinique: '- Masse, douleur',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Fistule pancréatique',
        fiche: 'fistules-digestives',
        description: 'Après drainage ou nécrosectomie.',
        traitement: '- Drainage, nutrition',
        clinique: '- Écoulement par drain',
        paraclinique: '- Amylase du liquide',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 15–30 % en cas de nécrose infectée ; améliorée par l’approche progressive et retardée',
    urgences: ['choc-septique'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Distension abdominale', 'frequent'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'WSES — recommandations de pratique clinique',
      'ACG — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Douleur épigastrique intense : référence', ''],
      hgr: ['- Réanimation, nutrition entérale, cholécystectomie', ''],
      tert: ['- Drainage, nécrosectomie, CPRE, réanimation', ''],
    },
    alertes: { 'choc-septique': 'Pancréatite avec fièvre persistante et hypotension' },
    formes: [
      {
        nom: 'Nécrose pancréatique infectée',
        type: 'commune',
        description: 'Après 2 semaines.',
        terrain: '- Pancréatite grave',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre, sepsis',
        physiques: '- Distension',
        paraclinique: '- Gaz dans la nécrose',
        etiologies: '',
        syndromes: ['syndrome-de-reponse-inflammatoire-systemique'],
      },
      {
        nom: 'Syndrome du compartiment abdominal',
        type: 'gravite',
        description: 'Hyperpression.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Défaillances d’organes',
        physiques: '- Abdomen tendu',
        paraclinique: '- Pression vésicale > 20 mmHg',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Péritonite postopératoire
  {
    ...VISC,
    slug: 'peritonite-postoperatoire',
    nom: 'Péritonite postopératoire',
    resume:
      'Infection péritonéale après chirurgie abdominale (lâchage d’anastomose ou de suture, perforation méconnue, abcès), fréquente après chirurgie digestive en urgence (perforation typhique, occlusion) et césariennes compliquées : diagnostic difficile (signes masqués par les suites opératoires) ; tout patient qui ne va pas bien après J3 (fièvre, tachycardie, iléus prolongé, défense, confusion, oligurie, défaillance d’organe) doit faire évoquer une péritonite ; échographie, scanner ; réanimation, antibiotiques à large spectre, reprise chirurgicale précoce (lavage, drainage, stomie) ; mortalité élevée si retard.',
    definition:
      'Péritonite survenant dans les suites d’une intervention abdominale, le plus souvent par fuite digestive (désunion anastomotique, perforation) ou infection résiduelle.',
    physiopathologie:
      '## Causes\n- **Lâchage d’anastomose** ou de suture digestive (dénutrition, ischémie, tension, sepsis)\n- Perforation méconnue ou secondaire (perforations typhiques multiples)\n- Abcès résiduel, nécrose intestinale\n- Après césarienne : lésion intestinale, endométrite compliquée\n\n## Germes\n- Flore nosocomiale et résistante : entérobactéries productrices de BLSE, entérocoques, Pseudomonas, anaérobies, Candida',
    diagnostic:
      '## Clinique (souvent fruste)\n- **Patient qui ne va pas bien** après J3 : **fièvre**, **tachycardie**, **iléus** prolongé, douleurs anormales, **défense**\n- Signes généraux : confusion, polypnée, oligurie, hypotension\n- Liquide digestif ou pus par un drain ou la cicatrice\n\n## Examens\n- **NFS**, **CRP** (élévation secondaire), **lactates**, créatinine, hémocultures\n- **Échographie** (épanchement, collection), **scanner** abdominal (fuite de produit de contraste, collections, pneumopéritoine)\n- Prélèvements peropératoires (cultures, antibiogramme, levures)',
    examens: [
      ['confirmation', 'scanner-abdominal', 'Fuite, collections.'],
      ['premiere_intention', 'echographie-abdominale', 'Épanchement.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['gravite', 'lactates', 'Choc.'],
      ['premiere_intention', 'hemocultures', 'Bactériémie.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'prelevement-de-pus', 'Germes résistants.'],
    ],
    scores: [],
    differentiels: [
      ['infection-du-site-operatoire', 'Infection pariétale.'],
      ['occlusion-sur-bride', 'Occlusion postopératoire.'],
      ['embolie-pulmonaire', 'Tachycardie, dyspnée postopératoire.'],
      ['paludisme-grave', 'Fièvre postopératoire en zone d’endémie.'],
      ['Pneumopathie postopératoire', 'Toux, foyer.'],
    ],
    etiologies: '## Causes\n- Lâchage d’anastomose, perforation, abcès, nécrose',
    principes: [
      [
        'Réanimation',
        'Immédiate.',
        '- Remplissage, vasopresseurs si choc, oxygène, correction des troubles, sonde gastrique, sonde urinaire\n- **Antibiotiques** à large spectre couvrant les germes nosocomiaux : **imipénème** ou méropénème (± vancomycine selon l’écologie), **fluconazole** si facteurs de risque de Candida ; adaptation aux prélèvements',
      ],
      [
        'Reprise chirurgicale',
        'Précoce.',
        '- **Laparotomie** : contrôle de la source (suture, résection, **stomie** plutôt qu’une nouvelle anastomose), **lavage** abondant, **drainage**\n- Drainage percutané d’un abcès localisé si patient stable\n- Laparotomies itératives ou abdomen ouvert dans les formes graves',
      ],
      [
        'Mesures associées',
        'Soutien.',
        '- **Nutrition** (entérale si possible), thromboprophylaxie, soins de stomie\n- Durée d’antibiothérapie 4–7 jours après contrôle de la source',
      ],
    ],
    molecules: [
      ['imipeneme-cilastatine', 'premiere', 'Antibiothérapie large spectre'],
      ['meropeneme', 'alternative', 'Antibiothérapie large spectre'],
      ['vancomycine', 'adjuvant', 'Entérocoques résistants, SARM'],
      ['fluconazole', 'adjuvant', 'Candida'],
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['enoxaparine', 'adjuvant', 'Thromboprophylaxie'],
    ],
    complications: [
      {
        nom: 'Choc septique et défaillance multiviscérale',
        fiche: 'sepsis-et-choc-septique',
        description: 'Retard diagnostique.',
        traitement: '- Réanimation',
        clinique: '- Hypotension',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Fistules digestives',
        fiche: 'fistules-digestives',
        description: 'Fuite persistante.',
        traitement: '- Drainage, nutrition',
        clinique: '- Écoulement digestif',
        paraclinique: '',
      },
      {
        nom: 'Éventration et éviscération',
        fiche: 'eventration',
        description: 'Infection de paroi.',
        traitement: '- Reprise',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Mortalité de 20 à 50 % ; dépend de la rapidité de la reprise chirurgicale',
    urgences: ['choc-septique', 'abdomen-aigu-chirurgical'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Distension abdominale', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Désorientation', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'WSES — recommandations de pratique clinique',
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
    ],
    niveaux: {
      cs: ['', ''],
      hgr: ['- Reconnaissance précoce, antibiotiques, reprise chirurgicale', ''],
      tert: ['- Réanimation, scanner, chirurgie complexe', ''],
    },
    alertes: {
      'choc-septique': 'Opéré de l’abdomen avec fièvre, tachycardie et hypotension',
      'abdomen-aigu-chirurgical': 'Opéré qui ne va pas bien après J3 avec défense',
    },
    formes: [
      {
        nom: 'Lâchage d’anastomose',
        type: 'commune',
        description: 'Entre J3 et J7.',
        terrain: '- Chirurgie digestive',
        fonctionnels: '- Douleur, iléus',
        generaux: '- Fièvre, tachycardie',
        physiques: '- Défense, liquide digestif par le drain',
        paraclinique: '- Fuite au scanner',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
      {
        nom: 'Péritonite postopératoire avec choc',
        type: 'gravite',
        description: 'Défaillance multiviscérale.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Confusion, oligurie',
        paraclinique: '- Lactates élevés',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Fistules digestives
  {
    ...VISC,
    slug: 'fistules-digestives',
    nom: 'Fistules digestives',
    resume:
      'Communication anormale entre le tube digestif et la peau (fistule externe) ou un autre organe, le plus souvent postopératoire (lâchage d’anastomose, perforations typhiques, plaies), parfois liée à la tuberculose, à la maladie de Crohn, au cancer ou à la radiothérapie : écoulement de liquide digestif par la plaie ou un drain, irritation cutanée, déshydratation, dénutrition, sepsis ; prise en charge par étapes (SNAP) : contrôle du Sepsis, Nutrition, soins de la peau (Anatomie de la fistule), Plan chirurgical ; fermeture spontanée fréquente en l’absence d’obstacle d’aval ; chirurgie différée.',
    definition:
      'Communication anormale entre la lumière du tube digestif et la peau (fistule entéro-cutanée), une cavité ou un autre organe, de débit faible (< 200 mL/j), modéré ou élevé (> 500 mL/j).',
    physiopathologie:
      '## Causes\n- **Postopératoires** (75–90 %) : lâchage d’anastomose, plaie intestinale méconnue, perforations typhiques\n- **Spontanées** : tuberculose, Crohn, cancer, radiothérapie, diverticulite, traumatisme\n\n## Conséquences\n- **Pertes hydro-électrolytiques** (déshydratation, hypokaliémie, acidose), **dénutrition**, **sepsis**, lésions cutanées\n\n## Facteurs empêchant la fermeture (FRIENDS)\n- Corps étranger, radiothérapie, infection ou inflammation, épithélialisation du trajet, néoplasie, obstacle d’aval (Distal obstruction), trajet court (Short)',
    diagnostic:
      '## Clinique\n- Écoulement de **liquide digestif** (bilieux, fécaloïde, alimentaire) par la plaie ou un drain, quelques jours après une chirurgie\n- **Débit** quotidien, aspect de la peau, fièvre, état nutritionnel, déshydratation\n\n## Examens\n- **Ionogramme**, créatinine, **albumine**, NFS, CRP\n- **Scanner** abdominal (collections, abcès)\n- **Opacification** du trajet (fistulographie) ou transit pour l’anatomie (origine, longueur, obstacle d’aval)\n- Recherche de cause : biopsie (tuberculose, cancer)',
    examens: [
      ['premiere_intention', 'ionogramme', 'Pertes électrolytiques.'],
      ['premiere_intention', 'creatinine', 'Déshydratation.'],
      ['gravite', 'electrophorese-proteines', 'Albumine (dénutrition).'],
      ['confirmation', 'opacification-digestive', 'Anatomie de la fistule.'],
      ['premiere_intention', 'scanner-abdominal', 'Collections.'],
      ['etiologique', 'biopsie-histologie', 'Tuberculose, cancer.'],
    ],
    scores: [],
    differentiels: [
      ['infection-du-site-operatoire', 'Pus sans liquide digestif.'],
      ['peritonite-postoperatoire', 'Fuite non drainée avec péritonite.'],
      ['fissure-fistule-anales', 'Fistule périnéale.'],
    ],
    etiologies:
      '## Causes\n- Chirurgie (lâchage d’anastomose), typhoïde, tuberculose, Crohn, cancer, radiothérapie',
    principes: [
      [
        'Sepsis',
        'Contrôler.',
        '- Drainage des collections (percutané ou chirurgical), antibiotiques si infection',
      ],
      [
        'Nutrition et équilibre',
        'Soutenir.',
        '- Compensation des pertes (Ringer lactate, NaCl, **potassium**), surveillance du bilan entrées-sorties\n- **Nutrition** : entérale si possible (fistule basse ou faible débit), parentérale si débit élevé ou fistule haute\n- **IPP** et **octréotide** pour réduire le débit des fistules à haut débit',
      ],
      [
        'Peau et chirurgie',
        'Protéger puis réparer.',
        '- Protection cutanée (poches de stomie, pâte à l’oxyde de zinc), aspiration\n- **Fermeture spontanée** dans 30–70 % en 4–6 semaines si pas de facteur défavorable\n- **Chirurgie différée** (≥ 3 mois, patient renourri) : résection du segment et anastomose',
      ],
    ],
    molecules: [
      ['octreotide', 'alternative', 'Réduction du débit'],
      ['omeprazole', 'alternative', 'Réduction du débit (fistule haute)'],
      ['ringer-lactate', 'premiere', 'Compensation des pertes'],
      ['chlorure-de-potassium', 'premiere', 'Hypokaliémie'],
      ['oxyde-de-zinc-pommade', 'adjuvant', 'Protection cutanée'],
      ['albumine-humaine', 'adjuvant', 'Hypoalbuminémie sévère (selon contexte)'],
    ],
    complications: [
      {
        nom: 'Dénutrition sévère',
        fiche: 'malnutrition-aigue-severe',
        description: 'Pertes, jeûne.',
        traitement: '- Nutrition',
        clinique: '- Amaigrissement',
        paraclinique: '- Albumine',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Collections.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Fièvre, choc',
        paraclinique: '',
      },
      {
        nom: 'Troubles hydro-électrolytiques',
        description: 'Fistule à haut débit.',
        traitement: '- Compensation',
        clinique: '- Déshydratation',
        paraclinique: '- Ionogramme',
      },
    ],
    evolution:
      '## Pronostic\n- Fermeture spontanée fréquente des fistules à faible débit ; mortalité élevée en cas de sepsis et de dénutrition',
    urgences: [],
    symptomes: [
      ['Écoulement purulent d’une plaie', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Asthénie', 'frequent'],
    ],
    sources: ['Sabiston Textbook of Surgery', 'WSES — recommandations de pratique clinique'],
    niveaux: {
      cs: ['', ''],
      hgr: ['- Soins de peau, compensation, nutrition, drainage', ''],
      tert: ['- Nutrition parentérale, chirurgie différée', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fistule entéro-cutanée à faible débit',
        type: 'commune',
        description: 'Fermeture spontanée possible.',
        terrain: '- Postopératoire',
        fonctionnels: '- Écoulement par la plaie',
        generaux: '',
        physiques: '- Orifice cutané',
        paraclinique: '- Débit < 200 mL/j',
        etiologies: '- Lâchage d’anastomose',
        syndromes: [],
      },
      {
        nom: 'Fistule à haut débit',
        type: 'gravite',
        description: 'Déshydratation, dénutrition.',
        terrain: '- Fistule du grêle proximal',
        fonctionnels: '- Écoulement abondant',
        generaux: '- Déshydratation',
        physiques: '- Peau irritée',
        paraclinique: '- Débit > 500 mL/j, hypokaliémie',
        etiologies: '',
        syndromes: ['syndrome-de-deshydratation-extracellulaire'],
      },
    ],
  },
];
