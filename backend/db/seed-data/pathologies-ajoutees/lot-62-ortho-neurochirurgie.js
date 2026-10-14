'use strict';

/**
 * Lot 62 (phase 2, orthopédie et neurochirurgie) — coxarthrose et gonarthrose (prise en charge
 * chirurgicale), syndrome du canal carpien, tumeurs cérébrales, abcès cérébral, hernie discale
 * lombaire, embarrure. Rédigé par IA (AAOS, Sabiston, Adams and Victor, Brain Trauma Foundation) :
 * à valider.
 */

const ORTHO = { departement: 'chirurgie', specialite: 'Orthopédie' };
const NCH = { departement: 'chirurgie', specialite: 'Neurochirurgie' };

module.exports = [
  // =================================================================== Arthrose chirurgie
  {
    ...ORTHO,
    slug: 'coxarthrose-gonarthrose-chirurgie',
    nom: 'Coxarthrose et gonarthrose (prise en charge chirurgicale)',
    resume:
      'Arthrose évoluée de la hanche ou du genou (obésité, âge, séquelles de traumatisme, d’ostéonécrose drépanocytaire, de dysplasie, de genu varum, d’arthrite) résistant au traitement médical bien conduit (perte de poids, activité adaptée, kinésithérapie, canne, paracétamol, AINS, infiltrations) avec retentissement fonctionnel majeur : ostéotomie de réaxation chez le sujet jeune (genu varum), prothèse totale de hanche ou de genou en centre équipé (asepsie rigoureuse, thromboprophylaxie, rééducation) ; complications : infection, luxation, thrombose, descellement.',
    definition:
      'Prise en charge chirurgicale de l’arthrose de la hanche (coxarthrose) et du genou (gonarthrose) après échec du traitement médical.',
    physiopathologie:
      '## Arthrose\n- Destruction progressive du cartilage, remodelage osseux (ostéophytes, géodes, condensation)\n\n## Causes favorisantes\n- Âge, **obésité**, séquelles de fractures articulaires, **ostéonécrose de la tête fémorale** (drépanocytose : sujet jeune), **dysplasie de hanche**, **genu varum/valgum**, arthrites (septique, tuberculeuse, rhumatismales), travaux de force',
    diagnostic:
      '## Indication chirurgicale\n- **Douleur** mécanique invalidante, nocturne, **périmètre de marche** réduit, raideur, boiterie, retentissement sur l’autonomie\n- **Échec** du traitement médical bien conduit (≥ 6 mois)\n- Radiographies : pincement articulaire sévère, ostéophytes, déformation\n\n## Bilan préopératoire\n- **Radiographies** en charge, **NFS**, glycémie, créatinine, électrophorèse de l’hémoglobine (drépanocytose), test VIH\n- Recherche et traitement de tout **foyer infectieux** (dentaire, urinaire, cutané)',
    examens: [
      ['confirmation', 'radiographie-osseuse', 'Pincement, ostéophytes, déformation.'],
      ['premiere_intention', 'nfs', 'Bilan préopératoire.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
      ['premiere_intention', 'ecbu', 'Foyer infectieux.'],
    ],
    scores: [],
    differentiels: [
      ['arthrose', 'Fiche médicale.'],
      ['osteonecrose-tete-femorale', 'Cause chez le sujet jeune drépanocytaire.'],
      ['polyarthrite-rhumatoide', 'Atteinte inflammatoire.'],
      ['lombalgie-et-sciatique', 'Douleur projetée à la hanche.'],
      ['osteoarthrite-tuberculeuse', 'Destruction articulaire infectieuse.'],
    ],
    etiologies:
      '## Causes\n- Primitive, obésité, ostéonécrose, dysplasie, séquelles traumatiques ou infectieuses, désaxations',
    principes: [
      [
        'Traitement médical d’abord',
        'Toujours.',
        '- **Perte de poids**, activité physique adaptée, kinésithérapie, **canne** du côté opposé\n- **Paracétamol**, **AINS** de courte durée, infiltrations de corticoïdes (genou)',
      ],
      [
        'Chirurgie',
        'Selon l’âge et l’articulation.',
        '- **Ostéotomie tibiale** de valgisation : gonarthrose interne sur genu varum du sujet jeune\n- **Prothèse totale de hanche** (coxarthrose, ostéonécrose) ou **de genou** : centre équipé, asepsie rigoureuse, implants adaptés\n- Arthrodèse dans certains cas (sujet jeune, infection)',
      ],
      [
        'Péri-opératoire',
        'Prévenir les complications.',
        '- **Antibioprophylaxie** (céfazoline), **thromboprophylaxie** (énoxaparine 4–5 semaines après prothèse de hanche)\n- Drépanocytose : préparation spécifique (hydratation, transfusion selon le protocole)\n- **Rééducation** précoce, mise en charge',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'alternative', 'Douleur (courte durée)'],
      ['triamcinolone', 'alternative', 'Infiltration du genou'],
      ['cefazoline', 'premiere', 'Antibioprophylaxie'],
      ['enoxaparine', 'premiere', 'Thromboprophylaxie'],
      ['morphine', 'adjuvant', 'Douleur postopératoire'],
    ],
    complications: [
      {
        nom: 'Infection de prothèse',
        description: 'Contamination opératoire ou hématogène.',
        traitement: '- Lavage, antibiotiques, changement de prothèse',
        clinique: '- Douleur, fièvre, fistule',
        paraclinique: '- CRP, ponction',
      },
      {
        nom: 'Thrombose veineuse et embolie',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Chirurgie orthopédique majeure.',
        traitement: '- Anticoagulation',
        clinique: '- Œdème, dyspnée',
        paraclinique: '- Doppler',
      },
      {
        nom: 'Luxation de prothèse de hanche',
        fiche: 'luxation-de-la-hanche',
        description: 'Mouvement à risque.',
        traitement: '- Réduction',
        clinique: '- Douleur, raccourcissement',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Prothèses : excellents résultats sur la douleur et la fonction, durée de vie de 15–20 ans',
    urgences: [],
    symptomes: [
      ['Arthralgies', 'tres_frequent'],
      ['Boiterie', 'frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Raideur matinale', 'occasionnel'],
    ],
    sources: ['AAOS — recommandations de pratique clinique', 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: ['- Traitement médical, conseils, orientation', ''],
      hgr: ['- Ostéotomie', ''],
      tert: ['- Prothèses articulaires', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Gonarthrose sur genu varum',
        type: 'commune',
        description: 'Ostéotomie ou prothèse.',
        terrain: '- Femme obèse > 50 ans',
        fonctionnels: '- Douleur mécanique du genou',
        generaux: '',
        physiques: '- Genu varum, épanchement',
        paraclinique: '- Pincement interne',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Coxarthrose sur ostéonécrose drépanocytaire',
        type: 'terrain',
        description: 'Sujet jeune.',
        terrain: '- Drépanocytaire',
        fonctionnels: '- Boiterie, douleur',
        generaux: '',
        physiques: '- Limitation de la hanche',
        paraclinique: '- Tête fémorale déformée',
        etiologies: '- Drépanocytose',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Canal carpien
  {
    ...ORTHO,
    slug: 'syndrome-canal-carpien',
    nom: 'Syndrome du canal carpien',
    resume:
      'Compression du nerf médian au poignet, neuropathie canalaire la plus fréquente (femme de 40–60 ans, grossesse, hypothyroïdie, diabète, polyarthrite, travail manuel répétitif, séquelle de fracture du poignet, amylose de l’hémodialysé) : paresthésies nocturnes des trois premiers doigts réveillant la patiente, soulagées en secouant la main, puis déficit sensitif et amyotrophie thénarienne ; signes de Tinel et de Phalen ; électromyogramme ; attelle nocturne de repos, infiltration de corticoïdes, chirurgie de libération (section du ligament annulaire) si déficit ou échec.',
    definition:
      'Neuropathie par compression du nerf médian dans le canal carpien, sous le ligament annulaire antérieur du carpe.',
    physiopathologie:
      '## Mécanisme\n- Augmentation de la pression dans le canal carpien → ischémie et démyélinisation du nerf médian\n\n## Facteurs\n- Femme, **grossesse**, ménopause, obésité\n- **Hypothyroïdie**, **diabète**, polyarthrite rhumatoïde, acromégalie, insuffisance rénale chronique (hémodialyse)\n- Gestes répétitifs (pilage, couture), **fracture du poignet**',
    diagnostic:
      '## Clinique\n- **Paresthésies** (fourmillements, engourdissements) du **pouce, de l’index et du majeur**, **nocturnes**, réveillant, soulagées en secouant la main\n- Maladresse, lâchage d’objets\n- **Signes de Tinel** (percussion du poignet) et de **Phalen** (flexion forcée du poignet 1 min)\n- Forme évoluée : hypoesthésie permanente, **amyotrophie thénarienne**\n\n## Examens\n- **Électromyogramme** (confirmation, gravité) avant chirurgie\n- TSH, glycémie selon le contexte ; échographie du canal',
    examens: [
      ['confirmation', 'electromyogramme', 'Ralentissement de conduction du nerf médian.'],
      ['etiologique', 'tsh', 'Hypothyroïdie.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['deuxieme_intention', 'echographie-parties-molles', 'Nerf médian, ténosynovite.'],
    ],
    scores: [],
    differentiels: [
      ['Radiculopathie C6–C7', 'Douleur cervicale, irradiation, réflexes.'],
      ['neuropathies-peripheriques', 'Polyneuropathie (diabète, VIH, carences).'],
      ['Compression du nerf ulnaire', 'Paresthésies des 4e et 5e doigts.'],
      ['Ténosynovite de De Quervain', 'Douleur du bord radial du poignet.'],
    ],
    etiologies:
      '## Facteurs\n- Grossesse, hypothyroïdie, diabète, polyarthrite, travail manuel, fracture du poignet',
    principes: [
      [
        'Traitement conservateur',
        'Formes légères.',
        '- **Attelle nocturne** poignet en position neutre 6–8 semaines\n- **Infiltration** de corticoïdes dans le canal (triamcinolone, méthylprednisolone)\n- Traitement de la cause (hypothyroïdie, diabète) ; souvent régressif après la grossesse',
      ],
      [
        'Chirurgie',
        'Formes sévères ou échec.',
        '- **Libération du nerf médian** (section du ligament annulaire) sous anesthésie locale, à ciel ouvert\n- Indications : déficit sensitif permanent, amyotrophie, électromyogramme sévère, échec du traitement conservateur',
      ],
    ],
    molecules: [
      ['triamcinolone', 'premiere', 'Infiltration'],
      ['methylprednisolone', 'alternative', 'Infiltration'],
      ['paracetamol', 'adjuvant', 'Douleur'],
      ['lidocaine', 'premiere', 'Anesthésie locale (chirurgie)'],
      ['levothyroxine', 'adjuvant', 'Hypothyroïdie associée'],
    ],
    complications: [
      {
        nom: 'Amyotrophie et déficit définitif',
        description: 'Compression prolongée.',
        traitement: '- Libération, palliatifs',
        clinique: '- Perte de l’opposition du pouce',
        paraclinique: '- EMG',
      },
      {
        nom: 'Algodystrophie postopératoire',
        description: 'Rare.',
        traitement: '- Rééducation',
        clinique: '- Douleur, raideur',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent après libération ; récupération incomplète si amyotrophie ancienne',
    urgences: [],
    symptomes: [
      ['Troubles sensitifs', 'tres_frequent'],
      ['Faiblesse musculaire', 'occasionnel'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: ['AAOS — recommandations de pratique clinique', "Adams and Victor's Principles of Neurology"],
    niveaux: {
      cs: ['- Attelle nocturne, recherche d’une cause', '- Déficit, amyotrophie'],
      hgr: ['- Infiltration, libération chirurgicale', ''],
      tert: ['- Électromyogramme', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Canal carpien typique',
        type: 'commune',
        description: 'Paresthésies nocturnes.',
        terrain: '- Femme de 40–60 ans',
        fonctionnels: '- Fourmillements des 3 premiers doigts',
        generaux: '',
        physiques: '- Tinel, Phalen positifs',
        paraclinique: '- EMG',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Canal carpien de la grossesse',
        type: 'terrain',
        description: 'Régressif.',
        terrain: '- 3e trimestre',
        fonctionnels: '- Paresthésies',
        generaux: '',
        physiques: '- Œdèmes',
        paraclinique: '',
        etiologies: '- Rétention hydrique',
        syndromes: [],
      },
      {
        nom: 'Forme déficitaire',
        type: 'gravite',
        description: 'Chirurgie.',
        terrain: '',
        fonctionnels: '- Maladresse',
        generaux: '',
        physiques: '- Amyotrophie thénarienne',
        paraclinique: '- EMG sévère',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Tumeurs cérébrales
  {
    ...NCH,
    slug: 'tumeurs-cerebrales',
    nom: 'Tumeurs cérébrales',
    resume:
      'Tumeurs primitives (gliomes, méningiomes, adénomes hypophysaires, médulloblastome et craniopharyngiome de l’enfant) et métastases (poumon, sein, mélanome) ; chez la personne vivant avec le VIH, éliminer d’abord une toxoplasmose ou un lymphome cérébral ; céphalées progressives (matinales), vomissements, convulsions, déficit focal, troubles cognitifs, troubles visuels, syndrome d’HTIC ; scanner ou IRM avec injection ; dexaméthasone (œdème), antiépileptiques si crises, chirurgie (exérèse, biopsie, dérivation d’une hydrocéphalie), radiothérapie et chimiothérapie en centre spécialisé, soins palliatifs.',
    definition:
      'Proliférations tumorales bénignes ou malignes développées dans la boîte crânienne, primitives (cerveau, méninges, hypophyse) ou secondaires (métastases).',
    physiopathologie:
      '## Types\n- **Adulte** : gliomes (glioblastome), **méningiomes**, adénomes hypophysaires, **métastases**, lymphome (VIH)\n- **Enfant** : tumeurs de la fosse postérieure (**médulloblastome**, astrocytome cérébelleux, épendymome), **craniopharyngiome**, gliome du tronc\n\n## Mécanismes des symptômes\n- Effet de masse et **œdème** → **HTIC**, engagement\n- Irritation corticale → **convulsions**\n- Destruction → déficits focaux\n- Obstruction des voies du LCS → **hydrocéphalie**',
    diagnostic:
      '## Clinique\n- **Céphalées** progressives, matinales, **vomissements**, troubles visuels (œdème papillaire)\n- **Convulsions** (crise inaugurale de l’adulte), **déficit** moteur ou sensitif, aphasie, troubles du comportement\n- Enfant : ataxie, vomissements, macrocéphalie, troubles de la croissance (craniopharyngiome)\n- Adénome hypophysaire : troubles visuels (hémianopsie bitemporale), aménorrhée-galactorrhée, acromégalie\n\n## Examens\n- **Scanner** cérébral avec injection, **IRM** (référence)\n- **Test VIH** (toxoplasmose, lymphome : traitement d’épreuve antitoxoplasmique)\n- **Fond d’œil** ; bilan d’extension si métastase suspectée (radiographie thoracique, mammographie) ; prolactine si adénome\n- **Histologie** (biopsie ou exérèse)',
    examens: [
      ['confirmation', 'scanner-cerebral', 'Masse, œdème.'],
      ['confirmation', 'irm-cerebrale', 'Caractérisation.'],
      ['premiere_intention', 'tdr-vih', 'Toxoplasmose, lymphome.'],
      ['gravite', 'fond-d-oeil', 'Œdème papillaire.'],
      ['etiologique', 'radiographie-thoracique', 'Cancer primitif.'],
      ['etiologique', 'prolactinemie', 'Adénome hypophysaire.'],
      ['confirmation', 'biopsie-histologie', 'Type tumoral.'],
      ['deuxieme_intention', 'eeg', 'Convulsions.'],
    ],
    scores: [],
    differentiels: [
      ['toxoplasmose-cerebrale', 'VIH, lésions multiples, réponse au traitement.'],
      ['abces-cerebral', 'Fièvre, lésion annulaire, foyer infectieux.'],
      ['meningite-tuberculeuse', 'Tuberculomes.'],
      ['avc-ischemique', 'Installation brutale.'],
      ['hematome-sous-dural', 'Traumatisme, sujet âgé.'],
      ['Neurocysticercose', 'Kystes multiples, épilepsie.'],
    ],
    etiologies:
      '## Types\n- Gliomes, méningiomes, adénomes hypophysaires, métastases, lymphomes (VIH), tumeurs de l’enfant',
    principes: [
      [
        'Traitement symptomatique',
        'Réduire l’œdème.',
        '- **Dexaméthasone** 4 mg toutes les 6 h (œdème péritumoral, HTIC) ; éviter avant la biopsie d’un lymphome suspecté\n- **Antiépileptiques** si crises (lévétiracétam, valproate) ; **mannitol** si engagement\n- Antalgiques',
      ],
      [
        'Traitement spécifique',
        'Centre spécialisé.',
        '- **Chirurgie** : exérèse (méningiome, gliome accessible, métastase unique), biopsie stéréotaxique, **dérivation** de l’hydrocéphalie\n- **Radiothérapie**, **chimiothérapie** (témozolomide pour le glioblastome) selon le type\n- VIH avec lésion focale : **traitement d’épreuve antitoxoplasmique** (cotrimoxazole ou pyriméthamine-sulfadiazine) 2 semaines avant d’autres explorations',
      ],
      [
        'Accompagnement',
        'Qualité de vie.',
        '- Rééducation, soutien, **soins palliatifs** (douleur, crises, HTIC)',
      ],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Œdème cérébral'],
      ['levetiracetam', 'premiere', 'Convulsions'],
      ['valproate-de-sodium-acide-valproique', 'alternative', 'Convulsions'],
      ['mannitol', 'alternative', 'Engagement'],
      ['morphine', 'adjuvant', 'Soins palliatifs'],
    ],
    complications: [
      {
        nom: 'Engagement cérébral',
        fiche: 'hypertension-intracranienne',
        description: 'Effet de masse.',
        traitement: '- Mannitol, dexaméthasone, chirurgie',
        clinique: '- Coma, mydriase',
        paraclinique: '- Scanner',
      },
      {
        nom: 'État de mal épileptique',
        fiche: 'etat-de-mal-epileptique',
        description: 'Irritation corticale.',
        traitement: '- Benzodiazépines, antiépileptiques',
        clinique: '- Crises prolongées',
        paraclinique: '',
      },
      {
        nom: 'Hydrocéphalie',
        fiche: 'hydrocephalie-enfant',
        description: 'Tumeur de la fosse postérieure.',
        traitement: '- Dérivation',
        clinique: '- HTIC',
        paraclinique: '- Imagerie',
      },
    ],
    evolution:
      '## Pronostic\n- Très variable : méningiomes curables ; glioblastome : survie médiane de 12–15 mois ; métastases : pronostic du cancer primitif',
    urgences: ['etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Convulsions', 'frequent'],
      ['Déficit moteur', 'frequent'],
      ['Troubles visuels', 'occasionnel'],
      ['Troubles du comportement', 'occasionnel'],
    ],
    sources: [
      "Adams and Victor's Principles of Neurology",
      'NCCN — recommandations de pratique clinique',
      'ESMO — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Céphalées progressives, convulsions, déficit : référence', ''],
      hgr: ['- Scanner, dexaméthasone, antiépileptiques', ''],
      tert: ['- Neurochirurgie, radiothérapie, oncologie', ''],
    },
    alertes: { 'etat-de-mal-epileptique-urgence': 'Patient avec tumeur cérébrale et convulsions prolongées' },
    formes: [
      {
        nom: 'Tumeur sus-tentorielle de l’adulte',
        type: 'commune',
        description: 'Gliome, méningiome, métastase.',
        terrain: '- Adulte',
        fonctionnels: '- Céphalées, crises',
        generaux: '',
        physiques: '- Déficit focal',
        paraclinique: '- Masse avec œdème',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
      {
        nom: 'Tumeur de la fosse postérieure de l’enfant',
        type: 'terrain',
        description: 'Médulloblastome.',
        terrain: '- Enfant',
        fonctionnels: '- Vomissements matinaux',
        generaux: '',
        physiques: '- Ataxie, macrocéphalie',
        paraclinique: '- Hydrocéphalie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Lésion focale du VIH',
        type: 'etiologique',
        description: 'Toxoplasmose ou lymphome.',
        terrain: '- VIH, CD4 bas',
        fonctionnels: '',
        generaux: '- Fièvre',
        physiques: '- Déficit',
        paraclinique: '- Lésions annulaires',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Abcès cérébral
  {
    ...NCH,
    slug: 'abces-cerebral',
    nom: 'Abcès cérébral',
    resume:
      'Collection suppurée intracérébrale, à partir d’un foyer de contiguïté (otite moyenne chronique, mastoïdite, sinusite, infection dentaire), d’une dissémination hématogène (endocardite, cardiopathie cyanogène de l’enfant, abcès pulmonaire), d’un traumatisme ou d’une chirurgie ; chez le VIH, penser toxoplasmose, tuberculome, nocardiose : céphalées, fièvre (inconstante), déficit focal, convulsions, HTIC ; scanner avec injection (lésion en cocarde) ; ponction lombaire contre-indiquée ; antibiotiques IV prolongés (ceftriaxone + métronidazole ± vancomycine) 6–8 semaines, drainage neurochirurgical (ponction-aspiration) des abcès > 2,5 cm ou avec effet de masse, traitement de la porte d’entrée.',
    definition:
      'Infection focale du parenchyme cérébral, débutant par une cérébrite puis évoluant vers une collection de pus encapsulée.',
    physiopathologie:
      '## Portes d’entrée\n- **Contiguïté** : otite moyenne chronique et mastoïdite (lobe temporal, cervelet), sinusite (lobe frontal), infection dentaire\n- **Hématogène** : endocardite, **cardiopathie cyanogène** (Fallot), abcès pulmonaire, dilatation des bronches (abcès multiples)\n- **Traumatique** (plaie pénétrante, embarrure) ou postopératoire\n\n## Germes\n- Streptocoques (milleri), anaérobies, staphylocoque doré (traumatique), entérobactéries (otogène)\n- VIH : **toxoplasme**, tuberculose, cryptocoque, nocardia',
    diagnostic:
      '## Clinique\n- **Céphalées** (signe le plus fréquent), **fièvre** (présente dans moins de la moitié des cas), vomissements\n- **Déficit focal**, **convulsions**, troubles de conscience\n- Foyer infectieux : otorrhée, sinusite, dents, souffle cardiaque, cyanose\n\n## Examens\n- **Scanner** cérébral **injecté** : lésion hypodense avec **prise de contraste annulaire** (cocarde), œdème ; IRM si disponible\n- **Pas de ponction lombaire** (risque d’engagement)\n- NFS, CRP, **hémocultures**, test VIH, échocardiographie (endocardite), examen ORL et dentaire\n- Culture du pus de ponction',
    examens: [
      ['confirmation', 'scanner-cerebral', 'Lésion en cocarde.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Caractérisation.'],
      ['premiere_intention', 'hemocultures', 'Germe.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'tdr-vih', 'Immunodépression.'],
      ['etiologique', 'echocardiographie', 'Endocardite, cardiopathie.'],
      ['etiologique', 'prelevement-de-pus', 'Culture du pus.'],
    ],
    scores: [],
    differentiels: [
      ['tumeurs-cerebrales', 'Masse sans contexte infectieux.'],
      ['toxoplasmose-cerebrale', 'VIH, lésions multiples.'],
      ['meningite-bacterienne', 'Syndrome méningé sans lésion focale.'],
      ['meningite-tuberculeuse', 'Tuberculomes.'],
      ['avc-ischemique', 'Installation brutale.'],
    ],
    etiologies:
      '## Causes\n- Otite, mastoïdite, sinusite, infection dentaire, endocardite, cardiopathie cyanogène, traumatisme, VIH',
    principes: [
      [
        'Antibiotiques',
        'Prolongés.',
        '- **Ceftriaxone** 2 g toutes les 12 h IV + **métronidazole** 500 mg toutes les 8 h IV (± **vancomycine** si traumatique ou postopératoire)\n- **6 à 8 semaines** (IV au moins 4–6 semaines), adaptés à la culture ; surveillance par scanner\n- VIH : traitement antitoxoplasmique d’épreuve si sérologie positive ou contexte',
      ],
      [
        'Neurochirurgie',
        'Drainer.',
        '- **Ponction-aspiration** (trou de trépan) des abcès > 2,5 cm, avec effet de masse, proches des ventricules ; exérèse dans certains cas\n- Traitement de la porte d’entrée (mastoïdectomie, drainage sinusien, soins dentaires)',
      ],
      [
        'Mesures associées',
        'Prévenir les complications.',
        '- **Antiépileptiques** (lévétiracétam), **dexaméthasone** seulement si œdème menaçant (courte durée)',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Antibiothérapie'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['vancomycine', 'alternative', 'Abcès traumatique ou postopératoire'],
      ['levetiracetam', 'alternative', 'Convulsions'],
      ['dexamethasone', 'adjuvant', 'Œdème menaçant'],
      ['chloramphenicol', 'alternative', 'Si ceftriaxone indisponible'],
    ],
    complications: [
      {
        nom: 'Rupture intraventriculaire',
        description: 'Abcès profond.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Aggravation brutale',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Engagement cérébral',
        fiche: 'hypertension-intracranienne',
        description: 'Effet de masse.',
        traitement: '- Chirurgie, mannitol',
        clinique: '- Coma',
        paraclinique: '',
      },
      {
        nom: 'Épilepsie séquellaire',
        fiche: 'epilepsie',
        description: 'Cicatrice corticale.',
        traitement: '- Antiépileptiques',
        clinique: '- Crises',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité < 15 % avec drainage et antibiotiques ; séquelles (épilepsie, déficit) fréquentes',
    urgences: ['syndrome-meninge-febrile'],
    symptomes: [
      ['Céphalées', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Convulsions', 'frequent'],
      ['Déficit moteur', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      "Adams and Victor's Principles of Neurology",
      'IDSA — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Céphalées fébriles avec déficit : première dose d’antibiotique, référence', ''],
      hgr: ['- Scanner, antibiotiques IV', ''],
      tert: ['- Neurochirurgie', ''],
    },
    alertes: { 'syndrome-meninge-febrile': 'Céphalées fébriles avec déficit focal ou convulsions' },
    formes: [
      {
        nom: 'Abcès otogène',
        type: 'commune',
        description: 'Lobe temporal, cervelet.',
        terrain: '- Otite chronique',
        fonctionnels: '- Céphalées',
        generaux: '- Fièvre',
        physiques: '- Otorrhée, déficit',
        paraclinique: '- Cocarde temporale',
        etiologies: '- Streptocoques, anaérobies',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
      {
        nom: 'Abcès de l’enfant cardiaque',
        type: 'terrain',
        description: 'Cardiopathie cyanogène.',
        terrain: '- Enfant Fallot',
        fonctionnels: '- Céphalées, vomissements',
        generaux: '',
        physiques: '- Cyanose, déficit',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hernie discale
  {
    ...NCH,
    slug: 'hernie-discale-lombaire',
    nom: 'Hernie discale lombaire',
    resume:
      'Saillie du disque intervertébral comprimant une racine (L5 ou S1 surtout) : lombalgie puis douleur radiculaire du membre inférieur (sciatique) suivant le trajet de la racine, majorée par la toux, signe de Lasègue ; évolution favorable spontanée dans la majorité en 6–12 semaines (antalgiques, AINS, activité adaptée, pas de repos strict prolongé) ; urgences chirurgicales : syndrome de la queue de cheval (troubles sphinctériens, anesthésie en selle) et déficit moteur sévère ou progressif ; IRM si chirurgie envisagée ; discectomie si échec après 6–12 semaines ou urgence.',
    definition:
      'Protrusion du nucleus pulposus à travers l’anneau fibreux d’un disque lombaire, comprimant une racine nerveuse ou la queue de cheval.',
    physiopathologie:
      '## Mécanismes\n- Dégénérescence discale, efforts de soulèvement, port de charges lourdes (travail agricole, portage)\n- Compression mécanique et inflammation de la racine\n\n## Niveaux\n- **L4-L5** (racine **L5**) et **L5-S1** (racine **S1**) : 95 %\n- Hernie médiane volumineuse : **syndrome de la queue de cheval**',
    diagnostic:
      '## Clinique\n- Lombalgie, puis **douleur radiculaire** (sciatique) : **L5** (face externe de la jambe, dos du pied, gros orteil) ; **S1** (face postérieure, plante, bord externe du pied)\n- Impulsivité à la toux, à l’éternuement ; **signe de Lasègue**\n- Déficit : releveurs (L5), triceps sural et réflexe achilléen (S1)\n- **Signes d’alarme** : **troubles sphinctériens** (rétention, incontinence), **anesthésie en selle**, déficit moteur sévère ou progressif, fièvre, amaigrissement, antécédent de cancer, âge > 50 ans, douleur nocturne (éliminer infection, tumeur, mal de Pott)\n\n## Examens\n- Aucun dans les 6 premières semaines sans signe d’alarme\n- **IRM** rachidienne (ou scanner) si chirurgie envisagée ou signe d’alarme ; NFS, CRP, VS si suspicion d’infection',
    examens: [
      ['confirmation', 'irm-rachidienne', 'Hernie, compression.'],
      ['deuxieme_intention', 'radiographie-osseuse', 'Rachis (éliminer d’autres causes).'],
      ['etiologique', 'vitesse-sedimentation', 'Infection, tumeur.'],
      ['deuxieme_intention', 'electromyogramme', 'Atteinte radiculaire.'],
    ],
    scores: [],
    differentiels: [
      ['lombalgie-et-sciatique', 'Fiche médicale.'],
      ['mal-de-pott', 'Spondylodiscite tuberculeuse.'],
      ['compression-medullaire', 'Compression tumorale, signes médullaires.'],
      ['tumeurs-osseuses', 'Métastase vertébrale.'],
      ['coxarthrose-gonarthrose-chirurgie', 'Douleur de hanche.'],
    ],
    etiologies:
      '## Facteurs\n- Port de charges lourdes, travail physique, dégénérescence discale, tabac, obésité',
    principes: [
      [
        'Traitement médical',
        'Pour la majorité.',
        '- **Antalgiques** (paracétamol, tramadol), **AINS** courts, maintien d’une activité adaptée (pas de repos strict prolongé)\n- Douleur neuropathique : **amitriptyline**, **gabapentine** ou prégabaline\n- Infiltration épidurale de corticoïdes dans certains cas\n- Kinésithérapie, éducation (gestes, port de charges)',
      ],
      [
        'Urgences chirurgicales',
        'Opérer vite.',
        '- **Syndrome de la queue de cheval** (troubles sphinctériens, anesthésie en selle) : **chirurgie en urgence** (< 48 h)\n- **Déficit moteur sévère** (≤ 3/5) ou progressif : chirurgie rapide\n- **Sciatique hyperalgique** résistante aux morphiniques',
      ],
      [
        'Chirurgie programmée',
        'Si échec.',
        '- **Discectomie** (microdiscectomie) après 6–12 semaines de traitement médical bien conduit sans amélioration',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'premiere', 'Douleur (courte durée)'],
      ['tramadol', 'alternative', 'Douleur'],
      ['morphine', 'alternative', 'Sciatique hyperalgique'],
      ['amitriptyline', 'alternative', 'Douleur neuropathique'],
      ['gabapentine', 'alternative', 'Douleur neuropathique'],
      ['pregabaline', 'alternative', 'Douleur neuropathique'],
    ],
    complications: [
      {
        nom: 'Syndrome de la queue de cheval',
        fiche: 'compression-medullaire',
        description: 'Hernie médiane.',
        traitement: '- Chirurgie urgente',
        clinique: '- Rétention, anesthésie en selle',
        paraclinique: '- IRM',
      },
      {
        nom: 'Déficit moteur séquellaire',
        description: 'Compression prolongée.',
        traitement: '- Chirurgie, rééducation',
        clinique: '- Pied tombant',
        paraclinique: '',
      },
      {
        nom: 'Lombalgie chronique',
        description: 'Facteurs psychosociaux.',
        traitement: '- Rééducation, prise en charge globale',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration spontanée chez 80–90 % en 6–12 semaines ; bons résultats de la chirurgie sur la douleur radiculaire',
    urgences: [],
    symptomes: [
      ['Douleur lombaire', 'tres_frequent'],
      ['Troubles sensitifs', 'frequent'],
      ['Faiblesse musculaire', 'occasionnel'],
      ['Troubles sphinctériens', 'occasionnel'],
      ['Troubles de la marche', 'frequent'],
    ],
    sources: [
      "Adams and Victor's Principles of Neurology",
      'AAOS — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Antalgiques, activité adaptée, repérage des signes d’alarme',
        '- Troubles sphinctériens, déficit moteur',
      ],
      hgr: ['- Traitement médical, imagerie', ''],
      tert: ['- IRM, discectomie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Sciatique L5 ou S1 commune',
        type: 'commune',
        description: 'Évolution favorable.',
        terrain: '- Adulte de 30–50 ans',
        fonctionnels: '- Douleur radiculaire',
        generaux: '',
        physiques: '- Lasègue positif',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Syndrome de la queue de cheval',
        type: 'gravite',
        description: 'Urgence chirurgicale.',
        terrain: '',
        fonctionnels: '- Rétention urinaire',
        generaux: '',
        physiques: '- Anesthésie en selle, déficit bilatéral',
        paraclinique: '- Hernie médiane volumineuse',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Embarrure
  {
    ...NCH,
    slug: 'embarrure',
    nom: 'Embarrure',
    resume:
      'Fracture du crâne avec enfoncement d’un fragment osseux vers l’intérieur (coup de bâton, de marteau, de machette, chute sur un objet saillant, accident), fréquente en RDC (violences, accidents) ; souvent ouverte (plaie du cuir chevelu) avec risque de méningite et d’abcès cérébral, de lésion de la dure-mère et du cerveau, de convulsions, d’hématome ; scanner cérébral (fenêtre osseuse) ; prise en charge du traumatisme crânien, antibiotiques et antitétanique si ouverte ; chirurgie (relèvement, parage, réparation de la dure-mère) si embarrure ouverte, profonde (> épaisseur de la voûte ou > 1 cm), avec lésion sous-jacente ou déficit ; chez le nourrisson, embarrure « en balle de ping-pong ».',
    definition:
      'Fracture de la voûte du crâne dont un ou plusieurs fragments sont enfoncés au-dessous du niveau de la table interne de l’os adjacent.',
    physiopathologie:
      '## Mécanismes\n- Choc direct par un objet de petite surface (bâton, marteau, machette, pierre), chute\n- Nourrisson : os souple → embarrure « en balle de ping-pong » sans fracture\n\n## Lésions associées\n- **Plaie du cuir chevelu** (embarrure ouverte), **déchirure de la dure-mère**, **contusion** cérébrale, **hématome** (extradural, sous-dural, intracérébral), lésion d’un sinus veineux\n- Risque d’**infection** (méningite, abcès) et d’**épilepsie** post-traumatique',
    diagnostic:
      '## Clinique\n- Traumatisme crânien, **plaie** du cuir chevelu, enfoncement palpable (parfois masqué par l’hématome)\n- **Score de Glasgow**, pupilles, déficit focal, convulsions\n- Écoulement de LCS ou de matière cérébrale\n\n## Examens\n- **Scanner cérébral** avec **fenêtre osseuse** (profondeur, lésions sous-jacentes)\n- Radiographie du crâne si scanner indisponible (moins fiable)\n- NFS, groupage (chirurgie)',
    examens: [
      ['confirmation', 'scanner-cerebral', 'Fenêtre osseuse, lésions associées.'],
      ['deuxieme_intention', 'radiographie-osseuse', 'Crâne si scanner indisponible.'],
      ['premiere_intention', 'nfs', 'Bilan préopératoire.'],
      ['gravite', 'groupage-rai', 'Chirurgie.'],
    ],
    scores: [],
    differentiels: [
      ['traumatisme-cranien', 'Traumatisme sans embarrure.'],
      ['hematome-extradural', 'Hématome associé.'],
      ['hematome-sous-dural', 'Hématome associé.'],
      ['Hématome sous-galéal', 'Tuméfaction molle sans enfoncement osseux.'],
    ],
    etiologies: '## Causes\n- Agressions (bâton, machette), accidents, chutes',
    principes: [
      [
        'Prise en charge initiale',
        'Comme tout traumatisme crânien.',
        '- Libération des voies aériennes, oxygène, stabilisation du rachis cervical, Glasgow, pupilles\n- **Embarrure ouverte** : pansement, **antibiotiques** (ceftriaxone ± métronidazole), **antitétanique**\n- **Antiépileptiques** si convulsions (prophylaxie de 7 jours discutée dans les formes graves)',
      ],
      [
        'Chirurgie',
        'Indications.',
        '- **Embarrure ouverte** : parage, relèvement ou ablation des fragments, réparation de la **dure-mère**, idéalement < 24 h\n- **Embarrure fermée** profonde (> 1 cm ou plus que l’épaisseur de la voûte), lésion sous-jacente avec effet de masse, déficit, préjudice esthétique (front)\n- Hématome associé : évacuation\n- Proximité d’un sinus veineux : prudence (risque hémorragique), centre spécialisé',
      ],
      [
        'Nourrisson',
        'Embarrure en balle de ping-pong.',
        '- Souvent régressive ; relèvement si profonde ou déficit',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Embarrure ouverte'],
      ['metronidazole', 'alternative', 'Plaie souillée'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Prévention du tétanos'],
      ['levetiracetam', 'alternative', 'Convulsions'],
      ['phenytoine', 'alternative', 'Convulsions'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['mannitol', 'adjuvant', 'HTIC'],
    ],
    complications: [
      {
        nom: 'Méningite et abcès cérébral',
        fiche: 'abces-cerebral',
        description: 'Embarrure ouverte.',
        traitement: '- Antibiotiques, drainage',
        clinique: '- Fièvre, céphalées',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Hématome intracrânien',
        fiche: 'hematome-extradural',
        description: 'Lésion vasculaire.',
        traitement: '- Évacuation',
        clinique: '- Aggravation neurologique',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Épilepsie post-traumatique',
        fiche: 'epilepsie',
        description: 'Lésion corticale.',
        traitement: '- Antiépileptiques',
        clinique: '- Crises',
        paraclinique: '- EEG',
      },
    ],
    evolution:
      '## Pronostic\n- Lié aux lésions cérébrales associées et à l’infection ; bon pour les embarrures isolées traitées',
    urgences: ['traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Déficit moteur', 'occasionnel'],
    ],
    sources: [
      'Guidelines for the Management of Severe Traumatic Brain Injury (4th edition)',
      'Sabiston Textbook of Surgery',
      "Adams and Victor's Principles of Neurology",
    ],
    niveaux: {
      cs: [
        '- Pansement, antitétanique, première dose d’antibiotique, référence',
        '- Tout traumatisme crânien avec plaie ou enfoncement',
      ],
      hgr: ['- Scanner, parage, relèvement simple', ''],
      tert: ['- Neurochirurgie (dure-mère, sinus)', ''],
    },
    alertes: { 'traumatisme-cranien-grave-urgence': 'Embarrure avec Glasgow ≤ 8 ou déficit' },
    formes: [
      {
        nom: 'Embarrure ouverte',
        type: 'commune',
        description: 'Plaie du scalp.',
        terrain: '- Agression, machette',
        fonctionnels: '- Céphalées',
        generaux: '',
        physiques: '- Plaie, enfoncement',
        paraclinique: '- Fragment enfoncé au scanner',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Embarrure avec lésion cérébrale',
        type: 'gravite',
        description: 'Contusion, hématome.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Déficit, convulsions, coma',
        paraclinique: '- Contusion, hématome',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
      {
        nom: 'Embarrure en balle de ping-pong',
        type: 'terrain',
        description: 'Nourrisson.',
        terrain: '- Nourrisson',
        fonctionnels: '',
        generaux: '',
        physiques: '- Dépression du crâne sans plaie',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
