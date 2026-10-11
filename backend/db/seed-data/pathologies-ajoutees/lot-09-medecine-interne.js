'use strict';

/**
 * Lot 9 (médecine interne) — dermatoses associées au VIH, choc anaphylactique,
 * intoxications aiguës de l'adulte. Rédigé par IA (OMS, WAO, EAACI, MSF) : à valider.
 */

const DERMATO = { departement: 'medecine-interne', specialite: 'Dermatologie' };
const MIG = { departement: 'medecine-interne', specialite: 'Médecine interne générale' };

module.exports = [
  // =================================================================== Dermatoses VIH
  {
    ...DERMATO,
    slug: 'dermatoses-associees-au-vih',
    nom: 'Dermatoses associées au VIH (prurigo)',
    resume:
      'Manifestations cutanées très fréquentes de l’infection à VIH, souvent révélatrices : prurigo, zona, candidoses, dermite séborrhéique, sarcome de Kaposi, toxidermies ; dépistage du VIH et ARV.',
    definition:
      'Ensemble des atteintes cutanéo-muqueuses survenant au cours de l’infection à VIH, infectieuses, inflammatoires, tumorales ou médicamenteuses, dont la fréquence et la sévérité augmentent avec l’immunodépression.',
    physiopathologie:
      '## Mécanismes\n- Baisse des CD4 : infections opportunistes cutanées, réactivations virales (zona, herpès)\n- Dérèglement immunitaire : prurigo, dermite séborrhéique, folliculite à éosinophiles\n- Hypersensibilité médicamenteuse accrue (cotrimoxazole, névirapine)\n- Syndrome de restauration immunitaire après le début des ARV',
    diagnostic:
      '## Dermatoses évocatrices (dépister le VIH)\n- **Prurigo** : papules excoriées très prurigineuses des membres, cicatrices hyperpigmentées\n- **Zona** de l’adulte jeune, multimétamérique ou récidivant\n- Candidose buccale, leucoplasie orale chevelue\n- Dermite séborrhéique étendue, folliculites\n- Herpès chronique ulcéré (> 1 mois)\n- **Sarcome de Kaposi**, molluscum contagiosum géants\n- Toxidermies\n\n## Démarche\n- Test VIH, CD4, stade OMS\n- Biopsie si lésion atypique',
    examens: [
      ['confirmation', 'tdr-vih', 'Toute dermatose évocatrice.'],
      ['premiere_intention', 'cd4', 'Stade immunitaire.'],
      ['premiere_intention', 'charge-virale-vih', 'Suivi sous ARV.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Kaposi, lésion atypique.'],
      ['etiologique', 'examen-mycologique', 'Mycoses cutanées et unguéales.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis secondaire.'],
      ['etiologique', 'crag-cryptocoque', 'Papules ombiliquées : cryptococcose cutanée.'],
    ],
    scores: ['stades-oms-vih'],
    differentiels: [
      ['gale', 'Sillons, atteinte familiale.'],
      ['Piqûres d’insectes', 'Zones découvertes, contexte.'],
      ['toxidermies-graves', 'Décollement, atteinte muqueuse, médicament récent.'],
      ['Onchodermatite', 'Zone d’endémie, microfilaires.'],
    ],
    etiologies:
      '## Causes principales\n- Infectieuses : virus (zona, herpès, molluscum, HPV), champignons (candida, dermatophytes, cryptocoque), bactéries (staphylocoque, syphilis)\n- Inflammatoires : prurigo, dermite séborrhéique, psoriasis aggravé\n- Tumorales : sarcome de Kaposi, lymphomes\n- Médicamenteuses : cotrimoxazole, névirapine, antituberculeux',
    principes: [
      [
        'Antirétroviraux',
        'Traiter la cause de fond.',
        '- Démarrer le TARV (dolutégravir + lamivudine + ténofovir) ; la plupart des dermatoses régressent avec la restauration immunitaire\n- Prophylaxie par cotrimoxazole selon les directives',
      ],
      [
        'Prurigo et dermatoses inflammatoires',
        'Soulager le prurit.',
        '- Antihistaminique (**cétirizine**), émollients\n- Dermocorticoïde puissant (**bétaméthasone**, clobétasol) en cures courtes\n- Ivermectine si gale associée',
      ],
      [
        'Infections',
        'Traiter spécifiquement.',
        '- Zona : **aciclovir** 800 mg 5 fois par jour 7 jours (débuté tôt), antalgiques\n- Candidose : **fluconazole**\n- Dermite séborrhéique : **kétoconazole** local\n- Pyodermites : antiseptiques, cloxacilline',
      ],
      [
        'Sarcome de Kaposi et toxidermies',
        'Orienter.',
        '- Kaposi : ARV ± chimiothérapie (fiche dédiée)\n- Toxidermie : arrêt du médicament (fiche dédiée)',
      ],
    ],
    molecules: [
      ['dolutegravir', 'premiere', 'TARV'],
      ['cetirizine', 'premiere', 'Prurit'],
      ['betamethasone-topique', 'premiere', 'Prurigo'],
      ['clobetasol-propionate', 'alternative', 'Prurigo résistant'],
      ['aciclovir', 'premiere', 'Zona, herpès'],
      ['fluconazole', 'premiere', 'Candidose'],
      ['ketoconazole', 'alternative', 'Dermite séborrhéique'],
      ['cotrimoxazole', 'adjuvant', 'Prophylaxie'],
    ],
    complications: [
      {
        nom: 'Surinfection bactérienne',
        fiche: 'pyodermites',
        description: 'Grattage.',
        traitement: '- Antiseptiques, antibiotiques',
        clinique: '- Pustules, croûtes',
        paraclinique: '',
      },
      {
        nom: 'Douleurs post-zostériennes',
        description: 'Zona étendu, âge.',
        traitement: '- Antalgiques, amitriptyline, carbamazépine',
        clinique: '- Douleurs neuropathiques',
        paraclinique: '',
      },
      {
        nom: 'Syndrome de restauration immunitaire',
        fiche: 'infection-vih',
        description: 'Aggravation paradoxale après les ARV.',
        traitement: '- Poursuite des ARV, traitement symptomatique',
        clinique: '- Poussée cutanée',
        paraclinique: '- CD4',
      },
      {
        nom: 'Toxidermie grave',
        fiche: 'toxidermies-graves',
        description: 'Cotrimoxazole, névirapine.',
        traitement: '- Arrêt du médicament',
        clinique: '- Bulles, érosions muqueuses',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Amélioration sous ARV ; cicatrices pigmentées durables du prurigo',
    urgences: [],
    symptomes: [
      ['Prurit', 'tres_frequent'],
      ['Éruption cutanée', 'tres_frequent'],
      ['Lésions cutanées violacées', 'occasionnel'],
      ['Perte de poids', 'frequent'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      "Guide national de prise en charge de l'infection à VIH",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Dépistage du VIH devant toute dermatose évocatrice, ARV, antihistaminiques',
        '- Dermatose étendue, Kaposi, toxidermie',
      ],
      hgr: ['- Biopsie, traitements spécifiques', ''],
      tert: ['- Dermatologie, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Prurigo du VIH',
        type: 'commune',
        description: 'Papules prurigineuses excoriées.',
        terrain: '- PVVIH, CD4 < 200',
        fonctionnels: '- Prurit intense',
        generaux: '',
        physiques: '- Papules excoriées des membres, macules hyperpigmentées',
        paraclinique: '- CD4 bas',
        etiologies: '- VIH',
        syndromes: [],
        examens: [['tdr-vih', 'Dépistage']],
      },
      {
        nom: 'Zona de l’immunodéprimé',
        type: 'terrain',
        description: 'Éruption vésiculeuse métamérique étendue.',
        terrain: '- Adulte jeune, PVVIH',
        fonctionnels: '- Douleurs à type de brûlure',
        generaux: '- Fébricule',
        physiques: '- Vésicules en bouquet sur un ou plusieurs dermatomes',
        paraclinique: '',
        etiologies: '- Virus varicelle-zona',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Anaphylaxie
  {
    ...MIG,
    slug: 'choc-anaphylactique',
    nom: 'Choc anaphylactique',
    resume:
      'Réaction d’hypersensibilité systémique grave et rapide : hypotension, détresse respiratoire, signes cutanés ; adrénaline IM immédiate (0,5 mg adulte, 0,01 mg/kg enfant), remplissage, oxygène.',
    definition:
      'Forme la plus grave de l’anaphylaxie : réaction d’hypersensibilité systémique d’installation rapide, menaçant le pronostic vital, avec atteinte circulatoire (hypotension, choc) et/ou respiratoire.',
    physiopathologie:
      '## Mécanismes\n- Dégranulation massive des mastocytes et basophiles (IgE ou non IgE)\n- Histamine, leucotriènes : vasodilatation, fuite capillaire, bronchospasme, œdème laryngé\n- Hypovolémie relative et choc distributif',
    diagnostic:
      '## Clinique (minutes à 2 heures après l’exposition)\n- **Cutanéo-muqueux** : urticaire, prurit, érythème, angio-œdème (absents dans 10 à 20 % des cas)\n- **Respiratoire** : dysphonie, stridor, dyspnée, sibilants, SpO2 basse\n- **Circulatoire** : hypotension, tachycardie, malaise, perte de connaissance\n- **Digestif** : douleurs abdominales, vomissements, diarrhée\n\n## Le diagnostic est clinique : traiter sans attendre',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'Atteinte respiratoire.'],
      ['premiere_intention', 'ecg', 'Ischémie, arythmie.'],
      ['premiere_intention', 'glycemie', 'Malaise.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['Malaise vagal', 'Bradycardie, pâleur, pas d’urticaire ni de bronchospasme.'],
      ['asthme-aigu-grave', 'Pas d’atteinte cutanée ni d’hypotension.'],
      ['Choc septique ou cardiogénique', 'Contexte infectieux ou cardiaque.'],
      ['urticaire-et-angio-oedeme', 'Atteinte cutanée isolée sans signe systémique.'],
      ['Angio-œdème bradykinique', 'IEC, sans urticaire ; répond peu à l’adrénaline.'],
    ],
    etiologies:
      '## Causes\n- **Médicaments** : bêtalactamines, AINS, curares, produits de contraste, sérums hétérologues (antivenimeux)\n- **Piqûres d’hyménoptères** (abeilles, guêpes)\n- **Aliments** : arachide, fruits de mer, poissons, œufs, lait\n- Latex, transfusion',
    principes: [
      [
        'Adrénaline IM immédiate',
        'Traitement de référence.',
        '- **Adrénaline** 1 mg/mL : **0,5 mg IM** chez l’adulte (0,01 mg/kg chez l’enfant, maximum 0,5 mg) à la face antérolatérale de la cuisse\n- Répéter toutes les 5 minutes si nécessaire\n- Choc réfractaire : adrénaline IV titrée (0,05–0,1 µg/kg/min) par un personnel entraîné',
      ],
      [
        'Mesures associées',
        'Restaurer la circulation et l’oxygénation.',
        '- Arrêter l’exposition (perfusion, transfusion)\n- Position allongée jambes surélevées (assise si détresse respiratoire, latérale chez la femme enceinte)\n- **Oxygène** à haut débit\n- **Remplissage** : NaCl 0,9 % 20 mL/kg rapidement, à répéter\n- Bronchospasme : **salbutamol** nébulisé',
      ],
      [
        'Traitements de seconde ligne',
        'Compléter.',
        '- Antihistaminique (**chlorphénamine**) pour les signes cutanés\n- Corticoïde (**hydrocortisone** 200 mg IV) : pas d’effet immédiat\n- Patient sous bêtabloquant : glucagon',
      ],
      [
        'Après l’épisode',
        'Prévenir la récidive.',
        '- Surveillance au moins 6 à 12 h (réaction biphasique)\n- Identification de l’allergène, carte d’allergie, éviction\n- Prescription d’adrénaline auto-injectable si disponible, orientation vers l’allergologue',
      ],
    ],
    molecules: [
      ['adrenaline-epinephrine', 'premiere', '0,5 mg IM, à répéter'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage 20 mL/kg'],
      ['oxygene', 'premiere', 'Haut débit'],
      ['salbutamol', 'adjuvant', 'Bronchospasme'],
      ['chlorphenamine', 'adjuvant', 'Signes cutanés'],
      ['hydrocortisone', 'adjuvant', '200 mg IV'],
      ['glucagon', 'alternative', 'Patient sous bêtabloquant'],
      ['noradrenaline', 'deuxieme', 'Choc réfractaire'],
    ],
    complications: [
      {
        nom: 'Arrêt cardio-respiratoire',
        description: 'Choc ou asphyxie.',
        traitement: '- Réanimation cardio-pulmonaire, adrénaline IV',
        clinique: '- Absence de pouls',
        paraclinique: '',
      },
      {
        nom: 'Œdème laryngé',
        description: 'Asphyxie.',
        traitement: '- Adrénaline, intubation précoce',
        clinique: '- Stridor, dysphonie',
        paraclinique: '',
      },
      {
        nom: 'Réaction biphasique',
        description: 'Récidive 1 à 72 h plus tard.',
        traitement: '- Surveillance',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Ischémie myocardique',
        description: 'Hypotension, adrénaline.',
        traitement: '- Prise en charge cardiologique',
        clinique: '- Douleur thoracique',
        paraclinique: '- ECG, troponine',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent si l’adrénaline est administrée tôt ; la plupart des décès sont liés à un retard d’adrénaline',
    urgences: [],
    symptomes: [
      ['Hypotension', 'tres_frequent'],
      ['Éruption cutanée', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Œdème du visage', 'frequent'],
      ['Sibilants', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Médicaments essentiels — guide pratique d’utilisation',
    ],
    niveaux: {
      cs: [
        '- Adrénaline IM, remplissage, oxygène, trousse d’urgence dans toute salle d’injection',
        '- Après stabilisation : surveillance à l’hôpital',
      ],
      hgr: ['- Prise en charge complète, surveillance 24 h', '- Choc réfractaire'],
      tert: ['- Réanimation, allergologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Anaphylaxie médicamenteuse',
        type: 'commune',
        description: 'Après une injection.',
        terrain: '- Pénicilline, sérum, AINS',
        fonctionnels: '- Malaise, prurit, dyspnée',
        generaux: '- Hypotension, tachycardie',
        physiques: '- Urticaire, angio-œdème, sibilants',
        paraclinique: '',
        etiologies: '- Médicament',
        syndromes: ['syndrome-de-choc'],
      },
      {
        nom: 'Anaphylaxie sans signe cutané',
        type: 'gravite',
        description: 'Choc ou bronchospasme isolé.',
        terrain: '- Bêtabloquant, asthme',
        fonctionnels: '- Dyspnée',
        generaux: '- Collapsus',
        physiques: '- Pas d’urticaire',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Intoxications
  {
    ...MIG,
    slug: 'intoxications-aigues-adulte',
    nom: 'Intoxications aiguës de l’adulte',
    resume:
      'Ingestion volontaire ou accidentelle : évaluation ABC, toxidrome, glycémie ; charbon activé si précoce et adapté ; antidotes ciblés (atropine pour les organophosphorés, N-acétylcystéine pour le paracétamol, naloxone) ; jamais de vomissements provoqués.',
    definition:
      'Exposition à une substance (médicament, pesticide, produit ménager, plante, alcool, caustique, monoxyde de carbone) à dose toxique, entraînant des manifestations cliniques aiguës ; volontaire (tentative de suicide) ou accidentelle.',
    physiopathologie:
      '## Toxidromes principaux\n- **Cholinergique** (organophosphorés, carbamates) : myosis, hypersalivation, bronchorrhée, bradycardie, fasciculations\n- **Anticholinergique** (antihistaminiques, antidépresseurs) : mydriase, agitation, rétention, peau sèche\n- **Opioïde** : coma, myosis, bradypnée\n- **Sédatif** (benzodiazépines, phénobarbital) : coma calme\n- **Sympathomimétique** (amphétamines, cocaïne) : agitation, HTA, hyperthermie\n- Lésionnels : paracétamol (foie), caustiques, méthanol',
    diagnostic:
      '## Démarche\n- **ABC**, conscience (Glasgow), pupilles, glycémie capillaire, température\n- Interroger patient, famille : produit, quantité, heure, emballages\n- Rechercher le **toxidrome**\n- ECG systématique (QRS larges, QT long)\n\n## Intoxications fréquentes en RDC\n- **Organophosphorés** (insecticides agricoles), raticides\n- Paracétamol, antipaludiques (chloroquine, quinine), phénobarbital, antidépresseurs\n- **Caustiques** (soude, eau de Javel), **pétrole** (enfant)\n- Alcool frelaté (méthanol), plantes (datura)\n- Monoxyde de carbone (braseros en pièce fermée)',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie : à corriger immédiatement.'],
      [
        'premiere_intention',
        'ecg',
        'QRS larges (antidépresseurs, quinine, chloroquine), QT long, troubles du rythme.',
      ],
      ['premiere_intention', 'ionogramme', 'Kaliémie (chloroquine), trou anionique.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'bilan-hepatique', 'Paracétamol : transaminases à H24.'],
      ['premiere_intention', 'hemostase', 'TP (paracétamol, raticides anticoagulants).'],
      ['gravite', 'gaz-du-sang', 'Acidose (méthanol, salicylés), hypoventilation.'],
      ['premiere_intention', 'beta-hcg', 'Femme en âge de procréer.'],
      ['gravite', 'radiographie-thoracique', 'Inhalation, pneumopathie au pétrole.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['paludisme-grave', 'Coma fébrile, TDR positif.'],
      ['meningite-bacterienne', 'Fièvre, syndrome méningé.'],
      ['avc', 'Déficit focal.'],
      ['hypoglycemie-adulte', 'À éliminer en premier.'],
      ['traumatisme-cranien', 'Contexte, lésions.'],
    ],
    etiologies:
      '## Circonstances\n- Tentatives de suicide (adolescent, adulte jeune), conflits familiaux\n- Accidents domestiques (produits non étiquetés, bouteilles de boisson réutilisées), agricoles\n- Alcool frelaté, automédication, plantes traditionnelles',
    principes: [
      [
        'Réanimation symptomatique',
        'Priorité absolue.',
        '- Libérer les voies aériennes, PLS si coma, oxygène, voie veineuse\n- **Glucose** si hypoglycémie\n- Remplissage si hypotension, traitement des convulsions (**diazépam**)\n- **Pas de vomissements provoqués**, pas de lait',
      ],
      [
        'Décontamination',
        'Limiter l’absorption.',
        '- **Charbon activé** 50 g si ingestion < 1–2 h d’un toxique adsorbable, patient conscient ou intubé\n- Contre-indiqué : caustiques, pétrole, alcools\n- Décontamination cutanée (organophosphorés) : déshabiller, laver à l’eau et au savon (soignants protégés)',
      ],
      [
        'Antidotes',
        'Neutraliser le toxique.',
        '- **Organophosphorés** : **atropine** 1 à 2 mg IV, doubler toutes les 5 min jusqu’à assèchement des sécrétions, puis perfusion ; ± **pralidoxime**\n- **Paracétamol** : **N-acétylcystéine** IV (150 mg/kg en 1 h, 50 mg/kg en 4 h, 100 mg/kg en 16 h) selon la dose et la paracétamolémie\n- **Opioïdes** : **naloxone** 0,4 mg IV titrée\n- **Benzodiazépines** : flumazénil (prudence)\n- **Antidépresseurs tricycliques, quinine, chloroquine** (QRS larges) : **bicarbonate de sodium** ; chloroquine : diazépam forte dose + adrénaline\n- **Raticides anticoagulants** : **vitamine K1**\n- **Méthanol** : éthanol ou fomépizole, dialyse\n- **Monoxyde de carbone** : oxygène à haut débit',
      ],
      [
        'Après la phase aiguë',
        'Prévenir la récidive.',
        '- **Évaluation psychiatrique** systématique après une intoxication volontaire\n- Sécurisation du domicile, stockage des pesticides',
      ],
    ],
    molecules: [
      ['atropine', 'premiere', 'Organophosphorés'],
      ['pralidoxime', 'adjuvant', 'Organophosphorés'],
      ['acetylcysteine', 'premiere', 'Paracétamol'],
      ['naloxone', 'premiere', 'Opioïdes'],
      ['charbon-active', 'premiere', 'Ingestion récente adsorbable'],
      ['bicarbonate-de-sodium', 'premiere', 'QRS larges (tricycliques, quinine)'],
      ['vitamine-k1-phytomenadione', 'premiere', 'Raticides anticoagulants'],
      ['diazepam', 'premiere', 'Convulsions, chloroquine'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['oxygene', 'premiere', 'Monoxyde de carbone, hypoxémie'],
    ],
    complications: [
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Coma, vomissements, pétrole.',
        traitement: '- Oxygène, antibiotiques si surinfection',
        clinique: '- Dyspnée, fièvre',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Insuffisance hépatique aiguë',
        description: 'Paracétamol.',
        traitement: '- N-acétylcystéine',
        clinique: '- Ictère, confusion',
        paraclinique: '- TP, transaminases',
      },
      {
        nom: 'Troubles du rythme',
        description: 'Effet stabilisant de membrane.',
        traitement: '- Bicarbonate, correction du potassium',
        clinique: '- Palpitations, choc',
        paraclinique: '- ECG',
      },
      {
        nom: 'Sténose œsophagienne',
        description: 'Caustiques.',
        traitement: '- Endoscopie, dilatations',
        clinique: '- Dysphagie',
        paraclinique: '- Endoscopie',
      },
      {
        nom: 'Rhabdomyolyse et insuffisance rénale',
        fiche: 'insuffisance-renale-aigue',
        description: 'Coma prolongé.',
        traitement: '- Hydratation',
        clinique: '- Urines foncées',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pour la plupart des intoxications médicamenteuses prises en charge tôt ; mortalité élevée des organophosphorés, de la chloroquine et des caustiques',
    urgences: [],
    symptomes: [
      ['Troubles de la conscience', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Myosis', 'occasionnel'],
      ['Hypersalivation', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Hypotension', 'occasionnel'],
      ['Troubles du comportement', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'mhGAP Intervention Guide 2.0',
    ],
    niveaux: {
      cs: [
        '- ABC, PLS, glycémie, atropine si toxidrome cholinergique, transfert',
        '- Toute intoxication symptomatique ou volontaire',
      ],
      hgr: [
        '- Charbon activé, antidotes, surveillance, évaluation psychiatrique',
        '- Coma, défaillance respiratoire, besoin de dialyse',
      ],
      tert: ['- Réanimation, dialyse, endoscopie (caustiques)', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Intoxication aux organophosphorés',
        type: 'etiologique',
        description: 'Toxidrome cholinergique.',
        terrain: '- Agriculteur, tentative de suicide',
        fonctionnels: '- Vomissements, diarrhée, sueurs',
        generaux: '- Bradycardie',
        physiques: '- Myosis, hypersalivation, bronchorrhée, fasciculations',
        paraclinique: '',
        etiologies: '- Insecticides',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Intoxication médicamenteuse volontaire',
        type: 'commune',
        description: 'Ingestion de comprimés.',
        terrain: '- Adolescent, adulte jeune, conflit',
        fonctionnels: '- Somnolence, vomissements',
        generaux: '',
        physiques: '- Coma calme ou agitation selon le produit',
        paraclinique: '- ECG, glycémie',
        etiologies: '- Paracétamol, antipaludiques, psychotropes',
        syndromes: ['syndrome-confusionnel'],
        examens: [['ecg', 'Toxicité cardiaque']],
      },
    ],
  },
];
