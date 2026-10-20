'use strict';

/**
 * Contrôle de conformité — lot C03 : dermatologie, endocrinologie et diabétologie (32 fiches).
 * Doses vérifiées dans le guide clinique MSF (érysipèle, impétigo, mycoses, gale), le consensus
 * international sur les crises hyperglycémiques (Diabetologia/Diabetes Care 2024), la
 * recommandation WAO/EAACI sur l'angio-œdème héréditaire (2021) et l'UKKA (2022).
 */

module.exports = {
  lot: 'C03',
  date: '2026-10-16',
  titre: 'Dermatologie, endocrinologie et diabétologie',
  fiches: [
    {
      slug: 'acne',
      protocoles: [
        'NICE — Acne vulgaris: management (NG198, 2021)',
        'AAD — Guidelines of care for the management of acne vulgaris (2024)',
        'MSF — Guide clinique et thérapeutique',
      ],
      verifie:
        'Classification légère, modérée, sévère ; peroxyde de benzoyle et rétinoïde local en 1re intention ; doxycycline 100 mg/j pendant 3 mois toujours associée au traitement local (pas de monothérapie antibiotique) ; isotrétinoïne par un dermatologue avec contraception ; hyperpigmentation séquellaire sur peau noire et refus des dépigmentants.',
    },
    {
      slug: 'albinisme-protection-cutanee',
      protocoles: [
        'Management of albinism: French guidelines for diagnosis and care (2021)',
        'NCCN — Squamous cell skin cancer / Basal cell skin cancer',
        'ESMO — recommandations sur les cancers cutanés',
      ],
      verifie:
        'Photoprotection vestimentaire et écran à large spectre, éviction solaire de 10 h à 16 h ; examen cutané tous les 3 à 6 mois ; traitement des kératoses actiniques ; exérèse précoce des carcinomes ; prise en charge visuelle et lutte contre la stigmatisation.',
    },
    {
      slug: 'carcinomes-cutanes',
      protocoles: [
        'EADO/EDF/ESTRO — European consensus-based interdisciplinary guidelines on basal cell carcinoma (2023)',
        'EADO/EDF/ESTRO — European guidelines on invasive cutaneous squamous cell carcinoma (2023)',
        'NCCN — Basal cell skin cancer / Squamous cell skin cancer',
      ],
      verifie:
        'Terrains africains (ulcère chronique, cicatrice de brûlure, albinisme) ; biopsie ; marges d’exérèse (4 mm basocellulaire, 6 à 10 mm épidermoïde selon le risque) ; curage si adénopathie envahie ; radiothérapie si inopérable ; prévention.',
    },
    {
      slug: 'cheloides',
      protocoles: [
        'Japan Scar Workshop — Diagnosis and treatment of keloids and hypertrophic scars (consensus 2018)',
        'Updated international clinical recommendations on scar management (2014)',
      ],
      verifie:
        'Triamcinolone intralésionnelle 10–40 mg/mL toutes les 4 à 6 semaines ; compression et silicone ; exérèse toujours associée aux infiltrations ou à la radiothérapie (récidive > 50 % si chirurgie seule) ; prévention chez les sujets à risque.',
    },
    {
      slug: 'complications-depigmentation-volontaire',
      protocoles: [
        'Skin lightening: causes and complications (revue)',
        'OMS — Le mercure dans les produits éclaircissants pour la peau',
        'MSF — Guide clinique et thérapeutique',
      ],
      verifie:
        'Complications des dermocorticoïdes, de l’hydroquinone et du mercure (mycoses, gale, acné, ochronose, vergetures, HTA, diabète, insuffisance surrénalienne, néphropathie mercurielle) ; arrêt progressif des dermocorticoïdes en cas d’usage massif ; arrêt immédiat des produits mercuriels ; approche sans jugement.',
    },
    {
      slug: 'dermatite-atopique-adulte',
      protocoles: [
        'EuroGuiDerm — Guideline on atopic eczema (2022)',
        'NICE — Atopic eczema in under 12s: diagnosis and management (CG57) et fiche CKS de l’adulte',
        'MSF — Guide clinique et thérapeutique',
      ],
      verifie:
        'Émollients quotidiens ; dermocorticoïde jusqu’à blanchiment puis entretien 2 fois par semaine ; activité adaptée au site ; surinfection staphylococcique (cloxacilline ou céfalexine) ; eczéma herpétiforme (aciclovir en urgence) ; arrêt des dépigmentants.',
      corrige:
        'La cétirizine était présentée comme un antihistaminique sédatif : la ligne distingue désormais l’antihistaminique sédatif du soir (prométhazine, cure courte) et l’essai d’un mois d’un non sédatif si prurit sévère ou urticaire associée (NICE).',
      corrections: [
        {
          principe: 'Poussées',
          champ: 'details',
          remplacer: [
            '- Antihistaminique sédatif le soir si insomnie (prométhazine, cétirizine)',
            '- Antihistaminique : sédatif le soir en cure courte si le prurit empêche de dormir (prométhazine) ; essai d’un mois d’un antihistaminique non sédatif (cétirizine) si prurit sévère ou urticaire associée',
          ],
        },
      ],
    },
    {
      slug: 'dermatophyties-et-pityriasis-versicolor',
      protocoles: [
        'MSF — Guide clinique et thérapeutique : mycoses superficielles',
        'BAD — Guidelines for the management of tinea capitis (2014)',
        'OMS — Guidelines on the treatment of skin and oral HIV-associated conditions in children and adults (2014)',
      ],
      verifie:
        'Teigne : traitement oral obligatoire (griséofulvine 6 à 8 semaines au repas gras, ou terbinafine), antifongique local associé, dépistage de la fratrie ; dermatophyties de la peau glabre : imidazolé ou pommade de Whitfield 2 à 4 semaines ; pityriasis versicolor : kétoconazole local, fluconazole 300 mg/semaine 2 semaines si étendu ; diagnostic différentiel avec la lèpre.',
      a_arbitrer:
        'Dose de griséofulvine chez l’enfant : la fiche suit 20–25 mg/kg/j (forme microcristalline, teignes à Trichophyton) ; le guide MSF indique 10–20 mg/kg/j (maximum 500 mg/j). Le choix dépend de la forme disponible en RDC.',
    },
    {
      slug: 'dermatoses-associees-au-vih',
      protocoles: [
        'OMS — Guidelines on the treatment of skin and oral HIV-associated conditions in children and adults (2014)',
        'OMS — Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring (2021)',
        'PNLS RDC — Guide national de prise en charge du VIH',
      ],
      verifie:
        'Dermatoses révélatrices (prurigo, zona, candidose, dermite séborrhéique, Kaposi) et test VIH systématique ; TARV dolutégravir + lamivudine + ténofovir ; prurigo (antihistaminique, dermocorticoïde, ivermectine si gale) ; zona aciclovir 800 mg 5 fois par jour 7 jours ; candidose fluconazole ; prophylaxie par cotrimoxazole.',
    },
    {
      slug: 'erysipele-et-cellulite',
      protocoles: [
        'MSF — Guide clinique et thérapeutique : érysipèle et cellulite',
        'NICE — Cellulitis and erysipelas: antimicrobial prescribing (NG141, 2019)',
        'HAS/SPILF — Prise en charge des infections cutanées bactériennes courantes (2019)',
        'IDSA — Practice guidelines for skin and soft tissue infections (2014)',
      ],
      verifie:
        'Diagnostic clinique, signes de fasciite nécrosante (urgence chirurgicale) ; amoxicilline 50 mg/kg/j (1 g 3 fois par jour) 7 jours, forme sévère IV, clindamycine si allergie ; pas d’AINS ; traitement de la porte d’entrée ; prévention des récidives par benzathine pénicilline.',
      corrige:
        'Ajout de la vérification et de la mise à jour de la vaccination antitétanique, demandée par le guide MSF pour toute porte d’entrée cutanée.',
      a_arbitrer:
        'Le guide MSF traite érysipèle et cellulite ensemble par céfalexine ou amoxicilline-acide clavulanique pendant 7 à 10 jours (couverture du staphylocoque) ; la fiche suit la HAS (amoxicilline 7 jours pour l’érysipèle, molécule anti-staphylococcique si cellulite suspecte).',
      corrections: [
        {
          principe: 'Mesures associées',
          champ: 'details',
          remplacer: [
            '- Traiter la porte d’entrée (intertrigo : antifongique)',
            '- Traiter la porte d’entrée (intertrigo : antifongique) ; vérifier et mettre à jour la vaccination antitétanique',
          ],
        },
      ],
    },
    {
      slug: 'gale',
      protocoles: [
        'MSF — Guide clinique et thérapeutique : gale',
        'IACS — Consensus criteria for the diagnosis of scabies (2020)',
        'CDC — Clinical care of scabies (gale croûteuse)',
        'OMS — Scabies (maladie tropicale négligée)',
      ],
      verifie:
        'Diagnostic clinique (critères IACS), gale croûteuse de l’immunodéprimé ; traitement simultané de tous les contacts et du linge ; perméthrine 5 % 8 à 12 h à J1 et J7 ; benzoate de benzyle 25 % dilué chez l’enfant ; ivermectine 200 µg/kg renouvelée à J7–14, non recommandée < 15 kg et pendant la grossesse ; gale croûteuse : ivermectine répétée + traitement local.',
      corrige:
        'Ajout de la précaution liée à la loase, endémique dans une grande partie de la RDC : l’ivermectine expose à une encéphalopathie grave si la microfilarémie de Loa loa est très élevée (guide MSF).',
      corrections: [
        {
          principe: 'Traitement oral',
          champ: 'details',
          remplacer: [
            '- **Ivermectine** 200 µg/kg en dose unique à renouveler à J7–14 (non recommandée < 15 kg et chez la femme enceinte)',
            '- **Ivermectine** 200 µg/kg en dose unique à renouveler à J7–14 (non recommandée < 15 kg et chez la femme enceinte)\n- Zone d’endémie de la loase (une grande partie de la RDC) : avant l’ivermectine, rechercher un antécédent de loase (ver passant sous la conjonctive, œdèmes de Calabar) ou mesurer la microfilarémie de *Loa loa* si possible : risque d’encéphalopathie grave si elle est très élevée',
          ],
        },
      ],
    },
    {
      slug: 'herpes-cutaneo-muqueux',
      protocoles: [
        'OMS — WHO guidelines for the treatment of genital herpes simplex virus (2016)',
        'OMS — Guidelines for the management of symptomatic sexually transmitted infections (2021)',
        'CDC — Sexually Transmitted Infections Treatment Guidelines (2021)',
        'MSF — Guide clinique et thérapeutique : herpès cutané et buccal',
      ],
      verifie:
        'Herpès génital : aciclovir 400 mg 3 fois par jour 7 à 10 jours (primo-infection), 5 jours (récurrence), 400 mg 2 fois par jour en suppressif ; gingivostomatite 15 mg/kg (max 200 mg) 5 fois par jour 7 jours ; aciclovir dès 36 SA, césarienne si lésions au travail ; herpès néonatal 20 mg/kg toutes les 8 h ; approche syndromique des ulcérations génitales et test VIH.',
    },
    {
      slug: 'psoriasis',
      protocoles: [
        'NICE — Psoriasis: assessment and management (CG153)',
        'AAD-NPF — Joint guidelines of care for the management and treatment of psoriasis with systemic nonbiologic therapies (2020)',
        'OMS — Global report on psoriasis (2016)',
      ],
      verifie:
        'Diagnostic clinique, test VIH, rhumatisme psoriasique, facteurs aggravants ; dermocorticoïde fort ± calcipotriol, kératolytiques ; méthotrexate 7,5–25 mg une fois par semaine + acide folique 5 mg par semaine, bilan préalable et surveillance ; jamais de corticoïdes par voie générale.',
      corrige:
        'La biopsie cutanée « si doute » était rattachée à la biopsie cutanée exsangue de l’onchocercose : remplacée par la biopsie avec examen anatomopathologique (correction du 19 octobre 2026).',
      corrections: [
        { retirer: 'examen', examen: 'biopsie-cutanee-exsangue', categorie: 'deuxieme_intention' },
        {
          ajouter: 'examen',
          examen: 'biopsie-histologie',
          categorie: 'deuxieme_intention',
          interpretation: 'Biopsie cutanée si doute diagnostique (formes atypiques).',
        },
      ],
    },
    {
      slug: 'pyodermites',
      protocoles: [
        'MSF — Guide clinique et thérapeutique : impétigo, furoncle et anthrax',
        'NICE — Impetigo: antimicrobial prescribing (NG153, 2020)',
        'HAS/SPILF — Prise en charge des infections cutanées bactériennes courantes (2019)',
      ],
      verifie:
        'Impétigo peu étendu : soins locaux et antibiotique local 5 jours ; étendu (> 2 % de la surface, > 6 lésions selon la HAS ; > 5 lésions selon MSF) ou ecthyma : antibiotique oral 7 jours anti-staphylococcique ; abcès : incision et drainage ; furoncle du visage ; recherche de diabète et de VIH ; protéinurie à distance (glomérulonéphrite).',
    },
    {
      slug: 'toxidermies-graves',
      protocoles: [
        'BAD — UK guidelines for the management of Stevens-Johnson syndrome/toxic epidermal necrolysis in adults (2016)',
        'OMS — Consolidated HIV guidelines (cotrimoxazole, névirapine)',
        'MSF — Guide clinique et thérapeutique',
      ],
      verifie:
        'Définitions (SJS < 10 %, chevauchement 10–30 %, NET > 30 %) ; médicaments en cause ; score SCORTEN ; arrêt immédiat et définitif, déclaration de pharmacovigilance ; soins de type brûlé, soins oculaires, antalgie ; pas d’antibiotique systématique ; traitements immunomodulateurs non consensuels ; DRESS : corticoïdes si atteinte viscérale.',
    },
    {
      slug: 'tungose',
      protocoles: [
        'Tungiasis — a neglected disease with many challenges for global public health (Feldmeier et al., 2014)',
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
      ],
      verifie:
        'Diagnostic clinique ; extraction stérile de la puce entière ; antiseptique et vaccination antitétanique ; diméticone topique dans les infestations massives ; antibiotiques si surinfection ; prévention (chaussures fermées, sols, animaux).',
    },
    {
      slug: 'urticaire-et-angio-oedeme',
      protocoles: [
        'EAACI/GA²LEN/EuroGuiDerm/APAAACI — International guideline for urticaria (2021)',
        'WAO/EAACI — International guideline for the management of hereditary angioedema (révision 2021)',
        'Resuscitation Council UK — Emergency treatment of anaphylaxis (2021)',
      ],
      verifie:
        'Anaphylaxie : adrénaline 0,5 mg IM (0,01 mg/kg chez l’enfant) répétée après 5 min, remplissage, salbutamol, surveillance ; urticaire aiguë : antihistaminique H1 non sédatif ; urticaire chronique : jusqu’à 4 fois la dose standard puis omalizumab ; angio-œdème sans urticaire : bradykinique.',
      corrige:
        'Angio-œdème bradykinique : l’acide tranexamique était proposé pour traiter la crise ; la recommandation WAO/EAACI 2021 le déconseille en traitement de crise (bénéfice nul ou minime). Traitement de crise de l’angio-œdème héréditaire : concentré de C1-inhibiteur ou icatibant, à défaut plasma.',
      corrections: [
        {
          principe: 'Angio-œdème bradykinique',
          champ: 'details',
          remplacer: [
            '- Arrêt définitif des IEC ; antihistaminiques et corticoïdes inefficaces ; acide tranexamique ou traitements spécifiques en centre spécialisé',
            '- Arrêt définitif des IEC ; antihistaminiques et corticoïdes inefficaces ; priorité à la liberté des voies aériennes (intubation précoce si atteinte laryngée)\n- Crise d’angio-œdème héréditaire : concentré de C1-inhibiteur ou icatibant ; à défaut, plasma frais congelé ; l’acide tranexamique ne traite pas la crise (WAO/EAACI 2021)\n- Suivi en centre spécialisé',
          ],
        },
      ],
    },
    {
      slug: 'zona',
      protocoles: [
        'OMS — Guidelines on the treatment of skin and oral HIV-associated conditions in children and adults (2014)',
        'MSF — Guide clinique et thérapeutique : zona',
      ],
      verifie:
        'Diagnostic clinique, test VIH chez l’adulte jeune, zona ophtalmique (avis ophtalmologique) ; aciclovir 800 mg 5 fois par jour 7 jours ou valaciclovir 1 g 3 fois par jour, dans les 72 h et toujours chez l’immunodéprimé ; aciclovir IV 10 mg/kg toutes les 8 h si forme grave ; douleurs neuropathiques (amitriptyline 10–25 mg).',
    },
    {
      slug: 'acidocetose-diabetique',
      protocoles: [
        'ADA/EASD/JBDS/AACE/DTS — Hyperglycaemic crises in adults with diabetes: a consensus report (Diabetes Care, Diabetologia 2024)',
        'JBDS — The management of diabetic ketoacidosis in adults (2023)',
        'OMS — IMAI district clinician manual',
      ],
      verifie:
        'Clinique ; réhydratation au NaCl 0,9 % (1 L la 1re heure) ; insuline rapide 0,1 U/kg/h ; glucosé dès glycémie < 2,5 g/L ; relais sous-cutané chevauchant ; facteurs déclenchants (paludisme, infections, rupture d’insuline) ; surveillance horaire ; œdème cérébral.',
      corrige:
        'Alignement sur le consensus international 2024 : critère glycémique abaissé à 2 g/L ou diabète connu (acidocétose euglycémique, notamment sous inhibiteur de SGLT2) ; forme sévère définie par bicarbonates < 10 mmol/L (et non < 5) ou cétonémie > 6 mmol/L ; insuline retardée tant que K < 3,5 mmol/L (et non 3,3) avec potassium dès K < 5,0 ; bicarbonate seulement si pH < 7,0 (et non 6,9).',
      a_arbitrer:
        'Seuil de bicarbonates du diagnostic : la fiche garde < 15 mmol/L (JBDS) ; le consensus 2024 retient < 18 mmol/L (forme légère 15–18).',
      corrections: [
        {
          champ: 'definition',
          remplacer: [
            'hyperglycémie (> 2,5 g/L)',
            'hyperglycémie (≥ 2 g/L, soit 11,1 mmol/L, ou diabète connu quelle que soit la glycémie : environ 10 % des acidocétoses sont euglycémiques, notamment sous inhibiteur de SGLT2)',
          ],
        },
        {
          champ: 'diagnostic',
          remplacer: [
            '- Glycémie > 2,5 g/L, cétonurie ≥ ++',
            '- Glycémie ≥ 2 g/L (11,1 mmol/L) ou diabète connu : une glycémie peu élevée n’exclut pas l’acidocétose (inhibiteur de SGLT2, grossesse, jeûne)\n- Cétonémie (β-hydroxybutyrate) ≥ 3 mmol/L ou cétonurie ≥ ++',
          ],
        },
        {
          champ: 'diagnostic',
          remplacer: [
            '- Sévère : pH < 7,0, bicarbonates < 5, troubles de conscience',
            '- Sévère : pH < 7,0, bicarbonates < 10 mmol/L, cétonémie > 6 mmol/L ou troubles de conscience (stupeur, coma)',
          ],
        },
        {
          examen: 'glycemie',
          categorie: 'confirmation',
          champ: 'interpretation',
          remplacer: [
            '> 2,5 g/L (14 mmol/L).',
            '≥ 2 g/L (11,1 mmol/L) ; parfois moins (acidocétose euglycémique : inhibiteur de SGLT2, grossesse, jeûne).',
          ],
        },
        {
          forme: 'Acidocétose sévère',
          champ: 'paraclinique',
          remplacer: ['- pH < 7,0, bicarbonates < 5', '- pH < 7,0, bicarbonates < 10 mmol/L, cétonémie > 6 mmol/L'],
        },
        {
          principe: 'Potassium',
          champ: 'details',
          remplacer: [
            '- K < 3,3 mmol/L : corriger avant l’insuline\n- K 3,3–5,3 : **KCl** 1,5 à 2 g (20 à 30 mmol) par litre de soluté\n- K > 5,3 : pas de potassium, contrôle à 2 h',
            '- K < 3,5 mmol/L : **KCl** 10 mmol/h et retarder l’insuline jusqu’à K > 3,5 mmol/L\n- K 3,5–5,0 : **KCl** 1,5 à 2 g (20 à 30 mmol) par litre de soluté, objectif K 4–5 mmol/L\n- K > 5,0 : pas de potassium, contrôle à 2 h',
          ],
        },
        {
          principe: 'Bicarbonate',
          champ: 'details',
          remplacer: [
            '- **Bicarbonate de sodium** seulement si pH < 6,9',
            '- **Bicarbonate de sodium** seulement si pH < 7,0, sous contrôle de la kaliémie (consensus 2024)',
          ],
        },
        {
          molecule: 'bicarbonate-de-sodium',
          champ: 'contexte',
          remplacer: ['Seulement si pH < 6,9', 'Seulement si pH < 7,0'],
        },
      ],
    },
    {
      slug: 'diabete-type-1-adulte',
      protocoles: [
        'NICE — Type 1 diabetes in adults: diagnosis and management (NG17)',
        'ADA — Standards of Care in Diabetes (2025)',
        'OMS — HEARTS-D / PEN : diabète',
      ],
      verifie:
        'Critères diagnostiques OMS ; arguments pour un type 1 (cétose, amaigrissement, anti-GAD, peptide C) ; diabète cétosique africain en différentiel ; basal-bolus 0,5–0,7 U/kg/j dont 40 à 50 % en basal ; objectifs glycémiques et HbA1c < 7 % ; éducation (hypoglycémie, jours de maladie, conservation de l’insuline) ; dépistage annuel des complications.',
    },
    {
      slug: 'diabete-type-2',
      protocoles: [
        'ADA — Standards of Care in Diabetes (2025)',
        'OMS — Guidelines on second- and third-line medicines and type of insulin (2018) et PEN (2020)',
        'NICE — Type 2 diabetes in adults: management (NG28)',
      ],
      verifie:
        'Critères diagnostiques ADA ; metformine en 1re intention progressive ; inhibiteur de SGLT2 ou agoniste du GLP-1 si maladie cardiovasculaire, rénale ou insuffisance cardiaque ; sulfamide accessible ; insuline si HbA1c > 10 % ou catabolisme ; objectifs individualisés ; statine 40–75 ans ; aspirine en prévention secondaire ; dépistage annuel.',
      corrige:
        'Critère glycémique de l’acidocétose aligné sur le consensus 2024 (≥ 2 g/L ou diabète connu) ; ajout de la consigne de suspendre l’inhibiteur de SGLT2 en cas de maladie aiguë, de jeûne et 3 jours avant une chirurgie programmée (acidocétose euglycémique, ADA).',
      corrections: [
        {
          forme: 'Décompensation hyperglycémique (acidocétose, hyperosmolarité)',
          champ: 'paraclinique',
          remplacer: [
            '- Acidocétose : glycémie > 2,5 g/L, cétonémie > 3 mmol/L',
            '- Acidocétose : glycémie ≥ 2 g/L ou diabète connu (parfois normale sous inhibiteur de SGLT2), cétonémie ≥ 3 mmol/L',
          ],
        },
        {
          principe: 'Intensifier selon le profil du patient',
          champ: 'details',
          remplacer: [
            'indépendamment de l’HbA1c',
            'indépendamment de l’HbA1c ; suspendre l’inhibiteur de SGLT2 en cas de maladie aiguë ou de jeûne et 3 jours avant une chirurgie programmée (risque d’acidocétose à glycémie peu élevée)',
          ],
        },
      ],
    },
    {
      slug: 'dyskaliemies',
      protocoles: [
        'UK Kidney Association — Clinical practice guideline: treatment of acute hyperkalaemia in adults (2022)',
        'KDIGO — Controversies conference on potassium homeostasis (2020)',
        'OMS — IMAI district clinician manual',
      ],
      verifie:
        'Définitions et seuils de gravité ; ECG en premier ; fausse hyperkaliémie ; insuline 10 U + glucose 25 g, salbutamol nébulisé 10–20 mg, bicarbonate si acidose ; épuration (diurétique, résine, dialyse) ; hypokaliémie : KCl per os ou IV ≤ 10–20 mmol/h dilué, magnésium.',
      corrige:
        'Dose de calcium alignée sur l’UKKA 2022 : 30 mL de gluconate de calcium à 10 % (ou 10 mL de chlorure de calcium à 10 %) ; la fiche indiquait 10 mL, dose insuffisante (même correction que la fiche des urgences du dialysé, lot C02).',
      corrections: [
        {
          principe: 'Hyperkaliémie menaçante (ECG anormal ou K ≥ 6,5)',
          champ: 'details',
          remplacer: [
            '- **Gluconate de calcium 10 %** 10 mL IV en 5 à 10 min (à répéter si l’ECG reste anormal)',
            '- **Gluconate de calcium 10 %** 30 mL IV (ou chlorure de calcium 10 % 10 mL) en 5 à 10 min, à répéter si l’ECG reste anormal (UKKA 2022)',
          ],
        },
      ],
    },
    {
      slug: 'dyslipidemies',
      protocoles: [
        'ESC/EAS — Guidelines for the management of dyslipidaemias (2019, mise à jour 2025)',
        'NICE — Cardiovascular disease: risk assessment and reduction, including lipid modification (NG238, 2023)',
        'OMS — HEARTS / PEN (2020)',
      ],
      verifie:
        'Population à dépister ; risque global ; causes secondaires ; statine selon le risque (atorvastatine 10–80 mg, simvastatine 20–40 mg), cibles de LDL de 0,55 à 1 g/L selon le risque, ézétimibe ; interactions avec les ARV ; hypertriglycéridémie sévère : fibrate et prévention de la pancréatite.',
    },
    {
      slug: 'etat-hyperosmolaire-hyperglycemique',
      protocoles: [
        'ADA/EASD/JBDS/AACE/DTS — Hyperglycaemic crises in adults with diabetes: a consensus report (2024)',
        'JBDS — The management of the hyperosmolar hyperglycaemic state in adults (2022)',
      ],
      verifie:
        'Critères (glycémie > 6 g/L, osmolalité > 320, pas d’acidose ni de cétose significatives) ; natrémie corrigée ; NaCl 0,9 % 1 L la 1re heure ; baisse de l’osmolalité de 3 à 8 mOsm/kg/h et de la natrémie ≤ 10 mmol/L par 24 h ; insuline 0,05 U/kg/h après le début de la réhydratation ; glucosé sous 3 g/L ; potassium ; prévention thromboembolique.',
    },
    {
      slug: 'goitre-et-carence-iodee',
      protocoles: [
        'OMS/UNICEF/ICCIDD — Assessment of iodine deficiency disorders and monitoring their elimination (2007)',
        'ETA — European Thyroid Association guidelines for ultrasound malignancy risk stratification of thyroid nodules (EU-TIRADS, 2017)',
        'NICE — Thyroid disease: assessment and management (NG145, 2019)',
      ],
      verifie:
        'Classification OMS du goitre ; TSH et échographie ; cytoponction des nodules EU-TIRADS 4–5 ; sel iodé et huile iodée ; lévothyroxine non recommandée en routine dans le goitre euthyroïdien ; chirurgie si compression ou nodule suspect, calcémie après thyroïdectomie totale.',
    },
    {
      slug: 'hyperthyroidie-basedow',
      protocoles: [
        'ATA — Guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis (2016)',
        'ETA — Guideline for the management of Graves’ hyperthyroidism (2018)',
        'NICE — Thyroid disease: assessment and management (NG145, 2019)',
      ],
      verifie:
        'TSH effondrée, T4L élevée, anticorps anti-récepteur de la TSH ; propranolol ; carbimazole 20–40 mg/j puis dégressif 12 à 18 mois ; propylthiouracile au 1er trimestre de la grossesse ; NFS si fièvre ou angine (agranulocytose) ; traitement radical ; crise thyrotoxique (iode 1 h après l’antithyroïdien, hydrocortisone).',
    },
    {
      slug: 'hypoglycemie-adulte',
      protocoles: [
        'ADA — Standards of Care in Diabetes (2025), section 6',
        'Endocrine Society — Evaluation and management of adult hypoglycemic disorders (2009)',
        'MSF — Guide clinique et thérapeutique : hypoglycémie',
      ],
      verifie:
        'Seuils (0,70 g/L chez le diabétique, 0,55 g/L et triade de Whipple sinon) ; 15 g de sucre et contrôle à 15 min ; glucose 30 % 50 mL ou glucose 10 % 150–250 mL IV ; glucagon 1 mg ; surveillance prolongée sous sulfamide ; causes hors diabète (paludisme grave, quinine, sepsis).',
      corrige:
        'La prévention recommandait la metformine « chez l’insuffisant rénal » sans réserve : elle est contre-indiquée sous 30 mL/min. La ligne précise désormais d’éviter le glibenclamide et de préférer le gliclazide, la metformine seulement si le DFG est ≥ 30 mL/min.',
      corrections: [
        {
          principe: 'Prévention',
          champ: 'details',
          remplacer: [
            '- Préférer le gliclazide ou la metformine chez le sujet âgé et l’insuffisant rénal',
            '- Chez le sujet âgé et l’insuffisant rénal, éviter le glibenclamide : préférer le gliclazide, ou la metformine (sans risque d’hypoglycémie) si le DFG est ≥ 30 mL/min',
          ],
        },
      ],
    },
    {
      slug: 'hyponatremie',
      protocoles: [
        'ESE/ESICM/ERA-EDTA — Clinical practice guideline on diagnosis and treatment of hyponatraemia (2014)',
        'Expert panel — Diagnosis, evaluation and treatment of hyponatremia: expert panel recommendations (2013)',
      ],
      verifie:
        'Démarche (pseudo-hyponatrémie, osmolalité, volémie) ; symptômes sévères : NaCl 3 % 150 mL en 20 min jusqu’à 3 fois, objectif + 5 mmol/L puis ≤ 10 mmol/L par 24 h (≤ 8 si risque de myélinolyse) ; hypovolémie : NaCl 0,9 % ; SIADH : restriction hydrique ; surcorrection : glucosé 5 %.',
    },
    {
      slug: 'hypothyroidie-adulte',
      protocoles: [
        'NICE — Thyroid disease: assessment and management (NG145, 2019)',
        'ATA — Guidelines for the treatment of hypothyroidism (2014)',
        'ATA — Guidelines for the diagnosis and management of thyroid disease during pregnancy and the postpartum (2017)',
      ],
      verifie:
        'TSH élevée, T4L basse ; lévothyroxine 1,6 µg/kg/j, 25 µg/j chez le sujet âgé ou coronarien, TSH 6 à 8 semaines après chaque changement ; grossesse : + 25 à 30 % dès la conception ; hypothyroïdie fruste traitée si TSH > 10 ; coma myxœdémateux (lévothyroxine IV, hydrocortisone).',
    },
    {
      slug: 'insuffisance-surrenalienne-aigue',
      protocoles: [
        'Endocrine Society — Diagnosis and treatment of primary adrenal insufficiency (2016)',
        'Society for Endocrinology — Emergency guidance: acute adrenal insufficiency (adrenal crisis) in adult patients (2016)',
      ],
      verifie:
        'Hydrocortisone 100 mg IV sans attendre puis 50 mg toutes les 6 h ou 200 mg/24 h ; NaCl 0,9 % 1 L en 1 h ; glucose ; cortisolémie avant traitement sans retarder ; relais 15–25 mg/j, fludrocortisone si insuffisance primaire ; doublement sous rifampicine ; règles en cas de maladie et carte.',
    },
    {
      slug: 'nephropathie-diabetique',
      protocoles: [
        'KDIGO — Clinical practice guideline for diabetes management in chronic kidney disease (2022)',
        'ADA — Standards of Care in Diabetes (2025), section 11',
        'NICE — Chronic kidney disease: assessment and management (NG203)',
      ],
      verifie:
        'Dépistage annuel par rapport albumine/créatinine et DFG ; signes d’une autre néphropathie ; inhibiteur de SGLT2 si DFG ≥ 20 ; metformine réduite sous 45 et arrêtée sous 30 ; gliclazide ou insuline aux stades avancés ; préparation de la suppléance.',
      corrige:
        'IEC ou ARA2 : la fiche les imposait « même si la tension est normale » ; KDIGO 2022 les recommande en cas d’albuminurie avec HTA et ne fait que les envisager si la tension est normale. Ajout de la dose maximale tolérée et du contrôle de la kaliémie et de la créatinine 2 à 4 semaines après le début.',
      a_arbitrer:
        'Cible tensionnelle : la fiche garde < 130/80 mmHg (ADA) ; KDIGO 2021 propose une systolique < 120 mmHg si tolérée (même point que la fiche de maladie rénale chronique, lot C02). La finérénone (KDIGO 2022, ADA) n’est pas citée : peu accessible en RDC.',
      corrections: [
        {
          principe: 'Néphroprotection',
          champ: 'details',
          remplacer: [
            '- **IEC** (énalapril, périndopril) ou **ARA2** (losartan) même si la tension est normale, dès la microalbuminurie ; surveiller kaliémie et créatinine',
            '- **IEC** (énalapril, périndopril) ou **ARA2** (losartan) en cas d’albuminurie, à la dose maximale tolérée : recommandé si HTA associée, à envisager si la tension est normale ; kaliémie et créatinine 2 à 4 semaines après le début ou chaque augmentation',
          ],
        },
      ],
    },
    {
      slug: 'obesite-adulte',
      protocoles: [
        'NICE — Overweight and obesity management (NG246, 2025)',
        'OMS — Obesity and overweight (définitions de l’IMC)',
        'ADA — Standards of Care in Diabetes (2025), section 8',
      ],
      verifie:
        'IMC et tour de taille ; bilan des complications ; objectif de perte de 5 à 10 % ; activité ≥ 150 min/semaine ; orlistat ; analogues du GLP-1 ; chirurgie bariatrique si IMC ≥ 40 ou ≥ 35 avec complications (NICE).',
      a_arbitrer:
        'Seuils de chirurgie bariatrique : la fiche suit NICE (IMC ≥ 40, ou ≥ 35 avec complications) ; l’ASMBS/IFSO (2022) les abaisse à IMC ≥ 35 sans condition et ≥ 30 avec maladie métabolique.',
    },
    {
      slug: 'pied-diabetique',
      protocoles: [
        'IWGDF/IDSA — Guidelines on the diagnosis and treatment of diabetes-related foot infections (2023)',
        'IWGDF — Practical guidelines on the prevention and management of diabetes-related foot disease (2023)',
        'NICE — Diabetic foot problems: prevention and management (NG19)',
      ],
      verifie:
        'Examen (probe-to-bone, monofilament, pouls, IPS) ; classification IWGDF de l’infection ; décharge et débridement ; pas d’antibiotique sur plaie non infectée ; infection légère 1 à 2 semaines, ostéite 6 semaines ; revascularisation ; amputation la plus distale ; prévention et éducation.',
    },
  ],
};
