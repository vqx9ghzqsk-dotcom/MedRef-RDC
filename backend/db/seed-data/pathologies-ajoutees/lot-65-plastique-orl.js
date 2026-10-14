'use strict';

/**
 * Lot 65 (phase 2, chirurgie plastique et ORL) — escarres, greffes de peau, fentes labio-palatines,
 * sinusites de l'adulte, otite externe, surdité, cancers ORL. Rédigé par IA (OMS, Sabiston, IDSA,
 * NCCN) : à valider.
 */

const BRU = { departement: 'chirurgie', specialite: 'Brûlures et chirurgie plastique' };
const ORL = { departement: 'chirurgie', specialite: 'ORL et chirurgie cervico-faciale' };

module.exports = [
  // =================================================================== Escarres
  {
    ...BRU,
    slug: 'escarres',
    nom: 'Escarres',
    resume:
      'Lésions ischémiques de la peau et des tissus sous-jacents par compression prolongée sur les reliefs osseux (sacrum, talons, ischions, trochanters, occiput) chez les patients immobilisés (paraplégie, AVC, coma, fractures, sujets âgés, dénutris) : du simple érythème persistant (stade 1) à la nécrose profonde avec os exposé (stade 4) ; prévention : changements de position toutes les 2–3 h, matelas adapté, nutrition, hygiène, surveillance quotidienne de la peau ; traitement : décharge, débridement, pansements adaptés, nutrition, traitement de l’infection, chirurgie (lambeaux) pour les escarres profondes.',
    definition:
      'Lésion cutanée d’origine ischémique liée à une compression prolongée des tissus mous entre un plan osseux et une surface d’appui (classification en 4 stades).',
    physiopathologie:
      '## Mécanismes\n- **Pression** prolongée (> 2 h) → ischémie → nécrose, débutant en profondeur (près de l’os)\n- **Cisaillement**, frottements, **macération** (incontinence, sueurs)\n\n## Facteurs\n- **Immobilité** (paraplégie, AVC, coma, fractures, sédation), **dénutrition**, anémie, déshydratation, diabète, âge, troubles de la sensibilité, incontinence',
    diagnostic:
      '## Stades\n- **1** : érythème persistant ne blanchissant pas à la pression\n- **2** : phlyctène ou ulcération superficielle\n- **3** : perte de substance jusqu’au tissu sous-cutané (nécrose)\n- **4** : atteinte du muscle, du tendon ou de l’**os**\n\n## Évaluation\n- Siège, taille, profondeur, nécrose, exsudat, odeur, infection (rougeur, chaleur, pus, fièvre)\n- État nutritionnel, échelles de risque (Braden, Norton)\n\n## Examens\n- NFS, albumine, glycémie, CRP\n- Radiographie ou IRM si suspicion d’**ostéite** ; prélèvement profond ou biopsie osseuse',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie, infection.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'crp', 'Infection.'],
      ['gravite', 'radiographie-osseuse', 'Ostéite.'],
      ['deuxieme_intention', 'irm-osteo-articulaire', 'Ostéite.'],
      ['etiologique', 'electrophorese-proteines', 'Dénutrition (albumine).'],
      ['deuxieme_intention', 'prelevement-de-pus', 'Infection profonde.'],
    ],
    scores: [],
    differentiels: [
      ['ulceres-chroniques-de-jambe', 'Ulcère vasculaire.'],
      ['pied-diabetique', 'Ulcère neuropathique du diabétique.'],
      ['Dermite d’incontinence', 'Érythème superficiel par macération.'],
    ],
    etiologies:
      '## Facteurs\n- Immobilité, dénutrition, incontinence, troubles sensitifs, absence de prévention',
    principes: [
      [
        'Prévention',
        'Avant tout.',
        '- **Changements de position** toutes les 2–3 h, coussins de décharge, **matelas** adapté\n- Inspection quotidienne de la peau, hygiène, prise en charge de l’incontinence\n- **Nutrition** (protéines, énergie), hydratation, mobilisation précoce',
      ],
      [
        'Traitement local',
        'Décharger et soigner.',
        '- **Suppression de l’appui** sur la zone\n- Nettoyage au sérum physiologique, **débridement** de la nécrose et de la fibrine\n- Pansements adaptés (hydrocolloïdes, alginates, pansements gras, sucre ou miel en contexte limité)\n- Antibiotiques seulement si infection (cellulite, ostéite, sepsis)',
      ],
      [
        'Chirurgie',
        'Escarres profondes.',
        '- Excision et **lambeaux** musculo-cutanés pour les stades 3–4 propres chez le patient renourri et stable\n- Traitement de l’ostéite',
      ],
    ],
    molecules: [
      ['zinc', 'adjuvant', 'Cicatrisation, carence'],
      ['oxyde-de-zinc-pommade', 'adjuvant', 'Protection cutanée (stade 1, macération)'],
      ['sulfadiazine-argentique', 'alternative', 'Plaie infectée superficielle'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['metronidazole', 'adjuvant', 'Odeur, anaérobies'],
    ],
    complications: [
      {
        nom: 'Infection et ostéite',
        fiche: 'osteomyelite-chronique',
        description: 'Escarre profonde.',
        traitement: '- Débridement, antibiotiques',
        clinique: '- Fièvre, pus, os exposé',
        paraclinique: '- Imagerie',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Infection étendue.',
        traitement: '- Antibiotiques, chirurgie',
        clinique: '- Fièvre, choc',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Dénutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Pertes protéiques.',
        traitement: '- Renutrition',
        clinique: '- Amaigrissement',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Prévention très efficace ; cicatrisation lente (mois) des escarres profondes ; marqueur de gravité chez le sujet âgé',
    urgences: [],
    symptomes: [
      ['Ulcère cutané', 'tres_frequent'],
      ['Fièvre', 'occasionnel'],
      ['Écoulement purulent d’une plaie', 'occasionnel'],
    ],
    sources: ['Sabiston Textbook of Surgery', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Prévention, éducation des familles, pansements', ''],
      hgr: ['- Débridement, traitement de l’infection', ''],
      tert: ['- Lambeaux', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Escarre superficielle',
        type: 'commune',
        description: 'Stades 1–2.',
        terrain: '- Patient alité',
        fonctionnels: '',
        generaux: '',
        physiques: '- Érythème, phlyctène',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Escarre profonde infectée',
        type: 'gravite',
        description: 'Stades 3–4.',
        terrain: '- Paraplégique, dénutri',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Nécrose, os exposé',
        paraclinique: '- Ostéite',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Greffes de peau
  {
    ...BRU,
    slug: 'greffes-de-peau',
    nom: 'Greffes de peau',
    resume:
      'Technique de couverture des pertes de substance cutanée (brûlures profondes, plaies traumatiques étendues, ulcères chroniques, libération de brides, excision de tumeurs) : greffe de peau mince (dermo-épidermique, prélevée au dermatome sur la cuisse, souvent expansée en filet) ou greffe de peau totale (zones fonctionnelles et visage) ; conditions : lit receveur propre, bourgeonnant, bien vascularisé, sans infection ni os ou tendon nus ; immobilisation, pansement compressif, premier pansement à J5 ; causes d’échec : hématome, infection, cisaillement ; soins du site donneur.',
    definition:
      'Transfert d’un fragment de peau (épiderme et partie ou totalité du derme) sans vascularisation propre d’un site donneur vers une perte de substance, où il se revascularise à partir du lit receveur.',
    physiopathologie:
      '## Prise de greffe\n- **Imbibition** plasmatique (48 h), **inosculation** puis néovascularisation (J3–J7)\n- Nécessite un **lit vascularisé** (bourgeon, muscle, fascia) ; échoue sur os sans périoste, tendon sans paratendon, cartilage, tissu infecté\n\n## Types\n- **Peau mince** : prise facile, site donneur cicatrisant en 10–14 jours, rétraction secondaire plus importante\n- **Peau totale** : meilleur résultat esthétique et moins de rétraction, site donneur suturé (petites surfaces)',
    diagnostic:
      '## Indications\n- Brûlures profondes (après excision), plaies traumatiques étendues, ulcères chroniques propres, libération de brides, pertes de substance après excision\n\n## Préparation du lit\n- Plaie **propre**, **bourgeonnante**, sans nécrose ni pus ; contrôle de l’infection (streptocoque β-hémolytique : contre-indication)\n- État général : **nutrition**, **anémie** (Hb > 8–10 g/dL), diabète\n\n## Examens\n- NFS, glycémie, albumine ; prélèvement de la plaie si doute infectieux',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['deuxieme_intention', 'prelevement-de-pus', 'Infection du lit.'],
      ['etiologique', 'electrophorese-proteines', 'Dénutrition.'],
    ],
    scores: [],
    differentiels: [],
    etiologies: '## Indications\n- Brûlures, traumatismes, ulcères, brides, exérèses',
    principes: [
      [
        'Préparer',
        'Lit receveur et patient.',
        '- Débridement, pansements jusqu’au bourgeonnement, traitement de l’infection, renutrition, correction de l’anémie',
      ],
      [
        'Technique',
        'Greffer et immobiliser.',
        '- Prélèvement au **dermatome** (cuisse, fesse, cuir chevelu chez l’enfant), expansion en filet si grande surface\n- Fixation (agrafes, points), **pansement compressif** (bourdonnet), **immobilisation** (attelle)\n- Premier pansement à **J4–J5** (évacuation d’hématome ou de sérome)',
      ],
      [
        'Après',
        'Protéger.',
        '- Soins du **site donneur** (pansement gras), hydratation de la peau, protection solaire\n- **Kinésithérapie**, vêtements compressifs, prévention des rétractions',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Anesthésie locale (petites greffes)'],
      ['ketamine', 'alternative', 'Anesthésie'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie'],
      ['sulfadiazine-argentique', 'alternative', 'Préparation du lit (brûlures)'],
    ],
    complications: [
      {
        nom: 'Échec de prise',
        description: 'Hématome, infection, cisaillement.',
        traitement: '- Nouvelle greffe',
        clinique: '- Greffe pâle ou noire',
        paraclinique: '',
      },
      {
        nom: 'Infection',
        fiche: 'infection-du-site-operatoire',
        description: 'Streptocoque, staphylocoque.',
        traitement: '- Antibiotiques, soins',
        clinique: '- Pus, fonte de la greffe',
        paraclinique: '',
      },
      {
        nom: 'Rétraction et hyperpigmentation',
        fiche: 'sequelles-brulures-retractions',
        description: 'Peau mince.',
        traitement: '- Compression, kinésithérapie',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Prise de 80–95 % sur un lit bien préparé',
    urgences: [],
    symptomes: [
      ['Ulcère cutané', 'frequent'],
      ['Brûlure cutanée', 'frequent'],
    ],
    sources: ['Sabiston Textbook of Surgery', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Préparation de la plaie, pansements', ''],
      hgr: ['- Greffe de peau mince', ''],
      tert: ['- Greffes étendues, lambeaux', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Greffe de peau mince',
        type: 'commune',
        description: 'Grandes surfaces.',
        terrain: '- Brûlure, ulcère',
        fonctionnels: '',
        generaux: '',
        physiques: '- Lit bourgeonnant',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Greffe de peau totale',
        type: 'topographique',
        description: 'Visage, mains, plis.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Fentes labio-palatines
  {
    ...BRU,
    slug: 'fentes-labio-palatines',
    nom: 'Fentes labio-palatines',
    resume:
      'Malformations congénitales fréquentes (≈ 1/700 naissances) de la lèvre (fente labiale, uni- ou bilatérale), du palais (fente palatine) ou des deux : difficultés d’alimentation (succion), fausses routes, otites séromuqueuses et surdité, troubles du langage (voix nasonnée), problèmes dentaires, retentissement esthétique et stigmatisation ; alimentation adaptée (allaitement possible pour la fente labiale, tétines spéciales, cuillère, tasse), surveillance du poids ; chirurgie : lèvre vers 3–6 mois, palais vers 9–18 mois (programmes humanitaires), puis orthophonie, soins ORL et dentaires ; rechercher les syndromes associés.',
    definition:
      'Défaut de fusion des bourgeons faciaux embryonnaires entraînant une fente de la lèvre supérieure et/ou du palais (primaire et/ou secondaire).',
    physiopathologie:
      '## Facteurs\n- **Génétiques** (antécédents familiaux, syndromes : Pierre Robin, Van der Woude, trisomies)\n- **Environnementaux** : carence en **acide folique**, tabac et alcool maternels, médicaments (phénytoïne, valproate), diabète\n\n## Conséquences\n- **Alimentation** : défaut de succion (fente palatine), reflux nasal, **fausses routes**\n- **Oreilles** : dysfonction tubaire → **otite séromuqueuse**, surdité\n- **Langage** : insuffisance vélo-pharyngée (voix nasonnée)\n- Dents, croissance maxillaire, psychologie',
    diagnostic:
      '## Clinique\n- Diagnostic à la naissance (parfois à l’échographie anténatale)\n- **Fente labiale** : uni- ou bilatérale, complète ou non\n- **Fente palatine** : examen systématique du palais (doigt, lampe) ; fente sous-muqueuse (luette bifide)\n- Rechercher : **Pierre Robin** (petite mâchoire, glossoptose : risque d’obstruction respiratoire), autres malformations, cardiopathie\n\n## Suivi\n- **Poids**, alimentation, audition (audiométrie), langage',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Croissance.'],
      ['premiere_intention', 'audiometrie', 'Otite séromuqueuse.'],
      ['premiere_intention', 'echographie-obstetricale', 'Diagnostic anténatal.'],
      ['etiologique', 'echocardiographie', 'Syndromes associés.'],
    ],
    scores: [],
    differentiels: [
      ['malformations-congenitales-majeures', 'Syndromes polymalformatifs.'],
      ['difficultes-alimentation-nouveau-ne', 'Autres difficultés d’alimentation.'],
      ['Séquence de Pierre Robin', 'Micrognathie, glossoptose.'],
    ],
    etiologies: '## Facteurs\n- Génétiques, carence en acide folique, tabac, alcool, médicaments',
    principes: [
      [
        'Alimentation',
        'Dès la naissance.',
        '- Fente labiale isolée : **allaitement** souvent possible\n- Fente palatine : lait maternel exprimé avec **tétines spéciales**, cuillère, tasse ; position semi-assise, rots fréquents\n- **Surveillance du poids** ; prise en charge de la malnutrition\n- Pierre Robin : position ventrale, surveillance respiratoire',
      ],
      [
        'Chirurgie',
        'Calendrier.',
        '- **Chéiloplastie** (lèvre) vers **3–6 mois**\n- **Palatoplastie** (palais) vers **9–18 mois** (avant l’acquisition du langage)\n- Greffe osseuse alvéolaire vers 8–10 ans, chirurgie secondaire\n- Programmes de chirurgie (missions, partenariats)',
      ],
      [
        'Suivi multidisciplinaire',
        'Long terme.',
        '- **ORL** (aérateurs transtympaniques), **orthophonie**, soins dentaires et orthodontiques, soutien psychologique\n- Prévention : **acide folique** périconceptionnel, arrêt du tabac et de l’alcool ; conseil génétique',
      ],
    ],
    molecules: [
      ['acide-folique', 'premiere', 'Prévention'],
      ['paracetamol', 'premiere', 'Douleur postopératoire'],
      ['amoxicilline', 'adjuvant', 'Otite moyenne aiguë'],
    ],
    complications: [
      {
        nom: 'Malnutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Difficultés d’alimentation.',
        traitement: '- Alimentation adaptée',
        clinique: '- Perte de poids',
        paraclinique: '- Anthropométrie',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-enfant',
        description: 'Fausses routes.',
        traitement: '- Antibiotiques',
        clinique: '- Toux, fièvre',
        paraclinique: '',
      },
      {
        nom: 'Otite séromuqueuse et surdité',
        fiche: 'otite-moyenne-chronique',
        description: 'Dysfonction tubaire.',
        traitement: '- Aérateurs',
        clinique: '- Hypoacousie',
        paraclinique: '- Audiométrie',
      },
      {
        nom: 'Troubles du langage',
        description: 'Insuffisance vélo-pharyngée.',
        traitement: '- Orthophonie, chirurgie',
        clinique: '- Voix nasonnée',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellents résultats avec une chirurgie au bon âge et un suivi multidisciplinaire ; stigmatisation et malnutrition sans prise en charge',
    urgences: [],
    symptomes: [
      ['Refus de téter', 'frequent'],
      ['Toux', 'occasionnel'],
      ['Hypoacousie', 'occasionnel'],
      ['Troubles du langage', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Examen du palais à la naissance, conseils d’alimentation, orientation', ''],
      hgr: ['- Suivi nutritionnel', ''],
      tert: ['- Chirurgie, ORL, orthophonie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fente labiale isolée',
        type: 'commune',
        description: 'Esthétique.',
        terrain: '- Nouveau-né',
        fonctionnels: '',
        generaux: '',
        physiques: '- Fente de la lèvre',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Fente labio-palatine complète',
        type: 'gravite',
        description: 'Alimentation difficile.',
        terrain: '- Nouveau-né',
        fonctionnels: '- Reflux nasal, fausses routes',
        generaux: '- Mauvaise prise de poids',
        physiques: '- Fente lèvre et palais',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Sinusites adulte
  {
    ...ORL,
    slug: 'sinusites-adulte',
    nom: 'Sinusites de l’adulte',
    resume:
      'Inflammation des sinus, le plus souvent virale (suite d’un rhume, guérison en 7–10 jours) ; sinusite bactérienne si symptômes > 10 jours, aggravation secondaire ou forme sévère (fièvre élevée, douleur intense) : obstruction nasale, rhinorrhée purulente, douleur faciale majorée en penchant la tête, céphalées ; sinusite maxillaire d’origine dentaire (unilatérale, fétide) ; signes d’alerte : œdème orbitaire, troubles visuels, céphalées intenses, signes méningés (complications orbitaires et intracrâniennes) ; lavages, antalgiques, amoxicilline 5–7 jours si bactérienne ; sinusite chronique : corticoïde nasal, bilan (polypose, dentaire, VIH), scanner, chirurgie.',
    definition:
      'Inflammation de la muqueuse des sinus paranasaux, aiguë (< 4 semaines) ou chronique (> 12 semaines), associée à une rhinite (rhinosinusite).',
    physiopathologie:
      '## Aiguë\n- Le plus souvent **virale** ; surinfection bactérienne (pneumocoque, Haemophilus, Moraxella) dans 2 % des cas\n- **Dentaire** : infection d’une dent maxillaire (anaérobies)\n\n## Chronique\n- Inflammation persistante, **polypose nasosinusienne**, allergie, déviation septale, **VIH**, mucoviscidose, champignons\n\n## Complications\n- **Orbitaires** (ethmoïdite : cellulite, abcès), **intracrâniennes** (méningite, abcès cérébral, thrombophlébite), ostéite frontale',
    diagnostic:
      '## Clinique\n- **Obstruction nasale**, **rhinorrhée** purulente (antérieure ou postérieure), **douleur faciale** ou dentaire, majorée tête penchée en avant, hyposmie\n- Bactérienne probable : > 10 jours, **aggravation secondaire**, fièvre > 39 °C, douleur unilatérale intense\n- **Signes d’alerte** : œdème palpébral, exophtalmie, baisse de vision, diplopie, céphalées intenses, raideur de nuque, troubles de conscience\n\n## Examens\n- Diagnostic clinique ; pas de radiographie standard\n- **Scanner** des sinus : complication, forme chronique (avant chirurgie), origine dentaire\n- **Nasofibroscopie** (polypes, pus au méat moyen) ; test VIH si récidives',
    examens: [
      ['deuxieme_intention', 'scanner-cervico-facial', 'Scanner des sinus.'],
      ['deuxieme_intention', 'nasofibroscopie', 'Polypes, pus.'],
      ['etiologique', 'radiographie-dentaire-panoramique', 'Origine dentaire.'],
      ['etiologique', 'tdr-vih', 'Récidives.'],
    ],
    scores: [],
    differentiels: [
      ['sinusite-enfant', 'Sinusite de l’enfant, ethmoïdite.'],
      ['cephalees-migraine', 'Céphalées sans rhinorrhée.'],
      ['abces-cellulites-dentaires', 'Infection dentaire.'],
      ['cancers-orl', 'Sinusite unilatérale chronique avec épistaxis.'],
      ['Rhinite allergique', 'Éternuements, prurit.'],
    ],
    etiologies: '## Causes\n- Virales, bactériennes, dentaires, allergiques, polypose, immunodépression',
    principes: [
      [
        'Sinusite aiguë',
        'Symptomatique d’abord.',
        '- **Lavages** au sérum physiologique, **paracétamol**, décongestionnant court (≤ 5 jours)\n- **Bactérienne** : **amoxicilline** 1 g 3 fois par jour 5–7 jours ; allergie ou échec : céfuroxime, amoxicilline-acide clavulanique, doxycycline\n- **Dentaire** : amoxicilline-acide clavulanique + soins dentaires',
      ],
      [
        'Complications',
        'Urgence.',
        '- Atteinte orbitaire ou intracrânienne : hospitalisation, **ceftriaxone** IV + métronidazole, scanner, drainage chirurgical',
      ],
      [
        'Sinusite chronique',
        'Bilan et traitement de fond.',
        '- **Corticoïde nasal** (mométasone, fluticasone) prolongé, lavages\n- Polypose : corticoïdes oraux courts, chirurgie endoscopique\n- Traiter la cause (dent, allergie, VIH)',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Sinusite bactérienne'],
      ['acide-clavulanique', 'alternative', 'Origine dentaire, échec'],
      ['cefuroxime', 'alternative', 'Allergie, échec'],
      ['doxycycline', 'alternative', 'Allergie à la pénicilline'],
      ['mometasone-furoate', 'premiere', 'Sinusite chronique'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Lavages de nez'],
      ['xylometazoline', 'adjuvant', 'Décongestionnant court'],
      ['paracetamol', 'premiere', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Cellulite et abcès orbitaires',
        description: 'Ethmoïdite.',
        traitement: '- Antibiotiques IV, drainage',
        clinique: '- Œdème palpébral, exophtalmie',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Méningite et abcès cérébral',
        fiche: 'abces-cerebral',
        description: 'Extension intracrânienne.',
        traitement: '- Antibiotiques IV, neurochirurgie',
        clinique: '- Céphalées, raideur',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Sinusite chronique',
        description: 'Récidives.',
        traitement: '- Corticoïde nasal, chirurgie',
        clinique: '- Obstruction chronique',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison spontanée de la plupart des sinusites aiguës virales ; complications rares mais graves',
    urgences: ['syndrome-meninge-febrile'],
    symptomes: [
      ['Obstruction nasale', 'tres_frequent'],
      ['Rhinorrhée', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Œdème du visage', 'occasionnel'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Lavages, antalgiques, amoxicilline si bactérienne', '- Signes orbitaires ou neurologiques'],
      hgr: ['- Antibiotiques IV, scanner', ''],
      tert: ['- Chirurgie endoscopique, neurochirurgie', ''],
    },
    alertes: {
      'syndrome-meninge-febrile':
        'Sinusite avec céphalées intenses, raideur de nuque ou troubles de conscience',
    },
    formes: [
      {
        nom: 'Sinusite maxillaire aiguë',
        type: 'commune',
        description: 'Après un rhume.',
        terrain: '- Adulte',
        fonctionnels: '- Douleur sous-orbitaire, rhinorrhée',
        generaux: '- Fièvre',
        physiques: '- Pus au méat moyen',
        paraclinique: '',
        etiologies: '- Pneumocoque, Haemophilus',
        syndromes: [],
      },
      {
        nom: 'Sinusite compliquée',
        type: 'gravite',
        description: 'Orbitaire ou intracrânienne.',
        terrain: '',
        fonctionnels: '- Céphalées intenses',
        generaux: '- Fièvre',
        physiques: '- Œdème orbitaire, raideur',
        paraclinique: '- Scanner',
        etiologies: '',
        syndromes: ['syndrome-meninge'],
      },
      {
        nom: 'Sinusite d’origine dentaire',
        type: 'etiologique',
        description: 'Unilatérale fétide.',
        terrain: '- Infection dentaire',
        fonctionnels: '- Rhinorrhée fétide',
        generaux: '',
        physiques: '',
        paraclinique: '- Panoramique dentaire',
        etiologies: '- Anaérobies',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Otite externe
  {
    ...ORL,
    slug: 'otite-externe',
    nom: 'Otite externe',
    resume:
      'Infection du conduit auditif externe, favorisée par l’humidité (baignades), les grattages (cotons-tiges, objets), l’eczéma : douleur intense de l’oreille majorée par la traction du pavillon ou la pression du tragus, otorrhée, conduit œdématié, tympan normal (si visible) ; otomycose (prurit, dépôts blancs ou noirs) ; otite externe nécrosante chez le diabétique âgé ou immunodéprimé (Pseudomonas, douleur intense, paralysie faciale : urgence) ; nettoyage du conduit, gouttes antibiotiques (ciprofloxacine) ± corticoïde, antalgiques, oreille au sec ; antifongique local pour l’otomycose.',
    definition:
      'Inflammation diffuse ou localisée (furoncle) du conduit auditif externe, bactérienne (Pseudomonas, staphylocoque) ou fongique (Aspergillus, Candida).',
    physiopathologie:
      '## Facteurs\n- **Humidité** (baignades, climat chaud), **traumatismes** (cotons-tiges, épingles, objets), eczéma, appareils auditifs\n- Diabète, immunodépression (VIH)\n\n## Germes\n- **Pseudomonas aeruginosa**, **staphylocoque doré** (furoncle) ; **champignons** (otomycose : Aspergillus niger, Candida)\n\n## Otite externe nécrosante (maligne)\n- Diabétique âgé, immunodéprimé : extension à l’os temporal, paralysies des nerfs crâniens',
    diagnostic:
      '## Clinique\n- **Otalgie** intense, majorée par la **traction du pavillon** et la pression du tragus, prurit\n- **Otorrhée**, conduit œdématié, rouge, sécrétions ; tympan normal quand il est visible\n- Otomycose : **prurit**, dépôts blanchâtres ou noirâtres (« papier buvard »)\n- **Nécrosante** : douleur intense persistante, tissu de granulation, **paralysie faciale**, diabétique\n\n## Examens\n- **Otoscopie** après nettoyage\n- Prélèvement si échec ou forme nécrosante ; **glycémie** ; scanner du rocher (forme nécrosante)',
    examens: [
      ['confirmation', 'otoscopie', 'Conduit œdématié, tympan.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['deuxieme_intention', 'prelevement-de-pus', 'Germes, champignons.'],
      ['gravite', 'scanner-cervico-facial', 'Otite nécrosante.'],
    ],
    scores: [],
    differentiels: [
      ['otite-moyenne-aigue', 'Tympan bombé, fièvre.'],
      ['otite-moyenne-chronique', 'Perforation tympanique, otorrhée chronique.'],
      ['corps-etrangers-orl', 'Corps étranger du conduit.'],
      ['zona', 'Zona auriculaire (vésicules, paralysie faciale).'],
      ['mastoidite', 'Tuméfaction rétro-auriculaire.'],
    ],
    etiologies: '## Facteurs\n- Humidité, grattage, eczéma, diabète, immunodépression',
    principes: [
      [
        'Traitement local',
        'Base.',
        '- **Nettoyage** doux du conduit (aspiration, mèche), mèche expansive si conduit fermé\n- **Gouttes antibiotiques** : **ciprofloxacine** ou ofloxacine (± corticoïde) 2 fois par jour 7 jours\n- **Antalgiques** (paracétamol, ibuprofène)\n- **Oreille au sec**, pas de cotons-tiges',
      ],
      ['Otomycose', 'Antifongique.', '- Nettoyage, **clotrimazole** ou miconazole local 2–3 semaines'],
      [
        'Otite nécrosante',
        'Urgence.',
        '- Hospitalisation, **ciprofloxacine** orale ou **ceftazidime** IV 6 semaines, équilibre du diabète, débridement, avis ORL',
      ],
    ],
    molecules: [
      ['ciprofloxacine', 'premiere', 'Gouttes auriculaires, forme nécrosante'],
      ['ofloxacine', 'alternative', 'Gouttes auriculaires'],
      ['clotrimazole', 'premiere', 'Otomycose'],
      ['miconazole-nitrate', 'alternative', 'Otomycose'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'alternative', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Otite externe nécrosante',
        description: 'Diabétique.',
        traitement: '- Antibiotiques prolongés',
        clinique: '- Douleur intense, paralysie faciale',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Périchondrite',
        description: 'Extension au cartilage.',
        traitement: '- Antibiotiques',
        clinique: '- Pavillon rouge et douloureux',
        paraclinique: '',
      },
      {
        nom: 'Sténose du conduit',
        description: 'Otites récidivantes.',
        traitement: '- Chirurgie',
        clinique: '- Hypoacousie',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Guérison en une semaine sous traitement local ; forme nécrosante grave',
    urgences: [],
    symptomes: [
      ['Otalgie', 'tres_frequent'],
      ['Otorrhée', 'frequent'],
      ['Prurit', 'frequent'],
      ['Hypoacousie', 'occasionnel'],
    ],
    sources: ['IDSA — recommandations de pratique clinique', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: ['- Nettoyage, gouttes, antalgiques', '- Diabétique avec douleur intense, paralysie faciale'],
      hgr: ['- Otoscopie, prélèvement', ''],
      tert: ['- ORL, scanner', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Otite externe bactérienne',
        type: 'commune',
        description: 'Baignades.',
        terrain: '- Nageur, climat chaud',
        fonctionnels: '- Otalgie, otorrhée',
        generaux: '',
        physiques: '- Douleur à la traction du pavillon',
        paraclinique: '',
        etiologies: '- Pseudomonas',
        syndromes: [],
      },
      {
        nom: 'Otomycose',
        type: 'etiologique',
        description: 'Champignons.',
        terrain: '',
        fonctionnels: '- Prurit',
        generaux: '',
        physiques: '- Dépôts blancs ou noirs',
        paraclinique: '',
        etiologies: '- Aspergillus, Candida',
        syndromes: [],
      },
      {
        nom: 'Otite externe nécrosante',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Diabétique âgé',
        fonctionnels: '- Douleur intense',
        generaux: '',
        physiques: '- Granulations, paralysie faciale',
        paraclinique: '- Ostéite',
        etiologies: '- Pseudomonas',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Surdité
  {
    ...ORL,
    slug: 'surdite',
    nom: 'Surdité',
    resume:
      'Baisse de l’audition, de transmission (oreille externe et moyenne : bouchon de cérumen, otites, perforation, otite séromuqueuse, otospongiose) ou de perception (oreille interne et nerf : presbyacousie, bruit, méningite, oreillons, rougeole, rubéole et CMV congénitaux, médicaments ototoxiques — aminosides, quinine, antituberculeux injectables —, surdité brusque) ; chez l’enfant, retentissement sur le langage et la scolarité : dépistage néonatal et repérage précoce ; otoscopie, acoumétrie (diapason), audiométrie ; traitement de la cause, appareillage, implant cochléaire (centre spécialisé), langue des signes, prévention (vaccinations, éviter les ototoxiques, protection contre le bruit).',
    definition:
      'Diminution de l’acuité auditive, uni- ou bilatérale, de transmission, de perception ou mixte, de degré léger à profond.',
    physiopathologie:
      '## Transmission\n- **Bouchon de cérumen**, corps étranger, **otite moyenne aiguë** et **séromuqueuse**, **otite moyenne chronique** (perforation, cholestéatome), otospongiose\n\n## Perception\n- **Congénitales** : rubéole, CMV, syphilis, génétiques, prématurité, ictère nucléaire, asphyxie\n- **Acquises** : **méningite**, **oreillons**, rougeole, **ototoxiques** (gentamicine, streptomycine, kanamycine, quinine à forte dose, cisplatine), **bruit**, **presbyacousie**, traumatisme, surdité brusque (virale, vasculaire)',
    diagnostic:
      '## Repérage\n- Nouveau-né : réaction aux bruits, dépistage néonatal (otoémissions) si disponible\n- Enfant : **retard de langage**, inattention, difficultés scolaires\n- Adulte : difficulté dans le bruit, monte le volume, **acouphènes**, vertiges\n\n## Examen\n- **Otoscopie** (bouchon, otite, perforation)\n- **Acoumétrie** au diapason (Rinne, Weber)\n- **Audiométrie** tonale et vocale (type et degré)\n- Surdité brusque unilatérale : **urgence** (corticoïdes dans les 72 h)\n- Imagerie (scanner, IRM) selon le contexte',
    examens: [
      ['confirmation', 'audiometrie', 'Type et degré.'],
      ['premiere_intention', 'otoscopie', 'Bouchon, otite, perforation.'],
      ['deuxieme_intention', 'scanner-cervico-facial', 'Rochers, malformations.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Surdité unilatérale de perception.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis.'],
    ],
    scores: [],
    differentiels: [
      ['otite-moyenne-chronique', 'Surdité de transmission par perforation.'],
      ['hypertrophie-adenoidienne', 'Otite séromuqueuse de l’enfant.'],
      ['deficience-intellectuelle', 'Retard de langage d’autre cause.'],
      ['troubles-du-spectre-autistique', 'Troubles de la communication.'],
    ],
    etiologies:
      '## Causes\n- Cérumen, otites, méningite, oreillons, rubéole et CMV congénitaux, ototoxiques, bruit, âge',
    principes: [
      [
        'Causes curables',
        'Traiter.',
        '- **Bouchon de cérumen** : ramollissement (huile), lavage\n- **Otites** : traitement ; otite séromuqueuse persistante : aérateurs\n- Perforation : tympanoplastie ; otospongiose : chirurgie\n- **Surdité brusque** : **corticoïdes** (prednisolone 1 mg/kg/j 7–10 jours) le plus tôt possible',
      ],
      [
        'Surdité permanente',
        'Réhabiliter.',
        '- **Appareils auditifs**, **implant cochléaire** (surdité profonde de l’enfant, centre spécialisé)\n- **Langue des signes**, orthophonie, scolarisation adaptée, inclusion',
      ],
      [
        'Prévention',
        'Agir en amont.',
        '- Vaccinations (**rougeole-rubéole**, oreillons, **méningocoque**, **pneumocoque**, Hib)\n- Traitement rapide des otites et méningites (dexaméthasone dans la méningite à pneumocoque)\n- **Éviter et surveiller les ototoxiques** (audiométrie sous aminosides ou antituberculeux injectables)\n- Protection contre le bruit',
      ],
    ],
    molecules: [
      ['prednisolone', 'alternative', 'Surdité brusque'],
      ['amoxicilline', 'alternative', 'Otite moyenne aiguë'],
      ['vaccin-rougeole-rubeole', 'premiere', 'Prévention'],
      ['vaccin-pneumococcique-conjugue', 'premiere', 'Prévention des méningites'],
    ],
    complications: [
      {
        nom: 'Retard de langage et échec scolaire',
        fiche: 'deficience-intellectuelle',
        description: 'Surdité de l’enfant non dépistée.',
        traitement: '- Appareillage, orthophonie',
        clinique: '- Retard de langage',
        paraclinique: '',
      },
      {
        nom: 'Isolement social et dépression',
        fiche: 'depression',
        description: 'Surdité de l’adulte et de l’âgé.',
        traitement: '- Appareillage, soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Surdités de transmission souvent curables ; surdités de perception définitives, compensées par l’appareillage',
    urgences: [],
    symptomes: [
      ['Hypoacousie', 'tres_frequent'],
      ['Acouphènes', 'frequent'],
      ['Troubles du langage', 'frequent'],
      ['Vertiges', 'occasionnel'],
      ['Otorrhée', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Repérage, otoscopie, retrait de bouchon, traitement des otites',
        '- Surdité brusque, enfant sans langage',
      ],
      hgr: ['- Audiométrie, ORL', ''],
      tert: ['- Appareillage, implant cochléaire, chirurgie otologique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Surdité de transmission',
        type: 'commune',
        description: 'Oreille externe et moyenne.',
        terrain: '- Enfant, otites',
        fonctionnels: '- Hypoacousie',
        generaux: '',
        physiques: '- Bouchon, perforation, otite séromuqueuse',
        paraclinique: '- Audiométrie : transmission',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Surdité de perception de l’enfant',
        type: 'gravite',
        description: 'Retard de langage.',
        terrain: '- Méningite, rubéole congénitale, ototoxiques',
        fonctionnels: '- Absence de langage',
        generaux: '',
        physiques: '',
        paraclinique: '- Audiométrie : perception',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Surdité brusque',
        type: 'evolutive',
        description: 'Urgence.',
        terrain: '- Adulte',
        fonctionnels: '- Baisse brutale unilatérale, acouphènes',
        generaux: '',
        physiques: '- Otoscopie normale',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cancers ORL
  {
    ...ORL,
    slug: 'cancers-orl',
    nom: 'Cancers ORL',
    resume:
      'Cancers des voies aérodigestives supérieures (cavité buccale, pharynx, larynx : surtout carcinomes épidermoïdes liés au tabac, à l’alcool et aux HPV ; cancer du cavum lié à l’EBV ; cancers des sinus ; lymphomes ; lymphome de Burkitt de l’enfant) : ulcération buccale ne guérissant pas, dysphonie persistante (> 3 semaines), dysphagie, otalgie réflexe, adénopathie cervicale, obstruction nasale unilatérale avec épistaxis ; examen ORL, nasofibroscopie, biopsie, scanner ; chirurgie, radiothérapie ± chimiothérapie (cisplatine) ; trachéotomie si dyspnée ; nutrition ; prévention : arrêt tabac-alcool.',
    definition:
      'Tumeurs malignes des voies aérodigestives supérieures (cavité buccale, oropharynx, hypopharynx, larynx, nasopharynx, fosses nasales et sinus) et des glandes salivaires.',
    physiopathologie:
      '## Facteurs\n- **Tabac** (fumé, chiqué), **alcool**, mastication de noix d’arec\n- **HPV** (oropharynx), **EBV** (cavum), mauvaise hygiène bucco-dentaire, VIH\n\n## Extension\n- Locale, **ganglionnaire cervicale** (précoce), métastases (poumons)\n- Seconds cancers des voies aérodigestives et du poumon',
    diagnostic:
      '## Signes d’alerte (> 3 semaines)\n- **Ulcération** ou bourgeon buccal qui ne cicatrise pas, leucoplasie\n- **Dysphonie** persistante (larynx), **dysphagie**, odynophagie\n- **Otalgie réflexe**, **adénopathie cervicale** dure\n- Obstruction nasale unilatérale, **épistaxis**, otite séromuqueuse unilatérale de l’adulte (cavum)\n- Dyspnée, stridor (larynx), amaigrissement\n\n## Examens\n- Examen ORL complet, **nasofibroscopie**, **biopsie**\n- **Scanner** cervico-facial et thoracique (extension), cytoponction d’une adénopathie\n- Bilan dentaire avant radiothérapie, état nutritionnel, test VIH',
    examens: [
      ['confirmation', 'biopsie-histologie', 'Carcinome.'],
      ['premiere_intention', 'nasofibroscopie', 'Lésion, biopsie.'],
      ['gravite', 'scanner-cervico-facial', 'Extension locale, ganglions.'],
      ['gravite', 'scanner-thoracique', 'Métastases, second cancer.'],
      ['premiere_intention', 'cytoponction-ganglionnaire', 'Adénopathie cervicale.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'radiographie-dentaire-panoramique', 'Bilan dentaire avant radiothérapie.'],
    ],
    scores: [],
    differentiels: [
      ['lymphome-de-burkitt', 'Tumeur maxillaire de l’enfant.'],
      ['lymphomes-non-hodgkiniens-adulte', 'Adénopathies, masse amygdalienne.'],
      ['tuberculose-extrapulmonaire', 'Adénopathie cervicale tuberculeuse.'],
      ['candidose-oropharyngee-et-oesophagienne', 'Lésions blanches buccales.'],
      ['noma', 'Gangrène orofaciale de l’enfant.'],
    ],
    etiologies: '## Facteurs\n- Tabac, alcool, HPV, EBV, mauvaise hygiène bucco-dentaire, VIH',
    principes: [
      [
        'Traitement',
        'Centre spécialisé.',
        '- Formes localisées : **chirurgie** (exérèse, curage ganglionnaire) ou **radiothérapie**\n- Formes avancées : **radiochimiothérapie** (**cisplatine**), chirurgie de rattrapage\n- **Cavum** : radiochimiothérapie\n- Soins dentaires avant radiothérapie',
      ],
      [
        'Soins de support',
        'Accompagner.',
        '- **Trachéotomie** si obstruction des voies aériennes, **gastrostomie** ou sonde si dysphagie\n- **Nutrition**, antalgiques (morphine), soins de bouche, soins palliatifs',
      ],
      [
        'Prévention et dépistage',
        'Agir tôt.',
        '- **Arrêt du tabac et de l’alcool**, hygiène bucco-dentaire, vaccination HPV\n- Examen de la bouche ; biopsie de toute lésion persistante > 3 semaines',
      ],
    ],
    molecules: [
      ['cisplatine', 'premiere', 'Radiochimiothérapie (centre spécialisé)'],
      ['fluorouracile', 'alternative', 'Chimiothérapie'],
      ['methotrexate', 'alternative', 'Chimiothérapie palliative'],
      ['morphine', 'adjuvant', 'Douleurs'],
    ],
    complications: [
      {
        nom: 'Obstruction des voies aériennes',
        description: 'Cancer du larynx, du pharynx.',
        traitement: '- Trachéotomie',
        clinique: '- Dyspnée, stridor',
        paraclinique: '',
      },
      {
        nom: 'Dénutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Dysphagie.',
        traitement: '- Sonde, gastrostomie',
        clinique: '- Amaigrissement',
        paraclinique: '',
      },
      {
        nom: 'Hémorragie',
        fiche: 'epistaxis',
        description: 'Érosion vasculaire.',
        traitement: '- Compression, ligature',
        clinique: '- Saignement',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 5 ans > 70 % aux stades précoces, < 30 % aux stades avancés (diagnostic souvent tardif en RDC)',
    urgences: [],
    symptomes: [
      ['Dysphonie', 'frequent'],
      ['Dysphagie', 'frequent'],
      ['Tuméfaction cervicale', 'frequent'],
      ['Otalgie', 'occasionnel'],
      ['Épistaxis', 'occasionnel'],
      ['Perte de poids', 'frequent'],
    ],
    sources: [
      'NCCN — recommandations de pratique clinique',
      'ESMO — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Repérer les signes d’alerte > 3 semaines, orientation', ''],
      hgr: ['- Examen ORL, biopsie, trachéotomie', ''],
      tert: ['- Chirurgie, radiothérapie, chimiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Cancer de la cavité buccale',
        type: 'commune',
        description: 'Tabac, alcool.',
        terrain: '- Adulte fumeur',
        fonctionnels: '- Ulcération douloureuse',
        generaux: '',
        physiques: '- Ulcération indurée',
        paraclinique: '- Biopsie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Cancer du larynx avec dyspnée',
        type: 'gravite',
        description: 'Obstruction.',
        terrain: '- Fumeur',
        fonctionnels: '- Dysphonie, stridor',
        generaux: '',
        physiques: '',
        paraclinique: '- Nasofibroscopie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Cancer du cavum',
        type: 'etiologique',
        description: 'EBV.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Obstruction nasale, otite séromuqueuse unilatérale',
        generaux: '',
        physiques: '- Adénopathie cervicale',
        paraclinique: '',
        etiologies: '- EBV',
        syndromes: [],
      },
    ],
  },
];
