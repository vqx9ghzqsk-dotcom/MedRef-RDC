'use strict';

/**
 * Contrôle de conformité — lot C14 : gynécologie oncologique, sénologie, fertilité, génétique et
 * immuno-rhumatologie pédiatrique (27 fiches).
 * Insuffisance ovarienne prématurée : recommandation ESHRE/ASRM/IMS de 2024 (un seul dosage de FSH) ;
 * dépistage du cancer du col : OMS 2021.
 */

const OMS_COL = 'OMS — Guideline for screening and treatment of cervical pre-cancer lesions for cervical cancer prevention (2e édition, 2021)';
const OMS_HPV = 'OMS — Human papillomavirus vaccines: WHO position paper (2022)';
const FIGO_2021 = 'FIGO — Cancer report 2021 (cancers gynécologiques)';
const ESMO = 'ESMO — Clinical practice guidelines (cancers gynécologiques et du sein)';
const PCOS_2023 = 'International evidence-based guideline for the assessment and management of PCOS (2023)';
const NICE_FERTILITE = 'NICE — Fertility problems: assessment and treatment (CG156, mise à jour 2017)';

module.exports = {
  lot: 'C14',
  date: '2026-10-16',
  titre: 'Gynécologie oncologique, sénologie, fertilité, génétique, immuno-rhumatologie pédiatrique',
  fiches: [
    {
      slug: 'cancer-endometre',
      protocoles: [FIGO_2021, 'ESGO/ESTRO/ESP — Guidelines for the management of patients with endometrial carcinoma (2021)'],
      verifie:
        'Saignement après la ménopause, endomètre > 4 mm, biopsie, bilan d’extension ; hystérectomie totale avec annexectomie bilatérale ± curage ; radiothérapie selon les facteurs de risque, carboplatine-paclitaxel dans les formes avancées, progestatifs chez la femme inopérable ; prévention.',
    },
    {
      slug: 'cancer-ovaire',
      protocoles: [FIGO_2021, 'ESMO-ESGO — Consensus conference recommendations on ovarian cancer (2019)'],
      verifie:
        'Symptômes vagues, masse complexe, ascite, CA 125 (et AFP, β-hCG, LDH chez la femme jeune) ; chirurgie de stadification et de cytoréduction complète, conservatrice chez la femme jeune ; carboplatine + paclitaxel 6 cycles, BEP pour les tumeurs germinales ; soins palliatifs.',
    },
    {
      slug: 'cancer-vulve',
      protocoles: [FIGO_2021, 'ESGO — Guidelines for the management of patients with vulvar cancer (mise à jour 2023)'],
      verifie:
        'Lésion vulvaire persistante (lichen scléreux, HPV, VIH), biopsie, examen du col, du vagin et de l’anus ; exérèse large, ganglion sentinelle ou curage inguinal, radiothérapie ± cisplatine ; prévention par la vaccination HPV et la surveillance du lichen.',
    },
    {
      slug: 'cancer-du-col-de-l-uterus',
      protocoles: [OMS_COL, OMS_HPV, FIGO_2021],
      verifie:
        'Clinique, biopsie, stade FIGO ; vaccination HPV des filles de 9–14 ans (1 à 2 doses) ; test HPV dès 30 ans tous les 5–10 ans, dès 25 ans tous les 3–5 ans chez la femme vivant avec le VIH ; ablation thermique le jour même ; hystérectomie élargie ou radio-chimiothérapie au cisplatine hebdomadaire avec curiethérapie ; soins palliatifs (morphine).',
    },
    {
      slug: 'cancer-du-sein',
      protocoles: [ESMO, 'Breast Health Global Initiative — Resource-stratified guidelines', 'OMS — Global Breast Cancer Initiative (2023)'],
      verifie:
        'Triple diagnostic (examen, imagerie, biopsie avec récepteurs et HER2), bilan d’extension ; mastectomie ou chirurgie conservatrice avec radiothérapie ; AC puis paclitaxel, tamoxifène 5–10 ans avant la ménopause ou anti-aromatase après, trastuzumab si HER2 ; soins de support.',
    },
    {
      slug: 'cancer-vagin',
      protocoles: [FIGO_2021],
      verifie:
        'Éliminer une extension d’un cancer du col ou de la vulve ; spéculum tourné, biopsie, bilan d’extension ; radiothérapie et curiethérapie ± cisplatine, chirurgie des petites lésions du tiers supérieur ; dépistage du fond vaginal après hystérectomie pour lésion précancéreuse.',
    },
    {
      slug: 'depistage-cancer-du-col',
      protocoles: [OMS_COL, OMS_HPV],
      verifie:
        'Test HPV préféré (auto-prélèvement possible) ou IVA, dès 30 ans (25 ans si VIH), intervalles ; triage d’un test HPV positif ; thermocoagulation ou cryothérapie le jour même si lésion éligible, RAD sinon ; contrôle à 12 mois ; abstinence ou préservatif 4 semaines.',
    },
    {
      slug: 'lesions-precancereuses-col',
      protocoles: [OMS_COL, OMS_HPV],
      verifie:
        'Dépistage (test HPV préféré, IVA), évaluation d’un dépistage positif ; ablation thermique ou cryothérapie si lésion éligible, RAD ou conisation sinon, biopsie si suspicion de cancer ; contrôle à 12 mois ; vaccination HPV.',
      corrige:
        'Le résumé indiquait un dépistage « dès le diagnostic, tous les 3 ans » chez la femme vivant avec le VIH : l’OMS (2021) le fait débuter à 25 ans, tous les 3 à 5 ans, comme l’écrit déjà le diagnostic de la fiche.',
      corrections: [
        {
          champ: 'resume',
          remplacer: [
            'femme VIH : dépistage dès le diagnostic, tous les 3 ans',
            'femme vivant avec le VIH : dépistage dès 25 ans, tous les 3 à 5 ans (OMS 2021)',
          ],
        },
      ],
    },
    {
      slug: 'sarcomes-uterins',
      protocoles: [ESMO, 'OMS — Classification des tumeurs de l’appareil génital féminin (5e édition, 2020)'],
      verifie:
        'Masse utérine à croissance rapide, surtout après la ménopause ; échographie, IRM, biopsie ; carcinosarcome classé parmi les carcinomes ; hystérectomie en bloc sans morcellement ; doxorubicine dans les formes avancées, hormonothérapie des sarcomes du stroma de bas grade.',
    },
    {
      slug: 'tumeurs-trophoblastiques-gestationnelles',
      protocoles: [FIGO_2021, 'RCOG — Management of gestational trophoblastic disease (GTG 38, 2020)'],
      verifie:
        'Diagnostic sur la β-hCG (plateau sur 3 semaines, hausse sur 2 semaines), bilan des métastases sans biopsie des lésions vaginales, score FIGO/OMS ; faible risque : méthotrexate (1 mg/kg J1-J3-J5-J7 avec acide folinique) ou dactinomycine, consolidation ; haut risque : EMA-CO ; suivi de la β-hCG et contraception.',
      a_arbitrer:
        'La fiche retient encore la β-hCG « persistante > 6 mois » parmi les critères de tumeur. Des travaux du centre de Charing Cross (Agarwal et al., 2012) montrent qu’une β-hCG encore positive mais en baisse à 6 mois se normalise le plus souvent sans chimiothérapie, et ce critère a été abandonné par plusieurs équipes. Je n’ai pas pu vérifier la formulation exacte du RCOG (2020) : faut-il retirer ce critère ou le nuancer (« sauf si la β-hCG continue de baisser ») ?',
    },
    {
      slug: 'abces-sein-hors-allaitement',
      protocoles: ['MSF — Guide clinique et thérapeutique : infections cutanées et des tissus mous', ESMO],
      verifie:
        'Abcès péri-aréolaire de la fumeuse, diagnostics différentiels (cancer inflammatoire, tuberculose, mastite granulomateuse), biopsie si doute ; ponction-aspiration répétée ou incision ; amoxicilline-acide clavulanique ou cloxacilline + métronidazole 10–14 jours ; arrêt du tabac, exérèse des canaux si fistule.',
    },
    {
      slug: 'ecoulement-mamelonnaire',
      protocoles: ['ACR — Appropriateness criteria: evaluation of nipple discharge (2022)', 'Endocrine Society — Diagnosis and treatment of hyperprolactinemia (2011)'],
      verifie:
        'Caractéristiques (uni- ou bilatéral, uni- ou multi-orifice, spontané, sanglant) ; β-hCG, prolactine, TSH, imagerie ; galactorrhée : traiter la cause (médicament, hypothyroïdie, prolactinome) ; écoulement suspect : exérèse du canal.',
    },
    {
      slug: 'mastodynies',
      protocoles: ['ACR — Appropriateness criteria: breast pain (2018)'],
      verifie:
        'Douleur cyclique ou non cyclique, examen, imagerie si douleur localisée persistante ou après 35 ans ; explications, soutien-gorge adapté, paracétamol et AINS ; adaptation de la contraception ; pas de danazol ni d’analogue de la GnRH sans avis spécialisé.',
    },
    {
      slug: 'tumeurs-benignes-sein',
      protocoles: ['ACR — Appropriateness criteria: palpable breast masses (2022)', 'Breast Health Global Initiative — Resource-stratified guidelines'],
      verifie:
        'Triple test (examen, échographie avant 35 ans ou mammographie et échographie après, cytoponction ou microbiopsie) ; fibroadénome typique surveillé à 6 mois, exérèse si > 3 cm, croissance rapide ou doute ; ponction des kystes symptomatiques ; exérèse large d’une tumeur phyllode.',
    },
    {
      slug: 'assistance-medicale-procreation',
      protocoles: [NICE_FERTILITE, PCOS_2023, 'ESHRE — Ovarian stimulation for IVF/ICSI guideline (2019)'],
      verifie:
        'Bilan du couple (réserve ovarienne, HSG, spermogramme, sérologies) ; létrozole ou clomifène pour l’anovulation, insémination, FIV, ICSI ; soutien lutéal ; transfert d’un seul embryon, prévention et prise en charge de l’hyperstimulation ; échographie précoce (GEU).',
    },
    {
      slug: 'infertilite-du-couple',
      protocoles: [NICE_FERTILITE, PCOS_2023],
      verifie:
        'Définition (12 mois, 6 mois après 35 ans) ; bilan des deux partenaires (ovulation, hormones, échographie, HSG, spermogramme, sérologies) ; hyperprolactinémie, chirurgie des fibromes et synéchies, chirurgie tubaire ou FIV ; hygiène de vie, acide folique ; prévention de l’infertilité tubaire.',
      corrige:
        'Le clomifène figurait en premier pour induire l’ovulation : dans le syndrome des ovaires polykystiques, première cause d’anovulation, le létrozole est le traitement de premier choix (recommandations internationales 2023), comme l’indiquent déjà les fiches « SOPK » et « Assistance médicale à la procréation ».',
      corrections: [
        {
          principe: 'Traiter la cause',
          champ: 'details',
          remplacer: [
            '- Anovulation : **clomifène** 50–150 mg/j de J2 à J6, ou **létrozole** (syndrome des ovaires polykystiques), surveillance échographique',
            '- Anovulation : **létrozole** 2,5–7,5 mg/j de J3 à J7 en premier choix dans le syndrome des ovaires polykystiques, ou **clomifène** 50–150 mg/j de J2 à J6 ; surveillance échographique',
          ],
        },
        { molecule: 'letrozole', champ: 'ligne', ancienne: 'alternative', valeur: 'premiere' },
        {
          molecule: 'letrozole',
          champ: 'contexte',
          remplacer: ['Syndrome des ovaires polykystiques', 'Induction de l’ovulation (premier choix dans le SOPK)'],
        },
        { molecule: 'clomifene', champ: 'ligne', ancienne: 'premiere', valeur: 'alternative' },
      ],
    },
    {
      slug: 'infertilite-masculine',
      protocoles: [
        'OMS — Laboratory manual for the examination and processing of human semen (6e édition, 2021)',
        'EAU — Guidelines on sexual and reproductive health: male infertility (2024)',
      ],
      verifie:
        'Antécédents et examen (testicules, déférents, varicocèle) ; deux spermogrammes après 2–7 jours d’abstinence, échographie scrotale, bilan hormonal, caryotype si azoospermie ; traitement des infections, cure de varicocèle si anomalie du sperme, pas de testostérone en cas de désir d’enfant ; insémination, FIV-ICSI.',
    },
    {
      slug: 'infertilite-tubaire',
      protocoles: [NICE_FERTILITE, 'ASRM — Role of tubal surgery in the era of assisted reproductive technology (2021)'],
      verifie:
        'Hystérosalpingographie hors infection, cœlioscopie avec épreuve au bleu ; chirurgie tubaire des lésions distales modérées, cathétérisme des obstructions proximales ; FIV en cas d’obstruction bilatérale, salpingectomie préalable des hydrosalpinx ; prévention des IST.',
    },
    {
      slug: 'insuffisance-ovarienne-prematuree',
      protocoles: ['ESHRE/ASRM/CRE/IMS — Evidence-based guideline: premature ovarian insufficiency (2024)'],
      verifie:
        'Clinique, β-hCG, FSH, œstradiol, AMH, caryotype et prémutation FMR1, auto-immunité, densitométrie ; traitement hormonal substitutif jusqu’à 50 ans ; information sur la fertilité (don d’ovocytes), préservation avant chimiothérapie ; calcium, vitamine D, soutien.',
      corrige:
        'Diagnostic aligné sur la recommandation ESHRE/ASRM/IMS de 2024 : un seul dosage de FSH > 25 UI/L suffit chez une femme ayant des troubles du cycle depuis au moins 4 mois ; le dosage n’est répété (ou l’AMH mesurée) qu’en cas de doute.',
      corrections: [
        {
          champ: 'resume',
          remplacer: ['FSH élevée (> 25 UI/L à deux reprises)', 'FSH élevée (> 25 UI/L, un dosage suffit)'],
        },
        {
          champ: 'definition',
          remplacer: [
            'une FSH élevée (> 25 UI/L) sur deux dosages à 4 semaines d’intervalle.',
            'une FSH élevée (> 25 UI/L) ; un seul dosage suffit, à répéter ou à compléter par l’AMH en cas de doute (ESHRE 2024).',
          ],
        },
        {
          champ: 'diagnostic',
          remplacer: [
            '- **FSH** élevée (> 25 UI/L) à deux reprises, œstradiol bas, **AMH** basse',
            '- **FSH** élevée (> 25 UI/L ; un dosage suffit, à répéter si doute), œstradiol bas, **AMH** basse',
          ],
        },
      ],
    },
    {
      slug: 'albinisme-enfant',
      protocoles: ['ONU — Expert indépendant sur l’albinisme : santé et protection (rapports 2016–2023)', 'OMS — Global Solar UV Index : guide pratique de protection solaire (2002)'],
      verifie:
        'Clinique (peau, cheveux, iris, nystagmus, photophobie) ; protection solaire dès la naissance (vêtements, chapeau, écran indice ≥ 30 renouvelé toutes les 2 h, éviter le soleil de 10 à 16 h) ; correction visuelle et adaptation scolaire ; examen de la peau tous les 6–12 mois, biopsie des lésions suspectes ; protection contre les violences.',
    },
    {
      slug: 'erreurs-innees-du-metabolisme',
      protocoles: ['Saudubray JM et al. — Inborn metabolic diseases: diagnosis and treatment (7e édition, 2022)', 'BIMDG — Emergency guidelines'],
      verifie:
        'Situations d’alerte (intervalle libre, hypoglycémie sans cétose, acidose, odeur anormale) ; glycémie, gaz du sang, lactates, ammoniémie, cétonurie, prélèvements conservés ; arrêt des protéines, glucose 10 % à 8–10 mg/kg/min, correction de l’acidose, épuration en centre ; plan d’urgence, conseil génétique.',
    },
    {
      slug: 'syndrome-de-turner',
      protocoles: ['International Turner Syndrome Consensus Group — Clinical practice guidelines (2024)'],
      verifie:
        'Clinique selon l’âge, caryotype sur au moins 30 mitoses ; échocardiographie, échographie rénale, TSH, audiométrie ; hormone de croissance ; induction pubertaire par œstrogènes vers 11–12 ans puis progestatif ; suivi cardiovasculaire à vie, gonadectomie si matériel Y.',
    },
    {
      slug: 'trisomie-21',
      protocoles: ['AAP — Health supervision for children and adolescents with Down syndrome (2022)'],
      verifie:
        'Clinique néonatale, caryotype ; échocardiographie dès la naissance, chirurgie du canal atrio-ventriculaire avant 6 mois ; TSH à la naissance, à 6 mois puis chaque année ; audition, vision, croissance ; stimulation précoce, scolarisation inclusive, conseil génétique.',
    },
    {
      slug: 'arthrite-juvenile-idiopathique',
      protocoles: ['ACR — Guideline for the treatment of juvenile idiopathic arthritis (2019, 2021)', 'ILAR — Classification of juvenile idiopathic arthritis'],
      verifie:
        'Classification ILAR, diagnostic d’élimination (arthrite septique, RAA, drépanocytose, tuberculose, leucémie) ; ibuprofène 30–40 mg/kg/j, infiltrations, méthotrexate 10–15 mg/m²/semaine avec acide folique ; forme systémique : corticoïdes, syndrome d’activation macrophagique ; examen ophtalmologique tous les 3–6 mois.',
    },
    {
      slug: 'deficits-immunitaires-primitifs',
      protocoles: ['IUIS — Classification of inborn errors of immunity (2022)', 'Jeffrey Modell Foundation — Signes d’alerte des déficits immunitaires'],
      verifie:
        'Signes d’alerte, VIH et malnutrition éliminés ; NFS (lymphopénie < 3 000/mm³ chez le nourrisson), immunoglobulines, sous-populations ; cotrimoxazole, pas de vaccins vivants dans les déficits cellulaires ; immunoglobulines 400–600 mg/kg toutes les 3–4 semaines ; greffe dans les déficits combinés sévères.',
    },
    {
      slug: 'lupus-enfant',
      protocoles: ['SHARE — Recommendations for the diagnosis and management of childhood-onset SLE (2017)', 'EULAR — Recommendations for the management of SLE (2023)'],
      verifie:
        'Atteintes cliniques, AAN, anti-ADN, C3–C4, bandelette et protéinurie ; hydroxychloroquine 5 mg/kg/j (max 400 mg) pour tous, photoprotection ; corticoïdes, cyclophosphamide ou mycophénolate puis azathioprine selon l’atteinte ; IEC si protéinurie ; pas de vaccins vivants sous immunosuppresseurs.',
    },
    {
      slug: 'purpura-rhumatoide',
      protocoles: ['SHARE — European consensus-based recommendations for IgA vasculitis (2019)'],
      verifie:
        'Purpura infiltré avec plaquettes normales, arthralgies, douleurs abdominales (invagination), atteinte rénale ; traitement symptomatique, AINS si fonction rénale normale ; prednisolone 1–2 mg/kg/j si douleurs abdominales sévères ; bandelette et tension pendant au moins 6 mois, avis néphrologique si protéinurie importante.',
    },
  ],
};
