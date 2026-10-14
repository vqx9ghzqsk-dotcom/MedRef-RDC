'use strict';

/**
 * Lot 60 (phase 2, chirurgie viscérale et générale) — goitre et nodules thyroïdiens (chirurgie),
 * gangrène de Fournier, lipomes et kystes sébacés, ulcères chroniques de jambe. Rédigé par IA
 * (Sabiston, OMS, Guide clinique et thérapeutique) : à valider.
 */

const VISC = { departement: 'chirurgie', specialite: 'Chirurgie viscérale' };
const CG = { departement: 'chirurgie', specialite: 'Chirurgie générale' };

module.exports = [
  // =================================================================== Goitre chirurgie
  {
    ...VISC,
    slug: 'goitre-nodules-thyroidiens-chirurgie',
    nom: 'Goitre et nodules thyroïdiens (chirurgie)',
    resume:
      'Goitres très fréquents en RDC (carence iodée, Kivu, Ituri), souvent volumineux et multinodulaires : indications chirurgicales = signes de compression (dyspnée, dysphagie, dysphonie, stridor), goitre plongeant, nodule suspect de cancer (croissance rapide, dureté, adénopathie, paralysie récurrentielle, cytoponction suspecte), hyperthyroïdie non contrôlée (Basedow, goitre toxique), gêne esthétique ; bilan : TSH, échographie, cytoponction, radiographie thoracique (déviation trachéale), examen des cordes vocales ; préparation (euthyroïdie, iode de Lugol pour le Basedow) ; thyroïdectomie totale ou lobectomie ; complications : hypocalcémie (parathyroïdes), paralysie récurrentielle, hématome compressif (urgence), hypothyroïdie (lévothyroxine).',
    definition:
      'Prise en charge chirurgicale des augmentations de volume de la thyroïde (goitres diffus ou multinodulaires) et des nodules thyroïdiens suspects ou compressifs.',
    physiopathologie:
      '## Causes de goitre\n- **Carence iodée** (goitre endémique), thyroïdites, **maladie de Basedow**, goitre multinodulaire toxique, cancers (papillaire, folliculaire, médullaire, anaplasique), goitrogènes (manioc)\n\n## Complications\n- **Compression** de la trachée et de l’œsophage, goitre plongeant médiastinal\n- Hyperthyroïdie (nodule toxique), cancer',
    diagnostic:
      '## Clinique\n- Tuméfaction cervicale mobile à la déglutition, taille, consistance, nodules\n- **Signes de compression** : dyspnée, stridor, dysphagie, **dysphonie** (nerf récurrent), turgescence veineuse\n- **Signes de malignité** : nodule dur, croissance rapide, fixé, adénopathies cervicales, dysphonie, antécédent d’irradiation\n- Signes d’hyper- ou d’hypothyroïdie\n\n## Examens\n- **TSH** (± T4 libre), **échographie thyroïdienne** (classification TI-RADS), **cytoponction** des nodules suspects\n- Radiographie thoracique et du cou (déviation trachéale, goitre plongeant), scanner si plongeant\n- **Laryngoscopie** (mobilité des cordes vocales) avant et après chirurgie, calcémie',
    examens: [
      ['premiere_intention', 'tsh', 'Fonction thyroïdienne.'],
      ['premiere_intention', 'echographie-thyroidienne', 'Nodules, TI-RADS.'],
      ['confirmation', 'cytoponction-thyroidienne', 'Nodule suspect.'],
      ['premiere_intention', 't4-libre', 'Hyperthyroïdie.'],
      ['gravite', 'radiographie-thoracique', 'Déviation trachéale, goitre plongeant.'],
      ['deuxieme_intention', 'scanner-cervico-facial', 'Goitre plongeant.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Avant et après chirurgie.'],
    ],
    scores: [],
    differentiels: [
      ['goitre-et-carence-iodee', 'Fiche médicale.'],
      ['hyperthyroidie-basedow', 'Goitre diffus avec hyperthyroïdie.'],
      ['adenopathies-superficielles-demarche', 'Adénopathie cervicale.'],
      ['Kyste du tractus thyréoglosse', 'Masse médiane mobile à la protraction de la langue.'],
      ['Lymphome cervical', 'Masses ganglionnaires.'],
    ],
    etiologies: '## Causes\n- Carence iodée, Basedow, goitre multinodulaire, cancers thyroïdiens',
    principes: [
      [
        'Préparation',
        'Opérer en euthyroïdie.',
        '- Hyperthyroïdie : **carbimazole** (ou propylthiouracile) jusqu’à l’euthyroïdie, **propranolol** ; **iode de Lugol** 7–10 jours avant une thyroïdectomie pour Basedow\n- Laryngoscopie préopératoire, consentement (risques)',
      ],
      [
        'Chirurgie',
        'Selon l’indication.',
        '- **Thyroïdectomie totale** : goitre multinodulaire, Basedow, cancer\n- **Lobo-isthmectomie** : nodule unilatéral (bénin ou carcinome papillaire de bas risque)\n- Repérage des **nerfs récurrents** et des **parathyroïdes**, hémostase soigneuse\n- Goitre plongeant : voie cervicale le plus souvent, sternotomie rare',
      ],
      [
        'Après la chirurgie',
        'Surveiller.',
        '- **Hématome compressif** (dyspnée, gonflement) : réouverture immédiate de la plaie au lit puis bloc\n- **Calcémie** à 24–48 h : **calcium** ± **calcitriol** si hypocalcémie (fourmillements, Chvostek)\n- **Lévothyroxine** après thyroïdectomie totale ; histologie ; cancer : iode radioactif en centre spécialisé',
      ],
    ],
    molecules: [
      ['levothyroxine', 'premiere', 'Après thyroïdectomie totale'],
      ['carbimazole', 'premiere', 'Préparation (hyperthyroïdie)'],
      ['propylthiouracile', 'alternative', 'Préparation (hyperthyroïdie)'],
      ['iode', 'alternative', 'Iode de Lugol avant chirurgie du Basedow'],
      ['calcium', 'premiere', 'Hypocalcémie postopératoire'],
      ['calcitriol', 'alternative', 'Hypocalcémie postopératoire'],
      ['gluconate-de-calcium', 'alternative', 'Hypocalcémie sévère IV'],
      ['propranolol', 'adjuvant', 'Hyperthyroïdie'],
    ],
    complications: [
      {
        nom: 'Hématome cervical compressif',
        description: 'Saignement postopératoire.',
        traitement: '- Réouverture immédiate',
        clinique: '- Dyspnée, gonflement du cou',
        paraclinique: '',
      },
      {
        nom: 'Hypocalcémie',
        description: 'Lésion des parathyroïdes.',
        traitement: '- Calcium, calcitriol',
        clinique: '- Fourmillements, tétanie',
        paraclinique: '- Calcémie',
      },
      {
        nom: 'Paralysie récurrentielle',
        description: 'Lésion du nerf récurrent.',
        traitement: '- Orthophonie, trachéotomie si bilatérale',
        clinique: '- Dysphonie, dyspnée',
        paraclinique: '- Laryngoscopie',
      },
      {
        nom: 'Crise aiguë thyrotoxique',
        fiche: 'hyperthyroidie-basedow',
        description: 'Chirurgie en hyperthyroïdie.',
        traitement: '- Antithyroïdiens, bêtabloquants, corticoïdes',
        clinique: '- Fièvre, tachycardie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon après chirurgie bien préparée ; cancers différenciés de très bon pronostic',
    urgences: [],
    symptomes: [
      ['Tuméfaction cervicale', 'tres_frequent'],
      ['Dysphagie', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Dysphonie', 'occasionnel'],
      ['Palpitations', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Repérer les signes de compression et de malignité, sel iodé, orientation',
        '- Dyspnée, dysphonie, nodule dur',
      ],
      hgr: ['- TSH, échographie, thyroïdectomie', ''],
      tert: ['- Cytoponction, cancers, iode radioactif', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Goitre multinodulaire compressif',
        type: 'commune',
        description: 'Carence iodée.',
        terrain: '- Zone d’endémie, femme',
        fonctionnels: '- Dyspnée, dysphagie',
        generaux: '',
        physiques: '- Goitre volumineux',
        paraclinique: '- Déviation trachéale',
        etiologies: '- Carence iodée',
        syndromes: [],
      },
      {
        nom: 'Nodule suspect de cancer',
        type: 'gravite',
        description: 'Cytoponction suspecte.',
        terrain: '',
        fonctionnels: '- Dysphonie',
        generaux: '',
        physiques: '- Nodule dur, adénopathie',
        paraclinique: '- TI-RADS 5, Bethesda V–VI',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Goitre toxique',
        type: 'etiologique',
        description: 'Hyperthyroïdie.',
        terrain: '',
        fonctionnels: '- Palpitations',
        generaux: '- Amaigrissement',
        physiques: '- Tremblements',
        paraclinique: '- TSH effondrée',
        etiologies: '- Basedow, goitre toxique',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Gangrène de Fournier
  {
    ...CG,
    slug: 'gangrene-de-fournier',
    nom: 'Gangrène de Fournier',
    resume:
      'Fasciite nécrosante du périnée et des organes génitaux externes (surtout chez l’homme), urgence vitale : point de départ urinaire (sténose urétrale, sondage), ano-rectal (abcès, fistule) ou cutané, terrain diabétique, VIH, alcoolisme, malnutrition ; douleur et œdème du scrotum ou du périnée, puis nécrose noirâtre, crépitation, odeur fétide, sepsis ; diagnostic clinique ; réanimation, antibiotiques IV à large spectre (pipéracilline-tazobactam ou ceftriaxone + métronidazole + clindamycine), débridement chirurgical large et répété en urgence, dérivation urinaire ou digestive si nécessaire ; mortalité 20–40 %.',
    definition:
      'Fasciite nécrosante polymicrobienne d’évolution rapide touchant le périnée, les organes génitaux externes et la région périanale.',
    physiopathologie:
      '## Porte d’entrée\n- **Urinaire** : rétrécissement urétral, sondage traumatique, prostatite\n- **Ano-rectale** : abcès de la marge, fistule, hémorroïdes\n- **Cutanée** : plaies, injections, chirurgie\n\n## Terrain\n- **Diabète**, VIH, alcoolisme, malnutrition, immunodépression\n\n## Mécanisme\n- Infection polymicrobienne (aérobies et anaérobies) → endartérite oblitérante → nécrose rapide des fascias (progression jusqu’à 2–3 cm/h), toxines → choc',
    diagnostic:
      '## Clinique\n- **Douleur** intense du scrotum ou du périnée, **disproportionnée**, œdème, érythème\n- Puis **nécrose** cutanée noirâtre, **crépitation** sous-cutanée (gaz), **odeur fétide**, écoulement\n- **Sepsis** : fièvre, tachycardie, hypotension, confusion\n- Testicules habituellement épargnés\n\n## Examens (ne pas retarder la chirurgie)\n- NFS, CRP, **glycémie**, créatinine, ionogramme, **lactates**, hémocultures, hémostase\n- Prélèvements peropératoires (culture)\n- TDR VIH ; échographie ou scanner si doute sur l’extension',
    examens: [
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['gravite', 'lactates', 'Choc.'],
      ['premiere_intention', 'hemocultures', 'Bactériémie.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'prelevement-de-pus', 'Germes.'],
      ['etiologique', 'tdr-vih', 'Immunodépression.'],
    ],
    scores: [],
    differentiels: [
      ['erysipele-et-cellulite', 'Cellulite sans nécrose ni crépitation.'],
      ['torsion-du-testicule', 'Douleur testiculaire brutale de l’adolescent.'],
      ['Orchi-épididymite', 'Testicule douloureux, fièvre, pas de nécrose.'],
      ['abces-marge-anale', 'Abcès localisé.'],
      ['Hernie inguino-scrotale étranglée', 'Masse irréductible, occlusion.'],
    ],
    etiologies: '## Facteurs\n- Diabète, VIH, alcoolisme, rétrécissement urétral, pathologie ano-rectale',
    principes: [
      [
        'Urgence chirurgicale',
        'Débrider vite et largement.',
        '- **Débridement chirurgical large** de tous les tissus nécrosés, en urgence, **répété** toutes les 24–48 h si nécessaire\n- Dérivation urinaire (cystostomie) si atteinte urétrale, colostomie si atteinte ano-rectale étendue',
      ],
      [
        'Réanimation et antibiotiques',
        'Simultanément.',
        '- Remplissage, vasopresseurs, contrôle de la **glycémie** (insuline)\n- **Antibiotiques IV** : **pipéracilline-tazobactam** (ou imipénème) + **clindamycine** (antitoxinique), ou **ceftriaxone** + **métronidazole** + clindamycine ; vancomycine si SARM\n- **Prévention du tétanos**',
      ],
      [
        'Après le contrôle de l’infection',
        'Reconstruire.',
        '- Pansements, cicatrisation dirigée, greffes ou lambeaux ; nutrition',
      ],
    ],
    molecules: [
      ['piperacilline', 'premiere', 'Antibiothérapie large spectre'],
      ['clindamycine', 'premiere', 'Effet antitoxinique'],
      ['ceftriaxone', 'alternative', 'Antibiothérapie'],
      ['metronidazole', 'alternative', 'Anaérobies'],
      ['imipeneme-cilastatine', 'alternative', 'Formes graves'],
      ['vancomycine', 'adjuvant', 'SARM'],
      ['anatoxines-tetanique-diphterique', 'adjuvant', 'Prévention du tétanos'],
      ['morphine', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Toxines, bactériémie.',
        traitement: '- Réanimation',
        clinique: '- Hypotension',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Perte de substance périnéale',
        description: 'Débridements.',
        traitement: '- Greffes, lambeaux',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Décès',
        description: '20–40 %.',
        traitement: '- Chirurgie précoce',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 20 à 40 %, plus élevée si diabète déséquilibré et chirurgie retardée',
    urgences: ['choc-septique'],
    symptomes: [
      ['Douleur scrotale', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Œdème d’un membre', 'occasionnel'],
      ['Écoulement purulent d’une plaie', 'frequent'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'IDSA — recommandations de pratique clinique',
      'WSES — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Repérer, antibiotiques, référence immédiate', '- Tout cas suspect'],
      hgr: ['- Débridement, antibiotiques IV, réanimation', ''],
      tert: ['- Réanimation, chirurgie reconstructrice', ''],
    },
    alertes: { 'choc-septique': 'Nécrose périnéale avec fièvre et hypotension' },
    formes: [
      {
        nom: 'Gangrène de Fournier d’origine urinaire',
        type: 'commune',
        description: 'Rétrécissement urétral.',
        terrain: '- Homme diabétique',
        fonctionnels: '- Douleur scrotale',
        generaux: '- Fièvre',
        physiques: '- Œdème, nécrose scrotale',
        paraclinique: '',
        etiologies: '- Germes urinaires et anaérobies',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Gangrène avec choc',
        type: 'gravite',
        description: 'Urgence vitale.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Crépitation, nécrose étendue',
        paraclinique: '- Lactates élevés',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Lipomes et kystes sébacés
  {
    ...CG,
    slug: 'lipomes-kystes-sebaces',
    nom: 'Lipomes et kystes sébacés',
    resume:
      'Tumeurs sous-cutanées bénignes très fréquentes : lipome (masse molle, mobile, indolore, lobulée) et kyste épidermoïde ou « sébacé » (masse ronde, ferme, adhérente à la peau, avec un pore central, pouvant s’infecter) ; diagnostic clinique ± échographie ; exérèse sous anesthésie locale si gêne, croissance, infection répétée, doute diagnostique ; signes d’alerte d’un sarcome (masse > 5 cm, profonde, dure, croissance rapide, douleur) : imagerie et biopsie avant exérèse ; kyste infecté : incision-drainage puis exérèse à distance.',
    definition:
      'Lipome : tumeur bénigne du tissu adipeux sous-cutané ; kyste épidermoïde (dit sébacé) : cavité tapissée d’épiderme remplie de kératine, attachée à la peau.',
    physiopathologie:
      '## Lipome\n- Prolifération bénigne d’adipocytes, encapsulée ; parfois multiples (lipomatose familiale)\n\n## Kyste épidermoïde\n- Obstruction d’un follicule pileux → accumulation de kératine ; rupture ou infection → inflammation, abcès\n\n## À distinguer\n- **Liposarcome**, autres sarcomes des tissus mous (rares mais graves)',
    diagnostic:
      '## Clinique\n- **Lipome** : masse **molle**, mobile, lobulée, indolore, sous la peau, de croissance lente\n- **Kyste épidermoïde** : masse ronde, ferme, **adhérente à la peau**, avec un **pore central**, issue de matière blanchâtre malodorante à la pression\n- **Kyste infecté** : rougeur, douleur, fluctuation\n- **Signes d’alerte** : taille > 5 cm, localisation profonde (sous l’aponévrose), consistance dure, croissance rapide, douleur, récidive\n\n## Examens\n- **Échographie** si doute ; IRM et **biopsie** si signes d’alerte\n- **Histologie** de toute pièce d’exérèse atypique',
    examens: [
      ['premiere_intention', 'echographie-parties-molles', 'Nature de la masse.'],
      ['confirmation', 'biopsie-histologie', 'Masse atypique.'],
    ],
    scores: [],
    differentiels: [
      ['abces-phlegmons-parties-molles', 'Collection inflammatoire.'],
      ['adenopathies-superficielles-demarche', 'Adénopathie.'],
      ['Sarcome des tissus mous', 'Masse profonde, dure, > 5 cm.'],
      ['Onchocercome', 'Nodule sous-cutané en zone d’endémie (onchocercose).'],
      ['hernie-ombilicale-ligne-blanche', 'Masse impulsive.'],
    ],
    etiologies: '## Nature\n- Lipome : tissu adipeux ; kyste épidermoïde : follicule pileux obstrué',
    principes: [
      [
        'Exérèse',
        'Si indiquée.',
        '- Indications : gêne, croissance, esthétique, infections répétées, doute diagnostique\n- **Exérèse** complète sous **anesthésie locale** (lidocaïne) ; pour le kyste, enlever la totalité de la paroi (sinon récidive) avec le pore cutané\n- Histologie si atypique',
      ],
      [
        'Kyste infecté',
        'Drainer d’abord.',
        '- **Incision-drainage**, soins locaux, antibiotiques si cellulite (cloxacilline)\n- Exérèse du kyste à distance (4–6 semaines)',
      ],
      [
        'Masse suspecte',
        'Ne pas énucléer.',
        '- Imagerie et **biopsie** avant toute exérèse ; orientation vers un centre spécialisé (sarcome)',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['cloxacilline', 'alternative', 'Kyste infecté avec cellulite'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Infection du kyste',
        fiche: 'abces-phlegmons-parties-molles',
        description: 'Rupture, surinfection.',
        traitement: '- Drainage',
        clinique: '- Rougeur, douleur',
        paraclinique: '',
      },
      {
        nom: 'Récidive',
        description: 'Exérèse incomplète.',
        traitement: '- Reprise',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Méconnaissance d’un sarcome',
        description: 'Énucléation d’une masse maligne.',
        traitement: '- Reprise oncologique',
        clinique: '',
        paraclinique: '- Histologie',
      },
    ],
    evolution: '## Pronostic\n- Excellent ; récidive des kystes si paroi laissée en place',
    urgences: [],
    symptomes: [
      ['Tuméfaction des parties molles', 'tres_frequent'],
      ['Nodules sous-cutanés', 'frequent'],
    ],
    sources: ['Sabiston Textbook of Surgery', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: ['- Diagnostic, drainage d’un kyste infecté, exérèse simple', '- Masse atypique'],
      hgr: ['- Exérèse, échographie', ''],
      tert: ['- Biopsie, chirurgie des sarcomes', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Lipome',
        type: 'commune',
        description: 'Masse molle.',
        terrain: '- Adulte',
        fonctionnels: '',
        generaux: '',
        physiques: '- Masse molle mobile',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Kyste épidermoïde infecté',
        type: 'gravite',
        description: 'Abcès.',
        terrain: '',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Rougeur, fluctuation',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Masse suspecte de sarcome',
        type: 'etiologique',
        description: 'Signes d’alerte.',
        terrain: '',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Masse > 5 cm, profonde, dure',
        paraclinique: '- IRM, biopsie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Ulcères chroniques de jambe
  {
    ...CG,
    slug: 'ulceres-chroniques-de-jambe',
    nom: 'Ulcères chroniques de jambe',
    resume:
      'Plaies de jambe ne cicatrisant pas en 6 semaines, très fréquentes en RDC : ulcère veineux (malléole interne, varices, œdème), artériel (pied, douleur, pouls absents), diabétique, drépanocytaire (malléoles, adolescent et adulte SS), ulcère tropical phagédénique (enfant et adulte jeune dénutri), ulcère de Buruli, lèpre, néoplasique (carcinome sur cicatrice : ulcère de Marjolin) ; IPS, glycémie, électrophorèse, biopsie des bords si atypique ; soins locaux (nettoyage, débridement, pansements humides), compression pour l’ulcère veineux (après IPS), traitement de la cause, nutrition, greffe de peau.',
    definition:
      'Perte de substance cutanée de la jambe ou du pied, sans tendance à la cicatrisation après 4 à 6 semaines.',
    physiopathologie:
      '## Causes\n- **Veineuse** (insuffisance veineuse, post-thrombotique) : la plus fréquente chez l’adulte\n- **Artérielle** (artériopathie, diabète, tabac)\n- **Diabète** (neuropathie, ischémie, infection)\n- **Drépanocytose** (vaso-occlusion, hémolyse)\n- **Ulcère tropical phagédénique** (fusobactéries et spirochètes sur plaie, malnutrition)\n- **Ulcère de Buruli** (Mycobacterium ulcerans), lèpre, tuberculose, leishmaniose\n- **Carcinome épidermoïde** (ulcère de Marjolin sur cicatrice ancienne)\n\n## Facteurs aggravants\n- Malnutrition, anémie, infection, œdème, traumatismes répétés',
    diagnostic:
      '## Clinique\n- **Veineux** : malléole interne, bords réguliers, fond fibrineux, peu douloureux, varices, œdème, dermite ocre\n- **Artériel** : pied ou orteils, creusant, très douloureux (la nuit, en élévation), pouls absents, peau froide\n- **Drépanocytaire** : malléoles, douloureux, récidivant\n- **Tropical** : rapide, douloureux, fétide, bords surélevés\n- **Buruli** : bords décollés, indolore, extensif\n- **Suspect de cancer** : bords bourgeonnants, durs, saignants, ulcère ancien qui change\n\n## Examens\n- **IPS** (indice de pression systolique) avant toute compression\n- **Glycémie**, NFS, **électrophorèse de l’hémoglobine**, albumine, TDR VIH\n- Prélèvement si infection, **biopsie des bords** si atypique ou > 3 mois sans amélioration\n- Échographie Doppler veineuse et artérielle, radiographie (ostéite)',
    examens: [
      ['premiere_intention', 'ips-cheville-bras', 'Avant compression.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['deuxieme_intention', 'echo-doppler-veineux', 'Insuffisance veineuse.'],
      ['confirmation', 'biopsie-histologie', 'Ulcère atypique, cancer.'],
      ['etiologique', 'pcr-buruli', 'Ulcère de Buruli.'],
      ['deuxieme_intention', 'radiographie-osseuse', 'Ostéite.'],
    ],
    scores: [],
    differentiels: [
      ['ulcere-de-buruli', 'Ulcère à bords décollés, indolore.'],
      ['pied-diabetique', 'Ulcère du pied diabétique.'],
      ['Ulcère tropical phagédénique', 'Ulcère rapide, douloureux, fétide.'],
      ['Carcinome épidermoïde (ulcère de Marjolin)', 'Ulcère ancien bourgeonnant.'],
      ['Leishmaniose cutanée', 'Ulcère indolore en zone d’endémie.'],
    ],
    etiologies:
      '## Causes\n- Veineuse, artérielle, diabétique, drépanocytaire, infectieuse (tropical, Buruli), néoplasique',
    principes: [
      [
        'Soins locaux',
        'Pour tous.',
        '- Nettoyage au sérum physiologique, **débridement** des tissus nécrosés, pansements gras ou humides adaptés, changements réguliers\n- Antiseptiques de courte durée ; antibiotiques **seulement** si infection (cellulite, fièvre)\n- Ulcère tropical : pénicilline ou métronidazole, soins locaux, nutrition',
      ],
      [
        'Traitement de la cause',
        'Indispensable.',
        '- **Veineux** : **compression** (bandes, IPS > 0,8), élévation des jambes, marche\n- **Artériel** : pas de compression, avis vasculaire (revascularisation), arrêt du tabac, aspirine\n- **Diabète** : équilibre glycémique, décharge\n- **Drépanocytose** : repos, hydroxyurée, soins locaux, transfusion dans certains cas\n- **Buruli** : rifampicine + clarithromycine 8 semaines',
      ],
      [
        'Mesures générales',
        'Favoriser la cicatrisation.',
        '- **Nutrition** (protéines, zinc), correction de l’anémie, **vaccination antitétanique**\n- **Greffe de peau** mince une fois l’ulcère propre et bourgeonnant',
      ],
    ],
    molecules: [
      ['amoxicilline', 'alternative', 'Infection (avec acide clavulanique)'],
      ['metronidazole', 'alternative', 'Ulcère tropical, anaérobies'],
      ['cloxacilline', 'alternative', 'Cellulite'],
      ['acide-acetylsalicylique', 'adjuvant', 'Ulcère artériel'],
      ['zinc', 'adjuvant', 'Cicatrisation, carence'],
      ['anatoxines-tetanique-diphterique', 'adjuvant', 'Prévention du tétanos'],
      ['povidone-iodee', 'adjuvant', 'Antiseptique (courte durée)'],
    ],
    complications: [
      {
        nom: 'Infection et ostéite',
        fiche: 'osteomyelite-chronique',
        description: 'Ulcère profond.',
        traitement: '- Antibiotiques, chirurgie',
        clinique: '- Fièvre, os exposé',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Carcinome épidermoïde',
        description: 'Ulcère ancien.',
        traitement: '- Exérèse large, amputation parfois',
        clinique: '- Bords bourgeonnants',
        paraclinique: '- Biopsie',
      },
      {
        nom: 'Tétanos',
        fiche: 'tetanos',
        description: 'Plaie chronique.',
        traitement: '- Prévention vaccinale',
        clinique: '- Trismus',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Cicatrisation en plusieurs mois avec soins réguliers et traitement de la cause ; récidives fréquentes',
    urgences: [],
    symptomes: [
      ['Ulcère cutané', 'tres_frequent'],
      ['Œdème d’un membre', 'frequent'],
      ['Douleurs osseuses', 'occasionnel'],
      ['Écoulement purulent d’une plaie', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Soins locaux, nutrition, vaccination, référence', '- Ulcère atypique, infection'],
      hgr: ['- IPS, biopsie, greffe', ''],
      tert: ['- Chirurgie vasculaire, plastique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ulcère veineux',
        type: 'commune',
        description: 'Le plus fréquent.',
        terrain: '- Adulte, varices, thrombose ancienne',
        fonctionnels: '- Lourdeur des jambes',
        generaux: '',
        physiques: '- Ulcère malléolaire interne, œdème',
        paraclinique: '- IPS normal',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Ulcère drépanocytaire',
        type: 'etiologique',
        description: 'Malléoles.',
        terrain: '- Drépanocytaire SS',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Ulcère malléolaire récidivant',
        paraclinique: '- HbS',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Ulcère suspect de malignité',
        type: 'gravite',
        description: 'Ulcère de Marjolin.',
        terrain: '- Cicatrice ancienne',
        fonctionnels: '',
        generaux: '',
        physiques: '- Bords bourgeonnants',
        paraclinique: '- Biopsie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
