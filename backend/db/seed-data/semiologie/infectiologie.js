'use strict';

/**
 * Formes cliniques, sémiologie systématisée et étiologies par forme — infectiologie.
 * Rubriques (markdown) : description, terrain, fonctionnels, generaux, physiques,
 * paraclinique, etiologies ; syndromes : slugs ; examens : [slug, interprétation].
 * `urgences` : signes d'alerte affichés dans le bandeau « Urgence associée ».
 * Contenu à valider par un médecin.
 */

module.exports = {
  // =================================================================== Paludisme grave
  'paludisme-grave': {
    urgences: {
      'paludisme-grave-urgence':
        'Troubles de la conscience, convulsions répétées, prostration, détresse respiratoire, anémie sévère, urines « coca-cola »',
    },
    formes: [
      {
        nom: 'Forme commune de l’adulte (paludisme grave multiviscéral)',
        type: 'commune',
        description:
          'Accès à *P. falciparum* avec une ou plusieurs défaillances d’organe, souvent après quelques jours d’un accès simple non ou mal traité.',
        terrain:
          '- Séjour ou résidence en zone d’endémie (toute la RDC), sujet non immun (voyageur, citadin peu exposé)\n- Retard au traitement, automédication, traitement mal conduit\n- Terrains à risque : grossesse, VIH, splénectomie, sujet âgé',
        fonctionnels:
          '- Céphalées intenses, myalgies, arthralgies\n- Nausées, vomissements (empêchant le traitement oral), douleurs abdominales, diarrhée\n- Dyspnée, oligurie, urines foncées',
        generaux:
          '- Fièvre élevée (39–40 °C) avec frissons et sueurs, parfois hypothermie (gravité)\n- Prostration, asthénie intense\n- Tachycardie ; hypotension et marbrures en cas de choc (algide)',
        physiques:
          '- **Inspection** : pâleur cutanéo-muqueuse, ictère conjonctival, respiration de Kussmaul (acidose), saignements (gingivorragies, points de ponction)\n- **Palpation** : hépatomégalie et splénomégalie souvent modérées et sensibles ; temps de recoloration cutanée allongé\n- **Auscultation** : râles crépitants des bases (OAP lésionnel)\n- **Neurologique** : score de Glasgow < 11, convulsions, sans signe de localisation habituel',
        paraclinique:
          '- Goutte épaisse positive, parasitémie souvent > 4 % (hyperparasitémie > 10 % = gravité)\n- Hypoglycémie < 2,2 mmol/L, lactates ≥ 5 mmol/L, bicarbonates < 15 mmol/L\n- Hb < 7 g/dL, thrombopénie, créatinine > 265 µmol/L, bilirubine > 50 µmol/L',
        etiologies:
          '- *Plasmodium falciparum* dans l’immense majorité des cas en RDC\n- Plus rarement *P. vivax* ou *P. knowlesi* (hors RDC)\n- Facteurs favorisants : absence d’immunité, retard thérapeutique, résistance ou sous-dosage',
        syndromes: ['syndrome-infectieux', 'syndrome-anemique', 'syndrome-de-choc'],
        examens: [
          ['goutte-epaisse', 'Confirme et quantifie la parasitémie ; suivi à H48–H72.'],
          ['glycemie', 'Hypoglycémie fréquente, à contrôler toutes les 4 h.'],
          ['lactates', 'Lactates ≥ 5 mmol/L : acidose de gravité.'],
        ],
      },
      {
        nom: 'Neuropaludisme (paludisme cérébral)',
        type: 'gravite',
        description:
          'Coma (Glasgow < 11 chez l’adulte, Blantyre < 3 chez l’enfant) persistant plus de 30 min après une convulsion, sans autre cause.',
        terrain: '- Enfant de 6 mois à 5 ans en zone d’endémie ; adulte non immun',
        fonctionnels: '- Céphalées, agitation ou somnolence précédant le coma',
        generaux: '- Fièvre élevée, parfois hypothermie\n- Respiration de Kussmaul fréquente (acidose associée)',
        physiques:
          '- Coma calme, hypotonique, sans signe de localisation\n- Convulsions généralisées ou focales, parfois subtiles (mâchonnement, déviation du regard)\n- Opisthotonos, postures de décortication ou décérébration (formes graves)\n- Absence habituelle de raideur de nuque (à distinguer de la méningite)\n- Fond d’œil : rétinopathie palustre (blanchiment, hémorragies)',
        paraclinique:
          '- Goutte épaisse positive\n- Hypoglycémie à corriger systématiquement (peut mimer ou aggraver le coma)\n- Ponction lombaire : LCR normal (élimine une méningite associée)',
        etiologies:
          '- *P. falciparum* : séquestration des hématies parasitées dans la microcirculation cérébrale\n- Toujours éliminer : hypoglycémie, méningite bactérienne, encéphalite',
        syndromes: ['syndrome-convulsif', 'syndrome-d-hypertension-intracranienne'],
        examens: [
          ['lcr', 'Normal dans le neuropaludisme ; élimine une méningite.'],
          ['fond-d-oeil', 'Rétinopathie palustre : argument diagnostique et pronostique.'],
        ],
      },
      {
        nom: 'Forme anémique de l’enfant',
        type: 'terrain',
        description: 'Anémie sévère (Hb < 5 g/dL) avec parasitémie, première forme grave chez le jeune enfant en RDC.',
        terrain: '- Enfant de moins de 5 ans, accès palustres répétés, malnutrition, drépanocytose',
        fonctionnels: '- Fatigue, refus de jouer, difficultés à téter ou à boire',
        generaux: '- Fièvre ou notion de fièvre\n- Tachycardie',
        physiques:
          '- Pâleur palmaire et conjonctivale intense\n- Polypnée, tirage (insuffisance cardiaque d’anémie)\n- Hépatomégalie, splénomégalie\n- Bruit de galop, souffle systolique fonctionnel',
        paraclinique: '- Hb < 5 g/dL (hématocrite < 15 %), réticulocytes variables\n- Goutte épaisse positive',
        etiologies:
          '- Hémolyse des hématies parasitées et non parasitées, dysérythropoïèse\n- Facteurs associés : carence martiale, helminthiases, malnutrition',
        syndromes: ['syndrome-anemique', 'syndrome-hemolytique'],
        examens: [['nfs', 'Hb < 5 g/dL : transfusion selon tolérance clinique.']],
      },
      {
        nom: 'Paludisme grave de la femme enceinte',
        type: 'terrain',
        description: 'Formes plus fréquentes et plus graves, surtout chez la primigeste et au 2e–3e trimestre.',
        terrain: '- Grossesse (immunité diminuée), primigeste, VIH, absence de TPI',
        fonctionnels: '- Céphalées, vomissements, contractions utérines',
        generaux: '- Fièvre élevée, hypotension',
        physiques:
          '- Signes de gravité de l’adulte\n- Hypoglycémie fréquente (et aggravée par la quinine)\n- OAP lésionnel plus fréquent\n- Menace d’accouchement prématuré, souffrance fœtale',
        paraclinique:
          '- Goutte épaisse (la parasitémie périphérique peut être faible : séquestration placentaire)\n- Glycémie répétée, Hb',
        etiologies: '- *P. falciparum* ; séquestration placentaire',
        syndromes: ['syndrome-infectieux', 'syndrome-anemique'],
        examens: [['echographie-obstetricale', 'Vitalité et croissance fœtales.']],
      },
    ],
  },

  // =================================================================== Paludisme simple
  'paludisme-simple': {
    formes: [
      {
        nom: 'Accès palustre simple (forme commune)',
        type: 'commune',
        description:
          'Fièvre avec parasitémie confirmée, sans aucun critère de gravité ni vomissements empêchant le traitement oral.',
        terrain: '- Tout âge en zone d’endémie ; incubation de 7 à 15 jours après la piqûre infectante',
        fonctionnels:
          '- Céphalées, courbatures, arthralgies\n- Troubles digestifs : nausées, vomissements, douleurs abdominales, diarrhée (fréquents chez l’enfant)',
        generaux:
          '- Fièvre élevée, irrégulière au début ; puis parfois fièvre intermittente (tierce)\n- Accès palustre typique : frissons (1 h), chaleur (3 h), sueurs abondantes',
        physiques:
          '- Examen souvent pauvre\n- Splénomégalie et hépatomégalie modérées (accès répétés)\n- Absence de tout signe de gravité (conscience normale, peut boire et s’asseoir)',
        paraclinique:
          '- TDR ou goutte épaisse positifs\n- Thrombopénie fréquente (sans gravité), anémie modérée',
        etiologies:
          '- *P. falciparum* (> 90 % en RDC) ; *P. malariae*, *P. ovale*, plus rarement *P. vivax*\n- Transmission par piqûre d’anophèle femelle',
        syndromes: ['syndrome-infectieux'],
        examens: [
          ['tdr-paludisme', 'Positif : confirmation au point de soins.'],
          ['goutte-epaisse', 'Confirmation et densité parasitaire.'],
        ],
      },
      {
        nom: 'Paludisme du jeune enfant',
        type: 'terrain',
        description: 'Présentation souvent trompeuse, à évolution rapide vers la gravité.',
        terrain: '- Enfant de 6 mois à 5 ans (perte de l’immunité maternelle)',
        fonctionnels: '- Vomissements, diarrhée, toux, refus de s’alimenter',
        generaux: '- Fièvre parfois modérée, irritabilité',
        physiques:
          '- Rechercher systématiquement les signes de danger (PCIME) : incapacité à boire, vomit tout, convulsions, léthargie\n- Pâleur palmaire',
        paraclinique: '- TDR positif ; Hb à contrôler en cas de pâleur',
        etiologies: '- *P. falciparum*',
        syndromes: ['syndrome-infectieux'],
        examens: [['nfs', 'Rechercher une anémie associée.']],
      },
      {
        nom: 'Paludisme viscéral évolutif',
        type: 'evolutive',
        description: 'Forme subaiguë des infections répétées, chez l’enfant non immun soumis à des réinfections.',
        terrain: '- Enfant en zone d’endémie, chimioprophylaxie inefficace ou irrégulière',
        fonctionnels: '- Asthénie, anorexie, dyspnée d’effort',
        generaux: '- Fébricule intermittent, amaigrissement, retard de croissance',
        physiques: '- Pâleur importante, splénomégalie volumineuse (stade III–IV de Hackett), parfois ictère',
        paraclinique: '- Anémie, thrombopénie, hypergammaglobulinémie\n- Parasitémie faible, parfois négative',
        etiologies: '- Réinfections répétées par *P. falciparum* (ou *P. vivax*)',
        syndromes: ['syndrome-anemique', 'syndrome-d-alteration-de-l-etat-general'],
        examens: [['echographie-abdominale', 'Mesure de la splénomégalie.']],
      },
    ],
  },

  // =================================================================== VIH
  'infection-vih': {
    formes: [
      {
        nom: 'Infection asymptomatique (stade clinique OMS 1)',
        type: 'commune',
        description: 'Phase de latence clinique, de plusieurs années, pendant laquelle le virus se réplique et les CD4 baissent.',
        terrain:
          '- Exposition sexuelle non protégée, transmission mère-enfant, transfusion ou matériel souillé\n- Dépistage : CPN, tuberculose, IST, partenaire séropositif',
        fonctionnels: '- Aucun symptôme ou symptômes discrets',
        generaux: '- État général conservé',
        physiques: '- Polyadénopathie généralisée persistante possible (≥ 2 aires extra-inguinales, > 1 cm, > 3 mois)',
        paraclinique: '- TDR VIH positifs (algorithme national à 2 ou 3 tests)\n- CD4 souvent > 500/mm³',
        etiologies: '- VIH-1 (très majoritaire en RDC) ; VIH-2 exceptionnel',
        syndromes: [],
        examens: [
          ['tdr-vih', 'Algorithme national : test de dépistage puis confirmation.'],
          ['cd4', 'Évalue le déficit immunitaire et l’indication des prophylaxies.'],
        ],
      },
      {
        nom: 'Primo-infection symptomatique (syndrome rétroviral aigu)',
        type: 'evolutive',
        description: 'Syndrome pseudo-grippal 2 à 6 semaines après la contamination ; période très contagieuse.',
        terrain: '- Exposition récente à risque',
        fonctionnels: '- Odynophagie, céphalées, myalgies, diarrhée',
        generaux: '- Fièvre, asthénie',
        physiques:
          '- Pharyngite, ulcérations buccales ou génitales\n- Éruption maculo-papuleuse du tronc\n- Polyadénopathie, parfois méningite lymphocytaire',
        paraclinique:
          '- TDR parfois encore négatifs (fenêtre sérologique) : répéter à 4–6 semaines\n- Charge virale très élevée, lymphopénie, thrombopénie',
        etiologies: '- Contamination récente par le VIH',
        syndromes: ['syndrome-infectieux'],
        examens: [['charge-virale-vih', 'Très élevée en primo-infection.']],
      },
      {
        nom: 'Stade symptomatique avancé (stades OMS 3–4, SIDA)',
        type: 'gravite',
        description: 'Immunodépression profonde avec infections opportunistes ; CD4 souvent < 200/mm³.',
        terrain: '- Diagnostic tardif, interruption du traitement, échec virologique',
        fonctionnels:
          '- Diarrhée chronique (> 1 mois), toux chronique, dysphagie (candidose œsophagienne)\n- Céphalées (cryptococcose), troubles neurologiques',
        generaux:
          '- Amaigrissement > 10 % (syndrome cachectique), fièvre prolongée inexpliquée > 1 mois\n- Altération de l’état général',
        physiques:
          '- Muguet, leucoplasie chevelue de la langue\n- Prurigo, zona multimétamérique, sarcome de Kaposi\n- Adénopathies, signes de localisation neurologique',
        paraclinique:
          '- CD4 < 200/mm³ ; antigène cryptococcique, TB-LAM urinaire si CD4 < 200\n- Anémie, lymphopénie',
        etiologies:
          '- Infections opportunistes : tuberculose (1re cause de décès), cryptococcose, pneumocystose, toxoplasmose cérébrale, candidose œsophagienne\n- Tumeurs : sarcome de Kaposi, lymphomes',
        syndromes: ['syndrome-d-alteration-de-l-etat-general', 'syndrome-infectieux'],
        examens: [
          ['tb-lam', 'Tuberculose chez le patient à CD4 bas, hospitalisé.'],
          ['cd4', 'CD4 < 200/mm³ : stade avancé.'],
        ],
      },
      {
        nom: 'Infection VIH de l’enfant',
        type: 'terrain',
        description: 'Transmission surtout mère-enfant ; évolution plus rapide que chez l’adulte sans traitement.',
        terrain: '- Mère séropositive non traitée, allaitement sans prophylaxie',
        fonctionnels: '- Diarrhées et infections respiratoires récidivantes',
        generaux: '- Retard de croissance staturo-pondérale, malnutrition résistante au traitement',
        physiques: '- Muguet persistant, parotidite, hépatosplénomégalie, adénopathies, retard psychomoteur',
        paraclinique:
          '- Avant 18 mois : diagnostic par PCR (les anticorps maternels faussent les TDR)\n- Après 18 mois : TDR comme chez l’adulte',
        etiologies: '- Transmission pendant la grossesse, l’accouchement ou l’allaitement',
        syndromes: [],
        examens: [['charge-virale-vih', 'Suivi de l’efficacité du traitement.']],
      },
    ],
  },

  // =================================================================== Méningite bactérienne
  'meningite-bacterienne': {
    urgences: {
      'syndrome-meninge-febrile':
        'Fièvre, céphalées intenses, raideur de nuque, vomissements en jet, fontanelle bombée chez le nourrisson',
      'choc-septique': 'Purpura extensif, marbrures, extrémités froides, hypotension, troubles de la conscience',
    },
    formes: [
      {
        nom: 'Méningite purulente de l’adulte et du grand enfant (forme commune)',
        type: 'commune',
        description: 'Syndrome méningé fébrile d’installation aiguë (quelques heures à 2 jours).',
        terrain:
          '- Saison sèche et ceinture méningitique (nord de la RDC) pour le méningocoque\n- Otite, sinusite, traumatisme crânien, alcoolisme, asplénie, VIH pour le pneumocoque',
        fonctionnels:
          '- Céphalées intenses, diffuses, en casque, exacerbées par la lumière (photophobie) et le bruit\n- Vomissements en jet\n- Constipation (inconstante)',
        generaux: '- Fièvre élevée (39–40 °C), frissons\n- Tachycardie',
        physiques:
          '- **Attitude** en « chien de fusil », dos tourné à la lumière\n- **Raideur de nuque**, signe de Kernig, signe de Brudzinski\n- **Neurologique** : troubles de la conscience, convulsions, déficit focal (gravité)\n- **Cutané** : rechercher un purpura (déshabiller entièrement le malade)\n- Rechercher une porte d’entrée ORL',
        paraclinique:
          '- LCR trouble, hypertendu ; > 1 000 éléments/mm³ à polynucléaires\n- Hyperprotéinorachie > 1 g/L, hypoglycorachie (rapport LCR/sang < 0,4)\n- Examen direct (Gram) et culture ; hémocultures',
        etiologies:
          '- **Adulte** : *Streptococcus pneumoniae*, *Neisseria meningitidis* (A, C, W, X)\n- **Grand enfant** : méningocoque, pneumocoque\n- Rechercher une méningite tuberculeuse ou à cryptocoque devant un LCR lymphocytaire (VIH)',
        syndromes: ['syndrome-meninge', 'syndrome-infectieux'],
        examens: [
          ['lcr', 'Examen clé : LCR purulent, Gram et culture.'],
          ['hemocultures', 'À prélever avant les antibiotiques, sans retarder le traitement.'],
        ],
      },
      {
        nom: 'Méningite du nourrisson et du nouveau-né',
        type: 'terrain',
        description: 'Syndrome méningé souvent absent : tableau trompeur, à évoquer devant toute fièvre mal expliquée.',
        terrain: '- Nouveau-né (infection materno-fœtale), nourrisson non vacciné (Hib, pneumocoque)',
        fonctionnels: '- Refus de téter, vomissements, cri plaintif, geignement',
        generaux: '- Fièvre ou hypothermie, teint gris, léthargie ou irritabilité',
        physiques:
          '- **Fontanelle bombée** (à rechercher sur l’enfant calme, en position assise)\n- Hypotonie de la nuque (« nuque molle ») plutôt que raideur\n- Convulsions, troubles du tonus, regard fixe',
        paraclinique: '- Ponction lombaire au moindre doute ; hémocultures, CRP',
        etiologies:
          '- **Nouveau-né** : streptocoque B, *E. coli*, *Listeria*\n- **Nourrisson** : pneumocoque, méningocoque, *Haemophilus influenzae* b (non vacciné)',
        syndromes: ['syndrome-meninge', 'syndrome-infectieux'],
        examens: [
          ['lcr', 'Indispensable : la clinique est peu spécifique à cet âge.'],
          ['echographie-transfontanellaire', 'Recherche de complications (abcès, hydrocéphalie, empyème).'],
        ],
      },
      {
        nom: 'Purpura fulminans (méningococcémie)',
        type: 'gravite',
        description: 'Purpura extensif avec choc septique : urgence absolue, antibiothérapie immédiate avant tout examen.',
        terrain: '- Enfant, adolescent, adulte jeune ; épidémies à méningocoque',
        fonctionnels: '- Douleurs des membres, malaise brutal',
        generaux: '- Fièvre élevée, état de choc : tachycardie, hypotension, marbrures',
        physiques:
          '- **Purpura** nécrotique ou ecchymotique, extensif, d’au moins un élément > 3 mm, ne s’effaçant pas à la vitropression\n- Syndrome méningé parfois absent',
        paraclinique: '- Thrombopénie, CIVD, hémocultures ; biopsie cutanée possible',
        etiologies: '- *Neisseria meningitidis* (plus rarement pneumocoque chez l’asplénique)',
        syndromes: ['syndrome-de-choc', 'syndrome-hemorragique'],
        examens: [['hemostase', 'CIVD : TP bas, fibrinogène bas, plaquettes basses.']],
      },
    ],
  },

  // =================================================================== Choléra
  cholera: {
    urgences: {
      'deshydratation-severe-enfant':
        'Selles « eau de riz » abondantes, léthargie, yeux enfoncés, pli cutané persistant, incapacité à boire',
    },
    formes: [
      {
        nom: 'Forme typique (cholériforme)',
        type: 'commune',
        description: 'Diarrhée aqueuse aiguë très abondante, entraînant une déshydratation en quelques heures.',
        terrain:
          '- Zone d’épidémie (Kivu, Katanga, bassins des lacs et du fleuve), cas groupés\n- Eau non potable, absence d’assainissement, camps de déplacés\n- Incubation courte : quelques heures à 5 jours',
        fonctionnels:
          '- Diarrhée aqueuse brutale, indolore, « eau de riz », sans odeur fécale, jusqu’à 1 L/h\n- Vomissements faciles\n- Crampes musculaires (mollets, abdomen)',
        generaux: '- Absence habituelle de fièvre\n- Soif intense, asthénie',
        physiques:
          '- Signes de déshydratation extracellulaire : yeux enfoncés, pli cutané persistant, pouls rapide et faible\n- Voix éteinte, extrémités froides, oligo-anurie',
        paraclinique:
          '- TDR choléra positif (dépistage), culture des selles (confirmation, antibiogramme)\n- Hémoconcentration, insuffisance rénale fonctionnelle, hypokaliémie, acidose',
        etiologies:
          '- *Vibrio cholerae* O1 (biotype El Tor) ou O139, toxine cholérique\n- Contamination féco-orale : eau, aliments, mains sales',
        syndromes: ['syndrome-choleriforme', 'syndrome-de-deshydratation-extracellulaire'],
        examens: [
          ['tdr-cholera', 'Dépistage en contexte d’épidémie ; confirmer par culture.'],
          ['ionogramme', 'Hypokaliémie, acidose, insuffisance rénale fonctionnelle.'],
        ],
      },
      {
        nom: 'Forme grave (choléra « sec » et choc hypovolémique)',
        type: 'gravite',
        description: 'Déshydratation sévère avec choc ; dans le choléra « sec », le liquide s’accumule dans l’intestin avant la diarrhée.',
        terrain: '- Enfant, sujet âgé, malnutrition, retard de prise en charge',
        fonctionnels: '- Incapacité à boire, crampes intenses',
        generaux: '- État de choc : pouls imperceptible, hypotension, hypothermie',
        physiques:
          '- Léthargie ou inconscience, yeux très enfoncés, pli cutané persistant > 2 s\n- Abdomen distendu, clapotant (forme sèche), anurie',
        paraclinique: '- Insuffisance rénale aiguë, acidose métabolique sévère, hypoglycémie chez l’enfant',
        etiologies: '- *Vibrio cholerae* ; aggravation par la malnutrition',
        syndromes: ['syndrome-de-choc', 'syndrome-de-deshydratation-extracellulaire'],
        examens: [['creatinine', 'Insuffisance rénale aiguë fonctionnelle.']],
      },
      {
        nom: 'Forme pauci-symptomatique',
        type: 'evolutive',
        description: 'Diarrhée modérée, souvent méconnue ; porteurs participant à la diffusion de l’épidémie.',
        terrain: '- Contacts familiaux d’un cas, sujets partiellement immuns',
        fonctionnels: '- Diarrhée aqueuse modérée',
        generaux: '- Absence de fièvre',
        physiques: '- Pas ou peu de signes de déshydratation',
        paraclinique: '- TDR ou culture des selles positifs',
        etiologies: '- *Vibrio cholerae*',
        syndromes: ['syndrome-choleriforme'],
        examens: [],
      },
    ],
  },

  // =================================================================== Tuberculose pulmonaire
  'tuberculose-pulmonaire': {
    formes: [
      {
        nom: 'Tuberculose pulmonaire commune de l’adulte',
        type: 'commune',
        description: 'Forme la plus fréquente et la plus contagieuse (formes bacillifères).',
        terrain:
          '- Contage tuberculeux, promiscuité, prison, mines\n- VIH, diabète, malnutrition, alcoolisme, tabagisme, corticothérapie',
        fonctionnels:
          '- Toux chronique ≥ 2 semaines, d’abord sèche puis productive\n- Expectoration muco-purulente, hémoptysie\n- Douleur thoracique, dyspnée (formes étendues)',
        generaux:
          '- Syndrome d’imprégnation tuberculeuse : fièvre vespérale, sueurs nocturnes, asthénie, anorexie, amaigrissement',
        physiques:
          '- Examen souvent pauvre au regard des lésions\n- Râles crépitants ou sous-crépitants aux sommets\n- Syndrome de condensation ou souffle cavitaire (caverne)',
        paraclinique:
          '- Xpert MTB/RIF : détection de *M. tuberculosis* et de la résistance à la rifampicine\n- Bacilloscopie (BAAR) des crachats\n- Radiographie : infiltrats et cavernes des sommets, nodules',
        etiologies:
          '- *Mycobacterium tuberculosis* (rarement *M. bovis*, *M. africanum*)\n- Transmission aérienne par les gouttelettes d’un malade bacillifère',
        syndromes: ['syndrome-d-impregnation-tuberculeuse', 'syndrome-de-condensation-pulmonaire'],
        examens: [
          ['xpert-mtb-rif', 'Examen de 1re intention : diagnostic et résistance à la rifampicine.'],
          ['bacilloscopie', 'Contagiosité et suivi du traitement.'],
          ['radiographie-thoracique', 'Infiltrats, cavernes des sommets.'],
        ],
      },
      {
        nom: 'Tuberculose chez la personne vivant avec le VIH',
        type: 'terrain',
        description: 'Présentation atypique, souvent extra-pulmonaire ou disséminée, crachats fréquemment négatifs.',
        terrain: '- VIH, surtout si CD4 < 200/mm³',
        fonctionnels: '- Toux parfois courte ou absente, dyspnée',
        generaux: '- Fièvre prolongée, amaigrissement important',
        physiques: '- Adénopathies, hépatosplénomégalie, épanchements des séreuses (plèvre, péricarde, péritoine)',
        paraclinique:
          '- Radiographie atypique : opacités des bases, miliaire, adénopathies médiastinales, parfois normale\n- TB-LAM urinaire, Xpert sur crachats et autres prélèvements',
        etiologies: '- Réactivation d’une infection latente ou réinfection, favorisées par l’immunodépression',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
        examens: [['tb-lam', 'Utile si CD4 bas ou patient grave.']],
      },
      {
        nom: 'Miliaire tuberculeuse',
        type: 'gravite',
        description: 'Dissémination hématogène avec atteinte pulmonaire micronodulaire diffuse ; forme grave.',
        terrain: '- Jeune enfant non vacciné, immunodéprimé (VIH), malnutrition',
        fonctionnels: '- Dyspnée progressive, toux sèche, céphalées (méningite associée)',
        generaux: '- Fièvre élevée en plateau, altération rapide de l’état général',
        physiques: '- Polypnée, cyanose, hépatosplénomégalie, signes méningés éventuels',
        paraclinique:
          '- Radiographie : micronodules diffus « grains de mil »\n- Fond d’œil : tubercules choroïdiens ; ponction lombaire',
        etiologies: '- *M. tuberculosis* disséminé',
        syndromes: ['syndrome-de-detresse-respiratoire', 'syndrome-infectieux'],
        examens: [['radiographie-thoracique', 'Miliaire : micronodules diffus.']],
      },
      {
        nom: 'Tuberculose de l’enfant',
        type: 'terrain',
        description: 'Souvent paucibacillaire : diagnostic sur un faisceau d’arguments (contage, clinique, radiographie).',
        terrain: '- Contact familial d’un adulte tuberculeux, malnutrition, VIH',
        fonctionnels: '- Toux persistante, wheezing (compression bronchique)',
        generaux: '- Cassure de la courbe de poids, fièvre persistante, fatigue',
        physiques: '- Adénopathies cervicales, signes de compression bronchique',
        paraclinique:
          '- Radiographie : adénopathies médiastinales, complexe primaire\n- Xpert sur crachat induit ou aspiration gastrique, selles',
        etiologies: '- Primo-infection tuberculeuse récente, contamination intrafamiliale',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
        examens: [['xpert-mtb-rif', 'Sur crachat induit, aspiration gastrique ou selles.']],
      },
    ],
  },
};
