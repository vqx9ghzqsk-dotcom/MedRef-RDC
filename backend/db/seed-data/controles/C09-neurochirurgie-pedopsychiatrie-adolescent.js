'use strict';

/**
 * Contrôle de conformité — lot C09 : neurochirurgie, neurotraumatologie, psychiatrie de l'enfant
 * et de l'adolescent, santé de l'adolescent (32 fiches).
 */

const MHGAP = 'OMS — mhGAP Intervention Guide 2.0 (2016) et lignes directrices mhGAP (mise à jour 2023)';
const BTF_CHIR = 'Brain Trauma Foundation — Guidelines for the surgical management of traumatic brain injury (2006)';
const NICE_TC = 'NICE — Head injury: assessment and early management (NG232, 2023)';
const CONCUSSION = 'Consensus statement on concussion in sport — 6th international conference (Amsterdam, 2022)';

module.exports = {
  lot: 'C09',
  date: '2026-10-16',
  titre: 'Neurochirurgie, neurotraumatologie, psychiatrie de l’enfant et santé de l’adolescent',
  fiches: [
    {
      slug: 'abces-cerebral',
      protocoles: ['ESCMID — Guideline on the management of brain abscess (2024)'],
      verifie:
        'Céphalées, fièvre inconstante, déficit ; scanner injecté (cocarde), pas de ponction lombaire ; ceftriaxone 2 g toutes les 12 h + métronidazole, vancomycine si post-traumatique ou postopératoire ; 6 à 8 semaines ; ponction-aspiration des abcès > 2,5 cm ; porte d’entrée ; antitoxoplasmique d’épreuve chez le PVVIH ; dexaméthasone seulement si œdème menaçant.',
    },
    {
      slug: 'compression-medullaire',
      protocoles: [
        'NICE — Spinal metastases and metastatic spinal cord compression (NG234, 2023)',
        'OMS — Consolidated guidelines on tuberculosis (mal de Pott)',
      ],
      verifie:
        'Douleur rachidienne, niveau sensitif, troubles sphinctériens, IRM en urgence ; dexaméthasone 8–16 mg pour les compressions tumorales ; décompression chirurgicale ou radiothérapie ; traitement de la cause (Pott, prostate) ; prévention des complications.',
    },
    {
      slug: 'embarrure',
      protocoles: [BTF_CHIR, NICE_TC],
      verifie:
        'Scanner en fenêtre osseuse ; embarrure ouverte : antibiotiques, antitétanique, parage et réparation durale idéalement < 24 h ; embarrure fermée profonde (> épaisseur de la voûte) ou avec lésion sous-jacente ; prudence près d’un sinus veineux ; prophylaxie anticomitiale de 7 jours dans les formes graves.',
    },
    {
      slug: 'hematome-extradural',
      protocoles: [BTF_CHIR, NICE_TC],
      verifie:
        'Intervalle libre, mydriase homolatérale, lentille biconvexe ; évacuation en extrême urgence si symptomatique ou > 30 mL, trépanation de sauvetage par un chirurgien formé si besoin ; neuroprotection (SpO2, PAS, glycémie, tête à 30°, osmothérapie) ; convulsions.',
    },
    {
      slug: 'hematome-sous-dural',
      protocoles: [BTF_CHIR, NICE_TC],
      verifie:
        'Aigu : craniotomie si épaisseur > 10 mm, déviation > 5 mm ou aggravation ; chronique : trous de trépan si symptomatique, antagonisation des AVK ; nourrisson : hémorragies rétiniennes et maltraitance ; prévention des chutes.',
    },
    {
      slug: 'hernie-discale-lombaire',
      protocoles: [
        'NICE — Low back pain and sciatica in over 16s (NG59, mise à jour 2020)',
        'NASS — Diagnosis and treatment of lumbar disc herniation with radiculopathy (2012)',
      ],
      verifie:
        'Radiculalgie L5 ou S1, Lasègue, signes d’alarme ; aucun examen les 6 premières semaines sans alarme ; antalgiques et AINS courts, activité adaptée ; queue de cheval et déficit sévère : chirurgie urgente ; discectomie après 6–12 semaines d’échec.',
      corrige:
        'Gabapentine et prégabaline étaient proposées contre la douleur radiculaire : le NICE les déconseille dans la sciatique (sans bénéfice, effets indésirables), comme dans les fiches de lombalgie et de radiculopathies déjà corrigées.',
      corrections: [
        {
          principe: 'Traitement médical',
          champ: 'details',
          remplacer: [
            '- Douleur neuropathique : **amitriptyline**, **gabapentine** ou prégabaline',
            '- Douleur neuropathique : **amitriptyline** à faible dose ; pas de gabapentinoïdes (gabapentine, prégabaline) ni de corticoïdes oraux, sans bénéfice démontré dans la sciatique (NICE)',
          ],
        },
        {
          molecule: 'gabapentine',
          champ: 'contexte',
          remplacer: ['Douleur neuropathique', 'Non recommandée dans la sciatique (NICE)'],
        },
        {
          molecule: 'pregabaline',
          champ: 'contexte',
          remplacer: ['Douleur neuropathique', 'Non recommandée dans la sciatique (NICE)'],
        },
      ],
    },
    {
      slug: 'lesions-du-plexus-brachial',
      protocoles: [
        'Sabiston Textbook of Surgery (lésions des nerfs périphériques)',
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
      ],
      verifie:
        'Paralysie obstétricale (Erb) et traumatique, Claude Bernard-Horner, lésion vasculaire ; radiographies, EMG à 3–4 semaines, IRM ; mobilisation passive précoce, avis de chirurgie nerveuse sans récupération du coude à 3–6 mois ; réparation et transferts nerveux avant 6 mois chez l’adulte ; douleur neuropathique.',
    },
    {
      slug: 'syndrome-de-la-queue-de-cheval',
      protocoles: [
        'GIRFT/BASS — National suspected cauda equina syndrome pathway (2023)',
        'NICE — Low back pain and sciatica in over 16s (NG59)',
      ],
      verifie:
        'Anesthésie en selle, troubles urinaires, sciatique bilatérale, résidu post-mictionnel ; IRM en urgence ; décompression dans les 24–48 h ; causes tumorales et infectieuses ; rééducation vésico-sphinctérienne ; éducation des lombalgiques.',
    },
    {
      slug: 'traumatisme-cranien',
      protocoles: [
        NICE_TC,
        'Brain Trauma Foundation — Guidelines for the management of severe traumatic brain injury (4e édition, 2016)',
        'Essai CRASH-3 — Tranexamic acid in traumatic brain injury (Lancet 2019)',
      ],
      verifie:
        'Classification par le Glasgow ; ABCDE et rachis cervical ; prévention des ACSOS (SpO2, PAS ≥ 100–110, normoglycémie, natrémie) ; scanner selon NICE ; évacuation des hématomes compressifs ; osmothérapie si engagement, pas de corticoïdes ; acide tranexamique dans les 3 h ; prophylaxie anticomitiale 7 jours dans le TC grave.',
    },
    {
      slug: 'traumatisme-vertebro-medullaire',
      protocoles: [
        'AANS/CNS — Guidelines for the management of acute cervical spine and spinal cord injuries (2013)',
        'AO Spine — Clinical practice guideline for the management of acute spinal cord injury (2017)',
      ],
      verifie:
        'Immobilisation dès le ramassage, échelle ASIA ; PAM > 85 mmHg, choc neurogénique (noradrénaline, atropine) ; pas de corticoïdes à forte dose en routine ; décompression précoce si déficit incomplet ; prévention des escarres, des thromboses et des complications urinaires.',
    },
    {
      slug: 'tumeurs-cerebrales',
      protocoles: [
        'NICE — Brain tumours (primary) and brain metastases in over 16s (NG99, 2018)',
        'EANO — Guidelines on the diagnosis and treatment of diffuse gliomas (2021)',
      ],
      verifie:
        'Clinique et imagerie, test VIH (toxoplasmose, lymphome) ; dexaméthasone 4 mg toutes les 6 h, à éviter avant la biopsie d’un lymphome suspecté ; antiépileptiques si crises ; chirurgie, radiothérapie, témozolomide ; épreuve antitoxoplasmique de 2 semaines chez le PVVIH ; soins palliatifs.',
    },
    {
      slug: 'commotion-cerebrale',
      protocoles: [CONCUSSION],
      verifie:
        'Signes observables et symptômes, signes d’alarme ; retrait immédiat sans reprise le jour même ; repos relatif 24–48 h, reprise scolaire avant le sport, retour par paliers d’au moins 24 h ; paracétamol ; consultation si symptômes > 2–4 semaines.',
    },
    {
      slug: 'sequelles-de-traumatisme-cranien',
      protocoles: [
        'NICE — Rehabilitation for chronic neurological disorders including acquired brain injury (NG211, 2022)',
        NICE_TC,
      ],
      verifie:
        'Évaluation cognitive, comportementale, émotionnelle et motrice, épilepsie, endocrinopathies ; rééducation multidisciplinaire ; épilepsie (pas de prophylaxie prolongée), spasticité, dépression (sertraline), agitation (propranolol) ; soutien des familles et réinsertion.',
    },
    {
      slug: 'syndrome-post-commotionnel',
      protocoles: [
        CONCUSSION,
        'Ontario Neurotrauma Foundation — Guideline for concussion/mTBI and persistent symptoms (3e édition, 2018)',
      ],
      verifie:
        'Symptômes au-delà de 4 semaines, élimination d’un hématome sous-dural chronique et d’un VPPB post-traumatique ; information précoce ; reprise active progressive, activité aérobie, rééducation vestibulaire ; limitation des antalgiques ; amitriptyline, sertraline, TCC.',
    },
    {
      slug: 'traumatisme-cranien-leger',
      protocoles: [NICE_TC, 'Canadian CT Head Rule (Stiell et al., 2001)'],
      verifie:
        'Indications du scanner (Glasgow < 15 à 2 h, vomissements répétés, fracture, convulsion, déficit, > 65 ans, anticoagulants, mécanisme violent) ; surveillance 6–24 h sans scanner ; retour au domicile avec consignes écrites ; paracétamol, antitétanique, pas d’alcool ni de conduite.',
    },
    {
      slug: 'depression-de-l-adolescent',
      protocoles: [
        'NICE — Depression in children and young people: identification and management (NG134, 2019)',
        MHGAP,
      ],
      verifie:
        'Présentation par l’irritabilité et le comportement, entretien confidentiel HEADSS ; risque suicidaire à chaque consultation, plan de sécurité ; interventions psychologiques en première ligne ; fluoxétine 10 puis 20 mg en première intention médicamenteuse avec surveillance rapprochée ; pas de tricycliques.',
    },
    {
      slug: 'encopresie',
      protocoles: [
        'NICE — Constipation in children and young people: diagnosis and management (CG99)',
        'ESPGHAN/NASPGHAN — Evaluation and treatment of functional constipation in infants and children (2014)',
      ],
      verifie:
        'Encoprésie rétentionnelle par constipation, signes d’alarme (Hirschsprung, anomalies médullaires, violences) ; déculpabilisation ; désimpaction par macrogol, entretien 0,4–0,8 g/kg/j plusieurs mois ; passages aux toilettes après les repas ; soutien psychologique.',
    },
    {
      slug: 'enfants-associes-forces-armees',
      protocoles: [
        'Principes de Paris — Principes directeurs relatifs aux enfants associés aux forces armées ou aux groupes armés (2007)',
        'IASC — Guidelines on mental health and psychosocial support in emergency settings (2007)',
        MHGAP,
      ],
      verifie:
        'Évaluation globale (santé physique, violences sexuelles, santé mentale, situation sociale) ; DDR, réunification familiale, scolarisation, lutte contre la stigmatisation ; PEP et contraception d’urgence ; soutien psychosocial communautaire, TCC centrée sur le trauma, fluoxétine chez l’adolescent si besoin.',
    },
    {
      slug: 'mutisme-selectif',
      protocoles: [
        'AACAP — Clinical practice guideline for the assessment and treatment of anxiety disorders in children and adolescents (2020)',
      ],
      verifie:
        'Mutisme situationnel > 1 mois, élimination de la surdité, d’un trouble du langage, d’un TSA et d’un mutisme post-traumatique ; ne pas forcer ; exposition progressive (stimulus fading), renforcement positif, orthophonie ; fluoxétine sur avis spécialisé dans les formes sévères.',
    },
    {
      slug: 'refus-scolaire-anxieux',
      protocoles: [
        'AACAP — Clinical practice guideline for the assessment and treatment of anxiety disorders in children and adolescents (2020)',
      ],
      verifie:
        'Plaintes somatiques matinales, distinction avec l’école buissonnière, harcèlement, violences, dépression ; retour progressif rapide à l’école sans certificats prolongés ; collaboration parents-école ; TCC ; ISRS dans les formes sévères.',
    },
    {
      slug: 'trouble-deficit-attention-hyperactivite',
      protocoles: ['NICE — Attention deficit hyperactivity disorder (NG87, 2018)', MHGAP],
      verifie:
        'Symptômes avant 12 ans dans plusieurs milieux, élimination des causes somatiques (audition, vision, anémie, absences) ; psychoéducation, formation des parents, aménagements scolaires ; méthylphénidate par un spécialiste à partir de 6 ans avec surveillance de la croissance et de la tension.',
    },
    {
      slug: 'troubles-anxieux-de-l-enfant',
      protocoles: [
        'AACAP — Clinical practice guideline for the assessment and treatment of anxiety disorders in children and adolescents (2020)',
        MHGAP,
      ],
      verifie:
        'Formes selon l’âge, plaintes somatiques, violences et harcèlement ; psychoéducation et guidance parentale ; TCC avec exposition ; ISRS à faible dose sur avis spécialisé dans les formes sévères ; benzodiazépines évitées.',
    },
    {
      slug: 'troubles-de-l-attachement',
      protocoles: [
        'AACAP — Practice parameter for the assessment and treatment of reactive attachment disorder and disinhibited social engagement disorder (2016)',
      ],
      verifie:
        'Formes inhibée et désinhibée, histoire de carence de soins, croissance et développement, maltraitance, TSA en différentiel ; figure d’attachement stable, accueil familial plutôt qu’institutionnel ; guidance des soignants ; renutrition, stimulation ; protection.',
    },
    {
      slug: 'troubles-des-apprentissages',
      protocoles: [
        'OMS — CIM-11 : troubles développementaux de l’apprentissage (6A03)',
        MHGAP,
      ],
      verifie:
        'Difficultés spécifiques persistantes, élimination des déficits visuels et auditifs, de la déficience intellectuelle, du TDAH, des absences et des causes de santé (anémie, paludisme) ; rééducation (orthophonie, psychomotricité) ; aménagements scolaires ; estime de soi.',
    },
    {
      slug: 'troubles-des-conduites',
      protocoles: [
        'NICE — Antisocial behaviour and conduct disorders in children and young people (CG158, 2013)',
        MHGAP,
      ],
      verifie:
        'Trouble oppositionnel et trouble des conduites, recherche de maltraitance, de violences et de comorbidités ; programmes parentaux (renforcement positif, pas de châtiments corporels) ; interventions scolaires et communautaires ; rispéridone à faible dose et courte durée pour une agressivité sévère, sur avis spécialisé.',
    },
    {
      slug: 'troubles-du-sommeil-de-l-enfant',
      protocoles: [
        'AAP — Clinical practice guideline: diagnosis and management of childhood obstructive sleep apnea syndrome (2012)',
        'AASM — International classification of sleep disorders (ICSD-3)',
      ],
      verifie:
        'Insomnie comportementale, parasomnies, apnées obstructives (adéno-amygdalectomie), causes médicales (asthme, prurit, oxyurose, carence martiale) ; hygiène du sommeil et rituel ; mélatonine dans les troubles du neurodéveloppement ; pas d’antihistaminiques sédatifs.',
    },
    {
      slug: 'troubles-du-spectre-autistique',
      protocoles: [
        'NICE — Autism spectrum disorder in under 19s: support and management (CG170)',
        'OMS — Caregiver Skills Training for families of children with developmental delays or disabilities',
      ],
      verifie:
        'Signes d’alerte précoces, audition et vision, épilepsie, nutrition ; psychoéducation et formation des parents (programme OMS), scolarisation inclusive ; pas de traitement médicamenteux de l’autisme lui-même, rispéridone à faible dose pour une agressivité sévère résistante ; mélatonine ; protection contre les pratiques néfastes.',
    },
    {
      slug: 'acne-adolescent',
      protocoles: [
        'NICE — Acne vulgaris: management (NG198, 2021)',
        'AAD — Guidelines of care for the management of acne vulgaris (2024)',
      ],
      verifie:
        'Sévérité et retentissement, hyperpigmentation et chéloïdes sur peau noire, hyperandrogénie ; toilette douce, pas de dépigmentants ; peroxyde de benzoyle et trétinoïne ; doxycycline 3 mois au plus (> 12 ans, hors grossesse) toujours avec le traitement local ; isotrétinoïne par un dermatologue sous contraception.',
    },
    {
      slug: 'dysmenorrhee-adolescente',
      protocoles: [
        'SOGC — Primary dysmenorrhea consensus guideline (2017)',
        'ACOG — Committee Opinion 760: dysmenorrhea and endometriosis in the adolescent (2018)',
      ],
      verifie:
        'Dysménorrhée primaire et signes d’une cause secondaire ; AINS dès le début des règles (ibuprofène 400 mg toutes les 6–8 h, acide méfénamique 500 mg 3 fois par jour), chaleur ; contraception hormonale en cas d’échec ; santé menstruelle ; orientation des formes secondaires.',
    },
    {
      slug: 'grossesse-adolescente',
      protocoles: [
        'OMS — Recommendations on antenatal care for a positive pregnancy experience (2016)',
        'OMS — Guidelines on preventing early pregnancy and poor reproductive outcomes among adolescents (2011)',
      ],
      verifie:
        'Accueil sans jugement et confidentiel, violences sexuelles ; dépistages (VIH, syphilis, hépatite B, paludisme) ; au moins 8 contacts, fer-acide folique, TPI, vaccination antitétanique, surveillance de la tension ; accouchement en structure ; contraception du post-partum et retour à l’école.',
    },
    {
      slug: 'ist-adolescent',
      protocoles: [
        'OMS — Updated recommendations for the treatment of Neisseria gonorrhoeae, Chlamydia trachomatis, Treponema pallidum and Trichomonas vaginalis (2024)',
        'OMS — Guidelines for the management of symptomatic sexually transmitted infections (2021)',
      ],
      verifie:
        'Approche syndromique, entretien confidentiel, violences ; ulcération génitale (benzathine pénicilline, chancre mou, herpès) ; salpingite (ceftriaxone + doxycycline + métronidazole 14 jours) ; doses adultes à partir de 45 kg ; dépistages VIH, syphilis, hépatite B ; partenaire, préservatifs, PrEP, vaccinations ; revoir à 7 jours.',
      corrige:
        'Chlamydiose associée à l’écoulement urétral et à la cervicite : l’OMS (2024) préfère la doxycycline 7 jours, l’azithromycine en dose unique restant l’alternative (grossesse, observance incertaine). La fiche donnait l’ordre inverse ; elle est alignée sur la fiche adulte des IST.',
      corrections: [
        {
          principe: 'Traitement syndromique',
          champ: 'details',
          remplacer: [
            '**ceftriaxone** 1 g IM dose unique + **azithromycine** 1 g dose unique (ou **doxycycline** 100 mg 2 fois par jour 7 jours)',
            '**ceftriaxone** 1 g IM dose unique + **doxycycline** 100 mg 2 fois par jour 7 jours (OMS 2024 ; ou **azithromycine** 1 g dose unique si grossesse ou observance incertaine)',
          ],
        },
        {
          molecule: 'doxycycline',
          champ: 'ligne',
          ancienne: 'alternative',
          valeur: 'premiere',
        },
        {
          molecule: 'azithromycine',
          champ: 'contexte',
          remplacer: ['Chlamydiose, chancre mou', 'Chancre mou ; chlamydiose si grossesse ou observance incertaine'],
        },
      ],
    },
    {
      slug: 'usage-substances-adolescent',
      protocoles: [
        MHGAP,
        'ONUDC/OMS — International standards on drug use prevention (2e édition, 2018)',
      ],
      verifie:
        'Repérage confidentiel, signes d’alerte, intoxication et sevrage, comorbidités (dépression, idées suicidaires, violences, IST, grossesse) ; intervention brève non moralisatrice ; thiamine et benzodiazépine sous surveillance pour le sevrage alcoolique ; prise en charge globale et protection de l’enfance.',
    },
  ],
};
