'use strict';

/**
 * Lot 77 (phase 3, priorités RDC, suite) — chikungunya, maladie à virus Marburg, rickettsioses,
 * borrélioses récurrentes, histoplasmoses. Rédigé par IA (OMS, Guide clinique et thérapeutique MSF,
 * CDC, Harrison) : à valider.
 */

const INF = { departement: 'medecine-interne', specialite: 'Infectiologie' };
const SOURCES = ['OMS — lignes directrices et publications', 'Guide clinique et thérapeutique'];

module.exports = [
  // =================================================================== Chikungunya
  {
    ...INF,
    slug: 'chikungunya',
    nom: 'Chikungunya',
    resume:
      'Arbovirose transmise par les moustiques Aedes, responsable d’épidémies en RDC (Kinshasa 2019) : fièvre brutale et polyarthralgies intenses, symétriques, des extrémités (poignets, mains, chevilles), invalidantes, avec éruption ; évolution souvent vers des arthralgies chroniques pendant des mois ; diagnostic par RT-PCR ou IgM ; traitement symptomatique (paracétamol, AINS seulement après exclusion de la dengue) ; formes graves chez le nouveau-né, le sujet âgé et le malade chronique.',
    definition:
      'Infection par le virus chikungunya (alphavirus), transmise par Aedes aegypti et Aedes albopictus.',
    physiopathologie:
      '## Mécanisme\n- Réplication dans les articulations, les muscles et la peau ; inflammation articulaire persistante (phase chronique)\n\n## Transmission\n- Piqûre diurne d’Aedes ; transmission mère-enfant à l’accouchement (formes néonatales graves)',
    diagnostic:
      '## Clinique\n- **Fièvre** brutale élevée, **polyarthralgies** symétriques intenses des extrémités, ténosynovites, gonflements articulaires\n- **Éruption** maculo-papuleuse, céphalées, myalgies\n- Signes de gravité : nouveau-né, sujet âgé, encéphalite, myocardite, hépatite, décompensation d’une maladie chronique\n\n## Examens\n- **RT-PCR** (première semaine), **IgM** ensuite\n- **TDR paludisme** et **TDR dengue** (co-circulation), NFS (lymphopénie)',
    examens: [
      ['confirmation', 'serologie-arbovirus', 'RT-PCR, IgM.'],
      ['premiere_intention', 'tdr-paludisme', 'Diagnostic différentiel.'],
      ['premiere_intention', 'tdr-dengue', 'Avant tout AINS.'],
      ['premiere_intention', 'nfs', 'Lymphopénie, thrombopénie modérée.'],
    ],
    scores: [],
    differentiels: [
      ['dengue', 'Signes d’alerte, fuite plasmatique.'],
      ['paludisme-simple', 'TDR positif.'],
      ['polyarthrite-rhumatoide', 'Arthrite chronique sans fièvre initiale.'],
      ['arthrite-septique', 'Monoarthrite.'],
      ['rubeole', 'Éruption, adénopathies.'],
    ],
    etiologies: '## Facteurs de risque\n- Épidémie urbaine, gîtes larvaires d’Aedes, saison des pluies',
    principes: [
      [
        'Phase aiguë',
        'Traitement symptomatique.',
        '- **Paracétamol** ; repos, hydratation\n- AINS seulement après exclusion de la dengue\n- Moustiquaire pour éviter la transmission pendant la virémie',
      ],
      [
        'Phase chronique',
        'Arthralgies persistantes.',
        '- AINS, kinésithérapie ; corticoïdes courts ou méthotrexate en cas d’arthrite inflammatoire (avis rhumatologique)',
      ],
      [
        'Prévention',
        'Lutte antivectorielle.',
        '- Suppression des gîtes larvaires, répulsifs, vêtements couvrants',
      ],
    ],
    molecules: [['paracetamol', 'premiere', 'Fièvre et douleur']],
    complications: [
      {
        nom: 'Arthralgies chroniques',
        description: 'Fréquentes, plusieurs mois.',
        traitement: '- AINS, rééducation',
        clinique: '- Douleurs et raideur articulaires',
        paraclinique: '',
      },
      {
        nom: 'Chikungunya néonatal',
        description: 'Transmission à l’accouchement.',
        traitement: '- Soins intensifs',
        clinique: '- Fièvre, éruption, encéphalite',
        paraclinique: '- RT-PCR',
      },
    ],
    evolution: '## Pronostic\n- Létalité faible ; arthralgies persistantes chez 30 à 60 % des patients',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Arthralgies', 'tres_frequent'],
      ['Gonflement articulaire', 'frequent'],
      ['Éruption cutanée', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Myalgies', 'frequent'],
      ['Raideur matinale', 'occasionnel'],
    ],
    sources: [...SOURCES, 'CDC — recommandations de pratique clinique'],
    niveaux: {
      cs: ['- TDR paludisme et dengue, paracétamol', '- Nouveau-né, signes neurologiques'],
      hgr: ['- Formes graves, confirmation', ''],
      tert: ['- RT-PCR, arthrite chronique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Chikungunya aigu',
        type: 'commune',
        description: 'Fièvre et polyarthralgies.',
        terrain: '- Épidémie',
        fonctionnels: '- Douleurs articulaires invalidantes',
        generaux: '- Fièvre brutale',
        physiques: '- Arthrites des extrémités, éruption',
        paraclinique: '- RT-PCR positive',
        etiologies: '- Virus chikungunya',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Marburg
  {
    ...INF,
    slug: 'maladie-a-virus-marburg',
    nom: 'Maladie à virus Marburg',
    resume:
      'Fièvre hémorragique virale (filovirus, comme Ebola) transmise par les chauves-souris roussettes (mines, grottes) puis d’humain à humain par les liquides biologiques ; la RDC a connu de grandes épidémies (Durba-Watsa 1998-2000) : fièvre brutale, céphalées, myalgies, diarrhée et vomissements abondants, puis hémorragies et défaillance multiviscérale ; létalité élevée ; isolement immédiat, notification, RT-PCR au laboratoire de référence, soins de support optimisés ; prévention des infections au personnel soignant.',
    definition:
      'Infection par le virus Marburg (famille des Filoviridae), fièvre hémorragique à potentiel épidémique.',
    physiopathologie:
      '## Transmission\n- Réservoir : chauves-souris Rousettus (mines d’or, grottes)\n- Interhumaine : contact avec sang, vomissements, selles, sécrétions, corps des défunts, matériel souillé\n- Incubation 2 à 21 jours',
    diagnostic:
      '## Clinique\n- **Fièvre** brutale, céphalées intenses, **myalgies**, asthénie\n- **Diarrhée** et **vomissements** abondants (jour 3), douleurs abdominales, éruption\n- **Hémorragies** (jours 5-7), confusion, choc\n- Contexte : mineur, visite de grotte, contact d’un malade ou d’un défunt, épidémie\n\n## Examens\n- **RT-PCR Marburg** (prélèvement avec protection complète, triple emballage)\n- TDR paludisme (avec protection), NFS, créatinine, kaliémie',
    examens: [
      ['confirmation', 'pcr-marburg', 'Laboratoire de référence.'],
      ['premiere_intention', 'tdr-paludisme', 'Diagnostic différentiel.'],
      ['gravite', 'ionogramme', 'Pertes digestives.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['maladie-a-virus-ebola', 'Autre filovirus.'],
      ['paludisme-grave', 'TDR positif.'],
      ['fievre-typhoide', 'Fièvre, douleurs abdominales.'],
      ['fievre-jaune', 'Ictère, hémorragies.'],
      ['cholera', 'Diarrhée aqueuse sans fièvre élevée.'],
    ],
    etiologies:
      '## Expositions\n- Mines, grottes, chauves-souris ; soins ou rites funéraires sans protection',
    principes: [
      [
        'Cas suspect',
        'Isoler et notifier.',
        '- **Isolement** immédiat, équipement de protection individuelle, alerter la zone de santé\n- Recherche et suivi des contacts pendant 21 jours',
      ],
      [
        'Soins de support',
        'Centre de traitement.',
        '- Réhydratation orale puis IV (Ringer lactate), correction de la kaliémie\n- Paracétamol, antiémétiques, antipaludique si TDR positif ou présomptif, antibiotique si sepsis\n- Transfusion si hémorragie ; pas d’injection IM ni d’AINS',
      ],
      [
        'Prévention',
        'Communauté et soignants.',
        '- Enterrements sécurisés, hygiène des mains, protection des soignants\n- Éviter les grottes et mines à chauves-souris',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Pertes digestives, choc'],
      ['paracetamol', 'premiere', 'Fièvre, douleur'],
      ['artesunate', 'adjuvant', 'Paludisme associé'],
    ],
    complications: [
      {
        nom: 'Choc et défaillance multiviscérale',
        fiche: 'sepsis-et-choc-septique',
        description: 'Cause principale de décès.',
        traitement: '- Réanimation',
        clinique: '- Hypotension, oligurie',
        paraclinique: '- Créatinine, kaliémie',
      },
    ],
    evolution: '## Pronostic\n- Létalité de 24 à 88 % selon les épidémies et l’accès aux soins de support',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Céphalées', 'tres_frequent'],
      ['Myalgies', 'frequent'],
      ['Diarrhée', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Hémorragies', 'frequent'],
      ['Éruption cutanée', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [...SOURCES, 'CDC — recommandations de pratique clinique'],
    niveaux: {
      cs: ['- Isoler, protéger, notifier immédiatement', '- Tout cas suspect'],
      hgr: ['- Unité d’isolement, prélèvement sécurisé', ''],
      tert: ['- Centre de traitement, RT-PCR (INRB)', ''],
    },
    alertes: { 'choc-septique': '- Pertes digestives massives : remplissage précoce' },
    formes: [
      {
        nom: 'Forme commune',
        type: 'commune',
        description: 'Fièvre puis atteinte digestive.',
        terrain: '- Mine, grotte, contact d’un malade',
        fonctionnels: '- Céphalées, myalgies, diarrhée',
        generaux: '- Fièvre brutale',
        physiques: '- Déshydratation, éruption',
        paraclinique: '- RT-PCR positive',
        etiologies: '- Virus Marburg',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Rickettsioses
  {
    ...INF,
    slug: 'rickettsioses',
    nom: 'Rickettsioses (typhus et fièvres boutonneuses)',
    resume:
      'Infections à bactéries intracellulaires transmises par les tiques (fièvre à tique africaine, fièvre boutonneuse), les poux (typhus épidémique, dans les camps et prisons) ou les puces (typhus murin) : fièvre, céphalées intenses, myalgies, éruption maculo-papuleuse et, pour les fièvres à tique, escarre noire au point de piqûre avec adénopathie ; fièvre non paludéenne fréquente en Afrique ; doxycycline, efficace en 48 heures, y compris chez l’enfant pour un traitement court.',
    definition:
      'Infections à Rickettsia (et apparentées) transmises par des arthropodes : groupe boutonneux (R. africae, R. conorii) et groupe typhus (R. prowazekii, R. typhi).',
    physiopathologie:
      '## Mécanisme\n- Vascularite des petits vaisseaux : éruption, atteinte d’organes (encéphalite, pneumonie, insuffisance rénale)\n\n## Transmission\n- Tiques (bétail, chiens, brousse), poux de corps (promiscuité, déplacés), puces de rats',
    diagnostic:
      '## Clinique\n- **Fièvre**, **céphalées** intenses, **myalgies**\n- **Escarre** noire d’inoculation et adénopathie satellite (fièvres à tique)\n- **Éruption** maculo-papuleuse (parfois purpurique), tronc puis membres\n- Typhus épidémique : prostration, confusion, toux, contexte de poux\n\n## Examens\n- Diagnostic surtout clinique ; **sérologie** (séroconversion) et PCR sur escarre\n- TDR paludisme, NFS (thrombopénie), transaminases, créatinine',
    examens: [
      ['confirmation', 'serologie-rickettsies', 'Séroconversion, PCR sur escarre.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre en zone d’endémie.'],
      ['premiere_intention', 'nfs', 'Thrombopénie.'],
      ['gravite', 'creatinine', 'Atteinte rénale.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-simple', 'TDR positif.'],
      ['fievre-typhoide', 'Fièvre prolongée.'],
      ['dengue', 'Éruption, arbovirose.'],
      ['leptospirose', 'Exposition à l’eau.'],
      ['meningite-bacterienne', 'Purpura, syndrome méningé.'],
      ['borrelioses-recurrentes', 'Fièvre récurrente, poux ou tiques.'],
    ],
    etiologies:
      '## Expositions\n- Brousse, safari, chiens, bétail ; poux (camps de déplacés, prisons) ; rats',
    principes: [
      [
        'Traitement',
        'Ne pas attendre la confirmation.',
        '- **Doxycycline** 100 mg 2 fois/j pendant 7 jours (ou jusqu’à 3 jours après l’apyrexie) ; enfant : 2,2 mg/kg 2 fois/j (traitement court autorisé)\n- Typhus épidémique : doxycycline 200 mg dose unique possible en épidémie\n- Grossesse : azithromycine ou chloramphénicol selon le protocole',
      ],
      [
        'Prévention',
        'Selon le vecteur.',
        '- Épouillage (typhus), répulsifs, vêtements couvrants, retrait rapide des tiques',
      ],
    ],
    molecules: [
      ['doxycycline', 'premiere', '100 mg 2 fois/j, 7 jours'],
      ['azithromycine', 'alternative', 'Grossesse, selon le protocole'],
      ['chloramphenicol', 'alternative', 'Si doxycycline indisponible'],
    ],
    complications: [
      {
        nom: 'Formes graves',
        description: 'Typhus épidémique, fièvre boutonneuse sévère.',
        traitement: '- Hospitalisation, doxycycline IV ou orale',
        clinique: '- Confusion, détresse respiratoire, choc',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Apyrexie en 48 h sous doxycycline ; typhus épidémique non traité mortel dans 10 à 40 % des cas',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Céphalées', 'tres_frequent'],
      ['Myalgies', 'frequent'],
      ['Éruption cutanée', 'frequent'],
      ['Ulcère cutané', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Toux', 'occasionnel'],
    ],
    sources: [...SOURCES, "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: ['- Fièvre avec escarre ou poux : doxycycline après TDR paludisme', ''],
      hgr: ['- Formes graves', ''],
      tert: ['- Sérologie, PCR', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fièvre à tique africaine',
        type: 'commune',
        description: 'Escarre et éruption.',
        terrain: '- Brousse, voyageur',
        fonctionnels: '- Céphalées, myalgies',
        generaux: '- Fièvre',
        physiques: '- Escarre noire, adénopathie, éruption',
        paraclinique: '- Sérologie',
        etiologies: '- R. africae',
        syndromes: [],
      },
      {
        nom: 'Typhus épidémique',
        type: 'gravite',
        description: 'Transmis par les poux.',
        terrain: '- Camps, prisons',
        fonctionnels: '- Prostration, confusion',
        generaux: '- Fièvre élevée',
        physiques: '- Éruption du tronc',
        paraclinique: '',
        etiologies: '- R. prowazekii',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Borrélioses récurrentes
  {
    ...INF,
    slug: 'borrelioses-recurrentes',
    nom: 'Borrélioses récurrentes',
    resume:
      'Fièvres récurrentes dues à des Borrelia transmises par les poux de corps (fièvre récurrente épidémique, dans les camps et lors des crises humanitaires) ou par les tiques molles (fièvre récurrente endémique, habitat traditionnel) : accès fébriles brutaux de quelques jours séparés d’intervalles sans fièvre, céphalées, myalgies, hépatosplénomégalie, ictère, saignements ; spirochètes visibles sur le frottis ou la goutte épaisse pendant la fièvre ; doxycycline ou érythromycine, avec risque de réaction de Jarisch-Herxheimer.',
    definition:
      'Infections à Borrelia recurrentis (poux) ou à Borrelia de tiques, caractérisées par des accès fébriles récurrents.',
    physiopathologie:
      '## Mécanisme\n- Variation antigénique de la bactérie : chaque accès correspond à une nouvelle population\n\n## Transmission\n- Écrasement de poux infectés sur la peau (forme épidémique) ; piqûre de tique molle (forme endémique), transmission congénitale possible',
    diagnostic:
      '## Clinique\n- **Accès fébriles** brutaux de 3 à 6 jours, puis rémission de 5 à 10 jours, plusieurs rechutes\n- Céphalées, myalgies, **hépatosplénomégalie**, ictère, épistaxis, pétéchies, confusion\n- Contexte : poux, camp de déplacés, prison ; habitat avec tiques\n\n## Examens\n- **Frottis sanguin** et **goutte épaisse** pendant la fièvre : spirochètes\n- NFS (thrombopénie), bilan hépatique',
    examens: [
      ['confirmation', 'frottis-sanguin', 'Spirochètes pendant la fièvre.'],
      ['confirmation', 'goutte-epaisse', 'Spirochètes ; paludisme associé.'],
      ['premiere_intention', 'nfs', 'Thrombopénie.'],
      ['gravite', 'bilan-hepatique', 'Ictère.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-simple', 'Accès fébriles, hématozoaires.'],
      ['rickettsioses', 'Poux, éruption.'],
      ['fievre-typhoide', 'Fièvre continue.'],
      ['leptospirose', 'Ictère, exposition à l’eau.'],
      ['fievre-jaune', 'Ictère, hémorragies.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Poux de corps (crises humanitaires, promiscuité), tiques molles des habitations',
    principes: [
      [
        'Traitement',
        'Surveillance de la première dose.',
        '- Fièvre à poux : **doxycycline** 200 mg dose unique (ou érythromycine 500 mg dose unique ; enfant et grossesse : érythromycine)\n- Fièvre à tiques : doxycycline 100 mg 2 fois/j 7 à 10 jours\n- Surveiller 2 à 4 h la **réaction de Jarisch-Herxheimer** (frissons, fièvre, hypotension) : remplissage',
      ],
      [
        'Prévention',
        'Épouillage.',
        '- Épouillage des personnes, des vêtements et de la literie, lutte contre les tiques',
      ],
    ],
    molecules: [
      ['doxycycline', 'premiere', 'Poux : 200 mg dose unique'],
      ['erythromycine', 'alternative', 'Enfant, grossesse'],
      ['ringer-lactate', 'adjuvant', 'Réaction de Jarisch-Herxheimer'],
    ],
    complications: [
      {
        nom: 'Réaction de Jarisch-Herxheimer',
        description: 'Dans les heures suivant l’antibiotique.',
        traitement: '- Remplissage, surveillance',
        clinique: '- Frissons, fièvre, hypotension',
        paraclinique: '',
      },
      {
        nom: 'Atteinte neurologique et hémorragique',
        description: 'Formes graves.',
        traitement: '- Hospitalisation',
        clinique: '- Confusion, méningite, saignements',
        paraclinique: '- Plaquettes',
      },
    ],
    evolution:
      '## Pronostic\n- Létalité jusqu’à 40 % sans traitement dans la forme épidémique ; < 5 % traitée',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Myalgies', 'frequent'],
      ['Splénomégalie', 'frequent'],
      ['Hépatomégalie', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Hémorragies', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: SOURCES,
    niveaux: {
      cs: ['- Goutte épaisse pendant la fièvre, traitement, épouillage', ''],
      hgr: ['- Formes graves', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fièvre récurrente à poux',
        type: 'commune',
        description: 'Épidémique.',
        terrain: '- Camps, crise humanitaire',
        fonctionnels: '- Céphalées, myalgies',
        generaux: '- Accès fébriles récurrents',
        physiques: '- Hépatosplénomégalie, ictère',
        paraclinique: '- Spirochètes sur le frottis',
        etiologies: '- B. recurrentis',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Histoplasmoses
  {
    ...INF,
    slug: 'histoplasmoses',
    nom: 'Histoplasmoses',
    resume:
      'Mycoses endémiques en Afrique centrale : histoplasmose africaine (Histoplasma duboisii), qui touche la peau (nodules, ulcérations), les os et les ganglions, et histoplasmose à H. capsulatum, pulmonaire ou disséminée chez le patient VIH avancé (fièvre prolongée, amaigrissement, hépatosplénomégalie, pancytopénie, lésions cutanées), souvent confondue avec la tuberculose ; diagnostic par antigène, examen direct, culture ou biopsie ; amphotéricine B pour les formes graves puis itraconazole au long cours.',
    definition:
      'Infections fongiques à Histoplasma capsulatum var. capsulatum ou var. duboisii, contractées par inhalation de spores (sols, guano de chauves-souris et d’oiseaux).',
    physiopathologie:
      '## Contamination\n- Inhalation de spores (grottes, poulaillers, défrichage)\n\n## Formes\n- **Histoplasmose africaine** (duboisii) : peau, tissu sous-cutané, os, ganglions\n- **Histoplasmose à capsulatum** : infection pulmonaire souvent asymptomatique ; **dissémination** chez l’immunodéprimé (VIH avec CD4 < 200)',
    diagnostic:
      '## Clinique\n- **Disséminée (VIH)** : fièvre prolongée, amaigrissement, toux, **hépatosplénomégalie**, adénopathies, lésions cutanées et buccales, diarrhée\n- **Africaine** : **nodules** et abcès froids cutanés, ulcérations, ostéites, adénopathies\n\n## Examens\n- **Antigène Histoplasma** (urine, sérum), **examen mycologique** et culture, **biopsie** (levures)\n- NFS (pancytopénie), bilan hépatique, LDH, CD4, recherche de tuberculose associée',
    examens: [
      ['confirmation', 'antigene-histoplasma', 'Formes disséminées.'],
      ['confirmation', 'examen-mycologique', 'Examen direct, culture.'],
      ['confirmation', 'biopsie-histologie', 'Peau, ganglion, moelle.'],
      ['premiere_intention', 'cd4', 'Immunodépression.'],
      ['premiere_intention', 'nfs', 'Pancytopénie.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose associée ou différentielle.'],
      ['gravite', 'radiographie-thoracique', 'Atteinte pulmonaire.'],
    ],
    scores: [],
    differentiels: [
      ['tuberculose-pulmonaire', 'Fièvre, toux, amaigrissement.'],
      ['coinfection-tuberculose-vih', 'Tableau proche.'],
      ['sarcome-de-kaposi', 'Lésions cutanées du VIH.'],
      ['lymphomes-non-hodgkiniens-adulte', 'Adénopathies, fièvre.'],
      ['meningite-a-cryptocoque', 'Autre mycose du VIH.'],
    ],
    etiologies: '## Facteurs de risque\n- VIH avancé, grottes, guano, travaux agricoles',
    principes: [
      [
        'Formes graves ou disséminées',
        'Induction.',
        '- **Amphotéricine B** (liposomale 3 mg/kg/j, ou désoxycholate 0,7–1 mg/kg/j) pendant 2 semaines\n- Puis **itraconazole** 200 mg 2 fois/j pendant au moins 12 mois',
      ],
      [
        'Formes modérées et histoplasmose africaine',
        'Traitement oral.',
        '- **Itraconazole** 200 mg 3 fois/j pendant 3 jours puis 200 mg 2 fois/j ; drainage ou exérèse de certaines lésions\n- Fluconazole moins efficace (à défaut)',
      ],
      [
        'Patient VIH',
        'Restaurer l’immunité.',
        '- Débuter les ARV dès que possible ; prophylaxie secondaire jusqu’à remontée des CD4',
      ],
    ],
    molecules: [
      ['amphotericine-b', 'premiere', 'Induction des formes graves'],
      ['itraconazole', 'premiere', 'Consolidation, formes modérées'],
      ['fluconazole', 'alternative', 'À défaut d’itraconazole'],
    ],
    complications: [
      {
        nom: 'Choc et défaillance multiviscérale',
        fiche: 'sepsis-et-choc-septique',
        description: 'Histoplasmose disséminée.',
        traitement: '- Amphotéricine B, réanimation',
        clinique: '- Hypotension',
        paraclinique: '- LDH élevées',
      },
    ],
    evolution:
      '## Pronostic\n- Forme disséminée du VIH mortelle sans traitement ; bon pronostic avec amphotéricine B et ARV',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Toux', 'frequent'],
      ['Hépatomégalie', 'frequent'],
      ['Splénomégalie', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Nodules sous-cutanés', 'frequent'],
      ['Ulcère cutané', 'occasionnel'],
      ['Ulcérations buccales', 'occasionnel'],
      ['Diarrhée', 'occasionnel'],
    ],
    sources: [...SOURCES, 'IDSA — recommandations de pratique clinique'],
    niveaux: {
      cs: ['- Fièvre prolongée chez un patient VIH : référer', ''],
      hgr: ['- Biopsie, itraconazole, recherche de tuberculose', ''],
      tert: ['- Antigène, culture, amphotéricine B', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Histoplasmose disséminée du VIH',
        type: 'commune',
        description: 'Fièvre prolongée et pancytopénie.',
        terrain: '- VIH, CD4 < 200',
        fonctionnels: '- Toux, diarrhée',
        generaux: '- Fièvre, amaigrissement',
        physiques: '- Hépatosplénomégalie, lésions cutanées',
        paraclinique: '- Antigène positif',
        etiologies: '- H. capsulatum',
        syndromes: [],
      },
      {
        nom: 'Histoplasmose africaine',
        type: 'etiologique',
        description: 'Peau et os.',
        terrain: '- Afrique centrale et de l’Ouest',
        fonctionnels: '',
        generaux: '',
        physiques: '- Nodules, abcès froids, ulcérations',
        paraclinique: '- Biopsie : grandes levures',
        etiologies: '- H. duboisii',
        syndromes: [],
      },
    ],
  },
];
