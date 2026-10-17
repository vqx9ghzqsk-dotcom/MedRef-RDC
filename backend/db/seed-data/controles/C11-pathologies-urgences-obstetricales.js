'use strict';

/**
 * Contrôle de conformité — lot C11 : pathologies obstétricales et urgences obstétricales (31 fiches).
 * Doses et seuils vérifiés dans le guide obstétrical MSF (avortement, éclampsie, inversion utérine) ;
 * critère diagnostique de l'hémorragie du post-partum : recommandations OMS-FIGO-ICM du 5 octobre 2025.
 */

const MSF_OBST = 'MSF — Soins obstétricaux et néonatals essentiels (guide)';
const OMS_MCPC = 'OMS — Managing complications in pregnancy and childbirth (MCPC, 2e édition, 2017)';
const OMS_AVORTEMENT = 'OMS — Abortion care guideline (2022)';
const OMS_PE = 'OMS — Recommendations for prevention and treatment of pre-eclampsia and eclampsia (2011)';
const OMS_HTA_SEVERE = 'OMS — Recommendations on drug treatment for severe hypertension in pregnancy (2018)';
const ACOG_PE = 'ACOG — Practice Bulletin 222: gestational hypertension and preeclampsia (2020)';
const ISSHP = 'ISSHP — Hypertensive disorders of pregnancy: classification, diagnosis and management recommendations (2021)';
const OMS_PREMA = 'OMS — Recommendations on antenatal corticosteroids and on tocolytic therapy for improving preterm birth outcomes (2022)';
const OMS_HPP = 'OMS-FIGO-ICM — Recommendations for the prevention, diagnosis and treatment of postpartum haemorrhage (2025)';
const OMS_TXA = 'OMS — Recommendation on tranexamic acid for the treatment of postpartum haemorrhage (2017)';
const RCOG_PRAEVIA = 'RCOG — Placenta praevia and placenta accreta: diagnosis and management (GTG 27a, 2018)';
const RCOG_HAP = 'RCOG — Antepartum haemorrhage (GTG 63, 2011)';
const OMS_INFECTIONS = 'OMS — Recommendations for prevention and treatment of maternal peripartum infections (2015)';
const ACOG_AFLP = 'ACG — Clinical guideline: liver disease and pregnancy (2016)';

module.exports = {
  lot: 'C11',
  date: '2026-10-16',
  titre: 'Pathologies obstétricales et urgences obstétricales',
  fiches: [
    {
      slug: 'avortement-incomplet-soins-apres-avortement',
      protocoles: [OMS_AVORTEMENT, MSF_OBST],
      verifie:
        'Évaluation (choc, infection, perforation) ; avant 13 SA : misoprostol 600 µg per os ou 400 µg sublingual, ou AMIU sous bloc paracervical (schéma MSF) ; avortement septique : ampicilline + gentamicine + métronidazole puis évacuation ; anti-D, contraception immédiate (DIU, implant), dépistage VIH, prévention du tétanos.',
    },
    {
      slug: 'avortement-septique',
      protocoles: [MSF_OBST, OMS_INFECTIONS, 'Surviving Sepsis Campaign — International guidelines (2021)'],
      verifie:
        'Signes de gravité (choc, ictère, crépitation, défense) ; Ringer lactate 30 mL/kg, noradrénaline ; ampicilline 2 g toutes les 6 h + gentamicine 5 mg/kg/j + métronidazole 500 mg toutes les 8 h dans l’heure ; évacuation dès le début des antibiotiques, laparotomie si perforation ou nécrose ; prévention du tétanos.',
    },
    {
      slug: 'avortement-spontane',
      protocoles: [OMS_AVORTEMENT, MSF_OBST, 'ESHRE — Recurrent pregnancy loss guideline (2022)'],
      verifie:
        'Formes cliniques et échographie ; avortement incomplet : misoprostol 600 µg per os ou 400 µg sublingual ; rétention : mifépristone 200 mg puis misoprostol 800 µg 24–48 h après, ou AMIU, expectative si stable ; anti-D, antalgiques (ibuprofène), planification familiale.',
      corrige:
        'Le bilan étiologique était réservé aux femmes ayant fait 3 avortements ou plus ; l’ESHRE (2022) retient les pertes de grossesse répétées dès 2 avortements.',
      corrections: [
        {
          principe: 'Mesures associées',
          champ: 'details',
          remplacer: ['- Bilan si 3 avortements ou plus', '- Bilan des pertes de grossesse répétées dès 2 avortements (ESHRE 2022)'],
        },
      ],
    },
    {
      slug: 'beance-cervico-isthmique',
      protocoles: [
        'RCOG — Cervical cerclage (GTG 75, 2022)',
        'NICE — Preterm labour and birth (NG25, mise à jour 2022)',
      ],
      verifie:
        'Diagnostic sur les antécédents de fausses couches tardives indolores et le col < 25 mm avant 24 semaines ; cerclage préventif à 12–14 semaines, sur col court chez une femme à antécédent, ou en urgence sans infection ni contraction ; ablation à 36–37 semaines ; progestérone vaginale 200 mg/j si col court.',
    },
    {
      slug: 'cholestase-gravidique',
      protocoles: ['RCOG — Intrahepatic cholestasis of pregnancy (GTG 43, 2022)', 'SMFM — Consult Series 53: intrahepatic cholestasis of pregnancy (2021)'],
      verifie:
        'Prurit palmo-plantaire nocturne, acides biliaires ≥ 10 µmol/L à jeun, diagnostics à éliminer (hépatites, HELLP) ; acide ursodésoxycholique pour le prurit, vitamine K si TP bas ; accouchement selon le pic d’acides biliaires (≥ 100 : 35–36 SA ; 40–99 : 38–39 SA ; < 40 : 38–40 SA) ; contrôle hépatique après l’accouchement.',
    },
    {
      slug: 'chorioamniotite',
      protocoles: [
        'ACOG — Committee Opinion 712: intrapartum management of intraamniotic infection (2017)',
        OMS_INFECTIONS,
        MSF_OBST,
      ],
      verifie:
        'Fièvre ≥ 38 °C avec tachycardie fœtale ou maternelle, utérus douloureux, liquide fétide ; ampicilline 2 g toutes les 6 h + gentamicine 5 mg/kg/j, métronidazole ou clindamycine si césarienne ; accélération de l’accouchement, césarienne pour indication obstétricale seulement ; gestion active de la délivrance ; nouveau-né.',
    },
    {
      slug: 'eclampsie',
      protocoles: [OMS_PE, OMS_HTA_SEVERE, MSF_OBST, OMS_MCPC],
      verifie:
        'Mesures pendant la crise ; sulfate de magnésium (Pritchard 4 g IV + 10 g IM puis 5 g IM toutes les 4 h, ou Zuspan 4 g IV puis 1 g/h, 24 h), surveillance des réflexes, de la respiration et de la diurèse, gluconate de calcium 1 g en antidote ; antihypertenseur si PA ≥ 160/110 (hydralazine, labétalol, nifédipine), objectif 140–150/90–100 ; accouchement dans les 12 h après stabilisation ; diazépam si magnésium indisponible.',
    },
    {
      slug: 'grossesse-abdominale',
      protocoles: [OMS_MCPC, 'RCOG/AEPU — Diagnosis and management of ectopic pregnancy (GTG 21, 2016)'],
      verifie:
        'Signes cliniques (fœtus superficiel, présentation anormale, col fermé, utérus distinct) et échographie ; laparotomie en centre équipé avec sang ; placenta retiré seulement s’il est facilement détachable, sinon laissé en place ; surveillance de l’infection et de l’occlusion.',
      corrige:
        'Le méthotrexate était « discuté » pour le placenta laissé en place : il est déconseillé en routine, car la nécrose placentaire rapide qu’il provoque favorise l’infection ; la surveillance repose sur la clinique, l’échographie et la β-hCG.',
      corrections: [
        {
          principe: 'Après l’intervention',
          champ: 'details',
          remplacer: [
            '- Méthotrexate discuté pour le placenta laissé en place (risque de nécrose infectée)',
            '- Pas de méthotrexate en routine pour le placenta laissé en place (nécrose rapide et infection) ; suivi clinique, échographique et de la β-hCG jusqu’à la résorption',
          ],
        },
      ],
    },
    {
      slug: 'hellp-syndrome',
      protocoles: [ACOG_PE, ISSHP, OMS_PE],
      verifie:
        'Critères (plaquettes < 100 000, LDH > 600, ASAT > 70, schizocytes) ; diagnostics différentiels (stéatose aiguë, MAT, hépatite E, paludisme) ; sulfate de magnésium, antihypertenseurs si ≥ 160/110, plaquettes si < 50 000 avant césarienne ; dexaméthasone avant 34 SA ; accouchement après stabilisation ; surveillance 48–72 h ; hématome hépatique.',
    },
    {
      slug: 'hematome-retroplacentaire',
      protocoles: [RCOG_HAP, MSF_OBST, OMS_MCPC],
      verifie:
        'Douleur brutale, utérus de bois, saignement noirâtre, CIVD (fibrinogène, test de coagulation au lit) ; réanimation et produits sanguins ; césarienne si fœtus vivant, voie basse si fœtus mort et mère stable ; ocytocine, anti-D, surveillance rénale.',
    },
    {
      slug: 'hypertension-gravidique',
      protocoles: [ISSHP, 'NICE — Hypertension in pregnancy: diagnosis and management (NG133, 2019)', ACOG_PE],
      verifie:
        'Définition (≥ 140/90 après 20 SA sans protéinurie ni atteinte d’organe) ; surveillance (PA, protéinurie, bilan, croissance fœtale) ; nifédipine, méthyldopa, labétalol, pas d’IEC ni d’ARA2 ; aspirine et calcium chez les femmes à risque ; accouchement à 37 SA si l’HTA est contrôlée.',
      corrige:
        'Le seuil de traitement était donné à 150–160/100–110 dans le résumé et à 150/100 dans le principe : l’ISSHP (2021) et le NICE (2019) traitent dès 140/90, avec un objectif de 135/85.',
      corrections: [
        {
          principe: 'Antihypertenseurs',
          champ: 'details',
          remplacer: [
            '- Traiter si PA ≥ 150/100 (ou ≥ 140/90 selon les recommandations récentes) ; objectif 135/85',
            '- Traiter dès PA ≥ 140/90 mmHg (ISSHP 2021, NICE 2019) ; objectif 135/85',
          ],
        },
        {
          champ: 'resume',
          remplacer: [
            'antihypertenseur si PA ≥ 150–160/100–110 (nifédipine, méthyldopa, labétalol)',
            'antihypertenseur dès 140/90 avec un objectif de 135/85 (nifédipine, méthyldopa, labétalol)',
          ],
        },
      ],
    },
    {
      slug: 'macrosomie-foetale',
      protocoles: ['ACOG — Practice Bulletin 216: macrosomia (2020)', 'RCOG — Shoulder dystocia (GTG 42, 2012)'],
      verifie:
        'Suspicion (hauteur utérine, estimation échographique imprécise) et dépistage du diabète ; césarienne programmée si poids estimé ≥ 4 500 g chez une diabétique, ≥ 5 000 g sinon ; dystocie des épaules : McRoberts, pression sus-pubienne, manœuvres internes, pas de traction forte ni d’expression ; glycémie du nouveau-né.',
    },
    {
      slug: 'menace-accouchement-premature',
      protocoles: [OMS_PREMA, 'NICE — Preterm labour and birth (NG25, mise à jour 2022)', MSF_OBST],
      verifie:
        'Contractions avec modification du col, col < 25 mm ; dexaméthasone 6 mg × 4 ou bétaméthasone 12 mg × 2 entre 24 et 34 SA si naissance probable dans les 7 jours et soins néonatals adaptés ; nifédipine 48 h, pas de tocolyse prolongée ; sulfate de magnésium avant 32 SA ; recherche d’infection ; transfert in utero.',
    },
    {
      slug: 'mole-hydatiforme',
      protocoles: [
        'FIGO — Cancer report 2021: update on the diagnosis and management of gestational trophoblastic disease',
        MSF_OBST,
      ],
      verifie:
        'Clinique, β-hCG et échographie ; aspiration (et non misoprostol seul) sous ocytocine débutée pendant le geste, histologie, anti-D ; β-hCG hebdomadaire jusqu’à négativation puis mensuelle, contraception efficace ; plateau ou réascension : méthotrexate ou dactinomycine en centre spécialisé.',
    },
    {
      slug: 'mort-foetale-in-utero',
      protocoles: [
        'FIGO — Misoprostol-only recommended regimens (2017)',
        'RCOG — Late intrauterine fetal death and stillbirth (GTG 55, 2010)',
        MSF_OBST,
      ],
      verifie:
        'Confirmation échographique, bilan (PA, protéinurie, TDR, syphilis, glycémie, fibrinogène) ; misoprostol selon le terme (≥ 28 SA : 25 µg vaginal toutes les 6 h ou per os toutes les 2 h ; 14–28 SA : 200 µg toutes les 4–6 h), mifépristone avant ; prudence sur utérus cicatriciel ; CIVD ; anti-D ; accompagnement du deuil.',
    },
    {
      slug: 'oligoamnios-et-hydramnios',
      protocoles: ['SMFM — Consult Series 46: evaluation and management of polyhydramnios (2018)', MSF_OBST],
      verifie:
        'Seuils échographiques (citerne < 2 cm ou index < 5 ; citerne ≥ 8 cm ou index ≥ 24) ; causes et bilan (rupture, insuffisance placentaire, diabète, malformations, allo-immunisation, infections) ; amniodrainage en centre ; rupture contrôlée des membranes et gestion active de la délivrance.',
    },
    {
      slug: 'placenta-accreta',
      protocoles: [
        'FIGO — Consensus guidelines on placenta accreta spectrum disorders (2018)',
        'ACOG/SMFM — Obstetric Care Consensus 7: placenta accreta spectrum (2018)',
        RCOG_PRAEVIA,
      ],
      verifie:
        'Dépistage échographique chez toute femme avec cicatrice utérine et placenta antérieur bas ; référence en centre équipé ; césarienne programmée à 34–36 SA, hystérectomie placenta en place, acide tranexamique ; traitement conservateur seulement en centre spécialisé ; découverte à l’accouchement : ne pas arracher le placenta.',
    },
    {
      slug: 'placenta-praevia',
      protocoles: [RCOG_PRAEVIA, RCOG_HAP, MSF_OBST],
      verifie:
        'Saignement rouge indolore, pas de toucher vaginal, échographie ; hémorragie grave : césarienne quel que soit le terme ; saignement modéré : hospitalisation, corticoïdes 24–34 SA, anti-D ; placenta recouvrant : césarienne programmée à 36–37 SA ; suspicion d’accretisme : centre spécialisé.',
      corrige:
        'La fiche appelait « bas inséré » un placenta situé à plus de 2 cm de l’orifice, en contradiction avec sa propre définition (moins de 2 cm) : à plus de 2 cm, le placenta est normalement inséré et la voie basse est la règle ; à moins de 2 cm, la césarienne est le plus souvent indiquée.',
      corrections: [
        {
          principe: 'Accouchement',
          champ: 'details',
          remplacer: [
            '- Bas inséré (> 2 cm de l’orifice) : voie basse possible',
            '- Bord placentaire à plus de 2 cm de l’orifice interne au 3e trimestre : placenta normalement inséré, voie basse\n- Bas inséré (moins de 2 cm) : césarienne le plus souvent ; épreuve de voie basse discutable entre 1 et 2 cm en structure équipée',
          ],
        },
      ],
    },
    {
      slug: 'pre-eclampsie-severe',
      protocoles: [OMS_PE, OMS_HTA_SEVERE, ACOG_PE, ISSHP, MSF_OBST],
      verifie:
        'Définition et signes de gravité ; bilan (plaquettes, transaminases, LDH, créatinine, hémostase, Doppler) ; sulfate de magnésium (Zuspan ou Pritchard) avec surveillance et antidote ; PA ≥ 160/110 traitée dans les 30–60 min, objectif 140–150/90–100 ; accouchement après stabilisation dès 34 SA, prolongation possible avant ; corticoïdes 24–34 SA ; surveillance du post-partum, aspirine à la grossesse suivante.',
      corrige:
        'La forme sévère comptait encore la protéinurie > 3 g/24 h parmi les critères de gravité : ce critère a été abandonné (ACOG, ISSHP) ; le seuil de créatinine est aligné sur celui de la fiche (> 97 µmol/L ou doublement).',
      corrections: [
        {
          forme: 'Pré-éclampsie sévère',
          champ: 'paraclinique',
          remplacer: [
            '- Protéinurie > 3 g/24 h ou créatinine > 90 µmol/L, oligurie < 500 mL/24 h',
            '- Créatinine > 97 µmol/L (1,1 mg/dL) ou doublement, oligurie < 500 mL/24 h (le niveau de protéinurie n’est pas un critère de gravité)',
          ],
        },
      ],
    },
    {
      slug: 'retard-croissance-intra-uterin',
      protocoles: [
        'ISUOG — Practice guidelines: diagnosis and management of small-for-gestational-age fetus and fetal growth restriction (2020)',
        'OMS — Recommendations on antenatal care for a positive pregnancy experience (2016)',
      ],
      verifie:
        'Dépistage par la hauteur utérine, confirmation échographique et Doppler ombilical ; bilan étiologique (HTA, paludisme, VIH, syphilis, TORCH, drépanocytose) ; prévention (TPI, nutrition, aspirine) ; surveillance toutes les 2–3 semaines, corticoïdes avant 34 SA, sulfate de magnésium avant 32 SA ; nouveau-né (hypoglycémie, hypothermie).',
    },
    {
      slug: 'rupture-prematuree-membranes',
      protocoles: [
        'RCOG — Care of women presenting with suspected preterm prelabour rupture of membranes (GTG 73, 2019)',
        'ACOG — Practice Bulletin 217: prelabor rupture of membranes (2020)',
        MSF_OBST,
      ],
      verifie:
        'Diagnostic au spéculum stérile, pas de touchers répétés ; avant 37 SA : érythromycine 250 mg 4 fois par jour 10 jours, pas d’amoxicilline-acide clavulanique, corticoïdes 24–34 SA, sulfate de magnésium avant 32 SA ; à terme : déclenchement, antibioprophylaxie si rupture > 18 h ; chorioamniotite : ampicilline + gentamicine et accouchement.',
    },
    {
      slug: 'steatose-hepatique-aigue-gravidique',
      protocoles: [ACOG_AFLP, 'Critères de Swansea (stéatose hépatique aiguë gravidique)'],
      verifie:
        'Tableau clinique, hypoglycémie, TP bas, hyperuricémie ; distinction avec le HELLP et l’hépatite E ; glucose 10 %, plasma, vitamine K, plaquettes ; accouchement rapide après stabilisation ; soins intensifs ; dépistage du déficit en LCHAD chez l’enfant.',
    },
    {
      slug: 'vasa-praevia',
      protocoles: ['RCOG — Vasa praevia: diagnosis and management (GTG 27b, 2018)', 'SMFM — Consult Series 37: diagnosis and management of vasa previa (2015)'],
      verifie:
        'Diagnostic prénatal par Doppler couleur endovaginal ; césarienne programmée à 34–36 SA avec corticoïdes, pas de rupture artificielle des membranes ; saignement à la rupture avec anomalie du rythme fœtal : césarienne immédiate et transfusion du nouveau-né.',
    },
    {
      slug: 'choc-hemorragique-obstetrical',
      protocoles: [OMS_HPP, OMS_TXA, MSF_OBST],
      verifie:
        'Index de choc, recherche de la cause (4 T) ; appel à l’aide, 2 voies veineuses, Ringer lactate puis transfusion précoce ; acide tranexamique 1 g dans les 3 h, à répéter une fois ; vêtement antichoc non pneumatique ; utérotoniques, ballonnet, chirurgie ; ergométrine contre-indiquée en cas d’HTA.',
    },
    {
      slug: 'coagulopathie-obstetricale',
      protocoles: [OMS_MCPC, OMS_TXA, 'RCOG — Prevention and management of postpartum haemorrhage (GTG 52, 2016)'],
      verifie:
        'Causes (HPP massive, HRP, MFIU, embolie amniotique, sepsis) ; test de coagulation au lit (pas de caillot à 7 min), fibrinogène < 2 g/L ; traitement de la cause, acide tranexamique, culots, plasma 15–20 mL/kg, cryoprécipité, plaquettes si < 50 000 avec saignement ; réchauffement, calcium ; thromboprophylaxie une fois le saignement contrôlé.',
    },
    {
      slug: 'embolie-amniotique',
      protocoles: ['SMFM — Clinical guideline 9: amniotic fluid embolism, diagnosis and management (2016)', OMS_MCPC],
      verifie:
        'Diagnostic clinique d’élimination (collapsus, désaturation, convulsions, CIVD) ; réanimation, vasopresseurs, RCP avec déviation utérine et césarienne péri-mortem dans les 4–5 min ; correction précoce de la coagulopathie (acide tranexamique, plasma, cryoprécipité, plaquettes), utérotoniques, hystérectomie si besoin.',
    },
    {
      slug: 'hemorragie-post-partum',
      protocoles: [OMS_HPP, OMS_TXA, 'E-MOTIVE — Gallos et al., N Engl J Med 2023', MSF_OBST],
      verifie:
        'Mesure objective des pertes (sac collecteur gradué), index de choc ; prévention par utérotonique pour toutes (ocytocine 10 UI, carbétocine thermostable, misoprostol) ; paquet MOTIVE (massage, utérotoniques, acide tranexamique 1 g dans les 3 h, perfusion, examen, escalade) ; misoprostol 800 µg sublingual ; ballonnet, compression aortique, vêtement antichoc, chirurgie conservatrice puis hystérectomie.',
      corrige:
        'Le seuil diagnostique de 300 mL avec des signes vitaux anormaux était attribué à l’« OMS 2023 » : il provient des recommandations OMS-FIGO-ICM publiées le 5 octobre 2025.',
      corrections: [
        {
          champ: 'definition',
          remplacer: [
            'L’OMS 2023 recommande une mesure objective (sac collecteur gradué) et le diagnostic dès 500 mL, ou dès 300 mL en présence de signes cliniques anormaux.',
            'Les recommandations OMS-FIGO-ICM d’octobre 2025 préconisent une mesure objective (sac collecteur gradué) et le diagnostic dès 500 mL, ou dès 300 mL avec des signes vitaux anormaux.',
          ],
        },
      ],
    },
    {
      slug: 'hemorragies-troisieme-trimestre',
      protocoles: [RCOG_HAP, MSF_OBST],
      verifie:
        'Pas de toucher vaginal avant d’avoir exclu un placenta prævia ; orientation (prævia, HRP, rupture utérine) ; voie veineuse, groupage, transfusion, anti-D, corticoïdes avant 34 SA si stable ; traitement selon la cause et transfert.',
    },
    {
      slug: 'inversion-uterine',
      protocoles: [MSF_OBST, OMS_MCPC],
      verifie:
        'Clinique (douleur, choc, masse vulvaire, fond utérin non palpable) ; réduction manuelle immédiate après arrêt de l’ocytocine, placenta laissé en place s’il adhère ; utérotonique après la réduction, antibioprophylaxie ; réduction hydrostatique ou chirurgicale en cas d’échec.',
      corrige:
        'La kétamine figurait parmi les moyens de relâcher l’utérus : elle permet l’anesthésie mais ne relâche pas le muscle utérin (contrairement aux halogénés) ; ajout de l’acide tranexamique si l’hémorragie est massive ou persiste, comme le prévoit le guide MSF.',
      corrections: [
        {
          principe: 'Réduction immédiate',
          champ: 'details',
          remplacer: [
            '- Relâchement utérin si nécessaire : **salbutamol** ou **terbutaline**, sulfate de magnésium, anesthésie générale (halothane, kétamine)',
            '- Relâchement utérin si nécessaire : **salbutamol** ou **terbutaline**, sulfate de magnésium, ou anesthésie générale par un halogéné (halothane) ; la kétamine assure l’anesthésie sans relâcher l’utérus\n- **Acide tranexamique** 1 g IV si l’hémorragie est massive ou persiste',
          ],
        },
        {
          ajouter: 'molecule',
          molecule: 'acide-tranexamique',
          ligne: 'adjuvant',
          contexte: 'Hémorragie massive ou persistante',
        },
      ],
    },
    {
      slug: 'rupture-uterine',
      protocoles: [OMS_MCPC, MSF_OBST],
      verifie:
        'Signes de pré-rupture et de rupture ; réanimation, transfusion, acide tranexamique ; laparotomie immédiate, réparation ou hystérectomie, vérification de la vessie ; antibiotiques ; prévention (partogramme, ocytocine encadrée, accouchement en hôpital des utérus cicatriciels).',
    },
    {
      slug: 'sepsis-maternel-endometrite',
      protocoles: [OMS_INFECTIONS, 'OMS — Statement on maternal sepsis (2017)', 'Surviving Sepsis Campaign — International guidelines (2021)'],
      verifie:
        'Définition (jusqu’à 42 jours), foyers, qSOFA ; ampicilline + gentamicine + métronidazole, ou clindamycine + gentamicine (OMS), dans l’heure ; remplissage 30 mL/kg et noradrénaline ; contrôle de la source ; prévention (hygiène, antibioprophylaxie de la césarienne).',
    },
  ],
};
