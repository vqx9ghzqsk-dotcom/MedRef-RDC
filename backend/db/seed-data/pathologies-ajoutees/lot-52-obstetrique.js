'use strict';

/**
 * Lot 52 (phase 2, pathologies obstétricales) — stéatose hépatique aiguë gravidique, béance
 * cervico-isthmique, placenta accreta, macrosomie fœtale, grossesse abdominale, vasa prævia.
 * Rédigé par IA (OMS, Normes et directives SR, FIGO) : à valider.
 */

const OBS = { departement: 'gynecologie-obstetrique', specialite: 'Pathologies obstétricales' };

module.exports = [
  // =================================================================== SHAG
  {
    ...OBS,
    slug: 'steatose-hepatique-aigue-gravidique',
    nom: 'Stéatose hépatique aiguë gravidique',
    resume:
      'Urgence rare et grave du 3e trimestre (≈ 1/10 000) : nausées, vomissements, douleur épigastrique, malaise, polyuro-polydipsie, puis ictère, encéphalopathie, hypoglycémie, troubles de la coagulation (CIVD), insuffisance rénale ; souvent associée à une pré-éclampsie ; transaminases élevées, hypoglycémie, TP bas, hyperuricémie ; distinguer du HELLP et de l’hépatite E ; accouchement en urgence après stabilisation (glucose, plasma, vitamine K), réanimation ; guérison habituelle après l’accouchement.',
    definition:
      'Infiltration graisseuse microvésiculaire aiguë du foie survenant au 3e trimestre ou en post-partum immédiat, responsable d’une insuffisance hépatique aiguë.',
    physiopathologie:
      '## Mécanismes\n- Défaut d’oxydation mitochondriale des acides gras (parfois déficit fœtal en LCHAD) → accumulation de graisses dans les hépatocytes de la mère\n- Insuffisance hépatique : **hypoglycémie**, **coagulopathie**, **encéphalopathie**, insuffisance rénale, pancréatite\n\n## Facteurs\n- Primiparité, grossesse gémellaire, fœtus masculin, pré-éclampsie, faible IMC',
    diagnostic:
      '## Clinique\n- **Nausées**, **vomissements**, douleur épigastrique ou de l’hypochondre droit, malaise, céphalées, **polyuro-polydipsie**\n- Puis **ictère**, confusion, saignements, oligurie\n- HTA et protéinurie dans la moitié des cas\n\n## Examens\n- **Transaminases** (souvent < 1 000), **bilirubine** élevée\n- **Glycémie** basse, **TP/INR** bas, fibrinogène bas, plaquettes (CIVD)\n- Créatinine, acide urique élevés, leucocytose\n- Échographie hépatique (peu contributive), éliminer : **IgM anti-VHE**, AgHBs, paludisme',
    examens: [
      ['premiere_intention', 'bilan-hepatique', 'Cytolyse, bilirubine.'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
      ['gravite', 'hemostase', 'TP bas, CIVD.'],
      ['premiere_intention', 'nfs', 'Plaquettes, leucocytose.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['etiologique', 'serologies-hepatites', 'Hépatites virales.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'echographie-obstetricale', 'Vitalité fœtale.'],
    ],
    scores: [],
    differentiels: [
      ['hellp-syndrome', 'Hémolyse et thrombopénie au premier plan, glycémie normale.'],
      ['hepatite-e-et-grossesse', 'IgM anti-VHE positives, contexte épidémique.'],
      ['cholestase-gravidique', 'Prurit, état général conservé.'],
      ['paludisme-et-grossesse', 'Fièvre, TDR positif.'],
      ['hyperemesis-gravidarum', 'Premier trimestre.'],
    ],
    etiologies: '## Facteurs\n- Primiparité, grossesse multiple, fœtus masculin, déficit fœtal en LCHAD',
    principes: [
      [
        'Stabilisation',
        'Corriger les défaillances.',
        '- **Glucose 10 %** en perfusion continue, glycémie toutes les 1–2 h\n- **Plasma frais congelé**, **vitamine K1**, plaquettes si saignement ou avant césarienne\n- Surveillance de la diurèse, de la conscience ; sulfate de magnésium et antihypertenseurs si pré-éclampsie',
      ],
      [
        'Accouchement',
        'Traitement curatif.',
        '- **Accouchement rapide** quel que soit le terme, après stabilisation (voie basse si rapide, sinon césarienne)\n- Corticoïdes si < 34 semaines si l’état le permet sans retarder l’accouchement\n- **Gestion active de la délivrance** (risque hémorragique)',
      ],
      [
        'Après l’accouchement',
        'Réanimer.',
        '- Soins intensifs : hypoglycémie, encéphalopathie (lactulose), insuffisance rénale, infections\n- Dépistage du déficit en LCHAD chez l’enfant (centre spécialisé)',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['vitamine-k1-phytomenadione', 'premiere', 'Coagulopathie'],
      ['ocytocine', 'premiere', 'Gestion active de la délivrance'],
      ['sulfate-de-magnesium', 'adjuvant', 'Pré-éclampsie associée'],
      ['lactulose', 'adjuvant', 'Encéphalopathie'],
    ],
    complications: [
      {
        nom: 'Encéphalopathie hépatique',
        fiche: 'encephalopathie-hepatique',
        description: 'Insuffisance hépatique.',
        traitement: '- Réanimation, lactulose',
        clinique: '- Confusion, coma',
        paraclinique: '- TP effondré',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'CIVD.',
        traitement: '- Plasma, utérotoniques',
        clinique: '- Saignement',
        paraclinique: '- Hémostase',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Atteinte multiviscérale.',
        traitement: '- Dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Mort fœtale',
        fiche: 'mort-foetale-in-utero',
        description: 'Défaillance maternelle.',
        traitement: '- Accouchement',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité maternelle < 10 % avec accouchement rapide et réanimation ; récupération hépatique complète en 1 à 4 semaines',
    urgences: [],
    symptomes: [
      ['Nausées', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Ictère', 'frequent'],
      ['Polyurie-polydipsie', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      "Harrison's Principles of Internal Medicine",
      'EASL — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Vomissements et ictère au 3e trimestre : glucose, référence urgente', '- Tout cas suspect'],
      hgr: ['- Bilan, glucose, plasma, accouchement', ''],
      tert: ['- Réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Stéatose hépatique aiguë typique',
        type: 'commune',
        description: '3e trimestre.',
        terrain: '- Primipare, gémellaire',
        fonctionnels: '- Nausées, vomissements, douleur',
        generaux: '- Malaise',
        physiques: '- Ictère',
        paraclinique: '- Hypoglycémie, TP bas',
        etiologies: '',
        syndromes: ['syndrome-d-insuffisance-hepatocellulaire'],
      },
      {
        nom: 'Forme avec défaillance multiviscérale',
        type: 'gravite',
        description: 'Encéphalopathie, CIVD.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Coma, saignements',
        paraclinique: '- CIVD, insuffisance rénale',
        etiologies: '',
        syndromes: ['syndrome-hemorragique'],
      },
    ],
  },

  // =================================================================== Béance
  {
    ...OBS,
    slug: 'beance-cervico-isthmique',
    nom: 'Béance cervico-isthmique',
    resume:
      'Incompétence du col utérin à maintenir la grossesse : dilatation indolore du col au 2e trimestre aboutissant à des fausses couches tardives ou des accouchements très prématurés répétés ; antécédents typiques, facteurs (traumatismes cervicaux, conisation, dilatations répétées, déchirures lors d’accouchements) ; cerclage préventif à 12–14 semaines si antécédents, ou sur col raccourci à l’échographie ; progestérone vaginale si col court ; repos relatif, surveillance.',
    definition:
      'Insuffisance de la résistance du col utérin entraînant une dilatation cervicale passive et indolore au 2e trimestre, en l’absence de contractions, avec expulsion du fœtus.',
    physiopathologie:
      '## Causes\n- **Traumatiques** : dilatations répétées (curetages, avortements), déchirures cervicales obstétricales, conisation\n- Congénitales : malformations utérines, exposition au distilbène (rare)\n\n## Mécanisme\n- Col qui s’ouvre sans contraction → prolapsus des membranes dans le vagin → rupture, infection, expulsion',
    diagnostic:
      '## Antécédents\n- ≥ 1 **fausse couche tardive** (14–24 semaines) ou accouchement très prématuré, **indolore et rapide**, sans cause retrouvée\n\n## Pendant la grossesse\n- Pesanteur pelvienne, pertes vaginales, membranes visibles à l’orifice externe au spéculum\n- **Échographie** endovaginale : longueur du col < 25 mm avant 24 semaines\n\n## Examens\n- Échographie (col), prélèvement vaginal et ECBU (infection), recherche de malformation utérine',
    examens: [
      ['confirmation', 'echographie-pelvienne', 'Longueur du col (endovaginale).'],
      ['premiere_intention', 'echographie-obstetricale', 'Vitalité, terme.'],
      ['etiologique', 'prelevement-vaginal', 'Infection.'],
      ['etiologique', 'ecbu', 'Infection urinaire.'],
    ],
    scores: [],
    differentiels: [
      ['menace-accouchement-premature', 'Contractions douloureuses.'],
      ['avortement-spontane', 'Fausse couche précoce, saignements, douleurs.'],
      ['rupture-prematuree-membranes', 'Écoulement de liquide.'],
      ['Malformation utérine', 'Échographie, hystérographie.'],
    ],
    etiologies:
      '## Facteurs\n- Curetages et dilatations répétés, déchirures du col, conisation, malformations utérines',
    principes: [
      [
        'Cerclage',
        'Renforcer le col.',
        '- **Cerclage préventif** (McDonald) à **12–14 semaines** si ≥ 2 fausses couches tardives ou accouchements très prématurés évocateurs\n- Cerclage sur **col court** (< 25 mm avant 24 semaines) chez une femme à antécédent\n- Cerclage « en urgence » si col dilaté avec membranes intactes, sans infection ni contraction (centre spécialisé)\n- Ablation du cerclage à **36–37 semaines** ou en cas de travail, rupture des membranes ou infection',
      ],
      [
        'Progestérone',
        'Prévenir l’accouchement prématuré.',
        '- **Progestérone vaginale** 200 mg/j le soir de 16–24 à 36 semaines si col court',
      ],
      [
        'Mesures associées',
        'Prévenir les infections.',
        '- Traitement des infections vaginales et urinaires, repos relatif, éviter les rapports si col ouvert\n- Corticoïdes si naissance prématurée imminente',
      ],
    ],
    molecules: [
      ['progesterone', 'premiere', 'Col court'],
      ['dexamethasone', 'adjuvant', 'Maturation pulmonaire'],
      ['nifedipine', 'adjuvant', 'Contractions'],
    ],
    complications: [
      {
        nom: 'Fausse couche tardive',
        fiche: 'avortement-spontane',
        description: 'Dilatation du col.',
        traitement: '- Prévention par le cerclage',
        clinique: '- Expulsion indolore',
        paraclinique: '',
      },
      {
        nom: 'Rupture des membranes et chorioamniotite',
        fiche: 'chorioamniotite',
        description: 'Membranes exposées.',
        traitement: '- Antibiotiques, ablation du cerclage',
        clinique: '- Fièvre',
        paraclinique: '',
      },
      {
        nom: 'Accouchement très prématuré',
        fiche: 'prematurite',
        description: 'Col incompétent.',
        traitement: '- Corticoïdes, néonatologie',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Taux de naissances vivantes > 80 % avec cerclage chez les femmes à antécédents',
    urgences: [],
    symptomes: [
      ['Douleur pelvienne', 'occasionnel'],
      ['Leucorrhées', 'occasionnel'],
      ['Saignement vaginal', 'occasionnel'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Repérer les antécédents de fausses couches tardives, référence précoce', ''],
      hgr: ['- Échographie du col, cerclage', ''],
      tert: ['- Cerclage complexe', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Béance avec antécédents',
        type: 'commune',
        description: 'Cerclage préventif.',
        terrain: '- Antécédent de fausses couches tardives',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Col court',
        etiologies: '- Traumatisme cervical',
        syndromes: [],
      },
      {
        nom: 'Col dilaté avec protrusion des membranes',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- 2e trimestre',
        fonctionnels: '- Pesanteur',
        generaux: '',
        physiques: '- Membranes visibles',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Placenta accreta
  {
    ...OBS,
    slug: 'placenta-accreta',
    nom: 'Placenta accreta',
    resume:
      'Insertion anormalement profonde du placenta dans le myomètre (accreta, increta, percreta), dont le principal facteur est l’utérus cicatriciel avec placenta prævia antérieur (risque croissant avec le nombre de césariennes) : à rechercher à l’échographie chez toute femme ayant un antécédent de césarienne et un placenta bas inséré ; risque d’hémorragie massive à la délivrance ; accouchement programmé (34–36 semaines) en centre disposant de chirurgien, de sang et de réanimation, césarienne-hystérectomie placenta en place ; ne pas tenter d’arracher le placenta.',
    definition:
      'Anomalie d’insertion du placenta dont les villosités adhèrent au myomètre (accreta), le pénètrent (increta) ou le traversent jusqu’à la séreuse et aux organes voisins (percreta), du fait d’un défaut de la caduque.',
    physiopathologie:
      '## Mécanisme\n- Absence de caduque (cicatrice utérine) → invasion trophoblastique du myomètre, absence de plan de clivage à la délivrance\n\n## Facteurs\n- **Placenta prævia** sur **utérus cicatriciel** (risque 3 % après 1 césarienne, 40 % après 3 césariennes, 60 % au-delà)\n- Curetages répétés, myomectomie, endométrite, âge, multiparité, FIV\n\n## Conséquences\n- **Hémorragie massive** à la délivrance, CIVD, hystérectomie, lésions de la vessie (percreta), décès maternel',
    diagnostic:
      '## Prénatal\n- **Échographie** (avec Doppler) chez toute femme avec cicatrice utérine et placenta antérieur bas : perte de l’interface hypoéchogène, lacunes placentaires, hypervascularisation vésico-utérine, amincissement du myomètre\n- IRM en centre spécialisé ; hématurie (percreta)\n\n## À l’accouchement (non diagnostiqué)\n- **Absence de décollement** placentaire, hémorragie à la tentative de délivrance artificielle\n\n## Examens\n- Échographie Doppler, NFS, **groupage-RAI**, hémostase ; réserve de sang',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Signes d’invasion (Doppler).'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['gravite', 'groupage-rai', 'Réserve de sang.'],
      ['gravite', 'hemostase', 'CIVD.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie (percreta).'],
    ],
    scores: [],
    differentiels: [
      ['placenta-praevia', 'Placenta bas sans invasion.'],
      ['retention-placentaire', 'Placenta non délivré sans invasion.'],
      ['hemorragie-post-partum', 'Autres causes d’hémorragie.'],
    ],
    etiologies: '## Facteurs\n- Césariennes antérieures, placenta prævia, curetages, chirurgie utérine',
    principes: [
      [
        'Anticipation',
        'Programmer.',
        '- Diagnostic prénatal chez les femmes à risque, **référence** vers un hôpital équipé (chirurgien expérimenté, banque de sang, réanimation)\n- Correction de l’anémie (fer), corticoïdes avant la césarienne programmée (34–36 semaines)',
      ],
      [
        'Accouchement',
        'Ne pas arracher le placenta.',
        '- **Césarienne** (incision utérine à distance du placenta), **hystérectomie** avec placenta en place dans la plupart des cas\n- Préparation : sang (plusieurs unités), **acide tranexamique**, deux voies veineuses, sonde urinaire\n- Traitement conservateur (placenta laissé en place) seulement en centre spécialisé avec suivi',
      ],
      [
        'Découverte à l’accouchement',
        'Urgence.',
        '- Arrêter la tentative de délivrance, utérotoniques, acide tranexamique, transfusion, laparotomie et hystérectomie',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Hémorragie'],
      ['ocytocine', 'premiere', 'Utérotonique'],
      ['dexamethasone', 'adjuvant', 'Maturation pulmonaire avant césarienne programmée'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Correction de l’anémie'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie'],
    ],
    complications: [
      {
        nom: 'Hémorragie massive',
        fiche: 'choc-hemorragique-obstetrical',
        description: 'Délivrance impossible.',
        traitement: '- Transfusion, hystérectomie',
        clinique: '- Choc',
        paraclinique: '- Hb, hémostase',
      },
      {
        nom: 'Lésions vésicales',
        description: 'Placenta percreta.',
        traitement: '- Réparation chirurgicale',
        clinique: '- Hématurie',
        paraclinique: '',
      },
      {
        nom: 'Perte de la fertilité',
        description: 'Hystérectomie.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité maternelle élevée en l’absence de diagnostic prénatal ; nettement réduite par la programmation en centre équipé',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Saignement vaginal', 'frequent'],
      ['Hématurie', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Repérer cicatrice utérine + placenta bas, référence', ''],
      hgr: ['- Échographie, accouchement programmé si équipé', ''],
      tert: ['- Césarienne-hystérectomie, réanimation', ''],
    },
    alertes: { 'hemorragie-du-post-partum-urgence': 'Hémorragie lors d’une délivrance impossible' },
    formes: [
      {
        nom: 'Placenta accreta sur utérus cicatriciel',
        type: 'commune',
        description: 'Forme principale.',
        terrain: '- Antécédent de césarienne, placenta prævia',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Signes échographiques d’invasion',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Placenta percreta',
        type: 'gravite',
        description: 'Invasion de la vessie.',
        terrain: '',
        fonctionnels: '- Hématurie',
        generaux: '',
        physiques: '',
        paraclinique: '- Hypervascularisation vésicale',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Macrosomie
  {
    ...OBS,
    slug: 'macrosomie-foetale',
    nom: 'Macrosomie fœtale',
    resume:
      'Poids de naissance ≥ 4 000 g (ou > 90e percentile) : facteurs (diabète maternel, obésité, prise de poids excessive, grande multiparité, grossesse prolongée, antécédent) ; risques de dystocie des épaules (avec lésions du plexus brachial, fracture de clavicule), de travail prolongé, de césarienne, de déchirures, d’hémorragie du post-partum, d’hypoglycémie néonatale ; estimation clinique (hauteur utérine) et échographique imprécise ; contrôle du diabète, accouchement en structure, préparation aux manœuvres de dystocie des épaules, césarienne si poids estimé ≥ 4 500 g avec diabète (≥ 5 000 g sans diabète).',
    definition:
      'Poids de naissance supérieur ou égal à 4 000 g, ou supérieur au 90e percentile pour l’âge gestationnel.',
    physiopathologie:
      '## Facteurs\n- **Diabète** (gestationnel ou préexistant) : hyperinsulinisme fœtal → croissance excessive, surtout tronc et épaules\n- **Obésité maternelle**, prise de poids excessive, grande multiparité, **grossesse prolongée**, antécédent de macrosomie, fœtus masculin\n\n## Conséquences\n- **Dystocie des épaules** (urgence), lésions du plexus brachial, asphyxie\n- Travail prolongé, **césarienne**, déchirures périnéales, **hémorragie du post-partum** (surdistension)\n- Nouveau-né : **hypoglycémie**, détresse respiratoire, polyglobulie',
    diagnostic:
      '## Suspicion\n- **Hauteur utérine** > 36 cm à terme, prise de poids excessive, diabète\n- **Échographie** : estimation du poids (marge d’erreur ± 15 %)\n\n## Examens\n- **Glycémie**, **HGPO** (dépistage du diabète gestationnel)\n- Échographie (poids estimé, liquide amniotique)',
    examens: [
      ['premiere_intention', 'echographie-obstetricale', 'Poids estimé.'],
      ['etiologique', 'hgpo-75g', 'Diabète gestationnel.'],
      ['etiologique', 'glycemie', 'Diabète.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-gemellaire', 'Utérus trop gros.'],
      ['oligoamnios-et-hydramnios', 'Excès de liquide.'],
      ['Erreur de terme', 'Datation.'],
      ['Fibrome utérin', 'Masse utérine associée.'],
    ],
    etiologies: '## Facteurs\n- Diabète, obésité, multiparité, grossesse prolongée',
    principes: [
      [
        'Prévention',
        'Agir sur les facteurs.',
        '- Dépistage et traitement du **diabète gestationnel** (régime, insuline ou metformine), conseils sur la prise de poids, activité physique',
      ],
      [
        'Accouchement',
        'Anticiper.',
        '- Accouchement en **structure** avec personnel formé aux manœuvres de **dystocie des épaules**\n- **Césarienne programmée** si poids estimé ≥ 4 500 g chez une diabétique (≥ 5 000 g sans diabète) ; déclenchement à terme discuté\n- Partogramme rigoureux ; éviter l’extraction instrumentale haute\n- **Gestion active de la délivrance**',
      ],
      [
        'Dystocie des épaules',
        'Urgence.',
        '- Appeler à l’aide, **manœuvre de McRoberts** (hyperflexion des cuisses) + **pression sus-pubienne**, épisiotomie si besoin, manœuvres internes (Wood, extraction du bras postérieur), position à quatre pattes\n- Ne pas tirer fort sur la tête, pas d’expression abdominale',
      ],
      [
        'Nouveau-né',
        'Prévenir l’hypoglycémie.',
        '- Allaitement précoce, glycémie à 1–2 h, examen du plexus brachial et de la clavicule',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Gestion active de la délivrance'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie néonatale'],
      ['metformine', 'alternative', 'Diabète gestationnel'],
    ],
    complications: [
      {
        nom: 'Dystocie des épaules',
        description: 'Épaules bloquées après la tête.',
        traitement: '- Manœuvres obstétricales',
        clinique: '- Signe de la tortue',
        paraclinique: '',
      },
      {
        nom: 'Traumatismes du nouveau-né',
        fiche: 'traumatismes-obstetricaux-nouveau-ne',
        description: 'Plexus brachial, clavicule.',
        traitement: '- Kinésithérapie',
        clinique: '- Paralysie du bras',
        paraclinique: '',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Atonie.',
        traitement: '- Utérotoniques',
        clinique: '- Saignement',
        paraclinique: '',
      },
      {
        nom: 'Hypoglycémie néonatale',
        fiche: 'hypoglycemie-neonatale',
        description: 'Hyperinsulinisme.',
        traitement: '- Alimentation, glucose',
        clinique: '- Léthargie, trémulations',
        paraclinique: '- Glycémie',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec un accouchement préparé ; séquelles possibles du plexus brachial après dystocie des épaules',
    urgences: [],
    symptomes: [],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'ADA — Standards of Care in Diabetes',
    ],
    niveaux: {
      cs: ['- Hauteur utérine, dépistage du diabète, référence', '- Hauteur utérine > 36 cm'],
      hgr: ['- Échographie, accouchement, césarienne', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Macrosomie du diabète',
        type: 'commune',
        description: 'Hyperinsulinisme fœtal.',
        terrain: '- Diabète maternel',
        fonctionnels: '',
        generaux: '',
        physiques: '- Hauteur utérine excessive',
        paraclinique: '- Poids estimé élevé',
        etiologies: '- Diabète',
        syndromes: [],
      },
      {
        nom: 'Dystocie des épaules',
        type: 'gravite',
        description: 'Urgence obstétricale.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Tête rétractée contre le périnée',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Grossesse abdominale
  {
    ...OBS,
    slug: 'grossesse-abdominale',
    nom: 'Grossesse abdominale',
    resume:
      'Forme rare de grossesse extra-utérine implantée dans la cavité péritonéale, plus fréquente en Afrique, pouvant évoluer jusqu’à un terme avancé : douleurs abdominales, mouvements fœtaux douloureux, fœtus palpé sous la peau, présentation anormale, col fermé, utérus distinct de la masse ; échographie (utérus vide à côté du fœtus) ; laparotomie en centre équipé avec sang disponible ; ne pas retirer le placenta s’il adhère aux organes (risque d’hémorragie massive), le laisser en place.',
    definition:
      'Grossesse dont l’implantation placentaire se fait dans la cavité abdominale (péritoine, épiploon, intestin, foie), en dehors de l’utérus et des trompes.',
    physiopathologie:
      '## Mécanismes\n- **Primitive** (implantation directe) ou **secondaire** à une grossesse tubaire rompue ou avortée\n- Le placenta s’implante sur des organes richement vascularisés → **hémorragie** massive en cas de décollement\n\n## Facteurs\n- Infections génitales et salpingites, infertilité, antécédent de GEU',
    diagnostic:
      '## Clinique\n- **Douleurs abdominales**, troubles digestifs, **mouvements fœtaux douloureux**\n- **Fœtus facilement palpable** sous la paroi, **présentation transversale** ou anormale\n- Col fermé et non modifié, utérus de petite taille palpable à côté de la masse\n- Échec d’un déclenchement, mort fœtale\n\n## Examens\n- **Échographie** : fœtus en dehors de l’utérus, utérus vide, absence de myomètre autour du fœtus, oligoamnios\n- Radiographie de l’abdomen de profil (parties fœtales superposées au rachis maternel)\n- NFS, **groupage-RAI**, hémostase',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Fœtus hors de l’utérus.'],
      ['premiere_intention', 'echographie-abdominale', 'Insertion placentaire.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['gravite', 'groupage-rai', 'Réserve de sang.'],
      ['gravite', 'hemostase', 'Coagulation.'],
      ['deuxieme_intention', 'abdomen-sans-preparation', 'Profil.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-extra-uterine', 'GEU tubaire précoce.'],
      ['rupture-uterine', 'Fœtus dans l’abdomen après rupture.'],
      ['Fibrome utérin et grossesse', 'Masse utérine.'],
      ['Présentation transversale', 'Grossesse intra-utérine avec col modifiable.'],
    ],
    etiologies: '## Facteurs\n- Salpingites, IST, infertilité, antécédent de GEU',
    principes: [
      [
        'Chirurgie',
        'Laparotomie programmée.',
        '- **Laparotomie** dès le diagnostic (ou programmée si fœtus vivant et viable selon le centre), dans un hôpital avec chirurgien expérimenté et **sang** disponible\n- Extraction du fœtus, ligature du cordon au ras du placenta\n- **Placenta** : l’enlever seulement s’il est facilement détachable (vaisseaux ligaturables) ; sinon **le laisser en place** (résorption sur plusieurs mois)',
      ],
      [
        'Après l’intervention',
        'Surveiller.',
        '- Surveillance de l’infection, de l’occlusion, de la β-hCG ; antibiotiques\n- Méthotrexate discuté pour le placenta laissé en place (risque de nécrose infectée)',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'adjuvant', 'Hémorragie'],
      ['ceftriaxone', 'alternative', 'Antibioprophylaxie, infection'],
      ['metronidazole', 'alternative', 'Infection'],
    ],
    complications: [
      {
        nom: 'Hémorragie massive',
        fiche: 'choc-hemorragique-obstetrical',
        description: 'Décollement placentaire.',
        traitement: '- Transfusion, hémostase chirurgicale',
        clinique: '- Choc',
        paraclinique: '',
      },
      {
        nom: 'Infection du placenta laissé en place',
        description: 'Nécrose.',
        traitement: '- Antibiotiques, drainage',
        clinique: '- Fièvre, abcès',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Occlusion intestinale',
        fiche: 'occlusion-intestinale-aigue',
        description: 'Adhérences.',
        traitement: '- Chirurgie',
        clinique: '- Vomissements',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité maternelle élevée (hémorragie) ; mortalité fœtale élevée, malformations par compression',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Saignement vaginal', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Fœtus très superficiel, douleurs : référence', ''],
      hgr: ['- Échographie, laparotomie si équipé', ''],
      tert: ['- Chirurgie, réanimation', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Femme enceinte avec grossesse abdominale et choc' },
    formes: [
      {
        nom: 'Grossesse abdominale avancée',
        type: 'commune',
        description: 'Diagnostic tardif.',
        terrain: '- Antécédent d’infection pelvienne',
        fonctionnels: '- Douleurs, mouvements douloureux',
        generaux: '',
        physiques: '- Fœtus superficiel, col fermé',
        paraclinique: '- Utérus vide à l’échographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Grossesse abdominale compliquée',
        type: 'gravite',
        description: 'Hémorragie.',
        terrain: '',
        fonctionnels: '- Douleur intense',
        generaux: '- Choc',
        physiques: '- Défense',
        paraclinique: '- Hémopéritoine',
        etiologies: '',
        syndromes: ['syndrome-d-hemorragie-interne'],
      },
    ],
  },

  // =================================================================== Vasa praevia
  {
    ...OBS,
    slug: 'vasa-praevia',
    nom: 'Vasa prævia',
    resume:
      'Vaisseaux fœtaux non protégés (insertion vélamenteuse du cordon, placenta bilobé ou succenturié) passant sur les membranes devant la présentation : leur rupture lors de la rupture des membranes provoque une hémorragie d’origine fœtale (saignement modéré avec souffrance fœtale brutale : bradycardie, rythme sinusoïdal) et la mort fœtale rapide ; diagnostic prénatal par échographie Doppler (placenta bas, insertion vélamenteuse) ; césarienne programmée vers 34–36 semaines ; en cas de saignement lors de la rupture avec anomalie du rythme fœtal : césarienne immédiate, réanimation et transfusion du nouveau-né.',
    definition:
      'Présence de vaisseaux sanguins fœtaux cheminant dans les membranes, non protégés par le cordon ou le placenta, au niveau ou à proximité de l’orifice interne du col.',
    physiopathologie:
      '## Mécanisme\n- **Insertion vélamenteuse du cordon** ou **lobe placentaire accessoire** → vaisseaux fœtaux dans les membranes\n- À la **rupture des membranes** (spontanée ou artificielle) → déchirure des vaisseaux → **hémorragie fœtale** (volume sanguin fœtal ≈ 80–100 mL/kg) → choc et mort fœtale en quelques minutes\n- Compression des vaisseaux par la présentation → asphyxie\n\n## Facteurs\n- Placenta bas inséré, placenta bilobé ou succenturié, grossesse multiple, FIV',
    diagnostic:
      '## Prénatal\n- **Échographie Doppler couleur** (endovaginale) : vaisseaux sur l’orifice du col, en cas de placenta bas, d’insertion vélamenteuse ou de lobe accessoire\n\n## Pendant le travail\n- **Saignement** modéré à la rupture des membranes associé à une **anomalie brutale du rythme cardiaque fœtal** (tachycardie puis bradycardie, rythme sinusoïdal)\n- Vaisseaux palpables pulsatiles au toucher vaginal\n- Mère stable (le sang est fœtal)',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Doppler : vaisseaux sur le col.'],
      ['premiere_intention', 'cardiotocographie', 'Bradycardie, rythme sinusoïdal.'],
      ['gravite', 'nfs', 'Anémie du nouveau-né.'],
      ['gravite', 'groupage-rai', 'Transfusion néonatale.'],
    ],
    scores: [],
    differentiels: [
      ['placenta-praevia', 'Saignement d’origine maternelle, indolore.'],
      ['hematome-retroplacentaire', 'Douleur, utérus dur, retentissement maternel.'],
      ['rupture-uterine', 'Douleur, choc maternel.'],
      ['souffrance-foetale-aigue', 'Anomalies du rythme sans saignement.'],
    ],
    etiologies:
      '## Facteurs\n- Insertion vélamenteuse du cordon, placenta bilobé ou succenturié, placenta bas, gémellaire',
    principes: [
      [
        'Diagnostic prénatal',
        'Programmer.',
        '- **Césarienne programmée** à 34–36 semaines, **corticoïdes** avant\n- Hospitalisation discutée à partir de 30–32 semaines ; **éviter toute rupture artificielle des membranes**',
      ],
      [
        'Saignement au cours du travail',
        'Extrême urgence.',
        '- **Césarienne immédiate** si fœtus vivant\n- Préparer la **réanimation néonatale** et la **transfusion** du nouveau-né (sang O négatif), remplissage néonatal\n- Ne jamais rompre les membranes en cas de vaisseaux palpables',
      ],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Maturation pulmonaire avant césarienne programmée'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Remplissage du nouveau-né'],
    ],
    complications: [
      {
        nom: 'Mort fœtale per-partum',
        fiche: 'mort-foetale-in-utero',
        description: 'Exsanguination fœtale.',
        traitement: '- Césarienne immédiate',
        clinique: '- Bradycardie fœtale',
        paraclinique: '',
      },
      {
        nom: 'Choc hémorragique du nouveau-né',
        fiche: 'reanimation-nouveau-ne-salle-de-naissance',
        description: 'Perte de sang fœtal.',
        traitement: '- Remplissage, transfusion',
        clinique: '- Pâleur, hypotonie',
        paraclinique: '- Hb',
      },
      {
        nom: 'Asphyxie périnatale',
        fiche: 'asphyxie-perinatale',
        description: 'Compression ou hémorragie.',
        traitement: '- Réanimation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Survie fœtale > 95 % si diagnostic prénatal ; mortalité fœtale de 50 à 95 % si non diagnostiqué',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Écoulement de liquide amniotique', 'frequent'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Saignement à la rupture des membranes avec anomalies du cœur fœtal : référence immédiate', ''],
      hgr: ['- Échographie Doppler, césarienne, réanimation néonatale', ''],
      tert: ['- Néonatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Vasa prævia diagnostiqué',
        type: 'commune',
        description: 'Diagnostic prénatal.',
        terrain: '- Placenta bas, insertion vélamenteuse',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Doppler positif',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Rupture de vasa prævia',
        type: 'gravite',
        description: 'Hémorragie fœtale.',
        terrain: '- Pendant le travail',
        fonctionnels: '- Saignement à la rupture',
        generaux: '- Mère stable',
        physiques: '',
        paraclinique: '- Bradycardie fœtale',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
