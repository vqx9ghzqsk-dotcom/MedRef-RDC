'use strict';

/**
 * Lot 40 (phase 2, pédiatrie générale) — adénopathies de l'enfant, douleur abdominale de
 * l'enfant, énurésie, allergie aux protéines du lait de vache, pleurs et coliques du nourrisson,
 * fièvre prolongée de l'enfant, anaphylaxie de l'enfant, boiterie de l'enfant. Rédigé par IA
 * (OMS, Pocket book, PCIME, Nelson, ESPGHAN, WAO) : à valider.
 */

const PED = { departement: 'pediatrie', specialite: 'Pédiatrie générale' };

module.exports = [
  // =================================================================== Adénopathies de l'enfant
  {
    ...PED,
    slug: 'adenopathies-enfant',
    nom: 'Adénopathies de l’enfant',
    resume:
      'Très fréquentes chez l’enfant, le plus souvent réactionnelles à une infection ORL, dentaire ou cutanée ; rechercher la tuberculose (contage, adénopathie froide fistulisée), le VIH, l’adénite post-BCG (axillaire gauche), le lymphome de Burkitt et les leucémies (signes généraux, cytopénies) ; traiter la porte d’entrée et revoir à 2–4 semaines ; cytoponction avec Xpert ou biopsie si persistante, > 2 cm, dure ou avec signes généraux.',
    definition:
      'Ganglion palpable de plus de 1 cm (1,5 cm en inguinal, 0,5 cm en épitrochléen) chez l’enfant, localisé ou généralisé.',
    physiopathologie:
      '## Causes\n- **Réactionnelles** : angines, otites, caries, impétigo, gale surinfectée, plaies\n- **Adénite bactérienne aiguë** (staphylocoque, streptocoque) : chaude, douloureuse, parfois abcédée\n- **Tuberculose** ganglionnaire, **adénite post-BCG** (axillaire gauche, sus-claviculaire)\n- **VIH** (adénopathies généralisées), mononucléose, toxoplasmose, THA\n- **Tumorales** : **lymphome de Burkitt** (mâchoire, abdomen), **leucémies**, lymphome de Hodgkin, métastases (neuroblastome)',
    diagnostic:
      '## Examen\n- Taille, siège, consistance, sensibilité, inflammation, fistule\n- Porte d’entrée ORL, dentaire, cutanée ; autres aires ganglionnaires, rate, foie\n- Signes généraux : fièvre prolongée, sueurs, amaigrissement, pâleur, purpura\n- Contage tuberculeux, statut VIH de la mère, vaccination BCG\n\n## Signes d’alarme\n- Taille > 2 cm, siège **sus-claviculaire**, consistance dure, croissance rapide, signes généraux, hépatosplénomégalie, cytopénies\n\n## Examens\n- NFS + frottis (blastes), test VIH, radiographie thoracique\n- **Cytoponction** avec **Xpert MTB/RIF** ; **biopsie** si non contributive',
    examens: [
      ['premiere_intention', 'nfs', 'Leucémie, infection.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'radiographie-thoracique', 'Tuberculose, masse médiastinale.'],
      ['deuxieme_intention', 'cytoponction-ganglionnaire', 'Cytologie, Xpert.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose ganglionnaire.'],
      ['confirmation', 'biopsie-histologie', 'Lymphome.'],
      ['deuxieme_intention', 'echographie-parties-molles', 'Abcès, nature de la masse.'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-enfant', 'Adénopathie froide, fistulisée, contage.'],
      ['lymphome-de-burkitt', 'Masse de la mâchoire ou abdominale à croissance rapide.'],
      ['infection-vih-enfant', 'Adénopathies généralisées, retard de croissance.'],
      ['Adénite post-BCG', 'Axillaire gauche, quelques mois après le BCG.'],
      ['Masses non ganglionnaires', 'Kyste du tractus thyréoglosse, kyste branchial, oreillons.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Infections ORL et cutanées, tuberculose, VIH, adénite post-BCG, lymphome de Burkitt',
    principes: [
      [
        'Adénopathie réactionnelle ou adénite aiguë',
        'Traiter l’infection.',
        '- Traitement de la porte d’entrée ; adénite bactérienne : **amoxicilline-acide clavulanique** ou **cloxacilline** 7–10 jours ; drainage si abcès\n- Revoir à 2–4 semaines',
      ],
      [
        'Causes spécifiques',
        'Traiter la cause.',
        '- Tuberculose : traitement antituberculeux de l’enfant\n- Adénite post-BCG : surveillance (régression spontanée), ponction si fluctuante, pas d’antituberculeux en général\n- Suspicion de lymphome ou de leucémie : orientation urgente en hémato-oncologie pédiatrique',
      ],
      [
        'À éviter',
        'Ne pas retarder le diagnostic.',
        '- Pas de corticoïdes avant le diagnostic ; pas d’antibiothérapies répétées sans réévaluation',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Adénite bactérienne (avec acide clavulanique)'],
      ['cloxacilline', 'alternative', 'Adénite staphylococcique'],
      ['paracetamol', 'adjuvant', 'Douleur, fièvre'],
    ],
    complications: [
      {
        nom: 'Abcès ganglionnaire',
        description: 'Adénite suppurée.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Fluctuation, peau rouge',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Fistulisation tuberculeuse',
        fiche: 'tuberculose-enfant',
        description: 'Adénite tuberculeuse.',
        traitement: '- Antituberculeux',
        clinique: '- Écoulement chronique',
        paraclinique: '- Xpert',
      },
    ],
    evolution: '## Pronostic\n- Bénin pour les adénopathies réactionnelles ; celui de la cause sinon',
    urgences: [],
    symptomes: [
      ['Adénopathies', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Tuméfaction cervicale', 'frequent'],
      ['Perte de poids', 'occasionnel'],
      ['Sueurs nocturnes', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
    ],
    niveaux: {
      cs: [
        '- Recherche de la porte d’entrée, antibiotiques si adénite, test VIH',
        '- Signes d’alarme, adénopathie persistante',
      ],
      hgr: ['- NFS, cytoponction, Xpert, biopsie', ''],
      tert: ['- Hémato-oncologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Adénopathie cervicale réactionnelle',
        type: 'commune',
        description: 'Infection ORL.',
        terrain: '- Enfant d’âge préscolaire',
        fonctionnels: '',
        generaux: '- Fébricule',
        physiques: '- Petits ganglions mobiles, porte d’entrée',
        paraclinique: '',
        etiologies: '- Infection ORL',
        syndromes: [],
      },
      {
        nom: 'Adénite tuberculeuse',
        type: 'etiologique',
        description: 'Froide, fistulisée.',
        terrain: '- Contage, VIH',
        fonctionnels: '',
        generaux: '- Amaigrissement, fièvre',
        physiques: '- Adénopathie fluctuante',
        paraclinique: '- Xpert positif',
        etiologies: '- M. tuberculosis',
        syndromes: [],
      },
      {
        nom: 'Adénopathie tumorale',
        type: 'gravite',
        description: 'Lymphome, leucémie.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Pâleur, fièvre',
        physiques: '- Ganglions durs, splénomégalie',
        paraclinique: '- Cytopénies, biopsie',
        etiologies: '',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
      },
    ],
  },

  // =================================================================== Douleur abdominale de l'enfant
  {
    ...PED,
    slug: 'douleur-abdominale-enfant',
    nom: 'Douleur abdominale de l’enfant',
    resume:
      'Motif fréquent : éliminer d’abord une urgence chirurgicale (appendicite, invagination, hernie étranglée, torsion du testicule ou de l’ovaire, occlusion) et une cause médicale grave (acidocétose, crise vaso-occlusive, pneumonie de la base, infection urinaire, paludisme, hépatite) ; examen complet (organes génitaux, orifices herniaires, poumons) ; douleurs abdominales fonctionnelles récurrentes fréquentes chez l’enfant d’âge scolaire.',
    definition:
      'Douleur de l’abdomen chez l’enfant, aiguë (< 1 semaine) ou chronique et récidivante, d’origine chirurgicale, médicale ou fonctionnelle.',
    physiopathologie:
      '## Causes aiguës\n- **Chirurgicales** : appendicite, invagination (nourrisson), hernie étranglée, torsion du testicule ou de l’ovaire, occlusion, péritonite, traumatisme\n- **Médicales** : gastro-entérite, **infection urinaire**, **pneumonie** de la base, **paludisme**, hépatite, **acidocétose**, **crise vaso-occlusive** drépanocytaire, angine (streptocoque), constipation, parasitoses, purpura rhumatoïde\n\n## Douleurs récurrentes\n- Fonctionnelles (le plus souvent), constipation, parasitoses, H. pylori, intolérances, stress',
    diagnostic:
      '## Signes de gravité (urgence)\n- Altération de l’état général, **vomissements bilieux**, défense ou contracture, distension, arrêt des matières\n- Sang dans les selles (invagination), masse, choc, déshydratation\n- Douleur scrotale ou inguinale, polypnée (acidocétose, pneumonie)\n\n## Examen complet\n- Abdomen, **orifices herniaires**, **organes génitaux**, auscultation pulmonaire, gorge, peau (purpura)\n\n## Examens\n- Selon l’orientation : bandelette urinaire, glycémie, TDR paludisme, NFS, CRP, échographie abdominale, radiographie, test drépanocytose',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Infection urinaire, cétonurie.'],
      ['premiere_intention', 'glycemie', 'Acidocétose.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'nfs', 'Infection, anémie.'],
      ['deuxieme_intention', 'echographie-abdominale', 'Appendicite, invagination.'],
      ['deuxieme_intention', 'abdomen-sans-preparation', 'Occlusion, perforation.'],
      ['deuxieme_intention', 'radiographie-thoracique', 'Pneumonie de la base.'],
      ['etiologique', 'examen-parasitologique-selles', 'Parasitoses.'],
    ],
    scores: [],
    differentiels: [
      ['appendicite-enfant', 'Douleur de la fosse iliaque droite, fièvre.'],
      ['invagination-intestinale-aigue', 'Nourrisson, crises de pleurs, rectorragies.'],
      ['torsion-du-testicule', 'Douleur scrotale.'],
      ['acidocetose-diabetique-enfant', 'Polypnée, cétonurie.'],
      ['crise-vaso-occlusive-enfant-drepanocytaire', 'Drépanocytaire.'],
      ['infection-urinaire-enfant', 'Bandelette positive.'],
      ['pneumonie-enfant', 'Polypnée, toux.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Gastro-entérites, constipation, parasitoses, infections urinaires, paludisme, appendicite, douleurs fonctionnelles',
    principes: [
      [
        'Urgence chirurgicale suspectée',
        'Ne pas retarder.',
        '- À jeun, perfusion, antalgie (le paracétamol et la morphine ne masquent pas le diagnostic), transfert chirurgical',
      ],
      [
        'Causes médicales',
        'Traiter la cause.',
        '- Infection urinaire, paludisme, pneumonie, acidocétose, crise vaso-occlusive, gastro-entérite (SRO) : voir les fiches\n- Constipation : hydratation, fibres, **lactulose** ou macrogol',
      ],
      [
        'Douleurs récurrentes fonctionnelles',
        'Rassurer et accompagner.',
        '- Examen normal, croissance normale, pas de signes d’alarme : explications, régularité des repas, gestion du stress, déparasitage\n- Réévaluer si signes d’alarme (amaigrissement, réveils nocturnes, vomissements, sang dans les selles)',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['sro', 'premiere', 'Gastro-entérite'],
      ['lactulose', 'alternative', 'Constipation'],
      ['albendazole', 'alternative', 'Déparasitage'],
      ['morphine', 'adjuvant', 'Douleur intense (urgence chirurgicale)'],
    ],
    complications: [
      {
        nom: 'Péritonite',
        fiche: 'peritonite-aigue',
        description: 'Appendicite méconnue.',
        traitement: '- Chirurgie',
        clinique: '- Contracture',
        paraclinique: '',
      },
      {
        nom: 'Déshydratation',
        fiche: 'deshydratation-severe-enfant',
        description: 'Vomissements, diarrhée.',
        traitement: '- Réhydratation',
        clinique: '- Yeux enfoncés, pli cutané',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pour la majorité ; gravité des causes chirurgicales diagnostiquées tardivement',
    urgences: ['abdomen-aigu-chirurgical', 'deshydratation-severe-enfant', 'acidocetose-diabetique-urgence'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Diarrhée', 'frequent'],
      ['Distension abdominale', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
    ],
    niveaux: {
      cs: [
        '- Examen complet, bandelette, TDR, glycémie, orientation',
        '- Signes de gravité, défense, vomissements bilieux',
      ],
      hgr: ['- Échographie, bilan, chirurgie', ''],
      tert: ['- Chirurgie pédiatrique', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical':
        'Douleur abdominale de l’enfant avec défense, vomissements bilieux ou sang dans les selles',
      'deshydratation-severe-enfant': 'Douleur abdominale avec vomissements et signes de déshydratation',
      'acidocetose-diabetique-urgence': 'Douleur abdominale avec polypnée et glycémie élevée',
    },
    formes: [
      {
        nom: 'Douleur abdominale aiguë médicale',
        type: 'commune',
        description: 'Gastro-entérite, infection.',
        terrain: '- Enfant',
        fonctionnels: '- Douleurs diffuses, diarrhée',
        generaux: '- Fièvre',
        physiques: '- Abdomen souple',
        paraclinique: '- Selon l’orientation',
        etiologies: '- Infections',
        syndromes: [],
      },
      {
        nom: 'Abdomen chirurgical',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Vomissements bilieux',
        generaux: '- Altération',
        physiques: '- Défense, contracture, masse',
        paraclinique: '- Échographie',
        etiologies: '- Appendicite, invagination',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
      {
        nom: 'Douleurs abdominales fonctionnelles',
        type: 'evolutive',
        description: 'Récurrentes.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '- Douleurs péri-ombilicales',
        generaux: '- Bon état général',
        physiques: '- Examen normal',
        paraclinique: '- Bilan normal',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Énurésie
  {
    ...PED,
    slug: 'enuresie',
    nom: 'Énurésie',
    resume:
      'Mictions involontaires pendant le sommeil après 5 ans : fréquente, bénigne, souvent familiale ; rechercher une cause organique si diurne, secondaire, ou avec signes urinaires (infection, diabète, constipation, malformation, drépanocytose) ; bandelette urinaire ; explications et déculpabilisation, calendrier, boissons le matin, miction au coucher ; alarme ou desmopressine si persistante.',
    definition:
      'Miction normale, involontaire et inconsciente pendant le sommeil chez un enfant de plus de 5 ans, au moins une fois par mois ; primaire si l’enfant n’a jamais été propre, secondaire après au moins 6 mois de propreté.',
    physiopathologie:
      '## Mécanismes\n- Polyurie nocturne (déficit relatif en hormone antidiurétique), capacité vésicale réduite, difficulté d’éveil\n- Facteurs génétiques (antécédents familiaux fréquents)\n\n## Causes à rechercher (énurésie secondaire ou compliquée)\n- **Infection urinaire**, **constipation**, **diabète** (polyurie), **drépanocytose** (hyposthénurie), malformations, vessie neurologique, apnées du sommeil, stress (naissance, deuil, violences)',
    diagnostic:
      '## Évaluation\n- Type (primaire ou secondaire), fréquence, symptômes diurnes (urgences, fuites, dysurie)\n- Boissons, transit, ronflements, retentissement psychologique\n- Examen : abdomen, organes génitaux, rachis lombaire (anomalie), examen neurologique\n- **Bandelette urinaire** (glucose, leucocytes, nitrites, densité)\n- Rechercher une maltraitance en cas d’énurésie secondaire brutale',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Infection, glycosurie.'],
      ['etiologique', 'ecbu', 'Infection urinaire.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['etiologique', 'test-rapide-drepanocytose', 'Drépanocytose.'],
      ['deuxieme_intention', 'echographie-renale', 'Malformation, formes compliquées.'],
    ],
    scores: [],
    differentiels: [
      ['infection-urinaire-enfant', 'Brûlures, fièvre, bandelette positive.'],
      ['diabete-type-1-enfant', 'Polyurie, soif, amaigrissement.'],
      ['nephropathie-drepanocytaire', 'Drépanocytaire avec polyurie.'],
      ['epilepsie-enfant', 'Crises nocturnes avec perte d’urines.'],
      ['maltraitance-enfant', 'Énurésie secondaire, changement de comportement.'],
    ],
    etiologies:
      '## Facteurs\n- Antécédents familiaux, sommeil profond, polyurie nocturne, constipation, stress',
    principes: [
      [
        'Mesures générales',
        'Déculpabiliser.',
        '- Expliquer que l’enfant n’est pas fautif ; **ne jamais punir ni humilier**\n- Boire suffisamment le matin et à midi, limiter le soir, uriner avant le coucher\n- Calendrier des nuits sèches avec récompenses ; traiter la constipation',
      ],
      [
        'Traitements',
        'Formes persistantes après 6–7 ans.',
        '- **Alarme** d’énurésie (efficace à long terme) si disponible\n- **Desmopressine** 120–240 µg (lyophilisat sublingual) ou 0,2–0,4 mg (comprimé) au coucher, avec **restriction hydrique** 1 h avant et 8 h après (risque d’hyponatrémie), 3 mois puis arrêt progressif',
      ],
      [
        'Causes organiques',
        'Traiter la cause.',
        '- Infection urinaire, diabète, constipation, drépanocytose : voir fiches',
      ],
    ],
    molecules: [
      ['desmopressine', 'alternative', 'Énurésie persistante'],
      ['lactulose', 'adjuvant', 'Constipation associée'],
    ],
    complications: [
      {
        nom: 'Retentissement psychologique',
        description: 'Honte, isolement, punitions.',
        traitement: '- Déculpabilisation, soutien',
        clinique: '- Baisse de l’estime de soi',
        paraclinique: '',
      },
      {
        nom: 'Hyponatrémie sous desmopressine',
        fiche: 'hyponatremie',
        description: 'Boissons abondantes le soir.',
        traitement: '- Arrêt, restriction hydrique',
        clinique: '- Céphalées, vomissements, convulsions',
        paraclinique: '- Natrémie',
      },
    ],
    evolution: '## Pronostic\n- Guérison spontanée d’environ 15 % des enfants par an ; rare à l’âge adulte',
    urgences: [],
    symptomes: [
      ['Incontinence urinaire', 'tres_frequent'],
      ['Troubles du sommeil', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Bandelette, conseils, calendrier', '- Énurésie diurne, secondaire, signes urinaires'],
      hgr: ['- Bilan, desmopressine', ''],
      tert: ['- Néphrologie ou urologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Énurésie primaire isolée',
        type: 'commune',
        description: 'Forme bénigne.',
        terrain: '- Garçon > 5 ans, antécédents familiaux',
        fonctionnels: '- Pipi au lit',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- Bandelette normale',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Énurésie secondaire ou compliquée',
        type: 'etiologique',
        description: 'Cause organique ou psychologique.',
        terrain: '',
        fonctionnels: '- Fuites diurnes, brûlures, polyurie',
        generaux: '',
        physiques: '',
        paraclinique: '- Bandelette anormale',
        etiologies: '- Infection, diabète, stress',
        syndromes: [],
      },
    ],
  },

  // =================================================================== APLV
  {
    ...PED,
    slug: 'allergie-proteines-lait-vache',
    nom: 'Allergie aux protéines du lait de vache',
    resume:
      'Allergie du nourrisson aux protéines du lait de vache (préparations infantiles, plus rarement via le lait maternel) : formes immédiates (urticaire, vomissements, anaphylaxie) ou retardées (diarrhée, rectorragies, eczéma, mauvaise prise de poids) ; éviction et test de réintroduction ; poursuivre l’allaitement (éviction maternelle si besoin) ; hydrolysat poussé de protéines ; éviter les surdiagnostics et les laits non adaptés.',
    definition:
      'Réaction immunologique aux protéines du lait de vache (caséine, β-lactoglobuline), médiée par les IgE (réaction immédiate) ou non (réaction retardée digestive ou cutanée).',
    physiopathologie:
      '## Mécanismes\n- Sensibilisation aux protéines du lait de vache, surtout lors de l’introduction de préparations infantiles\n- **IgE-médiée** : réaction dans les 2 heures\n- **Non IgE-médiée** : proctocolite, entéropathie, entérocolite (FPIES)\n\n## Évolution\n- Guérison chez la majorité avant 3–5 ans',
    diagnostic:
      '## Clinique\n- **Immédiate** : urticaire, œdème, vomissements, toux, sifflements, **anaphylaxie** après une prise de lait\n- **Retardée** : vomissements, diarrhée, **rectorragies** (nourrisson allaité, en bon état), eczéma sévère, coliques importantes, cassure de la courbe de poids\n\n## Diagnostic\n- **Éviction** de 2 à 4 semaines puis **réintroduction** sous surveillance (sauf antécédent d’anaphylaxie) : réapparition des symptômes = diagnostic\n- Tests cutanés ou IgE spécifiques si disponibles (forme immédiate)\n- Éliminer infection, invagination (rectorragies), reflux',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Retentissement sur la croissance.'],
      ['deuxieme_intention', 'nfs', 'Anémie, éosinophilie.'],
      ['etiologique', 'coproculture', 'Diarrhée infectieuse.'],
    ],
    scores: [],
    differentiels: [
      ['pleurs-et-coliques-nourrisson', 'Coliques sans autres signes.'],
      ['Reflux gastro-œsophagien', 'Régurgitations sans signes allergiques.'],
      ['invagination-intestinale-aigue', 'Rectorragies avec crises de pleurs et pâleur.'],
      ['diarrhee-persistante-enfant', 'Diarrhée infectieuse prolongée.'],
      ['Intolérance au lactose', 'Diarrhée après gastro-entérite, sans allergie.'],
    ],
    etiologies: '## Facteurs\n- Antécédents familiaux d’atopie, introduction précoce de lait artificiel',
    principes: [
      [
        'Nourrisson allaité',
        'Préserver l’allaitement.',
        '- **Poursuivre l’allaitement** ; éviction des produits laitiers chez la mère seulement si symptômes chez l’enfant allaité, avec **calcium** et vitamine D pour la mère',
      ],
      [
        'Nourrisson nourri au lait artificiel',
        'Substituer.',
        '- **Hydrolysat poussé** de protéines (lait spécial) ; préparation à base d’acides aminés si échec ou forme sévère\n- Pas de lait de chèvre, de brebis, ni de laits végétaux non adaptés (risque de malnutrition) ; préparations à base de soja seulement après 6 mois si besoin\n- Diversification normale sans produits laitiers',
      ],
      [
        'Suivi',
        'Réintroduire.',
        '- Test de réintroduction tous les 6–12 mois (à l’hôpital si forme immédiate)\n- Forme immédiate : plan d’urgence, **adrénaline** en cas d’anaphylaxie\n- Surveillance de la croissance',
      ],
    ],
    molecules: [
      ['adrenaline-epinephrine', 'premiere', 'Anaphylaxie'],
      ['cetirizine', 'alternative', 'Urticaire'],
      ['calcium', 'adjuvant', 'Mère en éviction'],
      ['cholecalciferol-vitamine-d3', 'adjuvant', 'Enfant et mère en éviction'],
    ],
    complications: [
      {
        nom: 'Anaphylaxie',
        fiche: 'anaphylaxie-enfant',
        description: 'Forme IgE-médiée.',
        traitement: '- Adrénaline IM',
        clinique: '- Urticaire, détresse, choc',
        paraclinique: '',
      },
      {
        nom: 'Retard de croissance',
        fiche: 'retard-staturo-ponderal',
        description: 'Entéropathie, régimes inadaptés.',
        traitement: '- Lait adapté, suivi nutritionnel',
        clinique: '- Cassure de la courbe',
        paraclinique: '- Anthropométrie',
      },
    ],
    evolution: '## Pronostic\n- Tolérance acquise chez 50 % à 1 an et 80–90 % à 3–5 ans',
    urgences: [],
    symptomes: [
      ['Vomissements', 'frequent'],
      ['Diarrhée', 'frequent'],
      ['Rectorragies', 'occasionnel'],
      ['Éruption cutanée', 'frequent'],
      ['Pleurs excessifs', 'frequent'],
      ['Retard de croissance', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: ['- Soutien à l’allaitement, orientation', '- Réaction immédiate, cassure pondérale'],
      hgr: ['- Éviction, lait adapté, réintroduction', ''],
      tert: ['- Allergologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Proctocolite du nourrisson allaité',
        type: 'commune',
        description: 'Forme retardée bénigne.',
        terrain: '- Nourrisson allaité',
        fonctionnels: '- Sang dans les selles',
        generaux: '- Bon état général',
        physiques: '- Examen normal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Allergie immédiate',
        type: 'gravite',
        description: 'IgE-médiée.',
        terrain: '- Introduction du lait artificiel',
        fonctionnels: '- Vomissements',
        generaux: '',
        physiques: '- Urticaire, œdème, sifflements',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Pleurs et coliques
  {
    ...PED,
    slug: 'pleurs-et-coliques-nourrisson',
    nom: 'Pleurs et coliques du nourrisson',
    resume:
      'Pleurs prolongés du nourrisson en bonne santé (plus de 3 heures par jour, plus de 3 jours par semaine, entre 2 semaines et 4 mois), souvent le soir : diagnostic d’élimination ; rechercher une cause organique (fièvre, infection, otite, invagination, hernie étranglée, fracture, faim, reflux, allergie) ; rassurer, soutenir les parents, techniques d’apaisement, pas de médicaments ; prévenir le syndrome du bébé secoué.',
    definition:
      'Épisodes de pleurs inexpliqués, prolongés et difficiles à calmer chez un nourrisson de moins de 5 mois en bonne santé, qui grandit normalement.',
    physiopathologie:
      '## Mécanismes\n- Mal connus : immaturité digestive et neurologique, régulation des émotions, facteurs familiaux (fatigue, anxiété)\n- Évolution spontanément favorable vers 3–4 mois\n\n## Causes organiques à éliminer\n- Faim (allaitement insuffisant), infection (otite, infection urinaire, méningite), invagination, hernie étranglée, torsion, fracture (maltraitance), cheveu enroulé autour d’un doigt, reflux, allergie au lait de vache',
    diagnostic:
      '## Évaluation\n- Âge, durée et horaire des pleurs, alimentation (prise du sein, volumes), selles, vomissements\n- **Signes d’alarme** : fièvre, vomissements (bilieux), sang dans les selles, refus de boire, léthargie, cassure pondérale, début après 4 mois, cri aigu inhabituel\n- **Examen complet déshabillé** : fontanelle, tympans, abdomen, orifices herniaires, organes génitaux, membres (fracture), doigts et orteils\n- Courbe de poids normale = argument rassurant\n- Épuisement des parents, risque de secouement',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Courbe de poids.'],
      ['etiologique', 'bandelette-urinaire', 'Infection urinaire.'],
      ['etiologique', 'otoscopie', 'Otite.'],
    ],
    scores: [],
    differentiels: [
      ['invagination-intestinale-aigue', 'Crises de pleurs avec pâleur, vomissements, rectorragies.'],
      ['hernie-inguinale-enfant', 'Masse inguinale irréductible.'],
      ['infection-urinaire-enfant', 'Fièvre, bandelette positive.'],
      ['otite-moyenne-aigue', 'Fièvre, tympan bombé.'],
      ['allergie-proteines-lait-vache', 'Eczéma, rectorragies, vomissements.'],
      ['maltraitance-enfant', 'Ecchymoses, fractures.'],
    ],
    etiologies: '## Terrain\n- Nourrisson de 2 semaines à 4 mois, en bonne santé',
    principes: [
      [
        'Rassurer et soutenir',
        'Prévenir l’épuisement.',
        '- Expliquer le caractère bénin et transitoire\n- Vérifier l’allaitement (position, fréquence) et les volumes\n- Techniques d’apaisement : bercer, porter (portage), peau à peau, bruit blanc, promenade\n- **Ne jamais secouer un bébé** : poser l’enfant en sécurité dans son lit et s’éloigner un moment si débordé ; relais familial',
      ],
      [
        'À éviter',
        'Ne pas nuire.',
        '- Pas de médicaments (siméticone, antispasmodiques, sédatifs) ni de tisanes, pas de changements répétés de lait\n- Pas d’eau ni d’aliments avant 6 mois',
      ],
      [
        'Cause organique',
        'Traiter.',
        '- Selon l’examen : infection, hernie, invagination, allergie (voir fiches)',
      ],
    ],
    molecules: [['paracetamol', 'adjuvant', 'Seulement si douleur d’une cause identifiée']],
    complications: [
      {
        nom: 'Syndrome du bébé secoué',
        fiche: 'maltraitance-enfant',
        description: 'Épuisement parental.',
        traitement: '- Prévention, protection',
        clinique: '- Somnolence, convulsions, vomissements',
        paraclinique: '- Imagerie cérébrale',
      },
      {
        nom: 'Arrêt précoce de l’allaitement',
        description: 'Doute sur la qualité du lait.',
        traitement: '- Soutien à l’allaitement',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Disparition spontanée vers 3–4 mois, sans séquelles',
    urgences: [],
    symptomes: [
      ['Pleurs excessifs', 'tres_frequent'],
      ['Distension abdominale', 'occasionnel'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
    ],
    niveaux: {
      cs: ['- Examen complet, conseils, soutien des parents', '- Signes d’alarme'],
      hgr: ['- Recherche d’une cause organique', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Coliques du nourrisson',
        type: 'commune',
        description: 'Forme bénigne.',
        terrain: '- Nourrisson de 2 semaines à 4 mois',
        fonctionnels: '- Pleurs du soir, jambes repliées',
        generaux: '- Bon état général',
        physiques: '- Examen normal',
        paraclinique: '- Croissance normale',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Pleurs révélant une cause organique',
        type: 'gravite',
        description: 'Signes d’alarme.',
        terrain: '',
        fonctionnels: '- Pleurs inhabituels, vomissements',
        generaux: '- Fièvre, léthargie',
        physiques: '- Anomalie à l’examen',
        paraclinique: '',
        etiologies: '- Infection, invagination, fracture',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Fièvre prolongée
  {
    ...PED,
    slug: 'fievre-prolongee-enfant',
    nom: 'Fièvre prolongée de l’enfant',
    resume:
      'Fièvre de plus de 7 jours (PCIME) chez l’enfant : rechercher paludisme (TDR), infection urinaire, fièvre typhoïde, tuberculose, VIH, ostéomyélite ou arthrite, abcès, endocardite, rhumatisme articulaire aigu, hépatite, leishmaniose, THA, et causes non infectieuses (leucémie, lymphome, maladie de Kawasaki, maladies inflammatoires) ; bilan orienté, hospitalisation, pas d’antibiotiques à l’aveugle sans prélèvements.',
    definition:
      'Fièvre persistant plus de 7 jours chez l’enfant (PCIME), ou fièvre sans cause évidente après un premier bilan (fièvre prolongée inexpliquée).',
    physiopathologie:
      '## Causes\n- **Infectieuses (les plus fréquentes)** : paludisme (récidives, résistance), **fièvre typhoïde**, **tuberculose**, **VIH** et infections opportunistes, **infection urinaire**, ostéomyélite, arthrite, abcès profonds, endocardite, sinusite, hépatites, brucellose, THA, leishmaniose viscérale\n- **Inflammatoires** : rhumatisme articulaire aigu, maladie de Kawasaki, arthrite juvénile, lupus\n- **Tumorales** : leucémies, lymphomes (Burkitt), neuroblastome\n- Médicaments, fièvre factice',
    diagnostic:
      '## Évaluation\n- Courbe thermique, signes associés (toux, diarrhée, douleurs osseuses, éruption, adénopathies)\n- Contage tuberculeux, statut VIH, vaccination, voyages, animaux, traitements reçus\n- Examen complet : ORL, cœur (souffle), articulations et os, peau, ganglions, foie et rate, fond d’œil\n\n## Examens\n- **TDR paludisme**/goutte épaisse, **NFS** + frottis, CRP, **bandelette urinaire**/ECBU, **hémocultures**\n- **Test VIH**, radiographie thoracique, Xpert ou TB-LAM, sérologie typhoïde peu fiable\n- Selon l’orientation : échographie abdominale, échocardiographie, ponction lombaire, myélogramme',
    examens: [
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'nfs', 'Infection, leucémie.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'ecbu', 'Infection urinaire.'],
      ['premiere_intention', 'hemocultures', 'Typhoïde, bactériémie.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'radiographie-thoracique', 'Tuberculose.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose.'],
      ['deuxieme_intention', 'echographie-abdominale', 'Abcès, adénopathies profondes.'],
      ['deuxieme_intention', 'echocardiographie', 'Endocardite, RAA.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-simple-enfant', 'TDR positif.'],
      ['fievre-typhoide-enfant', 'Hémocultures, troubles digestifs.'],
      ['tuberculose-enfant', 'Contage, amaigrissement, toux.'],
      ['infection-vih-enfant', 'Infections récidivantes, retard de croissance.'],
      ['osteomyelite-aigue', 'Douleur osseuse, impotence.'],
      ['rhumatisme-articulaire-aigu-enfant', 'Arthrite, cardite, ASLO.'],
      ['leucemies-aigues-adulte', 'Pâleur, saignements, blastes (leucémie de l’enfant).'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Paludisme, typhoïde, tuberculose, VIH, infections urinaires et ostéoarticulaires',
    principes: [
      [
        'Démarche',
        'Trouver la cause.',
        '- Hospitaliser si fièvre > 7 jours, signes de danger ou altération de l’état général\n- Bilan orienté avant tout traitement ; prélèvements (hémocultures, ECBU) **avant les antibiotiques**',
      ],
      [
        'Traitement selon la cause',
        'Traiter ce qui est trouvé.',
        '- Paludisme : CTA ; typhoïde : azithromycine ou ceftriaxone ; tuberculose : antituberculeux ; VIH : ARV et prophylaxies\n- Infection bactérienne grave non documentée : ceftriaxone après prélèvements, réévaluation à 48–72 h\n- Paracétamol pour le confort',
      ],
      [
        'À éviter',
        'Ne pas masquer.',
        '- Pas de traitements antipaludiques répétés sans TDR positif, pas d’antibiotiques successifs sans prélèvements, pas de corticoïdes avant le diagnostic',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Fièvre'],
      ['ceftriaxone', 'alternative', 'Infection bactérienne grave'],
      ['artemether', 'alternative', 'Paludisme (CTA)'],
      ['azithromycine', 'alternative', 'Fièvre typhoïde'],
    ],
    complications: [
      {
        nom: 'Malnutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Fièvre prolongée.',
        traitement: '- Renutrition',
        clinique: '- Amaigrissement',
        paraclinique: '- Anthropométrie',
      },
      {
        nom: 'Retard diagnostique d’une maladie grave',
        fiche: 'leucemies-aigues-adulte',
        description: 'Leucémie, tuberculose.',
        traitement: '- Bilan complet',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Celui de la cause ; une cause est trouvée dans la grande majorité des cas',
    urgences: ['paludisme-grave-urgence', 'syndrome-meninge-febrile'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Perte de poids', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Adénopathies', 'occasionnel'],
      ['Hépatomégalie', 'occasionnel'],
      ['Splénomégalie', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- TDR, bandelette, orientation de toute fièvre > 7 jours',
        '- Fièvre > 7 jours, signes de danger',
      ],
      hgr: ['- Bilan, hémocultures, radiographie, test VIH', ''],
      tert: ['- Pédiatrie spécialisée, myélogramme', ''],
    },
    alertes: {
      'paludisme-grave-urgence': 'Fièvre avec signes de danger',
      'syndrome-meninge-febrile': 'Fièvre avec raideur de nuque ou troubles de conscience',
    },
    formes: [
      {
        nom: 'Fièvre prolongée d’origine infectieuse',
        type: 'commune',
        description: 'Cause la plus fréquente.',
        terrain: '- Enfant',
        fonctionnels: '- Selon le foyer',
        generaux: '- Fièvre > 7 jours',
        physiques: '- Foyer infectieux',
        paraclinique: '- Bilan orienté positif',
        etiologies: '- Paludisme, typhoïde, tuberculose',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Fièvre prolongée d’origine tumorale',
        type: 'gravite',
        description: 'Leucémie, lymphome.',
        terrain: '',
        fonctionnels: '- Douleurs osseuses',
        generaux: '- Pâleur, amaigrissement',
        physiques: '- Adénopathies, splénomégalie, purpura',
        paraclinique: '- Cytopénies, blastes',
        etiologies: '',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
      },
    ],
  },

  // =================================================================== Anaphylaxie de l'enfant
  {
    ...PED,
    slug: 'anaphylaxie-enfant',
    nom: 'Anaphylaxie de l’enfant',
    resume:
      'Réaction allergique grave et brutale (aliments, piqûres d’insectes, médicaments, vaccins) : atteinte cutanée (urticaire, œdème) avec atteinte respiratoire (stridor, sifflements), digestive ou circulatoire ; adrénaline IM 0,01 mg/kg (max 0,5 mg) dans la cuisse immédiatement, à répéter après 5 min ; position, oxygène, remplissage 20 mL/kg ; surveillance au moins 6–12 h ; éviction et plan d’urgence.',
    definition:
      'Réaction d’hypersensibilité systémique grave, d’installation rapide, pouvant engager le pronostic vital par atteinte des voies aériennes, de la respiration ou de la circulation.',
    physiopathologie:
      '## Mécanismes\n- Dégranulation des mastocytes et basophiles (IgE ou non) : vasodilatation, fuite capillaire, bronchospasme, œdème\n\n## Causes chez l’enfant\n- **Aliments** (arachide, lait, œuf, poisson, fruits de mer), **piqûres d’hyménoptères**, **médicaments** (pénicillines, AINS, produits de contraste), vaccins (rare), latex',
    diagnostic:
      '## Clinique (minutes à 2 heures)\n- **Peau** : urticaire, rougeur, prurit, œdème des lèvres, du visage (absente dans 10–20 % des cas)\n- **Respiratoire** : stridor, voix rauque, toux, **sifflements**, détresse\n- **Circulatoire** : pâleur, tachycardie, hypotension, malaise, hypotonie chez le nourrisson\n- **Digestive** : vomissements, douleurs abdominales\n- Le diagnostic est clinique : ne pas attendre d’examens',
    examens: [['premiere_intention', 'oxymetrie-de-pouls', 'Atteinte respiratoire.']],
    scores: [],
    differentiels: [
      ['urticaire-et-angio-oedeme', 'Urticaire sans atteinte systémique.'],
      ['laryngite-aigue-croup', 'Stridor fébrile progressif.'],
      ['asthme-enfant', 'Sifflements sans exposition allergénique.'],
      ['corps-etranger-voies-aeriennes', 'Syndrome de pénétration.'],
      ['Malaise vagal', 'Bradycardie, pâleur, sans signes cutanés.'],
    ],
    etiologies: '## Déclencheurs\n- Aliments, piqûres d’insectes, médicaments, vaccins',
    principes: [
      [
        'Adrénaline immédiate',
        'Traitement de première intention.',
        '- **Adrénaline 1 mg/mL IM** dans la face antérolatérale de la cuisse : **0,01 mg/kg** (maximum 0,5 mg) — repères : < 6 ans 0,15 mg ; 6–12 ans 0,3 mg ; > 12 ans 0,5 mg\n- **Répéter après 5 minutes** si pas d’amélioration',
      ],
      [
        'Mesures associées',
        'Soutenir.',
        '- Allonger (assis si détresse respiratoire), jambes surélevées si choc ; arrêter l’exposition\n- **Oxygène**, voie veineuse, **NaCl 0,9 %** 20 mL/kg en bolus si hypotension, à répéter\n- Sifflements : **salbutamol** inhalé ; stridor : adrénaline nébulisée\n- Antihistaminique et corticoïde **après** l’adrénaline (confort, pas d’effet immédiat)',
      ],
      [
        'Après la crise',
        'Prévenir la récidive.',
        '- Surveillance d’au moins 6 à 12 heures (réaction biphasique)\n- Identification et **éviction** de l’allergène, plan d’action écrit, adrénaline auto-injectable si disponible, orientation en allergologie\n- Kit d’urgence dans tous les lieux de vaccination',
      ],
    ],
    molecules: [
      ['adrenaline-epinephrine', 'premiere', 'Traitement de première intention'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage'],
      ['oxygene', 'premiere', 'Détresse respiratoire'],
      ['salbutamol', 'adjuvant', 'Bronchospasme'],
      ['cetirizine', 'adjuvant', 'Urticaire (après adrénaline)'],
      ['hydrocortisone', 'adjuvant', 'Après adrénaline'],
    ],
    complications: [
      {
        nom: 'Choc anaphylactique',
        fiche: 'choc-anaphylactique',
        description: 'Atteinte circulatoire.',
        traitement: '- Adrénaline, remplissage',
        clinique: '- Hypotension',
        paraclinique: '',
      },
      {
        nom: 'Obstruction des voies aériennes',
        description: 'Œdème laryngé.',
        traitement: '- Adrénaline, intubation',
        clinique: '- Stridor',
        paraclinique: '',
      },
      {
        nom: 'Réaction biphasique',
        description: 'Récidive après quelques heures.',
        traitement: '- Surveillance prolongée',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent si l’adrénaline est administrée rapidement ; décès possibles en cas de retard',
    urgences: [],
    symptomes: [
      ['Éruption cutanée', 'tres_frequent'],
      ['Œdème du visage', 'frequent'],
      ['Sibilants', 'frequent'],
      ['Stridor', 'occasionnel'],
      ['Hypotension', 'frequent'],
      ['Vomissements', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Adrénaline IM, position, oxygène, remplissage, transfert', '- Toute anaphylaxie'],
      hgr: ['- Surveillance 6–12 h, réanimation', ''],
      tert: ['- Allergologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Anaphylaxie alimentaire',
        type: 'commune',
        description: 'Après un repas.',
        terrain: '- Enfant atopique',
        fonctionnels: '- Prurit buccal, vomissements',
        generaux: '',
        physiques: '- Urticaire, œdème des lèvres',
        paraclinique: '',
        etiologies: '- Arachide, lait, œuf, poisson',
        syndromes: [],
      },
      {
        nom: 'Choc anaphylactique',
        type: 'gravite',
        description: 'Atteinte circulatoire.',
        terrain: '',
        fonctionnels: '- Malaise',
        generaux: '- Hypotension, pâleur',
        physiques: '- Tachycardie, hypotonie',
        paraclinique: '',
        etiologies: '- Médicament, piqûre',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Boiterie de l'enfant
  {
    ...PED,
    slug: 'boiterie-enfant',
    nom: 'Boiterie de l’enfant',
    resume:
      'Boiterie d’apparition récente : éliminer d’abord une arthrite septique ou une ostéomyélite (fièvre, douleur, impotence) et une fracture (maltraitance chez le jeune enfant) ; penser aux crises vaso-occlusives drépanocytaires, à la coxalgie tuberculeuse, à la synovite transitoire (« rhume de hanche »), à l’ostéochondrite (Legg-Perthes-Calvé), à l’épiphysiolyse (adolescent), aux leucémies et tumeurs ; examen complet, NFS, CRP, radiographie, échographie et ponction de hanche si épanchement.',
    definition:
      'Anomalie de la marche par esquive de l’appui sur un membre inférieur, d’origine douloureuse, neurologique ou mécanique.',
    physiopathologie:
      '## Causes selon l’âge\n- **Tout âge** : **arthrite septique**, **ostéomyélite**, fracture, traumatisme, **crise vaso-occlusive** ou infarctus osseux (drépanocytose), **tuberculose** ostéoarticulaire, leucémie, tumeurs osseuses, pyomyosite\n- **1–3 ans** : fracture des toddlers, maltraitance, luxation congénitale de hanche méconnue\n- **3–10 ans** : **synovite transitoire** (après infection virale), **ostéochondrite primitive de hanche** (Legg-Perthes-Calvé)\n- **Adolescent** : **épiphysiolyse fémorale supérieure** (surpoids), ostéochondroses, tumeurs\n- Neurologiques : paralysie cérébrale, poliomyélite, injections IM (sciatique)',
    diagnostic:
      '## Signes d’alarme\n- **Fièvre**, impotence totale, douleur à la mobilisation, articulation chaude et gonflée : **arthrite septique** jusqu’à preuve du contraire\n- Douleurs nocturnes, altération de l’état général, pâleur (leucémie, tumeur)\n- Ecchymoses inexpliquées (maltraitance)\n\n## Examen\n- Observer la marche, examiner tout le membre (hanche, genou, rachis, pieds), mobilité de la hanche (rotation interne), longueur des membres\n- Douleur projetée : une atteinte de hanche peut se révéler par une douleur du genou\n\n## Examens\n- NFS, **CRP**, VS, hémocultures, test drépanocytose\n- **Radiographies** (bassin, membre), **échographie de hanche** (épanchement), **ponction articulaire** si épanchement fébrile',
    examens: [
      ['premiere_intention', 'nfs', 'Infection, leucémie.'],
      ['premiere_intention', 'crp', 'Infection.'],
      ['premiere_intention', 'vitesse-sedimentation', 'Infection, inflammation.'],
      ['premiere_intention', 'radiographie-osseuse', 'Fracture, ostéochondrite, épiphysiolyse.'],
      ['deuxieme_intention', 'echographie-parties-molles', 'Épanchement de hanche.'],
      ['confirmation', 'ponction-articulaire', 'Arthrite septique.'],
      ['etiologique', 'test-rapide-drepanocytose', 'Drépanocytose.'],
      ['etiologique', 'hemocultures', 'Ostéomyélite, arthrite.'],
    ],
    scores: [],
    differentiels: [
      ['arthrite-septique', 'Fièvre, impotence, liquide purulent.'],
      ['osteomyelite-aigue', 'Douleur osseuse fébrile.'],
      ['crise-vaso-occlusive-enfant-drepanocytaire', 'Drépanocytaire.'],
      ['maltraitance-enfant', 'Fractures inexpliquées.'],
      ['mal-de-pott', 'Atteinte rachidienne tuberculeuse.'],
      ['Synovite transitoire de hanche', 'Apyrexie ou fébricule, CRP normale, guérison en quelques jours.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Infections ostéoarticulaires, drépanocytose, traumatismes, synovite transitoire, injections IM mal placées',
    principes: [
      [
        'Urgences',
        'Ne pas manquer.',
        '- **Arthrite septique** : ponction, lavage chirurgical, antibiotiques IV (**cloxacilline** ou céfazoline ± gentamicine ; ceftriaxone chez le drépanocytaire)\n- **Fracture** : immobilisation ; rechercher une maltraitance\n- **Épiphysiolyse** : mise en décharge immédiate et chirurgie',
      ],
      [
        'Causes bénignes',
        'Soulager.',
        '- **Synovite transitoire** : repos, **ibuprofène**, contrôle à 48–72 h (réévaluer si fièvre ou persistance)\n- Crise vaso-occlusive : antalgie, hydratation (voir fiche)',
      ],
      [
        'Causes chroniques',
        'Orienter.',
        '- Ostéochondrite, tuberculose ostéoarticulaire, tumeurs : orthopédie pédiatrique ; prévention des injections IM dans la fesse',
      ],
    ],
    molecules: [
      ['ibuprofene', 'premiere', 'Synovite transitoire, douleur'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['cloxacilline', 'alternative', 'Arthrite septique, ostéomyélite'],
      ['ceftriaxone', 'alternative', 'Drépanocytaire, salmonelle'],
    ],
    complications: [
      {
        nom: 'Destruction articulaire',
        fiche: 'arthrite-septique',
        description: 'Arthrite septique tardive.',
        traitement: '- Drainage précoce',
        clinique: '- Raideur, inégalité de longueur',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Ostéomyélite chronique',
        fiche: 'osteomyelite-chronique',
        description: 'Infection mal traitée.',
        traitement: '- Antibiotiques prolongés, chirurgie',
        clinique: '- Fistule',
        paraclinique: '- Séquestre',
      },
      {
        nom: 'Ostéonécrose de la tête fémorale',
        fiche: 'osteonecrose-tete-femorale',
        description: 'Drépanocytose, épiphysiolyse.',
        traitement: '- Orthopédie',
        clinique: '- Boiterie chronique',
        paraclinique: '- Radiographie, IRM',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pour les causes bénignes ; séquelles articulaires des infections et des épiphysiolyses diagnostiquées tardivement',
    urgences: [],
    symptomes: [
      ['Boiterie', 'tres_frequent'],
      ['Arthralgies', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Gonflement articulaire', 'occasionnel'],
      ['Impotence fonctionnelle', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'AAOS — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Examen, recherche de fièvre et de maltraitance, orientation',
        '- Fièvre, impotence, articulation chaude',
      ],
      hgr: ['- NFS, CRP, radiographies, ponction, antibiotiques', '- Chirurgie orthopédique'],
      tert: ['- Orthopédie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Synovite transitoire de hanche',
        type: 'commune',
        description: 'Forme bénigne.',
        terrain: '- Enfant de 3 à 10 ans, infection virale récente',
        fonctionnels: '- Boiterie, douleur de hanche',
        generaux: '- Pas ou peu de fièvre',
        physiques: '- Limitation de la rotation interne',
        paraclinique: '- CRP normale, épanchement modéré',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Boiterie fébrile (infection ostéoarticulaire)',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Drépanocytaire, jeune enfant',
        fonctionnels: '- Impotence',
        generaux: '- Fièvre',
        physiques: '- Articulation chaude, douleur osseuse',
        paraclinique: '- CRP élevée, ponction purulente',
        etiologies: '- Staphylocoque, salmonelle',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Épiphysiolyse fémorale supérieure',
        type: 'terrain',
        description: 'Adolescent.',
        terrain: '- Adolescent en surpoids',
        fonctionnels: '- Douleur de hanche ou du genou',
        generaux: '',
        physiques: '- Rotation externe du membre',
        paraclinique: '- Radiographie de hanche',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
