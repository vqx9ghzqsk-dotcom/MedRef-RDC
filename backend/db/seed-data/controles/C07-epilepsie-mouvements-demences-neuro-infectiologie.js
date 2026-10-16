'use strict';

/**
 * Contrôle de conformité — lot C07 : épilepsie, mouvements anormaux, démences et neurogériatrie,
 * neuro-infectiologie (36 fiches).
 */

const NICE_EPILEPSIE = 'NICE — Epilepsies in children, young people and adults (NG217, 2022)';
const MHGAP = 'OMS — mhGAP Intervention Guide 2.0 (2016)';
const NICE_DEMENCE = 'NICE — Dementia: assessment, management and support (NG97, 2018)';
const OMS_VIH = 'OMS — Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring (2021)';

module.exports = {
  lot: 'C07',
  date: '2026-10-16',
  titre: 'Épilepsie, mouvements anormaux, démences et neuro-infectiologie',
  fiches: [
    {
      slug: 'crises-non-epileptiques-psychogenes',
      protocoles: [
        'ILAE — Minimum requirements for the diagnosis of psychogenic nonepileptic seizures (2013)',
        NICE_EPILEPSIE,
      ],
      verifie:
        'Éléments évocateurs (durée, yeux fermés, mouvements asynchrones, absence de confusion post-critique), vidéo et vidéo-EEG ; annonce bien conduite ; psychothérapie, traitement de la dépression ; arrêt progressif des antiépileptiques sans épilepsie associée ; pas de benzodiazépines répétées.',
    },
    {
      slug: 'epilepsie',
      protocoles: [
        MHGAP,
        'ILAE — Définition pratique de l’épilepsie (2014) et classification des crises (2017)',
        NICE_EPILEPSIE,
      ],
      verifie:
        'Définition et classification ILAE ; témoins et vidéo ; crises provoquées vs épilepsie ; monothérapie (phénobarbital, carbamazépine pour les focales, valproate pour les généralisées, lévétiracétam ou lamotrigine) ; valproate évité chez la femme en âge de procréer, interactions avec la contraception, acide folique ; sécurité, stigmatisation ; arrêt discuté après 2 ans sans crise.',
    },
    {
      slug: 'epilepsie-onchocercose',
      protocoles: [
        MHGAP,
        'OMS — Onchocercose : traitement par l’ivermectine sous directives communautaires',
      ],
      verifie:
        'Début entre 3 et 18 ans en zone d’hyperendémie, hochement de tête, retard de croissance ; antiépileptiques accessibles (phénobarbital, valproate) ; ivermectine 150 µg/kg (pas < 15 kg ni pendant la grossesse, précaution loase), traitement de masse renforcé 2 fois par an, lutte antivectorielle.',
    },
    {
      slug: 'epilepsie-et-vih',
      protocoles: [
        'AAN/IAS-USA — Evidence-based guideline: management of seizures in HIV-infected patients (2012)',
        OMS_VIH,
      ],
      verifie:
        'Imagerie et ponction lombaire devant toute première crise chez le PVVIH (toxoplasmose, cryptococcose, tuberculose, lymphome) ; traitement de la cause ; lévétiracétam en premier choix, éviter les inducteurs avec le dolutégravir (sinon dolutégravir 50 mg 2 fois par jour) ; TARV différé de 4 à 6 semaines dans les méningites cryptococcique et tuberculeuse.',
    },
    {
      slug: 'epilepsie-pharmacoresistante',
      protocoles: [
        'ILAE — Definition of drug resistant epilepsy: consensus proposal (2010)',
        NICE_EPILEPSIE,
      ],
      verifie:
        'Définition (échec de deux schémas adaptés) ; pseudo-résistance (observance, dose, choix, crises psychogènes) ; associations rationnelles ; régime cétogène ; bilan préchirurgical et chirurgie de la sclérose hippocampique ; sécurité.',
    },
    {
      slug: 'epilepsie-absences',
      protocoles: [
        'Glauser et al. — Ethosuximide, valproic acid and lamotrigine in childhood absence epilepsy (NEJM 2010)',
        NICE_EPILEPSIE,
      ],
      verifie:
        'Absences brèves pluriquotidiennes, test d’hyperventilation, pointes-ondes à 3 Hz ; éthosuximide en premier choix, valproate si crises généralisées associées (à éviter chez l’adolescente), lamotrigine ; jamais de carbamazépine, phénytoïne ni oxcarbazépine.',
    },
    {
      slug: 'etat-de-mal-epileptique',
      protocoles: [
        'AES — Evidence-based guideline: treatment of convulsive status epilepticus in children and adults (2016)',
        'Essai ESETT — Randomized trial of three anticonvulsant medications for status epilepticus (NEJM 2019)',
        'ILAE — Definition and classification of status epilepticus (2015)',
      ],
      verifie:
        'Définition opérationnelle (5 et 30 min) ; glycémie et thiamine ; benzodiazépine (diazépam IV ou rectal, midazolam IM 10/5 mg ou buccal), une seule répétition ; 2e ligne avant 20–40 min : lévétiracétam 60 mg/kg, valproate 40 mg/kg, phénytoïne ou phénobarbital 20 mg/kg ; état de mal réfractaire en réanimation ; cause (paludisme, méningite, éclampsie).',
    },
    {
      slug: 'premiere-crise-convulsive-adulte',
      protocoles: [
        'AAN/AES — Management of an unprovoked first seizure in adults (2015)',
        NICE_EPILEPSIE,
      ],
      verifie:
        'Distinction crise/syncope/crise psychogène ; causes aiguës (hypoglycémie, paludisme, méningite, infections opportunistes, éclampsie, sevrage) ; scanner et ponction lombaire selon le contexte ; traitement de fond au cas par cas (lésion, EEG anormal, crise nocturne, 2e crise) ; conseils de sécurité.',
    },
    {
      slug: 'syndrome-de-lennox-gastaut',
      protocoles: [
        'Cross et al. — Expert opinion on the management of Lennox-Gastaut syndrome (2017)',
        NICE_EPILEPSIE,
      ],
      verifie:
        'Crises multiples (toniques, atoniques, absences atypiques), pointes-ondes lentes ; valproate en premier, associations (lamotrigine, clobazam, topiramate, rufinamide), carbamazépine à éviter ; régime cétogène, callosotomie ; casque et accompagnement.',
    },
    {
      slug: 'chorees',
      protocoles: [
        'AHA — Revision of the Jones criteria for the diagnosis of acute rheumatic fever (2015)',
        'OMS — Rheumatic fever and rheumatic heart disease (prophylaxie secondaire)',
      ],
      verifie:
        'Sydenham : ASLO, échocardiographie, éradication et prophylaxie secondaire par benzathine-pénicilline toutes les 3 à 4 semaines, valproate pour les mouvements gênants ; autres causes (hyperglycémie, médicaments, hyperthyroïdie, lupus, VIH, grossesse, Wilson, Huntington) ; halopéridol ou tétrabénazine symptomatiques.',
    },
    {
      slug: 'dystonies',
      protocoles: [
        'EFNS — Guidelines on diagnosis and treatment of primary dystonias (2011)',
        'AAN — Practice guideline update: botulinum neurotoxin for blepharospasm, cervical dystonia, spasticity and headache (2016)',
      ],
      verifie:
        'Dystonie aiguë médicamenteuse : bipéridène IM ou IV ; dystonies focales : toxine botulique tous les 3–4 mois ; formes généralisées : épreuve de lévodopa chez l’enfant, trihexyphénidyle, baclofène ; maladie de Wilson avant 40 ans.',
    },
    {
      slug: 'maladie-de-parkinson',
      protocoles: [
        'NICE — Parkinson’s disease in adults (NG71, 2017)',
        'MDS — Evidence-based review of treatments for the motor symptoms of Parkinson’s disease (2018)',
      ],
      verifie:
        'Diagnostic clinique (akinésie + tremblement ou rigidité, asymétrie), signes d’alerte, parkinsonisme médicamenteux ; lévodopa + inhibiteur de la décarboxylase, agonistes chez le sujet jeune, trihexyphénidyle évité chez le sujet âgé ; ne jamais arrêter brutalement ; dompéridone plutôt que métoclopramide ; kinésithérapie et signes non moteurs.',
    },
    {
      slug: 'syndrome-des-jambes-sans-repos',
      protocoles: [
        'AASM — Treatment of restless legs syndrome and periodic limb movement disorder: clinical practice guideline (2024)',
        'IRLSSG — Critères diagnostiques du syndrome des jambes sans repos',
      ],
      verifie:
        'Critères diagnostiques ; ferritine (fer si ≤ 75 µg/L) ; arrêt des médicaments aggravants ; gabapentinoïdes en première intention ; grossesse.',
      corrige:
        'L’AASM (2024) déconseille l’usage courant des agonistes dopaminergiques et de la lévodopa (risque élevé d’augmentation) : la fiche les présentait comme options habituelles (pramipexole « à faible dose », lévodopa pour les symptômes intermittents). Ils sont désormais réservés à des cas sélectionnés.',
      corrections: [
        {
          principe: 'Traitement médicamenteux',
          champ: 'details',
          remplacer: [
            '- **Pramipexole** à faible dose (risque d’augmentation et de troubles du contrôle des impulsions)',
            '- **Pramipexole** et **lévodopa** : déconseillés en traitement courant (AASM 2024 : risque élevé d’augmentation et de troubles du contrôle des impulsions) ; réservés à des cas sélectionnés, à faible dose, avec surveillance',
          ],
        },
        {
          molecule: 'pramipexole',
          champ: 'contexte',
          remplacer: ['Formes sévères', 'Cas sélectionnés seulement (risque d’augmentation)'],
        },
        {
          molecule: 'levodopa',
          champ: 'contexte',
          remplacer: ['Symptômes intermittents', 'Usage ponctuel seulement (risque d’augmentation)'],
        },
      ],
    },
    {
      slug: 'syndromes-parkinsoniens-medicamenteux',
      protocoles: [MHGAP, 'NICE — Psychosis and schizophrenia in adults (CG178)'],
      verifie:
        'Dystonie aiguë, akathisie, parkinsonisme, dyskinésies tardives ; syndrome malin à éliminer ; bipéridène 2,5–5 mg IM, relais court par trihexyphénidyle ; réduction de dose ou changement d’antipsychotique ; propranolol de l’akathisie ; pas d’anticholinergiques en continu.',
    },
    {
      slug: 'tics',
      protocoles: [
        'ESSTS — European clinical guidelines for Tourette syndrome and other tic disorders (2021)',
        'AAN — Practice guideline: treatment of tics in people with Tourette syndrome (2019)',
      ],
      verifie:
        'Diagnostic clinique, comorbidités (TDAH, TOC), élimination de la chorée de Sydenham et de l’épilepsie ; information ; thérapie comportementale en première intention ; antipsychotiques à faible dose ou clonidine si gêne importante.',
    },
    {
      slug: 'tremblement-essentiel',
      protocoles: [
        'AAN — Evidence-based guideline update: treatment of essential tremor (2011)',
        'MDS — Consensus statement on the classification of tremors (2018)',
      ],
      verifie:
        'Tremblement d’action bilatéral, examen normal ; élimination de l’hyperthyroïdie, des médicaments, du Parkinson et de Wilson ; propranolol 40–160 mg/j ou primidone à dose lente ; topiramate, gabapentine ; toxine, chirurgie.',
    },
    {
      slug: 'demence-a-corps-de-lewy',
      protocoles: [
        'McKeith et al. — Diagnosis and management of dementia with Lewy bodies: fourth consensus report (2017)',
        NICE_DEMENCE,
      ],
      verifie:
        'Fluctuations, hallucinations visuelles, trouble du comportement en sommeil paradoxal, parkinsonisme ; inhibiteurs de la cholinestérase ; neuroleptiques classiques contre-indiqués, quétiapine à très faible dose ; chutes et hypotension orthostatique.',
    },
    {
      slug: 'demence-fronto-temporale',
      protocoles: [
        'Rascovsky et al. — International consensus criteria for behavioural variant FTD (2011)',
        NICE_DEMENCE,
      ],
      verifie:
        'Variante comportementale et aphasies ; élimination des troubles psychiatriques, tumeur frontale, neurosyphilis, VIH ; ISRS ou trazodone pour les troubles du comportement ; inhibiteurs de la cholinestérase à éviter ; orthophonie ; protection juridique et soutien des aidants.',
    },
    {
      slug: 'demences-vasculaires',
      protocoles: [
        'AHA/ASA — Vascular contributions to cognitive impairment and dementia (2011)',
        NICE_DEMENCE,
      ],
      verifie:
        'Début brutal ou en marches d’escalier, profil exécutif ; imagerie, causes curables ; prévention vasculaire (tension, diabète, statine, antithrombotique) ; bénéfice modeste des anticholinestérasiques en cas de démence mixte ; soutien des aidants.',
    },
    {
      slug: 'hydrocephalie-a-pression-normale',
      protocoles: [
        'Japanese Society of NPH — Guidelines for management of idiopathic normal pressure hydrocephalus (3e édition, 2021)',
        'International iNPH guidelines (Relkin et al., 2005)',
      ],
      verifie:
        'Triade marche-cognition-urines, index d’Evans > 0,3, test de soustraction de 30–50 mL ; dérivation ventriculo-péritonéale chez les répondeurs, complications (infection, sur-drainage) ; mesures palliatives.',
    },
    {
      slug: 'maladie-d-alzheimer',
      protocoles: [
        NICE_DEMENCE,
        'OMS — Risk reduction of cognitive decline and dementia (2019)',
        MHGAP,
      ],
      verifie:
        'Début mnésique progressif, tests adaptés, recherche des causes curables (B12, TSH, VIH, syphilis, hématome sous-dural, dépression) ; psychoéducation et soutien des aidants ; donépézil 5 puis 10 mg ; antipsychotique à très faible dose et courte durée seulement si danger ; éviter benzodiazépines et anticholinergiques ; protection contre les accusations de sorcellerie.',
    },
    {
      slug: 'syndrome-confusionnel-aigu',
      protocoles: ['NICE — Delirium: prevention, diagnosis and management in hospital and long-term care (CG103, mise à jour 2023)'],
      verifie:
        'Début aigu et fluctuant, CAM, formes hypoactives ; recherche de la cause (paludisme, infection, glycémie, rétention, médicaments, sevrage) ; mesures non médicamenteuses ; halopéridol 0,5–1 mg seulement si danger ; benzodiazépines évitées hors sevrage alcoolique.',
    },
    {
      slug: 'troubles-cognitifs-legers',
      protocoles: ['AAN — Practice guideline update summary: mild cognitive impairment (2018)', NICE_DEMENCE],
      verifie:
        'Déclin objectivé sans perte d’autonomie ; causes réversibles et révision des médicaments ; facteurs de risque vasculaire, activité physique ; réévaluation tous les 6 à 12 mois ; pas d’inhibiteur de la cholinestérase.',
    },
    {
      slug: 'troubles-psychiatriques-du-sujet-age',
      protocoles: [MHGAP, 'NICE — Depression in adults: treatment and management (NG222, 2022)'],
      verifie:
        'Dépression masquée, risque suicidaire, confusion, troubles du comportement de la démence ; revue des médicaments ; non médicamenteux d’abord ; sertraline (éviter amitriptyline et paroxétine), antipsychotiques à très faible dose et courte durée ; benzodiazépines évitées ; maltraitance.',
    },
    {
      slug: 'botulisme',
      protocoles: [
        'CDC — Clinical guidelines for diagnosis and treatment of botulism (2021)',
        'OMS — Botulisme (aide-mémoire)',
      ],
      verifie:
        'Paralysie descendante symétrique, mydriase, apyrexie, cas groupés ; surveillance de la capacité vitale et ventilation ; antitoxine dès la suspicion ; débridement et pénicilline G des plaies ; éviter aminosides, clindamycine et magnésium ; déclaration.',
    },
    {
      slug: 'encephalites-virales-adulte',
      protocoles: [
        'ABN/BIA — Management of suspected viral encephalitis in adults (2012)',
        'IDSA — The management of encephalitis: clinical practice guidelines (2008)',
      ],
      verifie:
        'Fièvre et troubles neurologiques ; paludisme et glycémie d’abord ; scanner puis ponction lombaire, PCR HSV (à refaire si négative précoce), IRM temporale ; aciclovir 10 mg/kg toutes les 8 h dès la suspicion, 14 à 21 jours ; ceftriaxone et artésunate en attendant ; antiépileptiques ; encéphalite auto-immune en cas de rechute.',
    },
    {
      slug: 'leucoencephalopathie-multifocale-progressive',
      protocoles: [
        'AAN — PML diagnostic criteria: consensus statement (2013)',
        OMS_VIH,
      ],
      verifie:
        'Déficits focaux progressifs sans fièvre, IRM sans effet de masse ni prise de contraste, PCR JC ; élimination de la toxoplasmose ; TARV sans délai, arrêt des immunosuppresseurs ; corticoïdes en cas de syndrome de restauration menaçant.',
    },
    {
      slug: 'meningite-tuberculeuse',
      protocoles: [
        'OMS — Consolidated guidelines on tuberculosis, module 4 : treatment (2022)',
        'Essai ACT HIV — Adjunctive dexamethasone for tuberculous meningitis in HIV-positive adults (NEJM 2023)',
      ],
      verifie:
        'Installation subaiguë, LCR lymphocytaire hyperprotéinorachique et hypoglycorachique, Xpert sur LCR, CrAg ; 2RHZE puis 10RH (12 mois) sans attendre la confirmation ; dexaméthasone 0,4 mg/kg/j décroissante sur 6–8 semaines ; ARV différés de 4 à 8 semaines ; hydrocéphalie, hyponatrémie.',
      corrige:
        'Corticoïdes chez le patient VIH : la fiche les disait « recommandés aussi » sans réserve ; l’essai ACT HIV (2023) n’a pas montré de bénéfice de la dexaméthasone sur la survie chez l’adulte vivant avec le VIH. La recommandation OMS reste générale : la ligne signale désormais cette incertitude.',
      a_arbitrer:
        'Dexaméthasone chez l’adulte VIH+ atteint de méningite tuberculeuse : l’OMS la recommande sans distinction, l’essai ACT HIV (2023) ne montre pas de bénéfice sur la mortalité. Pratique à fixer pour le service.',
      corrections: [
        {
          principe: 'Corticoïdes',
          champ: 'details',
          remplacer: [
            '- Recommandée aussi chez les patients VIH',
            '- Patient VIH : recommandée par l’OMS, mais l’essai ACT HIV (2023) n’a pas montré de bénéfice sur la survie de l’adulte VIH+ ; décision au cas par cas (avis spécialisé)',
          ],
        },
      ],
    },
    {
      slug: 'neurocysticercose',
      protocoles: [
        'IDSA/ASTMH — Clinical practice guidelines for diagnosis and treatment of neurocysticercosis (2017)',
        'OMS — Guidelines for the treatment of Taenia solium neurocysticercosis (2021)',
      ],
      verifie:
        'Imagerie (kystes, scolex, calcifications), sérologie, fond d’œil avant traitement ; antiépileptiques ; albendazole 15 mg/kg/j (max 1 200 mg) 10–14 jours, + praziquantel 50 mg/kg/j si plus de 2 kystes, toujours avec corticoïdes ; pas d’antiparasitaire si calcifications seules, HTIC non contrôlée ou encéphalite cysticerquienne ; prévention.',
    },
    {
      slug: 'neuropaludisme-adulte',
      protocoles: [
        'OMS — Guidelines for malaria (2024)',
        'OMS — Management of severe malaria: a practical handbook (2012)',
      ],
      verifie:
        'Définition (Glasgow < 11 ou convulsions répétées) ; artésunate 2,4 mg/kg H0, H12, H24 puis quotidien, quinine à défaut avec dose de charge ; glycémie toutes les 4 h ; convulsions ; remplissage prudent, transfusion si Hb < 7 g/dL ; ceftriaxone si méningite non exclue ; pas de corticoïdes ni de mannitol ; hémolyse retardée après artésunate ; relais par CTA.',
    },
    {
      slug: 'neuropathie-associee-au-vih',
      protocoles: [
        'NICE — Neuropathic pain in adults: pharmacological management in non-specialist settings (CG173)',
        OMS_VIH,
      ],
      verifie:
        'Polyneuropathie sensitive distale, signes d’alerte (CMV, Guillain-Barré) ; TARV efficace, retrait des neurotoxiques, pyridoxine sous isoniazide ; amitriptyline ; soins des pieds.',
      corrige:
        'La carbamazépine était proposée contre la douleur : inducteur enzymatique, elle fait baisser le dolutégravir et son efficacité n’est pas démontrée dans cette neuropathie. Elle est retirée des options au profit de la gabapentine et de la prégabaline.',
      corrections: [
        {
          principe: 'Douleurs neuropathiques',
          champ: 'details',
          remplacer: [
            '- **Carbamazépine** (attention aux interactions avec le TARV) ou **gabapentine**, prégabaline',
            '- **Gabapentine** ou **prégabaline** ; éviter la **carbamazépine** (inducteur enzymatique qui fait baisser le dolutégravir, efficacité non démontrée dans cette neuropathie)',
          ],
        },
        {
          molecule: 'carbamazepine',
          champ: 'contexte',
          remplacer: ['Douleurs (interactions)', 'À éviter (inducteur : baisse du dolutégravir)'],
        },
      ],
    },
    {
      slug: 'neuropathie-lepreuse',
      protocoles: [
        'OMS — Guidelines for the diagnosis, treatment and prevention of leprosy (2018)',
        'OMS — Stratégie mondiale de lutte contre la lèpre 2021–2030',
      ],
      verifie:
        'Taches anesthésiques, nerfs hypertrophiés, cotation OMS de l’incapacité ; polychimiothérapie (rifampicine 600 mg mensuelle, dapsone 100 mg/j, clofazimine 300 mg mensuelle et 50 mg/j ; 6 ou 12 mois) ; rifampicine en dose unique pour les contacts ; névrite : prednisolone 40 mg/j décroissante sur 12–20 semaines ; prévention des incapacités.',
    },
    {
      slug: 'neurosyphilis',
      protocoles: [
        'CDC — Sexually Transmitted Infections Treatment Guidelines (2021)',
        'OMS — Guidelines for the treatment of Treponema pallidum (syphilis) (2016)',
      ],
      verifie:
        'Formes cliniques, sérologie et ponction lombaire (VDRL du LCR) ; pénicilline G 18–24 MUI/j IV 10–14 jours, ceftriaxone 2 g/j en alternative, désensibilisation de la femme enceinte allergique ; Jarisch-Herxheimer ; suivi sérologique et du LCR ; VIH et partenaires.',
    },
    {
      slug: 'paraparesie-spastique-tropicale',
      protocoles: [
        'Araujo et al. — Management of HAM/TSP: systematic review and consensus-based recommendations (2021)',
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
      ],
      verifie:
        'Paraparésie spastique progressive avec troubles urinaires précoces ; sérologie HTLV-1 sang et LCR, IRM pour éliminer une compression, diagnostics différentiels (konzo, B12, syphilis, Pott) ; corticoïdes en phase de progression rapide ; baclofène, prise en charge vésicale ; dépistage des donneurs, conseil sur l’allaitement, anguillulose.',
    },
    {
      slug: 'troubles-neurocognitifs-associes-au-vih',
      protocoles: [
        'Antinori et al. — Updated research nosology for HIV-associated neurocognitive disorders (critères de Frascati, 2007)',
        OMS_VIH,
      ],
      verifie:
        'Diagnostic d’élimination (infections opportunistes, dépression, B12, efavirenz) ; CD4, charge virale, imagerie, LCR ; TARV optimisé, remplacement de l’efavirenz ; aide à l’observance ; traitement de la dépression.',
    },
    {
      slug: 'tha-phase-neurologique',
      protocoles: [
        'OMS — Guidelines for the treatment of human African trypanosomiasis (2024)',
        'PNLTHA RDC — Directives nationales de lutte contre la trypanosomiase humaine africaine',
      ],
      verifie:
        'Clinique neuropsychiatrique, dépistage, confirmation parasitologique, stadification par ponction lombaire ; fexinidazole 10 jours (≥ 6 ans et ≥ 20 kg, LCR < 100 leucocytes/mm³), NECT pour les formes sévères, acoziborole selon les directives ; mélarsoprol abandonné pour T. b. gambiense ; suivi et dépistage actif.',
    },
  ],
};
