'use strict';

/**
 * Lot 12 (pneumologie pédiatrique) — bronchiolite aiguë du nourrisson, asthme de l'enfant.
 * Rédigé par IA (OMS, GINA, NICE, AAP) : à valider.
 */

const PNEUPED = { departement: 'pediatrie', specialite: 'Pneumologie pédiatrique' };

module.exports = [
  // =================================================================== Bronchiolite
  {
    ...PNEUPED,
    slug: 'bronchiolite-aigue-nourrisson',
    nom: 'Bronchiolite aiguë du nourrisson',
    resume:
      'Infection virale (VRS) du nourrisson < 2 ans : rhinite puis toux, polypnée, sibilants et crépitants ; traitement de soutien (désobstruction nasale, alimentation fractionnée, oxygène si SpO2 < 90 %) ; pas d’antibiotique ni de bronchodilatateur systématique.',
    definition:
      'Premier épisode de détresse respiratoire sifflante d’origine virale chez le nourrisson de moins de 2 ans (pic entre 2 et 6 mois), dû surtout au virus respiratoire syncytial (VRS).',
    physiopathologie:
      '## Mécanismes\n- Infection de l’épithélium bronchiolaire, nécrose, œdème, bouchons muqueux\n- Obstruction des petites voies aériennes, distension, troubles de ventilation\n- Nourrisson : voies aériennes étroites, respiration nasale obligatoire',
    diagnostic:
      '## Clinique\n- Rhinopharyngite 1 à 3 jours puis toux, **polypnée**, signes de lutte\n- **Sibilants** et/ou **crépitants** fins diffus\n- Fièvre modérée\n\n## Signes de gravité (hospitalisation)\n- Âge < 3 mois, prématurité, cardiopathie\n- SpO2 < 90 %, apnées, cyanose, FR > 70/min, tirage marqué, geignement\n- Difficultés alimentaires (< 50 % des apports), déshydratation, léthargie',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'SpO2 < 90 % : oxygène.'],
      ['gravite', 'radiographie-thoracique', 'Formes graves, doute avec une pneumonie (non systématique).'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
      ['gravite', 'glycemie', 'Alimentation difficile.'],
    ],
    scores: ['silverman'],
    differentiels: [
      ['pneumonie-enfant', 'Fièvre élevée, foyer, état toxique.'],
      ['asthme-enfant', 'Épisodes récidivants (≥ 3), atopie, réponse au salbutamol.'],
      ['coqueluche', 'Quintes, apnées, hyperlymphocytose.'],
      ['Insuffisance cardiaque (cardiopathie)', 'Hépatomégalie, souffle, cardiomégalie.'],
      ['Corps étranger', 'Syndrome de pénétration.'],
    ],
    etiologies:
      '## Virus\n- VRS (60 à 80 %), rhinovirus, métapneumovirus, parainfluenza, SARS-CoV-2\n\n## Facteurs de gravité\n- Âge < 3 mois, prématurité, cardiopathie, malnutrition, absence d’allaitement, fumée domestique',
    principes: [
      [
        'Soins de soutien',
        'Traitement principal.',
        '- **Désobstruction nasale** au sérum physiologique avant les repas\n- Alimentation fractionnée, allaitement poursuivi ; sonde gastrique si besoin\n- Position semi-assise, environnement sans fumée',
      ],
      [
        'Oxygène',
        'Corriger l’hypoxémie.',
        '- **Oxygène** si SpO2 < 90 % (lunettes nasales), objectif ≥ 92 %\n- CPAP (à bulles) si détresse sévère',
      ],
      [
        'Traitements non recommandés',
        'Éviter les gestes inutiles.',
        '- Pas de bronchodilatateurs ni de corticoïdes en routine (essai de salbutamol possible > 12 mois si terrain atopique)\n- Pas d’antibiotique sauf surinfection (fièvre élevée persistante, foyer, otite)\n- Pas de kinésithérapie respiratoire systématique',
      ],
      [
        'Prévention',
        'Limiter la transmission.',
        '- Lavage des mains, éviter le contact avec les personnes enrhumées, allaitement maternel',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Lavage nasal'],
      ['oxygene', 'premiere', 'SpO2 < 90 %'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
      ['salbutamol', 'alternative', 'Essai si > 12 mois et terrain atopique'],
      ['amoxicilline', 'adjuvant', 'Surinfection bactérienne'],
    ],
    complications: [
      {
        nom: 'Apnées et insuffisance respiratoire',
        description: 'Nourrisson < 3 mois, prématuré.',
        traitement: '- Oxygène, CPAP, ventilation',
        clinique: '- Pauses respiratoires, cyanose',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Déshydratation',
        description: 'Difficultés alimentaires.',
        traitement: '- Sonde gastrique, perfusion',
        clinique: '- Diurèse faible',
        paraclinique: '',
      },
      {
        nom: 'Surinfection bactérienne',
        fiche: 'otite-moyenne-aigue',
        description: 'Otite, pneumonie.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre persistante',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration en 5 à 10 jours, toux résiduelle 2 à 4 semaines ; sifflements récidivants possibles',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Tachypnée', 'tres_frequent'],
      ['Sibilants', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Refus de téter', 'frequent'],
      ['Geignement expiratoire', 'occasionnel'],
      ['Cyanose', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'AAP — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Désobstruction nasale, conseils d’alimentation, transfert des formes graves',
        '- SpO2 < 90 %, âge < 3 mois, alimentation insuffisante',
      ],
      hgr: ['- Oxygène, sonde gastrique, CPAP à bulles', '- Apnées, épuisement'],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Bronchiolite commune',
        type: 'commune',
        description: 'Détresse respiratoire modérée.',
        terrain: '- Nourrisson de 2 à 12 mois, saison des pluies',
        fonctionnels: '- Toux, rhinorrhée',
        generaux: '- Fièvre modérée',
        physiques: '- Polypnée, sibilants, crépitants',
        paraclinique: '- SpO2 ≥ 90 %',
        etiologies: '- VRS',
        syndromes: ['syndrome-bronchique-obstructif'],
      },
      {
        nom: 'Bronchiolite grave',
        type: 'gravite',
        description: 'Hypoxémie, apnées.',
        terrain: '- Âge < 3 mois, prématuré, cardiopathie',
        fonctionnels: '- Ne tète plus',
        generaux: '- Léthargie',
        physiques: '- Tirage marqué, geignement, cyanose',
        paraclinique: '- SpO2 < 90 %',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
        examens: [['oxymetrie-de-pouls', 'Gravité']],
      },
    ],
  },

  // =================================================================== Asthme enfant
  {
    ...PNEUPED,
    slug: 'asthme-enfant',
    nom: 'Asthme de l’enfant',
    resume:
      'Sifflements et toux récidivants, réversibles sous salbutamol : crise = salbutamol en chambre d’inhalation, prednisolone ; traitement de fond par corticoïde inhalé, éducation, plan d’action, contrôle de l’environnement.',
    definition:
      'Maladie inflammatoire chronique des bronches de l’enfant, caractérisée par des épisodes récidivants de sifflements, toux, dyspnée et oppression thoracique, variables et réversibles.',
    physiopathologie:
      '## Mécanismes\n- Inflammation bronchique (souvent allergique), hyperréactivité, bronchoconstriction\n- Déclencheurs : infections virales, allergènes (acariens, blattes, pollens), fumée, effort, froid',
    diagnostic:
      '## Arguments\n- **Épisodes récidivants** (≥ 3) de sifflements, toux nocturne ou à l’effort\n- Atopie personnelle ou familiale (eczéma, rhinite)\n- **Réponse au salbutamol**\n- Après 6 ans : DEP ou spirométrie (réversibilité)\n\n## Crise\n- Évaluer la sévérité : parole, FR, tirage, SpO2, DEP\n- Grave : ne peut pas parler ni boire, cyanose, SpO2 < 92 %, silence auscultatoire, confusion\n\n## Contrôle (GINA)\n- Symptômes diurnes, réveils nocturnes, besoin de salbutamol, limitation des activités sur 4 semaines',
    examens: [
      ['premiere_intention', 'debit-expiratoire-de-pointe', 'Après 5–6 ans : crise et suivi.'],
      ['deuxieme_intention', 'spirometrie', 'Diagnostic après 6 ans.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Crise.'],
      ['gravite', 'radiographie-thoracique', 'Première crise, pneumothorax, pneumonie (non systématique).'],
    ],
    scores: ['gina-controle'],
    differentiels: [
      ['bronchiolite-aigue-nourrisson', 'Premier épisode viral du nourrisson.'],
      ['tuberculose-enfant', 'Compression bronchique par adénopathies, contage.'],
      ['Corps étranger', 'Sifflement unilatéral, début brutal.'],
      ['pneumonie-enfant', 'Fièvre, crépitants localisés.'],
    ],
    etiologies:
      '## Facteurs\n- Atopie, antécédents familiaux\n- Fumée de tabac ou de bois, pollution, acariens, moisissures\n- Infections virales répétées',
    principes: [
      [
        'Traitement de la crise',
        'Lever le bronchospasme.',
        '- **Salbutamol** en chambre d’inhalation : 2 à 10 bouffées toutes les 20 min la 1re heure (ou nébulisation 2,5–5 mg)\n- **Prednisolone** 1–2 mg/kg/j (maximum 40 mg) 3 à 5 jours si crise modérée ou sévère\n- Oxygène si SpO2 < 94 %\n- Crise grave : **ipratropium**, **sulfate de magnésium** IV (40 mg/kg), transfert (voir *Asthme aigu grave*)',
      ],
      [
        'Traitement de fond',
        'Contrôler la maladie.',
        '- **Corticoïde inhalé** à faible dose (**budésonide** ou **béclométasone**) en chambre d’inhalation, quotidien\n- Après 6 ans : association budésonide-formotérol possible (fond et crise)\n- Réévaluation tous les 1 à 3 mois, adaptation par paliers',
      ],
      [
        'Éducation',
        'Rendre la famille autonome.',
        '- Technique d’inhalation (chambre avec masque avant 4 ans, fabrication possible avec une bouteille)\n- **Plan d’action écrit**, reconnaissance des signes de gravité\n- Éviction de la fumée, des allergènes ; vaccination antigrippale',
      ],
    ],
    molecules: [
      ['salbutamol', 'premiere', 'Crise, à la demande'],
      ['prednisolone', 'premiere', 'Crise modérée ou sévère'],
      ['budesonide', 'premiere', 'Traitement de fond'],
      ['beclometasone-inhalee', 'alternative', 'Traitement de fond'],
      ['formoterol', 'alternative', 'Associé au budésonide (> 6 ans)'],
      ['ipratropium', 'adjuvant', 'Crise grave'],
      ['sulfate-de-magnesium', 'deuxieme', 'Crise grave'],
      ['oxygene', 'premiere', 'SpO2 < 94 %'],
    ],
    complications: [
      {
        nom: 'Asthme aigu grave',
        fiche: 'asthme-aigu-grave',
        description: 'Crise menaçant la vie.',
        traitement: '- Salbutamol, corticoïdes, magnésium, réanimation',
        clinique: '- Ne peut pas parler, cyanose',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Absentéisme et retentissement',
        description: 'Asthme mal contrôlé.',
        traitement: '- Traitement de fond, éducation',
        clinique: '- Réveils nocturnes',
        paraclinique: '- Score de contrôle',
      },
      {
        nom: 'Pneumothorax',
        fiche: 'pneumothorax-spontane',
        description: 'Crise sévère.',
        traitement: '- Drainage',
        clinique: '- Douleur thoracique',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Bon contrôle possible chez la majorité des enfants ; rémission fréquente à l’adolescence',
    urgences: ['crise-d-asthme-aigue-grave'],
    symptomes: [
      ['Sibilants', 'tres_frequent'],
      ['Toux', 'tres_frequent'],
      ['Dyspnée', 'tres_frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Tachypnée', 'frequent'],
    ],
    sources: [
      'GINA — Global Strategy for Asthma Management and Prevention',
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Salbutamol en chambre d’inhalation, prednisolone, éducation, suivi',
        '- Crise grave, asthme non contrôlé',
      ],
      hgr: ['- Prise en charge des crises sévères, mise en route du fond', '- Crise menaçant la vie'],
      tert: ['- Pneumologie pédiatrique, explorations', ''],
    },
    alertes: {
      'crise-d-asthme-aigue-grave':
        'Enfant asthmatique qui ne peut plus parler ou boire, cyanose ou SpO2 < 92 %',
    },
    formes: [
      {
        nom: 'Asthme de l’enfant d’âge scolaire',
        type: 'commune',
        description: 'Crises récidivantes réversibles.',
        terrain: '- Atopie, rhinite allergique',
        fonctionnels: '- Sifflements, toux nocturne, gêne à l’effort',
        generaux: '',
        physiques: '- Sibilants expiratoires',
        paraclinique: '- Réversibilité au salbutamol',
        etiologies: '- Allergènes, virus',
        syndromes: ['syndrome-bronchique-obstructif'],
        examens: [['debit-expiratoire-de-pointe', 'Suivi']],
      },
      {
        nom: 'Asthme du nourrisson',
        type: 'terrain',
        description: 'Sifflements récidivants avant 3 ans.',
        terrain: '- ≥ 3 épisodes sifflants, atopie',
        fonctionnels: '- Toux, sifflements',
        generaux: '',
        physiques: '- Sibilants',
        paraclinique: '- Diagnostic clinique',
        etiologies: '- Infections virales, atopie',
        syndromes: [],
      },
    ],
  },
];
