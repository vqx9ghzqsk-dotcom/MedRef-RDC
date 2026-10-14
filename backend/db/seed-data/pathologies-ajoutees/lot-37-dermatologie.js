'use strict';

/**
 * Lot 37 (phase 2, dermatologie) — zona, herpès cutanéo-muqueux, acné, albinisme (protection
 * cutanée et cancers), carcinomes cutanés, tungose, chéloïdes, complications de la dépigmentation
 * volontaire. Rédigé par IA (OMS, MSF, ouvrages de référence) : à valider.
 */

const DERMATO = { departement: 'medecine-interne', specialite: 'Dermatologie' };

module.exports = [
  // =================================================================== Zona
  {
    ...DERMATO,
    slug: 'zona',
    nom: 'Zona',
    resume:
      'Réactivation du virus varicelle-zona dans un territoire nerveux : douleurs puis vésicules en bande unilatérale ; chez l’adulte jeune, marqueur fréquent d’infection à VIH (test systématique) ; aciclovir 800 mg 5 fois par jour 7 jours (débuté dans les 72 h, toujours si VIH, zona ophtalmique ou étendu) ; antalgiques, soins locaux ; prévention des douleurs post-zostériennes.',
    definition:
      'Éruption vésiculeuse douloureuse, unilatérale et métamérique due à la réactivation du virus varicelle-zona (VZV) latent dans un ganglion sensitif.',
    physiopathologie:
      '## Mécanismes\n- Latence du VZV dans les ganglions sensitifs après la varicelle\n- Réactivation favorisée par l’âge, l’**immunodépression (VIH)**, le stress, les cancers, les corticoïdes\n- Contagiosité : peut transmettre la varicelle aux sujets non immunisés',
    diagnostic:
      '## Clinique\n- Douleurs, brûlures ou paresthésies précédant l’éruption de 1 à 3 jours\n- **Vésicules** groupées en bouquets sur fond érythémateux, **unilatérales**, dans un **dermatome** (thoracique le plus souvent), puis croûtes\n- **Zona ophtalmique** (branche V1) : risque oculaire (vésicule du bout du nez = signe de Hutchinson)\n- Formes graves chez le patient VIH : multimétamérique, nécrotique, disséminée, récidivante\n\n## Examens\n- Diagnostic clinique\n- **Test VIH** systématique chez l’adulte jeune\n- Avis ophtalmologique en cas de zona ophtalmique',
    examens: [
      ['premiere_intention', 'tdr-vih', 'Marqueur d’immunodépression.'],
      ['premiere_intention', 'acuite-visuelle', 'Zona ophtalmique.'],
      ['etiologique', 'glycemie', 'Diabète.'],
    ],
    scores: [],
    differentiels: [
      ['herpes-cutaneo-muqueux', 'Récurrences au même endroit, non métamérique.'],
      ['varicelle', 'Éruption généralisée.'],
      ['Eczéma de contact, impétigo', 'Pas de topographie métamérique.'],
      ['syndrome-coronarien-aigu-sans-st', 'Douleur thoracique avant l’éruption.'],
    ],
    etiologies: '## Facteurs\n- Âge > 50 ans, VIH, cancers, diabète, corticoïdes et immunosuppresseurs',
    principes: [
      [
        'Antiviral',
        'Accélérer la guérison et limiter les complications.',
        '- **Aciclovir** 800 mg 5 fois par jour 7 jours (ou **valaciclovir** 1 g 3 fois par jour), idéalement dans les **72 h**\n- Indiqué chez : sujets > 50 ans, **VIH** et immunodéprimés (même après 72 h), **zona ophtalmique**, formes étendues ou douloureuses\n- Forme disséminée ou grave : aciclovir IV 10 mg/kg toutes les 8 h',
      ],
      [
        'Soins et douleur',
        'Soulager.',
        '- Soins locaux antiseptiques (chlorhexidine), pas de pommades grasses ni de corticoïdes locaux\n- **Paracétamol**, tramadol ; douleur neuropathique : **amitriptyline** 10–25 mg le soir, gabapentine\n- Éviter le contact avec les femmes enceintes et immunodéprimés non immunisés',
      ],
      [
        'Mesures associées',
        'Traiter le terrain.',
        '- Dépistage et prise en charge du VIH (ARV) ; avis ophtalmologique si atteinte oculaire',
      ],
    ],
    molecules: [
      ['aciclovir', 'premiere', 'Antiviral'],
      ['valaciclovir', 'alternative', 'Antiviral'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['amitriptyline', 'adjuvant', 'Douleurs post-zostériennes'],
      ['chlorhexidine-gluconate', 'adjuvant', 'Soins locaux'],
    ],
    complications: [
      {
        nom: 'Douleurs post-zostériennes',
        fiche: 'neuropathies-peripheriques',
        description: 'Persistance > 3 mois.',
        traitement: '- Amitriptyline, gabapentine',
        clinique: '- Brûlures, allodynie',
        paraclinique: '',
      },
      {
        nom: 'Atteinte oculaire',
        fiche: 'oeil-rouge-demarche',
        description: 'Zona ophtalmique : kératite, uvéite.',
        traitement: '- Aciclovir, avis ophtalmologique',
        clinique: '- Œil rouge, baisse de vision',
        paraclinique: '- Acuité visuelle',
      },
      {
        nom: 'Surinfection et zona nécrotique',
        fiche: 'pyodermites',
        description: 'Immunodéprimé.',
        traitement: '- Antibiotiques, soins',
        clinique: '- Ulcérations',
        paraclinique: '',
      },
      {
        nom: 'Paralysie faciale (Ramsay Hunt)',
        fiche: 'paralysie-faciale-peripherique',
        description: 'Zona auriculaire.',
        traitement: '- Aciclovir, corticoïdes',
        clinique: '- Paralysie faciale, otalgie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 2 à 4 semaines ; douleurs post-zostériennes fréquentes après 60 ans ; formes graves chez le patient VIH',
    urgences: [],
    symptomes: [
      ['Éruption vésiculeuse', 'tres_frequent'],
      ['Troubles sensitifs', 'tres_frequent'],
      ['Fièvre', 'occasionnel'],
      ['Yeux rouges', 'occasionnel'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Aciclovir, antalgiques, test VIH', '- Zona ophtalmique, forme nécrotique ou disséminée'],
      hgr: ['- Aciclovir IV, ophtalmologie', ''],
      tert: ['- Dermatologie, ophtalmologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Zona thoracique',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Adulte',
        fonctionnels: '- Brûlures, douleurs',
        generaux: '- Fébricule',
        physiques: '- Vésicules en bande unilatérale',
        paraclinique: '- Diagnostic clinique',
        etiologies: '- VZV',
        syndromes: [],
      },
      {
        nom: 'Zona ophtalmique',
        type: 'topographique',
        description: 'Branche V1.',
        terrain: '',
        fonctionnels: '- Douleur frontale, œil rouge',
        generaux: '',
        physiques: '- Vésicules frontales, signe de Hutchinson',
        paraclinique: '- Avis ophtalmologique',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Zona du patient VIH',
        type: 'terrain',
        description: 'Formes graves.',
        terrain: '- VIH',
        fonctionnels: '- Douleurs intenses',
        generaux: '',
        physiques: '- Plusieurs dermatomes, nécrose',
        paraclinique: '- Test VIH positif',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Herpès
  {
    ...DERMATO,
    slug: 'herpes-cutaneo-muqueux',
    nom: 'Herpès cutanéo-muqueux',
    resume:
      'Infection à virus Herpes simplex (HSV-1 labial, HSV-2 génital) : primo-infection (gingivostomatite de l’enfant, herpès génital), puis récurrences au même site ; première cause d’ulcération génitale, cofacteur du VIH ; aciclovir 400 mg 3 fois par jour (7–10 jours en primo-infection, 5 jours en récurrence), traitement suppressif si récurrences fréquentes ; formes chroniques étendues chez le patient VIH.',
    definition:
      'Infection cutanéo-muqueuse due aux virus Herpes simplex de type 1 ou 2, caractérisée par des vésicules groupées évoluant vers des érosions, avec latence ganglionnaire et récurrences.',
    physiopathologie:
      '## Transmission\n- Contact direct (baiser, rapports sexuels), transmission materno-fœtale lors de l’accouchement (herpès néonatal grave)\n\n## Évolution\n- Primo-infection souvent asymptomatique, latence dans les ganglions sensitifs\n- **Récurrences** déclenchées par la fièvre, le soleil, les règles, le stress, l’immunodépression\n- **VIH** : ulcérations chroniques, extensives ; l’herpès génital augmente le risque de transmission du VIH',
    diagnostic:
      '## Clinique\n- **Herpès labial** : brûlures puis vésicules groupées au bord des lèvres\n- **Gingivostomatite** de l’enfant : fièvre, ulcérations buccales douloureuses, refus de boire\n- **Herpès génital** : vésicules puis **ulcérations génitales** multiples douloureuses, adénopathies ; primo-infection fébrile\n- Patient VIH : ulcérations chroniques et profondes\n\n## Examens\n- Diagnostic clinique ; PCR sur lésion si disponible\n- Ulcération génitale : **sérologie syphilis**, **test VIH** (approche syndromique)',
    examens: [
      ['premiere_intention', 'tdr-vih', 'Coïnfection.'],
      ['premiere_intention', 'serologie-syphilis', 'Diagnostic différentiel de l’ulcération génitale.'],
      ['etiologique', 'beta-hcg', 'Herpès génital et grossesse.'],
    ],
    scores: [],
    differentiels: [
      ['syphilis', 'Chancre unique, induré, indolore.'],
      ['infections-sexuellement-transmissibles', 'Chancre mou (ulcérations douloureuses purulentes).'],
      ['zona', 'Topographie métamérique.'],
      ['Aphtes', 'Ulcérations buccales sans vésicules.'],
      ['Syndrome de Stevens-Johnson', 'Atteinte muqueuse diffuse d’origine médicamenteuse.'],
    ],
    etiologies: '## Facteurs\n- Rapports sexuels non protégés, VIH, immunodépression',
    principes: [
      [
        'Herpès génital',
        'Raccourcir et limiter.',
        '- **Primo-infection** : **aciclovir** 400 mg 3 fois par jour 7 à 10 jours\n- **Récurrence** : aciclovir 400 mg 3 fois par jour 5 jours (débuté dès les prodromes)\n- **Traitement suppressif** (≥ 6 récurrences par an, VIH) : aciclovir 400 mg 2 fois par jour\n- Patient VIH : traitement prolongé jusqu’à cicatrisation, ARV\n- Traitement syndromique des ulcérations génitales (syphilis, chancre mou) selon le protocole',
      ],
      [
        'Herpès oro-labial',
        'Soulager.',
        '- Formes simples : soins locaux, antalgiques\n- **Gingivostomatite** de l’enfant : **aciclovir** 15 mg/kg (max 200 mg) 5 fois par jour 7 jours si vue précocement, antalgiques, hydratation (risque de déshydratation)',
      ],
      [
        'Grossesse et nouveau-né',
        'Prévenir l’herpès néonatal.',
        '- Herpès génital en fin de grossesse : aciclovir dès 36 SA ; césarienne si lésions au travail\n- Nouveau-né exposé ou symptomatique : aciclovir IV 20 mg/kg toutes les 8 h',
      ],
    ],
    molecules: [
      ['aciclovir', 'premiere', 'Antiviral'],
      ['valaciclovir', 'alternative', 'Antiviral'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['benzathine-benzylpenicilline', 'adjuvant', 'Traitement syndromique (syphilis)'],
      ['azithromycine', 'adjuvant', 'Traitement syndromique (chancre mou)'],
    ],
    complications: [
      {
        nom: 'Herpès néonatal',
        description: 'Transmission à l’accouchement.',
        traitement: '- Aciclovir IV',
        clinique: '- Vésicules, sepsis, encéphalite',
        paraclinique: '',
      },
      {
        nom: 'Encéphalite herpétique',
        fiche: 'meningite-bacterienne',
        description: 'Rare, grave.',
        traitement: '- Aciclovir IV 10 mg/kg toutes les 8 h',
        clinique: '- Fièvre, confusion, convulsions',
        paraclinique: '- LCR, imagerie',
      },
      {
        nom: 'Kératite herpétique',
        fiche: 'oeil-rouge-demarche',
        description: 'Atteinte oculaire.',
        traitement: '- Aciclovir, avis ophtalmologique',
        clinique: '- Œil rouge douloureux',
        paraclinique: '- Fluorescéine',
      },
      {
        nom: 'Déshydratation de l’enfant',
        fiche: 'deshydratation-severe-enfant',
        description: 'Gingivostomatite.',
        traitement: '- Réhydratation',
        clinique: '- Refus de boire',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bénin chez l’immunocompétent ; récurrences fréquentes ; formes graves chez le nouveau-né et le patient VIH',
    urgences: [],
    symptomes: [
      ['Éruption vésiculeuse', 'tres_frequent'],
      ['Ulcération génitale', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Mal de gorge', 'occasionnel'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      'CDC — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Aciclovir, approche syndromique, test VIH', '- Nouveau-né, encéphalite, forme chronique'],
      hgr: ['- Aciclovir IV, prise en charge VIH', ''],
      tert: ['- Dermatologie, infectiologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Herpès génital récurrent',
        type: 'commune',
        description: 'Récurrences.',
        terrain: '- Adulte sexuellement actif',
        fonctionnels: '- Brûlures, douleurs',
        generaux: '',
        physiques: '- Vésicules puis érosions',
        paraclinique: '',
        etiologies: '- HSV-2',
        syndromes: [],
      },
      {
        nom: 'Gingivostomatite herpétique',
        type: 'terrain',
        description: 'Primo-infection de l’enfant.',
        terrain: '- Enfant de 1 à 5 ans',
        fonctionnels: '- Refus de boire, douleurs buccales',
        generaux: '- Fièvre',
        physiques: '- Ulcérations buccales multiples',
        paraclinique: '',
        etiologies: '- HSV-1',
        syndromes: [],
      },
      {
        nom: 'Herpès chronique du patient VIH',
        type: 'gravite',
        description: 'Ulcérations extensives.',
        terrain: '- VIH avancé',
        fonctionnels: '- Douleurs',
        generaux: '',
        physiques: '- Ulcérations chroniques profondes',
        paraclinique: '- CD4 bas',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Acné
  {
    ...DERMATO,
    slug: 'acne',
    nom: 'Acné',
    resume:
      'Dermatose de l’adolescent et de l’adulte jeune : comédons, papules, pustules, nodules du visage et du dos ; sur peau noire, taches pigmentées séquellaires fréquentes ; peroxyde de benzoyle et trétinoïne topiques, doxycycline 3 mois pour les formes modérées, isotrétinoïne par le spécialiste pour les formes sévères ; rechercher l’acné cortisonique ou liée aux produits dépigmentants et aux huiles cosmétiques.',
    definition:
      'Maladie inflammatoire chronique du follicule pilosébacé, caractérisée par des lésions rétentionnelles (comédons) et inflammatoires (papules, pustules, nodules).',
    physiopathologie:
      '## Mécanismes\n- Hyperséborrhée (androgènes), hyperkératinisation folliculaire (comédon), prolifération de Cutibacterium acnes, inflammation\n\n## Facteurs aggravants\n- **Corticoïdes** (crèmes dépigmentantes, voie générale), cosmétiques et huiles comédogènes (« acné des pommades »), androgènes, progestatifs, stress, frottements',
    diagnostic:
      '## Clinique\n- **Comédons** ouverts et fermés, **papules**, **pustules** ; **nodules** et kystes dans les formes sévères\n- Visage, dos, thorax\n- **Hyperpigmentation post-inflammatoire** et cicatrices, chéloïdes possibles sur peau noire\n- Acné cortisonique : lésions monomorphes papulo-pustuleuses\n\n## Examens\n- Diagnostic clinique ; bilan hormonal si signes d’hyperandrogénie chez la femme (troubles des règles, hirsutisme)',
    examens: [
      ['etiologique', 'bilan-hormonal-feminin', 'Hyperandrogénie (femme).'],
      ['etiologique', 'beta-hcg', 'Avant isotrétinoïne ou cyclines.'],
    ],
    scores: [],
    differentiels: [
      ['Folliculite', 'Pustules centrées par un poil, sans comédons.'],
      ['Rosacée', 'Adulte, érythème, pas de comédons.'],
      ['complications-depigmentation-volontaire', 'Acné cortisonique.'],
      ['Dermatite séborrhéique', 'Squames grasses.'],
    ],
    etiologies:
      '## Terrain\n- Adolescent, adulte jeune, femme avec hyperandrogénie, usage de corticoïdes ou de cosmétiques gras',
    principes: [
      [
        'Acné légère',
        'Traitement local.',
        '- **Peroxyde de benzoyle** 2,5–5 % le soir, et/ou **trétinoïne** 0,025–0,05 % (rétinoïde) le soir\n- Nettoyant doux, pas de manipulation des lésions, arrêt des corticoïdes et cosmétiques gras, photoprotection',
      ],
      [
        'Acné modérée',
        'Ajouter un traitement oral.',
        '- **Doxycycline** 100 mg/j pendant 3 mois, toujours associée au traitement local (peroxyde de benzoyle)\n- Femme : contraception œstroprogestative à visée antiandrogénique selon le cas',
      ],
      [
        'Acné sévère',
        'Spécialiste.',
        '- Isotrétinoïne orale par un dermatologue (tératogène : contraception obligatoire)\n- Hyperpigmentation séquellaire : photoprotection, patience ; éviter les dépigmentants',
      ],
    ],
    molecules: [
      ['peroxyde-de-benzoyle', 'premiere', 'Topique'],
      ['tretinoine', 'premiere', 'Rétinoïde topique'],
      ['doxycycline', 'deuxieme', 'Acné modérée, 3 mois'],
      ['acide-azelaique', 'alternative', 'Topique, hyperpigmentation'],
    ],
    complications: [
      {
        nom: 'Cicatrices et chéloïdes',
        fiche: 'cheloides',
        description: 'Acné inflammatoire sévère.',
        traitement: '- Traitement précoce, infiltrations',
        clinique: '- Cicatrices déprimées ou chéloïdiennes',
        paraclinique: '',
      },
      {
        nom: 'Hyperpigmentation post-inflammatoire',
        description: 'Peau noire.',
        traitement: '- Photoprotection, acide azélaïque',
        clinique: '- Taches brunes',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration spontanée après l’adolescence ; retentissement psychologique fréquent',
    urgences: [],
    symptomes: [
      ['Comédons et pustules', 'tres_frequent'],
      ['Nodules sous-cutanés', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Traitement local, conseils', '- Acné nodulaire, cicatrices'],
      hgr: ['- Doxycycline, suivi', ''],
      tert: ['- Dermatologie, isotrétinoïne', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Acné juvénile polymorphe',
        type: 'commune',
        description: 'Adolescent.',
        terrain: '- Adolescent',
        fonctionnels: '',
        generaux: '',
        physiques: '- Comédons, papules, pustules du visage',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Acné cortisonique',
        type: 'etiologique',
        description: 'Corticoïdes, dépigmentants.',
        terrain: '- Usage de crèmes éclaircissantes',
        fonctionnels: '',
        generaux: '',
        physiques: '- Papulo-pustules monomorphes',
        paraclinique: '',
        etiologies: '- Corticoïdes',
        syndromes: [],
      },
      {
        nom: 'Acné nodulo-kystique',
        type: 'gravite',
        description: 'Forme sévère.',
        terrain: '- Homme jeune',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Nodules, kystes, cicatrices',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Albinisme
  {
    ...DERMATO,
    slug: 'albinisme-protection-cutanee',
    nom: 'Albinisme : protection cutanée et cancers',
    resume:
      'Albinisme oculo-cutané (absence de mélanine), fréquent en Afrique centrale : peau très sensible au soleil, kératoses actiniques et carcinomes cutanés dès l’adolescence (principale cause de décès précoce), malvoyance ; photoprotection stricte (vêtements couvrants, chapeau, écran solaire), examen cutané tous les 3–6 mois, traitement précoce des lésions précancéreuses, aides visuelles ; lutte contre la discrimination et les violences.',
    definition:
      'Groupe de maladies génétiques récessives caractérisées par un déficit de production de mélanine dans la peau, les cheveux et les yeux, exposant aux cancers cutanés et à une malvoyance.',
    physiopathologie:
      '## Mécanismes\n- Transmission autosomique récessive (parents porteurs sains)\n- Absence de protection mélanique : coups de soleil, **héliodermie**, **kératoses actiniques**, **carcinomes** épidermoïdes et basocellulaires, plus rarement mélanomes\n- Atteinte oculaire : baisse de l’acuité visuelle, nystagmus, photophobie, strabisme',
    diagnostic:
      '## Clinique\n- Peau blanche ou rosée, cheveux blancs ou jaunes, iris clairs, **nystagmus**, **photophobie**\n- Lésions cutanées des zones exposées : taches de rousseur, kératoses rugueuses, ulcérations ou bourgeons qui ne guérissent pas (cancer)\n\n## Suivi\n- **Examen cutané complet** tous les 3 à 6 mois ; **biopsie** de toute lésion suspecte\n- Examen ophtalmologique (acuité, réfraction)',
    examens: [
      ['confirmation', 'biopsie-histologie', 'Lésion suspecte.'],
      ['premiere_intention', 'acuite-visuelle', 'Malvoyance.'],
    ],
    scores: [],
    differentiels: [
      ['Vitiligo', 'Taches dépigmentées acquises, yeux normaux.'],
      ['complications-depigmentation-volontaire', 'Éclaircissement cosmétique.'],
    ],
    etiologies: '## Terrain\n- Génétique ; mariages consanguins ; exposition solaire (travail en plein air)',
    principes: [
      [
        'Photoprotection',
        'Prévenir les cancers.',
        '- Vêtements longs et couvrants, **chapeau à larges bords**, lunettes de soleil\n- **Écran solaire** à large spectre (SPF ≥ 30–50) sur les zones découvertes, à renouveler\n- Éviter l’exposition entre 10 h et 16 h ; choix de métiers à l’abri du soleil',
      ],
      [
        'Dépistage et traitement précoce',
        'Réduire la mortalité.',
        '- Examen de la peau tous les 3 à 6 mois (cliniques mobiles)\n- Kératoses actiniques : cryothérapie, crèmes (5-fluorouracile)\n- Carcinomes : **exérèse chirurgicale** précoce (voir fiche)',
      ],
      [
        'Vision et inclusion',
        'Autonomie.',
        '- Correction optique, aides visuelles, place au premier rang à l’école\n- Lutte contre la stigmatisation, les violences et les mutilations ; conseil génétique',
      ],
    ],
    molecules: [
      ['fluorouracile', 'alternative', 'Crème pour kératoses actiniques'],
      ['oxyde-de-zinc-pommade', 'adjuvant', 'Protection physique'],
    ],
    complications: [
      {
        nom: 'Carcinomes cutanés',
        fiche: 'carcinomes-cutanes',
        description: 'Cause majeure de décès.',
        traitement: '- Chirurgie précoce',
        clinique: '- Ulcération, bourgeon',
        paraclinique: '- Biopsie',
      },
      {
        nom: 'Malvoyance',
        description: 'Hypoplasie fovéale.',
        traitement: '- Aides visuelles',
        clinique: '- Baisse de vision, nystagmus',
        paraclinique: '- Acuité visuelle',
      },
      {
        nom: 'Violences et exclusion',
        description: 'Croyances, discriminations.',
        traitement: '- Protection, plaidoyer',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Espérance de vie réduite par les cancers cutanés en l’absence de photoprotection ; nettement améliorée par la prévention et le dépistage',
    urgences: [],
    symptomes: [
      ['Brûlure cutanée', 'frequent'],
      ['Photophobie', 'tres_frequent'],
      ['Troubles visuels', 'tres_frequent'],
      ['Ulcère cutané', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Éducation à la photoprotection, examen cutané, orientation', '- Lésion qui ne guérit pas'],
      hgr: ['- Biopsie, exérèse des petites lésions', ''],
      tert: ['- Dermatologie, chirurgie plastique, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Albinisme oculo-cutané',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Enfant, adulte',
        fonctionnels: '- Photophobie, baisse de vision',
        generaux: '',
        physiques: '- Peau et cheveux clairs, nystagmus',
        paraclinique: '',
        etiologies: '- Génétique',
        syndromes: [],
      },
      {
        nom: 'Lésions précancéreuses et cancéreuses',
        type: 'gravite',
        description: 'Exposition solaire.',
        terrain: '- Adolescent, adulte',
        fonctionnels: '',
        generaux: '',
        physiques: '- Kératoses, ulcérations',
        paraclinique: '- Biopsie',
        etiologies: '- UV',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Carcinomes cutanés
  {
    ...DERMATO,
    slug: 'carcinomes-cutanes',
    nom: 'Carcinomes cutanés',
    resume:
      'Cancers de la peau (épidermoïde surtout chez les personnes noires, basocellulaire) : sur cicatrices et ulcères chroniques (ulcère de Marjolin, brûlures, ulcère phagédénique), chez les personnes albinos, les patients VIH (HPV) ; lésion qui ne guérit pas, bourgeonnante ou ulcérée : biopsie systématique ; exérèse chirurgicale avec marges, curage si adénopathies, radiothérapie.',
    definition:
      'Tumeurs malignes épithéliales de la peau : carcinome épidermoïde (spinocellulaire), potentiellement métastatique, et carcinome basocellulaire, d’évolution locale.',
    physiopathologie:
      '## Facteurs\n- **Cicatrices et ulcères chroniques** (ulcère tropical, brûlures, ostéomyélite fistulisée) : cause principale chez les sujets à peau noire\n- **Albinisme** et exposition solaire\n- **VIH** et HPV (carcinome anogénital), immunosuppression\n- Lésions chroniques inflammatoires (lupus discoïde), arsenic',
    diagnostic:
      '## Clinique\n- **Ulcère chronique** qui change d’aspect (bords bourgeonnants, saignement, douleur), **nodule** ou bourgeon croissant\n- Basocellulaire : perle translucide, ulcération à bord perlé (zones exposées)\n- **Adénopathies** régionales (épidermoïde)\n\n## Examens\n- **Biopsie** de toute lésion chronique suspecte, en bordure\n- Bilan d’extension : échographie ganglionnaire, radiographie thoracique ; radiographie osseuse si lésion sur un membre (envahissement)\n- Test VIH',
    examens: [
      ['confirmation', 'biopsie-histologie', 'Carcinome.'],
      ['premiere_intention', 'tdr-vih', 'Terrain.'],
      ['gravite', 'radiographie-osseuse', 'Envahissement osseux.'],
      ['gravite', 'radiographie-thoracique', 'Métastases.'],
      ['deuxieme_intention', 'cytoponction-ganglionnaire', 'Adénopathie.'],
    ],
    scores: [],
    differentiels: [
      ['ulcere-de-buruli', 'Ulcère à bords décollés, PCR positive.'],
      ['Ulcère phagédénique tropical', 'Ulcère infectieux (le cancer peut le compliquer).'],
      ['sarcome-de-kaposi', 'Lésions violacées, VIH.'],
      ['Mélanome acral', 'Lésion pigmentée de la plante.'],
      ['pian', 'Papillome, sérologie positive.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Ulcères chroniques et cicatrices de brûlures, albinisme, VIH, exposition solaire',
    principes: [
      [
        'Chirurgie',
        'Guérir.',
        '- **Exérèse** complète avec marges (4 mm basocellulaire, 6–10 mm épidermoïde), greffe ou lambeau\n- Curage ganglionnaire si adénopathie envahie ; amputation pour les tumeurs étendues des membres avec envahissement osseux',
      ],
      [
        'Autres traitements',
        'Selon l’extension.',
        '- **Radiothérapie** si inopérable ou marges insuffisantes\n- Chimiothérapie (cisplatine, 5-FU) des formes métastatiques ; soins palliatifs',
      ],
      [
        'Prévention',
        'Éviter les cancers.',
        '- Traitement correct des ulcères chroniques, greffe précoce des brûlures profondes, photoprotection des albinos, ARV',
      ],
    ],
    molecules: [
      ['cisplatine', 'alternative', 'Formes avancées'],
      ['fluorouracile', 'alternative', 'Formes avancées, lésions superficielles'],
      ['morphine', 'adjuvant', 'Douleurs'],
      ['metronidazole', 'adjuvant', 'Odeur des lésions surinfectées (local)'],
    ],
    complications: [
      {
        nom: 'Métastases ganglionnaires',
        description: 'Carcinome épidermoïde.',
        traitement: '- Curage, radiothérapie',
        clinique: '- Adénopathies',
        paraclinique: '- Cytoponction',
      },
      {
        nom: 'Envahissement osseux',
        description: 'Tumeurs des membres.',
        traitement: '- Amputation',
        clinique: '- Douleur, impotence',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Hémorragie et surinfection',
        description: 'Tumeur ulcérée.',
        traitement: '- Soins locaux, hémostase',
        clinique: '- Saignement, odeur',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent si exérèse précoce ; mauvais pour les carcinomes épidermoïdes évolués sur ulcère chronique',
    urgences: [],
    symptomes: [
      ['Ulcère cutané', 'tres_frequent'],
      ['Adénopathies', 'frequent'],
      ['Hémorragies', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'NCCN — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Repérer les ulcères chroniques suspects, orientation',
        '- Ulcère > 4–6 semaines qui change d’aspect',
      ],
      hgr: ['- Biopsie, exérèse', '- Curage, radiothérapie'],
      tert: ['- Chirurgie plastique, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Carcinome épidermoïde sur ulcère chronique',
        type: 'commune',
        description: 'Ulcère de Marjolin.',
        terrain: '- Ulcère ou cicatrice ancienne',
        fonctionnels: '- Douleur, saignement',
        generaux: '',
        physiques: '- Bords bourgeonnants',
        paraclinique: '- Biopsie : carcinome épidermoïde',
        etiologies: '- Inflammation chronique',
        syndromes: [],
      },
      {
        nom: 'Carcinome de l’albinos',
        type: 'terrain',
        description: 'Zones exposées.',
        terrain: '- Albinisme',
        fonctionnels: '',
        generaux: '',
        physiques: '- Lésions multiples du visage et du cou',
        paraclinique: '',
        etiologies: '- UV',
        syndromes: [],
      },
      {
        nom: 'Carcinome métastatique',
        type: 'gravite',
        description: 'Stade avancé.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Amaigrissement',
        physiques: '- Adénopathies',
        paraclinique: '- Métastases',
        etiologies: '',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
      },
    ],
  },

  // =================================================================== Tungose
  {
    ...DERMATO,
    slug: 'tungose',
    nom: 'Tungose',
    resume:
      'Ectoparasitose due à la puce chique (Tunga penetrans), qui s’enfonce dans la peau des pieds (orteils, sous les ongles, talons) des personnes marchant pieds nus sur sol sableux : papule blanchâtre centrée par un point noir, prurit puis douleur ; extraction stérile de la puce entière, antiseptique, vaccination antitétanique ; surinfections et mutilations dans les infestations massives ; chaussures fermées, sols cimentés.',
    definition:
      'Infestation cutanée par la femelle fécondée de Tunga penetrans (puce chique), qui pénètre dans l’épiderme, s’hypertrophie en pondant ses œufs puis meurt in situ.',
    physiopathologie:
      '## Mécanismes\n- Puce vivant dans le sable et la poussière, autour des maisons et des animaux (porcs, chiens, rats)\n- Pénétration dans la peau des pieds, hypertrophie (néosome), inflammation\n- **Surinfections bactériennes**, **tétanos**, déformation et perte des ongles, difficultés de marche\n\n## Terrain\n- Pauvreté, sols non cimentés, enfants, personnes âgées, handicapées ou négligées',
    diagnostic:
      '## Clinique\n- **Papule** blanchâtre de 5–10 mm centrée par un **point noir**, sur les orteils, sous les ongles, les talons, plantes\n- Prurit puis douleur, inflammation\n- Infestations massives : lésions en nid d’abeille, ulcérations, abcès, chute des ongles\n\n## Examens\n- Diagnostic clinique ; aucun examen nécessaire',
    examens: [],
    scores: [],
    differentiels: [
      ['Verrue plantaire', 'Pas de point noir central mobile, pas d’inflammation.'],
      ['pyodermites', 'Abcès sans parasite.'],
      ['Corps étranger (épine)', 'Contexte de piqûre.'],
    ],
    etiologies: '## Facteurs\n- Marche pieds nus, sols sableux, habitat précaire, animaux domestiques',
    principes: [
      [
        'Extraction',
        'Retirer la puce entière.',
        '- Nettoyage, **extraction** stérile à l’aiguille ou à la curette en élargissant l’orifice, sans rompre la puce\n- **Antiseptique** (povidone iodée, chlorhexidine) et pansement\n- **Vaccination antitétanique** (± immunoglobulines selon le statut)',
      ],
      [
        'Infestations massives et surinfections',
        'Traiter.',
        '- Diméticone topique si disponible (tue les puces in situ)\n- Antibiotiques si surinfection (**cloxacilline** ou amoxicilline-acide clavulanique)\n- Antalgiques',
      ],
      [
        'Prévention',
        'Éviter la réinfestation.',
        '- **Chaussures fermées**, sols cimentés ou arrosés, traitement insecticide de l’habitat et des animaux, inspection quotidienne des pieds',
      ],
    ],
    molecules: [
      ['povidone-iodee', 'premiere', 'Antisepsie'],
      ['chlorhexidine-gluconate', 'alternative', 'Antisepsie'],
      ['cloxacilline', 'alternative', 'Surinfection'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Vaccination antitétanique'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Surinfection bactérienne',
        fiche: 'pyodermites',
        description: 'Lésions grattées.',
        traitement: '- Antibiotiques, soins',
        clinique: '- Pus, rougeur',
        paraclinique: '',
      },
      {
        nom: 'Tétanos',
        fiche: 'tetanos',
        description: 'Porte d’entrée.',
        traitement: '- Prise en charge du tétanos',
        clinique: '- Trismus, contractures',
        paraclinique: '',
      },
      {
        nom: 'Déformations et mutilations',
        description: 'Infestations répétées.',
        traitement: '- Soins, prévention',
        clinique: '- Perte des ongles, difficultés de marche',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bénin après extraction ; handicap dans les infestations massives et répétées',
    urgences: [],
    symptomes: [
      ['Prurit', 'frequent'],
      ['Lésions cutanées violacées', 'occasionnel'],
      ['Ulcère cutané', 'occasionnel'],
      ['Troubles de la marche', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Extraction, antisepsie, vaccination, conseils', '- Infestation massive, surinfection grave'],
      hgr: ['- Antibiotiques, soins des complications', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tungose simple',
        type: 'commune',
        description: 'Quelques lésions.',
        terrain: '- Marche pieds nus',
        fonctionnels: '- Prurit, douleur',
        generaux: '',
        physiques: '- Papule à point noir',
        paraclinique: '',
        etiologies: '- Tunga penetrans',
        syndromes: [],
      },
      {
        nom: 'Tungose massive surinfectée',
        type: 'gravite',
        description: 'Personnes vulnérables.',
        terrain: '- Enfant, sujet âgé, handicap',
        fonctionnels: '- Difficultés de marche',
        generaux: '- Fièvre',
        physiques: '- Lésions multiples, pus',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Chéloïdes
  {
    ...DERMATO,
    slug: 'cheloides',
    nom: 'Chéloïdes',
    resume:
      'Cicatrices fibreuses exubérantes dépassant la plaie initiale, très fréquentes sur peau noire (lobes d’oreilles après perçage, thorax, épaules, après acné, scarifications, chirurgie) : prurit, douleur, gêne esthétique ; prévention chez les sujets à risque ; injections intralésionnelles de triamcinolone toutes les 4–6 semaines, compression, silicone ; chirurgie seule déconseillée (récidive), toujours associée à des infiltrations.',
    definition:
      'Prolifération fibreuse anormale du derme cicatriciel, débordant les limites de la lésion initiale, sans tendance à la régression spontanée (à distinguer de la cicatrice hypertrophique).',
    physiopathologie:
      '## Mécanismes\n- Production excessive de collagène par les fibroblastes, prédisposition génétique\n- Zones à risque : lobes d’oreille, région présternale, épaules, haut du dos, mâchoire\n- Facteurs : perçages, acné, vaccinations, brûlures, chirurgie, tension cutanée, infection de la plaie',
    diagnostic:
      '## Clinique\n- Tuméfaction ferme, lisse, brillante, dépassant la cicatrice, croissance lente sur des mois\n- **Prurit**, douleur, gêne fonctionnelle (plis, articulations) ou esthétique\n\n## Examens\n- Diagnostic clinique ; biopsie si aspect atypique (carcinome sur cicatrice)',
    examens: [['deuxieme_intention', 'biopsie-histologie', 'Aspect atypique.']],
    scores: [],
    differentiels: [
      ['Cicatrice hypertrophique', 'Reste dans les limites, régresse en 1 à 2 ans.'],
      ['carcinomes-cutanes', 'Ulcération, saignement, croissance rapide.'],
      ['Dermatofibrosarcome', 'Tumeur infiltrée, récidivante.'],
    ],
    etiologies:
      '## Facteurs\n- Peau noire, antécédents familiaux, perçages, acné, brûlures, chirurgie, scarifications',
    principes: [
      [
        'Infiltrations',
        'Aplatir et soulager.',
        '- **Triamcinolone** acétonide 10–40 mg/mL en injection intralésionnelle toutes les 4 à 6 semaines (plusieurs séances)\n- Effets indésirables : atrophie, dépigmentation, télangiectasies',
      ],
      [
        'Mesures physiques',
        'Compléter.',
        '- **Compression** (boucles d’oreilles compressives, vêtements), plaques ou gels de **silicone** pendant plusieurs mois',
      ],
      [
        'Chirurgie',
        'Formes volumineuses.',
        '- Exérèse **toujours associée** à des infiltrations (ou à la radiothérapie) : récidive > 50 % si chirurgie seule\n- Prévention : éviter perçages et chirurgie esthétique chez les sujets à risque ; traiter tôt l’acné',
      ],
    ],
    molecules: [
      ['triamcinolone', 'premiere', 'Infiltration intralésionnelle'],
      ['lidocaine', 'adjuvant', 'Anesthésie de l’infiltration'],
      ['cetirizine', 'adjuvant', 'Prurit'],
    ],
    complications: [
      {
        nom: 'Récidive après exérèse',
        description: 'Chirurgie seule.',
        traitement: '- Infiltrations, compression',
        clinique: '- Chéloïde plus volumineuse',
        paraclinique: '',
      },
      {
        nom: 'Gêne fonctionnelle et retentissement psychologique',
        description: 'Chéloïdes étendues.',
        traitement: '- Prise en charge combinée, soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bénin mais chronique, récidives fréquentes ; amélioration par les traitements combinés',
    urgences: [],
    symptomes: [
      ['Nodules sous-cutanés', 'tres_frequent'],
      ['Prurit', 'frequent'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Conseils de prévention, orientation', '- Chéloïde gênante ou évolutive'],
      hgr: ['- Infiltrations de triamcinolone', ''],
      tert: ['- Chirurgie plastique, radiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Chéloïde du lobe de l’oreille',
        type: 'commune',
        description: 'Après perçage.',
        terrain: '- Femme jeune, peau noire',
        fonctionnels: '- Gêne esthétique',
        generaux: '',
        physiques: '- Masse ferme du lobe',
        paraclinique: '',
        etiologies: '- Perçage',
        syndromes: [],
      },
      {
        nom: 'Chéloïdes présternales et des épaules',
        type: 'topographique',
        description: 'Après acné ou vaccination.',
        terrain: '',
        fonctionnels: '- Prurit, douleur',
        generaux: '',
        physiques: '- Plaques en pinces de crabe',
        paraclinique: '',
        etiologies: '- Acné',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dépigmentation volontaire
  {
    ...DERMATO,
    slug: 'complications-depigmentation-volontaire',
    nom: 'Complications de la dépigmentation volontaire',
    resume:
      'Usage cosmétique de produits éclaircissants (corticoïdes forts, hydroquinone, mercure, savons et injections) très répandu : acné, vergetures, atrophie, ochronose exogène, mycoses et gale étendues, infections, retard de cicatrisation, et effets généraux (HTA, diabète, insuffisance surrénalienne à l’arrêt, néphropathie au mercure) ; arrêt progressif des corticoïdes, traitement des complications, éducation sans jugement.',
    definition:
      'Ensemble des complications cutanées et générales liées à l’application prolongée de produits destinés à éclaircir la peau (dermocorticoïdes puissants, hydroquinone, sels de mercure, glutathion injectable, savons caustiques).',
    physiopathologie:
      '## Produits\n- **Dermocorticoïdes** très puissants (clobétasol, bétaméthasone) sur de grandes surfaces\n- **Hydroquinone** à forte concentration : **ochronose exogène** (pigmentation bleu-noir paradoxale)\n- **Mercure** : néphropathie, troubles neurologiques\n\n## Conséquences des corticoïdes\n- Locales : atrophie, **vergetures**, acné, infections fongiques (dermatophyties étendues), gale, retard de cicatrisation, hypertrichose\n- Générales : **HTA**, **diabète**, syndrome de Cushing, **insuffisance surrénalienne** à l’arrêt brutal',
    diagnostic:
      '## Clinique\n- Peau éclaircie de façon hétérogène, articulations et pavillons des oreilles plus foncés (zones « oubliées »)\n- **Vergetures** larges, peau fine, fragile, plaies qui cicatrisent mal\n- **Ochronose** : pigmentation gris-bleu des pommettes et des tempes\n- Acné, dermatophyties et gale étendues, infections bactériennes\n- Rechercher HTA, diabète, œdèmes (néphropathie au mercure)\n\n## Examens\n- Glycémie, tension, protéinurie, créatinine ; cortisol avant l’arrêt si usage massif prolongé (si disponible)\n- Examen mycologique selon les lésions',
    examens: [
      ['premiere_intention', 'glycemie', 'Diabète cortisonique.'],
      ['premiere_intention', 'proteinurie', 'Néphropathie au mercure.'],
      ['premiere_intention', 'creatinine', 'Atteinte rénale.'],
      ['etiologique', 'examen-mycologique', 'Dermatophyties.'],
      ['deuxieme_intention', 'cortisolemie', 'Insuffisance surrénalienne.'],
    ],
    scores: [],
    differentiels: [
      ['Mélasma', 'Taches pigmentées du visage sans usage de produits.'],
      ['albinisme-protection-cutanee', 'Absence congénitale de pigment.'],
      ['Vitiligo', 'Dépigmentation en taches bien limitées.'],
      ['dermatophyties-et-pityriasis-versicolor', 'Mycoses (souvent favorisées).'],
    ],
    etiologies:
      '## Contexte\n- Pressions sociales et esthétiques, produits vendus sans contrôle, méconnaissance des risques',
    principes: [
      [
        'Arrêt des produits',
        'Sans jugement.',
        '- Information et éducation respectueuses\n- **Arrêt progressif** des dermocorticoïdes en cas d’usage massif et prolongé (risque d’insuffisance surrénalienne), sous surveillance\n- Arrêt immédiat des produits mercuriels',
      ],
      [
        'Traitement des complications',
        'Réparer.',
        '- Mycoses : antifongiques ; gale : traitement de la gale ; acné : traitement local ; infections : antibiotiques\n- HTA et diabète : traitement adapté\n- Ochronose et vergetures : peu réversibles ; photoprotection',
      ],
      [
        'Prévention',
        'Santé publique.',
        '- Réglementation des produits, sensibilisation communautaire, valorisation de la peau naturelle',
      ],
    ],
    molecules: [
      ['hydrocortisone', 'adjuvant', 'Insuffisance surrénalienne'],
      ['terbinafine', 'alternative', 'Dermatophyties étendues'],
      ['permethrine', 'alternative', 'Gale'],
      ['peroxyde-de-benzoyle', 'adjuvant', 'Acné'],
    ],
    complications: [
      {
        nom: 'Insuffisance surrénalienne',
        fiche: 'insuffisance-surrenalienne-aigue',
        description: 'Arrêt brutal après usage massif.',
        traitement: '- Hydrocortisone, sevrage progressif',
        clinique: '- Fatigue, hypotension',
        paraclinique: '- Cortisolémie',
      },
      {
        nom: 'Diabète et HTA cortisoniques',
        fiche: 'diabete-type-2',
        description: 'Passage systémique.',
        traitement: '- Arrêt, traitement adapté',
        clinique: '',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Néphropathie au mercure',
        fiche: 'syndrome-nephrotique-adulte',
        description: 'Syndrome néphrotique.',
        traitement: '- Arrêt du mercure',
        clinique: '- Œdèmes',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Infections cutanées étendues',
        fiche: 'gale',
        description: 'Gale, mycoses, pyodermites.',
        traitement: '- Traitement spécifique',
        clinique: '- Prurit, lésions étendues',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Atrophie, vergetures et ochronose souvent définitives ; complications générales réversibles après l’arrêt',
    urgences: [],
    symptomes: [
      ['Taches cutanées hypopigmentées', 'tres_frequent'],
      ['Comédons et pustules', 'frequent'],
      ['Prurit', 'frequent'],
      ['Lésions cutanées violacées', 'occasionnel'],
      ['Œdèmes', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Repérage, éducation, traitement des complications simples',
        '- Usage massif prolongé, œdèmes, HTA, diabète',
      ],
      hgr: ['- Bilan, sevrage surveillé', ''],
      tert: ['- Dermatologie, endocrinologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dermatose cortisonique',
        type: 'commune',
        description: 'Corticoïdes forts.',
        terrain: '- Femme jeune',
        fonctionnels: '- Prurit',
        generaux: '',
        physiques: '- Atrophie, vergetures, acné',
        paraclinique: '',
        etiologies: '- Dermocorticoïdes',
        syndromes: [],
      },
      {
        nom: 'Ochronose exogène',
        type: 'etiologique',
        description: 'Hydroquinone.',
        terrain: '- Usage prolongé',
        fonctionnels: '',
        generaux: '',
        physiques: '- Pigmentation gris-bleu du visage',
        paraclinique: '',
        etiologies: '- Hydroquinone',
        syndromes: [],
      },
      {
        nom: 'Complications générales',
        type: 'gravite',
        description: 'Passage systémique.',
        terrain: '- Usage massif',
        fonctionnels: '- Fatigue',
        generaux: '- HTA',
        physiques: '- Œdèmes, faciès cushingoïde',
        paraclinique: '- Hyperglycémie, protéinurie',
        etiologies: '- Corticoïdes, mercure',
        syndromes: [],
      },
    ],
  },
];
