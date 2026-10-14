'use strict';

/**
 * Lot 41 (phase 2, pneumologie pédiatrique) — épiglottite, staphylococcie pleuropulmonaire,
 * pneumonies récidivantes de l'enfant, mucoviscidose. Rédigé par IA (OMS, Pocket book, Nelson) :
 * à valider.
 */

const PNEUMOPED = { departement: 'pediatrie', specialite: 'Pneumologie pédiatrique' };

module.exports = [
  // =================================================================== Épiglottite
  {
    ...PNEUMOPED,
    slug: 'epiglottite',
    nom: 'Épiglottite',
    resume:
      'Urgence vitale : infection de l’épiglotte (Haemophilus influenzae b chez l’enfant non vacciné) avec obstruction des voies aériennes : fièvre élevée brutale, dysphagie, hypersalivation, voix étouffée, position assise penchée en avant ; ne pas allonger ni examiner la gorge ; oxygène, appel à l’intubation par une équipe expérimentée, ceftriaxone IV ; prévention par le vaccin pentavalent (Hib).',
    definition:
      'Inflammation infectieuse aiguë de l’épiglotte et des structures supraglottiques, pouvant entraîner une obstruction brutale et complète des voies aériennes.',
    physiopathologie:
      '## Agents\n- **Haemophilus influenzae de type b** (enfant non ou mal vacciné), streptocoques, staphylocoque\n\n## Mécanismes\n- Œdème inflammatoire rapide de l’épiglotte, obstruction supraglottique, risque d’arrêt respiratoire (notamment en position couchée ou à l’examen de la gorge)',
    diagnostic:
      '## Clinique\n- Début **brutal**, **fièvre élevée**, aspect toxique\n- **Dysphagie**, **hypersalivation** (bave), voix étouffée, **stridor** inspiratoire doux\n- Enfant **assis, penché en avant**, bouche ouverte, refusant de s’allonger\n- Absence de toux aboyante (différent de la laryngite)\n\n## Conduite diagnostique\n- **Ne pas examiner la gorge à l’abaisse-langue**, ne pas allonger, ne pas séparer l’enfant de ses parents\n- Pas de prélèvement ni de radiographie avant la sécurisation des voies aériennes\n- Hémocultures après sécurisation',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxémie (sans agiter l’enfant).'],
      ['deuxieme_intention', 'hemocultures', 'Après sécurisation des voies aériennes.'],
      ['deuxieme_intention', 'nfs', 'Après sécurisation.'],
    ],
    scores: [],
    differentiels: [
      ['laryngite-aigue-croup', 'Toux aboyante, voix rauque, fièvre modérée, installation progressive.'],
      ['corps-etranger-voies-aeriennes', 'Syndrome de pénétration, pas de fièvre.'],
      ['abces-peri-amygdalien', 'Trismus, voussure du voile.'],
      ['Abcès rétropharyngé', 'Torticolis, fièvre, bombement pharyngé.'],
      ['anaphylaxie-enfant', 'Exposition allergénique, urticaire.'],
    ],
    etiologies: '## Terrain\n- Enfant de 2 à 7 ans non vacciné contre Hib ; adulte (rare)',
    principes: [
      [
        'Voies aériennes',
        'Priorité absolue.',
        '- Laisser l’enfant **assis** dans les bras de son parent, au calme ; **oxygène** sans contrainte\n- Appel immédiat de l’équipe la plus expérimentée (anesthésiste, ORL) : **intubation** au bloc ou en salle préparée ; trachéotomie ou cricothyroïdotomie si échec\n- Arrêt respiratoire : ventilation au masque et ballon (souvent efficace)',
      ],
      [
        'Antibiotiques',
        'Traiter l’infection.',
        '- **Ceftriaxone** 50–100 mg/kg/j IV pendant 7 à 10 jours, après sécurisation des voies aériennes',
      ],
      [
        'Prévention',
        'Vacciner.',
        '- **Vaccin pentavalent** (Hib) à 6, 10 et 14 semaines\n- Prophylaxie par **rifampicine** des contacts familiaux non vaccinés de moins de 4 ans selon les recommandations',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Antibiothérapie'],
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['vaccin-pentavalent', 'premiere', 'Prévention (Hib)'],
      ['rifampicine', 'adjuvant', 'Prophylaxie des contacts'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Arrêt respiratoire',
        fiche: 'arret-cardiorespiratoire-enfant',
        description: 'Obstruction complète.',
        traitement: '- Ventilation, intubation, abord chirurgical',
        clinique: '- Apnée, cyanose',
        paraclinique: '',
      },
      {
        nom: 'Bactériémie et méningite',
        fiche: 'meningite-bacterienne-enfant',
        description: 'Haemophilus.',
        traitement: '- Ceftriaxone',
        clinique: '- Fièvre, raideur',
        paraclinique: '- Hémocultures, LCR',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent si les voies aériennes sont sécurisées à temps ; décès possible par asphyxie',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Stridor', 'frequent'],
      ['Hypersalivation', 'tres_frequent'],
      ['Dysphagie', 'tres_frequent'],
      ['Dysphonie', 'frequent'],
      ['Dyspnée', 'frequent'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Ne pas examiner la gorge, position assise, oxygène, transfert médicalisé immédiat',
        '- Toute suspicion',
      ],
      hgr: ['- Intubation par une équipe expérimentée, ceftriaxone', '- Trachéotomie'],
      tert: ['- Réanimation pédiatrique, ORL', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Épiglottite aiguë de l’enfant',
        type: 'gravite',
        description: 'Urgence vitale.',
        terrain: '- Enfant non vacciné',
        fonctionnels: '- Dysphagie, bave, voix étouffée',
        generaux: '- Fièvre élevée, aspect toxique',
        physiques: '- Position assise penchée en avant, stridor',
        paraclinique: '',
        etiologies: '- Haemophilus influenzae b',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Supraglottite de l’adulte ou du grand enfant',
        type: 'commune',
        description: 'Évolution moins brutale.',
        terrain: '- Adolescent, adulte',
        fonctionnels: '- Odynophagie intense',
        generaux: '- Fièvre',
        physiques: '- Gorge peu inflammatoire',
        paraclinique: '- Nasofibroscopie (au bloc)',
        etiologies: '- Streptocoques',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Staphylococcie pleuropulmonaire
  {
    ...PNEUMOPED,
    slug: 'staphylococcie-pleuropulmonaire',
    nom: 'Staphylococcie pleuropulmonaire',
    resume:
      'Pneumonie à Staphylococcus aureus du nourrisson et du jeune enfant (souvent après une infection cutanée, la rougeole ou la varicelle), d’évolution rapide : fièvre, détresse respiratoire, distension abdominale, bulles (pneumatocèles), pleurésie purulente, pyopneumothorax ; cloxacilline IV (+ gentamicine) 3 semaines, vancomycine ou clindamycine si résistance ; drainage pleural ; surveillance du pneumothorax.',
    definition:
      'Pneumopathie nécrosante à Staphylococcus aureus, compliquée de bulles (pneumatocèles), d’empyème ou de pneumothorax, touchant surtout le nourrisson.',
    physiopathologie:
      '## Mécanismes\n- Inhalation ou dissémination sanguine à partir d’un foyer cutané (furoncle, impétigo, plaie, ombilic), ostéoarticulaire\n- Toxines nécrosantes (leucocidine de Panton-Valentine) : abcès, bulles, perforation pleurale\n\n## Terrain\n- Nourrisson < 1 an, malnutrition, rougeole, varicelle, VIH',
    diagnostic:
      '## Clinique\n- Fièvre élevée, **altération rapide**, polypnée, tirage, geignement, cyanose\n- **Distension abdominale** (iléus réflexe), diarrhée\n- Syndrome pleural (matité), aggravation brutale (pneumothorax)\n- Rechercher un foyer cutané ou osseux\n\n## Examens\n- **Radiographie thoracique** : opacités, **pneumatocèles** (bulles), épanchement, **pyopneumothorax**\n- **Ponction pleurale** (pus, Gram, culture), **hémocultures**\n- NFS (hyperleucocytose), CRP, test VIH, état nutritionnel',
    examens: [
      ['confirmation', 'radiographie-thoracique', 'Bulles, épanchement, pneumothorax.'],
      ['confirmation', 'ponction-epanchement', 'Pus, staphylocoque.'],
      ['premiere_intention', 'hemocultures', 'Staphylococcus aureus.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxémie.'],
      ['etiologique', 'tdr-vih', 'Terrain.'],
    ],
    scores: [],
    differentiels: [
      ['pneumonie-enfant', 'Pneumonie à pneumocoque, évolution moins nécrosante.'],
      ['pleuresie-purulente-enfant', 'Empyème d’autre cause.'],
      ['tuberculose-enfant', 'Évolution subaiguë, contage.'],
      ['Hernie diaphragmatique', 'Anses digestives intrathoraciques.'],
    ],
    etiologies: '## Terrain\n- Nourrisson, infection cutanée, rougeole, varicelle, malnutrition, VIH',
    principes: [
      [
        'Antibiotiques',
        'Traiter le staphylocoque.',
        '- **Cloxacilline** 50 mg/kg IV toutes les 6 h + **gentamicine** 7,5 mg/kg/j (5 jours), relais oral par cloxacilline ; durée totale **3 semaines**\n- Résistance (SARM) ou échec : **vancomycine** ou **clindamycine**',
      ],
      [
        'Gestes pleuraux',
        'Évacuer.',
        '- **Drain thoracique** si empyème ou pneumothorax ; exsufflation en urgence si pneumothorax compressif\n- Les pneumatocèles régressent spontanément (ne pas drainer)',
      ],
      [
        'Soutien',
        'Prévenir les décès.',
        '- **Oxygène**, hydratation, nutrition, fièvre ; traitement du foyer cutané',
      ],
    ],
    molecules: [
      ['cloxacilline', 'premiere', 'Staphylocoque'],
      ['gentamicine', 'premiere', 'Association initiale'],
      ['vancomycine', 'deuxieme', 'SARM'],
      ['clindamycine', 'alternative', 'SARM, allergie'],
      ['oxygene', 'premiere', 'Hypoxémie'],
    ],
    complications: [
      {
        nom: 'Pyopneumothorax',
        fiche: 'pleuresie-purulente-enfant',
        description: 'Rupture d’une bulle.',
        traitement: '- Drainage',
        clinique: '- Aggravation brutale',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-enfant',
        description: 'Bactériémie.',
        traitement: '- Antibiotiques, réanimation',
        clinique: '- Choc',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Foyers secondaires',
        fiche: 'osteomyelite-aigue',
        description: 'Ostéomyélite, arthrite, péricardite.',
        traitement: '- Antibiotiques prolongés',
        clinique: '- Douleur osseuse',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée chez le nourrisson sans traitement ; récupération complète le plus souvent sous traitement',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Tachypnée', 'tres_frequent'],
      ['Geignement expiratoire', 'frequent'],
      ['Distension abdominale', 'frequent'],
      ['Cyanose', 'occasionnel'],
      ['Toux', 'frequent'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Première dose d’antibiotique, oxygène, transfert', '- Nourrisson avec pneumonie grave'],
      hgr: ['- Cloxacilline IV, radiographie, drainage pleural', ''],
      tert: ['- Chirurgie thoracique pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Staphylococcie bulleuse du nourrisson',
        type: 'commune',
        description: 'Pneumatocèles.',
        terrain: '- Nourrisson, foyer cutané',
        fonctionnels: '- Détresse respiratoire',
        generaux: '- Fièvre élevée',
        physiques: '- Polypnée, distension abdominale',
        paraclinique: '- Bulles à la radiographie',
        etiologies: '- Staphylococcus aureus',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Pyopneumothorax',
        type: 'gravite',
        description: 'Complication.',
        terrain: '',
        fonctionnels: '- Aggravation brutale',
        generaux: '- Choc',
        physiques: '- Tympanisme, matité',
        paraclinique: '- Niveau hydro-aérique pleural',
        etiologies: '',
        syndromes: ['syndrome-d-epanchement-pleural-liquidien'],
      },
    ],
  },

  // =================================================================== Pneumonies récidivantes
  {
    ...PNEUMOPED,
    slug: 'pneumonies-recidivantes-enfant',
    nom: 'Pneumonies récidivantes de l’enfant',
    resume:
      'Au moins 2 pneumonies dans l’année ou 3 au total : rechercher une cause — VIH (en premier), tuberculose, asthme mal contrôlé, corps étranger (même territoire), troubles de déglutition et reflux (paralysie cérébrale), cardiopathie avec shunt, drépanocytose (syndrome thoracique), malnutrition, dilatation des bronches, déficits immunitaires, mucoviscidose ; test VIH, Xpert, radiographies de contrôle, bilan orienté.',
    definition:
      'Survenue d’au moins deux épisodes de pneumonie en un an, ou d’au moins trois épisodes au total, avec normalisation radiologique entre les épisodes.',
    physiopathologie:
      '## Causes selon le territoire\n- **Même localisation** : corps étranger, compression bronchique (adénopathie tuberculeuse), malformation, dilatation des bronches localisée\n- **Localisations variables** : **VIH**, asthme, inhalations (troubles de déglutition, reflux, paralysie cérébrale), **drépanocytose**, **malnutrition**, cardiopathie avec shunt gauche-droite, déficits immunitaires, mucoviscidose, dyskinésie ciliaire',
    diagnostic:
      '## Évaluation\n- Nombre d’épisodes confirmés, radiographies antérieures (même territoire ou non)\n- **Statut VIH** de l’enfant et de la mère, contage tuberculeux, croissance\n- Syndrome de pénétration (corps étranger), toux lors des repas, sifflements récidivants, souffle cardiaque, hippocratisme digital\n\n## Examens\n- **Test VIH**, NFS, **Xpert MTB/RIF** ou TB-LAM, test drépanocytose\n- **Radiographie thoracique** à distance de l’épisode\n- Selon l’orientation : échocardiographie, fibroscopie bronchique, test de la sueur, dosage des immunoglobulines',
    examens: [
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'radiographie-thoracique', 'Territoire, séquelles.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose.'],
      ['etiologique', 'test-rapide-drepanocytose', 'Drépanocytose.'],
      ['premiere_intention', 'anthropometrie', 'Malnutrition.'],
      ['deuxieme_intention', 'echocardiographie', 'Cardiopathie.'],
      ['deuxieme_intention', 'fibroscopie-bronchique', 'Corps étranger, compression.'],
      ['deuxieme_intention', 'test-de-la-sueur', 'Mucoviscidose.'],
    ],
    scores: [],
    differentiels: [
      ['infection-vih-enfant', 'Cause majeure.'],
      ['tuberculose-enfant', 'Adénopathies médiastinales, contage.'],
      ['asthme-enfant', 'Sifflements récidivants confondus avec des pneumonies.'],
      ['corps-etranger-voies-aeriennes', 'Récidives dans le même territoire.'],
      ['cardiopathies-congenitales', 'Souffle, insuffisance cardiaque.'],
      ['mucoviscidose', 'Retard de croissance, stéatorrhée.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- VIH, tuberculose, malnutrition, drépanocytose, asthme, corps étranger, troubles de déglutition',
    principes: [
      [
        'Traiter l’épisode',
        'Selon la PCIME.',
        '- Antibiotiques adaptés à la gravité (amoxicilline ; ampicilline + gentamicine si grave), oxygène',
      ],
      [
        'Traiter la cause',
        'Éviter les récidives.',
        '- VIH : ARV, **cotrimoxazole** ; tuberculose : traitement ; asthme : traitement de fond\n- Corps étranger : extraction endoscopique ; troubles de déglutition : épaississement, position, rééducation\n- Malnutrition : renutrition ; drépanocytose : hydroxyurée, prévention ; cardiopathie : traitement, chirurgie',
      ],
      [
        'Prévention',
        'Protéger.',
        '- Vaccinations à jour (pentavalent, pneumocoque, rougeole), allaitement, réduction de la fumée domestique',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Pneumonie'],
      ['cotrimoxazole', 'adjuvant', 'Prophylaxie chez l’enfant VIH'],
      ['vaccin-pneumococcique-conjugue', 'adjuvant', 'Prévention'],
      ['salbutamol', 'adjuvant', 'Asthme associé'],
    ],
    complications: [
      {
        nom: 'Dilatation des bronches',
        fiche: 'dilatation-des-bronches',
        description: 'Infections répétées.',
        traitement: '- Kinésithérapie, antibiotiques',
        clinique: '- Toux productive chronique',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Retard de croissance',
        fiche: 'retard-staturo-ponderal',
        description: 'Maladie chronique.',
        traitement: '- Nutrition',
        clinique: '- Cassure de la courbe',
        paraclinique: '- Anthropométrie',
      },
    ],
    evolution: '## Pronostic\n- Celui de la cause ; bon si celle-ci est identifiée et traitée',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Sibilants', 'occasionnel'],
      ['Retard de croissance', 'frequent'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
    ],
    niveaux: {
      cs: ['- Test VIH, recherche de tuberculose, orientation', '- Pneumonies répétées'],
      hgr: ['- Radiographies, Xpert, bilan étiologique', ''],
      tert: ['- Pneumologie pédiatrique, endoscopie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Pneumonies récidivantes de localisations variables',
        type: 'commune',
        description: 'Cause générale.',
        terrain: '- VIH, malnutrition, drépanocytose',
        fonctionnels: '- Toux, fièvre récurrentes',
        generaux: '- Retard de croissance',
        physiques: '',
        paraclinique: '- Test VIH, NFS',
        etiologies: '- VIH, immunodépression',
        syndromes: [],
      },
      {
        nom: 'Pneumonies récidivantes du même territoire',
        type: 'topographique',
        description: 'Cause locale.',
        terrain: '',
        fonctionnels: '- Toux chronique',
        generaux: '',
        physiques: '- Signes localisés persistants',
        paraclinique: '- Atélectasie localisée',
        etiologies: '- Corps étranger, compression',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Mucoviscidose
  {
    ...PNEUMOPED,
    slug: 'mucoviscidose',
    nom: 'Mucoviscidose',
    resume:
      'Maladie génétique (gène CFTR), moins fréquente en Afrique mais sous-diagnostiquée : infections respiratoires récidivantes, toux chronique, diarrhée graisseuse, retard de croissance malgré un bon appétit, iléus méconial, sueur salée ; test de la sueur ; kinésithérapie quotidienne, nutrition hypercalorique, enzymes pancréatiques, vitamines A-D-E-K, antibiotiques des exacerbations ; centre spécialisé.',
    definition:
      'Maladie génétique autosomique récessive due à des mutations du gène CFTR, entraînant des sécrétions épaisses dans les bronches, le pancréas, l’intestin et les canaux biliaires.',
    physiopathologie:
      '## Mécanismes\n- Anomalie du canal chlorure CFTR : mucus déshydraté et visqueux\n- **Poumons** : infections chroniques (staphylocoque, Pseudomonas), dilatation des bronches\n- **Pancréas** : insuffisance pancréatique exocrine (malabsorption des graisses), diabète tardif\n- **Intestin** : iléus méconial ; foie : cirrhose biliaire ; sueur riche en sel',
    diagnostic:
      '## Clinique\n- **Toux chronique**, bronchites et pneumonies récidivantes, sifflements, hippocratisme digital\n- **Diarrhée** graisseuse, malodorante, abondante, **retard de croissance** avec appétit conservé\n- Iléus méconial à la naissance, prolapsus rectal, sueur salée (goût salé de la peau), déshydratation hyponatrémique par forte chaleur\n\n## Examens\n- **Test de la sueur** (chlorures ≥ 60 mmol/L) ; génétique dans les centres spécialisés\n- Radiographie thoracique, examen cytobactériologique des crachats, état nutritionnel',
    examens: [
      ['confirmation', 'test-de-la-sueur', 'Chlorures ≥ 60 mmol/L.'],
      ['premiere_intention', 'radiographie-thoracique', 'Dilatation des bronches.'],
      ['premiere_intention', 'anthropometrie', 'Retard de croissance.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['etiologique', 'tdr-vih', 'Diagnostic différentiel.'],
    ],
    scores: [],
    differentiels: [
      ['infection-vih-enfant', 'Infections récidivantes, retard de croissance.'],
      ['tuberculose-enfant', 'Toux chronique, contage.'],
      ['diarrhee-persistante-enfant', 'Diarrhée chronique infectieuse.'],
      ['malnutrition-chronique', 'Retard de croissance par apports insuffisants.'],
      ['asthme-enfant', 'Sifflements sans malabsorption.'],
    ],
    etiologies: '## Génétique\n- Autosomique récessive ; parents porteurs sains',
    principes: [
      [
        'Respiratoire',
        'Préserver les poumons.',
        '- **Kinésithérapie de drainage** quotidienne, activité physique\n- Nébulisations de **sérum salé hypertonique**, bronchodilatateur (**salbutamol**)\n- **Antibiotiques** des exacerbations selon les germes (cloxacilline, amoxicilline-acide clavulanique ; **ciprofloxacine** si Pseudomonas) ; **azithromycine** au long cours selon le protocole',
      ],
      [
        'Nutritionnel',
        'Assurer la croissance.',
        '- Alimentation **hypercalorique** (120–150 % des apports recommandés), riche en graisses\n- **Enzymes pancréatiques** (pancréatine) à chaque repas, adaptées au poids et aux selles\n- **Vitamines A, D, E, K**, supplément en **sel** par temps chaud',
      ],
      [
        'Suivi',
        'Centre spécialisé.',
        '- Suivi multidisciplinaire, vaccinations (grippe, pneumocoque), conseil génétique',
      ],
    ],
    molecules: [
      ['pancreatine', 'premiere', 'Insuffisance pancréatique'],
      ['chlorure-de-sodium-hypertonique', 'premiere', 'Nébulisation'],
      ['salbutamol', 'adjuvant', 'Bronchodilatateur'],
      ['azithromycine', 'alternative', 'Traitement au long cours'],
      ['ciprofloxacine', 'alternative', 'Pseudomonas'],
      ['vitamines-association', 'premiere', 'Vitamines liposolubles'],
    ],
    complications: [
      {
        nom: 'Dilatation des bronches et insuffisance respiratoire',
        fiche: 'dilatation-des-bronches',
        description: 'Infections chroniques.',
        traitement: '- Kinésithérapie, antibiotiques, oxygène',
        clinique: '- Dyspnée, hippocratisme',
        paraclinique: '',
      },
      {
        nom: 'Malnutrition',
        fiche: 'malnutrition-chronique',
        description: 'Malabsorption.',
        traitement: '- Enzymes, nutrition',
        clinique: '- Retard de croissance',
        paraclinique: '- Anthropométrie',
      },
      {
        nom: 'Déshydratation hyponatrémique',
        fiche: 'hyponatremie',
        description: 'Chaleur, pertes sudorales.',
        traitement: '- Réhydratation salée',
        clinique: '- Léthargie',
        paraclinique: '- Natrémie',
      },
    ],
    evolution:
      '## Pronostic\n- Maladie chronique évolutive ; espérance de vie très améliorée par la prise en charge spécialisée, réduite sans traitement',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Expectoration', 'frequent'],
      ['Diarrhée', 'frequent'],
      ['Retard de croissance', 'tres_frequent'],
      ['Sibilants', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Suspecter, orienter', '- Infections récidivantes avec retard de croissance et diarrhée'],
      hgr: ['- Prise en charge des exacerbations, nutrition', ''],
      tert: ['- Test de la sueur, centre spécialisé', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme respiratoire et digestive',
        type: 'commune',
        description: 'Forme classique.',
        terrain: '- Nourrisson, enfant',
        fonctionnels: '- Toux chronique, selles graisseuses',
        generaux: '- Retard de croissance',
        physiques: '- Râles, hippocratisme',
        paraclinique: '- Test de la sueur positif',
        etiologies: '- Mutations CFTR',
        syndromes: [],
      },
      {
        nom: 'Iléus méconial',
        type: 'terrain',
        description: 'Révélation néonatale.',
        terrain: '- Nouveau-né',
        fonctionnels: '- Absence de méconium',
        generaux: '',
        physiques: '- Distension abdominale',
        paraclinique: '- Occlusion',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
    ],
  },
];
