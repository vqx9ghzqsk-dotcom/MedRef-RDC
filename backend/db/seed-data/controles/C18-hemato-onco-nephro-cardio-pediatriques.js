'use strict';

/**
 * Contrôle de conformité — lot C18 : hématologie-oncologie, néphrologie et cardiologie pédiatriques
 * (33 fiches). Hémophilie : recommandations WFH (2020) ; Kawasaki : AHA (2017) ; ivermectine :
 * précaution loase (guide MSF).
 */

const POCKET = 'OMS — Pocket book of hospital care for children (2e édition, 2013)';
const NHLBI = 'NHLBI — Evidence-based management of sickle cell disease: expert panel report (2014)';
const ASH_SCD = 'ASH — Guidelines for sickle cell disease (2019–2021 : douleur, AVC, transfusion, rein)';
const GFAOP = 'GFAOP — Protocoles adaptés d’oncologie pédiatrique en Afrique';
const SIOP = 'SIOP-PODC — Adapted treatment guidelines for low- and middle-income settings';
const KDIGO = 'KDIGO — Clinical practice guidelines (AKI 2012, CKD 2024, glomerular diseases 2021)';
const AHA_RAA = 'AHA — Revision of the Jones criteria for acute rheumatic fever (2015)';
const ERC = 'ERC — Paediatric life support guidelines (2021)';

module.exports = {
  lot: 'C18',
  date: '2026-10-16',
  titre: 'Hématologie-oncologie, néphrologie et cardiologie pédiatriques',
  fiches: [
    {
      slug: 'anemies-hemolytiques-enfant',
      protocoles: [POCKET, 'BSH — Guideline on the diagnosis and management of hereditary spherocytosis (2011)'],
      verifie:
        'Causes corpusculaires et extracorpusculaires, réticulocytes, LDH, Coombs, frottis ; transfusion selon les seuils OMS ; acide folique ; traitement de la cause (artésunate, arrêt du déclencheur, prednisolone de l’AHAI, splénectomie de la sphérocytose sévère après 6 ans, pas d’antibiotiques dans le SHU à E. coli).',
    },
    {
      slug: 'avc-enfant-drepanocytaire',
      protocoles: [ASH_SCD, 'STOP — Adams et al., N Engl J Med 1998 ; TWiTCH — Ware et al., Lancet 2016'],
      verifie:
        'Clinique, imagerie ; échange transfusionnel (HbS < 30 %) ou transfusion simple ; pas de thrombolyse ; prévention secondaire par transfusions chroniques ou hydroxycarbamide ; Doppler transcrânien annuel de 2 à 16 ans (≥ 200 cm/s) ; rééducation.',
    },
    {
      slug: 'crise-vaso-occlusive-enfant-drepanocytaire',
      protocoles: [NHLBI, ASH_SCD],
      verifie:
        'Dactylite, signes de gravité (fièvre, séquestration, syndrome thoracique, AVC) ; paracétamol + ibuprofène, morphine orale ou IV titrée ; hydratation sans surcharge, spirométrie incitative, oxygène si SpO2 < 95 % ; ceftriaxone si fièvre ; hydroxycarbamide dès 9 mois.',
    },
    {
      slug: 'deficit-en-g6pd-enfant',
      protocoles: ['OMS — Guide on G6PD testing to support Plasmodium vivax radical cure (2016)', 'Luzzatto et al. — G6PD deficiency, Blood 2020'],
      verifie:
        'Crise hémolytique 24–72 h après un déclencheur, test G6PD à distance de la crise ; arrêt du déclencheur, hydratation, transfusion selon la tolérance ; ictère néonatal ; liste des médicaments à éviter, test avant primaquine.',
    },
    {
      slug: 'hemophilie-enfant',
      protocoles: ['WFH — Guidelines for the management of hemophilia (3e édition, 2020)'],
      verifie:
        'TCA allongé avec TP normal, dosage des facteurs ; facteur VIII 20–25 UI/kg (hémarthrose) à 50 UI/kg (saignement grave), plasma ou cryoprécipité à défaut ; RICE, acide tranexamique des saignements muqueux, desmopressine de l’hémophilie A mineure ; pas d’IM ni d’AINS ; facteur avant le scanner en cas de traumatisme crânien.',
      corrige:
        'Hémophilie B : la dose de facteur IX de l’hémarthrose (30–40 UI/kg) était inférieure à celle de la WFH : objectif de 40–60 UI/dL, soit 40–60 UI/kg de facteur IX plasmatique (1 UI/kg élève le taux d’environ 1 UI/dL), et 60–80 UI/kg pour un saignement grave ; doses un peu plus élevées avec le facteur IX recombinant.',
      corrections: [
        {
          principe: 'Saignement aigu',
          champ: 'details',
          remplacer: [
            'hémophilie B, **facteur IX** 30–40 UI/kg à 80–100 UI/kg',
            'hémophilie B, **facteur IX** 40–60 UI/kg (hémarthrose) à 60–80 UI/kg (saignement grave), un peu plus avec le facteur IX recombinant (WFH 2020)',
          ],
        },
      ],
    },
    {
      slug: 'infections-enfant-drepanocytaire',
      protocoles: [NHLBI, 'OMS — Pneumococcal conjugate vaccines in infants and children under 5 years: position paper (2019)'],
      verifie:
        'Toute fièvre ≥ 38,5 °C est une urgence ; ceftriaxone 50–100 mg/kg après hémoculture, hospitalisation selon l’âge et la gravité ; ostéomyélite à Salmonella ; pénicilline V de 2 mois à 5 ans (125 mg puis 250 mg 2 fois par jour), vaccins conjugués et polysaccharidique, moustiquaire.',
    },
    {
      slug: 'leucemie-aigue-lymphoblastique-enfant',
      protocoles: ['OMS — Global Initiative for Childhood Cancer : CureAll framework (2021)', GFAOP],
      verifie:
        'Signes d’appel, NFS et frottis, myélogramme ; hyperhydratation et allopurinol, transfusions, antibiotiques immédiats de la neutropénie fébrile, pas de corticoïdes avant le diagnostic ; chimiothérapie en centre (induction, prophylaxie méningée, entretien 2–2,5 ans) ; cotrimoxazole, soins de support.',
    },
    {
      slug: 'lymphome-de-burkitt',
      protocoles: [GFAOP, 'OMS — Global Initiative for Childhood Cancer : CureAll framework (2021)'],
      verifie:
        'Forme maxillo-faciale ou abdominale, cytoponction ou biopsie, bilan de lyse ; hyperhydratation et allopurinol ; protocole à base de cyclophosphamide (réseau GFAOP) sans retard ; soins de support et lutte contre l’abandon.',
    },
    {
      slug: 'nephroblastome',
      protocoles: [SIOP, 'SIOP-RTSG — UMBRELLA protocol (2016)'],
      verifie:
        'Masse de flanc, palpation douce, échographie et radiographie thoracique, catécholamines urinaires ; chimiothérapie préopératoire vincristine + dactinomycine 4 semaines (doxorubicine si métastases) ; néphrectomie élargie ; traitement postopératoire selon le stade.',
    },
    {
      slug: 'neuroblastome',
      protocoles: ['SIOPEN — Groupes de risque et traitements du neuroblastome', SIOP],
      verifie:
        'Masse franchissant la ligne médiane avec calcifications, catécholamines, biopsie ; urgences (compression médullaire : dexaméthasone et chimiothérapie) ; traitement selon le groupe de risque, régression possible chez le nourrisson ; soins de support.',
    },
    {
      slug: 'purpura-thrombopenique-immunologique-enfant',
      protocoles: ['ASH — Guidelines for immune thrombocytopenia (2019)', 'International consensus report on ITP (2019)'],
      verifie:
        'Thrombopénie isolée chez un enfant en bon état, frottis ; surveillance sans traitement si saignement cutané seul ; prednisolone 2–4 mg/kg/j 5–7 jours ou IgIV 0,8–1 g/kg si saignement muqueux ; pas d’aspirine, d’AINS ni d’IM ; hémorragie grave : plaquettes, IgIV et méthylprednisolone.',
    },
    {
      slug: 'retinoblastome',
      protocoles: ['OMS — Global Initiative for Childhood Cancer : rétinoblastome (cancer traceur)', 'AAP — Red reflex examination in neonates, infants and children (2008)'],
      verifie:
        'Leucocorie et strabisme récent, test du reflet rouge à chaque visite ; fond d’œil et échographie ; énucléation des formes unilatérales avancées, chimiothérapie (carboplatine, étoposide, vincristine), traitements focaux ; conseil génétique.',
    },
    {
      slug: 'sequestration-splenique-aigue',
      protocoles: [NHLBI, ASH_SCD],
      verifie:
        'Chute de l’Hb ≥ 2 g/dL avec grosse rate ; transfusion prudente de 5–10 mL/kg (objectif Hb ≤ 8 g/dL), remplissage si choc ; éducation des parents à la palpation de la rate ; splénectomie après 2 épisodes ou programme transfusionnel.',
    },
    {
      slug: 'thalassemies',
      protocoles: ['TIF — Guidelines for the management of transfusion-dependent β-thalassaemia (4e édition, 2021)'],
      verifie:
        'Anémie microcytaire avec ferritine normale, électrophorèse ; pas de fer sans carence ; transfusions toutes les 3–4 semaines (Hb pré-transfusionnelle ≥ 9–10 g/dL), chélation au-delà de 1 000 µg/L de ferritine (déférasirox, déféroxamine) ; acide folique.',
    },
    {
      slug: 'transfusion-chez-l-enfant',
      protocoles: [POCKET, 'TRACT — Maitland et al., N Engl J Med 2019'],
      verifie:
        'Indications (Hb < 4 g/dL, ou 4–6 g/dL avec signes de gravité, hémorragie, séquestration, AVC) ; culot 10–15 mL/kg ou sang total 20 mL/kg en 3–4 h, 10 mL/kg lentement avec furosémide chez le malnutri ; sécurité et surveillance ; fer et acide folique après.',
    },
    {
      slug: 'glomerulonephrite-aigue-post-streptococcique',
      protocoles: [KDIGO, POCKET],
      verifie:
        'Syndrome néphritique après angine ou impétigo, C3 bas, ASLO ; restriction hydrosodée, furosémide 1–2 mg/kg, nifédipine ou amlodipine, hydralazine IV en urgence ; benzathine pénicilline ; dialyse si nécessaire.',
    },
    {
      slug: 'infection-urinaire-enfant',
      protocoles: ['AAP — Urinary tract infection in febrile infants and children 2–24 months (2011, réaffirmé 2016)', 'NICE — Urinary tract infection in under 16s (NG224, 2022)'],
      verifie:
        'Bandelette puis ECBU sur prélèvement propre ; ceftriaxone 50–75 mg/kg/j (moins de 3 mois ou état grave) ou céfixime 8 mg/kg/j, 7–10 jours ; cystite 3–5 jours ; échographie après une première pyélonéphrite ; prévention des récidives.',
    },
    {
      slug: 'insuffisance-renale-aigue-enfant',
      protocoles: [KDIGO, 'ISN — 0by25 : prise en charge de l’IRA dans les pays à ressources limitées'],
      verifie:
        'Définition KDIGO ; correction de l’hypovolémie (10–20 mL/kg) puis restriction (400 mL/m²/j + diurèse) ; furosémide ; hyperkaliémie (gluconate de calcium, salbutamol, glucose-insuline, résine) ; dialyse péritonéale.',
    },
    {
      slug: 'maladie-renale-chronique-enfant',
      protocoles: [KDIGO, 'KDIGO — Blood pressure in CKD (2021)'],
      verifie:
        'DFG par la formule de Schwartz ; néphroprotection (PA < 90e percentile, IEC si protéinurie) ; anémie (fer, érythropoïétine), acidose, phosphore et calcium (carbonate de calcium, calcitriol), nutrition ; préparation du stade terminal.',
    },
    {
      slug: 'nephropathie-drepanocytaire-enfant',
      protocoles: ['ASH — Guidelines for sickle cell disease: management of renal complications (2021)', NHLBI],
      verifie:
        'Hyposthénurie, hématurie, microalbuminurie ; dépistage annuel de l’albuminurie ; hydratation, hydroxyurée, pas d’AINS ; IEC si albuminurie persistante sur 2 contrôles.',
    },
    {
      slug: 'syndrome-hemolytique-et-uremique',
      protocoles: [KDIGO, 'OMS — Guidelines for the control of shigellosis (2005)'],
      verifie:
        'Triade avec schizocytes et Coombs négatif, après diarrhée sanglante ; réhydratation prudente, transfusion si Hb < 6–7 g/dL, plaquettes seulement si saignement ; HTA, hyperkaliémie, convulsions ; dialyse péritonéale ; pas d’antidiarrhéiques, antibiotiques pour la shigellose mais pas pour E. coli entérohémorragique.',
    },
    {
      slug: 'syndrome-nephrotique-enfant',
      protocoles: ['KDIGO — Clinical practice guideline for glomerular diseases (2021)', 'IPNA — Clinical practice recommendations for steroid-sensitive nephrotic syndrome (2022)'],
      verifie:
        'Définition, formes pure et impure, bilan étiologique (VIH, hépatite B, P. malariae) ; prednisolone 60 mg/m²/j 4 semaines puis 40 mg/m² un jour sur deux 4 semaines ; corticorésistance : biopsie, IEC, anticalcineurines ; régime peu salé, diurétiques prudents, albumine si œdèmes massifs ; infections, vaccins, tuberculose.',
      corrige:
        'Ivermectine du déparasitage avant corticoïdes : ajout du poids minimal (15 kg) et de la précaution liée à la loase, endémique dans une grande partie de la RDC.',
      corrections: [
        {
          principe: 'Traitement symptomatique',
          champ: 'details',
          remplacer: [
            '- Déparasitage (**albendazole** ou **ivermectine**) avant les corticoïdes',
            '- Déparasitage (**albendazole** ou **ivermectine**) avant les corticoïdes ; ivermectine seulement au-delà de 15 kg et, en zone de loase, après recherche d’une microfilarémie élevée de *Loa loa* (risque d’encéphalopathie)',
          ],
        },
      ],
    },
    {
      slug: 'uropathies-malformatives',
      protocoles: ['EAU/ESPU — Guidelines on paediatric urology (2024)'],
      verifie:
        'Échographie anténatale et postnatale, cystographie à distance d’une infection ; valves : drainage vésical immédiat, levée d’obstacle, résection endoscopique ; antibioprophylaxie (cotrimoxazole 2 mg/kg/j de triméthoprime, nitrofurantoïne 1–2 mg/kg/j) ; chirurgie selon la malformation ; suivi à vie.',
    },
    {
      slug: 'cardiopathies-congenitales',
      protocoles: ['AHA — Pulse oximetry screening for critical congenital heart disease (2011)', 'PASCAR — Recommandations sur les cardiopathies congénitales en Afrique'],
      verifie:
        'Signes évocateurs, oxymétrie pré- et post-ductale, échocardiographie ; furosémide, spironolactone, IEC, enrichissement calorique ; malaise anoxique (position genoux-poitrine, oxygène, morphine, propranolol) ; orientation chirurgicale précoce ; prévention (rubéole, diabète).',
    },
    {
      slug: 'endocardite-infectieuse-enfant',
      protocoles: ['ESC — Guidelines for the management of endocarditis (2023)', 'AHA — Infective endocarditis in childhood (2015)'],
      verifie:
        '3 hémocultures avant antibiotiques, échocardiographie ; ampicilline + cloxacilline + gentamicine, adaptation au germe, 4 à 6 semaines IV ; chirurgie si destruction, abcès, embolies ; amoxicilline 50 mg/kg avant les soins dentaires chez l’enfant à haut risque.',
    },
    {
      slug: 'hypertension-arterielle-enfant',
      protocoles: ['AAP — Clinical practice guideline for high blood pressure in children and adolescents (2017)', 'ESH — Guidelines for the management of high blood pressure in children (2016)'],
      verifie:
        'Mesure avec brassard adapté, percentiles, ≥ 130/80 chez l’adolescent ; causes secondaires du jeune enfant ; urgence : baisse ≤ 25 % en 8 h (nicardipine, labétalol, nifédipine à défaut) ; amlodipine ou IEC au long cours ; mesures hygiéno-diététiques.',
    },
    {
      slug: 'insuffisance-cardiaque-enfant',
      protocoles: ['ISHLT — Guidelines for the management of pediatric heart failure (2014)', POCKET],
      verifie:
        'Polypnée, tachycardie, hépatomégalie, cardiomégalie ; furosémide 1 mg/kg, oxygène ; IEC et spironolactone, digoxine si tachyarythmie ; anémie : transfusion lente de 10 mL/kg avec furosémide ; cardite, thiamine, chirurgie.',
    },
    {
      slug: 'maladie-de-kawasaki',
      protocoles: ['AHA — Diagnosis, treatment and long-term management of Kawasaki disease (2017)'],
      verifie:
        'Critères (fièvre ≥ 5 jours + 4 des 5 signes), formes incomplètes du nourrisson ; IgIV 2 g/kg en 10–12 h avant J10 ; aspirine à dose modérée jusqu’à 48–72 h d’apyrexie ; corticoïdes des formes à haut risque ; échocardiographie au diagnostic, à 2 et 6 semaines ; vaccins vivants différés de 11 mois.',
      corrige:
        'Durée de l’aspirine à faible dose alignée sur l’AHA (2017) : 4 à 6 semaines, jusqu’à l’absence d’anomalie coronaire, et non 6 à 8 semaines.',
      corrections: [
        {
          principe: 'Traitement de la phase aiguë',
          champ: 'details',
          remplacer: [
            'puis **3–5 mg/kg/j** une fois par jour pendant 6 à 8 semaines (prolongée si anévrismes)',
            'puis **3–5 mg/kg/j** une fois par jour pendant 4 à 6 semaines, jusqu’à l’absence d’anomalie coronaire (prolongée si anévrismes)',
          ],
        },
      ],
    },
    {
      slug: 'myocardite-enfant',
      protocoles: ['AHA — Diagnosis and management of myocarditis in children (2021)'],
      verifie:
        'Tachycardie disproportionnée, galop, choc cardiogénique ; ECG, troponine, échocardiographie ; repos, oxygène, furosémide, IEC une fois stable, remplissage prudent (5–10 mL/kg) ; troubles du rythme ; traitement de la cause (diphtérie, VIH) ; pas d’AINS en phase aiguë.',
    },
    {
      slug: 'pericardite-enfant',
      protocoles: ['ESC — Guidelines for the diagnosis and management of pericardial diseases (2015)', 'OMS — Consolidated guidelines on tuberculosis, module 5 : children (2022)'],
      verifie:
        'Clinique, tamponnade, échocardiographie, ponction ; péricardiocentèse urgente de la tamponnade ; purulente : drainage + cloxacilline + ceftriaxone ; tuberculeuse : antituberculeux et corticoïdes selon le protocole ; virale : ibuprofène.',
    },
    {
      slug: 'rhumatisme-articulaire-aigu-enfant',
      protocoles: [AHA_RAA, 'OMS — Guideline for the prevention, diagnosis and treatment of rheumatic fever and rheumatic heart disease (2024)'],
      verifie:
        'Critères de Jones 2015 (population à haut risque) ; benzathine pénicilline (600 000 UI < 30 kg, 1,2 MUI au-delà) ; aspirine 50–100 mg/kg/j, prednisolone des cardites sévères ; chorée ; prophylaxie secondaire toutes les 3–4 semaines, durée selon la cardite (jusqu’à 21 ou 40 ans).',
    },
    {
      slug: 'tetralogie-de-fallot',
      protocoles: ['AHA — Management of tetralogy of Fallot (déclarations scientifiques)', 'PASCAR — Recommandations sur les cardiopathies congénitales en Afrique'],
      verifie:
        'Cyanose, souffle, accroupissement, malaise hypoxique ; malaise : genoux-poitrine, oxygène, morphine 0,1 mg/kg, NaCl 10 mL/kg, propranolol IV, pas d’adrénaline ; propranolol oral en prévention, fer, hydratation ; correction chirurgicale dans la première année.',
    },
    {
      slug: 'troubles-du-rythme-enfant',
      protocoles: [ERC, 'AHA — Pediatric advanced life support (2020)'],
      verifie:
        'Tachycardie supraventriculaire (manœuvres vagales, adénosine 0,1 puis 0,2 mg/kg), cardioversion synchrone 0,5–1 puis 2 J/kg si instable, amiodarone 5 mg/kg de la TV stable ; bradycardie : oxygène et ventilation, massage et adrénaline si FC < 60, atropine ; correction ionique.',
    },
  ],
};
