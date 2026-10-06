'use strict';

/**
 * Formes cliniques, sémiologie systématisée et étiologies par forme — chirurgie.
 * Format : voir semiologie/infectiologie.js. Contenu à valider par un médecin.
 */

module.exports = {
  // =================================================================== Appendicite aiguë
  'appendicite-aigue': {
    urgences: {
      'abdomen-aigu-chirurgical':
        'Douleur de la fosse iliaque droite qui s’aggrave, vomissements, fièvre, défense puis contracture abdominale',
    },
    formes: [
      {
        nom: 'Appendicite aiguë en position typique (forme commune)',
        type: 'commune',
        description: 'Inflammation de l’appendice iléo-cæcal en position latéro-cæcale ; urgence chirurgicale la plus fréquente.',
        terrain: '- Enfant, adolescent, adulte jeune (pic entre 10 et 30 ans)',
        fonctionnels:
          '- Douleur abdominale débutant en péri-ombilical ou à l’épigastre puis migrant en fosse iliaque droite, continue\n- Nausées, vomissements, anorexie\n- Troubles du transit (constipation, parfois diarrhée)',
        generaux: '- Fébricule 37,5–38,5 °C, langue saburrale, pouls légèrement accéléré',
        physiques:
          '- **Palpation** : douleur maximale au point de McBurney, défense de la fosse iliaque droite\n- Signe de Rovsing, signe de Blumberg, signe du psoas (rétro-cæcale)\n- **Toucher rectal** : douleur à droite (forme pelvienne)',
        paraclinique:
          '- Hyperleucocytose à polynucléaires, CRP élevée\n- Échographie : appendice > 6 mm, non compressible, épanchement\n- Score d’Alvarado pour l’orientation',
        etiologies:
          '- Obstruction de la lumière appendiculaire : stercolithe, hyperplasie lymphoïde (enfant), parasites (oxyures, ascaris), corps étranger\n- Infection bactérienne secondaire (flore digestive)',
        syndromes: ['syndrome-infectieux'],
        examens: [
          ['nfs', 'Hyperleucocytose à polynucléaires.'],
          ['echographie-abdominale', 'Appendice > 6 mm non compressible.'],
        ],
      },
      {
        nom: 'Formes topographiques (rétro-cæcale, pelvienne, sous-hépatique, méso-cœliaque)',
        type: 'topographique',
        description: 'La position de l’appendice modifie le siège de la douleur et retarde souvent le diagnostic.',
        terrain: '- Tout âge ; femme jeune (diagnostic différentiel gynécologique)',
        fonctionnels:
          '- **Rétro-cæcale** : douleur lombaire ou du flanc droit\n- **Pelvienne** : douleur sus-pubienne, signes urinaires (dysurie, pollakiurie) ou rectaux (ténesme, diarrhée)\n- **Sous-hépatique** : douleur de l’hypocondre droit (simule une cholécystite)\n- **Méso-cœliaque** : tableau d’occlusion du grêle fébrile',
        generaux: '- Fièvre modérée',
        physiques:
          '- Rétro-cæcale : psoïtis (flexion de la cuisse droite douloureuse)\n- Pelvienne : douleur au toucher rectal, abdomen parfois peu douloureux',
        paraclinique: '- Échographie, scanner abdominal si doute',
        etiologies: '- Mêmes causes que la forme commune',
        syndromes: [],
        examens: [['scanner-abdominal', 'En cas de doute diagnostique, chez l’adulte.']],
      },
      {
        nom: 'Formes compliquées (abcès, plastron, péritonite)',
        type: 'evolutive',
        description: 'Évolution d’une appendicite non opérée : perforation, abcès ou péritonite généralisée.',
        terrain: '- Retard de consultation, jeune enfant, sujet âgé, traitement par antibiotiques seuls',
        fonctionnels: '- Douleur qui s’étend à tout l’abdomen (péritonite) ou se localise avec une masse (plastron)',
        generaux: '- Fièvre élevée, frissons, altération de l’état général',
        physiques:
          '- **Plastron** : masse douloureuse et mal limitée de la fosse iliaque droite\n- **Abcès** : masse fluctuante, fièvre oscillante\n- **Péritonite** : contracture généralisée, cri de l’ombilic, Douglas douloureux',
        paraclinique: '- Hyperleucocytose importante ; échographie ou scanner : collection, épanchement diffus',
        etiologies: '- Perforation appendiculaire',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-infectieux'],
        examens: [['echographie-abdominale', 'Collection péri-appendiculaire, épanchement.']],
      },
      {
        nom: 'Appendicite de l’enfant, de la femme enceinte et du sujet âgé',
        type: 'terrain',
        description: 'Terrains où le diagnostic est difficile et les complications plus fréquentes.',
        terrain:
          '- **Enfant < 5 ans** : perforation rapide\n- **Femme enceinte** : appendice refoulé vers le haut par l’utérus\n- **Sujet âgé** : symptômes atténués',
        fonctionnels: '- Douleur atypique (haute chez la femme enceinte), vomissements, diarrhée chez l’enfant',
        generaux: '- Fièvre parfois absente chez le sujet âgé',
        physiques: '- Défense moins nette ; tableau occlusif fréquent chez le sujet âgé',
        paraclinique: '- Échographie ; scanner chez le sujet âgé (éliminer un cancer du côlon)',
        etiologies: '- Mêmes causes ; chez le sujet âgé, rechercher une tumeur cæcale',
        syndromes: [],
        examens: [],
      },
    ],
  },

  // =================================================================== Occlusion intestinale aiguë
  'occlusion-intestinale-aigue': {
    urgences: {
      'abdomen-aigu-chirurgical':
        'Douleurs abdominales, vomissements, arrêt des matières et des gaz, ventre ballonné, déshydratation',
    },
    formes: [
      {
        nom: 'Occlusion mécanique du grêle (forme commune)',
        type: 'commune',
        description: 'Obstacle sur l’intestin grêle : début brutal, vomissements précoces.',
        terrain: '- Antécédents de chirurgie abdominale (brides), hernie, ascaridiose chez l’enfant',
        fonctionnels:
          '- Douleur abdominale brutale, en crises (coliques) ou permanente (strangulation)\n- Vomissements précoces, abondants, bilieux puis fécaloïdes\n- Arrêt des matières et des gaz, parfois tardif',
        generaux: '- Déshydratation, tachycardie ; fièvre si souffrance intestinale',
        physiques:
          '- **Inspection** : météorisme modéré, centré, ondes péristaltiques ; cicatrices, orifices herniaires\n- **Palpation** : hernie étranglée (inguinale, crurale, ombilicale) à rechercher systématiquement\n- **Auscultation** : bruits hydro-aériques augmentés',
        paraclinique:
          '- ASP debout : niveaux hydro-aériques centraux, plus larges que hauts\n- Scanner : siège et cause, signes de souffrance\n- Ionogramme, créatinine (troubles hydro-électrolytiques)',
        etiologies:
          '- **Par strangulation** : bride, hernie étranglée, volvulus du grêle, invagination intestinale (nourrisson)\n- **Par obstruction** : boule d’ascaris (enfant), iléus biliaire, tumeur du grêle, corps étranger',
        syndromes: ['syndrome-occlusif', 'syndrome-de-deshydratation-extracellulaire'],
        examens: [
          ['abdomen-sans-preparation', 'Niveaux hydro-aériques centraux.'],
          ['ionogramme', 'Troubles hydro-électrolytiques, insuffisance rénale.'],
        ],
      },
      {
        nom: 'Occlusion du côlon',
        type: 'topographique',
        description: 'Obstacle colique : début plus progressif, météorisme important, vomissements tardifs.',
        terrain: '- Sujet âgé (cancer), volvulus du sigmoïde (fréquent en Afrique, régime riche en fibres)',
        fonctionnels:
          '- Arrêt précoce et complet des matières et des gaz\n- Douleurs moins intenses, vomissements tardifs',
        generaux: '- Altération de l’état général (cancer)',
        physiques:
          '- Météorisme important, asymétrique (volvulus du sigmoïde : « ballon » de l’hypocondre gauche)\n- Toucher rectal : ampoule vide, tumeur, sang',
        paraclinique:
          '- ASP : niveaux hydro-aériques périphériques, plus hauts que larges ; image en « arceau » (volvulus du sigmoïde)\n- Scanner',
        etiologies:
          '- Cancer colorectal, volvulus du sigmoïde ou du cæcum, fécalome (sujet âgé alité), diverticulite',
        syndromes: ['syndrome-occlusif'],
        examens: [['scanner-abdominal', 'Siège, cause et signes de gravité.']],
      },
      {
        nom: 'Iléus paralytique (occlusion fonctionnelle)',
        type: 'etiologique',
        description: 'Paralysie de l’intestin sans obstacle, secondaire à une autre affection.',
        terrain: '- Post-opératoire, péritonite, pancréatite, hypokaliémie, sepsis, médicaments (opioïdes)',
        fonctionnels: '- Distension abdominale, peu de douleurs, vomissements',
        generaux: '- Signes de la cause (fièvre de la péritonite)',
        physiques: '- Météorisme diffus, **silence auscultatoire**',
        paraclinique: '- ASP : distension gazeuse diffuse du grêle et du côlon\n- Kaliémie',
        etiologies: '- Péritonite, pancréatite, colique néphrétique, hypokaliémie, traumatisme rachidien, sepsis',
        syndromes: ['syndrome-occlusif'],
        examens: [['ionogramme', 'Hypokaliémie à corriger.']],
      },
      {
        nom: 'Occlusion avec souffrance intestinale (strangulation)',
        type: 'gravite',
        description: 'Ischémie de l’anse étranglée : risque de nécrose et de perforation, chirurgie immédiate.',
        terrain: '- Hernie étranglée, volvulus, bride',
        fonctionnels: '- Douleur intense, permanente, résistant aux antalgiques',
        generaux: '- Fièvre, tachycardie, choc',
        physiques: '- Défense, contracture, anse fixe et douloureuse ; hernie irréductible et douloureuse',
        paraclinique: '- Lactates élevés, hyperleucocytose ; scanner : défaut de rehaussement de la paroi',
        etiologies: '- Strangulation par bride, hernie, volvulus',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-de-choc'],
        examens: [['lactates', 'Élevés : souffrance intestinale.']],
      },
    ],
  },

  // =================================================================== Péritonite aiguë
  'peritonite-aigue': {
    urgences: {
      'abdomen-aigu-chirurgical':
        'Douleur abdominale intense et diffuse, contracture « ventre de bois », vomissements, fièvre',
      'choc-septique': 'Fièvre ou hypothermie, tachycardie, hypotension, marbrures, oligurie, confusion',
    },
    formes: [
      {
        nom: 'Péritonite aiguë généralisée par perforation (forme commune)',
        type: 'commune',
        description: 'Inflammation de tout le péritoine, le plus souvent secondaire à une perforation d’organe creux.',
        terrain:
          '- Ulcère gastro-duodénal (AINS, *H. pylori*), appendicite négligée, fièvre typhoïde (perforation iléale)\n- Traumatisme abdominal, suites opératoires',
        fonctionnels:
          '- Douleur abdominale brutale (« coup de poignard » de l’ulcère perforé) ou progressive, diffuse\n- Vomissements, arrêt du transit',
        generaux: '- Fièvre (sauf au début de la perforation d’ulcère), tachycardie, faciès péritonéal (traits tirés)',
        physiques:
          '- **Contracture** abdominale généralisée, permanente, douloureuse, invincible (« ventre de bois »)\n- Disparition de la matité pré-hépatique (pneumopéritoine)\n- Toucher rectal : cri du Douglas\n- Silence auscultatoire',
        paraclinique:
          '- ASP debout ou radiographie thoracique : croissant gazeux sous-diaphragmatique (pneumopéritoine)\n- Hyperleucocytose, CRP élevée, insuffisance rénale fonctionnelle',
        etiologies:
          '- **Perforation** : ulcère gastro-duodénal, appendicite, perforation typhique de l’iléon, diverticulite, traumatisme\n- **Diffusion** d’un foyer infectieux : pyosalpinx, cholécystite\n- **Post-opératoire** : lâchage d’anastomose',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-infectieux'],
        examens: [
          ['abdomen-sans-preparation', 'Pneumopéritoine : perforation d’organe creux.'],
          ['scanner-abdominal', 'Cause, collections.'],
        ],
      },
      {
        nom: 'Péritonite par perforation typhique',
        type: 'etiologique',
        description: 'Perforation de l’iléon terminal au cours d’une fièvre typhoïde, fréquente en Afrique centrale.',
        terrain: '- Fièvre prolongée en plateau depuis 2 à 3 semaines, eau non potable, épidémie de typhoïde',
        fonctionnels: '- Douleur abdominale brutale chez un malade fébrile, diarrhée ou constipation',
        generaux: '- Fièvre en plateau, tuphos (prostration), pouls dissocié',
        physiques: '- Défense ou contracture souvent moins marquée (malade affaibli), météorisme',
        paraclinique: '- Pneumopéritoine ; hémocultures (*Salmonella* Typhi), leucopénie',
        etiologies: '- *Salmonella enterica* sérotype Typhi',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-infectieux'],
        examens: [['hemocultures', '*Salmonella* Typhi.']],
      },
      {
        nom: 'Péritonite localisée (abcès, plastron)',
        type: 'topographique',
        description: 'Infection cloisonnée à une région de l’abdomen.',
        terrain: '- Appendicite, sigmoïdite, cholécystite, infection génitale',
        fonctionnels: '- Douleur localisée, fièvre oscillante',
        generaux: '- Fièvre, frissons',
        physiques: '- Défense localisée, masse douloureuse ; douleur au toucher rectal ou vaginal',
        paraclinique: '- Échographie ou scanner : collection',
        etiologies: '- Appendicite, salpingite (pelvipéritonite), diverticulite',
        syndromes: ['syndrome-infectieux'],
        examens: [['echographie-abdominale', 'Collection localisée.']],
      },
      {
        nom: 'Péritonite asthénique (sujet âgé, immunodéprimé, post-opératoire)',
        type: 'terrain',
        description: 'Signes locaux pauvres contrastant avec la gravité générale.',
        terrain: '- Sujet âgé, corticothérapie, VIH, malnutrition, post-opératoire',
        fonctionnels: '- Douleurs modérées, iléus, diarrhée',
        generaux: '- Fièvre ou hypothermie, confusion, défaillance d’organes',
        physiques: '- Pas de contracture : simple sensibilité, météorisme',
        paraclinique: '- Scanner : épanchement, pneumopéritoine ; lactates, défaillances',
        etiologies: '- Mêmes causes ; fistule anastomotique en post-opératoire',
        syndromes: ['syndrome-de-choc'],
        examens: [],
      },
    ],
  },

  // =================================================================== Traumatisme crânien
  'traumatisme-cranien': {
    urgences: {
      'traumatisme-cranien-grave-urgence':
        'Glasgow ≤ 8 ou qui baisse, pupille dilatée d’un côté, déficit d’un côté, convulsions, vomissements répétés, écoulement de sang ou de liquide par le nez ou l’oreille',
    },
    formes: [
      {
        nom: 'Traumatisme crânien léger (forme commune)',
        type: 'commune',
        description: 'Glasgow 13–15 après le traumatisme ; la majorité guérit, mais une aggravation secondaire est possible.',
        terrain: '- Accident de la voie publique (moto), chute, agression ; sujet âgé, anticoagulants, alcool',
        fonctionnels: '- Céphalées, vertiges, nausées, amnésie des faits, perte de connaissance brève',
        generaux: '- Constantes normales',
        physiques:
          '- Score de Glasgow, pupilles, examen neurologique répétés\n- Plaie du scalp, hématome, embarrure palpable\n- Examen du rachis cervical',
        paraclinique:
          '- Scanner cérébral si facteur de risque : Glasgow < 15 à 2 h, vomissements répétés, signes de fracture, convulsion, anticoagulant, âge > 65 ans',
        etiologies: '- Commotion cérébrale ; contusion minime',
        syndromes: [],
        examens: [['scanner-cerebral', 'Selon les critères de risque.']],
      },
      {
        nom: 'Hématome extradural',
        type: 'etiologique',
        description: 'Saignement entre l’os et la dure-mère, le plus souvent artériel (artère méningée moyenne) : urgence neurochirurgicale.',
        terrain: '- Adulte jeune, choc temporal, fracture de la voûte',
        fonctionnels: '- Céphalées croissantes, vomissements',
        generaux: '- Bradycardie et HTA tardives',
        physiques:
          '- **Intervalle libre** : perte de connaissance initiale, réveil, puis aggravation secondaire\n- Mydriase homolatérale, hémiplégie controlatérale (engagement)',
        paraclinique: '- Scanner : lentille biconvexe hyperdense contre la voûte',
        etiologies: '- Lésion de l’artère méningée moyenne par fracture temporale',
        syndromes: ['syndrome-d-hypertension-intracranienne', 'syndrome-d-engagement-cerebral'],
        examens: [['scanner-cerebral', 'Lentille biconvexe : évacuation chirurgicale urgente.']],
      },
      {
        nom: 'Traumatisme crânien grave',
        type: 'gravite',
        description: 'Glasgow ≤ 8 après correction de l’hypoxie et de l’hypotension : coma traumatique.',
        terrain: '- Polytraumatisme, accident à haute énergie',
        generaux: '- Hypoxie, hypotension (aggravent les lésions cérébrales), hyperthermie',
        physiques:
          '- Coma, anisocorie, réactions motrices anormales (décortication, décérébration)\n- Otorragie, rhinorrhée de LCR, ecchymose périorbitaire (fracture de la base)\n- Lésions associées : rachis cervical, thorax, abdomen',
        paraclinique:
          '- Scanner : hématome sous-dural aigu, contusions, œdème, hémorragie méningée\n- Scanner du rachis cervical',
        etiologies:
          '- Contusions cérébrales, hématome sous-dural aigu, lésions axonales diffuses, œdème cérébral',
        syndromes: ['syndrome-d-hypertension-intracranienne', 'syndrome-d-engagement-cerebral'],
        examens: [['scanner-cerebral', 'Lésions intracrâniennes et indication chirurgicale.']],
      },
      {
        nom: 'Hématome sous-dural chronique',
        type: 'evolutive',
        description: 'Collection sous-durale constituée en plusieurs semaines, souvent après un traumatisme minime oublié.',
        terrain: '- Sujet âgé, alcoolisme, anticoagulants',
        fonctionnels: '- Céphalées, troubles du comportement, troubles de la marche',
        generaux: '- Pas de fièvre',
        physiques: '- Syndrome confusionnel, déficit moteur progressif, fluctuations',
        paraclinique: '- Scanner : collection en croissant hypo- ou isodense',
        etiologies: '- Saignement veineux lent (veines ponts) après un traumatisme minime',
        syndromes: ['syndrome-confusionnel', 'syndrome-pyramidal'],
        examens: [['scanner-cerebral', 'Croissant sous-dural.']],
      },
    ],
  },
};
