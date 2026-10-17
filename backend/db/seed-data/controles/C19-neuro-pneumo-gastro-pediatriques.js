'use strict';

/**
 * Contrôle de conformité — lot C19 : neurologie, pneumologie et gastro-entérologie pédiatriques
 * (35 fiches). Méningite : recommandations OMS d'avril 2025 ; onchocercose : stratégie de traitement
 * en zone de coendémie de la loase (OMS).
 */

const POCKET = 'OMS — Pocket book of hospital care for children (2e édition, 2013)';
const PCIME = 'OMS/UNICEF — Prise en charge intégrée des maladies de l’enfant (PCIME, 2019)';
const MHGAP = 'OMS — mhGAP Intervention Guide (version 2.0, 2016)';
const GINA = 'GINA — Global strategy for asthma management and prevention (2024)';
const ESPGHAN = 'ESPGHAN/NASPGHAN — Recommandations de gastro-entérologie pédiatrique';
const OMS_DIARRHEE = 'OMS — The treatment of diarrhoea: a manual for physicians and other senior health workers (2005)';

module.exports = {
  lot: 'C19',
  date: '2026-10-16',
  titre: 'Neurologie, pneumologie et gastro-entérologie pédiatriques',
  fiches: [
    {
      slug: 'cephalees-enfant',
      protocoles: ['AAN/AHS — Acute and preventive treatment of migraine in children and adolescents (2019)', 'ICHD-3 — Classification internationale des céphalées (2018)'],
      verifie:
        'Signes d’alarme (céphalées matinales, vomissements en jet, œdème papillaire, examen anormal, âge < 3 ans) et imagerie ; fièvre : TDR et recherche de méningite ; ibuprofène 10 mg/kg dès le début de la crise, éviter l’abus d’antalgiques ; prophylaxie (propranolol, amitriptyline, cyproheptadine) si crises fréquentes ; hygiène de vie.',
    },
    {
      slug: 'convulsions-febriles',
      protocoles: ['AAP — Febrile seizures: guideline for the neurodiagnostic evaluation (2011)', POCKET],
      verifie:
        'Formes simple et complexe ; éliminer méningite (PL selon l’âge et le contexte), paludisme grave, hypoglycémie ; diazépam 0,5 mg/kg intrarectal ou midazolam buccal 0,3 mg/kg si crise > 5 min, phénobarbital si persistance ; pas de traitement de fond dans les formes simples ; conseils.',
    },
    {
      slug: 'deficience-intellectuelle',
      protocoles: [MHGAP, 'OMS — Caregiver skills training for families of children with developmental delays (2022)'],
      verifie:
        'Repérage, causes traitables (TSH) et comorbidités (surdité, vision, épilepsie) ; annonce et lutte contre les croyances ; stimulation précoce, formation des parents, scolarisation inclusive ; rispéridone à faible dose seulement pour l’agressivité sévère, sur avis spécialisé ; protection.',
    },
    {
      slug: 'dystrophie-musculaire-de-duchenne',
      protocoles: ['DMD Care Considerations Working Group — Diagnosis and management of Duchenne muscular dystrophy (Lancet Neurol 2018)'],
      verifie:
        'Signe de Gowers, CPK très élevées, génétique ; prednisolone 0,75 mg/kg/j ou deflazacort 0,9 mg/kg/j dès le plateau moteur, vitamine D et calcium, carte de corticothérapie ; kinésithérapie, IEC cardiaque, ventilation non invasive, vaccins ; conseil génétique.',
    },
    {
      slug: 'epilepsie-enfant',
      protocoles: [MHGAP, 'ILAE — Classification des épilepsies (2017)', 'OMS — Guidelines for the treatment of onchocerciasis (2016) : zones de coendémie de la loase'],
      verifie:
        'Diagnostic clinique (vidéo des témoins), EEG ; phénobarbital 3–5 mg/kg/j (mhGAP), carbamazépine (focales), valproate (généralisées, pas chez la fille pubère), monothérapie, arrêt après 2 ans sans crise ; neurocysticercose ; information, prévention des accidents, diazépam rectal.',
      corrige:
        'Ivermectine de l’épilepsie associée à l’onchocercose : ajout de la précaution liée à la loase, coendémique dans une grande partie de la RDC (traitement selon la stratégie du programme national, recherche d’une microfilarémie élevée de Loa loa avant traitement individuel).',
      corrections: [
        {
          principe: 'Causes spécifiques',
          champ: 'details',
          remplacer: [
            '- Zones d’onchocercose : **ivermectine** (traitement de masse)',
            '- Zones d’onchocercose : **ivermectine** (traitement de masse selon le programme national) ; en zone de coendémie de la loase, rechercher une microfilarémie élevée de *Loa loa* avant tout traitement individuel (risque d’encéphalopathie)',
          ],
        },
      ],
    },
    {
      slug: 'hydrocephalie-enfant',
      protocoles: ['Congress of Neurological Surgeons — Pediatric hydrocephalus guidelines (2014, mise à jour 2020)', 'CURE Children’s Hospital — Ventriculocisternostomie endoscopique avec coagulation des plexus choroïdes'],
      verifie:
        'Macrocéphalie évolutive, fontanelle bombée, regard en coucher de soleil, HTIC ; échographie transfontanellaire, scanner, PL contre-indiquée si obstructive ; dérivation ventriculo-péritonéale ou ventriculocisternostomie endoscopique ; acétazolamide en attente ; dysfonction et infection de valve.',
    },
    {
      slug: 'konzo',
      protocoles: ['OMS — Définition de cas du konzo (1996)', 'Banea et al. — Méthode de mouillage de la farine de manioc (RDC)'],
      verifie:
        'Critères OMS (paraparésie spastique symétrique, brutale, non progressive, consommation de manioc amer) ; diagnostic différentiel des paralysies de l’enfant ; rééducation et aides, baclofène si spasticité gênante ; méthode de mouillage, rouissage, diversification ; notification.',
    },
    {
      slug: 'meningo-encephalite-enfant',
      protocoles: ['OMS — Guidelines on meningitis diagnosis, treatment and care (avril 2025)', POCKET],
      verifie:
        'Clinique (Blantyre, signes focaux), TDR, glycémie, PL sauf contre-indication (Xpert, antigène cryptococcique) ; ceftriaxone 100 mg/kg/j, artésunate si TDR positif, aciclovir 20 mg/kg toutes les 8 h (10 mg/kg après 12 ans) 14–21 jours ; convulsions ; apports hydriques normaux ; suivi des séquelles.',
      corrige:
        'Dexaméthasone alignée sur les recommandations OMS d’avril 2025 et sur la fiche « Méningite bactérienne de l’enfant » : 0,15 mg/kg toutes les 6 h pendant 4 jours avec la 1re dose d’antibiotique quand une méningite bactérienne est probable, ni en cas de paludisme, ni devant une méningite à méningocoque suspectée en contexte d’épidémie.',
      corrections: [
        {
          principe: 'Traitement probabiliste',
          champ: 'details',
          remplacer: [
            '- **Dexaméthasone** 0,15 mg/kg toutes les 6 h pendant 2–4 jours selon le contexte (méningite bactérienne, pas en cas de paludisme)',
            '- **Dexaméthasone** 0,15 mg/kg toutes les 6 h pendant 4 jours, débutée avec la 1re dose d’antibiotique si méningite bactérienne probable (OMS 2025) ; pas en cas de paludisme, ni devant une méningite à méningocoque suspectée en contexte d’épidémie',
          ],
        },
      ],
    },
    {
      slug: 'paralysie-cerebrale',
      protocoles: ['NICE — Cerebral palsy in under 25s: assessment and management (NG62, 2017)', 'OMS — Réadaptation à base communautaire'],
      verifie:
        'Retard moteur, spasticité, troubles associés (déglutition, épilepsie, vision, audition), GMFCS ; rééducation précoce et aides techniques, baclofène, antiépileptiques, nutrition adaptée ; inclusion et prévention périnatale.',
    },
    {
      slug: 'spina-bifida-defauts-tube-neural',
      protocoles: ['OMS — Prévention des anomalies du tube neural : supplémentation en acide folique', 'Spina Bifida Association — Guidelines for the care of people with spina bifida (2018)'],
      verifie:
        'Poche protégée par une compresse humide stérile, décubitus ventral, ampicilline + gentamicine si rupture, fermeture en 48–72 h ; hydrocéphalie, sondages intermittents propres, intestin, orthopédie ; acide folique 0,4 mg (4–5 mg si antécédent), pas de valproate chez la femme en âge de procréer.',
    },
    {
      slug: 'guillain-barre-enfant',
      protocoles: ['Leonhard et al. — Diagnosis and management of Guillain–Barré syndrome in ten steps (Nat Rev Neurol 2019)', 'IMEP (GPEI) — Directives mondiales de surveillance de la paralysie flasque aiguë'],
      verifie:
        'Paralysie flasque ascendante, aréflexie, dissociation albumino-cytologique ; déclaration de la PFA et selles ; surveillance respiratoire et de la dysautonomie ; IgIV 0,4 g/kg/j 5 jours (ou 1 g/kg/j 2 jours) si l’enfant ne marche plus, pas de corticoïdes ; kinésithérapie.',
    },
    {
      slug: 'syndrome-de-west',
      protocoles: ['ILAE — Treatment of infantile spasms (2024)', 'UKISS/ICISS — Essais sur la prednisolone et le vigabatrin dans les spasmes infantiles'],
      verifie:
        'Spasmes en salves au réveil, régression, hypsarythmie ; urgence thérapeutique : prednisolone à forte dose (40–60 mg/j) 2 semaines puis décroissance, vigabatrin en premier dans la sclérose tubéreuse ; contrôle EEG à 2 semaines ; surveillance des corticoïdes ; stimulation.',
    },
    {
      slug: 'asthme-enfant',
      protocoles: [GINA, POCKET],
      verifie:
        'Diagnostic (épisodes récidivants, réversibilité), sévérité de la crise ; salbutamol en chambre d’inhalation, prednisolone 1–2 mg/kg (max 40 mg) 3–5 jours, oxygène si SpO2 < 94 %, ipratropium et sulfate de magnésium 40 mg/kg dans la crise grave ; corticoïde inhalé de fond, budésonide-formotérol après 6 ans ; plan d’action, éviction de la fumée.',
    },
    {
      slug: 'bronchiolite-aigue-nourrisson',
      protocoles: ['AAP — Clinical practice guideline: bronchiolitis (2014)', 'NICE — Bronchiolitis in children (NG9, mise à jour 2021)', POCKET],
      verifie:
        'Signes de gravité et facteurs de risque ; désobstruction nasale, alimentation fractionnée, sonde si besoin ; oxygène si SpO2 < 90 %, CPAP à bulles ; pas de bronchodilatateur, de corticoïde, d’antibiotique ni de kinésithérapie systématiques.',
    },
    {
      slug: 'corps-etranger-voies-aeriennes',
      protocoles: ['ERC — Paediatric life support guidelines (2021) : obstruction des voies aériennes', 'AAP — Prévention de l’étouffement chez l’enfant'],
      verifie:
        'Syndrome de pénétration, signes unilatéraux, radiographie en inspiration et expiration ; obstruction complète : tapes dans le dos puis compressions thoraciques (nourrisson) ou abdominales (enfant), RCP si perte de connaissance ; obstruction partielle : laisser tousser, transfert pour bronchoscopie rigide ; prévention.',
    },
    {
      slug: 'epiglottite',
      protocoles: ['Advanced Paediatric Life Support (APLS) — Obstruction des voies aériennes supérieures', 'OMS — Haemophilus influenzae type b vaccination: position paper (2013)'],
      verifie:
        'Début brutal, hypersalivation, position assise penchée ; ne pas examiner la gorge ni allonger, oxygène, intubation par l’équipe la plus expérimentée ; ceftriaxone 50–100 mg/kg/j 7–10 jours après sécurisation ; vaccin Hib, rifampicine des contacts.',
    },
    {
      slug: 'laryngite-aigue-croup',
      protocoles: ['Cochrane — Glucocorticoids for croup (2023)', 'Alberta Clinical Practice Guideline — Diagnosis and management of croup (2021)'],
      verifie:
        'Toux aboyante, stridor ; gravité et diagnostics différentiels (épiglottite, corps étranger, diphtérie) ; dexaméthasone 0,15–0,6 mg/kg dose unique (max 16 mg) ou budésonide nébulisé ; adrénaline nébulisée 0,5 mL/kg (max 5 mL) si stridor au repos, surveillance 2–4 h ; oxygène.',
    },
    {
      slug: 'mucoviscidose',
      protocoles: ['ECFS — Standards of care for patients with cystic fibrosis (2018, 2024)'],
      verifie:
        'Test de la sueur (chlorures ≥ 60 mmol/L) ; kinésithérapie, sérum salé hypertonique, antibiotiques des exacerbations, azithromycine au long cours ; alimentation hypercalorique, enzymes pancréatiques, vitamines liposolubles, sel par temps chaud ; centre spécialisé.',
    },
    {
      slug: 'pleuresie-purulente-enfant',
      protocoles: ['BTS — Guidelines for the management of pleural infection in children (2005)', POCKET],
      verifie:
        'Pneumonie fébrile malgré 48–72 h d’antibiotiques, échographie, ponction ; drain thoracique si pus franc ; cloxacilline + ceftriaxone (ou ampicilline + gentamicine), 3 à 4 semaines au total avec relais oral ; décortication si échec ; nutrition.',
    },
    {
      slug: 'pneumonies-recidivantes-enfant',
      protocoles: [POCKET, 'OMS — Consolidated HIV guidelines (2021) et tuberculosis module 5 (2022)'],
      verifie:
        'Définition (2 par an ou 3 au total) ; VIH en premier, tuberculose, asthme, corps étranger du même territoire, troubles de déglutition, cardiopathie, drépanocytose ; traitement de l’épisode selon la PCIME et de la cause ; vaccinations.',
    },
    {
      slug: 'pneumopathie-interstitielle-lymphoide',
      protocoles: ['OMS — Consolidated guidelines on HIV (2021) : stade clinique 3 de l’enfant', POCKET],
      verifie:
        'Toux chronique, hippocratisme, parotides, opacités réticulonodulaires, tuberculose à éliminer ; ARV et cotrimoxazole ; oxygène, prednisolone 2 mg/kg/j si hypoxémie persistante après exclusion de la tuberculose ; surinfections.',
    },
    {
      slug: 'staphylococcie-pleuropulmonaire',
      protocoles: [POCKET],
      verifie:
        'Nourrisson, foyer cutané, pneumatocèles, pyopneumothorax ; cloxacilline 50 mg/kg toutes les 6 h + gentamicine 7,5 mg/kg/j, 3 semaines au total ; vancomycine ou clindamycine si SARM ; drain si empyème ou pneumothorax, pas de drainage des pneumatocèles.',
    },
    {
      slug: 'ascaridiose-compliquee-enfant',
      protocoles: ['OMS — Guideline: preventive chemotherapy to control soil-transmitted helminth infections (2017)', 'OMS — Surgical care at the district hospital (2003) : occlusion intestinale'],
      verifie:
        'Occlusion par paquet de vers, ascaridiose biliaire ; aspiration gastrique, réhydratation, anthelminthique après reprise du transit ; laparotomie si signes péritonéaux ou échec à 24–48 h ; déparasitage de masse.',
    },
    {
      slug: 'cholestase-nourrisson-atresie-voies-biliaires',
      protocoles: ['NASPGHAN/ESPGHAN — Guideline for the evaluation of cholestatic jaundice in infants (2017)'],
      verifie:
        'Ictère au-delà de 14 jours avec selles décolorées (carte colorimétrique), bilirubine conjuguée, échographie ; vitamine K1 immédiate ; intervention de Kasai avant 45–60 jours ; vitamines liposolubles, acide ursodésoxycholique après Kasai ; causes traitables.',
    },
    {
      slug: 'constipation-enfant',
      protocoles: ['ESPGHAN/NASPGHAN — Evaluation and treatment of functional constipation in infants and children (2014)'],
      verifie:
        'Signes d’alarme (méconium après 48 h, distension, retard de croissance, anomalies du rachis) ; désimpaction par macrogol 1–1,5 g/kg/j 3–6 jours ; entretien par macrogol 0,4–0,8 g/kg/j ou lactulose au moins 2 mois ; éducation, alimentation.',
    },
    {
      slug: 'diarrhee-aigue-enfant',
      protocoles: [OMS_DIARRHEE, PCIME, POCKET],
      verifie:
        'Classification de la déshydratation, plans A, B, C (Ringer lactate 100 mL/kg selon l’âge) ; zinc 20 mg/j (10 mg/j avant 6 mois) 10–14 jours ; alimentation poursuivie ; antibiotiques seulement pour la dysenterie (ciprofloxacine 15 mg/kg 2 fois par jour 3 jours) ou le choléra ; pas de lopéramide ; vaccination antirotavirus.',
    },
    {
      slug: 'diarrhee-persistante-enfant',
      protocoles: [OMS_DIARRHEE, PCIME],
      verifie:
        'Diarrhée ≥ 14 jours, déshydratation et état nutritionnel, VIH ; réhydratation (ReSoMal si malnutrition) ; allaitement, lait animal réduit, 6 repas ; zinc, vitamine A et multivitamines ; traitement des causes (sang, giardiase, VIH) ; revoir à 5 jours.',
    },
    {
      slug: 'douleurs-abdominales-recurrentes-enfant',
      protocoles: ['Critères de Rome IV — Douleurs abdominales fonctionnelles de l’enfant (2016)', ESPGHAN],
      verifie:
        'Profil fonctionnel et signes d’alarme ; bilan orienté (selles, bandelette, NFS) ; explications, gestion du stress, antalgiques ponctuels ; albendazole en zone d’endémie, praziquantel, constipation, infection urinaire, H. pylori.',
      corrige:
        'Critère de fréquence du résumé aligné sur Rome IV (douleur abdominale fonctionnelle : au moins 4 épisodes par mois depuis au moins 2 mois, et non 2 épisodes par mois).',
      corrections: [
        {
          champ: 'resume',
          remplacer: [
            '(au moins 2 épisodes par mois depuis 2 mois)',
            '(au moins 4 épisodes par mois depuis au moins 2 mois, critères de Rome IV)',
          ],
        },
      ],
    },
    {
      slug: 'dysenterie-enfant',
      protocoles: ['OMS — Guidelines for the control of shigellosis (2005)', POCKET],
      verifie:
        'Selles sanglantes, signes de gravité (SHU) ; ciprofloxacine 15 mg/kg 2 fois par jour 3 jours, ceftriaxone dans les formes graves, azithromycine selon la sensibilité ; SRO, zinc, alimentation ; revoir à 2 jours ; hospitalisation des formes à risque.',
    },
    {
      slug: 'hemorragie-digestive-enfant',
      protocoles: ['ESPGHAN — Paediatric gastrointestinal endoscopy guideline (2017)', 'Baveno VII — Hypertension portale (2022), adaptée à l’enfant'],
      verifie:
        'Retentissement, origine haute ou basse ; remplissage puis transfusion (cible Hb 7–9 g/dL), vitamine K ; IPP, octréotide et antibioprophylaxie des varices, endoscopie ; propranolol et praziquantel en prévention ; causes basses (fissure, polype, invagination, Meckel).',
    },
    {
      slug: 'hepatites-virales-enfant',
      protocoles: ['OMS — Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection (2024)', 'OMS — Hepatitis A vaccines: position paper (2022)'],
      verifie:
        'Hépatite aiguë, gravité (TP < 50 %, troubles de conscience) ; repos, pas d’hépatotoxiques, vitamine K ; hépatite B chronique : suivi et antiviraux en centre ; vaccin hépatite B à la naissance, immunoglobulines, ténofovir maternel.',
    },
    {
      slug: 'hepatosplenomegalie-enfant',
      protocoles: [POCKET, 'OMS — Guideline on control and elimination of human schistosomiasis (2022)'],
      verifie:
        'Mesure du foie et de la rate, orientation (paludisme, drépanocytose, schistosomiase, VIH, tuberculose, hémopathies) ; NFS, frottis, TDR, électrophorèse, échographie ; traitement de la cause, orientation urgente si cytopénies ou blastes ; éviter les sports de contact.',
    },
    {
      slug: 'maladie-coeliaque',
      protocoles: ['ESPGHAN — Guidelines for diagnosing coeliac disease (2020)'],
      verifie:
        'Formes typiques et atypiques ; anticorps anti-transglutaminase IgA avec IgA totales sous gluten, biopsies ; causes fréquentes de diarrhée chronique éliminées d’abord ; régime sans gluten à vie (aliments locaux autorisés : manioc, maïs, riz, sorgho, mil, plantain) ; correction des carences.',
    },
    {
      slug: 'reflux-gastro-oesophagien-nourrisson',
      protocoles: ['NASPGHAN/ESPGHAN — Pediatric gastroesophageal reflux clinical practice guidelines (2018)'],
      verifie:
        'Régurgiteur heureux, signes d’alarme (vomissements bilieux ou en jet, cassure pondérale) ; rassurer, éviter la suralimentation, allaitement, couchage sur le dos ; lait épaissi si non allaité ; pas de médicament dans le reflux simple, oméprazole 1 mg/kg/j 4 à 8 semaines seulement en cas d’œsophagite.',
    },
    {
      slug: 'vomissements-enfant',
      protocoles: [POCKET, 'ESPGHAN/ESPID — Management of acute gastroenteritis in children in Europe (2014)'],
      verifie:
        'Signes d’alarme (bilieux, en jet, abdomen chirurgical, méningite, acidocétose) ; SRO fractionné ; ondansétron 0,15 mg/kg dose unique après 6 mois, pas de métoclopramide ni de dompéridone ; traitement de la cause.',
    },
  ],
};
