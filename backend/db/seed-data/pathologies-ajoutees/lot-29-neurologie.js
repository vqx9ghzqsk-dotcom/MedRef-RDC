'use strict';

/**
 * Lot 29 (neurologie) — céphalées et migraine, neuropathies périphériques, syndrome de
 * Guillain-Barré, paralysie faciale périphérique, coma (démarche), hypertension intracrânienne,
 * neuropathie ataxique tropicale. Rédigé par IA (OMS, mhGAP, AAN, EAN, ouvrages de référence) :
 * à valider.
 */

const NEU = { departement: 'neuropsychiatrie', specialite: 'Neurologie' };

module.exports = [
  // =================================================================== Céphalées et migraine
  {
    ...NEU,
    slug: 'cephalees-migraine',
    nom: 'Céphalées et migraine',
    resume:
      'Motif très fréquent : distinguer les céphalées primaires (migraine, céphalée de tension) des céphalées secondaires graves (drapeaux rouges : début brutal, fièvre, raideur de nuque, déficit, HTIC, grossesse, VIH, > 50 ans) ; migraine : paracétamol, ibuprofène ou aspirine précoces ± métoclopramide, triptan ; traitement de fond (propranolol, amitriptyline) si crises fréquentes ; éviter l’abus d’antalgiques.',
    definition:
      'Douleurs de la tête, primaires (migraine, céphalée de tension, algie vasculaire) ou secondaires à une autre affection (méningite, hémorragie méningée, HTIC, paludisme, HTA sévère, sinusite…).',
    physiopathologie:
      '## Migraine\n- Activation du système trigémino-vasculaire, libération de neuropeptides (CGRP), sensibilisation centrale ; aura liée à une dépression corticale envahissante\n- Facteurs déclenchants : stress, manque de sommeil, jeûne, règles, alcool\n\n## Céphalée de tension\n- Céphalée en casque, bilatérale, liée au stress et aux tensions musculaires\n\n## Céphalée par abus médicamenteux\n- Prise d’antalgiques plus de 10–15 jours par mois',
    diagnostic:
      '## Drapeaux rouges (céphalée secondaire)\n- Début **brutal** (hémorragie méningée), **fièvre** et raideur de nuque (méningite, paludisme), **déficit** neurologique, convulsions, troubles de conscience\n- Céphalée progressive matinale avec vomissements (**HTIC**), œdème papillaire\n- Âge > 50 ans (artérite), **VIH** (cryptococcose, toxoplasmose), grossesse ou post-partum (pré-éclampsie, thrombose veineuse), HTA sévère, traumatisme\n\n## Migraine (critères)\n- Crises de 4 à 72 heures, unilatérale, pulsatile, intensité modérée à sévère, aggravée par l’effort\n- Nausées, vomissements, photophobie, phonophobie ; aura visuelle possible\n\n## Examens\n- Aucun si céphalée primaire typique avec examen normal\n- Selon le contexte : TDR paludisme, tension artérielle, fond d’œil, scanner cérébral, ponction lombaire, test VIH, CrAg',
    examens: [
      ['premiere_intention', 'tdr-paludisme', 'Céphalées fébriles.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Drapeaux rouges.'],
      ['deuxieme_intention', 'lcr', 'Fièvre, raideur, céphalée brutale avec scanner normal.'],
      ['deuxieme_intention', 'fond-d-oeil', 'Œdème papillaire.'],
      ['etiologique', 'crag-cryptocoque', 'Patient VIH.'],
      ['etiologique', 'tdr-vih', 'Céphalées inhabituelles.'],
    ],
    scores: [],
    differentiels: [
      ['hemorragie-meningee', 'Céphalée brutale en coup de tonnerre.'],
      ['meningite-bacterienne', 'Fièvre, raideur de nuque.'],
      ['meningite-a-cryptocoque', 'VIH, céphalées progressives.'],
      ['hypertension-intracranienne', 'Céphalées matinales, vomissements, œdème papillaire.'],
      ['urgences-hypertensives', 'HTA sévère.'],
      ['paludisme-simple', 'Fièvre en zone d’endémie.'],
      ['Sinusite', 'Douleur faciale, rhinorrhée purulente.'],
    ],
    etiologies:
      '## Terrain\n- Migraine : femme jeune, antécédents familiaux\n- Céphalée de tension : stress, dépression, troubles du sommeil',
    principes: [
      [
        'Céphalée secondaire',
        'Traiter la cause.',
        '- Tout drapeau rouge impose un bilan et le traitement de la cause (paludisme, méningite, HTA, HTIC…)',
      ],
      [
        'Crise de migraine',
        'Soulager tôt.',
        '- **Paracétamol** 1 g, **ibuprofène** 400 mg ou **aspirine** 900 mg dès le début, + **métoclopramide** si nausées\n- **Triptan** (rizatriptan, zolmitriptan) si échec, hors contre-indications cardiovasculaires\n- Repos au calme et dans l’obscurité',
      ],
      [
        'Traitement de fond',
        'Réduire la fréquence.',
        '- Si ≥ 4 crises par mois ou retentissement : **propranolol** 40–160 mg/j, **amitriptyline** 10–50 mg le soir, valproate (pas chez la femme en âge de procréer)\n- Agenda des crises, hygiène de vie, limitation des antalgiques (< 10 jours/mois)',
      ],
      [
        'Céphalée de tension',
        'Soulager et prévenir.',
        '- Paracétamol ou AINS ponctuels ; **amitriptyline** si chronique ; gestion du stress, prise en charge d’une dépression',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Crise'],
      ['ibuprofene', 'premiere', 'Crise'],
      ['acide-acetylsalicylique', 'alternative', 'Crise'],
      ['metoclopramide', 'adjuvant', 'Nausées'],
      ['rizatriptan', 'deuxieme', 'Crise de migraine'],
      ['zolmitriptan', 'deuxieme', 'Crise de migraine'],
      ['propranolol', 'premiere', 'Traitement de fond'],
      ['amitriptyline', 'premiere', 'Traitement de fond, céphalée de tension'],
    ],
    complications: [
      {
        nom: 'Céphalée par abus médicamenteux',
        description: 'Prises répétées d’antalgiques.',
        traitement: '- Sevrage, traitement de fond',
        clinique: '- Céphalées quotidiennes',
        paraclinique: '',
      },
      {
        nom: 'État de mal migraineux',
        description: 'Crise > 72 heures.',
        traitement: '- Hydratation, AINS IV, métoclopramide, corticoïde',
        clinique: '- Céphalée persistante, vomissements',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bénin pour les céphalées primaires ; amélioration de la migraine avec l’âge et la ménopause',
    urgences: ['syndrome-meninge-febrile', 'avc-aigu'],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Photophobie', 'frequent'],
      ['Troubles visuels', 'occasionnel'],
      ['Troubles du sommeil', 'occasionnel'],
    ],
    sources: [
      'mhGAP Intervention Guide 2.0',
      "Adams and Victor's Principles of Neurology",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Recherche des drapeaux rouges, traitement de crise, TDR paludisme', '- Drapeau rouge'],
      hgr: ['- Scanner, ponction lombaire, traitement de fond', ''],
      tert: ['- Neurologie, IRM', ''],
    },
    alertes: {
      'syndrome-meninge-febrile': 'Céphalées avec fièvre et raideur de nuque',
      'avc-aigu': 'Céphalée brutale ou avec déficit neurologique',
    },
    formes: [
      {
        nom: 'Migraine sans aura',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Femme jeune',
        fonctionnels: '- Céphalée unilatérale pulsatile, nausées, photophobie',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- Aucun examen nécessaire',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Migraine avec aura',
        type: 'etiologique',
        description: 'Aura visuelle ou sensitive.',
        terrain: '',
        fonctionnels: '- Scotome scintillant puis céphalée',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Céphalée de tension',
        type: 'etiologique',
        description: 'Céphalée en casque.',
        terrain: '- Stress, dépression',
        fonctionnels: '- Pression bilatérale, sans nausées',
        generaux: '',
        physiques: '- Contractures cervicales',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Céphalée secondaire grave',
        type: 'gravite',
        description: 'Drapeaux rouges.',
        terrain: '- VIH, grossesse, HTA, > 50 ans',
        fonctionnels: '- Céphalée brutale ou progressive',
        generaux: '- Fièvre',
        physiques: '- Raideur, déficit, œdème papillaire',
        paraclinique: '- Anomalies à l’imagerie ou au LCR',
        etiologies: '- Méningite, hémorragie, HTIC',
        syndromes: ['syndrome-meninge', 'syndrome-d-hypertension-intracranienne'],
      },
    ],
  },

  // =================================================================== Neuropathies périphériques
  {
    ...NEU,
    slug: 'neuropathies-peripheriques',
    nom: 'Neuropathies périphériques',
    resume:
      'Atteintes des nerfs périphériques, très fréquentes en RDC : diabète, VIH et antirétroviraux anciens, isoniazide sans pyridoxine, alcool, carences, lèpre, toxiques (manioc) ; polyneuropathie sensitive distale (brûlures, fourmillements des pieds) : traiter la cause, pyridoxine, vitamines B, amitriptyline ou carbamazépine contre la douleur, protection des pieds.',
    definition:
      'Atteinte du système nerveux périphérique : polyneuropathie (symétrique, distale), mononeuropathie (un nerf), mononeuropathie multiple ou polyradiculonévrite.',
    physiopathologie:
      '## Causes\n- **Métaboliques** : **diabète** (la plus fréquente), insuffisance rénale, hypothyroïdie\n- **Infectieuses** : **VIH**, **lèpre** (nerfs hypertrophiés), syphilis, zona\n- **Médicamenteuses** : **isoniazide** (carence en B6), stavudine/didanosine (anciens ARV), vincristine, métronidazole prolongé\n- **Carentielles et toxiques** : alcool, carences en B1, B6, B12, **cyanure du manioc** (neuropathie ataxique tropicale)\n- Immunologiques : Guillain-Barré, vascularites\n- Compressions : canal carpien, nerf fibulaire',
    diagnostic:
      '## Clinique\n- **Polyneuropathie** : paresthésies, brûlures, engourdissement « en chaussettes » puis « en gants », douleurs nocturnes\n- Abolition des réflexes achilléens, hypoesthésie, troubles de la sensibilité profonde (ataxie)\n- Déficit moteur distal, amyotrophie\n- Lèpre : nerfs hypertrophiés, plaques hypopigmentées anesthésiques\n- Signes dysautonomiques (hypotension orthostatique, troubles digestifs)\n\n## Examens\n- **Glycémie**, HbA1c, créatinine, NFS (macrocytose), test VIH, sérologie syphilis, TSH, vitamine B12 si disponible\n- **Électroneuromyogramme** si disponible',
    examens: [
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'hba1c', 'Diabète.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'nfs', 'Macrocytose (B12, alcool).'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'frottis-lepre', 'Lèpre.'],
      ['confirmation', 'electromyogramme', 'Type d’atteinte.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-de-guillain-barre', 'Installation rapide, ascendante, aréflexie.'],
      ['compression-medullaire', 'Niveau sensitif, troubles sphinctériens, signes pyramidaux.'],
      ['konzo', 'Paraparésie spastique brutale.'],
      ['neuropathie-ataxique-tropicale', 'Manioc, ataxie, baisse de vision, surdité.'],
      ['lepre', 'Nerfs hypertrophiés, plaques cutanées.'],
    ],
    etiologies:
      '## Terrain\n- Diabétiques, patients VIH, traitement antituberculeux, alcooliques, consommateurs de manioc mal roui, dénutris',
    principes: [
      [
        'Traitement de la cause',
        'Stopper la progression.',
        '- Équilibre glycémique, arrêt de l’alcool, changement d’ARV neurotoxique\n- **Pyridoxine** (vitamine B6) 10–25 mg/j en prévention sous isoniazide, 50–100 mg/j si neuropathie\n- **Thiamine**, **vitamine B12** si carence ; traitement de la lèpre (polychimiothérapie)',
      ],
      [
        'Douleurs neuropathiques',
        'Soulager.',
        '- **Amitriptyline** 10–75 mg le soir, ou **carbamazépine** ; gabapentine ou prégabaline si disponibles\n- Paracétamol et AINS peu efficaces',
      ],
      [
        'Prévention des complications',
        'Protéger les pieds.',
        '- Examen quotidien des pieds, chaussures adaptées, soins des plaies (pied diabétique, lèpre)\n- Kinésithérapie, prévention des chutes',
      ],
    ],
    molecules: [
      ['pyridoxine', 'premiere', 'Neuropathie à l’isoniazide'],
      ['vitamine-b1-thiamine', 'premiere', 'Carence, alcoolisme'],
      ['cyanocobalamine-vitamine-b12', 'alternative', 'Carence en B12'],
      ['amitriptyline', 'premiere', 'Douleurs neuropathiques'],
      ['carbamazepine', 'alternative', 'Douleurs neuropathiques'],
      ['gabapentine', 'alternative', 'Douleurs neuropathiques'],
      ['pregabaline', 'alternative', 'Douleurs neuropathiques'],
    ],
    complications: [
      {
        nom: 'Pied diabétique et maux perforants',
        fiche: 'pied-diabetique',
        description: 'Perte de la sensibilité protectrice.',
        traitement: '- Décharge, soins, antibiotiques',
        clinique: '- Ulcère indolore',
        paraclinique: '',
      },
      {
        nom: 'Chutes et traumatismes',
        description: 'Ataxie, hypotension orthostatique.',
        traitement: '- Kinésithérapie, prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Douleurs chroniques et dépression',
        description: 'Neuropathie douloureuse.',
        traitement: '- Antidépresseurs, soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Stabilisation ou amélioration si la cause est corrigée tôt ; séquelles fréquentes',
    urgences: [],
    symptomes: [
      ['Troubles sensitifs', 'tres_frequent'],
      ['Faiblesse musculaire', 'frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Anesthésie cutanée', 'occasionnel'],
    ],
    sources: [
      "Adams and Victor's Principles of Neurology",
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Rechercher la cause (diabète, VIH, isoniazide), pyridoxine, amitriptyline, soins des pieds',
        '- Déficit moteur rapide, atteinte asymétrique',
      ],
      hgr: ['- Bilan étiologique', ''],
      tert: ['- ENMG, biopsie nerveuse, neurologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Polyneuropathie sensitive distale',
        type: 'commune',
        description: 'Diabète, VIH, isoniazide.',
        terrain: '- Diabétique, patient VIH',
        fonctionnels: '- Brûlures, fourmillements des pieds',
        generaux: '',
        physiques: '- Hypoesthésie en chaussettes, aréflexie achilléenne',
        paraclinique: '- Glycémie, test VIH',
        etiologies: '- Diabète, VIH, isoniazide, alcool',
        syndromes: [],
      },
      {
        nom: 'Mononeuropathie multiple',
        type: 'etiologique',
        description: 'Atteinte de plusieurs nerfs.',
        terrain: '- Lèpre, vascularite, diabète',
        fonctionnels: '- Déficits asymétriques',
        generaux: '',
        physiques: '- Nerfs hypertrophiés (lèpre)',
        paraclinique: '',
        etiologies: '- Lèpre, vascularites',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Guillain-Barré
  {
    ...NEU,
    slug: 'syndrome-de-guillain-barre',
    nom: 'Syndrome de Guillain-Barré',
    resume:
      'Polyradiculonévrite aiguë post-infectieuse : faiblesse ascendante symétrique rapide avec aréflexie en quelques jours ; risque de détresse respiratoire et de dysautonomie ; hospitalisation et surveillance (capacité vitale, déglutition), immunoglobulines IV ou échanges plasmatiques, prévention de la thrombose, kinésithérapie ; signaler toute paralysie flasque aiguë (surveillance de la polio).',
    definition:
      'Polyradiculonévrite inflammatoire aiguë d’origine auto-immune, démyélinisante ou axonale, dont la phase d’extension dure moins de 4 semaines.',
    physiopathologie:
      '## Mécanismes\n- Mimétisme moléculaire après une infection (Campylobacter jejuni, CMV, EBV, Zika, COVID-19, VIH à la séroconversion)\n- Anticorps contre la myéline ou les axones des nerfs périphériques et des racines\n- Phases : extension (< 4 semaines), plateau, récupération (mois)',
    diagnostic:
      '## Clinique\n- Antécédent infectieux (diarrhée, infection respiratoire) 1 à 4 semaines avant\n- **Faiblesse progressive, symétrique, ascendante** des membres inférieurs puis supérieurs\n- **Aréflexie** ostéotendineuse, paresthésies, douleurs lombaires\n- Atteinte des nerfs crâniens (diplégie faciale, troubles de la déglutition)\n- **Signes de gravité** : détresse respiratoire (toux faible, compter à voix haute sur une expiration < 20), troubles de la déglutition, dysautonomie (tachycardie, variations tensionnelles)\n\n## Examens\n- **Ponction lombaire** : **dissociation albumino-cytologique** (protéines élevées, < 10 cellules/mm³), parfois normale la première semaine ; > 50 cellules : penser au VIH\n- ENMG, test VIH, ionogramme (hypokaliémie), prélèvement de selles (poliovirus) chez l’enfant',
    examens: [
      ['confirmation', 'lcr', 'Dissociation albumino-cytologique.'],
      ['confirmation', 'electromyogramme', 'Démyélinisation ou atteinte axonale.'],
      ['premiere_intention', 'ionogramme', 'Hypokaliémie (diagnostic différentiel).'],
      ['etiologique', 'tdr-vih', 'Séroconversion VIH.'],
      ['gravite', 'gaz-du-sang', 'Insuffisance respiratoire.'],
      ['gravite', 'ecg', 'Dysautonomie.'],
      ['etiologique', 'selles-poliovirus', 'Surveillance des paralysies flasques aiguës.'],
    ],
    scores: [],
    differentiels: [
      ['poliomyelite-paralysies-flasques-aigues', 'Paralysie asymétrique fébrile, LCR cellulaire.'],
      ['compression-medullaire', 'Niveau sensitif, troubles sphinctériens précoces.'],
      ['Myélite transverse', 'Niveau sensitif, signes pyramidaux après la phase de choc.'],
      ['Paralysie périodique hypokaliémique', 'Kaliémie basse, récupération rapide.'],
      ['Botulisme', 'Paralysie descendante, mydriase.'],
      ['Myasthénie', 'Fatigabilité, ptosis, réflexes conservés.'],
      ['konzo', 'Paraparésie spastique, réflexes vifs.'],
    ],
    etiologies:
      '## Déclencheurs\n- Infections digestives (Campylobacter), respiratoires, VIH, arboviroses, vaccinations (rare)',
    principes: [
      [
        'Surveillance et soins',
        'Prévenir les décès.',
        '- Hospitalisation ; surveillance de la **fonction respiratoire** (capacité vitale, toux, comptage), déglutition, pouls, tension\n- **Ventilation** si capacité vitale < 20 mL/kg, troubles de déglutition, encombrement\n- Prévention de la thrombose (**enoxaparine**), des escarres, des pneumopathies ; sonde nasogastrique si troubles de déglutition\n- Antalgiques (paracétamol, gabapentine, amitriptyline)',
      ],
      [
        'Traitement immunologique',
        'Accélérer la récupération.',
        '- **Immunoglobulines IV** 0,4 g/kg/j pendant 5 jours, ou **échanges plasmatiques**, dans les 2 (à 4) premières semaines chez les patients ne pouvant pas marcher\n- **Pas de corticoïdes**',
      ],
      [
        'Rééducation',
        'Récupérer l’autonomie.',
        '- Kinésithérapie précoce, soutien psychologique, réinsertion\n- Notifier la paralysie flasque aiguë (enfant < 15 ans) au programme de surveillance de la polio',
      ],
    ],
    molecules: [
      ['immunoglobulines-humaines-polyvalentes', 'premiere', 'Traitement immunologique'],
      ['enoxaparine', 'premiere', 'Prévention de la thrombose'],
      ['paracetamol', 'adjuvant', 'Douleurs'],
      ['gabapentine', 'adjuvant', 'Douleurs neuropathiques'],
      ['amitriptyline', 'adjuvant', 'Douleurs neuropathiques'],
    ],
    complications: [
      {
        nom: 'Insuffisance respiratoire',
        description: 'Atteinte des muscles respiratoires.',
        traitement: '- Ventilation mécanique',
        clinique: '- Toux faible, dyspnée, encombrement',
        paraclinique: '- Capacité vitale, gaz du sang',
      },
      {
        nom: 'Dysautonomie',
        description: 'Troubles du rythme, variations tensionnelles.',
        traitement: '- Surveillance, traitement symptomatique',
        clinique: '- Tachycardie, hypotension',
        paraclinique: '- ECG',
      },
      {
        nom: 'Thrombose veineuse et embolie pulmonaire',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Immobilisation.',
        traitement: '- Anticoagulation',
        clinique: '- Œdème du mollet',
        paraclinique: '- Écho-Doppler',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Troubles de déglutition.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération complète ou quasi complète chez 80 % des patients en 6 à 12 mois ; mortalité de 3 à 10 % (plus élevée sans ventilation)',
    urgences: [],
    symptomes: [
      ['Faiblesse musculaire', 'tres_frequent'],
      ['Paralysie flasque', 'tres_frequent'],
      ['Troubles sensitifs', 'frequent'],
      ['Troubles de la marche', 'tres_frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Paralysie faciale', 'occasionnel'],
      ['Dysphagie', 'occasionnel'],
    ],
    sources: [
      "Adams and Victor's Principles of Neurology",
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Reconnaître, notifier les PFA, transfert', '- Toute faiblesse ascendante rapide'],
      hgr: [
        '- Surveillance respiratoire, ponction lombaire, prévention des complications',
        '- Insuffisance respiratoire, IgIV',
      ],
      tert: ['- Réanimation, IgIV, échanges plasmatiques, ENMG', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme démyélinisante classique',
        type: 'commune',
        description: 'Polyradiculonévrite aiguë.',
        terrain: '- Adulte jeune, après une infection',
        fonctionnels: '- Faiblesse ascendante, paresthésies',
        generaux: '',
        physiques: '- Tétraparésie flasque, aréflexie',
        paraclinique: '- Dissociation albumino-cytologique',
        etiologies: '- Post-infectieuse',
        syndromes: [],
        examens: [['lcr', 'Protéines élevées, cellules normales']],
      },
      {
        nom: 'Forme grave respiratoire',
        type: 'gravite',
        description: 'Atteinte des muscles respiratoires et bulbaires.',
        terrain: '',
        fonctionnels: '- Dyspnée, troubles de déglutition',
        generaux: '- Dysautonomie',
        physiques: '- Toux faible, diplégie faciale',
        paraclinique: '- Capacité vitale < 20 mL/kg',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Forme axonale motrice',
        type: 'etiologique',
        description: 'Après Campylobacter.',
        terrain: '- Enfant, adulte jeune',
        fonctionnels: '- Déficit moteur pur',
        generaux: '',
        physiques: '- Pas de troubles sensitifs',
        paraclinique: '- ENMG axonal',
        etiologies: '- Campylobacter jejuni',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Paralysie faciale
  {
    ...NEU,
    slug: 'paralysie-faciale-peripherique',
    nom: 'Paralysie faciale périphérique',
    resume:
      'Paralysie de toute une hémiface (front compris), le plus souvent idiopathique (Bell) : prednisolone dans les 72 heures (± aciclovir si sévère ou zona), protection de l’œil (larmes artificielles, occlusion nocturne) ; rechercher le VIH (fréquente à la séroconversion), le zona (Ramsay Hunt), l’otite, la lèpre et la maladie de Lyme.',
    definition:
      'Paralysie de l’ensemble des muscles d’une hémiface par atteinte du nerf facial (VII) en aval de son noyau, touchant le territoire facial supérieur et inférieur.',
    physiopathologie:
      '## Causes\n- **Idiopathique (paralysie de Bell)** : 70 % ; probable réactivation virale (herpès simplex)\n- **Zona auriculaire** (syndrome de Ramsay Hunt)\n- **VIH** (séroconversion et stades avancés), lèpre, syphilis, tuberculose\n- Otite moyenne ou otite chronique cholestéatomateuse, traumatisme du rocher, tumeur de la parotide\n- Diabète, hypertension, grossesse ; atteinte bilatérale : Guillain-Barré, sarcoïdose',
    diagnostic:
      '## Clinique\n- Installation en quelques heures : asymétrie du visage, **impossibilité de fermer l’œil** (signe de Charles Bell), effacement des rides du front, chute de la commissure labiale\n- Douleur rétro-auriculaire, hyperacousie, perte du goût\n- **Différence avec la paralysie centrale** (AVC) : la paralysie centrale épargne le front\n- Rechercher : vésicules du conduit auditif (zona), otite, parotide, autres nerfs crâniens, déficit des membres\n\n## Examens\n- Test VIH, glycémie, tension artérielle, otoscopie\n- Imagerie si atteinte progressive (> 3 semaines), récidivante, autres déficits',
    examens: [
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'glycemie', 'Diabète (avant corticoïdes).'],
      ['premiere_intention', 'otoscopie', 'Otite, vésicules de zona.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Forme atypique, tumeur.'],
    ],
    scores: [],
    differentiels: [
      ['avc-ischemique', 'Paralysie centrale : front épargné, déficit des membres.'],
      ['syndrome-de-guillain-barre', 'Diplégie faciale, faiblesse des membres.'],
      ['lepre', 'Atteinte faciale progressive, plaques anesthésiques.'],
      ['otite-moyenne-aigue', 'Otite compliquée de paralysie faciale.'],
      ['Tumeur de la parotide', 'Masse parotidienne, installation lente.'],
    ],
    etiologies: '## Terrain\n- Adulte de 15 à 60 ans, grossesse (3e trimestre), diabète, VIH',
    principes: [
      [
        'Corticoïdes',
        'Améliorer la récupération.',
        '- **Prednisolone** 60 mg/j pendant 5 jours puis décroissance (ou 50 mg/j 10 jours), à débuter dans les 72 heures\n- **Aciclovir** (ou valaciclovir) associé si paralysie complète ou **zona** (Ramsay Hunt)',
      ],
      [
        'Protection de l’œil',
        'Prévenir la kératite.',
        '- Larmes artificielles le jour, pommade et **occlusion palpébrale** la nuit, lunettes\n- Consulter en cas d’œil rouge ou douloureux',
      ],
      [
        'Traitement de la cause et rééducation',
        'Récupérer.',
        '- Traitement de l’otite (antibiotiques, chirurgie si cholestéatome), du VIH, de la lèpre\n- Massages, exercices faciaux ; pas de stimulation électrique',
      ],
    ],
    molecules: [
      ['prednisolone', 'premiere', 'Dans les 72 heures'],
      ['aciclovir', 'adjuvant', 'Zona, forme sévère'],
      ['tetracycline', 'adjuvant', 'Pommade ophtalmique (protection nocturne)'],
    ],
    complications: [
      {
        nom: 'Kératite d’exposition',
        fiche: 'oeil-rouge-demarche',
        description: 'Occlusion palpébrale incomplète.',
        traitement: '- Larmes, occlusion, avis ophtalmologique',
        clinique: '- Œil rouge douloureux',
        paraclinique: '- Fluorescéine',
      },
      {
        nom: 'Séquelles motrices et syncinésies',
        description: 'Régénération aberrante.',
        traitement: '- Rééducation, toxine botulique',
        clinique: '- Asymétrie persistante, larmes de crocodile',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération complète chez 70 à 85 % des patients en 3 à 6 mois ; moins bonne en cas de zona ou de paralysie complète',
    urgences: [],
    symptomes: [
      ['Paralysie faciale', 'tres_frequent'],
      ['Otalgie', 'frequent'],
      ['Yeux rouges', 'occasionnel'],
      ['Éruption vésiculeuse', 'occasionnel'],
    ],
    sources: [
      "Adams and Victor's Principles of Neurology",
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Distinguer central et périphérique, prednisolone, protection de l’œil, test VIH',
        '- Front épargné ou déficit des membres (AVC), otite compliquée',
      ],
      hgr: ['- Bilan étiologique, ORL', ''],
      tert: ['- Imagerie, chirurgie réparatrice', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Paralysie de Bell',
        type: 'commune',
        description: 'Idiopathique.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Asymétrie faciale brutale, douleur rétro-auriculaire',
        generaux: '',
        physiques: '- Paralysie de toute l’hémiface, signe de Charles Bell',
        paraclinique: '- Bilan normal',
        etiologies: '- Probablement virale',
        syndromes: [],
      },
      {
        nom: 'Syndrome de Ramsay Hunt',
        type: 'etiologique',
        description: 'Zona du ganglion géniculé.',
        terrain: '- Immunodéprimé, sujet âgé',
        fonctionnels: '- Otalgie intense, vertiges, surdité',
        generaux: '',
        physiques: '- Vésicules de la conque',
        paraclinique: '',
        etiologies: '- Virus varicelle-zona',
        syndromes: [],
      },
      {
        nom: 'Paralysie faciale du patient VIH',
        type: 'terrain',
        description: 'Séroconversion ou stade avancé.',
        terrain: '- VIH',
        fonctionnels: '',
        generaux: '',
        physiques: '- Parfois bilatérale',
        paraclinique: '- Test VIH positif',
        etiologies: '- VIH, zona, syphilis',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Coma
  {
    ...NEU,
    slug: 'coma-demarche',
    nom: 'Coma (démarche diagnostique)',
    resume:
      'Coma de l’adulte : ABC, glycémie capillaire immédiate (sucre si < 0,7 g/L, + thiamine chez l’alcoolique ou dénutri), TDR paludisme, score de Glasgow, recherche de signes focaux, méningés, d’HTIC, de toxiques ; traitement empirique précoce (artésunate si paludisme possible, ceftriaxone si méningite suspectée) ; position latérale, protection des voies aériennes.',
    definition:
      'Abolition de la conscience et de la vigilance, non réversible par la stimulation, définie par un score de Glasgow ≤ 8.',
    physiopathologie:
      '## Causes\n- **Métaboliques** : **hypoglycémie**, hyperglycémie (acidocétose, hyperosmolarité), hyponatrémie, urémie, insuffisance hépatique, hypoxie, hypercapnie\n- **Infectieuses** : **neuropaludisme**, **méningites**, encéphalites, sepsis, THA, toxoplasmose et cryptococcose (VIH)\n- **Toxiques** : alcool, méthanol, benzodiazépines, opioïdes, organophosphorés, monoxyde de carbone\n- **Neurologiques** : AVC, hémorragie méningée, traumatisme crânien, état de mal non convulsif, état post-critique\n- **Obstétricales** : éclampsie',
    diagnostic:
      '## Évaluation immédiate\n- **ABC** : voies aériennes, respiration, circulation\n- **Glycémie capillaire**, température, tension artérielle, SpO2\n- **Score de Glasgow** (Y 1–4, V 1–5, M 1–6)\n\n## Orientation\n- Interrogatoire de l’entourage : mode d’installation, traumatisme, prise de toxiques, diabète, VIH, épilepsie, grossesse\n- **Signes de localisation** (lésion focale), **signes méningés**, **pupilles** (myosis : opioïdes, organophosphorés ; mydriase unilatérale : engagement)\n- Odeur (alcool, acétone), haleine, ictère, astérixis\n\n## Examens\n- Glycémie, **TDR paludisme**/goutte épaisse, ionogramme, créatinine, NFS, bilan hépatique, gaz du sang\n- **Scanner cérébral** si signes focaux, traumatisme ou cause non évidente\n- **Ponction lombaire** si fièvre ou signes méningés (après scanner si signes focaux ou d’HTIC)\n- Test VIH, β-hCG, recherche de toxiques',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie : à faire immédiatement.'],
      ['premiere_intention', 'tdr-paludisme', 'Neuropaludisme.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie, hypernatrémie.'],
      ['premiere_intention', 'creatinine', 'Urémie.'],
      ['premiere_intention', 'gaz-du-sang', 'Hypoxie, hypercapnie, acidose.'],
      ['premiere_intention', 'nfs', 'Infection, anémie.'],
      ['premiere_intention', 'bilan-hepatique', 'Encéphalopathie hépatique.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Lésion focale, hémorragie.'],
      ['deuxieme_intention', 'lcr', 'Méningite, encéphalite.'],
      ['etiologique', 'tdr-vih', 'Infections opportunistes.'],
      ['etiologique', 'beta-hcg', 'Éclampsie.'],
    ],
    scores: [],
    differentiels: [
      ['Syndrome de verrouillage (locked-in)', 'Conscience conservée, mouvements oculaires verticaux.'],
      ['Mutisme psychogène ou conversion', 'Résistance à l’ouverture des yeux, examen normal.'],
      ['Mort encéphalique', 'Abolition de tous les réflexes du tronc.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Neuropaludisme, méningites, hypoglycémie, AVC, intoxications, éclampsie, traumatismes crâniens, VIH avancé',
    principes: [
      [
        'Mesures immédiates',
        'Préserver les fonctions vitales.',
        '- Libérer les voies aériennes, **position latérale de sécurité**, oxygène ; intubation si Glasgow ≤ 8 avec perte des réflexes de protection\n- Voie veineuse, remplissage si hypotension\n- **Glucose** 50 mL de G50 % ou 250 mL de G10 % si glycémie < 0,7 g/L (ou si non mesurable) ; **thiamine** 100 mg IV avant ou avec le glucose chez l’alcoolique ou le dénutri\n- Convulsions : diazépam',
      ],
      [
        'Traitements empiriques précoces',
        'Ne pas retarder.',
        '- **Artésunate** IV si paludisme possible (TDR positif ou non disponible en zone d’endémie)\n- **Ceftriaxone** 2 g IV si fièvre ou signes méningés, sans attendre la ponction\n- **Naloxone** si myosis et bradypnée (opioïdes) ; antidotes spécifiques (atropine pour les organophosphorés)\n- Sulfate de magnésium si éclampsie',
      ],
      [
        'Soins du patient comateux',
        'Prévenir les complications.',
        '- Surveillance (Glasgow, pupilles, constantes), tête à 30°, sonde nasogastrique, soins de bouche et des yeux, retournement toutes les 2 heures, prévention de la thrombose, sonde urinaire',
      ],
    ],
    molecules: [
      ['glucose-solute', 'premiere', 'Hypoglycémie'],
      ['vitamine-b1-thiamine', 'premiere', 'Alcoolique, dénutri'],
      ['artesunate', 'premiere', 'Neuropaludisme'],
      ['ceftriaxone', 'premiere', 'Méningite suspectée'],
      ['naloxone', 'premiere', 'Intoxication aux opioïdes'],
      ['atropine', 'premiere', 'Organophosphorés'],
      ['diazepam', 'adjuvant', 'Convulsions'],
      ['oxygene', 'premiere', 'Hypoxie'],
      ['sulfate-de-magnesium', 'premiere', 'Éclampsie'],
    ],
    complications: [
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Perte des réflexes de protection.',
        traitement: '- Antibiotiques, aspiration',
        clinique: '- Fièvre, encombrement',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Escarres',
        description: 'Immobilité.',
        traitement: '- Retournement, soins locaux',
        clinique: '- Plaies d’appui',
        paraclinique: '',
      },
      {
        nom: 'Engagement cérébral',
        description: 'Lésion expansive, œdème.',
        traitement: '- Osmothérapie, neurochirurgie',
        clinique: '- Mydriase, bradycardie',
        paraclinique: '- Scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause, de la profondeur et de la durée ; excellent pour l’hypoglycémie corrigée rapidement',
    urgences: [
      'paludisme-grave-urgence',
      'syndrome-meninge-febrile',
      'avc-aigu',
      'traumatisme-cranien-grave-urgence',
    ],
    symptomes: [
      ['Troubles de la conscience', 'tres_frequent'],
      ['Convulsions', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
      ['Déficit moteur', 'occasionnel'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'WHO guidelines for malaria',
      "Adams and Victor's Principles of Neurology",
    ],
    niveaux: {
      cs: ['- ABC, glycémie, sucre, TDR paludisme, artésunate, ceftriaxone, transfert', '- Tout coma'],
      hgr: ['- Bilan, scanner, ponction lombaire, soins du comateux', '- Ventilation, neurochirurgie'],
      tert: ['- Réanimation, IRM, EEG', ''],
    },
    alertes: {
      'paludisme-grave-urgence': 'Coma fébrile en zone d’endémie',
      'syndrome-meninge-febrile': 'Coma avec fièvre et raideur de nuque',
      'avc-aigu': 'Coma avec signes de localisation',
      'traumatisme-cranien-grave-urgence': 'Coma après traumatisme',
    },
    formes: [
      {
        nom: 'Coma sans signe de localisation',
        type: 'commune',
        description: 'Cause métabolique, toxique ou infectieuse.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Fièvre ou non',
        physiques: '- Pas de déficit focal',
        paraclinique: '- Glycémie, TDR paludisme, ionogramme',
        etiologies: '- Hypoglycémie, paludisme, intoxication',
        syndromes: ['syndrome-confusionnel'],
      },
      {
        nom: 'Coma avec signes de localisation',
        type: 'etiologique',
        description: 'Lésion structurelle.',
        terrain: '- HTA, traumatisme, VIH',
        fonctionnels: '',
        generaux: '',
        physiques: '- Hémiplégie, anisocorie',
        paraclinique: '- Scanner anormal',
        etiologies: '- AVC, hématome, abcès',
        syndromes: ['syndrome-pyramidal'],
      },
      {
        nom: 'Coma fébrile avec signes méningés',
        type: 'etiologique',
        description: 'Infection du SNC.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Raideur de nuque',
        paraclinique: '- LCR anormal',
        etiologies: '- Méningite, neuropaludisme',
        syndromes: ['syndrome-meninge'],
      },
    ],
  },

  // =================================================================== HTIC
  {
    ...NEU,
    slug: 'hypertension-intracranienne',
    nom: 'Hypertension intracrânienne',
    resume:
      'Augmentation de la pression intracrânienne : céphalées matinales, vomissements en jet, troubles visuels, œdème papillaire, puis troubles de conscience et engagement ; scanner avant toute ponction lombaire ; tête à 30°, mannitol en urgence, traitement de la cause (tumeur, abcès, hématome, hydrocéphalie, méningite à cryptocoque : ponctions évacuatrices).',
    definition:
      'Élévation de la pression intracrânienne au-delà de 20 mmHg, liée à une augmentation du volume du parenchyme, du sang ou du liquide cérébrospinal dans la boîte crânienne inextensible.',
    physiopathologie:
      '## Causes\n- **Processus expansifs** : tumeurs, **abcès**, **toxoplasmose cérébrale**, tuberculomes, hématomes\n- **Œdème cérébral** : traumatisme, AVC étendu, neuropaludisme, encéphalopathie hépatique ou hypertensive\n- **Hydrocéphalie** : méningite tuberculeuse, tumeur de la fosse postérieure\n- **Méningite à cryptocoque** (pression du LCR très élevée)\n- Thrombose veineuse cérébrale, HTIC idiopathique (femme jeune obèse)\n\n## Évolution\n- Baisse de la perfusion cérébrale, **engagement** cérébral (temporal, amygdales cérébelleuses) : mort',
    diagnostic:
      '## Clinique\n- **Céphalées** progressives, matinales, aggravées par la toux et le décubitus\n- **Vomissements** en jet, faciles\n- **Troubles visuels** (éclipses, diplopie par atteinte du VI), **œdème papillaire** au fond d’œil\n- Troubles de conscience, bradycardie et HTA (Cushing) : signe d’engagement\n- Signes de la cause (déficit, fièvre, convulsions)\n\n## Examens\n- **Scanner cérébral** (ou IRM) : cause, effet de masse, hydrocéphalie\n- Fond d’œil\n- **Ponction lombaire contre-indiquée** en cas de lésion expansive ; mesure de pression utile dans la cryptococcose',
    examens: [
      ['confirmation', 'scanner-cerebral', 'Cause, effet de masse, hydrocéphalie.'],
      ['premiere_intention', 'fond-d-oeil', 'Œdème papillaire.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Fosse postérieure, thrombose veineuse.'],
      ['etiologique', 'tdr-vih', 'Toxoplasmose, cryptococcose.'],
      ['etiologique', 'crag-cryptocoque', 'Méningite à cryptocoque.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie.'],
    ],
    scores: [],
    differentiels: [
      ['cephalees-migraine', 'Céphalées primaires, examen normal.'],
      ['meningite-bacterienne', 'Fièvre, raideur, LCR purulent.'],
      ['urgences-hypertensives', 'Encéphalopathie hypertensive.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Toxoplasmose cérébrale et cryptococcose (VIH), méningite tuberculeuse, abcès cérébraux, tumeurs, traumatismes',
    principes: [
      [
        'Mesures urgentes',
        'Éviter l’engagement.',
        '- **Tête surélevée à 30°**, cou droit, oxygène, normothermie, natrémie normale, éviter les solutés hypotoniques\n- **Mannitol** 20 % 0,5–1 g/kg IV en 20 minutes (ou sérum salé hypertonique)\n- Intubation et hyperventilation modérée brève en cas d’engagement\n- Traitement des convulsions',
      ],
      [
        'Traitement de la cause',
        'Agir sur l’origine.',
        '- **Dexaméthasone** : œdème péritumoral ou autour d’un abcès (pas dans l’AVC ni le traumatisme)\n- Toxoplasmose : cotrimoxazole ou sulfadiazine-pyriméthamine\n- Méningite à cryptocoque : **ponctions lombaires évacuatrices** répétées (pas de mannitol ni de corticoïdes)\n- Hydrocéphalie : dérivation ventriculaire ; lésion expansive : neurochirurgie',
      ],
    ],
    molecules: [
      ['mannitol', 'premiere', 'Osmothérapie'],
      ['chlorure-de-sodium-hypertonique', 'alternative', 'Osmothérapie'],
      ['dexamethasone', 'premiere', 'Œdème péritumoral ou périlésionnel'],
      ['oxygene', 'premiere', 'Hypoxie'],
      ['paracetamol', 'adjuvant', 'Céphalées, fièvre'],
      ['levetiracetam', 'adjuvant', 'Convulsions'],
    ],
    complications: [
      {
        nom: 'Engagement cérébral',
        description: 'Hernie du cerveau.',
        traitement: '- Osmothérapie, chirurgie',
        clinique: '- Mydriase, coma, bradycardie',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Cécité par atrophie optique',
        description: 'Œdème papillaire prolongé.',
        traitement: '- Traitement précoce de la cause',
        clinique: '- Baisse de vision',
        paraclinique: '- Fond d’œil',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause et de la rapidité de prise en charge ; engagement souvent mortel',
    urgences: ['traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Troubles visuels', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      "Adams and Victor's Principles of Neurology",
      'Guide clinique et thérapeutique',
      'Guidelines for the Management of Severe Traumatic Brain Injury (4th edition)',
    ],
    niveaux: {
      cs: [
        '- Reconnaître, tête à 30°, transfert',
        '- Céphalées avec vomissements, troubles visuels ou de conscience',
      ],
      hgr: ['- Scanner, mannitol, traitement de la cause', '- Neurochirurgie'],
      tert: ['- Neurochirurgie, dérivation, réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'HTIC sur processus expansif',
        type: 'commune',
        description: 'Installation progressive.',
        terrain: '- VIH, cancer',
        fonctionnels: '- Céphalées matinales, vomissements',
        generaux: '',
        physiques: '- Œdème papillaire, déficit focal',
        paraclinique: '- Lésion avec effet de masse',
        etiologies: '- Tumeur, abcès, toxoplasmose',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
      {
        nom: 'HTIC avec engagement',
        type: 'gravite',
        description: 'Urgence vitale.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Coma, bradycardie, HTA',
        physiques: '- Mydriase unilatérale',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-d-engagement-cerebral'],
      },
      {
        nom: 'HTIC de la méningite à cryptocoque',
        type: 'etiologique',
        description: 'Pression du LCR très élevée.',
        terrain: '- VIH avancé',
        fonctionnels: '- Céphalées sévères, troubles visuels',
        generaux: '- Fièvre modérée',
        physiques: '- Atteinte du VI',
        paraclinique: '- CrAg positif, pression élevée',
        etiologies: '- Cryptococcus',
        syndromes: ['syndrome-meninge'],
      },
    ],
  },

  // =================================================================== Neuropathie ataxique tropicale
  {
    ...NEU,
    slug: 'neuropathie-ataxique-tropicale',
    nom: 'Neuropathie ataxique tropicale (manioc)',
    resume:
      'Neuropathie chronique de l’adulte (souvent âgé) consommant du manioc mal détoxifié avec une alimentation pauvre en protéines soufrées : ataxie sensitive, neuropathie optique (baisse de vision), surdité ; prévention par le rouissage correct du manioc et une alimentation diversifiée ; vitamines B et amélioration de l’alimentation.',
    definition:
      'Syndrome neurologique chronique associant une polyneuropathie sensitive avec ataxie, une atrophie optique bilatérale et une surdité de perception, lié à l’exposition prolongée au cyanure du manioc insuffisamment transformé.',
    physiopathologie:
      '## Mécanismes\n- Glycosides cyanogénétiques (linamarine) du **manioc amer** mal roui ou mal séché → cyanure → thiocyanate\n- Détoxification limitée par le **déficit en acides aminés soufrés** (alimentation pauvre en protéines)\n- Atteinte chronique et progressive des cordons postérieurs, des nerfs périphériques et du nerf optique\n- À distinguer du **konzo** (paraparésie spastique brutale, enfants et femmes, épidémique)',
    diagnostic:
      '## Clinique\n- Adulte de plus de 40 ans en zone de consommation de manioc\n- **Ataxie sensitive** (marche instable aggravée dans l’obscurité, Romberg positif), paresthésies des pieds\n- **Baisse de vision** progressive bilatérale (atrophie optique), **surdité**\n- Aréflexie ou réflexes diminués\n\n## Examens\n- Thiocyanates urinaires (centres de recherche), glycémie, test VIH, sérologie syphilis, NFS (B12)\n- Acuité visuelle, fond d’œil',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Neuropathie optique.'],
      ['premiere_intention', 'fond-d-oeil', 'Atrophie optique.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['etiologique', 'tdr-vih', 'Neuropathie du VIH.'],
      ['etiologique', 'serologie-syphilis', 'Tabès.'],
      ['etiologique', 'nfs', 'Macrocytose (B12).'],
    ],
    scores: [],
    differentiels: [
      ['konzo', 'Paraparésie spastique brutale, réflexes vifs.'],
      ['neuropathies-peripheriques', 'Autres causes : diabète, VIH, alcool.'],
      ['Carence en vitamine B12 (sclérose combinée)', 'Anémie macrocytaire, signes pyramidaux.'],
      ['Neurosyphilis (tabès)', 'Sérologie positive, pupilles d’Argyll Robertson.'],
      ['glaucome', 'Atteinte isolée du nerf optique, pression élevée.'],
    ],
    etiologies:
      '## Facteurs\n- Consommation quasi exclusive de manioc amer mal transformé, pauvreté, alimentation pauvre en protéines (viande, poisson, légumineuses)',
    principes: [
      [
        'Traitement',
        'Stabiliser.',
        '- Arrêt de l’exposition : manioc correctement roui (trempage prolongé, fermentation, séchage) ; méthode de mouillage de la farine\n- Alimentation riche en protéines (légumineuses, poisson, viande)\n- **Vitamines B** (B1, B12, B6) ; correction des carences',
      ],
      [
        'Rééducation et soutien',
        'Limiter le handicap.',
        '- Kinésithérapie, aide à la marche, aides visuelles et auditives, soutien social',
      ],
      [
        'Prévention communautaire',
        'Éviter de nouveaux cas.',
        '- Éducation sur la transformation du manioc, diversification alimentaire, variétés de manioc doux',
      ],
    ],
    molecules: [
      ['vitamine-b1-thiamine', 'premiere', 'Supplémentation'],
      ['cyanocobalamine-vitamine-b12', 'premiere', 'Supplémentation'],
      ['pyridoxine', 'adjuvant', 'Supplémentation'],
      ['multivitamines', 'adjuvant', 'Carences associées'],
    ],
    complications: [
      {
        nom: 'Cécité',
        description: 'Atrophie optique.',
        traitement: '- Prévention, aides visuelles',
        clinique: '- Baisse de vision sévère',
        paraclinique: '- Fond d’œil',
      },
      {
        nom: 'Chutes et dépendance',
        description: 'Ataxie.',
        traitement: '- Rééducation, aide à la marche',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Évolution lente ; stabilisation possible après correction de l’alimentation, récupération souvent incomplète',
    urgences: [],
    symptomes: [
      ['Troubles de la marche', 'tres_frequent'],
      ['Troubles sensitifs', 'tres_frequent'],
      ['Troubles visuels', 'frequent'],
    ],
    sources: [
      "Adams and Victor's Principles of Neurology",
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Reconnaître, conseils nutritionnels, vitamines B', '- Doute diagnostique, baisse de vision'],
      hgr: ['- Bilan des diagnostics différentiels', ''],
      tert: ['- Neurologie, ophtalmologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme complète',
        type: 'commune',
        description: 'Neuropathie, atteinte optique et surdité.',
        terrain: '- Adulte > 40 ans, consommateur de manioc',
        fonctionnels: '- Instabilité, paresthésies, baisse de vision, surdité',
        generaux: '',
        physiques: '- Romberg positif, aréflexie',
        paraclinique: '- Atrophie optique',
        etiologies: '- Cyanure du manioc',
        syndromes: [],
      },
      {
        nom: 'Forme sensitive isolée',
        type: 'etiologique',
        description: 'Début.',
        terrain: '',
        fonctionnels: '- Paresthésies des pieds',
        generaux: '',
        physiques: '- Hypoesthésie distale',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
