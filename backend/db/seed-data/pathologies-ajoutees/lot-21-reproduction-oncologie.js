'use strict';

/**
 * Lot 21 (fertilité, planification familiale, gynécologie oncologique) — infertilité du
 * couple, contraception (choix de la méthode), contraception d'urgence, cancer du col de
 * l'utérus. Rédigé par IA (OMS critères d'éligibilité 2015, OMS 2021 col, FIGO) : à valider.
 */

const FERT = { departement: 'gynecologie-obstetrique', specialite: 'Fertilité et reproduction' };
const PF = { departement: 'gynecologie-obstetrique', specialite: 'Planification familiale' };
const ONCO = { departement: 'gynecologie-obstetrique', specialite: 'Gynécologie oncologique' };

module.exports = [
  // =================================================================== Infertilité
  {
    ...FERT,
    slug: 'infertilite-du-couple',
    nom: 'Infertilité du couple',
    resume:
      'Absence de grossesse après 12 mois de rapports réguliers (6 mois après 35 ans) : bilan du couple (spermogramme, ovulation, perméabilité tubaire) ; en Afrique, prédominance de l’infertilité tubaire (séquelles d’IST et d’avortements) ; traitement selon la cause ; accompagnement face à la stigmatisation.',
    definition:
      'Incapacité d’un couple à obtenir une grossesse après 12 mois de rapports sexuels réguliers non protégés ; primaire (aucune grossesse antérieure) ou secondaire.',
    physiopathologie:
      '## Causes\n- **Féminines** : tubaires (salpingites, avortements septiques, tuberculose génitale), troubles de l’ovulation (syndrome des ovaires polykystiques, hyperprolactinémie, dysthyroïdie), utérines (fibromes, synéchies)\n- **Masculines** (30–50 %) : anomalies du sperme (infections, varicocèle, IST, oreillons), troubles de l’érection\n- Mixtes ou inexpliquées',
    diagnostic:
      '## Bilan de base du couple\n- Interrogatoire des deux partenaires : antécédents d’IST, d’avortements, de chirurgie, cycles, sexualité\n- Examen clinique (IMC, pilosité, galactorrhée, examen génital)\n- **Femme** : courbe de température ou progestérone J21 (ovulation), FSH-LH-œstradiol à J3, prolactine, TSH, échographie pelvienne, **hystérosalpingographie**\n- **Homme** : **spermogramme**\n- Sérologies : VIH, syphilis, hépatite B',
    examens: [
      ['confirmation', 'spermogramme', 'Bilan masculin.'],
      ['confirmation', 'hysterosalpingographie', 'Perméabilité tubaire.'],
      ['premiere_intention', 'bilan-hormonal-feminin', 'Ovulation, réserve ovarienne.'],
      ['premiere_intention', 'echographie-pelvienne', 'Fibromes, ovaires polykystiques.'],
      ['premiere_intention', 'tsh', 'Dysthyroïdie.'],
      ['premiere_intention', 'tdr-vih', 'Dépistage du couple.'],
      ['premiere_intention', 'serologie-syphilis', 'Dépistage.'],
    ],
    scores: ['imc'],
    differentiels: [],
    etiologies:
      '## Facteurs\n- IST non traitées, avortements à risque, accouchements non hygiéniques\n- Obésité ou maigreur, âge de la femme > 35 ans, tabac, alcool\n- Tuberculose génitale, fibromes',
    principes: [
      [
        'Traiter la cause',
        'Restaurer la fertilité.',
        '- Anovulation : **clomifène** 50–150 mg/j de J2 à J6, ou **létrozole** (syndrome des ovaires polykystiques), surveillance échographique\n- Hyperprolactinémie : **bromocriptine**\n- Fibromes sous-muqueux, synéchies : chirurgie\n- Obstruction tubaire : chirurgie tubaire ou fécondation in vitro (centres spécialisés)\n- Infections : traitement du couple',
      ],
      [
        'Mesures générales',
        'Optimiser les chances.',
        '- Rapports réguliers (2 à 3 par semaine), poids normal, arrêt du tabac et de l’alcool\n- **Acide folique** avant la conception',
      ],
      [
        'Accompagnement',
        'Réduire la souffrance.',
        '- Consultation du couple, information sur les causes masculines\n- Soutien psychologique, lutte contre la stigmatisation et les violences conjugales',
      ],
      [
        'Prévention',
        'Éviter l’infertilité tubaire.',
        '- Traitement précoce des IST, accès à l’avortement sécurisé et aux soins après avortement, accouchement hygiénique',
      ],
    ],
    molecules: [
      ['clomifene', 'premiere', 'Induction de l’ovulation'],
      ['letrozole', 'alternative', 'Syndrome des ovaires polykystiques'],
      ['bromocriptine', 'alternative', 'Hyperprolactinémie'],
      ['acide-folique', 'adjuvant', 'Avant la conception'],
      ['doxycycline', 'adjuvant', 'Infection du couple'],
    ],
    complications: [
      {
        nom: 'Grossesse extra-utérine',
        fiche: 'grossesse-extra-uterine',
        description: 'Trompes lésées.',
        traitement: '- Chirurgie',
        clinique: '- Douleur, retard de règles',
        paraclinique: '- β-hCG',
      },
      {
        nom: 'Grossesses multiples',
        description: 'Inducteurs de l’ovulation.',
        traitement: '- Surveillance échographique',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Retentissement psychosocial',
        description: 'Stigmatisation, divorce, violences.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause et de l’âge de la femme ; les causes tubaires sévères nécessitent une assistance médicale à la procréation',
    urgences: [],
    symptomes: [
      ['Infertilité', 'tres_frequent'],
      ['Douleur pelvienne', 'occasionnel'],
      ['Saignement vaginal', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'FIGO — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Conseil du couple, dépistage des IST, orientation', '- Infertilité > 12 mois'],
      hgr: ['- Bilan de base, induction simple de l’ovulation, chirurgie', ''],
      tert: ['- Assistance médicale à la procréation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Infertilité tubaire',
        type: 'commune',
        description: 'Séquelle infectieuse.',
        terrain: '- Antécédent d’IST, d’avortement',
        fonctionnels: '- Douleurs pelviennes',
        generaux: '',
        physiques: '',
        paraclinique: '- Trompes obstruées',
        etiologies: '- Salpingite',
        syndromes: [],
        examens: [['hysterosalpingographie', 'Perméabilité']],
      },
      {
        nom: 'Infertilité masculine',
        type: 'etiologique',
        description: 'Anomalies du sperme.',
        terrain: '- IST, varicocèle',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Spermogramme anormal',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Contraception
  {
    ...PF,
    slug: 'contraception-choix-methode',
    nom: 'Contraception : choix de la méthode',
    resume:
      'Conseil centré sur la femme selon les critères médicaux d’éligibilité de l’OMS : méthodes de longue durée (implant, DIU) très efficaces, injectable (DMPA), pilules, préservatifs (double protection), méthodes naturelles, stérilisation ; post-partum et post-abortum.',
    definition:
      'Ensemble des méthodes permettant d’éviter une grossesse non désirée et d’espacer les naissances ; le choix repose sur l’efficacité, la tolérance, les contre-indications (critères OMS 1 à 4) et les préférences de la femme.',
    physiopathologie:
      '## Méthodes\n- **Longue durée** : implant (étonogestrel 3 ans, lévonorgestrel 5 ans), DIU au cuivre (10–12 ans), DIU hormonal\n- **Injectable** : médroxyprogestérone (DMPA) tous les 3 mois (IM ou sous-cutanée auto-administrée)\n- **Pilules** : combinées (œstroprogestatives) ou progestatives seules\n- **Barrière** : préservatifs (protection contre les IST et le VIH)\n- **Naturelles** : MAMA, collier du cycle\n- **Définitives** : ligature des trompes, vasectomie',
    diagnostic:
      '## Consultation\n- Besoins, projet de grossesse, allaitement, antécédents\n- PA, poids ; recherche de contre-indications (thrombose, HTA, migraine avec aura, cancer du sein, maladie hépatique)\n- Exclure une grossesse (test ou critères cliniques)\n- Interactions (rifampicine, antiépileptiques, éfavirenz avec l’implant)',
    examens: [
      ['premiere_intention', 'beta-hcg', 'Si doute sur une grossesse.'],
      ['premiere_intention', 'tdr-vih', 'Proposé.'],
    ],
    scores: ['imc'],
    differentiels: [],
    etiologies:
      '## Besoins non satisfaits\n- Accès limité, idées reçues, opposition du partenaire, ruptures de stock',
    principes: [
      [
        'Choix éclairé',
        'Respecter la décision de la femme.',
        '- Présenter toutes les méthodes, leur efficacité et leurs effets indésirables (saignements irréguliers fréquents avec les progestatifs)\n- Appliquer les **critères médicaux d’éligibilité de l’OMS**',
      ],
      [
        'Situations particulières',
        'Adapter.',
        '- **Post-partum** : DIU dans les 48 h ou après 4 semaines, implant et progestatifs immédiatement ; pas d’œstroprogestatifs avant 6 semaines si allaitement (21 jours sinon)\n- **Post-abortum** : toutes les méthodes immédiatement\n- **VIH** : toutes les méthodes ; interaction éfavirenz-implant ; préservatif\n- **Adolescentes** : toutes les méthodes, confidentialité',
      ],
      [
        'Suivi',
        'Assurer la continuité.',
        '- Rendez-vous pour les injections, gestion des effets indésirables, changement de méthode si besoin',
      ],
    ],
    molecules: [
      ['medroxyprogesterone', 'premiere', 'Injectable tous les 3 mois'],
      ['etonogestrel', 'premiere', 'Implant 3 ans'],
      ['levonorgestrel', 'premiere', 'Pilule, implant, DIU hormonal'],
      ['ethinylestradiol', 'alternative', 'Pilule combinée'],
      ['levonorgestrel-1-5-mg', 'adjuvant', 'Contraception d’urgence'],
    ],
    complications: [
      {
        nom: 'Thrombose veineuse',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Œstroprogestatifs.',
        traitement: '- Arrêt, anticoagulation',
        clinique: '- Mollet douloureux',
        paraclinique: '- Doppler',
      },
      {
        nom: 'Saignements irréguliers',
        fiche: 'menometrorragies',
        description: 'Progestatifs.',
        traitement: '- AINS courts, conseil',
        clinique: '- Spotting',
        paraclinique: '',
      },
      {
        nom: 'Expulsion ou perforation du DIU',
        description: 'Rare.',
        traitement: '- Retrait, chirurgie',
        clinique: '- Fils non visibles',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Bénéfices\n- La contraception réduit la mortalité maternelle et infantile (espacement des naissances ≥ 24 mois)',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'occasionnel'],
      ['Céphalées', 'rare'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'FIGO — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Conseil, pilules, injectables, implants, DIU, préservatifs',
        '- Stérilisation, contre-indications complexes',
      ],
      hgr: ['- Ligature des trompes, vasectomie, retrait difficile d’implant', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Contraception de longue durée',
        type: 'commune',
        description: 'Implant ou DIU.',
        terrain: '- Désir d’espacer ou de limiter',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Contraception du post-partum',
        type: 'terrain',
        description: 'Période clé.',
        terrain: '- Accouchée, allaitement',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Contraception d'urgence
  {
    ...PF,
    slug: 'contraception-d-urgence',
    nom: 'Contraception d’urgence',
    resume:
      'Après un rapport non protégé ou un échec de contraception : lévonorgestrel 1,5 mg (jusqu’à 72 h, idéalement le plus tôt possible), ulipristal 30 mg (jusqu’à 120 h) ou DIU au cuivre (jusqu’à 5 jours, le plus efficace) ; puis contraception régulière et dépistage des IST.',
    definition:
      'Méthodes utilisées après un rapport sexuel non protégé (oubli de pilule, rupture de préservatif, violence sexuelle) pour prévenir une grossesse ; elles ne sont pas abortives.',
    physiopathologie:
      '## Mécanismes\n- Lévonorgestrel et ulipristal : retard ou blocage de l’ovulation (inefficaces après l’ovulation)\n- DIU au cuivre : toxicité pour les spermatozoïdes, empêche l’implantation',
    diagnostic:
      '## Évaluation\n- Délai depuis le rapport, date des dernières règles\n- Autres rapports non protégés dans le cycle\n- Risque d’IST et de VIH (PPE si violence ou partenaire séropositif)\n- Poids : efficacité réduite du lévonorgestrel si IMC > 30 (préférer le DIU ou l’ulipristal)',
    examens: [
      ['deuxieme_intention', 'beta-hcg', 'Si retard de règles de plus de 7 jours après la prise.'],
      ['premiere_intention', 'tdr-vih', 'Risque d’exposition.'],
    ],
    scores: ['imc'],
    differentiels: [],
    etiologies:
      '## Situations\n- Rapport non protégé, oubli de pilule, retard d’injection, rupture de préservatif, violence sexuelle',
    principes: [
      [
        'Méthodes',
        'Prévenir la grossesse.',
        '- **Lévonorgestrel** 1,5 mg en dose unique, le plus tôt possible (jusqu’à 72 h)\n- **Ulipristal** 30 mg en dose unique, jusqu’à 120 h\n- **DIU au cuivre** jusqu’à 5 jours : le plus efficace, contraception durable\n- Disponible sans ordonnance ; pas de contre-indication médicale (sauf grossesse connue)',
      ],
      [
        'Après',
        'Assurer le suivi.',
        '- Démarrer ou reprendre une contraception régulière (après ulipristal : attendre 5 jours pour la contraception hormonale)\n- Préservatif jusqu’aux règles suivantes\n- Test de grossesse si retard de règles > 7 jours\n- Dépistage des IST, PPE VIH si indiqué',
      ],
    ],
    molecules: [
      ['levonorgestrel-1-5-mg', 'premiere', 'Jusqu’à 72 h'],
      ['ulipristal', 'premiere', 'Jusqu’à 120 h'],
    ],
    complications: [
      {
        nom: 'Échec et grossesse',
        description: 'Prise tardive, ovulation passée.',
        traitement: '- Test de grossesse, conseil',
        clinique: '- Retard de règles',
        paraclinique: '- β-hCG',
      },
      {
        nom: 'Grossesse extra-utérine',
        fiche: 'grossesse-extra-uterine',
        description: 'Rare, à évoquer en cas de douleur.',
        traitement: '- Prise en charge',
        clinique: '- Douleur, saignement',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Efficacité\n- Le lévonorgestrel prévient la majorité des grossesses attendues s’il est pris tôt ; le DIU au cuivre prévient plus de 99 %',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'occasionnel'],
      ['Vomissements', 'rare'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'FIGO — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Délivrance de la contraception d’urgence, conseil, contraception régulière', ''],
      hgr: ['- Pose de DIU', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Contraception d’urgence hormonale',
        type: 'commune',
        description: 'Dans les 72 à 120 h.',
        terrain: '- Rapport non protégé',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cancer du col
  {
    ...ONCO,
    slug: 'cancer-du-col-de-l-uterus',
    nom: 'Cancer du col de l’utérus',
    resume:
      'Premier ou deuxième cancer de la femme en RDC, dû au papillomavirus (HPV), plus fréquent et plus précoce chez la femme vivant avec le VIH : saignements provoqués, leucorrhées ; dépistage (IVA, test HPV) et traitement des lésions précancéreuses ; vaccination HPV des filles de 9–14 ans ; cancers invasifs : chirurgie ou radio-chimiothérapie, soins palliatifs.',
    definition:
      'Carcinome (épidermoïde surtout, adénocarcinome) développé à partir de l’épithélium du col utérin, après une évolution lente de lésions précancéreuses dues à une infection persistante par un HPV oncogène (16, 18).',
    physiopathologie:
      '## Mécanismes\n- Infection persistante par HPV à haut risque (transmission sexuelle)\n- Lésions précancéreuses (CIN) pendant 10 à 20 ans, puis cancer invasif\n- Progression plus rapide chez la femme vivant avec le VIH',
    diagnostic:
      '## Clinique\n- Lésions précancéreuses : asymptomatiques (dépistage)\n- Cancer : **saignements provoqués** (rapports), métrorragies, leucorrhées fétides, douleurs pelviennes\n- Stades avancés : œdème des jambes, insuffisance rénale (compression urétérale), fistules\n\n## Diagnostic\n- Examen au spéculum, toucher vaginal et rectal (extension aux paramètres)\n- **Biopsie** de toute lésion visible\n- Stade FIGO : examen clinique, échographie rénale, radiographie thoracique, scanner si disponible',
    examens: [
      ['confirmation', 'biopsie-histologie', 'Diagnostic histologique.'],
      ['premiere_intention', 'depistage-col-iva-hpv', 'Dépistage des lésions précancéreuses.'],
      ['premiere_intention', 'tdr-vih', 'Systématique.'],
      ['gravite', 'echographie-renale', 'Hydronéphrose (stade III B).'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['gravite', 'radiographie-thoracique', 'Métastases.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Bilan d’extension.'],
    ],
    scores: [],
    differentiels: [
      ['Cervicite', 'Col inflammatoire sans lésion tumorale, biopsie.'],
      ['Polype cervical', 'Lésion pédiculée bénigne.'],
      ['infections-sexuellement-transmissibles', 'Ulcération (chancre).'],
      ['saignements-apres-menopause', 'Démarche devant les saignements de la femme ménopausée.'],
    ],
    etiologies:
      '## Facteurs de risque\n- HPV (16, 18), **VIH**, rapports sexuels précoces, partenaires multiples, multiparité, tabac, absence de dépistage',
    principes: [
      [
        'Prévention primaire',
        'Éviter l’infection.',
        '- **Vaccination HPV** des filles de 9 à 14 ans (1 à 2 doses)\n- Préservatif, éducation sexuelle',
      ],
      [
        'Dépistage et traitement des lésions précancéreuses',
        'Couper la progression.',
        '- **Test HPV** (auto-prélèvement possible) dès 30 ans tous les 5–10 ans, dès 25 ans tous les 3–5 ans chez la femme vivant avec le VIH ; ou **IVA**\n- Approche « dépister et traiter » : **thermocoagulation** ou cryothérapie le jour même ; résection à l’anse (RAD) pour les grandes lésions',
      ],
      [
        'Cancer invasif',
        'Traiter selon le stade FIGO.',
        '- Stades précoces : **hystérectomie élargie** (Wertheim)\n- Stades localement avancés : **radio-chimiothérapie** concomitante (**cisplatine** hebdomadaire) + curiethérapie (centres de radiothérapie)\n- Stades métastatiques : chimiothérapie palliative',
      ],
      [
        'Soins palliatifs',
        'Soulager.',
        '- Antalgiques (**morphine** orale selon l’OMS), traitement des saignements et des pertes (métronidazole local), soins des fistules, accompagnement',
      ],
    ],
    molecules: [
      ['vaccin-papillomavirus-hpv', 'premiere', 'Prévention (filles de 9–14 ans)'],
      ['cisplatine', 'premiere', 'Radio-chimiothérapie'],
      ['fluorouracile', 'alternative', 'Chimiothérapie'],
      ['paclitaxel', 'alternative', 'Chimiothérapie palliative'],
      ['morphine', 'premiere', 'Douleur (soins palliatifs)'],
      ['metronidazole', 'adjuvant', 'Pertes fétides'],
      ['acide-tranexamique', 'adjuvant', 'Saignements'],
    ],
    complications: [
      {
        nom: 'Insuffisance rénale obstructive',
        fiche: 'insuffisance-renale-aigue',
        description: 'Compression urétérale.',
        traitement: '- Néphrostomie, traitement oncologique',
        clinique: '- Oligurie',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Fistules vésico- ou recto-vaginales',
        description: 'Envahissement, radiothérapie.',
        traitement: '- Soins palliatifs, chirurgie',
        clinique: '- Fuites d’urine ou de selles',
        paraclinique: '',
      },
      {
        nom: 'Hémorragie',
        description: 'Tumeur.',
        traitement: '- Tamponnement, acide tranexamique, radiothérapie hémostatique',
        clinique: '- Saignement',
        paraclinique: '- Hb',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison dans la majorité des stades précoces ; survie faible aux stades avancés (diagnostic souvent tardif en RDC)',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Leucorrhées', 'frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Œdèmes', 'occasionnel'],
      ['Dyspareunie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'FIGO — recommandations de pratique clinique',
      'ESGO — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Vaccination HPV, dépistage IVA/HPV, thermocoagulation, orientation',
        '- Lésion suspecte, saignements',
      ],
      hgr: ['- Biopsie, RAD, hystérectomie', '- Cancer invasif'],
      tert: ['- Radiothérapie, chimiothérapie, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Lésion précancéreuse',
        type: 'commune',
        description: 'Découverte au dépistage.',
        terrain: '- Femme de 30 à 49 ans, VIH',
        fonctionnels: '- Asymptomatique',
        generaux: '',
        physiques: '- Zone acidophile à l’IVA',
        paraclinique: '- Test HPV positif',
        etiologies: '- HPV 16, 18',
        syndromes: [],
        examens: [['depistage-col-iva-hpv', 'Dépistage']],
      },
      {
        nom: 'Cancer invasif avancé',
        type: 'gravite',
        description: 'Diagnostic tardif.',
        terrain: '- Absence de dépistage',
        fonctionnels: '- Saignements, pertes fétides, douleurs',
        generaux: '- Amaigrissement, anémie',
        physiques: '- Tumeur bourgeonnante, paramètres envahis',
        paraclinique: '- Hydronéphrose',
        etiologies: '',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
      },
    ],
  },
];
