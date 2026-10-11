'use strict';

/**
 * Lot 2 (partie A) — infectiologie prioritaire en RDC : onchocercose, schistosomiase
 * urogénitale, géohelminthiases, toxoplasmose cérébrale, infections sexuellement
 * transmissibles. Fiches rédigées par IA (OMS, MSF, programmes nationaux) : à valider.
 */

const MI = { departement: 'medecine-interne', specialite: 'Infectiologie' };

module.exports = [
  // =================================================================== Onchocercose
  {
    ...MI,
    slug: 'onchocercose',
    nom: 'Onchocercose',
    resume:
      'Filariose cutanéo-oculaire transmise par les simulies près des rivières : prurit, nodules, cécité ; traitement de masse à l’ivermectine.',
    definition:
      'Filariose due à *Onchocerca volvulus*, transmise par la piqûre de simulies (mouches noires) se reproduisant dans les rivières à courant rapide, responsable d’atteintes cutanées, oculaires (« cécité des rivières ») et associée à une forme d’épilepsie.',
    physiopathologie:
      '## Mécanismes\n- Les vers adultes vivent dans des nodules sous-cutanés (onchocercomes) pendant 10 à 15 ans\n- Les femelles libèrent des millions de microfilaires qui migrent dans la peau et l’œil\n- La mort des microfilaires déclenche une inflammation (bactéries endosymbiotes *Wolbachia*) : dermatite, kératite, choriorétinite',
    diagnostic:
      '## Clinique\n- Prurit intense et chronique, lésions de grattage\n- Dermatite papuleuse, peau « de lézard », dépigmentation des jambes (« peau de léopard »)\n- **Nodules** sous-cutanés indolores sur les saillies osseuses (crêtes iliaques, côtes, genoux)\n- Atteinte oculaire : kératite ponctuée puis sclérosante, uvéite, atrophie optique → cécité\n- Adénopathies inguinales (« aine pendante »)\n\n## Confirmation\n- Microfilaires dans les biopsies cutanées exsangues\n- Microfilaires dans la chambre antérieure (lampe à fente)',
    examens: [
      [
        'confirmation',
        'biopsie-cutanee-exsangue',
        'Microfilaires d’O. volvulus : diagnostic et densité microfilarienne.',
      ],
      ['deuxieme_intention', 'nfs', 'Hyperéosinophilie fréquente.'],
      [
        'pretherapeutique',
        'goutte-epaisse',
        'Zone de co-endémie de la loase : rechercher une forte microfilarémie à Loa loa avant ivermectine (risque d’encéphalopathie).',
      ],
      ['etiologique', 'eeg', 'En cas d’épilepsie associée.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Gale', 'Prurit nocturne, sillons, atteinte des espaces interdigitaux, cas familiaux.'],
      ['Loase', 'Œdèmes de Calabar, passage du ver sous la conjonctive ; microfilaires sanguines diurnes.'],
      ['Dermatoses du VIH (prurigo)', 'Contexte VIH, papules prurigineuses.'],
      ['Lipomes et kystes', 'Nodules sans prurit, absence de microfilaires.'],
    ],
    etiologies:
      '## Agent\n- *Onchocerca volvulus*, transmis par les simulies (*Simulium*)\n\n## Contexte\n- Villages proches des rivières à courant rapide, nombreux foyers en RDC (Bas-Uele, Tshopo, Ituri, Kasaï, Kongo-Central…)\n- Maladie tropicale négligée ciblée par le traitement de masse',
    principes: [
      [
        'Traitement de masse par l’ivermectine',
        'Interrompre la transmission et prévenir la cécité.',
        '- **Ivermectine** 150 µg/kg en dose unique 1 à 2 fois par an (traitement sous directives communautaires)\n- Exclus : enfant < 15 kg ou < 90 cm, femme enceinte, femme allaitant un enfant de moins d’une semaine, malades graves',
      ],
      [
        'Prévenir les accidents en zone de loase',
        'Éviter l’encéphalopathie post-ivermectine.',
        '- Rechercher une microfilarémie à *Loa loa* élevée avant traitement (« tester et ne pas traiter »)\n- Surveillance 48 à 72 h après la prise en zone de co-endémie',
      ],
      [
        'Traitement macrofilaricide individuel',
        'Tuer les vers adultes.',
        '- **Doxycycline** 100 mg/j pendant 6 semaines (cible *Wolbachia*), suivie d’ivermectine\n- Contre-indiquée chez l’enfant < 8 ans et la femme enceinte',
      ],
      [
        'Nodulectomie et prise en charge oculaire',
        'Réduire la charge parasitaire et le handicap.',
        '- Exérèse des nodules, surtout céphaliques\n- Avis ophtalmologique, réadaptation des malvoyants',
      ],
    ],
    molecules: [
      ['ivermectine', 'premiere', 'Traitement de masse et individuel, dose unique'],
      ['doxycycline', 'deuxieme', 'Macrofilaricide (6 semaines)'],
      ['paracetamol', 'adjuvant', 'Réactions de Mazzotti (fièvre, douleurs)'],
    ],
    complications: [
      {
        nom: 'Cécité',
        description: 'Kératite sclérosante, choriorétinite, atrophie optique.',
        traitement: '- Prévention par ivermectine, réadaptation',
        clinique: '- Acuité visuelle',
        paraclinique: '- Examen à la lampe à fente',
      },
      {
        nom: 'Épilepsie associée à l’onchocercose',
        description:
          'Crises débutant entre 3 et 18 ans, syndrome du hochement de tête, retard de croissance.',
        traitement: '- Antiépileptiques (phénobarbital), ivermectine',
        clinique: '- Fréquence des crises',
        paraclinique: '- EEG',
      },
      {
        nom: 'Encéphalopathie post-ivermectine',
        description: 'Chez les sujets fortement infestés par Loa loa.',
        traitement: '- Hospitalisation, soins de soutien',
        clinique: '- Conscience, saignements conjonctivaux',
        paraclinique: '- Microfilarémie à Loa loa',
      },
    ],
    evolution:
      '## Pronostic\n- Prurit amélioré en quelques semaines sous ivermectine\n- Les lésions oculaires constituées sont irréversibles\n- Élimination possible avec des traitements de masse couvrant > 80 % de la population pendant 12 à 15 ans',
    urgences: [],
    symptomes: [
      ['Prurit', 'tres_frequent'],
      ['Nodules sous-cutanés', 'frequent'],
      ['Troubles visuels', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: [
        '- Ivermectine (campagnes), dépistage des troubles visuels, recherche de loase selon le programme',
        '- Troubles visuels, épilepsie, réaction grave à l’ivermectine',
      ],
      hgr: ['- Biopsies cutanées, doxycycline, nodulectomie, phénobarbital', '- Atteinte oculaire évoluée'],
      tert: ['- Ophtalmologie spécialisée', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Onchodermatite',
        type: 'commune',
        description: 'Atteinte cutanée prurigineuse chronique.',
        terrain: '- Riverains de cours d’eau à courant rapide',
        fonctionnels: '- Prurit intense, insomnie',
        generaux: '',
        physiques:
          '- Papules, lichénification, dépigmentation en « peau de léopard », nodules sur les saillies osseuses',
        paraclinique: '- Microfilaires dans les biopsies cutanées',
        etiologies: '- *O. volvulus*',
        syndromes: [],
        examens: [['biopsie-cutanee-exsangue', 'Confirmation']],
      },
      {
        nom: 'Onchocercose oculaire',
        type: 'topographique',
        description: 'Kératite, uvéite, choriorétinite pouvant conduire à la cécité.',
        terrain: '- Forte charge parasitaire, exposition prolongée',
        fonctionnels: '- Larmoiement, photophobie, baisse de vision',
        generaux: '',
        physiques: '- Kératite ponctuée ou sclérosante, microfilaires dans la chambre antérieure',
        paraclinique: '- Examen à la lampe à fente',
        etiologies: '- Microfilaires intraoculaires',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Schistosomiase urogénitale
  {
    ...MI,
    slug: 'schistosomiase-urogenitale',
    nom: 'Schistosomiase urogénitale',
    resume:
      'Bilharziose à S. haematobium contractée dans l’eau douce : hématurie terminale de l’enfant, atteinte génitale, fibrose et cancer de la vessie.',
    definition:
      'Infection par *Schistosoma haematobium*, contractée par contact avec de l’eau douce contenant les cercaires libérées par des mollusques, dont les œufs se déposent dans la paroi vésicale et les organes génitaux.',
    physiopathologie:
      '## Mécanismes\n- Pénétration transcutanée des cercaires lors de la baignade, de la pêche, de la lessive\n- Les vers adultes vivent dans les plexus veineux péri-vésicaux\n- Les œufs traversent la paroi vésicale (hématurie) ou y restent piégés : granulomes, fibrose, calcifications\n- Inflammation chronique : métaplasie épidermoïde, cancer de la vessie',
    diagnostic:
      '## Clinique\n- **Hématurie terminale** (enfant et adolescent d’âge scolaire)\n- Brûlures mictionnelles, pollakiurie, douleurs sus-pubiennes\n- Femme : leucorrhées, saignements post-coïtaux, lésions génitales (schistosomiase génitale féminine), infertilité\n- Homme : hémospermie\n\n## Confirmation\n- Œufs à éperon terminal dans les urines de midi\n- Bandelette : hématurie microscopique (dépistage communautaire)',
    examens: [
      ['confirmation', 'oeufs-schistosomes-urines', 'Œufs de S. haematobium ; intensité de l’infection.'],
      [
        'premiere_intention',
        'bandelette-urinaire',
        'Hématurie et leucocyturie : dépistage simple en zone d’endémie.',
      ],
      [
        'gravite',
        'echographie-renale',
        'Épaississement et calcifications vésicales, hydronéphrose, masse vésicale.',
      ],
      ['gravite', 'creatinine', 'Insuffisance rénale obstructive.'],
      ['deuxieme_intention', 'ecbu', 'Infection urinaire associée.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Infection urinaire bactérienne', 'Fièvre, ECBU positif, pas d’œufs.'],
      ['Lithiase urinaire', 'Colique néphrétique, calcul à l’échographie.'],
      ['Tumeur de la vessie', 'Adulte, hématurie totale, masse à l’échographie ou cystoscopie.'],
      ['Tuberculose urogénitale', 'Leucocyturie aseptique, BK dans les urines.'],
    ],
    etiologies:
      '## Agent\n- *Schistosoma haematobium* (mollusques *Bulinus*)\n\n## Facteurs\n- Contacts répétés avec l’eau douce (baignade, pêche, irrigation, lessive)\n- Absence de latrines et d’eau potable\n- Foyers en RDC : Haut-Katanga, Lualaba, Maniema, Tanganyika, Kongo-Central…',
    principes: [
      [
        'Traiter par le praziquantel',
        'Guérir et réduire la morbidité.',
        '- **Praziquantel** 40 mg/kg en dose unique au cours d’un repas\n- Utilisable chez l’enfant ≥ 2 ans et la femme enceinte\n- Contrôle des urines 1 à 2 mois après',
      ],
      [
        'Chimiothérapie préventive',
        'Réduire la morbidité dans les communautés.',
        '- Traitement de masse des enfants d’âge scolaire et des adultes à risque selon la prévalence (1 à 2 fois par an)',
      ],
      [
        'Dépister les complications',
        'Repérer fibrose, obstruction et cancer.',
        '- Échographie si hématurie persistante, douleurs lombaires, âge > 40 ans\n- Avis urologique en cas de masse ou d’hydronéphrose',
      ],
      [
        'Prévention',
        'Couper le cycle.',
        '- Latrines, eau potable, limitation des contacts avec l’eau douce, éducation sanitaire',
      ],
    ],
    molecules: [
      ['praziquantel', 'premiere', 'Dose unique 40 mg/kg'],
      ['paracetamol', 'adjuvant', 'Douleurs'],
    ],
    complications: [
      {
        nom: 'Uropathie obstructive',
        description: 'Sténose urétérale et fibrose vésicale : hydronéphrose, insuffisance rénale.',
        traitement: '- Praziquantel, avis urologique (dérivation)',
        clinique: '- Douleurs lombaires, diurèse',
        paraclinique: '- Échographie rénale, créatinine',
      },
      {
        nom: 'Cancer épidermoïde de la vessie',
        description: 'Complication tardive de l’infection chronique.',
        traitement: '- Prise en charge urologique et oncologique',
        clinique: '- Hématurie de l’adulte, amaigrissement',
        paraclinique: '- Échographie, cystoscopie, biopsie',
      },
      {
        nom: 'Schistosomiase génitale féminine',
        description: 'Lésions du col et du vagin, infertilité, risque accru d’acquisition du VIH.',
        traitement: '- Praziquantel précoce (dès l’enfance)',
        clinique: '- Leucorrhées, saignements, dyspareunie',
        paraclinique: '- Colposcopie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison parasitologique dans 60 à 90 % des cas après une dose\n- Lésions précoces réversibles ; fibrose et calcifications tardives peu réversibles\n- Réinfections fréquentes sans mesures d’hygiène',
    urgences: [],
    symptomes: [
      ['Hématurie', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Leucorrhées', 'occasionnel'],
      ['Pâleur', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: [
        '- Bandelette urinaire, praziquantel, traitement de masse scolaire',
        '- Hématurie persistante après traitement, douleurs lombaires, adulte > 40 ans',
      ],
      hgr: [
        '- Recherche d’œufs, échographie, prise en charge des complications',
        '- Masse vésicale, insuffisance rénale',
      ],
      tert: ['- Urologie, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme urinaire de l’enfant',
        type: 'commune',
        description: 'Hématurie terminale de l’enfant d’âge scolaire.',
        terrain: '- Enfant de 5 à 15 ans, baignades en eau douce',
        fonctionnels: '- Hématurie terminale, brûlures mictionnelles, pollakiurie',
        generaux: '- Anémie possible',
        physiques: '- Souvent normal',
        paraclinique: '- Œufs dans les urines, hématurie à la bandelette',
        etiologies: '- *S. haematobium*',
        syndromes: [],
        examens: [['oeufs-schistosomes-urines', 'Confirmation']],
      },
      {
        nom: 'Schistosomiase génitale féminine',
        type: 'topographique',
        description: 'Lésions génitales chez la jeune femme.',
        terrain: '- Femme ayant vécu en zone d’endémie',
        fonctionnels: '- Leucorrhées, saignements post-coïtaux, douleurs pelviennes, infertilité',
        generaux: '',
        physiques: '- Taches sableuses jaunes du col, lésions vasculaires',
        paraclinique: '- Colposcopie',
        etiologies: '- Œufs dans les tissus génitaux',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Géohelminthiases
  {
    ...MI,
    slug: 'geohelminthiases',
    nom: 'Géohelminthiases (ascaridiose, ankylostomose, trichocéphalose)',
    resume:
      'Vers intestinaux transmis par le sol souillé : anémie, malnutrition et retard scolaire ; déparasitage de masse à l’albendazole.',
    definition:
      'Infections intestinales par des vers ronds transmis par le sol contaminé par des matières fécales : *Ascaris lumbricoides*, ankylostomes (*Necator americanus*, *Ancylostoma duodenale*) et *Trichuris trichiura*.',
    physiopathologie:
      '## Mécanismes\n- Ascaris et Trichuris : ingestion d’œufs (mains sales, aliments)\n- Ankylostomes : pénétration transcutanée des larves (marche pieds nus)\n- Ankylostomes : spoliation sanguine → anémie ferriprive\n- Ascaris : masses de vers → occlusion, migration biliaire\n- Charge parasitaire élevée → malnutrition, retard de croissance et troubles cognitifs',
    diagnostic:
      '## Clinique\n- Souvent asymptomatique ou douleurs abdominales, nausées, diarrhée\n- **Anémie** ferriprive (ankylostomose) : pâleur, asthénie, dyspnée d’effort\n- Malnutrition, retard staturo-pondéral de l’enfant\n- Rejet de vers (ascaris), toux et sifflements lors de la migration larvaire (syndrome de Löffler)\n- Trichocéphalose massive : diarrhée glairo-sanglante, prolapsus rectal\n\n## Confirmation\n- Œufs dans les selles (Kato-Katz)',
    examens: [
      [
        'confirmation',
        'examen-parasitologique-selles',
        'Œufs d’ascaris, d’ankylostomes ou de trichocéphales ; intensité.',
      ],
      ['gravite', 'nfs', 'Anémie microcytaire ; hyperéosinophilie lors de la migration larvaire.'],
      [
        'gravite',
        'abdomen-sans-preparation',
        'Occlusion à ascaris : niveaux hydro-aériques, images de vers.',
      ],
      ['deuxieme_intention', 'echographie-abdominale', 'Ascaris dans les voies biliaires ou l’intestin.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Anémie par carence alimentaire', 'Pas de parasites ; enquête alimentaire.'],
      ['shigellose', 'Diarrhée glairo-sanglante fébrile aiguë.'],
      ['Schistosomiase intestinale', 'Œufs à éperon latéral de S. mansoni, hépatosplénomégalie.'],
      [
        'occlusion-intestinale-aigue',
        'Autres causes d’occlusion ; images de vers en faveur de l’ascaridiose.',
      ],
    ],
    etiologies:
      '## Agents\n- *Ascaris lumbricoides*, *Necator americanus*, *Ancylostoma duodenale*, *Trichuris trichiura*\n\n## Facteurs\n- Défécation à l’air libre, absence de latrines\n- Marche pieds nus, mains non lavées\n- Enfants d’âge préscolaire et scolaire, femmes en âge de procréer',
    principes: [
      [
        'Traitement individuel',
        'Éliminer les vers.',
        '- **Albendazole** 400 mg en dose unique (200 mg de 12 à 23 mois)\n- Ou **mébendazole** 500 mg en dose unique\n- Trichocéphalose massive : albendazole 400 mg/j pendant 3 jours',
      ],
      [
        'Corriger l’anémie et la malnutrition',
        'Restaurer l’état nutritionnel.',
        '- Fer et acide folique, alimentation enrichie\n- Transfusion si anémie sévère mal tolérée',
      ],
      [
        'Déparasitage de masse',
        'Réduire la morbidité.',
        '- Enfants de 1 à 14 ans, femmes enceintes après le 1er trimestre, 1 à 2 fois par an selon la prévalence',
      ],
      [
        'Hygiène',
        'Rompre la transmission.',
        '- Latrines, lavage des mains au savon, port de chaussures, eau potable',
      ],
    ],
    molecules: [
      ['albendazole', 'premiere', 'Dose unique (3 jours pour la trichocéphalose massive)'],
      ['mebendazole', 'alternative', 'Dose unique 500 mg'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie ferriprive'],
      ['acide-folique', 'adjuvant', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Occlusion intestinale à ascaris',
        fiche: 'occlusion-intestinale-aigue',
        description: 'Paquet de vers obstruant l’iléon, surtout chez l’enfant.',
        traitement:
          '- Aspiration digestive, réhydratation ; anthelminthique après levée de l’occlusion\n- Chirurgie si échec ou péritonite',
        clinique: '- Douleurs, vomissements, arrêt des matières',
        paraclinique: '- ASP, échographie',
      },
      {
        nom: 'Anémie sévère',
        description: 'Ankylostomose à forte charge.',
        traitement: '- Fer, transfusion si mal tolérée',
        clinique: '- Pâleur, dyspnée, insuffisance cardiaque',
        paraclinique: '- Hb',
      },
      {
        nom: 'Prolapsus rectal',
        description: 'Trichocéphalose massive de l’enfant.',
        traitement: '- Albendazole 3 jours, réduction du prolapsus',
        clinique: '- Masse anale',
        paraclinique: '',
      },
      {
        nom: 'Angiocholite ou pancréatite à ascaris',
        description: 'Migration des vers dans les voies biliaires.',
        traitement: '- Antibiotiques, anthelminthique, extraction endoscopique ou chirurgicale',
        clinique: '- Douleur de l’hypochondre droit, ictère, fièvre',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison facile mais réinfections fréquentes\n- Amélioration de la croissance et de l’hémoglobine après déparasitage régulier',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Diarrhée', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
      ['Toux', 'rare'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Albendazole ou mébendazole, fer, éducation à l’hygiène, déparasitage de masse',
        '- Occlusion, anémie sévère, ictère',
      ],
      hgr: ['- Prise en charge de l’occlusion, transfusion, chirurgie', ''],
      tert: ['- Complications biliaires (endoscopie)', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical':
        'Enfant avec douleurs abdominales, vomissements et arrêt des matières, rejet de vers',
    },
    formes: [
      {
        nom: 'Ankylostomose avec anémie',
        type: 'commune',
        description: 'Anémie ferriprive chronique.',
        terrain: '- Marche pieds nus, travaux agricoles',
        fonctionnels: '- Asthénie, dyspnée d’effort, douleurs épigastriques',
        generaux: '- Pâleur',
        physiques: '- Pâleur conjonctivale, souffle cardiaque fonctionnel, œdèmes si anémie sévère',
        paraclinique: '- Œufs d’ankylostomes, anémie microcytaire',
        etiologies: '- *N. americanus*, *A. duodenale*',
        syndromes: ['syndrome-anemique'],
        examens: [['examen-parasitologique-selles', 'Œufs d’ankylostomes']],
      },
      {
        nom: 'Ascaridiose compliquée',
        type: 'gravite',
        description: 'Occlusion ou migration biliaire de vers.',
        terrain: '- Enfant à forte charge parasitaire',
        fonctionnels: '- Douleurs, vomissements de vers',
        generaux: '',
        physiques: '- Masse abdominale, ballonnement',
        paraclinique: '- Images de vers à l’ASP ou à l’échographie',
        etiologies: '- *A. lumbricoides*',
        syndromes: ['syndrome-occlusif'],
      },
    ],
  },

  // =================================================================== Toxoplasmose cérébrale
  {
    ...MI,
    slug: 'toxoplasmose-cerebrale',
    nom: 'Toxoplasmose cérébrale',
    resume:
      'Abcès cérébraux de la PVVIH avancée (CD4 < 100) : déficit focal fébrile ; traitement d’épreuve par cotrimoxazole à forte dose.',
    definition:
      'Réactivation d’une infection latente à *Toxoplasma gondii* chez un sujet immunodéprimé, responsable d’abcès cérébraux multiples ; première cause de lésion cérébrale focale chez la PVVIH.',
    physiopathologie:
      '## Mécanismes\n- Primo-infection fréquente et silencieuse (kystes dans le cerveau et les muscles)\n- Réactivation quand les CD4 chutent sous 100/mm³\n- Formation d’abcès nécrotiques entourés d’œdème : effet de masse, convulsions',
    diagnostic:
      '## Clinique\n- Installation subaiguë : céphalées, fièvre\n- **Déficit focal** : hémiparésie, aphasie, troubles visuels\n- Convulsions, confusion, troubles de la conscience\n\n## Diagnostic\n- PVVIH, CD4 < 100, pas de prophylaxie par cotrimoxazole\n- Scanner : lésions multiples prenant le contraste en anneau, œdème\n- Sans imagerie : **traitement d’épreuve** ; l’amélioration en 1 à 2 semaines confirme le diagnostic',
    examens: [
      [
        'premiere_intention',
        'scanner-cerebral',
        'Abcès multiples en cocarde (noyaux gris, jonction cortico-sous-corticale) avec œdème.',
      ],
      ['premiere_intention', 'cd4', 'Habituellement < 100/mm³.'],
      ['premiere_intention', 'tdr-vih', 'Si statut inconnu.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Plus sensible que le scanner.'],
      ['etiologique', 'crag-cryptocoque', 'Éliminer une cryptococcose associée.'],
      ['etiologique', 'lcr', 'Si pas d’effet de masse : éliminer méningite tuberculeuse ou cryptococcique.'],
    ],
    scores: ['glasgow', 'stades-oms-vih'],
    differentiels: [
      [
        'Tuberculome ou méningite tuberculeuse',
        'Tuberculose active, LCR lymphocytaire ; absence de réponse au traitement d’épreuve.',
      ],
      [
        'Lymphome cérébral primitif',
        'Lésion unique, absence d’amélioration sous traitement anti-toxoplasmique.',
      ],
      ['meningite-a-cryptocoque', 'Céphalées et HTIC sans déficit focal ; CrAg positif.'],
      ['avc', 'Début brutal, terrain vasculaire.'],
      ['Leucoencéphalopathie multifocale progressive', 'Déficits progressifs sans fièvre ni effet de masse.'],
    ],
    etiologies:
      '## Agent\n- *Toxoplasma gondii* (réactivation de kystes)\n\n## Terrain\n- VIH avancé, CD4 < 100/mm³, absence de prophylaxie par cotrimoxazole\n- Autres immunodépressions cellulaires',
    principes: [
      [
        'Traitement d’attaque',
        'Faire régresser les abcès.',
        '- **Cotrimoxazole** à forte dose : triméthoprime 5 mg/kg et sulfaméthoxazole 25 mg/kg 2 fois par jour (OMS) pendant 6 semaines\n- Alternative : **pyriméthamine** (200 mg J1 puis 50–75 mg/j) + **sulfadiazine** (1–1,5 g toutes les 6 h) + **acide folinique** 10–25 mg/j\n- Allergie aux sulfamides : pyriméthamine + clindamycine',
      ],
      [
        'Traiter l’œdème et les crises',
        'Prévenir l’engagement.',
        '- **Dexaméthasone** seulement en cas d’effet de masse, à arrêter dès que possible\n- Anticonvulsivant si crises (attention aux interactions avec les ARV)',
      ],
      [
        'Prophylaxie secondaire',
        'Éviter la rechute.',
        '- Cotrimoxazole (960 mg/j) jusqu’à CD4 > 200 depuis au moins 6 mois sous ARV',
      ],
      [
        'Démarrer les ARV',
        'Restaurer l’immunité.',
        '- ARV 2 à 3 semaines après le début du traitement anti-toxoplasmique',
      ],
      [
        'Prévention primaire',
        'Éviter la toxoplasmose.',
        '- Cotrimoxazole chez toute PVVIH selon les critères nationaux',
      ],
    ],
    molecules: [
      ['cotrimoxazole', 'premiere', 'Attaque à forte dose 6 semaines, puis prophylaxie secondaire'],
      ['pyrimethamine', 'alternative', 'Associée à la sulfadiazine et à l’acide folinique'],
      ['sulfadiazine', 'alternative', 'Associée à la pyriméthamine'],
      ['acide-folinique', 'adjuvant', 'Prévention de la toxicité de la pyriméthamine'],
      ['clindamycine', 'alternative', 'Allergie aux sulfamides, avec pyriméthamine'],
      ['dexamethasone', 'adjuvant', 'Effet de masse'],
      ['phenobarbital', 'adjuvant', 'Convulsions'],
    ],
    complications: [
      {
        nom: 'Hypertension intracrânienne et engagement',
        description: 'Œdème périlésionnel massif.',
        traitement: '- Dexaméthasone, tête surélevée, transfert',
        clinique: '- Conscience, pupilles, vomissements',
        paraclinique: '- Scanner cérébral',
      },
      {
        nom: 'Crises convulsives',
        description: 'Irritation corticale par les abcès.',
        traitement: '- Diazépam puis anticonvulsivant au long cours',
        clinique: '- Fréquence des crises',
        paraclinique: '',
      },
      {
        nom: 'Séquelles neurologiques',
        description: 'Hémiplégie, épilepsie séquellaire.',
        traitement: '- Rééducation',
        clinique: '- Déficit',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration clinique chez 90 % des patients en 1 à 2 semaines si le diagnostic est juste\n- Absence d’amélioration à 2 semaines : rechercher un autre diagnostic (tuberculose, lymphome)\n- Rechute fréquente sans prophylaxie secondaire',
    urgences: [],
    symptomes: [
      ['Déficit moteur', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Convulsions', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Troubles du langage', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      "Guide national de prise en charge de l'infection à VIH",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Prophylaxie par cotrimoxazole de la PVVIH, dépistage du VIH',
        '- Tout déficit focal, convulsions ou céphalées chez une PVVIH',
      ],
      hgr: [
        '- Traitement d’épreuve par cotrimoxazole, anticonvulsivants, ARV',
        '- Absence d’amélioration à 2 semaines, troubles de la conscience',
      ],
      tert: ['- Scanner ou IRM, avis neurologique, diagnostic des lésions atypiques', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Abcès cérébraux de la PVVIH',
        type: 'commune',
        description: 'Déficit focal fébrile d’installation subaiguë.',
        terrain: '- VIH, CD4 < 100/mm³, sans prophylaxie',
        fonctionnels: '- Céphalées, faiblesse d’un hémicorps, troubles du langage',
        generaux: '- Fièvre modérée',
        physiques: '- Hémiparésie, aphasie, syndrome pyramidal',
        paraclinique: '- Abcès en cocarde au scanner',
        etiologies: '- Réactivation de *T. gondii*',
        syndromes: ['syndrome-pyramidal', 'syndrome-d-hypertension-intracranienne'],
        examens: [['scanner-cerebral', 'Abcès multiples']],
      },
      {
        nom: 'Encéphalite diffuse',
        type: 'commune',
        description: 'Confusion et convulsions sans déficit focal net.',
        terrain: '- Immunodépression profonde',
        fonctionnels: '- Confusion, troubles du comportement',
        generaux: '- Fièvre',
        physiques: '- Convulsions, troubles de la conscience',
        paraclinique: '- Lésions multiples',
        etiologies: '- *T. gondii*',
        syndromes: ['syndrome-confusionnel', 'syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== IST
  {
    ...MI,
    slug: 'infections-sexuellement-transmissibles',
    nom: 'Infections sexuellement transmissibles (approche syndromique)',
    resume:
      'Prise en charge des IST par syndrome (écoulement, ulcération, douleurs pelviennes, bubon) sans attendre le laboratoire ; traiter aussi le partenaire.',
    definition:
      'Infections transmises lors des rapports sexuels (gonocoque, chlamydia, trichomonas, syphilis, chancre mou, herpès…), prises en charge selon l’approche syndromique de l’OMS : traitement immédiat de toutes les causes habituelles d’un syndrome.',
    physiopathologie:
      '## Mécanismes\n- Transmission par contact muqueux lors des rapports\n- Infections souvent asymptomatiques chez la femme\n- Ulcérations et inflammation génitales : multiplication du risque de transmission du VIH\n- Infections ascendantes : salpingite, infertilité, grossesse extra-utérine',
    diagnostic:
      '## Syndromes\n- **Écoulement urétral** (homme) : gonocoque, chlamydia\n- **Écoulement vaginal anormal** : vaginose, trichomonase, candidose ; cervicite si facteurs de risque\n- **Ulcération génitale** : syphilis, chancre mou, herpès\n- **Douleurs abdominales basses** chez la femme : infection génitale haute\n- **Bubon inguinal** : lymphogranulomatose vénérienne, chancre mou\n- Ophtalmie du nouveau-né\n\n## Toujours\n- Dépister le VIH et la syphilis, proposer l’hépatite B',
    examens: [
      ['premiere_intention', 'tdr-vih', 'Systématique devant toute IST.'],
      ['premiere_intention', 'serologie-syphilis', 'Systématique ; RPR pour le suivi.'],
      [
        'premiere_intention',
        'beta-hcg',
        'Femme : grossesse (choix du traitement, GEU devant des douleurs pelviennes).',
      ],
      ['deuxieme_intention', 'aghbs', 'Dépistage de l’hépatite B.'],
      ['deuxieme_intention', 'echographie-pelvienne', 'Douleurs pelviennes : abcès tubo-ovarien.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-extra-uterine', 'Douleurs pelviennes avec retard de règles : β-hCG.'],
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite, sans leucorrhées.'],
      ['Infection urinaire', 'Brûlures mictionnelles sans écoulement ; bandelette positive.'],
      [
        'Ulcérations non infectieuses (Behçet, traumatisme, toxidermie)',
        'Contexte, absence de risque sexuel.',
      ],
    ],
    etiologies:
      '## Agents\n- *Neisseria gonorrhoeae*, *Chlamydia trachomatis*, *Trichomonas vaginalis*, *Mycoplasma genitalium*\n- *Treponema pallidum*, *Haemophilus ducreyi*, virus herpès simplex\n- Vaginose bactérienne, *Candida* (non sexuellement transmis)\n\n## Facteurs\n- Partenaires multiples, rapports non protégés, travail du sexe, violences sexuelles, adolescence',
    principes: [
      [
        'Écoulement urétral et cervicite',
        'Traiter gonocoque et chlamydia.',
        '- **Ceftriaxone** 1 g IM dose unique (gonocoque, OMS 2024)\n- + **doxycycline** 100 mg 2 fois par jour 7 jours (ou **azithromycine** 1 g dose unique, notamment grossesse)',
      ],
      [
        'Écoulement vaginal',
        'Traiter vaginose et trichomonase, ± candidose.',
        '- **Métronidazole** 500 mg 2 fois par jour 7 jours\n- Candidose (prurit, leucorrhées caillebottées) : **clotrimazole** ovule 500 mg dose unique ou **fluconazole** 150 mg\n- Risque de cervicite : traiter aussi gonocoque et chlamydia',
      ],
      [
        'Ulcération génitale',
        'Traiter syphilis et chancre mou, herpès selon l’aspect.',
        '- **Benzathine benzylpénicilline** 2,4 MUI IM dose unique\n- + **azithromycine** 1 g dose unique (chancre mou)\n- Vésicules ou ulcérations récidivantes : **aciclovir** 400 mg 3 fois par jour 7 à 10 jours',
      ],
      [
        'Douleurs abdominales basses',
        'Traiter l’infection génitale haute.',
        '- **Ceftriaxone** 1 g IM + **doxycycline** 100 mg 2 fois par jour + **métronidazole** 500 mg 2 fois par jour pendant 14 jours\n- Hospitaliser si fièvre élevée, masse, défense, grossesse',
      ],
      [
        'Partenaires et prévention',
        'Éviter réinfection et transmission.',
        '- Traitement des partenaires (notification), abstinence jusqu’à la fin du traitement\n- Préservatifs, dépistage VIH et PrEP, vaccination hépatite B et HPV\n- Violences sexuelles : prophylaxie post-exposition (VIH, IST, contraception d’urgence)',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Gonococcie, cervicite, infection génitale haute'],
      ['doxycycline', 'premiere', 'Chlamydia, infection génitale haute, lymphogranulomatose'],
      ['azithromycine', 'premiere', 'Chlamydia (grossesse), chancre mou'],
      ['metronidazole', 'premiere', 'Vaginose bactérienne, trichomonase, infection génitale haute'],
      ['benzathine-benzylpenicilline', 'premiere', 'Syphilis'],
      ['aciclovir', 'premiere', 'Herpès génital'],
      ['clotrimazole', 'alternative', 'Candidose vaginale'],
      ['fluconazole', 'alternative', 'Candidose vaginale'],
      ['cefixime', 'alternative', 'Gonococcie si ceftriaxone injectable impossible'],
    ],
    complications: [
      {
        nom: 'Infection génitale haute et abcès tubo-ovarien',
        description: 'Complication de la cervicite non traitée.',
        traitement: '- Antibiothérapie de 14 jours, drainage chirurgical d’un abcès',
        clinique: '- Fièvre, douleurs pelviennes, défense',
        paraclinique: '- Échographie pelvienne',
      },
      {
        nom: 'Infertilité et grossesse extra-utérine',
        fiche: 'grossesse-extra-uterine',
        description: 'Séquelles tubaires des salpingites.',
        traitement: '- Prévention par le traitement précoce',
        clinique: '- Retard de règles, douleurs',
        paraclinique: '- β-hCG, échographie',
      },
      {
        nom: 'Transmission du VIH',
        fiche: 'infection-vih',
        description: 'Les IST, surtout ulcératives, multiplient le risque.',
        traitement: '- Dépistage, PrEP, ARV',
        clinique: '',
        paraclinique: '- TDR VIH',
      },
      {
        nom: 'Ophtalmie du nouveau-né',
        description: 'Conjonctivite purulente à gonocoque ou chlamydia après l’accouchement.',
        traitement: '- Prophylaxie oculaire à la naissance, ceftriaxone chez le nouveau-né',
        clinique: '- Œil purulent, paupières gonflées',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison rapide sous traitement adapté\n- Réinfections fréquentes si le partenaire n’est pas traité\n- Contrôle à 7 jours en cas d’ulcération ou d’écoulement persistant',
    urgences: [],
    symptomes: [
      ['Écoulement urétral', 'frequent'],
      ['Leucorrhées', 'frequent'],
      ['Ulcération génitale', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Adénopathies', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Approche syndromique complète, dépistage VIH et syphilis, préservatifs, notification des partenaires',
        '- Douleurs pelviennes avec fièvre élevée ou défense, grossesse, échec du traitement',
      ],
      hgr: ['- Infection génitale haute hospitalisée, drainage d’abcès, diagnostic étiologique', ''],
      tert: ['- Laboratoire de référence (cultures, antibiogrammes du gonocoque)', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Écoulement urétral de l’homme',
        type: 'commune',
        description: 'Urétrite à gonocoque ou chlamydia.',
        terrain: '- Homme jeune, rapport non protégé récent',
        fonctionnels: '- Écoulement purulent, brûlures mictionnelles',
        generaux: '',
        physiques: '- Écoulement au méat',
        paraclinique: '- Diagnostic syndromique',
        etiologies: '- *N. gonorrhoeae*, *C. trachomatis*',
        syndromes: [],
      },
      {
        nom: 'Ulcération génitale',
        type: 'commune',
        description: 'Ulcère génital unique ou multiple.',
        terrain: '- Partenaires multiples',
        fonctionnels: '- Plaie génitale douloureuse (chancre mou, herpès) ou indolore (syphilis)',
        generaux: '',
        physiques: '- Ulcération, adénopathie inguinale',
        paraclinique: '- TDR syphilis',
        etiologies: '- *T. pallidum*, *H. ducreyi*, HSV',
        syndromes: [],
        examens: [['serologie-syphilis', 'Syphilis']],
      },
      {
        nom: 'Infection génitale haute de la femme',
        type: 'gravite',
        description: 'Salpingite et endométrite.',
        terrain: '- Femme jeune, DIU récent, post-partum ou post-abortum',
        fonctionnels: '- Douleurs pelviennes, leucorrhées, dyspareunie',
        generaux: '- Fièvre',
        physiques: '- Douleur à la mobilisation utérine, masse annexielle',
        paraclinique: '- Échographie : pyosalpinx, abcès',
        etiologies: '- Gonocoque, chlamydia, anaérobies',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },
];
