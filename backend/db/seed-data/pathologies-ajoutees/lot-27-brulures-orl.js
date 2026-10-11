'use strict';

/**
 * Lot 27 (brûlures, chirurgie plastique, ORL) — brûlures de l'adulte, noma, épistaxis, corps
 * étrangers ORL, abcès péri-amygdalien, cellulite cervico-faciale. Rédigé par IA (OMS, MSF,
 * ouvrages de référence) : à valider.
 */

const BRU = { departement: 'chirurgie', specialite: 'Brûlures et chirurgie plastique' };
const ORL = { departement: 'chirurgie', specialite: 'ORL et chirurgie cervico-faciale' };

module.exports = [
  // =================================================================== Brûlures adulte
  {
    ...BRU,
    slug: 'brulures-adulte',
    nom: 'Brûlures : évaluation et réanimation',
    resume:
      'Brûlures thermiques (feu, liquides chauds, explosions de carburant), électriques ou chimiques : refroidir, évaluer la surface (règle des 9) et la profondeur, protéger les voies aériennes (brûlures de la face, inhalation), réanimation selon Parkland si > 15–20 % de surface, analgésie, pansements à la sulfadiazine argentique, excision-greffe précoce.',
    definition:
      'Destruction de la peau et parfois des tissus profonds par un agent thermique, électrique, chimique ou radiatif ; la gravité dépend de la surface, de la profondeur, du siège, de l’âge et des lésions associées (inhalation).',
    physiopathologie:
      '## Mécanismes\n- Fuite capillaire massive dans les 24–48 premières heures → **hypovolémie** (choc du brûlé)\n- Perte de la barrière cutanée → **infection**, hypothermie\n- Hypermétabolisme, dénutrition ; rhabdomyolyse (brûlures électriques)\n- Inhalation de fumées : œdème laryngé, intoxication au monoxyde de carbone et aux cyanures\n\n## Profondeur\n- 1er degré : érythème\n- 2e degré superficiel : phlyctènes, douleur, cicatrisation < 14 jours\n- 2e degré profond et 3e degré : peau blanche, cartonnée ou brune, insensible ; greffe nécessaire',
    diagnostic:
      '## Évaluation\n- **ABCDE** ; signes d’**inhalation** : brûlures de la face, vibrisses brûlées, suie dans la bouche, voix rauque, stridor, accident en espace clos\n- **Surface** : règle des 9 de Wallace (tête 9 %, chaque membre supérieur 9 %, chaque face du tronc 18 %, chaque membre inférieur 18 %, périnée 1 %) ; paume du patient = 1 %\n- **Profondeur**, sièges à risque (face, mains, pieds, périnée, plis), brûlures circulaires (syndrome compartimental)\n- Lésions associées (chute, explosion), terrain\n\n## Examens\n- NFS, ionogramme, créatinine, groupage, glycémie\n- Gaz du sang (carboxyhémoglobine), ECG et CPK (électrisation), bandelette urinaire (myoglobinurie)',
    examens: [
      ['premiere_intention', 'nfs', 'Hémoconcentration, anémie secondaire.'],
      ['premiere_intention', 'ionogramme', 'Désordres hydro-électrolytiques.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'groupage-rai', 'Excision-greffe.'],
      ['gravite', 'gaz-du-sang', 'Inhalation, carboxyhémoglobine, acidose.'],
      ['gravite', 'ecg', 'Électrisation.'],
      ['premiere_intention', 'bandelette-urinaire', 'Myoglobinurie.'],
      ['gravite', 'hemocultures', 'Sepsis.'],
    ],
    scores: [],
    differentiels: [
      ['brulures-enfant', 'Enfant : formules de réanimation et surface corporelle différentes.'],
      ['Toxidermie bulleuse grave (Lyell)', 'Décollement cutané médicamenteux sans brûlure.'],
    ],
    etiologies:
      '## Causes\n- Flammes (cuisine au feu de bois, lampes à pétrole), **explosions de citernes de carburant**, liquides chauds, électrisation, agressions à l’acide, crises d’épilepsie près du feu',
    principes: [
      [
        'Premiers gestes',
        'Limiter les lésions.',
        '- Arrêter le processus, **refroidir à l’eau tiède** 15–20 min (pas d’eau glacée), retirer bijoux et vêtements non adhérents\n- Couvrir avec un champ propre, prévenir l’hypothermie\n- Brûlure chimique : lavage abondant prolongé',
      ],
      [
        'Voies aériennes et ventilation',
        'Prévenir l’obstruction.',
        '- **Oxygène à haut débit** (monoxyde de carbone)\n- **Intubation précoce** si signes d’inhalation avec stridor, brûlures profondes de la face ou du cou',
      ],
      [
        'Réanimation liquidienne',
        'Prévenir le choc.',
        '- Si > 15 % de surface (adulte) : **Ringer lactate** selon **Parkland** : 4 mL × poids (kg) × % surface sur 24 heures, la moitié dans les 8 premières heures (à partir de l’heure de la brûlure)\n- Adapter à la **diurèse** (objectif 0,5–1 mL/kg/h) : sonde urinaire\n- Brûlure électrique avec myoglobinurie : objectif 1–1,5 mL/kg/h',
      ],
      [
        'Analgésie et soins locaux',
        'Soulager et prévenir l’infection.',
        '- **Morphine** titrée, **kétamine** pour les pansements\n- Nettoyage, excision des phlyctènes, **sulfadiazine argentique**, pansements réguliers\n- Escarrotomie si brûlure circulaire profonde\n- Pas d’antibiotiques systématiques ; prophylaxie antitétanique',
      ],
      [
        'Nutrition et chirurgie',
        'Cicatriser.',
        '- Alimentation précoce hypercalorique et hyperprotéique\n- **Excision-greffe** précoce des brûlures profondes ; kinésithérapie, attelles en position d’extension',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Réanimation (Parkland)'],
      ['oxygene', 'premiere', 'Inhalation, monoxyde de carbone'],
      ['morphine', 'premiere', 'Analgésie'],
      ['ketamine', 'premiere', 'Analgésie des pansements'],
      ['sulfadiazine-argentique', 'premiere', 'Pansements'],
      ['paracetamol', 'adjuvant', 'Analgésie'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Prévention du tétanos'],
      ['hydroxocobalamine', 'adjuvant', 'Intoxication aux cyanures (fumées)'],
      ['omeprazole', 'adjuvant', 'Prévention de l’ulcère de stress'],
    ],
    complications: [
      {
        nom: 'Choc hypovolémique du brûlé',
        description: 'Fuite capillaire des 48 premières heures.',
        traitement: '- Remplissage selon Parkland, diurèse',
        clinique: '- Oligurie, tachycardie',
        paraclinique: '- Hémoconcentration',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Infection des brûlures, pneumonie, cathéters.',
        traitement: '- Antibiotiques adaptés, excision',
        clinique: '- Fièvre, choc',
        paraclinique: '- Hémocultures, prélèvements',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hypovolémie, rhabdomyolyse.',
        traitement: '- Remplissage, dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Rétractions et cicatrices hypertrophiques',
        description: 'Brûlures profondes.',
        traitement: '- Kinésithérapie, chirurgie reconstructrice',
        clinique: '- Brides',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée au-delà de 40 % de surface et en cas d’inhalation (indice de Baux : âge + % surface)',
    urgences: ['choc-septique'],
    symptomes: [
      ['Brûlure cutanée', 'tres_frequent'],
      ['Bulles cutanées', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Dysphonie', 'occasionnel'],
      ['Hypotension', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Refroidir, couvrir, perfuser, analgésie, transfert',
        '- > 10 % de surface, face, mains, périnée, inhalation, électrisation',
      ],
      hgr: ['- Réanimation, pansements, excision-greffe', '- > 30 % de surface, inhalation'],
      tert: ['- Centre des brûlés, réanimation, chirurgie plastique', ''],
    },
    alertes: { 'choc-septique': 'Brûlé avec fièvre ou hypothermie, hypotension, confusion' },
    formes: [
      {
        nom: 'Brûlure thermique étendue',
        type: 'commune',
        description: 'Brûlure par flamme ou liquide chaud.',
        terrain: '- Adulte',
        fonctionnels: '- Douleur',
        generaux: '- Soif, tachycardie',
        physiques: '- Phlyctènes, zones blanches insensibles',
        paraclinique: '- Hémoconcentration',
        etiologies: '- Flammes, liquides chauds',
        syndromes: [],
      },
      {
        nom: 'Brûlure avec inhalation de fumées',
        type: 'gravite',
        description: 'Accident en espace clos.',
        terrain: '',
        fonctionnels: '- Voix rauque, dyspnée',
        generaux: '- Confusion (monoxyde de carbone)',
        physiques: '- Suie, brûlures de la face, stridor',
        paraclinique: '- Carboxyhémoglobine élevée',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Brûlure électrique',
        type: 'etiologique',
        description: 'Lésions profondes sous une peau peu atteinte.',
        terrain: '- Électrisation',
        fonctionnels: '',
        generaux: '- Troubles du rythme',
        physiques: '- Points d’entrée et de sortie',
        paraclinique: '- CPK, myoglobinurie, ECG',
        etiologies: '- Courant électrique',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Noma
  {
    ...BRU,
    slug: 'noma',
    nom: 'Noma',
    resume:
      'Gangrène orofaciale foudroyante de l’enfant dénutri (2–6 ans), maladie négligée de la pauvreté : gingivite ulcéro-nécrotique puis œdème de la joue et nécrose ; urgence : antibiotiques (amoxicilline + métronidazole), renutrition, soins de bouche ; chirurgie reconstructrice des séquelles à distance.',
    definition:
      'Infection gangréneuse polymicrobienne non contagieuse, d’évolution rapide, qui détruit les tissus mous et osseux de la face ; reconnue par l’OMS comme maladie tropicale négligée.',
    physiopathologie:
      '## Mécanismes\n- Terrain : **malnutrition**, rougeole, paludisme, VIH, mauvaise hygiène buccale, pauvreté\n- Gingivite ulcéro-nécrotique aiguë → flore anaérobie (Fusobacterium, Prevotella) → nécrose rapide des joues, lèvres, nez, maxillaires\n- Sans traitement : mortalité de 70 à 90 % ; survivants avec mutilations, constriction des mâchoires',
    diagnostic:
      '## Stades (OMS)\n- **Stade 0–1** : gingivite simple puis **gingivite ulcéro-nécrotique** (saignement, douleur, haleine fétide)\n- **Stade 2** : **œdème** de la joue ou de la lèvre\n- **Stade 3** : **gangrène** (tache noire, nécrose humide)\n- **Stade 4** : cicatrisation ; **stade 5** : séquelles (perte de substance, constriction des mâchoires)\n\n## Bilan\n- État nutritionnel (périmètre brachial, œdèmes), rougeole récente, paludisme, VIH\n- NFS, glycémie, TDR paludisme, test VIH',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Malnutrition.'],
      ['premiere_intention', 'nfs', 'Anémie, hyperleucocytose.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme associé.'],
      ['etiologique', 'tdr-vih', 'Immunodépression.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
    ],
    scores: [],
    differentiels: [
      ['cellulite-cervico-faciale', 'Origine dentaire, sans nécrose gangréneuse initiale.'],
      ['Leishmaniose cutanéo-muqueuse', 'Évolution lente, zone d’endémie.'],
      ['Lymphome de Burkitt', 'Tumeur de la mâchoire, sans nécrose infectieuse.'],
    ],
    etiologies:
      '## Terrain\n- Enfant de 2 à 6 ans malnutri, après rougeole ou autre infection ; adulte immunodéprimé (VIH)',
    principes: [
      [
        'Traitement d’urgence',
        'Arrêter la gangrène.',
        '- **Amoxicilline** (ou amoxicilline-acide clavulanique) + **métronidazole** pendant 10 jours (IV si forme grave)\n- Soins de bouche : bains de bouche à la **chlorhexidine**, nettoyage doux, pas de débridement agressif précoce',
      ],
      [
        'Renutrition et traitement du terrain',
        'Restaurer les défenses.',
        '- Prise en charge de la malnutrition (**F-75** puis **F-100** ou ATPE), **vitamine A**, zinc\n- Réhydratation, traitement du paludisme, de la rougeole, du VIH',
      ],
      [
        'Séquelles',
        'Reconstruire.',
        '- Kinésithérapie précoce de la mâchoire (prévention de la constriction)\n- Chirurgie reconstructrice après 6 à 12 mois (centres spécialisés)\n- Soutien psychosocial, réinsertion',
      ],
      [
        'Prévention',
        'Éviter le noma.',
        '- Lutte contre la malnutrition, vaccination contre la rougeole, hygiène buccale\n- Dépistage des gingivites chez l’enfant malnutri',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Avec métronidazole'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['acide-clavulanique', 'alternative', 'Avec amoxicilline'],
      ['chlorhexidine-gluconate', 'premiere', 'Bains de bouche'],
      ['lait-f75', 'premiere', 'Renutrition (phase initiale)'],
      ['vitamine-a-retinol', 'adjuvant', 'Carence associée'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Sepsis',
        fiche: 'sepsis-enfant',
        description: 'Forme gangréneuse.',
        traitement: '- Antibiotiques IV, réanimation',
        clinique: '- Choc',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Constriction permanente des mâchoires',
        description: 'Fibrose cicatricielle.',
        traitement: '- Kinésithérapie, chirurgie',
        clinique: '- Impossibilité d’ouvrir la bouche',
        paraclinique: '',
      },
      {
        nom: 'Mutilations faciales',
        description: 'Perte de substance.',
        traitement: '- Chirurgie reconstructrice',
        clinique: '- Défigurations',
        paraclinique: '',
      },
      {
        nom: 'Aggravation de la malnutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Alimentation impossible.',
        traitement: '- Sonde nasogastrique, laits thérapeutiques',
        clinique: '- Amaigrissement',
        paraclinique: '- Anthropométrie',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 70 à 90 % sans traitement, < 10 % si traitement précoce ; séquelles fréquentes',
    urgences: ['malnutrition-aigue-severe-compliquee'],
    symptomes: [
      ['Haleine fétide', 'tres_frequent'],
      ['Tuméfaction faciale', 'tres_frequent'],
      ['Hypersalivation', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Trismus', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Dépister la gingivite, antibiotiques, renutrition, transfert', '- Œdème de la joue, nécrose'],
      hgr: ['- Antibiotiques IV, renutrition, soins locaux', ''],
      tert: ['- Chirurgie reconstructrice', ''],
    },
    alertes: {
      'malnutrition-aigue-severe-compliquee':
        'Enfant malnutri avec gingivite ulcéro-nécrotique ou œdème de la joue',
    },
    formes: [
      {
        nom: 'Noma aigu de l’enfant',
        type: 'commune',
        description: 'Gangrène orofaciale.',
        terrain: '- Enfant de 2 à 6 ans malnutri',
        fonctionnels: '- Douleur buccale, hypersalivation',
        generaux: '- Fièvre, amaigrissement',
        physiques: '- Gingivite nécrotique, œdème de la joue, tache noire',
        paraclinique: '- Anémie',
        etiologies: '- Flore anaérobie',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Séquelles de noma',
        type: 'evolutive',
        description: 'Stade 5.',
        terrain: '- Survivant',
        fonctionnels: '- Difficultés d’alimentation et de parole',
        generaux: '',
        physiques: '- Perte de substance, constriction des mâchoires',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Épistaxis
  {
    ...ORL,
    slug: 'epistaxis',
    nom: 'Épistaxis',
    resume:
      'Saignement nasal, le plus souvent antérieur et bénin (tache vasculaire) ; chez l’adulte, rechercher HTA, anticoagulants, troubles de la coagulation : compression bidigitale 10–15 minutes tête penchée en avant, vasoconstricteur, méchage antérieur, tamponnement postérieur si besoin ; traiter le choc.',
    definition:
      'Hémorragie extériorisée par les fosses nasales, antérieure (tache vasculaire de Kiesselbach) ou postérieure (artère sphéno-palatine).',
    physiopathologie:
      '## Causes\n- **Locales** : grattage, rhinite, sécheresse, traumatisme, corps étranger, tumeurs (cancer du cavum, fibrome nasopharyngien de l’adolescent)\n- **Générales** : **HTA**, anticoagulants et antiagrégants, thrombopénie, hémophilie, hépatopathie, **fièvres hémorragiques** (Ebola, fièvre jaune, dengue), maladie de Rendu-Osler',
    diagnostic:
      '## Évaluation\n- Abondance, durée, côté, retentissement (pouls, tension, pâleur)\n- Sang dégluti (hématémèse, méléna)\n- Examen des fosses nasales après mouchage (point saignant)\n- Antécédents, médicaments, signes hémorragiques ailleurs, fièvre (fièvre hémorragique virale)\n\n## Examens\n- NFS, plaquettes, hémostase, groupage si abondante',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie, thrombopénie.'],
      ['premiere_intention', 'hemostase', 'Troubles de la coagulation, anticoagulants.'],
      ['gravite', 'groupage-rai', 'Épistaxis grave.'],
      ['etiologique', 'pcr-ebola', 'Fièvre et saignements en contexte épidémique.'],
    ],
    scores: [],
    differentiels: [
      ['hemorragie-digestive-haute', 'Hématémèse sans saignement nasal.'],
      ['Hémoptysie', 'Sang rouge aéré lors de la toux.'],
      ['maladie-a-virus-ebola', 'Fièvre, contexte épidémique, saignements multiples.'],
    ],
    etiologies:
      '## Terrain\n- Enfant (grattage), adulte hypertendu, patient sous anticoagulants, hépatopathe',
    principes: [
      [
        'Premiers gestes',
        'Arrêter le saignement.',
        '- Patient assis, **tête penchée en avant**, mouchage des caillots\n- **Compression bidigitale** des ailes du nez 10–15 minutes\n- Coton imbibé de **xylométazoline** ou de **lidocaïne adrénalinée**',
      ],
      [
        'Méchage',
        'Épistaxis persistante.',
        '- **Méchage antérieur** (mèche grasse, tampon résorbable ou expansif) 24–48 heures\n- **Tamponnement postérieur** (sonde à ballonnet de Foley) si saignement postérieur ; antibioprophylaxie (**amoxicilline**) si méchage prolongé\n- Cautérisation (nitrate d’argent, électrique) d’un point antérieur visible',
      ],
      [
        'Traitement général',
        'Corriger la cause.',
        '- Remplissage, transfusion si choc\n- **Acide tranexamique**, correction des troubles de la coagulation (vitamine K, plaquettes)\n- Traiter une HTA sévère sans baisse brutale\n- Échec : embolisation ou ligature artérielle (centre spécialisé)',
      ],
    ],
    molecules: [
      ['xylometazoline', 'premiere', 'Vasoconstricteur local'],
      ['lidocaine', 'premiere', 'Anesthésie locale (avec adrénaline)'],
      ['acide-tranexamique', 'premiere', 'Local ou systémique'],
      ['amoxicilline', 'adjuvant', 'Méchage prolongé'],
      ['vitamine-k1-phytomenadione', 'adjuvant', 'Surdosage en antivitamine K'],
      ['amlodipine', 'adjuvant', 'HTA'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        description: 'Épistaxis grave, postérieure.',
        traitement: '- Remplissage, transfusion, tamponnement',
        clinique: '- Tachycardie, hypotension',
        paraclinique: '- Hémoglobine',
      },
      {
        nom: 'Complications du méchage',
        description: 'Sinusite, nécrose, syndrome du choc toxique.',
        traitement: '- Ablation, antibiotiques',
        clinique: '- Fièvre, douleur',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bénin dans la grande majorité ; récidives fréquentes',
    urgences: ['urgence-hypertensive'],
    symptomes: [
      ['Épistaxis', 'tres_frequent'],
      ['Hématémèse', 'occasionnel'],
      ['Pâleur', 'occasionnel'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Compression, méchage antérieur, tension artérielle',
        '- Persistance, abondance, anticoagulants',
      ],
      hgr: ['- Tamponnement postérieur, transfusion', '- Échec du tamponnement'],
      tert: ['- ORL, embolisation, ligature', ''],
    },
    alertes: { 'urgence-hypertensive': 'Épistaxis avec tension artérielle ≥ 180/120 mmHg' },
    formes: [
      {
        nom: 'Épistaxis antérieure bénigne',
        type: 'commune',
        description: 'Tache vasculaire.',
        terrain: '- Enfant, adulte jeune',
        fonctionnels: '- Saignement d’une narine',
        generaux: '',
        physiques: '- Point saignant antérieur',
        paraclinique: '',
        etiologies: '- Grattage, rhinite',
        syndromes: [],
      },
      {
        nom: 'Épistaxis grave',
        type: 'gravite',
        description: 'Abondante, postérieure, récidivante.',
        terrain: '- Sujet âgé, HTA, anticoagulants',
        fonctionnels: '- Saignement bilatéral, postérieur',
        generaux: '- Pâleur, tachycardie',
        physiques: '',
        paraclinique: '- Anémie',
        etiologies: '',
        syndromes: ['syndrome-hemorragique'],
      },
    ],
  },

  // =================================================================== Corps étrangers ORL
  {
    ...ORL,
    slug: 'corps-etrangers-orl',
    nom: 'Corps étrangers ORL',
    resume:
      'Corps étrangers du conduit auditif, des fosses nasales, du pharynx et de l’œsophage (arêtes de poisson, pièces de monnaie, piles bouton), surtout chez l’enfant : extraction sous vision par un geste adapté ; pile bouton dans l’œsophage ou le nez = urgence absolue ; ne jamais faire de manœuvre à l’aveugle.',
    definition:
      'Présence d’un objet étranger inhalé, ingéré ou introduit dans l’oreille, le nez, le pharynx ou l’œsophage (les corps étrangers des voies aériennes inférieures sont traités à part).',
    physiopathologie:
      '## Situations\n- **Oreille** : graines, perles, insectes vivants\n- **Nez** : enfant, unilatéral, parfois découvert devant une rhinorrhée fétide\n- **Pharynx** : arêtes de poisson, os de poulet (amygdales, base de langue)\n- **Œsophage** : pièces de monnaie, os, bols alimentaires ; **piles bouton** : nécrose en 2 heures, perforation, fistule',
    diagnostic:
      '## Clinique\n- Oreille : douleur, hypoacousie, bourdonnement (insecte)\n- Nez : **rhinorrhée purulente fétide unilatérale** chez l’enfant\n- Pharynx et œsophage : **dysphagie**, **odynophagie**, hypersalivation, refus alimentaire, douleur localisée\n- Signes de gravité : détresse respiratoire, emphysème cervical, fièvre (perforation), hématémèse\n\n## Examens\n- Otoscopie, rhinoscopie, examen du pharynx\n- **Radiographie** cervicale et thoracique (corps radio-opaque ; aspect en double contour de la pile bouton)\n- Scanner si suspicion de perforation',
    examens: [
      ['premiere_intention', 'otoscopie', 'Corps étranger du conduit.'],
      ['premiere_intention', 'radiographie-thoracique', 'Corps étranger radio-opaque de l’œsophage.'],
      ['deuxieme_intention', 'scanner-cervico-facial', 'Arête non visible, perforation, abcès.'],
      ['deuxieme_intention', 'endoscopie-digestive-haute', 'Extraction œsophagienne.'],
    ],
    scores: [],
    differentiels: [
      ['corps-etranger-voies-aeriennes', 'Toux, syndrome de pénétration, sibilants.'],
      ['otite-moyenne-aigue', 'Otalgie fébrile, tympan bombé.'],
      ['Sinusite', 'Rhinorrhée purulente sans corps étranger.'],
      ['abces-peri-amygdalien', 'Fièvre, trismus, voussure.'],
    ],
    etiologies:
      '## Terrain\n- Enfant de 1 à 5 ans, adulte (arêtes, prothèses dentaires), personnes âgées, troubles psychiatriques',
    principes: [
      [
        'Oreille et nez',
        'Extraire sans aggraver.',
        '- Extraction sous vision au crochet mousse ou à la pince, lavage d’oreille (pas pour les graines ni les piles)\n- Insecte vivant : le tuer d’abord (huile, **lidocaïne**) avant l’extraction\n- Nez : « bisou de la mère » (souffle buccal en obturant l’autre narine), crochet, vasoconstricteur',
      ],
      [
        'Pharynx et œsophage',
        'Prévenir la perforation.',
        '- Arête visible : extraction à la pince\n- Œsophage : extraction endoscopique dans les 24 heures ; **pile bouton** : extraction **immédiate** (si disponible, miel 10 mL toutes les 10 min chez l’enfant > 1 an en attendant)\n- Pas de vomissements provoqués, pas de bol de pain',
      ],
      [
        'Après extraction',
        'Surveiller.',
        '- Antibiotiques si infection ou lésion muqueuse (**amoxicilline-acide clavulanique**)\n- Surveillance d’une perforation (fièvre, douleur, emphysème)',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Anesthésie locale, insecte du conduit'],
      ['xylometazoline', 'premiere', 'Vasoconstricteur nasal'],
      ['amoxicilline', 'adjuvant', 'Surinfection (avec acide clavulanique)'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Perforation œsophagienne et médiastinite',
        description: 'Arêtes, piles bouton.',
        traitement: '- Antibiotiques, chirurgie',
        clinique: '- Fièvre, douleur thoracique, emphysème',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Abcès rétropharyngé ou cervical',
        fiche: 'cellulite-cervico-faciale',
        description: 'Corps étranger pharyngé.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Fièvre, torticolis',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Lésions du conduit et du tympan',
        description: 'Manœuvres agressives.',
        traitement: '- Surveillance',
        clinique: '- Otorragie',
        paraclinique: '- Otoscopie',
      },
    ],
    evolution: '## Pronostic\n- Excellent après extraction précoce ; graves complications des piles bouton',
    urgences: [],
    symptomes: [
      ['Dysphagie', 'frequent'],
      ['Odynophagie', 'frequent'],
      ['Hypersalivation', 'frequent'],
      ['Otalgie', 'frequent'],
      ['Obstruction nasale', 'frequent'],
      ['Stridor', 'occasionnel'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Extraction simple de l’oreille ou du nez sous vision',
        '- Échec, pile bouton, dysphagie, corps œsophagien',
      ],
      hgr: ['- Extraction, radiographie, endoscopie si disponible', '- Perforation'],
      tert: ['- ORL, endoscopie rigide, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Corps étranger de l’oreille ou du nez',
        type: 'commune',
        description: 'Enfant.',
        terrain: '- Enfant de 1 à 5 ans',
        fonctionnels: '- Otalgie ou obstruction nasale',
        generaux: '',
        physiques: '- Corps étranger visible',
        paraclinique: '',
        etiologies: '- Graines, perles',
        syndromes: [],
      },
      {
        nom: 'Pile bouton ingérée',
        type: 'gravite',
        description: 'Urgence absolue.',
        terrain: '- Jeune enfant',
        fonctionnels: '- Refus alimentaire, hypersalivation',
        generaux: '',
        physiques: '',
        paraclinique: '- Double contour à la radiographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Arête pharyngo-œsophagienne',
        type: 'etiologique',
        description: 'Adulte.',
        terrain: '- Consommation de poisson',
        fonctionnels: '- Odynophagie localisée',
        generaux: '',
        physiques: '- Arête visible ou non',
        paraclinique: '- Scanner',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Abcès péri-amygdalien
  {
    ...ORL,
    slug: 'abces-peri-amygdalien',
    nom: 'Abcès péri-amygdalien',
    resume:
      'Complication suppurée d’une angine chez l’adolescent et l’adulte jeune : odynophagie unilatérale intense, trismus, voix « de patate chaude », voussure du voile avec luette déviée ; ponction ou incision-drainage, antibiotiques (amoxicilline-acide clavulanique ou pénicilline + métronidazole), analgésie.',
    definition:
      'Collection purulente entre la capsule de l’amygdale palatine et le muscle constricteur du pharynx.',
    physiopathologie:
      '## Mécanismes\n- Extension d’une angine ou d’une amygdalite (streptocoque A, anaérobies, staphylocoque)\n- Risque d’extension aux espaces profonds du cou (cellulite, médiastinite), obstruction des voies aériennes',
    diagnostic:
      '## Clinique\n- Angine qui s’aggrave après quelques jours : **odynophagie unilatérale** intense, otalgie réflexe\n- **Trismus**, hypersalivation, voix étouffée, haleine fétide, fièvre\n- **Bombement du pilier antérieur et du voile**, **luette déviée** du côté sain\n- Adénopathie cervicale douloureuse\n\n## Examens\n- NFS, CRP ; ponction diagnostique et thérapeutique\n- Scanner si doute ou suspicion d’extension',
    examens: [
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['confirmation', 'ponction-epanchement', 'Ponction de l’abcès : pus.'],
      ['deuxieme_intention', 'scanner-cervico-facial', 'Extension, diagnostic différentiel.'],
      ['etiologique', 'glycemie', 'Diabète.'],
    ],
    scores: [],
    differentiels: [
      ['Phlegmon péri-amygdalien (sans collection)', 'Pas de pus à la ponction.'],
      ['angine-pharyngite-enfant', 'Angine sans voussure ni trismus.'],
      ['diphterie', 'Fausses membranes, non vacciné.'],
      ['cellulite-cervico-faciale', 'Origine dentaire, tuméfaction cervicale.'],
      ['Mononucléose infectieuse', 'Angine bilatérale, adénopathies diffuses.'],
    ],
    etiologies: '## Terrain\n- Adolescent et adulte jeune, angines récidivantes, tabac',
    principes: [
      [
        'Drainage',
        'Évacuer le pus.',
        '- **Ponction à l’aiguille** ou **incision-drainage** sous anesthésie locale (**lidocaïne**), patient assis',
      ],
      [
        'Antibiotiques et analgésie',
        'Traiter l’infection.',
        '- **Amoxicilline-acide clavulanique** ou **pénicilline G + métronidazole** IV puis relais oral, durée totale 10 jours\n- **Clindamycine** si allergie\n- Paracétamol, AINS, hydratation IV si déglutition impossible\n- Corticoïde en dose unique (**dexaméthasone**) pour réduire douleur et trismus',
      ],
      [
        'Après la guérison',
        'Prévenir la récidive.',
        '- Amygdalectomie en cas de récidive ou d’angines récidivantes',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Avec acide clavulanique'],
      ['acide-clavulanique', 'premiere', 'Avec amoxicilline'],
      ['benzylpenicilline-penicilline-g', 'alternative', 'Avec métronidazole'],
      ['metronidazole', 'alternative', 'Anaérobies'],
      ['clindamycine', 'alternative', 'Allergie à la pénicilline'],
      ['dexamethasone', 'adjuvant', 'Dose unique'],
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['paracetamol', 'premiere', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Cellulite cervicale et médiastinite',
        fiche: 'cellulite-cervico-faciale',
        description: 'Extension.',
        traitement: '- Drainage chirurgical, antibiotiques',
        clinique: '- Tuméfaction cervicale, dyspnée',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Obstruction des voies aériennes',
        description: 'Œdème.',
        traitement: '- Drainage, protection des voies aériennes',
        clinique: '- Stridor',
        paraclinique: '',
      },
      {
        nom: 'Déshydratation',
        description: 'Déglutition impossible.',
        traitement: '- Perfusion',
        clinique: '- Soif, oligurie',
        paraclinique: '- Ionogramme',
      },
    ],
    evolution: '## Pronostic\n- Guérison rapide après drainage ; récidive dans 10 à 15 % des cas',
    urgences: [],
    symptomes: [
      ['Odynophagie', 'tres_frequent'],
      ['Trismus', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Mal de gorge', 'tres_frequent'],
      ['Hypersalivation', 'frequent'],
      ['Otalgie', 'frequent'],
      ['Haleine fétide', 'frequent'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Antibiotiques, antalgiques, transfert', '- Trismus, voussure, déglutition impossible'],
      hgr: ['- Ponction ou incision, antibiotiques IV', '- Extension cervicale'],
      tert: ['- ORL, scanner, chirurgie cervicale', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Abcès péri-amygdalien typique',
        type: 'commune',
        description: 'Après une angine.',
        terrain: '- Adolescent, adulte jeune',
        fonctionnels: '- Odynophagie unilatérale, trismus',
        generaux: '- Fièvre',
        physiques: '- Voussure du voile, luette déviée',
        paraclinique: '- Pus à la ponction',
        etiologies: '- Streptocoque A, anaérobies',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Abcès compliqué',
        type: 'gravite',
        description: 'Extension.',
        terrain: '- Diabète, VIH',
        fonctionnels: '- Dyspnée, dysphagie totale',
        generaux: '- Sepsis',
        physiques: '- Tuméfaction cervicale',
        paraclinique: '- Collection cervicale',
        etiologies: '',
        syndromes: ['syndrome-de-reponse-inflammatoire-systemique'],
      },
    ],
  },

  // =================================================================== Cellulite cervico-faciale
  {
    ...ORL,
    slug: 'cellulite-cervico-faciale',
    nom: 'Cellulite cervico-faciale',
    resume:
      'Infection des tissus cellulo-adipeux de la face et du cou, surtout d’origine dentaire, fréquente et grave en RDC (automédication par AINS, retard de soins) : tuméfaction, trismus, fièvre ; forme diffuse (angine de Ludwig) = menace des voies aériennes ; antibiotiques IV (amoxicilline-acide clavulanique ou ceftriaxone + métronidazole), drainage chirurgical, extraction de la dent causale.',
    definition:
      'Infection des espaces celluleux de la face et du cou, séreuse, collectée (abcès) ou diffuse et nécrosante, le plus souvent secondaire à une infection dentaire.',
    physiopathologie:
      '## Causes\n- **Dentaires** (carie, molaires inférieures, accident d’éruption de la dent de sagesse) : la majorité\n- Amygdaliennes, salivaires, cutanées, post-traumatiques\n\n## Facteurs aggravants\n- **AINS** et corticoïdes sans antibiotiques, retard thérapeutique, diabète, VIH, malnutrition\n\n## Formes graves\n- **Angine de Ludwig** (plancher buccal bilatéral) : obstruction des voies aériennes\n- Cellulite cervicale nécrosante, **médiastinite**, thrombophlébite',
    diagnostic:
      '## Clinique\n- Douleur dentaire initiale, **tuméfaction** jugale, sous-mandibulaire ou cervicale, chaude, douloureuse\n- **Trismus**, dysphagie, fièvre\n- Signes de gravité : **dyspnée**, **stridor**, voix modifiée, langue refoulée, extension cervicale et thoracique, crépitation (gaz), sepsis\n\n## Examens\n- NFS, CRP, glycémie, test VIH, créatinine\n- **Radiographie panoramique** (dent causale)\n- **Scanner cervico-facial** (et thoracique) pour les formes diffuses',
    examens: [
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['etiologique', 'tdr-vih', 'Immunodépression.'],
      ['etiologique', 'radiographie-dentaire-panoramique', 'Dent causale.'],
      ['gravite', 'scanner-cervico-facial', 'Extension, collections, gaz.'],
      ['gravite', 'creatinine', 'Sepsis.'],
      ['gravite', 'hemocultures', 'Bactériémie.'],
    ],
    scores: [],
    differentiels: [
      ['abces-peri-amygdalien', 'Voussure du voile, angine.'],
      ['erysipele-et-cellulite', 'Infection cutanée superficielle sans foyer dentaire.'],
      ['Parotidite (oreillons, suppurée)', 'Tuméfaction de la loge parotidienne, pus au canal de Sténon.'],
      ['noma', 'Enfant malnutri, nécrose gangréneuse.'],
      ['Lymphome de Burkitt', 'Tumeur de la mâchoire de l’enfant.'],
    ],
    etiologies: '## Terrain\n- Mauvaise hygiène bucco-dentaire, automédication par AINS, diabète, VIH',
    principes: [
      [
        'Voies aériennes',
        'Priorité absolue.',
        '- Position assise, oxygène, surveillance ; intubation difficile (fibroscopie) ou trachéotomie si menace',
      ],
      [
        'Antibiotiques IV',
        'Traiter l’infection.',
        '- **Amoxicilline-acide clavulanique** IV ou **ceftriaxone + métronidazole** ; **clindamycine** si allergie\n- Relais oral après amélioration ; durée 10 à 14 jours\n- **Arrêt des AINS**',
      ],
      [
        'Chirurgie',
        'Supprimer la collection et la cause.',
        '- **Incision-drainage** des collections (endobuccale ou cervicale), débridement des formes nécrosantes\n- **Extraction ou traitement de la dent causale**\n- Bains de bouche à la chlorhexidine',
      ],
      ['Mesures associées', 'Soutenir.', '- Réhydratation, analgésie, équilibre glycémique, nutrition'],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Avec acide clavulanique'],
      ['acide-clavulanique', 'premiere', 'Avec amoxicilline'],
      ['ceftriaxone', 'alternative', 'Avec métronidazole'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['clindamycine', 'alternative', 'Allergie'],
      ['chlorhexidine-gluconate', 'adjuvant', 'Bains de bouche'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Douleur intense'],
    ],
    complications: [
      {
        nom: 'Obstruction des voies aériennes',
        description: 'Angine de Ludwig.',
        traitement: '- Intubation, trachéotomie, drainage',
        clinique: '- Stridor, dyspnée',
        paraclinique: '',
      },
      {
        nom: 'Médiastinite descendante',
        description: 'Extension thoracique.',
        traitement: '- Drainage cervical et thoracique, réanimation',
        clinique: '- Douleur thoracique, sepsis',
        paraclinique: '- Scanner thoracique',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Forme diffuse.',
        traitement: '- Antibiotiques, réanimation',
        clinique: '- Choc',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Thrombophlébite jugulaire ou du sinus caverneux',
        description: 'Extension veineuse.',
        traitement: '- Antibiotiques, anticoagulation',
        clinique: '- Œdème palpébral, exophtalmie',
        paraclinique: '- Scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si traitement précoce ; mortalité des formes diffuses et des médiastinites élevée',
    urgences: ['choc-septique'],
    symptomes: [
      ['Tuméfaction faciale', 'tres_frequent'],
      ['Tuméfaction cervicale', 'frequent'],
      ['Trismus', 'frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Dysphagie', 'frequent'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'Sabiston Textbook of Surgery',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Antibiotiques, arrêt des AINS, transfert', '- Trismus, tuméfaction cervicale, dyspnée'],
      hgr: ['- Antibiotiques IV, drainage, extraction dentaire', '- Formes diffuses, médiastinite'],
      tert: ['- Chirurgie maxillo-faciale et ORL, réanimation', ''],
    },
    alertes: { 'choc-septique': 'Cellulite cervico-faciale avec hypotension ou confusion' },
    formes: [
      {
        nom: 'Cellulite circonscrite d’origine dentaire',
        type: 'commune',
        description: 'Forme collectée.',
        terrain: '- Adulte, carie',
        fonctionnels: '- Douleur dentaire, trismus',
        generaux: '- Fièvre',
        physiques: '- Tuméfaction fluctuante',
        paraclinique: '- Foyer dentaire',
        etiologies: '- Molaire inférieure',
        syndromes: ['syndrome-infectieux'],
        examens: [['radiographie-dentaire-panoramique', 'Dent causale']],
      },
      {
        nom: 'Cellulite diffuse (angine de Ludwig)',
        type: 'gravite',
        description: 'Urgence vitale.',
        terrain: '- Diabète, AINS',
        fonctionnels: '- Dyspnée, dysphagie',
        generaux: '- Sepsis',
        physiques: '- Plancher buccal induré, langue refoulée',
        paraclinique: '- Gaz, nécrose au scanner',
        etiologies: '',
        syndromes: ['syndrome-de-reponse-inflammatoire-systemique', 'syndrome-de-detresse-respiratoire'],
      },
    ],
  },
];
