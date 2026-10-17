'use strict';

/**
 * Contrôle de conformité — lot C10 : grossesse et médecine materno-fœtale (36 fiches).
 * Seuils transfusionnels de la grossesse vérifiés dans le guide clinique MSF (tableau « Définition
 * de l'anémie et seuils transfusionnels ») ; artéméther-luméfantrine au 1er trimestre : lignes
 * directrices OMS sur le paludisme (mise à jour de novembre 2022).
 */

const OMS_CPN = 'OMS — Recommendations on antenatal care for a positive pregnancy experience (2016)';
const OMS_PALU = 'OMS — Guidelines for malaria (mise à jour 2022 : artéméther-luméfantrine au 1er trimestre)';
const MSF_OBST = 'MSF — Soins obstétricaux et néonatals essentiels (guide)';

module.exports = {
  lot: 'C10',
  date: '2026-10-16',
  titre: 'Grossesse et médecine materno-fœtale',
  fiches: [
    {
      slug: 'allo-immunisation-rhesus',
      protocoles: [
        'RCOG — Management of women with red cell antibodies during pregnancy (GTG 65, 2014)',
        'BSH — Guideline for the use of anti-D immunoglobulin for the prevention of haemolytic disease of the fetus and newborn (2014)',
      ],
      verifie:
        'Groupage-rhésus et RAI au 1er contact, RAI à 28 semaines ; immunoglobulines anti-D 300 µg dans les 72 h après tout événement immunisant, dose anténatale à 28 semaines, 50–120 µg avant 12 semaines ; femme immunisée : Doppler cérébral, transfusion in utero ; nouveau-né : photothérapie, exsanguinotransfusion.',
    },
    {
      slug: 'anemie-de-la-grossesse',
      protocoles: [
        'OMS — Guideline: daily iron and folic acid supplementation in pregnant women (2012)',
        MSF_OBST,
        'MSF — Guide clinique et thérapeutique : anémie (seuils transfusionnels)',
        OMS_PALU,
      ],
      verifie:
        'Seuils (Hb < 11 g/dL, sévère < 7) ; causes (fer, paludisme, helminthes, drépanocytose, VIH) ; fer 120 mg + acide folique 0,4 mg, fer IV ; déparasitage au 2e trimestre ; prévention (TPI, moustiquaire, espacement des naissances, clampage retardé).',
      corrige:
        'Paludisme : la fiche limitait les ACT aux 2e et 3e trimestres ; l’OMS (2022) recommande l’artéméther-luméfantrine dès le 1er trimestre. Seuils de transfusion alignés sur MSF : Hb ≤ 5 g/dL avant 36 SA (≤ 6 ensuite) même sans signe, jusqu’à 7 g/dL (8 après 36 SA) avec décompensation, paludisme grave, infection sévère ou drépanocytose.',
      corrections: [
        {
          principe: 'Traitement de l’anémie',
          champ: 'details',
          remplacer: [
            'Traitement du paludisme (ACT après le 1er trimestre)',
            'Traitement du paludisme (artéméther-luméfantrine à tous les trimestres, OMS 2022)',
          ],
        },
        {
          principe: 'Anémie sévère',
          champ: 'details',
          remplacer: [
            '- **Transfusion** si Hb < 7 g/dL avec signes de décompensation ou près du terme (culot, débit lent, furosémide)',
            '- **Transfusion** (culot, débit lent, furosémide) : Hb ≤ 5 g/dL avant 36 SA (≤ 6 g/dL après) même sans signe ; jusqu’à 7 g/dL (8 g/dL après 36 SA) avec signes de décompensation, paludisme grave, infection sévère ou drépanocytose (MSF)',
          ],
        },
        {
          champ: 'resume',
          remplacer: [
            'transfusion si Hb < 7 g/dL avec mauvaise tolérance ou près du terme.',
            'transfusion selon le terme et la tolérance (Hb ≤ 5 g/dL avant 36 SA, ≤ 6 g/dL ensuite, ou jusqu’à 7–8 g/dL si mauvaise tolérance).',
          ],
        },
      ],
    },
    {
      slug: 'appendicite-et-grossesse',
      protocoles: [
        'SAGES — Guidelines for the use of laparoscopy during pregnancy (2017)',
        'WSES — Jerusalem guidelines on diagnosis and treatment of acute appendicitis (2020)',
      ],
      verifie:
        'Présentation selon le trimestre, échographie (IRM si doute) ; appendicectomie sans délai, décubitus latéral gauche ; céfazoline ou ceftriaxone + métronidazole, pas de traitement antibiotique seul ; tocolyse et corticoïdes selon le terme ; AINS évités.',
    },
    {
      slug: 'asthme-et-grossesse',
      protocoles: ['GINA — Global strategy for asthma management and prevention (2024), chapitre grossesse'],
      verifie:
        'Asthme non contrôlé plus dangereux que les traitements ; corticoïdes inhalés et salbutamol poursuivis ; crise : salbutamol, oxygène pour SpO2 ≥ 95 %, prednisolone, sulfate de magnésium si grave ; PaCO2 « normale » anormale ; prudence avec le carboprost.',
    },
    {
      slug: 'cardiopathies-et-grossesse',
      protocoles: ['ESC — Guidelines for the management of cardiovascular diseases during pregnancy (2018)'],
      verifie:
        'Classification mWHO ; consultation préconceptionnelle ; suivi conjoint, échocardiographie ; rétrécissement mitral : bêtabloquant, furosémide, dilatation percutanée ; prothèse mécanique : héparine au 1er trimestre, AVK aux 2e–3e trimestres si dose faible ; accouchement planifié, pas d’ergométrine, surveillance 24–72 h après l’accouchement.',
    },
    {
      slug: 'consultation-prenatale',
      protocoles: [OMS_CPN, 'OMS — Recommendations on calcium supplementation before and during pregnancy (2020)'],
      verifie:
        'Au moins 8 contacts, le premier avant 12 SA ; signes de danger ; dépistages (VIH, syphilis, AgHBs, Hb, groupe, protéinurie, bactériurie) ; échographie avant 24 SA ; fer 30–60 mg + acide folique 0,4 mg, calcium, déparasitage ; TPI-SP dès 13 SA, moustiquaire, Td ; aspirine si risque de pré-éclampsie ; plan d’accouchement.',
    },
    {
      slug: 'diabete-gestationnel',
      protocoles: [
        'OMS — Diagnostic criteria and classification of hyperglycaemia first detected in pregnancy (2013)',
        'ADA — Standards of Care in Diabetes (2025), section 15',
      ],
      verifie:
        'Seuils IADPSG/OMS de l’HGPO 75 g à 24–28 SA ; objectifs (à jeun < 0,95, 1 h < 1,40, 2 h < 1,20 g/L) ; insuline en référence, metformine acceptable, pas de sulfamides ; accouchement vers 39–40 SA ; glycémie du nouveau-né ; dépistage du diabète 6 à 12 semaines après.',
    },
    {
      slug: 'douleurs-abdominales-grossesse',
      protocoles: [MSF_OBST, 'ACOG — Committee Opinion 775: nonobstetric surgery during pregnancy (2019)'],
      verifie:
        'Causes obstétricales selon le terme et non obstétricales ; signes de gravité ; bilan (β-hCG, échographie, bandelette, NFS, HELLP, TDR paludisme) ; urgences (choc, HRP, pré-éclampsie) ; la grossesse ne retarde pas l’imagerie ni la chirurgie ; AINS évités après 20 semaines.',
    },
    {
      slug: 'drepanocytose-et-grossesse',
      protocoles: ['RCOG — Management of sickle cell disease in pregnancy (GTG 61, 2011)'],
      verifie:
        'Suivi conjoint, acide folique 5 mg, arrêt de l’hydroxycarbamide, aspirine dès 12 SA, prévention du paludisme ; crises (morphine, pas d’AINS après 20 SA), syndrome thoracique, transfusion selon les complications ; thromboprophylaxie ; accouchement vers 38–39 SA ; post-partum à haut risque.',
    },
    {
      slug: 'dysthyroidies-et-grossesse',
      protocoles: [
        'ATA — Guidelines for the diagnosis and management of thyroid disease during pregnancy and the postpartum (2017)',
      ],
      verifie:
        'Normes du trimestre ; lévothyroxine augmentée de 25–30 % dès le diagnostic de grossesse, TSH < 2,5 mUI/L ; propylthiouracile au 1er trimestre puis carbimazole à dose minimale ; thyrotoxicose gestationnelle sans antithyroïdien ; iode 250 µg/j.',
    },
    {
      slug: 'epilepsie-et-grossesse',
      protocoles: [
        'RCOG — Epilepsy in pregnancy (GTG 68, 2016)',
        'ILAE/AAN — Teratogenesis, perinatal and neurodevelopmental outcomes after in utero exposure to antiseizure medication (2024)',
      ],
      verifie:
        'Ne jamais arrêter brutalement ; valproate remplacé (lamotrigine, lévétiracétam) ; acide folique à forte dose ; crise après 20 SA : tension et protéinurie (éclampsie, sulfate de magnésium) ; ajustement des doses ; vitamine K au nouveau-né ; allaitement.',
    },
    {
      slug: 'fievre-pendant-la-grossesse',
      protocoles: [OMS_PALU, MSF_OBST],
      verifie:
        'TDR paludisme systématique, pyélonéphrite, chorioamniotite, listériose ; paracétamol ; ceftriaxone de la pyélonéphrite, ampicilline + gentamicine et extraction en cas de chorioamniotite ; sepsis : antibiotiques dans l’heure.',
      corrige:
        'Contexte de l’artéméther (avec luméfantrine) corrigé : utilisable à tous les trimestres (OMS 2022), et non seulement aux 2e et 3e.',
      corrections: [
        {
          molecule: 'artemether',
          champ: 'contexte',
          remplacer: [
            'Paludisme (2e–3e trimestres, avec luméfantrine)',
            'Paludisme, à tous les trimestres (avec luméfantrine, OMS 2022)',
          ],
        },
      ],
    },
    {
      slug: 'grossesse-apres-40-ans',
      protocoles: [OMS_CPN, 'ACOG — Obstetric Care Consensus 11: pregnancy at age 35 years or older (2022)'],
      verifie:
        'Risques (chromosomiques, HTA, diabète, placenta prævia, hémorragie, rupture utérine) ; CPN renforcées, dépistage du diabète, aspirine (l’âge ≥ 40 ans est un facteur de risque), calcium ; accouchement en hôpital, gestion active de la délivrance, prudence avec l’ocytocine chez la grande multipare ; contraception.',
    },
    {
      slug: 'grossesse-adolescente-suivi-obstetrical',
      protocoles: [OMS_CPN, 'OMS — Recommendations: intrapartum care for a positive childbirth experience (2018)'],
      verifie:
        'Au moins 8 contacts, échographie avant 24 SA, dépistages ; fer-acide folique, TPI, calcium, aspirine si facteurs de risque ; accouchement dans une structure capable de césarienne, partogramme, gestion active de la délivrance, sondage après travail prolongé ; contraception du post-partum.',
    },
    {
      slug: 'grossesse-gemellaire',
      protocoles: ['NICE — Twin and triplet pregnancy (NG137, 2019)', 'ISUOG — Practice guidelines: role of ultrasound in twin pregnancy (2016)'],
      verifie:
        'Chorionicité au 1er trimestre, croissance toutes les 4 semaines (bichoriale) ou 2 semaines (monochoriale) ; CPN rapprochées, corticoïdes avant 34 SA ; naissance vers 37–38 SA (bichoriale), 36–37 SA (monochoriale biamniotique) ; voie basse si 1er jumeau céphalique ; prévention renforcée de l’hémorragie du post-partum.',
    },
    {
      slug: 'grossesse-prolongee',
      protocoles: [
        'OMS — Recommendations on induction of labour (mise à jour 2022)',
        'NICE — Inducing labour (NG207, 2021)',
      ],
      verifie:
        'Datation par l’échographie précoce ; surveillance à partir de 41 SA tous les 2–3 jours ; déclenchement entre 41 et 42 SA : misoprostol 25 µg vaginal toutes les 4–6 h ou oral toutes les 2 h, sonde de Foley ; col favorable : rupture et ocytocine ; pas de misoprostol sur utérus cicatriciel.',
    },
    {
      slug: 'hepatite-b-et-grossesse',
      protocoles: ['OMS — Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection (2024)'],
      verifie:
        'AgHBs au 1er contact (triple élimination) ; ténofovir à partir de 24–28 SA si ADN ≥ 200 000 UI/mL ou AgHBe+, ou chez toutes les porteuses sans ces tests ; vaccin du nouveau-né dans les 24 h ; allaitement autorisé ; pas de césarienne systématique.',
    },
    {
      slug: 'hepatite-e-et-grossesse',
      protocoles: ['OMS — Hepatitis E vaccine: WHO position paper (2015)', MSF_OBST],
      verifie:
        'Gravité au 3e trimestre ; IgM anti-VHE, TP, glycémie ; diagnostics différentiels (HELLP, stéatose aiguë gravidique) ; hospitalisation, glucose, vitamine K, plasma si saignement ; pas de ribavirine ; gestion active de la délivrance ; eau et hygiène, vaccination en épidémie.',
    },
    {
      slug: 'hyperemesis-gravidarum',
      protocoles: ['RCOG — Management of nausea and vomiting of pregnancy and hyperemesis gravidarum (GTG 69)'],
      verifie:
        'Définition (perte de poids > 5 %, cétose) ; diagnostics différentiels (môle, infection, paludisme, hépatite, hyperthyroïdie) ; réhydratation avec potassium, thiamine avant tout glucosé ; doxylamine-pyridoxine ou prométhazine, métoclopramide ≤ 5 jours, ondansétron en cas d’échec ; thromboprophylaxie si hospitalisation prolongée.',
    },
    {
      slug: 'infections-torch-grossesse',
      protocoles: [
        'OMS — Rubella vaccines: WHO position paper (2020)',
        'SOGC — Toxoplasmosis in pregnancy: prevention, screening and treatment (2013)',
      ],
      verifie:
        'Sérologies et signes échographiques ; prévention (vaccination RR avant la grossesse, hygiène toxoplasmose et CMV) ; spiramycine en cas de séroconversion, pyriméthamine-sulfadiazine si infection fœtale prouvée ; syphilis et VIH systématiques ; nouveau-né (audition, fond d’œil, PCR CMV avant 21 jours).',
    },
    {
      slug: 'infections-urinaires-de-la-grossesse',
      protocoles: [
        'IDSA — Clinical practice guideline for the management of asymptomatic bacteriuria (2019)',
        MSF_OBST,
      ],
      verifie:
        'Dépistage et traitement de la bactériurie asymptomatique ; cystite : amoxicilline, céfixime, nitrofurantoïne (pas à terme), fosfomycine ; pyélonéphrite : hospitalisation, ceftriaxone puis relais, pas de fluoroquinolones ; ECBU de contrôle.',
    },
    {
      slug: 'lupus-et-grossesse',
      protocoles: [
        'EULAR — Recommendations for women’s health and family planning in SLE and/or APS (2017)',
        'ACR — Guideline for the management of reproductive health in rheumatic and musculoskeletal diseases (2020)',
      ],
      verifie:
        'Grossesse programmée en rémission ≥ 6 mois ; arrêt des tératogènes ; hydroxychloroquine poursuivie ; aspirine dès 12 SA ; SAPL : aspirine + héparine ; anti-SSA : surveillance du rythme fœtal ; distinction poussée/pré-éclampsie ; post-partum.',
    },
    {
      slug: 'maladie-thromboembolique-et-grossesse',
      protocoles: [
        'RCOG — Thromboembolic disease in pregnancy and the puerperium: acute management (GTG 37b, 2015)',
        'RCOG — Reducing the risk of venous thromboembolism during pregnancy and the puerperium (GTG 37a, 2015)',
      ],
      verifie:
        'Doppler veineux en première intention, angioscanner si besoin, D-dimères peu utiles ; énoxaparine 1 mg/kg toutes les 12 h, toute la grossesse et au moins 6 semaines après (3 mois au total), pas d’AOD, warfarine en post-partum ; gestion autour de l’accouchement ; thromboprophylaxie après césarienne avec facteurs de risque.',
    },
    {
      slug: 'medicaments-et-grossesse',
      protocoles: [OMS_PALU, 'OMS — Liste modèle des médicaments essentiels (usage pendant la grossesse)'],
      verifie:
        'Démarche avant prescription, exposition accidentelle ; médicaments utilisables (paracétamol, bêtalactamines, macrolides, ACT à tous les trimestres, méthyldopa, nifédipine, labétalol, insuline, héparines, dolutégravir-ténofovir-lamivudine, RHZE) ; à éviter (valproate, isotrétinoïne, IEC et sartans, warfarine au 1er trimestre, tétracyclines, AINS après 20 SA, misoprostol hors indication, primaquine) ; remèdes utérotoniques.',
    },
    {
      slug: 'nutrition-supplementation-grossesse',
      protocoles: [OMS_CPN, 'OMS — Recommendations on calcium supplementation before and during pregnancy (2020)'],
      verifie:
        'PB < 23 cm, prise de poids attendue ; repas supplémentaire, aliments variés, sel iodé ; fer 30–60 mg + acide folique 0,4 mg, calcium 1,5–2 g si apports faibles, déparasitage ; pas de fortes doses de vitamine A ; supplémentation énergétique et protéique si dénutrition.',
    },
    {
      slug: 'paludisme-et-grossesse',
      protocoles: [OMS_PALU, 'PNLP RDC — Directives nationales de prise en charge du paludisme'],
      verifie:
        'TDR chez toute femme enceinte fébrile ; artéméther-luméfantrine 3 jours à tous les trimestres ; artésunate IV dans le paludisme grave quel que soit le terme ; glucose, transfusion, surveillance fœtale ; TPI-SP dès 13 SA (au moins 3 doses), pas de SP sous cotrimoxazole ; moustiquaire.',
      corrige:
        'Le résumé et les contextes des molécules donnaient encore la quinine + clindamycine en première intention au 1er trimestre et réservaient l’artéméther-luméfantrine aux 2e et 3e trimestres, alors que le principe de la fiche suivait déjà l’OMS 2022 (artéméther-luméfantrine à tous les trimestres) : mise en cohérence, la quinine devenant l’alternative.',
      corrections: [
        {
          champ: 'resume',
          remplacer: [
            'traitement : quinine + clindamycine au 1er trimestre (ou artéméther-luméfantrine selon l’OMS 2022), ACT aux 2e et 3e trimestres, artésunate IV si grave.',
            'traitement : artéméther-luméfantrine à tous les trimestres (OMS 2022 ; quinine + clindamycine au 1er trimestre à défaut), artésunate IV si grave.',
          ],
        },
        {
          molecule: 'artemether',
          champ: 'contexte',
          remplacer: ['2e et 3e trimestres (avec luméfantrine)', 'Tous les trimestres (avec luméfantrine, OMS 2022)'],
        },
        {
          molecule: 'quinine',
          champ: 'contexte',
          remplacer: [
            '1er trimestre (avec clindamycine)',
            '1er trimestre si artéméther-luméfantrine indisponible (avec clindamycine)',
          ],
        },
        { molecule: 'quinine', champ: 'ligne', ancienne: 'premiere', valeur: 'alternative' },
        { molecule: 'clindamycine', champ: 'ligne', ancienne: 'premiere', valeur: 'alternative' },
      ],
    },
    {
      slug: 'saignements-premier-trimestre',
      protocoles: ['OMS — Abortion care guideline (2022)', MSF_OBST],
      verifie:
        'Choc et GEU en priorité ; spéculum, β-hCG, échographie ; orientation (menace, avortement incomplet, GEU, môle) ; misoprostol ou AMIU de l’avortement incomplet, aspiration et suivi de la β-hCG dans la môle ; anti-D si rhésus négatif ; planification familiale.',
    },
    {
      slug: 'syphilis-et-grossesse',
      protocoles: [
        'OMS — Guidelines for the treatment of Treponema pallidum (syphilis) (2016)',
        'OMS — Global guidance on criteria and processes for validation of elimination of mother-to-child transmission of HIV, syphilis and hepatitis B',
      ],
      verifie:
        'TDR au 1er contact (double TDR VIH-syphilis), répété au 3e trimestre si risque ; benzathine pénicilline 2,4 MUI (1 dose si syphilis récente, 3 doses hebdomadaires si tardive ou inconnue) ; désensibilisation en cas d’allergie, les macrolides ne traitant pas le fœtus ; partenaire ; nouveau-né.',
    },
    {
      slug: 'tuberculose-et-grossesse',
      protocoles: ['OMS — Consolidated guidelines on tuberculosis, module 4 : treatment (2022)', 'OMS — Consolidated guidelines on tuberculosis, module 1 : prevention (2024)'],
      verifie:
        'Dépistage à chaque CPN, Xpert, radiographie protégée ; RHZE puis RH sûrs avec pyridoxine ; ARV avec dolutégravir doublé sous rifampicine ; traitement préventif chez la femme VIH+ ; nouveau-né d’une mère contagieuse (isoniazide puis BCG), allaitement maintenu ; contraception non hormonale sous rifampicine.',
    },
    {
      slug: 'vaccination-pendant-la-grossesse',
      protocoles: ['OMS — Tetanus vaccines: WHO position paper (2017)', 'OMS — Note de synthèse sur la vaccination des femmes enceintes (grippe, COVID-19)'],
      verifie:
        'Td : 2 doses à 4 semaines chez la femme jamais vaccinée (la 2e au moins 2 semaines avant l’accouchement), 5 doses pour une protection à vie ; grippe et COVID-19 ; dTca là où il est disponible ; hépatite B si à risque ; vaccins vivants reportés (RR, varicelle, BCG), fièvre jaune seulement en épidémie ; vaccination accidentelle : rassurer.',
    },
    {
      slug: 'vih-et-grossesse',
      protocoles: ['OMS — Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring (2021)'],
      verifie:
        'Dépistage au 1er contact et au 3e trimestre ; TLD le jour même y compris au 1er trimestre ; charge virale à 3 mois et à 34–36 SA ; pas de césarienne systématique ; prophylaxie du nouveau-né (névirapine, ou zidovudine + névirapine si haut risque) ; allaitement exclusif sous ARV.',
    },
    {
      slug: 'anasarque-foeto-placentaire',
      protocoles: ['SMFM — Clinical guideline #7: nonimmune hydrops fetalis (2015)'],
      verifie:
        'Définition échographique, Doppler cérébral ; bilan (RAI, Kleihauer, électrophorèse, sérologies dont parvovirus et syphilis, amniocentèse) ; syndrome miroir ; transfusion in utero, antiarythmiques par voie maternelle, pénicilline ; corticoïdes avant 34 SA ; centre spécialisé.',
    },
    {
      slug: 'diagnostic-prenatal',
      protocoles: [
        'ACOG — Practice Bulletin 226: screening for fetal chromosomal abnormalities (2020)',
        'OMS — Prévention et prise en charge de la drépanocytose (dépistage des porteurs)',
      ],
      verifie:
        'Repérage des couples à risque (électrophorèse des deux parents), conseil génétique et consentement ; amniocentèse ou biopsie de trophoblaste en centre spécialisé avec anti-D si rhésus négatif ; annonce et accompagnement.',
    },
    {
      slug: 'echographie-obstetricale-depistage-malformations',
      protocoles: [OMS_CPN, 'ISUOG — Practice guidelines: performance of the routine mid-trimester fetal ultrasound scan (mise à jour 2022)'],
      verifie:
        'Au moins une échographie avant 24 SA ; morphologie à 18–22 SA (malformations majeures, signes d’appel) ; limites ; conduite devant une anomalie (avis spécialisé, naissance dans une structure adaptée) ; prévention (acide folique, diabète, rubéole, tératogènes).',
    },
    {
      slug: 'infections-foetales',
      protocoles: [MSF_OBST, 'SMFM — Consult series on congenital infections (CMV, parvovirus)'],
      verifie:
        'Dépistage maternel (syphilis, VIH, AgHBs) ; signes échographiques ; amniocentèse en centre spécialisé ; traitements maternels selon l’agent (pénicilline, ARV, ténofovir, spiramycine, transfusion in utero du parvovirus) ; nouveau-né.',
    },
    {
      slug: 'surveillance-bien-etre-foetal',
      protocoles: [
        'OMS — Recommendations: intrapartum care for a positive childbirth experience (2018)',
        'FIGO — Consensus guidelines on intrapartum fetal monitoring (2015)',
      ],
      verifie:
        'Diminution des mouvements fœtaux : évaluation le jour même ; auscultation intermittente toutes les 15–30 min en phase active et toutes les 5 min à l’expulsion ; rythme < 110 ou > 160/min, décélérations tardives ; mesures correctrices (décubitus latéral, arrêt de l’ocytocine, correction de l’hypotension, salbutamol en cas d’hypercinésie) puis extraction ; partogramme.',
    },
  ],
};
