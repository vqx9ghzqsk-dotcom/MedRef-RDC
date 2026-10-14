'use strict';

/**
 * Lot 56 (phase 2, gynécologie) — adénomyose, lichen scléreux vulvaire, ulcérations génitales,
 * hydrosalpinx, malformations utérines, kyste dermoïde de l'ovaire. Rédigé par IA (OMS, Normes et
 * directives SR, Guide clinique et thérapeutique) : à valider.
 */

const GYN = { departement: 'gynecologie-obstetrique', specialite: 'Gynécologie' };

module.exports = [
  // =================================================================== Adénomyose
  {
    ...GYN,
    slug: 'adenomyose',
    nom: 'Adénomyose',
    resume:
      'Présence de glandes endométriales dans le myomètre, fréquente chez la femme multipare de 35–50 ans (souvent associée aux fibromes et à l’endométriose) : ménorragies, dysménorrhée secondaire croissante, douleurs pelviennes, utérus augmenté de volume, globuleux et sensible ; échographie (myomètre hétérogène, asymétrique, kystes), IRM ; AINS, acide tranexamique, DIU au lévonorgestrel (premier choix), progestatifs, pilule en continu ; hystérectomie chez la femme sans désir de grossesse ; correction de l’anémie.',
    definition:
      'Infiltration du myomètre par du tissu endométrial (glandes et stroma), diffuse ou focale (adénomyome), entraînant une hypertrophie du muscle utérin.',
    physiopathologie:
      '## Mécanismes\n- Invagination de l’endomètre dans le myomètre (traumatismes de l’interface : grossesses, curetages, césariennes)\n- Saignements et inflammation intramyométriaux → hypertrophie, contractilité anormale\n\n## Facteurs\n- Multiparité, âge 35–50 ans, curetages, chirurgie utérine, hyperœstrogénie',
    diagnostic:
      '## Clinique\n- **Ménorragies**, **dysménorrhée** secondaire progressive, douleurs pelviennes, dyspareunie\n- Utérus **augmenté de volume**, globuleux, régulier, **sensible**\n- Anémie, infertilité\n\n## Examens\n- **Échographie pelvienne** endovaginale : utérus globuleux, myomètre asymétrique et hétérogène, kystes myométriaux, stries\n- IRM (épaississement de la zone jonctionnelle) en centre spécialisé\n- **NFS** (anémie), β-hCG ; biopsie de l’endomètre si saignements chez la femme > 45 ans',
    examens: [
      ['confirmation', 'echographie-pelvienne', 'Myomètre hétérogène.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Saignements après 45 ans.'],
    ],
    scores: [],
    differentiels: [
      ['fibromes-uterins', 'Utérus irrégulier, nodules bien limités.'],
      ['endometriose', 'Atteinte extra-utérine associée.'],
      ['polypes-hyperplasie-endometre', 'Saignements, endomètre épais.'],
      ['menometrorragies', 'Autres causes de saignements.'],
    ],
    etiologies: '## Facteurs\n- Multiparité, curetages, césariennes, âge',
    principes: [
      [
        'Traitement médical',
        'Contrôler saignements et douleurs.',
        '- **AINS** (ibuprofène, acide méfénamique) et **acide tranexamique** pendant les règles\n- **DIU au lévonorgestrel** (premier choix), progestatifs en continu, pilule en continu\n- Analogues de la GnRH en préparation chirurgicale (courte durée)\n- **Fer** pour l’anémie',
      ],
      [
        'Chirurgie',
        'Femme sans désir de grossesse.',
        '- **Hystérectomie** en cas d’échec du traitement médical\n- Exérèse d’un adénomyome (conservation de l’utérus) en centre spécialisé',
      ],
    ],
    molecules: [
      ['ibuprofene', 'premiere', 'Douleur'],
      ['acide-tranexamique', 'premiere', 'Ménorragies'],
      ['levonorgestrel', 'premiere', 'DIU hormonal'],
      ['medroxyprogesterone', 'alternative', 'Progestatif en continu'],
      ['goserelin', 'deuxieme', 'Préparation chirurgicale'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Anémie ferriprive',
        fiche: 'anemie-ferriprive',
        description: 'Ménorragies.',
        traitement: '- Fer, transfusion',
        clinique: '- Pâleur',
        paraclinique: '- NFS',
      },
      {
        nom: 'Infertilité',
        fiche: 'infertilite-du-couple',
        description: 'Contractilité anormale.',
        traitement: '- Prise en charge spécialisée',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Régression après la ménopause ; amélioration fréquente sous DIU hormonal',
    urgences: [],
    symptomes: [
      ['Dysménorrhée', 'tres_frequent'],
      ['Saignement vaginal', 'tres_frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Dyspareunie', 'occasionnel'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- AINS, fer, orientation', '- Anémie sévère'],
      hgr: ['- Échographie, DIU hormonal, hystérectomie', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Adénomyose diffuse',
        type: 'commune',
        description: 'Utérus globuleux.',
        terrain: '- Multipare de 35–50 ans',
        fonctionnels: '- Ménorragies, dysménorrhée',
        generaux: '',
        physiques: '- Utérus augmenté, sensible',
        paraclinique: '- Myomètre hétérogène',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Adénomyose avec anémie sévère',
        type: 'gravite',
        description: 'Saignements abondants.',
        terrain: '',
        fonctionnels: '- Ménorragies',
        generaux: '- Asthénie',
        physiques: '- Pâleur',
        paraclinique: '- Hb < 8 g/dL',
        etiologies: '',
        syndromes: ['syndrome-anemique'],
      },
    ],
  },

  // =================================================================== Lichen scléreux
  {
    ...GYN,
    slug: 'lichen-sclereux-vulvaire',
    nom: 'Lichen scléreux vulvaire',
    resume:
      'Dermatose inflammatoire chronique de la vulve (femme ménopausée surtout, parfois fillette) : prurit vulvaire intense, brûlures, dyspareunie, plaques blanches nacrées, atrophie, fissures, puis résorption des petites lèvres et rétrécissement de l’orifice vaginal ; risque de carcinome épidermoïde de la vulve (3–5 %) ; dermocorticoïde très puissant (clobétasol) en traitement d’attaque puis d’entretien, émollients, biopsie de toute lésion suspecte, surveillance à vie ; chez l’enfant, ne pas confondre avec des abus sexuels.',
    definition:
      'Dermatose inflammatoire chronique auto-immune à prédilection ano-génitale, responsable d’une sclérose et d’une atrophie cutanée.',
    physiopathologie:
      '## Mécanismes\n- Inflammation chronique auto-immune → sclérose du derme, atrophie de l’épiderme\n- Associations auto-immunes (thyroïdite, vitiligo)\n\n## Évolution\n- Cicatrices : résorption des petites lèvres, enfouissement du clitoris, sténose de l’orifice vaginal\n- **Carcinome épidermoïde** de la vulve sur lichen non traité',
    diagnostic:
      '## Clinique\n- **Prurit vulvaire** intense, souvent nocturne, brûlures, dyspareunie, fissures, saignements de grattage\n- Plaques **blanches nacrées**, peau fine et « papier à cigarette », ecchymoses, atteinte péri-anale en « 8 »\n- Stade avancé : disparition des petites lèvres, sténose vulvaire\n- **Signes d’alerte** : ulcération persistante, nodule, zone épaissie → biopsie\n\n## Examens\n- **Biopsie** (diagnostic en cas de doute, lésion suspecte)\n- Prélèvement mycologique (diagnostic différentiel), TSH',
    examens: [
      ['confirmation', 'biopsie-histologie', 'Diagnostic, carcinome.'],
      ['etiologique', 'examen-mycologique', 'Candidose.'],
      ['etiologique', 'tsh', 'Thyroïdite associée.'],
    ],
    scores: [],
    differentiels: [
      ['infections-genitales-basses', 'Candidose vulvo-vaginale : leucorrhées.'],
      ['Vitiligo', 'Dépigmentation sans atrophie ni prurit.'],
      ['Lichen plan', 'Érosions vaginales, atteinte buccale.'],
      ['Carcinome de la vulve', 'Nodule ou ulcération persistante.'],
      ['violences-sexuelles', 'Chez la fillette : ecchymoses à interpréter avec prudence.'],
    ],
    etiologies: '## Facteurs\n- Auto-immunité, facteurs génétiques, carence hormonale',
    principes: [
      [
        'Traitement d’attaque',
        'Dermocorticoïde très puissant.',
        '- **Clobétasol** 0,05 % pommade une fois par jour pendant 1 mois, puis un jour sur deux pendant 1 mois, puis deux fois par semaine pendant 1 mois\n- **Entretien** : 1 à 2 applications par semaine au long cours',
      ],
      [
        'Mesures associées',
        'Soins locaux.',
        '- Émollients, toilette à l’eau sans savon, sous-vêtements en coton, éviter les irritants\n- Dilatateurs ou chirurgie (périnéotomie) pour les sténoses',
      ],
      [
        'Surveillance',
        'Dépister le cancer.',
        '- Examen tous les 6–12 mois à vie, **biopsie** de toute lésion persistante ou épaissie',
      ],
    ],
    molecules: [
      ['clobetasol-propionate', 'premiere', 'Traitement d’attaque et d’entretien'],
      ['betamethasone-topique', 'alternative', 'Si clobétasol indisponible'],
    ],
    complications: [
      {
        nom: 'Carcinome épidermoïde de la vulve',
        description: 'Lichen non traité.',
        traitement: '- Chirurgie',
        clinique: '- Nodule, ulcération',
        paraclinique: '- Biopsie',
      },
      {
        nom: 'Sténose vulvaire',
        description: 'Cicatrices.',
        traitement: '- Dilatateurs, chirurgie',
        clinique: '- Dyspareunie, troubles mictionnels',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Contrôle des symptômes sous dermocorticoïde ; maladie chronique ; surveillance à vie',
    urgences: [],
    symptomes: [
      ['Prurit', 'tres_frequent'],
      ['Dyspareunie', 'frequent'],
      ['Taches cutanées hypopigmentées', 'frequent'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: ['- Prurit vulvaire chronique : orientation', ''],
      hgr: ['- Clobétasol, biopsie', ''],
      tert: ['- Dermatologie, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Lichen scléreux de la femme ménopausée',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Femme ménopausée',
        fonctionnels: '- Prurit vulvaire',
        generaux: '',
        physiques: '- Plaques blanches nacrées',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Lichen scléreux de la fillette',
        type: 'terrain',
        description: 'Diagnostic différentiel des abus.',
        terrain: '- Fillette prépubère',
        fonctionnels: '- Prurit, constipation',
        generaux: '',
        physiques: '- Plaques blanches, ecchymoses',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Ulcérations génitales
  {
    ...GYN,
    slug: 'ulcerations-genitales',
    nom: 'Ulcérations génitales',
    resume:
      'Perte de substance de la muqueuse ou de la peau génitale : causes principales l’herpès génital (vésicules puis érosions douloureuses récidivantes), la syphilis primaire (chancre induré indolore), le chancre mou (ulcère douloureux, purulent, adénopathie suppurée), la donovanose, la lymphogranulomatose vénérienne ; non infectieuses : traumatismes, toxidermie, maladie de Behçet, cancer ; augmentent fortement le risque de transmission du VIH ; traitement syndromique OMS (benzathine pénicilline + azithromycine ± aciclovir), dépistage du VIH et de la syphilis, traitement du partenaire.',
    definition:
      'Lésion ulcérée ou érosive des organes génitaux externes, du vagin ou du col, le plus souvent d’origine sexuellement transmissible.',
    physiopathologie:
      '## Causes infectieuses\n- **Herpès génital** (HSV-2, HSV-1) : la plus fréquente\n- **Syphilis** primaire (Treponema pallidum)\n- **Chancre mou** (Haemophilus ducreyi)\n- **Donovanose** (Klebsiella granulomatis), **lymphogranulomatose vénérienne** (Chlamydia L1–L3)\n- Chez la personne VIH : ulcérations herpétiques chroniques, CMV\n\n## Causes non infectieuses\n- Traumatismes, toxidermie (syndrome de Stevens-Johnson), Behçet, aphtose, **cancer** (vulve, pénis)',
    diagnostic:
      '## Clinique\n- **Herpès** : vésicules en bouquet puis érosions **douloureuses**, récidivantes, adénopathies sensibles\n- **Syphilis** : **chancre** unique, propre, **induré**, **indolore**, adénopathie satellite\n- **Chancre mou** : ulcère douloureux, bords irréguliers, fond purulent, **bubon** inguinal suppuré\n- **Donovanose** : ulcère rouge granuleux, saignant, indolore, extensif\n- Lésion chronique (> 4 semaines), indurée, végétante : biopsie (cancer)\n\n## Examens\n- **TDR syphilis** et **VIH** ; TPHA/VDRL\n- Prélèvement (PCR herpès, examen direct) si disponible ; biopsie si atypique ou chronique',
    examens: [
      ['premiere_intention', 'serologie-syphilis', 'Syphilis.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Ulcération chronique.'],
      ['etiologique', 'beta-hcg', 'Grossesse (choix du traitement).'],
    ],
    scores: [],
    differentiels: [
      ['herpes-cutaneo-muqueux', 'Herpès génital.'],
      ['syphilis', 'Chancre syphilitique.'],
      ['toxidermies-graves', 'Prise médicamenteuse, atteinte muqueuse multiple.'],
      ['cancer-du-col-de-l-uterus', 'Ulcération du col, saignements.'],
    ],
    etiologies: '## Causes\n- Herpès, syphilis, chancre mou, donovanose, LGV ; traumatismes, Behçet, cancer',
    principes: [
      [
        'Traitement syndromique (OMS)',
        'Dès la première visite.',
        '- **Benzathine benzylpénicilline** 2,4 MUI IM dose unique (syphilis)\n- + **azithromycine** 1 g dose unique (chancre mou) ou ciprofloxacine (hors grossesse)\n- + **aciclovir** 400 mg 3 fois par jour 7–10 jours si lésions vésiculeuses ou récidivantes (herpès)\n- Donovanose et LGV : azithromycine ou doxycycline 3 semaines (hors grossesse : doxycycline)',
      ],
      [
        'Mesures associées',
        'Prévenir.',
        '- Traitement du **partenaire**, préservatifs, dépistage VIH et syphilis, contrôle à 7 jours\n- Bubon fluctuant : ponction à l’aiguille\n- Herpès récidivant ou VIH : traitement suppressif (aciclovir 400 mg 2 fois par jour)',
      ],
    ],
    molecules: [
      ['benzathine-benzylpenicilline', 'premiere', 'Syphilis'],
      ['azithromycine', 'premiere', 'Chancre mou, donovanose'],
      ['aciclovir', 'premiere', 'Herpès génital'],
      ['valaciclovir', 'alternative', 'Herpès génital'],
      ['doxycycline', 'alternative', 'LGV, donovanose (hors grossesse)'],
      ['ciprofloxacine', 'alternative', 'Chancre mou (hors grossesse)'],
    ],
    complications: [
      {
        nom: 'Transmission du VIH',
        fiche: 'infection-vih',
        description: 'Ulcération = porte d’entrée.',
        traitement: '- Dépistage, ARV, PrEP',
        clinique: '',
        paraclinique: '- Test VIH',
      },
      {
        nom: 'Syphilis secondaire et tardive',
        fiche: 'syphilis',
        description: 'Non traitée.',
        traitement: '- Pénicilline',
        clinique: '- Éruption, atteintes viscérales',
        paraclinique: '',
      },
      {
        nom: 'Herpès néonatal',
        fiche: 'herpes-cutaneo-muqueux',
        description: 'Herpès génital en fin de grossesse.',
        traitement: '- Aciclovir, césarienne si lésions',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Guérison des causes bactériennes sous traitement ; herpès récidivant',
    urgences: [],
    symptomes: [
      ['Ulcération génitale', 'tres_frequent'],
      ['Adénopathies', 'frequent'],
      ['Douleur pelvienne', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Traitement syndromique, dépistages', '- Ulcération chronique, VIH'],
      hgr: ['- Biopsie, prise en charge des complications', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Herpès génital',
        type: 'commune',
        description: 'Récidivant.',
        terrain: '- Adulte sexuellement actif',
        fonctionnels: '- Douleur, brûlures',
        generaux: '',
        physiques: '- Vésicules, érosions',
        paraclinique: '',
        etiologies: '- HSV-2',
        syndromes: [],
      },
      {
        nom: 'Chancre syphilitique',
        type: 'etiologique',
        description: 'Indolore.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Ulcère induré unique',
        paraclinique: '- TDR syphilis positif',
        etiologies: '- Treponema pallidum',
        syndromes: [],
      },
      {
        nom: 'Ulcération chronique du VIH',
        type: 'gravite',
        description: 'Herpès chronique, cancer.',
        terrain: '- VIH avancé',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Ulcère extensif',
        paraclinique: '- CD4 bas',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hydrosalpinx
  {
    ...GYN,
    slug: 'hydrosalpinx',
    nom: 'Hydrosalpinx',
    resume:
      'Dilatation de la trompe par un liquide, après obstruction de son pavillon, séquelle fréquente d’infection génitale haute (chlamydia, gonocoque, post-abortum ou post-partum) ou de tuberculose génitale : souvent découvert lors d’un bilan d’infertilité, douleurs pelviennes chroniques, masse latéro-utérine ; échographie (formation tubulaire anéchogène), hystérosalpingographie ; salpingectomie (ou ligature proximale) avant fécondation in vitro, car le liquide diminue les chances d’implantation ; prévention des IST et traitement précoce des infections.',
    definition:
      'Distension d’une trompe utérine obstruée à son extrémité distale, remplie de liquide séreux.',
    physiopathologie:
      '## Causes\n- **Infection génitale haute** (Chlamydia, gonocoque, germes du post-abortum et du post-partum)\n- **Tuberculose génitale**, endométriose, adhérences post-chirurgicales, schistosomiase\n\n## Conséquences\n- **Infertilité tubaire**, risque de **grossesse extra-utérine**\n- Reflux du liquide dans l’utérus : toxicité pour l’embryon (échec de FIV)\n- Surinfection (pyosalpinx), torsion',
    diagnostic:
      '## Clinique\n- Souvent asymptomatique ; **infertilité**, douleurs pelviennes chroniques, dyspareunie\n- Masse latéro-utérine sensible\n\n## Examens\n- **Échographie pelvienne** : formation tubulaire, anéchogène, à cloisons incomplètes\n- **Hystérosalpingographie** : trompe dilatée, absence de passage péritonéal\n- Cœlioscopie (diagnostic et traitement)\n- Dépistage des IST, recherche de tuberculose génitale selon le contexte',
    examens: [
      ['premiere_intention', 'echographie-pelvienne', 'Formation tubulaire anéchogène.'],
      ['confirmation', 'hysterosalpingographie', 'Obstruction distale.'],
      ['etiologique', 'prelevement-vaginal', 'IST.'],
      ['etiologique', 'tdr-vih', 'IST.'],
    ],
    scores: [],
    differentiels: [
      ['kystes-de-l-ovaire', 'Masse ovarienne.'],
      ['abces-tubo-ovarien', 'Fièvre, douleur aiguë.'],
      ['grossesse-extra-uterine', 'β-hCG positive.'],
      ['endometriose', 'Endométriome.'],
    ],
    etiologies: '## Causes\n- Infection génitale haute, tuberculose génitale, endométriose, adhérences',
    principes: [
      [
        'Infertilité',
        'Selon le projet.',
        '- **Salpingectomie** (ou ligature proximale) avant **FIV** (améliore les chances de grossesse)\n- Néosalpingostomie (chirurgie conservatrice) dans les formes modérées, en centre spécialisé ; risque de GEU ensuite',
      ],
      [
        'Infection',
        'Traiter.',
        '- Pyosalpinx ou infection active : antibiotiques (ceftriaxone + doxycycline + métronidazole), drainage\n- Tuberculose génitale : antituberculeux',
      ],
      [
        'Prévention',
        'IST.',
        '- Dépistage et traitement précoce des IST, préservatifs, soins après avortement de qualité',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'alternative', 'Infection active'],
      ['doxycycline', 'alternative', 'Infection active'],
      ['metronidazole', 'alternative', 'Infection active'],
      ['ibuprofene', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Infertilité tubaire',
        fiche: 'infertilite-tubaire',
        description: 'Obstruction.',
        traitement: '- Chirurgie, FIV',
        clinique: '',
        paraclinique: '- HSG',
      },
      {
        nom: 'Grossesse extra-utérine',
        fiche: 'grossesse-extra-uterine',
        description: 'Trompe lésée.',
        traitement: '- Chirurgie, méthotrexate',
        clinique: '- Douleur, saignement',
        paraclinique: '- β-hCG',
      },
      {
        nom: 'Pyosalpinx',
        fiche: 'abces-tubo-ovarien',
        description: 'Surinfection.',
        traitement: '- Antibiotiques, drainage',
        clinique: '- Fièvre',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Fertilité spontanée faible ; bons résultats de la FIV après salpingectomie',
    urgences: [],
    symptomes: [
      ['Infertilité', 'tres_frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Dyspareunie', 'occasionnel'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Prévention et traitement des IST, orientation', ''],
      hgr: ['- Échographie, HSG', ''],
      tert: ['- Cœlioscopie, AMP', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hydrosalpinx post-infectieux',
        type: 'commune',
        description: 'Séquelle d’IST.',
        terrain: '- Antécédent d’infection génitale',
        fonctionnels: '- Infertilité',
        generaux: '',
        physiques: '',
        paraclinique: '- Trompe dilatée',
        etiologies: '- Chlamydia, gonocoque',
        syndromes: [],
      },
      {
        nom: 'Hydrosalpinx tuberculeux',
        type: 'etiologique',
        description: 'Tuberculose génitale.',
        terrain: '- Contexte tuberculeux',
        fonctionnels: '- Infertilité, aménorrhée',
        generaux: '',
        physiques: '',
        paraclinique: '- Trompes en chapelet',
        etiologies: '- M. tuberculosis',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Malformations utérines
  {
    ...GYN,
    slug: 'malformations-uterines',
    nom: 'Malformations utérines',
    resume:
      'Anomalies congénitales du développement des canaux de Müller (≈ 5 % des femmes) : utérus cloisonné (le plus fréquent, associé aux fausses couches), bicorne, unicorne, didelphe, agénésie (syndrome de Rokitansky : aménorrhée primaire avec caractères sexuels normaux), hymen imperforé et cloisons vaginales (hématocolpos) ; découvertes lors de fausses couches répétées, d’accouchements prématurés, de présentations anormales, d’infertilité ou de douleurs ; échographie (3D), hystérosalpingographie, IRM, échographie rénale (malformations associées) ; résection hystéroscopique de la cloison, incision de l’hymen.',
    definition:
      'Anomalies de la formation, de la fusion ou de la résorption des canaux de Müller, responsables de malformations de l’utérus, du col et du vagin.',
    physiopathologie:
      '## Types\n- **Agénésie** (Mayer-Rokitansky-Küster-Hauser) : absence d’utérus et de vagin\n- **Utérus unicorne**, **didelphe** (deux utérus), **bicorne** (défaut de fusion)\n- **Utérus cloisonné** (défaut de résorption) : le plus fréquent, le plus lié aux fausses couches\n- Obstacles à l’écoulement : **hymen imperforé**, cloison vaginale transverse → hématocolpos\n\n## Associations\n- **Malformations rénales** (agénésie rénale) fréquentes',
    diagnostic:
      '## Circonstances\n- **Aménorrhée primaire** avec douleurs cycliques (obstacle) ou sans utérus (agénésie)\n- **Fausses couches répétées** (2e trimestre), accouchements prématurés, **présentations anormales**, dystocies, rétention placentaire\n- Infertilité, dyspareunie, dysménorrhée\n- Hymen imperforé : masse bleutée bombant à la vulve chez l’adolescente, rétention urinaire\n\n## Examens\n- **Échographie pelvienne** (3D si possible), **hystérosalpingographie**, hystéroscopie, IRM\n- **Échographie rénale** systématique ; caryotype si agénésie',
    examens: [
      ['premiere_intention', 'echographie-pelvienne', 'Morphologie utérine.'],
      ['confirmation', 'hysterosalpingographie', 'Cavité utérine.'],
      ['deuxieme_intention', 'hysteroscopie', 'Cloison.'],
      ['premiere_intention', 'echographie-renale', 'Malformations rénales associées.'],
      ['etiologique', 'caryotype', 'Agénésie.'],
    ],
    scores: [],
    differentiels: [
      ['amenorrhees-troubles-du-cycle', 'Causes hormonales d’aménorrhée.'],
      ['synechies-uterines', 'Lacunes acquises de la cavité.'],
      ['fibromes-uterins', 'Déformation acquise.'],
      ['beance-cervico-isthmique', 'Fausses couches tardives.'],
    ],
    etiologies: '## Mécanisme\n- Anomalie congénitale du développement des canaux de Müller',
    principes: [
      [
        'Traitement selon le type',
        'Chirurgie ciblée.',
        '- **Utérus cloisonné** avec fausses couches ou infertilité : **résection hystéroscopique** de la cloison\n- **Hymen imperforé** : incision cruciforme et évacuation de l’hématocolpos\n- Cloison vaginale : résection\n- Utérus bicorne, unicorne, didelphe : en général pas de chirurgie ; surveillance renforcée de la grossesse (cerclage si béance)',
      ],
      [
        'Agénésie',
        'Accompagner.',
        '- Information, soutien psychologique, création d’un néovagin (dilatations ou chirurgie) ; fertilité par gestation pour autrui ou greffe (pays où cela est possible)',
      ],
      [
        'Grossesse',
        'Surveiller.',
        '- Suivi rapproché (accouchement prématuré, présentation anormale), accouchement en structure',
      ],
    ],
    molecules: [
      ['progesterone', 'adjuvant', 'Prévention de l’accouchement prématuré (col court)'],
      ['estradiol', 'adjuvant', 'Après résection de cloison'],
    ],
    complications: [
      {
        nom: 'Fausses couches répétées',
        fiche: 'avortement-spontane',
        description: 'Utérus cloisonné.',
        traitement: '- Résection de la cloison',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Présentations anormales et prématurité',
        fiche: 'presentations-anormales',
        description: 'Cavité anormale.',
        traitement: '- Césarienne',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Hématocolpos et endométriose',
        fiche: 'endometriose',
        description: 'Obstacle à l’écoulement.',
        traitement: '- Levée de l’obstacle',
        clinique: '- Douleurs cycliques',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bonne fertilité après résection d’une cloison ; grossesses possibles mais à risque dans les autres formes',
    urgences: [],
    symptomes: [
      ['Aménorrhée', 'occasionnel'],
      ['Douleur pelvienne', 'occasionnel'],
      ['Infertilité', 'frequent'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Aménorrhée primaire, fausses couches répétées : orientation', ''],
      hgr: ['- Échographie, HSG, incision de l’hymen', ''],
      tert: ['- Hystéroscopie, chirurgie reconstructrice', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Utérus cloisonné',
        type: 'commune',
        description: 'Fausses couches.',
        terrain: '- Femme avec pertes fœtales',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Cloison à l’échographie 3D',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Hymen imperforé',
        type: 'gravite',
        description: 'Hématocolpos.',
        terrain: '- Adolescente',
        fonctionnels: '- Douleurs cycliques, aménorrhée',
        generaux: '',
        physiques: '- Membrane bombante bleutée',
        paraclinique: '- Hématocolpos',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Agénésie utéro-vaginale',
        type: 'etiologique',
        description: 'Rokitansky.',
        terrain: '- Adolescente',
        fonctionnels: '- Aménorrhée primaire',
        generaux: '',
        physiques: '- Caractères sexuels normaux, vagin court',
        paraclinique: '- Utérus absent',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Kyste dermoïde
  {
    ...GYN,
    slug: 'kyste-dermoide-ovaire',
    nom: 'Kyste dermoïde de l’ovaire',
    resume:
      'Tératome mature de l’ovaire, tumeur bénigne la plus fréquente de la femme jeune, contenant des tissus des trois feuillets (graisse, cheveux, dents, os) : souvent asymptomatique, découvert à l’échographie (masse hétérogène, échogène, cône d’ombre) ou lors d’une complication, surtout la torsion d’annexe (douleur brutale) ; rupture (péritonite chimique), infection, rarement transformation maligne ; kystectomie avec conservation de l’ovaire (cœlioscopie ou laparotomie), chirurgie urgente en cas de torsion.',
    definition:
      'Tumeur germinale bénigne de l’ovaire (tératome kystique mature) composée de tissus dérivés de l’ectoderme, du mésoderme et de l’endoderme.',
    physiopathologie:
      '## Caractéristiques\n- Tumeur germinale bénigne, bilatérale dans 10–15 %\n- Contenu : sébum, cheveux, dents, os, graisse\n- Lourd et mobile → **torsion d’annexe**\n\n## Complications\n- **Torsion** (la plus fréquente), **rupture** (péritonite chimique granulomateuse), infection\n- **Transformation maligne** rare (< 2 %, carcinome épidermoïde, femme ménopausée)\n- Encéphalite auto-immune anti-NMDA (rare)',
    diagnostic:
      '## Clinique\n- Souvent **asymptomatique**, pesanteur, douleurs pelviennes, masse latéro-utérine mobile\n- **Torsion** : douleur brutale intense, vomissements, défense\n\n## Examens\n- **Échographie pelvienne** : masse hétérogène avec zone hyperéchogène (tubercule de Rokitansky), **cône d’ombre**, niveau liquide-graisse\n- Radiographie (dents, calcifications), scanner (graisse)\n- **β-hCG** ; marqueurs (alpha-fœtoprotéine, CA 125) si masse suspecte ; histologie',
    examens: [
      ['confirmation', 'echographie-pelvienne', 'Masse hétérogène, cône d’ombre.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Graisse, calcifications.'],
      ['deuxieme_intention', 'alpha-foetoproteine', 'Tumeur germinale maligne.'],
      ['deuxieme_intention', 'ca-125', 'Masse suspecte.'],
      ['confirmation', 'biopsie-histologie', 'Pièce opératoire.'],
    ],
    scores: [],
    differentiels: [
      ['kystes-de-l-ovaire', 'Kystes fonctionnels.'],
      ['endometriose', 'Endométriome.'],
      ['hydrosalpinx', 'Formation tubulaire.'],
      ['grossesse-extra-uterine', 'β-hCG positive.'],
      ['Tumeur maligne de l’ovaire', 'Masse solide, ascite, CA 125 élevé.'],
    ],
    etiologies: '## Origine\n- Cellules germinales de l’ovaire',
    principes: [
      [
        'Chirurgie',
        'Exérèse conservatrice.',
        '- **Kystectomie** avec conservation de l’ovaire (cœlioscopie si disponible, sinon laparotomie), en évitant la rupture (lavage si rupture)\n- Examen de l’ovaire controlatéral\n- Femme ménopausée ou masse suspecte : annexectomie, histologie',
      ],
      [
        'Torsion',
        'Urgence.',
        '- **Chirurgie urgente** : détorsion et kystectomie (ovaire conservé si possible)',
      ],
      [
        'Grossesse',
        'Selon la taille.',
        '- Surveillance ; chirurgie au 2e trimestre si volumineux ou compliqué',
      ],
    ],
    molecules: [
      ['paracetamol', 'adjuvant', 'Douleur'],
      ['morphine', 'adjuvant', 'Torsion'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie'],
    ],
    complications: [
      {
        nom: 'Torsion d’annexe',
        fiche: 'torsion-d-annexe',
        description: 'Kyste lourd et mobile.',
        traitement: '- Chirurgie urgente',
        clinique: '- Douleur brutale, vomissements',
        paraclinique: '- Échographie Doppler',
      },
      {
        nom: 'Rupture et péritonite chimique',
        description: 'Contenu sébacé.',
        traitement: '- Lavage péritonéal',
        clinique: '- Douleur, défense',
        paraclinique: '',
      },
      {
        nom: 'Transformation maligne',
        description: 'Rare.',
        traitement: '- Chirurgie, oncologie',
        clinique: '',
        paraclinique: '- Histologie',
      },
    ],
    evolution: '## Pronostic\n- Excellent après kystectomie ; récidive rare',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Masse pelvienne', 'frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: ['- Masse pelvienne : orientation ; douleur brutale : référence urgente', ''],
      hgr: ['- Échographie, kystectomie', ''],
      tert: ['- Cœlioscopie', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical':
        'Douleur pelvienne brutale avec vomissements chez une femme porteuse d’un kyste',
    },
    formes: [
      {
        nom: 'Kyste dermoïde asymptomatique',
        type: 'commune',
        description: 'Découverte fortuite.',
        terrain: '- Femme jeune',
        fonctionnels: '',
        generaux: '',
        physiques: '- Masse latéro-utérine',
        paraclinique: '- Cône d’ombre',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Kyste dermoïde tordu',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Douleur brutale',
        generaux: '',
        physiques: '- Défense',
        paraclinique: '- Doppler',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
    ],
  },
];
