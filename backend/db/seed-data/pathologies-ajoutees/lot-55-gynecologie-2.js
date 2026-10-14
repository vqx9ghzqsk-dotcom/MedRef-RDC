'use strict';

/**
 * Lot 55 (phase 2, gynécologie, partie 2) — polypes et hyperplasie de l'endomètre, synéchies
 * utérines, cervicites, condylomes génitaux, douleurs pelviennes chroniques. Rédigé par IA (OMS,
 * Normes et directives SR, Guide clinique et thérapeutique) : à valider.
 */

const GYN = { departement: 'gynecologie-obstetrique', specialite: 'Gynécologie' };

module.exports = [
  // =================================================================== Polypes et hyperplasie
  {
    ...GYN,
    slug: 'polypes-hyperplasie-endometre',
    nom: 'Polypes et hyperplasie de l’endomètre',
    resume:
      'Causes fréquentes de saignements utérins anormaux (ménorragies, métrorragies, saignements entre les règles ou après la ménopause) : polypes (excroissances bénignes de l’endomètre) et hyperplasie (épaississement par stimulation œstrogénique non compensée : obésité, SOPK, anovulation, tamoxifène), avec risque de cancer de l’endomètre (hyperplasie atypique) ; échographie (endomètre épais > 4 mm après la ménopause), biopsie de l’endomètre, hystéroscopie ; polypectomie ; progestatifs (DIU au lévonorgestrel, progestatifs oraux) pour l’hyperplasie sans atypie, hystérectomie si atypies.',
    definition:
      'Polype : prolifération localisée bénigne de l’endomètre ; hyperplasie : prolifération diffuse des glandes endométriales, avec ou sans atypies (néoplasie intra-épithéliale endométriale).',
    physiopathologie:
      '## Mécanismes\n- **Stimulation œstrogénique sans progestérone** : anovulation (SOPK, périménopause), **obésité** (aromatisation), traitement œstrogénique seul, **tamoxifène**, tumeurs sécrétantes\n\n## Évolution\n- Polypes : bénins dans la grande majorité, risque de malignité accru après la ménopause\n- Hyperplasie **sans atypie** : risque faible de cancer (< 5 %) ; **avec atypies** : risque élevé (≈ 30 %) de cancer associé ou futur',
    diagnostic:
      '## Clinique\n- **Ménorragies**, **métrorragies**, saignements intermenstruels ou post-coïtaux\n- **Saignement après la ménopause** (toujours à explorer)\n- Anémie, infertilité (polypes)\n\n## Examens\n- **Échographie pelvienne** (endovaginale) : épaisseur de l’endomètre (> 4 mm après la ménopause = anormal), image de polype\n- **Biopsie de l’endomètre** (pipelle) ou curetage, **hystéroscopie** (diagnostic et traitement)\n- β-hCG, NFS (anémie), dépistage du col',
    examens: [
      ['premiere_intention', 'echographie-pelvienne', 'Épaisseur de l’endomètre, polype.'],
      ['confirmation', 'biopsie-histologie', 'Atypies, cancer.'],
      ['confirmation', 'hysteroscopie', 'Polypes, biopsie dirigée.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
      ['premiere_intention', 'depistage-col-iva-hpv', 'Cause cervicale.'],
    ],
    scores: [],
    differentiels: [
      ['fibromes-uterins', 'Fibrome sous-muqueux.'],
      ['menometrorragies', 'Autres causes de saignements anormaux.'],
      ['saignements-apres-menopause', 'Cancer de l’endomètre.'],
      ['cancer-du-col-de-l-uterus', 'Saignements post-coïtaux, lésion du col.'],
      ['Adénomyose', 'Utérus augmenté, dysménorrhée.'],
    ],
    etiologies: '## Facteurs\n- Obésité, SOPK, anovulation, périménopause, tamoxifène, œstrogènes seuls',
    principes: [
      [
        'Polypes',
        'Exérèse.',
        '- **Polypectomie** hystéroscopique (ou curetage si hystéroscopie indisponible), examen histologique\n- Abstention possible pour un petit polype asymptomatique de la femme jeune',
      ],
      [
        'Hyperplasie sans atypie',
        'Progestatifs.',
        '- **DIU au lévonorgestrel** (premier choix) ou **progestatifs** oraux (médroxyprogestérone, noréthistérone) en continu 6 mois\n- Correction des facteurs (perte de poids), biopsie de contrôle à 6 mois',
      ],
      [
        'Hyperplasie avec atypies',
        'Chirurgie.',
        '- **Hystérectomie** totale (femme sans désir de grossesse) ; progestatifs à forte dose sous surveillance étroite si désir de grossesse (centre spécialisé)\n- Anémie : fer, acide tranexamique pour les saignements abondants',
      ],
    ],
    molecules: [
      ['levonorgestrel', 'premiere', 'DIU hormonal'],
      ['medroxyprogesterone', 'alternative', 'Progestatif oral'],
      ['norethisterone', 'alternative', 'Progestatif oral'],
      ['acide-tranexamique', 'adjuvant', 'Saignements abondants'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Cancer de l’endomètre',
        fiche: 'saignements-apres-menopause',
        description: 'Hyperplasie atypique.',
        traitement: '- Hystérectomie',
        clinique: '- Saignement post-ménopausique',
        paraclinique: '- Biopsie',
      },
      {
        nom: 'Anémie ferriprive',
        fiche: 'anemie-ferriprive',
        description: 'Saignements chroniques.',
        traitement: '- Fer',
        clinique: '- Pâleur',
        paraclinique: '- NFS',
      },
      {
        nom: 'Infertilité',
        fiche: 'infertilite-du-couple',
        description: 'Polypes.',
        traitement: '- Polypectomie',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon après traitement ; surveillance de l’hyperplasie pour dépister l’évolution vers le cancer',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Pâleur', 'occasionnel'],
      ['Infertilité', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Saignements anormaux : examen, NFS, orientation', '- Saignement après la ménopause'],
      hgr: ['- Échographie, biopsie, curetage, progestatifs', ''],
      tert: ['- Hystéroscopie, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Polype de l’endomètre',
        type: 'commune',
        description: 'Saignements intermenstruels.',
        terrain: '- Femme de 30 à 60 ans',
        fonctionnels: '- Métrorragies',
        generaux: '',
        physiques: '',
        paraclinique: '- Image polypoïde',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Hyperplasie atypique',
        type: 'gravite',
        description: 'Risque de cancer.',
        terrain: '- Obésité, SOPK, ménopause',
        fonctionnels: '- Saignements',
        generaux: '',
        physiques: '',
        paraclinique: '- Atypies à la biopsie',
        etiologies: '- Œstrogènes non compensés',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Synéchies
  {
    ...GYN,
    slug: 'synechies-uterines',
    nom: 'Synéchies utérines',
    resume:
      'Adhérences intra-utérines (syndrome d’Asherman) cicatricielles après curetage (avortement, rétention, hémorragie du post-partum), endométrite, tuberculose génitale (fréquente en Afrique) ou chirurgie : hypoménorrhée ou aménorrhée secondaire, douleurs cycliques, infertilité, fausses couches répétées, anomalies placentaires (accreta) ; hystérosalpingographie, échographie, hystéroscopie ; adhésiolyse hystéroscopique, œstrogènes après la chirurgie, DIU ou ballonnet pour éviter la récidive ; prévention : aspiration plutôt que curetage, traitement des infections.',
    definition:
      'Accolement partiel ou total des parois de la cavité utérine et/ou du canal cervical par des adhérences fibreuses, consécutif à une lésion de la couche basale de l’endomètre.',
    physiopathologie:
      '## Causes\n- **Curetage** de l’utérus gravide (avortement, rétention, HPP), surtout répété ou agressif\n- **Endométrite** (post-partum, post-abortum), **tuberculose génitale**, schistosomiase\n- Chirurgie utérine (myomectomie, césarienne)\n\n## Conséquences\n- Endomètre détruit → **aménorrhée** ou hypoménorrhée, hématométrie (règles retenues)\n- **Infertilité**, fausses couches, placenta accreta et prævia',
    diagnostic:
      '## Clinique\n- **Hypoménorrhée** ou **aménorrhée secondaire** après un curetage ou une infection\n- Douleurs pelviennes cycliques (hématométrie)\n- **Infertilité**, fausses couches répétées\n\n## Examens\n- **β-hCG**, bilan hormonal normal (cause utérine)\n- **Hystérosalpingographie** (lacunes, amputation de la cavité), échographie (endomètre fin)\n- **Hystéroscopie** (diagnostic et traitement)\n- Recherche de tuberculose génitale (contexte, biopsie)',
    examens: [
      ['confirmation', 'hysteroscopie', 'Diagnostic et traitement.'],
      ['premiere_intention', 'hysterosalpingographie', 'Lacunes de la cavité.'],
      ['premiere_intention', 'echographie-pelvienne', 'Endomètre fin, hématométrie.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
      ['etiologique', 'biopsie-histologie', 'Tuberculose génitale.'],
    ],
    scores: [],
    differentiels: [
      ['amenorrhees-troubles-du-cycle', 'Causes hormonales d’aménorrhée.'],
      ['infertilite-du-couple', 'Autres causes d’infertilité.'],
      ['tuberculose-extrapulmonaire', 'Tuberculose génitale.'],
    ],
    etiologies: '## Causes\n- Curetages, endométrite, tuberculose génitale, chirurgie utérine',
    principes: [
      [
        'Traitement',
        'Adhésiolyse.',
        '- **Adhésiolyse hystéroscopique** (centre spécialisé)\n- Prévention de la récidive : **DIU** ou ballonnet intra-utérin temporaire, **œstrogènes** (œstradiol) 1–2 mois avec progestatif\n- Hystéroscopie de contrôle\n- Tuberculose génitale : traitement antituberculeux',
      ],
      [
        'Prévention',
        'Réduire les curetages.',
        '- **Aspiration manuelle intra-utérine** ou **misoprostol** plutôt que curetage pour les avortements incomplets\n- Traitement rapide des endométrites',
      ],
    ],
    molecules: [
      ['estradiol', 'premiere', 'Après adhésiolyse'],
      ['dydrogesterone', 'alternative', 'Associé aux œstrogènes'],
      ['misoprostol', 'premiere', 'Prévention (évacuation utérine sans curetage)'],
      ['rifampicine', 'adjuvant', 'Tuberculose génitale'],
    ],
    complications: [
      {
        nom: 'Infertilité',
        fiche: 'infertilite-du-couple',
        description: 'Cavité détruite.',
        traitement: '- Adhésiolyse',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Placenta accreta',
        fiche: 'placenta-accreta',
        description: 'Endomètre altéré.',
        traitement: '- Prise en charge spécialisée',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Fausses couches répétées',
        fiche: 'avortement-spontane',
        description: 'Cavité réduite.',
        traitement: '- Adhésiolyse',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération des règles fréquente après adhésiolyse ; fertilité liée à la sévérité des lésions',
    urgences: [],
    symptomes: [
      ['Aménorrhée', 'tres_frequent'],
      ['Infertilité', 'frequent'],
      ['Douleur pelvienne', 'occasionnel'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Aménorrhée après curetage : orientation ; prévention par l’AMIU', ''],
      hgr: ['- Hystérosalpingographie, échographie', ''],
      tert: ['- Hystéroscopie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Synéchies post-curetage',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Antécédent de curetage',
        fonctionnels: '- Hypoménorrhée',
        generaux: '',
        physiques: '',
        paraclinique: '- Lacunes à l’HSG',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Synéchies tuberculeuses',
        type: 'etiologique',
        description: 'Tuberculose génitale.',
        terrain: '- Contexte tuberculeux',
        fonctionnels: '- Aménorrhée, infertilité',
        generaux: '',
        physiques: '',
        paraclinique: '- Granulomes',
        etiologies: '- M. tuberculosis',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cervicites
  {
    ...GYN,
    slug: 'cervicites',
    nom: 'Cervicites',
    resume:
      'Inflammation du col utérin, le plus souvent due à une IST (Chlamydia trachomatis, gonocoque, Mycoplasma genitalium, trichomonas, herpès), souvent asymptomatique : leucorrhées mucopurulentes, saignements au contact ou après les rapports, col inflammatoire et friable ; risque d’infection génitale haute, d’infertilité, de grossesse extra-utérine, de transmission du VIH et d’infection néonatale ; traitement syndromique (ceftriaxone + azithromycine ou doxycycline), traitement du partenaire, préservatifs, dépistage du VIH et de la syphilis, examen du col (dépistage du cancer).',
    definition:
      'Inflammation de l’endocol (ou de l’exocol), le plus souvent d’origine infectieuse sexuellement transmissible.',
    physiopathologie:
      '## Germes\n- **Chlamydia trachomatis**, **Neisseria gonorrhoeae**, Mycoplasma genitalium, Trichomonas vaginalis, herpès simplex\n- Causes non infectieuses : irritation (produits vaginaux), ectropion\n\n## Conséquences\n- Ascension → **infection génitale haute** (salpingite) → infertilité tubaire, GEU, douleurs pelviennes chroniques\n- Facilitation de la transmission du **VIH**\n- Grossesse : rupture prématurée, conjonctivite et pneumonie du nouveau-né',
    diagnostic:
      '## Clinique\n- Souvent **asymptomatique**\n- **Leucorrhées** mucopurulentes, saignements **post-coïtaux** ou intermenstruels, dyspareunie, brûlures urinaires\n- Spéculum : col rouge, œdémateux, **friable** (saigne au contact), écoulement mucopurulent de l’endocol\n- Rechercher une douleur à la mobilisation utérine (infection haute)\n\n## Examens\n- **Prélèvement** endocervical (PCR chlamydia et gonocoque si disponible)\n- **TDR VIH**, **syphilis**, β-hCG\n- **Dépistage du cancer du col** (IVA/HPV) une fois l’infection traitée',
    examens: [
      ['premiere_intention', 'prelevement-vaginal', 'Chlamydia, gonocoque.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'serologie-syphilis', 'Syphilis.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
      ['deuxieme_intention', 'depistage-col-iva-hpv', 'Dépistage du cancer du col.'],
    ],
    scores: [],
    differentiels: [
      ['infections-genitales-basses', 'Vaginose, candidose (leucorrhées vaginales).'],
      ['infection-genitale-haute', 'Douleur pelvienne, fièvre.'],
      ['cancer-du-col-de-l-uterus', 'Saignements post-coïtaux, lésion.'],
      ['Ectropion', 'Col rouge sans écoulement purulent.'],
    ],
    etiologies: '## Germes\n- Chlamydia, gonocoque, mycoplasmes, trichomonas, herpès',
    principes: [
      [
        'Traitement syndromique',
        'Dès la première visite.',
        '- **Ceftriaxone** 1 g IM dose unique + **azithromycine** 1 g dose unique (ou **doxycycline** 100 mg 2 fois par jour 7 jours hors grossesse)\n- ± **métronidazole** 2 g dose unique (trichomonas)\n- Grossesse : ceftriaxone + azithromycine',
      ],
      [
        'Prévention',
        'Les 4 « P ».',
        '- **Partenaire** traité, **préservatifs**, dépistage du VIH et de la syphilis, abstinence jusqu’à 7 jours après le traitement\n- Vaccination HPV, dépistage du cancer du col',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Gonococcie'],
      ['azithromycine', 'premiere', 'Chlamydiose'],
      ['doxycycline', 'alternative', 'Chlamydiose (hors grossesse)'],
      ['metronidazole', 'alternative', 'Trichomonase'],
    ],
    complications: [
      {
        nom: 'Infection génitale haute',
        fiche: 'infection-genitale-haute',
        description: 'Ascension.',
        traitement: '- Antibiotiques',
        clinique: '- Douleurs pelviennes, fièvre',
        paraclinique: '',
      },
      {
        nom: 'Infertilité et GEU',
        fiche: 'infertilite-du-couple',
        description: 'Séquelles tubaires.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Conjonctivite néonatale',
        fiche: 'conjonctivite-neonatale',
        description: 'Transmission à l’accouchement.',
        traitement: '- Antibiotiques',
        clinique: '- Œil purulent',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison sous traitement ; réinfections fréquentes si le partenaire n’est pas traité',
    urgences: [],
    symptomes: [
      ['Leucorrhées', 'tres_frequent'],
      ['Saignement vaginal', 'frequent'],
      ['Dyspareunie', 'occasionnel'],
      ['Brûlures mictionnelles', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Traitement syndromique, dépistages, préservatifs', '- Douleurs pelviennes, fièvre'],
      hgr: ['- Prélèvements, prise en charge des complications', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Cervicite mucopurulente',
        type: 'commune',
        description: 'IST.',
        terrain: '- Femme sexuellement active',
        fonctionnels: '- Leucorrhées',
        generaux: '',
        physiques: '- Col friable',
        paraclinique: '- Chlamydia, gonocoque',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Cervicite avec infection haute',
        type: 'gravite',
        description: 'Salpingite.',
        terrain: '',
        fonctionnels: '- Douleur pelvienne',
        generaux: '- Fièvre',
        physiques: '- Douleur à la mobilisation utérine',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Condylomes
  {
    ...GYN,
    slug: 'condylomes-genitaux',
    nom: 'Condylomes génitaux',
    resume:
      'Verrues ano-génitales dues aux papillomavirus humains (HPV 6 et 11, bénins), IST très fréquente : végétations molles, roses ou pigmentées, isolées ou en « crête de coq » sur la vulve, le vagin, le col, le pénis, l’anus ; plus profuses chez les personnes vivant avec le VIH et pendant la grossesse ; traitement local (podophyllotoxine, acide trichloracétique, imiquimod), cryothérapie, exérèse chirurgicale des formes volumineuses ; dépistage des autres IST et du cancer du col (HPV oncogènes associés) ; vaccination HPV des filles de 9–14 ans ; chez l’enfant, rechercher des abus sexuels.',
    definition:
      'Lésions prolifératives bénignes de la peau et des muqueuses ano-génitales induites par les papillomavirus humains de bas risque (6, 11).',
    physiopathologie:
      '## Transmission\n- **Sexuelle** (contact peau à peau), rarement verticale (papillomatose laryngée de l’enfant)\n\n## Facteurs\n- Partenaires multiples, absence de préservatif, **VIH** (lésions profuses, récidivantes, résistantes), **grossesse** (croissance rapide)\n\n## Association\n- Co-infection fréquente par des HPV **oncogènes** (16, 18) : dépistage du cancer du col et de l’anus',
    diagnostic:
      '## Clinique\n- **Végétations** molles, rosées ou pigmentées, en chou-fleur ou planes, indolores, parfois prurigineuses\n- Vulve, vagin, col, périnée, anus ; pénis, scrotum chez l’homme\n- Lésions géantes (Buschke-Löwenstein) chez l’immunodéprimé\n\n## Examens\n- Diagnostic clinique ; biopsie si lésion atypique, pigmentée, ulcérée ou résistante\n- **TDR VIH**, **syphilis** (condylomes plats), dépistage du **col** (IVA/HPV)',
    examens: [
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'serologie-syphilis', 'Syphilis (condylomes plats).'],
      ['premiere_intention', 'depistage-col-iva-hpv', 'Lésions du col.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Lésion atypique.'],
    ],
    scores: [],
    differentiels: [
      ['syphilis', 'Condylomes plats (syphilis secondaire).'],
      ['molluscum-contagiosum', 'Papules ombiliquées.'],
      ['Cancer de la vulve ou de l’anus', 'Lésion indurée, ulcérée.'],
      ['Papillomatose vestibulaire', 'Variante normale, symétrique.'],
    ],
    etiologies: '## Agent\n- HPV 6 et 11',
    principes: [
      [
        'Traitement local',
        'Petites lésions.',
        '- **Podophyllotoxine** 0,5 % (auto-application 2 fois par jour 3 jours par semaine, contre-indiquée pendant la grossesse)\n- **Acide trichloracétique** 80–90 % (application par un soignant, utilisable pendant la grossesse)\n- **Imiquimod** crème si disponible\n- **Cryothérapie** (azote liquide)',
      ],
      [
        'Lésions volumineuses',
        'Chirurgie.',
        '- **Exérèse** chirurgicale ou électrocoagulation, sous anesthésie\n- VIH : traitement antirétroviral (meilleure réponse)',
      ],
      [
        'Prévention et dépistage',
        'Agir en amont.',
        '- **Vaccination HPV** des filles de 9–14 ans, préservatif, dépistage des IST et du cancer du col, information du partenaire\n- Enfant : évaluation de protection (abus sexuels)',
      ],
    ],
    molecules: [
      ['dolutegravir', 'adjuvant', 'Condylomes du VIH (ARV)'],
      ['vaccin-papillomavirus-hpv', 'premiere', 'Prévention'],
      ['lidocaine', 'adjuvant', 'Anesthésie pour exérèse'],
    ],
    complications: [
      {
        nom: 'Récidives',
        description: 'Fréquentes.',
        traitement: '- Traitements répétés',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Obstruction ou saignement à l’accouchement',
        description: 'Lésions volumineuses pendant la grossesse.',
        traitement: '- Exérèse, césarienne rarement',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Papillomatose laryngée de l’enfant',
        description: 'Transmission à l’accouchement.',
        traitement: '- Chirurgie ORL',
        clinique: '- Dysphonie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bénin ; récidives fréquentes ; régression spontanée possible ; vaccination très efficace en prévention',
    urgences: [],
    symptomes: [
      ['Végétations génitales', 'tres_frequent'],
      ['Prurit', 'occasionnel'],
      ['Saignement vaginal', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Diagnostic, traitement local, dépistages, préservatifs', '- Lésions volumineuses, enfant'],
      hgr: ['- Cryothérapie, exérèse', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Condylomes acuminés',
        type: 'commune',
        description: 'Végétations.',
        terrain: '- Adulte jeune',
        fonctionnels: '',
        generaux: '',
        physiques: '- Végétations en chou-fleur',
        paraclinique: '',
        etiologies: '- HPV 6, 11',
        syndromes: [],
      },
      {
        nom: 'Condylomes profus du VIH',
        type: 'terrain',
        description: 'Résistants.',
        terrain: '- VIH',
        fonctionnels: '',
        generaux: '',
        physiques: '- Lésions étendues',
        paraclinique: '- CD4 bas',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Douleurs pelviennes chroniques
  {
    ...GYN,
    slug: 'douleurs-pelviennes-chroniques',
    nom: 'Douleurs pelviennes chroniques',
    resume:
      'Douleurs du pelvis évoluant depuis plus de 6 mois, cycliques ou non, fréquentes et invalidantes : causes gynécologiques (séquelles d’infection génitale haute et adhérences, endométriose, adénomyose, fibromes, congestion pelvienne), urologiques (cystite interstitielle, schistosomiase), digestives (intestin irritable, constipation), musculo-squelettiques, et facteurs psychologiques (violences sexuelles, dépression) ; anamnèse détaillée, examen, échographie, dépistage des IST ; traitement de la cause, AINS, traitement hormonal, antidépresseurs à faible dose, prise en charge globale.',
    definition:
      'Douleurs non cycliques ou cycliques localisées au pelvis, à la paroi abdominale basse ou aux lombes, évoluant depuis au moins 6 mois et suffisamment intenses pour retentir sur la vie quotidienne.',
    physiopathologie:
      '## Causes gynécologiques\n- **Séquelles d’infection génitale haute** (adhérences, hydrosalpinx) : très fréquentes en Afrique\n- **Endométriose**, adénomyose, fibromes, kystes ovariens, syndrome de congestion pelvienne\n\n## Autres causes\n- Urologiques : cystite interstitielle, **schistosomiase urogénitale**, lithiase\n- Digestives : **intestin irritable**, constipation, amibiase\n- Musculo-squelettiques, neuropathiques, séquelles d’accouchement\n\n## Facteurs psychosociaux\n- **Violences sexuelles**, dépression, anxiété ; sensibilisation centrale de la douleur',
    diagnostic:
      '## Anamnèse\n- Caractéristiques (cyclique, dyspareunie, troubles urinaires ou digestifs), antécédents d’IST, de chirurgie, d’accouchements difficiles, de **violences**\n\n## Examen\n- Abdominal, gynécologique (douleur à la mobilisation, nodules, masses), points douloureux de la paroi\n\n## Examens\n- **Échographie pelvienne**, prélèvement vaginal, TDR VIH et syphilis, ECBU, **œufs de schistosomes** dans les urines, examen des selles\n- Cœlioscopie si diagnostic incertain (centre spécialisé)',
    examens: [
      ['premiere_intention', 'echographie-pelvienne', 'Lésions pelviennes.'],
      ['premiere_intention', 'prelevement-vaginal', 'Infection.'],
      ['premiere_intention', 'ecbu', 'Cause urinaire.'],
      ['etiologique', 'oeufs-schistosomes-urines', 'Schistosomiase.'],
      ['etiologique', 'examen-parasitologique-selles', 'Parasitoses.'],
      ['premiere_intention', 'tdr-vih', 'IST.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
    ],
    scores: [],
    differentiels: [
      ['endometriose', 'Douleurs cycliques, dyspareunie.'],
      ['infection-genitale-haute', 'Infection active.'],
      ['fibromes-uterins', 'Utérus augmenté, ménorragies.'],
      ['schistosomiase-urogenitale', 'Hématurie, zone d’endémie.'],
      ['violences-sexuelles-prise-en-charge-psychologique', 'Antécédent de violences.'],
    ],
    etiologies:
      '## Causes\n- Séquelles infectieuses, endométriose, adénomyose, causes urinaires et digestives, facteurs psychologiques',
    principes: [
      [
        'Traitement de la cause',
        'Selon l’étiologie.',
        '- Infection active : antibiotiques ; schistosomiase : praziquantel ; endométriose : traitement hormonal\n- Chirurgie (adhésiolyse, kystes, fibromes) si indiquée',
      ],
      [
        'Traitement de la douleur',
        'Approche globale.',
        '- **AINS**, **paracétamol** ; traitement hormonal (pilule en continu, progestatifs) pour les douleurs cycliques\n- Douleur chronique : **amitriptyline** à faible dose (10–25 mg le soir), gabapentine\n- Kinésithérapie, activité physique, prise en charge psychologique (violences, dépression)',
      ],
      [
        'Accompagnement',
        'Écouter.',
        '- Reconnaissance de la douleur, explications, suivi régulier, éviter les examens et chirurgies répétés sans indication',
      ],
    ],
    molecules: [
      ['ibuprofene', 'premiere', 'Douleur'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['amitriptyline', 'alternative', 'Douleur chronique'],
      ['gabapentine', 'alternative', 'Douleur neuropathique'],
      ['medroxyprogesterone', 'alternative', 'Douleurs cycliques'],
      ['praziquantel', 'adjuvant', 'Schistosomiase'],
    ],
    complications: [
      {
        nom: 'Dépression',
        fiche: 'depression',
        description: 'Douleur chronique.',
        traitement: '- Soutien, antidépresseurs',
        clinique: '- Tristesse',
        paraclinique: '',
      },
      {
        nom: 'Retentissement conjugal et professionnel',
        description: 'Dyspareunie, absentéisme.',
        traitement: '- Prise en charge globale',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration fréquente avec une prise en charge globale ; évolution chronique dans certains cas',
    urgences: [],
    symptomes: [
      ['Douleur pelvienne', 'tres_frequent'],
      ['Dyspareunie', 'frequent'],
      ['Dysménorrhée', 'frequent'],
      ['Douleur lombaire', 'occasionnel'],
      ['Humeur dépressive', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'mhGAP Intervention Guide 2.0',
    ],
    niveaux: {
      cs: ['- Anamnèse, dépistage des IST, antalgiques, écoute', '- Masse, échec'],
      hgr: ['- Échographie, traitement de la cause', ''],
      tert: ['- Cœlioscopie, consultation douleur', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Douleur pelvienne post-infectieuse',
        type: 'commune',
        description: 'Adhérences.',
        terrain: '- Antécédent d’infection génitale haute',
        fonctionnels: '- Douleur chronique, dyspareunie',
        generaux: '',
        physiques: '- Douleur à la mobilisation',
        paraclinique: '- Hydrosalpinx possible',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Douleur pelvienne avec composante psychologique',
        type: 'etiologique',
        description: 'Violences, dépression.',
        terrain: '- Antécédent de violences',
        fonctionnels: '- Douleur diffuse',
        generaux: '',
        physiques: '- Examen pauvre',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
