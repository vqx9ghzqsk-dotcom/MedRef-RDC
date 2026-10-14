'use strict';

/**
 * Lot 42 (phase 2, gastro-entérologie pédiatrique) — reflux gastro-œsophagien du nourrisson,
 * constipation de l'enfant. Rédigé par IA (ESPGHAN, NASPGHAN, Nelson) : à valider.
 */

const GASTROPED = { departement: 'pediatrie', specialite: 'Gastro-entérologie pédiatrique' };

module.exports = [
  // =================================================================== RGO nourrisson
  {
    ...GASTROPED,
    slug: 'reflux-gastro-oesophagien-nourrisson',
    nom: 'Reflux gastro-œsophagien du nourrisson',
    resume:
      'Régurgitations du nourrisson très fréquentes et physiologiques (maximum vers 4 mois, disparition vers 12–18 mois) chez un enfant qui grandit bien : rassurer, éviter la suralimentation, fractionner, pas de médicaments ; rechercher les signes d’alarme (vomissements bilieux ou en jet, sang, cassure de la courbe de poids, fièvre, léthargie) ; IPP seulement pour l’œsophagite prouvée.',
    definition:
      'Passage involontaire du contenu gastrique dans l’œsophage ; physiologique chez le nourrisson (régurgitations) ; on parle de maladie de reflux en cas de complications ou de symptômes gênants.',
    physiopathologie:
      '## Mécanismes\n- Immaturité du sphincter inférieur de l’œsophage, estomac de petite taille, alimentation liquide, position couchée\n\n## Maladie de reflux (rare)\n- Œsophagite, troubles de la croissance, symptômes respiratoires\n- Terrains : paralysie cérébrale, prématurité, chirurgie de l’œsophage',
    diagnostic:
      '## Clinique\n- **Régurgitations** après les tétées, enfant heureux qui grandit bien (« régurgiteur heureux »)\n\n## Signes d’alarme (autre diagnostic)\n- **Vomissements bilieux** (occlusion, malrotation : urgence), **en jet** (sténose du pylore)\n- Hématémèse, sang dans les selles\n- **Cassure de la courbe de poids**, refus de téter, pleurs à la tétée\n- Fièvre, léthargie, fontanelle bombée, convulsions, distension abdominale\n- Début après 6 mois ou persistance après 18 mois\n\n## Examens\n- Aucun dans la forme simple ; selon les signes d’alarme : échographie, bandelette urinaire, ionogramme',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Courbe de poids.'],
      ['deuxieme_intention', 'echographie-abdominale', 'Sténose du pylore, malrotation.'],
      ['etiologique', 'bandelette-urinaire', 'Infection urinaire.'],
    ],
    scores: [],
    differentiels: [
      ['stenose-hypertrophique-pylore', 'Vomissements en jet, nourrisson de 3–6 semaines.'],
      ['allergie-proteines-lait-vache', 'Eczéma, diarrhée, rectorragies.'],
      ['infection-urinaire-enfant', 'Fièvre, bandelette positive.'],
      ['vomissements-enfant', 'Autres causes de vomissements.'],
      ['Malrotation avec volvulus', 'Vomissements bilieux : urgence chirurgicale.'],
    ],
    etiologies: '## Terrain\n- Nourrisson de moins de 1 an ; prématuré, paralysie cérébrale',
    principes: [
      [
        'Forme simple',
        'Rassurer.',
        '- Explications : phénomène normal qui disparaît avec la marche\n- Éviter la **suralimentation** (lait artificiel), fractionner, faire faire le rot, garder l’enfant vertical 20–30 min après la tétée\n- **Poursuivre l’allaitement maternel**\n- Couchage sur le dos (prévention de la mort subite) ; pas de positionnement ventral',
      ],
      [
        'Mesures complémentaires',
        'Si régurgitations gênantes.',
        '- Lait épaissi (préparations anti-régurgitations) chez l’enfant non allaité\n- Pas de médicaments dans le reflux simple (IPP, prokinétiques inutiles et non sans risque)',
      ],
      [
        'Maladie de reflux',
        'Traiter les complications.',
        '- **Oméprazole** 1 mg/kg/j pendant 4 à 8 semaines en cas d’œsophagite ou de symptômes sévères (avis spécialisé)\n- Signes d’alarme : bilan et traitement de la cause',
      ],
    ],
    molecules: [
      ['omeprazole', 'alternative', 'Œsophagite (spécialiste)'],
      ['alginate', 'adjuvant', 'Formes gênantes selon avis'],
    ],
    complications: [
      {
        nom: 'Œsophagite',
        description: 'Maladie de reflux.',
        traitement: '- IPP',
        clinique: '- Pleurs à la tétée, hématémèse',
        paraclinique: '- Endoscopie',
      },
      {
        nom: 'Cassure pondérale',
        fiche: 'retard-staturo-ponderal',
        description: 'Pertes caloriques.',
        traitement: '- Prise en charge nutritionnelle',
        clinique: '- Mauvaise prise de poids',
        paraclinique: '- Anthropométrie',
      },
    ],
    evolution: '## Pronostic\n- Disparition spontanée chez 90 % des nourrissons avant 12–18 mois',
    urgences: [],
    symptomes: [
      ['Régurgitations', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Pleurs excessifs', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Conseils, surveillance du poids', '- Signes d’alarme'],
      hgr: ['- Bilan des vomissements atypiques', ''],
      tert: ['- Gastro-entérologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Régurgitations physiologiques',
        type: 'commune',
        description: 'Régurgiteur heureux.',
        terrain: '- Nourrisson < 1 an',
        fonctionnels: '- Régurgitations après les tétées',
        generaux: '- Bon état général',
        physiques: '- Examen normal',
        paraclinique: '- Croissance normale',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Maladie de reflux compliquée',
        type: 'gravite',
        description: 'Œsophagite, cassure pondérale.',
        terrain: '- Paralysie cérébrale, prématuré',
        fonctionnels: '- Pleurs, refus de téter',
        generaux: '- Cassure pondérale',
        physiques: '',
        paraclinique: '- Œsophagite',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Constipation
  {
    ...GASTROPED,
    slug: 'constipation-enfant',
    nom: 'Constipation de l’enfant',
    resume:
      'Constipation fonctionnelle très fréquente (apprentissage de la propreté, rétention volontaire, faible apport en eau et fibres) : selles rares, dures, douloureuses, parfois souillures (encoprésie) et fécalome ; éliminer les causes organiques (retard d’émission du méconium = Hirschsprung, hypothyroïdie, anomalies du rachis) ; désimpaction puis entretien par macrogol ou lactulose pendant plusieurs mois, éducation, hydratation.',
    definition:
      'Selles rares (moins de 3 par semaine), dures, douloureuses ou difficiles à émettre, depuis plus d’un mois chez l’enfant ; fonctionnelle dans plus de 90 % des cas.',
    physiopathologie:
      '## Mécanismes fonctionnels\n- Douleur à l’émission (fissure) → rétention → selles plus dures → cercle vicieux, dilatation rectale, souillures par regorgement\n- Facteurs : apprentissage de la propreté, école, faible consommation d’eau et de fibres, passage au lait de vache\n\n## Causes organiques\n- **Maladie de Hirschsprung** (retard d’émission du méconium > 48 h, distension)\n- **Hypothyroïdie**, hypercalcémie, anomalies anorectales, spina bifida occulta, paralysie cérébrale, médicaments, intoxication au plomb, allergie au lait de vache',
    diagnostic:
      '## Clinique\n- Selles rares, dures, volumineuses, douloureuses ; **comportement de rétention**\n- **Souillures** (encoprésie), douleurs abdominales, sang sur les selles (fissure)\n- Masse fécale palpable, fécalome\n\n## Signes d’alarme\n- **Émission du méconium après 48 h**, début dans le premier mois, **distension abdominale**, vomissements, **retard de croissance**, anomalies du rachis lombosacré ou de l’anus, déficit des membres inférieurs, sang dans les selles sans fissure\n\n## Examens\n- Aucun si constipation fonctionnelle typique\n- Signes d’alarme : TSH, calcémie, radiographie de l’abdomen, avis chirurgical (biopsie rectale)',
    examens: [
      ['deuxieme_intention', 'abdomen-sans-preparation', 'Fécalome, distension.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'calcemie-magnesemie', 'Hypercalcémie.'],
      ['premiere_intention', 'anthropometrie', 'Retentissement sur la croissance.'],
      ['etiologique', 'examen-parasitologique-selles', 'Parasitoses.'],
    ],
    scores: [],
    differentiels: [
      ['Maladie de Hirschsprung', 'Retard d’émission du méconium, distension, entérocolite.'],
      ['hypothyroidie-adulte', 'Hypothyroïdie (aussi chez l’enfant) : TSH.'],
      ['allergie-proteines-lait-vache', 'Nourrisson, autres signes allergiques.'],
      ['malformations-congenitales-majeures', 'Anomalies anorectales, spina bifida.'],
      ['occlusion-intestinale-aigue', 'Vomissements, arrêt des gaz.'],
    ],
    etiologies:
      '## Facteurs\n- Apprentissage de la propreté, faibles apports en eau et en fibres, douleur à l’émission, stress',
    principes: [
      [
        'Désimpaction',
        'Évacuer le fécalome.',
        '- **Macrogol** 1–1,5 g/kg/j pendant 3 à 6 jours (voie orale préférée)\n- Ou lavement (sérum salé) si nécessaire',
      ],
      [
        'Traitement d’entretien',
        'Rompre le cercle vicieux.',
        '- **Macrogol** 0,4–0,8 g/kg/j ou **lactulose** 1–2 mL/kg/j, ajusté pour obtenir une selle molle par jour, pendant **au moins 2 mois** et 1 mois après la normalisation\n- Passage aux toilettes après les repas (5–10 min), calendrier des selles, récompenses\n- Eau, fruits, légumes, légumineuses ; traitement d’une fissure',
      ],
      [
        'Causes organiques',
        'Orienter.',
        '- Suspicion de Hirschsprung : avis chirurgical (biopsie rectale) ; hypothyroïdie : lévothyroxine',
      ],
    ],
    molecules: [
      ['macrogol', 'premiere', 'Désimpaction et entretien'],
      ['lactulose', 'alternative', 'Entretien'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Lavement'],
    ],
    complications: [
      {
        nom: 'Encoprésie',
        description: 'Souillures par regorgement.',
        traitement: '- Désimpaction, entretien, soutien',
        clinique: '- Souillures',
        paraclinique: '',
      },
      {
        nom: 'Fissure anale',
        description: 'Selles dures.',
        traitement: '- Laxatifs, soins locaux',
        clinique: '- Sang rouge, douleur',
        paraclinique: '',
      },
      {
        nom: 'Infections urinaires',
        fiche: 'infection-urinaire-enfant',
        description: 'Compression vésicale.',
        traitement: '- Antibiotiques, traitement de la constipation',
        clinique: '- Brûlures, fièvre',
        paraclinique: '- ECBU',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison chez la majorité avec un traitement d’entretien suffisamment long ; rechutes fréquentes si arrêt précoce',
    urgences: [],
    symptomes: [
      ['Constipation', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Douleur anale', 'frequent'],
      ['Distension abdominale', 'occasionnel'],
      ['Incontinence urinaire', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Conseils, macrogol ou lactulose', '- Signes d’alarme, échec'],
      hgr: ['- Bilan, désimpaction', ''],
      tert: ['- Gastro-entérologie et chirurgie pédiatriques', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Constipation fonctionnelle',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Enfant de 2 à 5 ans',
        fonctionnels: '- Selles rares et dures, rétention',
        generaux: '',
        physiques: '- Masse fécale',
        paraclinique: '',
        etiologies: '- Rétention, alimentation',
        syndromes: [],
      },
      {
        nom: 'Constipation organique',
        type: 'gravite',
        description: 'Signes d’alarme.',
        terrain: '- Début néonatal',
        fonctionnels: '- Retard d’émission du méconium',
        generaux: '- Retard de croissance',
        physiques: '- Distension abdominale',
        paraclinique: '- Biopsie rectale',
        etiologies: '- Hirschsprung, hypothyroïdie',
        syndromes: ['syndrome-occlusif'],
      },
    ],
  },
];
