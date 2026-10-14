'use strict';

/**
 * Lot 57 (phase 2, gynécologie oncologique) — cancer de l'endomètre, cancer de l'ovaire, tumeurs
 * trophoblastiques gestationnelles, cancer de la vulve, lésions précancéreuses du col. Rédigé par
 * IA (OMS, ESMO, NCCN) : à valider. Les chimiothérapies relèvent des centres d'oncologie.
 */

const ONCO = { departement: 'gynecologie-obstetrique', specialite: 'Gynécologie oncologique' };

module.exports = [
  // =================================================================== Cancer de l'endomètre
  {
    ...ONCO,
    slug: 'cancer-endometre',
    nom: 'Cancer de l’endomètre',
    resume:
      'Cancer de la femme ménopausée (pic 55–70 ans), favorisé par l’obésité, le diabète, le SOPK, l’anovulation, le tamoxifène et l’œstrogénothérapie seule : se révèle tôt par des saignements après la ménopause (tout saignement post-ménopausique doit être exploré) ; échographie (endomètre > 4 mm), biopsie de l’endomètre ; bilan d’extension (examen, radiographie thoracique, scanner) ; hystérectomie totale avec annexectomie bilatérale ± curage, radiothérapie selon le stade ; bon pronostic aux stades précoces.',
    definition:
      'Tumeur maligne développée aux dépens de la muqueuse du corps utérin, le plus souvent adénocarcinome endométrioïde (type 1, hormonodépendant).',
    physiopathologie:
      '## Types\n- **Type 1** (80 %) : endométrioïde, lié à l’**hyperœstrogénie** sans progestérone, précédé d’hyperplasie atypique, bon pronostic\n- **Type 2** : séreux, à cellules claires, femme âgée, plus agressif\n\n## Facteurs\n- **Obésité**, **diabète**, HTA, **SOPK**, nulliparité, ménopause tardive, **tamoxifène**, œstrogènes seuls, syndrome de Lynch\n\n## Extension\n- Myomètre, col, annexes, ganglions pelviens et lombo-aortiques, poumons',
    diagnostic:
      '## Clinique\n- **Saignement après la ménopause** (90 %), leucorrhées, métrorragies chez la femme en périménopause\n- Douleurs, masse, ascite (formes avancées)\n\n## Examens\n- **Échographie pelvienne** endovaginale : endomètre > 4 mm après la ménopause\n- **Biopsie de l’endomètre** (pipelle) ou curetage, hystéroscopie\n- Bilan d’extension : examen clinique, **radiographie thoracique**, **scanner** abdomino-pelvien (IRM si disponible)\n- NFS, créatinine, glycémie',
    examens: [
      ['premiere_intention', 'echographie-pelvienne', 'Endomètre épais.'],
      ['confirmation', 'biopsie-histologie', 'Adénocarcinome.'],
      ['deuxieme_intention', 'hysteroscopie', 'Biopsie dirigée.'],
      ['gravite', 'scanner-abdominal', 'Extension.'],
      ['gravite', 'radiographie-thoracique', 'Métastases.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'glycemie', 'Diabète associé.'],
    ],
    scores: [],
    differentiels: [
      ['saignements-apres-menopause', 'Démarche diagnostique.'],
      ['polypes-hyperplasie-endometre', 'Lésions bénignes ou précancéreuses.'],
      ['cancer-du-col-de-l-uterus', 'Lésion du col.'],
      ['Atrophie de l’endomètre', 'Endomètre fin.'],
    ],
    etiologies:
      '## Facteurs\n- Obésité, diabète, SOPK, nulliparité, tamoxifène, œstrogènes seuls, syndrome de Lynch',
    principes: [
      [
        'Chirurgie',
        'Traitement de base.',
        '- **Hystérectomie totale** avec **annexectomie bilatérale**, cytologie péritonéale, ± curage ganglionnaire selon le stade et le type',
      ],
      [
        'Traitements complémentaires',
        'Selon le stade.',
        '- **Radiothérapie** (curiethérapie vaginale, radiothérapie pelvienne) si facteurs de risque\n- **Chimiothérapie** (carboplatine-paclitaxel) dans les stades avancés ou type 2\n- **Progestatifs** à forte dose (médroxyprogestérone) : formes avancées hormonodépendantes ou femme inopérable\n- Soins palliatifs (douleur : morphine)',
      ],
      [
        'Prévention',
        'Réduire les risques.',
        '- Contrôle du poids et du diabète, progestatifs en cas d’anovulation chronique, exploration rapide des saignements post-ménopausiques',
      ],
    ],
    molecules: [
      ['medroxyprogesterone', 'alternative', 'Formes hormonodépendantes avancées'],
      ['carboplatine', 'alternative', 'Chimiothérapie (centre spécialisé)'],
      ['paclitaxel', 'alternative', 'Chimiothérapie (centre spécialisé)'],
      ['morphine', 'adjuvant', 'Douleurs'],
    ],
    complications: [
      {
        nom: 'Anémie',
        fiche: 'anemie-ferriprive',
        description: 'Saignements.',
        traitement: '- Fer, transfusion',
        clinique: '- Pâleur',
        paraclinique: '- NFS',
      },
      {
        nom: 'Métastases',
        description: 'Stades avancés.',
        traitement: '- Chimiothérapie, soins palliatifs',
        clinique: '- Ascite, dyspnée',
        paraclinique: '- Imagerie',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 5 ans > 85 % au stade I ; défavorable dans les formes avancées et de type 2',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Leucorrhées', 'frequent'],
      ['Douleur pelvienne', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'ESMO — recommandations de pratique clinique',
      'NCCN — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Saignement après la ménopause : orientation rapide', ''],
      hgr: ['- Échographie, biopsie, hystérectomie', ''],
      tert: ['- Oncologie, radiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Cancer endométrioïde localisé',
        type: 'commune',
        description: 'Stade I.',
        terrain: '- Femme ménopausée obèse',
        fonctionnels: '- Saignement post-ménopausique',
        generaux: '',
        physiques: '',
        paraclinique: '- Endomètre épais, biopsie',
        etiologies: '- Hyperœstrogénie',
        syndromes: [],
      },
      {
        nom: 'Cancer avancé',
        type: 'gravite',
        description: 'Extension.',
        terrain: '',
        fonctionnels: '- Douleurs',
        generaux: '- Amaigrissement',
        physiques: '- Ascite, masse',
        paraclinique: '- Métastases',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cancer de l'ovaire
  {
    ...ONCO,
    slug: 'cancer-ovaire',
    nom: 'Cancer de l’ovaire',
    resume:
      'Cancer gynécologique le plus létal, souvent diagnostiqué tardivement (symptômes vagues : ballonnement, augmentation du volume abdominal, satiété précoce, douleurs, troubles urinaires ou digestifs) : femme de plus de 50 ans surtout (carcinomes épithéliaux), tumeurs germinales chez la femme jeune ; échographie (masse complexe, ascite), CA 125, scanner ; chirurgie de stadification et de cytoréduction maximale + chimiothérapie à base de platine (carboplatine-paclitaxel) ; soins palliatifs (ascite, occlusion).',
    definition:
      'Tumeur maligne de l’ovaire, épithéliale (90 %, surtout carcinome séreux de haut grade), germinale (femme jeune) ou des cordons sexuels.',
    physiopathologie:
      '## Facteurs\n- Âge, antécédents familiaux (**BRCA1/2**, syndrome de Lynch), nulliparité, endométriose\n- Facteurs protecteurs : grossesses, allaitement, pilule, ligature des trompes\n\n## Extension\n- **Péritonéale** (carcinose, **ascite**), ganglionnaire, pleurale (épanchement), hépatique\n- Diagnostic souvent au stade III–IV',
    diagnostic:
      '## Clinique\n- **Ballonnement**, augmentation du volume de l’abdomen, satiété précoce, douleurs pelviennes ou abdominales, troubles urinaires, perte de poids\n- **Masse pelvienne** fixe, irrégulière, **ascite**, nodules du cul-de-sac\n- Tumeurs germinales : femme jeune, masse rapide, douleurs\n\n## Examens\n- **Échographie** pelvienne et abdominale : masse complexe (solide et liquide, végétations), ascite\n- **CA 125** (épithéliales) ; β-hCG, **alpha-fœtoprotéine**, LDH (germinales, femme jeune)\n- **Scanner** thoraco-abdomino-pelvien, radiographie thoracique (épanchement)\n- Cytologie de l’ascite ; **histologie** chirurgicale',
    examens: [
      ['premiere_intention', 'echographie-pelvienne', 'Masse complexe.'],
      ['premiere_intention', 'ca-125', 'Marqueur.'],
      ['gravite', 'scanner-abdominal', 'Extension péritonéale.'],
      ['gravite', 'radiographie-thoracique', 'Épanchement pleural.'],
      ['etiologique', 'alpha-foetoproteine', 'Tumeur germinale.'],
      ['etiologique', 'beta-hcg', 'Tumeur germinale, grossesse.'],
      ['confirmation', 'biopsie-histologie', 'Diagnostic.'],
      ['premiere_intention', 'ponction-epanchement', 'Cytologie de l’ascite.'],
    ],
    scores: [],
    differentiels: [
      ['kystes-de-l-ovaire', 'Kyste fonctionnel ou bénin.'],
      ['kyste-dermoide-ovaire', 'Tératome mature.'],
      ['endometriose', 'Endométriome.'],
      ['tuberculose-extrapulmonaire', 'Tuberculose péritonéale : ascite, CA 125 élevé.'],
      ['cancer-colorectal', 'Métastases ovariennes (Krukenberg).'],
      ['ascite-et-decompensation-cirrhose', 'Ascite d’origine hépatique.'],
    ],
    etiologies: '## Facteurs\n- Âge, BRCA, Lynch, nulliparité, endométriose',
    principes: [
      [
        'Chirurgie',
        'Stadifier et réduire.',
        '- **Laparotomie** : hystérectomie, annexectomie bilatérale, omentectomie, biopsies péritonéales, exérèse maximale (aucun résidu visible)\n- Femme jeune avec tumeur germinale ou stade précoce : chirurgie conservatrice de la fertilité',
      ],
      [
        'Chimiothérapie',
        'Centre d’oncologie.',
        '- **Carboplatine + paclitaxel** (6 cycles), néoadjuvante si exérèse impossible d’emblée\n- Tumeurs germinales : BEP (bléomycine, étoposide, cisplatine), très chimiosensibles',
      ],
      [
        'Soins palliatifs',
        'Qualité de vie.',
        '- Ponctions d’ascite, prise en charge de l’occlusion, **morphine**, nutrition, soutien',
      ],
    ],
    molecules: [
      ['carboplatine', 'premiere', 'Chimiothérapie (centre spécialisé)'],
      ['paclitaxel', 'premiere', 'Chimiothérapie (centre spécialisé)'],
      ['cisplatine', 'alternative', 'Tumeurs germinales (BEP)'],
      ['etoposide', 'alternative', 'Tumeurs germinales (BEP)'],
      ['morphine', 'adjuvant', 'Douleurs'],
    ],
    complications: [
      {
        nom: 'Ascite et épanchement pleural',
        description: 'Carcinose.',
        traitement: '- Ponctions, chimiothérapie',
        clinique: '- Distension, dyspnée',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Occlusion intestinale',
        fiche: 'occlusion-intestinale-aigue',
        description: 'Carcinose péritonéale.',
        traitement: '- Médical ou chirurgical, soins palliatifs',
        clinique: '- Vomissements, arrêt du transit',
        paraclinique: '',
      },
      {
        nom: 'Thromboses',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Cancer.',
        traitement: '- Héparine',
        clinique: '- Œdème du membre',
        paraclinique: '- Doppler',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 5 ans ≈ 90 % au stade I, < 30 % au stade III–IV ; excellent pour les tumeurs germinales traitées',
    urgences: [],
    symptomes: [
      ['Distension abdominale', 'tres_frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Masse pelvienne', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: [
      'ESMO — recommandations de pratique clinique',
      'NCCN — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Masse pelvienne, ascite : orientation rapide', ''],
      hgr: ['- Échographie, CA 125, chirurgie', ''],
      tert: ['- Oncologie, chimiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Carcinome épithélial avancé',
        type: 'commune',
        description: 'Carcinose.',
        terrain: '- Femme > 50 ans',
        fonctionnels: '- Ballonnement, douleurs',
        generaux: '- Amaigrissement',
        physiques: '- Masse, ascite',
        paraclinique: '- CA 125 élevé',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Tumeur germinale maligne',
        type: 'terrain',
        description: 'Femme jeune.',
        terrain: '- Adolescente, femme jeune',
        fonctionnels: '- Douleur, masse rapide',
        generaux: '',
        physiques: '- Masse pelvienne',
        paraclinique: '- AFP, β-hCG, LDH',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Tumeurs trophoblastiques
  {
    ...ONCO,
    slug: 'tumeurs-trophoblastiques-gestationnelles',
    nom: 'Tumeurs trophoblastiques gestationnelles',
    resume:
      'Proliférations malignes du trophoblaste (môle invasive, choriocarcinome, tumeur du site d’implantation) survenant surtout après une môle, mais aussi après un avortement, un accouchement ou une GEU : saignements persistants, utérus augmenté, métastases (poumon : toux, hémoptysie ; vagin : nodules bleutés ; cerveau ; foie) ; diagnostic sur la β-hCG en plateau ou en hausse après évacuation d’une môle, ou élevée sans grossesse ; score pronostique FIGO/OMS ; méthotrexate (faible risque) ou polychimiothérapie EMA-CO (haut risque) : guérison > 90 %.',
    definition:
      'Néoplasies malignes issues du trophoblaste gestationnel, diagnostiquées sur l’évolution de la β-hCG et classées par le score FIGO/OMS (faible risque ≤ 6, haut risque ≥ 7).',
    physiopathologie:
      '## Formes\n- **Môle invasive** : invasion du myomètre après une môle\n- **Choriocarcinome** : très métastatique (poumon, vagin, cerveau, foie), après n’importe quelle grossesse\n- Tumeur trophoblastique du site d’implantation (rare, peu sensible à la chimiothérapie)\n\n## Marqueur\n- **β-hCG** : diagnostic, pronostic et suivi',
    diagnostic:
      '## Circonstances\n- Après évacuation d’une môle : **β-hCG en plateau** (3 semaines) ou **en hausse** (2 semaines), ou persistante > 6 mois\n- **Saignements persistants** après accouchement ou avortement, utérus augmenté\n- Métastases : **hémoptysie**, toux, dyspnée, nodules vaginaux, céphalées, convulsions\n\n## Examens\n- **β-hCG** quantitative\n- **Échographie pelvienne** Doppler, **radiographie thoracique** (ou scanner), scanner cérébral et hépatique si métastases pulmonaires\n- Pas de biopsie des lésions vaginales (hémorragie)\n- Score FIGO/OMS (âge, grossesse antérieure, intervalle, β-hCG, taille, sites et nombre de métastases, échec antérieur)',
    examens: [
      ['confirmation', 'beta-hcg', 'Diagnostic et suivi.'],
      ['premiere_intention', 'echographie-pelvienne', 'Atteinte utérine.'],
      ['gravite', 'radiographie-thoracique', 'Métastases pulmonaires.'],
      ['gravite', 'scanner-cerebral', 'Métastases cérébrales.'],
      ['gravite', 'scanner-abdominal', 'Métastases hépatiques.'],
      ['premiere_intention', 'nfs', 'Avant chimiothérapie.'],
      ['premiere_intention', 'bilan-hepatique', 'Avant méthotrexate.'],
    ],
    scores: [],
    differentiels: [
      ['mole-hydatiforme', 'Môle non compliquée.'],
      ['grossesse-extra-uterine', 'β-hCG positive avec utérus vide.'],
      ['hemorragie-secondaire-post-partum', 'Rétention placentaire.'],
      ['tuberculose-pulmonaire', 'Nodules pulmonaires, hémoptysie.'],
    ],
    etiologies: '## Antécédent\n- Môle hydatiforme (50 %), avortement, accouchement, GEU',
    principes: [
      [
        'Faible risque (score ≤ 6)',
        'Monochimiothérapie.',
        '- **Méthotrexate** (1 mg/kg IM J1, J3, J5, J7 avec acide folinique, ou 50 mg/m² hebdomadaire) ou **dactinomycine**\n- Poursuite jusqu’à normalisation de la β-hCG puis 2–3 cures de consolidation',
      ],
      [
        'Haut risque (score ≥ 7)',
        'Polychimiothérapie.',
        '- **EMA-CO** (étoposide, méthotrexate, dactinomycine, cyclophosphamide, vincristine) en centre spécialisé\n- Métastases cérébrales : radiothérapie ou méthotrexate à forte dose',
      ],
      [
        'Suivi',
        'β-hCG.',
        '- β-hCG mensuelle pendant 12 mois après la guérison, **contraception** efficace pendant le suivi\n- Hystérectomie dans certaines formes (résistance, site d’implantation, femme sans désir de grossesse)',
      ],
    ],
    molecules: [
      ['methotrexate', 'premiere', 'Faible risque (centre spécialisé)'],
      ['dactinomycine', 'alternative', 'Faible risque, EMA-CO'],
      ['etoposide', 'alternative', 'EMA-CO'],
      ['cyclophosphamide', 'alternative', 'EMA-CO'],
      ['vincristine', 'alternative', 'EMA-CO'],
      ['medroxyprogesterone', 'adjuvant', 'Contraception pendant le suivi'],
    ],
    complications: [
      {
        nom: 'Hémorragie',
        fiche: 'choc-hemorragique-obstetrical',
        description: 'Utérus, métastases vaginales.',
        traitement: '- Tamponnement, embolisation, transfusion',
        clinique: '- Saignement',
        paraclinique: '',
      },
      {
        nom: 'Métastases cérébrales',
        description: 'Choriocarcinome.',
        traitement: '- Chimiothérapie, radiothérapie',
        clinique: '- Céphalées, convulsions',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Insuffisance respiratoire',
        description: 'Métastases pulmonaires étendues.',
        traitement: '- Chimiothérapie',
        clinique: '- Dyspnée, hémoptysie',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison ≈ 100 % (faible risque) et > 85 % (haut risque) avec la chimiothérapie ; fertilité généralement conservée',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Hémoptysie', 'occasionnel'],
      ['Toux', 'occasionnel'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      'ESMO — recommandations de pratique clinique',
      'NCCN — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Saignements persistants après grossesse : β-hCG, orientation', ''],
      hgr: ['- Suivi de la β-hCG après môle', ''],
      tert: ['- Chimiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tumeur trophoblastique à faible risque',
        type: 'commune',
        description: 'Après môle.',
        terrain: '- Suivi post-môlaire',
        fonctionnels: '- Saignements',
        generaux: '',
        physiques: '- Utérus augmenté',
        paraclinique: '- β-hCG en plateau',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Choriocarcinome métastatique',
        type: 'gravite',
        description: 'Haut risque.',
        terrain: '- Après tout type de grossesse',
        fonctionnels: '- Hémoptysie, céphalées',
        generaux: '',
        physiques: '- Nodules vaginaux',
        paraclinique: '- β-hCG très élevée, métastases',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cancer de la vulve
  {
    ...ONCO,
    slug: 'cancer-vulve',
    nom: 'Cancer de la vulve',
    resume:
      'Cancer rare de la femme âgée (sur lichen scléreux) ou plus jeune (lié aux HPV, plus fréquent chez la femme vivant avec le VIH) : prurit chronique, lésion vulvaire (nodule, ulcération, plaque leucoplasique ou pigmentée) qui ne guérit pas, saignements, douleurs, adénopathies inguinales ; diagnostic souvent tardif par pudeur ou traitement prolongé de « mycoses » ; biopsie de toute lésion vulvaire persistante ; chirurgie (exérèse large ± curage inguinal), radiothérapie ± chimiothérapie ; prévention : vaccination HPV, traitement du lichen scléreux, dépistage.',
    definition:
      'Tumeur maligne de la vulve, le plus souvent carcinome épidermoïde, développée sur lichen scléreux ou sur néoplasie intra-épithéliale vulvaire liée aux HPV.',
    physiopathologie:
      '## Voies\n- **Lichen scléreux** (femme âgée) → néoplasie intra-épithéliale différenciée → carcinome\n- **HPV** (16, 18) → néoplasie intra-épithéliale vulvaire → carcinome (femme plus jeune, **VIH**, tabac)\n\n## Extension\n- Locale (vagin, urètre, anus), **ganglions inguinaux** puis pelviens',
    diagnostic:
      '## Clinique\n- **Prurit** chronique, brûlures, **lésion vulvaire** : nodule, ulcération, bourgeon, plaque blanche ou pigmentée, persistant malgré les traitements\n- Saignements, écoulement, douleurs, dysurie\n- **Adénopathies inguinales**\n\n## Examens\n- **Biopsie** de toute lésion suspecte ou persistante\n- Examen du col, du vagin et de l’anus (HPV multifocal), **TDR VIH**\n- Bilan d’extension : palpation inguinale, échographie inguinale, scanner, radiographie thoracique',
    examens: [
      ['confirmation', 'biopsie-histologie', 'Carcinome épidermoïde.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'depistage-col-iva-hpv', 'Atteinte multifocale HPV.'],
      ['gravite', 'echographie-parties-molles', 'Ganglions inguinaux.'],
      ['gravite', 'scanner-abdominal', 'Ganglions pelviens.'],
      ['gravite', 'radiographie-thoracique', 'Métastases.'],
    ],
    scores: [],
    differentiels: [
      ['lichen-sclereux-vulvaire', 'Lésion précancéreuse.'],
      ['condylomes-genitaux', 'Végétations bénignes.'],
      ['ulcerations-genitales', 'Ulcérations infectieuses.'],
      ['infections-genitales-basses', 'Candidose vulvaire.'],
    ],
    etiologies: '## Facteurs\n- Lichen scléreux, HPV, VIH, tabac, âge',
    principes: [
      [
        'Traitement',
        'Centre spécialisé.',
        '- **Exérèse large** (vulvectomie partielle ou totale) avec marges saines\n- **Ganglion sentinelle** ou **curage inguinal** selon la taille et la profondeur\n- **Radiothérapie** (± cisplatine) : tumeurs avancées, ganglions envahis, femme inopérable\n- Soins palliatifs : douleur, soins locaux',
      ],
      [
        'Prévention',
        'Agir tôt.',
        '- **Vaccination HPV**, traitement et surveillance du **lichen scléreux**, biopsie de toute lésion vulvaire persistante, dépistage chez la femme VIH',
      ],
    ],
    molecules: [
      ['cisplatine', 'alternative', 'Radio-chimiothérapie (centre spécialisé)'],
      ['morphine', 'adjuvant', 'Douleurs'],
      ['vaccin-papillomavirus-hpv', 'premiere', 'Prévention'],
      ['clobetasol-propionate', 'adjuvant', 'Lichen scléreux associé'],
    ],
    complications: [
      {
        nom: 'Métastases ganglionnaires',
        description: 'Inguinales, pelviennes.',
        traitement: '- Curage, radiothérapie',
        clinique: '- Adénopathies',
        paraclinique: '- Imagerie',
      },
      {
        nom: 'Lymphœdème des membres inférieurs',
        description: 'Après curage.',
        traitement: '- Contention, drainage',
        clinique: '- Œdème',
        paraclinique: '',
      },
      {
        nom: 'Infection et désunion',
        fiche: 'infection-du-site-operatoire',
        description: 'Après vulvectomie.',
        traitement: '- Soins locaux, antibiotiques',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 5 ans > 80 % sans atteinte ganglionnaire, < 50 % avec ganglions envahis',
    urgences: [],
    symptomes: [
      ['Prurit', 'tres_frequent'],
      ['Ulcération génitale', 'frequent'],
      ['Tuméfaction vulvaire', 'frequent'],
      ['Saignement vaginal', 'occasionnel'],
      ['Adénopathies', 'occasionnel'],
    ],
    sources: [
      'ESMO — recommandations de pratique clinique',
      'NCCN — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Lésion vulvaire persistante : orientation pour biopsie', ''],
      hgr: ['- Biopsie, exérèse', ''],
      tert: ['- Chirurgie oncologique, radiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Carcinome sur lichen scléreux',
        type: 'commune',
        description: 'Femme âgée.',
        terrain: '- Femme ménopausée',
        fonctionnels: '- Prurit chronique',
        generaux: '',
        physiques: '- Ulcération sur plaque blanche',
        paraclinique: '- Biopsie',
        etiologies: '- Lichen scléreux',
        syndromes: [],
      },
      {
        nom: 'Carcinome lié aux HPV',
        type: 'terrain',
        description: 'Femme jeune, VIH.',
        terrain: '- Femme VIH',
        fonctionnels: '',
        generaux: '',
        physiques: '- Lésions multifocales',
        paraclinique: '- HPV',
        etiologies: '- HPV 16, 18',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Lésions précancéreuses du col
  {
    ...ONCO,
    slug: 'lesions-precancereuses-col',
    nom: 'Lésions précancéreuses du col',
    resume:
      'Néoplasies intra-épithéliales du col (CIN 1 à 3) liées à une infection persistante par les HPV oncogènes (16, 18…), asymptomatiques, détectées par le dépistage (test HPV, inspection visuelle à l’acide acétique, frottis) : traiter avant l’évolution vers le cancer ; approche « dépister et traiter » (OMS) : ablation thermique ou cryothérapie immédiate si la lésion est accessible, résection à l’anse diathermique (RAD/LEEP) si lésion étendue ou zone de jonction non visible ; contrôle à 12 mois ; femme VIH : dépistage dès le diagnostic, tous les 3 ans ; vaccination HPV des filles de 9–14 ans.',
    definition:
      'Lésions précancéreuses de l’épithélium du col utérin (CIN 1, 2, 3 ou lésions malpighiennes intra-épithéliales de bas et de haut grade), précurseurs du cancer invasif du col.',
    physiopathologie:
      '## Histoire naturelle\n- Infection par un **HPV oncogène** (très fréquente, souvent transitoire) → persistance → **CIN** → cancer invasif en 10–20 ans\n- CIN 1 : régression fréquente ; CIN 2–3 : risque de progression\n\n## Facteurs\n- **VIH** (persistance et progression plus rapides), tabac, multiparité, partenaires multiples, début précoce des rapports',
    diagnostic:
      '## Dépistage (OMS)\n- **Test HPV** (préféré) à partir de 30 ans tous les 5–10 ans ; **IVA** (inspection visuelle à l’acide acétique) si HPV indisponible\n- **Femme VIH** : dès le diagnostic (à partir de 25 ans), tous les 3–5 ans\n\n## Évaluation d’un dépistage positif\n- **IVA** ou **colposcopie** : lésion acidophile, taille, zone de jonction visible, suspicion de cancer\n- **Biopsie** si suspicion de cancer ou lésion atypique',
    examens: [
      ['confirmation', 'depistage-col-iva-hpv', 'Dépistage.'],
      ['confirmation', 'colposcopie', 'Évaluation de la lésion.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Grade, cancer.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
    ],
    scores: [],
    differentiels: [
      ['cancer-du-col-de-l-uterus', 'Lésion invasive.'],
      ['cervicites', 'Inflammation infectieuse.'],
      ['Ectropion', 'Zone rouge sans lésion acidophile.'],
      ['condylomes-genitaux', 'Lésions à HPV bas risque.'],
    ],
    etiologies: '## Cause\n- Infection persistante par HPV oncogènes (16, 18, 31, 33, 45…)',
    principes: [
      [
        'Dépister et traiter',
        'Même visite si possible.',
        '- Lésion éligible (entièrement visible, < 75 % du col, pas de suspicion de cancer) : **ablation thermique** ou **cryothérapie** immédiate\n- Lésion étendue ou pénétrant le canal, zone de jonction non visible : **résection à l’anse diathermique (RAD/LEEP)** ou conisation\n- Suspicion de cancer : **biopsie** et orientation',
      ],
      [
        'Suivi',
        'Contrôler.',
        '- Nouveau dépistage à **12 mois** après traitement, puis selon les directives\n- Femme VIH : suivi rapproché',
      ],
      [
        'Prévention primaire',
        'Vacciner.',
        '- **Vaccin HPV** des filles de 9–14 ans (1 ou 2 doses selon les directives), éducation, préservatif, arrêt du tabac',
      ],
    ],
    molecules: [
      ['vaccin-papillomavirus-hpv', 'premiere', 'Prévention primaire'],
      ['lidocaine', 'premiere', 'Anesthésie pour RAD'],
      ['ibuprofene', 'adjuvant', 'Douleurs après traitement'],
    ],
    complications: [
      {
        nom: 'Évolution vers le cancer',
        fiche: 'cancer-du-col-de-l-uterus',
        description: 'Absence de traitement.',
        traitement: '- Prise en charge oncologique',
        clinique: '- Saignements',
        paraclinique: '',
      },
      {
        nom: 'Saignement et infection après traitement',
        description: 'Ablation, RAD.',
        traitement: '- Hémostase, antibiotiques',
        clinique: '- Saignement, pertes fétides',
        paraclinique: '',
      },
      {
        nom: 'Accouchement prématuré',
        fiche: 'beance-cervico-isthmique',
        description: 'Conisation large.',
        traitement: '- Surveillance du col',
        clinique: '',
        paraclinique: '- Échographie du col',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison > 90 % après traitement ; le dépistage-traitement prévient la majorité des cancers du col',
    urgences: [],
    symptomes: [],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'NCCN — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- IVA, ablation thermique ou cryothérapie, vaccination HPV',
        '- Lésion non éligible, suspicion de cancer',
      ],
      hgr: ['- Colposcopie, RAD, biopsie', ''],
      tert: ['- Conisation, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Lésion éligible à l’ablation',
        type: 'commune',
        description: 'Dépister et traiter.',
        terrain: '- Femme de 30 à 49 ans',
        fonctionnels: '',
        generaux: '',
        physiques: '- Lésion acidophile visible',
        paraclinique: '- IVA ou HPV positif',
        etiologies: '- HPV',
        syndromes: [],
      },
      {
        nom: 'Lésion de haut grade chez la femme VIH',
        type: 'gravite',
        description: 'Progression rapide.',
        terrain: '- Femme VIH',
        fonctionnels: '',
        generaux: '',
        physiques: '- Lésion étendue',
        paraclinique: '- CIN 2–3',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
