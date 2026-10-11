'use strict';

/**
 * Lot 25 (urologie) — rétention aiguë d'urine, hypertrophie bénigne de la prostate, cancer de
 * la prostate, lithiase urinaire et colique néphrétique. Rédigé par IA (EAU, AUA, OMS) : à
 * valider.
 */

const URO = { departement: 'chirurgie', specialite: 'Urologie' };

module.exports = [
  // =================================================================== RAU
  {
    ...URO,
    slug: 'retention-aigue-urine',
    nom: 'Rétention aiguë d’urine',
    resume:
      'Impossibilité d’uriner avec globe vésical douloureux, surtout chez l’homme âgé (prostate) : drainage vésical en urgence (sonde urétrale, ou cathéter sus-pubien si rétrécissement urétral ou prostatite), recherche de la cause, alpha-bloquant avant l’ablation de la sonde.',
    definition:
      'Impossibilité brutale et totale d’uriner malgré une vessie pleine, entraînant un globe vésical généralement douloureux.',
    physiopathologie:
      '## Causes\n- **Obstacle** : hypertrophie bénigne ou cancer de la prostate, **rétrécissement urétral** (séquelles de gonococcie, traumatismes), calcul, caillots, phimosis\n- **Neurologique** : compression médullaire, diabète, traumatisme\n- **Médicamenteuse** : anticholinergiques, opioïdes, antihistaminiques\n- Infection (prostatite), constipation, postopératoire',
    diagnostic:
      '## Clinique\n- Envie impérieuse et douloureuse d’uriner sans pouvoir le faire\n- **Globe vésical** : masse sus-pubienne mate, tendue, douloureuse\n- Toucher rectal (prostate), examen du méat (rétrécissement), examen neurologique\n- Fièvre (prostatite), hématurie (caillots)\n\n## Examens\n- Échographie (volume vésical), créatinine, ECBU, glycémie',
    examens: [
      ['premiere_intention', 'echographie-renale', 'Globe vésical, retentissement rénal.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale obstructive.'],
      ['premiere_intention', 'ecbu', 'Infection.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['etiologique', 'psa', 'À distance (faussement élevé après rétention).'],
    ],
    scores: [],
    differentiels: [
      ['Anurie', 'Vessie vide à l’échographie : insuffisance rénale.'],
      ['Masse pelvienne', 'Persiste après sondage.'],
    ],
    etiologies:
      '## Terrain\n- Homme de plus de 50 ans, rétrécissement urétral, antécédent d’urétrite, médicaments, constipation',
    principes: [
      [
        'Drainage vésical urgent',
        'Soulager.',
        '- **Sonde urétrale** (Foley 14–16 Ch), asepsie stricte, sans forcer\n- **Cathéter sus-pubien** si sondage impossible, rétrécissement urétral, prostatite aiguë\n- Vidange progressive non obligatoire ; surveiller l’hématurie et la polyurie de levée d’obstacle',
      ],
      [
        'Traiter la cause',
        'Éviter la récidive.',
        '- HBP : **tamsulosine** ou alfuzosine 2–3 jours avant l’ablation de la sonde (épreuve sans sonde) ; chirurgie si échec\n- Rétrécissement urétral : dilatation, urétrotomie, urétroplastie\n- Prostatite : antibiotiques (ciprofloxacine)\n- Arrêt des médicaments en cause, traitement de la constipation',
      ],
    ],
    molecules: [
      ['tamsulosine', 'premiere', 'Épreuve sans sonde (HBP)'],
      ['alfuzosine', 'alternative', 'Épreuve sans sonde'],
      ['lidocaine', 'premiere', 'Gel pour le sondage'],
      ['ciprofloxacine', 'adjuvant', 'Prostatite'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Insuffisance rénale obstructive',
        fiche: 'insuffisance-renale-aigue',
        description: 'Rétention prolongée.',
        traitement: '- Drainage',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Infection urinaire',
        fiche: 'infections-urinaires-adulte',
        description: 'Stase, sondage.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '- ECBU',
      },
      {
        nom: 'Hématurie et polyurie de levée d’obstacle',
        description: 'Après drainage.',
        traitement: '- Hydratation, surveillance',
        clinique: '- Urines abondantes',
        paraclinique: '- Ionogramme',
      },
    ],
    evolution: '## Pronostic\n- Récidive fréquente sans traitement de la cause',
    urgences: [],
    symptomes: [
      ['Rétention urinaire', 'tres_frequent'],
      ['Douleur abdominale', 'tres_frequent'],
      ['Dysurie', 'frequent'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: ['Sabiston Textbook of Surgery', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: ['- Sondage urétral, orientation', '- Sondage impossible, fièvre, hématurie'],
      hgr: ['- Cathéter sus-pubien, traitement de la cause', ''],
      tert: ['- Urologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Rétention sur HBP',
        type: 'commune',
        description: 'Homme âgé.',
        terrain: '- Homme > 60 ans',
        fonctionnels: '- Impossibilité d’uriner, douleur',
        generaux: '',
        physiques: '- Globe vésical, prostate augmentée',
        paraclinique: '- Globe à l’échographie',
        etiologies: '- HBP',
        syndromes: [],
      },
      {
        nom: 'Rétention sur rétrécissement urétral',
        type: 'etiologique',
        description: 'Homme jeune.',
        terrain: '- Antécédent d’urétrite, traumatisme',
        fonctionnels: '- Jet faible ancien',
        generaux: '',
        physiques: '- Sondage impossible',
        paraclinique: '',
        etiologies: '- Rétrécissement',
        syndromes: [],
      },
    ],
  },

  // =================================================================== HBP
  {
    ...URO,
    slug: 'hypertrophie-benigne-prostate',
    nom: 'Hypertrophie bénigne de la prostate',
    resume:
      'Augmentation bénigne de la prostate de l’homme de plus de 50 ans : troubles mictionnels (dysurie, pollakiurie nocturne) ; toucher rectal, PSA, échographie ; alpha-bloquant (tamsulosine), inhibiteur de la 5-alpha-réductase si grosse prostate ; chirurgie si complications.',
    definition:
      'Prolifération bénigne de la zone de transition de la prostate, responsable de symptômes du bas appareil urinaire et de complications obstructives.',
    physiopathologie:
      '## Mécanismes\n- Croissance hormonodépendante (dihydrotestostérone) avec l’âge\n- Obstacle mécanique et dynamique (tonus alpha-adrénergique)\n- Vessie de lutte, résidu post-mictionnel, rétention',
    diagnostic:
      '## Clinique\n- Symptômes obstructifs : **dysurie**, jet faible, poussée, gouttes retardataires\n- Symptômes irritatifs : **pollakiurie nocturne**, urgenturies\n- Score IPSS\n- **Toucher rectal** : prostate augmentée, lisse, élastique, indolore\n\n## Examens\n- **PSA**, créatinine, ECBU\n- Échographie : volume prostatique, résidu post-mictionnel, retentissement rénal',
    examens: [
      ['premiere_intention', 'psa', 'Éliminer un cancer.'],
      ['premiere_intention', 'creatinine', 'Retentissement.'],
      ['premiere_intention', 'ecbu', 'Infection.'],
      ['premiere_intention', 'echographie-renale', 'Volume prostatique, résidu, hydronéphrose.'],
      ['premiere_intention', 'glycemie', 'Diabète (pollakiurie).'],
    ],
    scores: [],
    differentiels: [
      ['cancer-de-la-prostate', 'Prostate dure, nodulaire, PSA élevé.'],
      ['Rétrécissement urétral', 'Homme plus jeune, antécédent d’urétrite.'],
      ['Vessie neurologique', 'Diabète, atteinte neurologique.'],
      ['schistosomiase-urogenitale', 'Hématurie, zone d’endémie.'],
    ],
    etiologies: '## Facteurs\n- Âge > 50 ans, hormones androgènes',
    principes: [
      [
        'Surveillance et mesures',
        'Symptômes légers.',
        '- Réduire les boissons le soir, éviter caféine et alcool, traiter la constipation',
      ],
      [
        'Médicaments',
        'Améliorer les symptômes.',
        '- **Alpha-bloquant** : **tamsulosine** 0,4 mg/j ou **alfuzosine** 10 mg/j (effet rapide ; hypotension orthostatique)\n- **Inhibiteur de la 5-alpha-réductase** (**dutastéride**) si prostate > 40 mL (effet en 6 mois, baisse le PSA de moitié)\n- Association si gros volume et symptômes importants',
      ],
      [
        'Chirurgie',
        'Lever l’obstacle.',
        '- Indications : rétention récidivante, insuffisance rénale, calculs vésicaux, infections ou hématurie récidivantes, échec du traitement\n- **Adénomectomie** transvésicale (gros adénomes) ou **résection transurétrale (RTUP)**',
      ],
    ],
    molecules: [
      ['tamsulosine', 'premiere', 'Alpha-bloquant'],
      ['alfuzosine', 'alternative', 'Alpha-bloquant'],
      ['dutasteride', 'deuxieme', 'Prostate volumineuse'],
    ],
    complications: [
      {
        nom: 'Rétention aiguë d’urine',
        fiche: 'retention-aigue-urine',
        description: 'Complication fréquente.',
        traitement: '- Sondage, alpha-bloquant',
        clinique: '- Globe',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale chronique obstructive',
        fiche: 'maladie-renale-chronique',
        description: 'Rétention chronique.',
        traitement: '- Drainage, chirurgie',
        clinique: '- Fuites par regorgement',
        paraclinique: '- Hydronéphrose',
      },
      {
        nom: 'Infections urinaires et calculs vésicaux',
        fiche: 'infections-urinaires-adulte',
        description: 'Stase.',
        traitement: '- Antibiotiques, chirurgie',
        clinique: '- Brûlures, fièvre',
        paraclinique: '- ECBU',
      },
    ],
    evolution: '## Pronostic\n- Évolution lente ; amélioration nette après chirurgie',
    urgences: [],
    symptomes: [
      ['Dysurie', 'tres_frequent'],
      ['Rétention urinaire', 'occasionnel'],
      ['Troubles du sommeil', 'frequent'],
      ['Hématurie', 'occasionnel'],
    ],
    sources: ['Sabiston Textbook of Surgery', "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: ['- Toucher rectal, tamsulosine, orientation', '- Rétention, PSA élevé, prostate suspecte'],
      hgr: ['- Échographie, adénomectomie', ''],
      tert: ['- RTUP, urologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'HBP symptomatique',
        type: 'commune',
        description: 'Troubles mictionnels.',
        terrain: '- Homme > 50 ans',
        fonctionnels: '- Dysurie, pollakiurie nocturne',
        generaux: '',
        physiques: '- Prostate augmentée, souple',
        paraclinique: '- PSA normal ou modérément élevé',
        etiologies: '',
        syndromes: [],
        examens: [['psa', 'Éliminer un cancer']],
      },
      {
        nom: 'HBP compliquée',
        type: 'gravite',
        description: 'Retentissement.',
        terrain: '',
        fonctionnels: '- Rétention, fuites',
        generaux: '',
        physiques: '- Globe chronique',
        paraclinique: '- Hydronéphrose, créatinine élevée',
        etiologies: '',
        syndromes: ['syndrome-uremique'],
      },
    ],
  },

  // =================================================================== Cancer de la prostate
  {
    ...URO,
    slug: 'cancer-de-la-prostate',
    nom: 'Cancer de la prostate',
    resume:
      'Premier cancer de l’homme en Afrique, souvent découvert à un stade métastatique (douleurs osseuses, compression médullaire) : toucher rectal (prostate dure), PSA, biopsie ; localisé = chirurgie ou radiothérapie ; métastatique = castration (orchidectomie bilatérale, goséréline) ± antiandrogène.',
    definition:
      'Adénocarcinome de la prostate, hormonodépendant, classé selon le score de Gleason (ISUP), le PSA et le stade TNM.',
    physiopathologie:
      '## Facteurs\n- Âge, origine africaine (fréquence et agressivité plus élevées), antécédents familiaux\n- Croissance androgénodépendante : base de l’hormonothérapie\n- Métastases osseuses (ostéocondensantes), ganglionnaires',
    diagnostic:
      '## Clinique\n- Souvent asymptomatique au début\n- Troubles mictionnels, hématurie, rétention\n- **Métastases** : douleurs osseuses (rachis, bassin), **compression médullaire**, altération de l’état général, anémie\n- **Toucher rectal** : prostate dure, nodulaire, irrégulière\n\n## Examens\n- **PSA** (souvent très élevé aux stades avancés)\n- **Biopsies prostatiques** (histologie, Gleason)\n- Bilan d’extension : radiographies ou scintigraphie osseuse, échographie, créatinine',
    examens: [
      ['confirmation', 'psa', 'Élevé.'],
      ['confirmation', 'biopsie-histologie', 'Biopsies prostatiques : Gleason.'],
      ['premiere_intention', 'creatinine', 'Obstruction.'],
      ['premiere_intention', 'echographie-renale', 'Hydronéphrose.'],
      ['gravite', 'radiographie-osseuse', 'Métastases osseuses.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['gravite', 'calcemie-magnesemie', 'Hypercalcémie.'],
    ],
    scores: [],
    differentiels: [
      ['hypertrophie-benigne-prostate', 'Prostate souple, PSA peu élevé.'],
      ['Prostatite chronique', 'Douleurs pelviennes, infection, PSA variable.'],
      ['Myélome', 'Lésions lytiques, électrophorèse.'],
      ['mal-de-pott', 'Atteinte vertébrale tuberculeuse.'],
    ],
    etiologies: '## Facteurs de risque\n- Âge > 50 ans, origine africaine, antécédents familiaux',
    principes: [
      [
        'Maladie localisée',
        'Guérir.',
        '- Selon le risque et l’espérance de vie : surveillance active, **prostatectomie radicale** ou **radiothérapie** (± hormonothérapie)',
      ],
      [
        'Maladie avancée ou métastatique',
        'Contrôler la maladie.',
        '- **Castration** : **orchidectomie bilatérale** (efficace, peu coûteuse, adaptée en RDC) ou **goséréline** (avec **bicalutamide** les premières semaines)\n- Ajout d’**abiratérone** ou d’un antiandrogène de nouvelle génération selon disponibilité ; docétaxel\n- Métastases osseuses : radiothérapie antalgique, **acide zolédronique**, calcium-vitamine D',
      ],
      [
        'Urgences et soins de support',
        'Soulager.',
        '- Compression médullaire : dexaméthasone, castration en urgence, radiothérapie ou chirurgie\n- Rétention : sondage ; obstruction urétérale : néphrostomie\n- Antalgiques (**morphine**), soins palliatifs',
      ],
    ],
    molecules: [
      ['goserelin', 'premiere', 'Castration chimique'],
      ['bicalutamide', 'premiere', 'Antiandrogène'],
      ['abiraterone', 'alternative', 'Maladie métastatique'],
      ['acide-zoledronique', 'adjuvant', 'Métastases osseuses'],
      ['dexamethasone', 'adjuvant', 'Compression médullaire'],
      ['morphine', 'adjuvant', 'Douleurs osseuses'],
    ],
    complications: [
      {
        nom: 'Compression médullaire',
        fiche: 'compression-medullaire',
        description: 'Métastases vertébrales.',
        traitement: '- Dexaméthasone, castration, radiothérapie',
        clinique: '- Paraparésie',
        paraclinique: '- IRM',
      },
      {
        nom: 'Insuffisance rénale obstructive',
        fiche: 'insuffisance-renale-aigue',
        description: 'Envahissement urétéral.',
        traitement: '- Néphrostomie',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Fractures pathologiques',
        description: 'Métastases osseuses.',
        traitement: '- Orthopédie, radiothérapie',
        clinique: '- Douleur',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pour les formes localisées ; survie de quelques années pour les formes métastatiques sous hormonothérapie',
    urgences: [],
    symptomes: [
      ['Dysurie', 'frequent'],
      ['Douleurs osseuses', 'frequent'],
      ['Rétention urinaire', 'occasionnel'],
      ['Perte de poids', 'frequent'],
      ['Hématurie', 'occasionnel'],
      ['Déficit moteur', 'occasionnel'],
    ],
    sources: ['ESMO — recommandations de pratique clinique', 'NCCN — recommandations de pratique clinique'],
    niveaux: {
      cs: ['- Toucher rectal, orientation', '- Prostate dure, PSA élevé, douleurs osseuses'],
      hgr: ['- PSA, biopsies, orchidectomie', '- Radiothérapie, chirurgie radicale'],
      tert: ['- Urologie oncologique, radiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Cancer localisé',
        type: 'commune',
        description: 'Découverte au toucher rectal ou au PSA.',
        terrain: '- Homme > 50 ans',
        fonctionnels: '- Peu de symptômes',
        generaux: '',
        physiques: '- Nodule prostatique dur',
        paraclinique: '- PSA élevé, biopsie positive',
        etiologies: '',
        syndromes: [],
        examens: [['psa', 'Dépistage']],
      },
      {
        nom: 'Cancer métastatique',
        type: 'gravite',
        description: 'Forme fréquente au diagnostic.',
        terrain: '',
        fonctionnels: '- Douleurs osseuses',
        generaux: '- Amaigrissement, anémie',
        physiques: '- Prostate pierreuse',
        paraclinique: '- PSA très élevé, métastases',
        etiologies: '',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
      },
    ],
  },

  // =================================================================== Lithiase / colique néphrétique
  {
    ...URO,
    slug: 'lithiase-urinaire-colique-nephretique',
    nom: 'Lithiase urinaire et colique néphrétique',
    resume:
      'Douleur lombaire brutale irradiant vers les organes génitaux, agitation, hématurie : AINS (diclofénac, kétoprofène), hydratation modérée ; échographie ; alpha-bloquant pour l’expulsion ; colique fébrile ou rein unique ou anurie = drainage urgent.',
    definition:
      'Présence de calculs dans les voies urinaires ; la colique néphrétique est la douleur aiguë liée à la mise en tension brutale de la voie excrétrice par un obstacle (calcul le plus souvent).',
    physiopathologie:
      '## Mécanismes\n- Sursaturation des urines (calcium, oxalate, acide urique, phosphates), faible diurèse, infection (struvite)\n- Obstacle urétéral : distension, douleur, risque d’infection et d’insuffisance rénale\n- Schistosomiase urinaire : calcifications et sténoses',
    diagnostic:
      '## Clinique\n- **Douleur lombaire** unilatérale brutale, intense, irradiant vers la fosse iliaque et les organes génitaux, patient **agité**\n- Nausées, vomissements, hématurie, signes urinaires\n- **Signes de gravité** : fièvre (pyélonéphrite obstructive), anurie, rein unique, douleur résistante\n\n## Examens\n- Bandelette (hématurie), ECBU, créatinine\n- **Échographie** (dilatation, calcul), ASP (calculs radio-opaques), scanner sans injection (référence)',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie, leucocytes.'],
      ['premiere_intention', 'echographie-renale', 'Dilatation, calcul.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'ecbu', 'Infection.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Scanner sans injection : calcul.'],
      ['etiologique', 'uricemie', 'Lithiase urique.'],
      ['etiologique', 'calcemie-magnesemie', 'Hypercalcémie.'],
      ['premiere_intention', 'beta-hcg', 'Femme : GEU, grossesse.'],
    ],
    scores: [],
    differentiels: [
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite, fièvre.'],
      ['grossesse-extra-uterine', 'β-hCG positive.'],
      ['torsion-d-annexe', 'Femme, masse annexielle.'],
      ['Anévrisme de l’aorte abdominale', 'Sujet âgé, masse battante, choc.'],
      ['infections-urinaires-adulte', 'Pyélonéphrite sans obstacle.'],
    ],
    etiologies:
      '## Facteurs\n- Faible consommation d’eau, chaleur, alimentation riche en sel et protéines animales\n- Hyperuricémie (goutte), hypercalcémie, infections urinaires, schistosomiase, malformations',
    principes: [
      [
        'Colique simple',
        'Soulager.',
        '- **AINS** : **diclofénac** 75 mg IM ou **kétoprofène** IV (si fonction rénale normale, pas de grossesse)\n- Paracétamol, **morphine** titrée si insuffisant\n- Hydratation normale (pas d’hyperhydratation)\n- Calcul < 10 mm : traitement médical expulsif (**tamsulosine**), filtration des urines',
      ],
      [
        'Colique compliquée',
        'Urgence urologique.',
        '- **Fièvre** (pyélonéphrite obstructive), **anurie**, rein unique, douleur hyperalgique : **drainage** (sonde JJ ou néphrostomie) + antibiotiques (**ceftriaxone**)',
      ],
      [
        'Traitement du calcul et prévention',
        'Éviter les récidives.',
        '- Lithotritie, urétéroscopie, néphrolithotomie selon la taille et le siège\n- **Boire > 2 L/j**, réduire le sel et les protéines animales\n- Lithiase urique : alcalinisation (bicarbonate), **allopurinol**',
      ],
    ],
    molecules: [
      ['diclofenac', 'premiere', 'Colique néphrétique'],
      ['ketoprofene', 'alternative', 'Colique néphrétique'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Douleur résistante'],
      ['tamsulosine', 'premiere', 'Expulsion du calcul'],
      ['ceftriaxone', 'premiere', 'Colique fébrile'],
      ['allopurinol', 'adjuvant', 'Lithiase urique'],
      ['bicarbonate-de-sodium', 'adjuvant', 'Alcalinisation (lithiase urique)'],
    ],
    complications: [
      {
        nom: 'Pyélonéphrite obstructive',
        fiche: 'infections-urinaires-adulte',
        description: 'Urgence.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Fièvre, frissons',
        paraclinique: '- ECBU, échographie',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Obstacle bilatéral ou rein unique.',
        traitement: '- Drainage',
        clinique: '- Anurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Rupture de la voie excrétrice',
        description: 'Hyperpression.',
        traitement: '- Drainage',
        clinique: '- Douleur, fièvre',
        paraclinique: '- Scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Expulsion spontanée de la plupart des calculs < 5 mm ; récidive dans 50 % des cas à 10 ans',
    urgences: ['choc-septique'],
    symptomes: [
      ['Douleur lombaire', 'tres_frequent'],
      ['Hématurie', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Brûlures mictionnelles', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: ['Sabiston Textbook of Surgery', "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: ['- AINS, antalgiques, bandelette, orientation', '- Fièvre, anurie, douleur résistante'],
      hgr: ['- Échographie, antibiotiques, drainage si possible', '- Traitement endoscopique du calcul'],
      tert: ['- Urétéroscopie, lithotritie, néphrolithotomie', ''],
    },
    alertes: { 'choc-septique': 'Colique néphrétique avec fièvre, frissons ou hypotension' },
    formes: [
      {
        nom: 'Colique néphrétique simple',
        type: 'commune',
        description: 'Douleur sans fièvre.',
        terrain: '- Adulte de 20 à 50 ans',
        fonctionnels: '- Douleur lombaire brutale, agitation',
        generaux: '- Apyrexie',
        physiques: '- Fosse lombaire sensible',
        paraclinique: '- Hématurie, dilatation modérée',
        etiologies: '- Calcul urétéral',
        syndromes: [],
        examens: [['echographie-renale', 'Dilatation']],
      },
      {
        nom: 'Colique néphrétique fébrile',
        type: 'gravite',
        description: 'Pyélonéphrite obstructive.',
        terrain: '',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre, frissons, choc',
        physiques: '',
        paraclinique: '- Hyperleucocytose, dilatation',
        etiologies: '',
        syndromes: ['syndrome-infectieux', 'syndrome-de-choc'],
      },
    ],
  },
];
