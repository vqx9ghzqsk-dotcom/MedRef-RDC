'use strict';

/**
 * Lot 16 (urgences pédiatriques) — détresse respiratoire, coma, intoxications, brûlures,
 * noyade, arrêt cardiorespiratoire, déshydratation sévère, hypoglycémie, état de mal
 * convulsif, polytraumatisme de l'enfant.
 * Rédigé par IA (OMS ETAT, ERC/ILCOR, ATLS, MSF) : à valider.
 */

const URGPED = { departement: 'pediatrie', specialite: 'Urgences pédiatriques' };

module.exports = [
  // =================================================================== Détresse respiratoire
  {
    ...URGPED,
    slug: 'detresse-respiratoire-enfant',
    nom: 'Détresse respiratoire de l’enfant',
    resume:
      'Polypnée, tirage, battement des ailes du nez, geignement, cyanose : oxygène, position, libération des voies aériennes, recherche de la cause (pneumonie, asthme, bronchiolite, croup, corps étranger, acidose palustre, anémie, insuffisance cardiaque).',
    definition:
      'Augmentation du travail respiratoire et/ou défaillance des échanges gazeux chez l’enfant, signe prioritaire du triage ETAT (« A » et « B »).',
    physiopathologie:
      '## Mécanismes\n- Obstruction des voies aériennes supérieures (croup, corps étranger, épiglottite) ou inférieures (asthme, bronchiolite)\n- Atteinte du parenchyme (pneumonie, œdème pulmonaire)\n- Causes extrapulmonaires : acidose (paludisme grave, acidocétose, déshydratation), anémie sévère, insuffisance cardiaque, choc',
    diagnostic:
      '## Signes de gravité (ETAT)\n- **Respiration absente ou obstruée**, cyanose centrale\n- **Détresse respiratoire sévère** : tirage marqué, geignement, battement des ailes du nez, balancement thoraco-abdominal, incapacité à boire ou parler\n- SpO2 < 90 %\n\n## Orientation\n- Stridor : voies aériennes hautes\n- Sibilants : asthme, bronchiolite\n- Crépitants localisés et fièvre : pneumonie\n- Respiration profonde sans signes pulmonaires : acidose (paludisme, diabète, déshydratation)\n- Pâleur extrême : anémie ; hépatomégalie : insuffisance cardiaque',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'SpO2 : indication de l’oxygène.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie, acidocétose.'],
      ['premiere_intention', 'tdr-paludisme', 'Acidose palustre.'],
      ['premiere_intention', 'nfs', 'Anémie sévère.'],
      ['gravite', 'radiographie-thoracique', 'Pneumonie, pneumothorax, corps étranger, cardiomégalie.'],
      ['gravite', 'gaz-du-sang', 'Hypercapnie, acidose.'],
    ],
    scores: ['silverman'],
    differentiels: [
      ['pneumonie-enfant', 'Fièvre, crépitants.'],
      ['asthme-enfant', 'Sibilants, réversibilité.'],
      ['bronchiolite-aigue-nourrisson', 'Nourrisson, contexte viral.'],
      ['laryngite-aigue-croup', 'Stridor, toux aboyante.'],
      ['paludisme-grave-enfant', 'Respiration acidosique, TDR positif.'],
      ['insuffisance-cardiaque-enfant', 'Hépatomégalie, cardiomégalie.'],
    ],
    etiologies:
      '## Causes principales\n- Pneumonie, bronchiolite, asthme, croup, corps étranger\n- Paludisme grave avec anémie et acidose\n- Insuffisance cardiaque, sepsis, acidocétose, intoxications',
    principes: [
      [
        'Mesures immédiates',
        'Assurer A et B.',
        '- Libérer les voies aériennes, position confortable (assise si obstruction haute)\n- **Oxygène** si SpO2 < 90 % (ou signes de gravité) : lunettes nasales 1–2 L/min (nourrisson), masque si besoin ; CPAP à bulles si disponible\n- Ventilation au ballon si apnée ou respiration inefficace\n- Aspiration douce des sécrétions',
      ],
      [
        'Traitement de la cause',
        'Lever la détresse.',
        '- Pneumonie : **ceftriaxone** ou ampicilline + gentamicine\n- Sibilants : **salbutamol**\n- Stridor : **dexaméthasone**, adrénaline nébulisée\n- Corps étranger : désobstruction\n- Anémie sévère : transfusion ; paludisme : artésunate\n- Insuffisance cardiaque : furosémide',
      ],
      [
        'Surveillance',
        'Repérer l’épuisement.',
        '- FR, SpO2, conscience, glycémie ; transfert en réanimation si épuisement',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'SpO2 < 90 %'],
      ['salbutamol', 'premiere', 'Sibilants'],
      ['ceftriaxone', 'premiere', 'Pneumonie grave'],
      ['dexamethasone', 'alternative', 'Croup'],
      ['adrenaline-epinephrine', 'alternative', 'Croup sévère, anaphylaxie'],
      ['furosemide', 'adjuvant', 'Œdème pulmonaire'],
      ['artesunate', 'adjuvant', 'Paludisme grave'],
    ],
    complications: [
      {
        nom: 'Arrêt respiratoire',
        fiche: 'arret-cardiorespiratoire-enfant',
        description: 'Épuisement.',
        traitement: '- Ventilation, réanimation',
        clinique: '- Bradypnée, cyanose, bradycardie',
        paraclinique: '',
      },
      {
        nom: 'Hypoxie cérébrale',
        description: 'Hypoxémie prolongée.',
        traitement: '- Oxygène précoce',
        clinique: '- Convulsions, coma',
        paraclinique: '- SpO2',
      },
    ],
    evolution: '## Pronostic\n- Bon si l’oxygène et le traitement de la cause sont disponibles à temps',
    urgences: ['crise-d-asthme-aigue-grave'],
    symptomes: [
      ['Tachypnée', 'tres_frequent'],
      ['Dyspnée', 'tres_frequent'],
      ['Cyanose', 'frequent'],
      ['Geignement expiratoire', 'frequent'],
      ['Toux', 'frequent'],
      ['Stridor', 'occasionnel'],
      ['Sibilants', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Triage, oxygène si disponible, première dose de traitement, transfert',
        '- Toute détresse respiratoire sévère',
      ],
      hgr: ['- Oxygène, CPAP à bulles, traitement de la cause', '- Besoin de ventilation'],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: { 'crise-d-asthme-aigue-grave': 'Enfant sifflant qui ne peut plus parler, SpO2 < 92 %' },
    formes: [
      {
        nom: 'Détresse respiratoire d’origine pulmonaire',
        type: 'commune',
        description: 'Pneumonie, bronchiolite, asthme.',
        terrain: '- Enfant < 5 ans',
        fonctionnels: '- Toux, difficulté à boire',
        generaux: '- Fièvre',
        physiques: '- Tirage, polypnée, crépitants ou sibilants',
        paraclinique: '- SpO2 basse',
        etiologies: '- Infection, asthme',
        syndromes: ['syndrome-de-detresse-respiratoire'],
        examens: [['oxymetrie-de-pouls', 'Gravité']],
      },
      {
        nom: 'Respiration acidosique',
        type: 'etiologique',
        description: 'Sans atteinte pulmonaire.',
        terrain: '- Paludisme grave, acidocétose, déshydratation',
        fonctionnels: '',
        generaux: '- Pâleur, déshydratation',
        physiques: '- Respiration ample et profonde, auscultation normale',
        paraclinique: '- Lactates, glycémie',
        etiologies: '- Acidose métabolique',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Coma enfant
  {
    ...URGPED,
    slug: 'coma-enfant',
    nom: 'Coma de l’enfant',
    resume:
      'Enfant inconscient : ABC, position latérale, glycémie immédiate (glucose 10 % 5 mL/kg), TDR, recherche de méningite ; causes : paludisme grave, méningite, hypoglycémie, intoxications, traumatisme, état de mal ; score de Blantyre.',
    definition:
      'Altération profonde de la conscience chez l’enfant, évaluée par l’échelle AVPU ou le score de Blantyre (≤ 2 chez le jeune enfant) ou de Glasgow pédiatrique.',
    physiopathologie:
      '## Causes\n- **Infectieuses** : neuropaludisme, méningite, encéphalite, sepsis\n- **Métaboliques** : hypoglycémie, acidocétose, déshydratation, troubles ioniques\n- **Toxiques** : médicaments, pétrole, plantes, organophosphorés\n- Traumatisme crânien, état de mal convulsif, AVC drépanocytaire, hypertension intracrânienne',
    diagnostic:
      '## Évaluation\n- **AVPU** (Alerte, Voix, Douleur, Non réactif) ou score de Blantyre\n- Pupilles, signes de localisation, posture anormale, fontanelle, raideur de nuque\n- Signes de choc, respiration, température, glycémie\n- Interrogatoire : fièvre, convulsions, traumatisme, médicaments ou produits accessibles',
    examens: [
      ['premiere_intention', 'glycemie', 'Immédiatement.'],
      ['premiere_intention', 'tdr-paludisme', 'Neuropaludisme.'],
      ['premiere_intention', 'nfs', 'Anémie, infection.'],
      ['gravite', 'lcr', 'Méningite (après stabilisation, en l’absence d’hypertension intracrânienne).'],
      ['premiere_intention', 'ionogramme', 'Troubles ioniques.'],
      ['gravite', 'scanner-cerebral', 'Traumatisme, signes de localisation.'],
      ['premiere_intention', 'hemocultures', 'Sepsis, méningite.'],
    ],
    scores: ['blantyre', 'glasgow'],
    differentiels: [
      ['paludisme-grave-enfant', 'Fièvre, TDR positif.'],
      ['meningite-bacterienne-enfant', 'Raideur de nuque, LCR.'],
      ['intoxications-enfant', 'Produit accessible, pupilles.'],
      ['etat-de-mal-convulsif-enfant', 'Crises infracliniques.'],
      ['traumatisme-cranien', 'Notion de chute, lésions.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Neuropaludisme (première cause), méningites\n- Hypoglycémie, intoxications, traumatismes',
    principes: [
      [
        'Stabilisation (ABC)',
        'Protéger le cerveau.',
        '- Voies aériennes, **position latérale de sécurité**, oxygène\n- Traitement du choc\n- **Glucose 10 %** 5 mL/kg IV si glycémie < 2,5 mmol/L (ou non mesurable)\n- Convulsions : **diazépam** ou midazolam',
      ],
      [
        'Traitement probabiliste',
        'Ne pas retarder.',
        '- **Artésunate** si TDR positif (ou en zone d’endémie sans test)\n- **Ceftriaxone** 100 mg/kg si méningite possible\n- Naloxone si suspicion d’opioïdes',
      ],
      [
        'Soins',
        'Prévenir les complications.',
        '- Tête surélevée à 30°, surveillance horaire (conscience, pupilles, glycémie, température)\n- Sonde gastrique, soins des yeux et de la bouche, changements de position',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['diazepam', 'premiere', 'Convulsions'],
      ['artesunate', 'premiere', 'Neuropaludisme'],
      ['ceftriaxone', 'premiere', 'Méningite possible'],
      ['naloxone', 'alternative', 'Intoxication aux opioïdes'],
      ['mannitol', 'adjuvant', 'Hypertension intracrânienne'],
    ],
    complications: [
      {
        nom: 'Inhalation et pneumonie',
        fiche: 'pneumonie-enfant',
        description: 'Perte des réflexes.',
        traitement: '- PLS, aspiration, antibiotiques',
        clinique: '- Encombrement',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Engagement cérébral',
        description: 'Hypertension intracrânienne.',
        traitement: '- Mannitol, tête surélevée',
        clinique: '- Mydriase, bradycardie, HTA',
        paraclinique: '',
      },
      {
        nom: 'Séquelles neurologiques',
        description: 'Coma prolongé.',
        traitement: '- Rééducation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Dépend de la cause et de la rapidité de prise en charge',
    urgences: ['paludisme-grave-urgence', 'syndrome-meninge-febrile', 'traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Troubles de la conscience', 'tres_frequent'],
      ['Convulsions', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'WHO guidelines for malaria',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- PLS, glycémie, glucose, diazépam, artésunate et ceftriaxone pré-transfert', '- Tout coma'],
      hgr: ['- Bilan, PL, traitement de la cause, surveillance', '- Besoin de ventilation, neurochirurgie'],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {
      'paludisme-grave-urgence': 'Enfant fébrile inconscient',
      'syndrome-meninge-febrile': 'Coma fébrile avec raideur de nuque ou fontanelle bombée',
      'traumatisme-cranien-grave-urgence': 'Coma après une chute ou un accident',
    },
    formes: [
      {
        nom: 'Coma fébrile',
        type: 'commune',
        description: 'Neuropaludisme ou méningite.',
        terrain: '- Enfant < 5 ans',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Blantyre ≤ 2, convulsions',
        paraclinique: '- TDR, LCR',
        etiologies: '- Paludisme, méningite',
        syndromes: ['syndrome-confusionnel', 'syndrome-convulsif'],
        examens: [['glycemie', 'Hypoglycémie']],
      },
      {
        nom: 'Coma non fébrile',
        type: 'etiologique',
        description: 'Métabolique, toxique ou traumatique.',
        terrain: '- Accès à des produits toxiques, chute',
        fonctionnels: '',
        generaux: '',
        physiques: '- Pupilles anormales, signes de localisation',
        paraclinique: '- Glycémie, scanner',
        etiologies: '- Intoxication, traumatisme, hypoglycémie',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Intoxications enfant
  {
    ...URGPED,
    slug: 'intoxications-enfant',
    nom: 'Intoxications de l’enfant (pétrole, médicaments)',
    resume:
      'Ingestion accidentelle chez l’enfant de 1 à 5 ans (pétrole, médicaments, produits ménagers, pesticides) : ne pas faire vomir ; pétrole = risque de pneumopathie ; charbon activé si toxique adsorbable < 1 h ; antidotes ; prévention par le stockage sécurisé.',
    definition:
      'Exposition accidentelle (le plus souvent ingestion) à une substance toxique chez l’enfant : hydrocarbures (pétrole lampant, essence), médicaments (paracétamol, fer, antipaludiques, antidépresseurs), caustiques, organophosphorés, plantes.',
    physiopathologie:
      '## Mécanismes\n- **Pétrole** : faible toxicité digestive, mais **inhalation** : pneumopathie chimique grave\n- **Caustiques** (soude, eau de Javel) : brûlures œsophagiennes\n- **Fer** : atteinte digestive, choc, hépatotoxicité\n- **Paracétamol** : hépatotoxicité retardée\n- **Organophosphorés** : syndrome cholinergique',
    diagnostic:
      '## Démarche\n- Produit, quantité, heure, emballage ; souvent bouteille de boisson réutilisée\n- ABC, conscience, glycémie, pupilles, odeur\n\n## Pétrole\n- Toux, vomissements, polypnée, fièvre, crépitants, cyanose dans les heures suivant l’ingestion\n\n## Caustiques\n- Brûlures buccales, hypersalivation, dysphagie, vomissements sanglants',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Pneumopathie au pétrole.'],
      ['gravite', 'radiographie-thoracique', 'Pétrole : opacités à 6 h.'],
      ['premiere_intention', 'bilan-hepatique', 'Paracétamol, fer.'],
      ['premiere_intention', 'ecg', 'Antidépresseurs, chloroquine.'],
      ['gravite', 'endoscopie-digestive-haute', 'Caustiques (12–48 h).'],
    ],
    scores: ['glasgow', 'dose-ponderale'],
    differentiels: [
      ['pneumonie-enfant', 'Fièvre et toux sans notion d’ingestion.'],
      ['coma-enfant', 'Autres causes de coma.'],
      ['meningite-bacterienne-enfant', 'Fièvre, raideur.'],
    ],
    etiologies:
      '## Facteurs\n- Enfant de 1 à 5 ans, produits à portée de main, pétrole stocké dans des bouteilles de boisson\n- Médicaments non rangés, pesticides au domicile',
    principes: [
      [
        'Mesures générales',
        'Ne pas aggraver.',
        '- **Ne pas faire vomir**, ne pas donner de lait ni d’huile\n- ABC, oxygène, glycémie\n- Décontamination cutanée (pesticides) : déshabiller, laver',
      ],
      [
        'Selon le produit',
        'Traiter.',
        '- **Pétrole** : surveillance 6 à 24 h, oxygène, pas d’antibiotique systématique (sauf surinfection)\n- **Caustiques** : à jeun, antalgiques, endoscopie, pas de neutralisation\n- **Médicaments adsorbables** < 1 h : **charbon activé** 1 g/kg (pas pour le fer, les hydrocarbures, les caustiques)\n- **Paracétamol** : **N-acétylcystéine**\n- **Organophosphorés** : **atropine** 0,02 mg/kg, à doubler jusqu’à assèchement\n- **Opioïdes** : naloxone ; **raticides** : vitamine K1\n- **Fer** : déféroxamine si intoxication sévère (centre spécialisé)',
      ],
      [
        'Prévention',
        'Éviter la récidive.',
        '- Ranger médicaments et produits hors de portée, ne jamais transvaser dans des bouteilles de boisson, bouchons de sécurité',
      ],
    ],
    molecules: [
      ['charbon-active', 'premiere', 'Toxiques adsorbables < 1 h'],
      ['acetylcysteine', 'premiere', 'Paracétamol'],
      ['atropine', 'premiere', 'Organophosphorés'],
      ['naloxone', 'premiere', 'Opioïdes'],
      ['vitamine-k1-phytomenadione', 'premiere', 'Raticides anticoagulants'],
      ['oxygene', 'premiere', 'Pneumopathie au pétrole'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['diazepam', 'adjuvant', 'Convulsions'],
    ],
    complications: [
      {
        nom: 'Pneumopathie aux hydrocarbures',
        description: 'Inhalation de pétrole.',
        traitement: '- Oxygène, ventilation',
        clinique: '- Détresse respiratoire, fièvre',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Sténose œsophagienne',
        description: 'Caustiques.',
        traitement: '- Dilatations',
        clinique: '- Dysphagie',
        paraclinique: '- Endoscopie',
      },
      {
        nom: 'Insuffisance hépatique',
        description: 'Paracétamol, fer.',
        traitement: '- N-acétylcystéine',
        clinique: '- Ictère',
        paraclinique: '- TP',
      },
    ],
    evolution:
      '## Pronostic\n- Bon dans la plupart des cas ; grave pour les caustiques, le pétrole inhalé, le fer et les organophosphorés',
    urgences: [],
    symptomes: [
      ['Vomissements', 'frequent'],
      ['Toux', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Tachypnée', 'occasionnel'],
      ['Hypersalivation', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Ne pas faire vomir, ABC, glycémie, transfert',
        '- Toute ingestion symptomatique, caustique, pétrole, médicaments en quantité',
      ],
      hgr: ['- Surveillance, charbon activé, antidotes', '- Détresse respiratoire, coma'],
      tert: ['- Réanimation, endoscopie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ingestion de pétrole',
        type: 'commune',
        description: 'Bouteille de boisson contenant du pétrole.',
        terrain: '- Enfant de 1 à 3 ans',
        fonctionnels: '- Toux, vomissements',
        generaux: '- Fièvre secondaire',
        physiques: '- Odeur de pétrole, polypnée, crépitants',
        paraclinique: '- Opacités basales',
        etiologies: '- Hydrocarbures',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Intoxication médicamenteuse',
        type: 'etiologique',
        description: 'Médicaments du foyer.',
        terrain: '- Jeune enfant',
        fonctionnels: '- Somnolence, vomissements',
        generaux: '',
        physiques: '- Selon le produit',
        paraclinique: '- ECG, glycémie',
        etiologies: '- Paracétamol, fer, antipaludiques',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Brûlures enfant
  {
    ...URGPED,
    slug: 'brulures-enfant',
    nom: 'Brûlures de l’enfant',
    resume:
      'Accidents domestiques fréquents (eau chaude, feu, pétrole) : refroidir à l’eau 20 min, évaluer surface (table de Lund et Browder, paume = 1 %) et profondeur ; réhydratation IV si > 10 % (Parkland 3–4 mL/kg/% + entretien) ; antalgie, pansements, prévention du tétanos.',
    definition:
      'Lésion de la peau et des tissus par la chaleur, l’électricité ou un produit chimique ; grave chez l’enfant au-delà de 10 % de la surface corporelle, ou selon la localisation (visage, mains, périnée, circulaires).',
    physiopathologie:
      '## Mécanismes\n- Destruction cutanée, fuite plasmatique massive dans les 24–48 premières heures : choc hypovolémique\n- Perte de la barrière : infections, hypothermie\n- Brûlures profondes : rétractions, séquelles',
    diagnostic:
      '## Évaluation\n- **Surface** : paume de l’enfant (doigts compris) = 1 % ; table de Lund et Browder (tête plus grande chez l’enfant)\n- **Profondeur** : 1er degré (rougeur), 2e degré superficiel (phlyctènes, douloureux), 2e profond et 3e degré (blanc ou brun, peu douloureux)\n- **Gravité** : > 10 % (enfant), visage, mains, pieds, périnée, articulations, brûlures circulaires, inhalation de fumées, électrisation, âge < 1 an, maltraitance suspectée',
    examens: [
      ['premiere_intention', 'nfs', 'Hémoconcentration, anémie secondaire.'],
      ['premiere_intention', 'ionogramme', 'Brûlures étendues.'],
      ['premiere_intention', 'glycemie', 'Jeune enfant.'],
      ['gravite', 'hemocultures', 'Sepsis.'],
      ['pretherapeutique', 'groupage-rai', 'Brûlures étendues.'],
    ],
    scores: ['besoins-hydriques', 'dose-ponderale'],
    differentiels: [
      ['maltraitance-enfant', 'Brûlures en chaussette, par cigarette, récit incohérent.'],
      ['toxidermies-graves', 'Décollement sans notion de brûlure, prise de médicament.'],
      ['Épidermolyse staphylococcique', 'Décollement superficiel fébrile du nourrisson.'],
    ],
    etiologies:
      '## Causes\n- Liquides chauds (eau, bouillie, huile), foyers au sol, lampes à pétrole\n- Électricité, produits chimiques\n- Épilepsie non traitée (chute dans le feu)',
    principes: [
      [
        'Premiers gestes',
        'Limiter la profondeur.',
        '- Éteindre, retirer les vêtements non collés, **refroidir à l’eau tiède (15–25 °C) pendant 20 minutes** (éviter l’hypothermie)\n- Couvrir d’un linge propre ; pas de produits traditionnels (huile, dentifrice)',
      ],
      [
        'Réanimation',
        'Prévenir le choc.',
        '- Brûlure > 10 % : **Ringer lactate** selon Parkland (3–4 mL × kg × % SCB sur 24 h, moitié dans les 8 premières heures) **+ besoins d’entretien** avec glucose\n- Objectif : diurèse ≥ 1 mL/kg/h\n- Voies aériennes : inhalation de fumées, brûlure du visage (intubation précoce)',
      ],
      [
        'Antalgie et soins',
        'Soulager et cicatriser.',
        '- **Morphine** ou **kétamine** pour les pansements, **paracétamol**\n- Nettoyage, **sulfadiazine argentique** (> 2 mois) ou pansements gras ; pansements réguliers\n- **Prévention du tétanos** (vaccin, immunoglobulines)\n- Nutrition hyperprotéique, fer, vitamines\n- Brûlures profondes : greffes ; kinésithérapie, attelles',
      ],
      [
        'Prévention',
        'Réduire les accidents.',
        '- Foyers surélevés, éloigner les enfants de la cuisine, ranger le pétrole',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Réanimation liquidienne'],
      ['morphine', 'premiere', 'Douleur, pansements'],
      ['ketamine', 'alternative', 'Analgésie pour les pansements'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['sulfadiazine-argentique', 'premiere', 'Brûlures profondes'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Prévention du tétanos'],
      ['anatoxines-tetanique-diphterique', 'adjuvant', 'Rappel antitétanique'],
      ['ceftriaxone', 'adjuvant', 'Infection documentée'],
    ],
    complications: [
      {
        nom: 'Choc hypovolémique',
        fiche: 'choc-enfant',
        description: 'Fuite plasmatique.',
        traitement: '- Remplissage selon Parkland',
        clinique: '- Oligurie, tachycardie',
        paraclinique: '- Diurèse',
      },
      {
        nom: 'Infection et sepsis',
        fiche: 'sepsis-enfant',
        description: 'Perte de la barrière cutanée.',
        traitement: '- Soins locaux, antibiotiques',
        clinique: '- Fièvre, plaie purulente',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Rétractions et séquelles',
        description: 'Brûlures profondes.',
        traitement: '- Greffes, rééducation',
        clinique: '- Brides',
        paraclinique: '',
      },
      {
        nom: 'Tétanos',
        fiche: 'tetanos',
        description: 'Plaie non vaccinée.',
        traitement: '- Prévention',
        clinique: '- Trismus',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée au-delà de 30–40 % de surface chez l’enfant en contexte limité ; séquelles fonctionnelles et esthétiques fréquentes',
    urgences: [],
    symptomes: [
      ['Brûlure cutanée', 'tres_frequent'],
      ['Hypotension', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Refroidissement, couverture, antalgie, vaccin antitétanique, transfert si > 10 % ou zones à risque',
        '- Brûlure grave',
      ],
      hgr: ['- Réanimation liquidienne, pansements, nutrition', '- Brûlure > 30 %, inhalation, greffes'],
      tert: ['- Centre des brûlés, chirurgie plastique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Brûlure par liquide chaud',
        type: 'commune',
        description: 'Ébouillantement domestique.',
        terrain: '- Enfant de 1 à 4 ans',
        fonctionnels: '- Douleur intense',
        generaux: '',
        physiques: '- Phlyctènes, 2e degré superficiel',
        paraclinique: '',
        etiologies: '- Eau, bouillie chaude',
        syndromes: [],
      },
      {
        nom: 'Brûlure étendue',
        type: 'gravite',
        description: 'Plus de 10 % de surface.',
        terrain: '- Feu, pétrole',
        fonctionnels: '- Douleur, soif',
        generaux: '- Tachycardie, hypothermie',
        physiques: '- Lésions profondes étendues',
        paraclinique: '- Hémoconcentration',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Noyade
  {
    ...URGPED,
    slug: 'noyade',
    nom: 'Noyade',
    resume:
      'Détresse respiratoire après immersion : sortir de l’eau, 5 insufflations initiales puis RCP si absence de respiration ; oxygène, surveillance 6–8 h même si l’enfant va bien ; prévention (surveillance, clôtures des puits, gilets).',
    definition:
      'Processus entraînant une détresse respiratoire par submersion ou immersion dans un liquide ; issue fatale ou non fatale.',
    physiopathologie:
      '## Mécanismes\n- Inhalation d’eau : altération du surfactant, œdème pulmonaire lésionnel, hypoxémie\n- Hypoxie cérébrale et arrêt cardiaque\n- Hypothermie',
    diagnostic:
      '## Évaluation\n- Durée de submersion, température de l’eau, traumatisme associé (plongeon : rachis cervical)\n- Conscience, respiration, pouls, SpO2, température\n- Toux, crépitants, détresse respiratoire (apparition possible jusqu’à 6–8 h)',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxémie.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['gravite', 'radiographie-thoracique', 'Œdème pulmonaire, inhalation.'],
      ['gravite', 'gaz-du-sang', 'Acidose.'],
      ['premiere_intention', 'ionogramme', 'Troubles ioniques.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['epilepsie-enfant', 'Crise ayant provoqué la noyade.'],
      ['maltraitance-enfant', 'Circonstances incohérentes.'],
      ['traumatisme-cranien', 'Plongeon, chute.'],
    ],
    etiologies:
      '## Facteurs\n- Jeune enfant non surveillé (puits, bassines, rivières, lacs, fleuve)\n- Épilepsie, absence d’apprentissage de la nage\n- Naufrages (transport fluvial et lacustre)',
    principes: [
      [
        'Réanimation sur place',
        'Restaurer l’oxygénation.',
        '- Sortir de l’eau, **5 insufflations initiales** puis RCP (15:2 chez l’enfant pour les secouristes formés) si absence de respiration\n- Ne pas chercher à « vider l’eau »\n- Immobilisation cervicale si traumatisme suspecté',
      ],
      [
        'À l’hôpital',
        'Traiter l’hypoxie.',
        '- **Oxygène**, CPAP ou ventilation si détresse\n- Réchauffement, glucose\n- Surveillance au moins 6 à 8 heures même si asymptomatique\n- Pas d’antibiotiques systématiques (sauf eau très souillée et signes d’infection)',
      ],
      [
        'Prévention',
        'Première cause de décès accidentel chez l’enfant dans de nombreux pays.',
        '- Surveillance constante des jeunes enfants, couvercles des puits et réservoirs, gilets de sauvetage, apprentissage de la nage, garderies communautaires',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['adrenaline-epinephrine', 'premiere', 'Arrêt cardiaque'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['ceftriaxone', 'adjuvant', 'Pneumonie secondaire'],
    ],
    complications: [
      {
        nom: 'Œdème pulmonaire et SDRA',
        description: 'Lésion alvéolaire.',
        traitement: '- Oxygène, ventilation',
        clinique: '- Détresse respiratoire',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Encéphalopathie anoxique',
        description: 'Submersion prolongée.',
        traitement: '- Soins de support',
        clinique: '- Coma, convulsions',
        paraclinique: '',
      },
      {
        nom: 'Pneumonie d’inhalation',
        fiche: 'pneumonie-enfant',
        description: 'Eau souillée.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre secondaire',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si l’enfant est conscient à l’arrivée ; réservé après une submersion prolongée ou une RCP longue',
    urgences: [],
    symptomes: [
      ['Dyspnée', 'frequent'],
      ['Toux', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Cyanose', 'frequent'],
      ['Hypothermie', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- RCP, oxygène, réchauffement, transfert',
        '- Toute noyade avec symptômes ou submersion prolongée',
      ],
      hgr: ['- Oxygène, surveillance 6–8 h, radiographie', '- Ventilation'],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Noyade avec détresse respiratoire',
        type: 'commune',
        description: 'Inhalation d’eau.',
        terrain: '- Jeune enfant non surveillé',
        fonctionnels: '- Toux, gêne respiratoire',
        generaux: '- Hypothermie',
        physiques: '- Crépitants, polypnée',
        paraclinique: '- SpO2 basse',
        etiologies: '- Submersion',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Noyade avec arrêt cardiorespiratoire',
        type: 'gravite',
        description: 'Submersion prolongée.',
        terrain: '- Retard de sauvetage',
        fonctionnels: '',
        generaux: '',
        physiques: '- Absence de respiration et de pouls',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== ACR enfant
  {
    ...URGPED,
    slug: 'arret-cardiorespiratoire-enfant',
    nom: 'Arrêt cardiorespiratoire de l’enfant',
    resume:
      'Le plus souvent d’origine respiratoire chez l’enfant : 5 insufflations initiales, compressions 15:2 (100–120/min, 1/3 du thorax), adrénaline 10 µg/kg toutes les 3–5 min ; rechercher les causes réversibles (hypoxie, hypovolémie, hypoglycémie, hyperkaliémie, hypothermie, pneumothorax).',
    definition:
      'Absence de signes de vie (pas de réponse, pas de respiration normale, pas de pouls) chez l’enfant, généralement secondaire à une hypoxie ou à un choc (rarement d’origine cardiaque primaire).',
    physiopathologie:
      '## Mécanismes\n- Hypoxie (obstruction, noyade, pneumonie), choc (hypovolémie, sepsis) : bradycardie puis asystolie\n- Rythmes : asystolie ou activité électrique sans pouls le plus souvent ; fibrillation ventriculaire rare',
    diagnostic:
      '## Reconnaissance\n- Pas de réponse, pas de respiration normale (gasps)\n- Pouls absent ou < 60/min avec signes de mauvaise perfusion chez le nourrisson et l’enfant : débuter les compressions\n- Ne pas perdre plus de 10 secondes à chercher le pouls',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie (cause réversible).'],
      ['premiere_intention', 'ecg', 'Rythme (scope).'],
      ['premiere_intention', 'ionogramme', 'Hyperkaliémie.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['coma-enfant', 'Respiration et pouls présents.'],
      ['choc-enfant', 'Pouls présent mais faible.'],
    ],
    etiologies:
      '## Causes réversibles (4 H, 4 T)\n- **H** : Hypoxie, Hypovolémie, Hypo-/hyperkaliémie et hypoglycémie, Hypothermie\n- **T** : Tension (pneumothorax), Tamponnade, Toxiques, Thrombose\n- En RDC : pneumonie, paludisme grave, déshydratation, noyade, obstruction',
    principes: [
      [
        'RCP pédiatrique de base',
        'Oxygéner et perfuser.',
        '- Sécurité, stimulation, appel à l’aide\n- Libérer les voies aériennes, **5 insufflations** initiales (ballon et masque avec oxygène)\n- **15 compressions / 2 insufflations**, 100–120/min, enfoncement d’1/3 du thorax (2 doigts ou 2 pouces chez le nourrisson, 1 ou 2 mains chez l’enfant)\n- Minimiser les interruptions',
      ],
      [
        'RCP avancée',
        'Restaurer une circulation.',
        '- Voie veineuse ou **intra-osseuse**\n- **Adrénaline** 10 µg/kg (0,1 mL/kg de la solution à 0,1 mg/mL) toutes les 3–5 min\n- Rythme choquable (FV/TV sans pouls) : défibrillation 4 J/kg, **amiodarone** 5 mg/kg après le 3e choc\n- Traiter les causes réversibles : glucose 10 % 2–5 mL/kg, remplissage 10 mL/kg, exsufflation, réchauffement',
      ],
      [
        'Après la reprise',
        'Protéger le cerveau.',
        '- Oxygénation normale (SpO2 94–98 %), éviter l’hyperthermie, glycémie, traitement des convulsions\n- Arrêt de la réanimation après 20–30 min sans reprise, selon le contexte, avec accompagnement de la famille',
      ],
    ],
    molecules: [
      ['adrenaline-epinephrine', 'premiere', '10 µg/kg toutes les 3–5 min'],
      ['amiodarone', 'deuxieme', 'Rythme choquable'],
      ['oxygene', 'premiere', 'Ventilation'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['ringer-lactate', 'premiere', 'Hypovolémie'],
      ['atropine', 'alternative', 'Bradycardie vagale'],
    ],
    complications: [
      {
        nom: 'Encéphalopathie post-anoxique',
        description: 'Arrêt prolongé.',
        traitement: '- Soins post-réanimation',
        clinique: '- Coma, convulsions',
        paraclinique: '',
      },
      {
        nom: 'Fractures de côtes et pneumothorax',
        description: 'Compressions.',
        traitement: '- Drainage si besoin',
        clinique: '',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Survie faible pour les arrêts extra-hospitaliers ; meilleure si une RCP précoce est débutée par les témoins',
    urgences: [],
    symptomes: [
      ['Troubles de la conscience', 'tres_frequent'],
      ['Cyanose', 'frequent'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'AHA — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- RCP de base au ballon, glucose, transfert si reprise', '- Toute reprise d’activité cardiaque'],
      hgr: ['- RCP avancée, adrénaline, voie intra-osseuse', ''],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Arrêt d’origine respiratoire',
        type: 'commune',
        description: 'Hypoxie progressive.',
        terrain: '- Pneumonie, obstruction, noyade',
        fonctionnels: '',
        generaux: '',
        physiques: '- Gasps, bradycardie puis asystolie',
        paraclinique: '',
        etiologies: '- Hypoxie',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Arrêt par choc',
        type: 'etiologique',
        description: 'Hypovolémie, sepsis.',
        terrain: '- Déshydratation, paludisme grave',
        fonctionnels: '',
        generaux: '',
        physiques: '- Pouls imperceptible',
        paraclinique: '',
        etiologies: '- Choc',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Déshydratation sévère
  {
    ...URGPED,
    slug: 'deshydratation-severe-enfant',
    nom: 'Déshydratation sévère de l’enfant',
    resume:
      'Au moins 2 signes : léthargie, yeux enfoncés, ne peut pas boire ou boit difficilement, pli cutané très lent : plan C (Ringer lactate 100 mL/kg en 3 à 6 h selon l’âge), réévaluation, SRO dès que possible, zinc ; protocole spécifique si malnutrition sévère.',
    definition:
      'Perte hydrique importante (> 10 % du poids) avec signes cliniques de gravité selon la classification OMS/PCIME, due le plus souvent à une diarrhée aiguë ou au choléra.',
    physiopathologie:
      '## Mécanismes\n- Pertes digestives d’eau et d’électrolytes (diarrhée, vomissements)\n- Hypovolémie, choc, acidose, insuffisance rénale fonctionnelle, hypoglycémie',
    diagnostic:
      '## Classification OMS (au moins 2 signes)\n- **Léthargie** ou inconscience\n- **Yeux enfoncés**\n- **Ne peut pas boire** ou boit difficilement\n- **Pli cutané** s’effaçant très lentement (> 2 s)\n\n## Rechercher\n- Choc (extrémités froides, TRC > 3 s, pouls faible), malnutrition sévère, sang dans les selles, fièvre',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['gravite', 'ionogramme', 'Natrémie, kaliémie.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['etiologique', 'tdr-cholera', 'Contexte épidémique.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
    ],
    scores: ['deshydratation-oms', 'besoins-hydriques'],
    differentiels: [
      ['choc-enfant', 'Choc d’autre origine (sepsis).'],
      ['kwashiorkor', 'Malnutrition sévère : signes de déshydratation trompeurs.'],
      ['acidocetose-diabetique-enfant', 'Polyurie, glycémie élevée.'],
    ],
    etiologies:
      '## Causes\n- Gastro-entérite (rotavirus), choléra, shigellose\n- Vomissements, fièvre, coup de chaleur',
    principes: [
      [
        'Plan C (OMS)',
        'Restaurer la volémie.',
        '- **Ringer lactate** (ou NaCl 0,9 %) **100 mL/kg** :\n  - < 12 mois : 30 mL/kg en 1 h, puis 70 mL/kg en 5 h\n  - ≥ 12 mois : 30 mL/kg en 30 min, puis 70 mL/kg en 2 h 30\n- Répéter la 1re phase si le pouls reste faible\n- Réévaluer toutes les 1–2 h ; SRO 5 mL/kg/h dès que l’enfant peut boire\n- Pas de voie veineuse : sonde nasogastrique 20 mL/kg/h de SRO pendant 6 h',
      ],
      [
        'Malnutrition sévère',
        'Éviter la surcharge.',
        '- Pas de plan C classique : **ReSoMal** par voie orale ou sonde ; si choc, 15 mL/kg en 1 h de Ringer lactate glucosé puis réévaluation',
      ],
      [
        'Traitements associés',
        'Accélérer la guérison.',
        '- **Zinc** 10–20 mg/j 10–14 jours\n- Antibiotiques si choléra ou dysenterie\n- Poursuite de l’alimentation et de l’allaitement',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Plan C'],
      ['chlorure-de-sodium-0-9', 'alternative', 'Plan C'],
      ['sro', 'premiere', 'Relais oral'],
      ['resomal', 'premiere', 'Malnutrition sévère'],
      ['zinc', 'premiere', '10–14 jours'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['azithromycine', 'adjuvant', 'Choléra'],
    ],
    complications: [
      {
        nom: 'Choc hypovolémique',
        fiche: 'choc-enfant',
        description: 'Pertes massives.',
        traitement: '- Remplissage rapide',
        clinique: '- Pouls filant, extrémités froides',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hypoperfusion.',
        traitement: '- Réhydratation',
        clinique: '- Anurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Surcharge',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Réhydratation trop rapide, malnutrition.',
        traitement: '- Ralentir, furosémide',
        clinique: '- Œdèmes, crépitants',
        paraclinique: '',
      },
      {
        nom: 'Troubles ioniques et convulsions',
        fiche: 'dyskaliemies',
        description: 'Dysnatrémies, hypokaliémie.',
        traitement: '- Correction',
        clinique: '- Convulsions, faiblesse',
        paraclinique: '- Ionogramme',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent avec le plan C bien conduit ; mortalité élevée si retard ou malnutrition',
    urgences: ['deshydratation-severe-enfant'],
    symptomes: [
      ['Diarrhée', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Oligurie', 'frequent'],
      ['Hypotension', 'occasionnel'],
    ],
    sources: [
      'The treatment of diarrhoea: a manual for physicians and other senior health workers',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Plan C si perfusion possible, sinon SRO par sonde et transfert',
        '- Malnutrition sévère, échec',
      ],
      hgr: ['- Plan C, surveillance, ionogramme', ''],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {
      'deshydratation-severe-enfant':
        'Enfant léthargique, yeux enfoncés, ne peut pas boire, pli cutané très lent',
    },
    formes: [
      {
        nom: 'Déshydratation sévère par gastro-entérite',
        type: 'commune',
        description: 'Diarrhée aqueuse et vomissements.',
        terrain: '- Nourrisson',
        fonctionnels: '- Ne peut pas boire',
        generaux: '- Léthargie',
        physiques: '- Yeux enfoncés, pli très lent',
        paraclinique: '- Hypoglycémie possible',
        etiologies: '- Rotavirus, choléra',
        syndromes: ['syndrome-de-deshydratation-extracellulaire', 'syndrome-choleriforme'],
      },
      {
        nom: 'Déshydratation de l’enfant malnutri',
        type: 'terrain',
        description: 'Signes trompeurs, risque de surcharge.',
        terrain: '- Malnutrition aiguë sévère',
        fonctionnels: '- Diarrhée',
        generaux: '- Hypothermie',
        physiques: '- Yeux enfoncés, pli peu fiable',
        paraclinique: '- Hypoglycémie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hypoglycémie enfant
  {
    ...URGPED,
    slug: 'hypoglycemie-enfant',
    nom: 'Hypoglycémie de l’enfant',
    resume:
      'Glycémie < 2,5 mmol/L (0,45 g/L) chez l’enfant malade (paludisme grave, sepsis, malnutrition, jeûne, quinine) : glucose 10 % 5 mL/kg IV (ou par sonde/sucre sublingual), puis alimentation ou perfusion glucosée ; à rechercher systématiquement.',
    definition:
      'Glycémie inférieure à 2,5 mmol/L (0,45 g/L) chez l’enfant malade (3 mmol/L chez l’enfant malnutri selon certains protocoles), urgence fréquente et sous-diagnostiquée.',
    physiopathologie:
      '## Mécanismes\n- Jeûne et réserves faibles (jeune enfant, malnutrition)\n- Consommation accrue (paludisme, sepsis, fièvre)\n- Hyperinsulinisme (quinine, diabète traité), insuffisance hépatique, intoxications (alcool)',
    diagnostic:
      '## Clinique\n- Léthargie, coma, convulsions, sueurs, tremblements, hypothermie\n- Souvent masquée par la maladie causale\n\n## Glycémie capillaire\n- Systématique chez tout enfant gravement malade, comateux, convulsant ou malnutri\n- En l’absence de glucomètre : traiter comme une hypoglycémie',
    examens: [
      ['confirmation', 'glycemie', '< 2,5 mmol/L.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme grave.'],
      ['etiologique', 'hemocultures', 'Sepsis.'],
      ['etiologique', 'bandelette-urinaire', 'Cétonurie (jeûne), glycosurie.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['convulsions-febriles', 'Glycémie normale.'],
      ['coma-enfant', 'Autre cause de coma.'],
      ['meningite-bacterienne-enfant', 'Fièvre, raideur.'],
    ],
    etiologies:
      '## Causes\n- Paludisme grave, quinine\n- Sepsis, malnutrition, jeûne prolongé, diarrhée\n- Diabète traité, intoxications (alcool, sulfamides)\n- Insuffisance surrénalienne, hyperinsulinisme (rare)',
    principes: [
      [
        'Correction immédiate',
        'Protéger le cerveau.',
        '- **Glucose 10 %** 5 mL/kg IV en 2–3 min (2 mL/kg chez le nouveau-né)\n- Sans voie veineuse : glucose 10 % ou eau sucrée par sonde nasogastrique, ou **sucre sublingual** (1 cuillère à café humidifiée sous la langue)\n- Contrôle 30 min plus tard',
      ],
      [
        'Prévenir la récidive',
        'Maintenir la glycémie.',
        '- Alimentation dès que possible (lait, bouillie)\n- Sinon perfusion de glucose 10 % (entretien)\n- Repas fréquents chez l’enfant malnutri, F-75 toutes les 2 h la nuit',
      ],
      [
        'Traiter la cause',
        'Supprimer le mécanisme.',
        '- Antipaludique (préférer l’artésunate à la quinine), antibiotiques, glucagon si insulinothérapie',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', '5 mL/kg IV'],
      ['glucose-solute', 'alternative', 'Selon la concentration disponible (diluer)'],
      ['glucagon', 'alternative', 'Enfant diabétique sous insuline'],
      ['artesunate', 'adjuvant', 'Paludisme grave'],
    ],
    complications: [
      {
        nom: 'Convulsions et coma',
        fiche: 'coma-enfant',
        description: 'Hypoglycémie profonde.',
        traitement: '- Glucose',
        clinique: '- Crises',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Séquelles neurologiques',
        description: 'Hypoglycémie prolongée.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Facteur indépendant de mortalité dans le paludisme grave et la malnutrition ; correction rapide = amélioration spectaculaire',
    urgences: ['paludisme-grave-urgence'],
    symptomes: [
      ['Troubles de la conscience', 'tres_frequent'],
      ['Convulsions', 'frequent'],
      ['Sueurs', 'occasionnel'],
      ['Tremblements', 'occasionnel'],
      ['Hypothermie', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'WHO guidelines for malaria',
      'Protocole national PCIMA',
    ],
    niveaux: {
      cs: [
        '- Glycémie capillaire, glucose 10 % ou sucre sublingual, alimentation, transfert',
        '- Cause grave, récidive',
      ],
      hgr: ['- Perfusion glucosée, traitement de la cause', ''],
      tert: ['- Endocrinologie pédiatrique (hypoglycémies récidivantes)', ''],
    },
    alertes: { 'paludisme-grave-urgence': 'Enfant fébrile somnolent ou convulsant : vérifier la glycémie' },
    formes: [
      {
        nom: 'Hypoglycémie du paludisme grave',
        type: 'commune',
        description: 'Fréquente et grave.',
        terrain: '- Enfant < 5 ans, quinine',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Coma, convulsions',
        paraclinique: '- Glycémie basse, TDR positif',
        etiologies: '- Paludisme',
        syndromes: ['syndrome-convulsif'],
        examens: [['glycemie', 'Diagnostic']],
      },
      {
        nom: 'Hypoglycémie de l’enfant malnutri',
        type: 'terrain',
        description: 'Jeûne, hypothermie.',
        terrain: '- Malnutrition sévère',
        fonctionnels: '- Léthargie',
        generaux: '- Hypothermie',
        physiques: '- Somnolence',
        paraclinique: '- Glycémie < 3 mmol/L',
        etiologies: '- Réserves épuisées',
        syndromes: [],
      },
    ],
  },

  // =================================================================== État de mal enfant
  {
    ...URGPED,
    slug: 'etat-de-mal-convulsif-enfant',
    nom: 'État de mal convulsif de l’enfant',
    resume:
      'Crise > 5 minutes ou crises répétées sans reprise de conscience : ABC, glycémie, diazépam ou midazolam (2 doses), puis phénobarbital 20 mg/kg ou phénytoïne/lévétiracétam ; rechercher paludisme grave, méningite, hypoglycémie, hyponatrémie.',
    definition:
      'Crise convulsive durant plus de 5 minutes, ou succession de crises sans retour à la conscience entre elles ; établi au-delà de 30 minutes.',
    physiopathologie:
      '## Mécanismes\n- Échec des mécanismes d’arrêt des crises\n- Souffrance neuronale, hypoxie, hyperthermie, acidose\n- Causes aiguës fréquentes chez l’enfant : paludisme grave, méningite, hypoglycémie',
    diagnostic:
      '## Évaluation\n- Durée de la crise, fièvre, antécédent d’épilepsie, traumatisme\n- ABC, glycémie, température, signes méningés, TDR\n- Crises subtiles chez le nourrisson',
    examens: [
      ['premiere_intention', 'glycemie', 'Immédiatement.'],
      ['premiere_intention', 'tdr-paludisme', 'Neuropaludisme.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie, hypocalcémie.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypocalcémie (nourrisson).'],
      ['gravite', 'lcr', 'Méningite (après stabilisation).'],
      ['gravite', 'scanner-cerebral', 'Traumatisme, signes de localisation.'],
    ],
    scores: ['blantyre', 'dose-ponderale'],
    differentiels: [
      ['Frissons, mouvements anormaux', 'Conscience conservée.'],
      ['Crises psychogènes', 'Adolescent, yeux fermés.'],
    ],
    etiologies:
      '## Causes\n- **Neuropaludisme**, **méningite**, encéphalite\n- Hypoglycémie, hyponatrémie, hypocalcémie\n- Épilepsie (arrêt du traitement), convulsions fébriles prolongées\n- Traumatisme crânien, intoxications, AVC drépanocytaire',
    principes: [
      [
        '0–5 min',
        'Stabiliser.',
        '- PLS, oxygène, aspiration, glycémie (glucose 10 % 5 mL/kg si basse), voie veineuse',
      ],
      [
        '5–10 min : benzodiazépine',
        'Arrêter la crise.',
        '- **Diazépam** 0,5 mg/kg intrarectal ou 0,3 mg/kg IV lent (maximum 10 mg)\n- Ou **midazolam** 0,3 mg/kg buccal/intranasal ou 0,15 mg/kg IV\n- Répéter une fois après 5–10 min si la crise persiste (2 doses au maximum)',
      ],
      [
        'Après 2 doses : 2e ligne',
        'Contrôler l’état de mal.',
        '- **Phénobarbital** 20 mg/kg IV en 20 min (ou IM)\n- Ou **phénytoïne** 20 mg/kg IV en 20 min (sous surveillance cardiaque), ou **lévétiracétam** 40–60 mg/kg\n- Échec : réanimation (midazolam en perfusion, ventilation)',
      ],
      [
        'Cause',
        'Traiter.',
        '- Artésunate, ceftriaxone selon le contexte ; correction ionique ; antipyrétiques',
      ],
    ],
    molecules: [
      ['diazepam', 'premiere', 'Première ligne'],
      ['midazolam', 'premiere', 'Première ligne'],
      ['phenobarbital', 'deuxieme', 'Deuxième ligne'],
      ['phenytoine', 'deuxieme', 'Deuxième ligne'],
      ['levetiracetam', 'deuxieme', 'Deuxième ligne'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['artesunate', 'adjuvant', 'Neuropaludisme'],
      ['ceftriaxone', 'adjuvant', 'Méningite possible'],
    ],
    complications: [
      {
        nom: 'Dépression respiratoire',
        description: 'Benzodiazépines et phénobarbital.',
        traitement: '- Ventilation au ballon',
        clinique: '- Apnées',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Séquelles neurologiques et épilepsie',
        fiche: 'epilepsie-enfant',
        description: 'État de mal prolongé.',
        traitement: '- Suivi',
        clinique: '',
        paraclinique: '- EEG',
      },
      {
        nom: 'Inhalation',
        fiche: 'pneumonie-enfant',
        description: 'Perte des réflexes.',
        traitement: '- PLS, antibiotiques',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause et de la durée ; mortalité élevée dans le neuropaludisme et les méningites',
    urgences: ['etat-de-mal-epileptique-urgence', 'paludisme-grave-urgence'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Troubles de la conscience', 'tres_frequent'],
      ['Fièvre', 'frequent'],
    ],
    sources: [
      'Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults',
      'Pocket book of hospital care for children (2e édition)',
      "Définition opérationnelle de l'état de mal épileptique",
    ],
    niveaux: {
      cs: [
        '- PLS, glycémie, diazépam rectal, artésunate et ceftriaxone pré-transfert',
        '- Toute crise > 5 min',
      ],
      hgr: ['- Benzodiazépines, phénobarbital, recherche de la cause', '- État de mal réfractaire'],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {
      'etat-de-mal-epileptique-urgence': 'Enfant qui convulse depuis plus de 5 minutes',
      'paludisme-grave-urgence': 'Convulsions répétées avec fièvre',
    },
    formes: [
      {
        nom: 'État de mal fébrile (neuropaludisme)',
        type: 'commune',
        description: 'Crises répétées fébriles.',
        terrain: '- Enfant de 1 à 5 ans',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Crises généralisées, coma',
        paraclinique: '- TDR positif, glycémie',
        etiologies: '- Paludisme grave',
        syndromes: ['syndrome-convulsif'],
        examens: [['glycemie', 'Cause métabolique']],
      },
      {
        nom: 'État de mal de l’enfant épileptique',
        type: 'etiologique',
        description: 'Arrêt du traitement.',
        terrain: '- Épilepsie connue',
        fonctionnels: '',
        generaux: '',
        physiques: '- Crises prolongées',
        paraclinique: '',
        etiologies: '- Mauvaise observance',
        syndromes: ['syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== Polytraumatisme enfant
  {
    ...URGPED,
    slug: 'polytraumatisme-enfant',
    nom: 'Polytraumatisme de l’enfant',
    resume:
      'Accidents de la route, chutes, violences : examen primaire ABCDE (voies aériennes avec protection cervicale, respiration, circulation et hémorragies, état neurologique, exposition), remplissage 10–20 mL/kg et transfusion précoce, imagerie, chirurgie.',
    definition:
      'Enfant présentant au moins deux lésions traumatiques dont l’une au moins menace le pronostic vital, ou un traumatisme à haute énergie.',
    physiopathologie:
      '## Particularités de l’enfant\n- Tête volumineuse : traumatismes crâniens fréquents\n- Thorax souple : contusions pulmonaires sans fractures de côtes\n- Organes abdominaux (rate, foie) peu protégés\n- Compensation hémodynamique longtemps efficace puis effondrement brutal (hypotension tardive)\n- Hypothermie rapide',
    diagnostic:
      '## Examen primaire (ABCDE)\n- **A** : voies aériennes + immobilisation cervicale\n- **B** : respiration (pneumothorax compressif, hémothorax)\n- **C** : circulation (pouls, TRC, hémorragies externes, abdomen, bassin, fémur)\n- **D** : neurologique (AVPU, Glasgow, pupilles)\n- **E** : exposition complète, prévention de l’hypothermie\n\n## Examen secondaire\n- Examen complet de la tête aux pieds, mécanisme, antécédents\n- **Échographie FAST**, radiographies (thorax, bassin, rachis), scanner si disponible',
    examens: [
      ['premiere_intention', 'echographie-abdominale', 'FAST : épanchement intra-abdominal.'],
      ['premiere_intention', 'radiographie-thoracique', 'Pneumothorax, hémothorax.'],
      ['premiere_intention', 'radiographie-osseuse', 'Bassin, membres, rachis.'],
      ['premiere_intention', 'nfs', 'Hb.'],
      ['pretherapeutique', 'groupage-rai', 'Transfusion.'],
      ['gravite', 'scanner-cerebral', 'Traumatisme crânien.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie (rein).'],
    ],
    scores: ['glasgow', 'index-de-choc', 'dose-ponderale'],
    differentiels: [['maltraitance-enfant', 'Lésions d’âges différents, récit incohérent.']],
    etiologies:
      '## Mécanismes\n- Accidents de la circulation (piétons, motos-taxis), chutes (arbres, étages)\n- Violences, conflits armés, effondrements',
    principes: [
      [
        'ABCDE',
        'Traiter ce qui tue en premier.',
        '- Libérer les voies aériennes (subluxation de la mâchoire), collier cervical\n- **Oxygène**, exsufflation d’un pneumothorax compressif, drainage d’un hémothorax\n- Compression des hémorragies externes, ceinture pelvienne\n- 2 voies veineuses ou intra-osseuse : **Ringer lactate 10–20 mL/kg**, puis **sang** 10–20 mL/kg si instabilité persistante\n- **Acide tranexamique** 15 mg/kg en 10 min (dans les 3 h) puis 2 mg/kg/h\n- Réchauffement, glycémie',
      ],
      [
        'Traitements spécifiques',
        'Prendre en charge les lésions.',
        '- Traumatisme crânien : fiche dédiée\n- Rate et foie : traitement non opératoire si stable, chirurgie si instabilité\n- Fractures : immobilisation, antalgie (**morphine**, **kétamine**)\n- Plaies : parage, prévention du tétanos, antibiotiques si fracture ouverte',
      ],
      [
        'Transfert',
        'Orienter vers le bon niveau.',
        '- Transfert précoce vers un centre chirurgical, enfant stabilisé et réchauffé',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['acide-tranexamique', 'premiere', 'Hémorragie (dans les 3 h)'],
      ['oxygene', 'premiere', 'Toujours'],
      ['morphine', 'premiere', 'Analgésie'],
      ['ketamine', 'alternative', 'Analgésie, sédation'],
      ['paracetamol', 'adjuvant', 'Douleur'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Plaies'],
      ['cefazoline', 'adjuvant', 'Fractures ouvertes'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-enfant',
        description: 'Rate, foie, bassin, fémur.',
        traitement: '- Sang, hémostase',
        clinique: '- Tachycardie, TRC allongé',
        paraclinique: '- FAST, Hb',
      },
      {
        nom: 'Traumatisme crânien grave',
        fiche: 'traumatisme-cranien',
        description: 'Fréquent.',
        traitement: '- Neuroprotection, neurochirurgie',
        clinique: '- Glasgow bas',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Pneumothorax compressif',
        fiche: 'pneumothorax-spontane',
        description: 'Traumatisme thoracique.',
        traitement: '- Exsufflation',
        clinique: '- Détresse, déviation trachéale',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la rapidité de l’accès aux soins et à la transfusion ; premières heures décisives',
    urgences: ['traumatisme-cranien-grave-urgence', 'abdomen-aigu-chirurgical'],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Hypotension', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Hémorragies', 'frequent'],
    ],
    sources: [
      'ACS TQIP — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- ABCDE, compression, immobilisation, remplissage, acide tranexamique, transfert',
        '- Tout polytraumatisé',
      ],
      hgr: ['- Transfusion, FAST, chirurgie de sauvetage', '- Neurochirurgie, chirurgie pédiatrique'],
      tert: ['- Centre de traumatologie, réanimation', ''],
    },
    alertes: {
      'traumatisme-cranien-grave-urgence': 'Enfant traumatisé avec Glasgow ≤ 8 ou baisse de conscience',
      'abdomen-aigu-chirurgical': 'Enfant traumatisé avec ventre douloureux et signes de choc',
    },
    formes: [
      {
        nom: 'Piéton renversé',
        type: 'commune',
        description: 'Triade tête-thorax-membre.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '- Douleurs multiples',
        generaux: '- Tachycardie',
        physiques: '- Plaie du cuir chevelu, fracture du fémur, contusion abdominale',
        paraclinique: '- FAST',
        etiologies: '- Accident de la route',
        syndromes: ['syndrome-d-hemorragie-interne'],
      },
      {
        nom: 'Polytraumatisme avec choc hémorragique',
        type: 'gravite',
        description: 'Instabilité.',
        terrain: '- Haute énergie',
        fonctionnels: '',
        generaux: '- Pâleur, hypotension tardive',
        physiques: '- Abdomen distendu, bassin instable',
        paraclinique: '- Épanchement à la FAST',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },
];
