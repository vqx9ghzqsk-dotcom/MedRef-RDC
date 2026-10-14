'use strict';

/**
 * Lot 75 (phase 2, addictologie) — usage de solvants, usage de cocaïne et d'amphétamines, dépendance
 * aux benzodiazépines, jeu pathologique. Rédigé par IA (mhGAP, OMS) : à valider.
 */

const ADD = { departement: 'neuropsychiatrie', specialite: 'Addictologie' };

module.exports = [
  // =================================================================== Usage de solvants
  {
    ...ADD,
    slug: 'usage-de-solvants',
    nom: 'Usage de solvants',
    resume:
      'Inhalation volontaire de produits volatils (colle, essence, diluants, vernis, aérosols), très répandue chez les enfants et adolescents des rues de Kinshasa et des grandes villes car bon marché et accessible : ivresse rapide et brève (euphorie, vertiges, troubles de l’élocution, ataxie), hallucinations, puis somnolence et céphalées ; risques aigus graves : mort subite par arythmie (« sudden sniffing death »), asphyxie, inhalation de vomissements, brûlures, accidents, coma ; usage chronique : atteinte cérébrale (troubles cognitifs, ataxie cérébelleuse), neuropathie (hexane), atteintes hépatiques, rénales (acidose tubulaire du toluène) et médullaires (anémie aplasique du benzène) ; prise en charge : réanimation et surveillance cardiaque en aigu, éviter les catécholamines, intervention brève, approche psychosociale centrée sur la situation de rue (abri, alimentation, réinsertion familiale et scolaire, protection contre les violences).',
    definition:
      'Consommation par inhalation de substances volatiles (solvants, carburants, colles, gaz d’aérosols) à des fins psychoactives.',
    physiopathologie:
      '## Mécanismes\n- Produits **lipophiles** à effet dépresseur du SNC (proche de l’alcool) ; sensibilisation du myocarde aux catécholamines → **arythmies** fatales\n\n## Toxicité chronique\n- **Toluène** : leucoencéphalopathie, ataxie cérébelleuse, acidose tubulaire rénale, hypokaliémie\n- **n-Hexane** : neuropathie périphérique ; **benzène** : aplasie médullaire, leucémie\n- **Essence au plomb** : encéphalopathie saturnine\n\n## Facteurs\n- **Enfants des rues**, pauvreté, faim (coupe-faim), violences, abandon, pairs',
    diagnostic:
      '## Aigu\n- Odeur de solvant, taches autour de la bouche et du nez (« eczéma du sniffeur »), conjonctivite\n- Euphorie, vertiges, élocution difficile, ataxie, nystagmus, hallucinations, somnolence, céphalées, vomissements\n- Troubles du rythme, convulsions, coma, détresse respiratoire\n\n## Chronique\n- Troubles cognitifs, ataxie, neuropathie, perte de poids, troubles du comportement\n\n## Examens\n- **ECG** et surveillance cardiaque, ionogramme (hypokaliémie, acidose), glycémie, créatinine, bilan hépatique, NFS\n- Évaluation sociale, recherche de violences et d’exploitation, VIH, IST, grossesse',
    examens: [
      ['gravite', 'ecg', 'Troubles du rythme.'],
      ['gravite', 'ionogramme', 'Hypokaliémie, acidose.'],
      ['gravite', 'gaz-du-sang', 'Acidose, hypoxie.'],
      ['etiologique', 'bilan-hepatique', 'Hépatotoxicité.'],
      ['etiologique', 'creatinine', 'Atteinte rénale.'],
      ['etiologique', 'nfs', 'Aplasie (benzène).'],
      ['etiologique', 'tdr-vih', 'Comportements à risque.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['intoxications-aigues-adulte', 'Autres intoxications.'],
      ['intoxications-enfant', 'Intoxication accidentelle.'],
      ['usage-substances-adolescent', 'Autres substances.'],
      ['troubles-des-conduites', 'Troubles du comportement associés.'],
    ],
    etiologies: '## Produits\n- Colles, essence, diluants, vernis, aérosols, gaz de briquet',
    principes: [
      [
        'Intoxication aiguë',
        'Calmer, surveiller.',
        '- Environnement calme (éviter l’agitation et l’effort : risque d’arythmie), oxygène, position latérale\n- **Monitorage cardiaque**, correction de l’hypokaliémie ; **éviter l’adrénaline** et les bêta-agonistes sauf arrêt cardiaque\n- Convulsions : benzodiazépine',
      ],
      [
        'Prise en charge psychosociale',
        'Essentielle.',
        '- **Intervention brève**, entretien motivationnel, activités alternatives\n- Besoins de base (abri, nourriture, soins), **protection de l’enfance**, réinsertion familiale et scolaire, centres d’accueil\n- Dépistage VIH, IST, violences sexuelles ; contraception',
      ],
      [
        'Complications chroniques',
        'Bilan.',
        '- Neuropathie, ataxie, troubles cognitifs : rééducation ; atteintes rénales et hépatiques : suivi',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'Intoxication aiguë'],
      ['diazepam', 'premiere', 'Agitation, convulsions'],
      ['chlorure-de-potassium', 'adjuvant', 'Hypokaliémie'],
    ],
    complications: [
      {
        nom: 'Mort subite par arythmie',
        description: 'Sensibilisation du myocarde.',
        traitement: '- Réanimation',
        clinique: '- Collapsus après effort ou frayeur',
        paraclinique: '- ECG',
      },
      {
        nom: 'Encéphalopathie et troubles cognitifs',
        description: 'Usage chronique.',
        traitement: '- Arrêt, rééducation',
        clinique: '- Ataxie, troubles de mémoire',
        paraclinique: '- IRM',
      },
      {
        nom: 'Neuropathie périphérique',
        fiche: 'neuropathies-peripheriques',
        description: 'Hexane.',
        traitement: '- Arrêt',
        clinique: '- Faiblesse distale',
        paraclinique: '',
      },
      {
        nom: 'Violences et exploitation',
        fiche: 'maltraitance-enfant',
        description: 'Enfants des rues.',
        traitement: '- Protection',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Récupération partielle à l’arrêt ; pronostic lié à la situation sociale',
    urgences: [],
    symptomes: [
      ['Euphorie', 'frequent'],
      ['Vertiges', 'frequent'],
      ['Hallucinations', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Troubles du comportement', 'frequent'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Repérage, intervention brève, orientation sociale', '- Malaise, troubles du rythme, coma'],
      hgr: ['- Surveillance cardiaque, bilan', ''],
      tert: ['- Addictologie, neurologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Usage chez l’enfant des rues',
        type: 'commune',
        description: 'Colle, essence.',
        terrain: '- Enfant, adolescent de la rue',
        fonctionnels: '- Euphorie, coupe-faim',
        generaux: '- Dénutrition',
        physiques: '- Eczéma péribuccal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Intoxication aiguë grave',
        type: 'gravite',
        description: 'Arythmie, coma.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Coma, convulsions',
        paraclinique: '- ECG',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Usage de cocaïne et d'amphétamines
  {
    ...ADD,
    slug: 'usage-de-cocaine-et-d-amphetamines',
    nom: 'Usage de cocaïne et d’amphétamines',
    resume:
      'Psychostimulants (cocaïne en poudre ou crack, amphétamines et méthamphétamine, ecstasy, mais aussi stimulants détournés) dont l’usage progresse dans les villes : euphorie, énergie, insomnie, perte d’appétit, logorrhée, puis « descente » dysphorique ; intoxication : agitation, paranoïa, hallucinations, tachycardie, HTA, mydriase, sueurs, hyperthermie, convulsions ; complications graves : syndrome coronarien aigu (douleur thoracique chez un sujet jeune), AVC, dissection aortique, arythmies, rhabdomyolyse, insuffisance rénale, hyponatrémie (ecstasy), psychose ; dépendance avec craving intense, sevrage dépressif avec risque suicidaire ; prise en charge en aigu : benzodiazépines en première intention (agitation, HTA, tachycardie), refroidissement, éviter les bêtabloquants seuls ; addictologie : TCC, gestion des contingences ; pas de traitement de substitution validé.',
    definition:
      'Consommation de psychostimulants (cocaïne, amphétamines et dérivés) avec intoxications aiguës, complications somatiques et psychiatriques et risque de dépendance.',
    physiopathologie:
      '## Mécanismes\n- **Cocaïne** : blocage de la recapture de la dopamine, noradrénaline et sérotonine ; **amphétamines** : libération massive de ces monoamines\n- Effets **sympathomimétiques** : vasoconstriction, tachycardie, HTA, hyperthermie, spasme coronaire, thromboses\n- **Ecstasy** : effet sérotoninergique (hyperthermie, hyponatrémie)',
    diagnostic:
      '## Intoxication\n- **Agitation**, euphorie ou anxiété, paranoïa, **hallucinations**, comportements violents\n- **Tachycardie**, **HTA**, **mydriase**, sueurs, **hyperthermie**, tremblements, convulsions\n- **Douleur thoracique**, déficit neurologique, céphalée brutale\n\n## Sevrage\n- Fatigue, hypersomnie, faim, **dépression**, idées suicidaires, craving\n\n## Examens\n- **ECG** et **troponine** (douleur thoracique), **CPK** (rhabdomyolyse), ionogramme (hyponatrémie), créatinine, glycémie, température\n- **Scanner cérébral** si déficit ou céphalée brutale ; **dépistage urinaire**\n- VIH, hépatites, IST',
    examens: [
      ['premiere_intention', 'ecg', 'Ischémie, arythmie.'],
      ['gravite', 'troponine', 'Syndrome coronarien.'],
      ['gravite', 'cpk', 'Rhabdomyolyse.'],
      ['gravite', 'ionogramme', 'Hyponatrémie, hyperkaliémie.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['deuxieme_intention', 'depistage-urinaire-drogues', 'Confirmation.'],
      ['gravite', 'scanner-cerebral', 'AVC.'],
      ['etiologique', 'tdr-vih', 'Comportements à risque.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['syndrome-malin-des-neuroleptiques', 'Rigidité, fièvre sous neuroleptiques.'],
      ['hyperthyroidie-basedow', 'Tachycardie, agitation.'],
      ['trouble-bipolaire', 'Épisode maniaque.'],
      ['schizophrenie', 'Psychose primaire.'],
      ['sevrage-alcoolique-delirium-tremens', 'Sevrage alcoolique.'],
      ['syndrome-serotoninergique', 'Ecstasy et sérotoninergiques.'],
    ],
    etiologies: '## Produits\n- Cocaïne, crack, amphétamines, méthamphétamine, ecstasy',
    principes: [
      [
        'Intoxication aiguë',
        'Benzodiazépines.',
        '- **Diazépam** ou **lorazépam** IV par titration : agitation, tachycardie, HTA, convulsions\n- **Refroidissement** externe, hydratation ; rhabdomyolyse : remplissage abondant\n- HTA persistante : nicardipine ou **trinitrine** ; **éviter les bêtabloquants seuls**\n- Douleur thoracique : aspirine, trinitrine, benzodiazépine, filière coronarienne\n- Psychose : benzodiazépine puis halopéridol si nécessaire',
      ],
      [
        'Dépendance',
        'Psychosocial.',
        '- **TCC**, entretien motivationnel, gestion des contingences, groupes d’entraide\n- Traitement de la dépression du sevrage, évaluation du **risque suicidaire**\n- Pas de traitement de substitution validé',
      ],
      [
        'Réduction des risques',
        'Prévention.',
        '- Dépistage VIH, hépatites, IST ; matériel stérile ; hydratation et repos (ecstasy)',
      ],
    ],
    molecules: [
      ['diazepam', 'premiere', 'Agitation, convulsions, signes adrénergiques'],
      ['lorazepam', 'alternative', 'Agitation'],
      ['haloperidol', 'alternative', 'Psychose persistante'],
      ['trinitrine', 'premiere', 'Douleur thoracique, HTA'],
      ['nicardipine', 'alternative', 'HTA sévère'],
      ['acide-acetylsalicylique', 'adjuvant', 'Syndrome coronarien'],
    ],
    complications: [
      {
        nom: 'Syndrome coronarien aigu',
        fiche: 'syndrome-coronarien-aigu-st-plus',
        description: 'Spasme, thrombose.',
        traitement: '- Benzodiazépines, trinitrine, angioplastie',
        clinique: '- Douleur thoracique',
        paraclinique: '- ECG, troponine',
      },
      {
        nom: 'AVC',
        fiche: 'avc-du-sujet-jeune',
        description: 'Ischémique ou hémorragique.',
        traitement: '- Filière AVC',
        clinique: '- Déficit',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Rhabdomyolyse et insuffisance rénale',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hyperthermie, agitation.',
        traitement: '- Remplissage',
        clinique: '- Urines foncées',
        paraclinique: '- CPK',
      },
      {
        nom: 'Psychose et suicide',
        fiche: 'risque-suicidaire',
        description: 'Intoxication, sevrage.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Complications cardiovasculaires potentiellement mortelles ; dépendance à rechutes',
    urgences: ['urgence-hypertensive'],
    symptomes: [
      ['Agitation', 'tres_frequent'],
      ['Euphorie', 'frequent'],
      ['Palpitations', 'frequent'],
      ['Hallucinations', 'frequent'],
      ['Douleur thoracique', 'occasionnel'],
      ['Hyperthermie', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
      ['Sueurs', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'AHA — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Benzodiazépine, référence urgente si douleur thoracique ou déficit',
        '- Douleur thoracique, hyperthermie, convulsions',
      ],
      hgr: ['- ECG, troponine, CPK, réanimation', ''],
      tert: ['- Cardiologie interventionnelle, addictologie', ''],
    },
    alertes: { 'urgence-hypertensive': 'HTA sévère sous psychostimulants' },
    formes: [
      {
        nom: 'Intoxication aiguë',
        type: 'commune',
        description: 'Syndrome sympathomimétique.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Agitation, palpitations',
        generaux: '- Hyperthermie',
        physiques: '- Mydriase, tachycardie, HTA',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Complication cardiovasculaire',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Douleur thoracique',
        generaux: '',
        physiques: '',
        paraclinique: '- ECG, troponine',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Psychose induite',
        type: 'etiologique',
        description: 'Paranoïa.',
        terrain: '- Usage intensif',
        fonctionnels: '- Délire de persécution, hallucinations',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dépendance aux benzodiazépines
  {
    ...ADD,
    slug: 'dependance-aux-benzodiazepines',
    nom: 'Dépendance aux benzodiazépines',
    resume:
      'Dépendance fréquente, souvent iatrogène (prescriptions prolongées pour l’insomnie ou l’anxiété, automédication avec des comprimés vendus hors circuit : diazépam, bromazépam, alprazolam, clonazépam), touchant particulièrement les femmes et les sujets âgés, ou associée à l’alcool et aux opioïdes : tolérance, besoin de poursuivre, sevrage à l’arrêt (anxiété rebond, insomnie, irritabilité, tremblements, sueurs, troubles perceptifs, jusqu’aux convulsions et à la confusion en cas d’arrêt brutal de doses élevées) ; complications : chutes et fractures, troubles cognitifs, accidents, dépression respiratoire avec les opioïdes, surdosage (flumazénil prudent) ; prise en charge : information, sevrage progressif sur plusieurs semaines à mois (réduction de 10–25 % toutes les 2 semaines, relais éventuel par le diazépam), traitement de l’insomnie et de l’anxiété sous-jacentes par TCC et antidépresseurs, prévention par des prescriptions courtes.',
    definition:
      'Usage prolongé de benzodiazépines avec tolérance, perte de contrôle et syndrome de sevrage à l’arrêt, avec ou sans augmentation des doses.',
    physiopathologie:
      '## Mécanismes\n- Modulation des récepteurs **GABA-A** → adaptation (tolérance) après quelques semaines → **sevrage** à l’arrêt (hyperexcitabilité)\n- Demi-vie courte (alprazolam, lorazépam) : sevrage plus rapide et intense\n\n## Facteurs\n- Prescription prolongée (> 4 semaines), automédication, vente libre, insomnie et anxiété chroniques, sujet âgé, alcool, opioïdes',
    diagnostic:
      '## Clinique\n- Usage > 1 mois, difficultés à arrêter, augmentation des doses, consultations multiples, achats hors circuit\n- **Sevrage** (1–10 jours après l’arrêt) : anxiété, insomnie, irritabilité, tremblements, sueurs, palpitations, hypersensibilité sensorielle, dépersonnalisation ; **convulsions** et **confusion** en cas d’arrêt brutal\n\n## Évaluation\n- Molécule, dose, durée, indication initiale, alcool et opioïdes associés\n- Anxiété, dépression, insomnie sous-jacentes ; antécédents de convulsions ; risque suicidaire\n- Sujet âgé : chutes, troubles cognitifs',
    examens: [
      ['deuxieme_intention', 'depistage-urinaire-drogues', 'Benzodiazépines et autres substances.'],
      ['etiologique', 'bilan-hepatique', 'Alcool associé.'],
    ],
    scores: [],
    differentiels: [
      ['trouble-anxieux-generalise', 'Anxiété sous-jacente.'],
      ['insomnie', 'Insomnie chronique.'],
      ['trouble-de-l-usage-de-l-alcool', 'Dépendance croisée.'],
      ['usage-d-opioides', 'Association dangereuse.'],
      ['depression', 'Dépression masquée.'],
    ],
    etiologies: '## Causes\n- Prescriptions prolongées, automédication, insomnie, anxiété, alcool',
    principes: [
      [
        'Sevrage progressif',
        'Ne jamais arrêter brutalement.',
        '- **Réduction de 10–25 % de la dose toutes les 2 semaines**, plus lentement en fin de sevrage (semaines à mois)\n- Relais possible par le **diazépam** (demi-vie longue) pour les molécules de courte durée d’action\n- Hospitalisation si doses très élevées, antécédents de convulsions, alcool associé',
      ],
      [
        'Traitement de la cause',
        'Durablement.',
        '- **TCC** de l’insomnie et de l’anxiété, hygiène du sommeil\n- **ISRS** (sertraline) si anxiété ou dépression ; éviter de remplacer par un autre hypnotique',
      ],
      [
        'Prévention',
        'Prescription.',
        '- Prescriptions **courtes** (≤ 2–4 semaines), information du patient, pas de renouvellement automatique\n- Sujet âgé : éviter ; lutte contre la vente hors circuit',
      ],
    ],
    molecules: [
      ['diazepam', 'premiere', 'Relais pour le sevrage progressif'],
      ['sertraline', 'premiere', 'Anxiété, dépression sous-jacentes'],
      ['flumazenil', 'adjuvant', 'Surdosage grave (prudence : convulsions)'],
      ['melatonine', 'adjuvant', 'Insomnie du sujet âgé'],
    ],
    complications: [
      {
        nom: 'Convulsions et confusion de sevrage',
        fiche: 'etat-de-mal-epileptique',
        description: 'Arrêt brutal.',
        traitement: '- Réintroduction, sevrage progressif',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Chutes et fractures',
        fiche: 'fracture-col-du-femur',
        description: 'Sujet âgé.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression respiratoire',
        fiche: 'intoxication-aux-psychotropes',
        description: 'Associations aux opioïdes ou à l’alcool.',
        traitement: '- Ventilation, flumazénil prudent',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Troubles cognitifs',
        fiche: 'troubles-cognitifs-legers',
        description: 'Usage prolongé.',
        traitement: '- Sevrage',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Sevrage réussi chez la majorité avec une décroissance lente et un accompagnement ; amélioration cognitive après l’arrêt',
    urgences: ['etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Anxiété', 'tres_frequent'],
      ['Troubles du sommeil', 'tres_frequent'],
      ['Tremblements', 'frequent'],
      ['Irritabilité', 'frequent'],
      ['Troubles de la mémoire', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Information, plan de décroissance, prévention', '- Sevrage brutal, convulsions'],
      hgr: ['- Sevrage hospitalier si doses élevées', ''],
      tert: ['- Addictologie', ''],
    },
    alertes: { 'etat-de-mal-epileptique-urgence': 'Convulsions de sevrage répétées' },
    formes: [
      {
        nom: 'Dépendance à doses thérapeutiques',
        type: 'commune',
        description: 'Iatrogène.',
        terrain: '- Femme, sujet âgé',
        fonctionnels: '- Impossibilité d’arrêter',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Usage à fortes doses',
        type: 'gravite',
        description: 'Polyconsommation.',
        terrain: '- Alcool, opioïdes',
        fonctionnels: '- Achats hors circuit',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Jeu pathologique
  {
    ...ADD,
    slug: 'jeu-pathologique',
    nom: 'Jeu pathologique',
    resume:
      'Addiction comportementale aux jeux d’argent et de hasard, en forte expansion en RDC avec les paris sportifs (agences, téléphones mobiles), les loteries et les machines : pratique persistante malgré les conséquences, besoin de jouer des sommes croissantes, tentatives répétées et infructueuses d’arrêter, irritabilité à l’arrêt, « se refaire » après une perte, mensonges, emprunts et dettes, détournement d’argent, conflits familiaux et violences, absentéisme scolaire chez les jeunes ; comorbidités : dépression, anxiété, alcool, tabac, TDAH, risque suicidaire élevé (dettes) ; repérage (questions simples sur le jeu et l’argent), entretien motivationnel, TCC (distorsions cognitives sur le hasard), aide à la gestion financière (tiers de confiance, limitation de l’accès à l’argent, auto-exclusion), soutien à la famille, traitement des comorbidités.',
    definition:
      'Pratique inadaptée, persistante et répétée des jeux d’argent et de hasard, entraînant une souffrance ou une altération significative du fonctionnement personnel, familial, social ou professionnel.',
    physiopathologie:
      '## Mécanismes\n- Activation du **système de récompense** (dopamine) par le gain incertain, renforcement intermittent\n- **Distorsions cognitives** : illusion de contrôle, croyance en la chance, « se refaire »\n\n## Facteurs\n- Accessibilité (paris sportifs mobiles, agences), publicité, pauvreté et espoir de gain rapide, jeunes hommes, impulsivité, TDAH, dépression, alcool',
    diagnostic:
      '## Critères\n- Besoin de jouer des sommes croissantes, agitation ou irritabilité à l’arrêt, échecs répétés pour réduire\n- Préoccupation constante, jeu pour fuir les problèmes, **« se refaire »** après les pertes\n- **Mensonges**, mise en danger des relations, du travail ou des études, recours à autrui pour l’argent (**dettes**)\n\n## Évaluation\n- Fréquence, sommes, dettes, conséquences familiales (violences, privations des enfants)\n- **Risque suicidaire** (dettes, honte), dépression, alcool, autres substances',
    examens: [],
    scores: [],
    differentiels: [
      ['trouble-bipolaire', 'Jeu lors d’un épisode maniaque.'],
      ['trouble-de-l-usage-de-l-alcool', 'Comorbidité.'],
      ['troubles-de-la-personnalite', 'Personnalité dyssociale.'],
      ['syndromes-parkinsoniens-medicamenteux', 'Jeu induit par un agoniste dopaminergique.'],
    ],
    etiologies: '## Facteurs\n- Accessibilité, publicité, pauvreté, impulsivité, comorbidités psychiatriques',
    principes: [
      [
        'Intervention',
        'Motivation.',
        '- **Entretien motivationnel**, information sur le hasard et les probabilités\n- **TCC** : correction des distorsions cognitives, gestion des envies, prévention des rechutes\n- Groupes d’entraide',
      ],
      [
        'Mesures pratiques',
        'Limiter l’accès.',
        '- Gestion de l’argent par un **tiers de confiance**, limitation des moyens de paiement mobile, **auto-exclusion** des agences et applications\n- Plan de remboursement des dettes, aide sociale',
      ],
      [
        'Famille et comorbidités',
        'Soutien.',
        '- Soutien et protection de la famille (violences, enfants)\n- Traitement de la **dépression** (ISRS), de l’alcool, du TDAH ; évaluation du **risque suicidaire**\n- Arrêt d’un agoniste dopaminergique en cause ; naltrexone dans les formes sévères (centre spécialisé)',
      ],
    ],
    molecules: [
      ['naltrexone', 'alternative', 'Formes sévères (centre spécialisé)'],
      ['sertraline', 'alternative', 'Dépression ou anxiété associées'],
    ],
    complications: [
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Dettes, honte.',
        traitement: '- Évaluation, prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Ruine financière et violences familiales',
        description: 'Dettes.',
        traitement: '- Aide sociale, protection',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression et alcool',
        fiche: 'depression',
        description: 'Comorbidités.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Évolution chronique avec rechutes ; amélioration avec la TCC et la limitation de l’accès',
    urgences: [],
    symptomes: [
      ['Troubles du comportement', 'tres_frequent'],
      ['Anxiété', 'frequent'],
      ['Irritabilité', 'frequent'],
      ['Humeur dépressive', 'frequent'],
      ['Idées suicidaires', 'occasionnel'],
      ['Troubles du sommeil', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'mhGAP Intervention Guide 2.0'],
    niveaux: {
      cs: ['- Repérage, conseil, soutien familial', '- Idées suicidaires'],
      hgr: ['- Prise en charge psychologique', ''],
      tert: ['- Addictologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Paris sportifs du jeune adulte',
        type: 'commune',
        description: 'Téléphone, agences.',
        terrain: '- Homme jeune, étudiant',
        fonctionnels: '- Jeu quotidien, dettes',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Jeu pathologique avec dettes et risque suicidaire',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Dettes, désespoir',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
