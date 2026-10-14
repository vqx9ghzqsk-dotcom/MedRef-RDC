'use strict';

/**
 * Lot 42 (phase 2, pneumologie et cardiologie pédiatriques) — pneumopathie interstitielle
 * lymphoïde, tétralogie de Fallot, endocardite infectieuse de l'enfant, myocardite, péricardite de
 * l'enfant, maladie de Kawasaki, troubles du rythme, hypertension artérielle de l'enfant. Rédigé
 * par IA (OMS, AHA, ESC, Pocket book, Nelson) : à valider.
 */

const PNEUMOPED = { departement: 'pediatrie', specialite: 'Pneumologie pédiatrique' };
const CARDIOPED = { departement: 'pediatrie', specialite: 'Cardiologie pédiatrique' };

module.exports = [
  // =================================================================== PIL
  {
    ...PNEUMOPED,
    slug: 'pneumopathie-interstitielle-lymphoide',
    nom: 'Pneumopathie interstitielle lymphoïde (VIH)',
    resume:
      'Pneumopathie chronique de l’enfant vivant avec le VIH (souvent après 1 an) : toux chronique, hypoxémie progressive, hippocratisme digital, hypertrophie parotidienne, adénopathies ; radiographie : opacités réticulonodulaires bilatérales ; souvent confondue avec la tuberculose miliaire (éliminer la tuberculose) ; ARV, oxygène, prednisolone si hypoxémie, traitement des surinfections.',
    definition:
      'Infiltration lymphocytaire diffuse de l’interstitium pulmonaire, associée à l’infection à VIH de l’enfant (définissant le stade clinique 3 de l’OMS).',
    physiopathologie:
      '## Mécanismes\n- Hyperplasie lymphoïde en réponse au VIH (et à l’EBV) dans le tissu pulmonaire\n- Évolution lente, hypoxémie chronique, dilatation des bronches et surinfections\n\n## Terrain\n- Enfant VIH non traité, souvent > 1 an ; régresse sous ARV',
    diagnostic:
      '## Clinique\n- Toux chronique, dyspnée d’effort progressive, **hippocratisme digital**\n- **Hypertrophie parotidienne** bilatérale, **adénopathies** généralisées, hépatosplénomégalie\n- Peu ou pas de fièvre, état général relativement conservé (différent de la miliaire)\n\n## Examens\n- **Radiographie thoracique** : opacités réticulonodulaires bilatérales diffuses, adénopathies hilaires\n- **SpO2**, test VIH, CD4, charge virale\n- **Xpert MTB/RIF**, TB-LAM : éliminer une tuberculose',
    examens: [
      ['confirmation', 'radiographie-thoracique', 'Opacités réticulonodulaires bilatérales.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxémie.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose.'],
      ['etiologique', 'tb-lam', 'Tuberculose.'],
      ['premiere_intention', 'cd4', 'Immunodépression.'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-enfant', 'Miliaire : fièvre, altération, contage.'],
      ['pneumocystose', 'Nourrisson, hypoxémie aiguë sévère.'],
      ['pneumonie-enfant', 'Épisode aigu fébrile.'],
      ['dilatation-des-bronches', 'Séquelle ou complication.'],
    ],
    etiologies: '## Terrain\n- Enfant vivant avec le VIH sans traitement ARV',
    principes: [
      [
        'ARV',
        'Traitement de fond.',
        '- **Traitement antirétroviral** (régression des lésions) et **cotrimoxazole**',
      ],
      [
        'Hypoxémie',
        'Soutenir.',
        '- **Oxygène** si SpO2 < 90 %\n- **Prednisolone** 2 mg/kg/j pendant 2 à 4 semaines puis décroissance progressive si hypoxémie persistante, après exclusion de la tuberculose',
      ],
      [
        'Infections',
        'Prévenir et traiter.',
        '- Antibiotiques des surinfections, kinésithérapie, vaccinations, dépistage régulier de la tuberculose',
      ],
    ],
    molecules: [
      ['dolutegravir', 'premiere', 'Traitement antirétroviral'],
      ['cotrimoxazole', 'premiere', 'Prophylaxie'],
      ['prednisolone', 'alternative', 'Hypoxémie persistante'],
      ['oxygene', 'adjuvant', 'Hypoxémie'],
      ['amoxicilline', 'adjuvant', 'Surinfection'],
    ],
    complications: [
      {
        nom: 'Dilatation des bronches',
        fiche: 'dilatation-des-bronches',
        description: 'Évolution chronique.',
        traitement: '- Kinésithérapie, antibiotiques',
        clinique: '- Bronchorrhée',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance respiratoire chronique',
        fiche: 'insuffisance-respiratoire-aigue',
        description: 'Formes sévères.',
        traitement: '- Oxygène, corticoïdes',
        clinique: '- Cyanose',
        paraclinique: '- SpO2',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration sous ARV ; meilleur pronostic que les autres pneumopathies du VIH',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Tuméfaction parotidienne', 'frequent'],
      ['Cyanose', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Test VIH, recherche de tuberculose, orientation',
        '- Enfant VIH avec toux chronique et hypoxémie',
      ],
      hgr: ['- Radiographie, ARV, oxygène, corticoïdes', ''],
      tert: ['- Pneumologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'PIL de l’enfant VIH',
        type: 'commune',
        description: 'Forme chronique.',
        terrain: '- Enfant VIH > 1 an',
        fonctionnels: '- Toux chronique',
        generaux: '- Peu de fièvre',
        physiques: '- Hippocratisme, parotides augmentées',
        paraclinique: '- Opacités réticulonodulaires',
        etiologies: '- VIH',
        syndromes: [],
      },
      {
        nom: 'PIL hypoxémiante',
        type: 'gravite',
        description: 'Insuffisance respiratoire.',
        terrain: '',
        fonctionnels: '- Dyspnée de repos',
        generaux: '',
        physiques: '- Cyanose',
        paraclinique: '- SpO2 < 90 %',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Tétralogie de Fallot
  {
    ...CARDIOPED,
    slug: 'tetralogie-de-fallot',
    nom: 'Tétralogie de Fallot',
    resume:
      'Cardiopathie cyanogène la plus fréquente après la période néonatale : cyanose, souffle systolique, malaises de Fallot (crises hypoxiques) ; crise hypoxique : position genoux-poitrine, oxygène, morphine, remplissage, propranolol ; propranolol oral en prévention, traitement de l’anémie, hydratation ; correction chirurgicale (centres spécialisés ou missions humanitaires).',
    definition:
      'Cardiopathie congénitale associant communication interventriculaire, obstacle à l’éjection du ventricule droit (sténose pulmonaire), dextroposition de l’aorte et hypertrophie ventriculaire droite.',
    physiopathologie:
      '## Mécanismes\n- Shunt droite-gauche par la CIV en raison de l’obstacle pulmonaire : sang désaturé dans l’aorte → **cyanose**\n- **Malaise de Fallot** : spasme de l’infundibulum (pleurs, effort, déshydratation, fièvre) → chute brutale du débit pulmonaire, hypoxie profonde\n- Polyglobulie, risque de thromboses et d’abcès cérébral',
    diagnostic:
      '## Clinique\n- **Cyanose** apparaissant après quelques mois, aggravée par les pleurs et l’effort\n- **Souffle systolique** éjectionnel au foyer pulmonaire (diminue pendant le malaise)\n- **Accroupissement** (squatting) chez l’enfant qui marche, hippocratisme digital\n- **Malaise hypoxique** : agitation puis cyanose intense, polypnée, hypotonie, perte de connaissance, convulsions\n\n## Examens\n- **Échocardiographie** (diagnostic)\n- Radiographie : cœur « en sabot », poumons clairs ; ECG : hypertrophie ventriculaire droite\n- NFS (polyglobulie, **anémie relative** ou carence martiale), SpO2',
    examens: [
      ['confirmation', 'echocardiographie', 'Diagnostic anatomique.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Désaturation.'],
      ['premiere_intention', 'nfs', 'Polyglobulie, anémie relative.'],
      ['premiere_intention', 'radiographie-thoracique', 'Cœur en sabot, poumons clairs.'],
      ['premiere_intention', 'ecg', 'Hypertrophie ventriculaire droite.'],
      ['etiologique', 'ferritine', 'Carence martiale.'],
    ],
    scores: [],
    differentiels: [
      ['cardiopathies-congenitales', 'Autres cardiopathies cyanogènes (transposition, atrésie pulmonaire).'],
      ['Hypertension pulmonaire persistante', 'Nouveau-né, contexte respiratoire.'],
      ['Méthémoglobinémie', 'Cyanose sans souffle, PaO2 normale.'],
      ['convulsions-febriles', 'Malaise confondu avec une convulsion.'],
    ],
    etiologies:
      '## Facteurs\n- Malformation congénitale ; association possible à des syndromes génétiques (délétion 22q11, trisomie 21)',
    principes: [
      [
        'Malaise hypoxique (urgence)',
        'Rétablir le débit pulmonaire.',
        '- Calmer l’enfant, **position genoux-poitrine** (dans les bras du parent), **oxygène**\n- **Morphine** 0,1 mg/kg IM, SC ou IV\n- **Remplissage** NaCl 0,9 % 10 mL/kg\n- **Propranolol** 0,05–0,1 mg/kg IV lent (ou kétamine) si persistance ; correction de l’acidose\n- Éviter l’adrénaline et les vasodilatateurs',
      ],
      [
        'Traitement de fond',
        'Prévenir les malaises.',
        '- **Propranolol** oral 0,5–1 mg/kg 2 à 4 fois par jour en attendant la chirurgie\n- Hydratation (éviter la déshydratation), traitement de la **carence martiale** (fer)\n- Prévention de l’endocardite (hygiène dentaire, antibioprophylaxie)',
      ],
      [
        'Chirurgie',
        'Corriger.',
        '- **Correction complète** dans la première année idéalement (centres spécialisés, missions) ; anastomose palliative si nécessaire',
      ],
    ],
    molecules: [
      ['propranolol', 'premiere', 'Prévention et traitement des malaises'],
      ['morphine', 'premiere', 'Malaise hypoxique'],
      ['oxygene', 'premiere', 'Malaise hypoxique'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage'],
      ['ketamine', 'alternative', 'Malaise réfractaire'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Carence martiale'],
    ],
    complications: [
      {
        nom: 'Malaise hypoxique et décès',
        description: 'Spasme infundibulaire.',
        traitement: '- Prise en charge urgente, chirurgie',
        clinique: '- Cyanose intense, perte de connaissance',
        paraclinique: '',
      },
      {
        nom: 'Abcès cérébral',
        description: 'Shunt droite-gauche.',
        traitement: '- Antibiotiques, drainage',
        clinique: '- Fièvre, céphalées, déficit',
        paraclinique: '- Scanner',
      },
      {
        nom: 'AVC et thromboses',
        fiche: 'avc-enfant-drepanocytaire',
        description: 'Polyglobulie, déshydratation.',
        traitement: '- Hydratation, prévention',
        clinique: '- Déficit',
        paraclinique: '',
      },
      {
        nom: 'Endocardite infectieuse',
        fiche: 'endocardite-infectieuse-enfant',
        description: 'Cardiopathie non corrigée.',
        traitement: '- Antibiotiques prolongés',
        clinique: '- Fièvre prolongée',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent après correction chirurgicale ; mortalité élevée sans chirurgie (malaises, complications)',
    urgences: [],
    symptomes: [
      ['Cyanose', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Syncope', 'occasionnel'],
      ['Retard de croissance', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'AHA — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Position genoux-poitrine, oxygène, transfert', '- Cyanose, malaise'],
      hgr: ['- Prise en charge des malaises, propranolol, échocardiographie', '- Chirurgie'],
      tert: ['- Chirurgie cardiaque pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fallot régulier',
        type: 'commune',
        description: 'Cyanose modérée.',
        terrain: '- Nourrisson, enfant',
        fonctionnels: '- Fatigue à l’effort',
        generaux: '',
        physiques: '- Cyanose, souffle systolique, squatting',
        paraclinique: '- Échocardiographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Malaise de Fallot',
        type: 'gravite',
        description: 'Crise hypoxique.',
        terrain: '',
        fonctionnels: '- Agitation puis hypotonie',
        generaux: '',
        physiques: '- Cyanose intense, disparition du souffle',
        paraclinique: '- Désaturation profonde',
        etiologies: '- Spasme infundibulaire',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Endocardite enfant
  {
    ...CARDIOPED,
    slug: 'endocardite-infectieuse-enfant',
    nom: 'Endocardite infectieuse de l’enfant',
    resume:
      'Infection de l’endocarde chez l’enfant porteur d’une cardiopathie rhumatismale ou congénitale (rarement sur cœur sain, cathéter) : fièvre prolongée, nouveau souffle, anémie, splénomégalie, signes emboliques ; 3 hémocultures avant antibiotiques, échocardiographie ; antibiothérapie IV prolongée (4 à 6 semaines) ; prévention : hygiène bucco-dentaire, prophylaxie avant les soins dentaires à risque.',
    definition:
      'Infection, le plus souvent bactérienne, de l’endocarde valvulaire ou pariétal, avec formation de végétations, survenant généralement sur une cardiopathie préexistante.',
    physiopathologie:
      '## Terrain\n- **Valvulopathies rhumatismales** (cause principale en Afrique), cardiopathies congénitales (CIV, Fallot, canal artériel), prothèses, cathéters\n\n## Germes\n- **Streptocoques** (oraux), **Staphylococcus aureus**, entérocoques, bactéries HACEK\n- Porte d’entrée : dents, peau, cathéters',
    diagnostic:
      '## Clinique\n- **Fièvre prolongée** inexpliquée chez un cardiaque, altération de l’état général\n- **Souffle nouveau** ou modifié, insuffisance cardiaque\n- **Splénomégalie**, pâleur, pétéchies, hématurie\n- Signes emboliques : déficit neurologique, douleurs abdominales, lésions cutanées\n\n## Examens\n- **3 hémocultures** espacées avant les antibiotiques\n- **Échocardiographie** (végétations, abcès, fuite)\n- NFS (anémie), CRP, VS, bandelette (hématurie), créatinine',
    examens: [
      ['confirmation', 'hemocultures', '3 séries avant antibiotiques.'],
      ['confirmation', 'echocardiographie', 'Végétations.'],
      ['premiere_intention', 'nfs', 'Anémie, hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie.'],
      ['premiere_intention', 'creatinine', 'Atteinte rénale, aminosides.'],
      ['etiologique', 'tdr-paludisme', 'Diagnostic différentiel.'],
    ],
    scores: [],
    differentiels: [
      ['rhumatisme-articulaire-aigu-enfant', 'Poussée rhumatismale : ASLO, pas de bactériémie.'],
      ['fievre-prolongee-enfant', 'Autres causes de fièvre prolongée.'],
      ['paludisme-simple-enfant', 'TDR positif.'],
      ['fievre-typhoide-enfant', 'Hémocultures à salmonelle.'],
    ],
    etiologies:
      '## Facteurs\n- Cardiopathie rhumatismale ou congénitale, mauvaise hygiène dentaire, soins invasifs, cathéters',
    principes: [
      [
        'Antibiothérapie probabiliste (valve native)',
        'Après hémocultures.',
        '- **Ampicilline** 50 mg/kg IV toutes les 6 h + **cloxacilline** 50 mg/kg IV toutes les 6 h + **gentamicine** 3 mg/kg/j\n- Adaptation selon le germe : streptocoque sensible (pénicilline G ou ceftriaxone 4 semaines), staphylocoque (cloxacilline 6 semaines), SARM (vancomycine)',
      ],
      [
        'Durée et suivi',
        'Stériliser.',
        '- **4 à 6 semaines** IV ; contrôle des hémocultures, de l’échocardiographie, de la fonction rénale et de l’audition (aminosides)\n- Traitement de l’insuffisance cardiaque ; chirurgie si destruction valvulaire, abcès, embolies répétées',
      ],
      [
        'Prévention',
        'Éviter la récidive.',
        '- Hygiène bucco-dentaire et soins réguliers\n- **Amoxicilline** 50 mg/kg (max 2 g) 30–60 min avant les soins dentaires à risque chez les enfants à haut risque\n- Prophylaxie secondaire du RAA',
      ],
    ],
    molecules: [
      ['ampicilline', 'premiere', 'Probabiliste'],
      ['cloxacilline', 'premiere', 'Probabiliste, staphylocoque'],
      ['gentamicine', 'premiere', 'Association'],
      ['benzylpenicilline-penicilline-g', 'alternative', 'Streptocoque sensible'],
      ['ceftriaxone', 'alternative', 'Streptocoque sensible'],
      ['vancomycine', 'deuxieme', 'SARM, allergie'],
      ['amoxicilline', 'adjuvant', 'Prophylaxie avant soins dentaires'],
    ],
    complications: [
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Destruction valvulaire.',
        traitement: '- Diurétiques, chirurgie',
        clinique: '- Dyspnée, hépatomégalie',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Embolies cérébrales',
        fiche: 'avc-enfant-drepanocytaire',
        description: 'Végétations.',
        traitement: '- Antibiotiques, chirurgie',
        clinique: '- Déficit neurologique',
        paraclinique: '- Imagerie',
      },
      {
        nom: 'Glomérulonéphrite',
        fiche: 'glomerulonephrite-aigue-post-streptococcique',
        description: 'Complexes immuns.',
        traitement: '- Antibiotiques',
        clinique: '- Hématurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 10 à 20 % ; meilleur si traitement précoce et accès à la chirurgie',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Pâleur', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Splénomégalie', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Hématurie', 'occasionnel'],
    ],
    sources: [
      'AHA — recommandations de pratique clinique',
      'ESC — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Fièvre chez un enfant cardiaque : orientation', '- Fièvre prolongée, nouveau souffle'],
      hgr: ['- Hémocultures, antibiotiques IV', '- Échocardiographie, chirurgie'],
      tert: ['- Cardiologie et chirurgie cardiaque pédiatriques', ''],
    },
    alertes: { 'choc-septique': 'Enfant cardiaque fébrile avec hypotension' },
    formes: [
      {
        nom: 'Endocardite sur valvulopathie rhumatismale',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Enfant rhumatismal',
        fonctionnels: '- Fatigue',
        generaux: '- Fièvre prolongée',
        physiques: '- Souffle modifié, splénomégalie',
        paraclinique: '- Hémocultures positives, végétations',
        etiologies: '- Streptocoques',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Endocardite aiguë staphylococcique',
        type: 'gravite',
        description: 'Évolution rapide.',
        terrain: '- Cathéter, foyer cutané',
        fonctionnels: '- Dyspnée',
        generaux: '- Sepsis',
        physiques: '- Insuffisance cardiaque',
        paraclinique: '- S. aureus',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Myocardite
  {
    ...CARDIOPED,
    slug: 'myocardite-enfant',
    nom: 'Myocardite de l’enfant',
    resume:
      'Inflammation du myocarde, souvent virale (entérovirus, adénovirus, VIH, COVID-19), plus rarement diphtérique, toxique ou liée au paludisme grave : insuffisance cardiaque aiguë, tachycardie inexpliquée, troubles du rythme, choc cardiogénique, souvent après une infection virale ; ECG, troponine, échocardiographie ; repos, traitement de l’insuffisance cardiaque, oxygène, prudence avec le remplissage, surveillance des troubles du rythme.',
    definition:
      'Atteinte inflammatoire du muscle cardiaque, d’origine le plus souvent virale, pouvant entraîner une dysfonction ventriculaire aiguë ou chronique (cardiomyopathie dilatée).',
    physiopathologie:
      '## Causes\n- **Virales** : entérovirus (coxsackie), adénovirus, parvovirus B19, VIH, SARS-CoV-2 (syndrome inflammatoire multisystémique)\n- **Bactériennes et toxiniques** : **diphtérie**, rhumatisme articulaire aigu (cardite)\n- Parasitaires (THA, toxoplasmose), médicaments, maladies auto-immunes\n\n## Évolution\n- Guérison, cardiomyopathie dilatée chronique ou décès (choc, troubles du rythme)',
    diagnostic:
      '## Clinique\n- Infection virale récente, puis **fatigue**, **dyspnée**, refus de téter (nourrisson), douleurs thoraciques\n- **Tachycardie** disproportionnée par rapport à la fièvre, bruit de galop, hépatomégalie\n- **Choc cardiogénique** : extrémités froides, hypotension, oligurie\n- Troubles du rythme, syncope\n\n## Examens\n- **ECG** (troubles de repolarisation, microvoltage, arythmies, blocs)\n- **Troponine**, BNP, CRP\n- **Radiographie** (cardiomégalie, œdème), **échocardiographie** (dysfonction ventriculaire)\n- Recherche de la cause : test VIH, TDR paludisme, prélèvement de gorge (diphtérie)',
    examens: [
      ['premiere_intention', 'ecg', 'Troubles du rythme, repolarisation.'],
      ['confirmation', 'troponine', 'Atteinte myocardique.'],
      ['confirmation', 'echocardiographie', 'Dysfonction ventriculaire.'],
      ['premiere_intention', 'radiographie-thoracique', 'Cardiomégalie.'],
      ['premiere_intention', 'bnp', 'Insuffisance cardiaque.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'prelevement-de-gorge', 'Diphtérie.'],
    ],
    scores: [],
    differentiels: [
      ['pneumonie-enfant', 'Polypnée fébrile sans cardiomégalie.'],
      ['sepsis-enfant', 'Choc septique (souvent confondu).'],
      ['cardiopathies-congenitales', 'Souffle, malformation.'],
      ['pericardite-enfant', 'Frottement, épanchement.'],
      ['rhumatisme-articulaire-aigu-enfant', 'Cardite rhumatismale.'],
    ],
    etiologies: '## Causes fréquentes\n- Virus, diphtérie, RAA, VIH, paludisme grave',
    principes: [
      [
        'Insuffisance cardiaque',
        'Soutenir la pompe.',
        '- **Repos**, **oxygène**, position demi-assise\n- **Furosémide** 1 mg/kg IV si surcharge ; **IEC** (captopril, énalapril) à faibles doses croissantes une fois stable\n- **Remplissage prudent** (5–10 mL/kg seulement en cas d’hypovolémie avérée)\n- Choc cardiogénique : inotropes et réanimation dans les centres équipés',
      ],
      [
        'Troubles du rythme',
        'Surveiller.',
        '- Monitoring ; traitement des arythmies (voir fiche), stimulation si bloc complet',
      ],
      [
        'Cause',
        'Traiter si possible.',
        '- Diphtérie : antitoxine et antibiotiques ; VIH : ARV ; immunoglobulines IV discutées dans certains centres\n- Éviter les AINS à la phase aiguë ; reprise du sport après plusieurs mois',
      ],
    ],
    molecules: [
      ['furosemide', 'premiere', 'Surcharge'],
      ['captopril', 'alternative', 'Insuffisance cardiaque'],
      ['enalapril', 'alternative', 'Insuffisance cardiaque'],
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['digoxine', 'adjuvant', 'Insuffisance cardiaque avec fibrillation'],
    ],
    complications: [
      {
        nom: 'Choc cardiogénique',
        fiche: 'choc-enfant',
        description: 'Dysfonction sévère.',
        traitement: '- Inotropes, réanimation',
        clinique: '- Hypotension, extrémités froides',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Troubles du rythme',
        fiche: 'troubles-du-rythme-enfant',
        description: 'Arythmies, blocs.',
        traitement: '- Antiarythmiques, stimulation',
        clinique: '- Palpitations, syncope',
        paraclinique: '- ECG',
      },
      {
        nom: 'Cardiomyopathie dilatée',
        fiche: 'cardiomyopathie-dilatee',
        description: 'Évolution chronique.',
        traitement: '- Traitement de l’insuffisance cardiaque',
        clinique: '- Dyspnée chronique',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération complète chez la majorité ; cardiomyopathie chronique ou décès dans les formes fulminantes',
    urgences: ['oedeme-aigu-du-poumon'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Tachypnée', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Palpitations', 'frequent'],
      ['Douleur thoracique', 'occasionnel'],
      ['Hépatomégalie', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'AHA — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Repérer la tachycardie et la dyspnée, oxygène, transfert', '- Insuffisance cardiaque, choc'],
      hgr: ['- ECG, radiographie, furosémide', '- Échocardiographie, réanimation'],
      tert: ['- Cardiologie pédiatrique', ''],
    },
    alertes: {
      'oedeme-aigu-du-poumon': 'Enfant avec dyspnée, crépitants et cardiomégalie après une infection virale',
    },
    formes: [
      {
        nom: 'Myocardite virale aiguë',
        type: 'commune',
        description: 'Après une infection virale.',
        terrain: '- Enfant',
        fonctionnels: '- Fatigue, dyspnée',
        generaux: '- Fièvre récente',
        physiques: '- Tachycardie, galop, hépatomégalie',
        paraclinique: '- Troponine élevée, dysfonction ventriculaire',
        etiologies: '- Entérovirus, adénovirus',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
      },
      {
        nom: 'Myocardite fulminante',
        type: 'gravite',
        description: 'Choc cardiogénique.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Extrémités froides, hypotension',
        paraclinique: '- Effondrement de la fonction ventriculaire',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Péricardite enfant
  {
    ...CARDIOPED,
    slug: 'pericardite-enfant',
    nom: 'Péricardite de l’enfant',
    resume:
      'Inflammation du péricarde chez l’enfant : en RDC surtout tuberculeuse (enfant VIH, contage) et purulente (staphylocoque, après une pneumonie ou une ostéomyélite), plus rarement virale ou rhumatismale : douleur thoracique, fièvre, dyspnée, frottement, cardiomégalie ; échocardiographie ; tamponnade = péricardiocentèse urgente ; péricardite purulente = drainage et antibiotiques ; tuberculeuse = antituberculeux.',
    definition:
      'Inflammation des feuillets du péricarde, avec ou sans épanchement, pouvant évoluer vers la tamponnade ou la constriction.',
    physiopathologie:
      '## Causes\n- **Purulente** : Staphylococcus aureus, pneumocoque, Haemophilus (après pneumonie, ostéomyélite, sepsis)\n- **Tuberculeuse** : enfant VIH, contage, évolution subaiguë, constriction\n- **Virale** (entérovirus), **rhumatismale** (RAA), urémique, post-traumatique\n\n## Tamponnade\n- Épanchement compressif : baisse du remplissage cardiaque, choc',
    diagnostic:
      '## Clinique\n- Douleur thoracique (soulagée penché en avant), fièvre, dyspnée, toux\n- **Frottement** péricardique, bruits du cœur assourdis\n- **Tamponnade** : tachycardie, **turgescence jugulaire**, hépatomégalie, pouls paradoxal, hypotension\n\n## Examens\n- **Échocardiographie** (épanchement, tamponnade)\n- **Radiographie** : cardiomégalie « en carafe »\n- ECG : microvoltage, sus-décalage diffus\n- **Ponction péricardique** : purulente (Gram, culture), lymphocytaire (Xpert, ADA)\n- Test VIH, Xpert sur expectoration ou tubage, NFS, CRP, hémocultures',
    examens: [
      ['confirmation', 'echocardiographie', 'Épanchement, tamponnade.'],
      ['premiere_intention', 'radiographie-thoracique', 'Cardiomégalie.'],
      ['premiere_intention', 'ecg', 'Microvoltage, sus-décalage.'],
      ['confirmation', 'ponction-epanchement', 'Liquide péricardique.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'hemocultures', 'Péricardite purulente.'],
    ],
    scores: [],
    differentiels: [
      ['myocardite-enfant', 'Dysfonction ventriculaire sans épanchement.'],
      ['insuffisance-cardiaque-enfant', 'Cardiomégalie d’autre cause.'],
      ['pleuresie-purulente-enfant', 'Épanchement pleural.'],
      ['cardiopathies-congenitales', 'Souffle, malformation.'],
    ],
    etiologies: '## Causes fréquentes\n- Tuberculose (VIH), staphylocoque, virus, RAA',
    principes: [
      [
        'Tamponnade',
        'Urgence.',
        '- **Péricardiocentèse** en urgence (voie sous-xiphoïdienne, idéalement échoguidée) ; remplissage prudent en attendant\n- Éviter les diurétiques et les vasodilatateurs',
      ],
      [
        'Péricardite purulente',
        'Drainer et traiter.',
        '- **Drainage chirurgical** (péricardiotomie) + **cloxacilline** 50 mg/kg IV toutes les 6 h + **ceftriaxone** 4 à 6 semaines selon le germe',
      ],
      [
        'Autres causes',
        'Selon l’étiologie.',
        '- **Tuberculeuse** : traitement antituberculeux de l’enfant (6 mois), corticoïdes selon le protocole, surveillance de la constriction\n- **Virale** : repos, **ibuprofène** 10 mg/kg 3 fois par jour\n- **Rhumatismale** : traitement de la cardite',
      ],
    ],
    molecules: [
      ['cloxacilline', 'premiere', 'Péricardite purulente'],
      ['ceftriaxone', 'premiere', 'Péricardite purulente'],
      ['ibuprofene', 'alternative', 'Péricardite virale'],
      ['rifampicine', 'alternative', 'Tuberculose (RHZE)'],
      ['prednisolone', 'adjuvant', 'Péricardite tuberculeuse selon le protocole'],
    ],
    complications: [
      {
        nom: 'Tamponnade',
        fiche: 'pericardite-aigue-et-tamponnade',
        description: 'Épanchement compressif.',
        traitement: '- Péricardiocentèse',
        clinique: '- Choc, turgescence jugulaire',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Péricardite constrictive',
        description: 'Tuberculose, purulente.',
        traitement: '- Péricardectomie',
        clinique: '- Ascite, hépatomégalie, œdèmes',
        paraclinique: '- Calcifications',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-enfant',
        description: 'Forme purulente.',
        traitement: '- Antibiotiques, réanimation',
        clinique: '- Choc',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée des formes purulentes sans drainage ; risque de constriction dans les formes tuberculeuses',
    urgences: ['choc-septique'],
    symptomes: [
      ['Douleur thoracique', 'frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Dyspnée', 'tres_frequent'],
      ['Hépatomégalie', 'frequent'],
      ['Toux', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'ESC — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Repérer, antibiotiques si fièvre, transfert', '- Dyspnée, cardiomégalie, choc'],
      hgr: ['- Échocardiographie, péricardiocentèse, antibiotiques', '- Drainage chirurgical'],
      tert: ['- Chirurgie cardiaque pédiatrique', ''],
    },
    alertes: { 'choc-septique': 'Enfant fébrile avec épanchement péricardique et hypotension' },
    formes: [
      {
        nom: 'Péricardite purulente',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Pneumonie ou ostéomyélite récente',
        fonctionnels: '- Dyspnée',
        generaux: '- Fièvre élevée, sepsis',
        physiques: '- Assourdissement des bruits du cœur',
        paraclinique: '- Pus péricardique',
        etiologies: '- Staphylococcus aureus',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Péricardite tuberculeuse',
        type: 'commune',
        description: 'Subaiguë.',
        terrain: '- VIH, contage',
        fonctionnels: '- Dyspnée progressive',
        generaux: '- Amaigrissement, sueurs',
        physiques: '- Hépatomégalie, turgescence',
        paraclinique: '- Liquide lymphocytaire, Xpert',
        etiologies: '- M. tuberculosis',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
      },
    ],
  },

  // =================================================================== Kawasaki
  {
    ...CARDIOPED,
    slug: 'maladie-de-kawasaki',
    nom: 'Maladie de Kawasaki',
    resume:
      'Vascularite aiguë du jeune enfant (< 5 ans), sous-diagnostiquée en Afrique : fièvre ≥ 5 jours avec conjonctivite non purulente, chéilite et langue framboisée, éruption, œdème puis desquamation des extrémités, adénopathie cervicale ; risque d’anévrismes coronaires ; immunoglobulines IV 2 g/kg avant J10 et aspirine ; échocardiographie.',
    definition:
      'Vascularite systémique aiguë des artères de moyen calibre, de cause inconnue, touchant surtout l’enfant de moins de 5 ans, principale cause de cardiopathie acquise de l’enfant dans les pays où le RAA est rare.',
    physiopathologie:
      '## Mécanismes\n- Réponse immunitaire excessive probablement déclenchée par un agent infectieux chez un enfant prédisposé\n- Atteinte des artères coronaires : **anévrismes**, thromboses, infarctus\n\n## Formes apparentées\n- Syndrome inflammatoire multisystémique post-COVID (MIS-C) : tableau proche, avec atteinte myocardique et digestive',
    diagnostic:
      '## Critères (fièvre ≥ 5 jours + au moins 4 des 5)\n- **Conjonctivite** bilatérale non purulente\n- **Lèvres** rouges et fissurées, **langue framboisée**, pharynx rouge\n- **Éruption** polymorphe\n- **Extrémités** : œdème, érythème palmo-plantaire, puis desquamation des doigts (2e–3e semaine)\n- **Adénopathie** cervicale > 1,5 cm, souvent unilatérale\n- Formes incomplètes fréquentes chez le nourrisson : y penser devant une fièvre prolongée inexpliquée\n\n## Examens\n- CRP, VS élevées, hyperleucocytose, **thrombocytose** (2e semaine), anémie, hypoalbuminémie, leucocyturie aseptique\n- **Échocardiographie** au diagnostic, à 2 et 6 semaines\n- Éliminer : rougeole, scarlatine, infections bactériennes, paludisme',
    examens: [
      ['confirmation', 'echocardiographie', 'Anévrismes coronaires.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'vitesse-sedimentation', 'Inflammation.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose, thrombocytose.'],
      ['premiere_intention', 'bilan-hepatique', 'Hypoalbuminémie, cytolyse.'],
      ['premiere_intention', 'bandelette-urinaire', 'Leucocyturie aseptique.'],
      ['etiologique', 'tdr-paludisme', 'Diagnostic différentiel.'],
      ['premiere_intention', 'ecg', 'Ischémie, troubles du rythme.'],
    ],
    scores: [],
    differentiels: [
      ['scarlatine', 'Angine streptococcique, TDR positif.'],
      ['rougeole', 'Toux, Köplik, contexte épidémique.'],
      ['toxidermies-graves', 'Prise médicamenteuse, atteinte muqueuse érosive.'],
      ['fievre-prolongee-enfant', 'Autres causes de fièvre prolongée.'],
      ['Syndrome du choc toxique', 'Choc, foyer staphylococcique.'],
    ],
    etiologies: '## Terrain\n- Enfant de 6 mois à 5 ans ; garçon',
    principes: [
      [
        'Traitement de la phase aiguë',
        'Prévenir les anévrismes.',
        '- **Immunoglobulines IV** **2 g/kg** en une perfusion de 10 à 12 h, **avant le 10e jour** (et après si fièvre ou inflammation persistantes)\n- **Aspirine** 30–50 mg/kg/j (dose modérée) en 4 prises jusqu’à 48–72 h d’apyrexie, puis **3–5 mg/kg/j** une fois par jour pendant 6 à 8 semaines (prolongée si anévrismes)\n- Formes à haut risque ou résistance : corticoïdes (centre spécialisé)',
      ],
      [
        'Suivi',
        'Surveiller les coronaires.',
        '- **Échocardiographie** au diagnostic, à 2 et 6 semaines\n- Anévrismes : anticoagulation et suivi cardiologique prolongé\n- Pas de vaccin vivant pendant 11 mois après les immunoglobulines ; vaccination antigrippale sous aspirine (risque de syndrome de Reye)',
      ],
    ],
    molecules: [
      ['immunoglobulines-humaines-polyvalentes', 'premiere', '2 g/kg avant J10'],
      ['acide-acetylsalicylique', 'premiere', 'Dose modérée puis antiagrégante'],
      ['prednisolone', 'deuxieme', 'Formes résistantes ou à haut risque'],
    ],
    complications: [
      {
        nom: 'Anévrismes coronaires',
        description: '20–25 % sans traitement.',
        traitement: '- Aspirine, anticoagulation',
        clinique: '- Souvent silencieux',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Infarctus du myocarde',
        description: 'Thrombose d’anévrisme.',
        traitement: '- Prise en charge cardiologique',
        clinique: '- Douleur, choc',
        paraclinique: '- ECG, troponine',
      },
      {
        nom: 'Myocardite et insuffisance cardiaque',
        fiche: 'myocardite-enfant',
        description: 'Phase aiguë.',
        traitement: '- Traitement de l’insuffisance cardiaque',
        clinique: '- Tachycardie, galop',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Anévrismes chez moins de 5 % des enfants traités avant J10 contre 25 % sans traitement',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Yeux rouges', 'tres_frequent'],
      ['Éruption cutanée', 'frequent'],
      ['Langue framboisée', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Œdèmes', 'frequent'],
    ],
    sources: [
      'AHA — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Penser au Kawasaki devant une fièvre ≥ 5 jours inexpliquée, orientation',
        '- Fièvre prolongée avec conjonctivite et éruption',
      ],
      hgr: ['- Bilan, aspirine, échocardiographie', '- Immunoglobulines IV'],
      tert: ['- Cardiologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Kawasaki complet',
        type: 'commune',
        description: 'Critères réunis.',
        terrain: '- Enfant < 5 ans',
        fonctionnels: '- Irritabilité',
        generaux: '- Fièvre ≥ 5 jours',
        physiques: '- Conjonctivite, chéilite, éruption, œdème des extrémités',
        paraclinique: '- CRP élevée, thrombocytose',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Kawasaki incomplet du nourrisson',
        type: 'terrain',
        description: 'Peu de critères.',
        terrain: '- Nourrisson < 1 an',
        fonctionnels: '',
        generaux: '- Fièvre prolongée',
        physiques: '- Peu de signes',
        paraclinique: '- Anévrismes possibles',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles du rythme
  {
    ...CARDIOPED,
    slug: 'troubles-du-rythme-enfant',
    nom: 'Troubles du rythme de l’enfant',
    resume:
      'Arythmies de l’enfant : tachycardie supraventriculaire (la plus fréquente : FC > 220/min chez le nourrisson, > 180/min chez l’enfant), bradycardies (hypoxie, bloc auriculo-ventriculaire congénital), tachycardies ventriculaires (myocardite, cardiomyopathie, hyperkaliémie) ; ECG ; manœuvres vagales, adénosine IV rapide ; cardioversion synchrone si instabilité ; bradycardie : oxygène et ventilation d’abord, puis adrénaline.',
    definition:
      'Anomalies de la fréquence ou de la régularité du rythme cardiaque chez l’enfant, d’origine supraventriculaire, ventriculaire ou par troubles de conduction.',
    physiopathologie:
      '## Tachycardies\n- **Tachycardie supraventriculaire** par réentrée (voie accessoire, syndrome de Wolff-Parkinson-White)\n- Tachycardie ventriculaire : myocardite, cardiomyopathie, cardiopathie opérée, troubles ioniques, intoxications\n\n## Bradycardies\n- **Hypoxie** (cause principale chez l’enfant), hypothermie, HTIC, hyperkaliémie\n- **Bloc auriculo-ventriculaire congénital** (mère lupique), post-chirurgical, myocardite, diphtérie',
    diagnostic:
      '## Clinique\n- Nourrisson : irritabilité, refus de boire, pâleur, polypnée, insuffisance cardiaque si tachycardie prolongée\n- Enfant : palpitations, malaise, douleur thoracique, syncope\n- **Instabilité** : hypotension, troubles de conscience, choc, insuffisance cardiaque\n\n## Examens\n- **ECG 12 dérivations** (pendant la crise si possible)\n- Ionogramme (kaliémie, calcémie), glycémie, SpO2\n- Échocardiographie (cardiopathie sous-jacente)',
    examens: [
      ['confirmation', 'ecg', 'Type d’arythmie.'],
      ['premiere_intention', 'ionogramme', 'Kaliémie.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Calcium, magnésium.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxie.'],
      ['deuxieme_intention', 'echocardiographie', 'Cardiopathie.'],
      ['etiologique', 'glycemie', 'Hypoglycémie.'],
    ],
    scores: [],
    differentiels: [
      [
        'Tachycardie sinusale',
        'Fièvre, douleur, hypovolémie : variabilité de la fréquence, ondes P normales.',
      ],
      ['myocardite-enfant', 'Arythmie avec dysfonction ventriculaire.'],
      ['choc-enfant', 'Tachycardie compensatrice.'],
      ['syncope-et-malaise', 'Malaise vagal.'],
    ],
    etiologies:
      '## Causes\n- Voie accessoire, myocardite, cardiopathies, hypoxie, troubles ioniques, intoxications',
    principes: [
      [
        'Tachycardie supraventriculaire stable',
        'Réduire.',
        '- **Manœuvres vagales** : nourrisson, poche de glace et d’eau sur le visage 15–30 s ; enfant, souffler dans une seringue, manœuvre de Valsalva\n- **Adénosine** 0,1 mg/kg IV rapide (max 6 mg) suivie d’un flush, puis 0,2 mg/kg (max 12 mg) si échec\n- Prévention des récidives : propranolol, avis cardiologique',
      ],
      [
        'Tachycardie instable',
        'Cardioversion.',
        '- **Cardioversion synchrone** 0,5–1 J/kg, puis 2 J/kg, sous sédation si possible\n- Tachycardie ventriculaire stable : **amiodarone** 5 mg/kg en 20–60 min (avis spécialisé)',
      ],
      [
        'Bradycardie',
        'Traiter l’hypoxie d’abord.',
        '- **Oxygène, ventilation** ; si FC < 60/min avec mauvaise perfusion malgré la ventilation : massage cardiaque et **adrénaline** 10 µg/kg IV\n- **Atropine** 0,02 mg/kg si cause vagale ou bloc ; stimulation pour les blocs complets\n- Corriger l’hyperkaliémie, l’hypothermie',
      ],
    ],
    molecules: [
      ['adenosine', 'premiere', 'Tachycardie supraventriculaire'],
      ['amiodarone', 'alternative', 'Tachycardie ventriculaire'],
      ['propranolol', 'alternative', 'Prévention des récidives'],
      ['adrenaline-epinephrine', 'premiere', 'Bradycardie avec mauvaise perfusion'],
      ['atropine', 'alternative', 'Bradycardie vagale'],
      ['oxygene', 'premiere', 'Hypoxie'],
    ],
    complications: [
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Tachycardie prolongée.',
        traitement: '- Réduction, traitement de l’insuffisance cardiaque',
        clinique: '- Polypnée, hépatomégalie',
        paraclinique: '',
      },
      {
        nom: 'Arrêt cardiaque',
        fiche: 'arret-cardiorespiratoire-enfant',
        description: 'Arythmie ventriculaire, bradycardie extrême.',
        traitement: '- Réanimation',
        clinique: '- Absence de pouls',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent pour la tachycardie supraventriculaire (disparition fréquente avant 1 an) ; dépend de la cardiopathie pour les autres',
    urgences: [],
    symptomes: [
      ['Palpitations', 'tres_frequent'],
      ['Pâleur', 'frequent'],
      ['Syncope', 'occasionnel'],
      ['Tachypnée', 'frequent'],
      ['Refus de téter', 'occasionnel'],
    ],
    sources: [
      'AHA — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Repérer, manœuvres vagales, oxygène, transfert',
        '- Tachycardie > 220/min, bradycardie, malaise',
      ],
      hgr: ['- ECG, adénosine, cardioversion', ''],
      tert: ['- Cardiologie pédiatrique, ablation, stimulateur', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tachycardie supraventriculaire du nourrisson',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Nourrisson',
        fonctionnels: '- Irritabilité, refus de boire',
        generaux: '- Pâleur',
        physiques: '- FC > 220/min',
        paraclinique: '- QRS fins réguliers',
        etiologies: '- Voie accessoire',
        syndromes: [],
      },
      {
        nom: 'Bradycardie hypoxique',
        type: 'gravite',
        description: 'Pré-arrêt.',
        terrain: '- Détresse respiratoire',
        fonctionnels: '',
        generaux: '- Mauvaise perfusion',
        physiques: '- FC < 60/min',
        paraclinique: '- Hypoxie',
        etiologies: '- Hypoxie',
        syndromes: [],
      },
      {
        nom: 'Bloc auriculo-ventriculaire congénital',
        type: 'etiologique',
        description: 'Mère lupique.',
        terrain: '- Nouveau-né',
        fonctionnels: '',
        generaux: '',
        physiques: '- Bradycardie fixe',
        paraclinique: '- BAV complet',
        etiologies: '- Anticorps maternels',
        syndromes: [],
      },
    ],
  },

  // =================================================================== HTA enfant
  {
    ...CARDIOPED,
    slug: 'hypertension-arterielle-enfant',
    nom: 'Hypertension artérielle de l’enfant',
    resume:
      'Pression artérielle ≥ 95e percentile pour l’âge, le sexe et la taille (≥ 130/80 mmHg chez l’adolescent), mesurée avec un brassard adapté : chez le jeune enfant, le plus souvent secondaire (néphropathies, glomérulonéphrite, coarctation de l’aorte) ; chez l’adolescent, souvent primaire (obésité) ; bandelette urinaire, créatinine, échographie rénale ; urgence hypertensive : baisse progressive (≤ 25 % en 8 h) ; amlodipine, IEC selon la cause.',
    definition:
      'Pression artérielle systolique et/ou diastolique supérieure ou égale au 95e percentile pour l’âge, le sexe et la taille, sur au moins trois mesures ; chez l’adolescent de 13 ans et plus, ≥ 130/80 mmHg.',
    physiopathologie:
      '## Causes secondaires (majoritaires avant 6 ans)\n- **Rénales** : glomérulonéphrite aiguë, syndrome néphrotique, néphropathie du VIH, uropathies, cicatrices de pyélonéphrite, sténose de l’artère rénale, tumeur de Wilms\n- **Cardiovasculaires** : **coarctation de l’aorte**\n- Endocriniennes (phéochromocytome, hyperthyroïdie, corticoïdes), médicaments\n\n## HTA primaire\n- Adolescent, **obésité**, antécédents familiaux, sel',
    diagnostic:
      '## Mesure\n- **Brassard adapté** (vessie couvrant 80–100 % du périmètre du bras), enfant au calme, plusieurs mesures, tables de percentiles\n- Prendre la tension aux **quatre membres** (coarctation : pouls fémoraux faibles, tension basse aux jambes)\n\n## Clinique\n- Souvent asymptomatique ; céphalées, épistaxis, troubles visuels\n- **Urgence hypertensive** : encéphalopathie (convulsions, troubles de conscience), insuffisance cardiaque, atteinte rénale\n- Œdèmes, urines foncées (glomérulonéphrite), masse abdominale (Wilms)\n\n## Examens\n- **Bandelette urinaire**, **créatinine**, ionogramme, NFS\n- **Échographie rénale** et Doppler ; échocardiographie (coarctation, hypertrophie ventriculaire), fond d’œil\n- Bilan métabolique chez l’adolescent obèse',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Néphropathie.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'ionogramme', 'Hypokaliémie.'],
      ['premiere_intention', 'echographie-renale', 'Cause rénale, tumeur.'],
      ['deuxieme_intention', 'echocardiographie', 'Coarctation, retentissement.'],
      ['gravite', 'fond-d-oeil', 'Rétinopathie.'],
      ['etiologique', 'tsh', 'Hyperthyroïdie.'],
      ['etiologique', 'bilan-lipidique', 'Adolescent obèse.'],
    ],
    scores: [],
    differentiels: [
      ['glomerulonephrite-aigue-post-streptococcique', 'Œdèmes, hématurie.'],
      ['syndrome-nephrotique-enfant', 'Œdèmes, protéinurie massive.'],
      ['Coarctation de l’aorte', 'Pouls fémoraux faibles, gradient bras-jambes.'],
      ['Hypertension de la blouse blanche', 'Anxiété, normalisation en dehors du cabinet.'],
      ['hypertension-intracranienne', 'HTA réflexe avec bradycardie et céphalées.'],
    ],
    etiologies: '## Causes\n- Néphropathies (GNA, VIH, uropathies), coarctation, obésité, médicaments',
    principes: [
      [
        'Urgence hypertensive',
        'Baisser progressivement.',
        '- Hospitalisation ; baisse de **≤ 25 %** dans les 8 premières heures, puis normalisation sur 24–48 h\n- **Nicardipine** IV 0,5–3 µg/kg/min ou **labétalol** IV 0,2–1 mg/kg (bolus, max 40 mg) ; nifédipine orale 0,25 mg/kg en l’absence d’autre option\n- Surcharge (GNA) : **furosémide** 1–2 mg/kg ; convulsions : diazépam',
      ],
      [
        'HTA chronique',
        'Protéger les organes.',
        '- Mesures hygiéno-diététiques (sel, poids, activité physique)\n- **Amlodipine** 0,1–0,2 mg/kg/j (max 10 mg) ou **IEC** (énalapril 0,08 mg/kg/j, augmenter progressivement) si protéinurie ou néphropathie\n- Traitement de la cause (coarctation : chirurgie ou dilatation)',
      ],
    ],
    molecules: [
      ['amlodipine', 'premiere', 'HTA chronique'],
      ['enalapril', 'premiere', 'Néphropathie, protéinurie'],
      ['nicardipine', 'premiere', 'Urgence hypertensive'],
      ['labetalol', 'alternative', 'Urgence hypertensive'],
      ['furosemide', 'alternative', 'Surcharge'],
      ['nifedipine', 'alternative', 'Urgence (à défaut)'],
    ],
    complications: [
      {
        nom: 'Encéphalopathie hypertensive',
        fiche: 'urgences-hypertensives',
        description: 'HTA sévère.',
        traitement: '- Baisse progressive de la tension',
        clinique: '- Convulsions, céphalées',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Surcharge, HTA sévère.',
        traitement: '- Diurétiques, antihypertenseurs',
        clinique: '- Dyspnée',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Atteinte rénale et rétinienne',
        fiche: 'nephropathie-hypertensive',
        description: 'HTA prolongée.',
        traitement: '- Contrôle tensionnel',
        clinique: '',
        paraclinique: '- Créatinine, fond d’œil',
      },
    ],
    evolution: '## Pronostic\n- Celui de la cause ; bon si l’HTA est contrôlée',
    urgences: ['urgence-hypertensive'],
    symptomes: [
      ['Céphalées', 'frequent'],
      ['Épistaxis', 'occasionnel'],
      ['Troubles visuels', 'occasionnel'],
      ['Œdèmes', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'AHA — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Mesure avec brassard adapté, bandelette, orientation', '- HTA sévère, convulsions, œdèmes'],
      hgr: ['- Bilan, traitement de l’urgence', ''],
      tert: ['- Néphrologie et cardiologie pédiatriques', ''],
    },
    alertes: { 'urgence-hypertensive': 'Enfant hypertendu avec céphalées, convulsions ou troubles visuels' },
    formes: [
      {
        nom: 'HTA secondaire du jeune enfant',
        type: 'commune',
        description: 'Cause rénale surtout.',
        terrain: '- Enfant < 6 ans',
        fonctionnels: '- Souvent asymptomatique',
        generaux: '',
        physiques: '- Œdèmes, masse abdominale',
        paraclinique: '- Bandelette anormale, échographie rénale',
        etiologies: '- Néphropathie, coarctation',
        syndromes: [],
      },
      {
        nom: 'HTA primaire de l’adolescent',
        type: 'terrain',
        description: 'Obésité.',
        terrain: '- Adolescent obèse',
        fonctionnels: '',
        generaux: '',
        physiques: '- Surpoids',
        paraclinique: '- Bilan normal',
        etiologies: '- Obésité, sel',
        syndromes: [],
      },
      {
        nom: 'Urgence hypertensive de l’enfant',
        type: 'gravite',
        description: 'Atteinte d’organe.',
        terrain: '- GNA',
        fonctionnels: '- Céphalées, vomissements',
        generaux: '',
        physiques: '- Convulsions, troubles visuels',
        paraclinique: '- Rétinopathie',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
    ],
  },
];
