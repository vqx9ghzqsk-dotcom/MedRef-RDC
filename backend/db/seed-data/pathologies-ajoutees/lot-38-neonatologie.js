'use strict';

/**
 * Lot 38 (phase 2, néonatologie) — maladie des membranes hyalines, inhalation méconiale,
 * conjonctivite néonatale, syphilis congénitale, nouveau-né de mère porteuse de l'hépatite B,
 * paludisme congénital. Rédigé par IA (OMS, Pocket book, programmes nationaux) : à valider.
 */

const NEO = { departement: 'pediatrie', specialite: 'Néonatologie' };

module.exports = [
  // =================================================================== MMH
  {
    ...NEO,
    slug: 'maladie-des-membranes-hyalines',
    nom: 'Maladie des membranes hyalines',
    resume:
      'Détresse respiratoire du prématuré (surtout < 32 SA) par déficit en surfactant, dès les premières heures : geignement, tirage, polypnée, cyanose s’aggravant sur 48–72 h ; prévention par corticoïdes anténatals ; CPAP précoce (y compris CPAP à bulles), oxygène pour SpO2 90–95 %, surfactant si disponible, caféine, maintien de la température, antibiotiques jusqu’à exclusion d’un sepsis.',
    definition:
      'Détresse respiratoire du nouveau-né prématuré due à un déficit quantitatif en surfactant pulmonaire, entraînant un collapsus alvéolaire (atélectasie) et une hypoxémie.',
    physiopathologie:
      '## Mécanismes\n- Surfactant produit par les pneumocytes II, insuffisant avant 34 SA\n- Collapsus alvéolaire en fin d’expiration, shunt, hypoxémie, acidose, épuisement\n\n## Facteurs de risque\n- **Prématurité** (risque inversement proportionnel à l’âge gestationnel), garçon, diabète maternel, césarienne avant travail, asphyxie, hypothermie\n- Facteur protecteur : **corticoïdes anténatals**',
    diagnostic:
      '## Clinique\n- Dans les **premières heures** de vie : **polypnée** > 60/min, **geignement expiratoire**, tirage, battement des ailes du nez, **cyanose**\n- Aggravation sur 24–72 h puis amélioration progressive (production de surfactant)\n- Score de Silverman\n\n## Examens\n- **SpO2**, glycémie, température\n- **Radiographie thoracique** : opacités réticulo-granitées bilatérales, bronchogramme aérien, poumons de petit volume\n- NFS, CRP, hémocultures (sepsis à streptocoque B : tableau identique)',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxémie.'],
      ['confirmation', 'radiographie-thoracique', 'Aspect réticulo-granité.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['etiologique', 'hemocultures', 'Sepsis néonatal.'],
      ['etiologique', 'crp', 'Infection.'],
      ['gravite', 'gaz-du-sang', 'Acidose, hypercapnie.'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-neonatal', 'Infection maternofœtale (traiter les deux si doute).'],
      ['Détresse respiratoire transitoire', 'Nouveau-né à terme, césarienne, amélioration rapide.'],
      ['inhalation-meconiale', 'Liquide méconial, nouveau-né à terme ou post-terme.'],
      ['pneumothorax-spontane', 'Aggravation brutale, asymétrie.'],
      ['cardiopathies-congenitales', 'Cyanose réfractaire à l’oxygène.'],
    ],
    etiologies: '## Terrain\n- Prématuré < 34 SA, absence de corticoïdes anténatals, mère diabétique',
    principes: [
      [
        'Soutien respiratoire',
        'Maintenir les alvéoles ouvertes.',
        '- **CPAP** précoce (5–7 cmH2O), y compris **CPAP à bulles** artisanale dans les structures sans ventilateur\n- **Oxygène** pour SpO2 **90–95 %** (éviter l’hyperoxie : rétinopathie du prématuré)\n- **Surfactant** (**poractant alfa** 200 mg/kg intratrachéal) si disponible et équipe formée\n- Ventilation mécanique si échec',
      ],
      [
        'Soins de soutien',
        'Stabiliser.',
        '- **Thermorégulation** (incubateur, peau à peau dès que possible), glycémie, apports hydriques 60–80 mL/kg/j à J1\n- **Caféine** (citrate 20 mg/kg puis 5 mg/kg/j) chez le grand prématuré\n- **Ampicilline + gentamicine** jusqu’à exclusion d’un sepsis (arrêt à 48 h si hémocultures négatives)',
      ],
      [
        'Prévention',
        'Réduire l’incidence.',
        '- **Corticoïdes anténatals** (dexaméthasone 6 mg IM toutes les 12 h, 4 doses) entre 24 et 34 SA en cas de menace d’accouchement prématuré, si soins néonatals adéquats',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'SpO2 90–95 %'],
      ['poractant-alfa', 'premiere', 'Surfactant'],
      ['cafeine', 'adjuvant', 'Apnées du prématuré'],
      ['ampicilline', 'adjuvant', 'Sepsis non exclu'],
      ['gentamicine', 'adjuvant', 'Sepsis non exclu'],
      ['dexamethasone', 'premiere', 'Corticoïdes anténatals (mère)'],
    ],
    complications: [
      {
        nom: 'Pneumothorax',
        description: 'Ventilation, CPAP.',
        traitement: '- Exsufflation, drainage',
        clinique: '- Aggravation brutale',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Dysplasie bronchopulmonaire',
        description: 'Oxygénodépendance prolongée.',
        traitement: '- Oxygène, nutrition',
        clinique: '- Besoin en oxygène après 36 SA corrigées',
        paraclinique: '',
      },
      {
        nom: 'Hémorragie intraventriculaire',
        fiche: 'prematurite',
        description: 'Grand prématuré.',
        traitement: '- Soins de soutien',
        clinique: '- Convulsions, fontanelle bombée',
        paraclinique: '- Échographie transfontanellaire',
      },
      {
        nom: 'Rétinopathie du prématuré',
        description: 'Excès d’oxygène.',
        traitement: '- Dépistage, laser',
        clinique: '',
        paraclinique: '- Fond d’œil',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration après 72 h dans les formes traitées ; mortalité élevée sans CPAP chez le grand prématuré',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Tachypnée', 'tres_frequent'],
      ['Geignement expiratoire', 'tres_frequent'],
      ['Cyanose', 'frequent'],
      ['Hypothermie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Peau à peau, oxygène si disponible, transfert immédiat',
        '- Prématuré avec détresse respiratoire',
      ],
      hgr: ['- CPAP à bulles, oxygène, antibiotiques, thermorégulation', '- Surfactant, ventilation'],
      tert: ['- Réanimation néonatale, surfactant', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence': 'Détresse respiratoire du nouveau-né : sepsis à ne pas méconnaître',
    },
    formes: [
      {
        nom: 'MMH du prématuré',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Prématuré < 34 SA',
        fonctionnels: '- Geignement, tirage',
        generaux: '',
        physiques: '- Polypnée, cyanose',
        paraclinique: '- Aspect réticulo-granité',
        etiologies: '- Déficit en surfactant',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'MMH sévère',
        type: 'gravite',
        description: 'Épuisement.',
        terrain: '- Grand prématuré < 30 SA',
        fonctionnels: '- Apnées',
        generaux: '- Hypothermie',
        physiques: '- Cyanose réfractaire',
        paraclinique: '- Poumons blancs, acidose',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Inhalation méconiale
  {
    ...NEO,
    slug: 'inhalation-meconiale',
    nom: 'Inhalation méconiale',
    resume:
      'Détresse respiratoire du nouveau-né à terme ou post-terme né dans un liquide amniotique méconial, souvent après une asphyxie : polypnée, cyanose, distension thoracique ; réanimation en salle de naissance selon les recommandations (ventilation si non vigoureux, pas d’aspiration trachéale systématique) ; oxygène, CPAP ou ventilation, antibiotiques, surveillance du pneumothorax et de l’hypertension pulmonaire.',
    definition:
      'Détresse respiratoire due à l’inhalation de liquide amniotique teinté de méconium avant ou pendant la naissance, provoquant obstruction des voies aériennes, pneumopathie chimique et inactivation du surfactant.',
    physiopathologie:
      '## Mécanismes\n- **Souffrance fœtale** (hypoxie) → émission de méconium et gasps in utero\n- Obstruction bronchique (effet clapet : emphysème, **pneumothorax**), pneumopathie inflammatoire, inactivation du surfactant\n- **Hypertension artérielle pulmonaire persistante** : hypoxémie réfractaire\n\n## Terrain\n- Terme dépassé, retard de croissance, asphyxie, travail prolongé',
    diagnostic:
      '## Clinique\n- Liquide amniotique méconial (vert épais), nouveau-né imprégné de méconium (ongles, cordon)\n- Détresse respiratoire précoce : polypnée, tirage, geignement, **cyanose**, thorax distendu\n- Signes associés d’asphyxie (hypotonie, convulsions)\n\n## Examens\n- **SpO2**, **radiographie thoracique** : opacités en plages, zones d’hyperclarté, pneumothorax\n- Glycémie, NFS, CRP, hémocultures, gaz du sang',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxémie.'],
      ['confirmation', 'radiographie-thoracique', 'Opacités hétérogènes, pneumothorax.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['gravite', 'gaz-du-sang', 'Acidose, hypoxémie.'],
      ['etiologique', 'hemocultures', 'Infection.'],
    ],
    scores: [],
    differentiels: [
      ['maladie-des-membranes-hyalines', 'Prématuré, aspect réticulo-granité.'],
      ['sepsis-neonatal', 'Infection maternofœtale.'],
      ['Détresse respiratoire transitoire', 'Amélioration rapide, liquide clair.'],
      ['cardiopathies-congenitales', 'Cyanose sans détresse marquée.'],
    ],
    etiologies:
      '## Facteurs\n- Grossesse prolongée, souffrance fœtale aiguë, retard de croissance intra-utérin',
    principes: [
      [
        'En salle de naissance',
        'Réanimer selon les recommandations.',
        '- Nouveau-né **vigoureux** : soins habituels (pas d’aspiration)\n- Nouveau-né **non vigoureux** : séchage, stimulation et **ventilation au ballon** dans la première minute ; l’aspiration trachéale systématique n’est plus recommandée (seulement si obstruction)\n- Voir *Réanimation du nouveau-né en salle de naissance*',
      ],
      [
        'Prise en charge respiratoire',
        'Corriger l’hypoxémie.',
        '- **Oxygène** (SpO2 > 92–95 % chez le nouveau-né à terme), **CPAP** ou ventilation si besoin\n- Surfactant dans les unités équipées\n- Pneumothorax : exsufflation, drainage',
      ],
      [
        'Soins de soutien',
        'Prévenir les complications.',
        '- Thermorégulation, glycémie, apports hydriques prudents\n- **Ampicilline + gentamicine** si risque infectieux, arrêt à 48 h si bilan négatif\n- Prise en charge de l’asphyxie associée (convulsions : phénobarbital)',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['ampicilline', 'adjuvant', 'Risque infectieux'],
      ['gentamicine', 'adjuvant', 'Risque infectieux'],
      ['phenobarbital', 'adjuvant', 'Convulsions (asphyxie)'],
      ['poractant-alfa', 'alternative', 'Formes sévères (centres équipés)'],
    ],
    complications: [
      {
        nom: 'Pneumothorax',
        description: 'Effet clapet.',
        traitement: '- Exsufflation, drainage',
        clinique: '- Aggravation brutale',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Hypertension pulmonaire persistante',
        description: 'Hypoxémie réfractaire.',
        traitement: '- Réanimation spécialisée',
        clinique: '- Cyanose réfractaire',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Encéphalopathie hypoxique-ischémique',
        fiche: 'asphyxie-perinatale',
        description: 'Asphyxie associée.',
        traitement: '- Soins de soutien',
        clinique: '- Convulsions, hypotonie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Favorable dans les formes modérées ; mortalité et séquelles dans les formes avec hypertension pulmonaire et asphyxie',
    urgences: [],
    symptomes: [
      ['Tachypnée', 'tres_frequent'],
      ['Cyanose', 'frequent'],
      ['Geignement expiratoire', 'frequent'],
      ['Hypotonie', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Réanimation en salle de naissance (ventilation), oxygène, transfert',
        '- Détresse respiratoire, liquide méconial épais',
      ],
      hgr: ['- Oxygène, CPAP, antibiotiques, radiographie', '- Ventilation, pneumothorax'],
      tert: ['- Réanimation néonatale', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Inhalation méconiale modérée',
        type: 'commune',
        description: 'Détresse transitoire.',
        terrain: '- Nouveau-né à terme ou post-terme',
        fonctionnels: '- Polypnée',
        generaux: '',
        physiques: '- Imprégnation méconiale, tirage',
        paraclinique: '- Opacités en plages',
        etiologies: '- Souffrance fœtale',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Forme sévère avec hypertension pulmonaire',
        type: 'gravite',
        description: 'Hypoxémie réfractaire.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Cyanose réfractaire',
        paraclinique: '- Hypoxémie sévère',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Conjonctivite néonatale
  {
    ...NEO,
    slug: 'conjonctivite-neonatale',
    nom: 'Conjonctivite néonatale',
    resume:
      'Conjonctivite du premier mois : à gonocoque (J2–J5, purulente abondante, risque de perforation cornéenne et de cécité) ou à Chlamydia (J5–J14) ; prévention par pommade de tétracycline 1 % à la naissance ; gonocoque : ceftriaxone 50 mg/kg IM dose unique (max 125 mg) et lavages oculaires fréquents ; Chlamydia : érythromycine ou azithromycine orale ; traiter la mère et son partenaire.',
    definition:
      'Conjonctivite survenant dans les 28 premiers jours de vie (ophtalmie du nouveau-né), le plus souvent transmise lors du passage dans les voies génitales maternelles.',
    physiopathologie:
      '## Agents\n- **Neisseria gonorrhoeae** : début J2–J5, très purulente, ulcère et perforation cornéenne rapides\n- **Chlamydia trachomatis** : début J5–J14, moins sévère, pneumonie associée possible (3–12 semaines)\n- Autres bactéries (staphylocoque, streptocoque), HSV ; conjonctivite chimique (J1)\n\n## Facteurs\n- IST maternelles non traitées, absence de prophylaxie oculaire, accouchement à domicile',
    diagnostic:
      '## Clinique\n- Œdème palpébral, **sécrétions purulentes**, œil rouge, uni- ou bilatéral\n- Gonocoque : pus abondant jaillissant à l’ouverture des paupières, chémosis\n- Rechercher une atteinte cornéenne (opacité), une pneumonie (Chlamydia), une fièvre (sepsis)\n\n## Examens\n- **Prélèvement conjonctival** : Gram (diplocoques Gram négatif), culture, PCR si disponible\n- Mère : dépistage et traitement des IST, test VIH, sérologie syphilis',
    examens: [
      ['confirmation', 'prelevement-oculaire', 'Gram, culture.'],
      ['etiologique', 'serologie-syphilis', 'Mère : IST associées.'],
      ['etiologique', 'tdr-vih', 'Mère : VIH.'],
      ['gravite', 'hemocultures', 'Gonococcie disséminée.'],
    ],
    scores: [],
    differentiels: [
      ['conjonctivite-enfant', 'Après le 1er mois.'],
      ['Conjonctivite chimique', 'J1, après instillation oculaire, régression spontanée.'],
      ['Obstruction du canal lacrymal', 'Larmoiement chronique, pas d’œil rouge.'],
      ['Glaucome congénital', 'Gros œil, cornée trouble, larmoiement.'],
    ],
    etiologies:
      '## Facteurs de risque\n- IST maternelles (gonocoque, Chlamydia), rupture prolongée des membranes, absence de prophylaxie',
    principes: [
      [
        'Prévention',
        'Systématique à la naissance.',
        '- **Pommade de tétracycline 1 %** (ou érythromycine 0,5 %) dans les deux yeux dans l’heure suivant la naissance\n- Dépistage et traitement des IST pendant la grossesse',
      ],
      [
        'Conjonctivite à gonocoque',
        'Urgence.',
        '- **Ceftriaxone** 50 mg/kg IM en **dose unique** (maximum 125 mg) ; IV et plus prolongée si forme disséminée\n- **Lavages oculaires** au sérum physiologique toutes les heures jusqu’à disparition du pus\n- Avis ophtalmologique si atteinte cornéenne',
      ],
      [
        'Conjonctivite à Chlamydia',
        'Traitement oral.',
        '- **Érythromycine** 50 mg/kg/j en 4 prises pendant 14 jours, ou **azithromycine** 20 mg/kg/j pendant 3 jours (risque de sténose du pylore chez le nourrisson de moins de 2 semaines)\n- Traitement local seul insuffisant',
      ],
      [
        'Mère et partenaire',
        'Traiter la source.',
        '- Traitement présomptif du gonocoque et de Chlamydia selon l’approche syndromique',
      ],
    ],
    molecules: [
      ['tetracycline', 'premiere', 'Prophylaxie oculaire (pommade 1 %)'],
      ['ceftriaxone', 'premiere', 'Gonocoque'],
      ['erythromycine', 'premiere', 'Chlamydia'],
      ['azithromycine', 'alternative', 'Chlamydia'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Lavages oculaires'],
    ],
    complications: [
      {
        nom: 'Perforation cornéenne et cécité',
        description: 'Gonocoque non traité.',
        traitement: '- Ceftriaxone, avis ophtalmologique',
        clinique: '- Opacité cornéenne',
        paraclinique: '',
      },
      {
        nom: 'Pneumonie à Chlamydia',
        fiche: 'pneumonie-enfant',
        description: '3–12 semaines.',
        traitement: '- Érythromycine',
        clinique: '- Toux quinteuse, apyrexie',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Gonococcie disséminée',
        fiche: 'sepsis-neonatal',
        description: 'Arthrite, sepsis, méningite.',
        traitement: '- Ceftriaxone IV prolongée',
        clinique: '- Fièvre, arthrite',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent si traitement précoce ; risque de cécité définitive avec le gonocoque',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Sécrétions oculaires', 'tres_frequent'],
      ['Yeux rouges', 'tres_frequent'],
      ['Œdème du visage', 'frequent'],
      ['Toux', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Prophylaxie à la naissance, ceftriaxone IM, lavages, traitement des parents',
        '- Atteinte cornéenne, fièvre',
      ],
      hgr: ['- Prélèvement, traitement des formes compliquées', ''],
      tert: ['- Ophtalmologie', ''],
    },
    alertes: { 'sepsis-neonatal-urgence': 'Conjonctivite purulente avec fièvre ou refus de téter' },
    formes: [
      {
        nom: 'Conjonctivite gonococcique',
        type: 'gravite',
        description: 'J2–J5, hyperpurulente.',
        terrain: '- Mère porteuse de gonocoque',
        fonctionnels: '',
        generaux: '',
        physiques: '- Pus abondant, chémosis, œdème palpébral',
        paraclinique: '- Diplocoques Gram négatif',
        etiologies: '- N. gonorrhoeae',
        syndromes: [],
      },
      {
        nom: 'Conjonctivite à Chlamydia',
        type: 'commune',
        description: 'J5–J14.',
        terrain: '- Mère porteuse de Chlamydia',
        fonctionnels: '',
        generaux: '',
        physiques: '- Sécrétions modérées, œdème',
        paraclinique: '- PCR Chlamydia',
        etiologies: '- C. trachomatis',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Syphilis congénitale
  {
    ...NEO,
    slug: 'syphilis-congenitale',
    nom: 'Syphilis congénitale',
    resume:
      'Transmission transplacentaire de Treponema pallidum, évitable par le dépistage et le traitement des femmes enceintes : nouveau-né souvent asymptomatique, ou rhinite, pemphigus palmo-plantaire, hépatosplénomégalie, anémie, ostéochondrite (pseudo-paralysie) ; évaluer selon le traitement maternel ; benzathine pénicilline dose unique si nouveau-né normal de mère insuffisamment traitée ; pénicilline G ou procaïne 10 jours si infection probable.',
    definition:
      'Infection du fœtus et du nouveau-né par Treponema pallidum transmise par voie transplacentaire, à tout moment de la grossesse, chez une mère atteinte de syphilis non ou insuffisamment traitée.',
    physiopathologie:
      '## Mécanismes\n- Transmission transplacentaire, risque maximal en cas de syphilis maternelle récente\n- Conséquences : avortement, **mort fœtale in utero**, prématurité, hydrops, syphilis congénitale précoce (< 2 ans) ou tardive\n\n## Traitement maternel adéquat\n- Benzathine benzylpénicilline débutée **au moins 30 jours avant l’accouchement** ; tout autre traitement est considéré comme insuffisant pour le nouveau-né',
    diagnostic:
      '## Clinique (précoce)\n- Souvent **asymptomatique** à la naissance\n- **Rhinite** (coryza séro-sanglant), **pemphigus palmo-plantaire** (bulles), éruption maculeuse, desquamation\n- **Hépatosplénomégalie**, ictère, anémie, thrombopénie, adénopathies\n- Pseudo-paralysie de Parrot (ostéochondrite), faible poids, hydrops\n\n## Examens\n- **RPR quantitatif** de l’enfant et de la mère (titre de l’enfant ≥ 4 fois celui de la mère : infection probable)\n- NFS, bilan hépatique, radiographie des os longs, ponction lombaire si symptomatique',
    examens: [
      ['confirmation', 'serologie-syphilis', 'RPR quantitatif comparé à celui de la mère.'],
      ['premiere_intention', 'nfs', 'Anémie, thrombopénie.'],
      ['premiere_intention', 'bilan-hepatique', 'Atteinte hépatique.'],
      ['gravite', 'radiographie-osseuse', 'Ostéochondrite.'],
      ['gravite', 'lcr', 'Neurosyphilis.'],
      ['etiologique', 'tdr-vih', 'Coïnfection maternelle.'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-neonatal', 'Infection bactérienne.'],
      ['Infections congénitales (CMV, toxoplasmose, rubéole)', 'Sérologies spécifiques.'],
      ['ictere-neonatal', 'Autres causes d’ictère.'],
      ['paludisme-congenital', 'Fièvre, TDR positif.'],
    ],
    etiologies:
      '## Terrain\n- Mère sans dépistage prénatal, syphilis maternelle non ou mal traitée, réinfection pendant la grossesse',
    principes: [
      [
        'Nouveau-né symptomatique ou infection probable',
        'Traiter 10 jours.',
        '- **Benzylpénicilline** 50 000 UI/kg IV toutes les 12 h pendant les 7 premiers jours de vie, puis toutes les 8 h, **10 jours** au total\n- Ou **pénicilline procaïne** 50 000 UI/kg IM une fois par jour pendant 10 jours',
      ],
      [
        'Nouveau-né asymptomatique',
        'Selon le traitement maternel.',
        '- Mère **insuffisamment traitée** (ou inconnue), enfant à examen normal : **benzathine benzylpénicilline** 50 000 UI/kg IM en dose unique (si suivi possible ; sinon traitement de 10 jours)\n- Mère correctement traitée : surveillance clinique et sérologique',
      ],
      [
        'Suivi et prévention',
        'Éliminer la transmission.',
        '- RPR à 3, 6 et 12 mois (négativation attendue)\n- **Dépistage de toutes les femmes enceintes** à la 1re CPN (test rapide) et traitement immédiat ; traitement des partenaires',
      ],
    ],
    molecules: [
      ['benzylpenicilline-penicilline-g', 'premiere', 'Infection probable, 10 jours'],
      ['penicilline-procaine-benzathine', 'alternative', 'Pénicilline procaïne IM 10 jours'],
      ['benzathine-benzylpenicilline', 'premiere', 'Nouveau-né asymptomatique, mère insuffisamment traitée'],
    ],
    complications: [
      {
        nom: 'Neurosyphilis',
        fiche: 'meningite-neonatale',
        description: 'Atteinte méningée.',
        traitement: '- Benzylpénicilline IV 10 jours',
        clinique: '- Convulsions, fontanelle bombée',
        paraclinique: '- LCR',
      },
      {
        nom: 'Mort fœtale et prématurité',
        fiche: 'mort-foetale-in-utero',
        description: 'Syphilis maternelle non traitée.',
        traitement: '- Prévention par le dépistage',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Syphilis congénitale tardive',
        description: 'Dents d’Hutchinson, kératite, surdité, déformations osseuses.',
        traitement: '- Pénicilline, prise en charge des séquelles',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison sous traitement précoce ; mortalité et séquelles importantes sans traitement',
    urgences: [],
    symptomes: [
      ['Rhinorrhée', 'frequent'],
      ['Bulles cutanées', 'frequent'],
      ['Hépatomégalie', 'frequent'],
      ['Splénomégalie', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Pâleur', 'frequent'],
      ['Paralysie flasque', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'CDC — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Dépistage maternel, benzathine pénicilline, orientation du nouveau-né symptomatique',
        '- Nouveau-né symptomatique',
      ],
      hgr: ['- Benzylpénicilline 10 jours, bilan', ''],
      tert: ['- Néonatologie, ponction lombaire', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Nouveau-né asymptomatique exposé',
        type: 'commune',
        description: 'Mère séropositive.',
        terrain: '- Mère non ou mal traitée',
        fonctionnels: '',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- RPR',
        etiologies: '- T. pallidum',
        syndromes: [],
      },
      {
        nom: 'Syphilis congénitale précoce symptomatique',
        type: 'gravite',
        description: 'Atteinte multiviscérale.',
        terrain: '',
        fonctionnels: '- Rhinite, pseudo-paralysie',
        generaux: '- Faible poids',
        physiques: '- Pemphigus palmo-plantaire, hépatosplénomégalie',
        paraclinique: '- RPR élevé, anémie',
        etiologies: '',
        syndromes: ['syndrome-anemique'],
      },
    ],
  },

  // =================================================================== Nouveau-né de mère AgHBs+
  {
    ...NEO,
    slug: 'nouveau-ne-mere-hepatite-b',
    nom: 'Nouveau-né de mère porteuse de l’hépatite B',
    resume:
      'Prévention de la transmission mère-enfant du VHB (90 % de chronicité si infection néonatale) : dépister l’AgHBs chez toutes les femmes enceintes, ténofovir maternel dès 28 SA si charge virale élevée ou AgHBe positif ; vaccin contre l’hépatite B à la naissance (idéalement < 12 h, au plus tard 24 h) + immunoglobulines anti-HBs si disponibles, puis vaccination complète (pentavalent) ; allaitement autorisé ; contrôle AgHBs et anticorps à 9–12 mois.',
    definition:
      'Prise en charge du nouveau-né dont la mère est porteuse de l’antigène HBs, visant à prévenir la transmission périnatale du virus de l’hépatite B.',
    physiopathologie:
      '## Transmission\n- Principalement à l’accouchement (exposition au sang et aux sécrétions)\n- Risque d’autant plus élevé que la charge virale maternelle est élevée (AgHBe positif)\n- L’infection néonatale devient **chronique dans 90 % des cas** (cirrhose et carcinome hépatocellulaire à l’âge adulte)',
    diagnostic:
      '## Repérage\n- **AgHBs** chez toute femme enceinte (test rapide à la CPN)\n- Si positif : charge virale ou AgHBe, transaminases, évaluation de la mère\n\n## Nouveau-né\n- Examen normal le plus souvent\n- Contrôle **AgHBs et anticorps anti-HBs** à 9–12 mois (1 à 2 mois après la dernière dose de vaccin)',
    examens: [
      ['premiere_intention', 'aghbs', 'Mère : dépistage ; enfant : contrôle à 9–12 mois.'],
      ['etiologique', 'marqueurs-vhb', 'Mère : AgHBe, charge virale.'],
      ['etiologique', 'tdr-vih', 'Coïnfection maternelle.'],
    ],
    scores: [],
    differentiels: [
      ['nouveau-ne-expose-au-vih', 'Prévention de la transmission du VIH (souvent associée).'],
      ['ictere-neonatal', 'Ictère néonatal d’autre cause (l’hépatite B néonatale est rarement ictérique).'],
    ],
    etiologies: '## Terrain\n- Mère porteuse chronique du VHB (prévalence élevée en RDC)',
    principes: [
      [
        'À la naissance',
        'Prévenir l’infection.',
        '- **Vaccin contre l’hépatite B** (dose de naissance, 0,5 mL IM) le plus tôt possible, **idéalement dans les 12 h**, au plus tard 24 h — y compris chez le prématuré\n- **Immunoglobulines anti-HBs** 100–200 UI IM (cuisse opposée) dans les 12 h si disponibles\n- Toilette soigneuse du nouveau-né ; allaitement maternel autorisé',
      ],
      [
        'Suite de la vaccination',
        'Compléter la protection.',
        '- Vaccin **pentavalent** à 6, 10 et 14 semaines selon le PEV\n- Contrôle AgHBs et anti-HBs à 9–12 mois ; revacciner si anti-HBs < 10 mUI/mL et AgHBs négatif',
      ],
      [
        'Mère',
        'Réduire la charge virale.',
        '- **Ténofovir** 300 mg/j dès 24–28 SA jusqu’à au moins la naissance si charge virale ≥ 200 000 UI/mL ou AgHBe positif (ou chez toutes les porteuses si tests indisponibles, selon l’OMS 2024)\n- Évaluation et suivi de l’hépatite B maternelle',
      ],
    ],
    molecules: [
      ['vaccin-hepatite-b', 'premiere', 'Dose de naissance'],
      ['immunoglobulines-anti-hbs', 'premiere', 'Dans les 12 h si disponibles'],
      ['vaccin-pentavalent', 'premiere', 'Suite de la vaccination'],
      ['tenofovir-disoproxil', 'premiere', 'Mère (prévention de la transmission)'],
    ],
    complications: [
      {
        nom: 'Hépatite B chronique de l’enfant',
        fiche: 'hepatites-virales-enfant',
        description: 'Échec de la prévention.',
        traitement: '- Suivi hépatologique',
        clinique: '- Souvent asymptomatique',
        paraclinique: '- AgHBs positif',
      },
      {
        nom: 'Cirrhose et carcinome hépatocellulaire',
        fiche: 'carcinome-hepatocellulaire',
        description: 'À l’âge adulte.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- La vaccination à la naissance (± immunoglobulines et ténofovir maternel) prévient plus de 90 % des transmissions',
    urgences: [],
    symptomes: [['Ictère', 'occasionnel']],
    sources: [
      'OMS — lignes directrices et publications',
      'EASL Clinical Practice Guidelines on the management of hepatitis B virus infection',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Dépistage AgHBs en CPN, vaccin à la naissance, orientation de la mère',
        '- Mère AgHBs positive',
      ],
      hgr: ['- Évaluation maternelle, ténofovir, immunoglobulines', ''],
      tert: ['- Hépatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Nouveau-né exposé au VHB',
        type: 'commune',
        description: 'Prévention à la naissance.',
        terrain: '- Mère AgHBs positive',
        fonctionnels: '',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '',
        etiologies: '- VHB maternel',
        syndromes: [],
      },
      {
        nom: 'Mère à charge virale élevée',
        type: 'gravite',
        description: 'Risque de transmission élevé.',
        terrain: '- AgHBe positif',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Charge virale ≥ 200 000 UI/mL',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Paludisme congénital
  {
    ...NEO,
    slug: 'paludisme-congenital',
    nom: 'Paludisme congénital',
    resume:
      'Paludisme du nouveau-né par transmission materno-fœtale (rare mais sous-estimé en zone d’endémie) : fièvre, irritabilité, refus de téter, anémie, ictère, hépatosplénomégalie entre 10 et 30 jours de vie ; TDR ou goutte épaisse devant toute fièvre ou anémie du nouveau-né ; artésunate IV si grave, artéméther-luméfantrine adaptée au poids sinon ; traiter aussi un sepsis non exclu.',
    definition:
      'Infection palustre du nouveau-né acquise par transmission transplacentaire ou à l’accouchement, avec parasitémie dans les 7 premiers jours (ou plus tard en l’absence d’exposition aux moustiques).',
    physiopathologie:
      '## Mécanismes\n- Passage de parasites à travers le placenta (paludisme placentaire) ou lors de l’accouchement\n- Protection partielle par les anticorps maternels en zone d’endémie (formes souvent asymptomatiques ou retardées)\n- Plus fréquent si mère primigeste, non immune, sans traitement préventif intermittent, ou VIH',
    diagnostic:
      '## Clinique\n- Début entre **10 et 30 jours** de vie le plus souvent\n- **Fièvre**, irritabilité, refus de téter, vomissements\n- **Anémie**, **ictère**, **hépatosplénomégalie**\n- Formes graves : convulsions, détresse respiratoire, hypoglycémie\n\n## Examens\n- **TDR** ou **goutte épaisse** chez le nouveau-né (et la mère)\n- NFS, glycémie, bilirubine\n- Hémocultures et ponction lombaire si sepsis ou méningite possibles',
    examens: [
      ['confirmation', 'goutte-epaisse', 'Parasitémie.'],
      ['premiere_intention', 'tdr-paludisme', 'Antigène plasmodial.'],
      ['premiere_intention', 'nfs', 'Anémie, thrombopénie.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'bilirubine-neonatale', 'Ictère.'],
      ['etiologique', 'hemocultures', 'Sepsis néonatal.'],
      ['etiologique', 'lcr', 'Méningite néonatale.'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-neonatal', 'Infection bactérienne (traiter les deux si doute).'],
      ['meningite-neonatale', 'Fontanelle bombée, LCR anormal.'],
      ['syphilis-congenitale', 'Hépatosplénomégalie, lésions cutanées, RPR.'],
      ['ictere-neonatal', 'Autres causes d’ictère.'],
    ],
    etiologies:
      '## Facteurs\n- Paludisme placentaire, mère primigeste, absence de TPI et de moustiquaire, VIH maternel',
    principes: [
      [
        'Forme grave',
        'Urgence.',
        '- **Artésunate** IV ou IM 3 mg/kg à H0, H12, H24 puis toutes les 24 h jusqu’à prise orale possible\n- Glycémie (**glucose 10 %** 2 mL/kg si hypoglycémie), transfusion si anémie sévère\n- Antibiotiques (**ampicilline + gentamicine**) tant qu’un sepsis n’est pas exclu',
      ],
      [
        'Forme non compliquée',
        'Traiter par CTA.',
        '- **Artéméther-luméfantrine** adaptée au poids (nourrisson < 5 kg : même dose par kg que pour 5 kg, soit 1 comprimé dispersible 20/120 mg par prise selon l’OMS), 6 prises en 3 jours, avec le lait\n- Contrôle clinique et parasitologique',
      ],
      [
        'Prévention',
        'Protéger la mère et l’enfant.',
        '- **Traitement préventif intermittent** (sulfadoxine-pyriméthamine) et moustiquaire imprégnée pendant la grossesse ; dépistage et traitement du paludisme maternel',
      ],
    ],
    molecules: [
      ['artesunate', 'premiere', 'Forme grave'],
      ['artemether', 'premiere', 'Forme non compliquée (avec luméfantrine)'],
      ['lumefantrine', 'premiere', 'Forme non compliquée (avec artéméther)'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['ampicilline', 'adjuvant', 'Sepsis non exclu'],
      ['gentamicine', 'adjuvant', 'Sepsis non exclu'],
    ],
    complications: [
      {
        nom: 'Anémie sévère',
        fiche: 'transfusion-chez-l-enfant',
        description: 'Hémolyse.',
        traitement: '- Transfusion',
        clinique: '- Pâleur, tachycardie',
        paraclinique: '- Hb basse',
      },
      {
        nom: 'Hypoglycémie',
        fiche: 'hypoglycemie-neonatale',
        description: 'Paludisme, jeûne.',
        traitement: '- Glucose 10 %',
        clinique: '- Convulsions, léthargie',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Ictère sévère',
        fiche: 'ictere-neonatal',
        description: 'Hémolyse.',
        traitement: '- Photothérapie',
        clinique: '- Ictère intense',
        paraclinique: '- Bilirubine',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si diagnostic et traitement précoces ; mortalité élevée dans les formes graves méconnues',
    urgences: ['paludisme-grave-urgence', 'sepsis-neonatal-urgence'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Refus de téter', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Ictère', 'frequent'],
      ['Hépatomégalie', 'frequent'],
      ['Splénomégalie', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'WHO guidelines for malaria',
      'Directives nationales de prise en charge du paludisme',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- TDR devant toute fièvre du nouveau-né, première dose d’artésunate et d’antibiotiques, transfert',
        '- Tout nouveau-né fébrile',
      ],
      hgr: ['- Artésunate, transfusion, antibiotiques', ''],
      tert: ['- Néonatologie', ''],
    },
    alertes: {
      'paludisme-grave-urgence': 'Nouveau-né fébrile avec TDR positif',
      'sepsis-neonatal-urgence': 'Fièvre du nouveau-né : sepsis à traiter en parallèle',
    },
    formes: [
      {
        nom: 'Paludisme congénital non compliqué',
        type: 'commune',
        description: 'Fièvre isolée.',
        terrain: '- Nouveau-né de 10 à 30 jours',
        fonctionnels: '- Irritabilité',
        generaux: '- Fièvre',
        physiques: '- Splénomégalie',
        paraclinique: '- TDR positif',
        etiologies: '- P. falciparum',
        syndromes: [],
      },
      {
        nom: 'Paludisme congénital grave',
        type: 'gravite',
        description: 'Anémie, convulsions.',
        terrain: '',
        fonctionnels: '- Refus de téter',
        generaux: '- Fièvre',
        physiques: '- Pâleur, ictère, hépatosplénomégalie',
        paraclinique: '- Anémie sévère, hypoglycémie',
        etiologies: '',
        syndromes: ['syndrome-anemique'],
      },
    ],
  },
];
