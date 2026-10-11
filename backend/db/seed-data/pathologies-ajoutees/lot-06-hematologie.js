'use strict';

/**
 * Lot 6 (hématologie) — anémie ferriprive, crise vaso-occlusive drépanocytaire de
 * l'adulte, syndrome thoracique aigu drépanocytaire, transfusion sanguine et réactions
 * transfusionnelles. Rédigé par IA (OMS, NHLBI, ASH, BSH, programmes nationaux) : à valider.
 */

const HEMATO = { departement: 'medecine-interne', specialite: 'Hématologie' };

module.exports = [
  // =================================================================== Anémie ferriprive
  {
    ...HEMATO,
    slug: 'anemie-ferriprive',
    nom: 'Anémie ferriprive',
    resume:
      'Anémie la plus fréquente : microcytaire, ferritine basse ; chercher la cause (saignements, ankylostomes, grossesse, carence d’apport), fer oral 3 mois après normalisation de l’Hb.',
    definition:
      'Anémie (Hb < 13 g/dL chez l’homme, < 12 g/dL chez la femme, < 11 g/dL chez la femme enceinte) due à une carence en fer, typiquement microcytaire et hypochrome avec ferritine basse.',
    physiopathologie:
      '## Mécanismes\n- Bilan martial négatif : pertes > apports ou besoins accrus\n- Épuisement des réserves (ferritine), puis baisse du fer circulant, puis anémie microcytaire\n- Retentissement : hypoxie tissulaire, adaptation cardiaque',
    diagnostic:
      '## Clinique\n- Pâleur cutanéo-muqueuse, asthénie, dyspnée d’effort, palpitations, tachycardie\n- Signes de carence : ongles cassants, chute des cheveux, glossite, perlèche, pica (géophagie)\n- Signes de gravité : dyspnée de repos, angor, insuffisance cardiaque, confusion\n\n## Biologie\n- Hb basse, **VGM < 80 fL**, TCMH basse, réticulocytes bas\n- **Ferritine < 30 µg/L** (< 100 si inflammation)',
    examens: [
      ['confirmation', 'nfs', 'Anémie microcytaire hypochrome, thrombocytose fréquente.'],
      ['confirmation', 'ferritine', 'Ferritine basse : carence en fer.'],
      ['premiere_intention', 'reticulocytes', 'Bas (anémie arégénérative).'],
      ['premiere_intention', 'crp', 'Interprétation de la ferritine.'],
      ['etiologique', 'examen-parasitologique-selles', 'Ankylostomes, trichocéphales, schistosomes.'],
      ['etiologique', 'oeufs-schistosomes-urines', 'Schistosomiase urogénitale (hématurie).'],
      [
        'etiologique',
        'endoscopie-digestive-haute',
        'Homme et femme ménopausée : saignement digestif (ulcère, cancer).',
      ],
      ['etiologique', 'test-helicobacter', 'Carence inexpliquée.'],
      ['etiologique', 'electrophorese-hb', 'Microcytose sans carence : thalassémie.'],
    ],
    scores: [],
    differentiels: [
      ['Anémie inflammatoire', 'Ferritine normale ou élevée, CRP élevée, maladie chronique.'],
      ['Thalassémies', 'Microcytose marquée avec Hb peu basse, ferritine normale, électrophorèse.'],
      ['drepanocytose', 'Anémie hémolytique normocytaire, électrophorèse.'],
      ['Anémie mégaloblastique', 'VGM > 100 fL, carence en B12 ou folates.'],
      ['paludisme-simple', 'Anémie hémolytique fébrile, TDR positif.'],
    ],
    etiologies:
      '## Pertes\n- **Gynécologiques** (ménorragies, fibromes)\n- **Digestives** : ankylostomes, ulcère, gastrite aux AINS, cancer colique ou gastrique, schistosomiase\n- Urinaires : schistosomiase urogénitale\n\n## Besoins accrus et apports insuffisants\n- **Grossesse** et allaitement, grossesses rapprochées\n- Alimentation pauvre en fer héminique, malabsorption (H. pylori, maladie cœliaque)',
    principes: [
      [
        'Fer oral',
        'Restaurer l’Hb et les réserves.',
        '- **Fer élément** 60 à 120 mg/j (une prise, à jeun ou un jour sur deux pour la tolérance), avec vitamine C\n- Poursuivre **3 mois après la normalisation de l’Hb**\n- Réponse attendue : réticulocytes à J7–10, Hb + 1 à 2 g/dL en 2 à 4 semaines\n- Grossesse : fer + **acide folique** quotidien',
      ],
      [
        'Fer IV',
        'Si le fer oral échoue ou ne convient pas.',
        '- Intolérance, malabsorption, anémie sévère en fin de grossesse, maladie inflammatoire intestinale\n- **Fer injectable** (gluconate ferrique, fer dextran : surveillance du risque allergique)',
      ],
      [
        'Traiter la cause',
        'Éviter la récidive.',
        '- Déparasitage (**albendazole** 400 mg), praziquantel si schistosomiase\n- Prise en charge des ménorragies, éradication d’H. pylori, endoscopie selon l’âge',
      ],
      [
        'Transfusion',
        'Seulement en cas de mauvaise tolérance.',
        '- Hb < 7 g/dL avec signes de décompensation, ou avant un geste urgent\n- Voir la fiche *Transfusion sanguine*',
      ],
    ],
    molecules: [
      ['fumarate-ferreux-fer', 'premiere', 'Fer oral 60 à 120 mg de fer élément par jour'],
      ['acide-folique', 'adjuvant', 'Grossesse'],
      ['vitamine-c-acide-ascorbique', 'adjuvant', 'Améliore l’absorption du fer'],
      ['gluconate-ferrique-de-sodium', 'deuxieme', 'Fer IV'],
      ['fer-dextran', 'alternative', 'Fer IV (risque allergique)'],
      ['albendazole', 'adjuvant', 'Déparasitage'],
    ],
    complications: [
      {
        nom: 'Insuffisance cardiaque à haut débit',
        fiche: 'insuffisance-cardiaque',
        description: 'Anémie profonde.',
        traitement: '- Transfusion lente, diurétique',
        clinique: '- Dyspnée, œdèmes',
        paraclinique: '- Hb',
      },
      {
        nom: 'Complications obstétricales',
        description: 'Prématurité, petit poids de naissance, mortalité maternelle en cas d’hémorragie.',
        traitement: '- Supplémentation systématique',
        clinique: '',
        paraclinique: '- Hb',
      },
      {
        nom: 'Retard de développement de l’enfant',
        description: 'Carence prolongée.',
        traitement: '- Fer, alimentation',
        clinique: '- Retard cognitif',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent si la cause est traitée ; récidive si la cause persiste',
    urgences: [],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Asthénie', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Palpitations', 'frequent'],
      ['Céphalées', 'occasionnel'],
      ['Syncope', 'rare'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'British National Formulary (BNF / BNF for Children)',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Hb, fer oral et acide folique, déparasitage, supplémentation des femmes enceintes',
        '- Hb < 7 g/dL, mauvaise tolérance, absence de réponse',
      ],
      hgr: ['- Bilan étiologique, fer IV, transfusion', '- Endoscopies, cause non trouvée'],
      tert: ['- Explorations digestives et hématologiques', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Anémie ferriprive de la femme',
        type: 'commune',
        description: 'Pertes gynécologiques et grossesses.',
        terrain: '- Femme en âge de procréer, grossesses rapprochées',
        fonctionnels: '- Asthénie, dyspnée d’effort',
        generaux: '',
        physiques: '- Pâleur, ongles cassants',
        paraclinique: '- Microcytose, ferritine basse',
        etiologies: '- Ménorragies, grossesse',
        syndromes: ['syndrome-anemique'],
        examens: [['ferritine', 'Confirmation']],
      },
      {
        nom: 'Anémie sévère mal tolérée',
        type: 'gravite',
        description: 'Décompensation cardiaque.',
        terrain: '- Hb < 7 g/dL, sujet âgé, cardiaque, grossesse',
        fonctionnels: '- Dyspnée de repos, angor',
        generaux: '- Tachycardie',
        physiques: '- Souffle systolique, œdèmes',
        paraclinique: '- Hb très basse',
        etiologies: '',
        syndromes: ['syndrome-anemique', 'syndrome-d-insuffisance-cardiaque-gauche'],
      },
    ],
  },

  // =================================================================== CVO adulte
  {
    ...HEMATO,
    slug: 'crise-vaso-occlusive-drepanocytaire-adulte',
    nom: 'Crise vaso-occlusive drépanocytaire de l’adulte',
    resume:
      'Douleur aiguë par occlusion microvasculaire chez le drépanocytaire : antalgie rapide et titrée (morphine), hydratation, recherche d’un facteur déclenchant et des complications (syndrome thoracique aigu).',
    definition:
      'Épisode douloureux aigu dû à l’occlusion des petits vaisseaux par les hématies falciformées, chez un patient atteint de drépanocytose (SS, SC, S-bêta-thalassémie), principale cause de consultation et d’hospitalisation.',
    physiopathologie:
      '## Mécanismes\n- Polymérisation de l’hémoglobine S désoxygénée : falciformation\n- Adhésion des hématies et des leucocytes à l’endothélium, vaso-occlusion, ischémie, inflammation\n- Facteurs favorisants : hypoxie, déshydratation, acidose, froid, infection, fièvre, effort, stress',
    diagnostic:
      '## Clinique\n- Douleurs osseuses intenses : rachis, membres, thorax, bassin\n- Fièvre modérée possible (sans exclure une infection)\n- Évaluation de la douleur (échelle numérique)\n\n## Signes de gravité à rechercher\n- Douleur thoracique, toux, dyspnée, SpO2 basse : **syndrome thoracique aigu**\n- Fièvre élevée, frissons : infection, ostéomyélite\n- Pâleur majeure, splénomégalie : anémie aiguë, séquestration\n- Déficit neurologique : AVC\n- Priapisme, douleur abdominale intense',
    examens: [
      ['premiere_intention', 'nfs', 'Hb à comparer à l’Hb de base, leucocytes.'],
      ['premiere_intention', 'reticulocytes', 'Érythroblastopénie (parvovirus) si réticulocytes bas.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'SpO2 : syndrome thoracique aigu.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme déclenchant.'],
      ['premiere_intention', 'crp', 'Infection.'],
      ['premiere_intention', 'creatinine', 'Néphropathie, choix des antalgiques.'],
      ['gravite', 'radiographie-thoracique', 'Douleur thoracique, signes respiratoires.'],
      ['gravite', 'hemocultures', 'Fièvre ≥ 38,5 °C.'],
      ['pretherapeutique', 'groupage-rai', 'Transfusion éventuelle.'],
      ['confirmation', 'electrophorese-hb', 'Si le diagnostic de drépanocytose n’est pas connu.'],
    ],
    scores: [],
    differentiels: [
      ['Ostéomyélite', 'Fièvre persistante, douleur localisée, gonflement, imagerie.'],
      ['Arthrite septique', 'Articulation chaude, ponction.'],
      ['appendicite-aigue', 'Douleur abdominale localisée persistante.'],
      ['Cholécystite et lithiase', 'Douleur de l’hypochondre droit, échographie.'],
    ],
    etiologies:
      '## Facteurs déclenchants\n- Infections (paludisme, pneumonie), fièvre\n- Déshydratation, froid, altitude, effort intense\n- Grossesse, stress, alcool\n- Souvent aucun facteur retrouvé',
    principes: [
      [
        'Antalgie rapide et titrée',
        'Soulager dans les 30 minutes.',
        '- Douleur modérée : **paracétamol** + **ibuprofène** (si rein normal, pas de grossesse avancée) ± **tramadol** ou **codéine**\n- Douleur sévère : **morphine** titrée IV (2 à 3 mg toutes les 5 à 10 min) puis morphine orale ou en bolus programmés\n- Réévaluation régulière ; surveillance de la sédation et de la fréquence respiratoire',
      ],
      [
        'Hydratation et mesures associées',
        'Limiter la falciformation.',
        '- Hydratation orale ou IV (2 à 3 L/j chez l’adulte, sans surcharge)\n- Oxygène si SpO2 < 95 %\n- Réchauffement, **spirométrie incitative** (prévention du syndrome thoracique aigu)\n- **Énoxaparine** préventive si hospitalisé',
      ],
      [
        'Facteur déclenchant',
        'Traiter la cause.',
        '- Paludisme : antipaludique ; fièvre : antibiotique (ceftriaxone) après hémocultures',
      ],
      [
        'Transfusion',
        'Réservée aux complications.',
        '- Pas de transfusion pour une CVO simple\n- Anémie aiguë mal tolérée, syndrome thoracique aigu, AVC : transfusion ou échange',
      ],
      [
        'Traitement de fond',
        'Réduire la fréquence des crises.',
        '- **Hydroxycarbamide** (hydroxyurée) si crises fréquentes ou syndrome thoracique aigu\n- **Acide folique**, prophylaxie du paludisme selon le programme, vaccinations (pneumocoque)\n- Éducation : hydratation, éviter le froid, consultation précoce',
      ],
    ],
    molecules: [
      ['morphine', 'premiere', 'Douleur sévère, titration IV'],
      ['paracetamol', 'premiere', 'Toutes les crises'],
      ['ibuprofene', 'premiere', 'Si fonction rénale normale'],
      ['tramadol', 'alternative', 'Douleur modérée'],
      ['codeine', 'alternative', 'Douleur modérée'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Hydratation IV'],
      ['enoxaparine', 'adjuvant', 'Prévention thrombotique à l’hôpital'],
      ['hydroxycarbamide', 'premiere', 'Traitement de fond'],
      ['acide-folique', 'adjuvant', 'Traitement de fond'],
    ],
    complications: [
      {
        nom: 'Syndrome thoracique aigu',
        fiche: 'syndrome-thoracique-aigu-drepanocytaire',
        description: 'Complique 10 à 20 % des CVO hospitalisées.',
        traitement: '- Oxygène, antibiotiques, transfusion',
        clinique: '- Douleur thoracique, toux, fièvre, SpO2 basse',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Anémie aiguë',
        description: 'Hémolyse, séquestration, érythroblastopénie.',
        traitement: '- Transfusion',
        clinique: '- Pâleur, splénomégalie',
        paraclinique: '- Hb, réticulocytes',
      },
      {
        nom: 'AVC',
        fiche: 'avc',
        description: 'Vasculopathie cérébrale.',
        traitement: '- Échange transfusionnel',
        clinique: '- Déficit',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Priapisme',
        description: 'Érection douloureuse prolongée.',
        traitement: '- Urgence urologique (> 2 h)',
        clinique: '- Érection > 2 h',
        paraclinique: '',
      },
      {
        nom: 'Dépression respiratoire aux morphiniques',
        description: 'Surdosage.',
        traitement: '- Naloxone',
        clinique: '- Sédation, FR < 10',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Crise résolutive en 4 à 7 jours ; la fréquence des crises est un marqueur de sévérité de la maladie',
    urgences: ['crise-drepanocytaire-grave'],
    symptomes: [
      ['Douleurs osseuses', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Douleur thoracique', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
      ['Ictère', 'frequent'],
      ['Pâleur', 'frequent'],
    ],
    sources: [
      'Evidence-Based Management of Sickle Cell Disease: Expert Panel Report',
      'American Society of Hematology 2020 guidelines for sickle cell disease: management of acute and chronic pain',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Paracétamol, ibuprofène, hydratation, test du paludisme, acide folique',
        '- Douleur non soulagée, fièvre, signes respiratoires, pâleur',
      ],
      hgr: [
        '- Morphine titrée, hydratation IV, bilan, prise en charge des complications, hydroxycarbamide',
        '- Syndrome thoracique grave, AVC, besoin d’échange transfusionnel',
      ],
      tert: ['- Échange transfusionnel, réanimation', ''],
    },
    alertes: {
      'crise-drepanocytaire-grave':
        'Drépanocytaire avec douleur thoracique, dyspnée, déficit neurologique, pâleur extrême ou priapisme',
    },
    formes: [
      {
        nom: 'Crise douloureuse osseuse',
        type: 'commune',
        description: 'Douleurs des os longs et du rachis.',
        terrain: '- Drépanocytaire SS ou SC',
        fonctionnels: '- Douleurs intenses des membres, du dos',
        generaux: '- Fébricule',
        physiques: '- Sensibilité osseuse, subictère',
        paraclinique: '- Hb proche de la valeur de base',
        etiologies: '- Froid, déshydratation, infection',
        syndromes: ['syndrome-vaso-occlusif', 'syndrome-hemolytique'],
        examens: [['nfs', 'Hb de base']],
      },
      {
        nom: 'Crise compliquée',
        type: 'gravite',
        description: 'Complication viscérale associée.',
        terrain: '- CVO hospitalisée',
        fonctionnels: '- Douleur thoracique, dyspnée',
        generaux: '- Fièvre élevée',
        physiques: '- Crépitants, pâleur, splénomégalie',
        paraclinique: '- Hb en baisse, opacité pulmonaire',
        etiologies: '',
        syndromes: ['syndrome-thoracique-aigu', 'syndrome-anemique'],
      },
    ],
  },

  // =================================================================== STA
  {
    ...HEMATO,
    slug: 'syndrome-thoracique-aigu-drepanocytaire',
    nom: 'Syndrome thoracique aigu drépanocytaire',
    resume:
      'Première cause de décès du drépanocytaire adulte : douleur thoracique, fièvre, signes respiratoires et opacité radiologique nouvelle ; oxygène, antibiotiques, antalgie, transfusion ou échange.',
    definition:
      'Association, chez un drépanocytaire, d’un nouvel infiltrat pulmonaire radiologique et d’au moins un signe parmi : douleur thoracique, fièvre ≥ 38,5 °C, polypnée, sibilants, toux, hypoxémie.',
    physiopathologie:
      '## Mécanismes\n- Infection pulmonaire (pneumocoque, germes atypiques, virus)\n- Embolie graisseuse (nécrose médullaire lors d’une CVO)\n- Vaso-occlusion pulmonaire, hypoventilation (douleur thoracique, morphine)\n- Cercle vicieux : hypoxie, falciformation, extension des lésions',
    diagnostic:
      '## Clinique\n- Souvent au cours d’une CVO (2e ou 3e jour)\n- Douleur thoracique, toux, dyspnée, fièvre\n- Polypnée, crépitants, matité, baisse de la SpO2\n\n## Radiographie\n- Opacité nouvelle (bases), parfois retardée par rapport à la clinique ; épanchement pleural\n\n## Gravité\n- SpO2 < 90 % malgré l’oxygène, atteinte multilobaire, baisse rapide de l’Hb, troubles de conscience, plaquettes < 200 000/mm³',
    examens: [
      ['confirmation', 'radiographie-thoracique', 'Nouvel infiltrat, épanchement.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'SpO2 < 95 % : oxygène ; < 90 % : gravité.'],
      ['gravite', 'gaz-du-sang', 'Hypoxémie, hypercapnie.'],
      ['premiere_intention', 'nfs', 'Baisse de l’Hb, plaquettes, leucocytes.'],
      ['premiere_intention', 'reticulocytes', 'Régénération.'],
      ['premiere_intention', 'hemocultures', 'Avant les antibiotiques.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion probable.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
      ['etiologique', 'test-covid', 'Contexte épidémique.'],
    ],
    scores: [],
    differentiels: [
      ['Pneumonie bactérienne', 'Fait partie des causes du syndrome thoracique aigu : même traitement.'],
      ['embolie-pulmonaire', 'Facteurs de risque, D-dimères (peu spécifiques), angioscanner.'],
      ['syndrome-coronarien-aigu-st-plus', 'ECG, troponine.'],
      ['tuberculose-pulmonaire', 'Évolution subaiguë, GeneXpert.'],
    ],
    etiologies:
      '## Causes\n- Infections : pneumocoque, *Mycoplasma*, *Chlamydia*, virus (grippe, VRS, SARS-CoV-2)\n- Embolie graisseuse\n- Hypoventilation (douleur, morphine, chirurgie abdominale)',
    principes: [
      [
        'Oxygène et ventilation',
        'Corriger l’hypoxémie.',
        '- **Oxygène** pour SpO2 ≥ 95 %\n- **Spirométrie incitative**, kinésithérapie\n- Ventilation non invasive ou réanimation si aggravation',
      ],
      [
        'Antibiotiques',
        'Traiter l’infection.',
        '- **Ceftriaxone** 1 à 2 g/j + macrolide (**azithromycine** 500 mg J1 puis 250 mg/j) pendant 7 à 10 jours',
      ],
      [
        'Antalgie et hydratation',
        'Soulager sans hypoventiler.',
        '- Antalgie titrée (morphine avec surveillance de la fréquence respiratoire)\n- Hydratation prudente (le surplus aggrave l’œdème pulmonaire)\n- Énoxaparine préventive',
      ],
      [
        'Transfusion',
        'Réduire le taux d’HbS.',
        '- **Transfusion simple** si Hb < 9 g/dL (objectif ≤ 10–11 g/dL)\n- **Échange transfusionnel** si forme grave ou Hb élevée',
      ],
      [
        'Prévention des récidives',
        'Éviter un nouvel épisode.',
        '- **Hydroxycarbamide** après un syndrome thoracique aigu\n- Vaccinations pneumocoque et grippe, spirométrie incitative lors des CVO',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Antibiothérapie probabiliste'],
      ['azithromycine', 'premiere', 'Germes atypiques'],
      ['morphine', 'premiere', 'Antalgie titrée'],
      ['paracetamol', 'premiere', 'Antalgie et fièvre'],
      ['enoxaparine', 'adjuvant', 'Prévention thrombotique'],
      ['hydroxycarbamide', 'premiere', 'Prévention des récidives'],
    ],
    complications: [
      {
        nom: 'Syndrome de détresse respiratoire aiguë',
        description: 'Forme grave.',
        traitement: '- Réanimation, échange transfusionnel',
        clinique: '- SpO2 basse malgré l’oxygène',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Défaillance multiviscérale',
        description: 'Embolie graisseuse massive.',
        traitement: '- Réanimation, échange',
        clinique: '- Confusion, insuffisance rénale',
        paraclinique: '- Plaquettes, créatinine',
      },
      {
        nom: 'Atteinte pulmonaire chronique et HTAP',
        description: 'Épisodes répétés.',
        traitement: '- Hydroxycarbamide, suivi',
        clinique: '- Dyspnée chronique',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité 2 à 9 % chez l’adulte ; récidives fréquentes sans traitement de fond',
    urgences: ['crise-drepanocytaire-grave'],
    symptomes: [
      ['Douleur thoracique', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Toux', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Douleurs osseuses', 'frequent'],
    ],
    sources: [
      'Evidence-Based Management of Sickle Cell Disease: Expert Panel Report',
      'ASH — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Repérage (douleur thoracique, dyspnée chez un drépanocytaire), oxygène si disponible, transfert urgent',
        '- Tout syndrome thoracique suspecté',
      ],
      hgr: [
        '- Radiographie, oxygène, ceftriaxone + azithromycine, transfusion',
        '- Hypoxémie réfractaire, besoin d’échange',
      ],
      tert: ['- Échange transfusionnel, réanimation', ''],
    },
    alertes: {
      'crise-drepanocytaire-grave': 'Drépanocytaire avec douleur thoracique, toux, fièvre et SpO2 < 95 %',
    },
    formes: [
      {
        nom: 'Syndrome thoracique aigu au cours d’une CVO',
        type: 'commune',
        description: 'Apparition secondaire de signes respiratoires.',
        terrain: '- Adulte drépanocytaire hospitalisé pour CVO',
        fonctionnels: '- Douleur thoracique, toux',
        generaux: '- Fièvre',
        physiques: '- Polypnée, crépitants des bases',
        paraclinique: '- Opacité nouvelle, SpO2 basse',
        etiologies: '- Infection, embolie graisseuse',
        syndromes: ['syndrome-thoracique-aigu', 'syndrome-de-condensation-pulmonaire'],
        examens: [['radiographie-thoracique', 'Confirmation']],
      },
      {
        nom: 'Forme grave',
        type: 'gravite',
        description: 'Hypoxémie sévère.',
        terrain: '- Atteinte multilobaire',
        fonctionnels: '- Dyspnée intense',
        generaux: '- Confusion',
        physiques: '- Tirage, cyanose',
        paraclinique: '- SpO2 < 90 % sous oxygène, chute de l’Hb et des plaquettes',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Transfusion
  {
    ...HEMATO,
    slug: 'transfusion-sanguine-et-reactions-transfusionnelles',
    nom: 'Transfusion sanguine et réactions transfusionnelles',
    resume:
      'Bonnes indications (seuils d’Hb), sécurité (groupage, contrôle ultime au lit, surveillance) et reconnaissance des réactions : arrêt immédiat de la transfusion devant tout signe anormal.',
    definition:
      'Administration de produits sanguins (sang total, concentré de globules rouges, plasma, plaquettes) ; les réactions transfusionnelles sont les effets indésirables survenant pendant ou après la transfusion (hémolyse, fièvre, allergie, surcharge, infection, TRALI).',
    physiopathologie:
      '## Mécanismes des réactions\n- **Hémolyse aiguë** : incompatibilité ABO (erreur d’identification), destruction intravasculaire, CIVD, insuffisance rénale\n- **Réaction fébrile non hémolytique** : anticorps antileucocytaires, cytokines\n- **Allergie et anaphylaxie** : protéines plasmatiques (déficit en IgA)\n- **Surcharge circulatoire (TACO)** : débit trop rapide chez le cardiaque, l’anémique chronique, le sujet âgé\n- **TRALI** : œdème pulmonaire lésionnel\n- **Infection** : contamination bactérienne, VIH, hépatites, syphilis, paludisme',
    diagnostic:
      '## Indications (repères OMS)\n- Hb < 7 g/dL avec signes de mauvaise tolérance ; seuils plus élevés en cas de cardiopathie, saignement actif, choc\n- Hémorragie aiguë avec choc\n- Paludisme grave avec Hb < 5 g/dL (ou < 7 g/dL avec détresse)\n\n## Sécurité\n- Groupage ABO-RhD, RAI, compatibilité\n- Produit testé (VIH, hépatites B et C, syphilis)\n- **Contrôle ultime au lit** : identité, concordance des documents, test de compatibilité ABO au lit\n- Surveillance : constantes avant, à 15 min, puis régulièrement\n\n## Signes de réaction\n- Fièvre, frissons, urticaire, dyspnée, douleur lombaire ou thoracique, hypotension, urines foncées, saignement en nappe',
    examens: [
      ['pretherapeutique', 'groupage-rai', 'Groupe ABO-RhD, RAI, compatibilité.'],
      ['pretherapeutique', 'nfs', 'Hb : indication et efficacité.'],
      ['gravite', 'test-de-coombs-direct', 'Réaction hémolytique.'],
      ['gravite', 'bilan-hepatique', 'Bilirubine (hémolyse).'],
      ['gravite', 'ldh', 'Hémolyse.'],
      ['gravite', 'bandelette-urinaire', 'Hémoglobinurie.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['gravite', 'hemostase', 'CIVD.'],
      ['gravite', 'hemocultures', 'Patient et poche : contamination bactérienne.'],
      ['gravite', 'radiographie-thoracique', 'Dyspnée : surcharge ou TRALI.'],
    ],
    scores: [],
    differentiels: [
      ['Fièvre de la maladie sous-jacente', 'Paludisme, sepsis : présente avant la transfusion.'],
      ['insuffisance-cardiaque', 'Décompensation indépendante de la transfusion.'],
      ['Anaphylaxie médicamenteuse', 'Antibiotique administré en même temps.'],
    ],
    etiologies:
      '## Causes des accidents\n- **Erreur d’identification** (première cause d’hémolyse ABO)\n- Débit trop rapide, volume excessif\n- Produits mal conservés (contamination bactérienne)\n- Dépistage incomplet des donneurs',
    principes: [
      [
        'Devant toute réaction : arrêter',
        'Limiter la quantité transfusée.',
        '- **Arrêter immédiatement** la transfusion, garder la voie veineuse (NaCl 0,9 %)\n- Vérifier l’identité du patient et de la poche\n- Prévenir la banque de sang, renvoyer la poche et les tubulures, prélèvements\n- Surveiller pouls, PA, température, diurèse',
      ],
      [
        'Selon le type de réaction',
        'Traiter.',
        '- **Hémolyse aiguë** : remplissage, diurèse forcée (furosémide une fois la volémie restaurée), traitement de la CIVD et de l’insuffisance rénale\n- **Anaphylaxie** : **adrénaline** 0,5 mg IM, remplissage, oxygène\n- **Urticaire isolée** : antihistaminique (**chlorphénamine**), reprise prudente possible\n- **Fébrile non hémolytique** : paracétamol, éliminer hémolyse et contamination\n- **Surcharge** : position assise, oxygène, **furosémide**\n- **Contamination bactérienne** : antibiotiques à large spectre, hémocultures',
      ],
      [
        'Prévention',
        'Transfuser juste et sûr.',
        '- Indications strictes, alternatives (fer, acide tranexamique, prévention des hémorragies)\n- Double vérification d’identité, contrôle ultime au lit\n- Débit lent chez le sujet fragile (1 mL/kg/h), furosémide entre les poches si besoin\n- Hémovigilance : déclaration des incidents',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Maintien de la voie veineuse, remplissage'],
      ['adrenaline-epinephrine', 'premiere', 'Anaphylaxie'],
      ['chlorphenamine', 'premiere', 'Réaction allergique'],
      ['hydrocortisone', 'adjuvant', 'Réaction allergique'],
      ['paracetamol', 'premiere', 'Réaction fébrile'],
      ['furosemide', 'premiere', 'Surcharge, diurèse forcée'],
      ['ceftriaxone', 'adjuvant', 'Contamination bactérienne suspectée'],
    ],
    complications: [
      {
        nom: 'Hémolyse aiguë par incompatibilité ABO',
        description: 'Erreur d’identification ; mortelle.',
        traitement: '- Arrêt, remplissage, prise en charge de la CIVD et du rein',
        clinique: '- Fièvre, frissons, douleur lombaire, choc, urines foncées',
        paraclinique: '- Coombs direct, hémoglobinurie',
      },
      {
        nom: 'Surcharge circulatoire',
        fiche: 'insuffisance-cardiaque',
        description: 'Débit ou volume excessifs.',
        traitement: '- Furosémide, oxygène',
        clinique: '- Dyspnée, crépitants, HTA',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Infections transmises',
        fiche: 'infection-vih',
        description: 'VIH, hépatites, syphilis, paludisme.',
        traitement: '- Selon l’agent ; dépistage',
        clinique: '',
        paraclinique: '- Sérologies',
      },
      {
        nom: 'Allo-immunisation',
        description: 'Transfusions répétées (drépanocytose).',
        traitement: '- Phénotypage étendu',
        clinique: '- Hémolyse retardée',
        paraclinique: '- RAI',
      },
    ],
    evolution:
      '## Pronostic\n- Les réactions graves sont rares mais évitables ; l’hémolyse ABO peut être mortelle',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'frequent'],
      ['Frissons', 'frequent'],
      ['Éruption cutanée', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Hypotension', 'occasionnel'],
      ['Urines foncées', 'rare'],
      ['Douleurs osseuses', 'rare'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Indications, transfert des patients à transfuser, reconnaissance d’une réaction',
        '- Anémie sévère mal tolérée',
      ],
      hgr: [
        '- Transfusion sécurisée, contrôle ultime, prise en charge des réactions, hémovigilance',
        '- Réaction grave, CIVD',
      ],
      tert: ['- Réanimation, banque de sang spécialisée', ''],
    },
    alertes: {
      'choc-septique':
        'Fièvre élevée, frissons et hypotension pendant une transfusion (contamination ou hémolyse)',
    },
    formes: [
      {
        nom: 'Réaction fébrile non hémolytique',
        type: 'commune',
        description: 'Fièvre isolée pendant la transfusion.',
        terrain: '- Patient polytransfusé, femme multipare',
        fonctionnels: '- Frissons',
        generaux: '- Fièvre ≥ 1 °C au-dessus de la valeur initiale',
        physiques: '- Constantes stables',
        paraclinique: '- Coombs négatif, pas d’hémolyse',
        etiologies: '- Cytokines, anticorps antileucocytaires',
        syndromes: [],
        examens: [['test-de-coombs-direct', 'Éliminer une hémolyse']],
      },
      {
        nom: 'Réaction hémolytique aiguë',
        type: 'gravite',
        description: 'Incompatibilité ABO.',
        terrain: '- Erreur d’identification',
        fonctionnels: '- Angoisse, douleur lombaire, thoracique',
        generaux: '- Fièvre, frissons, choc',
        physiques: '- Saignement en nappe, oligurie',
        paraclinique: '- Hémoglobinurie, Coombs positif, CIVD',
        etiologies: '- Incompatibilité ABO',
        syndromes: ['syndrome-hemolytique', 'syndrome-de-choc'],
      },
      {
        nom: 'Réaction allergique et anaphylaxie',
        type: 'gravite',
        description: 'Urticaire à choc anaphylactique.',
        terrain: '- Déficit en IgA, antécédent allergique',
        fonctionnels: '- Prurit, dyspnée',
        generaux: '- Hypotension',
        physiques: '- Urticaire, œdème, sibilants',
        paraclinique: '',
        etiologies: '- Protéines plasmatiques',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },
];
