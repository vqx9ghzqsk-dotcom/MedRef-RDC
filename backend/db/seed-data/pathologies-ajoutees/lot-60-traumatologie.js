'use strict';

/**
 * Lot 60 (phase 2, traumatologie) — fracture de la diaphyse fémorale, fractures de jambe,
 * fractures de l'avant-bras, fracture de l'extrémité inférieure du radius, luxation de l'épaule,
 * luxation de la hanche. Rédigé par IA (AAOS, Sabiston, OMS — soins chirurgicaux essentiels) : à
 * valider.
 */

const TRAUMA = { departement: 'chirurgie', specialite: 'Traumatologie' };

const PRE_HOSP =
  '- Immobilisation provisoire (attelle), antalgie, vérification des pouls et de la sensibilité en aval, transfert';

module.exports = [
  // =================================================================== Diaphyse fémorale
  {
    ...TRAUMA,
    slug: 'fracture-diaphyse-femorale',
    nom: 'Fracture de la diaphyse fémorale',
    resume:
      'Fracture à haute énergie de l’adulte jeune (accidents de moto et de voiture, chutes, armes à feu) ou à faible énergie chez l’enfant (chute) : cuisse déformée, raccourcie, douloureuse, impotence totale ; perte sanguine importante (1–1,5 L, choc), embolie graisseuse, lésions associées (polytraumatisme, hanche, genou) ; immobilisation, antalgie (bloc ilio-fascial), réanimation ; adulte : enclouage centromédullaire (verrouillé, SIGN) ou fixateur externe/traction en attendant ; enfant : traction (Bryant < 2 ans), plâtre pelvi-pédieux, broches élastiques ; éviter les complications de la traction prolongée.',
    definition:
      'Fracture du corps du fémur entre la région sous-trochantérienne et la région supracondylienne.',
    physiopathologie:
      '## Mécanismes\n- **Haute énergie** chez l’adulte : accidents de la route (motos), chutes de hauteur, armes à feu\n- Faible énergie chez l’enfant, chez l’âgé (ostéoporose) ou sur os pathologique (métastase, ostéomyélite, drépanocytose)\n- **Maltraitance** chez le nourrisson qui ne marche pas\n\n## Conséquences\n- **Hémorragie** (1–1,5 L), choc\n- **Embolie graisseuse** (24–72 h : hypoxie, confusion, pétéchies)\n- Ouverture cutanée, lésions vasculo-nerveuses, syndrome des loges',
    diagnostic:
      '## Clinique\n- Douleur intense, **impotence totale**, cuisse **déformée**, **raccourcie**, rotation externe, œdème\n- **Pouls distaux**, sensibilité, motricité ; état cutané (fracture ouverte)\n- Signes de choc ; recherche de lésions associées (hanche, genou, bassin, autres)\n\n## Examens\n- **Radiographies** du fémur entier (face et profil) avec hanche et genou\n- NFS, **groupage-RAI**, bilan préopératoire\n- Gaz du sang si suspicion d’embolie graisseuse',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Fémur entier, hanche et genou.'],
      ['gravite', 'nfs', 'Anémie.'],
      ['gravite', 'groupage-rai', 'Transfusion.'],
      ['gravite', 'gaz-du-sang', 'Embolie graisseuse.'],
    ],
    scores: [],
    differentiels: [
      ['fracture-col-du-femur', 'Fracture proximale du sujet âgé.'],
      ['luxation-de-la-hanche', 'Déformation de la hanche.'],
      ['maltraitance-enfant', 'Fracture chez le nourrisson qui ne marche pas.'],
      ['Fracture pathologique', 'Traumatisme minime, os anormal.'],
    ],
    etiologies: '## Causes\n- Accidents de la route, chutes, armes à feu, os pathologique, maltraitance',
    principes: [
      [
        'Urgence',
        'Stabiliser.',
        PRE_HOSP +
          '\n- **Bloc ilio-fascial** (bupivacaïne) ou morphine ; remplissage, transfusion si choc\n- **Traction** transosseuse provisoire ou attelle de traction\n- Fracture ouverte : antibiotiques, antitétanique, parage',
      ],
      [
        'Adulte',
        'Fixer précocement.',
        '- **Enclouage centromédullaire verrouillé** (clou SIGN dans de nombreux hôpitaux africains) dans les 24–48 h si possible\n- **Fixateur externe** (polytraumatisé, fracture ouverte grave) puis conversion\n- Traction prolongée (6–12 semaines) si chirurgie impossible : risques d’escarres, thromboses, raideur\n- **Thromboprophylaxie** (énoxaparine), mobilisation précoce',
      ],
      [
        'Enfant',
        'Selon l’âge.',
        '- < 2 ans : traction au zénith (Bryant) ou plâtre pelvi-pédieux\n- 2–5 ans : plâtre pelvi-pédieux\n- > 5 ans : broches élastiques (ECMES) ou traction puis plâtre\n- Penser à la maltraitance chez le nourrisson',
      ],
    ],
    molecules: [
      ['morphine', 'premiere', 'Douleur'],
      ['bupivacaine', 'premiere', 'Bloc ilio-fascial'],
      ['ketamine', 'alternative', 'Analgésie, réduction'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['enoxaparine', 'premiere', 'Thromboprophylaxie (adulte)'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie, fracture ouverte'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-traumatique',
        description: 'Perte de 1–1,5 L.',
        traitement: '- Remplissage, transfusion',
        clinique: '- Tachycardie, hypotension',
        paraclinique: '- Hb',
      },
      {
        nom: 'Embolie graisseuse',
        description: '24–72 h.',
        traitement: '- Oxygène, réanimation, fixation précoce',
        clinique: '- Hypoxie, confusion, pétéchies',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Pseudarthrose et cal vicieux',
        description: 'Traitement inadapté.',
        traitement: '- Reprise chirurgicale',
        clinique: '- Douleur, raccourcissement',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Thrombose veineuse',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Immobilisation.',
        traitement: '- Anticoagulation',
        clinique: '- Œdème',
        paraclinique: '- Doppler',
      },
    ],
    evolution:
      '## Pronostic\n- Consolidation en 3–4 mois après enclouage ; complications fréquentes si traction prolongée',
    urgences: [],
    symptomes: [
      ['Douleurs osseuses', 'tres_frequent'],
      ['Impotence fonctionnelle', 'tres_frequent'],
      ['Déformation d’un membre', 'tres_frequent'],
      ['Pâleur', 'occasionnel'],
    ],
    sources: [
      'AAOS — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [PRE_HOSP, '- Toute fracture de fémur'],
      hgr: ['- Traction, fixateur externe, enclouage', ''],
      tert: ['- Enclouage verrouillé, polytraumatisme', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fracture diaphysaire fermée de l’adulte',
        type: 'commune',
        description: 'Haute énergie.',
        terrain: '- Adulte jeune, moto',
        fonctionnels: '- Impotence totale',
        generaux: '',
        physiques: '- Cuisse déformée, raccourcie',
        paraclinique: '- Fracture à la radiographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Fracture du fémur de l’enfant',
        type: 'terrain',
        description: 'Traitement orthopédique.',
        terrain: '- Enfant',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Chute ; maltraitance chez le nourrisson',
        syndromes: [],
      },
      {
        nom: 'Fracture avec choc ou ouverte',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Polytraumatisé',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Plaie',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Fractures de jambe
  {
    ...TRAUMA,
    slug: 'fractures-de-jambe',
    nom: 'Fractures de jambe',
    resume:
      'Fractures du tibia et de la fibula, très fréquentes (accidents de moto, de piétons, chutes), souvent ouvertes (tibia sous-cutané) : douleur, déformation, impotence ; risques : syndrome des loges (douleur croissante, à l’étirement des orteils : urgence), ouverture cutanée et infection, lésions vasculo-nerveuses, pseudarthrose ; radiographies ; fracture fermée stable : plâtre cruro-pédieux puis botte ; instable : enclouage centromédullaire, plaque ; fracture ouverte : antibiotiques précoces, antitétanique, parage, fixateur externe ; surveillance des loges.',
    definition: 'Fractures de la diaphyse du tibia et/ou de la fibula, fermées ou ouvertes.',
    physiopathologie:
      '## Mécanismes\n- Choc direct (pare-chocs, moto), torsion (sport, chute)\n- Le tibia est **sous-cutané** sur sa face antéro-interne : **fractures ouvertes** fréquentes, vascularisation précaire (retards de consolidation)\n\n## Complications\n- **Syndrome des loges** (hyperpression dans les loges musculaires)\n- **Infection**, ostéite, pseudarthrose\n- Lésions de l’artère poplitée et des nerfs (fibulaire commun)',
    diagnostic:
      '## Clinique\n- Douleur, **déformation**, impotence, mobilité anormale\n- **État cutané** (plaie : classification de Gustilo), **pouls pédieux et tibial postérieur**, sensibilité et motricité des orteils\n- **Syndrome des loges** : douleur intense croissante, non soulagée par les antalgiques, aggravée par l’étirement passif des orteils, loges tendues, paresthésies\n\n## Examens\n- **Radiographies** de la jambe entière (face et profil) avec genou et cheville\n- NFS, groupage ; Doppler si pouls absents',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Jambe entière, genou et cheville.'],
      ['premiere_intention', 'nfs', 'Bilan préopératoire.'],
      ['gravite', 'echo-doppler-veineux', 'Doppler artériel si pouls absents.'],
      ['gravite', 'cpk', 'Syndrome des loges, rhabdomyolyse.'],
    ],
    scores: [],
    differentiels: [
      ['fractures-ouvertes', 'Fracture ouverte.'],
      ['syndrome-des-loges', 'Complication à rechercher.'],
      ['osteomyelite-aigue', 'Douleur osseuse fébrile.'],
      ['Entorse grave du genou ou de la cheville', 'Radiographie normale.'],
    ],
    etiologies: '## Causes\n- Accidents de la route (motos, piétons), chutes, sport',
    principes: [
      [
        'Urgence',
        'Immobiliser et surveiller.',
        PRE_HOSP +
          '\n- Fracture ouverte : **antibiotiques dans l’heure** (céfazoline ± gentamicine), **antitétanique**, pansement stérile, parage au bloc dans les 24 h\n- **Surveillance des loges** ; syndrome des loges : ablation du plâtre et **aponévrotomie** urgente',
      ],
      [
        'Fracture fermée',
        'Orthopédique ou chirurgical.',
        '- Stable, peu déplacée : **plâtre cruro-pédieux** 6 semaines puis botte ou plâtre de marche (Sarmiento)\n- Instable, déplacée : **enclouage centromédullaire** (SIGN), plaque vissée\n- Surveillance radiologique de la consolidation',
      ],
      [
        'Fracture ouverte',
        'Stabiliser et couvrir.',
        '- **Parage**, lavage abondant, **fixateur externe**, couverture cutanée (lambeau, greffe) précoce\n- Enclouage secondaire selon l’état',
      ],
    ],
    molecules: [
      ['cefazoline', 'premiere', 'Fracture ouverte'],
      ['gentamicine', 'alternative', 'Fracture ouverte grave'],
      ['morphine', 'premiere', 'Douleur'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Fracture ouverte'],
      ['serum-immunoglobuline-antitetanique', 'alternative', 'Plaie à risque, non vacciné'],
      ['enoxaparine', 'adjuvant', 'Thromboprophylaxie'],
    ],
    complications: [
      {
        nom: 'Syndrome des loges',
        fiche: 'syndrome-des-loges',
        description: 'Hyperpression.',
        traitement: '- Aponévrotomie urgente',
        clinique: '- Douleur croissante à l’étirement',
        paraclinique: '- CPK',
      },
      {
        nom: 'Infection et ostéite',
        fiche: 'osteomyelite-chronique',
        description: 'Fracture ouverte.',
        traitement: '- Débridement, antibiotiques',
        clinique: '- Fièvre, écoulement',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Pseudarthrose',
        description: 'Vascularisation précaire.',
        traitement: '- Reprise, greffe osseuse',
        clinique: '- Mobilité persistante',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Consolidation en 3–5 mois ; plus longue et plus compliquée pour les fractures ouvertes',
    urgences: [],
    symptomes: [
      ['Douleurs osseuses', 'tres_frequent'],
      ['Impotence fonctionnelle', 'tres_frequent'],
      ['Déformation d’un membre', 'frequent'],
      ['Œdème d’un membre', 'frequent'],
    ],
    sources: [
      'AAOS — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [PRE_HOSP, '- Fracture ouverte, troubles circulatoires'],
      hgr: ['- Plâtre, parage, fixateur externe, enclouage', ''],
      tert: ['- Couverture cutanée, pseudarthrose', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fracture fermée du tibia',
        type: 'commune',
        description: 'Orthopédique ou clou.',
        terrain: '- Adulte, accident',
        fonctionnels: '- Impotence',
        generaux: '',
        physiques: '- Déformation',
        paraclinique: '- Fracture diaphysaire',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Fracture ouverte de jambe',
        type: 'gravite',
        description: 'Risque infectieux.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Plaie, os exposé',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Fractures de l'avant-bras
  {
    ...TRAUMA,
    slug: 'fractures-avant-bras',
    nom: 'Fractures de l’avant-bras',
    resume:
      'Fractures des deux os de l’avant-bras (radius et ulna) ou isolées, fréquentes chez l’enfant (chute sur la main) et l’adulte (choc direct, accident, coup de bâton « fracture de parade » de l’ulna) ; rechercher une luxation associée (Monteggia : fracture de l’ulna + luxation de la tête radiale ; Galeazzi : fracture du radius + luxation radio-ulnaire distale) ; radiographies de l’avant-bras entier avec coude et poignet ; enfant : réduction et plâtre brachio-antébrachio-palmaire (bon remodelage) ; adulte : ostéosynthèse (plaques) pour les fractures déplacées des deux os ; surveillance du syndrome des loges.',
    definition:
      'Fractures de la diaphyse du radius et/ou de l’ulna, isolées ou associées à une luxation (Monteggia, Galeazzi).',
    physiopathologie:
      '## Mécanismes\n- **Chute sur la main** (enfant : fractures en « bois vert »), choc direct (fracture isolée de l’ulna en parade), accident\n\n## Particularités\n- L’avant-bras fonctionne comme une articulation (pronation-supination) : une réduction imparfaite chez l’adulte entraîne une perte de rotation\n- Lésions associées : **Monteggia**, **Galeazzi**\n- **Syndrome des loges** de l’avant-bras (enfant, plâtre serré)',
    diagnostic:
      '## Clinique\n- Douleur, déformation, impotence de l’avant-bras\n- Pouls radial, sensibilité et motricité de la main (nerfs radial, médian, ulnaire)\n- Douleur du coude ou du poignet (luxation associée)\n- Signes de syndrome des loges\n\n## Examens\n- **Radiographies** de l’avant-bras entier (face et profil) **incluant le coude et le poignet**',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Avant-bras entier avec coude et poignet.'],
      ['premiere_intention', 'nfs', 'Bilan préopératoire.'],
    ],
    scores: [],
    differentiels: [
      ['fracture-extremite-inferieure-radius', 'Fracture du poignet.'],
      ['fracture-supracondylienne-humerus-enfant', 'Fracture du coude de l’enfant.'],
      ['maltraitance-enfant', 'Fractures multiples d’âges différents, fracture de parade.'],
      ['Contusion simple', 'Radiographie normale.'],
    ],
    etiologies: '## Causes\n- Chutes, chocs directs, accidents, agressions',
    principes: [
      [
        'Enfant',
        'Orthopédique le plus souvent.',
        '- **Réduction** sous anesthésie (kétamine) si angulation importante, **plâtre brachio-antébrachio-palmaire** coude à 90° pendant 6 semaines\n- Contrôle radiologique à J7–J10 (déplacement secondaire)\n- Broches élastiques si instable chez le grand enfant',
      ],
      [
        'Adulte',
        'Chirurgical si déplacé.',
        '- Fractures déplacées des deux os : **ostéosynthèse par plaques** (restauration de la rotation)\n- Fracture isolée peu déplacée de l’ulna : plâtre ou attelle\n- **Monteggia** et **Galeazzi** : réduction de la luxation et ostéosynthèse',
      ],
      [
        'Surveillance',
        'Prévenir les complications.',
        '- Surélévation, mobilisation des doigts, surveillance du **syndrome des loges** et de la vascularisation\n- Rééducation après consolidation',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'premiere', 'Douleur'],
      ['ketamine', 'alternative', 'Sédation pour la réduction'],
      ['morphine', 'alternative', 'Douleur sévère'],
      ['lidocaine', 'alternative', 'Anesthésie (bloc)'],
    ],
    complications: [
      {
        nom: 'Syndrome des loges',
        fiche: 'syndrome-des-loges',
        description: 'Œdème, plâtre serré.',
        traitement: '- Ouverture du plâtre, aponévrotomie',
        clinique: '- Douleur à l’extension des doigts',
        paraclinique: '',
      },
      {
        nom: 'Perte de la pronation-supination',
        description: 'Cal vicieux.',
        traitement: '- Ostéotomie',
        clinique: '- Raideur',
        paraclinique: '',
      },
      {
        nom: 'Pseudarthrose',
        description: 'Adulte.',
        traitement: '- Ostéosynthèse, greffe',
        clinique: '',
        paraclinique: '- Radiographie',
      },
    ],
    evolution: '## Pronostic\n- Excellent chez l’enfant ; bon chez l’adulte après ostéosynthèse anatomique',
    urgences: [],
    symptomes: [
      ['Douleurs osseuses', 'tres_frequent'],
      ['Impotence fonctionnelle', 'tres_frequent'],
      ['Déformation d’un membre', 'frequent'],
    ],
    sources: [
      'AAOS — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [PRE_HOSP, ''],
      hgr: ['- Réduction, plâtre, ostéosynthèse', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fracture des deux os de l’enfant',
        type: 'terrain',
        description: 'Orthopédique.',
        terrain: '- Enfant',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Angulation',
        paraclinique: '- Bois vert',
        etiologies: '- Chute sur la main',
        syndromes: [],
      },
      {
        nom: 'Fracture déplacée de l’adulte',
        type: 'commune',
        description: 'Plaques.',
        terrain: '- Adulte',
        fonctionnels: '- Impotence',
        generaux: '',
        physiques: '- Déformation',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Fracture-luxation (Monteggia, Galeazzi)',
        type: 'gravite',
        description: 'Luxation associée.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Douleur du coude ou du poignet',
        paraclinique: '- Luxation à la radiographie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Extrémité inférieure du radius
  {
    ...TRAUMA,
    slug: 'fracture-extremite-inferieure-radius',
    nom: 'Fracture de l’extrémité inférieure du radius',
    resume:
      'Fracture du poignet la plus fréquente : femme âgée ostéoporotique après une chute sur la main (fracture de Pouteau-Colles, déplacement dorsal en « dos de fourchette »), adulte jeune (haute énergie, fractures articulaires), enfant (décollement épiphysaire, fracture en motte de beurre) ; radiographies face et profil ; fracture stable : plâtre antébrachio-palmaire 6 semaines ; déplacée : réduction sous anesthésie (bloc, hématome) et plâtre, ou brochage, plaque ; surveillance (déplacement secondaire, syndrome du canal carpien, algodystrophie) ; rechercher et traiter l’ostéoporose chez la femme âgée.',
    definition:
      'Fracture du radius distal, à moins de 3 cm de l’interligne radio-carpien, extra- ou intra-articulaire.',
    physiopathologie:
      '## Mécanismes\n- **Chute sur la main en extension** : déplacement dorsal (Pouteau-Colles), plus rarement palmaire (Goyrand-Smith)\n- **Ostéoporose** (femme ménopausée) : fracture « sentinelle »\n- Haute énergie chez le jeune : fractures articulaires complexes\n- Enfant : fracture en motte de beurre, décollement épiphysaire',
    diagnostic:
      '## Clinique\n- Douleur, gonflement du poignet, déformation en **dos de fourchette** (Colles), impotence\n- Examen du nerf médian (paresthésies des 3 premiers doigts), de la vascularisation, des tendons\n- Lésions associées (scaphoïde, styloïde ulnaire)\n\n## Examens\n- **Radiographies** du poignet face et profil (déplacement, bascule, atteinte articulaire)\n- Ostéoporose : densitométrie, calcium, vitamine D chez la femme âgée',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Poignet face et profil.'],
      ['deuxieme_intention', 'densitometrie-osseuse', 'Ostéoporose.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Ostéoporose.'],
    ],
    scores: [],
    differentiels: [
      ['Fracture du scaphoïde', 'Douleur de la tabatière anatomique.'],
      ['Entorse du poignet', 'Radiographie normale.'],
      ['fractures-avant-bras', 'Fracture diaphysaire.'],
      ['osteoporose', 'Terrain à rechercher.'],
    ],
    etiologies: '## Facteurs\n- Ostéoporose, chute, haute énergie, sport',
    principes: [
      [
        'Fracture non déplacée',
        'Plâtre.',
        '- **Plâtre antébrachio-palmaire** (manchette) 4–6 semaines ; enfant (motte de beurre) : attelle 3 semaines\n- Contrôle radiologique à J7–J10',
      ],
      [
        'Fracture déplacée',
        'Réduire.',
        '- **Réduction** sous anesthésie (anesthésie de l’hématome à la **lidocaïne**, bloc, kétamine) puis plâtre\n- Instable ou articulaire : **brochage** percutané, **plaque** antérieure\n- Mobilisation des doigts et de l’épaule pendant l’immobilisation',
      ],
      [
        'Femme âgée',
        'Traiter l’ostéoporose.',
        '- **Calcium**, **vitamine D**, bisphosphonate (acide alendronique) selon la densitométrie, prévention des chutes',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Anesthésie de l’hématome'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'alternative', 'Douleur'],
      ['ketamine', 'alternative', 'Sédation pour la réduction'],
      ['calcium', 'adjuvant', 'Ostéoporose'],
      ['cholecalciferol-vitamine-d3', 'adjuvant', 'Ostéoporose'],
      ['acide-alendronique', 'adjuvant', 'Ostéoporose'],
    ],
    complications: [
      {
        nom: 'Déplacement secondaire et cal vicieux',
        description: 'Fracture instable.',
        traitement: '- Reprise, ostéotomie',
        clinique: '- Déformation',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Syndrome du canal carpien',
        description: 'Compression du nerf médian.',
        traitement: '- Décompression',
        clinique: '- Paresthésies',
        paraclinique: '',
      },
      {
        nom: 'Algodystrophie',
        description: 'Syndrome douloureux régional complexe.',
        traitement: '- Rééducation, antalgiques',
        clinique: '- Douleur, raideur, œdème',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon dans la majorité ; raideur fréquente chez la personne âgée',
    urgences: [],
    symptomes: [
      ['Douleurs osseuses', 'tres_frequent'],
      ['Déformation d’un membre', 'frequent'],
      ['Impotence fonctionnelle', 'frequent'],
    ],
    sources: ['AAOS — recommandations de pratique clinique', 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: [PRE_HOSP, ''],
      hgr: ['- Réduction, plâtre, brochage', ''],
      tert: ['- Fractures articulaires complexes', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fracture de Pouteau-Colles',
        type: 'commune',
        description: 'Déplacement dorsal.',
        terrain: '- Femme âgée',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Dos de fourchette',
        paraclinique: '- Bascule dorsale',
        etiologies: '- Ostéoporose',
        syndromes: [],
      },
      {
        nom: 'Fracture de l’enfant',
        type: 'terrain',
        description: 'Motte de beurre, décollement.',
        terrain: '- Enfant',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Fracture articulaire du jeune',
        type: 'gravite',
        description: 'Haute énergie.',
        terrain: '- Adulte jeune',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Trait articulaire',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Luxation de l'épaule
  {
    ...TRAUMA,
    slug: 'luxation-epaule',
    nom: 'Luxation de l’épaule',
    resume:
      'Luxation articulaire la plus fréquente, antéro-interne dans 95 % des cas (chute sur le bras en abduction-rotation externe) : douleur, impotence, épaulette (vide sous l’acromion), bras en abduction-rotation externe, coup de hache ; vérifier le nerf axillaire (sensibilité du moignon de l’épaule) et le pouls ; radiographies avant réduction (fracture associée) ; réduction rapide (méthodes de Milch, de Kocher, de traction-contre-traction) sous antalgie ou sédation, contrôle radiographique et neurologique, immobilisation coude au corps 2–3 semaines, rééducation ; récidives fréquentes chez le jeune ; luxation postérieure (épilepsie, électrocution) souvent méconnue.',
    definition:
      'Perte de contact permanente entre la tête humérale et la glène de la scapula, le plus souvent antéro-interne.',
    physiopathologie:
      '## Mécanismes\n- **Antérieure** (95 %) : chute sur le bras en abduction-rotation externe, sport\n- **Postérieure** (2–4 %) : **crise d’épilepsie**, **électrocution** (souvent méconnue)\n- Inférieure (luxatio erecta) : rare\n\n## Lésions associées\n- Fracture du trochiter, de la glène, encoche de Hill-Sachs, lésion du bourrelet (récidives)\n- **Nerf axillaire**, plexus brachial, artère axillaire (âgé)\n- Rupture de la coiffe des rotateurs (> 40 ans)',
    diagnostic:
      '## Clinique\n- Douleur intense, **impotence**, bras soutenu par la main opposée\n- **Signe de l’épaulette** (saillie de l’acromion, vide sous-acromial), bras en abduction-rotation externe, tête palpable en avant\n- **Nerf axillaire** : sensibilité du moignon de l’épaule ; pouls radial ; motricité de la main\n- Luxation postérieure : bras bloqué en rotation interne, rotation externe impossible\n\n## Examens\n- **Radiographies** de l’épaule (face, profil de Lamy/axillaire) **avant et après** réduction',
    examens: [['confirmation', 'radiographie-osseuse', 'Épaule face et profil, avant et après réduction.']],
    scores: [],
    differentiels: [
      ['Fracture du col de l’humérus', 'Sujet âgé, radiographie.'],
      ['Rupture de la coiffe des rotateurs', 'Impotence sans déformation.'],
      ['Luxation acromio-claviculaire', 'Saillie de la clavicule.'],
      ['Tendinopathie de la coiffe', 'Douleur sans traumatisme majeur.'],
    ],
    etiologies: '## Causes\n- Chute, sport, épilepsie, électrocution',
    principes: [
      [
        'Réduction',
        'Rapide.',
        '- Antalgie (**morphine**, paracétamol), **sédation** (kétamine, midazolam) ou anesthésie intra-articulaire (**lidocaïne**)\n- Méthodes douces : **Milch** (élévation progressive en rotation externe), **Kocher**, rotation externe, **traction-contre-traction** (drap autour du thorax)\n- Contrôle radiographique et **neurologique** après réduction',
      ],
      [
        'Après la réduction',
        'Immobiliser puis rééduquer.',
        '- **Immobilisation coude au corps** 2–3 semaines (moins chez l’âgé : raideur)\n- **Rééducation** ; luxations récidivantes du jeune : chirurgie de stabilisation (Bankart, Latarjet)',
      ],
      [
        'Échec ou fracture',
        'Bloc opératoire.',
        '- Réduction sous anesthésie générale, chirurgie si fracture déplacée associée',
      ],
    ],
    molecules: [
      ['morphine', 'premiere', 'Douleur'],
      ['ketamine', 'alternative', 'Sédation pour la réduction'],
      ['midazolam', 'alternative', 'Sédation pour la réduction'],
      ['lidocaine', 'alternative', 'Anesthésie intra-articulaire'],
      ['paracetamol', 'premiere', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Lésion du nerf axillaire',
        description: 'Étirement.',
        traitement: '- Surveillance, récupération habituelle',
        clinique: '- Anesthésie du moignon de l’épaule, déficit du deltoïde',
        paraclinique: '- EMG',
      },
      {
        nom: 'Luxation récidivante',
        description: 'Jeune sportif.',
        traitement: '- Chirurgie de stabilisation',
        clinique: '- Luxations répétées',
        paraclinique: '',
      },
      {
        nom: 'Raideur de l’épaule',
        description: 'Immobilisation prolongée (âgé).',
        traitement: '- Rééducation',
        clinique: '- Limitation des mouvements',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon après réduction précoce ; récidives fréquentes avant 25 ans',
    urgences: [],
    symptomes: [
      ['Douleur de l’épaule', 'tres_frequent'],
      ['Impotence fonctionnelle', 'tres_frequent'],
      ['Déformation d’un membre', 'frequent'],
    ],
    sources: ['AAOS — recommandations de pratique clinique', 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: ['- Antalgie, immobilisation, référence ; réduction si formé', ''],
      hgr: ['- Radiographie, réduction sous sédation', ''],
      tert: ['- Chirurgie de stabilisation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Luxation antéro-interne',
        type: 'commune',
        description: '95 %.',
        terrain: '- Adulte jeune, sportif',
        fonctionnels: '- Douleur, impotence',
        generaux: '',
        physiques: '- Épaulette, bras en abduction',
        paraclinique: '- Radiographie',
        etiologies: '- Chute',
        syndromes: [],
      },
      {
        nom: 'Luxation postérieure',
        type: 'etiologique',
        description: 'Souvent méconnue.',
        terrain: '- Épilepsie, électrocution',
        fonctionnels: '',
        generaux: '',
        physiques: '- Rotation interne bloquée',
        paraclinique: '- Profil indispensable',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Luxation de la hanche
  {
    ...TRAUMA,
    slug: 'luxation-de-la-hanche',
    nom: 'Luxation de la hanche',
    resume:
      'Urgence traumatologique à haute énergie (accident de voiture : genou contre le tableau de bord), postérieure dans 90 % des cas : membre raccourci en flexion-adduction-rotation interne, impotence totale ; rechercher une lésion du nerf sciatique, une fracture du cotyle ou de la tête fémorale, une fracture du fémur ou de la rotule associée ; radiographies du bassin ; réduction en urgence (dans les 6 h) sous anesthésie générale ou sédation profonde (risque de nécrose de la tête fémorale), contrôle radiographique, traction ou repos, chirurgie si fracture instable ; luxation sur prothèse : réduction et bilan.',
    definition:
      'Perte de contact entre la tête fémorale et le cotyle, d’origine traumatique (postérieure, antérieure ou centrale avec fracture du cotyle).',
    physiopathologie:
      '## Mécanisme\n- **Haute énergie** : choc sur le genou fléchi (tableau de bord) → luxation **postérieure** (90 %), avec ou sans fracture de la paroi postérieure du cotyle\n- Antérieure : abduction-rotation externe forcée\n\n## Complications\n- **Nécrose de la tête fémorale** (vaisseaux rétinaculaires lésés), risque croissant avec le délai de réduction\n- **Nerf sciatique** (10–20 %)\n- Arthrose post-traumatique, lésions associées (fémur, genou, polytraumatisme)',
    diagnostic:
      '## Clinique\n- Douleur intense, **impotence totale**\n- Luxation postérieure : membre **raccourci**, **flexion, adduction, rotation interne**\n- Luxation antérieure : abduction, rotation externe\n- **Nerf sciatique** : sensibilité et motricité du pied (releveurs) ; pouls\n- Lésions associées (genou, fémur, polytraumatisme)\n\n## Examens\n- **Radiographie du bassin** de face et de la hanche (avant et après réduction)\n- Scanner après réduction (fractures du cotyle, fragments intra-articulaires)',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Bassin et hanche, avant et après réduction.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Scanner du bassin (cotyle).'],
      ['premiere_intention', 'nfs', 'Bilan préopératoire.'],
      ['gravite', 'groupage-rai', 'Polytraumatisme.'],
    ],
    scores: [],
    differentiels: [
      ['fracture-col-du-femur', 'Membre raccourci en rotation externe.'],
      ['fracture-diaphyse-femorale', 'Déformation de la cuisse.'],
      ['Fracture du cotyle', 'Luxation centrale.'],
      ['polytraumatise', 'Lésions associées.'],
    ],
    etiologies: '## Causes\n- Accidents de la route (tableau de bord), chutes de hauteur',
    principes: [
      [
        'Réduction urgente',
        'Dans les 6 heures.',
        '- Antalgie, **réduction** sous **anesthésie générale** ou sédation profonde (kétamine, propofol) et curarisation si possible (manœuvre d’Allis, de Bigelow)\n- **Contrôle radiographique** et neurologique (nerf sciatique) après réduction\n- Évaluer la stabilité',
      ],
      [
        'Après la réduction',
        'Selon les lésions.',
        '- Hanche stable sans fracture : repos, traction courte, mise en charge progressive\n- **Fracture du cotyle** instable ou fragment intra-articulaire : **chirurgie** (ostéosynthèse)\n- Irréductible : réduction chirurgicale\n- **Thromboprophylaxie**, surveillance de la nécrose (radiographies, IRM)',
      ],
    ],
    molecules: [
      ['morphine', 'premiere', 'Douleur'],
      ['ketamine', 'premiere', 'Sédation, anesthésie'],
      ['propofol', 'alternative', 'Anesthésie générale'],
      ['midazolam', 'alternative', 'Sédation'],
      ['enoxaparine', 'premiere', 'Thromboprophylaxie'],
    ],
    complications: [
      {
        nom: 'Nécrose de la tête fémorale',
        description: 'Réduction tardive.',
        traitement: '- Prothèse de hanche',
        clinique: '- Douleur, boiterie',
        paraclinique: '- Radiographie, IRM',
      },
      {
        nom: 'Paralysie sciatique',
        description: 'Étirement, compression.',
        traitement: '- Surveillance, attelle',
        clinique: '- Pied tombant',
        paraclinique: '- EMG',
      },
      {
        nom: 'Arthrose post-traumatique',
        description: 'Lésions cartilagineuses.',
        traitement: '- Prothèse',
        clinique: '- Douleur, raideur',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si réduction rapide sans fracture ; nécrose et arthrose fréquentes si retard ou fracture associée',
    urgences: [],
    symptomes: [
      ['Impotence fonctionnelle', 'tres_frequent'],
      ['Déformation d’un membre', 'tres_frequent'],
      ['Douleurs osseuses', 'frequent'],
      ['Paralysie flasque', 'occasionnel'],
    ],
    sources: [
      'AAOS — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'ACS TQIP — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [PRE_HOSP, '- Toute suspicion'],
      hgr: ['- Radiographie, réduction sous anesthésie', ''],
      tert: ['- Fractures du cotyle', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Luxation postérieure',
        type: 'commune',
        description: 'Tableau de bord.',
        terrain: '- Accident de voiture',
        fonctionnels: '- Impotence',
        generaux: '',
        physiques: '- Raccourcissement, flexion-adduction-rotation interne',
        paraclinique: '- Tête fémorale hors du cotyle',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Luxation avec fracture du cotyle',
        type: 'gravite',
        description: 'Instable.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Atteinte sciatique',
        paraclinique: '- Fracture de la paroi postérieure',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
