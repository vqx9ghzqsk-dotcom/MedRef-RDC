'use strict';

/**
 * Lot 17 (pédiatrie) — traumatisme crânien de l'enfant, conjonctivite de l'enfant, trachome
 * de l'enfant. Rédigé par IA (NICE, PECARN, OMS, stratégie CHANCE) : à valider.
 */

const URGPED = { departement: 'pediatrie', specialite: 'Urgences pédiatriques' };
const ORLOPH = { departement: 'pediatrie', specialite: 'ORL et ophtalmologie pédiatriques' };

module.exports = [
  // =================================================================== TC enfant
  {
    ...URGPED,
    slug: 'traumatisme-cranien-enfant',
    nom: 'Traumatisme crânien de l’enfant',
    resume:
      'Chutes et accidents de la route : évaluer Glasgow pédiatrique, perte de connaissance, vomissements, fontanelle, signes de fracture ; règles PECARN pour le scanner ; prévenir l’agression cérébrale secondaire (oxygène, PA, glycémie) ; penser à la maltraitance chez le nourrisson.',
    definition:
      'Atteinte cérébrale ou crânienne d’origine traumatique chez l’enfant, classée selon le score de Glasgow pédiatrique : léger (14–15), modéré (9–13), grave (≤ 8).',
    physiopathologie:
      '## Mécanismes\n- Lésions primaires : contusion, hématome extradural ou sous-dural, lésions axonales\n- Lésions secondaires : hypoxie, hypotension, hypoglycémie, hypertension intracrânienne\n- Nourrisson : boîte crânienne souple, saignement sous-galéal, secouement (maltraitance)',
    diagnostic:
      '## Évaluation\n- **Glasgow pédiatrique**, pupilles, déficit, convulsions\n- Mécanisme (chute > 1,5 m, accident à haute énergie), perte de connaissance, vomissements, céphalées, amnésie\n- Nourrisson : fontanelle bombée, hématome du cuir chevelu, irritabilité\n- Signes de fracture de la base : hématome en lunettes, otorragie, rhinorrhée claire\n- Examen du rachis cervical\n\n## Indication du scanner (PECARN)\n- < 2 ans : Glasgow < 15, troubles de vigilance, fracture palpable ; à discuter si hématome non frontal, PC ≥ 5 s, mécanisme sévère, comportement anormal\n- ≥ 2 ans : Glasgow < 15, signes de fracture de la base ; à discuter si PC, vomissements, mécanisme sévère, céphalées intenses',
    examens: [
      ['premiere_intention', 'scanner-cerebral', 'Selon les règles PECARN.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'nfs', 'Saignement (nourrisson).'],
      ['pretherapeutique', 'groupage-rai', 'Chirurgie.'],
      ['gravite', 'radiographie-osseuse', 'Rachis cervical, autres fractures.'],
      ['gravite', 'fond-d-oeil', 'Hémorragies rétiniennes (maltraitance).'],
    ],
    scores: ['glasgow', 'blantyre'],
    differentiels: [
      ['maltraitance-enfant', 'Nourrisson, récit incohérent, lésions d’âges différents.'],
      ['meningite-bacterienne-enfant', 'Fièvre, syndrome méningé.'],
      ['hypoglycemie-enfant', 'Somnolence d’autre cause.'],
      ['intoxications-enfant', 'Coma toxique.'],
    ],
    etiologies:
      '## Causes\n- Chutes (lits, arbres, escaliers, étages), accidents de la route (piétons, motos)\n- Violences, maltraitance (bébé secoué)',
    principes: [
      [
        'Traumatisme léger',
        'Surveiller.',
        '- Surveillance 4 à 6 h (conscience, vomissements), paracétamol\n- Retour à domicile avec conseils de surveillance si examen normal et adulte fiable',
      ],
      [
        'Traumatisme modéré à grave',
        'Prévenir l’agression secondaire.',
        '- ABC, immobilisation cervicale, **oxygène** (SpO2 > 94 %), intubation si Glasgow ≤ 8\n- Maintenir la PA (remplissage isotonique), normoglycémie, normothermie\n- Tête surélevée à 30°, éviter les solutés hypotoniques\n- Hypertension intracrânienne : **mannitol** 0,5–1 g/kg ou NaCl 3 %\n- Convulsions : **diazépam**, phénytoïne ou lévétiracétam',
      ],
      [
        'Chirurgie',
        'Évacuer.',
        '- Hématome extradural ou sous-dural compressif : neurochirurgie urgente\n- Embarrure, plaie craniocérébrale',
      ],
      ['Prévention', 'Réduire les accidents.', '- Surveillance, barrières, casques, sécurité routière'],
    ],
    molecules: [
      ['oxygene', 'premiere', 'Prévention de l’hypoxie'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['mannitol', 'deuxieme', 'Hypertension intracrânienne'],
      ['chlorure-de-sodium-hypertonique', 'alternative', 'Hypertension intracrânienne'],
      ['diazepam', 'adjuvant', 'Convulsions'],
      ['levetiracetam', 'adjuvant', 'Convulsions'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage isotonique'],
    ],
    complications: [
      {
        nom: 'Hématome extradural',
        description: 'Intervalle libre puis aggravation.',
        traitement: '- Neurochirurgie urgente',
        clinique: '- Somnolence, mydriase unilatérale',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Hypertension intracrânienne et engagement',
        description: 'Œdème, hématome.',
        traitement: '- Mannitol, chirurgie',
        clinique: '- Bradycardie, HTA, mydriase',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Séquelles cognitives et épilepsie',
        fiche: 'epilepsie-enfant',
        description: 'Traumatisme grave.',
        traitement: '- Rééducation, suivi',
        clinique: '- Troubles scolaires, crises',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent pour les traumatismes légers ; réservé pour les formes graves',
    urgences: ['traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Fontanelle bombée', 'occasionnel'],
    ],
    sources: [
      'Head injury: assessment and early management (NICE guideline NG232)',
      'Guidelines for the Management of Severe Traumatic Brain Injury (4th edition)',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Évaluation, surveillance, immobilisation, transfert des formes modérées et graves',
        '- Glasgow < 15, vomissements répétés, convulsions',
      ],
      hgr: ['- Scanner si disponible, neuroprotection, surveillance', '- Hématome chirurgical'],
      tert: ['- Neurochirurgie pédiatrique, réanimation', ''],
    },
    alertes: {
      'traumatisme-cranien-grave-urgence': 'Enfant après une chute avec Glasgow ≤ 8, convulsions ou mydriase',
    },
    formes: [
      {
        nom: 'Traumatisme crânien léger',
        type: 'commune',
        description: 'Glasgow 14–15.',
        terrain: '- Chute de faible hauteur',
        fonctionnels: '- Céphalées, pleurs',
        generaux: '',
        physiques: '- Bosse, examen neurologique normal',
        paraclinique: '- Scanner rarement nécessaire',
        etiologies: '- Chute',
        syndromes: [],
      },
      {
        nom: 'Traumatisme crânien grave',
        type: 'gravite',
        description: 'Glasgow ≤ 8.',
        terrain: '- Accident de la route, chute de grande hauteur',
        fonctionnels: '',
        generaux: '- Instabilité',
        physiques: '- Coma, signes de localisation, mydriase',
        paraclinique: '- Hématome, œdème',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne', 'syndrome-d-engagement-cerebral'],
        examens: [['scanner-cerebral', 'Lésions']],
      },
    ],
  },

  // =================================================================== Conjonctivite
  {
    ...ORLOPH,
    slug: 'conjonctivite-enfant',
    nom: 'Conjonctivite de l’enfant',
    resume:
      'Œil rouge avec sécrétions, souvent bilatéral : bactérienne (sécrétions purulentes) = tétracycline pommade ; virale (larmoiement) = soins ; nouveau-né = conjonctivite gonococcique (urgence, ceftriaxone) ; vérifier la cornée, la vision et la vitamine A.',
    definition:
      'Inflammation de la conjonctive, infectieuse (bactérienne, virale), allergique ou néonatale (ophtalmie du nouveau-né dans le premier mois).',
    physiopathologie:
      '## Mécanismes\n- Bactéries : Haemophilus, pneumocoque, staphylocoque ; nouveau-né : gonocoque, Chlamydia\n- Virus : adénovirus (épidémies), entérovirus (conjonctivite hémorragique), rougeole\n- Allergie (conjonctivite printanière, fréquente chez l’enfant africain)',
    diagnostic:
      '## Clinique\n- Œil rouge, sensation de sable, sécrétions\n- Purulentes et paupières collées : bactérienne\n- Larmoiement, adénopathie prétragienne, contexte épidémique : virale\n- Prurit intense, bilatéral, saisonnier : allergique\n\n## Signes d’alerte (avis ophtalmologique)\n- Baisse de vision, douleur intense, photophobie, opacité cornéenne, pupille anormale\n- Nouveau-né avec sécrétions purulentes abondantes\n- Rougeole, malnutrition (xérophtalmie)',
    examens: [
      [
        'etiologique',
        'prelevement-de-gorge',
        'Prélèvement conjonctival (Gram) chez le nouveau-né, si disponible.',
      ],
      ['etiologique', 'serologie-syphilis', 'Mère du nouveau-né atteint (IST).'],
    ],
    scores: [],
    differentiels: [
      ['trachome-enfant', 'Follicules de la conjonctive tarsale supérieure, zone d’endémie.'],
      ['carence-en-vitamine-a', 'Xérose, taches de Bitot.'],
      ['Kératite, uvéite, glaucome', 'Douleur, baisse de vision, photophobie.'],
      ['Corps étranger', 'Unilatéral, début brutal.'],
    ],
    etiologies:
      '## Causes\n- Bactéries, virus, allergies\n- Nouveau-né : transmission maternelle (gonocoque, Chlamydia)\n- Facteurs : promiscuité, mouches, manque d’eau',
    principes: [
      [
        'Conjonctivite bactérienne',
        'Guérir.',
        '- Nettoyage à l’eau propre plusieurs fois par jour\n- **Tétracycline** pommade ophtalmique 1 % 2 à 3 fois par jour 7 jours (ou chloramphénicol collyre)',
      ],
      [
        'Conjonctivite du nouveau-né',
        'Prévenir la cécité.',
        '- **Ceftriaxone** 50 mg/kg IM dose unique (maximum 125 mg) pour le gonocoque\n- **Azithromycine** orale 3 jours ou érythromycine 14 jours pour Chlamydia\n- Lavages oculaires fréquents ; traiter la mère et son partenaire\n- Prévention : tétracycline pommade à la naissance',
      ],
      [
        'Virale et allergique',
        'Soulager.',
        '- Virale : soins, hygiène (très contagieuse), pas d’antibiotique sauf surinfection\n- Allergique : lavage, collyre antihistaminique ou cromoglicate, éviter le frottement',
      ],
      [
        'Rougeole et malnutrition',
        'Protéger la cornée.',
        '- **Vitamine A** systématique, tétracycline pommade, avis si atteinte cornéenne',
      ],
    ],
    molecules: [
      ['tetracycline', 'premiere', 'Pommade ophtalmique'],
      ['chloramphenicol', 'alternative', 'Collyre'],
      ['ceftriaxone', 'premiere', 'Conjonctivite gonococcique du nouveau-né'],
      ['azithromycine', 'premiere', 'Chlamydia, trachome'],
      ['erythromycine', 'alternative', 'Chlamydia du nouveau-né'],
      ['cromoglicate-de-sodium', 'alternative', 'Conjonctivite allergique'],
      ['vitamine-a-retinol', 'adjuvant', 'Rougeole, malnutrition'],
    ],
    complications: [
      {
        nom: 'Kératite et ulcère cornéen',
        description: 'Gonocoque, carence en vitamine A.',
        traitement: '- Avis ophtalmologique urgent',
        clinique: '- Opacité, douleur',
        paraclinique: '',
      },
      {
        nom: 'Cécité',
        fiche: 'carence-en-vitamine-a',
        description: 'Ophtalmie gonococcique, xérophtalmie.',
        traitement: '- Prévention',
        clinique: '- Perte de vision',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en quelques jours ; risque de cécité pour l’ophtalmie gonococcique non traitée',
    urgences: [],
    symptomes: [
      ['Yeux rouges', 'tres_frequent'],
      ['Sécrétions oculaires', 'tres_frequent'],
      ['Prurit', 'occasionnel'],
      ['Troubles visuels', 'rare'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Nettoyage, tétracycline, ceftriaxone chez le nouveau-né, prévention néonatale',
        '- Atteinte cornéenne, baisse de vision',
      ],
      hgr: ['- Prise en charge néonatale', ''],
      tert: ['- Ophtalmologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Conjonctivite bactérienne',
        type: 'commune',
        description: 'Sécrétions purulentes.',
        terrain: '- Enfant d’âge préscolaire',
        fonctionnels: '- Paupières collées le matin',
        generaux: '',
        physiques: '- Rougeur, pus',
        paraclinique: '',
        etiologies: '- Haemophilus, pneumocoque',
        syndromes: [],
      },
      {
        nom: 'Ophtalmie du nouveau-né',
        type: 'gravite',
        description: 'Conjonctivite gonococcique.',
        terrain: '- Nouveau-né de 2 à 5 jours, mère infectée',
        fonctionnels: '',
        generaux: '',
        physiques: '- Œdème palpébral, pus abondant',
        paraclinique: '- Diplocoques Gram négatif',
        etiologies: '- Neisseria gonorrhoeae',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Trachome
  {
    ...ORLOPH,
    slug: 'trachome-enfant',
    nom: 'Trachome de l’enfant',
    resume:
      'Kérato-conjonctivite chronique à Chlamydia trachomatis des zones sèches et pauvres : inflammation folliculaire chez l’enfant, puis cicatrices, trichiasis et cécité chez l’adulte ; stratégie CHANCE (chirurgie, antibiotiques — azithromycine de masse —, propreté du visage, changement environnemental).',
    definition:
      'Infection oculaire chronique et récidivante par *Chlamydia trachomatis* (sérotypes A–C), première cause infectieuse de cécité dans le monde, ciblée pour l’élimination par l’OMS ; présente dans certaines zones de RDC.',
    physiopathologie:
      '## Mécanismes\n- Transmission par les mains, le linge, les **mouches** (contact avec les sécrétions)\n- Infections répétées dans l’enfance : inflammation, cicatrices de la conjonctive tarsale\n- Rétraction de la paupière, **trichiasis** (cils frottant la cornée), opacités, cécité',
    diagnostic:
      '## Classification simplifiée de l’OMS (éversion de la paupière supérieure)\n- **TF** : inflammation trachomateuse folliculaire (≥ 5 follicules)\n- **TI** : inflammation intense (épaississement masquant les vaisseaux)\n- **TS** : cicatrices conjonctivales\n- **TT** : trichiasis trachomateux\n- **CO** : opacité cornéenne\n\n## Clinique de l’enfant\n- Yeux rouges chroniques, sécrétions, mouches sur le visage, souvent peu de symptômes',
    examens: [
      [
        'etiologique',
        'prelevement-de-gorge',
        'Prélèvement conjonctival (PCR) pour les enquêtes, si disponible.',
      ],
    ],
    scores: [],
    differentiels: [
      ['conjonctivite-enfant', 'Aiguë, sans follicules tarsaux chroniques.'],
      ['Conjonctivite printanière', 'Prurit, papilles géantes, contexte allergique.'],
      ['carence-en-vitamine-a', 'Xérose, taches de Bitot.'],
    ],
    etiologies:
      '## Facteurs\n- Manque d’eau, visage sale, promiscuité, mouches (*Musca sorbens*), défécation à l’air libre\n- Enfants d’âge préscolaire (réservoir), femmes (soins aux enfants)',
    principes: [
      [
        'Antibiotiques (A)',
        'Éliminer l’infection.',
        '- **Azithromycine** 20 mg/kg en dose unique (maximum 1 g), en traitement de masse annuel dans les districts où TF ≥ 5 % chez les 1–9 ans\n- **Tétracycline** pommade 1 % 2 fois par jour 6 semaines (nourrissons < 6 mois, femmes enceintes selon le programme)',
      ],
      [
        'Propreté du visage (F) et environnement (E)',
        'Couper la transmission.',
        '- Lavage quotidien du visage des enfants, eau, latrines, gestion des déchets, réduction des mouches',
      ],
      [
        'Chirurgie (S)',
        'Prévenir la cécité.',
        '- Chirurgie du trichiasis (rotation tarsale) chez l’adulte et l’adolescent\n- Épilation des cils en attente',
      ],
    ],
    molecules: [
      ['azithromycine', 'premiere', 'Dose unique, traitement de masse'],
      ['tetracycline', 'alternative', 'Pommade 6 semaines'],
    ],
    complications: [
      {
        nom: 'Trichiasis et opacités cornéennes',
        description: 'Infections répétées.',
        traitement: '- Chirurgie',
        clinique: '- Cils retournés, douleur',
        paraclinique: '',
      },
      {
        nom: 'Cécité',
        description: 'Stade final, irréversible.',
        traitement: '- Prévention',
        clinique: '- Perte de vision',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison des formes actives sous antibiotiques ; les cicatrices sont définitives',
    urgences: [],
    symptomes: [
      ['Yeux rouges', 'frequent'],
      ['Sécrétions oculaires', 'frequent'],
      ['Trichiasis', 'occasionnel'],
      ['Troubles visuels', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'WHO Model List of Essential Medicines',
    ],
    niveaux: {
      cs: ['- Dépistage (éversion de la paupière), azithromycine, propreté du visage', '- Trichiasis'],
      hgr: ['- Chirurgie du trichiasis', ''],
      tert: ['- Ophtalmologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Trachome actif de l’enfant (TF)',
        type: 'commune',
        description: 'Inflammation folliculaire.',
        terrain: '- Enfant de 1 à 9 ans, zone d’endémie',
        fonctionnels: '- Yeux rouges, sécrétions',
        generaux: '',
        physiques: '- ≥ 5 follicules sur la conjonctive tarsale supérieure',
        paraclinique: '',
        etiologies: '- C. trachomatis',
        syndromes: [],
      },
      {
        nom: 'Trichiasis trachomateux (TT)',
        type: 'evolutive',
        description: 'Séquelle cicatricielle.',
        terrain: '- Adulte, femme',
        fonctionnels: '- Douleur, larmoiement',
        generaux: '',
        physiques: '- Cils frottant le globe, opacités',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
