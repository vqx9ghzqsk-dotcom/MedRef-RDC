'use strict';

/**
 * Lot 18 (pathologies obstétricales) — hypertension gravidique, éclampsie, menace
 * d'accouchement prématuré, rupture prématurée des membranes, avortement spontané,
 * avortement incomplet et soins après avortement.
 * Rédigé par IA (OMS, FIGO, ACOG, RCOG) : à valider.
 */

const OBS = { departement: 'gynecologie-obstetrique', specialite: 'Pathologies obstétricales' };

module.exports = [
  // =================================================================== HTA gravidique
  {
    ...OBS,
    slug: 'hypertension-gravidique',
    nom: 'Hypertension gravidique',
    resume:
      'PA ≥ 140/90 mmHg après 20 SA sans protéinurie : surveillance rapprochée (PA, protéinurie, signes de pré-éclampsie, croissance fœtale), antihypertenseur si PA ≥ 150–160/100–110 (nifédipine, méthyldopa, labétalol), accouchement à 37 SA.',
    definition:
      'Hypertension artérielle (PA ≥ 140/90 mmHg à 2 reprises) apparaissant après 20 SA, sans protéinurie ni atteinte d’organe, chez une femme auparavant normotendue ; distincte de l’HTA chronique (antérieure à la grossesse ou avant 20 SA) et de la pré-éclampsie.',
    physiopathologie:
      '## Mécanismes\n- Anomalie de la placentation et dysfonction endothéliale, à un degré moindre que dans la pré-éclampsie\n- 15 à 25 % évoluent vers une pré-éclampsie',
    diagnostic:
      '## Diagnostic\n- PA ≥ 140/90 mmHg mesurée correctement (brassard adapté, repos)\n- Protéinurie négative (bandelette ou rapport protéine/créatinine)\n- HTA sévère si ≥ 160/110\n\n## Surveillance\n- PA 1 à 2 fois par semaine, protéinurie, signes fonctionnels (céphalées, troubles visuels, douleur épigastrique)\n- Bilan : NFS, plaquettes, créatinine, transaminases\n- Croissance fœtale (échographie), mouvements actifs',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie : pré-éclampsie.'],
      ['premiere_intention', 'proteinurie', 'Quantification si bandelette positive.'],
      ['premiere_intention', 'nfs', 'Plaquettes.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'bilan-hepatique', 'Transaminases (HELLP).'],
      ['suivi', 'echographie-obstetricale', 'Croissance fœtale, liquide amniotique.'],
      ['suivi', 'cardiotocographie', 'Bien-être fœtal.'],
    ],
    scores: [],
    differentiels: [
      ['pre-eclampsie-severe', 'Protéinurie ou atteinte d’organe.'],
      ['HTA chronique', 'HTA connue ou avant 20 SA.'],
      ['Môle hydatiforme', 'HTA précoce (avant 20 SA).'],
    ],
    etiologies:
      '## Facteurs de risque\n- Primiparité, âge > 35 ans, obésité, grossesse multiple\n- Antécédent de pré-éclampsie, HTA familiale, diabète, maladie rénale, drépanocytose',
    principes: [
      [
        'Antihypertenseurs',
        'Éviter l’HTA sévère.',
        '- Traiter si PA ≥ 150/100 (ou ≥ 140/90 selon les recommandations récentes) ; objectif 135/85\n- **Nifédipine** à libération prolongée, **méthyldopa** 250–500 mg 2–3 fois par jour, **labétalol**\n- **Pas d’IEC ni d’ARA2** (tératogènes)',
      ],
      [
        'Prévention et surveillance',
        'Dépister la pré-éclampsie.',
        '- **Aspirine** 75–150 mg et **calcium** chez les femmes à risque (débutés avant 16 SA)\n- Consultations rapprochées, éducation aux signes d’alerte',
      ],
      [
        'Accouchement',
        'Choisir le moment.',
        '- Accouchement à 37 SA si HTA gravidique bien contrôlée\n- Plus tôt si HTA sévère non contrôlée, pré-éclampsie ou souffrance fœtale\n- Surveillance dans le post-partum (PA, pré-éclampsie tardive)',
      ],
    ],
    molecules: [
      ['nifedipine', 'premiere', 'Antihypertenseur'],
      ['methyldopa', 'premiere', 'Antihypertenseur'],
      ['labetalol', 'premiere', 'Antihypertenseur'],
      ['acide-acetylsalicylique', 'adjuvant', 'Prévention de la pré-éclampsie'],
      ['calcium', 'adjuvant', 'Prévention de la pré-éclampsie'],
    ],
    complications: [
      {
        nom: 'Pré-éclampsie',
        fiche: 'pre-eclampsie-severe',
        description: 'Évolution dans 15 à 25 % des cas.',
        traitement: '- Prise en charge spécialisée',
        clinique: '- Protéinurie, céphalées',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Retard de croissance intra-utérin',
        description: 'Insuffisance placentaire.',
        traitement: '- Surveillance, extraction',
        clinique: '- Hauteur utérine faible',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Hématome rétroplacentaire',
        description: 'Complication brutale.',
        traitement: '- Extraction urgente',
        clinique: '- Douleur, utérus dur, saignement',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si non compliquée ; normalisation en 12 semaines après l’accouchement ; risque cardiovasculaire ultérieur',
    urgences: ['eclampsie', 'urgence-hypertensive'],
    symptomes: [
      ['Céphalées', 'occasionnel'],
      ['Œdèmes', 'frequent'],
      ['Troubles visuels', 'rare'],
    ],
    sources: [
      'ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia',
      'WHO recommendations: drug treatment for severe hypertension in pregnancy',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Mesure de la PA à chaque CPN, bandelette, méthyldopa, orientation',
        '- PA ≥ 160/110, protéinurie, signes fonctionnels',
      ],
      hgr: ['- Bilan, surveillance fœtale, accouchement programmé', ''],
      tert: ['- Médecine fœto-maternelle', ''],
    },
    alertes: {
      eclampsie: 'Femme enceinte hypertendue avec céphalées, troubles visuels ou douleur épigastrique',
      'urgence-hypertensive': 'PA ≥ 160/110 mmHg pendant la grossesse',
    },
    formes: [
      {
        nom: 'HTA gravidique légère à modérée',
        type: 'commune',
        description: 'PA 140–159/90–109.',
        terrain: '- Primipare, 3e trimestre',
        fonctionnels: '- Asymptomatique',
        generaux: '',
        physiques: '- PA élevée, œdèmes',
        paraclinique: '- Protéinurie négative',
        etiologies: '',
        syndromes: [],
        examens: [['bandelette-urinaire', 'Protéinurie']],
      },
      {
        nom: 'HTA gravidique sévère',
        type: 'gravite',
        description: 'PA ≥ 160/110.',
        terrain: '- Facteurs de risque',
        fonctionnels: '- Céphalées',
        generaux: '',
        physiques: '- PA très élevée',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-pre-eclampsie'],
      },
    ],
  },

  // =================================================================== Éclampsie
  {
    ...OBS,
    slug: 'eclampsie',
    nom: 'Éclampsie',
    resume:
      'Convulsions chez une femme enceinte ou accouchée avec pré-éclampsie : position latérale, voies aériennes, sulfate de magnésium (4 g IV + 10 g IM puis 5 g IM toutes les 4 h, ou protocole IV), antihypertenseur si PA ≥ 160/110, accouchement après stabilisation.',
    definition:
      'Survenue de convulsions généralisées (non attribuables à une autre cause) chez une femme présentant une pré-éclampsie, avant, pendant ou dans les jours suivant l’accouchement.',
    physiopathologie:
      '## Mécanismes\n- Dysfonction endothéliale, encéphalopathie postérieure réversible (PRES), vasospasme, œdème cérébral\n- Complications : hémorragie cérébrale, HELLP, insuffisance rénale, OAP, hématome rétroplacentaire, mort fœtale',
    diagnostic:
      '## Clinique\n- Convulsions tonico-cloniques, coma post-critique\n- Souvent précédées de céphalées intenses, troubles visuels, douleur épigastrique, réflexes vifs\n- HTA et protéinurie (parfois absentes)\n- 1 sur 3 survient dans le post-partum\n\n## Bilan\n- NFS, plaquettes, transaminases, créatinine, hémostase, protéinurie, glycémie\n- Évaluation fœtale',
    examens: [
      ['premiere_intention', 'nfs', 'Thrombopénie (HELLP).'],
      ['premiere_intention', 'bilan-hepatique', 'Cytolyse (HELLP).'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'hemostase', 'CIVD.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie.'],
      ['premiere_intention', 'glycemie', 'Éliminer une hypoglycémie.'],
      ['premiere_intention', 'tdr-paludisme', 'Neuropaludisme.'],
      ['gravite', 'scanner-cerebral', 'Coma prolongé, déficit (hémorragie).'],
      ['suivi', 'cardiotocographie', 'Bien-être fœtal.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['paludisme-et-grossesse', 'Neuropaludisme : fièvre, TDR positif.'],
      ['epilepsie', 'Antécédent, PA normale.'],
      ['meningite-bacterienne', 'Fièvre, syndrome méningé.'],
      ['Thrombophlébite cérébrale', 'Post-partum, céphalées, déficit.'],
      ['hypoglycemie-adulte', 'Glycémie basse.'],
    ],
    etiologies:
      '## Facteurs\n- Pré-éclampsie sévère non traitée, absence de CPN\n- Primipare jeune, grossesse multiple',
    principes: [
      [
        'Pendant la crise',
        'Protéger la patiente.',
        '- Position latérale gauche, protection contre les traumatismes, voies aériennes, **oxygène**\n- Ne pas laisser seule ; appeler à l’aide',
      ],
      [
        'Sulfate de magnésium',
        'Prévenir les récidives.',
        '- **Schéma de Pritchard** : 4 g IV en 20 min + 10 g IM (5 g dans chaque fesse), puis 5 g IM toutes les 4 h pendant 24 h\n- Ou **schéma de Zuspan** : 4 g IV puis 1 g/h IV pendant 24 h\n- Surveillance : réflexes rotuliens, FR > 16/min, diurèse > 30 mL/h\n- Toxicité : arrêt + **gluconate de calcium** 1 g IV',
      ],
      [
        'Antihypertenseur',
        'Prévenir l’AVC.',
        '- Si PA ≥ 160/110 : **hydralazine** 5 mg IV, **labétalol** IV ou **nifédipine** orale\n- Objectif 140–150/90–100',
      ],
      [
        'Accouchement',
        'Traitement définitif.',
        '- Après stabilisation (quel que soit le terme), dans les 12 heures, par voie basse si possible\n- Surveillance 24 à 48 h dans le post-partum (sulfate de magnésium 24 h)',
      ],
    ],
    molecules: [
      ['sulfate-de-magnesium', 'premiere', 'Prévention et traitement des convulsions'],
      ['gluconate-de-calcium', 'premiere', 'Antidote du magnésium'],
      ['hydralazine', 'premiere', 'HTA sévère'],
      ['labetalol', 'alternative', 'HTA sévère'],
      ['nifedipine', 'alternative', 'HTA sévère'],
      ['diazepam', 'alternative', 'Si magnésium indisponible'],
      ['ocytocine', 'adjuvant', 'Prévention de l’hémorragie après l’accouchement'],
      ['oxygene', 'premiere', 'Pendant et après la crise'],
    ],
    complications: [
      {
        nom: 'Hémorragie cérébrale',
        fiche: 'avc',
        description: 'HTA sévère.',
        traitement: '- Contrôle tensionnel, réanimation',
        clinique: '- Coma, déficit',
        paraclinique: '- Scanner',
      },
      {
        nom: 'HELLP syndrome',
        description: 'Hémolyse, cytolyse, thrombopénie.',
        traitement: '- Accouchement, transfusion de plaquettes si besoin',
        clinique: '- Douleur épigastrique',
        paraclinique: '- Plaquettes, transaminases',
      },
      {
        nom: 'OAP et insuffisance rénale',
        fiche: 'insuffisance-renale-aigue',
        description: 'Atteintes d’organes.',
        traitement: '- Furosémide, restriction hydrique',
        clinique: '- Dyspnée, oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Hématome rétroplacentaire et mort fœtale',
        description: 'Atteinte placentaire.',
        traitement: '- Extraction',
        clinique: '- Utérus dur',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Cause majeure de mortalité maternelle ; le sulfate de magnésium réduit de moitié les récidives et la mortalité',
    urgences: ['eclampsie'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Troubles visuels', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Œdèmes', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
    ],
    sources: [
      'WHO recommendations for prevention and treatment of pre-eclampsia and eclampsia',
      'ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- PLS, dose de charge de sulfate de magnésium (IM), antihypertenseur, transfert',
        '- Toute éclampsie',
      ],
      hgr: [
        '- Sulfate de magnésium, contrôle tensionnel, accouchement',
        '- Coma, HELLP, insuffisance rénale',
      ],
      tert: ['- Réanimation, néonatologie', ''],
    },
    alertes: { eclampsie: 'Femme enceinte ou accouchée qui convulse' },
    formes: [
      {
        nom: 'Éclampsie du 3e trimestre',
        type: 'commune',
        description: 'Convulsions sur pré-éclampsie.',
        terrain: '- Primipare jeune, absence de CPN',
        fonctionnels: '- Céphalées, troubles visuels',
        generaux: '',
        physiques: '- Convulsions, HTA, œdèmes',
        paraclinique: '- Protéinurie',
        etiologies: '- Pré-éclampsie',
        syndromes: ['syndrome-de-pre-eclampsie', 'syndrome-convulsif'],
      },
      {
        nom: 'Éclampsie du post-partum',
        type: 'evolutive',
        description: 'Dans les jours suivant l’accouchement.',
        terrain: '- Pré-éclampsie, parfois méconnue',
        fonctionnels: '- Céphalées',
        generaux: '',
        physiques: '- Convulsions, HTA',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-convulsif'],
      },
      {
        nom: 'Éclampsie avec HELLP',
        type: 'gravite',
        description: 'Atteinte hépatique et hématologique.',
        terrain: '',
        fonctionnels: '- Douleur épigastrique',
        generaux: '',
        physiques: '- Ictère, saignements',
        paraclinique: '- Plaquettes < 100 000, cytolyse, hémolyse',
        etiologies: '',
        syndromes: ['syndrome-hellp'],
      },
    ],
  },

  // =================================================================== MAP
  {
    ...OBS,
    slug: 'menace-accouchement-premature',
    nom: 'Menace d’accouchement prématuré',
    resume:
      'Contractions régulières avec modification du col entre 22 et 37 SA : corticoïdes anténatals (24–34 SA), tocolyse courte par nifédipine (48 h), sulfate de magnésium avant 32 SA, recherche d’infection (urinaire, paludisme), transfert in utero.',
    definition:
      'Contractions utérines régulières et douloureuses associées à des modifications du col (raccourcissement, ouverture) entre 22 et 36 SA + 6 jours, pouvant aboutir à un accouchement prématuré.',
    physiopathologie:
      '## Mécanismes\n- Infection (chorioamniotite, infection urinaire, paludisme), surdistension utérine (grossesse multiple, hydramnios)\n- Hémorragie (placenta prævia, hématome), anomalies utérines, béance cervicale\n- Stress, travail pénible',
    diagnostic:
      '## Clinique\n- Contractions régulières (≥ 4 par 20 min ou 8 par heure), douleurs lombaires, pesanteur pelvienne\n- Toucher vaginal : col raccourci ou ouvert\n- Rechercher : fièvre, rupture des membranes, saignement\n\n## Examens\n- Échographie (longueur du col < 25 mm, terme, présentation, poids estimé)\n- ECBU, TDR, NFS, CRP, prélèvement vaginal',
    examens: [
      ['premiere_intention', 'echographie-obstetricale', 'Longueur du col, terme, présentation.'],
      ['premiere_intention', 'ecbu', 'Infection urinaire.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'nfs', 'Infection.'],
      ['premiere_intention', 'crp', 'Infection.'],
      ['suivi', 'cardiotocographie', 'Bien-être fœtal, contractions.'],
      ['etiologique', 'test-rupture-membranes', 'Rupture des membranes.'],
    ],
    scores: [],
    differentiels: [
      ['Contractions de Braxton-Hicks', 'Irrégulières, sans modification du col.'],
      ['infections-urinaires-de-la-grossesse', 'Douleurs lombaires et signes urinaires.'],
      ['Hématome rétroplacentaire', 'Douleur permanente, utérus dur, saignement.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Antécédent d’accouchement prématuré, grossesse multiple, infections (urinaires, vaginales, paludisme)\n- Âge < 18 ans, malnutrition, travail pénible, absence de CPN',
    principes: [
      [
        'Corticoïdes anténatals',
        'Maturation pulmonaire fœtale.',
        '- **Dexaméthasone** 6 mg IM toutes les 12 h (4 doses) ou bétaméthasone 12 mg IM 2 doses à 24 h\n- Entre 24 et 34 SA, si l’accouchement est probable dans les 7 jours et si des soins néonatals adaptés sont disponibles',
      ],
      [
        'Tocolyse',
        'Gagner 48 heures.',
        '- **Nifédipine** 10–20 mg per os puis 10–20 mg toutes les 4–8 h pendant 48 h\n- Contre-indiquée si infection, hémorragie, souffrance fœtale\n- Pas de tocolyse prolongée',
      ],
      [
        'Neuroprotection et infection',
        'Améliorer le pronostic néonatal.',
        '- **Sulfate de magnésium** avant 32 SA si accouchement imminent\n- Traiter l’infection urinaire ou le paludisme\n- Antibioprophylaxie du streptocoque B pendant le travail selon le protocole',
      ],
      [
        'Organisation',
        'Naître au bon endroit.',
        '- Transfert in utero vers une structure disposant de soins néonatals\n- Préparation de la méthode kangourou',
      ],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Corticoïdes anténatals'],
      ['nifedipine', 'premiere', 'Tocolyse 48 h'],
      ['indometacine', 'alternative', 'Tocolyse avant 32 SA (courte durée)'],
      ['sulfate-de-magnesium', 'premiere', 'Neuroprotection avant 32 SA'],
      ['ampicilline', 'adjuvant', 'Antibioprophylaxie selon le protocole'],
      ['salbutamol', 'alternative', 'Tocolyse (moins recommandé)'],
    ],
    complications: [
      {
        nom: 'Accouchement prématuré',
        fiche: 'prematurite',
        description: 'Échec de la tocolyse.',
        traitement: '- Soins néonatals',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Œdème pulmonaire',
        description: 'Bêtamimétiques, surcharge.',
        traitement: '- Arrêt, diurétique',
        clinique: '- Dyspnée',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Chorioamniotite',
        fiche: 'rupture-prematuree-membranes',
        description: 'Infection.',
        traitement: '- Antibiotiques, extraction',
        clinique: '- Fièvre',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Les corticoïdes anténatals réduisent la mortalité néonatale ; la tocolyse ne fait que gagner du temps',
    urgences: [],
    symptomes: [
      ['Contractions utérines', 'tres_frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Douleur lombaire', 'frequent'],
      ['Saignement vaginal', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'FIGO — recommandations de pratique clinique',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: ['- Reconnaître, nifédipine, première dose de corticoïde, transfert in utero', '- Toute MAP'],
      hgr: ['- Corticoïdes, tocolyse, sulfate de magnésium, recherche d’infection', '- Grand prématuré'],
      tert: ['- Maternité avec néonatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'MAP avec col modifié',
        type: 'commune',
        description: 'Contractions régulières.',
        terrain: '- 28–34 SA',
        fonctionnels: '- Contractions douloureuses',
        generaux: '',
        physiques: '- Col raccourci, perméable',
        paraclinique: '- Col < 25 mm',
        etiologies: '- Infection, surdistension',
        syndromes: [],
        examens: [['echographie-obstetricale', 'Col']],
      },
    ],
  },

  // =================================================================== RPM
  {
    ...OBS,
    slug: 'rupture-prematuree-membranes',
    nom: 'Rupture prématurée des membranes',
    resume:
      'Écoulement de liquide amniotique avant le début du travail : confirmer (spéculum), rechercher la chorioamniotite ; avant 37 SA : érythromycine 10 jours, corticoïdes, attitude expectative si pas d’infection ; à terme : déclenchement ; chorioamniotite = antibiotiques et accouchement.',
    definition:
      'Rupture des membranes amniotiques avant le début du travail ; prématurée (avant 37 SA) ou à terme ; rupture prolongée si > 18–24 heures avant l’accouchement.',
    physiopathologie:
      '## Mécanismes\n- Infection (vaginose, IST), surdistension, tabac, carences, gestes\n- Risques : infection ascendante (chorioamniotite, sepsis néonatal), procidence du cordon, prématurité, oligoamnios',
    diagnostic:
      '## Clinique\n- Écoulement de liquide clair, brutal ou continu\n- **Examen au spéculum stérile** : liquide dans le vagin (éviter le toucher vaginal répété)\n- Tests : nitrazine, fougère, tests immunologiques ; échographie (oligoamnios)\n\n## Chorioamniotite\n- Fièvre, tachycardie maternelle et fœtale, utérus sensible, liquide fétide',
    examens: [
      ['confirmation', 'test-rupture-membranes', 'Confirmation.'],
      ['premiere_intention', 'echographie-obstetricale', 'Liquide, terme, présentation.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Infection.'],
      ['suivi', 'cardiotocographie', 'Tachycardie fœtale.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
    ],
    scores: [],
    differentiels: [
      ['Incontinence urinaire', 'Fréquente en fin de grossesse.'],
      ['Leucorrhées abondantes', 'Spéculum : pas de liquide amniotique.'],
      ['Perte du bouchon muqueux', 'Glaire épaisse, parfois sanglante.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Infections génitales et urinaires, antécédent de RPM\n- Grossesse multiple, hydramnios, tabac, malnutrition',
    principes: [
      [
        'Avant 37 SA sans infection',
        'Prolonger la grossesse en sécurité.',
        '- Hospitalisation, repos, surveillance (température, pouls, liquide, BCF)\n- **Érythromycine** 250 mg 4 fois par jour 10 jours (ou azithromycine)\n- Pas d’amoxicilline-acide clavulanique (entérocolite néonatale)\n- **Corticoïdes anténatals** (24–34 SA)\n- Accouchement à 34–37 SA selon le contexte ; sulfate de magnésium avant 32 SA si accouchement imminent',
      ],
      [
        'À terme',
        'Réduire le risque infectieux.',
        '- Déclenchement (ocytocine) si le travail ne débute pas spontanément dans les 12–24 h\n- Antibioprophylaxie si rupture > 18 h ou streptocoque B',
      ],
      [
        'Chorioamniotite',
        'Urgence infectieuse.',
        '- **Ampicilline** 2 g IV toutes les 6 h + **gentamicine** 5 mg/kg/j\n- Accouchement sans délai, quel que soit le terme\n- Ajouter métronidazole en cas de césarienne',
      ],
    ],
    molecules: [
      ['erythromycine', 'premiere', 'RPM avant terme'],
      ['azithromycine', 'alternative', 'RPM avant terme'],
      ['dexamethasone', 'premiere', 'Corticoïdes anténatals'],
      ['ampicilline', 'premiere', 'Chorioamniotite, prophylaxie'],
      ['gentamicine', 'premiere', 'Chorioamniotite'],
      ['ocytocine', 'premiere', 'Déclenchement à terme'],
      ['sulfate-de-magnesium', 'adjuvant', 'Neuroprotection'],
    ],
    complications: [
      {
        nom: 'Chorioamniotite et sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Infection ascendante.',
        traitement: '- Antibiotiques, accouchement',
        clinique: '- Fièvre, liquide fétide',
        paraclinique: '- Hyperleucocytose',
      },
      {
        nom: 'Prématurité',
        fiche: 'prematurite',
        description: 'Accouchement avant terme.',
        traitement: '- Soins néonatals',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Infection néonatale',
        fiche: 'sepsis-neonatal',
        description: 'Rupture prolongée.',
        traitement: '- Antibiotiques du nouveau-né',
        clinique: '- Détresse, hypothermie',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Procidence du cordon',
        description: 'Présentation non engagée.',
        traitement: '- Césarienne en urgence',
        clinique: '- Cordon visible ou palpable, bradycardie fœtale',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend du terme et de l’infection ; le travail débute dans la semaine dans la majorité des cas',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Écoulement de liquide amniotique', 'tres_frequent'],
      ['Fièvre', 'occasionnel'],
      ['Contractions utérines', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'ACOG — recommandations de pratique clinique',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- Spéculum, pas de touchers répétés, érythromycine, transfert',
        '- Toute RPM avant terme, fièvre',
      ],
      hgr: ['- Surveillance, corticoïdes, antibiotiques, déclenchement, césarienne', ''],
      tert: ['- Maternité avec néonatologie', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence': 'Nouveau-né après rupture prolongée des membranes ou fièvre maternelle',
    },
    formes: [
      {
        nom: 'RPM avant terme',
        type: 'commune',
        description: 'Entre 24 et 37 SA.',
        terrain: '- Infection génitale',
        fonctionnels: '- Écoulement de liquide clair',
        generaux: '- Apyrexie',
        physiques: '- Liquide au spéculum',
        paraclinique: '- Test positif',
        etiologies: '- Infection',
        syndromes: [],
        examens: [['test-rupture-membranes', 'Confirmation']],
      },
      {
        nom: 'RPM compliquée de chorioamniotite',
        type: 'gravite',
        description: 'Infection intra-amniotique.',
        terrain: '- Rupture prolongée',
        fonctionnels: '- Douleurs',
        generaux: '- Fièvre, tachycardie',
        physiques: '- Utérus sensible, liquide fétide',
        paraclinique: '- Tachycardie fœtale',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Avortement spontané
  {
    ...OBS,
    slug: 'avortement-spontane',
    nom: 'Avortement spontané',
    resume:
      'Perte de grossesse avant 22 SA (le plus souvent au 1er trimestre) : menace, inévitable, incomplet, complet ou rétention ; échographie ; expectative, misoprostol ou aspiration manuelle intra-utérine ; anti-D si rhésus négatif ; soutien et planification familiale.',
    definition:
      'Expulsion ou arrêt spontané d’une grossesse avant la viabilité (avant 22 SA ou poids < 500 g selon l’OMS) ; touche 10 à 20 % des grossesses connues.',
    physiopathologie:
      '## Causes\n- **Anomalies chromosomiques** (50 % au 1er trimestre)\n- Infections (paludisme, syphilis, fièvre), maladies maternelles (diabète, thyroïde)\n- Anomalies utérines, béance cervicale (2e trimestre), syndrome des antiphospholipides\n- Âge maternel avancé',
    diagnostic:
      '## Formes\n- **Menace** : saignement, col fermé, embryon vivant\n- **Inévitable** : col ouvert, saignement et contractions\n- **Incomplet** : expulsion partielle, col ouvert, débris\n- **Complet** : utérus vide, col refermé\n- **Rétention (grossesse arrêtée)** : embryon sans activité cardiaque, col fermé\n\n## Examens\n- Échographie, β-hCG, groupe et rhésus, Hb',
    examens: [
      ['confirmation', 'echographie-pelvienne', 'Vitalité, contenu utérin.'],
      ['premiere_intention', 'beta-hcg', 'Cinétique.'],
      ['premiere_intention', 'groupage-rai', 'Rhésus.'],
      ['premiere_intention', 'nfs', 'Retentissement.'],
      ['etiologique', 'serologie-syphilis', 'Avortements tardifs ou répétés.'],
      ['etiologique', 'tdr-paludisme', 'Fièvre.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-extra-uterine', 'Utérus vide, masse annexielle, douleur.'],
      ['saignements-premier-trimestre', 'Démarche devant un saignement.'],
      ['Môle hydatiforme', 'β-hCG très élevée, aspect en flocons.'],
    ],
    etiologies:
      '## Facteurs\n- Âge > 35 ans, antécédents d’avortements\n- Paludisme, syphilis, fièvre élevée\n- Diabète mal équilibré, tabac, alcool',
    principes: [
      [
        'Menace',
        'Accompagner.',
        '- Repos relatif, pas de traitement prouvé\n- Surveillance, consulter si saignement abondant, fièvre, douleur',
      ],
      [
        'Avortement inévitable, incomplet ou rétention',
        'Évacuer l’utérus.',
        '- **Misoprostol** : 600 µg per os ou 400 µg sublingual (incomplet < 14 SA) ; rétention : **mifépristone** 200 mg puis misoprostol 800 µg 24–48 h après\n- Ou **aspiration manuelle intra-utérine** (AMIU)\n- Expectative possible si stable',
      ],
      [
        'Mesures associées',
        'Prévenir les complications.',
        '- **Immunoglobulines anti-D** si rhésus négatif\n- Antalgiques, soutien psychologique\n- Planification familiale post-avortement\n- Bilan si 3 avortements ou plus',
      ],
    ],
    molecules: [
      ['misoprostol', 'premiere', 'Évacuation utérine'],
      ['mifepristone', 'alternative', 'Rétention (avec misoprostol)'],
      ['immunoglobulines-anti-d', 'premiere', 'Rhésus négatif'],
      ['ibuprofene', 'adjuvant', 'Douleur'],
      ['ocytocine', 'adjuvant', 'Avortement du 2e trimestre'],
    ],
    complications: [
      {
        nom: 'Hémorragie',
        description: 'Rétention, atonie.',
        traitement: '- Évacuation, ocytocine, transfusion',
        clinique: '- Saignement abondant',
        paraclinique: '- Hb',
      },
      {
        nom: 'Infection (avortement septique)',
        fiche: 'avortement-incomplet-soins-apres-avortement',
        description: 'Rétention.',
        traitement: '- Antibiotiques, évacuation',
        clinique: '- Fièvre, pertes malodorantes',
        paraclinique: '',
      },
      {
        nom: 'Retentissement psychologique',
        description: 'Deuil périnatal.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon ; une grossesse ultérieure normale est la règle après un avortement isolé',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Contractions utérines', 'frequent'],
      ['Aménorrhée', 'tres_frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'FIGO — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Évaluation, misoprostol, anti-D, planification familiale',
        '- Hémorragie, fièvre, doute diagnostique',
      ],
      hgr: ['- Échographie, AMIU, transfusion', ''],
      tert: ['- Bilan des avortements à répétition', ''],
    },
    alertes: { 'hemorragie-du-post-partum-urgence': 'Avortement avec saignement abondant ou malaise' },
    formes: [
      {
        nom: 'Avortement incomplet du 1er trimestre',
        type: 'commune',
        description: 'Expulsion partielle.',
        terrain: '- Femme enceinte < 12 SA',
        fonctionnels: '- Saignement, crampes',
        generaux: '',
        physiques: '- Col ouvert, débris',
        paraclinique: '- Rétention à l’échographie',
        etiologies: '- Anomalies chromosomiques',
        syndromes: [],
        examens: [['echographie-pelvienne', 'Contenu utérin']],
      },
      {
        nom: 'Grossesse arrêtée (rétention)',
        type: 'etiologique',
        description: 'Sans expulsion.',
        terrain: '- 1er trimestre',
        fonctionnels: '- Disparition des signes de grossesse',
        generaux: '',
        physiques: '- Col fermé',
        paraclinique: '- Pas d’activité cardiaque',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Avortement incomplet / SAA
  {
    ...OBS,
    slug: 'avortement-incomplet-soins-apres-avortement',
    nom: 'Avortement incomplet et soins après avortement',
    resume:
      'Soins après avortement (spontané ou provoqué) : évaluer le choc et l’infection, évacuer l’utérus (misoprostol ou AMIU), antibiotiques si signes d’infection, antalgie, anti-D, planification familiale immédiate, conseil — sans jugement.',
    definition:
      'Ensemble des soins délivrés aux femmes après un avortement spontané ou provoqué (souvent clandestin et à risque en RDC) : traitement des complications, conseil, contraception et lien avec les autres services de santé reproductive.',
    physiopathologie:
      '## Enjeux\n- Les avortements à risque sont une cause majeure de mortalité maternelle (hémorragie, infection, perforation)\n- Rétention de produits : saignement, infection',
    diagnostic:
      '## Évaluation initiale\n- **Choc** (pouls, PA), **saignement**, **fièvre**, douleur abdominale, défense\n- Examen au spéculum : col, débris, corps étrangers, lésions\n- Signes de perforation (douleur, défense, gaz sous le diaphragme) ou de lésions viscérales\n- Taille de l’utérus, échographie si disponible',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie, infection.'],
      ['premiere_intention', 'groupage-rai', 'Rhésus, transfusion.'],
      ['premiere_intention', 'echographie-pelvienne', 'Rétention, épanchement.'],
      ['gravite', 'hemocultures', 'Sepsis.'],
      ['gravite', 'abdomen-sans-preparation', 'Pneumopéritoine (perforation).'],
      ['etiologique', 'tdr-vih', 'Conseil et dépistage.'],
    ],
    scores: ['index-de-choc', 'qsofa'],
    differentiels: [
      ['grossesse-extra-uterine', 'Utérus vide, masse annexielle.'],
      ['avortement-spontane', 'Sans manœuvre.'],
      ['Perforation utérine', 'Douleur intense, défense, manœuvres instrumentales.'],
    ],
    etiologies:
      '## Causes\n- Avortement spontané incomplet\n- Avortement provoqué à risque (instruments, plantes, produits caustiques, médicaments mal utilisés)',
    principes: [
      [
        'Urgence',
        'Stabiliser.',
        '- Choc : 2 voies veineuses, remplissage, transfusion\n- Hémorragie : **ocytocine** ou **misoprostol**, évacuation rapide',
      ],
      [
        'Évacuation utérine',
        'Traiter la rétention.',
        '- < 13 SA : **misoprostol** 400 µg sublingual ou 600 µg per os, ou **AMIU** sous anesthésie locale (bloc paracervical) et antalgiques\n- ≥ 13 SA : misoprostol répété, évacuation après expulsion',
      ],
      [
        'Infection (avortement septique)',
        'Éviter le décès.',
        '- **Ampicilline** + **gentamicine** + **métronidazole** IV (ou ceftriaxone + métronidazole)\n- Évacuation utérine après le début des antibiotiques\n- Laparotomie si perforation, abcès, nécrose ; prévention du tétanos',
      ],
      [
        'Après le traitement',
        'Prévenir la récidive.',
        '- **Contraception** proposée immédiatement (tous les moyens possibles, y compris DIU et implant)\n- **Anti-D** si rhésus négatif\n- Conseil sans jugement, dépistage VIH et IST, soutien',
      ],
    ],
    molecules: [
      ['misoprostol', 'premiere', 'Évacuation utérine'],
      ['ocytocine', 'premiere', 'Hémorragie'],
      ['ampicilline', 'premiere', 'Avortement septique'],
      ['gentamicine', 'premiere', 'Avortement septique'],
      ['metronidazole', 'premiere', 'Avortement septique'],
      ['ceftriaxone', 'alternative', 'Avortement septique'],
      ['immunoglobulines-anti-d', 'premiere', 'Rhésus négatif'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Manœuvres septiques'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        description: 'Rétention, perforation.',
        traitement: '- Transfusion, évacuation, chirurgie',
        clinique: '- Pâleur, tachycardie',
        paraclinique: '- Hb',
      },
      {
        nom: 'Sepsis et choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Avortement septique.',
        traitement: '- Antibiotiques, évacuation',
        clinique: '- Fièvre, hypotension',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Perforation utérine et lésions digestives',
        fiche: 'peritonite-aigue',
        description: 'Manœuvres instrumentales.',
        traitement: '- Laparotomie',
        clinique: '- Défense, péritonite',
        paraclinique: '- ASP',
      },
      {
        nom: 'Stérilité, synéchies',
        description: 'Infection, curetage.',
        traitement: '- Prévention',
        clinique: '- Aménorrhée secondaire',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec des soins rapides ; la mortalité des avortements à risque est évitable',
    urgences: ['choc-septique', 'hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Hypotension', 'occasionnel'],
      ['Leucorrhées', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'FIGO — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Misoprostol, AMIU si formé, antibiotiques, contraception, transfert si grave',
        '- Choc, sepsis, perforation',
      ],
      hgr: ['- AMIU, transfusion, chirurgie', ''],
      tert: ['- Réanimation, chirurgie digestive', ''],
    },
    alertes: {
      'choc-septique': 'Femme après avortement avec fièvre, hypotension ou confusion',
      'hemorragie-du-post-partum-urgence': 'Saignement abondant après avortement',
    },
    formes: [
      {
        nom: 'Avortement incomplet non compliqué',
        type: 'commune',
        description: 'Rétention.',
        terrain: '- 1er trimestre',
        fonctionnels: '- Saignement modéré, crampes',
        generaux: '',
        physiques: '- Col ouvert',
        paraclinique: '- Rétention',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Avortement septique',
        type: 'gravite',
        description: 'Infection.',
        terrain: '- Avortement provoqué à risque',
        fonctionnels: '- Douleur, pertes fétides',
        generaux: '- Fièvre, choc',
        physiques: '- Utérus douloureux, défense',
        paraclinique: '- Hyperleucocytose',
        etiologies: '- Germes polymicrobiens',
        syndromes: ['syndrome-infectieux', 'syndrome-de-choc'],
      },
    ],
  },
];
