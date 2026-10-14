'use strict';

/**
 * Lot 58 (phase 2, gynécologie oncologique et sénologie) — cancer du vagin, sarcomes utérins,
 * tumeurs bénignes du sein, écoulement mamelonnaire, mastodynies, abcès du sein en dehors de
 * l'allaitement. Rédigé par IA (OMS, ESMO, NCCN) : à valider.
 */

const ONCO = { departement: 'gynecologie-obstetrique', specialite: 'Gynécologie oncologique' };
const SENO = { departement: 'gynecologie-obstetrique', specialite: 'Sénologie' };

module.exports = [
  // =================================================================== Cancer du vagin
  {
    ...ONCO,
    slug: 'cancer-vagin',
    nom: 'Cancer du vagin',
    resume:
      'Cancer rare (1–2 % des cancers gynécologiques), le plus souvent carcinome épidermoïde lié aux HPV, chez la femme âgée ou la femme vivant avec le VIH, parfois après hystérectomie pour lésion du col ; un cancer du vagin est souvent une extension d’un cancer du col ou de la vulve (à éliminer) : saignements vaginaux, leucorrhées, lésion vaginale, douleurs ; examen au spéculum en le tournant, biopsie ; radiothérapie (curiethérapie) ± cisplatine, chirurgie pour les petites lésions ; prévention : vaccination HPV, dépistage.',
    definition:
      'Tumeur maligne primitive du vagin, sans atteinte du col ni de la vulve, le plus souvent carcinome épidermoïde.',
    physiopathologie:
      '## Facteurs\n- **HPV** oncogènes, **VIH**, antécédent de lésion ou de cancer du col, irradiation pelvienne, tabac, âge\n- Adénocarcinome à cellules claires (exposition au distilbène, exceptionnelle)\n\n## Extension\n- Locale (paramètres, vessie, rectum), ganglionnaire (pelvienne, inguinale pour le tiers inférieur)',
    diagnostic:
      '## Clinique\n- **Saignements vaginaux** (post-ménopausiques, post-coïtaux), **leucorrhées** fétides\n- Lésion ulcérée ou bourgeonnante du vagin (souvent paroi postérieure du tiers supérieur), masse\n- Douleurs pelviennes, troubles urinaires ou rectaux (formes avancées)\n\n## Examens\n- **Spéculum** (rotation pour voir toutes les parois), **biopsie**\n- Examen du col et de la vulve (éliminer une extension), **TDR VIH**\n- Bilan d’extension : examen sous anesthésie, cystoscopie, scanner, radiographie thoracique',
    examens: [
      ['confirmation', 'biopsie-histologie', 'Carcinome.'],
      ['premiere_intention', 'depistage-col-iva-hpv', 'Atteinte du col.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['gravite', 'scanner-abdominal', 'Extension.'],
      ['gravite', 'radiographie-thoracique', 'Métastases.'],
      ['deuxieme_intention', 'colposcopie', 'Lésions associées.'],
    ],
    scores: [],
    differentiels: [
      ['cancer-du-col-de-l-uterus', 'Extension vaginale d’un cancer du col.'],
      ['cancer-vulve', 'Extension d’un cancer vulvaire.'],
      ['fistules-obstetricales', 'Fuites d’urine ou de selles après travail prolongé.'],
      ['condylomes-genitaux', 'Végétations bénignes.'],
    ],
    etiologies: '## Facteurs\n- HPV, VIH, antécédent de lésion du col, irradiation',
    principes: [
      [
        'Traitement',
        'Centre spécialisé.',
        '- **Radiothérapie** externe et **curiethérapie** ± **cisplatine** (traitement de référence)\n- **Chirurgie** pour les petites lésions du tiers supérieur\n- Soins palliatifs : douleur, fistules, saignements',
      ],
      [
        'Prévention',
        'Agir tôt.',
        '- **Vaccination HPV**, dépistage du col (y compris le fond vaginal après hystérectomie pour lésion précancéreuse)',
      ],
    ],
    molecules: [
      ['cisplatine', 'premiere', 'Radio-chimiothérapie (centre spécialisé)'],
      ['morphine', 'adjuvant', 'Douleurs'],
      ['vaccin-papillomavirus-hpv', 'premiere', 'Prévention'],
    ],
    complications: [
      {
        nom: 'Fistules vésico- ou recto-vaginales',
        fiche: 'fistules-obstetricales',
        description: 'Extension tumorale, radiothérapie.',
        traitement: '- Dérivation, soins palliatifs',
        clinique: '- Fuites d’urine ou de selles',
        paraclinique: '',
      },
      {
        nom: 'Hémorragie',
        description: 'Lésion bourgeonnante.',
        traitement: '- Tamponnement, radiothérapie hémostatique',
        clinique: '- Saignement',
        paraclinique: '- Hb',
      },
    ],
    evolution: '## Pronostic\n- Survie à 5 ans ≈ 70 % au stade I, faible dans les stades avancés',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Leucorrhées', 'frequent'],
      ['Douleur pelvienne', 'occasionnel'],
    ],
    sources: [
      'NCCN — recommandations de pratique clinique',
      'ESMO — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Saignements anormaux : examen au spéculum, orientation', ''],
      hgr: ['- Biopsie, bilan', ''],
      tert: ['- Radiothérapie, curiethérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Carcinome épidermoïde du vagin',
        type: 'commune',
        description: 'HPV.',
        terrain: '- Femme âgée ou VIH',
        fonctionnels: '- Saignements',
        generaux: '',
        physiques: '- Lésion vaginale',
        paraclinique: '- Biopsie',
        etiologies: '- HPV',
        syndromes: [],
      },
      {
        nom: 'Forme avancée',
        type: 'gravite',
        description: 'Fistules, extension.',
        terrain: '',
        fonctionnels: '- Douleurs',
        generaux: '- Amaigrissement',
        physiques: '- Masse fixée',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Sarcomes utérins
  {
    ...ONCO,
    slug: 'sarcomes-uterins',
    nom: 'Sarcomes utérins',
    resume:
      'Tumeurs malignes rares du muscle ou du stroma utérin (léiomyosarcome surtout), souvent prises pour un fibrome : utérus ou « fibrome » augmentant rapidement de volume, surtout après la ménopause, saignements, douleurs, masse ; échographie et IRM (masse hétérogène, nécrose), diagnostic histologique souvent après hystérectomie ou myomectomie ; éviter le morcellement d’un fibrome suspect ; hystérectomie totale ± annexectomie ; chimiothérapie (doxorubicine) ou hormonothérapie (sarcomes du stroma de bas grade) selon le type ; pronostic réservé.',
    definition:
      'Tumeurs malignes mésenchymateuses de l’utérus : léiomyosarcome, sarcome du stroma endométrial, sarcome indifférencié, adénosarcome ; le carcinosarcome est désormais classé parmi les carcinomes endométriaux.',
    physiopathologie:
      '## Types\n- **Léiomyosarcome** : le plus fréquent, agressif\n- **Sarcome du stroma endométrial** de bas grade : hormonodépendant, évolution lente\n- Sarcome indifférencié, adénosarcome\n\n## Facteurs\n- Âge (> 50 ans), tamoxifène, irradiation pelvienne\n- Le fibrome ne dégénère presque jamais : les sarcomes sont des tumeurs distinctes\n\n## Extension\n- Hématogène (**poumons**, foie), péritonéale',
    diagnostic:
      '## Signes d’alerte\n- **Croissance rapide** d’une masse utérine, surtout **après la ménopause**\n- Saignements anormaux, douleurs pelviennes, masse\n\n## Examens\n- **Échographie** : masse hétérogène, nécrose, vascularisation anarchique ; **IRM** (centre spécialisé)\n- Biopsie de l’endomètre (positive surtout pour les sarcomes du stroma)\n- Bilan d’extension : **scanner thoracique** et abdominal\n- Diagnostic souvent **histologique** sur la pièce opératoire',
    examens: [
      ['premiere_intention', 'echographie-pelvienne', 'Masse hétérogène.'],
      ['confirmation', 'biopsie-histologie', 'Diagnostic histologique.'],
      ['gravite', 'scanner-thoracique', 'Métastases pulmonaires.'],
      ['gravite', 'scanner-abdominal', 'Extension.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
    ],
    scores: [],
    differentiels: [
      ['fibromes-uterins', 'Fibromes stables, femme non ménopausée.'],
      ['adenomyose', 'Utérus globuleux.'],
      ['cancer-endometre', 'Saignements post-ménopausiques, biopsie.'],
      ['cancer-ovaire', 'Masse annexielle.'],
    ],
    etiologies: '## Facteurs\n- Âge, tamoxifène, irradiation pelvienne',
    principes: [
      [
        'Chirurgie',
        'Traitement principal.',
        '- **Hystérectomie totale** en bloc, sans morcellement, ± annexectomie bilatérale (systématique après la ménopause et pour le sarcome du stroma)\n- Exérèse des métastases isolées dans certains cas',
      ],
      [
        'Traitements complémentaires',
        'Selon le type.',
        '- **Chimiothérapie** (doxorubicine ± ifosfamide, gemcitabine-docétaxel) pour les formes avancées\n- **Hormonothérapie** (progestatifs, anti-aromatases) pour les sarcomes du stroma de bas grade\n- Soins palliatifs',
      ],
    ],
    molecules: [
      ['doxorubicine', 'premiere', 'Chimiothérapie (centre spécialisé)'],
      ['medroxyprogesterone', 'alternative', 'Sarcome du stroma de bas grade'],
      ['letrozole', 'alternative', 'Sarcome du stroma de bas grade'],
      ['morphine', 'adjuvant', 'Douleurs'],
    ],
    complications: [
      {
        nom: 'Métastases pulmonaires',
        description: 'Diffusion hématogène.',
        traitement: '- Chimiothérapie, chirurgie',
        clinique: '- Toux, dyspnée',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Récidive',
        description: 'Fréquente.',
        traitement: '- Chimiothérapie',
        clinique: '',
        paraclinique: '- Imagerie',
      },
      {
        nom: 'Anémie',
        fiche: 'anemie-ferriprive',
        description: 'Saignements.',
        traitement: '- Fer, transfusion',
        clinique: '- Pâleur',
        paraclinique: '- NFS',
      },
    ],
    evolution:
      '## Pronostic\n- Léiomyosarcome : survie à 5 ans ≈ 50 % au stade I ; sarcome du stroma de bas grade : évolution lente',
    urgences: [],
    symptomes: [
      ['Masse pelvienne', 'tres_frequent'],
      ['Saignement vaginal', 'frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: ['ESMO — recommandations de pratique clinique', 'NCCN — recommandations de pratique clinique'],
    niveaux: {
      cs: ['- Masse utérine qui grossit après la ménopause : orientation', ''],
      hgr: ['- Échographie, hystérectomie', ''],
      tert: ['- Oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Léiomyosarcome',
        type: 'commune',
        description: 'Pseudo-fibrome.',
        terrain: '- Femme > 50 ans',
        fonctionnels: '- Saignements, douleurs',
        generaux: '',
        physiques: '- Masse utérine rapidement croissante',
        paraclinique: '- Masse hétérogène',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Sarcome du stroma de bas grade',
        type: 'etiologique',
        description: 'Hormonodépendant.',
        terrain: '- Femme en périménopause',
        fonctionnels: '- Saignements',
        generaux: '',
        physiques: '',
        paraclinique: '- Biopsie de l’endomètre',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Tumeurs bénignes du sein
  {
    ...SENO,
    slug: 'tumeurs-benignes-sein',
    nom: 'Tumeurs bénignes du sein',
    resume:
      'Nodules mammaires bénins, majoritaires chez la femme jeune : fibroadénome (nodule ferme, mobile, indolore, 15–35 ans), kystes (nodule rénitent, parfois douloureux, 35–50 ans), mastose fibrokystique, tumeur phyllode (croissance rapide), lipome, cytostéatonécrose ; tout nodule doit être évalué par le « triple test » : examen clinique, imagerie (échographie avant 30–35 ans, mammographie après), cytoponction ou biopsie ; surveillance ou exérèse selon le type ; ne jamais négliger un nodule chez la femme de plus de 35 ans (cancer du sein fréquent et précoce en Afrique).',
    definition:
      'Lésions mammaires non cancéreuses se présentant sous forme de nodule ou de masse : fibroadénome, kystes, mastose fibrokystique, tumeur phyllode bénigne, lipome, adénose, papillome.',
    physiopathologie:
      '## Lésions principales\n- **Fibroadénome** : prolifération fibro-épithéliale hormonosensible, femme jeune, peut grossir pendant la grossesse\n- **Kystes** : dilatation des canaux, femme en préménopause\n- **Mastose fibrokystique** : seins nodulaires, douloureux en phase prémenstruelle\n- **Tumeur phyllode** : croissance rapide, récidive locale, rarement maligne\n- Cytostéatonécrose (traumatisme), lipome, galactocèle (allaitement)',
    diagnostic:
      '## Clinique\n- Âge, durée, évolution, douleur cyclique, écoulement, antécédents familiaux\n- **Fibroadénome** : nodule arrondi, ferme, élastique, **mobile**, indolore, bien limité\n- **Kyste** : rénitent, parfois douloureux, variable selon le cycle\n- **Signes suspects** (cancer) : nodule dur, irrégulier, fixé, rétraction cutanée ou du mamelon, peau d’orange, adénopathie axillaire, écoulement sanglant, âge > 35 ans\n\n## Triple test\n- **Examen clinique** + **échographie** (< 35 ans) ou **mammographie** + échographie (> 35 ans)\n- **Cytoponction** (kyste, nodule) ou **microbiopsie** (lésion solide suspecte)',
    examens: [
      ['confirmation', 'mammographie-echographie-mammaire', 'Imagerie mammaire.'],
      ['confirmation', 'biopsie-histologie', 'Microbiopsie si lésion solide.'],
      ['premiere_intention', 'cytoponction-ganglionnaire', 'Cytoponction (nodule, kyste).'],
    ],
    scores: [],
    differentiels: [
      ['cancer-du-sein', 'Nodule dur, irrégulier, fixé, après 35 ans.'],
      ['mastite-abces-du-sein', 'Nodule inflammatoire, fièvre.'],
      ['abces-sein-hors-allaitement', 'Inflammation péri-aréolaire.'],
      ['Tuberculose mammaire', 'Masse, fistule chronique.'],
      ['Gynécomastie', 'Chez l’homme : tissu mammaire rétro-aréolaire.'],
    ],
    etiologies: '## Lésions\n- Fibroadénome, kystes, mastose, tumeur phyllode, lipome, cytostéatonécrose',
    principes: [
      [
        'Fibroadénome',
        'Surveiller ou enlever.',
        '- Fibroadénome typique de la femme jeune (triple test concordant) : **surveillance** clinique et échographique à 6 mois\n- **Exérèse** si > 3 cm, croissance rapide, gêne, doute, demande de la patiente ou âge > 35 ans',
      ],
      [
        'Kystes',
        'Ponctionner si gênant.',
        '- **Ponction évacuatrice** des kystes symptomatiques ; cytologie si liquide sanglant ; biopsie si masse résiduelle ou récidive',
      ],
      [
        'Autres',
        'Selon le type.',
        '- **Tumeur phyllode** : exérèse large\n- Mastose : traitement des mastodynies\n- Toute discordance du triple test : **biopsie** ou exérèse',
      ],
    ],
    molecules: [
      ['paracetamol', 'adjuvant', 'Douleur'],
      ['lidocaine', 'adjuvant', 'Anesthésie locale (ponction, exérèse)'],
    ],
    complications: [
      {
        nom: 'Méconnaissance d’un cancer',
        fiche: 'cancer-du-sein',
        description: 'Triple test incomplet.',
        traitement: '- Biopsie systématique si doute',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Récidive (tumeur phyllode)',
        description: 'Exérèse insuffisante.',
        traitement: '- Reprise chirurgicale',
        clinique: '- Nodule',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent ; les fibroadénomes régressent souvent après la ménopause',
    urgences: [],
    symptomes: [
      ['Nodule du sein', 'tres_frequent'],
      ['Douleur mammaire', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'NCCN — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Examen clinique des seins, orientation de tout nodule', '- Nodule suspect, âge > 35 ans'],
      hgr: ['- Échographie, cytoponction, exérèse', ''],
      tert: ['- Mammographie, microbiopsie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fibroadénome',
        type: 'commune',
        description: 'Femme jeune.',
        terrain: '- 15–35 ans',
        fonctionnels: '',
        generaux: '',
        physiques: '- Nodule mobile, ferme',
        paraclinique: '- Échographie typique',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Kyste mammaire',
        type: 'etiologique',
        description: 'Préménopause.',
        terrain: '- 35–50 ans',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Nodule rénitent',
        paraclinique: '- Image liquidienne',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Tumeur phyllode',
        type: 'gravite',
        description: 'Croissance rapide.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Masse volumineuse',
        paraclinique: '- Biopsie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Écoulement mamelonnaire
  {
    ...SENO,
    slug: 'ecoulement-mamelonnaire',
    nom: 'Écoulement mamelonnaire',
    resume:
      'Écoulement par le mamelon en dehors de l’allaitement : bilatéral, multi-orifices, provoqué, laiteux ou coloré = le plus souvent bénin (galactorrhée par hyperprolactinémie, médicaments, ectasie canalaire) ; unilatéral, uni-orifice, spontané, séreux ou sanglant = suspect (papillome intracanalaire, parfois cancer) ; examen des seins, test de grossesse, prolactine et TSH si galactorrhée, imagerie (échographie, mammographie), cytologie ; traitement de la cause, exérèse du canal en cas d’écoulement suspect.',
    definition:
      'Issue de liquide par un ou plusieurs orifices du mamelon en dehors de la grossesse et de l’allaitement (ou plus de 6 mois après le sevrage).',
    physiopathologie:
      '## Écoulements bénins\n- **Galactorrhée** (lait) : **hyperprolactinémie** (médicaments : antipsychotiques, métoclopramide, dompéridone, méthyldopa ; prolactinome ; hypothyroïdie), stimulation mamelonnaire\n- **Ectasie canalaire** : écoulement épais, verdâtre ou brunâtre, multi-orifices (femme en périménopause)\n\n## Écoulements suspects\n- **Papillome intracanalaire** : écoulement sanglant uni-orifice (cause la plus fréquente)\n- **Cancer du sein** (carcinome intracanalaire ou invasif)',
    diagnostic:
      '## Caractéristiques\n- **Uni- ou bilatéral**, **uni- ou multi-orifice**, **spontané ou provoqué**, couleur (laiteux, vert, séreux, **sanglant**)\n- Masse associée, signes cutanés, adénopathies\n- Médicaments, aménorrhée, céphalées, troubles visuels (prolactinome)\n\n## Examens\n- **β-hCG**, **prolactine**, **TSH** (galactorrhée)\n- **Échographie** ± **mammographie**, cytologie de l’écoulement (peu sensible)\n- Écoulement suspect : galactographie ou IRM, exérèse sélective du canal ; IRM hypophysaire si prolactinome suspecté',
    examens: [
      ['premiere_intention', 'beta-hcg', 'Grossesse.'],
      ['premiere_intention', 'prolactinemie', 'Galactorrhée.'],
      ['premiere_intention', 'tsh', 'Hypothyroïdie.'],
      ['premiere_intention', 'mammographie-echographie-mammaire', 'Lésion canalaire.'],
      ['confirmation', 'biopsie-histologie', 'Exérèse du canal.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Prolactinome.'],
    ],
    scores: [],
    differentiels: [
      ['cancer-du-sein', 'Écoulement sanglant, masse.'],
      ['amenorrhees-troubles-du-cycle', 'Hyperprolactinémie avec aménorrhée.'],
      ['abces-sein-hors-allaitement', 'Écoulement purulent.'],
      ['Maladie de Paget du mamelon', 'Lésion eczématiforme du mamelon.'],
    ],
    etiologies: '## Causes\n- Hyperprolactinémie, médicaments, ectasie canalaire, papillome, cancer',
    principes: [
      [
        'Galactorrhée',
        'Traiter la cause.',
        '- Arrêt du médicament en cause si possible ; hypothyroïdie : lévothyroxine\n- Prolactinome : **bromocriptine** ou cabergoline (endocrinologie)',
      ],
      [
        'Écoulement suspect',
        'Explorer.',
        '- Unilatéral, uni-orifice, spontané, sanglant ou séreux, ou avec masse : imagerie et **exérèse chirurgicale du canal** (histologie)',
      ],
      [
        'Ectasie canalaire',
        'Rassurer.',
        '- Abstention, éviter la stimulation ; exérèse si gênant ; traitement des surinfections',
      ],
    ],
    molecules: [
      ['bromocriptine', 'alternative', 'Hyperprolactinémie'],
      ['levothyroxine', 'adjuvant', 'Hypothyroïdie'],
    ],
    complications: [
      {
        nom: 'Retard diagnostique d’un cancer',
        fiche: 'cancer-du-sein',
        description: 'Écoulement sanglant négligé.',
        traitement: '- Exploration',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Abcès péri-aréolaire',
        fiche: 'abces-sein-hors-allaitement',
        description: 'Ectasie surinfectée.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Inflammation',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bénin dans la grande majorité ; papillome guéri par l’exérèse',
    urgences: [],
    symptomes: [
      ['Écoulement mamelonnaire', 'tres_frequent'],
      ['Galactorrhée', 'frequent'],
      ['Aménorrhée', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: ['- Caractériser l’écoulement, β-hCG, orientation', '- Écoulement sanglant ou unilatéral'],
      hgr: ['- Prolactine, imagerie', ''],
      tert: ['- Exérèse du canal, endocrinologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Galactorrhée',
        type: 'commune',
        description: 'Bilatérale, laiteuse.',
        terrain: '- Femme sous médicament ou prolactinome',
        fonctionnels: '- Écoulement laiteux',
        generaux: '',
        physiques: '',
        paraclinique: '- Prolactine élevée',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Écoulement sanglant unilatéral',
        type: 'gravite',
        description: 'Suspect.',
        terrain: '',
        fonctionnels: '- Écoulement spontané',
        generaux: '',
        physiques: '- Uni-orifice',
        paraclinique: '- Papillome, cancer',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Mastodynies
  {
    ...SENO,
    slug: 'mastodynies',
    nom: 'Mastodynies',
    resume:
      'Douleurs des seins, motif fréquent de consultation : cycliques (prémenstruelles, bilatérales, liées aux variations hormonales et à la mastose) ou non cycliques (localisées : kyste, mastite, cytostéatonécrose, douleur pariétale ou costale, médicaments, grossesse) ; rarement révélatrices d’un cancer ; examen clinique, imagerie si douleur localisée persistante ou femme > 35 ans ; rassurer, soutien-gorge adapté, AINS locaux ou oraux, paracétamol ; contraception progestative ou adaptation de la contraception ; éviter les traitements hormonaux lourds.',
    definition:
      'Douleurs mammaires, cycliques (liées au cycle menstruel) ou non cycliques, d’intensité variable.',
    physiopathologie:
      '## Cycliques\n- Sensibilité du tissu mammaire aux œstrogènes et à la progestérone, **mastose fibrokystique**\n\n## Non cycliques\n- Kystes, mastite, ectasie canalaire, cytostéatonécrose, traumatisme\n- **Extra-mammaires** : douleur costale (syndrome de Tietze), musculaire, radiculaire, angor\n- Grossesse, médicaments (contraceptifs, traitement hormonal, antidépresseurs)',
    diagnostic:
      '## Clinique\n- Rythme (cyclique ou non), localisation (bilatérale diffuse ou localisée), retentissement\n- Examen des seins et du thorax (douleur à la palpation chondrocostale)\n- **β-hCG** si doute de grossesse\n\n## Imagerie\n- **Échographie** ± mammographie si douleur localisée persistante, masse, ou âge > 35 ans',
    examens: [
      ['deuxieme_intention', 'mammographie-echographie-mammaire', 'Douleur localisée persistante.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
    ],
    scores: [],
    differentiels: [
      ['tumeurs-benignes-sein', 'Kyste douloureux.'],
      ['mastite-abces-du-sein', 'Inflammation, fièvre.'],
      ['cancer-du-sein', 'Masse, signes cutanés.'],
      ['Syndrome de Tietze', 'Douleur chondrocostale.'],
      ['angor-stable', 'Douleur thoracique à l’effort.'],
    ],
    etiologies: '## Causes\n- Hormonales (cycliques), mastose, kystes, causes pariétales, médicaments',
    principes: [
      [
        'Mesures simples',
        'Rassurer.',
        '- Explications (rarement un cancer), **soutien-gorge** bien adapté, compresses\n- **Paracétamol**, **AINS** (ibuprofène) oraux ou en gel',
      ],
      [
        'Mastodynies cycliques sévères',
        'Hormonal léger.',
        '- Adaptation de la contraception (pilule plus progestative, progestatif) ; progestatifs en 2e partie de cycle\n- Éviter danazol et analogues de la GnRH (effets indésirables) sauf avis spécialisé',
      ],
      [
        'Causes spécifiques',
        'Traiter.',
        '- Ponction d’un kyste, traitement d’une mastite, douleur pariétale : AINS, kinésithérapie',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'premiere', 'Douleur'],
      ['medroxyprogesterone', 'alternative', 'Mastodynies cycliques sévères'],
    ],
    complications: [
      {
        nom: 'Anxiété',
        description: 'Peur du cancer.',
        traitement: '- Explications, examen',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bénin ; amélioration fréquente spontanément ou à la ménopause',
    urgences: [],
    symptomes: [
      ['Douleur mammaire', 'tres_frequent'],
      ['Anxiété', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Normes et directives de santé de la reproduction'],
    niveaux: {
      cs: ['- Examen, conseils, antalgiques', '- Masse, douleur localisée persistante'],
      hgr: ['- Échographie', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Mastodynie cyclique',
        type: 'commune',
        description: 'Prémenstruelle.',
        terrain: '- Femme en âge de procréer',
        fonctionnels: '- Douleur bilatérale avant les règles',
        generaux: '',
        physiques: '- Seins nodulaires',
        paraclinique: '',
        etiologies: '- Hormonale',
        syndromes: [],
      },
      {
        nom: 'Mastodynie non cyclique',
        type: 'etiologique',
        description: 'Localisée.',
        terrain: '',
        fonctionnels: '- Douleur localisée',
        generaux: '',
        physiques: '',
        paraclinique: '- Imagerie',
        etiologies: '- Kyste, cause pariétale',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Abcès du sein hors allaitement
  {
    ...SENO,
    slug: 'abces-sein-hors-allaitement',
    nom: 'Abcès du sein en dehors de l’allaitement',
    resume:
      'Abcès mammaire non puerpéral, souvent péri-aréolaire, chez la femme fumeuse (ectasie canalaire, métaplasie des canaux) ou diabétique, récidivant et parfois fistulisé à la peau ; aussi mastite granulomateuse, tuberculose mammaire, hidradénite ; masse inflammatoire douloureuse, rétraction du mamelon ; échographie ; ponction-aspiration échoguidée répétée ou incision-drainage, antibiotiques couvrant staphylocoques et anaérobies (amoxicilline-acide clavulanique ou cloxacilline + métronidazole) ; arrêt du tabac ; éliminer un cancer inflammatoire (biopsie si doute).',
    definition:
      'Collection purulente du sein survenant en dehors de la lactation, le plus souvent sous-aréolaire.',
    physiopathologie:
      '## Mécanismes\n- **Métaplasie squameuse** des canaux galactophores (tabac) → obstruction, surinfection (staphylocoque, **anaérobies**) → abcès sous-aréolaire, **fistule** mamillaire récidivante\n- **Ectasie canalaire**, diabète, obésité, piercing\n\n## Autres causes\n- **Mastite granulomateuse** idiopathique, **tuberculose mammaire** (fistules chroniques), kystes infectés, hidradénite',
    diagnostic:
      '## Clinique\n- Masse **inflammatoire**, douloureuse, péri-aréolaire, fluctuante, rétraction ou inversion du mamelon\n- **Fistule** péri-aréolaire, écoulement purulent, récidives\n- Fièvre inconstante\n\n## Examens\n- **Échographie** (collection, fistule), **prélèvement du pus** (culture, BAAR)\n- Glycémie (diabète), TDR VIH\n- **Biopsie** si masse persistante, femme > 35 ans ou doute avec un **cancer inflammatoire** (peau d’orange, sans fièvre)',
    examens: [
      ['premiere_intention', 'mammographie-echographie-mammaire', 'Collection.'],
      ['premiere_intention', 'prelevement-de-pus', 'Germes, BAAR.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Éliminer un cancer, tuberculose.'],
      ['etiologique', 'tdr-vih', 'Immunodépression.'],
    ],
    scores: [],
    differentiels: [
      ['mastite-abces-du-sein', 'Abcès de l’allaitement.'],
      ['cancer-du-sein', 'Cancer inflammatoire : peau d’orange, sans fièvre.'],
      ['Tuberculose mammaire', 'Fistules chroniques, BAAR.'],
      ['Mastite granulomateuse', 'Femme jeune, biopsie.'],
    ],
    etiologies: '## Facteurs\n- Tabac, ectasie canalaire, diabète, obésité, piercing, tuberculose',
    principes: [
      [
        'Drainage',
        'Évacuer le pus.',
        '- **Ponction-aspiration** à l’aiguille (échoguidée si possible), répétée tous les 2–3 jours\n- **Incision-drainage** si abcès volumineux ou peau nécrosée',
      ],
      [
        'Antibiotiques',
        'Staphylocoques et anaérobies.',
        '- **Amoxicilline-acide clavulanique** ou **cloxacilline** + **métronidazole** pendant 10–14 jours, adaptés au prélèvement',
      ],
      [
        'Récidive',
        'Traiter la cause.',
        '- **Arrêt du tabac**, contrôle du diabète\n- Fistule récidivante : **exérèse des canaux** galactophores (chirurgie à distance de l’infection)\n- Tuberculose : antituberculeux',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Avec acide clavulanique'],
      ['acide-clavulanique', 'premiere', 'Avec amoxicilline'],
      ['cloxacilline', 'alternative', 'Staphylocoque'],
      ['metronidazole', 'alternative', 'Anaérobies'],
      ['lidocaine', 'adjuvant', 'Anesthésie locale'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Fistule mamillaire récidivante',
        description: 'Canal infecté.',
        traitement: '- Exérèse des canaux',
        clinique: '- Écoulement chronique',
        paraclinique: '',
      },
      {
        nom: 'Méconnaissance d’un cancer',
        fiche: 'cancer-du-sein',
        description: 'Cancer inflammatoire.',
        traitement: '- Biopsie',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Récidives fréquentes chez la fumeuse ; guérison après exérèse des canaux',
    urgences: [],
    symptomes: [
      ['Douleur mammaire', 'tres_frequent'],
      ['Nodule du sein', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Écoulement mamelonnaire', 'occasionnel'],
    ],
    sources: ['Guide clinique et thérapeutique', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Ponction, antibiotiques, orientation', '- Récidive, masse persistante'],
      hgr: ['- Échographie, drainage', ''],
      tert: ['- Exérèse des canaux, biopsie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Abcès sous-aréolaire de la fumeuse',
        type: 'commune',
        description: 'Récidivant.',
        terrain: '- Femme fumeuse',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Masse péri-aréolaire, mamelon rétracté',
        paraclinique: '- Collection',
        etiologies: '- Staphylocoque, anaérobies',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Fistule mamillaire chronique',
        type: 'evolutive',
        description: 'Récidives.',
        terrain: '',
        fonctionnels: '- Écoulement',
        generaux: '',
        physiques: '- Orifice péri-aréolaire',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
