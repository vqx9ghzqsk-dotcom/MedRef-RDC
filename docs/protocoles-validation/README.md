# Protocoles de prise en charge pour valider les fiches de MedRef RDC

Recherche faite le 15 octobre 2026 pour les **792 fiches de pathologies** de l'application.

## Comment s'en servir

Pour valider une fiche, ouvrez [protocoles-par-specialite.md](protocoles-par-specialite.md) (lecture) ou [protocoles-par-fiche.csv](protocoles-par-fiche.csv) (Excel, une ligne par fiche, avec les liens). Les protocoles de chaque fiche sont classés dans l'ordre de lecture recommandé :

1. **Document officiel congolais** (programme national) quand il existe ;
2. **OMS**, puis **MSF** (guides en français, adaptés aux milieux à ressources limitées) ;
3. **Société savante** ou **NICE** pour les points que les deux premiers ne couvrent pas.

En cas de désaccord, la directive nationale congolaise en vigueur prime ; la fiche doit le signaler quand elle s'en écarte.

## Résultat

- **472 fiches** ont au moins un protocole **propre à la maladie** (par exemple « WHO guidelines for plague management » pour la peste).
- **320 fiches** renvoient au **manuel de référence de leur spécialité**, qui traite la maladie dans un chapitre : *Surgical care at the district hospital* (chirurgie), *Managing complications in pregnancy and childbirth* (obstétrique), *Pocket book of hospital care for children* (pédiatrie), guide HGR et *IMAI district clinician manual* (médecine adulte), mhGAP (santé mentale), Green-top du RCOG (gynécologie), EAU (urologie), AAO (ophtalmologie). Elles sont marquées *(références générales)*.
- **218 protocoles** au total : 165 liens **contrôlés** (la page répond et son titre correspond au document attendu ; les liens refusés ont été écartés), 8 liens confirmés par une recherche (sites qui bloquent le contrôle automatique), 6 documents congolais du dossier local, et 39 sources déjà présentes dans l'application, reprises avec leur lien d'origine (non recontrôlé). Voir la colonne « Vérification ».
- Les fiches pédiatriques ne reçoivent pas de recommandation réservée à l'adulte.

## Attention : pièges rencontrés

- Sur **medbox.org**, des documents étiquetés « RDC » concernent d'autres pays. Exemple vérifié : la fiche « Directives nationales pour la prise en charge du paludisme en RDC (2023) » ouvre en réalité les **directives du Burundi (révision de décembre 2019)**. Toujours lire la page de titre avant de citer.
- Plusieurs protocoles nationaux congolais **ne sont pas publiés en ligne** dans leur dernière version (voir plus bas) : les éditions trouvées sont anciennes. Les recommandations OMS récentes peuvent donc être plus à jour que le document national disponible ; à arbitrer avec le programme concerné.

## Documents congolais à demander au Ministère de la Santé ou aux programmes

Non trouvés en ligne (ou seulement dans une édition ancienne) :

| Domaine | Document recherché | Édition trouvée |
|---|---|---|
| Paludisme (PNLP) | Directives nationales en vigueur (2021 ou 2023) | Guides techniques 2010-2012 |
| VIH et IST (PNLS) | Guide national VIH récent (schémas TLD) ; guide IST/IO 2017 et sa révision | Guide VIH 2019 |
| Malnutrition (PRONANUT) | Protocole PCIMA 2016 (révision OMS 2023 en cours) | Fiches techniques 2013 |
| Santé de la reproduction (PNSR) | Normes SONU, protocoles obstétricaux et néonatals | Normes SMNE 2012 |
| Hôpital général de référence | Guides cliniques HGR, tomes 2 à 9 (pédiatrie, chirurgie, gynéco-obstétrique…) | Tome 1 (médecine interne, 2016) |
| Choléra (PNECHOL-MD) | Directives de prise en charge des cas | Plan stratégique 2023-2027 |
| Ebola, mpox | Protocoles nationaux de prise en charge | aucun (OMS utilisée) |
| Maladie du sommeil (PNLTHA) | Directives nationales (fexinidazole, acoziborole) | aucune (OMS 2019 utilisée) |
| Santé mentale (PNSM) | Protocoles nationaux, mhGAP adapté à la RDC | aucun (mhGAP OMS utilisé) |
| Maladies non transmissibles | Protocoles HTA, diabète, drépanocytose | aucun |

Les documents congolais déjà téléchargés sont dans le dossier local MedRefRDC-sources (à côté du dossier MedRefRDC, hors dépôt git ; index dans LISEZ-MOI.txt).

## Catalogue des protocoles

La colonne « Fiches » indique combien de fiches renvoient à chaque protocole.

### 1. Documents officiels de la RDC

| Protocole | Organisme | Fiches | Vérification |
|---|---|---:|---|
| Guide clinique de l’Hôpital général de référence, Tome 1 : Médecine interne (2016) — `C:\Users\HP\Documents\MedRefRDC-sources\HGR-T1-medecine-interne-2016.pdf` | Ministère de la Santé RDC | 158 | document officiel téléchargé (dossier local) |
| Normes SMNE — Santé de l’enfant, volume 4 (2012) — `C:\Users\HP\Documents\MedRefRDC-sources\SMNE-sante-enfant-vol4-2012.pdf` | Ministère de la Santé RDC | 79 | document officiel téléchargé (dossier local) |
| Guide national de prise en charge du VIH (édition 2019, la plus récente trouvée) — `C:\Users\HP\Documents\MedRefRDC-sources\PNLS-VIH-guide-2019.pdf` | PNLS — Ministère de la Santé RDC | 20 | document officiel téléchargé (dossier local) |
| Guide de prise en charge de la tuberculose — PATI-6 (2021) — `C:\Users\HP\Documents\MedRefRDC-sources\PNLT-PATI6-2021.pdf` | PNLT — Ministère de la Santé RDC | 10 | document officiel téléchargé (dossier local) |
| Fiches techniques PCIMA (2013 ; protocole 2016 non trouvé en ligne) — `C:\Users\HP\Documents\MedRefRDC-sources\PRONANUT-PCIMA-fiches-2013.pdf` | PRONANUT — Ministère de la Santé RDC | 8 | document officiel téléchargé (dossier local) |
| Guide technique de prise en charge du paludisme, HGR (2010, révisé 2012) et centre de santé (2010) — `C:\Users\HP\Documents\MedRefRDC-sources\PNLP-guide-HGR-2012.pdf` | PNLP — Ministère de la Santé RDC | 7 | document officiel téléchargé (dossier local) |
| [Plan stratégique multisectoriel d’élimination du choléra 2023-2027 (RDC)](https://www.gtfcc.org/wp-content/uploads/2025/05/national-cholera-plan-dr-congo.pdf) | Ministère de la Santé RDC / PNECHOL-MD (hébergé par le GTFCC) | 2 | confirmé par recherche (site protégé contre les robots) |

### 2. OMS

| Protocole | Organisme | Fiches | Vérification |
|---|---|---:|---|
| [Pocket book of hospital care for children: Second edition](https://www.who.int/publications/i/item/978-92-4-154837-3) | OMS | 207 | lien vérifié (titre de la page) |
| [IMAI district clinician manual: hospital care adolescents and adults](https://www.who.int/publications/i/item/imai-district-clinician-manual-hospital-care-adolescents-and-adults) | OMS | 158 | lien vérifié (titre de la page) |
| [Surgical care at the district hospital](https://www.who.int/publications/i/item/9241545755) | OMS | 139 | lien vérifié (titre de la page) |
| [Mental Health Gap Action Programme (mhGAP) guideline for mental, neurological and substance use disorders](https://www.who.int/publications/i/item/9789240084278) | OMS | 124 | lien vérifié (titre de la page) |
| [Managing complications in pregnancy and childbirth - 2nd edition](https://www.who.int/publications/i/item/9789241565493) | OMS | 94 | lien vérifié (titre de la page) |
| [Pregnancy, childbirth, postpartum and newborn care: A guide for essential practice (3rd edition)](https://www.who.int/publications/i/item/9789241549356) | OMS | 94 | lien vérifié (titre de la page) |
| [mhGAP Intervention Guide - Version 2.0](https://www.who.int/publications/i/item/9789241549790) | OMS | 74 | lien vérifié (titre de la page) |
| [Managing newborn problems](https://www.who.int/publications/i/item/9241546220) | OMS | 28 | lien vérifié (titre de la page) |
| [Guidelines for managing advanced HIV disease and rapid initiation of antiretroviral therapy](https://www.who.int/publications/i/item/9789241550062) | OMS | 19 | lien vérifié (titre de la page) |
| [Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring](https://www.who.int/publications/i/item/9789240031593) | Organisation mondiale de la Santé | 19 | source déjà citée dans MedRef RDC |
| [WHO recommendations on maternal and newborn care for a positive postnatal experience](https://www.who.int/publications/i/item/9789240045989) | OMS | 14 | lien vérifié (titre de la page) |
| [Paediatric emergency triage, assessment and treatment: care of critically-ill children](https://www.who.int/publications/i/item/9789241510219) | OMS | 13 | lien vérifié (titre de la page) |
| [Guidelines for the management of symptomatic sexually transmitted infections](https://www.who.int/publications/i/item/9789240024168) | OMS | 13 | lien vérifié (titre de la page) |
| [Guidelines on the treatment of skin and oral HIV-associated conditions in children and adults](https://www.who.int/publications/i/item/9789241548915) | OMS | 11 | lien vérifié (titre de la page) |
| [WHO recommendations: intrapartum care for a positive childbirth experience](https://www.who.int/publications/i/item/9789241550215) | OMS | 10 | lien vérifié (titre de la page) |
| [Guidelines for essential trauma care / World Health Organization, International Society of Surgery/Société Internationale de Chirurgie and the International Association for the Surgery of Trauma and Surgical Intensive Care (IATSIC)](https://iris.who.int/handle/10665/42565) | OMS | 10 | lien vérifié (titre de la page) |
| [WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)](https://www.who.int/teams/global-tuberculosis-programme) | Organisation mondiale de la Santé | 10 | source déjà citée dans MedRef RDC |
| [The clinical use of blood in medicine, obstetrics, paediatrics, surgery and anaesthesia, trauma and burns](https://iris.who.int/handle/10665/42397) | OMS | 9 | lien vérifié (titre de la page) |
| [WHO guideline on the prevention and management of wasting and nutritional oedema](https://www.who.int/publications/i/item/9789240082830) | Organisation mondiale de la Santé | 8 | source déjà citée dans MedRef RDC |
| [Medical eligibility criteria for contraceptive use](https://www.who.int/publications/i/item/9789241549158) | OMS | 7 | lien vérifié (titre de la page) |
| [Family planning: a global handbook for providers: evidence-based guidance developed through worldwide collaboration, 3rd ed](https://www.who.int/publications/i/item/9780999203705) | OMS | 7 | lien vérifié (titre de la page) |
| [WHO recommendations on the assessment of postpartum blood loss and use of a treatment bundle for postpartum haemorrhage](https://www.who.int/publications/i/item/9789240085398) | OMS | 7 | lien vérifié (titre de la page) |
| [mhGAP Humanitarian Intervention Guide (mhGAP-HIG)](https://www.who.int/publications/i/item/9789241548922) | OMS | 7 | lien vérifié (titre de la page) |
| [WHO guidelines for malaria](https://www.who.int/publications/i/item/guidelines-for-malaria) | Organisation mondiale de la Santé | 7 | source déjà citée dans MedRef RDC |
| [WHO recommendations for the prevention and treatment of postpartum haemorrhage](https://www.who.int/publications/i/item/9789241548502) | Organisation mondiale de la Santé | 7 | source déjà citée dans MedRef RDC |
| [Risk reduction of cognitive decline and dementia: WHO guidelines](https://www.who.int/publications/i/item/9789241550543) | OMS | 5 | lien vérifié (titre de la page) |
| [Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge](https://www.who.int/teams/maternal-newborn-child-adolescent-health-and-ageing) | OMS / UNICEF | 5 | source déjà citée dans MedRef RDC |
| [The treatment of diarrhoea: a manual for physicians and other senior health workers](https://www.who.int/publications/i/item/9241593180) | Organisation mondiale de la Santé | 5 | source déjà citée dans MedRef RDC |
| [WHO recommendations on antenatal care for a positive pregnancy experience](https://www.who.int/publications/i/item/9789241549912) | OMS | 4 | lien vérifié (titre de la page) |
| [WHO recommendations for prevention and treatment of pre-eclampsia and eclampsia](https://www.who.int/publications/i/item/9789241548335) | OMS | 4 | lien vérifié (titre de la page) |
| [WHO recommendations for management of serious bacterial infections in infants aged 0–59 days](https://www.who.int/health-topics/newborn-health) | Organisation mondiale de la Santé | 4 | source déjà citée dans MedRef RDC |
| [WHO recommendations: drug treatment for severe hypertension in pregnancy](https://www.who.int/health-topics/maternal-health) | Organisation mondiale de la Santé | 4 | source déjà citée dans MedRef RDC |
| [Abortion care guideline](https://www.who.int/publications/i/item/9789240039483) | OMS | 3 | lien vérifié (titre de la page) |
| [Oxygen therapy for children](https://www.who.int/publications/i/item/9789241549554) | OMS | 3 | lien vérifié (titre de la page) |
| [WHO interim guidelines for the treatment of gambiense human African trypanosomiasis](https://www.who.int/publications/i/item/9789241550567) | OMS | 3 | lien vérifié (titre de la page) |
| [WHO guideline on control and elimination of human schistosomiasis](https://www.who.int/publications/i/item/9789240041608) | OMS | 3 | lien vérifié (titre de la page) |
| [Preventive chemotherapy to control soil-transmitted helminth infections in at-risk population groups](https://www.who.int/publications/i/item/9789241550116) | OMS | 3 | lien vérifié (titre de la page) |
| [Guidelines for stopping mass drug administration and verifying elimination of human onchocerciasis](https://www.who.int/publications/i/item/9789241510011) | OMS | 3 | lien vérifié (titre de la page) |
| [Guideline for the pharmacological treatment of hypertension in adults](https://www.who.int/publications/i/item/9789240033986) | OMS | 3 | lien vérifié (titre de la page) |
| [Global guidelines for the prevention of surgical site infection](https://www.who.int/publications/i/item/9789241550475) | OMS | 3 | lien vérifié (titre de la page) |
| [WHO guideline on the prevention and diagnosis of rheumatic fever and rheumatic heart disease](https://www.who.int/publications/i/item/9789240100077) | OMS | 3 | lien vérifié (titre de la page) |
| [Guidelines for the prevention, diagnosis, care and treatment of people with chronic hepatitis B infection](https://www.who.int/publications/i/item/9789240090903) | Organisation mondiale de la Santé | 3 | source déjà citée dans MedRef RDC |
| [WHO guidelines on meningitis diagnosis, treatment and care](https://www.who.int/health-topics/meningitis) | Organisation mondiale de la Santé | 3 | source déjà citée dans MedRef RDC |
| [WHO guideline for screening and treatment of cervical pre-cancer lesions for cervical cancer prevention](https://www.who.int/publications/i/item/9789240030824) | OMS | 2 | lien vérifié (titre de la page) |
| [WHO recommendations for care of the preterm or low-birth-weight infant](https://www.who.int/publications/i/item/9789240058262) | OMS | 2 | lien vérifié (titre de la page) |
| [Guidelines on basic newborn resuscitation](https://www.who.int/publications/i/item/9789241503693) | OMS | 2 | lien vérifié (titre de la page) |
| [Clinical management of rape and intimate partner violence survivors](https://www.who.int/publications/i/item/9789240001411) | OMS | 2 | lien vérifié (titre de la page) |
| [Guidelines for the diagnosis, treatment and prevention of leprosy](https://www.who.int/publications/i/item/9789290226383) | OMS | 2 | lien vérifié (titre de la page) |
| [Guidelines for the prevention and clinical management of snakebite in Africa](https://www.who.int/publications/i/item/9789290231684) | OMS | 2 | lien vérifié (titre de la page) |
| [Clinical management and infection prevention and control for mpox: living guideline, May 2025](https://www.who.int/publications/i/item/B09434) | OMS | 2 | lien vérifié (titre de la page) |
| [WHO Expert Consultation on Rabies: WHO TRS N°1012 Third report](https://www.who.int/publications/i/item/WHO-TRS-1012) | OMS | 2 | lien vérifié (titre de la page) |
| [Trachoma control : a guide for programme managers.](https://www.who.int/publications/i/item/9241546905) | OMS | 2 | lien vérifié (titre de la page) |
| [Daily iron supplementation in infants and children](https://www.who.int/publications/i/item/9789241549523) | OMS | 2 | lien vérifié (titre de la page) |
| [Cholera Outbreak Response: Field Manual](https://www.gtfcc.org) | Global Task Force on Cholera Control (GTFCC) — OMS | 2 | source déjà citée dans MedRef RDC |
| [WHO consolidated guidelines on tuberculosis: module 5: management of tuberculosis in children and adolescents](https://www.who.int/publications/i/item/9789240046764) | OMS | 1 | lien vérifié (titre de la page) |
| [Guidelines for diagnosing, preventing and managing cryptococcal disease among adults, adolescents and children living with HIV](https://www.who.int/publications/i/item/9789240052178) | OMS | 1 | lien vérifié (titre de la page) |
| [Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C virus infection](https://www.who.int/publications/i/item/9789241550345) | OMS | 1 | lien vérifié (titre de la page) |
| [Therapeutics for Ebola virus disease](https://www.who.int/publications/i/item/9789240055742) | OMS | 1 | lien vérifié (titre de la page) |
| [Clinical practice guidelines for influenza](https://www.who.int/publications/i/item/9789240097759) | OMS | 1 | lien vérifié (titre de la page) |
| [Guideline ‒ Alternative mass drug administration regimens to eliminate lymphatic filariasis](https://www.who.int/publications/i/item/9789241550161) | OMS | 1 | lien vérifié (titre de la page) |
| [Guidelines on second- and third-line medicines and type of insulin for the control of blood glucose levels in non-pregnant adults with diabetes mellitus](https://www.who.int/publications/i/item/9789241550284) | OMS | 1 | lien vérifié (titre de la page) |
| [Guidelines for the psychosocially assisted pharmacological treatment of opioid dependence](https://www.who.int/publications/i/item/9789241547543) | OMS | 1 | lien vérifié (titre de la page) |
| [WHO clinical treatment guideline for tobacco cessation in adults](https://www.who.int/publications/i/item/9789240096431) | OMS | 1 | lien vérifié (titre de la page) |
| [Clinical management of diphtheria: guideline, 2 February 2024](https://www.who.int/publications-detail-redirect/WHO-DIPH-Clinical-2024.1) | OMS | 1 | lien vérifié (titre de la page) |
| [WHO guidelines for clinical management of arboviral diseases: dengue, chikungunya, Zika and yellow fever](https://www.who.int/publications/i/item/9789240111110) | OMS | 1 | lien vérifié (titre de la page) |
| [WHO guidelines for plague management: revised recommendations for the use of rapid diagnostic tests, fluoroquinolones for case management and personal protective equipment for prevention of post-mortem transmission](https://www.who.int/publications/i/item/9789240015579) | OMS | 1 | lien vérifié (titre de la page) |
| [Obstetric fistula: Guiding principles for clinical management and programme development](https://www.who.int/publications/i/item/9241593679) | OMS | 1 | lien vérifié (titre de la page) |
| [Human leptospirosis : guidance for diagnosis, surveillance and control](https://iris.who.int/handle/10665/42667) | OMS | 1 | lien vérifié (titre de la page) |
| [Responding to child maltreatment: a clinical handbook for health professionals](https://www.who.int/publications/i/item/9789240048737) | OMS | 1 | lien vérifié (titre de la page) |
| [Guideline : vitamin A supplementation in infants and children 6-59 months of age](https://www.who.int/publications/i/item/9789241501767) | OMS | 1 | lien vérifié (titre de la page) |

### 3. MSF (en français)

| Protocole | Organisme | Fiches | Vérification |
|---|---|---:|---|
| [Guide clinique et thérapeutique](https://medicalguidelines.msf.org/fr/node/170) | MSF | 392 | lien vérifié (titre de la page) |
| [Soins obstétricaux et néonatals essentiels](https://medicalguidelines.msf.org/fr/node/449) | MSF | 121 | lien vérifié (titre de la page) |
| [Tuberculose](https://medicalguidelines.msf.org/fr/node/1063) | MSF | 10 | lien vérifié (titre de la page) |
| [Prise en charge d’une ÉPIDÉMIE DE CHOLÉRA](https://medicalguidelines.msf.org/fr/node/800) | MSF | 2 | lien vérifié (titre de la page) |
| [Prise en charge d’une ÉPIDÉMIE DE ROUGEOLE](https://medicalguidelines.msf.org/fr/node/498) | MSF | 1 | lien vérifié (titre de la page) |

### 4. NICE (Royaume-Uni, une recommandation par maladie)

| Protocole | Organisme | Fiches | Vérification |
|---|---|---:|---|
| [Epilepsies in children, young people and adults](https://www.nice.org.uk/guidance/ng217) | NICE | 16 | lien vérifié (titre de la page) |
| [Fractures (non-complex): assessment and management](https://www.nice.org.uk/guidance/ng38) | NICE | 12 | lien vérifié (titre de la page) |
| [Intrapartum care](https://www.nice.org.uk/guidance/ng235) | NICE | 10 | lien vérifié (titre de la page) |
| [Postnatal care](https://www.nice.org.uk/guidance/ng194) | NICE | 10 | lien vérifié (titre de la page) |
| [Major trauma: assessment and initial management](https://www.nice.org.uk/guidance/ng39) | NICE | 10 | lien vérifié (titre de la page) |
| [Head injury: assessment and early management](https://www.nice.org.uk/guidance/ng232) | NICE | 9 | lien vérifié (titre de la page) |
| [Stroke and transient ischaemic attack in over 16s: diagnosis and initial management](https://www.nice.org.uk/guidance/ng128) | NICE | 7 | lien vérifié (titre de la page) |
| [Post-traumatic stress disorder](https://www.nice.org.uk/guidance/ng116) | NICE | 7 | lien vérifié (titre de la page) |
| [Venous thromboembolic diseases: diagnosis, management and thrombophilia testing](https://www.nice.org.uk/guidance/ng158) | NICE | 5 | lien vérifié (titre de la page) |
| [Thyroid disease: assessment and management](https://www.nice.org.uk/guidance/ng145) | NICE | 5 | lien vérifié (titre de la page) |
| [Diarrhoea and vomiting caused by gastroenteritis in under 5s: diagnosis and management](https://www.nice.org.uk/guidance/cg84) | NICE | 5 | lien vérifié (titre de la page) |
| [Fertility problems: assessment and treatment](https://www.nice.org.uk/guidance/cg156) | NICE | 5 | lien vérifié (titre de la page) |
| [Dementia: assessment, management and support for people living with dementia and their carers](https://www.nice.org.uk/guidance/ng97) | NICE | 5 | lien vérifié (titre de la page) |
| [Alcohol-use disorders: diagnosis, assessment and management of harmful drinking (high-risk drinking) and alcohol dependence](https://www.nice.org.uk/guidance/cg115) | NICE | 5 | lien vérifié (titre de la page) |
| [Alcohol-use disorders: diagnosis and management of physical complications](https://www.nice.org.uk/guidance/cg100) | NICE | 5 | lien vérifié (titre de la page) |
| [Drug misuse in over 16s: psychosocial interventions](https://www.nice.org.uk/guidance/cg51) | NICE | 5 | lien vérifié (titre de la page) |
| [Asthma: diagnosis, monitoring and chronic asthma management (BTS, NICE, SIGN)](https://www.nice.org.uk/guidance/ng245) | NICE | 4 | lien vérifié (titre de la page) |
| [Neonatal infection: antibiotics for prevention and treatment](https://www.nice.org.uk/guidance/ng195) | NICE | 4 | lien vérifié (titre de la page) |
| [Gastro-oesophageal reflux disease and dyspepsia in adults: investigation and management](https://www.nice.org.uk/guidance/cg184) | NICE | 4 | lien vérifié (titre de la page) |
| [Heavy menstrual bleeding: assessment and management](https://www.nice.org.uk/guidance/ng88) | NICE | 4 | lien vérifié (titre de la page) |
| [Antenatal care](https://www.nice.org.uk/guidance/ng201) | NICE | 4 | lien vérifié (titre de la page) |
| [Hypertension in pregnancy: diagnosis and management](https://www.nice.org.uk/guidance/ng133) | NICE | 4 | lien vérifié (titre de la page) |
| [Psychosis and schizophrenia in adults: prevention and management](https://www.nice.org.uk/guidance/cg178) | NICE | 4 | lien vérifié (titre de la page) |
| [Generalised anxiety disorder and panic disorder in adults: management](https://www.nice.org.uk/guidance/cg113) | NICE | 4 | lien vérifié (titre de la page) |
| [Hypertension in adults: diagnosis and management](https://www.nice.org.uk/guidance/ng136) | NICE | 3 | lien vérifié (titre de la page) |
| [Chronic kidney disease: assessment and management](https://www.nice.org.uk/guidance/ng203) | NICE | 3 | lien vérifié (titre de la page) |
| [Osteoarthritis in over 16s: diagnosis and management](https://www.nice.org.uk/guidance/ng226) | NICE | 3 | lien vérifié (titre de la page) |
| [Low back pain and sciatica in over 16s: assessment and management](https://www.nice.org.uk/guidance/ng59) | NICE | 3 | lien vérifié (titre de la page) |
| [Meningitis (bacterial) and meningococcal disease: recognition, diagnosis and management](https://www.nice.org.uk/guidance/ng240) | NICE | 3 | lien vérifié (titre de la page) |
| [Pyelonephritis (acute): antimicrobial prescribing](https://www.nice.org.uk/guidance/ng111) | NICE | 3 | lien vérifié (titre de la page) |
| [Specialist neonatal respiratory care for babies born preterm](https://www.nice.org.uk/guidance/ng124) | NICE | 3 | lien vérifié (titre de la page) |
| [Cirrhosis in over 16s: assessment and management](https://www.nice.org.uk/guidance/ng50) | NICE | 3 | lien vérifié (titre de la page) |
| [Hepatitis B (chronic): diagnosis and management](https://www.nice.org.uk/guidance/cg165) | NICE | 3 | lien vérifié (titre de la page) |
| [Caesarean birth](https://www.nice.org.uk/guidance/ng192) | NICE | 3 | lien vérifié (titre de la page) |
| [Spinal injury: assessment and initial management](https://www.nice.org.uk/guidance/ng41) | NICE | 3 | lien vérifié (titre de la page) |
| [Headaches in over 12s: diagnosis and management](https://www.nice.org.uk/guidance/cg150) | NICE | 3 | lien vérifié (titre de la page) |
| [Acute coronary syndromes](https://www.nice.org.uk/guidance/ng185) | NICE | 2 | lien vérifié (titre de la page) |
| [Acute kidney injury: prevention, detection and management](https://www.nice.org.uk/guidance/ng148) | NICE | 2 | lien vérifié (titre de la page) |
| [Diabetes (type 1 and type 2) in children and young people: diagnosis and management](https://www.nice.org.uk/guidance/ng18) | NICE | 2 | lien vérifié (titre de la page) |
| [Atopic eczema in under 12s: diagnosis and management](https://www.nice.org.uk/guidance/cg57) | NICE | 2 | lien vérifié (titre de la page) |
| [Impetigo: antimicrobial prescribing](https://www.nice.org.uk/guidance/ng153) | NICE | 2 | lien vérifié (titre de la page) |
| [Suspected sepsis: recognition, diagnosis and early management](https://www.nice.org.uk/guidance/ng51) | NICE | 2 | lien vérifié (titre de la page) |
| [Fever in under 5s: assessment and initial management](https://www.nice.org.uk/guidance/ng143) | NICE | 2 | lien vérifié (titre de la page) |
| [Pancreatitis](https://www.nice.org.uk/guidance/ng104) | NICE | 2 | lien vérifié (titre de la page) |
| [Endometriosis: diagnosis and management](https://www.nice.org.uk/guidance/ng73) | NICE | 2 | lien vérifié (titre de la page) |
| [Menopause: identification and management](https://www.nice.org.uk/guidance/ng23) | NICE | 2 | lien vérifié (titre de la page) |
| [Ectopic pregnancy and miscarriage: diagnosis and initial management](https://www.nice.org.uk/guidance/ng126) | NICE | 2 | lien vérifié (titre de la page) |
| [Diabetes in pregnancy: management from preconception to the postnatal period](https://www.nice.org.uk/guidance/ng3) | NICE | 2 | lien vérifié (titre de la page) |
| [Inducing labour](https://www.nice.org.uk/guidance/ng207) | NICE | 2 | lien vérifié (titre de la page) |
| [Preterm labour and birth](https://www.nice.org.uk/guidance/ng25) | NICE | 2 | lien vérifié (titre de la page) |
| [Twin and triplet pregnancy](https://www.nice.org.uk/guidance/ng137) | NICE | 2 | lien vérifié (titre de la page) |
| [Urinary incontinence and pelvic organ prolapse in women: management](https://www.nice.org.uk/guidance/ng123) | NICE | 2 | lien vérifié (titre de la page) |
| [Lower urinary tract symptoms in men: management](https://www.nice.org.uk/guidance/cg97) | NICE | 2 | lien vérifié (titre de la page) |
| [Sinusitis (acute): antimicrobial prescribing](https://www.nice.org.uk/guidance/ng79) | NICE | 2 | lien vérifié (titre de la page) |
| [Sore throat (acute): antimicrobial prescribing](https://www.nice.org.uk/guidance/ng84) | NICE | 2 | lien vérifié (titre de la page) |
| [Parkinson’s disease in adults](https://www.nice.org.uk/guidance/ng71) | NICE | 2 | lien vérifié (titre de la page) |
| [Multiple sclerosis in adults: management](https://www.nice.org.uk/guidance/ng220) | NICE | 2 | lien vérifié (titre de la page) |
| [Depression in adults: treatment and management](https://www.nice.org.uk/guidance/ng222) | NICE | 2 | lien vérifié (titre de la page) |
| [Anaphylaxis: assessment and referral after emergency treatment](https://www.nice.org.uk/guidance/cg134) | NICE | 2 | lien vérifié (titre de la page) |
| [Chronic heart failure in adults: diagnosis and management](https://www.nice.org.uk/guidance/ng106) | NICE | 1 | lien vérifié (titre de la page) |
| [Atrial fibrillation: diagnosis and management](https://www.nice.org.uk/guidance/ng196) | NICE | 1 | lien vérifié (titre de la page) |
| [Stable angina: management](https://www.nice.org.uk/guidance/cg126) | NICE | 1 | lien vérifié (titre de la page) |
| [Type 2 diabetes in adults: management](https://www.nice.org.uk/guidance/ng28) | NICE | 1 | lien vérifié (titre de la page) |
| [Type 1 diabetes in adults: diagnosis and management](https://www.nice.org.uk/guidance/ng17) | NICE | 1 | lien vérifié (titre de la page) |
| [Diabetic foot problems: prevention and management](https://www.nice.org.uk/guidance/ng19) | NICE | 1 | lien vérifié (titre de la page) |
| [Cardiovascular disease: risk assessment and reduction, including lipid modification](https://www.nice.org.uk/guidance/ng238) | NICE | 1 | lien vérifié (titre de la page) |
| [Overweight and obesity management](https://www.nice.org.uk/guidance/ng246) | NICE | 1 | lien vérifié (titre de la page) |
| [Gout: diagnosis and management](https://www.nice.org.uk/guidance/ng219) | NICE | 1 | lien vérifié (titre de la page) |
| [Rheumatoid arthritis in adults: management](https://www.nice.org.uk/guidance/ng100) | NICE | 1 | lien vérifié (titre de la page) |
| [Spondyloarthritis in over 16s: diagnosis and management](https://www.nice.org.uk/guidance/ng65) | NICE | 1 | lien vérifié (titre de la page) |
| [Psoriasis: assessment and management](https://www.nice.org.uk/guidance/cg153) | NICE | 1 | lien vérifié (titre de la page) |
| [Acne vulgaris: management](https://www.nice.org.uk/guidance/ng198) | NICE | 1 | lien vérifié (titre de la page) |
| [Cellulitis and erysipelas: antimicrobial prescribing](https://www.nice.org.uk/guidance/ng141) | NICE | 1 | lien vérifié (titre de la page) |
| [Pneumonia (community-acquired): antimicrobial prescribing](https://www.nice.org.uk/guidance/ng138) | NICE | 1 | lien vérifié (titre de la page) |
| [Chronic obstructive pulmonary disease in over 16s: diagnosis and management](https://www.nice.org.uk/guidance/ng115) | NICE | 1 | lien vérifié (titre de la page) |
| [Bronchiolitis in children: diagnosis and management](https://www.nice.org.uk/guidance/ng9) | NICE | 1 | lien vérifié (titre de la page) |
| [Urinary tract infection in under 16s: diagnosis and management](https://www.nice.org.uk/guidance/ng224) | NICE | 1 | lien vérifié (titre de la page) |
| [Jaundice in newborn babies under 28 days](https://www.nice.org.uk/guidance/cg98) | NICE | 1 | lien vérifié (titre de la page) |
| [Constipation in children and young people: diagnosis and management](https://www.nice.org.uk/guidance/cg99) | NICE | 1 | lien vérifié (titre de la page) |
| [Acute upper gastrointestinal bleeding in over 16s: management](https://www.nice.org.uk/guidance/cg141) | NICE | 1 | lien vérifié (titre de la page) |
| [Renal and ureteric stones: assessment and management](https://www.nice.org.uk/guidance/ng118) | NICE | 1 | lien vérifié (titre de la page) |
| [Glaucoma: diagnosis and management](https://www.nice.org.uk/guidance/ng81) | NICE | 1 | lien vérifié (titre de la page) |
| [Cataracts in adults: management](https://www.nice.org.uk/guidance/ng77) | NICE | 1 | lien vérifié (titre de la page) |
| [Otitis media (acute): antimicrobial prescribing](https://www.nice.org.uk/guidance/ng91) | NICE | 1 | lien vérifié (titre de la page) |
| [Delirium: prevention, diagnosis and management in hospital and long-term care](https://www.nice.org.uk/guidance/cg103) | NICE | 1 | lien vérifié (titre de la page) |
| [Depression in children and young people: identification and management](https://www.nice.org.uk/guidance/ng134) | NICE | 1 | lien vérifié (titre de la page) |
| [Bipolar disorder: assessment and management](https://www.nice.org.uk/guidance/cg185) | NICE | 1 | lien vérifié (titre de la page) |
| [Obsessive-compulsive disorder and body dysmorphic disorder: treatment](https://www.nice.org.uk/guidance/cg31) | NICE | 1 | lien vérifié (titre de la page) |
| [Eating disorders: recognition and treatment](https://www.nice.org.uk/guidance/ng69) | NICE | 1 | lien vérifié (titre de la page) |
| [Self-harm: assessment, management and preventing recurrence](https://www.nice.org.uk/guidance/ng225) | NICE | 1 | lien vérifié (titre de la page) |
| [Attention deficit hyperactivity disorder: diagnosis and management](https://www.nice.org.uk/guidance/ng87) | NICE | 1 | lien vérifié (titre de la page) |
| [Autism spectrum disorder in under 19s: recognition, referral and diagnosis](https://www.nice.org.uk/guidance/cg128) | NICE | 1 | lien vérifié (titre de la page) |
| [Tobacco: preventing uptake, promoting quitting and treating dependence](https://www.nice.org.uk/guidance/ng209) | NICE | 1 | lien vérifié (titre de la page) |
| [Subarachnoid haemorrhage caused by a ruptured aneurysm: diagnosis and management](https://www.nice.org.uk/guidance/ng228) | NICE | 1 | lien vérifié (titre de la page) |
| [Transient loss of consciousness ('blackouts') in over 16s](https://www.nice.org.uk/guidance/cg109) | NICE | 1 | lien vérifié (titre de la page) |
| [Child abuse and neglect](https://www.nice.org.uk/guidance/ng76) | NICE | 1 | lien vérifié (titre de la page) |

### 5. Sociétés savantes et autres références

| Protocole | Organisme | Fiches | Vérification |
|---|---|---:|---|
| [EAN — recommandations de pratique clinique](https://www.ean.org) | European Academy of Neurology | 68 | source déjà citée dans MedRef RDC |
| [WSES — recommandations de pratique clinique](https://www.wses.org.uk) | World Society of Emergency Surgery | 61 | source déjà citée dans MedRef RDC |
| [ESMO — recommandations de pratique clinique](https://www.esmo.org/guidelines) | European Society for Medical Oncology | 31 | source déjà citée dans MedRef RDC |
| [NCCN — recommandations de pratique clinique](https://www.nccn.org/guidelines) | National Comprehensive Cancer Network | 31 | source déjà citée dans MedRef RDC |
| [AAOS — recommandations de pratique clinique](https://www.aaos.org) | American Academy of Orthopaedic Surgeons | 28 | source déjà citée dans MedRef RDC |
| [EAU Guidelines - Uroweb](https://uroweb.org/guidelines) | European Association of Urology | 17 | lien vérifié (titre de la page) |
| [Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV](https://clinicalinfo.hiv.gov/en/guidelines/adult-and-adolescent-opportunistic-infection) | NIH / CDC / HIVMA-IDSA | 15 | confirmé par recherche (site protégé contre les robots) |
| [Preferred Practice Pattern® Guidelines](https://aao.org/about-preferred-practice-patterns) | American Academy of Ophthalmology | 13 | confirmé par recherche (site protégé contre les robots) |
| [American Society of Hematology 2020 guidelines for sickle cell disease: management of acute and chronic pain](https://www.hematology.org/education/clinicians/guidelines-and-quality-care/clinical-practice-guidelines/sickle-cell-disease-guidelines) | American Society of Hematology | 12 | source déjà citée dans MedRef RDC |
| [Evidence-Based Management of Sickle Cell Disease: Expert Panel Report](https://www.nhlbi.nih.gov) | NHLBI — National Institutes of Health | 12 | source déjà citée dans MedRef RDC |
| [AANS — recommandations de pratique clinique](https://www.aans.org) | American Association of Neurological Surgeons | 11 | source déjà citée dans MedRef RDC |
| [Guidelines for the Management of Severe Traumatic Brain Injury (4th edition)](https://braintrauma.org) | Brain Trauma Foundation | 9 | source déjà citée dans MedRef RDC |
| [Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update](https://professional.heart.org/en/guidelines-and-statements) | American Heart Association / American Stroke Association | 9 | source déjà citée dans MedRef RDC |
| [ESO — recommandations de pratique clinique](https://eso-stroke.org) | European Stroke Organisation | 9 | source déjà citée dans MedRef RDC |
| [AHA — recommandations de pratique clinique](https://professional.heart.org/en/guidelines-and-statements) | American Heart Association | 8 | source déjà citée dans MedRef RDC |
| [AAP — recommandations de pratique clinique](https://www.aap.org) | American Academy of Pediatrics | 8 | source déjà citée dans MedRef RDC |
| [FIGO recommendations on the management of postpartum hemorrhage 2022](https://www.figo.org) | International Federation of Gynecology and Obstetrics | 7 | source déjà citée dans MedRef RDC |
| [SCCM — recommandations de pratique clinique](https://www.sccm.org) | Society of Critical Care Medicine | 6 | source déjà citée dans MedRef RDC |
| [A framework to develop adapted treatment regimens to manage pediatric cancer in low- and middle-income countries (SIOP PODC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6428601) | SIOP — Paediatric Oncology in Developing Countries | 5 | confirmé par recherche (site protégé contre les robots) |
| [BTS guideline for pleural disease in adults.](https://www.brit-thoracic.org.uk/quality-improvement/guidelines/pleural-disease/) | British Thoracic Society | 4 | lien vérifié (titre de la page) |
| [GINA — Global Strategy for Asthma Management and Prevention](https://ginasthma.org) | Global Initiative for Asthma | 4 | source déjà citée dans MedRef RDC |
| [2024 ESC Guidelines for the management of elevated blood pressure and hypertension](https://www.escardio.org/Guidelines) | European Society of Cardiology | 3 | source déjà citée dans MedRef RDC |
| [ADA — Standards of Care in Diabetes](https://professional.diabetes.org/standards-of-care) | American Diabetes Association | 3 | source déjà citée dans MedRef RDC |
| [Hyperglycemic Crises in Adults With Diabetes: A Consensus Report](https://diabetesjournals.org/care) | ADA / EASD / JBDS / AACE / DTS | 3 | source déjà citée dans MedRef RDC |
| [WSES Jerusalem guidelines on acute appendicitis](https://www.wses.org.uk) | World Society of Emergency Surgery | 3 | source déjà citée dans MedRef RDC |
| [WFH Guidelines for the Management of Hemophilia, 3rd edition (2020)](https://www1.wfh.org/publications/files/pdf-1863.pdf) | World Federation of Hemophilia | 2 | confirmé par recherche (site protégé contre les robots) |
| [ISPAD Clinical Practice Consensus Guidelines 2022 (dont acidocétose et état hyperosmolaire)](https://www.ispad.org/resources/ispad-clinical-practice-consensus-guidelines/2022-ispad-clinical-practice-consensus-guidelines.html) | International Society for Pediatric and Adolescent Diabetes | 2 | confirmé par recherche (site protégé contre les robots) |
| [KDIGO Clinical Practice Guideline for Acute Kidney Injury](https://kdigo.org/guidelines/acute-kidney-injury/) | KDIGO | 2 | source déjà citée dans MedRef RDC |
| [KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease](https://kdigo.org/guidelines/ckd-evaluation-and-management/) | KDIGO | 2 | source déjà citée dans MedRef RDC |
| [Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021](https://www.sccm.org/SurvivingSepsisCampaign) | Society of Critical Care Medicine / ESICM | 2 | source déjà citée dans MedRef RDC |
| [RCOG Green-top Guideline No. 21: Diagnosis and Management of Ectopic Pregnancy](https://www.rcog.org.uk/guidance/) | Royal College of Obstetricians and Gynaecologists | 2 | source déjà citée dans MedRef RDC |
| [Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (2017 update, WSES)](https://www.wses.org.uk) | World Society of Emergency Surgery | 2 | source déjà citée dans MedRef RDC |
| [The management of intra-abdominal infections from a global perspective: 2017 WSES guidelines](https://www.wses.org.uk) | World Society of Emergency Surgery | 2 | source déjà citée dans MedRef RDC |
| [ASTMH/IDSA 2017 Clinical Practice Guideline Update for the Diagnosis and Treatment of Neurocysticercosis](https://www.idsociety.org/practice-guideline/neurocysticercosis/) | IDSA / ASTMH | 1 | lien vérifié (titre de la page) |
| [Global Clubfoot Initiative](https://globalclubfoot.com/) | Global Clubfoot Initiative | 1 | lien vérifié (titre de la page) |
| [Guidelines for the Management of Transfusion Dependent Thalassaemia, 4th edition (2021)](https://thalassaemia.org.cy/publications/tif-publications/guidelines-for-the-management-of-transfusion-dependent-thalassaemia-4th-edition-2021-v2/) | Thalassaemia International Federation | 1 | confirmé par recherche (site protégé contre les robots) |
| [Global Consensus Recommendations on Prevention and Management of Nutritional Rickets (2016)](https://pubmed.ncbi.nlm.nih.gov/26745253/) | Consensus international (11 sociétés savantes) | 1 | confirmé par recherche (site protégé contre les robots) |
| [2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure (mise à jour 2023)](https://www.escardio.org/Guidelines) | European Society of Cardiology | 1 | source déjà citée dans MedRef RDC |
| [Vascular Surgery Guidelines / ESVS](https://esvs.org/guidelines/) | European Society for Vascular Surgery | 0 | lien vérifié (titre de la page) |
| [Green-top Guidelines / RCOG](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/) | RCOG | 0 | lien vérifié (titre de la page) |

## Fichiers

- `protocoles-par-fiche.csv` : une ligne par fiche (département, spécialité, identifiant, nom, protocole propre ou non, titres, liens), séparateur « ; », s'ouvre dans Excel.
- `protocoles-par-specialite.md` : la même chose en lecture, fiche par fiche, avec les liens cliquables.
- `catalogue.json` : le catalogue au format machine (pour un import éventuel dans l'application).
