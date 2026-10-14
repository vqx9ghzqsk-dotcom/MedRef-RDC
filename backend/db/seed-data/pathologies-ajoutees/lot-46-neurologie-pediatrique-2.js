'use strict';

/**
 * Lot 46 (phase 2, neurologie pédiatrique partie 2, endocrinologie et urgences pédiatriques) —
 * anomalies de la différenciation sexuelle, déficience intellectuelle, méningo-encéphalite de
 * l'enfant, syndrome de West, morsures de serpent chez l'enfant. Rédigé par IA (OMS, ILAE, mhGAP,
 * Nelson, Pocket book) : à valider.
 */

const ENDOPED = { departement: 'pediatrie', specialite: 'Endocrinologie pédiatrique' };
const NEUROPED = { departement: 'pediatrie', specialite: 'Neurologie pédiatrique' };
const URGPED = { departement: 'pediatrie', specialite: 'Urgences pédiatriques' };

module.exports = [
  // =================================================================== DSD
  {
    ...ENDOPED,
    slug: 'anomalies-differenciation-sexuelle',
    nom: 'Anomalies de la différenciation sexuelle',
    resume:
      'Situations où le sexe chromosomique, gonadique ou anatomique est atypique : ambiguïté sexuelle à la naissance (clitoridomégalie, hypospadias sévère avec cryptorchidie bilatérale, gonades non palpables), parfois découverte à la puberté (aménorrhée primaire, virilisation) ; cause principale chez le nouveau-né 46,XX virilisé : hyperplasie congénitale des surrénales (urgence de la perte de sel) ; ne pas déclarer le sexe avant le bilan (caryotype, échographie, 17-OHP, ionogramme), annonce et décision en équipe avec la famille, soutien psychosocial, éviter la stigmatisation.',
    definition:
      'Affections congénitales dans lesquelles le développement du sexe chromosomique, gonadique ou anatomique est atypique (DSD 46,XX, DSD 46,XY, anomalies des chromosomes sexuels).',
    physiopathologie:
      '## DSD 46,XX (virilisation d’une fille)\n- **Hyperplasie congénitale des surrénales** (déficit en 21-hydroxylase : la plus fréquente)\n- Androgènes maternels (tumeur, médicaments), DSD ovotesticulaire\n\n## DSD 46,XY (sous-virilisation d’un garçon)\n- Anomalies du développement testiculaire (dysgénésie gonadique)\n- Défauts de synthèse de la testostérone, **déficit en 5-alpha-réductase**, **insensibilité aux androgènes**\n- Hypospadias sévère, micropénis\n\n## Anomalies des chromosomes sexuels\n- **Turner** (45,X), **Klinefelter** (47,XXY), mosaïques 45,X/46,XY',
    diagnostic:
      '## Nouveau-né\n- **Ambiguïté** : clitoridomégalie, fusion des bourrelets labioscrotaux, sinus urogénital, hypospadias périnéal ou scrotal, **gonades non palpables**, micropénis\n- **Surveiller la perte de sel** (vomissements, déshydratation à J7–J21)\n- Hyperpigmentation, antécédents familiaux, consanguinité, prise d’hormones pendant la grossesse\n\n## Adolescent\n- Aménorrhée primaire, absence de puberté, virilisation à la puberté chez une fille, gynécomastie\n\n## Examens\n- **Caryotype** (ou FISH/PCR SRY)\n- **17-OH-progestérone**, **ionogramme**, glycémie, cortisolémie\n- **Échographie pelvienne** (utérus, gonades)\n- Testostérone, LH, FSH, AMH ; génitographie en centre spécialisé',
    examens: [
      ['confirmation', 'caryotype', 'Sexe chromosomique.'],
      ['premiere_intention', '17-hydroxyprogesterone', 'Hyperplasie des surrénales.'],
      ['gravite', 'ionogramme', 'Perte de sel.'],
      ['premiere_intention', 'echographie-pelvienne', 'Utérus, gonades.'],
      ['deuxieme_intention', 'gonadotrophines-lh-fsh', 'Fonction gonadique.'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'cortisolemie', 'Insuffisance surrénalienne.'],
    ],
    scores: [],
    differentiels: [
      ['hyperplasie-congenitale-des-surrenales', 'Cause la plus fréquente chez le nouveau-né 46,XX.'],
      ['Hypospadias isolé', 'Testicules palpables, pas d’ambiguïté.'],
      ['Cryptorchidie isolée', 'Verge normale.'],
      ['retard-pubertaire', 'Absence de puberté à l’adolescence.'],
    ],
    etiologies:
      '## Causes\n- Hyperplasie des surrénales, dysgénésies gonadiques, insensibilité aux androgènes, anomalies chromosomiques',
    principes: [
      [
        'Urgences',
        'Ne pas méconnaître.',
        '- Rechercher et traiter la **perte de sel** et l’**hypoglycémie** (hyperplasie des surrénales : hydrocortisone, NaCl)',
      ],
      [
        'Attitude à la naissance',
        'Ne pas se précipiter.',
        '- **Ne pas attribuer le sexe** ni enregistrer l’état civil avant le bilan, expliquer à la famille que l’enfant est en bonne santé et qu’un bilan est nécessaire\n- Éviter les termes stigmatisants, respecter la confidentialité',
      ],
      [
        'Prise en charge',
        'Décision en équipe.',
        '- Équipe multidisciplinaire (pédiatre, endocrinologue, chirurgien, psychologue) ; décision partagée avec la famille\n- Traitement hormonal (hydrocortisone, induction pubertaire), chirurgie discutée, gonadectomie si risque tumoral (dysgénésie avec chromosome Y)\n- Soutien psychologique à long terme',
      ],
    ],
    molecules: [
      ['hydrocortisone', 'premiere', 'Hyperplasie des surrénales'],
      ['fludrocortisone', 'premiere', 'Perte de sel'],
      ['testosterone', 'alternative', 'Micropénis, induction pubertaire'],
      ['estradiol', 'alternative', 'Induction pubertaire'],
    ],
    complications: [
      {
        nom: 'Crise de perte de sel',
        fiche: 'hyperplasie-congenitale-des-surrenales',
        description: 'Déficit en 21-hydroxylase.',
        traitement: '- NaCl, hydrocortisone',
        clinique: '- Vomissements, choc',
        paraclinique: '- Hyponatrémie, hyperkaliémie',
      },
      {
        nom: 'Tumeurs gonadiques',
        description: 'Dysgénésie avec chromosome Y.',
        traitement: '- Gonadectomie',
        clinique: '- Masse',
        paraclinique: '- Imagerie',
      },
      {
        nom: 'Souffrance psychosociale',
        description: 'Stigmatisation.',
        traitement: '- Soutien psychologique',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Variable selon la cause ; bon avec une prise en charge précoce, respectueuse et multidisciplinaire',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Ambiguïté sexuelle', 'tres_frequent'],
      ['Vomissements', 'occasionnel'],
      ['Aménorrhée', 'occasionnel'],
      ['Retard pubertaire', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Ne pas déclarer le sexe, surveiller les vomissements, transfert', '- Toute ambiguïté'],
      hgr: ['- Ionogramme, échographie', ''],
      tert: ['- Endocrinologie et chirurgie pédiatriques, caryotype', ''],
    },
    alertes: {
      'hyperkaliemie-menacante': 'Nouveau-né avec ambiguïté sexuelle, vomissements et déshydratation',
    },
    formes: [
      {
        nom: 'DSD 46,XX par hyperplasie des surrénales',
        type: 'commune',
        description: 'Fille virilisée.',
        terrain: '- Nouveau-né',
        fonctionnels: '',
        generaux: '',
        physiques: '- Clitoridomégalie, gonades non palpables',
        paraclinique: '- 46,XX, 17-OHP élevée, utérus présent',
        etiologies: '- Déficit en 21-hydroxylase',
        syndromes: [],
      },
      {
        nom: 'DSD 46,XY',
        type: 'etiologique',
        description: 'Sous-virilisation.',
        terrain: '- Nouveau-né, adolescent',
        fonctionnels: '',
        generaux: '',
        physiques: '- Hypospadias sévère, micropénis',
        paraclinique: '- 46,XY',
        etiologies: '- Dysgénésie, insensibilité aux androgènes',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Déficience intellectuelle
  {
    ...NEUROPED,
    slug: 'deficience-intellectuelle',
    nom: 'Déficience intellectuelle',
    resume:
      'Limitation significative du fonctionnement intellectuel et du comportement adaptatif débutant pendant l’enfance (1–3 % des enfants) : retard de langage, difficultés scolaires, dépendance pour la vie quotidienne ; causes fréquentes en RDC : asphyxie périnatale, méningites et paludisme cérébral, malnutrition, hypothyroïdie et carence iodée, trisomie 21, alcool fœtal, konzo ; rechercher les causes traitables et les comorbidités (épilepsie, surdité, troubles visuels) ; stimulation, éducation inclusive, soutien des familles, lutte contre la stigmatisation (mhGAP).',
    definition:
      'Trouble du neurodéveloppement caractérisé par des déficits des fonctions intellectuelles (raisonnement, apprentissage) et du fonctionnement adaptatif (conceptuel, social, pratique), débutant pendant la période de développement ; sévérité légère, modérée, grave ou profonde.',
    physiopathologie:
      '## Causes prénatales\n- Génétiques : **trisomie 21**, X fragile, autres syndromes\n- **Carence iodée** (crétinisme), **alcool**, infections congénitales (rubéole, CMV, toxoplasmose, syphilis, Zika), malformations cérébrales\n\n## Causes périnatales\n- **Asphyxie**, prématurité, **ictère nucléaire**, hypoglycémie néonatale\n\n## Causes postnatales\n- **Méningites**, **neuropaludisme**, encéphalites, traumatismes crâniens, **malnutrition** sévère, intoxication au plomb, **hypothyroïdie** non traitée, **konzo**, épilepsie mal contrôlée, carence affective',
    diagnostic:
      '## Repérage\n- Retard des acquisitions (marche, langage), difficultés scolaires, comportement inadapté à l’âge\n- Évaluation du développement (outils mhGAP, échelles adaptées), examen neurologique, périmètre crânien, dysmorphie\n\n## Rechercher\n- **Causes traitables** : hypothyroïdie (TSH), carences, épilepsie\n- **Comorbidités** : **surdité** (audiométrie), troubles visuels, épilepsie, troubles du comportement, autisme, malnutrition\n- Maltraitance et négligence\n\n## Examens (orientés)\n- TSH, audiométrie, acuité visuelle, EEG si crises, caryotype si dysmorphie, imagerie cérébrale selon le contexte',
    examens: [
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['premiere_intention', 'audiometrie', 'Surdité associée.'],
      ['premiere_intention', 'acuite-visuelle', 'Troubles visuels.'],
      ['deuxieme_intention', 'eeg', 'Épilepsie.'],
      ['etiologique', 'caryotype', 'Anomalies chromosomiques.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Malformations, séquelles.'],
      ['premiere_intention', 'anthropometrie', 'Périmètre crânien, croissance.'],
    ],
    scores: [],
    differentiels: [
      ['troubles-du-spectre-autistique', 'Troubles de la communication sociale (association fréquente).'],
      ['Surdité', 'Retard de langage isolé.'],
      ['trouble-deficit-attention-hyperactivite', 'Difficultés d’attention avec intelligence normale.'],
      ['retard-developpement-psychomoteur', 'Jeune enfant, évaluation à poursuivre.'],
      ['epilepsie-enfant', 'Difficultés scolaires par crises non contrôlées.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Asphyxie périnatale, infections du SNC, malnutrition, carence iodée, trisomie 21, alcool fœtal',
    principes: [
      [
        'Évaluation et annonce',
        'Comprendre et informer.',
        '- Annonce avec bienveillance, explication que l’enfant peut progresser, lutte contre les croyances (sorcellerie) et l’exclusion\n- Traitement des causes et comorbidités : lévothyroxine, antiépileptiques, appareillage auditif, lunettes, nutrition',
      ],
      [
        'Stimulation et éducation',
        'Développer l’autonomie.',
        '- **Programmes d’intervention précoce** et de stimulation à domicile, formation des parents (programme OMS des compétences parentales)\n- **Scolarisation inclusive** ou adaptée, apprentissage de la vie quotidienne, formation professionnelle\n- Réadaptation à base communautaire',
      ],
      [
        'Comportement et protection',
        'Accompagner.',
        '- Prise en charge des troubles du comportement (approches éducatives d’abord ; rispéridone à faible dose seulement pour l’agressivité sévère, avis spécialisé)\n- Protection contre les abus et la maltraitance, soutien des aidants',
      ],
    ],
    molecules: [
      ['levothyroxine', 'premiere', 'Hypothyroïdie'],
      ['risperidone', 'alternative', 'Agressivité sévère (spécialiste)'],
      ['acide-valproique', 'alternative', 'Épilepsie associée (garçon)'],
    ],
    complications: [
      {
        nom: 'Épilepsie',
        fiche: 'epilepsie-enfant',
        description: 'Comorbidité fréquente.',
        traitement: '- Antiépileptiques',
        clinique: '- Crises',
        paraclinique: '- EEG',
      },
      {
        nom: 'Maltraitance et exclusion',
        fiche: 'maltraitance-enfant',
        description: 'Vulnérabilité.',
        traitement: '- Protection, sensibilisation',
        clinique: '- Lésions, négligence',
        paraclinique: '',
      },
      {
        nom: 'Troubles du comportement',
        description: 'Frustration, communication limitée.',
        traitement: '- Approches éducatives',
        clinique: '- Agressivité, automutilation',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Autonomie variable selon la sévérité ; progrès importants avec la stimulation précoce et l’inclusion',
    urgences: [],
    symptomes: [
      ['Retard de développement psychomoteur', 'tres_frequent'],
      ['Troubles du langage', 'tres_frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Repérage, conseils de stimulation, orientation',
        '- Retard global, épilepsie, troubles du comportement',
      ],
      hgr: ['- Évaluation, TSH, audiométrie, EEG', ''],
      tert: ['- Neuropédiatrie, génétique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Déficience intellectuelle légère',
        type: 'commune',
        description: 'Difficultés scolaires.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '- Difficultés d’apprentissage',
        generaux: '',
        physiques: '- Examen souvent normal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Déficience intellectuelle sévère',
        type: 'gravite',
        description: 'Dépendance.',
        terrain: '- Jeune enfant',
        fonctionnels: '- Absence de langage',
        generaux: '',
        physiques: '- Signes neurologiques, épilepsie',
        paraclinique: '- Imagerie anormale',
        etiologies: '- Asphyxie, méningite, génétique',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Méningo-encéphalite
  {
    ...NEUROPED,
    slug: 'meningo-encephalite-enfant',
    nom: 'Méningo-encéphalite de l’enfant',
    resume:
      'Inflammation associée des méninges et du cerveau chez l’enfant : fièvre, céphalées, raideur de nuque, troubles de conscience, convulsions, signes focaux, troubles du comportement ; causes principales en RDC : méningites bactériennes (pneumocoque, Hib, méningocoque), neuropaludisme (diagnostic différentiel majeur), tuberculose, virus (herpès, arbovirus, rougeole), cryptocoque (VIH), trypanosomiase ; TDR paludisme, PL si pas de contre-indication ; traitement probabiliste sans attendre : ceftriaxone + artésunate si TDR positif + aciclovir si suspicion d’herpès.',
    definition:
      'Atteinte inflammatoire simultanée des méninges et du parenchyme cérébral, d’origine infectieuse le plus souvent, associant syndrome méningé et signes d’encéphalite (troubles de conscience, convulsions, déficits focaux).',
    physiopathologie:
      '## Causes\n- **Bactériennes** : pneumocoque, Haemophilus influenzae b, méningocoque, Listeria (nourrisson), salmonelles\n- **Paludisme cérébral** (P. falciparum)\n- **Tuberculose** (début progressif, nerfs crâniens, hydrocéphalie)\n- **Virales** : **herpès simplex** (focale, convulsions), entérovirus, arbovirus, rougeole (encéphalite aiguë ou panencéphalite tardive), VIH\n- Cryptocoque (VIH), toxoplasmose, **trypanosomiase** (phase neurologique)\n- Auto-immunes (encéphalite à anticorps anti-NMDA)',
    diagnostic:
      '## Clinique\n- **Fièvre**, céphalées, vomissements, **raideur de nuque** (souvent absente chez le nourrisson : **fontanelle bombée**)\n- **Troubles de conscience** (score de Blantyre ou de Glasgow), **convulsions**, déficit focal, troubles du comportement, mouvements anormaux\n- Purpura (méningocoque), éruption (rougeole), signes d’HTIC\n\n## Examens\n- **TDR paludisme** / goutte épaisse, **glycémie**\n- **Ponction lombaire** (sauf HTIC, troubles de l’hémostase, instabilité) : cytologie, protéines, glucose, Gram, culture, Xpert MTB/RIF, antigène cryptococcique, PCR herpès si disponible\n- NFS, CRP, hémocultures, ionogramme (hyponatrémie), test VIH\n- **Scanner cérébral** si signes focaux ou HTIC ; EEG',
    examens: [
      ['premiere_intention', 'tdr-paludisme', 'Neuropaludisme.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['confirmation', 'lcr', 'Cytologie, Gram, culture.'],
      ['premiere_intention', 'hemocultures', 'Bactériémie.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['gravite', 'ionogramme', 'Hyponatrémie.'],
      ['gravite', 'scanner-cerebral', 'Signes focaux, HTIC.'],
      ['deuxieme_intention', 'eeg', 'Encéphalite herpétique.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-grave-enfant', 'TDR positif, coma fébrile.'],
      ['meningite-bacterienne-enfant', 'Méningite sans encéphalite.'],
      ['encephalites-virales-enfant', 'Encéphalite virale isolée.'],
      ['meningite-tuberculeuse', 'Installation progressive, contage.'],
      ['convulsions-febriles', 'Crise brève avec récupération rapide.'],
      ['Intoxication', 'Absence de fièvre, contexte.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Méningites bactériennes, neuropaludisme, tuberculose, herpès, rougeole, cryptocoque (VIH), THA',
    principes: [
      [
        'Urgence',
        'Traiter sans attendre.',
        '- Libération des voies aériennes, oxygène, position latérale, accès veineux\n- **Glycémie** : glucose 10 % 5 mL/kg si < 3 mmol/L (2,5 mmol/L si non malnutri selon le protocole)\n- **Convulsions** : diazépam intrarectal 0,5 mg/kg ou midazolam, puis phénobarbital',
      ],
      [
        'Traitement probabiliste',
        'Couvrir les causes graves.',
        '- **Ceftriaxone** 100 mg/kg/j (max 4 g) IV\n- **Artésunate** IV si TDR positif (ou paludisme impossible à éliminer)\n- **Aciclovir** 20 mg/kg IV toutes les 8 h (10 mg/kg au-delà de 12 ans) si encéphalite (convulsions focales, troubles du comportement, LCS clair), pendant 14–21 jours\n- **Dexaméthasone** 0,15 mg/kg toutes les 6 h pendant 2–4 jours selon le contexte (méningite bactérienne, pas en cas de paludisme)\n- Tuberculose, cryptocoque, THA : traitement spécifique',
      ],
      [
        'Soins de support',
        'Prévenir l’aggravation.',
        '- Tête surélevée à 30°, apports hydriques normaux (pas de restriction systématique), surveillance de la natrémie, alimentation par sonde\n- Kinésithérapie, dépistage des séquelles (audition, développement)',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Probabiliste'],
      ['artesunate', 'premiere', 'Neuropaludisme'],
      ['aciclovir', 'premiere', 'Encéphalite herpétique suspectée'],
      ['diazepam', 'premiere', 'Convulsions'],
      ['phenobarbital', 'alternative', 'Convulsions persistantes'],
      ['dexamethasone', 'adjuvant', 'Méningite bactérienne'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'État de mal convulsif',
        fiche: 'etat-de-mal-convulsif-enfant',
        description: 'Atteinte corticale.',
        traitement: '- Benzodiazépines, phénobarbital',
        clinique: '- Convulsions prolongées',
        paraclinique: '',
      },
      {
        nom: 'Hypertension intracrânienne',
        fiche: 'hypertension-intracranienne',
        description: 'Œdème cérébral.',
        traitement: '- Position, mannitol',
        clinique: '- Coma, bradycardie',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Séquelles neurologiques',
        fiche: 'deficience-intellectuelle',
        description: 'Atteinte cérébrale.',
        traitement: '- Rééducation',
        clinique: '- Déficits, épilepsie, surdité',
        paraclinique: '',
      },
      {
        nom: 'Hydrocéphalie',
        fiche: 'hydrocephalie-enfant',
        description: 'Méningite bactérienne ou tuberculeuse.',
        traitement: '- Dérivation',
        clinique: '- Macrocéphalie',
        paraclinique: '- Imagerie',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée (10–30 %) et séquelles fréquentes ; dépend de la cause et de la rapidité du traitement',
    urgences: ['syndrome-meninge-febrile', 'paludisme-grave-urgence', 'etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Convulsions', 'tres_frequent'],
      ['Troubles de la conscience', 'tres_frequent'],
      ['Raideur de nuque', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Fontanelle bombée', 'frequent'],
      ['Troubles du comportement', 'occasionnel'],
    ],
    sources: [
      'WHO guidelines on meningitis diagnosis, treatment and care',
      'Pocket book of hospital care for children (2e édition)',
      'WHO guidelines for malaria',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Glycémie, TDR, diazépam, première dose de ceftriaxone et d’artésunate, transfert',
        '- Tout enfant fébrile avec troubles de conscience ou convulsions',
      ],
      hgr: ['- PL, traitement probabiliste complet, soins intensifs', ''],
      tert: ['- Imagerie, réanimation pédiatrique', ''],
    },
    alertes: {
      'syndrome-meninge-febrile': 'Enfant fébrile avec raideur de nuque ou fontanelle bombée',
      'paludisme-grave-urgence': 'Coma fébrile avec TDR positif',
      'etat-de-mal-epileptique-urgence': 'Convulsions > 5 minutes',
    },
    formes: [
      {
        nom: 'Méningo-encéphalite bactérienne',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Nourrisson, jeune enfant',
        fonctionnels: '- Vomissements',
        generaux: '- Fièvre élevée',
        physiques: '- Raideur, troubles de conscience',
        paraclinique: '- LCS trouble, polynucléaires',
        etiologies: '- Pneumocoque, Hib, méningocoque',
        syndromes: ['syndrome-meninge', 'syndrome-infectieux'],
      },
      {
        nom: 'Encéphalite herpétique',
        type: 'etiologique',
        description: 'Atteinte temporale.',
        terrain: '',
        fonctionnels: '- Troubles du comportement',
        generaux: '- Fièvre',
        physiques: '- Convulsions focales, déficit',
        paraclinique: '- LCS lymphocytaire, PCR HSV',
        etiologies: '- Herpès simplex',
        syndromes: ['syndrome-convulsif'],
      },
      {
        nom: 'Forme grave avec coma',
        type: 'gravite',
        description: 'Pronostic vital.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Coma, signes d’engagement',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
    ],
  },

  // =================================================================== Syndrome de West
  {
    ...NEUROPED,
    slug: 'syndrome-de-west',
    nom: 'Syndrome de West',
    resume:
      'Encéphalopathie épileptique du nourrisson (pic 4–8 mois) : spasmes infantiles en flexion, en salves au réveil, souvent pris pour des coliques ou des sursauts, régression psychomotrice (perte du sourire, du contact, de la poursuite oculaire), hypsarythmie à l’EEG ; causes : asphyxie périnatale, infections, malformations, sclérose tubéreuse de Bourneville, trisomie 21 ; urgence thérapeutique : prednisolone à forte dose ou vigabatrin (premier choix dans la sclérose tubéreuse) ; pronostic lié à la cause et à la rapidité du traitement.',
    definition:
      'Syndrome épileptique du nourrisson associant spasmes épileptiques, arrêt ou régression du développement psychomoteur et tracé EEG d’hypsarythmie.',
    physiopathologie:
      '## Causes\n- **Structurelles acquises** : **asphyxie périnatale**, séquelles de **méningite** ou d’encéphalite, hypoglycémie néonatale, hémorragie\n- **Génétiques et malformatives** : **sclérose tubéreuse de Bourneville**, **trisomie 21**, malformations corticales\n- Métaboliques ; inconnues (pronostic meilleur)\n\n## Mécanismes\n- Activité épileptique désorganisée (hypsarythmie) perturbant le développement cérébral : **chaque semaine compte**',
    diagnostic:
      '## Clinique\n- **Spasmes** : flexion brusque de la tête, du tronc et des membres (ou extension), durée 1–2 s, en **salves** de 5 à 50, surtout au **réveil**, parfois suivis de pleurs\n- **Régression** : perte du sourire, du contact visuel, de la tenue de tête, désintérêt\n- Examen : périmètre crânien, taches achromiques (lampe de Wood : sclérose tubéreuse), signes neurologiques\n- Faire filmer les épisodes par les parents (téléphone)\n\n## Examens\n- **EEG** : **hypsarythmie** (indispensable, en centre équipé)\n- Imagerie cérébrale (scanner, IRM), glycémie, ionogramme, calcémie\n- Examen ophtalmologique et cutané, échocardiographie, échographie rénale (sclérose tubéreuse)',
    examens: [
      ['confirmation', 'eeg', 'Hypsarythmie.'],
      ['etiologique', 'irm-cerebrale', 'Malformations, séquelles, tubers.'],
      ['etiologique', 'scanner-cerebral', 'Calcifications, séquelles.'],
      ['premiere_intention', 'glycemie', 'Causes métaboliques.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Causes métaboliques.'],
      ['etiologique', 'fond-d-oeil', 'Hamartomes rétiniens.'],
    ],
    scores: [],
    differentiels: [
      ['pleurs-et-coliques-nourrisson', 'Pleurs du soir, développement normal.'],
      ['reflux-gastro-oesophagien-nourrisson', 'Régurgitations, développement normal.'],
      ['Myoclonies bénignes du nourrisson', 'Développement normal, EEG normal.'],
      ['convulsions-neonatales', 'Période néonatale.'],
      ['epilepsie-enfant', 'Autres épilepsies.'],
    ],
    etiologies:
      '## Causes\n- Asphyxie périnatale, infections du SNC, sclérose tubéreuse, trisomie 21, malformations',
    principes: [
      [
        'Traitement urgent',
        'Arrêter les spasmes et l’hypsarythmie.',
        '- **Prednisolone** à forte dose : 40–60 mg/j (ou 4–8 mg/kg/j) pendant 2 semaines puis décroissance sur 2 semaines (alternative accessible à l’ACTH)\n- **Vigabatrin** 50 mg/kg/j augmenté à 100–150 mg/kg/j : premier choix dans la **sclérose tubéreuse**, possible en association\n- Contrôle clinique et EEG à 2 semaines',
      ],
      [
        'Si échec',
        'Avis spécialisé.',
        '- Changement ou association, **valproate**, topiramate ; régime cétogène ; chirurgie des lésions focales',
      ],
      [
        'Accompagnement',
        'Soutenir le développement.',
        '- Surveillance des effets des corticoïdes (tension, glycémie, infections), protection gastrique si besoin\n- Stimulation, kinésithérapie, soutien des familles, suivi du développement',
      ],
    ],
    molecules: [
      ['prednisolone', 'premiere', 'Forte dose'],
      ['vigabatrin', 'premiere', 'Sclérose tubéreuse, alternative'],
      ['valproate-de-sodium-acide-valproique', 'deuxieme', 'Échec'],
    ],
    complications: [
      {
        nom: 'Déficience intellectuelle',
        fiche: 'deficience-intellectuelle',
        description: 'Encéphalopathie épileptique.',
        traitement: '- Traitement précoce, stimulation',
        clinique: '- Retard global',
        paraclinique: '',
      },
      {
        nom: 'Évolution vers un syndrome de Lennox-Gastaut',
        fiche: 'epilepsie-enfant',
        description: 'Épilepsie pharmacorésistante.',
        traitement: '- Antiépileptiques',
        clinique: '- Crises toniques, chutes',
        paraclinique: '- EEG',
      },
      {
        nom: 'Effets des corticoïdes',
        description: 'Forte dose.',
        traitement: '- Surveillance',
        clinique: '- HTA, infections, irritabilité',
        paraclinique: '- Glycémie',
      },
    ],
    evolution:
      '## Pronostic\n- Développement normal possible dans les formes sans cause retrouvée traitées tôt ; déficience intellectuelle et épilepsie persistante dans la majorité des formes structurelles',
    urgences: [],
    symptomes: [
      ['Spasmes infantiles', 'tres_frequent'],
      ['Régression des acquisitions', 'tres_frequent'],
      ['Pleurs excessifs', 'frequent'],
      ['Hypotonie', 'occasionnel'],
    ],
    sources: [
      'ILAE — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      "Adams and Victor's Principles of Neurology",
    ],
    niveaux: {
      cs: [
        '- Repérer les spasmes et la régression (vidéo des parents), orientation urgente',
        '- Spasmes en salves, régression',
      ],
      hgr: ['- Prednisolone, imagerie', '- EEG'],
      tert: ['- Neurologie pédiatrique, EEG, vigabatrin', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Syndrome de West structurel',
        type: 'commune',
        description: 'Cause acquise ou malformative.',
        terrain: '- Nourrisson avec antécédent d’asphyxie ou de méningite',
        fonctionnels: '- Spasmes au réveil',
        generaux: '',
        physiques: '- Régression, signes neurologiques',
        paraclinique: '- Hypsarythmie, lésions cérébrales',
        etiologies: '- Asphyxie, infection',
        syndromes: ['syndrome-convulsif'],
      },
      {
        nom: 'Syndrome de West de la sclérose tubéreuse',
        type: 'etiologique',
        description: 'Taches achromiques.',
        terrain: '- Nourrisson',
        fonctionnels: '',
        generaux: '',
        physiques: '- Taches achromiques',
        paraclinique: '- Tubers corticaux',
        etiologies: '- Sclérose tubéreuse',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Morsures de serpent enfant
  {
    ...URGPED,
    slug: 'morsures-de-serpent-enfant',
    nom: 'Morsures de serpent chez l’enfant',
    resume:
      'Envenimations plus graves chez l’enfant (dose de venin rapportée au poids) : vipéridés (Bitis, Echis : œdème extensif, saignements, coagulopathie), élapidés (mambas, cobras : ptosis, paralysie, détresse respiratoire ; cobras cracheurs : atteinte oculaire et nécrose) ; immobiliser le membre, pas de garrot ni d’incision, transfert rapide ; test de coagulation sur tube sec à 20 minutes ; sérum antivenimeux polyvalent à la même dose que l’adulte, prêt à traiter l’anaphylaxie (adrénaline) ; ventilation si paralysie, néostigmine-atropine pour les élapidés.',
    definition:
      'Inoculation de venin par morsure de serpent chez l’enfant, avec signes locaux, hémorragiques, neurotoxiques ou cytotoxiques ; la dose de sérum antivenimeux n’est pas réduite chez l’enfant.',
    physiopathologie:
      '## Vipéridés (Bitis, Echis, Causus)\n- Venin **cytotoxique** et **hémotoxique** : œdème extensif, nécrose, **coagulopathie de consommation** (sang incoagulable), hémorragies, choc, insuffisance rénale\n\n## Élapidés (Dendroaspis : mambas ; Naja : cobras)\n- Venin **neurotoxique** : blocage neuromusculaire → **ptosis**, ophtalmoplégie, troubles de la déglutition, **paralysie respiratoire**\n- Cobras cracheurs : nécrose locale, **ophtalmie** par projection\n\n## Enfant\n- Plus de venin par kg, envenimations plus sévères ; morsures souvent au pied ou à la main en jouant, la nuit dans les habitations',
    diagnostic:
      '## Clinique\n- Traces de crochets, **douleur**, **œdème** progressif (mesurer l’extension), phlyctènes, nécrose\n- **Saignements** : gencives, points de ponction, hématurie, hémorragie intracrânienne\n- **Signes neurologiques** : ptosis, diplopie, troubles de la déglutition, hypersalivation, faiblesse, détresse respiratoire\n- Choc, oligurie, vomissements, douleur abdominale\n\n## Examens\n- **Test de coagulation sur tube sec à 20 minutes** (20WBCT) : sang incoagulable = envenimation hémotoxique, répéter toutes les 6 h\n- NFS, plaquettes, créatinine, ionogramme, bandelette (hématurie, myoglobinurie), CPK, groupage',
    examens: [
      ['confirmation', 'test-de-coagulation-au-lit', 'Sang incoagulable à 20 minutes.'],
      ['premiere_intention', 'nfs', 'Anémie, thrombopénie.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie.'],
      ['gravite', 'cpk', 'Rhabdomyolyse.'],
      ['gravite', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'hemostase', 'Coagulopathie.'],
    ],
    scores: [],
    differentiels: [
      ['envenimation-morsure-de-serpent', 'Fiche de l’adulte.'],
      ['piqures-scorpions-hymenopteres', 'Piqûre de scorpion ou d’insecte.'],
      ['morsures-animales', 'Morsure de mammifère.'],
      ['fasciite-necrosante', 'Infection nécrosante secondaire.'],
    ],
    etiologies:
      '## Serpents en RDC\n- Vipéridés (Bitis, Echis, Causus), élapidés (mambas, cobras), serpents arboricoles (Dispholidus)',
    principes: [
      [
        'Premiers secours',
        'Ne pas nuire.',
        '- Rassurer, **immobiliser** le membre (attelle), retirer bagues et bracelets, transport rapide\n- **Pas de garrot**, pas d’incision, pas de succion, pas de pierre noire ni de remèdes traditionnels\n- Œil (cobra cracheur) : **lavage abondant** à l’eau',
      ],
      [
        'Sérum antivenimeux',
        'Neutraliser le venin.',
        '- Indications : coagulopathie (20WBCT), saignements, signes neurologiques, œdème extensif (> moitié du membre) ou rapide, choc\n- **Sérum antivenimeux polyvalent** adapté à la région, **même dose que l’adulte** (pas de réduction selon le poids), IV lente dilué\n- **Adrénaline** prête (0,01 mg/kg IM) : réaction anaphylactique fréquente\n- Répéter si le sang reste incoagulable 6 h après ou si les signes neurologiques s’aggravent',
      ],
      [
        'Soins de support',
        'Traiter les complications.',
        '- Paralysie : **ventilation** (ballon ou machine), **néostigmine** 0,025–0,08 mg/kg + **atropine** 0,02 mg/kg (test, surtout cobras)\n- Choc : remplissage ; transfusion si hémorragie grave ; insuffisance rénale : dialyse\n- Antalgiques (**paracétamol**, morphine ; pas d’AINS ni d’IM si coagulopathie), **vaccination antitétanique**, antibiotiques si infection, débridement de la nécrose ; fasciotomie seulement si syndrome des loges prouvé et coagulation corrigée',
      ],
    ],
    molecules: [
      ['serum-antivenimeux', 'premiere', 'Envenimation systémique'],
      ['adrenaline-epinephrine', 'premiere', 'Anaphylaxie au sérum'],
      ['neostigmine', 'alternative', 'Envenimation neurotoxique'],
      ['atropine', 'alternative', 'Avec la néostigmine'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Douleur sévère'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Prévention du tétanos'],
    ],
    complications: [
      {
        nom: 'Hémorragies et coagulopathie',
        description: 'Venin hémotoxique.',
        traitement: '- Sérum antivenimeux, transfusion',
        clinique: '- Saignements',
        paraclinique: '- 20WBCT',
      },
      {
        nom: 'Paralysie respiratoire',
        description: 'Venin neurotoxique.',
        traitement: '- Ventilation, sérum, néostigmine',
        clinique: '- Ptosis, détresse respiratoire',
        paraclinique: '',
      },
      {
        nom: 'Nécrose et amputation',
        fiche: 'fasciite-necrosante',
        description: 'Venin cytotoxique, infection.',
        traitement: '- Débridement, antibiotiques',
        clinique: '- Nécrose',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue-enfant',
        description: 'Choc, hémolyse, rhabdomyolyse.',
        traitement: '- Hydratation, dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité et séquelles (amputations, handicaps) élevées sans sérum antivenimeux ; bon pronostic si le sérum est administré tôt',
    urgences: [],
    symptomes: [
      ['Œdème d’un membre', 'tres_frequent'],
      ['Hémorragies', 'frequent'],
      ['Ptosis', 'occasionnel'],
      ['Dysphagie', 'occasionnel'],
      ['Vomissements', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Immobilisation, 20WBCT, transfert ; sérum si disponible', '- Toute morsure avec signes'],
      hgr: ['- Sérum antivenimeux, ventilation au ballon, transfusion', '- Réanimation'],
      tert: ['- Réanimation pédiatrique, dialyse, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Envenimation vipérine',
        type: 'commune',
        description: 'Œdème et saignements.',
        terrain: '- Enfant mordu au pied ou à la main',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Œdème extensif, saignements',
        paraclinique: '- Sang incoagulable',
        etiologies: '- Bitis, Echis',
        syndromes: ['syndrome-hemorragique'],
      },
      {
        nom: 'Envenimation cobraïque ou par mamba',
        type: 'gravite',
        description: 'Paralysie.',
        terrain: '',
        fonctionnels: '- Troubles de la déglutition',
        generaux: '',
        physiques: '- Ptosis, détresse respiratoire',
        paraclinique: '',
        etiologies: '- Élapidés',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },
];
