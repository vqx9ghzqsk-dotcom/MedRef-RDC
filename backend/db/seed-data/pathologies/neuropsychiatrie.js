'use strict';

/** Fiches — Neuropsychiatrie. Format : voir infectiologie.js. */

module.exports = [
  // =================================================================== État de mal épileptique
  {
    specialite: 'Épilepsie',
    slug: 'etat-de-mal-epileptique',
    nom: 'État de mal épileptique',
    resume:
      'Crise > 5 minutes ou crises subintrantes — urgence neurologique : benzodiazépine, puis 2e ligne avant 20 min.',
    definition:
      'Crise épileptique dont la durée dépasse 5 minutes (convulsive) ou succession de crises sans retour à un état de conscience normal entre elles (définition opérationnelle ILAE 2015 : t1 = 5 min, temps à partir duquel traiter ; t2 = 30 min, risque de lésions définitives).',
    physiopathologie:
      "## Mécanismes\n- Défaillance des mécanismes d'arrêt de la crise (déséquilibre GABA / glutamate)\n- Internalisation des récepteurs GABA-A : les benzodiazépines perdent leur efficacité avec le temps (traiter tôt)\n- Au-delà de 30 minutes : risque de lésions neuronales définitives et de défaillances systémiques",
    diagnostic:
      '## Clinique\n- Constater la crise et chronométrer sa durée\n- Conscience entre les crises (Glasgow ou Blantyre)\n- État de mal non convulsif : absence de réveil > 30 min après l’arrêt des mouvements → EEG\n\n## Contexte\n- Épilepsie connue (arrêt du traitement ?), fièvre, traumatisme, grossesse ou post-partum, alcool',
    examens: [
      [
        'premiere_intention',
        'glycemie',
        'Immédiate : une hypoglycémie se corrige et peut arrêter les crises.',
      ],
      ['premiere_intention', 'tdr-paludisme', 'Zone d’endémie : neuropaludisme.'],
      ['gravite', 'ionogramme', 'Hyponatrémie (cause ou conséquence).'],
      ['etiologique', 'calcemie-magnesemie', 'Hypocalcémie, hypomagnésémie.'],
      ['gravite', 'gaz-du-sang', 'Hypoxie, acidose lactique post-critique fréquente.'],
      ['etiologique', 'lcr', 'Fièvre ou suspicion de méningo-encéphalite, après stabilisation (± scanner).'],
      [
        'etiologique',
        'scanner-cerebral',
        'Premier état de mal, traumatisme, signes focaux, suspicion d’AVC, de tumeur ou d’abcès.',
      ],
      ['deuxieme_intention', 'eeg', 'État de mal non convulsif suspecté, état de mal réfractaire.'],
      ['etiologique', 'creatinine', 'Rhabdomyolyse, insuffisance rénale.'],
      ['etiologique', 'bandelette-urinaire', 'Femme enceinte ou en post-partum : protéinurie (éclampsie).'],
    ],
    scores: ['glasgow', 'blantyre', 'dose-ponderale'],
    differentiels: [
      [
        'Crises psychogènes non épileptiques',
        'Yeux fermés résistant à l’ouverture, mouvements asynchrones, pas de cyanose ni de confusion post-critique.',
      ],
      [
        'Syncope convulsivante',
        'Brève (< 30 s), récupération rapide, contexte (orthostatisme, émotion, cardiopathie).',
      ],
      [
        'Mouvements anormaux médicamenteux',
        'Dystonie aiguë (métoclopramide, halopéridol) : conscience normale.',
      ],
      [
        'Tétanos',
        'Contractures douloureuses, trismus, opisthotonos, conscience conservée ; plaie, absence de vaccination.',
      ],
      [
        'pre-eclampsie-severe',
        'Éclampsie : grossesse > 20 SA ou post-partum, HTA, protéinurie → sulfate de magnésium.',
      ],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Paludisme grave (neuropaludisme)\n- Méningites et encéphalites\n- Arrêt ou sous-dosage du traitement antiépileptique\n- Hypoglycémie, troubles ioniques\n- Traumatisme crânien, AVC, éclampsie\n- Sevrage alcoolique, intoxications',
    principes: [
      [
        '0–5 min : stabiliser et chronométrer',
        'Sécuriser les fonctions vitales.',
        '- PLS, aspiration, oxygène, voie veineuse\n- Glycémie capillaire (corriger si basse) ; thiamine avant le glucose si alcoolisme ou malnutrition',
      ],
      [
        '5–20 min : benzodiazépine (1re ligne)',
        'Arrêter la crise avant qu’elle ne devienne résistante.',
        '- Diazépam 10 mg IV (enfant 0,3 mg/kg IV ou 0,5 mg/kg intrarectal)\n- Ou midazolam IM (10 mg si > 40 kg ; 5 mg si 13–40 kg) ou buccal 0,3 mg/kg\n- Une seule répétition',
      ],
      [
        '20–40 min : antiépileptique de 2e ligne',
        'Contrôler l’état de mal établi.',
        '- Lévétiracétam 60 mg/kg (max 4,5 g), ou valproate 40 mg/kg (max 3 g), ou phénytoïne 20 mg/kg, ou phénobarbital 20 mg/kg\n- Efficacité comparable (essai ESETT) : choisir selon la disponibilité et le terrain',
      ],
      [
        '> 40 min : état de mal réfractaire',
        'Anesthésie générale en réanimation.',
        '- Midazolam, propofol ou thiopental en perfusion, intubation, monitorage EEG si possible',
      ],
      [
        'Rechercher et traiter la cause',
        'L’état de mal récidive si la cause persiste.',
        '- Paludisme : artésunate ; méningite : ceftriaxone ; éclampsie : sulfate de magnésium\n- Reprendre le traitement de fond interrompu',
      ],
      [
        'Après l’état de mal',
        'Prévenir la récidive.',
        '- Traitement de fond adapté, éducation sur l’observance, plan d’urgence pour l’entourage',
      ],
    ],
    molecules: [
      ['diazepam', 'premiere', 'IV ou intrarectal'],
      ['midazolam', 'premiere', 'IM ou buccal si pas de voie veineuse'],
      ['levetiracetam', 'deuxieme', '2e ligne'],
      ['acide-valproique', 'deuxieme', '2e ligne (éviter chez la jeune femme et en cas d’hépatopathie)'],
      ['phenobarbital', 'deuxieme', '2e ligne ; convulsions néonatales'],
      ['phenytoine', 'deuxieme', '2e ligne (sous scope)'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['sulfate-de-magnesium', 'adjuvant', 'Éclampsie'],
    ],
    complications: [
      {
        nom: 'Détresse respiratoire et inhalation',
        description: 'Obstruction des voies aériennes, inhalation, dépression respiratoire.',
        traitement:
          '- PLS, aspiration, oxygène ; intubation si nécessaire\n- Antibiothérapie si pneumopathie d’inhalation',
        clinique: '- FR, SpO2, encombrement',
        paraclinique: '- Gaz du sang, radiographie thoracique',
      },
      {
        nom: 'Hyperthermie',
        description: 'Activité musculaire intense ; aggrave les lésions neuronales.',
        traitement: '- Refroidissement externe, paracétamol',
        clinique: '- Température',
        paraclinique: '- Aucun examen indispensable',
      },
      {
        nom: 'Rhabdomyolyse et insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Lyse musculaire lors des convulsions prolongées.',
        traitement: '- Hydratation abondante, surveillance de la kaliémie',
        clinique: '- Urines foncées, diurèse, douleurs musculaires',
        paraclinique: '- Créatinine, kaliémie (CPK si disponibles)',
      },
      {
        nom: 'Acidose lactique',
        description: 'Fréquente, se corrige spontanément après l’arrêt des crises.',
        traitement: '- Contrôle des crises, oxygénation ; pas de bicarbonate systématique',
        clinique: '- Respiration',
        paraclinique: '- Lactates, gaz du sang',
      },
      {
        nom: 'Œdème cérébral et séquelles neurologiques',
        description: 'Risque proportionnel à la durée de l’état de mal.',
        traitement: '- Prévention par un contrôle rapide des crises ; rééducation',
        clinique: '- Récupération de la conscience, déficits, cognition',
        paraclinique: '- Imagerie cérébrale si récupération incomplète',
      },
      {
        nom: 'Iatrogénie',
        description: 'Dépression respiratoire et hypotension sous benzodiazépines et phénobarbital.',
        traitement: '- Ventilation au masque, remplissage ; ne pas dépasser deux doses de benzodiazépine',
        clinique: '- FR, PA, vigilance',
        paraclinique: '- SpO2',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 10 à 20 %, dépendant surtout de la cause et de la durée\n- Meilleur pronostic si l’état de mal est lié à un arrêt du traitement chez un épileptique connu\n\n## Suivi\n- Consultation neurologique, adaptation du traitement de fond',
    urgences: ['etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Troubles de la conscience', 'tres_frequent'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      "Définition opérationnelle de l'état de mal épileptique",
      'Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults',
      'mhGAP Intervention Guide 2.0',
    ],
  },

  // =================================================================== Épilepsie
  {
    specialite: 'Épilepsie',
    slug: 'epilepsie',
    nom: 'Épilepsie',
    resume:
      'Crises récurrentes non provoquées : classer (ILAE), traiter en monothérapie, éduquer et lutter contre la stigmatisation.',
    definition:
      'Maladie cérébrale définie (ILAE 2014) par : au moins 2 crises non provoquées à plus de 24 h d’intervalle ; ou 1 crise non provoquée avec un risque de récidive ≥ 60 % sur 10 ans ; ou un syndrome épileptique. Classification des crises (ILAE 2017) : début focal, généralisé ou inconnu.',
    physiopathologie:
      '## Mécanismes\n- Hyperexcitabilité et hypersynchronie d’une population de neurones\n- Causes : structurelles, génétiques, infectieuses, métaboliques, immunes, inconnues\n- En Afrique centrale : séquelles d’infections du SNC (paludisme cérébral, méningites), asphyxie périnatale, neurocysticercose, épilepsie associée à l’onchocercose (dont le « nodding syndrome », décrit en RDC)',
    diagnostic:
      '## Anamnèse (élément clé)\n- Description par un témoin (vidéo sur téléphone très utile)\n- Début focal (aura, signes moteurs d’un côté), généralisation, durée, confusion post-critique, morsure latérale de langue, perte d’urines\n- Facteurs déclenchants : privation de sommeil, alcool, fièvre, oubli du traitement\n\n## Examen\n- Examen neurologique complet, recherche de signes de la cause (nodules d’onchocercose, déficit)',
    examens: [
      ['premiere_intention', 'glycemie', 'Éliminer une crise symptomatique aiguë (hypoglycémie).'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie (crise provoquée).'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypocalcémie, hypomagnésémie.'],
      [
        'confirmation',
        'eeg',
        'Anomalies paroxystiques (pointes, pointes-ondes) : confirment et orientent la classification. Un EEG normal n’élimine pas le diagnostic.',
      ],
      [
        'etiologique',
        'scanner-cerebral',
        'Crise focale, déficit, début à l’âge adulte : lésion structurelle (séquelle, tumeur, neurocysticercose : kystes, calcifications).',
      ],
      [
        'etiologique',
        'irm-cerebrale',
        'Examen de choix des épilepsies focales (sclérose hippocampique, malformations corticales).',
      ],
      ['etiologique', 'ecg', 'Éliminer une syncope cardiaque (QT long, troubles conductifs).'],
      ['pretherapeutique', 'nfs', 'Avant carbamazépine ou valproate.'],
      ['pretherapeutique', 'bilan-hepatique', 'Avant valproate ou carbamazépine.'],
      ['pretherapeutique', 'beta-hcg', 'Femme en âge de procréer : choix de la molécule.'],
    ],
    scores: [],
    differentiels: [
      ['Syncope', 'Contexte (orthostatisme, émotion, effort), brève, récupération rapide sans confusion.'],
      [
        'Crises psychogènes non épileptiques',
        'Contexte psychologique, yeux fermés, mouvements asynchrones ; EEG normal pendant la crise.',
      ],
      [
        'avc',
        'Accident ischémique transitoire : déficit négatif (perte de fonction) brutal, sans mouvements.',
      ],
      ['Hypoglycémie', 'Diabétique traité ; glycémie basse pendant l’épisode.'],
      ['Migraine avec aura', 'Aura visuelle progressive de 5 à 60 min suivie de céphalée.'],
      ['Parasomnies', 'Terreurs nocturnes, somnambulisme chez l’enfant.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Séquelles d’infections du SNC (neuropaludisme, méningites, encéphalites)\n- Asphyxie périnatale, convulsions néonatales\n- Traumatismes crâniens, AVC\n- Neurocysticercose (élevage porcin), onchocercose (zones de transmission)\n- Causes génétiques, tumeurs',
    principes: [
      [
        'Confirmer le diagnostic et classer les crises',
        'Le type de crise oriente le choix du traitement.',
        '- Distinguer crise provoquée (traiter la cause) et épilepsie\n- Classification ILAE 2017',
      ],
      [
        'Rechercher une cause traitable',
        'Traiter la cause quand c’est possible.',
        '- Neurocysticercose : antiparasitaire (albendazole) et corticoïdes selon les lésions, en milieu spécialisé\n- Onchocercose : ivermectine (traitement communautaire)',
      ],
      [
        'Débuter un antiépileptique adapté, en monothérapie',
        'Obtenir l’absence de crises avec le moins d’effets indésirables.',
        '- En soins primaires (mhGAP) : phénobarbital, carbamazépine (crises focales), valproate (crises généralisées), selon disponibilité\n- Lévétiracétam ou lamotrigine si disponibles\n- Augmenter progressivement jusqu’à la dose efficace',
      ],
      [
        'Femme en âge de procréer',
        'Protéger la mère et l’enfant à naître.',
        '- Éviter le valproate (tératogène majeur) ; préférer lévétiracétam ou lamotrigine si disponibles\n- Inducteurs enzymatiques : contraception orale inefficace (préférer DIU ou injectable)\n- Acide folique avant la conception et pendant la grossesse',
      ],
      [
        'Éducation, sécurité et lutte contre la stigmatisation',
        'Améliorer la qualité de vie et l’observance.',
        '- Observance quotidienne, ne jamais arrêter brutalement\n- Prévention des brûlures (feu de cuisine), noyades, chutes ; conduite\n- Informer la famille, l’école et la communauté : l’épilepsie n’est ni contagieuse ni surnaturelle',
      ],
      [
        'Suivi et arrêt éventuel',
        'Réévaluer régulièrement.',
        '- Calendrier des crises, effets indésirables\n- Discuter l’arrêt progressif après 2 ans sans crise\n- Épilepsie pharmacorésistante (échec de 2 molécules bien conduites) : référence spécialisée',
      ],
    ],
    molecules: [
      [
        'phenobarbital',
        'premiere',
        '1re intention en soins primaires (mhGAP), crises focales et généralisées',
      ],
      ['carbamazepine', 'premiere', 'Crises focales'],
      [
        'acide-valproique',
        'premiere',
        'Crises généralisées (éviter chez la fille et la femme en âge de procréer)',
      ],
      [
        'levetiracetam',
        'alternative',
        'Large spectre ; préféré chez la femme en âge de procréer si disponible',
      ],
      ['phenytoine', 'alternative', 'Crises focales et tonico-cloniques'],
      ['acide-folique', 'adjuvant', 'Femme en âge de procréer sous antiépileptique'],
    ],
    complications: [
      {
        nom: 'État de mal épileptique',
        fiche: 'etat-de-mal-epileptique',
        description: 'Souvent favorisé par l’arrêt brutal du traitement.',
        traitement: '- Algorithme de l’état de mal',
        clinique: '- Durée des crises, conscience',
        paraclinique: '- Glycémie, ionogramme',
      },
      {
        nom: 'Traumatismes et brûlures',
        description: 'Brûlures graves (feu de cuisine), fractures, noyades.',
        traitement: '- Soins des lésions ; prévention (cuisson surélevée, ne jamais se baigner seul)',
        clinique: '- Lésions cutanées, douleurs osseuses',
        paraclinique: '- Radiographie si suspicion de fracture',
      },
      {
        nom: 'Mort subite inattendue (SUDEP)',
        description: 'Surtout en cas de crises tonico-cloniques nocturnes non contrôlées.',
        traitement: '- Optimiser le contrôle des crises, observance',
        clinique: '- Fréquence des crises tonico-cloniques et nocturnes',
        paraclinique: '- Aucun examen spécifique',
      },
      {
        nom: 'Effets indésirables des antiépileptiques',
        description:
          'Somnolence, troubles du comportement (phénobarbital chez l’enfant), éruptions graves (carbamazépine), hépatotoxicité (valproate), hyponatrémie.',
        traitement: '- Adapter la dose ou changer de molécule ; arrêt immédiat si éruption grave',
        clinique: '- Éruption (2 premiers mois), vigilance, comportement, scolarité',
        paraclinique: '- NFS, bilan hépatique, natrémie selon la molécule',
      },
      {
        nom: 'Troubles psychiatriques et cognitifs associés',
        description: 'Dépression, anxiété, troubles de l’apprentissage.',
        traitement: '- Dépistage et prise en charge (mhGAP), soutien psychosocial et scolaire',
        clinique: '- Humeur, sommeil, idées suicidaires, résultats scolaires',
        paraclinique: '- Aucun examen spécifique',
      },
      {
        nom: 'Épilepsie pharmacorésistante',
        description: 'Persistance des crises malgré 2 antiépileptiques adaptés et bien pris.',
        traitement: '- Vérifier diagnostic et observance ; référence spécialisée (bithérapie, chirurgie)',
        clinique: '- Calendrier des crises',
        paraclinique: '- EEG, IRM cérébrale',
      },
    ],
    evolution:
      '## Pronostic\n- Environ 70 % des patients deviennent libres de crises sous traitement bien conduit\n- En RDC, l’écart de traitement reste important (accès, coût, stigmatisation)\n\n## Suivi\n- Consultation régulière, renouvellement sans rupture du traitement',
    urgences: ['etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      'ILAE — A practical clinical definition of epilepsy',
      'ILAE — Operational classification of seizure types',
      'mhGAP Intervention Guide 2.0',
    ],
  },

  // =================================================================== AVC
  {
    specialite: 'AVC',
    slug: 'avc',
    nom: 'Accident vasculaire cérébral (AVC)',
    resume:
      'Déficit neurologique brutal : FAST, scanner en urgence, thrombolyse < 4 h 30 si ischémique, contrôle tensionnel si hémorragique.',
    definition:
      'Déficit neurologique focal d’installation brutale, d’origine vasculaire. AVC ischémique (occlusion artérielle) ou hémorragique (hématome intraparenchymateux, hémorragie méningée). L’accident ischémique transitoire (AIT) régresse sans lésion à l’imagerie. La part des AVC hémorragiques est plus élevée en Afrique subsaharienne, en lien avec l’HTA non contrôlée.',
    physiopathologie:
      '## AVC ischémique\n- Occlusion par athérosclérose, embolie cardiaque (FA, valvulopathie rhumatismale, cardiomyopathie) ou lacune (petites artères, HTA)\n- Zone de pénombre ischémique récupérable si reperfusion rapide\n\n## AVC hémorragique\n- Rupture de petites artères fragilisées par l’HTA chronique, malformations, troubles de la coagulation',
    diagnostic:
      '## Reconnaître (FAST)\n- **F**ace : asymétrie du visage\n- **A**rm : faiblesse d’un bras\n- **S**peech : trouble de la parole\n- **T**ime : noter l’heure exacte du début (ou de la dernière fois vu normal)\n\n## Évaluer\n- Score NIHSS, glycémie capillaire, PA\n- Arguments pour une hémorragie (céphalées, vomissements, troubles de la conscience) : seul le scanner tranche',
    examens: [
      [
        'confirmation',
        'scanner-cerebral',
        'En urgence : hémorragie (hyperdensité) ou ischémie (souvent normal à la phase précoce, signes précoces). Indispensable avant toute thrombolyse ou antithrombotique.',
      ],
      [
        'deuxieme_intention',
        'irm-cerebrale',
        'Diffusion : ischémie dès les premières minutes ; AVC du réveil (discordance diffusion/FLAIR).',
      ],
      [
        'premiere_intention',
        'glycemie',
        'Éliminer une hypoglycémie simulant un AVC ; traiter une hyperglycémie > 1,8 g/L.',
      ],
      ['premiere_intention', 'nfs', 'Plaquettes > 100 G/L requises pour la thrombolyse.'],
      [
        'premiere_intention',
        'hemostase',
        'INR ≤ 1,7 pour la thrombolyse (attendre le résultat seulement si anticoagulant ou trouble connu).',
      ],
      [
        'premiere_intention',
        'ecg',
        'Fibrillation atriale (cause cardio-embolique), ischémie myocardique associée.',
      ],
      ['premiere_intention', 'creatinine', 'Fonction rénale (traitements, imagerie injectée).'],
      [
        'etiologique',
        'echocardiographie',
        'Source embolique : thrombus, valvulopathie rhumatismale, cardiomyopathie, endocardite.',
      ],
      ['etiologique', 'bilan-lipidique', 'Facteur de risque (objectif LDL).'],
      ['etiologique', 'hba1c', 'Diabète méconnu.'],
      ['etiologique', 'tdr-vih', 'Sujet jeune : vasculopathie liée au VIH, infections opportunistes.'],
      ['etiologique', 'electrophorese-hb', 'Enfant ou sujet jeune : drépanocytose.'],
      ['suivi', 'scanner-cerebral', 'À 24 h d’une thrombolyse, ou en cas d’aggravation neurologique.'],
    ],
    scores: ['nihss', 'glasgow'],
    differentiels: [
      ['Hypoglycémie', 'Glycémie capillaire systématique : déficit régressif après correction.'],
      ['epilepsie', 'Déficit post-critique (paralysie de Todd) après une crise.'],
      ['Migraine avec aura', 'Signes positifs progressifs, céphalée secondaire, antécédents.'],
      [
        'Tumeur ou abcès cérébral',
        'Installation progressive ; PVVIH : toxoplasmose cérébrale (lésions en cocarde).',
      ],
      ['traumatisme-cranien', 'Hématome sous-dural chronique (sujet âgé, chute) : installation progressive.'],
      ['meningite-bacterienne', 'Fièvre, raideur de nuque, troubles de la conscience.'],
    ],
    etiologies:
      '## Facteurs de risque\n- HTA (premier facteur, en particulier pour les hémorragies)\n- Diabète, dyslipidémie, tabac, obésité, sédentarité, alcool\n- Fibrillation atriale, cardiopathies rhumatismales\n- Sujet jeune : drépanocytose, VIH, cardiomyopathie du péripartum, contraception œstroprogestative',
    principes: [
      [
        'Reconnaître et orienter en urgence',
        '« Time is brain » : chaque minute compte.',
        '- FAST, heure de début\n- Transfert vers un centre disposant d’un scanner (et si possible de la thrombolyse)',
      ],
      [
        'Imagerie cérébrale immédiate',
        'Distinguer ischémie et hémorragie.',
        '- Scanner sans injection avant tout traitement antithrombotique',
      ],
      [
        'AVC ischémique : reperfusion si éligible',
        'Sauver la zone de pénombre.',
        '- Altéplase 0,9 mg/kg (max 90 mg) dans les 4 h 30 (ténectéplase en alternative selon ESO)\n- PA < 185/110 mmHg avant et < 180/105 mmHg pendant 24 h\n- Thrombectomie mécanique si disponible (occlusion proximale)',
      ],
      [
        'AVC ischémique non thrombolysé : aspirine',
        'Réduire la récidive précoce.',
        '- Aspirine 160–300 mg dans les 48 h, après scanner\n- Double antiagrégation 21 jours si AVC mineur ou AIT à haut risque\n- Ne pas baisser la PA sauf si > 220/120 mmHg',
      ],
      [
        'AVC hémorragique : contrôle tensionnel et coagulation',
        'Limiter l’expansion de l’hématome.',
        '- Baisser la PAS vers 140 mmHg (sans descendre sous 130) dans l’heure (nicardipine, labétalol)\n- Corriger un trouble de la coagulation, arrêter les antithrombotiques\n- Avis neurochirurgical : hématome cérébelleux > 3 cm, hydrocéphalie',
      ],
      [
        'Mesures générales',
        'Prévenir les complications qui tuent après l’AVC.',
        '- Test de déglutition avant toute alimentation, position, glycémie 1,4–1,8 g/L, paracétamol si fièvre\n- Prévention des thromboses, des escarres, mobilisation et rééducation précoces',
      ],
      [
        'Prévention secondaire',
        'Éviter la récidive.',
        '- Contrôle tensionnel, statine, antiagrégant (ou anticoagulant si FA), équilibre du diabète, arrêt du tabac',
      ],
    ],
    molecules: [
      ['alteplase', 'premiere', 'AVC ischémique < 4 h 30, éligible à la thrombolyse'],
      [
        'acide-acetylsalicylique',
        'premiere',
        'AVC ischémique non thrombolysé (dans les 48 h) puis prévention secondaire',
      ],
      ['atorvastatine', 'premiere', 'Prévention secondaire (AVC ischémique)'],
      ['nicardipine', 'adjuvant', 'PA > 185/110 avant thrombolyse ; AVC hémorragique (cible PAS ≈ 140)'],
      ['labetalol', 'adjuvant', 'Contrôle tensionnel à la phase aiguë'],
      ['amlodipine', 'adjuvant', 'HTA au long cours (prévention secondaire)'],
      ['paracetamol', 'adjuvant', 'Fièvre > 37,5 °C'],
      ['insuline-humaine-rapide', 'adjuvant', 'Hyperglycémie > 1,8 g/L'],
    ],
    complications: [
      {
        nom: 'Transformation hémorragique, œdème et hypertension intracrânienne',
        description: 'Aggravation neurologique dans les premiers jours, infarctus étendu « malin ».',
        traitement:
          '- Arrêt des antithrombotiques si hémorragie\n- Osmothérapie, tête à 30°\n- Craniectomie décompressive (sujet jeune, infarctus sylvien malin) si disponible',
        clinique: '- Glasgow, pupilles, NIHSS toutes les 1–4 h les 24–72 premières heures',
        paraclinique: '- Scanner cérébral en urgence en cas d’aggravation',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        description: 'Première cause de décès après l’AVC ; liée aux troubles de la déglutition.',
        traitement:
          '- Test de déglutition systématique, alimentation adaptée ou par sonde\n- Antibiothérapie si pneumopathie',
        clinique: '- Toux aux repas, FR, température, SpO2',
        paraclinique: '- Radiographie thoracique, NFS',
      },
      {
        nom: 'Thrombose veineuse et embolie pulmonaire',
        description: 'Membre parétique immobilisé.',
        traitement:
          '- Compression pneumatique intermittente ; héparine préventive (AVC ischémique) à partir de 24–48 h',
        clinique: '- Mollet (douleur, œdème), dyspnée brutale',
        paraclinique: '- Écho-Doppler veineux',
      },
      {
        nom: 'Escarres, rétention et infections urinaires',
        description: 'Complications du décubitus.',
        traitement:
          '- Retournements toutes les 2–3 h, matelas adapté, sondage intermittent plutôt qu’à demeure',
        clinique: '- Points d’appui, globe vésical, température',
        paraclinique: '- ECBU si fièvre',
      },
      {
        nom: 'Crises épileptiques post-AVC',
        fiche: 'epilepsie',
        description: 'Précoces ou tardives (épilepsie séquellaire).',
        traitement: '- Traitement antiépileptique si crise (pas de prophylaxie systématique)',
        clinique: '- Crises, fluctuations de vigilance',
        paraclinique: '- EEG',
      },
      {
        nom: 'Dépression et séquelles',
        description: 'Handicap moteur, aphasie, dépression post-AVC fréquente.',
        traitement:
          '- Rééducation (kinésithérapie, orthophonie), soutien psychologique, antidépresseur si indiqué',
        clinique: '- Autonomie, humeur, déglutition, langage',
        paraclinique: '- Aucun examen spécifique',
      },
      {
        nom: 'Récidive',
        description: 'Risque maximal les premières semaines.',
        traitement: '- Prévention secondaire rigoureuse',
        clinique: '- PA à chaque consultation, observance',
        paraclinique: '- Bilan lipidique, HbA1c',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité à 1 mois de 20 à 30 % en Afrique subsaharienne, plus élevée pour les hémorragies\n- La prise en charge en unité spécialisée et la rééducation précoce réduisent décès et handicap\n\n## Suivi\n- Consultation à 1–3 mois puis régulière ; contrôle des facteurs de risque',
    urgences: ['avc-aigu', 'urgence-hypertensive'],
    symptomes: [
      ['Déficit moteur', 'tres_frequent'],
      ['Troubles du langage', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Troubles visuels', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
      ['Convulsions', 'rare'],
    ],
    sources: [
      'European Stroke Organisation (ESO) guidelines on intravenous thrombolysis for acute ischaemic stroke',
      'Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update',
      '2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage',
    ],
  },
];
