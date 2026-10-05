'use strict';

/** Fiches — Pédiatrie. Format : voir infectiologie.js. */

module.exports = [
  // =================================================================== MAS
  {
    specialite: 'Malnutrition',
    slug: 'malnutrition-aigue-severe',
    nom: 'Malnutrition aiguë sévère',
    resume:
      "Émaciation sévère et/ou œdèmes nutritionnels chez l'enfant de 6–59 mois — prise en charge selon la PCIMA.",
    definition:
      "Chez l'enfant de 6 à 59 mois : rapport poids/taille < −3 Z-score (normes OMS), et/ou périmètre brachial < 115 mm, et/ou œdèmes nutritionnels bilatéraux (kwashiorkor).",
    physiopathologie:
      '## Mécanismes\n- Adaptation réductive : ralentissement du métabolisme, des fonctions cardiaque, rénale et hépatique\n- Déficit immunitaire → infections peu symptomatiques (pas toujours de fièvre)\n- Déplétion en potassium, magnésium, phosphore ; rétention sodée\n- Risques majeurs : hypoglycémie, hypothermie, surcharge hydrique, syndrome de renutrition',
    diagnostic:
      "## Anthropométrie\n- Périmètre brachial (PB), poids, taille → Z-score P/T\n- Œdèmes : godet bilatéral sur le dos des pieds (+), jambes (++), généralisés (+++)\n\n## Orientation\n- **Compliquée** (test d'appétit négatif, complication médicale, œdèmes +++) → hospitalisation (UNTI)\n- **Non compliquée** (appétit conservé, pas de complication) → prise en charge ambulatoire (UNTA)\n- Nourrisson < 6 mois : prise en charge spécifique (allaitement, F-100 dilué)",
    examens: [
      ['confirmation', 'anthropometrie', 'PB < 115 mm et/ou P/T < −3 Z et/ou œdèmes bilatéraux = MAS.'],
      ['gravite', 'glycemie', '< 3 mmol/L (0,54 g/L) : hypoglycémie à traiter immédiatement.'],
      [
        'gravite',
        'nfs',
        'Hb < 4 g/dL (ou < 6 g/dL avec détresse respiratoire) : transfusion lente (sang total 10 mL/kg en 3 h).',
      ],
      ['etiologique', 'tdr-paludisme', 'Systématique : traiter si positif.'],
      ['etiologique', 'tdr-vih', 'Dépistage proposé systématiquement à l’enfant et à la mère.'],
      [
        'etiologique',
        'xpert-mtb-rif',
        'Toux chronique, contage ou absence de prise de poids malgré une alimentation correcte.',
      ],
      ['etiologique', 'radiographie-thoracique', 'Suspicion de pneumonie ou de tuberculose.'],
      [
        'gravite',
        'ionogramme',
        'Rarement disponible et peu utile à la décision initiale : hypokaliémie, hyponatrémie (ne pas corriger rapidement).',
      ],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      [
        'Syndrome néphrotique',
        'Œdèmes avec protéinurie massive à la bandelette ; état nutritionnel conservé.',
      ],
      ['insuffisance-cardiaque', 'Œdèmes d’origine cardiaque : hépatomégalie, souffle, cardiomégalie.'],
      [
        'Malnutrition chronique (retard de croissance)',
        'Taille/âge < −2 Z sans émaciation ; prise en charge différente.',
      ],
      ['tuberculose-pulmonaire', 'Cause sous-jacente fréquente de non-réponse au traitement nutritionnel.'],
      ['infection-vih', 'Cause sous-jacente à rechercher systématiquement.'],
    ],
    etiologies:
      "## Causes\n- Apports alimentaires insuffisants, sevrage précoce ou inadapté\n- Infections répétées (diarrhée, rougeole, paludisme, tuberculose, VIH)\n\n## Facteurs\n- Insécurité alimentaire, conflits et déplacements de population\n- Faible accès à l'eau potable, à l’assainissement et aux soins",
    principes: [
      [
        'Dépister, classer et orienter',
        'Hospitaliser seulement les enfants qui en ont besoin.',
        '- Mesure du PB et des œdèmes, test d’appétit à l’ATPE\n- Recherche des complications (signes PCIME, hypoglycémie, hypothermie, déshydratation, infection)',
      ],
      [
        'Stabiliser : prévenir hypoglycémie, hypothermie et déshydratation',
        'Éviter les décès des premiers jours.',
        '- Repas fréquents (toutes les 2–3 h, jour et nuit) dès l’admission\n- Garder au chaud (peau à peau, couverture)\n- Déshydratation : ReSoMal per os ; perfusion uniquement en cas de choc',
      ],
      [
        'Antibiothérapie systématique',
        'Traiter les infections silencieuses.',
        '- Non compliquée : amoxicilline orale 7 jours\n- Compliquée : ampicilline + gentamicine (ceftriaxone si absence d’amélioration)\n- Antipaludique si TDR positif ; vaccination contre la rougeole',
      ],
      [
        'Alimentation thérapeutique progressive',
        'Renourrir sans provoquer de syndrome de renutrition.',
        '- Stabilisation : F-75 (130 mL/kg/j en 8 repas ; 100 mL/kg/j si œdèmes +++)\n- Transition puis réhabilitation : ATPE (ou F-100) jusqu’à la guérison',
      ],
      [
        'Micronutriments',
        'Corriger les carences sans toxicité.',
        '- Contenus dans le F-75, le F-100 et l’ATPE\n- Pas de fer pendant la phase de stabilisation',
      ],
      [
        'Stimulation, éducation et suivi jusqu’à la guérison',
        'Prévenir la rechute.',
        '- Stimulation affective et jeux, éducation nutritionnelle de la mère\n- Suivi hebdomadaire en ambulatoire (poids, PB, œdèmes, appétit)',
      ],
    ],
    molecules: [
      ['lait-f75', 'premiere', 'Phase de stabilisation'],
      ['atpe', 'premiere', 'MAS non compliquée et phase de réhabilitation'],
      ['lait-f100', 'alternative', 'Transition/réhabilitation ; F-100 dilué chez le nourrisson < 6 mois'],
      ['resomal', 'premiere', 'Déshydratation (hors choléra)'],
      ['amoxicilline', 'premiere', 'MAS non compliquée'],
      ['ampicilline', 'deuxieme', 'MAS compliquée (avec gentamicine)'],
      ['gentamicine', 'deuxieme', 'MAS compliquée (avec ampicilline)'],
      ['ceftriaxone', 'alternative', 'Absence d’amélioration à 48 h'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Hypoglycémie',
        description:
          'Fréquente à l’admission et la nuit ; souvent associée à l’hypothermie et à l’infection.',
        traitement:
          '- Conscient : 50 mL de glucosé 10 % ou d’eau sucrée per os ou par sonde, puis F-75\n- Inconscient ou convulsions : glucosé 10 % 5 mL/kg IV\n- Repas toutes les 2–3 h, y compris la nuit',
        clinique: '- Température, conscience, léthargie',
        paraclinique: '- Glycémie 30 min après la correction, puis toutes les 3–4 h',
      },
      {
        nom: 'Hypothermie',
        description: 'Température < 35,5 °C ; signe d’infection grave ou d’hypoglycémie.',
        traitement:
          '- Peau à peau avec la mère, couvertures, pièce chaude, repas\n- Rechercher et traiter une infection et une hypoglycémie',
        clinique: '- Température toutes les 30 min pendant le réchauffement',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Déshydratation',
        description: 'Difficile à évaluer chez le malnutri (yeux enfoncés et pli cutané peu fiables).',
        traitement:
          '- ReSoMal 5 mL/kg toutes les 30 min pendant 2 h, puis 5–10 mL/kg/h jusqu’à 10 h\n- Pas de perfusion sauf choc',
        clinique:
          '- Toutes les 30 min : FR, FC, poids, diurèse, nombre de selles ; arrêter si FR et FC augmentent',
        paraclinique: '- Aucun examen indispensable',
      },
      {
        nom: 'Choc',
        description: 'Léthargie ou inconscience avec extrémités froides et pouls faible.',
        traitement:
          '- 15 mL/kg en 1 h d’un soluté recommandé par le protocole (Ringer lactate glucosé), réévaluer\n- Transfusion si absence d’amélioration\n- Antibiothérapie parentérale',
        clinique: '- FC, FR, temps de recoloration toutes les 5–10 min',
        paraclinique: '- Glycémie, hémoglobine',
      },
      {
        nom: 'Syndrome de renutrition et insuffisance cardiaque',
        description: 'Surcharge et troubles ioniques lors d’une renutrition trop rapide.',
        traitement:
          '- Réduire les volumes de F-75, diurétique si surcharge\n- Supplémentation en phosphore et potassium si disponible',
        clinique: '- FR, FC, œdèmes, hépatomégalie, poids quotidien',
        paraclinique: '- Phosphatémie et kaliémie si disponibles',
      },
      {
        nom: 'Infections sévères',
        description: 'Pneumonie, sepsis, infections urinaires et cutanées, souvent sans fièvre.',
        traitement: '- Ampicilline + gentamicine 7 jours ; ceftriaxone si absence d’amélioration à 48 h',
        clinique: '- Température, FR, appétit',
        paraclinique: '- TDR paludisme, hémocultures si disponibles',
      },
      {
        nom: 'Anémie sévère',
        description: 'Risque d’insuffisance cardiaque à la transfusion.',
        traitement: '- Transfusion lente de sang total 10 mL/kg en 3 h (furosémide si nécessaire)',
        clinique: '- FR, FC pendant la transfusion',
        paraclinique: '- Hémoglobine',
      },
    ],
    evolution:
      "## Critères de guérison\n- Selon le protocole : PB ≥ 125 mm et/ou P/T ≥ −2 Z-score, absence d'œdèmes depuis 2 semaines\n\n## Pronostic\n- Létalité élevée de la MAS compliquée (jusqu’à 20 % sans protocole, < 5 % avec les 10 étapes OMS)\n- Risque de rechute si la cause n’est pas corrigée",
    urgences: ['malnutrition-aigue-severe-compliquee', 'deshydratation-severe-enfant'],
    symptomes: [
      ['Perte de poids', 'tres_frequent'],
      ['Œdèmes', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Diarrhée', 'frequent'],
      ['Hypothermie', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'WHO guideline on the prevention and management of wasting and nutritional oedema',
      'Protocole national PCIMA',
      'Pocket book of hospital care for children (2e édition)',
    ],
  },

  // =================================================================== Diarrhée aiguë
  {
    specialite: 'Gastro-entérologie pédiatrique',
    slug: 'diarrhee-aigue-enfant',
    nom: "Diarrhée aiguë et déshydratation de l'enfant",
    resume:
      'Deuxième cause de décès de l’enfant < 5 ans : SRO, zinc, poursuite de l’alimentation ; antibiotiques seulement si dysenterie ou choléra.',
    definition:
      'Émission d’au moins 3 selles molles ou liquides par 24 h depuis moins de 14 jours. On distingue la diarrhée aqueuse aiguë, la dysenterie (sang dans les selles) et la diarrhée persistante (≥ 14 jours).',
    physiopathologie:
      '## Mécanismes\n- Diarrhée sécrétoire (toxines : choléra, E. coli entérotoxinogène) ou invasive (Shigella, Salmonella, Campylobacter)\n- Pertes d’eau, de sodium, de potassium et de bicarbonates\n- Le cotransport sodium-glucose reste fonctionnel : base de la réhydratation orale',
    diagnostic:
      '## Évaluer (PCIME)\n- Signes de danger : léthargie, incapacité à boire, convulsions\n- Déshydratation : état général, yeux, soif, pli cutané\n- Sang dans les selles (dysenterie), durée ≥ 14 jours (persistante)\n- État nutritionnel (PB, œdèmes) : la MAS change le protocole',
    examens: [
      ['gravite', 'glycemie', 'Enfant léthargique ou convulsions : hypoglycémie.'],
      [
        'gravite',
        'ionogramme',
        'Déshydratation sévère ou hospitalisation prolongée : dysnatrémie, hypokaliémie (non indispensable pour le plan C).',
      ],
      ['gravite', 'creatinine', 'Oligurie persistante après réhydratation : IRA.'],
      ['etiologique', 'tdr-paludisme', 'Si fièvre (zone d’endémie).'],
      ['etiologique', 'tdr-cholera', 'Diarrhée aqueuse profuse chez l’enfant ≥ 2 ans, contexte épidémique.'],
      ['etiologique', 'anthropometrie', 'Rechercher une MAS (protocole de réhydratation différent).'],
    ],
    scores: ['deshydratation-oms', 'debit-perfusion', 'dose-ponderale'],
    differentiels: [
      ['cholera', 'Diarrhée « eau de riz » très profuse, contexte épidémique.'],
      ['paludisme-simple', 'Diarrhée fébrile : TDR systématique.'],
      [
        'Invagination intestinale aiguë',
        'Nourrisson, crises de pleurs paroxystiques, sang rouge dans les selles, boudin abdominal ; échographie.',
      ],
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite, défense.'],
      ['Infection extradigestive', 'Otite, infection urinaire, pneumonie peuvent s’accompagner de diarrhée.'],
      ['Shigellose (dysenterie)', 'Sang et glaires, fièvre, ténesme : antibiotique indiqué.'],
    ],
    etiologies:
      '## Agents\n- Virus : rotavirus (premier agent avant la vaccination), norovirus, adénovirus\n- Bactéries : E. coli, *Shigella*, *Salmonella*, *Campylobacter*, *V. cholerae*\n- Parasites : *Giardia*, *Cryptosporidium* (VIH), amibes\n\n## Facteurs\n- Eau non potable, hygiène des mains, absence d’allaitement exclusif, malnutrition, VIH',
    principes: [
      [
        'Évaluer et classer la déshydratation',
        'Choisir le bon plan de réhydratation.',
        '- Pas de déshydratation : plan A ; signes évidents : plan B ; sévère : plan C',
      ],
      [
        'Réhydrater selon le plan A, B ou C',
        'Corriger et prévenir la déshydratation.',
        '- Plan A : SRO après chaque selle à domicile\n- Plan B : SRO 75 mL/kg en 4 h au centre de santé\n- Plan C : Ringer lactate IV 100 mL/kg (voir l’urgence) ; sonde nasogastrique si perfusion impossible',
      ],
      [
        'Zinc pendant 10–14 jours',
        'Réduire la durée, la sévérité et la récidive.',
        '- 20 mg/j (10 mg/j avant 6 mois)',
      ],
      [
        'Poursuivre l’alimentation et l’allaitement',
        'Prévenir la malnutrition.',
        '- Allaitement à la demande ; repas habituels fractionnés, repas supplémentaire pendant 2 semaines',
      ],
      [
        'Antibiotiques uniquement si indiqués',
        'Éviter les résistances et les effets indésirables.',
        '- Dysenterie : ciprofloxacine 15 mg/kg 2 fois par jour pendant 3 jours\n- Choléra suspecté avec déshydratation sévère\n- Pas d’antidiarrhéique (lopéramide) ni d’antiémétique systématique',
      ],
      [
        'Conseils et prévention',
        'Faire revenir à temps et éviter les récidives.',
        '- Revenir immédiatement si l’enfant boit mal, a du sang dans les selles, de la fièvre ou va plus mal\n- Vaccination contre le rotavirus, allaitement exclusif jusqu’à 6 mois, eau potable, lavage des mains',
      ],
    ],
    molecules: [
      ['sro', 'premiere', 'Plans A et B ; relais du plan C'],
      ['zinc', 'premiere', '10–14 jours'],
      ['ringer-lactate', 'premiere', 'Plan C (déshydratation sévère)'],
      ['ciprofloxacine', 'adjuvant', 'Dysenterie (selles sanglantes)'],
      ['azithromycine', 'alternative', 'Dysenterie en cas de résistance ; choléra'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Déshydratation sévère et choc hypovolémique',
        description: 'Cause de décès principale.',
        traitement:
          '- Plan C : Ringer lactate 100 mL/kg (< 12 mois : 30 mL/kg en 1 h puis 70 mL/kg en 5 h ; ≥ 12 mois : 30 mL/kg en 30 min puis 70 mL/kg en 2 h 30)\n- SRO dès que l’enfant peut boire (5 mL/kg/h)',
        clinique:
          '- Toutes les 15–30 min : pouls, conscience, capacité à boire ; reclasser à la fin du plan (6 h ou 3 h)',
        paraclinique: '- Glycémie si léthargie',
      },
      {
        nom: 'Hypernatrémie',
        description:
          'Déshydratation avec irritabilité, soif intense, peau pâteuse ; risque de convulsions à la réhydratation rapide.',
        traitement:
          '- Réhydratation lente sur 48 h, de préférence par SRO\n- Baisse de la natrémie ≤ 10–12 mmol/L par 24 h',
        clinique: '- Conscience, irritabilité, convulsions',
        paraclinique: '- Natrémie toutes les 6–12 h',
      },
      {
        nom: 'Hypokaliémie',
        description: 'Faiblesse, iléus, troubles du rythme.',
        traitement: '- SRO, aliments riches en potassium (banane, eau de coco), potassium oral si nécessaire',
        clinique: '- Ballonnement, faiblesse musculaire',
        paraclinique: '- Kaliémie si disponible',
      },
      {
        nom: 'Hypoglycémie',
        description: 'Surtout chez l’enfant à jeun ou malnutri.',
        traitement: '- Glucosé 10 % 5 mL/kg IV, puis alimentation',
        clinique: '- Conscience, convulsions',
        paraclinique: '- Glycémie capillaire',
      },
      {
        nom: 'Insuffisance rénale aiguë fonctionnelle',
        fiche: 'insuffisance-renale-aigue',
        description: 'Oligurie persistant après réhydratation correcte.',
        traitement: '- Compléter la réhydratation, puis prise en charge de l’IRA',
        clinique: '- Diurèse',
        paraclinique: '- Créatinine, kaliémie',
      },
      {
        nom: 'Diarrhée persistante et malnutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Diarrhée ≥ 14 jours, cercle vicieux avec la dénutrition.',
        traitement:
          '- Alimentation adaptée (réduction du lactose si besoin), zinc, recherche du VIH et des parasites',
        clinique: '- Poids, nombre de selles',
        paraclinique: '- Anthropométrie, test VIH',
      },
    ],
    evolution:
      '## Évolution\n- Guérison en 3 à 7 jours dans la grande majorité des cas avec SRO et zinc\n- Les décès sont dus à la déshydratation et à la malnutrition associée\n\n## Suivi\n- Contrôle à 2 jours si la diarrhée persiste ; à 5 jours en cas de dysenterie',
    urgences: ['deshydratation-severe-enfant'],
    symptomes: [
      ['Diarrhée', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Anorexie', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
      ['Troubles de la conscience', 'rare'],
    ],
    sources: [
      'The treatment of diarrhoea: a manual for physicians and other senior health workers',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'ESPGHAN/ESPID evidence-based guidelines for the management of acute gastroenteritis in children in Europe',
    ],
  },

  // =================================================================== Pneumonie de l'enfant
  {
    specialite: 'Infectiologie pédiatrique',
    slug: 'pneumonie-enfant',
    nom: "Pneumonie de l'enfant",
    resume:
      'Première cause infectieuse de décès de l’enfant < 5 ans : compter la fréquence respiratoire, amoxicilline, oxygène si SpO2 < 90 %.',
    definition:
      'Infection aiguë du parenchyme pulmonaire. Selon la PCIME (2–59 mois) : toux ou difficulté respiratoire avec respiration rapide (≥ 50/min de 2 à 11 mois, ≥ 40/min de 12 à 59 mois) et/ou tirage sous-costal ; pneumonie grave en présence d’un signe de danger général ou d’une SpO2 < 90 %.',
    physiopathologie:
      '## Mécanismes\n- Inhalation ou aspiration de germes du nasopharynx\n- Inflammation alvéolaire → troubles des échanges gazeux, hypoxémie\n- Facteurs aggravants : malnutrition, VIH, rougeole, faible poids de naissance, pollution intérieure',
    diagnostic:
      '## Compter la FR pendant 1 minute, enfant calme\n- Respiration rapide : ≥ 50/min (2–11 mois), ≥ 40/min (12–59 mois)\n- Tirage sous-costal, battements des ailes du nez, geignement\n\n## Signes de danger (pneumonie grave)\n- Incapacité à boire ou à téter, vomit tout, convulsions, léthargie\n- Cyanose centrale, SpO2 < 90 %, détresse respiratoire sévère',
    examens: [
      ['gravite', 'oxymetrie-de-pouls', 'SpO2 < 90 % : pneumonie grave → oxygène et hospitalisation.'],
      [
        'deuxieme_intention',
        'radiographie-thoracique',
        'Non nécessaire en ambulatoire ; si pneumonie grave, échec du traitement ou suspicion de complication (épanchement, abcès, pneumatocèle).',
      ],
      ['etiologique', 'tdr-paludisme', 'Systématique si fièvre (co-infection fréquente).'],
      [
        'etiologique',
        'tdr-vih',
        'Pneumonie sévère ou récidivante, mère séropositive (pneumocystose avant 1 an).',
      ],
      ['gravite', 'nfs', 'Anémie ; hyperleucocytose évocatrice d’une origine bactérienne.'],
      ['gravite', 'glycemie', 'Enfant léthargique ou incapable de boire.'],
      ['etiologique', 'hemocultures', 'Pneumonie grave hospitalisée, si disponible.'],
      ['etiologique', 'xpert-mtb-rif', 'Toux > 2 semaines, contage, échec du traitement : tuberculose.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['asthme', 'Sibilants récidivants, amélioration nette sous bronchodilatateur.'],
      ['Bronchiolite', 'Nourrisson < 2 ans, sibilants et crépitants diffus, contexte viral.'],
      ['paludisme-grave', 'Respiration acidosique sans foyer pulmonaire ; TDR positif.'],
      ['tuberculose-pulmonaire', 'Toux prolongée, cassure pondérale, contage.'],
      [
        'insuffisance-cardiaque',
        'Cardiopathie congénitale ou acquise : hépatomégalie, souffle, cardiomégalie.',
      ],
      ['Corps étranger inhalé', 'Syndrome de pénétration, signes unilatéraux.'],
    ],
    etiologies:
      '## Agents\n- Bactéries : *Streptococcus pneumoniae*, *Haemophilus influenzae* b, *Staphylococcus aureus* (après rougeole)\n- Virus : VRS, grippe, rougeole\n- Chez l’enfant infecté par le VIH : *Pneumocystis jirovecii*, tuberculose\n\n## Facteurs de risque\n- Malnutrition, absence d’allaitement exclusif, non-vaccination, fumée domestique, VIH',
    principes: [
      [
        'Classer selon la PCIME',
        'Identifier les enfants à hospitaliser.',
        '- FR, tirage, signes de danger, SpO2 si oxymètre disponible',
      ],
      [
        'Pneumonie non grave : amoxicilline orale',
        'Traiter à domicile en toute sécurité.',
        '- Amoxicilline 40 mg/kg/dose 2 fois par jour pendant 5 jours (3 jours si respiration rapide seule, selon le protocole)\n- Contrôle à 3 jours',
      ],
      [
        'Pneumonie grave : hospitalisation et antibiothérapie parentérale',
        'Réduire la mortalité.',
        '- Ampicilline (ou pénicilline) + gentamicine\n- Ceftriaxone en 2e ligne ; cloxacilline si suspicion de staphylocoque\n- Relais oral par amoxicilline après amélioration',
      ],
      [
        'Oxygénothérapie si SpO2 < 90 %',
        'Corriger l’hypoxémie, principale cause de décès.',
        '- Lunettes nasales 1–2 L/min (0,5–1 L/min chez le nourrisson), CPAP à bulles si disponible',
      ],
      [
        'Soins de soutien',
        'Maintenir hydratation et alimentation.',
        '- Paracétamol si fièvre, allaitement, alimentation fractionnée ou par sonde\n- Salbutamol si sibilants',
      ],
      [
        'Prévention',
        'Éviter les pneumonies.',
        '- Vaccins PCV, Hib, rougeole, coqueluche ; allaitement exclusif ; réduction de la fumée domestique\n- Cotrimoxazole chez l’enfant exposé ou infecté par le VIH',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Pneumonie non grave (respiration rapide et/ou tirage)'],
      ['ampicilline', 'premiere', 'Pneumonie grave (avec gentamicine)'],
      ['gentamicine', 'premiere', 'Pneumonie grave (avec ampicilline)'],
      ['ceftriaxone', 'deuxieme', 'Échec du traitement de 1re ligne'],
      ['cotrimoxazole', 'adjuvant', 'Pneumocystose suspectée (nourrisson exposé au VIH)'],
      ['salbutamol', 'adjuvant', 'Sibilants'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Hypoxémie et détresse respiratoire',
        description: 'SpO2 < 90 % : principal facteur de mortalité.',
        traitement:
          '- Oxygène par lunettes nasales jusqu’à SpO2 ≥ 90 % (≥ 94 % si signes de danger), CPAP à bulles si échec\n- Position demi-assise, désobstruction nasale',
        clinique: '- FR, tirage, cyanose toutes les 3 h',
        paraclinique: '- SpO2 au moins toutes les 3 h ; sevrage de l’oxygène si SpO2 ≥ 90 % en air ambiant',
      },
      {
        nom: 'Épanchement pleural et empyème',
        description: 'Fièvre persistante, matité, diminution du murmure vésiculaire.',
        traitement:
          '- Ponction pleurale, drainage si pus\n- Antibiothérapie prolongée (cloxacilline + gentamicine si staphylocoque)',
        clinique: '- Fièvre, matité, détresse respiratoire',
        paraclinique: '- Radiographie et échographie thoraciques, analyse du liquide',
      },
      {
        nom: 'Sepsis et choc septique',
        description: 'Pneumonie bactérienne bactériémique.',
        traitement: '- Antibiothérapie parentérale, remplissage prudent, oxygène',
        clinique: '- Temps de recoloration, FC, conscience, diurèse',
        paraclinique: '- Hémocultures, lactates, glycémie',
      },
      {
        nom: 'Pneumonie staphylococcique (pneumatocèles, pneumothorax)',
        description: 'Évolution rapide, souvent après une rougeole ou une infection cutanée.',
        traitement: '- Cloxacilline + gentamicine\n- Drainage en cas de pneumothorax compressif',
        clinique: '- Aggravation brutale de la détresse respiratoire',
        paraclinique: '- Radiographie thoracique',
      },
      {
        nom: 'Échec thérapeutique à 48–72 h',
        description: 'Persistance de la fièvre ou des signes respiratoires.',
        traitement:
          '- Rechercher une complication, une tuberculose, un VIH (pneumocystose : cotrimoxazole à forte dose)\n- Passer à la ceftriaxone',
        clinique: '- Fièvre, FR, état général',
        paraclinique: '- Radiographie, Xpert MTB/RIF, test VIH',
      },
    ],
    evolution:
      '## Évolution\n- Amélioration en 48–72 h sous antibiotique adapté\n- La mortalité est concentrée chez les enfants hypoxémiques, malnutris ou infectés par le VIH\n\n## Suivi\n- Contrôle à 3 jours en ambulatoire ; vérifier le calendrier vaccinal',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Tachypnée', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Dyspnée', 'frequent'],
      ['Refus de téter', 'occasionnel'],
      ['Convulsions', 'rare'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'AAP — recommandations de pratique clinique',
    ],
  },

  // =================================================================== Sepsis néonatal
  {
    specialite: 'Néonatologie',
    slug: 'sepsis-neonatal',
    nom: 'Infection néonatale bactérienne (sepsis néonatal)',
    resume:
      'Infection bactérienne grave du nouveau-né : reconnaître les 7 signes de danger OMS, ampicilline + gentamicine sans délai.',
    definition:
      'Infection bactérienne systémique du nouveau-né (0–28 jours ; l’OMS considère les nourrissons de 0 à 59 jours pour les « infections bactériennes graves possibles »). Infection précoce (< 72 h, transmission materno-fœtale) ou tardive (> 72 h, souvent nosocomiale).',
    physiopathologie:
      '## Mécanismes\n- Immaturité immunitaire du nouveau-né, surtout prématuré\n- Précoce : contamination in utero ou à l’accouchement (liquide amniotique, filière génitale)\n- Tardive : environnement hospitalier, cordon, peau, cathéters',
    diagnostic:
      '## Signes de danger OMS\n- Difficulté à téter ou refus de téter\n- Convulsions\n- Mouvements uniquement à la stimulation, ou absents\n- FR ≥ 60/min, tirage sous-costal sévère\n- Température ≥ 37,5 °C ou < 35,5 °C\n\n## Facteurs de risque\n- Rupture des membranes > 18 h, fièvre maternelle, liquide teinté ou fétide, prématurité, faible poids de naissance',
    examens: [
      [
        'premiere_intention',
        'hemocultures',
        'Avant l’antibiotique si possible, sans le retarder ; positivité faible : un résultat négatif n’exclut pas l’infection.',
      ],
      [
        'presomption',
        'crp',
        'CRP > 10 mg/L à 24–48 h : infection probable ; deux CRP normales à 24 h d’intervalle aident à arrêter les antibiotiques.',
      ],
      [
        'gravite',
        'glycemie',
        'Hypoglycémie néonatale : < 2,6 mmol/L (0,47 g/L) selon de nombreux protocoles (< 2,2 mmol/L selon l’OMS).',
      ],
      [
        'gravite',
        'nfs',
        'Leucopénie (< 5 G/L), neutropénie, rapport immatures/totaux > 0,2, thrombopénie : orientent vers une infection grave.',
      ],
      [
        'etiologique',
        'lcr',
        'Ponction lombaire si l’état le permet : méningite associée dans 15 à 25 % des cas (durée de traitement de 14–21 jours).',
      ],
      ['etiologique', 'ecbu', 'Infection tardive : prélèvement par sondage ou ponction sus-pubienne.'],
      ['etiologique', 'radiographie-thoracique', 'Détresse respiratoire : pneumopathie.'],
      ['gravite', 'oxymetrie-de-pouls', 'SpO2 < 90 % : oxygène.'],
      ['gravite', 'bilan-hepatique', 'Ictère associé : bilirubinémie.'],
      ['suivi', 'echographie-transfontanellaire', 'Méningite : abcès, ventriculite, hydrocéphalie.'],
    ],
    scores: ['apgar', 'silverman', 'dose-ponderale'],
    differentiels: [
      [
        'Détresse respiratoire non infectieuse',
        'Maladie des membranes hyalines (prématuré), détresse transitoire (césarienne), inhalation méconiale.',
      ],
      [
        'Hypoglycémie néonatale',
        'Nouveau-né de mère diabétique, petit poids ; correction rapide des signes.',
      ],
      ['Asphyxie périnatale', 'Apgar bas, encéphalopathie anoxo-ischémique dès les premières heures.'],
      ['Cardiopathie congénitale', 'Cyanose réfractaire à l’oxygène, souffle, pouls fémoraux absents.'],
      ['Hypothermie isolée', 'Corrigée par le réchauffement, sans autre signe.'],
      ['meningite-bacterienne', 'Fontanelle bombée, convulsions : ponction lombaire.'],
    ],
    etiologies:
      '## Germes\n- Précoce : streptocoque B, *E. coli*, *Listeria*, *Klebsiella*\n- Tardive : *Klebsiella*, *S. aureus*, entérobactéries multirésistantes (nosocomiales)\n\n## Facteurs\n- Accouchement à domicile ou dans de mauvaises conditions d’hygiène, soins du cordon inadaptés\n- Prématurité, faible poids de naissance',
    principes: [
      [
        'Reconnaître les signes de danger',
        'Traiter vite : le nouveau-né s’aggrave en quelques heures.',
        '- Examiner tout nouveau-né malade à la recherche des 7 signes OMS\n- Rechercher les facteurs de risque maternels',
      ],
      [
        'Antibiothérapie probabiliste immédiate',
        'Débuter dès la suspicion.',
        '- Ampicilline (ou amoxicilline) + gentamicine IV/IM\n- Si le transfert est impossible : schémas simplifiés de l’OMS (gentamicine IM + amoxicilline orale) selon la gravité',
      ],
      [
        'Soins de soutien',
        'Prévenir hypothermie, hypoglycémie et hypoxie.',
        '- Chaleur : peau à peau (méthode kangourou), couveuse\n- Allaitement ou lait maternel par sonde ; perfusion glucosée si impossible\n- Oxygène si SpO2 < 90 %',
      ],
      [
        'Adapter et fixer la durée',
        'Traiter suffisamment sans prolonger inutilement.',
        '- Hémoculture positive : 7–10 jours ; méningite : 14–21 jours\n- Ceftriaxone ou céfotaxime en cas d’échec ou de méningite (hors contre-indications)\n- Arrêt à 48–72 h si hémocultures négatives et enfant cliniquement bien',
      ],
      [
        'Prévention',
        'Réduire l’incidence.',
        '- Consultations prénatales, antibioprophylaxie per-partum si indiquée\n- Hygiène des mains, accouchement propre, soins du cordon (chlorhexidine selon le protocole)\n- Allaitement précoce et exclusif, méthode kangourou',
      ],
    ],
    molecules: [
      ['ampicilline', 'premiere', 'Avec la gentamicine'],
      ['gentamicine', 'premiere', 'Avec l’ampicilline'],
      ['amoxicilline', 'alternative', 'Relais oral ou schéma simplifié OMS si transfert impossible'],
      ['ceftriaxone', 'deuxieme', 'Échec ou méningite (hors ictère et calcium IV)'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['phenobarbital', 'adjuvant', 'Convulsions néonatales'],
    ],
    complications: [
      {
        nom: 'Méningite néonatale',
        fiche: 'meningite-bacterienne',
        description: 'Fréquemment associée au sepsis ; séquelles fréquentes.',
        traitement:
          '- Ampicilline + gentamicine ou céphalosporine de 3e génération, 14–21 jours\n- Traitement des convulsions (phénobarbital)',
        clinique: '- Fontanelle, convulsions, périmètre crânien, tonus',
        paraclinique: '- LCR de contrôle selon l’évolution, échographie transfontanellaire',
      },
      {
        nom: 'Choc septique',
        description: 'Temps de recoloration > 3 s, pouls faible, extrémités froides.',
        traitement: '- NaCl 0,9 % 10 mL/kg en bolus, à répéter prudemment\n- Inotropes si disponibles',
        clinique: '- Temps de recoloration, FC, diurèse, conscience',
        paraclinique: '- Glycémie, lactates',
      },
      {
        nom: 'Hypoglycémie',
        description: 'Fréquente : stocks faibles et consommation accrue.',
        traitement: '- Glucosé 10 % 2 mL/kg IV, puis perfusion (≈ 4–6 mg/kg/min) et alimentation',
        clinique: '- Trémulations, léthargie, apnées, convulsions',
        paraclinique: '- Glycémie toutes les 1–3 h jusqu’à stabilisation',
      },
      {
        nom: 'Ictère néonatal sévère',
        description: 'Hyperbilirubinémie aggravée par l’infection ; risque d’ictère nucléaire.',
        traitement: '- Photothérapie ; exsanguinotransfusion selon les seuils',
        clinique: '- Extension de l’ictère (zones de Kramer), succion, tonus',
        paraclinique: '- Bilirubinémie',
      },
      {
        nom: 'Coagulation intravasculaire et saignements',
        description: 'Saignements aux points de ponction, purpura.',
        traitement: '- Vitamine K, plasma frais congelé, plaquettes selon disponibilité',
        clinique: '- Saignements, purpura',
        paraclinique: '- Plaquettes, hémostase',
      },
      {
        nom: 'Apnées et détresse respiratoire',
        description: 'Surtout chez le prématuré.',
        traitement: '- Stimulation, oxygène, CPAP ; caféine chez le prématuré',
        clinique: '- FR, apnées, tirage',
        paraclinique: '- SpO2 continue, radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Létalité élevée (10 à 40 % selon le contexte), surtout chez le prématuré et en cas de méningite\n- Séquelles neurologiques après méningite\n\n## Suivi\n- Développement psychomoteur, audition après méningite',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Refus de téter', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Hypothermie', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Ictère', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'WHO recommendations for management of serious bacterial infections in infants aged 0–59 days',
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
    ],
  },
];
