'use strict';

/**
 * Lot 8 (rhumatologie et médecine interne générale) — polyarthrite rhumatoïde, arthrose,
 * spondylodiscite tuberculeuse (mal de Pott), envenimations par morsure de serpent.
 * Rédigé par IA (EULAR, ACR, OMS, MSF) : à valider.
 */

const RHUMATO = { departement: 'medecine-interne', specialite: 'Rhumatologie' };
const MIG = { departement: 'medecine-interne', specialite: 'Médecine interne générale' };

module.exports = [
  // =================================================================== PR
  {
    ...RHUMATO,
    slug: 'polyarthrite-rhumatoide',
    nom: 'Polyarthrite rhumatoïde',
    resume:
      'Rhumatisme inflammatoire chronique destructeur : polyarthrite bilatérale et symétrique des mains, raideur matinale ; anti-CCP, radiographies ; méthotrexate dès le diagnostic.',
    definition:
      'Maladie auto-immune caractérisée par une synovite chronique des petites articulations, bilatérale et symétrique, évoluant vers la destruction articulaire en l’absence de traitement de fond.',
    physiopathologie:
      '## Mécanismes\n- Terrain génétique (HLA-DR4) et facteurs environnementaux (tabac)\n- Citrullination de protéines, anticorps anti-CCP\n- Synovite (pannus), cytokines (TNF-α, IL-6), érosions osseuses et cartilagineuses',
    diagnostic:
      '## Clinique\n- Polyarthrite **bilatérale et symétrique** : poignets, métacarpo-phalangiennes, interphalangiennes proximales, avant-pieds\n- **Raideur matinale** > 30 min, réveils nocturnes\n- Évolution : déformations (coup de vent cubital, doigts en boutonnière ou en col de cygne)\n- Manifestations extra-articulaires : nodules, sécheresse, atteinte pulmonaire, vascularite\n\n## Critères ACR/EULAR 2010\n- Nombre d’articulations, sérologie (FR, anti-CCP), CRP/VS, durée > 6 semaines (score ≥ 6/10)',
    examens: [
      ['confirmation', 'facteur-rhumatoide-anti-ccp', 'Anti-CCP très spécifiques ; FR moins spécifique.'],
      ['premiere_intention', 'crp', 'Inflammation, suivi de l’activité.'],
      ['premiere_intention', 'nfs', 'Anémie inflammatoire ; avant le méthotrexate.'],
      ['premiere_intention', 'radiographie-osseuse', 'Mains et pieds : érosions, pincement.'],
      ['pretherapeutique', 'bilan-hepatique', 'Avant et sous méthotrexate.'],
      ['pretherapeutique', 'creatinine', 'Avant le méthotrexate.'],
      ['pretherapeutique', 'marqueurs-vhb', 'Avant le traitement de fond.'],
      ['pretherapeutique', 'tdr-vih', 'Avant le traitement de fond.'],
      ['pretherapeutique', 'radiographie-thoracique', 'Tuberculose, atteinte pulmonaire.'],
      ['etiologique', 'ponction-articulaire', 'Liquide inflammatoire, élimine goutte et arthrite septique.'],
    ],
    scores: [],
    differentiels: [
      ['Lupus et autres connectivites', 'Atteinte cutanée, rénale, anticorps antinucléaires.'],
      ['Arthrites virales (chikungunya, VIH, hépatites)', 'Contexte, évolution limitée.'],
      ['goutte', 'Monoarthrite aiguë, cristaux.'],
      ['arthrose', 'Interphalangiennes distales, douleur mécanique, CRP normale.'],
      ['Spondyloarthrites', 'Atteinte axiale, asymétrique, enthésites.'],
    ],
    etiologies:
      '## Facteurs\n- Femme de 40 à 60 ans (3 femmes pour 1 homme)\n- Génétique (HLA-DR4), tabac, parodontite',
    principes: [
      [
        'Traitement de fond précoce',
        'Obtenir la rémission et prévenir les destructions.',
        '- **Méthotrexate** 10 à 15 mg/semaine en une prise, augmenté jusqu’à 20–25 mg/semaine\n- **Acide folique** 5 mg/semaine (à distance du méthotrexate)\n- Contre-indication ou intolérance : **sulfasalazine**, léflunomide ; associations avec **hydroxychloroquine**\n- Biothérapies (anti-TNF) en centre spécialisé après dépistage de la tuberculose',
      ],
      [
        'Traitements symptomatiques',
        'Soulager en attendant l’effet du traitement de fond.',
        '- **Prednisolone** à faible dose (≤ 10 mg/j) sur une durée courte\n- AINS (**ibuprofène**, **diclofénac**) avec protection gastrique, paracétamol',
      ],
      [
        'Surveillance',
        'Sécurité du méthotrexate.',
        '- NFS, transaminases, créatinine toutes les 4 à 6 semaines puis tous les 3 mois\n- Contraception efficace (méthotrexate tératogène)\n- Évaluer l’activité (nombre d’articulations, CRP) tous les 1 à 3 mois',
      ],
      [
        'Mesures associées',
        'Préserver la fonction.',
        '- Arrêt du tabac, kinésithérapie, ergothérapie, orthèses\n- Vaccinations, prévention cardiovasculaire et de l’ostéoporose',
      ],
    ],
    molecules: [
      ['methotrexate', 'premiere', 'Traitement de fond de référence'],
      ['acide-folique', 'adjuvant', 'Prévention de la toxicité du méthotrexate'],
      ['sulfasalazine', 'alternative', 'Contre-indication au méthotrexate, association'],
      ['hydroxychloroquine', 'alternative', 'Formes légères, association'],
      ['prednisolone', 'adjuvant', 'Faible dose, courte durée'],
      ['ibuprofene', 'adjuvant', 'Symptômes'],
      ['diclofenac', 'adjuvant', 'Symptômes'],
      ['omeprazole', 'adjuvant', 'Protection gastrique sous AINS'],
    ],
    complications: [
      {
        nom: 'Destructions et handicap',
        description: 'Absence de traitement de fond.',
        traitement: '- Traitement de fond, chirurgie',
        clinique: '- Déformations',
        paraclinique: '- Radiographies',
      },
      {
        nom: 'Infections et tuberculose',
        fiche: 'tuberculose-pulmonaire',
        description: 'Corticoïdes, immunosuppresseurs.',
        traitement: '- Dépistage, traitement',
        clinique: '- Fièvre',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Toxicité du méthotrexate',
        description: 'Cytopénies, hépatite, pneumopathie.',
        traitement: '- Arrêt, acide folinique',
        clinique: '- Toux, aphtes',
        paraclinique: '- NFS, transaminases',
      },
      {
        nom: 'Atteinte cervicale (C1-C2)',
        description: 'Instabilité, risque neurologique.',
        traitement: '- Avis spécialisé',
        clinique: '- Cervicalgies, signes neurologiques',
        paraclinique: '- Radiographie dynamique',
      },
    ],
    evolution:
      '## Pronostic\n- Rémission possible avec un traitement précoce ; surmortalité cardiovasculaire et infectieuse',
    urgences: [],
    symptomes: [
      ['Arthralgies', 'tres_frequent'],
      ['Gonflement articulaire', 'tres_frequent'],
      ['Raideur matinale', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Nodules sous-cutanés', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'EULAR — recommandations de pratique clinique',
      'ACR — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Repérage d’une polyarthrite, antalgiques, orientation', '- Toute polyarthrite > 6 semaines'],
      hgr: ['- Bilan, méthotrexate, surveillance', '- Échec du méthotrexate'],
      tert: ['- Rhumatologie, biothérapies', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Polyarthrite rhumatoïde débutante',
        type: 'commune',
        description: 'Polyarthrite distale symétrique.',
        terrain: '- Femme de 40 à 60 ans',
        fonctionnels: '- Douleurs inflammatoires, raideur matinale',
        generaux: '- Asthénie',
        physiques: '- Synovites des poignets et métacarpo-phalangiennes',
        paraclinique: '- Anti-CCP positifs, CRP élevée',
        etiologies: '- Auto-immunité',
        syndromes: [],
        examens: [['facteur-rhumatoide-anti-ccp', 'Diagnostic']],
      },
      {
        nom: 'Polyarthrite rhumatoïde évoluée',
        type: 'evolutive',
        description: 'Déformations et atteintes extra-articulaires.',
        terrain: '- Maladie non traitée',
        fonctionnels: '- Handicap',
        generaux: '- Amaigrissement',
        physiques: '- Coup de vent cubital, nodules rhumatoïdes',
        paraclinique: '- Érosions radiologiques',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Arthrose
  {
    ...RHUMATO,
    slug: 'arthrose',
    nom: 'Arthrose',
    resume:
      'Maladie dégénérative du cartilage : douleur mécanique du genou, de la hanche, des mains ou du rachis ; radiographies ; exercice, perte de poids, paracétamol et AINS courts, infiltrations, prothèse.',
    definition:
      'Atteinte de l’articulation entière (cartilage, os sous-chondral, synoviale) caractérisée par la dégradation du cartilage et des réactions osseuses (ostéophytes), responsable de douleurs mécaniques et de gêne fonctionnelle.',
    physiopathologie:
      '## Mécanismes\n- Déséquilibre entre contraintes mécaniques et capacité de réparation du cartilage\n- Facteurs : âge, surcharge pondérale, traumatismes, malformations, métiers de force\n- Poussées congestives par inflammation synoviale',
    diagnostic:
      '## Clinique\n- **Douleur mécanique** : aggravée par l’effort, calmée par le repos, dérouillage matinal bref (< 30 min)\n- Genou (gonarthrose), hanche (coxarthrose), mains (Heberden, Bouchard), rachis\n- Craquements, épanchement, limitation, déformations\n\n## Radiographie\n- Pincement articulaire localisé, ostéophytes, condensation sous-chondrale, géodes\n- Biologie normale (pas de syndrome inflammatoire)',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Pincement, ostéophytes, condensation.'],
      ['premiere_intention', 'crp', 'Normale (élimine une arthrite inflammatoire).'],
      [
        'etiologique',
        'ponction-articulaire',
        'Épanchement : liquide mécanique, élimine goutte ou infection.',
      ],
      ['etiologique', 'uricemie', 'Goutte associée.'],
      ['pretherapeutique', 'creatinine', 'Avant AINS.'],
    ],
    scores: ['imc'],
    differentiels: [
      ['polyarthrite-rhumatoide', 'Douleurs inflammatoires, raideur prolongée, CRP élevée.'],
      ['goutte', 'Crises aiguës, cristaux.'],
      ['Ostéonécrose de la tête fémorale', 'Drépanocytaire, corticoïdes : IRM.'],
      ['Arthrite septique', 'Fièvre, liquide purulent.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Âge, sexe féminin, **obésité**\n- Traumatismes, ménisectomie, malformations (genu varum)\n- Travaux de force, portage de charges lourdes\n- Ostéonécrose (drépanocytose), séquelles d’arthrite',
    principes: [
      [
        'Mesures non médicamenteuses',
        'Base du traitement.',
        '- **Perte de poids**, exercice physique adapté et renforcement musculaire (quadriceps)\n- Canne du côté opposé, chaussures adaptées\n- Kinésithérapie, éducation',
      ],
      [
        'Antalgiques',
        'Soulager.',
        '- **Paracétamol** (efficacité modeste), AINS topiques (**diclofénac** gel) pour le genou et la main\n- AINS oraux (**ibuprofène**, **kétoprofène**) en cures courtes pendant les poussées, avec IPP si risque\n- Tramadol en cas d’échec\n- Infiltration de corticoïde (**bétaméthasone** ou triamcinolone) lors des poussées congestives\n- Chondroïtine et glucosamine : bénéfice faible',
      ],
      [
        'Chirurgie',
        'Restaurer la fonction.',
        '- Ostéotomie (sujet jeune), **prothèse** totale de hanche ou de genou si douleur et handicap malgré le traitement médical',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Antalgique'],
      ['diclofenac', 'premiere', 'Gel ou cure courte orale'],
      ['ibuprofene', 'alternative', 'Cure courte'],
      ['ketoprofene', 'alternative', 'Cure courte'],
      ['tramadol', 'deuxieme', 'Échec des autres antalgiques'],
      ['omeprazole', 'adjuvant', 'Protection gastrique sous AINS'],
      ['chondroitine-sulfate', 'adjuvant', 'Effet symptomatique modeste'],
      ['glucosamine', 'adjuvant', 'Effet symptomatique modeste'],
    ],
    complications: [
      {
        nom: 'Handicap fonctionnel',
        description: 'Arthrose évoluée de la hanche ou du genou.',
        traitement: '- Prothèse',
        clinique: '- Périmètre de marche réduit',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Complications des AINS',
        fiche: 'ulcere-gastroduodenal',
        description: 'Ulcère, insuffisance rénale.',
        traitement: '- Arrêt, IPP',
        clinique: '- Douleur épigastrique, méléna',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Évolution lente par poussées ; la perte de poids et l’exercice améliorent les symptômes',
    urgences: [],
    symptomes: [
      ['Arthralgies', 'tres_frequent'],
      ['Gonflement articulaire', 'occasionnel'],
      ['Douleur rachidienne', 'frequent'],
      ['Raideur matinale', 'occasionnel'],
    ],
    sources: [
      'EULAR — recommandations de pratique clinique',
      'ACR — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Conseils (poids, exercice), paracétamol, AINS courts',
        '- Doute diagnostique, handicap important',
      ],
      hgr: ['- Radiographies, infiltrations, kinésithérapie', '- Indication de prothèse'],
      tert: ['- Chirurgie orthopédique (prothèse)', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Gonarthrose',
        type: 'commune',
        description: 'Arthrose du genou.',
        terrain: '- Femme de plus de 50 ans, obésité',
        fonctionnels: '- Douleur mécanique du genou, difficulté aux escaliers',
        generaux: '',
        physiques: '- Craquements, épanchement, genu varum',
        paraclinique: '- Pincement fémoro-tibial interne',
        etiologies: '- Surcharge, âge',
        syndromes: [],
        examens: [['radiographie-osseuse', 'Confirmation']],
      },
      {
        nom: 'Coxarthrose',
        type: 'topographique',
        description: 'Arthrose de la hanche.',
        terrain: '- Sujet âgé, dysplasie, ostéonécrose drépanocytaire',
        fonctionnels: '- Douleur de l’aine, boiterie',
        generaux: '',
        physiques: '- Limitation de la rotation interne',
        paraclinique: '- Pincement coxo-fémoral',
        etiologies: '- Dysplasie, ostéonécrose',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Mal de Pott
  {
    ...RHUMATO,
    slug: 'mal-de-pott',
    nom: 'Spondylodiscite tuberculeuse (mal de Pott)',
    resume:
      'Tuberculose du rachis (dorsal et lombaire) : douleur rachidienne chronique, gibbosité, abcès froids, risque de paraplégie ; imagerie, biopsie si possible ; antituberculeux 12 mois.',
    definition:
      'Infection tuberculeuse d’un ou plusieurs corps vertébraux et des disques intervertébraux, localisation ostéoarticulaire la plus fréquente de la tuberculose.',
    physiopathologie:
      '## Mécanismes\n- Dissémination hématogène de *M. tuberculosis*\n- Atteinte de l’angle antérieur du corps vertébral, puis du disque et de la vertèbre voisine\n- Destruction, tassement cunéiforme : cyphose (gibbosité)\n- Abcès paravertébraux (abcès du psoas), épiduraux : compression médullaire',
    diagnostic:
      '## Clinique\n- **Douleur rachidienne** chronique, d’horaire inflammatoire, raideur\n- Altération de l’état général, fièvre vespérale, sueurs\n- **Gibbosité**, abcès froids (psoas, région lombaire)\n- **Signes neurologiques** : paraparésie, troubles sphinctériens (urgence)\n\n## Paraclinique\n- Radiographie : pincement discal, érosions des plateaux, tassement\n- **IRM** (référence) ou scanner : abcès, compression\n- Preuve : ponction-biopsie (GeneXpert, histologie), recherche de tuberculose pulmonaire associée',
    examens: [
      [
        'premiere_intention',
        'radiographie-osseuse',
        'Rachis : pincement discal, érosions, tassement cunéiforme.',
      ],
      ['confirmation', 'irm-rachidienne', 'Spondylodiscite, abcès, compression médullaire.'],
      ['confirmation', 'biopsie-histologie', 'Biopsie disco-vertébrale : granulome, GeneXpert, culture.'],
      ['etiologique', 'xpert-mtb-rif', 'Prélèvement vertébral, abcès ou crachats.'],
      ['premiere_intention', 'radiographie-thoracique', 'Tuberculose pulmonaire associée.'],
      ['premiere_intention', 'tdr-vih', 'Systématique.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['pretherapeutique', 'bilan-hepatique', 'Avant antituberculeux.'],
    ],
    scores: [],
    differentiels: [
      ['Spondylodiscite à pyogènes', 'Début aigu, fièvre élevée, hémocultures positives (staphylocoque).'],
      ['Métastases vertébrales et myélome', 'Disque respecté, cancer connu.'],
      ['Brucellose', 'Contact animal, sérologie.'],
      ['arthrose', 'Douleur mécanique, pas de signe général.'],
    ],
    etiologies:
      '## Cause\n- *Mycobacterium tuberculosis*\n\n## Terrain\n- Adulte jeune, PVVIH, contact tuberculeux, malnutrition',
    principes: [
      [
        'Traitement antituberculeux prolongé',
        'Guérir l’infection.',
        '- **2RHZE / 10RH** : rifampicine, isoniazide, pyrazinamide, éthambutol 2 mois puis rifampicine + isoniazide 10 mois (12 mois au total)\n- Pyridoxine avec l’isoniazide\n- PVVIH : ARV dans les 2 à 8 semaines',
      ],
      [
        'Immobilisation et rééducation',
        'Prévenir les déformations.',
        '- Repos, corset selon le niveau et la stabilité\n- Antalgiques, kinésithérapie, prévention des escarres',
      ],
      [
        'Chirurgie',
        'Protéger la moelle.',
        '- Décompression en urgence si déficit neurologique d’aggravation rapide, instabilité, abcès volumineux\n- Drainage des abcès froids',
      ],
    ],
    molecules: [
      ['rifampicine', 'premiere', '12 mois'],
      ['isoniazide', 'premiere', '12 mois'],
      ['pyrazinamide', 'premiere', '2 premiers mois'],
      ['ethambutol', 'premiere', '2 premiers mois'],
      ['paracetamol', 'adjuvant', 'Douleur'],
      ['tramadol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Compression médullaire et paraplégie',
        description: 'Abcès épidural, tassement.',
        traitement: '- Chirurgie de décompression urgente',
        clinique: '- Déficit des membres inférieurs, troubles sphinctériens',
        paraclinique: '- IRM',
      },
      {
        nom: 'Gibbosité et déformation',
        description: 'Destruction vertébrale.',
        traitement: '- Corset, chirurgie',
        clinique: '- Cyphose',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Abcès froids',
        description: 'Psoas, paravertébraux.',
        traitement: '- Drainage',
        clinique: '- Tuméfaction fluctuante',
        paraclinique: '- Échographie, scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison sous traitement complet ; séquelles neurologiques si la compression est traitée tardivement',
    urgences: [],
    symptomes: [
      ['Douleur rachidienne', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Sueurs nocturnes', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Déficit moteur', 'occasionnel'],
      ['Asthénie', 'frequent'],
    ],
    sources: [
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
      'Guide technique de prise en charge de la tuberculose',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Repérage (douleur rachidienne chronique, gibbosité), test VIH, crachats, transfert',
        '- Tout signe neurologique',
      ],
      hgr: [
        '- Radiographie, antituberculeux 12 mois, immobilisation',
        '- Déficit neurologique, besoin d’IRM ou de biopsie',
      ],
      tert: ['- IRM, biopsie, neurochirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Mal de Pott dorso-lombaire',
        type: 'commune',
        description: 'Douleur rachidienne avec signes généraux.',
        terrain: '- Adulte jeune, PVVIH',
        fonctionnels: '- Rachialgie inflammatoire, raideur',
        generaux: '- Fièvre vespérale, amaigrissement',
        physiques: '- Gibbosité, abcès froid',
        paraclinique: '- Spondylodiscite à l’IRM',
        etiologies: '- M. tuberculosis',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
        examens: [['irm-rachidienne', 'Confirmation']],
      },
      {
        nom: 'Mal de Pott avec compression médullaire',
        type: 'gravite',
        description: 'Paraplégie pottique.',
        terrain: '- Retard diagnostique',
        fonctionnels: '- Faiblesse des jambes, troubles urinaires',
        generaux: '',
        physiques: '- Paraparésie, niveau sensitif, signe de Babinski',
        paraclinique: '- Compression à l’IRM',
        etiologies: '',
        syndromes: ['syndrome-pyramidal'],
      },
    ],
  },

  // =================================================================== Envenimation
  {
    ...MIG,
    slug: 'envenimation-morsure-de-serpent',
    nom: 'Envenimations par morsure de serpent',
    resume:
      'Morsure de vipère (syndrome hémorragique, nécrose) ou d’élapidé (cobra, mamba : paralysie) : immobiliser, pas de garrot ni d’incision, test de coagulation sur tube sec, sérum antivenimeux si envenimation systémique.',
    definition:
      'Intoxication par le venin injecté lors d’une morsure de serpent ; en RDC : vipéridés (*Bitis*, *Echis*, *Atheris*) responsables de syndromes hémorragiques et nécrotiques, élapidés (*Naja*, *Dendroaspis*) responsables de paralysies.',
    physiopathologie:
      '## Mécanismes\n- **Vipéridés** : enzymes procoagulantes (consommation des facteurs, syndrome hémorragique), toxines cytotoxiques (œdème, nécrose), choc\n- **Élapidés** : neurotoxines bloquant la jonction neuromusculaire (ptosis, paralysie respiratoire) ; cobras cracheurs : nécrose, atteinte oculaire\n- 20 à 50 % des morsures sont « sèches » (sans envenimation)',
    diagnostic:
      '## Interrogatoire\n- Heure, circonstances, description du serpent (sans le rechercher)\n\n## Envenimation locale\n- Douleur, **œdème** extensif, phlyctènes, nécrose\n\n## Envenimation systémique\n- **Syndrome hémorragique** : saignement des points de morsure, gingivorragies, hématurie, hématémèse\n- **Test de coagulation sur tube sec (20 min)** : sang non coagulé = trouble de la coagulation\n- **Syndrome neurologique** : ptosis, troubles de la déglutition et de la parole, paralysie respiratoire\n- Choc, insuffisance rénale\n\n## Grade de gravité\n- 0 : morsure sèche ; 1 : œdème local ; 2 : œdème extensif et/ou troubles de la coagulation ; 3 : saignements, choc, signes neurologiques',
    examens: [
      ['confirmation', 'test-de-coagulation-au-lit', 'Test sur tube sec à 20 min : répété toutes les 6 h.'],
      ['premiere_intention', 'nfs', 'Plaquettes, Hb.'],
      ['premiere_intention', 'hemostase', 'TP, fibrinogène si disponibles.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie, myoglobinurie.'],
      ['gravite', 'oxymetrie-de-pouls', 'Atteinte respiratoire neurotoxique.'],
      ['pretherapeutique', 'groupage-rai', 'Saignement grave.'],
    ],
    scores: [],
    differentiels: [
      ['Morsure sèche', 'Pas de signe local ni systémique après 24 h de surveillance.'],
      ['Piqûre de scorpion ou d’arthropode', 'Douleur intense, pas de trouble de la coagulation.'],
      ['Réaction de panique', 'Malaise vagal, examen normal.'],
    ],
    etiologies:
      '## Circonstances\n- Agriculteurs, enfants, marche de nuit pieds nus, ramassage de bois\n- Saison des pluies',
    principes: [
      [
        'Premiers gestes',
        'Ralentir la diffusion sans aggraver.',
        '- Rassurer, **immobiliser le membre**, retirer bagues et bracelets\n- **Pas de garrot, pas d’incision, pas de succion, pas de pierre noire** ni de traitement traditionnel\n- Transport rapide vers une structure disposant du sérum',
      ],
      [
        'Sérum antivenimeux',
        'Neutraliser le venin.',
        '- Indications : test de coagulation anormal, saignements, signes neurologiques, choc, œdème extensif (au-delà du coude ou du genou)\n- **Sérum antivenimeux polyvalent** adapté à l’Afrique centrale, IV lent, sous surveillance\n- **Adrénaline** prête (anaphylaxie) ; renouveler selon le test de coagulation à 6 h et l’évolution neurologique',
      ],
      [
        'Traitement symptomatique',
        'Soutenir les fonctions vitales.',
        '- Envenimation neurotoxique : ventilation (ballon, intubation), **néostigmine** + **atropine**\n- Choc : remplissage ; saignements graves : transfusion de sang frais\n- Antalgiques (paracétamol, morphine ; **pas d’AINS ni d’aspirine**)\n- **Vaccination antitétanique**, soins locaux ; antibiotiques seulement si infection\n- Nécrose, syndrome des loges : avis chirurgical (fasciotomie rarement nécessaire)\n- Cobra cracheur : lavage oculaire abondant',
      ],
      [
        'Surveillance',
        'Repérer une envenimation retardée.',
        '- Au moins 24 h : œdème, test de coagulation, conscience, déglutition, respiration, diurèse',
      ],
    ],
    molecules: [
      ['serum-antivenimeux', 'premiere', 'Envenimation systémique'],
      ['adrenaline-epinephrine', 'adjuvant', 'Réaction anaphylactique au sérum'],
      ['neostigmine', 'adjuvant', 'Envenimation neurotoxique'],
      ['atropine', 'adjuvant', 'Associée à la néostigmine'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Douleur intense'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Prévention du tétanos'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Choc'],
    ],
    complications: [
      {
        nom: 'Syndrome hémorragique grave',
        description: 'Envenimation vipérine.',
        traitement: '- Sérum antivenimeux, transfusion',
        clinique: '- Saignements multiples',
        paraclinique: '- Test de coagulation',
      },
      {
        nom: 'Paralysie respiratoire',
        description: 'Envenimation par élapidé.',
        traitement: '- Ventilation, sérum, néostigmine',
        clinique: '- Ptosis, dyspnée',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Nécrose et amputation',
        description: 'Venin cytotoxique.',
        traitement: '- Soins chirurgicaux',
        clinique: '- Nécrose',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Choc, hémolyse, rhabdomyolyse.',
        traitement: '- Remplissage, dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Tétanos',
        fiche: 'tetanos',
        description: 'Plaie souillée.',
        traitement: '- Prévention',
        clinique: '- Trismus',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si le sérum est administré tôt ; mortalité et séquelles élevées en cas de retard ou de recours aux traitements traditionnels',
    urgences: [],
    symptomes: [
      ['Œdème d’un membre', 'tres_frequent'],
      ['Hémorragies', 'frequent'],
      ['Ptosis', 'occasionnel'],
      ['Dysphagie', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Hypotension', 'occasionnel'],
      ['Vomissements', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Médicaments essentiels — guide pratique d’utilisation',
    ],
    niveaux: {
      cs: [
        '- Premiers gestes, test de coagulation sur tube sec, antalgique, vaccin antitétanique, transfert',
        '- Toute morsure avec œdème, saignement ou signe neurologique',
      ],
      hgr: [
        '- Sérum antivenimeux, surveillance 24 h, transfusion',
        '- Paralysie respiratoire, insuffisance rénale',
      ],
      tert: ['- Réanimation, dialyse, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Envenimation vipérine',
        type: 'commune',
        description: 'Œdème et syndrome hémorragique.',
        terrain: '- Agriculteur, morsure au pied',
        fonctionnels: '- Douleur intense',
        generaux: '- Vomissements',
        physiques: '- Œdème extensif, saignements',
        paraclinique: '- Sang non coagulé à 20 min',
        etiologies: '- Bitis, Echis',
        syndromes: ['syndrome-hemorragique'],
        examens: [['test-de-coagulation-au-lit', 'Diagnostic']],
      },
      {
        nom: 'Envenimation cobraïque',
        type: 'etiologique',
        description: 'Syndrome neurologique.',
        terrain: '- Morsure de cobra ou de mamba',
        fonctionnels: '- Paresthésies, troubles de la déglutition',
        generaux: '',
        physiques: '- Ptosis, ophtalmoplégie, paralysie',
        paraclinique: '- Coagulation normale',
        etiologies: '- Naja, Dendroaspis',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },
];
