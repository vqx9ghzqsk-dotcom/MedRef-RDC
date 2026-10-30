'use strict';

/**
 * Lot 77 (phase 3, priorités RDC) — urétrites et gonococcie de l'homme, hépatite D, charbon,
 * brucellose, dengue. Rédigé par IA (OMS, Guide clinique et thérapeutique MSF, CDC, Harrison) :
 * à valider.
 */

const INF = { departement: 'medecine-interne', specialite: 'Infectiologie' };
const SOURCES = ['OMS — lignes directrices et publications', 'Guide clinique et thérapeutique'];

module.exports = [
  // =================================================================== Urétrites
  {
    ...INF,
    slug: 'uretrites-et-gonococcie-de-l-homme',
    nom: 'Urétrites et gonococcie de l’homme',
    resume:
      'Inflammation de l’urètre de l’homme, presque toujours sexuellement transmise : écoulement urétral (purulent dans la gonococcie, plus discret dans l’urétrite à Chlamydia trachomatis, Mycoplasma genitalium ou Trichomonas), brûlures mictionnelles, parfois sans symptôme ; traitement syndromique immédiat couvrant gonocoque et chlamydia (ceftriaxone et doxycycline ou azithromycine), traitement des partenaires, dépistage du VIH et de la syphilis, préservatifs.',
    definition:
      'Infection de l’urètre masculin, gonococcique (Neisseria gonorrhoeae) ou non gonococcique (Chlamydia trachomatis surtout), transmise lors des rapports sexuels.',
    physiopathologie:
      '## Agents\n- **Neisseria gonorrhoeae** : incubation 2 à 7 jours, écoulement purulent abondant ; résistance croissante (fluoroquinolones, céfixime)\n- **Chlamydia trachomatis** : incubation 1 à 3 semaines, souvent pauci- ou asymptomatique\n- **Mycoplasma genitalium**, **Trichomonas vaginalis** : causes d’urétrites persistantes\n\n## Diffusion\n- Épididymite, prostatite ; gonococcie disséminée (arthrite, lésions cutanées pustuleuses) ; infection pharyngée et anale selon les pratiques\n- Les co-infections (VIH, syphilis) sont fréquentes',
    diagnostic:
      '## Clinique\n- **Écoulement urétral** (méat, ou après pression de l’urètre), **brûlures mictionnelles**, prurit urétral\n- Rechercher : douleur et tuméfaction scrotale (**épididymite**), ulcération génitale, adénopathie inguinale, éruption, arthrite\n- Interroger : rapports à risque, partenaires, épisode antérieur, traitement déjà pris\n\n## Examens (si disponibles, sans retarder le traitement)\n- **Frottis urétral et Gram** : diplocoques Gram négatif intracellulaires = gonococcie\n- **TAAN** gonocoque et chlamydia sur premier jet d’urine ; **culture avec antibiogramme** en cas d’échec\n- **Test VIH**, **sérologie de la syphilis**, AgHBs',
    examens: [
      ['premiere_intention', 'prelevement-uretral', 'Gram, TAAN, culture.'],
      ['etiologique', 'tdr-vih', 'Co-infection fréquente.'],
      ['etiologique', 'serologie-syphilis', 'Co-infection.'],
      ['etiologique', 'aghbs', 'Hépatite B.'],
      ['deuxieme_intention', 'bandelette-urinaire', 'Leucocyturie du premier jet.'],
    ],
    scores: [],
    differentiels: [
      ['infections-urinaires-adulte', 'Cystite, pyélonéphrite : fièvre, pas d’écoulement.'],
      ['orchi-epididymite', 'Douleur scrotale.'],
      ['retrecissement-uretral', 'Dysurie chronique, jet faible.'],
      ['infections-sexuellement-transmissibles', 'Approche syndromique globale.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Partenaires multiples ou nouveaux, rapports sans préservatif, rapports tarifés, IST antérieure, jeune âge',
    principes: [
      [
        'Traitement syndromique (dès le diagnostic clinique)',
        'Couvrir gonocoque et chlamydia.',
        '- **Ceftriaxone** 1 g IM dose unique (OMS 2024 ; 500 mg selon d’autres recommandations et le protocole national)\n- **et doxycycline** 100 mg 2 fois/j pendant 7 jours (ou azithromycine 1 g dose unique)\n- Allergie grave aux bêtalactamines : spectinomycine 2 g IM (si disponible)\n- Éviter céfixime et ciprofloxacine seules (résistances)',
      ],
      [
        'Partenaires et prévention',
        'Rompre la transmission.',
        '- **Traiter le ou les partenaires** des 60 derniers jours, sans attendre leurs symptômes\n- Pas de rapports pendant 7 jours après le traitement ; préservatifs\n- Conseil et **dépistage VIH** (PrEP si risque persistant), vaccination hépatite B',
      ],
      [
        'Échec ou récidive',
        'Écoulement persistant après 7 jours.',
        '- Vérifier l’observance et le traitement du partenaire (réinfection)\n- Culture et antibiogramme du gonocoque ; traiter Trichomonas (métronidazole 2 g dose unique) et M. genitalium selon le protocole\n- Référer si épididymite, gonococcie disséminée',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Gonocoque : 1 g IM dose unique'],
      ['doxycycline', 'premiere', 'Chlamydia : 100 mg 2 fois/j, 7 jours'],
      ['azithromycine', 'alternative', 'Chlamydia : 1 g dose unique'],
      ['spectinomycine', 'alternative', 'Allergie aux bêtalactamines'],
      ['metronidazole', 'deuxieme', 'Urétrite persistante (Trichomonas)'],
    ],
    complications: [
      {
        nom: 'Orchi-épididymite',
        fiche: 'orchi-epididymite',
        description: 'Extension de l’infection.',
        traitement: '- Ceftriaxone + doxycycline 10 à 14 jours',
        clinique: '- Douleur et tuméfaction scrotale',
        paraclinique: '- Échographie si doute avec une torsion',
      },
      {
        nom: 'Rétrécissement urétral',
        fiche: 'retrecissement-uretral',
        description: 'Séquelle d’urétrites répétées.',
        traitement: '- Urologie',
        clinique: '- Dysurie, jet faible',
        paraclinique: '- Urétrographie',
      },
      {
        nom: 'Gonococcie disséminée',
        description: 'Bactériémie.',
        traitement: '- Ceftriaxone 1 g/j IV 7 jours',
        clinique: '- Arthrite, ténosynovite, pustules cutanées, fièvre',
        paraclinique: '- Hémocultures, ponction articulaire',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison sous traitement adapté des deux partenaires\n- Sans traitement : complications, infertilité de la partenaire, transmission du VIH facilitée',
    urgences: [],
    symptomes: [
      ['Écoulement urétral', 'tres_frequent'],
      ['Brûlures mictionnelles', 'tres_frequent'],
      ['Dysurie', 'frequent'],
      ['Douleur scrotale', 'occasionnel'],
      ['Gonflement articulaire', 'rare'],
    ],
    sources: [...SOURCES, 'CDC — recommandations de pratique clinique'],
    niveaux: {
      cs: ['- Traitement syndromique, partenaires, dépistage VIH et syphilis', ''],
      hgr: ['- Gram urétral, culture, prise en charge des échecs', ''],
      tert: ['- TAAN, antibiogramme, surveillance des résistances', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Urétrite gonococcique',
        type: 'commune',
        description: 'Écoulement purulent abondant.',
        terrain: '- Homme jeune, rapports à risque',
        fonctionnels: '- Brûlures mictionnelles intenses',
        generaux: '',
        physiques: '- Écoulement jaune-vert au méat',
        paraclinique: '- Diplocoques Gram négatif intracellulaires',
        etiologies: '- N. gonorrhoeae',
        syndromes: [],
      },
      {
        nom: 'Urétrite non gonococcique',
        type: 'etiologique',
        description: 'Chlamydia, mycoplasme, trichomonas.',
        terrain: '- Homme sexuellement actif',
        fonctionnels: '- Gêne urétrale discrète',
        generaux: '',
        physiques: '- Écoulement clair ou absent',
        paraclinique: '- TAAN',
        etiologies: '- C. trachomatis, M. genitalium, T. vaginalis',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hépatite D
  {
    ...INF,
    slug: 'hepatite-d-delta',
    nom: 'Hépatite D (delta)',
    resume:
      'Hépatite due au virus delta, virus défectif qui ne se multiplie qu’en présence de l’hépatite B : co-infection ou surinfection d’un porteur de l’AgHBs, à l’origine de la forme la plus sévère des hépatites virales chroniques (cirrhose et carcinome hépatocellulaire précoces) ; fréquente en Afrique centrale ; dépister les anticorps anti-VHD chez tout porteur de l’AgHBs ; traitement spécialisé (interféron pégylé, bulévirtide), prévention par la vaccination contre l’hépatite B.',
    definition:
      'Infection par le virus de l’hépatite D, qui requiert l’AgHBs pour se répliquer : co-infection aiguë B + D ou surinfection delta d’une hépatite B chronique.',
    physiopathologie:
      '## Transmission\n- Comme l’hépatite B : sang (injections non sécurisées, transfusion), voie sexuelle, mère-enfant (plus rare)\n\n## Formes\n- **Co-infection** B + D : hépatite aiguë parfois fulminante, guérison le plus souvent\n- **Surinfection** d’un porteur chronique de l’AgHBs : évolution chronique dans 70 à 90 % des cas, fibrose rapide, cirrhose en quelques années',
    diagnostic:
      '## Quand y penser\n- Tout porteur de l’**AgHBs** (dépistage systématique des anti-VHD)\n- Hépatite B qui s’aggrave, cirrhose précoce, hépatite aiguë sévère\n\n## Examens\n- **Anti-VHD**, puis **ARN du VHD** (infection active)\n- Bilan hépatique, NFS-plaquettes, TP, **élastométrie** ou score APRI, échographie, alpha-fœtoprotéine\n- Marqueurs du VHB (ADN), VIH, VHC',
    examens: [
      ['confirmation', 'serologie-vhd', 'Anti-VHD puis ARN.'],
      ['premiere_intention', 'aghbs', 'Indispensable au virus D.'],
      ['premiere_intention', 'bilan-hepatique', 'Cytolyse.'],
      ['gravite', 'elastometrie-hepatique', 'Fibrose.'],
      ['gravite', 'echographie-abdominale', 'Cirrhose, nodule.'],
      ['gravite', 'alpha-foetoproteine', 'Dépistage du carcinome.'],
      ['etiologique', 'adn-vhb', 'Réplication du VHB.'],
    ],
    scores: ['apri', 'child-pugh'],
    differentiels: [
      ['hepatite-b-chronique', 'Hépatite B sans delta.'],
      ['hepatite-c-chronique', 'Co-infection possible.'],
      ['hepatites-virales-aigues-a-et-e', 'Hépatite aiguë.'],
      ['cirrhose-hepatique', 'Évolution.'],
    ],
    etiologies: '## Terrain\n- Porteurs de l’AgHBs, usagers de drogues injectables, transfusés, partenaires',
    principes: [
      [
        'Dépistage et suivi',
        'Chez tout porteur de l’AgHBs.',
        '- Anti-VHD, puis ARN si positif\n- Suivi tous les 6 mois : transaminases, plaquettes, échographie, alpha-fœtoprotéine si cirrhose',
      ],
      [
        'Traitement spécialisé',
        'Hépatite D chronique active.',
        '- **Interféron alfa pégylé** 48 semaines (réponse limitée, nombreux effets indésirables) ou **bulévirtide** quand il est disponible\n- Analogue nucléos(t)idique (**ténofovir**) si l’hépatite B le justifie\n- Cirrhose décompensée : avis de transplantation',
      ],
      [
        'Prévention',
        'Par celle de l’hépatite B.',
        '- **Vaccination contre l’hépatite B** (protège aussi du virus D), dose de naissance\n- Sécurité transfusionnelle et des injections, préservatifs',
      ],
    ],
    molecules: [['tenofovir-disoproxil', 'adjuvant', 'Si l’hépatite B le justifie']],
    complications: [
      {
        nom: 'Cirrhose',
        fiche: 'cirrhose-hepatique',
        description: 'Précoce et fréquente.',
        traitement: '- Prise en charge de la cirrhose',
        clinique: '- Ascite, ictère, hémorragie',
        paraclinique: '- Élastométrie, échographie',
      },
      {
        nom: 'Carcinome hépatocellulaire',
        fiche: 'carcinome-hepatocellulaire',
        description: 'Risque élevé.',
        traitement: '- Dépistage semestriel',
        clinique: '',
        paraclinique: '- Échographie, alpha-fœtoprotéine',
      },
      {
        nom: 'Hépatite fulminante',
        description: 'Co-infection aiguë.',
        traitement: '- Réanimation, transplantation',
        clinique: '- Encéphalopathie, ictère',
        paraclinique: '- TP effondré',
      },
    ],
    evolution:
      '## Pronostic\n- Hépatite virale chronique la plus sévère : cirrhose chez la majorité en 5 à 10 ans sans traitement',
    urgences: [],
    symptomes: [
      ['Asthénie', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Hépatomégalie', 'occasionnel'],
      ['Distension abdominale', 'occasionnel'],
      ['Anorexie', 'occasionnel'],
    ],
    sources: [...SOURCES, 'EASL — recommandations de pratique clinique'],
    niveaux: {
      cs: ['- Dépistage AgHBs, orientation, vaccination', ''],
      hgr: ['- Anti-VHD, bilan hépatique, échographie', ''],
      tert: ['- ARN VHD, élastométrie, traitement antiviral', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Surinfection delta chronique',
        type: 'commune',
        description: 'Porteur de l’AgHBs.',
        terrain: '- Hépatite B chronique',
        fonctionnels: '- Asthénie',
        generaux: '',
        physiques: '- Souvent normal ; signes de cirrhose',
        paraclinique: '- Anti-VHD et ARN positifs',
        etiologies: '- Virus D',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Charbon
  {
    ...INF,
    slug: 'charbon-anthrax',
    nom: 'Charbon (anthrax)',
    resume:
      'Zoonose due à Bacillus anthracis transmise par contact avec des animaux morts ou leurs produits (viande, peaux) : forme cutanée la plus fréquente (papule prurigineuse puis vésicule et escarre noire indolore entourée d’un œdème important), formes digestive et respiratoire graves ; épidémies en RDC liées à la consommation de viande d’animaux trouvés morts (bétail, hippopotames) ; ne jamais inciser l’escarre ; ciprofloxacine ou doxycycline, formes systémiques en milieu hospitalier ; notification et enquête vétérinaire.',
    definition:
      'Infection à Bacillus anthracis, bacille sporulé, transmise par les animaux herbivores ou leurs produits.',
    physiopathologie:
      '## Transmission\n- **Cutanée** : contact d’une plaie avec un animal mort, sa peau, sa laine\n- **Digestive** : consommation de viande contaminée mal cuite\n- **Respiratoire** : inhalation de spores (tannerie, laine)\n\n## Mécanisme\n- Toxines (œdématogène et létale) : œdème massif, nécrose, choc',
    diagnostic:
      '## Clinique\n- **Cutané** : papule puis vésicule, **escarre noire indolore** au centre d’un **œdème** important, adénopathie, fièvre modérée\n- **Digestif** : fièvre, douleurs abdominales, vomissements, diarrhée sanglante, ascite, choc\n- **Respiratoire** : syndrome pseudo-grippal puis détresse respiratoire, élargissement du médiastin, choc\n- **Méningite** hémorragique possible\n- Contexte : animaux morts dans la région, viande partagée, plusieurs malades\n\n## Examens\n- **Gram et culture** du liquide de vésicule ou de l’escarre (sans inciser), **hémocultures**\n- Radiographie thoracique (médiastin), LCR si signes méningés',
    examens: [
      ['confirmation', 'prelevement-de-pus', 'Gram et culture du liquide de vésicule.'],
      ['confirmation', 'hemocultures', 'Formes systémiques.'],
      ['gravite', 'radiographie-thoracique', 'Élargissement du médiastin.'],
      ['gravite', 'lcr', 'Méningite hémorragique.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['erysipele-et-cellulite', 'Lésion douloureuse sans escarre noire.'],
      ['pyodermites', 'Pus, douleur.'],
      ['peste', 'Bubon douloureux, Ituri.'],
      ['ulcere-de-buruli', 'Ulcère chronique à bords décollés.'],
      ['morsures-animales', 'Plaie surinfectée.'],
    ],
    etiologies:
      '## Situations à risque\n- Dépeçage ou consommation d’animaux trouvés morts, éleveurs, bouchers, tanneurs, zones de parcs (hippopotames)',
    principes: [
      [
        'Charbon cutané sans signe systémique',
        'Traitement oral.',
        '- **Ciprofloxacine** 500 mg 2 fois/j ou **doxycycline** 100 mg 2 fois/j pendant 7 à 10 jours (enfant : selon le poids)\n- **Ne pas inciser ni drainer** l’escarre ; pansement sec ; antalgiques',
      ],
      [
        'Formes systémiques (digestive, respiratoire, méningée, œdème extensif)',
        'Hospitalisation.',
        '- Association IV : ciprofloxacine + un second antibiotique (clindamycine, ou méropénème si méningite) puis relais oral jusqu’à 60 jours en cas d’inhalation\n- Réanimation du choc, drainage des épanchements ; corticoïdes si œdème cervical compressif ou méningite',
      ],
      [
        'Santé publique',
        'Maladie à déclaration.',
        '- Notifier ; enquête conjointe avec les services vétérinaires\n- Ne pas consommer ni dépecer les animaux trouvés morts ; enfouir ou brûler les carcasses\n- Antibioprophylaxie des personnes exposées selon les autorités',
      ],
    ],
    molecules: [
      ['ciprofloxacine', 'premiere', 'Cutané : 500 mg 2 fois/j, 7 à 10 jours'],
      ['doxycycline', 'premiere', 'Cutané : 100 mg 2 fois/j'],
      ['clindamycine', 'adjuvant', 'Formes systémiques (antitoxine)'],
      ['meropeneme', 'alternative', 'Méningite charbonneuse'],
      ['amoxicilline', 'alternative', 'Souche sensible, femme enceinte ou enfant selon le protocole'],
    ],
    complications: [
      {
        nom: 'Choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Formes systémiques.',
        traitement: '- Réanimation',
        clinique: '- Hypotension',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Œdème cervical compressif',
        description: 'Escarre de la face ou du cou.',
        traitement: '- Surveillance des voies aériennes, corticoïdes',
        clinique: '- Stridor, dysphagie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Forme cutanée traitée : guérison (cicatrice) ; formes digestive, respiratoire et méningée souvent mortelles',
    urgences: ['choc-septique'],
    symptomes: [
      ['Ulcère cutané', 'tres_frequent'],
      ['Œdèmes', 'frequent'],
      ['Papules cutanées', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
      ['Diarrhée sanglante', 'rare'],
      ['Dyspnée', 'rare'],
    ],
    sources: [...SOURCES, 'CDC — recommandations de pratique clinique'],
    niveaux: {
      cs: [
        '- Forme cutanée : antibiotique oral, ne pas inciser, notifier',
        '- Œdème extensif, signes systémiques',
      ],
      hgr: ['- Formes systémiques : antibiothérapie IV, réanimation', ''],
      tert: ['- Réanimation, confirmation au laboratoire de référence', ''],
    },
    alertes: { 'choc-septique': '- Charbon digestif ou respiratoire : choc rapide' },
    formes: [
      {
        nom: 'Charbon cutané',
        type: 'commune',
        description: 'Escarre noire indolore.',
        terrain: '- Contact avec un animal mort',
        fonctionnels: '- Prurit puis lésion indolore',
        generaux: '- Fièvre modérée',
        physiques: '- Escarre noire, œdème périlésionnel, adénopathie',
        paraclinique: '- Gram du liquide de vésicule',
        etiologies: '- B. anthracis',
        syndromes: [],
      },
      {
        nom: 'Charbon digestif',
        type: 'gravite',
        description: 'Viande contaminée.',
        terrain: '- Repas commun, plusieurs malades',
        fonctionnels: '- Douleurs abdominales, vomissements',
        generaux: '- Fièvre, choc',
        physiques: '- Ascite, sang dans les selles',
        paraclinique: '- Hémocultures',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Brucellose
  {
    ...INF,
    slug: 'brucellose',
    nom: 'Brucellose',
    resume:
      'Zoonose due à Brucella transmise par le lait cru, les fromages frais et le contact avec le bétail (bovins, caprins, porcins) : fièvre ondulante ou prolongée avec sueurs nocturnes, arthralgies, douleurs rachidiennes, hépatosplénomégalie et adénopathies ; complications ostéo-articulaires (spondylodiscite, sacro-iliite), orchi-épididymite, endocardite ; diagnostic par sérologie (Rose Bengale) et hémocultures ; doxycycline 6 semaines associée à la gentamicine, la streptomycine ou la rifampicine.',
    definition:
      'Infection à Brucella spp. (abortus, melitensis, suis), transmise par les animaux d’élevage ou leurs produits.',
    physiopathologie:
      '## Transmission\n- Lait cru et produits laitiers non pasteurisés, contact avec des avortons, des placentas, des carcasses (éleveurs, bouchers, vétérinaires), laboratoires\n\n## Mécanisme\n- Bactérie intracellulaire du système réticulo-endothélial : rechutes et localisations focales fréquentes',
    diagnostic:
      '## Clinique\n- **Fièvre** ondulante ou prolongée, **sueurs** nocturnes malodorantes, asthénie, amaigrissement\n- **Arthralgies**, douleurs **rachidiennes** (spondylodiscite lombaire), sacro-iliite\n- Hépatosplénomégalie, adénopathies, orchi-épididymite\n\n## Examens\n- **Rose Bengale** puis séro-agglutination de Wright, **hémocultures** prolongées\n- NFS (leucopénie), CRP, bilan hépatique ; imagerie du rachis si douleur ; échocardiographie si souffle',
    examens: [
      ['confirmation', 'serologie-brucellose', 'Rose Bengale, Wright.'],
      ['confirmation', 'hemocultures', 'Culture prolongée.'],
      ['premiere_intention', 'nfs', 'Leucopénie, anémie.'],
      ['gravite', 'irm-rachidienne', 'Spondylodiscite.'],
      ['gravite', 'echocardiographie', 'Endocardite.'],
      ['etiologique', 'tdr-paludisme', 'Fièvre en zone d’endémie.'],
    ],
    scores: [],
    differentiels: [
      ['fievre-typhoide', 'Fièvre, troubles digestifs.'],
      ['tuberculose-extrapulmonaire', 'Mal de Pott, adénopathies.'],
      ['mal-de-pott', 'Spondylodiscite tuberculeuse.'],
      ['paludisme-simple', 'Fièvre en zone d’endémie.'],
      ['endocardite-infectieuse', 'Fièvre et souffle.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Lait cru, éleveurs, régions pastorales (Ituri, Kivu, Haut-Katanga), contact avec avortons',
    principes: [
      [
        'Forme non compliquée',
        'Adulte et enfant de plus de 8 ans.',
        '- **Doxycycline** 100 mg 2 fois/j pendant 6 semaines\n- **et gentamicine** 5 mg/kg/j IM ou IV pendant 7 jours (ou streptomycine 1 g/j IM 2 à 3 semaines), ou **rifampicine** 600–900 mg/j 6 semaines',
      ],
      [
        'Enfant de moins de 8 ans, grossesse',
        'Éviter la doxycycline.',
        '- Enfant : **cotrimoxazole + rifampicine** 6 semaines\n- Grossesse : **rifampicine** (± cotrimoxazole selon le terme), avis spécialisé',
      ],
      [
        'Formes focales',
        'Spondylodiscite, endocardite, neurobrucellose.',
        '- Traitement prolongé (3 mois ou plus), associations à trois antibiotiques, chirurgie de l’endocardite\n- Prévention : pasteuriser ou bouillir le lait, gants pour les mises bas',
      ],
    ],
    molecules: [
      ['doxycycline', 'premiere', '100 mg 2 fois/j, 6 semaines'],
      ['gentamicine', 'premiere', 'Associée, 7 jours'],
      ['streptomycine', 'alternative', 'Associée, 2 à 3 semaines'],
      ['rifampicine', 'alternative', 'Associée, 6 semaines ; enfant, grossesse'],
      ['cotrimoxazole', 'alternative', 'Enfant de moins de 8 ans'],
    ],
    complications: [
      {
        nom: 'Spondylodiscite',
        description: 'Localisation la plus fréquente.',
        traitement: '- Antibiothérapie 3 mois',
        clinique: '- Douleur rachidienne',
        paraclinique: '- IRM',
      },
      {
        nom: 'Endocardite',
        fiche: 'endocardite-infectieuse',
        description: 'Principale cause de décès.',
        traitement: '- Antibiotiques et chirurgie',
        clinique: '- Souffle, insuffisance cardiaque',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Orchi-épididymite',
        fiche: 'orchi-epididymite',
        description: 'Fréquente chez l’homme.',
        traitement: '- Traitement de la brucellose',
        clinique: '- Douleur scrotale',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon sous traitement complet ; rechutes (5 à 15 %) si traitement court ou monothérapie',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Sueurs nocturnes', 'tres_frequent'],
      ['Arthralgies', 'frequent'],
      ['Douleur rachidienne', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Splénomégalie', 'frequent'],
      ['Hépatomégalie', 'occasionnel'],
      ['Adénopathies', 'occasionnel'],
      ['Douleur scrotale', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [...SOURCES, "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: ['- Fièvre prolongée chez un éleveur : TDR paludisme, référer', ''],
      hgr: ['- Rose Bengale, hémocultures, traitement associé', ''],
      tert: ['- Formes focales, endocardite, IRM', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Brucellose aiguë',
        type: 'commune',
        description: 'Fièvre ondulante sudoro-algique.',
        terrain: '- Éleveur, lait cru',
        fonctionnels: '- Sueurs, douleurs diffuses',
        generaux: '- Fièvre',
        physiques: '- Splénomégalie, adénopathies',
        paraclinique: '- Rose Bengale positif',
        etiologies: '- Brucella',
        syndromes: [],
      },
      {
        nom: 'Brucellose focalisée',
        type: 'evolutive',
        description: 'Os, cœur, système nerveux, testicule.',
        terrain: '- Brucellose non ou mal traitée',
        fonctionnels: '- Douleur rachidienne',
        generaux: '- Fébricule',
        physiques: '- Raideur rachidienne',
        paraclinique: '- IRM, échocardiographie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dengue
  {
    ...INF,
    slug: 'dengue',
    nom: 'Dengue',
    resume:
      'Arbovirose transmise par les moustiques Aedes, en expansion en Afrique (cas et flambées signalés en RDC) : fièvre brutale, céphalées, douleurs rétro-orbitaires, myalgies et arthralgies, éruption ; phase critique entre le 3e et le 7e jour, à la défervescence, avec fuite plasmatique (signes d’alerte : douleurs abdominales, vomissements persistants, saignements des muqueuses, léthargie, hépatomégalie, hématocrite qui monte pendant que les plaquettes chutent) pouvant évoluer vers le choc ; diagnostic par TDR NS1/IgM ; aucun antiviral : paracétamol, réhydratation, surveillance ; jamais d’aspirine ni d’AINS.',
    definition:
      'Infection par l’un des quatre sérotypes du virus de la dengue ; une seconde infection par un autre sérotype expose à la dengue sévère.',
    physiopathologie:
      '## Transmission\n- Piqûre diurne d’**Aedes aegypti** ou **Aedes albopictus** (gîtes urbains : pneus, récipients d’eau)\n\n## Phases\n- **Fébrile** (J1-J3) puis **critique** (J3-J7, défervescence) : augmentation de la perméabilité capillaire, fuite plasmatique, thrombopénie, hémorragies\n- **Récupération** : réabsorption des liquides (risque de surcharge)',
    diagnostic:
      '## Clinique\n- **Fièvre** brutale, **céphalées**, douleur rétro-orbitaire, **myalgies**, arthralgies, nausées, éruption, signe du lacet\n- **Signes d’alerte** (OMS) : douleur abdominale, vomissements persistants, accumulation de liquide (ascite, épanchement), saignement des muqueuses, léthargie ou agitation, hépatomégalie > 2 cm, hématocrite qui monte avec chute des plaquettes\n- **Dengue sévère** : choc par fuite plasmatique, hémorragie grave, atteinte d’organe\n\n## Examens\n- **TDR NS1** (J1-J5) et **IgM** (après J5), RT-PCR\n- **NFS** répétée : hématocrite, plaquettes, leucopénie ; transaminases\n- **TDR paludisme** systématique (co-infection et diagnostic différentiel)',
    examens: [
      ['confirmation', 'tdr-dengue', 'NS1 précoce, IgM ensuite.'],
      ['confirmation', 'serologie-arbovirus', 'RT-PCR, laboratoire de référence.'],
      ['premiere_intention', 'nfs', 'Hématocrite et plaquettes, répétés.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme associé ou différentiel.'],
      ['gravite', 'bilan-hepatique', 'Atteinte hépatique.'],
      ['gravite', 'echographie-abdominale', 'Ascite, épanchements.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['paludisme-simple', 'TDR paludisme positif.'],
      ['chikungunya', 'Arthralgies invalidantes.'],
      ['fievre-typhoide', 'Fièvre prolongée.'],
      ['leptospirose', 'Exposition à l’eau, ictère, atteinte rénale.'],
      ['maladie-a-virus-ebola', 'Contexte épidémique, contact.'],
      ['rougeole', 'Toux, conjonctivite, énanthème.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Zones urbaines avec gîtes larvaires, saison des pluies, seconde infection',
    principes: [
      [
        'Dengue sans signe d’alerte',
        'Soins à domicile.',
        '- **Paracétamol** (adulte 1 g toutes les 6 h, maximum 3 g/j ; enfant 15 mg/kg)\n- **Jamais d’aspirine ni d’AINS** (risque hémorragique), pas d’injection IM\n- Boire abondamment ; revoir chaque jour jusqu’à 48 h après la fin de la fièvre ; revenir immédiatement si signe d’alerte',
      ],
      [
        'Dengue avec signes d’alerte',
        'Hospitalisation.',
        '- Hématocrite de référence, puis **Ringer lactate** 5–7 mL/kg/h pendant 1 à 2 h, à réduire selon l’état clinique et l’hématocrite\n- Surveillance : constantes, diurèse, hématocrite toutes les 4 à 6 h',
      ],
      [
        'Dengue sévère (choc)',
        'Urgence.',
        '- Bolus de cristalloïde 10–20 mL/kg en 15 à 30 min, puis débit dégressif selon la réponse et l’hématocrite\n- Transfusion si hémorragie ou hématocrite qui baisse sans amélioration\n- Éviter la surcharge pendant la récupération ; surveillance en unité de soins intensifs',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Fièvre et douleur (pas d’aspirine ni d’AINS)'],
      ['ringer-lactate', 'premiere', 'Signes d’alerte, choc'],
      ['chlorure-de-sodium-0-9', 'alternative', 'Remplissage'],
    ],
    complications: [
      {
        nom: 'Choc de la dengue',
        description: 'Fuite plasmatique.',
        traitement: '- Remplissage guidé par l’hématocrite',
        clinique: '- Pouls rapide et filant, pression pincée, extrémités froides',
        paraclinique: '- Hématocrite élevé',
      },
      {
        nom: 'Hémorragies graves',
        description: 'Thrombopénie, coagulopathie.',
        traitement: '- Transfusion',
        clinique: '- Hématémèse, méléna, ménorragies',
        paraclinique: '- Plaquettes, hématocrite',
      },
      {
        nom: 'Surcharge hydrique',
        fiche: 'oedemes-generalises-demarche',
        description: 'Phase de récupération.',
        traitement: '- Arrêter les perfusions, diurétique prudent',
        clinique: '- Dyspnée, œdèmes',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Létalité < 1 % avec une prise en charge adaptée ; jusqu’à 20 % dans la dengue sévère non traitée',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Céphalées', 'tres_frequent'],
      ['Myalgies', 'tres_frequent'],
      ['Arthralgies', 'frequent'],
      ['Éruption cutanée', 'frequent'],
      ['Douleur oculaire', 'frequent'],
      ['Nausées', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
      ['Saignement des gencives', 'occasionnel'],
      ['Hémorragies', 'occasionnel'],
      ['Hépatomégalie', 'occasionnel'],
    ],
    sources: [...SOURCES, 'CDC — recommandations de pratique clinique'],
    niveaux: {
      cs: [
        '- TDR paludisme et dengue, paracétamol, éducation sur les signes d’alerte',
        '- Signe d’alerte, choc, saignement',
      ],
      hgr: ['- Hématocrite répété, perfusion guidée, transfusion', ''],
      tert: ['- Soins intensifs, confirmation RT-PCR', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dengue sans signe d’alerte',
        type: 'commune',
        description: 'Syndrome fébrile algique.',
        terrain: '- Zone urbaine, saison des pluies',
        fonctionnels: '- Céphalées, douleurs rétro-orbitaires, myalgies',
        generaux: '- Fièvre brutale',
        physiques: '- Éruption, signe du lacet',
        paraclinique: '- NS1 positif, leucopénie',
        etiologies: '- Virus de la dengue (4 sérotypes)',
        syndromes: [],
      },
      {
        nom: 'Dengue sévère',
        type: 'gravite',
        description: 'Choc par fuite plasmatique.',
        terrain: '- Seconde infection, enfant',
        fonctionnels: '- Douleurs abdominales, vomissements',
        generaux: '- Léthargie',
        physiques: '- Extrémités froides, pression pincée, saignements',
        paraclinique: '- Hématocrite qui monte, plaquettes basses',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
