'use strict';

/**
 * Lot 21 (gynécologie) — fibromes utérins, kystes de l'ovaire, torsion d'annexe,
 * ménométrorragies, violences sexuelles (prise en charge médicale), saignements après la
 * ménopause. Rédigé par IA (FIGO, ACOG, RCOG, OMS) : à valider.
 */

const GYN = { departement: 'gynecologie-obstetrique', specialite: 'Gynécologie' };

module.exports = [
  // =================================================================== Fibromes
  {
    ...GYN,
    slug: 'fibromes-uterins',
    nom: 'Fibromes utérins',
    resume:
      'Tumeurs bénignes du muscle utérin, très fréquentes chez la femme africaine : ménorragies, anémie, masse pelvienne, compression, infertilité ; échographie ; traitement de l’anémie, acide tranexamique, progestatifs ; myomectomie ou hystérectomie selon les symptômes et le désir de grossesse.',
    definition:
      'Tumeurs bénignes (léiomyomes) développées aux dépens du myomètre, sous-séreuses, interstitielles ou sous-muqueuses (classification FIGO), hormonodépendantes.',
    physiopathologie:
      '## Mécanismes\n- Prolifération monoclonale de cellules musculaires lisses, stimulée par les œstrogènes et la progestérone\n- Plus fréquents, plus précoces et plus volumineux chez la femme noire\n- Régression après la ménopause',
    diagnostic:
      '## Clinique\n- Souvent asymptomatiques\n- **Ménorragies** (fibromes sous-muqueux, interstitiels), anémie\n- **Masse pelvienne** ou abdominale, pesanteur, pollakiurie, constipation\n- Douleurs (nécrobiose aseptique pendant la grossesse, torsion d’un fibrome pédiculé)\n- Infertilité, fausses couches\n\n## Examens\n- **Échographie pelvienne** (sus-pubienne et endovaginale) : nombre, taille, localisation\n- Hb, β-hCG',
    examens: [
      ['confirmation', 'echographie-pelvienne', 'Nombre, taille, localisation des fibromes.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'beta-hcg', 'Éliminer une grossesse.'],
      ['premiere_intention', 'ferritine', 'Carence martiale.'],
      ['deuxieme_intention', 'hysterosalpingographie', 'Fibrome sous-muqueux, bilan d’infertilité.'],
      ['etiologique', 'biopsie-histologie', 'Biopsie de l’endomètre si saignements atypiques après 40 ans.'],
    ],
    scores: [],
    differentiels: [
      ['Grossesse', 'β-hCG positive.'],
      ['kystes-de-l-ovaire', 'Masse latéro-utérine à l’échographie.'],
      ['Cancer de l’endomètre ou sarcome', 'Saignements après la ménopause, croissance rapide.'],
      ['Adénomyose', 'Utérus globalement augmenté, dysménorrhée.'],
    ],
    etiologies:
      '## Facteurs\n- Femme noire, âge 30–50 ans, nulliparité, obésité, antécédents familiaux, ménarche précoce',
    principes: [
      [
        'Traitement médical',
        'Contrôler les saignements.',
        '- Correction de l’anémie : **fer** oral ou IV, transfusion si sévère\n- **Acide tranexamique** 1 g 3 fois par jour pendant les règles\n- **AINS** (**ibuprofène**, acide méfénamique) pendant les règles\n- Progestatifs (**noréthistérone**, médroxyprogestérone, DIU au lévonorgestrel) ; analogues de la GnRH en préparation à la chirurgie (centres spécialisés)',
      ],
      [
        'Chirurgie',
        'Traiter les fibromes symptomatiques.',
        '- **Myomectomie** (désir de grossesse) par laparotomie, cœlioscopie ou hystéroscopie (sous-muqueux)\n- **Hystérectomie** si projet parental achevé, fibromes multiples symptomatiques\n- Préparation : correction de l’anémie, sang disponible',
      ],
      [
        'Grossesse',
        'Gérer les complications.',
        '- Nécrobiose : antalgiques (paracétamol), repos\n- Fibrome prævia : césarienne',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Ménorragies'],
      ['ibuprofene', 'premiere', 'Ménorragies, douleurs'],
      ['acide-mefenamique', 'alternative', 'Ménorragies'],
      ['norethisterone', 'alternative', 'Progestatif'],
      ['medroxyprogesterone', 'alternative', 'Progestatif'],
      ['fumarate-ferreux-fer', 'premiere', 'Anémie'],
      ['gluconate-ferrique-de-sodium', 'deuxieme', 'Anémie sévère avant chirurgie'],
    ],
    complications: [
      {
        nom: 'Anémie ferriprive',
        fiche: 'anemie-ferriprive',
        description: 'Ménorragies.',
        traitement: '- Fer, traitement des saignements',
        clinique: '- Pâleur',
        paraclinique: '- Hb',
      },
      {
        nom: 'Nécrobiose aseptique',
        description: 'Surtout pendant la grossesse.',
        traitement: '- Antalgiques',
        clinique: '- Douleur, fièvre modérée',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Infertilité et fausses couches',
        fiche: 'infertilite-du-couple',
        description: 'Fibromes sous-muqueux.',
        traitement: '- Myomectomie',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Compression urinaire',
        description: 'Gros fibromes.',
        traitement: '- Chirurgie',
        clinique: '- Pollakiurie, rétention',
        paraclinique: '- Échographie rénale',
      },
    ],
    evolution: '## Pronostic\n- Bénin ; récidive possible après myomectomie ; régression à la ménopause',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Masse pelvienne', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Infertilité', 'occasionnel'],
    ],
    sources: [
      'FIGO — recommandations de pratique clinique',
      'ACOG — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Repérage, traitement de l’anémie, AINS et acide tranexamique',
        '- Saignements abondants, masse, infertilité',
      ],
      hgr: ['- Échographie, myomectomie, hystérectomie', ''],
      tert: ['- Hystéroscopie, cœlioscopie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fibrome hémorragique',
        type: 'commune',
        description: 'Ménorragies.',
        terrain: '- Femme de 30 à 50 ans',
        fonctionnels: '- Règles abondantes et prolongées',
        generaux: '- Asthénie',
        physiques: '- Utérus augmenté, irrégulier',
        paraclinique: '- Fibrome sous-muqueux ou interstitiel',
        etiologies: '- Léiomyome',
        syndromes: ['syndrome-anemique'],
        examens: [['echographie-pelvienne', 'Diagnostic']],
      },
      {
        nom: 'Utérus polymyomateux volumineux',
        type: 'gravite',
        description: 'Compression.',
        terrain: '- Fibromes multiples',
        fonctionnels: '- Pesanteur, troubles urinaires',
        generaux: '',
        physiques: '- Masse abdomino-pelvienne',
        paraclinique: '- Hydronéphrose possible',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Kystes de l'ovaire
  {
    ...GYN,
    slug: 'kystes-de-l-ovaire',
    nom: 'Kystes de l’ovaire',
    resume:
      'Masse liquidienne ovarienne : le plus souvent fonctionnelle (régresse en 2–3 mois) ; échographie, β-hCG ; surveiller les kystes simples < 5 cm ; chirurgie si persistant, volumineux, suspect ou compliqué (torsion, rupture, hémorragie).',
    definition:
      'Formation kystique de l’ovaire, fonctionnelle (folliculaire, corps jaune) ou organique (dermoïde, endométriome, cystadénome, tumeur maligne).',
    physiopathologie:
      '## Types\n- **Fonctionnels** : défaut de rupture du follicule ou persistance du corps jaune\n- **Organiques** : bénins (kyste dermoïde, cystadénome séreux ou mucineux, endométriome) ou malins\n- Complications : torsion, rupture, hémorragie intrakystique',
    diagnostic:
      '## Clinique\n- Souvent découverte fortuite\n- Douleur pelvienne, pesanteur, troubles des règles\n- Masse latéro-utérine au toucher vaginal\n\n## Échographie\n- Kyste simple (anéchogène, paroi fine) : fonctionnel probable\n- Critères de suspicion : végétations, cloisons épaisses, composante solide, ascite, Doppler vascularisé (classification IOTA/O-RADS)\n- β-hCG (GEU), marqueurs (CA-125) si suspect',
    examens: [
      ['confirmation', 'echographie-pelvienne', 'Caractérisation du kyste.'],
      ['premiere_intention', 'beta-hcg', 'Éliminer une grossesse extra-utérine.'],
      ['premiere_intention', 'nfs', 'Hémorragie, infection.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Kyste suspect, bilan d’extension.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Analyse de la pièce opératoire.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-extra-uterine', 'β-hCG positive.'],
      ['abces-tubo-ovarien', 'Fièvre, masse complexe.'],
      ['fibromes-uterins', 'Fibrome sous-séreux pédiculé.'],
      ['Cancer de l’ovaire', 'Composante solide, ascite, âge.'],
    ],
    etiologies:
      '## Facteurs\n- Âge de procréation (kystes fonctionnels), stimulation ovarienne, endométriose',
    principes: [
      [
        'Kyste simple',
        'Surveiller.',
        '- Kyste anéchogène < 5 cm chez la femme non ménopausée : contrôle échographique à 6–12 semaines (après les règles)\n- Antalgiques si douleur',
      ],
      [
        'Kyste persistant, volumineux ou suspect',
        'Opérer.',
        '- Kystectomie (conservation de l’ovaire) par cœlioscopie ou laparotomie\n- Kyste suspect : annexectomie, orientation oncologique, analyse histologique',
      ],
      [
        'Complications',
        'Urgence.',
        '- Torsion : chirurgie en urgence (détorsion)\n- Rupture hémorragique avec hémopéritoine : chirurgie, transfusion',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'premiere', 'Douleur'],
      ['levonorgestrel', 'alternative', 'Contraception (prévention des kystes fonctionnels récidivants)'],
    ],
    complications: [
      {
        nom: 'Torsion d’annexe',
        fiche: 'torsion-d-annexe',
        description: 'Kyste de 5 à 10 cm.',
        traitement: '- Chirurgie urgente',
        clinique: '- Douleur brutale, vomissements',
        paraclinique: '- Échographie Doppler',
      },
      {
        nom: 'Rupture et hémopéritoine',
        description: 'Corps jaune hémorragique.',
        traitement: '- Chirurgie si instabilité',
        clinique: '- Douleur, pâleur',
        paraclinique: '- Épanchement',
      },
      {
        nom: 'Malignité',
        description: 'Kystes organiques suspects.',
        traitement: '- Chirurgie, oncologie',
        clinique: '- Ascite, amaigrissement',
        paraclinique: '- Échographie, scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Kystes fonctionnels : disparition spontanée ; kystes organiques : bon pronostic après chirurgie si bénins',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur pelvienne', 'frequent'],
      ['Masse pelvienne', 'frequent'],
      ['Saignement vaginal', 'occasionnel'],
      ['Dyspareunie', 'occasionnel'],
    ],
    sources: [
      'ACOG — recommandations de pratique clinique',
      'RCOG — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Repérage, β-hCG, antalgiques, orientation pour échographie',
        '- Douleur aiguë, masse volumineuse',
      ],
      hgr: ['- Échographie, chirurgie', ''],
      tert: ['- Oncologie gynécologique', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Douleur pelvienne brutale avec vomissements chez une femme ayant un kyste',
    },
    formes: [
      {
        nom: 'Kyste fonctionnel',
        type: 'commune',
        description: 'Kyste simple.',
        terrain: '- Femme jeune',
        fonctionnels: '- Pesanteur, retard de règles',
        generaux: '',
        physiques: '- Masse latéro-utérine',
        paraclinique: '- Kyste anéchogène < 5 cm',
        etiologies: '- Folliculaire, corps jaune',
        syndromes: [],
        examens: [['echographie-pelvienne', 'Caractérisation']],
      },
      {
        nom: 'Kyste organique suspect',
        type: 'gravite',
        description: 'Risque de malignité.',
        terrain: '- Femme > 40 ans, ménopause',
        fonctionnels: '- Augmentation du volume abdominal',
        generaux: '- Amaigrissement',
        physiques: '- Masse fixée, ascite',
        paraclinique: '- Végétations, composante solide',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Torsion d'annexe
  {
    ...GYN,
    slug: 'torsion-d-annexe',
    nom: 'Torsion d’annexe',
    resume:
      'Urgence chirurgicale gynécologique : douleur pelvienne brutale latéralisée avec nausées et vomissements chez une femme jeune, souvent sur kyste ; échographie (Doppler), cœlioscopie ou laparotomie en urgence pour détorsion et conservation de l’ovaire.',
    definition:
      'Rotation de l’ovaire et/ou de la trompe autour de leur axe vasculaire, entraînant une ischémie puis une nécrose si elle n’est pas levée rapidement.',
    physiopathologie:
      '## Mécanismes\n- Ovaire alourdi par un kyste ou une tumeur (5–10 cm), ovaires stimulés, grossesse\n- Compression veineuse puis artérielle : œdème, ischémie, nécrose\n- Possible chez l’enfant et l’adolescente sur ovaire sain',
    diagnostic:
      '## Clinique\n- **Douleur pelvienne brutale**, intense, latéralisée, parfois intermittente\n- **Nausées, vomissements**\n- Défense, masse latéro-utérine douloureuse\n- Fébricule possible\n\n## Examens\n- β-hCG (GEU), NFS\n- **Échographie** : ovaire augmenté, œdématié, masse ; Doppler (un flux conservé n’élimine pas la torsion)\n- Doute : cœlioscopie diagnostique',
    examens: [
      ['confirmation', 'echographie-pelvienne', 'Ovaire augmenté, masse, Doppler.'],
      ['premiere_intention', 'beta-hcg', 'Grossesse extra-utérine.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose modérée.'],
      ['premiere_intention', 'ecbu', 'Diagnostic différentiel.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-extra-uterine', 'β-hCG positive.'],
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite, fièvre.'],
      ['Colique néphrétique', 'Douleur lombaire irradiant aux organes génitaux, hématurie.'],
      ['infection-genitale-haute', 'Fièvre, leucorrhées, douleur bilatérale.'],
      ['Rupture de kyste', 'Épanchement, douleur moins brutale.'],
    ],
    etiologies:
      '## Facteurs\n- Kyste ou tumeur ovarienne, stimulation ovarienne, grossesse, ligatures tubaires',
    principes: [
      [
        'Chirurgie en urgence',
        'Sauver l’ovaire.',
        '- **Cœlioscopie** (ou laparotomie) : **détorsion** et conservation de l’ovaire même s’il paraît sombre\n- Kystectomie en même temps ou à distance\n- Annexectomie seulement si nécrose franche ou tumeur suspecte chez la femme ménopausée',
      ],
      [
        'Mesures associées',
        'Soulager.',
        '- Antalgiques (**morphine**), antiémétiques, voie veineuse, à jeun',
      ],
    ],
    molecules: [
      ['morphine', 'premiere', 'Douleur'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['ketamine', 'adjuvant', 'Anesthésie'],
    ],
    complications: [
      {
        nom: 'Nécrose ovarienne et perte de l’ovaire',
        description: 'Retard de prise en charge.',
        traitement: '- Annexectomie',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Péritonite',
        fiche: 'peritonite-aigue',
        description: 'Nécrose surinfectée.',
        traitement: '- Chirurgie, antibiotiques',
        clinique: '- Défense, fièvre',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Conservation de l’ovaire dans la majorité des cas si la chirurgie est rapide',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur pelvienne', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Fièvre', 'rare'],
    ],
    sources: [
      'ACOG — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Reconnaître, β-hCG, antalgiques, transfert urgent', '- Toute suspicion'],
      hgr: ['- Échographie, laparotomie ou cœlioscopie', ''],
      tert: ['- Cœlioscopie', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Douleur pelvienne brutale latéralisée avec vomissements' },
    formes: [
      {
        nom: 'Torsion sur kyste',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Femme jeune avec kyste',
        fonctionnels: '- Douleur brutale, vomissements',
        generaux: '',
        physiques: '- Masse latéro-utérine douloureuse',
        paraclinique: '- Ovaire augmenté',
        etiologies: '- Kyste de 5 à 10 cm',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== Ménométrorragies
  {
    ...GYN,
    slug: 'menometrorragies',
    nom: 'Ménométrorragies',
    resume:
      'Saignements utérins anormaux (abondants, prolongés ou irréguliers) : classification PALM-COEIN ; éliminer grossesse et cancer ; causes fréquentes : fibromes, troubles de l’ovulation, contraception ; acide tranexamique, AINS, progestatifs, traitement de l’anémie.',
    definition:
      'Saignements utérins anormaux par leur abondance (ménorragies > 80 mL), leur durée (> 8 jours) ou leur survenue en dehors des règles (métrorragies), en dehors de la grossesse.',
    physiopathologie:
      '## Classification FIGO PALM-COEIN\n- **Causes structurelles** (PALM) : Polype, Adénomyose, Léiomyome (fibrome), Malignité\n- **Causes non structurelles** (COEIN) : Coagulopathie, troubles de l’Ovulation, Endométriales, Iatrogènes (contraception, anticoagulants), Non classées',
    diagnostic:
      '## Démarche\n- **β-hCG** systématique\n- Retentissement : Hb, signes d’anémie, état hémodynamique\n- Interrogatoire : âge, cycles, contraception, traitements, troubles de la coagulation\n- Examen au spéculum (col), toucher vaginal\n- **Échographie pelvienne**\n- Biopsie de l’endomètre après 45 ans ou si facteurs de risque\n- TSH, bilan de coagulation selon le contexte',
    examens: [
      ['premiere_intention', 'beta-hcg', 'Éliminer une grossesse.'],
      ['premiere_intention', 'nfs', 'Anémie, plaquettes.'],
      ['premiere_intention', 'echographie-pelvienne', 'Fibromes, polypes, épaisseur endométriale.'],
      ['etiologique', 'hemostase', 'Coagulopathie.'],
      ['etiologique', 'tsh', 'Dysthyroïdie.'],
      ['etiologique', 'depistage-col-iva-hpv', 'Lésion du col.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Biopsie de l’endomètre après 45 ans.'],
    ],
    scores: [],
    differentiels: [
      ['saignements-premier-trimestre', 'Grossesse.'],
      ['cancer-du-col-de-l-uterus', 'Saignements provoqués par les rapports.'],
      ['infection-genitale-haute', 'Fièvre, douleur.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Fibromes, polypes, adénomyose\n- Anovulation (adolescence, périménopause, syndrome des ovaires polykystiques)\n- Contraception (DIU, progestatifs), anticoagulants\n- Cancers (col, endomètre)',
    principes: [
      [
        'Hémorragie aiguë',
        'Stabiliser.',
        '- Remplissage, transfusion si nécessaire\n- **Acide tranexamique** 1 g IV ou per os 3 fois par jour\n- Progestatif à forte dose (**noréthistérone** 5 mg 3 fois par jour) ou œstroprogestatif\n- Curetage hémostatique en dernier recours',
      ],
      [
        'Traitement de fond',
        'Réduire les saignements.',
        '- **AINS** pendant les règles, acide tranexamique\n- **DIU au lévonorgestrel** (très efficace), progestatifs, pilule combinée\n- Traitement de la cause (fibrome, polype)\n- **Fer** pour l’anémie',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Ménorragies'],
      ['ibuprofene', 'premiere', 'Ménorragies'],
      ['acide-mefenamique', 'alternative', 'Ménorragies'],
      ['norethisterone', 'premiere', 'Progestatif'],
      ['levonorgestrel', 'alternative', 'DIU hormonal, pilule'],
      ['ethinylestradiol', 'alternative', 'Pilule combinée'],
      ['fumarate-ferreux-fer', 'premiere', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Anémie sévère',
        fiche: 'anemie-ferriprive',
        description: 'Pertes chroniques.',
        traitement: '- Fer, transfusion',
        clinique: '- Pâleur, dyspnée',
        paraclinique: '- Hb',
      },
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-obstetrical',
        description: 'Hémorragie aiguë.',
        traitement: '- Réanimation',
        clinique: '- Tachycardie',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon après traitement de la cause',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Pâleur', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Douleur pelvienne', 'occasionnel'],
    ],
    sources: [
      'FIGO — recommandations de pratique clinique',
      'ACOG — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- β-hCG, Hb, AINS, acide tranexamique, fer, orientation', '- Hémorragie abondante, âge > 45 ans'],
      hgr: ['- Échographie, traitement hormonal, chirurgie', ''],
      tert: ['- Hystéroscopie, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ménorragies fonctionnelles',
        type: 'commune',
        description: 'Sans lésion.',
        terrain: '- Adolescente, périménopause',
        fonctionnels: '- Règles abondantes',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- Échographie normale',
        etiologies: '- Anovulation',
        syndromes: [],
      },
      {
        nom: 'Hémorragie utérine aiguë',
        type: 'gravite',
        description: 'Saignement massif.',
        terrain: '',
        fonctionnels: '- Caillots',
        generaux: '- Tachycardie',
        physiques: '- Pâleur',
        paraclinique: '- Hb basse',
        etiologies: '',
        syndromes: ['syndrome-anemique'],
      },
    ],
  },

  // =================================================================== Violences sexuelles
  {
    ...GYN,
    slug: 'violences-sexuelles',
    nom: 'Violences sexuelles : prise en charge médicale',
    resume:
      'Urgence médicale (idéalement dans les 72 h) : accueil, consentement, soins des lésions, prophylaxie post-exposition du VIH, contraception d’urgence (jusqu’à 120 h), prévention des IST, vaccination hépatite B et tétanos, certificat médical, soutien psychosocial et orientation juridique.',
    definition:
      'Tout acte sexuel imposé par la force, la contrainte ou la menace ; en RDC, problème de santé publique majeur, notamment dans les zones de conflit (Est).',
    physiopathologie:
      '## Conséquences\n- Lésions génitales et extragénitales, fistules\n- Infections : VIH, hépatite B, syphilis, gonocoque, Chlamydia, trichomonase\n- Grossesse non désirée\n- Traumatisme psychologique (stress post-traumatique, dépression), stigmatisation',
    diagnostic:
      '## Prise en charge centrée sur la survivante\n- Accueil confidentiel et bienveillant, consentement éclairé à chaque étape\n- Histoire : date et heure, type de violence, contraception\n- Examen complet avec consentement, en présence d’une tierce personne si souhaitée\n- Documentation précise des lésions (schéma) ; prélèvements médico-légaux si possible\n- Test de grossesse, TDR VIH (avec conseil), syphilis, hépatite B',
    examens: [
      ['premiere_intention', 'beta-hcg', 'Grossesse préexistante.'],
      ['premiere_intention', 'tdr-vih', 'Avant la prophylaxie (et à 6 semaines, 3 et 6 mois).'],
      ['premiere_intention', 'serologie-syphilis', 'Dépistage.'],
      ['premiere_intention', 'marqueurs-vhb', 'Statut hépatite B.'],
      ['etiologique', 'prelevement-vaginal', 'IST, prélèvements médico-légaux.'],
    ],
    scores: [],
    differentiels: [],
    etiologies:
      '## Contextes\n- Conflits armés, déplacements de population, violences conjugales et familiales, enfants et adolescentes',
    principes: [
      [
        'Dans les 72 heures',
        'Prévenir le VIH.',
        '- **Prophylaxie post-exposition (PPE)** : **ténofovir + lamivudine + dolutégravir** pendant 28 jours, dès que possible (avant 72 h)',
      ],
      [
        'Dans les 120 heures',
        'Prévenir la grossesse.',
        '- **Contraception d’urgence** : **lévonorgestrel** 1,5 mg (jusqu’à 72 h, efficacité moindre ensuite), **ulipristal** 30 mg (jusqu’à 120 h) ou DIU au cuivre',
      ],
      [
        'Prévention des IST et vaccinations',
        'Traiter présomptivement.',
        '- **Ceftriaxone** 1 g IM (OMS 2024) + **azithromycine** 1 g + **métronidazole** 2 g (après le 1er trimestre si enceinte)\n- **Vaccin hépatite B** (± immunoglobulines), **vaccin antitétanique** si plaies',
      ],
      [
        'Soins et accompagnement',
        'Restaurer la santé.',
        '- Soins des plaies, réparation des lésions, prise en charge des fistules\n- Certificat médical (gratuit), orientation juridique\n- Soutien psychosocial, suivi à 2 semaines, 6 semaines, 3 et 6 mois\n- Enfants : doses adaptées, protection de l’enfance',
      ],
    ],
    molecules: [
      ['tenofovir-disoproxil', 'premiere', 'PPE VIH'],
      ['lamivudine', 'premiere', 'PPE VIH'],
      ['dolutegravir', 'premiere', 'PPE VIH'],
      ['levonorgestrel-1-5-mg', 'premiere', 'Contraception d’urgence (72 h)'],
      ['ulipristal', 'alternative', 'Contraception d’urgence (120 h)'],
      ['ceftriaxone', 'premiere', 'Prévention du gonocoque'],
      ['azithromycine', 'premiere', 'Prévention de Chlamydia'],
      ['metronidazole', 'premiere', 'Prévention de la trichomonase'],
      ['vaccin-hepatite-b', 'premiere', 'Prévention'],
      ['anatoxines-tetanique-diphterique', 'adjuvant', 'Plaies'],
    ],
    complications: [
      {
        nom: 'Infection à VIH',
        fiche: 'infection-vih',
        description: 'Absence de PPE.',
        traitement: '- ARV',
        clinique: '',
        paraclinique: '- TDR',
      },
      {
        nom: 'Grossesse non désirée',
        description: 'Absence de contraception d’urgence.',
        traitement: '- Conseil, services disponibles',
        clinique: '',
        paraclinique: '- β-hCG',
      },
      {
        nom: 'Fistule et lésions génitales',
        description: 'Violences avec objets, mineures.',
        traitement: '- Chirurgie réparatrice',
        clinique: '- Incontinence',
        paraclinique: '',
      },
      {
        nom: 'Stress post-traumatique et dépression',
        description: 'Fréquents.',
        traitement: '- Soutien psychosocial, mhGAP',
        clinique: '- Cauchemars, évitement, tristesse',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- La PPE et la contraception d’urgence sont efficaces si débutées tôt ; le soutien psychosocial est essentiel',
    urgences: [],
    symptomes: [
      ['Lésions traumatiques', 'frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Saignement vaginal', 'occasionnel'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Kit PEP, contraception d’urgence, prévention des IST, soutien, orientation',
        '- Lésions graves, enfants',
      ],
      hgr: ['- Chirurgie, certificat, prise en charge globale', ''],
      tert: ['- Chirurgie des fistules, psychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Consultation dans les 72 h',
        type: 'commune',
        description: 'Prévention possible.',
        terrain: '- Survivante de violence sexuelle',
        fonctionnels: '- Douleurs, peur',
        generaux: '',
        physiques: '- Lésions variables',
        paraclinique: '- Tests de base',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Consultation tardive',
        type: 'evolutive',
        description: 'Après 72 h.',
        terrain: '',
        fonctionnels: '- Pertes, douleur',
        generaux: '',
        physiques: '',
        paraclinique: '- Grossesse, IST',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Saignements post-ménopause
  {
    ...GYN,
    slug: 'saignements-apres-menopause',
    nom: 'Saignements après la ménopause',
    resume:
      'Tout saignement survenant plus de 12 mois après les dernières règles doit faire éliminer un cancer (endomètre, col) : examen au spéculum, IVA/frottis, échographie (épaisseur de l’endomètre > 4 mm = biopsie), biopsie de l’endomètre.',
    definition: 'Saignement génital survenant plus de 12 mois après l’arrêt définitif des règles.',
    physiopathologie:
      '## Causes\n- Atrophie vaginale et endométriale (la plus fréquente)\n- **Cancer de l’endomètre** (10 % des cas), hyperplasie, polype\n- **Cancer du col**, cancer de la vulve ou du vagin\n- Traitement hormonal',
    diagnostic:
      '## Démarche\n- Examen au spéculum : col, vagin, vulve ; IVA ou frottis, biopsie de toute lésion\n- **Échographie pelvienne** : épaisseur de l’endomètre\n  - ≤ 4 mm : atrophie probable\n  - > 4 mm : **biopsie de l’endomètre** (pipelle) ou hystéroscopie\n- Facteurs de risque du cancer de l’endomètre : obésité, diabète, HTA, nulliparité, tamoxifène',
    examens: [
      ['premiere_intention', 'echographie-pelvienne', 'Épaisseur de l’endomètre.'],
      ['confirmation', 'biopsie-histologie', 'Biopsie de l’endomètre ou du col.'],
      ['premiere_intention', 'depistage-col-iva-hpv', 'Lésion du col.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['etiologique', 'glycemie', 'Diabète (facteur de risque).'],
    ],
    scores: ['imc'],
    differentiels: [
      ['cancer-du-col-de-l-uterus', 'Lésion du col.'],
      ['Saignement urinaire ou rectal', 'Origine à préciser à l’examen.'],
    ],
    etiologies:
      '## Causes\n- Atrophie, polypes, hyperplasie, cancers de l’endomètre et du col, traitements hormonaux',
    principes: [
      [
        'Selon la cause',
        'Traiter.',
        '- Atrophie : rassurer, lubrifiants, œstrogènes locaux si disponibles\n- Polype : polypectomie (hystéroscopie)\n- Hyperplasie sans atypie : progestatifs, contrôle ; avec atypies : hystérectomie\n- Cancer : orientation oncologique (hystérectomie, radiothérapie)',
      ],
      [
        'Mesures associées',
        'Corriger.',
        '- Traitement de l’anémie, contrôle des facteurs de risque (poids, diabète, HTA)',
      ],
    ],
    molecules: [
      ['medroxyprogesterone', 'alternative', 'Hyperplasie sans atypie'],
      ['norethisterone', 'alternative', 'Hyperplasie sans atypie'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Cancer de l’endomètre méconnu',
        description: 'Retard diagnostique.',
        traitement: '- Chirurgie, radiothérapie',
        clinique: '- Saignements persistants',
        paraclinique: '- Biopsie',
      },
      {
        nom: 'Anémie',
        fiche: 'anemie-ferriprive',
        description: 'Saignements prolongés.',
        traitement: '- Fer',
        clinique: '- Pâleur',
        paraclinique: '- Hb',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent pour l’atrophie ; le cancer de l’endomètre découvert tôt a un bon pronostic',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Leucorrhées', 'occasionnel'],
      ['Douleur pelvienne', 'occasionnel'],
    ],
    sources: [
      'ACOG — recommandations de pratique clinique',
      'ESGO — recommandations de pratique clinique',
      'FIGO — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Examen au spéculum, IVA, orientation rapide', '- Tout saignement après la ménopause'],
      hgr: ['- Échographie, biopsie', '- Cancer'],
      tert: ['- Oncologie gynécologique, radiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Saignement sur atrophie',
        type: 'commune',
        description: 'Cause la plus fréquente.',
        terrain: '- Femme ménopausée',
        fonctionnels: '- Saignement minime',
        generaux: '',
        physiques: '- Muqueuse atrophique',
        paraclinique: '- Endomètre ≤ 4 mm',
        etiologies: '- Atrophie',
        syndromes: [],
      },
      {
        nom: 'Cancer de l’endomètre',
        type: 'gravite',
        description: 'À éliminer systématiquement.',
        terrain: '- Obésité, diabète, HTA',
        fonctionnels: '- Saignements répétés',
        generaux: '',
        physiques: '- Utérus parfois augmenté',
        paraclinique: '- Endomètre épaissi, biopsie positive',
        etiologies: '',
        syndromes: [],
        examens: [['biopsie-histologie', 'Diagnostic']],
      },
    ],
  },
];
