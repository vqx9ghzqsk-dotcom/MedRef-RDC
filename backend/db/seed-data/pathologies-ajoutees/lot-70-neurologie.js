'use strict';

/**
 * Lot 70 (phase 2, neurologie) — neuropathie diabétique, algie vasculaire de la face, céphalée de
 * tension, hydrocéphalie à pression normale, séquelles de poliomyélite. Rédigé par IA (ADA, Harrison,
 * OMS) : à valider.
 */

const NEU = { departement: 'neuropsychiatrie', specialite: 'Neurologie' };
const DEM = { departement: 'neuropsychiatrie', specialite: 'Démences et neurogériatrie' };

module.exports = [
  // =================================================================== Neuropathie diabétique
  {
    ...NEU,
    slug: 'neuropathie-diabetique',
    nom: 'Neuropathie diabétique',
    resume:
      'Complication la plus fréquente du diabète, souvent présente dès le diagnostic du diabète de type 2 : polyneuropathie sensitive distale symétrique (paresthésies, brûlures, douleurs nocturnes des pieds, perte de la sensibilité protectrice exposant aux plaies indolores, au mal perforant et à l’amputation), neuropathie autonome (hypotension orthostatique, gastroparésie, diarrhée, troubles de l’érection, vessie neurologique, hypoglycémies non ressenties), mononeuropathies (paralysie du III, canal carpien), amyotrophie diabétique ; dépistage annuel par le monofilament et le diapason ; équilibre glycémique, contrôle tensionnel et lipidique, éducation au soin des pieds, chaussures adaptées, traitement de la douleur (amitriptyline, duloxétine, prégabaline, gabapentine) ; éliminer carence en B12 (metformine), alcool, VIH.',
    definition:
      'Atteinte des nerfs périphériques et autonomes liée au diabète, après exclusion des autres causes de neuropathie.',
    physiopathologie:
      '## Mécanismes\n- **Hyperglycémie chronique** : voie des polyols, produits de glycation, stress oxydatif, microangiopathie des vasa nervorum\n- Facteurs : ancienneté et mauvais équilibre du diabète, HTA, dyslipidémie, tabac, alcool, grande taille, **carence en B12** (metformine)\n\n## Formes\n- **Polyneuropathie distale symétrique** (la plus fréquente)\n- **Neuropathie autonome** (cardiovasculaire, digestive, urogénitale, sudorale)\n- **Mononeuropathies** (III, VI, VII, nerf médian), **radiculoplexopathie** lombaire (amyotrophie diabétique)',
    diagnostic:
      '## Clinique\n- **Paresthésies**, brûlures, douleurs nocturnes des pieds, sensation de marcher sur du coton\n- **Hypoesthésie** en chaussettes, **abolition des réflexes achilléens**, perte de la sensibilité vibratoire\n- Pieds secs, **déformations** (orteils en griffe), **mal perforant plantaire**, pied de Charcot\n- **Dysautonomie** : hypotension orthostatique, tachycardie de repos, gastroparésie (vomissements), diarrhée nocturne, troubles de l’érection, rétention urinaire\n\n## Dépistage (au diagnostic du type 2, puis annuel)\n- **Monofilament 10 g**, **diapason**, réflexes, inspection des pieds, pouls pédieux\n- TA couchée-debout\n\n## Bilan\n- **HbA1c**, **vitamine B12** (sous metformine), créatinine, microalbuminurie, TSH ; test VIH, alcool',
    examens: [
      ['premiere_intention', 'test-monofilament', 'Sensibilité protectrice.'],
      ['premiere_intention', 'hba1c', 'Équilibre glycémique.'],
      ['etiologique', 'vitamine-b12-folates', 'Carence sous metformine.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['gravite', 'microalbuminurie', 'Microangiopathie associée.'],
      ['gravite', 'creatinine', 'Néphropathie.'],
      ['deuxieme_intention', 'electromyogramme', 'Forme atypique.'],
      ['etiologique', 'tdr-vih', 'Neuropathie du VIH.'],
    ],
    scores: [],
    differentiels: [
      ['neuropathie-alcoolique', 'Alcool, carences.'],
      ['neuropathie-associee-au-vih', 'Polyneuropathie du VIH.'],
      ['anemie-megaloblastique', 'Carence en B12.'],
      ['neuropathie-lepreuse', 'Taches hypopigmentées, nerfs hypertrophiés.'],
      ['syndrome-canal-carpien', 'Mononeuropathie du médian.'],
      ['radiculopathies', 'Douleur radiculaire.'],
    ],
    etiologies:
      '## Facteurs\n- Diabète ancien et déséquilibré, HTA, dyslipidémie, tabac, alcool, carence en B12',
    principes: [
      [
        'Traitement de fond',
        'Équilibre métabolique.',
        '- **Équilibre glycémique** (HbA1c individualisée, souvent < 7 %), **tension** < 130/80, **statine**, arrêt du tabac et de l’alcool\n- **Vitamine B12** si carence (metformine au long cours)',
      ],
      [
        'Pied diabétique',
        'Prévenir les plaies.',
        '- **Éducation** : inspection quotidienne des pieds, pas de marche pieds nus, ne pas chauffer les pieds, chaussures adaptées, soins des ongles et des callosités\n- Pied à risque : podologie, semelles, consultation rapprochée',
      ],
      [
        'Douleur et dysautonomie',
        'Symptomatique.',
        '- Douleur : **amitriptyline** 10–75 mg le soir, **duloxétine** 60 mg, **prégabaline**, **gabapentine** ; capsaïcine locale\n- Hypotension orthostatique : lever progressif, bas de contention ; gastroparésie : métoclopramide ou dompéridone, repas fractionnés\n- Troubles de l’érection : prise en charge spécialisée',
      ],
    ],
    molecules: [
      ['amitriptyline', 'premiere', 'Douleur neuropathique'],
      ['duloxetine', 'premiere', 'Douleur neuropathique'],
      ['pregabaline', 'alternative', 'Douleur neuropathique'],
      ['gabapentine', 'alternative', 'Douleur neuropathique'],
      ['capsaicine', 'adjuvant', 'Douleur localisée'],
      ['cyanocobalamine-vitamine-b12', 'adjuvant', 'Carence sous metformine'],
      ['metformine', 'premiere', 'Équilibre glycémique'],
      ['insuline-nph', 'alternative', 'Équilibre glycémique'],
      ['metoclopramide', 'adjuvant', 'Gastroparésie'],
    ],
    complications: [
      {
        nom: 'Pied diabétique et amputation',
        fiche: 'pied-diabetique',
        description: 'Plaies indolores.',
        traitement: '- Décharge, soins, antibiotiques',
        clinique: '- Mal perforant, infection',
        paraclinique: '',
      },
      {
        nom: 'Hypoglycémies non ressenties',
        fiche: 'hypoglycemie-adulte',
        description: 'Neuropathie autonome.',
        traitement: '- Adaptation du traitement',
        clinique: '- Malaise brutal',
        paraclinique: '',
      },
      {
        nom: 'Chutes',
        description: 'Hypotension orthostatique, ataxie sensitive.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Ostéoarthropathie de Charcot',
        description: 'Pied déformé.',
        traitement: '- Décharge, botte',
        clinique: '- Pied chaud, gonflé, déformé',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Progression lente, ralentie par l’équilibre glycémique ; les plaies et amputations sont évitables par l’éducation et le dépistage',
    urgences: [],
    symptomes: [
      ['Paresthésies', 'tres_frequent'],
      ['Troubles sensitifs', 'tres_frequent'],
      ['Ulcère cutané', 'occasionnel'],
      ['Vertiges', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'ADA — Standards of Care in Diabetes',
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Examen des pieds et monofilament annuels, éducation, amitriptyline',
        '- Plaie du pied, pied chaud et déformé',
      ],
      hgr: ['- Bilan, prise en charge des plaies', ''],
      tert: ['- Podologie, chirurgie du pied, EMG', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Polyneuropathie sensitive distale',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Diabète ancien',
        fonctionnels: '- Brûlures des pieds',
        generaux: '',
        physiques: '- Monofilament non perçu',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Neuropathie autonome',
        type: 'gravite',
        description: 'Dysautonomie.',
        terrain: '- Diabète ancien mal équilibré',
        fonctionnels: '- Malaises au lever, vomissements, diarrhée',
        generaux: '',
        physiques: '- Hypotension orthostatique',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Mononeuropathie crânienne',
        type: 'topographique',
        description: 'Paralysie du III.',
        terrain: '- Diabétique âgé',
        fonctionnels: '- Diplopie, douleur orbitaire',
        generaux: '',
        physiques: '- Ptosis, pupille épargnée',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Algie vasculaire de la face
  {
    ...NEU,
    slug: 'algie-vasculaire-de-la-face',
    nom: 'Algie vasculaire de la face',
    resume:
      'Céphalée primaire rare mais extrêmement douloureuse, touchant surtout l’homme jeune fumeur : crises strictement unilatérales, orbitaires ou péri-orbitaires, d’une intensité atroce, durant 15 à 180 minutes, une à huit fois par jour, souvent à heure fixe et la nuit, avec agitation (le patient ne tient pas en place) et signes autonomes du même côté (larmoiement, œil rouge, écoulement nasal, ptosis, myosis, sudation du front) ; évolution par périodes de quelques semaines (« salves ») séparées de rémissions ; crise : oxygène à haut débit au masque (12–15 L/min pendant 15 min) et sumatriptan sous-cutané ; traitement de fond pendant la période : vérapamil (surveillance ECG), corticoïdes courts en attente ; IRM pour éliminer une cause secondaire ; alcool déclencheur pendant les périodes.',
    definition:
      'Céphalée trigémino-autonomique primaire caractérisée par des crises unilatérales sévères, brèves et répétées, associées à des signes autonomes ipsilatéraux et évoluant par périodes.',
    physiopathologie:
      '## Mécanismes\n- Activation de l’**hypothalamus** postérieur (rythmicité circadienne et circannuelle) et du **réflexe trigémino-autonomique**\n- Facteurs : sexe masculin, **tabac**, antécédents familiaux ; **alcool** déclencheur pendant les périodes',
    diagnostic:
      '## Critères\n- Crises **unilatérales**, orbitaires, sus-orbitaires ou temporales, **très sévères**\n- Durée **15–180 min**, fréquence de 1 tous les 2 jours à 8 par jour, souvent nocturnes à heure fixe\n- **Agitation** pendant la crise\n- **Signes autonomes** ipsilatéraux : larmoiement, injection conjonctivale, rhinorrhée ou obstruction nasale, ptosis, myosis, œdème palpébral, sudation\n- Évolution **épisodique** (périodes de 2–12 semaines) ou chronique\n\n## Examens\n- **IRM cérébrale** (au moins une fois) : éliminer une lésion (hypophyse, sinus caverneux, dissection carotidienne)\n- **ECG** avant vérapamil',
    examens: [
      ['deuxieme_intention', 'irm-cerebrale', 'Élimine une cause secondaire.'],
      ['premiere_intention', 'ecg', 'Avant vérapamil.'],
      ['etiologique', 'tonometrie', 'Glaucome aigu.'],
    ],
    scores: [],
    differentiels: [
      ['nevralgie-du-trijumeau', 'Décharges de quelques secondes, zone gâchette.'],
      ['cephalees-migraine', 'Crise de 4–72 h, besoin de repos.'],
      ['baisse-brutale-acuite-visuelle', 'Glaucome aigu : œil dur, baisse de vision.'],
      ['sinusites-adulte', 'Douleur continue, rhinorrhée purulente.'],
      ['Hémicrânie paroxystique', 'Crises plus courtes et fréquentes, sensibles à l’indométacine.'],
    ],
    etiologies: '## Facteurs\n- Primitive ; tabac, alcool en période',
    principes: [
      [
        'Traitement de crise',
        'Agir vite.',
        '- **Oxygène** à 100 % au masque à haute concentration, **12–15 L/min pendant 15–20 min**\n- **Sumatriptan** 6 mg sous-cutané (ou spray nasal de zolmitriptan)\n- Les antalgiques oraux usuels sont inefficaces (délai trop long)',
      ],
      [
        'Traitement de fond',
        'Pendant la période.',
        '- **Vérapamil** 240 mg/j, augmenté progressivement sous surveillance **ECG** (blocs)\n- **Prednisolone** en cure courte (1 mg/kg pendant 5 jours puis décroissance) en attendant l’effet du vérapamil\n- Alternatives : lithium, topiramate ; infiltration du nerf grand occipital en centre spécialisé',
      ],
      [
        'Mesures associées',
        'Hygiène de vie.',
        '- Éviter l’**alcool** pendant les périodes, arrêt du tabac, régularité du sommeil\n- Soutien (risque suicidaire lors des formes chroniques)',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'Crise'],
      ['sumatriptan', 'premiere', 'Crise (sous-cutané)'],
      ['zolmitriptan', 'alternative', 'Crise (voie nasale)'],
      ['verapamil', 'premiere', 'Traitement de fond'],
      ['prednisolone', 'alternative', 'Traitement de transition'],
      ['lithium', 'alternative', 'Forme chronique'],
      ['topiramate', 'alternative', 'Traitement de fond'],
    ],
    complications: [
      {
        nom: 'Dépression et risque suicidaire',
        fiche: 'depression',
        description: 'Douleur extrême répétée.',
        traitement: '- Soutien, traitement',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Troubles conductifs sous vérapamil',
        description: 'Bloc auriculo-ventriculaire.',
        traitement: '- Réduction des doses',
        clinique: '- Bradycardie',
        paraclinique: '- ECG',
      },
      {
        nom: 'Abus de triptans',
        description: 'Utilisation excessive.',
        traitement: '- Limiter à 2 injections par jour',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Évolution par périodes sur des années ; 10–15 % de formes chroniques ; tendance à l’atténuation avec l’âge',
    urgences: [],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Douleur oculaire', 'tres_frequent'],
      ['Larmoiement', 'tres_frequent'],
      ['Yeux rouges', 'frequent'],
      ['Rhinorrhée', 'frequent'],
      ['Ptosis', 'occasionnel'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Reconnaître, oxygène si disponible, orienter', ''],
      hgr: ['- Oxygène, sumatriptan, vérapamil avec ECG', ''],
      tert: ['- IRM, neurologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme épisodique',
        type: 'commune',
        description: 'Périodes de semaines.',
        terrain: '- Homme jeune fumeur',
        fonctionnels: '- Crises orbitaires nocturnes',
        generaux: '',
        physiques: '- Larmoiement, rhinorrhée unilatéraux',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme chronique',
        type: 'evolutive',
        description: 'Sans rémission > 3 mois.',
        terrain: '',
        fonctionnels: '- Crises quotidiennes',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Céphalée de tension
  {
    ...NEU,
    slug: 'cephalee-de-tension',
    nom: 'Céphalée de tension',
    resume:
      'Céphalée primaire la plus fréquente : douleur bilatérale, en étau ou en casque, d’intensité légère à modérée, non pulsatile, non aggravée par l’activité physique, sans nausées ni vomissements (photophobie ou phonophobie isolée possible), durant de 30 minutes à plusieurs jours ; épisodique ou chronique (≥ 15 jours par mois), souvent associée au stress, à l’anxiété, à la dépression, aux mauvaises postures et au manque de sommeil ; examen normal ; rechercher les signes d’alerte (début brutal, fièvre, déficit, aggravation progressive, après 50 ans, VIH) et la céphalée par abus d’antalgiques ; traitement de crise par paracétamol ou ibuprofène (moins de 10 jours par mois), amitriptyline en traitement de fond des formes chroniques, gestion du stress, activité physique, relaxation.',
    definition:
      'Céphalée primaire bilatérale, en pression ou serrement, d’intensité légère à modérée, sans caractère pulsatile ni signes migraineux marqués.',
    physiopathologie:
      '## Mécanismes\n- Sensibilisation des nocicepteurs péricrâniens (muscles du cou et du scalp), puis sensibilisation centrale dans les formes chroniques\n\n## Facteurs\n- **Stress**, **anxiété**, **dépression**, troubles du sommeil, postures prolongées, faim, déshydratation\n- **Abus d’antalgiques** (céphalée chronique quotidienne)',
    diagnostic:
      '## Clinique\n- Douleur **bilatérale**, **en étau**, pression, non pulsatile\n- Intensité **légère à modérée**, **non aggravée** par l’effort\n- Pas de nausées ni vomissements ; photophobie **ou** phonophobie possible\n- Sensibilité des muscles péricrâniens à la palpation ; **examen neurologique normal**\n\n## Signes d’alerte (imagerie, avis)\n- Début **brutal** (coup de tonnerre), **fièvre**, raideur de nuque, **déficit** neurologique, **convulsions**, œdème papillaire\n- Céphalée **nouvelle après 50 ans**, aggravation progressive, réveil nocturne avec vomissements, **VIH** ou cancer, grossesse et post-partum, HTA sévère\n\n## Évaluation\n- Calendrier des céphalées, consommation d’antalgiques, dépistage de la dépression et de l’anxiété ; mesure de la tension',
    examens: [
      ['premiere_intention', 'fond-d-oeil', 'Œdème papillaire si doute.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Signes d’alerte seulement.'],
    ],
    scores: [],
    differentiels: [
      ['cephalees-migraine', 'Douleur pulsatile unilatérale, nausées, aggravée par l’effort.'],
      ['hypertension-intracranienne', 'Céphalées matinales, vomissements, œdème papillaire.'],
      ['meningite-bacterienne', 'Fièvre, raideur de nuque.'],
      ['meningite-a-cryptocoque', 'Céphalées progressives chez le VIH.'],
      ['hypertension-arterielle', 'HTA sévère.'],
      ['sinusites-adulte', 'Douleur faciale, rhinorrhée.'],
    ],
    etiologies: '## Facteurs\n- Stress, anxiété, dépression, sommeil, posture, abus d’antalgiques',
    principes: [
      [
        'Traitement de crise',
        'Simple et limité.',
        '- **Paracétamol** 1 g ou **ibuprofène** 400 mg, aspirine\n- Limiter les antalgiques à **moins de 10 jours par mois** (céphalée par abus)\n- Éviter codéine et tramadol',
      ],
      [
        'Traitement de fond',
        'Forme fréquente ou chronique.',
        '- **Amitriptyline** 10–25 mg le soir (jusqu’à 50–75 mg), sur plusieurs mois\n- Sevrage des antalgiques en cas d’abus\n- Traitement de la dépression ou de l’anxiété associée',
      ],
      [
        'Mesures non médicamenteuses',
        'Essentielles.',
        '- **Gestion du stress**, relaxation, **activité physique** régulière, sommeil, hydratation, pauses et posture au travail\n- Kinésithérapie cervicale, thérapies cognitivo-comportementales',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Crise'],
      ['ibuprofene', 'premiere', 'Crise'],
      ['acide-acetylsalicylique', 'alternative', 'Crise'],
      ['amitriptyline', 'premiere', 'Traitement de fond'],
      ['cafeine', 'adjuvant', 'Association aux antalgiques'],
    ],
    complications: [
      {
        nom: 'Céphalée par abus d’antalgiques',
        description: 'Prises > 10–15 jours par mois.',
        traitement: '- Sevrage, traitement de fond',
        clinique: '- Céphalée quotidienne',
        paraclinique: '',
      },
      {
        nom: 'Dépression et anxiété',
        fiche: 'depression',
        description: 'Comorbidité.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bénigne ; formes chroniques invalidantes améliorées par le traitement de fond et les mesures d’hygiène de vie',
    urgences: [],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Troubles du sommeil', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Diagnostic clinique, antalgiques, conseils, amitriptyline', '- Signes d’alerte'],
      hgr: ['- Fond d’œil, imagerie si alerte', ''],
      tert: ['- Neurologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Céphalée de tension épisodique',
        type: 'commune',
        description: 'Moins de 15 jours par mois.',
        terrain: '- Adulte, stress',
        fonctionnels: '- Douleur en étau',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Céphalée de tension chronique',
        type: 'evolutive',
        description: '15 jours ou plus par mois.',
        terrain: '- Dépression, abus d’antalgiques',
        fonctionnels: '- Céphalée quasi quotidienne',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hydrocéphalie à pression normale
  {
    ...DEM,
    slug: 'hydrocephalie-a-pression-normale',
    nom: 'Hydrocéphalie à pression normale',
    resume:
      'Dilatation des ventricules cérébraux avec une pression du LCR normale ou peu élevée, chez le sujet de plus de 60 ans, cause rare mais curable de troubles de la marche et de démence : triade associant troubles de la marche (marche à petits pas, élargie, « aimantée » au sol, chutes), troubles cognitifs sous-corticaux (lenteur, apathie, troubles de l’attention et de la mémoire) et troubles urinaires (urgences, incontinence) ; idiopathique ou secondaire (après méningite, hémorragie méningée, traumatisme crânien) ; scanner ou IRM : dilatation ventriculaire disproportionnée par rapport à l’atrophie ; test de soustraction du LCR (ponction lombaire évacuatrice de 30–50 mL avec évaluation de la marche avant et après) ; dérivation ventriculo-péritonéale chez les répondeurs ; à distinguer de la maladie d’Alzheimer et de la maladie de Parkinson.',
    definition:
      'Hydrocéphalie communicante chronique de l’adulte avec pression du LCR normale ou intermittente élevée, associant troubles de la marche, troubles cognitifs et troubles urinaires.',
    physiopathologie:
      '## Mécanisme\n- Défaut de **résorption du LCR** (granulations arachnoïdiennes) → dilatation ventriculaire → étirement des fibres périventriculaires (commande de la marche, de la vessie, circuits frontaux)\n\n## Causes\n- **Idiopathique** (sujet âgé, HTA, diabète)\n- **Secondaire** : séquelle de **méningite** (bactérienne, tuberculeuse, cryptococcique), **hémorragie méningée**, **traumatisme crânien**, chirurgie',
    diagnostic:
      '## Clinique\n- **Troubles de la marche** en premier : petits pas, élargissement du polygone, difficulté au demi-tour, pieds « collés au sol », chutes\n- **Troubles cognitifs** : lenteur, apathie, troubles de l’attention et des fonctions exécutives\n- **Troubles urinaires** : urgences mictionnelles, incontinence\n- Pas de tremblement de repos ni de rigidité marquée\n\n## Examens\n- **Scanner** ou **IRM** cérébrale : dilatation ventriculaire (index d’Evans > 0,3), sillons hauts serrés\n- **Test de soustraction** (ponction lombaire de 30–50 mL) : amélioration de la marche à 24–72 h = bon facteur prédictif\n- Bilan des démences curables : TSH, vitamine B12, sérologies syphilis et VIH, glycémie, ionogramme',
    examens: [
      ['confirmation', 'scanner-cerebral', 'Dilatation ventriculaire.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Signes en faveur, diagnostic différentiel.'],
      ['confirmation', 'lcr', 'Test de soustraction, pression normale.'],
      ['etiologique', 'vitamine-b12-folates', 'Cause curable de démence.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
      ['etiologique', 'tdr-vih', 'Démence du VIH.'],
    ],
    scores: [],
    differentiels: [
      ['maladie-d-alzheimer', 'Troubles de la mémoire au premier plan, marche normale au début.'],
      ['Maladie de Parkinson', 'Tremblement de repos, rigidité, réponse à la lévodopa.'],
      ['Démence vasculaire', 'Antécédents d’AVC, lésions de la substance blanche.'],
      ['myelopathies', 'Syndrome pyramidal, niveau sensitif.'],
      ['neurosyphilis', 'Démence et troubles de la marche.'],
    ],
    etiologies:
      '## Causes\n- Idiopathique ; séquelles de méningite, d’hémorragie méningée, de traumatisme crânien',
    principes: [
      [
        'Sélection',
        'Identifier les répondeurs.',
        '- Test de soustraction positif, troubles de la marche au premier plan, évolution récente (< 2 ans)\n- Évaluation de la marche chronométrée avant et après ponction',
      ],
      [
        'Chirurgie',
        'Dérivation.',
        '- **Dérivation ventriculo-péritonéale** (valve réglable de préférence)\n- Surveillance : infection, obstruction, hématome sous-dural (sur-drainage)',
      ],
      [
        'Si non opérable',
        'Mesures palliatives.',
        '- Ponctions lombaires répétées, acétazolamide (efficacité limitée)\n- Kinésithérapie, prévention des chutes, prise en charge de l’incontinence, aide aux aidants',
      ],
    ],
    molecules: [
      ['acetazolamide', 'alternative', 'Patient non opérable (efficacité limitée)'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie de la dérivation'],
    ],
    complications: [
      {
        nom: 'Chutes et fractures',
        fiche: 'fracture-col-du-femur',
        description: 'Troubles de la marche.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Infection de dérivation',
        fiche: 'meningite-bacterienne',
        description: 'Après chirurgie.',
        traitement: '- Antibiotiques, ablation',
        clinique: '- Fièvre',
        paraclinique: '- LCR',
      },
      {
        nom: 'Hématome sous-dural',
        description: 'Sur-drainage.',
        traitement: '- Réglage de la valve, chirurgie',
        clinique: '- Céphalées',
        paraclinique: '- Scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration de la marche chez 60–80 % des patients bien sélectionnés ; troubles cognitifs moins réversibles',
    urgences: [],
    symptomes: [
      ['Troubles de la marche', 'tres_frequent'],
      ['Troubles de la mémoire', 'frequent'],
      ['Incontinence urinaire', 'frequent'],
      ['Désorientation', 'occasionnel'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: ['- Repérer la triade chez le sujet âgé, orienter', ''],
      hgr: ['- Scanner, ponction lombaire', ''],
      tert: ['- Test de soustraction, dérivation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme idiopathique',
        type: 'commune',
        description: 'Sujet âgé.',
        terrain: '- Plus de 60 ans',
        fonctionnels: '- Marche à petits pas',
        generaux: '',
        physiques: '- Triade',
        paraclinique: '- Dilatation ventriculaire',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme secondaire',
        type: 'etiologique',
        description: 'Après méningite ou hémorragie.',
        terrain: '- Antécédent de méningite tuberculeuse',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Séquelles de poliomyélite
  {
    ...NEU,
    slug: 'sequelles-de-poliomyelite',
    nom: 'Séquelles de poliomyélite',
    resume:
      'Paralysies flasques définitives et asymétriques laissées par une poliomyélite aiguë (virus sauvage ou dérivé du vaccin oral, encore circulant en RDC), surtout aux membres inférieurs : amyotrophie, raccourcissement du membre, déformations (pied équin, genou en flessum ou recurvatum, hanche en flexion, scoliose), troubles de la marche, sensibilité normale ; syndrome post-polio des décennies plus tard (nouvelle faiblesse, fatigue, douleurs) ; prise en charge par la rééducation, les orthèses (attelles cruro-jambo-pédieuses), les aides techniques (cannes, béquilles, tricycles, fauteuils), la chirurgie orthopédique (allongements tendineux, ostéotomies, arthrodèses), l’inclusion scolaire et professionnelle ; prévention par la vaccination complète (VPO et VPI) et la surveillance des paralysies flasques aiguës.',
    definition:
      'Conséquences motrices et orthopédiques durables d’une poliomyélite antérieure aiguë, résultant de la destruction des motoneurones de la corne antérieure.',
    physiopathologie:
      '## Mécanismes\n- Destruction des **motoneurones** de la corne antérieure → paralysie flasque définitive des muscles dénervés\n- Croissance : **déséquilibres musculaires** → déformations, **raccourcissement** du membre, scoliose\n\n## Syndrome post-polio\n- Épuisement des motoneurones restants (unités motrices géantes) des décennies après → nouvelle faiblesse, fatigue, douleurs',
    diagnostic:
      '## Clinique\n- Antécédent de paralysie aiguë fébrile dans l’enfance\n- **Paralysie flasque** asymétrique, **amyotrophie**, **aréflexie**, **sensibilité normale**\n- **Déformations** : pied équin ou talus, genou en flessum ou recurvatum, flexion de hanche, inégalité de longueur, **scoliose**\n- Marche avec appui de la main sur la cuisse, déplacement à quatre pattes\n- Syndrome post-polio : nouvelle faiblesse, fatigue, douleurs, intolérance au froid, troubles respiratoires\n\n## Examens\n- **Radiographies** (déformations, scoliose, ostéoporose), spirométrie si scoliose ou atteinte respiratoire\n- Électromyogramme en cas de doute',
    examens: [
      ['premiere_intention', 'radiographie-osseuse', 'Déformations, scoliose.'],
      ['gravite', 'spirometrie', 'Atteinte respiratoire, scoliose.'],
      ['deuxieme_intention', 'electromyogramme', 'Atteinte de la corne antérieure.'],
    ],
    scores: [],
    differentiels: [
      ['paralysie-cerebrale', 'Paralysie spastique, réflexes vifs.'],
      ['konzo', 'Paraparésie spastique symétrique.'],
      ['pied-bot-congenital', 'Déformation présente à la naissance.'],
      ['lesions-du-plexus-brachial', 'Paralysie obstétricale du membre supérieur.'],
      ['Paralysie sciatique post-injection', 'Après injection fessière.'],
    ],
    etiologies: '## Cause\n- Poliovirus sauvage ou dérivé du vaccin (VPO)',
    principes: [
      [
        'Rééducation et appareillage',
        'Autonomie.',
        '- **Kinésithérapie** : renforcement des muscles restants, étirements, prévention des rétractions\n- **Orthèses** (attelles cruro-jambo-pédieuses, chaussures orthopédiques, compensation de l’inégalité)\n- Aides techniques : cannes, béquilles, tricycles, fauteuils roulants',
      ],
      [
        'Chirurgie orthopédique',
        'Corriger les déformations.',
        '- Allongements tendineux, transferts tendineux, ostéotomies, arthrodèses, épiphysiodèse\n- Correction de la scoliose en centre spécialisé',
      ],
      [
        'Inclusion et prévention',
        'Société.',
        '- Scolarisation, formation professionnelle, lutte contre la stigmatisation\n- Syndrome post-polio : économie d’effort, adaptation des activités, prise en charge respiratoire\n- **Vaccination** complète (VPO, VPI) et **surveillance des paralysies flasques aiguës**',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleurs'],
      ['ibuprofene', 'alternative', 'Douleurs articulaires'],
      ['cholecalciferol-vitamine-d3', 'adjuvant', 'Ostéoporose du membre paralysé'],
    ],
    complications: [
      {
        nom: 'Déformations et scoliose',
        description: 'Déséquilibre musculaire.',
        traitement: '- Orthèses, chirurgie',
        clinique: '',
        paraclinique: '- Radiographies',
      },
      {
        nom: 'Syndrome post-polio',
        description: 'Décennies après.',
        traitement: '- Adaptation, rééducation',
        clinique: '- Nouvelle faiblesse, fatigue',
        paraclinique: '',
      },
      {
        nom: 'Fractures',
        description: 'Ostéoporose du membre paralysé.',
        traitement: '- Orthopédie',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance respiratoire',
        description: 'Scoliose, atteinte des muscles respiratoires.',
        traitement: '- Ventilation',
        clinique: '- Dyspnée',
        paraclinique: '- Spirométrie',
      },
    ],
    evolution:
      '## Pronostic\n- Paralysie définitive ; autonomie souvent bonne avec appareillage et chirurgie',
    urgences: [],
    symptomes: [
      ['Paralysie flasque', 'tres_frequent'],
      ['Atrophie musculaire', 'tres_frequent'],
      ['Troubles de la marche', 'tres_frequent'],
      ['Déformation d’un membre', 'frequent'],
      ['Boiterie', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Vaccination, notification des paralysies flasques, orientation vers la réadaptation', ''],
      hgr: ['- Kinésithérapie, orthèses', ''],
      tert: ['- Chirurgie orthopédique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Paralysie d’un membre inférieur',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Enfant, adulte jeune',
        fonctionnels: '- Boiterie',
        generaux: '',
        physiques: '- Amyotrophie, raccourcissement',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Syndrome post-polio',
        type: 'evolutive',
        description: 'Adulte.',
        terrain: '- Antécédent de polio ancien',
        fonctionnels: '- Fatigue, nouvelle faiblesse',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
