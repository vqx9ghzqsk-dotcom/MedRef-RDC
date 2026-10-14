'use strict';

/**
 * Lot 44 (phase 2, hématologie et oncologie pédiatriques, partie 1) — leucémie aiguë
 * lymphoblastique, néphroblastome, rétinoblastome, neuroblastome. Rédigé par IA (OMS GICC, SIOP,
 * Nelson) : à valider. Les chimiothérapies relèvent des centres d'oncologie pédiatrique.
 */

const ONCOPED = { departement: 'pediatrie', specialite: 'Hématologie et oncologie pédiatriques' };

module.exports = [
  // =================================================================== LAL
  {
    ...ONCOPED,
    slug: 'leucemie-aigue-lymphoblastique-enfant',
    nom: 'Leucémie aiguë lymphoblastique',
    resume:
      'Cancer le plus fréquent de l’enfant (pic 2–5 ans) : pâleur, fièvre, infections, saignements (purpura, épistaxis), douleurs osseuses et boiterie, adénopathies, hépatosplénomégalie ; NFS avec blastes ou cytopénies, myélogramme ; orientation urgente vers un centre d’oncologie pédiatrique ; prévention du syndrome de lyse (hydratation, allopurinol), transfusions, antibiotiques en cas de fièvre ; guérison possible chez plus de 80 % des enfants dans les pays à ressources élevées avec la chimiothérapie.',
    definition:
      'Prolifération maligne de précurseurs lymphoïdes (lymphoblastes B ou T) envahissant la moelle osseuse (≥ 20 % de blastes) et souvent le sang, les organes lymphoïdes et le système nerveux central.',
    physiopathologie:
      '## Mécanismes\n- Anomalies génétiques acquises des précurseurs lymphoïdes ; envahissement médullaire → **insuffisance médullaire** (anémie, neutropénie, thrombopénie)\n- **Syndrome tumoral** : adénopathies, hépatosplénomégalie, masse médiastinale (LAL T), atteinte méningée et testiculaire\n\n## Terrain\n- Pic entre 2 et 5 ans ; trisomie 21 (risque augmenté)',
    diagnostic:
      '## Clinique\n- **Pâleur**, asthénie, **fièvre** et infections, **purpura**, ecchymoses, épistaxis, gingivorragies\n- **Douleurs osseuses**, **boiterie**, refus de marcher\n- **Adénopathies**, **hépatosplénomégalie**, masse testiculaire\n- Détresse respiratoire (masse médiastinale), céphalées, paralysie de nerfs crâniens\n\n## Examens\n- **NFS et frottis** : blastes, anémie, thrombopénie, leucocytes bas, normaux ou très élevés\n- **Myélogramme** (diagnostic, immunophénotypage en centre spécialisé)\n- Ionogramme, **uricémie, kaliémie, phosphorémie, calcémie**, créatinine (syndrome de lyse), LDH\n- Radiographie thoracique (masse médiastinale), ponction lombaire (au centre spécialisé), TDR paludisme, test VIH',
    examens: [
      ['premiere_intention', 'nfs', 'Cytopénies, blastes.'],
      ['confirmation', 'myelogramme', 'Blastes ≥ 20 %.'],
      ['gravite', 'uricemie', 'Syndrome de lyse.'],
      ['gravite', 'ionogramme', 'Hyperkaliémie.'],
      ['gravite', 'phosphoremie', 'Hyperphosphatémie.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'radiographie-thoracique', 'Masse médiastinale.'],
      ['premiere_intention', 'ldh', 'Masse tumorale.'],
      ['deuxieme_intention', 'lcr', 'Atteinte méningée.'],
      ['etiologique', 'tdr-paludisme', 'Diagnostic différentiel.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-grave-enfant', 'Anémie fébrile, TDR positif.'],
      ['purpura-thrombopenique-immunologique-enfant', 'Thrombopénie isolée, pas d’organomégalie.'],
      ['lymphome-de-burkitt', 'Masse maxillaire ou abdominale.'],
      ['rhumatisme-articulaire-aigu-enfant', 'Douleurs articulaires fébriles.'],
      ['osteomyelite-aigue', 'Douleur osseuse focale fébrile.'],
      ['Aplasie médullaire', 'Pancytopénie sans organomégalie ni blastes.'],
    ],
    etiologies:
      '## Facteurs\n- Le plus souvent inconnus ; trisomie 21, radiations, certains syndromes génétiques',
    principes: [
      [
        'Mesures urgentes',
        'Stabiliser avant le transfert.',
        '- **Hyperhydratation** (2–3 L/m²/j, sans potassium) et **allopurinol** 10 mg/kg/j (prévention du syndrome de lyse)\n- **Transfusion** de concentrés globulaires si anémie mal tolérée (prudence si hyperleucocytose), plaquettes si saignement\n- **Fièvre** = neutropénie fébrile : hémocultures et antibiotiques IV immédiats (ceftriaxone ± gentamicine selon le protocole)\n- Pas de corticoïdes avant le diagnostic (masquent la maladie et déclenchent la lyse)',
      ],
      [
        'Traitement spécifique',
        'Centre d’oncologie pédiatrique.',
        '- Chimiothérapie selon un protocole adapté (OMS GICC, réseaux africains) : induction (**prednisolone** ou dexaméthasone, **vincristine**, asparaginase ± doxorubicine), consolidation, prophylaxie méningée (**méthotrexate** intrathécal), entretien (**mercaptopurine**, méthotrexate) pendant 2 à 2,5 ans',
      ],
      [
        'Soins de support',
        'Réduire la mortalité toxique.',
        '- **Cotrimoxazole** (pneumocystose), traitement du paludisme, nutrition, soutien psychosocial, lutte contre l’abandon de traitement, soins palliatifs si nécessaire',
      ],
    ],
    molecules: [
      ['allopurinol', 'premiere', 'Prévention du syndrome de lyse'],
      ['prednisolone', 'premiere', 'Induction (centre spécialisé)'],
      ['vincristine', 'premiere', 'Induction (centre spécialisé)'],
      ['methotrexate', 'premiere', 'Prophylaxie méningée, entretien'],
      ['mercaptopurine', 'premiere', 'Entretien'],
      ['doxorubicine', 'alternative', 'Induction des formes à haut risque'],
      ['dexamethasone', 'alternative', 'Induction'],
      ['ceftriaxone', 'adjuvant', 'Neutropénie fébrile'],
      ['cotrimoxazole', 'adjuvant', 'Prophylaxie de la pneumocystose'],
    ],
    complications: [
      {
        nom: 'Neutropénie fébrile',
        fiche: 'neutropenie-febrile',
        description: 'Insuffisance médullaire, chimiothérapie.',
        traitement: '- Antibiotiques IV immédiats',
        clinique: '- Fièvre',
        paraclinique: '- PNN < 500/mm³',
      },
      {
        nom: 'Syndrome de lyse tumorale',
        description: 'Destruction des cellules tumorales.',
        traitement: '- Hyperhydratation, allopurinol, dialyse',
        clinique: '- Oligurie, troubles du rythme',
        paraclinique: '- Hyperkaliémie, hyperuricémie, hyperphosphatémie',
      },
      {
        nom: 'Hémorragies',
        description: 'Thrombopénie.',
        traitement: '- Transfusion de plaquettes',
        clinique: '- Purpura, épistaxis',
        paraclinique: '- Plaquettes',
      },
      {
        nom: 'Atteinte méningée',
        description: 'Infiltration du SNC.',
        traitement: '- Chimiothérapie intrathécale',
        clinique: '- Céphalées, paralysies',
        paraclinique: '- Blastes dans le LCR',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison > 80 % dans les centres équipés ; nettement moins en Afrique subsaharienne (retard diagnostique, infections, abandon) : le diagnostic précoce et les soins de support améliorent la survie',
    urgences: [],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Purpura', 'frequent'],
      ['Douleurs osseuses', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Splénomégalie', 'frequent'],
      ['Hépatomégalie', 'frequent'],
      ['Ecchymoses', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      'NCCN — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Repérer pâleur + fièvre + saignements + organomégalie, NFS, orientation',
        '- Tout enfant suspect',
      ],
      hgr: [
        '- NFS, frottis, hydratation, allopurinol, transfusion, antibiotiques',
        '- Myélogramme, centre d’oncologie',
      ],
      tert: ['- Oncologie pédiatrique : chimiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'LAL commune de l’enfant',
        type: 'commune',
        description: 'Forme B, 2–5 ans.',
        terrain: '- Enfant de 2 à 5 ans',
        fonctionnels: '- Douleurs osseuses, asthénie',
        generaux: '- Fièvre, pâleur',
        physiques: '- Adénopathies, hépatosplénomégalie, purpura',
        paraclinique: '- Blastes, cytopénies',
        etiologies: '',
        syndromes: ['syndrome-anemique', 'syndrome-hemorragique'],
      },
      {
        nom: 'LAL T avec masse médiastinale',
        type: 'gravite',
        description: 'Compression des voies aériennes.',
        terrain: '- Grand enfant, garçon',
        fonctionnels: '- Dyspnée, orthopnée',
        generaux: '',
        physiques: '- Turgescence jugulaire, œdème du visage',
        paraclinique: '- Masse médiastinale, hyperleucocytose',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Néphroblastome
  {
    ...ONCOPED,
    slug: 'nephroblastome',
    nom: 'Néphroblastome',
    resume:
      'Tumeur de Wilms : tumeur maligne du rein du jeune enfant (1–5 ans), découverte souvent par les parents devant une masse abdominale de flanc indolore, parfois hématurie, HTA, fièvre ; échographie abdominale (masse rénale, thrombus de la veine cave), radiographie thoracique (métastases) ; ne pas palper la masse de façon répétée ; chimiothérapie préopératoire (vincristine, dactinomycine) puis néphrectomie : guérison possible dans plus de 70 % des cas même en Afrique avec des protocoles adaptés.',
    definition:
      'Tumeur maligne embryonnaire du rein, la plus fréquente des tumeurs rénales de l’enfant, issue du blastème métanéphrique.',
    physiopathologie:
      '## Mécanismes\n- Tumeur embryonnaire (gènes WT1, WT2), parfois associée à des syndromes : aniridie, hémihypertrophie, syndrome de Beckwith-Wiedemann, anomalies génito-urinaires\n- Extension locale (veine rénale, veine cave), métastases **pulmonaires** et hépatiques',
    diagnostic:
      '## Clinique\n- **Masse abdominale** de flanc, ferme, lisse, indolore, ne dépassant pas la ligne médiane au début, découverte au bain ou à l’habillage\n- **Hématurie** (20 %), **HTA**, douleur abdominale, fièvre, anémie\n- Rechercher : aniridie, hémihypertrophie, anomalies génitales, varicocèle (thrombus)\n- **Palpation douce et limitée** (risque de rupture tumorale)\n\n## Examens\n- **Échographie abdominale** et Doppler (masse rénale, rein controlatéral, thrombus)\n- **Scanner abdominal** si disponible, **radiographie thoracique** (métastases pulmonaires)\n- NFS, créatinine, bandelette urinaire, **catécholamines urinaires** (éliminer un neuroblastome)\n- Pas de biopsie systématique (protocoles SIOP) ; histologie après néphrectomie',
    examens: [
      ['confirmation', 'echographie-abdominale', 'Masse rénale, thrombus.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Bilan d’extension local.'],
      ['gravite', 'radiographie-thoracique', 'Métastases pulmonaires.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie.'],
      ['etiologique', 'catecholamines-urinaires', 'Neuroblastome.'],
      ['confirmation', 'biopsie-histologie', 'Histologie après néphrectomie.'],
    ],
    scores: [],
    differentiels: [
      ['neuroblastome', 'Masse franchissant la ligne médiane, calcifications, catécholamines élevées.'],
      ['lymphome-de-burkitt', 'Masse abdominale d’évolution très rapide.'],
      ['Hydronéphrose', 'Rein dilaté à l’échographie.'],
      ['hepatosplenomegalie-enfant', 'Organomégalie.'],
      ['Polykystose rénale', 'Kystes bilatéraux.'],
    ],
    etiologies:
      '## Facteurs\n- Syndromes génétiques (aniridie, Beckwith-Wiedemann, hémihypertrophie) ; le plus souvent sporadique',
    principes: [
      [
        'Chimiothérapie préopératoire',
        'Réduire la tumeur.',
        '- **Vincristine** + **dactinomycine** pendant 4 semaines (protocoles SIOP ou adaptés à l’Afrique)\n- Formes métastatiques : ajout de doxorubicine, 6 semaines',
      ],
      [
        'Chirurgie',
        'Exérèse.',
        '- **Néphrectomie élargie** par un chirurgien expérimenté (éviter la rupture), curage ganglionnaire',
      ],
      [
        'Traitement postopératoire',
        'Selon le stade et l’histologie.',
        '- Chimiothérapie postopératoire ; radiothérapie si stade avancé (accès limité)\n- Soins de support : nutrition, prévention des infections, traitement de l’HTA, suivi',
      ],
    ],
    molecules: [
      ['vincristine', 'premiere', 'Chimiothérapie'],
      ['dactinomycine', 'premiere', 'Chimiothérapie'],
      ['doxorubicine', 'alternative', 'Formes métastatiques ou à haut risque'],
      ['amlodipine', 'adjuvant', 'HTA'],
    ],
    complications: [
      {
        nom: 'Rupture tumorale',
        description: 'Traumatisme, palpation répétée.',
        traitement: '- Chirurgie, intensification',
        clinique: '- Douleur, choc',
        paraclinique: '- Hémopéritoine',
      },
      {
        nom: 'Métastases pulmonaires',
        description: 'Extension.',
        traitement: '- Chimiothérapie, radiothérapie',
        clinique: '- Souvent silencieuses',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Hypertension artérielle',
        fiche: 'hypertension-arterielle-enfant',
        description: 'Sécrétion de rénine.',
        traitement: '- Antihypertenseurs',
        clinique: '- Céphalées',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Survie > 90 % dans les pays à ressources élevées ; 50–70 % dans les programmes africains, limitée par l’abandon et le diagnostic tardif',
    urgences: [],
    symptomes: [
      ['Masse abdominale', 'tres_frequent'],
      ['Distension abdominale', 'frequent'],
      ['Hématurie', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Masse abdominale de l’enfant : orientation rapide', '- Toute masse abdominale'],
      hgr: ['- Échographie, radiographie thoracique', '- Oncologie, chirurgie pédiatrique'],
      tert: ['- Chimiothérapie, néphrectomie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Néphroblastome localisé',
        type: 'commune',
        description: 'Masse de flanc.',
        terrain: '- Enfant de 1 à 5 ans',
        fonctionnels: '',
        generaux: '- Bon état général',
        physiques: '- Masse de flanc lisse',
        paraclinique: '- Masse rénale à l’échographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Néphroblastome métastatique',
        type: 'gravite',
        description: 'Métastases pulmonaires.',
        terrain: '',
        fonctionnels: '- Toux',
        generaux: '- Altération de l’état général',
        physiques: '- Masse volumineuse',
        paraclinique: '- Nodules pulmonaires',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Rétinoblastome
  {
    ...ONCOPED,
    slug: 'retinoblastome',
    nom: 'Rétinoblastome',
    resume:
      'Tumeur maligne de la rétine du jeune enfant (< 5 ans), héréditaire dans 40 % des cas (bilatérale) : leucocorie (reflet blanc de la pupille, visible sur les photos au flash), strabisme, œil rouge douloureux, puis exophtalmie et masse orbitaire dans les formes tardives fréquentes en Afrique ; tester le reflet rouge à chaque consultation ; fond d’œil, échographie oculaire ; énucléation et chimiothérapie : guérison fréquente si diagnostic avant l’extension extraoculaire.',
    definition:
      'Tumeur maligne embryonnaire de la rétine liée à l’inactivation des deux copies du gène RB1, uni- ou bilatérale, la plus fréquente des tumeurs oculaires de l’enfant.',
    physiopathologie:
      '## Formes\n- **Héréditaire** (≈ 40 %) : mutation germinale de RB1, souvent **bilatérale** et précoce (< 1 an), risque de seconds cancers (ostéosarcome)\n- **Sporadique** : unilatérale, plus tardive\n\n## Extension\n- Intraoculaire → nerf optique, orbite → **cerveau** (LCR), métastases osseuses et médullaires',
    diagnostic:
      '## Clinique\n- **Leucocorie** (« œil de chat ») : signe d’appel principal, souvent remarqué par les parents ou sur une photographie\n- **Strabisme** d’apparition récente, baisse de la vision\n- Œil rouge douloureux, glaucome, hétérochromie\n- Formes tardives : **exophtalmie**, masse orbitaire, signes neurologiques\n\n## Dépistage\n- **Test du reflet rouge** à l’ophtalmoscope à chaque visite du nourrisson\n\n## Examens\n- **Fond d’œil** sous dilatation (et sous anesthésie), **échographie oculaire** (calcifications)\n- Scanner ou IRM orbitaire et cérébral (extension), ponction lombaire et myélogramme dans les formes avancées\n- Examen des frères et sœurs, conseil génétique',
    examens: [
      ['confirmation', 'fond-d-oeil', 'Tumeur rétinienne.'],
      ['confirmation', 'echographie-parties-molles', 'Échographie oculaire : masse calcifiée.'],
      ['gravite', 'scanner-cerebral', 'Extension orbitaire et cérébrale.'],
      ['gravite', 'irm-cerebrale', 'Nerf optique, cerveau.'],
      ['gravite', 'lcr', 'Atteinte méningée.'],
      ['gravite', 'myelogramme', 'Métastases médullaires.'],
      ['premiere_intention', 'acuite-visuelle', 'Fonction visuelle.'],
    ],
    scores: [],
    differentiels: [
      ['cataracte', 'Cataracte congénitale : opacité du cristallin.'],
      ['Toxocarose oculaire', 'Granulome rétinien, enfant plus grand.'],
      ['Maladie de Coats', 'Exsudats rétiniens, garçon.'],
      ['Rétinopathie du prématuré', 'Antécédent de prématurité et d’oxygénothérapie.'],
      ['Cellulite orbitaire', 'Exophtalmie fébrile aiguë.'],
    ],
    etiologies: '## Facteurs\n- Mutation du gène RB1 (germinale ou somatique) ; antécédents familiaux',
    principes: [
      [
        'Diagnostic précoce',
        'Sauver la vie, puis l’œil.',
        '- Toute **leucocorie** ou strabisme récent : **orientation urgente** vers l’ophtalmologie\n- Éducation des agents de santé et des familles (reflet blanc sur les photos)',
      ],
      [
        'Traitement',
        'Selon le stade.',
        '- **Énucléation** de l’œil atteint dans les formes unilatérales avancées (le plus fréquent en Afrique), avec prothèse\n- **Chimiothérapie** (**carboplatine**, **étoposide**, **vincristine**) : formes bilatérales, extension extraoculaire, réduction tumorale\n- Traitements focaux (laser, cryothérapie) dans les petites tumeurs (centres spécialisés) ; radiothérapie si extension orbitaire',
      ],
      [
        'Suivi',
        'Surveiller.',
        '- Fonds d’œil répétés, surveillance de l’autre œil, examen des frères et sœurs, conseil génétique',
      ],
    ],
    molecules: [
      ['carboplatine', 'premiere', 'Chimiothérapie (centre spécialisé)'],
      ['etoposide', 'premiere', 'Chimiothérapie (centre spécialisé)'],
      ['vincristine', 'premiere', 'Chimiothérapie (centre spécialisé)'],
    ],
    complications: [
      {
        nom: 'Cécité',
        description: 'Atteinte bilatérale, énucléation.',
        traitement: '- Réadaptation',
        clinique: '- Perte de vision',
        paraclinique: '',
      },
      {
        nom: 'Extension cérébrale',
        description: 'Nerf optique, méninges.',
        traitement: '- Chimiothérapie, soins palliatifs',
        clinique: '- Céphalées, vomissements, convulsions',
        paraclinique: '- IRM, LCR',
      },
      {
        nom: 'Seconds cancers',
        description: 'Forme héréditaire.',
        traitement: '- Surveillance',
        clinique: '- Douleur osseuse',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Survie > 95 % si intraoculaire ; très mauvaise en cas d’extension orbitaire ou cérébrale (fréquente en Afrique par retard diagnostique)',
    urgences: [],
    symptomes: [
      ['Leucocorie', 'tres_frequent'],
      ['Strabisme', 'frequent'],
      ['Yeux rouges', 'occasionnel'],
      ['Exophtalmie', 'occasionnel'],
      ['Troubles visuels', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Test du reflet rouge, orientation urgente si leucocorie', '- Leucocorie, strabisme récent'],
      hgr: ['- Fond d’œil, échographie oculaire', '- Ophtalmologie, oncologie'],
      tert: ['- Énucléation, chimiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Rétinoblastome intraoculaire',
        type: 'commune',
        description: 'Leucocorie.',
        terrain: '- Enfant < 3 ans',
        fonctionnels: '- Strabisme',
        generaux: '',
        physiques: '- Leucocorie',
        paraclinique: '- Masse calcifiée',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Rétinoblastome extraoculaire',
        type: 'gravite',
        description: 'Forme tardive.',
        terrain: '',
        fonctionnels: '- Douleur',
        generaux: '- Altération de l’état général',
        physiques: '- Exophtalmie, masse orbitaire',
        paraclinique: '- Extension au nerf optique',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Rétinoblastome bilatéral héréditaire',
        type: 'terrain',
        description: 'Mutation germinale.',
        terrain: '- Nourrisson, antécédents familiaux',
        fonctionnels: '',
        generaux: '',
        physiques: '- Atteinte des deux yeux',
        paraclinique: '',
        etiologies: '- Mutation RB1',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Neuroblastome
  {
    ...ONCOPED,
    slug: 'neuroblastome',
    nom: 'Neuroblastome',
    resume:
      'Tumeur maligne du système nerveux sympathique du jeune enfant (< 5 ans), surrénalienne le plus souvent : masse abdominale dure et irrégulière franchissant la ligne médiane, altération de l’état général, douleurs osseuses, ecchymoses péri-orbitaires (« yeux de raton laveur »), exophtalmie, compression médullaire ; catécholamines urinaires, échographie avec calcifications ; pronostic très variable (formes du nourrisson parfois régressives).',
    definition:
      'Tumeur embryonnaire maligne développée aux dépens des cellules de la crête neurale (médullosurrénale, chaînes sympathiques), la tumeur solide extracrânienne la plus fréquente du jeune enfant.',
    physiopathologie:
      '## Localisations\n- **Surrénale** (la plus fréquente), chaînes sympathiques rétropéritonéales, thoraciques, cervicales, pelviennes\n\n## Extension\n- Ganglions, **os** (douleurs), **moelle osseuse** (cytopénies), **orbites** (ecchymoses, exophtalmie), foie (nourrisson), peau\n- Extension dans le canal rachidien : **compression médullaire**\n- Sécrétion de catécholamines (VMA, HVA)',
    diagnostic:
      '## Clinique\n- **Masse abdominale** dure, irrégulière, **dépassant la ligne médiane**\n- Altération de l’état général, fièvre, **douleurs osseuses**, boiterie, pâleur\n- **Ecchymoses péri-orbitaires**, exophtalmie\n- Paraplégie, troubles sphinctériens (compression médullaire) ; syndrome de Claude Bernard-Horner (forme cervicale)\n- Nourrisson : hépatomégalie massive, nodules cutanés bleutés\n- Rare : opsomyoclonies, diarrhée sécrétoire, HTA\n\n## Examens\n- **Échographie abdominale** (masse surrénalienne avec **calcifications**), scanner ou IRM\n- **Catécholamines urinaires** (VMA, HVA)\n- NFS, **myélogramme**, LDH, ferritine, radiographies osseuses\n- **Biopsie** (histologie, amplification de MYCN) en centre spécialisé',
    examens: [
      ['premiere_intention', 'echographie-abdominale', 'Masse calcifiée.'],
      ['confirmation', 'catecholamines-urinaires', 'VMA, HVA élevés.'],
      ['confirmation', 'biopsie-histologie', 'Histologie, MYCN.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Extension.'],
      ['gravite', 'myelogramme', 'Envahissement médullaire.'],
      ['gravite', 'irm-rachidienne', 'Compression médullaire.'],
      ['premiere_intention', 'nfs', 'Cytopénies.'],
      ['gravite', 'ldh', 'Pronostic.'],
      ['gravite', 'radiographie-osseuse', 'Métastases osseuses.'],
    ],
    scores: [],
    differentiels: [
      ['nephroblastome', 'Masse rénale lisse ne dépassant pas la ligne médiane.'],
      ['lymphome-de-burkitt', 'Masse abdominale d’évolution rapide.'],
      ['leucemie-aigue-lymphoblastique-enfant', 'Douleurs osseuses, cytopénies, blastes.'],
      ['maltraitance-enfant', 'Ecchymoses péri-orbitaires (penser au neuroblastome avant d’accuser).'],
      ['osteomyelite-aigue', 'Douleur osseuse fébrile.'],
    ],
    etiologies: '## Facteurs\n- Tumeur embryonnaire sporadique ; rares formes familiales',
    principes: [
      [
        'Urgences',
        'Traiter immédiatement.',
        '- **Compression médullaire** : **dexaméthasone** et chimiothérapie urgente ou décompression (centre spécialisé)\n- Détresse respiratoire (hépatomégalie massive du nourrisson), syndrome de lyse',
      ],
      [
        'Traitement spécifique',
        'Selon le groupe de risque.',
        '- **Faible risque** : chirurgie seule ou surveillance (régression spontanée possible chez le nourrisson)\n- **Risque intermédiaire** : chimiothérapie (**carboplatine**, **étoposide**, **cyclophosphamide**, doxorubicine) puis chirurgie\n- **Haut risque** : traitement intensif rarement accessible ; soins palliatifs si nécessaire',
      ],
      [
        'Soins de support',
        'Accompagner.',
        '- Antalgiques (**morphine** si besoin), nutrition, transfusions, prévention des infections, soutien de la famille',
      ],
    ],
    molecules: [
      ['carboplatine', 'premiere', 'Chimiothérapie'],
      ['etoposide', 'premiere', 'Chimiothérapie'],
      ['cyclophosphamide', 'premiere', 'Chimiothérapie'],
      ['doxorubicine', 'alternative', 'Chimiothérapie'],
      ['vincristine', 'alternative', 'Chimiothérapie'],
      ['dexamethasone', 'adjuvant', 'Compression médullaire'],
      ['morphine', 'adjuvant', 'Douleurs'],
    ],
    complications: [
      {
        nom: 'Compression médullaire',
        fiche: 'compression-medullaire',
        description: 'Extension intrarachidienne.',
        traitement: '- Dexaméthasone, chimiothérapie, chirurgie',
        clinique: '- Paraplégie, troubles sphinctériens',
        paraclinique: '- IRM',
      },
      {
        nom: 'Envahissement médullaire',
        description: 'Métastases.',
        traitement: '- Transfusions, chimiothérapie',
        clinique: '- Pâleur, saignements',
        paraclinique: '- Myélogramme',
      },
      {
        nom: 'Syndrome opsomyoclonique',
        description: 'Paranéoplasique.',
        traitement: '- Corticoïdes, immunoglobulines',
        clinique: '- Mouvements oculaires anarchiques, ataxie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent chez le nourrisson et dans les formes localisées ; mauvais dans les formes métastatiques de l’enfant de plus de 18 mois',
    urgences: [],
    symptomes: [
      ['Masse abdominale', 'tres_frequent'],
      ['Douleurs osseuses', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Exophtalmie', 'occasionnel'],
      ['Ecchymoses', 'occasionnel'],
      ['Paralysie flasque', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'NCCN — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Masse abdominale, douleurs osseuses : orientation', '- Toute masse abdominale, paraplégie'],
      hgr: ['- Échographie, NFS, dexaméthasone si compression', '- Oncologie pédiatrique'],
      tert: ['- Biopsie, chimiothérapie, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Neuroblastome abdominal',
        type: 'commune',
        description: 'Surrénalien.',
        terrain: '- Enfant de 1 à 5 ans',
        fonctionnels: '- Douleurs abdominales',
        generaux: '- Altération de l’état général',
        physiques: '- Masse dure franchissant la ligne médiane',
        paraclinique: '- Calcifications, VMA élevés',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Neuroblastome métastatique',
        type: 'gravite',
        description: 'Os, moelle, orbites.',
        terrain: '- Enfant > 18 mois',
        fonctionnels: '- Douleurs osseuses',
        generaux: '- Fièvre, pâleur',
        physiques: '- Ecchymoses péri-orbitaires',
        paraclinique: '- Envahissement médullaire',
        etiologies: '',
        syndromes: ['syndrome-anemique'],
      },
      {
        nom: 'Neuroblastome du nourrisson',
        type: 'terrain',
        description: 'Hépatomégalie, nodules cutanés.',
        terrain: '- Nourrisson < 1 an',
        fonctionnels: '',
        generaux: '',
        physiques: '- Hépatomégalie massive, nodules bleutés',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
