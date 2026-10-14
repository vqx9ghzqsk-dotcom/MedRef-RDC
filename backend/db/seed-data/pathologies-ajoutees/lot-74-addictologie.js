'use strict';

/**
 * Lot 74 (phase 2, addictologie) — usage de cannabis, usage d'opioïdes, tabagisme. Rédigé par IA
 * (mhGAP, OMS) : à valider.
 */

const ADD = { departement: 'neuropsychiatrie', specialite: 'Addictologie' };

module.exports = [
  // =================================================================== Usage de cannabis
  {
    ...ADD,
    slug: 'usage-de-cannabis',
    nom: 'Usage de cannabis',
    resume:
      'Substance illicite la plus consommée en RDC (« bangi »), souvent dès l’adolescence et en association à l’alcool et au tabac : intoxication aiguë (euphorie, rires, yeux rouges, tachycardie, faim, troubles de la coordination ; parfois anxiété, attaque de panique, épisode psychotique aigu), usage nocif et dépendance (craving, perte de contrôle, désinvestissement scolaire et professionnel, syndrome amotivationnel), sevrage (irritabilité, insomnie, anxiété, perte d’appétit) ; complications : psychoses (risque multiplié, déclenchement de la schizophrénie chez les sujets vulnérables), troubles cognitifs, accidents, bronchite chronique, syndrome d’hyperémèse cannabinoïde (vomissements cycliques soulagés par les douches chaudes) ; repérage (questions simples), intervention brève et entretien motivationnel, prise en charge des troubles associés, antipsychotique en cas de psychose ; pas de traitement médicamenteux spécifique de la dépendance.',
    definition:
      'Consommation de cannabis (herbe, résine) allant de l’usage occasionnel à l’usage nocif et à la dépendance, avec ses complications aiguës et chroniques.',
    physiopathologie:
      '## Mécanismes\n- **THC** : agoniste des récepteurs cannabinoïdes CB1 → euphorie, altération de la mémoire, de l’attention et de la coordination, effets sur le système de récompense\n- Cerveau de l’**adolescent** particulièrement vulnérable (troubles cognitifs, psychoses)\n\n## Facteurs\n- Précocité, pairs, enfants des rues, groupes armés, désœuvrement, troubles psychiatriques (TDAH, anxiété, dépression), stress',
    diagnostic:
      '## Repérage\n- Questions simples sur la consommation (fréquence, quantité, conséquences, envie irrépressible)\n- Signes : yeux rouges, odeur, baisse des résultats, changement d’amis, irritabilité, apathie\n\n## Formes\n- **Intoxication aiguë** : euphorie ou anxiété, tachycardie, hyperhémie conjonctivale, troubles de la coordination, faim\n- **Psychose induite** : idées délirantes, hallucinations, agitation (rechercher une schizophrénie débutante)\n- **Dépendance** : craving, perte de contrôle, poursuite malgré les conséquences, **sevrage** (irritabilité, insomnie, anxiété, anorexie)\n- **Hyperémèse cannabinoïde** : vomissements cycliques, douleurs abdominales, soulagement par les douches chaudes\n\n## Examens\n- **Dépistage urinaire** selon le contexte ; rechercher les autres consommations, VIH, IST',
    examens: [
      ['deuxieme_intention', 'depistage-urinaire-drogues', 'Confirmation de l’usage.'],
      ['etiologique', 'tdr-vih', 'Comportements à risque.'],
      ['etiologique', 'glycemie', 'Malaise.'],
    ],
    scores: [],
    differentiels: [
      ['schizophrenie', 'Psychose persistante après sevrage.'],
      ['troubles-psychotiques-aigus', 'Épisode psychotique aigu.'],
      ['trouble-bipolaire', 'Épisode maniaque.'],
      ['trouble-de-l-usage-de-l-alcool', 'Consommation associée.'],
      ['depression-de-l-adolescent', 'Syndrome amotivationnel.'],
    ],
    etiologies: '## Facteurs\n- Précocité, pairs, rue, groupes armés, troubles psychiatriques, stress',
    principes: [
      [
        'Intervention brève',
        'mhGAP.',
        '- Retour d’information sur les risques, **entretien motivationnel**, objectifs de réduction ou d’arrêt\n- Conseils : éviter la consommation avant la conduite, l’école ou le travail, chez l’adolescent',
      ],
      [
        'Dépendance et sevrage',
        'Accompagner.',
        '- Suivi psychosocial, thérapie cognitivo-comportementale, gestion des envies, activités alternatives, soutien familial\n- Sevrage : symptomatique (hygiène du sommeil, hydroxyzine brève) ; pas de traitement de substitution',
      ],
      [
        'Complications',
        'Traiter.',
        '- **Psychose** : arrêt du cannabis, **rispéridone** ou halopéridol, surveillance (évolution vers une schizophrénie)\n- Anxiété aiguë : réassurance, environnement calme, benzodiazépine ponctuelle\n- Hyperémèse : réhydratation, antiémétiques, douches chaudes, arrêt du cannabis\n- Traiter TDAH, dépression, anxiété associés',
      ],
    ],
    molecules: [
      ['risperidone', 'premiere', 'Psychose induite'],
      ['haloperidol', 'alternative', 'Agitation, psychose'],
      ['diazepam', 'adjuvant', 'Anxiété aiguë'],
      ['hydroxyzine', 'adjuvant', 'Sevrage (insomnie, anxiété)'],
      ['ondansetron', 'adjuvant', 'Hyperémèse cannabinoïde'],
    ],
    complications: [
      {
        nom: 'Psychose et schizophrénie',
        fiche: 'schizophrenie',
        description: 'Sujet vulnérable.',
        traitement: '- Antipsychotiques, arrêt',
        clinique: '- Délire, hallucinations',
        paraclinique: '',
      },
      {
        nom: 'Troubles cognitifs et décrochage scolaire',
        fiche: 'usage-substances-adolescent',
        description: 'Usage précoce.',
        traitement: '- Arrêt, soutien',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Accidents',
        description: 'Conduite sous influence.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Bronchite chronique',
        fiche: 'bpco',
        description: 'Fumée.',
        traitement: '- Arrêt',
        clinique: '- Toux',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Réversibilité de la plupart des troubles à l’arrêt ; risque psychotique durable chez les sujets vulnérables',
    urgences: [],
    symptomes: [
      ['Yeux rouges', 'frequent'],
      ['Anxiété', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Hallucinations', 'occasionnel'],
      ['Difficultés scolaires', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Palpitations', 'occasionnel'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Repérage, intervention brève, orientation', '- Psychose, agitation'],
      hgr: ['- Prise en charge des complications psychiatriques', ''],
      tert: ['- Addictologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Usage nocif de l’adolescent',
        type: 'commune',
        description: 'Usage précoce.',
        terrain: '- Adolescent',
        fonctionnels: '- Baisse des résultats, irritabilité',
        generaux: '',
        physiques: '- Yeux rouges',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Psychose induite',
        type: 'gravite',
        description: 'Urgence psychiatrique.',
        terrain: '- Usage intensif',
        fonctionnels: '- Délire, agitation',
        generaux: '',
        physiques: '',
        paraclinique: '- Dépistage urinaire',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dépendance',
        type: 'evolutive',
        description: 'Usage quotidien.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Craving, sevrage',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Usage d'opioïdes
  {
    ...ADD,
    slug: 'usage-d-opioides',
    nom: 'Usage d’opioïdes',
    resume:
      'Consommation d’opioïdes en augmentation en RDC : tramadol détourné (comprimés fortement dosés, vendus hors circuit, parfois associés à l’alcool ou à des boissons énergisantes), codéine (sirops), héroïne fumée ou injectée dans les villes, morphine détournée ; intoxication aiguë et surdose (myosis serré, somnolence, coma, dépression respiratoire < 10/min : urgence, naloxone), convulsions avec le tramadol, dépendance (tolérance, craving, perte de contrôle), sevrage (douleurs, bâillements, larmoiement, rhinorrhée, mydriase, diarrhée, chair de poule, anxiété) ; risques infectieux par injection (VIH, hépatites B et C, endocardite, abcès) ; prise en charge : naloxone en cas de surdose, traitement du sevrage, traitement de substitution par méthadone ou buprénorphine (le plus efficace contre les rechutes et les décès), réduction des risques (matériel stérile, dépistage VIH-hépatites), soutien psychosocial.',
    definition:
      'Consommation d’opioïdes (tramadol, codéine, héroïne, morphine) allant de l’usage nocif à la dépendance, avec risque de surdose et de complications infectieuses.',
    physiopathologie:
      '## Mécanismes\n- Agonistes des **récepteurs μ** → analgésie, euphorie, **dépression respiratoire**, myosis, constipation\n- **Tolérance** et **dépendance** physique → sevrage à l’arrêt\n- **Tramadol** : effet sérotoninergique en plus → **convulsions**, syndrome sérotoninergique\n\n## Facteurs\n- Douleur chronique, accès hors circuit, pairs, travail pénible, rue, traumatismes, troubles psychiatriques',
    diagnostic:
      '## Surdose\n- **Triade** : **myosis** serré, **coma** ou somnolence, **dépression respiratoire** (FR < 10/min, cyanose)\n- Convulsions (tramadol), hypothermie\n\n## Dépendance\n- Tolérance, craving, perte de contrôle, poursuite malgré les conséquences, sevrage\n- **Sevrage** (6–24 h après la dernière prise) : bâillements, larmoiement, rhinorrhée, **mydriase**, chair de poule, sueurs, douleurs musculaires, crampes abdominales, diarrhée, vomissements, anxiété, insomnie\n\n## Bilan\n- **Dépistage urinaire**, test **VIH**, **hépatites B et C**, syphilis, tuberculose\n- Injections : abcès, endocardite (souffle, fièvre), thromboses ; grossesse',
    examens: [
      ['deuxieme_intention', 'depistage-urinaire-drogues', 'Opiacés, autres substances.'],
      ['premiere_intention', 'tdr-vih', 'Infection à VIH.'],
      ['premiere_intention', 'serologies-hepatites', 'Hépatites B et C.'],
      ['gravite', 'gaz-du-sang', 'Surdose.'],
      ['etiologique', 'bilan-hepatique', 'Avant buprénorphine, hépatite.'],
      ['etiologique', 'ecg', 'QT avant méthadone.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['intoxication-aux-psychotropes', 'Autres intoxications.'],
      ['intoxications-aigues-adulte', 'Coma toxique.'],
      ['hypoglycemie-adulte', 'Coma hypoglycémique.'],
      ['trouble-de-l-usage-de-l-alcool', 'Alcool associé.'],
      ['epilepsie', 'Convulsions au tramadol.'],
    ],
    etiologies: '## Produits\n- Tramadol détourné, codéine, héroïne, morphine',
    principes: [
      [
        'Surdose',
        'Urgence.',
        '- Libérer les voies aériennes, **ventilation** au masque, oxygène\n- **Naloxone** 0,4 mg IV, IM ou intranasale, renouvelable toutes les 2–3 min (titration chez le dépendant), surveillance prolongée (durée d’action courte)\n- Convulsions au tramadol : benzodiazépine',
      ],
      [
        'Traitement de la dépendance',
        'Substitution.',
        '- **Méthadone** ou **buprénorphine** au long cours (réduit les rechutes, les décès et le VIH)\n- Sevrage encadré si choisi : symptomatique (antalgiques, antidiarrhéiques, antiémétiques, sommeil), décroissance progressive\n- Après sevrage : naltrexone dans des cas sélectionnés\n- Interventions psychosociales, entretien motivationnel',
      ],
      [
        'Réduction des risques',
        'Santé publique.',
        '- Matériel d’injection stérile, **naloxone** remise aux proches\n- Dépistage et traitement **VIH**, **hépatites**, tuberculose ; vaccination hépatite B\n- Femme enceinte : substitution (pas de sevrage brutal), suivi du nouveau-né (syndrome de sevrage)',
      ],
    ],
    molecules: [
      ['naloxone', 'premiere', 'Surdose'],
      ['methadone', 'premiere', 'Substitution'],
      ['buprenorphine', 'premiere', 'Substitution'],
      ['naltrexone', 'alternative', 'Prévention des rechutes après sevrage'],
      ['diazepam', 'adjuvant', 'Convulsions, anxiété de sevrage'],
      ['loperamide', 'adjuvant', 'Diarrhée de sevrage'],
    ],
    complications: [
      {
        nom: 'Surdose mortelle',
        description: 'Dépression respiratoire.',
        traitement: '- Naloxone, ventilation',
        clinique: '- Coma, myosis',
        paraclinique: '',
      },
      {
        nom: 'VIH et hépatites',
        fiche: 'hepatite-c-chronique',
        description: 'Injection.',
        traitement: '- Dépistage, traitement',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Endocardite et abcès',
        fiche: 'endocardite-infectieuse',
        description: 'Injection.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, souffle',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Convulsions',
        fiche: 'epilepsie',
        description: 'Tramadol.',
        traitement: '- Benzodiazépines',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Maladie chronique à rechutes ; la substitution réduit fortement la mortalité',
    urgences: [],
    symptomes: [
      ['Myosis', 'frequent'],
      ['Somnolence', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Anxiété', 'frequent'],
      ['Diarrhée', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Naloxone, repérage, dépistage VIH-hépatites, orientation', '- Surdose, convulsions'],
      hgr: ['- Réanimation, sevrage encadré', ''],
      tert: ['- Programmes de substitution', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Usage détourné de tramadol',
        type: 'commune',
        description: 'Jeunes adultes.',
        terrain: '- Adolescent, adulte jeune, travailleur',
        fonctionnels: '- Euphorie, dépendance',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Surdose',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Coma',
        physiques: '- Myosis, bradypnée',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Usage d’héroïne par injection',
        type: 'etiologique',
        description: 'Risques infectieux.',
        terrain: '- Milieu urbain',
        fonctionnels: '',
        generaux: '- Fièvre possible',
        physiques: '- Traces d’injection, abcès',
        paraclinique: '- VIH, VHC',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Tabagisme
  {
    ...ADD,
    slug: 'tabagisme',
    nom: 'Tabagisme',
    resume:
      'Première cause évitable de décès dans le monde, en progression chez les jeunes en RDC (cigarettes, tabac à chiquer, chicha) : dépendance à la nicotine, responsable de cancers (poumon, ORL, œsophage, vessie, col), de maladies cardiovasculaires (infarctus, AVC, artériopathie), de BPCO, d’aggravation de la tuberculose et de ses rechutes, de complications de la grossesse (avortements, petit poids de naissance, mort subite du nourrisson) ; tabagisme passif dangereux pour les enfants ; repérage systématique à chaque consultation, conseil d’arrêt bref (méthode des 5A), évaluation de la dépendance, traitement : substituts nicotiniques (timbres et formes orales associés), varénicline ou bupropion, soutien comportemental, suivi ; arrêt bénéfique à tout âge.',
    definition:
      'Consommation régulière de tabac (fumé, chiqué ou par chicha) entraînant une dépendance à la nicotine et une exposition aux substances toxiques et cancérigènes de la fumée.',
    physiopathologie:
      '## Mécanismes\n- **Nicotine** : stimulation des récepteurs nicotiniques, libération de dopamine → dépendance rapide\n- **Fumée** : monoxyde de carbone, goudrons cancérigènes, oxydants → athérosclérose, inflammation bronchique, cancers\n\n## Conséquences\n- **Cancers** (poumon, ORL, œsophage, vessie, col de l’utérus, pancréas)\n- **Cardiovasculaires** : infarctus, AVC, artériopathie, anévrisme\n- **Respiratoires** : **BPCO**, asthme aggravé, **tuberculose** (risque et rechutes)\n- **Grossesse** : avortement, prématurité, petit poids, mort subite du nourrisson\n- Diabète, ulcère, troubles de l’érection, mauvaise cicatrisation',
    diagnostic:
      '## Repérage systématique\n- **Demander** à chaque consultation (type, quantité, âge de début)\n- Évaluer la **dépendance** : cigarette dans les 30 min suivant le réveil, nombre de cigarettes par jour\n- Motivation à l’arrêt, tentatives antérieures, consommations associées (alcool, cannabis)\n\n## Bilan selon l’âge et les symptômes\n- TA, IMC, glycémie, lipides ; **spirométrie** si toux ou dyspnée ; radiographie thoracique si signes\n- Dépistage de la tuberculose en cas de toux prolongée',
    examens: [
      ['deuxieme_intention', 'spirometrie', 'BPCO.'],
      ['deuxieme_intention', 'radiographie-thoracique', 'Signes respiratoires.'],
      ['etiologique', 'bilan-lipidique', 'Risque cardiovasculaire.'],
      ['etiologique', 'glycemie', 'Risque cardiovasculaire.'],
    ],
    scores: ['imc'],
    differentiels: [],
    etiologies: '## Facteurs\n- Pairs, publicité, stress, alcool, cannabis, accessibilité',
    principes: [
      [
        'Conseil d’arrêt',
        'Méthode des 5A.',
        '- **Demander**, **Conseiller** l’arrêt de façon claire et personnalisée, **Évaluer** la motivation, **Aider** (date d’arrêt, traitement), **Organiser** le suivi\n- Entretien motivationnel si non prêt',
      ],
      [
        'Traitements',
        'Doublent les chances de succès.',
        '- **Substituts nicotiniques** : timbre (21 mg si > 20 cigarettes/j) + formes orales à la demande, 8–12 semaines\n- **Varénicline** 12 semaines (la plus efficace) ou bupropion\n- Soutien comportemental (gestion des envies, des situations à risque), lignes d’aide, suivi',
      ],
      [
        'Populations particulières',
        'Adapter.',
        '- **Grossesse** : arrêt prioritaire, soutien, substituts nicotiniques si nécessaire\n- **Tuberculose**, VIH, diabète, maladies cardiovasculaires : intégrer l’arrêt aux soins\n- Protection des enfants contre le tabagisme passif ; prévention chez les jeunes',
      ],
    ],
    molecules: [
      ['nicotine', 'premiere', 'Substitution nicotinique'],
      ['varenicline', 'premiere', 'Aide à l’arrêt'],
    ],
    complications: [
      {
        nom: 'BPCO',
        fiche: 'bpco',
        description: 'Inflammation bronchique.',
        traitement: '- Arrêt du tabac',
        clinique: '- Toux, dyspnée',
        paraclinique: '- Spirométrie',
      },
      {
        nom: 'Cancer bronchopulmonaire',
        fiche: 'cancer-bronchopulmonaire',
        description: 'Principal facteur.',
        traitement: '- Oncologie',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Maladies cardiovasculaires',
        fiche: 'avc-ischemique',
        description: 'Athérosclérose.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Complications de la grossesse',
        description: 'Petit poids, prématurité.',
        traitement: '- Arrêt',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- L’arrêt réduit rapidement le risque cardiovasculaire et, à long terme, le risque de cancer ; bénéfice à tout âge',
    urgences: [],
    symptomes: [
      ['Toux', 'frequent'],
      ['Expectoration', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Anxiété', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'mhGAP Intervention Guide 2.0'],
    niveaux: {
      cs: ['- Repérage systématique, conseil d’arrêt, suivi', ''],
      hgr: ['- Substituts nicotiniques, bilan des complications', ''],
      tert: ['- Consultation de tabacologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tabagisme avec dépendance',
        type: 'commune',
        description: 'Fumeur quotidien.',
        terrain: '- Adulte',
        fonctionnels: '- Envie de fumer au réveil',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Tabagisme de la femme enceinte',
        type: 'terrain',
        description: 'Risques fœtaux.',
        terrain: '- Grossesse',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Tabagisme de l’adolescent',
        type: 'terrain',
        description: 'Prévention.',
        terrain: '- Adolescent',
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
