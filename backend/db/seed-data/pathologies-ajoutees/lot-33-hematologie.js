'use strict';

/**
 * Lot 33 (phase 2, hématologie) — anémie mégaloblastique, déficit en G6PD. Rédigé par IA (OMS,
 * BSH, ouvrages de référence) : à valider.
 */

const HEMATO = { departement: 'medecine-interne', specialite: 'Hématologie' };

module.exports = [
  // =================================================================== Anémie mégaloblastique
  {
    ...HEMATO,
    slug: 'anemie-megaloblastique',
    nom: 'Anémie mégaloblastique',
    resume:
      'Anémie macrocytaire par carence en vitamine B12 ou en folates (malnutrition, grossesse, alcool, drépanocytose et hémolyse chronique, maladie de Biermer, médicaments) : fatigue, pâleur, glossite, signes neurologiques si B12 ; NFS (VGM > 100 fL), frottis, dosages ; vitamine B12 IM et/ou acide folique ; ne jamais donner d’acide folique seul sans avoir éliminé une carence en B12.',
    definition:
      'Anémie macrocytaire due à un défaut de synthèse de l’ADN des précurseurs érythroïdes, le plus souvent par carence en vitamine B12 (cobalamine) ou en folates.',
    physiopathologie:
      '## Causes\n- **Folates** : apports insuffisants (malnutrition), besoins accrus (**grossesse**, allaitement, **hémolyse chronique** dont drépanocytose), alcool, malabsorption, médicaments (méthotrexate, cotrimoxazole, pyriméthamine, phénytoïne)\n- **Vitamine B12** : maladie de Biermer (auto-immune), gastrectomie, malabsorption, régime végétalien strict, metformine au long cours, parasites (bothriocéphale)\n\n## Conséquences\n- Anémie, parfois pancytopénie ; atteinte neurologique (sclérose combinée de la moelle) dans la carence en B12',
    diagnostic:
      '## Clinique\n- Syndrome anémique d’installation progressive, pâleur, **subictère** (hémolyse intramédullaire)\n- **Glossite** (langue rouge, lisse), troubles digestifs\n- Carence en B12 : **paresthésies**, ataxie, troubles cognitifs, dépression\n\n## Examens\n- **NFS** : anémie **macrocytaire** (VGM > 100 fL), réticulocytes bas, parfois leucopénie et thrombopénie\n- **Frottis** : macro-ovalocytes, polynucléaires hypersegmentés\n- **Vitamine B12 et folates** sériques ; LDH et bilirubine libre élevées\n- Médullogramme rarement nécessaire',
    examens: [
      ['premiere_intention', 'nfs', 'Macrocytose, pancytopénie.'],
      ['premiere_intention', 'reticulocytes', 'Bas (anémie arégénérative).'],
      ['confirmation', 'vitamine-b12-folates', 'Carence.'],
      ['premiere_intention', 'ldh', 'Élevées.'],
      ['premiere_intention', 'bilan-hepatique', 'Bilirubine libre ; alcool.'],
      ['etiologique', 'tsh', 'Hypothyroïdie (macrocytose).'],
      ['etiologique', 'tdr-vih', 'VIH, zidovudine.'],
    ],
    scores: [],
    differentiels: [
      ['Macrocytose de l’alcool ou des hépatopathies', 'Sans carence, GGT élevées.'],
      ['Macrocytose médicamenteuse', 'Zidovudine, hydroxycarbamide.'],
      ['Hypothyroïdie', 'TSH élevée.'],
      ['Myélodysplasie', 'Sujet âgé, frottis anormal, médullogramme.'],
      ['anemie-ferriprive', 'Microcytose (carences mixtes possibles).'],
    ],
    etiologies:
      '## Terrain\n- Femme enceinte, malnutrition, drépanocytaire, alcoolique, sujet âgé, patient sous méthotrexate ou anticonvulsivants',
    principes: [
      [
        'Carence en vitamine B12',
        'Corriger et prévenir les séquelles neurologiques.',
        '- **Cyanocobalamine** (ou hydroxocobalamine) **1 000 µg IM** tous les 2 jours pendant 1 à 2 semaines, puis 1 fois par semaine jusqu’à normalisation, puis **1 fois par mois** à vie si la cause persiste (Biermer)\n- Voie orale 1 000–2 000 µg/j possible si absorption conservée\n- Surveiller la **kaliémie** les premiers jours (hypokaliémie)',
      ],
      [
        'Carence en folates',
        'Corriger.',
        '- **Acide folique 5 mg/j** pendant 4 mois\n- Hémolyse chronique (drépanocytose) : 1 à 5 mg/j au long cours selon le protocole\n- **Jamais d’acide folique seul** si une carence en B12 n’est pas éliminée (aggravation neurologique)',
      ],
      [
        'Suivi',
        'Vérifier la réponse.',
        '- Crise réticulocytaire à J5–J7, correction de l’Hb en 6 à 8 semaines\n- Transfusion seulement si anémie mal tolérée (risque de surcharge)',
      ],
    ],
    molecules: [
      ['cyanocobalamine-vitamine-b12', 'premiere', 'Carence en B12'],
      ['hydroxocobalamine', 'alternative', 'Carence en B12'],
      ['acide-folique', 'premiere', 'Carence en folates'],
      ['chlorure-de-potassium', 'adjuvant', 'Hypokaliémie au début du traitement'],
    ],
    complications: [
      {
        nom: 'Atteinte neurologique (sclérose combinée)',
        fiche: 'neuropathies-peripheriques',
        description: 'Carence en B12 prolongée.',
        traitement: '- Vitamine B12 précoce',
        clinique: '- Paresthésies, ataxie',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque',
        description: 'Anémie profonde.',
        traitement: '- Traitement de l’anémie, transfusion prudente',
        clinique: '- Dyspnée, œdèmes',
        paraclinique: '',
      },
      {
        nom: 'Anomalies du tube neural',
        description: 'Carence en folates pendant la grossesse.',
        traitement: '- Prévention péri-conceptionnelle (0,4 mg/j)',
        clinique: '',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent sous traitement ; séquelles neurologiques possibles si la carence en B12 est traitée tardivement',
    urgences: [],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Asthénie', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Troubles sensitifs', 'occasionnel'],
      ['Ictère', 'occasionnel'],
      ['Troubles de la marche', 'occasionnel'],
    ],
    sources: [
      'ASH — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- NFS, acide folique (grossesse, drépanocytose), orientation',
        '- Anémie sévère, signes neurologiques',
      ],
      hgr: ['- Dosages, vitamine B12 IM', ''],
      tert: ['- Hématologie, recherche de la cause', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Carence en folates',
        type: 'commune',
        description: 'Grossesse, malnutrition, hémolyse.',
        terrain: '- Femme enceinte, drépanocytaire, malnutri',
        fonctionnels: '- Fatigue',
        generaux: '- Pâleur',
        physiques: '- Glossite',
        paraclinique: '- Macrocytose, folates bas',
        etiologies: '- Apports insuffisants, besoins accrus',
        syndromes: ['syndrome-anemique'],
      },
      {
        nom: 'Carence en vitamine B12',
        type: 'etiologique',
        description: 'Biermer, malabsorption.',
        terrain: '- Sujet âgé, gastrectomie, metformine',
        fonctionnels: '- Paresthésies, troubles de la marche',
        generaux: '- Pâleur',
        physiques: '- Ataxie, abolition des réflexes',
        paraclinique: '- B12 basse',
        etiologies: '- Maladie de Biermer',
        syndromes: ['syndrome-anemique'],
      },
      {
        nom: 'Pancytopénie mégaloblastique',
        type: 'gravite',
        description: 'Forme sévère.',
        terrain: '',
        fonctionnels: '- Dyspnée',
        generaux: '- Infections',
        physiques: '- Purpura',
        paraclinique: '- Pancytopénie',
        etiologies: '',
        syndromes: ['syndrome-hemorragique'],
      },
    ],
  },

  // =================================================================== Déficit en G6PD
  {
    ...HEMATO,
    slug: 'deficit-en-g6pd',
    nom: 'Déficit en G6PD',
    resume:
      'Déficit enzymatique héréditaire lié à l’X, fréquent en Afrique centrale (10–20 % des garçons) : hémolyse aiguë après certains médicaments (primaquine, dapsone, nitrofurantoïne, quinolones, sulfamides…), fèves, naphtaline ou infections ; ictère néonatal ; urines foncées, pâleur, ictère ; arrêt de l’agent déclenchant, hydratation, transfusion si anémie sévère ; tester avant la primaquine à dose radicale.',
    definition:
      'Déficit héréditaire en glucose-6-phosphate déshydrogénase, enzyme protégeant les globules rouges du stress oxydatif, responsable d’hémolyses aiguës déclenchées par des agents oxydants.',
    physiopathologie:
      '## Mécanismes\n- Transmission **liée à l’X** : garçons hémizygotes atteints ; femmes hétérozygotes atteintes de façon variable\n- Variant africain (A–) : déficit modéré, hémolyse aiguë limitée\n- Agents oxydants → dénaturation de l’hémoglobine (corps de Heinz), hémolyse intravasculaire\n\n## Déclencheurs\n- **Médicaments** : primaquine, tafénoquine, dapsone, nitrofurantoïne, rasburicase, bleu de méthylène, sulfamides (dont cotrimoxazole à forte dose), certaines quinolones\n- **Fèves** (favisme), naphtaline (boules antimites), henné chez le nouveau-né\n- **Infections** (paludisme, hépatites, pneumonies), acidocétose',
    diagnostic:
      '## Clinique\n- 1 à 3 jours après l’exposition : **pâleur**, **ictère**, **urines foncées** (« coca-cola »), douleurs lombaires ou abdominales, fièvre\n- **Ictère néonatal** précoce et sévère (risque d’ictère nucléaire)\n\n## Examens\n- NFS : anémie normocytaire, réticulocytes élevés ; frottis (corps de Heinz, « bite cells »)\n- Bilirubine libre et LDH élevées, haptoglobine basse, hémoglobinurie\n- **Dosage du G6PD** (faussement normal en pleine hémolyse : contrôler à 2–3 mois)\n- Créatinine (insuffisance rénale)',
    examens: [
      ['confirmation', 'test-g6pd', 'Activité enzymatique basse (à distance de l’hémolyse).'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'reticulocytes', 'Élevés.'],
      ['premiere_intention', 'ldh', 'Hémolyse.'],
      ['premiere_intention', 'bilan-hepatique', 'Bilirubine libre.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hémoglobinurie.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme déclenchant.'],
      ['etiologique', 'test-de-coombs-direct', 'Éliminer une hémolyse auto-immune.'],
    ],
    scores: [],
    differentiels: [
      ['drepanocytose', 'Électrophorèse de l’hémoglobine.'],
      ['paludisme-grave', 'Hémolyse palustre, TDR positif.'],
      ['Hémolyse auto-immune', 'Coombs positif.'],
      ['hepatites-virales-aigues-a-et-e', 'Transaminases très élevées.'],
      ['ictere-neonatal', 'Autres causes d’ictère du nouveau-né.'],
    ],
    etiologies:
      '## Terrain\n- Garçons, Afrique centrale, exposition à des médicaments oxydants, fèves ou naphtaline, infection',
    principes: [
      [
        'Crise hémolytique',
        'Arrêter l’hémolyse et ses conséquences.',
        '- **Arrêt de l’agent déclenchant**, traitement de l’infection\n- **Hydratation** abondante (prévention de l’insuffisance rénale)\n- **Transfusion** si anémie sévère ou mal tolérée (Hb < 7 g/dL ou signes de gravité)\n- Pas de traitement spécifique ; acide folique en cas d’hémolyse chronique',
      ],
      [
        'Nouveau-né',
        'Prévenir l’ictère nucléaire.',
        '- Surveillance de la bilirubine, **photothérapie** précoce, exsanguinotransfusion si nécessaire\n- Éviter la naphtaline et le henné',
      ],
      [
        'Prévention',
        'Éviter les crises.',
        '- Carte et liste des médicaments et aliments à éviter remises au patient\n- **Tester le G6PD avant la primaquine à dose radicale** (P. vivax, P. ovale) ou la tafénoquine ; la primaquine à faible dose unique (0,25 mg/kg, P. falciparum) peut être donnée sans test selon l’OMS\n- Paludisme : les CTA sont utilisables',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Hydratation'],
      ['acide-folique', 'adjuvant', 'Hémolyse chronique'],
      ['paracetamol', 'adjuvant', 'Fièvre, douleur'],
    ],
    complications: [
      {
        nom: 'Anémie aiguë sévère',
        description: 'Hémolyse massive.',
        traitement: '- Transfusion',
        clinique: '- Pâleur, dyspnée, tachycardie',
        paraclinique: '- Hb basse',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hémoglobinurie.',
        traitement: '- Hydratation, dialyse',
        clinique: '- Oligurie, urines foncées',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Ictère nucléaire',
        fiche: 'ictere-neonatal',
        description: 'Nouveau-né.',
        traitement: '- Photothérapie, exsanguinotransfusion',
        clinique: '- Léthargie, hypertonie',
        paraclinique: '- Bilirubine',
      },
    ],
    evolution:
      '## Pronostic\n- Hémolyse aiguë habituellement spontanément résolutive en 1 à 2 semaines après l’arrêt de l’agent ; bon pronostic avec la prévention',
    urgences: [],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Ictère', 'tres_frequent'],
      ['Urines foncées', 'frequent'],
      ['Douleur lombaire', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
      ['Asthénie', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'WHO guidelines for malaria',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Arrêt de l’agent déclenchant, hydratation, orientation',
        '- Anémie sévère, urines foncées, nouveau-né ictérique',
      ],
      hgr: ['- Transfusion, photothérapie, test G6PD à distance', ''],
      tert: ['- Hématologie, exsanguinotransfusion', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hémolyse aiguë médicamenteuse',
        type: 'commune',
        description: 'Après un oxydant.',
        terrain: '- Garçon, prise de primaquine, dapsone, nitrofurantoïne',
        fonctionnels: '- Urines foncées, fatigue',
        generaux: '- Fièvre possible',
        physiques: '- Pâleur, ictère',
        paraclinique: '- Anémie, réticulocytes élevés',
        etiologies: '- Médicaments oxydants',
        syndromes: ['syndrome-hemolytique'],
      },
      {
        nom: 'Ictère néonatal par déficit en G6PD',
        type: 'terrain',
        description: 'Ictère précoce et intense.',
        terrain: '- Nouveau-né garçon',
        fonctionnels: '',
        generaux: '',
        physiques: '- Ictère précoce',
        paraclinique: '- Bilirubine libre élevée',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Hémolyse sévère avec insuffisance rénale',
        type: 'gravite',
        description: 'Hémoglobinurie massive.',
        terrain: '',
        fonctionnels: '- Oligurie',
        generaux: '- Choc',
        physiques: '- Pâleur intense',
        paraclinique: '- Créatinine élevée',
        etiologies: '',
        syndromes: ['syndrome-hemolytique', 'syndrome-anemique'],
      },
    ],
  },
];
