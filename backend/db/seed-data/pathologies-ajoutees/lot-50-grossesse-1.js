'use strict';

/**
 * Lot 50 (phase 2, grossesse, partie 1) — grossesse gémellaire, grossesse prolongée, médicaments
 * et grossesse, allo-immunisation rhésus, maladie thromboembolique et grossesse. Rédigé par IA
 * (OMS, Normes et directives SR, Guide clinique et thérapeutique) : à valider.
 */

const GROS = { departement: 'gynecologie-obstetrique', specialite: 'Grossesse' };

module.exports = [
  // =================================================================== Gémellaire
  {
    ...GROS,
    slug: 'grossesse-gemellaire',
    nom: 'Grossesse gémellaire',
    resume:
      'Fréquente en Afrique centrale (taux de jumeaux dizygotes parmi les plus élevés au monde) et à haut risque : anémie, pré-éclampsie, prématurité, retard de croissance, syndrome transfuseur-transfusé (monochoriales), présentations anormales, hémorragie du post-partum ; diagnostic et chorionicité par échographie au 1er trimestre ; CPN rapprochées, fer-acide folique, surveillance de la croissance, accouchement en hôpital avec deux équipes de réanimation néonatale, gestion active de la délivrance renforcée.',
    definition:
      'Grossesse comportant deux fœtus, dizygote (deux œufs, toujours bichoriale) ou monozygote (bichoriale ou monochoriale selon la date de division de l’œuf).',
    physiopathologie:
      '## Types\n- **Dizygote** (bichoriale biamniotique) : favorisée par l’hérédité, l’âge, la multiparité, l’ethnie\n- **Monozygote** : bichoriale, **monochoriale biamniotique** (syndrome transfuseur-transfusé), monochoriale monoamniotique (enchevêtrement des cordons)\n\n## Risques\n- Maternels : **anémie**, **pré-éclampsie**, diabète gestationnel, **hémorragie du post-partum** (surdistension utérine)\n- Fœtaux : **prématurité** (50 %), **retard de croissance**, mort fœtale, malformations, présentation anormale du 2e jumeau',
    diagnostic:
      '## Clinique\n- Utérus plus gros que l’âge gestationnel, deux pôles fœtaux, deux foyers de bruits du cœur, vomissements importants\n\n## Échographie\n- **Échographie précoce** (avant 14 semaines) : nombre de fœtus et **chorionicité** (signe du lambda ou du T)\n- Croissance toutes les 4 semaines (bichoriale) ou 2 semaines (monochoriale) : discordance de poids, quantité de liquide\n\n## Examens\n- NFS (anémie), protéinurie, tension, glycémie (HGPO)',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Nombre de fœtus, chorionicité, croissance.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie.'],
      ['premiere_intention', 'hgpo-75g', 'Diabète gestationnel.'],
      ['premiere_intention', 'groupage-rai', 'Hémorragie du post-partum.'],
    ],
    scores: [],
    differentiels: [
      ['Môle hydatiforme', 'Utérus gros, absence de fœtus, β-hCG très élevée.'],
      ['Hydramnios', 'Excès de liquide amniotique.'],
      ['Fibrome utérin et grossesse', 'Masse utérine.'],
      ['Erreur de terme', 'Échographie précoce.'],
    ],
    etiologies: '## Facteurs\n- Hérédité maternelle, multiparité, âge, ethnie, stimulation ovarienne',
    principes: [
      [
        'Suivi prénatal renforcé',
        'Prévenir les complications.',
        '- CPN plus fréquentes, **fer-acide folique** (doses renforcées), TPI, moustiquaire, alimentation enrichie\n- Surveillance de la tension et de la protéinurie, échographies répétées\n- Signes de travail prématuré : consulter immédiatement ; **corticoïdes** anténatals (dexaméthasone) si menace avant 34 semaines',
      ],
      [
        'Accouchement',
        'En hôpital.',
        '- Terme conseillé : 37–38 semaines (bichoriale), 36–37 semaines (monochoriale biamniotique)\n- Voie basse possible si le 1er jumeau est en présentation céphalique ; **césarienne** si 1er jumeau en siège, monoamniotique, ou indication obstétricale\n- Deux équipes de réanimation néonatale ; version ou extraction du 2e jumeau par un opérateur expérimenté',
      ],
      [
        'Délivrance',
        'Prévenir l’hémorragie.',
        '- **Ocytocine** 10 UI IM après la naissance du dernier enfant, perfusion d’ocytocine pendant 2–4 heures, surveillance rapprochée',
      ],
    ],
    molecules: [
      ['fumarate-ferreux-fer', 'premiere', 'Prévention de l’anémie'],
      ['acide-folique', 'premiere', 'Supplémentation'],
      ['dexamethasone', 'alternative', 'Maturation pulmonaire avant 34 semaines'],
      ['ocytocine', 'premiere', 'Prévention de l’hémorragie du post-partum'],
      ['nifedipine', 'alternative', 'Tocolyse (menace d’accouchement prématuré)'],
    ],
    complications: [
      {
        nom: 'Accouchement prématuré',
        fiche: 'menace-accouchement-premature',
        description: 'Surdistension utérine.',
        traitement: '- Tocolyse, corticoïdes',
        clinique: '- Contractions',
        paraclinique: '- Échographie du col',
      },
      {
        nom: 'Pré-éclampsie',
        fiche: 'hypertension-gravidique',
        description: 'Risque doublé.',
        traitement: '- Surveillance, accouchement',
        clinique: '- HTA',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Atonie utérine.',
        traitement: '- Utérotoniques',
        clinique: '- Saignement',
        paraclinique: '',
      },
      {
        nom: 'Syndrome transfuseur-transfusé',
        description: 'Monochoriale.',
        traitement: '- Centre spécialisé',
        clinique: '- Hydramnios brutal',
        paraclinique: '- Discordance de liquide',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité périnatale 3 à 5 fois plus élevée que pour un singleton ; améliorée par le suivi et l’accouchement en structure',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Vomissements', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Œdèmes', 'frequent'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Repérer, échographie, référence pour l’accouchement', '- Contractions précoces, HTA'],
      hgr: ['- Accouchement, césarienne', ''],
      tert: ['- Grossesses monochoriales compliquées', ''],
    },
    alertes: { 'hemorragie-du-post-partum-urgence': 'Saignement abondant après un accouchement gémellaire' },
    formes: [
      {
        nom: 'Grossesse bichoriale',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Multipare, antécédents familiaux',
        fonctionnels: '',
        generaux: '',
        physiques: '- Utérus trop gros',
        paraclinique: '- Deux placentas',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Grossesse monochoriale',
        type: 'gravite',
        description: 'Syndrome transfuseur-transfusé.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Placenta unique',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Grossesse prolongée
  {
    ...GROS,
    slug: 'grossesse-prolongee',
    nom: 'Grossesse prolongée',
    resume:
      'Grossesse dépassant 41 semaines d’aménorrhée (terme dépassé au-delà de 42 semaines) : risques d’oligoamnios, de liquide méconial, de souffrance fœtale, de macrosomie et de mort fœtale ; vérifier le terme (date des dernières règles, échographie précoce) ; surveillance à partir de 41 semaines (mouvements fœtaux, liquide amniotique, cardiotocographie) ; déclenchement du travail proposé entre 41 et 42 semaines (misoprostol ou ocytocine selon le col).',
    definition:
      'Grossesse se prolongeant au-delà de 41 semaines d’aménorrhée révolues ; terme dépassé au-delà de 42 semaines.',
    physiopathologie:
      '## Mécanismes\n- Vieillissement placentaire → baisse des échanges, **oligoamnios**, compression du cordon\n- Croissance fœtale continue → **macrosomie**, dystocie des épaules\n- Émission de méconium → **inhalation méconiale**\n\n## Facteurs\n- Erreur de terme (cause la plus fréquente), primiparité, antécédent, obésité',
    diagnostic:
      '## Datation\n- Date des dernières règles, **échographie du 1er trimestre** (la plus fiable)\n\n## Surveillance à partir de 41 semaines\n- Mouvements fœtaux, **auscultation**, **cardiotocographie**, **quantité de liquide amniotique** (échographie) tous les 2–3 jours\n- Score de Bishop (maturité du col)',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Datation, liquide amniotique.'],
      ['premiere_intention', 'cardiotocographie', 'Bien-être fœtal.'],
    ],
    scores: [],
    differentiels: [
      ['Erreur de terme', 'Datation incertaine.'],
      ['travail-prolonge-partogramme', 'Travail débuté mais lent.'],
    ],
    etiologies: '## Facteurs\n- Erreur de terme, primiparité, antécédent, obésité, fœtus masculin',
    principes: [
      [
        'Surveillance',
        'À partir de 41 semaines.',
        '- Mouvements fœtaux, cardiotocographie et liquide amniotique tous les 2–3 jours\n- Anomalie : déclenchement ou césarienne',
      ],
      [
        'Déclenchement',
        'Entre 41 et 42 semaines.',
        '- **Col défavorable** : **misoprostol** 25 µg par voie vaginale toutes les 4–6 h (ou 25 µg per os toutes les 2 h), max 6 doses, ou sonde de Foley\n- **Col favorable** : rupture des membranes et **ocytocine** en perfusion\n- Pas de misoprostol sur utérus cicatriciel ; surveillance continue (hypercinésie)',
      ],
      [
        'Accouchement',
        'Anticiper.',
        '- Préparation à la réanimation néonatale (liquide méconial), prévention de la dystocie des épaules',
      ],
    ],
    molecules: [
      ['misoprostol', 'premiere', 'Déclenchement sur col défavorable'],
      ['ocytocine', 'premiere', 'Déclenchement sur col favorable'],
    ],
    complications: [
      {
        nom: 'Souffrance fœtale aiguë',
        description: 'Insuffisance placentaire, oligoamnios.',
        traitement: '- Extraction',
        clinique: '- Anomalies du rythme cardiaque fœtal',
        paraclinique: '- Cardiotocographie',
      },
      {
        nom: 'Inhalation méconiale',
        fiche: 'inhalation-meconiale',
        description: 'Liquide méconial.',
        traitement: '- Réanimation néonatale',
        clinique: '- Détresse respiratoire',
        paraclinique: '',
      },
      {
        nom: 'Mort fœtale in utero',
        description: 'Terme dépassé.',
        traitement: '- Prévention par le déclenchement',
        clinique: '- Arrêt des mouvements',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon avec une surveillance et un déclenchement avant 42 semaines',
    urgences: [],
    symptomes: [],
    sources: ['OMS — lignes directrices et publications', 'Normes et directives de santé de la reproduction'],
    niveaux: {
      cs: ['- Datation, référence à 41 semaines', '- Diminution des mouvements fœtaux'],
      hgr: ['- Surveillance, déclenchement, césarienne', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Grossesse prolongée',
        type: 'commune',
        description: '41–42 semaines.',
        terrain: '- Primipare',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Liquide normal',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Terme dépassé avec oligoamnios',
        type: 'gravite',
        description: 'Risque fœtal.',
        terrain: '',
        fonctionnels: '- Diminution des mouvements',
        generaux: '',
        physiques: '',
        paraclinique: '- Oligoamnios, anomalies du RCF',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Médicaments et grossesse
  {
    ...GROS,
    slug: 'medicaments-et-grossesse',
    nom: 'Médicaments et grossesse',
    resume:
      'Toute femme en âge de procréer peut être enceinte : vérifier avant de prescrire. Médicaments à éviter ou contre-indiqués : valproate, isotrétinoïne, warfarine au 1er trimestre, IEC et sartans (2e–3e trimestres), tétracyclines/doxycycline, fluoroquinolones (à éviter), méthotrexate, misoprostol (hors indication obstétricale), AINS après 20 semaines, primaquine, certains antifongiques oraux ; utilisables : paracétamol, amoxicilline, céphalosporines, azithromycine, métronidazole, ACT (y compris au 1er trimestre selon l’OMS 2022), méthyldopa, nifédipine, labétalol, insuline, héparine ; éviter l’automédication et les remèdes traditionnels.',
    definition:
      'Principes de prescription pendant la grossesse et l’allaitement, tenant compte des risques tératogènes (1er trimestre), fœtotoxiques (2e–3e trimestres) et néonatals.',
    physiopathologie:
      '## Périodes\n- **0–2 semaines après la conception** : « tout ou rien »\n- **Embryogenèse (3–10 semaines)** : risque **malformatif** maximal\n- **2e–3e trimestres** : toxicité fœtale (rein, canal artériel, croissance, os, dents)\n- Fin de grossesse et accouchement : effets néonatals (sédation, sevrage, hypoglycémie)\n\n## Médicaments à risque connu\n- **Valproate** (spina bifida, autisme), **isotrétinoïne**, **warfarine** (embryopathie), méthotrexate, thalidomide, mycophénolate\n- **IEC, sartans** (atteinte rénale fœtale), **AINS** après 20 semaines (fermeture du canal artériel, oligoamnios)\n- **Tétracyclines** (dents, os), aminosides (surdité), chloramphénicol en fin de grossesse (syndrome gris)',
    diagnostic:
      '## Démarche avant toute prescription\n- Rechercher une grossesse (date des règles, test si doute)\n- Évaluer le bénéfice pour la mère (une maladie non traitée est souvent plus dangereuse) et le risque pour le fœtus\n- Préférer les médicaments anciens, bien connus, en monothérapie, à la dose minimale efficace\n\n## Exposition accidentelle\n- Dater précisément l’exposition, rassurer si médicament sans risque connu, échographie morphologique si médicament tératogène',
    examens: [
      ['premiere_intention', 'beta-hcg', 'Grossesse avant prescription.'],
      ['deuxieme_intention', 'echographie-obstetricale', 'Morphologie après exposition à risque.'],
    ],
    scores: [],
    differentiels: [],
    etiologies:
      '## Situations\n- Prescription chez une femme enceinte, automédication, exposition accidentelle, remèdes traditionnels',
    principes: [
      [
        'Médicaments utilisables',
        'Repères.',
        '- **Antalgiques** : **paracétamol** (AINS à éviter après 20 semaines)\n- **Antibiotiques** : pénicillines (amoxicilline), céphalosporines (ceftriaxone, céfixime), macrolides (azithromycine, érythromycine), **métronidazole**, nitrofurantoïne (sauf à terme)\n- **Paludisme** : ACT (artéméther-luméfantrine) à tous les trimestres (OMS 2022), artésunate IV si grave, quinine\n- **HTA** : méthyldopa, nifédipine, labétalol ; **diabète** : insuline, metformine ; **anticoagulants** : héparines\n- **VIH** : dolutégravir, ténofovir, lamivudine ; **tuberculose** : RHZE ; **épilepsie** : lamotrigine, lévétiracétam',
      ],
      [
        'À éviter ou contre-indiqués',
        'Repères.',
        '- Valproate, isotrétinoïne, méthotrexate, mycophénolate, thalidomide\n- IEC, sartans, statines\n- Warfarine au 1er trimestre (sauf prothèse mécanique, avis spécialisé)\n- Doxycycline et tétracyclines, fluoroquinolones (si alternative), aminosides prolongés\n- **Misoprostol** en dehors des indications obstétricales encadrées, primaquine, tafénoquine\n- **Remèdes traditionnels** utérotoniques (risque de rupture utérine)',
      ],
      [
        'Information',
        'Accompagner.',
        '- Informer la femme, éviter l’automédication, consigner les traitements dans le carnet de CPN\n- **Allaitement** : la plupart des médicaments courants sont compatibles',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Antalgique de référence'],
      ['amoxicilline', 'premiere', 'Antibiotique de référence'],
      ['acide-folique', 'premiere', 'Supplémentation'],
      ['methyldopa', 'alternative', 'HTA'],
      ['heparine-non-fractionnee', 'alternative', 'Anticoagulation'],
    ],
    complications: [
      {
        nom: 'Malformations congénitales',
        fiche: 'malformations-congenitales-majeures',
        description: 'Tératogènes au 1er trimestre.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '- Échographie morphologique',
      },
      {
        nom: 'Toxicité fœtale et néonatale',
        description: '2e–3e trimestres.',
        traitement: '- Prévention',
        clinique: '- Oligoamnios, insuffisance rénale',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- La plupart des expositions n’ont pas de conséquence ; les malformations médicamenteuses sont évitables',
    urgences: [],
    symptomes: [],
    sources: [
      'WHO Model List of Essential Medicines',
      'OMS — lignes directrices et publications',
      'WHO guidelines for malaria',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Vérifier la grossesse avant de prescrire, éviter les médicaments à risque',
        '- Exposition à un tératogène',
      ],
      hgr: ['- Échographie morphologique', ''],
      tert: ['- Pharmacovigilance, centre de référence', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Prescription pendant la grossesse',
        type: 'commune',
        description: 'Choix raisonné.',
        terrain: '- Femme enceinte',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Exposition à un tératogène',
        type: 'gravite',
        description: '1er trimestre.',
        terrain: '- Grossesse méconnue',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Échographie morphologique',
        etiologies: '- Valproate, isotrétinoïne, warfarine',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Allo-immunisation rhésus
  {
    ...GROS,
    slug: 'allo-immunisation-rhesus',
    nom: 'Allo-immunisation rhésus',
    resume:
      'Production d’anticorps anti-D par une femme rhésus négatif exposée à des globules rouges rhésus positif (grossesse précédente, avortement, GEU, transfusion), responsables d’une anémie hémolytique fœtale (anasarque, mort fœtale) et d’un ictère néonatal sévère ; rhésus négatif moins fréquent en Afrique (1–5 %) ; groupage rhésus et RAI à la première CPN ; immunoglobulines anti-D (300 µg) dans les 72 h après tout accouchement d’un enfant rhésus positif, avortement, GEU, traumatisme ou saignement, et vers 28 semaines si disponibles ; femme immunisée : suivi spécialisé.',
    definition:
      'Présence chez une femme enceinte d’anticorps dirigés contre un antigène érythrocytaire fœtal (le plus souvent D du système rhésus), pouvant provoquer une maladie hémolytique du fœtus et du nouveau-né.',
    physiopathologie:
      '## Mécanismes\n- Passage de globules rouges fœtaux D+ dans la circulation d’une mère D− (accouchement, avortement, GEU, amniocentèse, traumatisme, version) → **immunisation** (anticorps IgG anti-D)\n- Grossesse suivante : les anticorps traversent le placenta → **hémolyse fœtale** → anémie, insuffisance cardiaque, **anasarque fœto-placentaire**, mort fœtale\n- Nouveau-né : **ictère** précoce et sévère (risque d’ictère nucléaire), anémie',
    diagnostic:
      '## Dépistage\n- **Groupage ABO-rhésus** et **recherche d’agglutinines irrégulières (RAI)** à la première CPN ; RAI répétées chez la femme rhésus négatif (28 semaines)\n- Groupage du partenaire si possible\n\n## Femme immunisée\n- Titrage des anticorps, **échographie Doppler** (vitesse de l’artère cérébrale moyenne : anémie fœtale), signes d’anasarque\n\n## Nouveau-né\n- Groupe, **test de Coombs direct**, bilirubine, NFS',
    examens: [
      ['confirmation', 'groupage-rai', 'Rhésus, anticorps irréguliers.'],
      ['premiere_intention', 'echographie-obstetricale', 'Anasarque, Doppler cérébral.'],
      ['premiere_intention', 'test-de-coombs-direct', 'Nouveau-né.'],
      ['premiere_intention', 'bilirubine-neonatale', 'Ictère du nouveau-né.'],
      ['premiere_intention', 'nfs', 'Anémie du nouveau-né.'],
    ],
    scores: [],
    differentiels: [
      ['ictere-neonatal', 'Autres causes d’ictère (incompatibilité ABO, G6PD).'],
      ['deficit-en-g6pd-enfant', 'Hémolyse néonatale.'],
      ['Anasarque non immune', 'Infections (parvovirus), cardiopathies, alpha-thalassémie.'],
    ],
    etiologies:
      '## Situations immunisantes\n- Accouchement, avortement, GEU, môle, amniocentèse, traumatisme abdominal, transfusion incompatible',
    principes: [
      [
        'Prévention',
        'Chez toute femme rhésus négatif non immunisée.',
        '- **Immunoglobulines anti-D** 300 µg (1 500 UI) IM ou IV **dans les 72 heures** après : accouchement d’un enfant rhésus positif (ou de groupe inconnu), avortement, GEU, môle, saignement, traumatisme, version\n- Dose à 28 semaines si disponible (prévention anténatale)\n- Dose de 50–120 µg possible avant 12 semaines',
      ],
      [
        'Femme immunisée',
        'Suivi spécialisé.',
        '- Surveillance des anticorps et Doppler ; transfusion in utero ou accouchement anticipé selon l’anémie fœtale (centre spécialisé)\n- Pas d’immunoglobulines anti-D (inutiles)',
      ],
      [
        'Nouveau-né',
        'Traiter l’hémolyse.',
        '- **Photothérapie** intensive précoce, **exsanguinotransfusion** selon les courbes, transfusion si anémie ; immunoglobulines IV discutées',
      ],
    ],
    molecules: [
      ['immunoglobulines-anti-d', 'premiere', 'Prévention'],
      ['immunoglobulines-humaines-polyvalentes', 'adjuvant', 'Hémolyse néonatale sévère (discuté)'],
    ],
    complications: [
      {
        nom: 'Anasarque fœto-placentaire',
        description: 'Anémie fœtale sévère.',
        traitement: '- Transfusion in utero, extraction',
        clinique: '- Œdème fœtal',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Ictère nucléaire',
        fiche: 'ictere-neonatal',
        description: 'Hyperbilirubinémie néonatale.',
        traitement: '- Photothérapie, exsanguinotransfusion',
        clinique: '- Hypotonie, opisthotonos',
        paraclinique: '- Bilirubine',
      },
      {
        nom: 'Mort fœtale in utero',
        description: 'Hémolyse sévère.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Immunisation presque toujours évitable par les immunoglobulines anti-D ; risque croissant à chaque grossesse chez la femme immunisée',
    urgences: [],
    symptomes: [['Ictère', 'occasionnel']],
    sources: ['Normes et directives de santé de la reproduction', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Groupage rhésus à la 1re CPN, anti-D après accouchement', '- Femme rhésus négatif'],
      hgr: ['- RAI, immunoglobulines anti-D, photothérapie', ''],
      tert: ['- Femme immunisée, transfusion in utero', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Femme rhésus négatif non immunisée',
        type: 'commune',
        description: 'Prévention.',
        terrain: '- Femme Rh−',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- RAI négative',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Femme immunisée',
        type: 'gravite',
        description: 'Risque fœtal.',
        terrain: '- Grossesse antérieure sans prévention',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- RAI positive anti-D',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== MTEV et grossesse
  {
    ...GROS,
    slug: 'maladie-thromboembolique-et-grossesse',
    nom: 'Maladie thromboembolique et grossesse',
    resume:
      'La grossesse et surtout le post-partum (césarienne, hémorragie, infection, immobilisation, drépanocytose) multiplient par 5 à 10 le risque de thrombose veineuse profonde (souvent jambe gauche) et d’embolie pulmonaire, cause importante de décès maternel ; échographie Doppler veineuse, angioscanner si suspicion d’embolie (les D-dimères sont peu utiles) ; traitement par héparine de bas poids moléculaire (pas d’AOD ni de warfarine pendant la grossesse), poursuivie au moins 6 semaines après l’accouchement ; thromboprophylaxie après césarienne chez les femmes à risque.',
    definition:
      'Thrombose veineuse profonde et/ou embolie pulmonaire survenant pendant la grossesse ou le post-partum (jusqu’à 6–12 semaines après l’accouchement).',
    physiopathologie:
      '## Triade de Virchow\n- **Hypercoagulabilité** (augmentation des facteurs de coagulation), **stase** (compression de la veine iliaque gauche par l’utérus), **lésion endothéliale** (accouchement, césarienne)\n\n## Facteurs de risque\n- **Césarienne** (surtout en urgence), hémorragie du post-partum, transfusion, **infection**, pré-éclampsie, immobilisation, obésité, âge > 35 ans, **drépanocytose**, VIH, antécédent de thrombose, thrombophilie, syndrome des antiphospholipides, déshydratation (hyperemesis)',
    diagnostic:
      '## Clinique\n- **TVP** : douleur et **œdème unilatéral** du mollet ou de la cuisse (gauche dans 80 %), différence de circonférence > 2 cm\n- **Embolie pulmonaire** : **dyspnée** brutale, douleur thoracique, tachycardie, hémoptysie, syncope, désaturation, choc\n- Thrombose veineuse cérébrale (post-partum) : céphalées, convulsions\n\n## Examens\n- **Échographie Doppler veineuse** (première intention, même si suspicion d’embolie)\n- **Angioscanner thoracique** si suspicion d’embolie avec Doppler normal (irradiation fœtale faible)\n- ECG, gaz du sang, radiographie ; NFS, plaquettes, créatinine, hémostase avant anticoagulation\n- D-dimères physiologiquement élevés pendant la grossesse (peu contributifs)',
    examens: [
      ['confirmation', 'echo-doppler-veineux', 'TVP.'],
      ['confirmation', 'angioscanner-thoracique', 'Embolie pulmonaire.'],
      ['premiere_intention', 'ecg', 'Signes de cœur droit.'],
      ['premiere_intention', 'nfs', 'Plaquettes avant héparine.'],
      ['premiere_intention', 'hemostase', 'Avant anticoagulation.'],
      ['premiere_intention', 'creatinine', 'Adaptation des doses.'],
      ['deuxieme_intention', 'd-dimeres', 'Peu utiles pendant la grossesse.'],
    ],
    scores: [],
    differentiels: [
      ['thrombose-veineuse-profonde', 'Fiche générale.'],
      ['embolie-pulmonaire', 'Fiche générale.'],
      ['Œdèmes physiologiques de la grossesse', 'Bilatéraux, indolores.'],
      ['erysipele-et-cellulite', 'Rougeur, fièvre.'],
      ['cardiomyopathie-du-peripartum', 'Dyspnée d’origine cardiaque.'],
    ],
    etiologies:
      '## Facteurs\n- Césarienne, post-partum, infection, hémorragie, drépanocytose, obésité, antécédents',
    principes: [
      [
        'Traitement curatif',
        'Héparine.',
        '- **Énoxaparine** 1 mg/kg toutes les 12 h SC (selon le poids en début de grossesse) ou **héparine non fractionnée** (insuffisance rénale, embolie grave, proximité de l’accouchement)\n- Durée : toute la grossesse et **au moins 6 semaines après l’accouchement** (minimum 3 mois au total)\n- Pas d’anticoagulants oraux directs ; **warfarine** possible **après l’accouchement** (compatible avec l’allaitement)\n- Embolie massive avec choc : thrombolyse (centre spécialisé)',
      ],
      [
        'Accouchement',
        'Gérer l’anticoagulation.',
        '- Arrêter l’HBPM 24 h avant un accouchement programmé ou l’anesthésie rachidienne ; reprise 6–12 h après l’accouchement en l’absence d’hémorragie',
      ],
      [
        'Prévention',
        'Thromboprophylaxie.',
        '- **Lever précoce**, hydratation, bas de contention\n- **Énoxaparine** 40 mg/j après **césarienne** avec facteurs de risque, pendant 7–10 jours (6 semaines si risque élevé)\n- Antécédent de thrombose : prophylaxie pendant la grossesse et le post-partum',
      ],
    ],
    molecules: [
      ['enoxaparine', 'premiere', 'Traitement et prophylaxie'],
      ['heparine-non-fractionnee', 'alternative', 'Insuffisance rénale, péri-partum'],
      ['warfarine', 'alternative', 'Post-partum uniquement'],
    ],
    complications: [
      {
        nom: 'Embolie pulmonaire massive',
        fiche: 'embolie-pulmonaire',
        description: 'Migration du thrombus.',
        traitement: '- Héparine, thrombolyse',
        clinique: '- Choc, syncope',
        paraclinique: '- Angioscanner',
      },
      {
        nom: 'Hémorragie sous anticoagulant',
        fiche: 'hemorragie-post-partum',
        description: 'Accouchement.',
        traitement: '- Arrêt, protamine',
        clinique: '- Saignement',
        paraclinique: '- Hémostase',
      },
      {
        nom: 'Syndrome post-thrombotique',
        description: 'Séquelle veineuse.',
        traitement: '- Contention',
        clinique: '- Œdème chronique, ulcère',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon sous traitement ; l’embolie pulmonaire reste une cause majeure de mortalité maternelle évitable',
    urgences: [],
    symptomes: [
      ['Œdème d’un membre', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Douleur thoracique', 'occasionnel'],
      ['Hémoptysie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'ESC — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Repérer l’œdème unilatéral ou la dyspnée, lever précoce, référence',
        '- Suspicion de TVP ou d’embolie',
      ],
      hgr: ['- Doppler, héparine, thromboprophylaxie après césarienne', ''],
      tert: ['- Angioscanner, embolie grave', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'TVP de la grossesse',
        type: 'commune',
        description: 'Jambe gauche.',
        terrain: '- Femme enceinte ou accouchée',
        fonctionnels: '- Douleur du mollet',
        generaux: '',
        physiques: '- Œdème unilatéral',
        paraclinique: '- Doppler positif',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Embolie pulmonaire du post-partum',
        type: 'gravite',
        description: 'Urgence vitale.',
        terrain: '- Après césarienne',
        fonctionnels: '- Dyspnée brutale',
        generaux: '- Tachycardie',
        physiques: '- Désaturation, choc',
        paraclinique: '- Angioscanner',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },
];
