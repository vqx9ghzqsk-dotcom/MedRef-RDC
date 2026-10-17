'use strict';

/**
 * Contrôle de conformité — lot C13 : gynécologie et urogynécologie (31 fiches).
 * IST : recommandations OMS de 2024 (doxycycline préférée à l'azithromycine pour Chlamydia,
 * ceftriaxone 1 g) ; douleur pelvienne chronique : essai GaPP2 (Lancet 2020).
 */

const OMS_IST = 'OMS — Recommendations for the treatment of gonorrhoea, chlamydia, syphilis, trichomonas, M. genitalium and herpes (2024)';
const OMS_SYNDROMES = 'OMS — Guidelines for the management of symptomatic sexually transmitted infections (2021)';
const CDC_IST = 'CDC — Sexually transmitted infections treatment guidelines (2021)';
const NICE_SAIGNEMENTS = 'NICE — Heavy menstrual bleeding: assessment and management (NG88, mise à jour 2021)';
const FIGO_SUA = 'FIGO — Systems for nomenclature and classification of abnormal uterine bleeding (PALM-COEIN, 2018)';
const ACOG_MASSES = 'ACOG — Practice Bulletin 174: evaluation and management of adnexal masses (2016)';
const RCOG_MASSES = 'RCOG — Management of suspected ovarian masses in premenopausal women (GTG 62, 2011)';
const NICE_INCONTINENCE = 'NICE — Urinary incontinence and pelvic organ prolapse in women (NG123, 2019)';
const RCOG_HYPERPLASIE = 'RCOG/BSGE — Management of endometrial hyperplasia (GTG 67, 2016)';

module.exports = {
  lot: 'C13',
  date: '2026-10-16',
  titre: 'Gynécologie et urogynécologie',
  fiches: [
    {
      slug: 'abces-tubo-ovarien',
      protocoles: [CDC_IST, OMS_SYNDROMES],
      verifie:
        'Masse annexielle fébrile, β-hCG, échographie ; hospitalisation, ceftriaxone + doxycycline + métronidazole (ou clindamycine + gentamicine), relais oral, 14 jours ou plus ; drainage si abcès volumineux ou échec à 48–72 h ; rupture : laparotomie ; partenaire.',
    },
    {
      slug: 'adenomyose',
      protocoles: [NICE_SAIGNEMENTS, FIGO_SUA],
      verifie:
        'Ménorragies, dysménorrhée secondaire, utérus globuleux sensible ; échographie, IRM ; AINS, acide tranexamique, DIU au lévonorgestrel en premier choix, progestatifs, pilule en continu ; analogues de la GnRH avant chirurgie ; hystérectomie si échec chez la femme sans désir de grossesse.',
    },
    {
      slug: 'amenorrhees-troubles-du-cycle',
      protocoles: [
        'ASRM — Current evaluation of amenorrhea (Practice Committee, 2008)',
        'Endocrine Society — Functional hypothalamic amenorrhea (2017)',
      ],
      verifie:
        'Définitions ; β-hCG systématique ; TSH, prolactine, FSH/LH, échographie, caryotype si aménorrhée primaire ; traitement selon la cause (SOPK, hyperprolactinémie, hypothyroïdie, synéchies, insuffisance ovarienne) ; information sur l’aménorrhée sous progestatif.',
    },
    {
      slug: 'cervicites',
      protocoles: [OMS_IST, OMS_SYNDROMES, CDC_IST],
      verifie:
        'Clinique souvent muette, col friable, écoulement mucopurulent ; recherche d’une infection haute ; prélèvement, VIH, syphilis, β-hCG, dépistage du col ; métronidazole si trichomonas ; partenaire, préservatifs, abstinence 7 jours.',
      corrige:
        'L’azithromycine figurait en premier contre Chlamydia : l’OMS (2024) préfère la doxycycline 100 mg 2 fois par jour pendant 7 jours, l’azithromycine 1 g restant le choix pendant la grossesse. Mise en cohérence avec les fiches « Infections génitales basses » et « Infection génitale haute ».',
      corrections: [
        {
          champ: 'resume',
          remplacer: [
            'traitement syndromique (ceftriaxone + azithromycine ou doxycycline)',
            'traitement syndromique (ceftriaxone + doxycycline, azithromycine pendant la grossesse)',
          ],
        },
        {
          principe: 'Traitement syndromique',
          champ: 'details',
          remplacer: [
            '- **Ceftriaxone** 1 g IM dose unique + **azithromycine** 1 g dose unique (ou **doxycycline** 100 mg 2 fois par jour 7 jours hors grossesse)',
            '- **Ceftriaxone** 1 g IM dose unique + **doxycycline** 100 mg 2 fois par jour 7 jours (OMS 2024) ; **azithromycine** 1 g dose unique si grossesse ou contre-indication à la doxycycline',
          ],
        },
        { molecule: 'doxycycline', champ: 'ligne', ancienne: 'alternative', valeur: 'premiere' },
        {
          molecule: 'doxycycline',
          champ: 'contexte',
          remplacer: ['Chlamydiose (hors grossesse)', 'Chlamydiose (hors grossesse, OMS 2024)'],
        },
        { molecule: 'azithromycine', champ: 'ligne', ancienne: 'premiere', valeur: 'alternative' },
        { molecule: 'azithromycine', champ: 'contexte', remplacer: ['Chlamydiose', 'Chlamydiose (grossesse)'] },
      ],
    },
    {
      slug: 'condylomes-genitaux',
      protocoles: [CDC_IST, 'OMS — Human papillomavirus vaccines: WHO position paper (2022)'],
      verifie:
        'Diagnostic clinique, biopsie si atypique ; VIH, syphilis, dépistage du col ; podophyllotoxine (pas pendant la grossesse), acide trichloracétique, imiquimod, cryothérapie, exérèse ; vaccination HPV des filles de 9–14 ans ; chez l’enfant, évaluation de protection.',
    },
    {
      slug: 'douleurs-pelviennes-chroniques',
      protocoles: [
        'RCOG — The initial management of chronic pelvic pain (GTG 41, 2012)',
        'GaPP2 — Horne et al., Gabapentin for chronic pelvic pain in women, Lancet 2020',
      ],
      verifie:
        'Anamnèse (violences, IST, chirurgie), examen, échographie, dépistage des IST, schistosomiase ; traitement de la cause ; AINS, traitement hormonal des douleurs cycliques, amitriptyline à faible dose ; prise en charge psychologique et kinésithérapie ; éviter les chirurgies répétées sans indication.',
      corrige:
        'La gabapentine était proposée dans la douleur pelvienne chronique : l’essai GaPP2 (2020) ne montre pas d’efficacité chez la femme sans lésion pelvienne, avec davantage d’effets indésirables ; elle n’est plus discutée qu’en cas de composante neuropathique avérée.',
      corrections: [
        {
          principe: 'Traitement de la douleur',
          champ: 'details',
          remplacer: [
            '- Douleur chronique : **amitriptyline** à faible dose (10–25 mg le soir), gabapentine',
            '- Douleur chronique : **amitriptyline** à faible dose (10–25 mg le soir) ; la gabapentine n’a pas montré d’efficacité dans la douleur pelvienne chronique (essai GaPP2, 2020) et ne se discute qu’en cas de douleur neuropathique avérée',
          ],
        },
        {
          molecule: 'gabapentine',
          champ: 'contexte',
          remplacer: ['Douleur neuropathique', 'Douleur neuropathique avérée seulement (inefficace sinon, GaPP2)'],
        },
      ],
    },
    {
      slug: 'dysmenorrhee',
      protocoles: ['SOGC — Primary dysmenorrhea consensus guideline (2017)', 'ESHRE — Endometriosis guideline (2022)'],
      verifie:
        'Signes orientant vers une cause secondaire ; échographie ; AINS dès le début des règles (ibuprofène, acide méfénamique), contraception hormonale ; traitement de la cause (endométriose, fibromes, adénomyose, infection, DIU au cuivre mal toléré).',
    },
    {
      slug: 'endometriose',
      protocoles: ['ESHRE — Endometriosis guideline (2022)'],
      verifie:
        'Dysménorrhée progressive, dyspareunie profonde, douleurs cycliques digestives ou urinaires, infertilité ; échographie, IRM, cœlioscopie ; AINS, progestatifs en continu ou pilule en continu, analogues de la GnRH avec add-back en 2e intention ; chirurgie et PMA selon le projet ; accompagnement.',
    },
    {
      slug: 'fibromes-uterins',
      protocoles: ['ACOG — Practice Bulletin 228: management of symptomatic uterine leiomyomas (2021)', FIGO_SUA],
      verifie:
        'Classification FIGO, clinique, échographie, Hb ; fer, acide tranexamique 1 g 3 fois par jour, AINS, progestatifs et DIU au lévonorgestrel ; myomectomie si désir de grossesse, hystérectomie sinon ; nécrobiose pendant la grossesse.',
    },
    {
      slug: 'grossesse-extra-uterine',
      protocoles: [
        'NICE — Ectopic pregnancy and miscarriage (NG126, mise à jour 2023)',
        'RCOG/AEPU — Diagnosis and management of ectopic pregnancy (GTG 21, 2016)',
      ],
      verifie:
        'β-hCG devant toute douleur pelvienne ou métrorragie ; échographie et zone de discrimination ; forme rompue : chirurgie en urgence (salpingectomie) ; forme stable : méthotrexate 50 mg/m² si critères (β-hCG < 5 000, pas d’activité cardiaque, suivi), cœlioscopie, abstention si β-hCG basse décroissante ; anti-D ; suivi jusqu’à négativation.',
    },
    {
      slug: 'hydrosalpinx',
      protocoles: [
        'NICE — Fertility problems: assessment and treatment (CG156, mise à jour 2017)',
        'ASRM — Role of tubal surgery in the era of assisted reproductive technology (2021)',
      ],
      verifie:
        'Échographie et hystérosalpingographie ; salpingectomie ou ligature proximale avant FIV ; infection active traitée (ceftriaxone + doxycycline + métronidazole) ; tuberculose génitale ; prévention des IST.',
    },
    {
      slug: 'infection-genitale-haute',
      protocoles: [OMS_IST, CDC_IST],
      verifie:
        'Douleur à la mobilisation utérine, β-hCG, échographie, prélèvements ; ceftriaxone 1 g IM (OMS 2024) + doxycycline et métronidazole 14 jours ; hospitalisation si forme sévère, abcès, grossesse ou échec ; DIU laissé en place si amélioration ; partenaire, réévaluation à 72 h.',
    },
    {
      slug: 'infections-genitales-basses',
      protocoles: [OMS_SYNDROMES, OMS_IST, CDC_IST],
      verifie:
        'Approche syndromique ; métronidazole 500 mg 2 fois par jour 7 jours (vaginose, trichomonase), clotrimazole ou fluconazole (pas pendant la grossesse) ; cervicite : ceftriaxone 1 g + doxycycline 7 jours, azithromycine si grossesse ; partenaire pour la trichomonase et les cervicites seulement.',
    },
    {
      slug: 'kyste-dermoide-ovaire',
      protocoles: [RCOG_MASSES, ACOG_MASSES],
      verifie:
        'Aspect échographique (tubercule de Rokitansky, cône d’ombre) ; marqueurs si masse suspecte ; kystectomie conservatrice sans rupture ; torsion : chirurgie urgente avec conservation de l’ovaire ; grossesse : chirurgie au 2e trimestre si nécessaire.',
    },
    {
      slug: 'kyste-abces-bartholin',
      protocoles: [CDC_IST, OMS_IST],
      verifie:
        'Kyste ou abcès, prélèvement (gonocoque, chlamydia), VIH et syphilis, biopsie après 40 ans ; abstention pour un kyste asymptomatique ; incision-drainage avec marsupialisation ou sonde de Word ; antibiotiques si cellulite, fièvre ou IST.',
      corrige:
        'Antibiotiques d’une IST associée alignés sur l’OMS 2024 : doxycycline contre Chlamydia, l’azithromycine étant réservée à la grossesse.',
      corrections: [
        {
          principe: 'Abcès',
          champ: 'details',
          remplacer: [
            '**ceftriaxone** + **azithromycine** (ou doxycycline) si gonocoque/chlamydia suspectés',
            '**ceftriaxone** + **doxycycline** (azithromycine pendant la grossesse) si gonocoque/chlamydia suspectés',
          ],
        },
        { molecule: 'azithromycine', champ: 'contexte', remplacer: ['Chlamydiose', 'Chlamydiose (grossesse)'] },
      ],
    },
    {
      slug: 'kystes-de-l-ovaire',
      protocoles: [RCOG_MASSES, ACOG_MASSES, 'IOTA — Simple rules and ADNEX model / ACR O-RADS (2020)'],
      verifie:
        'Caractérisation échographique (kyste simple, critères de suspicion IOTA/O-RADS), β-hCG ; kyste simple < 5 cm : contrôle à 6–12 semaines ; chirurgie si persistant, volumineux, suspect ou compliqué ; torsion et rupture hémorragique : urgence.',
      corrige:
        'Le lévonorgestrel était lié à la « prévention des kystes fonctionnels récidivants » sans précision : seule la pilule combinée, en bloquant l’ovulation, peut réduire l’apparition de nouveaux kystes, et aucune pilule n’accélère la disparition d’un kyste existant (Cochrane) ; les progestatifs seuls favorisent au contraire les kystes folliculaires.',
      corrections: [
        {
          principe: 'Kyste simple',
          champ: 'details',
          remplacer: [
            '- Antalgiques si douleur',
            '- Antalgiques si douleur\n- Pas de traitement hormonal : la pilule n’accélère pas la disparition d’un kyste fonctionnel',
          ],
        },
        {
          molecule: 'levonorgestrel',
          champ: 'contexte',
          remplacer: [
            'Contraception (prévention des kystes fonctionnels récidivants)',
            'Pilule combinée (avec éthinylestradiol) : peut réduire les nouveaux kystes fonctionnels, sans effet sur un kyste existant',
          ],
        },
      ],
    },
    {
      slug: 'lichen-sclereux-vulvaire',
      protocoles: ['BAD — Guidelines for the management of lichen sclerosus (2018)'],
      verifie:
        'Clinique, signes d’alerte et biopsie ; clobétasol 0,05 % une fois par jour 1 mois, un jour sur deux 1 mois, deux fois par semaine 1 mois, puis entretien ; émollients ; surveillance à vie (carcinome) ; chez la fillette, ne pas confondre avec des abus.',
    },
    {
      slug: 'malformations-uterines',
      protocoles: [
        'ESHRE/ESGE — Classification of female genital tract congenital anomalies (2013, mise à jour 2016)',
        'ESHRE — Recurrent pregnancy loss guideline (2022)',
      ],
      verifie:
        'Circonstances de découverte ; échographie 3D, hystérosalpingographie, IRM, échographie rénale ; résection hystéroscopique de la cloison, incision de l’hymen imperforé ; pas de chirurgie des utérus bicorne, unicorne ou didelphe ; agénésie : néovagin et accompagnement ; surveillance des grossesses.',
    },
    {
      slug: 'menometrorragies',
      protocoles: [FIGO_SUA, NICE_SAIGNEMENTS],
      verifie:
        'PALM-COEIN, β-hCG, Hb, échographie, biopsie de l’endomètre après 45 ans ; hémorragie aiguë : acide tranexamique, noréthistérone 5 mg 3 fois par jour, transfusion ; traitement de fond : AINS, DIU au lévonorgestrel, progestatifs, pilule, fer.',
    },
    {
      slug: 'menopause',
      protocoles: [
        'NAMS — Hormone therapy position statement (2022)',
        'NAMS — Nonhormone therapy position statement (2023)',
        'FSRH — Contraception for women aged over 40 years (2017, mise à jour 2023)',
      ],
      verifie:
        'Diagnostic clinique, FSH seulement si doute ; exploration de tout saignement après la ménopause ; hygiène de vie, calcium et vitamine D ; œstrogènes locaux ; traitement hormonal avant 60 ans ou dans les 10 ans, avec progestatif si utérus ; alternatives non hormonales ; contraception 12 mois après 50 ans, 24 mois avant ; insuffisance ovarienne prématurée substituée.',
    },
    {
      slug: 'polypes-hyperplasie-endometre',
      protocoles: [RCOG_HYPERPLASIE, 'ACOG — Committee Opinion 734: endometrial thickness in postmenopausal bleeding (2018)'],
      verifie:
        'Endomètre > 4 mm après la ménopause, biopsie, hystéroscopie ; polypectomie ; hyperplasie sans atypie : DIU au lévonorgestrel en premier choix ou progestatifs 6 mois, biopsie de contrôle ; avec atypies : hystérectomie, progestatifs à forte dose si désir de grossesse.',
    },
    {
      slug: 'prolapsus-genital',
      protocoles: [NICE_INCONTINENCE],
      verifie:
        'Examen en poussée, stades ; ECBU, échographie rénale si prolapsus total ; rééducation périnéale, pessaire, œstrogènes locaux ; hystérectomie vaginale avec colporraphies, techniques conservatrices, colpocléisis ; prévention.',
    },
    {
      slug: 'saignements-apres-menopause',
      protocoles: ['ACOG — Committee Opinion 734: endometrial thickness in postmenopausal bleeding (2018)', RCOG_HYPERPLASIE],
      verifie:
        'Spéculum, IVA/frottis, échographie (≤ 4 mm : atrophie probable ; > 4 mm : biopsie de l’endomètre ou hystéroscopie) ; traitement selon la cause ; orientation oncologique rapide.',
    },
    {
      slug: 'syndrome-des-ovaires-polykystiques',
      protocoles: ['International evidence-based guideline for the assessment and management of PCOS (2023)'],
      verifie:
        'Critères de Rotterdam, ≥ 20 follicules par ovaire ou volume > 10 mL ; exclusion des autres causes (TSH, prolactine, 17-OHP) ; dépistage métabolique ; perte de poids, pilule œstroprogestative, progestatif cyclique, metformine, anti-androgène sous contraception ; létrozole en premier choix pour l’ovulation.',
    },
    {
      slug: 'synechies-uterines',
      protocoles: ['AAGL/ESGE — Practice guidelines on management of intrauterine adhesions (2017)'],
      verifie:
        'Hypoménorrhée ou aménorrhée après curetage ou infection, tuberculose génitale ; hystérosalpingographie, hystéroscopie ; adhésiolyse hystéroscopique, DIU ou ballonnet, œstrogènes avec progestatif ; prévention par l’AMIU ou le misoprostol plutôt que le curetage.',
    },
    {
      slug: 'torsion-d-annexe',
      protocoles: ['ACOG — Committee Opinion 783: adnexal torsion in adolescents (2019)', ACOG_MASSES],
      verifie:
        'Douleur brutale latéralisée avec vomissements, β-hCG, échographie (un flux Doppler conservé n’élimine pas la torsion) ; chirurgie en urgence avec détorsion et conservation de l’ovaire même d’aspect sombre ; annexectomie seulement si nécrose franche ou tumeur suspecte après la ménopause.',
    },
    {
      slug: 'ulcerations-genitales',
      protocoles: [OMS_SYNDROMES, OMS_IST, CDC_IST],
      verifie:
        'Orientation clinique (herpès, chancre syphilitique, chancre mou, donovanose, LGV), biopsie d’une ulcération chronique ; traitement syndromique : benzathine pénicilline 2,4 MUI + azithromycine 1 g (ou ciprofloxacine hors grossesse) + aciclovir si herpès ; LGV et donovanose : doxycycline ou azithromycine 3 semaines ; partenaire, contrôle à 7 jours.',
    },
    {
      slug: 'violences-sexuelles',
      protocoles: [
        'OMS/HCR — Clinical management of rape and intimate partner violence survivors (2020)',
        'OMS — Guidelines for HIV post-exposure prophylaxis (2024)',
        CDC_IST,
      ],
      verifie:
        'Accueil centré sur la survivante, consentement, documentation ; PPE (ténofovir + lamivudine + dolutégravir, 28 jours, avant 72 h) ; contraception d’urgence (lévonorgestrel, ulipristal, DIU au cuivre) ; prévention des IST, vaccin hépatite B et antitétanique ; certificat gratuit, soutien psychosocial, suivi à 2 et 6 semaines, 3 et 6 mois.',
      corrige:
        'Le métronidazole était différé « après le 1er trimestre » chez la femme enceinte : il est utilisable à tous les termes de la grossesse (aucun effet tératogène retrouvé, CDC 2021), comme l’indiquent déjà les fiches « Médicaments et grossesse » et « Infections génitales basses ».',
      corrections: [
        {
          principe: 'Prévention des IST et vaccinations',
          champ: 'details',
          remplacer: [
            '**métronidazole** 2 g (après le 1er trimestre si enceinte)',
            '**métronidazole** 2 g (utilisable pendant toute la grossesse)',
          ],
        },
      ],
    },
    {
      slug: 'fistules-obstetricales',
      protocoles: [
        'OMS — Fistule obstétricale : principes directeurs pour la prise en charge clinique et le développement des programmes (2009)',
        'MSF — Soins obstétricaux et néonatals essentiels : prévention et traitement des fistules vaginales',
      ],
      verifie:
        'Clinique, test au bleu de méthylène, atteintes associées ; sonde vésicale 14 jours après un travail prolongé, 3–4 semaines pour une petite fistule récente ; réparation vaginale par un chirurgien formé après 3 mois ; soins, réinsertion, césarienne programmée à la grossesse suivante ; prévention.',
    },
    {
      slug: 'incontinence-urinaire-femme',
      protocoles: [NICE_INCONTINENCE],
      verifie:
        'Type d’incontinence, catalogue mictionnel, bandelette, ECBU, résidu ; rééducation périnéale au moins 3 mois, perte de poids, gestion des boissons ; urgenterie : rééducation vésicale, anticholinergiques avec prudence chez la personne âgée, œstrogènes locaux ; effort : bandelette sous-urétrale si échec.',
    },
    {
      slug: 'infections-urinaires-recidivantes-femme',
      protocoles: [
        'EAU — Guidelines on urological infections (2024)',
        'AUA/CUA/SUFU — Recurrent uncomplicated urinary tract infections in women (2019, mise à jour 2022)',
      ],
      verifie:
        'Définition (2 en 6 mois, 3 en 12 mois), ECBU à chaque épisode, bilan si atypique (échographie, glycémie, schistosomes) ; fosfomycine 3 g ou nitrofurantoïne 5 jours ; hydratation, œstrogènes vaginaux après la ménopause ; antibioprophylaxie post-coïtale ou continue (nitrofurantoïne, fosfomycine tous les 10 jours, cotrimoxazole selon sensibilité).',
    },
  ],
};
