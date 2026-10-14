'use strict';

/**
 * Lot 45 (phase 2, endocrinologie pédiatrique) — hypothyroïdie congénitale, retard pubertaire,
 * puberté précoce, petite taille, hyperplasie congénitale des surrénales. Rédigé par IA (ESPE,
 * Endocrine Society, OMS, Nelson) : à valider.
 */

const ENDOPED = { departement: 'pediatrie', specialite: 'Endocrinologie pédiatrique' };

module.exports = [
  // =================================================================== Hypothyroïdie congénitale
  {
    ...ENDOPED,
    slug: 'hypothyroidie-congenitale',
    nom: 'Hypothyroïdie congénitale',
    resume:
      'Première cause évitable de déficience intellectuelle (≈ 1/2 000–4 000 naissances), sans dépistage néonatal systématique en RDC : signes discrets puis ictère prolongé, hypotonie, constipation, macroglossie, fontanelle large, hernie ombilicale, cri rauque, retard de croissance et de développement ; TSH élevée et T4 libre basse ; lévothyroxine 10–15 µg/kg/j le plus tôt possible (idéalement avant 2 semaines de vie) ; prévention de la carence iodée (sel iodé).',
    definition:
      'Déficit en hormones thyroïdiennes présent dès la naissance, d’origine thyroïdienne (dysgénésie, troubles de l’hormonosynthèse, carence iodée) ou plus rarement centrale.',
    physiopathologie:
      '## Causes\n- **Dysgénésie thyroïdienne** (athyréose, ectopie, hypoplasie) : la plus fréquente\n- **Troubles de l’hormonosynthèse** (héréditaires, goitre)\n- **Carence iodée** maternelle sévère (crétinisme endémique : Kivu, Ituri, zones montagneuses), médicaments antithyroïdiens maternels (transitoire)\n- Hypothyroïdie centrale (hypophysaire) rare\n\n## Conséquences\n- Les hormones thyroïdiennes sont indispensables au développement cérébral les 2–3 premières années : **chaque semaine de retard au traitement compte**',
    diagnostic:
      '## Clinique (souvent pauvre à la naissance)\n- **Ictère prolongé**, somnolence, difficultés de succion, **constipation**, hypothermie\n- **Hypotonie**, **macroglossie**, **fontanelle antérieure large**, fontanelle postérieure ouverte, **hernie ombilicale**, cri rauque, peau sèche et infiltrée, faciès bouffi\n- Plus tard : retard de croissance, retard psychomoteur, petite taille disproportionnée\n- Goitre (troubles de l’hormonosynthèse, carence iodée)\n\n## Examens\n- **TSH élevée**, **T4 libre basse** (dépistage sur papier buvard si disponible)\n- Échographie thyroïdienne (glande absente ou ectopique), âge osseux (retard des points d’ossification du genou)\n- Ne pas retarder le traitement pour faire des examens complémentaires',
    examens: [
      ['confirmation', 'tsh', 'Élevée.'],
      ['confirmation', 't4-libre', 'Basse.'],
      ['deuxieme_intention', 'echographie-thyroidienne', 'Athyréose, ectopie.'],
      ['deuxieme_intention', 'age-osseux', 'Retard de maturation.'],
      ['premiere_intention', 'bilirubine-neonatale', 'Ictère prolongé.'],
    ],
    scores: [],
    differentiels: [
      ['ictere-neonatal', 'Ictère prolongé d’autre cause.'],
      ['Trisomie 21', 'Hypotonie, macroglossie, dysmorphie (hypothyroïdie associée possible).'],
      ['retard-developpement-psychomoteur', 'Autres causes de retard.'],
      ['constipation-enfant', 'Constipation isolée.'],
      ['hypothyroidie-adulte', 'Hypothyroïdie acquise.'],
    ],
    etiologies: '## Causes\n- Dysgénésie thyroïdienne, troubles de l’hormonosynthèse, carence iodée',
    principes: [
      [
        'Traitement',
        'Traiter tôt.',
        '- **Lévothyroxine** **10–15 µg/kg/j** en une prise dès le diagnostic (comprimé écrasé dans un peu de lait ou d’eau, pas avec le soja ou le fer)\n- Objectif : normaliser la T4 libre en 2 semaines et la TSH en 4 semaines',
      ],
      [
        'Suivi',
        'Ajuster.',
        '- TSH et T4 libre à 2 et 4 semaines, puis tous les 1–2 mois la première année, tous les 3 mois ensuite\n- Croissance, développement psychomoteur, audition\n- Traitement à vie dans la plupart des cas (réévaluation après 3 ans si glande en place)',
      ],
      [
        'Prévention',
        'Agir en amont.',
        '- **Sel iodé**, iode chez la femme enceinte en zone de carence ; plaidoyer pour le dépistage néonatal',
      ],
    ],
    molecules: [
      ['levothyroxine', 'premiere', 'Traitement substitutif'],
      ['iode', 'adjuvant', 'Prévention (femme enceinte)'],
    ],
    complications: [
      {
        nom: 'Déficience intellectuelle',
        fiche: 'retard-developpement-psychomoteur',
        description: 'Traitement tardif.',
        traitement: '- Prévention par le traitement précoce, stimulation',
        clinique: '- Retard psychomoteur',
        paraclinique: '',
      },
      {
        nom: 'Petite taille',
        fiche: 'petite-taille-enfant',
        description: 'Retard de croissance.',
        traitement: '- Lévothyroxine',
        clinique: '- Taille < −2 DS',
        paraclinique: '- Âge osseux retardé',
      },
    ],
    evolution:
      '## Pronostic\n- Développement normal si le traitement débute avant 2 semaines ; séquelles intellectuelles d’autant plus lourdes que le traitement est tardif',
    urgences: [],
    symptomes: [
      ['Ictère', 'frequent'],
      ['Hypotonie', 'frequent'],
      ['Constipation', 'frequent'],
      ['Retard de croissance', 'frequent'],
      ['Retard de développement psychomoteur', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: ['- Repérer ictère prolongé, hypotonie, macroglossie : orientation', '- Suspicion clinique'],
      hgr: ['- TSH, T4 libre, lévothyroxine', ''],
      tert: ['- Endocrinologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hypothyroïdie congénitale par dysgénésie',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Nouveau-né, nourrisson',
        fonctionnels: '- Somnolence, constipation',
        generaux: '- Hypothermie',
        physiques: '- Macroglossie, hernie ombilicale, fontanelle large',
        paraclinique: '- TSH élevée, glande absente ou ectopique',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Crétinisme endémique',
        type: 'etiologique',
        description: 'Carence iodée.',
        terrain: '- Zones de carence iodée',
        fonctionnels: '- Surdité',
        generaux: '- Petite taille',
        physiques: '- Goitre, déficience intellectuelle',
        paraclinique: '- TSH élevée',
        etiologies: '- Carence iodée maternelle',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Retard pubertaire
  {
    ...ENDOPED,
    slug: 'retard-pubertaire',
    nom: 'Retard pubertaire',
    resume:
      'Absence de développement des seins après 13 ans chez la fille ou d’augmentation du volume testiculaire (< 4 mL) après 14 ans chez le garçon : le plus souvent retard simple (constitutionnel, antécédents familiaux, garçon) ou fonctionnel (malnutrition, maladie chronique : drépanocytose, VIH, tuberculose, MRC, sport intensif) ; rarement hypogonadisme (syndrome de Turner chez la fille petite, Klinefelter) ; examen pubertaire (stades de Tanner), âge osseux, LH/FSH ; traiter la cause, rassurer ; induction pubertaire si nécessaire.',
    definition:
      'Absence de signes pubertaires à un âge supérieur de 2 à 2,5 DS à l’âge moyen de la population : absence de bourgeon mammaire à 13 ans chez la fille, volume testiculaire < 4 mL à 14 ans chez le garçon, ou arrêt de la progression pubertaire.',
    physiopathologie:
      '## Causes\n- **Retard simple** de croissance et de puberté (constitutionnel) : le plus fréquent, familial\n- **Hypogonadisme fonctionnel** : **malnutrition**, maladies chroniques (**drépanocytose**, **VIH**, tuberculose, MRC, maladie cœliaque), hypothyroïdie, stress, activité physique intense\n- **Hypogonadisme central** (permanent) : tumeur (craniopharyngiome), déficit hypophysaire, syndrome de Kallmann (anosmie)\n- **Hypogonadisme périphérique** : **syndrome de Turner** (45,X), **Klinefelter** (47,XXY), séquelles d’orchite ourlienne, chimiothérapie, torsion testiculaire',
    diagnostic:
      '## Clinique\n- **Stades de Tanner**, volume testiculaire (orchidomètre), taille et vitesse de croissance, poids, IMC\n- Antécédents familiaux de puberté tardive, maladie chronique, état nutritionnel\n- Turner : petite taille, cou palmé, thorax large, cubitus valgus ; Kallmann : anosmie\n- Céphalées, troubles visuels (tumeur)\n\n## Examens\n- **Âge osseux** (retardé dans le retard simple)\n- **LH, FSH**, testostérone ou œstradiol\n- NFS, créatinine, TSH, test VIH, électrophorèse de l’hémoglobine selon le contexte\n- **Caryotype** chez la fille (Turner) ; IRM cérébrale si origine centrale suspectée',
    examens: [
      ['premiere_intention', 'age-osseux', 'Retard de maturation.'],
      ['confirmation', 'gonadotrophines-lh-fsh', 'Origine centrale ou périphérique.'],
      ['etiologique', 'caryotype', 'Turner, Klinefelter.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'nfs', 'Maladie chronique.'],
      ['etiologique', 'creatinine', 'MRC.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Tumeur hypothalamo-hypophysaire.'],
    ],
    scores: [],
    differentiels: [
      ['petite-taille-enfant', 'Petite taille associée.'],
      ['malnutrition-chronique', 'Retard staturo-pondéral carentiel.'],
      ['drepanocytose', 'Retard pubertaire fréquent.'],
      ['infection-vih-enfant', 'Maladie chronique.'],
      ['Syndrome de Turner', 'Fille petite, dysmorphie, caryotype 45,X.'],
    ],
    etiologies: '## Causes\n- Retard constitutionnel, malnutrition, maladies chroniques, hypogonadismes',
    principes: [
      [
        'Retard simple',
        'Rassurer.',
        '- Explications, surveillance de la croissance et de la puberté tous les 6 mois\n- Garçon très gêné : cure courte de **testostérone** à faible dose (spécialiste)',
      ],
      [
        'Causes fonctionnelles',
        'Traiter la cause.',
        '- Renutrition, traitement de la drépanocytose (hydroxyurée), du VIH, de la tuberculose, de l’hypothyroïdie',
      ],
      [
        'Hypogonadisme permanent',
        'Induction pubertaire.',
        '- Fille : **œstrogènes** à doses progressives puis progestatif (spécialiste)\n- Garçon : **testostérone** progressive\n- Turner : prise en charge spécialisée (croissance, cœur, reins)\n- Soutien psychologique',
      ],
    ],
    molecules: [
      ['testosterone', 'alternative', 'Retard simple très gênant, hypogonadisme masculin'],
      ['estradiol', 'alternative', 'Induction pubertaire chez la fille'],
      ['levothyroxine', 'adjuvant', 'Hypothyroïdie'],
    ],
    complications: [
      {
        nom: 'Souffrance psychologique',
        description: 'Décalage avec les pairs.',
        traitement: '- Soutien, explications',
        clinique: '- Isolement, moqueries',
        paraclinique: '',
      },
      {
        nom: 'Ostéoporose',
        description: 'Carence en stéroïdes sexuels.',
        traitement: '- Induction pubertaire',
        clinique: '- Fractures',
        paraclinique: '- Densitométrie',
      },
      {
        nom: 'Infertilité',
        description: 'Hypogonadisme permanent.',
        traitement: '- Prise en charge spécialisée',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Retard simple : puberté spontanée complète et taille adulte normale ; hypogonadisme : traitement à vie',
    urgences: [],
    symptomes: [
      ['Retard pubertaire', 'tres_frequent'],
      ['Petite taille', 'frequent'],
      ['Aménorrhée', 'frequent'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Stades de Tanner, croissance, recherche de maladie chronique',
        '- Absence de puberté à 13–14 ans',
      ],
      hgr: ['- Âge osseux, bilan de maladie chronique', ''],
      tert: ['- Endocrinologie pédiatrique, LH/FSH, caryotype', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Retard simple de croissance et de puberté',
        type: 'commune',
        description: 'Constitutionnel.',
        terrain: '- Garçon, antécédents familiaux',
        fonctionnels: '',
        generaux: '- Petite taille harmonieuse',
        physiques: '- Tanner 1',
        paraclinique: '- Âge osseux retardé',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Retard pubertaire fonctionnel',
        type: 'etiologique',
        description: 'Maladie chronique.',
        terrain: '- Drépanocytose, VIH, malnutrition',
        fonctionnels: '',
        generaux: '- Maigreur',
        physiques: '',
        paraclinique: '- Bilan de la maladie',
        etiologies: '- Maladie chronique',
        syndromes: [],
      },
      {
        nom: 'Syndrome de Turner',
        type: 'etiologique',
        description: 'Hypogonadisme périphérique.',
        terrain: '- Fille',
        fonctionnels: '- Aménorrhée primaire',
        generaux: '- Petite taille',
        physiques: '- Cou palmé, cubitus valgus',
        paraclinique: '- 45,X, FSH élevée',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Puberté précoce
  {
    ...ENDOPED,
    slug: 'puberte-precoce',
    nom: 'Puberté précoce',
    resume:
      'Apparition des caractères sexuels secondaires avant 8 ans chez la fille et 9 ans chez le garçon, avec accélération de la croissance et avance de l’âge osseux : centrale (activation précoce de l’axe, idiopathique chez la fille, souvent organique chez le garçon : tumeur, hydrocéphalie, séquelles de méningite) ou périphérique (tumeur ovarienne ou testiculaire, hyperplasie des surrénales, exposition aux œstrogènes) ; âge osseux, LH/FSH, échographie pelvienne, IRM cérébrale ; analogue de la GnRH pour les formes centrales évolutives.',
    definition:
      'Développement pubertaire avant 8 ans chez la fille (seins) ou 9 ans chez le garçon (volume testiculaire ≥ 4 mL), central (dépendant des gonadotrophines) ou périphérique (indépendant).',
    physiopathologie:
      '## Puberté précoce centrale\n- Activation précoce de l’axe hypothalamo-hypophysaire\n- **Idiopathique** chez la fille (90 %)\n- **Organique** (surtout chez le garçon) : tumeurs cérébrales (hamartome hypothalamique), **hydrocéphalie**, séquelles de **méningite** ou d’irradiation, enfants adoptés ou ayant connu une dénutrition sévère\n\n## Puberté précoce périphérique\n- **Hyperplasie congénitale des surrénales** (virilisation), tumeurs surrénaliennes, ovariennes ou testiculaires\n- Syndrome de McCune-Albright, hypothyroïdie sévère, **exposition à des œstrogènes** (crèmes, produits cosmétiques, contraceptifs)\n\n## Variantes bénignes\n- Prémature thélarche isolée (nourrisson), pubarche précoce isolée',
    diagnostic:
      '## Clinique\n- **Stades de Tanner**, volume testiculaire, **accélération de la vitesse de croissance**\n- Fille : seins, pilosité, saignements ; garçon : testicules (augmentés si central, petits si surrénalien), pilosité, acné, verge augmentée\n- Signes neurologiques (céphalées, troubles visuels), taches café-au-lait (McCune-Albright), masse abdominale\n- Exposition à des produits hormonaux\n\n## Examens\n- **Âge osseux** (avancé)\n- **LH, FSH**, œstradiol ou testostérone (test à la GnRH en centre spécialisé)\n- **Échographie pelvienne** (utérus et ovaires stimulés, kystes) ou testiculaire\n- **17-OH-progestérone** (hyperplasie des surrénales), TSH\n- **IRM cérébrale** : tout garçon et fille < 6 ans avec puberté centrale',
    examens: [
      ['confirmation', 'age-osseux', 'Avancé.'],
      ['confirmation', 'gonadotrophines-lh-fsh', 'Central ou périphérique.'],
      ['premiere_intention', 'echographie-pelvienne', 'Utérus stimulé, kystes, tumeur.'],
      ['etiologique', '17-hydroxyprogesterone', 'Hyperplasie des surrénales.'],
      ['etiologique', 'irm-cerebrale', 'Cause organique.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'echographie-abdominale', 'Tumeur surrénalienne.'],
    ],
    scores: [],
    differentiels: [
      ['Prémature thélarche', 'Seins isolés du nourrisson, sans accélération de la croissance.'],
      ['hyperplasie-congenitale-des-surrenales', 'Virilisation, 17-OHP élevée.'],
      ['obesite-enfant', 'Adipomastie, croissance avancée.'],
      ['Exposition à des œstrogènes exogènes', 'Crèmes, cosmétiques, médicaments.'],
      ['violences-sexuelles', 'Saignements génitaux chez la fille : penser aux abus.'],
    ],
    etiologies:
      '## Causes\n- Idiopathique (fille), lésions cérébrales (garçon), hyperplasie des surrénales, tumeurs, œstrogènes exogènes',
    principes: [
      [
        'Puberté centrale évolutive',
        'Freiner.',
        '- **Analogue de la GnRH** (**triptoréline** 3 mg IM toutes les 4 semaines ou 11,25 mg tous les 3 mois) jusqu’à l’âge normal de la puberté\n- Traitement de la cause (tumeur, hydrocéphalie)',
      ],
      [
        'Puberté périphérique',
        'Traiter la cause.',
        '- Hyperplasie des surrénales : hydrocortisone ; tumeurs : chirurgie ; arrêt de l’exposition aux œstrogènes',
      ],
      [
        'Accompagnement',
        'Protéger l’enfant.',
        '- Soutien psychologique, information sur les règles et la protection contre les abus ; surveillance de la croissance',
      ],
    ],
    molecules: [
      ['triptoreline', 'premiere', 'Puberté précoce centrale'],
      ['hydrocortisone', 'alternative', 'Hyperplasie congénitale des surrénales'],
    ],
    complications: [
      {
        nom: 'Petite taille adulte',
        fiche: 'petite-taille-enfant',
        description: 'Soudure précoce des cartilages.',
        traitement: '- Analogue de la GnRH',
        clinique: '- Grand enfant, petit adulte',
        paraclinique: '- Âge osseux avancé',
      },
      {
        nom: 'Difficultés psychosociales',
        description: 'Décalage avec les pairs.',
        traitement: '- Soutien',
        clinique: '- Moqueries, risque d’abus',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon dans les formes idiopathiques traitées ; dépend de la cause dans les formes organiques',
    urgences: [],
    symptomes: [
      ['Puberté précoce', 'tres_frequent'],
      ['Saignement vaginal', 'occasionnel'],
      ['Céphalées', 'occasionnel'],
      ['Troubles visuels', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Repérer les signes pubertaires précoces, orientation',
        '- Signes avant 8 ans (fille) ou 9 ans (garçon)',
      ],
      hgr: ['- Âge osseux, échographie pelvienne', ''],
      tert: ['- Endocrinologie pédiatrique, IRM, analogue de la GnRH', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Puberté précoce centrale idiopathique',
        type: 'commune',
        description: 'Fille.',
        terrain: '- Fille de 6 à 8 ans',
        fonctionnels: '',
        generaux: '- Accélération de la croissance',
        physiques: '- Seins, pilosité',
        paraclinique: '- Âge osseux avancé, LH élevée',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Puberté précoce organique',
        type: 'gravite',
        description: 'Lésion cérébrale.',
        terrain: '- Garçon, fille < 6 ans',
        fonctionnels: '- Céphalées',
        generaux: '',
        physiques: '- Signes neurologiques',
        paraclinique: '- IRM anormale',
        etiologies: '- Tumeur, hydrocéphalie',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
      {
        nom: 'Puberté précoce périphérique',
        type: 'etiologique',
        description: 'Indépendante des gonadotrophines.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Virilisation ou féminisation, petits testicules',
        paraclinique: '- LH basse',
        etiologies: '- Surrénales, gonades, œstrogènes',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Petite taille
  {
    ...ENDOPED,
    slug: 'petite-taille-enfant',
    nom: 'Petite taille',
    resume:
      'Taille < −2 Z-scores (courbes OMS) ou ralentissement de la vitesse de croissance : en RDC surtout malnutrition chronique (retard de croissance) et maladies chroniques (drépanocytose, VIH, tuberculose, parasitoses, MRC) ; variantes normales (petite taille familiale, retard constitutionnel) ; causes endocriniennes (hypothyroïdie, déficit en hormone de croissance) et génétiques (Turner) ; courbe de croissance, taille des parents, âge osseux ; traiter la cause, nutrition.',
    definition:
      'Taille inférieure à −2 Z-scores (ou −2 DS) pour l’âge et le sexe, ou taille nettement inférieure à la taille cible parentale, ou cassure de la courbe de croissance (diminution de la vitesse de croissance).',
    physiopathologie:
      '## Variantes normales\n- **Petite taille familiale** (parents petits, vitesse normale, âge osseux normal)\n- **Retard constitutionnel** de croissance et de puberté (âge osseux retardé)\n\n## Causes pathologiques\n- **Nutritionnelles** : malnutrition chronique (première cause en RDC), carences (zinc, iode)\n- **Maladies chroniques** : drépanocytose, VIH, tuberculose, parasitoses, maladie cœliaque, MRC, cardiopathies, asthme sévère, corticothérapie prolongée\n- **Endocriniennes** : **hypothyroïdie**, déficit en hormone de croissance, Cushing, rachitisme\n- **Génétiques** : **syndrome de Turner** (toute fille petite), trisomie 21, achondroplasie, petit poids de naissance sans rattrapage\n- Psychosociales : carence affective, maltraitance',
    diagnostic:
      '## Clinique\n- **Courbe de croissance** (taille, poids) : vitesse de croissance, moment de la cassure\n- **Taille des parents** (taille cible), poids de naissance, âge gestationnel\n- Proportions (petite taille dysharmonieuse : chondrodysplasie), dysmorphie (Turner), stade pubertaire\n- Signes de maladie chronique, état nutritionnel, environnement familial\n\n## Examens (orientés)\n- **Âge osseux**\n- NFS, ferritine, créatinine, ionogramme, bicarbonates, calcémie, phosphatases alcalines\n- **TSH**, T4 libre ; examen des selles, test VIH, électrophorèse de l’hémoglobine\n- **Caryotype** chez la fille ; anticorps anti-transglutaminase\n- IGF-1 et tests de stimulation de l’hormone de croissance en centre spécialisé',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Courbe de croissance.'],
      ['premiere_intention', 'age-osseux', 'Maturation.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'nfs', 'Anémie, maladie chronique.'],
      ['etiologique', 'creatinine', 'MRC.'],
      ['etiologique', 'caryotype', 'Syndrome de Turner.'],
      ['etiologique', 'examen-parasitologique-selles', 'Parasitoses.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'anticorps-anti-transglutaminase', 'Maladie cœliaque.'],
    ],
    scores: [],
    differentiels: [
      ['malnutrition-chronique', 'Retard de croissance nutritionnel.'],
      ['retard-staturo-ponderal', 'Atteinte du poids et de la taille.'],
      ['hypothyroidie-congenitale', 'Retard de croissance, retard psychomoteur.'],
      ['rachitisme-carentiel', 'Déformations osseuses.'],
      ['maladie-renale-chronique-enfant', 'Pâleur, HTA, acidose.'],
      ['Syndrome de Turner', 'Fille petite, caryotype 45,X.'],
    ],
    etiologies:
      '## Causes\n- Malnutrition chronique, maladies chroniques, variantes normales, endocrinopathies, syndromes génétiques',
    principes: [
      ['Variantes normales', 'Rassurer.', '- Explications, suivi de la courbe tous les 6 mois'],
      [
        'Causes nutritionnelles et chroniques',
        'Traiter la cause.',
        '- **Nutrition** : allaitement, alimentation de complément riche (protéines animales, légumineuses), micronutriments, déparasitage\n- Traitement des maladies chroniques (drépanocytose, VIH, tuberculose, MRC)',
      ],
      [
        'Causes endocriniennes et génétiques',
        'Traitement spécialisé.',
        '- **Hypothyroïdie** : lévothyroxine\n- Déficit en hormone de croissance, Turner, MRC : **somatropine** (centres spécialisés, très coûteuse)\n- Soutien psychologique',
      ],
    ],
    molecules: [
      ['levothyroxine', 'premiere', 'Hypothyroïdie'],
      ['somatropine', 'alternative', 'Déficit en hormone de croissance, Turner'],
      ['zinc', 'adjuvant', 'Carence en zinc'],
      ['albendazole', 'adjuvant', 'Déparasitage'],
    ],
    complications: [
      {
        nom: 'Retentissement psychosocial',
        description: 'Moqueries, estime de soi.',
        traitement: '- Soutien',
        clinique: '- Isolement',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Variantes normales : taille adulte conforme à la famille ; rattrapage partiel si la cause est traitée tôt (avant 2–3 ans pour la malnutrition)',
    urgences: [],
    symptomes: [
      ['Petite taille', 'tres_frequent'],
      ['Retard de croissance', 'tres_frequent'],
      ['Retard pubertaire', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: [
        '- Courbe de croissance, nutrition, déparasitage',
        '- Cassure de la courbe, fille petite, dysmorphie',
      ],
      hgr: ['- Âge osseux, bilan orienté', ''],
      tert: ['- Endocrinologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Petite taille nutritionnelle',
        type: 'commune',
        description: 'Malnutrition chronique.',
        terrain: '- Jeune enfant',
        fonctionnels: '',
        generaux: '- Maigreur possible',
        physiques: '- Taille < −2 Z',
        paraclinique: '- Âge osseux retardé',
        etiologies: '- Malnutrition, infections',
        syndromes: [],
      },
      {
        nom: 'Petite taille familiale',
        type: 'terrain',
        description: 'Variante normale.',
        terrain: '- Parents petits',
        fonctionnels: '',
        generaux: '',
        physiques: '- Vitesse normale',
        paraclinique: '- Âge osseux normal',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Petite taille endocrinienne ou génétique',
        type: 'etiologique',
        description: 'Cassure de la courbe.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Surpoids relatif (endocrinienne)',
        physiques: '- Dysmorphie (Turner)',
        paraclinique: '- TSH, caryotype',
        etiologies: '- Hypothyroïdie, déficit en GH, Turner',
        syndromes: [],
      },
    ],
  },

  // =================================================================== HCS
  {
    ...ENDOPED,
    slug: 'hyperplasie-congenitale-des-surrenales',
    nom: 'Hyperplasie congénitale des surrénales',
    resume:
      'Maladie héréditaire autosomique récessive (déficit en 21-hydroxylase dans 95 % des cas) : chez la fille, ambiguïté sexuelle à la naissance (virilisation) ; forme avec perte de sel chez les deux sexes vers 1–3 semaines de vie : vomissements, déshydratation, hyponatrémie, hyperkaliémie, choc, souvent confondue avec une infection ou une sténose du pylore ; 17-OH-progestérone ; urgence : NaCl 0,9 %, glucose, hydrocortisone IV ; traitement à vie par hydrocortisone et fludrocortisone ; ne pas déclarer le sexe avant le bilan.',
    definition:
      'Groupe de maladies héréditaires de la stéroïdogenèse surrénalienne, la plus fréquente étant le déficit en 21-hydroxylase, responsable d’un déficit en cortisol (et en aldostérone dans la forme avec perte de sel) et d’un excès d’androgènes.',
    physiopathologie:
      '## Mécanismes\n- Déficit en 21-hydroxylase → baisse du **cortisol** → hausse de l’ACTH → hyperplasie surrénalienne et accumulation de précurseurs (17-OHP) dérivés vers les **androgènes**\n- Forme avec **perte de sel** (75 % des formes classiques) : déficit en aldostérone → hyponatrémie, hyperkaliémie, déshydratation\n\n## Conséquences\n- Fille : **virilisation** des organes génitaux externes (utérus et ovaires normaux)\n- Garçon : organes génitaux normaux à la naissance (diagnostic tardif, crise de perte de sel), puis pseudo-puberté précoce\n- Formes non classiques : pubarche précoce, hirsutisme, troubles des règles',
    diagnostic:
      '## Clinique\n- Nouveau-né fille : **ambiguïté sexuelle** (clitoridomégalie, fusion des grandes lèvres, sinus urogénital), gonades non palpables\n- **Crise de perte de sel** (J7–J21) : vomissements, refus de téter, perte de poids, déshydratation, **choc**, hyperpigmentation\n- Enfant non traité : accélération de la croissance, pilosité pubienne précoce, acné, verge augmentée, âge osseux avancé\n\n## Examens\n- **17-OH-progestérone** très élevée\n- **Ionogramme** (**hyponatrémie**, **hyperkaliémie**), **glycémie** (hypoglycémie), cortisolémie\n- **Échographie pelvienne** (utérus présent chez la fille virilisée), **caryotype**\n- Ne pas attribuer le sexe avant le bilan ; annonce par une équipe expérimentée',
    examens: [
      ['confirmation', '17-hydroxyprogesterone', 'Très élevée.'],
      ['gravite', 'ionogramme', 'Hyponatrémie, hyperkaliémie.'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'cortisolemie', 'Effondrée.'],
      ['premiere_intention', 'echographie-pelvienne', 'Utérus, ovaires.'],
      ['premiere_intention', 'caryotype', 'Sexe chromosomique.'],
      ['deuxieme_intention', 'age-osseux', 'Avancé (forme tardive).'],
    ],
    scores: [],
    differentiels: [
      ['stenose-hypertrophique-pylore', 'Vomissements avec alcalose hypokaliémique (HCS : hyperkaliémie).'],
      ['sepsis-neonatal', 'Choc du nouveau-né.'],
      ['deshydratation-severe-enfant', 'Diarrhée, ionogramme différent.'],
      ['puberte-precoce', 'Autres causes de pseudo-puberté précoce.'],
      ['insuffisance-surrenalienne-aigue', 'Insuffisance surrénalienne d’autre cause.'],
    ],
    etiologies: '## Transmission\n- Autosomique récessive (mutations du gène CYP21A2) ; consanguinité',
    principes: [
      [
        'Crise de perte de sel (urgence)',
        'Réanimer.',
        '- **NaCl 0,9 %** 10–20 mL/kg en bolus, puis apports de sodium et de **glucose** (glucose 10 % si hypoglycémie)\n- **Hydrocortisone** **50–100 mg/m²** IV (environ 25 mg chez le nouveau-né) puis 50–100 mg/m²/j en 4 injections\n- Traitement de l’hyperkaliémie si menaçante (gluconate de calcium)',
      ],
      [
        'Traitement d’entretien',
        'À vie.',
        '- **Hydrocortisone** 10–15 mg/m²/j per os en 3 prises\n- **Fludrocortisone** 0,05–0,2 mg/j et **sel** 1–2 g/j chez le nourrisson (forme avec perte de sel)\n- **Doubler ou tripler l’hydrocortisone** en cas de fièvre, vomissements, chirurgie (carte d’urgence) ; injection IM si vomissements',
      ],
      [
        'Accompagnement',
        'Prise en charge globale.',
        '- Chirurgie génitale discutée en équipe, soutien psychologique, conseil génétique, suivi de la croissance et de l’âge osseux',
      ],
    ],
    molecules: [
      ['hydrocortisone', 'premiere', 'Crise et traitement d’entretien'],
      ['fludrocortisone', 'premiere', 'Forme avec perte de sel'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Crise de perte de sel'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['gluconate-de-calcium', 'adjuvant', 'Hyperkaliémie menaçante'],
    ],
    complications: [
      {
        nom: 'Crise surrénalienne',
        fiche: 'insuffisance-surrenalienne-aigue',
        description: 'Perte de sel, stress.',
        traitement: '- NaCl, glucose, hydrocortisone IV',
        clinique: '- Vomissements, choc',
        paraclinique: '- Hyponatrémie, hyperkaliémie',
      },
      {
        nom: 'Petite taille adulte',
        fiche: 'petite-taille-enfant',
        description: 'Excès d’androgènes, surdosage en corticoïdes.',
        traitement: '- Équilibre du traitement',
        clinique: '',
        paraclinique: '- Âge osseux',
      },
      {
        nom: 'Infertilité',
        description: 'Mauvais équilibre.',
        traitement: '- Suivi spécialisé',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Vie normale avec un traitement bien conduit ; mortalité néonatale élevée des crises de perte de sel non diagnostiquées (garçons surtout)',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Ambiguïté sexuelle', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Refus de téter', 'frequent'],
      ['Puberté précoce', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Ambiguïté sexuelle ou vomissements avec déshydratation du nouveau-né : transfert',
        '- Tout cas suspect',
      ],
      hgr: ['- Ionogramme, NaCl, hydrocortisone', ''],
      tert: ['- Endocrinologie pédiatrique, 17-OHP, caryotype', ''],
    },
    alertes: { 'hyperkaliemie-menacante': 'Nouveau-né avec vomissements, déshydratation et hyperkaliémie' },
    formes: [
      {
        nom: 'Forme classique avec perte de sel',
        type: 'commune',
        description: 'Crise néonatale.',
        terrain: '- Nouveau-né de 1 à 3 semaines',
        fonctionnels: '- Vomissements, refus de téter',
        generaux: '- Perte de poids, choc',
        physiques: '- Déshydratation, ambiguïté chez la fille',
        paraclinique: '- Hyponatrémie, hyperkaliémie, 17-OHP élevée',
        etiologies: '- Déficit en 21-hydroxylase',
        syndromes: ['syndrome-de-deshydratation-extracellulaire', 'syndrome-de-choc'],
      },
      {
        nom: 'Forme virilisante pure',
        type: 'evolutive',
        description: 'Sans perte de sel.',
        terrain: '- Enfant',
        fonctionnels: '',
        generaux: '- Accélération de la croissance',
        physiques: '- Pilosité, acné, verge augmentée',
        paraclinique: '- Âge osseux avancé',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
