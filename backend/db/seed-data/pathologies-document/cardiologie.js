'use strict';

// Original clinical summaries; the eventual replacement loader leaves each fiche to medical review.
const sources = {
  acuteCoronary: [
    '2023 ESC Guidelines for the management of acute coronary syndromes',
    'Fifth Universal Definition of Myocardial Infarction (2026)',
  ],
  chronicCoronary: ['2024 ESC Guidelines for the management of chronic coronary syndromes'],
  heartFailure: ['2026 ESC Guidelines for the management of heart failure'],
  cardiomyopathy: ['2023 ESC Guidelines for the management of cardiomyopathies'],
  myopericardial: ['2025 ESC Guidelines for the management of myocarditis and pericarditis'],
  atrialFibrillation: ['2024 ESC Guidelines for the management of atrial fibrillation'],
  supraventricular: ['2019 Guidelines on Supraventricular Tachycardia'],
  ventricular: [
    '2022 ESC Guidelines: management of patients with ventricular arrhythmias and the prevention of sudden cardiac death',
  ],
  pacing: ['2021 ESC Guidelines on cardiac pacing and cardiac resynchronization therapy'],
  valve: ['2025 ESC/EACTS Guidelines for the management of valvular heart disease'],
  endocarditis: ['2023 ESC Guidelines for the management of endocarditis'],
  hypertension: [
    '2024 ESC Guidelines for the management of elevated blood pressure and hypertension',
    'ISH Global Hypertension Practice Guidelines',
    'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
  ],
  vascular: ['2024 ESC Guidelines for the management of peripheral arterial and aortic diseases'],
  thromboembolism: [
    '2019 Guidelines on Acute Pulmonary Embolism (Diagnosis and Management of)',
    'ASH 2020 guidelines for management of venous thromboembolism',
  ],
  raynaud: ['ESC — recommandations de pratique clinique', 'EULAR — recommandations de pratique clinique'],
};

const fiche = ({
  slug,
  nom,
  resume,
  definition,
  diagnostic,
  etiologies,
  therapeutique,
  evolution,
  references,
}) => ({
  specialite: 'Cardiologie',
  slug,
  nom,
  resume,
  definition,
  diagnostic,
  etiologies,
  therapeutique,
  evolution,
  sources: references,
});

module.exports = [
  fiche({
    slug: 'syndrome-coronarien-aigu-st-plus',
    nom: 'Syndrome coronarien aigu avec sus-décalage de ST',
    resume: 'Urgence par occlusion coronaire aiguë, nécessitant une reperfusion sans délai.',
    definition:
      'Présentation aiguë d’une ischémie myocardique avec sus-décalage persistant du segment ST ou équivalent d’occlusion, le plus souvent liée à une thrombose coronaire et susceptible d’entraîner un infarctus.',
    diagnostic:
      '- Douleur ou oppression thoracique prolongée, parfois dyspnée, sueurs, nausées ou malaise; présentation atypique possible.\n- ECG 12 dérivations immédiatement et répété si le premier tracé n’est pas concluant.\n- Troponine ultrasensible et évaluation hémodynamique; ne pas retarder la stratégie de reperfusion pour attendre les biomarqueurs si l’ECG est diagnostique.\n- Rechercher les diagnostics différentiels menaçant la vie, notamment dissection aortique et embolie pulmonaire.',
    etiologies:
      'La cause habituelle est la rupture ou l’érosion d’une plaque athéroscléreuse avec thrombose occlusive. Un spasme, une embolie coronaire ou une dissection coronaire spontanée sont des causes moins fréquentes.',
    therapeutique:
      '- Activer immédiatement la filière d’urgence et transférer vers une structure capable de reperfusion.\n- Revascularisation urgente par angioplastie primaire si accessible dans les délais recommandés; fibrinolyse uniquement selon protocole, délais, contre-indications et capacité de transfert.\n- Traitement antithrombotique, surveillance continue et prévention secondaire selon recommandations en vigueur et disponibilité locale.\n- Toute instabilité, douleur persistante, choc ou arythmie impose une prise en charge spécialisée urgente.',
    evolution:
      'Complications précoces possibles : arythmie ventriculaire, insuffisance cardiaque, choc cardiogénique et complications mécaniques. Organiser suivi cardiologique, réadaptation et contrôle des facteurs de risque après la phase aiguë.',
    references: sources.acuteCoronary,
  }),
  fiche({
    slug: 'syndrome-coronarien-aigu-st-moins',
    nom: 'Syndrome coronarien aigu sans sus-décalage de ST',
    resume:
      'Ischémie myocardique aiguë sans sus-décalage persistant de ST; distinguer infarctus et angor instable.',
    definition:
      'Syndrome d’ischémie myocardique aiguë sans sus-décalage persistant de ST. Une élévation ou variation dynamique de troponine définit l’infarctus sans sus-décalage; en son absence, le tableau peut correspondre à un angor instable.',
    diagnostic:
      '- Douleur thoracique récente ou aggravée, au repos ou pour un effort moindre; rechercher équivalents angineux.\n- ECG rapide et sérié, troponines ultrasensibles répétées selon l’algorithme local.\n- Évaluer risque ischémique, instabilité, insuffisance cardiaque et risque hémorragique.\n- Rechercher une cause alternative si le tableau clinique, l’ECG ou les biomarqueurs ne concordent pas.',
    etiologies:
      'Le plus souvent, rupture ou érosion de plaque athéroscléreuse avec obstruction partielle ou intermittente. Un déséquilibre entre apport et demande en oxygène peut aussi provoquer un infarctus secondaire.',
    therapeutique:
      '- Hospitalisation et surveillance adaptées au risque; avis cardiologique précoce en cas de haut risque ou d’instabilité.\n- Stratégie invasive, antiagrégants, anticoagulation et traitement anti-ischémique individualisés selon le risque, les contre-indications et le protocole actualisé.\n- Ne pas administrer de fibrinolyse en l’absence de sus-décalage persistant de ST.\n- Prévention secondaire et réadaptation après stabilisation.',
    evolution:
      'Risque d’infarctus, d’arythmie, d’insuffisance cardiaque et de récidive ischémique. La surveillance initiale et le suivi doivent être adaptés au risque résiduel et à la stratégie de revascularisation.',
    references: sources.acuteCoronary,
  }),
  fiche({
    slug: 'angor-stable',
    nom: 'Angor stable (syndrome coronarien chronique)',
    resume:
      'Douleur d’effort reproductible liée à une ischémie myocardique, à distinguer d’un syndrome aigu.',
    definition:
      'Manifestation clinique d’un syndrome coronarien chronique, généralement caractérisée par une gêne thoracique reproductible à l’effort ou au stress et soulagée par le repos ou un traitement anti-angineux.',
    diagnostic:
      '- Décrire le déclencheur, la durée, la fréquence, l’évolution et la limitation fonctionnelle; rechercher les facteurs de risque.\n- ECG de repos et évaluation clinique; choisir imagerie fonctionnelle ou angio-TDM coronaire selon le risque prétest et les ressources.\n- Une douleur nouvelle, prolongée, au repos ou rapidement aggravée doit être évaluée comme un syndrome coronarien aigu.',
    etiologies:
      'Le plus souvent, athérosclérose coronaire obstructive; une dysfonction microvasculaire ou un vasospasme peuvent causer une ischémie sans sténose épicardique importante.',
    therapeutique:
      '- Réduire le risque cardiovasculaire par prise en charge des facteurs de risque et traitement préventif adapté.\n- Choisir un traitement anti-angineux selon les symptômes, les comorbidités, les contre-indications et les disponibilités.\n- Discuter une exploration invasive ou une revascularisation si les symptômes persistent malgré le traitement ou si le risque le justifie.\n- Expliquer les signes d’alerte et la conduite à tenir en cas de douleur prolongée.',
    evolution:
      'Évolution souvent chronique, avec risque d’infarctus et d’insuffisance cardiaque selon l’étendue de la maladie. Réévaluer les symptômes, l’observance, les effets indésirables et les facteurs de risque.',
    references: sources.chronicCoronary,
  }),
  fiche({
    slug: 'insuffisance-cardiaque-aigue',
    nom: 'Insuffisance cardiaque aiguë',
    resume: 'Aggravation rapide de congestion ou d’hypoperfusion nécessitant une évaluation urgente.',
    definition:
      'Apparition ou aggravation rapide de symptômes et signes d’insuffisance cardiaque, pouvant se manifester par congestion pulmonaire ou systémique, bas débit ou choc.',
    diagnostic:
      '- Évaluer immédiatement respiration, oxygénation, perfusion, pression artérielle et état neurologique.\n- ECG, radiographie thoracique si disponible, peptides natriurétiques, troponine, fonction rénale, électrolytes et échocardiographie selon la situation.\n- Rechercher un facteur déclenchant : ischémie, arythmie, infection, poussée hypertensive, embolie, anémie, grossesse ou interruption thérapeutique.',
    etiologies:
      'Décompensation d’une cardiopathie connue ou nouvel épisode lié à une ischémie, une valvulopathie, une myocardite, une arythmie ou une hypertension sévère. Les infections et les problèmes d’accès ou d’observance des soins sont des facteurs fréquents.',
    therapeutique:
      '- Détresse respiratoire, hypoxémie, hypotension, confusion ou signes de choc : urgence hospitalière et transfert vers un niveau de soins adapté.\n- Stabiliser les fonctions vitales, traiter la congestion et corriger le facteur causal selon l’évaluation clinique et le protocole local.\n- Oxygène uniquement si hypoxémie; assistance ventilatoire et traitements IV selon indication et surveillance.\n- Réévaluer fréquemment la perfusion, la diurèse, la fonction rénale et les électrolytes.',
    evolution:
      'Le pronostic dépend de la cause, du degré de congestion et de l’hypoperfusion. Le risque de récidive est élevé sans traitement de fond, éducation, suivi rapproché et accès aux soins.',
    references: sources.heartFailure,
  }),
  fiche({
    slug: 'insuffisance-cardiaque-chronique',
    nom: 'Insuffisance cardiaque chronique',
    resume: 'Syndrome durable lié à une anomalie cardiaque, classé selon la fraction d’éjection et la cause.',
    definition:
      'Syndrome clinique avec symptômes ou signes compatibles, causé par une anomalie structurelle ou fonctionnelle cardiaque. La fraction d’éjection du ventricule gauche contribue à classer le phénotype et à guider la prise en charge.',
    diagnostic:
      '- Dyspnée, orthopnée, fatigue, œdèmes, turgescence jugulaire ou crépitants; l’examen peut être peu contributif hors décompensation.\n- ECG, échocardiographie, peptides natriurétiques et bilans biologiques pour confirmer, phénotyper et rechercher une cause.\n- Rechercher cardiopathie hypertensive, ischémique, valvulaire, rhumatismale, toxique, infectieuse ou du péripartum.',
    etiologies:
      'Causes fréquentes : hypertension, maladie coronaire, cardiomyopathies, valvulopathies, séquelles de rhumatisme articulaire aigu, myocardite et troubles du rythme. Anémie, infection, rétention hydrosodée et certains médicaments peuvent aggraver le syndrome.',
    therapeutique:
      '- Adapter le traitement de fond au phénotype de fraction d’éjection, à la pression artérielle, à la fonction rénale, aux électrolytes et aux recommandations en vigueur.\n- Traiter la congestion si présente, la cause et les comorbidités; éviter les médicaments susceptibles d’aggraver l’insuffisance cardiaque.\n- Éducation, activité physique adaptée, suivi du poids et accès rapide aux soins en cas d’aggravation.\n- Les traitements et dispositifs nécessitent une prescription et une surveillance clinique et biologique.',
    evolution:
      'Maladie chronique à risque d’exacerbations et d’hospitalisations. Suivi régulier des symptômes, de la fonction cardiaque, de la fonction rénale, des électrolytes et de la tolérance thérapeutique.',
    references: sources.heartFailure,
  }),
  fiche({
    slug: 'cardiomyopathies',
    nom: 'Cardiomyopathies',
    resume:
      'Maladies du muscle cardiaque, à caractériser selon le phénotype, la cause et le risque familial.',
    definition:
      'Ensemble de maladies du myocarde non entièrement expliquées par une anomalie de charge ou une maladie coronaire; les phénotypes incluent notamment formes dilatées, hypertrophiques et restrictives.',
    diagnostic:
      '- Symptômes d’insuffisance cardiaque, palpitations, syncope, douleur thoracique ou découverte familiale.\n- ECG et échocardiographie; compléter par imagerie cardiaque, bilan étiologique ou génétique selon les ressources et le phénotype.\n- Rechercher antécédents familiaux de cardiomyopathie ou de mort subite et dépister les apparentés lorsque indiqué.',
    etiologies:
      'Causes génétiques, inflammatoires ou infectieuses, toxiques, métaboliques, nutritionnelles, liées à la grossesse ou idiopathiques. Une même famille peut présenter des phénotypes différents.',
    therapeutique:
      '- Traiter le phénotype et la cause identifiée; prendre en charge insuffisance cardiaque, arythmie et risque thromboembolique selon les recommandations.\n- Évaluer le risque de mort subite et l’indication éventuelle d’un dispositif ou d’un avis spécialisé.\n- Conseiller sur l’activité physique, la grossesse et le dépistage familial selon le type de cardiomyopathie.',
    evolution:
      'L’évolution varie selon le phénotype et la cause; elle peut inclure insuffisance cardiaque progressive, arythmie, événements emboliques ou mort subite. Un suivi spécialisé est généralement nécessaire.',
    references: sources.cardiomyopathy,
  }),
  fiche({
    slug: 'pericardite-aigue-et-tamponnade',
    nom: 'Péricardite aiguë et tamponnade cardiaque',
    resume:
      'Inflammation péricardique; une tamponnade avec retentissement hémodynamique est une urgence vitale.',
    definition:
      'La péricardite aiguë est une inflammation du péricarde. L’accumulation de liquide sous pression peut comprimer les cavités cardiaques et provoquer une tamponnade avec baisse du remplissage et du débit cardiaque.',
    diagnostic:
      '- Péricardite : douleur pleurétique ou positionnelle, frottement possible, modifications ECG et/ou épanchement.\n- Tamponnade : dyspnée, hypotension, tachycardie, turgescence jugulaire ou signes de choc; confirmer rapidement par échocardiographie si disponible.\n- Rechercher une cause infectieuse, tuberculeuse, néoplasique, inflammatoire, urémique ou post-lésionnelle.',
    etiologies:
      'Causes virales ou idiopathiques, tuberculose dans les régions d’endémie, infections bactériennes, maladies systémiques, cancer, insuffisance rénale et causes post-procédure ou traumatiques.',
    therapeutique:
      '- Instabilité ou suspicion de tamponnade : urgence absolue, transfert et drainage péricardique par équipe expérimentée; ne pas retarder la prise en charge pour des examens non indispensables.\n- Péricardite sans tamponnade : évaluer la cause, les signes de gravité et les contre-indications avant traitement anti-inflammatoire.\n- Hospitaliser les formes fébriles, subaiguës, immunodéprimées, avec épanchement important ou suspicion de tuberculose/bactérie.',
    evolution:
      'Une péricardite non compliquée guérit souvent, mais les récidives sont possibles. Tamponnade, constriction ou cause infectieuse spécifique nécessitent un suivi spécialisé.',
    references: sources.myopericardial,
  }),
  fiche({
    slug: 'myocardite-aigue',
    nom: 'Myocardite aiguë',
    resume: 'Inflammation du myocarde pouvant entraîner insuffisance cardiaque, douleur ou arythmie.',
    definition:
      'Inflammation du muscle cardiaque, suspectée devant une atteinte myocardique aiguë non expliquée par une cause coronaire, avec présentation clinique variable.',
    diagnostic:
      '- Douleur thoracique, dyspnée, palpitations, syncope ou insuffisance cardiaque après infection ou exposition déclenchante.\n- ECG, troponine, échocardiographie et imagerie par résonance magnétique cardiaque selon disponibilité.\n- Exclure un syndrome coronarien aigu et rechercher une instabilité, un trouble du rythme ou une atteinte péricardique.',
    etiologies:
      'Causes infectieuses, surtout virales, mais aussi bactériennes ou parasitaires; mécanismes immunitaires, toxiques ou médicamenteux possibles. La cause n’est pas toujours identifiée.',
    therapeutique:
      '- Hospitaliser si douleur persistante, élévation des biomarqueurs, dysfonction ventriculaire, arythmie, syncope ou instabilité.\n- Éviter les efforts intenses pendant la phase aiguë; traiter l’insuffisance cardiaque et les arythmies selon les recommandations.\n- Une immunothérapie ou une biopsie ne se discute que dans des formes sélectionnées après avis spécialisé.',
    evolution:
      'Récupération complète possible, mais une dysfonction ventriculaire, une récidive ou une cardiomyopathie dilatée peuvent persister. Un suivi clinique et cardiaque est nécessaire avant reprise du sport.',
    references: sources.myopericardial,
  }),
  fiche({
    slug: 'fibrillation-et-flutter-auriculaires',
    nom: 'Fibrillation et flutter auriculaires',
    resume:
      'Arythmies supraventriculaires exposant à des symptômes, une insuffisance cardiaque et un AVC embolique.',
    definition:
      'La fibrillation atriale est une activité auriculaire désorganisée avec rythme ventriculaire généralement irrégulier; le flutter est une macro-réentrée auriculaire organisée. Les deux peuvent être paroxystiques, persistants ou permanents.',
    diagnostic:
      '- Palpitations, dyspnée, fatigue, douleur, syncope ou découverte fortuite; confirmer par ECG ou enregistrement du rythme.\n- Évaluer stabilité hémodynamique, durée de l’épisode, facteurs déclenchants, fonction cardiaque et risque thromboembolique et hémorragique.\n- Rechercher hypertension, valvulopathie, insuffisance cardiaque, infection, dysthyroïdie, alcool et troubles électrolytiques.',
    etiologies:
      'Hypertension, âge, cardiopathie structurelle ou valvulaire, insuffisance cardiaque, ischémie, hyperthyroïdie, infection, alcool et troubles métaboliques.',
    therapeutique:
      '- Instabilité hémodynamique : prise en charge urgente et stratégie de cardioversion selon protocole.\n- Chez les patients stables, décider contrôle de fréquence ou de rythme et anticoagulation après évaluation individualisée du risque embolique, du risque hémorragique et des contre-indications.\n- Corriger les facteurs déclenchants et traiter les comorbidités; surveillance de l’observance et des complications.',
    evolution:
      'Risque d’AVC, de récidive, de cardiomyopathie induite par tachycardie et d’insuffisance cardiaque. Le suivi réévalue le rythme, les symptômes, l’anticoagulation et les facteurs de risque.',
    references: sources.atrialFibrillation,
  }),
  fiche({
    slug: 'tachycardies-paroxystiques-supraventriculaires',
    nom: 'Tachycardies paroxystiques supraventriculaires',
    resume: 'Accès rapides à début et fin souvent brusques; rechercher d’abord une mauvaise tolérance.',
    definition:
      'Tachycardies rapides prenant naissance au-dessus des ventricules, incluant notamment les tachycardies par réentrée nodale ou par voie accessoire et certaines tachycardies atriales.',
    diagnostic:
      '- Palpitations à début/fin brusques, parfois dyspnée, douleur, vertiges ou syncope.\n- ECG pendant l’épisode si possible; documenter fréquence, régularité, QRS et signes de pré-excitation.\n- Hypotension, douleur ischémique, insuffisance cardiaque ou altération de conscience indiquent une prise en charge urgente.',
    etiologies:
      'Circuits de réentrée nodale ou atrioventriculaire, voie accessoire, foyer atrial; facteurs favorisants possibles : stimulants, alcool, fièvre ou cardiopathie.',
    therapeutique:
      '- Instabilité : cardioversion synchronisée selon le protocole d’urgence.\n- Patient stable : manœuvres vagales et traitement aigu uniquement selon ECG, contexte et protocole; éviter les médicaments contre-indiqués en cas de pré-excitation.\n- Récidives : avis cardiologique pour stratégie préventive et discussion d’ablation.',
    evolution:
      'Les épisodes peuvent récidiver et altérer la qualité de vie; les complications graves sont plus probables en présence de cardiopathie ou de pré-excitation. Un ECG documenté facilite le diagnostic.',
    references: sources.supraventricular,
  }),
  fiche({
    slug: 'tachycardie-ventriculaire-et-fibrillation-ventriculaire',
    nom: 'Tachycardie ventriculaire et fibrillation ventriculaire',
    resume: 'Arythmies ventriculaires potentiellement mortelles; toute instabilité impose la réanimation.',
    definition:
      'La tachycardie ventriculaire est un rythme rapide d’origine ventriculaire; la fibrillation ventriculaire est une activité électrique désorganisée sans débit cardiaque efficace.',
    diagnostic:
      '- Palpitations, malaise, syncope, hypotension, choc ou arrêt cardiaque.\n- ECG/monitorage immédiat; considérer une tachycardie à QRS larges comme ventriculaire jusqu’à preuve du contraire.\n- Rechercher ischémie, cardiomyopathie, médicaments pro-arythmiques et anomalies du potassium ou du magnésium.',
    etiologies:
      'Cardiopathie ischémique ou cicatrice d’infarctus, cardiomyopathie, maladie électrique héréditaire, myocardite, médicaments et troubles électrolytiques.',
    therapeutique:
      '- Absence de pouls : réanimation cardio-pulmonaire et défibrillation immédiates selon protocole de réanimation.\n- Tachycardie avec instabilité : cardioversion électrique urgente selon protocole.\n- Après stabilisation, traiter la cause, corriger les facteurs réversibles et obtenir un avis spécialisé sur prévention secondaire et dispositifs.',
    evolution:
      'Risque de récidive et de mort subite, surtout en présence de cardiopathie structurelle. Une évaluation spécialisée et un suivi sont requis après tout épisode documenté.',
    references: sources.ventricular,
  }),
  fiche({
    slug: 'blocs-auriculo-ventriculaires',
    nom: 'Blocs auriculo-ventriculaires',
    resume:
      'Retard ou interruption de conduction auriculo-ventriculaire, du bloc de premier degré au bloc complet.',
    definition:
      'Trouble de conduction entre oreillettes et ventricules. Le premier degré retarde la conduction; les blocs du deuxième degré sont intermittents; le troisième degré correspond à une dissociation complète.',
    diagnostic:
      '- ECG pour classifier le degré et le type; comparer aux symptômes et rechercher pauses ou rythme d’échappement.\n- Évaluer syncope, hypotension, douleur thoracique, insuffisance cardiaque et fréquence ventriculaire.\n- Rechercher médicaments bradycardisants, ischémie, troubles électrolytiques, infection et cause dégénérative.',
    etiologies:
      'Dégénérescence du système de conduction, ischémie/infarctus, médicaments, troubles électrolytiques, myocardite ou atteinte infiltrative.',
    therapeutique:
      '- Bloc de haut degré symptomatique, syncope ou instabilité : urgence avec monitorage et accès à une stimulation temporaire selon protocole.\n- Corriger les causes réversibles et réévaluer les médicaments.\n- La stimulation permanente dépend du type de bloc, des symptômes, de la cause et des recommandations spécialisées.',
    evolution:
      'Le risque va de l’absence de symptôme à la syncope, l’insuffisance cardiaque ou l’arrêt cardiaque. Le pronostic dépend du niveau du bloc, de la cause et de la réponse à la stimulation.',
    references: sources.pacing,
  }),
  fiche({
    slug: 'blocs-de-branche-et-dysfonction-sinusale',
    nom: 'Blocs de branche et dysfonction sinusale',
    resume:
      'Anomalies de conduction ou de formation de l’impulsion pouvant révéler une cardiopathie sous-jacente.',
    definition:
      'Les blocs de branche ralentissent la conduction intraventriculaire; la dysfonction sinusale regroupe bradycardie sinusale, pauses et réponses chronotropes inadéquates.',
    diagnostic:
      '- ECG 12 dérivations, comparaison aux tracés antérieurs et corrélation avec syncope, fatigue, dyspnée ou palpitations.\n- Nouveau bloc de branche avec douleur thoracique : évaluer immédiatement une ischémie aiguë.\n- Rechercher médicaments, troubles électrolytiques et cardiopathie structurelle; échocardiographie si indiquée.',
    etiologies:
      'Fibrose liée à l’âge, cardiopathie ischémique ou structurelle, myocardite, troubles métaboliques et médicaments ralentissant le rythme.',
    therapeutique:
      '- Traiter une cause réversible et réviser les médicaments bradycardisants.\n- Une bradycardie symptomatique, syncope ou bloc avancé nécessite une évaluation urgente.\n- Discuter stimulation ou resynchronisation uniquement selon le trouble documenté, les symptômes et les critères spécialisés.',
    evolution:
      'L’évolution dépend de la cause et peut inclure progression du trouble de conduction, syncope ou insuffisance cardiaque. Une surveillance est indiquée si symptômes ou anomalie nouvelle.',
    references: sources.pacing,
  }),
  fiche({
    slug: 'valvulopathies-mitrales',
    nom: 'Sténose et insuffisance mitrales',
    resume:
      'Atteintes de la valve mitrale pouvant entraîner dyspnée, fibrillation atriale et insuffisance cardiaque.',
    definition:
      'La sténose mitrale gêne le passage du sang de l’oreillette gauche au ventricule; l’insuffisance mitrale correspond à une régurgitation systolique vers l’oreillette.',
    diagnostic:
      '- Rechercher dyspnée, fatigue, palpitations, antécédent de rhumatisme articulaire aigu et signes d’insuffisance cardiaque.\n- Auscultation et échocardiographie Doppler pour confirmer, préciser la sévérité et évaluer les cavités et la pression pulmonaire.\n- ECG et imagerie complémentaire selon la présentation et la planification thérapeutique.',
    etiologies:
      'La sténose est souvent d’origine rhumatismale dans les régions à forte prévalence de rhumatisme; l’insuffisance peut être dégénérative, rhumatismale, ischémique ou fonctionnelle.',
    therapeutique:
      '- Adapter le traitement à la lésion, à sa sévérité, aux symptômes et à la présence de fibrillation atriale ou d’hypertension pulmonaire.\n- Prévenir et traiter les complications; évaluer en centre spécialisé les indications de réparation, remplacement ou intervention percutanée.\n- Les décisions de grossesse, anticoagulation et prophylaxie infectieuse nécessitent une évaluation individualisée.',
    evolution:
      'Une maladie sévère non traitée peut évoluer vers hypertension pulmonaire, arythmie et insuffisance cardiaque. Le suivi repose sur l’échocardiographie et les symptômes.',
    references: sources.valve,
  }),
  fiche({
    slug: 'valvulopathies-aortiques',
    nom: 'Sténose et insuffisance aortiques',
    resume:
      'Lésions de la valve aortique dont la sévérité et les symptômes guident le suivi et l’intervention.',
    definition:
      'La sténose aortique obstrue l’éjection du ventricule gauche; l’insuffisance aortique entraîne une régurgitation diastolique vers le ventricule.',
    diagnostic:
      '- Rechercher dyspnée d’effort, angor, syncope, fatigue et signes d’insuffisance cardiaque; un souffle peut orienter.\n- Échocardiographie Doppler pour quantifier la lésion et évaluer le ventricule; compléter si discordance entre symptômes et imagerie.\n- Une décompensation ou une syncope dans une sténose sévère justifie une évaluation urgente.',
    etiologies:
      'Dégénérescence calcifiante liée à l’âge, valve bicuspide congénitale, séquelles rhumatismales, dilatation de la racine aortique ou endocardite.',
    therapeutique:
      '- Suivi clinique et échographique selon sévérité et progression.\n- Avis d’une équipe valvulaire pour toute lésion sévère symptomatique ou retentissement ventriculaire; choix de l’intervention selon anatomie, risque et disponibilité.\n- Traiter les comorbidités et informer sur les signes d’alerte.',
    evolution:
      'La sténose sévère symptomatique et l’insuffisance avec retentissement ventriculaire peuvent avoir un pronostic défavorable sans intervention. Le suivi spécialisé permet de choisir le moment de prise en charge.',
    references: sources.valve,
  }),
  fiche({
    slug: 'valvulopathies-tricuspidiennes',
    nom: 'Valvulopathies tricuspidiennes',
    resume:
      'Atteintes tricuspides, souvent associées à une autre cardiopathie, avec congestion veineuse systémique.',
    definition:
      'La maladie tricuspide comprend principalement l’insuffisance et, plus rarement, la sténose; elle peut être primaire ou secondaire à une dilatation annulaire et ventriculaire droite.',
    diagnostic:
      '- Rechercher œdèmes, ascite, turgescence jugulaire, fatigue, souffle et signes de congestion hépatique.\n- Échocardiographie pour préciser mécanisme, sévérité, ventricule droit et pression pulmonaire.\n- Évaluer les valvulopathies gauches, la fibrillation atriale et les dispositifs intracardiaques associés.',
    etiologies:
      'Rhumatisme articulaire aigu, endocardite, anomalie congénitale, dilatation secondaire à l’hypertension pulmonaire ou à une valvulopathie gauche, et lésions liées à un dispositif.',
    therapeutique:
      '- Traiter la cause et la congestion selon l’état clinique.\n- Les formes sévères ou symptomatiques nécessitent une évaluation spécialisée précoce pour décider d’une intervention et éviter une atteinte irréversible du ventricule droit ou du foie.',
    evolution:
      'Les formes significatives peuvent conduire à insuffisance cardiaque droite, congestion hépatique et rénale. Le pronostic dépend de la cause, du ventricule droit et du moment de l’intervention.',
    references: sources.valve,
  }),
  fiche({
    slug: 'endocardite-infectieuse',
    nom: 'Endocardite infectieuse',
    resume:
      'Infection de l’endocarde ou d’un matériel intracardiaque, à suspecter devant fièvre et terrain à risque.',
    definition:
      'Infection microbienne de l’endocarde, le plus souvent valvulaire, parfois d’une prothèse ou d’un dispositif intracardiaque; elle peut provoquer destruction valvulaire et embolies.',
    diagnostic:
      '- Fièvre persistante, souffle nouveau, embolies ou sepsis chez un patient porteur de valvulopathie, prothèse ou dispositif.\n- Prélever plusieurs hémocultures avant antibiothérapie si l’état le permet; échocardiographie et bilan de complications selon disponibilité.\n- Une instabilité, une insuffisance cardiaque aiguë ou un signe neurologique impose une prise en charge urgente.',
    etiologies:
      'Bactéries, notamment staphylocoques, streptocoques et entérocoques; risque accru avec prothèse, cardiopathie préexistante, dispositifs ou bactériémie.',
    therapeutique:
      '- Hospitalisation et avis d’une équipe spécialisée; antibiothérapie ciblée après prélèvements, adaptée au germe, à la valve et aux fonctions d’organe.\n- Évaluer rapidement l’indication chirurgicale en cas d’insuffisance cardiaque, infection non contrôlée ou risque embolique élevé.\n- Prévention des infections et prophylaxie uniquement pour les patients et actes indiqués par les recommandations.',
    evolution:
      'Complications : insuffisance valvulaire, abcès, insuffisance cardiaque, embolies cérébrales ou systémiques et sepsis. Le suivi microbiologique et échographique est essentiel.',
    references: sources.endocarditis,
  }),
  fiche({
    slug: 'hypertension-arterielle-essentielle-et-resistante',
    nom: 'Hypertension artérielle essentielle et résistante',
    resume:
      'Élévation persistante de la pression artérielle; confirmer les mesures et rechercher les atteintes d’organes.',
    definition:
      'L’hypertension artérielle est une élévation persistante de la pression artérielle confirmée par des mesures standardisées et répétées. La forme résistante persiste au-dessus de la cible malgré une stratégie thérapeutique adaptée et vérifiée.',
    diagnostic:
      '- Mesure après repos, brassard approprié, répétition et confirmation hors consultation si possible.\n- Évaluer risque cardiovasculaire, rein, rétine et cœur; vérifier observance, doses, interactions et facteurs de pseudo-résistance.\n- Devant une forme résistante, rechercher causes secondaires, apnée du sommeil, excès de sel et médicaments hypertenseurs.',
    etiologies:
      'La forme essentielle est multifactorielle : âge, hérédité, excès de sel, obésité, alcool et sédentarité. La résistance apparente peut résulter d’une mesure inadéquate, d’une non-observance ou d’une cause secondaire.',
    therapeutique:
      '- Mesures de mode de vie et prise en charge globale du risque cardiovasculaire.\n- Traitement médicamenteux progressif selon recommandations, comorbidités, grossesse, fonction rénale, électrolytes et disponibilité locale.\n- Toute association et intensification requiert contrôle de la pression, de la fonction rénale et des électrolytes; orienter les formes résistantes confirmées.',
    evolution:
      'Sans contrôle, risque accru d’AVC, maladie coronaire, insuffisance cardiaque, rénale et rétinienne. Le suivi régulier améliore le contrôle et dépiste précocement les atteintes d’organes.',
    references: sources.hypertension,
  }),
  fiche({
    slug: 'hypertension-arterielle-secondaire',
    nom: 'Hypertension artérielle secondaire',
    resume:
      'Élévation tensionnelle liée à une cause identifiable, à rechercher selon l’âge et les signes associés.',
    definition:
      'Hypertension causée ou entretenue par une affection rénale, vasculaire, endocrinienne, respiratoire ou un médicament/substance.',
    diagnostic:
      '- Suspecter devant début précoce ou brutal, aggravation rapide, résistance, hypokaliémie, atteinte rénale ou signes endocriniens.\n- Confirmer l’hypertension et orienter les examens selon l’hypothèse : rein/artères rénales, aldostérone, thyroïde, cortisol, catécholamines ou apnée du sommeil.\n- Éviter les bilans indiscriminés; interpréter les tests en tenant compte des médicaments et du contexte clinique.',
    etiologies:
      'Maladie rénale parenchymateuse ou rénovasculaire, hyperaldostéronisme, phéochromocytome, syndrome de Cushing, dysthyroïdie, apnée obstructive du sommeil et substances ou médicaments.',
    therapeutique:
      '- Traiter la cause lorsqu’elle est identifiée, en parallèle du contrôle tensionnel.\n- Choisir les examens et traitements avec un clinicien expérimenté; certaines explorations hormonales nécessitent une préparation spécifique.\n- Référer en cas de suspicion de cause endocrinienne ou rénovasculaire complexe.',
    evolution:
      'Le contrôle tensionnel et le pronostic dépendent de la cause, de son ancienneté et du degré d’atteinte des organes. Une cause réversible peut améliorer la pression artérielle.',
    references: sources.hypertension,
  }),
  fiche({
    slug: 'urgence-hypertensive-et-dissection-aortique',
    nom: 'Urgences hypertensives et dissection aortique',
    resume:
      'Une pression très élevée avec atteinte aiguë d’organe ou une douleur de dissection exige une prise en charge immédiate.',
    definition:
      'Une urgence hypertensive associe une pression artérielle sévèrement élevée à une atteinte aiguë d’organe cible. La dissection aortique est une urgence vasculaire distincte, souvent accompagnée de douleur brutale et nécessitant une stratégie spécifique.',
    diagnostic:
      '- Rechercher déficit neurologique, confusion, douleur thoracique ou dorsale brutale, dyspnée, œdème pulmonaire, oligurie ou troubles visuels.\n- Mesurer la pression correctement et évaluer les deux bras si dissection suspectée; ECG, fonction rénale, analyse d’urine et imagerie ciblée selon le tableau.\n- Une pression élevée isolée sans atteinte aiguë d’organe ne constitue pas à elle seule une urgence hypertensive.',
    etiologies:
      'HTA non contrôlée, interruption thérapeutique, médicaments ou substances, atteinte rénale/endocrinienne. La dissection est favorisée par HTA, maladie aortique, anomalie génétique ou grossesse.',
    therapeutique:
      '- Transfert médicalisé et surveillance hospitalière; ne pas chercher à normaliser brutalement la pression en l’absence d’indication spécifique.\n- Réduction contrôlée et traitement IV uniquement sous surveillance avec objectifs adaptés à l’organe atteint.\n- Suspicion de dissection : avis urgent de chirurgie/cardio-vasculaire et imagerie rapide; le traitement vise à réduire le stress pariétal selon protocole spécialisé.',
    evolution:
      'Le pronostic dépend de l’organe atteint et du délai de traitement. La dissection peut évoluer vers rupture, tamponnade, ischémie ou décès; l’HTA chronique doit ensuite être contrôlée.',
    references: [...sources.hypertension, ...sources.vascular],
  }),
  fiche({
    slug: 'arteriopathie-obliterante-des-membres-inferieurs',
    nom: 'Artériopathie oblitérante des membres inférieurs et ischémie critique',
    resume:
      'Athérosclérose des artères des jambes; douleur de repos, ulcère ou gangrène signalent une menace du membre.',
    definition:
      'Maladie artérielle périphérique obstructive, le plus souvent athéroscléreuse. L’ischémie chronique menaçant le membre associe douleur de repos ou perte tissulaire avec maladie artérielle documentée.',
    diagnostic:
      '- Claudication d’effort, douleur de repos, plaie qui ne cicatrise pas, nécrose ou gangrène; examiner peau, pouls et sensibilité.\n- Index cheville-bras et Doppler si disponibles; interpréter prudemment en cas d’artères incompressibles.\n- Une douleur brutale avec membre froid, pâle, sans pouls ou déficit neurologique évoque une ischémie aiguë et impose une urgence.',
    etiologies:
      'Athérosclérose associée au tabac, diabète, hypertension, dyslipidémie, maladie rénale chronique et âge.',
    therapeutique:
      '- Ischémie aiguë ou menace du membre : transfert urgent vers une structure vasculaire; éviter tout retard lié aux examens non essentiels.\n- Contrôle des facteurs de risque, soins des pieds et des plaies, activité physique adaptée et traitement antithrombotique/lipidique selon recommandations et contre-indications.\n- Revascularisation à discuter pour ischémie menaçante ou symptômes invalidants malgré traitement.',
    evolution:
      'Risque d’amputation et de décès cardiovasculaire; la maladie est fréquemment diffuse. Le suivi des plaies, des pieds et du risque cardiovasculaire est indispensable.',
    references: sources.vascular,
  }),
  fiche({
    slug: 'maladie-thrombo-embolique-veineuse',
    nom: 'Maladie thrombo-embolique veineuse (TVP et embolie pulmonaire)',
    resume:
      'Thrombose veineuse profonde et embolie pulmonaire sont deux manifestations d’une même maladie thromboembolique.',
    definition:
      'Formation d’un thrombus dans le système veineux profond (TVP), pouvant migrer vers les artères pulmonaires et provoquer une embolie pulmonaire.',
    diagnostic:
      '- TVP : douleur et œdème unilatéral; embolie pulmonaire : dyspnée brutale, douleur pleurale, syncope ou hypoxémie.\n- Estimer la probabilité clinique puis utiliser D-dimères ou imagerie selon l’algorithme et les ressources locales.\n- Hypotension, choc, syncope ou détresse respiratoire indiquent une embolie à haut risque et une prise en charge urgente.',
    etiologies:
      'Stase veineuse, lésion endothéliale et hypercoagulabilité; facteurs : immobilisation, chirurgie, cancer, grossesse/post-partum, œstrogènes, antécédent thrombotique et thrombophilie.',
    therapeutique:
      '- Confirmer rapidement selon la probabilité clinique et les examens accessibles; évaluer hémorragie et contre-indications.\n- Anticoagulation et durée adaptées au risque, à la cause, à la grossesse, au cancer, aux fonctions rénale/hépatique et aux recommandations.\n- Embolie avec choc ou instabilité : transfert urgent pour traitement de reperfusion selon protocole spécialisé.',
    evolution:
      'Risque de récidive, décès précoce et syndrome post-thrombotique; après embolie, une dyspnée persistante peut révéler une hypertension pulmonaire thromboembolique chronique.',
    references: sources.thromboembolism,
  }),
  fiche({
    slug: 'phenomene-de-raynaud-et-acrosyndromes',
    nom: 'Phénomène de Raynaud et acrosyndromes',
    resume:
      'Épisodes vasospastiques des extrémités; rechercher une cause secondaire et une ischémie tissulaire.',
    definition:
      'Le phénomène de Raynaud correspond à des épisodes réversibles de changement de couleur des doigts ou orteils déclenchés par le froid ou le stress. Les acrosyndromes regroupent d’autres troubles vasomoteurs des extrémités.',
    diagnostic:
      '- Décrire les changements de couleur, leur durée, la symétrie, les déclencheurs, la douleur et les lésions cutanées.\n- Début tardif, asymétrie, ulcères, nécrose, signes systémiques ou anomalie vasculaire suggèrent une cause secondaire.\n- Rechercher exposition au froid/vibrations, médicaments vasoconstricteurs et maladie auto-immune; examen complémentaire ciblé selon les signes.',
    etiologies:
      'Forme primaire vasospastique ou forme secondaire à une connectivite, une maladie vasculaire, un médicament, une exposition professionnelle ou une obstruction artérielle.',
    therapeutique:
      '- Conseils de protection contre le froid, arrêt du tabac et éviction des facteurs déclenchants.\n- Traiter une cause identifiée et envisager un traitement vasodilatateur selon sévérité, contre-indications et avis clinique.\n- Ulcération, douleur persistante, cyanose fixe ou nécrose nécessitent une évaluation urgente.',
    evolution:
      'La forme primaire est généralement bénigne; une forme secondaire peut entraîner ulcères, infection et perte tissulaire. Suivi adapté à la cause sous-jacente.',
    references: sources.raynaud,
  }),
];
