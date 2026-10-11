'use strict';

/**
 * Lot 7 (néphrologie) — maladie rénale chronique, syndrome néphrotique de l'adulte,
 * néphropathie associée au VIH, infections urinaires de l'adulte.
 * Rédigé par IA (KDIGO, OMS, IDSA, EAU) : à valider.
 */

const NEPHRO = { departement: 'medecine-interne', specialite: 'Néphrologie' };

module.exports = [
  // =================================================================== MRC
  {
    ...NEPHRO,
    slug: 'maladie-renale-chronique',
    nom: 'Maladie rénale chronique',
    resume:
      'Atteinte rénale de plus de 3 mois (DFG < 60 ou albuminurie), surtout due à l’HTA, au diabète et aux glomérulopathies : néphroprotection (PA, IEC, glycémie), prise en charge des complications, préparation à la dialyse.',
    definition:
      'Anomalie de la structure ou de la fonction rénale persistant plus de 3 mois : débit de filtration glomérulaire (DFG) < 60 mL/min/1,73 m² et/ou marqueur d’atteinte rénale (albuminurie ≥ 30 mg/g, hématurie, anomalie morphologique). Stades G1 à G5 (G5 : DFG < 15, insuffisance rénale terminale).',
    physiopathologie:
      '## Mécanismes\n- Réduction néphronique : hyperfiltration des néphrons restants, protéinurie, fibrose, progression\n- Complications : rétention hydrosodée et HTA, anémie (déficit en érythropoïétine), acidose, hyperkaliémie, troubles phosphocalciques, syndrome urémique',
    diagnostic:
      '## Démarche\n- Créatinine et **estimation du DFG** (CKD-EPI) à 2 reprises à 3 mois d’intervalle\n- **Albuminurie** (rapport albumine/créatinine urinaire) ou protéinurie, bandelette (hématurie)\n- **Échographie rénale** : reins petits (chronicité), obstacle, polykystose\n- Arguments de chronicité : reins < 10 cm, anémie normocytaire, hypocalcémie\n\n## Signes cliniques tardifs\n- Asthénie, HTA, œdèmes, pâleur, prurit, nausées, crampes\n- Stade urémique : vomissements, confusion, péricardite, saignements, dyspnée (surcharge)',
    examens: [
      ['confirmation', 'creatinine', 'DFG estimé (CKD-EPI) ; deux mesures à 3 mois.'],
      ['confirmation', 'microalbuminurie', 'Rapport albumine/créatinine urinaire : stade A1 à A3.'],
      ['premiere_intention', 'proteinurie', 'Protéinurie des 24 h ou rapport protéine/créatinine.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie, protéinurie, leucocyturie.'],
      ['premiere_intention', 'echographie-renale', 'Taille des reins, obstacle, kystes.'],
      ['premiere_intention', 'ionogramme', 'Kaliémie, bicarbonates.'],
      ['premiere_intention', 'nfs', 'Anémie normocytaire.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Calcémie, phosphorémie.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['etiologique', 'hba1c', 'Diabète.'],
      ['etiologique', 'tdr-vih', 'Néphropathie associée au VIH.'],
      ['etiologique', 'marqueurs-vhb', 'Glomérulopathie à hépatite B ; vaccination avant dialyse.'],
      ['etiologique', 'serologies-hepatites', 'Hépatite C.'],
      ['suivi', 'bilan-lipidique', 'Risque cardiovasculaire.'],
      ['suivi', 'ferritine', 'Avant l’époétine.'],
    ],
    scores: ['ckd-epi', 'clairance-creatinine'],
    differentiels: [
      [
        'insuffisance-renale-aigue',
        'Créatinine récemment normale, reins de taille normale, cause aiguë : réversible.',
      ],
      ['Insuffisance rénale aiguë sur chronique', 'Aggravation brutale chez un patient connu.'],
      ['Obstacle (prostate, lithiase, cancer du col)', 'Dilatation à l’échographie.'],
    ],
    etiologies:
      '## Causes\n- **HTA** (néphroangiosclérose)\n- **Diabète**\n- **Glomérulopathies** : primitives, VIH, hépatite B, schistosomiase, paludisme à P. malariae\n- Néphropathie drépanocytaire, polykystose, uropathies obstructives\n- Néphrotoxiques : AINS, plantes médicinales, produits de dépigmentation (mercure)',
    principes: [
      [
        'Néphroprotection',
        'Ralentir la progression.',
        '- PA < 130/80 mmHg\n- **IEC** (**énalapril**) ou ARA2 (**losartan**) si albuminurie ; surveiller créatinine et kaliémie\n- Inhibiteur de SGLT2 si disponible (dapagliflozine)\n- Équilibre glycémique, arrêt du tabac\n- **Éviter les néphrotoxiques** : AINS, aminosides, produits de contraste, plantes\n- Adapter les doses des médicaments au DFG',
      ],
      [
        'Complications',
        'Prévenir les effets de l’insuffisance rénale.',
        '- Rétention et HTA : **furosémide**, restriction sodée\n- Anémie : fer, puis **époétine** si Hb < 10 g/dL\n- Acidose : **bicarbonate de sodium** si bicarbonates < 22 mmol/L\n- Hyperkaliémie : régime, arrêt des médicaments en cause\n- Phosphore et calcium : **carbonate de calcium** au repas, **calcitriol**\n- Statine (**atorvastatine**) chez l’adulte de plus de 50 ans',
      ],
      [
        'Préparation à la suppléance',
        'Anticiper la dialyse.',
        '- Information au stade 4 (DFG < 30)\n- Vaccination contre l’hépatite B, préservation des veines d’un bras, fistule artério-veineuse\n- Dialyse si syndrome urémique, surcharge résistante, hyperkaliémie ou acidose réfractaires (souvent DFG < 10)\n- Soins conservateurs si la dialyse n’est pas accessible ou pas souhaitée',
      ],
    ],
    molecules: [
      ['enalapril', 'premiere', 'Néphroprotection (albuminurie)'],
      ['losartan', 'alternative', 'Toux sous IEC'],
      ['amlodipine', 'premiere', 'Contrôle de la PA'],
      ['furosemide', 'premiere', 'Rétention hydrosodée'],
      ['epoetine-alfa', 'deuxieme', 'Anémie après correction du fer'],
      ['bicarbonate-de-sodium', 'adjuvant', 'Acidose métabolique'],
      ['carbonate-de-calcium', 'adjuvant', 'Chélateur du phosphore'],
      ['calcitriol', 'adjuvant', 'Hyperparathyroïdie secondaire'],
      ['atorvastatine', 'adjuvant', 'Prévention cardiovasculaire'],
      ['vaccin-hepatite-b', 'adjuvant', 'Avant la dialyse'],
    ],
    complications: [
      {
        nom: 'Hyperkaliémie',
        fiche: 'dyskaliemies',
        description: 'IEC, régime, acidose.',
        traitement: '- Calcium, insuline-glucose, épuration',
        clinique: '- Faiblesse',
        paraclinique: '- ECG, kaliémie',
      },
      {
        nom: 'Surcharge et OAP',
        fiche: 'insuffisance-cardiaque',
        description: 'Rétention hydrosodée.',
        traitement: '- Furosémide forte dose, dialyse',
        clinique: '- Dyspnée, œdèmes',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Anémie',
        fiche: 'anemie-ferriprive',
        description: 'Déficit en érythropoïétine, carence en fer.',
        traitement: '- Fer, époétine',
        clinique: '- Pâleur',
        paraclinique: '- Hb, ferritine',
      },
      {
        nom: 'Péricardite urémique',
        fiche: 'pericardite-aigue-et-tamponnade',
        description: 'Stade terminal.',
        traitement: '- Dialyse',
        clinique: '- Douleur thoracique, frottement',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Maladie cardiovasculaire',
        description: 'Première cause de décès.',
        traitement: '- Contrôle des facteurs de risque',
        clinique: '',
        paraclinique: '- ECG',
      },
    ],
    evolution:
      '## Pronostic\n- Progression variable ; l’accès à la dialyse reste limité en RDC : la prévention et la néphroprotection sont essentielles',
    urgences: ['hyperkaliemie-menacante', 'oedeme-aigu-du-poumon'],
    symptomes: [
      ['Asthénie', 'tres_frequent'],
      ['Œdèmes', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Prurit', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
      ['Troubles de la conscience', 'rare'],
    ],
    sources: [
      'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease',
      'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Dépistage chez les hypertendus et diabétiques (bandelette, créatinine), contrôle de la PA, éviction des AINS',
        '- DFG < 30, aggravation rapide, protéinurie importante',
      ],
      hgr: ['- Bilan, IEC, prise en charge des complications, époétine', '- Indication de dialyse'],
      tert: ['- Néphrologie, hémodialyse, dialyse péritonéale', ''],
    },
    alertes: {
      'hyperkaliemie-menacante': 'Insuffisant rénal avec faiblesse, bradycardie ou kaliémie ≥ 6,5',
      'oedeme-aigu-du-poumon': 'Insuffisant rénal avec dyspnée de repos et crépitants',
    },
    formes: [
      {
        nom: 'Maladie rénale chronique asymptomatique',
        type: 'commune',
        description: 'Découverte au dépistage.',
        terrain: '- Hypertendu, diabétique, PVVIH',
        fonctionnels: '',
        generaux: '',
        physiques: '- HTA',
        paraclinique: '- DFG < 60, albuminurie',
        etiologies: '- HTA, diabète',
        syndromes: [],
        examens: [['microalbuminurie', 'Dépistage']],
      },
      {
        nom: 'Insuffisance rénale terminale',
        type: 'gravite',
        description: 'Syndrome urémique.',
        terrain: '- DFG < 15',
        fonctionnels: '- Nausées, vomissements, prurit, dyspnée',
        generaux: '- Amaigrissement, asthénie',
        physiques: '- Œdèmes, frottement péricardique, astérixis',
        paraclinique: '- Urée très élevée, hyperkaliémie, acidose, anémie',
        etiologies: '',
        syndromes: ['syndrome-uremique', 'syndrome-anemique', 'syndrome-de-retention-hydrosodee'],
      },
    ],
  },

  // =================================================================== Syndrome néphrotique
  {
    ...NEPHRO,
    slug: 'syndrome-nephrotique-adulte',
    nom: 'Syndrome néphrotique de l’adulte',
    resume:
      'Protéinurie > 3 g/24 h avec hypoalbuminémie et œdèmes : rechercher la cause (VIH, hépatite B, diabète, paludisme, glomérulopathie primitive) ; diurétiques, IEC, anticoagulation selon l’albumine, corticoïdes si lésion sensible.',
    definition:
      'Association d’une protéinurie > 3 g/24 h (ou rapport protéine/créatinine > 3 g/g) et d’une albuminémie < 30 g/L, avec habituellement des œdèmes et une hyperlipidémie.',
    physiopathologie:
      '## Mécanismes\n- Lésion de la barrière de filtration glomérulaire (podocytes)\n- Fuite d’albumine : baisse de la pression oncotique, rétention de sodium : œdèmes\n- Fuite des inhibiteurs de la coagulation (antithrombine) : thromboses\n- Fuite des immunoglobulines : infections\n- Synthèse hépatique accrue de lipoprotéines : hyperlipidémie',
    diagnostic:
      '## Clinique\n- **Œdèmes** blancs, mous, déclives, prenant le godet ; anasarque (ascite, épanchements)\n- Urines mousseuses, prise de poids\n- HTA et hématurie si syndrome néphrotique « impur »\n\n## Biologie\n- Protéinurie > 3 g/24 h, albuminémie < 30 g/L\n- Pur : sans HTA, hématurie ni insuffisance rénale ; impur : l’un d’eux\n- **Biopsie rénale** chez l’adulte (sauf diabète évident) pour le type histologique',
    examens: [
      ['confirmation', 'proteinurie', '> 3 g/24 h ou rapport protéine/créatinine > 3 g/g.'],
      ['confirmation', 'bilan-hepatique', 'Albuminémie < 30 g/L.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie massive, hématurie.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'bilan-lipidique', 'Hypercholestérolémie.'],
      ['premiere_intention', 'ionogramme', 'Natrémie, kaliémie.'],
      ['etiologique', 'tdr-vih', 'Néphropathie associée au VIH.'],
      ['etiologique', 'marqueurs-vhb', 'Glomérulonéphrite extramembraneuse à hépatite B.'],
      ['etiologique', 'serologies-hepatites', 'Hépatite C.'],
      ['etiologique', 'glycemie', 'Néphropathie diabétique.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis.'],
      ['etiologique', 'goutte-epaisse', 'Paludisme (P. malariae).'],
      ['etiologique', 'oeufs-schistosomes-urines', 'Schistosomiase.'],
      ['confirmation', 'biopsie-histologie', 'Biopsie rénale : type de glomérulopathie.'],
      [
        'premiere_intention',
        'echographie-renale',
        'Taille des reins, avant biopsie ; thrombose de la veine rénale.',
      ],
    ],
    scores: [],
    differentiels: [
      ['insuffisance-cardiaque', 'Turgescence jugulaire, pas de protéinurie massive.'],
      ['cirrhose-hepatique', 'Ascite, signes d’hypertension portale, protéinurie absente.'],
      ['Malnutrition et entéropathie exsudative', 'Hypoalbuminémie sans protéinurie.'],
      ['Glomérulonéphrite aiguë', 'Syndrome néphritique : hématurie, HTA, oligurie, protéinurie modérée.'],
    ],
    etiologies:
      '## Secondaires (fréquentes en RDC)\n- **VIH** (HIVAN), **hépatite B**, hépatite C, syphilis, paludisme à P. malariae, schistosomiase\n- **Diabète**, amylose, lupus\n- Médicaments (AINS), cancers, produits de dépigmentation au mercure\n\n## Primitives\n- Hyalinose segmentaire et focale (fréquente chez l’Africain, APOL1), lésions glomérulaires minimes, glomérulonéphrite extramembraneuse',
    principes: [
      [
        'Traitement symptomatique',
        'Réduire les œdèmes et la protéinurie.',
        '- Régime pauvre en sel, apports protéiques normaux\n- **Furosémide** (doses élevées), associé à la **spironolactone** si besoin\n- **IEC** (**énalapril**) ou ARA2 : réduction de la protéinurie\n- Statine si hyperlipidémie persistante',
      ],
      [
        'Prévention des complications',
        'Éviter thromboses et infections.',
        '- **Anticoagulation préventive** (énoxaparine) si albuminémie < 20–25 g/L, surtout en cas d’alitement\n- Traitement rapide des infections, vaccination antipneumococcique',
      ],
      [
        'Traitement de la cause',
        'Obtenir la rémission.',
        '- Glomérulopathie primitive corticosensible : **prednisolone** 1 mg/kg/j (maximum 80 mg) 8 à 16 semaines puis décroissance\n- VIH : antirétroviraux ; hépatite B : **ténofovir** (adapté au DFG)\n- Paludisme, schistosomiase, syphilis : traitement spécifique\n- Arrêt des produits en cause',
      ],
    ],
    molecules: [
      ['furosemide', 'premiere', 'Œdèmes'],
      ['spironolactone', 'adjuvant', 'Œdèmes résistants'],
      ['enalapril', 'premiere', 'Réduction de la protéinurie'],
      ['losartan', 'alternative', 'Réduction de la protéinurie'],
      ['prednisolone', 'premiere', 'Glomérulopathie primitive corticosensible'],
      ['enoxaparine', 'adjuvant', 'Albuminémie < 20–25 g/L'],
      ['atorvastatine', 'adjuvant', 'Hyperlipidémie'],
    ],
    complications: [
      {
        nom: 'Thromboses veineuses et artérielles',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Thrombose de la veine rénale, embolie pulmonaire.',
        traitement: '- Anticoagulation curative',
        clinique: '- Douleur lombaire, hématurie, dyspnée',
        paraclinique: '- Écho-Doppler',
      },
      {
        nom: 'Infections',
        description: 'Péritonite à pneumocoque, cellulite.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, douleur abdominale',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hypovolémie sous diurétiques, thrombose.',
        traitement: '- Adapter les diurétiques',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Évolution vers la maladie rénale chronique',
        fiche: 'maladie-renale-chronique',
        description: 'Formes corticorésistantes.',
        traitement: '- Néphroprotection',
        clinique: '',
        paraclinique: '- DFG',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend du type histologique et de la cause ; la hyalinose segmentaire et focale évolue souvent vers l’insuffisance rénale',
    urgences: [],
    symptomes: [
      ['Œdèmes', 'tres_frequent'],
      ['Distension abdominale', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
      ['Hématurie', 'occasionnel'],
    ],
    sources: [
      'KDIGO — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Bandelette devant des œdèmes, test VIH, furosémide, transfert',
        '- Tout syndrome néphrotique de l’adulte',
      ],
      hgr: [
        '- Bilan étiologique, diurétiques, IEC, anticoagulation, corticoïdes',
        '- Biopsie rénale, corticorésistance',
      ],
      tert: ['- Biopsie rénale, immunosuppresseurs, dialyse', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Syndrome néphrotique pur',
        type: 'commune',
        description: 'Œdèmes sans HTA ni hématurie.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Prise de poids, urines mousseuses',
        generaux: '',
        physiques: '- Œdèmes blancs, mous, déclives',
        paraclinique: '- Protéinurie > 3 g/24 h, albumine < 30 g/L',
        etiologies: '- Lésions glomérulaires minimes',
        syndromes: ['syndrome-oedemateux'],
        examens: [['proteinurie', 'Diagnostic']],
      },
      {
        nom: 'Syndrome néphrotique impur',
        type: 'gravite',
        description: 'HTA, hématurie ou insuffisance rénale associées.',
        terrain: '- VIH, hépatite B, diabète',
        fonctionnels: '- Œdèmes',
        generaux: '',
        physiques: '- HTA, anasarque',
        paraclinique: '- Hématurie, créatinine élevée',
        etiologies: '- Glomérulopathie secondaire',
        syndromes: ['syndrome-oedemateux', 'syndrome-uremique'],
      },
    ],
  },

  // =================================================================== HIVAN
  {
    ...NEPHRO,
    slug: 'nephropathie-associee-au-vih',
    nom: 'Néphropathie associée au VIH',
    resume:
      'Atteinte rénale du sujet noir infecté par le VIH, souvent à un stade avancé : protéinurie, insuffisance rénale rapidement progressive, gros reins échogènes ; ARV sans délai, IEC, adaptation des doses (ténofovir).',
    definition:
      'Néphropathie liée à l’infection directe des cellules rénales par le VIH (HIVAN : hyalinose segmentaire et focale collapsante), à distinguer des autres atteintes rénales de la PVVIH (néphrotoxicité médicamenteuse, glomérulopathies à complexes immuns, comorbidités).',
    physiopathologie:
      '## Mécanismes\n- Infection des podocytes et cellules tubulaires par le VIH\n- Prédisposition génétique (variants APOL1, fréquents chez les populations d’Afrique de l’Ouest et du Centre)\n- Glomérulopathie collapsante, dilatations tubulaires microkystiques\n- Autres causes chez la PVVIH : ténofovir (tubulopathie), cotrimoxazole (fausse hausse de la créatinine), infections, hépatite B',
    diagnostic:
      '## Clinique\n- PVVIH, souvent CD4 bas ou charge virale élevée\n- Protéinurie importante (souvent néphrotique) avec **peu d’œdèmes** et sans HTA marquée\n- Insuffisance rénale d’aggravation rapide\n\n## Paraclinique\n- Protéinurie à la bandelette, créatinine élevée\n- **Échographie : reins de taille normale ou augmentée, hyperéchogènes**\n- Biopsie rénale si disponible',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie : dépistage annuel de toute PVVIH.'],
      ['premiere_intention', 'creatinine', 'DFG avant et sous ténofovir.'],
      ['confirmation', 'proteinurie', 'Souvent > 3 g/24 h.'],
      ['premiere_intention', 'echographie-renale', 'Gros reins hyperéchogènes.'],
      ['premiere_intention', 'cd4', 'Stade immunitaire.'],
      ['premiere_intention', 'charge-virale-vih', 'Réplication virale.'],
      ['premiere_intention', 'ionogramme', 'Kaliémie, phosphorémie (tubulopathie au ténofovir).'],
      ['etiologique', 'marqueurs-vhb', 'Coïnfection hépatite B.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Biopsie rénale : HIVAN collapsante.'],
    ],
    scores: ['ckd-epi'],
    differentiels: [
      [
        'Néphrotoxicité du ténofovir',
        'Tubulopathie (glycosurie normoglycémique, hypophosphatémie), protéinurie modérée.',
      ],
      ['syndrome-nephrotique-adulte', 'Glomérulopathies à hépatite B ou complexes immuns.'],
      ['insuffisance-renale-aigue', 'Sepsis, déshydratation, médicaments (cotrimoxazole, AINS).'],
      ['Néphropathie diabétique ou hypertensive', 'Terrain, rétinopathie, petits reins.'],
    ],
    etiologies:
      '## Facteurs\n- Infection VIH non contrôlée\n- Génotype APOL1 à risque\n- Diagnostic tardif du VIH, absence de traitement antirétroviral',
    principes: [
      [
        'Antirétroviraux sans délai',
        'Stopper l’atteinte rénale.',
        '- Démarrer ou optimiser le TARV, quel que soit le taux de CD4\n- **Adapter au DFG** : ténofovir disoproxil déconseillé si DFG < 50 mL/min (remplacer par abacavir ou zidovudine selon les directives) ; adapter la **lamivudine**\n- **Dolutégravir** : légère hausse de la créatinine sans atteinte réelle',
      ],
      [
        'Néphroprotection',
        'Ralentir la progression.',
        '- **IEC** (**énalapril**) ou ARA2, contrôle de la PA\n- Éviter AINS et néphrotoxiques\n- Prise en charge de la maladie rénale chronique',
      ],
      [
        'Suivi',
        'Dépister tôt.',
        '- Bandelette et créatinine à l’initiation du TARV puis au moins annuellement (plus souvent sous ténofovir)\n- Dialyse si insuffisance terminale (pronostic amélioré sous ARV)',
      ],
    ],
    molecules: [
      ['dolutegravir', 'premiere', 'TARV'],
      ['lamivudine', 'premiere', 'TARV (dose adaptée au DFG)'],
      ['tenofovir-disoproxil', 'alternative', 'À éviter si DFG < 50 mL/min'],
      ['enalapril', 'premiere', 'Réduction de la protéinurie'],
      ['losartan', 'alternative', 'Réduction de la protéinurie'],
      ['furosemide', 'adjuvant', 'Œdèmes'],
    ],
    complications: [
      {
        nom: 'Insuffisance rénale terminale',
        fiche: 'maladie-renale-chronique',
        description: 'Évolution rapide sans ARV.',
        traitement: '- ARV, dialyse',
        clinique: '- Syndrome urémique',
        paraclinique: '- DFG',
      },
      {
        nom: 'Infections opportunistes',
        fiche: 'infection-vih',
        description: 'Immunodépression avancée.',
        traitement: '- Prophylaxies, ARV',
        clinique: '',
        paraclinique: '- CD4',
      },
      {
        nom: 'Hyperkaliémie',
        fiche: 'dyskaliemies',
        description: 'Insuffisance rénale, IEC, cotrimoxazole.',
        traitement: '- Selon la kaliémie',
        clinique: '',
        paraclinique: '- Ionogramme',
      },
    ],
    evolution:
      '## Pronostic\n- Sans ARV : insuffisance rénale terminale en quelques mois ; sous ARV : stabilisation fréquente',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Asthénie', 'frequent'],
      ['Œdèmes', 'occasionnel'],
      ['Perte de poids', 'frequent'],
      ['Oligurie', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      'KDIGO — recommandations de pratique clinique',
      "Guide national de prise en charge de l'infection à VIH",
    ],
    niveaux: {
      cs: [
        '- Bandelette urinaire chez les PVVIH, créatinine sous ténofovir, observance',
        '- Protéinurie, créatinine élevée',
      ],
      hgr: ['- Échographie, adaptation du TARV au DFG, IEC', '- Insuffisance rénale avancée'],
      tert: ['- Biopsie rénale, dialyse', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'HIVAN typique',
        type: 'commune',
        description: 'Protéinurie massive et insuffisance rénale rapide.',
        terrain: '- PVVIH non traitée, CD4 bas',
        fonctionnels: '- Asthénie',
        generaux: '- Amaigrissement',
        physiques: '- Peu d’œdèmes, PA normale',
        paraclinique: '- Protéinurie néphrotique, gros reins échogènes',
        etiologies: '- VIH, APOL1',
        syndromes: ['syndrome-uremique'],
        examens: [['echographie-renale', 'Gros reins']],
      },
      {
        nom: 'Tubulopathie au ténofovir',
        type: 'etiologique',
        description: 'Atteinte tubulaire proximale médicamenteuse.',
        terrain: '- PVVIH sous ténofovir disoproxil',
        fonctionnels: '- Douleurs osseuses, faiblesse',
        generaux: '',
        physiques: '',
        paraclinique: '- Glycosurie normoglycémique, hypophosphatémie, créatinine en hausse',
        etiologies: '- Ténofovir',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Infections urinaires
  {
    ...NEPHRO,
    slug: 'infections-urinaires-adulte',
    nom: 'Infections urinaires de l’adulte (cystite, pyélonéphrite)',
    resume:
      'Cystite (brûlures, pollakiurie sans fièvre) et pyélonéphrite (fièvre, douleur lombaire) : bandelette, ECBU si pyélonéphrite ou terrain à risque ; fosfomycine ou nitrofurantoïne pour la cystite, ceftriaxone ou ciprofloxacine pour la pyélonéphrite.',
    definition:
      'Infection bactérienne de l’arbre urinaire : cystite (vessie), pyélonéphrite aiguë (rein), prostatite chez l’homme ; simple ou à risque de complication (anomalie urologique, grossesse, homme, immunodépression, insuffisance rénale sévère, sujet âgé fragile).',
    physiopathologie:
      '## Mécanismes\n- Voie ascendante à partir de la flore digestive (*E. coli* 70 à 80 %)\n- Facteurs : urètre court chez la femme, rapports sexuels, stase urinaire (obstacle, grossesse), sonde, diabète\n- Pyélonéphrite : risque de sepsis, d’abcès, de nécrose papillaire',
    diagnostic:
      '## Cystite\n- Brûlures mictionnelles, pollakiurie, urgenturies, hématurie, **sans fièvre**\n\n## Pyélonéphrite aiguë\n- **Fièvre**, frissons, **douleur lombaire** unilatérale, signes de cystite souvent associés\n- Signes de gravité : sepsis, choc, obstacle\n\n## Prostatite (homme)\n- Fièvre, troubles mictionnels, prostate douloureuse au toucher rectal\n\n## Biologie\n- **Bandelette** : leucocytes et nitrites (négative = forte valeur pour exclure chez la femme non enceinte)\n- **ECBU** : leucocyturie ≥ 10⁴/mL, bactériurie ≥ 10³ UFC/mL (E. coli, cystite) ou ≥ 10⁴, antibiogramme',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Leucocytes et nitrites.'],
      ['confirmation', 'ecbu', 'Pyélonéphrite, homme, grossesse, échec, récidive : germe et antibiogramme.'],
      ['gravite', 'hemocultures', 'Pyélonéphrite fébrile grave.'],
      ['premiere_intention', 'creatinine', 'Pyélonéphrite, terrain à risque.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Pyélonéphrite.'],
      [
        'gravite',
        'echographie-renale',
        'Obstacle, abcès : dans les 24 h si pyélonéphrite à risque ou grave.',
      ],
      ['premiere_intention', 'beta-hcg', 'Femme en âge de procréer.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['etiologique', 'oeufs-schistosomes-urines', 'Hématurie en zone d’endémie.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['infections-sexuellement-transmissibles', 'Urétrite, vaginite : écoulement, leucorrhées.'],
      ['schistosomiase-urogenitale', 'Hématurie terminale, œufs dans les urines.'],
      ['Colique néphrétique', 'Douleur lombaire brutale sans fièvre.'],
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite.'],
      ['grossesse-extra-uterine', 'Douleur pelvienne, β-hCG positive.'],
      ['paludisme-simple', 'Fièvre, TDR positif.'],
    ],
    etiologies:
      '## Germes\n- *Escherichia coli*, *Klebsiella*, *Proteus*, entérocoques, *Staphylococcus saprophyticus*\n- Résistances fréquentes aux fluoroquinolones, au cotrimoxazole et aux céphalosporines (BLSE)\n\n## Facteurs\n- Grossesse, diabète, obstacle (lithiase, prostate, schistosomiase), sonde urinaire, rapports sexuels',
    principes: [
      [
        'Cystite simple de la femme',
        'Traitement court.',
        '- **Fosfomycine** 3 g en dose unique\n- Ou **nitrofurantoïne** 100 mg 2 fois par jour 5 jours\n- Boissons abondantes, mictions régulières',
      ],
      [
        'Cystite à risque et grossesse',
        'Guider sur l’ECBU.',
        '- ECBU avant traitement ; antibiotique adapté 5 à 7 jours (amoxicilline, céfixime, nitrofurantoïne, fosfomycine)\n- Grossesse : traiter aussi la bactériurie asymptomatique, ECBU de contrôle',
      ],
      [
        'Pyélonéphrite aiguë',
        'Éviter le sepsis.',
        '- Simple : **ciprofloxacine** 500 mg 2 fois par jour 7 jours (si résistance locale < 10 %) ou **ceftriaxone** 1 g/j puis relais selon l’antibiogramme, 10 à 14 jours au total\n- Grave : **ceftriaxone** + **gentamicine** (dose unique ou 3 jours), hospitalisation\n- Obstacle : drainage urgent (sonde JJ, néphrostomie)\n- Grossesse : ceftriaxone (pas de fluoroquinolone)',
      ],
      [
        'Infection urinaire de l’homme (prostatite)',
        'Traitement prolongé.',
        '- Ceftriaxone puis relais par fluoroquinolone ou **cotrimoxazole** selon l’antibiogramme, 14 à 21 jours',
      ],
    ],
    molecules: [
      ['fosfomycine', 'premiere', 'Cystite simple, dose unique'],
      ['nitrofurantoine', 'premiere', 'Cystite 5 jours'],
      ['ceftriaxone', 'premiere', 'Pyélonéphrite'],
      ['ciprofloxacine', 'alternative', 'Pyélonéphrite simple, prostatite'],
      ['gentamicine', 'deuxieme', 'Pyélonéphrite grave'],
      ['cefixime', 'alternative', 'Relais oral'],
      ['amoxicilline', 'alternative', 'Selon l’antibiogramme (entérocoque, grossesse)'],
      ['cotrimoxazole', 'alternative', 'Selon l’antibiogramme'],
    ],
    complications: [
      {
        nom: 'Sepsis et choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Pyélonéphrite grave, obstacle.',
        traitement: '- Antibiotiques, remplissage, drainage',
        clinique: '- Hypotension, confusion',
        paraclinique: '- Hémocultures, lactates',
      },
      {
        nom: 'Pyélonéphrite obstructive et abcès rénal',
        description: 'Obstacle (lithiase, compression).',
        traitement: '- Drainage urgent',
        clinique: '- Fièvre persistante',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Complications obstétricales',
        description: 'Pyélonéphrite de la femme enceinte : accouchement prématuré.',
        traitement: '- Hospitalisation, ceftriaxone',
        clinique: '- Contractions',
        paraclinique: '- ECBU',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Sepsis, obstacle.',
        traitement: '- Remplissage, drainage',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Cystite : guérison rapide ; pyélonéphrite : apyrexie attendue en 48 à 72 h, sinon imagerie et adaptation',
    urgences: ['choc-septique'],
    symptomes: [
      ['Brûlures mictionnelles', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Douleur lombaire', 'frequent'],
      ['Frissons', 'frequent'],
      ['Hématurie', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
      'Guide de prescription et ordinogrammes RDC',
    ],
    niveaux: {
      cs: [
        '- Bandelette, traitement de la cystite, pyélonéphrite simple sans vomissements',
        '- Pyélonéphrite grave, grossesse, homme, échec',
      ],
      hgr: ['- ECBU, échographie, ceftriaxone IV, hospitalisation', '- Obstacle nécessitant un drainage'],
      tert: ['- Urologie : sonde JJ, néphrostomie', ''],
    },
    alertes: { 'choc-septique': 'Fièvre, douleur lombaire et hypotension ou confusion' },
    formes: [
      {
        nom: 'Cystite aiguë simple',
        type: 'commune',
        description: 'Signes urinaires sans fièvre.',
        terrain: '- Femme jeune',
        fonctionnels: '- Brûlures mictionnelles, pollakiurie, urgenturies',
        generaux: '- Apyrexie',
        physiques: '- Sensibilité sus-pubienne',
        paraclinique: '- Bandelette positive',
        etiologies: '- E. coli',
        syndromes: [],
        examens: [['bandelette-urinaire', 'Diagnostic']],
      },
      {
        nom: 'Pyélonéphrite aiguë',
        type: 'topographique',
        description: 'Atteinte du rein.',
        terrain: '- Femme, grossesse, diabète',
        fonctionnels: '- Douleur lombaire, signes urinaires',
        generaux: '- Fièvre, frissons',
        physiques: '- Fosse lombaire douloureuse',
        paraclinique: '- ECBU positif, CRP élevée',
        etiologies: '- E. coli',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Pyélonéphrite grave ou obstructive',
        type: 'gravite',
        description: 'Sepsis d’origine urinaire.',
        terrain: '- Obstacle, diabète, sujet âgé',
        fonctionnels: '- Douleur lombaire',
        generaux: '- Hypotension, confusion',
        physiques: '- Marbrures',
        paraclinique: '- Dilatation à l’échographie, hémocultures positives',
        etiologies: '- Obstacle',
        syndromes: ['syndrome-de-choc', 'syndrome-de-reponse-inflammatoire-systemique'],
      },
    ],
  },
];
