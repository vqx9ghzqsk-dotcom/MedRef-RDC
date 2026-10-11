'use strict';

/**
 * Lot 10 (pédiatrie générale) — fièvre de l'enfant (démarche PCIME), retard
 * staturo-pondéral, anémie de l'enfant, carence en vitamine A, parasitoses intestinales de
 * l'enfant. Rédigé par IA (OMS, PCIME, UNICEF, programmes nationaux) : à valider.
 */

const PED = { departement: 'pediatrie', specialite: 'Pédiatrie générale' };

module.exports = [
  // =================================================================== Fièvre PCIME
  {
    ...PED,
    slug: 'fievre-enfant-pcime',
    nom: 'Fièvre de l’enfant (démarche PCIME)',
    resume:
      'Démarche systématique devant un enfant fébrile de 2 mois à 5 ans : signes généraux de danger, TDR du paludisme, recherche de raideur de nuque, de rougeole, d’otite, de pneumonie, d’infection urinaire ; traiter, référer ou conseiller.',
    definition:
      'Température axillaire ≥ 37,5 °C (ou antécédent de fièvre) chez l’enfant ; la prise en charge intégrée des maladies de l’enfant (PCIME) propose une évaluation standardisée par signes cliniques et une classification par couleurs (rouge : référer en urgence ; jaune : traitement spécifique ; vert : soins à domicile).',
    physiopathologie:
      '## Causes principales en RDC\n- **Paludisme** (première cause)\n- Infections respiratoires (pneumonie), ORL (otite, angine)\n- Rougeole, infections urinaires, méningite, typhoïde, sepsis\n- Infections virales bénignes',
    diagnostic:
      '## 1. Signes généraux de danger (classification rouge)\n- Incapable de boire ou de téter, vomit tout, a convulsé ou convulse, léthargique ou inconscient\n\n## 2. Évaluation de la fièvre\n- Durée (> 7 jours : référer), **TDR du paludisme** systématique\n- **Raideur de nuque**, fontanelle bombée\n- Éruption généralisée + toux, rhinite ou yeux rouges : **rougeole**\n- Écoulement d’oreille, douleur : otite ; gorge : angine\n- Toux et respiration rapide : pneumonie\n- Brûlures mictionnelles, pleurs à la miction : infection urinaire\n\n## 3. Classification\n- **Maladie fébrile très grave** : signe de danger ou raideur de nuque → référer après première dose\n- **Paludisme** : TDR positif → ACT\n- **Fièvre sans paludisme** : chercher une autre cause, paracétamol, revoir à 2 jours',
    examens: [
      ['premiere_intention', 'tdr-paludisme', 'Systématique devant toute fièvre.'],
      ['deuxieme_intention', 'goutte-epaisse', 'Confirmation et densité parasitaire si disponible.'],
      ['premiere_intention', 'bandelette-urinaire', 'Fièvre sans foyer.'],
      ['deuxieme_intention', 'nfs', 'Anémie, infection.'],
      ['gravite', 'glycemie', 'Signes de danger.'],
      ['gravite', 'lcr', 'Raideur de nuque, convulsions fébriles atypiques.'],
      ['gravite', 'hemocultures', 'Fièvre persistante, sepsis.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['paludisme-simple', 'TDR positif sans signe de gravité.'],
      ['paludisme-grave', 'TDR positif et signes de gravité.'],
      ['pneumonie-enfant', 'Toux, respiration rapide, tirage.'],
      ['meningite-bacterienne', 'Raideur de nuque, fontanelle bombée, convulsions.'],
      ['fievre-typhoide', 'Fièvre prolongée, douleurs abdominales.'],
    ],
    etiologies:
      '## Causes\n- Paludisme, infections respiratoires, otites, angines, rougeole\n- Infections urinaires, méningites, typhoïde, sepsis\n- Infections virales (la majorité des fièvres sans paludisme)',
    principes: [
      [
        'Classification rouge : référer',
        'Sauver la vie.',
        '- Première dose : **artésunate** IV/IM ou rectal (si paludisme grave suspecté) et/ou **ceftriaxone** ou **ampicilline + gentamicine**\n- Prévenir l’hypoglycémie (lait, eau sucrée), **paracétamol** si fièvre ≥ 38,5 °C\n- Transfert urgent',
      ],
      [
        'Paludisme simple',
        'Traiter.',
        '- **Artéméther-luméfantrine** 3 jours selon le poids (ou artésunate-amodiaquine)\n- Paracétamol ; revoir à 3 jours si la fièvre persiste',
      ],
      [
        'Fièvre sans paludisme ni signe de gravité',
        'Éviter les antibiotiques inutiles.',
        '- Traiter une cause identifiée (otite : amoxicilline ; infection urinaire)\n- Sinon : paracétamol, hydratation, conseils, contrôle à 2 jours\n- Pas d’antibiotique sans indication',
      ],
      [
        'Conseils à la mère',
        'Reconnaître les signes de danger.',
        '- Revenir immédiatement si : ne peut pas boire, devient plus malade, convulse, respiration difficile\n- Moustiquaire imprégnée, vaccinations, vitamine A',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', '15 mg/kg toutes les 6 h si fièvre ≥ 38,5 °C'],
      ['artemether', 'premiere', 'Avec luméfantrine : paludisme simple'],
      ['lumefantrine', 'premiere', 'Avec artéméther'],
      ['artesunate', 'premiere', 'Paludisme grave (pré-transfert)'],
      ['amodiaquine', 'alternative', 'Avec artésunate'],
      ['ceftriaxone', 'premiere', 'Maladie fébrile très grave (pré-transfert)'],
      ['amoxicilline', 'alternative', 'Otite, pneumonie'],
    ],
    complications: [
      {
        nom: 'Convulsions fébriles',
        description: 'Enfant de 6 mois à 5 ans.',
        traitement: '- Diazépam rectal si > 5 min, recherche de méningite',
        clinique: '- Crise généralisée brève',
        paraclinique: '- Glycémie, PL selon le contexte',
      },
      {
        nom: 'Paludisme grave',
        fiche: 'paludisme-grave',
        description: 'Retard de traitement.',
        traitement: '- Artésunate',
        clinique: '- Prostration, convulsions',
        paraclinique: '- TDR',
      },
      {
        nom: 'Déshydratation',
        description: 'Fièvre, vomissements.',
        traitement: '- SRO',
        clinique: '- Pli cutané',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- La plupart des fièvres guérissent ; la mortalité vient du paludisme grave, de la pneumonie et de la méningite non reconnus',
    urgences: ['paludisme-grave-urgence', 'syndrome-meninge-febrile'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Toux', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Éruption cutanée', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'WHO guidelines for malaria',
      'Directives nationales de prise en charge du paludisme',
    ],
    niveaux: {
      cs: [
        '- Démarche PCIME complète, TDR, ACT, paracétamol, première dose avant transfert',
        '- Classification rouge, fièvre > 7 jours',
      ],
      hgr: ['- Bilan, hospitalisation des maladies fébriles très graves', ''],
      tert: ['- Pédiatrie spécialisée', ''],
    },
    alertes: {
      'paludisme-grave-urgence':
        'Enfant fébrile avec TDR positif et signe de danger (convulsions, léthargie, ne peut pas boire)',
      'syndrome-meninge-febrile': 'Enfant fébrile avec raideur de nuque ou fontanelle bombée',
    },
    formes: [
      {
        nom: 'Fièvre sans signe de danger',
        type: 'commune',
        description: 'Classification jaune ou verte.',
        terrain: '- Enfant de 2 mois à 5 ans',
        fonctionnels: '- Fièvre, perte d’appétit',
        generaux: '- Fièvre',
        physiques: '- Examen à la recherche d’un foyer',
        paraclinique: '- TDR',
        etiologies: '- Paludisme, virus, ORL',
        syndromes: ['syndrome-infectieux'],
        examens: [['tdr-paludisme', 'Systématique']],
      },
      {
        nom: 'Maladie fébrile très grave',
        type: 'gravite',
        description: 'Classification rouge.',
        terrain: '- Enfant non vacciné, malnutri',
        fonctionnels: '- Ne peut pas boire, vomit tout',
        generaux: '- Léthargie',
        physiques: '- Convulsions, raideur de nuque',
        paraclinique: '',
        etiologies: '- Paludisme grave, méningite, sepsis',
        syndromes: ['syndrome-meninge', 'syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== Retard staturo-pondéral
  {
    ...PED,
    slug: 'retard-staturo-ponderal',
    nom: 'Retard staturo-pondéral',
    resume:
      'Cassure ou insuffisance de la courbe de poids et/ou de taille (malnutrition chronique, carences, infections, maladies chroniques) : courbes OMS, enquête alimentaire, recherche du VIH, de la tuberculose, de la drépanocytose ; prise en charge nutritionnelle.',
    definition:
      'Croissance insuffisante : poids pour l’âge < −2 DS (insuffisance pondérale), taille pour l’âge < −2 DS (**retard de croissance**, malnutrition chronique), ou cassure de la courbe ; le retard de croissance touche environ 40 % des enfants de moins de 5 ans en RDC.',
    physiopathologie:
      '## Mécanismes\n- Apports insuffisants (quantité, qualité, diversité), allaitement non optimal\n- Infections répétées (diarrhées, paludisme), parasitoses, entéropathie environnementale\n- Maladies chroniques (VIH, tuberculose, cardiopathies, drépanocytose, insuffisance rénale)\n- Causes endocriniennes et génétiques (plus rares)',
    diagnostic:
      '## Évaluation\n- **Courbes de croissance OMS** : poids, taille, périmètre crânien, poids pour taille, IMC\n- Rechercher la malnutrition aiguë (poids pour taille, périmètre brachial, œdèmes)\n- Histoire alimentaire (allaitement, diversification, nombre de repas)\n- Infections, développement psychomoteur\n\n## Bilan orienté\n- Test VIH, tuberculose, NFS, selles, bandelette urinaire, électrophorèse de l’hémoglobine\n- Si taille très basse avec poids conservé : endocrinien (hypothyroïdie, déficit en hormone de croissance), génétique',
    examens: [
      ['confirmation', 'anthropometrie', 'Poids, taille, z-scores, périmètre brachial.'],
      ['etiologique', 'tdr-vih', 'Systématique.'],
      ['etiologique', 'nfs', 'Anémie.'],
      ['etiologique', 'examen-parasitologique-selles', 'Parasitoses.'],
      ['etiologique', 'bandelette-urinaire', 'Infection urinaire, protéinurie.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose (contact, toux).'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['etiologique', 'tsh', 'Hypothyroïdie (retard statural prédominant).'],
    ],
    scores: ['imc'],
    differentiels: [
      [
        'Petite taille familiale ou constitutionnelle',
        'Croissance régulière parallèle à la courbe, parents petits.',
      ],
      ['malnutrition-aigue-severe', 'Poids pour taille < −3 DS, PB < 115 mm, œdèmes.'],
    ],
    etiologies:
      '## Causes\n- Alimentation insuffisante ou peu diversifiée, sevrage précoce\n- Diarrhées répétées, paludisme, parasitoses\n- VIH, tuberculose, drépanocytose, cardiopathies\n- Négligence, pauvreté, insécurité alimentaire\n- Hypothyroïdie (carence iodée), syndromes génétiques',
    principes: [
      [
        'Soutien nutritionnel',
        'Rattraper la croissance.',
        '- Allaitement exclusif jusqu’à 6 mois puis poursuite jusqu’à 2 ans\n- Alimentation de complément diversifiée : céréales enrichies, légumineuses, œufs, poisson, fruits et légumes, 3 à 5 repas\n- Démonstrations culinaires, aliments locaux\n- **Micronutriments** : vitamine A, fer (si anémie, hors paludisme non traité), **zinc** lors des diarrhées',
      ],
      [
        'Traiter les causes',
        'Supprimer les freins à la croissance.',
        '- Déparasitage (**albendazole** ou **mébendazole**) tous les 6 mois après 1 an\n- Traitement du paludisme, du VIH, de la tuberculose\n- Moustiquaire, eau potable, hygiène',
      ],
      [
        'Suivi',
        'Mesurer les progrès.',
        '- Pesée et mesure mensuelles (consultation préscolaire)\n- Malnutrition aiguë associée : programme PCIMA',
      ],
    ],
    molecules: [
      ['vitamine-a-retinol', 'premiere', 'Supplémentation tous les 6 mois'],
      ['albendazole', 'premiere', 'Déparasitage'],
      ['mebendazole', 'alternative', 'Déparasitage'],
      ['zinc', 'adjuvant', 'Diarrhées'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie ferriprive'],
      ['multivitamines', 'adjuvant', 'Carences associées'],
    ],
    complications: [
      {
        nom: 'Retard de développement cognitif',
        description: 'Malnutrition chronique précoce.',
        traitement: '- Stimulation, nutrition',
        clinique: '- Retard scolaire',
        paraclinique: '',
      },
      {
        nom: 'Malnutrition aiguë sévère',
        fiche: 'malnutrition-aigue-severe',
        description: 'Décompensation.',
        traitement: '- PCIMA',
        clinique: '- Émaciation, œdèmes',
        paraclinique: '- PB, poids pour taille',
      },
      {
        nom: 'Infections sévères',
        description: 'Immunité diminuée.',
        traitement: '- Selon l’infection',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Le rattrapage est surtout possible avant 2 ans (« 1 000 premiers jours »)',
    urgences: ['malnutrition-aigue-severe-compliquee'],
    symptomes: [
      ['Retard de croissance', 'tres_frequent'],
      ['Perte de poids', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Diarrhée', 'occasionnel'],
      ['Pâleur', 'occasionnel'],
    ],
    sources: [
      'Protocole national PCIMA',
      'UNICEF — santé et nutrition de l’enfant',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Pesée, courbes, conseils nutritionnels, vitamine A, déparasitage',
        '- Cassure de courbe inexpliquée, malnutrition aiguë sévère',
      ],
      hgr: ['- Bilan étiologique, prise en charge des causes', ''],
      tert: ['- Endocrinologie pédiatrique, génétique', ''],
    },
    alertes: {
      'malnutrition-aigue-severe-compliquee':
        'Enfant avec œdèmes ou PB < 115 mm et perte d’appétit ou complication',
    },
    formes: [
      {
        nom: 'Malnutrition chronique (retard de croissance)',
        type: 'commune',
        description: 'Taille pour l’âge < −2 DS.',
        terrain: '- Enfant de 6 à 59 mois, pauvreté',
        fonctionnels: '- Appétit faible',
        generaux: '',
        physiques: '- Petite taille, poids pour taille normal',
        paraclinique: '- z-score taille/âge < −2',
        etiologies: '- Carences, infections répétées',
        syndromes: [],
        examens: [['anthropometrie', 'Z-scores']],
      },
    ],
  },

  // =================================================================== Anémie de l'enfant
  {
    ...PED,
    slug: 'anemie-enfant',
    nom: 'Anémie de l’enfant',
    resume:
      'Pâleur palmaire chez l’enfant : paludisme, carence martiale, helminthiases, drépanocytose ; TDR, Hb ; fer + déparasitage, traitement du paludisme ; transfusion si Hb < 4 g/dL ou < 6 g/dL avec détresse.',
    definition:
      'Hémoglobine inférieure à 11 g/dL (6 mois–5 ans), 11,5 g/dL (5–11 ans) ou 12 g/dL (12–14 ans) ; sévère si Hb < 7 g/dL ; la PCIME l’évalue par la **pâleur palmaire**.',
    physiopathologie:
      '## Mécanismes\n- **Hémolyse** : paludisme, drépanocytose, déficit en G6PD\n- **Carence** : fer, acide folique, vitamine B12 ; malnutrition\n- **Pertes** : ankylostomes, schistosomiase\n- Inflammation chronique (VIH, tuberculose)\n- Décompensation : insuffisance cardiaque, acidose (« détresse respiratoire du paludisme grave »)',
    diagnostic:
      '## Clinique\n- **Pâleur palmaire** (légère ou sévère), conjonctives pâles\n- Asthénie, essoufflement, tachycardie, souffle\n- Signes de gravité : détresse respiratoire, insuffisance cardiaque, troubles de conscience\n- Splénomégalie (paludisme, drépanocytose), ictère (hémolyse)\n\n## Biologie\n- Hb, VGM, réticulocytes, TDR du paludisme, électrophorèse de l’hémoglobine, selles',
    examens: [
      ['confirmation', 'nfs', 'Hb, VGM (microcytose : fer ; normocytose : hémolyse).'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['etiologique', 'reticulocytes', 'Hémolyse (élevés) ou carence (bas).'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['etiologique', 'test-rapide-drepanocytose', 'Dépistage rapide.'],
      ['etiologique', 'examen-parasitologique-selles', 'Ankylostomes.'],
      ['etiologique', 'ferritine', 'Carence martiale.'],
      ['pretherapeutique', 'groupage-rai', 'Transfusion.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-grave', 'Anémie sévère fébrile avec TDR positif.'],
      ['drepanocytose', 'Anémie chronique, crises douloureuses, ictère.'],
      ['Leucémies', 'Pancytopénie, adénopathies, hépatosplénomégalie.'],
      ['malnutrition-aigue-severe', 'Anémie associée à l’émaciation.'],
    ],
    etiologies:
      '## Causes en RDC\n- **Paludisme** (première cause d’anémie sévère)\n- **Carence en fer** (alimentation, ankylostomes)\n- **Drépanocytose**, déficit en G6PD\n- Schistosomiase, VIH, malnutrition',
    principes: [
      [
        'Anémie sévère : transfusion',
        'Éviter le décès.',
        '- Transfuser si **Hb < 4 g/dL**, ou **Hb < 6 g/dL avec signes de gravité** (détresse respiratoire, insuffisance cardiaque, troubles de conscience, parasitémie élevée)\n- Culot globulaire 10 mL/kg (ou sang total 20 mL/kg) en 3–4 h ; furosémide si surcharge\n- Traiter le paludisme (artésunate)',
      ],
      [
        'Anémie non sévère',
        'Corriger la carence.',
        '- **Fer** 3 mg/kg/j de fer élément pendant 3 mois (après traitement du paludisme si TDR positif)\n- **Acide folique**\n- **Déparasitage** (**albendazole** dès 1 an)\n- Contrôle à 14 jours puis mensuel',
      ],
      [
        'Prévention',
        'Réduire l’anémie.',
        '- Moustiquaires imprégnées, chimioprévention du paludisme selon le programme, déparasitage tous les 6 mois\n- Clampage retardé du cordon, alimentation riche en fer, supplémentation des nourrissons',
      ],
    ],
    molecules: [
      ['fumarate-ferreux-fer', 'premiere', '3 mg/kg/j 3 mois'],
      ['acide-folique', 'premiere', 'Carence, drépanocytose'],
      ['albendazole', 'premiere', 'Déparasitage'],
      ['artesunate', 'premiere', 'Paludisme grave avec anémie'],
      ['artemether', 'premiere', 'Paludisme simple (avec luméfantrine)'],
      ['furosemide', 'adjuvant', 'Surcharge pendant la transfusion'],
    ],
    complications: [
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque',
        description: 'Anémie profonde.',
        traitement: '- Transfusion lente, furosémide',
        clinique: '- Dyspnée, hépatomégalie',
        paraclinique: '- Hb',
      },
      {
        nom: 'Retard cognitif',
        description: 'Carence martiale prolongée.',
        traitement: '- Fer',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Infections transmises par transfusion',
        fiche: 'transfusion-sanguine-et-reactions-transfusionnelles',
        description: 'Sang mal testé.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Anémie sévère : cause majeure de décès de l’enfant en zone d’endémie palustre ; bon pronostic si traitée',
    urgences: ['paludisme-grave-urgence'],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Splénomégalie', 'occasionnel'],
      ['Fièvre', 'frequent'],
      ['Ictère', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'WHO guidelines for malaria',
    ],
    niveaux: {
      cs: [
        '- Pâleur palmaire, TDR, fer, déparasitage ; transfert si pâleur sévère',
        '- Pâleur sévère, détresse respiratoire',
      ],
      hgr: ['- Hb, transfusion, traitement de la cause', '- Hémopathie suspectée'],
      tert: ['- Hématologie pédiatrique', ''],
    },
    alertes: { 'paludisme-grave-urgence': 'Enfant très pâle avec fièvre, respiration rapide ou léthargie' },
    formes: [
      {
        nom: 'Anémie ferriprive et parasitaire',
        type: 'commune',
        description: 'Pâleur progressive.',
        terrain: '- Enfant de 6 mois à 5 ans',
        fonctionnels: '- Fatigue, géophagie',
        generaux: '',
        physiques: '- Pâleur palmaire',
        paraclinique: '- Microcytose, ferritine basse',
        etiologies: '- Carence en fer, ankylostomes',
        syndromes: ['syndrome-anemique'],
        examens: [['nfs', 'Hb, VGM']],
      },
      {
        nom: 'Anémie sévère décompensée',
        type: 'gravite',
        description: 'Détresse respiratoire.',
        terrain: '- Paludisme, drépanocytose',
        fonctionnels: '- Essoufflement',
        generaux: '- Tachycardie, fièvre',
        physiques: '- Pâleur extrême, hépatomégalie, polypnée',
        paraclinique: '- Hb < 5 g/dL',
        etiologies: '- Paludisme, hémolyse',
        syndromes: ['syndrome-anemique', 'syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Vitamine A
  {
    ...PED,
    slug: 'carence-en-vitamine-a',
    nom: 'Carence en vitamine A',
    resume:
      'Carence fréquente chez l’enfant malnutri ou après une rougeole : cécité nocturne, xérophtalmie, risque de cécité et de décès par infection ; vitamine A à J1, J2 et J15 ; supplémentation systématique tous les 6 mois de 6 à 59 mois.',
    definition:
      'Insuffisance d’apport ou de réserves en vitamine A, responsable de troubles oculaires (xérophtalmie : héméralopie, xérose, taches de Bitot, kératomalacie) et d’une baisse de l’immunité.',
    physiopathologie:
      '## Mécanismes\n- Rôle dans la vision crépusculaire (rhodopsine), l’intégrité des épithéliums et l’immunité\n- Carence : kératinisation de la conjonctive et de la cornée, ulcération, nécrose cornéenne\n- Infections plus graves (rougeole, diarrhée)',
    diagnostic:
      '## Signes oculaires (classification OMS)\n- **Héméralopie** (cécité nocturne) : l’enfant se cogne au crépuscule\n- Xérose conjonctivale, **taches de Bitot** (plaques mousseuses blanchâtres)\n- Xérose cornéenne, ulcération, **kératomalacie** (urgence)\n\n## Terrain\n- Malnutrition, rougeole, diarrhées chroniques, enfant non supplémenté',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Malnutrition associée.'],
      ['etiologique', 'examen-parasitologique-selles', 'Parasitoses.'],
    ],
    scores: [],
    differentiels: [
      ['Conjonctivite infectieuse', 'Rougeur, sécrétions, sans xérose.'],
      ['Trachome', 'Follicules de la conjonctive tarsale, trichiasis.'],
      ['Kératite rougeoleuse ou herpétique', 'Contexte, lésion cornéenne sans xérose généralisée.'],
    ],
    etiologies:
      '## Facteurs\n- Alimentation pauvre en produits animaux, en légumes à feuilles vertes, en fruits jaunes ; huile de palme peu consommée\n- Sevrage précoce\n- Rougeole, diarrhées, malnutrition aiguë, parasitoses',
    principes: [
      [
        'Traitement curatif',
        'Sauver la vision.',
        '- **Vitamine A** à J1, J2 et J15 :\n  - < 6 mois : 50 000 UI\n  - 6–11 mois : 100 000 UI\n  - ≥ 12 mois : 200 000 UI\n- Atteinte cornéenne : collyre antibiotique (tétracycline), protection de l’œil, avis ophtalmologique urgent',
      ],
      [
        'Rougeole et malnutrition',
        'Réduire la mortalité.',
        '- Vitamine A à J1 et J2 chez tout enfant atteint de rougeole\n- Selon le protocole PCIMA pour la malnutrition aiguë',
      ],
      [
        'Prévention',
        'Supplémentation de masse.',
        '- **6–11 mois : 100 000 UI** ; **12–59 mois : 200 000 UI tous les 6 mois** (campagnes, consultation préscolaire)\n- Allaitement maternel, aliments riches en vitamine A (huile de palme rouge, mangue, papaye, légumes verts, œufs, foie)\n- Femme enceinte : pas de fortes doses (tératogène)',
      ],
    ],
    molecules: [['vitamine-a-retinol', 'premiere', 'Traitement et prévention']],
    complications: [
      {
        nom: 'Kératomalacie et cécité',
        description: 'Nécrose de la cornée.',
        traitement: '- Vitamine A urgente, soins ophtalmologiques',
        clinique: '- Cornée opaque, perforation',
        paraclinique: '',
      },
      {
        nom: 'Infections graves',
        description: 'Rougeole, diarrhées sévères.',
        traitement: '- Vitamine A, traitement de l’infection',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Héméralopie et taches de Bitot réversibles ; lésions cornéennes profondes irréversibles. La supplémentation réduit la mortalité de l’enfant de 12 à 24 %',
    urgences: [],
    symptomes: [
      ['Cécité nocturne', 'tres_frequent'],
      ['Troubles visuels', 'frequent'],
      ['Retard de croissance', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'UNICEF — santé et nutrition de l’enfant',
      'Protocole national PCIMA',
    ],
    niveaux: {
      cs: [
        '- Supplémentation de routine, traitement J1-J2-J15, conseils alimentaires',
        '- Atteinte cornéenne',
      ],
      hgr: ['- Prise en charge des lésions oculaires', ''],
      tert: ['- Ophtalmologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Xérophtalmie débutante',
        type: 'commune',
        description: 'Héméralopie et taches de Bitot.',
        terrain: '- Enfant malnutri, après rougeole',
        fonctionnels: '- Mauvaise vision le soir',
        generaux: '',
        physiques: '- Conjonctive sèche, taches de Bitot',
        paraclinique: '',
        etiologies: '- Carence d’apport',
        syndromes: [],
      },
      {
        nom: 'Kératomalacie',
        type: 'gravite',
        description: 'Atteinte cornéenne.',
        terrain: '- Malnutrition sévère, rougeole',
        fonctionnels: '- Photophobie',
        generaux: '',
        physiques: '- Ulcère ou ramollissement cornéen',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Parasitoses intestinales
  {
    ...PED,
    slug: 'parasitoses-intestinales-enfant',
    nom: 'Parasitoses intestinales de l’enfant',
    resume:
      'Helminthes (ascaris, ankylostomes, trichocéphales, oxyures, anguillules, schistosomes) et protozoaires (giardia, amibes) : douleurs abdominales, diarrhée, anémie, retard de croissance ; albendazole ou mébendazole, déparasitage tous les 6 mois, hygiène.',
    definition:
      'Infestations du tube digestif de l’enfant par des helminthes ou des protozoaires, très fréquentes en RDC, responsables d’anémie, de malnutrition et de retards de croissance et d’apprentissage.',
    physiopathologie:
      '## Mécanismes\n- Transmission féco-orale (œufs, kystes) ou transcutanée (larves d’ankylostomes et d’anguillules, schistosomes)\n- Spoliation sanguine (ankylostomes, trichocéphales), malabsorption (giardia), compétition nutritionnelle (ascaris)\n- Complications mécaniques (occlusion, migration biliaire des ascaris)',
    diagnostic:
      '## Clinique\n- Souvent asymptomatique\n- Douleurs abdominales, ballonnement, diarrhée, anorexie\n- Anémie, retard de croissance\n- **Prurit anal** nocturne (oxyures)\n- Rejet de vers (ascaris), toux transitoire (syndrome de Löffler)\n- Diarrhée graisseuse chronique (giardia), dysenterie (amibes, trichocéphalose massive)\n\n## Examens\n- Examen parasitologique des selles (3 prélèvements), scotch-test (oxyures)\n- NFS : anémie, éosinophilie',
    examens: [
      ['confirmation', 'examen-parasitologique-selles', 'Œufs, larves, kystes ; répéter 3 fois.'],
      ['premiere_intention', 'nfs', 'Anémie, éosinophilie.'],
      ['etiologique', 'oeufs-schistosomes-urines', 'Schistosomiase urinaire.'],
      ['gravite', 'abdomen-sans-preparation', 'Occlusion par paquet d’ascaris.'],
      ['gravite', 'echographie-abdominale', 'Ascaris dans les voies biliaires, occlusion.'],
    ],
    scores: [],
    differentiels: [
      ['diarrhee-aigue-enfant', 'Diarrhée infectieuse aiguë.'],
      ['amibiase-intestinale', 'Dysenterie, trophozoïtes.'],
      ['Malabsorption, maladie cœliaque', 'Selles négatives, diarrhée chronique.'],
      ['appendicite-aigue', 'Douleur localisée de la fosse iliaque droite, fièvre.'],
    ],
    etiologies:
      '## Parasites\n- **Ascaris**, **ankylostomes**, **trichocéphales** (géohelminthes)\n- Oxyures, anguillules, ténias\n- *Giardia intestinalis*, *Entamoeba histolytica*, cryptosporidies (VIH)\n- Schistosomes (*S. mansoni*)\n\n## Facteurs\n- Défaut d’assainissement, marche pieds nus, eau non potable, mains sales, géophagie',
    principes: [
      [
        'Helminthiases',
        'Éliminer les vers.',
        '- **Albendazole** 400 mg dose unique (200 mg de 12 à 23 mois)\n- Ou **mébendazole** 500 mg dose unique (ou 100 mg 2 fois par jour 3 jours)\n- Oxyures : albendazole ou **pyrantel**, renouveler à 2–3 semaines, traiter la famille\n- Anguillulose : **ivermectine** 200 µg/kg\n- Schistosomiase : **praziquantel** 40 mg/kg',
      ],
      [
        'Protozooses',
        'Traitement spécifique.',
        '- Giardiase : **métronidazole** 15 mg/kg/j 5 jours ou **tinidazole** dose unique\n- Amibiase : métronidazole puis amœbicide de contact',
      ],
      [
        'Prévention',
        'Réduire la réinfestation.',
        '- **Déparasitage systématique tous les 6 mois** de 1 à 14 ans (écoles, campagnes)\n- Lavage des mains, latrines, port de chaussures, eau potable, ongles courts',
      ],
      [
        'Complications',
        'Traiter.',
        '- Occlusion à ascaris : aspiration gastrique, perfusion, pipérazine ou chirurgie si échec\n- Anémie : fer',
      ],
    ],
    molecules: [
      ['albendazole', 'premiere', 'Géohelminthes, oxyures'],
      ['mebendazole', 'premiere', 'Géohelminthes'],
      ['pyrantel-embonate', 'alternative', 'Oxyures, ascaris'],
      ['ivermectine', 'premiere', 'Anguillulose'],
      ['praziquantel', 'premiere', 'Schistosomiase, ténias'],
      ['metronidazole', 'premiere', 'Giardiase, amibiase'],
      ['tinidazole', 'alternative', 'Giardiase'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Occlusion intestinale par ascaris',
        fiche: 'occlusion-intestinale-aigue',
        description: 'Paquet de vers.',
        traitement: '- Traitement médical, chirurgie si échec',
        clinique: '- Vomissements, ballonnement, arrêt des matières',
        paraclinique: '- ASP, échographie',
      },
      {
        nom: 'Anémie ferriprive',
        fiche: 'anemie-enfant',
        description: 'Ankylostomes, trichocéphales.',
        traitement: '- Fer, déparasitage',
        clinique: '- Pâleur',
        paraclinique: '- Hb',
      },
      {
        nom: 'Prolapsus rectal',
        description: 'Trichocéphalose massive.',
        traitement: '- Albendazole 3 jours, réduction',
        clinique: '- Muqueuse extériorisée',
        paraclinique: '',
      },
      {
        nom: 'Anguillulose maligne',
        description: 'Immunodépression, corticoïdes.',
        traitement: '- Ivermectine répétée',
        clinique: '- Sepsis à Gram négatifs',
        paraclinique: '- Selles',
      },
    ],
    evolution: '## Pronostic\n- Guérison sous traitement, réinfestation fréquente sans mesures d’hygiène',
    urgences: [],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Diarrhée', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Prurit anal', 'occasionnel'],
      ['Retard de croissance', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Toux', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
    ],
    niveaux: {
      cs: [
        '- Déparasitage, traitement selon les selles, éducation à l’hygiène',
        '- Occlusion, anémie sévère',
      ],
      hgr: ['- Prise en charge des complications', '- Occlusion nécessitant une chirurgie'],
      tert: ['- Chirurgie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Polyparasitisme de l’enfant d’âge scolaire',
        type: 'commune',
        description: 'Plusieurs helminthes associés.',
        terrain: '- Enfant de 1 à 14 ans, zone rurale',
        fonctionnels: '- Douleurs abdominales, appétit irrégulier',
        generaux: '- Fatigue',
        physiques: '- Pâleur, ventre ballonné',
        paraclinique: '- Œufs multiples dans les selles',
        etiologies: '- Géohelminthes',
        syndromes: ['syndrome-anemique'],
        examens: [['examen-parasitologique-selles', 'Diagnostic']],
      },
      {
        nom: 'Oxyurose',
        type: 'etiologique',
        description: 'Prurit anal nocturne.',
        terrain: '- Enfant en collectivité, famille',
        fonctionnels: '- Prurit anal, troubles du sommeil',
        generaux: '',
        physiques: '- Vers blancs visibles à la marge anale',
        paraclinique: '- Scotch-test',
        etiologies: '- Enterobius vermicularis',
        syndromes: [],
      },
    ],
  },
];
