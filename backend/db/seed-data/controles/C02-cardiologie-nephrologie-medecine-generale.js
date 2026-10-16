'use strict';

/**
 * Contrôle de conformité — lot C02 : cardiologie, néphrologie et médecine interne générale
 * (33 fiches). Doses de l'hyperkaliémie vérifiées dans la recommandation de l'UK Kidney
 * Association (2022).
 */

module.exports = {
  lot: 'C02',
  date: '2026-10-16',
  titre: 'Cardiologie, néphrologie et médecine interne générale',
  fiches: [
    {
      slug: 'angor-stable',
      protocoles: [
        'ESC — Guidelines for the management of chronic coronary syndromes (2024)',
        'NICE — Stable angina: management (CG126)',
        'OMS — HEARTS / PEN : interventions essentielles pour les maladies non transmissibles',
      ],
      verifie:
        'Clinique et facteurs déclenchants ; ECG, ECG d’effort, échocardiographie, bilan des facteurs de risque ; trinitrine sublinguale en crise, douleur prolongée = SCA ; bêtabloquant ou inhibiteur calcique en 1re intention ; aspirine 75–100 mg/j (clopidogrel si intolérance) et statine ; IEC selon les comorbidités ; revascularisation des formes sévères.',
    },
    {
      slug: 'cardiomyopathie-dilatee',
      protocoles: [
        'ESC — Guidelines for the management of cardiomyopathies (2023)',
        'ESC — Guidelines for acute and chronic heart failure (2021, mise à jour 2023)',
        'AHA/ACC/HFSA — Guideline for the management of heart failure (2022)',
      ],
      verifie:
        'Définition (dilatation et FEVG < 40 % sans cause coronaire, valvulaire ou hypertensive suffisante) ; causes (alcool, VIH, péripartum, myocardite, thiamine) ; traitement de l’IC à FE réduite (IEC ou sacubitril-valsartan, bêtabloquant titré, antagoniste de l’aldostérone, inhibiteur de SGLT2) avec doses ; thiamine ; anticoagulation si FA ou thrombus.',
    },
    {
      slug: 'cardiomyopathie-du-peripartum',
      protocoles: [
        'ESC-HFA — Pathophysiology, diagnosis and management of peripartum cardiomyopathy: position statement (2019)',
        'ESC — Guidelines for the management of cardiovascular disease and pregnancy (2025)',
        'ESC — Guidelines for the management of cardiomyopathies (2023)',
      ],
      verifie:
        'Définition (FEVG < 45 % en fin de grossesse ou dans les mois suivant l’accouchement) ; pendant la grossesse : pas d’IEC ni d’antagoniste de l’aldostérone, hydralazine + dérivé nitré, bêtabloquant ; après l’accouchement : IEC compatible avec l’allaitement ; bromocriptine 2,5 mg/j 1 semaine (forme non compliquée) ou 2,5 mg 2 fois par jour 2 semaines puis 2,5 mg/j 6 semaines (forme sévère), toujours avec une anticoagulation ; contraception et conseil pour une nouvelle grossesse.',
    },
    {
      slug: 'embolie-pulmonaire',
      protocoles: [
        'ESC — Guidelines for the diagnosis and management of acute pulmonary embolism (2019)',
        'NICE — Venous thromboembolic diseases: diagnosis, management and thrombophilia testing (NG158)',
        'CHEST — Antithrombotic therapy for VTE disease',
      ],
      verifie:
        'Probabilité clinique, D-dimères, angioscanner, échocardiographie au lit en cas de choc ; énoxaparine 1 mg/kg toutes les 12 h ; rivaroxaban 15 mg 2 fois par jour 21 jours puis 20 mg/j ; apixaban 10 mg 2 fois par jour 7 jours puis 5 mg 2 fois par jour ; warfarine INR 2–3 ; thrombolyse par altéplase 100 mg en 2 h en cas de choc ; durée de 3 mois ou prolongée ; HBPM seule pendant la grossesse.',
    },
    {
      slug: 'endocardite-infectieuse',
      protocoles: [
        'ESC — Guidelines for the management of endocarditis (2023)',
        'AHA — Infective endocarditis in adults (2015)',
      ],
      verifie:
        'Critères de Duke ; 3 paires d’hémocultures avant antibiotique ; probabiliste sur valve native : ampicilline 12 g/j + cloxacilline 12 g/j + gentamicine 3 mg/kg/j ; streptocoque sensible : pénicilline G 12–18 MUI/j ou ceftriaxone 2 g/j 4 semaines ; S. aureus sensible : cloxacilline 12 g/j 4 à 6 semaines, vancomycine si SARM ; indications chirurgicales ; prophylaxie par amoxicilline 2 g chez les patients à haut risque.',
    },
    {
      slug: 'fibrillation-atriale',
      protocoles: [
        'ESC — Guidelines for the management of atrial fibrillation (2024)',
        'AHA/ACC/HRS — Guideline for the diagnosis and management of atrial fibrillation (2023)',
        'NICE — Atrial fibrillation: diagnosis and management (NG196)',
      ],
      verifie:
        'ECG ; cardioversion électrique si instabilité ; contrôle de la fréquence (< 110/min) par bêtabloquant, digoxine, amiodarone ; anticoagulation selon le score CHA2DS2-VASc (AHA/ACC, NICE) ; antivitamine K (INR 2–3 ; 2,5–3,5 pour une prothèse mitrale) en cas de rétrécissement mitral rhumatismal ou de prothèse mécanique, les anticoagulants oraux directs n’y étant pas indiqués ; l’aspirine n’est pas une alternative ; cardioversion programmée après 3 semaines d’anticoagulation.',
      a_arbitrer:
        'L’ESC 2024 remplace le score CHA2DS2-VASc par le CHA2DS2-VA (sans le sexe : anticoagulation recommandée à partir de 2, à discuter à 1) ; la fiche suit le CHA2DS2-VASc des recommandations américaines et du NICE (seuils 2 chez l’homme, 3 chez la femme). Choisir le score à retenir.',
    },
    {
      slug: 'hypertension-arterielle',
      protocoles: [
        'ESC — Guidelines for the management of elevated blood pressure and hypertension (2024)',
        'OMS — Guideline for the pharmacological treatment of hypertension in adults (2021)',
        'ISH — Global hypertension practice guidelines (2020)',
        'NICE — Hypertension in adults (NG136)',
      ],
      verifie:
        'Mesure standardisée et confirmation (automesure ≥ 135/85, MAPA) ; catégories ESC 2024 ; bilan initial et atteinte d’organe ; seuil de traitement 140/90 (130–139/80–89 si risque élevé après 3 mois) ; bithérapie d’emblée, inhibiteur calcique + thiazidique ou + IEC/ARA2 chez le patient d’ascendance africaine, association fixe ; cible PAS 120–129 si tolérée ; urgence hypertensive : baisse de la PAM ≤ 25 % la 1re heure ; doses de l’amlodipine, de l’hydrochlorothiazide, de l’énalapril, du losartan.',
    },
    {
      slug: 'insuffisance-cardiaque',
      protocoles: [
        'ESC — Guidelines for acute and chronic heart failure (2021, mise à jour 2023)',
        'AHA/ACC/HFSA — Guideline for the management of heart failure (2022)',
        'NICE — Chronic heart failure in adults (NG106)',
      ],
      verifie:
        'Définition ESC 2021 et classes de FEVG ; seuils des peptides natriurétiques (chronique BNP ≥ 35, NT-proBNP ≥ 125 ; aigu BNP ≥ 100, NT-proBNP ≥ 300 pg/mL) ; diurétique de l’anse ; 4 piliers de l’IC à FE réduite ; inhibiteur de SGLT2 dans les FE modérément réduite et préservée ; OAP (dérivés nitrés si PAS > 110 mmHg, VNI) ; choc cardiogénique ; éducation.',
    },
    {
      slug: 'pericardite-aigue-et-tamponnade',
      protocoles: [
        'ESC — Guidelines for the management of myocarditis and pericarditis (2025)',
        'ESC — Guidelines for the diagnosis and management of pericardial diseases (2015)',
        'PNLT — Guide de prise en charge de la tuberculose',
      ],
      verifie:
        'Diagnostic sur 2 critères sur 4 ; tamponnade (triade de Beck, pouls paradoxal) et péricardiocentèse urgente ; aspirine 750–1 000 mg 3 fois par jour ou ibuprofène 600 mg 3 fois par jour 1 à 2 semaines puis décroissance + colchicine 3 mois, pas de corticoïdes en 1re intention ; péricardite tuberculeuse (antituberculeux, corticoïdes discutés surtout hors VIH) ; drainage de la péricardite purulente.',
    },
    {
      slug: 'rhumatisme-articulaire-aigu-adulte',
      protocoles: [
        'OMS — Guideline on the prevention and diagnosis of rheumatic fever and rheumatic heart disease (2024)',
        'AHA — Revision of the Jones criteria (2015) ; prevention of rheumatic fever (2009)',
      ],
      verifie:
        'Critères de Jones révisés en 2015 avec preuve d’infection streptococcique ; éradication par benzathine benzylpénicilline 1,2 MUI ; aspirine anti-inflammatoire ; cardite et chorée ; prophylaxie secondaire par benzathine benzylpénicilline 1,2 MUI toutes les 3 à 4 semaines.',
      corrige:
        'Durée de la prophylaxie secondaire précisée selon l’atteinte cardiaque (AHA) : sans cardite 5 ans ou jusqu’à 21 ans ; cardite sans séquelle valvulaire 10 ans ou jusqu’à 21 ans ; séquelles valvulaires 10 ans ou jusqu’à 40 ans, parfois à vie.',
      corrections: [
        {
          principe: 'Prophylaxie secondaire',
          champ: 'details',
          remplacer: [
            '- Durée selon l’atteinte cardiaque (au moins 10 ans ou jusqu’à 40 ans)',
            '- Durée selon l’atteinte cardiaque (AHA ; la durée la plus longue s’applique) : sans cardite, 5 ans après le dernier épisode ou jusqu’à 21 ans ; cardite sans séquelle valvulaire, 10 ans ou jusqu’à 21 ans ; séquelles valvulaires, 10 ans ou jusqu’à 40 ans, parfois à vie',
          ],
        },
      ],
    },
    {
      slug: 'syndrome-coronarien-aigu-st-plus',
      protocoles: [
        'ESC — Guidelines for the management of acute coronary syndromes (2023)',
        'AHA/ACC — Guideline for the management of ST-elevation myocardial infarction',
        'NICE — Acute coronary syndromes (NG185)',
      ],
      verifie:
        'ECG dans les 10 minutes et critères du sus-décalage ; troponine sans retarder la reperfusion ; aspirine 150–300 mg ; oxygène si SpO2 < 90 % ; angioplastie primaire si réalisable dans les 120 minutes ; streptokinase 1,5 MUI en 30–60 min ; clopidogrel 300 mg (75 mg après 75 ans) avec la thrombolyse, 600 mg avant angioplastie, double antiagrégation 12 mois ; énoxaparine ; prévention secondaire (bêtabloquant, IEC, statine à forte dose).',
      corrige:
        'Délai de la thrombolyse ramené à celui de l’ESC 2023 : dans les 10 minutes suivant le diagnostic (la fiche indiquait 30 minutes).',
      corrections: [
        {
          principe: 'Reperfusion dans les 12 heures',
          champ: 'details',
          remplacer: [
            '- Sinon **thrombolyse** dans les 30 minutes :',
            '- Sinon **thrombolyse** dans les 10 minutes suivant le diagnostic (ESC 2023) :',
          ],
        },
      ],
    },
    {
      slug: 'syndrome-coronarien-aigu-sans-st',
      protocoles: [
        'ESC — Guidelines for the management of acute coronary syndromes (2023)',
        'NICE — Acute coronary syndromes (NG185)',
      ],
      verifie:
        'Angor instable et infarctus sans sus-décalage ; troponine H0 et H1–H3 ; aspirine, inhibiteur P2Y12 12 mois, énoxaparine 1 mg/kg toutes les 12 h jusqu’à la coronarographie ou 8 jours ; bêtabloquant ; coronarographie < 2 h (très haut risque) ou < 24 h (haut risque) ; prévention secondaire.',
    },
    {
      slug: 'thrombose-veineuse-profonde',
      protocoles: [
        'ESC — Guidelines for acute pulmonary embolism (2019) et recommandations sur la maladie veineuse',
        'NICE — Venous thromboembolic diseases (NG158)',
        'CHEST — Antithrombotic therapy for VTE disease',
      ],
      verifie:
        'Probabilité clinique, D-dimères, écho-Doppler ; énoxaparine puis relais ou anticoagulant oral direct d’emblée ; warfarine INR 2–3 ; HBPM pendant la grossesse et en cas de cancer ; durée de 3 mois ou prolongée ; lever précoce ; prévention.',
    },
    {
      slug: 'urgences-hypertensives',
      protocoles: [
        'ESC — Guidelines for elevated blood pressure and hypertension (2024)',
        'OMS — Drug treatment for severe hypertension in pregnancy (2018)',
        'ISH — Global hypertension practice guidelines (2020)',
      ],
      verifie:
        'Distinction entre urgence vraie et HTA sévère sans atteinte d’organe ; baisse de la PAM de 20 à 25 % la 1re heure puis 160/100 mmHg en 2 à 6 h ; nicardipine ou labétalol IV ; OAP, dissection (PAS < 120 mmHg), AVC, éclampsie ; pas de nifédipine sublinguale ; traitement oral progressif sans atteinte d’organe.',
    },
    {
      slug: 'valvulopathies-rhumatismales',
      protocoles: [
        'OMS — Guideline on the prevention and diagnosis of rheumatic fever and rheumatic heart disease (2024)',
        'ESC/EACTS — Guidelines for the management of valvular heart disease',
        'AHA — Prevention of rheumatic fever (2009)',
      ],
      verifie:
        'Critères échocardiographiques de la World Heart Federation ; prophylaxie secondaire par benzathine benzylpénicilline et durée (jusqu’à 40 ans ou à vie si atteinte modérée ou sévère) ; warfarine dans la FA avec rétrécissement mitral ou prothèse mécanique, anticoagulants oraux directs non indiqués ; dilatation mitrale percutanée ; grossesse.',
    },
    {
      slug: 'glomerulonephrites-aigues-adulte',
      protocoles: [
        'KDIGO — Clinical practice guideline for the management of glomerular diseases (2021)',
        'OMS — IMAI district clinician manual',
      ],
      verifie:
        'Syndrome néphritique et bilan (complément, ASLO, VIH, hépatites, ANCA, biopsie) ; restriction sodée, furosémide, antihypertenseurs, IEC si protéinurie ; forme rapidement progressive : méthylprednisolone 500 mg à 1 g/j 3 jours puis prednisolone 1 mg/kg/j ± cyclophosphamide ou rituximab, échanges plasmatiques selon la cause.',
    },
    {
      slug: 'infections-urinaires-adulte',
      protocoles: [
        'NICE — Pyelonephritis (acute): antimicrobial prescribing (NG111)',
        'IDSA — Uncomplicated cystitis and pyelonephritis in women',
        'RDC — Guide de prescription et ordinogrammes',
      ],
      verifie:
        'Bandelette, ECBU et seuils ; cystite simple : fosfomycine 3 g ou nitrofurantoïne 100 mg 2 fois par jour 5 jours ; grossesse et bactériurie asymptomatique ; pyélonéphrite : ciprofloxacine 7 jours si résistance < 10 % ou ceftriaxone puis relais, 10 à 14 jours ; forme grave : ceftriaxone + gentamicine ; drainage d’un obstacle ; prostatite 14 à 21 jours.',
    },
    {
      slug: 'insuffisance-renale-aigue',
      protocoles: [
        'KDIGO — Clinical practice guideline for acute kidney injury (2012)',
        'NICE — Acute kidney injury (NG148)',
        'UK Kidney Association — Treatment of acute hyperkalaemia in adults (2022)',
      ],
      verifie:
        'Définition et stades KDIGO ; prérénale, rénale, obstructive ; urgences vitales (hyperkaliémie, OAP, acidose) ; remplissage si hypovolémie, diurétiques seulement en cas de surcharge ; arrêt des néphrotoxiques ; indications d’épuration extrarénale, dialyse péritonéale ; insuline 10 UI + glucose 25 g, salbutamol nébulisé ; bicarbonate si pH < 7,2 ; contrôle à 3 mois.',
    },
    {
      slug: 'maladie-renale-chronique',
      protocoles: [
        'KDIGO — Clinical practice guideline for the evaluation and management of CKD (2024)',
        'KDIGO — Blood pressure in CKD (2021)',
        'NICE — Chronic kidney disease (NG203)',
      ],
      verifie:
        'Définition et stades (DFG, albuminurie) ; néphroprotection (IEC ou ARA2 si albuminurie, inhibiteur de SGLT2, éviction des néphrotoxiques, adaptation des doses) ; anémie (fer puis époétine si Hb < 10 g/dL) ; bicarbonate si < 22 mmol/L ; phosphore et calcium ; statine après 50 ans ; préparation à la suppléance et indications de dialyse.',
      a_arbitrer:
        'Cible tensionnelle : la fiche retient < 130/80 mmHg (ESC, NICE) ; KDIGO 2021 propose une PAS < 120 mmHg (mesure standardisée) si elle est tolérée. Choisir la cible à afficher.',
    },
    {
      slug: 'nephropathie-associee-au-vih',
      protocoles: [
        'OMS — Consolidated HIV guidelines (2021)',
        'PNLS — Guide VIH (2019)',
        'KDIGO — Recommandations sur les atteintes rénales',
      ],
      verifie:
        'Présentation (protéinurie massive, peu d’œdèmes, gros reins hyperéchogènes) ; ARV sans délai ; ténofovir disoproxil déconseillé si DFG < 50 mL/min ; adaptation de la lamivudine ; hausse de la créatinine sous dolutégravir sans atteinte réelle ; IEC ou ARA2 ; dépistage annuel (bandelette, créatinine).',
    },
    {
      slug: 'nephropathie-drepanocytaire',
      protocoles: [
        'ASH — Guidelines for sickle cell disease: management of cardiopulmonary and kidney disease (2019)',
        'NHLBI — Evidence-based management of sickle cell disease (2014)',
      ],
      verifie:
        'Atteintes tubulaires, nécrose papillaire, albuminurie ; dépistage annuel dès l’enfance ; IEC ou ARA2 si albuminurie persistante ; hydroxyurée ; éviction des AINS, hydratation ; hématurie ; stade avancé.',
    },
    {
      slug: 'nephropathie-hypertensive',
      protocoles: [
        'ESC — Guidelines for elevated blood pressure and hypertension (2024)',
        'KDIGO — Blood pressure in CKD (2021)',
        'OMS — Guideline for the pharmacological treatment of hypertension in adults (2021)',
      ],
      verifie:
        'Diagnostic d’élimination (protéinurie modérée, sédiment peu actif) ; cible < 130/80 mmHg ; IEC ou ARA2 si albuminurie avec contrôle de la kaliémie et de la créatinine ; amlodipine ; thiazidique si DFG > 30, furosémide au-dessous ; inhibiteur de SGLT2 ; néphroangiosclérose maligne.',
    },
    {
      slug: 'syndrome-nephrotique-adulte',
      protocoles: [
        'KDIGO — Clinical practice guideline for the management of glomerular diseases (2021)',
        'OMS — IMAI district clinician manual',
      ],
      verifie:
        'Définition (protéinurie > 3 g/24 h, albumine < 30 g/L ; KDIGO : > 3,5 g/24 h) ; causes secondaires fréquentes en RDC ; biopsie ; furosémide ± spironolactone, IEC ou ARA2 ; anticoagulation préventive si albumine < 20–25 g/L ; prednisolone 1 mg/kg/j (max 80 mg) 8 à 16 semaines dans les formes corticosensibles ; traitement des causes.',
    },
    {
      slug: 'urgences-hemodialyse',
      protocoles: [
        'UK Kidney Association — Treatment of acute hyperkalaemia in adults (2022)',
        'NICE — Renal replacement therapy and conservative management (NG107)',
        'Surviving Sepsis Campaign (2021)',
      ],
      verifie:
        'Évaluation du dialysé ; insuline 10 UI + glucose 25 g et salbutamol nébulisé 10–20 mg (UKKA) ; dialyse en urgence ; OAP et ultrafiltration ; hypotension de séance ; infection de cathéter (vancomycine 20–25 mg/kg puis après chaque séance) ; thrombose de fistule.',
      corrige:
        'Dose de calcium de l’hyperkaliémie alignée sur l’UKKA 2022 : 6,8 mmol, soit 30 mL de gluconate de calcium à 10 % (ou 10 mL de chlorure de calcium à 10 %) ; la fiche indiquait 10 mL de gluconate.',
      corrections: [
        {
          principe: 'Hyperkaliémie',
          champ: 'details',
          remplacer: [
            '- **Gluconate de calcium 10 %** 10 mL IV en 5–10 min (à répéter si ECG anormal)',
            '- **Gluconate de calcium 10 %** 30 mL IV (ou chlorure de calcium 10 % 10 mL) en 5–10 min, à répéter si l’ECG reste anormal (UKKA 2022)',
          ],
        },
      ],
    },
    {
      slug: 'adenopathies-superficielles-demarche',
      protocoles: [
        'NICE — Suspected cancer: recognition and referral (NG12)',
        'OMS — Consolidated guidelines on tuberculosis, modules 3 et 4',
        'OMS — IMAI district clinician manual',
      ],
      verifie:
        'Démarche (taille, siège, consistance, territoire de drainage) ; signes d’alarme (sus-claviculaire, > 2 cm, dur ou fixé, signes généraux) ; test VIH, cytoponction avec Xpert, biopsie si persistance > 4 semaines ou suspicion de lymphome ; trypanosomiase en zone d’endémie ; pas de corticoïdes ni d’antibiothérapies à l’aveugle.',
    },
    {
      slug: 'choc-anaphylactique',
      protocoles: [
        'Resuscitation Council UK — Emergency treatment of anaphylaxis (2021)',
        'NICE — Anaphylaxis: assessment and referral after emergency treatment (CG134)',
        'MSF — Guide clinique et thérapeutique',
      ],
      verifie:
        'Diagnostic clinique ; adrénaline IM 0,5 mg (0,01 mg/kg chez l’enfant, max 0,5 mg) à la cuisse, répétée toutes les 5 minutes ; adrénaline IV titrée en cas de choc réfractaire ; position, oxygène, remplissage ; antihistaminique et corticoïde en 2e ligne ; glucagon sous bêtabloquant ; surveillance 6 à 12 h ; adrénaline auto-injectable.',
    },
    {
      slug: 'coup-de-chaleur',
      protocoles: [
        'Wilderness Medical Society — Clinical practice guidelines for the prevention and treatment of heat illness (2019)',
        'OMS — IMAI',
      ],
      verifie:
        'Définition (> 40 °C avec atteinte neurologique) ; éliminer paludisme grave et méningite ; refroidissement immédiat (immersion en eau froide), objectif < 39 °C en 30 minutes, arrêt vers 38,5–39 °C ; pas d’antipyrétique ; remplissage prudent ; rhabdomyolyse, CIVD.',
    },
    {
      slug: 'envenimation-morsure-de-serpent',
      protocoles: [
        'OMS — Guidelines for the prevention and clinical management of snakebite in Africa (2010)',
        'MSF — Guide clinique et thérapeutique',
      ],
      verifie:
        'Premiers gestes (immobilisation ; ni garrot, ni incision, ni succion, ni pierre noire) ; test de coagulation sur tube sec à 20 min répété à 6 h ; indications du sérum antivenimeux polyvalent, adrénaline prête ; même dose chez l’enfant ; néostigmine + atropine dans l’envenimation neurotoxique ; pas d’AINS ; vaccination antitétanique ; surveillance 24 h.',
    },
    {
      slug: 'intoxication-aux-organophosphores',
      protocoles: [
        'OMS — Clinical management of acute pesticide intoxication (2008)',
        'MSF — Guide clinique et thérapeutique',
      ],
      verifie:
        'Syndrome cholinergique et syndrome intermédiaire ; décontamination, protection des soignants ; atropine 1–2 mg IV doublée toutes les 5 minutes jusqu’à l’atropinisation (bronches sèches, FC > 80, PAS > 80), puis 10 à 20 % de la dose de charge par heure ; pralidoxime 30 mg/kg puis 8 mg/kg/h ; diazépam ; charbon activé seulement si < 1 h et voies aériennes protégées ; évaluation psychiatrique.',
    },
    {
      slug: 'intoxications-aigues-adulte',
      protocoles: [
        'AACT/EAPCCT — Position paper: single-dose activated charcoal (2005) ; gastric lavage (2013)',
        'OMS — Clinical management of acute pesticide intoxication (2008)',
        'OMS — mhGAP Intervention Guide 2.0',
      ],
      verifie:
        'ABC, glycémie, toxidromes, ECG ; pas de vomissements provoqués ; charbon activé 50 g si ingestion récente d’un toxique adsorbable, contre-indiqué pour les caustiques, le pétrole et les alcools ; antidotes : atropine, N-acétylcystéine (150 mg/kg en 1 h, 50 mg/kg en 4 h, 100 mg/kg en 16 h), naloxone 0,4 mg, bicarbonate (QRS larges), diazépam + adrénaline (chloroquine), vitamine K1, fomépizole ou éthanol, oxygène ; évaluation psychiatrique.',
    },
    {
      slug: 'oedemes-generalises-demarche',
      protocoles: [
        'Edema: diagnosis and management (American Family Physician, 2013)',
        'OMS — IMAI',
        'ESC — Heart failure guidelines',
      ],
      verifie:
        'Quatre grandes causes (cardiaque, rénale, hépatique, nutritionnelle) et autres (grossesse, hypothyroïdie, médicaments) ; bandelette urinaire systématique ; bilan ; traitement de la cause, restriction sodée, furosémide, spironolactone ; pas de diurétique chez l’enfant malnutri.',
    },
    {
      slug: 'piqures-scorpions-hymenopteres',
      protocoles: [
        'Classification of clinical consequences of scorpion stings: consensus development (2011)',
        'EAACI — Guidelines on allergen immunotherapy: Hymenoptera venom allergy (2018)',
        'MSF — Guide clinique et thérapeutique',
      ],
      verifie:
        'Gravité des piqûres de scorpion (enfant) et prise en charge (antalgie, lidocaïne locale sans adrénaline, hospitalisation, sérum antiscorpionique adapté s’il existe) ; hyménoptères : retrait du dard, anaphylaxie et adrénaline IM, piqûres multiples (hydratation, CPK, créatinine) ; désensibilisation.',
    },
    {
      slug: 'syncope-et-malaise',
      protocoles: [
        'ESC — Guidelines for the diagnosis and management of syncope (2018)',
        'NICE — Transient loss of consciousness in over 16s (CG109)',
      ],
      verifie:
        'Signes d’alarme d’une syncope cardiaque ; hypotension orthostatique (baisse ≥ 20/10 mmHg) ; ECG et glycémie systématiques, β-hCG ; manœuvres de contre-pression, révision des traitements ; hospitalisation des syncopes à haut risque.',
    },
  ],
};
