'use strict';

/**
 * Lot 43 (phase 2, gastro-entérologie pédiatrique) — cholestase du nourrisson, hémorragie digestive
 * de l'enfant, maladie cœliaque, douleurs abdominales récurrentes, hépatosplénomégalie de l'enfant,
 * ascaridiose compliquée. Rédigé par IA (OMS, Nelson, Pocket book, Sabiston) : à valider.
 */

const GASTROPED = { departement: 'pediatrie', specialite: 'Gastro-entérologie pédiatrique' };

module.exports = [
  // =================================================================== Cholestase du nourrisson
  {
    ...GASTROPED,
    slug: 'cholestase-nourrisson-atresie-voies-biliaires',
    nom: 'Cholestase du nourrisson (atrésie des voies biliaires)',
    resume:
      'Ictère prolongé au-delà de 14 jours (21 jours chez le prématuré) avec selles décolorées et urines foncées = cholestase jusqu’à preuve du contraire ; l’atrésie des voies biliaires est la cause principale et une urgence diagnostique : l’intervention de Kasai doit être faite avant 45–60 jours de vie ; bilirubine conjuguée, échographie, vitamine K IM immédiate, orientation rapide vers la chirurgie pédiatrique.',
    definition:
      'Diminution ou arrêt du flux biliaire chez le nourrisson, définie par une bilirubine conjuguée > 17 µmol/L (1 mg/dL) ou > 20 % de la bilirubine totale ; l’atrésie des voies biliaires est une oblitération progressive des voies biliaires extra-hépatiques.',
    physiopathologie:
      '## Causes\n- **Atrésie des voies biliaires** (≈ 1/10 000 naissances) : cirrhose biliaire et décès avant 2 ans sans chirurgie\n- Infections : **syphilis congénitale**, CMV, toxoplasmose, rubéole, sepsis, infection urinaire\n- Kyste du cholédoque, causes métaboliques (galactosémie, hypothyroïdie), génétiques (syndrome d’Alagille, déficit en alpha-1-antitrypsine), nutrition parentérale\n\n## Conséquences\n- Malabsorption des graisses et des **vitamines liposolubles** (A, D, E, **K** : hémorragies)',
    diagnostic:
      '## Clinique\n- **Ictère persistant après 14 jours** de vie chez un nourrisson en bon état apparent\n- **Selles décolorées** (blanc mastic, jaune pâle) : utiliser la **carte colorimétrique des selles**\n- **Urines foncées** (normalement incolores chez le nourrisson)\n- Hépatomégalie ferme, splénomégalie tardive, hémorragies (vitamine K), retard pondéral\n\n## Examens\n- **Bilirubine totale et conjuguée**, transaminases, gamma-GT, **TP/INR**, albumine, glycémie\n- **Échographie abdominale** à jeun (vésicule absente ou atrophique, signe de la corde triangulaire, kyste du cholédoque)\n- Recherche d’infection : sérologie syphilis, ECBU, CMV ; TSH\n- Scintigraphie, biopsie hépatique, cholangiographie peropératoire en centre spécialisé',
    examens: [
      ['confirmation', 'bilirubine-neonatale', 'Bilirubine conjuguée élevée.'],
      ['premiere_intention', 'bilan-hepatique', 'Transaminases, gamma-GT, albumine.'],
      ['gravite', 'hemostase', 'TP/INR : carence en vitamine K.'],
      ['premiere_intention', 'echographie-abdominale', 'Vésicule, kyste du cholédoque.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis congénitale.'],
      ['etiologique', 'ecbu', 'Infection urinaire.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'pcr-cmv', 'CMV congénital.'],
    ],
    scores: [],
    differentiels: [
      ['ictere-neonatal', 'Ictère à bilirubine libre (physiologique, allaitement) : selles colorées.'],
      ['syphilis-congenitale', 'Cause infectieuse de cholestase.'],
      ['cmv-congenital', 'Hépatite néonatale, microcéphalie.'],
      ['Kyste du cholédoque', 'Masse, dilatation à l’échographie.'],
      ['hepatites-virales-enfant', 'Hépatite aiguë de l’enfant plus grand.'],
    ],
    etiologies:
      '## Causes\n- Atrésie des voies biliaires, infections congénitales, kyste du cholédoque, maladies métaboliques et génétiques',
    principes: [
      [
        'Urgence diagnostique',
        'Ne pas laisser passer l’atrésie.',
        '- Tout ictère au-delà de 14 jours : regarder les **selles et les urines**, doser la bilirubine conjuguée\n- **Vitamine K1** 1 mg IM (ou IV) immédiatement, à répéter si TP bas\n- **Orientation rapide** vers la chirurgie pédiatrique : **intervention de Kasai** (hépato-porto-entérostomie) idéalement **avant 45–60 jours**',
      ],
      [
        'Traitement de soutien',
        'Prévenir les carences.',
        '- **Vitamines liposolubles** : A, D, E, K\n- Apports énergétiques augmentés (lait enrichi en triglycérides à chaîne moyenne si disponible), poursuite de l’allaitement\n- **Acide ursodésoxycholique** 10–20 mg/kg/j après Kasai ou dans certaines cholestases (avis spécialisé)',
      ],
      [
        'Causes traitables',
        'Traiter.',
        '- Syphilis congénitale : pénicilline ; infection urinaire, sepsis : antibiotiques ; hypothyroïdie : lévothyroxine',
      ],
    ],
    molecules: [
      ['vitamine-k1-phytomenadione', 'premiere', 'Carence en vitamine K'],
      ['acide-ursodesoxycholique', 'adjuvant', 'Après Kasai (avis spécialisé)'],
      ['vitamine-a-retinol', 'adjuvant', 'Supplémentation'],
      ['cholecalciferol-vitamine-d3', 'adjuvant', 'Supplémentation'],
      ['tocopherol-vitamine-e', 'adjuvant', 'Supplémentation'],
    ],
    complications: [
      {
        nom: 'Hémorragies par carence en vitamine K',
        fiche: 'maladie-hemorragique-du-nouveau-ne',
        description: 'Malabsorption.',
        traitement: '- Vitamine K, plasma',
        clinique: '- Saignements, hémorragie intracrânienne',
        paraclinique: '- TP bas',
      },
      {
        nom: 'Cirrhose biliaire',
        fiche: 'cirrhose-hepatique',
        description: 'Atrésie non opérée.',
        traitement: '- Transplantation (rarement accessible)',
        clinique: '- Ascite, hypertension portale',
        paraclinique: '',
      },
      {
        nom: 'Retard de croissance',
        fiche: 'retard-staturo-ponderal',
        description: 'Malabsorption.',
        traitement: '- Nutrition enrichie',
        clinique: '- Cassure pondérale',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Atrésie : décès avant 2 ans sans chirurgie ; succès de l’intervention de Kasai bien meilleur si réalisée avant 60 jours',
    urgences: [],
    symptomes: [
      ['Ictère', 'tres_frequent'],
      ['Selles décolorées', 'tres_frequent'],
      ['Urines foncées', 'tres_frequent'],
      ['Hépatomégalie', 'frequent'],
      ['Retard de croissance', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Ictère > 14 jours : couleur des selles et des urines, vitamine K, orientation',
        '- Selles décolorées',
      ],
      hgr: ['- Bilirubine conjuguée, échographie, sérologies', '- Chirurgie pédiatrique'],
      tert: ['- Intervention de Kasai', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Atrésie des voies biliaires',
        type: 'commune',
        description: 'Cause principale.',
        terrain: '- Nourrisson de 2 à 8 semaines',
        fonctionnels: '- Selles décolorées, urines foncées',
        generaux: '- Bon état apparent',
        physiques: '- Ictère, hépatomégalie ferme',
        paraclinique: '- Bilirubine conjuguée, vésicule atrophique',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Cholestase infectieuse',
        type: 'etiologique',
        description: 'Syphilis, CMV, sepsis.',
        terrain: '- Nouveau-né',
        fonctionnels: '',
        generaux: '- Fièvre, mauvaise prise de poids',
        physiques: '- Hépatosplénomégalie, lésions cutanées',
        paraclinique: '- Sérologies',
        etiologies: '- Syphilis, CMV, infection urinaire',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Hémorragie digestive enfant
  {
    ...GASTROPED,
    slug: 'hemorragie-digestive-enfant',
    nom: 'Hémorragie digestive de l’enfant',
    resume:
      'Saignement digestif de l’enfant : haut (hématémèse, méléna : varices œsophagiennes de la schistosomiase ou de la cirrhose, ulcère, gastrite aux AINS) ou bas (rectorragies : fissure anale, polype juvénile, dysenterie, invagination, diverticule de Meckel) ; évaluer le retentissement (choc), réanimer (remplissage, transfusion), vitamine K chez le nourrisson, IPP, octréotide si varices ; éliminer le sang dégluti.',
    definition:
      'Perte de sang provenant du tube digestif, extériorisée par la bouche (hématémèse) ou l’anus (méléna, rectorragies), chez l’enfant.',
    physiopathologie:
      '## Hémorragie haute\n- **Varices œsophagiennes** : schistosomiase hépatosplénique, thrombose porte (cathétérisme ombilical néonatal), cirrhose\n- **Gastrite et ulcère** : AINS, aspirine, stress, Helicobacter pylori ; syndrome de Mallory-Weiss (vomissements)\n- Maladie hémorragique du nouveau-né\n\n## Hémorragie basse\n- **Fissure anale** (constipation), **polype juvénile** (rectorragies indolores de 2 à 6 ans)\n- **Dysenterie** (Shigella, amibiase), **invagination** (selles « gelée de groseille »), **diverticule de Meckel** (rectorragie massive indolore), entérocolite, APLV chez le nourrisson\n\n## Faux saignements\n- Sang dégluti (épistaxis, crevasses du mamelon), aliments et médicaments colorants (betterave, fer, bismuth)',
    diagnostic:
      '## Évaluation\n- **Retentissement** : FC, TA, TRC, pâleur, conscience ; quantité\n- Origine haute ou basse, aspect du sang\n- Contexte : âge, AINS, hépatosplénomégalie, schistosomiase, douleurs abdominales, constipation, diarrhée\n\n## Examens\n- **NFS**, **groupe-RAI**, hémostase, bilan hépatique, urée\n- **Endoscopie digestive haute** après stabilisation (varices, ulcère)\n- Échographie abdominale (invagination, hypertension portale), examen parasitologique des selles\n- Coloscopie (polypes), scintigraphie (Meckel) en centre spécialisé',
    examens: [
      ['gravite', 'nfs', 'Anémie.'],
      ['gravite', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'hemostase', 'Troubles de coagulation.'],
      ['confirmation', 'endoscopie-digestive-haute', 'Varices, ulcère.'],
      ['premiere_intention', 'echographie-abdominale', 'Hypertension portale, invagination.'],
      ['etiologique', 'examen-parasitologique-selles', 'Schistosomiase, amibiase.'],
      ['deuxieme_intention', 'coloscopie', 'Polypes.'],
      ['etiologique', 'bilan-hepatique', 'Hépatopathie.'],
    ],
    scores: [],
    differentiels: [
      ['Sang dégluti', 'Épistaxis, crevasses du mamelon : test d’Apt chez le nouveau-né.'],
      ['invagination-intestinale-aigue', 'Nourrisson, crises douloureuses, selles sanglantes.'],
      ['dysenterie-enfant', 'Diarrhée glairo-sanglante fébrile.'],
      ['maladie-hemorragique-du-nouveau-ne', 'Nouveau-né sans vitamine K.'],
      ['Diverticule de Meckel', 'Rectorragie massive indolore.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Varices (schistosomiase), gastrite aux AINS, fissure anale, polype juvénile, dysenterie, invagination',
    principes: [
      [
        'Réanimation',
        'Stabiliser.',
        '- Position latérale si hématémèse, **oxygène**, 2 voies veineuses\n- **Remplissage** cristalloïdes 10–20 mL/kg puis **transfusion** de sang 10–20 mL/kg si choc ou Hb < 7 g/dL (cible 7–9 g/dL)\n- **Vitamine K1** chez le nourrisson ou en cas de TP bas',
      ],
      [
        'Hémorragie haute',
        'Traiter la cause.',
        '- **IPP** IV (oméprazole 1 mg/kg/j, ou ésoméprazole) ; arrêt des AINS\n- **Varices** : **octréotide** 1 µg/kg IV puis 1–2 µg/kg/h, antibioprophylaxie (ceftriaxone) en cas de cirrhose, endoscopie (ligature) en centre spécialisé ; prévention secondaire par **propranolol** et traitement de la schistosomiase (praziquantel)',
      ],
      [
        'Hémorragie basse',
        'Selon la cause.',
        '- Fissure : laxatifs, soins locaux ; dysenterie : antibiotique (ciprofloxacine)\n- Invagination : réduction ou chirurgie ; Meckel, polype : chirurgie ou endoscopie',
      ],
    ],
    molecules: [
      ['omeprazole', 'premiere', 'Hémorragie haute'],
      ['esomeprazole', 'alternative', 'Hémorragie haute IV'],
      ['octreotide', 'premiere', 'Varices œsophagiennes'],
      ['vitamine-k1-phytomenadione', 'premiere', 'Nourrisson, TP bas'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage'],
      ['propranolol', 'adjuvant', 'Prévention des récidives de varices'],
      ['praziquantel', 'adjuvant', 'Schistosomiase'],
      ['ceftriaxone', 'adjuvant', 'Antibioprophylaxie (cirrhose)'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-enfant',
        description: 'Hémorragie abondante.',
        traitement: '- Remplissage, transfusion',
        clinique: '- Tachycardie, TRC allongé',
        paraclinique: '- Hb',
      },
      {
        nom: 'Anémie',
        fiche: 'anemie-enfant',
        description: 'Saignements répétés.',
        traitement: '- Fer, transfusion',
        clinique: '- Pâleur',
        paraclinique: '- NFS',
      },
    ],
    evolution:
      '## Pronostic\n- Bon dans la majorité des causes basses ; récidives fréquentes des varices sans prévention',
    urgences: [],
    symptomes: [
      ['Hématémèse', 'frequent'],
      ['Méléna', 'frequent'],
      ['Rectorragies', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
      ['Splénomégalie', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'ESGE (gastro-entérologie) — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Évaluer le retentissement, remplissage, transfert', '- Hématémèse, méléna, choc'],
      hgr: ['- Transfusion, IPP, octréotide, chirurgie', '- Endoscopie'],
      tert: ['- Endoscopie pédiatrique, ligature', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Rectorragies de l’enfant',
        type: 'commune',
        description: 'Hémorragie basse.',
        terrain: '- Enfant de 1 à 6 ans',
        fonctionnels: '- Sang rouge sur les selles',
        generaux: '- Bon état général',
        physiques: '- Fissure, polype',
        paraclinique: '',
        etiologies: '- Fissure, polype juvénile',
        syndromes: [],
      },
      {
        nom: 'Rupture de varices œsophagiennes',
        type: 'gravite',
        description: 'Hémorragie haute massive.',
        terrain: '- Schistosomiase, cirrhose',
        fonctionnels: '- Hématémèse abondante',
        generaux: '- Choc',
        physiques: '- Splénomégalie',
        paraclinique: '- Varices à l’endoscopie',
        etiologies: '- Hypertension portale',
        syndromes: ['syndrome-d-hypertension-portale', 'syndrome-d-hemorragie-interne'],
      },
    ],
  },

  // =================================================================== Maladie cœliaque
  {
    ...GASTROPED,
    slug: 'maladie-coeliaque',
    nom: 'Maladie cœliaque',
    resume:
      'Entéropathie auto-immune déclenchée par le gluten (blé, orge, seigle) chez les sujets prédisposés ; rare mais sous-diagnostiquée en Afrique centrale, où le blé est de plus en plus consommé : diarrhée chronique, ballonnement, retard de croissance, anémie ferriprive résistante au fer ; anticorps anti-transglutaminase IgA (sous gluten) et biopsie duodénale ; régime sans gluten à vie.',
    definition:
      'Maladie auto-immune de l’intestin grêle induite par l’ingestion de gluten chez des sujets génétiquement prédisposés (HLA-DQ2/DQ8), entraînant une atrophie villositaire et une malabsorption.',
    physiopathologie:
      '## Mécanismes\n- Réaction immunitaire contre la gliadine → inflammation et **atrophie des villosités** du grêle proximal → malabsorption (fer, folates, calcium, vitamines)\n\n## Terrain\n- Introduction du gluten (pain, pâtes, beignets de farine de blé), antécédents familiaux, diabète de type 1, trisomie 21, déficit en IgA',
    diagnostic:
      '## Clinique\n- Forme typique (6 mois–2 ans, après l’introduction du gluten) : **diarrhée chronique**, selles grasses, **ballonnement**, anorexie, irritabilité, **cassure de la courbe de poids**, fonte musculaire\n- Formes atypiques (enfant plus grand) : petite taille, **anémie ferriprive réfractaire**, retard pubertaire, douleurs abdominales, constipation, hypoplasie de l’émail, ostéopénie\n\n## Examens\n- **Anticorps anti-transglutaminase IgA** + IgA totales, **sous régime contenant du gluten**\n- **Biopsies duodénales** (atrophie villositaire) en centre spécialisé\n- NFS, ferritine, folates, albumine, calcémie\n- Éliminer d’abord les causes fréquentes de diarrhée chronique : parasitoses, VIH, malnutrition',
    examens: [
      ['confirmation', 'anticorps-anti-transglutaminase', 'Sous gluten, avec IgA totales.'],
      ['confirmation', 'biopsie-histologie', 'Atrophie villositaire duodénale.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'ferritine', 'Carence martiale.'],
      ['premiere_intention', 'vitamine-b12-folates', 'Carence en folates.'],
      ['etiologique', 'examen-parasitologique-selles', 'Diagnostic différentiel.'],
      ['etiologique', 'tdr-vih', 'Diagnostic différentiel.'],
      ['premiere_intention', 'anthropometrie', 'Croissance.'],
    ],
    scores: [],
    differentiels: [
      ['diarrhee-persistante-enfant', 'Diarrhée post-infectieuse.'],
      ['parasitoses-intestinales-enfant', 'Giardiase : examen des selles.'],
      ['infection-vih-enfant', 'Diarrhée chronique, cassure pondérale.'],
      ['allergie-proteines-lait-vache', 'Nourrisson, lait.'],
      ['malnutrition-chronique', 'Retard statural d’origine carentielle.'],
    ],
    etiologies: '## Facteurs\n- Gluten, prédisposition génétique, maladies auto-immunes associées',
    principes: [
      [
        'Régime sans gluten',
        'Traitement unique.',
        '- **Suppression à vie** du blé, de l’orge et du seigle (pain, pâtes, biscuits, beignets, sauces épaissies)\n- Aliments autorisés : **manioc**, **maïs**, riz, sorgho, mil, banane plantain, patate douce, haricots, viande, poisson, œufs\n- Éducation de la famille et de l’école ; accompagnement diététique',
      ],
      [
        'Carences',
        'Corriger.',
        '- Fer, acide folique, vitamine D et calcium selon le bilan ; renutrition si malnutrition',
      ],
      [
        'Suivi',
        'Vérifier l’efficacité.',
        '- Croissance, disparition des symptômes, contrôle des anticorps à 6–12 mois',
      ],
    ],
    molecules: [
      ['fumarate-ferreux-fer', 'adjuvant', 'Carence martiale'],
      ['acide-folique', 'adjuvant', 'Carence en folates'],
      ['cholecalciferol-vitamine-d3', 'adjuvant', 'Carence en vitamine D'],
    ],
    complications: [
      {
        nom: 'Retard de croissance',
        fiche: 'retard-staturo-ponderal',
        description: 'Malabsorption.',
        traitement: '- Régime sans gluten',
        clinique: '- Petite taille',
        paraclinique: '- Anthropométrie',
      },
      {
        nom: 'Anémie ferriprive',
        fiche: 'anemie-ferriprive',
        description: 'Malabsorption du fer.',
        traitement: '- Fer, régime',
        clinique: '- Pâleur',
        paraclinique: '- Ferritine',
      },
      {
        nom: 'Ostéopénie',
        description: 'Malabsorption du calcium.',
        traitement: '- Calcium, vitamine D',
        clinique: '- Fractures',
        paraclinique: '- Densitométrie',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent sous régime strict ; risque de lymphome intestinal à long terme en cas de non-observance',
    urgences: [],
    symptomes: [
      ['Diarrhée', 'tres_frequent'],
      ['Distension abdominale', 'frequent'],
      ['Retard de croissance', 'tres_frequent'],
      ['Pâleur', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Perte de poids', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'ACG — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Diarrhée chronique : éliminer les causes fréquentes, orientation',
        '- Retard de croissance inexpliqué',
      ],
      hgr: ['- Bilan, sérologie si disponible', '- Biopsie'],
      tert: ['- Gastro-entérologie pédiatrique, biopsies', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme typique du nourrisson',
        type: 'commune',
        description: 'Après introduction du gluten.',
        terrain: '- Nourrisson de 6 mois à 2 ans',
        fonctionnels: '- Diarrhée, ballonnement, irritabilité',
        generaux: '- Cassure pondérale',
        physiques: '- Gros ventre, fesses plates',
        paraclinique: '- Anticorps positifs',
        etiologies: '- Gluten',
        syndromes: [],
      },
      {
        nom: 'Forme pauci-symptomatique',
        type: 'evolutive',
        description: 'Enfant plus grand.',
        terrain: '- Enfant, adolescent',
        fonctionnels: '- Douleurs abdominales',
        generaux: '- Petite taille',
        physiques: '- Pâleur',
        paraclinique: '- Anémie ferriprive réfractaire',
        etiologies: '',
        syndromes: ['syndrome-anemique'],
      },
    ],
  },

  // =================================================================== Douleurs abdominales récurrentes
  {
    ...GASTROPED,
    slug: 'douleurs-abdominales-recurrentes-enfant',
    nom: 'Douleurs abdominales récurrentes de l’enfant',
    resume:
      'Douleurs abdominales répétées (au moins 2 épisodes par mois depuis 2 mois) chez l’enfant d’âge scolaire, le plus souvent fonctionnelles (péri-ombilicales, sans retentissement) ; rechercher les signes d’alarme et les causes fréquentes en RDC (parasitoses, constipation, infection urinaire, gastrite à H. pylori, drépanocytose, schistosomiase) ; rassurer, traiter la constipation, prise en charge du stress.',
    definition:
      'Douleurs abdominales répétées ou persistantes depuis au moins 2 mois chez l’enfant de plus de 4 ans, d’origine fonctionnelle (troubles de l’interaction intestin-cerveau) dans la majorité des cas.',
    physiopathologie:
      '## Douleurs fonctionnelles\n- Hypersensibilité viscérale, troubles de la motricité, stress (école, famille, violences)\n- Formes : douleur abdominale fonctionnelle, syndrome de l’intestin irritable, dyspepsie fonctionnelle, migraine abdominale\n\n## Causes organiques à rechercher\n- **Constipation**, **parasitoses** (ascaris, giardia, amibes), **schistosomiase**, infection urinaire, **gastrite/H. pylori**, drépanocytose (crises), lithiase, intolérance au lactose, maladie cœliaque, tuberculose abdominale',
    diagnostic:
      '## Clinique\n- Douleur **péri-ombilicale**, sans horaire, sans réveil nocturne, croissance normale = profil fonctionnel\n- Retentissement scolaire, contexte psychosocial\n\n## Signes d’alarme (cause organique)\n- Douleur **excentrée** (flanc, hypochondre droit), **réveil nocturne**, vomissements, **diarrhée sanglante**, fièvre, **perte de poids**, cassure de la croissance, ictère, hépatosplénomégalie, troubles urinaires, âge < 4 ans, antécédents familiaux de maladie inflammatoire\n\n## Examens (orientés)\n- NFS, CRP, bandelette urinaire, **examen parasitologique des selles**, recherche d’hématurie (schistosomiase)\n- Échographie abdominale si signe d’alarme ; électrophorèse de l’hémoglobine si contexte',
    examens: [
      ['premiere_intention', 'examen-parasitologique-selles', 'Parasitoses.'],
      ['premiere_intention', 'bandelette-urinaire', 'Infection urinaire, hématurie.'],
      ['premiere_intention', 'nfs', 'Anémie, éosinophilie.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['deuxieme_intention', 'echographie-abdominale', 'Signes d’alarme.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['premiere_intention', 'anthropometrie', 'Croissance.'],
    ],
    scores: [],
    differentiels: [
      ['constipation-enfant', 'Selles rares et dures.'],
      ['parasitoses-intestinales-enfant', 'Examen des selles.'],
      ['infection-urinaire-enfant', 'Bandelette positive.'],
      ['infection-helicobacter-pylori', 'Épigastralgies, ulcère.'],
      ['crise-vaso-occlusive-enfant-drepanocytaire', 'Enfant drépanocytaire.'],
      ['schistosomiase-enfant', 'Hématurie, zone d’endémie.'],
    ],
    etiologies:
      '## Causes\n- Fonctionnelles (majorité), constipation, parasitoses, infections urinaires, gastrite, drépanocytose',
    principes: [
      [
        'Douleur fonctionnelle',
        'Rassurer et expliquer.',
        '- Explication (douleur réelle, sans gravité), reprise de la scolarité, recherche et prise en charge du stress (école, violences, deuil)\n- Alimentation régulière, fibres, eau\n- Antalgiques simples ponctuels (paracétamol) ; antispasmodiques (phloroglucinol) de courte durée',
      ],
      [
        'Causes organiques',
        'Traiter.',
        '- **Albendazole** 400 mg en prise unique (> 2 ans) en zone d’endémie ; praziquantel si schistosomiase\n- Traitement de la constipation, de l’infection urinaire, éradication d’H. pylori',
      ],
      [
        'Suivi',
        'Surveiller.',
        '- Réévaluation régulière, croissance ; nouveaux signes d’alarme : bilan complémentaire',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['phloroglucinol', 'alternative', 'Douleur spasmodique'],
      ['albendazole', 'premiere', 'Parasitoses'],
      ['macrogol', 'alternative', 'Constipation'],
      ['praziquantel', 'adjuvant', 'Schistosomiase'],
    ],
    complications: [
      {
        nom: 'Absentéisme scolaire',
        description: 'Retentissement.',
        traitement: '- Soutien psychologique, lien avec l’école',
        clinique: '- Absences répétées',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon ; disparition fréquente, parfois persistance à l’âge adulte (intestin irritable)',
    urgences: [],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'occasionnel'],
      ['Anorexie', 'occasionnel'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Examen, signes d’alarme, déparasitage, conseils', '- Signes d’alarme'],
      hgr: ['- Bilan orienté, échographie', ''],
      tert: ['- Gastro-entérologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Douleur abdominale fonctionnelle',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Enfant de 4 à 14 ans',
        fonctionnels: '- Douleur péri-ombilicale',
        generaux: '- Croissance normale',
        physiques: '- Examen normal',
        paraclinique: '- Bilan normal',
        etiologies: '- Stress, hypersensibilité viscérale',
        syndromes: [],
      },
      {
        nom: 'Douleur avec signes d’alarme',
        type: 'gravite',
        description: 'Cause organique probable.',
        terrain: '',
        fonctionnels: '- Réveil nocturne, vomissements',
        generaux: '- Fièvre, perte de poids',
        physiques: '- Hépatosplénomégalie, masse',
        paraclinique: '- Bilan anormal',
        etiologies: '- Organique',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hépatosplénomégalie
  {
    ...GASTROPED,
    slug: 'hepatosplenomegalie-enfant',
    nom: 'Hépatosplénomégalie de l’enfant',
    resume:
      'Augmentation du volume du foie et de la rate chez l’enfant, très fréquente en RDC : paludisme (et splénomégalie palustre hyperréactive), drépanocytose, schistosomiase hépatosplénique, infections (typhoïde, tuberculose, VIH, leishmaniose), hémopathies (leucémies, lymphome de Burkitt), insuffisance cardiaque, maladies de surcharge ; NFS, frottis, TDR paludisme, échographie ; traiter la cause, orienter si cytopénies ou blastes.',
    definition:
      'Foie palpable à plus de 2 cm sous le rebord costal (ou flèche hépatique augmentée pour l’âge) associé à une rate palpable chez l’enfant.',
    physiopathologie:
      '## Causes\n- **Infectieuses** : **paludisme** (aigu et chronique, splénomégalie palustre hyperréactive), typhoïde, **tuberculose**, **VIH**, hépatites, CMV/EBV, leishmaniose viscérale, brucellose, syphilis congénitale\n- **Hématologiques** : **drépanocytose** (avant l’autosplénectomie), thalassémie, sphérocytose, **leucémies aiguës**, **lymphome de Burkitt**, lymphomes\n- **Hypertension portale** : **schistosomiase** (S. mansoni), cirrhose, thrombose porte\n- **Congestives** : insuffisance cardiaque, péricardite constrictive\n- Métaboliques et de surcharge (rares), malnutrition (kwashiorkor : hépatomégalie stéatosique)',
    diagnostic:
      '## Clinique\n- Mesurer le foie (flèche) et la rate (classification de Hackett pour le paludisme)\n- **Fièvre**, **pâleur**, **ictère**, adénopathies, purpura, ascite, circulation collatérale, signes d’insuffisance cardiaque, état nutritionnel\n\n## Examens\n- **NFS** (cytopénies, blastes), **frottis sanguin**, réticulocytes\n- **TDR paludisme**/goutte épaisse, **électrophorèse de l’hémoglobine**\n- **Bilan hépatique**, albumine, test VIH, sérologies hépatites\n- **Échographie abdominale** (fibrose de Symmers, hypertension portale, masses, adénopathies)\n- Selles et urines (œufs de schistosomes) ; myélogramme si cytopénies ou blastes',
    examens: [
      ['premiere_intention', 'nfs', 'Cytopénies, blastes.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'goutte-epaisse', 'Paludisme.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['premiere_intention', 'echographie-abdominale', 'Fibrose, hypertension portale, masses.'],
      ['premiere_intention', 'bilan-hepatique', 'Hépatopathie.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'examen-parasitologique-selles', 'Schistosoma mansoni.'],
      ['deuxieme_intention', 'myelogramme', 'Leucémie.'],
      ['etiologique', 'serologies-hepatites', 'Hépatites virales.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-simple-enfant', 'Fièvre, TDR positif.'],
      ['drepanocytose', 'Électrophorèse de l’hémoglobine.'],
      ['schistosomiase-hepatosplenique', 'Hypertension portale, fibrose à l’échographie.'],
      ['lymphome-de-burkitt', 'Masse abdominale ou maxillaire.'],
      ['insuffisance-cardiaque-enfant', 'Hépatomégalie congestive, cardiomégalie.'],
      ['Leishmaniose viscérale', 'Fièvre prolongée, pancytopénie, amaigrissement.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Paludisme, drépanocytose, schistosomiase, VIH, tuberculose, leucémies, insuffisance cardiaque',
    principes: [
      [
        'Démarche',
        'Orienter le diagnostic.',
        '- Fièvre aiguë : paludisme, typhoïde, sepsis ; fièvre prolongée : tuberculose, VIH, leishmaniose, hémopathie\n- Cytopénies, blastes, adénopathies, douleurs osseuses : **orientation urgente** (leucémie)\n- Hypertension portale : schistosomiase, cirrhose',
      ],
      [
        'Traitement de la cause',
        'Traiter.',
        '- **Paludisme** : ACT ; splénomégalie palustre hyperréactive : prophylaxie antipaludique prolongée selon avis\n- **Schistosomiase** : **praziquantel** 40 mg/kg\n- Drépanocytose : prise en charge spécifique ; tuberculose, VIH : traitements spécifiques ; hémopathies : oncologie pédiatrique',
      ],
      [
        'Mesures générales',
        'Prévenir les complications.',
        '- Transfusion si anémie sévère ; éviter les sports de contact en cas de grosse rate (risque de rupture)\n- Prise en charge nutritionnelle',
      ],
    ],
    molecules: [
      ['artemether', 'premiere', 'Paludisme (artéméther-luméfantrine)'],
      ['lumefantrine', 'premiere', 'Paludisme (artéméther-luméfantrine)'],
      ['praziquantel', 'premiere', 'Schistosomiase'],
      ['acide-folique', 'adjuvant', 'Hémolyse chronique'],
    ],
    complications: [
      {
        nom: 'Hypersplénisme',
        description: 'Séquestration des cellules sanguines.',
        traitement: '- Traitement de la cause, splénectomie rarement',
        clinique: '- Pâleur, saignements',
        paraclinique: '- Pancytopénie',
      },
      {
        nom: 'Rupture de rate',
        description: 'Traumatisme sur grosse rate.',
        traitement: '- Réanimation, chirurgie',
        clinique: '- Douleur, choc',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Séquestration splénique',
        fiche: 'sequestration-splenique-aigue',
        description: 'Drépanocytose.',
        traitement: '- Transfusion',
        clinique: '- Rate augmentant brutalement, pâleur',
        paraclinique: '- Hb effondrée',
      },
    ],
    evolution: '## Pronostic\n- Celui de la cause',
    urgences: [],
    symptomes: [
      ['Hépatomégalie', 'tres_frequent'],
      ['Splénomégalie', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Distension abdominale', 'frequent'],
      ['Ictère', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'WHO guidelines for malaria',
    ],
    niveaux: {
      cs: ['- TDR paludisme, traitement, orientation', '- Pâleur importante, purpura, fièvre prolongée'],
      hgr: ['- NFS, frottis, échographie, électrophorèse', '- Myélogramme, oncologie'],
      tert: ['- Hématologie et oncologie pédiatriques', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hépatosplénomégalie infectieuse',
        type: 'commune',
        description: 'Paludisme surtout.',
        terrain: '- Enfant en zone d’endémie',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Rate et foie augmentés',
        paraclinique: '- TDR positif, anémie',
        etiologies: '- Paludisme, typhoïde, VIH',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Hépatosplénomégalie avec cytopénies',
        type: 'gravite',
        description: 'Hémopathie suspectée.',
        terrain: '',
        fonctionnels: '- Douleurs osseuses',
        generaux: '- Altération de l’état général',
        physiques: '- Purpura, adénopathies',
        paraclinique: '- Blastes',
        etiologies: '- Leucémie, lymphome',
        syndromes: ['syndrome-anemique', 'syndrome-hemorragique'],
      },
      {
        nom: 'Hypertension portale',
        type: 'etiologique',
        description: 'Schistosomiase.',
        terrain: '- Zone d’endémie S. mansoni',
        fonctionnels: '',
        generaux: '',
        physiques: '- Splénomégalie, circulation collatérale',
        paraclinique: '- Fibrose de Symmers',
        etiologies: '- Schistosomiase',
        syndromes: ['syndrome-d-hypertension-portale'],
      },
    ],
  },

  // =================================================================== Ascaridiose compliquée
  {
    ...GASTROPED,
    slug: 'ascaridiose-compliquee-enfant',
    nom: 'Ascaridiose compliquée de l’enfant',
    resume:
      'Complications des infestations massives par Ascaris lumbricoides chez l’enfant de 2 à 10 ans : occlusion intestinale par paquet de vers (cause fréquente d’occlusion de l’enfant en Afrique), volvulus, invagination, perforation, ascaridiose biliaire et pancréatique, appendicite ; aspiration nasogastrique, réhydratation IV, puis anthelminthique une fois le transit repris ; chirurgie si signes péritonéaux ou échec ; déparasitage de masse.',
    definition:
      'Complications mécaniques, biliaires ou pancréatiques liées à une forte charge en Ascaris lumbricoides, ver rond intestinal transmis par l’ingestion d’œufs présents dans la terre et les aliments souillés.',
    physiopathologie:
      '## Mécanismes\n- **Infestation massive** : paquet de vers obstruant l’iléon terminal → **occlusion** ; volvulus, invagination, nécrose, perforation\n- **Migration** des vers adultes : voies biliaires (cholangite, abcès hépatique), canal pancréatique (pancréatite), appendice, vomissement ou émission de vers par le nez\n- Le traitement anthelminthique pendant l’occlusion peut paralyser les vers et aggraver l’obstruction (à différer selon la plupart des protocoles)',
    diagnostic:
      '## Clinique\n- **Douleurs abdominales** en crises, **vomissements** (parfois de vers), **distension**, arrêt des matières et des gaz\n- **Masse abdominale mobile** (« boudin » de vers) en fosse iliaque droite ou péri-ombilicale\n- Antécédent d’émission de vers ; malnutrition fréquente\n- Défense, fièvre, choc : complication (perforation, nécrose)\n- Ictère, douleur de l’hypochondre droit : ascaridiose biliaire\n\n## Examens\n- **Abdomen sans préparation** : niveaux hydro-aériques, image « en mie de pain » ou en « paquet de vers »\n- **Échographie** : vers dans l’intestin ou les voies biliaires\n- NFS (éosinophilie, anémie), ionogramme, examen parasitologique des selles, lipasémie si douleur épigastrique',
    examens: [
      ['premiere_intention', 'abdomen-sans-preparation', 'Niveaux, paquet de vers.'],
      ['confirmation', 'echographie-abdominale', 'Vers intestinaux ou biliaires.'],
      ['premiere_intention', 'nfs', 'Éosinophilie, anémie.'],
      ['premiere_intention', 'ionogramme', 'Troubles hydroélectrolytiques.'],
      ['etiologique', 'examen-parasitologique-selles', 'Œufs d’ascaris.'],
      ['gravite', 'lipasemie', 'Pancréatite.'],
    ],
    scores: [],
    differentiels: [
      ['invagination-intestinale-aigue', 'Nourrisson, selles sanglantes, boudin.'],
      ['appendicite-enfant', 'Douleur de la fosse iliaque droite, fièvre.'],
      ['occlusion-intestinale-aigue', 'Autres causes : hernie étranglée, brides.'],
      ['Fièvre typhoïde compliquée de perforation', 'Fièvre prolongée, pneumopéritoine.'],
      ['lymphome-de-burkitt', 'Masse abdominale dure.'],
    ],
    etiologies: '## Facteurs\n- Défaut d’assainissement, géophagie, mains sales, absence de déparasitage',
    principes: [
      [
        'Occlusion sans signes péritonéaux',
        'Traitement médical.',
        '- **Aspiration nasogastrique**, à jeun, **réhydratation IV** (Ringer lactate, NaCl 0,9 %), correction des électrolytes, antalgiques\n- Surveillance rapprochée ; huile de paraffine ou lavement au sérum hypertonique (gastrografine) selon les équipes\n- **Anthelminthique** (albendazole 400 mg dose unique ou mébendazole 100 mg 2 fois par jour pendant 3 jours, ou pyrantel 10 mg/kg) **après reprise du transit**',
      ],
      [
        'Chirurgie',
        'Si complication.',
        '- **Laparotomie** : signes péritonéaux, choc, échec du traitement médical après 24–48 h, volvulus, invagination\n- Milking des vers vers le côlon, entérotomie, résection si nécrose ; antibiothérapie (ceftriaxone + métronidazole)',
      ],
      [
        'Ascaridiose biliaire',
        'Traitement médical.',
        '- Antalgiques, antispasmodiques, anthelminthique ; antibiotiques si cholangite ; extraction endoscopique ou chirurgie si échec',
      ],
      [
        'Prévention',
        'Déparasiter.',
        '- **Déparasitage** tous les 6 mois des enfants de 1 à 14 ans, hygiène des mains, latrines, lavage des aliments',
      ],
    ],
    molecules: [
      ['albendazole', 'premiere', 'Après reprise du transit'],
      ['mebendazole', 'alternative', 'Après reprise du transit'],
      ['pyrantel-embonate', 'alternative', 'Possible pendant le traitement médical selon protocole'],
      ['ringer-lactate', 'premiere', 'Réhydratation'],
      ['ceftriaxone', 'adjuvant', 'Chirurgie, perforation'],
      ['metronidazole', 'adjuvant', 'Chirurgie, perforation'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Occlusion et volvulus',
        fiche: 'occlusion-intestinale-aigue',
        description: 'Paquet de vers.',
        traitement: '- Aspiration, chirurgie',
        clinique: '- Distension, vomissements',
        paraclinique: '- ASP',
      },
      {
        nom: 'Perforation et péritonite',
        description: 'Nécrose intestinale.',
        traitement: '- Chirurgie, antibiotiques',
        clinique: '- Défense, choc',
        paraclinique: '- Pneumopéritoine',
      },
      {
        nom: 'Pancréatite',
        fiche: 'pancreatite-aigue',
        description: 'Migration dans le canal pancréatique.',
        traitement: '- Traitement médical',
        clinique: '- Douleur épigastrique',
        paraclinique: '- Lipasémie',
      },
      {
        nom: 'Cholangite et abcès hépatique',
        description: 'Migration biliaire.',
        traitement: '- Antibiotiques, extraction',
        clinique: '- Fièvre, ictère',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec le traitement médical dans la majorité ; mortalité élevée en cas de nécrose ou de perforation diagnostiquée tard',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Distension abdominale', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Ictère', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'Nelson Textbook of Pediatrics',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Repérer, sonde gastrique, perfusion, transfert ; déparasitage de masse',
        '- Vomissements, distension, arrêt du transit',
      ],
      hgr: ['- Traitement médical, chirurgie', ''],
      tert: ['- Chirurgie pédiatrique', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Enfant avec occlusion, défense ou choc dans un contexte d’ascaridiose',
    },
    formes: [
      {
        nom: 'Occlusion par paquet d’ascaris',
        type: 'commune',
        description: 'Forme principale.',
        terrain: '- Enfant de 2 à 10 ans',
        fonctionnels: '- Douleurs, vomissements',
        generaux: '- Déshydratation',
        physiques: '- Distension, masse mobile',
        paraclinique: '- Paquet de vers à l’échographie',
        etiologies: '- Ascaris lumbricoides',
        syndromes: ['syndrome-occlusif'],
      },
      {
        nom: 'Occlusion compliquée',
        type: 'gravite',
        description: 'Nécrose, perforation.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Fièvre, choc',
        physiques: '- Défense, contracture',
        paraclinique: '- Pneumopéritoine',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-de-choc'],
      },
      {
        nom: 'Ascaridiose biliaire',
        type: 'topographique',
        description: 'Migration biliaire.',
        terrain: '',
        fonctionnels: '- Douleur de l’hypochondre droit',
        generaux: '- Fièvre',
        physiques: '- Ictère',
        paraclinique: '- Vers dans les voies biliaires',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
