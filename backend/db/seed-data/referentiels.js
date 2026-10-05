'use strict';

/**
 * Référentiels transversaux : départements et spécialités, urgences, symptômes,
 * scores / classifications, examens complémentaires (valeurs normales).
 *
 * Les valeurs normales sont des fourchettes usuelles chez l'adulte ; elles varient
 * selon la technique et le laboratoire : toujours se référer aux normes du
 * laboratoire qui a réalisé l'examen.
 */

const departements = [
  {
    slug: 'medecine-interne',
    nom: 'Médecine interne',
    icone: '🩺',
    description:
      "Pathologies de l'adulte : cardiologie, pneumologie, hépato-gastro-entérologie, néphrologie, endocrinologie, hématologie, infectiologie…",
    specialites: [
      ['Cardiologie', 'ESC, ACC, AHA, EACTS'],
      ['Pneumologie', 'ERS, ATS, CHEST, GINA, GOLD, AASM, OMS (tuberculose)'],
      ['Gastro-entérologie et hépatologie', 'ACG, AGA, EASL, AASLD, ESGE'],
      ['Néphrologie', 'KDIGO, ASN, ERA, NKF'],
      ['Endocrinologie et diabétologie', 'ADA, Endocrine Society, AACE, ATA, ESE'],
      ['Hématologie', 'ASH, EHA, ISTH, WFH'],
      ['Rhumatologie', 'ACR, EULAR, ASAS'],
      ['Infectiologie', 'OMS, CDC, IDSA, ESCMID, ASTMH, ECDC'],
      ['Dermatologie', null],
      ['Médecine interne générale', 'ACP, EFIM'],
    ],
  },
  {
    slug: 'pediatrie',
    nom: 'Pédiatrie',
    icone: '👶',
    description:
      "Néonatologie, pédiatrie générale, malnutrition, infectiologie et urgences de l'enfant (AAP, OMS/UNICEF, RCPCH, ESPGHAN, ESPID).",
    specialites: [
      ['Néonatologie', 'OMS, AAP'],
      ['Pédiatrie générale', 'AAP, RCPCH, OMS (PCIME)'],
      ['Malnutrition', 'OMS, UNICEF, PRONANUT'],
      ['Infectiologie pédiatrique', 'ESPID, OMS'],
      ['Gastro-entérologie pédiatrique', 'ESPGHAN, OMS'],
      ['Neurologie pédiatrique', 'EPNS, ILAE'],
      ['Endocrinologie pédiatrique', 'PES, ESPE'],
      ['Urgences pédiatriques', 'OMS (ETAT), AAP'],
    ],
  },
  {
    slug: 'gynecologie-obstetrique',
    nom: 'Gynécologie-Obstétrique',
    icone: '🤰',
    description:
      'Gynécologie, gynécologie oncologique, grossesse, travail et accouchement, pathologies et urgences obstétricales (ACOG, RCOG, FIGO, OMS, SMFM).',
    specialites: [
      ['Gynécologie', 'ACOG, RCOG, FIGO, ESGE'],
      ['Gynécologie oncologique', 'ESGO, SGO, ESMO, NCCN, ASCO, FIGO'],
      ['Grossesse', 'OMS, ACOG, FIGO'],
      ['Travail et accouchement', 'OMS, FIGO'],
      ['Pathologies obstétricales', 'ACOG, SMFM, RCOG'],
      ['Urgences obstétricales', 'OMS, FIGO, RCOG'],
      ['Néonatologie immédiate', 'OMS (Helping Babies Breathe)'],
    ],
  },
  {
    slug: 'chirurgie',
    nom: 'Chirurgie',
    icone: '🔪',
    description:
      'Chirurgie digestive et viscérale, traumatologie, orthopédie, neurochirurgie et urgences chirurgicales (ACS, WSES, EAST, AO, AAOS).',
    specialites: [
      ['Chirurgie digestive', 'ACS, SAGES, EAES, ESCP, E-AHPBA'],
      ['Chirurgie viscérale', 'ACS, WSES'],
      ['Traumatologie', 'ACS TQIP, EAST, WSES, AO Foundation'],
      ['Orthopédie', 'AAOS, EFORT'],
      ['Neurochirurgie', 'AANS, EANS, WFNS'],
      ['Urgences chirurgicales', 'WSES, ACS, EAST, SCCM, EuSEM'],
    ],
  },
  {
    slug: 'neuropsychiatrie',
    nom: 'Neuropsychiatrie',
    icone: '🧠',
    description:
      'Neurologie, AVC, épilepsie, mouvements anormaux, psychiatrie et urgences neuropsychiatriques (AAN, EAN, ESO, ILAE, MDS, OMS).',
    specialites: [
      ['Neurologie', 'AAN, EAN'],
      ['AVC', 'ESO, AHA/ASA'],
      ['Épilepsie', 'ILAE, OMS (mhGAP)'],
      ['Mouvements anormaux', 'MDS'],
      ['Psychiatrie', 'OMS (mhGAP)'],
      ['Neurotraumatologie', 'Brain Trauma Foundation, WFNS'],
      ['Urgences neuropsychiatriques', null],
    ],
  },
];

const urgences = [
  {
    slug: 'paludisme-grave-urgence',
    nom: 'Paludisme grave',
    categorie: 'medicale',
    description: 'Accès palustre à P. falciparum avec au moins un critère de gravité OMS.',
    signes_gravite:
      '- Troubles de la conscience (Glasgow < 11 adulte, Blantyre < 3 enfant), prostration\n- Convulsions répétées (> 2 en 24 h)\n- Détresse respiratoire, acidose\n- Choc (PAS < 80 mmHg adulte, < 70 mmHg enfant)\n- Anémie sévère, hypoglycémie < 2,2 mmol/L\n- Hémoglobinurie, ictère, saignements, insuffisance rénale',
    conduite_abcde:
      "- **A** : libérer les voies aériennes, PLS si inconscient\n- **B** : oxygène si SpO2 < 94 %\n- **C** : voie veineuse, glycémie capillaire, remplissage prudent si choc\n- **D** : traiter les convulsions, corriger l'hypoglycémie (G10 % 5 mL/kg chez l'enfant)\n- **E** : température, rechercher d'autres foyers\n- Artésunate IV/IM sans délai",
    quand_transferer:
      "Transfert vers un hôpital de référence si coma, détresse respiratoire, anémie nécessitant une transfusion non disponible sur place ou insuffisance rénale. Administrer l'artésunate (rectal 10 mg/kg chez l'enfant < 6 ans si IV/IM impossible) AVANT le transfert.",
  },
  {
    slug: 'urgence-hypertensive',
    nom: 'Urgence hypertensive',
    categorie: 'medicale',
    description: "PA très élevée (souvent ≥ 180/110 mmHg) avec atteinte aiguë d'organe cible.",
    signes_gravite:
      '- Céphalées intenses, troubles visuels, confusion (encéphalopathie)\n- Douleur thoracique (SCA, dissection), OAP\n- Déficit neurologique focal (AVC)\n- Oligurie, insuffisance rénale aiguë\n- Rétinopathie stade III–IV',
    conduite_abcde:
      "- **A/B** : position demi-assise, oxygène si OAP\n- **C** : voie veineuse, ECG, monitorage PA\n- **D** : examen neurologique, glycémie\n- Baisse tensionnelle progressive (≈ 25 % de la PAM la première heure), sauf dissection aortique et éclampsie (objectifs propres)\n- Nicardipine ou labétalol IV selon l'organe atteint",
    quand_transferer:
      "Transfert en unité de soins intensifs si atteinte d'organe (AVC, OAP, dissection, encéphalopathie).",
  },
  {
    slug: 'eclampsie',
    nom: 'Éclampsie',
    categorie: 'gyneco-obstetricale',
    description: 'Crise convulsive généralisée survenant dans un contexte de pré-éclampsie.',
    signes_gravite:
      '- Convulsions\n- PA ≥ 160/110 mmHg\n- Céphalées, troubles visuels, barre épigastrique\n- Oligurie',
    conduite_abcde:
      "- **A** : PLS (décubitus latéral gauche), protéger la patiente\n- **B** : oxygène\n- **C** : 2 voies veineuses, bilan\n- **D** : sulfate de magnésium (dose de charge puis entretien)\n- Contrôle tensionnel, organiser l'extraction fœtale",
    quand_transferer:
      "Après stabilisation et dose de charge de sulfate de magnésium, transfert vers une structure disposant d'un bloc opératoire et d'une prise en charge néonatale.",
  },
  {
    slug: 'hemorragie-du-post-partum-urgence',
    nom: 'Hémorragie du post-partum',
    categorie: 'gyneco-obstetricale',
    description:
      "Perte sanguine ≥ 500 mL dans les 24 h suivant l'accouchement, ou toute perte avec instabilité.",
    signes_gravite:
      '- Perte ≥ 1000 mL (HPP sévère)\n- Index de choc (FC/PAS) ≥ 1\n- Pâleur, sueurs, confusion, oligurie\n- Utérus mou ne se rétractant pas',
    conduite_abcde:
      "- Appeler à l'aide, estimer la perte (sac collecteur gradué)\n- **C** : 2 voies veineuses de gros calibre, cristalloïdes réchauffés, groupage, NFS\n- Massage utérin + ocytocine 10 UI IV/IM\n- Acide tranexamique 1 g IV dans les 3 h\n- Vider la vessie, examiner placenta et filière génitale\n- Paquet E-MOTIVE : massage, utérotoniques, tranexamique, solutés, examen, escalade",
    quand_transferer:
      'Si hémorragie persistante malgré le traitement de 1re ligne : compression bimanuelle ou aortique, combinaison anti-choc non pneumatique si disponible, ballonnet intra-utérin, puis transfert vers un bloc opératoire avec possibilité de transfusion.',
  },
  {
    slug: 'grossesse-extra-uterine-rompue',
    nom: 'Grossesse extra-utérine rompue',
    categorie: 'gyneco-obstetricale',
    description: 'Hémopéritoine sur GEU : choc hémorragique chez une femme en âge de procréer.',
    signes_gravite:
      "- Douleur pelvienne brutale, scapulalgie\n- Choc (tachycardie, hypotension, pâleur)\n- Défense abdominale, cul-de-sac de Douglas douloureux\n- Épanchement abondant à l'échographie",
    conduite_abcde:
      '- **C** : 2 voies veineuses, remplissage, groupage-RAI, réserver du sang\n- Test de grossesse (β-hCG urinaire) immédiat\n- Laparotomie ou cœlioscopie en urgence (salpingectomie)',
    quand_transferer:
      "Transfert immédiat si pas de bloc opératoire, après mise en condition (ne pas retarder l'hémostase).",
  },
  {
    slug: 'abdomen-aigu-chirurgical',
    nom: 'Abdomen aigu chirurgical',
    categorie: 'chirurgicale',
    description: 'Douleur abdominale aiguë nécessitant une évaluation chirurgicale urgente.',
    signes_gravite:
      '- Défense ou contracture\n- Fièvre, sepsis\n- Choc\n- Vomissements incoercibles, arrêt des matières et des gaz',
    conduite_abcde:
      '- **C** : voie veineuse, remplissage si nécessaire\n- À jeun strict, sonde nasogastrique si vomissements ou occlusion\n- Antalgie (ne retarde pas le diagnostic)\n- Avis chirurgical',
    quand_transferer: "Transfert immédiat si aucun chirurgien n'est disponible sur place.",
  },
  {
    slug: 'traumatisme-cranien-grave-urgence',
    nom: 'Traumatisme crânien grave',
    categorie: 'chirurgicale',
    description: 'Traumatisme crânien avec Glasgow ≤ 8 ou signes de localisation.',
    signes_gravite:
      '- Glasgow ≤ 8 ou baisse ≥ 2 points\n- Anisocorie, mydriase aréactive\n- Déficit moteur, convulsions\n- Triade de Cushing (HTA, bradycardie, troubles respiratoires)',
    conduite_abcde:
      '- **A** : intubation si Glasgow ≤ 8, immobilisation du rachis cervical\n- **B** : SpO2 ≥ 94 %, normocapnie\n- **C** : PAS ≥ 110 mmHg (éviter hypotension), pas de soluté hypotonique\n- **D** : Glasgow, pupilles, glycémie\n- Tête surélevée à 30°, osmothérapie si engagement',
    quand_transferer:
      'Transfert vers un centre avec scanner et neurochirurgie dès que le patient est stabilisé.',
  },
  {
    slug: 'etat-de-mal-epileptique-urgence',
    nom: 'État de mal épileptique',
    categorie: 'medicale',
    description: 'Crise convulsive > 5 minutes ou crises successives sans reprise de conscience.',
    signes_gravite:
      '- Durée > 5 minutes\n- Pas de reprise de conscience entre les crises\n- Hypoxie, hyperthermie',
    conduite_abcde:
      '- **A** : PLS, aspiration\n- **B** : oxygène\n- **C** : voie veineuse\n- **D** : glycémie capillaire — benzodiazépine, puis antiépileptique de 2e ligne si persistance',
    quand_transferer: 'Transfert en réanimation si persistance malgré deux lignes de traitement.',
  },
  {
    slug: 'avc-aigu',
    nom: 'AVC aigu',
    categorie: 'medicale',
    description: 'Déficit neurologique focal brutal : chaque minute compte (« time is brain »).',
    signes_gravite:
      '- Début < 4 h 30 (fenêtre de thrombolyse)\n- Troubles de la conscience, vomissements (hémorragie, HTIC)\n- Troubles de la déglutition\n- PA > 220/120 mmHg',
    conduite_abcde:
      "- Reconnaître : test FAST (visage, bras, parole, temps), noter l'heure de début\n- **A/B** : SpO2 ≥ 94 %, pas d'O2 systématique\n- **C** : glycémie capillaire, PA (ne pas baisser brutalement)\n- **D** : NIHSS, à jeun jusqu'au test de déglutition\n- Scanner cérébral en urgence",
    quand_transferer:
      "Transfert immédiat vers un centre disposant d'un scanner (et si possible de la thrombolyse) si début < 4 h 30.",
  },
  {
    slug: 'syndrome-meninge-febrile',
    nom: 'Syndrome méningé fébrile',
    categorie: 'medicale',
    description:
      'Fièvre + raideur de nuque / céphalées / troubles de la conscience : méningite jusqu’à preuve du contraire.',
    signes_gravite:
      '- Purpura extensif (purpura fulminans)\n- Coma, convulsions, signes de localisation\n- Choc septique',
    conduite_abcde:
      '- **C** : voie veineuse, hémocultures\n- Ponction lombaire sauf contre-indication (ne pas retarder l’antibiothérapie)\n- Ceftriaxone IV immédiate (+ dexaméthasone avant ou avec la 1re dose si indiquée)\n- TDR paludisme en zone d’endémie',
    quand_transferer:
      'Transfert en soins intensifs si coma, choc ou purpura fulminans, après la 1re dose d’antibiotique.',
  },
  {
    slug: 'crise-d-asthme-aigue-grave',
    nom: "Crise d'asthme aiguë grave",
    categorie: 'medicale',
    description: 'Exacerbation sévère menaçant le pronostic vital.',
    signes_gravite:
      '- Parle par mots, assis penché en avant, agitation\n- FR > 30/min, FC > 120/min, SpO2 < 90 %\n- DEP ≤ 50 % de la théorique\n- Silence auscultatoire, confusion, bradycardie (arrêt imminent)',
    conduite_abcde:
      '- **B** : oxygène (SpO2 93–95 % adulte, 94–98 % enfant)\n- Salbutamol inhalé répété (chambre d’inhalation ou nébulisation) + ipratropium\n- Corticoïde systémique précoce (prednisolone per os ou hydrocortisone IV)\n- Sulfate de magnésium IV si crise grave réfractaire',
    quand_transferer:
      'Transfert en soins intensifs si absence d’amélioration après 1 h ou signes d’arrêt imminent.',
  },
  {
    slug: 'oedeme-aigu-du-poumon',
    nom: 'Œdème aigu du poumon',
    categorie: 'medicale',
    description: 'Insuffisance cardiaque aiguë avec congestion pulmonaire.',
    signes_gravite:
      '- Orthopnée, crépitants bilatéraux, expectoration mousseuse\n- SpO2 < 90 %, FR > 25/min\n- Choc cardiogénique (PAS < 90 mmHg, hypoperfusion)',
    conduite_abcde:
      '- Position assise, jambes pendantes\n- **B** : oxygène si SpO2 < 90 %, VNI si détresse\n- **C** : furosémide IV, dérivés nitrés si PAS > 110 mmHg\n- ECG (SCA, troubles du rythme), rechercher le facteur déclenchant',
    quand_transferer:
      'Transfert en soins intensifs si choc cardiogénique, détresse respiratoire persistante ou SCA.',
  },
  {
    slug: 'choc-septique',
    nom: 'Sepsis et choc septique',
    categorie: 'medicale',
    description: "Dysfonction d'organe menaçant la vie, causée par une réponse dérégulée à une infection.",
    signes_gravite:
      '- qSOFA ≥ 2 (FR ≥ 22, confusion, PAS ≤ 100 mmHg)\n- Marbrures, temps de recoloration > 3 s\n- Lactates > 2 mmol/L, oligurie\n- Hypotension persistante malgré le remplissage (choc)',
    conduite_abcde:
      "- **Première heure** : hémocultures puis antibiothérapie probabiliste\n- **C** : cristalloïdes 30 mL/kg (prudence chez l'enfant et le malnutri), noradrénaline si PAM < 65 mmHg\n- Contrôle de la source (drainage, chirurgie)\n- Surveillance diurèse et lactates",
    quand_transferer: 'Transfert en réanimation si choc persistant ou défaillance d’organe.',
  },
  {
    slug: 'acidocetose-diabetique-urgence',
    nom: 'Acidocétose diabétique',
    categorie: 'medicale',
    description: 'Hyperglycémie, cétose et acidose métabolique par carence en insuline.',
    signes_gravite:
      '- pH < 7,0 ou bicarbonates < 5 mmol/L\n- Troubles de la conscience\n- Kaliémie < 3,5 ou > 6 mmol/L\n- Choc, déshydratation sévère',
    conduite_abcde:
      "- **C** : NaCl 0,9 % 1 L la 1re heure (adulte), puis selon l'état d'hydratation\n- Kaliémie AVANT l'insuline ; supplémenter si K < 5,0 mmol/L\n- Insuline rapide IV 0,1 UI/kg/h, glucosé 5–10 % dès glycémie < 2,5 g/L\n- Rechercher le facteur déclenchant (infection, arrêt de l'insuline)",
    quand_transferer:
      'Transfert en soins intensifs si coma, pH < 7,0, troubles kaliémiques ou absence de pousse-seringue.',
  },
  {
    slug: 'hyperkaliemie-menacante',
    nom: 'Hyperkaliémie menaçante',
    categorie: 'medicale',
    description: 'Kaliémie ≥ 6,5 mmol/L ou signes ECG : risque d’arrêt cardiaque.',
    signes_gravite:
      '- Ondes T amples et pointues, élargissement du QRS, bradycardie\n- Faiblesse musculaire\n- Insuffisance rénale anurique',
    conduite_abcde:
      '- **Protéger le cœur** : gluconate de calcium 10 % 10 mL IV en 3–5 min (répéter si ECG inchangé)\n- **Faire entrer le K** : insuline rapide 10 UI + 25 g de glucose IV, salbutamol nébulisé\n- **Éliminer** : furosémide si diurèse conservée, dialyse si échec\n- Arrêter les apports et médicaments hyperkaliémiants',
    quand_transferer: 'Transfert vers un centre de dialyse si hyperkaliémie réfractaire ou anurie.',
  },
  {
    slug: 'crise-drepanocytaire-grave',
    nom: 'Crise drépanocytaire grave',
    categorie: 'medicale',
    description:
      'Crise vaso-occlusive hyperalgique, syndrome thoracique aigu, séquestration splénique ou AVC chez le drépanocytaire.',
    signes_gravite:
      '- Douleur thoracique, fièvre, hypoxie (syndrome thoracique aigu)\n- Augmentation brutale de la rate + chute de l’Hb (séquestration)\n- Déficit neurologique (AVC)\n- Priapisme > 4 h, fièvre ≥ 38,5 °C',
    conduite_abcde:
      '- Antalgie rapide (évaluée dans les 30–60 min) selon l’intensité, morphine si besoin\n- Hydratation (orale ou IV), oxygène si SpO2 < 95 %\n- Antibiothérapie si fièvre (risque pneumococcique)\n- Transfusion si anémie aiguë, séquestration ou syndrome thoracique sévère',
    quand_transferer: 'Transfert si AVC, syndrome thoracique aigu sévère ou besoin d’échange transfusionnel.',
  },
  {
    slug: 'deshydratation-severe-enfant',
    nom: "Déshydratation sévère de l'enfant",
    categorie: 'pediatrique',
    description:
      'Au moins 2 signes : léthargie, yeux enfoncés, incapacité à boire, pli cutané persistant > 2 s.',
    signes_gravite:
      '- Léthargie ou inconscience\n- Pouls faible ou absent, extrémités froides (choc)\n- Malnutrition aiguë sévère associée (protocole spécifique)',
    conduite_abcde:
      '- **C** : Ringer lactate 100 mL/kg (plan C OMS) : < 12 mois 30 mL/kg en 1 h puis 70 mL/kg en 5 h ; ≥ 12 mois 30 mL/kg en 30 min puis 70 mL/kg en 2 h 30\n- SRO dès que l’enfant peut boire\n- Réévaluer toutes les 1–2 h\n- **Jamais ce schéma chez le malnutri sévère** (ReSoMal)',
    quand_transferer:
      'Si perfusion impossible : sonde nasogastrique (SRO 20 mL/kg/h pendant 6 h) et transfert immédiat.',
  },
  {
    slug: 'malnutrition-aigue-severe-compliquee',
    nom: 'Malnutrition aiguë sévère compliquée',
    categorie: 'pediatrique',
    description: "MAS avec complication médicale ou perte d'appétit : hospitalisation obligatoire.",
    signes_gravite:
      "- Test d'appétit négatif\n- Œdèmes bilatéraux sévères (+++)\n- Hypoglycémie, hypothermie\n- Déshydratation, choc\n- Infection grave",
    conduite_abcde:
      '- Prévenir/traiter hypoglycémie et hypothermie\n- Réhydratation prudente (ReSoMal) — pas de perfusion sauf choc\n- Antibiothérapie systématique\n- F-75 en phase de stabilisation',
    quand_transferer:
      'Transfert vers une unité nutritionnelle thérapeutique (UNTI) si non disponible sur place.',
  },
  {
    slug: 'sepsis-neonatal-urgence',
    nom: 'Sepsis néonatal',
    categorie: 'pediatrique',
    description: 'Infection bactérienne grave du nouveau-né (0–59 jours) : signes de danger OMS.',
    signes_gravite:
      '- Ne tète plus, convulsions, léthargie\n- FR ≥ 60/min, tirage sous-costal grave\n- T ≥ 37,5 °C ou < 35,5 °C\n- Mouvements uniquement à la stimulation ou absents',
    conduite_abcde:
      '- Réchauffer (peau à peau), prévenir l’hypoglycémie (allaitement ou lait par sonde, G10 %)\n- **B** : oxygène si SpO2 < 90 %\n- Ampicilline (ou amoxicilline) + gentamicine IM/IV dès la suspicion\n- Hémoculture si disponible, avant antibiotiques sans les retarder',
    quand_transferer:
      'Transfert en néonatologie après la 1re dose d’antibiotiques, au chaud (méthode kangourou).',
  },
];

const symptomes = [
  ['Fièvre', 'Élévation de la température corporelle ≥ 38 °C.'],
  ['Convulsions', 'Contractions musculaires involontaires, généralisées ou focales.'],
  ['Céphalées', 'Douleur de la tête.'],
  ['Troubles de la conscience', 'De la somnolence au coma.'],
  ['Pâleur', "Décoloration cutanéo-muqueuse évocatrice d'anémie."],
  ['Ictère', 'Coloration jaune des téguments et des conjonctives.'],
  ['Vomissements', 'Rejet du contenu gastrique par la bouche.'],
  ['Douleur abdominale', "Douleur localisée ou diffuse de l'abdomen."],
  ['Troubles visuels', 'Flou visuel, phosphènes, scotomes.'],
  ['Œdèmes', 'Gonflement par accumulation de liquide interstitiel.'],
  ['Perte de poids', 'Amaigrissement ou cassure de la courbe pondérale.'],
  ['Dyspnée', 'Difficulté respiratoire ressentie ou observée.'],
  ['Anorexie', "Perte d'appétit."],
  ['Toux', 'Expulsion brusque et bruyante de l’air des poumons, sèche ou productive.'],
  ['Hémoptysie', 'Rejet de sang provenant des voies respiratoires sous-glottiques.'],
  ['Sueurs nocturnes', 'Transpiration abondante pendant le sommeil.'],
  ['Diarrhée', 'Au moins 3 selles molles ou liquides par 24 h.'],
  ['Raideur de nuque', 'Résistance douloureuse à la flexion passive du cou (syndrome méningé).'],
  ['Douleur thoracique', 'Douleur de la région thoracique, à caractériser (cardiaque, pleurale, pariétale).'],
  ['Polyurie-polydipsie', 'Émission d’urines abondantes et soif intense.'],
  ['Douleurs osseuses', 'Douleurs des os et des articulations.'],
  ['Saignement vaginal', 'Saignement d’origine génitale en dehors des règles normales.'],
  ['Aménorrhée', 'Absence de règles.'],
  ['Déficit moteur', 'Perte partielle (parésie) ou totale (paralysie) de la force musculaire.'],
  ['Troubles du langage', 'Aphasie, dysarthrie.'],
  ['Oligurie', 'Diurèse < 0,5 mL/kg/h (adulte < 400–500 mL/24 h).'],
  ['Arrêt des matières et des gaz', 'Absence d’émission de selles et de gaz (occlusion).'],
  ['Distension abdominale', 'Augmentation du volume de l’abdomen (météorisme, ascite).'],
  ['Sibilants', 'Bruits respiratoires sifflants, surtout expiratoires (bronchospasme).'],
  ['Splénomégalie', 'Augmentation du volume de la rate.'],
  ['Asthénie', 'Fatigue persistante.'],
  ['Tachypnée', 'Fréquence respiratoire supérieure à la normale pour l’âge.'],
  ['Hypothermie', 'Température < 35,5 °C (nouveau-né) ou < 35 °C.'],
  ['Refus de téter', 'Nouveau-né ou nourrisson incapable de téter ou de boire : signe de danger.'],
  ['Palpitations', 'Perception anormale des battements cardiaques.'],
];

const scores = [
  {
    slug: 'imc',
    code: 'imc',
    nom: 'Indice de masse corporelle (IMC)',
    type: 'calculatrice',
    description: 'Poids (kg) / taille² (m²).',
    interpretation: '< 18,5 maigreur ; 18,5–24,9 normal ; 25–29,9 surpoids ; ≥ 30 obésité.',
    reference: 'OMS',
  },
  {
    slug: 'glasgow',
    code: 'glasgow',
    nom: 'Score de Glasgow',
    type: 'score',
    description: 'Évaluation du niveau de conscience (yeux, verbal, moteur).',
    interpretation:
      '15 normal ; 13–14 TC léger ; 9–12 TC modéré / altération modérée ; ≤ 8 coma (protection des voies aériennes).',
    reference: 'Teasdale & Jennett, Lancet 1974',
  },
  {
    slug: 'blantyre',
    code: 'blantyre',
    nom: 'Score de Blantyre (enfant)',
    type: 'score',
    description: "Échelle de coma adaptée à l'enfant qui ne parle pas encore (paludisme grave).",
    interpretation: '5 normal ; ≤ 4 altération ; < 3 coma = critère de paludisme grave.',
    reference: 'Molyneux et al., Q J Med 1989 ; OMS',
  },
  {
    slug: 'apgar',
    code: 'apgar',
    nom: "Score d'Apgar",
    type: 'score',
    description: 'Adaptation du nouveau-né à 1, 5 et 10 minutes.',
    interpretation: '7–10 normal ; 4–6 détresse modérée ; 0–3 détresse sévère (réanimation).',
    reference: 'Apgar V., 1953',
  },
  {
    slug: 'silverman',
    code: 'silverman',
    nom: 'Score de Silverman',
    type: 'score',
    description: 'Détresse respiratoire du nouveau-né (5 critères cotés de 0 à 2).',
    interpretation: '0 normal ; 1–4 détresse légère ; 5–6 détresse modérée ; ≥ 7 détresse sévère.',
    reference: 'Silverman & Andersen, Pediatrics 1956',
  },
  {
    slug: 'qsofa',
    code: 'qsofa',
    nom: 'qSOFA',
    type: 'score',
    description: 'Repérage rapide au lit du patient du risque de sepsis grave (adulte).',
    interpretation:
      '≥ 2 critères : risque élevé de mauvaise évolution — rechercher une dysfonction d’organe. Ne doit pas être utilisé seul pour éliminer un sepsis.',
    reference: 'Sepsis-3 (Singer et al., JAMA 2016) ; Surviving Sepsis Campaign 2021',
  },
  {
    slug: 'index-de-choc',
    code: 'index_choc',
    nom: 'Index de choc',
    type: 'calculatrice',
    description: 'Fréquence cardiaque / pression artérielle systolique.',
    interpretation:
      '< 0,9 normal ; ≥ 0,9 alerte ; ≥ 1,0 hémorragie importante probable (HPP, traumatisme) ; ≥ 1,4 critique.',
    reference: 'OMS 2023 (HPP) ; FIGO 2022',
  },
  {
    slug: 'deshydratation-oms',
    code: 'deshydratation_oms',
    nom: 'Classification de la déshydratation (OMS / PCIME)',
    type: 'classification',
    description: "Évaluation clinique de la déshydratation de l'enfant diarrhéique.",
    interpretation:
      '≥ 2 signes « sévères » : déshydratation sévère (plan C) ; ≥ 2 signes « modérés » : signes évidents (plan B) ; sinon : pas de déshydratation (plan A).',
    reference: 'OMS — Prise en charge intégrée des maladies de l’enfant (PCIME)',
  },
  {
    slug: 'gina-controle',
    code: 'gina_controle',
    nom: "Niveau de contrôle de l'asthme (GINA)",
    type: 'score',
    description: 'Contrôle des symptômes sur les 4 dernières semaines (4 questions).',
    interpretation: '0 critère : contrôlé ; 1–2 : partiellement contrôlé ; 3–4 : non contrôlé.',
    reference: 'Global Initiative for Asthma (GINA)',
  },
  {
    slug: 'child-pugh',
    code: 'child_pugh',
    nom: 'Score de Child-Pugh',
    type: 'score',
    description: 'Gravité de la cirrhose (bilirubine, albumine, TP/INR, ascite, encéphalopathie).',
    interpretation:
      'A (5–6) cirrhose compensée ; B (7–9) ; C (10–15) cirrhose décompensée, pronostic sévère.',
    reference: 'Pugh et al., Br J Surg 1973',
  },
  {
    slug: 'apri',
    code: 'apri',
    nom: 'Score APRI',
    type: 'calculatrice',
    description: 'Évaluation non invasive de la fibrose hépatique : (ASAT / LSN) / plaquettes (G/L) × 100.',
    interpretation:
      '> 2 : cirrhose probable ; > 0,5 : fibrose significative probable (OMS 2024 : critère de traitement de l’hépatite B) ; ≤ 0,5 : fibrose significative peu probable.',
    reference: 'OMS — Hépatite B 2024 ; Wai et al., Hepatology 2003',
  },
  {
    slug: 'ckd-epi',
    code: 'ckd_epi',
    nom: 'DFG estimé (CKD-EPI 2021)',
    type: 'calculatrice',
    description: 'Débit de filtration glomérulaire estimé, équation sans coefficient ethnique (KDIGO).',
    interpretation: 'G1 ≥ 90 ; G2 60–89 ; G3a 45–59 ; G3b 30–44 ; G4 15–29 ; G5 < 15 mL/min/1,73 m².',
    reference: 'Inker et al., NEJM 2021 ; KDIGO 2024',
  },
  {
    slug: 'clairance-creatinine',
    code: 'cockcroft',
    nom: 'Clairance de la créatinine (Cockcroft-Gault)',
    type: 'calculatrice',
    description: "Estimation de la fonction rénale pour l'adaptation des posologies.",
    interpretation: '≥ 90 normal ; 60–89 légère ; 30–59 modérée ; 15–29 sévère ; < 15 terminale (mL/min).',
    reference: 'Cockcroft & Gault, Nephron 1976',
  },
  {
    slug: 'besoins-hydriques',
    code: 'holliday_segar',
    nom: 'Besoins hydriques de base (Holliday-Segar)',
    type: 'calculatrice',
    description: 'Règle 100/50/20 mL/kg/24 h (4/2/1 mL/kg/h).',
    interpretation: "Besoins d'entretien. Ne s'applique PAS à l'enfant malnutri sévère.",
    reference: 'Holliday & Segar, Pediatrics 1957',
  },
  {
    slug: 'debit-perfusion',
    code: 'debit_perfusion',
    nom: 'Débit de perfusion (gouttes/min)',
    type: 'calculatrice',
    description: 'Volume (mL) × facteur goutte / durée (min).',
    interpretation: 'Perfuseur standard : 20 gouttes/mL ; microperfuseur : 60 gouttes/mL.',
    reference: 'Formule usuelle',
  },
  {
    slug: 'dose-ponderale',
    code: 'dose_ponderale',
    nom: 'Dose pondérale',
    type: 'calculatrice',
    description: 'Dose (mg) = poids (kg) × dose (mg/kg), avec plafond facultatif.',
    interpretation: 'Toujours vérifier la dose maximale adulte.',
    reference: 'Formule usuelle',
  },
  {
    slug: 'alvarado',
    code: 'alvarado',
    nom: "Score d'Alvarado",
    type: 'score',
    description: "Probabilité clinique d'appendicite aiguë (MANTRELS).",
    interpretation: '1–4 peu probable ; 5–6 possible ; 7–8 probable ; 9–10 très probable.',
    reference: 'Alvarado A., Ann Emerg Med 1986',
  },
  {
    slug: 'nyha',
    code: null,
    nom: 'Classification NYHA',
    type: 'classification',
    description: "Retentissement fonctionnel de l'insuffisance cardiaque.",
    interpretation:
      'I : aucune limitation ; II : dyspnée aux efforts habituels ; III : dyspnée aux efforts minimes ; IV : dyspnée au repos.',
    reference: 'New York Heart Association ; ESC 2021',
  },
  {
    slug: 'nihss',
    code: null,
    nom: 'Score NIHSS',
    type: 'score',
    description: "Gravité du déficit neurologique de l'AVC (11 items, 0 à 42).",
    interpretation: '0 normal ; 1–4 AVC mineur ; 5–15 modéré ; 16–20 modéré à sévère ; 21–42 sévère.',
    reference: 'National Institutes of Health Stroke Scale ; ESO, AHA/ASA',
  },
  {
    slug: 'kdigo-ira',
    code: null,
    nom: "Stades KDIGO de l'insuffisance rénale aiguë",
    type: 'classification',
    description: 'Stadification par la créatinine et la diurèse.',
    interpretation:
      'Stade 1 : créatinine × 1,5–1,9 ou + ≥ 26,5 µmol/L en 48 h, ou diurèse < 0,5 mL/kg/h 6–12 h ; Stade 2 : × 2–2,9 ou diurèse < 0,5 mL/kg/h ≥ 12 h ; Stade 3 : × 3, ou ≥ 354 µmol/L, ou dialyse, ou diurèse < 0,3 mL/kg/h ≥ 24 h ou anurie ≥ 12 h.',
    reference: 'KDIGO Acute Kidney Injury Guideline 2012',
  },
  {
    slug: 'stades-oms-vih',
    code: null,
    nom: "Stades cliniques OMS de l'infection à VIH",
    type: 'classification',
    description: 'Classification clinique en 4 stades (adulte et adolescent).',
    interpretation:
      'Stade 1 : asymptomatique ; 2 : symptômes mineurs ; 3 : symptômes avancés (tuberculose pulmonaire, candidose orale…) ; 4 : SIDA (pneumocystose, toxoplasmose cérébrale, cryptococcose…). Maladie avancée = CD4 < 200/mm³ ou stade 3–4 (enfant < 5 ans : toujours).',
    reference: 'OMS — Consolidated HIV guidelines 2021',
  },
];

/** Examens : valeurs normales usuelles chez l'adulte (sauf mention). */
const examens = [
  // ------------------------------------------------------------- Biologie
  {
    slug: 'nfs',
    nom: 'Numération formule sanguine (NFS) et plaquettes',
    type: 'biologie',
    description: 'Hémogramme : lignées rouge, blanche et plaquettaire.',
    valeurs_normales:
      '- Hémoglobine : homme 13–17 g/dL ; femme 12–16 g/dL ; femme enceinte ≥ 11 g/dL ; enfant 6–59 mois ≥ 11 g/dL\n- VGM : 80–100 fL\n- Leucocytes : 4–10 G/L (4 000–10 000/mm³)\n- Polynucléaires neutrophiles : 1,5–7 G/L\n- Lymphocytes : 1–4 G/L\n- Plaquettes : 150–400 G/L',
  },
  {
    slug: 'reticulocytes',
    nom: 'Réticulocytes',
    type: 'biologie',
    description: 'Témoin de la régénération médullaire.',
    valeurs_normales: '- 25–100 G/L (0,5–2 %)\n- > 120 G/L : anémie régénérative (hémolyse, saignement)',
  },
  {
    slug: 'tdr-paludisme',
    nom: 'Test de diagnostic rapide (TDR) du paludisme',
    type: 'biologie',
    description: 'Détection d’antigènes plasmodiaux (HRP2 pour P. falciparum, pLDH).',
    valeurs_normales: '- Négatif\n- Peut rester positif 2–4 semaines après un traitement efficace (HRP2)',
  },
  {
    slug: 'goutte-epaisse',
    nom: 'Goutte épaisse et frottis sanguin',
    type: 'biologie',
    description: 'Microscopie : diagnostic, identification de l’espèce et parasitémie.',
    valeurs_normales:
      '- Absence de Plasmodium\n- Parasitémie exprimée en parasites/µL ou en % d’hématies parasitées',
  },
  {
    slug: 'glycemie',
    nom: 'Glycémie (veineuse ou capillaire)',
    type: 'biologie',
    description: 'Dosage du glucose sanguin.',
    valeurs_normales:
      '- À jeun : 0,70–1,00 g/L (3,9–5,5 mmol/L)\n- Hyperglycémie modérée à jeun : 1,00–1,25 g/L\n- Diabète : à jeun ≥ 1,26 g/L (7,0 mmol/L) ou aléatoire ≥ 2,00 g/L (11,1 mmol/L) avec symptômes\n- Hypoglycémie : < 0,70 g/L (3,9 mmol/L) ; sévère < 0,54 g/L (3,0 mmol/L) ; enfant palustre/malnutri < 0,54 g/L (< 3 mmol/L), paludisme grave < 0,40 g/L (2,2 mmol/L)',
  },
  {
    slug: 'hba1c',
    nom: 'Hémoglobine glyquée (HbA1c)',
    type: 'biologie',
    description: 'Reflet de l’équilibre glycémique des 2–3 derniers mois.',
    valeurs_normales:
      '- Normale : < 5,7 %\n- Prédiabète : 5,7–6,4 %\n- Diabète : ≥ 6,5 %\n- Ininterprétable si hémoglobinopathie (HbSS), anémie, transfusion récente',
  },
  {
    slug: 'creatinine',
    nom: 'Créatininémie',
    type: 'biologie',
    description: 'Marqueur de la fonction rénale ; permet d’estimer le DFG.',
    valeurs_normales:
      '- Homme : 62–106 µmol/L (7–12 mg/L)\n- Femme : 44–80 µmol/L (5–9 mg/L)\n- Enfant : selon l’âge et la masse musculaire',
  },
  {
    slug: 'uree',
    nom: 'Urée sanguine',
    type: 'biologie',
    description: 'Produit du catabolisme protéique, éliminé par le rein.',
    valeurs_normales: '- 2,5–7,5 mmol/L (0,15–0,45 g/L)',
  },
  {
    slug: 'ionogramme',
    nom: 'Ionogramme sanguin',
    type: 'biologie',
    description: 'Électrolytes plasmatiques.',
    valeurs_normales:
      '- Sodium : 135–145 mmol/L\n- Potassium : 3,5–5,0 mmol/L\n- Chlore : 98–107 mmol/L\n- Bicarbonates : 22–29 mmol/L\n- Trou anionique (Na − [Cl + HCO3]) : 8–12 mmol/L',
  },
  {
    slug: 'calcemie-magnesemie',
    nom: 'Calcémie et magnésémie',
    type: 'biologie',
    description: 'Calcium total et magnésium plasmatiques.',
    valeurs_normales:
      '- Calcémie totale : 2,20–2,60 mmol/L (à corriger selon l’albumine)\n- Magnésémie : 0,75–1,00 mmol/L\n- Zone thérapeutique du sulfate de magnésium (pré-éclampsie) : 2,0–3,5 mmol/L',
  },
  {
    slug: 'bilan-hepatique',
    nom: 'Bilan hépatique',
    type: 'biologie',
    description: 'Transaminases, bilirubine, phosphatases alcalines, GGT, albumine.',
    valeurs_normales:
      '- ASAT : < 35–40 UI/L ; ALAT : < 35–40 UI/L (homme), < 30–35 UI/L (femme)\n- Bilirubine totale : < 17 µmol/L (< 10 mg/L)\n- Phosphatases alcalines : 40–130 UI/L\n- GGT : < 55 UI/L (homme), < 40 UI/L (femme)\n- Albumine : 35–50 g/L',
  },
  {
    slug: 'ldh',
    nom: 'Lactate déshydrogénase (LDH)',
    type: 'biologie',
    description: 'Marqueur non spécifique de lyse cellulaire (hémolyse, HELLP).',
    valeurs_normales: '- 120–250 UI/L (selon la technique)\n- > 600 UI/L : hémolyse (critère du HELLP)',
  },
  {
    slug: 'crp',
    nom: 'Protéine C-réactive (CRP)',
    type: 'biologie',
    description: "Marqueur de l'inflammation aiguë.",
    valeurs_normales: '- < 5 mg/L\n- > 100 mg/L : infection bactérienne probable (non spécifique)',
  },
  {
    slug: 'procalcitonine',
    nom: 'Procalcitonine (PCT)',
    type: 'biologie',
    description: 'Marqueur plus spécifique d’infection bactérienne.',
    valeurs_normales:
      '- < 0,1 ng/mL\n- 0,25–0,5 : infection bactérienne possible\n- > 0,5 ng/mL : infection bactérienne probable',
  },
  {
    slug: 'lactates',
    nom: 'Lactates sanguins',
    type: 'biologie',
    description: 'Témoin de l’hypoperfusion tissulaire.',
    valeurs_normales: '- < 2 mmol/L\n- > 2 mmol/L : hypoperfusion (sepsis) ; > 4 mmol/L : gravité majeure',
  },
  {
    slug: 'gaz-du-sang',
    nom: 'Gaz du sang artériel',
    type: 'biologie',
    description: 'Équilibre acido-basique et oxygénation.',
    valeurs_normales:
      '- pH : 7,35–7,45\n- PaO2 : 80–100 mmHg\n- PaCO2 : 35–45 mmHg\n- HCO3⁻ : 22–26 mmol/L\n- SaO2 : ≥ 95 %',
  },
  {
    slug: 'hemostase',
    nom: "Bilan d'hémostase (TP/INR, TCA, fibrinogène)",
    type: 'biologie',
    description: 'Exploration de la coagulation.',
    valeurs_normales:
      '- TP : 70–100 % ; INR : 0,8–1,2\n- TCA : ratio patient/témoin < 1,2\n- Fibrinogène : 2–4 g/L (≥ 4 g/L en fin de grossesse ; < 2 g/L au cours d’une HPP = gravité)',
  },
  {
    slug: 'test-de-coagulation-au-lit',
    nom: 'Test de coagulation au lit du malade (20WBCT)',
    type: 'biologie',
    description: 'Tube sec en verre, 2 mL de sang, laissé 20 min.',
    valeurs_normales:
      '- Formation d’un caillot en < 20 minutes\n- Absence de caillot : coagulopathie (CIVD, envenimation)',
  },
  {
    slug: 'groupage-rai',
    nom: 'Groupage sanguin ABO-Rhésus et RAI',
    type: 'biologie',
    description: 'Pré-transfusionnel ; RAI = recherche d’agglutinines irrégulières.',
    valeurs_normales: '- RAI négative\n- Rhésus négatif chez la femme : immunoprophylaxie anti-D si indiquée',
  },
  {
    slug: 'bandelette-urinaire',
    nom: 'Bandelette urinaire',
    type: 'biologie',
    description: 'Dépistage au lit : protéines, sang, glucose, cétones, leucocytes, nitrites.',
    valeurs_normales: '- Tous les paramètres négatifs\n- Protéinurie ≥ 2+ = significative (≈ ≥ 1 g/L)',
  },
  {
    slug: 'proteinurie',
    nom: 'Protéinurie des 24 h / rapport protéines-créatinine (RPC)',
    type: 'biologie',
    description: 'Quantification de la protéinurie.',
    valeurs_normales:
      '- < 0,15 g/24 h\n- RPC < 15 mg/mmol (≈ < 0,15 g/g)\n- Grossesse : protéinurie significative ≥ 0,3 g/24 h ou RPC ≥ 30 mg/mmol',
  },
  {
    slug: 'ecbu',
    nom: 'Examen cytobactériologique des urines (ECBU)',
    type: 'biologie',
    description: 'Recherche d’une infection urinaire.',
    valeurs_normales:
      '- Leucocyturie < 10⁴/mL\n- Bactériurie < 10³ UFC/mL (seuils d’infection : ≥ 10³ à 10⁵ selon le germe et le terrain)',
  },
  {
    slug: 'hemocultures',
    nom: 'Hémocultures',
    type: 'biologie',
    description: 'Mise en culture du sang (2–3 paires) avant antibiothérapie.',
    valeurs_normales: '- Stériles\n- Positivité : identification du germe et antibiogramme',
  },
  {
    slug: 'lcr',
    nom: 'Ponction lombaire — analyse du LCR',
    type: 'biologie',
    description: 'Aspect, cytologie, biochimie, Gram, culture, antigènes, PCR, encre de Chine.',
    valeurs_normales:
      '- Aspect : clair « eau de roche »\n- Leucocytes : < 5/mm³ (nouveau-né < 20–30/mm³)\n- Protéinorachie : 0,15–0,45 g/L (nouveau-né < 1,2 g/L)\n- Glycorachie : ≥ 0,6 × glycémie (≈ ≥ 2,5 mmol/L)\n- Gram et culture : négatifs',
  },
  {
    slug: 'tdr-vih',
    nom: 'Dépistage VIH (TDR selon l’algorithme national)',
    type: 'biologie',
    description: 'Algorithme à 3 tests rapides successifs (OMS).',
    valeurs_normales:
      '- Négatif\n- Diagnostic positif = 3 tests réactifs consécutifs selon l’algorithme national',
  },
  {
    slug: 'charge-virale-vih',
    nom: 'Charge virale VIH (ARN plasmatique)',
    type: 'biologie',
    description: 'Suivi de l’efficacité du traitement antirétroviral.',
    valeurs_normales:
      '- Indétectable (< 50 copies/mL)\n- Supprimée : < 1 000 copies/mL (OMS)\n- Échec virologique : ≥ 1 000 copies/mL à 2 mesures à 3 mois d’intervalle, avec soutien à l’observance',
  },
  {
    slug: 'cd4',
    nom: 'Lymphocytes T CD4',
    type: 'biologie',
    description: 'Évaluation de l’immunodépression.',
    valeurs_normales:
      '- 500–1 500/mm³\n- < 200/mm³ : maladie à VIH avancée (risque d’infections opportunistes)',
  },
  {
    slug: 'tb-lam',
    nom: 'TB-LAM urinaire (LF-LAM)',
    type: 'biologie',
    description: 'Antigène mycobactérien urinaire ; utile chez le PVVIH.',
    valeurs_normales: '- Négatif',
  },
  {
    slug: 'xpert-mtb-rif',
    nom: 'Xpert MTB/RIF Ultra',
    type: 'biologie',
    description: 'Test moléculaire rapide (OMS) : M. tuberculosis et résistance à la rifampicine.',
    valeurs_normales: '- MTB non détecté\n- Si détecté : résistance à la rifampicine détectée / non détectée',
  },
  {
    slug: 'bacilloscopie',
    nom: 'Bacilloscopie (recherche de BAAR, Ziehl-Neelsen)',
    type: 'biologie',
    description: 'Examen microscopique des crachats.',
    valeurs_normales: '- Négatif\n- Contrôles à M2, M5 et M6 sous traitement',
  },
  {
    slug: 'aghbs',
    nom: 'Antigène HBs (AgHBs)',
    type: 'biologie',
    description: 'Marqueur de l’infection par le virus de l’hépatite B.',
    valeurs_normales: '- Négatif\n- Positif > 6 mois : hépatite B chronique',
  },
  {
    slug: 'marqueurs-vhb',
    nom: 'Marqueurs VHB (AgHBe, anti-HBe, anti-HBc, ADN VHB)',
    type: 'biologie',
    description: 'Phase de l’infection et réplication virale.',
    valeurs_normales:
      '- ADN VHB : indétectable\n- Seuil OMS 2024 : ADN VHB > 2 000 UI/mL + ALAT élevées = indication de traitement',
  },
  {
    slug: 'serologies-hepatites',
    nom: 'Sérologies hépatites C et D',
    type: 'biologie',
    description: 'Co-infections à rechercher chez le porteur de l’AgHBs.',
    valeurs_normales: '- Anti-VHC négatif ; anti-VHD négatif',
  },
  {
    slug: 'alpha-foetoproteine',
    nom: 'Alpha-fœtoprotéine (AFP)',
    type: 'biologie',
    description: 'Marqueur du carcinome hépatocellulaire (avec l’échographie).',
    valeurs_normales: '- < 10 ng/mL\n- > 400 ng/mL : très évocateur de carcinome hépatocellulaire',
  },
  {
    slug: 'electrophorese-hb',
    nom: "Électrophorèse de l'hémoglobine",
    type: 'biologie',
    description: 'Identification et quantification des hémoglobines.',
    valeurs_normales:
      '- Adulte : HbA 95–98 %, HbA2 2–3,5 %, HbF < 1 %\n- Drépanocytose SS : HbS > 80 %, HbA absente, HbF variable\n- Trait drépanocytaire AS : HbA > HbS (HbS 35–45 %)',
  },
  {
    slug: 'test-rapide-drepanocytose',
    nom: 'Test rapide de dépistage de la drépanocytose (POC)',
    type: 'biologie',
    description: 'Test immunologique au lit (HbA, HbS, HbC) dès la naissance.',
    valeurs_normales:
      '- Profil AA\n- AS : porteur sain ; SS ou SC : syndrome drépanocytaire majeur (confirmer par électrophorèse)',
  },
  {
    slug: 'bilan-lipidique',
    nom: 'Bilan lipidique',
    type: 'biologie',
    description: 'Cholestérol total, LDL, HDL, triglycérides (à jeun).',
    valeurs_normales:
      '- LDL : objectif selon le risque (< 1,0 g/L si risque élevé ; < 0,55 g/L si très élevé, ESC)\n- HDL : > 0,40 g/L (homme), > 0,50 g/L (femme)\n- Triglycérides : < 1,50 g/L',
  },
  {
    slug: 'troponine',
    nom: 'Troponine cardiaque (hs)',
    type: 'biologie',
    description: 'Marqueur de lésion myocardique.',
    valeurs_normales:
      '- < 99e percentile de la technique (ex. hs-TnT < 14 ng/L)\n- Cinétique (H0–H1/H3) indispensable',
  },
  {
    slug: 'bnp',
    nom: 'Peptides natriurétiques (BNP / NT-proBNP)',
    type: 'biologie',
    description: "Marqueurs de l'insuffisance cardiaque.",
    valeurs_normales:
      '- Contexte non aigu : BNP < 35 pg/mL ; NT-proBNP < 125 pg/mL\n- Contexte aigu (exclusion d’IC) : BNP < 100 pg/mL ; NT-proBNP < 300 pg/mL\n- Majorés par l’âge, l’insuffisance rénale ; abaissés par l’obésité',
  },
  {
    slug: 'beta-hcg',
    nom: 'β-hCG plasmatique quantitative',
    type: 'biologie',
    description: 'Diagnostic et suivi de grossesse.',
    valeurs_normales:
      "- Non enceinte : < 5 UI/L\n- Grossesse évolutive : augmentation d'au moins 35 % en 48 h (le plus souvent ≈ doublement)\n- Zone de discrimination : sac intra-utérin visible en échographie endovaginale à partir de ≈ 1 500–3 500 UI/L",
  },
  {
    slug: 'cetonemie',
    nom: 'Cétonémie capillaire (β-hydroxybutyrate) / cétonurie',
    type: 'biologie',
    description: 'Recherche de corps cétoniques.',
    valeurs_normales:
      '- Cétonémie < 0,6 mmol/L ; cétonurie négative\n- Acidocétose : cétonémie ≥ 3,0 mmol/L ou cétonurie ≥ 2+',
  },
  {
    slug: 'tdr-cholera',
    nom: 'TDR choléra et coproculture',
    type: 'biologie',
    description: 'TDR sur selles pour l’alerte ; confirmation par culture ou PCR (Vibrio cholerae O1/O139).',
    valeurs_normales:
      '- Négatif\n- Un TDR positif ne confirme pas seul un cas : culture/PCR nécessaire en début d’épidémie',
  },
  {
    slug: 'microalbuminurie',
    nom: 'Albuminurie (rapport albumine/créatinine urinaire, RAC)',
    type: 'biologie',
    description: 'Dépistage de la néphropathie (diabète, HTA).',
    valeurs_normales: '- A1 : < 3 mg/mmol (< 30 mg/g)\n- A2 : 3–30 mg/mmol\n- A3 : > 30 mg/mmol (> 300 mg/g)',
  },
  {
    slug: 'uricemie',
    nom: 'Uricémie',
    type: 'biologie',
    description: 'Acide urique plasmatique.',
    valeurs_normales:
      '- Homme : 200–420 µmol/L ; femme : 140–360 µmol/L\n- Pré-éclampsie : élévation = marqueur de gravité',
  },
  // ------------------------------------------------------------- Imagerie
  {
    slug: 'radiographie-thoracique',
    nom: 'Radiographie thoracique',
    type: 'imagerie',
    description: 'Cliché de face (± profil).',
    valeurs_normales:
      '- Index cardio-thoracique < 0,5\n- Champs pulmonaires clairs, culs-de-sac libres\n- Pas d’opacité, d’épanchement ni de pneumothorax',
  },
  {
    slug: 'echographie-abdominale',
    nom: 'Échographie abdominale',
    type: 'imagerie',
    description: 'Examen non irradiant de 1re intention (foie, vésicule, reins, appendice, épanchement).',
    valeurs_normales:
      '- Foie homogène, contours réguliers, flèche hépatique < 15 cm\n- Pas d’épanchement péritonéal\n- Appendice non visible ou compressible, diamètre < 6 mm\n- Rate < 12 cm',
  },
  {
    slug: 'echographie-renale',
    nom: 'Échographie rénale et des voies urinaires',
    type: 'imagerie',
    description: 'Taille des reins, différenciation, obstacle.',
    valeurs_normales:
      '- Reins de 10–12 cm, différenciation cortico-médullaire conservée\n- Pas de dilatation des cavités pyélocalicielles\n- Petits reins (< 9 cm) : maladie rénale chronique',
  },
  {
    slug: 'echographie-pelvienne',
    nom: 'Échographie pelvienne (endovaginale)',
    type: 'imagerie',
    description: 'Utérus, annexes, cul-de-sac de Douglas.',
    valeurs_normales:
      '- Utérus et ovaires normaux\n- Pas d’épanchement dans le Douglas (une lame minime peut être physiologique)\n- Grossesse : sac gestationnel intra-utérin dès ≈ 5 SA',
  },
  {
    slug: 'echographie-obstetricale',
    nom: 'Échographie obstétricale et Doppler',
    type: 'imagerie',
    description: 'Vitalité, biométrie, liquide amniotique, placenta, Doppler ombilical.',
    valeurs_normales:
      '- Activité cardiaque 110–160/min\n- Biométries entre le 10e et le 90e percentile\n- Plus grande citerne 2–8 cm ; index amniotique 5–25 cm\n- Doppler ombilical : diastole positive, IP < 95e percentile',
  },
  {
    slug: 'abdomen-sans-preparation',
    nom: 'Radiographie de l’abdomen sans préparation (ASP)',
    type: 'imagerie',
    description: 'Debout de face (ou couché + coupoles).',
    valeurs_normales:
      '- Pas de niveaux hydro-aériques\n- Pas de pneumopéritoine (croissant gazeux sous-diaphragmatique)',
  },
  {
    slug: 'scanner-abdominal',
    nom: 'Scanner abdomino-pelvien',
    type: 'imagerie',
    description: 'Avec injection sauf contre-indication ; examen de référence de l’adulte en urgence.',
    valeurs_normales: '- Pas d’épanchement, de pneumopéritoine, de collection ni de dilatation digestive',
  },
  {
    slug: 'scanner-cerebral',
    nom: 'Scanner cérébral',
    type: 'imagerie',
    description: 'Sans injection en urgence (hémorragie, lésion traumatique).',
    valeurs_normales:
      '- Pas d’hyperdensité (sang), d’hypodensité systématisée, d’effet de masse ni de déviation de la ligne médiane\n- Citernes de la base libres',
  },
  {
    slug: 'irm-cerebrale',
    nom: 'IRM cérébrale',
    type: 'imagerie',
    description: 'Diffusion (ischémie précoce), FLAIR, T2*, angio-IRM.',
    valeurs_normales: '- Pas d’hypersignal en diffusion ni d’anomalie parenchymateuse',
  },
  {
    slug: 'echocardiographie',
    nom: 'Échocardiographie transthoracique',
    type: 'imagerie',
    description: 'Fonction ventriculaire, valves, pressions de remplissage, péricarde.',
    valeurs_normales:
      '- FEVG ≥ 50 % (IC à FE réduite ≤ 40 % ; modérément réduite 41–49 %)\n- Pas de valvulopathie significative ni d’épanchement péricardique\n- PAPS < 35 mmHg',
  },
  {
    slug: 'elastometrie-hepatique',
    nom: 'Élastométrie hépatique (FibroScan)',
    type: 'imagerie',
    description: 'Mesure non invasive de la rigidité hépatique.',
    valeurs_normales: '- < 7 kPa : pas de fibrose significative\n- > 12,5 kPa : cirrhose probable (OMS)',
  },
  {
    slug: 'doppler-transcranien',
    nom: 'Doppler transcrânien',
    type: 'imagerie',
    description: 'Dépistage du risque d’AVC chez l’enfant drépanocytaire (2–16 ans), annuel.',
    valeurs_normales:
      '- Vitesse moyenne maximale (artère cérébrale moyenne / carotide interne) < 170 cm/s : normal\n- 170–199 cm/s : conditionnel (contrôle rapproché)\n- ≥ 200 cm/s : anormal, risque élevé d’AVC (programme transfusionnel ou hydroxyurée selon protocole)',
  },
  {
    slug: 'echographie-transfontanellaire',
    nom: 'Échographie transfontanellaire',
    type: 'imagerie',
    description: 'Nourrisson à fontanelle ouverte : hémorragie, hydrocéphalie, abcès.',
    valeurs_normales: '- Ventricules de taille normale, pas d’hémorragie ni de collection',
  },
  // ------------------------------------------------------------- Explorations
  {
    slug: 'ecg',
    nom: 'Électrocardiogramme (ECG)',
    type: 'exploration',
    description: 'ECG 12 dérivations.',
    valeurs_normales:
      '- Rythme sinusal 60–100/min\n- PR 120–200 ms ; QRS < 120 ms\n- QTc < 450 ms (homme), < 460 ms (femme)\n- Sokolow-Lyon < 35 mm (HVG si ≥ 35 mm)',
  },
  {
    slug: 'eeg',
    nom: 'Électroencéphalogramme (EEG)',
    type: 'exploration',
    description: 'Enregistrement de l’activité électrique cérébrale.',
    valeurs_normales:
      '- Rythme de fond normal pour l’âge, sans anomalie paroxystique\n- Un EEG normal n’élimine pas une épilepsie',
  },
  {
    slug: 'fond-d-oeil',
    nom: "Fond d'œil",
    type: 'exploration',
    description: 'Examen de la rétine (HTA, diabète, HTIC, rétinopathie palustre).',
    valeurs_normales: '- Papille à bords nets, vaisseaux normaux, pas d’hémorragie ni d’exsudat',
  },
  {
    slug: 'spirometrie',
    nom: 'Spirométrie avec test de réversibilité',
    type: 'exploration',
    description: 'VEMS, CVF, rapport VEMS/CVF avant et après bronchodilatateur.',
    valeurs_normales:
      '- VEMS/CVF ≥ 0,70 (ou ≥ limite inférieure de la normale)\n- Réversibilité significative : VEMS + ≥ 12 % et + ≥ 200 mL (adulte)',
  },
  {
    slug: 'debit-expiratoire-de-pointe',
    nom: 'Débit expiratoire de pointe (DEP)',
    type: 'exploration',
    description: 'Mesure simple au débitmètre de pointe.',
    valeurs_normales:
      '- ≥ 80 % de la valeur théorique ou de la meilleure valeur personnelle\n- Variabilité diurne excessive : > 10 % (adulte), > 13 % (enfant)',
  },
  {
    slug: 'anthropometrie',
    nom: 'Mesures anthropométriques (PB, poids/taille)',
    type: 'exploration',
    description: 'Périmètre brachial et Z-score poids/taille (normes OMS de croissance).',
    valeurs_normales:
      '- PB ≥ 125 mm (6–59 mois)\n- P/T ≥ −2 Z-score\n- MAM : PB 115–124 mm ou P/T −3 à −2 Z ; MAS : PB < 115 mm ou P/T < −3 Z ou œdèmes bilatéraux',
  },
  {
    slug: 'oxymetrie-de-pouls',
    nom: 'Oxymétrie de pouls (SpO2)',
    type: 'exploration',
    description: 'Saturation périphérique en oxygène.',
    valeurs_normales: '- ≥ 95 % en air ambiant\n- < 90 % : oxygénothérapie (OMS, enfant et adulte)',
  },
];

module.exports = { departements, urgences, symptomes, scores, examens };
