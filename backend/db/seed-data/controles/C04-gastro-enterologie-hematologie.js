'use strict';

/**
 * Contrôle de conformité — lot C04 : gastro-entérologie, hépatologie et hématologie (33 fiches).
 * Seuils transfusionnels vérifiés dans le guide clinique MSF (tableau « Définition de l'anémie et
 * seuils transfusionnels ») ; éradication d'H. pylori selon Maastricht VI (2022).
 */

module.exports = {
  lot: 'C04',
  date: '2026-10-16',
  titre: 'Gastro-entérologie, hépatologie et hématologie',
  fiches: [
    {
      slug: 'abces-amibien-du-foie',
      protocoles: [
        'MSF — Guide clinique et thérapeutique : amibiase',
        'CDC — Amebiasis: clinical care and treatment',
        'Guide clinique de l’Hôpital général de référence (RDC, 2016)',
      ],
      verifie:
        'Triade de Fontan, échographie et sérologie ; métronidazole 500–750 mg 3 fois par jour 7 à 10 jours (ou tinidazole 2 g/j 5 jours) puis paromomycine 7 jours ; ponction écho-guidée si abcès volumineux, du lobe gauche ou sans amélioration à 72 h ; ruptures (péritonéale, pleurale, péricardique).',
    },
    {
      slug: 'amibiase-intestinale',
      protocoles: [
        'MSF — Guide clinique et thérapeutique : amibiase',
        'CDC — Amebiasis: clinical care and treatment',
        'OMS — Prise en charge de la diarrhée sanglante (dysenterie)',
      ],
      verifie:
        'Dysenterie peu fébrile, trophozoïtes hématophages sur selles fraîches, kystes = portage ; métronidazole 500 mg 3 fois par jour 5 à 7 jours (enfant 10–15 mg/kg 3 fois par jour), tinidazole 2 g/j 3 jours ; amœbicide de contact ; réhydratation ; shigellose en différentiel.',
    },
    {
      slug: 'ascite-et-decompensation-cirrhose',
      protocoles: [
        'EASL — Clinical practice guidelines for the management of patients with decompensated cirrhosis (2018)',
        'AASLD — Practice guidance on diagnosis, evaluation and management of ascites, SBP and hepatorenal syndrome (2021)',
      ],
      verifie:
        'Ponction exploratrice systématique (PNN > 250/mm³, gradient albumine ≥ 11 g/L) ; régime < 5 g de sel, spironolactone 100 mg ± furosémide 40 mg jusqu’à 400/160 mg, arrêt si natrémie < 125 ; albumine 8 g par litre au-delà de 5 L ; infection du liquide d’ascite : céphalosporine de 3e génération + albumine 1,5 g/kg J1 et 1 g/kg J3, prophylaxie par norfloxacine ; syndrome hépatorénal : terlipressine + albumine.',
    },
    {
      slug: 'cancer-colorectal',
      protocoles: [
        'ESMO — Localised colon cancer: clinical practice guidelines (2020)',
        'ESMO — Rectal cancer: clinical practice guidelines (2017)',
        'NCCN — Colon cancer / Rectal cancer',
      ],
      verifie:
        'Signes d’appel et toucher rectal ; coloscopie avec biopsies ; scanner thoraco-abdomino-pelvien, IRM pelvienne pour le rectum, ACE ; colectomie avec curage ; FOLFOX ou CAPOX adjuvant pour les stades III ; occlusion et perforation ; métastases hépatiques résécables.',
      corrige:
        'Cancer du rectum : la radiochimiothérapie préopératoire était présentée comme systématique ; l’ESMO la réserve aux tumeurs localement avancées à l’IRM (T3–T4 ou N+), les petites tumeurs relevant de la chirurgie seule (exérèse totale du mésorectum).',
      corrections: [
        {
          principe: 'Forme localisée',
          champ: 'details',
          remplacer: [
            'rectum : radiochimiothérapie préopératoire puis résection',
            'rectum : résection avec exérèse totale du mésorectum, précédée d’une radiochimiothérapie (ou d’une radiothérapie courte) si la tumeur est localement avancée à l’IRM (T3–T4 ou N+)',
          ],
        },
      ],
    },
    {
      slug: 'cancer-de-l-estomac',
      protocoles: [
        'ESMO — Gastric cancer: clinical practice guideline (2022)',
        'NCCN — Gastric cancer',
      ],
      verifie:
        'Signes d’alarme ; endoscopie avec biopsies ; bilan d’extension par scanner ; gastrectomie avec curage et chimiothérapie périopératoire (FLOT) ; palliatif : dérivation ou prothèse, antalgie ; prévention par l’éradication d’H. pylori.',
    },
    {
      slug: 'carcinome-hepatocellulaire',
      protocoles: [
        'EASL — Clinical practice guidelines on the management of hepatocellular carcinoma',
        'BCLC — Stratégie de pronostic et de traitement (mise à jour 2022)',
        'AASLD — Practice guidance on prevention, diagnosis and treatment of hepatocellular carcinoma (2023)',
      ],
      verifie:
        'Critères non invasifs sur cirrhose (prise de contraste artérielle et lavage), AFP > 400 ng/mL évocatrice, biopsie sur foie non cirrhotique ; traitement selon le stade BCLC ; ténofovir si hépatite B ; paracétamol ≤ 2 g/j sur cirrhose ; dépistage par échographie ± AFP tous les 6 mois ; vaccination à la naissance.',
    },
    {
      slug: 'cirrhose-hepatique',
      protocoles: [
        'EASL — Clinical practice guidelines for the management of patients with decompensated cirrhosis (2018)',
        'Baveno VII — Renewing consensus in portal hypertension (2022)',
      ],
      verifie:
        'Diagnostic (biologie, échographie, élastométrie > 12–15 kPa, APRI), Child-Pugh ; traitement de la cause ; ascite (spironolactone/furosémide 100/40) ; varices à risque : bêtabloquant non sélectif (propranolol ou carvédilol) ou ligature ; lactulose ; dépistage du carcinome tous les 6 mois ; apport protéique normal.',
    },
    {
      slug: 'dyspepsie-et-gastrite',
      protocoles: [
        'ACG/CAG — Clinical guideline: management of dyspepsia (2017)',
        'Maastricht VI/Florence — Management of Helicobacter pylori infection: consensus report (2022)',
      ],
      verifie:
        'Signes d’alarme ; stratégie « tester et traiter » H. pylori par test non invasif ; IPP 4 à 8 semaines ; arrêt des AINS ; dyspepsie fonctionnelle : explications, prokinétique de courte durée, tricyclique à faible dose.',
      a_arbitrer:
        'Âge à partir duquel l’endoscopie est d’emblée indiquée : 50–60 ans dans cette fiche (ACG/CAG : 60 ans), 45–55 ans dans les fiches de l’infection à H. pylori et de l’ulcère. Le cancer gastrique survenant plus tôt en Afrique, un seuil commun est à fixer.',
    },
    {
      slug: 'encephalopathie-hepatique',
      protocoles: [
        'AASLD/EASL — Hepatic encephalopathy in chronic liver disease: practice guideline (2014)',
        'EASL — Clinical practice guidelines on the management of hepatic encephalopathy (2022)',
      ],
      verifie:
        'Grades de West Haven ; glycémie d’abord ; recherche du facteur déclenchant (hémorragie, infection, constipation, sédatifs, troubles ioniques) ; lactulose pour 2 à 3 selles molles par jour ; rifaximine 550 mg 2 fois par jour après une récidive ; pas de restriction protidique (1,2–1,5 g/kg/j) ; scanner si signes focaux.',
    },
    {
      slug: 'hemorragie-digestive-basse',
      protocoles: [
        'BSG — Diagnosis and management of acute lower gastrointestinal bleeding (2019)',
        'ACG — Clinical guideline: management of patients with acute lower gastrointestinal bleeding (2023)',
      ],
      verifie:
        'Évaluation du retentissement, élimination d’une origine haute (urée, endoscopie si instabilité) ; transfusion restrictive (seuil 7 g/dL, 8 si cardiopathie) ; anticoagulants ; acide tranexamique sans bénéfice (HALT-IT) ; coloscopie ; causes locales (hémorroïdes, amibiase, schistosomiase, cancer).',
    },
    {
      slug: 'hemorragie-digestive-haute',
      protocoles: [
        'ESGE — Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (2021)',
        'Baveno VII — Renewing consensus in portal hypertension (2022)',
      ],
      verifie:
        'Score de Glasgow-Blatchford ; transfusion restrictive (7 g/dL, 8 si cardiopathie) ; IPP IV 80 mg puis 40 mg 2 fois par jour ; endoscopie dans les 24 h (12 h si varices) ; varices : vasoactif 2 à 5 jours, ceftriaxone 1 g/j jusqu’à 7 jours, ligature, prophylaxie secondaire par bêtabloquant et ligatures ; TIPS en cas d’échec.',
    },
    {
      slug: 'hepatite-b-chronique',
      protocoles: [
        'OMS — Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection (2024)',
        'EASL — Clinical practice guidelines on the management of hepatitis B virus infection (2017)',
      ],
      verifie:
        'Indications élargies de l’OMS 2024 (APRI > 0,5 ou élastométrie > 7 kPa, ADN > 2 000 UI/mL avec ALAT élevées, co-infections, antécédent familial, ALAT persistantement élevées sans ADN) et seuils d’ALAT (30 et 19 UI/L) ; ténofovir 300 mg/j ou entécavir 0,5 mg/j ; prévention de la transmission mère-enfant (ténofovir si ADN ≥ 200 000 UI/mL ou AgHBe+, ou toutes les porteuses sans ces tests) ; vaccin à la naissance ; surveillance du carcinome.',
    },
    {
      slug: 'hepatite-c-chronique',
      protocoles: [
        'OMS — Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C virus infection (2018)',
        'OMS — Updated recommendations on treatment of adolescents and children with chronic HCV infection (2022)',
      ],
      verifie:
        'Anti-VHC puis ARN (ou antigène core) ; fibrose par APRI ou FIB-4 ; traitement de tous les patients virémiques dès 3 ans ; sofosbuvir-velpatasvir 12 semaines ou sofosbuvir-daclatasvir 12 semaines (24 en cas de cirrhose) ; interactions (amiodarone) ; RVS12 ; surveillance du carcinome en cas de cirrhose.',
    },
    {
      slug: 'hepatites-virales-aigues-a-et-e',
      protocoles: [
        'OMS — Hepatitis E vaccine: WHO position paper (2015)',
        'OMS — Aide-mémoire hépatite A et hépatite E',
        'MSF — Guide clinique et thérapeutique : hépatites virales',
      ],
      verifie:
        'Transaminases > 10 N, IgM anti-VHA ou anti-VHE ; TP < 50 % = forme sévère ; hépatite E grave de la femme enceinte ; traitement symptomatique, pas d’alcool ni d’hépatotoxiques, paracétamol ≤ 2 g/j ; hospitalisation des formes sévères ; prévention (eau, hygiène, vaccins).',
      corrige:
        'L’examen rattaché s’intitulait « Sérologies hépatites C et D » alors qu’il sert ici aux IgM anti-VHA et anti-VHE : le libellé du référentiel est corrigé pour toutes les fiches (voir « Référentiel des examens »).',
    },
    {
      slug: 'infection-helicobacter-pylori',
      protocoles: [
        'Maastricht VI/Florence — Management of Helicobacter pylori infection: consensus report (2022)',
        'ACG — Clinical guideline: treatment of Helicobacter pylori infection (2024)',
      ],
      verifie:
        'Indications de recherche ; tests non invasifs, la sérologie ne contrôle pas l’éradication ; quadrithérapie bismuthée ou concomitante 14 jours, trithérapie abandonnée si résistance à la clarithromycine > 15 % ; contrôle ≥ 4 semaines après les antibiotiques et 2 semaines sans IPP ; échec : lévofloxacine ou antibiogramme.',
    },
    {
      slug: 'pancreatite-aigue',
      protocoles: [
        'ACG — Guidelines: management of acute pancreatitis (2024)',
        'IAP/APA — Evidence-based guidelines for the management of acute pancreatitis (2013)',
        'Essai WATERFALL — Aggressive or moderate fluid resuscitation in acute pancreatitis (2022)',
      ],
      verifie:
        'Diagnostic sur 2 critères sur 3 (douleur, lipase > 3 N, imagerie) ; gravité par les défaillances d’organes ; Ringer lactate modéré (10 mL/kg si hypovolémie puis 1,5 mL/kg/h) ; alimentation orale précoce ; pas d’antibiotique prophylactique ; cholécystectomie pendant la même hospitalisation ; scanner après 72 h.',
    },
    {
      slug: 'reflux-gastro-oesophagien',
      protocoles: [
        'ACG — Clinical guideline for the diagnosis and management of gastroesophageal reflux disease (2022)',
        'NICE — Gastro-oesophageal reflux disease and dyspepsia in adults (CG184)',
      ],
      verifie:
        'Diagnostic clinique et test thérapeutique ; signes d’alarme et endoscopie ; mesures hygiéno-diététiques ; IPP 4 à 8 semaines avant le petit-déjeuner puis dose minimale ; alginates et antiacides ; grossesse.',
    },
    {
      slug: 'schistosomiase-hepatosplenique',
      protocoles: [
        'OMS — Guideline on control and elimination of human schistosomiasis (2022)',
        'MSF — Guide clinique et thérapeutique : schistosomiases',
      ],
      verifie:
        'Fibrose périportale à l’échographie, œufs de S. mansoni, fonction hépatique conservée ; praziquantel 40 mg/kg en dose unique ; prévention des hémorragies variqueuses (propranolol, ligature) ; traitement de masse et assainissement.',
    },
    {
      slug: 'ulcere-gastroduodenal',
      protocoles: [
        'Maastricht VI/Florence — Management of Helicobacter pylori infection: consensus report (2022)',
        'NICE — Gastro-oesophageal reflux disease and dyspepsia in adults (CG184)',
        'ESGE — Nonvariceal upper gastrointestinal hemorrhage (2021)',
      ],
      verifie:
        'Clinique, signes d’alarme, endoscopie avec biopsies de l’ulcère gastrique ; IPP 4 à 8 semaines ; arrêt des AINS ; complications (hémorragie, perforation, sténose).',
      corrige:
        'L’éradication proposait encore une « trithérapie » : elle n’est plus recommandée là où la résistance à la clarithromycine dépasse 15 % (cas de l’Afrique centrale). La fiche renvoie désormais à la quadrithérapie de 14 jours, comme la fiche de l’infection à H. pylori, et précise d’arrêter l’IPP 2 semaines avant le test de contrôle.',
      corrections: [
        {
          principe: 'Éradication d’H. pylori',
          champ: 'details',
          remplacer: [
            '- Si H. pylori positif : trithérapie ou quadrithérapie 14 jours (fiche *Infection à Helicobacter pylori*)\n- Contrôle de l’éradication 4 semaines après la fin des antibiotiques',
            '- Si H. pylori positif : quadrithérapie 14 jours, bismuthée ou concomitante (fiche *Infection à Helicobacter pylori*) ; la trithérapie n’est plus recommandée là où la résistance à la clarithromycine dépasse 15 %\n- Contrôle de l’éradication au moins 4 semaines après la fin des antibiotiques et 2 semaines après l’arrêt de l’IPP',
          ],
        },
      ],
    },
    {
      slug: 'anemie-ferriprive',
      protocoles: [
        'BSG — Guidelines for the management of iron deficiency anaemia in adults (2021)',
        'OMS — Guideline on haemoglobin cutoffs to define anaemia in individuals and populations (2024)',
        'MSF — Guide clinique et thérapeutique : anémie',
      ],
      verifie:
        'Seuils d’Hb (13, 12, 11 g/dL) ; ferritine < 30 µg/L (< 100 si inflammation) ; fer oral 60–120 mg/j en une prise ou un jour sur deux, 3 mois après normalisation ; fer IV si échec ou intolérance ; causes (ankylostomes, ménorragies, saignement digestif, schistosomiase) et endoscopies selon l’âge ; transfusion seulement si mauvaise tolérance.',
    },
    {
      slug: 'anemie-megaloblastique',
      protocoles: [
        'BSH — Guidelines for the diagnosis and treatment of cobalamin and folate disorders (2014)',
        'NICE — Vitamin B12 deficiency in over 16s: diagnosis and management (NG239, 2024)',
      ],
      verifie:
        'Macrocytose, réticulocytes bas, polynucléaires hypersegmentés, dosages ; vitamine B12 1 000 µg IM en charge puis entretien à vie si malabsorption, voie orale possible ; kaliémie au début ; acide folique 5 mg/j 4 mois ; jamais d’acide folique seul sans éliminer une carence en B12.',
    },
    {
      slug: 'crise-vaso-occlusive-drepanocytaire-adulte',
      protocoles: [
        'NHLBI — Evidence-based management of sickle cell disease: expert panel report (2014)',
        'ASH — Guidelines for sickle cell disease: management of acute and chronic pain (2020)',
      ],
      verifie:
        'Antalgie dans l’heure (paracétamol, AINS si rein normal, morphine titrée IV) avec surveillance de la sédation ; hydratation sans surcharge ; oxygène si SpO2 < 95 % ; spirométrie incitative ; énoxaparine à l’hôpital ; recherche du syndrome thoracique, de l’infection et de l’anémie aiguë ; pas de transfusion pour une crise simple ; hydroxycarbamide.',
    },
    {
      slug: 'deficit-en-g6pd',
      protocoles: [
        'OMS — Guidelines for malaria (primaquine, tafénoquine et déficit en G6PD)',
        'OMS — Testing for G6PD deficiency for safe use of primaquine in radical cure of P. vivax and P. ovale malaria (2016)',
      ],
      verifie:
        'Agents déclenchants ; hémolyse 1 à 3 jours après ; dosage faussement normal en pleine hémolyse ; arrêt de l’agent, hydratation, transfusion si anémie sévère ; ictère néonatal (photothérapie) ; test avant la primaquine à dose radicale, faible dose unique de 0,25 mg/kg sans test.',
    },
    {
      slug: 'drepanocytose',
      protocoles: [
        'NHLBI — Evidence-based management of sickle cell disease: expert panel report (2014)',
        'Essai REACH — Hydroxyurea for children with sickle cell anemia in sub-Saharan Africa (NEJM 2019)',
        'BSH — Guideline on the management of acute chest syndrome in sickle cell disease (2015)',
      ],
      verifie:
        'Dépistage néonatal, éducation ; pénicilline V jusqu’à 5 ans, vaccinations, prévention du paludisme ; hydroxyurée dès 9 mois à 15–20 mg/kg/j titrée ; doppler transcrânien annuel de 2 à 16 ans (≥ 200 cm/s) ; syndrome thoracique (ceftriaxone + macrolide, transfusion ou échange) ; séquestration ; AVC (échange, HbS < 30 %) ; priapisme.',
    },
    {
      slug: 'hemophilie',
      protocoles: [
        'WFH — Guidelines for the management of hemophilia, 3rd edition (2020)',
      ],
      verifie:
        'TCA allongé isolé, dosage des facteurs VIII et IX ; concentré de facteur le plus tôt possible (hémorragie grave : VIII 50 UI/kg, IX 80–100 UI/kg), cryoprécipité ou plasma à défaut ; acide tranexamique sauf hématurie ; desmopressine 0,3 µg/kg dans l’hémophilie A mineure ; pas d’IM ni d’AINS ; facteur à 100 % avant l’imagerie d’une hémorragie intracrânienne.',
      a_arbitrer:
        'Dose de facteur IX dans l’hémarthrose : 30–50 UI/kg dans la fiche ; la WFH 2020 vise un pic de 40–60 UI/dL sans contrainte de ressources (soit environ 40–60 UI/kg de facteur IX plasmatique) et des niveaux plus bas en cas de contrainte. À fixer selon les concentrés disponibles.',
    },
    {
      slug: 'leucemie-myeloide-chronique',
      protocoles: [
        'ELN — Recommendations for treating chronic myeloid leukemia (2020)',
        'ESMO — Chronic myeloid leukaemia: clinical practice guidelines (2017)',
      ],
      verifie:
        'Hyperleucocytose avec myélémie, splénomégalie, confirmation par BCR-ABL ; imatinib 400 mg/j (600–800 mg en phase avancée), observance et suivi moléculaire ; hydroxycarbamide et allopurinol en attendant ; phase blastique traitée comme une leucémie aiguë.',
    },
    {
      slug: 'leucemies-aigues-adulte',
      protocoles: [
        'ELN — Diagnosis and management of AML in adults: recommendations (2022)',
        'ESMO — Acute lymphoblastic leukaemia / Acute myeloid leukaemia in adult patients',
      ],
      verifie:
        'Insuffisance médullaire, blastes, myélogramme ; urgences : neutropénie fébrile (antibiotiques dans l’heure), plaquettes si < 10 G/L ou saignement, prévention du syndrome de lyse, hydroxycarbamide si hyperleucocytose sans transfusion de culots ; leucémie promyélocytaire : ATRA en urgence ; chimiothérapie en centre spécialisé.',
    },
    {
      slug: 'lymphomes-non-hodgkiniens-adulte',
      protocoles: [
        'ESMO — Diffuse large B-cell lymphoma: clinical practice guidelines',
        'NCCN — B-cell lymphomas',
        'OMS — Liste modèle des médicaments essentiels (R-CHOP)',
      ],
      verifie:
        'Biopsie-exérèse obligatoire et recherche de tuberculose (Xpert) ; bilan d’extension, VIH, hépatites ; R-CHOP 21 × 6 avec doses (rituximab 375 mg/m², cyclophosphamide 750 mg/m², doxorubicine 50 mg/m², vincristine 1,4 mg/m² max 2 mg, prednisone 100 mg J1–J5) ; ARV concomitants, cotrimoxazole ; ténofovir avant rituximab si AgHBs+.',
    },
    {
      slug: 'myelome-multiple',
      protocoles: [
        'IMWG — Updated criteria for the diagnosis of multiple myeloma (2014)',
        'EHA-ESMO — Clinical practice guidelines for multiple myeloma (2021)',
      ],
      verifie:
        'Critères CRAB, plasmocytes ≥ 10 %, électrophorèse et immunofixation ; bortézomib-lénalidomide-dexaméthasone en centre spécialisé, autogreffe si possible ; alternatives selon l’accès ; acide zolédronique 4 mg toutes les 4 semaines adapté au rein ; hypercalcémie ; compression médullaire (dexaméthasone, radiothérapie).',
    },
    {
      slug: 'neutropenie-febrile',
      protocoles: [
        'IDSA — Clinical practice guideline for the use of antimicrobial agents in neutropenic patients with cancer (2010)',
        'ESMO — Management of febrile neutropaenia (2016)',
        'ASCO/IDSA — Outpatient management of fever and neutropenia (2018)',
      ],
      verifie:
        'Définition ; hémocultures sans retarder les antibiotiques ; céfépime 2 g/8 h, pipéracilline-tazobactam 4,5 g/6 h ou ceftazidime ; méropénem si choc ou résistance ; aminoside et vancomycine selon la situation ; MASCC ≥ 21 : amoxicilline-acide clavulanique + ciprofloxacine per os ; antifongique si fièvre persistante après 4 à 7 jours.',
    },
    {
      slug: 'purpura-thrombopenique-immunologique',
      protocoles: [
        'ASH — Guidelines for immune thrombocytopenia (2019)',
        'International consensus report on the investigation and management of primary immune thrombocytopenia (2019)',
      ],
      verifie:
        'Thrombopénie isolée, frottis, causes secondaires (VIH, VHC, paludisme, médicaments) ; abstention chez l’enfant sans saignement ; adulte : traitement si saignement ou plaquettes < 20–30 G/L ; prednisolone 1 mg/kg/j courte ou dexaméthasone 40 mg/j 4 jours ; IgIV 1 g/kg ; transfusion de plaquettes avec IgIV si hémorragie menaçante.',
    },
    {
      slug: 'syndrome-thoracique-aigu-drepanocytaire',
      protocoles: [
        'BSH — Guideline on the management of acute chest syndrome in sickle cell disease (2015)',
        'NHLBI — Evidence-based management of sickle cell disease: expert panel report (2014)',
      ],
      verifie:
        'Définition (nouvel infiltrat + signe respiratoire ou fièvre) ; oxygène pour SpO2 ≥ 95 %, spirométrie incitative ; ceftriaxone + azithromycine ; antalgie titrée sans hypoventilation ; transfusion simple si Hb < 9 g/dL sans dépasser 10–11 g/dL, échange si forme grave ; hydroxycarbamide en prévention.',
    },
    {
      slug: 'transfusion-sanguine-et-reactions-transfusionnelles',
      protocoles: [
        'MSF — Guide clinique et thérapeutique : anémie (tableau des seuils transfusionnels)',
        'OMS — The clinical use of blood (manuel)',
        'BSH — Guideline on the administration of blood components (2017)',
      ],
      verifie:
        'Sécurité (groupage, produit testé, contrôle ultime au lit, surveillance) ; conduite devant toute réaction (arrêt, vérification, prélèvements) ; hémolyse ABO, anaphylaxie (adrénaline 0,5 mg IM), réaction fébrile, surcharge (débit 1 mL/kg/h chez le sujet fragile), contamination bactérienne ; hémovigilance.',
      corrige:
        'Le seuil du paludisme grave (Hb < 5 g/dL) était celui de l’enfant ; MSF retient chez l’adulte Hb < 7 g/dL en cas de paludisme grave, et chez l’enfant Hb < 4 g/dL, ou 4 à 6 g/dL avec signes de décompensation. Ajout des seuils de la femme enceinte.',
      corrections: [
        {
          champ: 'diagnostic',
          remplacer: [
            '- Paludisme grave avec Hb < 5 g/dL (ou < 7 g/dL avec détresse)',
            '- Paludisme grave : adulte Hb < 7 g/dL ; enfant Hb < 4 g/dL, ou 4 à 6 g/dL avec signes de décompensation\n- Femme enceinte : Hb ≤ 5 g/dL avant 36 SA (≤ 6 g/dL ensuite), ou jusqu’à 7 g/dL (8 g/dL après 36 SA) avec signes de décompensation, drépanocytose, paludisme grave ou infection sévère',
          ],
        },
      ],
    },
  ],
  examens: [
    {
      slug: 'serologies-hepatites',
      motif:
        'L’examen est cité par une vingtaine de fiches pour les hépatites A, B, C, D et E (IgM anti-VHA et anti-VHE dans les hépatites aiguës) ; son libellé « hépatites C et D » était trompeur.',
      champ: 'nom',
      ancienne: 'Sérologies hépatites C et D',
      valeur: 'Sérologies des hépatites virales (A, B, C, D, E)',
    },
    {
      slug: 'serologies-hepatites',
      motif: 'Description alignée sur l’usage réel de l’examen.',
      champ: 'description',
      ancienne: 'Co-infections à rechercher chez le porteur de l’AgHBs.',
      valeur:
        'Selon le virus recherché : IgM anti-VHA et anti-VHE (hépatite aiguë), anti-VHC (à confirmer par l’ARN), anti-VHD chez le porteur de l’AgHBs ; l’hépatite B se dépiste par l’AgHBs.',
    },
    {
      slug: 'serologies-hepatites',
      motif: 'Valeurs normales de tous les marqueurs couverts.',
      champ: 'valeurs_normales',
      ancienne: '- Anti-VHC négatif ; anti-VHD négatif',
      valeur: '- IgM anti-VHA et anti-VHE négatives\n- Anti-VHC négatif ; anti-VHD négatif\n- AgHBs négatif',
    },
  ],
};
