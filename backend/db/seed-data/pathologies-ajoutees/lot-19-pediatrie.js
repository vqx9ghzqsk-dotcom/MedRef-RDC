'use strict';

/**
 * Lot 19 (pédiatrie) — fiches pédiatriques demandées par l'utilisateur à la place des
 * renvois vers les fiches adultes : teigne du cuir chevelu, gale de l'enfant, impétigo,
 * malnutrition chronique (retard de croissance). Rédigé par IA (OMS, UNICEF, MSF) : à valider.
 */

const DERMPED = { departement: 'pediatrie', specialite: 'Dermatologie pédiatrique' };
const MAL = { departement: 'pediatrie', specialite: 'Malnutrition' };

module.exports = [
  // =================================================================== Teigne
  {
    ...DERMPED,
    slug: 'teigne-cuir-chevelu',
    nom: 'Teigne du cuir chevelu',
    resume:
      'Mycose du cuir chevelu de l’enfant d’âge scolaire : plaques d’alopécie squameuses, cheveux cassés ; traitement oral obligatoire (griséofulvine 6–8 semaines), shampoing antifongique, dépistage de la fratrie et des camarades.',
    definition:
      'Infection des cheveux et du cuir chevelu par des dermatophytes (*Trichophyton*, *Microsporum*), quasi exclusive de l’enfant avant la puberté, très fréquente en RDC.',
    physiopathologie:
      '## Mécanismes\n- Transmission interhumaine (peignes, rasoirs, coiffeurs, bonnets), animale (chats, chiens) ou tellurique\n- Envahissement de la tige pilaire : cheveux cassés\n- Disparition habituelle à la puberté (sébum fongistatique)',
    diagnostic:
      '## Formes\n- **Teigne tondante** : plaques arrondies d’alopécie, squameuses, cheveux cassés courts (grandes plaques : Microsporum ; petites plaques multiples : Trichophyton)\n- **Kérion** : placard inflammatoire, suppurant, douloureux (ne pas inciser)\n- **Favus** (rare) : godets jaunâtres, alopécie cicatricielle\n\n## Confirmation\n- Examen mycologique (direct et culture) si doute',
    examens: [['deuxieme_intention', 'examen-mycologique', 'Cheveux et squames : confirmation, espèce.']],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Pelade', 'Plaques lisses sans squames, cheveux en point d’exclamation.'],
      ['Dermite séborrhéique', 'Squames grasses diffuses sans alopécie.'],
      ['impetigo', 'Croûtes mélicériques.'],
      ['Trichotillomanie', 'Arrachage, cheveux de longueurs différentes.'],
    ],
    etiologies:
      '## Facteurs\n- Âge scolaire, promiscuité, partage de peignes et de bonnets, coiffeurs, contact animal',
    principes: [
      [
        'Traitement oral',
        'Guérir (le traitement local seul est insuffisant).',
        '- **Griséofulvine** 20–25 mg/kg/j (forme microcristalline) en 1 à 2 prises au cours d’un repas gras, **6 à 8 semaines** (jusqu’à guérison clinique)\n- Alternative : **terbinafine** 4 semaines (Trichophyton)\n- Kérion : même traitement, ± courte corticothérapie, pas d’incision',
      ],
      [
        'Traitement local et hygiène',
        'Réduire la contagion.',
        '- Shampoing antifongique (**kétoconazole**) 2 fois par semaine\n- Désinfection des peignes et bonnets, ne pas raser à blanc\n- Scolarité maintenue une fois le traitement débuté',
      ],
      [
        'Entourage',
        'Éviter les récidives.',
        '- Examen de la fratrie et des enfants de la classe, traitement des animaux',
      ],
    ],
    molecules: [
      ['griseofulvine', 'premiere', '6–8 semaines'],
      ['terbinafine', 'alternative', 'Trichophyton'],
      ['ketoconazole', 'adjuvant', 'Shampoing'],
    ],
    complications: [
      {
        nom: 'Kérion et alopécie cicatricielle',
        description: 'Forme inflammatoire.',
        traitement: '- Traitement oral précoce',
        clinique: '- Plaque suppurée',
        paraclinique: '',
      },
      {
        nom: 'Surinfection bactérienne',
        fiche: 'impetigo',
        description: 'Grattage.',
        traitement: '- Antiseptiques, antibiotiques',
        clinique: '- Croûtes, pus',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Guérison sous traitement oral complet ; repousse des cheveux',
    urgences: [],
    symptomes: [
      ['Prurit', 'frequent'],
      ['Éruption cutanée', 'tres_frequent'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Diagnostic clinique, griséofulvine, conseils, dépistage scolaire', '- Kérion étendu, échec'],
      hgr: ['- Examen mycologique', ''],
      tert: ['- Dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Teigne tondante',
        type: 'commune',
        description: 'Plaques squameuses.',
        terrain: '- Enfant de 3 à 12 ans',
        fonctionnels: '- Prurit modéré',
        generaux: '',
        physiques: '- Plaques d’alopécie, cheveux cassés',
        paraclinique: '- Examen mycologique',
        etiologies: '- Trichophyton, Microsporum',
        syndromes: [],
        examens: [['examen-mycologique', 'Confirmation']],
      },
      {
        nom: 'Kérion',
        type: 'gravite',
        description: 'Teigne inflammatoire.',
        terrain: '- Enfant',
        fonctionnels: '- Douleur',
        generaux: '- Fébricule',
        physiques: '- Placard suppurant, adénopathie',
        paraclinique: '',
        etiologies: '- Dermatophytes zoophiles',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Gale de l'enfant
  {
    ...DERMPED,
    slug: 'gale-enfant',
    nom: 'Gale de l’enfant',
    resume:
      'Chez le nourrisson et le jeune enfant, la gale atteint aussi le visage, le cuir chevelu, les paumes et les plantes (vésicules, nodules) ; perméthrine 5 % (dès 2 mois) ou benzoate de benzyle dilué, ivermectine au-delà de 15 kg ; traiter toute la famille.',
    definition:
      'Infestation cutanée par *Sarcoptes scabiei* chez l’enfant, avec des particularités chez le nourrisson (topographie, nodules, risque de surinfection et de glomérulonéphrite).',
    physiopathologie:
      '## Particularités\n- Contact rapproché avec la mère et la fratrie\n- Nourrisson : atteinte du visage, du cuir chevelu, des paumes et des plantes\n- Impétiginisation fréquente : streptocoque, glomérulonéphrite post-streptococcique',
    diagnostic:
      '## Clinique\n- Prurit nocturne (irritabilité, troubles du sommeil chez le nourrisson), cas familiaux\n- Nourrisson : **vésicules palmo-plantaires**, **nodules** des aisselles et du tronc, lésions du visage\n- Enfant : sillons interdigitaux, poignets, ceinture, fesses\n- Surinfection : croûtes, pustules',
    examens: [
      ['gravite', 'bandelette-urinaire', 'Hématurie et protéinurie si impétiginisation (glomérulonéphrite).'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Acropustulose infantile', 'Vésiculo-pustules palmo-plantaires sans cas familiaux.'],
      ['Eczéma atopique', 'Plaques des plis et du visage, terrain atopique.'],
      ['Prurigo strophulus', 'Piqûres d’insectes.'],
      ['varicelle', 'Vésicules d’âges différents avec fièvre.'],
    ],
    etiologies: '## Facteurs\n- Promiscuité, collectivités, manque d’eau, gale dans la famille',
    principes: [
      [
        'Traitement de l’enfant',
        'Tuer le parasite.',
        '- **Perméthrine 5 %** crème dès 2 mois, sur tout le corps y compris le cuir chevelu et le visage (sauf yeux et bouche) chez le nourrisson, 8–12 h, renouveler à J7\n- **Benzoate de benzyle** dilué (1 volume pour 3 volumes d’eau avant 2 ans, 1 pour 1 de 2 à 12 ans), 12 h chez le nourrisson\n- **Ivermectine** 200 µg/kg à J1 et J7 au-delà de 15 kg\n- Mains du nourrisson couvertes (moufles) pour éviter l’ingestion',
      ],
      [
        'Famille et environnement',
        'Éviter la réinfestation.',
        '- Traitement simultané de tous les contacts\n- Linge lavé à 60 °C ou isolé 72 h',
      ],
      [
        'Symptômes et complications',
        'Soulager et prévenir.',
        '- Antihistaminique (> 2 ans) ; prurit persistant 2 à 4 semaines\n- Impétiginisation : soins antiseptiques, **cloxacilline** si étendue\n- Bandelette urinaire 2 à 3 semaines après une surinfection',
      ],
    ],
    molecules: [
      ['permethrine', 'premiere', 'Dès 2 mois'],
      ['benzoate-de-benzyle', 'alternative', 'Dilué selon l’âge'],
      ['ivermectine', 'alternative', 'Au-delà de 15 kg'],
      ['cloxacilline', 'adjuvant', 'Impétiginisation'],
      ['cetirizine', 'adjuvant', 'Prurit (> 2 ans)'],
    ],
    complications: [
      {
        nom: 'Impétiginisation',
        fiche: 'impetigo',
        description: 'Surinfection.',
        traitement: '- Antiseptiques, antibiotiques',
        clinique: '- Croûtes, pus',
        paraclinique: '',
      },
      {
        nom: 'Glomérulonéphrite post-streptococcique',
        fiche: 'glomerulonephrite-aigue-post-streptococcique',
        description: 'Après impétiginisation.',
        traitement: '- Prise en charge néphrologique',
        clinique: '- Œdèmes, urines foncées',
        paraclinique: '- Bandelette',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison si toute la famille est traitée ; nodules persistant quelques semaines',
    urgences: [],
    symptomes: [
      ['Prurit', 'tres_frequent'],
      ['Éruption cutanée', 'tres_frequent'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Traitement de l’enfant et de la famille, conseils',
        '- Nourrisson < 2 mois, gale profuse, glomérulonéphrite',
      ],
      hgr: ['- Formes compliquées', ''],
      tert: ['- Dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Gale du nourrisson',
        type: 'terrain',
        description: 'Topographie particulière.',
        terrain: '- Nourrisson, cas familiaux',
        fonctionnels: '- Irritabilité, troubles du sommeil',
        generaux: '',
        physiques: '- Vésicules palmo-plantaires, nodules axillaires, atteinte du visage',
        paraclinique: '',
        etiologies: '- Sarcoptes scabiei',
        syndromes: [],
      },
      {
        nom: 'Gale de l’enfant d’âge scolaire',
        type: 'commune',
        description: 'Proche de l’adulte.',
        terrain: '- Collectivité',
        fonctionnels: '- Prurit nocturne',
        generaux: '',
        physiques: '- Sillons interdigitaux, lésions de grattage',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Impétigo
  {
    ...DERMPED,
    slug: 'impetigo',
    nom: 'Impétigo',
    resume:
      'Infection cutanée superficielle très contagieuse de l’enfant (streptocoque, staphylocoque) : croûtes jaunâtres péri-orificielles ; soins antiseptiques, acide fusidique si peu étendu, cloxacilline orale si étendu ; surveiller la bandelette urinaire (glomérulonéphrite).',
    definition:
      'Infection bactérienne de l’épiderme, primitive ou compliquant une dermatose prurigineuse (impétiginisation), due à *Staphylococcus aureus* et/ou *Streptococcus pyogenes*.',
    physiopathologie:
      '## Mécanismes\n- Auto- et hétéro-inoculation par le grattage, très contagieux en collectivité\n- Impétigo bulleux : toxines exfoliantes staphylococciques\n- Ecthyma : forme creusante (jambes)',
    diagnostic:
      '## Clinique\n- Vésicule ou bulle fragile, puis **croûtes jaunâtres mélicériques**, autour du nez et de la bouche, sur les membres\n- Impétigo bulleux du nourrisson (bulles flasques, siège, plis)\n- Rechercher une dermatose sous-jacente (gale, eczéma, varicelle, poux)\n\n## Signes de gravité\n- Lésions nombreuses (> 6) ou étendues (> 2 % de la surface), fièvre, cellulite, nouveau-né',
    examens: [
      ['gravite', 'bandelette-urinaire', 'Glomérulonéphrite 2 à 3 semaines après.'],
      ['gravite', 'hemocultures', 'Fièvre, nouveau-né.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Herpès', 'Vésicules groupées, récidives.'],
      ['teigne-cuir-chevelu', 'Plaques squameuses.'],
      ['Épidermolyse staphylococcique', 'Nourrisson fébrile, décollement étendu.'],
    ],
    etiologies: '## Facteurs\n- Chaleur, humidité, promiscuité, gale, piqûres, malnutrition',
    principes: [
      [
        'Soins locaux',
        'Base du traitement.',
        '- Lavage à l’eau et au savon 2 fois par jour, décroûtage doux, antiseptique (**chlorhexidine**)\n- Ongles courts, linge individuel, éviction scolaire jusqu’à 48 h d’antibiotique',
      ],
      [
        'Antibiotique',
        'Selon l’étendue.',
        '- Peu étendu : **acide fusidique** crème 2 à 3 fois par jour 5 jours\n- Étendu, nombreux, ecthyma ou fièvre : **cloxacilline** 50 mg/kg/j (ou amoxicilline-acide clavulanique) 7 jours ; allergie : azithromycine\n- Nouveau-né : hospitalisation',
      ],
      [
        'Cause et suivi',
        'Éviter les récidives.',
        '- Traitement de la gale ou de la pédiculose\n- Bandelette urinaire à 2–3 semaines',
      ],
    ],
    molecules: [
      ['acide-fusidique', 'premiere', 'Formes peu étendues'],
      ['cloxacilline', 'premiere', 'Formes étendues'],
      ['flucloxacilline', 'alternative', 'Formes étendues'],
      ['azithromycine', 'alternative', 'Allergie'],
      ['chlorhexidine-gluconate', 'premiere', 'Antiseptique'],
    ],
    complications: [
      {
        nom: 'Glomérulonéphrite post-streptococcique',
        fiche: 'glomerulonephrite-aigue-post-streptococcique',
        description: 'Impétigo streptococcique.',
        traitement: '- Prise en charge néphrologique',
        clinique: '- Œdèmes, urines coca, HTA',
        paraclinique: '- Hématurie',
      },
      {
        nom: 'Cellulite et sepsis',
        fiche: 'sepsis-enfant',
        description: 'Diffusion.',
        traitement: '- Antibiotiques IV',
        clinique: '- Fièvre, placard',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution: '## Pronostic\n- Guérison en une semaine sans cicatrice',
    urgences: [],
    symptomes: [
      ['Éruption cutanée', 'tres_frequent'],
      ['Prurit', 'frequent'],
      ['Fièvre', 'rare'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Soins, acide fusidique, cloxacilline, traitement de la gale', '- Nouveau-né, fièvre, œdèmes'],
      hgr: ['- Formes compliquées', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Impétigo croûteux',
        type: 'commune',
        description: 'Croûtes mélicériques.',
        terrain: '- Enfant de 2 à 6 ans',
        fonctionnels: '- Prurit',
        generaux: '',
        physiques: '- Croûtes jaunâtres péri-orificielles',
        paraclinique: '',
        etiologies: '- S. aureus, S. pyogenes',
        syndromes: [],
      },
      {
        nom: 'Impétigo bulleux du nourrisson',
        type: 'terrain',
        description: 'Bulles flasques.',
        terrain: '- Nourrisson',
        fonctionnels: '',
        generaux: '- Fébricule',
        physiques: '- Bulles du siège et des plis',
        paraclinique: '',
        etiologies: '- S. aureus',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Malnutrition chronique
  {
    ...MAL,
    slug: 'malnutrition-chronique',
    nom: 'Malnutrition chronique (retard de croissance)',
    resume:
      'Taille pour l’âge < −2 z : touche environ 4 enfants sur 10 en RDC ; conséquence durable de carences pendant les 1 000 premiers jours ; prévention et prise en charge nutritionnelle (allaitement, alimentation de complément, micronutriments, hygiène, santé maternelle).',
    definition:
      'Retard de croissance en taille (« stunting ») défini par une taille pour l’âge inférieure à −2 z-scores (sévère < −3), traduisant une sous-alimentation chronique et des infections répétées ; distinct de l’émaciation (malnutrition aiguë).',
    physiopathologie:
      '## Mécanismes\n- Apports insuffisants en énergie, protéines et micronutriments (zinc, fer, iode, vitamine A) de la conception à 2 ans\n- Infections répétées, entéropathie environnementale (défaut d’hygiène)\n- Malnutrition maternelle (petite taille, faible poids de naissance)\n- Conséquences : déficit cognitif, faible réussite scolaire, risque de maladies chroniques à l’âge adulte',
    diagnostic:
      '## Évaluation\n- Mesure précise de la **taille** (couché avant 2 ans) et calcul du z-score taille/âge (courbes OMS)\n- Rechercher une émaciation associée (poids/taille, PB), des œdèmes\n- Histoire alimentaire, infections, développement\n- Éliminer les causes médicales si retard isolé et sévère (hypothyroïdie, maladies chroniques)',
    examens: [
      ['confirmation', 'anthropometrie', 'Taille pour l’âge < −2 z.'],
      ['etiologique', 'nfs', 'Anémie associée.'],
      ['etiologique', 'examen-parasitologique-selles', 'Parasitoses.'],
      ['etiologique', 'tdr-vih', 'Infection chronique.'],
      ['etiologique', 'tsh', 'Hypothyroïdie (carence iodée).'],
    ],
    scores: [],
    differentiels: [
      ['retard-staturo-ponderal', 'Démarche diagnostique générale des cassures de courbe.'],
      ['malnutrition-aigue-moderee', 'Émaciation (poids/taille).'],
      ['Petite taille familiale', 'Parents petits, croissance régulière.'],
    ],
    etiologies:
      '## Déterminants\n- Alimentation pauvre en aliments d’origine animale, faible diversité\n- Allaitement non exclusif, diversification inadaptée\n- Eau, assainissement et hygiène insuffisants, diarrhées, paludisme\n- Pauvreté, grossesses précoces et rapprochées, faible niveau d’instruction maternelle',
    principes: [
      [
        'Alimentation',
        'Favoriser la croissance.',
        '- Allaitement exclusif 6 mois puis poursuite jusqu’à 2 ans\n- Alimentation de complément enrichie et diversifiée (aliments d’origine animale chaque jour si possible)\n- Suppléments nutritionnels à base de lipides (petites quantités) selon les programmes',
      ],
      [
        'Micronutriments et santé',
        'Corriger les carences.',
        '- **Vitamine A** tous les 6 mois, **zinc** pendant les diarrhées, fer si anémie, sel iodé\n- Déparasitage (**albendazole**) dès 12 mois, prévention du paludisme, vaccinations',
      ],
      [
        'Approche multisectorielle',
        'Agir sur les causes.',
        '- Nutrition et santé de la femme enceinte et de l’adolescente, espacement des naissances\n- Eau potable, latrines, lavage des mains\n- Suivi de la croissance (consultation préscolaire), stimulation précoce',
      ],
    ],
    molecules: [
      ['vitamine-a-retinol', 'premiere', 'Supplémentation'],
      ['zinc', 'adjuvant', 'Diarrhées'],
      ['albendazole', 'premiere', 'Déparasitage'],
      ['multivitamines', 'adjuvant', 'Micronutriments'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Retard de développement cognitif',
        description: 'Carences précoces.',
        traitement: '- Stimulation, nutrition',
        clinique: '- Retard scolaire',
        paraclinique: '',
      },
      {
        nom: 'Malnutrition aiguë',
        fiche: 'malnutrition-aigue-moderee',
        description: 'Décompensation lors d’une maladie.',
        traitement: '- Supplémentation',
        clinique: '- Émaciation',
        paraclinique: '- PB',
      },
      {
        nom: 'Maladies chroniques à l’âge adulte',
        description: 'Obésité, diabète, HTA.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Largement irréversible après 2 ans ; d’où l’importance des 1 000 premiers jours',
    urgences: [],
    symptomes: [
      ['Retard de croissance', 'tres_frequent'],
      ['Retard de développement psychomoteur', 'occasionnel'],
      ['Diarrhée', 'occasionnel'],
    ],
    sources: [
      'UNICEF — santé et nutrition de l’enfant',
      'OMS — lignes directrices et publications',
      'Protocole national PCIMA',
    ],
    niveaux: {
      cs: [
        '- Mesure de la taille, conseils nutritionnels, micronutriments, déparasitage',
        '- Retard sévère, causes médicales',
      ],
      hgr: ['- Bilan des causes médicales', ''],
      tert: ['- Endocrinologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Retard de croissance modéré',
        type: 'commune',
        description: 'Taille/âge entre −3 et −2 z.',
        terrain: '- Enfant de 6 à 59 mois',
        fonctionnels: '',
        generaux: '',
        physiques: '- Petite taille',
        paraclinique: '- z-score taille/âge',
        etiologies: '- Carences, infections',
        syndromes: [],
        examens: [['anthropometrie', 'Z-score']],
      },
      {
        nom: 'Retard de croissance sévère',
        type: 'gravite',
        description: 'Taille/âge < −3 z.',
        terrain: '- Pauvreté, malnutrition maternelle',
        fonctionnels: '',
        generaux: '',
        physiques: '- Très petite taille, retard des acquisitions',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
