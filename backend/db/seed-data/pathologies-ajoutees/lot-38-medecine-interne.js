'use strict';

/**
 * Lot 38 (phase 2, médecine interne générale) — adénopathies superficielles (démarche
 * diagnostique), œdèmes généralisés (démarche diagnostique), coup de chaleur, syncope et malaise.
 * Rédigé par IA (OMS, ESC, MSF, ouvrages de référence) : à valider.
 */

const MIG = { departement: 'medecine-interne', specialite: 'Médecine interne générale' };

module.exports = [
  // =================================================================== Adénopathies
  {
    ...MIG,
    slug: 'adenopathies-superficielles-demarche',
    nom: 'Adénopathies superficielles (démarche diagnostique)',
    resume:
      'Ganglion palpable > 1 cm (> 1,5 cm en inguinal) : en RDC, penser d’abord tuberculose ganglionnaire et VIH, puis infections locales, lymphomes (Burkitt, LNH, Hodgkin), Kaposi, métastases, trypanosomiase (ganglions cervicaux postérieurs) ; examen de la zone drainée, test VIH, cytoponction avec Xpert ; biopsie si adénopathie persistante > 4 semaines sans cause évidente ; pas d’antibiotiques ni de corticoïdes à l’aveugle.',
    definition:
      'Augmentation de volume d’un ou de plusieurs ganglions lymphatiques superficiels (cervicaux, sus-claviculaires, axillaires, inguinaux, épitrochléens), localisée ou généralisée.',
    physiopathologie:
      '## Causes\n- **Infectieuses** : **tuberculose**, **VIH** (adénopathies généralisées persistantes), infections du territoire drainé (pyodermite, plaie, angine, dents), syphilis, IST (inguinales), **trypanosomiase** (cervicales postérieures), toxoplasmose, mononucléose\n- **Tumorales** : **lymphomes** (Burkitt chez l’enfant, LNH, Hodgkin), **sarcome de Kaposi**, leucémies, **métastases** (sus-claviculaire gauche : cancer digestif ; cervicale : ORL)\n- **Inflammatoires** : lupus, sarcoïdose, médicaments',
    diagnostic:
      '## Interrogatoire et examen\n- Durée, fièvre, sueurs nocturnes, amaigrissement, contage tuberculeux, facteurs de risque VIH, zone d’endémie de la THA\n- Taille, consistance (molle et fluctuante : tuberculose ; dure : cancer ; ferme et élastique : lymphome), sensibilité, adhérence, fistule\n- **Territoire de drainage**, autres aires ganglionnaires, rate, foie\n\n## Signes d’alarme\n- Taille > 2 cm, siège **sus-claviculaire**, consistance dure ou fixée, croissance rapide, signes généraux, âge > 40 ans\n\n## Examens\n- **Test VIH**, NFS, VS/CRP, radiographie thoracique\n- **Cytoponction** à l’aiguille fine avec **Xpert MTB/RIF** (et cytologie)\n- **Biopsie-exérèse** si ponction non contributive ou suspicion de lymphome\n- Dépistage THA en zone d’endémie, sérologie syphilis',
    examens: [
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'nfs', 'Leucémie, lymphocytose.'],
      ['premiere_intention', 'cytoponction-ganglionnaire', 'Cytologie, Xpert.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose ganglionnaire.'],
      ['confirmation', 'biopsie-histologie', 'Lymphome, métastase.'],
      ['premiere_intention', 'radiographie-thoracique', 'Tuberculose, adénopathies médiastinales.'],
      ['etiologique', 'depistage-tha', 'Zone d’endémie.'],
      ['etiologique', 'serologie-syphilis', 'Adénopathies inguinales.'],
      ['premiere_intention', 'vitesse-sedimentation', 'Inflammation.'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-extrapulmonaire', 'Adénite tuberculeuse : fluctuante, fistulisée.'],
      ['lymphomes-non-hodgkiniens-adulte', 'Adénopathies fermes, signes B.'],
      ['infection-vih', 'Adénopathies généralisées persistantes.'],
      ['trypanosomiase-humaine-africaine', 'Ganglions cervicaux postérieurs (signe de Winterbottom).'],
      ['sarcome-de-kaposi', 'Lésions cutanées violacées.'],
      ['Masses non ganglionnaires', 'Kyste, lipome, abcès, goitre, glande salivaire.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Tuberculose, VIH, infections locales, lymphomes, Kaposi, trypanosomiase',
    principes: [
      [
        'Selon la cause',
        'Traiter la cause identifiée.',
        '- Infection locale : traitement de la porte d’entrée, contrôle à 2–4 semaines\n- **Tuberculose** : traitement antituberculeux standard (6 mois)\n- **VIH** : ARV ; une adénopathie qui grossit sous ARV impose une biopsie\n- Lymphome, métastase : orientation oncologique',
      ],
      [
        'Ce qu’il faut éviter',
        'Ne pas masquer le diagnostic.',
        '- Pas de **corticoïdes** avant le diagnostic (lymphome, tuberculose)\n- Pas d’antibiothérapies répétées à l’aveugle\n- Pas d’incision d’une adénite tuberculeuse fluctuante (fistule) : préférer la ponction',
      ],
    ],
    molecules: [
      ['rifampicine', 'alternative', 'Tuberculose ganglionnaire (RHZE)'],
      ['amoxicilline', 'alternative', 'Adénite bactérienne'],
      ['cloxacilline', 'alternative', 'Adénite staphylococcique'],
    ],
    complications: [
      {
        nom: 'Fistulisation',
        fiche: 'tuberculose-extrapulmonaire',
        description: 'Adénite tuberculeuse.',
        traitement: '- Antituberculeux',
        clinique: '- Écoulement caséeux',
        paraclinique: '- Xpert',
      },
      {
        nom: 'Compression',
        fiche: 'lymphomes-non-hodgkiniens-adulte',
        description: 'Masses volumineuses.',
        traitement: '- Traitement de la cause',
        clinique: '- Dysphagie, œdème',
        paraclinique: '- Imagerie',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause ; un diagnostic tardif de lymphome ou de tuberculose aggrave le pronostic',
    urgences: [],
    symptomes: [
      ['Adénopathies', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Sueurs nocturnes', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Tuméfaction cervicale', 'frequent'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Examen, test VIH, traitement de la porte d’entrée, orientation',
        '- Adénopathie > 2 cm, > 4 semaines, signes généraux',
      ],
      hgr: ['- Cytoponction, Xpert, biopsie', ''],
      tert: ['- Anatomopathologie, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Adénopathie localisée infectieuse',
        type: 'commune',
        description: 'Porte d’entrée.',
        terrain: '',
        fonctionnels: '- Douleur',
        generaux: '- Fébricule',
        physiques: '- Ganglion sensible, lésion du territoire drainé',
        paraclinique: '',
        etiologies: '- Infection locale',
        syndromes: [],
      },
      {
        nom: 'Adénite tuberculeuse',
        type: 'etiologique',
        description: 'Cervicale surtout.',
        terrain: '- VIH, contage',
        fonctionnels: '',
        generaux: '- Sueurs, amaigrissement',
        physiques: '- Adénopathie molle, fistule',
        paraclinique: '- Xpert positif sur ponction',
        etiologies: '- M. tuberculosis',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
      },
      {
        nom: 'Adénopathie suspecte de malignité',
        type: 'gravite',
        description: 'Signes d’alarme.',
        terrain: '- > 40 ans',
        fonctionnels: '',
        generaux: '- Amaigrissement',
        physiques: '- Ganglion dur, fixé, sus-claviculaire',
        paraclinique: '- Biopsie',
        etiologies: '- Lymphome, métastase',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
      },
    ],
  },

  // =================================================================== Œdèmes généralisés
  {
    ...MIG,
    slug: 'oedemes-generalises-demarche',
    nom: 'Œdèmes généralisés (démarche diagnostique)',
    resume:
      'Œdèmes bilatéraux, mous, prenant le godet : quatre grandes causes à rechercher — cardiaque (turgescence jugulaire, dyspnée), rénale (protéinurie à la bandelette : syndrome néphrotique, insuffisance rénale), hépatique (ascite, cirrhose), nutritionnelle (hypoalbuminémie, kwashiorkor) ; aussi grossesse (pré-éclampsie), hypothyroïdie, médicaments (amlodipine, corticoïdes) ; bandelette urinaire systématique ; traitement de la cause, restriction sodée, diurétiques.',
    definition:
      'Accumulation de liquide dans le secteur interstitiel touchant plusieurs territoires (membres inférieurs, lombes, visage, séreuses), traduisant une rétention hydrosodée ou une baisse de la pression oncotique.',
    physiopathologie:
      '## Mécanismes\n- **Augmentation de la pression hydrostatique** : insuffisance cardiaque, rétention rénale de sel\n- **Baisse de la pression oncotique** : hypoalbuminémie (syndrome néphrotique, cirrhose, malnutrition, entéropathie exsudative)\n- **Hyperperméabilité capillaire** : sepsis, allergie\n\n## Causes\n- **Cardiaques**, **rénales**, **hépatiques**, **nutritionnelles**\n- **Grossesse** (pré-éclampsie), hypothyroïdie (myxœdème), médicaments (inhibiteurs calciques, AINS, corticoïdes), béribéri humide',
    diagnostic:
      '## Examen\n- Œdèmes mous, blancs, indolores, prenant le godet, déclives (lombes chez l’alité)\n- **Turgescence jugulaire**, reflux hépato-jugulaire, crépitants, souffle (cœur)\n- **Ascite**, ictère, circulation collatérale (foie)\n- **Urines mousseuses**, HTA (rein)\n- État nutritionnel, grossesse, médicaments\n\n## Examens\n- **Bandelette urinaire** (protéinurie) : examen clé\n- Créatinine, **albuminémie**, protéinurie des 24 h, bilan hépatique, TP, NFS, TSH\n- ECG, radiographie thoracique, **échocardiographie**, échographie abdominale et rénale',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie : piste rénale.'],
      ['premiere_intention', 'proteinurie', 'Syndrome néphrotique.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'bilan-hepatique', 'Albumine, cirrhose.'],
      ['premiere_intention', 'ecg', 'Cardiopathie.'],
      ['premiere_intention', 'radiographie-thoracique', 'Cardiomégalie, épanchements.'],
      ['deuxieme_intention', 'echocardiographie', 'Insuffisance cardiaque.'],
      ['deuxieme_intention', 'echographie-abdominale', 'Cirrhose, ascite, reins.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'bnp', 'Insuffisance cardiaque.'],
    ],
    scores: [],
    differentiels: [
      ['insuffisance-cardiaque', 'Dyspnée, turgescence jugulaire.'],
      ['syndrome-nephrotique-adulte', 'Protéinurie > 3 g, hypoalbuminémie.'],
      ['cirrhose-hepatique', 'Ascite, ictère, hypertension portale.'],
      ['kwashiorkor', 'Enfant malnutri.'],
      ['pre-eclampsie-severe', 'Grossesse, HTA, protéinurie.'],
      ['hypothyroidie-adulte', 'Myxœdème, TSH élevée.'],
      ['thrombose-veineuse-profonde', 'Œdème unilatéral.'],
    ],
    etiologies:
      '## Causes principales\n- Insuffisance cardiaque (cardiomyopathies, valvulopathies), néphropathies (VIH, diabète, glomérulopathies), cirrhose, malnutrition, grossesse',
    principes: [
      [
        'Traitement de la cause',
        'Priorité.',
        '- Insuffisance cardiaque, syndrome néphrotique, cirrhose, malnutrition (renutrition, pas de diurétiques chez l’enfant malnutri), pré-éclampsie : voir les fiches correspondantes\n- Arrêt d’un médicament responsable',
      ],
      [
        'Mesures symptomatiques',
        'Réduire la surcharge.',
        '- Restriction sodée (< 5 g de sel/j)\n- **Furosémide** 20–80 mg/j (adapté à la fonction rénale) ; **spironolactone** si cirrhose ou insuffisance cardiaque\n- Surveillance du poids, de la kaliémie et de la créatinine ; bas de contention si insuffisance veineuse',
      ],
    ],
    molecules: [
      ['furosemide', 'premiere', 'Diurétique de l’anse'],
      ['spironolactone', 'alternative', 'Cirrhose, insuffisance cardiaque'],
      ['enalapril', 'adjuvant', 'Protéinurie, insuffisance cardiaque'],
    ],
    complications: [
      {
        nom: 'Œdème aigu du poumon',
        fiche: 'insuffisance-cardiaque',
        description: 'Surcharge.',
        traitement: '- Furosémide, oxygène',
        clinique: '- Dyspnée',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Troubles ioniques sous diurétiques',
        fiche: 'hyponatremie',
        description: 'Hyponatrémie, hypokaliémie.',
        traitement: '- Adapter les diurétiques',
        clinique: '- Fatigue, crampes',
        paraclinique: '- Ionogramme',
      },
      {
        nom: 'Thrombose',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Syndrome néphrotique.',
        traitement: '- Anticoagulation',
        clinique: '- Œdème asymétrique',
        paraclinique: '- Écho-Doppler',
      },
    ],
    evolution: '## Pronostic\n- Celui de la cause',
    urgences: ['oedeme-aigu-du-poumon'],
    symptomes: [
      ['Œdèmes', 'tres_frequent'],
      ['Œdème du visage', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Distension abdominale', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
      'ESC — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Bandelette urinaire, tension, poids, orientation', '- Dyspnée, protéinurie, grossesse, enfant'],
      hgr: ['- Bilan étiologique, diurétiques', ''],
      tert: ['- Cardiologie, néphrologie, hépatologie', ''],
    },
    alertes: { 'oedeme-aigu-du-poumon': 'Œdèmes avec dyspnée de décubitus et crépitants' },
    formes: [
      {
        nom: 'Œdèmes d’origine cardiaque',
        type: 'commune',
        description: 'Insuffisance cardiaque droite ou globale.',
        terrain: '- Cardiopathie',
        fonctionnels: '- Dyspnée',
        generaux: '',
        physiques: '- Turgescence jugulaire, hépatomégalie',
        paraclinique: '- Cardiomégalie, BNP élevé',
        etiologies: '- Cardiomyopathie, valvulopathie',
        syndromes: ['syndrome-d-insuffisance-cardiaque-droite'],
      },
      {
        nom: 'Œdèmes d’origine rénale',
        type: 'etiologique',
        description: 'Syndrome néphrotique.',
        terrain: '',
        fonctionnels: '- Urines mousseuses',
        generaux: '',
        physiques: '- Œdèmes du visage',
        paraclinique: '- Protéinurie massive',
        etiologies: '- Glomérulopathies, VIH',
        syndromes: ['syndrome-oedemateux'],
      },
      {
        nom: 'Anasarque',
        type: 'gravite',
        description: 'Épanchements des séreuses.',
        terrain: '',
        fonctionnels: '- Dyspnée',
        generaux: '',
        physiques: '- Ascite, épanchement pleural',
        paraclinique: '- Hypoalbuminémie profonde',
        etiologies: '',
        syndromes: ['syndrome-de-retention-hydrosodee'],
      },
    ],
  },

  // =================================================================== Coup de chaleur
  {
    ...MIG,
    slug: 'coup-de-chaleur',
    nom: 'Coup de chaleur',
    resume:
      'Hyperthermie > 40 °C avec troubles neurologiques (confusion, convulsions, coma) après un effort par forte chaleur ou chez une personne fragile en période de canicule : urgence vitale ; refroidissement immédiat (immersion en eau froide ou aspersion et ventilation), réhydratation prudente, pas d’antipyrétiques (inefficaces) ; éliminer un paludisme grave et une méningite ; surveiller rhabdomyolyse, insuffisance rénale et coagulopathie.',
    definition:
      'Défaillance aiguë de la thermorégulation avec température centrale > 40 °C et atteinte du système nerveux central, d’origine classique (chaleur ambiante) ou d’exercice.',
    physiopathologie:
      '## Mécanismes\n- Production ou absorption de chaleur dépassant les capacités d’élimination (sudation, vasodilatation), déshydratation\n- Lésions cellulaires directes, inflammation systémique : **rhabdomyolyse**, **insuffisance rénale**, **CIVD**, atteinte hépatique\n\n## Facteurs\n- Effort intense (militaires, sportifs, travailleurs, mineurs), forte chaleur humide\n- Âges extrêmes, maladies chroniques, obésité, alcool, déshydratation\n- Médicaments : anticholinergiques, neuroleptiques, diurétiques ; drogues (stimulants)',
    diagnostic:
      '## Clinique\n- **Température > 40 °C**, peau chaude (sèche ou en sueurs)\n- **Troubles neurologiques** : confusion, agitation, convulsions, coma\n- Tachycardie, hypotension, polypnée, vomissements, diarrhée\n\n## Éliminer (fièvres infectieuses)\n- **Paludisme grave** (TDR), **méningite**, sepsis, syndrome malin des neuroleptiques, intoxications\n\n## Examens\n- Glycémie, TDR paludisme, ionogramme, créatinine, **CPK**, bilan hépatique, hémostase, NFS, gaz du sang, bandelette (myoglobinurie)',
    examens: [
      ['premiere_intention', 'tdr-paludisme', 'Paludisme grave.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'ionogramme', 'Dysnatrémie, hyperkaliémie.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['gravite', 'cpk', 'Rhabdomyolyse.'],
      ['gravite', 'bilan-hepatique', 'Atteinte hépatique.'],
      ['gravite', 'hemostase', 'CIVD.'],
      ['deuxieme_intention', 'lcr', 'Méningite si doute.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-grave', 'TDR positif.'],
      ['meningite-bacterienne', 'Raideur de nuque, LCR.'],
      ['syndrome-malin-des-neuroleptiques', 'Neuroleptiques, rigidité.'],
      ['sepsis-et-choc-septique', 'Foyer infectieux.'],
      ['Thyrotoxicose', 'Goitre, TSH effondrée.'],
    ],
    etiologies:
      '## Circonstances\n- Effort par forte chaleur, canicule, personnes âgées isolées, enfants enfermés dans un véhicule',
    principes: [
      [
        'Refroidissement immédiat',
        'Priorité absolue.',
        '- Mettre à l’ombre, déshabiller\n- **Immersion en eau froide** (meilleure méthode chez le sujet jeune à l’effort) ou **aspersion d’eau tiède et ventilation**, linges mouillés, glace aux aisselles, aines et cou\n- Objectif : < 39 °C en 30 minutes, arrêter vers 38,5–39 °C\n- **Pas de paracétamol ni d’aspirine** (inefficaces, toxiques)',
      ],
      [
        'Réanimation',
        'Corriger les défaillances.',
        '- Voies aériennes, oxygène, PLS\n- **NaCl 0,9 %** ou Ringer lactate : remplissage prudent (500 mL à 1 L puis selon l’état)\n- Convulsions : **diazépam** ; hypoglycémie : glucose\n- Rhabdomyolyse : hydratation pour une diurèse ≥ 1–2 mL/kg/h ; dialyse si besoin',
      ],
      [
        'Prévention',
        'Éviter la récidive.',
        '- Hydratation, horaires adaptés, pauses à l’ombre, acclimatation, surveillance des personnes fragiles',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Réhydratation'],
      ['ringer-lactate', 'alternative', 'Réhydratation'],
      ['diazepam', 'premiere', 'Convulsions, agitation'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['oxygene', 'premiere', 'Hypoxémie'],
    ],
    complications: [
      {
        nom: 'Rhabdomyolyse et insuffisance rénale',
        fiche: 'insuffisance-renale-aigue',
        description: 'Coup de chaleur d’exercice.',
        traitement: '- Hydratation, dialyse',
        clinique: '- Urines foncées, oligurie',
        paraclinique: '- CPK, créatinine',
      },
      {
        nom: 'Coagulation intravasculaire disséminée',
        description: 'Formes graves.',
        traitement: '- Plasma, plaquettes',
        clinique: '- Saignements',
        paraclinique: '- Hémostase',
      },
      {
        nom: 'Séquelles neurologiques',
        description: 'Refroidissement tardif.',
        traitement: '- Rééducation',
        clinique: '- Syndrome cérébelleux',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée si le refroidissement est retardé ; bon pronostic si la température est abaissée dans les 30 premières minutes',
    urgences: ['paludisme-grave-urgence'],
    symptomes: [
      ['Hyperthermie', 'tres_frequent'],
      ['Troubles de la conscience', 'tres_frequent'],
      ['Convulsions', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Hypotension', 'frequent'],
      ['Urines foncées', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Refroidissement immédiat, perfusion, TDR paludisme, transfert',
        '- Troubles de conscience, convulsions',
      ],
      hgr: ['- Refroidissement, réanimation, bilan', '- Insuffisance rénale, CIVD'],
      tert: ['- Réanimation, dialyse', ''],
    },
    alertes: {
      'paludisme-grave-urgence': 'Hyperthermie avec troubles de conscience en zone d’endémie : faire un TDR',
    },
    formes: [
      {
        nom: 'Coup de chaleur d’exercice',
        type: 'commune',
        description: 'Sujet jeune à l’effort.',
        terrain: '- Travailleur, militaire, sportif',
        fonctionnels: '- Malaise, confusion',
        generaux: '- Température > 40 °C, sueurs',
        physiques: '- Tachycardie',
        paraclinique: '- CPK élevées',
        etiologies: '- Effort par forte chaleur',
        syndromes: ['syndrome-confusionnel'],
      },
      {
        nom: 'Coup de chaleur classique',
        type: 'terrain',
        description: 'Personne fragile.',
        terrain: '- Sujet âgé, enfant, maladie chronique',
        fonctionnels: '- Confusion',
        generaux: '- Peau sèche et brûlante',
        physiques: '- Déshydratation',
        paraclinique: '- Hypernatrémie',
        etiologies: '- Canicule',
        syndromes: ['syndrome-de-deshydratation-intracellulaire'],
      },
    ],
  },

  // =================================================================== Syncope et malaise
  {
    ...MIG,
    slug: 'syncope-et-malaise',
    nom: 'Syncope et malaise',
    resume:
      'Perte de connaissance brève avec retour rapide et complet à la normale : le plus souvent vasovagale (prodromes, station debout, émotion) ou orthostatique (déshydratation, médicaments) ; rechercher une syncope cardiaque (à l’effort, sans prodrome, palpitations, cardiopathie, ECG anormal) qui menace la vie ; glycémie et ECG systématiques ; éliminer hypoglycémie, épilepsie, hémorragie (GEU), anémie.',
    definition:
      'Perte de connaissance transitoire due à une hypoperfusion cérébrale globale, de début rapide, de courte durée, avec récupération spontanée et complète ; le « malaise » désigne des symptômes voisins sans perte de connaissance complète.',
    physiopathologie:
      '## Causes\n- **Réflexe (vasovagale)** : station debout prolongée, chaleur, douleur, émotion ; situationnelle (miction, toux)\n- **Hypotension orthostatique** : déshydratation (diarrhée, chaleur), hémorragie, antihypertenseurs, diurétiques, neuropathie diabétique, insuffisance surrénalienne\n- **Cardiaque** : troubles du rythme (bloc auriculo-ventriculaire, tachycardie ventriculaire), **rétrécissement aortique**, cardiomyopathie hypertrophique, **embolie pulmonaire**, tamponnade\n\n## Diagnostics différentiels\n- Hypoglycémie, crise d’épilepsie, AIT, intoxications, malaise psychogène',
    diagnostic:
      '## Interrogatoire (témoins)\n- Circonstances (debout, chaleur, effort, couché), prodromes (sueurs, nausées, vision trouble), durée, récupération\n- **Signes d’alarme** : syncope à l’**effort** ou en position couchée, **sans prodrome**, avec **palpitations** ou douleur thoracique, cardiopathie connue, antécédents familiaux de mort subite, traumatisme grave\n- Mouvements tonico-cloniques prolongés, morsure latérale de langue, confusion prolongée : plutôt épilepsie\n\n## Examen\n- Tension couchée puis debout (hypotension orthostatique : baisse ≥ 20/10 mmHg), auscultation cardiaque (souffle), signes de saignement, β-hCG chez la femme\n\n## Examens\n- **ECG** et **glycémie** systématiques\n- NFS, ionogramme ; échocardiographie, Holter si suspicion cardiaque',
    examens: [
      ['premiere_intention', 'ecg', 'Trouble du rythme ou de conduction.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'nfs', 'Anémie, hémorragie.'],
      ['premiere_intention', 'beta-hcg', 'Grossesse extra-utérine.'],
      ['premiere_intention', 'ionogramme', 'Troubles ioniques.'],
      ['deuxieme_intention', 'echocardiographie', 'Cardiopathie, rétrécissement aortique.'],
      ['etiologique', 'troponine', 'Syndrome coronarien.'],
      ['etiologique', 'd-dimeres', 'Embolie pulmonaire.'],
    ],
    scores: [],
    differentiels: [
      ['hypoglycemie-adulte', 'Glycémie basse, diabétique traité.'],
      ['premiere-crise-convulsive-adulte', 'Convulsions, confusion post-critique.'],
      ['accident-ischemique-transitoire', 'Déficit focal sans perte de connaissance.'],
      ['grossesse-extra-uterine', 'Femme, douleur pelvienne, β-hCG positive.'],
      ['embolie-pulmonaire', 'Dyspnée, tachycardie.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Vasovagale, déshydratation (chaleur, diarrhée), antihypertenseurs, anémie, troubles du rythme, rétrécissement aortique',
    principes: [
      [
        'Prise en charge immédiate',
        'Sécuriser.',
        '- Position allongée, jambes surélevées, glycémie capillaire\n- Correction d’une hypoglycémie, réhydratation si déshydratation, recherche d’une hémorragie',
      ],
      [
        'Syncope réflexe ou orthostatique',
        'Rassurer et prévenir.',
        '- Explications, hydratation et apport de sel suffisants, manœuvres de contre-pression (croiser les jambes, serrer les poings) dès les prodromes\n- Revoir les traitements hypotenseurs et diurétiques',
      ],
      [
        'Syncope à haut risque',
        'Hospitaliser.',
        '- Signes d’alarme, ECG anormal, cardiopathie : surveillance, échocardiographie, Holter, avis cardiologique\n- Bloc auriculo-ventriculaire : atropine, stimulation (pacemaker) ; traitement de la cause',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Déshydratation, hypotension'],
      ['atropine', 'alternative', 'Bradycardie symptomatique'],
    ],
    complications: [
      {
        nom: 'Traumatismes',
        fiche: 'traumatisme-cranien',
        description: 'Chute.',
        traitement: '- Soins adaptés',
        clinique: '- Plaie, fracture',
        paraclinique: '',
      },
      {
        nom: 'Mort subite',
        description: 'Syncope cardiaque méconnue.',
        traitement: '- Prise en charge cardiologique',
        clinique: '',
        paraclinique: '- ECG',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent pour les syncopes réflexes ; mortalité élevée des syncopes cardiaques non traitées',
    urgences: [],
    symptomes: [
      ['Syncope', 'tres_frequent'],
      ['Sueurs', 'frequent'],
      ['Palpitations', 'occasionnel'],
      ['Vertiges', 'frequent'],
      ['Pâleur', 'frequent'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Glycémie, tension couchée-debout, réhydratation, conseils',
        '- Syncope d’effort, sans prodrome, palpitations, ECG anormal',
      ],
      hgr: ['- ECG, bilan, surveillance', '- Holter, échocardiographie'],
      tert: ['- Cardiologie, stimulateur cardiaque', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Syncope vasovagale',
        type: 'commune',
        description: 'Réflexe.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Prodromes : sueurs, nausées, vision trouble',
        generaux: '- Pâleur',
        physiques: '- Bradycardie transitoire',
        paraclinique: '- ECG normal',
        etiologies: '- Station debout, chaleur, émotion',
        syndromes: [],
      },
      {
        nom: 'Hypotension orthostatique',
        type: 'etiologique',
        description: 'Au lever.',
        terrain: '- Sujet âgé, diabétique, déshydraté',
        fonctionnels: '- Malaise au lever',
        generaux: '',
        physiques: '- Chute tensionnelle debout',
        paraclinique: '',
        etiologies: '- Déshydratation, médicaments',
        syndromes: [],
      },
      {
        nom: 'Syncope cardiaque',
        type: 'gravite',
        description: 'Risque de mort subite.',
        terrain: '- Cardiopathie',
        fonctionnels: '- Syncope d’effort, palpitations',
        generaux: '',
        physiques: '- Souffle, bradycardie',
        paraclinique: '- ECG anormal',
        etiologies: '- Trouble du rythme, rétrécissement aortique',
        syndromes: [],
      },
    ],
  },
];
