'use strict';

/**
 * Lot 72 (phase 2, psychiatrie) — insomnie, troubles du comportement alimentaire, troubles
 * psychiatriques associés au VIH, troubles psychiatriques d'origine organique, trouble de
 * l'adaptation. Rédigé par IA (mhGAP, OMS, Harrison) : à valider.
 */

const PSY = { departement: 'neuropsychiatrie', specialite: 'Psychiatrie' };
const PTR = { departement: 'neuropsychiatrie', specialite: 'Psychotraumatologie' };

module.exports = [
  // =================================================================== Insomnie
  {
    ...PSY,
    slug: 'insomnie',
    nom: 'Insomnie',
    resume:
      'Difficultés d’endormissement, réveils nocturnes ou réveil précoce, avec sommeil non récupérateur et retentissement diurne (fatigue, irritabilité, troubles de la concentration), au moins 3 nuits par semaine : aiguë (stress, deuil, hospitalisation) ou chronique (> 3 mois) ; souvent secondaire à une dépression, une anxiété, un stress post-traumatique, une douleur, une maladie (insuffisance cardiaque, reflux, prostate, hyperthyroïdie), à l’alcool, à la caféine, à des médicaments (corticoïdes, efavirenz, salbutamol) ou à un trouble du sommeil (apnées, jambes sans repos) ; traitement : hygiène du sommeil, thérapie cognitivo-comportementale de l’insomnie (restriction du temps au lit, contrôle du stimulus), traitement de la cause ; hypnotiques seulement brefs (≤ 2–4 semaines) ; amitriptyline ou mirtazapine à faible dose si dépression associée.',
    definition:
      'Plainte de difficulté à initier ou maintenir le sommeil, ou de réveil précoce, malgré des conditions adéquates, avec retentissement diurne.',
    physiopathologie:
      '## Mécanismes\n- **Hyperéveil** physiologique et cognitif, conditionnement négatif au lit (ruminations)\n\n## Causes et facteurs\n- **Psychiatriques** : dépression, anxiété, stress post-traumatique, trouble bipolaire\n- **Médicales** : douleur, dyspnée, nycturie, reflux, prurit, hyperthyroïdie, ménopause\n- **Substances** : caféine, alcool, tabac, cannabis, **efavirenz**, corticoïdes, bêta-agonistes, sevrage des hypnotiques\n- **Environnement** : bruit, chaleur, horaires de travail, écrans\n- **Autres troubles du sommeil** : apnées obstructives, jambes sans repos',
    diagnostic:
      '## Clinique\n- Difficultés d’**endormissement** (> 30 min), **réveils** nocturnes, **réveil précoce**, sommeil non récupérateur\n- Retentissement : **fatigue**, somnolence, irritabilité, **troubles de la concentration**\n- **Agenda du sommeil** sur 2 semaines\n\n## Rechercher\n- **Dépression** (réveil précoce), **anxiété**, idées suicidaires\n- Ronflements et pauses respiratoires (apnées), impatiences des jambes\n- Consommations (caféine, alcool), médicaments, douleur, nycturie\n\n## Examens\n- Selon l’orientation : TSH, glycémie, NFS, ferritine ; polysomnographie en centre spécialisé (apnées)',
    examens: [
      ['etiologique', 'tsh', 'Hyperthyroïdie.'],
      ['etiologique', 'ferritine', 'Jambes sans repos.'],
      ['etiologique', 'glycemie', 'Diabète (nycturie).'],
    ],
    scores: [],
    differentiels: [
      ['depression', 'Réveil précoce, tristesse, anhédonie.'],
      ['trouble-anxieux-generalise', 'Ruminations anxieuses.'],
      ['syndrome-des-jambes-sans-repos', 'Besoin de bouger les jambes le soir.'],
      ['trouble-bipolaire', 'Réduction du besoin de sommeil en phase maniaque.'],
      ['Syndrome d’apnées du sommeil', 'Ronflements, pauses, somnolence diurne.'],
    ],
    etiologies:
      '## Causes\n- Stress, dépression, anxiété, douleur, maladies, substances, médicaments, environnement',
    principes: [
      [
        'Hygiène du sommeil',
        'Toujours.',
        '- Horaires réguliers, lever à heure fixe, pas de sieste longue\n- Éviter caféine après midi, alcool, tabac, repas lourds et écrans le soir\n- Chambre calme, sombre, fraîche ; activité physique dans la journée',
      ],
      [
        'Thérapie cognitivo-comportementale',
        'Insomnie chronique.',
        '- **Contrôle du stimulus** (lit réservé au sommeil, se lever si pas endormi en 20 min)\n- **Restriction du temps passé au lit**, relaxation, restructuration des croyances sur le sommeil',
      ],
      [
        'Médicaments',
        'Courte durée.',
        '- Traiter la **cause** (dépression, douleur, reflux) ; adapter l’efavirenz (prise au coucher ou changement d’antirétroviral)\n- Hypnotique bref (≤ 2–4 semaines) : **zopiclone** 3,75–7,5 mg ; mélatonine chez le sujet de plus de 55 ans\n- Dépression associée : **amitriptyline** 10–25 mg ou **mirtazapine** 15 mg le soir\n- Éviter benzodiazépines et antihistaminiques au long cours (sujet âgé : chutes, confusion)',
      ],
    ],
    molecules: [
      ['zopiclone', 'alternative', 'Insomnie aiguë sévère (courte durée)'],
      ['melatonine', 'alternative', 'Sujet de plus de 55 ans'],
      ['amitriptyline', 'alternative', 'Insomnie avec douleur ou dépression'],
      ['mirtazapine', 'alternative', 'Insomnie avec dépression'],
      ['hydroxyzine', 'adjuvant', 'Insomnie avec anxiété, usage bref'],
      ['diazepam', 'adjuvant', 'Usage bref'],
    ],
    complications: [
      {
        nom: 'Dépendance aux hypnotiques',
        description: 'Usage prolongé.',
        traitement: '- Sevrage progressif',
        clinique: '- Rebond d’insomnie',
        paraclinique: '',
      },
      {
        nom: 'Accidents et chutes',
        description: 'Somnolence, hypnotiques.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression',
        fiche: 'depression',
        description: 'L’insomnie chronique augmente le risque.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Insomnie aiguë souvent résolutive ; insomnie chronique améliorée par la TCC, plus durablement que par les hypnotiques',
    urgences: [],
    symptomes: [
      ['Troubles du sommeil', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Irritabilité', 'frequent'],
      ['Troubles de la concentration', 'frequent'],
      ['Anxiété', 'occasionnel'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: ['- Hygiène du sommeil, recherche des causes, hypnotique bref', ''],
      hgr: ['- Prise en charge de la dépression ou de l’anxiété', ''],
      tert: ['- TCC de l’insomnie, polysomnographie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Insomnie aiguë',
        type: 'commune',
        description: 'Stress, événement.',
        terrain: '- Tout âge',
        fonctionnels: '- Endormissement difficile',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Insomnie chronique',
        type: 'evolutive',
        description: 'Plus de 3 mois.',
        terrain: '',
        fonctionnels: '- Fatigue, ruminations',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Insomnie comorbide',
        type: 'etiologique',
        description: 'Dépression, douleur, médicaments.',
        terrain: '- Dépression, VIH sous efavirenz',
        fonctionnels: '- Réveil précoce',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles du comportement alimentaire
  {
    ...PSY,
    slug: 'troubles-du-comportement-alimentaire',
    nom: 'Troubles du comportement alimentaire',
    resume:
      'Troubles psychiatriques de l’adolescente et de la jeune femme surtout, sous-diagnostiqués en RDC : anorexie mentale (restriction alimentaire volontaire, peur intense de grossir, perception déformée du corps, amaigrissement important, aménorrhée, hyperactivité, déni), boulimie (crises d’hyperphagie avec perte de contrôle suivies de vomissements provoqués, laxatifs, jeûne ; poids souvent normal), hyperphagie boulimique (crises sans compensation, obésité) ; complications graves : dénutrition, hypokaliémie (troubles du rythme), hypoglycémie, bradycardie, ostéoporose, érosions dentaires, syndrome de renutrition inapproprié ; éliminer une cause organique d’amaigrissement (VIH, tuberculose, diabète, hyperthyroïdie, maladie digestive) ; prise en charge pluridisciplinaire (médicale, nutritionnelle, psychologique, familiale), hospitalisation si IMC < 15, bradycardie, hypokaliémie ou risque suicidaire ; renutrition prudente.',
    definition:
      'Perturbations persistantes du comportement alimentaire (restriction, crises, conduites compensatoires) entraînant une altération de la santé physique ou du fonctionnement psychosocial.',
    physiopathologie:
      '## Facteurs\n- **Psychologiques** : faible estime de soi, perfectionnisme, anxiété, traumatismes\n- **Socioculturels** : idéal de minceur, pression scolaire ou sportive, réseaux sociaux\n- **Biologiques** : génétiques, régulation de l’appétit\n\n## Conséquences de la dénutrition\n- Bradycardie, hypotension, hypothermie, aménorrhée (hypogonadisme), ostéoporose, anémie\n- Vomissements et laxatifs : **hypokaliémie**, alcalose, déshydratation, troubles du rythme, érosions dentaires, hypertrophie des parotides',
    diagnostic:
      '## Anorexie mentale\n- **Restriction alimentaire**, IMC < 18,5 (ou cassure de la courbe chez l’adolescent), **peur de grossir**, dysmorphophobie, **aménorrhée**, hyperactivité physique, déni\n\n## Boulimie\n- **Crises de boulimie** (≥ 1 par semaine pendant 3 mois) avec perte de contrôle, **vomissements provoqués**, laxatifs, jeûne ; poids normal ou fluctuant\n- Signe de Russell (callosités du dos de la main), érosions dentaires, parotides augmentées\n\n## Gravité\n- IMC < 15, perte rapide, **bradycardie** < 40/min, hypotension, **hypokaliémie**, hypoglycémie, malaises, idées suicidaires\n\n## Examens\n- **Ionogramme** (kaliémie), glycémie, phosphorémie, magnésémie, NFS, créatinine, bilan hépatique, **ECG** (QT, bradycardie)\n- Éliminer : **test VIH**, tuberculose, TSH, diabète, maladie cœliaque, grossesse',
    examens: [
      ['premiere_intention', 'anthropometrie', 'IMC, courbe de croissance.'],
      ['gravite', 'ionogramme', 'Hypokaliémie.'],
      ['gravite', 'ecg', 'Bradycardie, QT long.'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
      ['gravite', 'phosphoremie', 'Syndrome de renutrition.'],
      ['gravite', 'calcemie-magnesemie', 'Carences.'],
      ['premiere_intention', 'nfs', 'Anémie, leucopénie.'],
      ['etiologique', 'tdr-vih', 'Amaigrissement d’origine organique.'],
      ['etiologique', 'tsh', 'Hyperthyroïdie.'],
      ['etiologique', 'beta-hcg', 'Aménorrhée.'],
    ],
    scores: ['imc'],
    differentiels: [
      ['infection-vih', 'Amaigrissement d’origine infectieuse.'],
      ['tuberculose-pulmonaire', 'Amaigrissement, toux, fièvre.'],
      ['hyperthyroidie-basedow', 'Amaigrissement avec appétit conservé.'],
      ['diabete-type-1-adulte', 'Amaigrissement, polyurie.'],
      ['depression', 'Perte d’appétit sans peur de grossir.'],
      ['obesite-adulte', 'Hyperphagie boulimique.'],
    ],
    etiologies: '## Facteurs\n- Psychologiques, socioculturels, biologiques, traumatismes',
    principes: [
      [
        'Prise en charge pluridisciplinaire',
        'Ambulatoire le plus souvent.',
        '- **Alliance** avec la patiente et la famille, objectifs de poids progressifs\n- **Réhabilitation nutritionnelle** avec diététique, repas structurés\n- **Psychothérapie** : thérapie familiale (adolescent), TCC (boulimie, hyperphagie)\n- **Fluoxétine** 60 mg/j dans la boulimie ; traitement de la dépression associée',
      ],
      [
        'Hospitalisation',
        'Critères de gravité.',
        '- IMC < 15, perte de poids rapide, bradycardie, hypotension, **hypokaliémie**, hypoglycémie, refus de boire, risque suicidaire\n- **Renutrition prudente** (début 20–30 kcal/kg/j, augmentation progressive), **thiamine**, **phosphore**, potassium, magnésium : prévention du **syndrome de renutrition inapproprié** (surveillance de la phosphorémie)\n- Correction de l’hypokaliémie (chlorure de potassium)',
      ],
      ['Suivi', 'Long terme.', '- Poids, ECG, ionogramme, densité osseuse ; prévention des rechutes'],
    ],
    molecules: [
      ['fluoxetine', 'premiere', 'Boulimie, dépression associée'],
      ['chlorure-de-potassium', 'premiere', 'Hypokaliémie'],
      ['vitamine-b1-thiamine', 'premiere', 'Renutrition'],
      ['multivitamines', 'adjuvant', 'Carences'],
      ['olanzapine', 'alternative', 'Anorexie sévère (faible dose, centre spécialisé)'],
    ],
    complications: [
      {
        nom: 'Troubles du rythme et mort subite',
        description: 'Hypokaliémie, dénutrition.',
        traitement: '- Correction, monitorage',
        clinique: '- Malaises, palpitations',
        paraclinique: '- ECG, kaliémie',
      },
      {
        nom: 'Syndrome de renutrition inapproprié',
        description: 'Renutrition trop rapide.',
        traitement: '- Phosphore, thiamine, progressivité',
        clinique: '- Œdèmes, confusion, insuffisance cardiaque',
        paraclinique: '- Phosphorémie basse',
      },
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Mortalité élevée.',
        traitement: '- Évaluation, prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Ostéoporose et infertilité',
        description: 'Hypogonadisme prolongé.',
        traitement: '- Renutrition',
        clinique: '- Fractures',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison chez environ la moitié des anorexies à long terme ; mortalité la plus élevée des troubles psychiatriques ; boulimie de meilleur pronostic',
    urgences: [],
    symptomes: [
      ['Restriction alimentaire', 'tres_frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Aménorrhée', 'frequent'],
      ['Crises de boulimie', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Humeur dépressive', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'mhGAP Intervention Guide 2.0',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Repérage (IMC, aménorrhée), éliminer une cause organique, orientation',
        '- IMC < 15, malaises, vomissements répétés',
      ],
      hgr: ['- Bilan, renutrition, correction ionique', ''],
      tert: ['- Prise en charge spécialisée pluridisciplinaire', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Anorexie mentale',
        type: 'commune',
        description: 'Restriction.',
        terrain: '- Adolescente, jeune femme',
        fonctionnels: '- Restriction, peur de grossir',
        generaux: '- Amaigrissement, aménorrhée',
        physiques: '- Bradycardie, hypothermie',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Boulimie',
        type: 'etiologique',
        description: 'Crises et vomissements.',
        terrain: '- Jeune femme',
        fonctionnels: '- Crises, vomissements provoqués',
        generaux: '- Poids normal',
        physiques: '- Érosions dentaires, parotides',
        paraclinique: '- Hypokaliémie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme grave',
        type: 'gravite',
        description: 'Hospitalisation.',
        terrain: '',
        fonctionnels: '- Malaises',
        generaux: '- IMC < 15',
        physiques: '- Bradycardie',
        paraclinique: '- Hypokaliémie, hypoglycémie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles psychiatriques associés au VIH
  {
    ...PSY,
    slug: 'troubles-psychiatriques-associes-au-vih',
    nom: 'Troubles psychiatriques associés au VIH',
    resume:
      'Troubles mentaux très fréquents chez les personnes vivant avec le VIH, souvent méconnus et compromettant l’observance du TARV : dépression (la plus fréquente), anxiété, stress post-traumatique (violences sexuelles, deuil, stigmatisation), troubles liés à l’alcool et aux drogues, troubles neurocognitifs associés au VIH (lenteur, troubles de la mémoire et de l’attention, apathie, jusqu’à la démence), manie secondaire et psychoses (souvent au stade avancé), syndrome confusionnel (infections opportunistes) ; effets neuropsychiatriques de l’efavirenz (rêves anormaux, insomnie, dépression, idées suicidaires, psychose) ; dépistage systématique (PHQ-9, risque suicidaire), recherche d’une cause organique, traitement par ISRS (sertraline, peu d’interactions), antipsychotiques à faible dose, TARV efficace (remplacer l’efavirenz par le dolutégravir), soutien psychosocial.',
    definition:
      'Ensemble des troubles mentaux et neurocognitifs survenant chez les personnes vivant avec le VIH, liés à l’impact psychologique de la maladie, au virus lui-même, aux infections opportunistes ou aux médicaments.',
    physiopathologie:
      '## Mécanismes\n- **Psychosociaux** : annonce du diagnostic, stigmatisation, violences, deuils, pauvreté, isolement\n- **Neurotoxicité du VIH** : inflammation chronique du SNC → troubles neurocognitifs\n- **Infections opportunistes** : toxoplasmose, cryptococcose, tuberculose, LEMP, neurosyphilis\n- **Médicaments** : **efavirenz** (dépression, psychose, idées suicidaires), dolutégravir (insomnie, rare), isoniazide (psychose), corticoïdes\n- Consommation d’alcool et de drogues',
    diagnostic:
      '## Dépistage systématique\n- **Dépression** (PHQ-2 puis PHQ-9), **anxiété**, **risque suicidaire**, consommation d’alcool (AUDIT)\n- Lors de l’annonce, à l’initiation du TARV, en cas de mauvaise observance ou d’échec\n\n## Troubles neurocognitifs\n- Lenteur, troubles de la mémoire, de l’attention, apathie, troubles de la marche (formes avancées) ; dépistage rapide (échelle internationale de démence VIH)\n\n## Symptômes psychotiques ou maniaques, confusion\n- **Rechercher une cause organique** : **CD4**, charge virale, glycémie, ionogramme, **scanner** cérébral, **ponction lombaire** (CrAg, BK, VDRL), toxoplasmose, effets médicamenteux (efavirenz, isoniazide)',
    examens: [
      ['premiere_intention', 'cd4', 'Immunodépression.'],
      ['premiere_intention', 'charge-virale-vih', 'Contrôle virologique.'],
      ['etiologique', 'scanner-cerebral', 'Lésion cérébrale.'],
      ['etiologique', 'lcr', 'Infection opportuniste.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
      ['etiologique', 'vitamine-b12-folates', 'Carence.'],
      ['etiologique', 'tsh', 'Dysthyroïdie.'],
      ['etiologique', 'glycemie', 'Trouble métabolique.'],
    ],
    scores: ['stades-oms-vih'],
    differentiels: [
      ['syndrome-confusionnel-aigu', 'Confusion fluctuante.'],
      ['toxoplasmose-cerebrale', 'Déficit focal, fièvre.'],
      ['meningite-a-cryptocoque', 'Céphalées, troubles du comportement.'],
      ['neurosyphilis', 'Démence et troubles psychiatriques.'],
      ['leucoencephalopathie-multifocale-progressive', 'Déficits progressifs.'],
      ['depression', 'Dépression sans lien avec le VIH.'],
    ],
    etiologies:
      '## Causes\n- Psychosociales, neurotoxicité du VIH, infections opportunistes, médicaments, substances',
    principes: [
      [
        'Dépression et anxiété',
        'Traiter.',
        '- Interventions psychologiques (résolution de problèmes, groupes de soutien, conseil), soutien à l’observance\n- **Sertraline** 50–150 mg/j ou **fluoxétine** (attention aux interactions avec les inhibiteurs de protéase) ; amitriptyline à faible dose\n- **Évaluer le risque suicidaire** à chaque consultation',
      ],
      [
        'Troubles neurocognitifs et psychoses',
        'TARV et causes.',
        '- **TARV efficace** (dolutégravir) : améliore les troubles neurocognitifs\n- Remplacer l’**efavirenz** en cas d’effets neuropsychiatriques\n- Psychose ou manie : **rispéridone** ou **halopéridol** à faible dose (sensibilité accrue aux effets extrapyramidaux), valproate pour la manie\n- Traiter les infections opportunistes',
      ],
      [
        'Soutien psychosocial',
        'Indispensable.',
        '- Lutte contre la stigmatisation, divulgation accompagnée, soutien familial, prise en charge des violences, réduction de l’alcool\n- Intégration des soins de santé mentale dans les services VIH',
      ],
    ],
    molecules: [
      ['sertraline', 'premiere', 'Dépression, anxiété'],
      ['fluoxetine', 'alternative', 'Dépression'],
      ['amitriptyline', 'alternative', 'Dépression avec douleurs ou insomnie'],
      ['risperidone', 'premiere', 'Psychose (faible dose)'],
      ['haloperidol', 'alternative', 'Psychose, agitation'],
      ['valproate-de-sodium-acide-valproique', 'alternative', 'Manie'],
      ['dolutegravir', 'premiere', 'TARV (substitution de l’efavirenz)'],
    ],
    complications: [
      {
        nom: 'Mauvaise observance et échec du TARV',
        fiche: 'infection-vih',
        description: 'Dépression, troubles cognitifs.',
        traitement: '- Soutien, traitement',
        clinique: '',
        paraclinique: '- Charge virale',
      },
      {
        nom: 'Suicide',
        fiche: 'risque-suicidaire',
        description: 'Risque accru.',
        traitement: '- Évaluation, prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Démence associée au VIH',
        description: 'Stade avancé.',
        traitement: '- TARV',
        clinique: '- Perte d’autonomie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration de la dépression et des troubles cognitifs sous traitement et TARV efficace ; meilleure observance',
    urgences: [],
    symptomes: [
      ['Humeur dépressive', 'tres_frequent'],
      ['Anxiété', 'frequent'],
      ['Troubles de la mémoire', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Idées suicidaires', 'occasionnel'],
      ['Hallucinations', 'occasionnel'],
      ['Troubles du comportement', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Dépistage de la dépression, soutien psychosocial, sertraline, changement de l’efavirenz',
        '- Idées suicidaires, psychose, confusion',
      ],
      hgr: ['- Recherche des causes organiques, psychiatrie', ''],
      tert: ['- IRM, neuropsychologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dépression du patient VIH',
        type: 'commune',
        description: 'La plus fréquente.',
        terrain: '- Annonce, stigmatisation',
        fonctionnels: '- Tristesse, perte d’intérêt',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Troubles neurocognitifs associés au VIH',
        type: 'evolutive',
        description: 'Lenteur, mémoire.',
        terrain: '- CD4 bas, charge virale élevée',
        fonctionnels: '- Oublis, apathie',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Effets neuropsychiatriques de l’efavirenz',
        type: 'etiologique',
        description: 'Médicamenteux.',
        terrain: '- Sous efavirenz',
        fonctionnels: '- Cauchemars, insomnie, idées suicidaires',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles psychiatriques d'origine organique
  {
    ...PSY,
    slug: 'troubles-psychiatriques-d-origine-organique',
    nom: 'Troubles psychiatriques d’origine organique',
    resume:
      'Symptômes psychiatriques (psychose, manie, dépression, anxiété, troubles du comportement, changement de personnalité, troubles cognitifs) causés directement par une maladie physique, une substance ou un médicament : infections (neuropaludisme, méningites et encéphalites, VIH, syphilis, trypanosomiase humaine africaine), causes métaboliques (hypoglycémie, hyponatrémie, insuffisance hépatique ou rénale), endocriniennes (hyper- ou hypothyroïdie, Cushing, Addison), carences (thiamine, B12, pellagre), neurologiques (épilepsie, tumeurs, AVC, traumatismes, démences), lupus, toxiques et médicaments (alcool et sevrage, cannabis, corticoïdes, isoniazide, efavirenz, antipaludiques, méfloquine) ; à évoquer devant un début brutal ou tardif (> 40 ans), une confusion, des hallucinations visuelles, des signes neurologiques, une fièvre ; examen physique et bilan ciblé avant tout étiquetage psychiatrique ; traiter la cause, antipsychotique à faible dose et durée courte si besoin.',
    definition:
      'Troubles mentaux attribuables aux effets physiologiques directs d’une affection médicale, d’une substance ou d’un médicament.',
    physiopathologie:
      '## Causes\n- **Infectieuses** : neuropaludisme, méningites, encéphalites, **VIH**, **neurosyphilis**, **trypanosomiase** (troubles du sommeil et du comportement), rage\n- **Métaboliques** : hypoglycémie, hyponatrémie, hypercalcémie, encéphalopathie hépatique ou urémique\n- **Endocriniennes** : thyroïde, surrénales, parathyroïdes\n- **Carences** : **thiamine** (Gayet-Wernicke), **B12**, niacine (pellagre : dermatite, diarrhée, démence)\n- **Neurologiques** : épilepsie temporale, tumeurs frontales, AVC, traumatismes, démences, maladie de Wilson\n- **Auto-immunes** : lupus, encéphalites auto-immunes\n- **Substances et médicaments** : alcool (sevrage), cannabis, amphétamines, corticoïdes, **isoniazide**, **efavirenz**, **méfloquine**, chloroquine',
    diagnostic:
      '## Signes d’alerte d’une cause organique\n- Début **brutal**, **après 40 ans**, sans antécédent psychiatrique\n- **Confusion**, désorientation, fluctuation de la vigilance, troubles de la mémoire\n- **Hallucinations visuelles**, olfactives ou tactiles\n- **Fièvre**, **céphalées**, convulsions, **signes neurologiques**, altération de l’état général\n- Nouveau médicament, consommation de substances\n\n## Bilan ciblé\n- **Glycémie**, **goutte épaisse**, NFS, ionogramme, calcémie, créatinine, bilan hépatique, **TSH**\n- **Test VIH**, sérologie syphilitique, recherche de trypanosomes en zone d’endémie\n- **Scanner** cérébral, **ponction lombaire**, EEG selon le contexte ; vitamine B12',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'goutte-epaisse', 'Neuropaludisme.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['etiologique', 'tsh', 'Dysthyroïdie.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
      ['etiologique', 'calcemie-magnesemie', 'Hypercalcémie.'],
      ['etiologique', 'bilan-hepatique', 'Encéphalopathie hépatique.'],
      ['etiologique', 'creatinine', 'Encéphalopathie urémique.'],
      ['etiologique', 'scanner-cerebral', 'Lésion cérébrale.'],
      ['etiologique', 'lcr', 'Infection du SNC.'],
      ['etiologique', 'vitamine-b12-folates', 'Carence.'],
      ['deuxieme_intention', 'eeg', 'Épilepsie, encéphalopathie.'],
    ],
    scores: ['glasgow'],
    differentiels: [
      ['schizophrenie', 'Début chez l’adulte jeune, sans confusion.'],
      ['trouble-bipolaire', 'Antécédents d’épisodes d’humeur.'],
      ['troubles-psychotiques-aigus', 'Psychose aiguë sans cause organique.'],
      ['syndrome-confusionnel-aigu', 'Confusion aiguë.'],
      ['tha-phase-neurologique', 'Trypanosomiase.'],
      ['sevrage-alcoolique-delirium-tremens', 'Sevrage alcoolique.'],
    ],
    etiologies:
      '## Causes\n- Infections, troubles métaboliques et endocriniens, carences, maladies neurologiques, lupus, substances, médicaments',
    principes: [
      [
        'Traiter la cause',
        'Priorité.',
        '- Correction de la glycémie (**glucose**), **thiamine** avant le glucose chez l’alcoolique, ionogramme\n- Traitement de l’infection (artésunate, antibiotiques, aciclovir, TARV), arrêt ou remplacement du médicament en cause (efavirenz, corticoïdes, méfloquine)\n- Traitement endocrinien',
      ],
      [
        'Symptômes psychiatriques',
        'Courte durée.',
        '- Environnement calme, présence d’un proche, orientation\n- Agitation ou psychose : **halopéridol** 0,5–2 mg ou **rispéridone** à faible dose, sur une durée courte ; éviter les benzodiazépines (sauf sevrage alcoolique et convulsions)\n- Surveiller l’évolution après correction de la cause',
      ],
      [
        'Suivi',
        'Réévaluer.',
        '- Persistance des symptômes : réévaluation psychiatrique ; information de la famille',
      ],
    ],
    molecules: [
      ['vitamine-b1-thiamine', 'premiere', 'Carence, alcool'],
      ['haloperidol', 'premiere', 'Agitation, psychose (faible dose)'],
      ['risperidone', 'alternative', 'Psychose (faible dose)'],
      ['artesunate', 'premiere', 'Neuropaludisme'],
      ['diazepam', 'adjuvant', 'Sevrage alcoolique, convulsions'],
      ['cyanocobalamine-vitamine-b12', 'adjuvant', 'Carence en B12'],
      ['nicotinamide-vitamine-b3-pp', 'adjuvant', 'Pellagre'],
    ],
    complications: [
      {
        nom: 'Retard diagnostique',
        description: 'Étiquetage psychiatrique d’une maladie organique.',
        traitement: '- Bilan systématique',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Décès',
        description: 'Cause curable non traitée (hypoglycémie, encéphalite, neuropaludisme).',
        traitement: '- Traitement de la cause',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Contention et violences',
        description: 'Agitation mal prise en charge.',
        traitement: '- Prise en charge adaptée',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Régression habituelle après traitement de la cause ; séquelles possibles en cas de lésion cérébrale',
    urgences: ['paludisme-grave-urgence', 'syndrome-meninge-febrile'],
    symptomes: [
      ['Hallucinations', 'frequent'],
      ['Troubles du comportement', 'tres_frequent'],
      ['Désorientation', 'frequent'],
      ['Agitation', 'frequent'],
      ['Idées délirantes', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
      ['Troubles de la mémoire', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Glycémie, TDR paludisme, test VIH, examen physique, référence',
        '- Confusion, fièvre, signes neurologiques',
      ],
      hgr: ['- Bilan, ponction lombaire, scanner, traitement de la cause', ''],
      tert: ['- IRM, EEG, neurologie', ''],
    },
    alertes: {
      'paludisme-grave-urgence': 'Troubles du comportement avec fièvre en zone d’endémie',
      'syndrome-meninge-febrile': 'Troubles psychiatriques avec fièvre et raideur de nuque',
    },
    formes: [
      {
        nom: 'Psychose d’origine organique',
        type: 'commune',
        description: 'Hallucinations visuelles.',
        terrain: '- Début tardif, maladie physique',
        fonctionnels: '- Hallucinations, délire',
        generaux: '',
        physiques: '- Signes neurologiques possibles',
        paraclinique: '- Bilan orienté',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Trouble psychiatrique médicamenteux',
        type: 'etiologique',
        description: 'Corticoïdes, efavirenz, isoniazide.',
        terrain: '- Nouveau traitement',
        fonctionnels: '- Insomnie, manie, psychose',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Trouble d’origine infectieuse',
        type: 'gravite',
        description: 'Neuropaludisme, encéphalite.',
        terrain: '',
        fonctionnels: '- Agitation, confusion',
        generaux: '- Fièvre',
        physiques: '',
        paraclinique: '- Goutte épaisse, LCR',
        etiologies: '',
        syndromes: ['syndrome-confusionnel'],
      },
    ],
  },

  // =================================================================== Trouble de l'adaptation
  {
    ...PTR,
    slug: 'trouble-de-l-adaptation',
    nom: 'Trouble de l’adaptation',
    resume:
      'Réaction émotionnelle et comportementale excessive à un facteur de stress identifiable (perte d’emploi, rupture, maladie grave dont l’annonce du VIH ou d’un cancer, déplacement de population, migration, conflit familial, échec scolaire), apparaissant dans les 3 mois et ne durant pas plus de 6 mois après la fin du stress : tristesse, anxiété, inquiétude, irritabilité, troubles du sommeil, difficultés de concentration, retrait ou troubles des conduites (adolescent), avec retentissement sur le fonctionnement ; sans les critères d’une dépression ou d’un stress post-traumatique ; évaluer le risque suicidaire ; prise en charge : soutien psychologique, interventions brèves (résolution de problèmes, gestion du stress, mhGAP), soutien social ; médicaments rarement nécessaires (hypnotique ou anxiolytique bref) ; réévaluation si persistance (évolution vers une dépression).',
    definition:
      'Détresse émotionnelle et/ou perturbation du comportement survenant en réponse à un facteur de stress identifiable, disproportionnée ou entraînant une altération du fonctionnement, sans répondre aux critères d’un autre trouble mental.',
    physiopathologie:
      '## Mécanismes\n- Débordement des capacités d’adaptation face à un **stress** (ponctuel, répété ou continu)\n- Vulnérabilité : antécédents psychiatriques, isolement, précarité, faible soutien social\n\n## Facteurs de stress fréquents\n- Annonce d’une **maladie grave** (VIH, cancer), deuil, **déplacement** de population, migration, conflits armés, perte d’emploi, rupture, violences, échec scolaire',
    diagnostic:
      '## Clinique\n- Apparition dans les **3 mois** suivant le stress\n- **Humeur dépressive**, **anxiété**, inquiétudes, irritabilité, sentiment d’être dépassé\n- **Troubles du sommeil**, de la concentration, plaintes somatiques\n- Adolescent : troubles des conduites (fugues, bagarres, absentéisme)\n- Retentissement sur le travail, l’école, la famille\n\n## Différencier\n- **Dépression** caractérisée (critères complets), **stress post-traumatique** (événement traumatique, reviviscences), deuil normal\n- Évaluer le **risque suicidaire** et la consommation d’alcool',
    examens: [],
    scores: [],
    differentiels: [
      ['depression', 'Critères d’épisode dépressif complet.'],
      ['etat-de-stress-post-traumatique', 'Traumatisme, reviviscences, évitement.'],
      ['trouble-anxieux-generalise', 'Inquiétudes durables sans facteur déclenchant.'],
      ['Deuil normal', 'Réaction attendue à une perte.'],
    ],
    etiologies:
      '## Facteurs\n- Maladie grave, deuil, déplacement, violences, perte d’emploi, rupture, conflits',
    principes: [
      [
        'Soutien et interventions brèves',
        'Base.',
        '- Écoute, **psychoéducation**, normalisation de la réaction\n- **Résolution de problèmes**, gestion du stress (relaxation, respiration), activation comportementale\n- Mobilisation du **soutien social** et des ressources communautaires',
      ],
      [
        'Contexte',
        'Agir sur le stress.',
        '- Aide pratique (sociale, juridique, économique), accompagnement de l’annonce d’une maladie\n- Adolescents : implication de la famille et de l’école',
      ],
      [
        'Médicaments',
        'Rarement.',
        '- Insomnie ou anxiété invalidante : hypnotique ou anxiolytique **bref** (quelques jours)\n- Réévaluation à 4–8 semaines ; antidépresseur seulement si évolution vers une dépression',
      ],
    ],
    molecules: [
      ['hydroxyzine', 'alternative', 'Anxiété invalidante, courte durée'],
      ['zopiclone', 'alternative', 'Insomnie, courte durée'],
      ['sertraline', 'alternative', 'Évolution vers une dépression'],
    ],
    complications: [
      {
        nom: 'Dépression',
        fiche: 'depression',
        description: 'Persistance du stress.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Gestes suicidaires',
        fiche: 'risque-suicidaire',
        description: 'Adolescent, jeune adulte.',
        traitement: '- Évaluation, prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Abus d’alcool',
        fiche: 'trouble-de-l-usage-de-l-alcool',
        description: 'Automédication.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon : résolution en quelques mois, surtout si le stress diminue ; risque d’évolution vers une dépression',
    urgences: [],
    symptomes: [
      ['Humeur dépressive', 'tres_frequent'],
      ['Anxiété', 'tres_frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Irritabilité', 'frequent'],
      ['Troubles de la concentration', 'frequent'],
      ['Troubles du comportement', 'occasionnel'],
    ],
    sources: ['mhGAP Intervention Guide 2.0', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Écoute, interventions brèves, évaluation du risque suicidaire', '- Idées suicidaires'],
      hgr: ['- Suivi psychologique', ''],
      tert: ['- Psychiatrie si évolution défavorable', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Avec humeur dépressive',
        type: 'commune',
        description: 'Tristesse.',
        terrain: '- Après une perte',
        fonctionnels: '- Tristesse, pleurs',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Avec anxiété',
        type: 'etiologique',
        description: 'Inquiétude.',
        terrain: '- Annonce d’une maladie',
        fonctionnels: '- Inquiétude, insomnie',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Avec troubles des conduites',
        type: 'terrain',
        description: 'Adolescent.',
        terrain: '- Adolescent',
        fonctionnels: '- Fugues, bagarres',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
