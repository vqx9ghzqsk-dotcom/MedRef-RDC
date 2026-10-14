'use strict';

/**
 * Lot 35 (phase 2, infectiologie et néphrologie) — leptospirose, grippe, pian, glomérulonéphrites
 * aiguës de l'adulte, néphropathie drépanocytaire, néphropathie hypertensive, urgences de
 * l'hémodialyse. Rédigé par IA (OMS, MSF, KDIGO, ouvrages de référence) : à valider.
 */

const INF = { departement: 'medecine-interne', specialite: 'Infectiologie' };
const NEPH = { departement: 'medecine-interne', specialite: 'Néphrologie' };

module.exports = [
  // =================================================================== Leptospirose
  {
    ...INF,
    slug: 'leptospirose',
    nom: 'Leptospirose',
    resume:
      'Zoonose transmise par l’eau ou la boue souillées par l’urine de rongeurs (inondations, agriculture, pêche, égouts) : fièvre brutale, myalgies des mollets, suffusion conjonctivale ; forme grave ictéro-hémorragique (maladie de Weil) avec insuffisance rénale et hémorragies pulmonaires ; traiter sans attendre la confirmation : doxycycline (forme simple), pénicilline G ou ceftriaxone IV (forme grave).',
    definition:
      'Infection bactérienne due aux spirochètes du genre Leptospira, transmise à l’homme par contact de la peau lésée ou des muqueuses avec de l’eau ou un sol contaminés par l’urine d’animaux infectés.',
    physiopathologie:
      '## Transmission\n- Réservoir : rats, chiens, bétail ; contact avec l’eau douce ou la boue contaminées (inondations, rizières, pêche, mines artisanales, égouts)\n\n## Mécanismes\n- Phase de dissémination (vascularite), puis phase immunitaire\n- Atteinte **rénale** (néphrite interstitielle, insuffisance rénale à diurèse conservée et hypokaliémie), **hépatique** (ictère sans grande cytolyse), **pulmonaire** (hémorragies alvéolaires), méningée, myocardique',
    diagnostic:
      '## Clinique\n- Incubation 5–14 jours ; **fièvre brutale**, frissons, céphalées intenses, **myalgies** (mollets), **suffusion conjonctivale**\n- Forme grave (maladie de Weil) : **ictère**, **insuffisance rénale**, **hémorragies** (pulmonaires : hémoptysie, détresse respiratoire), thrombopénie\n- Méningite lymphocytaire possible\n\n## Examens\n- **PCR** (sang, 1re semaine ; urines ensuite), **sérologie** (IgM, MAT)\n- NFS (thrombopénie, hyperleucocytose), créatinine, kaliémie, bilirubine, transaminases modérées, CPK élevées\n- **TDR paludisme** et hémocultures (diagnostics différentiels), radiographie thoracique',
    examens: [
      ['confirmation', 'serologie-leptospirose', 'PCR ou sérologie.'],
      ['premiere_intention', 'tdr-paludisme', 'Diagnostic différentiel majeur.'],
      ['premiere_intention', 'nfs', 'Thrombopénie, hyperleucocytose.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'ionogramme', 'Hypokaliémie.'],
      ['premiere_intention', 'bilan-hepatique', 'Ictère.'],
      ['gravite', 'cpk', 'Rhabdomyolyse.'],
      ['gravite', 'radiographie-thoracique', 'Hémorragie pulmonaire.'],
      ['etiologique', 'hemocultures', 'Diagnostic différentiel.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-grave', 'TDR positif (coïnfection possible).'],
      ['fievre-typhoide', 'Fièvre prolongée, troubles digestifs.'],
      ['hepatites-virales-aigues-a-et-e', 'Transaminases très élevées.'],
      ['fievre-jaune', 'Ictère, zone d’endémie, non vacciné.'],
      ['Dengue et autres arboviroses', 'Éruption, contexte épidémique.'],
      ['sepsis-et-choc-septique', 'Foyer bactérien.'],
    ],
    etiologies:
      '## Facteurs d’exposition\n- Inondations, agriculture, pêche, élevage, égouts, mines, baignades en eau douce, présence de rats',
    principes: [
      [
        'Antibiotiques précoces',
        'Sans attendre la confirmation.',
        '- **Forme simple** : **doxycycline** 100 mg 2 fois par jour 7 jours (enfant < 8 ans ou grossesse : **amoxicilline** ou **azithromycine**)\n- **Forme grave** : **benzylpénicilline** 1,5 MUI IV toutes les 6 h ou **ceftriaxone** 1–2 g/j IV pendant 7 jours\n- Réaction de Jarisch-Herxheimer possible au début',
      ],
      [
        'Soins de support',
        'Défaillances d’organes.',
        '- Réhydratation, correction de l’hypokaliémie, surveillance de la diurèse\n- **Dialyse** précoce si insuffisance rénale oligurique ou hyperkaliémie\n- Hémorragie pulmonaire : oxygène, ventilation, transfusion de plaquettes si besoin',
      ],
      [
        'Prévention',
        'Limiter l’exposition.',
        '- Bottes et gants, lutte contre les rats, éviter les baignades en eau stagnante\n- **Doxycycline** 200 mg une fois par semaine en prophylaxie lors d’expositions à haut risque (inondations)',
      ],
    ],
    molecules: [
      ['doxycycline', 'premiere', 'Forme simple, prophylaxie'],
      ['benzylpenicilline-penicilline-g', 'premiere', 'Forme grave'],
      ['ceftriaxone', 'alternative', 'Forme grave'],
      ['amoxicilline', 'alternative', 'Enfant, grossesse'],
      ['azithromycine', 'alternative', 'Enfant, grossesse'],
      ['paracetamol', 'adjuvant', 'Fièvre (pas d’aspirine)'],
    ],
    complications: [
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Néphrite interstitielle.',
        traitement: '- Réhydratation, dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine, kaliémie',
      },
      {
        nom: 'Hémorragie pulmonaire',
        description: 'Forme la plus mortelle.',
        traitement: '- Oxygène, ventilation',
        clinique: '- Hémoptysie, détresse respiratoire',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Myocardite et troubles du rythme',
        description: 'Forme grave.',
        traitement: '- Surveillance, traitement symptomatique',
        clinique: '- Palpitations, hypotension',
        paraclinique: '- ECG',
      },
    ],
    evolution:
      '## Pronostic\n- Bon dans les formes simples ; mortalité de 10 à 50 % dans les formes ictéro-hémorragiques et pulmonaires',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Myalgies', 'tres_frequent'],
      ['Céphalées', 'tres_frequent'],
      ['Yeux rouges', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
      ['Hémoptysie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- TDR paludisme, doxycycline, orientation', '- Ictère, oligurie, saignements, dyspnée'],
      hgr: ['- Antibiotiques IV, réanimation', '- Dialyse, ventilation'],
      tert: ['- Réanimation, diagnostic biologique', ''],
    },
    alertes: { 'choc-septique': 'Fièvre après exposition à l’eau avec hypotension ou oligurie' },
    formes: [
      {
        nom: 'Leptospirose anictérique',
        type: 'commune',
        description: 'Syndrome pseudo-grippal.',
        terrain: '- Exposition à l’eau ou à la boue',
        fonctionnels: '- Céphalées, myalgies des mollets',
        generaux: '- Fièvre brutale',
        physiques: '- Suffusion conjonctivale',
        paraclinique: '- PCR ou sérologie positive',
        etiologies: '- Leptospira',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Maladie de Weil',
        type: 'gravite',
        description: 'Forme ictéro-hémorragique.',
        terrain: '',
        fonctionnels: '- Oligurie, saignements',
        generaux: '- Fièvre',
        physiques: '- Ictère, purpura',
        paraclinique: '- Créatinine élevée, thrombopénie',
        etiologies: '',
        syndromes: ['syndrome-hemorragique', 'syndrome-uremique'],
      },
      {
        nom: 'Forme pulmonaire hémorragique',
        type: 'gravite',
        description: 'Hémorragies alvéolaires.',
        terrain: '',
        fonctionnels: '- Hémoptysie, dyspnée',
        generaux: '',
        physiques: '- Détresse respiratoire',
        paraclinique: '- Opacités alvéolaires',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Grippe
  {
    ...INF,
    slug: 'grippe',
    nom: 'Grippe',
    resume:
      'Infection respiratoire aiguë virale (influenza A ou B), épidémique : fièvre brutale, myalgies, céphalées, toux sèche ; le plus souvent bénigne (repos, paracétamol, hydratation) ; oseltamivir précoce pour les formes graves et les personnes à risque (grossesse, enfant < 2 ans, sujet âgé, maladies chroniques, VIH) ; surveiller les surinfections bactériennes ; vaccination des groupes à risque.',
    definition:
      'Infection aiguë des voies respiratoires due aux virus influenza A ou B, survenant en épidémies saisonnières et parfois en pandémies.',
    physiopathologie:
      '## Transmission\n- Gouttelettes, contacts, aérosols ; incubation 1–4 jours ; contagiosité dès la veille des symptômes\n\n## Complications\n- Pneumonie virale, **surinfection bactérienne** (pneumocoque, staphylocoque), décompensation de maladies chroniques (asthme, BPCO, insuffisance cardiaque, diabète), myocardite, encéphalite\n- Sujets à risque : grossesse, âges extrêmes, maladies chroniques, VIH, obésité',
    diagnostic:
      '## Clinique\n- Début **brutal** : **fièvre** élevée, frissons, **myalgies**, céphalées, asthénie intense\n- **Toux sèche**, mal de gorge, rhinorrhée\n- Signes de gravité : **dyspnée**, SpO2 < 94 %, confusion, déshydratation, aggravation après une amélioration (surinfection)\n\n## Examens\n- Diagnostic clinique en période épidémique\n- **TDR** ou **PCR** grippe pour les formes graves, la surveillance\n- TDR paludisme (fièvre), radiographie thoracique et NFS si forme grave',
    examens: [
      ['confirmation', 'test-grippe', 'Formes graves, surveillance.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre en zone d’endémie.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Gravité.'],
      ['gravite', 'radiographie-thoracique', 'Pneumonie.'],
      ['gravite', 'nfs', 'Surinfection.'],
      ['etiologique', 'test-covid', 'COVID-19.'],
    ],
    scores: [],
    differentiels: [
      ['covid-19', 'Test SARS-CoV-2 positif.'],
      ['paludisme-simple', 'TDR positif.'],
      ['pneumonie-communautaire-adulte', 'Foyer de condensation, surinfection.'],
      ['Dengue et arboviroses', 'Éruption, contexte épidémique.'],
      ['meningite-bacterienne', 'Raideur de nuque, troubles de conscience.'],
    ],
    etiologies: '## Agents\n- Virus influenza A (H1N1, H3N2, aviaires) et B',
    principes: [
      [
        'Forme simple',
        'Soulager.',
        '- Repos, hydratation, **paracétamol** (pas d’aspirine chez l’enfant : syndrome de Reye)\n- Isolement respiratoire, lavage des mains, masque\n- Pas d’antibiotiques sans surinfection',
      ],
      [
        'Antiviral',
        'Formes graves et personnes à risque.',
        '- **Oseltamivir** le plus tôt possible (idéalement < 48 h, mais utile plus tard dans les formes graves) : adulte 75 mg 2 fois par jour 5 jours ; enfant selon le poids\n- Indications : forme grave ou hospitalisée, grossesse, enfant < 2 ans, sujet > 65 ans, maladies chroniques, immunodépression',
      ],
      [
        'Formes graves et prévention',
        'Réduire la mortalité.',
        '- Oxygène, surveillance ; antibiotiques si surinfection (**amoxicilline-acide clavulanique**)\n- **Vaccination** annuelle des groupes à risque et des soignants selon le programme',
      ],
    ],
    molecules: [
      ['oseltamivir', 'premiere', 'Formes graves, personnes à risque'],
      ['paracetamol', 'premiere', 'Fièvre, douleurs'],
      ['amoxicilline', 'adjuvant', 'Surinfection bactérienne (avec acide clavulanique)'],
      ['oxygene', 'adjuvant', 'Hypoxémie'],
    ],
    complications: [
      {
        nom: 'Pneumonie virale ou bactérienne',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Surinfection fréquente.',
        traitement: '- Antibiotiques, oxygène',
        clinique: '- Dyspnée, fièvre persistante',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Décompensation de maladies chroniques',
        fiche: 'bpco',
        description: 'Asthme, BPCO, insuffisance cardiaque.',
        traitement: '- Traitement de la maladie sous-jacente',
        clinique: '- Dyspnée',
        paraclinique: '',
      },
      {
        nom: 'Myocardite et encéphalite',
        description: 'Rares.',
        traitement: '- Réanimation',
        clinique: '- Insuffisance cardiaque, confusion',
        paraclinique: '- ECG',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 1 semaine (asthénie prolongée) ; mortalité concentrée chez les personnes à risque',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Myalgies', 'tres_frequent'],
      ['Céphalées', 'tres_frequent'],
      ['Toux', 'tres_frequent'],
      ['Mal de gorge', 'frequent'],
      ['Rhinorrhée', 'frequent'],
      ['Asthénie', 'tres_frequent'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Traitement symptomatique, TDR paludisme, conseils',
        '- Dyspnée, désaturation, personne à risque',
      ],
      hgr: ['- Oxygène, oseltamivir, antibiotiques si surinfection', '- Détresse respiratoire'],
      tert: ['- Réanimation, PCR', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Grippe saisonnière non compliquée',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Adulte, enfant',
        fonctionnels: '- Myalgies, céphalées, toux sèche',
        generaux: '- Fièvre brutale',
        physiques: '- Pharynx inflammatoire',
        paraclinique: '- Aucun examen nécessaire',
        etiologies: '- Influenza A ou B',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Grippe grave',
        type: 'gravite',
        description: 'Pneumonie, défaillance.',
        terrain: '- Grossesse, maladies chroniques, âges extrêmes',
        fonctionnels: '- Dyspnée',
        generaux: '- Fièvre persistante',
        physiques: '- Crépitants, cyanose',
        paraclinique: '- Hypoxémie, opacités',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Pian
  {
    ...INF,
    slug: 'pian',
    nom: 'Pian',
    resume:
      'Tréponématose non vénérienne de l’enfant des zones forestières (Treponema pallidum pertenue), ciblée pour l’éradication : papillome framboisé, ulcérations cutanées, atteintes osseuses ; test rapide tréponémique et non tréponémique ; azithromycine 30 mg/kg (max 2 g) en dose unique ou benzathine benzylpénicilline ; traitement des contacts et traitement de masse (stratégie OMS).',
    definition:
      'Infection chronique non vénérienne due à Treponema pallidum subsp. pertenue, transmise par contact cutané direct, touchant la peau, les os et le cartilage.',
    physiopathologie:
      '## Transmission\n- Contact direct peau à peau avec les lésions (enfants de 2 à 15 ans), favorisé par la pauvreté, le manque d’hygiène et d’eau, la promiscuité\n- Populations forestières et autochtones (Pygmées) en RDC\n\n## Stades\n- **Primaire** : papillome « framboisé » (lésion mère)\n- **Secondaire** : lésions multiples, ulcérations, hyperkératose plantaire (« crabe »), ostéopériostites (doigts, tibias)\n- **Tertiaire** : destructions osseuses et cartilagineuses (gangosa), déformations',
    diagnostic:
      '## Clinique\n- Enfant de zone d’endémie : **papillome** ou **ulcère** indolore et suintant, souvent aux membres inférieurs\n- Lésions multiples, hyperkératose palmo-plantaire douloureuse, douleurs osseuses, tuméfaction des doigts\n\n## Examens\n- **Test rapide tréponémique** (± test double tréponémique/non tréponémique)\n- RPR ou VDRL quantitatif (suivi), PCR sur lésion si disponible (surveillance de la résistance à l’azithromycine)\n- Diagnostic différentiel de l’ulcère de Buruli et des ulcères tropicaux',
    examens: [
      ['confirmation', 'serologie-syphilis', 'Tests tréponémiques et non tréponémiques.'],
      ['deuxieme_intention', 'radiographie-osseuse', 'Ostéopériostite.'],
      ['etiologique', 'pcr-buruli', 'Ulcère de Buruli (diagnostic différentiel).'],
    ],
    scores: [],
    differentiels: [
      ['ulcere-de-buruli', 'Ulcère à bords décollés, PCR positive.'],
      ['Ulcère phagédénique tropical', 'Ulcère aigu douloureux, nécrotique.'],
      ['syphilis', 'Transmission sexuelle, adulte.'],
      ['pyodermites', 'Impétigo, ecthyma.'],
      ['lepre', 'Plaques anesthésiques.'],
    ],
    etiologies:
      '## Terrain\n- Enfants de 2 à 15 ans, zones forestières humides, populations autochtones, pauvreté, manque d’accès à l’eau',
    principes: [
      [
        'Traitement individuel',
        'Guérir et rendre non contagieux.',
        '- **Azithromycine** 30 mg/kg (maximum 2 g) per os en **dose unique** (1re intention, OMS)\n- Ou **benzathine benzylpénicilline** IM dose unique : 0,6 MUI (< 10 ans), 1,2 MUI (≥ 10 ans et adultes)\n- Guérison des lésions en 2 à 4 semaines',
      ],
      [
        'Contacts et communauté',
        'Éradiquer.',
        '- Traiter les **contacts** (famille, école) même sans lésion\n- **Traitement de masse** par azithromycine dans les communautés atteintes (stratégie OMS), puis traitement ciblé des cas et contacts\n- Surveillance de la résistance (PCR), hygiène, accès à l’eau et au savon',
      ],
    ],
    molecules: [
      ['azithromycine', 'premiere', 'Dose unique 30 mg/kg'],
      ['benzathine-benzylpenicilline', 'alternative', 'Dose unique IM'],
    ],
    complications: [
      {
        nom: 'Destructions osseuses et cartilagineuses',
        description: 'Stade tertiaire.',
        traitement: '- Antibiotiques, chirurgie réparatrice',
        clinique: '- Déformations, gangosa',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Hyperkératose plantaire invalidante',
        description: 'Marche douloureuse.',
        traitement: '- Antibiotiques, soins locaux',
        clinique: '- Marche « en crabe »',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Guérison sous traitement ; séquelles invalidantes au stade tertiaire',
    urgences: [],
    symptomes: [
      ['Ulcère cutané', 'tres_frequent'],
      ['Lésions cutanées violacées', 'occasionnel'],
      ['Douleurs osseuses', 'frequent'],
      ['Arthralgies', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Test rapide, azithromycine, traitement des contacts, notification',
        '- Doute diagnostique, lésions tertiaires',
      ],
      hgr: ['- Confirmation, prise en charge des séquelles', ''],
      tert: ['- Chirurgie réparatrice', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Pian primaire et secondaire',
        type: 'commune',
        description: 'Lésions cutanées contagieuses.',
        terrain: '- Enfant de zone forestière',
        fonctionnels: '- Lésion indolore suintante',
        generaux: '',
        physiques: '- Papillome framboisé, ulcères',
        paraclinique: '- Test tréponémique positif',
        etiologies: '- T. pallidum pertenue',
        syndromes: [],
      },
      {
        nom: 'Pian osseux',
        type: 'topographique',
        description: 'Ostéopériostite.',
        terrain: '',
        fonctionnels: '- Douleurs osseuses nocturnes',
        generaux: '',
        physiques: '- Tuméfaction des doigts, tibias',
        paraclinique: '- Radiographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Pian tertiaire',
        type: 'evolutive',
        description: 'Destructions.',
        terrain: '- Absence de traitement',
        fonctionnels: '',
        generaux: '',
        physiques: '- Gangosa, déformations',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== GNA adulte
  {
    ...NEPH,
    slug: 'glomerulonephrites-aigues-adulte',
    nom: 'Glomérulonéphrites aiguës de l’adulte',
    resume:
      'Syndrome néphritique (œdèmes, HTA, hématurie, protéinurie, insuffisance rénale) chez l’adulte : post-infectieuse, néphropathie à IgA, lupus, vascularites, VIH, hépatites B et C ; forme rapidement progressive = urgence néphrologique ; restriction sodée, furosémide, antihypertenseurs, traitement de la cause, corticoïdes et immunosuppresseurs pour les formes rapidement progressives.',
    definition:
      'Atteinte inflammatoire aiguë des glomérules se traduisant par un syndrome néphritique : hématurie glomérulaire, protéinurie, œdèmes, hypertension et baisse du débit de filtration glomérulaire.',
    physiopathologie:
      '## Causes\n- **Post-infectieuse** (streptocoque, staphylocoque, endocardite)\n- **Néphropathie à IgA**, lupus, vascularites (ANCA), syndrome de Goodpasture\n- **Infections chroniques** : VIH, hépatites B et C, paludisme, schistosomiase\n\n## Glomérulonéphrite rapidement progressive\n- Prolifération extracapillaire (croissants) : insuffisance rénale en quelques jours ou semaines',
    diagnostic:
      '## Clinique\n- **Œdèmes** (visage, membres), **HTA**, **urines foncées** (hématurie), **oligurie**\n- Signes de surcharge (OAP), encéphalopathie hypertensive\n- Signes extra-rénaux : éruption, arthralgies (lupus), hémoptysie (vascularite, Goodpasture), infection récente\n\n## Examens\n- **Bandelette** et ECBU : hématurie (cylindres hématiques), protéinurie\n- **Créatinine**, ionogramme, albumine, NFS\n- **Complément C3-C4**, ASLO, test VIH, AgHBs, sérologie VHC, anticorps antinucléaires, ANCA si disponibles\n- **Échographie rénale** ; **ponction-biopsie rénale** (centre spécialisé) pour les formes atypiques ou rapidement progressives',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie, protéinurie.'],
      ['premiere_intention', 'ecbu', 'Hématurie, cylindres.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'ionogramme', 'Hyperkaliémie.'],
      ['premiere_intention', 'proteinurie', 'Quantification.'],
      ['etiologique', 'complement-c3-c4', 'C3 bas : post-infectieuse, lupus.'],
      ['etiologique', 'aslo', 'Infection streptococcique.'],
      ['etiologique', 'tdr-vih', 'Néphropathie du VIH.'],
      ['etiologique', 'serologies-hepatites', 'Hépatites B et C.'],
      ['premiere_intention', 'echographie-renale', 'Taille des reins.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Biopsie rénale.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-nephrotique-adulte', 'Protéinurie massive, œdèmes, peu d’hématurie.'],
      ['insuffisance-renale-aigue', 'Causes prérénales ou obstructives.'],
      ['schistosomiase-urogenitale', 'Hématurie terminale, œufs dans les urines.'],
      ['nephropathie-associee-au-vih', 'Patient VIH, protéinurie importante.'],
      ['infections-urinaires-adulte', 'Leucocyturie, fièvre.'],
    ],
    etiologies: '## Terrain\n- Infection récente, VIH, hépatites, lupus (femme jeune), endocardite',
    principes: [
      [
        'Mesures générales',
        'Contrôler la surcharge et la tension.',
        '- Restriction sodée (< 2 g de sodium/j) et hydrique si oligurie\n- **Furosémide** 40–80 mg/j (plus en cas d’insuffisance rénale)\n- Antihypertenseurs : **amlodipine**, IEC (**énalapril**) si protéinurie et kaliémie normale\n- Traitement de l’hyperkaliémie, dialyse si besoin',
      ],
      [
        'Traitement de la cause',
        'Selon l’étiologie.',
        '- Post-infectieuse : traitement de l’infection ; évolution spontanément favorable\n- VIH : ARV ; hépatites : antiviraux ; endocardite : antibiotiques',
      ],
      [
        'Forme rapidement progressive',
        'Urgence néphrologique.',
        '- Transfert en néphrologie ; biopsie\n- **Méthylprednisolone** 500 mg à 1 g/j IV pendant 3 jours puis prednisolone 1 mg/kg/j, ± **cyclophosphamide** ou rituximab, échanges plasmatiques selon la cause',
      ],
    ],
    molecules: [
      ['furosemide', 'premiere', 'Surcharge, œdèmes'],
      ['amlodipine', 'premiere', 'HTA'],
      ['enalapril', 'alternative', 'HTA avec protéinurie'],
      ['methylprednisolone', 'alternative', 'Forme rapidement progressive'],
      ['prednisolone', 'alternative', 'Relais'],
      ['cyclophosphamide', 'alternative', 'Vascularite, lupus (spécialiste)'],
      ['benzathine-benzylpenicilline', 'adjuvant', 'Infection streptococcique'],
    ],
    complications: [
      {
        nom: 'Œdème aigu du poumon',
        description: 'Surcharge hydrosodée.',
        traitement: '- Furosémide, oxygène, dialyse',
        clinique: '- Dyspnée, crépitants',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Encéphalopathie hypertensive',
        fiche: 'urgences-hypertensives',
        description: 'HTA sévère.',
        traitement: '- Baisse contrôlée de la tension',
        clinique: '- Céphalées, convulsions',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale aiguë ou chronique',
        fiche: 'maladie-renale-chronique',
        description: 'Formes rapidement progressives.',
        traitement: '- Dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pour la forme post-infectieuse de l’adulte jeune ; évolution fréquente vers la maladie rénale chronique dans les autres formes',
    urgences: ['urgence-hypertensive', 'hyperkaliemie-menacante', 'oedeme-aigu-du-poumon'],
    symptomes: [
      ['Œdèmes', 'tres_frequent'],
      ['Œdème du visage', 'frequent'],
      ['Hématurie', 'tres_frequent'],
      ['Urines foncées', 'frequent'],
      ['Oligurie', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Bandelette, tension, restriction sodée, transfert',
        '- Œdèmes avec hématurie, oligurie, HTA sévère',
      ],
      hgr: ['- Bilan, furosémide, antihypertenseurs', '- Forme rapidement progressive, dialyse'],
      tert: ['- Néphrologie, biopsie rénale, immunosuppresseurs', ''],
    },
    alertes: {
      'urgence-hypertensive': 'Syndrome néphritique avec PA ≥ 180/110 ou céphalées',
      'hyperkaliemie-menacante': 'Oligurie avec kaliémie élevée',
      'oedeme-aigu-du-poumon': 'Œdèmes et dyspnée de décubitus',
    },
    formes: [
      {
        nom: 'Glomérulonéphrite post-infectieuse',
        type: 'commune',
        description: 'Après une infection.',
        terrain: '- Infection cutanée ou pharyngée récente',
        fonctionnels: '- Urines foncées',
        generaux: '- HTA',
        physiques: '- Œdèmes',
        paraclinique: '- Hématurie, C3 bas transitoire',
        etiologies: '- Streptocoque, staphylocoque',
        syndromes: ['syndrome-oedemateux', 'syndrome-de-retention-hydrosodee'],
      },
      {
        nom: 'Glomérulonéphrite rapidement progressive',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Vascularite, lupus',
        fonctionnels: '- Oligurie, hémoptysie',
        generaux: '- Altération de l’état général',
        physiques: '- Œdèmes, HTA',
        paraclinique: '- Créatinine en hausse rapide',
        etiologies: '',
        syndromes: ['syndrome-uremique'],
      },
      {
        nom: 'Glomérulonéphrite des infections chroniques',
        type: 'etiologique',
        description: 'VIH, hépatites.',
        terrain: '- VIH, hépatites B ou C',
        fonctionnels: '',
        generaux: '',
        physiques: '- Œdèmes',
        paraclinique: '- Sérologies positives',
        etiologies: '- VIH, VHB, VHC',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Néphropathie drépanocytaire
  {
    ...NEPH,
    slug: 'nephropathie-drepanocytaire',
    nom: 'Néphropathie drépanocytaire',
    resume:
      'Atteinte rénale de la drépanocytose, fréquente dès l’enfance : défaut de concentration des urines (énurésie, déshydratation), hématurie (nécrose papillaire), albuminurie puis protéinurie et insuffisance rénale chez l’adulte ; dépistage annuel (bandelette, microalbuminurie, créatinine) dès l’enfance ; IEC si albuminurie persistante, hydroxyurée, hydratation, éviter les AINS.',
    definition:
      'Ensemble des atteintes rénales liées à la drépanocytose : troubles tubulaires, nécrose papillaire, glomérulopathie (hyperfiltration puis albuminurie et glomérulosclérose), évoluant vers la maladie rénale chronique.',
    physiopathologie:
      '## Mécanismes\n- Médullaire rénale hypoxique, acide et hyperosmolaire : falciformation, infarctus des vasa recta\n- **Hyposthénurie** (perte du pouvoir de concentration) dès l’enfance\n- **Nécrose papillaire** : hématurie\n- **Hyperfiltration** glomérulaire, puis **albuminurie** et glomérulosclérose ; hémolyse chronique (toxicité de l’hémoglobine libre)',
    diagnostic:
      '## Clinique\n- **Énurésie**, **polyurie**, déshydratation rapide\n- **Hématurie** macroscopique (souvent indolore), parfois colique néphrétique\n- HTA (relativement rare mais péjorative), œdèmes si syndrome néphrotique\n\n## Dépistage (annuel dès l’enfance)\n- **Bandelette urinaire**, **microalbuminurie**, créatinine et estimation du DFG (souvent faussement rassurante : DFG élevé chez le jeune)\n- Tension artérielle\n- Échographie rénale si hématurie',
    examens: [
      ['premiere_intention', 'microalbuminurie', 'Dépistage précoce.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie, protéinurie.'],
      ['premiere_intention', 'creatinine', 'DFG.'],
      ['premiere_intention', 'proteinurie', 'Quantification.'],
      ['deuxieme_intention', 'echographie-renale', 'Hématurie, nécrose papillaire.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
    ],
    scores: [],
    differentiels: [
      ['schistosomiase-urogenitale', 'Hématurie terminale, œufs dans les urines.'],
      ['infections-urinaires-adulte', 'Leucocyturie, fièvre.'],
      ['glomerulonephrites-aigues-adulte', 'Syndrome néphritique.'],
      ['nephropathie-associee-au-vih', 'Patient VIH.'],
      ['Carcinome médullaire du rein', 'Rare, jeune drépanocytaire avec hématurie et masse.'],
    ],
    etiologies:
      '## Terrain\n- Drépanocytose SS (et Sβ0), plus rarement trait drépanocytaire (hématurie, hyposthénurie)',
    principes: [
      [
        'Néphroprotection',
        'Ralentir la progression.',
        '- **IEC** (énalapril) ou ARA2 si albuminurie persistante (contrôler la kaliémie et la créatinine)\n- **Hydroxyurée** (réduit l’albuminurie et les complications)\n- Contrôle tensionnel (cible plus basse que la population générale)\n- **Éviter les AINS** et les produits néphrotoxiques ; hydratation suffisante (hyposthénurie)',
      ],
      [
        'Hématurie',
        'Arrêter le saignement.',
        '- Repos, hydratation abondante ; transfusion si anémie sévère\n- Rechercher une infection, un calcul, une tumeur (échographie)',
      ],
      [
        'Stade avancé',
        'Suppléance.',
        '- Prise en charge de la maladie rénale chronique, érythropoïétine (prudence), dialyse',
      ],
    ],
    molecules: [
      ['enalapril', 'premiere', 'Albuminurie persistante'],
      ['losartan', 'alternative', 'Albuminurie (intolérance aux IEC)'],
      ['hydroxycarbamide', 'premiere', 'Traitement de fond de la drépanocytose'],
      ['acide-folique', 'adjuvant', 'Hémolyse chronique'],
      ['paracetamol', 'adjuvant', 'Douleur (pas d’AINS)'],
    ],
    complications: [
      {
        nom: 'Maladie rénale chronique',
        fiche: 'maladie-renale-chronique',
        description: 'Glomérulosclérose.',
        traitement: '- Néphroprotection, dialyse',
        clinique: '- Œdèmes, anémie aggravée',
        paraclinique: '- DFG en baisse',
      },
      {
        nom: 'Nécrose papillaire',
        description: 'Infarctus médullaire.',
        traitement: '- Hydratation, antalgie',
        clinique: '- Hématurie, colique',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Déshydratation, rhabdomyolyse, AINS.',
        traitement: '- Hydratation, arrêt des toxiques',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Insuffisance rénale chez 5–20 % des adultes drépanocytaires, facteur majeur de mortalité',
    urgences: ['crise-drepanocytaire-grave'],
    symptomes: [
      ['Polyurie-polydipsie', 'frequent'],
      ['Incontinence urinaire', 'frequent'],
      ['Hématurie', 'occasionnel'],
      ['Œdèmes', 'occasionnel'],
      ['Pâleur', 'frequent'],
    ],
    sources: [
      'ASH — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Bandelette annuelle, tension, éviter les AINS', '- Protéinurie, hématurie, créatinine élevée'],
      hgr: ['- Microalbuminurie, IEC, hydroxyurée', ''],
      tert: ['- Néphrologie, dialyse', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Albuminurie drépanocytaire',
        type: 'commune',
        description: 'Glomérulopathie débutante.',
        terrain: '- Adolescent ou adulte SS',
        fonctionnels: '- Aucun',
        generaux: '',
        physiques: '- Tension normale',
        paraclinique: '- Microalbuminurie, DFG élevé',
        etiologies: '- Drépanocytose',
        syndromes: [],
        examens: [['microalbuminurie', 'Positive']],
      },
      {
        nom: 'Hématurie par nécrose papillaire',
        type: 'etiologique',
        description: 'Infarctus médullaire.',
        terrain: '- SS ou trait drépanocytaire',
        fonctionnels: '- Urines rouges',
        generaux: '',
        physiques: '',
        paraclinique: '- Hématurie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Insuffisance rénale chronique',
        type: 'gravite',
        description: 'Stade avancé.',
        terrain: '- Adulte',
        fonctionnels: '- Fatigue',
        generaux: '- Anémie aggravée',
        physiques: '- Œdèmes, HTA',
        paraclinique: '- DFG < 60',
        etiologies: '',
        syndromes: ['syndrome-uremique'],
      },
    ],
  },

  // =================================================================== Néphropathie hypertensive
  {
    ...NEPH,
    slug: 'nephropathie-hypertensive',
    nom: 'Néphropathie hypertensive',
    resume:
      'Maladie rénale chronique attribuée à une HTA ancienne et mal contrôlée (néphroangiosclérose), fréquente chez l’adulte d’origine africaine : protéinurie modérée, baisse progressive du DFG ; contrôle tensionnel strict (< 130/80 mmHg), IEC ou ARA2 si albuminurie, amlodipine, diurétique ; rechercher une autre cause (glomérulopathie, VIH) ; urgence hypertensive = néphroangiosclérose maligne.',
    definition:
      'Atteinte rénale vasculaire chronique (néphroangiosclérose) liée à l’hypertension artérielle, se traduisant par une insuffisance rénale lentement progressive avec protéinurie modérée.',
    physiopathologie:
      '## Mécanismes\n- Artériolosclérose et ischémie glomérulaire chronique\n- Susceptibilité génétique (variants APOL1) chez les sujets d’origine africaine\n- **Néphroangiosclérose maligne** : HTA sévère avec atteinte rénale rapide, rétinopathie, microangiopathie',
    diagnostic:
      '## Clinique\n- HTA ancienne, souvent mal équilibrée ; atteinte d’autres organes cibles (hypertrophie ventriculaire, rétinopathie)\n- Souvent asymptomatique jusqu’aux stades avancés\n\n## Examens\n- **Créatinine** et DFG, **protéinurie** (modérée, < 1–2 g/24 h), microalbuminurie, sédiment peu actif\n- **Échographie** : reins de taille normale ou diminuée, symétriques\n- ECG, fond d’œil, ionogramme, glycémie, test VIH\n- Une protéinurie importante ou une hématurie doivent faire rechercher une glomérulopathie',
    examens: [
      ['premiere_intention', 'creatinine', 'DFG.'],
      ['premiere_intention', 'proteinurie', 'Protéinurie modérée.'],
      ['premiere_intention', 'microalbuminurie', 'Albuminurie.'],
      ['premiere_intention', 'ionogramme', 'Kaliémie avant IEC.'],
      ['premiere_intention', 'echographie-renale', 'Reins symétriques.'],
      ['premiere_intention', 'ecg', 'Hypertrophie ventriculaire gauche.'],
      ['gravite', 'fond-d-oeil', 'Rétinopathie hypertensive.'],
      ['etiologique', 'tdr-vih', 'Néphropathie du VIH.'],
      ['etiologique', 'glycemie', 'Diabète.'],
    ],
    scores: [],
    differentiels: [
      ['nephropathie-diabetique', 'Diabète, rétinopathie diabétique.'],
      ['nephropathie-associee-au-vih', 'Patient VIH, protéinurie importante.'],
      ['glomerulonephrites-aigues-adulte', 'Hématurie, protéinurie importante.'],
      ['Sténose de l’artère rénale', 'HTA résistante, asymétrie rénale.'],
      ['Polykystose rénale', 'Gros reins kystiques, antécédents familiaux.'],
    ],
    etiologies: '## Facteurs\n- HTA ancienne non contrôlée, origine africaine, diabète, obésité, tabac',
    principes: [
      [
        'Contrôle tensionnel',
        'Ralentir la progression.',
        '- Cible **< 130/80 mmHg** si tolérée\n- **IEC** (énalapril) ou **ARA2** (losartan) si albuminurie ; surveiller kaliémie et créatinine à 1–2 semaines\n- **Amlodipine** ; diurétique thiazidique si DFG > 30, **furosémide** si DFG plus bas\n- Sel < 5 g/j, arrêt du tabac, activité physique, poids',
      ],
      [
        'Protection rénale',
        'Éviter les agressions.',
        '- Éviter AINS, produits de contraste, déshydratation ; adapter les médicaments au DFG\n- Statine selon le risque cardiovasculaire ; inhibiteur de SGLT2 si albuminurie selon disponibilité',
      ],
      [
        'Urgence hypertensive',
        'Néphroangiosclérose maligne.',
        '- Baisse progressive de la tension, hospitalisation (voir *Urgences hypertensives*)',
      ],
    ],
    molecules: [
      ['amlodipine', 'premiere', 'Inhibiteur calcique'],
      ['enalapril', 'premiere', 'IEC (albuminurie)'],
      ['losartan', 'alternative', 'ARA2'],
      ['hydrochlorothiazide', 'alternative', 'DFG > 30'],
      ['furosemide', 'alternative', 'DFG < 30, surcharge'],
      ['dapagliflozine', 'adjuvant', 'Albuminurie, selon disponibilité'],
    ],
    complications: [
      {
        nom: 'Maladie rénale chronique terminale',
        fiche: 'maladie-renale-chronique',
        description: 'Progression.',
        traitement: '- Dialyse, transplantation',
        clinique: '- Syndrome urémique',
        paraclinique: '- DFG < 15',
      },
      {
        nom: 'Néphroangiosclérose maligne',
        fiche: 'urgences-hypertensives',
        description: 'HTA sévère.',
        traitement: '- Baisse contrôlée de la tension',
        clinique: '- Céphalées, troubles visuels',
        paraclinique: '- Créatinine en hausse, fond d’œil',
      },
      {
        nom: 'Événements cardiovasculaires',
        fiche: 'avc-ischemique',
        description: 'Risque très élevé.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Progression lente, ralentie par un bon contrôle tensionnel ; mortalité surtout cardiovasculaire',
    urgences: ['urgence-hypertensive'],
    symptomes: [
      ['Céphalées', 'occasionnel'],
      ['Asthénie', 'frequent'],
      ['Œdèmes', 'occasionnel'],
      ['Troubles visuels', 'occasionnel'],
    ],
    sources: [
      'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
      'ESC — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Contrôle tensionnel, bandelette, créatinine',
        '- DFG < 30, HTA résistante, protéinurie importante',
      ],
      hgr: ['- Bilan, IEC, suivi', ''],
      tert: ['- Néphrologie, dialyse', ''],
    },
    alertes: { 'urgence-hypertensive': 'PA ≥ 180/120 mmHg avec atteinte rénale ou visuelle' },
    formes: [
      {
        nom: 'Néphroangiosclérose bénigne',
        type: 'commune',
        description: 'Progression lente.',
        terrain: '- Hypertendu ancien, origine africaine',
        fonctionnels: '- Aucun',
        generaux: '',
        physiques: '- HTA',
        paraclinique: '- Protéinurie modérée, DFG en baisse lente',
        etiologies: '- HTA',
        syndromes: [],
      },
      {
        nom: 'Néphroangiosclérose maligne',
        type: 'gravite',
        description: 'HTA maligne.',
        terrain: '- HTA sévère non traitée',
        fonctionnels: '- Céphalées, troubles visuels',
        generaux: '',
        physiques: '- PA très élevée',
        paraclinique: '- Insuffisance rénale rapide, rétinopathie',
        etiologies: '',
        syndromes: ['syndrome-uremique'],
      },
    ],
  },

  // =================================================================== Urgences de l'hémodialyse
  {
    ...NEPH,
    slug: 'urgences-hemodialyse',
    nom: 'Urgences de l’hémodialyse',
    resume:
      'Urgences du patient dialysé : hyperkaliémie (gluconate de calcium, insuline-glucose, salbutamol, puis dialyse), œdème aigu du poumon (oxygène, dialyse avec ultrafiltration), hypotension en séance (arrêt de l’ultrafiltration, sérum salé), infection ou thrombose de l’abord vasculaire, syndrome de déséquilibre, hémorragie ; dialyse en urgence dès que possible.',
    definition:
      'Complications aiguës survenant chez le patient en insuffisance rénale terminale traité par hémodialyse, entre les séances (surcharge, hyperkaliémie) ou pendant la séance.',
    physiopathologie:
      '## Entre les séances\n- **Hyperkaliémie** (séance manquée, alimentation riche en potassium, IEC)\n- **Surcharge hydrosodée** : œdème aigu du poumon, HTA\n\n## Pendant la séance\n- **Hypotension** (ultrafiltration excessive), crampes, **syndrome de déséquilibre** (première séance trop efficace : œdème cérébral)\n- Réactions au dialyseur, embolie gazeuse, hémorragie\n\n## Abord vasculaire\n- **Infection de cathéter** (Staphylococcus aureus), **thrombose** de fistule artérioveineuse',
    diagnostic:
      '## Évaluation\n- Date de la dernière séance, poids (prise de poids interdialytique), diurèse résiduelle\n- **Hyperkaliémie** : faiblesse, paresthésies, **ECG** (ondes T pointues, QRS large, bradycardie)\n- **OAP** : dyspnée, orthopnée, crépitants, désaturation\n- **Infection** : fièvre, frissons en début de séance, pus au point d’entrée du cathéter\n- **Fistule** : absence de frémissement (thrombose)\n\n## Examens\n- **Kaliémie**, ECG, créatinine, urée, bicarbonates, NFS, glycémie\n- Hémocultures (cathéter et périphérie), radiographie thoracique',
    examens: [
      ['premiere_intention', 'ionogramme', 'Hyperkaliémie.'],
      ['premiere_intention', 'ecg', 'Signes d’hyperkaliémie.'],
      ['premiere_intention', 'gaz-du-sang', 'Acidose.'],
      ['premiere_intention', 'radiographie-thoracique', 'OAP.'],
      ['premiere_intention', 'hemocultures', 'Infection de cathéter.'],
      ['premiere_intention', 'nfs', 'Anémie, infection.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-coronarien-aigu-sans-st', 'Douleur thoracique, troponine (interpréter avec prudence).'],
      ['pneumonie-communautaire-adulte', 'Fièvre, condensation.'],
      ['pericardite-aigue-et-tamponnade', 'Péricardite urémique.'],
      ['hypoglycemie-adulte', 'Malaise, diabétique dialysé.'],
    ],
    etiologies:
      '## Facteurs\n- Séances manquées ou insuffisantes (coût, accès), écarts alimentaires (potassium, sel, eau), cathéter tunnelisé ou temporaire',
    principes: [
      [
        'Hyperkaliémie',
        'Protéger le cœur.',
        '- **Gluconate de calcium 10 %** 10 mL IV en 5–10 min (à répéter si ECG anormal)\n- **Insuline rapide** 10 UI IV + **glucose** 25 g ; **salbutamol** nébulisé 10–20 mg\n- **Dialyse en urgence** (traitement définitif) ; résines (polystyrène sulfonate) en attendant',
      ],
      [
        'Œdème aigu du poumon',
        'Retirer l’eau.',
        '- Position assise, **oxygène**, **trinitrine** si PA conservée\n- **Furosémide** à forte dose seulement s’il reste une diurèse\n- **Dialyse avec ultrafiltration** en urgence',
      ],
      [
        'Complications de séance',
        'Sécuriser la dialyse.',
        '- **Hypotension** : arrêt de l’ultrafiltration, Trendelenburg, **NaCl 0,9 %** 100–250 mL\n- **Syndrome de déséquilibre** : séances initiales courtes et peu efficaces (prévention), mannitol si symptômes\n- **Infection de cathéter** : hémocultures, **vancomycine** (dose de charge 20–25 mg/kg puis après chaque séance) ± céfazoline ou ceftazidime selon l’écologie ; retrait du cathéter si sepsis sévère\n- **Thrombose de fistule** : avis chirurgical rapide',
      ],
    ],
    molecules: [
      ['gluconate-de-calcium', 'premiere', 'Hyperkaliémie'],
      ['insuline-humaine-rapide', 'premiere', 'Hyperkaliémie (avec glucose)'],
      ['glucose-10', 'premiere', 'Avec l’insuline'],
      ['salbutamol', 'alternative', 'Hyperkaliémie'],
      ['polystyrene-sulfonate-de-sodium', 'adjuvant', 'Hyperkaliémie en attendant la dialyse'],
      ['oxygene', 'premiere', 'OAP'],
      ['trinitrine', 'alternative', 'OAP'],
      ['vancomycine', 'premiere', 'Infection de cathéter'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Hypotension de séance'],
    ],
    complications: [
      {
        nom: 'Arrêt cardiaque',
        description: 'Hyperkaliémie.',
        traitement: '- Réanimation, calcium, dialyse',
        clinique: '- Arrêt circulatoire',
        paraclinique: '- ECG',
      },
      {
        nom: 'Endocardite et sepsis',
        fiche: 'endocardite-infectieuse',
        description: 'Infection de cathéter.',
        traitement: '- Antibiotiques prolongés, retrait du cathéter',
        clinique: '- Fièvre, souffle',
        paraclinique: '- Hémocultures, échocardiographie',
      },
      {
        nom: 'Perte de l’abord vasculaire',
        description: 'Thrombose.',
        traitement: '- Désobstruction, nouvel abord',
        clinique: '- Absence de frémissement',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée en cas de séances irrégulières ; l’accès régulier à la dialyse conditionne la survie',
    urgences: ['hyperkaliemie-menacante', 'oedeme-aigu-du-poumon', 'choc-septique'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Faiblesse musculaire', 'frequent'],
      ['Palpitations', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Hypotension', 'occasionnel'],
      ['Œdèmes', 'frequent'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
    ],
    niveaux: {
      cs: [
        '- ECG si disponible, gluconate de calcium, transfert vers un centre de dialyse',
        '- Tout dialysé dyspnéique, faible ou fébrile',
      ],
      hgr: ['- Traitement de l’hyperkaliémie, dialyse si disponible', ''],
      tert: ['- Centre de dialyse, réanimation', ''],
    },
    alertes: {
      'hyperkaliemie-menacante': 'Dialysé avec séance manquée, faiblesse ou anomalies ECG',
      'oedeme-aigu-du-poumon': 'Dialysé avec dyspnée et prise de poids',
      'choc-septique': 'Dialysé fébrile avec hypotension',
    },
    formes: [
      {
        nom: 'Hyperkaliémie du dialysé',
        type: 'commune',
        description: 'Séance manquée.',
        terrain: '- Dialysé',
        fonctionnels: '- Faiblesse, paresthésies',
        generaux: '',
        physiques: '- Bradycardie',
        paraclinique: '- Kaliémie > 6 mmol/L, ondes T pointues',
        etiologies: '- Séance manquée, alimentation',
        syndromes: ['syndrome-uremique'],
      },
      {
        nom: 'Surcharge et OAP',
        type: 'gravite',
        description: 'Prise de poids interdialytique.',
        terrain: '',
        fonctionnels: '- Orthopnée',
        generaux: '- HTA',
        physiques: '- Crépitants, œdèmes',
        paraclinique: '- Œdème pulmonaire',
        etiologies: '',
        syndromes: ['syndrome-de-retention-hydrosodee', 'syndrome-d-insuffisance-cardiaque-gauche'],
      },
      {
        nom: 'Infection de cathéter',
        type: 'etiologique',
        description: 'Staphylocoque.',
        terrain: '- Cathéter de dialyse',
        fonctionnels: '- Frissons en séance',
        generaux: '- Fièvre',
        physiques: '- Pus au point d’entrée',
        paraclinique: '- Hémocultures positives',
        etiologies: '- S. aureus',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },
];
