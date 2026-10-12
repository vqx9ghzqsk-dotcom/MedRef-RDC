'use strict';

/**
 * Lot 27 (ophtalmologie) — conjonctivites de l'adulte, trachome, cataracte, glaucome. Rédigé
 * par IA (OMS, MSF, ouvrages de référence) : à valider.
 */

const OPH = { departement: 'chirurgie', specialite: 'Ophtalmologie' };

module.exports = [
  // =================================================================== Conjonctivites adulte
  {
    ...OPH,
    slug: 'conjonctivites-adulte',
    nom: 'Conjonctivites de l’adulte',
    resume:
      'Œil rouge, sans baisse de vision ni douleur profonde, avec sécrétions : virale (très contagieuse, épidémique), bactérienne (sécrétions purulentes), allergique (prurit) ; hygiène, lavages, antibiotique local si bactérienne (tétracycline, chloramphénicol) ; pas de corticoïde local sans avis ; baisse de vision ou douleur = rechercher kératite, uvéite, glaucome.',
    definition:
      'Inflammation de la conjonctive, d’origine infectieuse (virale, bactérienne, Chlamydia, gonocoque), allergique ou irritative.',
    physiopathologie:
      '## Causes\n- **Virales** : adénovirus, entérovirus (conjonctivite hémorragique épidémique « Apollo »)\n- **Bactériennes** : staphylocoque, pneumocoque, Haemophilus ; **gonocoque** (hyperaiguë, risque de perforation cornéenne) ; Chlamydia (trachome, conjonctivite à inclusions)\n- **Allergiques** : saisonnière, **kératoconjonctivite vernale** (enfant, adolescent)\n- Irritatives : fumée, produits chimiques, corps étranger',
    diagnostic:
      '## Clinique\n- **Œil rouge** (hyperhémie diffuse), sensation de sable, larmoiement\n- **Acuité visuelle normale**, pas de douleur profonde, pupille normale\n- Sécrétions : aqueuses (virale), purulentes (bactérienne), filantes (allergique, prurit)\n- Adénopathie prétragienne (virale)\n- **Signes d’alarme** : baisse de vision, douleur intense, photophobie, cercle périkératique, pupille anormale → kératite, uvéite, glaucome aigu\n\n## Examens\n- Acuité visuelle, test à la fluorescéine\n- Prélèvement (Gram, culture) si purulente sévère ou suspicion de gonocoque',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Normale dans la conjonctivite.'],
      ['deuxieme_intention', 'prelevement-de-gorge', 'Prélèvement conjonctival : Gram, culture (gonocoque).'],
      ['etiologique', 'tdr-vih', 'Conjonctivites récidivantes, zona ophtalmique.'],
    ],
    scores: [],
    differentiels: [
      ['glaucome', 'Douleur intense, baisse de vision, pupille en semi-mydriase.'],
      ['Kératite', 'Douleur, photophobie, ulcère prenant la fluorescéine.'],
      ['Uvéite antérieure', 'Cercle périkératique, myosis, baisse de vision.'],
      ['Hémorragie sous-conjonctivale', 'Nappe rouge sombre, sans sécrétions.'],
      ['trachome', 'Follicules, cicatrices, trichiasis.'],
    ],
    etiologies:
      '## Contexte\n- Épidémies (saison des pluies), promiscuité, manque d’eau, IST (gonocoque, Chlamydia)',
    principes: [
      [
        'Mesures générales',
        'Limiter la contagion.',
        '- Lavage des mains, linge personnel, **lavages oculaires** au sérum physiologique\n- Pas de remèdes traditionnels dans l’œil, pas de corticoïde local sans examen ophtalmologique',
      ],
      [
        'Conjonctivite bactérienne',
        'Traiter l’infection.',
        '- **Tétracycline pommade 1 %** ou **chloramphénicol collyre** 5–7 jours\n- **Gonococcique** : **ceftriaxone** IM dose unique + lavages fréquents + traitement du partenaire',
      ],
      [
        'Conjonctivite virale et allergique',
        'Soulager.',
        '- Virale : lavages, compresses froides, évolution spontanée en 1–3 semaines\n- Allergique : éviction, **cromoglicate**, **olopatadine** ou **kétotifène** collyre ; corticoïde local seulement sous surveillance ophtalmologique',
      ],
    ],
    molecules: [
      ['tetracycline', 'premiere', 'Pommade ophtalmique 1 %'],
      ['chloramphenicol', 'alternative', 'Collyre'],
      ['tobramycine-ophtalmique', 'alternative', 'Collyre'],
      ['ceftriaxone', 'premiere', 'Conjonctivite gonococcique'],
      ['azithromycine', 'alternative', 'Chlamydia'],
      ['cromoglicate-de-sodium', 'premiere', 'Conjonctivite allergique'],
      ['olopatadine', 'alternative', 'Conjonctivite allergique'],
      ['ketotifene', 'alternative', 'Conjonctivite allergique'],
    ],
    complications: [
      {
        nom: 'Kératite et ulcère cornéen',
        description: 'Gonocoque, remèdes traditionnels, corticoïdes.',
        traitement: '- Antibiotiques locaux intensifs, avis ophtalmologique',
        clinique: '- Douleur, baisse de vision',
        paraclinique: '- Test à la fluorescéine',
      },
      {
        nom: 'Perforation cornéenne',
        description: 'Conjonctivite gonococcique.',
        traitement: '- Chirurgie',
        clinique: '- Perte de vision',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Favorable en 1 à 2 semaines ; gravité des formes gonococciques',
    urgences: [],
    symptomes: [
      ['Yeux rouges', 'tres_frequent'],
      ['Sécrétions oculaires', 'tres_frequent'],
      ['Prurit', 'frequent'],
      ['Photophobie', 'occasionnel'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Lavages, tétracycline, hygiène',
        '- Baisse de vision, douleur, sécrétions purulentes abondantes',
      ],
      hgr: ['- Prélèvement, ceftriaxone', ''],
      tert: ['- Ophtalmologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Conjonctivite virale',
        type: 'commune',
        description: 'Épidémique.',
        terrain: '- Tout âge',
        fonctionnels: '- Sensation de sable, larmoiement',
        generaux: '',
        physiques: '- Œil rouge, sécrétions claires, adénopathie prétragienne',
        paraclinique: '',
        etiologies: '- Adénovirus, entérovirus',
        syndromes: [],
      },
      {
        nom: 'Conjonctivite bactérienne',
        type: 'etiologique',
        description: 'Sécrétions purulentes.',
        terrain: '',
        fonctionnels: '- Paupières collées le matin',
        generaux: '',
        physiques: '- Sécrétions purulentes',
        paraclinique: '- Gram',
        etiologies: '- Staphylocoque, pneumocoque',
        syndromes: [],
      },
      {
        nom: 'Conjonctivite gonococcique',
        type: 'gravite',
        description: 'Hyperaiguë.',
        terrain: '- Adulte jeune, IST',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Pus abondant, chémosis',
        paraclinique: '- Diplocoques Gram négatif',
        etiologies: '- Neisseria gonorrhoeae',
        syndromes: [],
      },
      {
        nom: 'Conjonctivite allergique',
        type: 'etiologique',
        description: 'Prurit.',
        terrain: '- Atopie',
        fonctionnels: '- Prurit intense',
        generaux: '',
        physiques: '- Sécrétions filantes, papilles',
        paraclinique: '',
        etiologies: '- Allergie',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Trachome
  {
    ...OPH,
    slug: 'trachome',
    nom: 'Trachome',
    resume:
      'Kératoconjonctivite chronique à Chlamydia trachomatis, endémique dans certaines zones de RDC, première cause infectieuse de cécité : infections répétées dans l’enfance, cicatrices, trichiasis chez l’adulte (surtout la femme), opacités cornéennes ; stratégie CHANCE (SAFE) : chirurgie du trichiasis, azithromycine de masse, propreté du visage, assainissement.',
    definition:
      'Conjonctivite folliculaire chronique due à Chlamydia trachomatis (sérotypes A à C), dont les réinfections répétées entraînent une cicatrisation de la conjonctive tarsienne, un entropion-trichiasis et une cécité cornéenne.',
    physiopathologie:
      '## Transmission\n- Contact (mains, linge), **mouches**, promiscuité, manque d’eau et d’assainissement\n\n## Évolution\n- Enfant : inflammation folliculaire active (réservoir)\n- Adulte : **cicatrices** tarsiennes → rétraction de la paupière → **trichiasis** (cils frottant sur la cornée) → **opacités cornéennes**, cécité\n- Femmes plus touchées (contact avec les enfants)',
    diagnostic:
      '## Classification simplifiée de l’OMS (éversion de la paupière supérieure)\n- **TF** : inflammation trachomateuse folliculaire (≥ 5 follicules)\n- **TI** : inflammation trachomateuse intense\n- **TS** : cicatrices conjonctivales\n- **TT** : trichiasis trachomateux (au moins un cil frottant le globe)\n- **CO** : opacité cornéenne\n\n## Examens\n- Diagnostic clinique ; acuité visuelle ; PCR pour les enquêtes',
    examens: [['premiere_intention', 'acuite-visuelle', 'Retentissement visuel.']],
    scores: [],
    differentiels: [
      ['trachome-enfant', 'Formes actives de l’enfant (fiche pédiatrique).'],
      ['conjonctivites-adulte', 'Conjonctivite aiguë sans cicatrices.'],
      ['Trichiasis non trachomateux', 'Traumatisme, brûlures, Stevens-Johnson.'],
      ['carence-en-vitamine-a', 'Xérose, taches de Bitot, enfant.'],
    ],
    etiologies:
      '## Facteurs\n- Zones rurales sèches, manque d’eau, mouches, promiscuité, enfants au visage sale',
    principes: [
      [
        'C — Chirurgie',
        'Prévenir la cécité.',
        '- **Chirurgie du trichiasis** (rotation tarsale bilamellaire) par un opérateur formé\n- En attente : épilation des cils, suivi',
      ],
      [
        'A — Antibiotiques',
        'Éliminer le réservoir.',
        '- **Azithromycine** dose unique (20 mg/kg, max 1 g) : traitement individuel et **distribution de masse** annuelle en zone d’endémie (dès que TF ≥ 5 % chez les 1–9 ans ; nombre de tournées selon la prévalence)\n- Alternative : **tétracycline pommade 1 %** 2 fois par jour pendant 6 semaines',
      ],
      [
        'N et CE — Hygiène et environnement',
        'Interrompre la transmission.',
        '- Lavage du visage des enfants, accès à l’eau, latrines, élimination des déchets (mouches)',
      ],
    ],
    molecules: [
      ['azithromycine', 'premiere', 'Dose unique ; distribution de masse'],
      ['tetracycline', 'alternative', 'Pommade ophtalmique 1 %, 6 semaines'],
      ['lidocaine', 'adjuvant', 'Chirurgie du trichiasis'],
    ],
    complications: [
      {
        nom: 'Trichiasis et entropion',
        description: 'Cicatrices tarsiennes.',
        traitement: '- Chirurgie',
        clinique: '- Douleur, larmoiement',
        paraclinique: '',
      },
      {
        nom: 'Opacités cornéennes et cécité',
        description: 'Frottement chronique.',
        traitement: '- Prévention ; greffe rarement accessible',
        clinique: '- Baisse de vision',
        paraclinique: '- Acuité visuelle',
      },
    ],
    evolution:
      '## Pronostic\n- Cécité irréversible si trichiasis non opéré ; élimination possible par la stratégie CHANCE',
    urgences: [],
    symptomes: [
      ['Trichiasis', 'frequent'],
      ['Yeux rouges', 'frequent'],
      ['Sécrétions oculaires', 'frequent'],
      ['Troubles visuels', 'frequent'],
      ['Douleur oculaire', 'frequent'],
      ['Photophobie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'WHO Model List of Essential Medicines',
    ],
    niveaux: {
      cs: ['- Dépistage, azithromycine, éducation, épilation', '- Trichiasis, baisse de vision'],
      hgr: ['- Chirurgie du trichiasis', ''],
      tert: ['- Ophtalmologie, chirurgie cornéenne', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Trichiasis trachomateux de l’adulte',
        type: 'commune',
        description: 'Stade cicatriciel.',
        terrain: '- Femme adulte en zone d’endémie',
        fonctionnels: '- Douleur, larmoiement, photophobie',
        generaux: '',
        physiques: '- Cils frottant le globe, cicatrices tarsiennes',
        paraclinique: '',
        etiologies: '- Chlamydia trachomatis',
        syndromes: [],
      },
      {
        nom: 'Trachome actif',
        type: 'evolutive',
        description: 'Inflammation folliculaire.',
        terrain: '- Enfant, contacts',
        fonctionnels: '- Sécrétions, gêne',
        generaux: '',
        physiques: '- Follicules tarsiens (TF), inflammation intense (TI)',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Opacité cornéenne',
        type: 'gravite',
        description: 'Stade de cécité.',
        terrain: '- Adulte âgé',
        fonctionnels: '- Baisse de vision',
        generaux: '',
        physiques: '- Cornée opaque',
        paraclinique: '- Acuité visuelle effondrée',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cataracte
  {
    ...OPH,
    slug: 'cataracte',
    nom: 'Cataracte',
    resume:
      'Opacification du cristallin, première cause de cécité en Afrique, surtout liée à l’âge : baisse de vision progressive indolore, pupille blanche ; seul traitement : chirurgie (extraction extracapsulaire manuelle à petite incision avec implant), simple et peu coûteuse ; dépister la cataracte congénitale de l’enfant.',
    definition: 'Perte de transparence du cristallin entraînant une baisse progressive de l’acuité visuelle.',
    physiopathologie:
      '## Causes\n- **Liée à l’âge** (> 50 ans) : la plus fréquente\n- Diabète, **corticoïdes** au long cours, traumatismes, uvéites, exposition aux ultraviolets\n- **Congénitale** : rubéole maternelle, génétique ; risque d’amblyopie définitive',
    diagnostic:
      '## Clinique\n- **Baisse de vision progressive, indolore**, éblouissement, vision floue, myopie d’indice\n- **Pupille blanche** (leucocorie) aux stades avancés, perte du reflet rouge\n- Œil calme\n\n## Examens\n- **Acuité visuelle**, examen à la lampe à fente\n- Tonométrie, fond d’œil (si visible) ou échographie oculaire\n- Glycémie, tension artérielle avant chirurgie',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Baisse de vision.'],
      ['premiere_intention', 'tonometrie', 'Glaucome associé.'],
      ['deuxieme_intention', 'fond-d-oeil', 'Rétinopathie associée.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
    ],
    scores: [],
    differentiels: [
      ['glaucome', 'Baisse du champ visuel, pression intraoculaire élevée, papille excavée.'],
      ['Rétinopathie diabétique ou hypertensive', 'Fond d’œil anormal.'],
      ['Rétinoblastome', 'Leucocorie de l’enfant : urgence oncologique.'],
      ['trachome', 'Opacités cornéennes, trichiasis.'],
      ['Troubles de la réfraction', 'Amélioration avec un trou sténopéique.'],
    ],
    etiologies: '## Facteurs de risque\n- Âge, diabète, corticoïdes, ultraviolets, tabac, traumatismes',
    principes: [
      [
        'Chirurgie',
        'Restaurer la vision.',
        '- **Extraction extracapsulaire manuelle à petite incision (MSICS)** avec implant intraoculaire : technique de choix en Afrique\n- Phacoémulsification dans les centres équipés\n- Indication : gêne visuelle ; urgence si cataracte congénitale bilatérale (chirurgie avant 6–8 semaines)',
      ],
      [
        'Soins postopératoires',
        'Prévenir l’infection et l’inflammation.',
        '- Collyres antibiotique et corticoïde 4 semaines, protection de l’œil\n- Correction optique (lunettes) ; dépister l’opacification capsulaire secondaire',
      ],
      [
        'Programmes',
        'Réduire la cécité évitable.',
        '- Campagnes chirurgicales, dépistage communautaire, accessibilité financière',
      ],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Collyre postopératoire'],
      ['tobramycine-ophtalmique', 'premiere', 'Collyre postopératoire'],
      ['tropicamide-collyre', 'adjuvant', 'Dilatation pupillaire'],
      ['lidocaine', 'premiere', 'Anesthésie locorégionale'],
      ['povidone-iodee', 'premiere', 'Antisepsie préopératoire'],
    ],
    complications: [
      {
        nom: 'Cécité',
        description: 'Cataracte bilatérale non opérée.',
        traitement: '- Chirurgie',
        clinique: '- Perception lumineuse seule',
        paraclinique: '- Acuité visuelle',
      },
      {
        nom: 'Endophtalmie postopératoire',
        description: 'Infection intraoculaire.',
        traitement: '- Antibiotiques intravitréens, urgence',
        clinique: '- Douleur, baisse de vision',
        paraclinique: '',
      },
      {
        nom: 'Glaucome phacomorphique',
        fiche: 'glaucome',
        description: 'Cataracte intumescente.',
        traitement: '- Hypotonisants, chirurgie',
        clinique: '- Œil rouge douloureux',
        paraclinique: '- Tonométrie',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération visuelle excellente après chirurgie (sauf amblyopie de l’enfant opéré tard)',
    urgences: [],
    symptomes: [['Troubles visuels', 'tres_frequent']],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Acuité visuelle, dépistage, orientation', '- Baisse de vision, leucocorie de l’enfant'],
      hgr: ['- Chirurgie MSICS (ophtalmologiste)', ''],
      tert: ['- Phacoémulsification, cataracte de l’enfant', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Cataracte liée à l’âge',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Adulte > 50 ans',
        fonctionnels: '- Baisse de vision progressive',
        generaux: '',
        physiques: '- Opacité du cristallin, pupille blanche',
        paraclinique: '- Acuité visuelle basse',
        etiologies: '- Vieillissement',
        syndromes: [],
        examens: [['acuite-visuelle', 'Baisse']],
      },
      {
        nom: 'Cataracte congénitale',
        type: 'terrain',
        description: 'Urgence de l’enfant.',
        terrain: '- Nouveau-né, nourrisson',
        fonctionnels: '- Défaut de fixation',
        generaux: '',
        physiques: '- Leucocorie, nystagmus',
        paraclinique: '',
        etiologies: '- Rubéole congénitale, génétique',
        syndromes: [],
      },
      {
        nom: 'Cataracte traumatique ou secondaire',
        type: 'etiologique',
        description: 'Traumatisme, diabète, corticoïdes.',
        terrain: '',
        fonctionnels: '- Baisse de vision',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Traumatisme, diabète, corticoïdes',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Glaucome
  {
    ...OPH,
    slug: 'glaucome',
    nom: 'Glaucome',
    resume:
      'Neuropathie optique avec atteinte du champ visuel, souvent liée à une pression intraoculaire élevée ; glaucome chronique à angle ouvert fréquent et précoce chez les sujets d’origine africaine, silencieux jusqu’à la cécité : dépister après 40 ans ; collyres (timolol, latanoprost), trabéculectomie ; crise aiguë par fermeture de l’angle = urgence (acétazolamide, pilocarpine, mannitol, iridotomie).',
    definition:
      'Groupe de neuropathies optiques progressives caractérisées par une excavation de la papille et une perte du champ visuel, dont le principal facteur de risque modifiable est la pression intraoculaire.',
    physiopathologie:
      '## Formes\n- **Glaucome primitif à angle ouvert** : obstacle à l’évacuation de l’humeur aqueuse au niveau du trabéculum ; évolution lente et indolore\n- **Glaucome aigu par fermeture de l’angle** : blocage pupillaire brutal, hypertonie majeure\n- **Secondaires** : corticoïdes, uvéite, traumatisme, cataracte intumescente, néovasculaire (diabète)\n- Congénital (buphtalmie)\n\n## Facteurs\n- Origine africaine (plus précoce et plus sévère), âge > 40 ans, antécédents familiaux, myopie, diabète',
    diagnostic:
      '## Glaucome chronique\n- **Asymptomatique** jusqu’à un stade avancé ; rétrécissement du champ visuel périphérique (vision « en canon de fusil »)\n- **Tonométrie** > 21 mmHg, **excavation papillaire** au fond d’œil, champ visuel\n\n## Crise aiguë\n- **Œil rouge très douloureux**, **baisse brutale de vision**, halos colorés, céphalées, **vomissements**\n- Cornée trouble, **pupille en semi-mydriase aréactive**, œil dur au toucher, pression > 40 mmHg',
    examens: [
      ['confirmation', 'tonometrie', 'Pression intraoculaire élevée.'],
      ['confirmation', 'fond-d-oeil', 'Excavation papillaire.'],
      ['premiere_intention', 'acuite-visuelle', 'Retentissement.'],
      ['premiere_intention', 'glycemie', 'Diabète (glaucome néovasculaire).'],
    ],
    scores: [],
    differentiels: [
      ['conjonctivites-adulte', 'Œil rouge sans baisse de vision ni douleur profonde.'],
      ['Uvéite antérieure aiguë', 'Myosis, pression souvent normale ou basse.'],
      ['Kératite', 'Ulcère prenant la fluorescéine.'],
      ['cataracte', 'Opacité du cristallin, pression normale.'],
      ['Migraine', 'Céphalées sans œil rouge (crise aiguë trompeuse avec vomissements).'],
    ],
    etiologies:
      '## Terrain\n- Adulte d’origine africaine > 40 ans, antécédents familiaux, corticothérapie, diabète, hypermétropie (fermeture de l’angle)',
    principes: [
      [
        'Glaucome chronique',
        'Abaisser la pression et préserver la vision.',
        '- Collyres à vie : **timolol** 0,5 % 2 fois/j, **latanoprost** 1 fois/j le soir ; association avec dorzolamide ou brimonidine\n- **Trabéculectomie** si échec, mauvaise observance ou glaucome évolué (souvent préférée en Afrique)\n- Observance, suivi régulier (pression, papille, champ visuel), dépistage familial',
      ],
      [
        'Crise aiguë par fermeture de l’angle',
        'Urgence : sauver la vision.',
        '- **Acétazolamide** 500 mg IV ou per os, puis 250 mg toutes les 6 heures\n- **Mannitol** 20 % 1–2 g/kg IV en 30–45 min si pression très élevée\n- **Timolol** collyre puis **pilocarpine** 2 % une fois la pression abaissée\n- Antalgiques, antiémétiques\n- **Iridotomie** au laser ou iridectomie chirurgicale des deux yeux',
      ],
    ],
    molecules: [
      ['timolol-collyre', 'premiere', 'Bêtabloquant collyre'],
      ['latanoprost-collyre', 'premiere', 'Prostaglandine collyre'],
      ['dorzolamide-collyre', 'alternative', 'Association'],
      ['brimonidine-collyre', 'alternative', 'Association'],
      ['acetazolamide', 'premiere', 'Crise aiguë'],
      ['mannitol', 'premiere', 'Crise aiguë'],
      ['pilocarpine', 'premiere', 'Crise aiguë par fermeture de l’angle'],
      ['metoclopramide', 'adjuvant', 'Vomissements'],
    ],
    complications: [
      {
        nom: 'Cécité irréversible',
        description: 'Glaucome non traité ou découvert tard.',
        traitement: '- Aucun ; prévention par le dépistage',
        clinique: '- Perte du champ visuel puis de la vision centrale',
        paraclinique: '- Papille totalement excavée',
      },
      {
        nom: 'Atteinte de l’œil adelphe',
        description: 'Fermeture de l’angle.',
        traitement: '- Iridotomie préventive',
        clinique: '- Crise controlatérale',
        paraclinique: '- Gonioscopie',
      },
    ],
    evolution: '## Pronostic\n- Perte visuelle irréversible mais évitable par un traitement précoce et suivi',
    urgences: [],
    symptomes: [
      ['Troubles visuels', 'tres_frequent'],
      ['Douleur oculaire', 'frequent'],
      ['Yeux rouges', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Dépistage (acuité, tonométrie si disponible), orientation',
        '- Œil rouge douloureux avec baisse de vision : urgence',
      ],
      hgr: ['- Collyres, acétazolamide, trabéculectomie', ''],
      tert: ['- Laser, chirurgie filtrante, glaucome congénital', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Glaucome primitif à angle ouvert',
        type: 'commune',
        description: 'Chronique, silencieux.',
        terrain: '- Adulte d’origine africaine > 40 ans',
        fonctionnels: '- Aucun au début, rétrécissement du champ visuel',
        generaux: '',
        physiques: '- Excavation papillaire',
        paraclinique: '- Pression > 21 mmHg',
        etiologies: '',
        syndromes: [],
        examens: [['tonometrie', 'Hypertonie']],
      },
      {
        nom: 'Crise de glaucome aigu par fermeture de l’angle',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Hypermétrope, femme âgée',
        fonctionnels: '- Douleur oculaire intense, halos, baisse de vision',
        generaux: '- Vomissements, céphalées',
        physiques: '- Œil rouge, cornée trouble, semi-mydriase aréactive',
        paraclinique: '- Pression > 40 mmHg',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Glaucome cortisonique',
        type: 'etiologique',
        description: 'Collyres corticoïdes au long cours.',
        terrain: '- Automédication par collyres',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Hypertonie',
        etiologies: '- Corticoïdes',
        syndromes: [],
      },
    ],
  },
];
