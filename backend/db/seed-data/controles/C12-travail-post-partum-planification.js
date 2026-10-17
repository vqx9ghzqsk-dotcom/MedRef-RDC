'use strict';

/**
 * Contrôle de conformité — lot C12 : travail et accouchement, post-partum, planification familiale
 * (32 fiches). Gestes et doses vérifiés dans le guide obstétrical MSF (travail prolongé, amniotomie,
 * obstruction) ; contraception du post-partum : critères de recevabilité médicale de l'OMS (2025).
 */

const MSF_OBST = 'MSF — Soins obstétricaux et néonatals essentiels (guide)';
const OMS_MCPC = 'OMS — Managing complications in pregnancy and childbirth (MCPC, 2e édition, 2017)';
const OMS_INTRAPARTUM = 'OMS — Recommendations: intrapartum care for a positive childbirth experience (2018)';
const OMS_POSTNATAL = 'OMS — Recommendations on maternal and newborn care for a positive postnatal experience (2022)';
const OMS_UTEROTONIQUES = 'OMS — Recommendations: uterotonics for the prevention of postpartum haemorrhage (2018)';
const OMS_INFECTIONS = 'OMS — Recommendations for prevention and treatment of maternal peripartum infections (2015)';
const OMS_MEC =
  'OMS — Critères de recevabilité médicale pour l’adoption et l’utilisation continue de méthodes contraceptives (mise à jour 2025)';
const OMS_MANUEL_PF = 'OMS/USAID — Planification familiale : un manuel à l’intention des prestataires (édition 2022)';
const RCOG_TVP = 'RCOG — Reducing the risk of venous thromboembolism during pregnancy and the puerperium (GTG 37a, 2015)';

module.exports = {
  lot: 'C12',
  date: '2026-10-16',
  titre: 'Travail et accouchement, post-partum, planification familiale',
  fiches: [
    {
      slug: 'accouchement-gemellaire',
      protocoles: [MSF_OBST, OMS_MCPC, 'NICE — Twin and triplet pregnancy (NG137, 2019)'],
      verifie:
        'Voie basse si 1er jumeau céphalique ; après le 1er : présentation et cœur du 2e, amniotomie après engagement, ocytocine si contractions insuffisantes, version interne et grande extraction si transversal (opérateur formé) ; pas d’ocytocine de délivrance avant le dernier jumeau ; ocytocine 10 UI puis perfusion 2–4 h.',
    },
    {
      slug: 'accouchement-instrumental',
      protocoles: ['RCOG — Assisted vaginal birth (GTG 26, 2020)', OMS_MCPC, MSF_OBST],
      verifie:
        'Indications et conditions (dilatation complète, membranes rompues, tête engagée à 0–1/5, position connue, vessie vide) ; contre-indications (face, front, prématurité < 34 SA pour la ventouse) ; cupule au point de flexion, traction pendant les contractions, arrêt après 3 tractions sans progression ou 3 décollements ; pas de ventouse puis forceps ; hématome sous-galéal du nouveau-né.',
    },
    {
      slug: 'accouchement-normal',
      protocoles: [OMS_INTRAPARTUM, 'OMS — WHO Labour Care Guide (2020)', OMS_UTEROTONIQUES],
      verifie:
        'Surveillance (BCF toutes les 15–30 min en phase active et toutes les 5 min à l’expulsion, toucher vaginal toutes les 4 h) ; soins respectueux, liberté de position, pas de rasage, lavement ni épisiotomie systématiques ; pas de règle isolée de 1 cm/h ; ocytocine 10 UI IM dans la minute, clampage retardé, peau à peau, soins essentiels du nouveau-né ; surveillance 2 h.',
    },
    {
      slug: 'analgesie-obstetricale',
      protocoles: [
        OMS_INTRAPARTUM,
        'ASA/SOAP — Practice guidelines for obstetric anesthesia (2016)',
        'SOAP — Interdisciplinary consensus on neuraxial procedures in obstetric patients with thrombocytopenia (2021)',
      ],
      verifie:
        'Méthodes non médicamenteuses pour toutes ; opioïdes parentéraux (péthidine, morphine, tramadol) avec naloxone disponible ; péridurale et rachianesthésie si anesthésiste ; contre-indications neuraxiales (thrombopénie < 75 000, troubles de coagulation) ; lidocaïne et bloc pudendal ; kétamine si rachianesthésie impossible ; hypotension (remplissage, éphédrine ou phényléphrine).',
      corrige:
        'La fiche conseillait d’éviter les opioïdes « dans l’heure précédant la naissance » : le risque de dépression respiratoire du nouveau-né est maximal lorsque la naissance survient 2 à 4 heures après l’injection intramusculaire de péthidine, et non dans l’heure qui suit.',
      corrections: [
        {
          principe: 'Médicaments',
          champ: 'details',
          remplacer: [
            'éviter dans l’heure précédant la naissance ; **naloxone** disponible pour le nouveau-né',
            'risque de dépression respiratoire du nouveau-né maximal quand la naissance survient 2 à 4 h après l’injection IM de péthidine ; **naloxone** disponible pour le nouveau-né',
          ],
        },
      ],
    },
    {
      slug: 'cesarienne',
      protocoles: [
        'NICE — Caesarean birth (NG192, 2021)',
        OMS_INFECTIONS,
        'C/SOAP — Tita et al., Adjunctive azithromycin prophylaxis for cesarean delivery, N Engl J Med 2016',
      ],
      verifie:
        'Indications et bilan ; céfazoline 2 g avant l’incision, azithromycine en plus si travail ou membranes rompues ; rachianesthésie de préférence ; ocytocine ou carbétocine, acide tranexamique si saignement ; lever précoce, thromboprophylaxie si facteurs de risque ; intervalle de 18 mois, épreuve de travail possible après une césarienne segmentaire.',
    },
    {
      slug: 'dechirures-perineales',
      protocoles: ['RCOG — Third- and fourth-degree perineal tears (GTG 29, 2015)', MSF_OBST],
      verifie:
        'Toucher rectal systématique, classification (3a, 3b, 3c, 4e degré) ; réparation des 1er–2e degrés sous lidocaïne au fil résorbable ; 3e–4e degrés au bloc par un opérateur formé, antibiotiques et laxatifs ; épisiotomie non systématique ; consultation à 6 semaines.',
    },
    {
      slug: 'declenchement-artificiel-du-travail',
      protocoles: ['OMS — Recommendations on induction of labour, at or beyond term (2022)', OMS_MCPC],
      verifie:
        'Indications, contre-indications et score de Bishop ; col défavorable : misoprostol 25 µg vaginal toutes les 6 h ou per os toutes les 2 h, ou sonde de Foley ; pas d’ocytocine moins de 4 h après la dernière dose ; ocytocine débutée à 2,5 mUI/min, augmentée toutes les 30 min ; pas de misoprostol sur utérus cicatriciel ; conduite devant une hypercinésie.',
    },
    {
      slug: 'delivrance-gestion-active',
      protocoles: [OMS_UTEROTONIQUES, 'OMS-FIGO-ICM — Recommendations for the prevention, diagnosis and treatment of postpartum haemorrhage (2025)'],
      verifie:
        'Ocytocine 10 UI IM ou IV lente dans la minute après avoir exclu un 2e fœtus ; alternatives (carbétocine 100 µg, misoprostol 600 µg, ergométrine sauf HTA) ; clampage après 1 à 3 min, traction contrôlée si personnel formé ; tonus utérin toutes les 15 min pendant 2 h ; examen du placenta et mesure du saignement.',
    },
    {
      slug: 'dystocie-des-epaules',
      protocoles: ['RCOG — Shoulder dystocia (GTG 42, 2012)', MSF_OBST],
      verifie:
        'Reconnaissance (signe de la tortue) ; appel à l’aide, McRoberts et pression sus-pubienne, épisiotomie si besoin, manœuvres internes (Rubin II, Wood, bras postérieur), position à quatre pattes ; ni traction forte ni expression utérine ; réanimation néonatale, examen du plexus brachial, compte rendu.',
    },
    {
      slug: 'dystocie-disproportion-foeto-pelvienne',
      protocoles: [MSF_OBST, OMS_MCPC],
      verifie:
        'Repérage en CPN et signes pendant le travail ; césarienne en cas de disproportion, sans ocytocine ; symphysiotomie dans des contextes particuliers ; présentations dystociques (front, face mento-postérieure, transverse) : césarienne ; dystocie des épaules : McRoberts et pression sus-pubienne.',
    },
    {
      slug: 'presentation-du-siege',
      protocoles: [
        'RCOG — External cephalic version and reducing the incidence of term breech presentation (GTG 20a, 2017)',
        'RCOG — Management of breech presentation (GTG 20b, 2017)',
        MSF_OBST,
      ],
      verifie:
        'Version par manœuvre externe à 36 SA chez la nullipare et 37 SA chez la multipare, contre-indications, anti-D ; voie basse sélectionnée (opérateur expérimenté, siège complet ou décomplété, 2 500–3 800 g, tête fléchie), sans traction, Lovset et Mauriceau ; césarienne sinon.',
    },
    {
      slug: 'presentations-anormales',
      protocoles: [MSF_OBST, OMS_MCPC],
      verifie:
        'Diagnostic clinique et échographique ; face mento-antérieure : voie basse possible sans ventouse, mento-postérieure : césarienne ; front persistant et épaule : césarienne, ne jamais tirer sur un bras procident ; version externe de la transverse à 37 SA ; prévention de la rupture utérine.',
    },
    {
      slug: 'procidence-du-cordon',
      protocoles: ['RCOG — Umbilical cord prolapse (GTG 50, 2014)', MSF_OBST],
      verifie:
        'Diagnostic ; présentation refoulée ou remplissage vésical (500 mL), position genu-pectorale, cordon laissé dans le vagin sans manipulation, tocolyse si contractions ; césarienne immédiate si fœtus vivant et dilatation incomplète, extraction si dilatation complète ; réanimation néonatale.',
    },
    {
      slug: 'retention-placentaire',
      protocoles: [OMS_MCPC, MSF_OBST, OMS_INFECTIONS],
      verifie:
        'Définition (30 min) ; vidange vésicale, ocytocine, traction contrôlée ; délivrance artificielle sous analgésie avec antibioprophylaxie (ampicilline ou céfazoline), puis ocytocine ; révision si incomplète ; accretisme : ne pas forcer.',
    },
    {
      slug: 'souffrance-foetale-aigue',
      protocoles: [OMS_INTRAPARTUM, 'FIGO — Consensus guidelines on intrapartum fetal monitoring (2015)'],
      verifie:
        'Rythme < 110 ou > 160/min, décélérations tardives, méconium épais ; décubitus latéral gauche, arrêt de l’ocytocine, remplissage, tocolyse aiguë si hypercinésie ; extraction instrumentale si dilatation complète, sinon césarienne ; réanimation néonatale prête.',
    },
    {
      slug: 'travail-prolonge-partogramme',
      protocoles: [
        'OMS — Recommendations for augmentation of labour (2014)',
        'OMS — WHO Labour Care Guide (2020)',
        MSF_OBST,
      ],
      verifie:
        'Partogramme (ligne d’alerte et d’action), outil OMS de suivi du travail ; signes de disproportion ; hydratation, vessie, amniotomie (MSF) ; ocytocine débutée à 2,5 mUI/min, jamais en cas de disproportion ; césarienne ou ventouse ; antibiotiques et sonde vésicale prolongée après un travail très prolongé (prévention des fistules).',
    },
    {
      slug: 'uterus-cicatriciel',
      protocoles: [
        'RCOG — Birth after previous caesarean birth (GTG 45, 2015)',
        'ACOG — Practice Bulletin 205: vaginal birth after cesarean delivery (2019)',
      ],
      verifie:
        'Évaluation (nombre et type d’incision, placenta) ; épreuve de travail après une césarienne segmentaire en structure équipée, surveillance continue ; pas de misoprostol, ocytocine prudente, sonde de Foley ; césarienne itérative si incision corporéale, rupture antérieure, placenta prævia ; espacement des naissances.',
    },
    {
      slug: 'anemie-du-post-partum',
      protocoles: [
        'OMS — Guideline: iron supplementation in postpartum women (2016)',
        'MSF — Guide clinique et thérapeutique : anémie',
      ],
      verifie:
        'Définition et signes de gravité ; bilan (Hb, ferritine, TDR, selles, électrophorèse) ; fer 60–120 mg + acide folique au moins 3 mois, compatible avec l’allaitement, fer IV si Hb < 9–10 g/dL ou intolérance ; transfusion si Hb < 7 g/dL symptomatique ; paludisme et parasitoses.',
    },
    {
      slug: 'depression-du-post-partum',
      protocoles: [
        'OMS — mhGAP Intervention Guide (version 2.0, 2016)',
        'OMS — Thinking Healthy : prise en charge psychosociale de la dépression périnatale (2015)',
        'NICE — Antenatal and postnatal mental health (CG192, mise à jour 2020)',
      ],
      verifie:
        'Critères (≥ 2 semaines), distinction avec le baby blues et la psychose puerpérale ; dépistage (EPDS) et risque suicidaire ; interventions psychosociales en première intention (Thinking Healthy) ; sertraline compatible avec l’allaitement, fluoxétine ; violences.',
    },
    {
      slug: 'difficultes-allaitement',
      protocoles: [
        'OMS — Mastitis: causes and management (2000)',
        'ABM — Clinical protocol 36: the mastitis spectrum (2022)',
        OMS_POSTNATAL,
      ],
      verifie:
        'Observation d’une tétée (position, prise du sein), 8–12 tétées par 24 h ; crevasses, engorgement, mastite (allaitement poursuivi, cloxacilline 500 mg 4 fois par jour 10–14 jours si fièvre > 24 h), abcès (drainage), candidose ; allaitement exclusif de la mère VIH+ sous ARV.',
    },
    {
      slug: 'hemorragie-secondaire-post-partum',
      protocoles: [MSF_OBST, OMS_MCPC],
      verifie:
        'Définition (24 h à 6 semaines) ; rétention et endométrite ; utérotoniques, ampicilline + gentamicine + métronidazole si infection, acide tranexamique ; évacuation prudente sous antibiotiques ; β-hCG si saignement persistant (choriocarcinome).',
    },
    {
      slug: 'infection-plaie-cesarienne',
      protocoles: ['OMS — Global guidelines for the prevention of surgical site infection (2e édition, 2018)', OMS_INFECTIONS],
      verifie:
        'Classification et signes de gravité (fasciite, éviscération) ; céfazoline 2 g avant l’incision (3 g au-delà de 120 kg), chlorhexidine alcoolique, pas de rasage au rasoir ; ouverture et drainage, antibiotiques si cellulite ; débridement des formes nécrosantes.',
    },
    {
      slug: 'mastite-abces-du-sein',
      protocoles: ['OMS — Mastitis: causes and management (2000)', 'ABM — Clinical protocol 36: the mastitis spectrum (2022)'],
      verifie:
        'Allaitement poursuivi, vidange du sein ; antalgiques ; cloxacilline ou flucloxacilline 500 mg 4 fois par jour 10–14 jours si symptômes > 24 h, érythromycine ou clindamycine en cas d’allergie ; abcès : aspiration répétée ou incision, allaitement du côté sain.',
    },
    {
      slug: 'suivi-postnatal-mere',
      protocoles: [OMS_POSTNATAL, OMS_MEC],
      verifie:
        'Au moins 4 contacts (24 h, J3, J7–14, 6 semaines) ; examen et signes de danger ; fer-acide folique, allaitement, vaccination ; dépistage de la dépression ; suivi de la PA après pré-éclampsie et de la glycémie après diabète gestationnel.',
      corrige:
        'Contraception alignée sur les critères OMS 2025 et sur la fiche « Contraception du post-partum » : l’injectable progestatif est utilisable dès le post-partum (et non seulement à 6 semaines) ; en cas d’allaitement, les œstroprogestatifs sont à éviter jusqu’à 6 mois.',
      corrections: [
        {
          principe: 'Contraception',
          champ: 'details',
          remplacer: [
            'progestatifs (**médroxyprogestérone** à 6 semaines)',
            'progestatifs (**médroxyprogestérone** utilisable dès le post-partum)',
          ],
        },
        {
          principe: 'Contraception',
          champ: 'details',
          remplacer: [
            '- Éviter les œstroprogestatifs avant 6 semaines',
            '- Pas d’œstroprogestatifs avant 6 semaines, et à éviter jusqu’à 6 mois en cas d’allaitement (OMS)',
          ],
        },
      ],
    },
    {
      slug: 'thrombose-veineuse-post-partum',
      protocoles: [
        RCOG_TVP,
        'RCOG — Thromboembolic disease in pregnancy and the puerperium: acute management (GTG 37b, 2015)',
        'AHA/ASA — Diagnosis and management of cerebral venous thrombosis (2024)',
      ],
      verifie:
        'Formes (TVP, thrombophlébite pelvienne septique, thrombose veineuse cérébrale) et imagerie ; énoxaparine 1 mg/kg toutes les 12 h, relais par warfarine compatible avec l’allaitement, au moins 3 mois ; héparine et antibiotiques de la thrombophlébite septique ; thromboprophylaxie après césarienne avec facteurs de risque.',
    },
    {
      slug: 'complications-diu-implant',
      protocoles: [
        'OMS — Selected practice recommendations for contraceptive use (3e édition, 2016)',
        OMS_MANUEL_PF,
        'CDC — Sexually transmitted infections treatment guidelines (2021) : infection génitale haute et DIU',
      ],
      verifie:
        'Fils non visibles (test de grossesse, échographie, ASP) ; saignements sous DIU au cuivre (AINS) ; infection génitale haute traitée sans retrait du DIU, réévaluation à 48–72 h ; grossesse sur DIU (GEU, retrait si fils visibles) ; saignements sous implant (AINS ou œstroprogestatif court) ; interactions (rifampicine, éfavirenz) ; retrait sur demande.',
    },
    {
      slug: 'contraception-choix-methode',
      protocoles: [OMS_MEC, OMS_MANUEL_PF],
      verifie:
        'Conseil centré sur la femme, critères de recevabilité de l’OMS, exclusion d’une grossesse, interactions ; post-abortum : toutes les méthodes immédiatement ; VIH et adolescentes : toutes les méthodes ; suivi et changement de méthode.',
      corrige:
        'Post-partum : les œstroprogestatifs étaient admis dès 6 semaines en cas d’allaitement ; l’OMS les classe en catégorie 3 jusqu’à 6 mois chez la femme qui allaite.',
      corrections: [
        {
          principe: 'Situations particulières',
          champ: 'details',
          remplacer: [
            'pas d’œstroprogestatifs avant 6 semaines si allaitement (21 jours sinon)',
            'œstroprogestatifs : pas avant 6 semaines et à éviter jusqu’à 6 mois en cas d’allaitement (OMS), pas avant 21 jours sinon',
          ],
        },
      ],
    },
    {
      slug: 'contraception-d-urgence',
      protocoles: ['OMS — Emergency contraception (aide-mémoire, 2021)', 'FSRH — Emergency contraception (2017, mise à jour 2023)'],
      verifie:
        'Lévonorgestrel 1,5 mg jusqu’à 72 h, ulipristal 30 mg jusqu’à 120 h, DIU au cuivre jusqu’à 5 jours (le plus efficace) ; efficacité réduite du lévonorgestrel si IMC > 30 ; contraception hormonale reprise 5 jours après l’ulipristal ; test de grossesse si retard > 7 jours ; IST et PPE.',
    },
    {
      slug: 'contraception-femme-vih',
      protocoles: [OMS_MEC, 'OMS — Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring (2021)'],
      verifie:
        'Toutes les méthodes possibles ; dolutégravir sans interaction ; éfavirenz et rifampicine : DIU ou injectable de préférence ; insertion d’un DIU déconseillée au stade 3–4 sans traitement efficace ; double protection, I = I ; conseil préconceptionnel.',
    },
    {
      slug: 'contraception-du-post-partum',
      protocoles: [OMS_MEC, OMS_MANUEL_PF, OMS_POSTNATAL],
      verifie:
        'Intervalle de 24 mois ; DIU dans les 10 min ou les 48 h après la délivrance (ou après 4 semaines) ; implant et injectable progestatif immédiatement, même en allaitant ; MAMA ; ligature pendant la césarienne, dans les 7 jours ou après 6 semaines ; post-avortement : toutes les méthodes le jour même.',
      corrige:
        'Œstroprogestatifs : la fiche les autorisait dès 6 semaines chez la femme qui allaite ; l’OMS (critères 2025) les contre-indique avant 6 semaines et les déconseille jusqu’à 6 mois (catégorie 3). Résumé, principe et contexte de l’éthinylestradiol corrigés.',
      corrections: [
        {
          champ: 'resume',
          remplacer: [
            'éviter les œstroprogestatifs avant 6 semaines si allaitement (avant 3 semaines sans allaitement, risque thrombotique)',
            'éviter les œstroprogestatifs jusqu’à 6 mois en cas d’allaitement (contre-indiqués avant 6 semaines) et avant 3 semaines sans allaitement (risque thrombotique)',
          ],
        },
        {
          principe: 'Allaitement',
          champ: 'details',
          remplacer: [
            '- **Œstroprogestatifs** : pas avant 6 semaines en cas d’allaitement (21 jours sans allaitement, 42 jours si facteurs de risque thrombotique)',
            '- **Œstroprogestatifs** : en cas d’allaitement, contre-indiqués avant 6 semaines et à éviter jusqu’à 6 mois (catégorie 3 de l’OMS) ; sans allaitement, pas avant 21 jours (42 jours si facteurs de risque thrombotique)',
          ],
        },
        {
          molecule: 'ethinylestradiol',
          champ: 'contexte',
          remplacer: ['Après 6 semaines (allaitement)', 'Après 6 mois en cas d’allaitement, 21 jours sinon'],
        },
      ],
    },
    {
      slug: 'methodes-naturelles-planification',
      protocoles: [OMS_MANUEL_PF],
      verifie:
        'Jours fixes (cycles de 26–32 jours, jours 8 à 19), méthode des deux jours, glaire, symptothermie, MAMA, retrait ; efficacité réelle inférieure aux méthodes modernes ; contraception d’urgence en cas d’erreur ; préservatif contre les IST.',
    },
    {
      slug: 'sterilisation-tubaire',
      protocoles: [OMS_MANUEL_PF, 'ACOG — Practice Bulletin 208: benefits and risks of sterilization (2019)'],
      verifie:
        'Consentement libre, éclairé et écrit, absence de contrainte, information sur l’irréversibilité et les alternatives ; pas de première proposition pendant le travail ; mini-laparotomie sous anesthésie locale dans les 7 jours ou après 6 semaines, ou pendant une césarienne ; risque de GEU en cas de grossesse ultérieure.',
    },
  ],
};
