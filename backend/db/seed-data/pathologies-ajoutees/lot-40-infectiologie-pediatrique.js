'use strict';

/**
 * Lot 40 (phase 2, infectiologie pédiatrique) — oreillons, rubéole. Rédigé par IA (OMS, Nelson,
 * PEV) : à valider.
 */

const INFPED = { departement: 'pediatrie', specialite: 'Infectiologie pédiatrique' };

module.exports = [
  // =================================================================== Oreillons
  {
    ...INFPED,
    slug: 'oreillons',
    nom: 'Oreillons',
    resume:
      'Infection virale (paramyxovirus) de l’enfant d’âge scolaire et de l’adolescent : fièvre et parotidite douloureuse uni- ou bilatérale ; complications : orchite après la puberté, méningite lymphocytaire, pancréatite, surdité ; traitement symptomatique (antalgiques, hydratation, aliments mous), éviction scolaire 5 jours après le début de la parotidite ; prévention par le vaccin ROR.',
    definition:
      'Maladie virale contagieuse due au virus ourlien (paramyxovirus), caractérisée par une inflammation des glandes salivaires, en particulier des parotides.',
    physiopathologie:
      '## Transmission\n- Gouttelettes et salive, incubation 16–18 jours, contagiosité de quelques jours avant à 5 jours après la parotidite\n\n## Atteintes\n- Glandes salivaires (parotides), **testicules** (après la puberté), **méninges**, pancréas, ovaires, oreille interne (surdité), rarement encéphalite',
    diagnostic:
      '## Clinique\n- Fièvre modérée, malaise, puis **tuméfaction parotidienne** douloureuse (comble le sillon derrière la branche de la mâchoire, décolle le lobe de l’oreille), uni- puis souvent bilatérale\n- Douleur à la mastication et à l’acidité, orifice du canal de Sténon rouge\n- Complications : **orchite** (douleur et gonflement testiculaire), céphalées et raideur de nuque (méningite), douleurs abdominales (pancréatite)\n\n## Examens\n- Diagnostic clinique ; amylase si doute ; ponction lombaire si signes méningés',
    examens: [
      ['deuxieme_intention', 'lcr', 'Méningite ourlienne.'],
      ['deuxieme_intention', 'lipasemie', 'Pancréatite.'],
      ['deuxieme_intention', 'audiometrie', 'Surdité.'],
    ],
    scores: [],
    differentiels: [
      ['Parotidite bactérienne suppurée', 'Pus au canal de Sténon, fièvre élevée, unilatérale.'],
      ['adenopathies-enfant', 'Adénopathie cervicale ou prétragienne.'],
      ['Parotidite du VIH', 'Hypertrophie parotidienne chronique bilatérale.'],
      ['abces-cellulites-dentaires', 'Foyer dentaire, tuméfaction jugale.'],
      ['torsion-du-testicule', 'Douleur testiculaire brutale sans parotidite.'],
    ],
    etiologies: '## Facteurs\n- Absence de vaccination ROR, collectivités (écoles, internats)',
    principes: [
      [
        'Traitement symptomatique',
        'Soulager.',
        '- **Paracétamol** ou ibuprofène, hydratation, aliments mous, éviter les aliments acides\n- Hygiène buccale\n- Pas d’antibiotiques',
      ],
      [
        'Complications',
        'Traiter.',
        '- **Orchite** : repos, suspensoir, antalgiques, glace\n- Méningite : antalgiques, surveillance (évolution favorable), éliminer une méningite bactérienne\n- Pancréatite : repos digestif court, antalgiques',
      ],
      [
        'Prévention',
        'Limiter la transmission.',
        '- Éviction scolaire jusqu’à 5 jours après le début de la parotidite\n- **Vaccin ROR** (rougeole-oreillons-rubéole) selon les disponibilités ; le PEV de la RDC utilise principalement le vaccin rougeole-rubéole',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Fièvre, douleur'],
      ['ibuprofene', 'alternative', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Orchite ourlienne',
        description: 'Après la puberté.',
        traitement: '- Repos, antalgiques',
        clinique: '- Testicule gonflé, douloureux',
        paraclinique: '',
      },
      {
        nom: 'Méningite lymphocytaire',
        fiche: 'meningite-bacterienne-enfant',
        description: 'Bénigne en général.',
        traitement: '- Symptomatique',
        clinique: '- Céphalées, raideur',
        paraclinique: '- LCR lymphocytaire',
      },
      {
        nom: 'Pancréatite',
        fiche: 'pancreatite-aigue',
        description: 'Rare.',
        traitement: '- Symptomatique',
        clinique: '- Douleur épigastrique',
        paraclinique: '- Lipase',
      },
      {
        nom: 'Surdité de perception',
        description: 'Souvent unilatérale.',
        traitement: '- Appareillage',
        clinique: '- Baisse d’audition',
        paraclinique: '- Audiométrie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 7 à 10 jours ; complications rares mais possibles (surdité, hypofertilité rare après orchite bilatérale)',
    urgences: [],
    symptomes: [
      ['Tuméfaction parotidienne', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Douleur scrotale', 'occasionnel'],
      ['Céphalées', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Traitement symptomatique, éviction, conseils',
        '- Signes méningés, orchite sévère, douleurs abdominales',
      ],
      hgr: ['- Prise en charge des complications', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Parotidite ourlienne',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Enfant de 5 à 15 ans non vacciné',
        fonctionnels: '- Douleur à la mastication',
        generaux: '- Fièvre modérée',
        physiques: '- Tuméfaction parotidienne bilatérale',
        paraclinique: '',
        etiologies: '- Virus ourlien',
        syndromes: [],
      },
      {
        nom: 'Oreillons de l’adolescent et de l’adulte',
        type: 'terrain',
        description: 'Complications plus fréquentes.',
        terrain: '- Adolescent, adulte jeune',
        fonctionnels: '- Douleur testiculaire',
        generaux: '- Fièvre élevée',
        physiques: '- Orchite',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Rubéole
  {
    ...INFPED,
    slug: 'rubeole',
    nom: 'Rubéole',
    resume:
      'Infection virale bénigne de l’enfant (éruption maculo-papuleuse brève, adénopathies occipitales et rétro-auriculaires, fièvre modérée) mais grave pendant la grossesse : syndrome de rubéole congénitale (cataracte, surdité, cardiopathie, retard mental) ; traitement symptomatique ; vaccination rougeole-rubéole (PEV) et vérification de l’immunité des jeunes femmes ; notifier dans le cadre de la surveillance des éruptions fébriles.',
    definition:
      'Maladie virale due au virus de la rubéole (Rubivirus), transmise par voie respiratoire, habituellement bénigne mais tératogène en cas d’infection maternelle, surtout au premier trimestre.',
    physiopathologie:
      '## Transmission\n- Gouttelettes respiratoires, incubation 14–21 jours ; contagiosité 7 jours avant à 7 jours après l’éruption\n- Transmission **transplacentaire** : risque de malformations > 80 % au 1er trimestre\n\n## Syndrome de rubéole congénitale\n- **Cataracte**, glaucome, **surdité**, **cardiopathie** (persistance du canal artériel, sténose pulmonaire), microcéphalie, retard de développement, retard de croissance, hépatosplénomégalie',
    diagnostic:
      '## Clinique\n- Souvent asymptomatique\n- **Éruption** maculo-papuleuse rose débutant au visage, généralisée en 24 h, disparaissant en 3 jours\n- **Adénopathies** rétro-auriculaires, occipitales et cervicales postérieures\n- Fièvre modérée, conjonctivite ; **arthralgies** chez l’adolescente et la femme\n\n## Examens\n- **Sérologie IgM** (surveillance des éruptions fébriles avec la rougeole) ; chez la femme enceinte exposée : IgM et IgG\n- Nouveau-né suspect de rubéole congénitale : IgM, examen ophtalmologique, auditif et cardiaque',
    examens: [
      ['confirmation', 'serologie-rougeole', 'IgM rubéole (surveillance rougeole-rubéole).'],
      ['etiologique', 'beta-hcg', 'Grossesse chez la femme exposée.'],
      ['deuxieme_intention', 'echocardiographie', 'Rubéole congénitale.'],
      ['deuxieme_intention', 'audiometrie', 'Rubéole congénitale.'],
    ],
    scores: [],
    differentiels: [
      ['rougeole', 'Fièvre élevée, toux, conjonctivite, Köplik, éruption plus longue.'],
      ['Exanthème subit (roséole)', 'Nourrisson, éruption après la chute de la fièvre.'],
      ['Infections à entérovirus ou parvovirus B19', 'Sérologies.'],
      ['toxidermies-graves', 'Prise médicamenteuse.'],
      ['Dengue et arboviroses', 'Contexte épidémique, douleurs.'],
    ],
    etiologies: '## Facteurs\n- Absence de vaccination, collectivités ; jeunes femmes non immunisées',
    principes: [
      [
        'Traitement',
        'Symptomatique.',
        '- Repos, **paracétamol**, hydratation\n- Éviction scolaire 7 jours après l’éruption ; éviter le contact avec les femmes enceintes',
      ],
      [
        'Femme enceinte exposée',
        'Évaluer le risque.',
        '- Sérologie rapide ; en cas d’infection confirmée au 1er trimestre : information sur le risque fœtal, suivi spécialisé',
      ],
      [
        'Prévention',
        'Éliminer la rubéole congénitale.',
        '- **Vaccin rougeole-rubéole** (RR) selon le calendrier du PEV et lors des campagnes\n- Vaccination des adolescentes et des femmes en âge de procréer non immunisées (hors grossesse)\n- Surveillance et notification des cas d’éruption fébrile',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Fièvre, arthralgies'],
      ['vaccin-rougeole-rubeole', 'premiere', 'Prévention'],
    ],
    complications: [
      {
        nom: 'Syndrome de rubéole congénitale',
        fiche: 'malformations-congenitales-majeures',
        description: 'Infection pendant la grossesse.',
        traitement: '- Prise en charge des atteintes (cataracte, cardiopathie, surdité)',
        clinique: '- Cataracte, surdité, souffle',
        paraclinique: '- IgM du nouveau-né',
      },
      {
        nom: 'Arthrite',
        description: 'Adolescente, femme.',
        traitement: '- Antalgiques',
        clinique: '- Arthralgies des petites articulations',
        paraclinique: '',
      },
      {
        nom: 'Purpura thrombopénique',
        fiche: 'purpura-thrombopenique-immunologique',
        description: 'Rare.',
        traitement: '- Surveillance',
        clinique: '- Purpura',
        paraclinique: '- Plaquettes',
      },
    ],
    evolution: '## Pronostic\n- Bénigne chez l’enfant ; gravité liée à la rubéole congénitale',
    urgences: [],
    symptomes: [
      ['Éruption cutanée', 'tres_frequent'],
      ['Adénopathies', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Arthralgies', 'occasionnel'],
      ['Yeux rouges', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Traitement symptomatique, notification, vaccination',
        '- Femme enceinte exposée, nouveau-né malformé',
      ],
      hgr: ['- Sérologie, suivi de grossesse', ''],
      tert: ['- Prise en charge de la rubéole congénitale', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Rubéole de l’enfant',
        type: 'commune',
        description: 'Bénigne.',
        terrain: '- Enfant non vacciné',
        fonctionnels: '',
        generaux: '- Fébricule',
        physiques: '- Éruption, adénopathies occipitales',
        paraclinique: '- IgM positives',
        etiologies: '- Virus de la rubéole',
        syndromes: [],
      },
      {
        nom: 'Rubéole congénitale',
        type: 'gravite',
        description: 'Infection fœtale.',
        terrain: '- Mère infectée au 1er trimestre',
        fonctionnels: '',
        generaux: '- Retard de croissance',
        physiques: '- Cataracte, souffle, microcéphalie',
        paraclinique: '- IgM du nouveau-né',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
