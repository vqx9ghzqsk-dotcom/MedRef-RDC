'use strict';

/** Fiches — Gynécologie-obstétrique. Format : voir infectiologie.js. */

module.exports = [
  // =================================================================== Pré-éclampsie sévère
  {
    specialite: 'Pathologies obstétricales',
    slug: 'pre-eclampsie-severe',
    nom: 'Pré-éclampsie sévère',
    resume:
      "HTA gravidique après 20 SA avec protéinurie ou atteinte d'organe et signes de gravité — risque d'éclampsie.",
    definition:
      "HTA (≥ 140/90 mmHg) apparue après 20 semaines d'aménorrhée, associée à une protéinurie (≥ 0,3 g/24 h ou RPC ≥ 30 mg/mmol) ou à une atteinte d'organe maternelle ou un retentissement fœtal. Elle est **sévère** si PA ≥ 160/110 mmHg ou en présence de signes de gravité.",
    physiopathologie:
      "## Mécanismes\n- Défaut d'invasion trophoblastique des artères spiralées\n- Ischémie placentaire → libération de facteurs anti-angiogéniques (sFlt-1)\n- Dysfonction endothéliale maternelle diffuse (rein, foie, cerveau, coagulation)",
    diagnostic:
      '## Signes de gravité\n- PA ≥ 160/110 mmHg\n- Céphalées persistantes, troubles visuels, barre épigastrique ou douleur de l’hypocondre droit\n- Oligurie < 500 mL/24 h, OAP\n- Hyperréflexie ostéotendineuse\n\n## Évaluation fœtale\n- Bruits du cœur fœtal, mouvements actifs, hauteur utérine (RCIU)',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie ≥ 2+ : à confirmer par quantification.'],
      ['confirmation', 'proteinurie', '≥ 0,3 g/24 h ou RPC ≥ 30 mg/mmol.'],
      ['gravite', 'nfs', 'Plaquettes < 100 G/L : gravité, HELLP ; hémoconcentration.'],
      ['gravite', 'bilan-hepatique', 'ASAT/ALAT > 2 × la normale : atteinte hépatique, HELLP.'],
      ['gravite', 'ldh', '> 600 UI/L : hémolyse (HELLP).'],
      ['gravite', 'creatinine', '> 97 µmol/L (1,1 mg/dL) ou doublement : atteinte rénale.'],
      ['gravite', 'uricemie', 'Élevée : marqueur de sévérité, sans valeur diagnostique.'],
      [
        'gravite',
        'hemostase',
        'Thrombopénie ou suspicion d’hématome rétroplacentaire : CIVD (fibrinogène bas).',
      ],
      [
        'gravite',
        'test-de-coagulation-au-lit',
        'Laboratoire indisponible : absence de caillot à 20 min = coagulopathie.',
      ],
      [
        'premiere_intention',
        'echographie-obstetricale',
        'Biométries (RCIU), liquide amniotique, vitalité ; Doppler ombilical (diastole nulle ou inversée = urgence).',
      ],
      [
        'gravite',
        'scanner-cerebral',
        'Déficit neurologique ou crises atypiques : hémorragie, encéphalopathie postérieure réversible.',
      ],
      ['pretherapeutique', 'groupage-rai', 'Avant césarienne ou en cas d’hémorragie.'],
      [
        'suivi',
        'calcemie-magnesemie',
        'Oligurie sous sulfate de magnésium : magnésémie (zone thérapeutique 2–3,5 mmol/L).',
      ],
    ],
    scores: ['apgar'],
    differentiels: [
      [
        'hypertension-arterielle',
        'HTA chronique : connue ou découverte avant 20 SA (une pré-éclampsie peut s’y surajouter).',
      ],
      ['HTA gravidique isolée', 'HTA après 20 SA sans protéinurie ni atteinte d’organe.'],
      [
        'Stéatose hépatique aiguë gravidique',
        'Nausées, hypoglycémie, insuffisance hépatique, troubles de la coagulation.',
      ],
      [
        'Microangiopathie thrombotique (PTT, SHU)',
        'Anémie hémolytique et thrombopénie sévères, atteinte rénale ou neurologique prédominante.',
      ],
      ['epilepsie', 'Convulsions chez une épileptique connue sans HTA ni protéinurie.'],
      ['Néphropathie lupique ou glomérulaire', 'Protéinurie ou hématurie antérieures à 20 SA.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Primiparité, âges extrêmes, nouveau partenaire\n- Antécédent de pré-éclampsie\n- HTA chronique, diabète, néphropathie, obésité, maladies auto-immunes\n- Grossesse multiple, môle hydatiforme',
    principes: [
      [
        'Hospitaliser et évaluer la gravité',
        'Apprécier le risque maternel et fœtal.',
        '- Bilan clinique et biologique, évaluation fœtale\n- Structure disposant d’un bloc opératoire et d’une prise en charge néonatale',
      ],
      [
        'Prévenir l’éclampsie par le sulfate de magnésium',
        'Réduire de moitié le risque de convulsions.',
        '- Zuspan : 4 g IV en 15–20 min puis 1 g/h pendant 24 h\n- Pritchard (si pas de pousse-seringue) : 4 g IV + 10 g IM, puis 5 g IM toutes les 4 h\n- Surveiller réflexes, FR (≥ 12/min), diurèse (≥ 30 mL/h) ; antidote : gluconate de calcium',
      ],
      [
        'Contrôler la PA sévère',
        'Prévenir l’AVC maternel.',
        '- Traiter toute PA ≥ 160/110 mmHg dans les 30–60 min\n- Nifédipine orale à libération immédiate, labétalol IV ou hydralazine IV\n- Objectif PAS 140–150 et PAD 90–100 mmHg ; éviter les chutes brutales (souffrance fœtale)',
      ],
      [
        'Décider du moment de l’accouchement',
        'Le seul traitement curatif est l’extraction placentaire.',
        '- ≥ 34 SA : accouchement après stabilisation\n- < 34 SA : prolongation possible en centre de référence si la mère et le fœtus sont stables\n- Accouchement immédiat si éclampsie, HELLP qui s’aggrave, hématome rétroplacentaire, OAP, souffrance fœtale',
      ],
      [
        'Maturation pulmonaire et neuroprotection fœtales',
        'Améliorer le pronostic du prématuré.',
        '- Dexaméthasone 6 mg IM toutes les 12 h (4 doses) entre 24 et 34 SA\n- Le sulfate de magnésium avant 32 SA est aussi neuroprotecteur',
      ],
      [
        'Surveillance du post-partum et prévention ultérieure',
        'Les complications peuvent survenir après l’accouchement.',
        '- Surveillance rapprochée 48–72 h (pic de risque d’éclampsie), poursuite du traitement antihypertenseur\n- Grossesse suivante : aspirine 75–150 mg dès 12 SA, supplémentation calcique si apports faibles\n- Risque cardiovasculaire augmenté au long cours',
      ],
    ],
    molecules: [
      ['sulfate-de-magnesium', 'premiere', 'Prévention et traitement de l’éclampsie'],
      ['nifedipine', 'premiere', 'HTA sévère (libération immédiate, per os)'],
      ['labetalol', 'premiere', 'HTA sévère (IV) ; relais oral'],
      ['hydralazine', 'alternative', 'HTA sévère (IV)'],
      ['methyldopa', 'deuxieme', 'Traitement de fond'],
      ['dexamethasone', 'adjuvant', 'Maturation pulmonaire avant 34 SA'],
      ['gluconate-de-calcium', 'adjuvant', 'Antidote du sulfate de magnésium'],
      ['acide-acetylsalicylique', 'adjuvant', 'Prévention lors des grossesses suivantes (dès 12 SA)'],
    ],
    complications: [
      {
        nom: 'Éclampsie',
        description: 'Crise convulsive généralisée ; peut survenir avant, pendant ou après l’accouchement.',
        traitement:
          '- PLS, protection, oxygène\n- Sulfate de magnésium (dose de charge puis entretien) ; récidive : 2 g IV supplémentaires\n- Contrôle tensionnel puis accouchement après stabilisation',
        clinique: '- Réflexes rotuliens, FR, diurèse horaire, conscience, PA toutes les 15–30 min',
        paraclinique: '- Magnésémie si disponible, bilan de HELLP',
      },
      {
        nom: 'HELLP syndrome',
        description:
          'Hémolyse, cytolyse hépatique, thrombopénie ; risque d’hématome sous-capsulaire du foie.',
        traitement:
          '- Accouchement après stabilisation\n- Transfusion de plaquettes si < 50 G/L avant césarienne ou en cas de saignement',
        clinique: '- Douleur épigastrique ou de l’hypocondre droit, nausées, saignements',
        paraclinique: '- Plaquettes, ASAT/ALAT, LDH toutes les 6–12 h',
      },
      {
        nom: 'Hématome rétroplacentaire',
        description: 'Décollement prématuré du placenta : urgence maternelle et fœtale.',
        traitement: '- Extraction fœtale en urgence, prise en charge de la CIVD\n- Transfusion',
        clinique: '- Métrorragies noirâtres, utérus de bois, choc, bruits du cœur fœtal',
        paraclinique: '- Hémostase, fibrinogène, hémoglobine, test de coagulation au lit',
      },
      {
        nom: 'Œdème aigu du poumon',
        description: 'Fuite capillaire et apports liquidiens excessifs.',
        traitement: '- Oxygène, position assise, furosémide\n- Limiter les apports totaux (≈ 80 mL/h)',
        clinique: '- FR, SpO2, crépitants',
        paraclinique: '- SpO2, radiographie thoracique',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Nécrose tubulaire, rarement corticale.',
        traitement: '- Prise en charge de l’IRA ; adapter le sulfate de magnésium (risque de surdosage)',
        clinique: '- Diurèse horaire (sonde urinaire)',
        paraclinique: '- Créatinine, kaliémie',
      },
      {
        nom: 'Accident vasculaire cérébral',
        fiche: 'avc',
        description: 'Le plus souvent hémorragique, lié à la PA systolique sévère.',
        traitement: '- Contrôle tensionnel strict, imagerie, avis neurochirurgical',
        clinique: '- Céphalées brutales, déficit, troubles de la conscience',
        paraclinique: '- Scanner cérébral',
      },
      {
        nom: 'Retard de croissance et mort fœtale in utero',
        description: 'Insuffisance placentaire chronique.',
        traitement: '- Surveillance fœtale rapprochée, décision d’extraction selon le terme et le Doppler',
        clinique: '- Mouvements actifs fœtaux, bruits du cœur, hauteur utérine',
        paraclinique: '- Échographie et Doppler',
      },
    ],
    evolution:
      '## Évolution\n- Guérison après l’accouchement, mais les complications peuvent survenir jusqu’à 6 semaines du post-partum (surtout dans les 48–72 h)\n- Normalisation de la PA et de la protéinurie en quelques semaines\n\n## Pronostic à long terme\n- Récidive possible ; risque cardiovasculaire et rénal accru : suivi tensionnel',
    urgences: ['eclampsie', 'urgence-hypertensive'],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Troubles visuels', 'frequent'],
      ['Œdèmes', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
      ['Convulsions', 'rare'],
    ],
    sources: [
      'WHO recommendations for prevention and treatment of pre-eclampsia and eclampsia',
      'WHO recommendations: drug treatment for severe hypertension in pregnancy',
      'ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia',
      'Normes et directives de santé de la reproduction',
      "Précis d'obstétrique (Merger)",
    ],
  },

  // =================================================================== HPP
  {
    specialite: 'Urgences obstétricales',
    slug: 'hemorragie-post-partum',
    nom: 'Hémorragie du post-partum',
    resume:
      'Première cause de mortalité maternelle : mesurer le saignement, paquet E-MOTIVE immédiat, ocytocine + acide tranexamique.',
    definition:
      'Perte sanguine ≥ 500 mL dans les 24 h suivant l’accouchement (sévère si ≥ 1 000 mL). L’OMS 2023 recommande une mesure objective (sac collecteur gradué) et le diagnostic dès 500 mL, ou dès 300 mL en présence de signes cliniques anormaux.',
    physiopathologie:
      '## Les « 4 T »\n- **Tonus** : atonie utérine (≈ 70 % des cas)\n- **Trauma** : déchirures cervico-vaginales, rupture utérine, inversion utérine\n- **Tissu** : rétention placentaire ou de cotylédons\n- **Thrombine** : coagulopathie (HRP, pré-éclampsie, embolie amniotique, hémorragie massive)',
    diagnostic:
      '## Reconnaître tôt\n- Mesurer le saignement (sac collecteur gradué), ne pas l’estimer « à l’œil »\n- Signes de choc : FC > 100/min, PAS < 90 mmHg, index de choc ≥ 1, pâleur, confusion, oligurie\n\n## Rechercher la cause\n- Utérus mou ou bien rétracté, examen du placenta, examen sous valves du col et du vagin',
    examens: [
      [
        'gravite',
        'nfs',
        'Hb de référence puis contrôle ; la baisse est retardée par rapport à la perte réelle.',
      ],
      ['pretherapeutique', 'groupage-rai', 'En urgence ; commander du sang dès 1 000 mL ou instabilité.'],
      [
        'gravite',
        'hemostase',
        'Fibrinogène < 2 g/L : HPP sévère, coagulopathie, prédictif d’évolution grave.',
      ],
      [
        'gravite',
        'test-de-coagulation-au-lit',
        'Laboratoire indisponible : absence de caillot à 20 min = coagulopathie (CIVD).',
      ],
      ['gravite', 'lactates', 'Hypoperfusion tissulaire.'],
      ['gravite', 'creatinine', 'IRA au décours d’un choc.'],
      [
        'etiologique',
        'echographie-pelvienne',
        'Rétention placentaire ou de caillots, hémopéritoine (rupture utérine).',
      ],
    ],
    scores: ['index-de-choc', 'debit-perfusion'],
    differentiels: [
      [
        'Rupture utérine',
        'Utérus cicatriciel, douleur, hémopéritoine, choc disproportionné aux pertes visibles.',
      ],
      ['Inversion utérine', 'Masse vaginale, utérus non palpable, choc vagal.'],
      [
        'Coagulopathie',
        'Saignement incoagulable, saignements aux points de ponction (HRP, embolie amniotique, HELLP).',
      ],
      ['Hématome vulvo-vaginal', 'Douleur périnéale intense, masse ; pertes visibles faibles.'],
      ['pre-eclampsie-severe', 'HELLP et CIVD associés.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Travail prolongé ou très rapide, accouchement instrumental, césarienne\n- Surdistension utérine (grossesse multiple, hydramnios, macrosomie), grande multiparité\n- Anémie préexistante, pré-éclampsie, antécédent d’HPP, placenta prævia ou accreta\n- Absence de gestion active de la 3e période (GATPA)\n\n⚠️ La moitié des HPP survient sans facteur de risque : la prévention concerne toutes les femmes.',
    principes: [
      [
        'Prévenir chez toutes les femmes (GATPA)',
        'Réduire de moitié la fréquence des HPP.',
        '- Utérotonique dès la naissance : ocytocine 10 UI IM/IV (ou carbétocine thermostable, misoprostol 600 µg si pas d’injectable)\n- Clampage retardé du cordon, traction contrôlée si personnel qualifié\n- Surveillance du tonus utérin et des pertes pendant 2 h',
      ],
      [
        'Diagnostiquer tôt par la mesure objective',
        'Agir avant le choc.',
        '- Sac collecteur gradué systématique\n- Surveillance PA, FC, index de choc',
      ],
      [
        'Paquet de première réponse E-MOTIVE immédiat',
        'Appliquer simultanément les gestes efficaces.',
        '- **M**assage utérin\n- **O**cytocine (et autres utérotoniques)\n- **T**ranexamique (acide) 1 g IV en 10 min dans les 3 h\n- **IV** : solutés (cristalloïdes)\n- **E**xamen : placenta, filière génitale, vessie\n- **E**scalade si le saignement persiste',
      ],
      [
        'Traiter la cause (4 T)',
        'Arrêter le saignement.',
        '- Atonie : utérotoniques (perfusion d’ocytocine, misoprostol 800 µg sublingual), compression bimanuelle\n- Trauma : suture des déchirures ; rupture utérine : laparotomie\n- Tissu : délivrance artificielle, révision utérine\n- Thrombine : correction de la coagulopathie',
      ],
      [
        'Mesures de sauvetage si échec',
        'Gagner du temps et éviter le décès.',
        '- Ballonnet de tamponnement intra-utérin (ou préservatif sur sonde)\n- Compression aortique, combinaison anti-choc non pneumatique\n- Chirurgie : ligatures vasculaires, suture de B-Lynch, hystérectomie d’hémostase',
      ],
      [
        'Réanimation, transfusion et suivi',
        'Restaurer la volémie et l’oxygénation.',
        '- 2 voies veineuses de gros calibre, réchauffement, transfusion précoce\n- Fer après l’épisode, surveillance prolongée',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Prévention (GATPA) et traitement de 1re intention'],
      ['acide-tranexamique', 'premiere', 'Dans les 3 h, en plus des utérotoniques'],
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['misoprostol', 'deuxieme', 'Traitement adjuvant ; prévention si ocytocine indisponible'],
      ['carbetocine', 'alternative', 'Prévention (formulation thermostable)'],
      ['chlorure-de-sodium-0-9', 'alternative', 'Remplissage'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        description: 'Défaillance circulatoire par hypovolémie.',
        traitement:
          '- Cristalloïdes réchauffés, transfusion précoce (culots, plasma, plaquettes)\n- Contrôle chirurgical du saignement\n- Vasopresseurs si nécessaire, éviter l’hypothermie',
        clinique: '- PA, FC, index de choc, conscience, diurèse toutes les 15 min',
        paraclinique: '- Hémoglobine, lactates',
      },
      {
        nom: 'Coagulopathie et CIVD',
        description: 'Consommation et dilution des facteurs de coagulation.',
        traitement: '- Acide tranexamique, plasma frais congelé, fibrinogène ou cryoprécipité, plaquettes',
        clinique: '- Saignement incoagulable, saignements aux points de ponction',
        paraclinique: '- TP, TCA, fibrinogène, plaquettes, test de coagulation au lit',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Nécrose tubulaire après choc prolongé.',
        traitement: '- Restaurer la volémie, éviter les néphrotoxiques',
        clinique: '- Diurèse horaire (sonde urinaire)',
        paraclinique: '- Créatinine, kaliémie',
      },
      {
        nom: 'Syndrome de Sheehan',
        description: 'Nécrose hypophysaire après choc hémorragique.',
        traitement: '- Hormonothérapie substitutive (hydrocortisone, lévothyroxine)',
        clinique: '- Absence de montée laiteuse, aménorrhée prolongée, asthénie',
        paraclinique: '- Cortisol, TSH et T4 libre',
      },
      {
        nom: 'Anémie du post-partum',
        description: 'Fatigue, difficultés d’allaitement, dépression.',
        traitement: '- Fer oral ou IV, transfusion si mal tolérée',
        clinique: '- Pâleur, tolérance',
        paraclinique: '- Hémoglobine à J1–J2 puis à 6 semaines',
      },
      {
        nom: 'Infection (endométrite) et thrombose',
        description: 'Favorisées par les manœuvres endo-utérines et l’immobilisation.',
        traitement: '- Antibiothérapie (amoxicilline-acide clavulanique) ; prophylaxie thromboembolique',
        clinique: '- Température, lochies, douleur pelvienne, mollets',
        paraclinique: '- NFS, CRP',
      },
    ],
    evolution:
      '## Pronostic\n- Une HPP non traitée peut tuer en moins de 2 heures\n- Le paquet E-MOTIVE réduit fortement les HPP sévères et les décès\n\n## Suivi\n- Surveillance rapprochée 24 h, Hb, fer ; prévention renforcée à la grossesse suivante',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Pâleur', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
    ],
    sources: [
      'WHO recommendations for the prevention and treatment of postpartum haemorrhage',
      'WHO recommendations on the assessment of postpartum blood loss and use of a treatment bundle for postpartum haemorrhage',
      'WHO recommendation on tranexamic acid for the treatment of postpartum haemorrhage',
      'FIGO recommendations on the management of postpartum hemorrhage 2022',
      'Normes et directives de santé de la reproduction',
    ],
  },

  // =================================================================== GEU
  {
    specialite: 'Gynécologie',
    slug: 'grossesse-extra-uterine',
    nom: 'Grossesse extra-utérine',
    resume:
      'Toute douleur pelvienne ou métrorragie chez une femme en âge de procréer = β-hCG : la GEU rompue tue par hémorragie.',
    definition:
      'Implantation de l’œuf en dehors de la cavité utérine, le plus souvent dans la trompe (≈ 95 %). Première cause de décès maternel au 1er trimestre.',
    physiopathologie:
      '## Mécanismes\n- Retard ou obstacle à la migration de l’œuf dans une trompe altérée (salpingite, chirurgie)\n- Croissance trophoblastique dans une paroi non adaptée → rupture et hémopéritoine',
    diagnostic:
      '## Clinique\n- Triade : aménorrhée, douleur pelvienne, métrorragies (souvent peu abondantes, noirâtres)\n- Forme rompue : douleur brutale, scapulalgie, malaise, choc, défense, douleur au toucher vaginal (cul-de-sac de Douglas)\n\n## Toujours\n- Test de grossesse chez toute femme en âge de procréer avec douleur abdominale ou malaise',
    examens: [
      [
        'premiere_intention',
        'beta-hcg',
        'Positif ; cinétique anormale (augmentation < 35 % en 48 h ou plateau). Au-dessus de la zone de discrimination sans sac intra-utérin : GEU très probable.',
      ],
      [
        'confirmation',
        'echographie-pelvienne',
        'Utérus vide avec β-hCG au-dessus du seuil, masse latéro-utérine (anneau tubaire, sac avec embryon), épanchement du Douglas (hémopéritoine si abondant).',
      ],
      ['gravite', 'nfs', 'Anémie : hémorragie interne.'],
      [
        'pretherapeutique',
        'groupage-rai',
        'Rhésus négatif : immunoprophylaxie anti-D ; réserve de sang si rupture.',
      ],
      ['pretherapeutique', 'bilan-hepatique', 'Avant méthotrexate.'],
      ['pretherapeutique', 'creatinine', 'Avant méthotrexate.'],
      ['suivi', 'beta-hcg', 'Après méthotrexate : J4, J7 puis hebdomadaire jusqu’à négativation.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      [
        'Fausse couche spontanée',
        'Saignement abondant avec caillots, col ouvert ; échographie : sac intra-utérin ou débris.',
      ],
      [
        'Grossesse intra-utérine évolutive précoce',
        'β-hCG sous le seuil de discrimination : contrôle à 48 h et échographie.',
      ],
      ['Kyste ovarien hémorragique ou torsion d’annexe', 'β-hCG négative.'],
      ['Infection génitale haute (salpingite)', 'Fièvre, leucorrhées, β-hCG négative.'],
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite, fièvre, β-hCG négative.'],
      ['Môle hydatiforme', 'β-hCG très élevée, utérus trop gros, aspect « en grappe » à l’échographie.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Antécédent d’infection génitale haute ou d’IST (Chlamydia, gonocoque)\n- Antécédent de GEU, chirurgie tubaire ou pelvienne\n- Grossesse sous dispositif intra-utérin, procréation médicalement assistée\n- Tabac, âge > 35 ans',
    principes: [
      [
        'Évoquer systématiquement la GEU',
        'Ne jamais méconnaître une GEU.',
        '- β-hCG devant toute douleur pelvienne, métrorragie ou malaise chez une femme en âge de procréer',
      ],
      [
        'Évaluer la stabilité hémodynamique',
        'Orienter vers le bon traitement.',
        '- PA, FC, index de choc, signes d’hémopéritoine',
      ],
      [
        'GEU rompue ou instable : chirurgie en urgence',
        'Arrêter l’hémorragie.',
        '- Mise en condition (2 voies veineuses, remplissage, sang)\n- Laparotomie (ou cœlioscopie si disponible et patiente stabilisée) : salpingectomie',
      ],
      [
        'GEU non rompue et stable : traitement médical ou cœlioscopie',
        'Préserver la fertilité quand c’est possible.',
        '- Méthotrexate 50 mg/m² IM si critères réunis (patiente stable, pas d’activité cardiaque, β-hCG de préférence < 5 000 UI/L, suivi possible)\n- Sinon chirurgie cœlioscopique (salpingotomie ou salpingectomie)\n- Abstention surveillée si β-hCG basse et décroissante',
      ],
      [
        'Mesures associées',
        'Prévenir les complications ultérieures.',
        '- Anti-D si rhésus négatif\n- Traitement d’une infection génitale, conseil contraceptif',
      ],
      [
        'Suivi jusqu’à négativation et conseil',
        'Vérifier la guérison et préparer la grossesse suivante.',
        '- β-hCG jusqu’à négativation\n- Échographie précoce lors de la grossesse suivante (risque de récidive)',
      ],
    ],
    molecules: [
      ['methotrexate', 'premiere', 'GEU non rompue, stable, critères réunis'],
      ['ringer-lactate', 'adjuvant', 'Remplissage (GEU rompue)'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie chirurgicale'],
      ['paracetamol', 'adjuvant', 'Antalgie'],
    ],
    complications: [
      {
        nom: 'Rupture et choc hémorragique',
        description: 'Hémopéritoine massif.',
        traitement: '- Remplissage, transfusion, laparotomie en urgence\n- Autotransfusion si disponible',
        clinique: '- PA, FC, douleur, défense, conscience',
        paraclinique: '- Hémoglobine, échographie (épanchement)',
      },
      {
        nom: 'Échec du traitement médical',
        description: 'Décroissance insuffisante de la β-hCG ou rupture secondaire.',
        traitement: '- 2e dose de méthotrexate ou chirurgie',
        clinique: '- Douleur, signes de rupture (consulter en urgence)',
        paraclinique: '- β-hCG à J4 et J7 (baisse attendue ≥ 15 %)',
      },
      {
        nom: 'Persistance trophoblastique après salpingotomie',
        description: 'Tissu trophoblastique résiduel.',
        traitement: '- Méthotrexate',
        clinique: '- Douleur, métrorragies',
        paraclinique: '- β-hCG hebdomadaire',
      },
      {
        nom: 'Toxicité du méthotrexate',
        description: 'Stomatite, cytopénies, cytolyse.',
        traitement: '- Traitement symptomatique ; acide folinique si toxicité sévère',
        clinique: '- Muqueuses, saignements, infections',
        paraclinique: '- NFS, transaminases',
      },
      {
        nom: 'Infertilité et récidive',
        description: 'Risque de récidive de 10 à 15 %.',
        traitement: '- Conseil, prise en charge des facteurs (IST), échographie précoce',
        clinique: '- Délai de conception',
        paraclinique: '- Échographie précoce lors de la grossesse suivante',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent si diagnostic précoce\n- Mortalité liée au retard diagnostique et à l’absence de chirurgie disponible\n\n## Suivi\n- β-hCG jusqu’à négativation ; grossesse ultérieure à 3 mois après méthotrexate',
    urgences: ['grossesse-extra-uterine-rompue'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Aménorrhée', 'tres_frequent'],
      ['Saignement vaginal', 'frequent'],
      ['Pâleur', 'occasionnel'],
      ['Troubles de la conscience', 'rare'],
    ],
    sources: [
      'ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy',
      'RCOG Green-top Guideline No. 21: Diagnosis and Management of Ectopic Pregnancy',
      'Normes et directives de santé de la reproduction',
    ],
  },
];
