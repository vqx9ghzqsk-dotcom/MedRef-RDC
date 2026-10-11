'use strict';

/**
 * Lot 3 (cardiologie) — syndromes coronariens aigus avec et sans sus-décalage du ST,
 * fibrillation atriale, cardiomyopathie du péripartum. Rédigé par IA (ESC, AHA, OMS) :
 * à valider par un médecin.
 */

const CARDIO = { departement: 'medecine-interne', specialite: 'Cardiologie' };

module.exports = [
  // =================================================================== SCA ST+
  {
    ...CARDIO,
    slug: 'syndrome-coronarien-aigu-st-plus',
    nom: 'Syndrome coronarien aigu avec sus-décalage du segment ST',
    resume:
      'Infarctus du myocarde par occlusion coronaire : ECG dans les 10 min, reperfusion urgente (angioplastie ou thrombolyse < 12 h), double antiagrégation.',
    definition:
      'Nécrose myocardique aiguë due à l’occlusion complète d’une artère coronaire, reconnue par une douleur thoracique ischémique associée à un sus-décalage persistant du segment ST (ou un bloc de branche gauche nouveau) à l’ECG.',
    physiopathologie:
      '## Mécanismes\n- Rupture ou érosion d’une plaque d’athérome, thrombose occlusive\n- Ischémie puis nécrose transmurale en quelques heures : « le temps, c’est du muscle »\n- Complications : troubles du rythme (fibrillation ventriculaire), insuffisance cardiaque, choc, complications mécaniques',
    diagnostic:
      '## Clinique\n- Douleur thoracique rétrosternale constrictive > 20 min, irradiant au bras gauche, à la mâchoire, non calmée par la trinitrine\n- Sueurs, nausées, dyspnée, malaise\n- Formes atypiques (diabétique, femme, sujet âgé) : épigastralgies, dyspnée isolée\n\n## ECG (dans les 10 minutes)\n- Sus-décalage du ST ≥ 1 mm dans 2 dérivations contiguës (≥ 2 mm en V2–V3 chez l’homme)\n- Miroir, puis onde Q\n- Bloc de branche gauche nouveau\n\n## Troponine\n- Confirme la nécrose mais **ne doit pas retarder la reperfusion**',
    examens: [
      [
        'premiere_intention',
        'ecg',
        'Sus-décalage du ST dans un territoire : diagnostic. À répéter toutes les 15–30 min si doute.',
      ],
      ['confirmation', 'troponine', 'Élevée, cinétique ascendante ; ne retarde pas la reperfusion.'],
      ['premiere_intention', 'ionogramme', 'Kaliémie (arythmies).'],
      ['premiere_intention', 'glycemie', 'Hyperglycémie, diabète méconnu.'],
      ['pretherapeutique', 'creatinine', 'Avant anticoagulation et produits de contraste.'],
      ['pretherapeutique', 'nfs', 'Anémie, plaquettes avant antithrombotiques.'],
      ['gravite', 'echocardiographie', 'Fraction d’éjection, complications mécaniques.'],
      ['deuxieme_intention', 'bilan-lipidique', 'Prévention secondaire.'],
    ],
    scores: ['nyha'],
    differentiels: [
      ['Dissection aortique', 'Douleur déchirante dorsale, asymétrie tensionnelle : pas de thrombolyse.'],
      ['Péricardite aiguë', 'Douleur positionnelle, frottement, sus-décalage diffus concave.'],
      ['Embolie pulmonaire', 'Dyspnée, tachycardie, facteurs de risque thrombo-emboliques.'],
      ['Ulcère perforé, pancréatite', 'Douleur épigastrique, ECG normal.'],
    ],
    etiologies:
      '## Facteurs de risque\n- HTA, diabète, tabac, dyslipidémie, obésité, sédentarité, âge, hérédité\n- Causes rares : vasospasme (cocaïne), dissection coronaire, embolie coronaire',
    principes: [
      [
        'Mesures immédiates',
        'Soulager et prévenir la mort subite.',
        '- Monitorage, défibrillateur à proximité, voie veineuse\n- **Aspirine** 150–300 mg à croquer\n- Oxygène si SpO2 < 90 %\n- **Morphine** si douleur intense, **trinitrine** si PAS > 90 mmHg (pas en cas d’infarctus du ventricule droit)',
      ],
      [
        'Reperfusion dans les 12 heures',
        'Rouvrir l’artère le plus vite possible.',
        '- **Angioplastie primaire** si réalisable dans les 120 minutes\n- Sinon **thrombolyse** dans les 30 minutes : **streptokinase** 1,5 MUI IV en 30–60 min (ou ténectéplase), puis transfert vers un centre de cardiologie interventionnelle\n- Vérifier les contre-indications (hémorragie, AVC récent, chirurgie récente)',
      ],
      [
        'Antithrombotiques',
        'Prévenir la ré-occlusion.',
        '- **Clopidogrel** 300 mg (75 mg si > 75 ans) avec la thrombolyse, 600 mg avant angioplastie, puis 75 mg/j 12 mois avec l’aspirine\n- **Énoxaparine** (bolus IV puis SC) ou héparine non fractionnée',
      ],
      [
        'Traitement de sortie (prévention secondaire)',
        'Réduire la récidive et la mortalité.',
        '- Aspirine à vie, inhibiteur P2Y12 12 mois\n- **Bêtabloquant**, **IEC** (si FEVG < 40 %, diabète, HTA), **statine à forte dose** (atorvastatine 40–80 mg)\n- Arrêt du tabac, activité physique, contrôle de l’HTA et du diabète',
      ],
    ],
    molecules: [
      ['acide-acetylsalicylique', 'premiere', 'Dose de charge puis à vie'],
      ['clopidogrel', 'premiere', 'Double antiagrégation 12 mois'],
      ['streptokinase', 'premiere', 'Thrombolyse si angioplastie impossible dans les délais'],
      ['enoxaparine', 'premiere', 'Anticoagulation de la phase aiguë'],
      ['heparine-non-fractionnee', 'alternative', 'Anticoagulation (insuffisance rénale, angioplastie)'],
      ['ticagrelor', 'alternative', 'Inhibiteur P2Y12 en cas d’angioplastie primaire'],
      ['alteplase', 'alternative', 'Thrombolyse'],
      ['morphine', 'adjuvant', 'Douleur'],
      ['trinitrine', 'adjuvant', 'Douleur, OAP, si PAS > 90 mmHg'],
      ['atorvastatine', 'premiere', 'Statine à forte dose'],
      ['bisoprolol', 'premiere', 'Bêtabloquant (en l’absence d’insuffisance cardiaque aiguë)'],
      ['ramipril', 'premiere', 'IEC'],
    ],
    complications: [
      {
        nom: 'Fibrillation ventriculaire et mort subite',
        description: 'Surtout dans les premières heures.',
        traitement: '- Choc électrique externe, réanimation cardiopulmonaire',
        clinique: '- Monitorage continu',
        paraclinique: '- ECG, kaliémie',
      },
      {
        nom: 'Insuffisance cardiaque et choc cardiogénique',
        fiche: 'insuffisance-cardiaque',
        description: 'Nécrose étendue.',
        traitement: '- Diurétiques, oxygène, inotropes ; revascularisation urgente',
        clinique: '- Crépitants, PA, diurèse',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Troubles de la conduction',
        description: 'Bloc auriculo-ventriculaire (infarctus inférieur).',
        traitement: '- Atropine, stimulation temporaire',
        clinique: '- FC',
        paraclinique: '- ECG',
      },
      {
        nom: 'Complications mécaniques',
        description:
          'Rupture de pilier (insuffisance mitrale), communication interventriculaire, rupture de paroi.',
        traitement: '- Chirurgie urgente',
        clinique: '- Souffle nouveau, choc',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité hospitalière 5 à 10 % avec reperfusion, bien plus sans\n- Pronostic lié à la fraction d’éjection, au délai de reperfusion et au contrôle des facteurs de risque\n- Réadaptation cardiaque recommandée',
    urgences: ['oedeme-aigu-du-poumon'],
    symptomes: [
      ['Douleur thoracique', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Syncope', 'occasionnel'],
      ['Palpitations', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'AHA — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- ECG si disponible, aspirine 300 mg, voie veineuse, transfert médicalisé immédiat',
        '- Toute douleur thoracique évocatrice : transfert sans délai',
      ],
      hgr: [
        '- ECG, troponine, thrombolyse par streptokinase si < 12 h et pas de contre-indication, clopidogrel, énoxaparine',
        '- Après thrombolyse : centre de cardiologie interventionnelle ; choc ou échec de thrombolyse',
      ],
      tert: ['- Coronarographie et angioplastie, réanimation cardiologique', ''],
    },
    alertes: { 'oedeme-aigu-du-poumon': 'Douleur thoracique avec dyspnée, crépitants et désaturation' },
    formes: [
      {
        nom: 'Infarctus antérieur typique',
        type: 'commune',
        description: 'Douleur constrictive prolongée avec sus-décalage du ST.',
        terrain: '- Homme > 45 ans, femme ménopausée, facteurs de risque',
        fonctionnels:
          '- Douleur rétrosternale constrictive irradiant au bras gauche et à la mâchoire, angoisse',
        generaux: '- Sueurs, pâleur',
        physiques: '- Examen souvent normal ; galop, crépitants si insuffisance cardiaque',
        paraclinique: '- Sus-décalage du ST en V1–V4, troponine élevée',
        etiologies: '- Occlusion de l’IVA',
        syndromes: [],
        examens: [['ecg', 'Diagnostic']],
      },
      {
        nom: 'Infarctus inférieur avec extension au ventricule droit',
        type: 'topographique',
        description: 'Hypotension et turgescence jugulaire, poumons clairs.',
        terrain: '- Occlusion de la coronaire droite',
        fonctionnels: '- Douleur épigastrique possible, nausées',
        generaux: '- Hypotension, bradycardie',
        physiques: '- Turgescence jugulaire, poumons clairs',
        paraclinique: '- Sus-décalage en DII, DIII, aVF et V3R–V4R',
        etiologies: '- Coronaire droite',
        syndromes: ['syndrome-d-insuffisance-cardiaque-droite'],
      },
      {
        nom: 'Forme atypique du diabétique et du sujet âgé',
        type: 'terrain',
        description: 'Douleur absente ou atypique.',
        terrain: '- Diabète, grand âge, femme',
        fonctionnels: '- Dyspnée, épigastralgies, malaise',
        generaux: '- Asthénie',
        physiques: '',
        paraclinique: '- ECG systématique devant tout malaise',
        etiologies: '- Neuropathie autonome',
        syndromes: [],
      },
    ],
  },

  // =================================================================== SCA non ST+
  {
    ...CARDIO,
    slug: 'syndrome-coronarien-aigu-sans-st',
    nom: 'Syndrome coronarien aigu sans sus-décalage du segment ST',
    resume:
      'Angor instable et infarctus sans sus-décalage du ST : troponine, stratification du risque, double antiagrégation, anticoagulation, coronarographie selon le risque.',
    definition:
      'Ischémie myocardique aiguë sans sus-décalage persistant du ST, comprenant l’**angor instable** (troponine normale) et l’**infarctus sans sus-décalage du ST** (troponine élevée), habituellement par thrombose coronaire non occlusive.',
    physiopathologie:
      '## Mécanismes\n- Rupture de plaque avec thrombus non occlusif ou occlusion d’une petite branche\n- Déséquilibre entre apport et besoin en oxygène (anémie, tachycardie, hypertension)',
    diagnostic:
      '## Clinique\n- Douleur angineuse prolongée de repos, angor de novo ou aggravé, angor post-infarctus\n\n## ECG\n- Sous-décalage du ST, inversion des ondes T, ou ECG normal (répéter)\n\n## Troponine\n- Élévation et cinétique (H0, H1–H3) : infarctus ; normale : angor instable\n\n## Très haut risque (coronarographie < 2 h)\n- Instabilité hémodynamique, douleur réfractaire, arythmies graves, insuffisance cardiaque aiguë',
    examens: [
      [
        'premiere_intention',
        'ecg',
        'Sous-décalage du ST ou ondes T négatives ; à répéter, comparer aux anciens tracés.',
      ],
      ['confirmation', 'troponine', 'Élévation avec cinétique = infarctus sans sus-décalage du ST.'],
      ['premiere_intention', 'nfs', 'Anémie (cause ou facteur aggravant).'],
      ['pretherapeutique', 'creatinine', 'Dose de l’énoxaparine.'],
      ['gravite', 'echocardiographie', 'Troubles de la cinétique, fraction d’éjection.'],
      ['deuxieme_intention', 'bilan-lipidique', 'Prévention secondaire.'],
    ],
    scores: ['nyha'],
    differentiels: [
      ['syndrome-coronarien-aigu-st-plus', 'Sus-décalage persistant du ST : reperfusion urgente.'],
      ['Embolie pulmonaire', 'Dyspnée, tachycardie, troponine possiblement élevée.'],
      ['Myocardite', 'Contexte viral, sujet jeune.'],
      [
        'Reflux gastro-œsophagien, douleur pariétale',
        'Douleur reproduite à la palpation, ECG et troponine normaux.',
      ],
    ],
    etiologies:
      '## Facteurs de risque\n- HTA, diabète, tabac, dyslipidémie, âge, maladie rénale chronique\n- Facteurs déclenchants : anémie, infection, fièvre, tachyarythmie, poussée hypertensive',
    principes: [
      [
        'Antiagrégation et anticoagulation',
        'Limiter la progression du thrombus.',
        '- **Aspirine** 150–300 mg puis 75–100 mg/j\n- **Clopidogrel** 300–600 mg puis 75 mg/j (ou ticagrelor) pendant 12 mois\n- **Énoxaparine** 1 mg/kg toutes les 12 h jusqu’à la coronarographie ou 8 jours',
      ],
      [
        'Traitement anti-ischémique',
        'Soulager la douleur.',
        '- **Bêtabloquant** (bisoprolol) en l’absence d’insuffisance cardiaque aiguë\n- Trinitrine si douleur et PA correcte',
      ],
      [
        'Stratifier et orienter',
        'Revasculariser les patients à risque.',
        '- Haut risque (troponine élevée, modifications du ST) : coronarographie dans les 24 h\n- Très haut risque : < 2 h\n- Bas risque : test d’ischémie avant la sortie',
      ],
      [
        'Prévention secondaire',
        'Prévenir la récidive.',
        '- Statine à forte dose, IEC si indication, arrêt du tabac, réadaptation',
      ],
    ],
    molecules: [
      ['acide-acetylsalicylique', 'premiere', 'À vie'],
      ['clopidogrel', 'premiere', '12 mois'],
      ['ticagrelor', 'alternative', 'Inhibiteur P2Y12 plus puissant'],
      ['enoxaparine', 'premiere', 'Phase aiguë'],
      ['bisoprolol', 'premiere', 'Anti-ischémique'],
      ['trinitrine', 'adjuvant', 'Douleur'],
      ['atorvastatine', 'premiere', 'Statine à forte dose'],
      ['ramipril', 'adjuvant', 'FEVG altérée, diabète, HTA'],
    ],
    complications: [
      {
        nom: 'Évolution vers l’infarctus avec sus-décalage',
        fiche: 'syndrome-coronarien-aigu-st-plus',
        description: 'Occlusion complète secondaire.',
        traitement: '- Reperfusion urgente',
        clinique: '- Récidive douloureuse',
        paraclinique: '- ECG répétés',
      },
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque',
        description: 'Ischémie étendue.',
        traitement: '- Diurétiques, revascularisation',
        clinique: '- Dyspnée, crépitants',
        paraclinique: '- Échocardiographie, BNP',
      },
      {
        nom: 'Hémorragie sous antithrombotiques',
        description: 'Digestive surtout.',
        traitement: '- Inhibiteur de la pompe à protons préventif, adaptation du traitement',
        clinique: '- Méléna',
        paraclinique: '- Hb',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité à 6 mois de 5 à 15 % selon le risque\n- Pronostic amélioré par la revascularisation des patients à risque et la prévention secondaire',
    urgences: [],
    symptomes: [
      ['Douleur thoracique', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Palpitations', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'AHA — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- ECG si disponible, aspirine, transfert', '- Toute douleur thoracique suspecte'],
      hgr: [
        '- ECG répétés, troponine, double antiagrégation, énoxaparine, bêtabloquant, statine',
        '- Haut risque : coronarographie en centre spécialisé',
      ],
      tert: ['- Coronarographie, angioplastie, pontage', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Infarctus sans sus-décalage du ST',
        type: 'commune',
        description: 'Douleur prolongée avec troponine élevée.',
        terrain: '- Facteurs de risque cardiovasculaire',
        fonctionnels: '- Douleur angineuse de repos > 20 min',
        generaux: '- Sueurs',
        physiques: '- Souvent normal',
        paraclinique: '- Sous-décalage du ST, troponine élevée',
        etiologies: '- Thrombose non occlusive',
        syndromes: [],
        examens: [['troponine', 'Élevée']],
      },
      {
        nom: 'Angor instable',
        type: 'commune',
        description: 'Douleur angineuse instable, troponine normale.',
        terrain: '- Coronarien connu ou non',
        fonctionnels: '- Angor de novo, de repos ou aggravé',
        generaux: '',
        physiques: '',
        paraclinique: '- Troponine normale, ECG normal ou modifications transitoires',
        etiologies: '- Plaque instable',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Fibrillation atriale
  {
    ...CARDIO,
    slug: 'fibrillation-atriale',
    nom: 'Fibrillation atriale',
    resume:
      'Trouble du rythme le plus fréquent : risque d’AVC et d’insuffisance cardiaque ; anticoagulation selon le risque, contrôle de la fréquence ou du rythme.',
    definition:
      'Arythmie supraventriculaire avec activité électrique atriale désorganisée et contraction ventriculaire irrégulière, diagnostiquée sur un ECG montrant des QRS irrégulièrement irréguliers sans onde P individualisable.',
    physiopathologie:
      '## Mécanismes\n- Foyers ectopiques (veines pulmonaires) et remodelage atrial (dilatation, fibrose)\n- Stase dans l’oreillette gauche : thrombus, embolies (AVC)\n- Fréquence ventriculaire rapide : insuffisance cardiaque, cardiomyopathie rythmique',
    diagnostic:
      '## Clinique\n- Palpitations, dyspnée, asthénie, vertiges ; parfois asymptomatique\n- Pouls irrégulier, déficit pulsatile\n- Révélation possible par un AVC ou une insuffisance cardiaque\n\n## ECG\n- Absence d’ondes P, trémulation de la ligne de base, intervalles RR irréguliers\n\n## Risque embolique (CHA2DS2-VASc)\n- Insuffisance cardiaque 1, HTA 1, âge ≥ 75 ans 2, diabète 1, AVC/AIT 2, maladie vasculaire 1, âge 65–74 ans 1, sexe féminin 1\n- Anticoagulation si score ≥ 2 (homme) ou ≥ 3 (femme), à discuter à 1 (ou 2 chez la femme)',
    examens: [
      ['confirmation', 'ecg', 'Rythme irrégulier sans onde P ; fréquence ventriculaire.'],
      [
        'premiere_intention',
        'echocardiographie',
        'Valvulopathie rhumatismale (rétrécissement mitral), taille de l’oreillette, fonction ventriculaire.',
      ],
      ['premiere_intention', 'tsh', 'Hyperthyroïdie.'],
      ['premiere_intention', 'ionogramme', 'Kaliémie, magnésémie.'],
      ['pretherapeutique', 'creatinine', 'Choix et dose de l’anticoagulant.'],
      ['pretherapeutique', 'nfs', 'Avant anticoagulation.'],
      ['suivi', 'hemostase', 'INR sous antivitamine K (cible 2 à 3).'],
    ],
    scores: ['nyha'],
    differentiels: [
      ['Flutter atrial', 'Ondes F en dents de scie, souvent 2:1 (150/min).'],
      ['Extrasystoles atriales fréquentes', 'Ondes P visibles avant les complexes prématurés.'],
      ['Tachycardie atriale multifocale', 'Ondes P de morphologies variées (BPCO).'],
    ],
    etiologies:
      '## Causes\n- HTA, valvulopathies **rhumatismales** (rétrécissement mitral), cardiomyopathies, cardiopathie ischémique\n- Hyperthyroïdie, alcool, infection, embolie pulmonaire, chirurgie\n- Âge, obésité, apnées du sommeil',
    principes: [
      [
        'Patient instable',
        'Restaurer l’hémodynamique.',
        '- Hypotension, OAP, douleur ischémique : **cardioversion électrique** urgente',
      ],
      [
        'Contrôle de la fréquence',
        'Fréquence de repos < 110/min.',
        '- **Bisoprolol** (ou autre bêtabloquant) en première intention\n- **Digoxine** si insuffisance cardiaque ou hypotension\n- **Amiodarone** si échec et insuffisance cardiaque',
      ],
      [
        'Anticoagulation',
        'Prévenir l’AVC.',
        '- Selon le score CHA2DS2-VASc et le risque hémorragique\n- **Rétrécissement mitral rhumatismal ou prothèse mécanique : antivitamine K (warfarine), INR 2–3** (2,5–3,5 pour une prothèse mitrale)\n- Autres cas : anticoagulant oral direct (**apixaban**, **rivaroxaban**) ou warfarine\n- L’aspirine n’est pas une alternative à l’anticoagulation',
      ],
      [
        'Contrôle du rythme',
        'Restaurer le rythme sinusal chez certains patients.',
        '- FA récente symptomatique : cardioversion après 3 semaines d’anticoagulation efficace (ou ETO)\n- Amiodarone pour maintenir le rythme sinusal',
      ],
      [
        'Traiter la cause',
        'Réduire les récidives.',
        '- HTA, hyperthyroïdie, valvulopathie (dilatation mitrale), alcool',
      ],
    ],
    molecules: [
      ['bisoprolol', 'premiere', 'Contrôle de la fréquence'],
      ['digoxine', 'alternative', 'Contrôle de la fréquence avec insuffisance cardiaque'],
      ['amiodarone', 'deuxieme', 'Contrôle du rythme ou de la fréquence'],
      ['warfarine', 'premiere', 'Valvulopathie rhumatismale, prothèse mécanique'],
      ['apixaban', 'premiere', 'FA non valvulaire'],
      ['rivaroxaban', 'alternative', 'FA non valvulaire'],
      ['enoxaparine', 'adjuvant', 'Relais en attendant un INR efficace'],
      ['vitamine-k1-phytomenadione', 'adjuvant', 'Surdosage en antivitamine K'],
    ],
    complications: [
      {
        nom: 'AVC ischémique cardio-embolique',
        fiche: 'avc',
        description: 'Complication la plus redoutée.',
        traitement: '- Prise en charge de l’AVC, anticoagulation secondaire',
        clinique: '- Déficit neurologique brutal',
        paraclinique: '- Scanner cérébral',
      },
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque',
        description: 'Fréquence rapide prolongée.',
        traitement: '- Contrôle de la fréquence, diurétiques',
        clinique: '- Dyspnée, œdèmes',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Hémorragie sous anticoagulant',
        description: 'Digestive, intracrânienne.',
        traitement: '- Arrêt, vitamine K pour les AVK, transfusion',
        clinique: '- Saignements',
        paraclinique: '- INR, Hb',
      },
    ],
    evolution:
      '## Pronostic\n- Risque d’AVC multiplié par 5 sans anticoagulation\n- Évolution vers la forme permanente fréquente\n- Suivi : fréquence, INR, tolérance, fonction rénale',
    urgences: ['avc-aigu', 'oedeme-aigu-du-poumon'],
    symptomes: [
      ['Palpitations', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Syncope', 'rare'],
      ['Déficit moteur', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'AHA — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Prise du pouls, orientation pour ECG ; renouvellement du traitement et surveillance',
        '- Pouls irrégulier rapide, dyspnée, signes d’AVC',
      ],
      hgr: [
        '- ECG, échocardiographie si disponible, contrôle de la fréquence, anticoagulation et INR',
        '- Instabilité, cardioversion, valvulopathie chirurgicale',
      ],
      tert: ['- Cardioversion, ETO, chirurgie ou dilatation valvulaire, ablation', ''],
    },
    alertes: {
      'avc-aigu': 'Palpitations connues et déficit neurologique brutal (embolie)',
      'oedeme-aigu-du-poumon': 'Fibrillation atriale rapide avec dyspnée de repos et crépitants',
    },
    formes: [
      {
        nom: 'FA paroxystique ou persistante symptomatique',
        type: 'commune',
        description: 'Palpitations irrégulières.',
        terrain: '- HTA, valvulopathie, âge',
        fonctionnels: '- Palpitations, dyspnée d’effort, asthénie',
        generaux: '',
        physiques: '- Pouls irrégulier, déficit pulsatile',
        paraclinique: '- ECG : QRS irréguliers sans onde P',
        etiologies: '- HTA, valvulopathie, thyroïde',
        syndromes: [],
        examens: [['ecg', 'Diagnostic']],
      },
      {
        nom: 'FA sur valvulopathie rhumatismale',
        type: 'etiologique',
        description: 'Rétrécissement mitral de l’adulte jeune.',
        terrain: '- Adulte jeune, antécédent de rhumatisme articulaire aigu',
        fonctionnels: '- Dyspnée, hémoptysie',
        generaux: '',
        physiques: '- Roulement diastolique, éclat de B1',
        paraclinique: '- Échocardiographie : rétrécissement mitral',
        etiologies: '- Cardiopathie rhumatismale',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
      },
    ],
  },

  // =================================================================== Cardiomyopathie du péripartum
  {
    ...CARDIO,
    slug: 'cardiomyopathie-du-peripartum',
    nom: 'Cardiomyopathie du péripartum',
    resume:
      'Insuffisance cardiaque à FEVG < 45 % en fin de grossesse ou dans les 5 mois post-partum, fréquente en Afrique : traitement de l’IC, bromocriptine, anticoagulation.',
    definition:
      'Cardiomyopathie avec dysfonction systolique du ventricule gauche (FEVG < 45 %) survenant en fin de grossesse ou dans les mois suivant l’accouchement, sans autre cause identifiée d’insuffisance cardiaque.',
    physiopathologie:
      '## Mécanismes\n- Stress oxydatif et clivage de la prolactine en un fragment de 16 kDa toxique pour les vaisseaux et le myocarde\n- Facteurs angiogéniques (pré-éclampsie), prédisposition génétique',
    diagnostic:
      '## Clinique\n- Dyspnée d’effort puis de repos, orthopnée, toux, œdèmes, asthénie\n- Tachycardie, galop, crépitants, turgescence jugulaire, hépatomégalie\n- Symptômes souvent confondus avec ceux d’une fin de grossesse normale\n\n## Confirmation\n- Échocardiographie : FEVG < 45 %, dilatation ventriculaire\n- BNP élevé',
    examens: [
      [
        'confirmation',
        'echocardiographie',
        'FEVG < 45 %, ventricule gauche dilaté ; thrombus intraventriculaire.',
      ],
      ['premiere_intention', 'bnp', 'Élevé (orientation diagnostique).'],
      ['premiere_intention', 'ecg', 'Tachycardie, troubles de repolarisation, arythmies.'],
      ['premiere_intention', 'radiographie-thoracique', 'Cardiomégalie, œdème pulmonaire.'],
      ['premiere_intention', 'ionogramme', 'Avant diurétiques et IEC.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'nfs', 'Anémie aggravante.'],
      ['deuxieme_intention', 'tsh', 'Dysthyroïdie.'],
    ],
    scores: ['nyha'],
    differentiels: [
      ['pre-eclampsie-severe', 'HTA, protéinurie ; peut coexister.'],
      ['Embolie pulmonaire', 'Dyspnée brutale, FEVG conservée.'],
      ['Valvulopathie rhumatismale décompensée', 'Souffles, rétrécissement mitral à l’échocardiographie.'],
      ['Anémie sévère', 'Hb basse, FEVG normale.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Multiparité, âge > 30 ans, grossesse gémellaire\n- Pré-éclampsie et HTA gravidique\n- Origine africaine, malnutrition',
    principes: [
      [
        'Insuffisance cardiaque aiguë',
        'Stabiliser.',
        '- Oxygène, position demi-assise, **furosémide** IV\n- **Trinitrine** si PA élevée\n- Choc : inotropes en réanimation',
      ],
      [
        'Traitement de fond selon la période',
        'Améliorer la fonction ventriculaire.',
        '- **Pendant la grossesse** : diurétiques, bêtabloquant (bisoprolol), **hydralazine** + dérivé nitré ; **pas d’IEC ni d’antagoniste de l’aldostérone**\n- **Après l’accouchement** : **IEC** (énalapril, compatible avec l’allaitement), bêtabloquant, **spironolactone**',
      ],
      [
        'Bromocriptine et anticoagulation',
        'Bloquer la prolactine toxique.',
        '- **Bromocriptine** 2,5 mg/j (forme non compliquée 1 semaine ; sévère 2,5 mg 2 fois par jour 2 semaines puis 2,5 mg/j 6 semaines)\n- Toujours avec une **anticoagulation** préventive (énoxaparine) ; curative si thrombus ou FA',
      ],
      [
        'Accouchement et suivi',
        'Sécuriser la mère et l’enfant.',
        '- Décision obstétricale et cardiologique conjointe (voie basse possible si stable)\n- Contraception efficace ; nouvelle grossesse déconseillée si FEVG non normalisée\n- Échocardiographie de contrôle à 6 mois',
      ],
    ],
    molecules: [
      ['furosemide', 'premiere', 'Congestion'],
      ['bisoprolol', 'premiere', 'Toute période'],
      ['enalapril', 'premiere', 'Après l’accouchement (compatible avec l’allaitement)'],
      ['hydralazine', 'premiere', 'Pendant la grossesse (avec un dérivé nitré)'],
      ['trinitrine', 'adjuvant', 'OAP avec PA conservée'],
      ['spironolactone', 'adjuvant', 'Après l’accouchement'],
      ['bromocriptine', 'adjuvant', 'Inhibition de la prolactine'],
      ['enoxaparine', 'premiere', 'Anticoagulation associée à la bromocriptine'],
      ['warfarine', 'alternative', 'Thrombus ou FA après l’accouchement'],
    ],
    complications: [
      {
        nom: 'Thrombus intracardiaque et embolies',
        description: 'Dilatation et stase ventriculaires, état d’hypercoagulabilité.',
        traitement: '- Anticoagulation curative',
        clinique: '- Déficit neurologique, ischémie de membre',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Arythmies et mort subite',
        description: 'Arythmies ventriculaires.',
        traitement: '- Bêtabloquant, correction de la kaliémie',
        clinique: '- Palpitations, syncope',
        paraclinique: '- ECG',
      },
      {
        nom: 'Choc cardiogénique',
        description: 'Forme fulminante.',
        traitement: '- Réanimation, inotropes',
        clinique: '- PA, diurèse, conscience',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Récidive lors d’une nouvelle grossesse',
        description: 'Risque élevé si la FEVG ne s’est pas normalisée.',
        traitement: '- Contraception, conseil préconceptionnel',
        clinique: '',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération de la FEVG chez 40 à 50 % des patientes dans les 6 mois\n- Mortalité de 10 à 20 % en Afrique subsaharienne',
    urgences: ['oedeme-aigu-du-poumon'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Œdèmes', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Toux', 'frequent'],
      ['Palpitations', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      '2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure (mise à jour 2023)',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- Repérer la dyspnée inhabituelle en fin de grossesse ou post-partum, furosémide, transfert',
        '- Toute dyspnée de repos ou orthopnée en péripartum',
      ],
      hgr: [
        '- Échocardiographie si disponible, traitement de l’IC, bromocriptine, anticoagulation',
        '- Choc, FEVG très basse, thrombus',
      ],
      tert: ['- Cardiologie, réanimation, suivi spécialisé', ''],
    },
    alertes: {
      'oedeme-aigu-du-poumon': 'Dyspnée de repos et orthopnée en fin de grossesse ou après l’accouchement',
    },
    formes: [
      {
        nom: 'Forme commune du post-partum',
        type: 'commune',
        description: 'Insuffisance cardiaque dans les semaines suivant l’accouchement.',
        terrain: '- Multipare, pré-éclampsie',
        fonctionnels: '- Dyspnée d’effort puis orthopnée, toux nocturne',
        generaux: '- Asthénie, tachycardie',
        physiques: '- Crépitants, galop, œdèmes, hépatomégalie',
        paraclinique: '- FEVG < 45 %',
        etiologies: '- Cardiomyopathie du péripartum',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche', 'syndrome-de-retention-hydrosodee'],
        examens: [['echocardiographie', 'Confirmation']],
      },
      {
        nom: 'Forme sévère avec choc',
        type: 'gravite',
        description: 'Insuffisance cardiaque aiguë sévère.',
        terrain: '- FEVG < 30 %',
        fonctionnels: '- Dyspnée de repos',
        generaux: '- Hypotension, marbrures',
        physiques: '- Œdème pulmonaire, oligurie',
        paraclinique: '- FEVG très basse, BNP très élevé',
        etiologies: '- Cardiomyopathie du péripartum',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },
];
