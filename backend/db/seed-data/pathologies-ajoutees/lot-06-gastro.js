'use strict';

/**
 * Lot 6 (gastro-entérologie et hépatologie) — ascite et décompensation de la cirrhose,
 * carcinome hépatocellulaire, hépatites virales aiguës A et E, abcès amibien du foie,
 * amibiase intestinale, schistosomiase hépatosplénique.
 * Rédigé par IA (EASL, AASLD, OMS, MSF, programmes nationaux) : à valider.
 */

const GASTRO = { departement: 'medecine-interne', specialite: 'Gastro-entérologie et hépatologie' };

module.exports = [
  // =================================================================== Ascite
  {
    ...GASTRO,
    slug: 'ascite-et-decompensation-cirrhose',
    nom: 'Ascite et décompensation de la cirrhose',
    resume:
      'Épanchement péritonéal, première décompensation de la cirrhose : ponction exploratrice systématique, régime sans sel, spironolactone + furosémide, ponction évacuatrice avec albumine ; dépister l’infection.',
    definition:
      'Accumulation de liquide dans la cavité péritonéale ; dans la cirrhose, elle marque l’entrée dans la phase décompensée, avec les autres décompensations (hémorragie, encéphalopathie, ictère, infection, syndrome hépatorénal).',
    physiopathologie:
      '## Mécanismes\n- Hypertension portale sinusoïdale\n- Vasodilatation splanchnique : hypovolémie efficace, activation du système rénine-angiotensine-aldostérone, rétention de sodium et d’eau\n- Hypoalbuminémie\n- Translocation bactérienne : infection spontanée du liquide d’ascite',
    diagnostic:
      '## Clinique\n- Augmentation du volume de l’abdomen, matité déclive mobile, flancs bombés, signe du flot\n- Œdèmes des membres inférieurs, hernie ombilicale\n- Signes de cirrhose et d’hypertension portale\n\n## Ponction exploratrice (systématique)\n- Aspect, protides (< 25 g/L = transsudat ; gradient albumine sérum-ascite ≥ 11 g/L = hypertension portale)\n- **PNN > 250/mm³ = infection** du liquide d’ascite\n- Culture en flacons d’hémoculture, cytologie, recherche de BK si exsudat lymphocytaire\n\n## Facteurs de décompensation\n- Infection, hémorragie, alcool, arrêt du traitement antiviral, AINS, carcinome, thrombose porte',
    examens: [
      [
        'confirmation',
        'echographie-abdominale',
        'Ascite (même minime), foie dysmorphique, thrombose porte, nodule.',
      ],
      ['confirmation', 'ponction-epanchement', 'Protides, PNN, culture, cytologie ; gradient albumine.'],
      ['premiere_intention', 'ionogramme', 'Natrémie, kaliémie (diurétiques).'],
      ['premiere_intention', 'creatinine', 'Syndrome hépatorénal, tolérance des diurétiques.'],
      ['premiere_intention', 'bilan-hepatique', 'Albumine, bilirubine.'],
      ['premiere_intention', 'hemostase', 'TP/INR : score de Child-Pugh.'],
      ['premiere_intention', 'nfs', 'Thrombopénie, anémie.'],
      ['etiologique', 'alpha-foetoproteine', 'Carcinome hépatocellulaire.'],
      ['etiologique', 'marqueurs-vhb', 'Hépatite B.'],
      ['etiologique', 'xpert-mtb-rif', 'Ascite exsudative lymphocytaire : tuberculose péritonéale.'],
    ],
    scores: ['child-pugh'],
    differentiels: [
      ['Péritonite tuberculeuse', 'Exsudat lymphocytaire, fièvre, sueurs ; sans cirrhose.'],
      ['Carcinose péritonéale', 'Exsudat, cellules malignes, contexte de cancer.'],
      ['insuffisance-cardiaque', 'Turgescence jugulaire, gradient élevé mais protides élevés.'],
      ['Syndrome néphrotique', 'Protéinurie massive, œdèmes généralisés.'],
      ['Grossesse, kyste ovarien, globe vésical', 'Matité convexe vers le haut, échographie.'],
    ],
    etiologies:
      '## Causes de l’ascite\n- **Cirrhose** (80 %) : hépatite B, alcool, hépatite C\n- Tuberculose péritonéale, carcinose, insuffisance cardiaque, syndrome néphrotique\n- Schistosomiase hépatosplénique évoluée, thrombose des veines sus-hépatiques',
    principes: [
      [
        'Régime et diurétiques',
        'Obtenir un bilan sodé négatif.',
        '- Régime pauvre en sel (< 5 g/j), pas de restriction hydrique sauf natrémie < 125\n- **Spironolactone** 100 mg/j ± **furosémide** 40 mg/j, augmentation par paliers (maximum 400/160 mg)\n- Objectif : perte de 0,5 kg/j (1 kg/j si œdèmes)\n- Arrêt si natrémie < 125, créatinine en hausse, encéphalopathie, kaliémie anormale',
      ],
      [
        'Ponction évacuatrice',
        'Soulager l’ascite tendue.',
        '- Ponction totale en une séance, asepsie stricte\n- **Albumine** 8 g par litre retiré au-delà de 5 L\n- Ascite réfractaire : ponctions itératives, TIPS en centre spécialisé',
      ],
      [
        'Infection du liquide d’ascite',
        'Guérir et prévenir le syndrome hépatorénal.',
        '- **Ceftriaxone** 1 à 2 g/j 5 à 7 jours (ou céfotaxime)\n- **Albumine** 1,5 g/kg à J1 et 1 g/kg à J3\n- Prophylaxie secondaire : **norfloxacine** 400 mg/j ou **ciprofloxacine**',
      ],
      [
        'Syndrome hépatorénal',
        'Restaurer la fonction rénale.',
        '- Arrêt des diurétiques et des néphrotoxiques\n- Albumine 1 g/kg, puis **terlipressine** + albumine',
      ],
      [
        'Traiter la cause et la décompensation',
        'Améliorer le pronostic.',
        '- Ténofovir (hépatite B), arrêt de l’alcool\n- Éviter AINS, IEC, aminosides\n- Recherche d’un carcinome',
      ],
    ],
    molecules: [
      ['spironolactone', 'premiere', 'Diurétique de première intention'],
      ['furosemide', 'premiere', 'Association à la spironolactone'],
      ['albumine-humaine', 'premiere', 'Ponction > 5 L, infection d’ascite, syndrome hépatorénal'],
      ['ceftriaxone', 'premiere', 'Infection du liquide d’ascite'],
      ['norfloxacine', 'adjuvant', 'Prophylaxie secondaire'],
      ['ciprofloxacine', 'alternative', 'Prophylaxie'],
      ['terlipressine', 'deuxieme', 'Syndrome hépatorénal'],
      ['lactulose', 'adjuvant', 'Encéphalopathie associée'],
    ],
    complications: [
      {
        nom: 'Infection spontanée du liquide d’ascite',
        description: 'Translocation bactérienne.',
        traitement: '- Ceftriaxone + albumine',
        clinique: '- Fièvre, douleurs, encéphalopathie (parfois aucun signe)',
        paraclinique: '- PNN > 250/mm³',
      },
      {
        nom: 'Syndrome hépatorénal',
        fiche: 'insuffisance-renale-aigue',
        description: 'Insuffisance rénale fonctionnelle.',
        traitement: '- Terlipressine + albumine',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Hyponatrémie',
        fiche: 'hyponatremie',
        description: 'Rétention d’eau, diurétiques.',
        traitement: '- Restriction hydrique, ajustement des diurétiques',
        clinique: '- Confusion',
        paraclinique: '- Natrémie',
      },
      {
        nom: 'Hernie ombilicale compliquée',
        description: 'Étranglement, rupture.',
        traitement: '- Chirurgie après contrôle de l’ascite',
        clinique: '- Hernie douloureuse',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 2 ans d’environ 50 % après l’apparition de l’ascite ; < 50 % à 6 mois en cas d’ascite réfractaire ou de syndrome hépatorénal',
    urgences: [],
    symptomes: [
      ['Distension abdominale', 'tres_frequent'],
      ['Œdèmes', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Ictère', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'EASL — recommandations de pratique clinique',
      'AASLD — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Régime sans sel, poursuite des diurétiques, pesée, repérage des signes d’infection',
        '- Première ascite, fièvre, confusion, ascite tendue',
      ],
      hgr: [
        '- Ponction exploratrice et évacuatrice, diurétiques, ceftriaxone, échographie',
        '- Syndrome hépatorénal, ascite réfractaire',
      ],
      tert: ['- Hépatologie, TIPS', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ascite cirrhotique non compliquée',
        type: 'commune',
        description: 'Transsudat de grande abondance.',
        terrain: '- Cirrhose (hépatite B, alcool)',
        fonctionnels: '- Augmentation du volume abdominal, gêne respiratoire',
        generaux: '- Fonte musculaire',
        physiques: '- Matité déclive, œdèmes, circulation collatérale',
        paraclinique: '- Protides < 25 g/L, PNN < 250/mm³',
        etiologies: '- Hypertension portale',
        syndromes: ['syndrome-d-hypertension-portale', 'syndrome-de-retention-hydrosodee'],
        examens: [['ponction-epanchement', 'Exploration']],
      },
      {
        nom: 'Infection spontanée du liquide d’ascite',
        type: 'gravite',
        description: 'Fièvre et douleurs, parfois silencieuse.',
        terrain: '- Cirrhose décompensée, hémorragie digestive',
        fonctionnels: '- Douleurs abdominales, diarrhée',
        generaux: '- Fièvre',
        physiques: '- Encéphalopathie, sensibilité abdominale',
        paraclinique: '- PNN > 250/mm³',
        etiologies: '- Entérobactéries',
        syndromes: ['syndrome-infectieux', 'syndrome-d-insuffisance-hepatocellulaire'],
      },
    ],
  },

  // =================================================================== CHC
  {
    ...GASTRO,
    slug: 'carcinome-hepatocellulaire',
    nom: 'Carcinome hépatocellulaire',
    resume:
      'Cancer primitif du foie, fréquent en RDC sur hépatite B et cirrhose, souvent découvert tardivement : échographie et alpha-fœtoprotéine, traitement selon le stade ; prévention par la vaccination contre l’hépatite B.',
    definition:
      'Tumeur maligne développée à partir des hépatocytes, survenant le plus souvent sur une cirrhose ou une hépatite B chronique, parfois chez l’adulte jeune en Afrique.',
    physiopathologie:
      '## Mécanismes\n- Inflammation chronique et régénération (cirrhose)\n- Intégration de l’ADN du virus de l’hépatite B (même sans cirrhose)\n- Cofacteurs : aflatoxine (arachides, maïs mal conservés), alcool, hépatite C, diabète',
    diagnostic:
      '## Clinique\n- Asymptomatique au début (dépistage)\n- Douleur de l’hypochondre droit, hépatomégalie dure et nodulaire, amaigrissement, fièvre\n- Décompensation d’une cirrhose (ascite, ictère), hémopéritoine par rupture\n\n## Confirmation\n- Échographie : nodule ; **scanner ou IRM avec injection** : prise de contraste artérielle et lavage portal (critères non invasifs sur cirrhose)\n- **Alpha-fœtoprotéine** élevée (> 400 ng/mL très évocatrice)\n- Biopsie si foie non cirrhotique ou imagerie atypique',
    examens: [
      ['premiere_intention', 'echographie-abdominale', 'Nodule ou masse hépatique, thrombose porte.'],
      ['confirmation', 'scanner-abdominal', 'Prise de contraste artérielle et lavage portal ; extension.'],
      ['premiere_intention', 'alpha-foetoproteine', 'Élevée dans 60 à 70 % des cas.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Foie non cirrhotique ou imagerie atypique.'],
      ['etiologique', 'marqueurs-vhb', 'Hépatite B.'],
      ['etiologique', 'serologies-hepatites', 'Hépatite C.'],
      ['pretherapeutique', 'bilan-hepatique', 'Fonction hépatique.'],
      ['pretherapeutique', 'hemostase', 'Score de Child-Pugh.'],
      ['gravite', 'radiographie-thoracique', 'Métastases pulmonaires.'],
    ],
    scores: ['child-pugh'],
    differentiels: [
      ['abces-amibien-du-foie', 'Fièvre, douleur, lésion liquidienne, sérologie amibienne.'],
      ['Métastases hépatiques', 'Lésions multiples, cancer primitif connu.'],
      ['Hémangiome, hyperplasie nodulaire focale', 'Aspect caractéristique, AFP normale.'],
      ['Kyste hydatique', 'Lésion kystique à cloisons.'],
    ],
    etiologies:
      '## Facteurs de risque\n- **Hépatite B chronique** (première cause en Afrique), hépatite C, hépatite D\n- Cirrhose de toute cause, alcool\n- Aflatoxines, stéatohépatite, diabète\n- Antécédent familial',
    principes: [
      [
        'Traitements selon le stade (BCLC)',
        'Allonger la survie.',
        '- Stade précoce : résection chirurgicale, destruction percutanée (radiofréquence, alcoolisation), transplantation (hors RDC)\n- Intermédiaire : chimio-embolisation\n- Avancé : traitement systémique (**sorafénib**, immunothérapie selon disponibilité)\n- Terminal : soins palliatifs',
      ],
      [
        'Soins de support et palliatifs',
        'Soulager.',
        '- Antalgiques (paracétamol prudent, **morphine** titrée)\n- Traitement de l’ascite et de l’encéphalopathie\n- Accompagnement du patient et de la famille',
      ],
      ['Traiter l’hépatopathie', 'Préserver le foie.', '- **Ténofovir** si hépatite B'],
      [
        'Prévention et dépistage',
        'Réduire l’incidence et diagnostiquer tôt.',
        '- Vaccination contre l’hépatite B à la naissance\n- Échographie ± AFP tous les 6 mois chez les cirrhotiques et les porteurs à risque de l’hépatite B\n- Bonne conservation des céréales et arachides (aflatoxines)',
      ],
    ],
    molecules: [
      ['sorafenib', 'deuxieme', 'Stade avancé, fonction hépatique conservée'],
      ['tenofovir-disoproxil', 'premiere', 'Hépatite B sous-jacente'],
      ['morphine', 'adjuvant', 'Douleur'],
      ['paracetamol', 'adjuvant', 'Douleur (dose réduite, ≤ 2 g/j si cirrhose)'],
      ['vaccin-hepatite-b', 'premiere', 'Prévention'],
    ],
    complications: [
      {
        nom: 'Rupture et hémopéritoine',
        description: 'Douleur brutale, choc.',
        traitement: '- Réanimation, embolisation ou chirurgie',
        clinique: '- Douleur, pâleur, choc',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Décompensation de la cirrhose',
        fiche: 'ascite-et-decompensation-cirrhose',
        description: 'Ascite, ictère, encéphalopathie.',
        traitement: '- Prise en charge de la cirrhose',
        clinique: '- Ascite',
        paraclinique: '- Bilan hépatique',
      },
      {
        nom: 'Thrombose porte tumorale',
        description: 'Hypertension portale aiguë.',
        traitement: '- Selon le stade',
        clinique: '- Ascite, hémorragie',
        paraclinique: '- Doppler',
      },
    ],
    evolution:
      '## Pronostic\n- Sombre en cas de diagnostic tardif (survie médiane de quelques mois) ; meilleur pour les petites tumeurs dépistées',
    urgences: [],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Hépatomégalie', 'tres_frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Distension abdominale', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'EASL — recommandations de pratique clinique',
      'AASLD — recommandations de pratique clinique',
      'ESMO — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Vaccination hépatite B, dépistage de l’hépatite B, repérage d’une hépatomégalie dure',
        '- Hépatomégalie, amaigrissement, hépatite B connue',
      ],
      hgr: ['- Échographie, AFP, ténofovir, soins palliatifs', '- Traitement spécifique'],
      tert: ['- Scanner, biopsie, chirurgie, destruction percutanée, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme symptomatique sur cirrhose',
        type: 'commune',
        description: 'Découverte tardive.',
        terrain: '- Cirrhose sur hépatite B, homme de 40 à 60 ans',
        fonctionnels: '- Douleur de l’hypochondre droit',
        generaux: '- Amaigrissement, fébricule',
        physiques: '- Gros foie dur et nodulaire, ascite',
        paraclinique: '- Nodule hypervascularisé, AFP élevée',
        etiologies: '- Hépatite B, cirrhose',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
        examens: [['alpha-foetoproteine', 'Diagnostic']],
      },
      {
        nom: 'Forme de l’adulte jeune sans cirrhose',
        type: 'terrain',
        description: 'Volumineuse tumeur d’évolution rapide.',
        terrain: '- Adulte jeune porteur de l’hépatite B',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre, amaigrissement rapide',
        physiques: '- Masse de l’hypochondre droit',
        paraclinique: '- Tumeur volumineuse, AFP très élevée',
        etiologies: '- Hépatite B (transmission précoce), aflatoxine',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hépatites A et E
  {
    ...GASTRO,
    slug: 'hepatites-virales-aigues-a-et-e',
    nom: 'Hépatites virales aiguës (A et E)',
    resume:
      'Hépatites à transmission féco-orale, souvent épidémiques : ictère fébrile, évolution bénigne en général ; danger de l’hépatite E chez la femme enceinte ; surveiller le TP (hépatite fulminante).',
    definition:
      'Inflammation aiguë du foie due au virus de l’hépatite A (VHA) ou au virus de l’hépatite E (VHE), transmis par l’eau et les aliments contaminés, sans passage à la chronicité chez l’immunocompétent.',
    physiopathologie:
      '## Mécanismes\n- Transmission féco-orale (eau, aliments, mains)\n- Incubation : 2 à 6 semaines\n- Atteinte hépatocytaire immunologique ; guérison spontanée\n- Hépatite E : gravité particulière au 3e trimestre de grossesse (insuffisance hépatique, hémorragie, mort fœtale)',
    diagnostic:
      '## Clinique\n- Phase pré-ictérique : fièvre, asthénie, anorexie, nausées, douleurs de l’hypochondre droit, arthralgies\n- Phase ictérique : ictère, urines foncées, selles décolorées, prurit\n- Enfant souvent asymptomatique (VHA)\n\n## Biologie\n- **Transaminases** > 10 fois la normale\n- **IgM anti-VHA** ou **IgM anti-VHE** (ou PCR)\n- **TP** : < 50 % = hépatite sévère ; avec confusion = hépatite fulminante',
    examens: [
      ['premiere_intention', 'bilan-hepatique', 'Transaminases très élevées, bilirubine.'],
      ['gravite', 'hemostase', 'TP < 50 % : hépatite sévère.'],
      ['confirmation', 'serologies-hepatites', 'IgM anti-VHA, IgM anti-VHE.'],
      ['etiologique', 'marqueurs-vhb', 'AgHBs, IgM anti-HBc : hépatite B aiguë.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme (ictère fébrile).'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie des formes graves.'],
      ['premiere_intention', 'beta-hcg', 'Femme en âge de procréer.'],
      ['premiere_intention', 'nfs', 'Hémolyse, infection.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-grave', 'Ictère fébrile, TDR positif, anémie.'],
      ['fievre-jaune', 'Ictère, hémorragies, atteinte rénale ; contexte épidémique.'],
      ['hepatite-b-chronique', 'AgHBs positif ; hépatite B aiguë si IgM anti-HBc.'],
      ['Leptospirose', 'Contact avec l’eau, atteinte rénale, myalgies.'],
      ['Hépatite médicamenteuse', 'Antituberculeux, paracétamol, plantes.'],
      ['Lithiase biliaire', 'Douleur, cholestase, échographie.'],
    ],
    etiologies:
      '## Virus\n- **VHA** : surtout chez l’enfant, immunité acquise tôt en RDC\n- **VHE** (génotypes 1 et 2) : épidémies d’origine hydrique (camps de déplacés, saisons des pluies), adulte jeune\n\n## Facteurs\n- Eau non potable, assainissement insuffisant, promiscuité',
    principes: [
      [
        'Traitement symptomatique',
        'Accompagner la guérison spontanée.',
        '- Repos, alimentation normale selon l’appétit, hydratation\n- **Pas d’alcool**, éviter les médicaments hépatotoxiques et les plantes\n- Paracétamol ≤ 2 g/j si besoin, éviter les sédatifs',
      ],
      [
        'Surveillance',
        'Détecter l’hépatite fulminante.',
        '- TP, conscience, glycémie\n- Hospitalisation : TP < 50 %, confusion, vomissements incoercibles, femme enceinte (hépatite E)',
      ],
      [
        'Hépatite fulminante',
        'Soutenir les fonctions vitales.',
        '- Réanimation, glucose, prévention de l’hypoglycémie et des hémorragies (vitamine K)\n- Transplantation hépatique (non disponible en RDC)',
      ],
      [
        'Prévention',
        'Couper la transmission.',
        '- Eau potable, chloration, lavage des mains, latrines\n- Vaccin contre l’hépatite A (voyageurs, groupes à risque) ; vaccin contre l’hépatite E en contexte épidémique (recommandation OMS)',
      ],
    ],
    molecules: [
      ['paracetamol', 'adjuvant', 'Fièvre et douleurs, ≤ 2 g/j'],
      ['glucose-10', 'adjuvant', 'Prévention de l’hypoglycémie dans les formes sévères'],
      ['vitamine-k1-phytomenadione', 'adjuvant', 'TP bas, hémorragies'],
      ['lactulose', 'adjuvant', 'Encéphalopathie'],
    ],
    complications: [
      {
        nom: 'Hépatite fulminante',
        description: 'TP < 50 % et encéphalopathie.',
        traitement: '- Réanimation',
        clinique: '- Confusion, astérixis, hémorragies',
        paraclinique: '- TP, glycémie',
      },
      {
        nom: 'Hépatite E grave de la femme enceinte',
        description: 'Mortalité maternelle jusqu’à 20 à 25 % au 3e trimestre.',
        traitement: '- Hospitalisation, réanimation, prise en charge obstétricale',
        clinique: '- Ictère, hémorragie, confusion',
        paraclinique: '- TP',
      },
      {
        nom: 'Hépatite A cholestatique ou à rechutes',
        description: 'Ictère prolongé.',
        traitement: '- Symptomatique',
        clinique: '- Prurit',
        paraclinique: '- Bilirubine',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 4 à 8 semaines dans la grande majorité des cas ; pas d’évolution chronique (sauf hépatite E chez l’immunodéprimé)',
    urgences: [],
    symptomes: [
      ['Ictère', 'tres_frequent'],
      ['Urines foncées', 'tres_frequent'],
      ['Asthénie', 'tres_frequent'],
      ['Anorexie', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Prurit', 'occasionnel'],
      ['Arthralgies', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'EASL — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Repos, conseils, test du paludisme, repérage des signes de gravité, alerte épidémique',
        '- Femme enceinte, confusion, hémorragies, vomissements',
      ],
      hgr: ['- Bilan hépatique, TP, sérologies, hospitalisation des formes sévères', '- Hépatite fulminante'],
      tert: ['- Réanimation hépatologique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hépatite aiguë ictérique commune',
        type: 'commune',
        description: 'Ictère précédé d’un syndrome pseudo-grippal.',
        terrain: '- Adulte jeune, contexte épidémique',
        fonctionnels: '- Nausées, anorexie, urines foncées',
        generaux: '- Fièvre modérée, asthénie',
        physiques: '- Ictère, foie sensible',
        paraclinique: '- Transaminases > 10 N, IgM positives',
        etiologies: '- VHA, VHE',
        syndromes: [],
        examens: [['serologies-hepatites', 'IgM']],
      },
      {
        nom: 'Hépatite E de la femme enceinte',
        type: 'terrain',
        description: 'Risque d’hépatite fulminante.',
        terrain: '- Grossesse, 3e trimestre',
        fonctionnels: '- Vomissements, douleurs',
        generaux: '- Fièvre',
        physiques: '- Ictère, hémorragies, confusion',
        paraclinique: '- TP effondré',
        etiologies: '- VHE génotype 1',
        syndromes: ['syndrome-d-insuffisance-hepatocellulaire', 'syndrome-hemorragique'],
      },
    ],
  },

  // =================================================================== Abcès amibien
  {
    ...GASTRO,
    slug: 'abces-amibien-du-foie',
    nom: 'Abcès amibien du foie',
    resume:
      'Localisation hépatique de l’amibiase : fièvre, douleur de l’hypochondre droit, gros foie douloureux ; échographie et sérologie ; métronidazole puis amœbicide de contact ; ponction si abcès volumineux.',
    definition:
      'Collection hépatique due à *Entamoeba histolytica*, la plus fréquente des localisations extra-intestinales de l’amibiase, souvent sans antécédent de dysenterie.',
    physiopathologie:
      '## Mécanismes\n- Ingestion de kystes ; invasion de la muqueuse colique par les trophozoïtes\n- Migration par la veine porte vers le foie : nécrose hépatocytaire (« pus chocolat »)\n- Abcès le plus souvent unique, du lobe droit',
    diagnostic:
      '## Clinique\n- Triade de Fontan : **fièvre**, **douleur de l’hypochondre droit** (irradiant à l’épaule), **hépatomégalie douloureuse** (ébranlement hépatique)\n- Altération de l’état général, toux, épanchement pleural droit\n- Ictère rare\n\n## Paraclinique\n- Hyperleucocytose à polynucléaires, CRP élevée\n- **Échographie** : lésion hypoéchogène arrondie\n- **Sérologie amibienne** positive\n- Ponction (si nécessaire) : pus chocolat stérile',
    examens: [
      ['confirmation', 'echographie-abdominale', 'Abcès hypoéchogène, siège, taille, risque de rupture.'],
      ['confirmation', 'serologie-amibienne', 'Positive dans plus de 90 % des cas.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose à polynucléaires.'],
      ['premiere_intention', 'crp', 'Élevée ; suivi.'],
      [
        'premiere_intention',
        'radiographie-thoracique',
        'Surélévation de la coupole droite, épanchement pleural.',
      ],
      ['etiologique', 'examen-parasitologique-selles', 'Kystes ou trophozoïtes (souvent négatif).'],
      ['etiologique', 'hemocultures', 'Abcès à pyogènes (différentiel).'],
      ['etiologique', 'tdr-paludisme', 'Fièvre.'],
    ],
    scores: [],
    differentiels: [
      [
        'Abcès hépatique à pyogènes',
        'Sujet âgé, diabète, origine biliaire, hémocultures positives, sérologie négative.',
      ],
      ['carcinome-hepatocellulaire', 'Masse tissulaire, AFP élevée.'],
      ['Kyste hydatique', 'Lésion à cloisons, sérologie hydatique.'],
      ['Cholécystite', 'Douleur de l’hypochondre droit, vésicule pathologique.'],
      ['paludisme-simple', 'TDR positif, pas d’abcès.'],
    ],
    etiologies:
      '## Cause\n- *Entamoeba histolytica*, transmission féco-orale (eau, aliments, mains)\n\n## Terrain\n- Homme adulte jeune, alcool, immunodépression, malnutrition',
    principes: [
      [
        'Amœbicide tissulaire',
        'Guérir l’abcès.',
        '- **Métronidazole** 500 à 750 mg 3 fois par jour (adulte) pendant 7 à 10 jours\n- Ou **tinidazole** 2 g/j 5 jours ou **secnidazole**\n- Amélioration attendue en 72 h',
      ],
      [
        'Amœbicide de contact',
        'Éradiquer les formes intestinales et prévenir la récidive.',
        '- Après le traitement tissulaire : **paromomycine** 7 jours',
      ],
      [
        'Ponction ou drainage',
        'Prévenir la rupture.',
        '- Ponction écho-guidée si abcès > 5–10 cm, du lobe gauche (risque péricardique), menace de rupture ou absence d’amélioration à 72 h\n- Chirurgie si rupture péritonéale',
      ],
      [
        'Surveillance et prévention',
        'Confirmer la guérison.',
        '- Disparition de la fièvre et de la douleur ; l’image échographique régresse lentement (plusieurs mois)\n- Hygiène de l’eau et des mains',
      ],
    ],
    molecules: [
      ['metronidazole', 'premiere', 'Amœbicide tissulaire 7 à 10 jours'],
      ['tinidazole', 'alternative', 'Amœbicide tissulaire'],
      ['secnidazole', 'alternative', 'Amœbicide tissulaire'],
      ['paromomycine', 'premiere', 'Amœbicide de contact après le traitement tissulaire'],
      ['paracetamol', 'adjuvant', 'Fièvre et douleur'],
    ],
    complications: [
      {
        nom: 'Rupture dans le péritoine',
        fiche: 'peritonite-aigue',
        description: 'Abcès volumineux superficiel.',
        traitement: '- Chirurgie, métronidazole IV',
        clinique: '- Douleur brutale, contracture',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Rupture pleuro-pulmonaire',
        description: 'Abcès du dôme hépatique.',
        traitement: '- Drainage pleural, métronidazole',
        clinique: '- Vomique « chocolat », dyspnée',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Rupture péricardique',
        description: 'Abcès du lobe gauche ; très grave.',
        traitement: '- Péricardiocentèse, drainage',
        clinique: '- Tamponnade',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison dans plus de 90 % sous traitement ; mortalité élevée en cas de rupture péricardique',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Douleur abdominale', 'tres_frequent'],
      ['Hépatomégalie', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Toux', 'occasionnel'],
      ['Diarrhée', 'occasionnel'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Évoquer devant fièvre et douleur de l’hypochondre droit, métronidazole, transfert pour échographie',
        '- Gros abcès, douleur brutale, dyspnée',
      ],
      hgr: ['- Échographie, sérologie, métronidazole, ponction écho-guidée', '- Rupture, abcès compliqué'],
      tert: ['- Drainage, chirurgie', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Abcès du foie connu avec douleur abdominale brutale et contracture',
    },
    formes: [
      {
        nom: 'Forme typique',
        type: 'commune',
        description: 'Triade fièvre, douleur, hépatomégalie.',
        terrain: '- Homme adulte jeune',
        fonctionnels: '- Douleur de l’hypochondre droit irradiant à l’épaule',
        generaux: '- Fièvre à 39–40 °C, altération de l’état général',
        physiques: '- Hépatomégalie douloureuse, ébranlement hépatique positif',
        paraclinique: '- Abcès à l’échographie, sérologie positive',
        etiologies: '- E. histolytica',
        syndromes: ['syndrome-infectieux'],
        examens: [['echographie-abdominale', 'Diagnostic']],
      },
      {
        nom: 'Abcès compliqué',
        type: 'gravite',
        description: 'Rupture ou menace de rupture.',
        terrain: '- Abcès volumineux ou du lobe gauche',
        fonctionnels: '- Douleur brutale, dyspnée',
        generaux: '- Choc',
        physiques: '- Contracture, frottement péricardique, épanchement pleural',
        paraclinique: '- Épanchement péritonéal, pleural ou péricardique',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-d-epanchement-pleural-liquidien'],
      },
    ],
  },

  // =================================================================== Amibiase intestinale
  {
    ...GASTRO,
    slug: 'amibiase-intestinale',
    nom: 'Amibiase intestinale',
    resume:
      'Colite à Entamoeba histolytica : dysenterie sans fièvre importante, selles glairo-sanglantes ; examen des selles frais ; métronidazole puis amœbicide de contact.',
    definition:
      'Infection du côlon par *Entamoeba histolytica*, allant du portage asymptomatique de kystes à la dysenterie amibienne et à la colite nécrosante.',
    physiopathologie:
      '## Mécanismes\n- Ingestion de kystes (eau, aliments souillés, mains)\n- Trophozoïtes invasifs : ulcérations coliques « en bouton de chemise »\n- Diffusion possible au foie (abcès)',
    diagnostic:
      '## Clinique\n- **Dysenterie** : selles nombreuses, glairo-sanglantes, épreintes, ténesme\n- Fièvre absente ou modérée (≠ shigellose)\n- Formes subaiguës : diarrhée alternant avec constipation, douleurs coliques\n\n## Confirmation\n- **Examen parasitologique des selles fraîches** (< 30 min) : trophozoïtes hématophages\n- Kystes seuls : portage (ne permet pas de distinguer *E. histolytica* d’*E. dispar*)',
    examens: [
      [
        'confirmation',
        'examen-parasitologique-selles',
        'Trophozoïtes hématophages sur selles fraîches ; répéter 3 fois.',
      ],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'ionogramme', 'Déshydratation.'],
      ['etiologique', 'coproculture', 'Shigella (diagnostic différentiel principal).'],
      ['etiologique', 'tdr-vih', 'Formes graves ou récidivantes.'],
      ['gravite', 'echographie-abdominale', 'Abcès du foie associé, épaississement colique.'],
    ],
    scores: [],
    differentiels: [
      ['shigellose', 'Dysenterie fébrile, épidémies, coproculture positive.'],
      [
        'schistosomiase-hepatosplenique',
        'Diarrhée sanglante chronique, œufs de *S. mansoni* dans les selles.',
      ],
      ['Tuberculose intestinale', 'Diarrhée chronique, amaigrissement, fièvre.'],
      ['Cancer colorectal', 'Sujet âgé, rectorragies, amaigrissement, coloscopie.'],
      [
        'Maladies inflammatoires chroniques de l’intestin',
        'Évolution chronique, examens parasitologiques négatifs.',
      ],
    ],
    etiologies:
      '## Cause\n- *Entamoeba histolytica*\n\n## Facteurs\n- Eau non potable, défaut d’assainissement, fertilisation par des excréments humains\n- Corticothérapie (formes graves)',
    principes: [
      [
        'Amœbicide tissulaire',
        'Traiter la colite.',
        '- **Métronidazole** 500 mg 3 fois par jour 5 à 7 jours (enfant : 10–15 mg/kg 3 fois par jour)\n- Ou **tinidazole** 2 g/j 3 jours, **secnidazole** 2 g dose unique',
      ],
      [
        'Amœbicide de contact',
        'Éliminer les kystes.',
        '- **Paromomycine** 7 jours (aussi chez le porteur asymptomatique d’E. histolytica)',
      ],
      ['Réhydratation', 'Corriger les pertes.', '- SRO, perfusion si déshydratation sévère'],
      [
        'Prévention',
        'Couper la transmission.',
        '- Eau potable, lavage des mains, latrines, hygiène alimentaire',
      ],
    ],
    molecules: [
      ['metronidazole', 'premiere', 'Amœbicide tissulaire'],
      ['tinidazole', 'alternative', 'Amœbicide tissulaire'],
      ['secnidazole', 'alternative', 'Dose unique'],
      ['paromomycine', 'premiere', 'Amœbicide de contact'],
    ],
    complications: [
      {
        nom: 'Abcès amibien du foie',
        fiche: 'abces-amibien-du-foie',
        description: 'Diffusion portale.',
        traitement: '- Métronidazole, ponction si besoin',
        clinique: '- Fièvre, douleur de l’hypochondre droit',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Colite nécrosante fulminante et perforation',
        fiche: 'peritonite-aigue',
        description: 'Terrain fragile, corticoïdes.',
        traitement: '- Réanimation, métronidazole IV, chirurgie',
        clinique: '- Ventre distendu, choc',
        paraclinique: '- ASP',
      },
      {
        nom: 'Amœbome',
        description: 'Masse inflammatoire colique pseudo-tumorale.',
        traitement: '- Métronidazole',
        clinique: '- Masse de la fosse iliaque',
        paraclinique: '- Coloscopie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison rapide sous traitement ; récidives fréquentes sans amœbicide de contact ni amélioration de l’hygiène',
    urgences: [],
    symptomes: [
      ['Diarrhée sanglante', 'tres_frequent'],
      ['Douleur abdominale', 'tres_frequent'],
      ['Diarrhée', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Asthénie', 'frequent'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      'Guide de prescription et ordinogrammes RDC',
    ],
    niveaux: {
      cs: [
        '- Examen des selles, métronidazole, SRO, éducation à l’hygiène',
        '- Déshydratation sévère, abdomen distendu, fièvre élevée',
      ],
      hgr: ['- Prise en charge des formes graves, échographie', '- Perforation, colite fulminante'],
      tert: ['- Chirurgie, coloscopie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dysenterie amibienne',
        type: 'commune',
        description: 'Selles glairo-sanglantes sans grande fièvre.',
        terrain: '- Adulte, enfant > 5 ans',
        fonctionnels: '- Épreintes, ténesme, selles glairo-sanglantes',
        generaux: '- Fièvre absente ou modérée',
        physiques: '- Sensibilité du cadre colique',
        paraclinique: '- Trophozoïtes hématophages',
        etiologies: '- E. histolytica',
        syndromes: ['syndrome-dysenterique'],
        examens: [['examen-parasitologique-selles', 'Diagnostic']],
      },
      {
        nom: 'Colite amibienne fulminante',
        type: 'gravite',
        description: 'Nécrose colique.',
        terrain: '- Enfant, femme enceinte, corticothérapie, malnutrition',
        fonctionnels: '- Diarrhée profuse sanglante',
        generaux: '- Fièvre, déshydratation, choc',
        physiques: '- Distension abdominale',
        paraclinique: '- Colectasie, pneumopéritoine',
        etiologies: '',
        syndromes: ['syndrome-de-choc', 'syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== Schistosomiase hépatosplénique
  {
    ...GASTRO,
    slug: 'schistosomiase-hepatosplenique',
    nom: 'Schistosomiase hépatosplénique',
    resume:
      'Fibrose périportale due à Schistosoma mansoni : hypertension portale avec fonction hépatique conservée, splénomégalie, hémorragies variqueuses ; praziquantel, prévention des hémorragies.',
    definition:
      'Forme chronique de la schistosomiase intestinale (*Schistosoma mansoni*, *S. intercalatum*) où les œufs bloqués dans le foie entraînent une fibrose périportale (de Symmers) et une hypertension portale présinusoïdale.',
    physiopathologie:
      '## Mécanismes\n- Pénétration cutanée des furcocercaires lors des contacts avec l’eau douce\n- Vers adultes dans les veines mésentériques ; œufs drainés vers le foie\n- Granulomes autour des œufs, fibrose périportale\n- Hypertension portale **présinusoïdale** : varices, splénomégalie ; fonction hépatique longtemps normale',
    diagnostic:
      '## Clinique\n- Enfant et adulte jeune des zones d’endémie (lacs, fleuve, rivières)\n- Phase intestinale : douleurs, diarrhée parfois sanglante\n- Hépatomégalie (lobe gauche), **splénomégalie** volumineuse\n- Hématémèse par rupture de varices ; ascite tardive\n\n## Paraclinique\n- **Œufs de *S. mansoni*** dans les selles (Kato-Katz), biopsie rectale\n- **Échographie** : fibrose périportale (aspect en « tuyau de pipe »), signes d’hypertension portale\n- Bilan hépatique peu perturbé ; thrombopénie (hypersplénisme)',
    examens: [
      ['confirmation', 'examen-parasitologique-selles', 'Œufs de S. mansoni (Kato-Katz).'],
      ['confirmation', 'echographie-abdominale', 'Fibrose périportale, splénomégalie, varices, flux porte.'],
      ['premiere_intention', 'nfs', 'Thrombopénie, leucopénie (hypersplénisme), anémie, éosinophilie.'],
      ['premiere_intention', 'bilan-hepatique', 'Souvent normal (à la différence de la cirrhose).'],
      ['gravite', 'endoscopie-digestive-haute', 'Varices œsophagiennes.'],
      ['etiologique', 'marqueurs-vhb', 'Hépatite B associée (aggrave le pronostic).'],
    ],
    scores: [],
    differentiels: [
      [
        'cirrhose-hepatique',
        'Insuffisance hépatocellulaire, foie dysmorphique nodulaire, élastométrie très élevée.',
      ],
      ['Splénomégalie palustre hyperréactive', 'IgM élevées, régression sous antipaludiques.'],
      ['Hémopathies (leucémie myéloïde chronique, lymphome)', 'Anomalies de l’hémogramme, frottis.'],
      ['Trypanosomiase, leishmaniose viscérale', 'Contexte, examens spécifiques.'],
    ],
    etiologies:
      '## Cause\n- *Schistosoma mansoni* (foyers des lacs Albert, Édouard, Kivu, Tanganyika, Mai-Ndombe, fleuve Congo, Ituri)\n\n## Facteurs\n- Baignade, pêche, lessive, riziculture en eau douce\n- Absence d’assainissement',
    principes: [
      [
        'Traitement antiparasitaire',
        'Tuer les vers et limiter la fibrose.',
        '- **Praziquantel** 40 mg/kg en dose unique (60 mg/kg dans certains protocoles)\n- La fibrose précoce peut régresser ; la fibrose avancée persiste',
      ],
      [
        'Hypertension portale',
        'Prévenir les hémorragies.',
        '- **Propranolol** en prophylaxie, ligature des varices\n- Hémorragie : fiche *Hémorragie digestive haute* (vasoactif, endoscopie)\n- Chirurgie de dérivation ou splénectomie-dévascularisation en centre spécialisé',
      ],
      [
        'Prise en charge globale',
        'Améliorer l’état général.',
        '- Traitement de l’anémie (fer, acide folique), vaccination contre l’hépatite B',
      ],
      [
        'Prévention',
        'Réduire la transmission.',
        '- Traitement de masse par praziquantel (écoliers, populations à risque)\n- Accès à l’eau potable, latrines, lutte contre les mollusques, éducation',
      ],
    ],
    molecules: [
      ['praziquantel', 'premiere', '40 mg/kg en dose unique'],
      ['propranolol', 'premiere', 'Prévention de l’hémorragie variqueuse'],
      ['octreotide', 'adjuvant', 'Hémorragie variqueuse'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie ferriprive'],
      ['acide-folique', 'adjuvant', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Hémorragie digestive par rupture de varices',
        fiche: 'hemorragie-digestive-haute',
        description: 'Principale cause de décès.',
        traitement: '- Vasoactif, ligature, propranolol',
        clinique: '- Hématémèse',
        paraclinique: '- Endoscopie',
      },
      {
        nom: 'Hypersplénisme',
        description: 'Pancytopénie.',
        traitement: '- Splénectomie selon les cas',
        clinique: '- Pâleur, saignements',
        paraclinique: '- NFS',
      },
      {
        nom: 'Hypertension artérielle pulmonaire',
        description: 'Embolisation d’œufs dans les poumons.',
        traitement: '- Spécialisé',
        clinique: '- Dyspnée, insuffisance cardiaque droite',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Décompensation avec hépatite B associée',
        fiche: 'ascite-et-decompensation-cirrhose',
        description: 'Fibrose mixte.',
        traitement: '- Ténofovir, prise en charge de l’ascite',
        clinique: '- Ascite',
        paraclinique: '- Bilan hépatique',
      },
    ],
    evolution: '## Pronostic\n- Bonne tolérance hépatique ; le pronostic dépend des hémorragies variqueuses',
    urgences: [],
    symptomes: [
      ['Splénomégalie', 'tres_frequent'],
      ['Hépatomégalie', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Diarrhée sanglante', 'occasionnel'],
      ['Hématémèse', 'occasionnel'],
      ['Pâleur', 'frequent'],
      ['Distension abdominale', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Praziquantel, traitement de masse, repérage de la splénomégalie, éducation',
        '- Hématémèse, splénomégalie volumineuse',
      ],
      hgr: [
        '- Échographie, examen des selles, propranolol, prise en charge des hémorragies',
        '- Hémorragies récidivantes',
      ],
      tert: ['- Ligature endoscopique, chirurgie de l’hypertension portale', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme hépatosplénique compensée',
        type: 'commune',
        description: 'Splénomégalie et fibrose sans insuffisance hépatique.',
        terrain: '- Enfant, adulte jeune riverain',
        fonctionnels: '- Pesanteur de l’hypochondre gauche',
        generaux: '- Anémie',
        physiques: '- Splénomégalie, hépatomégalie gauche',
        paraclinique: '- Fibrose périportale, œufs de S. mansoni',
        etiologies: '- S. mansoni',
        syndromes: ['syndrome-d-hypertension-portale'],
        examens: [['echographie-abdominale', 'Fibrose']],
      },
      {
        nom: 'Forme hémorragique',
        type: 'gravite',
        description: 'Rupture de varices.',
        terrain: '- Hypertension portale évoluée',
        fonctionnels: '- Hématémèse, méléna',
        generaux: '- Choc',
        physiques: '- Splénomégalie',
        paraclinique: '- Varices',
        etiologies: '',
        syndromes: ['syndrome-d-hemorragie-interne', 'syndrome-anemique'],
      },
    ],
  },
];
