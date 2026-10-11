'use strict';

/**
 * Lot 32 (fin de la phase 1 : urgences neuropsychiatriques, psychotraumatologie) — intoxication
 * aux psychotropes, violences sexuelles : prise en charge psychologique, traumatismes liés aux
 * conflits armés. Rédigé par IA (OMS mhGAP, IASC, ouvrages de référence) : à valider.
 */

const URG = { departement: 'neuropsychiatrie', specialite: 'Urgences neuropsychiatriques' };
const PTR = { departement: 'neuropsychiatrie', specialite: 'Psychotraumatologie' };

module.exports = [
  // =================================================================== Intoxication aux psychotropes
  {
    ...URG,
    slug: 'intoxication-aux-psychotropes',
    nom: 'Intoxication aux psychotropes',
    resume:
      'Intoxications volontaires ou accidentelles par benzodiazépines, antidépresseurs tricycliques (amitriptyline : troubles du rythme, convulsions), neuroleptiques, carbamazépine, phénobarbital, lithium : ABC, glycémie, ECG ; charbon activé si < 1 h et voies aériennes protégées ; bicarbonate de sodium si QRS large (tricycliques) ; flumazénil rarement ; surveillance, puis évaluation du risque suicidaire.',
    definition:
      'Intoxication aiguë par un ou plusieurs médicaments psychotropes (anxiolytiques, hypnotiques, antidépresseurs, antipsychotiques, thymorégulateurs, antiépileptiques), le plus souvent dans un contexte de tentative de suicide.',
    physiopathologie:
      '## Toxidromes\n- **Benzodiazépines** : sédation, coma calme, dépression respiratoire (surtout avec alcool ou opioïdes)\n- **Tricycliques** (amitriptyline) : syndrome anticholinergique (mydriase, tachycardie, rétention, peau sèche), **convulsions**, **QRS large**, troubles du rythme, hypotension — les plus dangereux\n- **Neuroleptiques** : sédation, hypotension, dystonies, QT long, syndrome malin\n- **Phénobarbital, carbamazépine** : coma, dépression respiratoire, ataxie\n- **Lithium** : tremblements, diarrhée, confusion, convulsions (surtout intoxication chronique)\n- **ISRS** : souvent bénins ; syndrome sérotoninergique',
    diagnostic:
      '## Évaluation\n- Produits, doses, heure, associations (alcool, paracétamol), boîtes vides\n- Conscience (Glasgow), respiration, pupilles, tension, pouls, température, glycémie\n- **ECG** : QRS > 100 ms, QT long, troubles du rythme\n- Signes anticholinergiques, convulsions\n\n## Examens\n- Glycémie, ionogramme, créatinine, gaz du sang, ECG, lithémie si lithium, paracétamolémie si disponible, β-hCG',
    examens: [
      ['premiere_intention', 'ecg', 'QRS large, QT long, troubles du rythme.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'ionogramme', 'Kaliémie, natrémie.'],
      ['gravite', 'gaz-du-sang', 'Hypoventilation, acidose.'],
      ['premiere_intention', 'creatinine', 'Élimination.'],
      ['etiologique', 'lithemie', 'Intoxication au lithium.'],
      ['etiologique', 'bilan-hepatique', 'Paracétamol associé.'],
      ['etiologique', 'beta-hcg', 'Femme en âge de procréer.'],
    ],
    scores: [],
    differentiels: [
      ['intoxications-aigues-adulte', 'Autres toxiques (organophosphorés, paracétamol…).'],
      ['hypoglycemie-adulte', 'Glycémie basse.'],
      ['coma-demarche', 'Autres causes de coma.'],
      ['syndrome-malin-des-neuroleptiques', 'Fièvre, rigidité, CPK.'],
    ],
    etiologies:
      '## Contexte\n- Tentative de suicide (dépression, crise), surdosage accidentel (enfants, sujets âgés), mésusage',
    principes: [
      [
        'Mesures générales',
        'Stabiliser.',
        '- Voies aériennes, position latérale, oxygène, ventilation si besoin ; voie veineuse, remplissage si hypotension\n- Glycémie ; surveillance continue (conscience, respiration, ECG)\n- **Charbon activé** 50 g si ingestion < 1 heure et voies aériennes protégées',
      ],
      [
        'Traitements spécifiques',
        'Antidotes et correctifs.',
        '- **Tricycliques** : **bicarbonate de sodium** 1–2 mmol/kg IV si QRS > 100 ms, arythmie ou hypotension ; convulsions : **diazépam** ; éviter le flumazénil\n- **Benzodiazépines** : traitement symptomatique ; **flumazénil** seulement si intoxication pure avec dépression respiratoire, sans tricycliques ni épilepsie\n- Dystonie : trihexyphénidyle ou prométhazine\n- Lithium : hydratation, arrêt, hémodialyse si grave\n- Opioïdes associés : **naloxone**',
      ],
      [
        'Après la phase aiguë',
        'Prévenir la récidive.',
        '- **Évaluation du risque suicidaire** avant la sortie, traitement de la cause, remise de petites quantités de médicaments, implication de la famille',
      ],
    ],
    molecules: [
      ['charbon-active', 'premiere', 'Décontamination digestive'],
      ['bicarbonate-de-sodium', 'premiere', 'Tricycliques : QRS large'],
      ['flumazenil', 'alternative', 'Benzodiazépines (indications restreintes)'],
      ['naloxone', 'adjuvant', 'Opioïdes associés'],
      ['diazepam', 'premiere', 'Convulsions'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['acetylcysteine', 'adjuvant', 'Paracétamol associé'],
    ],
    complications: [
      {
        nom: 'Troubles du rythme et choc',
        description: 'Tricycliques, neuroleptiques.',
        traitement: '- Bicarbonate, remplissage, vasopresseurs',
        clinique: '- Hypotension, tachycardie',
        paraclinique: '- ECG',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Coma.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, encombrement',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Récidive suicidaire',
        fiche: 'risque-suicidaire',
        description: 'Risque élevé.',
        traitement: '- Suivi psychiatrique',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Favorable pour la plupart (benzodiazépines) ; mortalité notable des tricycliques et des associations',
    urgences: ['etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Troubles de la conscience', 'tres_frequent'],
      ['Convulsions', 'occasionnel'],
      ['Palpitations', 'frequent'],
      ['Hypotension', 'frequent'],
      ['Idées suicidaires', 'frequent'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- ABC, glycémie, charbon si précoce, transfert',
        '- Troubles de conscience, convulsions, tricycliques',
      ],
      hgr: ['- ECG, bicarbonate, surveillance, évaluation psychiatrique', '- Ventilation, dialyse'],
      tert: ['- Réanimation, toxicologie', ''],
    },
    alertes: { 'etat-de-mal-epileptique-urgence': 'Convulsions répétées après intoxication médicamenteuse' },
    formes: [
      {
        nom: 'Intoxication aux benzodiazépines',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Tentative de suicide',
        fonctionnels: '- Somnolence',
        generaux: '- Constantes stables',
        physiques: '- Coma calme, hypotonie',
        paraclinique: '- ECG normal',
        etiologies: '- Diazépam, alprazolam',
        syndromes: [],
      },
      {
        nom: 'Intoxication aux tricycliques',
        type: 'gravite',
        description: 'Cardiotoxicité.',
        terrain: '- Amitriptyline',
        fonctionnels: '- Agitation puis coma',
        generaux: '- Tachycardie, hypotension',
        physiques: '- Mydriase, rétention, convulsions',
        paraclinique: '- QRS > 100 ms',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Intoxication au lithium',
        type: 'etiologique',
        description: 'Souvent chronique.',
        terrain: '- Déshydratation, AINS, diurétiques',
        fonctionnels: '- Diarrhée, tremblements',
        generaux: '',
        physiques: '- Ataxie, confusion',
        paraclinique: '- Lithémie élevée',
        etiologies: '',
        syndromes: ['syndrome-confusionnel'],
      },
    ],
  },

  // =================================================================== Violences sexuelles psy
  {
    ...PTR,
    slug: 'violences-sexuelles-prise-en-charge-psychologique',
    nom: 'Violences sexuelles : prise en charge psychologique',
    resume:
      'Volet psychologique de la prise en charge des survivant(e)s de violences sexuelles, très nombreux en RDC (conflits, violences domestiques) : accueil confidentiel et sans jugement, premiers secours psychologiques, soins médicaux dans les 72 heures (PEP, contraception d’urgence), puis soutien psychosocial, TCC centrée sur le trauma, traitement de l’ESPT et de la dépression ; orientation juridique et socio-économique selon le souhait de la personne (approche holistique).',
    definition:
      'Ensemble des interventions de santé mentale et de soutien psychosocial destinées aux personnes ayant subi une violence sexuelle, intégrées à la prise en charge médicale, juridique et socio-économique.',
    physiopathologie:
      '## Conséquences psychologiques\n- Réactions aiguës : sidération, peur, honte, culpabilité, colère, troubles du sommeil\n- **ESPT**, **dépression**, anxiété, idées suicidaires, usage d’alcool, plaintes somatiques\n- Rejet par le conjoint ou la communauté, enfants nés du viol, grossesses non désirées, IST, fistules\n\n## Facteurs aggravants\n- Violences répétées, enfants, absence de soutien, stigmatisation, impunité',
    diagnostic:
      '## Accueil (principes)\n- **Sécurité**, **confidentialité**, **respect** des choix, **non-discrimination** ; entretien par une personne du sexe choisi si possible\n- Ne pas forcer le récit ; consentement éclairé pour chaque examen et chaque démarche\n\n## Évaluation\n- Besoins médicaux urgents (délai depuis l’agression : < 72 h pour la PEP, < 120 h pour la contraception d’urgence)\n- Détresse, risque suicidaire, sécurité actuelle (agresseur dans l’entourage)\n- Symptômes d’ESPT, de dépression, usage de substances au suivi\n- Enfants : approche adaptée à l’âge, signalement selon la loi',
    examens: [
      ['premiere_intention', 'tdr-vih', 'Avant PEP et au suivi.'],
      ['premiere_intention', 'beta-hcg', 'Grossesse.'],
      ['premiere_intention', 'serologie-syphilis', 'IST.'],
      ['etiologique', 'aghbs', 'Hépatite B.'],
    ],
    scores: [],
    differentiels: [
      ['etat-de-stress-post-traumatique', 'ESPT constitué (> 1 mois).'],
      ['depression', 'Dépression secondaire.'],
      ['violences-sexuelles', 'Prise en charge médicale (fiche de gynécologie).'],
    ],
    etiologies:
      '## Contextes\n- Conflits armés, violences conjugales et familiales, enfants et adolescents, personnes déplacées, personnes en situation de handicap',
    principes: [
      [
        'Premiers secours psychologiques',
        'Dès le premier contact.',
        '- Écouter sans juger, croire la personne, déculpabiliser, répondre aux besoins immédiats (sécurité, soins, abri)\n- Informer sur les options médicales, juridiques, psychosociales ; respecter ses décisions',
      ],
      [
        'Soins médicaux intégrés',
        'Dans les délais.',
        '- PEP VIH (< 72 h), contraception d’urgence (**lévonorgestrel**, < 120 h), traitement présomptif des IST, vaccination hépatite B et tétanos, certificat médical\n- Voir la fiche de prise en charge médicale',
      ],
      [
        'Suivi psychologique',
        'Prévenir et traiter les troubles.',
        '- Soutien psychosocial individuel ou en groupe, activités de réinsertion, médiation familiale si souhaitée\n- ESPT : **TCC centrée sur le trauma**, **EMDR** ; dépression : psychothérapie ± **fluoxétine** ou **sertraline**\n- Évaluation régulière du risque suicidaire et de la sécurité\n- Pas de benzodiazépines au long cours',
      ],
      [
        'Approche holistique',
        'Reconstruire.',
        '- Orientation juridique (avec consentement), soutien socio-économique, scolarisation des enfants, lutte contre la stigmatisation',
      ],
    ],
    molecules: [
      ['fluoxetine', 'premiere', 'Dépression, ESPT'],
      ['sertraline', 'premiere', 'Dépression, ESPT, grossesse'],
      ['levonorgestrel-1-5-mg', 'premiere', 'Contraception d’urgence'],
    ],
    complications: [
      {
        nom: 'État de stress post-traumatique',
        fiche: 'etat-de-stress-post-traumatique',
        description: 'Fréquent.',
        traitement: '- Psychothérapie centrée sur le trauma',
        clinique: '- Reviviscences, évitement',
        paraclinique: '',
      },
      {
        nom: 'Dépression et suicide',
        fiche: 'risque-suicidaire',
        description: 'Risque élevé.',
        traitement: '- Évaluation, traitement',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Infection à VIH et grossesse non désirée',
        fiche: 'violences-sexuelles',
        description: 'Absence de soins précoces.',
        traitement: '- PEP, contraception d’urgence',
        clinique: '',
        paraclinique: '- Tests',
      },
      {
        nom: 'Rejet familial et exclusion',
        description: 'Stigmatisation.',
        traitement: '- Médiation, réinsertion',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération fréquente avec un soutien précoce et durable ; troubles chroniques en l’absence de prise en charge',
    urgences: [],
    symptomes: [
      ['Anxiété', 'tres_frequent'],
      ['Troubles du sommeil', 'tres_frequent'],
      ['Humeur dépressive', 'frequent'],
      ['Idées suicidaires', 'occasionnel'],
      ['Douleur pelvienne', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Accueil, premiers secours psychologiques, PEP, contraception d’urgence, orientation',
        '- Détresse sévère, risque suicidaire',
      ],
      hgr: ['- Prise en charge intégrée, psychothérapie', ''],
      tert: ['- Psychotraumatologie, psychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Réaction aiguë après violence sexuelle',
        type: 'commune',
        description: 'Premiers jours.',
        terrain: '- Survivant(e) récent(e)',
        fonctionnels: '- Peur, honte, insomnie',
        generaux: '',
        physiques: '- Lésions éventuelles',
        paraclinique: '',
        etiologies: '- Violence sexuelle',
        syndromes: [],
      },
      {
        nom: 'Troubles psychotraumatiques constitués',
        type: 'gravite',
        description: 'ESPT, dépression.',
        terrain: '- Violences répétées, isolement',
        fonctionnels: '- Cauchemars, évitement, tristesse',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Enfant survivant de violences sexuelles',
        type: 'terrain',
        description: 'Approche adaptée à l’âge.',
        terrain: '- Enfant, adolescent',
        fonctionnels: '- Régression, troubles du comportement, énurésie',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Traumatismes des conflits
  {
    ...PTR,
    slug: 'traumatismes-conflits-armes',
    nom: 'Traumatismes liés aux conflits armés',
    resume:
      'Conséquences psychologiques des conflits (Est de la RDC) chez les civils, déplacés, réfugiés, combattants : détresse fréquente et normale, troubles chez une minorité (ESPT, dépression, deuil prolongé, alcool) ; approche en pyramide (IASC) : sécurité et services de base, soutien communautaire et familial, soutien ciblé non spécialisé, soins spécialisés ; premiers secours psychologiques, interventions psychologiques brèves (Problem Management Plus), mhGAP.',
    definition:
      'Ensemble des réactions et troubles psychologiques consécutifs à l’exposition à la guerre et à la violence armée (combats, massacres, tortures, enlèvements, déplacements forcés, pertes), et des réponses de santé mentale et de soutien psychosocial (SMSPS) correspondantes.',
    physiopathologie:
      '## Expositions\n- Menaces de mort, blessures, tortures, violences sexuelles, mort de proches, disparitions\n- **Déplacement**, perte des moyens de subsistance, camps, insécurité persistante\n\n## Réactions et troubles\n- Détresse aiguë (normale) chez la majorité\n- **ESPT**, **dépression**, troubles anxieux, **deuil prolongé**, usage d’alcool et de drogues, plaintes somatiques\n- Aggravation des troubles mentaux préexistants (psychoses, épilepsie : ruptures de traitement)',
    diagnostic:
      '## Évaluation\n- Besoins de base (sécurité, eau, nourriture, abri, soins)\n- Détresse, fonctionnement quotidien, sommeil, idées suicidaires\n- Troubles prioritaires mhGAP : dépression, psychose, épilepsie, usage de substances, ESPT, deuil prolongé\n- Personnes vulnérables : enfants séparés, survivants de violences sexuelles, personnes âgées, personnes handicapées, personnes avec troubles mentaux sévères\n- Outils de dépistage brefs adaptés au contexte',
    examens: [],
    scores: [],
    differentiels: [
      ['etat-de-stress-post-traumatique', 'ESPT constitué.'],
      ['depression', 'Dépression.'],
      ['Deuil prolongé', 'Chagrin intense persistant plus de 6 à 12 mois.'],
      ['trouble-de-l-usage-de-l-alcool', 'Consommation d’alcool.'],
      ['traumatisme-cranien', 'Troubles cognitifs post-traumatiques.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Exposition répétée et sévère, pertes multiples, déplacement prolongé, absence de soutien, pauvreté, troubles antérieurs',
    principes: [
      [
        'Pyramide d’interventions (IASC)',
        'Répondre à tous les niveaux.',
        '- **Services de base et sécurité** dans le respect de la dignité\n- **Soutien communautaire et familial** : réunification, activités collectives, rituels de deuil, espaces amis des enfants\n- **Soutien ciblé non spécialisé** : premiers secours psychologiques, interventions brèves (Problem Management Plus, Self-Help Plus), groupes de parole\n- **Soins spécialisés** : troubles mentaux sévères (mhGAP), psychothérapie, psychiatrie',
      ],
      [
        'Troubles spécifiques',
        'Traiter selon mhGAP.',
        '- ESPT : TCC centrée sur le trauma, EMDR\n- Dépression : interventions psychologiques ± **fluoxétine**\n- Psychoses et épilepsie : continuité des traitements\n- Alcool : intervention brève, sevrage encadré',
      ],
      [
        'À éviter',
        'Ne pas nuire.',
        '- Débriefings collectifs imposés, récits forcés, benzodiazépines au long cours, étiquetage pathologique de réactions normales',
      ],
    ],
    molecules: [
      ['fluoxetine', 'premiere', 'Dépression, ESPT'],
      ['sertraline', 'alternative', 'Dépression, ESPT'],
      ['amitriptyline', 'alternative', 'Dépression'],
    ],
    complications: [
      {
        nom: 'État de stress post-traumatique chronique',
        fiche: 'etat-de-stress-post-traumatique',
        description: 'Insécurité persistante.',
        traitement: '- Psychothérapie',
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
      {
        nom: 'Usage d’alcool et violences domestiques',
        fiche: 'trouble-de-l-usage-de-l-alcool',
        description: 'Fréquents.',
        traitement: '- Interventions ciblées',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- La plupart des personnes récupèrent avec la sécurité et le soutien social ; troubles durables chez une minorité, qui nécessite des soins',
    urgences: [],
    symptomes: [
      ['Anxiété', 'tres_frequent'],
      ['Troubles du sommeil', 'tres_frequent'],
      ['Humeur dépressive', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Idées suicidaires', 'occasionnel'],
      ['Troubles du comportement', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Premiers secours psychologiques, mhGAP, orientation', '- Troubles sévères, risque suicidaire'],
      hgr: ['- Psychothérapie, psychiatrie de liaison', ''],
      tert: ['- Psychotraumatologie, psychiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Détresse psychologique',
        type: 'commune',
        description: 'Réaction attendue.',
        terrain: '- Civil, déplacé',
        fonctionnels: '- Peur, tristesse, insomnie',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Conflit armé',
        syndromes: [],
      },
      {
        nom: 'Troubles mentaux constitués',
        type: 'gravite',
        description: 'ESPT, dépression, deuil prolongé.',
        terrain: '- Expositions répétées',
        fonctionnels: '- Reviviscences, perte d’intérêt',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Ancien combattant',
        type: 'terrain',
        description: 'Violences commises et subies.',
        terrain: '- Ex-combattant',
        fonctionnels: '- Agressivité, culpabilité, alcool',
        generaux: '',
        physiques: '- Séquelles de blessures',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
