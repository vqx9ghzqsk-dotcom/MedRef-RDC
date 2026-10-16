'use strict';

/**
 * Contrôle de conformité — lot C06 : neurologie et AVC (37 fiches).
 */

const NEURO_DOULEUR = 'NICE — Neuropathic pain in adults: pharmacological management in non-specialist settings (CG173)';

module.exports = {
  lot: 'C06',
  date: '2026-10-16',
  titre: 'Neurologie et accidents vasculaires cérébraux',
  fiches: [
    {
      slug: 'algie-vasculaire-de-la-face',
      protocoles: [
        'EAN — Guideline on the management of cluster headache (2023)',
        'IHS — Classification internationale des céphalées (ICHD-3)',
      ],
      verifie:
        'Critères ICHD-3 ; IRM au moins une fois ; crise : oxygène 100 % 12–15 L/min 15–20 min, sumatriptan 6 mg SC ; fond : vérapamil 240 mg/j titré sous ECG, corticoïdes de transition ; lithium, topiramate ; risque suicidaire.',
    },
    {
      slug: 'cephalee-de-tension',
      protocoles: [
        'EFNS — Guideline on the treatment of tension-type headache (2010)',
        'IHS — Classification internationale des céphalées (ICHD-3)',
      ],
      verifie:
        'Critères et signes d’alerte ; paracétamol, ibuprofène ou aspirine ponctuels, limitation des antalgiques ; amitriptyline en traitement de fond ; mesures non médicamenteuses ; céphalée par abus médicamenteux.',
    },
    {
      slug: 'cephalees-migraine',
      protocoles: [
        'EFNS — Guideline on the drug treatment of migraine (2009)',
        'NICE — Headaches in over 12s: diagnosis and management (CG150)',
        'IHS — Classification internationale des céphalées (ICHD-3)',
      ],
      verifie:
        'Drapeaux rouges des céphalées secondaires (dont paludisme, cryptococcose, pré-éclampsie) ; crise : paracétamol, ibuprofène 400 mg ou aspirine 900 mg ± métoclopramide, triptan ; fond si ≥ 4 crises par mois : propranolol, amitriptyline, valproate exclu chez la femme en âge de procréer ; limitation des antalgiques.',
    },
    {
      slug: 'coma-demarche',
      protocoles: [
        'OMS — IMAI district clinician manual (coma)',
        'OMS — Guidelines for malaria (traitement présomptif du paludisme grave)',
      ],
      verifie:
        'ABC, glycémie immédiate, glucose si < 0,7 g/L avec thiamine chez l’alcoolique ou le dénutri ; Glasgow, pupilles, signes focaux et méningés ; scanner avant la ponction en cas de signes focaux ; artésunate et ceftriaxone sans retarder ; naloxone, antidotes, sulfate de magnésium ; soins du comateux.',
    },
    {
      slug: 'hypersomnies',
      protocoles: [
        'AASM — International classification of sleep disorders (ICSD-3)',
        'OMS — Trypanosomiase humaine africaine : lignes directrices de traitement (2024)',
      ],
      verifie:
        'Échelle d’Epworth, apnées, médicaments ; dépistage systématique de la trypanosomiase en zone d’endémie (fexinidazole, NECT selon le stade) ; pression positive continue ; modafinil des hypersomnies centrales ; prudence au volant.',
    },
    {
      slug: 'hypertension-intracranienne',
      protocoles: [
        'Brain Trauma Foundation — Guidelines for the management of severe traumatic brain injury (osmothérapie)',
        'OMS — Guidelines for diagnosing, preventing and managing cryptococcal disease (2022)',
      ],
      verifie:
        'Clinique, scanner avant toute ponction lombaire ; tête à 30°, mannitol 0,5–1 g/kg ou sérum salé hypertonique ; dexaméthasone seulement pour l’œdème tumoral ou périlésionnel ; cryptococcose : ponctions évacuatrices sans mannitol ni corticoïdes ; dérivation, neurochirurgie.',
    },
    {
      slug: 'myasthenie',
      protocoles: [
        'International consensus guidance for management of myasthenia gravis (mise à jour 2020)',
      ],
      verifie:
        'Fatigabilité, test au glaçon, anticorps anti-RACh et anti-MuSK, EMG, scanner thoracique ; pyridostigmine 30–60 mg 3 à 4 fois par jour ; prednisolone à dose progressive puis azathioprine ; thymectomie ; crise : capacité vitale, IgIV ou échanges plasmatiques, médicaments aggravants ; crise cholinergique.',
    },
    {
      slug: 'myelite-transverse',
      protocoles: [
        'Transverse Myelitis Consortium Working Group — Proposed diagnostic criteria (2002)',
        'OMS — Guideline on control and elimination of human schistosomiasis (2022)',
      ],
      verifie:
        'IRM médullaire en urgence pour éliminer une compression ; LCR, sérologies (VIH, HTLV-1, syphilis), anti-aquaporine 4 ; méthylprednisolone 1 g/j 3 à 5 jours, échanges plasmatiques ; traitement des causes (praziquantel + corticoïdes, aciclovir, antituberculeux, pénicilline G) ; sondage, prévention des escarres et des thromboses.',
    },
    {
      slug: 'myelopathies',
      protocoles: [
        'NICE — Spinal metastases and metastatic spinal cord compression (NG234, 2023)',
        'OMS — Consolidated guidelines on tuberculosis (mal de Pott)',
      ],
      verifie:
        'Syndrome médullaire, IRM en urgence ; compression tumorale : dexaméthasone, chirurgie ou radiothérapie ; causes non compressives (myélite, syphilis, schistosomiase, carence en B12, VIH, konzo) ; soins du blessé médullaire.',
    },
    {
      slug: 'myopathies-de-l-adulte',
      protocoles: [
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
        'Harrison’s Principles of Internal Medicine (myopathies)',
      ],
      verifie:
        'Faiblesse proximale sans troubles sensitifs ; CPK, kaliémie, TSH, calcémie, phosphorémie ; EMG et biopsie ; causes acquises (endocriniennes, médicaments, alcool, VIH, pyomyosite) ; surveillance cardiaque et respiratoire des formes héréditaires ; éviter suxaméthonium et halogénés.',
    },
    {
      slug: 'myopathies-toxiques-et-medicamenteuses',
      protocoles: [
        'NLA — Statin intolerance / statin-associated muscle symptoms (2022)',
        'Revue — Rhabdomyolysis: diagnosis and management (prise en charge hydrique)',
      ],
      verifie:
        'CPK normales dans la myopathie cortisonique, > 5 N dans la rhabdomyolyse, myoglobinurie à la bandelette ; arrêt ou substitution du produit ; rhabdomyolyse : hydratation abondante (diurèse 200–300 mL/h), hyperkaliémie, dialyse, pas de correction d’une hypocalcémie asymptomatique, fasciotomie ; interactions des statines.',
    },
    {
      slug: 'narcolepsie',
      protocoles: [
        'AASM — Treatment of central disorders of hypersomnolence: clinical practice guideline (2021)',
        'EAN — Guideline on the management of narcolepsy in adults and children (2021)',
      ],
      verifie:
        'Somnolence, cataplexie, polysomnographie et tests de latence ; élimination de la trypanosomiase ; siestes programmées ; modafinil 100–400 mg/j ; clomipramine, venlafaxine ou fluoxétine contre la cataplexie ; restrictions de conduite.',
    },
    {
      slug: 'neuromyelite-optique',
      protocoles: [
        'International consensus diagnostic criteria for neuromyelitis optica spectrum disorders (2015)',
        'NEMOS — Update on the diagnosis and treatment of NMOSD (2023)',
      ],
      verifie:
        'Anticorps anti-aquaporine 4 (anti-MOG), myélite ≥ 3 segments ; poussée : méthylprednisolone 1 g/j 5 jours, échanges plasmatiques précoces ; fond : azathioprine, rituximab, mycophénolate ; ne pas utiliser les traitements de la sclérose en plaques ; prophylaxies sous immunosuppresseurs.',
    },
    {
      slug: 'neuropathie-alcoolique',
      protocoles: [NEURO_DOULEUR, 'OMS — mhGAP Intervention Guide 2.0 (2016)'],
      verifie:
        'Polyneuropathie axonale sensitive, bilan (macrocytose, B12, folates, VIH, syphilis) ; arrêt de l’alcool avec sevrage sécurisé ; thiamine avant tout soluté glucosé ; vitamines B et renutrition ; amitriptyline, gabapentine ou prégabaline contre la douleur.',
    },
    {
      slug: 'neuropathie-ataxique-tropicale',
      protocoles: [
        'Harrison’s Principles of Internal Medicine (neuropathies nutritionnelles et toxiques)',
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
      ],
      verifie:
        'Triade neuropathie sensitive ataxiante, atrophie optique et surdité chez le consommateur de manioc mal roui ; diagnostics différentiels (konzo, B12, tabès, VIH) ; transformation correcte du manioc, alimentation protéique, vitamines B ; réadaptation.',
    },
    {
      slug: 'neuropathie-diabetique',
      protocoles: [
        'ADA — Diabetic neuropathy: a position statement (2017) et Standards of Care (2025)',
        NEURO_DOULEUR,
      ],
      verifie:
        'Dépistage au monofilament dès le diagnostic du type 2 puis annuel ; vitamine B12 sous metformine ; équilibre glycémique et tensionnel ; éducation des pieds ; douleur : amitriptyline, duloxétine, prégabaline, gabapentine, capsaïcine ; dysautonomie ; mononeuropathies.',
    },
    {
      slug: 'neuropathies-peripheriques',
      protocoles: [NEURO_DOULEUR, 'OMS — Consolidated guidelines on tuberculosis (pyridoxine sous isoniazide)'],
      verifie:
        'Causes en RDC (diabète, VIH, isoniazide, alcool, lèpre, manioc) ; bilan ; pyridoxine 10–25 mg/j en prévention sous isoniazide, 50–100 mg/j en traitement ; traitement de la cause ; protection des pieds.',
      corrige:
        'La carbamazépine était proposée à égalité avec l’amitriptyline contre la douleur des polyneuropathies : le NICE la réserve à la névralgie du trijumeau (efficacité non démontrée ailleurs, effets indésirables). Les traitements de référence sont l’amitriptyline, la duloxétine, la gabapentine et la prégabaline.',
      corrections: [
        {
          champ: 'resume',
          remplacer: [
            'amitriptyline ou carbamazépine contre la douleur',
            'amitriptyline (ou duloxétine, gabapentine, prégabaline) contre la douleur',
          ],
        },
        {
          principe: 'Douleurs neuropathiques',
          champ: 'details',
          remplacer: [
            '- **Amitriptyline** 10–75 mg le soir, ou **carbamazépine** ; gabapentine ou prégabaline si disponibles',
            '- **Amitriptyline** 10–75 mg le soir ; duloxétine, gabapentine ou prégabaline si disponibles\n- **Carbamazépine** : réservée à la névralgie du trijumeau (efficacité non démontrée dans les polyneuropathies)',
          ],
        },
        {
          molecule: 'carbamazepine',
          champ: 'contexte',
          remplacer: ['Douleurs neuropathiques', 'Seulement si névralgie du trijumeau associée'],
        },
      ],
    },
    {
      slug: 'nevralgie-du-trijumeau',
      protocoles: [
        'EAN — Guideline on trigeminal neuralgia (2019)',
        'IHS — Classification internationale des céphalées (ICHD-3)',
      ],
      verifie:
        'Décharges brèves, zone gâchette, examen normal ; IRM (conflit, sclérose en plaques, tumeur) ; carbamazépine 100–200 mg 2 fois par jour titrée jusqu’à 600–1 200 mg/j, oxcarbazépine ; surveillance (NFS, natrémie, éruption) ; décompression microvasculaire ; pas d’extractions dentaires à l’aveugle.',
    },
    {
      slug: 'paralysie-faciale-peripherique',
      protocoles: [
        'AAO-HNS — Clinical practice guideline: Bell’s palsy (2013)',
        'Essai Sullivan et al. — Early treatment with prednisolone or acyclovir in Bell’s palsy (NEJM 2007)',
      ],
      verifie:
        'Distinction périphérique/centrale (front) ; test VIH, otoscopie (zona, otite) ; prednisolone dans les 72 h (60 mg 5 jours puis décroissance, ou 50 mg 10 jours) ; antiviral associé si paralysie complète ou zona ; protection de l’œil ; imagerie si atypique.',
    },
    {
      slug: 'paralysie-periodique-hypokaliemique',
      protocoles: [
        'Revue — Thyrotoxic periodic paralysis: diagnosis and management',
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
      ],
      verifie:
        'Paralysie flasque au réveil, kaliémie souvent < 2,5 mmol/L, ECG, TSH, kaliurie basse ; potassium oral 30–60 mmol, IV dilué dans le sérum salé ≤ 10–20 mmol/h si nécessaire ; risque d’hyperkaliémie de rebond ; propranolol dans la forme thyrotoxique ; acétazolamide en prévention de la forme familiale.',
    },
    {
      slug: 'parasomnies',
      protocoles: [
        'AASM — Management of REM sleep behavior disorder: clinical practice guideline (2023)',
        'AASM — International classification of sleep disorders (ICSD-3)',
      ],
      verifie:
        'Distinction sommeil lent / paradoxal, épilepsie nocturne (EEG), polysomnographie si atypique ; sécurisation et hygiène du sommeil ; trouble du comportement en sommeil paradoxal : mélatonine 3–12 mg ou clonazépam 0,25–1 mg, surveillance d’une synucléinopathie ; cauchemars post-traumatiques ; approche culturelle de la paralysie du sommeil.',
    },
    {
      slug: 'radiculopathies',
      protocoles: [
        'NICE — Low back pain and sciatica in over 16s (NG59, mise à jour 2020)',
        'NICE CKS — Neck pain: cervical radiculopathy',
      ],
      verifie:
        'Territoires radiculaires et signes d’alerte ; aucun examen dans la forme commune les 6 premières semaines, IRM si alerte, déficit ou échec ; maintien de l’activité, AINS courts ; chirurgie si déficit sévère, queue de cheval ou échec après 6 à 12 semaines ; causes secondaires.',
      corrige:
        'Gabapentinoïdes et corticoïdes oraux : sans bénéfice démontré dans la sciatique, le NICE les déconseille ; ils restent possibles (douleur neuropathique) dans la névralgie cervico-brachiale. La fiche les proposait sans distinction.',
      corrections: [
        {
          principe: 'Traitement médical',
          champ: 'details',
          remplacer: [
            '- Douleurs neuropathiques : **amitriptyline**, **gabapentine** ou **prégabaline**\n- Corticoïdes oraux courts discutés ; infiltrations en centre spécialisé ; collier cervical bref',
            '- Douleurs neuropathiques : **amitriptyline** ; **gabapentine** ou **prégabaline** possibles dans la névralgie cervico-brachiale, mais pas dans la sciatique (sans bénéfice, NICE)\n- Corticoïdes oraux : non recommandés dans la sciatique, discutés en cure courte dans la névralgie cervico-brachiale ; infiltrations en centre spécialisé ; collier cervical bref',
          ],
        },
      ],
    },
    {
      slug: 'sclerose-en-plaques',
      protocoles: [
        'Critères de McDonald (révision 2017)',
        'ECTRIMS/EAN — Guideline on the pharmacological treatment of people with multiple sclerosis (2018)',
      ],
      verifie:
        'IRM et LCR (bandes oligoclonales), élimination des diagnostics fréquents en RDC (VIH, syphilis, HTLV-1, B12, neuromyélite optique) ; poussée : méthylprednisolone 1 g/j 3 à 5 jours après élimination d’une infection ; traitement de fond en centre spécialisé (rituximab en contexte de ressources limitées) ; traitements symptomatiques.',
    },
    {
      slug: 'sclerose-laterale-amyotrophique',
      protocoles: [
        'EAN — Guideline on the management of amyotrophic lateral sclerosis (2024)',
        'NICE — Motor neurone disease: assessment and management (NG42)',
      ],
      verifie:
        'Atteinte centrale et périphérique sans troubles sensitifs, EMG, élimination d’une myélopathie cervicale ; riluzole 50 mg 2 fois par jour ; gastrostomie si perte de poids > 10 % ; VNI ; traitements symptomatiques ; directives anticipées et soins palliatifs.',
    },
    {
      slug: 'sequelles-de-poliomyelite',
      protocoles: [
        'OMS — Initiative mondiale pour l’éradication de la poliomyélite : surveillance des paralysies flasques aiguës',
        'EFNS — Guideline on diagnosis and management of post-polio syndrome (2006)',
      ],
      verifie:
        'Paralysie flasque asymétrique sans troubles sensitifs, déformations ; rééducation, orthèses, aides techniques, chirurgie orthopédique ; syndrome post-polio : économie d’effort ; vaccination et notification des paralysies flasques aiguës.',
    },
    {
      slug: 'syndrome-de-guillain-barre',
      protocoles: [
        'EAN/PNS — Guideline on diagnosis and treatment of Guillain-Barré syndrome (2023)',
        'OMS — Surveillance des paralysies flasques aiguës',
      ],
      verifie:
        'Faiblesse ascendante aréflexique, dissociation albumino-cytologique, > 50 cellules : penser au VIH ; surveillance respiratoire (ventilation si capacité vitale < 20 mL/kg) et dysautonomie ; IgIV 0,4 g/kg/j 5 jours ou échanges plasmatiques dans les 2 à 4 semaines chez le patient ne marchant pas ; pas de corticoïdes ; prévention des thromboses ; notification des PFA chez l’enfant.',
    },
    {
      slug: 'vascularites-cerebrales',
      protocoles: [
        'EULAR — Recommendations for the management of ANCA-associated vasculitis (2022)',
        'CDC — STI Treatment Guidelines (2021) : neurosyphilis',
      ],
      verifie:
        'Causes infectieuses d’abord (syphilis : pénicilline G IV 14 jours ; tuberculose ; VZV ; VIH ; cryptocoque) ; IRM, angioscanner, LCR, sérologies, ANCA, anticorps antinucléaires, antiphospholipides ; formes inflammatoires : méthylprednisolone puis prednisolone, cyclophosphamide puis azathioprine, rituximab ; prophylaxies.',
    },
    {
      slug: 'vertiges',
      protocoles: [
        'AAO-HNS — Clinical practice guideline: benign paroxysmal positional vertigo (2017)',
        'AAO-HNS — Clinical practice guideline: Ménière’s disease (2020)',
      ],
      verifie:
        'Distinction périphérique/central, Dix-Hallpike, HINTS ; imagerie si signes centraux ; manœuvre d’Epley sans médicament ; névrite vestibulaire : symptomatique court, rééducation précoce ; Ménière ; antiémétiques limités à quelques jours ; filière AVC.',
    },
    {
      slug: 'accident-ischemique-transitoire',
      protocoles: [
        'ESO — Guidelines on management of transient ischaemic attack (2021)',
        'AHA/ASA — Guideline for the prevention of stroke in patients with stroke and TIA (2021)',
      ],
      verifie:
        'Urgence (risque précoce d’AVC), ABCD² ; imagerie, ECG, Doppler, échocardiographie ; aspirine dès l’hémorragie éliminée, aspirine + clopidogrel 21 jours si haut risque, statine ; anticoagulation si FA ; endartériectomie dans les 2 semaines si sténose ≥ 70 %.',
    },
    {
      slug: 'avc',
      protocoles: [
        'ESO — Guidelines on intravenous thrombolysis for acute ischaemic stroke (2021)',
        'AHA/ASA — Guidelines for the early management of acute ischemic stroke (2019)',
        'AHA/ASA — Guideline for the management of spontaneous intracerebral hemorrhage (2022)',
      ],
      verifie:
        'FAST et heure de début ; scanner avant tout antithrombotique ; altéplase 0,9 mg/kg (max 90 mg) dans les 4 h 30, PA < 185/110 puis < 180/105 ; aspirine 160–300 mg si non thrombolysé, PA respectée sauf > 220/120 ; hémorragie : PAS vers 140 (pas sous 130) ; glycémie 1,4–1,8 g/L, déglutition, prévention des complications.',
    },
    {
      slug: 'avc-du-sujet-jeune',
      protocoles: [
        'AHA/ASA — Guideline for the prevention of stroke in patients with stroke and TIA (2021)',
        'ASH — Guidelines for sickle cell disease: prevention, diagnosis and treatment of cerebrovascular disease (2020)',
      ],
      verifie:
        'Bilan étiologique systématique (électrophorèse, VIH, syphilis, échocardiographie, Doppler, dissection) ; règles générales de l’AVC ; drépanocytose : échange transfusionnel (HbS < 30 %) puis programme transfusionnel et hydroxycarbamide ; VIH et infections ; anticoagulation des cardiopathies emboligènes ; dissection.',
    },
    {
      slug: 'avc-hemorragique',
      protocoles: ['AHA/ASA — Guideline for the management of spontaneous intracerebral hemorrhage (2022)'],
      verifie:
        'Scanner ; PAS vers 140 mmHg (entre 130 et 150) sans chute brutale ; arrêt des anticoagulants, vitamine K + plasma ou concentré de complexe prothrombinique ; pas de prophylaxie antiépileptique ; mannitol en attente de chirurgie ; HBPM préventive après 24–48 h si stable ; chirurgie de l’hématome cérébelleux > 3 cm ou de l’hydrocéphalie.',
    },
    {
      slug: 'avc-ischemique',
      protocoles: [
        'ESO — Guidelines on intravenous thrombolysis for acute ischaemic stroke (2021)',
        'AHA/ASA — Guidelines for the early management of acute ischemic stroke (2019)',
      ],
      verifie:
        'FAST, NIHSS, scanner sans injection ; thrombolyse avant 4 h 30, thrombectomie ; aspirine 160–300 mg hors thrombolyse ; PA respectée sauf > 220/120 (185/110 avant thrombolyse) ; glycémie, déglutition, HBPM après 24–48 h ; prévention secondaire et anticoagulation de la FA à J3–J14 selon la taille de l’infarctus.',
    },
    {
      slug: 'hemorragie-meningee',
      protocoles: [
        'AHA/ASA — Guideline for the management of patients with aneurysmal subarachnoid hemorrhage (2023)',
        'ESO — Guidelines for the management of intracranial aneurysms and subarachnoid haemorrhage (2013)',
      ],
      verifie:
        'Céphalée en coup de tonnerre, scanner puis ponction lombaire si scanner normal ; PAS < 160 jusqu’à sécurisation ; nimodipine 60 mg toutes les 4 h 21 jours ; normovolémie sans restriction hydrique ; sécurisation précoce de l’anévrisme ; hydrocéphalie.',
    },
    {
      slug: 'prevention-secondaire-des-avc',
      protocoles: [
        'AHA/ASA — Guideline for the prevention of stroke in patients with stroke and TIA (2021)',
        'ESO — Guidelines on management of transient ischaemic attack (2021)',
      ],
      verifie:
        'Antiagrégant selon le mécanisme, double antiagrégation 21 jours après AIT ou AVC mineur ; anticoagulation de la FA (AOD ou warfarine), warfarine obligatoire si valve mécanique ou sténose mitrale ; PA < 130/80, atorvastatine 40–80 mg, LDL < 0,7 g/L ; endartériectomie des sténoses symptomatiques.',
    },
    {
      slug: 'reeducation-apres-un-avc',
      protocoles: [
        'NICE/RCP — Stroke rehabilitation in adults (NG236, 2023)',
        'OMS — Rehabilitation 2030 / Package of interventions for rehabilitation (AVC)',
      ],
      verifie:
        'Positionnement, dépistage des troubles de la déglutition, prévention des thromboses et des escarres ; rééducation intensive (kinésithérapie, ergothérapie, orthophonie) ; spasticité (baclofène, toxine) ; dépression post-AVC ; formation des aidants.',
    },
    {
      slug: 'thrombose-veineuse-cerebrale',
      protocoles: [
        'ESO — Guideline for the diagnosis and treatment of cerebral venous thrombosis (2017)',
        'AHA — Scientific statement on cerebral venous thrombosis (2024)',
      ],
      verifie:
        'Clinique, angioscanner ou IRM veineuse ; anticoagulation par HBPM même en cas d’infarctus hémorragique, relais par warfarine ou anticoagulant oral direct 3 à 12 mois ; HBPM pendant la grossesse ; antiépileptiques si crises ; HTIC (acétazolamide, ponctions, craniectomie) ; cause infectieuse ; contraception non œstrogénique.',
    },
  ],
};
