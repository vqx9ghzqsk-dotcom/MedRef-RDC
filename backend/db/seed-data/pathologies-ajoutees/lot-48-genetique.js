'use strict';

/**
 * Lot 48 (phase 2, ORL-ophtalmologie pédiatrique et génétique) — strabisme, trisomie 21, syndrome
 * de Turner, erreurs innées du métabolisme, albinisme de l'enfant. Rédigé par IA (OMS, Nelson) :
 * à valider.
 */

const ORLOPH = { departement: 'pediatrie', specialite: 'ORL et ophtalmologie pédiatriques' };
const GEN = { departement: 'pediatrie', specialite: 'Génétique et maladies héréditaires' };

module.exports = [
  // =================================================================== Strabisme
  {
    ...ORLOPH,
    slug: 'strabisme',
    nom: 'Strabisme',
    resume:
      'Défaut de parallélisme des axes visuels, fréquent chez l’enfant (2–4 %) : un strabisme permanent après 4 mois n’est jamais normal ; risque d’amblyopie (perte de vision définitive de l’œil dévié si non traitée avant 7–8 ans) ; tout strabisme d’apparition récente impose un fond d’œil (rétinoblastome, cataracte) et un examen neurologique (paralysie oculomotrice : HTIC, tumeur) ; correction optique (lunettes après cycloplégie), occlusion de l’œil sain, chirurgie si nécessaire.',
    definition:
      'Déviation des axes visuels, convergente (ésotropie), divergente (exotropie) ou verticale, permanente ou intermittente, avec ou sans paralysie oculomotrice.',
    physiopathologie:
      '## Mécanismes\n- **Strabisme accommodatif** : hypermétropie non corrigée → convergence excessive\n- **Strabisme précoce** du nourrisson (idiopathique)\n- **Strabisme sensoriel** : œil malvoyant qui dévie (**cataracte**, **rétinoblastome**, cicatrice de toxoplasmose, atrophie optique)\n- **Strabisme paralytique** : paralysie du VI (HTIC, tumeur, méningite), du III ou du IV, traumatisme\n- Facteurs : prématurité, paralysie cérébrale, trisomie 21, antécédents familiaux\n\n## Conséquence\n- Le cerveau neutralise l’image de l’œil dévié → **amblyopie** fonctionnelle',
    diagnostic:
      '## Clinique\n- Déviation visible, **reflets cornéens** asymétriques (lampe de poche), **test de l’écran** (cover test)\n- Torticolis, fermeture d’un œil au soleil, diplopie chez le grand enfant (strabisme acquis)\n- **Pseudo-strabisme** du nourrisson (repli épicanthal) : reflets symétriques\n\n## Signes d’alarme\n- Strabisme **récent**, **leucocorie**, céphalées, vomissements, autres signes neurologiques, diplopie\n\n## Examens\n- **Acuité visuelle** adaptée à l’âge, **réfraction sous cycloplégie** (cyclopentolate)\n- **Fond d’œil** systématique ; imagerie cérébrale si paralysie ou signes neurologiques',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Amblyopie.'],
      ['confirmation', 'fond-d-oeil', 'Cause organique (rétinoblastome, cataracte).'],
      ['gravite', 'scanner-cerebral', 'Strabisme paralytique.'],
      ['gravite', 'irm-cerebrale', 'Tumeur, HTIC.'],
    ],
    scores: [],
    differentiels: [
      ['Pseudo-strabisme', 'Repli épicanthal, reflets cornéens symétriques.'],
      ['retinoblastome', 'Strabisme et leucocorie.'],
      ['cataracte-congenitale', 'Leucocorie, absence de reflet rouge.'],
      ['hypertension-intracranienne', 'Paralysie du VI, céphalées, vomissements.'],
    ],
    etiologies: '## Causes\n- Hypermétropie, idiopathique, malvoyance d’un œil, paralysies oculomotrices',
    principes: [
      [
        'Correction optique',
        'Base du traitement.',
        '- **Lunettes** portées en permanence après réfraction sous cycloplégie (corrige souvent totalement le strabisme accommodatif)',
      ],
      [
        'Amblyopie',
        'Récupérer la vision.',
        '- **Occlusion** de l’œil sain (pansement) quelques heures par jour, ou pénalisation par **atropine** collyre de l’œil sain, avant 7–8 ans\n- Suivi régulier de l’acuité visuelle',
      ],
      [
        'Chirurgie et causes',
        'Aligner et traiter.',
        '- Chirurgie des muscles oculomoteurs si déviation persistante malgré les lunettes (fonctionnel et esthétique)\n- Traitement de la cause : cataracte, rétinoblastome, HTIC',
      ],
    ],
    molecules: [
      ['cyclopentolate', 'premiere', 'Réfraction sous cycloplégie'],
      ['atropine', 'alternative', 'Pénalisation de l’œil sain (collyre)'],
    ],
    complications: [
      {
        nom: 'Amblyopie',
        description: 'Œil dévié non traité.',
        traitement: '- Occlusion avant 7–8 ans',
        clinique: '- Baisse de vision unilatérale',
        paraclinique: '- Acuité visuelle',
      },
      {
        nom: 'Retentissement psychosocial',
        description: 'Moqueries.',
        traitement: '- Chirurgie',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon si dépisté et traité tôt ; amblyopie définitive après 8–10 ans',
    urgences: [],
    symptomes: [
      ['Strabisme', 'tres_frequent'],
      ['Troubles visuels', 'frequent'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Test des reflets cornéens, orientation', '- Strabisme récent, leucocorie'],
      hgr: ['- Ophtalmologie : réfraction, fond d’œil', ''],
      tert: ['- Chirurgie du strabisme', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Strabisme convergent accommodatif',
        type: 'commune',
        description: 'Hypermétropie.',
        terrain: '- Enfant de 2 à 4 ans',
        fonctionnels: '',
        generaux: '',
        physiques: '- Œil dévié en dedans',
        paraclinique: '- Hypermétropie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Strabisme paralytique',
        type: 'gravite',
        description: 'Cause neurologique.',
        terrain: '',
        fonctionnels: '- Diplopie, céphalées',
        generaux: '',
        physiques: '- Limitation des mouvements oculaires',
        paraclinique: '- Imagerie',
        etiologies: '- HTIC, tumeur',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
      {
        nom: 'Strabisme sensoriel',
        type: 'etiologique',
        description: 'Œil malvoyant.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Leucocorie possible',
        paraclinique: '- Fond d’œil anormal',
        etiologies: '- Cataracte, rétinoblastome',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Trisomie 21
  {
    ...GEN,
    slug: 'trisomie-21',
    nom: 'Trisomie 21',
    resume:
      'Anomalie chromosomique la plus fréquente (≈ 1/700 naissances, risque croissant avec l’âge maternel) : hypotonie, dysmorphie (fentes palpébrales obliques, nuque plate, pli palmaire unique), déficience intellectuelle variable ; dépister les malformations et complications : cardiopathie (50 %, canal atrio-ventriculaire : échocardiographie systématique), atrésie duodénale, hypothyroïdie, troubles visuels et auditifs, leucémies, instabilité cervicale ; caryotype ; suivi pédiatrique programmé, stimulation précoce, inclusion, soutien des familles.',
    definition:
      'Présence d’un troisième chromosome 21 (libre dans 95 % des cas, par translocation ou en mosaïque), responsable d’un syndrome dysmorphique, d’une déficience intellectuelle et de malformations.',
    physiopathologie:
      '## Mécanismes\n- **Non-disjonction** méiotique (âge maternel avancé) dans 95 % des cas ; **translocation** robertsonienne (risque de récurrence si un parent porteur) ; mosaïque\n\n## Atteintes associées\n- **Cardiopathies** (canal atrio-ventriculaire, CIV, CIA, Fallot)\n- **Digestives** : atrésie duodénale, Hirschsprung, maladie cœliaque\n- **Endocriniennes** : **hypothyroïdie**, diabète, obésité\n- Hématologiques : leucémies (dont la leucémie transitoire néonatale)\n- **Sensorielles** : cataracte, troubles de la réfraction, otite séromuqueuse et surdité\n- Instabilité atlanto-axoïdienne, apnées du sommeil, infections fréquentes',
    diagnostic:
      '## Clinique (naissance)\n- **Hypotonie**, fentes palpébrales obliques en haut et en dehors, épicanthus, nez court, **nuque plate** avec excès de peau, oreilles petites, protrusion de la langue\n- **Pli palmaire unique**, petits doigts, écart entre le 1er et le 2e orteil\n- Signes de malformation : souffle, cyanose, vomissements bilieux (atrésie duodénale)\n\n## Examens\n- **Caryotype** (confirmation, recherche de translocation pour le conseil génétique)\n- **Échocardiographie** systématique dès la naissance\n- **TSH** à la naissance puis chaque année, **NFS**\n- Audiométrie, examen ophtalmologique ; radiographie du rachis cervical selon les symptômes',
    examens: [
      ['confirmation', 'caryotype', 'Trisomie libre, translocation.'],
      ['gravite', 'echocardiographie', 'Cardiopathie (systématique).'],
      ['premiere_intention', 'tsh', 'Hypothyroïdie (chaque année).'],
      ['premiere_intention', 'nfs', 'Leucémie, polyglobulie.'],
      ['premiere_intention', 'audiometrie', 'Surdité.'],
      ['premiere_intention', 'acuite-visuelle', 'Troubles visuels.'],
      ['deuxieme_intention', 'anticorps-anti-transglutaminase', 'Maladie cœliaque.'],
    ],
    scores: [],
    differentiels: [
      ['hypothyroidie-congenitale', 'Hypotonie, macroglossie (association possible).'],
      ['Autres anomalies chromosomiques', 'Caryotype.'],
      ['deficience-intellectuelle', 'Autres causes de déficience.'],
    ],
    etiologies: '## Facteurs\n- Âge maternel avancé ; translocation parentale',
    principes: [
      [
        'Annonce et accompagnement',
        'Soutenir la famille.',
        '- Annonce bienveillante en présence des deux parents, information sur les capacités de progression de l’enfant\n- Lutte contre les croyances et l’abandon, associations de familles\n- **Conseil génétique** (risque de récurrence)',
      ],
      [
        'Suivi systématique',
        'Dépister les complications.',
        '- **Échocardiographie** à la naissance, chirurgie cardiaque si nécessaire (avant 6 mois pour le canal atrio-ventriculaire)\n- **TSH** à la naissance, à 6 mois, puis tous les ans ; **lévothyroxine** si hypothyroïdie\n- Audition et vision chaque année, croissance (courbes spécifiques), alimentation et poids\n- Vaccinations complètes ; prudence lors des manipulations du cou',
      ],
      [
        'Développement',
        'Favoriser l’autonomie.',
        '- **Stimulation précoce**, kinésithérapie, orthophonie, **scolarisation inclusive**, formation professionnelle',
      ],
    ],
    molecules: [['levothyroxine', 'premiere', 'Hypothyroïdie']],
    complications: [
      {
        nom: 'Cardiopathie congénitale',
        fiche: 'cardiopathies-congenitales',
        description: 'Canal atrio-ventriculaire.',
        traitement: '- Chirurgie cardiaque',
        clinique: '- Souffle, insuffisance cardiaque',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Hypothyroïdie',
        fiche: 'hypothyroidie-congenitale',
        description: 'Fréquente.',
        traitement: '- Lévothyroxine',
        clinique: '- Ralentissement, constipation',
        paraclinique: '- TSH',
      },
      {
        nom: 'Leucémies',
        fiche: 'leucemie-aigue-lymphoblastique-enfant',
        description: 'Risque augmenté.',
        traitement: '- Oncologie',
        clinique: '- Pâleur, purpura',
        paraclinique: '- NFS',
      },
      {
        nom: 'Surdité et troubles visuels',
        fiche: 'hypertrophie-adenoidienne',
        description: 'Otite séromuqueuse, cataracte.',
        traitement: '- Appareillage, lunettes',
        clinique: '- Retard de langage',
        paraclinique: '- Audiométrie',
      },
    ],
    evolution:
      '## Pronostic\n- Espérance de vie > 60 ans avec une prise en charge adaptée ; mortalité précoce élevée liée aux cardiopathies non opérées',
    urgences: [],
    symptomes: [
      ['Hypotonie', 'tres_frequent'],
      ['Dysmorphie', 'tres_frequent'],
      ['Retard de développement psychomoteur', 'tres_frequent'],
      ['Constipation', 'frequent'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Repérage, suivi de croissance, vaccinations, orientation', '- Souffle, cyanose, vomissements'],
      hgr: ['- Échocardiographie, TSH, caryotype si possible', ''],
      tert: ['- Génétique, chirurgie cardiaque', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Trisomie 21 libre',
        type: 'commune',
        description: 'Non-disjonction.',
        terrain: '- Mère âgée',
        fonctionnels: '',
        generaux: '',
        physiques: '- Hypotonie, dysmorphie, pli palmaire unique',
        paraclinique: '- 47,XX ou XY,+21',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Trisomie 21 avec cardiopathie',
        type: 'gravite',
        description: 'Canal atrio-ventriculaire.',
        terrain: '',
        fonctionnels: '- Difficultés à téter',
        generaux: '- Mauvaise prise de poids',
        physiques: '- Souffle, polypnée',
        paraclinique: '- Échocardiographie',
        etiologies: '',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
      },
      {
        nom: 'Trisomie 21 par translocation',
        type: 'etiologique',
        description: 'Risque de récurrence.',
        terrain: '- Parent porteur',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Translocation robertsonienne',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Turner
  {
    ...GEN,
    slug: 'syndrome-de-turner',
    nom: 'Syndrome de Turner',
    resume:
      'Anomalie chromosomique de la fille (45,X ou mosaïque, ≈ 1/2 500 naissances féminines) : petite taille (signe constant), insuffisance ovarienne (absence de puberté, aménorrhée primaire, infertilité), signes morphologiques inconstants (lymphœdème des mains et des pieds à la naissance, cou palmé, thorax large, cubitus valgus) ; malformations cardiaques (coarctation, bicuspidie aortique) et rénales ; caryotype devant toute fille petite inexpliquée ; hormone de croissance, induction pubertaire, suivi cardiaque.',
    definition:
      'Monosomie totale ou partielle du chromosome X chez une fille (45,X, mosaïques 45,X/46,XX, anomalies de structure de l’X), responsable d’une petite taille et d’une dysgénésie gonadique.',
    physiopathologie:
      '## Mécanismes\n- Haplo-insuffisance du gène SHOX → **petite taille**\n- **Dysgénésie gonadique** → insuffisance ovarienne (puberté absente ou incomplète, infertilité)\n- Malformations : **coarctation de l’aorte**, **bicuspidie aortique**, rein en fer à cheval\n- Autres : otites et surdité, hypothyroïdie auto-immune, maladie cœliaque, diabète, HTA\n- Mosaïque avec chromosome Y : risque de gonadoblastome',
    diagnostic:
      '## Clinique\n- Nouveau-née : **lymphœdème** du dos des mains et des pieds, excès de peau de la nuque\n- Enfant : **petite taille** (−2 à −3 DS), cou court et palmé, implantation basse des cheveux, thorax large avec mamelons écartés, cubitus valgus, 4e métacarpien court, naevi multiples\n- Adolescente : **retard pubertaire**, **aménorrhée primaire**\n- Intelligence habituellement normale (difficultés visuo-spatiales possibles)\n\n## Examens\n- **Caryotype** (au moins 30 mitoses : mosaïques)\n- **LH, FSH** élevées (insuffisance ovarienne)\n- **Échocardiographie**, échographie rénale, TSH, audiométrie, tension aux 4 membres',
    examens: [
      ['confirmation', 'caryotype', '45,X ou mosaïque.'],
      ['premiere_intention', 'gonadotrophines-lh-fsh', 'Insuffisance ovarienne.'],
      ['gravite', 'echocardiographie', 'Coarctation, bicuspidie.'],
      ['premiere_intention', 'echographie-renale', 'Malformations rénales.'],
      ['premiere_intention', 'tsh', 'Hypothyroïdie.'],
      ['premiere_intention', 'audiometrie', 'Surdité.'],
      ['premiere_intention', 'age-osseux', 'Croissance.'],
    ],
    scores: [],
    differentiels: [
      ['petite-taille-enfant', 'Autres causes de petite taille.'],
      ['retard-pubertaire', 'Retard simple ou fonctionnel.'],
      ['Syndrome de Noonan', 'Phénotype proche, caryotype normal, garçons et filles.'],
      ['hypothyroidie-adulte', 'Hypothyroïdie (TSH).'],
    ],
    etiologies: '## Mécanisme\n- Perte accidentelle d’un chromosome X ; non héréditaire le plus souvent',
    principes: [
      [
        'Croissance',
        'Gagner en taille.',
        '- **Hormone de croissance** (somatropine) dès que la croissance ralentit (centres spécialisés, coût élevé)',
      ],
      [
        'Puberté',
        'Induire.',
        '- **Œstrogènes** à doses progressives vers 11–12 ans, puis association à un progestatif (endocrinologie)\n- Information sur la fertilité (don d’ovocytes dans certains pays)',
      ],
      [
        'Suivi',
        'Dépister les complications.',
        '- Cardiologie (dilatation aortique, HTA), rein, audition, thyroïde, maladie cœliaque, glycémie\n- Soutien psychologique et scolaire ; gonadectomie si matériel Y',
      ],
    ],
    molecules: [
      ['somatropine', 'premiere', 'Petite taille'],
      ['estradiol', 'premiere', 'Induction pubertaire'],
      ['medroxyprogesterone', 'adjuvant', 'Association progestative'],
      ['levothyroxine', 'adjuvant', 'Hypothyroïdie'],
    ],
    complications: [
      {
        nom: 'Coarctation et dissection aortique',
        fiche: 'hypertension-arterielle-enfant',
        description: 'Malformation aortique.',
        traitement: '- Chirurgie, contrôle tensionnel',
        clinique: '- HTA, pouls fémoraux faibles',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Infertilité',
        description: 'Insuffisance ovarienne.',
        traitement: '- Prise en charge spécialisée',
        clinique: '- Aménorrhée',
        paraclinique: '- FSH élevée',
      },
      {
        nom: 'Surdité',
        fiche: 'otite-moyenne-chronique',
        description: 'Otites répétées.',
        traitement: '- Traitement des otites, appareillage',
        clinique: '- Hypoacousie',
        paraclinique: '- Audiométrie',
      },
    ],
    evolution:
      '## Pronostic\n- Vie normale avec un suivi adapté ; risque cardiovasculaire à surveiller à vie',
    urgences: [],
    symptomes: [
      ['Petite taille', 'tres_frequent'],
      ['Retard pubertaire', 'tres_frequent'],
      ['Aménorrhée', 'frequent'],
      ['Dysmorphie', 'frequent'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Fille petite ou sans puberté : orientation', ''],
      hgr: ['- Bilan, échocardiographie', ''],
      tert: ['- Endocrinologie pédiatrique, caryotype', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Turner 45,X',
        type: 'commune',
        description: 'Forme complète.',
        terrain: '- Fille',
        fonctionnels: '',
        generaux: '- Petite taille',
        physiques: '- Cou palmé, thorax large',
        paraclinique: '- 45,X',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Turner en mosaïque',
        type: 'evolutive',
        description: 'Signes atténués.',
        terrain: '- Adolescente',
        fonctionnels: '- Aménorrhée',
        generaux: '- Petite taille isolée',
        physiques: '- Peu de dysmorphie',
        paraclinique: '- 45,X/46,XX',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Erreurs innées du métabolisme
  {
    ...GEN,
    slug: 'erreurs-innees-du-metabolisme',
    nom: 'Erreurs innées du métabolisme',
    resume:
      'Maladies héréditaires rares (souvent autosomiques récessives, consanguinité) d’une enzyme du métabolisme : à évoquer devant un nouveau-né initialement normal qui se dégrade après quelques jours (refus de téter, vomissements, léthargie, coma, convulsions), une hypoglycémie inexpliquée, une acidose, une odeur anormale, une hépatomégalie, un retard psychomoteur avec régression ; glycémie, gaz du sang, lactates, ammoniémie, cétonurie ; urgence : arrêt des protéines, perfusion de glucose 10 %, correction de l’acidose, transfert spécialisé.',
    definition:
      'Groupe de maladies génétiques dues au déficit d’une enzyme ou d’un transporteur d’une voie métabolique, responsable d’une accumulation de substances toxiques ou d’un déficit énergétique.',
    physiopathologie:
      '## Grands groupes\n- **Intoxication** : aminoacidopathies (phénylcétonurie, leucinose), aciduries organiques, **déficits du cycle de l’urée** (hyperammoniémie), **galactosémie**\n- **Déficit énergétique** : glycogénoses (hypoglycémie, hépatomégalie), déficits de l’oxydation des acides gras, maladies mitochondriales (acidose lactique)\n- **Maladies de surcharge** : mucopolysaccharidoses, maladie de Gaucher (hépatosplénomégalie, dysmorphie)\n\n## Déclencheurs\n- Début de l’alimentation lactée, jeûne, infection, fièvre',
    diagnostic:
      '## Quand y penser\n- Nouveau-né **normal à la naissance** puis dégradation après un intervalle libre : refus de téter, vomissements, **léthargie, coma**, convulsions, hypotonie\n- Septicémie suspectée mais hémocultures négatives ; décès néonatals inexpliqués dans la fratrie ; **consanguinité**\n- **Hypoglycémie** sans cétose, **acidose** métabolique, odeur anormale des urines, **hépatomégalie**, ictère, cataracte (galactosémie)\n- Enfant : régression psychomotrice, épisodes répétés de vomissements et de coma lors des infections, dysmorphie progressive\n\n## Examens d’urgence (avant traitement si possible)\n- **Glycémie**, **gaz du sang** (acidose, trou anionique), **lactates**, **ammoniémie**, ionogramme\n- **Bandelette urinaire** (cétonurie), bilan hépatique\n- Conserver plasma et urines pour analyses spécialisées',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'gaz-du-sang', 'Acidose métabolique.'],
      ['premiere_intention', 'lactates', 'Acidose lactique.'],
      ['confirmation', 'ammoniemie', 'Hyperammoniémie.'],
      ['premiere_intention', 'ionogramme', 'Trou anionique.'],
      ['premiere_intention', 'bandelette-urinaire', 'Cétonurie.'],
      ['premiere_intention', 'bilan-hepatique', 'Atteinte hépatique.'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-neonatal', 'Infection néonatale (souvent évoquée en premier).'],
      ['hypoglycemie-neonatale', 'Hypoglycémie d’autre cause.'],
      ['hyperplasie-congenitale-des-surrenales', 'Vomissements, déshydratation, hyperkaliémie.'],
      ['cardiopathies-congenitales', 'Choc par obstacle gauche.'],
      ['cholestase-nourrisson-atresie-voies-biliaires', 'Ictère cholestatique.'],
    ],
    etiologies: '## Transmission\n- Autosomique récessive le plus souvent ; consanguinité',
    principes: [
      [
        'Urgence',
        'Stopper la production de toxiques.',
        '- **Arrêt des apports protéiques** et du lait (24–48 h)\n- **Perfusion de glucose 10 %** à débit élevé (8–10 mg/kg/min) pour bloquer le catabolisme\n- Correction de l’acidose, de la déshydratation et des troubles ioniques ; traitement de l’infection déclenchante\n- **Hyperammoniémie sévère** : épuration (dialyse) en centre spécialisé ; **L-carnitine**, **thiamine** et biotine en traitement d’épreuve selon l’avis spécialisé',
      ],
      [
        'Long terme',
        'Régime et suivi spécialisé.',
        '- Régimes spécifiques (sans galactose, pauvre en phénylalanine, repas fréquents dans les glycogénoses)\n- **Plan d’urgence** écrit pour les épisodes de décompensation\n- Conseil génétique, dépistage de la fratrie',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', 'Anticatabolisme'],
      ['levocarnitine', 'alternative', 'Aciduries organiques (avis spécialisé)'],
      ['vitamine-b1-thiamine', 'alternative', 'Traitement d’épreuve'],
      ['biotine-vitamine-b8-h', 'alternative', 'Traitement d’épreuve'],
      ['bicarbonate-de-sodium', 'adjuvant', 'Acidose sévère'],
    ],
    complications: [
      {
        nom: 'Coma et œdème cérébral',
        fiche: 'coma-enfant',
        description: 'Hyperammoniémie, toxiques.',
        traitement: '- Épuration, réanimation',
        clinique: '- Coma, convulsions',
        paraclinique: '- Ammoniémie',
      },
      {
        nom: 'Séquelles neurologiques',
        fiche: 'deficience-intellectuelle',
        description: 'Décompensations répétées.',
        traitement: '- Prévention, régime',
        clinique: '- Retard',
        paraclinique: '',
      },
      {
        nom: 'Hypoglycémies',
        fiche: 'hypoglycemie-enfant',
        description: 'Glycogénoses, déficits de l’oxydation.',
        traitement: '- Repas fréquents, glucose',
        clinique: '- Malaises, convulsions',
        paraclinique: '- Glycémie',
      },
    ],
    evolution:
      '## Pronostic\n- Très variable ; bon pour certaines maladies diagnostiquées tôt (galactosémie, phénylcétonurie) ; mortalité néonatale élevée sans diagnostic',
    urgences: [],
    symptomes: [
      ['Vomissements', 'frequent'],
      ['Refus de téter', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Convulsions', 'frequent'],
      ['Hépatomégalie', 'occasionnel'],
      ['Régression des acquisitions', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'Pocket book of hospital care for children (2e édition)'],
    niveaux: {
      cs: ['- Glycémie, glucose, transfert', '- Nouveau-né qui se dégrade après un intervalle libre'],
      hgr: ['- Gaz du sang, lactates, glucose 10 %, arrêt des protéines', ''],
      tert: ['- Centre de maladies métaboliques, dialyse', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme néonatale avec intoxication',
        type: 'commune',
        description: 'Intervalle libre.',
        terrain: '- Nouveau-né, consanguinité',
        fonctionnels: '- Refus de téter, vomissements',
        generaux: '',
        physiques: '- Léthargie, coma, hypotonie',
        paraclinique: '- Hyperammoniémie, acidose',
        etiologies: '- Cycle de l’urée, aciduries organiques',
        syndromes: [],
      },
      {
        nom: 'Forme avec hypoglycémie et hépatomégalie',
        type: 'etiologique',
        description: 'Glycogénoses.',
        terrain: '- Nourrisson',
        fonctionnels: '- Malaises au jeûne',
        generaux: '',
        physiques: '- Hépatomégalie',
        paraclinique: '- Hypoglycémie, lactates élevés',
        etiologies: '- Glycogénose',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Albinisme enfant
  {
    ...GEN,
    slug: 'albinisme-enfant',
    nom: 'Albinisme de l’enfant',
    resume:
      'Albinisme oculo-cutané (≈ 1/1 500–5 000 en Afrique subsaharienne) : peau claire, cheveux blonds ou roux, iris clairs, nystagmus, photophobie, baisse de la vision ; chez l’enfant, enjeux principaux : protection solaire stricte dès la naissance (vêtements couvrants, chapeau, crème solaire à large spectre, éviter le soleil de 10 à 16 h), correction visuelle et adaptation scolaire, dépistage des lésions précancéreuses, lutte contre la stigmatisation et les violences ; conseil génétique.',
    definition:
      'Maladie génétique autosomique récessive caractérisée par un défaut de synthèse de la mélanine touchant la peau, les cheveux et les yeux (albinisme oculo-cutané).',
    physiopathologie:
      '## Mécanismes\n- Mutations (OCA2 surtout en Afrique) → absence ou réduction de **mélanine**\n- **Peau** sans protection contre les UV → coups de soleil, kératoses actiniques, **carcinomes** dès l’adolescence\n- **Yeux** : hypoplasie fovéolaire, décussation anormale des voies optiques → **baisse de l’acuité visuelle**, **nystagmus**, photophobie, strabisme',
    diagnostic:
      '## Clinique\n- Peau très claire, rosée ; cheveux blancs, jaunes ou roux ; iris bleus ou gris translucides\n- **Nystagmus** dès les premiers mois, **photophobie**, **baisse de vision**, strabisme\n- Lésions cutanées : coups de soleil, taches de rousseur, **kératoses actiniques** (plaques rugueuses), plaies qui ne cicatrisent pas (carcinome)\n\n## Examens\n- Diagnostic clinique ; **acuité visuelle**, réfraction, fond d’œil\n- Biopsie de toute lésion cutanée suspecte',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Baisse de vision.'],
      ['premiere_intention', 'fond-d-oeil', 'Hypoplasie fovéolaire.'],
      ['gravite', 'biopsie-histologie', 'Lésion cutanée suspecte.'],
    ],
    scores: [],
    differentiels: [
      ['albinisme-protection-cutanee', 'Fiche de l’adulte.'],
      ['Vitiligo', 'Taches dépigmentées acquises, yeux normaux.'],
      ['Piébaldisme', 'Mèche blanche et taches congénitales localisées, yeux normaux.'],
    ],
    etiologies: '## Transmission\n- Autosomique récessive ; parents porteurs sains',
    principes: [
      [
        'Protection solaire',
        'Prévenir les cancers.',
        '- Dès la naissance : **vêtements à manches longues**, pantalons, **chapeau à larges bords**, lunettes de soleil\n- **Crème solaire** à large spectre (indice ≥ 30), renouvelée toutes les 2 h à l’extérieur\n- Éviter le soleil entre 10 et 16 h ; jeux à l’ombre ; programmes de distribution de crème solaire',
      ],
      [
        'Vision et scolarité',
        'Favoriser l’apprentissage.',
        '- Lunettes correctrices, aides optiques (loupes), placement au premier rang, documents en gros caractères\n- Information des enseignants',
      ],
      [
        'Surveillance et protection',
        'Suivi régulier.',
        '- Examen de la peau tous les 6–12 mois, traitement précoce des lésions (cryothérapie, chirurgie)\n- **Protection contre les violences**, la discrimination et l’exclusion scolaire ; soutien psychosocial ; conseil génétique',
      ],
    ],
    molecules: [],
    complications: [
      {
        nom: 'Carcinomes cutanés',
        fiche: 'carcinomes-cutanes',
        description: 'Exposition solaire.',
        traitement: '- Chirurgie',
        clinique: '- Plaie chronique, nodule',
        paraclinique: '- Biopsie',
      },
      {
        nom: 'Malvoyance',
        description: 'Atteinte oculaire.',
        traitement: '- Aides visuelles',
        clinique: '- Baisse de vision, nystagmus',
        paraclinique: '- Acuité visuelle',
      },
      {
        nom: 'Violences et stigmatisation',
        fiche: 'maltraitance-enfant',
        description: 'Croyances.',
        traitement: '- Protection, sensibilisation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec une protection solaire stricte ; cancers cutanés fréquents dès 20–30 ans sans protection',
    urgences: [],
    symptomes: [
      ['Nystagmus', 'tres_frequent'],
      ['Photophobie', 'tres_frequent'],
      ['Troubles visuels', 'tres_frequent'],
      ['Brûlure cutanée', 'frequent'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Nelson Textbook of Pediatrics'],
    niveaux: {
      cs: [
        '- Conseils de protection solaire, examen de la peau, orientation ophtalmologique',
        '- Lésion cutanée suspecte',
      ],
      hgr: ['- Ophtalmologie, dermatologie', ''],
      tert: ['- Chirurgie des carcinomes', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Albinisme oculo-cutané de l’enfant',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Enfant',
        fonctionnels: '- Photophobie',
        generaux: '',
        physiques: '- Peau claire, nystagmus',
        paraclinique: '- Acuité visuelle basse',
        etiologies: '- OCA2',
        syndromes: [],
      },
      {
        nom: 'Lésions précancéreuses',
        type: 'gravite',
        description: 'Exposition solaire.',
        terrain: '- Adolescent',
        fonctionnels: '',
        generaux: '',
        physiques: '- Kératoses actiniques',
        paraclinique: '- Biopsie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
