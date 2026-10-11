'use strict';

/**
 * Lot 31 (psychiatrie de l'enfant, addictologie) — troubles du spectre de l'autisme, TDAH,
 * enfants associés aux forces et groupes armés, trouble de l'usage de l'alcool, sevrage
 * alcoolique et delirium tremens, encéphalopathie de Gayet-Wernicke, intoxication au méthanol.
 * Rédigé par IA (OMS mhGAP, UNICEF, ouvrages de référence) : à valider.
 */

const PEDOPSY = { departement: 'neuropsychiatrie', specialite: 'Psychiatrie de l’enfant et de l’adolescent' };
const ADD = { departement: 'neuropsychiatrie', specialite: 'Addictologie' };

module.exports = [
  // =================================================================== Autisme
  {
    ...PEDOPSY,
    slug: 'troubles-du-spectre-autistique',
    nom: 'Troubles du spectre de l’autisme',
    resume:
      'Trouble du neurodéveloppement débutant dans la petite enfance : difficultés de communication et d’interactions sociales, comportements et intérêts restreints et répétitifs ; repérage précoce (absence de babillage, de pointage, de réponse au prénom), vérifier l’audition, rechercher épilepsie et déficience intellectuelle ; formation des parents (programme OMS CST), éducation adaptée ; pas de traitement médicamenteux de l’autisme lui-même.',
    definition:
      'Ensemble de troubles du neurodéveloppement caractérisés par des déficits persistants de la communication et des interactions sociales et par des comportements, intérêts ou activités restreints et répétitifs, présents dès la petite enfance.',
    physiopathologie:
      '## Facteurs\n- Forte composante génétique, facteurs prénataux (prématurité, infections, valproate pendant la grossesse)\n- **Pas de lien avec les vaccins**, ni avec l’éducation, ni avec la sorcellerie\n- Associations fréquentes : déficience intellectuelle, **épilepsie**, troubles du sommeil, TDAH',
    diagnostic:
      '## Signes d’alerte\n- Pas de babillage à 12 mois, pas de pointage, pas de réponse au prénom, peu de contact visuel, pas de mots à 16–18 mois, perte de langage acquis\n- Jeu pauvre et répétitif, alignement d’objets, intérêts restreints, attachement à des routines, crises lors des changements\n- Particularités sensorielles (bruits, textures), mouvements répétitifs (battements des mains)\n\n## Évaluation\n- **Audition** (surdité) et vision\n- Développement global, épilepsie, état nutritionnel (sélectivité alimentaire)\n- Maltraitance, négligence, stigmatisation familiale',
    examens: [
      ['premiere_intention', 'audiometrie', 'Éliminer une surdité.'],
      ['premiere_intention', 'anthropometrie', 'Sélectivité alimentaire, malnutrition.'],
      ['deuxieme_intention', 'eeg', 'Épilepsie associée.'],
    ],
    scores: [],
    differentiels: [
      ['Surdité', 'Audiométrie anormale.'],
      ['Déficience intellectuelle isolée', 'Retard global sans trouble spécifique des interactions.'],
      ['paralysie-cerebrale', 'Atteinte motrice.'],
      ['maltraitance-enfant', 'Négligence, carence affective.'],
      [
        'trouble-deficit-attention-hyperactivite',
        'Inattention, hyperactivité sans trouble de la communication.',
      ],
    ],
    etiologies:
      '## Facteurs de risque\n- Garçon, antécédents familiaux, prématurité, exposition prénatale au valproate, âge parental avancé',
    principes: [
      [
        'Interventions psychosociales',
        'Développer la communication et l’autonomie.',
        '- **Psychoéducation** des familles (le trouble n’est ni une malédiction ni la faute des parents)\n- **Formation des parents** aux compétences de communication et de comportement (programme OMS « Caregiver Skills Training »)\n- Stimulation précoce, routines, communication visuelle, scolarisation inclusive',
      ],
      [
        'Comorbidités',
        'Traiter ce qui est traitable.',
        '- Épilepsie : antiépileptiques\n- Troubles du sommeil : hygiène du sommeil, mélatonine\n- Comportements gravement agressifs ou automutilations résistant aux interventions : **rispéridone** à faible dose, sous surveillance spécialisée',
      ],
      [
        'Protection et droits',
        'Lutter contre l’exclusion.',
        '- Prévenir les maltraitances et les pratiques néfastes (enfermement, exorcismes violents), soutien social',
      ],
    ],
    molecules: [
      ['risperidone', 'alternative', 'Agressivité sévère (spécialiste)'],
      ['melatonine', 'adjuvant', 'Troubles du sommeil'],
    ],
    complications: [
      {
        nom: 'Épilepsie',
        fiche: 'epilepsie-enfant',
        description: 'Fréquente, surtout à l’adolescence.',
        traitement: '- Antiépileptiques',
        clinique: '- Crises',
        paraclinique: '- EEG',
      },
      {
        nom: 'Maltraitance et exclusion',
        fiche: 'maltraitance-enfant',
        description: 'Stigmatisation.',
        traitement: '- Protection, soutien familial',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Malnutrition',
        fiche: 'retard-staturo-ponderal',
        description: 'Sélectivité alimentaire.',
        traitement: '- Accompagnement nutritionnel',
        clinique: '- Retard pondéral',
        paraclinique: '- Anthropométrie',
      },
    ],
    evolution:
      '## Pronostic\n- Trouble permanent, d’intensité très variable ; progrès importants avec une prise en charge précoce et le soutien de la famille',
    urgences: [],
    symptomes: [
      ['Troubles des interactions sociales', 'tres_frequent'],
      ['Troubles du langage', 'tres_frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Retard de développement psychomoteur', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Repérage, vérification de l’audition, psychoéducation, orientation',
        '- Signes d’alerte, régression du langage',
      ],
      hgr: ['- Évaluation du développement, prise en charge des comorbidités', ''],
      tert: ['- Pédopsychiatrie, évaluation multidisciplinaire', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Autisme avec retard de langage',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Garçon, 18 mois à 3 ans',
        fonctionnels: '- Pas de mots, pas de pointage, peu de regard',
        generaux: '',
        physiques: '- Mouvements répétitifs',
        paraclinique: '- Audition normale',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Autisme avec déficience intellectuelle et épilepsie',
        type: 'gravite',
        description: 'Forme sévère.',
        terrain: '',
        fonctionnels: '- Absence de langage, automutilations',
        generaux: '',
        physiques: '',
        paraclinique: '- EEG anormal',
        etiologies: '',
        syndromes: ['syndrome-convulsif'],
      },
      {
        nom: 'Autisme sans déficience intellectuelle',
        type: 'etiologique',
        description: 'Diagnostic plus tardif.',
        terrain: '- Enfant scolarisé',
        fonctionnels: '- Difficultés relationnelles, intérêts restreints',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== TDAH
  {
    ...PEDOPSY,
    slug: 'trouble-deficit-attention-hyperactivite',
    nom: 'Trouble déficit de l’attention avec hyperactivité',
    resume:
      'Trouble du neurodéveloppement : inattention, hyperactivité et impulsivité excessives pour l’âge, présentes avant 12 ans, dans plusieurs milieux (maison, école) ; éliminer audition, vision, malnutrition, anémie, épilepsie (absences), maltraitance, stress ; psychoéducation, formation des parents, aménagements scolaires ; méthylphénidate par un spécialiste si persistant (≥ 6 ans).',
    definition:
      'Trouble du neurodéveloppement associant de façon persistante un déficit de l’attention et/ou une hyperactivité-impulsivité, débutant avant 12 ans et entraînant une gêne dans au moins deux milieux de vie.',
    physiopathologie:
      '## Facteurs\n- Forte héritabilité, dysfonctionnement des circuits fronto-striataux (dopamine, noradrénaline)\n- Facteurs prénataux : prématurité, alcool et tabac pendant la grossesse, exposition au plomb',
    diagnostic:
      '## Clinique\n- **Inattention** : distractibilité, oublis, travail inachevé, désorganisation\n- **Hyperactivité** : agitation, incapacité à rester assis, parle beaucoup\n- **Impulsivité** : interrompt, ne peut attendre son tour, prend des risques (accidents)\n- Depuis au moins 6 mois, dans plusieurs milieux, retentissement scolaire et social\n\n## Éliminer\n- Troubles de l’audition ou de la vision, **anémie**, malnutrition, hypothyroïdie, **épilepsie-absences**, troubles du sommeil\n- Stress familial, maltraitance, dépression, anxiété\n- Questionnaires parents et enseignants (SNAP-IV, Conners)',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'audiometrie', 'Surdité.'],
      ['premiere_intention', 'anthropometrie', 'Croissance, avant traitement.'],
      ['deuxieme_intention', 'eeg', 'Absences.'],
      ['etiologique', 'tsh', 'Dysthyroïdie.'],
    ],
    scores: [],
    differentiels: [
      ['troubles-du-spectre-autistique', 'Troubles de la communication et des interactions.'],
      ['epilepsie-enfant', 'Absences : brèves ruptures de contact.'],
      ['maltraitance-enfant', 'Contexte familial, lésions.'],
      ['anemie-enfant', 'Fatigue, inattention, pâleur.'],
      ['Déficience intellectuelle', 'Retard global des apprentissages.'],
    ],
    etiologies:
      '## Terrain\n- Garçon (2 à 3 fois plus), prématurité, antécédents familiaux, exposition prénatale à l’alcool',
    principes: [
      [
        'Interventions psychosociales',
        'En première intention.',
        '- **Psychoéducation** de l’enfant, des parents et des enseignants\n- **Formation des parents** à la gestion du comportement (renforcement positif, règles claires, routines)\n- **Aménagements scolaires** : place au premier rang, consignes courtes, pauses',
      ],
      [
        'Médicament',
        'Formes sévères ou persistantes, enfant ≥ 6 ans.',
        '- **Méthylphénidate** prescrit par un spécialiste, en complément des mesures psychosociales\n- Surveillance du poids, de la taille, de l’appétit, du sommeil, de la tension artérielle\n- Pas de traitement médicamenteux avant 6 ans',
      ],
    ],
    molecules: [
      ['methylphenidate', 'premiere', 'Forme sévère, spécialiste'],
      ['melatonine', 'adjuvant', 'Troubles du sommeil'],
    ],
    complications: [
      {
        nom: 'Échec scolaire et exclusion',
        description: 'Retentissement scolaire.',
        traitement: '- Aménagements, soutien',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Accidents et traumatismes',
        description: 'Impulsivité.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Troubles des conduites, usage de substances à l’adolescence',
        description: 'Évolution défavorable.',
        traitement: '- Prise en charge précoce',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration fréquente de l’hyperactivité à l’adolescence ; persistance de l’inattention chez l’adulte dans un tiers des cas',
    urgences: [],
    symptomes: [
      ['Hyperactivité', 'tres_frequent'],
      ['Troubles du comportement', 'tres_frequent'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Repérage, élimination des causes somatiques, psychoéducation',
        '- Formes sévères, doute diagnostique',
      ],
      hgr: ['- Évaluation, formation des parents', ''],
      tert: ['- Pédopsychiatrie, méthylphénidate', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme mixte',
        type: 'commune',
        description: 'Inattention et hyperactivité.',
        terrain: '- Garçon d’âge scolaire',
        fonctionnels: '- Agitation, distractibilité, impulsivité',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- Bilan somatique normal',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme inattentive',
        type: 'etiologique',
        description: 'Souvent méconnue, filles.',
        terrain: '- Fille',
        fonctionnels: '- Rêverie, oublis, lenteur',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Enfants associés aux forces armées
  {
    ...PEDOPSY,
    slug: 'enfants-associes-forces-armees',
    nom: 'Enfants associés aux forces et groupes armés',
    resume:
      'Enfants recrutés ou utilisés par des forces ou groupes armés (combattants, porteurs, espions, esclaves sexuels), nombreux dans l’Est de la RDC : approche globale (DDR, réunification familiale, scolarisation, formation), prise en charge médicale (blessures, IST, VIH, grossesses, malnutrition, usage de substances) et psychosociale communautaire ; troubles spécifiques (ESPT, dépression) traités selon mhGAP ; pas de stigmatisation.',
    definition:
      'Enfant de moins de 18 ans recruté ou utilisé par une force ou un groupe armé, à quelque titre que ce soit (Principes de Paris), et exposé à de multiples traumatismes, violences et privations.',
    physiopathologie:
      '## Expositions\n- Violences subies et commises, exécutions, tortures, **violences sexuelles** (filles et garçons), mutilations\n- Privations (nourriture, soins, éducation), **alcool et drogues** imposés, perte des liens familiaux\n\n## Conséquences\n- Détresse psychologique, **ESPT**, dépression, troubles du comportement, usage de substances\n- Problèmes somatiques : blessures, IST, VIH, grossesses précoces, malnutrition\n- Rejet communautaire, difficultés de réinsertion',
    diagnostic:
      '## Évaluation globale\n- **Santé physique** : blessures, séquelles, malnutrition, paludisme, IST, VIH, hépatite B, grossesse, état vaccinal\n- **Santé mentale** : détresse, cauchemars, reviviscences, tristesse, agressivité, consommation d’alcool ou de drogues, idées suicidaires\n- **Situation sociale** : famille, sécurité, scolarité, risque de re-recrutement\n- Entretiens adaptés à l’âge, sans forcer le récit, en garantissant la confidentialité',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Malnutrition.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'serologie-syphilis', 'IST.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['etiologique', 'beta-hcg', 'Grossesse.'],
      ['etiologique', 'aghbs', 'Hépatite B.'],
    ],
    scores: [],
    differentiels: [
      ['etat-de-stress-post-traumatique', 'ESPT constitué à traiter.'],
      ['depression', 'Dépression associée.'],
      ['Trouble des conduites', 'Agressivité persistante.'],
      ['Psychose induite par les drogues', 'Usage de cannabis ou d’autres drogues.'],
    ],
    etiologies:
      '## Facteurs de recrutement\n- Pauvreté, séparation familiale, déplacement, absence de scolarisation, insécurité, enlèvements',
    principes: [
      [
        'Protection et réinsertion',
        'Priorité.',
        '- Séparation des groupes armés, sécurité, programmes de **DDR** et de protection de l’enfance\n- **Recherche et réunification familiale**, médiation communautaire, scolarisation ou formation professionnelle, activités génératrices de revenus\n- Lutte contre la stigmatisation (notamment des filles et des enfants nés de violences)',
      ],
      [
        'Soins médicaux',
        'Traiter les conséquences physiques.',
        '- Blessures, séquelles, renutrition, vaccinations\n- Survivants de violences sexuelles : PEP VIH, contraception d’urgence, traitement des IST (dans les 72 heures si récent), suivi de grossesse',
      ],
      [
        'Soutien psychosocial',
        'Restaurer le bien-être.',
        '- Activités psychosociales de groupe, espaces amis des enfants, soutien familial, activités culturelles et sportives\n- Troubles spécifiques (ESPT, dépression, usage de substances) : interventions mhGAP, TCC centrée sur le trauma, **fluoxétine** chez l’adolescent si besoin\n- Prise en charge de l’usage d’alcool et de drogues',
      ],
    ],
    molecules: [
      ['fluoxetine', 'alternative', 'Dépression ou ESPT de l’adolescent'],
      ['levonorgestrel-1-5-mg', 'premiere', 'Contraception d’urgence après violence sexuelle'],
      ['albendazole', 'adjuvant', 'Déparasitage'],
    ],
    complications: [
      {
        nom: 'État de stress post-traumatique',
        fiche: 'etat-de-stress-post-traumatique',
        description: 'Fréquent.',
        traitement: '- Psychothérapie centrée sur le trauma',
        clinique: '- Cauchemars, reviviscences',
        paraclinique: '',
      },
      {
        nom: 'Infection à VIH et IST',
        fiche: 'infection-vih',
        description: 'Violences sexuelles.',
        traitement: '- PEP, ARV, traitement des IST',
        clinique: '',
        paraclinique: '- Tests',
      },
      {
        nom: 'Re-recrutement et exclusion',
        description: 'Absence de réinsertion.',
        traitement: '- Programmes de protection',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Détresse sévère.',
        traitement: '- Évaluation, protection',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Résilience fréquente avec un soutien familial et communautaire ; troubles durables chez une minorité',
    urgences: [],
    symptomes: [
      ['Troubles du sommeil', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Anxiété', 'frequent'],
      ['Humeur dépressive', 'frequent'],
      ['Lésions traumatiques', 'occasionnel'],
      ['Idées suicidaires', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'mhGAP Intervention Guide 2.0',
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: [
        '- Soins médicaux, premiers secours psychologiques, liaison avec la protection de l’enfance',
        '- Troubles mentaux sévères, violences sexuelles récentes',
      ],
      hgr: ['- Prise en charge médicale complète, santé mentale', ''],
      tert: ['- Pédopsychiatrie, psychotraumatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Détresse psychosociale',
        type: 'commune',
        description: 'Réaction attendue.',
        terrain: '- Enfant sorti d’un groupe armé',
        fonctionnels: '- Peurs, cauchemars, irritabilité',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Expositions traumatiques',
        syndromes: [],
      },
      {
        nom: 'Fille associée aux groupes armés',
        type: 'terrain',
        description: 'Violences sexuelles, grossesses.',
        terrain: '- Adolescente',
        fonctionnels: '',
        generaux: '',
        physiques: '- Grossesse, IST',
        paraclinique: '- β-hCG, tests IST',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Troubles mentaux constitués',
        type: 'gravite',
        description: 'ESPT, dépression, usage de substances.',
        terrain: '',
        fonctionnels: '- Reviviscences, idées suicidaires',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Alcool
  {
    ...ADD,
    slug: 'trouble-de-l-usage-de-l-alcool',
    nom: 'Trouble de l’usage de l’alcool',
    resume:
      'Consommation nocive ou dépendance à l’alcool (y compris boissons artisanales : lotoko, kaïkpu, alcools en sachets) : repérage systématique (AUDIT), intervention brève, prise en charge des complications (foie, pancréas, nerfs, dépression, violences) ; sevrage encadré par diazépam et thiamine ; aide au maintien de l’abstinence (naltrexone), groupes d’entraide, soutien familial.',
    definition:
      'Mode de consommation d’alcool entraînant des dommages (usage nocif) ou une dépendance : envie irrépressible, perte de contrôle, tolérance, syndrome de sevrage, poursuite malgré les conséquences.',
    physiopathologie:
      '## Mécanismes\n- Action sur les systèmes GABA, glutamate et dopamine (récompense), tolérance et dépendance physique\n- Carences (thiamine, folates), toxicité directe sur le foie, le pancréas, le cœur, le cerveau et les nerfs\n\n## Facteurs\n- Disponibilité d’alcools artisanaux et en sachets bon marché, stress, chômage, conflits, troubles mentaux associés',
    diagnostic:
      '## Repérage\n- Questionnaire **AUDIT** (ou AUDIT-C) en consultation\n- Signes : haleine, tremblements matinaux, traumatismes répétés, conflits familiaux, absentéisme\n\n## Dépendance\n- Envie forte, perte de contrôle, tolérance, **sevrage** (tremblements, sueurs, anxiété) soulagé par l’alcool, abandon des activités, poursuite malgré les dommages\n\n## Complications à rechercher\n- **Hépatopathie** (stéatose, hépatite alcoolique, cirrhose), pancréatite, gastrite, hémorragie digestive\n- Neuropathie, encéphalopathie de Gayet-Wernicke, troubles cognitifs, épilepsie\n- HTA, cardiomyopathie, dépression, suicide, violences, accidents\n\n## Examens\n- Bilan hépatique (GGT, transaminases), NFS (macrocytose), glycémie, lipase si douleurs, test VIH',
    examens: [
      ['premiere_intention', 'bilan-hepatique', 'GGT, transaminases (ASAT > ALAT).'],
      ['premiere_intention', 'nfs', 'Macrocytose, thrombopénie.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['etiologique', 'serologies-hepatites', 'Hépatites virales associées.'],
      ['etiologique', 'tdr-vih', 'Comportements à risque.'],
      ['deuxieme_intention', 'echographie-abdominale', 'Stéatose, cirrhose.'],
    ],
    scores: [],
    differentiels: [
      ['depression', 'Consommation secondaire à une dépression (souvent associée).'],
      ['Usage d’autres substances', 'Cannabis, drogues, médicaments.'],
      ['hepatites-virales-aigues-a-et-e', 'Hépatite virale.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Homme, jeunes, chômage, conflits et déplacement, troubles mentaux, antécédents familiaux, disponibilité de l’alcool',
    principes: [
      [
        'Intervention brève',
        'Consommation à risque ou nocive.',
        '- Information sur les risques, conseil personnalisé, objectifs de réduction ou d’abstinence, suivi',
      ],
      [
        'Dépendance',
        'Sevrage et maintien.',
        '- **Sevrage** encadré : **diazépam** à doses dégressives, **thiamine** 100 mg 3 fois/j, hydratation\n- Maintien de l’abstinence : **naltrexone** 50 mg/j (hors usage d’opioïdes et hépatopathie sévère), soutien psychosocial, groupes d’entraide, implication de la famille\n- Traiter la dépression ou l’anxiété associée',
      ],
      [
        'Complications et prévention',
        'Réduire les dommages.',
        '- Prise en charge hépatique, nutritionnelle, neurologique\n- Prévention des violences et des accidents, régulation de la vente d’alcool en sachets',
      ],
    ],
    molecules: [
      ['diazepam', 'premiere', 'Sevrage'],
      ['vitamine-b1-thiamine', 'premiere', 'Prévention du Gayet-Wernicke'],
      ['naltrexone', 'premiere', 'Maintien de l’abstinence'],
      ['acide-folique', 'adjuvant', 'Carence'],
      ['chlordiazepoxide', 'alternative', 'Sevrage'],
    ],
    complications: [
      {
        nom: 'Cirrhose',
        fiche: 'cirrhose-hepatique',
        description: 'Hépatopathie alcoolique.',
        traitement: '- Abstinence, traitement des complications',
        clinique: '- Ictère, ascite',
        paraclinique: '- Bilan hépatique, échographie',
      },
      {
        nom: 'Sevrage et delirium tremens',
        fiche: 'sevrage-alcoolique-delirium-tremens',
        description: 'Arrêt brutal.',
        traitement: '- Diazépam, thiamine',
        clinique: '- Tremblements, confusion',
        paraclinique: '',
      },
      {
        nom: 'Encéphalopathie de Gayet-Wernicke',
        fiche: 'encephalopathie-de-gayet-wernicke',
        description: 'Carence en thiamine.',
        traitement: '- Thiamine IV',
        clinique: '- Confusion, ataxie, ophtalmoplégie',
        paraclinique: '',
      },
      {
        nom: 'Hémorragie digestive',
        fiche: 'hemorragie-digestive-haute',
        description: 'Gastrite, varices.',
        traitement: '- Réanimation, endoscopie',
        clinique: '- Hématémèse',
        paraclinique: '',
      },
      {
        nom: 'Dépression et suicide',
        fiche: 'risque-suicidaire',
        description: 'Fréquents.',
        traitement: '- Évaluation, traitement',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Maladie chronique avec rechutes ; amélioration nette avec l’abstinence et un soutien durable',
    urgences: [],
    symptomes: [
      ['Tremblements', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Humeur dépressive', 'frequent'],
      ['Lésions traumatiques', 'occasionnel'],
      ['Ictère', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Repérage AUDIT, intervention brève, sevrage simple, thiamine',
        '- Sevrage compliqué, complications sévères',
      ],
      hgr: ['- Sevrage hospitalier, complications', ''],
      tert: ['- Addictologie, hépatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Usage nocif',
        type: 'commune',
        description: 'Dommages sans dépendance.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Consommations excessives, conflits, accidents',
        generaux: '',
        physiques: '',
        paraclinique: '- GGT élevées',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dépendance à l’alcool',
        type: 'gravite',
        description: 'Perte de contrôle, sevrage.',
        terrain: '',
        fonctionnels: '- Envie irrépressible, tremblements matinaux',
        generaux: '- Dénutrition',
        physiques: '- Hépatomégalie, neuropathie',
        paraclinique: '- Macrocytose, GGT élevées',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Sevrage
  {
    ...ADD,
    slug: 'sevrage-alcoolique-delirium-tremens',
    nom: 'Sevrage alcoolique et delirium tremens',
    resume:
      'Dans les 6 à 48 heures suivant l’arrêt ou la réduction de l’alcool (hospitalisation, jeûne, manque d’argent) : tremblements, sueurs, anxiété, tachycardie, hallucinations, convulsions ; delirium tremens (J2–J4) : confusion, agitation, hallucinations, fièvre, mortel sans traitement ; diazépam en doses de charge, thiamine avant tout glucose, hydratation, correction des électrolytes, recherche d’une infection ou d’un traumatisme.',
    definition:
      'Ensemble des manifestations survenant à l’arrêt ou à la diminution de la consommation chez une personne dépendante à l’alcool ; le delirium tremens en est la forme la plus grave, avec confusion et hyperactivité autonome.',
    physiopathologie:
      '## Mécanismes\n- Adaptation chronique du cerveau à l’alcool (baisse du GABA, hausse du glutamate) → hyperexcitabilité à l’arrêt\n- Hyperactivité sympathique, déshydratation, hypokaliémie, hypomagnésémie, hypoglycémie\n\n## Chronologie\n- 6–24 h : tremblements, sueurs, anxiété, nausées, insomnie\n- 12–48 h : **convulsions** généralisées, hallucinations (souvent visuelles : insectes, animaux)\n- 48–96 h : **delirium tremens**',
    diagnostic:
      '## Clinique\n- Notion de consommation importante et d’arrêt récent (y compris à l’hôpital, ou en post-opératoire)\n- **Tremblements**, **sueurs**, tachycardie, HTA, fièvre, nausées, insomnie, anxiété\n- **Hallucinations**, **convulsions**\n- **Delirium tremens** : confusion, désorientation, agitation, hallucinations terrifiantes, hyperthermie, déshydratation\n- Score CIWA-Ar pour adapter le traitement\n\n## Rechercher\n- Infection (pneumopathie d’inhalation, méningite), **traumatisme crânien**, hypoglycémie, encéphalopathie de Gayet-Wernicke ou hépatique, hémorragie digestive\n- Glycémie, ionogramme, magnésémie, NFS, bilan hépatique, TDR paludisme',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'ionogramme', 'Hypokaliémie, hyponatrémie.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypomagnésémie.'],
      ['premiere_intention', 'nfs', 'Infection.'],
      ['premiere_intention', 'bilan-hepatique', 'Hépatopathie.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Traumatisme crânien, convulsions focales.'],
      ['deuxieme_intention', 'lcr', 'Fièvre et signes méningés.'],
    ],
    scores: [],
    differentiels: [
      ['encephalopathie-de-gayet-wernicke', 'Ataxie, ophtalmoplégie (souvent associée).'],
      ['hematome-sous-dural', 'Chutes, signes focaux.'],
      ['meningite-bacterienne', 'Raideur de nuque, LCR.'],
      ['neuropaludisme-adulte', 'TDR positif.'],
      ['Encéphalopathie hépatique', 'Cirrhose, astérixis.'],
      ['intoxication-au-methanol', 'Troubles visuels, acidose.'],
    ],
    etiologies:
      '## Circonstances\n- Hospitalisation, chirurgie, maladie intercurrente, incarcération, manque d’argent, arrêt volontaire non encadré',
    principes: [
      [
        'Benzodiazépines',
        'Contrôler les symptômes.',
        '- **Diazépam** 10–20 mg per os ou IV lent toutes les 1 à 2 heures jusqu’à sédation légère (selon CIWA), puis diminution sur 5 à 7 jours\n- Insuffisance hépatique sévère, sujet âgé : doses réduites, surveillance\n- Delirium tremens : diazépam IV en bolus répétés, surveillance respiratoire ; **halopéridol** seulement en complément pour les hallucinations (jamais seul)',
      ],
      [
        'Thiamine et soins généraux',
        'Prévenir les complications.',
        '- **Thiamine** 100 mg IV/IM avant tout soluté glucosé (500 mg 3 fois/j IV si Gayet-Wernicke suspecté)\n- Hydratation, **potassium**, **magnésium**, glucose, vitamines\n- Environnement calme, éclairé, présence rassurante ; contention à éviter\n- Traiter l’infection ou le traumatisme associé',
      ],
      [
        'Après le sevrage',
        'Prévenir la rechute.',
        '- Prise en charge du trouble de l’usage de l’alcool (naltrexone, soutien)',
      ],
    ],
    molecules: [
      ['diazepam', 'premiere', 'Sevrage, delirium tremens, convulsions'],
      ['chlordiazepoxide', 'alternative', 'Sevrage'],
      ['vitamine-b1-thiamine', 'premiere', 'Avant tout glucose'],
      ['haloperidol', 'adjuvant', 'Hallucinations (avec benzodiazépine)'],
      ['chlorure-de-potassium', 'adjuvant', 'Hypokaliémie'],
      ['sulfate-de-magnesium', 'adjuvant', 'Hypomagnésémie'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Hydratation'],
    ],
    complications: [
      {
        nom: 'Convulsions de sevrage',
        description: '12–48 heures.',
        traitement: '- Diazépam',
        clinique: '- Crises généralisées',
        paraclinique: '',
      },
      {
        nom: 'Encéphalopathie de Gayet-Wernicke',
        fiche: 'encephalopathie-de-gayet-wernicke',
        description: 'Glucose sans thiamine.',
        traitement: '- Thiamine IV',
        clinique: '- Confusion, ataxie',
        paraclinique: '',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Troubles de conscience.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Décès',
        description: 'Delirium tremens non traité (jusqu’à 15 %).',
        traitement: '- Traitement précoce',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec un traitement adapté (mortalité < 2 %) ; récidive à chaque arrêt non encadré',
    urgences: ['etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Tremblements', 'tres_frequent'],
      ['Sueurs', 'tres_frequent'],
      ['Agitation', 'frequent'],
      ['Hallucinations', 'frequent'],
      ['Désorientation', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Palpitations', 'frequent'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Diazépam, thiamine, hydratation, transfert si sévère',
        '- Confusion, convulsions, fièvre, hallucinations',
      ],
      hgr: ['- Hospitalisation, diazépam IV, correction électrolytique', ''],
      tert: ['- Réanimation', ''],
    },
    alertes: { 'etat-de-mal-epileptique-urgence': 'Convulsions répétées de sevrage alcoolique' },
    formes: [
      {
        nom: 'Sevrage simple',
        type: 'commune',
        description: '6–24 heures après l’arrêt.',
        terrain: '- Personne dépendante à l’alcool',
        fonctionnels: '- Tremblements, anxiété, insomnie',
        generaux: '- Sueurs, tachycardie',
        physiques: '- Tremblement des extrémités',
        paraclinique: '- Hypokaliémie possible',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Delirium tremens',
        type: 'gravite',
        description: '48–96 heures.',
        terrain: '',
        fonctionnels: '- Hallucinations terrifiantes',
        generaux: '- Fièvre, déshydratation',
        physiques: '- Confusion, agitation',
        paraclinique: '- Désordres électrolytiques',
        etiologies: '',
        syndromes: ['syndrome-confusionnel', 'syndrome-de-deshydratation-extracellulaire'],
      },
    ],
  },

  // =================================================================== Gayet-Wernicke
  {
    ...ADD,
    slug: 'encephalopathie-de-gayet-wernicke',
    nom: 'Encéphalopathie de Gayet-Wernicke',
    resume:
      'Urgence neurologique par carence aiguë en thiamine (vitamine B1) chez l’alcoolique, le dénutri, la femme enceinte avec vomissements incoercibles, après chirurgie bariatrique : confusion, ataxie, troubles oculomoteurs (triade souvent incomplète) ; thiamine IV à fortes doses immédiatement, toujours avant le glucose ; sans traitement : syndrome de Korsakoff irréversible.',
    definition:
      'Encéphalopathie aiguë due à une carence en thiamine, associant classiquement confusion, ataxie et ophtalmoplégie, et pouvant évoluer vers un syndrome amnésique de Korsakoff.',
    physiopathologie:
      '## Mécanismes\n- La thiamine est un cofacteur du métabolisme du glucose ; sa carence provoque des lésions des corps mamillaires, du thalamus et du tronc cérébral\n- Un apport de **glucose sans thiamine** peut déclencher ou aggraver la maladie\n\n## Terrain\n- **Alcoolisme chronique**, malnutrition, vomissements prolongés (**hyperémèse gravidique**), VIH avancé, jeûne, dialyse, cancers',
    diagnostic:
      '## Clinique\n- **Confusion**, apathie, désorientation, troubles de la vigilance\n- **Ataxie** (marche instable, élargissement du polygone)\n- **Troubles oculomoteurs** : nystagmus, paralysie du VI, ophtalmoplégie\n- Triade complète dans moins de 20 % des cas : y penser devant **toute confusion chez un patient à risque**\n- Hypothermie, hypotension, neuropathie associées\n\n## Examens\n- Diagnostic clinique ; ne pas attendre de confirmation\n- Glycémie, ionogramme, magnésémie, bilan hépatique ; IRM si disponible',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie associée.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypomagnésémie (aggrave la carence).'],
      ['premiere_intention', 'bilan-hepatique', 'Hépatopathie alcoolique.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Hypersignaux des corps mamillaires et du thalamus.'],
    ],
    scores: [],
    differentiels: [
      ['sevrage-alcoolique-delirium-tremens', 'Tremblements, sueurs, hallucinations (souvent associé).'],
      ['Encéphalopathie hépatique', 'Astérixis, cirrhose.'],
      ['hematome-sous-dural', 'Chutes, signes focaux.'],
      ['avc-ischemique', 'Atteinte du tronc cérébral.'],
      ['hypoglycemie-adulte', 'Glycémie basse.'],
    ],
    etiologies:
      '## Causes\n- Alcoolisme, malnutrition, hyperémèse gravidique, vomissements prolongés, VIH, cancer, chirurgie digestive',
    principes: [
      [
        'Thiamine en urgence',
        'Prévenir les lésions irréversibles.',
        '- **Thiamine 500 mg IV** (en 30 min) 3 fois/j pendant 2 à 3 jours, puis 250 mg/j IV ou IM 3 à 5 jours, puis relais oral 100 mg/j\n- Toujours **avant ou avec le glucose**\n- Prévention chez tout patient à risque : 100 mg/j',
      ],
      [
        'Mesures associées',
        'Corriger les déficits.',
        '- **Magnésium** (cofacteur), autres vitamines, renutrition progressive (risque de syndrome de renutrition)\n- Prise en charge du sevrage alcoolique et du trouble de l’usage',
      ],
    ],
    molecules: [
      ['vitamine-b1-thiamine', 'premiere', 'Fortes doses IV'],
      ['sulfate-de-magnesium', 'adjuvant', 'Hypomagnésémie'],
      ['glucose-solute', 'adjuvant', 'Après la thiamine'],
      ['multivitamines', 'adjuvant', 'Carences associées'],
    ],
    complications: [
      {
        nom: 'Syndrome de Korsakoff',
        description: 'Amnésie antérograde, fabulations.',
        traitement: '- Thiamine prolongée, abstinence',
        clinique: '- Troubles de la mémoire récents',
        paraclinique: '',
      },
      {
        nom: 'Coma et décès',
        description: 'Absence de traitement.',
        traitement: '- Thiamine IV',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Les troubles oculomoteurs régressent en quelques heures ou jours sous thiamine ; ataxie et troubles de la mémoire peuvent persister',
    urgences: [],
    symptomes: [
      ['Désorientation', 'tres_frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Troubles visuels', 'frequent'],
      ['Troubles de la mémoire', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      "Adams and Victor's Principles of Neurology",
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Thiamine IM ou IV avant le glucose, transfert',
        '- Toute confusion chez un alcoolique ou dénutri',
      ],
      hgr: ['- Thiamine IV fortes doses, magnésium', ''],
      tert: ['- IRM, neurologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme de l’alcoolique',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Alcoolisme chronique, dénutrition',
        fonctionnels: '- Confusion, instabilité',
        generaux: '',
        physiques: '- Ataxie, nystagmus',
        paraclinique: '',
        etiologies: '- Carence en thiamine',
        syndromes: ['syndrome-confusionnel'],
      },
      {
        nom: 'Forme de la femme enceinte',
        type: 'terrain',
        description: 'Hyperémèse gravidique.',
        terrain: '- Grossesse, vomissements prolongés',
        fonctionnels: '- Confusion, troubles visuels',
        generaux: '- Déshydratation',
        physiques: '- Ophtalmoplégie',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Méthanol
  {
    ...ADD,
    slug: 'intoxication-au-methanol',
    nom: 'Intoxication au méthanol (alcool frelaté)',
    resume:
      'Intoxications souvent collectives par des alcools artisanaux ou frelatés : après un intervalle de 12–24 h, troubles visuels (« tempête de neige », cécité), céphalées, vomissements, douleurs abdominales, dyspnée (acidose), coma ; acidose métabolique à trou anionique élevé ; antidote (fomépizole ou éthanol), bicarbonate, hémodialyse, acide folique ; alerte sanitaire et recherche des autres cas.',
    definition:
      'Intoxication par le méthanol, présent dans des boissons alcoolisées frelatées ou artisanales mal distillées, dont les métabolites (acide formique) provoquent une acidose métabolique sévère et des lésions du nerf optique et du cerveau.',
    physiopathologie:
      '## Mécanismes\n- Métabolisation hépatique par l’alcool déshydrogénase en formaldéhyde puis **acide formique**\n- Acide formique : **acidose métabolique** à trou anionique élevé, toxicité mitochondriale sur la **rétine et le nerf optique**, nécrose des noyaux gris (putamen)\n- L’éthanol consommé simultanément retarde les symptômes (compétition)\n- Dose toxique : quelques dizaines de mL',
    diagnostic:
      '## Clinique\n- Consommation d’alcool artisanal ou de provenance douteuse, **plusieurs cas** simultanés\n- Intervalle libre de 12 à 24 heures\n- **Troubles visuels** : vision floue, « tempête de neige », photophobie, **cécité**, mydriase aréactive (mauvais pronostic)\n- Céphalées, vertiges, nausées, vomissements, douleurs abdominales\n- **Dyspnée de Kussmaul** (acidose), confusion, convulsions, **coma**\n\n## Examens\n- **Gaz du sang** : acidose métabolique sévère ; **ionogramme** : trou anionique élevé ; trou osmolaire si disponible\n- Glycémie, créatinine, lipase, fond d’œil (œdème papillaire)\n- Dosage du méthanol rarement disponible : traiter sur la clinique et l’acidose',
    examens: [
      ['confirmation', 'gaz-du-sang', 'Acidose métabolique.'],
      ['confirmation', 'ionogramme', 'Trou anionique élevé.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'creatinine', 'Avant dialyse.'],
      ['premiere_intention', 'lactates', 'Acidose.'],
      ['gravite', 'fond-d-oeil', 'Œdème papillaire.'],
      ['gravite', 'scanner-cerebral', 'Nécrose des noyaux gris, coma.'],
    ],
    scores: [],
    differentiels: [
      ['acidocetose-diabetique', 'Hyperglycémie, cétonurie.'],
      ['Acidocétose alcoolique', 'Glycémie normale ou basse, pas de troubles visuels.'],
      ['Intoxication à l’éthylène glycol', 'Antigel, insuffisance rénale, cristaux urinaires.'],
      ['intoxications-aigues-adulte', 'Autres toxiques.'],
      ['meningite-bacterienne', 'Fièvre, raideur de nuque.'],
      ['sepsis-et-choc-septique', 'Acidose lactique, foyer infectieux.'],
    ],
    etiologies:
      '## Sources\n- Alcools artisanaux mal distillés, alcools frelatés (ajout de méthanol industriel), alcool à brûler, produits ménagers',
    principes: [
      [
        'Antidote',
        'Bloquer la formation d’acide formique.',
        '- **Fomépizole** 15 mg/kg IV puis 10 mg/kg/12 h (rarement disponible)\n- À défaut : **éthanol** per os (whisky ou alcool fort à 40 % par sonde) ou IV, pour une éthanolémie de 1 à 1,5 g/L : dose de charge environ 0,8 g/kg d’éthanol pur puis entretien, avec surveillance de la glycémie et de la conscience',
      ],
      [
        'Correction de l’acidose et élimination',
        'Réduire la toxicité.',
        '- **Bicarbonate de sodium** IV si pH < 7,3\n- **Hémodialyse** si acidose sévère, troubles visuels, coma, convulsions ou insuffisance rénale\n- **Acide folique** ou acide folinique 50 mg IV toutes les 6 heures (élimination de l’acide formique)',
      ],
      [
        'Réanimation et santé publique',
        'Sauver et prévenir.',
        '- Voies aériennes, ventilation, traitement des convulsions (diazépam), glucose\n- **Alerte sanitaire**, recherche active des autres consommateurs, retrait des boissons suspectes',
      ],
    ],
    molecules: [
      ['fomepizole', 'premiere', 'Antidote'],
      ['bicarbonate-de-sodium', 'premiere', 'Acidose'],
      ['acide-folinique', 'premiere', 'Élimination de l’acide formique'],
      ['acide-folique', 'alternative', 'Élimination de l’acide formique'],
      ['diazepam', 'adjuvant', 'Convulsions'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['vitamine-b1-thiamine', 'adjuvant', 'Alcoolisme associé'],
    ],
    complications: [
      {
        nom: 'Cécité définitive',
        description: 'Atteinte du nerf optique.',
        traitement: '- Traitement précoce',
        clinique: '- Perte de vision',
        paraclinique: '- Fond d’œil',
      },
      {
        nom: 'Séquelles neurologiques',
        description: 'Nécrose des noyaux gris (parkinsonisme).',
        traitement: '- Rééducation',
        clinique: '- Rigidité, lenteur',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Formes graves.',
        traitement: '- Dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Décès',
        description: 'Acidose sévère, coma.',
        traitement: '- Dialyse, antidote',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 20 à 40 % lors des épidémies ; meilleur si l’antidote et la dialyse sont précoces ; séquelles visuelles fréquentes',
    urgences: [],
    symptomes: [
      ['Troubles visuels', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Reconnaître, éthanol per os si disponible, transfert, alerte',
        '- Troubles visuels ou dyspnée après alcool artisanal',
      ],
      hgr: ['- Gaz du sang, bicarbonate, éthanol, acide folique', '- Dialyse'],
      tert: ['- Hémodialyse, réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Intoxication modérée',
        type: 'commune',
        description: 'Prise en charge précoce.',
        terrain: '- Consommateur d’alcool artisanal',
        fonctionnels: '- Céphalées, nausées, vision floue',
        generaux: '',
        physiques: '',
        paraclinique: '- Acidose modérée',
        etiologies: '- Méthanol',
        syndromes: [],
      },
      {
        nom: 'Intoxication grave',
        type: 'gravite',
        description: 'Acidose sévère.',
        terrain: '',
        fonctionnels: '- Cécité',
        generaux: '- Respiration de Kussmaul',
        physiques: '- Coma, mydriase aréactive',
        paraclinique: '- pH < 7,1',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Intoxication collective',
        type: 'etiologique',
        description: 'Épidémie.',
        terrain: '- Plusieurs consommateurs du même lot',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Alcool frelaté',
        syndromes: [],
      },
    ],
  },
];
