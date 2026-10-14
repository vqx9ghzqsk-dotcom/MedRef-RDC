'use strict';

/**
 * Lot 61 (phase 2, traumatologie) — entorse de la cheville, fracture du bassin, plaies de la main,
 * amputations traumatiques. Rédigé par IA (AAOS, ACS TQIP, EAST, Sabiston) : à valider.
 */

const TRAUMA = { departement: 'chirurgie', specialite: 'Traumatologie' };

module.exports = [
  // =================================================================== Entorse de la cheville
  {
    ...TRAUMA,
    slug: 'entorse-de-la-cheville',
    nom: 'Entorse de la cheville',
    resume:
      'Lésion ligamentaire la plus fréquente (ligament latéral externe, faisceau antérieur), par inversion du pied : douleur, œdème, ecchymose de la malléole externe ; règles d’Ottawa pour décider de la radiographie (douleur osseuse au bord postérieur des malléoles, de la base du 5e métatarsien ou du naviculaire, impossibilité de faire 4 pas) ; entorse bénigne : repos relatif, glace, compression, élévation, antalgiques, appui précoce ; entorse grave : orthèse ou botte de marche 3–6 semaines, rééducation proprioceptive pour éviter l’instabilité chronique ; pas d’immobilisation stricte prolongée.',
    definition:
      'Lésion traumatique des ligaments de la cheville, le plus souvent du ligament collatéral latéral, classée en bénigne (élongation), moyenne ou grave (rupture).',
    physiopathologie:
      '## Mécanisme\n- **Inversion** (supination) forcée du pied : atteinte du faisceau talo-fibulaire antérieur puis calcanéo-fibulaire\n- Plus rarement ligament deltoïdien (éversion), syndesmose (rotation externe : entorse « haute », plus longue à guérir)\n\n## Lésions associées\n- Fractures des malléoles, de la base du 5e métatarsien, lésions ostéochondrales du talus',
    diagnostic:
      '## Clinique\n- Craquement, **douleur** de la face externe, **œdème**, ecchymose, difficulté à l’appui\n- Gravité : craquement, impotence immédiate, œdème important, hématome, laxité (tiroir antérieur, à tester après quelques jours)\n\n## Règles d’Ottawa (radiographie si)\n- Douleur à la palpation du bord postérieur ou de la pointe d’une **malléole**, de la **base du 5e métatarsien** ou du **naviculaire**\n- **Impossibilité de faire 4 pas** juste après le traumatisme et à l’examen\n\n## Examens\n- **Radiographies** de la cheville (± pied) selon Ottawa\n- Échographie ou IRM si douleur persistante (lésions associées)',
    examens: [
      ['premiere_intention', 'radiographie-osseuse', 'Selon les règles d’Ottawa.'],
      ['deuxieme_intention', 'echographie-parties-molles', 'Lésions ligamentaires persistantes.'],
      ['deuxieme_intention', 'irm-osteo-articulaire', 'Lésion ostéochondrale.'],
    ],
    scores: [],
    differentiels: [
      ['Fracture de la malléole', 'Douleur osseuse, radiographie.'],
      ['Fracture de la base du 5e métatarsien', 'Douleur de la base du 5e métatarsien.'],
      ['Rupture du tendon d’Achille', 'Coup de bâton au mollet, signe de Thompson.'],
      ['arthrite-septique', 'Arthrite fébrile sans traumatisme.'],
    ],
    etiologies: '## Causes\n- Sport, marche sur terrain irrégulier, chute',
    principes: [
      [
        'Phase aiguë',
        'Protocole RICE.',
        '- **Repos** relatif, **glace** 20 min plusieurs fois par jour, **compression** (bande), **élévation**\n- **Antalgiques** : paracétamol, **AINS** (ibuprofène) quelques jours',
      ],
      [
        'Selon la gravité',
        'Appui précoce.',
        '- **Bénigne** : appui dès que possible, chevillère\n- **Moyenne à grave** : **orthèse** stabilisatrice ou botte de marche 3–6 semaines (plâtre court seulement si douleur importante), cannes\n- Pas d’immobilisation stricte prolongée (raideur)',
      ],
      [
        'Rééducation',
        'Prévenir les récidives.',
        '- **Rééducation proprioceptive** (équilibre sur un pied), renforcement des péroniers, reprise progressive du sport\n- Instabilité chronique : chirurgie de ligamentoplastie',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'premiere', 'Douleur, inflammation'],
      ['diclofenac', 'alternative', 'Gel local'],
      ['enoxaparine', 'adjuvant', 'Immobilisation plâtrée à risque thrombotique'],
    ],
    complications: [
      {
        nom: 'Instabilité chronique',
        description: 'Rééducation insuffisante.',
        traitement: '- Rééducation, chirurgie',
        clinique: '- Entorses à répétition',
        paraclinique: '',
      },
      {
        nom: 'Lésion ostéochondrale méconnue',
        description: 'Douleur persistante.',
        traitement: '- Chirurgie',
        clinique: '- Douleur, blocage',
        paraclinique: '- IRM',
      },
      {
        nom: 'Thrombose veineuse',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Immobilisation.',
        traitement: '- Anticoagulation',
        clinique: '- Œdème du mollet',
        paraclinique: '- Doppler',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 1–6 semaines selon la gravité ; douleurs résiduelles ou instabilité chez 20–30 % sans rééducation',
    urgences: [],
    symptomes: [
      ['Douleurs osseuses', 'frequent'],
      ['Œdème d’un membre', 'tres_frequent'],
      ['Impotence fonctionnelle', 'frequent'],
      ['Boiterie', 'frequent'],
    ],
    sources: ['AAOS — recommandations de pratique clinique', 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: ['- RICE, antalgiques, règles d’Ottawa', '- Suspicion de fracture'],
      hgr: ['- Radiographie, orthèse', ''],
      tert: ['- Instabilité chronique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Entorse bénigne',
        type: 'commune',
        description: 'Élongation.',
        terrain: '- Sportif, adulte jeune',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Œdème modéré, appui possible',
        paraclinique: '- Radiographie normale',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Entorse grave',
        type: 'gravite',
        description: 'Rupture ligamentaire.',
        terrain: '',
        fonctionnels: '- Craquement, impotence',
        generaux: '',
        physiques: '- Hématome, laxité',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Fracture du bassin
  {
    ...TRAUMA,
    slug: 'fracture-du-bassin',
    nom: 'Fracture du bassin',
    resume:
      'Deux situations : fractures à haute énergie de l’adulte jeune (accidents de moto, piétons, écrasements, chutes) avec risque d’hémorragie massive (choc), de lésions urinaires (urètre, vessie) et digestives ; fractures à faible énergie du sujet âgé ostéoporotique (branches pubiennes) ; examen : instabilité du bassin (ne pas répéter les manœuvres), sang au méat urétral, hématome périnéal ; radiographie du bassin, FAST, scanner ; ceinture pelvienne ou drap serré au niveau des trochanters, réanimation, transfusion, acide tranexamique, fixateur externe ou packing ; pas de sondage urinaire si sang au méat (cystostomie).',
    definition:
      'Fracture de l’anneau pelvien (sacrum, os coxaux, symphyse pubienne) et/ou de l’acétabulum, stable ou instable.',
    physiopathologie:
      '## Mécanismes\n- **Haute énergie** : compression antéro-postérieure (« livre ouvert »), compression latérale, cisaillement vertical\n- **Faible énergie** : chute de la personne âgée (ostéoporose)\n\n## Conséquences\n- **Hémorragie** (plexus veineux pré-sacrés, artères, foyers osseux) : jusqu’à plusieurs litres\n- **Lésions urétrales** (homme), **vésicales**, rectales, vaginales (fractures ouvertes)\n- Lésions nerveuses (plexus lombo-sacré)',
    diagnostic:
      '## Clinique\n- Douleur pelvienne, impotence, **choc**\n- Instabilité du bassin à la compression douce (une seule fois), asymétrie des membres inférieurs\n- **Sang au méat urétral**, **hématome périnéal** ou scrotal, prostate ascensionnée au toucher rectal, impossibilité d’uriner\n- Plaies périnéales, vaginales, rectales (fracture ouverte)\n\n## Examens\n- **Radiographie du bassin** de face (bilan initial du polytraumatisé)\n- **FAST** (hémopéritoine), **scanner** si patient stable\n- NFS, **groupage-RAI**, hémostase, lactates\n- Urétrographie rétrograde si sang au méat',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Bassin de face.'],
      ['premiere_intention', 'echographie-abdominale', 'FAST.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Bilan lésionnel (patient stable).'],
      ['gravite', 'nfs', 'Hémorragie.'],
      ['gravite', 'groupage-rai', 'Transfusion massive.'],
      ['gravite', 'lactates', 'Choc.'],
      ['deuxieme_intention', 'urethrographie', 'Sang au méat urétral.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie.'],
    ],
    scores: [],
    differentiels: [
      ['fracture-col-du-femur', 'Fracture de hanche du sujet âgé.'],
      ['luxation-de-la-hanche', 'Déformation du membre.'],
      ['traumatisme-abdominal-ferme', 'Lésions viscérales associées.'],
      ['polytraumatise', 'Prise en charge globale.'],
    ],
    etiologies: '## Causes\n- Accidents de la route, écrasements, chutes de hauteur, ostéoporose',
    principes: [
      [
        'Urgence hémodynamique',
        'Contrôler l’hémorragie.',
        '- **Ceinture pelvienne** ou **drap** serré **au niveau des grands trochanters**, jambes attachées en rotation interne\n- 2 voies veineuses, **acide tranexamique** 1 g dans les 3 h, **transfusion** précoce (rapport culots/plasma équilibré), remplissage limité\n- Instabilité persistante : **fixateur externe** antérieur, **packing** pré-péritonéal, embolisation si disponible ; laparotomie si hémopéritoine',
      ],
      [
        'Lésions associées',
        'Ne pas aggraver.',
        '- **Sang au méat** : **pas de sonde urétrale**, **cystostomie** sus-pubienne\n- Fracture ouverte (vagin, rectum) : antibiotiques, colostomie de dérivation\n- Antitétanique',
      ],
      [
        'Traitement définitif',
        'Stabiliser l’anneau.',
        '- Fractures stables (branches pubiennes du sujet âgé) : antalgiques, mise en charge précoce selon la douleur, thromboprophylaxie\n- Fractures instables : ostéosynthèse (centre spécialisé) ou fixateur externe, traction',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Hémorragie'],
      ['morphine', 'premiere', 'Douleur'],
      ['ketamine', 'alternative', 'Analgésie, sédation'],
      ['ringer-lactate', 'premiere', 'Remplissage initial'],
      ['enoxaparine', 'premiere', 'Thromboprophylaxie (après contrôle du saignement)'],
      ['cefazoline', 'adjuvant', 'Fracture ouverte'],
      ['anatoxines-tetanique-diphterique', 'adjuvant', 'Fracture ouverte'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-traumatique',
        description: 'Saignement pelvien.',
        traitement: '- Ceinture, transfusion, fixateur',
        clinique: '- Hypotension',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Rupture de l’urètre',
        fiche: 'retrecissement-uretral',
        description: 'Homme.',
        traitement: '- Cystostomie, réparation différée',
        clinique: '- Sang au méat, rétention',
        paraclinique: '- Urétrographie',
      },
      {
        nom: 'Thromboembolie',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Immobilisation.',
        traitement: '- Anticoagulation',
        clinique: '',
        paraclinique: '- Doppler',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 10–20 % des fractures instables avec choc ; fractures du sujet âgé : perte d’autonomie fréquente',
    urgences: [],
    symptomes: [
      ['Douleurs osseuses', 'tres_frequent'],
      ['Impotence fonctionnelle', 'tres_frequent'],
      ['Hématurie', 'occasionnel'],
      ['Pâleur', 'frequent'],
      ['Lésions traumatiques', 'frequent'],
    ],
    sources: [
      'ACS TQIP — recommandations de pratique clinique',
      'EAST — recommandations de pratique clinique',
      'WSES — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Drap autour du bassin, voies veineuses, acide tranexamique, pas de sonde si sang au méat, référence',
        '- Tout traumatisé du bassin',
      ],
      hgr: ['- Radiographie, FAST, transfusion, fixateur externe, cystostomie', ''],
      tert: ['- Scanner, embolisation, ostéosynthèse', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fracture instable à haute énergie',
        type: 'gravite',
        description: 'Choc hémorragique.',
        terrain: '- Accident de moto, écrasement',
        fonctionnels: '- Douleur',
        generaux: '- Choc',
        physiques: '- Bassin instable, hématome périnéal',
        paraclinique: '- Disjonction pubienne',
        etiologies: '',
        syndromes: ['syndrome-de-choc', 'syndrome-d-hemorragie-interne'],
      },
      {
        nom: 'Fracture des branches pubiennes du sujet âgé',
        type: 'commune',
        description: 'Faible énergie.',
        terrain: '- Femme âgée ostéoporotique',
        fonctionnels: '- Douleur à la marche',
        generaux: '',
        physiques: '',
        paraclinique: '- Fracture stable',
        etiologies: '- Ostéoporose',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Plaies de la main
  {
    ...TRAUMA,
    slug: 'plaies-de-la-main',
    nom: 'Plaies de la main',
    resume:
      'Plaies très fréquentes (machettes, couteaux, outils, verre, morsures humaines ou animales) dont la gravité est souvent sous-estimée : toute plaie de la main doit être explorée pour rechercher une lésion des tendons fléchisseurs ou extenseurs, des nerfs (sensibilité de la pulpe), des artères, des articulations ; morsure humaine (coup de poing sur une dent) : risque infectieux majeur ; lavage abondant, exploration au bloc sous anesthésie locorégionale et garrot, réparation des tendons et nerfs (chirurgien formé), antibiotiques pour les plaies à risque, antitétanique, immobilisation en position de fonction, rééducation précoce.',
    definition:
      'Toute effraction cutanée de la main et des doigts, simple ou associée à des lésions des structures profondes (tendons, nerfs, vaisseaux, os, articulations).',
    physiopathologie:
      '## Particularités\n- Structures nobles superficielles : **tendons** fléchisseurs (zone II « no man’s land »), extenseurs, **nerfs digitaux**, **artères**\n- Risque **infectieux** élevé (gaines synoviales, espaces celluleux) : phlegmon des gaines\n\n## Mécanismes à risque\n- **Morsure humaine** (coup de poing sur une dent : arthrite métacarpo-phalangienne), morsure animale, machette, injection sous pression, écrasement',
    diagnostic:
      '## Examen avant anesthésie\n- **Tendons** : flexion de l’interphalangienne distale (fléchisseur profond) et proximale (superficiel), extension de chaque doigt\n- **Nerfs** : sensibilité de chaque hémipulpe (discrimination), motricité (médian, ulnaire, radial)\n- **Vascularisation** : couleur, pouls capillaire, saignement pulsatile\n- Position des doigts au repos (perte de la cascade des doigts = tendon coupé)\n\n## Examens\n- **Radiographie** (fracture, corps étranger)\n- **Exploration** chirurgicale (seul moyen d’éliminer une lésion profonde)',
    examens: [
      ['premiere_intention', 'radiographie-osseuse', 'Fracture, corps étranger.'],
      ['deuxieme_intention', 'prelevement-de-pus', 'Infection.'],
    ],
    scores: [],
    differentiels: [
      ['plaies-et-sutures', 'Prise en charge générale des plaies.'],
      ['morsures-animales', 'Morsure animale.'],
      ['Phlegmon des gaines', 'Doigt gonflé en crochet, douleur à l’extension.'],
      ['Panaris', 'Infection de la pulpe ou péri-unguéale.'],
    ],
    etiologies: '## Causes\n- Machettes, couteaux, verre, outils, morsures, machines, écrasements',
    principes: [
      [
        'Premiers soins',
        'Ne pas nuire.',
        '- Compression de l’hémorragie (pas de garrot prolongé), pansement, surélévation, retrait des bagues\n- **Antitétanique** ; antalgiques',
      ],
      [
        'Exploration et réparation',
        'Au bloc.',
        '- **Lavage abondant**, exploration sous anesthésie locorégionale (bloc) avec **garrot**, parage\n- **Suture des tendons** et des **nerfs** (idéalement < 24 h, chirurgien formé), réparation vasculaire\n- **Morsures** : **ne pas suturer** (sauf visage), lavage, exploration, **amoxicilline-acide clavulanique** 5–7 jours\n- Plaies souillées : antibiotiques (céfazoline ou amoxicilline-acide clavulanique)',
      ],
      [
        'Après la réparation',
        'Préserver la fonction.',
        '- **Immobilisation** en position de fonction (poignet en extension, MP fléchies, IP tendues)\n- **Rééducation** précoce (protocoles des tendons fléchisseurs)\n- Surveillance de l’infection',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Anesthésie locale ou bloc'],
      ['amoxicilline', 'premiere', 'Morsures, plaies souillées (avec acide clavulanique)'],
      ['acide-clavulanique', 'premiere', 'Morsures'],
      ['cefazoline', 'alternative', 'Plaies à risque'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Prévention du tétanos'],
      ['serum-immunoglobuline-antitetanique', 'alternative', 'Plaie à risque, non vacciné'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Phlegmon des gaines et infection',
        fiche: 'abces-phlegmons-parties-molles',
        description: 'Morsure, plaie souillée.',
        traitement: '- Drainage chirurgical, antibiotiques',
        clinique: '- Doigt gonflé, douleur',
        paraclinique: '',
      },
      {
        nom: 'Raideur et adhérences tendineuses',
        description: 'Rééducation insuffisante.',
        traitement: '- Rééducation, ténolyse',
        clinique: '- Perte de mobilité',
        paraclinique: '',
      },
      {
        nom: 'Perte de sensibilité',
        description: 'Nerf non réparé.',
        traitement: '- Suture nerveuse',
        clinique: '- Anesthésie de la pulpe',
        paraclinique: '',
      },
      {
        nom: 'Tétanos',
        fiche: 'tetanos',
        description: 'Plaie souillée.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si les lésions sont reconnues et réparées tôt ; séquelles fonctionnelles lourdes si méconnues',
    urgences: [],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Impotence fonctionnelle', 'frequent'],
      ['Troubles sensitifs', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'AAOS — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Examen des tendons et nerfs, lavage, antitétanique, référence si lésion profonde',
        '- Déficit tendineux ou nerveux, morsure',
      ],
      hgr: ['- Exploration, réparation tendineuse', ''],
      tert: ['- Chirurgie de la main, microchirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Plaie superficielle',
        type: 'commune',
        description: 'Sans lésion profonde.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Fonction normale',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Plaie avec section tendineuse ou nerveuse',
        type: 'gravite',
        description: 'Chirurgie.',
        terrain: '- Machette, verre',
        fonctionnels: '- Doigt qui ne bouge pas',
        generaux: '',
        physiques: '- Perte de la cascade, anesthésie pulpaire',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Morsure humaine',
        type: 'etiologique',
        description: 'Risque infectieux.',
        terrain: '- Bagarre (coup de poing)',
        fonctionnels: '',
        generaux: '',
        physiques: '- Plaie sur l’articulation MP',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Amputations traumatiques
  {
    ...TRAUMA,
    slug: 'amputations-traumatiques',
    nom: 'Amputations traumatiques',
    resume:
      'Section complète ou partielle d’un membre ou d’un segment (accidents de la route, machines, mines et explosions, armes à feu, machettes, morsures) : urgence hémorragique (garrot artériel au-dessus de la lésion, noter l’heure), réanimation, antalgie, antitétanique, antibiotiques ; conservation du segment amputé (doigt, main) dans une compresse humide, dans un sac fermé, posé sur de la glace (jamais directement) en vue d’une éventuelle réimplantation en centre spécialisé ; sinon régularisation chirurgicale du moignon (parage, longueur maximale, couverture), prise en charge de la douleur fantôme, appareillage et réinsertion.',
    definition:
      'Perte traumatique, complète ou subtotale, d’un segment de membre (doigt, main, pied, avant-bras, jambe, cuisse).',
    physiopathologie:
      '## Mécanismes\n- **Section nette** (machette, verre) : meilleures chances de réimplantation\n- **Écrasement**, **arrachement** (machines, accidents de moto), **blast** (mines, explosifs), armes à feu : lésions étendues, contamination\n\n## Conséquences\n- **Hémorragie**, choc, **infection** (tétanos, gangrène gazeuse), crush syndrome (rhabdomyolyse, hyperkaliémie)\n- Handicap, **douleur du membre fantôme**, retentissement psychologique et social',
    diagnostic:
      '## Évaluation\n- **Hémorragie** et état hémodynamique (choc), autres lésions (polytraumatisme)\n- Niveau et mécanisme de l’amputation, état du segment amputé, contamination\n- Temps d’ischémie (réimplantation possible < 6 h pour un membre, < 12 h pour un doigt refroidi)\n\n## Examens\n- NFS, **groupage-RAI**, hémostase, ionogramme (kaliémie), **CPK**, créatinine\n- Radiographies du moignon et du segment amputé',
    examens: [
      ['gravite', 'nfs', 'Hémorragie.'],
      ['gravite', 'groupage-rai', 'Transfusion.'],
      ['gravite', 'ionogramme', 'Hyperkaliémie (écrasement).'],
      ['gravite', 'cpk', 'Rhabdomyolyse.'],
      ['premiere_intention', 'radiographie-osseuse', 'Moignon, segment amputé.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
    ],
    scores: [],
    differentiels: [
      ['fractures-ouvertes', 'Fracture ouverte grave (membre conservé).'],
      ['syndrome-des-loges', 'Ischémie du membre.'],
      ['polytraumatise', 'Lésions associées.'],
    ],
    etiologies: '## Causes\n- Accidents de la route, machines, mines, armes à feu, machettes, conflits armés',
    principes: [
      [
        'Urgence',
        'Arrêter le saignement.',
        '- **Compression** directe, puis **garrot** artériel au-dessus de la lésion si hémorragie non contrôlée (**noter l’heure**)\n- Réanimation : voies veineuses, remplissage, **transfusion**, **acide tranexamique**\n- **Antalgie** (morphine, kétamine), **antitétanique**, **antibiotiques** (céfazoline ± métronidazole si souillure)',
      ],
      [
        'Segment amputé',
        'Conserver pour une réimplantation.',
        '- Rincer au sérum physiologique, envelopper dans une **compresse humide**, mettre dans un **sac étanche** posé sur **de l’eau glacée** (jamais de contact direct avec la glace)\n- Transfert rapide vers un centre de microchirurgie si réimplantation envisageable (pouce, plusieurs doigts, main, enfant)',
      ],
      [
        'Régularisation du moignon',
        'Préparer l’appareillage.',
        '- **Parage**, conservation de la **longueur maximale** utile, couverture, fermeture différée si souillure\n- Prévention du crush syndrome, thromboprophylaxie\n- **Douleur du membre fantôme** (amitriptyline, gabapentine), soutien psychologique, **rééducation**, **prothèse**, réinsertion',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Hémorragie'],
      ['morphine', 'premiere', 'Douleur'],
      ['ketamine', 'alternative', 'Analgésie'],
      ['cefazoline', 'premiere', 'Antibioprophylaxie'],
      ['metronidazole', 'alternative', 'Plaie souillée'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Prévention du tétanos'],
      ['serum-immunoglobuline-antitetanique', 'premiere', 'Plaie à risque'],
      ['gabapentine', 'adjuvant', 'Douleur du membre fantôme'],
      ['amitriptyline', 'adjuvant', 'Douleur du membre fantôme'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-traumatique',
        description: 'Saignement.',
        traitement: '- Garrot, transfusion',
        clinique: '- Hypotension',
        paraclinique: '',
      },
      {
        nom: 'Infection, gangrène gazeuse, tétanos',
        fiche: 'tetanos',
        description: 'Plaie souillée.',
        traitement: '- Débridement, antibiotiques, prévention',
        clinique: '- Crépitation, fièvre',
        paraclinique: '',
      },
      {
        nom: 'Douleur du membre fantôme',
        description: 'Fréquente.',
        traitement: '- Antidépresseurs, gabapentine, rééducation',
        clinique: '- Douleur du membre absent',
        paraclinique: '',
      },
      {
        nom: 'Rhabdomyolyse (crush syndrome)',
        fiche: 'insuffisance-renale-aigue',
        description: 'Écrasement.',
        traitement: '- Hydratation, traitement de l’hyperkaliémie',
        clinique: '- Urines foncées',
        paraclinique: '- CPK, kaliémie',
      },
    ],
    evolution:
      '## Pronostic\n- Réimplantation réussie dans 60–80 % des cas sélectionnés en centre spécialisé ; réhabilitation et appareillage déterminants pour l’autonomie',
    urgences: [],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Hémorragies', 'tres_frequent'],
      ['Pâleur', 'frequent'],
    ],
    sources: [
      'ACS TQIP — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Compression, garrot, conservation du segment, antitétanique, transfert', '- Toute amputation'],
      hgr: ['- Réanimation, régularisation du moignon', ''],
      tert: ['- Réimplantation, appareillage', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Amputation digitale',
        type: 'commune',
        description: 'Machine, machette.',
        terrain: '- Travailleur, accident domestique',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Doigt sectionné',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Amputation de membre avec choc',
        type: 'gravite',
        description: 'Hémorragie.',
        terrain: '- Accident de la route, mine',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Moignon hémorragique',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },
];
