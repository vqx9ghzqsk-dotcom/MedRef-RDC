'use strict';

/**
 * Contrôle de conformité — lot C16 : infectiologie pédiatrique et malnutrition (33 fiches).
 * Méningite : recommandations OMS d'avril 2025 (corticoïdes) ; malnutrition : guide clinique MSF
 * (amoxicilline 50 mg/kg 2 fois par jour 5 à 7 jours) et lignes directrices OMS.
 */

const POCKET = 'OMS — Pocket book of hospital care for children (2e édition, 2013)';
const PCIME = 'OMS/UNICEF — Prise en charge intégrée des maladies de l’enfant (PCIME, 2019)';
const OMS_PALU = 'OMS — Guidelines for malaria (mise à jour 2023)';
const OMS_MENINGITE = 'OMS — Guidelines on meningitis diagnosis, treatment and care (avril 2025)';
const OMS_VIH = 'OMS — Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring (2021)';
const OMS_TB = 'OMS — Consolidated guidelines on tuberculosis, module 5 : management of tuberculosis in children and adolescents (2022)';
const OMS_EMACIATION = 'OMS — Guideline on the prevention and management of wasting and nutritional oedema in infants and children under 5 years (2023)';
const OMS_MAS_2013 = 'OMS — Updates on the management of severe acute malnutrition in infants and children (2013)';
const MSF_MAS = 'MSF — Guide clinique et thérapeutique : malnutrition aiguë sévère';
const ANJE = 'OMS/UNICEF — Stratégie mondiale pour l’alimentation du nourrisson et du jeune enfant ; Guideline on complementary feeding (2023)';

module.exports = {
  lot: 'C16',
  date: '2026-10-16',
  titre: 'Infectiologie pédiatrique et malnutrition',
  fiches: [
    {
      slug: 'cholera-enfant',
      protocoles: ['GTFCC — Clinical management of cholera (2019, mises à jour)', POCKET],
      verifie:
        'Évaluation de la déshydratation ; plan B (SRO 75 mL/kg en 4 h) ; plan C (Ringer lactate 100 mL/kg : < 12 mois 30 mL/kg en 1 h puis 70 mL/kg en 5 h, ≥ 12 mois 30 mL/kg en 30 min puis 70 mL/kg en 2 h 30) ; azithromycine 20 mg/kg dose unique ; zinc ; précautions chez le malnutri ; prévention et vaccin oral.',
    },
    {
      slug: 'coqueluche',
      protocoles: ['CDC — Pertussis: treatment and postexposure prophylaxis (2024)', 'OMS — Pertussis vaccines: WHO position paper (2015)'],
      verifie:
        'Phases cliniques, formes du nourrisson (apnées), définition OMS ; hospitalisation des moins de 6 mois, oxygène, alimentation fractionnée, pas d’antitussif ; vaccination pentavalent, prophylaxie des contacts, isolement 5 jours après le début de l’antibiotique.',
      corrige:
        'Posologie de l’azithromycine rendue lisible et alignée sur le CDC : 10 mg/kg/j pendant 5 jours avant 6 mois ; à partir de 6 mois, 10 mg/kg à J1 puis 5 mg/kg/j de J2 à J5.',
      corrections: [
        {
          principe: 'Antibiotique',
          champ: 'details',
          remplacer: [
            '- **Azithromycine** 10 mg/kg/j 5 jours (J1) puis 5 mg/kg/j J2–J5 ; nourrisson < 1 mois : azithromycine préférée',
            '- **Azithromycine** : avant 6 mois, 10 mg/kg/j pendant 5 jours ; à partir de 6 mois, 10 mg/kg à J1 puis 5 mg/kg/j de J2 à J5 (maximum 500 mg puis 250 mg) ; azithromycine préférée chez le nourrisson < 1 mois',
          ],
        },
      ],
    },
    {
      slug: 'diphterie',
      protocoles: ['OMS — Clinical management of diphtheria: guideline (2024)', 'MSF — Guide clinique et thérapeutique : diphtérie'],
      verifie:
        'Fausses membranes adhérentes, cou proconsulaire, myocardite ; antitoxine dès la suspicion (20 000 à 100 000 UI selon la gravité), adrénaline prête ; pénicilline ou macrolide 14 jours ; voies aériennes, ECG ; notification, prophylaxie et vaccination des contacts.',
    },
    {
      slug: 'encephalites-virales-enfant',
      protocoles: [POCKET, OMS_MENINGITE, OMS_PALU],
      verifie:
        'Traitements empiriques sans attendre (artésunate, ceftriaxone, aciclovir 20 mg/kg toutes les 8 h de 3 mois à 12 ans, 10 mg/kg au-delà, 14–21 jours) ; PL après scanner si signes focaux ; convulsions, HTIC ; prévention vaccinale et antirabique.',
    },
    {
      slug: 'fievre-typhoide-enfant',
      protocoles: ['OMS — Typhoid vaccines: WHO position paper (2018)', 'MSF — Guide clinique et thérapeutique : fièvres typhoïde et paratyphoïdes', POCKET],
      verifie:
        'Hémocultures (Widal non fiable) ; azithromycine 20 mg/kg/j (max 1 g) 7 jours ou céfixime ; ceftriaxone 80–100 mg/kg/j 10–14 jours dans les formes graves, méropénem si souche XDR ; perforation : chirurgie ; vaccin conjugué.',
    },
    {
      slug: 'infection-vih-enfant',
      protocoles: [OMS_VIH],
      verifie:
        'Diagnostic par PCR avant 18 mois, sérologie ensuite ; TARV le jour même, dolutégravir pédiatrique dispersible dès 4 semaines et 3 kg avec abacavir + lamivudine ; cotrimoxazole, prévention de la tuberculose, vaccinations ; charge virale, échec si > 1 000 copies après renforcement de l’observance.',
    },
    {
      slug: 'cmv-congenital',
      protocoles: ['International congenital CMV recommendations group — Consensus recommendations for prevention, diagnosis and therapy (2017)'],
      verifie:
        'Formes symptomatiques, PCR urines ou salive avant 21 jours ; échographie transfontanellaire, audition, fond d’œil ; valganciclovir 16 mg/kg 2 fois par jour 6 mois débuté avant 1 mois, en centre ; suivi auditif jusqu’à 5–6 ans ; hygiène pendant la grossesse.',
    },
    {
      slug: 'meningite-bacterienne-enfant',
      protocoles: [OMS_MENINGITE, POCKET],
      verifie:
        'Signes selon l’âge, purpura fulminans ; PL différée si HTIC, choc ou coagulopathie ; ceftriaxone 100 mg/kg/j (max 4 g) dans l’heure, 5 jours (méningocoque) à 10–14 jours (pneumocoque, Hib) ; convulsions, glycémie, apports hydriques sans restriction systématique ; vaccins, chimioprophylaxie des contacts.',
      corrige:
        'La dexaméthasone était présentée comme réservée aux pays à revenu élevé, avec un bénéfice « incertain en Afrique subsaharienne » : les recommandations OMS d’avril 2025 la recommandent (0,15 mg/kg toutes les 6 h pendant 4 jours, avec la 1re dose d’antibiotique), sauf devant une méningite à méningocoque suspectée en contexte d’épidémie.',
      corrections: [
        {
          principe: 'Corticoïdes',
          champ: 'details',
          remplacer: [
            '- **Dexaméthasone** 0,15 mg/kg toutes les 6 h 2 à 4 jours, débutée avant ou avec la 1re dose d’antibiotique (pays à revenu élevé, Hib, pneumocoque) ; bénéfice incertain en Afrique subsaharienne : selon le protocole national',
            '- **Dexaméthasone** 0,15 mg/kg IV toutes les 6 h pendant 4 jours, débutée avant ou avec la 1re dose d’antibiotique (OMS 2025) ; si la PL est impossible, la débuter lorsque la méningite bactérienne est fortement suspectée\n- **Pas** de corticoïdes systématiques devant une méningite à méningocoque suspectée en contexte d’épidémie ; pas chez le nourrisson de moins de 1 mois',
          ],
        },
      ],
    },
    {
      slug: 'mpox-enfant',
      protocoles: ['OMS — Clinical management and infection prevention and control for mpox (2025)', 'PALM007 — Tecovirimat for clade I mpox, N Engl J Med 2025'],
      verifie:
        'Clinique, PCR sur lésion, VIH et état nutritionnel ; isolement jusqu’à la chute des croûtes, notification ; hydratation, nutrition, soins cutanés, buccaux et oculaires, traitement des surinfections ; antiviral seulement dans le cadre de protocoles (tecovirimat sans bénéfice dans l’essai PALM007) ; vaccination selon la stratégie nationale.',
    },
    {
      slug: 'oreillons',
      protocoles: ['OMS — Mumps virus vaccines: WHO position paper (2007)', POCKET],
      verifie:
        'Parotidite, complications (orchite, méningite, pancréatite, surdité) ; traitement symptomatique sans antibiotique ; éviction 5 jours ; vaccin ROR selon la disponibilité.',
    },
    {
      slug: 'paludisme-grave-enfant',
      protocoles: [OMS_PALU, 'OMS — Management of severe malaria: a practical handbook (3e édition, 2012)', POCKET],
      verifie:
        'Critères de gravité ; artésunate 3 mg/kg (< 20 kg) ou 2,4 mg/kg à H0, H12, H24 puis par jour, artésunate rectal 10 mg/kg avant transfert, puis ACT complet ; glucose 10 % 5 mL/kg ; transfusion si Hb < 4 g/dL ou < 6 g/dL avec signes de gravité ; diazépam ; pas de bolus systématique ; ceftriaxone si choc ou coma ; contrôle de l’Hb à J14–J28.',
    },
    {
      slug: 'paludisme-simple-enfant',
      protocoles: [OMS_PALU, 'PNLP RDC — Directives nationales de prise en charge du paludisme'],
      verifie:
        'TDR avant traitement, signes de danger ; artéméther-luméfantrine selon le poids, 2 fois par jour 3 jours avec un aliment gras, ou artésunate-amodiaquine ; paracétamol, nouvelle dose si vomissement dans les 30 min, contrôle à J3 ; moustiquaire, vaccin.',
      corrige:
        'Nourrisson de moins de 5 kg : « ACT selon le poids (avis) » remplacé par la recommandation OMS (même dose par kg que pour un enfant de 5 kg), déjà retenue dans la fiche « Paludisme congénital ».',
      corrections: [
        {
          principe: 'ACT 3 jours selon le poids',
          champ: 'details',
          remplacer: [
            '- Nourrisson < 5 kg : ACT selon le poids (avis)',
            '- Nourrisson < 5 kg : même dose par kg que pour un enfant de 5 kg, soit 1 comprimé 20/120 mg d’artéméther-luméfantrine par prise (OMS)',
          ],
        },
      ],
    },
    {
      slug: 'pneumonie-enfant',
      protocoles: [POCKET, PCIME, 'OMS — Revised WHO classification and treatment of pneumonia in children at health facilities (2014)'],
      verifie:
        'Seuils de fréquence respiratoire, tirage, signes de danger, SpO2 ; amoxicilline 40 mg/kg/dose 2 fois par jour 5 jours (3 jours selon le contexte) ; pneumonie grave : ampicilline + gentamicine, ceftriaxone en 2e ligne, cloxacilline si staphylocoque ; oxygène si SpO2 < 90 %, CPAP à bulles ; prévention vaccinale.',
    },
    {
      slug: 'poliomyelite-paralysies-flasques-aigues',
      protocoles: ['IMEP (GPEI) — Directives mondiales de surveillance de la paralysie flasque aiguë'],
      verifie:
        'Clinique, diagnostics différentiels ; notification dans les 24 h, 2 selles à 24 h d’intervalle dans les 14 jours, suivi à 60 jours ; pas d’injection IM en phase aiguë, rééducation ; VPO et VPI, riposte (VPOn2).',
    },
    {
      slug: 'rougeole',
      protocoles: [POCKET, 'OMS — Measles vaccines: WHO position paper (2017)'],
      verifie:
        'Définition de cas, rougeole compliquée (PCIME) ; vitamine A à J1 et J2 (J15 si signes oculaires) selon l’âge ; soins des yeux et de la bouche, SRO et zinc ; amoxicilline ou ceftriaxone des pneumonies ; vaccin RR à 9 et 15–18 mois, riposte dès 6 mois.',
    },
    {
      slug: 'rubeole',
      protocoles: ['OMS — Rubella vaccines: WHO position paper (2020)'],
      verifie:
        'Clinique, IgM dans le cadre de la surveillance rougeole-rubéole ; traitement symptomatique, éviction ; évaluation de la femme enceinte exposée ; vaccination RR, y compris des femmes en âge de procréer hors grossesse.',
    },
    {
      slug: 'scarlatine',
      protocoles: ['OMS — Rheumatic fever and rheumatic heart disease: prévention primaire', 'AHA — Prevention of rheumatic fever (2009)'],
      verifie:
        'Clinique, TDR streptococcique ; amoxicilline 50 mg/kg/j (max 1 g) 10 jours ou benzathine pénicilline dose unique, azithromycine 12 mg/kg/j 5 jours si allergie ; éviction 24 h ; surveillance des complications.',
    },
    {
      slug: 'schistosomiase-enfant',
      protocoles: ['OMS — Guideline on control and elimination of human schistosomiasis (2022)'],
      verifie:
        'Formes urinaire et intestinale, filtration des urines, Kato-Katz ; praziquantel 40 mg/kg dose unique, arpraziquantel avant 6 ans selon disponibilité ; traitement de masse, eau et assainissement ; anémie.',
    },
    {
      slug: 'sepsis-enfant',
      protocoles: ['Phoenix — Criteria for pediatric sepsis (JAMA 2024)', 'Surviving Sepsis Campaign — Pediatric guidelines (2020)', POCKET],
      verifie:
        'Signes ETAT, recherche du foyer ; ceftriaxone 80–100 mg/kg/j ou ampicilline + gentamicine dans l’heure, cloxacilline si foyer cutané ou ostéoarticulaire ; bolus seulement en cas de choc hypotensif (10–20 mL/kg, max 40), pas de bolus sinon (FEAST) ; glucose, oxygène, antipaludique si TDR positif.',
    },
    {
      slug: 'trypanosomiase-enfant',
      protocoles: ['OMS — Guidelines for the treatment of human African trypanosomiasis (2024)', 'PNLTHA RDC — Directives de traitement'],
      verifie:
        'Clinique, dépistage sérologique puis parasitologique, stadification ; fexinidazole 10 jours (≥ 6 ans et ≥ 20 kg), pentamidine (stade 1 du jeune enfant), NECT (stade 2 sévère) ; soins associés, dépistage familial.',
    },
    {
      slug: 'tuberculose-enfant',
      protocoles: [OMS_TB, 'OMS — Consolidated guidelines on tuberculosis, module 1 : prevention (2024)'],
      verifie:
        'Arguments cliniques et contage ; Xpert Ultra sur crachats, aspiration gastrique ou selles, TB-LAM si VIH, algorithmes OMS ; 2HRZ(E)/2HR pour les formes non graves, 2HRZE/4HR sinon, méningite 2HRZE/10HR ou schéma intensif de 6 mois avec corticoïdes ; pyridoxine ; traitement préventif des contacts.',
    },
    {
      slug: 'varicelle',
      protocoles: [POCKET, 'MSF — Guide clinique et thérapeutique : varicelle'],
      verifie:
        'Formes graves (immunodéprimé, nouveau-né) ; paracétamol, ni aspirine ni AINS, soins locaux, chlorphénamine ; aciclovir IV 10–20 mg/kg toutes les 8 h dans les formes à risque, oral 20 mg/kg 4 fois par jour chez l’adolescent ; cloxacilline des surinfections ; éviction.',
    },
    {
      slug: 'alimentation-nourrisson-diversification',
      protocoles: [ANJE, PCIME],
      verifie:
        'Mise au sein dans l’heure, allaitement exclusif 6 mois, y compris chez la mère vivant avec le VIH sous ARV ; alimentation de complément dès 6 mois (fréquence, consistance, au moins 5 groupes sur 8, aliments d’origine animale) ; hygiène, alimentation active ; vitamine A, déparasitage dès 12 mois.',
    },
    {
      slug: 'carences-micronutriments-enfant',
      protocoles: ['OMS — Zinc supplementation in the management of diarrhoea (2019)', 'OMS/UNICEF/ICCIDD — Assessment of iodine deficiency disorders (2007)'],
      verifie:
        'Signes de carence en zinc et en iode, TSH ; zinc 10 mg/j avant 6 mois et 20 mg/j ensuite pendant 10–14 jours à chaque diarrhée ; sel iodé, iode 250 µg/j chez la femme enceinte et allaitante ; lévothyroxine si hypothyroïdie ; carences associées.',
    },
    {
      slug: 'kwashiorkor',
      protocoles: [OMS_EMACIATION, OMS_MAS_2013, MSF_MAS],
      verifie:
        'Œdèmes bilatéraux, dermatose, test de l’appétit ; F-75 en repas fréquents, antibiotiques systématiques, ReSoMal prudent sans perfusion sauf choc ; transition vers F-100 ou ATPE ; pas de fer initialement ; critères de sortie.',
    },
    {
      slug: 'malnutrition-aigue-moderee',
      protocoles: [OMS_EMACIATION],
      verifie:
        'PB 115–124 mm ou P/T entre −3 et −2 z sans œdème ; supplémentation (ASPE ou farine enrichie), vitamine A, albendazole dès 12 mois, vaccination, paludisme ; suivi toutes les 2 semaines, guérison à PB ≥ 125 mm sur 2 visites.',
    },
    {
      slug: 'malnutrition-aigue-severe',
      protocoles: [OMS_EMACIATION, OMS_MAS_2013, MSF_MAS],
      verifie:
        'Critères (P/T < −3 z, PB < 115 mm, œdèmes), orientation UNTA ou UNTI ; hypoglycémie (< 3 mmol/L), hypothermie ; amoxicilline (non compliquée), ampicilline + gentamicine (compliquée) ; F-75 130 mL/kg/j (100 si œdèmes +++), puis ATPE ou F-100 ; ReSoMal 5 mL/kg toutes les 30 min pendant 2 h ; choc : 15 mL/kg en 1 h ; transfusion si Hb < 4 g/dL.',
    },
    {
      slug: 'malnutrition-chronique',
      protocoles: [ANJE, 'OMS — Global nutrition targets 2025 : retard de croissance'],
      verifie:
        'Taille pour l’âge < −2 z (sévère < −3), mesure couchée avant 2 ans ; allaitement et alimentation de complément enrichie, suppléments lipidiques selon les programmes ; vitamine A, zinc, fer, sel iodé, déparasitage ; approche multisectorielle des 1 000 premiers jours.',
    },
    {
      slug: 'malnutrition-enfant-vih',
      protocoles: [OMS_EMACIATION, OMS_VIH],
      verifie:
        'Test VIH chez tout enfant malnutri ; protocole MAS standard avec besoins énergétiques augmentés ; cotrimoxazole ; ARV dès la stabilisation (en général dans les 2 semaines), schéma à base de dolutégravir ; recherche active de la tuberculose ; candidose.',
    },
    {
      slug: 'malnutrition-nourrisson-moins-6-mois',
      protocoles: [OMS_EMACIATION, 'ENN — MAMI Care Pathway (2021)'],
      verifie:
        'Critères et évaluation de la dyade mère-enfant ; rétablissement de l’allaitement, technique de supplémentation par succion, F-75 ou F-100 dilué, pas d’ATPE avant 6 mois ; antibiotiques ; santé physique et mentale de la mère ; sortie après prise de poids ≥ 20 g/j pendant 5 jours.',
    },
    {
      slug: 'marasme',
      protocoles: [OMS_EMACIATION, OMS_MAS_2013, MSF_MAS],
      verifie:
        'Critères sans œdème, test de l’appétit, complications ; UNTA : ATPE et amoxicilline 5 jours (MSF : 5 à 7 jours), albendazole, vaccination ; UNTI : F-75 130 mL/kg/j, glucose 10 % 5 mL/kg si < 3 mmol/L, ReSoMal, antibiotiques, pas de fer initialement ; sortie à P/T ≥ −2 z ou PB ≥ 125 mm.',
    },
    {
      slug: 'obesite-enfant',
      protocoles: ['OMS — Guideline on assessing and managing children at primary health-care facilities to prevent overweight and obesity (2017)', 'AAP — Clinical practice guideline for the evaluation and treatment of children and adolescents with obesity (2023)'],
      verifie:
        'Définitions OMS selon l’âge, complications et causes secondaires ; glycémie ou HbA1c, lipides, transaminases ; mode de vie familial (boissons sucrées, activité ≥ 60 min/j, écrans < 2 h), sans culpabilisation ; metformine seulement en cas de diabète de type 2 dès 10 ans.',
    },
    {
      slug: 'syndrome-de-renutrition-inappropriee',
      protocoles: [OMS_MAS_2013, 'NICE — Nutrition support for adults (CG32) : refeeding syndrome', 'ASPEN — Consensus recommendations for refeeding syndrome (2020)'],
      verifie:
        'Clinique des premiers jours, phosphore, potassium, magnésium ; prévention par le F-75 sans précipiter le F-100, 10 kcal/kg/j chez l’adulte à risque, thiamine ; surveillance de la FR, du poids et des œdèmes ; correction ionique, réduction des apports, furosémide en cas de surcharge.',
    },
  ],
};
