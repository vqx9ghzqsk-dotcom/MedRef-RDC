'use strict';

/**
 * Lot 49 (phase 2, immunologie et rhumatologie pédiatriques) — arthrite juvénile idiopathique,
 * déficits immunitaires primitifs, purpura rhumatoïde (vascularite à IgA), lupus de l'enfant.
 * Rédigé par IA (Nelson, ACR/EULAR, OMS) : à valider.
 */

const IMMUNOPED = { departement: 'pediatrie', specialite: 'Immunologie et rhumatologie pédiatriques' };

module.exports = [
  // =================================================================== AJI
  {
    ...IMMUNOPED,
    slug: 'arthrite-juvenile-idiopathique',
    nom: 'Arthrite juvénile idiopathique',
    resume:
      'Arthrite chronique (> 6 semaines) de cause inconnue débutant avant 16 ans : formes oligoarticulaire (≤ 4 articulations, risque d’uvéite silencieuse), polyarticulaire, systémique (maladie de Still : fièvre quotidienne en pics, éruption fugace, hépatosplénomégalie, risque de syndrome d’activation macrophagique) ; diagnostic d’élimination (arthrite septique, RAA, drépanocytose, tuberculose, leucémie) ; AINS, infiltrations, méthotrexate, examen ophtalmologique régulier, kinésithérapie.',
    definition:
      'Arthrite d’une ou plusieurs articulations persistant plus de 6 semaines, débutant avant l’âge de 16 ans, sans autre cause identifiée (classification ILAR).',
    physiopathologie:
      '## Mécanismes\n- Maladie auto-immune ou auto-inflammatoire (forme systémique) : synovite chronique → érosions, destruction articulaire, troubles de croissance\n\n## Formes\n- **Oligoarticulaire** (≤ 4 articulations, genou surtout) : jeune fille, anticorps antinucléaires, **uvéite chronique** silencieuse\n- **Polyarticulaire** (≥ 5) : avec ou sans facteur rhumatoïde\n- **Systémique** (maladie de Still) : fièvre, éruption, sérites, organomégalie\n- Arthrite liée à l’enthésite (garçon > 8 ans), arthrite psoriasique',
    diagnostic:
      '## Clinique\n- **Gonflement articulaire**, raideur matinale, boiterie, refus d’utiliser un membre (douleur souvent modérée chez le jeune enfant)\n- Forme systémique : **fièvre** quotidienne en pics, **éruption** rose saumonée fugace, adénopathies, hépatosplénomégalie, péricardite\n- Retentissement : retard de croissance, inégalité de longueur des membres\n\n## Éliminer (avant de conclure)\n- **Arthrite septique**, ostéomyélite, **tuberculose ostéo-articulaire**, **RAA**, **drépanocytose**, **leucémie** (douleurs osseuses nocturnes, cytopénies), lupus, hémophilie\n\n## Examens\n- NFS, CRP, VS, **anticorps antinucléaires**, facteur rhumatoïde, ferritine (forme systémique)\n- ASLO, électrophorèse de l’hémoglobine, frottis ; **ponction articulaire** si monoarthrite\n- Radiographies ; **examen ophtalmologique** (lampe à fente)',
    examens: [
      ['premiere_intention', 'nfs', 'Inflammation, cytopénies (leucémie).'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'vitesse-sedimentation', 'Inflammation.'],
      ['etiologique', 'anticorps-antinucleaires', 'Risque d’uvéite.'],
      ['etiologique', 'facteur-rhumatoide-anti-ccp', 'Forme polyarticulaire.'],
      ['confirmation', 'ponction-articulaire', 'Éliminer une arthrite septique.'],
      ['premiere_intention', 'radiographie-osseuse', 'Érosions, diagnostic différentiel.'],
      ['gravite', 'ferritine', 'Syndrome d’activation macrophagique.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
    ],
    scores: [],
    differentiels: [
      ['arthrite-septique', 'Monoarthrite fébrile aiguë.'],
      ['rhumatisme-articulaire-aigu-enfant', 'Polyarthrite migratrice, ASLO élevés.'],
      ['leucemie-aigue-lymphoblastique-enfant', 'Douleurs osseuses, cytopénies.'],
      ['crise-vaso-occlusive-enfant-drepanocytaire', 'Enfant drépanocytaire.'],
      ['tuberculose-extrapulmonaire', 'Monoarthrite chronique.'],
      ['lupus-enfant', 'Atteinte multisystémique, anticorps anti-ADN.'],
    ],
    etiologies: '## Facteurs\n- Auto-immunité, prédisposition génétique ; cause inconnue',
    principes: [
      [
        'Traitement anti-inflammatoire',
        'Contrôler l’arthrite.',
        '- **AINS** : **ibuprofène** 30–40 mg/kg/j en 3–4 prises (ou naproxène)\n- **Infiltrations** intra-articulaires de corticoïdes (oligoarthrite)\n- **Méthotrexate** 10–15 mg/m²/semaine (oral ou SC) avec **acide folique**, si forme polyarticulaire ou échec\n- Biothérapies en centre spécialisé (rarement accessibles)',
      ],
      [
        'Forme systémique',
        'Traitement spécialisé.',
        '- **Corticoïdes** (prednisolone 1–2 mg/kg/j) ; surveillance du **syndrome d’activation macrophagique** (fièvre persistante, cytopénies, ferritine très élevée) : méthylprednisolone IV',
      ],
      [
        'Mesures associées',
        'Préserver la fonction.',
        '- **Kinésithérapie**, attelles, activité physique adaptée\n- **Examen ophtalmologique** tous les 3–6 mois (uvéite)\n- Croissance, vitamine D et calcium, scolarisation, vaccinations (pas de vaccins vivants sous immunosuppresseurs)',
      ],
    ],
    molecules: [
      ['ibuprofene', 'premiere', 'AINS'],
      ['methotrexate', 'premiere', 'Forme polyarticulaire, échec des AINS'],
      ['acide-folique', 'adjuvant', 'Avec le méthotrexate'],
      ['prednisolone', 'alternative', 'Forme systémique'],
      ['methylprednisolone', 'alternative', 'Syndrome d’activation macrophagique'],
    ],
    complications: [
      {
        nom: 'Uvéite chronique',
        description: 'Forme oligoarticulaire, AAN positifs.',
        traitement: '- Collyres, méthotrexate',
        clinique: '- Souvent silencieuse',
        paraclinique: '- Lampe à fente',
      },
      {
        nom: 'Syndrome d’activation macrophagique',
        description: 'Forme systémique.',
        traitement: '- Corticoïdes IV, réanimation',
        clinique: '- Fièvre, hépatosplénomégalie, saignements',
        paraclinique: '- Cytopénies, ferritine très élevée',
      },
      {
        nom: 'Destruction articulaire et troubles de croissance',
        description: 'Inflammation prolongée.',
        traitement: '- Traitement de fond, kinésithérapie',
        clinique: '- Déformations, inégalité de longueur',
        paraclinique: '- Radiographies',
      },
    ],
    evolution:
      '## Pronostic\n- Rémission chez la moitié des enfants à l’âge adulte ; séquelles articulaires et visuelles si traitement tardif',
    urgences: [],
    symptomes: [
      ['Gonflement articulaire', 'tres_frequent'],
      ['Raideur matinale', 'frequent'],
      ['Boiterie', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Éruption cutanée', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: ['- Repérer l’arthrite chronique, AINS, orientation', '- Monoarthrite fébrile (arthrite septique)'],
      hgr: ['- Bilan d’élimination, ponction', ''],
      tert: ['- Rhumatologie pédiatrique, méthotrexate, ophtalmologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme oligoarticulaire',
        type: 'commune',
        description: 'Genou.',
        terrain: '- Fille de 1 à 5 ans',
        fonctionnels: '- Boiterie',
        generaux: '',
        physiques: '- Genou gonflé',
        paraclinique: '- AAN positifs',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme systémique (maladie de Still)',
        type: 'gravite',
        description: 'Fièvre et éruption.',
        terrain: '- Tout âge',
        fonctionnels: '',
        generaux: '- Fièvre quotidienne en pics',
        physiques: '- Éruption, hépatosplénomégalie',
        paraclinique: '- CRP, ferritine élevées',
        etiologies: '',
        syndromes: ['syndrome-de-reponse-inflammatoire-systemique'],
      },
      {
        nom: 'Forme polyarticulaire',
        type: 'topographique',
        description: '≥ 5 articulations.',
        terrain: '- Adolescente',
        fonctionnels: '- Raideur matinale',
        generaux: '',
        physiques: '- Arthrites symétriques des petites articulations',
        paraclinique: '- Facteur rhumatoïde possible',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== DIP
  {
    ...IMMUNOPED,
    slug: 'deficits-immunitaires-primitifs',
    nom: 'Déficits immunitaires primitifs',
    resume:
      'Maladies génétiques de l’immunité (≈ 1/1 000–10 000), sous-diagnostiquées en Afrique où le VIH et la malnutrition sont les premières causes d’immunodépression : infections récidivantes, graves, à germes inhabituels, diarrhée chronique, cassure pondérale, muguet persistant, complications du BCG (BCGite disséminée) ; éliminer le VIH et la malnutrition ; NFS (lymphopénie, neutropénie), dosage des immunoglobulines ; antibioprophylaxie (cotrimoxazole), immunoglobulines substitutives, pas de vaccins vivants, greffe de moelle dans les déficits combinés sévères.',
    definition:
      'Groupe de maladies héréditaires touchant un ou plusieurs composants du système immunitaire (lymphocytes B, T, phagocytes, complément), responsables d’une susceptibilité anormale aux infections, d’auto-immunité ou de cancers.',
    physiopathologie:
      '## Principaux groupes\n- **Déficits de l’immunité humorale** (le plus fréquents) : agammaglobulinémie (garçon), déficit immunitaire commun variable, déficit en IgA → infections ORL et pulmonaires à bactéries encapsulées\n- **Déficits combinés sévères** : nourrisson, infections opportunistes, diarrhée, cassure pondérale, BCGite → décès sans greffe\n- **Déficits des phagocytes** : granulomatose septique chronique (abcès à staphylocoque, aspergillose)\n- Déficits du complément (méningocoque), syndromes (DiGeorge, ataxie-télangiectasie)\n\n## Causes secondaires à éliminer\n- **VIH**, **malnutrition**, drépanocytose (asplénie), corticoïdes, chimiothérapie, syndrome néphrotique',
    diagnostic:
      '## Signes d’alerte\n- ≥ 2 pneumonies par an, ≥ 4 otites par an, ≥ 2 infections graves (méningite, sepsis), abcès profonds répétés\n- Infections à **germes opportunistes**, **muguet** persistant après 1 an, **BCGite** disséminée\n- **Diarrhée chronique**, **cassure de la courbe de poids**, mauvaise réponse aux antibiotiques\n- Antécédents familiaux (décès précoces, consanguinité)\n\n## Examens\n- **Test VIH** (PCR avant 18 mois), évaluation nutritionnelle\n- **NFS** : **lymphopénie** (déficit combiné : < 3 000/mm³ chez le nourrisson), neutropénie\n- **Dosage des IgG, IgA, IgM**, sous-populations lymphocytaires (CD4, CD8, CD19) en centre spécialisé\n- Radiographie thoracique (thymus absent, dilatation des bronches)',
    examens: [
      ['premiere_intention', 'tdr-vih', 'Éliminer le VIH.'],
      ['premiere_intention', 'pcr-vih-nourrisson', 'VIH du nourrisson.'],
      ['premiere_intention', 'nfs', 'Lymphopénie, neutropénie.'],
      ['confirmation', 'dosage-immunoglobulines', 'Déficit humoral.'],
      ['deuxieme_intention', 'cd4', 'Sous-populations lymphocytaires.'],
      ['premiere_intention', 'radiographie-thoracique', 'Thymus, séquelles.'],
      ['premiere_intention', 'anthropometrie', 'Cassure pondérale.'],
    ],
    scores: [],
    differentiels: [
      ['infection-vih-enfant', 'Première cause d’immunodépression de l’enfant.'],
      ['malnutrition-aigue-severe', 'Immunodépression nutritionnelle.'],
      ['pneumonies-recidivantes-enfant', 'Autres causes (asthme, corps étranger, mucoviscidose).'],
      ['mucoviscidose', 'Infections respiratoires, test de la sueur.'],
      ['infections-enfant-drepanocytaire', 'Asplénie fonctionnelle.'],
    ],
    etiologies: '## Transmission\n- Héréditaire (récessive liée à l’X ou autosomique) ; consanguinité',
    principes: [
      [
        'Prévention des infections',
        'Protéger.',
        '- **Cotrimoxazole** prophylactique (déficits cellulaires et combinés, granulomatose), antifongique selon le type\n- **Pas de vaccins vivants** (BCG, polio oral, ROR, fièvre jaune) dans les déficits cellulaires et combinés\n- Hygiène, nutrition, eau potable',
      ],
      [
        'Traitement substitutif et curatif',
        'Corriger le déficit.',
        '- **Immunoglobulines IV** ou SC substitutives (400–600 mg/kg toutes les 3–4 semaines) dans les déficits humoraux (accès limité)\n- **Greffe de cellules souches** dans les déficits combinés sévères (centres internationaux)\n- Traitement rapide et prolongé de chaque infection',
      ],
      [
        'Accompagnement',
        'Informer.',
        '- Conseil génétique, dépistage de la fratrie, kinésithérapie respiratoire (dilatation des bronches)',
      ],
    ],
    molecules: [
      ['cotrimoxazole', 'premiere', 'Prophylaxie'],
      ['immunoglobulines-humaines-polyvalentes', 'premiere', 'Déficits humoraux'],
      ['fluconazole', 'alternative', 'Prophylaxie antifongique'],
      ['amoxicilline', 'adjuvant', 'Infections ORL et pulmonaires'],
    ],
    complications: [
      {
        nom: 'Dilatation des bronches',
        fiche: 'dilatation-des-bronches',
        description: 'Pneumonies répétées.',
        traitement: '- Kinésithérapie, antibiotiques',
        clinique: '- Toux productive chronique',
        paraclinique: '- Scanner',
      },
      {
        nom: 'BCGite disséminée',
        description: 'Déficits cellulaires.',
        traitement: '- Antituberculeux',
        clinique: '- Adénopathies, abcès',
        paraclinique: '',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-enfant',
        description: 'Infections graves.',
        traitement: '- Antibiotiques IV',
        clinique: '- Choc',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Déficits humoraux : vie quasi normale sous immunoglobulines ; déficits combinés sévères : décès avant 1 an sans greffe',
    urgences: ['choc-septique'],
    symptomes: [
      ['Infections récidivantes', 'tres_frequent'],
      ['Diarrhée', 'frequent'],
      ['Retard de croissance', 'frequent'],
      ['Toux', 'frequent'],
      ['Fièvre', 'frequent'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Repérer les signes d’alerte, test VIH, nutrition', '- Infections répétées ou graves'],
      hgr: ['- NFS, bilan, cotrimoxazole', ''],
      tert: ['- Immunologie pédiatrique, immunoglobulines', ''],
    },
    alertes: { 'choc-septique': 'Enfant avec infections récidivantes en état de choc' },
    formes: [
      {
        nom: 'Déficit de l’immunité humorale',
        type: 'commune',
        description: 'Infections ORL et pulmonaires.',
        terrain: '- Garçon après 6 mois',
        fonctionnels: '- Otites, pneumonies répétées',
        generaux: '',
        physiques: '- Amygdales absentes (agammaglobulinémie)',
        paraclinique: '- Immunoglobulines effondrées',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Déficit immunitaire combiné sévère',
        type: 'gravite',
        description: 'Nourrisson.',
        terrain: '- Nourrisson, consanguinité',
        fonctionnels: '- Diarrhée chronique',
        generaux: '- Cassure pondérale',
        physiques: '- Muguet, BCGite',
        paraclinique: '- Lymphopénie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Purpura rhumatoïde
  {
    ...IMMUNOPED,
    slug: 'purpura-rhumatoide',
    nom: 'Purpura rhumatoïde (vascularite à IgA)',
    resume:
      'Vascularite la plus fréquente de l’enfant (3–10 ans), souvent après une infection des voies respiratoires : purpura vasculaire infiltré des membres inférieurs et des fesses (plaquettes normales), arthralgies des chevilles et des genoux, douleurs abdominales (risque d’invagination), atteinte rénale (hématurie, protéinurie) ; guérison spontanée en quelques semaines dans la majorité ; antalgiques, repos ; corticoïdes pour les douleurs abdominales sévères ; surveillance de la bandelette urinaire et de la tension pendant 6 mois.',
    definition:
      'Vascularite des petits vaisseaux à dépôts d’IgA, associant purpura cutané, atteinte articulaire, digestive et rénale (anciennement purpura de Henoch-Schönlein).',
    physiopathologie:
      '## Mécanismes\n- Dépôts de complexes immuns à IgA dans la paroi des petits vaisseaux (peau, intestin, rein), souvent déclenchés par une infection (streptocoque, virus)\n\n## Atteintes\n- **Peau** (100 %), **articulations** (75 %), **tube digestif** (50–75 % : douleur, saignement, **invagination iléo-iléale**), **rein** (30–50 % : de l’hématurie isolée à la glomérulonéphrite rapidement progressive)',
    diagnostic:
      '## Clinique\n- **Purpura** pétéchial **infiltré**, palpable, des membres inférieurs et des fesses, déclive, évoluant par poussées ; œdèmes des chevilles, du dos des mains, du scrotum\n- **Arthralgies** ou arthrites des chevilles et des genoux\n- **Douleurs abdominales** colicatives, vomissements, sang dans les selles\n- Enfant en bon état général, **sans fièvre élevée**\n\n## Signes de gravité\n- Douleur abdominale intense (invagination, perforation), hémorragie digestive\n- Atteinte rénale : **protéinurie** importante, syndrome néphrotique, HTA, insuffisance rénale\n\n## Examens\n- **NFS** (plaquettes **normales**), **bandelette urinaire** (hématurie, protéinurie), créatinine, tension\n- Échographie abdominale si douleurs (invagination)\n- Biopsie rénale si atteinte rénale sévère',
    examens: [
      ['confirmation', 'nfs', 'Plaquettes normales.'],
      ['gravite', 'bandelette-urinaire', 'Hématurie, protéinurie.'],
      ['gravite', 'proteinurie', 'Atteinte rénale.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['gravite', 'echographie-abdominale', 'Invagination.'],
      ['premiere_intention', 'hemostase', 'Coagulation normale.'],
    ],
    scores: [],
    differentiels: [
      ['purpura-thrombopenique-immunologique-enfant', 'Purpura non infiltré, plaquettes basses.'],
      ['Purpura fulminans', 'Purpura fébrile extensif, choc : urgence.'],
      ['leucemie-aigue-lymphoblastique-enfant', 'Cytopénies, organomégalie.'],
      ['maltraitance-enfant', 'Ecchymoses d’âges différents.'],
      ['invagination-intestinale-aigue', 'Douleurs abdominales en crises.'],
    ],
    etiologies:
      '## Déclencheurs\n- Infections respiratoires (streptocoque, virus), plus rarement médicaments, vaccins',
    principes: [
      [
        'Traitement symptomatique',
        'La plupart des cas.',
        '- Repos pendant les poussées, **paracétamol** ; AINS possibles si fonction rénale normale\n- Pas de traitement spécifique du purpura',
      ],
      [
        'Formes digestives',
        'Soulager et surveiller.',
        '- **Prednisolone** 1–2 mg/kg/j pendant 1–2 semaines si douleurs abdominales sévères\n- Échographie si douleurs intenses ; chirurgie si invagination non réductible ou perforation',
      ],
      [
        'Atteinte rénale',
        'Dépister et traiter.',
        '- **Bandelette urinaire et tension** à chaque consultation pendant au moins **6 mois**\n- Protéinurie importante, syndrome néphrotique ou insuffisance rénale : avis néphrologique (corticoïdes, IEC, biopsie)',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleurs'],
      ['prednisolone', 'alternative', 'Douleurs abdominales sévères, atteinte rénale'],
      ['enalapril', 'adjuvant', 'Protéinurie persistante'],
    ],
    complications: [
      {
        nom: 'Invagination intestinale',
        fiche: 'invagination-intestinale-aigue',
        description: 'Hématome pariétal.',
        traitement: '- Réduction, chirurgie',
        clinique: '- Douleurs, vomissements, sang',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Néphropathie à IgA',
        fiche: 'maladie-renale-chronique-enfant',
        description: 'Atteinte glomérulaire.',
        traitement: '- Corticoïdes, IEC',
        clinique: '- HTA, œdèmes',
        paraclinique: '- Protéinurie, créatinine',
      },
      {
        nom: 'Hémorragie digestive',
        fiche: 'hemorragie-digestive-enfant',
        description: 'Vascularite intestinale.',
        traitement: '- Corticoïdes, transfusion',
        clinique: '- Méléna',
        paraclinique: '- Hb',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 4 à 6 semaines chez la majorité ; rechutes possibles ; pronostic à long terme lié à l’atteinte rénale',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Purpura', 'tres_frequent'],
      ['Arthralgies', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Œdèmes', 'occasionnel'],
      ['Hématurie', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: [
        '- Éliminer un purpura fébrile, NFS, bandelette, antalgiques',
        '- Douleurs abdominales intenses, protéinurie',
      ],
      hgr: ['- Échographie, corticoïdes, surveillance rénale', ''],
      tert: ['- Néphrologie pédiatrique', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Enfant avec purpura et douleurs abdominales intenses ou vomissements',
    },
    formes: [
      {
        nom: 'Forme cutanéo-articulaire',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Enfant de 3 à 10 ans',
        fonctionnels: '- Douleurs des chevilles',
        generaux: '- Bon état général',
        physiques: '- Purpura infiltré des membres inférieurs',
        paraclinique: '- Plaquettes normales',
        etiologies: '- Post-infectieux',
        syndromes: [],
      },
      {
        nom: 'Forme digestive',
        type: 'gravite',
        description: 'Invagination possible.',
        terrain: '',
        fonctionnels: '- Douleurs abdominales, vomissements',
        generaux: '',
        physiques: '- Sang dans les selles',
        paraclinique: '- Échographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme rénale',
        type: 'evolutive',
        description: 'Néphropathie à IgA.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- HTA, œdèmes',
        paraclinique: '- Protéinurie, hématurie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Lupus enfant
  {
    ...IMMUNOPED,
    slug: 'lupus-enfant',
    nom: 'Lupus de l’enfant',
    resume:
      'Lupus érythémateux systémique à début pédiatrique (souvent adolescente, plus sévère que chez l’adulte, plus fréquent chez les personnes d’ascendance africaine) : fièvre, fatigue, éruption malaire, photosensibilité, ulcérations buccales, arthrites, alopécie, atteinte rénale fréquente et grave (néphrite lupique), cytopénies, atteinte neurologique ; anticorps antinucléaires, anti-ADN natif, complément bas ; hydroxychloroquine pour tous, corticoïdes, immunosuppresseurs selon l’atteinte ; photoprotection, suivi rénal.',
    definition:
      'Maladie auto-immune systémique chronique débutant avant 18 ans, caractérisée par la production d’auto-anticorps (antinucléaires, anti-ADN) et une atteinte multiviscérale.',
    physiopathologie:
      '## Mécanismes\n- Perte de tolérance immunitaire → auto-anticorps et dépôts de complexes immuns (rein, peau, articulations, vaisseaux, cerveau)\n- Facteurs déclenchants : UV, infections, puberté (hormones)\n\n## Particularités pédiatriques\n- Atteinte **rénale** et **neurologique** plus fréquentes, maladie plus active, retentissement sur la croissance et la scolarité',
    diagnostic:
      '## Clinique\n- **Fièvre** prolongée, fatigue, perte de poids\n- **Éruption malaire** en ailes de papillon, **photosensibilité**, lupus discoïde, **ulcérations buccales**, **alopécie**\n- **Arthrites** non érosives, sérites (pleurésie, péricardite)\n- **Rein** : œdèmes, HTA, hématurie, protéinurie\n- Neurologique : convulsions, psychose, céphalées ; cytopénies (pâleur, purpura)\n\n## Examens\n- **Anticorps antinucléaires**, **anti-ADN natif**, **complément C3–C4** (bas)\n- NFS (anémie hémolytique, leucopénie, thrombopénie), test de Coombs, VS, CRP (souvent normale)\n- **Bandelette**, **protéinurie**, créatinine ; biopsie rénale si atteinte rénale\n- Éliminer : tuberculose, VIH, paludisme, leucémie',
    examens: [
      ['confirmation', 'anticorps-antinucleaires', 'Positifs.'],
      ['confirmation', 'complement-c3-c4', 'Abaissé.'],
      ['premiere_intention', 'nfs', 'Cytopénies.'],
      ['gravite', 'bandelette-urinaire', 'Néphrite lupique.'],
      ['gravite', 'proteinurie', 'Néphrite lupique.'],
      ['gravite', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'test-de-coombs-direct', 'Anémie hémolytique.'],
      ['premiere_intention', 'vitesse-sedimentation', 'Activité.'],
      ['etiologique', 'tdr-vih', 'Diagnostic différentiel.'],
    ],
    scores: [],
    differentiels: [
      ['lupus-erythemateux-systemique', 'Fiche de l’adulte.'],
      ['arthrite-juvenile-idiopathique', 'Arthrite sans atteinte multisystémique.'],
      ['infection-vih-enfant', 'Cytopénies, fièvre, éruption.'],
      ['tuberculose-enfant', 'Fièvre prolongée, sérites.'],
      ['leucemie-aigue-lymphoblastique-enfant', 'Cytopénies, fièvre.'],
      ['syndrome-nephrotique-enfant', 'Œdèmes, protéinurie.'],
    ],
    etiologies:
      '## Facteurs\n- Génétiques, hormonaux (fille, adolescence), environnementaux (UV, infections)',
    principes: [
      [
        'Traitement de fond',
        'Pour tous.',
        '- **Hydroxychloroquine** 5 mg/kg/j (max 400 mg/j) au long cours (examen ophtalmologique)\n- **Photoprotection**, vitamine D et calcium',
      ],
      [
        'Poussées et atteintes viscérales',
        'Selon la gravité.',
        '- **Prednisolone** 0,5–2 mg/kg/j selon l’atteinte, puis décroissance\n- Néphrite lupique sévère, atteinte neurologique : **méthylprednisolone** IV puis **cyclophosphamide** ou mycophénolate (centre spécialisé), puis **azathioprine** en entretien\n- HTA et protéinurie : **IEC**',
      ],
      [
        'Suivi',
        'Prévenir les complications.',
        '- Bandelette, tension, NFS à chaque visite ; vaccinations (pas de vaccins vivants sous immunosuppresseurs)\n- Prévention des infections, contraception adaptée chez l’adolescente, soutien psychologique et scolaire',
      ],
    ],
    molecules: [
      ['hydroxychloroquine', 'premiere', 'Traitement de fond'],
      ['prednisolone', 'premiere', 'Poussées'],
      ['methylprednisolone', 'alternative', 'Atteintes graves'],
      ['cyclophosphamide', 'deuxieme', 'Néphrite lupique sévère (spécialiste)'],
      ['azathioprine', 'deuxieme', 'Entretien'],
      ['enalapril', 'adjuvant', 'HTA, protéinurie'],
    ],
    complications: [
      {
        nom: 'Néphrite lupique',
        fiche: 'maladie-renale-chronique-enfant',
        description: 'Atteinte glomérulaire.',
        traitement: '- Immunosuppresseurs, IEC',
        clinique: '- Œdèmes, HTA',
        paraclinique: '- Protéinurie, biopsie',
      },
      {
        nom: 'Atteinte neurologique',
        description: 'Neurolupus.',
        traitement: '- Corticoïdes IV, immunosuppresseurs',
        clinique: '- Convulsions, psychose',
        paraclinique: '- IRM',
      },
      {
        nom: 'Infections',
        fiche: 'sepsis-enfant',
        description: 'Maladie et immunosuppression.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 10 ans > 85 % avec un traitement adapté ; pronostic lié à l’atteinte rénale et à l’accès aux soins',
    urgences: [],
    symptomes: [
      ['Fièvre', 'frequent'],
      ['Arthralgies', 'frequent'],
      ['Photosensibilité', 'frequent'],
      ['Éruption cutanée', 'frequent'],
      ['Œdèmes', 'occasionnel'],
      ['Perte de poids', 'frequent'],
    ],
    sources: ['Nelson Textbook of Pediatrics', "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: ['- Repérer, bandelette, orientation', '- Œdèmes, HTA, convulsions'],
      hgr: ['- Bilan, corticoïdes', ''],
      tert: ['- Rhumatologie et néphrologie pédiatriques', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Lupus de l’adolescente',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Adolescente',
        fonctionnels: '- Fatigue, arthralgies',
        generaux: '- Fièvre',
        physiques: '- Éruption malaire, ulcérations buccales',
        paraclinique: '- AAN, anti-ADN, C3 bas',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Néphrite lupique',
        type: 'gravite',
        description: 'Atteinte rénale.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Œdèmes, HTA',
        paraclinique: '- Protéinurie, hématurie',
        etiologies: '',
        syndromes: ['syndrome-oedemateux'],
      },
    ],
  },
];
