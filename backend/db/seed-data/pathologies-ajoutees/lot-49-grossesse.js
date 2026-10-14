'use strict';

/**
 * Lot 49 (phase 2, grossesse) — hépatite B et grossesse, hyperemesis gravidarum, cardiopathies et
 * grossesse, tuberculose et grossesse, épilepsie et grossesse, asthme et grossesse. Rédigé par IA
 * (OMS, ESC, ILAE, Normes et directives SR) : à valider.
 */

const GROS = { departement: 'gynecologie-obstetrique', specialite: 'Grossesse' };

module.exports = [
  // =================================================================== Hépatite B et grossesse
  {
    ...GROS,
    slug: 'hepatite-b-et-grossesse',
    nom: 'Hépatite B et grossesse',
    resume:
      'Portage de l’AgHBs chez 3 à 10 % des femmes enceintes en RDC : la transmission mère-enfant (périnatale) est la principale source d’hépatite B chronique, qui touche 90 % des nourrissons infectés ; dépister l’AgHBs à la première CPN ; ténofovir à partir de 24–28 semaines si charge virale élevée ou AgHBe positif, ou chez toutes les femmes AgHBs positives si la charge virale n’est pas disponible (OMS 2024), jusqu’à la fin de l’allaitement au moins ; vaccin hépatite B du nouveau-né dans les 24 heures (± immunoglobulines) ; allaitement autorisé.',
    definition:
      'Infection chronique par le virus de l’hépatite B (AgHBs positif) chez une femme enceinte, avec risque de transmission au nouveau-né, essentiellement au moment de l’accouchement.',
    physiopathologie:
      '## Transmission\n- Surtout **périnatale** (accouchement), rarement in utero ; risque de 70–90 % si AgHBe positif ou charge virale élevée sans prévention\n- Nouveau-né infecté : **portage chronique dans 90 % des cas** → cirrhose et carcinome hépatocellulaire à l’âge adulte\n\n## Grossesse\n- Évolution généralement stable ; poussées possibles en post-partum',
    diagnostic:
      '## Dépistage\n- **AgHBs** à la première consultation prénatale (avec VIH et syphilis : triple élimination)\n\n## Si AgHBs positif\n- **Charge virale (ADN VHB)** et/ou AgHBe, transaminases, numération plaquettaire\n- Échographie hépatique et score APRI (fibrose), recherche de cirrhose\n- Dépistage VIH, hépatite C ; dépistage et vaccination du partenaire et des enfants',
    examens: [
      ['confirmation', 'aghbs', 'Dépistage.'],
      ['premiere_intention', 'adn-vhb', 'Indication du ténofovir.'],
      ['premiere_intention', 'bilan-hepatique', 'Transaminases.'],
      ['premiere_intention', 'nfs', 'Plaquettes (APRI).'],
      ['premiere_intention', 'echographie-abdominale', 'Cirrhose.'],
      ['premiere_intention', 'tdr-vih', 'Coinfection.'],
    ],
    scores: [],
    differentiels: [
      ['hepatites-virales-aigues-a-et-e', 'Hépatite E grave pendant la grossesse.'],
      ['hepatite-b-chronique', 'Fiche générale.'],
      ['Cholestase gravidique', 'Prurit du 3e trimestre, AgHBs négatif.'],
      ['pre-eclampsie-severe', 'Cytolyse avec HTA, hémolyse, thrombopénie.'],
    ],
    etiologies: '## Facteurs\n- Transmission périnatale, horizontale dans l’enfance, sexuelle',
    principes: [
      [
        'Prévention médicamenteuse',
        'Réduire la charge virale.',
        '- **Ténofovir** (TDF) 300 mg/j à partir de **24–28 semaines**, au moins jusqu’à la fin de l’allaitement (ou au long cours si indication personnelle)\n- Indications : charge virale ≥ 200 000 UI/mL ou AgHBe positif ; **si la charge virale n’est pas disponible, traiter toutes les femmes AgHBs positives** (OMS 2024)\n- Traitement au long cours si hépatite active ou cirrhose',
      ],
      [
        'Nouveau-né',
        'Vacciner dans les 24 heures.',
        '- **Vaccin hépatite B à la naissance** (dans les 24 h, idéalement dans les 12 h), puis schéma complet\n- **Immunoglobulines anti-HBs** si disponibles (mère à charge virale élevée)\n- **Allaitement maternel autorisé**\n- Dépistage de l’enfant (AgHBs, anticorps) à 9–12 mois',
      ],
      [
        'Accouchement',
        'Pas de césarienne systématique.',
        '- Voie d’accouchement selon les indications obstétricales ; éviter les gestes invasifs inutiles',
      ],
    ],
    molecules: [
      ['tenofovir-disoproxil', 'premiere', 'Prévention de la transmission'],
      ['vaccin-hepatite-b', 'premiere', 'Nouveau-né dans les 24 heures'],
      ['immunoglobulines-anti-hbs', 'adjuvant', 'Nouveau-né à haut risque'],
    ],
    complications: [
      {
        nom: 'Transmission au nouveau-né',
        fiche: 'nouveau-ne-mere-hepatite-b',
        description: 'Absence de prévention.',
        traitement: '- Vaccin et immunoglobulines',
        clinique: '- Portage chronique',
        paraclinique: '- AgHBs de l’enfant',
      },
      {
        nom: 'Poussée d’hépatite',
        fiche: 'hepatite-b-chronique',
        description: 'Post-partum, arrêt du ténofovir.',
        traitement: '- Ténofovir',
        clinique: '- Ictère',
        paraclinique: '- Transaminases',
      },
      {
        nom: 'Cirrhose et carcinome hépatocellulaire',
        fiche: 'carcinome-hepatocellulaire',
        description: 'Évolution à long terme.',
        traitement: '- Suivi spécialisé',
        clinique: '',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Transmission réduite à moins de 1–2 % avec le ténofovir et la vaccination à la naissance',
    urgences: [],
    symptomes: [
      ['Asthénie', 'occasionnel'],
      ['Ictère', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'EASL Clinical Practice Guidelines on the management of hepatitis B virus infection',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Dépistage AgHBs, vaccin du nouveau-né', '- AgHBs positif'],
      hgr: ['- Bilan, ténofovir', ''],
      tert: ['- Hépatologie si cirrhose', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Portage chronique de l’AgHBs',
        type: 'commune',
        description: 'Asymptomatique.',
        terrain: '- Femme enceinte',
        fonctionnels: '',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- AgHBs positif',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Charge virale élevée',
        type: 'gravite',
        description: 'Risque de transmission élevé.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- ADN VHB ≥ 200 000 UI/mL, AgHBe positif',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hyperemesis
  {
    ...GROS,
    slug: 'hyperemesis-gravidarum',
    nom: 'Hyperemesis gravidarum',
    resume:
      'Vomissements incoercibles du 1er trimestre avec déshydratation, perte de poids > 5 %, cétonurie et troubles ioniques (0,5–2 % des grossesses) : éliminer une môle hydatiforme, une grossesse multiple, une infection urinaire, un paludisme, une hépatite, une hyperthyroïdie ; réhydratation IV (Ringer lactate ou NaCl 0,9 %), thiamine avant tout soluté glucosé (risque d’encéphalopathie de Gayet-Wernicke), antiémétiques (métoclopramide, prométhazine, doxylamine-pyridoxine, ondansétron) ; fractionner l’alimentation.',
    definition:
      'Forme sévère des nausées et vomissements de la grossesse, avec déshydratation, perte de poids (> 5 % du poids avant la grossesse), troubles électrolytiques et cétose.',
    physiopathologie:
      '## Mécanismes\n- Lié au pic d’**hCG** (6–12 semaines) et aux œstrogènes ; facteurs génétiques (GDF15)\n- Plus fréquent en cas de **grossesse multiple**, **môle hydatiforme**, antécédent\n\n## Conséquences\n- Déshydratation, hypokaliémie, alcalose, cétose, insuffisance rénale fonctionnelle\n- **Carence en thiamine** → encéphalopathie de Gayet-Wernicke\n- Dénutrition, retentissement psychologique',
    diagnostic:
      '## Clinique\n- Vomissements répétés, impossibilité de s’alimenter et de boire, ptyalisme\n- **Perte de poids**, signes de **déshydratation** (soif, oligurie, tachycardie, hypotension)\n- Signes neurologiques (confusion, ataxie, troubles oculomoteurs) : Gayet-Wernicke\n\n## Éliminer une autre cause\n- Douleur abdominale, fièvre, céphalées, début après 10 semaines → infection urinaire, paludisme, hépatite, appendicite, pancréatite, gastrite, pré-éclampsie\n\n## Examens\n- **Bandelette urinaire** (cétonurie, infection), **ionogramme** (hypokaliémie), créatinine\n- **Échographie** (môle, grossesse multiple), bilan hépatique, TSH, TDR paludisme',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Cétonurie, infection.'],
      ['gravite', 'ionogramme', 'Hypokaliémie.'],
      ['gravite', 'creatinine', 'Insuffisance rénale fonctionnelle.'],
      ['etiologique', 'echographie-obstetricale', 'Môle, grossesse multiple.'],
      ['etiologique', 'bilan-hepatique', 'Hépatite.'],
      ['etiologique', 'tsh', 'Hyperthyroïdie.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
    ],
    scores: [],
    differentiels: [
      ['Môle hydatiforme', 'Utérus trop gros, β-hCG très élevée, échographie.'],
      ['infections-urinaires-de-la-grossesse', 'Brûlures, fièvre, bandelette positive.'],
      ['paludisme-et-grossesse', 'Fièvre, TDR positif.'],
      ['hepatites-virales-aigues-a-et-e', 'Ictère, transaminases élevées.'],
      ['hyperthyroidie-basedow', 'Goitre, tachycardie persistante.'],
    ],
    etiologies: '## Facteurs\n- Grossesse multiple, môle, antécédent, jeune âge, primiparité',
    principes: [
      [
        'Réhydratation',
        'Corriger la déshydratation.',
        '- **Ringer lactate** ou **NaCl 0,9 %** (1–2 L puis selon la diurèse), avec **chlorure de potassium** selon la kaliémie\n- **Thiamine** 100 mg/j IV ou IM **avant** tout soluté glucosé, pendant quelques jours',
      ],
      [
        'Antiémétiques',
        'Contrôler les vomissements.',
        '- **Doxylamine-pyridoxine** ou **prométhazine** en première intention\n- **Métoclopramide** 10 mg IV ou per os 3 fois par jour (max 5 jours)\n- **Ondansétron** 4–8 mg si échec (petit sur-risque de fente labiale au 1er trimestre à mettre en balance)',
      ],
      [
        'Alimentation et soutien',
        'Réalimenter.',
        '- Reprise progressive : petits repas fractionnés, froids, peu gras ; IPP si brûlures\n- Soutien psychologique ; thromboprophylaxie si hospitalisation prolongée et immobilité',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Réhydratation'],
      ['chlorure-de-sodium-0-9', 'alternative', 'Réhydratation'],
      ['vitamine-b1-thiamine', 'premiere', 'Prévention de Gayet-Wernicke'],
      ['chlorure-de-potassium', 'adjuvant', 'Hypokaliémie'],
      ['doxylamine', 'premiere', 'Antiémétique (avec pyridoxine)'],
      ['pyridoxine', 'premiere', 'Antiémétique (avec doxylamine)'],
      ['promethazine', 'alternative', 'Antiémétique'],
      ['metoclopramide', 'alternative', 'Antiémétique'],
      ['ondansetron', 'deuxieme', 'Échec des autres antiémétiques'],
    ],
    complications: [
      {
        nom: 'Encéphalopathie de Gayet-Wernicke',
        fiche: 'encephalopathie-de-gayet-wernicke',
        description: 'Carence en thiamine.',
        traitement: '- Thiamine IV à fortes doses',
        clinique: '- Confusion, ataxie, ophtalmoplégie',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale fonctionnelle',
        fiche: 'insuffisance-renale-aigue',
        description: 'Déshydratation.',
        traitement: '- Réhydratation',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Hypokaliémie',
        description: 'Pertes digestives.',
        traitement: '- Potassium',
        clinique: '- Faiblesse, arythmie',
        paraclinique: '- Ionogramme',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration habituelle après 16–20 semaines ; bon pronostic maternel et fœtal si prise en charge',
    urgences: [],
    symptomes: [
      ['Vomissements', 'tres_frequent'],
      ['Nausées', 'tres_frequent'],
      ['Perte de poids', 'frequent'],
      ['Hypersalivation', 'occasionnel'],
      ['Asthénie', 'frequent'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Conseils, antiémétique oral, bandelette', '- Déshydratation, perte de poids, cétonurie'],
      hgr: ['- Perfusion, thiamine, échographie', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hyperemesis du 1er trimestre',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- 6–16 semaines',
        fonctionnels: '- Vomissements incoercibles',
        generaux: '- Perte de poids',
        physiques: '- Déshydratation',
        paraclinique: '- Cétonurie, hypokaliémie',
        etiologies: '- hCG',
        syndromes: ['syndrome-de-deshydratation-extracellulaire'],
      },
      {
        nom: 'Forme compliquée de Gayet-Wernicke',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Confusion',
        generaux: '',
        physiques: '- Ataxie, nystagmus',
        paraclinique: '',
        etiologies: '- Carence en thiamine',
        syndromes: ['syndrome-confusionnel'],
      },
    ],
  },

  // =================================================================== Cardiopathies et grossesse
  {
    ...GROS,
    slug: 'cardiopathies-et-grossesse',
    nom: 'Cardiopathies et grossesse',
    resume:
      'En RDC surtout valvulopathies rhumatismales (rétrécissement mitral : risque d’œdème pulmonaire au 2e–3e trimestre et pendant l’accouchement), cardiomyopathie du péripartum, cardiopathies congénitales, HTA : la grossesse augmente le débit cardiaque de 30–50 % ; consultation préconceptionnelle et suivi conjoint obstétrique-cardiologie, échocardiographie, bêtabloquant (rétrécissement mitral), diurétiques si congestion, anticoagulation si prothèse mécanique (risques de la warfarine), prophylaxie du RAA, accouchement planifié en hôpital, surveillance du post-partum.',
    definition:
      'Maladie cardiaque préexistante ou révélée pendant la grossesse, exposant la mère et le fœtus à un risque accru du fait des modifications hémodynamiques gravidiques (classification mWHO du risque).',
    physiopathologie:
      '## Modifications hémodynamiques\n- **Débit cardiaque +30–50 %**, volume sanguin augmenté, fréquence cardiaque accrue, pic au 2e–3e trimestre et pendant le travail et le post-partum immédiat (autotransfusion)\n- État d’**hypercoagulabilité**\n\n## Cardiopathies fréquentes en RDC\n- **Rétrécissement mitral** rhumatismal : mal toléré (tachycardie → œdème pulmonaire, fibrillation atriale)\n- Insuffisances valvulaires (mieux tolérées), **prothèses valvulaires** (thromboses)\n- **Cardiomyopathie du péripartum**, cardiopathies congénitales, hypertension pulmonaire (contre-indication à la grossesse)',
    diagnostic:
      '## Clinique\n- Dyspnée d’effort croissante, orthopnée, palpitations, toux, hémoptysie, syncope\n- Souffle, crépitants, œdèmes, turgescence jugulaire, arythmie\n- Distinguer des signes physiologiques de la grossesse (souffle systolique doux, œdèmes discrets, dyspnée légère)\n\n## Examens\n- **Échocardiographie** (lésion, fonction, pressions pulmonaires)\n- **ECG**, BNP, radiographie thoracique avec protection si nécessaire\n- NFS (anémie aggravante), TSH ; INR si anticoagulant',
    examens: [
      ['confirmation', 'echocardiographie', 'Lésion, fonction.'],
      ['premiere_intention', 'ecg', 'Arythmie.'],
      ['premiere_intention', 'bnp', 'Insuffisance cardiaque.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['deuxieme_intention', 'radiographie-thoracique', 'Œdème pulmonaire.'],
      ['premiere_intention', 'tsh', 'Dysthyroïdie.'],
    ],
    scores: [],
    differentiels: [
      ['cardiomyopathie-du-peripartum', 'Insuffisance cardiaque de fin de grossesse ou du post-partum.'],
      ['pre-eclampsie-severe', 'HTA, protéinurie, œdème pulmonaire.'],
      ['anemie-de-la-grossesse', 'Dyspnée, tachycardie.'],
      ['Embolie pulmonaire', 'Dyspnée brutale, douleur thoracique.'],
      ['asthme-et-grossesse', 'Sifflements, antécédents.'],
    ],
    etiologies:
      '## Causes\n- Valvulopathies rhumatismales, cardiomyopathie du péripartum, cardiopathies congénitales, HTA',
    principes: [
      [
        'Avant et pendant la grossesse',
        'Évaluer et suivre.',
        '- Consultation **préconceptionnelle** (contraception efficace si risque très élevé : hypertension pulmonaire, dysfonction sévère)\n- **Suivi conjoint** obstétrique-cardiologie, échocardiographie à chaque trimestre\n- Rétrécissement mitral : **bêtabloquant** (bisoprolol, métoprolol), **furosémide** si congestion, repos ; dilatation mitrale percutanée si sévère et symptomatique (centre spécialisé)\n- Correction de l’anémie, prévention du paludisme, **benzathine pénicilline** (prophylaxie secondaire du RAA)',
      ],
      [
        'Anticoagulation',
        'Prothèses mécaniques.',
        '- Risque thrombotique majeur : **héparine** (HBPM avec surveillance anti-Xa ou HNF) au 1er trimestre, **warfarine** (antivitamine K) possible aux 2e–3e trimestres si dose ≤ 5 mg/j, relais par héparine avant l’accouchement (avis spécialisé)\n- Fibrillation atriale : anticoagulation, digoxine ou bêtabloquant',
      ],
      [
        'Accouchement et post-partum',
        'Planifier.',
        '- Accouchement en **hôpital** équipé, voie basse le plus souvent, **analgésie**, extraction instrumentale pour raccourcir les efforts expulsifs, césarienne pour indications obstétricales\n- Éviter la surcharge (perfusions), **ocytocine** en perfusion lente (pas d’ergométrine en cas de cardiopathie)\n- Surveillance rapprochée **24–72 h après l’accouchement** (œdème pulmonaire)',
      ],
    ],
    molecules: [
      ['bisoprolol', 'premiere', 'Rétrécissement mitral, tachycardie'],
      ['furosemide', 'premiere', 'Congestion'],
      ['enoxaparine', 'premiere', 'Anticoagulation (prothèse, FA)'],
      ['heparine-non-fractionnee', 'alternative', 'Anticoagulation'],
      ['warfarine', 'alternative', 'Prothèse mécanique (2e–3e trimestre, avis spécialisé)'],
      ['digoxine', 'alternative', 'Fibrillation atriale'],
      ['benzathine-benzylpenicilline', 'adjuvant', 'Prophylaxie secondaire du RAA'],
    ],
    complications: [
      {
        nom: 'Œdème aigu du poumon',
        fiche: 'insuffisance-cardiaque',
        description: 'Rétrécissement mitral, surcharge.',
        traitement: '- Furosémide, oxygène, position assise',
        clinique: '- Dyspnée, crépitants',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Thrombose de prothèse et embolies',
        description: 'Hypercoagulabilité.',
        traitement: '- Anticoagulation',
        clinique: '- Dyspnée, déficit',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Retard de croissance et prématurité',
        description: 'Bas débit.',
        traitement: '- Surveillance',
        clinique: '',
        paraclinique: '- Échographie obstétricale',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cardiopathie (classification mWHO) ; mortalité maternelle élevée en cas de rétrécissement mitral serré ou d’hypertension pulmonaire non suivis',
    urgences: ['oedeme-aigu-du-poumon'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Palpitations', 'frequent'],
      ['Œdèmes', 'frequent'],
      ['Toux', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Repérer la dyspnée anormale, orientation, prophylaxie RAA', '- Dyspnée de repos, palpitations'],
      hgr: ['- Échocardiographie, traitement, accouchement planifié', ''],
      tert: ['- Cardiologie, dilatation mitrale, chirurgie', ''],
    },
    alertes: { 'oedeme-aigu-du-poumon': 'Femme enceinte cardiaque avec dyspnée brutale et crépitants' },
    formes: [
      {
        nom: 'Rétrécissement mitral et grossesse',
        type: 'commune',
        description: 'Valvulopathie rhumatismale.',
        terrain: '- Femme jeune, antécédent de RAA',
        fonctionnels: '- Dyspnée d’effort croissante',
        generaux: '',
        physiques: '- Roulement diastolique',
        paraclinique: '- Surface mitrale réduite',
        etiologies: '- RAA',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
      },
      {
        nom: 'Prothèse valvulaire mécanique',
        type: 'gravite',
        description: 'Risque de thrombose.',
        terrain: '- Femme opérée',
        fonctionnels: '',
        generaux: '',
        physiques: '- Clics de prothèse',
        paraclinique: '- INR',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Tuberculose et grossesse
  {
    ...GROS,
    slug: 'tuberculose-et-grossesse',
    nom: 'Tuberculose et grossesse',
    resume:
      'La tuberculose est une cause importante de décès maternel en RDC, surtout chez les femmes vivant avec le VIH : rechercher la tuberculose à chaque CPN (toux, fièvre, sueurs, amaigrissement ou absence de prise de poids) ; Xpert MTB/RIF ; le traitement standard (RHZE 2 mois puis RH 4 mois) est sûr pendant la grossesse, avec pyridoxine ; prévention par isoniazide chez la femme VIH positive ; le nouveau-né d’une mère contagieuse reçoit une prévention (isoniazide) puis le BCG ; allaitement maintenu.',
    definition:
      'Tuberculose active (pulmonaire ou extrapulmonaire) diagnostiquée pendant la grossesse ou le post-partum.',
    physiopathologie:
      '## Particularités\n- Symptômes masqués par la grossesse (fatigue, dyspnée), **prise de poids insuffisante**\n- Risque accru de réactivation en post-partum et chez la femme **VIH positive**\n\n## Conséquences\n- Mère : décès, tuberculose disséminée, méningite\n- Fœtus et nouveau-né : prématurité, petit poids, **tuberculose congénitale** (rare), transmission post-natale',
    diagnostic:
      '## Dépistage systématique à chaque CPN\n- **Toux** (quelle que soit la durée chez la femme VIH positive), **fièvre**, **sueurs nocturnes**, **amaigrissement** ou absence de prise de poids\n\n## Examens\n- **Xpert MTB/RIF** sur expectoration\n- **Radiographie thoracique** avec tablier de protection (acceptable pendant la grossesse)\n- **TB-LAM** si VIH avec CD4 bas, **test VIH**\n- Bilan hépatique avant traitement (risque d’hépatotoxicité accru en post-partum)',
    examens: [
      ['confirmation', 'xpert-mtb-rif', 'Diagnostic et résistance à la rifampicine.'],
      ['premiere_intention', 'radiographie-thoracique', 'Avec protection abdominale.'],
      ['premiere_intention', 'tdr-vih', 'Coinfection.'],
      ['etiologique', 'tb-lam', 'Femme VIH avec CD4 bas.'],
      ['premiere_intention', 'bilan-hepatique', 'Avant traitement.'],
      ['premiere_intention', 'cd4', 'Femme VIH.'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-pulmonaire', 'Fiche générale.'],
      ['pneumonie-communautaire-adulte', 'Fièvre aiguë, foyer.'],
      ['cardiopathies-et-grossesse', 'Dyspnée d’origine cardiaque.'],
      ['anemie-de-la-grossesse', 'Fatigue, essoufflement.'],
    ],
    etiologies: '## Facteurs\n- VIH, contage, malnutrition, post-partum',
    principes: [
      [
        'Traitement',
        'Schéma standard.',
        '- **RHZE** (rifampicine, isoniazide, pyrazinamide, éthambutol) 2 mois puis **RH** 4 mois, doses selon le poids : **sûr pendant la grossesse**\n- **Pyridoxine** 25–50 mg/j\n- Tuberculose résistante : schémas spécialisés (avis du programme, certains médicaments à éviter)\n- Femme VIH : **ARV** (dolutégravir, avec double dose en cas de rifampicine), cotrimoxazole',
      ],
      [
        'Prévention',
        'Tuberculose latente.',
        '- **Isoniazide** 6 mois (+ pyridoxine) chez la femme VIH positive sans tuberculose active\n- Recherche des contacts dans le ménage',
      ],
      [
        'Nouveau-né',
        'Protéger.',
        '- Mère contagieuse : nouveau-né examiné ; si non malade, **isoniazide** préventif 6 mois puis **BCG** (ou selon le programme)\n- **Allaitement maintenu** ; masque pour la mère les premières semaines si bacillifère',
      ],
      [
        'Contraception',
        'Interactions.',
        '- La rifampicine diminue l’efficacité des contraceptifs hormonaux (implant, pilule) : préférer le DIU ou l’injectable',
      ],
    ],
    molecules: [
      ['rifampicine', 'premiere', 'RHZE'],
      ['isoniazide', 'premiere', 'RHZE, prévention'],
      ['pyrazinamide', 'premiere', 'RHZE'],
      ['ethambutol', 'premiere', 'RHZE'],
      ['pyridoxine', 'premiere', 'Prévention de la neuropathie'],
      ['dolutegravir', 'adjuvant', 'Femme VIH positive'],
    ],
    complications: [
      {
        nom: 'Décès maternel',
        description: 'Diagnostic tardif, VIH.',
        traitement: '- Dépistage systématique',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Hépatite médicamenteuse',
        description: 'Post-partum.',
        traitement: '- Arrêt, réintroduction prudente',
        clinique: '- Ictère, vomissements',
        paraclinique: '- Transaminases',
      },
      {
        nom: 'Tuberculose du nouveau-né',
        fiche: 'tuberculose-enfant',
        description: 'Transmission.',
        traitement: '- Prévention, traitement',
        clinique: '- Fièvre, détresse respiratoire',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent sous traitement précoce ; mortalité élevée en cas de VIH non traité ou de diagnostic tardif',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Sueurs nocturnes', 'frequent'],
      ['Perte de poids', 'frequent'],
    ],
    sources: [
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Dépistage à chaque CPN, prélèvement, traitement (CSDT)', '- Forme grave, VIH avancé'],
      hgr: ['- Radiographie, Xpert, formes compliquées', ''],
      tert: ['- Tuberculose résistante', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tuberculose pulmonaire de la femme enceinte',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Femme enceinte',
        fonctionnels: '- Toux',
        generaux: '- Fièvre, absence de prise de poids',
        physiques: '',
        paraclinique: '- Xpert positif',
        etiologies: '',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
      },
      {
        nom: 'Tuberculose et VIH pendant la grossesse',
        type: 'gravite',
        description: 'Risque élevé.',
        terrain: '- Femme VIH',
        fonctionnels: '',
        generaux: '- Amaigrissement',
        physiques: '',
        paraclinique: '- TB-LAM positif, CD4 bas',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Épilepsie et grossesse
  {
    ...GROS,
    slug: 'epilepsie-et-grossesse',
    nom: 'Épilepsie et grossesse',
    resume:
      'La plupart des femmes épileptiques ont une grossesse normale : ne jamais arrêter brutalement le traitement (risque d’état de mal et de décès) ; éviter le valproate (malformations, troubles du neurodéveloppement) chez toute femme en âge de procréer et préférer la lamotrigine ou le lévétiracétam ; acide folique à forte dose (4–5 mg/j) avant et pendant la grossesse ; vitamine K au nouveau-né ; distinguer une crise de l’éclampsie après 20 semaines (tension, protéinurie : sulfate de magnésium) ; allaitement possible.',
    definition:
      'Épilepsie préexistante ou débutant pendant la grossesse, nécessitant un équilibre entre le contrôle des crises et la sécurité fœtale des antiépileptiques.',
    physiopathologie:
      '## Risques\n- **Crises** : traumatismes, hypoxie fœtale, état de mal, mort subite (SUDEP) ; aggravées par l’arrêt du traitement, le manque de sommeil, les vomissements, la baisse des taux sanguins (lamotrigine, lévétiracétam)\n- **Médicaments** : **valproate** (malformations 10 %, troubles cognitifs et autisme), carbamazépine et phénytoïne (risque moindre), phénobarbital ; lamotrigine et lévétiracétam les plus sûrs\n- Antiépileptiques inducteurs : carence en vitamine K du nouveau-né, échec des contraceptifs hormonaux',
    diagnostic:
      '## Évaluation\n- Type de crises, fréquence, traitement actuel, observance\n- Après 20 semaines : toute crise convulsive → **mesurer la tension, rechercher une protéinurie** (éclampsie)\n- Autres causes : hypoglycémie, neuropaludisme, méningite, thrombose veineuse cérébrale (post-partum)\n\n## Examens\n- Glycémie, TDR paludisme, tension, protéinurie\n- Échographie morphologique (18–22 semaines)\n- EEG et imagerie si crise inaugurale',
    examens: [
      ['gravite', 'bandelette-urinaire', 'Protéinurie (éclampsie).'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['etiologique', 'tdr-paludisme', 'Neuropaludisme.'],
      ['premiere_intention', 'echographie-obstetricale', 'Morphologie fœtale.'],
      ['deuxieme_intention', 'eeg', 'Crise inaugurale.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Crise inaugurale, thrombose veineuse.'],
    ],
    scores: [],
    differentiels: [
      ['eclampsie', 'Crise après 20 semaines avec HTA et protéinurie.'],
      ['paludisme-et-grossesse', 'Fièvre, TDR positif.'],
      ['Syncope', 'Perte de connaissance brève sans phase tonico-clonique.'],
      ['Crises psychogènes non épileptiques', 'Contexte émotionnel, yeux fermés, mouvements asynchrones.'],
    ],
    etiologies:
      '## Causes\n- Épilepsie préexistante (idiopathique, post-infectieuse, onchocercose) ; crise inaugurale symptomatique',
    principes: [
      [
        'Avant la grossesse',
        'Préparer.',
        '- **Remplacer le valproate** (lamotrigine, lévétiracétam) chez toute femme en âge de procréer, si possible avant la conception\n- **Acide folique 4–5 mg/j** au moins 1 mois avant la conception et pendant le 1er trimestre\n- Contraception adaptée (DIU, injectable si inducteur enzymatique)',
      ],
      [
        'Pendant la grossesse',
        'Contrôler les crises.',
        '- **Ne jamais arrêter brutalement** le traitement ; monothérapie à la dose minimale efficace\n- Ajuster les doses (lamotrigine, lévétiracétam) si les crises augmentent\n- Crise prolongée : **diazépam** ; état de mal : protocole habituel ; crise après 20 semaines avec HTA : **sulfate de magnésium**',
      ],
      [
        'Accouchement et post-partum',
        'Sécuriser.',
        '- Accouchement en structure, poursuite du traitement pendant le travail\n- **Vitamine K** au nouveau-né ; **allaitement** encouragé\n- Revenir aux doses d’avant la grossesse dans les semaines suivant l’accouchement (toxicité) ; prévention des chutes et sommeil préservé',
      ],
    ],
    molecules: [
      ['lamotrigine', 'premiere', 'Traitement de choix'],
      ['levetiracetam', 'premiere', 'Traitement de choix'],
      ['carbamazepine', 'alternative', 'Si lamotrigine et lévétiracétam indisponibles'],
      ['acide-folique', 'premiere', '4–5 mg/j'],
      ['diazepam', 'adjuvant', 'Crise prolongée'],
      ['sulfate-de-magnesium', 'adjuvant', 'Éclampsie'],
    ],
    complications: [
      {
        nom: 'État de mal épileptique',
        fiche: 'etat-de-mal-epileptique',
        description: 'Arrêt du traitement.',
        traitement: '- Benzodiazépines, antiépileptiques IV',
        clinique: '- Crises prolongées',
        paraclinique: '',
      },
      {
        nom: 'Malformations fœtales',
        fiche: 'spina-bifida-defauts-tube-neural',
        description: 'Valproate.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Éclampsie méconnue',
        fiche: 'eclampsie',
        description: 'Crise attribuée à tort à l’épilepsie.',
        traitement: '- Sulfate de magnésium',
        clinique: '- HTA, convulsions',
        paraclinique: '- Protéinurie',
      },
    ],
    evolution:
      '## Pronostic\n- Plus de 90 % des grossesses se déroulent normalement ; risque principal lié à l’arrêt du traitement et au valproate',
    urgences: ['etat-de-mal-epileptique-urgence', 'eclampsie'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'ILAE — recommandations de pratique clinique',
      'mhGAP Intervention Guide 2.0',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Poursuite du traitement, acide folique, orientation',
        '- Crises fréquentes, crise après 20 semaines',
      ],
      hgr: ['- Ajustement du traitement, accouchement', ''],
      tert: ['- Neurologie', ''],
    },
    alertes: {
      'etat-de-mal-epileptique-urgence': 'Femme enceinte avec crise de plus de 5 minutes',
      eclampsie: 'Convulsions après 20 semaines avec HTA',
    },
    formes: [
      {
        nom: 'Épilepsie équilibrée',
        type: 'commune',
        description: 'Grossesse normale.',
        terrain: '- Femme épileptique traitée',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Épilepsie déséquilibrée',
        type: 'gravite',
        description: 'Crises répétées.',
        terrain: '- Arrêt du traitement, vomissements',
        fonctionnels: '',
        generaux: '',
        physiques: '- Crises',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== Asthme et grossesse
  {
    ...GROS,
    slug: 'asthme-et-grossesse',
    nom: 'Asthme et grossesse',
    resume:
      'Asthme pendant la grossesse : évolution imprévisible (un tiers s’aggrave), un asthme mal contrôlé est plus dangereux pour le fœtus que les médicaments (hypoxie, pré-éclampsie, prématurité, petit poids) ; poursuivre les corticoïdes inhalés (budésonide, béclométasone) et le salbutamol, sûrs pendant la grossesse ; crise : salbutamol, oxygène (SpO2 ≥ 95 %), corticoïdes systémiques, sulfate de magnésium si grave ; vaccination antigrippale, éviter les irritants (fumée de bois).',
    definition:
      'Asthme préexistant ou révélé pendant la grossesse, dont le contrôle conditionne le pronostic maternel et fœtal.',
    physiopathologie:
      '## Mécanismes\n- Évolution variable : amélioration, stabilité ou aggravation (souvent entre 24 et 36 semaines)\n- Facteurs d’aggravation : **arrêt des traitements** par crainte pour le bébé, infections virales, reflux, rhinite, fumée\n\n## Conséquences d’un asthme mal contrôlé\n- **Hypoxie fœtale**, pré-éclampsie, prématurité, retard de croissance, césarienne',
    diagnostic:
      '## Évaluation du contrôle\n- Symptômes diurnes et nocturnes, utilisation du salbutamol, limitation des activités\n- **Débit expiratoire de pointe** (DEP), SpO2\n\n## Crise grave\n- Dyspnée de repos, parole difficile, FR > 25/min, FC > 110/min, **SpO2 < 95 %**, DEP < 50 %, silence auscultatoire, troubles de conscience\n\n## Examens\n- DEP, SpO2 ; gaz du sang si crise grave (une PaCO2 « normale » est anormale pendant la grossesse) ; radiographie avec protection si suspicion de pneumonie',
    examens: [
      ['premiere_intention', 'debit-expiratoire-de-pointe', 'Contrôle, gravité.'],
      ['gravite', 'oxymetrie-de-pouls', 'SpO2 ≥ 95 %.'],
      ['gravite', 'gaz-du-sang', 'Crise grave.'],
      ['deuxieme_intention', 'radiographie-thoracique', 'Pneumonie, pneumothorax.'],
      ['deuxieme_intention', 'spirometrie', 'Diagnostic.'],
    ],
    scores: [],
    differentiels: [
      ['Dyspnée physiologique de la grossesse', 'Sans sifflements, DEP normal.'],
      ['cardiopathies-et-grossesse', 'Rétrécissement mitral (« asthme cardiaque »).'],
      ['Embolie pulmonaire', 'Dyspnée brutale, tachycardie.'],
      ['pneumonie-communautaire-adulte', 'Fièvre, foyer.'],
    ],
    etiologies: '## Facteurs\n- Arrêt du traitement, infections virales, fumée, allergènes, reflux',
    principes: [
      [
        'Traitement de fond',
        'Ne pas arrêter.',
        '- **Corticoïdes inhalés** (**budésonide**, béclométasone) poursuivis ou augmentés ; **salbutamol** à la demande ; vérifier la technique d’inhalation (chambre)\n- Association à un bêta-2 de longue durée si nécessaire\n- Éviter la fumée (bois, charbon, tabac), vaccination antigrippale, traitement de la rhinite et du reflux',
      ],
      [
        'Crise',
        'Traiter vite.',
        '- **Salbutamol** 4–10 bouffées en chambre d’inhalation (ou nébulisation 5 mg) toutes les 20 min pendant 1 h\n- **Oxygène** pour SpO2 ≥ 95 %\n- **Prednisolone** 40–50 mg/j pendant 5 jours (ou hydrocortisone IV)\n- Crise grave : **sulfate de magnésium** 2 g IV en 20 min, ipratropium ; surveillance fœtale ; transfert en réanimation si épuisement',
      ],
      [
        'Accouchement',
        'Poursuivre.',
        '- Traitement de fond poursuivi ; corticoïdes IV autour de l’accouchement si corticothérapie orale prolongée\n- Prudence avec le carboprost (prostaglandine F2α) et les bêtabloquants ; ocytocine et misoprostol utilisables',
      ],
    ],
    molecules: [
      ['budesonide', 'premiere', 'Corticoïde inhalé'],
      ['beclometasone-inhalee', 'alternative', 'Corticoïde inhalé'],
      ['salbutamol', 'premiere', 'Crise, à la demande'],
      ['prednisolone', 'premiere', 'Crise'],
      ['sulfate-de-magnesium', 'alternative', 'Crise grave'],
      ['hydrocortisone', 'alternative', 'Crise grave IV'],
    ],
    complications: [
      {
        nom: 'Asthme aigu grave',
        fiche: 'asthme-aigu-grave',
        description: 'Crise sévère.',
        traitement: '- Bronchodilatateurs, corticoïdes, magnésium',
        clinique: '- Épuisement, cyanose',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Hypoxie fœtale et prématurité',
        description: 'Asthme mal contrôlé.',
        traitement: '- Contrôle de l’asthme',
        clinique: '',
        paraclinique: '- Surveillance fœtale',
      },
      {
        nom: 'Pré-éclampsie',
        fiche: 'hypertension-gravidique',
        description: 'Risque accru.',
        traitement: '- Surveillance tensionnelle',
        clinique: '- HTA',
        paraclinique: '- Protéinurie',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent si l’asthme est contrôlé ; les médicaments inhalés habituels sont sûrs',
    urgences: ['crise-d-asthme-aigue-grave'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Sifflements respiratoires', 'tres_frequent'],
      ['Toux', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Poursuite du traitement, salbutamol, prednisolone', '- Crise grave, SpO2 < 95 %'],
      hgr: ['- Oxygène, magnésium, surveillance fœtale', ''],
      tert: ['- Réanimation', ''],
    },
    alertes: {
      'crise-d-asthme-aigue-grave': 'Femme enceinte asthmatique avec dyspnée de repos ou SpO2 < 95 %',
    },
    formes: [
      {
        nom: 'Asthme contrôlé',
        type: 'commune',
        description: 'Traitement poursuivi.',
        terrain: '- Femme asthmatique',
        fonctionnels: '- Peu de symptômes',
        generaux: '',
        physiques: '',
        paraclinique: '- DEP normal',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Crise d’asthme grave pendant la grossesse',
        type: 'gravite',
        description: 'Urgence materno-fœtale.',
        terrain: '',
        fonctionnels: '- Dyspnée de repos',
        generaux: '',
        physiques: '- Tirage, silence auscultatoire',
        paraclinique: '- SpO2 < 95 %, DEP < 50 %',
        etiologies: '',
        syndromes: ['syndrome-bronchique-obstructif', 'syndrome-de-detresse-respiratoire'],
      },
    ],
  },
];
