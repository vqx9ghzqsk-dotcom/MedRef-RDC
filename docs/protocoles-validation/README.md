# Protocoles de prise en charge pour valider les fiches de MedRef RDC

Recherche faite les 15 et 16 octobre 2026 pour les **792 fiches de pathologies** de l'application. Les protocoles viennent de la RDC quand ils existent, puis de l'OMS, de MSF et d'autres pays ou sociétés savantes (Royaume-Uni, Europe, États-Unis, Australie, Suisse, France, Japon…).

## Comment s'en servir

Pour valider une fiche, ouvrez [protocoles-par-specialite.md](protocoles-par-specialite.md) (lecture) ou [protocoles-par-fiche.csv](protocoles-par-fiche.csv) (Excel, une ligne par fiche, avec les liens). Les protocoles de chaque fiche sont classés dans l'ordre de lecture recommandé :

1. **Document officiel congolais** (programme national) quand il existe ;
2. **OMS**, puis **MSF** (guides en français, adaptés aux milieux à ressources limitées) ;
3. **Société savante** ou **NICE** pour les points que les deux premiers ne couvrent pas.

En cas de désaccord, la directive nationale congolaise en vigueur prime ; la fiche doit le signaler quand elle s'en écarte.

## Résultat

- **792 fiches sur 792** ont au moins un protocole **propre à la maladie** (par exemple « WHO guidelines for plague management » pour la peste, « 2023 ESC Guidelines for the management of endocarditis » pour l'endocardite infectieuse, « Croup (RCH Clinical Practice Guidelines) » pour la laryngite aiguë de l'enfant).
- Chaque fiche garde aussi le **manuel de référence de sa spécialité** (guide HGR et *IMAI* en médecine adulte, *Pocket book of hospital care for children* en pédiatrie, *Managing complications in pregnancy and childbirth* en obstétrique, *Surgical care at the district hospital* en chirurgie, mhGAP en santé mentale), utile pour la conduite à tenir avec les moyens d'un hôpital de district.
- **588 protocoles** au total (colonne « Vérification » du catalogue) :
  - 310 pages **contrôlées** : la page répond et son titre correspond au document attendu ; les liens refusés ont été écartés ;
  - 215 recommandations publiées en revue dont le **titre exact a été confirmé dans Europe PMC** (numéro PubMed indiqué) ; le lien ouvre le texte intégral gratuit sur PubMed Central quand il existe, sinon la notice PubMed ;
  - 10 documents PDF des HUG (Genève) dont le serveur a répondu ;
  - 8 liens confirmés par une recherche (sites qui bloquent le contrôle automatique), 6 documents congolais du dossier local et 39 sources déjà présentes dans l'application, reprises avec leur lien d'origine.
- Les fiches pédiatriques ne reçoivent pas de recommandation réservée à l'adulte (tout titre limité à l'adulte est écarté automatiquement).
- **Médicaments et grossesse** : il n'existe pas de recommandation unique ; les deux retenues (psychotropes, BAP 2017 ; antalgiques et traitements de rhumatologie, BSR 2016) ne couvrent qu'une partie de la fiche.

## Fiches validables seulement avec une revue de la littérature

Pour ces 22 fiches, aucune recommandation publiée n'a été trouvée : le protocole proposé est une **revue** (niveau 3), à lire avec plus de prudence et à confronter au manuel de la spécialité.

- Complications de la dépigmentation volontaire (Dermatologie) : Skin lightening: causes and complications
- Tungose (Dermatologie) : Tungiasis--a neglected disease with many challenges for global public health
- Abcès amibien du foie (Gastro-entérologie et hépatologie) : Amoebiasis
- Amibiase intestinale (Gastro-entérologie et hépatologie) : Amoebiasis
- Loase (Infectiologie) : Loiasis: new epidemiologic insights and proposed treatment strategy
- Œdèmes généralisés (démarche diagnostique) (Médecine interne générale) : Edema: diagnosis and management
- Abcès pulmonaire (Pneumologie) : Management of pleural effusion, empyema, and lung abscess
- Retard pubertaire (Endocrinologie pédiatrique) : An Approach to the Patient With Delayed Puberty
- Hémorragie digestive de l’enfant (Gastro-entérologie pédiatrique) : Gastrointestinal bleeding in children: diagnostic approach
- Hépatosplénomégalie de l’enfant (Gastro-entérologie pédiatrique) : Chronic hepatosplenomegaly in African school children: a common but neglected morbidity associated with schistosomiasis and malaria
- Polyglobulie néonatale (Néonatologie) : Neonatal polycythemia and hyperviscosity
- Traumatismes obstétricaux du nouveau-né (Néonatologie) : Birth Injuries in Neonates
- Konzo (Neurologie pédiatrique) : Konzo: from poverty, cassava, and cyanogen intake to toxico-nutritional neurological disease ; Neurological disorders associated with cassava diet: a review of putative etiological mechanisms
- Mastoïdite (ORL et ophtalmologie pédiatriques) : Management of paediatric acute mastoiditis: systematic review
- Kyste et abcès de la glande de Bartholin (Gynécologie) : Management of Bartholin duct cysts and abscesses: a systematic review
- Mastodynies (Sénologie) : A Review of Breast Pain: Causes, Imaging Recommendations, and Treatment
- Sténose du pylore de l’adulte (Chirurgie digestive) : Benign gastric outlet obstruction--spectrum and management
- Lipomes et kystes sébacés (Chirurgie générale) : Diagnosing Common Benign Skin Tumors
- Ptérygion (Ophtalmologie) : Pterygium: an update on pathophysiology, clinical features, and management
- Genu varum et genu valgum (Orthopédie) : Lower Extremity Abnormalities in Children
- Neuropathie ataxique tropicale (manioc) (Neurologie) : Neurological disorders associated with cassava diet: a review of putative etiological mechanisms
- Paralysie périodique hypokaliémique (Neurologie) : Review of the Diagnosis and Treatment of Periodic Paralysis

## Méthode de vérification

1. Chaque page web candidate a été téléchargée : elle doit répondre et son titre doit correspondre au document attendu (OMS, NICE, RCOG, EAU, RCH Melbourne, IDSA, BOA, BSSH…).
2. Chaque recommandation publiée en revue a été recherchée dans **Europe PMC** par son titre : seule la version attendue est retenue (corrections, lettres et commentaires écartés ; édition la plus récente préférée quand il en existe plusieurs).
3. Les règles qui rattachent un protocole à une fiche portent sur le nom de la fiche ; la correspondance complète est dans `correspondance.json`.

Ces contrôles garantissent que le document existe et qu'il traite bien de la maladie ; ils ne remplacent pas la **lecture par le médecin validateur**, seul à même de dire si la fiche est conforme.

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
| [Guidelines for the management of symptomatic sexually transmitted infections](https://www.who.int/publications/i/item/9789240024168) | OMS | 14 | lien vérifié (titre de la page) |
| [Paediatric emergency triage, assessment and treatment: care of critically-ill children](https://www.who.int/publications/i/item/9789241510219) | OMS | 13 | lien vérifié (titre de la page) |
| [WHO recommendations: intrapartum care for a positive childbirth experience](https://www.who.int/publications/i/item/9789241550215) | OMS | 11 | lien vérifié (titre de la page) |
| [Guidelines on the treatment of skin and oral HIV-associated conditions in children and adults](https://www.who.int/publications/i/item/9789241548915) | OMS | 11 | lien vérifié (titre de la page) |
| [Guidelines for essential trauma care / World Health Organization, International Society of Surgery/Société Internationale de Chirurgie and the International Association for the Surgery of Trauma and Surgical Intensive Care (IATSIC)](https://iris.who.int/handle/10665/42565) | OMS | 10 | lien vérifié (titre de la page) |
| [WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)](https://www.who.int/teams/global-tuberculosis-programme) | Organisation mondiale de la Santé | 10 | source déjà citée dans MedRef RDC |
| [The clinical use of blood in medicine, obstetrics, paediatrics, surgery and anaesthesia, trauma and burns](https://iris.who.int/handle/10665/42397) | OMS | 9 | lien vérifié (titre de la page) |
| [mhGAP Humanitarian Intervention Guide (mhGAP-HIG)](https://www.who.int/publications/i/item/9789241548922) | OMS | 8 | lien vérifié (titre de la page) |
| [WHO guideline on the prevention and management of wasting and nutritional oedema](https://www.who.int/publications/i/item/9789240082830) | Organisation mondiale de la Santé | 8 | source déjà citée dans MedRef RDC |
| [Medical eligibility criteria for contraceptive use](https://www.who.int/publications/i/item/9789241549158) | OMS | 7 | lien vérifié (titre de la page) |
| [Family planning: a global handbook for providers: evidence-based guidance developed through worldwide collaboration, 3rd ed](https://www.who.int/publications/i/item/9780999203705) | OMS | 7 | lien vérifié (titre de la page) |
| [WHO recommendations on the assessment of postpartum blood loss and use of a treatment bundle for postpartum haemorrhage](https://www.who.int/publications/i/item/9789240085398) | OMS | 7 | lien vérifié (titre de la page) |
| [WHO guidelines for malaria](https://www.who.int/publications/i/item/guidelines-for-malaria) | Organisation mondiale de la Santé | 7 | source déjà citée dans MedRef RDC |
| [WHO recommendations for the prevention and treatment of postpartum haemorrhage](https://www.who.int/publications/i/item/9789241548502) | Organisation mondiale de la Santé | 7 | source déjà citée dans MedRef RDC |
| [Risk reduction of cognitive decline and dementia: WHO guidelines](https://www.who.int/publications/i/item/9789241550543) | OMS | 5 | lien vérifié (titre de la page) |
| [Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge](https://www.who.int/teams/maternal-newborn-child-adolescent-health-and-ageing) | OMS / UNICEF | 5 | source déjà citée dans MedRef RDC |
| [The treatment of diarrhoea: a manual for physicians and other senior health workers](https://www.who.int/publications/i/item/9241593180) | Organisation mondiale de la Santé | 5 | source déjà citée dans MedRef RDC |
| [WHO recommendations on antenatal care for a positive pregnancy experience](https://www.who.int/publications/i/item/9789241549912) | OMS | 4 | lien vérifié (titre de la page) |
| [WHO recommendations for prevention and treatment of pre-eclampsia and eclampsia](https://www.who.int/publications/i/item/9789241548335) | OMS | 4 | lien vérifié (titre de la page) |
| [Abortion care guideline](https://www.who.int/publications/i/item/9789240039483) | OMS | 4 | lien vérifié (titre de la page) |
| [WHO recommendations for management of serious bacterial infections in infants aged 0–59 days](https://www.who.int/health-topics/newborn-health) | Organisation mondiale de la Santé | 4 | source déjà citée dans MedRef RDC |
| [WHO recommendations: drug treatment for severe hypertension in pregnancy](https://www.who.int/health-topics/maternal-health) | Organisation mondiale de la Santé | 4 | source déjà citée dans MedRef RDC |
| [Oxygen therapy for children](https://www.who.int/publications/i/item/9789241549554) | OMS | 3 | lien vérifié (titre de la page) |
| [WHO interim guidelines for the treatment of gambiense human African trypanosomiasis](https://www.who.int/publications/i/item/9789241550567) | OMS | 3 | lien vérifié (titre de la page) |
| [WHO guideline on control and elimination of human schistosomiasis](https://www.who.int/publications/i/item/9789240041608) | OMS | 3 | lien vérifié (titre de la page) |
| [Preventive chemotherapy to control soil-transmitted helminth infections in at-risk population groups](https://www.who.int/publications/i/item/9789241550116) | OMS | 3 | lien vérifié (titre de la page) |
| [Guidelines for stopping mass drug administration and verifying elimination of human onchocerciasis](https://www.who.int/publications/i/item/9789241510011) | OMS | 3 | lien vérifié (titre de la page) |
| [Guideline for the pharmacological treatment of hypertension in adults](https://www.who.int/publications/i/item/9789240033986) | OMS | 3 | lien vérifié (titre de la page) |
| [Global guidelines for the prevention of surgical site infection](https://www.who.int/publications/i/item/9789241550475) | OMS | 3 | lien vérifié (titre de la page) |
| [WHO guideline on the prevention and diagnosis of rheumatic fever and rheumatic heart disease](https://www.who.int/publications/i/item/9789240100077) | OMS | 3 | lien vérifié (titre de la page) |
| [Background document : the diagnosis, treatment and prevention of typhoid fever](https://iris.who.int/handle/10665/68122) | OMS | 3 | lien vérifié (titre de la page) |
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
| [Current recommendations for treatment of tetanus during humanitarian emergencies](https://www.who.int/publications-detail-redirect/current-recommendations-for-treatment-of-tetanus-during-humanitarian-emergencies) | OMS | 2 | lien vérifié (titre de la page) |
| [Clinical management of acute pesticide intoxication: prevention of suicidal behaviours](https://www.who.int/publications/i/item/9789241597456) | OMS | 2 | lien vérifié (titre de la page) |
| [Preventing early pregnancy and poor reproductive outcomes among adolescents in developing countries](https://www.who.int/publications/i/item/9789241502214) | OMS | 2 | lien vérifié (titre de la page) |
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
| [Information brochure for early detection and management of noma](https://www.who.int/publications-detail-redirect/9789290233541) | OMS — Bureau régional de l’Afrique | 1 | lien vérifié (titre de la page) |
| [Guidelines for HIV post-exposure prophylaxis](https://www.who.int/publications/i/item/9789240095137) | OMS | 1 | lien vérifié (titre de la page) |
| [Eradication of yaws – A guide for programme managers](https://www.who.int/publications/i/item/9789241512695) | OMS | 1 | lien vérifié (titre de la page) |
| [Clinical management of COVID-19: living guideline, June 2025](https://www.who.int/publications/i/item/B09467) | OMS | 1 | lien vérifié (titre de la page) |
| [Guidelines for the control of shigellosis, including epidemics due to Shigella dysenteriae type 1](https://www.who.int/publications/i/item/9241592330) | OMS | 1 | lien vérifié (titre de la page) |
| [Treatment of Mycobacterium ulcerans disease (Buruli Ulcer) Guidance for health workers](https://www.who.int/publications/i/item/9789241503402) | OMS | 1 | lien vérifié (titre de la page) |
| [Mastitis : causes and management](https://iris.who.int/handle/10665/66230) | OMS | 1 | lien vérifié (titre de la page) |
| [Chronic suppurative otitis media : burden of illness and management options](https://iris.who.int/handle/10665/42941) | OMS | 1 | lien vérifié (titre de la page) |
| [World report on hearing](https://www.who.int/publications/i/item/9789240020481) | OMS | 1 | lien vérifié (titre de la page) |
| [World report on vision](https://www.who.int/publications/i/item/9789241516570) | OMS | 1 | lien vérifié (titre de la page) |
| [WHO Guideline for complementary feeding of infants and young children 6-23 months of age](https://www.who.int/publications/i/item/9789240081864) | OMS | 1 | lien vérifié (titre de la page) |
| [Birth defects surveillance: A manual for programme managers, 2nd Edition](https://www.who.int/publications/i/item/9789240015395) | OMS | 1 | lien vérifié (titre de la page) |
| [Causality assessment of an adverse event following immunization (AEFI): user manual for the revised WHO classification, 2nd ed., 2019 update](https://www.who.int/publications/i/item/9789241516990) | OMS | 1 | lien vérifié (titre de la page) |
| [Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection](https://www.who.int/publications/i/item/9789240090903) | OMS | 1 | lien vérifié (titre de la page) |
| [Global guidance for conducting acute flaccid paralysis (AFP) surveillance in the context of poliovirus eradication](https://iris.who.int/handle/10665/376603) | OMS | 1 | lien vérifié (titre de la page) |
| [Guidelines for poliovirus surveillance in the WHO African Region](https://www.afro.who.int/publications/guidelines-poliovirus-surveillance-who-african-region) | OMS — Bureau régional de l’Afrique | 1 | lien vérifié (titre de la page) |

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
| [Intrapartum care](https://www.nice.org.uk/guidance/ng235) | NICE | 11 | lien vérifié (titre de la page) |
| [Postnatal care](https://www.nice.org.uk/guidance/ng194) | NICE | 10 | lien vérifié (titre de la page) |
| [Major trauma: assessment and initial management](https://www.nice.org.uk/guidance/ng39) | NICE | 10 | lien vérifié (titre de la page) |
| [Head injury: assessment and early management](https://www.nice.org.uk/guidance/ng232) | NICE | 9 | lien vérifié (titre de la page) |
| [Stroke and transient ischaemic attack in over 16s: diagnosis and initial management](https://www.nice.org.uk/guidance/ng128) | NICE | 7 | lien vérifié (titre de la page) |
| [Post-traumatic stress disorder](https://www.nice.org.uk/guidance/ng116) | NICE | 7 | lien vérifié (titre de la page) |
| [Venous thromboembolic diseases: diagnosis, management and thrombophilia testing](https://www.nice.org.uk/guidance/ng158) | NICE | 5 | lien vérifié (titre de la page) |
| [Thyroid disease: assessment and management](https://www.nice.org.uk/guidance/ng145) | NICE | 5 | lien vérifié (titre de la page) |
| [Diarrhoea and vomiting caused by gastroenteritis in under 5s: diagnosis and management](https://www.nice.org.uk/guidance/cg84) | NICE | 5 | lien vérifié (titre de la page) |
| [Gastro-oesophageal reflux disease and dyspepsia in adults: investigation and management](https://www.nice.org.uk/guidance/cg184) | NICE | 5 | lien vérifié (titre de la page) |
| [Fertility problems: assessment and treatment](https://www.nice.org.uk/guidance/cg156) | NICE | 5 | lien vérifié (titre de la page) |
| [Dementia: assessment, management and support for people living with dementia and their carers](https://www.nice.org.uk/guidance/ng97) | NICE | 5 | lien vérifié (titre de la page) |
| [Alcohol-use disorders: diagnosis, assessment and management of harmful drinking (high-risk drinking) and alcohol dependence](https://www.nice.org.uk/guidance/cg115) | NICE | 5 | lien vérifié (titre de la page) |
| [Alcohol-use disorders: diagnosis and management of physical complications](https://www.nice.org.uk/guidance/cg100) | NICE | 5 | lien vérifié (titre de la page) |
| [Drug misuse in over 16s: psychosocial interventions](https://www.nice.org.uk/guidance/cg51) | NICE | 5 | lien vérifié (titre de la page) |
| [Asthma: diagnosis, monitoring and chronic asthma management (BTS, NICE, SIGN)](https://www.nice.org.uk/guidance/ng245) | NICE | 4 | lien vérifié (titre de la page) |
| [Neonatal infection: antibiotics for prevention and treatment](https://www.nice.org.uk/guidance/ng195) | NICE | 4 | lien vérifié (titre de la page) |
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
| [Sore throat (acute): antimicrobial prescribing](https://www.nice.org.uk/guidance/ng84) | NICE | 3 | lien vérifié (titre de la page) |
| [Headaches in over 12s: diagnosis and management](https://www.nice.org.uk/guidance/cg150) | NICE | 3 | lien vérifié (titre de la page) |
| [Neuropathic pain in adults: pharmacological management in non-specialist settings](https://www.nice.org.uk/guidance/cg173) | NICE | 3 | lien vérifié (titre de la page) |
| [Acute coronary syndromes](https://www.nice.org.uk/guidance/ng185) | NICE | 2 | lien vérifié (titre de la page) |
| [Acute kidney injury: prevention, detection and management](https://www.nice.org.uk/guidance/ng148) | NICE | 2 | lien vérifié (titre de la page) |
| [Diabetes (type 1 and type 2) in children and young people: diagnosis and management](https://www.nice.org.uk/guidance/ng18) | NICE | 2 | lien vérifié (titre de la page) |
| [Overweight and obesity management](https://www.nice.org.uk/guidance/ng246) | NICE | 2 | lien vérifié (titre de la page) |
| [Acne vulgaris: management](https://www.nice.org.uk/guidance/ng198) | NICE | 2 | lien vérifié (titre de la page) |
| [Atopic eczema in under 12s: diagnosis and management](https://www.nice.org.uk/guidance/cg57) | NICE | 2 | lien vérifié (titre de la page) |
| [Impetigo: antimicrobial prescribing](https://www.nice.org.uk/guidance/ng153) | NICE | 2 | lien vérifié (titre de la page) |
| [Suspected sepsis: recognition, diagnosis and early management](https://www.nice.org.uk/guidance/ng51) | NICE | 2 | lien vérifié (titre de la page) |
| [Fever in under 5s: assessment and initial management](https://www.nice.org.uk/guidance/ng143) | NICE | 2 | lien vérifié (titre de la page) |
| [Constipation in children and young people: diagnosis and management](https://www.nice.org.uk/guidance/cg99) | NICE | 2 | lien vérifié (titre de la page) |
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
| [Parkinson’s disease in adults](https://www.nice.org.uk/guidance/ng71) | NICE | 2 | lien vérifié (titre de la page) |
| [Multiple sclerosis in adults: management](https://www.nice.org.uk/guidance/ng220) | NICE | 2 | lien vérifié (titre de la page) |
| [Delirium: prevention, diagnosis and management in hospital and long-term care](https://www.nice.org.uk/guidance/cg103) | NICE | 2 | lien vérifié (titre de la page) |
| [Depression in adults: treatment and management](https://www.nice.org.uk/guidance/ng222) | NICE | 2 | lien vérifié (titre de la page) |
| [Anaphylaxis: assessment and referral after emergency treatment](https://www.nice.org.uk/guidance/cg134) | NICE | 2 | lien vérifié (titre de la page) |
| [Pregnancy and complex social factors: a model for service provision for pregnant women with complex social factors](https://www.nice.org.uk/guidance/cg110) | NICE | 2 | lien vérifié (titre de la page) |
| [Fetal monitoring in labour](https://www.nice.org.uk/guidance/ng229) | NICE | 2 | lien vérifié (titre de la page) |
| [Chronic heart failure in adults: diagnosis and management](https://www.nice.org.uk/guidance/ng106) | NICE | 1 | lien vérifié (titre de la page) |
| [Atrial fibrillation: diagnosis and management](https://www.nice.org.uk/guidance/ng196) | NICE | 1 | lien vérifié (titre de la page) |
| [Stable angina: management](https://www.nice.org.uk/guidance/cg126) | NICE | 1 | lien vérifié (titre de la page) |
| [Type 2 diabetes in adults: management](https://www.nice.org.uk/guidance/ng28) | NICE | 1 | lien vérifié (titre de la page) |
| [Type 1 diabetes in adults: diagnosis and management](https://www.nice.org.uk/guidance/ng17) | NICE | 1 | lien vérifié (titre de la page) |
| [Diabetic foot problems: prevention and management](https://www.nice.org.uk/guidance/ng19) | NICE | 1 | lien vérifié (titre de la page) |
| [Cardiovascular disease: risk assessment and reduction, including lipid modification](https://www.nice.org.uk/guidance/ng238) | NICE | 1 | lien vérifié (titre de la page) |
| [Gout: diagnosis and management](https://www.nice.org.uk/guidance/ng219) | NICE | 1 | lien vérifié (titre de la page) |
| [Rheumatoid arthritis in adults: management](https://www.nice.org.uk/guidance/ng100) | NICE | 1 | lien vérifié (titre de la page) |
| [Spondyloarthritis in over 16s: diagnosis and management](https://www.nice.org.uk/guidance/ng65) | NICE | 1 | lien vérifié (titre de la page) |
| [Psoriasis: assessment and management](https://www.nice.org.uk/guidance/cg153) | NICE | 1 | lien vérifié (titre de la page) |
| [Cellulitis and erysipelas: antimicrobial prescribing](https://www.nice.org.uk/guidance/ng141) | NICE | 1 | lien vérifié (titre de la page) |
| [Pneumonia (community-acquired): antimicrobial prescribing](https://www.nice.org.uk/guidance/ng138) | NICE | 1 | lien vérifié (titre de la page) |
| [Chronic obstructive pulmonary disease in over 16s: diagnosis and management](https://www.nice.org.uk/guidance/ng115) | NICE | 1 | lien vérifié (titre de la page) |
| [Bronchiolitis in children: diagnosis and management](https://www.nice.org.uk/guidance/ng9) | NICE | 1 | lien vérifié (titre de la page) |
| [Urinary tract infection in under 16s: diagnosis and management](https://www.nice.org.uk/guidance/ng224) | NICE | 1 | lien vérifié (titre de la page) |
| [Jaundice in newborn babies under 28 days](https://www.nice.org.uk/guidance/cg98) | NICE | 1 | lien vérifié (titre de la page) |
| [Gastro-oesophageal reflux disease in children and young people: diagnosis and management](https://www.nice.org.uk/guidance/ng1) | NICE | 1 | lien vérifié (titre de la page) |
| [Coeliac disease: recognition, assessment and management](https://www.nice.org.uk/guidance/ng20) | NICE | 1 | lien vérifié (titre de la page) |
| [Acute upper gastrointestinal bleeding in over 16s: management](https://www.nice.org.uk/guidance/cg141) | NICE | 1 | lien vérifié (titre de la page) |
| [Renal and ureteric stones: assessment and management](https://www.nice.org.uk/guidance/ng118) | NICE | 1 | lien vérifié (titre de la page) |
| [Glaucoma: diagnosis and management](https://www.nice.org.uk/guidance/ng81) | NICE | 1 | lien vérifié (titre de la page) |
| [Cataracts in adults: management](https://www.nice.org.uk/guidance/ng77) | NICE | 1 | lien vérifié (titre de la page) |
| [Otitis media (acute): antimicrobial prescribing](https://www.nice.org.uk/guidance/ng91) | NICE | 1 | lien vérifié (titre de la page) |
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
| [Neutropenic sepsis: prevention and management in people with cancer](https://www.nice.org.uk/guidance/cg151) | NICE | 1 | lien vérifié (titre de la page) |
| [Intrapartum care for women with existing medical conditions or obstetric complications and their babies](https://www.nice.org.uk/guidance/ng121) | NICE | 1 | lien vérifié (titre de la page) |
| [Faltering growth: recognition and management of faltering growth in children](https://www.nice.org.uk/guidance/ng75) | NICE | 1 | lien vérifié (titre de la page) |
| [Bedwetting in under 19s](https://www.nice.org.uk/guidance/cg111) | NICE | 1 | lien vérifié (titre de la page) |
| [Cerebral palsy in under 25s: assessment and management](https://www.nice.org.uk/guidance/ng62) | NICE | 1 | lien vérifié (titre de la page) |
| [Food allergy in under 19s: assessment and diagnosis](https://www.nice.org.uk/guidance/cg116) | NICE | 1 | lien vérifié (titre de la page) |
| [Motor neurone disease: assessment and management](https://www.nice.org.uk/guidance/ng42) | NICE | 1 | lien vérifié (titre de la page) |
| [Borderline personality disorder: recognition and management](https://www.nice.org.uk/guidance/cg78) | NICE | 1 | lien vérifié (titre de la page) |
| [Antisocial personality disorder: prevention and management](https://www.nice.org.uk/guidance/cg77) | NICE | 1 | lien vérifié (titre de la page) |
| [Antisocial behaviour and conduct disorders in children and young people: recognition and management](https://www.nice.org.uk/guidance/cg158) | NICE | 1 | lien vérifié (titre de la page) |
| [Social anxiety disorder: recognition, assessment and treatment](https://www.nice.org.uk/guidance/cg159) | NICE | 1 | lien vérifié (titre de la page) |
| [Children’s attachment: attachment in children and young people who are adopted from care, in care or at high risk of going into care](https://www.nice.org.uk/guidance/ng26) | NICE | 1 | lien vérifié (titre de la page) |
| [Violence and aggression: short-term management in mental health, health and community settings](https://www.nice.org.uk/guidance/ng10) | NICE | 1 | lien vérifié (titre de la page) |
| [Depression in adults with a chronic physical health problem: recognition and management](https://www.nice.org.uk/guidance/cg91) | NICE | 1 | lien vérifié (titre de la page) |
| [Pressure ulcers: prevention and management](https://www.nice.org.uk/guidance/cg179) | NICE | 1 | lien vérifié (titre de la page) |
| [Leg ulcer infection: antimicrobial prescribing](https://www.nice.org.uk/guidance/ng152) | NICE | 1 | lien vérifié (titre de la page) |
| [Gallstone disease: diagnosis and management](https://www.nice.org.uk/guidance/cg188) | NICE | 1 | lien vérifié (titre de la page) |
| [Renal replacement therapy and conservative management](https://www.nice.org.uk/guidance/ng107) | NICE | 1 | lien vérifié (titre de la page) |
| [Bronchiectasis (non-cystic fibrosis), acute exacerbation: antimicrobial prescribing](https://www.nice.org.uk/guidance/ng117) | NICE | 1 | lien vérifié (titre de la page) |
| [Cystic fibrosis: diagnosis and management](https://www.nice.org.uk/guidance/ng78) | NICE | 1 | lien vérifié (titre de la page) |
| [COVID-19 rapid guideline: managing COVID-19](https://www.nice.org.uk/guidance/ng191) | NICE | 1 | lien vérifié (titre de la page) |
| [Hearing loss in adults: assessment and management](https://www.nice.org.uk/guidance/ng98) | NICE | 1 | lien vérifié (titre de la page) |
| [Osteoporosis: assessing the risk of fragility fracture](https://www.nice.org.uk/guidance/cg146) | NICE | 1 | lien vérifié (titre de la page) |
| [Challenging behaviour and learning disabilities: prevention and interventions for people with learning disabilities whose behaviour challenges](https://www.nice.org.uk/guidance/ng11) | NICE | 1 | lien vérifié (titre de la page) |
| [Suspected cancer: recognition and referral](https://www.nice.org.uk/guidance/ng12) | NICE | 1 | lien vérifié (titre de la page) |

### 5. Protocoles hospitaliers de référence (RCH Melbourne, HUG Genève)

| Protocole | Organisme | Fiches | Vérification |
|---|---|---:|---|
| [Foreign body inhalation (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Foreign_body_inhalation/) | Royal Children’s Hospital Melbourne | 2 | lien vérifié (titre de la page) |
| [Parapneumonic effusion (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Parapneumonic_effusion/) | Royal Children’s Hospital Melbourne | 2 | lien vérifié (titre de la page) |
| [Foreign body ingestion (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Foreign_body_ingestion/) | Royal Children’s Hospital Melbourne | 2 | lien vérifié (titre de la page) |
| [Nappy rash (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Nappy_rash/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Jaundice in early infancy (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Jaundice_in_early_infancy/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Abdominal pain - chronic (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Abdominal_pain_-_chronic/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Abdominal pain - acute (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Abdominal_pain_-_acute/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Gastrooesophageal reflux disease in infants (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Gastrooesophageal_reflux_disease_in_infants/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Vomiting (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Vomiting/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Metabolic disorders (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Metabolic_disorders/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Anaemia (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Anaemia/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Immune thrombocytopenic purpura (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Immune_thrombocytopenic_purpura/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Primary immunodeficiencies (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Primary_immunodeficiencies/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [IgA vasculitis (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/HenochSchonlein_Purpura/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Whooping cough (pertussis) (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Whooping_Cough_Pertussis/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Meningitis and encephalitis (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Meningitis_encephalitis/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Chickenpox (varicella) (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Chickenpox_varicella/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Micronutrient deficiency (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Micronutrient_deficiency/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Hypocalcaemia (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Hypocalcaemia/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Post-streptococcal glomerulonephritis (PSGN) (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Post-streptococcal_glomerulonephritis_(PSGN)/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Nephrotic syndrome (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Nephrotic_syndrome/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Antenatal urinary tract dilation (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Antenatal_urinary_tract_dilation/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Headache (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Headache/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Cerebral palsy (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Cerebral_palsy/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Acute red eye (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Acute_red_eye/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Cervical lymphadenopathy (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Cervical_lymphadenopathy/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Non-IgE mediated food allergy (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Non-IgE_mediated_food_allergy/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [The limping or non-weight bearing child (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Child_with_limp/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Enuresis - Bed wetting and Monosymptomatic Enuresis (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Enuresis_-_Bed_wetting_and_Monosymptomatic_Enuresis/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Unsettled or crying babies (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Crying_Baby_Infant_Distress/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Slow weight gain (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Slow_weight_gain/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Acute upper airway obstruction (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Acute_upper_airway_obstruction/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Croup (Laryngotracheobronchitis) (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Croup_Laryngotracheobronchitis/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Dysmenorrhoea (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Dysmenorrhoea/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Resuscitation: hospital management of cardiopulmonary arrest (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Resuscitation__hospital_management_of_cardiopulmonary_arrest/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Burns - acute management (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Burns/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Sepsis – assessment and management (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/SEPSIS_assessment_and_management/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Altered conscious state (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Altered_conscious_state/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Hypoglycaemia (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Hypoglycaemia/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Poisoning - Acute Guidelines For Initial Management (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Poisoning_-_Acute_Guidelines_For_Initial_Management/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Hydrocarbon poisoning (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Hydrocarbon_poisoning/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Drowning (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Drowning/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Intussusception (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Intussusception/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Hirschsprung associated enterocolitis HAEC (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Hirschsprung_associated_enterocolitis_HAEC/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Pyloric stenosis (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Pyloric_stenosis/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Acute eye injury (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Acute_eye_injury/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Penetrating eye injury (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Penetrating_eye_injury/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Epistaxis (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Epistaxis/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Bone and joint infection (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Bone_and_joint_infection/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [HSV Gingivostomatitis (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/HSV_Gingivostomatitis/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Dental trauma (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Dental_trauma/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Lacerations (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Lacerations/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Management of tetanus-prone wounds (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Management_of_tetanusprone_wounds/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Acute scrotal pain or swelling (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Acute_scrotal_pain_or_swelling/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [The penis and foreskin (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/The_penis_and_foreskin/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Anxiety: identification and management (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Anxiety__identification_and_management/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Serotonin toxicity (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Serotonin_toxicity/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Sore throat (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Sore_throat/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Constipation (RCH Clinical Practice Guidelines)](https://www.rch.org.au/clinicalguide/guideline_index/Constipation/) | Royal Children’s Hospital Melbourne | 1 | lien vérifié (titre de la page) |
| [Urticaire : stratégie de prise en charge (HUG, 2023)](https://www.hug.ch/sites/interhug/files/2023-09/strategie_urticaire_2023_avec_lien.pdf) | Hôpitaux universitaires de Genève (HUG) | 1 | document PDF vérifié (réponse du serveur) |
| [Ostéoporose : stratégie de prise en charge (HUG)](https://www.hug.ch/sites/interhug/files/2026-09/strategie-osteoporose-version-finale_0.pdf) | Hôpitaux universitaires de Genève (HUG) | 1 | document PDF vérifié (réponse du serveur) |
| [Paralysie faciale périphérique (HUG, 2023)](https://www.hug.ch/sites/interhug/files/2023-04/paralysie_faciale_peripherique_avril_2023_1.pdf) | Hôpitaux universitaires de Genève (HUG) | 1 | document PDF vérifié (réponse du serveur) |
| [Vertiges : stratégie de prise en charge (HUG)](https://www.hug.ch/sites/interhug/files/2024-10/strategie_vertiges_doi.pdf) | Hôpitaux universitaires de Genève (HUG) | 1 | document PDF vérifié (réponse du serveur) |
| [Dysfonction sexuelle : stratégie de prise en charge (HUG)](https://www.hug.ch/sites/interhug/files/2026-01/strategie_dysfonction_sexuelle_1.pdf) | Hôpitaux universitaires de Genève (HUG) | 1 | document PDF vérifié (réponse du serveur) |
| [Microhématurie : stratégie de prise en charge (HUG)](https://www.hug.ch/sites/interhug/files/2024-10/strategie_microhematurie_doi.pdf) | Hôpitaux universitaires de Genève (HUG) | 1 | document PDF vérifié (réponse du serveur) |
| [Accident d’exposition au sang : conduite à tenir (HUG, 2023)](https://www.hug.ch/sites/interhug/files/2023-11/carte_aes_2023_v_21.11.2023_final.pdf) | Hôpitaux universitaires de Genève (HUG) | 1 | document PDF vérifié (réponse du serveur) |
| [Œil rouge : stratégie de prise en charge (HUG, 2025)](https://www.hug.ch/sites/interhug/files/2025-09/strategie_oeil_rouge_2025_1.pdf) | Hôpitaux universitaires de Genève (HUG) | 1 | document PDF vérifié (réponse du serveur) |
| [Personne âgée : stratégie de prise en charge (HUG)](https://www.hug.ch/sites/interhug/files/2026-09/strategie-personne-agee-version-finale_0.pdf) | Hôpitaux universitaires de Genève (HUG) | 1 | document PDF vérifié (réponse du serveur) |
| [Otite externe aiguë (HUG, 2022)](https://www.hug.ch/sites/interhug/files/2022-09/otite_exerne_aigue_14.07.2022.pdf) | Hôpitaux universitaires de Genève (HUG) | 1 | document PDF vérifié (réponse du serveur) |

### 6. Sociétés savantes et autres références (sites officiels)

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
| [EAU Guidelines on Paediatric Urology](https://uroweb.org/guidelines/paediatric-urology) | European Association of Urology | 7 | lien vérifié (titre de la page) |
| [FIGO recommendations on the management of postpartum hemorrhage 2022](https://www.figo.org) | International Federation of Gynecology and Obstetrics | 7 | source déjà citée dans MedRef RDC |
| [SCCM — recommandations de pratique clinique](https://www.sccm.org) | Society of Critical Care Medicine | 6 | source déjà citée dans MedRef RDC |
| [A framework to develop adapted treatment regimens to manage pediatric cancer in low- and middle-income countries (SIOP PODC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6428601) | SIOP — Paediatric Oncology in Developing Countries | 5 | confirmé par recherche (site protégé contre les robots) |
| [BTS guideline for pleural disease in adults.](https://www.brit-thoracic.org.uk/quality-improvement/guidelines/pleural-disease/) | British Thoracic Society | 4 | lien vérifié (titre de la page) |
| [IDSA 2014 Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections](https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/) | Infectious Diseases Society of America | 4 | lien vérifié (titre de la page) |
| [GINA — Global Strategy for Asthma Management and Prevention](https://ginasthma.org) | Global Initiative for Asthma | 4 | source déjà citée dans MedRef RDC |
| [Chickenpox in Pregnancy (Green-top Guideline No. 13)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/chickenpox-in-pregnancy-green-top-guideline-no-13/) | RCOG | 3 | lien vérifié (titre de la page) |
| [2024 ESC Guidelines for the management of elevated blood pressure and hypertension](https://www.escardio.org/Guidelines) | European Society of Cardiology | 3 | source déjà citée dans MedRef RDC |
| [ADA — Standards of Care in Diabetes](https://professional.diabetes.org/standards-of-care) | American Diabetes Association | 3 | source déjà citée dans MedRef RDC |
| [Hyperglycemic Crises in Adults With Diabetes: A Consensus Report](https://diabetesjournals.org/care) | ADA / EASD / JBDS / AACE / DTS | 3 | source déjà citée dans MedRef RDC |
| [Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021](https://www.sccm.org/SurvivingSepsisCampaign) | Society of Critical Care Medicine / ESICM | 3 | source déjà citée dans MedRef RDC |
| [WSES Jerusalem guidelines on acute appendicitis](https://www.wses.org.uk) | World Society of Emergency Surgery | 3 | source déjà citée dans MedRef RDC |
| [Antepartum Haemorrhage (Green-top Guideline No. 63)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/antepartum-haemorrhage-green-top-guideline-no-63/) | RCOG | 2 | lien vérifié (titre de la page) |
| [Ovarian Masses in Premenopausal Women, Management of Suspected (Green-top Guideline No. 62)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/ovarian-masses-in-premenopausal-women-management-of-suspected-green-top-guideline-no-62/) | RCOG | 2 | lien vérifié (titre de la page) |
| [Identification and management of maternal sepsis during and following pregnancy (Green-top Guideline No. 64)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/identification-and-management-of-maternal-sepsis-during-and-following-pregnancy-green-top-guideline-no-64/) | RCOG | 2 | lien vérifié (titre de la page) |
| [Placenta Praevia and Placenta Accreta: Diagnosis and Management (Green-top Guideline No. 27a)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/placenta-praevia-and-placenta-accreta-diagnosis-and-management-green-top-guideline-no-27a/) | RCOG | 2 | lien vérifié (titre de la page) |
| [EAU Guidelines on Sexual and Reproductive Health](https://uroweb.org/guidelines/sexual-and-reproductive-health) | European Association of Urology | 2 | lien vérifié (titre de la page) |
| [Treatment of acute hyperkalaemia in adults](https://ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults) | UK Kidney Association | 2 | lien vérifié (titre de la page) |
| [BOASt : Peripheral Nerve Injury](https://www.boa.ac.uk/resource/boast-peripheral-nerve-injury.html) | British Orthopaedic Association (BOAST) | 2 | lien vérifié (titre de la page) |
| [WFH Guidelines for the Management of Hemophilia, 3rd edition (2020)](https://www1.wfh.org/publications/files/pdf-1863.pdf) | World Federation of Hemophilia | 2 | confirmé par recherche (site protégé contre les robots) |
| [ISPAD Clinical Practice Consensus Guidelines 2022 (dont acidocétose et état hyperosmolaire)](https://www.ispad.org/resources/ispad-clinical-practice-consensus-guidelines/2022-ispad-clinical-practice-consensus-guidelines.html) | International Society for Pediatric and Adolescent Diabetes | 2 | confirmé par recherche (site protégé contre les robots) |
| [KDIGO Clinical Practice Guideline for Acute Kidney Injury](https://kdigo.org/guidelines/acute-kidney-injury/) | KDIGO | 2 | source déjà citée dans MedRef RDC |
| [KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease](https://kdigo.org/guidelines/ckd-evaluation-and-management/) | KDIGO | 2 | source déjà citée dans MedRef RDC |
| [RCOG Green-top Guideline No. 21: Diagnosis and Management of Ectopic Pregnancy](https://www.rcog.org.uk/guidance/) | Royal College of Obstetricians and Gynaecologists | 2 | source déjà citée dans MedRef RDC |
| [Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (2017 update, WSES)](https://www.wses.org.uk) | World Society of Emergency Surgery | 2 | source déjà citée dans MedRef RDC |
| [The management of intra-abdominal infections from a global perspective: 2017 WSES guidelines](https://www.wses.org.uk) | World Society of Emergency Surgery | 2 | source déjà citée dans MedRef RDC |
| [ASTMH/IDSA 2017 Clinical Practice Guideline Update for the Diagnosis and Treatment of Neurocysticercosis](https://www.idsociety.org/practice-guideline/neurocysticercosis/) | IDSA / ASTMH | 1 | lien vérifié (titre de la page) |
| [Global Clubfoot Initiative](https://globalclubfoot.com/) | Global Clubfoot Initiative | 1 | lien vérifié (titre de la page) |
| [Care of late intrauterine fetal death and stillbirth (Green-top Guideline No. 55)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/care-of-late-intrauterine-fetal-death-and-stillbirth-green-top-guideline-no-55/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Small-for-Gestational-Age Fetus and a Growth Restricted Fetus, Investigation and Care (Green-top Guideline No. 31)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/small-for-gestational-age-fetus-and-a-growth-restricted-fetus-investigation-and-care-green-top-guideline-no-31/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Intrahepatic cholestasis of pregnancy (Green-top Guideline No. 43)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/intrahepatic-cholestasis-of-pregnancy-green-top-guideline-no-43/) | RCOG | 1 | lien vérifié (titre de la page) |
| [The Management of Nausea and Vomiting of Pregnancy and Hyperemesis Gravidarum (Green-top Guideline No.69)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/the-management-of-nausea-and-vomiting-of-pregnancy-and-hyperemesis-gravidarum-green-top-guideline-no-69/) | RCOG | 1 | lien vérifié (titre de la page) |
| [The Management of Women with Red Cell Antibodies during Pregnancy (Green-top Guideline No. 65)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/the-management-of-women-with-red-cell-antibodies-during-pregnancy-green-top-guideline-no-65/) | RCOG | 1 | lien vérifié (titre de la page) |
| [The Use of Anti-D Immunoglobulin for Rhesus D Prophylaxis (Green-top Guideline No. 22)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/the-use-of-anti-d-immunoglobulin-for-rhesus-d-prophylaxis-green-top-guideline-no-22/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Cervical cerclage (Green-top Guideline No. 75)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/cervical-cerclage-green-top-guideline-no-75/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Gestational Trophoblastic Disease (Green-top Guideline No. 38)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/gestational-trophoblastic-disease-green-top-guideline-no-38/) | RCOG | 1 | lien vérifié (titre de la page) |
| [The Initial Management of Chronic Pelvic Pain (Green-top Guideline No. 41)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/the-initial-management-of-chronic-pelvic-pain-green-top-guideline-no-41/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Vulval Skin Disorders, Management (Green-top Guideline No. 58)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/vulval-skin-disorders-management-green-top-guideline-no-58/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Vasa Praevia: Diagnosis and Management (Green-top Guideline 27b)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/vasa-praevia-diagnosis-and-management-green-top-guideline-27b/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Amniocentesis and Chorionic Villus Sampling (Green-top Guideline No. 8)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/amniocentesis-and-chorionic-villus-sampling-green-top-guideline-no-8/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Reduced Fetal Movements (Green-top Guideline No. 57)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/reduced-fetal-movements-green-top-guideline-no-57/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Shoulder Dystocia (Green-top Guideline No. 42)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/shoulder-dystocia-green-top-guideline-no-42/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Birth after Previous Caesarean Birth (Green-top Guideline No. 45)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/birth-after-previous-caesarean-birth-green-top-guideline-no-45/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Diagnosis and Management of Ectopic Pregnancy (Green-top Guideline No. 21)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/diagnosis-and-management-of-ectopic-pregnancy-green-top-guideline-no-21/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Maternal Collapse in Pregnancy and the Puerperium (Green-top Guideline No. 56)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/maternal-collapse-in-pregnancy-and-the-puerperium-green-top-guideline-no-56/) | RCOG | 1 | lien vérifié (titre de la page) |
| [Long-term Consequences of Polycystic Ovary Syndrome (Green-top Guideline No. 33)](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/long-term-consequences-of-polycystic-ovary-syndrome-green-top-guideline-no-33/) | RCOG | 1 | lien vérifié (titre de la page) |
| [EAU Guidelines on Urological Trauma](https://uroweb.org/guidelines/urological-trauma) | European Association of Urology | 1 | lien vérifié (titre de la page) |
| [EAU Guidelines on Urethral Strictures](https://uroweb.org/guidelines/urethral-strictures) | European Association of Urology | 1 | lien vérifié (titre de la page) |
| [EAU Guidelines on Chronic Pelvic Pain](https://uroweb.org/guidelines/chronic-pelvic-pain) | European Association of Urology | 1 | lien vérifié (titre de la page) |
| [EAU Guidelines on Urological Infections](https://uroweb.org/guidelines/urological-infections) | European Association of Urology | 1 | lien vérifié (titre de la page) |
| [IDSA Guidelines for the Management of Encephalitis](https://www.idsociety.org/practice-guideline/encephalitis/) | Infectious Diseases Society of America | 1 | lien vérifié (titre de la page) |
| [Management of chronic venous leg ulcers](https://www.sign.ac.uk/our-guidelines/management-of-chronic-venous-leg-ulcers/) | SIGN (Écosse) | 1 | lien vérifié (titre de la page) |
| [BOASt : Diagnosis and Management of Compartment Syndrome of the Extremities](https://www.boa.ac.uk/resource/boast-10-pdf.html) | British Orthopaedic Association (BOAST) | 1 | lien vérifié (titre de la page) |
| [BSSH standards of care in hand trauma](https://www.bssh.ac.uk/bssh_standards_of_care_in_hand_trauma_.aspx) | British Society for Surgery of the Hand | 1 | lien vérifié (titre de la page) |
| [Guidelines for the Management of Transfusion Dependent Thalassaemia, 4th edition (2021)](https://thalassaemia.org.cy/publications/tif-publications/guidelines-for-the-management-of-transfusion-dependent-thalassaemia-4th-edition-2021-v2/) | Thalassaemia International Federation | 1 | confirmé par recherche (site protégé contre les robots) |
| [Global Consensus Recommendations on Prevention and Management of Nutritional Rickets (2016)](https://pubmed.ncbi.nlm.nih.gov/26745253/) | Consensus international (11 sociétés savantes) | 1 | confirmé par recherche (site protégé contre les robots) |
| [2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure (mise à jour 2023)](https://www.escardio.org/Guidelines) | European Society of Cardiology | 1 | source déjà citée dans MedRef RDC |
| [Vascular Surgery Guidelines / ESVS](https://esvs.org/guidelines/) | European Society for Vascular Surgery | 0 | lien vérifié (titre de la page) |
| [Green-top Guidelines / RCOG](https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/) | RCOG | 0 | lien vérifié (titre de la page) |

### 7. Recommandations de sociétés savantes publiées en revue (vérifiées par Europe PMC)

| Protocole | Organisme | Fiches | Vérification |
|---|---|---:|---|
| [ISBI Practice Guidelines for Burn Care](https://pubmed.ncbi.nlm.nih.gov/27542292/) | ISBI | 5 | titre confirmé par Europe PMC (PMID 27542292) |
| [2018 WSES/SIS-E consensus conference: recommendations for the management of skin and soft-tissue infections](https://pmc.ncbi.nlm.nih.gov/articles/PMC6295010/) | WSES / SIS-E | 4 | titre confirmé par Europe PMC (PMID 30564282) |
| [Congenital cytomegalovirus infection in pregnancy and the neonate: consensus recommendations for prevention, diagnosis, and therapy](https://pubmed.ncbi.nlm.nih.gov/28291720/) | Consensus international sur le CMV congénital | 4 | titre confirmé par Europe PMC (PMID 28291720) |
| [KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases](https://pubmed.ncbi.nlm.nih.gov/34556256/) | KDIGO | 4 | titre confirmé par Europe PMC (PMID 34556256) |
| [ISBI Practice Guidelines for Burn Care, Part 2](https://pubmed.ncbi.nlm.nih.gov/30343831/) | ISBI | 4 | titre confirmé par Europe PMC (PMID 30343831) |
| [EASL Clinical Practice Guidelines on hepatitis E virus infection](https://pubmed.ncbi.nlm.nih.gov/29609832/) | EASL | 3 | titre confirmé par Europe PMC (PMID 29609832) |
| [EASL Clinical Practice Guidelines on the management of liver diseases in pregnancy](https://pubmed.ncbi.nlm.nih.gov/37394016/) | EASL | 3 | titre confirmé par Europe PMC (PMID 37394016) |
| [2023 ESC Guidelines for the management of endocarditis](https://pubmed.ncbi.nlm.nih.gov/37622656/) | European Society of Cardiology | 2 | titre confirmé par Europe PMC (PMID 37622656) |
| [2023 ESC Guidelines for the management of cardiomyopathies](https://pubmed.ncbi.nlm.nih.gov/37622657/) | European Society of Cardiology | 2 | titre confirmé par Europe PMC (PMID 37622657) |
| [2025 ESC Guidelines for the management of cardiovascular disease and pregnancy](https://pubmed.ncbi.nlm.nih.gov/40878294/) | European Society of Cardiology | 2 | titre confirmé par Europe PMC (PMID 40878294) |
| [Updated international clinical recommendations on scar management: part 2--algorithms for scar prevention and treatment](https://pubmed.ncbi.nlm.nih.gov/25068544/) | Panel international sur les cicatrices | 2 | titre confirmé par Europe PMC (PMID 25068544) |
| [Management of albinism: French guidelines for diagnosis and care](https://pubmed.ncbi.nlm.nih.gov/34042219/) | Centre de référence (recommandations françaises) | 2 | titre confirmé par Europe PMC (PMID 34042219) |
| [The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Anorectal Abscess, Fistula-in-Ano, and Rectovaginal Fistula](https://pubmed.ncbi.nlm.nih.gov/35732009/) | ASCRS | 2 | titre confirmé par Europe PMC (PMID 35732009) |
| [Expanded Clinical Pharmacogenetics Implementation Consortium Guideline for Medication Use in the Context of G6PD Genotype](https://pmc.ncbi.nlm.nih.gov/articles/PMC10281211/) | CPIC | 2 | titre confirmé par Europe PMC (PMID 36049896) |
| [American Society of Hematology 2019 guidelines for immune thrombocytopenia](https://pmc.ncbi.nlm.nih.gov/articles/PMC6963252/) | American Society of Hematology | 2 | titre confirmé par Europe PMC (PMID 31794604) |
| [Updated international consensus report on the investigation and management of primary immune thrombocytopenia](https://pmc.ncbi.nlm.nih.gov/articles/PMC6880896/) | Consensus international sur le PTI | 2 | titre confirmé par Europe PMC (PMID 31770441) |
| [Prevention of measles, rubella, congenital rubella syndrome, and mumps, 2013: summary recommendations of the Advisory Committee on Immunization Practices (ACIP)](https://pubmed.ncbi.nlm.nih.gov/23760231/) | CDC — ACIP | 2 | titre confirmé par Europe PMC (PMID 23760231) |
| [BTS guidelines for the management of pleural infection in children](https://pmc.ncbi.nlm.nih.gov/articles/PMC1766040/) | British Thoracic Society | 2 | titre confirmé par Europe PMC (PMID 15681514) |
| [British Thoracic Society guidelines for the management of community acquired pneumonia in children: update 2011](https://pubmed.ncbi.nlm.nih.gov/21903691/) | British Thoracic Society | 2 | titre confirmé par Europe PMC (PMID 21903691) |
| [British Society for Rheumatology guideline on management of paediatric, adolescent and adult patients with idiopathic inflammatory myopathy](https://pmc.ncbi.nlm.nih.gov/articles/PMC9398208/) | British Society for Rheumatology | 2 | titre confirmé par Europe PMC (PMID 35355064) |
| [European Academy of Neurology/Peripheral Nerve Society Guideline on diagnosis and treatment of Guillain-Barré syndrome](https://pubmed.ncbi.nlm.nih.gov/37814552/) | EAN / PNS | 2 | titre confirmé par Europe PMC (PMID 37814552) |
| [Diagnosis and management of Guillain-Barré syndrome in ten steps](https://pmc.ncbi.nlm.nih.gov/articles/PMC6821638/) | Consensus international (Leonhard et al.) | 2 | titre confirmé par Europe PMC (PMID 31541214) |
| [European guideline and expert statements on the management of narcolepsy in adults and children](https://pubmed.ncbi.nlm.nih.gov/34173695/) | European Academy of Neurology | 2 | titre confirmé par Europe PMC (PMID 34173695) |
| [Treatment of central disorders of hypersomnolence: an American Academy of Sleep Medicine clinical practice guideline](https://pmc.ncbi.nlm.nih.gov/articles/PMC8636351/) | American Academy of Sleep Medicine | 2 | titre confirmé par Europe PMC (PMID 34743789) |
| [Conjunctivitis Preferred Practice Pattern®](https://pubmed.ncbi.nlm.nih.gov/30366797/) | American Academy of Ophthalmology | 2 | titre confirmé par Europe PMC (PMID 30366797) |
| [Evidence-based clinical practice guideline on antibiotic use for the urgent management of pulpal- and periapical-related dental pain and intraoral swelling: A report from the American Dental Association](https://pmc.ncbi.nlm.nih.gov/articles/PMC8270006/) | American Dental Association | 2 | titre confirmé par Europe PMC (PMID 31668170) |
| [No. 345-Primary Dysmenorrhea Consensus Guideline](https://pubmed.ncbi.nlm.nih.gov/28625286/) | SOGC | 2 | titre confirmé par Europe PMC (PMID 28625286) |
| [2015 ESC Guidelines for the diagnosis and management of pericardial diseases: The Task Force for the Diagnosis and Management of Pericardial Diseases of the European Society of Cardiology (ESC)Endorsed by: The European Association for Cardio-Thoracic Surgery (EACTS)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7539677/) | European Society of Cardiology | 1 | titre confirmé par Europe PMC (PMID 26320112) |
| [2025 ESC Guidelines for the management of myocarditis and pericarditis](https://pubmed.ncbi.nlm.nih.gov/40878297/) | European Society of Cardiology | 1 | titre confirmé par Europe PMC (PMID 40878297) |
| [Pathophysiology, diagnosis and management of peripartum cardiomyopathy: a position statement from the Heart Failure Association of the European Society of Cardiology Study Group on peripartum cardiomyopathy](https://pubmed.ncbi.nlm.nih.gov/31243866/) | ESC — Heart Failure Association | 1 | titre confirmé par Europe PMC (PMID 31243866) |
| [2018 ESC Guidelines for the management of cardiovascular diseases during pregnancy](https://pubmed.ncbi.nlm.nih.gov/30165544/) | European Society of Cardiology | 1 | titre confirmé par Europe PMC (PMID 30165544) |
| [Infective Endocarditis in Childhood: 2015 Update: A Scientific Statement From the American Heart Association](https://pubmed.ncbi.nlm.nih.gov/26373317/) | American Heart Association | 1 | titre confirmé par Europe PMC (PMID 26373317) |
| [Diagnosis and Treatment of Keloids and Hypertrophic Scars-Japan Scar Workshop Consensus Document 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6933735/) | Japan Scar Workshop | 1 | titre confirmé par Europe PMC (PMID 31890718) |
| [The international EAACI/GA²LEN/EuroGuiDerm/APAAACI guideline for the definition, classification, diagnosis, and management of urticaria](https://pubmed.ncbi.nlm.nih.gov/34536239/) | EAACI / GA²LEN / EuroGuiDerm / APAAACI | 1 | titre confirmé par Europe PMC (PMID 34536239) |
| [Clinical Practice Guideline for the Management of Infantile Hemangiomas](https://pubmed.ncbi.nlm.nih.gov/30584062/) | American Academy of Pediatrics | 1 | titre confirmé par Europe PMC (PMID 30584062) |
| [British Association of Dermatologists' guidelines for the management of cutaneous warts 2014](https://pubmed.ncbi.nlm.nih.gov/25273231/) | British Association of Dermatologists | 1 | titre confirmé par Europe PMC (PMID 25273231) |
| [British Association of Dermatologists guidelines for the management of lichen sclerosus, 2018](https://pubmed.ncbi.nlm.nih.gov/29313888/) | British Association of Dermatologists | 1 | titre confirmé par Europe PMC (PMID 29313888) |
| [Clinical practice guideline on diagnosis and treatment of hyponatraemia](https://pubmed.ncbi.nlm.nih.gov/24569125/) | ESE / ESICM / ERBP | 1 | titre confirmé par Europe PMC (PMID 24569125) |
| [Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline](https://pmc.ncbi.nlm.nih.gov/articles/PMC4880116/) | Endocrine Society | 1 | titre confirmé par Europe PMC (PMID 26760044) |
| [Congenital Adrenal Hyperplasia Due to Steroid 21-Hydroxylase Deficiency: An Endocrine Society Clinical Practice Guideline](https://pmc.ncbi.nlm.nih.gov/articles/PMC6456929/) | Endocrine Society | 1 | titre confirmé par Europe PMC (PMID 30272171) |
| [Congenital Hypothyroidism: A 2020-2021 Consensus Guidelines Update-An ENDO-European Reference Network Initiative Endorsed by the European Society for Pediatric Endocrinology and the European Society for Endocrinology](https://pmc.ncbi.nlm.nih.gov/articles/PMC8001676/) | ESPE / ENDO-ERN | 1 | titre confirmé par Europe PMC (PMID 33272083) |
| [Guidelines for Growth Hormone and Insulin-Like Growth Factor-I Treatment in Children and Adolescents: Growth Hormone Deficiency, Idiopathic Short Stature, and Primary Insulin-Like Growth Factor-I Deficiency](https://pubmed.ncbi.nlm.nih.gov/27884013/) | Pediatric Endocrine Society | 1 | titre confirmé par Europe PMC (PMID 27884013) |
| [Use of Gonadotropin-Releasing Hormone Analogs in Children: Update by an International Consortium](https://pubmed.ncbi.nlm.nih.gov/31319416/) | Consortium international d’endocrinologie pédiatrique | 1 | titre confirmé par Europe PMC (PMID 31319416) |
| [Society for Endocrinology UK Guidance on the initial evaluation of a suspected difference or disorder of sex development (Revised 2021)](https://pubmed.ncbi.nlm.nih.gov/34031907/) | Society for Endocrinology (Royaume-Uni) | 1 | titre confirmé par Europe PMC (PMID 34031907) |
| [Clinical practice guidelines for the care of girls and women with Turner syndrome](https://pmc.ncbi.nlm.nih.gov/articles/PMC11759048/) | International Turner Syndrome Consensus Group | 1 | titre confirmé par Europe PMC (PMID 38748847) |
| [Health Supervision for Children and Adolescents With Down Syndrome](https://pubmed.ncbi.nlm.nih.gov/35490285/) | American Academy of Pediatrics | 1 | titre confirmé par Europe PMC (PMID 35490285) |
| [Diagnosis and management of acute lower gastrointestinal bleeding: guidelines from the British Society of Gastroenterology](https://pubmed.ncbi.nlm.nih.gov/30792244/) | British Society of Gastroenterology | 1 | titre confirmé par Europe PMC (PMID 30792244) |
| [ACG Clinical Guideline: Liver Disease and Pregnancy](https://pubmed.ncbi.nlm.nih.gov/26832651/) | American College of Gastroenterology | 1 | titre confirmé par Europe PMC (PMID 26832651) |
| [European Society Paediatric Gastroenterology, Hepatology and Nutrition Guidelines for Diagnosing Coeliac Disease 2020](https://pubmed.ncbi.nlm.nih.gov/31568151/) | ESPGHAN | 1 | titre confirmé par Europe PMC (PMID 31568151) |
| [Guideline for the Evaluation of Cholestatic Jaundice in Infants: Joint Recommendations of the North American Society for Pediatric Gastroenterology, Hepatology, and Nutrition and the European Society for Pediatric Gastroenterology, Hepatology, and Nutrition](https://pubmed.ncbi.nlm.nih.gov/27429428/) | NASPGHAN / ESPGHAN | 1 | titre confirmé par Europe PMC (PMID 27429428) |
| [An ESPGHAN Position Paper on the Diagnosis, Management, and Prevention of Cow's Milk Allergy](https://pubmed.ncbi.nlm.nih.gov/38374567/) | ESPGHAN | 1 | titre confirmé par Europe PMC (PMID 38374567) |
| [ESPGHAN-NASPGHAN Guidelines for the Evaluation and Treatment of Gastrointestinal and Nutritional Complications in Children With Esophageal Atresia-Tracheoesophageal Fistula](https://pubmed.ncbi.nlm.nih.gov/27579697/) | ESPGHAN / NASPGHAN | 1 | titre confirmé par Europe PMC (PMID 27579697) |
| [ERNICA guidelines for the management of rectosigmoid Hirschsprung's disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC7318734/) | ERNICA | 1 | titre confirmé par Europe PMC (PMID 32586397) |
| [European consensus meeting of ARM-Net members concerning diagnosis and early management of newborns with anorectal malformations](https://pmc.ncbi.nlm.nih.gov/articles/PMC4369584/) | ARM-Net | 1 | titre confirmé par Europe PMC (PMID 25609592) |
| [European reference network for rare inherited congenital anomalies (ERNICA) evidence based guideline on the management of gastroschisis](https://pmc.ncbi.nlm.nih.gov/articles/PMC10860293/) | ERNICA | 1 | titre confirmé par Europe PMC (PMID 38347519) |
| [NEC-zero recommendations from scoping review of evidence to prevent and foster timely recognition of necrotizing enterocolitis](https://pmc.ncbi.nlm.nih.gov/articles/PMC5733736/) | NEC-Zero (recommandations de consensus) | 1 | titre confirmé par Europe PMC (PMID 29270303) |
| [Prevention of Vitamin K Deficiency Bleeding in Newborn Infants: A Position Paper by the ESPGHAN Committee on Nutrition](https://pubmed.ncbi.nlm.nih.gov/27050049/) | ESPGHAN | 1 | titre confirmé par Europe PMC (PMID 27050049) |
| [Academy of Breastfeeding Medicine Clinical Protocol #36: The Mastitis Spectrum, Revised 2022](https://pubmed.ncbi.nlm.nih.gov/35576513/) | Academy of Breastfeeding Medicine | 1 | titre confirmé par Europe PMC (PMID 35576513) |
| [Tokyo Guidelines 2018: flowchart for the management of acute cholecystitis](https://pubmed.ncbi.nlm.nih.gov/29045062/) | Tokyo Guidelines | 1 | titre confirmé par Europe PMC (PMID 29045062) |
| [Tokyo Guidelines 2018: initial management of acute biliary infection and flowchart for acute cholangitis](https://pubmed.ncbi.nlm.nih.gov/28941329/) | Tokyo Guidelines | 1 | titre confirmé par Europe PMC (PMID 28941329) |
| [2020 World Society of Emergency Surgery updated guidelines for the diagnosis and treatment of acute calculus cholecystitis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7643471/) | WSES | 1 | titre confirmé par Europe PMC (PMID 33153472) |
| [International guidelines for groin hernia management](https://pmc.ncbi.nlm.nih.gov/articles/PMC5809582/) | HerniaSurge Group | 1 | titre confirmé par Europe PMC (PMID 29330835) |
| [Guidelines for treatment of umbilical and epigastric hernias from the European Hernia Society and Americas Hernia Society](https://pubmed.ncbi.nlm.nih.gov/31916607/) | European Hernia Society / Americas Hernia Society | 1 | titre confirmé par Europe PMC (PMID 31916607) |
| [Update of Guidelines for laparoscopic treatment of ventral and incisional abdominal wall hernias (International Endohernia Society (IEHS))-Part A](https://pmc.ncbi.nlm.nih.gov/articles/PMC6722153/) | International Endohernia Society | 1 | titre confirmé par Europe PMC (PMID 31250243) |
| [2017 update of the WSES guidelines for emergency repair of complicated abdominal wall hernias](https://pmc.ncbi.nlm.nih.gov/articles/PMC5545868/) | WSES | 1 | titre confirmé par Europe PMC (PMID 28804507) |
| [Surgical Management of Pediatric Inguinal Hernia: A Systematic Review and Guideline from the European Pediatric Surgeons' Association Evidence and Guideline Committee](https://pubmed.ncbi.nlm.nih.gov/33567466/) | European Paediatric Surgeons’ Association | 1 | titre confirmé par Europe PMC (PMID 33567466) |
| [The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Hemorrhoids](https://pubmed.ncbi.nlm.nih.gov/29420423/) | ASCRS | 1 | titre confirmé par Europe PMC (PMID 29420423) |
| [The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Anal Fissures](https://pubmed.ncbi.nlm.nih.gov/36321851/) | ASCRS | 1 | titre confirmé par Europe PMC (PMID 36321851) |
| [The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Colonic Volvulus and Acute Colonic Pseudo-Obstruction](https://pubmed.ncbi.nlm.nih.gov/34016826/) | ASCRS | 1 | titre confirmé par Europe PMC (PMID 34016826) |
| [The management of intra-abdominal infections from a global perspective: 2017 WSES guidelines for management of intra-abdominal infections](https://pmc.ncbi.nlm.nih.gov/articles/PMC5504840/) | WSES | 1 | titre confirmé par Europe PMC (PMID 28702076) |
| [Executive Summary: Nurses Specialized in Wound, Ostomy and Continence Canada (NSWOCC) Nursing Best Practice Recommendations: Enterocutaneous Fistula and Enteroatmospheric Fistula](https://pubmed.ncbi.nlm.nih.gov/31274860/) | NSWOCC (Canada) | 1 | titre confirmé par Europe PMC (PMID 31274860) |
| [Guideline for the diagnostic pathway in patients with acute abdominal pain](https://pubmed.ncbi.nlm.nih.gov/25659265/) | Société néerlandaise de chirurgie | 1 | titre confirmé par Europe PMC (PMID 25659265) |
| [European society of Clinical Microbiology and Infectious Diseases guidelines on diagnosis and treatment of brain abscess in children and adults](https://pubmed.ncbi.nlm.nih.gov/37648062/) | ESCMID | 1 | titre confirmé par Europe PMC (PMID 37648062) |
| [Guidelines for the diagnosis and treatment of cobalamin and folate disorders](https://pubmed.ncbi.nlm.nih.gov/24942828/) | British Society for Haematology | 1 | titre confirmé par Europe PMC (PMID 24942828) |
| [Outpatient Management of Fever and Neutropenia in Adults Treated for Malignancy: American Society of Clinical Oncology and Infectious Diseases Society of America Clinical Practice Guideline Update](https://pubmed.ncbi.nlm.nih.gov/29461916/) | ASCO / IDSA | 1 | titre confirmé par Europe PMC (PMID 29461916) |
| [Management of suspected viral encephalitis in adults--Association of British Neurologists and British Infection Association National Guidelines](https://pubmed.ncbi.nlm.nih.gov/22120595/) | Association of British Neurologists / British Infection Association | 1 | titre confirmé par Europe PMC (PMID 22120595) |
| [Management of suspected viral encephalitis in children - Association of British Neurologists and British Paediatric Allergy, Immunology and Infection Group national guidelines](https://pubmed.ncbi.nlm.nih.gov/22120594/) | BPAIIG / Association of British Neurologists | 1 | titre confirmé par Europe PMC (PMID 22120594) |
| [Clinical Guidelines for Diagnosis and Treatment of Botulism, 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8112830/) | CDC | 1 | titre confirmé par Europe PMC (PMID 33956777) |
| [Management of HAM/TSP: Systematic Review and Consensus-based Recommendations 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC8101298/) | Consensus international sur la HAM/TSP | 1 | titre confirmé par Europe PMC (PMID 33968472) |
| [Classification of clinical consequences of scorpion stings: consensus development](https://pubmed.ncbi.nlm.nih.gov/21601228/) | Consensus international sur les piqûres de scorpion | 1 | titre confirmé par Europe PMC (PMID 21601228) |
| [EAACI guidelines on allergen immunotherapy: Hymenoptera venom allergy](https://pubmed.ncbi.nlm.nih.gov/28748641/) | EAACI | 1 | titre confirmé par Europe PMC (PMID 28748641) |
| [Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2019 Update](https://pubmed.ncbi.nlm.nih.gov/31221601/) | Wilderness Medical Society | 1 | titre confirmé par Europe PMC (PMID 31221601) |
| [IPNA clinical practice recommendations for the diagnosis and management of children with steroid-sensitive nephrotic syndrome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9589698/) | IPNA | 1 | titre confirmé par Europe PMC (PMID 36269406) |
| [An international consensus approach to the management of atypical hemolytic uremic syndrome in children](https://pubmed.ncbi.nlm.nih.gov/25859752/) | HUS International | 1 | titre confirmé par Europe PMC (PMID 25859752) |
| [British Thoracic Society Guideline for bronchiectasis in adults](https://pubmed.ncbi.nlm.nih.gov/30545985/) | British Thoracic Society | 1 | titre confirmé par Europe PMC (PMID 30545985) |
| [European Respiratory Society guidelines for the management of adult bronchiectasis](https://pubmed.ncbi.nlm.nih.gov/28889110/) | European Respiratory Society | 1 | titre confirmé par Europe PMC (PMID 28889110) |
| [Society of Chest Imaging and Interventions Consensus Guidelines for the Interventional Radiology Management of Hemoptysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC10289864/) | Society of Chest Imaging and Interventions | 1 | titre confirmé par Europe PMC (PMID 37362365) |
| [BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults](https://pubmed.ncbi.nlm.nih.gov/26976648/) | BTS / ICS | 1 | titre confirmé par Europe PMC (PMID 26976648) |
| [BTS guideline for oxygen use in adults in healthcare and emergency settings](https://pubmed.ncbi.nlm.nih.gov/28507176/) | British Thoracic Society | 1 | titre confirmé par Europe PMC (PMID 28507176) |
| [Guidelines for the diagnosis and monitoring of silicosis](https://pubmed.ncbi.nlm.nih.gov/25479706/) | SEPAR | 1 | titre confirmé par Europe PMC (PMID 25479706) |
| [ECFS best practice guidelines: the 2018 revision](https://pubmed.ncbi.nlm.nih.gov/29506920/) | ECFS | 1 | titre confirmé par Europe PMC (PMID 29506920) |
| [EULAR recommendations for the management of systemic lupus erythematosus: 2023 update](https://pubmed.ncbi.nlm.nih.gov/37827694/) | EULAR | 1 | titre confirmé par Europe PMC (PMID 37827694) |
| [UK clinical guideline for the prevention and treatment of osteoporosis](https://pmc.ncbi.nlm.nih.gov/articles/PMC8979902/) | NOGG (Royaume-Uni) | 1 | titre confirmé par Europe PMC (PMID 35378630) |
| [Guideline for diagnosis and treatment of subacromial pain syndrome: a multidisciplinary review by the Dutch Orthopaedic Association](https://pmc.ncbi.nlm.nih.gov/articles/PMC4062801/) | Dutch Orthopaedic Association | 1 | titre confirmé par Europe PMC (PMID 24847788) |
| [2021 American College of Rheumatology Guideline for the Treatment of Juvenile Idiopathic Arthritis: Therapeutic Approaches for Oligoarthritis, Temporomandibular Joint Arthritis, and Systemic Juvenile Idiopathic Arthritis](https://pmc.ncbi.nlm.nih.gov/articles/PMC10161784/) | American College of Rheumatology | 1 | titre confirmé par Europe PMC (PMID 35233993) |
| [2019 American College of Rheumatology/Arthritis Foundation Guideline for the Treatment of Juvenile Idiopathic Arthritis: Therapeutic Approaches for Non-Systemic Polyarthritis, Sacroiliitis, and Enthesitis](https://pmc.ncbi.nlm.nih.gov/articles/PMC6561114/) | American College of Rheumatology / Arthritis Foundation | 1 | titre confirmé par Europe PMC (PMID 31021537) |
| [European evidence-based recommendations for diagnosis and treatment of childhood-onset systemic lupus erythematosus: the SHARE initiative](https://pubmed.ncbi.nlm.nih.gov/28630236/) | SHARE (consensus européen) | 1 | titre confirmé par Europe PMC (PMID 28630236) |
| [European consensus-based recommendations for diagnosis and treatment of immunoglobulin A vasculitis-the SHARE initiative](https://pubmed.ncbi.nlm.nih.gov/30879080/) | SHARE (consensus européen) | 1 | titre confirmé par Europe PMC (PMID 30879080) |
| [EULAR recommendations for women's health and the management of family planning, assisted reproduction, pregnancy and menopause in patients with systemic lupus erythematosus and/or antiphospholipid syndrome](https://pmc.ncbi.nlm.nih.gov/articles/PMC5446003/) | EULAR | 1 | titre confirmé par Europe PMC (PMID 27457513) |
| [2020 American College of Rheumatology Guideline for the Management of Reproductive Health in Rheumatic and Musculoskeletal Diseases](https://pubmed.ncbi.nlm.nih.gov/32090480/) | American College of Rheumatology | 1 | titre confirmé par Europe PMC (PMID 32090480) |
| [BSR & BHPR, BOA, RCGP and BSAC guidelines for management of the hot swollen joint in adults](https://pubmed.ncbi.nlm.nih.gov/16829534/) | BSR / BHPR / BOA / RCGP / BSAC | 1 | titre confirmé par Europe PMC (PMID 16829534) |
| [Clinical Practice Guideline by the Pediatric Infectious Diseases Society and the Infectious Diseases Society of America: 2021 Guideline on Diagnosis and Management of Acute Hematogenous Osteomyelitis in Pediatrics](https://pubmed.ncbi.nlm.nih.gov/34350458/) | PIDS / IDSA | 1 | titre confirmé par Europe PMC (PMID 34350458) |
| [AAOS Clinical Practice Guideline: Detection and Nonoperative Management of Pediatric Developmental Dysplasia of the Hip in Infants up to Six Months of Age](https://pubmed.ncbi.nlm.nih.gov/25716003/) | AAOS | 1 | titre confirmé par Europe PMC (PMID 25716003) |
| [The American Academy of Orthopaedic Surgeons Evidence-Based Clinical Practice Guideline on: Management of Carpal Tunnel Syndrome](https://pubmed.ncbi.nlm.nih.gov/27869627/) | AAOS | 1 | titre confirmé par Europe PMC (PMID 27869627) |
| [International Consensus Guidance for Management of Myasthenia Gravis: 2020 Update](https://pmc.ncbi.nlm.nih.gov/articles/PMC7884987/) | MGFA — consensus international | 1 | titre confirmé par Europe PMC (PMID 33144515) |
| [Evidence-based guideline: clinical evaluation and treatment of transverse myelitis: report of the Therapeutics and Technology Assessment Subcommittee of the American Academy of Neurology](https://pubmed.ncbi.nlm.nih.gov/22156988/) | American Academy of Neurology | 1 | titre confirmé par Europe PMC (PMID 22156988) |
| [A Clinical Practice Guideline for the Management of Patients With Degenerative Cervical Myelopathy: Recommendations for Patients With Mild, Moderate, and Severe Disease and Nonmyelopathic Patients With Evidence of Cord Compression](https://pmc.ncbi.nlm.nih.gov/articles/PMC5684840/) | AO Spine | 1 | titre confirmé par Europe PMC (PMID 29164035) |
| [Statin-associated muscle symptoms: impact on statin therapy-European Atherosclerosis Society Consensus Panel Statement on Assessment, Aetiology and Management](https://pmc.ncbi.nlm.nih.gov/articles/PMC4416140/) | European Atherosclerosis Society | 1 | titre confirmé par Europe PMC (PMID 25694464) |
| [Diabetic Neuropathy: A Position Statement by the American Diabetes Association](https://pmc.ncbi.nlm.nih.gov/articles/PMC6977405/) | American Diabetes Association | 1 | titre confirmé par Europe PMC (PMID 27999003) |
| [Practice Parameter: evaluation of distal symmetric polyneuropathy: role of laboratory and genetic testing (an evidence-based review)](https://pubmed.ncbi.nlm.nih.gov/19056666/) | AAN / AANEM / AAPM&R | 1 | titre confirmé par Europe PMC (PMID 19056666) |
| [European Academy of Neurology guideline on trigeminal neuralgia](https://pubmed.ncbi.nlm.nih.gov/30860637/) | European Academy of Neurology | 1 | titre confirmé par Europe PMC (PMID 30860637) |
| [Clinical practice guideline: Bell's palsy](https://pubmed.ncbi.nlm.nih.gov/24189771/) | AAO-HNS | 1 | titre confirmé par Europe PMC (PMID 24189771) |
| [Management of REM sleep behavior disorder: an American Academy of Sleep Medicine clinical practice guideline](https://pmc.ncbi.nlm.nih.gov/articles/PMC10071384/) | American Academy of Sleep Medicine | 1 | titre confirmé par Europe PMC (PMID 36515157) |
| [EFNS guidelines on the clinical management of amyotrophic lateral sclerosis (MALS)--revised report of an EFNS task force](https://pubmed.ncbi.nlm.nih.gov/21914052/) | EFNS | 1 | titre confirmé par Europe PMC (PMID 21914052) |
| [EFNS guideline on diagnosis and management of post-polio syndrome](https://pubmed.ncbi.nlm.nih.gov/16879288/) | EFNS | 1 | titre confirmé par Europe PMC (PMID 16879288) |
| [European Stroke Organisation (ESO) guidelines on Primary Angiitis of the Central Nervous System (PACNS)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10683718/) | European Stroke Organisation | 1 | titre confirmé par Europe PMC (PMID 37903069) |
| [Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (Update)](https://pubmed.ncbi.nlm.nih.gov/28248609/) | AAO-HNS | 1 | titre confirmé par Europe PMC (PMID 28248609) |
| [Guidelines for Management of Idiopathic Normal Pressure Hydrocephalus (Third Edition): Endorsed by the Japanese Society of Normal Pressure Hydrocephalus](https://pmc.ncbi.nlm.nih.gov/articles/PMC7905302/) | Japanese Society of Normal Pressure Hydrocephalus | 1 | titre confirmé par Europe PMC (PMID 33455998) |
| [International Guidelines for the Treatment of Huntington's Disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC6618900/) | Consensus international (Bachoud-Lévi et al.) | 1 | titre confirmé par Europe PMC (PMID 31333565) |
| [EFNS guidelines on diagnosis and treatment of primary dystonias](https://pubmed.ncbi.nlm.nih.gov/20482602/) | EFNS | 1 | titre confirmé par Europe PMC (PMID 20482602) |
| [Treatment of restless legs syndrome and periodic limb movement disorder: an American Academy of Sleep Medicine clinical practice guideline](https://pmc.ncbi.nlm.nih.gov/articles/PMC11701286/) | American Academy of Sleep Medicine | 1 | titre confirmé par Europe PMC (PMID 39324694) |
| [European clinical guidelines for Tourette syndrome and other tic disorders-version 2.0. Part II: psychological interventions](https://pmc.ncbi.nlm.nih.gov/articles/PMC8314030/) | ESSTS | 1 | titre confirmé par Europe PMC (PMID 34313861) |
| [Evidence-based guideline update: treatment of essential tremor: report of the Quality Standards subcommittee of the American Academy of Neurology](https://pmc.ncbi.nlm.nih.gov/articles/PMC3208950/) | American Academy of Neurology | 1 | titre confirmé par Europe PMC (PMID 22013182) |
| [Emergency neurological life support: approach to the patient with coma](https://pubmed.ncbi.nlm.nih.gov/22932989/) | Neurocritical Care Society (ENLS) | 1 | titre confirmé par Europe PMC (PMID 22932989) |
| [Idiopathic intracranial hypertension: consensus guidelines on management](https://pmc.ncbi.nlm.nih.gov/articles/PMC6166610/) | Consensus britannique (Mollan et al.) | 1 | titre confirmé par Europe PMC (PMID 29903905) |
| [Diagnosis and management of Duchenne muscular dystrophy, part 1: diagnosis, and neuromuscular, rehabilitation, endocrine, and gastrointestinal and nutritional management](https://pmc.ncbi.nlm.nih.gov/articles/PMC5869704/) | DMD Care Considerations Working Group | 1 | titre confirmé par Europe PMC (PMID 29395989) |
| [Pediatric hydrocephalus: systematic literature review and evidence-based guidelines. Part 4: Cerebrospinal fluid shunt or endoscopic third ventriculostomy for the treatment of hydrocephalus in children](https://pubmed.ncbi.nlm.nih.gov/25988780/) | Congress of Neurological Surgeons / AANS | 1 | titre confirmé par Europe PMC (PMID 25988780) |
| [Neurosurgery guidelines for the care of people with spina bifida](https://pmc.ncbi.nlm.nih.gov/articles/PMC7838965/) | Spina Bifida Association | 1 | titre confirmé par Europe PMC (PMID 33325414) |
| [Comprehensive evaluation of the child with intellectual disability or global developmental delays](https://pmc.ncbi.nlm.nih.gov/articles/PMC9923626/) | American Academy of Pediatrics | 1 | titre confirmé par Europe PMC (PMID 25157020) |
| [Promoting Optimal Development: Identifying Infants and Young Children With Developmental Disorders Through Developmental Surveillance and Screening](https://pubmed.ncbi.nlm.nih.gov/31843861/) | American Academy of Pediatrics | 1 | titre confirmé par Europe PMC (PMID 31843861) |
| [The European Insomnia Guideline: An update on the diagnosis and treatment of insomnia 2023](https://pubmed.ncbi.nlm.nih.gov/38016484/) | European Sleep Research Society | 1 | titre confirmé par Europe PMC (PMID 38016484) |
| [Evidence-based consensus guidelines for the management of catatonia: Recommendations from the British Association for Psychopharmacology](https://pmc.ncbi.nlm.nih.gov/articles/PMC10101189/) | British Association for Psychopharmacology | 1 | titre confirmé par Europe PMC (PMID 37039129) |
| [Managing functional neurological disorder: treatment recommendations for health professionals in Australia](https://pmc.ncbi.nlm.nih.gov/articles/PMC12184360/) | Consensus australien sur les troubles neurologiques fonctionnels | 1 | titre confirmé par Europe PMC (PMID 40552010) |
| [Selective mutism: a consensus based care pathway of good practice](https://pubmed.ncbi.nlm.nih.gov/18456696/) | Archives of Disease in Childhood (consensus) | 1 | titre confirmé par Europe PMC (PMID 18456696) |
| [Clinical Practice Guideline for the Assessment and Treatment of Children and Adolescents With Anxiety Disorders](https://pubmed.ncbi.nlm.nih.gov/32439401/) | AACAP | 1 | titre confirmé par Europe PMC (PMID 32439401) |
| [Toward a consensus on dyslexia: findings from a Delphi study](https://pmc.ncbi.nlm.nih.gov/articles/PMC12198935/) | Consensus Delphi international | 1 | titre confirmé par Europe PMC (PMID 39996533) |
| [Practice parameters for behavioral treatment of bedtime problems and night wakings in infants and young children](https://pubmed.ncbi.nlm.nih.gov/17068980/) | American Academy of Sleep Medicine | 1 | titre confirmé par Europe PMC (PMID 17068980) |
| [An international consensus study of neuroleptic malignant syndrome diagnostic criteria using the Delphi method](https://pubmed.ncbi.nlm.nih.gov/21733489/) | Consensus international (Gurrera et al.) | 1 | titre confirmé par Europe PMC (PMID 21733489) |
| [Clinical Practice Guideline: Tonsillectomy in Children (Update)](https://pubmed.ncbi.nlm.nih.gov/30798778/) | AAO-HNS | 1 | titre confirmé par Europe PMC (PMID 30798778) |
| [Clinical Practice Guideline: Nosebleed (Epistaxis)](https://pubmed.ncbi.nlm.nih.gov/31910111/) | AAO-HNS | 1 | titre confirmé par Europe PMC (PMID 31910111) |
| [Clinical practice guideline: acute otitis externa](https://pubmed.ncbi.nlm.nih.gov/24491310/) | AAO-HNS | 1 | titre confirmé par Europe PMC (PMID 24491310) |
| [Bacterial Keratitis Preferred Practice Pattern®](https://pubmed.ncbi.nlm.nih.gov/30366799/) | American Academy of Ophthalmology | 1 | titre confirmé par Europe PMC (PMID 30366799) |
| [Diabetic Retinopathy Preferred Practice Pattern®](https://pubmed.ncbi.nlm.nih.gov/31757498/) | American Academy of Ophthalmology | 1 | titre confirmé par Europe PMC (PMID 31757498) |
| [Esotropia and Exotropia Preferred Practice Pattern®](https://pubmed.ncbi.nlm.nih.gov/29108746/) | American Academy of Ophthalmology | 1 | titre confirmé par Europe PMC (PMID 29108746) |
| [Refractive Errors Preferred Practice Pattern®](https://pubmed.ncbi.nlm.nih.gov/36543603/) | American Academy of Ophthalmology | 1 | titre confirmé par Europe PMC (PMID 36543603) |
| [Pediatric Eye Evaluations Preferred Practice Pattern®: I. Vision Screening in the Primary Care and Community Setting; II. Comprehensive Ophthalmic Examination](https://pubmed.ncbi.nlm.nih.gov/29108745/) | American Academy of Ophthalmology | 1 | titre confirmé par Europe PMC (PMID 29108745) |
| [Retinal Vein Occlusions Preferred Practice Pattern®](https://pubmed.ncbi.nlm.nih.gov/31757503/) | American Academy of Ophthalmology | 1 | titre confirmé par Europe PMC (PMID 31757503) |
| [Retinal and Ophthalmic Artery Occlusions Preferred Practice Pattern®](https://pubmed.ncbi.nlm.nih.gov/31757501/) | American Academy of Ophthalmology | 1 | titre confirmé par Europe PMC (PMID 31757501) |
| [Uveitis: Diagnostic work-up. A literature review and recommendations from an expert committee](https://pubmed.ncbi.nlm.nih.gov/29037906/) | Comité d’experts (Autoimmunity Reviews) | 1 | titre confirmé par Europe PMC (PMID 29037906) |
| [Use of the Delphi process in paediatric cataract management](https://pubmed.ncbi.nlm.nih.gov/26420824/) | Consensus Delphi (British Journal of Ophthalmology) | 1 | titre confirmé par Europe PMC (PMID 26420824) |
| [Expert consensus on dental caries management](https://pmc.ncbi.nlm.nih.gov/articles/PMC8971510/) | Consensus d’experts (International Journal of Oral Science) | 1 | titre confirmé par Europe PMC (PMID 35361749) |
| [Treatment of stage I-III periodontitis-The EFP S3 level clinical practice guideline](https://pmc.ncbi.nlm.nih.gov/articles/PMC7891343/) | European Federation of Periodontology | 1 | titre confirmé par Europe PMC (PMID 32383274) |
| [International Association of Dental Traumatology guidelines for the management of traumatic dental injuries: 1. Fractures and luxations](https://pubmed.ncbi.nlm.nih.gov/32475015/) | IADT | 1 | titre confirmé par Europe PMC (PMID 32475015) |
| [World Health Organization-World Federation of Societies of Anaesthesiologists (WHO-WFSA) International Standards for a Safe Practice of Anesthesia](https://pubmed.ncbi.nlm.nih.gov/29734240/) | WFSA / OMS | 1 | titre confirmé par Europe PMC (PMID 29734240) |
| [Management of Postoperative Pain: A Clinical Practice Guideline From the American Pain Society, the American Society of Regional Anesthesia and Pain Medicine, and the American Society of Anesthesiologists' Committee on Regional Anesthesia, Executive Committee, and Administrative Council](https://pubmed.ncbi.nlm.nih.gov/26827847/) | American Pain Society / ASA | 1 | titre confirmé par Europe PMC (PMID 26827847) |
| [Pre-operative evaluation of adults undergoing elective noncardiac surgery: Updated guideline from the European Society of Anaesthesiology](https://pubmed.ncbi.nlm.nih.gov/29708905/) | ESAIC | 1 | titre confirmé par Europe PMC (PMID 29708905) |
| [Difficult Airway Society 2015 guidelines for management of unanticipated difficult intubation in adults](https://pmc.ncbi.nlm.nih.gov/articles/PMC4650961/) | Difficult Airway Society | 1 | titre confirmé par Europe PMC (PMID 26556848) |
| [Consensus on circulatory shock and hemodynamic monitoring. Task force of the European Society of Intensive Care Medicine](https://pmc.ncbi.nlm.nih.gov/articles/PMC4239778/) | ESICM | 1 | titre confirmé par Europe PMC (PMID 25392034) |
| [Surviving Sepsis Campaign International Guidelines for the Management of Septic Shock and Sepsis-Associated Organ Dysfunction in Children](https://pubmed.ncbi.nlm.nih.gov/32032273/) | Surviving Sepsis Campaign (SCCM / ESICM) | 1 | titre confirmé par Europe PMC (PMID 32032273) |
| [European Resuscitation Council Guidelines 2021: Paediatric Life Support](https://pubmed.ncbi.nlm.nih.gov/33773830/) | European Resuscitation Council | 1 | titre confirmé par Europe PMC (PMID 33773830) |
| [Parameters For Evaluation and Treatment of Patients With Cleft Lip/Palate or Other Craniofacial Differences](https://pubmed.ncbi.nlm.nih.gov/34162066/) | ACPA | 1 | titre confirmé par Europe PMC (PMID 34162066) |
| [Society for maternal-fetal medicine (SMFM) clinical guideline #7: nonimmune hydrops fetalis](https://pubmed.ncbi.nlm.nih.gov/25557883/) | SMFM | 1 | titre confirmé par Europe PMC (PMID 25557883) |
| [ISUOG Practice Guidelines (updated): performance of the routine mid-trimester fetal ultrasound scan](https://pubmed.ncbi.nlm.nih.gov/35592929/) | ISUOG | 1 | titre confirmé par Europe PMC (PMID 35592929) |
| [Committee Opinion No. 712: Intrapartum Management of Intraamniotic Infection](https://pubmed.ncbi.nlm.nih.gov/28742677/) | ACOG | 1 | titre confirmé par Europe PMC (PMID 28742677) |
| [Macrosomia: ACOG Practice Bulletin, Number 216](https://pubmed.ncbi.nlm.nih.gov/31856124/) | ACOG | 1 | titre confirmé par Europe PMC (PMID 31856124) |
| [SMFM Consult Series #46: Evaluation and management of polyhydramnios](https://pubmed.ncbi.nlm.nih.gov/30048635/) | SMFM | 1 | titre confirmé par Europe PMC (PMID 30048635) |
| [Amniotic fluid embolism: diagnosis and management](https://pubmed.ncbi.nlm.nih.gov/26987420/) | SMFM | 1 | titre confirmé par Europe PMC (PMID 26987420) |
| [FIGO consensus guidelines on intrapartum fetal monitoring: Cardiotocography](https://pubmed.ncbi.nlm.nih.gov/26433401/) | FIGO | 1 | titre confirmé par Europe PMC (PMID 26433401) |
| [Recommendations From the 2023 International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome](https://pmc.ncbi.nlm.nih.gov/articles/PMC10505534/) | Réseau international SOPK (Monash University) | 1 | titre confirmé par Europe PMC (PMID 37580314) |
| [Current evaluation of amenorrhea](https://pubmed.ncbi.nlm.nih.gov/19007635/) | ASRM | 1 | titre confirmé par Europe PMC (PMID 19007635) |
| [The ESHRE/ESGE consensus on the classification of female genital tract congenital anomalies](https://pmc.ncbi.nlm.nih.gov/articles/PMC3712660/) | ESHRE / ESGE | 1 | titre confirmé par Europe PMC (PMID 23771171) |
| [AAGL practice report: practice guidelines on intrauterine adhesions developed in collaboration with the European Society of Gynaecological Endoscopy (ESGE)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5440524/) | AAGL / ESGE | 1 | titre confirmé par Europe PMC (PMID 28603474) |
| [Adnexal Torsion in Adolescents: ACOG Committee Opinion No, 783](https://pubmed.ncbi.nlm.nih.gov/31348225/) | ACOG | 1 | titre confirmé par Europe PMC (PMID 31348225) |
| [Role of tubal surgery in the era of assisted reproductive technology: a committee opinion](https://pubmed.ncbi.nlm.nih.gov/33642065/) | ASRM | 1 | titre confirmé par Europe PMC (PMID 33642065) |
| [Clinical practice guidelines from the French College of Gynecologists and Obstetricians (CNGOF): benign breast tumors - short text](https://pubmed.ncbi.nlm.nih.gov/26967341/) | CNGOF | 1 | titre confirmé par Europe PMC (PMID 26967341) |
| [ACR Appropriateness Criteria® Evaluation of Nipple Discharge: 2022 Update](https://pubmed.ncbi.nlm.nih.gov/36436958/) | American College of Radiology | 1 | titre confirmé par Europe PMC (PMID 36436958) |
| [Pregnancy at Age 35 Years or Older: ACOG Obstetric Care Consensus No. 11](https://pubmed.ncbi.nlm.nih.gov/35852294/) | ACOG / SMFM | 1 | titre confirmé par Europe PMC (PMID 35852294) |
| [Clinical Practice Guideline for the Evaluation and Treatment of Children and Adolescents With Obesity](https://pubmed.ncbi.nlm.nih.gov/36622115/) | American Academy of Pediatrics | 1 | titre confirmé par Europe PMC (PMID 36622115) |
| [Position paper update: gastric lavage for gastrointestinal decontamination](https://pubmed.ncbi.nlm.nih.gov/23418938/) | AACT / EAPCCT | 1 | titre confirmé par Europe PMC (PMID 23418938) |
| [Position paper: Single-dose activated charcoal](https://pubmed.ncbi.nlm.nih.gov/15822758/) | AACT / EAPCCT | 1 | titre confirmé par Europe PMC (PMID 15822758) |
| [Committee Opinion No. 723: Guidelines for Diagnostic Imaging During Pregnancy and Lactation](https://pubmed.ncbi.nlm.nih.gov/28937575/) | ACOG | 1 | titre confirmé par Europe PMC (PMID 28937575) |
| [SAGES guidelines for the use of laparoscopy during pregnancy](https://pmc.ncbi.nlm.nih.gov/articles/PMC11133165/) | SAGES | 1 | titre confirmé par Europe PMC (PMID 38700549) |
| [British Association for Psychopharmacology consensus guidance on the use of psychotropic medication preconception, in pregnancy and postpartum 2017](https://pubmed.ncbi.nlm.nih.gov/28440103/) | British Association for Psychopharmacology | 1 | titre confirmé par Europe PMC (PMID 28440103) |
| [BSR and BHPR guideline on prescribing drugs in pregnancy and breastfeeding-Part II: analgesics and other drugs used in rheumatology practice](https://pubmed.ncbi.nlm.nih.gov/26750125/) | BSR / BHPR | 1 | titre confirmé par Europe PMC (PMID 26750125) |
| [General treatment principles for fracture-related infection: recommendations from an international expert group](https://pmc.ncbi.nlm.nih.gov/articles/PMC7351827/) | Groupe international d’experts sur les infections après fracture | 1 | titre confirmé par Europe PMC (PMID 31659475) |
| [Functional Somatic Symptoms](https://pmc.ncbi.nlm.nih.gov/articles/PMC6794707/) | AWMF (recommandation allemande S3) | 1 | titre confirmé par Europe PMC (PMID 31554544) |
| [Extracorporeal Treatment for Lithium Poisoning: Systematic Review and Recommendations from the EXTRIP Workgroup](https://pmc.ncbi.nlm.nih.gov/articles/PMC4422246/) | EXTRIP Workgroup | 1 | titre confirmé par Europe PMC (PMID 25583292) |
| [Extracorporeal treatment for tricyclic antidepressant poisoning: recommendations from the EXTRIP Workgroup](https://pmc.ncbi.nlm.nih.gov/articles/PMC4282541/) | EXTRIP Workgroup | 1 | titre confirmé par Europe PMC (PMID 24712820) |

### 8. Revues de la littérature (à défaut de recommandation publiée)

| Protocole | Organisme | Fiches | Vérification |
|---|---|---:|---|
| [Amoebiasis](https://pubmed.ncbi.nlm.nih.gov/12660071/) | The Lancet (revue) | 2 | titre confirmé par Europe PMC (PMID 12660071) |
| [Management of odontogenic infections and sepsis: an update](https://pmc.ncbi.nlm.nih.gov/articles/PMC7517749/) | British Dental Journal (revue) | 2 | titre confirmé par Europe PMC (PMID 32978579) |
| [Neurological disorders associated with cassava diet: a review of putative etiological mechanisms](https://pubmed.ncbi.nlm.nih.gov/21327546/) | Metabolic Brain Disease (revue) | 2 | titre confirmé par Europe PMC (PMID 21327546) |
| [Skin lightening: causes and complications](https://pubmed.ncbi.nlm.nih.gov/34637158/) | Clinical and Experimental Dermatology (revue) | 1 | titre confirmé par Europe PMC (PMID 34637158) |
| [Tungiasis--a neglected disease with many challenges for global public health](https://pmc.ncbi.nlm.nih.gov/articles/PMC4214674/) | PLoS Neglected Tropical Diseases (revue) | 1 | titre confirmé par Europe PMC (PMID 25356978) |
| [An Approach to the Patient With Delayed Puberty](https://pubmed.ncbi.nlm.nih.gov/35100608/) | Journal of Clinical Endocrinology & Metabolism (revue) | 1 | titre confirmé par Europe PMC (PMID 35100608) |
| [Prenatal diagnosis and management of omphalocele](https://pubmed.ncbi.nlm.nih.gov/31072463/) | Seminars in Pediatric Surgery (revue) | 1 | titre confirmé par Europe PMC (PMID 31072463) |
| [Loiasis: new epidemiologic insights and proposed treatment strategy](https://pubmed.ncbi.nlm.nih.gov/22530819/) | Journal of Travel Medicine (revue) | 1 | titre confirmé par Europe PMC (PMID 22530819) |
| [Management of pleural effusion, empyema, and lung abscess](https://pmc.ncbi.nlm.nih.gov/articles/PMC3140254/) | Seminars in Interventional Radiology (revue) | 1 | titre confirmé par Europe PMC (PMID 22379278) |
| [Review of the Diagnosis and Treatment of Periodic Paralysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC5867231/) | Muscle & Nerve (revue) | 1 | titre confirmé par Europe PMC (PMID 29125635) |
| [Konzo: from poverty, cassava, and cyanogen intake to toxico-nutritional neurological disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC3125150/) | PLoS Neglected Tropical Diseases (revue) | 1 | titre confirmé par Europe PMC (PMID 21738800) |
| [Pterygium: an update on pathophysiology, clinical features, and management](https://pmc.ncbi.nlm.nih.gov/articles/PMC8170279/) | Therapeutic Advances in Ophthalmology (revue) | 1 | titre confirmé par Europe PMC (PMID 34104871) |
| [Management of Bartholin duct cysts and abscesses: a systematic review](https://pubmed.ncbi.nlm.nih.gov/19445813/) | Obstetrical & Gynecological Survey (revue systématique) | 1 | titre confirmé par Europe PMC (PMID 19445813) |
| [A Review of Breast Pain: Causes, Imaging Recommendations, and Treatment](https://pubmed.ncbi.nlm.nih.gov/38424883/) | Journal of Breast Imaging (revue) | 1 | titre confirmé par Europe PMC (PMID 38424883) |
| [Edema: diagnosis and management](https://pubmed.ncbi.nlm.nih.gov/23939641/) | American Family Physician (revue) | 1 | titre confirmé par Europe PMC (PMID 23939641) |
| [Gastrointestinal bleeding in children: diagnostic approach](https://pmc.ncbi.nlm.nih.gov/articles/PMC10807079/) | Italian Journal of Pediatrics (revue) | 1 | titre confirmé par Europe PMC (PMID 38263189) |
| [Chronic hepatosplenomegaly in African school children: a common but neglected morbidity associated with schistosomiasis and malaria](https://pmc.ncbi.nlm.nih.gov/articles/PMC3166045/) | PLoS Neglected Tropical Diseases (revue) | 1 | titre confirmé par Europe PMC (PMID 21912707) |
| [Neonatal polycythemia and hyperviscosity](https://pubmed.ncbi.nlm.nih.gov/18424246/) | Seminars in Fetal and Neonatal Medicine (revue) | 1 | titre confirmé par Europe PMC (PMID 18424246) |
| [Birth Injuries in Neonates](https://pubmed.ncbi.nlm.nih.gov/27803142/) | Pediatrics in Review (revue) | 1 | titre confirmé par Europe PMC (PMID 27803142) |
| [Management of paediatric acute mastoiditis: systematic review](https://pubmed.ncbi.nlm.nih.gov/28879826/) | Journal of Laryngology & Otology (revue systématique) | 1 | titre confirmé par Europe PMC (PMID 28879826) |
| [Benign gastric outlet obstruction--spectrum and management](https://pubmed.ncbi.nlm.nih.gov/22696905/) | Tropical Gastroenterology (revue) | 1 | titre confirmé par Europe PMC (PMID 22696905) |
| [Diagnosing Common Benign Skin Tumors](https://pubmed.ncbi.nlm.nih.gov/39418568/) | American Family Physician (revue) | 1 | titre confirmé par Europe PMC (PMID 39418568) |
| [Adult brachial plexus injury: evaluation and management](https://pubmed.ncbi.nlm.nih.gov/24095074/) | Orthopedic Clinics of North America (revue) | 1 | titre confirmé par Europe PMC (PMID 24095074) |
| [The aural foreign body space: A review of pediatric ear foreign bodies and a management paradigm](https://pubmed.ncbi.nlm.nih.gov/32050118/) | International Journal of Pediatric Otorhinolaryngology (revue) | 1 | titre confirmé par Europe PMC (PMID 32050118) |
| [Lower Extremity Abnormalities in Children](https://pubmed.ncbi.nlm.nih.gov/39964924/) | American Family Physician (revue) | 1 | titre confirmé par Europe PMC (PMID 39964924) |
| [Cultural concepts of distress and psychiatric disorders: literature review and research recommendations for global mental health epidemiology](https://pmc.ncbi.nlm.nih.gov/articles/PMC3997373/) | International Journal of Epidemiology (revue) | 1 | titre confirmé par Europe PMC (PMID 24366490) |
| [The integration of idioms of distress into mental health assessments and interventions: a systematic review](https://pmc.ncbi.nlm.nih.gov/articles/PMC6521171/) | Global Mental Health (revue systématique) | 1 | titre confirmé par Europe PMC (PMID 31143467) |

## Fichiers

- `protocoles-par-fiche.csv` : une ligne par fiche (département, spécialité, identifiant, nom, protocole propre ou non, titres, liens), séparateur « ; », s'ouvre dans Excel.
- `protocoles-par-specialite.md` : la même chose en lecture, fiche par fiche, avec les liens cliquables.
- `catalogue.json` : le catalogue au format machine (pour un import éventuel dans l'application).
