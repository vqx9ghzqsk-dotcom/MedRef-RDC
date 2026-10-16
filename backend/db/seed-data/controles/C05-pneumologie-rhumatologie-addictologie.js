'use strict';

/**
 * Contrôle de conformité — lot C05 : pneumologie, rhumatologie et addictologie (34 fiches).
 */

module.exports = {
  lot: 'C05',
  date: '2026-10-16',
  titre: 'Pneumologie, rhumatologie et addictologie',
  fiches: [
    {
      slug: 'abces-pulmonaire',
      protocoles: [
        'MSF — Guide clinique et thérapeutique',
        'OMS — IMAI district clinician manual',
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
      ],
      verifie:
        'Clinique (expectoration fétide, vomique), niveau hydro-aérique ; recherche systématique de la tuberculose et d’un cancer ; amoxicilline-acide clavulanique ou ceftriaxone + métronidazole, clindamycine si allergie, 4 à 6 semaines ; drainage postural, drainage percutané ou chirurgie en cas d’échec ; soins dentaires.',
    },
    {
      slug: 'asthme',
      protocoles: [
        'GINA — Global strategy for asthma management and prevention (2024)',
        'OMS — PEN : interventions essentielles pour les maladies non transmissibles (2020)',
      ],
      verifie:
        'Définition GINA ; spirométrie (VEMS + 12 % et 200 mL) ou variabilité du DEP ; pas de bronchodilatateur de courte durée seul ; voie 1 budésonide-formotérol à la demande puis MART, voie 2 salbutamol + corticoïde inhalé ; enfant 6–11 ans ; plan d’action, technique d’inhalation ; paliers et réévaluation.',
    },
    {
      slug: 'asthme-aigu-grave',
      protocoles: [
        'GINA — Global strategy for asthma management and prevention (2024)',
        'BTS/SIGN — British guideline on the management of asthma (SIGN 158, 2019)',
      ],
      verifie:
        'Critères de gravité et de menace vitale (DEP < 50 % et < 33 %, SpO2 < 92 %, normocapnie) ; oxygène pour SpO2 93–95 % ; salbutamol 5 mg nébulisé toutes les 20 min + ipratropium 0,5 mg ; prednisolone 40–50 mg ; sulfate de magnésium 2 g IV en 20 min ; réanimation ; corticoïde inhalé à la sortie.',
    },
    {
      slug: 'bpco',
      protocoles: [
        'GOLD — Global strategy for the diagnosis, management and prevention of COPD (rapport 2025)',
        'OMS — PEN : interventions essentielles pour les maladies non transmissibles (2020)',
      ],
      verifie:
        'Expositions (tabac, biomasse) ; spirométrie VEMS/CVF < 0,70 après bronchodilatateur ; arrêt de l’exposition ; exacerbation : bronchodilatateurs nébulisés, prednisolone 40 mg 5 jours, antibiotique si expectoration purulente, oxygène pour SpO2 88–92 %, VNI si acidose hypercapnique ; réhabilitation, vaccinations, oxygénothérapie de longue durée.',
      corrige:
        'Traitement de fond aligné sur GOLD 2025 : association LAMA + LABA d’emblée si dyspnée importante (mMRC ≥ 2 ou CAT ≥ 10) ou exacerbations, un seul bronchodilatateur de longue durée sinon (la fiche imposait la monothérapie en première étape) ; corticoïde inhalé toujours associé au bronchodilatateur de longue durée, jamais seul.',
      corrections: [
        {
          principe: 'Bronchodilatateurs',
          champ: 'details',
          remplacer: [
            '- Traitement de fond : **tiotropium** (LAMA) ou bêta-2 de longue durée (**formotérol**, **salmétérol**), puis association LAMA + LABA\n- Corticoïde inhalé (**budésonide**, béclométasone) si exacerbations fréquentes et éosinophiles ≥ 300/mm³',
            '- Traitement de fond (GOLD 2025) : un bronchodilatateur de longue durée (**tiotropium**, ou **formotérol**, **salmétérol**) si la dyspnée est modérée sans exacerbation ; association LAMA + LABA d’emblée si dyspnée importante (mMRC ≥ 2 ou CAT ≥ 10) ou exacerbations\n- Corticoïde inhalé (**budésonide**, béclométasone), toujours associé au LABA (± LAMA), jamais seul : si exacerbations et éosinophiles ≥ 300/mm³, à discuter dès 100/mm³ si les exacerbations persistent sous LAMA + LABA',
          ],
        },
      ],
    },
    {
      slug: 'cancer-bronchopulmonaire',
      protocoles: [
        'ESMO — Clinical practice guidelines on non-oncogene-addicted / oncogene-addicted metastatic NSCLC (2023)',
        'NCCN — Non-small cell lung cancer / Small cell lung cancer',
      ],
      verifie:
        'Toute « tuberculose » à Xpert négatif qui ne guérit pas chez un fumeur ; scanner, histologie par fibroscopie ou ponction ; chirurgie des formes précoces, radiothérapie si inopérable ; chimiothérapie à base de platine, thérapie ciblée si mutation EGFR, immunothérapie selon accès ; petites cellules : platine-étoposide ; soins palliatifs (dexaméthasone, morphine).',
    },
    {
      slug: 'dilatation-des-bronches',
      protocoles: [
        'ERS — Guidelines for the management of adult bronchiectasis (2017)',
        'BTS — Guideline for bronchiectasis in adults (2019)',
      ],
      verifie:
        'Scanner de référence, élimination d’une tuberculose active ; kinésithérapie de drainage quotidienne ; exacerbations traitées 14 jours (amoxicilline, ciprofloxacine si Pseudomonas) ; macrolide au long cours si ≥ 3 exacerbations par an après élimination d’une mycobactérie ; vaccinations ; embolisation si hémoptysie grave.',
    },
    {
      slug: 'hemoptysie',
      protocoles: [
        'OMS — Consolidated guidelines on tuberculosis',
        'OMS — IMAI district clinician manual',
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
      ],
      verifie:
        'Distinction avec l’épistaxis et l’hématémèse ; gravité (volume, retentissement respiratoire) ; position latérale côté qui saigne, acide tranexamique, transfusion, intubation sélective, embolisation ; recherche systématique de la tuberculose ; isolement respiratoire.',
    },
    {
      slug: 'insuffisance-respiratoire-aigue',
      protocoles: [
        'BTS — Guideline for oxygen use in healthcare and emergency settings (2017)',
        'ERS/ATS — Clinical practice guidelines: noninvasive ventilation for acute respiratory failure (2017)',
      ],
      verifie:
        'Définition gazométrique ; signes de gravité ; oxygène pour SpO2 94–98 % (88–92 % si risque d’hypercapnie) ; VNI dans la BPCO hypercapnique acidotique et l’OAP ; critères d’intubation ; traitement de la cause.',
    },
    {
      slug: 'pleuresie',
      protocoles: [
        'BTS — Guideline for pleural disease (2023)',
        'OMS — Consolidated guidelines on tuberculosis, module 4 : treatment (2022)',
      ],
      verifie:
        'Ponction et critères de Light ; tuberculose première cause d’exsudat lymphocytaire, Xpert peu sensible dans le liquide, biopsie pleurale ; 2RHZE/4RH et ARV dans les 2 semaines ; pleurésie purulente : drainage et antibiotiques prolongés ; transsudats.',
    },
    {
      slug: 'pneumonie-communautaire-adulte',
      protocoles: [
        'ATS/IDSA — Diagnosis and treatment of adults with community-acquired pneumonia (2019)',
        'NICE — Pneumonia (community-acquired): antimicrobial prescribing (NG138, 2019)',
      ],
      verifie:
        'Score CURB-65 et oxymétrie ; amoxicilline 1 g 3 fois par jour 5 à 7 jours en ambulatoire, doxycycline ou macrolide si allergie ; ceftriaxone + macrolide à l’hôpital ; situations particulières (post-grippal, inhalation, VIH : pneumocystose et tuberculose) ; vaccinations.',
    },
    {
      slug: 'pneumothorax-spontane',
      protocoles: ['BTS — Guideline for pleural disease (2023)'],
      verifie:
        'Diagnostic clinique du pneumothorax compressif (exsufflation sans attendre la radiographie, sites d’exsufflation) ; primaire peu symptomatique : surveillance ; grand ou symptomatique : exsufflation ou drain de petit calibre ; secondaire : drainage ; arrêt du tabac, pleurodèse après récidive.',
    },
    {
      slug: 'silicose-pneumoconioses',
      protocoles: [
        'OMS/OIT — Programme mondial d’élimination de la silicose',
        'OMS — Consolidated guidelines on tuberculosis, module 1 : prevention (traitement préventif dans la silicose)',
      ],
      verifie:
        'Exposition, micronodules et fibrose massive ; dépistage actif de la tuberculose, traitement préventif après exclusion d’une tuberculose active ; arrêt de l’exposition et déclaration ; traitement symptomatique ; prévention collective des poussières.',
    },
    {
      slug: 'tuberculose-pulmonaire',
      protocoles: [
        'OMS — Consolidated guidelines on tuberculosis, modules 3 (diagnostic) et 4 (traitement)',
        'PNLT RDC — Guide de prise en charge de la tuberculose',
      ],
      verifie:
        'Xpert MTB/RIF Ultra en 1re intention, TB-LAM chez le PVVIH avancé ; 2RHZE/4RH, schéma de 4 mois chez l’enfant à forme non sévère ; TARV dans les 2 semaines ; bacilloscopies de contrôle ; seuils d’arrêt pour hépatotoxicité ; schéma oral court des formes RR/MR ; traitement préventif des contacts.',
    },
    {
      slug: 'arthrose',
      protocoles: [
        'ACR/Arthritis Foundation — Guideline for the management of osteoarthritis of the hand, hip and knee (2019)',
        'NICE — Osteoarthritis in over 16s: diagnosis and management (NG226, 2022)',
      ],
      verifie:
        'Diagnostic clinique et radiologique, biologie normale ; perte de poids et exercice en base ; AINS topiques puis oraux en cures courtes avec IPP si risque ; infiltration de corticoïde lors des poussées ; prothèse si handicap.',
      corrige:
        'Glucosamine et chondroïtine présentées avec un « bénéfice faible » : l’ACR 2019 et le NICE 2022 les déconseillent (bénéfice non démontré) ; seule la chondroïtine reste discutée dans l’arthrose digitale. Contexte des deux molécules mis à jour.',
      corrections: [
        {
          principe: 'Antalgiques',
          champ: 'details',
          remplacer: [
            '- Chondroïtine et glucosamine : bénéfice faible',
            '- Chondroïtine et glucosamine : non recommandées, bénéfice non démontré (ACR 2019, NICE 2022) ; la chondroïtine reste discutée dans l’arthrose digitale',
          ],
        },
        {
          molecule: 'glucosamine',
          champ: 'contexte',
          remplacer: ['Effet symptomatique modeste', 'Non recommandée (bénéfice non démontré)'],
        },
        {
          molecule: 'chondroitine-sulfate',
          champ: 'contexte',
          remplacer: ['Effet symptomatique modeste', 'Non recommandée, sauf discussion dans l’arthrose digitale'],
        },
      ],
    },
    {
      slug: 'goutte',
      protocoles: [
        'ACR — Guideline for the management of gout (2020)',
        'EULAR — Updated evidence-based recommendations for the management of gout (2016)',
      ],
      verifie:
        'Diagnostic par les cristaux, uricémie à distance de la crise ; colchicine 1 mg puis 0,5 mg 1 h après, AINS ou prednisolone 30–35 mg 5 jours ; indications du traitement hypo-uricémiant, allopurinol débuté à 100 mg/j et titré vers < 60 mg/L (< 50 si tophus), prophylaxie par colchicine ; ne pas arrêter pendant une crise ; diurétiques et risque cardiovasculaire.',
      a_arbitrer:
        'L’ACR 2020 conseille de rechercher HLA-B*58:01 avant l’allopurinol chez les patients d’ascendance africaine (risque de toxidermie grave). Le test étant rarement disponible en RDC, la fiche s’en tient au démarrage à 100 mg/j : ajouter une consigne d’information sur les signes cutanés et un démarrage à 50 mg/j en cas d’insuffisance rénale ?',
    },
    {
      slug: 'lombalgie-et-sciatique',
      protocoles: [
        'NICE — Low back pain and sciatica in over 16s: assessment and management (NG59, mise à jour 2020)',
        'OMS — Guideline for non-surgical management of chronic primary low back pain in adults (2023)',
      ],
      verifie:
        'Drapeaux rouges et syndrome de la queue de cheval ; aucun examen pour une lombalgie commune de moins de 6 semaines ; rester actif, AINS courts, kinésithérapie ; infiltration épidurale ; chirurgie si déficit, douleur rebelle ou échec après 6 à 12 semaines.',
      corrige:
        'La gabapentine était proposée pour la douleur de la sciatique : le NICE déconseille les gabapentinoïdes et les corticoïdes oraux dans la sciatique (absence de bénéfice, effets indésirables) ; l’amitriptyline à faible dose reste possible.',
      corrections: [
        {
          principe: 'Sciatique',
          champ: 'details',
          remplacer: [
            'douleur neuropathique : **amitriptyline** ou gabapentine',
            'douleur neuropathique : **amitriptyline** à faible dose si besoin ; pas de gabapentinoïdes (gabapentine, prégabaline) ni de corticoïdes oraux, sans bénéfice démontré dans la sciatique (NICE)',
          ],
        },
      ],
    },
    {
      slug: 'lupus-erythemateux-systemique',
      protocoles: [
        'EULAR — Recommendations for the management of systemic lupus erythematosus (mise à jour 2023)',
        'KDIGO — Clinical practice guideline for the management of lupus nephritis (2024)',
      ],
      verifie:
        'Anticorps antinucléaires, anti-ADN natif, complément ; biopsie rénale si protéinurie > 0,5 g/24 h ; hydroxychloroquine ≤ 5 mg/kg/j pour tous, y compris pendant la grossesse ; corticoïdes ramenés à ≤ 5 mg/j ; formes graves : méthylprednisolone puis cyclophosphamide ou mycophénolate, azathioprine en entretien ; dépistage de la tuberculose ; contraception sans œstrogènes si antiphospholipides.',
    },
    {
      slug: 'osteoporose',
      protocoles: [
        'IOF/ESCEO — European guidance for the diagnosis and management of osteoporosis in postmenopausal women (2019)',
        'NOGG — UK clinical guideline for the prevention and treatment of osteoporosis (2022)',
      ],
      verifie:
        'T-score ≤ −2,5 ou fracture de fragilité ; bilan d’ostéoporose secondaire et élimination d’une métastase ou d’un myélome ; calcium et vitamine D, prévention des chutes ; alendronate 70 mg/semaine ou acide zolédronique 5 mg/an (DFG ≥ 35) ; durée 3 à 5 ans puis réévaluation.',
    },
    {
      slug: 'polyarthrite-rhumatoide',
      protocoles: [
        'EULAR — Recommendations for the management of rheumatoid arthritis (mise à jour 2022)',
        'ACR — Guideline for the treatment of rheumatoid arthritis (2021)',
      ],
      verifie:
        'Critères ACR/EULAR 2010, anti-CCP ; méthotrexate dès le diagnostic (10–15 mg/semaine titré à 20–25 mg) avec acide folique ; alternatives et associations ; corticoïdes à faible dose et courte durée ; surveillance du méthotrexate et contraception ; dépistages avant traitement de fond.',
    },
    {
      slug: 'polymyosite-et-dermatomyosite',
      protocoles: [
        'EULAR/ACR — Classification criteria for adult and juvenile idiopathic inflammatory myopathies (2017)',
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
      ],
      verifie:
        'Faiblesse proximale, signes cutanés, CPK, EMG, biopsie, anticorps des myosites ; dépistage du cancer chez l’adulte et de la pneumopathie interstitielle ; prednisolone 1 mg/kg/j puis décroissance lente ; épargne cortisonique (méthotrexate, azathioprine), IgIV des formes sévères ; prévention de l’anguillulose et de la pneumocystose.',
    },
    {
      slug: 'spondyloarthrites',
      protocoles: [
        'ASAS-EULAR — Recommendations for the management of axial spondyloarthritis (mise à jour 2022)',
        'EULAR — Recommendations for the management of psoriatic arthritis (mise à jour 2023)',
      ],
      verifie:
        'Lombalgie inflammatoire, enthésites, arthrites asymétriques, élimination d’un mal de Pott ; AINS en première ligne et kinésithérapie ; sulfasalazine ou méthotrexate pour les atteintes périphériques seulement ; anti-TNF dans les formes axiales sévères après dépistage de la tuberculose ; terrain VIH.',
    },
    {
      slug: 'mal-de-pott',
      protocoles: [
        'OMS — Consolidated guidelines on tuberculosis, module 4 : treatment (2022)',
        'PNLT RDC — Guide de prise en charge de la tuberculose',
      ],
      verifie:
        'Clinique, IRM de référence, biopsie avec Xpert ; 2RHZE/10RH (12 mois) avec pyridoxine ; immobilisation, rééducation ; chirurgie de décompression en cas de déficit neurologique, instabilité ou abcès volumineux.',
      corrige:
        'Délai des ARV chez le PVVIH aligné sur l’OMS (2021) : dans les 2 semaines suivant le début des antituberculeux (la fiche indiquait 2 à 8 semaines) ; seule la méningite tuberculeuse impose un délai.',
      corrections: [
        {
          principe: 'Traitement antituberculeux prolongé',
          champ: 'details',
          remplacer: [
            '- PVVIH : ARV dans les 2 à 8 semaines',
            '- PVVIH : ARV dans les 2 semaines suivant le début des antituberculeux (OMS)',
          ],
        },
      ],
    },
    {
      slug: 'tendinopathies-epaule-douloureuse',
      protocoles: [
        'NICE CKS — Shoulder pain',
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
      ],
      verifie:
        'Diagnostic clinique, échographie si rupture ; élimination d’une arthrite septique et d’une douleur projetée (cardiaque) ; repos relatif, AINS courts, kinésithérapie ; infiltration de triamcinolone 40 mg, 3 au plus par an, jamais dans le tendon d’Achille ; capsulite du diabétique ; chirurgie des ruptures.',
    },
    {
      slug: 'dependance-aux-benzodiazepines',
      protocoles: [
        'ASAM et sociétés associées — Joint clinical practice guideline on benzodiazepine tapering (2025)',
        'OMS — mhGAP Intervention Guide 2.0 (2016)',
      ],
      verifie:
        'Repérage, sevrage (convulsions et confusion à l’arrêt brutal) ; relais par le diazépam ; hospitalisation si doses élevées, convulsions ou alcool ; TCC de l’insomnie et de l’anxiété, ISRS si besoin ; prescriptions courtes.',
      corrige:
        'Rythme de décroissance trop rapide : la recommandation conjointe de 2025 conseille de commencer par 5 à 10 % de la dose toutes les 2 à 4 semaines, sans dépasser 25 % en 2 semaines (la fiche indiquait 10 à 25 % toutes les 2 semaines).',
      corrections: [
        {
          principe: 'Sevrage progressif',
          champ: 'details',
          remplacer: [
            '- **Réduction de 10–25 % de la dose toutes les 2 semaines**, plus lentement en fin de sevrage (semaines à mois)',
            '- **Réduction de 5 à 10 % de la dose toutes les 2 à 4 semaines**, sans dépasser 25 % en 2 semaines, plus lentement en fin de sevrage (souvent plusieurs mois)',
          ],
        },
      ],
    },
    {
      slug: 'encephalopathie-de-gayet-wernicke',
      protocoles: [
        'EFNS — Guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy (2010)',
        'Royal College of Physicians — The management of Wernicke’s encephalopathy (thiamine IV)',
      ],
      verifie:
        'Triade souvent incomplète : y penser devant toute confusion chez un sujet à risque ; thiamine 500 mg IV 3 fois par jour 2 à 3 jours, puis 250 mg/j 3 à 5 jours, puis per os ; toujours avant ou avec le glucose ; magnésium ; syndrome de renutrition.',
    },
    {
      slug: 'intoxication-au-methanol',
      protocoles: [
        'AACT — Practice guidelines on the treatment of methanol poisoning (2002)',
        'EXTRIP — Extracorporeal treatment for methanol poisoning: recommendations (2015)',
      ],
      verifie:
        'Intervalle libre, troubles visuels, acidose à trou anionique élevé, cas groupés ; fomépizole 15 mg/kg puis 10 mg/kg toutes les 12 h, ou éthanol (charge ≈ 0,8 g/kg, éthanolémie 1 à 1,5 g/L) ; bicarbonate si pH < 7,3 ; hémodialyse (acidose sévère, troubles visuels, coma, convulsions, insuffisance rénale) ; acide folinique ; alerte sanitaire.',
    },
    {
      slug: 'jeu-pathologique',
      protocoles: [
        'OMS — CIM-11 : trouble du jeu d’argent (6C50)',
        'Cochrane — Psychological therapies for pathological and problem gambling (2012)',
      ],
      verifie:
        'Critères, dettes et risque suicidaire ; entretien motivationnel et TCC ; gestion de l’argent par un tiers, auto-exclusion ; comorbidités (dépression, alcool, TDAH) ; jeu induit par les agonistes dopaminergiques ; naltrexone en centre spécialisé.',
    },
    {
      slug: 'sevrage-alcoolique-delirium-tremens',
      protocoles: [
        'ASAM — Clinical practice guideline on alcohol withdrawal management (2020)',
        'NICE — Alcohol-use disorders: diagnosis and management of physical complications (CG100)',
        'OMS — mhGAP Intervention Guide 2.0 (2016)',
      ],
      verifie:
        'Délais (6–48 h, delirium tremens J2–J4), CIWA-Ar ; diazépam 10–20 mg toutes les 1 à 2 h selon les symptômes puis diminution ; halopéridol seulement en complément ; thiamine avant tout glucose (fortes doses si Gayet-Wernicke) ; potassium, magnésium ; recherche d’infection, de traumatisme crânien, d’hypoglycémie.',
    },
    {
      slug: 'tabagisme',
      protocoles: [
        'OMS — Guideline for clinical interventions for tobacco cessation in adults (2024)',
        'OMS — mhGAP / conseil bref (méthode des 5A)',
      ],
      verifie:
        'Repérage systématique et évaluation de la dépendance ; conseil bref (5A) ; substituts nicotiniques combinés, varénicline 12 semaines (la plus efficace) ou bupropion ; soutien comportemental ; grossesse, tuberculose, VIH.',
    },
    {
      slug: 'trouble-de-l-usage-de-l-alcool',
      protocoles: [
        'OMS — mhGAP Intervention Guide 2.0 (2016)',
        'NICE — Alcohol-use disorders: diagnosis, assessment and management of harmful drinking and alcohol dependence (CG115)',
      ],
      verifie:
        'Repérage par l’AUDIT, intervention brève ; complications ; sevrage encadré par diazépam et thiamine ; naltrexone 50 mg/j (hors opioïdes et hépatopathie sévère) ; soutien psychosocial et familial ; dépression associée.',
    },
    {
      slug: 'usage-d-opioides',
      protocoles: [
        'OMS — Guidelines for the psychosocially assisted pharmacological treatment of opioid dependence (2009)',
        'OMS — Community management of opioid overdose (2014)',
      ],
      verifie:
        'Triade de la surdose ; ventilation et naloxone titrée renouvelable, surveillance prolongée ; convulsions au tramadol ; traitement de substitution (méthadone, buprénorphine) ; réduction des risques, dépistages et vaccination ; grossesse (pas de sevrage brutal).',
    },
    {
      slug: 'usage-de-cannabis',
      protocoles: ['OMS — mhGAP Intervention Guide 2.0 (2016)'],
      verifie:
        'Repérage, intoxication, psychose induite, dépendance et sevrage, hyperémèse cannabinoïde ; intervention brève et TCC ; pas de substitution ; psychose : arrêt et antipsychotique ; hyperémèse : réhydratation, douches chaudes, arrêt.',
    },
    {
      slug: 'usage-de-cocaine-et-d-amphetamines',
      protocoles: [
        'AHA — Management of cocaine-associated chest pain and myocardial infarction (2008)',
        'OMS — mhGAP Intervention Guide 2.0 (2016)',
      ],
      verifie:
        'Syndrome sympathomimétique, complications cardiovasculaires et rhabdomyolyse ; benzodiazépines en première intention ; refroidissement ; éviter les bêtabloquants seuls ; douleur thoracique : aspirine, trinitrine, filière coronarienne ; dépendance : approche psychosociale, risque suicidaire au sevrage.',
    },
    {
      slug: 'usage-de-solvants',
      protocoles: [
        'OMS — mhGAP Intervention Guide 2.0 (2016)',
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
      ],
      verifie:
        'Risque de mort subite par arythmie : environnement calme, monitorage, correction de l’hypokaliémie, éviter l’adrénaline et les bêta-agonistes sauf arrêt cardiaque ; convulsions : benzodiazépine ; prise en charge psychosociale et protection de l’enfance ; complications chroniques.',
    },
  ],
};
