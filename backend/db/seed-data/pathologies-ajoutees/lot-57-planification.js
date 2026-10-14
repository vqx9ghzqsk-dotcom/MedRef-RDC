'use strict';

/**
 * Lot 57 (phase 2, planification familiale) — contraception du post-partum, complications du DIU et
 * de l'implant, stérilisation tubaire, méthodes naturelles, contraception de la femme vivant avec
 * le VIH. Rédigé par IA (OMS : critères de recevabilité médicale, Normes et directives SR) : à
 * valider.
 */

const PF = { departement: 'gynecologie-obstetrique', specialite: 'Planification familiale' };

module.exports = [
  // =================================================================== Contraception post-partum
  {
    ...PF,
    slug: 'contraception-du-post-partum',
    nom: 'Contraception du post-partum',
    resume:
      'Un intervalle d’au moins 24 mois entre une naissance et la grossesse suivante réduit la mortalité maternelle et infantile ; proposer une méthode dès la CPN et avant la sortie de la maternité : DIU au cuivre ou hormonal dans les 48 h (ou après 4 semaines), implant et progestatifs utilisables immédiatement même en allaitant, MAMA (allaitement exclusif, aménorrhée, < 6 mois), ligature des trompes ; éviter les œstroprogestatifs avant 6 semaines si allaitement (avant 3 semaines sans allaitement, risque thrombotique) ; consentement libre et éclairé.',
    definition:
      'Choix et mise en place d’une méthode contraceptive après un accouchement ou un avortement, en tenant compte de l’allaitement, du risque thromboembolique et des souhaits de la femme.',
    physiopathologie:
      '## Principes\n- Retour possible de l’ovulation dès **3–4 semaines** en l’absence d’allaitement exclusif, avant le retour des règles\n- **Risque thrombotique** élevé les 6 premières semaines (œstrogènes contre-indiqués)\n- Les **progestatifs seuls** n’altèrent pas l’allaitement\n\n## Intérêt\n- Espacement des naissances ≥ 24 mois : moins de prématurité, de petit poids, de décès maternels et infantiles',
    diagnostic:
      '## Évaluation\n- Souhaits (espacement, limitation), allaitement, antécédents (thrombose, HTA, cancer du sein, VIH), mode d’accouchement\n- Critères de recevabilité médicale de l’OMS\n- Moment : CPN (information), salle d’accouchement (DIU post-placentaire), avant la sortie, consultation postnatale (6 semaines)',
    examens: [
      ['premiere_intention', 'beta-hcg', 'Si début de méthode tardif sans garantie d’absence de grossesse.'],
      ['premiere_intention', 'tdr-vih', 'Conseil intégré.'],
    ],
    scores: [],
    differentiels: [],
    etiologies: '## Contexte\n- Post-partum, post-avortement',
    principes: [
      [
        'Méthodes immédiates',
        'Avant la sortie.',
        '- **DIU au cuivre** ou au lévonorgestrel : dans les **10 minutes après la délivrance** ou dans les 48 h (y compris pendant la césarienne), sinon après 4 semaines\n- **Implant** (étonogestrel, lévonorgestrel) et **progestatifs injectables** (médroxyprogestérone) : immédiatement, compatibles avec l’allaitement\n- **Ligature des trompes** : pendant la césarienne ou dans les 7 jours, sinon après 6 semaines (consentement éclairé préalable)',
      ],
      [
        'Allaitement',
        'Respecter la lactation.',
        '- **MAMA** : efficace si allaitement exclusif jour et nuit, aménorrhée, enfant < 6 mois ; relais par une autre méthode ensuite\n- **Œstroprogestatifs** : pas avant 6 semaines en cas d’allaitement (21 jours sans allaitement, 42 jours si facteurs de risque thrombotique)',
      ],
      [
        'Post-avortement',
        'Immédiatement.',
        '- Toutes les méthodes peuvent débuter le jour même (DIU après évacuation sans infection)',
      ],
    ],
    molecules: [
      ['etonogestrel', 'premiere', 'Implant'],
      ['levonorgestrel', 'premiere', 'Implant, DIU hormonal, pilule progestative'],
      ['medroxyprogesterone', 'premiere', 'Injectable'],
      ['ethinylestradiol', 'alternative', 'Après 6 semaines (allaitement)'],
    ],
    complications: [
      {
        nom: 'Grossesse rapprochée',
        fiche: 'consultation-prenatale',
        description: 'Absence de contraception.',
        traitement: '- Conseil précoce',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Expulsion du DIU post-placentaire',
        fiche: 'complications-diu-implant',
        description: 'Plus fréquente qu’à distance.',
        traitement: '- Remise en place',
        clinique: '- Fils allongés, DIU visible',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Intérêt\n- Réduction des grossesses non désirées et rapprochées ; méthodes de longue durée très efficaces',
    urgences: [],
    symptomes: [],
    sources: ['OMS — lignes directrices et publications', 'Normes et directives de santé de la reproduction'],
    niveaux: {
      cs: ['- Conseil, implant, injectable, pilule, MAMA', ''],
      hgr: ['- DIU post-placentaire, ligature', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Femme allaitante',
        type: 'commune',
        description: 'Progestatifs, DIU, MAMA.',
        terrain: '- Post-partum, allaitement',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Post-partum avec risque thrombotique',
        type: 'gravite',
        description: 'Pas d’œstrogènes.',
        terrain: '- Césarienne, thrombose, pré-éclampsie',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Complications DIU et implant
  {
    ...PF,
    slug: 'complications-diu-implant',
    nom: 'Complications du DIU et de l’implant',
    resume:
      'Méthodes de longue durée très efficaces et sûres, avec des complications à connaître : DIU (fils non visibles : expulsion ou perforation → échographie ; saignements et douleurs avec le DIU au cuivre ; infection génitale haute dans les 3 semaines suivant la pose ; grossesse sur DIU → éliminer une GEU, retirer le DIU si fils visibles) ; implant (saignements irréguliers fréquents et bénins, implant non palpable ou migré, difficulté de retrait, infection du point d’insertion) ; conseil, AINS ou œstrogènes courts pour les saignements, retrait sur demande à tout moment.',
    definition:
      'Effets indésirables et complications liés à l’insertion, à la présence ou au retrait d’un dispositif intra-utérin (cuivre ou lévonorgestrel) ou d’un implant contraceptif sous-cutané.',
    physiopathologie:
      '## DIU\n- **Expulsion** (2–10 %, plus fréquente après la pose post-partum), **perforation** utérine (rare, à la pose)\n- DIU au cuivre : **ménorragies**, **dysménorrhée**\n- **Infection** : surtout dans les 20 jours suivant la pose (IST préexistante)\n- **Grossesse** sur DIU : risque de fausse couche, d’infection et de GEU\n\n## Implant\n- **Saignements irréguliers** ou aménorrhée (fréquents, sans danger)\n- Implant **non palpable** (insertion profonde), migration exceptionnelle, infection, cicatrice\n- Interactions : inducteurs enzymatiques (rifampicine, efavirenz, carbamazépine) réduisent l’efficacité',
    diagnostic:
      '## DIU\n- **Fils non visibles** : test de grossesse, **échographie** (DIU intra-utérin, déplacé, absent), radiographie de l’abdomen si non retrouvé (perforation)\n- Douleurs, fièvre, leucorrhées : infection génitale haute\n- Retard de règles : **β-hCG**, échographie (GEU)\n\n## Implant\n- Palpation ; implant non palpable : échographie des parties molles\n- Saignements : éliminer grossesse, IST, lésion du col',
    examens: [
      ['premiere_intention', 'echographie-pelvienne', 'Position du DIU.'],
      ['premiere_intention', 'beta-hcg', 'Grossesse, GEU.'],
      ['deuxieme_intention', 'abdomen-sans-preparation', 'DIU non retrouvé.'],
      ['deuxieme_intention', 'echographie-parties-molles', 'Implant non palpable.'],
      ['etiologique', 'prelevement-vaginal', 'Infection.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-extra-uterine', 'Grossesse sur DIU.'],
      ['infection-genitale-haute', 'Fièvre, douleurs pelviennes.'],
      ['menometrorragies', 'Autres causes de saignements.'],
    ],
    etiologies: '## Causes\n- Technique de pose, post-partum, IST, interactions médicamenteuses',
    principes: [
      [
        'DIU',
        'Selon la complication.',
        '- **Fils non visibles** : contraception d’appoint jusqu’à l’échographie ; DIU dans la cavité : laisser en place ; expulsé : reposer ; **perforation** : retrait par cœlioscopie\n- **Saignements et douleurs** (cuivre) : **AINS** (ibuprofène) pendant les règles, acide tranexamique ; changer de méthode si gêne\n- **Infection** : antibiotiques (ceftriaxone + doxycycline + métronidazole) **sans retirer le DIU** sauf absence d’amélioration en 48–72 h\n- **Grossesse** : éliminer une GEU ; retrait du DIU si fils visibles au 1er trimestre',
      ],
      [
        'Implant',
        'Rassurer et adapter.',
        '- Saignements irréguliers : explications ; **AINS** 5 jours ou **œstroprogestatif** 1–3 cycles si gênant (sans contre-indication)\n- Implant non palpable : localisation échographique avant retrait par un opérateur formé\n- Interactions (rifampicine, efavirenz) : méthode d’appoint ou changement',
      ],
      [
        'Principe',
        'Liberté de choix.',
        '- **Retrait sur demande** à tout moment, sans justification, avec retour rapide de la fertilité',
      ],
    ],
    molecules: [
      ['ibuprofene', 'premiere', 'Saignements et douleurs'],
      ['acide-tranexamique', 'alternative', 'Ménorragies'],
      ['ethinylestradiol', 'alternative', 'Saignements sous implant'],
      ['ceftriaxone', 'alternative', 'Infection génitale haute'],
      ['doxycycline', 'alternative', 'Infection génitale haute'],
      ['lidocaine', 'adjuvant', 'Retrait de l’implant'],
    ],
    complications: [
      {
        nom: 'Grossesse extra-utérine',
        fiche: 'grossesse-extra-uterine',
        description: 'Grossesse sur DIU.',
        traitement: '- Chirurgie',
        clinique: '- Douleur, saignement',
        paraclinique: '- β-hCG',
      },
      {
        nom: 'Infection génitale haute',
        fiche: 'infection-genitale-haute',
        description: 'Après la pose.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, douleurs',
        paraclinique: '',
      },
      {
        nom: 'Perforation utérine',
        description: 'À la pose.',
        traitement: '- Retrait chirurgical',
        clinique: '- Douleur, fils absents',
        paraclinique: '- Échographie, ASP',
      },
    ],
    evolution:
      '## Pronostic\n- Complications rares et en général bénignes ; ces méthodes restent parmi les plus efficaces',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'frequent'],
      ['Douleur pelvienne', 'occasionnel'],
      ['Dysménorrhée', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Normes et directives de santé de la reproduction'],
    niveaux: {
      cs: [
        '- Conseil, gestion des saignements, retrait de l’implant',
        '- Fils non visibles, fièvre, retard de règles',
      ],
      hgr: ['- Échographie, retrait difficile', ''],
      tert: ['- Cœlioscopie (perforation)', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Saignements irréguliers sous implant',
        type: 'commune',
        description: 'Bénins.',
        terrain: '- Porteuse d’implant',
        fonctionnels: '- Saignements imprévisibles',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Fils de DIU non visibles',
        type: 'gravite',
        description: 'Expulsion ou perforation.',
        terrain: '- Porteuse de DIU',
        fonctionnels: '',
        generaux: '',
        physiques: '- Fils absents',
        paraclinique: '- Échographie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Stérilisation tubaire
  {
    ...PF,
    slug: 'sterilisation-tubaire',
    nom: 'Stérilisation tubaire',
    resume:
      'Méthode de contraception permanente pour les femmes qui ne souhaitent plus d’enfant (ligature et section des trompes par mini-laparotomie sous anesthésie locale, cœlioscopie, ou pendant une césarienne) : très efficace (< 1 % d’échec), sans effet sur les règles ni sur les hormones ; exige un conseil approfondi et un consentement libre, éclairé et écrit (caractère irréversible, regrets plus fréquents chez les femmes jeunes) ; pas de contrainte ni d’incitation ; en cas de grossesse ultérieure, éliminer une GEU ; vasectomie à proposer aussi aux hommes.',
    definition:
      'Occlusion chirurgicale des deux trompes utérines (ligature, section, clip, salpingectomie) dans un but de contraception définitive.',
    physiopathologie:
      '## Principe\n- Interruption de la continuité tubaire empêchant la rencontre des gamètes\n- Ovaires intacts : pas de ménopause, règles inchangées\n\n## Risques\n- Complications opératoires (rares) : hémorragie, infection, lésion intestinale ou vésicale\n- Échec (< 1 %), avec **risque de GEU** en cas de grossesse\n- **Regret** (jeunes, décision sous pression, changement de partenaire, décès d’enfant)',
    diagnostic:
      '## Évaluation\n- Souhait éclairé de ne plus avoir d’enfant, sans pression du conjoint, de la famille ou du soignant\n- Information sur l’irréversibilité, les alternatives de longue durée (implant, DIU), la vasectomie\n- Examen : infection pelvienne, grossesse (β-hCG), aptitude à l’anesthésie\n- **Consentement écrit**, délai de réflexion selon les normes nationales',
    examens: [
      ['premiere_intention', 'beta-hcg', 'Éliminer une grossesse.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
    ],
    scores: [],
    differentiels: [],
    etiologies: '## Indication\n- Désir de contraception définitive',
    principes: [
      [
        'Conseil',
        'Consentement libre et éclairé.',
        '- Information complète (efficacité, irréversibilité, risques, alternatives), absence de contrainte ou d’incitation\n- Décision de la femme ; ne pas proposer pour la première fois pendant le travail ou juste avant une césarienne urgente',
      ],
      [
        'Technique',
        'Sûre.',
        '- **Mini-laparotomie** sous anesthésie locale (lidocaïne) et sédation légère, en post-partum (dans les 7 jours) ou à distance (après 6 semaines)\n- Cœlioscopie (clips, anneaux) ; pendant une **césarienne** si demande préalable\n- Asepsie, antibioprophylaxie selon le protocole',
      ],
      [
        'Suivi',
        'Informer.',
        '- Contrôle à 7 jours (cicatrice) ; retard de règles ou douleur : β-hCG et échographie (GEU)\n- Pas de protection contre les IST (préservatif)',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['ibuprofene', 'premiere', 'Douleur postopératoire'],
      ['paracetamol', 'alternative', 'Douleur'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie'],
    ],
    complications: [
      {
        nom: 'Grossesse extra-utérine',
        fiche: 'grossesse-extra-uterine',
        description: 'Échec de la stérilisation.',
        traitement: '- Chirurgie',
        clinique: '- Douleur, saignement',
        paraclinique: '- β-hCG',
      },
      {
        nom: 'Infection de la plaie',
        fiche: 'infection-du-site-operatoire',
        description: 'Postopératoire.',
        traitement: '- Soins, antibiotiques',
        clinique: '- Rougeur, pus',
        paraclinique: '',
      },
      {
        nom: 'Regret',
        description: 'Décision précoce ou sous pression.',
        traitement: '- Reperméabilisation ou FIV (accès limité)',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Efficacité\n- Contraception définitive très efficace ; reperméabilisation difficile et peu accessible',
    urgences: [],
    symptomes: [],
    sources: ['OMS — lignes directrices et publications', 'Normes et directives de santé de la reproduction'],
    niveaux: {
      cs: ['- Conseil, orientation', ''],
      hgr: ['- Mini-laparotomie, ligature pendant césarienne', ''],
      tert: ['- Cœlioscopie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ligature du post-partum',
        type: 'commune',
        description: 'Dans les 7 jours.',
        terrain: '- Femme multipare informée',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Ligature à distance',
        type: 'terrain',
        description: 'Après 6 semaines.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Méthodes naturelles
  {
    ...PF,
    slug: 'methodes-naturelles-planification',
    nom: 'Méthodes naturelles de planification familiale',
    resume:
      'Méthodes fondées sur la connaissance de la fécondité et l’abstinence (ou le préservatif) pendant la période fertile : méthode des jours fixes (collier du cycle, cycles de 26 à 32 jours : abstinence des jours 8 à 19), méthode des deux jours et de la glaire cervicale, température, MAMA (allaitement exclusif), retrait ; efficacité moyenne (échecs fréquents en pratique, 12–24 %), exigeant coopération du partenaire et cycles réguliers ; adaptées aux couples motivés ou ne souhaitant pas de méthode moderne ; ne protègent pas des IST ; conseil et formation par des agents qualifiés.',
    definition:
      'Méthodes de planification familiale fondées sur l’identification des jours fertiles du cycle et l’évitement des rapports non protégés pendant ces jours, sans moyen médicamenteux ou mécanique.',
    physiopathologie:
      '## Principe\n- Ovulation vers le milieu du cycle ; survie des spermatozoïdes jusqu’à 5 jours, de l’ovule 24 h → **fenêtre fertile** d’environ 6 jours\n- Signes : glaire cervicale abondante et filante, élévation de la température après l’ovulation\n\n## Limites\n- Cycles irréguliers (adolescence, post-partum, périménopause, SOPK), maladie, stress\n- Coopération du partenaire indispensable',
    diagnostic:
      '## Choix éclairé\n- Régularité des cycles (méthode des jours fixes : cycles de 26–32 jours)\n- Motivation du couple, capacité à reconnaître les signes, acceptation de l’abstinence\n- Situations défavorables : cycles irréguliers, post-partum sans allaitement exclusif, risque d’IST, grossesse dangereuse pour la santé (préférer une méthode très efficace)',
    examens: [],
    scores: [],
    differentiels: [],
    etiologies: '## Contexte\n- Couples souhaitant une méthode sans hormone ni dispositif',
    principes: [
      [
        'Méthodes',
        'Apprendre et appliquer.',
        '- **Jours fixes** (collier du cycle) : abstinence ou préservatif des **jours 8 à 19** du cycle\n- **Deux jours** : rapport non protégé seulement si pas de glaire aujourd’hui ni hier\n- **Glaire cervicale** (Billings), **symptothermie** (glaire + température)\n- **MAMA** : allaitement exclusif, aménorrhée, < 6 mois\n- **Retrait** : efficacité faible',
      ],
      [
        'Conseil',
        'Informer honnêtement.',
        '- Efficacité réelle inférieure aux méthodes modernes ; proposer la **contraception d’urgence** en cas d’erreur\n- Préservatif pour la protection contre les IST et le VIH',
      ],
    ],
    molecules: [['levonorgestrel-1-5-mg', 'adjuvant', 'Contraception d’urgence en cas d’erreur']],
    complications: [
      {
        nom: 'Grossesse non désirée',
        fiche: 'contraception-d-urgence',
        description: 'Erreur ou cycles irréguliers.',
        traitement: '- Contraception d’urgence',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Efficacité\n- Bonne en utilisation parfaite (jours fixes : 95 %), plus faible en utilisation courante',
    urgences: [],
    symptomes: [],
    sources: ['OMS — lignes directrices et publications', 'Normes et directives de santé de la reproduction'],
    niveaux: {
      cs: ['- Conseil, collier du cycle, MAMA', ''],
      hgr: ['', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Méthode des jours fixes',
        type: 'commune',
        description: 'Collier du cycle.',
        terrain: '- Cycles réguliers de 26–32 jours',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'MAMA',
        type: 'terrain',
        description: 'Allaitement exclusif.',
        terrain: '- Post-partum < 6 mois',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Contraception femme VIH
  {
    ...PF,
    slug: 'contraception-femme-vih',
    nom: 'Contraception de la femme vivant avec le VIH',
    resume:
      'Les femmes vivant avec le VIH peuvent utiliser toutes les méthodes (OMS) : DIU au cuivre ou hormonal (sauf stade clinique 3–4 sans traitement efficace pour l’insertion), implant, injectable, pilules ; attention aux interactions : l’efavirenz et la rifampicine diminuent l’efficacité de l’implant et des pilules (préférer DIU ou injectable), le dolutégravir n’interagit pas ; double protection avec le préservatif (IST, partenaires sérodifférents) ; intégration de la planification familiale aux soins VIH ; conseil préconceptionnel pour une grossesse planifiée avec charge virale indétectable.',
    definition:
      'Choix et suivi de la contraception chez la femme vivant avec le VIH, tenant compte des interactions avec les antirétroviraux et les antituberculeux et de la prévention de la transmission.',
    physiopathologie:
      '## Interactions\n- **Efavirenz** (inducteur enzymatique) : baisse importante des taux d’**étonogestrel** et de lévonorgestrel (implant) et des pilules\n- **Rifampicine** : idem\n- **Dolutégravir**, ténofovir, lamivudine : pas d’interaction significative\n- Inhibiteurs de protéase boostés : interactions variables\n\n## Points clés\n- Les méthodes hormonales n’accélèrent pas l’évolution du VIH\n- Le DMPA (injectable) est utilisable (débat sur l’acquisition du VIH, non retenu comme contre-indication par l’OMS)',
    diagnostic:
      '## Évaluation\n- Désir de grossesse, traitement ARV et antituberculeux, **charge virale**, stade clinique\n- Méthode souhaitée, contre-indications générales (critères de recevabilité OMS)\n- Dépistage des IST, du cancer du col (risque accru)',
    examens: [
      ['premiere_intention', 'charge-virale-vih', 'Contrôle virologique.'],
      ['premiere_intention', 'cd4', 'Stade.'],
      ['premiere_intention', 'beta-hcg', 'Grossesse.'],
      ['premiere_intention', 'depistage-col-iva-hpv', 'Dépistage du cancer du col.'],
      ['etiologique', 'prelevement-vaginal', 'IST.'],
    ],
    scores: [],
    differentiels: [],
    etiologies: '## Contexte\n- Femme vivant avec le VIH',
    principes: [
      [
        'Choix de la méthode',
        'Toutes possibles.',
        '- Sous **dolutégravir** : toutes les méthodes, dont l’**implant** et les pilules\n- Sous **efavirenz** ou **rifampicine** : préférer **DIU** (cuivre ou lévonorgestrel) ou **injectable** (médroxyprogestérone), ou implant + préservatif\n- **DIU** : insertion déconseillée au stade clinique 3–4 sans traitement efficace ; poursuite possible chez une porteuse',
      ],
      [
        'Double protection',
        'IST et transmission.',
        '- **Préservatif** en plus de la méthode choisie (IST, réinfection)\n- Charge virale indétectable : transmission sexuelle nulle (I = I)',
      ],
      [
        'Désir de grossesse',
        'Planifier.',
        '- Conseil préconceptionnel : charge virale indétectable, acide folique, dolutégravir, PrEP pour le partenaire séronégatif',
      ],
    ],
    molecules: [
      ['medroxyprogesterone', 'premiere', 'Injectable (pas d’interaction)'],
      ['levonorgestrel', 'premiere', 'DIU hormonal, implant'],
      ['etonogestrel', 'alternative', 'Implant (éviter avec efavirenz ou rifampicine)'],
      ['dolutegravir', 'adjuvant', 'ARV sans interaction'],
      ['efavirenz', 'adjuvant', 'ARV inducteur (interactions)'],
      ['rifampicine', 'adjuvant', 'Inducteur (interactions)'],
    ],
    complications: [
      {
        nom: 'Grossesse non désirée par interaction',
        fiche: 'vih-et-grossesse',
        description: 'Efavirenz, rifampicine.',
        traitement: '- Choix d’une méthode adaptée',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Cancer du col',
        fiche: 'cancer-du-col-de-l-uterus',
        description: 'Risque accru.',
        traitement: '- Dépistage régulier',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Intérêt\n- Prévention des grossesses non désirées et de la transmission mère-enfant ; grossesses planifiées plus sûres',
    urgences: [],
    symptomes: [],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Conseil intégré VIH-PF, injectable, implant, préservatifs', ''],
      hgr: ['- DIU, prise en charge des interactions', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Femme sous dolutégravir',
        type: 'commune',
        description: 'Toutes méthodes.',
        terrain: '- Femme VIH sous TLD',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Charge virale indétectable',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Femme sous efavirenz ou rifampicine',
        type: 'gravite',
        description: 'Interactions.',
        terrain: '- Traitement inducteur',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
