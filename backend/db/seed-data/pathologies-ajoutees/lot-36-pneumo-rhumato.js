'use strict';

/**
 * Lot 36 (phase 2, pneumologie et rhumatologie) — hémoptysie, insuffisance respiratoire aiguë,
 * silicose et pneumoconioses des mineurs, lupus érythémateux systémique, spondyloarthrites,
 * lombalgie et sciatique, ostéoporose, tendinopathies et épaule douloureuse. Rédigé par IA (ATS,
 * BTS, EULAR, ACR, OMS, ouvrages de référence) : à valider.
 */

const PNEUMO = { departement: 'medecine-interne', specialite: 'Pneumologie' };
const RHUMATO = { departement: 'medecine-interne', specialite: 'Rhumatologie' };

module.exports = [
  // =================================================================== Hémoptysie
  {
    ...PNEUMO,
    slug: 'hemoptysie',
    nom: 'Hémoptysie',
    resume:
      'Rejet de sang provenant des voies respiratoires sous-glottiques lors d’un effort de toux ; en RDC surtout tuberculose (active ou séquellaire), dilatation des bronches, cancer, aspergillome, insuffisance cardiaque ; hémoptysie massive = urgence vitale par asphyxie : position latérale côté qui saigne, oxygène, acide tranexamique, transfusion, embolisation ; rechercher systématiquement la tuberculose.',
    definition:
      'Émission par la bouche de sang provenant des voies aériennes sous-glottiques ; elle est dite grave (massive) au-delà de 200 mL en 24 h ou dès qu’elle compromet la respiration ou l’hémodynamique.',
    physiopathologie:
      '## Causes\n- **Tuberculose** active, séquelles (dilatation des bronches, aspergillome dans une caverne)\n- **Dilatation des bronches**, abcès, pneumonie nécrosante\n- **Cancer bronchopulmonaire**\n- Cardiovasculaires : **rétrécissement mitral**, OAP, embolie pulmonaire\n- Paragonimose (consommation de crabes d’eau douce crus), leptospirose, troubles de la coagulation, traumatisme\n\n## Gravité\n- Le risque principal est l’**asphyxie** (inondation bronchique), plus que l’anémie',
    diagnostic:
      '## Affirmer l’hémoptysie\n- Sang rouge aéré, rejeté en toussant ; distinguer de l’**épistaxis** déglutie et de l’**hématémèse**\n\n## Évaluer la gravité\n- Volume, détresse respiratoire, SpO2, état hémodynamique, terrain (insuffisance respiratoire)\n\n## Examens\n- **Radiographie thoracique**, **Xpert MTB/RIF** et bacilloscopies\n- NFS, hémostase, groupage, créatinine\n- **Scanner thoracique** (angioscanner) pour localiser et orienter l’embolisation ; fibroscopie bronchique\n- Échocardiographie si cardiopathie suspectée',
    examens: [
      ['premiere_intention', 'radiographie-thoracique', 'Cause, côté.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose.'],
      ['etiologique', 'bacilloscopie', 'Tuberculose.'],
      ['premiere_intention', 'nfs', 'Anémie, plaquettes.'],
      ['premiere_intention', 'hemostase', 'Troubles de la coagulation.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['deuxieme_intention', 'angioscanner-thoracique', 'Localisation, embolisation.'],
      ['deuxieme_intention', 'fibroscopie-bronchique', 'Localisation, cancer.'],
      ['etiologique', 'echocardiographie', 'Rétrécissement mitral.'],
    ],
    scores: [],
    differentiels: [
      ['epistaxis', 'Saignement nasal postérieur dégluti.'],
      ['hemorragie-digestive-haute', 'Hématémèse : sang noir, débris alimentaires, sans toux.'],
      ['Saignement buccal ou pharyngé', 'Gingivorragies, lésions de la bouche.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Tuberculose, dilatation des bronches, cancer, rétrécissement mitral, aspergillome',
    principes: [
      [
        'Hémoptysie massive',
        'Protéger les voies aériennes.',
        '- Position **latérale de sécurité côté qui saigne** (poumon sain en haut), oxygène, aspiration\n- Voie veineuse, **acide tranexamique** 1 g IV toutes les 8 h, correction des troubles de la coagulation, **transfusion** si besoin\n- Intubation sélective si asphyxie ; **embolisation artérielle bronchique** ou chirurgie dans les centres équipés',
      ],
      [
        'Hémoptysie de faible abondance',
        'Traiter la cause.',
        '- Surveillance, acide tranexamique per os si besoin\n- **Antituberculeux** si tuberculose confirmée ; antibiotiques si surinfection (DDB) ; traitement de la cardiopathie',
      ],
      [
        'Mesures générales',
        'Éviter l’aggravation.',
        '- Repos, pas d’anticoagulants ni d’antiagrégants, pas d’antitussifs puissants\n- Isolement respiratoire si tuberculose possible',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Hémostatique'],
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['rifampicine', 'adjuvant', 'Tuberculose (RHZE)'],
      ['amoxicilline', 'adjuvant', 'Surinfection de DDB'],
    ],
    complications: [
      {
        nom: 'Asphyxie',
        description: 'Inondation bronchique.',
        traitement: '- Position, aspiration, intubation sélective',
        clinique: '- Détresse respiratoire, cyanose',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Choc hémorragique',
        fiche: 'reanimation-du-choc',
        description: 'Hémoptysie très abondante.',
        traitement: '- Transfusion, embolisation',
        clinique: '- Hypotension',
        paraclinique: '- Hémoglobine',
      },
      {
        nom: 'Récidive',
        fiche: 'dilatation-des-bronches',
        description: 'Cause non traitée.',
        traitement: '- Traitement de la cause, embolisation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée des hémoptysies massives (asphyxie) ; bon pronostic des formes peu abondantes traitées',
    urgences: [],
    symptomes: [
      ['Hémoptysie', 'tres_frequent'],
      ['Toux', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
      'ATS — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Position, oxygène, Xpert, transfert si abondante', '- Hémoptysie > 1 verre, dyspnée, récidive'],
      hgr: ['- Radiographie, acide tranexamique, transfusion', '- Embolisation, chirurgie'],
      tert: ['- Angioscanner, embolisation, fibroscopie, chirurgie thoracique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hémoptysie de faible abondance',
        type: 'commune',
        description: 'Crachats striés de sang.',
        terrain: '- Tuberculose, DDB',
        fonctionnels: '- Toux, crachats sanglants',
        generaux: '',
        physiques: '- Râles',
        paraclinique: '- Lésions à la radiographie',
        etiologies: '- Tuberculose, DDB',
        syndromes: [],
      },
      {
        nom: 'Hémoptysie massive',
        type: 'gravite',
        description: '> 200 mL/24 h ou retentissement.',
        terrain: '',
        fonctionnels: '- Rejet de sang abondant',
        generaux: '- Choc',
        physiques: '- Détresse respiratoire',
        paraclinique: '- Anémie, hypoxémie',
        etiologies: '- Aspergillome, DDB, cancer',
        syndromes: ['syndrome-de-detresse-respiratoire', 'syndrome-d-hemorragie-interne'],
      },
    ],
  },

  // =================================================================== Insuffisance respiratoire aiguë
  {
    ...PNEUMO,
    slug: 'insuffisance-respiratoire-aigue',
    nom: 'Insuffisance respiratoire aiguë',
    resume:
      'Défaillance brutale de l’oxygénation et/ou de la ventilation : dyspnée, polypnée, tirage, cyanose, troubles de conscience, SpO2 basse ; oxygène pour SpO2 94–98 % (88–92 % si BPCO), position demi-assise, recherche et traitement de la cause (pneumonie, OAP, asthme, BPCO, embolie, pneumothorax, épanchement, paludisme grave) ; ventilation non invasive ou intubation si épuisement.',
    definition:
      'Incapacité aiguë du système respiratoire à assurer des échanges gazeux suffisants : hypoxémie (PaO2 < 60 mmHg ou SpO2 < 90 % en air) avec ou sans hypercapnie (PaCO2 > 45 mmHg).',
    physiopathologie:
      '## Mécanismes\n- **Hypoxémique** : pneumonie, OAP, SDRA, embolie pulmonaire, épanchements\n- **Hypercapnique** : BPCO décompensée, asthme grave épuisé, atteintes neuromusculaires (Guillain-Barré, myasthénie), intoxications (opioïdes, sédatifs), obésité\n\n## Causes fréquentes en RDC\n- Pneumonies (dont COVID-19, pneumocystose, tuberculose), paludisme grave (acidose, OAP), insuffisance cardiaque, asthme',
    diagnostic:
      '## Signes de gravité\n- **Polypnée** > 30/min, tirage, respiration abdominale paradoxale, **cyanose**, sueurs\n- **SpO2 < 90 %**, impossibilité de parler, **troubles de conscience** (hypercapnie), bradypnée d’épuisement\n- Retentissement hémodynamique\n\n## Examens\n- **Oxymétrie**, **gaz du sang** (hypoxémie, hypercapnie, acidose)\n- **Radiographie thoracique**, ECG, échographie pleuro-pulmonaire\n- NFS, CRP, TDR paludisme, BNP, D-dimères, troponine selon l’orientation',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxémie.'],
      ['confirmation', 'gaz-du-sang', 'Hypoxémie, hypercapnie.'],
      ['premiere_intention', 'radiographie-thoracique', 'Cause.'],
      ['premiere_intention', 'ecg', 'Cause cardiaque.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme grave.'],
      ['etiologique', 'bnp', 'OAP cardiogénique.'],
      ['etiologique', 'd-dimeres', 'Embolie pulmonaire.'],
      ['etiologique', 'test-covid', 'COVID-19.'],
    ],
    scores: [],
    differentiels: [
      ['pneumonie-communautaire-adulte', 'Fièvre, condensation.'],
      ['insuffisance-cardiaque', 'OAP : orthopnée, crépitants bilatéraux.'],
      ['embolie-pulmonaire', 'Dyspnée brutale, facteurs de risque.'],
      ['pneumothorax-spontane', 'Douleur brutale, tympanisme.'],
      ['asthme-aigu-grave', 'Sibilants, antécédents.'],
      ['Acidose métabolique', 'Polypnée de Kussmaul sans hypoxémie (acidocétose, paludisme grave).'],
    ],
    etiologies:
      '## Causes\n- Pneumonies, OAP, BPCO, asthme, embolie, pneumothorax, épanchements, atteintes neuromusculaires, intoxications',
    principes: [
      [
        'Oxygénothérapie',
        'Corriger l’hypoxémie.',
        '- **Oxygène** pour SpO2 **94–98 %** (88–92 % si BPCO ou risque d’hypercapnie) : lunettes, masque simple, masque à haute concentration\n- Position demi-assise, libération des voies aériennes',
      ],
      [
        'Support ventilatoire',
        'Suppléer la fatigue.',
        '- **VNI** : BPCO hypercapnique avec acidose, OAP\n- **Intubation** : troubles de conscience, épuisement, échec de la VNI, choc, arrêt respiratoire',
      ],
      [
        'Traitement de la cause',
        'Lever la cause.',
        '- Pneumonie : antibiotiques ; OAP : **furosémide**, **trinitrine** ; asthme/BPCO : **salbutamol**, corticoïdes ; pneumothorax : exsufflation ou drainage ; épanchement : ponction ; intoxication aux opioïdes : naloxone ; embolie : anticoagulation',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['salbutamol', 'alternative', 'Bronchospasme'],
      ['furosemide', 'alternative', 'OAP'],
      ['trinitrine', 'alternative', 'OAP'],
      ['naloxone', 'alternative', 'Intoxication aux opioïdes'],
      ['ceftriaxone', 'alternative', 'Pneumonie grave'],
    ],
    complications: [
      {
        nom: 'Arrêt cardiorespiratoire',
        description: 'Hypoxie prolongée.',
        traitement: '- Réanimation',
        clinique: '- Bradycardie, arrêt',
        paraclinique: '',
      },
      {
        nom: 'Encéphalopathie hypercapnique',
        fiche: 'bpco',
        description: 'Hypercapnie.',
        traitement: '- VNI, oxygène prudent',
        clinique: '- Somnolence, astérixis',
        paraclinique: '- PaCO2 élevée',
      },
    ],
    evolution: '## Pronostic\n- Dépend de la cause et de l’accès à l’oxygène et à la ventilation',
    urgences: ['oedeme-aigu-du-poumon', 'crise-d-asthme-aigue-grave'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Tachypnée', 'tres_frequent'],
      ['Cyanose', 'frequent'],
      ['Sueurs', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Toux', 'frequent'],
    ],
    sources: [
      'ATS — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Oxygène si disponible, position, traitement de la cause, transfert',
        '- SpO2 < 90 %, signes de gravité',
      ],
      hgr: ['- Oxygène, radiographie, gaz du sang, traitement étiologique', '- VNI, intubation'],
      tert: ['- Réanimation, ventilation', ''],
    },
    alertes: {
      'oedeme-aigu-du-poumon': 'Dyspnée aiguë avec crépitants bilatéraux et orthopnée',
      'crise-d-asthme-aigue-grave': 'Dyspnée sifflante avec impossibilité de parler',
    },
    formes: [
      {
        nom: 'Insuffisance respiratoire hypoxémique',
        type: 'commune',
        description: 'Pneumonie, OAP.',
        terrain: '',
        fonctionnels: '- Dyspnée',
        generaux: '- Fièvre si infection',
        physiques: '- Polypnée, crépitants',
        paraclinique: '- SpO2 < 90 %',
        etiologies: '- Pneumonie, OAP',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Insuffisance respiratoire hypercapnique',
        type: 'etiologique',
        description: 'BPCO, atteinte neuromusculaire.',
        terrain: '- BPCO, Guillain-Barré',
        fonctionnels: '- Somnolence',
        generaux: '- Sueurs',
        physiques: '- Astérixis, cyanose',
        paraclinique: '- PaCO2 élevée, acidose',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Silicose
  {
    ...PNEUMO,
    slug: 'silicose-pneumoconioses',
    nom: 'Silicose et pneumoconioses des mineurs',
    resume:
      'Fibrose pulmonaire due à l’inhalation prolongée de poussières minérales (silice, charbon, cobalt) chez les mineurs artisanaux et industriels (Katanga, Kivu, Ituri) : dyspnée d’effort progressive, toux, nodules radiologiques ; risque majeur de tuberculose ; pas de traitement curatif : arrêt de l’exposition, dépistage et prévention de la tuberculose, traitement symptomatique, protection respiratoire et réduction des poussières.',
    definition:
      'Pneumoconioses : maladies pulmonaires fibrosantes dues à l’inhalation et à l’accumulation de poussières minérales ; la silicose est causée par la silice cristalline (quartz), la pneumoconiose du mineur de charbon par la poussière de charbon ; la « maladie des métaux durs » par le cobalt.',
    physiopathologie:
      '## Mécanismes\n- Phagocytose des particules par les macrophages alvéolaires → inflammation chronique → **nodules fibreux** puis fibrose massive\n- Silice : altération de l’immunité locale → **tuberculose** (risque multiplié), mycobactéries\n\n## Expositions\n- Mines artisanales et industrielles (or, cuivre, cobalt, coltan), carrières, taille de pierre, concassage, sablage\n- Facteurs aggravants : forage à sec, galeries non ventilées, absence de masque, tabac, VIH',
    diagnostic:
      '## Clinique\n- Exposition prolongée (souvent > 10 ans ; formes accélérées en quelques années si exposition massive)\n- **Dyspnée d’effort** progressive, toux, expectoration\n- Stades avancés : insuffisance respiratoire chronique, cœur pulmonaire\n\n## Examens\n- **Radiographie thoracique** : micronodules des lobes supérieurs, masses de fibrose, adénopathies calcifiées « en coquille d’œuf »\n- **Spirométrie** (trouble restrictif ou mixte)\n- **Xpert MTB/RIF** systématique devant toute aggravation ; test VIH\n- Scanner thoracique si disponible',
    examens: [
      ['confirmation', 'radiographie-thoracique', 'Micronodules, masses de fibrose.'],
      ['premiere_intention', 'spirometrie', 'Retentissement fonctionnel.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose associée.'],
      ['etiologique', 'tdr-vih', 'VIH (risque de tuberculose).'],
      ['deuxieme_intention', 'scanner-thoracique', 'Lésions, cancer.'],
      ['gravite', 'oxymetrie-de-pouls', 'Insuffisance respiratoire.'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-pulmonaire', 'Souvent associée : Xpert.'],
      ['Sarcoïdose', 'Adénopathies hilaires, sans exposition.'],
      ['cancer-bronchopulmonaire', 'Masse évolutive (la silice est cancérogène).'],
      ['bpco', 'Tabac, obstruction.'],
    ],
    etiologies: '## Terrain\n- Mineurs, carriers, tailleurs de pierre ; exposition sans protection',
    principes: [
      [
        'Arrêt de l’exposition',
        'Freiner l’évolution.',
        '- Éviction des poussières, reclassement professionnel, déclaration en maladie professionnelle\n- Arrêt du tabac',
      ],
      [
        'Tuberculose',
        'Prévenir et dépister.',
        '- Dépistage actif régulier (symptômes, radiographie, Xpert)\n- **Traitement préventif** (isoniazide) après exclusion d’une tuberculose active selon le protocole\n- Traitement standard de la tuberculose si active',
      ],
      [
        'Traitement symptomatique',
        'Soulager.',
        '- Bronchodilatateurs si obstruction (**salbutamol**), réhabilitation respiratoire\n- **Oxygène** si hypoxémie ; vaccinations (grippe, pneumocoque)',
      ],
      [
        'Prévention collective',
        'Réduire les poussières.',
        '- Forage à l’eau, ventilation des galeries, masques filtrants (FFP2/FFP3), surveillance médicale des travailleurs',
      ],
    ],
    molecules: [
      ['isoniazide', 'premiere', 'Traitement préventif de la tuberculose'],
      ['pyridoxine', 'adjuvant', 'Avec isoniazide'],
      ['salbutamol', 'adjuvant', 'Obstruction bronchique'],
      ['oxygene', 'adjuvant', 'Insuffisance respiratoire'],
    ],
    complications: [
      {
        nom: 'Tuberculose',
        fiche: 'tuberculose-pulmonaire',
        description: 'Risque très augmenté.',
        traitement: '- Antituberculeux',
        clinique: '- Fièvre, amaigrissement',
        paraclinique: '- Xpert',
      },
      {
        nom: 'Insuffisance respiratoire chronique et cœur pulmonaire',
        fiche: 'insuffisance-cardiaque',
        description: 'Fibrose massive.',
        traitement: '- Oxygène, diurétiques',
        clinique: '- Dyspnée de repos, œdèmes',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Cancer bronchopulmonaire',
        fiche: 'cancer-bronchopulmonaire',
        description: 'Silice cancérogène.',
        traitement: '- Prise en charge oncologique',
        clinique: '- Hémoptysie',
        paraclinique: '- Scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Maladie irréversible, souvent progressive même après l’arrêt de l’exposition ; mortalité liée à la tuberculose et à l’insuffisance respiratoire',
    urgences: [],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Toux', 'frequent'],
      ['Expectoration', 'frequent'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'ATS — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Repérer l’exposition, dépister la tuberculose, conseils',
        '- Dyspnée progressive, suspicion de tuberculose',
      ],
      hgr: ['- Radiographie, Xpert, spirométrie, traitement préventif', ''],
      tert: ['- Pneumologie, médecine du travail', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Silicose chronique simple',
        type: 'commune',
        description: 'Micronodules.',
        terrain: '- Mineur exposé > 10 ans',
        fonctionnels: '- Dyspnée d’effort, toux',
        generaux: '',
        physiques: '- Examen souvent normal',
        paraclinique: '- Micronodules des lobes supérieurs',
        etiologies: '- Silice',
        syndromes: [],
      },
      {
        nom: 'Fibrose massive progressive',
        type: 'gravite',
        description: 'Stade avancé.',
        terrain: '',
        fonctionnels: '- Dyspnée de repos',
        generaux: '- Amaigrissement',
        physiques: '- Cyanose, hippocratisme',
        paraclinique: '- Masses de fibrose, hypoxémie',
        etiologies: '',
        syndromes: ['syndrome-d-insuffisance-cardiaque-droite'],
      },
      {
        nom: 'Silicotuberculose',
        type: 'etiologique',
        description: 'Association fréquente.',
        terrain: '- Mineur, VIH',
        fonctionnels: '- Toux, hémoptysie',
        generaux: '- Fièvre, sueurs',
        physiques: '',
        paraclinique: '- Xpert positif',
        etiologies: '- M. tuberculosis',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
      },
    ],
  },

  // =================================================================== Lupus
  {
    ...RHUMATO,
    slug: 'lupus-erythemateux-systemique',
    nom: 'Lupus érythémateux systémique',
    resume:
      'Maladie auto-immune de la femme jeune, plus fréquente et plus sévère chez les sujets d’origine africaine : arthralgies, éruption photosensible, fièvre, cytopénies, atteinte rénale (néphrite lupique), sérites ; anticorps antinucléaires et anti-ADN natif ; hydroxychloroquine pour tous, corticoïdes selon la gravité, immunosuppresseurs pour les atteintes graves ; photoprotection, contraception adaptée.',
    definition:
      'Maladie auto-immune systémique chronique caractérisée par la production d’auto-anticorps dirigés contre des constituants du noyau, évoluant par poussées et pouvant toucher la peau, les articulations, les reins, le sang, les séreuses et le système nerveux.',
    physiopathologie:
      '## Mécanismes\n- Perte de tolérance, auto-anticorps (antinucléaires, anti-ADN natif), complexes immuns, activation du complément\n- Facteurs : génétiques, hormonaux (femme en âge de procréer), environnementaux (UV, infections, médicaments)\n\n## Atteintes\n- Peau (vespertilio, photosensibilité), articulations, **reins**, sang (anémie hémolytique, leucopénie, thrombopénie), séreuses (péricardite, pleurésie), système nerveux',
    diagnostic:
      '## Clinique\n- **Arthralgies** ou arthrites non érosives, **éruption en ailes de papillon**, **photosensibilité**, ulcérations buccales, alopécie\n- Fièvre, fatigue, amaigrissement\n- Péricardite, pleurésie, œdèmes et HTA (néphrite), convulsions ou psychose\n\n## Examens\n- **Anticorps antinucléaires** (sensibles), **anti-ADN natif** et anti-Sm (spécifiques), complément C3-C4 bas\n- **NFS** (cytopénies), **bandelette urinaire**, protéinurie, créatinine\n- Test VIH, tuberculose, paludisme (diagnostics différentiels et risques infectieux)\n- Biopsie rénale si protéinurie > 0,5 g/24 h',
    examens: [
      ['confirmation', 'anticorps-antinucleaires', 'Antinucléaires, anti-ADN natif.'],
      ['premiere_intention', 'nfs', 'Cytopénies.'],
      ['premiere_intention', 'complement-c3-c4', 'Activité de la maladie.'],
      ['premiere_intention', 'bandelette-urinaire', 'Atteinte rénale.'],
      ['premiere_intention', 'proteinurie', 'Néphrite lupique.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'vitesse-sedimentation', 'Inflammation.'],
      ['etiologique', 'tdr-vih', 'Diagnostic différentiel.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Biopsie rénale.'],
    ],
    scores: [],
    differentiels: [
      ['polyarthrite-rhumatoide', 'Arthrites érosives, facteur rhumatoïde.'],
      ['infection-vih', 'Cytopénies, fièvre, éruptions.'],
      ['tuberculose-extrapulmonaire', 'Sérites, fièvre prolongée.'],
      ['Lupus médicamenteux', 'Hydralazine, isoniazide.'],
      ['rhumatisme-articulaire-aigu-adulte', 'Antécédent streptococcique.'],
    ],
    etiologies: '## Terrain\n- Femme de 15 à 45 ans, origine africaine, antécédents familiaux',
    principes: [
      [
        'Traitement de fond',
        'Pour tous les patients.',
        '- **Hydroxychloroquine** ≤ 5 mg/kg/j (200–400 mg/j), à vie, y compris pendant la grossesse ; surveillance ophtalmologique\n- **Photoprotection**, arrêt du tabac, vaccinations, contraception (éviter les œstrogènes si anticorps antiphospholipides)',
      ],
      [
        'Poussées',
        'Contrôler l’inflammation.',
        '- Formes cutanéo-articulaires : AINS courte durée, **prednisolone** ≤ 0,5 mg/kg/j puis décroissance vers ≤ 5 mg/j\n- Formes graves (rein, système nerveux, cytopénies sévères) : **méthylprednisolone** IV puis prednisolone + **cyclophosphamide** ou mycophénolate (centre spécialisé), puis **azathioprine** en entretien\n- Néphrite : IEC, contrôle tensionnel',
      ],
      [
        'Suivi',
        'Prévenir les complications.',
        '- Bandelette, tension, NFS, créatinine régulières ; dépistage de la tuberculose avant immunosuppression\n- Grossesse programmée en période de rémission, suivi conjoint',
      ],
    ],
    molecules: [
      ['hydroxychloroquine', 'premiere', 'Traitement de fond'],
      ['prednisolone', 'premiere', 'Poussées'],
      ['methylprednisolone', 'alternative', 'Formes graves'],
      ['cyclophosphamide', 'alternative', 'Néphrite, atteinte neurologique'],
      ['azathioprine', 'alternative', 'Entretien, épargne cortisonique'],
      ['enalapril', 'adjuvant', 'Néphrite lupique'],
    ],
    complications: [
      {
        nom: 'Néphrite lupique',
        fiche: 'glomerulonephrites-aigues-adulte',
        description: 'Atteinte rénale grave.',
        traitement: '- Immunosuppresseurs, IEC',
        clinique: '- Œdèmes, HTA',
        paraclinique: '- Protéinurie, biopsie',
      },
      {
        nom: 'Infections',
        fiche: 'tuberculose-pulmonaire',
        description: 'Immunosuppression.',
        traitement: '- Dépistage, prophylaxies',
        clinique: '- Fièvre',
        paraclinique: '',
      },
      {
        nom: 'Péricardite et pleurésie',
        fiche: 'pericardite-aigue-et-tamponnade',
        description: 'Sérites.',
        traitement: '- Corticoïdes',
        clinique: '- Douleur thoracique',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Complications de la grossesse',
        description: 'Fausses couches, pré-éclampsie, lupus néonatal.',
        traitement: '- Suivi spécialisé, aspirine',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 10 ans > 80 % avec un traitement adapté ; pronostic dominé par l’atteinte rénale et les infections',
    urgences: [],
    symptomes: [
      ['Arthralgies', 'tres_frequent'],
      ['Éruption cutanée', 'frequent'],
      ['Photosensibilité', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Asthénie', 'tres_frequent'],
      ['Œdèmes', 'occasionnel'],
      ['Douleur thoracique', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Suspecter chez la femme jeune, bandelette, orientation',
        '- Œdèmes, protéinurie, cytopénies, convulsions',
      ],
      hgr: ['- Bilan, hydroxychloroquine, corticoïdes', '- Formes graves'],
      tert: ['- Médecine interne, néphrologie, immunosuppresseurs', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Lupus cutanéo-articulaire',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Femme jeune',
        fonctionnels: '- Arthralgies, éruption photosensible',
        generaux: '- Fatigue, fébricule',
        physiques: '- Vespertilio, arthrites',
        paraclinique: '- Antinucléaires positifs',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Néphrite lupique',
        type: 'gravite',
        description: 'Atteinte rénale.',
        terrain: '',
        fonctionnels: '- Œdèmes',
        generaux: '- HTA',
        physiques: '',
        paraclinique: '- Protéinurie, hématurie, C3 bas',
        etiologies: '',
        syndromes: ['syndrome-oedemateux'],
      },
      {
        nom: 'Lupus et grossesse',
        type: 'terrain',
        description: 'Risques materno-fœtaux.',
        terrain: '- Grossesse',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Anticorps antiphospholipides, anti-SSA',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Spondyloarthrites
  {
    ...RHUMATO,
    slug: 'spondyloarthrites',
    nom: 'Spondyloarthrites',
    resume:
      'Rhumatismes inflammatoires du rachis, du bassin et des enthèses (spondylarthrite ankylosante, arthrite réactionnelle, rhumatisme psoriasique, arthrites du VIH) : lombalgies inflammatoires (nocturnes, raideur matinale améliorée par l’effort), talalgies, arthrites asymétriques des membres inférieurs ; éliminer le mal de Pott ; AINS et kinésithérapie, sulfasalazine ou méthotrexate pour les formes périphériques.',
    definition:
      'Groupe de rhumatismes inflammatoires chroniques touchant le squelette axial (sacro-iliaques, rachis) et/ou périphérique, avec enthésites et manifestations extra-articulaires (uvéite, psoriasis, entérite).',
    physiopathologie:
      '## Mécanismes\n- Inflammation des enthèses et des sacro-iliaques, ossification progressive (syndesmophytes, ankylose)\n- Terrain génétique (HLA-B27, moins fréquent chez les sujets d’origine africaine)\n\n## Formes\n- Spondylarthrite ankylosante, rhumatisme psoriasique, **arthrite réactionnelle** (après chlamydia, salmonelle, shigelle), arthrites des entéropathies, **arthrites liées au VIH**',
    diagnostic:
      '## Clinique\n- **Lombalgie inflammatoire** : début insidieux avant 40 ans, réveils nocturnes, **raideur matinale** > 30 min, amélioration par l’exercice\n- Fessalgies à bascule, **talalgies** (enthésites), dactylite\n- Arthrites asymétriques des grosses articulations des membres inférieurs\n- Uvéite antérieure, psoriasis, diarrhée, urétrite récente\n\n## Examens\n- CRP, VS ; **radiographie** du bassin (sacro-iliite) et du rachis\n- Test VIH, ECBU, sérologie syphilis selon le contexte\n- Éliminer une **tuberculose vertébrale** (Pott) ou une brucellose devant une atteinte unilatérale ou fébrile',
    examens: [
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'vitesse-sedimentation', 'Inflammation.'],
      ['confirmation', 'radiographie-osseuse', 'Sacro-iliite, syndesmophytes.'],
      ['deuxieme_intention', 'irm-osteo-articulaire', 'Sacro-iliite précoce.'],
      ['etiologique', 'tdr-vih', 'Arthrite du VIH.'],
      ['etiologique', 'ponction-articulaire', 'Éliminer une arthrite septique.'],
    ],
    scores: [],
    differentiels: [
      ['mal-de-pott', 'Fièvre, abcès, atteinte discovertébrale.'],
      ['lombalgie-et-sciatique', 'Lombalgie mécanique.'],
      ['polyarthrite-rhumatoide', 'Atteinte symétrique des petites articulations.'],
      ['goutte', 'Crises aiguës, uricémie, tophus.'],
      ['arthrite-septique', 'Monoarthrite fébrile, liquide purulent.'],
    ],
    etiologies:
      '## Terrain\n- Homme jeune, antécédents familiaux, psoriasis, infection génito-urinaire ou digestive récente, VIH',
    principes: [
      [
        'Traitement de première ligne',
        'Soulager et préserver la mobilité.',
        '- **AINS** à dose efficace (ibuprofène, diclofénac), en continu si maladie active, avec protection gastrique si besoin\n- **Kinésithérapie** et exercices quotidiens d’extension du rachis\n- Infiltrations locales des enthésites ou arthrites (triamcinolone)',
      ],
      [
        'Formes périphériques',
        'Contrôler les arthrites.',
        '- **Sulfasalazine** 2–3 g/j ou **méthotrexate** 10–25 mg/semaine (avec acide folique)\n- Arthrite réactionnelle : traitement de l’infection déclenchante (urétrite) ; souvent résolutive\n- Formes axiales sévères : biothérapies anti-TNF (centres spécialisés, après dépistage de la tuberculose)',
      ],
      [
        'Patient VIH',
        'Traiter le terrain.',
        '- ARV ; prudence avec le méthotrexate (cytopénies) ; éliminer les infections',
      ],
    ],
    molecules: [
      ['ibuprofene', 'premiere', 'AINS'],
      ['diclofenac', 'alternative', 'AINS'],
      ['sulfasalazine', 'deuxieme', 'Atteinte périphérique'],
      ['methotrexate', 'deuxieme', 'Atteinte périphérique, psoriasis'],
      ['acide-folique', 'adjuvant', 'Avec méthotrexate'],
      ['omeprazole', 'adjuvant', 'Protection gastrique'],
      ['triamcinolone', 'adjuvant', 'Infiltrations'],
    ],
    complications: [
      {
        nom: 'Ankylose rachidienne',
        description: 'Ossification progressive.',
        traitement: '- Kinésithérapie, posture',
        clinique: '- Raideur, cyphose',
        paraclinique: '- Syndesmophytes',
      },
      {
        nom: 'Uvéite antérieure',
        fiche: 'oeil-rouge-demarche',
        description: 'Manifestation extra-articulaire.',
        traitement: '- Corticoïdes locaux, avis ophtalmologique',
        clinique: '- Œil rouge douloureux',
        paraclinique: '',
      },
      {
        nom: 'Fractures rachidiennes',
        description: 'Rachis ankylosé fragile.',
        traitement: '- Immobilisation, chirurgie',
        clinique: '- Douleur après traumatisme minime',
        paraclinique: '- Scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Évolution par poussées ; handicap variable, limité par l’exercice et le traitement',
    urgences: [],
    symptomes: [
      ['Douleur lombaire', 'tres_frequent'],
      ['Raideur matinale', 'tres_frequent'],
      ['Douleur rachidienne', 'frequent'],
      ['Gonflement articulaire', 'frequent'],
      ['Yeux rouges', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- AINS, exercices, orientation', '- Fièvre, déficit neurologique, uvéite'],
      hgr: ['- Radiographies, éliminer un Pott, sulfasalazine', ''],
      tert: ['- Rhumatologie, biothérapies', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Spondylarthrite ankylosante',
        type: 'commune',
        description: 'Forme axiale.',
        terrain: '- Homme jeune',
        fonctionnels: '- Lombalgie inflammatoire, fessalgies',
        generaux: '',
        physiques: '- Raideur rachidienne',
        paraclinique: '- Sacro-iliite',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Arthrite réactionnelle',
        type: 'etiologique',
        description: 'Après une infection.',
        terrain: '- Urétrite ou diarrhée récente',
        fonctionnels: '- Arthrite aiguë des genoux, chevilles',
        generaux: '- Fébricule',
        physiques: '- Conjonctivite, urétrite',
        paraclinique: '- CRP élevée',
        etiologies: '- Chlamydia, salmonelle, shigelle',
        syndromes: [],
      },
      {
        nom: 'Rhumatisme psoriasique',
        type: 'etiologique',
        description: 'Associé au psoriasis.',
        terrain: '- Psoriasis',
        fonctionnels: '- Dactylite, arthrites',
        generaux: '',
        physiques: '- Plaques, atteinte unguéale',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Lombalgie
  {
    ...RHUMATO,
    slug: 'lombalgie-et-sciatique',
    nom: 'Lombalgie et sciatique',
    resume:
      'Motif très fréquent, le plus souvent commun et bénin (mécanique) : rester actif, antalgiques et AINS de courte durée, pas de repos prolongé, kinésithérapie ; rechercher les drapeaux rouges (fièvre, tuberculose vertébrale, cancer, traumatisme, déficit moteur, syndrome de la queue de cheval) ; sciatique par hernie discale souvent favorable en 6 à 12 semaines ; queue de cheval = chirurgie urgente.',
    definition:
      'Douleur de la région lombaire (lombalgie), avec ou sans irradiation radiculaire dans le membre inférieur (sciatique L5 ou S1, cruralgie L3–L4), le plus souvent liée à une pathologie discale ou articulaire dégénérative.',
    physiopathologie:
      '## Lombalgie commune\n- Discopathie, arthrose articulaire postérieure, contractures, facteurs ergonomiques (port de charges) et psychosociaux\n\n## Sciatique\n- **Hernie discale** comprimant une racine (L5 : dos du pied, gros orteil ; S1 : plante, bord externe)\n- Canal lombaire étroit (sujet âgé)\n\n## Lombalgies symptomatiques (à ne pas manquer)\n- **Mal de Pott**, spondylodiscite, métastases (prostate, sein), myélome, fractures, anévrisme de l’aorte, pyélonéphrite',
    diagnostic:
      '## Drapeaux rouges\n- **Fièvre**, altération de l’état général, antécédent de cancer, VIH ou tuberculose\n- Douleur **non mécanique** (nocturne, permanente), âge < 20 ou > 50 ans au début\n- **Traumatisme** significatif, corticothérapie (fracture)\n- **Déficit moteur**, troubles sphinctériens, **anesthésie en selle** (queue de cheval)\n\n## Examen\n- Signe de Lasègue, réflexes, force, sensibilité, palpation rachidienne\n\n## Examens\n- **Aucun** examen pour une lombalgie commune de moins de 6 semaines sans drapeau rouge\n- Drapeau rouge : NFS, CRP/VS, radiographie, IRM, Xpert/biopsie (Pott), PSA, électrophorèse',
    examens: [
      ['deuxieme_intention', 'radiographie-osseuse', 'Drapeaux rouges, lombalgie persistante.'],
      ['deuxieme_intention', 'irm-rachidienne', 'Déficit, queue de cheval, infection, tumeur.'],
      ['etiologique', 'crp', 'Infection, inflammation.'],
      ['etiologique', 'vitesse-sedimentation', 'Pott, myélome.'],
      ['etiologique', 'nfs', 'Infection, myélome.'],
      ['etiologique', 'psa', 'Métastases prostatiques.'],
      ['etiologique', 'electrophorese-proteines', 'Myélome.'],
    ],
    scores: [],
    differentiels: [
      ['mal-de-pott', 'Fièvre, sueurs, atteinte discovertébrale.'],
      ['spondyloarthrites', 'Lombalgie inflammatoire du sujet jeune.'],
      ['myelome-multiple', 'Sujet âgé, anémie, pic monoclonal.'],
      ['cancer-de-la-prostate', 'Métastases vertébrales.'],
      ['lithiase-urinaire-colique-nephretique', 'Colique néphrétique.'],
      ['compression-medullaire', 'Déficit des deux membres, niveau sensitif.'],
    ],
    etiologies:
      '## Facteurs\n- Port de charges lourdes, travaux agricoles, conduite prolongée, sédentarité, obésité, stress',
    principes: [
      [
        'Lombalgie commune',
        'Soulager et rester actif.',
        '- **Rester actif**, éviter le repos au lit prolongé\n- **Paracétamol** (efficacité modeste), **AINS** de courte durée (ibuprofène), myorelaxants brièvement si contractures\n- Chaleur locale, exercices, kinésithérapie ; éducation (pronostic favorable)',
      ],
      [
        'Sciatique',
        'Attendre la régression.',
        '- Même prise en charge, antalgiques adaptés ; douleur neuropathique : **amitriptyline** ou gabapentine\n- Infiltration épidurale de corticoïdes possible\n- **Chirurgie** si déficit moteur, douleur hyperalgique résistante ou échec après 6–12 semaines',
      ],
      [
        'Urgences',
        'Ne pas retarder.',
        '- **Syndrome de la queue de cheval** (troubles sphinctériens, anesthésie en selle) : IRM et **chirurgie en urgence**\n- Déficit moteur sévère ou progressif : avis chirurgical urgent\n- Drapeau rouge infectieux ou tumoral : bilan et traitement de la cause',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Antalgie'],
      ['ibuprofene', 'premiere', 'AINS de courte durée'],
      ['diclofenac', 'alternative', 'AINS'],
      ['thiocolchicoside', 'adjuvant', 'Contractures (courte durée)'],
      ['amitriptyline', 'adjuvant', 'Douleur radiculaire neuropathique'],
      ['tramadol', 'alternative', 'Douleur intense'],
    ],
    complications: [
      {
        nom: 'Syndrome de la queue de cheval',
        fiche: 'compression-medullaire',
        description: 'Hernie volumineuse.',
        traitement: '- Chirurgie urgente',
        clinique: '- Rétention, anesthésie en selle',
        paraclinique: '- IRM',
      },
      {
        nom: 'Sciatique paralysante',
        description: 'Déficit moteur.',
        traitement: '- Chirurgie rapide',
        clinique: '- Steppage, déficit',
        paraclinique: '- IRM',
      },
      {
        nom: 'Lombalgie chronique',
        description: '> 3 mois.',
        traitement: '- Réhabilitation, prise en charge psychosociale',
        clinique: '- Douleur persistante',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Amélioration en quelques semaines dans 90 % des cas ; récidives fréquentes',
    urgences: [],
    symptomes: [
      ['Douleur lombaire', 'tres_frequent'],
      ['Douleur rachidienne', 'tres_frequent'],
      ['Troubles sensitifs', 'frequent'],
      ['Troubles de la marche', 'occasionnel'],
      ['Troubles sphinctériens', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Recherche des drapeaux rouges, antalgiques, conseils',
        '- Drapeau rouge, déficit, troubles sphinctériens',
      ],
      hgr: ['- Radiographies, bilan des lombalgies symptomatiques', '- IRM, chirurgie'],
      tert: ['- Neurochirurgie, rhumatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Lombalgie commune aiguë',
        type: 'commune',
        description: 'Lumbago.',
        terrain: '- Adulte, effort de soulèvement',
        fonctionnels: '- Douleur lombaire mécanique',
        generaux: '- Pas de fièvre',
        physiques: '- Raideur, contracture',
        paraclinique: '- Aucun examen nécessaire',
        etiologies: '- Discale, musculaire',
        syndromes: [],
      },
      {
        nom: 'Sciatique par hernie discale',
        type: 'topographique',
        description: 'Radiculalgie L5 ou S1.',
        terrain: '- Adulte de 30 à 50 ans',
        fonctionnels: '- Douleur irradiant dans la jambe',
        generaux: '',
        physiques: '- Lasègue positif',
        paraclinique: '- Hernie à l’IRM',
        etiologies: '- Hernie discale',
        syndromes: [],
      },
      {
        nom: 'Lombalgie symptomatique',
        type: 'gravite',
        description: 'Infection, tumeur, fracture.',
        terrain: '- VIH, cancer, âge > 50 ans',
        fonctionnels: '- Douleur nocturne',
        generaux: '- Fièvre, amaigrissement',
        physiques: '- Déficit',
        paraclinique: '- Lésion vertébrale',
        etiologies: '- Pott, métastases, myélome',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Ostéoporose
  {
    ...RHUMATO,
    slug: 'osteoporose',
    nom: 'Ostéoporose',
    resume:
      'Fragilité osseuse exposant aux fractures (col du fémur, vertèbres, poignet) chez la femme ménopausée, le sujet âgé, le patient sous corticoïdes au long cours ou ténofovir : diagnostic sur une fracture de fragilité ou l’ostéodensitométrie ; calcium et vitamine D, prévention des chutes, bisphosphonates (alendronate 70 mg/semaine ou acide zolédronique 5 mg/an) après une fracture.',
    definition:
      'Maladie diffuse du squelette caractérisée par une masse osseuse basse et une altération de la microarchitecture, entraînant une fragilité osseuse et un risque accru de fracture ; diagnostic densitométrique : T-score ≤ −2,5.',
    physiopathologie:
      '## Facteurs\n- **Ménopause**, âge, faible poids, antécédent de fracture, antécédents familiaux\n- **Corticothérapie** prolongée (≥ 7,5 mg/j de prednisolone > 3 mois), hyperthyroïdie, hypogonadisme\n- Carences en calcium et vitamine D, sédentarité, tabac, alcool\n- **VIH** et ténofovir disoproxil, insuffisance rénale chronique, drépanocytose',
    diagnostic:
      '## Clinique\n- Souvent silencieuse jusqu’à la **fracture de fragilité** (chute de sa hauteur) : poignet, **vertèbres** (dorsalgie, perte de taille, cyphose), **col du fémur**\n\n## Examens\n- **Ostéodensitométrie** (si disponible) : T-score ≤ −2,5\n- Radiographies (tassements vertébraux)\n- Bilan d’ostéoporose secondaire : NFS, VS, calcémie, phosphorémie, créatinine, TSH, électrophorèse des protéines (myélome), vitamine D si disponible\n- Éliminer une métastase ou un myélome devant un tassement',
    examens: [
      ['confirmation', 'densitometrie-osseuse', 'T-score ≤ −2,5.'],
      ['premiere_intention', 'radiographie-osseuse', 'Fractures, tassements.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Avant traitement.'],
      ['premiere_intention', 'creatinine', 'Avant bisphosphonate.'],
      ['etiologique', 'tsh', 'Hyperthyroïdie.'],
      ['etiologique', 'electrophorese-proteines', 'Myélome.'],
      ['etiologique', 'vitesse-sedimentation', 'Cause secondaire.'],
    ],
    scores: [],
    differentiels: [
      ['myelome-multiple', 'Tassements avec anémie, pic monoclonal.'],
      ['cancer-de-la-prostate', 'Métastases vertébrales.'],
      ['mal-de-pott', 'Atteinte discovertébrale infectieuse.'],
      ['Ostéomalacie', 'Carence sévère en vitamine D, douleurs diffuses, phosphatases alcalines élevées.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Femme ménopausée, âge > 70 ans, corticothérapie, faible poids, VIH (ténofovir), alcool, tabac',
    principes: [
      [
        'Mesures générales',
        'Pour tous.',
        '- **Calcium** 1 000–1 200 mg/j (alimentation, supplément si insuffisant) et **vitamine D** 800–1 000 UI/j\n- Activité physique en charge, arrêt du tabac et de l’alcool\n- **Prévention des chutes** : vision, éclairage, chaussures, révision des sédatifs et antihypertenseurs',
      ],
      [
        'Traitement médicamenteux',
        'Réduire le risque de fracture.',
        '- Indications : fracture de fragilité, T-score ≤ −2,5, corticothérapie prolongée à risque\n- **Acide alendronique** 70 mg/semaine (à jeun, debout 30 min) ou **acide zolédronique** 5 mg IV une fois par an (hydratation, DFG ≥ 35)\n- Durée 3 à 5 ans puis réévaluation',
      ],
      [
        'Fracture',
        'Traiter et prévenir la suivante.',
        '- Prise en charge orthopédique (col du fémur), antalgie, mobilisation précoce, puis traitement de l’ostéoporose',
      ],
    ],
    molecules: [
      ['calcium', 'premiere', 'Supplément si apports insuffisants'],
      ['cholecalciferol-vitamine-d3', 'premiere', 'Vitamine D'],
      ['acide-alendronique', 'premiere', 'Bisphosphonate oral'],
      ['acide-zoledronique', 'alternative', 'Bisphosphonate IV annuel'],
      ['paracetamol', 'adjuvant', 'Douleur des fractures'],
    ],
    complications: [
      {
        nom: 'Fracture du col du fémur',
        fiche: 'fracture-col-du-femur',
        description: 'Complication la plus grave.',
        traitement: '- Chirurgie, rééducation',
        clinique: '- Impotence après chute',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Tassements vertébraux',
        description: 'Fractures vertébrales.',
        traitement: '- Antalgie, corset, traitement de fond',
        clinique: '- Dorsalgie, cyphose',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Le risque de nouvelle fracture est élevé dans l’année suivant une première fracture ; réduit de 40 à 70 % par le traitement',
    urgences: [],
    symptomes: [
      ['Douleur rachidienne', 'frequent'],
      ['Douleurs osseuses', 'frequent'],
      ['Déformation d’un membre', 'occasionnel'],
      ['Impotence fonctionnelle', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
      'AAOS — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Calcium, vitamine D, prévention des chutes', '- Fracture de fragilité'],
      hgr: ['- Radiographies, bilan, bisphosphonates', ''],
      tert: ['- Ostéodensitométrie, rhumatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ostéoporose post-ménopausique',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Femme ménopausée',
        fonctionnels: '- Souvent silencieuse',
        generaux: '',
        physiques: '- Perte de taille, cyphose',
        paraclinique: '- T-score ≤ −2,5',
        etiologies: '- Carence œstrogénique',
        syndromes: [],
      },
      {
        nom: 'Ostéoporose cortisonique',
        type: 'etiologique',
        description: 'Corticothérapie prolongée.',
        terrain: '- Corticoïdes au long cours',
        fonctionnels: '- Tassements',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Corticoïdes',
        syndromes: [],
      },
      {
        nom: 'Ostéoporose compliquée de fracture',
        type: 'gravite',
        description: 'Fracture de fragilité.',
        terrain: '- Sujet âgé',
        fonctionnels: '- Douleur, impotence',
        generaux: '',
        physiques: '- Déformation',
        paraclinique: '- Fracture',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Tendinopathies
  {
    ...RHUMATO,
    slug: 'tendinopathies-epaule-douloureuse',
    nom: 'Tendinopathies et épaule douloureuse',
    resume:
      'Douleurs des tendons (coiffe des rotateurs, épicondylite, tendinite de De Quervain, tendon d’Achille), très fréquentes chez les travailleurs manuels et les diabétiques : diagnostic clinique ; repos relatif, AINS de courte durée, kinésithérapie, infiltration de corticoïdes si besoin ; capsulite rétractile (épaule gelée) du diabétique ; rupture de coiffe ou fièvre = avis spécialisé.',
    definition:
      'Atteintes dégénératives ou inflammatoires des tendons et de leurs insertions ; l’épaule douloureuse regroupe la tendinopathie de la coiffe des rotateurs, la bursite, la capsulite rétractile et les ruptures tendineuses.',
    physiopathologie:
      '## Mécanismes\n- Microtraumatismes répétés (gestes répétitifs, port de charges, travaux agricoles), vieillissement tendineux\n- Conflit sous-acromial, calcifications\n- **Capsulite rétractile** : diabète, immobilisation, AVC\n- Fluoroquinolones (tendinopathie d’Achille, rupture), corticoïdes',
    diagnostic:
      '## Clinique\n- **Épaule** : douleur à l’élévation et à l’abduction, nocturne (couché sur l’épaule) ; arc douloureux ; perte de force si rupture ; **raideur globale** active et passive dans la capsulite\n- **Coude** : épicondylite (tennis-elbow) ; **poignet** : De Quervain (pouce) ; **cheville** : tendon d’Achille\n- Éliminer : arthrite septique (fièvre), douleur projetée (cardiaque, cervicale, pulmonaire)\n\n## Examens\n- Diagnostic clinique ; **échographie** (rupture, calcification) ; radiographie (calcifications, arthrose) ; glycémie',
    examens: [
      ['deuxieme_intention', 'echographie-parties-molles', 'Rupture tendineuse, bursite, calcification.'],
      ['deuxieme_intention', 'radiographie-osseuse', 'Calcifications, arthrose.'],
      ['etiologique', 'glycemie', 'Diabète (capsulite).'],
      ['etiologique', 'crp', 'Arthrite inflammatoire ou septique.'],
    ],
    scores: [],
    differentiels: [
      ['arthrite-septique', 'Fièvre, articulation chaude, ponction.'],
      ['syndrome-coronarien-aigu-sans-st', 'Douleur de l’épaule gauche d’origine cardiaque.'],
      ['Névralgie cervicobrachiale', 'Douleur radiculaire, cervicalgie.'],
      ['goutte', 'Crise inflammatoire aiguë.'],
      ['polyarthrite-rhumatoide', 'Atteinte bilatérale et symétrique.'],
    ],
    etiologies:
      '## Facteurs\n- Gestes répétitifs, travail manuel, sport, âge > 40 ans, diabète, fluoroquinolones',
    principes: [
      [
        'Traitement initial',
        'Soulager.',
        '- **Repos relatif** (éviter les gestes douloureux sans immobilisation stricte), glace\n- **AINS** de courte durée (ibuprofène, gel de kétoprofène) ou paracétamol',
      ],
      [
        'Rééducation et infiltration',
        'Récupérer la fonction.',
        '- **Kinésithérapie** (étirements, renforcement excentrique), adaptation du poste de travail\n- **Infiltration** de corticoïde (triamcinolone 40 mg) si douleur persistante, pas plus de 3 par an, jamais dans le tendon d’Achille\n- Capsulite : antalgie, rééducation douce prolongée, évolution sur 1 à 2 ans',
      ],
      [
        'Avis spécialisé',
        'Situations particulières.',
        '- Rupture traumatique de la coiffe chez le sujet jeune, échec après 3–6 mois, rupture du tendon d’Achille : chirurgie',
      ],
    ],
    molecules: [
      ['ibuprofene', 'premiere', 'AINS'],
      ['ketoprofene', 'alternative', 'Gel local'],
      ['paracetamol', 'premiere', 'Antalgie'],
      ['triamcinolone', 'deuxieme', 'Infiltration'],
    ],
    complications: [
      {
        nom: 'Rupture tendineuse',
        description: 'Coiffe, tendon d’Achille.',
        traitement: '- Chirurgie selon l’âge et la fonction',
        clinique: '- Perte de force brutale',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Capsulite rétractile',
        description: 'Raideur de l’épaule.',
        traitement: '- Rééducation prolongée',
        clinique: '- Limitation globale',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Favorable en quelques semaines à mois dans la majorité des cas ; récidives si les gestes en cause persistent',
    urgences: [],
    symptomes: [
      ['Douleur de l’épaule', 'tres_frequent'],
      ['Arthralgies', 'frequent'],
      ['Impotence fonctionnelle', 'frequent'],
    ],
    sources: [
      'AAOS — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- AINS, repos relatif, conseils', '- Échec, perte de force, fièvre'],
      hgr: ['- Échographie, infiltration, kinésithérapie', ''],
      tert: ['- Orthopédie, chirurgie de la coiffe', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tendinopathie de la coiffe des rotateurs',
        type: 'commune',
        description: 'Épaule douloureuse simple.',
        terrain: '- Travailleur manuel > 40 ans',
        fonctionnels: '- Douleur à l’élévation, nocturne',
        generaux: '',
        physiques: '- Arc douloureux, mobilité passive conservée',
        paraclinique: '- Échographie : tendinopathie',
        etiologies: '- Surmenage',
        syndromes: [],
      },
      {
        nom: 'Capsulite rétractile',
        type: 'etiologique',
        description: 'Épaule gelée.',
        terrain: '- Diabète',
        fonctionnels: '- Douleur puis raideur',
        generaux: '',
        physiques: '- Limitation active et passive',
        paraclinique: '- Radiographie normale',
        etiologies: '- Diabète, immobilisation',
        syndromes: [],
      },
      {
        nom: 'Rupture de la coiffe',
        type: 'gravite',
        description: 'Perte de force.',
        terrain: '- Traumatisme, sujet âgé',
        fonctionnels: '- Impossibilité d’élever le bras',
        generaux: '',
        physiques: '- Déficit de force',
        paraclinique: '- Rupture à l’échographie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
