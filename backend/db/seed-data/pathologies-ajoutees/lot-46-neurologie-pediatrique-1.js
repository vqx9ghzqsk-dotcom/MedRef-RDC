'use strict';

/**
 * Lot 46 (phase 2, neurologie pédiatrique, partie 1) — hydrocéphalie de l'enfant, spina bifida et
 * défauts de fermeture du tube neural, céphalées de l'enfant, syndrome de Guillain-Barré de
 * l'enfant, dystrophie musculaire de Duchenne. Rédigé par IA (OMS, Nelson, Adams and Victor) : à
 * valider.
 */

const NEUROPED = { departement: 'pediatrie', specialite: 'Neurologie pédiatrique' };

module.exports = [
  // =================================================================== Hydrocéphalie
  {
    ...NEUROPED,
    slug: 'hydrocephalie-enfant',
    nom: 'Hydrocéphalie de l’enfant',
    resume:
      'Dilatation des ventricules cérébraux par excès de liquide cérébrospinal, très fréquente en Afrique (séquelle de méningite ou d’infection néonatale, spina bifida, sténose de l’aqueduc) : chez le nourrisson, macrocéphalie évolutive, fontanelle bombée, disjonction des sutures, regard « en coucher de soleil », veines du scalp dilatées ; chez l’enfant plus grand, HTIC (céphalées, vomissements, œdème papillaire) ; échographie transfontanellaire, scanner ; dérivation ventriculo-péritonéale ou ventriculocisternostomie endoscopique ; mesure du périmètre crânien à chaque consultation.',
    definition:
      'Augmentation du volume des ventricules cérébraux due à un déséquilibre entre la production et la résorption du liquide cérébrospinal, avec ou sans hypertension intracrânienne.',
    physiopathologie:
      '## Mécanismes\n- **Obstructive** (non communicante) : sténose de l’aqueduc de Sylvius, malformation de Chiari II (spina bifida), Dandy-Walker, tumeurs de la fosse postérieure, kystes\n- **Communicante** : défaut de résorption après **méningite** bactérienne ou tuberculeuse, **hémorragie intraventriculaire** du prématuré, infections congénitales (toxoplasmose, CMV)\n\n## Conséquences\n- Nourrisson (sutures ouvertes) : augmentation rapide du périmètre crânien\n- Enfant plus grand : **hypertension intracrânienne**, risque d’engagement',
    diagnostic:
      '## Clinique\n- Nourrisson : **macrocéphalie** évolutive (périmètre crânien croisant les courbes), **fontanelle bombée** et tendue, disjonction des sutures, **regard en coucher de soleil**, veines du scalp dilatées, irritabilité, vomissements, retard psychomoteur\n- Enfant : **céphalées** matinales, **vomissements**, troubles visuels, **œdème papillaire**, troubles de la marche, baisse des résultats scolaires\n- Signes de gravité : somnolence, bradycardie, HTA, apnées (engagement)\n- Rechercher : spina bifida, antécédent de méningite, prématurité\n\n## Examens\n- **Échographie transfontanellaire** (nourrisson), **scanner** ou IRM cérébrale\n- Fond d’œil ; PL contre-indiquée en cas d’hydrocéphalie obstructive',
    examens: [
      ['premiere_intention', 'echographie-transfontanellaire', 'Dilatation ventriculaire.'],
      ['confirmation', 'scanner-cerebral', 'Cause, type.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Malformations, tumeur.'],
      ['gravite', 'fond-d-oeil', 'Œdème papillaire.'],
      ['premiere_intention', 'anthropometrie', 'Périmètre crânien.'],
    ],
    scores: [],
    differentiels: [
      [
        'Macrocéphalie familiale',
        'Parents à grosse tête, développement normal, croissance parallèle aux courbes.',
      ],
      ['Hématome sous-dural chronique', 'Maltraitance, traumatisme.'],
      ['meningite-bacterienne-enfant', 'Fontanelle bombée fébrile.'],
      ['rachitisme-carentiel', 'Grosse tête carrée, bosses frontales.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Séquelles de méningite, spina bifida, sténose de l’aqueduc, hémorragie du prématuré, tumeurs',
    principes: [
      [
        'Traitement chirurgical',
        'Dériver le LCS.',
        '- **Dérivation ventriculo-péritonéale** (valve) ou **ventriculocisternostomie endoscopique** (avec ou sans coagulation des plexus choroïdes, adaptée aux contextes à ressources limitées)\n- Programmes de neurochirurgie pédiatrique et missions humanitaires',
      ],
      [
        'En attendant la chirurgie',
        'Limiter l’HTIC.',
        '- Position demi-assise ; **acétazolamide** 25–100 mg/kg/j (solution d’attente, efficacité limitée) ; ponctions évacuatrices dans les hydrocéphalies post-hémorragiques du prématuré\n- Traitement de la cause (méningite)',
      ],
      [
        'Suivi',
        'Repérer les complications de la valve.',
        '- Dysfonction de valve : céphalées, vomissements, somnolence, fontanelle bombée → urgence\n- Infection de valve : fièvre, rougeur du trajet\n- Rééducation, suivi du développement, scolarisation',
      ],
    ],
    molecules: [
      ['acetazolamide', 'alternative', 'Attente de la chirurgie'],
      ['ceftriaxone', 'adjuvant', 'Infection de valve, méningite'],
      ['vancomycine', 'adjuvant', 'Infection de valve'],
    ],
    complications: [
      {
        nom: 'Engagement cérébral',
        fiche: 'hypertension-intracranienne',
        description: 'HTIC non traitée, dysfonction de valve.',
        traitement: '- Chirurgie urgente',
        clinique: '- Somnolence, bradycardie, mydriase',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Infection de la dérivation',
        description: 'Staphylocoques.',
        traitement: '- Antibiotiques, ablation de la valve',
        clinique: '- Fièvre, rougeur',
        paraclinique: '- LCS',
      },
      {
        nom: 'Retard psychomoteur et cécité',
        fiche: 'retard-developpement-psychomoteur',
        description: 'Atteinte cérébrale.',
        traitement: '- Rééducation',
        clinique: '- Retard',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si traitée tôt ; dépend de la cause ; dysfonctions de valve fréquentes nécessitant un suivi à vie',
    urgences: ['traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Macrocéphalie', 'tres_frequent'],
      ['Fontanelle bombée', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Troubles visuels', 'occasionnel'],
      ['Retard de développement psychomoteur', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
      "Adams and Victor's Principles of Neurology",
    ],
    niveaux: {
      cs: [
        '- Mesure du périmètre crânien à chaque visite, orientation',
        '- Macrocéphalie évolutive, fontanelle bombée',
      ],
      hgr: ['- Échographie transfontanellaire, scanner', '- Neurochirurgie'],
      tert: ['- Dérivation, endoscopie', ''],
    },
    alertes: {
      'traumatisme-cranien-grave-urgence':
        'Enfant porteur de valve avec somnolence, vomissements et céphalées',
    },
    formes: [
      {
        nom: 'Hydrocéphalie du nourrisson',
        type: 'commune',
        description: 'Macrocéphalie.',
        terrain: '- Nourrisson',
        fonctionnels: '- Irritabilité, vomissements',
        generaux: '',
        physiques: '- Périmètre crânien augmenté, fontanelle bombée, coucher de soleil',
        paraclinique: '- Dilatation ventriculaire',
        etiologies: '- Post-infectieuse, malformative',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
      {
        nom: 'Hydrocéphalie post-méningitique',
        type: 'etiologique',
        description: 'Séquelle.',
        terrain: '- Antécédent de méningite',
        fonctionnels: '',
        generaux: '',
        physiques: '- Macrocéphalie',
        paraclinique: '',
        etiologies: '- Méningite bactérienne ou tuberculeuse',
        syndromes: [],
      },
      {
        nom: 'Dysfonction de valve',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Enfant dérivé',
        fonctionnels: '- Céphalées, vomissements',
        generaux: '',
        physiques: '- Somnolence',
        paraclinique: '- Dilatation ventriculaire',
        etiologies: '',
        syndromes: ['syndrome-d-engagement-cerebral'],
      },
    ],
  },

  // =================================================================== Spina bifida
  {
    ...NEUROPED,
    slug: 'spina-bifida-defauts-tube-neural',
    nom: 'Spina bifida et défauts de fermeture du tube neural',
    resume:
      'Malformations congénitales graves et fréquentes en RDC, largement évitables par l’acide folique avant la conception : anencéphalie (incompatible avec la vie), encéphalocèle, myéloméningocèle (poche lombosacrée avec paraplégie, vessie et intestin neurologiques, hydrocéphalie) ; à la naissance : protéger la poche par une compresse stérile humide, décubitus ventral, antibiotiques, fermeture chirurgicale dans les 48–72 h ; prise en charge de l’hydrocéphalie, sondages intermittents, rééducation ; prévention : acide folique 0,4 mg/j (4–5 mg si antécédent) et enrichissement des farines.',
    definition:
      'Anomalies de la fermeture du tube neural survenant vers le 28e jour de grossesse : anencéphalie, encéphalocèle, myéloméningocèle (spina bifida aperta), méningocèle, spina bifida occulta.',
    physiopathologie:
      '## Facteurs\n- **Carence en folates** (alimentation pauvre), antiépileptiques pendant la grossesse (**valproate**, carbamazépine), diabète maternel, obésité, fièvre au 1er trimestre, antécédent familial\n\n## Myéloméningocèle\n- Moelle et méninges exposées → **paraplégie** sous le niveau lésionnel, **vessie neurologique**, troubles anorectaux, pieds bots\n- **Malformation de Chiari II** → **hydrocéphalie** (80–90 %)\n- Risque de **méningite** si la poche est rompue',
    diagnostic:
      '## Anténatal\n- Échographie obstétricale, alpha-fœtoprotéine maternelle élevée\n\n## Naissance\n- **Poche lombosacrée** (rompue ou non), niveau lésionnel moteur et sensitif\n- Membres inférieurs flasques, pieds bots, luxation de hanche, absence de tonus anal, dribble urinaire\n- **Périmètre crânien**, fontanelle\n- Spina bifida occulta : touffe de poils, fossette, angiome, lipome lombosacré\n\n## Examens\n- **Échographie transfontanellaire** (hydrocéphalie), échographie rénale et vésicale\n- IRM rachidienne et cérébrale si disponible',
    examens: [
      ['premiere_intention', 'echographie-transfontanellaire', 'Hydrocéphalie.'],
      ['premiere_intention', 'echographie-renale', 'Retentissement urinaire.'],
      ['deuxieme_intention', 'irm-rachidienne', 'Moelle attachée, malformations.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Chiari II.'],
      ['etiologique', 'echographie-obstetricale', 'Diagnostic anténatal.'],
      ['etiologique', 'alpha-foetoproteine', 'Dépistage anténatal.'],
    ],
    scores: [],
    differentiels: [
      ['malformations-congenitales-majeures', 'Autres malformations du nouveau-né.'],
      ['Tératome sacro-coccygien', 'Masse sacrée, sans déficit au début.'],
      ['poliomyelite-paralysies-flasques-aigues', 'Paralysie flasque acquise.'],
    ],
    etiologies: '## Facteurs\n- Carence en acide folique, valproate, diabète maternel, antécédents',
    principes: [
      [
        'À la naissance',
        'Protéger.',
        '- **Compresse stérile humide** (sérum physiologique) sur la poche, film plastique, **décubitus ventral**, pas de couche sur la lésion\n- **Antibiotiques** (ampicilline + gentamicine) si poche rompue ; maintien de la température\n- Transfert en neurochirurgie : **fermeture dans les 48–72 h**',
      ],
      [
        'Prise en charge à long terme',
        'Approche multidisciplinaire.',
        '- **Hydrocéphalie** : dérivation ou endoscopie\n- **Vessie neurologique** : **sondages intermittents propres**, prévention des infections urinaires et de l’insuffisance rénale\n- Intestin : régime, laxatifs, lavements\n- Orthopédie (pieds bots, hanches), kinésithérapie, appareillage, prévention des escarres\n- Scolarisation et inclusion, soutien des familles (stigmatisation)',
      ],
      [
        'Prévention',
        'Acide folique.',
        '- **Acide folique 0,4 mg/j** chez toute femme en âge de procréer, au moins 1 mois avant et 3 mois après la conception\n- **4–5 mg/j** si antécédent d’enfant atteint, épilepsie traitée ou diabète\n- Éviter le valproate chez la femme en âge de procréer ; enrichissement des farines',
      ],
    ],
    molecules: [
      ['acide-folique', 'premiere', 'Prévention'],
      ['ampicilline', 'premiere', 'Poche rompue'],
      ['gentamicine', 'premiere', 'Poche rompue'],
    ],
    complications: [
      {
        nom: 'Hydrocéphalie',
        fiche: 'hydrocephalie-enfant',
        description: 'Chiari II.',
        traitement: '- Dérivation',
        clinique: '- Macrocéphalie',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Méningite',
        fiche: 'meningite-neonatale',
        description: 'Poche rompue.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '- LCS',
      },
      {
        nom: 'Infections urinaires et insuffisance rénale',
        fiche: 'infection-urinaire-enfant',
        description: 'Vessie neurologique.',
        traitement: '- Sondages, antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '- ECBU, créatinine',
      },
      {
        nom: 'Escarres',
        description: 'Insensibilité.',
        traitement: '- Prévention, soins',
        clinique: '- Plaies',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Anencéphalie : décès ; myéloméningocèle : survie et autonomie améliorées par la chirurgie précoce et le suivi ; mortalité élevée sans chirurgie',
    urgences: [],
    symptomes: [
      ['Paralysie flasque', 'tres_frequent'],
      ['Troubles sphinctériens', 'tres_frequent'],
      ['Macrocéphalie', 'frequent'],
      ['Déformation d’un membre', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Acide folique préconceptionnel, protection de la poche, transfert', '- Toute myéloméningocèle'],
      hgr: ['- Antibiotiques, échographie', '- Neurochirurgie'],
      tert: ['- Fermeture, dérivation, suivi multidisciplinaire', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Myéloméningocèle',
        type: 'commune',
        description: 'Forme ouverte.',
        terrain: '- Nouveau-né',
        fonctionnels: '',
        generaux: '',
        physiques: '- Poche lombosacrée, paraplégie, pieds bots',
        paraclinique: '- Hydrocéphalie associée',
        etiologies: '- Carence en folates',
        syndromes: [],
      },
      {
        nom: 'Anencéphalie',
        type: 'gravite',
        description: 'Incompatible avec la vie.',
        terrain: '- Fœtus',
        fonctionnels: '',
        generaux: '',
        physiques: '- Absence de voûte crânienne',
        paraclinique: '- Échographie anténatale',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Spina bifida occulta',
        type: 'evolutive',
        description: 'Fermée.',
        terrain: '',
        fonctionnels: '- Troubles urinaires tardifs',
        generaux: '',
        physiques: '- Touffe de poils, fossette',
        paraclinique: '- Moelle attachée à l’IRM',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Céphalées enfant
  {
    ...NEUROPED,
    slug: 'cephalees-enfant',
    nom: 'Céphalées de l’enfant',
    resume:
      'Plainte fréquente chez l’enfant d’âge scolaire : céphalées aiguës fébriles (paludisme, méningite, sinusite, infections virales : toujours éliminer méningite et neuropaludisme), céphalées récurrentes primaires (migraine, céphalées de tension), céphalées chroniques progressives (hypertension intracrânienne : tumeur, hydrocéphalie, abcès) ; rechercher les signes d’alarme ; TDR paludisme, fond d’œil, tension artérielle ; paracétamol ou ibuprofène, repos ; imagerie si signes d’alarme.',
    definition:
      'Douleurs de la tête chez l’enfant, aiguës, récurrentes ou chroniques progressives, primaires (migraine, céphalée de tension) ou secondaires (infections, HTIC, HTA, troubles visuels).',
    physiopathologie:
      '## Céphalées secondaires\n- **Aiguës fébriles** : **paludisme**, **méningite**, encéphalite, sinusite, grippe, typhoïde\n- **Chroniques progressives** : **HTIC** (tumeur de la fosse postérieure, hydrocéphalie, abcès cérébral, tuberculome, hypertension intracrânienne idiopathique)\n- Autres : **HTA** (GNA), traumatisme, troubles de la réfraction, intoxication au monoxyde de carbone, abus d’antalgiques\n\n## Céphalées primaires\n- **Migraine** (souvent familiale), **céphalées de tension** (stress, école, violences)',
    diagnostic:
      '## Interrogatoire\n- Mode d’installation, fréquence, horaire, localisation, signes associés (fièvre, vomissements, troubles visuels), retentissement scolaire, antécédents familiaux de migraine\n- **Migraine de l’enfant** : crises de 2 à 72 h, souvent bifrontales, pulsatiles, avec nausées, photophobie, phonophobie, soulagées par le sommeil\n\n## Signes d’alarme (imagerie)\n- Céphalées **matinales** ou réveillant l’enfant, **vomissements** en jet, aggravation progressive\n- **Fièvre avec raideur de nuque**, troubles de conscience\n- Examen neurologique anormal, **œdème papillaire**, ataxie, troubles visuels, macrocéphalie\n- Âge < 3 ans, changement de caractère, baisse scolaire\n\n## Examens\n- **TDR paludisme** si fièvre, **tension artérielle**, **fond d’œil**, acuité visuelle\n- PL si suspicion de méningite (après élimination de l’HTIC) ; **scanner ou IRM** si signes d’alarme',
    examens: [
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['gravite', 'fond-d-oeil', 'Œdème papillaire.'],
      ['premiere_intention', 'acuite-visuelle', 'Troubles de la réfraction.'],
      ['gravite', 'scanner-cerebral', 'Signes d’alarme.'],
      ['gravite', 'irm-cerebrale', 'Tumeur.'],
      ['etiologique', 'lcr', 'Méningite.'],
    ],
    scores: [],
    differentiels: [
      ['meningite-bacterienne-enfant', 'Fièvre, raideur de nuque.'],
      ['paludisme-grave-enfant', 'Fièvre, troubles de conscience.'],
      ['hypertension-intracranienne', 'Céphalées matinales, vomissements, œdème papillaire.'],
      ['hypertension-arterielle-enfant', 'HTA à la mesure.'],
      ['cephalees-migraine', 'Fiche de l’adulte.'],
    ],
    etiologies: '## Causes\n- Infections, migraine, céphalées de tension, HTIC, HTA, troubles visuels',
    principes: [
      [
        'Céphalée aiguë',
        'Éliminer l’urgence.',
        '- Fièvre : TDR paludisme, recherche de méningite (traitement selon la fiche correspondante)\n- **Paracétamol** 15 mg/kg ou **ibuprofène** 10 mg/kg, repos dans le calme',
      ],
      [
        'Migraine',
        'Traiter tôt la crise.',
        '- **Ibuprofène** 10 mg/kg (ou paracétamol) **dès le début** de la crise, repos dans l’obscurité\n- Éviter l’abus d’antalgiques (> 10–15 jours par mois)\n- **Prophylaxie** si crises fréquentes ou invalidantes : **propranolol** 1–2 mg/kg/j, **amitriptyline** à faible dose, **cyproheptadine** chez le jeune enfant\n- Hygiène de vie : sommeil régulier, repas, hydratation, gestion du stress',
      ],
      [
        'Céphalées de tension et secondaires',
        'Traiter la cause.',
        '- Écoute, recherche de difficultés scolaires ou familiales, de violences ; correction des troubles visuels\n- Signes d’alarme : imagerie et orientation neurochirurgicale',
      ],
    ],
    molecules: [
      ['ibuprofene', 'premiere', 'Crise de migraine'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['propranolol', 'alternative', 'Prophylaxie de la migraine'],
      ['amitriptyline', 'alternative', 'Prophylaxie'],
      ['cyproheptadine', 'alternative', 'Prophylaxie chez le jeune enfant'],
    ],
    complications: [
      {
        nom: 'Abus d’antalgiques',
        description: 'Céphalées chroniques quotidiennes.',
        traitement: '- Sevrage, prophylaxie',
        clinique: '- Céphalées quotidiennes',
        paraclinique: '',
      },
      {
        nom: 'Retentissement scolaire',
        description: 'Absentéisme.',
        traitement: '- Prise en charge globale',
        clinique: '- Absences',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Migraine de l’enfant : amélioration fréquente à l’adolescence ; pronostic des céphalées secondaires lié à la cause',
    urgences: ['syndrome-meninge-febrile'],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Photophobie', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Troubles visuels', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      "Adams and Victor's Principles of Neurology",
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- TDR paludisme, tension, antalgiques, conseils', '- Signes d’alarme, fièvre avec raideur'],
      hgr: ['- PL, fond d’œil, scanner', ''],
      tert: ['- Neurologie pédiatrique, neurochirurgie', ''],
    },
    alertes: {
      'syndrome-meninge-febrile':
        'Enfant avec céphalées fébriles, raideur de nuque ou troubles de conscience',
    },
    formes: [
      {
        nom: 'Migraine de l’enfant',
        type: 'commune',
        description: 'Céphalée primaire.',
        terrain: '- Enfant d’âge scolaire, antécédents familiaux',
        fonctionnels: '- Crises pulsatiles, nausées',
        generaux: '',
        physiques: '- Examen normal entre les crises',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Céphalée d’hypertension intracrânienne',
        type: 'gravite',
        description: 'Signes d’alarme.',
        terrain: '',
        fonctionnels: '- Céphalées matinales, vomissements',
        generaux: '',
        physiques: '- Œdème papillaire, ataxie',
        paraclinique: '- Imagerie anormale',
        etiologies: '- Tumeur, hydrocéphalie, abcès',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
      {
        nom: 'Céphalée aiguë fébrile',
        type: 'etiologique',
        description: 'Infection.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Raideur de nuque possible',
        paraclinique: '- TDR, LCS',
        etiologies: '- Paludisme, méningite',
        syndromes: ['syndrome-meninge'],
      },
    ],
  },

  // =================================================================== Guillain-Barré enfant
  {
    ...NEUROPED,
    slug: 'guillain-barre-enfant',
    nom: 'Syndrome de Guillain-Barré de l’enfant',
    resume:
      'Polyradiculonévrite aiguë inflammatoire, première cause de paralysie flasque aiguë de l’enfant depuis le recul de la poliomyélite : faiblesse ascendante et symétrique des membres inférieurs, refus de marcher, douleurs, aréflexie, quelques jours à semaines après une infection ; signaler toute PFA (surveillance polio, 2 prélèvements de selles) ; risque d’atteinte respiratoire et de troubles dysautonomiques ; LCS (dissociation albumino-cytologique) ; immunoglobulines IV, surveillance respiratoire, kinésithérapie.',
    definition:
      'Neuropathie périphérique aiguë auto-immune démyélinisante ou axonale, avec paralysie flasque ascendante, aréflexie et dissociation albumino-cytologique du LCS, atteignant son maximum en moins de 4 semaines.',
    physiopathologie:
      '## Mécanismes\n- Réaction auto-immune croisée contre la myéline ou l’axone après une **infection** (Campylobacter jejuni, virus respiratoires, Zika, CMV, EBV) ou plus rarement une vaccination\n- Formes : démyélinisante (AIDP) ou axonale (AMAN, fréquente chez l’enfant en Afrique et en Asie)',
    diagnostic:
      '## Clinique\n- **Faiblesse** symétrique ascendante, **refus de marcher**, chutes, **douleurs** des membres et du dos (fréquentes chez l’enfant)\n- **Aréflexie** ostéotendineuse, troubles sensitifs discrets\n- Atteinte des nerfs crâniens (paralysie faciale, troubles de la déglutition)\n- **Signes de gravité** : troubles respiratoires (toux faible, respiration paradoxale, polypnée), troubles de la déglutition, **dysautonomie** (tachycardie, variations tensionnelles, rétention urinaire)\n\n## Examens\n- **LCS** : protéinorachie élevée, cellularité normale (après la 1re semaine)\n- **Électromyogramme** (démyélinisation ou atteinte axonale) si disponible\n- **Selles** : 2 prélèvements à 24–48 h d’intervalle pour la surveillance de la poliomyélite\n- Ionogramme (kaliémie), CPK, glycémie',
    examens: [
      ['confirmation', 'lcr', 'Dissociation albumino-cytologique.'],
      ['deuxieme_intention', 'electromyogramme', 'Démyélinisation ou atteinte axonale.'],
      ['etiologique', 'selles-poliovirus', 'Surveillance des PFA.'],
      ['premiere_intention', 'ionogramme', 'Hypokaliémie.'],
      ['premiere_intention', 'cpk', 'Myosite.'],
      ['gravite', 'gaz-du-sang', 'Insuffisance respiratoire.'],
    ],
    scores: [],
    differentiels: [
      ['poliomyelite-paralysies-flasques-aigues', 'Paralysie asymétrique fébrile.'],
      ['syndrome-de-guillain-barre', 'Fiche de l’adulte.'],
      ['konzo', 'Paraparésie spastique brutale (manioc).'],
      ['compression-medullaire', 'Niveau sensitif, troubles sphinctériens précoces.'],
      ['Myélite transverse', 'Niveau sensitif, rétention urinaire.'],
      ['Paralysie hypokaliémique', 'Kaliémie basse.'],
    ],
    etiologies: '## Déclencheurs\n- Infections digestives (Campylobacter) ou respiratoires, arboviroses',
    principes: [
      [
        'Surveillance',
        'Anticiper la détresse respiratoire.',
        '- Hospitalisation, surveillance de la **fonction respiratoire** (force de la toux, comptage, SpO2), de la déglutition, du pouls et de la tension\n- Transfert en réanimation si atteinte respiratoire, troubles de la déglutition ou progression rapide',
      ],
      [
        'Traitement',
        'Immunomodulation.',
        '- **Immunoglobulines IV** 0,4 g/kg/j pendant 5 jours (ou 1 g/kg/j pendant 2 jours) chez l’enfant qui ne peut plus marcher (si disponibles)\n- Échanges plasmatiques en alternative\n- **Pas de corticoïdes**',
      ],
      [
        'Soins de support',
        'Prévenir les complications.',
        '- Kinésithérapie précoce, prévention des escarres et des thromboses, alimentation par sonde si troubles de la déglutition, antalgiques\n- **Déclaration** de la paralysie flasque aiguë (surveillance polio)',
      ],
    ],
    molecules: [
      ['immunoglobulines-humaines-polyvalentes', 'premiere', 'Formes sévères'],
      ['paracetamol', 'adjuvant', 'Douleurs'],
      ['ibuprofene', 'adjuvant', 'Douleurs'],
    ],
    complications: [
      {
        nom: 'Insuffisance respiratoire',
        description: 'Atteinte du diaphragme.',
        traitement: '- Ventilation mécanique',
        clinique: '- Toux faible, respiration paradoxale',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Dysautonomie',
        description: 'Atteinte du système nerveux autonome.',
        traitement: '- Monitoring',
        clinique: '- Arythmies, variations tensionnelles',
        paraclinique: '- ECG',
      },
      {
        nom: 'Pneumonie d’inhalation',
        fiche: 'pneumonie-enfant',
        description: 'Troubles de la déglutition.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, toux',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération complète chez la majorité des enfants en quelques semaines à mois ; séquelles plus fréquentes dans les formes axonales ; mortalité liée à la détresse respiratoire sans ventilation',
    urgences: [],
    symptomes: [
      ['Paralysie flasque', 'tres_frequent'],
      ['Faiblesse musculaire', 'tres_frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Douleurs osseuses', 'occasionnel'],
      ['Dysphagie', 'occasionnel'],
      ['Paralysie faciale', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      "Adams and Victor's Principles of Neurology",
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Toute PFA : déclaration, prélèvements de selles, transfert', '- Paralysie flasque aiguë'],
      hgr: ['- Surveillance respiratoire, PL, kinésithérapie', '- Réanimation'],
      tert: ['- IgIV, ventilation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme ascendante typique',
        type: 'commune',
        description: 'Refus de marcher.',
        terrain: '- Enfant après une infection',
        fonctionnels: '- Douleurs, faiblesse',
        generaux: '',
        physiques: '- Paralysie flasque symétrique, aréflexie',
        paraclinique: '- Protéinorachie élevée',
        etiologies: '- Post-infectieux',
        syndromes: [],
      },
      {
        nom: 'Forme avec atteinte respiratoire',
        type: 'gravite',
        description: 'Réanimation.',
        terrain: '',
        fonctionnels: '- Dyspnée, troubles de la déglutition',
        generaux: '',
        physiques: '- Toux faible',
        paraclinique: '- Hypercapnie',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Duchenne
  {
    ...NEUROPED,
    slug: 'dystrophie-musculaire-de-duchenne',
    nom: 'Dystrophie musculaire de Duchenne',
    resume:
      'Myopathie héréditaire liée à l’X (absence de dystrophine), chez le garçon : retard de la marche, chutes fréquentes, difficultés à monter les escaliers et à se relever (signe de Gowers), démarche dandinante, hypertrophie des mollets, vers 3–5 ans ; CPK très élevées ; perte de la marche vers 10–12 ans, puis atteinte respiratoire et cardiaque ; corticoïdes (prednisolone ou deflazacort), kinésithérapie, prévention des rétractions, suivi cardiaque et respiratoire, conseil génétique.',
    definition:
      'Myopathie dégénérative progressive due à des mutations du gène DMD (chromosome X) entraînant l’absence de dystrophine, la plus fréquente des dystrophies musculaires de l’enfant (≈ 1/3 500 garçons).',
    physiopathologie:
      '## Mécanismes\n- Absence de **dystrophine** → fragilité de la membrane des fibres musculaires → nécrose et remplacement par du tissu fibreux et graisseux\n- Atteinte des muscles squelettiques (proximaux d’abord), du **myocarde** (cardiomyopathie dilatée) et des muscles respiratoires\n- Transmission liée à l’X (mères conductrices) ; un tiers de mutations nouvelles\n\n## Forme apparentée\n- **Dystrophie de Becker** : dystrophine diminuée, évolution plus lente',
    diagnostic:
      '## Clinique\n- Retard de la marche, **chutes** fréquentes, difficulté à courir, sauter, monter les escaliers\n- **Signe de Gowers** (se relève du sol en « grimpant sur ses jambes »), **démarche dandinante**, hyperlordose, marche sur la pointe des pieds\n- **Hypertrophie des mollets** (pseudo-hypertrophie)\n- Retard de langage ou difficultés d’apprentissage associés (un tiers)\n- Évolution : perte de la marche vers 10–12 ans, scoliose, rétractions, insuffisance respiratoire et cardiaque à l’adolescence\n\n## Examens\n- **CPK très élevées** (× 10 à 100)\n- Étude génétique du gène DMD (centre spécialisé), biopsie musculaire si génétique indisponible\n- **ECG**, **échocardiographie**, spirométrie',
    examens: [
      ['confirmation', 'cpk', 'Très élevées.'],
      ['deuxieme_intention', 'electromyogramme', 'Tracé myogène.'],
      ['confirmation', 'biopsie-histologie', 'Absence de dystrophine (si génétique indisponible).'],
      ['gravite', 'echocardiographie', 'Cardiomyopathie.'],
      ['gravite', 'ecg', 'Atteinte cardiaque.'],
      ['premiere_intention', 'bilan-hepatique', 'Transaminases élevées (origine musculaire).'],
    ],
    scores: [],
    differentiels: [
      ['paralysie-cerebrale', 'Atteinte non évolutive, spasticité.'],
      ['retard-developpement-psychomoteur', 'Retard global.'],
      ['rachitisme-carentiel', 'Faiblesse proximale, déformations osseuses.'],
      ['Amyotrophie spinale', 'Hypotonie, fasciculations de la langue, CPK normales.'],
      ['hepatites-virales-enfant', 'Transaminases élevées : penser à doser les CPK.'],
    ],
    etiologies: '## Transmission\n- Liée à l’X ; mutations nouvelles',
    principes: [
      [
        'Corticoïdes',
        'Ralentir la progression.',
        '- **Prednisolone** 0,75 mg/kg/j ou **deflazacort** 0,9 mg/kg/j, dès que la progression motrice plafonne (vers 4–6 ans)\n- Surveillance : poids, tension, glycémie, densité osseuse, cataracte ; **vitamine D et calcium**\n- Carte de corticothérapie (risque d’insuffisance surrénalienne en cas d’arrêt brutal)',
      ],
      [
        'Prise en charge multidisciplinaire',
        'Préserver la fonction.',
        '- **Kinésithérapie** et étirements quotidiens, attelles nocturnes, fauteuil roulant, prévention de la scoliose\n- **Cœur** : échocardiographie régulière, IEC (énalapril) dès l’atteinte cardiaque ou vers 10 ans\n- **Respiration** : vaccinations (pneumocoque, grippe), kinésithérapie respiratoire, ventilation non invasive si disponible\n- Scolarisation adaptée, soutien psychologique, soins palliatifs',
      ],
      ['Conseil génétique', 'Informer.', '- Dépistage des conductrices, information de la famille'],
    ],
    molecules: [
      ['prednisolone', 'premiere', 'Corticothérapie'],
      ['deflazacort', 'alternative', 'Corticothérapie'],
      ['cholecalciferol-vitamine-d3', 'adjuvant', 'Protection osseuse'],
      ['enalapril', 'adjuvant', 'Cardiomyopathie'],
    ],
    complications: [
      {
        nom: 'Cardiomyopathie dilatée',
        fiche: 'cardiomyopathie-dilatee',
        description: 'Atteinte du myocarde.',
        traitement: '- IEC, bêtabloquants',
        clinique: '- Dyspnée, œdèmes',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Insuffisance respiratoire',
        description: 'Faiblesse des muscles respiratoires.',
        traitement: '- Ventilation non invasive',
        clinique: '- Céphalées matinales, somnolence',
        paraclinique: '- Spirométrie',
      },
      {
        nom: 'Scoliose et rétractions',
        description: 'Perte de la marche.',
        traitement: '- Kinésithérapie, chirurgie',
        clinique: '- Déformations',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Fractures',
        description: 'Ostéoporose, corticoïdes.',
        traitement: '- Vitamine D, calcium',
        clinique: '- Douleurs',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Perte de la marche vers 10–12 ans ; décès vers 20 ans sans soins respiratoires et cardiaques, survie prolongée au-delà de 30 ans avec une prise en charge optimale',
    urgences: [],
    symptomes: [
      ['Faiblesse musculaire', 'tres_frequent'],
      ['Troubles de la marche', 'tres_frequent'],
      ['Retard de développement psychomoteur', 'frequent'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', "Adams and Victor's Principles of Neurology"],
    niveaux: {
      cs: ['- Garçon qui tombe souvent, signe de Gowers : orientation', '- Suspicion'],
      hgr: ['- CPK, ECG, kinésithérapie', ''],
      tert: ['- Neurologie pédiatrique, génétique, cardiologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme ambulatoire',
        type: 'commune',
        description: 'Enfant qui marche.',
        terrain: '- Garçon de 3 à 10 ans',
        fonctionnels: '- Chutes, difficultés à monter les escaliers',
        generaux: '',
        physiques: '- Signe de Gowers, mollets hypertrophiques',
        paraclinique: '- CPK très élevées',
        etiologies: '- Mutation DMD',
        syndromes: [],
      },
      {
        nom: 'Forme non ambulatoire',
        type: 'evolutive',
        description: 'Adolescent.',
        terrain: '- Adolescent',
        fonctionnels: '- Dyspnée',
        generaux: '',
        physiques: '- Scoliose, rétractions',
        paraclinique: '- Cardiomyopathie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
