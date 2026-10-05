'use strict';

/** Fiches — Chirurgie. Format : voir infectiologie.js. */

module.exports = [
  // =================================================================== Appendicite
  {
    specialite: 'Chirurgie digestive',
    slug: 'appendicite-aigue',
    nom: 'Appendicite aiguë',
    resume: "Inflammation aiguë de l'appendice — première urgence chirurgicale abdominale.",
    definition:
      "Inflammation aiguë de l'appendice vermiforme, le plus souvent par obstruction de sa lumière. On distingue les formes simples et les formes compliquées (perforation, abcès, plastron, péritonite).",
    physiopathologie:
      "## Mécanismes\n- Obstruction (stercolithe, hyperplasie lymphoïde, parasites)\n- Pullulation bactérienne, ischémie pariétale\n- Évolution possible vers la gangrène, la perforation, l'abcès ou la péritonite",
    diagnostic:
      '## Clinique\n- Douleur péri-ombilicale migrant en fosse iliaque droite\n- Nausées/vomissements, anorexie, fébricule (37,5–38,5 °C)\n- Défense en fosse iliaque droite, douleur au rebond (Blumberg), signe du psoas\n\n## Formes trompeuses\n- Enfant < 5 ans (perforation fréquente), sujet âgé, femme enceinte, appendice rétrocæcal ou pelvien',
    examens: [
      ['premiere_intention', 'nfs', 'Hyperleucocytose > 10 G/L à polynucléaires (non spécifique).'],
      [
        'premiere_intention',
        'crp',
        'Élevée ; une CRP et des leucocytes normaux rendent l’appendicite peu probable.',
      ],
      [
        'premiere_intention',
        'bandelette-urinaire',
        'Éliminer une infection urinaire (leucocyturie modérée possible si appendice pelvien).',
      ],
      ['premiere_intention', 'beta-hcg', 'Femme en âge de procréer : éliminer une GEU.'],
      [
        'premiere_intention',
        'echographie-abdominale',
        'Appendice non compressible, diamètre > 6 mm, stercolithe, infiltration de la graisse, épanchement. 1re intention chez l’enfant, la femme jeune et enceinte.',
      ],
      [
        'deuxieme_intention',
        'scanner-abdominal',
        'Adulte, doute diagnostique ou suspicion de complication (abcès, perforation).',
      ],
      ['etiologique', 'tdr-paludisme', 'Douleur abdominale fébrile en zone d’endémie.'],
    ],
    scores: ['alvarado'],
    differentiels: [
      ['grossesse-extra-uterine', 'Aménorrhée, métrorragies, β-hCG positive.'],
      [
        'Pathologie annexielle (salpingite, torsion, kyste)',
        'Douleur pelvienne, leucorrhées ou masse annexielle à l’échographie.',
      ],
      [
        'Adénolymphite mésentérique',
        'Enfant, contexte viral ; adénopathies à l’échographie, appendice normal.',
      ],
      [
        'Infection urinaire ou colique néphrétique',
        'Signes urinaires, bandelette positive, douleur lombaire.',
      ],
      ['diarrhee-aigue-enfant', 'Gastro-entérite : diarrhée au premier plan, douleur diffuse sans défense.'],
      ['Fièvre typhoïde', 'Fièvre prolongée ; risque de perforation iléale.'],
      ['drepanocytose', 'Crise vaso-occlusive abdominale chez un drépanocytaire connu.'],
    ],
    etiologies:
      "## Terrain\n- Pic de fréquence : 10–30 ans ; possible à tout âge\n\n## Causes d'obstruction\n- Stercolithe, hyperplasie lymphoïde\n- Parasitoses intestinales (ascaris), corps étrangers, tumeurs (rares)",
    principes: [
      [
        'Établir le diagnostic',
        'Ni opérer à tort, ni opérer trop tard.',
        '- Clinique + score d’Alvarado + biologie\n- Échographie (enfant, femme) ou scanner (adulte) en cas de doute',
      ],
      [
        'Mise en condition préopératoire',
        'Préparer l’intervention en toute sécurité.',
        '- À jeun, voie veineuse, réhydratation\n- Antalgie dès l’admission (la morphine ne masque pas le diagnostic)',
      ],
      [
        'Appendicectomie : traitement de référence',
        'Retirer l’appendice avant la perforation.',
        '- Cœlioscopie ou incision de Mac Burney\n- Délai court (< 24 h) ; en urgence si signes de perforation ou de sepsis',
      ],
      [
        'Antibiothérapie adaptée à la forme',
        'Prévenir et traiter l’infection.',
        '- Forme simple : antibioprophylaxie unique (céfazoline + métronidazole)\n- Forme compliquée : traitement curatif 3–5 jours (amoxicilline-acide clavulanique, ou ceftriaxone + métronidazole)',
      ],
      [
        'Traitement non opératoire sélectif',
        'Option si la chirurgie n’est pas accessible ou refusée.',
        '- Appendicite simple sans stercolithe : antibiotiques seuls (risque de récidive ≈ 30 % à 5 ans)',
      ],
      [
        'Formes compliquées',
        'Adapter la stratégie à la lésion.',
        '- Plastron : antibiotiques, appendicectomie différée\n- Abcès : drainage (percutané ou chirurgical) + antibiotiques',
      ],
    ],
    molecules: [
      ['cefazoline', 'premiere', 'Antibioprophylaxie (forme simple)'],
      ['metronidazole', 'premiere', 'Antibioprophylaxie et forme compliquée'],
      ['ceftriaxone', 'deuxieme', 'Forme compliquée (avec métronidazole)'],
      ['amoxicilline', 'alternative', 'Avec l’acide clavulanique : forme compliquée'],
      ['acide-clavulanique', 'alternative', 'Avec l’amoxicilline : forme compliquée'],
      ['paracetamol', 'adjuvant', 'Antalgie'],
      ['morphine', 'adjuvant', 'Antalgie (ne masque pas le diagnostic)'],
    ],
    complications: [
      {
        nom: 'Péritonite généralisée',
        fiche: 'peritonite-aigue',
        description: 'Perforation dans la grande cavité péritonéale.',
        traitement: '- Réanimation, antibiothérapie, laparotomie ou cœlioscopie avec toilette péritonéale',
        clinique: '- Contracture, fièvre, tachycardie, état hémodynamique',
        paraclinique: '- NFS, CRP, lactates, créatinine',
      },
      {
        nom: 'Abcès appendiculaire et plastron',
        description: 'Réaction inflammatoire localisée autour de l’appendice perforé.',
        traitement:
          '- Antibiothérapie ; drainage de l’abcès\n- Appendicectomie différée (6–8 semaines) selon l’évolution',
        clinique: '- Fièvre, masse de la fosse iliaque droite, douleur',
        paraclinique: '- NFS, CRP, échographie ou scanner',
      },
      {
        nom: 'Infection du site opératoire',
        description: 'Plus fréquente dans les formes compliquées.',
        traitement: '- Ouverture et soins locaux, antibiotique si cellulite',
        clinique: '- Aspect de la plaie (rougeur, écoulement), fièvre',
        paraclinique: '- Prélèvement bactériologique',
      },
      {
        nom: 'Abcès résiduel du Douglas',
        description: 'Fièvre et iléus prolongé vers J5–J7.',
        traitement: '- Drainage (percutané ou par voie rectale/vaginale), antibiotiques',
        clinique: '- Fièvre, ténesme, faux besoins, douleur au toucher rectal',
        paraclinique: '- Échographie ou scanner, CRP',
      },
      {
        nom: 'Occlusion sur brides',
        fiche: 'occlusion-intestinale-aigue',
        description: 'Complication tardive de toute chirurgie abdominale.',
        traitement: '- Voir la fiche « Occlusion intestinale aiguë »',
        clinique: '- Douleurs, vomissements, arrêt du transit',
        paraclinique: '- ASP, scanner',
      },
    ],
    evolution:
      '## Évolution\n- Excellente après appendicectomie d’une forme simple (sortie en 24–48 h)\n- Morbidité nettement plus élevée en cas de perforation, fréquente chez l’enfant et le sujet âgé\n\n## Suivi\n- Contrôle de la cicatrice à J7–J10',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Anorexie', 'frequent'],
    ],
    sources: ['WSES Jerusalem guidelines on acute appendicitis', 'Sabiston Textbook of Surgery'],
  },

  // =================================================================== Occlusion
  {
    specialite: 'Chirurgie digestive',
    slug: 'occlusion-intestinale-aigue',
    nom: 'Occlusion intestinale aiguë',
    resume:
      'Arrêt du transit : rechercher une strangulation (urgence), réanimer, décomprimer, traiter la cause.',
    definition:
      'Arrêt complet et persistant du transit intestinal des matières et des gaz. Mécanique (obstruction ou strangulation) ou fonctionnelle (iléus paralytique). Siège : grêle ou côlon.',
    physiopathologie:
      '## Mécanismes\n- En amont de l’obstacle : distension, séquestration liquidienne (« troisième secteur »), vomissements → déshydratation, troubles ioniques\n- Strangulation (volvulus, hernie étranglée, bride) : ischémie puis nécrose et perforation\n- Pullulation et translocation bactériennes',
    diagnostic:
      '## Clinique\n- Douleurs abdominales (coliques), vomissements, arrêt des matières et des gaz, météorisme\n- Examiner les orifices herniaires (hernie étranglée), les cicatrices, le toucher rectal\n\n## Signes de strangulation\n- Douleur continue, fièvre, tachycardie, défense, choc',
    examens: [
      [
        'premiere_intention',
        'abdomen-sans-preparation',
        'Niveaux hydro-aériques : grêle (centraux, plus larges que hauts) ou côlon (périphériques, haustrations) ; volvulus du sigmoïde : image « en grain de café » ; pneumopéritoine = perforation.',
      ],
      [
        'confirmation',
        'scanner-abdominal',
        'Examen de référence : siège, mécanisme (zone de transition), signes de souffrance (paroi non rehaussée, pneumatose, liquide).',
      ],
      [
        'premiere_intention',
        'echographie-abdominale',
        'Enfant : invagination (image en cocarde) ; anses dilatées, épanchement.',
      ],
      ['gravite', 'ionogramme', 'Hypokaliémie, hyponatrémie, alcalose (vomissements).'],
      ['gravite', 'creatinine', 'IRA fonctionnelle (déshydratation).'],
      ['gravite', 'lactates', 'Élevés : ischémie intestinale (strangulation).'],
      ['gravite', 'nfs', 'Hyperleucocytose : souffrance ou perforation.'],
      ['pretherapeutique', 'groupage-rai', 'Avant intervention.'],
    ],
    scores: [],
    differentiels: [
      ['Iléus réflexe', 'Péritonite, pancréatite, colique néphrétique, pneumopathie : traiter la cause.'],
      ['peritonite-aigue', 'Contracture, fièvre ; pneumopéritoine.'],
      [
        'Pseudo-obstruction colique (syndrome d’Ogilvie)',
        'Sujet âgé alité, distension colique sans obstacle.',
      ],
      ['Iléus métabolique', 'Hypokaliémie, hypercalcémie, médicaments (opioïdes).'],
      ['Gastro-entérite', 'Vomissements sans arrêt du transit, diarrhée.'],
      ['Ischémie mésentérique', 'Douleur intense disproportionnée à l’examen, terrain vasculaire, FA.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Hernies étranglées (inguinales, ombilicales)\n- Volvulus du sigmoïde (fréquent en Afrique)\n- Brides et adhérences postopératoires\n- Invagination intestinale aiguë (enfant), ascaridiose massive (enfant)\n- Cancers colorectaux, tuberculose intestinale',
    principes: [
      [
        'Confirmer et rechercher une strangulation',
        'Identifier l’urgence chirurgicale.',
        '- Clinique, ASP, scanner si disponible\n- Signes de souffrance → chirurgie sans délai',
      ],
      [
        'Réanimer : rééquilibration hydro-électrolytique',
        'Corriger la déshydratation et les troubles ioniques.',
        '- Cristalloïdes (Ringer lactate ou NaCl 0,9 %), potassium selon la kaliémie\n- Sonde urinaire : diurèse horaire',
      ],
      [
        'Décomprimer',
        'Soulager et prévenir l’inhalation.',
        '- Sonde nasogastrique en aspiration, à jeun strict',
      ],
      [
        'Traiter selon la cause',
        'Adapter la stratégie au mécanisme.',
        '- Bride sans signe de gravité : traitement non opératoire jusqu’à 72 h, avec opacification hydrosoluble (valeur diagnostique et thérapeutique)\n- Hernie étranglée : chirurgie en urgence\n- Volvulus du sigmoïde : détorsion endoscopique puis sigmoïdectomie programmée ; chirurgie d’emblée si gangrène\n- Invagination de l’enfant : réduction par lavement sous échographie, chirurgie si échec\n- Tumeur colique : colostomie ou résection',
      ],
      [
        'Chirurgie en urgence si strangulation, péritonite ou échec',
        'Lever l’obstacle et réséquer l’intestin nécrosé.',
        '- Laparotomie (ou cœlioscopie), résection-anastomose ou stomie selon l’état local et général',
      ],
      [
        'Mesures associées',
        'Prévenir les complications.',
        '- Antibiothérapie si ischémie ou perforation\n- Prévention thromboembolique, nutrition, mobilisation précoce',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Réhydratation'],
      ['chlorure-de-sodium-0-9', 'alternative', 'Réhydratation'],
      ['chlorure-de-potassium', 'adjuvant', 'Hypokaliémie'],
      ['ceftriaxone', 'adjuvant', 'Souffrance intestinale ou perforation (avec métronidazole)'],
      ['metronidazole', 'adjuvant', 'Souffrance intestinale ou perforation'],
      ['morphine', 'adjuvant', 'Antalgie'],
      ['paracetamol', 'adjuvant', 'Antalgie'],
    ],
    complications: [
      {
        nom: 'Nécrose et perforation intestinales',
        fiche: 'peritonite-aigue',
        description: 'Conséquence d’une strangulation non levée.',
        traitement: '- Chirurgie en urgence : résection de l’intestin nécrosé, toilette péritonéale',
        clinique: '- Douleur continue, fièvre, défense, tachycardie',
        paraclinique: '- Lactates, NFS, scanner',
      },
      {
        nom: 'Choc hypovolémique ou septique',
        description: 'Séquestration liquidienne, translocation bactérienne.',
        traitement: '- Remplissage, antibiothérapie, chirurgie de contrôle',
        clinique: '- PA, FC, diurèse, conscience',
        paraclinique: '- Lactates, hémocultures',
      },
      {
        nom: 'Troubles hydro-électrolytiques et IRA',
        fiche: 'insuffisance-renale-aigue',
        description: 'Vomissements et séquestration.',
        traitement: '- Rééquilibration, compensation des pertes de la sonde gastrique',
        clinique: '- Diurèse, déshydratation',
        paraclinique: '- Ionogramme, créatinine',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        description: 'Vomissements fécaloïdes inhalés.',
        traitement: '- Sonde gastrique, position demi-assise, antibiothérapie',
        clinique: '- FR, SpO2, toux, fièvre',
        paraclinique: '- Radiographie thoracique',
      },
      {
        nom: 'Complications postopératoires',
        description: 'Fistule ou lâchage d’anastomose, éventration, récidive.',
        traitement: '- Réintervention selon la complication',
        clinique: '- Fièvre, douleur, reprise du transit, aspect de la plaie',
        paraclinique: '- Scanner, CRP',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si la cause est levée avant la nécrose\n- Mortalité élevée en cas de strangulation tardive, surtout chez le sujet âgé\n\n## Suivi\n- Récidive possible (brides, volvulus non opéré)',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Arrêt des matières et des gaz', 'tres_frequent'],
      ['Distension abdominale', 'frequent'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (2017 update, WSES)',
      'WSES — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
  },

  // =================================================================== Péritonite
  {
    specialite: 'Urgences chirurgicales',
    slug: 'peritonite-aigue',
    nom: 'Péritonite aiguë généralisée',
    resume:
      'Infection de la cavité péritonéale : antibiothérapie immédiate et contrôle chirurgical de la source dans les 6 h.',
    definition:
      'Inflammation aiguë du péritoine, le plus souvent infectieuse. Péritonite secondaire (perforation d’un organe creux : appendice, ulcère, typhoïde iléale, traumatisme, postopératoire), primaire (infection du liquide d’ascite, syndrome néphrotique) ou tertiaire (persistante après traitement).',
    physiopathologie:
      '## Mécanismes\n- Contamination péritonéale par le contenu digestif\n- Réaction inflammatoire systémique, iléus, séquestration liquidienne\n- Évolution vers le sepsis et la défaillance multiviscérale',
    diagnostic:
      '## Clinique\n- Douleur abdominale intense, brutale ou progressive\n- Contracture généralisée (« ventre de bois »), cri de l’ombilic, toucher rectal douloureux\n- Fièvre, vomissements, arrêt du transit\n- Signes de sepsis : tachycardie, hypotension, marbrures, confusion\n\n## Formes trompeuses\n- Sujet âgé, immunodéprimé, sous corticoïdes : contracture souvent absente',
    examens: [
      [
        'premiere_intention',
        'abdomen-sans-preparation',
        'Pneumopéritoine (croissant gazeux sous-diaphragmatique) : perforation d’organe creux ; absent dans 20 à 30 % des cas.',
      ],
      [
        'confirmation',
        'scanner-abdominal',
        'Pneumopéritoine, épanchement, cause ; seulement si le patient est stable et sans retarder la chirurgie.',
      ],
      [
        'premiere_intention',
        'echographie-abdominale',
        'Épanchement intrapéritonéal, collections, orientation étiologique.',
      ],
      ['gravite', 'lactates', '> 2 mmol/L : sepsis ; > 4 mmol/L : choc.'],
      ['gravite', 'nfs', 'Hyperleucocytose ou leucopénie (gravité).'],
      ['gravite', 'crp', 'Élevée (suivi de l’évolution).'],
      ['gravite', 'creatinine', 'Insuffisance rénale aiguë.'],
      ['gravite', 'ionogramme', 'Troubles hydro-électrolytiques.'],
      ['gravite', 'hemostase', 'CIVD.'],
      ['etiologique', 'hemocultures', 'Avant l’antibiothérapie.'],
      ['pretherapeutique', 'groupage-rai', 'Avant intervention.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['Pancréatite aiguë', 'Douleur épigastrique transfixiante ; lipasémie > 3 × la normale.'],
      ['Infarctus du myocarde inférieur', 'Douleur épigastrique, terrain vasculaire ; ECG, troponine.'],
      ['Pneumopathie de la base', 'Toux, fièvre, foyer à l’auscultation ; radiographie thoracique.'],
      ['drepanocytose', 'Crise abdominale vaso-occlusive : défense possible, sans pneumopéritoine.'],
      ['Acidocétose diabétique', 'Douleurs abdominales, vomissements, glycémie et cétonémie élevées.'],
      [
        'Péritonite primaire',
        'Ascite (cirrhose) ou syndrome néphrotique : traitement médical sans chirurgie.',
      ],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Appendicite perforée\n- Perforation iléale typhique\n- Ulcère gastroduodénal perforé\n- Traumatismes abdominaux (plaies par arme, accidents)\n- Causes gynécologiques : salpingite, avortement provoqué compliqué\n- Péritonites postopératoires',
    principes: [
      [
        'Reconnaître et réanimer',
        'Corriger le sepsis et l’hypovolémie avant et pendant l’intervention.',
        '- Deux voies veineuses, cristalloïdes, vasopresseurs si choc\n- Sonde gastrique, sonde urinaire, oxygène',
      ],
      [
        'Antibiothérapie probabiliste immédiate',
        'Couvrir entérobactéries et anaérobies.',
        '- Ceftriaxone + métronidazole, ou amoxicilline-acide clavulanique ± gentamicine (WSES 2017)\n- Durée courte (≈ 4 jours) après contrôle efficace de la source chez le patient stable',
      ],
      [
        'Contrôle chirurgical de la source en urgence',
        'Supprimer la contamination.',
        '- Laparotomie (ou cœlioscopie) dans les 6 h : toilette péritonéale abondante, traitement de la cause (appendicectomie, suture d’ulcère, résection ou suture iléale)\n- Stratégie de « damage control » si patient instable',
      ],
      [
        'Traiter la cause spécifique',
        'Éviter la récidive.',
        '- Perforation typhique : antibiothérapie anti-salmonelle (ceftriaxone, azithromycine selon la sensibilité)\n- Ulcère : inhibiteur de la pompe à protons et éradication d’*H. pylori*\n- Péritonite primaire : antibiothérapie seule',
      ],
      [
        'Réanimation postopératoire',
        'Prévenir les défaillances et les complications.',
        '- Analgésie, nutrition précoce, prévention thromboembolique\n- Surveillance de la reprise du transit et des signes d’abcès',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Avec métronidazole'],
      ['metronidazole', 'premiere', 'Avec ceftriaxone'],
      ['ringer-lactate', 'premiere', 'Réanimation'],
      ['amoxicilline', 'alternative', 'Avec l’acide clavulanique'],
      ['acide-clavulanique', 'alternative', 'Avec l’amoxicilline'],
      ['gentamicine', 'alternative', 'Formes graves (avec amoxicilline-acide clavulanique)'],
      ['morphine', 'adjuvant', 'Analgésie'],
      ['paracetamol', 'adjuvant', 'Analgésie'],
    ],
    complications: [
      {
        nom: 'Choc septique',
        description: 'Hypotension persistante malgré le remplissage.',
        traitement: '- Remplissage, noradrénaline (PAM ≥ 65 mmHg), contrôle de la source, antibiothérapie',
        clinique: '- PA, FC, marbrures, diurèse, conscience',
        paraclinique: '- Lactates, hémocultures, créatinine',
      },
      {
        nom: 'Abcès intra-abdominal résiduel',
        description: 'Fièvre persistante ou iléus prolongé après l’intervention.',
        traitement: '- Drainage percutané ou chirurgical, adaptation des antibiotiques',
        clinique: '- Fièvre, douleur, transit',
        paraclinique: '- Échographie ou scanner, CRP',
      },
      {
        nom: 'Défaillance multiviscérale',
        fiche: 'insuffisance-renale-aigue',
        description: 'Insuffisance rénale aiguë, SDRA, CIVD.',
        traitement: '- Réanimation d’organe (dialyse, ventilation, transfusion)',
        clinique: '- Diurèse, FR, SpO2, saignements',
        paraclinique: '- Créatinine, gaz du sang, hémostase',
      },
      {
        nom: 'Fistule digestive et péritonite postopératoire',
        description: 'Lâchage de suture ou d’anastomose.',
        traitement: '- Réintervention, stomie, nutrition',
        clinique: '- Écoulement digestif par la plaie ou un drain, fièvre',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Éviscération et éventration',
        description: 'Désunion de la paroi, favorisée par l’infection et la dénutrition.',
        traitement: '- Réintervention pour fermeture pariétale',
        clinique: '- Aspect de la plaie, issue d’anses',
        paraclinique: '- Aucun examen indispensable',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 10 à 30 %, plus élevée si le délai opératoire est long, chez le sujet âgé et en cas de perforation typhique\n\n## Suivi\n- Reprise du transit, cicatrisation, état nutritionnel',
    urgences: ['abdomen-aigu-chirurgical', 'choc-septique'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Arrêt des matières et des gaz', 'frequent'],
      ['Distension abdominale', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'The management of intra-abdominal infections from a global perspective: 2017 WSES guidelines',
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      'Sabiston Textbook of Surgery',
    ],
  },

  // =================================================================== Traumatisme crânien
  {
    specialite: 'Neurochirurgie',
    slug: 'traumatisme-cranien',
    nom: 'Traumatisme crânien',
    resume:
      'Glasgow, pupilles, scanner : prévenir les agressions cérébrales secondaires et évacuer les hématomes compressifs.',
    definition:
      'Atteinte cérébrale causée par une force mécanique externe. Classification selon le score de Glasgow initial : léger (13–15), modéré (9–12), grave (≤ 8). En RDC, les accidents de la route (notamment de moto) en sont la première cause.',
    physiopathologie:
      '## Lésions primaires\n- Fractures, contusions, hématomes extradural et sous-dural, lésions axonales diffuses\n\n## Lésions secondaires (évitables)\n- Agressions cérébrales secondaires d’origine systémique (ACSOS) : hypoxie, hypotension, hypo/hypercapnie, hyperthermie, hypo/hyperglycémie, anémie, hyponatrémie\n- Œdème cérébral, hypertension intracrânienne, engagement',
    diagnostic:
      '## Évaluation initiale\n- Mécanisme, perte de connaissance, amnésie, vomissements, convulsions\n- Glasgow (meilleure réponse motrice), pupilles (taille, symétrie, réactivité), déficit moteur\n- Plaie du scalp, embarrure, otorragie, rhinorrhée (brèche), ecchymoses périorbitaires ou rétro-auriculaires\n- Lésions associées : rachis cervical, thorax, abdomen, membres',
    examens: [
      [
        'confirmation',
        'scanner-cerebral',
        'Hématome extradural (lentille biconvexe), sous-dural (croissant), contusions, œdème, effet de masse, fractures. Indications (NICE) : Glasgow < 13 initial ou < 15 à 2 h, suspicion de fracture ouverte, d’embarrure ou de la base, convulsion, déficit focal, vomissements répétés, anticoagulants.',
      ],
      [
        'gravite',
        'glycemie',
        'Hypo- et hyperglycémies aggravent les lésions : maintenir entre 1,0 et 1,8 g/L.',
      ],
      ['gravite', 'ionogramme', 'Éviter l’hyponatrémie (aggravation de l’œdème cérébral).'],
      ['gravite', 'nfs', 'Anémie (lésions associées).'],
      ['gravite', 'hemostase', 'Coagulopathie post-traumatique, traitement anticoagulant.'],
      [
        'gravite',
        'gaz-du-sang',
        'Objectifs : PaO2 > 80 mmHg, PaCO2 35–40 mmHg (éviter l’hyperventilation prolongée).',
      ],
      ['pretherapeutique', 'groupage-rai', 'Avant intervention neurochirurgicale.'],
    ],
    scores: ['glasgow', 'blantyre'],
    differentiels: [
      ['avc', 'Hémorragie spontanée responsable de la chute.'],
      [
        'Intoxication (alcool, drogues)',
        'Ne jamais attribuer un trouble de conscience à l’alcool sans scanner chez un traumatisé.',
      ],
      ['Hypoglycémie', 'Glycémie capillaire systématique.'],
      ['etat-de-mal-epileptique', 'Crise responsable de la chute ; confusion post-critique.'],
      ['paludisme-grave', 'Neuropaludisme chez un patient qui a chuté : TDR en zone d’endémie.'],
    ],
    etiologies:
      '## Causes\n- Accidents de la circulation (moto-taxis, piétons)\n- Chutes (enfants, personnes âgées, chantiers)\n- Agressions et violences, conflits armés\n\n## Facteurs aggravants\n- Âge > 65 ans, anticoagulants, alcool, absence de casque',
    principes: [
      [
        'ABCDE avec protection du rachis cervical',
        'Prévenir l’aggravation dès la prise en charge.',
        '- Collier cervical, intubation si Glasgow ≤ 8\n- Rechercher et traiter les lésions associées (hémorragie)',
      ],
      [
        'Prévenir les agressions cérébrales secondaires (ACSOS)',
        'Limiter les lésions secondaires, principales cibles du traitement.',
        '- SpO2 ≥ 94 %, normocapnie\n- PAS ≥ 100–110 mmHg (soluté isotonique, jamais de glucosé)\n- Normoglycémie, normothermie, natrémie normale, Hb correcte',
      ],
      [
        'Évaluer la gravité et réaliser le scanner selon les critères',
        'Identifier les lésions chirurgicales.',
        '- Glasgow et pupilles répétés\n- Scanner cérébral (± cervical) selon les critères NICE',
      ],
      [
        'Traitement neurochirurgical des lésions compressives',
        'Évacuer les hématomes avant l’engagement.',
        '- Hématome extradural : craniotomie en urgence\n- Hématome sous-dural aigu épais (> 10 mm) ou déviation > 5 mm\n- Embarrure ouverte ou compressive ; en l’absence de scanner et de neurochirurgien : trous de trépan exploratoires en sauvetage (damage control) selon l’expérience',
      ],
      [
        'Traitement médical de l’hypertension intracrânienne',
        'Maintenir la perfusion cérébrale.',
        '- Tête surélevée à 30°, sédation-analgésie\n- Osmothérapie (mannitol ou sérum salé hypertonique) si signes d’engagement\n- Pas de corticoïdes (mortalité augmentée)',
      ],
      [
        'Traumatisme léger : surveillance et consignes',
        'Ne pas méconnaître une aggravation secondaire.',
        '- Acide tranexamique dans les 3 h si TC léger à modéré avec lésion (CRASH-3)\n- Surveillance neurologique 24 h si facteur de risque ; consignes écrites de retour\n- TC grave : prophylaxie des crises précoces pendant 7 jours (lévétiracétam ou phénytoïne)',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Soluté de remplissage de référence (isotonique)'],
      ['mannitol', 'adjuvant', 'Hypertension intracrânienne avec signes d’engagement'],
      ['acide-tranexamique', 'adjuvant', 'TC léger à modéré dans les 3 h (CRASH-3)'],
      ['levetiracetam', 'adjuvant', 'Prophylaxie des crises précoces (7 jours) dans le TC grave'],
      ['phenytoine', 'alternative', 'Prophylaxie des crises précoces'],
      ['paracetamol', 'adjuvant', 'Analgésie'],
      ['morphine', 'adjuvant', 'Analgésie (prudence : surveillance de la vigilance)'],
    ],
    complications: [
      {
        nom: 'Hématome extradural',
        description: 'Classiquement après un intervalle libre ; urgence neurochirurgicale absolue.',
        traitement: '- Craniotomie et évacuation en urgence',
        clinique: '- Baisse du Glasgow, mydriase homolatérale, hémiparésie controlatérale',
        paraclinique: '- Scanner cérébral',
      },
      {
        nom: 'Hypertension intracrânienne et engagement',
        description: 'Œdème, hématomes, contusions évolutives.',
        traitement: '- Osmothérapie, sédation, chirurgie (évacuation, craniectomie décompressive)',
        clinique:
          '- Glasgow et pupilles toutes les heures, triade de Cushing (HTA, bradycardie, troubles respiratoires)',
        paraclinique: '- Scanner de contrôle, natrémie, osmolalité',
      },
      {
        nom: 'Convulsions post-traumatiques',
        fiche: 'etat-de-mal-epileptique',
        description: 'Précoces (< 7 jours) ou tardives (épilepsie post-traumatique).',
        traitement: '- Benzodiazépine en urgence, prophylaxie 7 jours dans le TC grave',
        clinique: '- Crises, conscience',
        paraclinique: '- EEG si état de mal non convulsif suspecté',
      },
      {
        nom: 'Infection (méningite, brèche ostéoméningée)',
        fiche: 'meningite-bacterienne',
        description: 'Fractures de la base, plaies craniocérébrales.',
        traitement:
          '- Antibiothérapie, parage chirurgical des plaies, fermeture de la brèche si persistante\n- Vaccination antipneumococcique en cas de brèche',
        clinique: '- Rhinorrhée ou otorrhée claire, fièvre, syndrome méningé',
        paraclinique: '- LCR, scanner',
      },
      {
        nom: 'Hyponatrémie',
        description: 'Sécrétion inappropriée d’ADH ou perte de sel cérébrale ; aggrave l’œdème.',
        traitement: '- Selon le mécanisme : restriction hydrique (SIADH) ou apports sodés (perte de sel)',
        clinique: '- Conscience, convulsions',
        paraclinique: '- Natrémie quotidienne',
      },
      {
        nom: 'Séquelles',
        description:
          'Syndrome post-commotionnel, troubles cognitifs et du comportement, déficits, hydrocéphalie.',
        traitement: '- Rééducation, prise en charge des troubles cognitifs, dérivation si hydrocéphalie',
        clinique: '- Céphalées, mémoire, attention, comportement, marche',
        paraclinique: '- Scanner si dégradation secondaire',
      },
    ],
    evolution:
      '## Pronostic\n- TC léger : récupération complète dans la grande majorité des cas\n- TC grave : mortalité de 30 à 40 %, séquelles fréquentes ; dépend de l’âge, du Glasgow moteur, des pupilles, des lésions au scanner et des ACSOS\n\n## Suivi\n- Consultation de suivi, retour progressif aux activités, dépistage des séquelles',
    urgences: ['traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Céphalées', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Déficit moteur', 'occasionnel'],
      ['Troubles du langage', 'occasionnel'],
    ],
    sources: [
      'Guidelines for the Management of Severe Traumatic Brain Injury (4th edition)',
      'Head injury: assessment and early management (NICE guideline NG232)',
      'WFNS — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
  },
];
