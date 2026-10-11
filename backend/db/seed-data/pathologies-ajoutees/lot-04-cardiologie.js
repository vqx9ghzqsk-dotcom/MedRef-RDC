'use strict';

/**
 * Lot 4 (cardiologie) — endocardite infectieuse, péricardite et tamponnade,
 * valvulopathies rhumatismales, rhumatisme articulaire aigu de l'adulte, embolie
 * pulmonaire, thrombose veineuse profonde, urgences hypertensives, cardiomyopathie
 * dilatée. Rédigé par IA (ESC, AHA, OMS, World Heart Federation) : à valider.
 */

const CARDIO = { departement: 'medecine-interne', specialite: 'Cardiologie' };

module.exports = [
  // =================================================================== Endocardite
  {
    ...CARDIO,
    slug: 'endocardite-infectieuse',
    nom: 'Endocardite infectieuse',
    resume:
      'Infection de l’endocarde valvulaire, souvent sur valvulopathie rhumatismale : hémocultures avant antibiotique, échocardiographie, antibiothérapie IV prolongée.',
    definition:
      'Infection de l’endocarde, le plus souvent valvulaire, par des bactéries (streptocoques, staphylocoques, entérocoques) formant des végétations, avec risque de destruction valvulaire et d’embolies.',
    physiopathologie:
      '## Mécanismes\n- Lésion de l’endocarde (valvulopathie, prothèse) favorisant un dépôt fibrino-plaquettaire\n- Greffe bactérienne lors d’une bactériémie (soins dentaires, cathéter, injection)\n- Végétations : destruction valvulaire (insuffisance cardiaque), embolies (cerveau, rate, reins), anévrismes mycotiques, complexes immuns',
    diagnostic:
      '## Clinique\n- Fièvre prolongée inexpliquée chez un valvulaire\n- **Souffle cardiaque** nouveau ou modifié\n- Signes emboliques : AVC, ischémie de membre, infarctus splénique ou rénal\n- Signes cutanés : purpura, faux panaris d’Osler, taches de Janeway ; splénomégalie\n- Insuffisance cardiaque\n\n## Critères de Duke\n- Majeurs : hémocultures positives à germe typique, végétation ou abcès à l’échocardiographie\n- Mineurs : terrain prédisposant, fièvre ≥ 38 °C, phénomènes vasculaires, phénomènes immunologiques, hémocultures atypiques',
    examens: [
      [
        'confirmation',
        'hemocultures',
        '3 paires espacées avant tout antibiotique ; positives à streptocoque, staphylocoque ou entérocoque.',
      ],
      [
        'confirmation',
        'echocardiographie',
        'Végétation, abcès, perforation, régurgitation sévère ; ETO si ETT normale et forte suspicion.',
      ],
      ['premiere_intention', 'nfs', 'Anémie inflammatoire, hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Élevée ; suivi de l’efficacité.'],
      ['premiere_intention', 'creatinine', 'Glomérulonéphrite, toxicité des aminosides.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie, protéinurie (glomérulonéphrite).'],
      ['premiere_intention', 'ecg', 'Troubles de conduction (abcès septal).'],
      ['gravite', 'scanner-cerebral', 'Signes neurologiques : embolie, hémorragie.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre en zone d’endémie.'],
    ],
    scores: ['nyha'],
    differentiels: [
      ['valvulopathies-rhumatismales', 'Souffle connu sans fièvre ni hémocultures positives.'],
      ['rhumatisme-articulaire-aigu-adulte', 'Arthrite migratrice, ASLO élevés.'],
      ['paludisme-simple', 'TDR positif ; fièvre sans souffle nouveau.'],
      ['fievre-typhoide', 'Fièvre en plateau, salmonelle dans les hémocultures.'],
      ['Lupus et vascularites', 'Atteintes multiviscérales, hémocultures négatives.'],
    ],
    etiologies:
      '## Germes\n- Streptocoques oraux (valvulopathie rhumatismale, mauvais état dentaire)\n- *Staphylococcus aureus* (cathéters, injections, formes aiguës destructrices)\n- Entérocoques (sujet âgé, gestes urologiques ou digestifs)\n- Hémocultures négatives : antibiotique préalable, germes difficiles (HACEK, Bartonella, Coxiella)\n\n## Terrain\n- Valvulopathie rhumatismale (très fréquente en RDC), prothèse valvulaire, cardiopathie congénitale, hémodialyse',
    principes: [
      [
        'Hémocultures puis antibiothérapie IV prolongée',
        'Stériliser les végétations.',
        '- Probabiliste (valve native) : **ampicilline** 12 g/j + **cloxacilline** 12 g/j + **gentamicine** 3 mg/kg/j\n- Streptocoque sensible : **benzylpénicilline** 12–18 MUI/j ou **ceftriaxone** 2 g/j pendant 4 semaines\n- *S. aureus* sensible : cloxacilline 12 g/j 4 à 6 semaines ; SARM ou allergie : **vancomycine**\n- Adapter à l’antibiogramme',
      ],
      [
        'Indications chirurgicales',
        'Éviter décès et embolies.',
        '- Insuffisance cardiaque par fuite valvulaire, abcès, infection non contrôlée, grosse végétation avec embolie\n- Discussion avec un centre de chirurgie cardiaque',
      ],
      [
        'Surveillance',
        'Repérer échec et complications.',
        '- Courbe thermique, hémocultures de contrôle, créatinine (gentamicine), signes neurologiques\n- Échocardiographie de contrôle',
      ],
      [
        'Porte d’entrée et prévention',
        'Éviter la récidive.',
        '- Soins dentaires, retrait des cathéters infectés\n- Prophylaxie avant soins dentaires à risque chez les patients à haut risque : **amoxicilline** 2 g 30 à 60 min avant\n- Prophylaxie secondaire du rhumatisme articulaire aigu',
      ],
    ],
    molecules: [
      ['ampicilline', 'premiere', 'Probabiliste, entérocoque'],
      ['cloxacilline', 'premiere', 'Staphylocoque sensible à la méticilline'],
      ['gentamicine', 'premiere', 'Association (synergie) pour les premières semaines'],
      ['benzylpenicilline-penicilline-g', 'premiere', 'Streptocoque sensible'],
      ['ceftriaxone', 'alternative', 'Streptocoque, relais ambulatoire'],
      ['vancomycine', 'deuxieme', 'SARM, allergie aux bêtalactamines, prothèse'],
      ['amoxicilline', 'adjuvant', 'Prophylaxie avant soins dentaires'],
    ],
    complications: [
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque',
        description: 'Destruction valvulaire, première cause de décès.',
        traitement: '- Diurétiques, chirurgie valvulaire',
        clinique: '- Dyspnée, crépitants, souffle',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Embolies systémiques et AVC',
        fiche: 'avc',
        description: 'Surtout avec de grosses végétations mobiles.',
        traitement: '- Antibiothérapie efficace, chirurgie précoce selon les cas',
        clinique: '- Déficit neurologique, douleur de membre',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Abcès et troubles de conduction',
        description: 'Extension périvalvulaire.',
        traitement: '- Chirurgie',
        clinique: '- Bradycardie',
        paraclinique: '- ECG, échocardiographie',
      },
      {
        nom: 'Glomérulonéphrite et insuffisance rénale',
        fiche: 'insuffisance-renale-aigue',
        description: 'Complexes immuns, toxicité des aminosides.',
        traitement: '- Adapter les doses',
        clinique: '- Diurèse',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité hospitalière 15 à 30 %\n- Apyrexie attendue en 1 semaine sous traitement efficace',
    urgences: ['oedeme-aigu-du-poumon'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Arthralgies', 'occasionnel'],
      ['Déficit moteur', 'occasionnel'],
      ['Splénomégalie', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'AHA — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Évoquer devant une fièvre prolongée chez un valvulaire, ne pas donner d’antibiotique « à l’aveugle », transfert',
        '- Toute suspicion',
      ],
      hgr: [
        '- Hémocultures, échocardiographie, antibiothérapie IV',
        '- Indication chirurgicale, complications neurologiques',
      ],
      tert: ['- ETO, chirurgie cardiaque', ''],
    },
    alertes: {
      'oedeme-aigu-du-poumon': 'Fièvre chez un valvulaire avec dyspnée brutale (rupture valvulaire)',
    },
    formes: [
      {
        nom: 'Endocardite subaiguë sur valvulopathie rhumatismale',
        type: 'commune',
        description: 'Fièvre prolongée et altération de l’état général.',
        terrain: '- Adulte jeune avec valvulopathie rhumatismale, mauvais état dentaire',
        fonctionnels: '- Asthénie, sueurs, arthralgies',
        generaux: '- Fièvre au long cours, amaigrissement, pâleur',
        physiques: '- Souffle valvulaire modifié, splénomégalie, purpura, faux panaris d’Osler',
        paraclinique: '- Hémocultures à streptocoque, végétation',
        etiologies: '- Streptocoques oraux',
        syndromes: ['syndrome-infectieux', 'syndrome-anemique'],
        examens: [['hemocultures', 'Diagnostic']],
      },
      {
        nom: 'Endocardite aiguë à staphylocoque',
        type: 'gravite',
        description: 'Tableau septique avec destruction valvulaire rapide.',
        terrain: '- Cathéter, hémodialyse, infection cutanée',
        fonctionnels: '- Dyspnée',
        generaux: '- Fièvre élevée, choc',
        physiques: '- Souffle nouveau, embolies multiples',
        paraclinique: '- Hémocultures à *S. aureus*',
        etiologies: '- *S. aureus*',
        syndromes: ['syndrome-de-choc', 'syndrome-d-insuffisance-cardiaque-gauche'],
      },
    ],
  },

  // =================================================================== Péricardite
  {
    ...CARDIO,
    slug: 'pericardite-aigue-et-tamponnade',
    nom: 'Péricardite aiguë et tamponnade',
    resume:
      'Inflammation du péricarde : douleur thoracique positionnelle, frottement ; en RDC, penser tuberculose et VIH devant un grand épanchement ; tamponnade = ponction urgente.',
    definition:
      'Inflammation aiguë du péricarde, avec ou sans épanchement ; la tamponnade correspond à la compression des cavités cardiaques par un épanchement abondant ou rapide, avec effondrement du débit cardiaque.',
    physiopathologie:
      '## Mécanismes\n- Inflammation virale (idiopathique), bactérienne, tuberculeuse, urémique, néoplasique\n- Épanchement : la tolérance dépend de la vitesse de constitution\n- Tamponnade : hausse de pression intrapéricardique, gêne au remplissage du ventricule droit, choc',
    diagnostic:
      '## Péricardite aiguë (2 critères sur 4)\n- Douleur thoracique augmentée par l’inspiration et le décubitus, soulagée penché en avant\n- Frottement péricardique\n- ECG : sus-décalage ST diffus concave, sous-décalage du PR\n- Épanchement à l’échocardiographie\n\n## Tamponnade\n- Dyspnée, hypotension, tachycardie, **turgescence jugulaire**, bruits du cœur assourdis (triade de Beck)\n- **Pouls paradoxal** (baisse de la PAS > 10 mmHg à l’inspiration)\n- Échocardiographie : épanchement avec compression des cavités droites',
    examens: [
      [
        'premiere_intention',
        'ecg',
        'Sus-décalage ST diffus concave, sous-décalage du PR ; microvoltage et alternance électrique si grand épanchement.',
      ],
      ['confirmation', 'echocardiographie', 'Épanchement, signes de compression (tamponnade).'],
      [
        'premiere_intention',
        'radiographie-thoracique',
        'Cardiomégalie « en carafe » si épanchement abondant.',
      ],
      ['premiere_intention', 'crp', 'Élevée ; suivi.'],
      ['premiere_intention', 'troponine', 'Élevée en cas de myopéricardite.'],
      ['etiologique', 'tdr-vih', 'Systématique en RDC.'],
      [
        'etiologique',
        'ponction-epanchement',
        'Liquide péricardique : exsudat lymphocytaire, GeneXpert (tuberculose), cytologie.',
      ],
      ['etiologique', 'xpert-mtb-rif', 'Liquide ou crachats.'],
      ['etiologique', 'creatinine', 'Péricardite urémique.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-coronarien-aigu-st-plus', 'Sus-décalage localisé avec miroir, douleur non positionnelle.'],
      ['Embolie pulmonaire', 'Dyspnée, tachycardie, facteurs de risque.'],
      [
        'Dissection aortique',
        'Douleur déchirante, asymétrie tensionnelle ; épanchement hémorragique possible.',
      ],
      ['Pleurésie', 'Matité, épanchement pleural sans compression cardiaque.'],
    ],
    etiologies:
      '## Causes\n- **Tuberculose** (première cause des épanchements abondants en Afrique, surtout avec le VIH)\n- Virale ou idiopathique\n- Bactérienne purulente (staphylocoque, pneumocoque)\n- Urémique, néoplasique, post-infarctus, auto-immune',
    principes: [
      [
        'Tamponnade : ponction en urgence',
        'Restaurer le débit cardiaque.',
        '- **Péricardiocentèse** guidée (échographie) ou drainage chirurgical\n- Remplissage prudent en attendant ; éviter les diurétiques et vasodilatateurs',
      ],
      [
        'Péricardite virale ou idiopathique',
        'Calmer l’inflammation et prévenir la récidive.',
        '- **Aspirine** 750–1 000 mg 3 fois par jour (ou **ibuprofène** 600 mg 3 fois par jour) 1 à 2 semaines puis décroissance\n- + **Colchicine** pendant 3 mois\n- Repos, protection gastrique\n- Pas de corticoïdes en première intention',
      ],
      [
        'Péricardite tuberculeuse',
        'Guérir et éviter la constriction.',
        '- Traitement antituberculeux standard (2RHZE/4RH)\n- Corticoïdes discutés (prednisolone), surtout chez la personne non infectée par le VIH\n- ARV chez la PVVIH',
      ],
      [
        'Péricardite purulente',
        'Drainer et traiter l’infection.',
        '- Drainage chirurgical, antibiothérapie IV',
      ],
    ],
    molecules: [
      ['acide-acetylsalicylique', 'premiere', 'Péricardite virale ou idiopathique'],
      ['ibuprofene', 'alternative', 'À la place de l’aspirine'],
      ['colchicine', 'premiere', 'Association pendant 3 mois'],
      ['rifampicine', 'premiere', 'Péricardite tuberculeuse'],
      ['isoniazide', 'premiere', 'Péricardite tuberculeuse'],
      ['prednisolone', 'adjuvant', 'Péricardite tuberculeuse, formes réfractaires'],
    ],
    complications: [
      {
        nom: 'Tamponnade',
        description: 'Compression cardiaque, choc.',
        traitement: '- Péricardiocentèse urgente',
        clinique: '- PA, pouls paradoxal, jugulaires',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Péricardite constrictive',
        description: 'Fibrose du péricarde (tuberculose).',
        traitement: '- Péricardectomie',
        clinique: '- Œdèmes, ascite, hépatomégalie, jugulaires turgescentes',
        paraclinique: '- Échocardiographie, scanner',
      },
      {
        nom: 'Récidives',
        description: '15 à 30 % sans colchicine.',
        traitement: '- Aspirine ou AINS + colchicine',
        clinique: '- Retour de la douleur',
        paraclinique: '- CRP',
      },
    ],
    evolution:
      '## Pronostic\n- Péricardite virale : guérison en 1 à 3 semaines\n- Tuberculeuse : risque de constriction et de décès, réduit par le traitement précoce',
    urgences: [],
    symptomes: [
      ['Douleur thoracique', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Œdèmes', 'occasionnel'],
      ['Hypotension', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'Guide technique de prise en charge de la tuberculose',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Reconnaître une douleur thoracique positionnelle et les signes de tamponnade, transfert',
        '- Dyspnée, hypotension, turgescence jugulaire',
      ],
      hgr: [
        '- ECG, échocardiographie, anti-inflammatoires, bilan de tuberculose et VIH, péricardiocentèse',
        '- Péricardite purulente, constriction',
      ],
      tert: ['- Drainage chirurgical, péricardectomie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Péricardite aiguë bénigne',
        type: 'commune',
        description: 'Douleur positionnelle et frottement.',
        terrain: '- Adulte jeune, épisode viral récent',
        fonctionnels: '- Douleur thoracique augmentée par l’inspiration et le décubitus',
        generaux: '- Fièvre modérée',
        physiques: '- Frottement péricardique',
        paraclinique: '- Sus-décalage ST diffus, sous-décalage du PR',
        etiologies: '- Virale ou idiopathique',
        syndromes: [],
        examens: [['ecg', 'Signes électriques']],
      },
      {
        nom: 'Tamponnade',
        type: 'gravite',
        description: 'Compression cardiaque.',
        terrain: '- Épanchement abondant ou rapide',
        fonctionnels: '- Dyspnée, angoisse',
        generaux: '- Hypotension, tachycardie',
        physiques: '- Turgescence jugulaire, pouls paradoxal, bruits assourdis',
        paraclinique: '- Compression des cavités droites',
        etiologies: '- Tuberculose, purulente, néoplasique',
        syndromes: ['syndrome-de-choc', 'syndrome-d-insuffisance-cardiaque-droite'],
      },
      {
        nom: 'Péricardite tuberculeuse',
        type: 'etiologique',
        description: 'Grand épanchement d’installation progressive.',
        terrain: '- PVVIH, contact tuberculeux',
        fonctionnels: '- Dyspnée progressive',
        generaux: '- Fièvre, sueurs, amaigrissement',
        physiques: '- Hépatomégalie, œdèmes',
        paraclinique: '- Exsudat lymphocytaire, GeneXpert',
        etiologies: '- *M. tuberculosis*',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
      },
    ],
  },

  // =================================================================== Valvulopathies rhumatismales
  {
    ...CARDIO,
    slug: 'valvulopathies-rhumatismales',
    nom: 'Valvulopathies rhumatismales',
    resume:
      'Séquelle du rhumatisme articulaire aigu, première cardiopathie de l’adulte jeune en Afrique : rétrécissement et insuffisance mitrale, insuffisance aortique ; prophylaxie par benzathine pénicilline.',
    definition:
      'Atteinte chronique des valves cardiaques (mitrale surtout, puis aortique) consécutive à un ou plusieurs épisodes de rhumatisme articulaire aigu, réalisant des rétrécissements, des insuffisances ou des polyvalvulopathies.',
    physiopathologie:
      '## Mécanismes\n- Réaction auto-immune croisée après une angine à streptocoque A\n- Inflammation répétée des valves : épaississement, fusion des commissures, rétraction\n- Rétrécissement mitral : hausse de pression dans l’oreillette gauche, hypertension pulmonaire, FA\n- Insuffisances : surcharge volumique, dilatation ventriculaire, insuffisance cardiaque',
    diagnostic:
      '## Clinique\n- Dyspnée d’effort progressive, palpitations, hémoptysies (rétrécissement mitral)\n- Souffles : roulement diastolique apexien (RM), souffle holosystolique apexien (IM), souffle diastolique aortique (IAo)\n- Signes d’insuffisance cardiaque, FA, embolies\n- Aggravation pendant la grossesse\n\n## Confirmation\n- Échocardiographie (critères de la World Heart Federation) : épaississement, restriction, sévérité',
    examens: [
      [
        'confirmation',
        'echocardiographie',
        'Atteinte rhumatismale, sévérité (surface mitrale, fuite), pressions pulmonaires, fonction ventriculaire.',
      ],
      ['premiere_intention', 'ecg', 'FA, hypertrophie auriculaire gauche, hypertrophie ventriculaire.'],
      ['premiere_intention', 'radiographie-thoracique', 'Cardiomégalie, surcharge pulmonaire.'],
      ['premiere_intention', 'nfs', 'Anémie aggravante.'],
      ['suivi', 'hemostase', 'INR sous antivitamine K.'],
    ],
    scores: ['nyha'],
    differentiels: [
      ['Cardiopathies congénitales', 'Souffle depuis l’enfance, morphologie différente.'],
      ['cardiomyopathie-dilatee', 'Fuite mitrale fonctionnelle sur ventricule dilaté, valves fines.'],
      ['endocardite-infectieuse', 'Fièvre, hémocultures positives (peut compliquer une valvulopathie).'],
    ],
    etiologies:
      '## Cause\n- Rhumatisme articulaire aigu (angines à streptocoque A non traitées dans l’enfance)\n\n## Facteurs\n- Pauvreté, promiscuité, accès limité aux antibiotiques\n- Récidives de rhumatisme articulaire aigu par arrêt de la prophylaxie',
    principes: [
      [
        'Prophylaxie secondaire',
        'Éviter les récidives qui aggravent les valves.',
        '- **Benzathine benzylpénicilline** 1,2 MUI IM toutes les 3 à 4 semaines\n- Durée : au moins 10 ans après le dernier épisode, jusqu’à 40 ans (ou à vie) si atteinte modérée ou sévère\n- Allergie : érythromycine',
      ],
      [
        'Traitement de l’insuffisance cardiaque',
        'Soulager.',
        '- Diurétiques (**furosémide**), restriction sodée\n- RM : **bêtabloquant** pour ralentir la fréquence\n- Insuffisance mitrale ou aortique avec FEVG altérée : IEC',
      ],
      [
        'Fibrillation atriale et anticoagulation',
        'Prévenir les embolies.',
        '- FA avec rétrécissement mitral ou prothèse mécanique : **warfarine** (INR 2–3 ; 2,5–3,5 pour une prothèse mitrale)\n- Les anticoagulants oraux directs ne sont pas indiqués dans le RM rhumatismal',
      ],
      [
        'Interventions',
        'Corriger la lésion.',
        '- RM serré : dilatation mitrale percutanée ou commissurotomie\n- Fuites sévères symptomatiques : chirurgie (réparation ou remplacement valvulaire) en centre spécialisé',
      ],
      [
        'Grossesse et soins dentaires',
        'Prévenir les complications.',
        '- Conseil préconceptionnel, suivi cardio-obstétrical, contraception\n- Hygiène dentaire ; prophylaxie de l’endocardite chez les porteurs de prothèse',
      ],
    ],
    molecules: [
      ['benzathine-benzylpenicilline', 'premiere', 'Prophylaxie secondaire toutes les 3 à 4 semaines'],
      ['erythromycine', 'alternative', 'Prophylaxie en cas d’allergie'],
      ['furosemide', 'premiere', 'Congestion'],
      ['bisoprolol', 'premiere', 'Rétrécissement mitral, FA'],
      ['warfarine', 'premiere', 'FA ou prothèse mécanique'],
      ['digoxine', 'alternative', 'FA avec insuffisance cardiaque'],
      ['enalapril', 'adjuvant', 'Fuites avec dysfonction ventriculaire'],
    ],
    complications: [
      {
        nom: 'Fibrillation atriale',
        fiche: 'fibrillation-atriale',
        description: 'Très fréquente dans le rétrécissement mitral.',
        traitement: '- Contrôle de la fréquence, warfarine',
        clinique: '- Pouls irrégulier',
        paraclinique: '- ECG',
      },
      {
        nom: 'Insuffisance cardiaque et hypertension pulmonaire',
        fiche: 'insuffisance-cardiaque',
        description: 'Évolution naturelle des lésions sévères.',
        traitement: '- Diurétiques, intervention valvulaire',
        clinique: '- Dyspnée, œdèmes',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'AVC cardio-embolique',
        fiche: 'avc',
        description: 'Thrombus de l’oreillette gauche.',
        traitement: '- Anticoagulation',
        clinique: '- Déficit neurologique',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Endocardite infectieuse',
        fiche: 'endocardite-infectieuse',
        description: 'Greffe bactérienne sur valve lésée.',
        traitement: '- Antibiothérapie prolongée',
        clinique: '- Fièvre',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Décompensation pendant la grossesse',
        description: 'Surtout dans le rétrécissement mitral.',
        traitement: '- Bêtabloquant, diurétiques, dilatation mitrale si besoin',
        clinique: '- Dyspnée',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Progression lente, aggravée par les récidives de rhumatisme articulaire aigu\n- Prophylaxie bien suivie : régression possible des lésions légères',
    urgences: ['oedeme-aigu-du-poumon'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Palpitations', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Œdèmes', 'frequent'],
      ['Hémoptysie', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
      'AHA — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Benzathine pénicilline mensuelle, suivi des patients, dépistage des signes d’insuffisance cardiaque',
        '- Dyspnée aggravée, palpitations, grossesse',
      ],
      hgr: [
        '- Échocardiographie, traitement médical, warfarine et INR',
        '- Indication d’intervention valvulaire',
      ],
      tert: ['- Dilatation mitrale percutanée, chirurgie cardiaque', ''],
    },
    alertes: {
      'oedeme-aigu-du-poumon':
        'Valvulaire connu avec dyspnée de repos, toux mousseuse, notamment pendant la grossesse',
    },
    formes: [
      {
        nom: 'Rétrécissement mitral',
        type: 'commune',
        description: 'Lésion rhumatismale la plus typique.',
        terrain: '- Femme jeune, antécédent de RAA',
        fonctionnels: '- Dyspnée d’effort, hémoptysie, palpitations',
        generaux: '',
        physiques: '- Éclat de B1, roulement diastolique apexien, claquement d’ouverture',
        paraclinique: '- Surface mitrale réduite, gradient élevé',
        etiologies: '- Rhumatisme articulaire aigu',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
        examens: [['echocardiographie', 'Sévérité']],
      },
      {
        nom: 'Insuffisance mitrale et aortique',
        type: 'commune',
        description: 'Fuites valvulaires avec surcharge volumique.',
        terrain: '- Adolescent et adulte jeune',
        fonctionnels: '- Dyspnée, asthénie',
        generaux: '',
        physiques: '- Souffle holosystolique apexien, souffle diastolique aortique, pouls bondissant',
        paraclinique: '- Fuite sévère, dilatation ventriculaire',
        etiologies: '- Rhumatisme articulaire aigu',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
      },
    ],
  },

  // =================================================================== RAA adulte
  {
    ...CARDIO,
    slug: 'rhumatisme-articulaire-aigu-adulte',
    nom: 'Rhumatisme articulaire aigu de l’adulte',
    resume:
      'Complication inflammatoire d’une angine streptococcique : polyarthrite migratrice, cardite ; critères de Jones, éradication du streptocoque, prophylaxie secondaire.',
    definition:
      'Maladie inflammatoire systémique survenant 2 à 4 semaines après une pharyngite à streptocoque du groupe A, touchant les articulations, le cœur, le système nerveux et la peau ; rare après 25 ans mais récidives fréquentes chez l’adulte jeune.',
    physiopathologie:
      '## Mécanismes\n- Mimétisme moléculaire entre antigènes streptococciques et tissus de l’hôte\n- Réponse auto-immune : arthrite (réversible), cardite (séquelles valvulaires), chorée',
    diagnostic:
      '## Critères de Jones (révision 2015)\n- **Majeurs** : cardite (clinique ou échographique), polyarthrite (ou monoarthrite, polyarthralgie en population à haut risque), chorée, érythème marginé, nodules sous-cutanés\n- **Mineurs** : fièvre ≥ 38 °C, arthralgies, VS ou CRP élevées, allongement du PR\n- Diagnostic : 2 majeurs, ou 1 majeur + 2 mineurs, **avec preuve d’infection streptococcique** (ASLO élevés, prélèvement de gorge)\n\n## Clinique\n- Arthrite des grosses articulations, migratrice, très douloureuse, sensible à l’aspirine\n- Cardite : souffle nouveau, tachycardie, insuffisance cardiaque, péricardite',
    examens: [
      ['confirmation', 'aslo', 'Élevés : preuve d’une infection streptococcique récente.'],
      ['premiere_intention', 'crp', 'Élevée ; suivi de l’inflammation.'],
      ['premiere_intention', 'echocardiographie', 'Cardite : fuite mitrale ou aortique, épanchement.'],
      ['premiere_intention', 'ecg', 'Allongement du PR, troubles de conduction.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose, anémie inflammatoire.'],
    ],
    scores: [],
    differentiels: [
      ['Arthrite septique', 'Monoarthrite fixe très inflammatoire, ponction articulaire purulente.'],
      ['drepanocytose', 'Crises douloureuses osseuses et articulaires, électrophorèse.'],
      ['Arthrites virales (chikungunya)', 'Contexte épidémique, ASLO normaux.'],
      ['Lupus, polyarthrite rhumatoïde', 'Atteinte symétrique fixe des petites articulations.'],
      ['endocardite-infectieuse', 'Fièvre et souffle, hémocultures positives.'],
    ],
    etiologies:
      '## Cause\n- Pharyngite à *Streptococcus pyogenes* (groupe A) non ou mal traitée\n\n## Facteurs\n- Pauvreté, surpeuplement, antécédent de RAA',
    principes: [
      [
        'Éradiquer le streptocoque',
        'Supprimer l’antigène déclenchant.',
        '- **Benzathine benzylpénicilline** 1,2 MUI IM en dose unique\n- Ou **phénoxyméthylpénicilline** 10 jours ; allergie : érythromycine',
      ],
      [
        'Traiter l’inflammation',
        'Soulager l’arthrite.',
        '- **Aspirine** 50–60 mg/kg/j (jusqu’à 80–100 mg/kg/j en 4 prises) pendant 2 à 4 semaines puis décroissance\n- Cardite sévère : **prednisolone** 1–2 mg/kg/j (discuté)',
      ],
      [
        'Traiter la cardite et la chorée',
        'Limiter les séquelles.',
        '- Insuffisance cardiaque : diurétiques, IEC, repos\n- Chorée invalidante : carbamazépine ou valproate',
      ],
      [
        'Prophylaxie secondaire',
        'Éviter les récidives.',
        '- Benzathine benzylpénicilline 1,2 MUI IM toutes les 3 à 4 semaines\n- Durée selon l’atteinte cardiaque (au moins 10 ans ou jusqu’à 40 ans)',
      ],
    ],
    molecules: [
      ['benzathine-benzylpenicilline', 'premiere', 'Éradication puis prophylaxie secondaire'],
      ['phenoxymethylpenicilline', 'alternative', 'Éradication orale 10 jours'],
      ['erythromycine', 'alternative', 'Allergie à la pénicilline'],
      ['acide-acetylsalicylique', 'premiere', 'Anti-inflammatoire'],
      ['prednisolone', 'adjuvant', 'Cardite sévère'],
      ['furosemide', 'adjuvant', 'Insuffisance cardiaque'],
      ['carbamazepine', 'adjuvant', 'Chorée invalidante'],
    ],
    complications: [
      {
        nom: 'Valvulopathie rhumatismale',
        fiche: 'valvulopathies-rhumatismales',
        description: 'Séquelle de la cardite, aggravée par chaque récidive.',
        traitement: '- Prophylaxie secondaire stricte',
        clinique: '- Souffle',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Insuffisance cardiaque aiguë',
        fiche: 'insuffisance-cardiaque',
        description: 'Cardite sévère.',
        traitement: '- Diurétiques, corticoïdes',
        clinique: '- Dyspnée, tachycardie',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Arthrite guérie sans séquelle\n- Le risque de valvulopathie dépend de la sévérité de la cardite et de l’observance de la prophylaxie',
    urgences: [],
    symptomes: [
      ['Arthralgies', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Palpitations', 'occasionnel'],
      ['Mouvements involontaires', 'rare'],
      ['Nodules sous-cutanés', 'rare'],
    ],
    sources: [
      'AHA — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Traitement des angines, éradication, aspirine, prophylaxie secondaire',
        '- Souffle, dyspnée, chorée',
      ],
      hgr: ['- Échocardiographie, ECG, prise en charge de la cardite', ''],
      tert: ['- Cardite sévère, chirurgie des séquelles', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Polyarthrite rhumatismale',
        type: 'commune',
        description: 'Arthrite migratrice des grosses articulations.',
        terrain: '- Adolescent, adulte jeune, angine récente',
        fonctionnels: '- Douleurs articulaires intenses',
        generaux: '- Fièvre',
        physiques: '- Arthrite des genoux, chevilles, coudes, poignets, migratrice',
        paraclinique: '- ASLO et CRP élevés',
        etiologies: '- Streptocoque A',
        syndromes: ['syndrome-infectieux'],
        examens: [['aslo', 'Preuve streptococcique']],
      },
      {
        nom: 'Cardite rhumatismale',
        type: 'gravite',
        description: 'Atteinte du cœur.',
        terrain: '- Premier épisode ou récidive',
        fonctionnels: '- Dyspnée, palpitations',
        generaux: '- Tachycardie',
        physiques: '- Souffle nouveau, frottement, galop',
        paraclinique: '- Fuite valvulaire, PR allongé',
        etiologies: '- Réaction auto-immune',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
      },
    ],
  },

  // =================================================================== Embolie pulmonaire
  {
    ...CARDIO,
    slug: 'embolie-pulmonaire',
    nom: 'Embolie pulmonaire',
    resume:
      'Obstruction artérielle pulmonaire par un caillot : dyspnée et douleur thoracique ; probabilité clinique, D-dimères, angioscanner ; anticoagulation, thrombolyse si choc.',
    definition:
      'Obstruction d’une ou plusieurs artères pulmonaires par un thrombus, le plus souvent issu d’une thrombose veineuse profonde des membres inférieurs.',
    physiopathologie:
      '## Mécanismes\n- Triade de Virchow : stase, lésion endothéliale, hypercoagulabilité\n- Obstruction vasculaire : hypoxémie, surcharge du ventricule droit\n- Embolie massive : défaillance du ventricule droit, choc, arrêt cardiaque',
    diagnostic:
      '## Clinique\n- Dyspnée brutale, douleur thoracique pleurale, toux, hémoptysie, syncope\n- Tachycardie, tachypnée, signes de TVP\n\n## Démarche\n- Probabilité clinique (score de Wells)\n- Faible ou intermédiaire : **D-dimères** ; négatifs = EP exclue\n- Élevée ou D-dimères positifs : **angioscanner** (ou écho-Doppler veineux positif + clinique)\n- Choc : échocardiographie au lit (dilatation du VD) suffit pour traiter',
    examens: [
      ['premiere_intention', 'd-dimeres', 'Négatifs avec probabilité non élevée : exclut l’EP.'],
      ['confirmation', 'angioscanner-thoracique', 'Défect endoluminal des artères pulmonaires.'],
      [
        'deuxieme_intention',
        'echo-doppler-veineux',
        'TVP : argument suffisant chez un patient symptomatique.',
      ],
      ['gravite', 'echocardiographie', 'Dilatation et dysfonction du ventricule droit.'],
      ['gravite', 'troponine', 'Élevée = souffrance du VD (risque intermédiaire haut).'],
      ['premiere_intention', 'ecg', 'Tachycardie, S1Q3T3, bloc de branche droit ; élimine un SCA.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxémie.'],
      ['pretherapeutique', 'creatinine', 'Choix de l’anticoagulant et du contraste.'],
      ['pretherapeutique', 'nfs', 'Plaquettes avant héparine.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['syndrome-coronarien-aigu-st-plus', 'ECG avec sus-décalage du ST.'],
      ['Pneumonie', 'Fièvre, foyer radiologique.'],
      ['pericardite-aigue-et-tamponnade', 'Douleur positionnelle, frottement.'],
      ['Pneumothorax', 'Abolition du murmure, radiographie.'],
      ['insuffisance-cardiaque', 'Crépitants bilatéraux, BNP élevé.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Chirurgie, immobilisation, traumatisme, fracture\n- Grossesse et post-partum, contraception œstroprogestative\n- Cancer, VIH, syndrome néphrotique, drépanocytose\n- Antécédent de thrombose, insuffisance cardiaque, obésité, voyages prolongés',
    principes: [
      [
        'Anticoagulation immédiate',
        'Stopper l’extension du caillot.',
        '- Dès la suspicion forte : **énoxaparine** 1 mg/kg toutes les 12 h\n- Relais par **rivaroxaban** (15 mg 2 fois par jour 21 jours puis 20 mg/j) ou **apixaban** (10 mg 2 fois par jour 7 jours puis 5 mg 2 fois par jour), ou **warfarine** (INR 2–3)\n- Grossesse : héparine de bas poids moléculaire seule',
      ],
      [
        'EP grave (choc)',
        'Désobstruer.',
        '- **Thrombolyse** : altéplase 100 mg en 2 h ou **streptokinase**\n- Oxygène, remplissage prudent, noradrénaline',
      ],
      [
        'Durée du traitement',
        'Prévenir la récidive.',
        '- 3 mois si facteur déclenchant transitoire\n- Prolongée si cause persistante (cancer) ou EP non provoquée',
      ],
      [
        'Prévention',
        'Éviter les thromboses hospitalières.',
        '- Héparine préventive chez les patients alités, à risque, en post-partum à risque\n- Lever précoce, contention',
      ],
    ],
    molecules: [
      ['enoxaparine', 'premiere', 'Traitement initial'],
      ['heparine-non-fractionnee', 'alternative', 'Insuffisance rénale sévère, avant thrombolyse'],
      ['rivaroxaban', 'premiere', 'Relais oral'],
      ['apixaban', 'premiere', 'Relais oral'],
      ['warfarine', 'alternative', 'Relais oral (INR 2–3)'],
      ['alteplase', 'deuxieme', 'EP grave avec choc'],
      ['streptokinase', 'alternative', 'Thrombolyse si altéplase indisponible'],
    ],
    complications: [
      {
        nom: 'Choc et arrêt cardiaque',
        description: 'EP massive.',
        traitement: '- Thrombolyse, réanimation',
        clinique: '- PA, conscience',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Hypertension pulmonaire thrombo-embolique chronique',
        description: 'Dyspnée persistante après 3 mois.',
        traitement: '- Avis spécialisé',
        clinique: '- Dyspnée d’effort',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Hémorragie sous anticoagulant',
        description: 'Digestive, cérébrale.',
        traitement: '- Arrêt, antidote selon le produit',
        clinique: '- Saignements',
        paraclinique: '- Hb, INR',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité < 2 % des EP à faible risque, > 30 % des EP avec choc\n- Récidive fréquente à l’arrêt d’un traitement pour EP non provoquée',
    urgences: [],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Douleur thoracique', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Toux', 'occasionnel'],
      ['Hémoptysie', 'occasionnel'],
      ['Syncope', 'occasionnel'],
      ['Œdème d’un membre', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'CHEST — recommandations de pratique clinique',
      'ISTH — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Suspicion (dyspnée brutale, mollet douloureux), oxygène, transfert', '- Toute suspicion'],
      hgr: [
        '- D-dimères, écho-Doppler, énoxaparine, relais oral',
        '- Choc, besoin d’angioscanner ou de thrombolyse',
      ],
      tert: ['- Angioscanner, thrombolyse, réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'EP à risque faible ou intermédiaire',
        type: 'commune',
        description: 'Dyspnée et douleur pleurale sans choc.',
        terrain: '- Post-partum, chirurgie, immobilisation',
        fonctionnels: '- Dyspnée brutale, douleur thoracique',
        generaux: '- Tachycardie',
        physiques: '- Signes de TVP inconstants',
        paraclinique: '- D-dimères élevés, angioscanner positif',
        etiologies: '- TVP des membres inférieurs',
        syndromes: ['syndrome-de-detresse-respiratoire'],
        examens: [['angioscanner-thoracique', 'Confirmation']],
      },
      {
        nom: 'EP grave avec choc',
        type: 'gravite',
        description: 'Défaillance du ventricule droit.',
        terrain: '- Obstruction massive',
        fonctionnels: '- Dyspnée intense, syncope',
        generaux: '- Hypotension, marbrures',
        physiques: '- Turgescence jugulaire',
        paraclinique: '- VD dilaté à l’échocardiographie',
        etiologies: '- Embolie massive',
        syndromes: ['syndrome-de-choc', 'syndrome-d-insuffisance-cardiaque-droite'],
      },
    ],
  },

  // =================================================================== TVP
  {
    ...CARDIO,
    slug: 'thrombose-veineuse-profonde',
    nom: 'Thrombose veineuse profonde',
    resume:
      'Caillot dans une veine profonde (jambe surtout) : mollet douloureux et œdème unilatéral ; D-dimères, écho-Doppler, anticoagulation 3 mois.',
    definition:
      'Formation d’un thrombus dans une veine profonde, le plus souvent des membres inférieurs (veines du mollet, poplitée, fémorale, iliaque), exposant à l’embolie pulmonaire et au syndrome post-thrombotique.',
    physiopathologie:
      '## Mécanismes\n- Triade de Virchow : stase veineuse, lésion de la paroi, hypercoagulabilité\n- Extension proximale et risque d’embolie pulmonaire\n- Destruction valvulaire : syndrome post-thrombotique',
    diagnostic:
      '## Clinique\n- Douleur du mollet, œdème unilatéral, chaleur, dilatation veineuse superficielle\n- Diminution du ballant du mollet\n- Signes souvent absents : penser à la TVP sur terrain à risque\n\n## Démarche\n- Probabilité clinique (score de Wells)\n- Faible : D-dimères ; négatifs = TVP exclue\n- Sinon : **écho-Doppler veineux** (incompressibilité)',
    examens: [
      ['confirmation', 'echo-doppler-veineux', 'Veine incompressible, thrombus visible.'],
      ['premiere_intention', 'd-dimeres', 'Négatifs avec probabilité faible : TVP exclue.'],
      ['pretherapeutique', 'nfs', 'Plaquettes.'],
      ['pretherapeutique', 'creatinine', 'Choix de l’anticoagulant.'],
      ['etiologique', 'tdr-vih', 'VIH : facteur de risque thrombotique.'],
      ['etiologique', 'beta-hcg', 'Femme en âge de procréer.'],
    ],
    scores: [],
    differentiels: [
      ['Cellulite et érysipèle', 'Fièvre, placard rouge, porte d’entrée.'],
      ['Kyste poplité rompu', 'Échographie.'],
      ['Hématome ou déchirure musculaire', 'Traumatisme, ecchymose.'],
      ['Œdèmes bilatéraux (insuffisance cardiaque, rénale, hypoalbuminémie)', 'Bilatéraux, symétriques.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Post-partum, césarienne, grossesse\n- Chirurgie orthopédique ou abdominale, plâtre, alitement\n- Cancer, VIH, syndrome néphrotique, drépanocytose, insuffisance cardiaque\n- Contraception œstroprogestative, obésité, antécédent de thrombose',
    principes: [
      [
        'Anticoagulation',
        'Prévenir l’extension et l’embolie.',
        '- **Énoxaparine** 1 mg/kg toutes les 12 h puis relais oral\n- **Rivaroxaban** ou **apixaban** d’emblée ou en relais, ou **warfarine** (INR 2–3)\n- Grossesse et cancer : héparine de bas poids moléculaire',
      ],
      [
        'Mesures associées',
        'Soulager et prévenir les séquelles.',
        '- Lever précoce, pas d’alitement strict\n- Contention élastique',
      ],
      [
        'Durée',
        'Prévenir la récidive.',
        '- 3 mois si facteur transitoire ; prolongée si cause persistante ou TVP non provoquée',
      ],
      [
        'Prévention',
        'Éviter les thromboses.',
        '- Héparine préventive en post-opératoire, chez les patients alités à risque et dans le post-partum à risque',
      ],
    ],
    molecules: [
      ['enoxaparine', 'premiere', 'Traitement initial'],
      ['rivaroxaban', 'premiere', 'Traitement oral'],
      ['apixaban', 'premiere', 'Traitement oral'],
      ['warfarine', 'alternative', 'Relais oral'],
      ['heparine-non-fractionnee', 'alternative', 'Insuffisance rénale sévère'],
    ],
    complications: [
      {
        nom: 'Embolie pulmonaire',
        fiche: 'embolie-pulmonaire',
        description: 'Migration du thrombus.',
        traitement: '- Anticoagulation, thrombolyse si choc',
        clinique: '- Dyspnée, douleur thoracique',
        paraclinique: '- Angioscanner',
      },
      {
        nom: 'Syndrome post-thrombotique',
        description: 'Œdème chronique, douleurs, ulcère veineux.',
        traitement: '- Contention, soins des ulcères',
        clinique: '- Jambe lourde',
        paraclinique: '',
      },
      {
        nom: 'Phlegmatia caerulea',
        description: 'TVP massive avec ischémie.',
        traitement: '- Urgence vasculaire, thrombolyse ou thrombectomie',
        clinique: '- Membre cyanosé, froid',
        paraclinique: '- Écho-Doppler',
      },
    ],
    evolution: '## Pronostic\n- Bon sous traitement ; récidive dans 30 % des TVP non provoquées à 10 ans',
    urgences: [],
    symptomes: [
      ['Œdème d’un membre', 'tres_frequent'],
      ['Douleurs osseuses', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'CHEST — recommandations de pratique clinique',
      'ISTH — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Suspicion, transfert ; prévention (lever précoce)', '- Toute suspicion de TVP'],
      hgr: [
        '- Écho-Doppler, D-dimères, énoxaparine, relais oral, INR',
        '- Phlegmatia, embolie pulmonaire grave',
      ],
      tert: ['- Chirurgie vasculaire, thrombolyse', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'TVP proximale du membre inférieur',
        type: 'commune',
        description: 'Œdème et douleur unilatéraux.',
        terrain: '- Post-partum, chirurgie, immobilisation',
        fonctionnels: '- Douleur du mollet ou de la cuisse',
        generaux: '- Fébricule',
        physiques: '- Œdème unilatéral, mollet tendu et douloureux, chaleur',
        paraclinique: '- Veine fémorale ou poplitée incompressible',
        etiologies: '- Stase, hypercoagulabilité',
        syndromes: [],
        examens: [['echo-doppler-veineux', 'Confirmation']],
      },
    ],
  },

  // =================================================================== Urgences hypertensives
  {
    ...CARDIO,
    slug: 'urgences-hypertensives',
    nom: 'Urgences hypertensives',
    resume:
      'HTA sévère avec atteinte aiguë d’organe (encéphalopathie, OAP, AVC, SCA, dissection, éclampsie) : baisse contrôlée IV ; sans atteinte d’organe, traitement oral progressif.',
    definition:
      'Élévation sévère de la pression artérielle (souvent ≥ 180/120 mmHg) associée à une atteinte aiguë d’un organe cible (urgence hypertensive vraie), à distinguer de l’HTA sévère sans atteinte d’organe, qui se traite par voie orale.',
    physiopathologie:
      '## Mécanismes\n- Dépassement de l’autorégulation vasculaire : œdème cérébral, hémorragies rétiniennes, lésions rénales\n- Hausse brutale de la postcharge : OAP, ischémie myocardique\n- Microangiopathie (HTA maligne)',
    diagnostic:
      '## Atteintes d’organe à rechercher\n- **Cerveau** : céphalées, confusion, convulsions, troubles visuels (encéphalopathie), déficit (AVC)\n- **Cœur** : OAP, douleur thoracique (SCA), dissection aortique\n- **Rein** : insuffisance rénale aiguë, hématurie, protéinurie\n- **Œil** : hémorragies, exsudats, œdème papillaire (HTA maligne)\n- **Grossesse** : pré-éclampsie sévère, éclampsie\n\n## Sans atteinte d’organe\n- HTA sévère isolée : souvent arrêt du traitement, douleur, anxiété',
    examens: [
      ['premiere_intention', 'ecg', 'Ischémie, hypertrophie ventriculaire gauche.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale aiguë.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie, hématurie.'],
      ['premiere_intention', 'fond-d-oeil', 'Hémorragies, exsudats, œdème papillaire.'],
      ['premiere_intention', 'troponine', 'Douleur thoracique.'],
      ['premiere_intention', 'beta-hcg', 'Femme en âge de procréer (pré-éclampsie).'],
      ['gravite', 'scanner-cerebral', 'Déficit, coma : AVC hémorragique ou ischémique.'],
      ['gravite', 'radiographie-thoracique', 'OAP, élargissement du médiastin.'],
      ['premiere_intention', 'nfs', 'Microangiopathie (schizocytes, thrombopénie).'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['HTA sévère sans atteinte d’organe', 'Examen et bilan normaux : traitement oral, pas d’urgence IV.'],
      ['avc', 'L’HTA peut être réactionnelle : objectifs tensionnels propres à l’AVC.'],
      ['Douleur, anxiété, rétention urinaire', 'HTA réactionnelle.'],
    ],
    etiologies:
      '## Causes\n- HTA essentielle mal contrôlée, arrêt du traitement (fréquent)\n- Maladie rénale, pré-éclampsie\n- Causes secondaires : sténose des artères rénales, phéochromocytome, cocaïne et amphétamines',
    principes: [
      [
        'Urgence vraie : baisse contrôlée IV',
        'Protéger les organes sans hypoperfusion.',
        '- Baisse de la pression artérielle moyenne de 20 à 25 % la 1re heure, puis 160/100 mmHg dans les 2 à 6 heures\n- **Nicardipine** IV ou **labétalol** IV (selon disponibilité)\n- Hospitalisation, surveillance rapprochée',
      ],
      [
        'Situations particulières',
        'Adapter l’objectif.',
        '- **OAP** : **furosémide** IV + **trinitrine**\n- **Dissection aortique** : PAS < 120 mmHg en 20 min (bêtabloquant IV)\n- **AVC** : objectifs spécifiques (fiche AVC)\n- **Éclampsie** : sulfate de magnésium + **hydralazine** ou labétalol (fiche pré-éclampsie)',
      ],
      [
        'HTA sévère sans atteinte d’organe',
        'Baisse progressive sur 24 à 48 h.',
        '- Repos, reprise ou ajustement du traitement oral (**amlodipine**, IEC, diurétique)\n- **Pas de nifédipine sublinguale** (chute brutale, AVC)',
      ],
      [
        'Après la crise',
        'Éviter la récidive.',
        '- Traitement de fond, observance, bilan de l’HTA secondaire si sujet jeune',
      ],
    ],
    molecules: [
      ['nicardipine', 'premiere', 'IV, urgence hypertensive'],
      ['labetalol', 'premiere', 'IV, urgence hypertensive, grossesse'],
      ['hydralazine', 'alternative', 'Pré-éclampsie, éclampsie'],
      ['furosemide', 'premiere', 'OAP hypertensif'],
      ['trinitrine', 'premiere', 'OAP, SCA'],
      ['amlodipine', 'premiere', 'HTA sévère sans atteinte d’organe'],
      ['captopril', 'alternative', 'Traitement oral'],
      ['sulfate-de-magnesium', 'adjuvant', 'Éclampsie'],
    ],
    complications: [
      {
        nom: 'AVC',
        fiche: 'avc',
        description: 'Hémorragique ou ischémique ; aussi par baisse trop brutale.',
        traitement: '- Objectifs de l’AVC',
        clinique: '- Déficit, conscience',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Œdème aigu du poumon',
        fiche: 'insuffisance-cardiaque',
        description: 'Insuffisance ventriculaire gauche aiguë.',
        traitement: '- Furosémide, dérivés nitrés, oxygène',
        clinique: '- Crépitants, SpO2',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Néphroangiosclérose maligne.',
        traitement: '- Contrôle tensionnel, dialyse si besoin',
        clinique: '- Diurèse',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- HTA maligne non traitée : mortalité élevée à 1 an\n- Sous traitement : bon pronostic si l’observance est assurée',
    urgences: ['urgence-hypertensive', 'oedeme-aigu-du-poumon', 'avc-aigu', 'eclampsie'],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Troubles visuels', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Douleur thoracique', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
      ['Déficit moteur', 'occasionnel'],
    ],
    sources: [
      '2024 ESC Guidelines for the management of elevated blood pressure and hypertension',
      'ISH Global Hypertension Practice Guidelines',
      'WHO recommendations: drug treatment for severe hypertension in pregnancy',
    ],
    niveaux: {
      cs: [
        '- Mesure répétée, recherche des signes d’atteinte d’organe, traitement oral si pas d’atteinte',
        '- Toute atteinte d’organe : transfert urgent',
      ],
      hgr: [
        '- Nicardipine ou labétalol IV, furosémide, bilan d’atteinte d’organe',
        '- AVC, dissection, besoin de réanimation',
      ],
      tert: ['- Réanimation, imagerie, prise en charge de la dissection', ''],
    },
    alertes: {
      'urgence-hypertensive':
        'PA ≥ 180/120 mmHg avec céphalées, confusion, troubles visuels, dyspnée ou douleur thoracique',
      'oedeme-aigu-du-poumon': 'HTA sévère avec dyspnée de repos et crépitants',
      'avc-aigu': 'HTA sévère avec déficit neurologique brutal',
      eclampsie: 'Femme enceinte avec HTA sévère, céphalées et convulsions',
    },
    formes: [
      {
        nom: 'Encéphalopathie hypertensive',
        type: 'commune',
        description: 'Céphalées, confusion, convulsions.',
        terrain: '- HTA ancienne mal suivie',
        fonctionnels: '- Céphalées, vomissements, troubles visuels',
        generaux: '',
        physiques: '- PA très élevée, confusion, œdème papillaire',
        paraclinique: '- Scanner sans hémorragie',
        etiologies: '- Dépassement de l’autorégulation cérébrale',
        syndromes: ['syndrome-d-hypertension-intracranienne', 'syndrome-confusionnel'],
        examens: [['fond-d-oeil', 'Œdème papillaire']],
      },
      {
        nom: 'OAP hypertensif',
        type: 'gravite',
        description: 'Insuffisance ventriculaire gauche aiguë.',
        terrain: '- HTA, insuffisance cardiaque',
        fonctionnels: '- Dyspnée de repos, orthopnée',
        generaux: '- Sueurs, angoisse',
        physiques: '- Crépitants bilatéraux',
        paraclinique: '- Œdème pulmonaire',
        etiologies: '- Hausse de la postcharge',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
      },
    ],
  },

  // =================================================================== Cardiomyopathie dilatée
  {
    ...CARDIO,
    slug: 'cardiomyopathie-dilatee',
    nom: 'Cardiomyopathie dilatée',
    resume:
      'Dilatation et dysfonction systolique du ventricule gauche sans cause coronaire ou valvulaire : alcool, VIH, péripartum, myocardite ; traitement de l’IC à FE réduite.',
    definition:
      'Maladie du muscle cardiaque caractérisée par une dilatation du ventricule gauche (ou des deux ventricules) avec altération de la fonction systolique, en l’absence de maladie coronaire, valvulaire ou hypertensive suffisante pour l’expliquer.',
    physiopathologie:
      '## Mécanismes\n- Atteinte myocardique (génétique, toxique, infectieuse, inflammatoire)\n- Baisse de la contractilité, activation neurohormonale (système rénine-angiotensine, sympathique)\n- Remodelage, insuffisance cardiaque, arythmies, thrombus',
    diagnostic:
      '## Clinique\n- Insuffisance cardiaque globale : dyspnée, orthopnée, œdèmes, hépatomégalie, turgescence jugulaire\n- Galop, souffle d’insuffisance mitrale fonctionnelle\n- Arythmies, embolies\n\n## Confirmation\n- Échocardiographie : VG dilaté, FEVG < 40 %, valves normales',
    examens: [
      ['confirmation', 'echocardiographie', 'VG dilaté, FEVG altérée, thrombus intraventriculaire.'],
      ['premiere_intention', 'bnp', 'Élevé.'],
      ['premiere_intention', 'ecg', 'Bloc de branche gauche, FA, arythmies ventriculaires.'],
      ['premiere_intention', 'radiographie-thoracique', 'Cardiomégalie.'],
      ['premiere_intention', 'ionogramme', 'Kaliémie et natrémie (traitements).'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['etiologique', 'tdr-vih', 'Cardiomyopathie du VIH.'],
      ['etiologique', 'tsh', 'Dysthyroïdie.'],
      ['etiologique', 'nfs', 'Anémie aggravante.'],
    ],
    scores: ['nyha'],
    differentiels: [
      ['valvulopathies-rhumatismales', 'Valves épaissies, rétrécissement.'],
      ['Cardiopathie ischémique', 'Antécédent d’infarctus, troubles segmentaires.'],
      ['Cardiopathie hypertensive', 'HTA sévère ancienne, hypertrophie.'],
      ['cardiomyopathie-du-peripartum', 'Survenue en fin de grossesse ou après l’accouchement.'],
      ['Endomyocardiofibrose', 'Ventricules non dilatés, apex comblé, oreillettes géantes.'],
    ],
    etiologies:
      '## Causes\n- Idiopathique ou familiale (génétique)\n- **Alcool**, carence en thiamine (béribéri), cocaïne\n- **VIH**, myocardites virales, maladie de Chagas (hors Afrique)\n- Péripartum, tachycardiomyopathie, chimiothérapie (anthracyclines)\n- Drépanocytose, malnutrition',
    principes: [
      [
        'Traitement de l’insuffisance cardiaque à FE réduite',
        'Réduire la mortalité.',
        '- **IEC** (énalapril) ou sacubitril-valsartan\n- **Bêtabloquant** (carvedilol, bisoprolol) à doses progressives\n- **Spironolactone**\n- Diurétiques (**furosémide**) selon la congestion\n- Inhibiteur de SGLT2 si disponible',
      ],
      [
        'Traiter la cause',
        'Permettre la récupération.',
        '- Arrêt de l’alcool, **thiamine** si alcool ou malnutrition\n- ARV chez la PVVIH, contrôle de la fréquence d’une tachyarythmie',
      ],
      ['Prévenir les embolies', 'Éviter les AVC.', '- Anticoagulation si FA ou thrombus intraventriculaire'],
      [
        'Mesures générales',
        'Améliorer la qualité de vie.',
        '- Restriction sodée, activité adaptée, vaccination antigrippale et antipneumococcique\n- Éducation thérapeutique, pesée régulière',
      ],
    ],
    molecules: [
      ['enalapril', 'premiere', 'IEC'],
      ['carvedilol', 'premiere', 'Bêtabloquant'],
      ['bisoprolol', 'alternative', 'Bêtabloquant'],
      ['spironolactone', 'premiere', 'Antagoniste de l’aldostérone'],
      ['furosemide', 'premiere', 'Congestion'],
      ['sacubitril', 'alternative', 'Sacubitril-valsartan à la place de l’IEC'],
      ['digoxine', 'adjuvant', 'FA rapide, symptômes persistants'],
      ['warfarine', 'adjuvant', 'FA ou thrombus'],
      ['vitamine-b1-thiamine', 'adjuvant', 'Alcool, malnutrition'],
    ],
    complications: [
      {
        nom: 'Insuffisance cardiaque décompensée',
        fiche: 'insuffisance-cardiaque',
        description: 'Poussées congestives.',
        traitement: '- Diurétiques IV, recherche du facteur déclenchant',
        clinique: '- Poids, dyspnée',
        paraclinique: '- BNP, ionogramme',
      },
      {
        nom: 'Arythmies et mort subite',
        description: 'Arythmies ventriculaires.',
        traitement: '- Bêtabloquant, correction du potassium, amiodarone',
        clinique: '- Palpitations, syncope',
        paraclinique: '- ECG',
      },
      {
        nom: 'Embolies',
        description: 'Thrombus intraventriculaire ou FA.',
        traitement: '- Anticoagulation',
        clinique: '- Déficit neurologique',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée sans traitement ; amélioration possible de la FEVG sous traitement optimal et suppression de la cause\n- Récupération fréquente dans les formes alcooliques sevrées',
    urgences: ['oedeme-aigu-du-poumon'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Œdèmes', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Palpitations', 'frequent'],
      ['Toux', 'occasionnel'],
      ['Syncope', 'rare'],
    ],
    sources: [
      '2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure (mise à jour 2023)',
      '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Repérage de l’insuffisance cardiaque, diurétiques, suivi du traitement de fond, éducation',
        '- Dyspnée de repos, œdèmes importants, syncope',
      ],
      hgr: ['- Échocardiographie, ECG, mise en place et titration du traitement', '- Choc, arythmies graves'],
      tert: ['- Cardiologie spécialisée, défibrillateur implantable', ''],
    },
    alertes: { 'oedeme-aigu-du-poumon': 'Cardiaque connu avec dyspnée de repos brutale et crépitants' },
    formes: [
      {
        nom: 'Forme commune',
        type: 'commune',
        description: 'Insuffisance cardiaque globale progressive.',
        terrain: '- Adulte jeune ou d’âge moyen',
        fonctionnels: '- Dyspnée d’effort puis de repos, orthopnée',
        generaux: '- Asthénie, amaigrissement',
        physiques: '- Cardiomégalie, galop, œdèmes, hépatomégalie, turgescence jugulaire',
        paraclinique: '- FEVG < 40 %, VG dilaté',
        etiologies: '- Idiopathique, alcool, VIH',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche', 'syndrome-d-insuffisance-cardiaque-droite'],
        examens: [['echocardiographie', 'Confirmation']],
      },
      {
        nom: 'Cardiomyopathie alcoolique',
        type: 'etiologique',
        description: 'Consommation chronique d’alcool.',
        terrain: '- Homme, alcool > 80 g/j depuis plus de 5 ans',
        fonctionnels: '- Dyspnée, palpitations',
        generaux: '',
        physiques: '- Signes d’alcoolisme',
        paraclinique: '- VG dilaté',
        etiologies: '- Toxicité de l’alcool, carence en thiamine',
        syndromes: [],
      },
    ],
  },
];
