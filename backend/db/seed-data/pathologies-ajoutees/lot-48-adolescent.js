'use strict';

/**
 * Lot 48 (phase 2, santé de l'adolescent) — grossesse de l'adolescente, usage de substances chez
 * l'adolescent, IST de l'adolescent, dysménorrhée de l'adolescente, acné de l'adolescent. Rédigé
 * par IA (OMS, mhGAP, Normes et directives SR, Nelson) : à valider.
 */

const ADO = { departement: 'pediatrie', specialite: 'Santé de l’adolescent' };

module.exports = [
  // =================================================================== Grossesse adolescente
  {
    ...ADO,
    slug: 'grossesse-adolescente',
    nom: 'Grossesse de l’adolescente',
    resume:
      'Grossesse avant 20 ans, très fréquente en RDC (environ une adolescente sur quatre a commencé sa vie féconde), souvent non désirée, parfois issue de violences sexuelles : risques accrus d’anémie, de pré-éclampsie, de dystocie et de fistule obstétricale, d’accouchement prématuré, d’avortement à risque et de décès maternel ; consultations prénatales précoces et rapprochées, accueil sans jugement et confidentiel, dépistage des violences, du VIH et de la syphilis, nutrition (fer-acide folique), accouchement en structure, contraception après l’accouchement, maintien à l’école.',
    definition:
      'Grossesse survenant chez une adolescente de 10 à 19 ans, à risque médical (immaturité biologique) et psychosocial accru.',
    physiopathologie:
      '## Facteurs\n- Mariages précoces, pauvreté, déscolarisation, **violences sexuelles** (zones de conflit), manque d’information et d’accès à la contraception, transactions sexuelles\n\n## Risques médicaux\n- Bassin immature : **dystocie**, travail prolongé, **fistules obstétricales**\n- **Anémie**, paludisme, **pré-éclampsie/éclampsie**, accouchement prématuré, petit poids de naissance\n- **Avortement à risque** (complications infectieuses et hémorragiques)\n- Dépression, idées suicidaires, rejet familial',
    diagnostic:
      '## Repérage\n- Aménorrhée, nausées, douleurs abdominales chez toute adolescente ; **test de grossesse** systématique devant ces symptômes\n- Consultation tardive fréquente (peur, honte)\n\n## Évaluation\n- Âge gestationnel (échographie), tension artérielle, état nutritionnel, anémie\n- **Contexte** : désir de grossesse, partenaire, **violences sexuelles** ou mariage forcé, soutien familial, scolarisation, santé mentale\n- Dépistages : **VIH**, **syphilis**, hépatite B, paludisme, IST\n\n## Examens\n- β-hCG, échographie obstétricale, NFS, groupage, bandelette urinaire (protéinurie), TDR VIH et syphilis',
    examens: [
      ['confirmation', 'beta-hcg', 'Grossesse.'],
      ['premiere_intention', 'echographie-obstetricale', 'Âge gestationnel.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'serologie-syphilis', 'Syphilis.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie, infection.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-extra-uterine', 'Douleur pelvienne, saignements, β-hCG positive.'],
      ['retard-pubertaire', 'Aménorrhée primaire sans grossesse.'],
      ['avortement-spontane', 'Saignements du 1er trimestre.'],
    ],
    etiologies: '## Facteurs\n- Mariage précoce, violences sexuelles, pauvreté, absence de contraception',
    principes: [
      [
        'Accueil',
        'Services adaptés aux adolescents.',
        '- Accueil **sans jugement**, **confidentialité**, information sur les options selon la loi et les services disponibles\n- Dépistage et prise en charge des **violences sexuelles** (prophylaxie post-exposition, contraception d’urgence si < 5 jours, soutien psychologique, protection)',
      ],
      [
        'Suivi prénatal renforcé',
        'Réduire les risques.',
        '- CPN précoces et au moins 8 contacts (OMS), **fer-acide folique**, **TPI** (sulfadoxine-pyriméthamine), moustiquaire, vaccination antitétanique\n- Surveillance de la tension (pré-éclampsie), de la croissance fœtale, nutrition\n- Plan d’accouchement en **structure** avec personnel qualifié (dystocie)',
      ],
      [
        'Après l’accouchement',
        'Prévenir la récidive.',
        '- **Contraception** (implant, injectable) avant la sortie, allaitement, soutien psychosocial\n- **Retour à l’école**, soutien familial et communautaire',
      ],
    ],
    molecules: [
      ['acide-folique', 'premiere', 'Supplémentation'],
      ['fumarate-ferreux-fer', 'premiere', 'Supplémentation'],
      ['sulfadoxine', 'premiere', 'TPI (sulfadoxine-pyriméthamine)'],
      ['etonogestrel', 'alternative', 'Implant contraceptif post-partum'],
      ['levonorgestrel-1-5-mg', 'alternative', 'Contraception d’urgence (violences)'],
    ],
    complications: [
      {
        nom: 'Pré-éclampsie et éclampsie',
        fiche: 'hypertension-gravidique',
        description: 'Plus fréquente.',
        traitement: '- Sulfate de magnésium, accouchement',
        clinique: '- HTA, céphalées',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Dystocie et fistule obstétricale',
        fiche: 'fistules-obstetricales',
        description: 'Bassin immature.',
        traitement: '- Césarienne, réparation',
        clinique: '- Travail prolongé, fuites d’urine',
        paraclinique: '',
      },
      {
        nom: 'Avortement à risque',
        fiche: 'avortement-septique',
        description: 'Grossesse non désirée.',
        traitement: '- Soins après avortement',
        clinique: '- Fièvre, saignements',
        paraclinique: '',
      },
      {
        nom: 'Anémie',
        fiche: 'anemie-de-la-grossesse',
        description: 'Besoins accrus.',
        traitement: '- Fer, acide folique',
        clinique: '- Pâleur',
        paraclinique: '- Hb',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité maternelle plus élevée chez les moins de 15 ans ; nettement améliorée par le suivi prénatal et l’accouchement assisté',
    urgences: ['eclampsie'],
    symptomes: [
      ['Aménorrhée', 'tres_frequent'],
      ['Douleur pelvienne', 'occasionnel'],
      ['Anxiété', 'frequent'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Test de grossesse, CPN, dépistages, contraception', '- HTA, saignements, violences'],
      hgr: ['- Accouchement, césarienne', ''],
      tert: ['- Grossesse à haut risque', ''],
    },
    alertes: { eclampsie: 'Adolescente enceinte avec céphalées, troubles visuels ou convulsions' },
    formes: [
      {
        nom: 'Grossesse de l’adolescente',
        type: 'commune',
        description: 'Suivi renforcé.',
        terrain: '- Adolescente de 15 à 19 ans',
        fonctionnels: '- Aménorrhée',
        generaux: '',
        physiques: '- Utérus augmenté',
        paraclinique: '- β-hCG positive',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Grossesse de la jeune adolescente (< 15 ans)',
        type: 'gravite',
        description: 'Risque maximal.',
        terrain: '- Adolescente < 15 ans, violences',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Violences sexuelles, mariage forcé',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Usage de substances
  {
    ...ADO,
    slug: 'usage-substances-adolescent',
    nom: 'Usage de substances chez l’adolescent',
    resume:
      'Consommation d’alcool (dont alcools artisanaux), de cannabis, de tabac, de solvants inhalés (colle), de tramadol et autres médicaments détournés par les adolescents, fréquente chez les enfants des rues et en milieu scolaire : risques d’intoxication aiguë, accidents, violences, rapports sexuels non protégés, décrochage scolaire, troubles psychiques ; repérage systématique (questions simples, confidentialité), intervention brève motivationnelle, prise en charge des intoxications et du sevrage, des troubles associés, implication de la famille (mhGAP).',
    definition:
      'Consommation de substances psychoactives par un adolescent (10–19 ans), de l’usage expérimental à l’usage nocif et à la dépendance, avec un retentissement accru sur le cerveau en développement.',
    physiopathologie:
      '## Substances fréquentes\n- **Alcool** (bière, alcools artisanaux : risque de méthanol), **cannabis**, **tabac**, **solvants** (colle, essence), **tramadol**, benzodiazépines, amphétamines\n\n## Facteurs de risque\n- Rue, conflits armés (enfants associés), violences, deuil, pression des pairs, disponibilité, consommation parentale, troubles psychiques (dépression, TDAH)\n\n## Conséquences\n- Cerveau en maturation : troubles de la mémoire et de l’apprentissage, dépendance plus rapide\n- **Psychoses** (cannabis), dépression, suicide ; accidents, violences, IST, grossesses',
    diagnostic:
      '## Repérage\n- Questions systématiques et confidentielles (entretien seul avec l’adolescent) : type, fréquence, contexte, conséquences\n- Signes d’alerte : chute scolaire, absentéisme, changement d’amis, irritabilité, vols, troubles du sommeil, yeux rouges, odeur de solvant\n\n## Évaluation\n- Intoxication aiguë (troubles de conscience, détresse respiratoire, convulsions), sevrage\n- **Comorbidités** : dépression, **idées suicidaires**, psychose, violences subies, IST, grossesse\n- Situation sociale et familiale, protection de l’enfance\n\n## Examens\n- Selon le contexte : glycémie, ionogramme, bilan hépatique ; tests de dépistage si nécessaires et acceptés',
    examens: [
      ['gravite', 'glycemie', 'Intoxication alcoolique.'],
      ['premiere_intention', 'bilan-hepatique', 'Consommation d’alcool.'],
      ['gravite', 'gaz-du-sang', 'Intoxication (méthanol, solvants).'],
      ['premiere_intention', 'tdr-vih', 'Comportements à risque.'],
      ['premiere_intention', 'beta-hcg', 'Grossesse.'],
    ],
    scores: [],
    differentiels: [
      ['depression', 'Tristesse, consommation pour soulager.'],
      ['troubles-psychotiques-aigus', 'Délire, hallucinations.'],
      ['trouble-deficit-attention-hyperactivite', 'Impulsivité depuis l’enfance.'],
      ['trouble-de-l-usage-de-l-alcool', 'Fiche de l’adulte.'],
    ],
    etiologies:
      '## Facteurs\n- Vie dans la rue, conflits, violences, pairs, disponibilité, troubles psychiques',
    principes: [
      [
        'Intervention brève',
        'Motiver au changement.',
        '- Entretien **non moralisateur**, confidentiel, informations sur les risques, objectifs fixés avec l’adolescent (réduction ou arrêt)\n- Renforcer les facteurs de protection : école, activités, famille, pairs non consommateurs',
      ],
      [
        'Intoxication et sevrage',
        'Traiter.',
        '- Intoxication aiguë : position latérale, glycémie, surveillance ; méthanol : prise en charge spécifique\n- Sevrage alcoolique : thiamine, benzodiazépine sous surveillance ; tramadol : sevrage progressif',
      ],
      [
        'Prise en charge globale',
        'Traiter les causes et les conséquences.',
        '- Dépression, anxiété, psychose, TDAH, violences subies (mhGAP)\n- Implication de la famille, protection de l’enfance, réinsertion des enfants des rues\n- Dépistage VIH, contraception, préservatifs',
      ],
    ],
    molecules: [
      ['vitamine-b1-thiamine', 'premiere', 'Usage d’alcool important'],
      ['diazepam', 'alternative', 'Sevrage alcoolique'],
      ['sertraline', 'alternative', 'Dépression associée (spécialiste)'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie de l’intoxication alcoolique'],
    ],
    complications: [
      {
        nom: 'Intoxication aiguë',
        fiche: 'intoxications-enfant',
        description: 'Alcool, solvants, médicaments.',
        traitement: '- Soins de support',
        clinique: '- Coma, convulsions',
        paraclinique: '',
      },
      {
        nom: 'Psychose',
        fiche: 'troubles-psychotiques-aigus',
        description: 'Cannabis.',
        traitement: '- Antipsychotiques',
        clinique: '- Hallucinations',
        paraclinique: '',
      },
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Dépression associée.',
        traitement: '- Évaluation, protection',
        clinique: '- Idées suicidaires',
        paraclinique: '',
      },
      {
        nom: 'IST et grossesses non désirées',
        fiche: 'ist-adolescent',
        description: 'Rapports non protégés.',
        traitement: '- Dépistage, contraception',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si l’usage est repéré tôt ; dépendance d’autant plus fréquente que le début est précoce',
    urgences: [],
    symptomes: [
      ['Troubles du comportement', 'tres_frequent'],
      ['Agitation', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Anxiété', 'frequent'],
      ['Idées suicidaires', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Repérage, intervention brève, orientation', '- Intoxication, idées suicidaires, psychose'],
      hgr: ['- Intoxication, sevrage', ''],
      tert: ['- Psychiatrie, addictologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Usage à risque',
        type: 'commune',
        description: 'Consommation régulière.',
        terrain: '- Adolescent scolarisé',
        fonctionnels: '- Chute scolaire',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Alcool, cannabis',
        syndromes: [],
      },
      {
        nom: 'Inhalation de solvants',
        type: 'gravite',
        description: 'Enfants des rues.',
        terrain: '- Enfant des rues',
        fonctionnels: '- Confusion',
        generaux: '',
        physiques: '- Odeur de solvant, troubles neurologiques',
        paraclinique: '',
        etiologies: '- Colle, essence',
        syndromes: [],
      },
    ],
  },

  // =================================================================== IST adolescent
  {
    ...ADO,
    slug: 'ist-adolescent',
    nom: 'Infections sexuellement transmissibles de l’adolescent',
    resume:
      'IST fréquentes chez les adolescents sexuellement actifs (rapports précoces, non protégés, transactionnels, violences) : écoulement urétral, leucorrhées, ulcérations génitales, douleurs pelviennes ; prise en charge syndromique selon les algorithmes OMS (ceftriaxone + azithromycine ou doxycycline pour l’écoulement ; benzathine pénicilline pour l’ulcère), dépistage du VIH et de la syphilis, traitement du partenaire, préservatifs, contraception, vaccination HPV et hépatite B ; chez l’enfant ou la jeune adolescente, rechercher des abus sexuels ; confidentialité.',
    definition:
      'Infections transmises par voie sexuelle (gonococcie, chlamydiose, trichomonase, syphilis, herpès génital, VIH, hépatite B, HPV) chez l’adolescent de 10 à 19 ans.',
    physiopathologie:
      '## Vulnérabilité\n- Biologique : ectropion cervical de l’adolescente (sensibilité aux chlamydias et gonocoques)\n- Comportementale et sociale : rapports précoces, partenaires multiples ou plus âgés, sexe transactionnel, **violences sexuelles**, faible utilisation du préservatif, accès limité aux services\n\n## Conséquences\n- **Salpingite**, infertilité, grossesse extra-utérine, douleurs pelviennes chroniques\n- Facilitation de la transmission du **VIH**, syphilis congénitale, cancer du col (HPV)',
    diagnostic:
      '## Syndromes\n- **Écoulement urétral** (garçon) : brûlures, écoulement purulent\n- **Leucorrhées** anormales (fille) : odeur, prurit, brûlures\n- **Ulcération génitale** : syphilis, chancre mou, herpès\n- **Douleurs pelviennes** (salpingite) : douleur à la mobilisation du col, fièvre\n- Végétations (condylomes)\n\n## Entretien\n- Seul avec l’adolescent, **confidentiel** ; partenaires, préservatifs, contraception, **violences**\n\n## Examens\n- **TDR VIH**, **syphilis**, hépatite B ; test de grossesse\n- Prélèvements si laboratoire disponible (Gram, culture, PCR)',
    examens: [
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'serologie-syphilis', 'Syphilis.'],
      ['premiere_intention', 'serologies-hepatites', 'Hépatite B.'],
      ['premiere_intention', 'beta-hcg', 'Grossesse.'],
      ['deuxieme_intention', 'prelevement-vaginal', 'Germes.'],
      ['premiere_intention', 'bandelette-urinaire', 'Leucocyturie.'],
    ],
    scores: [],
    differentiels: [
      ['infection-urinaire-enfant', 'Brûlures mictionnelles sans écoulement.'],
      ['infections-genitales-basses', 'Fiche de l’adulte.'],
      ['violences-sexuelles', 'IST chez une jeune adolescente.'],
      ['schistosomiase-urogenitale', 'Lésions génitales, hématurie.'],
    ],
    etiologies:
      '## Germes\n- Gonocoque, Chlamydia trachomatis, Trichomonas, Treponema pallidum, HSV-2, VIH, HPV',
    principes: [
      [
        'Traitement syndromique',
        'Traiter dès la première visite.',
        '- **Écoulement urétral, cervicite** : **ceftriaxone** 1 g IM dose unique + **azithromycine** 1 g dose unique (ou **doxycycline** 100 mg 2 fois par jour 7 jours) ± métronidazole (trichomonas)\n- **Ulcération génitale** : **benzathine benzylpénicilline** 2,4 MUI IM + traitement du chancre mou (azithromycine) ± aciclovir (herpès)\n- **Salpingite** : ceftriaxone + doxycycline + métronidazole 14 jours\n- Doses adultes à partir de 45 kg ; la doxycycline est contre-indiquée pendant la grossesse',
      ],
      [
        'Prévention',
        'Les 4 « P ».',
        '- **Partenaire** informé et traité, **préservatifs** fournis, **prévention** (PrEP si risque élevé, vaccination HPV et hépatite B), **protection** (dépistage des violences, signalement si mineur abusé)\n- Contraception, éducation à la santé sexuelle',
      ],
      ['Suivi', 'Contrôler.', '- Revoir à 7 jours, répéter le dépistage du VIH et de la syphilis à 3 mois'],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Gonococcie'],
      ['azithromycine', 'premiere', 'Chlamydiose, chancre mou'],
      ['doxycycline', 'alternative', 'Chlamydiose (hors grossesse)'],
      ['benzathine-benzylpenicilline', 'premiere', 'Syphilis'],
      ['metronidazole', 'alternative', 'Trichomonase, salpingite'],
      ['aciclovir', 'alternative', 'Herpès génital'],
    ],
    complications: [
      {
        nom: 'Salpingite et infertilité',
        fiche: 'infection-genitale-haute',
        description: 'Chlamydia, gonocoque.',
        traitement: '- Antibiotiques',
        clinique: '- Douleurs pelviennes, fièvre',
        paraclinique: '',
      },
      {
        nom: 'Infection à VIH',
        fiche: 'infection-vih',
        description: 'Transmission facilitée.',
        traitement: '- ARV',
        clinique: '',
        paraclinique: '- Test VIH',
      },
      {
        nom: 'Syphilis tardive et congénitale',
        fiche: 'syphilis',
        description: 'Non traitée.',
        traitement: '- Pénicilline',
        clinique: '',
        paraclinique: '- Sérologie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison avec un traitement correct du patient et du partenaire ; réinfections fréquentes',
    urgences: [],
    symptomes: [
      ['Écoulement urétral', 'frequent'],
      ['Leucorrhées', 'frequent'],
      ['Ulcération génitale', 'frequent'],
      ['Brûlures mictionnelles', 'frequent'],
      ['Douleur pelvienne', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Traitement syndromique, dépistages, préservatifs', '- Salpingite sévère, violences'],
      hgr: ['- Prélèvements, prise en charge des complications', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Écoulement urétral du garçon',
        type: 'commune',
        description: 'Gonocoque, chlamydia.',
        terrain: '- Adolescent',
        fonctionnels: '- Brûlures',
        generaux: '',
        physiques: '- Écoulement purulent',
        paraclinique: '',
        etiologies: '- Gonocoque, chlamydia',
        syndromes: [],
      },
      {
        nom: 'IST chez une jeune adolescente',
        type: 'gravite',
        description: 'Abus possible.',
        terrain: '- Fille < 15 ans',
        fonctionnels: '- Leucorrhées',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Violences sexuelles',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dysménorrhée
  {
    ...ADO,
    slug: 'dysmenorrhee-adolescente',
    nom: 'Dysménorrhée de l’adolescente',
    resume:
      'Douleurs pelviennes pendant les règles, très fréquentes chez l’adolescente et cause d’absentéisme scolaire : dysménorrhée primaire (sans lésion, débutant 6–12 mois après les premières règles, liée aux prostaglandines) ; AINS (ibuprofène, acide méfénamique) dès le début des règles, chaleur locale, contraception œstroprogestative si échec ; dysménorrhée secondaire à rechercher si douleurs résistantes, tardives ou avec signes associés (endométriose, IST/salpingite, malformation obstructive) ; accès aux protections hygiéniques.',
    definition:
      'Douleurs pelviennes cycliques survenant au moment des règles, primaires (sans pathologie pelvienne) ou secondaires (liées à une lésion).',
    physiopathologie:
      '## Dysménorrhée primaire\n- Libération de **prostaglandines** par l’endomètre → contractions utérines et ischémie → douleur, nausées, diarrhée, céphalées\n- Débute avec les cycles ovulatoires (6–12 mois après la ménarche)\n\n## Dysménorrhée secondaire\n- **Endométriose**, **salpingite** et séquelles d’IST, malformations utérines ou vaginales obstructives, fibromes (rares à cet âge)',
    diagnostic:
      '## Clinique\n- Douleur pelvienne en crampes débutant juste avant ou au début des règles, durant 1 à 3 jours, irradiant aux lombes et aux cuisses\n- Nausées, vomissements, diarrhée, céphalées, malaise\n- Retentissement : absences scolaires, activités\n\n## Signes d’orientation vers une cause secondaire\n- Début tardif ou d’emblée sévère, douleurs **résistantes aux AINS**, **dyspareunie**, douleurs en dehors des règles, saignements anormaux, fièvre, leucorrhées, masse pelvienne\n\n## Examens\n- Aucun dans la forme primaire typique\n- Formes atypiques : test de grossesse, dépistage des IST, **échographie pelvienne**',
    examens: [
      ['deuxieme_intention', 'echographie-pelvienne', 'Cause secondaire.'],
      ['etiologique', 'beta-hcg', 'Grossesse (douleur atypique).'],
      ['etiologique', 'prelevement-vaginal', 'IST.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-extra-uterine', 'Douleur pelvienne avec retard de règles.'],
      ['infection-genitale-haute', 'Fièvre, leucorrhées, douleur à la mobilisation du col.'],
      ['Endométriose', 'Douleurs résistantes, progressives.'],
      ['appendicite-aigue', 'Douleur de la fosse iliaque droite, fièvre.'],
      ['infection-urinaire-enfant', 'Brûlures mictionnelles.'],
    ],
    etiologies: '## Causes\n- Primaire (prostaglandines) ; secondaire (endométriose, IST, malformations)',
    principes: [
      [
        'Dysménorrhée primaire',
        'Soulager.',
        '- **AINS** dès le début des douleurs ou des règles, pendant 2–3 jours : **ibuprofène** 400 mg toutes les 6–8 h ou **acide méfénamique** 500 mg 3 fois par jour (avec un repas)\n- Paracétamol en association ou si contre-indication, **chaleur** locale, activité physique\n- Échec : **contraception œstroprogestative** (si souhaitée ou acceptable) ou progestatif',
      ],
      [
        'Santé menstruelle',
        'Lever les obstacles.',
        '- Information sur les règles, accès aux **protections hygiéniques** et aux toilettes à l’école, lutte contre les tabous',
      ],
      [
        'Formes secondaires',
        'Orienter.',
        '- Traitement de l’IST ou de la salpingite ; avis gynécologique (endométriose, malformation)',
      ],
    ],
    molecules: [
      ['ibuprofene', 'premiere', 'Douleur'],
      ['acide-mefenamique', 'alternative', 'Douleur'],
      ['paracetamol', 'adjuvant', 'Douleur'],
      ['ethinylestradiol', 'deuxieme', 'Échec (contraception œstroprogestative)'],
      ['levonorgestrel', 'deuxieme', 'Échec (contraception œstroprogestative)'],
    ],
    complications: [
      {
        nom: 'Absentéisme scolaire',
        description: 'Douleur invalidante.',
        traitement: '- Traitement efficace',
        clinique: '- Absences',
        paraclinique: '',
      },
      {
        nom: 'Méconnaissance d’une cause secondaire',
        fiche: 'infection-genitale-haute',
        description: 'Endométriose, IST.',
        traitement: '- Traitement de la cause',
        clinique: '- Douleurs résistantes',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration fréquente avec l’âge et après une grossesse ; excellente réponse aux AINS dans la forme primaire',
    urgences: [],
    symptomes: [
      ['Dysménorrhée', 'tres_frequent'],
      ['Douleur pelvienne', 'tres_frequent'],
      ['Vomissements', 'occasionnel'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- AINS, conseils, santé menstruelle', '- Douleurs atypiques ou résistantes'],
      hgr: ['- Échographie, gynécologie', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dysménorrhée primaire',
        type: 'commune',
        description: 'Prostaglandines.',
        terrain: '- Adolescente 1–2 ans après la ménarche',
        fonctionnels: '- Crampes pelviennes pendant les règles',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dysménorrhée secondaire',
        type: 'etiologique',
        description: 'Lésion pelvienne.',
        terrain: '',
        fonctionnels: '- Douleurs résistantes, dyspareunie',
        generaux: '',
        physiques: '- Masse, douleur à l’examen',
        paraclinique: '- Échographie anormale',
        etiologies: '- Endométriose, IST',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Acné adolescent
  {
    ...ADO,
    slug: 'acne-adolescent',
    nom: 'Acné de l’adolescent',
    resume:
      'Dermatose de l’adolescence touchant la majorité des jeunes (visage, dos, thorax) : comédons, papules, pustules, parfois nodules et kystes ; sur peau noire, taches pigmentées post-inflammatoires souvent plus gênantes que l’acné elle-même, et chéloïdes ; toilette douce, pas de manipulation ni de produits gras ou dépigmentants, peroxyde de benzoyle et rétinoïde topique (trétinoïne), doxycycline orale 3 mois pour les formes modérées associée au traitement local ; retentissement psychologique à prendre au sérieux.',
    definition:
      'Affection inflammatoire chronique du follicule pilosébacé, débutant à la puberté sous l’effet des androgènes.',
    physiopathologie:
      '## Mécanismes\n- **Hyperséborrhée** (androgènes de la puberté), **obstruction** du follicule (comédon), prolifération de **Cutibacterium acnes**, inflammation\n\n## Facteurs aggravants\n- Produits cosmétiques gras (huiles, pommades capillaires), **produits dépigmentants** (corticoïdes, hydroquinone), corticoïdes, manipulation des lésions, stress\n\n## Peau noire\n- **Hyperpigmentation post-inflammatoire** fréquente et durable, **chéloïdes** (thorax, mâchoire)',
    diagnostic:
      '## Clinique\n- **Comédons** ouverts (points noirs) et fermés (microkystes), **papules** et **pustules** inflammatoires, **nodules** et kystes (formes sévères)\n- Visage, dos, thorax\n- Séquelles : **taches pigmentées**, cicatrices, chéloïdes\n- Évaluer la sévérité et le **retentissement psychologique**\n\n## Rechercher\n- Acné induite (corticoïdes, dépigmentants), signes d’hyperandrogénie chez la fille (hirsutisme, troubles des règles : SOPK)\n\n## Examens\n- Aucun le plus souvent ; bilan hormonal si signes d’hyperandrogénie',
    examens: [
      ['deuxieme_intention', 'echographie-pelvienne', 'SOPK (signes d’hyperandrogénie).'],
      ['deuxieme_intention', 'gonadotrophines-lh-fsh', 'Hyperandrogénie.'],
    ],
    scores: [],
    differentiels: [
      ['acne', 'Fiche de l’adulte.'],
      ['Acné induite par les dépigmentants et corticoïdes', 'Lésions monomorphes, usage de produits.'],
      ['Folliculite', 'Pustules centrées par un poil, sans comédons.'],
      ['Pseudofolliculite de la barbe', 'Garçon, zone de rasage.'],
    ],
    etiologies: '## Facteurs\n- Puberté, androgènes, cosmétiques gras, dépigmentants, corticoïdes',
    principes: [
      [
        'Mesures générales',
        'Ne pas aggraver.',
        '- Toilette 2 fois par jour avec un **savon doux**, pas de manipulation des lésions\n- Éviter les produits **gras**, les huiles capillaires sur le front et les **produits dépigmentants**\n- Explications : traitement de plusieurs mois, amélioration après 6–8 semaines',
      ],
      [
        'Acné légère à modérée',
        'Traitement local.',
        '- **Peroxyde de benzoyle** 2,5–5 % le matin et/ou **trétinoïne** (rétinoïde) le soir, en commençant un soir sur deux (irritation)\n- Protection solaire (hyperpigmentation)',
      ],
      [
        'Acné modérée à sévère',
        'Traitement oral associé.',
        '- **Doxycycline** 100 mg/j pendant **3 mois** maximum (> 12 ans, hors grossesse), toujours avec le peroxyde de benzoyle (résistances)\n- Fille : contraception œstroprogestative possible\n- Formes nodulaires et cicatricielles : avis dermatologique (isotrétinoïne, sous contraception stricte)\n- Soutien psychologique si retentissement',
      ],
    ],
    molecules: [
      ['peroxyde-de-benzoyle', 'premiere', 'Traitement local'],
      ['tretinoine', 'premiere', 'Rétinoïde local'],
      ['doxycycline', 'alternative', 'Formes modérées à sévères'],
      ['erythromycine', 'alternative', 'Si doxycycline contre-indiquée'],
    ],
    complications: [
      {
        nom: 'Hyperpigmentation post-inflammatoire',
        description: 'Peau noire.',
        traitement: '- Traitement de l’acné, protection solaire',
        clinique: '- Taches sombres',
        paraclinique: '',
      },
      {
        nom: 'Cicatrices et chéloïdes',
        fiche: 'cheloides',
        description: 'Formes inflammatoires.',
        traitement: '- Traitement précoce',
        clinique: '- Cicatrices',
        paraclinique: '',
      },
      {
        nom: 'Retentissement psychologique',
        fiche: 'depression',
        description: 'Image de soi.',
        traitement: '- Soutien',
        clinique: '- Isolement, tristesse',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Régression habituelle en fin d’adolescence ; séquelles évitables par un traitement précoce',
    urgences: [],
    symptomes: [
      ['Comédons et pustules', 'tres_frequent'],
      ['Papules cutanées', 'frequent'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: ['- Conseils, peroxyde de benzoyle', '- Forme sévère, cicatricielle'],
      hgr: ['- Doxycycline, rétinoïde', ''],
      tert: ['- Dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Acné comédonienne et papulo-pustuleuse',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Adolescent',
        fonctionnels: '',
        generaux: '',
        physiques: '- Comédons, papules, pustules',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Acné nodulaire sévère',
        type: 'gravite',
        description: 'Cicatrices.',
        terrain: '- Garçon surtout',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Nodules, kystes',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
