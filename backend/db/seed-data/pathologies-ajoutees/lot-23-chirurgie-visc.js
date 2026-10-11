'use strict';

/**
 * Lot 23 (chirurgie digestive et viscérale) — abcès de la marge anale, hernie inguinale de
 * l'adulte, traumatisme abdominal fermé, plaie abdominale pénétrante, infection du site
 * opératoire. Rédigé par IA (WSES, ATLS, OMS, Sabiston) : à valider.
 */

const DIG = { departement: 'chirurgie', specialite: 'Chirurgie digestive' };
const VISC = { departement: 'chirurgie', specialite: 'Chirurgie viscérale' };

module.exports = [
  // =================================================================== Abcès marge anale
  {
    ...DIG,
    slug: 'abces-marge-anale',
    nom: 'Abcès de la marge anale',
    resume:
      'Collection purulente péri-anale (cryptoglandulaire) : douleur anale permanente, pulsatile, tuméfaction rouge ; incision-drainage en urgence (les antibiotiques seuls ne suffisent pas) ; rechercher une fistule, un diabète, le VIH, une maladie de Crohn.',
    definition:
      'Suppuration aiguë de la région péri-anale ou péri-rectale, le plus souvent d’origine cryptoglandulaire, pouvant évoluer vers une fistule anale.',
    physiopathologie:
      '## Mécanismes\n- Infection d’une glande anale (crypte), extension vers les espaces péri-anaux\n- Germes : entérobactéries, anaérobies, staphylocoque\n- Fistule anale dans 30 à 50 % des cas',
    diagnostic:
      '## Clinique\n- **Douleur anale** intense, permanente, pulsatile, insomniante\n- **Tuméfaction** rouge, chaude, fluctuante de la marge anale\n- Fièvre possible ; rétention urinaire\n- Abcès profonds (ischio-rectal, intersphinctérien) : douleur sans tuméfaction visible, toucher rectal douloureux\n- Formes graves : gangrène de Fournier (diabète, VIH)',
    examens: [
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'tdr-vih', 'Terrain.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      [
        'deuxieme_intention',
        'echographie-parties-molles',
        'Abcès profond (échographie endoanale si disponible).',
      ],
    ],
    scores: [],
    differentiels: [
      ['Thrombose hémorroïdaire', 'Nodule bleuté, sans fièvre.'],
      ['Fissure anale', 'Douleur à la défécation, ulcération.'],
      ['Kyste pilonidal infecté', 'Sillon interfessier.'],
      ['Maladie de Crohn, tuberculose anale', 'Fistules multiples, chronicité.'],
    ],
    etiologies: '## Facteurs\n- Diabète, VIH, maladie de Crohn, tuberculose, traumatismes, constipation',
    principes: [
      [
        'Drainage',
        'Traitement principal.',
        '- **Incision-drainage** en urgence sous anesthésie (rachianesthésie, kétamine), excision d’un toit cutané\n- Mèche ou drain, soins quotidiens, bains de siège\n- Ne pas attendre la fluctuation',
      ],
      [
        'Antibiotiques',
        'Seulement dans certaines situations.',
        '- Cellulite étendue, diabète, immunodépression, signes systémiques : **amoxicilline-acide clavulanique** ou **ciprofloxacine + métronidazole**',
      ],
      [
        'Suite',
        'Prévenir la récidive.',
        '- Recherche et traitement d’une fistule (chirurgie à distance)\n- Équilibre glycémique, traitement du VIH',
      ],
    ],
    molecules: [
      ['amoxicilline', 'alternative', 'Avec acide clavulanique'],
      ['acide-clavulanique', 'alternative', 'Avec amoxicilline'],
      ['metronidazole', 'alternative', 'Anaérobies'],
      ['ciprofloxacine', 'alternative', 'Avec métronidazole'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['tramadol', 'adjuvant', 'Douleur'],
      ['lidocaine', 'adjuvant', 'Anesthésie locale'],
    ],
    complications: [
      {
        nom: 'Fistule anale',
        description: '30 à 50 % des abcès.',
        traitement: '- Chirurgie (mise à plat, séton)',
        clinique: '- Écoulement persistant',
        paraclinique: '',
      },
      {
        nom: 'Gangrène de Fournier',
        description: 'Fasciite nécrosante périnéale.',
        traitement: '- Débridement urgent, antibiotiques, réanimation',
        clinique: '- Nécrose, crépitation, choc',
        paraclinique: '',
      },
      {
        nom: 'Récidive',
        description: 'Drainage insuffisant.',
        traitement: '- Nouveau drainage',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Guérison rapide après drainage ; récidive ou fistule fréquentes',
    urgences: ['choc-septique'],
    symptomes: [
      ['Douleur anale', 'tres_frequent'],
      ['Tuméfaction des parties molles', 'tres_frequent'],
      ['Fièvre', 'frequent'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'ESCP — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Antalgiques, orientation pour drainage', '- Toute suspicion'],
      hgr: ['- Incision-drainage', '- Gangrène de Fournier, fistule complexe'],
      tert: ['- Chirurgie colorectale', ''],
    },
    alertes: { 'choc-septique': 'Abcès périnéal avec nécrose, crépitation ou hypotension' },
    formes: [
      {
        nom: 'Abcès péri-anal superficiel',
        type: 'commune',
        description: 'Tuméfaction visible.',
        terrain: '- Adulte, homme',
        fonctionnels: '- Douleur pulsatile',
        generaux: '- Fébricule',
        physiques: '- Tuméfaction rouge fluctuante',
        paraclinique: '',
        etiologies: '- Infection cryptoglandulaire',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Gangrène de Fournier',
        type: 'gravite',
        description: 'Fasciite nécrosante périnéale.',
        terrain: '- Diabète, VIH',
        fonctionnels: '- Douleur intense',
        generaux: '- Choc',
        physiques: '- Nécrose, crépitation',
        paraclinique: '',
        etiologies: '- Polymicrobienne',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Hernie inguinale
  {
    ...DIG,
    slug: 'hernie-inguinale-adulte',
    nom: 'Hernie inguinale de l’adulte',
    resume:
      'Tuméfaction de l’aine impulsive à la toux, réductible, très fréquente chez l’homme en Afrique : cure chirurgicale programmée (technique de Lichtenstein avec filet si possible) pour éviter l’étranglement ; signes d’étranglement = urgence.',
    definition:
      'Issue de viscères abdominaux (intestin, épiploon) à travers le canal inguinal (hernie oblique externe, indirecte) ou à travers la paroi postérieure (directe).',
    physiopathologie:
      '## Mécanismes\n- Indirecte : persistance du canal péritonéo-vaginal (homme jeune)\n- Directe : faiblesse de la paroi (sujet âgé)\n- Facteurs : efforts, toux chronique, constipation, dysurie (prostate), ascite',
    diagnostic:
      '## Clinique\n- Tuméfaction de l’aine, parfois jusqu’au scrotum, augmentée par la toux et la station debout\n- **Impulsive et réductible**\n- Gêne, pesanteur\n- Signes d’étranglement : douleur, irréductibilité, occlusion\n\n## Examen\n- Debout et couché, contrôlatéral ; rechercher une cause (toux, prostate)',
    examens: [
      ['deuxieme_intention', 'echographie-parties-molles', 'Doute diagnostique.'],
      ['pretherapeutique', 'nfs', 'Bilan préopératoire.'],
      ['pretherapeutique', 'glycemie', 'Bilan préopératoire.'],
    ],
    scores: [],
    differentiels: [
      ['Hernie crurale', 'Sous le ligament inguinal, femme, risque d’étranglement élevé.'],
      ['Hydrocèle', 'Transillumination positive, indépendante de l’orifice inguinal.'],
      ['Adénopathie inguinale', 'Ferme, non impulsive.'],
      ['Varicocèle', 'Paquet veineux du cordon.'],
    ],
    etiologies:
      '## Facteurs\n- Sexe masculin, travaux de force, toux chronique (BPCO, tuberculose), constipation, prostatisme, ascite',
    principes: [
      [
        'Cure chirurgicale programmée',
        'Éviter l’étranglement.',
        '- Technique de **Lichtenstein** avec filet (y compris filet de moustiquaire stérilisé, technique validée dans les pays à ressources limitées) ou raphie (Shouldice, Bassini)\n- Anesthésie locale (**lidocaïne**, **bupivacaïne**) ou rachianesthésie\n- Antibioprophylaxie selon le contexte (**céfazoline**)',
      ],
      [
        'Facteurs favorisants',
        'Prévenir la récidive.',
        '- Traitement de la toux, de la constipation, de l’obstacle prostatique',
      ],
      ['Étranglement', 'Urgence.', '- Fiche *Hernie étranglée*'],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['bupivacaine', 'alternative', 'Anesthésie locale ou rachianesthésie'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie'],
      ['paracetamol', 'premiere', 'Douleur postopératoire'],
      ['ibuprofene', 'alternative', 'Douleur postopératoire'],
    ],
    complications: [
      {
        nom: 'Étranglement',
        fiche: 'hernie-etranglee',
        description: 'Risque permanent.',
        traitement: '- Chirurgie urgente',
        clinique: '- Douleur, irréductibilité',
        paraclinique: '',
      },
      {
        nom: 'Récidive',
        description: 'Raphie, infection.',
        traitement: '- Reprise avec filet',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Douleurs chroniques, hématome, infection',
        description: 'Postopératoires.',
        traitement: '- Antalgiques, soins',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent après cure avec filet (récidive < 2 %)',
    urgences: [],
    symptomes: [
      ['Tuméfaction inguinale', 'tres_frequent'],
      ['Douleur abdominale', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'EAES — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Diagnostic, orientation pour cure programmée, signes d’étranglement', '- Hernie symptomatique'],
      hgr: ['- Cure de hernie (Lichtenstein)', ''],
      tert: ['- Hernies récidivées complexes', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hernie inguinale indirecte',
        type: 'commune',
        description: 'Homme jeune.',
        terrain: '- Homme',
        fonctionnels: '- Gêne, tuméfaction',
        generaux: '',
        physiques: '- Tuméfaction impulsive, réductible, inguino-scrotale',
        paraclinique: '',
        etiologies: '- Canal péritonéo-vaginal perméable',
        syndromes: [],
      },
      {
        nom: 'Hernie inguino-scrotale volumineuse',
        type: 'gravite',
        description: 'Ancienne.',
        terrain: '- Sujet âgé',
        fonctionnels: '- Gêne fonctionnelle',
        generaux: '',
        physiques: '- Masse scrotale',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Trauma abdominal fermé
  {
    ...VISC,
    slug: 'traumatisme-abdominal-ferme',
    nom: 'Traumatisme abdominal fermé',
    resume:
      'Accidents de la route, chutes, coups : lésions de la rate, du foie, des reins, de l’intestin ; ABCDE, échographie FAST ; patient instable avec épanchement = laparotomie ; stable = surveillance rapprochée (traitement non opératoire possible) ou scanner.',
    definition:
      'Lésion des organes abdominaux sans plaie pénétrante, consécutive à un choc direct ou à une décélération.',
    physiopathologie:
      '## Lésions\n- **Organes pleins** (rate, foie, rein) : hémorragie interne\n- **Organes creux** (intestin, vessie) : péritonite, souvent retardée\n- Pancréas, duodénum, diaphragme, vaisseaux',
    diagnostic:
      '## Évaluation\n- ABCDE, pouls, PA, index de choc\n- Ecchymoses (marque de ceinture), douleur, défense, distension\n- Douleur de l’épaule gauche (rate), hématurie (rein, vessie)\n\n## Examens\n- **FAST** (épanchement péritonéal, péricardique)\n- Hb répétée, groupage\n- Scanner chez le patient stable si disponible\n- Radiographie thoracique et du bassin',
    examens: [
      ['confirmation', 'echographie-abdominale', 'FAST : épanchement.'],
      ['premiere_intention', 'nfs', 'Hb répétée.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Patient stable.'],
      ['premiere_intention', 'radiographie-thoracique', 'Lésions thoraciques associées.'],
      ['gravite', 'lactates', 'Choc.'],
    ],
    scores: ['index-de-choc', 'glasgow'],
    differentiels: [
      ['Hématome de la paroi', 'Pas d’épanchement intrapéritonéal.'],
      ['Fracture du bassin', 'Hémorragie rétropéritonéale.'],
    ],
    etiologies:
      '## Mécanismes\n- Accidents de la route (motos), chutes de hauteur (arbres), coups, écrasements\n- Rate pathologique (paludisme, drépanocytose) : rupture pour un traumatisme minime',
    principes: [
      [
        'Réanimation',
        'Restaurer la perfusion.',
        '- ABCDE, 2 voies veineuses, **remplissage modéré** (hypotension permissive sans traumatisme crânien), **transfusion** précoce\n- **Acide tranexamique** dans les 3 heures\n- Sonde gastrique, sonde urinaire (sauf urétrorragie)',
      ],
      [
        'Instable avec FAST positive',
        'Arrêter l’hémorragie.',
        '- **Laparotomie** immédiate : splénectomie, packing hépatique, réparation des lésions',
      ],
      [
        'Stable',
        'Surveiller ou imager.',
        '- Scanner si disponible ; traitement non opératoire des lésions spléniques et hépatiques en milieu chirurgical\n- Surveillance clinique et Hb rapprochées, examens répétés (perforation retardée)\n- Après splénectomie : vaccins (pneumocoque, méningocoque, Hib), antibioprophylaxie, prévention du paludisme',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['acide-tranexamique', 'premiere', 'Hémorragie (dans les 3 h)'],
      ['morphine', 'premiere', 'Analgésie titrée'],
      ['ketamine', 'alternative', 'Analgésie, anesthésie'],
      ['ceftriaxone', 'adjuvant', 'Lésion d’organe creux'],
      ['metronidazole', 'adjuvant', 'Lésion d’organe creux'],
      ['vaccin-pneumococcique-conjugue', 'adjuvant', 'Après splénectomie'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        description: 'Rate, foie.',
        traitement: '- Transfusion, laparotomie',
        clinique: '- Tachycardie, hypotension',
        paraclinique: '- FAST',
      },
      {
        nom: 'Péritonite par perforation',
        fiche: 'peritonite-aigue',
        description: 'Organe creux, diagnostic retardé.',
        traitement: '- Chirurgie',
        clinique: '- Défense secondaire, fièvre',
        paraclinique: '- Pneumopéritoine',
      },
      {
        nom: 'Infections après splénectomie',
        description: 'Pneumocoque, paludisme grave.',
        traitement: '- Vaccins, antibioprophylaxie',
        clinique: '- Fièvre',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Dépend de la rapidité de la réanimation et de la chirurgie',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Lésions traumatiques', 'tres_frequent'],
      ['Hypotension', 'frequent'],
      ['Distension abdominale', 'occasionnel'],
      ['Hématurie', 'occasionnel'],
    ],
    sources: [
      'ACS TQIP — recommandations de pratique clinique',
      'WSES — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- ABCDE, voie veineuse, acide tranexamique, transfert',
        '- Tout traumatisme abdominal significatif',
      ],
      hgr: ['- FAST, transfusion, laparotomie', ''],
      tert: ['- Scanner, radiologie interventionnelle, réanimation', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Traumatisé avec douleur abdominale, défense et tachycardie' },
    formes: [
      {
        nom: 'Rupture de rate',
        type: 'commune',
        description: 'Hémorragie interne.',
        terrain: '- Accident, rate palustre',
        fonctionnels: '- Douleur de l’hypochondre gauche, épaule gauche',
        generaux: '- Pâleur, tachycardie',
        physiques: '- Défense',
        paraclinique: '- Épanchement à la FAST',
        etiologies: '',
        syndromes: ['syndrome-d-hemorragie-interne'],
        examens: [['echographie-abdominale', 'FAST']],
      },
      {
        nom: 'Perforation d’organe creux',
        type: 'etiologique',
        description: 'Péritonite retardée.',
        terrain: '- Marque de ceinture, choc direct',
        fonctionnels: '- Douleur croissante',
        generaux: '- Fièvre secondaire',
        physiques: '- Défense',
        paraclinique: '- Pneumopéritoine',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== Plaie pénétrante
  {
    ...VISC,
    slug: 'plaie-abdominale-penetrante',
    nom: 'Plaie abdominale pénétrante',
    resume:
      'Plaie par arme blanche ou par balle (violences, conflits) : ABCDE, ne pas retirer l’objet ; choc, péritonite ou éviscération = laparotomie ; arme blanche chez un patient stable : exploration locale ou surveillance ; balle = laparotomie quasi systématique ; antibiotiques et prévention du tétanos.',
    definition:
      'Plaie de la paroi abdominale franchissant le péritoine, par arme blanche, arme à feu ou éclat, avec risque de lésions viscérales et vasculaires.',
    physiopathologie:
      '## Mécanismes\n- Arme blanche : lésions sur le trajet (foie, intestin grêle, côlon)\n- Arme à feu et éclats : lésions multiples, énergie élevée, contamination\n- Hémorragie, péritonite, lésions thoraciques associées (plaies thoraco-abdominales)',
    diagnostic:
      '## Évaluation\n- ABCDE, recherche de toutes les plaies (dos, périnée, aisselles)\n- Choc, défense, éviscération, hématémèse, rectorragie, hématurie\n- FAST, radiographie (projectiles, pneumothorax, pneumopéritoine)',
    examens: [
      ['premiere_intention', 'echographie-abdominale', 'FAST.'],
      ['premiere_intention', 'radiographie-thoracique', 'Pneumothorax, hémothorax, pneumopéritoine.'],
      ['premiere_intention', 'nfs', 'Hb.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Patient stable.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['Plaie pariétale non pénétrante', 'Exploration locale : aponévrose intacte.'],
      ['traumatisme-abdominal-ferme', 'Pas de plaie.'],
    ],
    etiologies: '## Contextes\n- Violences, conflits armés (Est de la RDC), braquages, accidents',
    principes: [
      [
        'Réanimation',
        'Stabiliser.',
        '- ABCDE, compression, **transfusion**, **acide tranexamique**\n- Ne pas retirer un objet enfoncé ; éviscération : couvrir de compresses humides stériles, ne pas réintégrer\n- **Antibiotiques** (**ceftriaxone** + **métronidazole**), prévention du tétanos, analgésie',
      ],
      [
        'Indications de laparotomie',
        'Réparer les lésions.',
        '- Choc, péritonite, éviscération, hémorragie digestive ou urinaire, plaie par balle\n- Chirurgie d’écourtement (« damage control ») si instabilité majeure',
      ],
      [
        'Patient stable (arme blanche)',
        'Éviter les laparotomies inutiles.',
        '- Exploration locale de la plaie, examens répétés toutes les 4 h, FAST, scanner si disponible',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Antibiothérapie'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['acide-tranexamique', 'premiere', 'Hémorragie'],
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['morphine', 'premiere', 'Analgésie'],
      ['serum-immunoglobuline-antitetanique', 'premiere', 'Prévention du tétanos'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Vaccination'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        description: 'Lésions vasculaires ou hépatiques.',
        traitement: '- Transfusion, chirurgie',
        clinique: '- Choc',
        paraclinique: '',
      },
      {
        nom: 'Péritonite et abcès',
        fiche: 'peritonite-aigue',
        description: 'Lésions intestinales.',
        traitement: '- Chirurgie, antibiotiques',
        clinique: '- Fièvre, défense',
        paraclinique: '',
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
      '## Pronostic\n- Dépend des lésions et du délai ; les plaies par balle ont une mortalité plus élevée',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Douleur abdominale', 'tres_frequent'],
      ['Hypotension', 'frequent'],
      ['Hémorragies', 'frequent'],
    ],
    sources: [
      'ACS TQIP — recommandations de pratique clinique',
      'WSES — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Compression, voie veineuse, antibiotiques, antitétanique, transfert',
        '- Toute plaie abdominale',
      ],
      hgr: ['- Laparotomie, transfusion', ''],
      tert: ['- Chirurgie de guerre, réanimation', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Plaie de l’abdomen avec choc, défense ou éviscération' },
    formes: [
      {
        nom: 'Plaie par arme blanche',
        type: 'commune',
        description: 'Lésions sur le trajet.',
        terrain: '- Violences',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Plaie, défense variable',
        paraclinique: '- FAST',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Plaie par balle',
        type: 'gravite',
        description: 'Lésions multiples.',
        terrain: '- Conflits, braquages',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Orifices d’entrée et de sortie',
        paraclinique: '- Projectiles',
        etiologies: '',
        syndromes: ['syndrome-d-hemorragie-interne', 'syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== ISO
  {
    ...VISC,
    slug: 'infection-du-site-operatoire',
    nom: 'Infection du site opératoire',
    resume:
      'Infection de la plaie ou de l’organe opéré dans les 30 jours (90 si prothèse) : rougeur, douleur, écoulement purulent, fièvre ; ouverture et drainage de la plaie, soins, antibiotiques si cellulite ou signes systémiques ; reprise chirurgicale si collection profonde ; prévention par l’antibioprophylaxie et l’asepsie.',
    definition:
      'Infection survenant au niveau de l’incision (superficielle ou profonde) ou de l’organe/espace opéré, dans les 30 jours suivant l’intervention (90 jours en cas d’implant).',
    physiopathologie:
      '## Mécanismes\n- Contamination peropératoire (flore cutanée, contenu digestif)\n- Facteurs : chirurgie contaminée (côlon, césarienne en travail), durée, hémostase imparfaite, malnutrition, diabète, VIH, obésité, absence d’antibioprophylaxie',
    diagnostic:
      '## Clinique\n- Superficielle : rougeur, chaleur, douleur, écoulement purulent de la cicatrice\n- Profonde : désunion, collection sous-aponévrotique, fièvre\n- Organe/espace : abcès intra-abdominal, péritonite (fièvre, iléus, défense)\n\n## Examens\n- Prélèvement du pus (Gram, culture), NFS, CRP, échographie (collection)',
    examens: [
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Suivi.'],
      ['premiere_intention', 'echographie-abdominale', 'Collection profonde.'],
      ['gravite', 'hemocultures', 'Signes systémiques.'],
      ['etiologique', 'glycemie', 'Diabète.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['Hématome ou sérome', 'Collection non purulente.'],
      ['thrombose-veineuse-profonde', 'Fièvre postopératoire, mollet.'],
      ['Infection urinaire ou pulmonaire', 'Autre foyer de fièvre postopératoire.'],
      ['paludisme-simple', 'Fièvre en zone d’endémie.'],
    ],
    etiologies:
      '## Germes\n- *Staphylococcus aureus*, streptocoques (superficielles)\n- Entérobactéries, anaérobies (chirurgie digestive, gynécologique)',
    principes: [
      [
        'Infection superficielle',
        'Drainer.',
        '- **Ouverture** de la plaie, évacuation, lavage, pansements quotidiens\n- Antibiotique seulement si cellulite ou signes systémiques : **cloxacilline** ou selon le site',
      ],
      [
        'Infection profonde ou d’organe',
        'Contrôler la source.',
        '- Drainage (percutané ou chirurgical), reprise chirurgicale si péritonite\n- Antibiotiques adaptés (**ceftriaxone** + **métronidazole** en chirurgie digestive)',
      ],
      [
        'Prévention',
        'Réduire les ISO.',
        '- **Antibioprophylaxie** (**céfazoline** 2 g IV dans les 60 min avant l’incision), pas de prolongation\n- Lavage des mains, antisepsie à la **chlorhexidine alcoolique**, pas de rasage au rasoir\n- Normothermie, équilibre glycémique, liste de contrôle de la sécurité chirurgicale (OMS)',
      ],
    ],
    molecules: [
      ['cefazoline', 'premiere', 'Antibioprophylaxie'],
      ['cloxacilline', 'premiere', 'Infection superficielle avec cellulite'],
      ['ceftriaxone', 'premiere', 'Infection profonde digestive'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['chlorhexidine-gluconate', 'premiere', 'Antisepsie'],
      ['povidone-iodee', 'alternative', 'Antisepsie'],
    ],
    complications: [
      {
        nom: 'Éviscération',
        description: 'Désunion de la paroi.',
        traitement: '- Reprise chirurgicale',
        clinique: '- Issue d’anses intestinales',
        paraclinique: '',
      },
      {
        nom: 'Péritonite postopératoire',
        fiche: 'peritonite-aigue',
        description: 'Fistule, abcès.',
        traitement: '- Reprise',
        clinique: '- Fièvre, iléus',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Dissémination.',
        traitement: '- Antibiotiques, drainage',
        clinique: '- Hypotension',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pour les infections superficielles drainées ; mortalité notable pour les infections d’organe',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Tuméfaction des parties molles', 'frequent'],
      ['Éruption cutanée', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'The management of intra-abdominal infections from a global perspective: 2017 WSES guidelines',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Soins de plaie, ouverture d’une infection superficielle, orientation',
        '- Fièvre, collection profonde',
      ],
      hgr: ['- Drainage, reprise chirurgicale, antibiotiques', ''],
      tert: ['- Réanimation, radiologie interventionnelle', ''],
    },
    alertes: { 'choc-septique': 'Opéré récent avec fièvre et hypotension' },
    formes: [
      {
        nom: 'Infection superficielle de la plaie',
        type: 'commune',
        description: 'Cicatrice inflammatoire.',
        terrain: '- J4 à J7 postopératoire',
        fonctionnels: '- Douleur de la cicatrice',
        generaux: '- Fébricule',
        physiques: '- Rougeur, écoulement purulent',
        paraclinique: '- Pus à la culture',
        etiologies: '- S. aureus',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Abcès intra-abdominal postopératoire',
        type: 'gravite',
        description: 'Infection d’organe.',
        terrain: '- Chirurgie digestive',
        fonctionnels: '- Douleur, iléus',
        generaux: '- Fièvre élevée',
        physiques: '- Défense',
        paraclinique: '- Collection à l’échographie',
        etiologies: '- Polymicrobienne',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
    ],
  },
];
