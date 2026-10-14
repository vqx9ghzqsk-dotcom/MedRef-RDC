'use strict';

/**
 * Lot 58 (phase 2, urogynécologie et chirurgie digestive) — incontinence urinaire de la femme,
 * infections urinaires récidivantes de la femme, angiocholite, hémorroïdes. Rédigé par IA (OMS,
 * Sabiston, IDSA, Guide clinique et thérapeutique) : à valider.
 */

const UROG = { departement: 'gynecologie-obstetrique', specialite: 'Urogynécologie' };
const DIG = { departement: 'chirurgie', specialite: 'Chirurgie digestive' };

module.exports = [
  // =================================================================== Incontinence urinaire
  {
    ...UROG,
    slug: 'incontinence-urinaire-femme',
    nom: 'Incontinence urinaire de la femme',
    resume:
      'Fuites involontaires d’urine, fréquentes et souvent cachées (honte) : incontinence d’effort (toux, rire, port de charges : faiblesse périnéale après accouchements), incontinence par urgenterie (envies pressantes : hyperactivité vésicale), mixte ; à distinguer d’une fistule obstétricale (fuites permanentes après un travail prolongé) ; éliminer infection urinaire, rétention avec regorgement, diabète ; rééducation périnéale (exercices de Kegel), perte de poids, gestion des boissons, anticholinergiques pour l’urgenterie, chirurgie (bandelette sous-urétrale) pour l’effort.',
    definition:
      'Toute perte involontaire d’urine, d’effort, par urgenterie, mixte, par regorgement ou permanente (fistule).',
    physiopathologie:
      '## Effort\n- Faiblesse du plancher pelvien et du sphincter urétral : **accouchements** (nombreux, prolongés, instrumentaux), **ménopause**, obésité, toux chronique, constipation\n\n## Urgenterie\n- **Hyperactivité vésicale** (contractions involontaires du détrusor) : idiopathique, infection, neurologique (AVC, diabète, sclérose), caféine\n\n## Autres\n- **Regorgement** (rétention : prolapsus, diabète, médicaments)\n- **Fistule** vésico-vaginale : fuites permanentes',
    diagnostic:
      '## Clinique\n- **Effort** : fuites à la toux, au rire, à l’effort, sans besoin préalable\n- **Urgenterie** : besoin pressant, fuite avant d’arriver aux toilettes, pollakiurie, nycturie\n- **Fuites permanentes** : fistule (après travail prolongé ou chirurgie)\n- Retentissement, catalogue mictionnel, boissons\n- Examen : prolapsus, test à la toux vessie pleine, résidu post-mictionnel, examen neurologique\n\n## Examens\n- **Bandelette urinaire**, **ECBU**, glycémie\n- Résidu post-mictionnel (échographie)\n- Test au bleu si fistule suspectée',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Infection, glycosurie.'],
      ['premiere_intention', 'ecbu', 'Infection.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['deuxieme_intention', 'echographie-renale', 'Résidu post-mictionnel.'],
    ],
    scores: [],
    differentiels: [
      ['fistules-obstetricales', 'Fuites permanentes après travail prolongé.'],
      ['infections-urinaires-adulte', 'Brûlures, pollakiurie.'],
      ['prolapsus-genital', 'Pesanteur, boule vaginale.'],
      ['retention-aigue-urine', 'Regorgement.'],
    ],
    etiologies:
      '## Facteurs\n- Accouchements, ménopause, obésité, toux chronique, constipation, diabète, maladies neurologiques',
    principes: [
      [
        'Mesures générales',
        'Pour toutes.',
        '- **Rééducation périnéale** (exercices de Kegel quotidiens, 3 mois minimum)\n- Perte de poids, traitement de la constipation et de la toux, arrêt du tabac\n- Gestion des boissons (éviter excès, caféine, alcool le soir), mictions programmées',
      ],
      [
        'Urgenterie',
        'Calmer la vessie.',
        '- Rééducation vésicale (augmenter progressivement l’intervalle entre les mictions)\n- **Anticholinergiques** : solifénacine, oxybutynine (prudence chez la personne âgée : confusion)\n- Œstrogènes locaux après la ménopause',
      ],
      [
        'Effort',
        'Chirurgie si échec.',
        '- **Bandelette sous-urétrale** (TVT, TOT) ou colposuspension, en centre spécialisé\n- Traitement d’un prolapsus associé',
      ],
    ],
    molecules: [
      ['solifenacine', 'premiere', 'Hyperactivité vésicale'],
      ['estradiol', 'alternative', 'Œstrogènes locaux (ménopause)'],
      ['nitrofurantoine', 'adjuvant', 'Infection urinaire associée'],
    ],
    complications: [
      {
        nom: 'Infections urinaires',
        fiche: 'infections-urinaires-recidivantes-femme',
        description: 'Stase, protections humides.',
        traitement: '- Antibiotiques',
        clinique: '- Brûlures',
        paraclinique: '- ECBU',
      },
      {
        nom: 'Dermatite et isolement social',
        description: 'Fuites permanentes.',
        traitement: '- Soins, traitement',
        clinique: '- Irritation',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration chez la majorité avec la rééducation ; bons résultats de la chirurgie pour l’incontinence d’effort',
    urgences: [],
    symptomes: [
      ['Incontinence urinaire', 'tres_frequent'],
      ['Pesanteur pelvienne', 'occasionnel'],
      ['Brûlures mictionnelles', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Interrogatoire, bandelette, rééducation périnéale', '- Fuites permanentes, échec'],
      hgr: ['- ECBU, anticholinergiques', ''],
      tert: ['- Bilan urodynamique, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Incontinence d’effort',
        type: 'commune',
        description: 'Faiblesse périnéale.',
        terrain: '- Multipare',
        fonctionnels: '- Fuites à la toux, au rire',
        generaux: '',
        physiques: '- Fuite à la toux vessie pleine',
        paraclinique: '',
        etiologies: '- Accouchements',
        syndromes: [],
      },
      {
        nom: 'Incontinence par urgenterie',
        type: 'etiologique',
        description: 'Hyperactivité vésicale.',
        terrain: '- Femme âgée',
        fonctionnels: '- Envies pressantes, pollakiurie',
        generaux: '',
        physiques: '',
        paraclinique: '- ECBU négatif',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Infections urinaires récidivantes
  {
    ...UROG,
    slug: 'infections-urinaires-recidivantes-femme',
    nom: 'Infections urinaires récidivantes de la femme',
    resume:
      'Au moins 2 cystites en 6 mois ou 3 en 12 mois : facteurs (rapports sexuels, spermicides, constipation, faibles apports hydriques, ménopause, diabète, prolapsus, résidu post-mictionnel, lithiase, schistosomiase) ; ECBU à chaque épisode (résistances fréquentes en RDC), bilan si atypique (échographie rénale et vésicale) ; mesures d’hygiène (boissons abondantes, mictions régulières et après les rapports), œstrogènes vaginaux après la ménopause, traitement de la constipation ; antibioprophylaxie (nitrofurantoïne, fosfomycine ou cotrimoxazole post-coïtale ou continue) si échec.',
    definition:
      'Au moins 2 infections urinaires symptomatiques en 6 mois ou 3 en 12 mois, par rechute (même germe) ou réinfection (nouveau germe).',
    physiopathologie:
      '## Facteurs\n- **Rapports sexuels**, spermicides, **faibles apports hydriques**, mictions retenues, **constipation**\n- **Ménopause** (atrophie, perte des lactobacilles), **diabète**, grossesse\n- Anomalies : **résidu post-mictionnel** (prolapsus), lithiase, schistosomiase urinaire, malformations\n\n## Germes\n- **E. coli** (80 %), Klebsiella, Proteus (lithiase), entérocoques\n- Résistances fréquentes (amoxicilline, cotrimoxazole, quinolones) : importance de l’ECBU',
    diagnostic:
      '## Clinique\n- Brûlures mictionnelles, pollakiurie, urgenterie, urines troubles, hématurie\n- Fièvre et douleur lombaire : **pyélonéphrite**\n\n## Examens\n- **ECBU** à chaque épisode (germe, antibiogramme)\n- Bilan si récidives fréquentes, atypiques ou germe inhabituel : **échographie rénale et vésicale** (résidu, lithiase, malformation), glycémie, **œufs de schistosomes** dans les urines\n- Examen gynécologique (prolapsus, atrophie)',
    examens: [
      ['confirmation', 'ecbu', 'Germe et antibiogramme.'],
      ['premiere_intention', 'bandelette-urinaire', 'Orientation.'],
      ['deuxieme_intention', 'echographie-renale', 'Résidu, lithiase.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['etiologique', 'oeufs-schistosomes-urines', 'Schistosomiase.'],
    ],
    scores: [],
    differentiels: [
      ['infections-urinaires-adulte', 'Infection isolée.'],
      ['cervicites', 'Urétrite à chlamydia : ECBU stérile.'],
      ['schistosomiase-urogenitale', 'Hématurie terminale.'],
      ['lithiase-urinaire-colique-nephretique', 'Lithiase infectée.'],
      ['Syndrome de la vessie douloureuse', 'ECBU stérile.'],
    ],
    etiologies: '## Germes\n- E. coli, Klebsiella, Proteus, entérocoques',
    principes: [
      [
        'Traitement de chaque épisode',
        'Selon l’antibiogramme.',
        '- Cystite : **fosfomycine** 3 g dose unique ou **nitrofurantoïne** 100 mg 2 fois par jour 5 jours (adapter à l’ECBU)\n- Pyélonéphrite : ceftriaxone puis relais oral selon l’antibiogramme',
      ],
      [
        'Prévention',
        'Mesures d’hygiène.',
        '- **Boissons abondantes** (1,5–2 L/j), mictions régulières et **après les rapports**, traitement de la constipation, essuyage d’avant en arrière\n- Éviter spermicides et douches vaginales\n- **Œstrogènes vaginaux** après la ménopause\n- Traitement des causes (lithiase, prolapsus, diabète, schistosomiase : praziquantel)',
      ],
      [
        'Antibioprophylaxie',
        'Si échec.',
        '- **Post-coïtale** (récidives liées aux rapports) : nitrofurantoïne 50–100 mg ou cotrimoxazole 1 comprimé après le rapport\n- **Continue** (6 mois) : nitrofurantoïne 50 mg/j, fosfomycine 3 g tous les 10 jours\n- Réévaluation régulière (résistances)',
      ],
    ],
    molecules: [
      ['fosfomycine', 'premiere', 'Cystite, prophylaxie'],
      ['nitrofurantoine', 'premiere', 'Cystite, prophylaxie'],
      ['cotrimoxazole', 'alternative', 'Prophylaxie (selon sensibilité)'],
      ['ceftriaxone', 'alternative', 'Pyélonéphrite'],
      ['estradiol', 'alternative', 'Œstrogènes vaginaux (ménopause)'],
      ['praziquantel', 'adjuvant', 'Schistosomiase'],
    ],
    complications: [
      {
        nom: 'Pyélonéphrite',
        fiche: 'infections-urinaires-adulte',
        description: 'Ascension.',
        traitement: '- Antibiotiques IV',
        clinique: '- Fièvre, douleur lombaire',
        paraclinique: '- ECBU',
      },
      {
        nom: 'Résistances bactériennes',
        description: 'Antibiothérapies répétées.',
        traitement: '- Antibiogramme',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Réduction des récidives par les mesures préventives et la prophylaxie',
    urgences: [],
    symptomes: [
      ['Brûlures mictionnelles', 'tres_frequent'],
      ['Dysurie', 'frequent'],
      ['Douleur pelvienne', 'occasionnel'],
      ['Hématurie', 'occasionnel'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Conseils, traitement des épisodes, bandelette', '- Récidives fréquentes, pyélonéphrite'],
      hgr: ['- ECBU, échographie, prophylaxie', ''],
      tert: ['- Urologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Cystites récidivantes post-coïtales',
        type: 'commune',
        description: 'Liées aux rapports.',
        terrain: '- Femme jeune',
        fonctionnels: '- Brûlures après les rapports',
        generaux: '',
        physiques: '',
        paraclinique: '- E. coli',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Infections récidivantes de la femme ménopausée',
        type: 'terrain',
        description: 'Atrophie, résidu.',
        terrain: '- Femme ménopausée',
        fonctionnels: '',
        generaux: '',
        physiques: '- Prolapsus, atrophie',
        paraclinique: '- Résidu post-mictionnel',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Angiocholite
  {
    ...DIG,
    slug: 'angiocholite',
    nom: 'Angiocholite',
    resume:
      'Infection des voies biliaires sur obstacle (lithiase de la voie biliaire principale surtout, tumeur, ascaridiose biliaire, sténose) : triade de Charcot (douleur de l’hypochondre droit, fièvre avec frissons, ictère) en 48 h ; formes graves avec choc septique, confusion, insuffisance rénale (pentade de Reynolds) ; NFS, CRP, bilan hépatique (cholestase), hémocultures, échographie (dilatation des voies biliaires) ; antibiotiques IV (ceftriaxone + métronidazole), réanimation, drainage biliaire urgent (CPRE, drainage percutané ou chirurgical) dans les formes graves ou non améliorées.',
    definition:
      'Infection aiguë de la bile dans les voies biliaires, associée à un obstacle à l’écoulement biliaire.',
    physiopathologie:
      '## Causes d’obstacle\n- **Lithiase de la voie biliaire principale** (la plus fréquente)\n- **Tumeurs** : cancer de la tête du pancréas, cholangiocarcinome, ampullome\n- **Ascaridiose biliaire**, sténose, compression, prothèse obstruée\n\n## Mécanismes\n- Stase biliaire + infection (E. coli, Klebsiella, entérocoques, anaérobies) → hyperpression → **bactériémie**, abcès hépatiques, choc septique',
    diagnostic:
      '## Clinique\n- **Triade de Charcot** : **douleur** de l’hypochondre droit, **fièvre** élevée avec **frissons**, puis **ictère** (dans les 24–48 h)\n- **Formes graves** : hypotension, **confusion** (pentade de Reynolds), oligurie\n- Urines foncées, selles décolorées, prurit\n\n## Examens\n- **NFS**, **CRP**, **hémocultures**, **bilan hépatique** (bilirubine conjuguée, PAL, GGT, transaminases), lipasémie, créatinine, hémostase\n- **Échographie abdominale** : dilatation des voies biliaires, calculs, cholécystite\n- Scanner ou bili-IRM si doute ; examen parasitologique (ascaris)',
    examens: [
      ['premiere_intention', 'echographie-abdominale', 'Dilatation, calculs.'],
      ['premiere_intention', 'bilan-hepatique', 'Cholestase.'],
      ['premiere_intention', 'hemocultures', 'Bactériémie.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['gravite', 'hemostase', 'Troubles de coagulation.'],
      ['etiologique', 'lipasemie', 'Pancréatite associée.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Cause tumorale.'],
    ],
    scores: [],
    differentiels: [
      ['cholecystite-lithiase-biliaire', 'Cholécystite sans ictère ni dilatation.'],
      ['hepatites-virales-aigues-a-et-e', 'Ictère avec cytolyse importante, sans dilatation.'],
      ['abces-amibien-du-foie', 'Douleur, fièvre, collection hépatique.'],
      ['paludisme-grave', 'Fièvre et ictère, TDR positif.'],
      ['pancreatite-aigue', 'Douleur épigastrique, lipase élevée.'],
    ],
    etiologies: '## Causes\n- Lithiase de la voie biliaire principale, tumeurs, ascaridiose, sténoses',
    principes: [
      [
        'Réanimation et antibiotiques',
        'Immédiats.',
        '- Remplissage, correction des troubles, vitamine K si TP bas\n- **Ceftriaxone** 2 g/j IV + **métronidazole** 500 mg toutes les 8 h IV (ou amoxicilline-acide clavulanique ; pipéracilline-tazobactam dans les formes graves)\n- Durée 4–7 jours après le drainage',
      ],
      [
        'Drainage biliaire',
        'Lever l’obstacle.',
        '- **Urgent** (< 24 h) dans les formes graves ou sans amélioration en 24–48 h\n- **CPRE** avec sphinctérotomie et extraction des calculs (centre équipé), drainage percutané, ou **chirurgie** (cholédocotomie, drain de Kehr) si endoscopie indisponible\n- Cholécystectomie à distance en cas de lithiase',
      ],
      [
        'Ascaridiose biliaire',
        'Traitement médical.',
        '- Antibiotiques, antalgiques, **albendazole** ; extraction si échec',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Antibiothérapie'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['piperacilline', 'alternative', 'Formes graves'],
      ['vitamine-k1-phytomenadione', 'adjuvant', 'TP bas'],
      ['albendazole', 'adjuvant', 'Ascaridiose biliaire'],
      ['paracetamol', 'adjuvant', 'Douleur, fièvre'],
    ],
    complications: [
      {
        nom: 'Choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Bactériémie.',
        traitement: '- Réanimation, drainage',
        clinique: '- Hypotension, confusion',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Abcès hépatiques',
        description: 'Diffusion.',
        traitement: '- Antibiotiques, drainage',
        clinique: '- Fièvre persistante',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Pancréatite aiguë',
        fiche: 'pancreatite-aigue',
        description: 'Calcul enclavé.',
        traitement: '- Prise en charge',
        clinique: '- Douleur épigastrique',
        paraclinique: '- Lipasémie',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Sepsis, ictère.',
        traitement: '- Remplissage',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec antibiotiques et drainage précoces ; mortalité élevée des formes graves non drainées',
    urgences: ['choc-septique', 'abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Ictère', 'tres_frequent'],
      ['Urines foncées', 'frequent'],
      ['Selles décolorées', 'occasionnel'],
      ['Prurit', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'WSES — recommandations de pratique clinique',
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
    ],
    niveaux: {
      cs: ['- Fièvre + ictère + douleur : première dose d’antibiotique, référence', '- Tout cas'],
      hgr: ['- Échographie, antibiotiques IV, chirurgie biliaire', ''],
      tert: ['- CPRE, réanimation', ''],
    },
    alertes: {
      'choc-septique': 'Fièvre, ictère et hypotension',
      'abdomen-aigu-chirurgical': 'Douleur de l’hypochondre droit avec fièvre et ictère',
    },
    formes: [
      {
        nom: 'Angiocholite lithiasique',
        type: 'commune',
        description: 'Triade de Charcot.',
        terrain: '- Lithiase biliaire',
        fonctionnels: '- Douleur de l’hypochondre droit',
        generaux: '- Fièvre, frissons',
        physiques: '- Ictère',
        paraclinique: '- Dilatation biliaire, cholestase',
        etiologies: '- Calcul de la VBP',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Angiocholite grave',
        type: 'gravite',
        description: 'Choc, confusion.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Hypotension',
        physiques: '- Confusion, oligurie',
        paraclinique: '- Hémocultures positives',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Hémorroïdes
  {
    ...DIG,
    slug: 'hemorroides',
    nom: 'Hémorroïdes',
    resume:
      'Pathologie anale très fréquente (constipation, efforts de poussée, grossesse et post-partum, station assise prolongée) : rectorragies de sang rouge à la défécation, prolapsus hémorroïdaire (grades I à IV), gêne, prurit ; crise hémorroïdaire et thrombose externe (tuméfaction bleutée très douloureuse) ; toute rectorragie après 45–50 ans, avec anémie ou troubles du transit, impose une coloscopie (cancer colorectal) ; régime riche en fibres, eau, laxatifs, veinotoniques, topiques ; ligature élastique, incision de la thrombose, hémorroïdectomie pour les formes évoluées.',
    definition:
      'Dilatation et prolapsus des plexus vasculaires du canal anal (hémorroïdes internes au-dessus de la ligne pectinée, externes au-dessous), devenant pathologiques lorsqu’ils saignent, prolabent ou thrombosent.',
    physiopathologie:
      '## Facteurs\n- **Constipation**, efforts de poussée, diarrhée chronique\n- **Grossesse** et **post-partum**, station assise prolongée, obésité\n- Hypertension portale (varices anorectales, à distinguer)\n\n## Classification des hémorroïdes internes\n- **I** : pas de prolapsus ; **II** : prolapsus réductible spontanément ; **III** : réduction manuelle ; **IV** : prolapsus permanent',
    diagnostic:
      '## Clinique\n- **Rectorragies** de sang rouge vif, à la fin de la défécation, sur le papier ou en jet\n- **Prolapsus** à la défécation, gêne, suintement, **prurit**\n- **Thrombose externe** : tuméfaction bleutée, dure, très douloureuse, de survenue brutale\n- Thrombose interne prolabée : prolapsus douloureux, irréductible, œdémateux\n\n## Examens\n- Inspection, toucher rectal, **anuscopie**\n- **Coloscopie** si âge > 45–50 ans, anémie, troubles du transit, perte de poids, antécédents familiaux de cancer colorectal\n- NFS (anémie)',
    examens: [
      ['confirmation', 'anuscopie', 'Hémorroïdes, fissure.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['deuxieme_intention', 'coloscopie', 'Éliminer un cancer colorectal.'],
    ],
    scores: [],
    differentiels: [
      ['Fissure anale', 'Douleur intense à la défécation, plaie postérieure.'],
      ['cancer-colorectal', 'Rectorragies après 50 ans, troubles du transit.'],
      ['abces-marge-anale', 'Tuméfaction inflammatoire, fièvre.'],
      ['condylomes-genitaux', 'Végétations anales.'],
      ['Prolapsus rectal', 'Muqueuse circulaire en cercles concentriques.'],
    ],
    etiologies: '## Facteurs\n- Constipation, grossesse, efforts de poussée, station assise prolongée',
    principes: [
      [
        'Traitement médical',
        'Pour tous.',
        '- **Fibres** (fruits, légumes, son), **eau** 1,5–2 L/j, **laxatifs** (macrogol, lactulose), éviter les efforts prolongés aux toilettes\n- **Veinotoniques** (diosmine) en cure courte lors des crises\n- Topiques (anesthésiques, corticoïdes locaux de courte durée), bains de siège, antalgiques (paracétamol, AINS courts)',
      ],
      [
        'Traitement instrumental',
        'Grades II–III.',
        '- **Ligature élastique** (consultation), sclérothérapie, photocoagulation',
      ],
      [
        'Chirurgie et thrombose',
        'Formes évoluées.',
        '- **Hémorroïdectomie** : grades III–IV, échec, saignement important\n- **Thrombose externe** récente (< 72 h) très douloureuse : **incision-évacuation** sous anesthésie locale ; sinon traitement médical\n- Grossesse : traitement médical (laxatifs, topiques)',
      ],
    ],
    molecules: [
      ['diosmine', 'premiere', 'Crise hémorroïdaire'],
      ['macrogol', 'premiere', 'Constipation'],
      ['lactulose', 'alternative', 'Constipation'],
      ['lidocaine', 'alternative', 'Topique, anesthésie locale'],
      ['hydrocortisone', 'adjuvant', 'Topique (courte durée)'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Anémie ferriprive',
        fiche: 'anemie-ferriprive',
        description: 'Saignements chroniques.',
        traitement: '- Fer, traitement des hémorroïdes',
        clinique: '- Pâleur',
        paraclinique: '- NFS',
      },
      {
        nom: 'Thrombose hémorroïdaire',
        description: 'Crise.',
        traitement: '- Incision ou traitement médical',
        clinique: '- Tuméfaction douloureuse',
        paraclinique: '',
      },
      {
        nom: 'Méconnaissance d’un cancer colorectal',
        fiche: 'cancer-colorectal',
        description: 'Rectorragies attribuées aux hémorroïdes.',
        traitement: '- Coloscopie',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec les mesures hygiéno-diététiques ; récidives fréquentes si constipation persistante',
    urgences: [],
    symptomes: [
      ['Rectorragies', 'tres_frequent'],
      ['Prolapsus anal', 'frequent'],
      ['Douleur anale', 'frequent'],
      ['Prurit anal', 'occasionnel'],
      ['Constipation', 'frequent'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'Guide clinique et thérapeutique',
      'ACG — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Conseils, laxatifs, veinotoniques', '- Rectorragies après 45 ans, anémie'],
      hgr: ['- Anuscopie, ligature, incision de thrombose, hémorroïdectomie', ''],
      tert: ['- Coloscopie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hémorroïdes internes saignantes',
        type: 'commune',
        description: 'Rectorragies.',
        terrain: '- Constipation',
        fonctionnels: '- Sang rouge à la défécation',
        generaux: '',
        physiques: '- Hémorroïdes à l’anuscopie',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Thrombose hémorroïdaire externe',
        type: 'gravite',
        description: 'Douleur aiguë.',
        terrain: '',
        fonctionnels: '- Douleur anale intense',
        generaux: '',
        physiques: '- Tuméfaction bleutée',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
