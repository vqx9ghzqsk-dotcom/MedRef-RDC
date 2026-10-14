'use strict';

/**
 * Lot 55 (phase 2, gynécologie, partie 1) — endométriose, syndrome des ovaires polykystiques,
 * ménopause, prolapsus génital, kyste et abcès de la glande de Bartholin. Rédigé par IA (OMS,
 * Normes et directives SR, Harrison) : à valider.
 */

const GYN = { departement: 'gynecologie-obstetrique', specialite: 'Gynécologie' };

module.exports = [
  // =================================================================== Endométriose
  {
    ...GYN,
    slug: 'endometriose',
    nom: 'Endométriose',
    resume:
      'Présence de tissu endométrial en dehors de l’utérus (ovaires, péritoine, ligaments, cloison recto-vaginale) chez 10 % des femmes en âge de procréer, sous-diagnostiquée en Afrique : dysménorrhée progressive et invalidante, dyspareunie profonde, douleurs pelviennes chroniques, douleurs à la défécation pendant les règles, infertilité ; examen, échographie (endométriome), cœlioscopie (diagnostic de certitude) ; AINS, progestatifs en continu ou pilule en continu, analogues de la GnRH ; chirurgie pour les endométriomes ou l’infertilité ; maladie chronique nécessitant un accompagnement.',
    definition:
      'Maladie inflammatoire chronique œstrogéno-dépendante caractérisée par la présence de tissu semblable à l’endomètre en dehors de la cavité utérine.',
    physiopathologie:
      '## Mécanismes\n- **Menstruation rétrograde** (reflux de sang menstruel par les trompes), facteurs immunitaires et génétiques\n- Lésions qui saignent à chaque cycle → **inflammation**, **adhérences**, kystes ovariens (**endométriomes**)\n- Altération de la fertilité : adhérences tubaires, qualité ovocytaire, inflammation\n\n## Formes\n- Péritonéale superficielle, ovarienne (endométriome), **profonde** (cloison recto-vaginale, vessie, intestin)\n- **Adénomyose** : endométriose dans le myomètre',
    diagnostic:
      '## Clinique\n- **Dysménorrhée** secondaire ou progressive, résistante aux AINS, absentéisme\n- **Dyspareunie** profonde, douleurs pelviennes chroniques\n- Douleurs à la défécation ou à la miction pendant les règles, rectorragies ou hématurie cycliques\n- **Infertilité**\n- Examen : nodules du cul-de-sac postérieur, utérus rétroversé fixé, masse annexielle\n\n## Examens\n- **Échographie pelvienne** (endométriome : kyste « chocolat » homogène ; adénomyose)\n- IRM en centre spécialisé ; **cœlioscopie** (diagnostic et traitement)\n- Éliminer : infection génitale haute, IST, grossesse',
    examens: [
      ['premiere_intention', 'echographie-pelvienne', 'Endométriome, adénomyose.'],
      ['etiologique', 'prelevement-vaginal', 'Infection.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
      ['confirmation', 'biopsie-histologie', 'Cœlioscopie.'],
    ],
    scores: [],
    differentiels: [
      ['infection-genitale-haute', 'Fièvre, leucorrhées, séquelles infectieuses.'],
      ['dysmenorrhee', 'Dysménorrhée primaire.'],
      ['kystes-de-l-ovaire', 'Autres kystes ovariens.'],
      ['fibromes-uterins', 'Ménorragies, utérus augmenté.'],
      ['douleurs-pelviennes-chroniques', 'Autres causes de douleurs pelviennes.'],
    ],
    etiologies:
      '## Facteurs\n- Menstruation rétrograde, prédisposition génétique, règles précoces, cycles courts',
    principes: [
      [
        'Douleur',
        'Traitement médical.',
        '- **AINS** (ibuprofène, acide méfénamique)\n- **Progestatifs en continu** : dydrogestérone, médroxyprogestérone, diénogest, DIU au lévonorgestrel, implant\n- **Pilule œstroprogestative en continu**\n- **Analogues de la GnRH** (goséréline, triptoréline) avec add-back (œstrogène faible dose) en 2e intention, durée limitée',
      ],
      [
        'Chirurgie',
        'Formes sélectionnées.',
        '- **Cœlioscopie** : exérèse des lésions, kystectomie des endométriomes, adhésiolyse (centre spécialisé)\n- Infertilité : chirurgie, induction de l’ovulation, procréation médicalement assistée',
      ],
      [
        'Accompagnement',
        'Maladie chronique.',
        '- Écoute, reconnaissance de la douleur, prise en charge de la douleur chronique, soutien psychologique',
      ],
    ],
    molecules: [
      ['ibuprofene', 'premiere', 'Douleur'],
      ['acide-mefenamique', 'alternative', 'Douleur'],
      ['dydrogesterone', 'premiere', 'Progestatif en continu'],
      ['medroxyprogesterone', 'alternative', 'Progestatif en continu'],
      ['ethinylestradiol', 'alternative', 'Pilule en continu'],
      ['goserelin', 'deuxieme', 'Analogue de la GnRH'],
      ['triptoreline', 'deuxieme', 'Analogue de la GnRH'],
    ],
    complications: [
      {
        nom: 'Infertilité',
        fiche: 'infertilite-du-couple',
        description: 'Adhérences, endométriomes.',
        traitement: '- Chirurgie, PMA',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Endométriome rompu ou tordu',
        fiche: 'torsion-d-annexe',
        description: 'Kyste ovarien.',
        traitement: '- Chirurgie',
        clinique: '- Douleur aiguë',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Douleur chronique et retentissement',
        fiche: 'douleurs-pelviennes-chroniques',
        description: 'Inflammation, adhérences.',
        traitement: '- Prise en charge globale',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Maladie chronique récidivante jusqu’à la ménopause ; amélioration pendant la grossesse et sous traitement hormonal',
    urgences: [],
    symptomes: [
      ['Dysménorrhée', 'tres_frequent'],
      ['Douleur pelvienne', 'tres_frequent'],
      ['Dyspareunie', 'frequent'],
      ['Infertilité', 'frequent'],
      ['Masse pelvienne', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- AINS, progestatifs, orientation', '- Douleurs invalidantes, infertilité'],
      hgr: ['- Échographie, traitement hormonal', ''],
      tert: ['- Cœlioscopie, PMA', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Endométriose douloureuse',
        type: 'commune',
        description: 'Dysménorrhée, dyspareunie.',
        terrain: '- Femme de 20 à 40 ans',
        fonctionnels: '- Douleurs cycliques',
        generaux: '',
        physiques: '- Nodules du cul-de-sac',
        paraclinique: '- Échographie normale ou endométriome',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Endométriome ovarien',
        type: 'topographique',
        description: 'Kyste « chocolat ».',
        terrain: '',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Masse annexielle',
        paraclinique: '- Kyste homogène',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Endométriose profonde',
        type: 'gravite',
        description: 'Atteinte digestive ou urinaire.',
        terrain: '',
        fonctionnels: '- Douleurs à la défécation, rectorragies cycliques',
        generaux: '',
        physiques: '- Nodule recto-vaginal',
        paraclinique: '- IRM',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== SOPK
  {
    ...GYN,
    slug: 'syndrome-des-ovaires-polykystiques',
    nom: 'Syndrome des ovaires polykystiques',
    resume:
      'Trouble endocrinien le plus fréquent de la femme jeune (6–13 %) : cycles longs ou absents, hyperandrogénie (hirsutisme, acné, alopécie), ovaires multifolliculaires à l’échographie (critères de Rotterdam, 2 sur 3) ; associé à l’insulinorésistance, au surpoids, au diabète de type 2, à la dyslipidémie, à l’hyperplasie de l’endomètre et à l’infertilité ; perte de poids (5–10 %), activité physique, pilule œstroprogestative ou progestatif cyclique, metformine, létrozole pour induire l’ovulation ; dépistage métabolique.',
    definition:
      'Syndrome associant au moins deux des trois critères (Rotterdam) : oligo- ou anovulation, hyperandrogénie clinique ou biologique, aspect échographique d’ovaires polykystiques, après exclusion des autres causes.',
    physiopathologie:
      '## Mécanismes\n- **Insulinorésistance** et hyperinsulinisme → production ovarienne d’**androgènes**\n- Hypersécrétion de LH, arrêt de la croissance folliculaire → **anovulation**, multiples petits follicules\n- Absence d’ovulation → pas de progestérone → **hyperplasie de l’endomètre**\n\n## Conséquences\n- Infertilité, diabète gestationnel et de type 2, dyslipidémie, HTA, apnées du sommeil, dépression, cancer de l’endomètre',
    diagnostic:
      '## Clinique\n- **Spanioménorrhée** ou aménorrhée, saignements irréguliers\n- **Hirsutisme**, **acné**, alopécie androgénique\n- Surpoids, obésité abdominale, **acanthosis nigricans**\n- **Infertilité**\n\n## Examens\n- **Échographie pelvienne** : ≥ 20 follicules par ovaire ou volume > 10 mL\n- **β-hCG**, **TSH**, **prolactine**, 17-OH-progestérone (éliminer d’autres causes), testostérone, LH/FSH\n- **Glycémie à jeun ou HGPO**, bilan lipidique, tension',
    examens: [
      ['confirmation', 'echographie-pelvienne', 'Ovaires multifolliculaires.'],
      ['premiere_intention', 'gonadotrophines-lh-fsh', 'LH élevée, testostérone.'],
      ['etiologique', 'prolactinemie', 'Hyperprolactinémie.'],
      ['etiologique', 'tsh', 'Dysthyroïdie.'],
      ['etiologique', '17-hydroxyprogesterone', 'Bloc surrénalien.'],
      ['gravite', 'glycemie', 'Diabète.'],
      ['gravite', 'hgpo-75g', 'Intolérance au glucose.'],
      ['gravite', 'bilan-lipidique', 'Dyslipidémie.'],
    ],
    scores: [],
    differentiels: [
      ['amenorrhees-troubles-du-cycle', 'Autres causes de troubles du cycle.'],
      ['hyperplasie-congenitale-des-surrenales', 'Forme non classique : 17-OHP élevée.'],
      ['hypothyroidie-adulte', 'Troubles du cycle, prise de poids.'],
      ['Tumeur virilisante', 'Virilisation rapide, testostérone très élevée.'],
      ['Syndrome de Cushing', 'Vergetures pourpres, HTA.'],
    ],
    etiologies: '## Facteurs\n- Prédisposition génétique, insulinorésistance, obésité',
    principes: [
      [
        'Mode de vie',
        'Base du traitement.',
        '- **Perte de poids** de 5–10 % (rétablit souvent l’ovulation), activité physique, alimentation équilibrée',
      ],
      [
        'Troubles du cycle et hyperandrogénie',
        'Protéger l’endomètre.',
        '- **Pilule œstroprogestative** (régularise les cycles, réduit l’hirsutisme et l’acné) ; anti-androgène (**spironolactone**, cyprotérone) associé si hirsutisme sévère, sous contraception\n- Sans contraception : **progestatif cyclique** (médroxyprogestérone 10 mg/j 10–14 jours par mois)\n- **Metformine** si insulinorésistance ou intolérance au glucose',
      ],
      [
        'Désir de grossesse',
        'Induire l’ovulation.',
        '- **Létrozole** 2,5–7,5 mg/j de J3 à J7 (premier choix) ou **clomifène** 50–150 mg/j ; metformine en association\n- Surveillance (grossesses multiples), centre spécialisé si échec',
      ],
    ],
    molecules: [
      ['ethinylestradiol', 'premiere', 'Pilule œstroprogestative'],
      ['medroxyprogesterone', 'alternative', 'Progestatif cyclique'],
      ['metformine', 'alternative', 'Insulinorésistance'],
      ['letrozole', 'premiere', 'Induction de l’ovulation'],
      ['clomifene', 'alternative', 'Induction de l’ovulation'],
      ['spironolactone', 'alternative', 'Hirsutisme (sous contraception)'],
      ['cyproterone', 'alternative', 'Hirsutisme sévère'],
    ],
    complications: [
      {
        nom: 'Infertilité',
        fiche: 'infertilite-du-couple',
        description: 'Anovulation.',
        traitement: '- Induction de l’ovulation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Diabète de type 2',
        fiche: 'diabete-type-2',
        description: 'Insulinorésistance.',
        traitement: '- Mode de vie, metformine',
        clinique: '',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Hyperplasie et cancer de l’endomètre',
        fiche: 'polypes-hyperplasie-endometre',
        description: 'Anovulation chronique.',
        traitement: '- Progestatifs',
        clinique: '- Saignements anormaux',
        paraclinique: '- Échographie, biopsie',
      },
      {
        nom: 'Diabète gestationnel',
        fiche: 'diabete-gestationnel',
        description: 'Pendant la grossesse.',
        traitement: '- Dépistage précoce',
        clinique: '',
        paraclinique: '- HGPO',
      },
    ],
    evolution:
      '## Pronostic\n- Maladie chronique ; fertilité généralement obtenue avec traitement ; risque métabolique à surveiller à vie',
    urgences: [],
    symptomes: [
      ['Troubles du cycle menstruel', 'tres_frequent'],
      ['Hirsutisme', 'frequent'],
      ['Comédons et pustules', 'frequent'],
      ['Infertilité', 'frequent'],
      ['Prise de poids', 'frequent'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Conseils de mode de vie, pilule, orientation', '- Infertilité, troubles métaboliques'],
      hgr: ['- Bilan hormonal, échographie, induction de l’ovulation', ''],
      tert: ['- Endocrinologie, PMA', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'SOPK avec troubles du cycle',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Femme jeune, surpoids',
        fonctionnels: '- Spanioménorrhée',
        generaux: '',
        physiques: '- Hirsutisme, acné',
        paraclinique: '- Ovaires multifolliculaires',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'SOPK avec syndrome métabolique',
        type: 'gravite',
        description: 'Risque cardiovasculaire.',
        terrain: '- Obésité',
        fonctionnels: '',
        generaux: '',
        physiques: '- Acanthosis nigricans, HTA',
        paraclinique: '- Hyperglycémie, dyslipidémie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Ménopause
  {
    ...GYN,
    slug: 'menopause',
    nom: 'Ménopause',
    resume:
      'Arrêt définitif des règles (12 mois d’aménorrhée) vers 48–52 ans par épuisement folliculaire : bouffées de chaleur, sueurs nocturnes, troubles du sommeil et de l’humeur, sécheresse vaginale et dyspareunie, troubles urinaires ; risques à long terme : ostéoporose, maladies cardiovasculaires ; tout saignement après la ménopause doit être exploré (cancer de l’endomètre ou du col) ; conseils d’hygiène de vie, calcium et vitamine D, œstrogènes locaux pour la sécheresse, traitement hormonal discuté pour les symptômes invalidants avant 60 ans en l’absence de contre-indication ; dépistage du cancer du col et du sein, tension, glycémie.',
    definition:
      'Arrêt permanent des menstruations lié à la perte de l’activité folliculaire ovarienne, diagnostiqué rétrospectivement après 12 mois d’aménorrhée ; ménopause précoce avant 40 ans (insuffisance ovarienne prématurée).',
    physiopathologie:
      '## Mécanismes\n- Épuisement des follicules → baisse de l’**œstradiol** et de la progestérone, élévation de la **FSH**\n- Périménopause : cycles irréguliers, saignements anormaux\n\n## Conséquences\n- Vasomotrices : bouffées de chaleur, sueurs\n- Génito-urinaires : atrophie vaginale, dyspareunie, infections urinaires, incontinence\n- **Ostéoporose** (perte osseuse accélérée), risque **cardiovasculaire** accru, prise de poids abdominale',
    diagnostic:
      '## Clinique\n- Femme > 45 ans avec **aménorrhée** de 12 mois et **bouffées de chaleur** : diagnostic clinique\n- Sueurs nocturnes, insomnie, irritabilité, tristesse, douleurs articulaires\n- Sécheresse vaginale, dyspareunie, troubles urinaires\n\n## Signes d’alerte\n- **Saignement après la ménopause** : explorer (échographie, biopsie de l’endomètre, examen du col)\n\n## Examens\n- FSH seulement si doute (femme < 45 ans, hystérectomie) ; β-hCG si doute\n- Dépistage : col (IVA/HPV), seins, tension, glycémie, lipides, risque de fracture',
    examens: [
      ['deuxieme_intention', 'gonadotrophines-lh-fsh', 'FSH élevée si doute.'],
      ['premiere_intention', 'depistage-col-iva-hpv', 'Dépistage du cancer du col.'],
      ['premiere_intention', 'mammographie-echographie-mammaire', 'Dépistage du cancer du sein.'],
      ['premiere_intention', 'glycemie', 'Risque métabolique.'],
      ['premiere_intention', 'bilan-lipidique', 'Risque cardiovasculaire.'],
      ['deuxieme_intention', 'densitometrie-osseuse', 'Ostéoporose.'],
      ['gravite', 'echographie-pelvienne', 'Saignement post-ménopausique.'],
    ],
    scores: [],
    differentiels: [
      ['hyperthyroidie-basedow', 'Bouffées de chaleur, tachycardie.'],
      ['amenorrhees-troubles-du-cycle', 'Aménorrhée de la femme jeune.'],
      ['saignements-apres-menopause', 'Saignement après la ménopause.'],
      ['Grossesse en périménopause', 'β-hCG positive.'],
    ],
    etiologies:
      '## Causes\n- Physiologique ; précoce : chirurgie (ovariectomie), chimiothérapie, radiothérapie, causes auto-immunes ou génétiques',
    principes: [
      [
        'Hygiène de vie',
        'Pour toutes.',
        '- Activité physique, alimentation riche en **calcium**, exposition solaire, arrêt du tabac, contrôle du poids\n- **Calcium** et **vitamine D** si apports insuffisants\n- Contraception jusqu’à 12 mois d’aménorrhée après 50 ans (24 mois avant 50 ans)',
      ],
      [
        'Symptômes',
        'Traiter selon la gêne.',
        '- **Sécheresse vaginale** : lubrifiants, hydratants, œstrogènes locaux\n- **Bouffées de chaleur** invalidantes : **traitement hormonal** (œstradiol + progestatif si utérus) à la dose minimale, avant 60 ans ou dans les 10 ans suivant la ménopause, après évaluation des contre-indications (cancer du sein, thrombose, AVC, maladie hépatique) ; réévaluation annuelle\n- Alternatives non hormonales : certains antidépresseurs, gabapentine',
      ],
      [
        'Ménopause précoce',
        'Substituer.',
        '- Traitement hormonal jusqu’à l’âge habituel de la ménopause (protection osseuse et cardiovasculaire)',
      ],
    ],
    molecules: [
      ['estradiol', 'alternative', 'Traitement hormonal'],
      ['dydrogesterone', 'alternative', 'Progestatif associé (utérus en place)'],
      ['calcium', 'premiere', 'Prévention de l’ostéoporose'],
      ['cholecalciferol-vitamine-d3', 'premiere', 'Prévention de l’ostéoporose'],
      ['gabapentine', 'deuxieme', 'Bouffées de chaleur (non hormonal)'],
      ['acide-alendronique', 'deuxieme', 'Ostéoporose'],
    ],
    complications: [
      {
        nom: 'Ostéoporose et fractures',
        fiche: 'osteoporose',
        description: 'Carence en œstrogènes.',
        traitement: '- Calcium, vitamine D, bisphosphonates',
        clinique: '- Fractures',
        paraclinique: '- Densitométrie',
      },
      {
        nom: 'Maladies cardiovasculaires',
        fiche: 'hypertension-arterielle',
        description: 'Risque accru.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Atrophie génito-urinaire',
        fiche: 'infections-urinaires-adulte',
        description: 'Infections, incontinence.',
        traitement: '- Œstrogènes locaux',
        clinique: '- Dyspareunie, brûlures',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Symptômes vasomoteurs durant en moyenne 5–7 ans ; prévention osseuse et cardiovasculaire à long terme',
    urgences: [],
    symptomes: [
      ['Bouffées de chaleur', 'tres_frequent'],
      ['Aménorrhée', 'tres_frequent'],
      ['Sueurs nocturnes', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Dyspareunie', 'frequent'],
      ['Humeur dépressive', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Conseils, dépistages, exploration de tout saignement', '- Saignement après la ménopause'],
      hgr: ['- Traitement hormonal, échographie', ''],
      tert: ['- Gynécologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ménopause naturelle',
        type: 'commune',
        description: 'Vers 50 ans.',
        terrain: '- Femme de 45 à 55 ans',
        fonctionnels: '- Bouffées de chaleur',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Insuffisance ovarienne prématurée',
        type: 'terrain',
        description: 'Avant 40 ans.',
        terrain: '- Femme < 40 ans',
        fonctionnels: '- Aménorrhée, bouffées de chaleur',
        generaux: '',
        physiques: '',
        paraclinique: '- FSH élevée',
        etiologies: '- Chirurgie, chimiothérapie, auto-immune',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Prolapsus
  {
    ...GYN,
    slug: 'prolapsus-genital',
    nom: 'Prolapsus génital',
    resume:
      'Descente d’un ou plusieurs organes pelviens (vessie, utérus, rectum) dans le vagin, fréquente chez les grandes multipares (accouchements nombreux, prolongés, à domicile, port de lourdes charges) : sensation de boule vaginale, pesanteur pelvienne, troubles urinaires (dysurie, incontinence, rétention), troubles digestifs, ulcérations du col extériorisé ; examen en poussée ; rééducation périnéale, pessaire, chirurgie (hystérectomie vaginale, colporraphies) selon la gêne et le désir de grossesse ; prévention : accouchement assisté, espacement des naissances.',
    definition:
      'Saillie anormale d’un ou plusieurs organes pelviens (cystocèle, hystérocèle, rectocèle, élytrocèle) dans le vagin ou à l’extérieur de la vulve, par défaillance des moyens de soutien.',
    physiopathologie:
      '## Facteurs\n- **Accouchements** nombreux, prolongés, instrumentaux, sans assistance, gros enfants\n- **Ménopause** (carence en œstrogènes), âge, obésité, toux chronique, constipation, **port de charges lourdes**\n\n## Conséquences\n- Troubles urinaires (incontinence d’effort, dysurie, rétention, infections), digestifs (dyschésie), sexuels\n- Col extériorisé : **ulcérations**, saignements, infections',
    diagnostic:
      '## Clinique\n- **Boule** dans le vagin, **pesanteur pelvienne** majorée debout et en fin de journée\n- Troubles urinaires (incontinence, difficulté à vider la vessie), constipation, gêne sexuelle\n- Examen en **poussée** (au spéculum démonté) : cystocèle, hystérocèle, rectocèle ; stade (1 à 4)\n- Ulcérations du col (prolapsus total)\n\n## Examens\n- **ECBU**, échographie rénale (hydronéphrose dans les prolapsus totaux)\n- Dépistage du cancer du col, biopsie d’une ulcération suspecte',
    examens: [
      ['premiere_intention', 'ecbu', 'Infection urinaire.'],
      ['gravite', 'echographie-renale', 'Hydronéphrose.'],
      ['premiere_intention', 'depistage-col-iva-hpv', 'Dépistage du col.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Ulcération suspecte.'],
    ],
    scores: [],
    differentiels: [
      ['inversion-uterine', 'Post-partum immédiat.'],
      ['fibromes-uterins', 'Fibrome accouché par le col.'],
      ['cancer-du-col-de-l-uterus', 'Lésion ulcéro-bourgeonnante.'],
      ['Kyste vaginal', 'Masse fixe, sans descente en poussée.'],
    ],
    etiologies:
      '## Facteurs\n- Multiparité, accouchements traumatiques, ménopause, efforts physiques, obésité',
    principes: [
      [
        'Traitement conservateur',
        'Formes légères ou femme âgée.',
        '- **Rééducation périnéale** (exercices de Kegel), traitement de la constipation et de la toux, perte de poids, éviter les charges lourdes\n- **Pessaire** (anneau) : bonne alternative chez la femme âgée ou en attente de chirurgie, avec suivi (érosions)\n- **Œstrogènes locaux** chez la femme ménopausée',
      ],
      [
        'Chirurgie',
        'Formes gênantes.',
        '- **Hystérectomie vaginale** avec colporraphies antérieure et postérieure (femme sans désir de grossesse)\n- Techniques conservatrices de l’utérus (désir de grossesse), colpocléisis (femme âgée sans activité sexuelle)\n- Traitement des ulcérations avant la chirurgie',
      ],
      [
        'Prévention',
        'Réduire les risques.',
        '- Accouchement assisté, partogramme, espacement des naissances, rééducation du post-partum',
      ],
    ],
    molecules: [
      ['estradiol', 'alternative', 'Œstrogènes locaux (femme ménopausée)'],
      ['lactulose', 'adjuvant', 'Constipation'],
      ['ciprofloxacine', 'adjuvant', 'Infection urinaire (selon antibiogramme)'],
    ],
    complications: [
      {
        nom: 'Rétention urinaire et hydronéphrose',
        fiche: 'retention-aigue-urine',
        description: 'Prolapsus total.',
        traitement: '- Réduction, sondage, chirurgie',
        clinique: '- Difficulté à uriner',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Ulcérations du col',
        description: 'Frottements.',
        traitement: '- Soins locaux, œstrogènes, réduction',
        clinique: '- Saignements, pertes',
        paraclinique: '- Biopsie',
      },
      {
        nom: 'Infections urinaires',
        fiche: 'infections-urinaires-adulte',
        description: 'Résidu post-mictionnel.',
        traitement: '- Antibiotiques',
        clinique: '- Brûlures',
        paraclinique: '- ECBU',
      },
    ],
    evolution:
      '## Pronostic\n- Aggravation progressive sans traitement ; bons résultats de la chirurgie, récidives possibles',
    urgences: [],
    symptomes: [
      ['Pesanteur pelvienne', 'tres_frequent'],
      ['Incontinence urinaire', 'frequent'],
      ['Dysurie', 'frequent'],
      ['Constipation', 'occasionnel'],
      ['Leucorrhées', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Repérer, rééducation, pessaire', '- Prolapsus gênant ou total'],
      hgr: ['- Chirurgie (hystérectomie vaginale)', ''],
      tert: ['- Chirurgie urogynécologique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Prolapsus modéré',
        type: 'commune',
        description: 'Stades 1–2.',
        terrain: '- Multipare',
        fonctionnels: '- Pesanteur',
        generaux: '',
        physiques: '- Cystocèle, hystérocèle à la poussée',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Prolapsus total',
        type: 'gravite',
        description: 'Extériorisé.',
        terrain: '- Femme âgée, grande multipare',
        fonctionnels: '- Rétention urinaire',
        generaux: '',
        physiques: '- Col ulcéré à la vulve',
        paraclinique: '- Hydronéphrose',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Bartholin
  {
    ...GYN,
    slug: 'kyste-abces-bartholin',
    nom: 'Kyste et abcès de la glande de Bartholin',
    resume:
      'Obstruction du canal de la glande de Bartholin (à la partie postérieure de la grande lèvre) : kyste indolore, ou abcès très douloureux, rouge, chaud, fluctuant, rendant la marche et la position assise difficiles ; germes mixtes (E. coli, anaérobies), parfois gonocoque ou chlamydia ; incision-drainage avec marsupialisation ou mise en place d’une sonde (Word) pour éviter la récidive, antibiotiques si cellulite ou IST ; dépistage des IST ; biopsie d’une masse chez la femme de plus de 40 ans (cancer rare).',
    definition:
      'Collection liquidienne (kyste) ou purulente (abcès) de la glande de Bartholin ou de son canal excréteur, par obstruction de l’orifice du canal.',
    physiopathologie:
      '## Mécanismes\n- Obstruction du canal (inflammation, traumatisme, épaississement du mucus) → kyste\n- Surinfection → **abcès** : flore mixte (E. coli, streptocoques, anaérobies), **gonocoque**, **Chlamydia trachomatis**\n\n## Facteurs\n- Femme en âge de procréer, IST, traumatismes, récidives',
    diagnostic:
      '## Clinique\n- **Kyste** : tuméfaction indolore de la partie postérieure de la grande lèvre, unilatérale\n- **Abcès** : **tuméfaction vulvaire** rouge, chaude, très **douloureuse**, fluctuante, douleur à la marche et en position assise, fièvre parfois\n- Rupture spontanée possible\n\n## Examens\n- **Prélèvement du pus** (Gram, culture), recherche de **gonocoque et chlamydia**\n- Dépistage VIH et syphilis\n- **Biopsie** si masse solide ou femme > 40 ans (cancer de la glande, rare)',
    examens: [
      ['premiere_intention', 'prelevement-de-pus', 'Germes, gonocoque.'],
      ['premiere_intention', 'tdr-vih', 'Dépistage IST.'],
      ['premiere_intention', 'serologie-syphilis', 'Dépistage IST.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Femme > 40 ans, masse solide.'],
    ],
    scores: [],
    differentiels: [
      ['abces-phlegmons-parties-molles', 'Furoncle, abcès cutané.'],
      ['Hernie inguinale de la grande lèvre', 'Masse antérieure, impulsive à la toux.'],
      ['Kyste du canal de Nuck', 'Masse antérieure.'],
      ['Cancer de la vulve', 'Masse dure, ulcérée, femme âgée.'],
    ],
    etiologies: '## Germes\n- E. coli, anaérobies, streptocoques, gonocoque, chlamydia',
    principes: [
      [
        'Kyste',
        'Selon la gêne.',
        '- Kyste asymptomatique : abstention, bains de siège\n- Kyste gênant ou récidivant : marsupialisation',
      ],
      [
        'Abcès',
        'Drainer.',
        '- **Incision-drainage** sous anesthésie locale (lidocaïne) ou générale, avec **marsupialisation** (suture des berges de la cavité à la peau) ou mise en place d’une **sonde de Word** pendant 4 semaines (réduction des récidives)\n- **Antibiotiques** si cellulite, fièvre ou IST : amoxicilline-acide clavulanique ou **ceftriaxone** + **azithromycine** (ou doxycycline) si gonocoque/chlamydia suspectés\n- Bains de siège, antalgiques, traitement du partenaire si IST',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['ceftriaxone', 'alternative', 'Gonococcie'],
      ['azithromycine', 'alternative', 'Chlamydiose'],
      ['doxycycline', 'alternative', 'Chlamydiose'],
      ['amoxicilline', 'alternative', 'Cellulite (avec acide clavulanique)'],
      ['acide-clavulanique', 'alternative', 'Cellulite'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Récidive',
        description: 'Drainage simple.',
        traitement: '- Marsupialisation, sonde de Word',
        clinique: '- Nouvelle tuméfaction',
        paraclinique: '',
      },
      {
        nom: 'Cellulite vulvaire',
        fiche: 'erysipele-et-cellulite',
        description: 'Extension.',
        traitement: '- Antibiotiques',
        clinique: '- Rougeur étendue, fièvre',
        paraclinique: '',
      },
      {
        nom: 'Fasciite nécrosante',
        fiche: 'fasciite-necrosante',
        description: 'Rare (diabète, immunodépression).',
        traitement: '- Débridement urgent',
        clinique: '- Nécrose, crépitation',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent après drainage ; récidives réduites par la marsupialisation',
    urgences: [],
    symptomes: [
      ['Tuméfaction vulvaire', 'tres_frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Dyspareunie', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Incision-drainage, antibiotiques, dépistage IST', '- Récidive, masse suspecte'],
      hgr: ['- Marsupialisation', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Abcès de Bartholin',
        type: 'commune',
        description: 'Douloureux.',
        terrain: '- Femme en âge de procréer',
        fonctionnels: '- Douleur à la marche',
        generaux: '- Fébricule',
        physiques: '- Tuméfaction fluctuante de la grande lèvre',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Kyste de Bartholin',
        type: 'evolutive',
        description: 'Indolore.',
        terrain: '',
        fonctionnels: '- Gêne',
        generaux: '',
        physiques: '- Tuméfaction indolore',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
