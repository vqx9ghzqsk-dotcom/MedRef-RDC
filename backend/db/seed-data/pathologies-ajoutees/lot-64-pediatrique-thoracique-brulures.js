'use strict';

/**
 * Lot 64 (phase 2, chirurgie pédiatrique, thoracique, brûlures) — laparoschisis et omphalocèle,
 * ingestion de corps étrangers, volet costal, tumeurs du médiastin, brûlures chimiques et
 * électriques, séquelles de brûlures et rétractions. Rédigé par IA (Nelson, Sabiston, OMS) : à
 * valider.
 */

const CPED = { departement: 'chirurgie', specialite: 'Chirurgie pédiatrique' };
const THO = { departement: 'chirurgie', specialite: 'Chirurgie thoracique' };
const BRU = { departement: 'chirurgie', specialite: 'Brûlures et chirurgie plastique' };

module.exports = [
  // =================================================================== Laparoschisis / omphalocèle
  {
    ...CPED,
    slug: 'laparoschisis-omphalocele',
    nom: 'Laparoschisis et omphalocèle',
    resume:
      'Défauts congénitaux de la paroi abdominale : laparoschisis (anses intestinales extériorisées sans membrane, à droite de l’ombilic, mère jeune, peu de malformations associées) et omphalocèle (viscères dans un sac membraneux au niveau de l’ombilic, souvent associée à des anomalies chromosomiques et cardiaques, syndrome de Beckwith-Wiedemann) ; diagnostic anténatal possible ; à la naissance : couvrir les viscères d’un film plastique ou d’un sac stérile, enfant sur le côté droit, sonde gastrique, perfusion, prévention de l’hypothermie et de l’hypoglycémie, antibiotiques, transfert urgent ; réintégration chirurgicale (fermeture primaire ou silo progressif) ; omphalocèle géante : traitement conservateur (épithélialisation).',
    definition:
      'Laparoschisis : défect pariétal para-ombilical avec éviscération libre des anses ; omphalocèle : hernie des viscères à travers l’anneau ombilical, recouverte d’un sac (amnios et péritoine).',
    physiopathologie:
      '## Laparoschisis\n- Défect latéral droit, anses exposées au liquide amniotique → **épaississement, inflammation** des anses, iléus prolongé\n- Mère jeune, tabac, toxiques ; malformations associées rares (atrésie intestinale)\n\n## Omphalocèle\n- Défaut de réintégration des anses physiologiquement herniées\n- **Malformations associées** (50 %) : **cardiopathies**, **trisomies 13, 18, 21**, syndrome de **Beckwith-Wiedemann** (hypoglycémie, macroglossie)\n\n## Risques\n- **Hypothermie**, **déshydratation** (pertes par les viscères exposés), infection, ischémie intestinale',
    diagnostic:
      '## Anténatal\n- **Échographie** : viscères hors de l’abdomen, sac ou non ; alpha-fœtoprotéine maternelle élevée\n\n## Naissance\n- **Laparoschisis** : anses libres, épaissies, à droite d’un ombilic normal\n- **Omphalocèle** : sac translucide au niveau du cordon, contenant intestin ± foie\n- Rechercher : malformations cardiaques, dysmorphie, macroglossie, hypoglycémie\n\n## Examens\n- **Glycémie**, ionogramme, NFS, groupage\n- **Échocardiographie**, échographie rénale, caryotype (omphalocèle)',
    examens: [
      ['premiere_intention', 'echographie-obstetricale', 'Diagnostic anténatal.'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'ionogramme', 'Pertes hydro-électrolytiques.'],
      ['premiere_intention', 'echocardiographie', 'Cardiopathie (omphalocèle).'],
      ['etiologique', 'caryotype', 'Anomalies chromosomiques.'],
      ['premiere_intention', 'alpha-foetoproteine', 'Dépistage anténatal.'],
    ],
    scores: [],
    differentiels: [
      ['malformations-congenitales-majeures', 'Malformations associées.'],
      ['hernie-ombilicale-ligne-blanche', 'Hernie ombilicale recouverte de peau.'],
      ['Exstrophie vésicale', 'Vessie ouverte sous l’ombilic.'],
    ],
    etiologies:
      '## Facteurs\n- Laparoschisis : mère jeune, tabac ; omphalocèle : anomalies chromosomiques, syndromes',
    principes: [
      [
        'À la naissance',
        'Protéger les viscères.',
        '- **Couvrir** les viscères avec un film plastique stérile ou un sac (laparoschisis), sans compresses humides froides ni pression\n- Enfant en **décubitus latéral droit** (éviter la torsion du mésentère)\n- **Sonde gastrique** en aspiration, **perfusion** (glucose 10 %, besoins augmentés), **réchauffement**, **antibiotiques** (ampicilline + gentamicine)\n- **Transfert urgent** en chirurgie pédiatrique',
      ],
      [
        'Chirurgie',
        'Réintégrer.',
        '- **Laparoschisis** : fermeture primaire si possible, sinon **silo** avec réduction progressive sur quelques jours ; nutrition parentérale (iléus prolongé)\n- **Omphalocèle** petite : fermeture chirurgicale ; **géante** : traitement conservateur (sulfadiazine argentique ou povidone sur le sac → épithélialisation), cure de l’éventration plus tard',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', 'Perfusion, hypoglycémie'],
      ['ampicilline', 'premiere', 'Prévention de l’infection'],
      ['gentamicine', 'premiere', 'Prévention de l’infection'],
      ['sulfadiazine-argentique', 'alternative', 'Omphalocèle géante (traitement conservateur)'],
      ['ringer-lactate', 'alternative', 'Pertes hydriques'],
    ],
    complications: [
      {
        nom: 'Hypothermie et déshydratation',
        fiche: 'hypothermie-neonatale',
        description: 'Viscères exposés.',
        traitement: '- Couverture, réchauffement, perfusion',
        clinique: '- T° < 36 °C',
        paraclinique: '',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-neonatal',
        description: 'Contamination.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre ou hypothermie',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Ischémie et nécrose intestinale',
        description: 'Torsion, compression.',
        traitement: '- Chirurgie',
        clinique: '- Anses noires',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Laparoschisis : survie > 90 % en centre équipé ; omphalocèle : pronostic lié aux malformations associées ; mortalité élevée sans prise en charge rapide',
    urgences: [],
    symptomes: [
      ['Distension abdominale', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: ['- Couvrir, réchauffer, perfuser, transfert', '- Tout cas'],
      hgr: ['- Prise en charge initiale, antibiotiques', ''],
      tert: ['- Chirurgie néonatale, nutrition parentérale', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Laparoschisis',
        type: 'commune',
        description: 'Anses libres.',
        terrain: '- Nouveau-né de mère jeune',
        fonctionnels: '',
        generaux: '',
        physiques: '- Anses épaissies à droite de l’ombilic',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Omphalocèle avec malformations',
        type: 'gravite',
        description: 'Syndromique.',
        terrain: '- Trisomie, Beckwith-Wiedemann',
        fonctionnels: '',
        generaux: '- Hypoglycémie',
        physiques: '- Sac ombilical, dysmorphie',
        paraclinique: '- Cardiopathie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Corps étrangers ingérés
  {
    ...CPED,
    slug: 'ingestion-corps-etrangers',
    nom: 'Ingestion de corps étrangers',
    resume:
      'Fréquente chez l’enfant de 6 mois à 5 ans (pièces de monnaie, piles bouton, aimants, épingles, petits jouets) et chez l’adulte (arêtes, os, bols alimentaires, personnes avec troubles psychiques) : la plupart passent spontanément ; urgences : pile bouton dans l’œsophage (brûlure en 2 h : extraction immédiate), objets pointus, aimants multiples, obstruction œsophagienne (hypersalivation, dysphagie), signes de perforation ; radiographie du cou, du thorax et de l’abdomen (face et profil) ; endoscopie d’extraction ; surveillance des selles pour les objets non dangereux ayant passé l’estomac ; prévention.',
    definition:
      'Passage d’un objet non alimentaire (ou d’un bol alimentaire obstructif) dans le tube digestif, avec risque d’impaction, de lésion ou de perforation.',
    physiopathologie:
      '## Sites d’impaction\n- **Œsophage** (sphincter supérieur, crosse aortique, cardia) : risque principal\n- Pylore, angle duodéno-jéjunal, valvule iléo-cæcale\n\n## Objets dangereux\n- **Piles bouton** : brûlure électrochimique en 2 h → perforation, fistule œso-trachéale ou aorto-œsophagienne\n- **Aimants multiples** (ou aimant + métal) : nécrose de la paroi par pincement, perforations\n- **Objets pointus** (épingles, arêtes, os) : perforation\n- Objets longs (> 5 cm chez l’enfant) ou volumineux',
    diagnostic:
      '## Clinique\n- Souvent asymptomatique (ingestion vue ou rapportée)\n- **Œsophage** : **hypersalivation**, dysphagie, refus de manger, vomissements, douleur thoracique, toux, stridor\n- **Signes de complication** : fièvre, douleur abdominale, défense, hématémèse, méléna, emphysème sous-cutané\n\n## Examens\n- **Radiographies** cou, thorax, abdomen (face et **profil**) : pile bouton (double contour) vs pièce\n- Objets non radio-opaques : endoscopie si symptômes\n- Scanner si suspicion de perforation',
    examens: [
      ['confirmation', 'radiographie-thoracique', 'Cou, thorax (pile, pièce).'],
      ['confirmation', 'abdomen-sans-preparation', 'Localisation de l’objet.'],
      ['confirmation', 'endoscopie-digestive-haute', 'Extraction.'],
      ['gravite', 'scanner-thoracique', 'Perforation.'],
    ],
    scores: [],
    differentiels: [
      ['corps-etranger-voies-aeriennes', 'Inhalation : toux, détresse respiratoire.'],
      ['corps-etrangers-orl', 'Corps étranger du nez ou de l’oreille.'],
      ['intoxications-enfant', 'Ingestion de produits toxiques.'],
      ['Ingestion de caustiques', 'Brûlures buccales, produits ménagers.'],
    ],
    etiologies:
      '## Causes\n- Jeu (enfant), défaut de surveillance, aliments (arêtes, os), troubles psychiques, détenus',
    principes: [
      [
        'Urgences endoscopiques',
        'Extraire vite.',
        '- **Pile bouton dans l’œsophage** : extraction **immédiate** (< 2 h) ; en attendant, miel ou sucralfate chez l’enfant > 1 an si ingestion < 12 h (selon les protocoles)\n- **Obstruction œsophagienne** complète (hypersalivation), objets pointus dans l’œsophage : extraction urgente\n- **Aimants multiples**, objets longs ou pointus dans l’estomac : extraction endoscopique',
      ],
      [
        'Objets non dangereux',
        'Surveiller.',
        '- Pièce de monnaie dans l’œsophage asymptomatique : radiographie de contrôle à 12–24 h, extraction si persistance\n- Objet ayant passé l’estomac : alimentation normale, surveillance des selles, radiographie si non retrouvé à 1–2 semaines ou symptômes',
      ],
      [
        'Complications et prévention',
        'Chirurgie et éducation.',
        '- Perforation, occlusion : chirurgie\n- Prévention : ranger piles, aimants, petits objets hors de portée des enfants',
      ],
    ],
    molecules: [
      ['sucralfate', 'alternative', 'Pile bouton (en attendant l’extraction)'],
      ['ceftriaxone', 'adjuvant', 'Perforation'],
      ['metronidazole', 'adjuvant', 'Perforation'],
    ],
    complications: [
      {
        nom: 'Perforation œsophagienne et médiastinite',
        description: 'Pile, objet pointu.',
        traitement: '- Chirurgie, antibiotiques',
        clinique: '- Fièvre, douleur, emphysème',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Fistule œso-trachéale ou aorto-œsophagienne',
        description: 'Pile bouton.',
        traitement: '- Chirurgie',
        clinique: '- Toux aux repas, hématémèse massive',
        paraclinique: '',
      },
      {
        nom: 'Perforation intestinale',
        fiche: 'peritonite-aigue',
        description: 'Aimants, objets pointus.',
        traitement: '- Chirurgie',
        clinique: '- Défense',
        paraclinique: '- Pneumopéritoine',
      },
    ],
    evolution:
      '## Pronostic\n- Évacuation spontanée de 80–90 % des objets ; complications graves des piles bouton et des aimants si retard',
    urgences: [],
    symptomes: [
      ['Hypersalivation', 'frequent'],
      ['Dysphagie', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Douleur thoracique', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'ESGE (gastro-entérologie) — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Repérer pile bouton, aimants, obstruction : référence immédiate', ''],
      hgr: ['- Radiographies, surveillance', ''],
      tert: ['- Endoscopie, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Pièce de monnaie de l’enfant',
        type: 'commune',
        description: 'Souvent bénigne.',
        terrain: '- Enfant de 1 à 5 ans',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Disque radio-opaque',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Pile bouton œsophagienne',
        type: 'gravite',
        description: 'Urgence absolue.',
        terrain: '- Jeune enfant',
        fonctionnels: '- Hypersalivation, refus de manger',
        generaux: '',
        physiques: '',
        paraclinique: '- Double contour',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Volet costal
  {
    ...THO,
    slug: 'volet-costal',
    nom: 'Volet costal',
    resume:
      'Fractures de plusieurs côtes consécutives en au moins deux endroits, isolant un segment de paroi thoracique qui se déplace à contresens de la respiration (respiration paradoxale), après traumatisme thoracique violent (accidents, écrasements, chutes) : douleur intense, détresse respiratoire, hypoxie, souvent contusion pulmonaire, hémothorax ou pneumothorax associés ; examen, radiographie thoracique, scanner ; oxygène, analgésie puissante (bloc intercostal ou péridural, morphine), kinésithérapie, drainage d’un épanchement, ventilation si détresse, ostéosynthèse costale dans certains cas.',
    definition:
      'Segment de paroi thoracique désolidarisé du reste du gril costal par des fractures doubles d’au moins trois côtes adjacentes, animé d’un mouvement paradoxal.',
    physiopathologie:
      '## Mécanismes\n- Traumatisme **à haute énergie** (choc direct, écrasement, décélération)\n- **Respiration paradoxale** : le volet s’enfonce à l’inspiration\n\n## Gravité\n- Liée surtout à la **contusion pulmonaire** sous-jacente (hypoxie) et à la **douleur** (hypoventilation, encombrement, pneumonie)\n- Lésions associées : **hémothorax**, **pneumothorax**, lésions cardiaques, aortiques, abdominales (foie, rate)',
    diagnostic:
      '## Clinique\n- **Douleur** thoracique intense, **dyspnée**, **polypnée**\n- **Mouvement paradoxal** d’un segment de paroi, crépitation osseuse, emphysème sous-cutané\n- Signes de gravité : SpO2 basse, cyanose, choc, détresse respiratoire\n- Recherche d’un pneumothorax (tympanisme, abolition du murmure), d’un hémothorax (matité)\n\n## Examens\n- **Radiographie thoracique**, **échographie** (épanchement, FAST), **scanner** thoracique\n- **Gaz du sang**, SpO2, NFS, groupage',
    examens: [
      ['confirmation', 'radiographie-thoracique', 'Fractures, épanchement.'],
      ['deuxieme_intention', 'scanner-thoracique', 'Contusion, lésions associées.'],
      ['premiere_intention', 'echographie-abdominale', 'FAST, épanchement pleural.'],
      ['gravite', 'gaz-du-sang', 'Hypoxie.'],
      ['gravite', 'oxymetrie-de-pouls', 'Désaturation.'],
      ['gravite', 'groupage-rai', 'Transfusion.'],
    ],
    scores: [],
    differentiels: [
      ['traumatisme-thoracique', 'Traumatisme sans volet.'],
      ['hemothorax', 'Épanchement sanguin.'],
      ['pneumothorax-spontane', 'Pneumothorax.'],
      ['Contusion myocardique', 'Troubles du rythme, troponine.'],
    ],
    etiologies: '## Causes\n- Accidents de la route, écrasements, chutes de hauteur, agressions',
    principes: [
      [
        'Oxygénation et analgésie',
        'Prioritaires.',
        '- **Oxygène**, position demi-assise\n- **Analgésie** puissante : **bloc intercostal** ou paravertébral (bupivacaïne), analgésie péridurale si disponible, **morphine**, paracétamol\n- **Kinésithérapie** respiratoire, toux assistée',
      ],
      [
        'Lésions associées',
        'Traiter.',
        '- **Drainage thoracique** d’un pneumothorax ou d’un hémothorax\n- Remplissage prudent (contusion pulmonaire), transfusion si besoin',
      ],
      [
        'Ventilation et chirurgie',
        'Si détresse.',
        '- **Ventilation non invasive** ou **intubation-ventilation** si détresse respiratoire, hypoxie sévère, épuisement\n- **Ostéosynthèse costale** : volet important, échec du sevrage ventilatoire, thoracotomie pour une autre raison',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'Hypoxie'],
      ['morphine', 'premiere', 'Douleur'],
      ['bupivacaine', 'premiere', 'Bloc intercostal ou paravertébral'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['ketamine', 'alternative', 'Analgésie'],
      ['enoxaparine', 'adjuvant', 'Thromboprophylaxie'],
    ],
    complications: [
      {
        nom: 'Insuffisance respiratoire',
        fiche: 'insuffisance-respiratoire-aigue',
        description: 'Contusion, douleur.',
        traitement: '- Ventilation',
        clinique: '- Polypnée, cyanose',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Pneumonie',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Hypoventilation, encombrement.',
        traitement: '- Antibiotiques, kinésithérapie',
        clinique: '- Fièvre, toux',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Hémothorax et pneumothorax',
        fiche: 'hemothorax',
        description: 'Lésions pleurales.',
        traitement: '- Drainage',
        clinique: '- Matité, tympanisme',
        paraclinique: '- Radiographie',
      },
    ],
    evolution: '## Pronostic\n- Mortalité de 10–20 %, liée aux lésions associées et à l’âge',
    urgences: [],
    symptomes: [
      ['Douleur thoracique', 'tres_frequent'],
      ['Dyspnée', 'tres_frequent'],
      ['Tachypnée', 'frequent'],
      ['Cyanose', 'occasionnel'],
      ['Lésions traumatiques', 'frequent'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'EAST — recommandations de pratique clinique',
      'ACS TQIP — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Oxygène, antalgie, transfert', '- Tout traumatisme thoracique avec dyspnée'],
      hgr: ['- Drainage, bloc intercostal, ventilation', ''],
      tert: ['- Réanimation, ostéosynthèse costale', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Volet costal latéral',
        type: 'commune',
        description: 'Respiration paradoxale.',
        terrain: '- Adulte, accident',
        fonctionnels: '- Douleur, dyspnée',
        generaux: '',
        physiques: '- Mouvement paradoxal',
        paraclinique: '- Fractures doubles',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Volet avec contusion pulmonaire',
        type: 'gravite',
        description: 'Hypoxie.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Cyanose',
        physiques: '',
        paraclinique: '- Opacités de contusion',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Tumeurs du médiastin
  {
    ...THO,
    slug: 'tumeurs-mediastin',
    nom: 'Tumeurs du médiastin',
    resume:
      'Masses du médiastin, classées selon leur siège : antérieur (« 4 T » : thymome, tumeurs germinales, lymphome « terrible », thyroïde plongeante), moyen (adénopathies : tuberculose très fréquente en RDC, lymphomes, métastases, sarcoïdose ; kystes bronchogéniques), postérieur (tumeurs nerveuses, neuroblastome de l’enfant) ; souvent découvertes sur une radiographie ou devant un syndrome compressif (toux, dyspnée, stridor, dysphagie, syndrome cave supérieur : œdème en pèlerine, circulation collatérale) ; scanner thoracique, marqueurs (AFP, β-hCG), biopsie ; traitement selon la cause ; syndrome cave supérieur : urgence.',
    definition:
      'Processus expansifs développés dans le médiastin (espace entre les deux poumons), bénins ou malins, primitifs ou secondaires.',
    physiopathologie:
      '## Médiastin antérieur\n- **Thymome** (myasthénie associée), **tumeurs germinales** (tératome, séminome), **lymphomes** (Hodgkin, lymphoblastique de l’enfant), **goitre plongeant**\n\n## Médiastin moyen\n- **Adénopathies** : **tuberculose**, lymphomes, métastases (poumon), sarcoïdose, histoplasmose ; kystes bronchogéniques, péricardiques\n\n## Médiastin postérieur\n- **Tumeurs nerveuses** (schwannome, neurofibrome, **neuroblastome** de l’enfant), anomalies œsophagiennes, abcès (mal de Pott)\n\n## Compression\n- Trachée (stridor), veine cave supérieure, œsophage, nerfs (récurrent, phrénique)',
    diagnostic:
      '## Clinique\n- Souvent **asymptomatique** (découverte radiologique)\n- **Toux**, **dyspnée**, **stridor**, douleur thoracique, **dysphagie**, dysphonie\n- **Syndrome cave supérieur** : œdème du visage et du cou (en pèlerine), turgescence jugulaire, circulation veineuse collatérale, céphalées\n- Signes généraux (fièvre, sueurs, amaigrissement : lymphome, tuberculose), myasthénie (thymome)\n\n## Examens\n- **Radiographie** et **scanner thoracique** injecté\n- **Alpha-fœtoprotéine**, **β-hCG** (tumeurs germinales), LDH, NFS\n- **Xpert MTB/RIF** (crachats, tubage), test VIH\n- **Biopsie** (adénopathie périphérique, transthoracique, médiastinoscopie)\n- Prudence avec l’anesthésie générale si compression trachéale',
    examens: [
      ['premiere_intention', 'radiographie-thoracique', 'Élargissement médiastinal.'],
      ['confirmation', 'scanner-thoracique', 'Siège, caractérisation.'],
      ['confirmation', 'biopsie-histologie', 'Diagnostic.'],
      ['etiologique', 'alpha-foetoproteine', 'Tumeur germinale.'],
      ['etiologique', 'beta-hcg', 'Tumeur germinale.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'ldh', 'Lymphome.'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-pulmonaire', 'Adénopathies tuberculeuses.'],
      ['lymphomes-non-hodgkiniens-adulte', 'Masse médiastinale.'],
      ['cancer-bronchopulmonaire', 'Adénopathies métastatiques.'],
      ['goitre-nodules-thyroidiens-chirurgie', 'Goitre plongeant.'],
      ['Anévrisme de l’aorte thoracique', 'Masse vasculaire.'],
    ],
    etiologies:
      '## Causes\n- Tuberculose, lymphomes, thymome, tumeurs germinales, goitre, tumeurs nerveuses, métastases',
    principes: [
      [
        'Urgences',
        'Compression.',
        '- **Syndrome cave supérieur** et compression trachéale : position assise, oxygène, **corticoïdes** (dexaméthasone) si lymphome suspecté (après biopsie si possible), diagnostic rapide, chimiothérapie ou radiothérapie urgente\n- Éviter l’anesthésie générale sans précautions (collapsus des voies aériennes)',
      ],
      [
        'Traitement selon la cause',
        'Après diagnostic.',
        '- **Tuberculose** : antituberculeux\n- **Lymphomes**, **tumeurs germinales** : chimiothérapie (très chimiosensibles)\n- **Thymome**, tumeurs nerveuses, kystes, goitre : **chirurgie** (sternotomie, thoracotomie)',
      ],
    ],
    molecules: [
      ['dexamethasone', 'alternative', 'Syndrome compressif (lymphome)'],
      ['rifampicine', 'alternative', 'Tuberculose (RHZE)'],
      ['cisplatine', 'alternative', 'Tumeurs germinales'],
      ['etoposide', 'alternative', 'Tumeurs germinales'],
      ['oxygene', 'adjuvant', 'Compression'],
    ],
    complications: [
      {
        nom: 'Syndrome cave supérieur',
        description: 'Compression veineuse.',
        traitement: '- Corticoïdes, traitement de la cause',
        clinique: '- Œdème en pèlerine',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Compression trachéale',
        description: 'Masse volumineuse.',
        traitement: '- Traitement urgent de la cause',
        clinique: '- Stridor, orthopnée',
        paraclinique: '',
      },
      {
        nom: 'Myasthénie',
        description: 'Thymome.',
        traitement: '- Thymectomie, anticholinestérasiques',
        clinique: '- Fatigabilité, ptosis',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Selon la cause : excellent pour les tumeurs bénignes et la tuberculose, bon pour les lymphomes et tumeurs germinales traités',
    urgences: [],
    symptomes: [
      ['Toux', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Douleur thoracique', 'occasionnel'],
      ['Dysphagie', 'occasionnel'],
      ['Œdème du visage', 'occasionnel'],
      ['Sueurs nocturnes', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'NCCN — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Repérer le syndrome cave, orientation', ''],
      hgr: ['- Radiographie, Xpert, biopsie ganglionnaire', ''],
      tert: ['- Scanner, chirurgie thoracique, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Adénopathies médiastinales tuberculeuses',
        type: 'commune',
        description: 'Fréquentes.',
        terrain: '- Enfant, VIH',
        fonctionnels: '- Toux',
        generaux: '- Fièvre, sueurs',
        physiques: '',
        paraclinique: '- Adénopathies, Xpert',
        etiologies: '- Tuberculose',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
      },
      {
        nom: 'Masse antérieure avec syndrome cave',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Lymphome',
        fonctionnels: '- Dyspnée, céphalées',
        generaux: '',
        physiques: '- Œdème en pèlerine',
        paraclinique: '- Masse antérieure',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Brûlures chimiques et électriques
  {
    ...BRU,
    slug: 'brulures-chimiques-electriques',
    nom: 'Brûlures chimiques et électriques',
    resume:
      'Brûlures chimiques (acides, bases : soude caustique, javel concentrée, agressions à l’acide) : lavage immédiat et prolongé à l’eau (15–30 min ou plus pour les bases), retrait des vêtements, ne pas neutraliser ; yeux : lavage abondant et avis ophtalmologique ; ingestion de caustiques : ne pas faire vomir, endoscopie. Brûlures électriques (câbles, foudre) : lésions profondes sous une peau peu atteinte (point d’entrée et de sortie), troubles du rythme (ECG), rhabdomyolyse (CPK, urines foncées, insuffisance rénale), syndrome des loges ; surveillance cardiaque, hydratation abondante, aponévrotomies, parages répétés.',
    definition:
      'Lésions tissulaires causées par des agents chimiques (acides, bases, oxydants) ou par le passage d’un courant électrique dans l’organisme.',
    physiopathologie:
      '## Chimiques\n- **Acides** : nécrose de coagulation (limite la pénétration)\n- **Bases** (soude, potasse, ciment) : nécrose de liquéfaction, pénétration profonde et prolongée → plus graves\n- Agressions à l’acide (visage, yeux) ; ingestion accidentelle (enfant) ou volontaire\n\n## Électriques\n- Le courant suit les tissus de faible résistance (nerfs, vaisseaux, muscles) → **lésions profondes** étendues, peau peu atteinte\n- **Troubles du rythme** (fibrillation ventriculaire), **rhabdomyolyse** → **insuffisance rénale**, syndrome des loges, fractures (contractions), lésions neurologiques, cataracte tardive\n- Haute tension (> 1 000 V) et foudre : très graves',
    diagnostic:
      '## Chimiques\n- Agent, concentration, durée de contact, surface, profondeur ; atteinte **oculaire** (douleur, larmoiement, opacité cornéenne)\n- Ingestion : brûlures buccales, hypersalivation, dysphagie, douleur thoracique, détresse respiratoire\n\n## Électriques\n- Type de courant et tension, **points d’entrée et de sortie**, perte de connaissance, arrêt cardiaque initial\n- Membres tendus, douloureux (syndrome des loges), urines foncées\n\n## Examens\n- **ECG** (électriques), **CPK**, **créatinine**, **ionogramme** (kaliémie), bandelette (myoglobinurie)\n- Brûlures chimiques des yeux : pH des larmes, examen ophtalmologique\n- Ingestion de caustiques : endoscopie digestive dans les 12–24 h',
    examens: [
      ['premiere_intention', 'ecg', 'Troubles du rythme (électriques).'],
      ['gravite', 'cpk', 'Rhabdomyolyse.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['gravite', 'ionogramme', 'Hyperkaliémie.'],
      ['premiere_intention', 'bandelette-urinaire', 'Myoglobinurie.'],
      ['deuxieme_intention', 'endoscopie-digestive-haute', 'Ingestion de caustiques.'],
    ],
    scores: [],
    differentiels: [
      ['brulures-adulte', 'Brûlures thermiques.'],
      ['brulures-enfant', 'Brûlures de l’enfant.'],
      ['syndrome-des-loges', 'Complication des brûlures électriques.'],
      ['intoxications-aigues-adulte', 'Ingestion de caustiques.'],
    ],
    etiologies:
      '## Causes\n- Accidents domestiques et professionnels, agressions à l’acide, câbles électriques, foudre',
    principes: [
      [
        'Brûlures chimiques',
        'Laver, laver, laver.',
        '- **Lavage à l’eau** abondante immédiat et prolongé (≥ 15–30 min, plus pour les bases), retrait des vêtements et bijoux, protection du sauveteur\n- **Ne pas neutraliser** (réaction exothermique)\n- **Yeux** : lavage continu au sérum physiologique 30 min, avis ophtalmologique urgent\n- **Ingestion** : ne pas faire vomir, rien par la bouche, endoscopie, chirurgie si perforation',
      ],
      [
        'Brûlures électriques',
        'Cœur, reins, loges.',
        '- Couper le courant avant de toucher la victime ; **RCP** si arrêt\n- **Monitorage ECG** 24 h si anomalie ou perte de connaissance\n- **Hydratation abondante** (diurèse 1–1,5 mL/kg/h si myoglobinurie), correction de la kaliémie\n- **Aponévrotomies** si syndrome des loges, **parages** répétés, amputation si nécrose',
      ],
      [
        'Soins communs',
        'Comme les brûlures thermiques.',
        '- Antalgie, **antitétanique**, pansements (sulfadiazine argentique), nutrition, rééducation',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Lavage oculaire'],
      ['ringer-lactate', 'premiere', 'Hydratation (rhabdomyolyse)'],
      ['morphine', 'premiere', 'Douleur'],
      ['sulfadiazine-argentique', 'premiere', 'Pansements'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Prévention du tétanos'],
      ['gluconate-de-calcium', 'alternative', 'Brûlures à l’acide fluorhydrique, hyperkaliémie'],
    ],
    complications: [
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Rhabdomyolyse.',
        traitement: '- Hydratation, dialyse',
        clinique: '- Urines foncées, oligurie',
        paraclinique: '- CPK, créatinine',
      },
      {
        nom: 'Troubles du rythme',
        description: 'Courant électrique.',
        traitement: '- Défibrillation, monitorage',
        clinique: '- Palpitations, arrêt',
        paraclinique: '- ECG',
      },
      {
        nom: 'Cécité',
        description: 'Brûlure chimique oculaire.',
        traitement: '- Lavage, ophtalmologie',
        clinique: '- Baisse de vision',
        paraclinique: '',
      },
      {
        nom: 'Sténose œsophagienne',
        description: 'Ingestion de caustiques.',
        traitement: '- Dilatations, chirurgie',
        clinique: '- Dysphagie',
        paraclinique: '- Endoscopie',
      },
    ],
    evolution:
      '## Pronostic\n- Lié à la profondeur et à l’étendue ; brûlures électriques à haute tension : amputations fréquentes',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Brûlure cutanée', 'tres_frequent'],
      ['Douleur oculaire', 'occasionnel'],
      ['Urines foncées', 'occasionnel'],
      ['Palpitations', 'occasionnel'],
      ['Dysphagie', 'occasionnel'],
    ],
    sources: ['Sabiston Textbook of Surgery', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Lavage abondant, couper le courant, antitétanique, référence',
        '- Brûlure électrique, oculaire, ingestion',
      ],
      hgr: ['- ECG, CPK, hydratation, aponévrotomie', ''],
      tert: ['- Centre des brûlés, ophtalmologie, endoscopie', ''],
    },
    alertes: { 'hyperkaliemie-menacante': 'Brûlure électrique avec rhabdomyolyse et hyperkaliémie' },
    formes: [
      {
        nom: 'Brûlure chimique cutanée',
        type: 'commune',
        description: 'Acide ou base.',
        terrain: '- Accident, agression',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Brûlure',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Brûlure électrique à haute tension',
        type: 'gravite',
        description: 'Lésions profondes.',
        terrain: '- Câbles électriques, foudre',
        fonctionnels: '',
        generaux: '- Perte de connaissance',
        physiques: '- Points d’entrée et de sortie, membres tendus',
        paraclinique: '- CPK élevées',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Séquelles de brûlures
  {
    ...BRU,
    slug: 'sequelles-brulures-retractions',
    nom: 'Séquelles de brûlures et rétractions',
    resume:
      'Séquelles fréquentes et invalidantes des brûlures (surtout chez l’enfant, brûlures non greffées ou mal suivies) : cicatrices hypertrophiques et chéloïdes, brides et rétractions limitant les articulations (cou, aisselle, coude, main, genou), troubles de la croissance, ectropion des paupières, microstomie, ulcérations chroniques avec risque de cancer (ulcère de Marjolin), retentissement psychosocial ; prévention par la greffe précoce, le positionnement anti-rétraction, les attelles, la compression et la kinésithérapie ; traitement chirurgical : plasties en Z, greffes de peau, lambeaux, puis rééducation.',
    definition:
      'Conséquences tardives des brûlures : cicatrices pathologiques, rétractions et brides cicatricielles, déformations, troubles fonctionnels et esthétiques.',
    physiopathologie:
      '## Mécanismes\n- Cicatrisation dirigée lente des brûlures profondes non greffées → **contraction** des cicatrices, **brides**\n- **Cicatrices hypertrophiques** et **chéloïdes** (peau noire, terrain favorisant)\n- Chez l’enfant : la cicatrice ne grandit pas avec l’enfant → **déformations** progressives\n\n## Complications tardives\n- **Ulcère de Marjolin** (carcinome épidermoïde sur cicatrice ancienne instable)\n- Ectropion (lésions cornéennes), microstomie (alimentation), syndactylies',
    diagnostic:
      '## Évaluation\n- Siège, étendue, **amplitude articulaire**, fonction (main, marche, alimentation, vision)\n- Type de cicatrice : hypertrophique, chéloïde, instable, ulcérée\n- Croissance (enfant), retentissement psychologique, scolaire et social\n- **Plaie chronique** sur cicatrice ancienne : **biopsie** (Marjolin)\n\n## Examens\n- Radiographies (déformations osseuses, luxations), biopsie si ulcération',
    examens: [
      ['deuxieme_intention', 'radiographie-osseuse', 'Déformations, luxations.'],
      ['confirmation', 'biopsie-histologie', 'Ulcère suspect (Marjolin).'],
      ['premiere_intention', 'nfs', 'Bilan préopératoire, anémie.'],
    ],
    scores: [],
    differentiels: [
      ['cheloides', 'Chéloïdes d’autre origine.'],
      ['ulceres-chroniques-de-jambe', 'Ulcère chronique.'],
      ['Rétractions d’origine neurologique', 'Paralysie, spasticité.'],
    ],
    etiologies:
      '## Facteurs\n- Brûlures profondes non greffées, absence d’attelles et de rééducation, infection, peau noire (chéloïdes)',
    principes: [
      [
        'Prévention',
        'Dès la phase aiguë.',
        '- **Excision-greffe précoce** des brûlures profondes\n- **Positionnement anti-rétraction** (cou en extension, aisselle en abduction, main en position intrinsèque plus), **attelles**\n- **Kinésithérapie** quotidienne, **vêtements compressifs** 12–18 mois, massages, hydratation de la peau',
      ],
      [
        'Traitement des cicatrices',
        'Médical.',
        '- Cicatrices hypertrophiques et chéloïdes : compression, gel de silicone, **injections de triamcinolone**',
      ],
      [
        'Chirurgie',
        'Libérer et couvrir.',
        '- **Plasties en Z**, libération des brides et **greffes de peau** (mince ou totale), **lambeaux**\n- Ectropion, microstomie, syndactylies : chirurgie spécifique\n- **Ulcère de Marjolin** : exérèse large\n- **Rééducation** et attelles après chirurgie ; soutien psychologique, réinsertion scolaire',
      ],
    ],
    molecules: [
      ['triamcinolone', 'premiere', 'Injections intralésionnelles'],
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['paracetamol', 'adjuvant', 'Douleur'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie'],
    ],
    complications: [
      {
        nom: 'Ulcère de Marjolin',
        description: 'Carcinome sur cicatrice.',
        traitement: '- Exérèse large',
        clinique: '- Ulcère ancien qui change',
        paraclinique: '- Biopsie',
      },
      {
        nom: 'Handicap fonctionnel',
        description: 'Rétractions articulaires.',
        traitement: '- Chirurgie, rééducation',
        clinique: '- Limitation des mouvements',
        paraclinique: '',
      },
      {
        nom: 'Retentissement psychosocial',
        fiche: 'depression',
        description: 'Défigurement, stigmatisation.',
        traitement: '- Soutien psychologique',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration fonctionnelle importante après chirurgie et rééducation ; récidives possibles chez l’enfant en croissance',
    urgences: [],
    symptomes: [
      ['Rétraction cicatricielle', 'tres_frequent'],
      ['Impotence fonctionnelle', 'frequent'],
      ['Déformation d’un membre', 'frequent'],
      ['Ulcère cutané', 'occasionnel'],
    ],
    sources: ['Sabiston Textbook of Surgery', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Positionnement, kinésithérapie, orientation', ''],
      hgr: ['- Plasties en Z, greffes', ''],
      tert: ['- Chirurgie plastique, lambeaux', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Bride rétractile articulaire',
        type: 'commune',
        description: 'Cou, aisselle, coude, main.',
        terrain: '- Enfant, brûlure non greffée',
        fonctionnels: '- Limitation des mouvements',
        generaux: '',
        physiques: '- Bride cicatricielle',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Ulcère de Marjolin',
        type: 'gravite',
        description: 'Cancer sur cicatrice.',
        terrain: '- Cicatrice ancienne',
        fonctionnels: '',
        generaux: '',
        physiques: '- Ulcère bourgeonnant',
        paraclinique: '- Carcinome épidermoïde',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
