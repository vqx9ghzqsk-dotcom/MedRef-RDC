'use strict';

/**
 * Lot 13 (pneumologie et cardiologie pédiatriques) — laryngite aiguë (croup), corps étranger
 * des voies aériennes, pleurésie purulente de l'enfant, cardiopathies congénitales,
 * insuffisance cardiaque de l'enfant, rhumatisme articulaire aigu de l'enfant.
 * Rédigé par IA (OMS, AAP, AHA, World Heart Federation) : à valider.
 */

const PNEUPED = { departement: 'pediatrie', specialite: 'Pneumologie pédiatrique' };
const CARDIOPED = { departement: 'pediatrie', specialite: 'Cardiologie pédiatrique' };

module.exports = [
  // =================================================================== Croup
  {
    ...PNEUPED,
    slug: 'laryngite-aigue-croup',
    nom: 'Laryngite aiguë (croup)',
    resume:
      'Laryngite virale sous-glottique de l’enfant de 6 mois à 3 ans : toux aboyante, voix rauque, stridor inspiratoire, souvent la nuit ; dexaméthasone dose unique, adrénaline nébulisée si stridor au repos ; ne pas examiner la gorge en force.',
    definition:
      'Inflammation virale aiguë du larynx et de la trachée (laryngotrachéite), responsable d’une obstruction sous-glottique ; le croup est la cause la plus fréquente de stridor aigu chez l’enfant.',
    physiopathologie:
      '## Mécanismes\n- Virus parainfluenza surtout, VRS, grippe, rougeole\n- Œdème sous-glottique : rétrécissement de la filière, stridor inspiratoire, tirage',
    diagnostic:
      '## Clinique\n- Rhinite fébrile puis, souvent la nuit : **toux aboyante** (« rauque »), **dysphonie**, **stridor inspiratoire**\n- Signes de lutte : tirage sus-sternal, battement des ailes du nez\n\n## Gravité\n- Légère : stridor seulement à l’agitation\n- Modérée à sévère : **stridor au repos**, tirage, agitation\n- Menaçante : léthargie, cyanose, SpO2 < 92 %, diminution du murmure\n\n## Éliminer\n- **Épiglottite** (enfant toxique, hypersalivation, position assise penchée) : ne pas allonger ni examiner la gorge\n- Corps étranger, diphtérie, abcès rétropharyngé',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'Gravité.'],
      [
        'etiologique',
        'prelevement-de-gorge',
        'Suspicion de diphtérie (enfant non vacciné, fausses membranes).',
      ],
    ],
    scores: [],
    differentiels: [
      ['Épiglottite', 'Fièvre élevée, enfant toxique, hypersalivation, dysphagie, absence de toux aboyante.'],
      ['corps-etranger-voies-aeriennes', 'Début brutal, syndrome de pénétration, pas de fièvre.'],
      ['diphterie', 'Fausses membranes, enfant non vacciné.'],
      ['Abcès rétropharyngé', 'Torticolis, dysphagie, fièvre.'],
      ['Anaphylaxie', 'Urticaire, œdème du visage.'],
    ],
    etiologies:
      '## Causes\n- Virus parainfluenza (75 %), VRS, adénovirus, grippe, rougeole, SARS-CoV-2\n\n## Terrain\n- Enfant de 6 mois à 3 ans, automne et saison des pluies',
    principes: [
      [
        'Corticoïde',
        'Réduire l’œdème.',
        '- **Dexaméthasone** 0,15 à 0,6 mg/kg per os ou IM en **dose unique** (maximum 16 mg) ; à défaut prednisolone 1–2 mg/kg\n- Ou **budésonide** nébulisé 2 mg',
      ],
      [
        'Stridor au repos',
        'Lever l’obstruction.',
        '- **Adrénaline nébulisée** 0,5 mL/kg de la solution à 1 mg/mL (maximum 5 mL), effet en 10–30 min, surveillance ≥ 2–4 h (effet rebond)\n- **Oxygène** si SpO2 < 92 %\n- Enfant calme, dans les bras du parent ; pas d’examen agressif de la gorge',
      ],
      [
        'Signes de menace vitale',
        'Sécuriser les voies aériennes.',
        '- Adrénaline répétée, oxygène, intubation par un opérateur expérimenté (sonde plus petite)',
      ],
      [
        'Retour à domicile',
        'Conseils.',
        '- Forme légère : dexaméthasone, paracétamol, air humide sans preuve, revenir si stridor au repos',
      ],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Dose unique'],
      ['budesonide', 'alternative', 'Nébulisation'],
      ['prednisolone', 'alternative', 'À défaut de dexaméthasone'],
      ['adrenaline-epinephrine', 'premiere', 'Nébulisation si stridor au repos'],
      ['oxygene', 'premiere', 'SpO2 < 92 %'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Obstruction des voies aériennes',
        description: 'Croup sévère.',
        traitement: '- Adrénaline, intubation',
        clinique: '- Stridor intense, cyanose, épuisement',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Trachéite bactérienne',
        description: 'Surinfection (staphylocoque).',
        traitement: '- Antibiotiques IV, intubation',
        clinique: '- Fièvre élevée, aggravation',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Guérison en 2 à 5 jours ; hospitalisation rare, intubation exceptionnelle',
    urgences: [],
    symptomes: [
      ['Stridor', 'tres_frequent'],
      ['Toux', 'tres_frequent'],
      ['Dysphonie', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Tachypnée', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'AAP — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Dexaméthasone, conseils, transfert si stridor au repos',
        '- Stridor au repos, détresse, doute avec une épiglottite ou une diphtérie',
      ],
      hgr: ['- Adrénaline nébulisée, oxygène, surveillance', '- Menace vitale'],
      tert: ['- Réanimation pédiatrique, ORL', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Croup léger à modéré',
        type: 'commune',
        description: 'Toux aboyante nocturne.',
        terrain: '- Enfant de 6 mois à 3 ans',
        fonctionnels: '- Toux aboyante, voix rauque',
        generaux: '- Fébricule',
        physiques: '- Stridor à l’agitation',
        paraclinique: '- SpO2 normale',
        etiologies: '- Parainfluenza',
        syndromes: [],
      },
      {
        nom: 'Croup sévère',
        type: 'gravite',
        description: 'Obstruction marquée.',
        terrain: '- Nourrisson',
        fonctionnels: '- Agitation',
        generaux: '- Tachycardie',
        physiques: '- Stridor au repos, tirage, cyanose',
        paraclinique: '- SpO2 < 92 %',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Corps étranger
  {
    ...PNEUPED,
    slug: 'corps-etranger-voies-aeriennes',
    nom: 'Corps étranger des voies aériennes',
    resume:
      'Inhalation d’un objet (arachide, graine, petit jouet) chez l’enfant de 1 à 3 ans : syndrome de pénétration ; asphyxie = manœuvres de désobstruction (tapes dans le dos, compressions) ; sinon bronchoscopie.',
    definition:
      'Présence d’un corps étranger inhalé dans le larynx, la trachée ou les bronches, cause importante de décès accidentel du jeune enfant.',
    physiopathologie:
      '## Mécanismes\n- Inhalation lors d’un éclat de rire, d’une chute ou d’un pleur avec un objet en bouche\n- Obstruction complète (asphyxie) ou partielle\n- Corps étranger bronchique : emphysème obstructif (valve), atélectasie, infections récidivantes (graines végétales irritantes)',
    diagnostic:
      '## Syndrome de pénétration\n- Accès brutal de suffocation, toux, cyanose chez un enfant auparavant sain, souvent pendant un repas ou un jeu\n- Parfois non vu : à rechercher à l’interrogatoire\n\n## Ensuite\n- Toux persistante, wheezing unilatéral, diminution unilatérale du murmure\n- Pneumonies récidivantes du même territoire\n\n## Imagerie\n- Radiographie en inspiration et expiration : distension unilatérale, atélectasie ; objet radio-opaque\n- Radiographie normale n’élimine pas le diagnostic',
    examens: [
      [
        'premiere_intention',
        'radiographie-thoracique',
        'Inspiration et expiration : piégeage, atélectasie, objet radio-opaque.',
      ],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Retentissement.'],
    ],
    scores: [],
    differentiels: [
      ['asthme-enfant', 'Sifflements bilatéraux récidivants.'],
      ['laryngite-aigue-croup', 'Contexte viral, fièvre, toux aboyante.'],
      ['pneumonie-enfant', 'Fièvre ; pneumonies récidivantes du même lobe : penser corps étranger.'],
    ],
    etiologies:
      '## Objets\n- Arachides, graines, haricots, maïs, petits jouets, perles, pièces\n\n## Facteurs\n- Âge de 1 à 3 ans, absence de molaires, aliments durs, surveillance insuffisante',
    principes: [
      [
        'Obstruction complète (enfant qui ne peut ni tousser ni parler)',
        'Désobstruer.',
        '- **Nourrisson < 1 an** : 5 tapes dans le dos (tête en bas) puis 5 compressions thoraciques, alterner\n- **Enfant > 1 an** : 5 tapes dans le dos puis 5 compressions abdominales (manœuvre de Heimlich)\n- Perte de conscience : réanimation cardio-pulmonaire, regarder dans la bouche avant les insufflations\n- Ne pas introduire les doigts à l’aveugle',
      ],
      [
        'Obstruction partielle (enfant qui tousse)',
        'Ne pas aggraver.',
        '- Laisser tousser, position assise, oxygène\n- Ne pas tenter de manœuvre ; transfert urgent vers une structure pouvant faire une bronchoscopie',
      ],
      [
        'Bronchoscopie',
        'Retirer l’objet.',
        '- Bronchoscopie rigide sous anesthésie générale en centre spécialisé\n- Antibiotiques si surinfection, kinésithérapie',
      ],
      [
        'Prévention',
        'Éviter l’accident.',
        '- Pas d’arachides ni de petits objets avant 4 ans, surveillance pendant les repas',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'Obstruction partielle'],
      ['amoxicilline', 'adjuvant', 'Surinfection après extraction'],
      ['dexamethasone', 'adjuvant', 'Œdème après extraction'],
    ],
    complications: [
      {
        nom: 'Asphyxie et arrêt cardiaque',
        description: 'Obstruction complète.',
        traitement: '- Désobstruction, RCP',
        clinique: '- Cyanose, perte de conscience',
        paraclinique: '',
      },
      {
        nom: 'Pneumonies récidivantes et bronchectasies',
        fiche: 'pneumonie-enfant',
        description: 'Corps étranger méconnu.',
        traitement: '- Extraction, antibiotiques',
        clinique: '- Toux chronique',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Pneumothorax',
        fiche: 'pneumothorax-spontane',
        description: 'Effet de valve.',
        traitement: '- Drainage',
        clinique: '- Détresse',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent après extraction ; décès possible en cas d’obstruction complète sans geste immédiat',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Cyanose', 'frequent'],
      ['Sibilants', 'frequent'],
      ['Stridor', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Gestes de désobstruction, oxygène, transfert', '- Tout syndrome de pénétration'],
      hgr: ['- Radiographie, surveillance, transfert pour bronchoscopie', ''],
      tert: ['- Bronchoscopie rigide, ORL pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Corps étranger bronchique',
        type: 'commune',
        description: 'Toux persistante après un syndrome de pénétration.',
        terrain: '- Enfant de 1 à 3 ans, arachides',
        fonctionnels: '- Toux, sifflement',
        generaux: '',
        physiques: '- Diminution unilatérale du murmure, wheezing localisé',
        paraclinique: '- Distension ou atélectasie unilatérale',
        etiologies: '- Inhalation',
        syndromes: ['syndrome-bronchique-obstructif'],
        examens: [['radiographie-thoracique', 'Inspiration-expiration']],
      },
      {
        nom: 'Corps étranger laryngo-trachéal',
        type: 'gravite',
        description: 'Asphyxie.',
        terrain: '- Objet volumineux',
        fonctionnels: '- Ne peut ni tousser ni parler',
        generaux: '- Cyanose',
        physiques: '- Tirage majeur, stridor',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Pleurésie enfant
  {
    ...PNEUPED,
    slug: 'pleuresie-purulente-enfant',
    nom: 'Pleurésie purulente de l’enfant',
    resume:
      'Complication d’une pneumonie (staphylocoque, pneumocoque) : fièvre persistante, matité, douleur ; radiographie, échographie, ponction ; drainage thoracique et antibiotiques IV prolongés (cloxacilline + ceftriaxone).',
    definition:
      'Épanchement pleural purulent (empyème) compliquant une infection pulmonaire chez l’enfant, avec un risque de cloisonnement et de pyopneumothorax (staphylococcie pleuro-pulmonaire).',
    physiopathologie:
      '## Mécanismes\n- Extension d’une pneumonie à la plèvre\n- Phase exsudative puis fibrino-purulente (cloisons) puis organisation (épaississement)\n- Staphylocoque : bulles, pyopneumothorax',
    diagnostic:
      '## Clinique\n- Pneumonie dont la **fièvre persiste** malgré 48–72 h d’antibiotiques\n- Douleur thoracique ou abdominale, dyspnée, toux\n- **Matité**, diminution du murmure vésiculaire\n- État général altéré, malnutrition souvent associée\n\n## Paraclinique\n- Radiographie : opacité déclive, déviation médiastinale, niveau hydro-aérique (pyopneumothorax)\n- **Échographie** : épanchement, cloisons\n- **Ponction** : pus, Gram, culture, Xpert (tuberculose)',
    examens: [
      ['confirmation', 'radiographie-thoracique', 'Épanchement, pyopneumothorax.'],
      ['confirmation', 'ponction-epanchement', 'Pus, germes, Xpert.'],
      ['premiere_intention', 'hemocultures', 'Germe.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose, anémie.'],
      ['premiere_intention', 'crp', 'Suivi.'],
      ['premiere_intention', 'tdr-vih', 'Terrain.'],
      ['etiologique', 'xpert-mtb-rif', 'Pleurésie tuberculeuse.'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-enfant', 'Épanchement lymphocytaire, évolution lente, contage.'],
      ['pneumonie-enfant', 'Condensation sans épanchement.'],
      ['Épanchement d’insuffisance cardiaque ou néphrotique', 'Transsudat bilatéral.'],
    ],
    etiologies:
      '## Germes\n- *Staphylococcus aureus* (staphylococcie pleuro-pulmonaire du nourrisson), *Streptococcus pneumoniae*, *Haemophilus*, streptocoque A\n- *M. tuberculosis*\n\n## Terrain\n- Malnutrition, rougeole récente, VIH, lésions cutanées infectées',
    principes: [
      [
        'Drainage',
        'Évacuer le pus.',
        '- **Drain thoracique** si pus franc, épanchement abondant ou pyopneumothorax\n- Ponctions répétées si drain impossible\n- Chirurgie (décortication) si cloisonnement et échec',
      ],
      [
        'Antibiotiques IV prolongés',
        'Stériliser.',
        '- **Cloxacilline** 50 mg/kg toutes les 6 h + **ceftriaxone** 80–100 mg/kg/j (ou ampicilline + gentamicine)\n- 3 à 4 semaines au total, relais oral (cloxacilline ou amoxicilline-acide clavulanique) quand l’enfant est apyrétique',
      ],
      [
        'Soutien',
        'Favoriser la récupération.',
        '- Oxygène, antalgiques, nutrition (souvent malnutrition associée), kinésithérapie',
      ],
    ],
    molecules: [
      ['cloxacilline', 'premiere', 'Staphylocoque'],
      ['ceftriaxone', 'premiere', 'Pneumocoque, Gram négatifs'],
      ['ampicilline', 'alternative', 'Avec gentamicine'],
      ['gentamicine', 'alternative', 'Avec ampicilline'],
      ['oxygene', 'adjuvant', 'Hypoxémie'],
      ['paracetamol', 'adjuvant', 'Douleur, fièvre'],
    ],
    complications: [
      {
        nom: 'Pyopneumothorax',
        description: 'Staphylocoque.',
        traitement: '- Drainage urgent',
        clinique: '- Détresse brutale',
        paraclinique: '- Niveau hydro-aérique',
      },
      {
        nom: 'Pachypleurite',
        description: 'Organisation de l’empyème.',
        traitement: '- Kinésithérapie, décortication',
        clinique: '- Rétraction thoracique',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-enfant',
        description: 'Diffusion.',
        traitement: '- Antibiotiques IV',
        clinique: '- Choc',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec drainage et antibiothérapie prolongée ; mortalité plus élevée chez le nourrisson malnutri',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Toux', 'frequent'],
      ['Douleur thoracique', 'frequent'],
      ['Tachypnée', 'frequent'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Suspicion devant une pneumonie qui ne guérit pas, première dose et transfert',
        '- Toute suspicion',
      ],
      hgr: ['- Radiographie, ponction, drainage, antibiotiques IV', '- Cloisonnement'],
      tert: ['- Chirurgie thoracique pédiatrique', ''],
    },
    alertes: { 'choc-septique': 'Enfant avec pleurésie, fièvre, extrémités froides ou léthargie' },
    formes: [
      {
        nom: 'Empyème compliquant une pneumonie',
        type: 'commune',
        description: 'Fièvre persistante et matité.',
        terrain: '- Enfant malnutri, pneumonie récente',
        fonctionnels: '- Toux, douleur',
        generaux: '- Fièvre persistante',
        physiques: '- Matité, murmure diminué',
        paraclinique: '- Pus à la ponction',
        etiologies: '- Staphylocoque, pneumocoque',
        syndromes: ['syndrome-d-epanchement-pleural-liquidien', 'syndrome-infectieux'],
        examens: [['ponction-epanchement', 'Confirmation']],
      },
      {
        nom: 'Staphylococcie pleuro-pulmonaire du nourrisson',
        type: 'gravite',
        description: 'Bulles et pyopneumothorax.',
        terrain: '- Nourrisson, infection cutanée',
        fonctionnels: '- Ballonnement abdominal',
        generaux: '- Fièvre, altération',
        physiques: '- Détresse respiratoire',
        paraclinique: '- Bulles, niveaux hydro-aériques',
        etiologies: '- S. aureus',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Cardiopathies congénitales
  {
    ...CARDIOPED,
    slug: 'cardiopathies-congenitales',
    nom: 'Cardiopathies congénitales',
    resume:
      'Malformations cardiaques (1 % des naissances) : shunts gauche-droite (CIV, CAV, canal artériel) avec insuffisance cardiaque, cardiopathies cyanogènes (tétralogie de Fallot) ; souffle, cyanose, cassure pondérale ; échocardiographie, traitement médical, chirurgie.',
    definition:
      'Anomalies de structure du cœur ou des gros vaisseaux présentes dès la naissance, classées en cardiopathies non cyanogènes (shunts gauche-droite, obstacles) et cyanogènes (shunt droite-gauche).',
    physiopathologie:
      '## Mécanismes\n- **Shunt gauche-droite** (CIV, CIA, canal artériel, canal atrioventriculaire) : hyperdébit pulmonaire, insuffisance cardiaque, hypertension pulmonaire puis inversion du shunt (Eisenmenger)\n- **Shunt droite-gauche** (Fallot, transposition) : cyanose, polyglobulie, malaises anoxiques\n- **Obstacles** (sténose pulmonaire, coarctation)',
    diagnostic:
      '## Signes évocateurs\n- **Souffle** cardiaque, **cyanose** (SpO2 < 95 %), polypnée, sueurs et fatigue aux tétées, cassure pondérale\n- Infections respiratoires répétées, hépatomégalie\n- Pouls fémoraux faibles (coarctation)\n- Malaises anoxiques (Fallot) : cyanose intense, agitation, puis perte de connaissance\n- Trisomie 21 (canal atrioventriculaire fréquent), rubéole congénitale\n\n## Dépistage\n- Oxymétrie de pouls pré- et post-ductale chez le nouveau-né\n\n## Confirmation\n- **Échocardiographie**',
    examens: [
      ['confirmation', 'echocardiographie', 'Type de malformation, pressions pulmonaires.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Cyanose ; dépistage néonatal.'],
      ['premiere_intention', 'radiographie-thoracique', 'Cardiomégalie, vascularisation pulmonaire.'],
      ['premiere_intention', 'ecg', 'Hypertrophies, axe.'],
      ['premiere_intention', 'nfs', 'Polyglobulie (cyanogène), anémie (à corriger).'],
    ],
    scores: [],
    differentiels: [
      ['Souffle fonctionnel', 'Souffle doux, systolique, variable, enfant asymptomatique.'],
      ['rhumatisme-articulaire-aigu-enfant', 'Souffle acquis, enfant plus grand, antécédent d’angine.'],
      ['Pneumopathie et cyanose respiratoire', 'Cyanose corrigée par l’oxygène.'],
    ],
    etiologies:
      '## Facteurs\n- Anomalies chromosomiques (trisomie 21), syndromes génétiques\n- Rubéole congénitale, diabète maternel, alcool, certains médicaments pendant la grossesse (valproate)\n- Souvent aucune cause identifiée',
    principes: [
      [
        'Insuffisance cardiaque des shunts',
        'Soutenir la croissance.',
        '- **Furosémide** 1–2 mg/kg/j, **spironolactone**, **captopril** (ou énalapril)\n- Enrichissement calorique, alimentation fractionnée (sonde si besoin)\n- Traitement de l’anémie, vaccinations (pneumocoque, grippe)',
      ],
      [
        'Cardiopathies cyanogènes',
        'Prévenir les malaises.',
        '- Malaise anoxique : position genoux-poitrine, oxygène, **morphine**, remplissage, **propranolol**\n- Éviter la déshydratation, traiter la carence martiale',
      ],
      [
        'Chirurgie et cathétérisme',
        'Corriger la malformation.',
        '- Orientation précoce vers un centre de chirurgie cardiaque pédiatrique (programmes humanitaires)\n- Avant l’apparition de l’hypertension pulmonaire fixée',
      ],
      [
        'Prévention',
        'Réduire les cardiopathies.',
        '- Vaccination contre la rubéole, suivi des grossesses diabétiques\n- Prophylaxie de l’endocardite avant soins dentaires dans les cardiopathies cyanogènes',
      ],
    ],
    molecules: [
      ['furosemide', 'premiere', 'Insuffisance cardiaque'],
      ['spironolactone', 'premiere', 'Associée au furosémide'],
      ['captopril', 'premiere', 'Shunts gauche-droite'],
      ['enalapril', 'alternative', 'Shunts gauche-droite'],
      ['propranolol', 'adjuvant', 'Prévention des malaises (Fallot)'],
      ['oxygene', 'adjuvant', 'Malaise anoxique'],
      ['amoxicilline', 'adjuvant', 'Prophylaxie de l’endocardite'],
    ],
    complications: [
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Shunts importants.',
        traitement: '- Diurétiques, IEC',
        clinique: '- Polypnée, hépatomégalie',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Hypertension pulmonaire (Eisenmenger)',
        description: 'Shunt non opéré.',
        traitement: '- Inopérable à ce stade',
        clinique: '- Cyanose tardive',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Endocardite infectieuse',
        fiche: 'endocardite-infectieuse',
        description: 'Jet de shunt.',
        traitement: '- Antibiotiques prolongés',
        clinique: '- Fièvre prolongée',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Abcès cérébral et AVC',
        description: 'Cardiopathies cyanogènes.',
        traitement: '- Antibiotiques, neurochirurgie',
        clinique: '- Déficit, convulsions',
        paraclinique: '- Scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent après chirurgie précoce ; mortalité élevée sans accès à la chirurgie',
    urgences: ['oedeme-aigu-du-poumon'],
    symptomes: [
      ['Cyanose', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Retard de croissance', 'frequent'],
      ['Refus de téter', 'frequent'],
      ['Sueurs', 'frequent'],
      ['Toux', 'occasionnel'],
    ],
    sources: [
      'AHA — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Repérer souffle, cyanose, polypnée aux tétées ; transfert',
        '- Toute suspicion de cardiopathie',
      ],
      hgr: ['- Échocardiographie, traitement médical', '- Indication chirurgicale'],
      tert: ['- Chirurgie cardiaque pédiatrique, cathétérisme', ''],
    },
    alertes: {
      'oedeme-aigu-du-poumon': 'Nourrisson cardiaque avec détresse respiratoire, sueurs et refus de téter',
    },
    formes: [
      {
        nom: 'Shunt gauche-droite (CIV, canal artériel)',
        type: 'commune',
        description: 'Insuffisance cardiaque du nourrisson.',
        terrain: '- Nourrisson de 1 à 6 mois',
        fonctionnels: '- Essoufflement aux tétées, sueurs',
        generaux: '- Cassure pondérale',
        physiques: '- Souffle, hépatomégalie, polypnée',
        paraclinique: '- Cardiomégalie, hypervascularisation',
        etiologies: '- Malformation',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
        examens: [['echocardiographie', 'Diagnostic']],
      },
      {
        nom: 'Tétralogie de Fallot',
        type: 'etiologique',
        description: 'Cardiopathie cyanogène.',
        terrain: '- Nourrisson, enfant',
        fonctionnels: '- Accroupissement, malaises',
        generaux: '- Cyanose',
        physiques: '- Souffle systolique, hippocratisme digital',
        paraclinique: '- Polyglobulie, cœur en sabot',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== IC enfant
  {
    ...CARDIOPED,
    slug: 'insuffisance-cardiaque-enfant',
    nom: 'Insuffisance cardiaque de l’enfant',
    resume:
      'Polypnée, tachycardie, hépatomégalie, cardiomégalie : cardiopathie congénitale (nourrisson), cardite rhumatismale, cardiomyopathie, anémie sévère (enfant) ; furosémide, IEC, traitement de la cause ; transfusion lente en cas d’anémie.',
    definition:
      'Incapacité du cœur à assurer un débit adapté aux besoins de l’organisme de l’enfant, se traduisant par une congestion et/ou un bas débit.',
    physiopathologie:
      '## Mécanismes\n- Surcharge de volume (shunts, fuites valvulaires, anémie sévère, hydratation excessive)\n- Atteinte du myocarde (myocardite, cardiomyopathie, carence en thiamine)\n- Surcharge de pression (obstacles), troubles du rythme',
    diagnostic:
      '## Clinique\n- Nourrisson : **polypnée**, sueurs et fatigue aux tétées, cassure pondérale\n- **Tachycardie**, galop, souffle\n- **Hépatomégalie** (signe majeur chez l’enfant), turgescence jugulaire (grand enfant), œdèmes tardifs\n- Crépitants, extrémités froides (bas débit)\n\n## Examens\n- Radiographie : cardiomégalie\n- Échocardiographie : cause\n- Hb : anémie sévère',
    examens: [
      ['premiere_intention', 'radiographie-thoracique', 'Cardiomégalie, surcharge pulmonaire.'],
      ['confirmation', 'echocardiographie', 'Cause, fonction ventriculaire.'],
      ['premiere_intention', 'nfs', 'Anémie sévère.'],
      ['premiere_intention', 'ecg', 'Troubles du rythme, hypertrophie.'],
      ['premiere_intention', 'tdr-paludisme', 'Anémie palustre.'],
      ['premiere_intention', 'ionogramme', 'Sous diurétiques.'],
      ['etiologique', 'aslo', 'Rhumatisme articulaire aigu.'],
    ],
    scores: [],
    differentiels: [
      ['pneumonie-enfant', 'Fièvre, foyer ; pas d’hépatomégalie ni de cardiomégalie.'],
      ['bronchiolite-aigue-nourrisson', 'Sibilants, contexte viral.'],
      ['malnutrition-aigue-severe', 'Œdèmes nutritionnels ; risque de surcharge à la réalimentation.'],
      ['syndrome-nephrotique-adulte', 'Œdèmes avec protéinurie massive.'],
    ],
    etiologies:
      '## Nourrisson\n- **Cardiopathies congénitales** (shunts)\n\n## Enfant\n- **Cardite rhumatismale** et valvulopathies\n- **Anémie sévère** (paludisme, drépanocytose)\n- Cardiomyopathies (dilatée, endomyocardiofibrose), myocardites, péricardite tuberculeuse\n- Béribéri (carence en thiamine), glomérulonéphrite avec HTA, surcharge hydrique (transfusion, perfusion, malnutrition)',
    principes: [
      [
        'Mesures urgentes',
        'Soulager la congestion.',
        '- Position demi-assise, **oxygène**\n- **Furosémide** 1 mg/kg IV, à répéter\n- Restriction hydrique modérée, alimentation fractionnée',
      ],
      [
        'Traitement de fond',
        'Améliorer la fonction cardiaque.',
        '- **Captopril** ou **énalapril**, **spironolactone**\n- **Digoxine** dans certaines situations (tachyarythmie)\n- Supplémentation et nutrition',
      ],
      [
        'Traiter la cause',
        'Guérir quand c’est possible.',
        '- **Anémie sévère** : transfusion de culot globulaire 10 mL/kg **lente** avec furosémide\n- Cardite rhumatismale : prednisolone, benzathine pénicilline\n- Thiamine si béribéri ou malnutrition\n- Chirurgie des cardiopathies',
      ],
    ],
    molecules: [
      ['furosemide', 'premiere', 'Congestion'],
      ['captopril', 'premiere', 'IEC'],
      ['enalapril', 'alternative', 'IEC'],
      ['spironolactone', 'premiere', 'Association'],
      ['digoxine', 'alternative', 'Tachyarythmie'],
      ['oxygene', 'premiere', 'Détresse respiratoire'],
      ['vitamine-b1-thiamine', 'adjuvant', 'Béribéri, malnutrition'],
    ],
    complications: [
      {
        nom: 'Œdème aigu du poumon',
        description: 'Décompensation aiguë.',
        traitement: '- Furosémide, oxygène',
        clinique: '- Détresse respiratoire, crépitants',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Troubles du rythme',
        description: 'Dilatation, hypokaliémie.',
        traitement: '- Correction, antiarythmiques',
        clinique: '- Palpitations',
        paraclinique: '- ECG',
      },
      {
        nom: 'Malnutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Hypercatabolisme, apports insuffisants.',
        traitement: '- Enrichissement',
        clinique: '- Cassure de courbe',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause : excellent pour l’anémie, réservé pour les cardiomyopathies et les cardiopathies non opérées',
    urgences: ['oedeme-aigu-du-poumon'],
    symptomes: [
      ['Tachypnée', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Sueurs', 'frequent'],
      ['Œdèmes', 'occasionnel'],
      ['Refus de téter', 'frequent'],
      ['Pâleur', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'AHA — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Reconnaître (polypnée, hépatomégalie), furosémide, transfert',
        '- Toute insuffisance cardiaque',
      ],
      hgr: [
        '- Radiographie, échocardiographie, traitement, transfusion lente',
        '- Chirurgie, cardiopathie complexe',
      ],
      tert: ['- Cardiologie pédiatrique', ''],
    },
    alertes: { 'oedeme-aigu-du-poumon': 'Enfant avec polypnée, crépitants, gros foie et extrémités froides' },
    formes: [
      {
        nom: 'Insuffisance cardiaque du nourrisson',
        type: 'commune',
        description: 'Shunt gauche-droite.',
        terrain: '- Cardiopathie congénitale',
        fonctionnels: '- Essoufflement aux tétées',
        generaux: '- Cassure pondérale',
        physiques: '- Polypnée, hépatomégalie, souffle',
        paraclinique: '- Cardiomégalie',
        etiologies: '- Shunt',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche', 'syndrome-d-insuffisance-cardiaque-droite'],
        examens: [['echocardiographie', 'Cause']],
      },
      {
        nom: 'Insuffisance cardiaque par anémie sévère',
        type: 'etiologique',
        description: 'Haut débit.',
        terrain: '- Paludisme, drépanocytose',
        fonctionnels: '- Essoufflement',
        generaux: '- Pâleur extrême',
        physiques: '- Tachycardie, souffle, hépatomégalie',
        paraclinique: '- Hb < 5 g/dL',
        etiologies: '- Anémie',
        syndromes: ['syndrome-anemique'],
      },
    ],
  },

  // =================================================================== RAA enfant
  {
    ...CARDIOPED,
    slug: 'rhumatisme-articulaire-aigu-enfant',
    nom: 'Rhumatisme articulaire aigu de l’enfant',
    resume:
      'Complication d’une angine streptococcique chez l’enfant de 5 à 15 ans : polyarthrite migratrice, cardite, chorée ; critères de Jones ; aspirine, éradication du streptocoque, prophylaxie secondaire par benzathine pénicilline toutes les 3 à 4 semaines.',
    definition:
      'Maladie inflammatoire post-streptococcique touchant surtout l’enfant de 5 à 15 ans, dont la gravité tient à la cardite et aux séquelles valvulaires (cardiopathie rhumatismale).',
    physiopathologie:
      '## Mécanismes\n- Mimétisme moléculaire entre antigènes du streptocoque A et tissus cardiaques, articulaires et cérébraux\n- Récidives à chaque nouvelle angine : aggravation des lésions valvulaires',
    diagnostic:
      '## Critères de Jones (2015, population à haut risque)\n- **Majeurs** : cardite (clinique ou échographique), arthrite (mono- ou polyarthrite) ou polyarthralgies, **chorée** de Sydenham, érythème marginé, nodules sous-cutanés\n- **Mineurs** : fièvre ≥ 38 °C, monoarthralgie, VS ≥ 30 mm ou CRP ≥ 3 mg/dL, PR allongé\n- 2 majeurs ou 1 majeur + 2 mineurs, avec preuve d’infection streptococcique (ASLO)\n\n## Cardite\n- Souffle d’insuffisance mitrale ou aortique, tachycardie, insuffisance cardiaque, péricardite\n- Échocardiographie (cardite infraclinique)',
    examens: [
      ['confirmation', 'aslo', 'Infection streptococcique récente.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'echocardiographie', 'Cardite, valvulopathie.'],
      ['premiere_intention', 'ecg', 'PR allongé.'],
      ['premiere_intention', 'nfs', 'Anémie inflammatoire.'],
      ['etiologique', 'prelevement-de-gorge', 'Streptocoque A.'],
    ],
    scores: [],
    differentiels: [
      ['drepanocytose', 'Crises douloureuses, électrophorèse.'],
      ['Arthrite septique', 'Monoarthrite fixe, fièvre élevée, ponction.'],
      ['Arthrite juvénile idiopathique', 'Évolution > 6 semaines, ASLO normaux.'],
      ['endocardite-infectieuse', 'Fièvre prolongée, hémocultures.'],
      ['Leucémie aiguë', 'Douleurs osseuses, cytopénies.'],
    ],
    etiologies:
      '## Cause\n- Angine à *Streptococcus pyogenes* non traitée\n\n## Facteurs\n- Pauvreté, surpeuplement, accès limité aux soins',
    principes: [
      [
        'Éradication du streptocoque',
        'Supprimer le déclencheur.',
        '- **Benzathine benzylpénicilline** IM dose unique : 600 000 UI (< 30 kg), 1,2 MUI (≥ 30 kg)\n- Ou amoxicilline 10 jours',
      ],
      [
        'Anti-inflammatoires',
        'Traiter l’arthrite et la cardite.',
        '- **Aspirine** 50–100 mg/kg/j en 4 prises (arthrite) 2 à 4 semaines, décroissance\n- Cardite avec insuffisance cardiaque : **prednisolone** 1–2 mg/kg/j (maximum 60 mg) 2 à 3 semaines puis décroissance\n- Repos selon la cardite',
      ],
      [
        'Insuffisance cardiaque et chorée',
        'Traitements associés.',
        '- **Furosémide**, captopril\n- Chorée sévère : carbamazépine ou valproate',
      ],
      [
        'Prophylaxie secondaire',
        'Éviter les récidives.',
        '- **Benzathine benzylpénicilline** toutes les 3 à 4 semaines\n- Durée : 5 ans ou jusqu’à 21 ans (sans cardite) ; 10 ans ou jusqu’à 21 ans (cardite guérie) ; 10 ans ou jusqu’à 40 ans (séquelles valvulaires)\n- Allergie : érythromycine quotidienne',
      ],
    ],
    molecules: [
      ['benzathine-benzylpenicilline', 'premiere', 'Éradication et prophylaxie secondaire'],
      ['amoxicilline', 'alternative', 'Éradication orale'],
      ['acide-acetylsalicylique', 'premiere', 'Arthrite'],
      ['prednisolone', 'premiere', 'Cardite sévère'],
      ['furosemide', 'adjuvant', 'Insuffisance cardiaque'],
      ['captopril', 'adjuvant', 'Insuffisance cardiaque'],
      ['carbamazepine', 'adjuvant', 'Chorée'],
      ['erythromycine', 'alternative', 'Allergie à la pénicilline'],
    ],
    complications: [
      {
        nom: 'Cardiopathie rhumatismale',
        fiche: 'valvulopathies-rhumatismales',
        description: 'Séquelles valvulaires.',
        traitement: '- Prophylaxie stricte, chirurgie',
        clinique: '- Souffle, dyspnée',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Cardite sévère.',
        traitement: '- Corticoïdes, diurétiques',
        clinique: '- Polypnée, hépatomégalie',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Syndrome de Reye',
        description: 'Aspirine et infection virale (varicelle, grippe).',
        traitement: '- Réanimation',
        clinique: '- Vomissements, coma',
        paraclinique: '- Bilan hépatique',
      },
    ],
    evolution:
      '## Pronostic\n- L’arthrite guérit sans séquelle ; la cardite peut laisser une valvulopathie, aggravée par chaque récidive',
    urgences: [],
    symptomes: [
      ['Arthralgies', 'tres_frequent'],
      ['Gonflement articulaire', 'frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Mouvements involontaires', 'occasionnel'],
      ['Nodules sous-cutanés', 'rare'],
    ],
    sources: [
      'AHA — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Traitement des angines, benzathine pénicilline, aspirine, registre de prophylaxie',
        '- Souffle, dyspnée, chorée',
      ],
      hgr: ['- Échocardiographie, prise en charge de la cardite', ''],
      tert: ['- Chirurgie valvulaire', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Polyarthrite rhumatismale',
        type: 'commune',
        description: 'Arthrite migratrice fébrile.',
        terrain: '- Enfant de 5 à 15 ans',
        fonctionnels: '- Douleurs articulaires intenses',
        generaux: '- Fièvre',
        physiques: '- Genoux, chevilles, coudes gonflés, migrateurs',
        paraclinique: '- ASLO élevés',
        etiologies: '- Streptocoque A',
        syndromes: ['syndrome-infectieux'],
        examens: [['aslo', 'Preuve streptococcique']],
      },
      {
        nom: 'Cardite rhumatismale',
        type: 'gravite',
        description: 'Atteinte valvulaire.',
        terrain: '- Premier épisode ou récidive',
        fonctionnels: '- Dyspnée',
        generaux: '- Tachycardie',
        physiques: '- Souffle d’insuffisance mitrale, galop',
        paraclinique: '- Fuite valvulaire, PR allongé',
        etiologies: '',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
      },
      {
        nom: 'Chorée de Sydenham',
        type: 'evolutive',
        description: 'Manifestation neurologique tardive.',
        terrain: '- Fille, 1 à 6 mois après l’angine',
        fonctionnels: '- Maladresse, troubles de l’écriture',
        generaux: '',
        physiques: '- Mouvements involontaires, labilité émotionnelle',
        paraclinique: '- ASLO parfois normaux',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
