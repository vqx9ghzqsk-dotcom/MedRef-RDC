'use strict';

/**
 * Lot 5 (gastro-entérologie et hépatologie) — ulcère gastroduodénal, infection à
 * Helicobacter pylori, hémorragie digestive haute, cirrhose hépatique.
 * Rédigé par IA (ACG, Maastricht VI, ESGE, Baveno VII, EASL, AASLD, OMS) : à valider.
 */

const GASTRO = { departement: 'medecine-interne', specialite: 'Gastro-entérologie et hépatologie' };

module.exports = [
  // =================================================================== Ulcère
  {
    ...GASTRO,
    slug: 'ulcere-gastroduodenal',
    nom: 'Ulcère gastroduodénal',
    resume:
      'Perte de substance de la paroi gastrique ou duodénale, due surtout à H. pylori et aux AINS : douleur épigastrique rythmée par les repas ; IPP, éradication d’H. pylori, arrêt des AINS.',
    definition:
      'Perte de substance de la muqueuse gastrique ou duodénale atteignant la musculeuse, à la différence de l’érosion superficielle.',
    physiopathologie:
      '## Mécanismes\n- Déséquilibre entre agression (acide, pepsine) et défense (mucus, bicarbonates, prostaglandines)\n- *H. pylori* : inflammation et hypersécrétion acide (ulcère duodénal)\n- AINS et aspirine : baisse des prostaglandines protectrices',
    diagnostic:
      '## Clinique\n- Douleur épigastrique à type de crampe ou de faim douloureuse, calmée par l’alimentation (duodénal) ou déclenchée par les repas (gastrique), rythmée, périodique\n- Souvent asymptomatique chez le sujet sous AINS, révélé par une complication\n- **Signes d’alarme** : âge > 45–55 ans, amaigrissement, anémie, dysphagie, vomissements persistants, hémorragie, masse\n\n## Confirmation\n- **Endoscopie digestive haute** avec biopsies (ulcère gastrique : biopsies multiples, contrôle de cicatrisation)',
    examens: [
      [
        'confirmation',
        'endoscopie-digestive-haute',
        'Ulcère gastrique ou duodénal ; biopsies (cancer, H. pylori).',
      ],
      ['etiologique', 'test-helicobacter', 'Recherche systématique d’H. pylori.'],
      ['premiere_intention', 'nfs', 'Anémie ferriprive par saignement occulte.'],
      [
        'gravite',
        'abdomen-sans-preparation',
        'Pneumopéritoine si perforation (ou radiographie thoracique debout).',
      ],
      ['suivi', 'biopsie-histologie', 'Ulcère gastrique : biopsies de contrôle après traitement.'],
    ],
    scores: [],
    differentiels: [
      ['Dyspepsie fonctionnelle', 'Endoscopie normale.'],
      ['Cancer de l’estomac', 'Signes d’alarme, ulcère à bords irréguliers : biopsies.'],
      [
        'Pancréatite, lithiase biliaire',
        'Douleur transfixiante ou de l’hypochondre droit, lipase, échographie.',
      ],
      ['syndrome-coronarien-aigu-sans-st', 'Douleur épigastrique d’origine cardiaque : ECG.'],
    ],
    etiologies:
      '## Causes\n- ***Helicobacter pylori*** (très prévalent en RDC)\n- **AINS** et aspirine, y compris en automédication\n- Corticoïdes associés aux AINS, tabac, stress des patients en réanimation\n- Rares : syndrome de Zollinger-Ellison, tuberculose, Crohn',
    principes: [
      [
        'Antisécrétoire',
        'Cicatriser l’ulcère.',
        '- **Oméprazole** 20 mg 2 fois par jour (ou **ésoméprazole** 40 mg/j) 4 semaines (duodénal) à 8 semaines (gastrique)',
      ],
      [
        'Éradication d’H. pylori',
        'Éviter la récidive.',
        '- Si H. pylori positif : trithérapie ou quadrithérapie 14 jours (fiche *Infection à Helicobacter pylori*)\n- Contrôle de l’éradication 4 semaines après la fin des antibiotiques',
      ],
      ['AINS', 'Supprimer la cause.', '- Arrêt des AINS ; si indispensables : IPP au long cours'],
      [
        'Complications',
        'Traiter en urgence.',
        '- Hémorragie : fiche *Hémorragie digestive haute*\n- Perforation : chirurgie (suture) ou traitement médical selon les cas\n- Sténose : endoscopie, chirurgie',
      ],
    ],
    molecules: [
      ['omeprazole', 'premiere', 'Cicatrisation 4 à 8 semaines'],
      ['esomeprazole', 'alternative', 'IPP'],
      ['pantoprazole', 'alternative', 'IPP'],
      ['amoxicilline', 'premiere', 'Éradication d’H. pylori'],
      ['clarithromycine', 'premiere', 'Éradication d’H. pylori'],
      ['metronidazole', 'alternative', 'Éradication d’H. pylori'],
    ],
    complications: [
      {
        nom: 'Hémorragie digestive',
        fiche: 'hemorragie-digestive-haute',
        description: 'Complication la plus fréquente.',
        traitement: '- IPP IV, endoscopie hémostatique',
        clinique: '- Hématémèse, méléna',
        paraclinique: '- Hb',
      },
      {
        nom: 'Perforation',
        fiche: 'peritonite-aigue',
        description: 'Douleur brutale en coup de poignard, contracture.',
        traitement: '- Chirurgie, IPP IV, antibiotiques',
        clinique: '- Ventre de bois',
        paraclinique: '- Pneumopéritoine',
      },
      {
        nom: 'Sténose pyloro-duodénale',
        description: 'Ulcère chronique.',
        traitement: '- Dilatation endoscopique, chirurgie',
        clinique: '- Vomissements alimentaires tardifs',
        paraclinique: '- Endoscopie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison dans plus de 90 % après éradication d’H. pylori et arrêt des AINS ; récidive fréquente sinon',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'occasionnel'],
      ['Hématémèse', 'occasionnel'],
      ['Méléna', 'occasionnel'],
      ['Pâleur', 'occasionnel'],
    ],
    sources: [
      'ACG — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- IPP, arrêt des AINS, repérage des signes d’alarme',
        '- Signes d’alarme, hémorragie, douleur brutale',
      ],
      hgr: ['- Endoscopie, test H. pylori, éradication, chirurgie de la perforation', ''],
      tert: ['- Endoscopie interventionnelle', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical':
        'Douleur épigastrique brutale en coup de poignard avec contracture (perforation)',
    },
    formes: [
      {
        nom: 'Ulcère duodénal',
        type: 'commune',
        description: 'Douleur épigastrique tardive calmée par les repas.',
        terrain: '- Adulte jeune, H. pylori',
        fonctionnels: '- Faim douloureuse post-prandiale tardive, nocturne',
        generaux: '',
        physiques: '- Sensibilité épigastrique',
        paraclinique: '- Ulcère du bulbe, H. pylori positif',
        etiologies: '- H. pylori',
        syndromes: [],
        examens: [['endoscopie-digestive-haute', 'Confirmation']],
      },
      {
        nom: 'Ulcère gastrique sous AINS',
        type: 'etiologique',
        description: 'Souvent indolore, révélé par une complication.',
        terrain: '- Sujet âgé, AINS, aspirine',
        fonctionnels: '- Dyspepsie',
        generaux: '- Anémie',
        physiques: '',
        paraclinique: '- Ulcère gastrique, biopsies',
        etiologies: '- AINS',
        syndromes: ['syndrome-anemique'],
      },
      {
        nom: 'Ulcère perforé',
        type: 'gravite',
        description: 'Péritonite chimique puis bactérienne.',
        terrain: '- Ulcère connu ou non',
        fonctionnels: '- Douleur épigastrique brutale',
        generaux: '- Tachycardie',
        physiques: '- Contracture abdominale',
        paraclinique: '- Pneumopéritoine',
        etiologies: '- Ulcère',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== H. pylori
  {
    ...GASTRO,
    slug: 'infection-helicobacter-pylori',
    nom: 'Infection à Helicobacter pylori',
    resume:
      'Infection gastrique chronique très fréquente, cause d’ulcères, de gastrite et de cancer de l’estomac : test non invasif ou biopsies, éradication par quadrithérapie 14 jours, contrôle.',
    definition:
      'Colonisation chronique de la muqueuse gastrique par *Helicobacter pylori*, bacille Gram négatif acquis dans l’enfance, responsable d’une gastrite chronique le plus souvent asymptomatique.',
    physiopathologie:
      '## Mécanismes\n- Transmission oro-orale ou féco-orale, dans l’enfance (promiscuité, eau)\n- Uréase : survie en milieu acide ; gastrite chronique\n- Évolution : ulcère duodénal ou gastrique, gastrite atrophique, métaplasie, adénocarcinome, lymphome du MALT',
    diagnostic:
      '## Indications de recherche\n- Ulcère gastroduodénal (actuel ou passé), dyspepsie, lymphome du MALT\n- Avant un traitement prolongé par AINS ou aspirine chez un patient à risque\n- Anémie ferriprive inexpliquée, purpura thrombopénique immunologique\n- Antécédent familial de cancer gastrique\n\n## Tests\n- **Non invasifs** : antigène fécal, test respiratoire à l’urée\n- **Invasifs** (endoscopie) : histologie, test rapide à l’uréase, culture avec antibiogramme\n- La sérologie ne sert pas à contrôler l’éradication',
    examens: [
      ['confirmation', 'test-helicobacter', 'Antigène fécal, test respiratoire ou biopsies.'],
      [
        'deuxieme_intention',
        'endoscopie-digestive-haute',
        'Si signes d’alarme ou âge > 45–55 ans ; biopsies.',
      ],
      [
        'suivi',
        'test-helicobacter',
        'Contrôle de l’éradication ≥ 4 semaines après les antibiotiques et 2 semaines sans IPP.',
      ],
      ['premiere_intention', 'nfs', 'Anémie.'],
    ],
    scores: [],
    differentiels: [
      ['Dyspepsie fonctionnelle', 'Test négatif.'],
      ['ulcere-gastroduodenal', 'Complication de l’infection, à rechercher à l’endoscopie.'],
      ['Gastropathie aux AINS', 'Prise d’AINS, test négatif.'],
    ],
    etiologies:
      '## Facteurs\n- Promiscuité, eau non potable, faible niveau d’hygiène\n- Prévalence de plus de 70 % chez l’adulte en Afrique centrale',
    principes: [
      [
        'Quadrithérapie de première ligne',
        'Éradiquer la bactérie.',
        '- **Quadrithérapie bismuthée** 14 jours : IPP 2 fois par jour + **bismuth** + **métronidazole** + tétracycline\n- Ou **quadrithérapie concomitante** 14 jours : IPP + **amoxicilline** 1 g + **clarithromycine** 500 mg + métronidazole 500 mg, 2 fois par jour\n- La trithérapie IPP-amoxicilline-clarithromycine n’est plus recommandée là où la résistance à la clarithromycine dépasse 15 %',
      ],
      ['Allergie à la pénicilline', 'Adapter le schéma.', '- Quadrithérapie bismuthée (sans amoxicilline)'],
      [
        'Contrôle et échec',
        'Vérifier la guérison.',
        '- Contrôle par test non invasif\n- Échec : autre schéma (lévofloxacine) ou culture avec antibiogramme',
      ],
      [
        'Observance',
        'Garantir l’efficacité.',
        '- Expliquer les effets indésirables (goût métallique, selles noires sous bismuth, troubles digestifs), éviter l’alcool sous métronidazole',
      ],
    ],
    molecules: [
      ['omeprazole', 'premiere', 'IPP 2 fois par jour'],
      ['esomeprazole', 'alternative', 'IPP'],
      ['amoxicilline', 'premiere', 'Quadrithérapie concomitante'],
      ['clarithromycine', 'premiere', 'Quadrithérapie concomitante'],
      ['metronidazole', 'premiere', 'Quadrithérapies'],
      ['bismuth-subgallate-sous-salicylate', 'premiere', 'Quadrithérapie bismuthée'],
    ],
    complications: [
      {
        nom: 'Ulcère gastroduodénal',
        fiche: 'ulcere-gastroduodenal',
        description: 'Duodénal ou gastrique.',
        traitement: '- IPP et éradication',
        clinique: '- Douleur épigastrique',
        paraclinique: '- Endoscopie',
      },
      {
        nom: 'Cancer de l’estomac et lymphome du MALT',
        description: 'Gastrite atrophique, métaplasie.',
        traitement: '- Éradication (régression des lymphomes de bas grade), chirurgie, oncologie',
        clinique: '- Amaigrissement, anémie',
        paraclinique: '- Biopsies',
      },
    ],
    evolution:
      '## Pronostic\n- Éradication obtenue dans 85 à 90 % avec une quadrithérapie bien suivie ; réinfection possible',
    urgences: [],
    symptomes: [
      ['Douleur abdominale', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Anorexie', 'occasionnel'],
    ],
    sources: [
      'ACG — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
      'WHO Model List of Essential Medicines',
    ],
    niveaux: {
      cs: [
        '- IPP, orientation des patients avec dyspepsie persistante ou signes d’alarme',
        '- Signes d’alarme',
      ],
      hgr: ['- Test non invasif, endoscopie, quadrithérapie, contrôle', ''],
      tert: ['- Culture et antibiogramme après échecs', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Gastrite chronique à H. pylori',
        type: 'commune',
        description: 'Le plus souvent asymptomatique ou dyspepsie.',
        terrain: '- Adulte, enfance en promiscuité',
        fonctionnels: '- Brûlures et pesanteur épigastriques',
        generaux: '',
        physiques: '',
        paraclinique: '- Test positif',
        etiologies: '- H. pylori',
        syndromes: [],
        examens: [['test-helicobacter', 'Diagnostic']],
      },
    ],
  },

  // =================================================================== Hémorragie digestive haute
  {
    ...GASTRO,
    slug: 'hemorragie-digestive-haute',
    nom: 'Hémorragie digestive haute',
    resume:
      'Saignement en amont de l’angle de Treitz (hématémèse, méléna) : réanimation, transfusion restrictive, IPP IV ; si cirrhose : vasoactif + antibiotique ; endoscopie dans les 24 h (12 h si varices).',
    definition:
      'Hémorragie dont la source se situe en amont de l’angle duodéno-jéjunal (œsophage, estomac, duodénum), révélée par une hématémèse et/ou un méléna, parfois une rectorragie si abondante.',
    physiopathologie:
      '## Mécanismes\n- Ulcère gastroduodénal (érosion artérielle)\n- Rupture de **varices œsophagiennes** par hypertension portale (cirrhose, schistosomiase hépatosplénique)\n- Hypovolémie, choc, anémie aiguë ; encéphalopathie chez le cirrhotique',
    diagnostic:
      '## Clinique\n- Hématémèse (sang rouge ou « marc de café »), méléna\n- Retentissement : pouls, PA, conscience, marbrures, diurèse\n- Signes de cirrhose : ascite, ictère, circulation veineuse collatérale, splénomégalie\n- Prise d’AINS, d’anticoagulant, alcool\n\n## Gravité\n- Score de Glasgow-Blatchford (0–1 : prise en charge ambulatoire possible), index de choc\n- Choc, Hb < 7 g/dL, cirrhose, âge, comorbidités',
    examens: [
      ['premiere_intention', 'nfs', 'Hb (peut être normale au début), plaquettes.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'hemostase', 'TP/INR (cirrhose, anticoagulants).'],
      ['premiere_intention', 'uree', 'Urée élevée (sang digéré) : argument pour une origine haute.'],
      ['premiere_intention', 'creatinine', 'Retentissement.'],
      [
        'confirmation',
        'endoscopie-digestive-haute',
        'Dans les 24 h (12 h si suspicion de varices) : diagnostic et hémostase.',
      ],
      ['etiologique', 'bilan-hepatique', 'Cirrhose.'],
      ['etiologique', 'echographie-abdominale', 'Cirrhose, hypertension portale, schistosomiase.'],
    ],
    scores: ['index-de-choc', 'child-pugh'],
    differentiels: [
      ['Hémoptysie', 'Sang rouge aéré, toux.'],
      ['Épistaxis dégluti', 'Saignement nasal postérieur.'],
      ['Hémorragie digestive basse', 'Rectorragie sans hématémèse, urée normale.'],
      ['Selles noires sous fer ou bismuth', 'Pas de méléna véritable (non fétides), Hb stable.'],
    ],
    etiologies:
      '## Causes\n- **Ulcère gastroduodénal** (première cause)\n- **Rupture de varices œsophagiennes ou gastriques** (cirrhose, schistosomiase hépatosplénique)\n- Gastropathie aux AINS, œsophagite\n- Syndrome de Mallory-Weiss (vomissements répétés)\n- Cancer de l’estomac, troubles de l’hémostase',
    principes: [
      [
        'Réanimation',
        'Restaurer la volémie.',
        '- 2 voies veineuses, **cristalloïdes** (NaCl 0,9 %, Ringer)\n- Transfusion **restrictive** : seuil Hb 7 g/dL (8 si cardiopathie), objectif 7–9 g/dL\n- Tête surélevée, à jeun, oxygène',
      ],
      [
        'Origine ulcéreuse présumée',
        'Stabiliser le caillot.',
        '- **IPP IV** : oméprazole ou ésoméprazole 80 mg puis 40 mg 2 fois par jour IV\n- Endoscopie avec hémostase (injection, clips, coagulation) puis IPP oral 8 semaines\n- Éradication d’H. pylori, arrêt des AINS',
      ],
      [
        'Suspicion de varices (cirrhose)',
        'Diminuer la pression portale et prévenir l’infection.',
        '- **Vasoactif** dès la suspicion : **octréotide** ou **terlipressine** 2 à 5 jours\n- **Antibioprophylaxie** : **ceftriaxone** 1 g/j 7 jours (ou ciprofloxacine)\n- Ligature élastique endoscopique ; sonde de tamponnement en sauvetage\n- Lactulose pour prévenir l’encéphalopathie\n- Puis prophylaxie secondaire : **propranolol** + ligatures itératives',
      ],
      [
        'Échec',
        'Contrôler le saignement.',
        '- Nouvelle endoscopie, chirurgie ou radiologie interventionnelle (ulcère), TIPS (varices) en centre spécialisé',
      ],
    ],
    molecules: [
      ['omeprazole', 'premiere', 'IV 80 mg puis 40 mg 2 fois par jour'],
      ['esomeprazole', 'alternative', 'IPP IV'],
      ['octreotide', 'premiere', 'Varices : 50 µg puis 25–50 µg/h'],
      ['terlipressine', 'premiere', 'Varices : 2 mg toutes les 4 h'],
      ['ceftriaxone', 'premiere', 'Antibioprophylaxie du cirrhotique'],
      ['propranolol', 'adjuvant', 'Prophylaxie secondaire des varices'],
      ['lactulose', 'adjuvant', 'Prévention de l’encéphalopathie'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        description: 'Saignement abondant.',
        traitement: '- Remplissage, transfusion, hémostase',
        clinique: '- PA, pouls, marbrures',
        paraclinique: '- Hb, lactates',
      },
      {
        nom: 'Encéphalopathie hépatique et infections',
        fiche: 'cirrhose-hepatique',
        description: 'Chez le cirrhotique.',
        traitement: '- Lactulose, antibioprophylaxie',
        clinique: '- Confusion, astérixis',
        paraclinique: '',
      },
      {
        nom: 'Récidive hémorragique',
        description: 'Dans les premiers jours.',
        traitement: '- Nouvelle endoscopie',
        clinique: '- Hématémèse, méléna',
        paraclinique: '- Hb',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hypovolémie.',
        traitement: '- Remplissage',
        clinique: '- Diurèse',
        paraclinique: '- Créatinine',
      },
    ],
    evolution: '## Pronostic\n- Mortalité 5 à 10 % (ulcère), 15 à 20 % (varices) à 6 semaines',
    urgences: [],
    symptomes: [
      ['Hématémèse', 'tres_frequent'],
      ['Méléna', 'tres_frequent'],
      ['Pâleur', 'frequent'],
      ['Hypotension', 'frequent'],
      ['Syncope', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
    ],
    sources: [
      'ESGE (gastro-entérologie) — recommandations de pratique clinique',
      'ACG — recommandations de pratique clinique',
      'EASL — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Voie veineuse, NaCl 0,9 %, oméprazole IV si disponible, transfert urgent',
        '- Toute hémorragie digestive',
      ],
      hgr: [
        '- Réanimation, transfusion, IPP IV, vasoactif et ceftriaxone si cirrhose, endoscopie',
        '- Échec de l’hémostase',
      ],
      tert: ['- Endoscopie interventionnelle, chirurgie, radiologie interventionnelle', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hémorragie ulcéreuse',
        type: 'commune',
        description: 'Méléna ou hématémèse sur ulcère.',
        terrain: '- AINS, H. pylori',
        fonctionnels: '- Douleur épigastrique',
        generaux: '- Pâleur',
        physiques: '- Méléna au toucher rectal',
        paraclinique: '- Ulcère à l’endoscopie',
        etiologies: '- Ulcère gastroduodénal',
        syndromes: ['syndrome-anemique', 'syndrome-d-hemorragie-interne'],
        examens: [['endoscopie-digestive-haute', 'Diagnostic et hémostase']],
      },
      {
        nom: 'Rupture de varices œsophagiennes',
        type: 'etiologique',
        description: 'Hématémèse abondante sur hypertension portale.',
        terrain: '- Cirrhose, schistosomiase hépatosplénique',
        fonctionnels: '- Hématémèse de sang rouge',
        generaux: '- Choc',
        physiques: '- Ascite, splénomégalie, circulation collatérale',
        paraclinique: '- Varices à l’endoscopie',
        etiologies: '- Hypertension portale',
        syndromes: ['syndrome-d-hypertension-portale', 'syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Cirrhose
  {
    ...GASTRO,
    slug: 'cirrhose-hepatique',
    nom: 'Cirrhose hépatique',
    resume:
      'Fibrose hépatique diffuse avec nodules, due surtout à l’hépatite B, à l’alcool et à l’hépatite C : hypertension portale, insuffisance hépatique ; traiter la cause, dépister varices et carcinome.',
    definition:
      'Processus diffus et irréversible associant fibrose et nodules de régénération, désorganisant l’architecture du foie, aboutissant à l’insuffisance hépatocellulaire et à l’hypertension portale.',
    physiopathologie:
      '## Mécanismes\n- Agression chronique (virus, alcool, stéatose) : nécrose, inflammation, fibrose\n- **Hypertension portale** : varices, splénomégalie, ascite\n- **Insuffisance hépatocellulaire** : ictère, troubles de la coagulation, hypoalbuminémie, encéphalopathie\n- Risque de **carcinome hépatocellulaire**',
    diagnostic:
      '## Clinique\n- Longtemps asymptomatique (compensée)\n- Foie dur à bord inférieur tranchant, angiomes stellaires, érythrose palmaire\n- Hypertension portale : splénomégalie, circulation veineuse collatérale, ascite\n- Décompensation : ascite, ictère, hémorragie digestive, encéphalopathie\n\n## Paraclinique\n- Biologie : TP bas, albumine basse, bilirubine élevée, thrombopénie\n- Échographie : foie dysmorphique, nodulaire, signes d’hypertension portale\n- Élastométrie (FibroScan), score APRI\n- Gravité : **score de Child-Pugh**',
    examens: [
      ['premiere_intention', 'bilan-hepatique', 'Transaminases, bilirubine, albumine, gamma-GT.'],
      ['premiere_intention', 'hemostase', 'TP/INR : insuffisance hépatocellulaire.'],
      ['premiere_intention', 'nfs', 'Thrombopénie (hypersplénisme), anémie.'],
      [
        'confirmation',
        'echographie-abdominale',
        'Foie dysmorphique, ascite, splénomégalie, thrombose porte, nodule.',
      ],
      ['confirmation', 'elastometrie-hepatique', 'Fibrose sévère (> 12–15 kPa).'],
      ['etiologique', 'marqueurs-vhb', 'Hépatite B (AgHBs, charge virale).'],
      ['etiologique', 'serologies-hepatites', 'Hépatite C, D.'],
      ['etiologique', 'tdr-vih', 'Coïnfection.'],
      ['etiologique', 'oeufs-schistosomes-urines', 'Schistosomiase (selles pour S. mansoni).'],
      [
        'suivi',
        'alpha-foetoproteine',
        'Dépistage du carcinome hépatocellulaire avec l’échographie tous les 6 mois.',
      ],
      ['suivi', 'endoscopie-digestive-haute', 'Dépistage des varices.'],
      ['gravite', 'ponction-epanchement', 'Ponction d’ascite : infection (PNN > 250/mm³), protides.'],
    ],
    scores: ['child-pugh', 'apri'],
    differentiels: [
      [
        'Schistosomiase hépatosplénique',
        'Hypertension portale avec fonction hépatique conservée, fibrose périportale à l’échographie.',
      ],
      [
        'Carcinome hépatocellulaire',
        'Gros foie nodulaire, alpha-fœtoprotéine élevée (souvent sur cirrhose).',
      ],
      ['insuffisance-cardiaque', 'Foie cardiaque : turgescence jugulaire, reflux hépatojugulaire.'],
      ['Péritonite tuberculeuse', 'Ascite exsudative lymphocytaire, fièvre.'],
    ],
    etiologies:
      '## Causes\n- **Hépatite B chronique** (± delta), hépatite C\n- **Alcool**\n- Stéatohépatite métabolique (obésité, diabète)\n- Autres : hépatite auto-immune, hémochromatose, médicaments, cholangite biliaire, aflatoxines (cofacteur)',
    principes: [
      [
        'Traiter la cause',
        'Freiner ou stabiliser la maladie.',
        '- Hépatite B : **ténofovir** au long cours (fiche *Hépatite B chronique*)\n- Hépatite C : antiviraux d’action directe\n- Arrêt total de l’alcool',
      ],
      [
        'Ascite',
        'Contrôler la rétention hydrosodée.',
        '- Régime pauvre en sel (< 5 g/j de sel)\n- **Spironolactone** 100 mg/j + **furosémide** 40 mg/j (rapport 100/40), à augmenter progressivement\n- Ponction évacuatrice si ascite tendue, avec **albumine** si > 5 L\n- Infection du liquide d’ascite : céfotaxime ou **ceftriaxone** + albumine',
      ],
      [
        'Hypertension portale',
        'Prévenir l’hémorragie.',
        '- Dépistage endoscopique des varices\n- Varices à risque : **propranolol** (ou carvédilol) ou ligature\n- Hémorragie : fiche *Hémorragie digestive haute*',
      ],
      [
        'Encéphalopathie hépatique',
        'Restaurer la conscience.',
        '- **Lactulose** 20–30 mL 2 à 4 fois par jour (2 à 3 selles molles par jour)\n- Rechercher et traiter le facteur déclenchant (infection, hémorragie, constipation, sédatifs, hypokaliémie)',
      ],
      [
        'Mesures générales',
        'Éviter les complications.',
        '- Éviter AINS, sédatifs, aminosides\n- Vaccination hépatite B (si non immunisé), pneumocoque\n- Dépistage du carcinome : échographie ± alpha-fœtoprotéine tous les 6 mois\n- Nutrition : apport protéique normal',
      ],
    ],
    molecules: [
      ['spironolactone', 'premiere', 'Ascite'],
      ['furosemide', 'premiere', 'Ascite, associé à la spironolactone'],
      ['propranolol', 'premiere', 'Prévention de l’hémorragie variqueuse'],
      ['lactulose', 'premiere', 'Encéphalopathie hépatique'],
      ['albumine-humaine', 'adjuvant', 'Ponction de grand volume, infection d’ascite'],
      ['ceftriaxone', 'premiere', 'Infection du liquide d’ascite, hémorragie'],
      ['norfloxacine', 'alternative', 'Prophylaxie de l’infection d’ascite'],
      ['carvedilol', 'alternative', 'Prévention de l’hémorragie variqueuse'],
    ],
    complications: [
      {
        nom: 'Hémorragie par rupture de varices',
        fiche: 'hemorragie-digestive-haute',
        description: 'Hypertension portale.',
        traitement: '- Vasoactif, antibiotique, ligature',
        clinique: '- Hématémèse',
        paraclinique: '- Endoscopie',
      },
      {
        nom: 'Infection du liquide d’ascite',
        description: 'Fièvre, douleurs, encéphalopathie.',
        traitement: '- Ceftriaxone + albumine',
        clinique: '- Fièvre, douleur abdominale',
        paraclinique: '- PNN > 250/mm³',
      },
      {
        nom: 'Encéphalopathie hépatique',
        description: 'Confusion, astérixis, coma.',
        traitement: '- Lactulose, facteur déclenchant',
        clinique: '- Conscience, astérixis',
        paraclinique: '- Ionogramme, glycémie',
      },
      {
        nom: 'Syndrome hépatorénal',
        fiche: 'insuffisance-renale-aigue',
        description: 'Insuffisance rénale fonctionnelle grave.',
        traitement: '- Terlipressine + albumine, arrêt des diurétiques',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Carcinome hépatocellulaire',
        description: '2 à 5 % par an.',
        traitement: '- Selon le stade',
        clinique: '- Douleur, masse',
        paraclinique: '- Échographie, alpha-fœtoprotéine',
      },
    ],
    evolution:
      '## Pronostic\n- Compensée : survie médiane > 10 ans ; décompensée : < 2 ans\n- Child-Pugh C : pronostic sombre sans transplantation (non disponible en RDC)',
    urgences: [],
    symptomes: [
      ['Distension abdominale', 'tres_frequent'],
      ['Ictère', 'frequent'],
      ['Asthénie', 'tres_frequent'],
      ['Œdèmes', 'frequent'],
      ['Hématémèse', 'occasionnel'],
      ['Méléna', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Splénomégalie', 'frequent'],
      ['Perte de poids', 'frequent'],
    ],
    sources: [
      'EASL — recommandations de pratique clinique',
      'AASLD — recommandations de pratique clinique',
      'Guidelines for the prevention, diagnosis, care and treatment of people with chronic hepatitis B infection',
    ],
    niveaux: {
      cs: [
        '- Repérage (ascite, ictère), arrêt de l’alcool, diurétiques en suivi, dépistage de l’hépatite B',
        '- Décompensation, hémorragie, confusion, fièvre',
      ],
      hgr: [
        '- Échographie, bilan, ponction d’ascite, lactulose, ténofovir, endoscopie',
        '- Hémorragie non contrôlée, carcinome',
      ],
      tert: ['- Endoscopie interventionnelle, hépatologie, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Cirrhose compensée',
        type: 'commune',
        description: 'Asymptomatique ou asthénie.',
        terrain: '- Hépatite B ou C, alcool',
        fonctionnels: '- Asthénie',
        generaux: '',
        physiques: '- Foie dur, angiomes stellaires',
        paraclinique: '- Élastométrie élevée, thrombopénie',
        etiologies: '- Hépatite B, alcool',
        syndromes: [],
        examens: [['elastometrie-hepatique', 'Fibrose']],
      },
      {
        nom: 'Cirrhose décompensée',
        type: 'gravite',
        description: 'Ascite, ictère, encéphalopathie, hémorragie.',
        terrain: '- Cirrhose évoluée',
        fonctionnels: '- Augmentation du volume abdominal, confusion',
        generaux: '- Amaigrissement, fonte musculaire',
        physiques: '- Ascite, ictère, astérixis, circulation collatérale',
        paraclinique: '- TP et albumine bas, Child-Pugh B ou C',
        etiologies: '- Évolution de la maladie, facteur déclenchant',
        syndromes: ['syndrome-d-insuffisance-hepatocellulaire', 'syndrome-d-hypertension-portale'],
      },
    ],
  },
];
