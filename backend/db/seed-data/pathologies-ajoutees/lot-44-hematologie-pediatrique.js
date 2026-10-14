'use strict';

/**
 * Lot 44 (phase 2, hématologie pédiatrique et malnutrition) — syndrome de renutrition
 * inappropriée, déficit en G6PD de l'enfant, hémophilie de l'enfant, PTI de l'enfant, thalassémies,
 * anémies hémolytiques de l'enfant. Rédigé par IA (OMS, ASH, WFH, TIF, Nelson) : à valider.
 */

const MAL = { departement: 'pediatrie', specialite: 'Malnutrition' };
const HEMATOPED = { departement: 'pediatrie', specialite: 'Hématologie et oncologie pédiatriques' };

module.exports = [
  // =================================================================== Renutrition inappropriée
  {
    ...MAL,
    slug: 'syndrome-de-renutrition-inappropriee',
    nom: 'Syndrome de renutrition inappropriée',
    resume:
      'Complication potentiellement mortelle de la reprise alimentaire trop rapide chez un enfant (ou adulte) sévèrement dénutri, dans les premiers jours : hypophosphatémie, hypokaliémie, hypomagnésémie, carence en thiamine, rétention hydrosodée → insuffisance cardiaque, troubles du rythme, détresse respiratoire, confusion, convulsions, mort subite ; prévention par la progression lente (F-75 en phase de stabilisation), surveillance du poids, des œdèmes et de la fréquence respiratoire, supplémentation en thiamine, potassium, phosphore et magnésium.',
    definition:
      'Ensemble des perturbations métaboliques et hydroélectrolytiques (surtout hypophosphatémie) survenant lors de la renutrition orale, entérale ou parentérale d’un patient sévèrement dénutri.',
    physiopathologie:
      '## Mécanismes\n- Pendant la dénutrition : déplétion des stocks intracellulaires de phosphore, potassium, magnésium et thiamine (taux sanguins souvent normaux)\n- À la renutrition, l’apport glucidique stimule l’**insuline** → entrée massive de phosphore, potassium et magnésium dans les cellules → **hypophosphatémie**, **hypokaliémie**, **hypomagnésémie**\n- Consommation de **thiamine** (encéphalopathie de Gayet-Wernicke, insuffisance cardiaque) et **rétention de sodium et d’eau** → surcharge\n\n## Terrain à risque\n- Malnutrition aiguë sévère (marasme, kwashiorkor), anorexie mentale, jeûne prolongé, alcoolisme, renutrition après chirurgie digestive',
    diagnostic:
      '## Clinique (2 à 5 premiers jours)\n- **Tachypnée**, **tachycardie**, œdèmes, hépatomégalie, prise de poids rapide (surcharge)\n- Faiblesse musculaire, troubles du rythme, confusion, convulsions, détresse respiratoire\n- Aggravation brutale chez un enfant malnutri en cours de renutrition\n\n## Examens\n- **Phosphorémie**, kaliémie, magnésémie, glycémie, avant et pendant les premiers jours de renutrition si disponible\n- ECG (troubles du rythme)',
    examens: [
      ['confirmation', 'phosphoremie', 'Hypophosphatémie.'],
      ['premiere_intention', 'ionogramme', 'Hypokaliémie.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypomagnésémie.'],
      ['premiere_intention', 'glycemie', 'Hypo- ou hyperglycémie.'],
      ['gravite', 'ecg', 'Troubles du rythme.'],
      ['premiere_intention', 'anthropometrie', 'Prise de poids rapide.'],
    ],
    scores: [],
    differentiels: [
      ['insuffisance-cardiaque-enfant', 'Surcharge hydrique (ReSoMal ou perfusion trop rapide).'],
      ['sepsis-enfant', 'Infection nosocomiale, fièvre ou hypothermie.'],
      ['pneumonie-enfant', 'Fièvre, foyer.'],
      ['encephalopathie-de-gayet-wernicke', 'Carence en thiamine (adulte, alcool).'],
    ],
    etiologies:
      '## Facteurs\n- Renutrition trop rapide, apports glucidiques élevés, absence de supplémentation, malnutrition sévère',
    principes: [
      [
        'Prévention',
        'Renourrir lentement.',
        '- Enfant malnutri : **F-75** (130 mL/kg/j, ~100 kcal/kg/j) en phase de stabilisation, sans précipiter le passage au F-100 ; ne pas donner de F-100 d’emblée\n- Adulte à risque : débuter à 10 kcal/kg/j (5 kcal/kg/j si risque très élevé) et augmenter sur 4 à 7 jours\n- **Thiamine** avant et pendant les premiers jours (adulte 100–300 mg/j ; enfant selon le protocole)\n- Les laits thérapeutiques contiennent le potassium, le magnésium et le phosphore nécessaires',
      ],
      [
        'Surveillance',
        'Repérer tôt.',
        '- Fréquence respiratoire et cardiaque toutes les 4 h, poids quotidien, œdèmes, hépatomégalie\n- Ionogramme et phosphorémie si disponibles',
      ],
      [
        'Traitement',
        'Corriger.',
        '- Réduire les apports de moitié, puis réaugmenter progressivement\n- **Phosphore**, **potassium** (chlorure de potassium), **magnésium** selon les taux (voie orale si possible, IV si sévère)\n- Surcharge : arrêt des liquides, **furosémide** 1 mg/kg ; thiamine IV si signes neurologiques',
      ],
    ],
    molecules: [
      ['vitamine-b1-thiamine', 'premiere', 'Prévention et traitement'],
      ['lait-f75', 'premiere', 'Renutrition progressive'],
      ['chlorure-de-potassium', 'premiere', 'Hypokaliémie'],
      ['sulfate-de-magnesium', 'alternative', 'Hypomagnésémie'],
      ['furosemide', 'adjuvant', 'Surcharge hydrique'],
    ],
    complications: [
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Rétention hydrosodée, hypophosphatémie.',
        traitement: '- Réduction des apports, diurétiques',
        clinique: '- Tachypnée, hépatomégalie',
        paraclinique: '',
      },
      {
        nom: 'Troubles du rythme et mort subite',
        fiche: 'troubles-du-rythme-enfant',
        description: 'Hypokaliémie, hypomagnésémie.',
        traitement: '- Correction ionique',
        clinique: '- Palpitations, malaise',
        paraclinique: '- ECG',
      },
      {
        nom: 'Encéphalopathie de Gayet-Wernicke',
        fiche: 'encephalopathie-de-gayet-wernicke',
        description: 'Carence en thiamine.',
        traitement: '- Thiamine IV',
        clinique: '- Confusion, ataxie, ophtalmoplégie',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Évitable par une renutrition progressive ; mortalité élevée si non reconnu',
    urgences: [],
    symptomes: [
      ['Tachypnée', 'frequent'],
      ['Œdèmes', 'frequent'],
      ['Faiblesse musculaire', 'frequent'],
      ['Palpitations', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
      ['Désorientation', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Renutrition progressive selon le protocole (UNTA, UNTI)',
        '- Aggravation pendant la renutrition',
      ],
      hgr: ['- UNTI : surveillance, ionogramme, correction', ''],
      tert: ['- Réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Renutrition inappropriée de l’enfant malnutri',
        type: 'commune',
        description: 'Premiers jours en UNTI.',
        terrain: '- MAS',
        fonctionnels: '- Polypnée',
        generaux: '- Prise de poids rapide',
        physiques: '- Œdèmes, hépatomégalie',
        paraclinique: '- Hypophosphatémie, hypokaliémie',
        etiologies: '- Apports trop rapides',
        syndromes: ['syndrome-de-retention-hydrosodee'],
      },
      {
        nom: 'Forme grave',
        type: 'gravite',
        description: 'Atteinte cardiaque et neurologique.',
        terrain: '',
        fonctionnels: '- Confusion',
        generaux: '',
        physiques: '- Insuffisance cardiaque, convulsions',
        paraclinique: '- Troubles du rythme',
        etiologies: '',
        syndromes: ['syndrome-d-insuffisance-cardiaque-droite'],
      },
    ],
  },

  // =================================================================== G6PD enfant
  {
    ...HEMATOPED,
    slug: 'deficit-en-g6pd-enfant',
    nom: 'Déficit en G6PD de l’enfant',
    resume:
      'Déficit enzymatique héréditaire lié à l’X, fréquent en RDC (garçons surtout) : ictère néonatal sévère (risque d’ictère nucléaire) et crises hémolytiques aiguës déclenchées par des médicaments (primaquine, dapsone, sulfamides, nitrofurantoïne, bleu de méthylène), des infections ou les fèves : pâleur brutale, urines foncées (« coca-cola »), ictère ; arrêt du facteur déclenchant, hydratation, transfusion si anémie sévère ; liste des médicaments à éviter remise à la famille.',
    definition:
      'Déficit héréditaire en glucose-6-phosphate déshydrogénase, enzyme protégeant le globule rouge du stress oxydatif, transmis sur le chromosome X (garçons hémizygotes atteints, filles hétérozygotes parfois atteintes).',
    physiopathologie:
      '## Mécanismes\n- Défaut de production de NADPH → globules rouges vulnérables au **stress oxydatif** → **hémolyse intravasculaire** aiguë (corps de Heinz)\n\n## Déclencheurs\n- **Médicaments** : primaquine, tafénoquine, dapsone, sulfamides (cotrimoxazole à forte dose), nitrofurantoïne, rasburicase, bleu de méthylène, quinolones (à discuter)\n- **Infections** (cause la plus fréquente), **fèves** (favisme), naphtaline, henné chez le nouveau-né\n\n## Nouveau-né\n- Ictère néonatal précoce et sévère, souvent sans anémie marquée',
    diagnostic:
      '## Clinique\n- **Crise hémolytique** 24–72 h après le déclencheur : **pâleur** brutale, fatigue, **urines foncées** (hémoglobinurie), **ictère**, douleurs abdominales ou lombaires, fièvre\n- Gravité : tachycardie, polypnée, insuffisance cardiaque, insuffisance rénale aiguë\n- Nouveau-né : ictère dans les premiers jours, nécessitant parfois photothérapie ou exsanguinotransfusion\n\n## Examens\n- **NFS** (anémie normocytaire), **réticulocytes** élevés, frottis (corps de Heinz, « bite cells »)\n- Bilirubine libre, **LDH**, haptoglobine basse, bandelette (hémoglobinurie), créatinine\n- **Test G6PD** (quantitatif ou test de dépistage) **à distance de la crise** (faux normal pendant l’hémolyse, réticulocytes riches en enzyme)\n- Éliminer : paludisme (TDR), drépanocytose (électrophorèse)',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'reticulocytes', 'Régénération.'],
      ['confirmation', 'test-g6pd', 'À distance de la crise.'],
      ['premiere_intention', 'ldh', 'Hémolyse.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hémoglobinurie.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['premiere_intention', 'bilirubine-neonatale', 'Ictère néonatal.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-grave-enfant', 'Anémie hémolytique fébrile, TDR positif.'],
      ['drepanocytose', 'Électrophorèse de l’hémoglobine.'],
      ['anemies-hemolytiques-enfant', 'Autres causes d’hémolyse.'],
      ['ictere-neonatal', 'Autres causes d’ictère néonatal.'],
      ['hepatites-virales-enfant', 'Ictère avec cytolyse.'],
    ],
    etiologies:
      '## Facteurs\n- Transmission liée à l’X ; déclencheurs médicamenteux, infectieux, alimentaires',
    principes: [
      [
        'Crise hémolytique',
        'Traiter.',
        '- **Arrêter** le médicament ou l’aliment en cause, traiter l’infection\n- **Hydratation** (protection rénale), surveillance de la diurèse et de la couleur des urines\n- **Transfusion** si Hb < 7 g/dL ou anémie mal tolérée, ou hémoglobinurie persistante avec Hb < 9 g/dL\n- **Acide folique** en cas d’hémolyse prolongée',
      ],
      [
        'Nouveau-né',
        'Prévenir l’ictère nucléaire.',
        '- Surveillance rapprochée de l’ictère, **photothérapie** précoce, exsanguinotransfusion selon les courbes',
      ],
      [
        'Prévention',
        'Éviter les déclencheurs.',
        '- **Liste écrite** des médicaments et aliments à éviter (primaquine, dapsone, sulfamides, nitrofurantoïne, bleu de méthylène, fèves, naphtaline)\n- Test G6PD avant la primaquine ou la tafénoquine quand c’est possible ; information de la famille et des soignants\n- Dépistage des frères et de la mère',
      ],
    ],
    molecules: [
      ['acide-folique', 'adjuvant', 'Hémolyse prolongée'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Hydratation'],
    ],
    complications: [
      {
        nom: 'Ictère nucléaire',
        fiche: 'ictere-neonatal',
        description: 'Hyperbilirubinémie néonatale.',
        traitement: '- Photothérapie, exsanguinotransfusion',
        clinique: '- Hypotonie, opisthotonos',
        paraclinique: '- Bilirubine',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hémoglobinurie massive.',
        traitement: '- Hydratation, dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Anémie sévère',
        fiche: 'anemie-enfant',
        description: 'Hémolyse aiguë.',
        traitement: '- Transfusion',
        clinique: '- Insuffisance cardiaque',
        paraclinique: '- Hb',
      },
    ],
    evolution:
      '## Pronostic\n- Crises spontanément résolutives en 1 à 2 semaines si le déclencheur est arrêté ; bon pronostic avec la prévention',
    urgences: [],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Urines foncées', 'tres_frequent'],
      ['Ictère', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'WHO guidelines for malaria',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Arrêt du déclencheur, hydratation, orientation', '- Pâleur brutale, urines foncées'],
      hgr: ['- NFS, transfusion, photothérapie', ''],
      tert: ['- Dosage G6PD, exsanguinotransfusion', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Crise hémolytique aiguë',
        type: 'commune',
        description: 'Après déclencheur.',
        terrain: '- Garçon',
        fonctionnels: '- Fatigue',
        generaux: '- Fièvre',
        physiques: '- Pâleur, ictère, urines foncées',
        paraclinique: '- Anémie, réticulocytose',
        etiologies: '- Médicaments, infections, fèves',
        syndromes: ['syndrome-hemolytique'],
      },
      {
        nom: 'Ictère néonatal sur déficit en G6PD',
        type: 'terrain',
        description: 'Nouveau-né.',
        terrain: '- Nouveau-né garçon',
        fonctionnels: '',
        generaux: '',
        physiques: '- Ictère précoce',
        paraclinique: '- Bilirubine libre élevée',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hémophilie enfant
  {
    ...HEMATOPED,
    slug: 'hemophilie-enfant',
    nom: 'Hémophilie de l’enfant',
    resume:
      'Maladie hémorragique héréditaire liée à l’X (déficit en facteur VIII = hémophilie A, en facteur IX = hémophilie B), chez le garçon : hématomes et ecchymoses dès l’apprentissage de la marche, hémarthroses (genou, coude, cheville), saignements prolongés après circoncision ou extraction dentaire ; TCA allongé, TP normal, dosage des facteurs ; pas d’injection IM ni d’aspirine ou d’AINS ; facteur de remplacement le plus tôt possible, glace, repos ; desmopressine dans les formes mineures A ; vigilance face au traumatisme crânien.',
    definition:
      'Trouble héréditaire de la coagulation lié au chromosome X, dû à un déficit en facteur VIII (hémophilie A) ou en facteur IX (hémophilie B), classé selon le taux de facteur : sévère (< 1 %), modéré (1–5 %), mineur (5–40 %).',
    physiopathologie:
      '## Mécanismes\n- Défaut de génération de thrombine → caillot instable\n- Saignements **profonds** (articulations, muscles) répétés → **arthropathie hémophilique** invalidante\n- Garçons atteints, mères conductrices ; un tiers de mutations nouvelles',
    diagnostic:
      '## Clinique\n- Nouveau-né : saignement prolongé à la circoncision ou au cordon, céphalhématome\n- **Ecchymoses** dès l’âge de la marche, **hémarthroses** (articulation chaude, gonflée, douloureuse, en flexion), hématomes musculaires (psoas : douleur de l’aine, flexion de la hanche)\n- Saignements après extraction dentaire, chute\n- Signes de gravité : **traumatisme crânien**, saignement du cou ou de la bouche (obstruction des voies aériennes), hématome du psoas, saignement digestif\n\n## Examens\n- **TCA allongé**, **TP normal**, plaquettes normales\n- **Dosage des facteurs VIII et IX** (type et sévérité), recherche d’inhibiteurs\n- Scanner cérébral en cas de traumatisme crânien ; NFS, groupage',
    examens: [
      ['premiere_intention', 'hemostase', 'TCA allongé, TP normal.'],
      ['confirmation', 'dosage-facteurs-coagulation', 'Facteur VIII ou IX.'],
      ['premiere_intention', 'nfs', 'Anémie, plaquettes normales.'],
      ['gravite', 'scanner-cerebral', 'Hémorragie intracrânienne.'],
      ['gravite', 'groupage-rai', 'Transfusion.'],
      ['deuxieme_intention', 'echographie-parties-molles', 'Hématome musculaire.'],
    ],
    scores: [],
    differentiels: [
      ['hemophilie', 'Fiche de l’adulte.'],
      ['purpura-thrombopenique-immunologique-enfant', 'Purpura, plaquettes basses.'],
      ['maltraitance-enfant', 'Ecchymoses multiples d’âges différents, bilan d’hémostase normal.'],
      ['Maladie de Willebrand', 'Saignements muqueux, filles et garçons.'],
      ['arthrite-septique', 'Arthrite fébrile.'],
    ],
    etiologies: '## Transmission\n- Liée à l’X (mère conductrice) ; mutation nouvelle dans un tiers des cas',
    principes: [
      [
        'Saignement aigu',
        'Traiter vite.',
        '- **Facteur de remplacement** le plus tôt possible : hémophilie A, **facteur VIII** 20–25 UI/kg (hémarthrose) à 50 UI/kg (saignement grave) ; hémophilie B, **facteur IX** 30–40 UI/kg à 80–100 UI/kg\n- À défaut : plasma frais congelé (A et B) ou cryoprécipité (A)\n- **RICE** : repos, glace, compression, élévation ; immobilisation courte de l’articulation\n- **Acide tranexamique** pour les saignements muqueux (bouche, nez), pas en cas d’hématurie\n- **Desmopressine** 0,3 µg/kg IV ou SC (hémophilie A mineure)',
      ],
      [
        'Précautions',
        'Éviter les complications.',
        '- **Pas d’injection intramusculaire** (vaccins en SC), pas d’**aspirine** ni d’AINS : **paracétamol** (morphine si douleur sévère)\n- Tout traumatisme crânien : facteur avant le scanner',
      ],
      [
        'Suivi',
        'Préserver les articulations.',
        '- Carte d’hémophile, éducation de la famille et de l’école, soins dentaires préventifs\n- Prophylaxie par facteur (programmes humanitaires, Fédération mondiale de l’hémophilie) dans les formes sévères\n- Kinésithérapie, dépistage des conductrices',
      ],
    ],
    molecules: [
      ['facteur-viii', 'premiere', 'Hémophilie A'],
      ['facteur-ix', 'premiere', 'Hémophilie B'],
      ['acide-tranexamique', 'adjuvant', 'Saignements muqueux'],
      ['desmopressine', 'alternative', 'Hémophilie A mineure'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Douleur sévère'],
    ],
    complications: [
      {
        nom: 'Hémorragie intracrânienne',
        fiche: 'traumatisme-cranien-enfant',
        description: 'Traumatisme, parfois spontanée.',
        traitement: '- Facteur immédiat, neurochirurgie',
        clinique: '- Céphalées, vomissements, troubles de conscience',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Arthropathie hémophilique',
        description: 'Hémarthroses répétées.',
        traitement: '- Prophylaxie, kinésithérapie',
        clinique: '- Raideur, déformation',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Inhibiteurs',
        description: 'Anticorps anti-facteur.',
        traitement: '- Agents « bypassants », centre spécialisé',
        clinique: '- Échec du traitement',
        paraclinique: '- Recherche d’inhibiteurs',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec accès aux facteurs ; sans traitement, handicap articulaire et décès précoces fréquents',
    urgences: ['traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Hémarthrose', 'tres_frequent'],
      ['Ecchymoses', 'tres_frequent'],
      ['Hémorragies', 'frequent'],
      ['Boiterie', 'frequent'],
      ['Épistaxis', 'occasionnel'],
    ],
    sources: [
      'ASH — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Repérer, pas d’IM ni d’AINS, glace, orientation', '- Hémarthrose, traumatisme crânien'],
      hgr: ['- TCA, plasma frais congelé, facteur si disponible', ''],
      tert: ['- Centre de traitement de l’hémophilie', ''],
    },
    alertes: {
      'traumatisme-cranien-grave-urgence': 'Enfant hémophile avec traumatisme crânien, même minime',
    },
    formes: [
      {
        nom: 'Hémophilie A sévère',
        type: 'commune',
        description: 'Saignements spontanés.',
        terrain: '- Garçon',
        fonctionnels: '- Douleur articulaire',
        generaux: '',
        physiques: '- Hémarthroses, hématomes',
        paraclinique: '- Facteur VIII < 1 %',
        etiologies: '- Déficit en facteur VIII',
        syndromes: ['syndrome-hemorragique'],
      },
      {
        nom: 'Hémophilie B',
        type: 'etiologique',
        description: 'Déficit en facteur IX.',
        terrain: '- Garçon',
        fonctionnels: '',
        generaux: '',
        physiques: '- Mêmes signes',
        paraclinique: '- Facteur IX bas',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Hémophilie mineure',
        type: 'gravite',
        description: 'Saignements provoqués.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Saignement après chirurgie',
        paraclinique: '- Facteur 5–40 %',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== PTI enfant
  {
    ...HEMATOPED,
    slug: 'purpura-thrombopenique-immunologique-enfant',
    nom: 'Purpura thrombopénique immunologique de l’enfant',
    resume:
      'Thrombopénie auto-immune isolée de l’enfant (2–10 ans), souvent après une infection virale ou une vaccination : purpura pétéchial et ecchymotique d’apparition brutale chez un enfant en bon état, sans organomégalie ni adénopathie ; NFS (plaquettes < 100 000/mm³, autres lignées normales), frottis ; abstention et surveillance le plus souvent (guérison spontanée en quelques semaines) ; corticoïdes ou immunoglobulines IV si saignement muqueux important ; éviter AINS, aspirine, injections IM.',
    definition:
      'Thrombopénie périphérique (< 100 000/mm³) isolée, d’origine auto-immune, après exclusion des autres causes ; aiguë chez l’enfant dans la grande majorité des cas (guérison avant 12 mois).',
    physiopathologie:
      '## Mécanismes\n- Anticorps dirigés contre les plaquettes → destruction splénique et production médullaire insuffisante\n- Souvent post-infectieux (virus) ou post-vaccinal (ROR)\n\n## Évolution\n- Nouvellement diagnostiqué (< 3 mois), persistant (3–12 mois), **chronique** (> 12 mois, 20 %)',
    diagnostic:
      '## Clinique\n- **Purpura** pétéchial et ecchymotique d’apparition brutale, épistaxis, gingivorragies, bulles hémorragiques buccales\n- **Enfant en bon état général**, **sans fièvre**, **sans hépatosplénomégalie ni adénopathies** ni douleurs osseuses\n- Gravité : saignement muqueux abondant, hématurie, saignement digestif, signes neurologiques (hémorragie intracrânienne, < 1 %)\n\n## Examens\n- **NFS** : thrombopénie isolée, Hb et leucocytes normaux (anémie possible si saignement)\n- **Frottis sanguin** (pas de blastes, éliminer une fausse thrombopénie)\n- **TDR paludisme**, **test VIH** ; myélogramme seulement si atypie (autres cytopénies, organomégalie, avant corticoïdes selon les équipes)',
    examens: [
      ['confirmation', 'nfs', 'Thrombopénie isolée.'],
      ['premiere_intention', 'frottis-sanguin', 'Absence de blastes.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['deuxieme_intention', 'myelogramme', 'Si atypie.'],
      ['premiere_intention', 'hemostase', 'Coagulation normale.'],
    ],
    scores: [],
    differentiels: [
      ['leucemie-aigue-lymphoblastique-enfant', 'Organomégalie, adénopathies, autres cytopénies.'],
      ['paludisme-grave-enfant', 'Thrombopénie fébrile.'],
      ['infection-vih-enfant', 'Thrombopénie du VIH.'],
      ['Purpura fulminans', 'Purpura fébrile extensif (méningocoque) : urgence absolue.'],
      ['hemophilie-enfant', 'Ecchymoses, hémarthroses, plaquettes normales.'],
      ['Syndrome hémolytique et urémique', 'Anémie hémolytique, insuffisance rénale.'],
    ],
    etiologies: '## Facteurs\n- Infection virale récente, vaccination ; VIH, lupus (formes secondaires)',
    principes: [
      [
        'Abstention surveillée',
        'Majorité des cas.',
        '- Si saignements cutanés seuls, quel que soit le taux de plaquettes : **surveillance** (pas de traitement systématique)\n- Éviter **aspirine, AINS, injections IM**, sports de contact\n- Information des parents sur les signes de gravité',
      ],
      [
        'Saignement muqueux ou à risque',
        'Remonter les plaquettes.',
        '- **Prednisolone** 2–4 mg/kg/j (max 120 mg/j) pendant 5 à 7 jours (après myélogramme selon les équipes) ou\n- **Immunoglobulines IV** 0,8–1 g/kg une fois (si disponibles)\n- **Acide tranexamique** pour les saignements muqueux',
      ],
      [
        'Hémorragie grave',
        'Urgence.',
        '- Transfusion de plaquettes, immunoglobulines IV + méthylprednisolone IV, neurochirurgie si hémorragie intracrânienne',
      ],
    ],
    molecules: [
      ['prednisolone', 'premiere', 'Saignement muqueux'],
      ['immunoglobulines-humaines-polyvalentes', 'alternative', 'Saignement, remontée rapide'],
      ['acide-tranexamique', 'adjuvant', 'Saignement muqueux'],
      ['methylprednisolone', 'alternative', 'Hémorragie grave'],
    ],
    complications: [
      {
        nom: 'Hémorragie intracrânienne',
        description: 'Rare (< 1 %).',
        traitement: '- Plaquettes, IgIV, corticoïdes, neurochirurgie',
        clinique: '- Céphalées, troubles de conscience',
        paraclinique: '- Scanner',
      },
      {
        nom: 'PTI chronique',
        fiche: 'purpura-thrombopenique-immunologique',
        description: 'Évolution > 12 mois.',
        traitement: '- Avis spécialisé',
        clinique: '- Purpura récidivant',
        paraclinique: '- Thrombopénie persistante',
      },
    ],
    evolution: '## Pronostic\n- Guérison spontanée chez 80 % des enfants en moins de 6 à 12 mois',
    urgences: [],
    symptomes: [
      ['Purpura', 'tres_frequent'],
      ['Ecchymoses', 'tres_frequent'],
      ['Épistaxis', 'frequent'],
      ['Hémorragies', 'occasionnel'],
    ],
    sources: [
      'ASH — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Purpura chez un enfant en bon état : NFS, éliminer le purpura fébrile',
        '- Purpura avec fièvre ou altération',
      ],
      hgr: ['- NFS, frottis, prednisolone si besoin', ''],
      tert: ['- Hématologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'PTI aigu de l’enfant',
        type: 'commune',
        description: 'Post-viral.',
        terrain: '- Enfant de 2 à 10 ans',
        fonctionnels: '',
        generaux: '- Bon état général',
        physiques: '- Purpura pétéchial, pas d’organomégalie',
        paraclinique: '- Thrombopénie isolée',
        etiologies: '- Infection virale',
        syndromes: ['syndrome-hemorragique'],
      },
      {
        nom: 'PTI avec saignement muqueux',
        type: 'gravite',
        description: 'Traitement nécessaire.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Bulles buccales, épistaxis',
        paraclinique: '- Plaquettes < 20 000',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Thalassémies
  {
    ...HEMATOPED,
    slug: 'thalassemies',
    nom: 'Thalassémies',
    resume:
      'Hémoglobinopathies héréditaires par défaut de synthèse des chaînes de globine : alpha-thalassémie (trait fréquent en Afrique centrale, souvent associé à la drépanocytose, généralement asymptomatique), bêta-thalassémie majeure (rare en RDC, anémie sévère dès 6 mois, hépatosplénomégalie, déformations osseuses) ; anémie microcytaire avec ferritine normale ; transfusions régulières et chélation du fer dans les formes majeures ; ne pas donner de fer sans carence prouvée.',
    definition:
      'Groupe de maladies héréditaires autosomiques récessives caractérisées par une diminution ou une absence de synthèse d’une chaîne de globine (alpha ou bêta), responsable d’une anémie microcytaire hémolytique de sévérité variable.',
    physiopathologie:
      '## Alpha-thalassémie\n- Délétion de 1 à 4 gènes alpha : porteur silencieux (1), trait (2 : microcytose sans anémie), hémoglobinose H (3 : anémie modérée), hydrops fetalis (4 : mortel)\n- Très fréquente en Afrique subsaharienne (délétion −α3,7)\n\n## Bêta-thalassémie\n- Majeure (homozygote) : érythropoïèse inefficace, **hémolyse**, hyperplasie médullaire (déformations du crâne et de la face), hépatosplénomégalie, **surcharge en fer** (transfusions, absorption digestive)\n- Mineure (trait) : microcytose isolée',
    diagnostic:
      '## Clinique\n- Trait : asymptomatique, découverte d’une microcytose\n- **Bêta-thalassémie majeure** : **pâleur** progressive dès 6–24 mois, retard de croissance, **hépatosplénomégalie**, **faciès thalassémique** (bosses frontales, maxillaire proéminent), ictère\n\n## Examens\n- **NFS** : anémie **microcytaire** hypochrome, **ferritine normale ou élevée** (≠ carence martiale), réticulocytes\n- **Frottis** (cellules cibles, érythroblastes)\n- **Électrophorèse de l’hémoglobine** (HbA2 et HbF élevées dans la bêta-thalassémie ; souvent normale dans l’alpha-thalassémie : diagnostic moléculaire)\n- Radiographie du crâne (aspect « en poils de brosse ») ; ferritine pour la surcharge',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie microcytaire.'],
      ['confirmation', 'electrophorese-hb', 'HbA2, HbF.'],
      ['premiere_intention', 'ferritine', 'Normale ou surcharge.'],
      ['premiere_intention', 'reticulocytes', 'Régénération.'],
      ['premiere_intention', 'frottis-sanguin', 'Cellules cibles.'],
      ['gravite', 'echocardiographie', 'Cardiomyopathie de surcharge.'],
      ['premiere_intention', 'bilan-hepatique', 'Surcharge, hépatite post-transfusionnelle.'],
    ],
    scores: [],
    differentiels: [
      ['anemie-ferriprive', 'Microcytose avec ferritine basse.'],
      ['drepanocytose', 'HbS à l’électrophorèse (association fréquente).'],
      ['anemies-hemolytiques-enfant', 'Autres causes d’hémolyse.'],
      ['paludisme-grave-enfant', 'Anémie fébrile, hépatosplénomégalie.'],
    ],
    etiologies: '## Transmission\n- Autosomique récessive ; consanguinité',
    principes: [
      [
        'Formes mineures',
        'Ne pas traiter à tort.',
        '- Pas de traitement ; **ne pas donner de fer** sans carence prouvée (ferritine)\n- Conseil génétique (risque de forme majeure ou de drépanocytose-thalassémie chez l’enfant)',
      ],
      [
        'Bêta-thalassémie majeure',
        'Programme transfusionnel.',
        '- **Transfusions régulières** toutes les 3–4 semaines pour maintenir Hb pré-transfusionnelle ≥ 9–10 g/dL\n- **Chélation du fer** quand la ferritine dépasse 1 000 µg/L : **déférasirox** 20–30 mg/kg/j per os ou **déféroxamine** 20–40 mg/kg/j SC\n- **Acide folique** ; splénectomie si hypersplénisme (après vaccins et pénicilline)\n- Greffe de moelle (curative, rarement accessible)',
      ],
      [
        'Hémoglobinose H',
        'Soutien.',
        '- Acide folique, transfusions lors des crises hémolytiques, éviter les oxydants',
      ],
    ],
    molecules: [
      ['acide-folique', 'premiere', 'Hémolyse chronique'],
      ['deferasirox', 'premiere', 'Chélation du fer (oral)'],
      ['deferoxamine', 'alternative', 'Chélation du fer (SC)'],
    ],
    complications: [
      {
        nom: 'Surcharge en fer',
        description: 'Transfusions, absorption.',
        traitement: '- Chélation',
        clinique: '- Insuffisance cardiaque, diabète, retard pubertaire',
        paraclinique: '- Ferritine',
      },
      {
        nom: 'Hypersplénisme',
        description: 'Splénomégalie.',
        traitement: '- Splénectomie',
        clinique: '- Besoins transfusionnels accrus',
        paraclinique: '',
      },
      {
        nom: 'Infections post-transfusionnelles',
        description: 'VIH, hépatites.',
        traitement: '- Sécurité transfusionnelle',
        clinique: '',
        paraclinique: '- Sérologies',
      },
    ],
    evolution:
      '## Pronostic\n- Formes mineures : normal ; bêta-thalassémie majeure : décès dans l’enfance sans transfusions, survie prolongée avec transfusions et chélation',
    urgences: [],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Splénomégalie', 'frequent'],
      ['Hépatomégalie', 'frequent'],
      ['Retard de croissance', 'frequent'],
      ['Ictère', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'ASH — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Anémie microcytaire sans réponse au fer : orientation', ''],
      hgr: ['- NFS, ferritine, électrophorèse, transfusions', ''],
      tert: ['- Programme transfusionnel, chélation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Trait thalassémique',
        type: 'commune',
        description: 'Microcytose isolée.',
        terrain: '- Tout âge',
        fonctionnels: '',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- Microcytose, ferritine normale',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Bêta-thalassémie majeure',
        type: 'gravite',
        description: 'Anémie sévère dès la 1re année.',
        terrain: '- Nourrisson',
        fonctionnels: '',
        generaux: '- Retard de croissance',
        physiques: '- Hépatosplénomégalie, faciès thalassémique',
        paraclinique: '- HbF élevée',
        etiologies: '',
        syndromes: ['syndrome-anemique', 'syndrome-hemolytique'],
      },
      {
        nom: 'Drépanocytose-thalassémie',
        type: 'etiologique',
        description: 'Association.',
        terrain: '- Afrique',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- HbS avec microcytose',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Anémies hémolytiques
  {
    ...HEMATOPED,
    slug: 'anemies-hemolytiques-enfant',
    nom: 'Anémies hémolytiques de l’enfant',
    resume:
      'Anémies par destruction accélérée des globules rouges : causes corpusculaires (drépanocytose, déficit en G6PD, sphérocytose héréditaire, thalassémies) et extracorpusculaires (paludisme, auto-immunes, médicaments, syndrome hémolytique et urémique, incompatibilité fœto-maternelle) : pâleur, ictère, urines foncées, splénomégalie ; NFS, réticulocytes, bilirubine libre, LDH, test de Coombs, frottis ; traitement de la cause, transfusion si mal tolérée, acide folique.',
    definition:
      'Anémie due à une réduction de la durée de vie des globules rouges, avec régénération médullaire (réticulocytes élevés), intravasculaire ou extravasculaire.',
    physiopathologie:
      '## Causes corpusculaires (héréditaires)\n- **Hémoglobinopathies** : drépanocytose, thalassémies\n- **Enzymopathies** : déficit en **G6PD**, déficit en pyruvate kinase\n- **Membranopathies** : **sphérocytose héréditaire**, elliptocytose\n\n## Causes extracorpusculaires (acquises)\n- **Paludisme** (première cause en RDC)\n- **Auto-immunes** (Coombs positif) : post-infectieuses, lupus\n- **Microangiopathiques** : syndrome hémolytique et urémique (après diarrhée à Shigella ou E. coli)\n- Incompatibilité fœto-maternelle (nouveau-né), médicaments, envenimations, hypersplénisme',
    diagnostic:
      '## Clinique\n- **Pâleur**, **ictère**, **urines foncées** (hémolyse intravasculaire), **splénomégalie** (extravasculaire)\n- Crises aiguës (G6PD, paludisme) ou anémie chronique avec lithiase biliaire\n- Crise aplasique (parvovirus B19) : chute brutale sans réticulocytes\n\n## Examens\n- **NFS**, **réticulocytes** élevés, **frottis** (sphérocytes, schizocytes, drépanocytes, parasites)\n- **Bilirubine libre**, **LDH** élevées, haptoglobine basse\n- **Test de Coombs direct** (auto-immune, néonatale)\n- **TDR paludisme**, **électrophorèse de l’hémoglobine**, **test G6PD** à distance\n- Créatinine, bandelette (hémoglobinurie, SHU)',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'reticulocytes', 'Régénération.'],
      ['premiere_intention', 'frottis-sanguin', 'Morphologie, parasites.'],
      ['premiere_intention', 'ldh', 'Hémolyse.'],
      ['confirmation', 'test-de-coombs-direct', 'Auto-immune, néonatale.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
      ['etiologique', 'electrophorese-hb', 'Hémoglobinopathie.'],
      ['etiologique', 'test-g6pd', 'Déficit en G6PD.'],
      ['gravite', 'creatinine', 'SHU, hémoglobinurie.'],
      ['premiere_intention', 'bilan-hepatique', 'Bilirubine libre.'],
    ],
    scores: [],
    differentiels: [
      ['anemie-ferriprive', 'Anémie microcytaire arégénérative.'],
      ['anemie-megaloblastique', 'Macrocytose.'],
      ['hepatites-virales-enfant', 'Ictère à bilirubine conjuguée, cytolyse.'],
      ['leucemie-aigue-lymphoblastique-enfant', 'Anémie arégénérative avec cytopénies.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Paludisme, drépanocytose, déficit en G6PD ; plus rarement sphérocytose, auto-immunes, SHU',
    principes: [
      [
        'Mesures générales',
        'Corriger l’anémie.',
        '- **Transfusion** si Hb < 4 g/dL, ou < 6 g/dL avec signes de gravité (détresse respiratoire, choc, troubles de conscience, parasitémie élevée), selon les recommandations OMS\n- **Acide folique** dans les hémolyses chroniques ; hydratation en cas d’hémoglobinurie',
      ],
      [
        'Traitement de la cause',
        'Selon l’étiologie.',
        '- **Paludisme** : antipaludique (artésunate si grave)\n- **G6PD** : arrêt du déclencheur ; drépanocytose : prise en charge spécifique\n- **Auto-immune** : **prednisolone** 1–2 mg/kg/j\n- **Sphérocytose** : acide folique, transfusions, splénectomie après 6 ans dans les formes sévères (vaccins, pénicilline)\n- **SHU** : prise en charge de l’insuffisance rénale (dialyse), pas d’antibiotiques ni d’antidiarrhéiques dans le SHU à E. coli',
      ],
    ],
    molecules: [
      ['acide-folique', 'premiere', 'Hémolyse chronique'],
      ['artesunate', 'premiere', 'Paludisme grave'],
      ['prednisolone', 'alternative', 'Anémie hémolytique auto-immune'],
    ],
    complications: [
      {
        nom: 'Anémie décompensée',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Hémolyse aiguë.',
        traitement: '- Transfusion',
        clinique: '- Polypnée, hépatomégalie',
        paraclinique: '- Hb effondrée',
      },
      {
        nom: 'Crise aplasique',
        description: 'Parvovirus B19.',
        traitement: '- Transfusion',
        clinique: '- Pâleur brutale',
        paraclinique: '- Réticulocytes effondrés',
      },
      {
        nom: 'Lithiase biliaire pigmentaire',
        fiche: 'cholecystite-lithiase-biliaire',
        description: 'Hémolyse chronique.',
        traitement: '- Cholécystectomie si symptomatique',
        clinique: '- Douleur de l’hypochondre droit',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hémoglobinurie, SHU.',
        traitement: '- Hydratation, dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution: '## Pronostic\n- Celui de la cause ; bon pour les formes aiguës traitées',
    urgences: ['paludisme-grave-urgence'],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Ictère', 'frequent'],
      ['Urines foncées', 'frequent'],
      ['Splénomégalie', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'WHO guidelines for malaria',
    ],
    niveaux: {
      cs: ['- TDR paludisme, traitement, orientation si anémie sévère', '- Pâleur intense, urines foncées'],
      hgr: ['- NFS, réticulocytes, Coombs, transfusion', ''],
      tert: ['- Hématologie pédiatrique', ''],
    },
    alertes: { 'paludisme-grave-urgence': 'Enfant pâle avec ictère, urines foncées et TDR positif' },
    formes: [
      {
        nom: 'Hémolyse palustre',
        type: 'commune',
        description: 'Première cause.',
        terrain: '- Jeune enfant',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Pâleur, splénomégalie',
        paraclinique: '- TDR positif',
        etiologies: '- Paludisme',
        syndromes: ['syndrome-hemolytique'],
      },
      {
        nom: 'Sphérocytose héréditaire',
        type: 'etiologique',
        description: 'Membranopathie.',
        terrain: '- Antécédents familiaux',
        fonctionnels: '',
        generaux: '',
        physiques: '- Splénomégalie, ictère',
        paraclinique: '- Sphérocytes, Coombs négatif',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Anémie hémolytique auto-immune',
        type: 'etiologique',
        description: 'Coombs positif.',
        terrain: '- Post-infectieuse',
        fonctionnels: '',
        generaux: '',
        physiques: '- Pâleur, ictère',
        paraclinique: '- Coombs direct positif',
        etiologies: '- Auto-anticorps',
        syndromes: [],
      },
    ],
  },
];
