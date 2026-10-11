'use strict';

/**
 * Lot 15 (neurologie et urgences pédiatriques) — convulsions fébriles, épilepsie de
 * l'enfant, paralysie cérébrale, konzo, choc de l'enfant.
 * Rédigé par IA (ILAE, OMS mhGAP, ETAT, AAP) : à valider.
 */

const NEUROPED = { departement: 'pediatrie', specialite: 'Neurologie pédiatrique' };
const URGPED = { departement: 'pediatrie', specialite: 'Urgences pédiatriques' };

module.exports = [
  // =================================================================== Convulsions fébriles
  {
    ...NEUROPED,
    slug: 'convulsions-febriles',
    nom: 'Convulsions fébriles',
    resume:
      'Crise convulsive avec fièvre chez l’enfant de 6 mois à 5 ans sans infection du système nerveux : simple (généralisée, < 15 min, unique) = bénigne ; toujours éliminer méningite et paludisme grave ; diazépam si crise > 5 min.',
    definition:
      'Crise épileptique survenant chez un enfant de 6 mois à 5 ans, associée à une fièvre ≥ 38 °C, en l’absence d’infection du système nerveux central, de trouble métabolique et d’antécédent de crise non fébrile.',
    physiopathologie:
      '## Mécanismes\n- Seuil épileptogène bas du cerveau immature, montée thermique rapide\n- Prédisposition familiale\n- Causes de la fièvre : infections virales, otite, paludisme, roséole, après vaccination',
    diagnostic:
      '## Convulsion fébrile simple\n- Crise **généralisée**, durée **< 15 minutes**, **unique** en 24 h, récupération complète\n\n## Convulsion fébrile complexe\n- Focale, ou > 15 min, ou répétée dans les 24 h, ou déficit post-critique\n\n## À éliminer\n- **Méningite** (raideur, fontanelle bombée, somnolence persistante, âge < 12 mois, antibiotique préalable) : PL\n- **Paludisme grave** (neuropaludisme) : TDR\n- Hypoglycémie, troubles ioniques',
    examens: [
      ['premiere_intention', 'tdr-paludisme', 'Systématique.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['gravite', 'lcr', 'Doute avec une méningite, nourrisson < 12 mois, crise complexe.'],
      ['etiologique', 'ionogramme', 'Crise complexe, déshydratation.'],
      ['deuxieme_intention', 'eeg', 'Crises complexes répétées.'],
    ],
    scores: ['blantyre'],
    differentiels: [
      ['meningite-bacterienne-enfant', 'Signes méningés, conscience altérée persistante.'],
      ['paludisme-grave-enfant', 'Convulsions répétées, coma, TDR positif.'],
      ['epilepsie-enfant', 'Crises sans fièvre.'],
      ['Frissons, malaise vagal', 'Pas de perte de conscience ni de mouvements cloniques.'],
    ],
    etiologies:
      '## Facteurs\n- Antécédents familiaux de convulsions fébriles\n- Infections virales, otite, paludisme, gastro-entérite (Shigella)',
    principes: [
      [
        'Pendant la crise',
        'Arrêter la crise.',
        '- Position latérale de sécurité, ne rien mettre dans la bouche, protéger la tête\n- Crise > 5 minutes : **diazépam** 0,5 mg/kg intrarectal (maximum 10 mg) ou 0,3 mg/kg IV, ou **midazolam** buccal/intranasal 0,3 mg/kg ; à répéter une fois\n- Crise persistante : **phénobarbital** 20 mg/kg IV (état de mal)',
      ],
      [
        'Après la crise',
        'Traiter la cause.',
        '- Glycémie, TDR, recherche du foyer infectieux\n- **Paracétamol** pour le confort (ne prévient pas les récidives)\n- Traitement de la cause (ACT, antibiotiques)',
      ],
      [
        'Conseils aux parents',
        'Rassurer.',
        '- Bénignité des convulsions fébriles simples, risque de récidive (30 %)\n- Conduite à tenir en cas de nouvelle crise\n- Pas de traitement antiépileptique au long cours pour les formes simples',
      ],
    ],
    molecules: [
      ['diazepam', 'premiere', 'Crise > 5 min'],
      ['midazolam', 'alternative', 'Voie buccale ou nasale'],
      ['phenobarbital', 'deuxieme', 'État de mal'],
      ['paracetamol', 'adjuvant', 'Confort'],
    ],
    complications: [
      {
        nom: 'État de mal fébrile',
        fiche: 'etat-de-mal-epileptique',
        description: 'Crise prolongée.',
        traitement: '- Benzodiazépine, phénobarbital',
        clinique: '- Crise > 30 min',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Récidive',
        description: '30 % des enfants.',
        traitement: '- Information',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Épilepsie ultérieure',
        fiche: 'epilepsie-enfant',
        description: 'Rare (2 à 5 %), plus fréquente après des crises complexes.',
        traitement: '- Suivi',
        clinique: '- Crises sans fièvre',
        paraclinique: '- EEG',
      },
    ],
    evolution: '## Pronostic\n- Excellent pour les convulsions fébriles simples, sans séquelle',
    urgences: ['etat-de-mal-epileptique-urgence', 'paludisme-grave-urgence'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
    ],
    sources: [
      'ILAE — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
      'AAP — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Diazépam rectal, TDR, glycémie, conseils', '- Crise complexe, signes méningés, coma'],
      hgr: ['- PL, prise en charge de la cause', ''],
      tert: ['- Neurologie pédiatrique', ''],
    },
    alertes: {
      'etat-de-mal-epileptique-urgence': 'Enfant fébrile qui convulse depuis plus de 5 minutes',
      'paludisme-grave-urgence': 'Convulsions répétées avec fièvre et TDR positif',
    },
    formes: [
      {
        nom: 'Convulsion fébrile simple',
        type: 'commune',
        description: 'Crise généralisée brève.',
        terrain: '- Enfant de 6 mois à 5 ans',
        fonctionnels: '',
        generaux: '- Fièvre élevée',
        physiques: '- Récupération complète',
        paraclinique: '- TDR, glycémie',
        etiologies: '- Infection virale, paludisme',
        syndromes: ['syndrome-convulsif'],
        examens: [['tdr-paludisme', 'Systématique']],
      },
      {
        nom: 'Convulsion fébrile complexe',
        type: 'gravite',
        description: 'Focale, prolongée ou répétée.',
        terrain: '- Nourrisson',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Déficit post-critique',
        paraclinique: '- LCR à discuter',
        etiologies: '',
        syndromes: ['syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== Épilepsie enfant
  {
    ...NEUROPED,
    slug: 'epilepsie-enfant',
    nom: 'Épilepsie de l’enfant',
    resume:
      'Au moins 2 crises non provoquées : diagnostic clinique (témoins, vidéo), EEG si possible ; phénobarbital, carbamazépine (crises focales) ou valproate (généralisées, sauf fille pubère) ; scolarité, lutte contre la stigmatisation.',
    definition:
      'Maladie cérébrale caractérisée par au moins 2 crises non provoquées à plus de 24 h d’intervalle (ou 1 crise avec risque élevé de récidive, ou un syndrome épileptique) chez l’enfant.',
    physiopathologie:
      '## Causes en RDC\n- Séquelles de **neuropaludisme**, de **méningite**, d’asphyxie périnatale, de convulsions néonatales\n- Neurocysticercose, onchocercose (syndrome du hochement de tête, épilepsie associée à l’onchocercose)\n- Traumatismes, causes génétiques',
    diagnostic:
      '## Clinique\n- Description des crises par les témoins (vidéo sur téléphone)\n- Crises généralisées tonico-cloniques, absences (enfant d’âge scolaire), crises focales, spasmes du nourrisson\n- Développement, examen neurologique, recherche de causes\n\n## Examens\n- EEG, imagerie si crises focales ou anomalies neurologiques\n- Éliminer les crises provoquées (fièvre, hypoglycémie)',
    examens: [
      ['confirmation', 'eeg', 'Type d’épilepsie (si disponible).'],
      ['deuxieme_intention', 'scanner-cerebral', 'Crises focales, déficit (neurocysticercose, séquelles).'],
      ['premiere_intention', 'glycemie', 'Crise provoquée.'],
      ['etiologique', 'calcemie-magnesemie', 'Hypocalcémie.'],
      ['suivi', 'nfs', 'Sous carbamazépine ou valproate.'],
    ],
    scores: [],
    differentiels: [
      ['convulsions-febriles', 'Crises uniquement fébriles avant 5 ans.'],
      ['Syncope, spasme du sanglot', 'Déclencheur, récupération rapide.'],
      ['Crises psychogènes', 'Contexte émotionnel, yeux fermés.'],
      ['Mouvements anormaux', 'Conscience conservée.'],
    ],
    etiologies:
      '## Causes\n- Séquelles infectieuses (neuropaludisme, méningite), asphyxie\n- Onchocercose (zones d’endémie), neurocysticercose\n- Traumatismes crâniens, malformations, causes génétiques',
    principes: [
      [
        'Antiépileptique',
        'Contrôler les crises.',
        '- **Phénobarbital** 3–5 mg/kg/j (option du mhGAP, peu coûteux)\n- **Carbamazépine** 10–20 mg/kg/j (crises focales)\n- **Valproate** 20–30 mg/kg/j (crises généralisées, absences) — éviter chez la fille pubère (tératogène)\n- Monothérapie, augmentation progressive, observance\n- Arrêt progressif après 2 ans sans crise',
      ],
      [
        'Causes spécifiques',
        'Traiter.',
        '- Zones d’onchocercose : **ivermectine** (traitement de masse)\n- Neurocysticercose : albendazole + corticoïdes (avis spécialisé)',
      ],
      [
        'Accompagnement',
        'Améliorer la qualité de vie.',
        '- Information de la famille et de l’école, lutte contre la stigmatisation (épilepsie non contagieuse)\n- Prévention des accidents (eau, feu), conduite à tenir en cas de crise\n- Crise > 5 min : diazépam rectal',
      ],
    ],
    molecules: [
      ['phenobarbital', 'premiere', 'Option de base (mhGAP)'],
      ['carbamazepine', 'premiere', 'Crises focales'],
      ['valproate-de-sodium-acide-valproique', 'premiere', 'Crises généralisées (pas chez la fille pubère)'],
      ['levetiracetam', 'alternative', 'Selon disponibilité'],
      ['diazepam', 'adjuvant', 'Crise prolongée'],
      ['ivermectine', 'adjuvant', 'Épilepsie associée à l’onchocercose'],
    ],
    complications: [
      {
        nom: 'État de mal épileptique',
        fiche: 'etat-de-mal-epileptique',
        description: 'Arrêt du traitement, fièvre.',
        traitement: '- Benzodiazépines, phénobarbital',
        clinique: '- Crises prolongées',
        paraclinique: '',
      },
      {
        nom: 'Brûlures et noyades',
        description: 'Crises près du feu ou de l’eau.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Difficultés scolaires et stigmatisation',
        description: 'Exclusion.',
        traitement: '- Éducation, soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- 70 % des enfants contrôlés par un antiépileptique bien pris',
    urgences: ['etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Troubles du comportement', 'occasionnel'],
      ['Retard de développement psychomoteur', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'ILAE — A practical clinical definition of epilepsy',
      'ILAE — Operational classification of seizure types',
    ],
    niveaux: {
      cs: [
        '- Diagnostic clinique, phénobarbital, suivi de l’observance (mhGAP)',
        '- Échec, crises focales, retard de développement',
      ],
      hgr: ['- EEG, choix de l’antiépileptique', ''],
      tert: ['- Neurologie pédiatrique, imagerie', ''],
    },
    alertes: {
      'etat-de-mal-epileptique-urgence':
        'Enfant épileptique qui convulse depuis plus de 5 minutes ou sans reprise de conscience',
    },
    formes: [
      {
        nom: 'Épilepsie généralisée tonico-clonique',
        type: 'commune',
        description: 'Crises généralisées.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '- Chutes, morsure de langue',
        generaux: '',
        physiques: '- Examen normal entre les crises',
        paraclinique: '- EEG',
        etiologies: '- Génétique, séquelles',
        syndromes: ['syndrome-convulsif'],
        examens: [['eeg', 'Type']],
      },
      {
        nom: 'Épilepsie associée à l’onchocercose (hochement de tête)',
        type: 'etiologique',
        description: 'Crises de hochement de tête.',
        terrain: '- Enfant de 5 à 15 ans, zone d’onchocercose',
        fonctionnels: '- Hochements de tête, chutes',
        generaux: '- Retard de croissance',
        physiques: '- Troubles cognitifs',
        paraclinique: '- Microfilaires',
        etiologies: '- Onchocerca volvulus',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Paralysie cérébrale
  {
    ...NEUROPED,
    slug: 'paralysie-cerebrale',
    nom: 'Paralysie cérébrale',
    resume:
      'Trouble moteur permanent dû à une lésion du cerveau en développement (asphyxie, ictère nucléaire, méningite, neuropaludisme, prématurité) : spasticité, retard moteur ; rééducation, prévention des rétractions, nutrition, épilepsie, inclusion.',
    definition:
      'Ensemble de troubles permanents du mouvement et de la posture, non progressifs, causés par une lésion survenue sur le cerveau en développement (fœtus, nouveau-né, jeune enfant), souvent associés à des troubles sensoriels, cognitifs, de communication et à une épilepsie.',
    physiopathologie:
      '## Causes\n- Prénatales : infections congénitales, malformations\n- Périnatales : **asphyxie**, **prématurité**, **ictère nucléaire**, hypoglycémie\n- Postnatales : **méningite**, **neuropaludisme**, traumatismes, AVC drépanocytaire',
    diagnostic:
      '## Clinique\n- **Retard des acquisitions motrices** (tenue de tête, position assise, marche)\n- **Spasticité**, réflexes vifs, posture anormale (formes spastiques : hémiplégie, diplégie, quadriplégie)\n- Mouvements involontaires (dyskinétique), ataxie\n- Troubles associés : déglutition, salivation, malnutrition, épilepsie, troubles visuels et auditifs, déficience intellectuelle\n\n## Évaluation\n- Niveau fonctionnel (GMFCS), nutrition, épilepsie, audition, vision',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Malnutrition fréquente.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Lésions, si diagnostic incertain.'],
      ['deuxieme_intention', 'eeg', 'Épilepsie associée.'],
    ],
    scores: [],
    differentiels: [
      ['Maladies neuromusculaires', 'Hypotonie et faiblesse progressives, réflexes abolis.'],
      ['konzo', 'Paraparésie spastique brutale chez un enfant auparavant normal, manioc amer.'],
      ['Maladies métaboliques et dégénératives', 'Régression des acquisitions.'],
    ],
    etiologies:
      '## Facteurs\n- Asphyxie périnatale, prématurité, ictère néonatal non traité\n- Méningites, neuropaludisme, malnutrition\n- Faible accès aux soins obstétricaux et néonatals',
    principes: [
      [
        'Rééducation précoce',
        'Maximiser les capacités.',
        '- Kinésithérapie, positionnement, étirements, prévention des rétractions\n- Aides techniques (sièges, attelles), programmes communautaires (formation des parents)\n- Orthophonie, stimulation',
      ],
      [
        'Traitements médicaux',
        'Réduire les complications.',
        '- Spasticité : **baclofène** ; toxine botulique en centre spécialisé\n- Épilepsie : antiépileptique\n- Hypersalivation, reflux, constipation\n- Nutrition : alimentation adaptée (consistance, position), suivi de croissance',
      ],
      [
        'Inclusion et prévention',
        'Améliorer la vie de l’enfant.',
        '- Scolarisation inclusive, soutien des familles, lutte contre la stigmatisation\n- Prévention : soins obstétricaux, réanimation néonatale, traitement de l’ictère, vaccinations, prise en charge rapide du paludisme et des méningites',
      ],
    ],
    molecules: [
      ['baclofene', 'premiere', 'Spasticité'],
      ['diazepam', 'alternative', 'Spasticité, crises'],
      ['phenobarbital', 'adjuvant', 'Épilepsie associée'],
      ['carbamazepine', 'adjuvant', 'Épilepsie associée'],
      ['lactulose', 'adjuvant', 'Constipation'],
    ],
    complications: [
      {
        nom: 'Malnutrition et fausses routes',
        fiche: 'malnutrition-aigue-severe',
        description: 'Troubles de déglutition.',
        traitement: '- Adaptation alimentaire',
        clinique: '- Toux pendant les repas, maigreur',
        paraclinique: '',
      },
      {
        nom: 'Pneumonies d’inhalation',
        fiche: 'pneumonie-enfant',
        description: 'Fausses routes.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, toux',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Rétractions et luxation de hanche',
        description: 'Spasticité.',
        traitement: '- Rééducation, chirurgie',
        clinique: '- Déformations',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Épilepsie',
        fiche: 'epilepsie-enfant',
        description: 'Fréquente.',
        traitement: '- Antiépileptiques',
        clinique: '- Crises',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- La lésion ne progresse pas, mais les difficultés évoluent avec la croissance ; espérance de vie réduite dans les formes sévères (nutrition, infections)',
    urgences: [],
    symptomes: [
      ['Retard de développement psychomoteur', 'tres_frequent'],
      ['Spasticité', 'tres_frequent'],
      ['Convulsions', 'frequent'],
      ['Dysphagie', 'frequent'],
      ['Retard de croissance', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
      'AAP — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Dépistage du retard moteur, conseils aux parents, rééducation communautaire',
        '- Diagnostic, épilepsie, malnutrition',
      ],
      hgr: ['- Kinésithérapie, prise en charge des complications', ''],
      tert: ['- Neuropédiatrie, orthopédie, centres de rééducation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Quadriplégie spastique',
        type: 'commune',
        description: 'Atteinte des 4 membres.',
        terrain: '- Asphyxie sévère, méningite',
        fonctionnels: '- Pas de tenue de tête ni de position assise',
        generaux: '- Malnutrition',
        physiques: '- Spasticité des 4 membres, microcéphalie',
        paraclinique: '',
        etiologies: '- Lésions étendues',
        syndromes: ['syndrome-pyramidal'],
      },
      {
        nom: 'Hémiplégie spastique',
        type: 'topographique',
        description: 'Atteinte d’un côté.',
        terrain: '- AVC périnatal, drépanocytose',
        fonctionnels: '- Utilise une seule main',
        generaux: '',
        physiques: '- Spasticité unilatérale',
        paraclinique: '',
        etiologies: '- Lésion focale',
        syndromes: ['syndrome-pyramidal'],
      },
    ],
  },

  // =================================================================== Konzo
  {
    ...NEUROPED,
    slug: 'konzo',
    nom: 'Konzo',
    resume:
      'Paraparésie spastique d’installation brutale, irréversible, chez l’enfant et la femme des zones rurales consommant du manioc amer mal roui (cyanure) en période de pénurie : notifier, rééducation, sécurité alimentaire et méthode de mouillage de la farine.',
    definition:
      'Neuropathie toxico-nutritionnelle épidémique décrite en RDC (Bandundu, Kwango, Kongo-Central), associant une paraparésie spastique symétrique d’installation brutale et non progressive à une alimentation dominée par du manioc amer insuffisamment détoxifié, avec carence en protéines soufrées.',
    physiopathologie:
      '## Mécanismes\n- Glucosides cyanogènes (linamarine) du manioc amer : exposition au cyanure\n- Faible apport en acides aminés soufrés (détoxification insuffisante)\n- Atteinte des motoneurones supérieurs (voies corticospinales)',
    diagnostic:
      '## Critères OMS\n- Anomalie de la marche ou de la station d’**installation brutale** (< 1 semaine), **non progressive**\n- **Symétrique**, spastique (réflexes vifs, clonus, Babinski)\n- Enfant ou femme en âge de procréer, zone d’endémie, consommation de manioc amer\n- Pas d’autre cause (pas de troubles sensitifs, pas de fièvre)\n\n## Formes\n- Légère (marche sans aide), modérée (canne), sévère (incapacité de marcher) ; troubles visuels et de la parole possibles',
    examens: [
      ['etiologique', 'lcr', 'Normal (élimine une autre cause).'],
      ['etiologique', 'selles-poliovirus', 'Diagnostic différentiel des paralysies de l’enfant (PFA).'],
      ['deuxieme_intention', 'irm-rachidienne', 'Doute avec une compression médullaire.'],
    ],
    scores: [],
    differentiels: [
      ['poliomyelite-paralysies-flasques-aigues', 'Paralysie flasque asymétrique, réflexes abolis.'],
      ['mal-de-pott', 'Gibbosité, douleur rachidienne, installation progressive.'],
      ['paralysie-cerebrale', 'Atteinte depuis la petite enfance.'],
      [
        'Paraparésie spastique tropicale (HTLV-1)',
        'Adulte, installation progressive, troubles sphinctériens.',
      ],
    ],
    etiologies:
      '## Facteurs\n- Consommation quasi exclusive de **manioc amer** insuffisamment roui (rouissage raccourci en période de crise)\n- Pauvreté, insécurité alimentaire, sécheresse, conflits\n- Faible apport en protéines animales',
    principes: [
      [
        'Prise en charge',
        'Limiter le handicap.',
        '- Pas de traitement curatif : les lésions sont irréversibles\n- Rééducation, aides à la marche (cannes, béquilles), prévention des rétractions\n- Nutrition riche en protéines',
      ],
      [
        'Prévention',
        'Supprimer l’exposition.',
        '- **Méthode de mouillage** de la farine de manioc (étaler la farine humidifiée à l’ombre 5 h avant cuisson)\n- Rouissage suffisant, diversification alimentaire, apports protéiques\n- Variétés de manioc moins toxiques',
      ],
      [
        'Surveillance',
        'Détecter les épidémies.',
        '- Notification des cas, enquête communautaire, coordination avec les programmes nutritionnels',
      ],
    ],
    molecules: [
      ['baclofene', 'alternative', 'Spasticité gênante'],
      ['multivitamines', 'adjuvant', 'Carences associées'],
    ],
    complications: [
      {
        nom: 'Handicap moteur permanent',
        description: 'Paraparésie définitive.',
        traitement: '- Rééducation, appareillage',
        clinique: '- Marche spastique',
        paraclinique: '',
      },
      {
        nom: 'Rétractions et escarres',
        description: 'Formes sévères.',
        traitement: '- Kinésithérapie, soins',
        clinique: '- Déformations',
        paraclinique: '',
      },
      {
        nom: 'Malnutrition',
        fiche: 'malnutrition-aigue-moderee',
        description: 'Insécurité alimentaire.',
        traitement: '- Soutien nutritionnel',
        clinique: '',
        paraclinique: '- PB',
      },
    ],
    evolution:
      '## Pronostic\n- Atteinte non progressive mais irréversible ; aggravation possible en cas de nouvelle exposition',
    urgences: [],
    symptomes: [
      ['Spasticité', 'tres_frequent'],
      ['Déficit moteur', 'tres_frequent'],
      ['Troubles du langage', 'occasionnel'],
      ['Troubles visuels', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
      'Guide de prescription et ordinogrammes RDC',
    ],
    niveaux: {
      cs: ['- Reconnaître et notifier, éducation à la méthode de mouillage', '- Diagnostic incertain'],
      hgr: ['- Bilan différentiel, rééducation', ''],
      tert: ['- Neurologie, centres de rééducation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Konzo de l’enfant',
        type: 'commune',
        description: 'Paraparésie spastique brutale.',
        terrain: '- Enfant de 3 à 13 ans, zone d’endémie, période de pénurie',
        fonctionnels: '- Chutes, marche difficile apparue en quelques jours',
        generaux: '',
        physiques: '- Paraparésie spastique symétrique, clonus, Babinski',
        paraclinique: '- LCR normal',
        etiologies: '- Manioc amer mal détoxifié',
        syndromes: ['syndrome-pyramidal'],
      },
    ],
  },

  // =================================================================== Choc enfant
  {
    ...URGPED,
    slug: 'choc-enfant',
    nom: 'Choc de l’enfant',
    resume:
      'Insuffisance circulatoire aiguë : extrémités froides, TRC > 3 s, pouls faible et rapide, léthargie ; causes : hypovolémie (diarrhée, hémorragie), sepsis, anaphylaxie, cardiogénique ; oxygène, glucose, remplissage adapté (prudence si malnutrition ou anémie), traitement de la cause.',
    definition:
      'Défaillance circulatoire aiguë avec perfusion tissulaire insuffisante ; chez l’enfant, l’hypotension est tardive : le choc se reconnaît d’abord aux signes de mauvaise perfusion (triage ETAT : extrémités froides + TRC > 3 s + pouls faible et rapide).',
    physiopathologie:
      '## Types\n- **Hypovolémique** : déshydratation (diarrhée, choléra), hémorragie, brûlures\n- **Distributif** : sepsis, anaphylaxie\n- **Cardiogénique** : myocardite, cardiopathie, arythmie\n- **Obstructif** : tamponnade, pneumothorax compressif\n- Compensation par tachycardie et vasoconstriction, puis hypotension (décompensation)',
    diagnostic:
      '## Signes (ETAT)\n- **Extrémités froides**, **temps de recoloration capillaire > 3 s**, **pouls faible et rapide**\n- Léthargie ou agitation, oligurie, marbrures\n- Hypotension (tardive)\n\n## Orientation\n- Diarrhée, vomissements (hypovolémie), fièvre (sepsis), saignement, urticaire (anaphylaxie), hépatomégalie et crépitants (cardiogénique), pâleur sévère (anémie)',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme grave.'],
      ['premiere_intention', 'nfs', 'Hb : anémie sévère.'],
      ['premiere_intention', 'hemocultures', 'Sepsis.'],
      ['gravite', 'lactates', 'Hypoperfusion.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['gravite', 'ionogramme', 'Troubles ioniques.'],
    ],
    scores: ['index-de-choc', 'dose-ponderale'],
    differentiels: [
      ['sepsis-enfant', 'Choc septique.'],
      ['cholera-enfant', 'Choc hypovolémique par diarrhée.'],
      ['choc-anaphylactique', 'Urticaire, œdème, bronchospasme.'],
      ['insuffisance-cardiaque-enfant', 'Hépatomégalie, crépitants : remplissage dangereux.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Déshydratation par diarrhée ou choléra\n- Sepsis, paludisme grave\n- Hémorragies (traumatismes, typhoïde perforée)\n- Anaphylaxie, cardiopathies, anémie sévère',
    principes: [
      [
        'Mesures immédiates (ETAT)',
        'Restaurer l’oxygénation et la perfusion.',
        '- Voies aériennes, **oxygène**, voie veineuse ou intra-osseuse, **glucose 10 %** 5 mL/kg si hypoglycémie\n- Garder l’enfant au chaud',
      ],
      [
        'Remplissage selon la situation',
        'Corriger sans aggraver.',
        '- **Choc sans malnutrition sévère** : Ringer lactate ou NaCl 0,9 % **20 mL/kg** rapidement (10–20 mL/kg en milieu sans réanimation, réévaluation), à répéter jusqu’à 40–60 mL/kg si hypovolémie et pas de signes de surcharge\n- **Déshydratation sévère (diarrhée)** : plan C\n- **Malnutrition sévère** : 15 mL/kg en 1 h de Ringer lactate avec glucose, puis transfusion si échec\n- **Anémie sévère** : transfusion plutôt que cristalloïdes\n- **Cardiogénique** : pas de remplissage massif, inotropes, diurétiques selon le cas',
      ],
      [
        'Traitement de la cause',
        'Interrompre le mécanisme.',
        '- Sepsis : **ceftriaxone** dans l’heure ; paludisme : **artésunate**\n- Anaphylaxie : **adrénaline** IM\n- Hémorragie : transfusion, hémostase chirurgicale\n- Choc réfractaire : **adrénaline** ou **noradrénaline** en perfusion',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['chlorure-de-sodium-0-9', 'alternative', 'Remplissage'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['oxygene', 'premiere', 'Toujours'],
      ['ceftriaxone', 'premiere', 'Choc septique'],
      ['artesunate', 'premiere', 'Paludisme grave'],
      ['adrenaline-epinephrine', 'premiere', 'Anaphylaxie, choc réfractaire'],
      ['noradrenaline', 'deuxieme', 'Choc septique réfractaire'],
    ],
    complications: [
      {
        nom: 'Défaillance multiviscérale et décès',
        description: 'Choc prolongé.',
        traitement: '- Réanimation',
        clinique: '- Coma, anurie',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Surcharge volémique',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Remplissage excessif (malnutrition, anémie, cardiopathie).',
        traitement: '- Arrêt du remplissage, furosémide',
        clinique: '- Hépatomégalie, crépitants, polypnée',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hypoperfusion.',
        traitement: '- Restaurer la perfusion',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si reconnu et traité dans la première heure ; mortalité élevée en cas de retard',
    urgences: ['choc-septique', 'deshydratation-severe-enfant'],
    symptomes: [
      ['Hypotension', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Oligurie', 'frequent'],
      ['Hypothermie', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Triage ETAT, oxygène, glucose, remplissage, première dose d’antibiotique, transfert',
        '- Tout enfant en choc',
      ],
      hgr: ['- Remplissage adapté, transfusion, traitement de la cause', '- Choc réfractaire'],
      tert: ['- Réanimation pédiatrique, amines', ''],
    },
    alertes: {
      'choc-septique': 'Enfant fébrile avec extrémités froides, TRC > 3 s et pouls faible',
      'deshydratation-severe-enfant': 'Enfant en choc avec diarrhée ou vomissements',
    },
    formes: [
      {
        nom: 'Choc hypovolémique',
        type: 'commune',
        description: 'Déshydratation ou hémorragie.',
        terrain: '- Diarrhée, choléra, traumatisme',
        fonctionnels: '- Soif, oligurie',
        generaux: '- Léthargie',
        physiques: '- Extrémités froides, TRC > 3 s, yeux enfoncés',
        paraclinique: '- Lactates élevés',
        etiologies: '- Pertes liquidiennes',
        syndromes: ['syndrome-de-choc', 'syndrome-de-deshydratation-extracellulaire'],
      },
      {
        nom: 'Choc septique',
        type: 'etiologique',
        description: 'Infection grave.',
        terrain: '- Malnutrition, drépanocytose, VIH',
        fonctionnels: '',
        generaux: '- Fièvre ou hypothermie',
        physiques: '- Extrémités froides ou chaudes, purpura',
        paraclinique: '- Hémocultures',
        etiologies: '- Bactéries',
        syndromes: ['syndrome-de-choc', 'syndrome-de-reponse-inflammatoire-systemique'],
      },
    ],
  },
];
