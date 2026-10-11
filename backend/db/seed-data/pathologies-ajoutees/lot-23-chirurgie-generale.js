'use strict';

/**
 * Lot 23 (chirurgie générale) — abcès et phlegmons des parties molles, pyomyosite tropicale,
 * fasciite nécrosante, plaies et sutures, morsures animales (soins de la plaie).
 * Rédigé par IA (IDSA, OMS, MSF, WSES) : à valider.
 */

const CG = { departement: 'chirurgie', specialite: 'Chirurgie générale' };

module.exports = [
  // =================================================================== Abcès des parties molles
  {
    ...CG,
    slug: 'abces-phlegmons-parties-molles',
    nom: 'Abcès et phlegmons des parties molles',
    resume:
      'Collection purulente sous-cutanée (abcès) ou infection diffuse des gaines et espaces (phlegmon, notamment de la main) : incision-drainage, mèche, soins ; antibiotiques (cloxacilline) si cellulite, phlegmon, fièvre ou terrain fragile ; phlegmon des gaines de la main = urgence chirurgicale.',
    definition:
      'Infection bactérienne collectée (abcès) ou diffuse (phlegmon) du tissu sous-cutané, des gaines tendineuses ou des espaces anatomiques, le plus souvent à *Staphylococcus aureus*.',
    physiopathologie:
      '## Mécanismes\n- Porte d’entrée : plaie, piqûre, injection (abcès post-injection fréquents), folliculite\n- Collection limitée par une coque (abcès) ou diffusion le long des gaines (phlegmon)\n- Terrain : diabète, VIH, malnutrition, drépanocytose',
    diagnostic:
      '## Clinique\n- Abcès : tuméfaction rouge, chaude, douloureuse, fluctuante, parfois fistulisée\n- Phlegmon des gaines (main) : doigt en crochet, douleur à l’extension, tuméfaction le long de la gaine\n- Fièvre, adénopathie, lymphangite\n\n## Examens\n- Échographie si doute sur la collection\n- Glycémie, VIH',
    examens: [
      ['premiere_intention', 'echographie-parties-molles', 'Collection.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'tdr-vih', 'Terrain.'],
      ['gravite', 'hemocultures', 'Signes systémiques.'],
      ['gravite', 'radiographie-osseuse', 'Ostéite, corps étranger.'],
    ],
    scores: [],
    differentiels: [
      ['erysipele-et-cellulite', 'Placard diffus sans collection.'],
      ['pyomyosite-tropicale', 'Abcès intramusculaire profond.'],
      ['fasciite-necrosante', 'Douleur disproportionnée, nécrose, choc.'],
      ['Adénite (tuberculose, BCGite)', 'Adénopathie suppurée.'],
    ],
    etiologies:
      '## Facteurs\n- Injections non stériles, plaies, piqûres, folliculites\n- Diabète, VIH, malnutrition',
    principes: [
      [
        'Drainage',
        'Traitement principal.',
        '- **Incision-drainage** large sous anesthésie locale ou générale, effondrement des cloisons, lavage, mèche\n- Pansements quotidiens\n- Phlegmon de la main : drainage chirurgical urgent, immobilisation',
      ],
      [
        'Antibiotiques',
        'Dans certaines situations.',
        '- Cellulite péri-lésionnelle, phlegmon, fièvre, diabète, immunodépression, visage ou main : **cloxacilline** 1 g 3–4 fois par jour 5–10 jours\n- Allergie ou suspicion de SARM : **clindamycine**',
      ],
      [
        'Prévention',
        'Éviter les abcès iatrogènes.',
        '- Asepsie des injections, privilégier la voie orale, prévention du tétanos',
      ],
    ],
    molecules: [
      ['cloxacilline', 'premiere', 'Staphylocoque'],
      ['flucloxacilline', 'alternative', 'Staphylocoque'],
      ['clindamycine', 'alternative', 'Allergie, SARM'],
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['ketamine', 'alternative', 'Anesthésie'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Plaie'],
    ],
    complications: [
      {
        nom: 'Septicémie',
        fiche: 'sepsis-et-choc-septique',
        description: 'Diffusion.',
        traitement: '- Antibiotiques IV',
        clinique: '- Fièvre, hypotension',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Ostéite et arthrite',
        description: 'Extension en profondeur.',
        traitement: '- Antibiotiques prolongés, chirurgie',
        clinique: '- Douleur osseuse',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Raideur de la main',
        description: 'Phlegmon des gaines.',
        traitement: '- Rééducation',
        clinique: '- Doigt raide',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Guérison rapide après drainage',
    urgences: [],
    symptomes: [
      ['Tuméfaction des parties molles', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Adénopathies', 'occasionnel'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Incision-drainage des abcès simples, soins', '- Phlegmon, abcès profond, diabète'],
      hgr: ['- Drainage chirurgical, phlegmon de la main', ''],
      tert: ['- Chirurgie de la main', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Abcès sous-cutané',
        type: 'commune',
        description: 'Collection fluctuante.',
        terrain: '- Injection, plaie',
        fonctionnels: '- Douleur pulsatile',
        generaux: '- Fébricule',
        physiques: '- Tuméfaction rouge fluctuante',
        paraclinique: '',
        etiologies: '- S. aureus',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Phlegmon des gaines de la main',
        type: 'gravite',
        description: 'Urgence fonctionnelle.',
        terrain: '- Piqûre d’un doigt',
        fonctionnels: '- Douleur intense',
        generaux: '- Fièvre',
        physiques: '- Doigt en crochet, douleur à l’extension',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Pyomyosite
  {
    ...CG,
    slug: 'pyomyosite-tropicale',
    nom: 'Pyomyosite tropicale',
    resume:
      'Abcès intramusculaire à Staphylococcus aureus, fréquent en zone tropicale (enfant, adulte jeune, VIH) : douleur musculaire profonde (cuisse, fesse), fièvre, induration ; échographie ; drainage chirurgical et cloxacilline IV puis orale 2–3 semaines.',
    definition:
      'Infection bactérienne primitive du muscle squelettique évoluant vers l’abcès, sans porte d’entrée évidente, le plus souvent à *S. aureus*.',
    physiopathologie:
      '## Mécanismes\n- Bactériémie à S. aureus avec localisation musculaire (traumatisme, effort, parasitoses musculaires évoquées)\n- 3 phases : invasive (induration), suppurative (abcès), septique\n- Terrain : VIH, malnutrition, diabète, drépanocytose',
    diagnostic:
      '## Clinique\n- Douleur musculaire profonde, puis tuméfaction ferme, indurée (« ligneuse »), peu de signes cutanés\n- Muscles de la cuisse (quadriceps), fesse, psoas, épaule\n- Fièvre ; phase tardive : sepsis\n\n## Examens\n- **Échographie** : collection intramusculaire ; ponction (pus)\n- NFS, CRP, hémocultures, VIH',
    examens: [
      ['confirmation', 'echographie-parties-molles', 'Collection intramusculaire.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'hemocultures', 'S. aureus.'],
      ['premiere_intention', 'tdr-vih', 'Terrain.'],
      ['etiologique', 'radiographie-osseuse', 'Ostéomyélite.'],
    ],
    scores: [],
    differentiels: [
      ['thrombose-veineuse-profonde', 'Œdème, pas de collection.'],
      ['Ostéomyélite', 'Atteinte osseuse.'],
      ['crise-vaso-occlusive-enfant-drepanocytaire', 'Drépanocytaire, douleur sans collection.'],
      ['Sarcome', 'Masse sans fièvre, croissance progressive.'],
    ],
    etiologies:
      '## Facteurs\n- Climat tropical, enfant et adulte jeune, VIH, malnutrition, traumatisme musculaire',
    principes: [
      [
        'Drainage',
        'Évacuer le pus.',
        '- Incision-drainage chirurgical ou ponction écho-guidée\n- Phase invasive sans collection : antibiotiques seuls',
      ],
      [
        'Antibiotiques',
        'Traiter le staphylocoque.',
        '- **Cloxacilline** IV 2 g toutes les 6 h (enfant 50 mg/kg toutes les 6 h) puis relais oral, durée totale 2–3 semaines\n- Allergie ou SARM : **clindamycine** ; immunodéprimé : ajouter une couverture des Gram négatifs (ceftriaxone)',
      ],
      ['Soutien', 'Favoriser la guérison.', '- Antalgiques, nutrition, kinésithérapie'],
    ],
    molecules: [
      ['cloxacilline', 'premiere', 'IV puis oral'],
      ['flucloxacilline', 'alternative', 'Staphylocoque'],
      ['clindamycine', 'alternative', 'Allergie, SARM'],
      ['ceftriaxone', 'adjuvant', 'Immunodéprimé'],
      ['paracetamol', 'premiere', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Phase septique.',
        traitement: '- Réanimation, drainage',
        clinique: '- Hypotension',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Ostéomyélite, arthrite',
        description: 'Extension.',
        traitement: '- Antibiotiques prolongés',
        clinique: '- Douleur osseuse',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Abcès multiples',
        description: 'Dissémination.',
        traitement: '- Drainages',
        clinique: '',
        paraclinique: '- Échographie',
      },
    ],
    evolution: '## Pronostic\n- Excellent si drainé tôt ; mortalité en phase septique',
    urgences: ['choc-septique'],
    symptomes: [
      ['Tuméfaction des parties molles', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Douleurs osseuses', 'frequent'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Repérage, première dose d’antibiotique, transfert', '- Toute suspicion'],
      hgr: ['- Échographie, drainage, cloxacilline IV', ''],
      tert: ['', ''],
    },
    alertes: { 'choc-septique': 'Abcès musculaire avec fièvre élevée et hypotension' },
    formes: [
      {
        nom: 'Pyomyosite de la cuisse',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Enfant, adulte jeune',
        fonctionnels: '- Douleur, boiterie',
        generaux: '- Fièvre',
        physiques: '- Cuisse indurée, chaude',
        paraclinique: '- Collection intramusculaire',
        etiologies: '- S. aureus',
        syndromes: ['syndrome-infectieux'],
        examens: [['echographie-parties-molles', 'Diagnostic']],
      },
      {
        nom: 'Pyomyosite du psoas',
        type: 'topographique',
        description: 'Abcès profond.',
        terrain: '',
        fonctionnels: '- Douleur lombaire, psoïtis (hanche fléchie)',
        generaux: '- Fièvre',
        physiques: '',
        paraclinique: '- Échographie, scanner',
        etiologies: '- S. aureus, tuberculose (diagnostic différentiel)',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Fasciite nécrosante
  {
    ...CG,
    slug: 'fasciite-necrosante',
    nom: 'Fasciite nécrosante',
    resume:
      'Infection nécrosante rapidement extensive des fascias : douleur disproportionnée, œdème, bulles, nécrose cutanée, crépitation, choc ; urgence chirurgicale (débridement large et répété) + antibiotiques larges (pénicilline/ceftriaxone + clindamycine + métronidazole) + réanimation.',
    definition:
      'Infection nécrosante des tissus mous touchant le fascia superficiel et la graisse sous-cutanée, d’extension rapide, monomicrobienne (streptocoque A) ou polymicrobienne ; gangrène de Fournier au périnée.',
    physiopathologie:
      '## Mécanismes\n- Toxines bactériennes, thromboses vasculaires, nécrose\n- Extension le long des fascias plus rapide que les signes cutanés\n- Choc toxique, défaillance multiviscérale\n- Facteurs : diabète, VIH, AINS, plaies, injections, varicelle',
    diagnostic:
      '## Signes d’alerte\n- **Douleur intense disproportionnée** par rapport à l’aspect cutané\n- Œdème dur dépassant l’érythème, bulles hémorragiques, nécrose, **crépitation**, hypoesthésie\n- Fièvre ou hypothermie, **choc**, confusion\n\n## Diagnostic\n- **Exploration chirurgicale** (fascia grisâtre, liquide « eau de vaisselle », absence de résistance) : ne pas retarder pour l’imagerie',
    examens: [
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Très élevée.'],
      ['gravite', 'lactates', 'Choc.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'hemocultures', 'Germe.'],
      ['deuxieme_intention', 'radiographie-osseuse', 'Gaz dans les tissus.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['erysipele-et-cellulite', 'Placard sans nécrose ni douleur disproportionnée.'],
      ['abces-phlegmons-parties-molles', 'Collection limitée.'],
      ['thrombose-veineuse-profonde', 'Œdème sans signes infectieux.'],
      ['Gangrène gazeuse (myonécrose)', 'Atteinte musculaire, plaie souillée.'],
    ],
    etiologies:
      '## Germes\n- *Streptococcus pyogenes* (type II)\n- Polymicrobienne : anaérobies, entérobactéries (type I, diabète, périnée)\n- *Clostridium* (gangrène gazeuse)',
    principes: [
      [
        'Chirurgie urgente',
        'Exciser la nécrose.',
        '- **Débridement large** de tous les tissus nécrosés dans les heures suivant le diagnostic\n- Reprises toutes les 24–48 h jusqu’à tissus sains ; amputation si nécessaire\n- Couverture secondaire (greffe)',
      ],
      [
        'Antibiotiques',
        'Traiter l’infection.',
        '- **Benzylpénicilline** ou **ceftriaxone** + **clindamycine** (inhibe les toxines) + **métronidazole**\n- Adapter aux prélèvements peropératoires',
      ],
      [
        'Réanimation',
        'Soutenir les organes.',
        '- Remplissage, noradrénaline, transfusion, nutrition, prévention du tétanos\n- **Pas d’AINS**',
      ],
    ],
    molecules: [
      ['clindamycine', 'premiere', 'Antitoxinique'],
      ['benzylpenicilline-penicilline-g', 'premiere', 'Streptocoque'],
      ['ceftriaxone', 'premiere', 'Formes polymicrobiennes'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['ringer-lactate', 'premiere', 'Réanimation'],
      ['noradrenaline', 'deuxieme', 'Choc'],
      ['morphine', 'premiere', 'Douleur'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Prévention du tétanos'],
    ],
    complications: [
      {
        nom: 'Choc toxique et défaillance multiviscérale',
        fiche: 'sepsis-et-choc-septique',
        description: 'Toxines.',
        traitement: '- Réanimation, chirurgie',
        clinique: '- Choc, confusion',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Amputation',
        description: 'Nécrose étendue.',
        traitement: '- Chirurgie',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Choc, rhabdomyolyse.',
        traitement: '- Réanimation',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution: '## Pronostic\n- Mortalité de 20 à 30 %, liée au délai chirurgical',
    urgences: ['choc-septique'],
    symptomes: [
      ['Tuméfaction des parties molles', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Hypotension', 'frequent'],
      ['Bulles cutanées', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'WSES — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Reconnaître (douleur disproportionnée), antibiotiques, transfert immédiat',
        '- Toute suspicion',
      ],
      hgr: ['- Débridement chirurgical, réanimation', ''],
      tert: ['- Réanimation, chirurgie plastique', ''],
    },
    alertes: { 'choc-septique': 'Douleur intense d’un membre avec bulles, nécrose ou hypotension' },
    formes: [
      {
        nom: 'Fasciite nécrosante d’un membre',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Plaie, injection, diabète',
        fonctionnels: '- Douleur intense',
        generaux: '- Fièvre',
        physiques: '- Œdème dur, bulles, nécrose',
        paraclinique: '- CRP très élevée',
        etiologies: '- Streptocoque A, polymicrobienne',
        syndromes: ['syndrome-de-reponse-inflammatoire-systemique'],
      },
      {
        nom: 'Gangrène de Fournier',
        type: 'topographique',
        description: 'Périnée.',
        terrain: '- Homme diabétique, VIH',
        fonctionnels: '- Douleur scrotale',
        generaux: '- Choc',
        physiques: '- Nécrose scrotale et périnéale',
        paraclinique: '',
        etiologies: '- Polymicrobienne',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Plaies et sutures
  {
    ...CG,
    slug: 'plaies-et-sutures',
    nom: 'Plaies et sutures',
    resume:
      'Évaluer (profondeur, tendons, nerfs, vaisseaux, corps étrangers), laver abondamment, parer ; suture primaire si plaie propre < 6–12 h (24 h au visage) ; plaies souillées, anciennes, morsures, plaies par balle : pas de suture primaire (suture différée) ; prévention du tétanos.',
    definition:
      'Effraction cutanée traumatique ; la prise en charge vise à prévenir l’infection et à obtenir une cicatrisation fonctionnelle et esthétique.',
    physiopathologie:
      '## Cicatrisation\n- Première intention (suture) : plaies propres et récentes\n- Deuxième intention (cicatrisation dirigée) : plaies souillées, pertes de substance\n- Suture primaire différée (J3–J5) : plaies contaminées après parage\n- Risque infectieux : souillure, délai, tissus dévitalisés, corps étrangers',
    diagnostic:
      '## Évaluation\n- Mécanisme, délai, souillure, statut vaccinal antitétanique\n- Examen sous bon éclairage : profondeur, **tendons** (mobilité active), **nerfs** (sensibilité), **vaisseaux** (pouls, recoloration), articulation ouverte, fracture\n- Corps étrangers (radiographie si métal, verre)',
    examens: [
      ['deuxieme_intention', 'radiographie-osseuse', 'Fracture, corps étranger radio-opaque.'],
      ['etiologique', 'glycemie', 'Plaie chronique, diabète.'],
    ],
    scores: [],
    differentiels: [],
    etiologies: '## Mécanismes\n- Accidents domestiques et de la route, machettes, verre, violences',
    principes: [
      [
        'Soins de la plaie',
        'Prévenir l’infection.',
        '- Hémostase par compression\n- Anesthésie locale (**lidocaïne** 1 %, maximum 3–4,5 mg/kg ; avec adrénaline sauf extrémités)\n- **Lavage abondant** à l’eau propre ou au sérum, **parage** des tissus dévitalisés, retrait des corps étrangers',
      ],
      [
        'Fermeture',
        'Choisir la bonne méthode.',
        '- Suture primaire : plaie propre de moins de 6–12 h (jusqu’à 24 h au visage et au cuir chevelu)\n- **Pas de suture primaire** : plaies très souillées, anciennes, morsures (sauf visage), plaies par balle ou éclats → pansement, suture différée à J3–J5\n- Fils non résorbables : retrait visage J5, tronc J7–10, membres J10–14',
      ],
      [
        'Mesures associées',
        'Compléter.',
        '- **Prévention du tétanos** (vaccin Td ± immunoglobulines selon le statut et la plaie)\n- Antibiotiques seulement si plaie à risque (morsure, fracture ouverte, plaie très souillée, terrain fragile) : **amoxicilline-acide clavulanique** ou **cloxacilline**\n- Lésions tendineuses, nerveuses ou vasculaires : chirurgie spécialisée',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['chlorhexidine-gluconate', 'premiere', 'Antisepsie de la peau'],
      ['povidone-iodee', 'alternative', 'Antisepsie'],
      ['serum-immunoglobuline-antitetanique', 'premiere', 'Plaie à risque, vaccination incomplète'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Vaccination'],
      ['cloxacilline', 'adjuvant', 'Plaie à risque'],
      ['amoxicilline', 'adjuvant', 'Avec acide clavulanique'],
    ],
    complications: [
      {
        nom: 'Infection de plaie',
        fiche: 'abces-phlegmons-parties-molles',
        description: 'Souillure, suture inadaptée.',
        traitement: '- Ouverture, drainage',
        clinique: '- Rougeur, pus',
        paraclinique: '',
      },
      {
        nom: 'Tétanos',
        fiche: 'tetanos',
        description: 'Absence de vaccination.',
        traitement: '- Prévention',
        clinique: '- Trismus',
        paraclinique: '',
      },
      {
        nom: 'Lésions méconnues',
        description: 'Tendons, nerfs.',
        traitement: '- Réparation secondaire',
        clinique: '- Déficit fonctionnel',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bonne cicatrisation si les principes de base sont respectés',
    urgences: [],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Hémorragies', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Lavage, parage, suture simple, prévention du tétanos',
        '- Lésion tendineuse, nerveuse, vasculaire, plaie étendue',
      ],
      hgr: ['- Chirurgie des plaies complexes', ''],
      tert: ['- Chirurgie de la main, plastique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Plaie simple récente',
        type: 'commune',
        description: 'Suture primaire.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Plaie propre, sans lésion profonde',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Plaie souillée ou ancienne',
        type: 'gravite',
        description: 'Pas de suture primaire.',
        terrain: '- Délai > 12 h, souillure tellurique',
        fonctionnels: '',
        generaux: '',
        physiques: '- Tissus dévitalisés',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Morsures animales
  {
    ...CG,
    slug: 'morsures-animales',
    nom: 'Morsures animales : soins de la plaie',
    resume:
      'Morsures de chien surtout (rage), chat, singe, humaines : lavage immédiat 15 minutes à l’eau et au savon, antisepsie, pas de suture primaire (sauf visage), amoxicilline-acide clavulanique si à risque ; prophylaxie de la rage (vaccin ± immunoglobulines) et du tétanos.',
    definition:
      'Plaies infligées par un animal ou un humain, à haut risque d’infection bactérienne polymicrobienne (*Pasteurella*, staphylocoques, anaérobies) et de transmission de la rage.',
    physiopathologie:
      '## Risques\n- **Rage** (chiens non vaccinés, chats, singes, chauves-souris) : mortelle une fois déclarée\n- Infections (Pasteurella en quelques heures), tétanos\n- Lésions tendineuses, articulaires, osseuses (morsures de la main)',
    diagnostic:
      '## Évaluation\n- Animal (espèce, statut vaccinal, comportement, possibilité d’observation 10 jours), circonstances (provoquée ou non)\n- **Catégorie d’exposition (OMS)** : I (contact sans lésion), II (mordillement, griffure superficielle sans saignement), III (morsure ou griffure transdermique, léchage de muqueuse ou de peau lésée, chauve-souris)\n- Profondeur, localisation (main, visage), signes d’infection',
    examens: [['deuxieme_intention', 'radiographie-osseuse', 'Morsure profonde de la main, fracture.']],
    scores: [],
    differentiels: [],
    etiologies:
      '## Animaux\n- Chiens (première cause et principal vecteur de la rage), chats, singes, rongeurs, humains',
    principes: [
      [
        'Soins locaux immédiats',
        'Réduire le risque de rage et d’infection.',
        '- **Lavage abondant 15 minutes** à l’eau et au savon, puis antiseptique (**povidone iodée**, alcool)\n- Parage ; **pas de suture primaire** (sauf visage, après lavage soigneux), suture différée\n- Immobilisation et surélévation des morsures de la main',
      ],
      [
        'Prophylaxie de la rage',
        'Prévenir une maladie mortelle.',
        '- Catégorie II : **vaccin antirabique** (schéma OMS : J0, J3, J7 intradermique ou IM selon le schéma national)\n- Catégorie III : vaccin + **immunoglobulines antirabiques** infiltrées dans et autour de la plaie\n- Ne jamais retarder ; observation du chien en parallèle (fiche *Rage*)',
      ],
      [
        'Antibiotiques et tétanos',
        'Prévenir les infections.',
        '- **Amoxicilline-acide clavulanique** 3 à 5 jours (prophylaxie si morsure profonde, main, visage, terrain fragile ; traitement 7–10 jours si infection)\n- Allergie : doxycycline + métronidazole\n- **Prévention du tétanos**',
      ],
    ],
    molecules: [
      ['vaccin-antirabique', 'premiere', 'Catégories II et III'],
      ['immunoglobulines-antirabiques', 'premiere', 'Catégorie III'],
      ['amoxicilline', 'premiere', 'Avec acide clavulanique'],
      ['acide-clavulanique', 'premiere', 'Avec amoxicilline'],
      ['doxycycline', 'alternative', 'Allergie'],
      ['povidone-iodee', 'premiere', 'Antisepsie'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Prévention du tétanos'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Vaccination'],
    ],
    complications: [
      {
        nom: 'Rage',
        fiche: 'rage',
        description: 'Absence de prophylaxie.',
        traitement: '- Soins palliatifs (mortelle)',
        clinique: '- Hydrophobie, agitation',
        paraclinique: '',
      },
      {
        nom: 'Infection de la plaie',
        fiche: 'abces-phlegmons-parties-molles',
        description: 'Pasteurella, staphylocoque.',
        traitement: '- Antibiotiques, drainage',
        clinique: '- Rougeur, pus',
        paraclinique: '',
      },
      {
        nom: 'Arthrite, ténosynovite',
        description: 'Morsure de la main.',
        traitement: '- Chirurgie',
        clinique: '- Doigt gonflé',
        paraclinique: '',
      },
      {
        nom: 'Tétanos',
        fiche: 'tetanos',
        description: 'Plaie souillée.',
        traitement: '- Prévention',
        clinique: '- Trismus',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- La prophylaxie post-exposition bien conduite prévient presque toujours la rage',
    urgences: [],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'IDSA — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Lavage, vaccin antirabique, antibiotiques, antitétanique',
        '- Immunoglobulines indisponibles, morsure grave',
      ],
      hgr: ['- Immunoglobulines, chirurgie des plaies', ''],
      tert: ['- Chirurgie plastique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Morsure de chien',
        type: 'commune',
        description: 'Risque rabique.',
        terrain: '- Enfant, chien errant',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Plaie transdermique',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Morsure de la main',
        type: 'gravite',
        description: 'Risque d’infection profonde.',
        terrain: '- Morsure humaine ou de chat',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre',
        physiques: '- Gonflement, limitation',
        paraclinique: '- Radiographie',
        etiologies: '- Pasteurella, anaérobies',
        syndromes: [],
      },
    ],
  },
];
