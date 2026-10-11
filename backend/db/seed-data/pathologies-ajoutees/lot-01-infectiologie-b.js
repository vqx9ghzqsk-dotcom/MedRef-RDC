'use strict';

/**
 * Lot 1 (partie B) — infectiologie prioritaire en RDC : trypanosomiase humaine
 * africaine, tétanos, rage, méningite à cryptocoque, sepsis et choc septique. Fiches
 * rédigées par IA (OMS, MSF, programmes nationaux) : à valider par un médecin.
 */

const MI = { departement: 'medecine-interne', specialite: 'Infectiologie' };

module.exports = [
  // =================================================================== THA
  {
    ...MI,
    slug: 'trypanosomiase-humaine-africaine',
    nom: 'Trypanosomiase humaine africaine (maladie du sommeil)',
    resume:
      'Parasitose à T. b. gambiense transmise par la mouche tsé-tsé ; la RDC concentre la majorité des cas mondiaux. Dépister, stadifier, traiter par fexinidazole.',
    definition:
      'Infection par *Trypanosoma brucei gambiense*, transmise par la glossine (mouche tsé-tsé), évoluant d’une phase hémolymphatique (phase 1) vers une phase méningo-encéphalitique (phase 2) mortelle sans traitement.',
    physiopathologie:
      '## Mécanismes\n- Inoculation par la glossine, chancre d’inoculation (rarement vu)\n- Multiplication dans le sang et la lymphe : fièvre intermittente, adénopathies\n- Variation antigénique échappant à l’immunité\n- Franchissement de la barrière hémato-encéphalique : méningo-encéphalite, troubles du sommeil et du comportement',
    diagnostic:
      '## Phase 1 (hémolymphatique)\n- Fièvre intermittente, céphalées, prurit, arthralgies\n- **Adénopathies cervicales postérieures** mobiles et indolores (signe de Winterbottom)\n- Hépatosplénomégalie, œdèmes\n\n## Phase 2 (méningo-encéphalitique)\n- **Troubles du sommeil** : somnolence diurne, insomnie nocturne\n- Troubles du comportement, psychose, troubles de l’humeur\n- Troubles moteurs (tremblements, ataxie), hyperesthésie profonde (signe de Kérandel)\n- Évolution vers la cachexie et le coma\n\n## Démarche\n- Dépistage sérologique (CATT ou TDR) → confirmation parasitologique → ponction lombaire de stadification',
    examens: [
      [
        'presomption',
        'depistage-tha',
        'Positif : suspicion ; confirmer impérativement par la recherche du parasite.',
      ],
      [
        'confirmation',
        'parasitologie-tha',
        'Trypanosomes dans le suc ganglionnaire ou le sang (techniques de concentration) : diagnostic de certitude.',
      ],
      [
        'confirmation',
        'lcr',
        'Stadification : phase 2 si leucocytes > 5/µL ou trypanosomes ; ≥ 100 leucocytes/µL = phase 2 sévère.',
      ],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme associé fréquent.'],
      ['pretherapeutique', 'ecg', 'Avant fexinidazole : allongement du QT.'],
      ['suivi', 'lcr', 'Contrôle selon le protocole national en cas de rechute suspectée.'],
    ],
    scores: ['glasgow', 'dose-ponderale'],
    differentiels: [
      ['paludisme-simple', 'Fièvre intermittente ; TDR positif mais un paludisme n’exclut pas la THA.'],
      ['tuberculose-pulmonaire', 'Adénopathies, amaigrissement ; GeneXpert.'],
      ['infection-vih', 'Adénopathies généralisées, amaigrissement ; dépistage VIH.'],
      ['Psychose aiguë ou démence', 'Troubles du comportement : toujours dépister la THA en zone d’endémie.'],
      ['Méningite tuberculeuse ou à cryptocoque', 'LCR, recherche de BK et d’antigène cryptococcique.'],
    ],
    etiologies:
      '## Agent\n- *Trypanosoma brucei gambiense* (forme chronique, Afrique centrale et occidentale)\n\n## Facteurs\n- Activités en zones humides et forestières (pêche, agriculture, collecte d’eau)\n- Foyers actifs : Kwilu, Kwango, Kasaï, Mai-Ndombe, Équateur, Kongo-Central…\n- Transmission materno-fœtale possible',
    principes: [
      [
        'Dépister et confirmer',
        'Ne traiter que les cas confirmés.',
        '- Dépistage actif (équipes mobiles) et passif\n- Toute sérologie positive : recherche du parasite\n- Ponction lombaire pour la stadification (sauf si le fexinidazole est prescrit d’emblée selon le protocole)',
      ],
      [
        'Traitement de 1re intention par fexinidazole',
        'Traitement oral des phases 1 et 2 non sévère.',
        '- **Fexinidazole** per os pendant 10 jours au cours d’un repas, sous surveillance\n- À partir de 6 ans et 20 kg\n- Acoziborole (dose unique) en cours d’introduction selon le PNLTHA',
      ],
      [
        'Phase 2 sévère : NECT',
        'Traiter la méningo-encéphalite avancée.',
        '- Leucocytes ≥ 100/µL dans le LCR, ou fexinidazole impossible\n- **Nifurtimox** 15 mg/kg/j per os 10 jours + **éflornithine** 400 mg/kg/j IV 7 jours (NECT)\n- Hospitalisation',
      ],
      [
        'Phase 1 sans fexinidazole possible',
        'Alternative.',
        '- **Pentamidine** 4 mg/kg/j IM pendant 7 jours (enfant < 6 ans ou < 20 kg)',
      ],
      [
        'Suivi et lutte',
        'Dépister les rechutes et réduire la transmission.',
        '- Revenir en cas de réapparition des signes\n- Dépistage de l’entourage, pièges à glossines',
      ],
    ],
    molecules: [
      ['fexinidazole', 'premiere', 'Phase 1 et phase 2 non sévère, ≥ 6 ans et ≥ 20 kg'],
      ['nifurtimox', 'deuxieme', 'NECT : phase 2 sévère'],
      ['eflornithine', 'deuxieme', 'NECT : phase 2 sévère'],
      ['pentamidine', 'alternative', 'Phase 1, enfant < 6 ans ou < 20 kg'],
      ['paracetamol', 'adjuvant', 'Fièvre, céphalées'],
    ],
    complications: [
      {
        nom: 'Encéphalopathie réactionnelle',
        description: 'Complication des anciens traitements arsenicaux, rare avec les traitements actuels.',
        traitement: '- Corticoïdes, anticonvulsivants, réanimation',
        clinique: '- Convulsions, coma',
        paraclinique: '',
      },
      {
        nom: 'Rechute',
        description: 'Reprise des signes après traitement.',
        traitement: '- Nouvelle stadification et traitement de 2e ligne selon le PNLTHA',
        clinique: '- Troubles du sommeil, fièvre',
        paraclinique: '- LCR',
      },
      {
        nom: 'Séquelles neuropsychiatriques',
        description: 'Troubles cognitifs et psychiques persistants après une phase 2 avancée.',
        traitement: '- Réadaptation, soutien',
        clinique: '- Comportement, cognition',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortelle sans traitement (cachexie, coma)\n- Guérison > 95 % avec un traitement adapté à la phase',
    urgences: [],
    symptomes: [
      ['Troubles du sommeil', 'tres_frequent'],
      ['Adénopathies', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: [
        '- Dépistage sérologique, orientation\n- Sensibilisation de la communauté',
        '- Sérologie positive : vers une structure capable de confirmer et traiter',
      ],
      hgr: [
        '- Confirmation parasitologique, ponction lombaire, fexinidazole sous surveillance, pentamidine',
        '- Phase 2 sévère ou troubles neurologiques graves : NECT en centre de référence',
      ],
      tert: ['- NECT, prise en charge des formes neurologiques graves et des rechutes', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Phase 1 hémolymphatique',
        type: 'evolutive',
        description: 'Fièvre intermittente et adénopathies.',
        terrain: '- Résident d’un foyer endémique',
        fonctionnels: '- Céphalées, prurit, arthralgies',
        generaux: '- Fièvre intermittente, amaigrissement',
        physiques: '- Adénopathies cervicales postérieures indolores, splénomégalie, œdèmes',
        paraclinique: '- Trypanosomes dans le suc ganglionnaire ou le sang, LCR normal',
        etiologies: '- *T. b. gambiense*',
        syndromes: ['syndrome-infectieux'],
        examens: [['parasitologie-tha', 'Confirmation']],
      },
      {
        nom: 'Phase 2 méningo-encéphalitique',
        type: 'commune',
        description: 'Troubles du sommeil, du comportement et neurologiques.',
        terrain: '- Évolution de plusieurs mois sans traitement',
        fonctionnels: '- Somnolence diurne, insomnie, apathie ou agitation, troubles psychiatriques',
        generaux: '- Cachexie',
        physiques: '- Tremblements, ataxie, hyperesthésie profonde, réflexes archaïques',
        paraclinique: '- LCR > 5 leucocytes/µL ou trypanosomes',
        etiologies: '- Invasion du système nerveux central',
        syndromes: ['syndrome-confusionnel'],
        examens: [['lcr', 'Stadification']],
      },
    ],
  },

  // =================================================================== Tétanos
  {
    ...MI,
    slug: 'tetanos',
    nom: 'Tétanos',
    resume:
      'Toxi-infection à C. tetani après une plaie souillée : trismus, contractures et spasmes. Maladie non immunisante, entièrement évitable par la vaccination.',
    definition:
      'Toxi-infection due à la toxine tétanospasmine de *Clostridium tetani*, produite au niveau d’une plaie, responsable de contractures musculaires généralisées et de spasmes paroxystiques avec conscience conservée.',
    physiopathologie:
      '## Mécanismes\n- Spores telluriques introduites dans une plaie anaérobie (plaie souillée, injection, avortement, cordon)\n- La tétanospasmine migre le long des nerfs vers la moelle\n- Blocage de la libération des neurotransmetteurs inhibiteurs (GABA, glycine) : contractures et spasmes\n- Dysautonomie : tachycardie, HTA labile, hyperthermie',
    diagnostic:
      '## Clinique (diagnostic clinique)\n- Incubation 3 à 21 jours (plus courte = plus grave)\n- **Trismus** inaugural, rire sardonique, dysphagie\n- Contractures généralisées : opisthotonos, abdomen « de bois »\n- **Spasmes paroxystiques** douloureux déclenchés par le bruit, la lumière, le toucher\n- Conscience normale, fièvre modérée\n\n## Gravité\n- Incubation < 7 jours, invasion < 48 h, spasmes fréquents, atteinte respiratoire, dysautonomie',
    examens: [
      ['premiere_intention', 'glycemie', 'Éliminer une hypoglycémie ou une autre cause de convulsion.'],
      ['gravite', 'ionogramme', 'Hyponatrémie, déshydratation.'],
      ['gravite', 'creatinine', 'Rhabdomyolyse et insuffisance rénale.'],
      ['gravite', 'oxymetrie-de-pouls', 'Hypoxie lors des spasmes laryngés.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Abcès dentaire ou péri-amygdalien', 'Trismus localisé, fièvre, collection visible.'],
      [
        'Réaction dystonique médicamenteuse',
        'Prise de métoclopramide ou neuroleptique ; cède aux anticholinergiques.',
      ],
      ['Intoxication à la strychnine', 'Tableau proche, pas de plaie.'],
      ['meningite-bacterienne', 'Raideur de nuque, troubles de la conscience, LCR anormal.'],
      ['Rage', 'Hydrophobie, encéphalite ; morsure d’animal.'],
    ],
    etiologies:
      '## Agent\n- *Clostridium tetani* (spores dans la terre et les déjections)\n\n## Portes d’entrée\n- Plaies souillées, plaies chroniques, ulcères, brûlures, injections non stériles\n- Avortement non sécurisé, accouchement, cordon (tétanos néonatal)\n\n## Terrain\n- Absence ou insuffisance de vaccination (rappels non faits)',
    principes: [
      [
        'Neutraliser la toxine circulante',
        'Bloquer la toxine non encore fixée.',
        '- **Immunoglobulines humaines antitétaniques** IM dès l’admission (1 500 UI selon le protocole MSF ; jusqu’à 3 000–6 000 UI selon d’autres recommandations)\n- Vaccination antitétanique en un autre site (maladie non immunisante)',
      ],
      [
        'Supprimer la source',
        'Arrêter la production de toxine.',
        '- Parage chirurgical de la plaie, sous sédation\n- **Métronidazole** 500 mg toutes les 8 h IV ou per os (enfant 10 mg/kg toutes les 8 h) pendant 7 à 10 jours',
      ],
      [
        'Contrôler les contractures et les spasmes',
        'Prévenir l’asphyxie et l’épuisement.',
        '- Chambre calme et sombre, gestes groupés\n- **Diazépam** en doses répétées ou en continu, titré sur les spasmes\n- **Sulfate de magnésium** IV en complément (spasmes, dysautonomie)\n- Morphine contre la douleur',
      ],
      [
        'Soins de soutien',
        'Éviter les complications de décubitus.',
        '- Sonde nasogastrique : alimentation et hydratation\n- Libération des voies aériennes, aspiration, oxygène ; trachéotomie si spasmes laryngés\n- Prévention des escarres et de la thrombose',
      ],
    ],
    molecules: [
      ['serum-immunoglobuline-antitetanique', 'premiere', 'Dès l’admission, dose unique IM'],
      ['metronidazole', 'premiere', 'Éradication de C. tetani, 7 à 10 jours'],
      ['diazepam', 'premiere', 'Contrôle des contractures et des spasmes'],
      ['sulfate-de-magnesium', 'adjuvant', 'Spasmes réfractaires et dysautonomie'],
      ['morphine', 'adjuvant', 'Douleur, sédation'],
      ['phenobarbital', 'alternative', 'Sédation complémentaire'],
    ],
    complications: [
      {
        nom: 'Asphyxie par spasme laryngé',
        description: 'Première cause de décès précoce.',
        traitement: '- Sédation, oxygène, intubation ou trachéotomie',
        clinique: '- Cyanose, SpO2 lors des spasmes',
        paraclinique: '- Oxymétrie de pouls',
      },
      {
        nom: 'Dysautonomie',
        description: 'Tachycardie, HTA labile, hyperthermie, arrêt cardiaque.',
        traitement: '- Sulfate de magnésium, sédation profonde',
        clinique: '- FC, PA, température',
        paraclinique: '- ECG',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        description: 'Troubles de déglutition et sédation.',
        traitement: '- Antibiotique, kinésithérapie',
        clinique: '- Fièvre, toux, FR',
        paraclinique: '- Radiographie thoracique',
      },
      {
        nom: 'Fractures vertébrales et rhabdomyolyse',
        description: 'Contractures violentes.',
        traitement: '- Sédation, hydratation',
        clinique: '- Douleurs, urines foncées',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Létalité 10 à 50 % selon l’accès à la réanimation\n- Durée de 3 à 4 semaines ; récupération complète chez les survivants\n- Vaccination complète à la sortie (3 doses)',
    urgences: [],
    symptomes: [
      ['Trismus', 'tres_frequent'],
      ['Contractures musculaires', 'tres_frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Prévention : vaccination, soins des plaies, sérum ou immunoglobulines selon le statut vaccinal\n- Suspicion : diazépam, transfert',
        '- Tout tétanos déclaré : transfert urgent',
      ],
      hgr: [
        '- Immunoglobulines, métronidazole, parage, sédation, alimentation par sonde',
        '- Spasmes laryngés, besoin de ventilation',
      ],
      tert: ['- Réanimation : ventilation, sédation profonde, prise en charge de la dysautonomie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tétanos généralisé',
        type: 'commune',
        description: 'Trismus puis contractures généralisées et spasmes paroxystiques.',
        terrain: '- Plaie souillée, absence de vaccination',
        fonctionnels: '- Difficulté à ouvrir la bouche, dysphagie, douleurs musculaires',
        generaux: '- Conscience normale, fièvre modérée, sueurs',
        physiques:
          '- Trismus, rire sardonique, opisthotonos, contracture abdominale, spasmes au moindre stimulus',
        paraclinique: '- Diagnostic clinique',
        etiologies: '- Toxine de *C. tetani*',
        syndromes: ['syndrome-convulsif'],
      },
      {
        nom: 'Tétanos céphalique',
        type: 'topographique',
        description: 'Après une plaie de la tête : paralysie faciale et trismus.',
        terrain: '- Plaie du visage ou du cuir chevelu',
        fonctionnels: '- Dysphagie',
        generaux: '',
        physiques: '- Paralysie faciale du côté de la plaie, trismus',
        paraclinique: '',
        etiologies: '- Plaie céphalique',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Rage
  {
    ...MI,
    slug: 'rage',
    nom: 'Rage',
    resume:
      'Encéphalite virale mortelle transmise surtout par la morsure de chien ; aucune guérison une fois déclarée, mais 100 % évitable par la prophylaxie post-exposition.',
    definition:
      'Encéphalomyélite due à un lyssavirus transmis par la salive d’un mammifère infecté (chien dans plus de 95 % des cas), constamment mortelle après l’apparition des symptômes.',
    physiopathologie:
      '## Mécanismes\n- Inoculation par morsure, griffure ou léchage d’une muqueuse ou d’une plaie\n- Progression le long des nerfs périphériques vers le système nerveux central (incubation)\n- Encéphalite (tronc cérébral, système limbique), puis dissémination centrifuge vers les glandes salivaires',
    diagnostic:
      '## Exposition (prophylaxie)\n- Catégorie I : contact, léchage d’une peau intacte → pas de prophylaxie\n- Catégorie II : mordillage d’une peau découverte, griffure superficielle sans saignement → vaccin\n- Catégorie III : morsure ou griffure transdermique, léchage d’une muqueuse ou d’une plaie, contact avec une chauve-souris → vaccin **et** immunoglobulines\n\n## Rage déclarée\n- Incubation 1 à 3 mois (de quelques jours à plus d’un an)\n- Prodromes : paresthésies et douleurs au site de la morsure, fièvre\n- **Forme furieuse** : hydrophobie, aérophobie, agitation, hallucinations, hypersalivation, alternance avec des phases de lucidité\n- **Forme paralytique** : paralysie flasque ascendante\n- Coma et décès en 7 à 14 jours',
    examens: [
      ['premiere_intention', 'glycemie', 'Éliminer une cause métabolique d’encéphalite.'],
      [
        'etiologique',
        'lcr',
        'Éliminer une méningite ou une autre encéphalite (pléiocytose lymphocytaire modérée possible).',
      ],
      ['premiere_intention', 'tdr-paludisme', 'Neuropaludisme en diagnostic différentiel.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['tetanos', 'Trismus, conscience normale, pas d’hydrophobie.'],
      ['paludisme-grave', 'TDR positif.'],
      ['Encéphalites virales (herpès)', 'Pas d’hydrophobie ; LCR, imagerie.'],
      ['Syndrome de Guillain-Barré', 'Diagnostic différentiel de la forme paralytique ; pas d’encéphalite.'],
      ['Psychose aiguë', 'Pas de fièvre ni d’hydrophobie ; notion de morsure à rechercher.'],
    ],
    etiologies:
      '## Agent\n- Virus de la rage (*Lyssavirus*)\n\n## Transmission\n- Morsure de chien non vacciné (> 95 %), plus rarement chat, singe, chauve-souris\n- Transmission interhumaine exceptionnelle (greffes)\n\n## Facteurs\n- Chiens errants non vaccinés, enfants (morsures du visage)',
    principes: [
      [
        'Soins de la plaie immédiats',
        'Réduire la charge virale.',
        '- Laver abondamment à l’eau et au savon pendant 15 minutes, puis antiseptique (povidone iodée)\n- Ne pas suturer d’emblée (sauf nécessité hémostatique)\n- Prévention antitétanique, antibiotique si plaie à risque (amoxicilline-acide clavulanique)',
      ],
      [
        'Prophylaxie post-exposition',
        'Empêcher la rage déclarée.',
        '- Catégories II et III : **vaccin antirabique** (ID 0,1 mL en 2 sites à J0, J3, J7, ou IM J0, J3, J7, J14–J28)\n- Catégorie III : **immunoglobulines antirabiques** infiltrées dans et autour des plaies\n- Débuter même tardivement ; aucune contre-indication (grossesse comprise)',
      ],
      [
        'Observer l’animal',
        'Adapter la prophylaxie.',
        '- Chien ou chat vivant et en bonne santé 10 jours après la morsure : arrêter la vaccination\n- Signaler l’animal aux services vétérinaires',
      ],
      [
        'Rage déclarée : soins palliatifs',
        'Soulager le patient et protéger l’entourage.',
        '- Chambre calme, sédation (diazépam, morphine), hydratation\n- Précautions standard (salive), prophylaxie des contacts exposés',
      ],
    ],
    molecules: [
      ['vaccin-antirabique', 'premiere', 'Prophylaxie post-exposition catégories II et III'],
      ['immunoglobulines-antirabiques', 'premiere', 'Exposition de catégorie III'],
      ['amoxicilline', 'adjuvant', 'Plaie de morsure à risque infectieux (avec acide clavulanique)'],
      ['acide-clavulanique', 'adjuvant', 'Associé à l’amoxicilline'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Prévention du tétanos selon le statut vaccinal'],
      ['diazepam', 'adjuvant', 'Sédation de la rage déclarée'],
      ['morphine', 'adjuvant', 'Soins palliatifs'],
    ],
    complications: [
      {
        nom: 'Encéphalite rabique',
        description: 'Évolution constante vers le coma et le décès.',
        traitement: '- Soins palliatifs',
        clinique: '- Conscience, agitation, déglutition',
        paraclinique: '',
      },
      {
        nom: 'Infection de la plaie de morsure',
        description: 'Pasteurella, staphylocoque, streptocoque, anaérobies.',
        traitement: '- Amoxicilline-acide clavulanique, soins locaux',
        clinique: '- Rougeur, douleur, pus',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Rage déclarée : létalité proche de 100 %\n- Prophylaxie post-exposition bien conduite : efficacité proche de 100 %',
    urgences: [],
    symptomes: [
      ['Hydrophobie', 'tres_frequent'],
      ['Troubles du comportement', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Déficit moteur', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'CDC — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Lavage de la plaie, classification de l’exposition, début de la vaccination si disponible',
        '- Vaccin ou immunoglobulines indisponibles : orienter sans délai',
      ],
      hgr: [
        '- Vaccination, immunoglobulines, soins chirurgicaux des plaies\n- Rage déclarée : soins palliatifs',
        '',
      ],
      tert: ['- Centre antirabique de référence', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Rage furieuse',
        type: 'commune',
        description: 'Encéphalite avec hydrophobie et agitation.',
        terrain: '- Morsure de chien non vacciné quelques semaines à mois auparavant',
        fonctionnels: '- Paresthésies au site de la morsure, angoisse, hallucinations',
        generaux: '- Fièvre, hypersalivation, sueurs',
        physiques: '- Hydrophobie, aérophobie, spasmes pharyngés, agitation entrecoupée de lucidité',
        paraclinique: '- Diagnostic clinique',
        etiologies: '- Lyssavirus',
        syndromes: ['syndrome-confusionnel'],
      },
      {
        nom: 'Rage paralytique',
        type: 'commune',
        description: 'Paralysie flasque ascendante, évolution plus lente.',
        terrain: '- Parfois après morsure de chauve-souris',
        fonctionnels: '- Faiblesse ascendante',
        generaux: '- Fièvre',
        physiques: '- Paralysie flasque, aréflexie',
        paraclinique: '',
        etiologies: '- Lyssavirus',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cryptococcose
  {
    ...MI,
    slug: 'meningite-a-cryptocoque',
    nom: 'Méningite à cryptocoque',
    resume:
      'Méningo-encéphalite fongique de la PVVIH avancée (CD4 < 100) : antigène cryptococcique, amphotéricine B + flucytosine, ponctions lombaires évacuatrices.',
    definition:
      'Méningo-encéphalite due à *Cryptococcus neoformans* survenant principalement chez les personnes vivant avec le VIH à un stade avancé, deuxième cause de mortalité de la PVVIH après la tuberculose.',
    physiopathologie:
      '## Mécanismes\n- Inhalation de levures (fientes d’oiseaux, sol), infection pulmonaire latente\n- Réactivation et dissémination lors de l’immunodépression cellulaire\n- Méningite basilaire, obstruction des villosités arachnoïdiennes : **hypertension intracrânienne** majeure',
    diagnostic:
      '## Clinique\n- Céphalées progressives et intenses, fièvre, vomissements\n- Signes d’hypertension intracrânienne, troubles visuels, paralysie du VI\n- Syndrome méningé souvent discret, confusion, convulsions, coma\n\n## Confirmation\n- Antigène cryptococcique (CrAg) dans le LCR ou le sang\n- Encre de Chine dans le LCR, culture\n- **Pression d’ouverture** du LCR (souvent > 25 cmH2O)',
    examens: [
      [
        'confirmation',
        'crag-cryptocoque',
        'CrAg positif dans le LCR : diagnostic. Positif dans le sang : ponction lombaire.',
      ],
      [
        'confirmation',
        'lcr',
        'Pression d’ouverture élevée, encre de Chine positive, cellularité faible chez l’immunodéprimé.',
      ],
      ['premiere_intention', 'cd4', 'Souvent < 100/mm³.'],
      ['premiere_intention', 'tdr-vih', 'Dépistage si statut inconnu.'],
      ['pretherapeutique', 'creatinine', 'Avant et pendant l’amphotéricine B (néphrotoxicité).'],
      ['pretherapeutique', 'ionogramme', 'Hypokaliémie sous amphotéricine B.'],
      ['suivi', 'nfs', 'Myélotoxicité de la flucytosine et anémie de l’amphotéricine.'],
    ],
    scores: ['glasgow', 'stades-oms-vih'],
    differentiels: [
      [
        'Méningite tuberculeuse',
        'Évolution subaiguë, LCR lymphocytaire hypoglycorachique, CrAg négatif ; GeneXpert sur LCR.',
      ],
      ['meningite-bacterienne', 'Début aigu, LCR purulent.'],
      ['Toxoplasmose cérébrale', 'Déficit focal, abcès à l’imagerie ; CrAg négatif.'],
      ['paludisme-grave', 'TDR positif.'],
    ],
    etiologies:
      '## Agent\n- *Cryptococcus neoformans* (plus rarement *C. gattii*)\n\n## Terrain\n- VIH avancé : CD4 < 100/mm³ (90 % des cas), arrêt des ARV, échec thérapeutique\n- Autres immunodépressions (corticoïdes, greffe)',
    principes: [
      [
        'Induction (OMS 2022)',
        'Stériliser le LCR rapidement.',
        '- **Amphotéricine B liposomale** 10 mg/kg dose unique + **flucytosine** 100 mg/kg/j + **fluconazole** 1 200 mg/j (enfant 12 mg/kg/j) pendant 14 jours\n- Sans forme liposomale : amphotéricine B désoxycholate 1 mg/kg/j + flucytosine 7 jours, puis fluconazole 1 200 mg/j 7 jours\n- Prévention de la toxicité : hydratation, potassium, magnésium',
      ],
      [
        'Contrôler la pression intracrânienne',
        'Première cause de décès évitable.',
        '- Ponctions lombaires évacuatrices quotidiennes si pression ≥ 25 cmH2O ou céphalées, jusqu’à normalisation\n- Pas de corticoïdes, ni d’acétazolamide, ni de mannitol',
      ],
      [
        'Consolidation et entretien',
        'Prévenir la rechute.',
        '- Fluconazole 800 mg/j pendant 8 semaines, puis 200 mg/j\n- Arrêt de l’entretien quand CD4 > 200 et charge virale indétectable depuis au moins 1 an',
      ],
      [
        'Démarrer les ARV au bon moment',
        'Limiter le syndrome de reconstitution immunitaire.',
        '- ARV 4 à 6 semaines après le début du traitement antifongique',
      ],
      [
        'Dépistage préventif',
        'Éviter la méningite.',
        '- CrAg sérique chez toute PVVIH avec CD4 < 200\n- CrAg positif sans méningite : fluconazole préemptif (1 200 mg/j 2 semaines, 800 mg/j 8 semaines, puis 200 mg/j)',
      ],
    ],
    molecules: [
      ['amphotericine-b', 'premiere', 'Induction : liposomale 10 mg/kg dose unique'],
      ['flucytosine', 'premiere', 'Induction 14 jours'],
      ['fluconazole', 'premiere', 'Induction, consolidation, entretien, traitement préemptif'],
      ['paracetamol', 'adjuvant', 'Céphalées'],
    ],
    complications: [
      {
        nom: 'Hypertension intracrânienne',
        description: 'Céphalées, troubles visuels, cécité, coma.',
        traitement: '- Ponctions lombaires évacuatrices répétées',
        clinique: '- Céphalées, vision, conscience',
        paraclinique: '- Pression d’ouverture du LCR',
      },
      {
        nom: 'Toxicité de l’amphotéricine B',
        description: 'Insuffisance rénale, hypokaliémie, anémie.',
        traitement: '- Hydratation, supplémentation potassique et magnésienne',
        clinique: '- Diurèse',
        paraclinique: '- Créatinine, kaliémie 2 à 3 fois par semaine',
      },
      {
        nom: 'Syndrome de reconstitution immunitaire',
        description: 'Aggravation paradoxale après le début des ARV.',
        traitement: '- PL évacuatrices, corticoïdes discutés en centre spécialisé',
        clinique: '- Céphalées, fièvre, convulsions',
        paraclinique: '- LCR',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 30 à 70 % en Afrique selon l’accès aux traitements ; réduite par le schéma OMS 2022 et les PL évacuatrices\n- Séquelles : cécité, troubles cognitifs',
    urgences: ['syndrome-meninge-febrile'],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Troubles visuels', 'occasionnel'],
      ['Raideur de nuque', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      "Guide national de prise en charge de l'infection à VIH",
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Dépistage CrAg chez la PVVIH avec CD4 < 200, fluconazole préemptif',
        '- Céphalées chez une PVVIH : transfert pour ponction lombaire',
      ],
      hgr: [
        '- Ponction lombaire avec mesure de pression, CrAg, induction (selon disponibilité), PL évacuatrices',
        '- Amphotéricine liposomale ou flucytosine indisponibles, coma',
      ],
      tert: ['- Schéma OMS complet, surveillance biologique, réanimation', ''],
    },
    alertes: { 'syndrome-meninge-febrile': 'Céphalées intenses, vomissements et confusion chez une PVVIH' },
    formes: [
      {
        nom: 'Méningo-encéphalite de la PVVIH',
        type: 'commune',
        description: 'Céphalées subaiguës fébriles avec hypertension intracrânienne.',
        terrain: '- VIH avancé, CD4 < 100/mm³',
        fonctionnels: '- Céphalées intenses, vomissements, flou visuel',
        generaux: '- Fièvre modérée, altération de l’état général',
        physiques: '- Raideur de nuque discrète, paralysie du VI, œdème papillaire',
        paraclinique: '- CrAg positif, pression d’ouverture élevée',
        etiologies: '- *C. neoformans*',
        syndromes: ['syndrome-d-hypertension-intracranienne', 'syndrome-meninge'],
        examens: [['crag-cryptocoque', 'Confirmation']],
      },
      {
        nom: 'Antigénémie isolée (cryptococcose infraclinique)',
        type: 'evolutive',
        description: 'CrAg sanguin positif sans signes méningés.',
        terrain: '- PVVIH avec CD4 < 200 dépistée',
        fonctionnels: '- Aucun ou céphalées minimes',
        generaux: '',
        physiques: '- Normal',
        paraclinique: '- CrAg sérique positif, LCR à vérifier',
        etiologies: '- Infection débutante',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Sepsis
  {
    ...MI,
    slug: 'sepsis-et-choc-septique',
    nom: 'Sepsis et choc septique de l’adulte',
    resume:
      'Défaillance d’organe causée par une réponse inappropriée à une infection : antibiotiques dans l’heure, remplissage, contrôle de la source.',
    definition:
      'Sepsis : dysfonction d’organe menaçant le pronostic vital, causée par une réponse dérégulée de l’hôte à une infection (Sepsis-3). Choc septique : sepsis avec hypotension nécessitant des vasopresseurs pour maintenir une PAM ≥ 65 mmHg et lactates > 2 mmol/L malgré un remplissage adéquat.',
    physiopathologie:
      '## Mécanismes\n- Activation inflammatoire et anti-inflammatoire excessive\n- Vasodilatation, fuite capillaire, hypovolémie relative\n- Dysfonction endothéliale, microthromboses, troubles de l’extraction de l’oxygène\n- Défaillances d’organes : rein, poumon, foie, cerveau, coagulation',
    diagnostic:
      '## Repérage\n- Infection suspectée + **qSOFA ≥ 2** : FR ≥ 22/min, PAS ≤ 100 mmHg, confusion\n- Marbrures, temps de recoloration > 3 s, oligurie\n\n## Bilan\n- Rechercher le foyer : pulmonaire, urinaire, abdominal, cutané, méningé, gynécologique\n- Paludisme grave à éliminer systématiquement en RDC',
    examens: [
      ['premiere_intention', 'hemocultures', 'Deux paires avant antibiotique, sans retarder celui-ci.'],
      ['premiere_intention', 'tdr-paludisme', 'Systématique.'],
      ['gravite', 'lactates', '> 2 mmol/L : hypoperfusion ; > 4 mmol/L : gravité majeure. Contrôle à 2–4 h.'],
      ['gravite', 'creatinine', 'Insuffisance rénale aiguë.'],
      ['gravite', 'nfs', 'Hyperleucocytose ou leucopénie, thrombopénie.'],
      ['gravite', 'glycemie', 'Hypo- ou hyperglycémie.'],
      ['etiologique', 'ecbu', 'Foyer urinaire.'],
      ['etiologique', 'radiographie-thoracique', 'Foyer pulmonaire.'],
      ['etiologique', 'echographie-abdominale', 'Foyer abdominal ou pelvien, collection à drainer.'],
      ['etiologique', 'lcr', 'Si signes neurologiques ou méningés.'],
    ],
    scores: ['qsofa', 'index-de-choc', 'glasgow'],
    differentiels: [
      ['paludisme-grave', 'TDR positif ; les deux peuvent coexister.'],
      [
        'Choc hypovolémique ou hémorragique',
        'Contexte de pertes (diarrhée, hémorragie), sans foyer infectieux.',
      ],
      ['Choc cardiogénique', 'Signes d’insuffisance cardiaque, souffle, échographie cardiaque.'],
      ['Anaphylaxie', 'Exposition à un allergène, urticaire, bronchospasme.'],
    ],
    etiologies:
      '## Foyers fréquents\n- Pneumonie, pyélonéphrite, péritonite, infections cutanées et des parties molles\n- Infections du post-partum et post-abortum, méningite\n- Fièvre typhoïde, bactériémies à salmonelles non typhiques chez la PVVIH\n\n## Terrain\n- Âges extrêmes, VIH, diabète, drépanocytose, malnutrition, cirrhose, cancer',
    principes: [
      [
        'Antibiotiques dans l’heure',
        'Chaque heure de retard augmente la mortalité.',
        '- Hémocultures puis antibiotique IV probabiliste\n- Communautaire : **ceftriaxone** 2 g/j ± **gentamicine** ; foyer abdominal ou pelvien : + **métronidazole**\n- Adapter au foyer, puis à l’antibiogramme (désescalade)',
      ],
      [
        'Remplissage vasculaire',
        'Restaurer la perfusion.',
        '- Cristalloïdes (Ringer lactate) 30 mL/kg dans les 3 premières heures si hypotension ou lactates ≥ 4\n- Réévaluer après chaque bolus : crépitants, SpO2, hépatomégalie (risque d’OAP)',
      ],
      [
        'Vasopresseurs',
        'PAM ≥ 65 mmHg.',
        '- **Noradrénaline** si hypotension persistante après remplissage (voie périphérique possible au début)\n- Adrénaline si noradrénaline indisponible',
      ],
      [
        'Contrôle de la source',
        'Supprimer le foyer.',
        '- Drainage d’abcès, chirurgie (péritonite, perforation), retrait de corps étranger, révision utérine',
      ],
      [
        'Soutien des organes',
        'Limiter les défaillances.',
        '- Oxygène pour SpO2 ≥ 94 %, glycémie, diurèse ≥ 0,5 mL/kg/h\n- **Hydrocortisone** 50 mg toutes les 6 h si vasopresseurs persistants\n- Prévention de la thrombose, nutrition précoce',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Antibiothérapie probabiliste communautaire'],
      ['gentamicine', 'premiere', 'Association dans le choc, foyer urinaire ou abdominal'],
      ['metronidazole', 'adjuvant', 'Foyer abdominal, pelvien ou anaérobie'],
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['chlorure-de-sodium-0-9', 'alternative', 'Remplissage'],
      ['noradrenaline', 'premiere', 'Vasopresseur de référence'],
      ['adrenaline-epinephrine', 'alternative', 'Si noradrénaline indisponible'],
      ['hydrocortisone', 'adjuvant', 'Choc réfractaire aux vasopresseurs'],
      ['meropeneme', 'deuxieme', 'Infection nosocomiale ou BLSE suspectée'],
    ],
    complications: [
      {
        nom: 'Syndrome de détresse respiratoire aiguë',
        description: 'Œdème lésionnel, aggravé par la surcharge hydrique.',
        traitement: '- Oxygène, ventilation, restriction hydrique après la phase initiale',
        clinique: '- FR, SpO2',
        paraclinique: '- Radiographie thoracique, gaz du sang',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hypoperfusion et toxicité.',
        traitement: '- Optimiser la volémie, éviter les néphrotoxiques, dialyse si besoin',
        clinique: '- Diurèse',
        paraclinique: '- Créatinine, kaliémie',
      },
      {
        nom: 'Coagulation intravasculaire disséminée',
        description: 'Saignements et thromboses.',
        traitement: '- Traitement de la cause, transfusion de produits sanguins si saignement',
        clinique: '- Purpura, saignements',
        paraclinique: '- Plaquettes, hémostase',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité du choc septique 30 à 50 %, plus élevée sans réanimation\n- Lactates qui baissent sous traitement = bon signe\n- Séquelles physiques et cognitives fréquentes chez les survivants',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Tachypnée', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Hypotension', 'frequent'],
      ['Oligurie', 'frequent'],
      ['Hypothermie', 'occasionnel'],
    ],
    sources: [
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Reconnaître (qSOFA), 1re dose de ceftriaxone IM/IV, remplissage prudent, TDR paludisme',
        '- Tout sepsis : transfert urgent',
      ],
      hgr: [
        '- Hémocultures, antibiothérapie IV, remplissage, noradrénaline si disponible, contrôle chirurgical de la source',
        '- Choc réfractaire, besoin de ventilation ou de dialyse',
      ],
      tert: ['- Réanimation : vasopresseurs, ventilation, épuration extrarénale', ''],
    },
    alertes: {
      'choc-septique': 'Fièvre ou hypothermie avec confusion, FR ≥ 22/min, PAS ≤ 100 mmHg, marbrures',
    },
    formes: [
      {
        nom: 'Sepsis communautaire de l’adulte',
        type: 'commune',
        description: 'Infection avec dysfonction d’organe.',
        terrain: '- Adulte, souvent avec comorbidité (VIH, diabète)',
        fonctionnels: '- Signes du foyer (toux, brûlures urinaires, douleur abdominale)',
        generaux: '- Fièvre ou hypothermie, tachycardie, polypnée, confusion',
        physiques: '- Marbrures, temps de recoloration allongé, oligurie',
        paraclinique: '- Lactates > 2, hyperleucocytose',
        etiologies: '- Bactéries (pneumocoque, E. coli, staphylocoque, salmonelles)',
        syndromes: ['syndrome-de-reponse-inflammatoire-systemique', 'syndrome-infectieux'],
        examens: [['lactates', 'Gravité et suivi']],
      },
      {
        nom: 'Choc septique',
        type: 'gravite',
        description: 'Hypotension persistante malgré le remplissage.',
        terrain: '- Retard de prise en charge',
        fonctionnels: '',
        generaux: '- PAM < 65 mmHg, extrémités froides ou chaudes',
        physiques: '- Marbrures, anurie, troubles de la conscience',
        paraclinique: '- Lactates > 2 sous vasopresseurs',
        etiologies: '- Toute infection bactérienne grave',
        syndromes: ['syndrome-de-choc'],
      },
      {
        nom: 'Sepsis du post-partum et post-abortum',
        type: 'etiologique',
        description: 'Endométrite, avortement septique.',
        terrain: '- Accouchement ou avortement récent',
        fonctionnels: '- Douleurs pelviennes, lochies fétides',
        generaux: '- Fièvre, frissons',
        physiques: '- Utérus sensible et mal involué',
        paraclinique: '- Échographie : rétention, collection',
        etiologies: '- Streptocoque A, entérobactéries, anaérobies',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },
];
