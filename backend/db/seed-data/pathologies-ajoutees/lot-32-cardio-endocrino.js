'use strict';

/**
 * Lot 32 (phase 2 : cardiologie, endocrinologie) — angor stable, néphropathie diabétique,
 * hyperthyroïdie et maladie de Basedow, hypothyroïdie de l'adulte, insuffisance surrénalienne
 * aiguë, obésité de l'adulte, dyslipidémies. Rédigé par IA (ESC, ADA, OMS PEN, ouvrages de
 * référence) : à valider.
 */

const CARDIO = { departement: 'medecine-interne', specialite: 'Cardiologie' };
const ENDO = { departement: 'medecine-interne', specialite: 'Endocrinologie et diabétologie' };

module.exports = [
  // =================================================================== Angor stable
  {
    ...CARDIO,
    slug: 'angor-stable',
    nom: 'Angor stable (cardiopathie ischémique chronique)',
    resume:
      'Douleur thoracique constrictive d’effort, cédant au repos ou à la trinitrine en moins de 5 minutes, chez un patient à risque (HTA, diabète, tabac, dyslipidémie) : ECG, bilan des facteurs de risque, échocardiographie, test d’effort ; trinitrine en cas de crise, bêtabloquant, aspirine, statine ; contrôle des facteurs de risque ; douleur prolongée au repos = syndrome coronarien aigu.',
    definition:
      'Manifestation clinique d’une ischémie myocardique réversible, liée le plus souvent à une sténose athéromateuse coronaire, survenant de façon reproductible à l’effort ou au stress.',
    physiopathologie:
      '## Mécanismes\n- Déséquilibre entre apports et besoins en oxygène du myocarde, à l’effort, en aval d’une sténose coronaire\n- Facteurs de risque : **HTA**, **diabète**, **tabac**, **dyslipidémie**, obésité, sédentarité, âge, antécédents familiaux\n- Autres causes d’angor : rétrécissement aortique, anémie sévère, cardiomyopathie hypertrophique, tachycardies',
    diagnostic:
      '## Clinique\n- Douleur **rétrosternale constrictive**, en barre, irradiant vers les mâchoires et les bras\n- Déclenchée par l’**effort**, le froid, les émotions ; cède en **quelques minutes** au repos ou sous **trinitrine**\n- Formes atypiques : dyspnée d’effort, femme, diabétique, sujet âgé\n\n## Examens\n- **ECG** de repos (souvent normal), **ECG d’effort**, échocardiographie\n- Bilan des facteurs de risque : glycémie, HbA1c, bilan lipidique, créatinine, NFS (anémie)\n- Coronarographie dans les centres équipés (angor sévère, test très positif)',
    examens: [
      ['premiere_intention', 'ecg', 'Séquelles, troubles de repolarisation.'],
      ['premiere_intention', 'bilan-lipidique', 'Dyslipidémie.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'hba1c', 'Diabète.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['deuxieme_intention', 'echocardiographie', 'Fonction ventriculaire, valvulopathie.'],
      ['etiologique', 'tsh', 'Hyperthyroïdie.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-coronarien-aigu-sans-st', 'Douleur de repos, prolongée, troponine.'],
      ['Reflux gastro-œsophagien', 'Brûlures, lien avec les repas.'],
      ['Douleur pariétale', 'Reproduite à la palpation.'],
      ['embolie-pulmonaire', 'Dyspnée brutale, facteurs de risque thromboembolique.'],
      ['Rétrécissement aortique', 'Souffle systolique éjectionnel.'],
    ],
    etiologies:
      '## Facteurs de risque\n- HTA, diabète, tabac, dyslipidémie, obésité, sédentarité, âge, sexe masculin, antécédents familiaux',
    principes: [
      [
        'Traitement de la crise',
        'Soulager.',
        '- **Trinitrine** sublinguale 0,4 mg, à répéter 2 fois à 5 minutes ; douleur > 20 minutes = urgence (SCA)',
      ],
      [
        'Traitement de fond',
        'Prévenir les crises et les événements.',
        '- **Bêtabloquant** (bisoprolol, aténolol) en première intention ; inhibiteur calcique (**amlodipine**) si contre-indication ou en association\n- **Aspirine** 75–100 mg/j (clopidogrel si intolérance) et **statine** (atorvastatine)\n- IEC si HTA, diabète, dysfonction ventriculaire\n- Autres antiangineux : dérivés nitrés, ivabradine, ranolazine, trimétazidine',
      ],
      [
        'Facteurs de risque',
        'Ralentir la maladie.',
        '- Arrêt du tabac, activité physique régulière, régime, perte de poids, contrôle de la tension et du diabète',
      ],
      [
        'Revascularisation',
        'Formes sévères.',
        '- Angioplastie ou pontage en cas d’angor résistant ou de lésions à haut risque (centres spécialisés)',
      ],
    ],
    molecules: [
      ['trinitrine', 'premiere', 'Crise'],
      ['bisoprolol', 'premiere', 'Bêtabloquant'],
      ['atenolol', 'alternative', 'Bêtabloquant'],
      ['amlodipine', 'alternative', 'Inhibiteur calcique'],
      ['acide-acetylsalicylique', 'premiere', 'Antiagrégant'],
      ['clopidogrel', 'alternative', 'Intolérance à l’aspirine'],
      ['atorvastatine', 'premiere', 'Statine'],
      ['ivabradine', 'deuxieme', 'Antiangineux'],
      ['trimetazidine', 'deuxieme', 'Antiangineux'],
    ],
    complications: [
      {
        nom: 'Syndrome coronarien aigu',
        fiche: 'syndrome-coronarien-aigu-sans-st',
        description: 'Rupture de plaque.',
        traitement: '- Prise en charge urgente',
        clinique: '- Douleur de repos prolongée',
        paraclinique: '- ECG, troponine',
      },
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque',
        description: 'Cardiopathie ischémique.',
        traitement: '- Traitement de l’insuffisance cardiaque',
        clinique: '- Dyspnée, œdèmes',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Troubles du rythme et mort subite',
        description: 'Ischémie.',
        traitement: '- Traitement adapté',
        clinique: '- Palpitations, syncope',
        paraclinique: '- ECG',
      },
    ],
    evolution:
      '## Pronostic\n- Bon sous traitement et contrôle des facteurs de risque ; risque annuel d’infarctus ou de décès de 1 à 3 %',
    urgences: [],
    symptomes: [
      ['Douleur thoracique', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Palpitations', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Trinitrine, aspirine, contrôle des facteurs de risque, orientation',
        '- Douleur de repos, prolongée, aggravation',
      ],
      hgr: ['- ECG, échocardiographie, traitement de fond', '- Revascularisation'],
      tert: ['- Cardiologie, coronarographie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Angor d’effort typique',
        type: 'commune',
        description: 'Forme classique.',
        terrain: '- Homme > 50 ans, facteurs de risque',
        fonctionnels: '- Douleur constrictive d’effort',
        generaux: '',
        physiques: '- Examen souvent normal',
        paraclinique: '- ECG d’effort positif',
        etiologies: '- Athérosclérose coronaire',
        syndromes: [],
      },
      {
        nom: 'Ischémie silencieuse ou atypique',
        type: 'terrain',
        description: 'Diabétique, femme, sujet âgé.',
        terrain: '- Diabète',
        fonctionnels: '- Dyspnée d’effort, fatigue',
        generaux: '',
        physiques: '',
        paraclinique: '- Anomalies ECG',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Néphropathie diabétique
  {
    ...ENDO,
    slug: 'nephropathie-diabetique',
    nom: 'Néphropathie diabétique',
    resume:
      'Atteinte rénale du diabète, première cause de maladie rénale chronique dans le monde : dépistage annuel (microalbuminurie ou protéinurie, créatinine et DFG) ; contrôle glycémique et tensionnel (< 130/80), IEC ou ARA2, inhibiteur de SGLT2 (dapagliflozine, empagliflozine), statine ; adapter les médicaments (metformine) à la fonction rénale ; préparer la suppléance au stade avancé.',
    definition:
      'Maladie rénale chronique liée au diabète, définie par une albuminurie persistante et/ou une baisse du débit de filtration glomérulaire chez un diabétique, en l’absence d’autre cause.',
    physiopathologie:
      '## Mécanismes\n- Hyperfiltration glomérulaire, épaississement de la membrane basale, glomérulosclérose nodulaire (Kimmelstiel-Wilson)\n- Microalbuminurie → protéinurie → baisse du DFG → insuffisance rénale terminale\n- Facteurs aggravants : HTA, mauvais équilibre glycémique, tabac, obésité, infections urinaires',
    diagnostic:
      '## Dépistage (annuel)\n- **Microalbuminurie** (rapport albumine/créatinine urinaire 30–300 mg/g) ou protéinurie à la bandelette\n- **Créatinine** et estimation du DFG\n- Rétinopathie souvent associée (fond d’œil)\n\n## Rechercher une autre cause si\n- Protéinurie brutale, hématurie, absence de rétinopathie, dégradation rapide, diabète récent → néphropathie VIH, glomérulonéphrite, obstacle',
    examens: [
      ['premiere_intention', 'microalbuminurie', 'Dépistage précoce.'],
      ['premiere_intention', 'proteinurie', 'Stade de protéinurie.'],
      ['premiere_intention', 'creatinine', 'DFG.'],
      ['premiere_intention', 'ionogramme', 'Kaliémie (IEC, ARA2).'],
      ['premiere_intention', 'hba1c', 'Équilibre glycémique.'],
      ['premiere_intention', 'fond-d-oeil', 'Rétinopathie associée.'],
      ['deuxieme_intention', 'echographie-renale', 'Taille des reins, obstacle.'],
    ],
    scores: [],
    differentiels: [
      ['nephropathie-associee-au-vih', 'Patient VIH, protéinurie importante.'],
      ['Néphropathie hypertensive', 'HTA ancienne, protéinurie faible.'],
      ['syndrome-nephrotique-adulte', 'Autre glomérulopathie.'],
      ['infections-urinaires-adulte', 'Leucocyturie, nitrites.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Diabète ancien et déséquilibré, HTA, tabac, obésité, prédisposition génétique, origine africaine',
    principes: [
      [
        'Néphroprotection',
        'Ralentir la progression.',
        '- **IEC** (énalapril, périndopril) ou **ARA2** (losartan) même si la tension est normale, dès la microalbuminurie ; surveiller kaliémie et créatinine\n- **Inhibiteur de SGLT2** (dapagliflozine, empagliflozine) si DFG ≥ 20–25 mL/min\n- Tension < 130/80 mmHg, HbA1c ≈ 7 %, statine, arrêt du tabac, apport protéique modéré',
      ],
      [
        'Adaptation des traitements',
        'Éviter la toxicité.',
        '- **Metformine** : réduire si DFG < 45, arrêter si < 30\n- Préférer gliclazide ou insuline aux stades avancés ; éviter le glibenclamide (hypoglycémies)\n- Éviter AINS et produits de contraste',
      ],
      [
        'Stade avancé',
        'Préparer la suppléance.',
        '- Prise en charge de l’anémie, de l’acidose, des troubles phosphocalciques ; préparation à la dialyse si DFG < 15',
      ],
    ],
    molecules: [
      ['enalapril', 'premiere', 'IEC'],
      ['losartan', 'alternative', 'ARA2'],
      ['dapagliflozine', 'premiere', 'Inhibiteur de SGLT2'],
      ['empagliflozine', 'alternative', 'Inhibiteur de SGLT2'],
      ['atorvastatine', 'premiere', 'Statine'],
      ['gliclazide', 'adjuvant', 'Diabète (IR modérée)'],
      ['insuline-glargine', 'adjuvant', 'Diabète (IR avancée)'],
    ],
    complications: [
      {
        nom: 'Insuffisance rénale terminale',
        fiche: 'maladie-renale-chronique',
        description: 'Évolution.',
        traitement: '- Dialyse, transplantation',
        clinique: '- Syndrome urémique',
        paraclinique: '- DFG < 15',
      },
      {
        nom: 'Hyperkaliémie',
        description: 'IEC, ARA2, insuffisance rénale.',
        traitement: '- Adapter les traitements',
        clinique: '',
        paraclinique: '- Kaliémie',
      },
      {
        nom: 'Événements cardiovasculaires',
        fiche: 'syndrome-coronarien-aigu-sans-st',
        description: 'Risque très élevé.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Progression ralentie par le contrôle tensionnel, les IEC/ARA2 et les inhibiteurs de SGLT2 ; mortalité cardiovasculaire élevée',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Œdèmes', 'occasionnel'],
      ['Asthénie', 'frequent'],
      ['Polyurie-polydipsie', 'occasionnel'],
    ],
    sources: [
      'ADA — Standards of Care in Diabetes',
      'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Dépistage annuel (bandelette, créatinine), IEC, contrôle tensionnel',
        '- DFG < 45, protéinurie importante',
      ],
      hgr: ['- Bilan, adaptation des traitements', '- Préparation à la dialyse'],
      tert: ['- Néphrologie, dialyse', ''],
    },
    alertes: { 'hyperkaliemie-menacante': 'Diabétique sous IEC/ARA2 avec faiblesse ou kaliémie > 6 mmol/L' },
    formes: [
      {
        nom: 'Néphropathie débutante (microalbuminurie)',
        type: 'commune',
        description: 'Stade réversible.',
        terrain: '- Diabétique',
        fonctionnels: '- Aucun',
        generaux: '',
        physiques: '- HTA possible',
        paraclinique: '- Microalbuminurie, DFG normal',
        etiologies: '- Diabète',
        syndromes: [],
        examens: [['microalbuminurie', 'Positive']],
      },
      {
        nom: 'Néphropathie avancée',
        type: 'gravite',
        description: 'Protéinurie et insuffisance rénale.',
        terrain: '',
        fonctionnels: '- Fatigue',
        generaux: '',
        physiques: '- Œdèmes',
        paraclinique: '- DFG < 30, protéinurie',
        etiologies: '',
        syndromes: ['syndrome-uremique', 'syndrome-oedemateux'],
      },
    ],
  },

  // =================================================================== Hyperthyroïdie
  {
    ...ENDO,
    slug: 'hyperthyroidie-basedow',
    nom: 'Hyperthyroïdie et maladie de Basedow',
    resume:
      'Excès d’hormones thyroïdiennes (maladie de Basedow, goitre multinodulaire toxique, adénome toxique, thyroïdites) : amaigrissement, palpitations, tremblements, thermophobie, nervosité ; TSH basse, T4 libre élevée ; propranolol, carbimazole (surveillance NFS : agranulocytose) ; chirurgie ou iode radioactif selon le cas ; crise thyrotoxique = urgence.',
    definition:
      'Hyperfonctionnement de la glande thyroïde avec augmentation des hormones thyroïdiennes ; la maladie de Basedow est une forme auto-immune liée à des anticorps stimulant le récepteur de la TSH.',
    physiopathologie:
      '## Causes\n- **Maladie de Basedow** (auto-immune) : goitre diffus, exophtalmie\n- **Goitre multinodulaire toxique** (sujet âgé, zones de carence iodée), adénome toxique\n- Thyroïdites (post-partum, subaiguë), surcharge iodée (amiodarone), excès de lévothyroxine',
    diagnostic:
      '## Clinique\n- **Amaigrissement** malgré l’appétit, **palpitations**, tachycardie, **tremblements** fins, sueurs, **thermophobie**, nervosité, insomnie, diarrhée, faiblesse musculaire\n- **Goitre** ; Basedow : **exophtalmie**, rétraction palpébrale\n- Sujet âgé : fibrillation atriale, insuffisance cardiaque, amaigrissement isolé\n\n## Examens\n- **TSH effondrée**, **T4 libre élevée**\n- Échographie thyroïdienne, scintigraphie si disponible, anticorps anti-récepteur de la TSH\n- NFS et bilan hépatique avant antithyroïdiens, ECG',
    examens: [
      ['confirmation', 'tsh', 'Effondrée.'],
      ['confirmation', 't4-libre', 'Élevée.'],
      ['premiere_intention', 'echographie-thyroidienne', 'Goitre, nodules.'],
      ['premiere_intention', 'nfs', 'Avant antithyroïdiens.'],
      ['premiere_intention', 'bilan-hepatique', 'Avant antithyroïdiens.'],
      ['premiere_intention', 'ecg', 'Tachycardie, fibrillation atriale.'],
    ],
    scores: [],
    differentiels: [
      ['trouble-anxieux-generalise', 'Anxiété sans goitre, TSH normale.'],
      ['fibrillation-atriale', 'Rechercher une hyperthyroïdie sous-jacente.'],
      ['Phéochromocytome', 'HTA paroxystique, céphalées, sueurs.'],
      ['infection-vih', 'Amaigrissement, diarrhée.'],
      ['diabete-type-2', 'Amaigrissement, polyurie.'],
    ],
    etiologies:
      '## Terrain\n- Basedow : femme jeune ; goitre toxique : sujet âgé en zone de carence iodée ; post-partum',
    principes: [
      [
        'Traitement symptomatique',
        'Soulager.',
        '- **Propranolol** 40–160 mg/j (tachycardie, tremblements) ; repos',
      ],
      [
        'Antithyroïdiens',
        'Normaliser la fonction.',
        '- **Carbimazole** 20–40 mg/j puis dose dégressive (12 à 18 mois pour Basedow)\n- **Propylthiouracile** au 1er trimestre de la grossesse\n- NFS en cas de fièvre ou de mal de gorge (agranulocytose) ; TSH et T4L toutes les 4–6 semaines',
      ],
      [
        'Traitement radical',
        'Récidive ou nodules toxiques.',
        '- **Thyroïdectomie** (goitre volumineux, compressif, nodules, échec) après retour à l’euthyroïdie, puis lévothyroxine\n- Iode radioactif dans les centres équipés',
      ],
      [
        'Crise thyrotoxique',
        'Urgence.',
        '- Propylthiouracile, propranolol, **hydrocortisone**, solution iodée (1 h après l’antithyroïdien), refroidissement, réhydratation, traitement du facteur déclenchant',
      ],
    ],
    molecules: [
      ['carbimazole', 'premiere', 'Antithyroïdien'],
      ['propylthiouracile', 'alternative', 'Grossesse (1er trimestre), crise thyrotoxique'],
      ['propranolol', 'premiere', 'Symptômes adrénergiques'],
      ['hydrocortisone', 'adjuvant', 'Crise thyrotoxique'],
      ['iode', 'adjuvant', 'Crise thyrotoxique, préparation chirurgicale'],
      ['levothyroxine', 'adjuvant', 'Après thyroïdectomie'],
    ],
    complications: [
      {
        nom: 'Fibrillation atriale et insuffisance cardiaque',
        fiche: 'fibrillation-atriale',
        description: 'Cardiothyréose.',
        traitement: '- Bêtabloquant, anticoagulation, antithyroïdiens',
        clinique: '- Palpitations, dyspnée',
        paraclinique: '- ECG',
      },
      {
        nom: 'Crise thyrotoxique',
        description: 'Infection, chirurgie, arrêt du traitement.',
        traitement: '- Réanimation, PTU, propranolol, hydrocortisone',
        clinique: '- Fièvre, agitation, tachycardie',
        paraclinique: '',
      },
      {
        nom: 'Agranulocytose',
        description: 'Effet des antithyroïdiens.',
        traitement: '- Arrêt, antibiotiques',
        clinique: '- Fièvre, angine',
        paraclinique: '- NFS',
      },
      {
        nom: 'Orbitopathie basedowienne',
        description: 'Exophtalmie sévère.',
        traitement: '- Corticoïdes, arrêt du tabac',
        clinique: '- Douleur, baisse de vision',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Basedow : rémission chez la moitié après 12–18 mois d’antithyroïdiens ; traitement radical en cas de récidive',
    urgences: [],
    symptomes: [
      ['Perte de poids', 'tres_frequent'],
      ['Palpitations', 'tres_frequent'],
      ['Tremblements', 'frequent'],
      ['Sueurs', 'frequent'],
      ['Exophtalmie', 'occasionnel'],
      ['Anxiété', 'frequent'],
      ['Diarrhée', 'occasionnel'],
      ['Tuméfaction cervicale', 'frequent'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Suspecter, propranolol, orientation', '- Fièvre sous antithyroïdien, crise thyrotoxique'],
      hgr: ['- TSH, T4L, carbimazole, thyroïdectomie', ''],
      tert: ['- Endocrinologie, iode radioactif', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Maladie de Basedow',
        type: 'commune',
        description: 'Auto-immune.',
        terrain: '- Femme de 20 à 40 ans',
        fonctionnels: '- Palpitations, nervosité, amaigrissement',
        generaux: '- Thermophobie',
        physiques: '- Goitre diffus, exophtalmie',
        paraclinique: '- TSH effondrée, T4L élevée',
        etiologies: '- Auto-immunité',
        syndromes: [],
        examens: [['tsh', 'Effondrée']],
      },
      {
        nom: 'Goitre multinodulaire toxique',
        type: 'etiologique',
        description: 'Sujet âgé.',
        terrain: '- Sujet âgé, carence iodée',
        fonctionnels: '- Fibrillation atriale, amaigrissement',
        generaux: '',
        physiques: '- Goitre nodulaire',
        paraclinique: '- Nodules à l’échographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Crise thyrotoxique',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Facteur déclenchant',
        fonctionnels: '- Agitation, confusion',
        generaux: '- Fièvre, tachycardie',
        physiques: '- Insuffisance cardiaque',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
      },
    ],
  },

  // =================================================================== Hypothyroïdie
  {
    ...ENDO,
    slug: 'hypothyroidie-adulte',
    nom: 'Hypothyroïdie de l’adulte',
    resume:
      'Déficit en hormones thyroïdiennes (thyroïdite d’Hashimoto, carence iodée, après thyroïdectomie, médicaments) : fatigue, frilosité, prise de poids, constipation, peau sèche, lenteur, dépression ; TSH élevée, T4 libre basse ; lévothyroxine à vie, à doses progressives chez le sujet âgé ou coronarien ; coma myxœdémateux = urgence.',
    definition:
      'Insuffisance de production des hormones thyroïdiennes, le plus souvent d’origine thyroïdienne (primaire, TSH élevée), plus rarement hypophysaire.',
    physiopathologie:
      '## Causes\n- **Thyroïdite d’Hashimoto** (auto-immune)\n- **Carence iodée** (goitre endémique), consommation de manioc mal roui (thiocyanates)\n- Après **thyroïdectomie** ou iode radioactif, antithyroïdiens en excès\n- Médicaments : amiodarone, lithium\n- Post-partum ; origine hypophysaire (syndrome de Sheehan)',
    diagnostic:
      '## Clinique\n- **Asthénie**, **frilosité**, **prise de poids**, **constipation**, peau sèche, chute des cheveux, voix rauque\n- Lenteur, troubles de la mémoire, **dépression**, crampes, troubles des règles, infertilité\n- Bradycardie, œdème du visage (myxœdème), goitre possible\n\n## Examens\n- **TSH élevée**, **T4 libre basse** (hypothyroïdie fruste : TSH élevée, T4L normale)\n- Anticorps anti-TPO, échographie thyroïdienne, NFS (anémie), bilan lipidique, CPK',
    examens: [
      ['confirmation', 'tsh', 'Élevée.'],
      ['confirmation', 't4-libre', 'Basse.'],
      ['premiere_intention', 'echographie-thyroidienne', 'Goitre, thyroïdite.'],
      ['premiere_intention', 'bilan-lipidique', 'Hypercholestérolémie.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie.'],
      ['premiere_intention', 'ecg', 'Bradycardie.'],
    ],
    scores: [],
    differentiels: [
      ['depression', 'TSH normale.'],
      ['maladie-d-alzheimer', 'Troubles cognitifs du sujet âgé (doser la TSH).'],
      ['syndrome-nephrotique-adulte', 'Œdèmes, protéinurie.'],
      ['anemie-ferriprive', 'Fatigue, pâleur.'],
    ],
    etiologies:
      '## Terrain\n- Femme > 40 ans, post-partum, antécédents de thyroïdectomie, carence iodée, maladies auto-immunes',
    principes: [
      [
        'Lévothyroxine',
        'Substituer.',
        '- **Lévothyroxine** 1,6 µg/kg/j à jeun ; débuter à 25 µg/j chez le sujet âgé ou coronarien et augmenter de 25 µg toutes les 4–6 semaines\n- Contrôle de la TSH 6 à 8 semaines après chaque changement, puis annuel\n- Grossesse : augmenter la dose de 30 % dès la conception, TSH < 2,5 mUI/L',
      ],
      [
        'Hypothyroïdie fruste',
        'Traiter au cas par cas.',
        '- Traitement si TSH > 10 mUI/L, symptômes, grossesse ou désir de grossesse',
      ],
      [
        'Coma myxœdémateux',
        'Urgence.',
        '- Lévothyroxine IV ou par sonde, **hydrocortisone**, réchauffement progressif, ventilation, correction de l’hyponatrémie et de l’hypoglycémie, traitement du facteur déclenchant',
      ],
      ['Prévention', 'Carence iodée.', '- Sel iodé, lutte contre les troubles dus à la carence iodée'],
    ],
    molecules: [
      ['levothyroxine', 'premiere', 'Substitution'],
      ['hydrocortisone', 'adjuvant', 'Coma myxœdémateux'],
      ['iode', 'adjuvant', 'Prévention de la carence iodée'],
    ],
    complications: [
      {
        nom: 'Coma myxœdémateux',
        description: 'Sujet âgé, froid, infection.',
        traitement: '- Lévothyroxine IV, hydrocortisone, réanimation',
        clinique: '- Hypothermie, coma',
        paraclinique: '- Hyponatrémie',
      },
      {
        nom: 'Complications cardiovasculaires',
        description: 'Hypercholestérolémie, péricardite.',
        traitement: '- Substitution',
        clinique: '- Bradycardie',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Infertilité et complications de la grossesse',
        description: 'Fausses couches, retard de développement de l’enfant.',
        traitement: '- Substitution adaptée',
        clinique: '',
        paraclinique: '- TSH',
      },
    ],
    evolution: '## Pronostic\n- Excellent sous lévothyroxine bien dosée ; traitement à vie le plus souvent',
    urgences: [],
    symptomes: [
      ['Asthénie', 'tres_frequent'],
      ['Frilosité', 'frequent'],
      ['Prise de poids', 'frequent'],
      ['Humeur dépressive', 'frequent'],
      ['Œdème du visage', 'occasionnel'],
      ['Tuméfaction cervicale', 'occasionnel'],
      ['Troubles de la mémoire', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Suspecter, orientation, suivi du traitement', '- Troubles de conscience, hypothermie'],
      hgr: ['- TSH, lévothyroxine', ''],
      tert: ['- Endocrinologie, causes hypophysaires', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hypothyroïdie primaire',
        type: 'commune',
        description: 'Hashimoto, carence iodée.',
        terrain: '- Femme > 40 ans',
        fonctionnels: '- Fatigue, frilosité, constipation',
        generaux: '- Prise de poids',
        physiques: '- Peau sèche, bradycardie, goitre éventuel',
        paraclinique: '- TSH élevée, T4L basse',
        etiologies: '- Auto-immunité, carence iodée',
        syndromes: [],
        examens: [['tsh', 'Élevée']],
      },
      {
        nom: 'Coma myxœdémateux',
        type: 'gravite',
        description: 'Forme extrême.',
        terrain: '- Sujet âgé',
        fonctionnels: '',
        generaux: '- Hypothermie, coma',
        physiques: '- Bradycardie, œdèmes',
        paraclinique: '- Hyponatrémie, hypoglycémie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Insuffisance surrénalienne aiguë
  {
    ...ENDO,
    slug: 'insuffisance-surrenalienne-aigue',
    nom: 'Insuffisance surrénalienne aiguë',
    resume:
      'Urgence vitale : choc, déshydratation, douleurs abdominales, vomissements, hypoglycémie, hyponatrémie et hyperkaliémie, chez un patient sous corticoïdes au long cours arrêtés brutalement, ou avec une insuffisance surrénalienne (tuberculose, VIH) ; hydrocortisone 100 mg IV immédiate puis 50 mg toutes les 6 heures, sérum salé et glucosé, traitement du facteur déclenchant.',
    definition:
      'Défaillance aiguë de la sécrétion de cortisol (et d’aldostérone dans les formes primaires), entraînant un choc et des troubles métaboliques potentiellement mortels.',
    physiopathologie:
      '## Causes\n- **Arrêt brutal d’une corticothérapie** prolongée (insuffisance corticotrope) : cause la plus fréquente\n- Insuffisance surrénalienne primaire (maladie d’Addison) : **tuberculose surrénalienne**, **VIH** (CMV, mycobactéries), auto-immune, hémorragie surrénalienne (méningococcémie, anticoagulants)\n- Médicaments : rifampicine (accélère le catabolisme), kétoconazole\n- Facteurs déclenchants : infection, chirurgie, traumatisme, vomissements, accouchement',
    diagnostic:
      '## Clinique\n- **Hypotension**, choc résistant au remplissage\n- **Douleurs abdominales**, nausées, **vomissements**, diarrhée, fièvre, confusion\n- Asthénie extrême, amaigrissement, **mélanodermie** (Addison)\n\n## Examens\n- **Hyponatrémie**, **hyperkaliémie** (primaire), **hypoglycémie**, insuffisance rénale fonctionnelle\n- **Cortisolémie** sur un prélèvement fait avant l’hydrocortisone (sans retarder le traitement)\n- Recherche du facteur déclenchant : NFS, CRP, hémocultures, TDR paludisme, radiographie thoracique',
    examens: [
      ['confirmation', 'cortisolemie', 'Basse (prélever avant traitement).'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie, hyperkaliémie.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale fonctionnelle.'],
      ['etiologique', 'hemocultures', 'Infection déclenchante.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'radiographie-thoracique', 'Tuberculose.'],
      ['gravite', 'ecg', 'Hyperkaliémie.'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-et-choc-septique', 'Foyer infectieux (souvent associé).'],
      ['reanimation-du-choc', 'Autres mécanismes de choc.'],
      ['peritonite-aigue', 'Douleurs abdominales, défense.'],
      ['deshydratation-severe-enfant', 'Diarrhée et vomissements de l’enfant.'],
      ['hyponatremie', 'Autres causes d’hyponatrémie.'],
    ],
    etiologies:
      '## Terrain\n- Corticothérapie prolongée (asthme, rhumatismes, automédication par dexaméthasone), tuberculose, VIH avancé, méningococcémie',
    principes: [
      [
        'Traitement immédiat',
        'Urgence vitale.',
        '- **Hydrocortisone 100 mg IV** sans attendre les résultats, puis 50 mg toutes les 6 heures (ou 200 mg/24 h en continu)\n- **Sérum salé 0,9 %** 1 L en 1 heure puis selon l’état ; **glucose** si hypoglycémie\n- Traitement de l’hyperkaliémie si menaçante ; traitement du facteur déclenchant (antibiotiques)',
      ],
      [
        'Relais',
        'Substitution.',
        '- Diminution progressive de l’hydrocortisone puis dose d’entretien orale (15–25 mg/j en 2–3 prises) ; **fludrocortisone** dans l’insuffisance primaire\n- Traitement de la cause (antituberculeux : doubler l’hydrocortisone sous rifampicine)',
      ],
      [
        'Prévention',
        'Éviter les récidives.',
        '- Éducation : ne jamais arrêter brutalement les corticoïdes, **doubler ou tripler la dose** en cas de fièvre ou de stress, injection IM en cas de vomissements\n- Carte d’insuffisant surrénalien',
      ],
    ],
    molecules: [
      ['hydrocortisone', 'premiere', 'Traitement d’urgence et substitution'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Réhydratation'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['fludrocortisone', 'adjuvant', 'Insuffisance surrénalienne primaire'],
      ['dexamethasone', 'alternative', 'Si hydrocortisone indisponible (pas d’effet minéralocorticoïde)'],
    ],
    complications: [
      {
        nom: 'Choc et décès',
        fiche: 'reanimation-du-choc',
        description: 'Retard de traitement.',
        traitement: '- Hydrocortisone, remplissage',
        clinique: '- Hypotension réfractaire',
        paraclinique: '',
      },
      {
        nom: 'Hyperkaliémie menaçante',
        description: 'Insuffisance primaire.',
        traitement: '- Gluconate de calcium, insuline-glucose',
        clinique: '- Faiblesse, troubles du rythme',
        paraclinique: '- ECG',
      },
      {
        nom: 'Hypoglycémie',
        fiche: 'hypoglycemie-adulte',
        description: 'Déficit en cortisol.',
        traitement: '- Glucose',
        clinique: '- Confusion, convulsions',
        paraclinique: '- Glycémie',
      },
    ],
    evolution: '## Pronostic\n- Réversible en quelques heures sous hydrocortisone ; mortelle sans traitement',
    urgences: ['hyperkaliemie-menacante', 'choc-septique'],
    symptomes: [
      ['Hypotension', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Asthénie', 'tres_frequent'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Fièvre', 'frequent'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
    ],
    niveaux: {
      cs: [
        '- Hydrocortisone IM/IV, sérum salé, glucose, transfert',
        '- Choc chez un patient sous corticoïdes',
      ],
      hgr: ['- Réanimation, ionogramme, recherche de la cause', ''],
      tert: ['- Endocrinologie', ''],
    },
    alertes: {
      'hyperkaliemie-menacante': 'Kaliémie élevée avec hypotension et hyponatrémie',
      'choc-septique': 'Choc résistant au remplissage chez un patient sous corticoïdes',
    },
    formes: [
      {
        nom: 'Insuffisance surrénalienne aiguë après arrêt des corticoïdes',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Corticothérapie prolongée arrêtée',
        fonctionnels: '- Douleurs abdominales, vomissements',
        generaux: '- Hypotension, fièvre',
        physiques: '- Déshydratation',
        paraclinique: '- Hyponatrémie, hypoglycémie',
        etiologies: '- Arrêt brutal des corticoïdes',
        syndromes: ['syndrome-de-choc', 'syndrome-de-deshydratation-extracellulaire'],
      },
      {
        nom: 'Crise addisonienne',
        type: 'etiologique',
        description: 'Insuffisance primaire.',
        terrain: '- Tuberculose, VIH',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Mélanodermie',
        paraclinique: '- Hyponatrémie, hyperkaliémie',
        etiologies: '- Tuberculose surrénalienne',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Obésité
  {
    ...ENDO,
    slug: 'obesite-adulte',
    nom: 'Obésité de l’adulte',
    resume:
      'Excès de masse grasse (IMC ≥ 30 kg/m², tour de taille > 94 cm chez l’homme et > 80 cm chez la femme) en forte hausse en ville : dépister diabète, HTA, dyslipidémie, apnées du sommeil, arthrose ; changements durables de l’alimentation et de l’activité physique, objectif de perte de 5 à 10 % du poids ; traitement des complications ; chirurgie bariatrique pour les formes sévères dans les centres spécialisés.',
    definition:
      'Accumulation excessive de graisse corporelle nuisible à la santé, définie chez l’adulte par un indice de masse corporelle ≥ 30 kg/m² (surpoids : 25–29,9) ; l’obésité abdominale est appréciée par le tour de taille.',
    physiopathologie:
      '## Facteurs\n- Déséquilibre entre apports et dépenses énergétiques : alimentation riche en sucres, huiles et aliments transformés, sédentarité\n- Urbanisation, représentations culturelles favorables à l’embonpoint, facteurs génétiques\n- Médicaments (corticoïdes, antipsychotiques), hypothyroïdie, grossesses\n\n## Conséquences\n- Insulinorésistance, diabète de type 2, HTA, dyslipidémie, stéatose hépatique, apnées du sommeil, arthrose, cancers, infertilité',
    diagnostic:
      '## Évaluation\n- **Poids, taille, IMC**, **tour de taille**\n- Habitudes alimentaires, activité physique, sommeil (ronflements, somnolence), médicaments, retentissement psychologique\n- Tension artérielle\n\n## Examens\n- Glycémie à jeun ou HbA1c, bilan lipidique, transaminases, créatinine, TSH si signes d’hypothyroïdie, acide urique',
    examens: [
      ['premiere_intention', 'anthropometrie', 'IMC, tour de taille.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'hba1c', 'Diabète.'],
      ['premiere_intention', 'bilan-lipidique', 'Dyslipidémie.'],
      ['premiere_intention', 'bilan-hepatique', 'Stéatose.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['premiere_intention', 'uricemie', 'Hyperuricémie.'],
    ],
    scores: [],
    differentiels: [
      ['hypothyroidie-adulte', 'Frilosité, TSH élevée.'],
      ['Syndrome de Cushing', 'Vergetures pourpres, obésité facio-tronculaire, corticoïdes.'],
      ['Œdèmes (insuffisance cardiaque, rénale, hépatique)', 'Prise de poids hydrique.'],
    ],
    etiologies:
      '## Facteurs\n- Alimentation déséquilibrée, sédentarité, milieu urbain, facteurs génétiques, médicaments, arrêt du tabac, grossesses',
    principes: [
      [
        'Mode de vie',
        'Perdre 5 à 10 % du poids et le maintenir.',
        '- Alimentation : réduire sucres, boissons sucrées, fritures et huiles, alcool ; plus de légumes, légumineuses, fruits ; portions adaptées\n- **Activité physique** ≥ 150 minutes par semaine (marche rapide)\n- Soutien comportemental, objectifs réalistes, implication de la famille',
      ],
      [
        'Complications',
        'Réduire le risque cardiovasculaire.',
        '- Traiter le diabète (**metformine**), l’HTA, la dyslipidémie, l’apnée du sommeil, l’arthrose',
      ],
      [
        'Médicaments et chirurgie',
        'Formes sévères.',
        '- **Orlistat** en complément si IMC ≥ 30 (effets digestifs) ; analogues du GLP-1 si disponibles\n- **Chirurgie bariatrique** si IMC ≥ 40, ou ≥ 35 avec complications, dans les centres spécialisés',
      ],
    ],
    molecules: [
      ['orlistat', 'alternative', 'Complément des mesures hygiéno-diététiques'],
      ['metformine', 'premiere', 'Diabète, prédiabète'],
      ['atorvastatine', 'adjuvant', 'Dyslipidémie'],
    ],
    complications: [
      {
        nom: 'Diabète de type 2',
        fiche: 'diabete-type-2',
        description: 'Insulinorésistance.',
        traitement: '- Mode de vie, metformine',
        clinique: '',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Hypertension artérielle',
        fiche: 'hypertension-arterielle',
        description: 'Fréquente.',
        traitement: '- Antihypertenseurs',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Arthrose',
        fiche: 'arthrose',
        description: 'Genoux, hanches.',
        traitement: '- Perte de poids, antalgiques',
        clinique: '- Douleurs mécaniques',
        paraclinique: '',
      },
      {
        nom: 'Syndrome d’apnées du sommeil',
        description: 'Obésité sévère.',
        traitement: '- Perte de poids, ventilation',
        clinique: '- Ronflements, somnolence',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Maladie chronique avec reprise de poids fréquente ; réduction nette des complications avec une perte de poids modérée et durable',
    urgences: [],
    symptomes: [
      ['Prise de poids', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Arthralgies', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
      'OMS — lignes directrices et publications',
      'ADA — Standards of Care in Diabetes',
    ],
    niveaux: {
      cs: ['- IMC, tour de taille, conseils, dépistage des complications', '- Obésité sévère, complications'],
      hgr: ['- Bilan, traitement des complications, diététique', ''],
      tert: ['- Nutrition, chirurgie bariatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Obésité commune',
        type: 'commune',
        description: 'IMC 30–35.',
        terrain: '- Adulte urbain, sédentaire',
        fonctionnels: '- Essoufflement à l’effort',
        generaux: '- Prise de poids',
        physiques: '- IMC ≥ 30, tour de taille élevé',
        paraclinique: '- Dyslipidémie, glycémie limite',
        etiologies: '- Alimentation, sédentarité',
        syndromes: [],
      },
      {
        nom: 'Obésité sévère compliquée',
        type: 'gravite',
        description: 'IMC ≥ 40 ou ≥ 35 avec complications.',
        terrain: '',
        fonctionnels: '- Apnées, douleurs articulaires',
        generaux: '',
        physiques: '- HTA',
        paraclinique: '- Diabète, stéatose',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dyslipidémies
  {
    ...ENDO,
    slug: 'dyslipidemies',
    nom: 'Dyslipidémies',
    resume:
      'Anomalies des lipides sanguins (LDL-cholestérol élevé, triglycérides élevés, HDL bas), facteur majeur de risque cardiovasculaire : dosage chez les patients à risque (diabète, HTA, obésité, antécédents) ; estimation du risque global ; mode de vie et statine (atorvastatine, simvastatine) selon le risque ; fibrate si triglycérides très élevés (pancréatite) ; rechercher les causes secondaires.',
    definition:
      'Anomalies qualitatives ou quantitatives des lipoprotéines plasmatiques : hypercholestérolémie (LDL), hypertriglycéridémie, baisse du HDL-cholestérol, ou forme mixte.',
    physiopathologie:
      '## Causes\n- **Primaires** : génétiques (hypercholestérolémie familiale)\n- **Secondaires** : alimentation riche en graisses saturées et sucres, obésité, **diabète**, **hypothyroïdie**, syndrome néphrotique, alcool, **antirétroviraux** (inhibiteurs de protéase), corticoïdes\n\n## Conséquences\n- Athérosclérose (infarctus, AVC, artériopathie) ; pancréatite aiguë si triglycérides > 10 g/L',
    diagnostic:
      '## Dépistage\n- Bilan lipidique (cholestérol total, HDL, LDL, triglycérides) chez : diabétiques, hypertendus, obèses, patients VIH sous ARV, antécédents cardiovasculaires personnels ou familiaux, après 40 ans\n\n## Évaluation\n- Risque cardiovasculaire global (outils OMS/HEARTS)\n- Signes : xanthomes, arc cornéen précoce (formes familiales)\n- Causes secondaires : TSH, glycémie, créatinine, protéinurie, bilan hépatique',
    examens: [
      ['confirmation', 'bilan-lipidique', 'LDL, HDL, triglycérides.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'proteinurie', 'Syndrome néphrotique.'],
      ['premiere_intention', 'bilan-hepatique', 'Avant statine.'],
      ['etiologique', 'creatinine', 'Fonction rénale.'],
    ],
    scores: [],
    differentiels: [
      ['hypothyroidie-adulte', 'Cause secondaire d’hypercholestérolémie.'],
      ['syndrome-nephrotique-adulte', 'Protéinurie, œdèmes.'],
      ['diabete-type-2', 'Hypertriglycéridémie.'],
    ],
    etiologies: '## Facteurs\n- Alimentation, obésité, sédentarité, diabète, alcool, ARV, génétique',
    principes: [
      [
        'Mode de vie',
        'Pour tous.',
        '- Réduire graisses saturées (huile de palme raffinée, viandes grasses, fritures), sucres et alcool ; plus de fibres, légumes, légumineuses, poissons\n- Activité physique, perte de poids, arrêt du tabac',
      ],
      [
        'Statines',
        'Selon le risque cardiovasculaire.',
        '- **Atorvastatine** 10–80 mg/j ou **simvastatine** 20–40 mg/j : prévention secondaire, diabète > 40 ans, risque élevé, LDL ≥ 1,9 g/L\n- Cibles de LDL selon le risque (< 0,55–1 g/L) ; **ézétimibe** en association si besoin\n- Surveillance des transaminases et des douleurs musculaires ; interactions avec certains ARV',
      ],
      [
        'Hypertriglycéridémie sévère',
        'Prévenir la pancréatite.',
        '- Arrêt de l’alcool et des sucres, contrôle du diabète ; fibrate si triglycérides > 5–10 g/L',
      ],
    ],
    molecules: [
      ['atorvastatine', 'premiere', 'Statine'],
      ['simvastatine', 'alternative', 'Statine'],
      ['rosuvastatine', 'alternative', 'Statine'],
      ['ezetimibe', 'deuxieme', 'En association'],
    ],
    complications: [
      {
        nom: 'Maladie coronaire',
        fiche: 'angor-stable',
        description: 'Athérosclérose.',
        traitement: '- Statine, prévention',
        clinique: '- Angor',
        paraclinique: '- ECG',
      },
      {
        nom: 'AVC ischémique',
        fiche: 'avc-ischemique',
        description: 'Athérosclérose.',
        traitement: '- Prévention secondaire',
        clinique: '- Déficit',
        paraclinique: '',
      },
      {
        nom: 'Pancréatite aiguë',
        description: 'Triglycérides très élevés.',
        traitement: '- Prise en charge de la pancréatite, fibrate',
        clinique: '- Douleur épigastrique',
        paraclinique: '- Lipase',
      },
    ],
    evolution:
      '## Pronostic\n- La baisse du LDL-cholestérol réduit nettement les événements cardiovasculaires',
    urgences: [],
    symptomes: [['Nodules sous-cutanés', 'occasionnel']],
    sources: [
      'ESC — recommandations de pratique clinique',
      'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
      'ADA — Standards of Care in Diabetes',
    ],
    niveaux: {
      cs: [
        '- Repérage des patients à risque, conseils, statine selon le protocole PEN',
        '- Formes familiales, triglycérides très élevés',
      ],
      hgr: ['- Bilan lipidique, statines', ''],
      tert: ['- Endocrinologie, cardiologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hypercholestérolémie',
        type: 'commune',
        description: 'LDL élevé.',
        terrain: '- Adulte à risque cardiovasculaire',
        fonctionnels: '- Aucun',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- LDL élevé',
        etiologies: '- Alimentation, génétique',
        syndromes: [],
        examens: [['bilan-lipidique', 'LDL élevé']],
      },
      {
        nom: 'Hypertriglycéridémie',
        type: 'etiologique',
        description: 'Triglycérides élevés.',
        terrain: '- Diabète, obésité, alcool, ARV',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Triglycérides élevés, HDL bas',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Hypercholestérolémie familiale',
        type: 'gravite',
        description: 'Forme génétique.',
        terrain: '- Antécédents familiaux d’infarctus précoce',
        fonctionnels: '',
        generaux: '',
        physiques: '- Xanthomes tendineux, arc cornéen',
        paraclinique: '- LDL très élevé',
        etiologies: '- Génétique',
        syndromes: [],
      },
    ],
  },
];
