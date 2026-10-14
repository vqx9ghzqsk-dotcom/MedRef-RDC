'use strict';

/**
 * Lot 35 (phase 2, pneumologie) — abcès pulmonaire, dilatation des bronches, cancer
 * bronchopulmonaire. Rédigé par IA (BTS, ERS, ESMO, NCCN, MSF, ouvrages de référence) : à valider.
 */

const PNEUMO = { departement: 'medecine-interne', specialite: 'Pneumologie' };

module.exports = [
  // =================================================================== Abcès pulmonaire
  {
    ...PNEUMO,
    slug: 'abces-pulmonaire',
    nom: 'Abcès pulmonaire',
    resume:
      'Cavité purulente du parenchyme pulmonaire, souvent après inhalation (alcool, troubles de conscience, mauvaise hygiène dentaire) : fièvre, toux, expectoration abondante et fétide (vomique), image hydro-aérique ; rechercher la tuberculose et un cancer ; amoxicilline-acide clavulanique ou ceftriaxone + métronidazole (ou clindamycine) pendant 4 à 6 semaines, drainage postural, soins dentaires.',
    definition:
      'Collection suppurée nécrotique du parenchyme pulmonaire, formant une cavité à paroi épaisse, le plus souvent due à une infection à germes anaérobies et aérobies.',
    physiopathologie:
      '## Mécanismes\n- **Inhalation** de sécrétions oropharyngées (alcoolisme, épilepsie, coma, troubles de déglutition, mauvais état dentaire) : flore anaérobie mixte\n- Pneumonie nécrosante (Staphylococcus aureus, Klebsiella), emboles septiques (endocardite droite, toxicomanie)\n- Obstacle bronchique (cancer, corps étranger)\n- Immunodépression (VIH)',
    diagnostic:
      '## Clinique\n- Fièvre, frissons, altération de l’état général, toux\n- **Expectoration purulente abondante et fétide**, parfois **vomique** (rejet brutal de pus) ou hémoptysie\n- Mauvais état bucco-dentaire, hippocratisme digital si chronique\n\n## Examens\n- **Radiographie thoracique** : opacité ronde avec **niveau hydro-aérique**\n- **Xpert MTB/RIF** et bacilloscopies (tuberculose cavitaire), examen cytobactériologique de l’expectoration\n- NFS, CRP, hémocultures, test VIH, glycémie\n- **Scanner thoracique** et **fibroscopie** si évolution défavorable, sujet fumeur > 40 ans (cancer)',
    examens: [
      ['premiere_intention', 'radiographie-thoracique', 'Cavité avec niveau hydro-aérique.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose cavitaire.'],
      ['etiologique', 'bacilloscopie', 'Tuberculose.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation, suivi.'],
      ['etiologique', 'hemocultures', 'Germe.'],
      ['etiologique', 'tdr-vih', 'Immunodépression.'],
      ['deuxieme_intention', 'scanner-thoracique', 'Cavité, obstacle, empyème.'],
      ['deuxieme_intention', 'fibroscopie-bronchique', 'Obstacle tumoral, corps étranger.'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-pulmonaire', 'Cavernes, Xpert positif.'],
      ['cancer-bronchopulmonaire', 'Cancer excavé, fumeur.'],
      ['empyeme-thoracique', 'Collection pleurale (niveau sur toute la largeur).'],
      ['Kyste hydatique surinfecté', 'Zone d’élevage, sérologie.'],
      ['Aspergillome', 'Grelot dans une cavité ancienne.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Alcoolisme, troubles de conscience, épilepsie, mauvais état dentaire, VIH, diabète, toxicomanie IV',
    principes: [
      [
        'Antibiotiques prolongés',
        'Stériliser l’abcès.',
        '- **Amoxicilline-acide clavulanique** 1 g 3 fois par jour (IV puis per os), ou **ceftriaxone** 1–2 g/j + **métronidazole** 500 mg toutes les 8 h\n- Allergie : **clindamycine** 600 mg toutes les 8 h\n- Staphylocoque : **cloxacilline** ; durée totale **4 à 6 semaines** (jusqu’à régression radiologique)',
      ],
      [
        'Drainage',
        'Évacuer le pus.',
        '- Kinésithérapie, **drainage postural**\n- Drainage percutané ou chirurgie (résection) si échec, abcès > 6–8 cm, hémoptysie massive',
      ],
      [
        'Cause',
        'Prévenir la récidive.',
        '- **Soins dentaires**, sevrage alcoolique, traitement d’un obstacle bronchique',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Avec acide clavulanique'],
      ['acide-clavulanique', 'premiere', 'Avec amoxicilline'],
      ['ceftriaxone', 'alternative', 'Avec métronidazole'],
      ['metronidazole', 'alternative', 'Anaérobies'],
      ['clindamycine', 'alternative', 'Allergie à la pénicilline'],
      ['cloxacilline', 'deuxieme', 'Staphylocoque'],
    ],
    complications: [
      {
        nom: 'Empyème',
        fiche: 'empyeme-thoracique',
        description: 'Rupture dans la plèvre.',
        traitement: '- Drainage thoracique',
        clinique: '- Douleur, dyspnée',
        paraclinique: '- Épanchement',
      },
      {
        nom: 'Hémoptysie massive',
        description: 'Érosion vasculaire.',
        traitement: '- Embolisation, chirurgie',
        clinique: '- Hémoptysie abondante',
        paraclinique: '',
      },
      {
        nom: 'Évolution chronique et dilatation des bronches',
        fiche: 'dilatation-des-bronches',
        description: 'Traitement insuffisant.',
        traitement: '- Antibiotiques, chirurgie',
        clinique: '- Toux productive chronique',
        paraclinique: '- Scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison dans la majorité des cas sous antibiotiques prolongés ; plus grave chez l’immunodéprimé',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Toux', 'tres_frequent'],
      ['Expectoration', 'tres_frequent'],
      ['Haleine fétide', 'frequent'],
      ['Hémoptysie', 'occasionnel'],
      ['Perte de poids', 'frequent'],
      ['Douleur thoracique', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
      'ATS — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Antibiotiques, recherche de tuberculose, orientation', '- Fièvre persistante, hémoptysie'],
      hgr: ['- Radiographie, Xpert, antibiotiques IV, drainage postural', '- Échec, hémoptysie massive'],
      tert: ['- Scanner, fibroscopie, chirurgie thoracique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Abcès d’inhalation',
        type: 'commune',
        description: 'Flore anaérobie.',
        terrain: '- Alcoolique, mauvais état dentaire',
        fonctionnels: '- Toux, expectoration fétide',
        generaux: '- Fièvre, amaigrissement',
        physiques: '- Foyer de crépitants',
        paraclinique: '- Cavité avec niveau hydro-aérique',
        etiologies: '- Anaérobies',
        syndromes: ['syndrome-infectieux', 'syndrome-de-condensation-pulmonaire'],
      },
      {
        nom: 'Abcès staphylococcique',
        type: 'etiologique',
        description: 'Pneumonie nécrosante, emboles septiques.',
        terrain: '- Toxicomanie IV, grippe',
        fonctionnels: '- Dyspnée',
        generaux: '- Sepsis',
        physiques: '',
        paraclinique: '- Cavités multiples',
        etiologies: '- Staphylococcus aureus',
        syndromes: [],
      },
    ],
  },

  // =================================================================== DDB
  {
    ...PNEUMO,
    slug: 'dilatation-des-bronches',
    nom: 'Dilatation des bronches',
    resume:
      'Dilatations bronchiques permanentes, très fréquentes en RDC comme séquelles de tuberculose, de rougeole, de coqueluche ou de pneumonies répétées, et chez le patient VIH : toux productive chronique, bronchorrhée, exacerbations infectieuses, hémoptysies ; scanner thoracique ; kinésithérapie de drainage quotidienne, antibiotiques des exacerbations (14 jours), azithromycine au long cours si exacerbations fréquentes, vaccinations.',
    definition:
      'Augmentation permanente et irréversible du calibre des bronches, avec altération de la clairance mucociliaire, infections bronchiques chroniques et inflammation.',
    physiopathologie:
      '## Causes\n- **Post-infectieuses** : **tuberculose**, rougeole, coqueluche, pneumonies sévères de l’enfance\n- **VIH** (infections répétées, pneumopathie interstitielle lymphoïde de l’enfant)\n- Obstacle bronchique (corps étranger, tumeur), déficits immunitaires, mucoviscidose, dyskinésie ciliaire, aspergillose bronchopulmonaire allergique\n\n## Cercle vicieux\n- Infection → inflammation → destruction de la paroi → stase des sécrétions → infection',
    diagnostic:
      '## Clinique\n- **Toux productive chronique**, **bronchorrhée** quotidienne (souvent matinale), purulente\n- **Exacerbations** : majoration de la toux et de l’expectoration, fièvre, dyspnée\n- **Hémoptysies** (parfois abondantes), hippocratisme digital, râles bronchiques\n\n## Examens\n- **Scanner thoracique** (référence) : bronches dilatées, aspect en « bague à chaton »\n- Radiographie thoracique (souvent évocatrice), **Xpert MTB/RIF** (éliminer une tuberculose active)\n- Examen cytobactériologique des crachats (Pseudomonas, Haemophilus), spirométrie\n- Test VIH',
    examens: [
      ['confirmation', 'scanner-thoracique', 'Bronches dilatées.'],
      ['premiere_intention', 'radiographie-thoracique', 'Images en rail, kystiques.'],
      ['etiologique', 'xpert-mtb-rif', 'Éliminer une tuberculose active.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['deuxieme_intention', 'spirometrie', 'Trouble ventilatoire.'],
      ['premiere_intention', 'nfs', 'Exacerbation.'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-pulmonaire', 'Rechute ou réinfection : Xpert.'],
      ['bpco', 'Tabac, obstruction, peu de bronchorrhée.'],
      ['asthme', 'Sibilants, variabilité.'],
      ['abces-pulmonaire', 'Cavité aiguë avec niveau.'],
      ['cancer-bronchopulmonaire', 'Hémoptysie du fumeur, masse.'],
    ],
    etiologies:
      '## Terrain\n- Antécédents de tuberculose, de rougeole ou de coqueluche, VIH, pneumonies répétées',
    principes: [
      [
        'Désencombrement',
        'Base du traitement.',
        '- **Kinésithérapie respiratoire** et drainage postural quotidiens (techniques apprises au patient)\n- Hydratation ; sérum salé hypertonique nébulisé si disponible\n- Activité physique, arrêt du tabac',
      ],
      [
        'Exacerbations',
        'Traiter l’infection.',
        '- **Amoxicilline** 1 g 3 fois par jour (ou amoxicilline-acide clavulanique) pendant **14 jours**\n- Pseudomonas : **ciprofloxacine** 750 mg 2 fois par jour 14 jours\n- Adapter à l’examen des crachats',
      ],
      [
        'Prévention',
        'Réduire les exacerbations.',
        '- ≥ 3 exacerbations par an : **azithromycine** 250 mg 3 fois par semaine au long cours (après élimination d’une mycobactérie)\n- **Vaccinations** antigrippale et antipneumococcique\n- Chirurgie si lésions localisées et invalidantes ; embolisation si hémoptysie grave',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Exacerbations'],
      ['ciprofloxacine', 'alternative', 'Pseudomonas'],
      ['azithromycine', 'deuxieme', 'Prévention des exacerbations'],
      ['salbutamol', 'adjuvant', 'Bronchospasme'],
      ['acide-tranexamique', 'adjuvant', 'Hémoptysie'],
    ],
    complications: [
      {
        nom: 'Hémoptysie massive',
        description: 'Hypervascularisation bronchique.',
        traitement: '- Acide tranexamique, embolisation, chirurgie',
        clinique: '- Hémoptysie abondante',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Insuffisance respiratoire chronique',
        description: 'Formes diffuses.',
        traitement: '- Oxygène, réhabilitation',
        clinique: '- Dyspnée, cyanose',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Abcès et pneumonies',
        fiche: 'abces-pulmonaire',
        description: 'Surinfections.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Maladie chronique ; qualité de vie améliorée par le désencombrement et la prévention des exacerbations',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Expectoration', 'tres_frequent'],
      ['Hémoptysie', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'ATS — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Kinésithérapie, amoxicilline des exacerbations, Xpert', '- Hémoptysie, exacerbations répétées'],
      hgr: [
        '- Radiographie, examen des crachats, prise en charge des exacerbations',
        '- Scanner, hémoptysie massive',
      ],
      tert: ['- Pneumologie, embolisation, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'DDB séquellaire de tuberculose',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Antécédent de tuberculose',
        fonctionnels: '- Toux productive, bronchorrhée',
        generaux: '',
        physiques: '- Râles bronchiques',
        paraclinique: '- Bronches dilatées aux lobes supérieurs, Xpert négatif',
        etiologies: '- Tuberculose',
        syndromes: ['syndrome-bronchique-obstructif'],
      },
      {
        nom: 'Exacerbation infectieuse',
        type: 'evolutive',
        description: 'Majoration des symptômes.',
        terrain: '',
        fonctionnels: '- Expectoration accrue, purulente',
        generaux: '- Fièvre',
        physiques: '- Dyspnée',
        paraclinique: '- Hyperleucocytose',
        etiologies: '- Haemophilus, pneumocoque, Pseudomonas',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'DDB avec hémoptysie massive',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Hémoptysie abondante',
        generaux: '- Choc',
        physiques: '',
        paraclinique: '- Anémie aiguë',
        etiologies: '',
        syndromes: ['syndrome-d-hemorragie-interne'],
      },
    ],
  },

  // =================================================================== Cancer bronchopulmonaire
  {
    ...PNEUMO,
    slug: 'cancer-bronchopulmonaire',
    nom: 'Cancer bronchopulmonaire',
    resume:
      'Cancer du poumon lié surtout au tabac (aussi expositions minières : radon, silice, amiante), souvent confondu avec une tuberculose à frottis négatif : toux persistante, hémoptysie, douleur thoracique, amaigrissement chez un fumeur ; radiographie puis scanner, biopsie (fibroscopie, ponction) ; chirurgie des formes localisées, chimiothérapie à base de platine, thérapies ciblées si mutation, soins palliatifs.',
    definition:
      'Tumeur maligne primitive des bronches et du poumon : carcinomes non à petites cellules (adénocarcinome, épidermoïde) et carcinome à petites cellules.',
    physiopathologie:
      '## Facteurs de risque\n- **Tabac** (cigarettes, chanvre), tabagisme passif\n- **Mines** : radon (uranium), silice, amiante, arsenic (provinces minières)\n- Pollution intérieure (cuisson au bois et au charbon), antécédents de tuberculose (cicatrices)\n\n## Extension\n- Ganglions médiastinaux, plèvre, os, cerveau, foie, surrénales\n- Syndromes paranéoplasiques (hypercalcémie, SIADH)',
    diagnostic:
      '## Clinique\n- **Toux** persistante ou modifiée, **hémoptysie**, dyspnée, douleur thoracique\n- **Amaigrissement**, fatigue, pneumonies récidivantes du même territoire\n- Extension : dysphonie, syndrome cave supérieur, épanchement pleural, douleurs osseuses, signes neurologiques\n- **Toute « tuberculose » à Xpert négatif qui ne s’améliore pas chez un fumeur doit faire évoquer un cancer**\n\n## Examens\n- Radiographie puis **scanner thoracique** (et abdominal, cérébral selon les signes)\n- **Histologie** : **fibroscopie bronchique** avec biopsies, ponction transthoracique, ponction d’un ganglion ou de la plèvre\n- Xpert MTB/RIF (diagnostic différentiel), NFS, calcémie, bilan hépatique, créatinine\n- Recherche de mutations (EGFR, ALK) si disponible',
    examens: [
      ['premiere_intention', 'radiographie-thoracique', 'Opacité, atélectasie, épanchement.'],
      ['confirmation', 'scanner-thoracique', 'Tumeur, extension.'],
      ['confirmation', 'fibroscopie-bronchique', 'Biopsies.'],
      ['confirmation', 'biopsie-histologie', 'Type histologique.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose (diagnostic différentiel).'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypercalcémie.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie (SIADH).'],
      ['gravite', 'ponction-epanchement', 'Pleurésie maligne.'],
      ['gravite', 'scanner-cerebral', 'Métastases cérébrales.'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-pulmonaire', 'Xpert positif, réponse au traitement.'],
      ['abces-pulmonaire', 'Fièvre, cavité, réponse aux antibiotiques.'],
      ['pneumonie-communautaire-adulte', 'Régression sous antibiotiques (contrôle radiologique).'],
      ['sarcome-de-kaposi', 'Patient VIH, lésions cutanées.'],
      ['Métastases pulmonaires', 'Cancer primitif connu (sein, prostate, rein).'],
    ],
    etiologies:
      '## Facteurs de risque\n- Tabac, expositions minières (radon, silice, amiante), pollution intérieure, âge > 40 ans',
    principes: [
      [
        'Forme localisée',
        'Guérir.',
        '- **Chirurgie** (lobectomie) si stade précoce et état respiratoire compatible\n- Radiothérapie si inopérable ; chimiothérapie adjuvante selon le stade',
      ],
      [
        'Forme avancée',
        'Prolonger et soulager.',
        '- Chimiothérapie à base de **cisplatine** (ou carboplatine) associée selon l’histologie\n- Thérapie ciblée (**erlotinib** si mutation EGFR), immunothérapie (**atézolizumab**) dans les centres équipés\n- Carcinome à petites cellules : chimiothérapie (platine-étoposide) ± radiothérapie',
      ],
      [
        'Soins de support et palliatifs',
        'Qualité de vie.',
        '- Antalgie (**morphine**), oxygène, drainage pleural, radiothérapie antalgique\n- **Dexaméthasone** : métastases cérébrales, syndrome cave supérieur\n- Arrêt du tabac, nutrition, soutien',
      ],
    ],
    molecules: [
      ['cisplatine', 'premiere', 'Chimiothérapie'],
      ['erlotinib', 'alternative', 'Mutation EGFR'],
      ['atezolizumab', 'alternative', 'Immunothérapie (centres équipés)'],
      ['morphine', 'premiere', 'Douleurs, dyspnée'],
      ['dexamethasone', 'adjuvant', 'Métastases cérébrales, syndrome cave'],
      ['acide-zoledronique', 'adjuvant', 'Hypercalcémie, métastases osseuses'],
    ],
    complications: [
      {
        nom: 'Pleurésie maligne',
        fiche: 'pleuresie',
        description: 'Envahissement pleural.',
        traitement: '- Ponction, drainage, talcage',
        clinique: '- Dyspnée',
        paraclinique: '- Liquide hématique',
      },
      {
        nom: 'Syndrome cave supérieur',
        description: 'Compression médiastinale.',
        traitement: '- Corticoïdes, radiothérapie, chimiothérapie',
        clinique: '- Œdème en pèlerine, circulation collatérale',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Compression médullaire',
        fiche: 'compression-medullaire',
        description: 'Métastases vertébrales.',
        traitement: '- Dexaméthasone, radiothérapie',
        clinique: '- Paraparésie',
        paraclinique: '- IRM',
      },
      {
        nom: 'Hypercalcémie et hyponatrémie',
        fiche: 'hyponatremie',
        description: 'Syndromes paranéoplasiques.',
        traitement: '- Hydratation, acide zolédronique, restriction hydrique',
        clinique: '- Confusion',
        paraclinique: '- Ionogramme, calcémie',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 5 ans de 50–70 % pour les formes opérées précoces, < 10 % pour les formes avancées, majoritaires au diagnostic',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Hémoptysie', 'frequent'],
      ['Douleur thoracique', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Dysphonie', 'occasionnel'],
    ],
    sources: [
      'ESMO — recommandations de pratique clinique',
      'NCCN — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Suspecter chez le fumeur (hémoptysie, toux persistante), Xpert, orientation',
        '- Hémoptysie, amaigrissement, tuberculose qui ne guérit pas',
      ],
      hgr: ['- Radiographie, ponction pleurale, soins palliatifs', '- Scanner, fibroscopie'],
      tert: ['- Oncologie thoracique, chirurgie, radiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Carcinome non à petites cellules',
        type: 'commune',
        description: 'Adénocarcinome, épidermoïde.',
        terrain: '- Fumeur > 40 ans, mineur',
        fonctionnels: '- Toux, hémoptysie',
        generaux: '- Amaigrissement',
        physiques: '- Syndrome de condensation ou épanchement',
        paraclinique: '- Masse, histologie',
        etiologies: '- Tabac',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
      },
      {
        nom: 'Carcinome à petites cellules',
        type: 'etiologique',
        description: 'Évolution rapide.',
        terrain: '- Grand fumeur',
        fonctionnels: '- Dyspnée, toux',
        generaux: '- Altération rapide',
        physiques: '- Syndrome cave supérieur',
        paraclinique: '- Masse médiastinale, hyponatrémie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Cancer révélé par une pleurésie',
        type: 'gravite',
        description: 'Stade avancé.',
        terrain: '',
        fonctionnels: '- Dyspnée',
        generaux: '',
        physiques: '- Syndrome d’épanchement',
        paraclinique: '- Liquide hématique, cellules malignes',
        etiologies: '',
        syndromes: ['syndrome-d-epanchement-pleural-liquidien'],
      },
    ],
  },
];
