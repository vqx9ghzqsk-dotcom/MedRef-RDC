'use strict';

/**
 * Contrôle de conformité — lot C15 : néonatologie et néonatologie immédiate (29 fiches).
 * Doses néonatales vérifiées dans le Pocket book OMS et le guide MSF (soins au nouveau-né,
 * chapitre 10 : hypoglycémie < 2,5 mmol/L).
 */

const POCKET = 'OMS — Pocket book of hospital care for children (2e édition, 2013)';
const MSF_NN = 'MSF — Soins obstétricaux et néonatals essentiels, chapitre 10 : soins au nouveau-né';
const OMS_NN = 'OMS — Recommendations on newborn health (2017)';
const OMS_PREMA = 'OMS — Recommendations for care of the preterm or low-birth-weight infant (2022)';
const OMS_PSBI = 'OMS — Recommendations for management of serious bacterial infections in infants aged 0–59 days (2024)';
const OMS_REA = 'OMS — Guidelines on basic newborn resuscitation (2012)';
const ILCOR = 'ILCOR — Neonatal life support: consensus on science and treatment recommendations (2020, mises à jour 2023)';
const HBB = 'AAP — Helping Babies Breathe (3e édition, 2021)';
const OMS_CONVULSIONS = 'OMS — Guidelines on neonatal seizures (2011)';
const OMS_PROBLEMES = 'OMS — Managing newborn problems: a guide for doctors, nurses and midwives (2003)';
const ERDS = 'European consensus guidelines on the management of respiratory distress syndrome (2022)';
const AAP_GLUCOSE = 'AAP — Postnatal glucose homeostasis in late-preterm and term infants (2011)';

module.exports = {
  lot: 'C15',
  date: '2026-10-16',
  titre: 'Néonatologie',
  fiches: [
    {
      slug: 'asphyxie-perinatale',
      protocoles: [OMS_REA, ILCOR, HBB, OMS_CONVULSIONS],
      verifie:
        'Apgar, stades de Sarnat, atteintes associées ; minute d’or (séchage, stimulation, ventilation au ballon en air ambiant, 40/min), massage 3:1 si FC < 60 malgré 30 s de ventilation efficace, arrêt après 10–20 min ; normothermie, glucose 10 %, 60 mL/kg/j à J1 ; phénobarbital 20 mg/kg puis 10 mg/kg, entretien 5 mg/kg/j.',
    },
    {
      slug: 'conjonctivite-neonatale',
      protocoles: ['CDC — Sexually transmitted infections treatment guidelines (2021) : ophtalmie du nouveau-né', OMS_NN],
      verifie:
        'Gonocoque (J2–J5) et Chlamydia (J5–J14), prélèvement, dépistage maternel ; prophylaxie par tétracycline 1 % ou érythromycine 0,5 % ; gonocoque : ceftriaxone 50 mg/kg IM dose unique (max 125 mg), lavages ; Chlamydia : érythromycine 50 mg/kg/j 14 jours ou azithromycine 20 mg/kg/j 3 jours ; traitement des parents.',
      corrige:
        'La fiche ne signalait le risque de sténose du pylore qu’avant 2 semaines et semblait le rattacher à la seule azithromycine : le CDC le rapporte avec l’érythromycine comme avec l’azithromycine chez le nourrisson de moins de 6 semaines, qu’il faut surveiller.',
      corrections: [
        {
          principe: 'Conjonctivite à Chlamydia',
          champ: 'details',
          remplacer: [
            '(risque de sténose du pylore chez le nourrisson de moins de 2 semaines)',
            '(ces deux macrolides exposent à une sténose du pylore avant 6 semaines : surveiller les vomissements)',
          ],
        },
      ],
    },
    {
      slug: 'convulsions-neonatales',
      protocoles: [OMS_CONVULSIONS, 'ILAE — Treatment of neonatal seizures (2023)', POCKET],
      verifie:
        'Formes subtiles, distinction avec les trémulations ; glycémie, calcémie, magnésémie, natrémie, PL ; glucose 10 % 2 mL/kg, gluconate de calcium 10 % 2 mL/kg sous surveillance cardiaque ; phénobarbital 20 mg/kg puis 10 mg/kg (jusqu’à 40), phénytoïne ou lévétiracétam en 2e ligne ; antibiotiques si infection possible.',
    },
    {
      slug: 'detresse-respiratoire-nouveau-ne',
      protocoles: [POCKET, ERDS, OMS_PREMA],
      verifie:
        'Score de Silverman, causes ; chaleur, oxygène pour SpO2 90–95 %, CPAP (y compris à bulles) ; ampicilline 50 mg/kg toutes les 12 h + gentamicine 5 mg/kg/24 h (3 mg/kg chez le faible poids la 1re semaine), arrêt à 48–72 h si hémocultures négatives ; glucose 10 % ; corticoïdes anténatals.',
    },
    {
      slug: 'difficultes-alimentation-nouveau-ne',
      protocoles: ['OMS/UNICEF — Prise en charge intégrée des maladies de l’enfant (PCIME, 2019)', OMS_PREMA],
      verifie:
        'Signes de danger (refus de téter = sepsis possible), observation de la tétée, perte de poids > 10 % ; allaitement exclusif, pas d’eau ni de biberon ; lait exprimé à la tasse ou par sonde, 60–80 mL/kg/j à J1 jusqu’à 150–180 mL/kg/j ; nystatine du muguet.',
    },
    {
      slug: 'enterocolite-ulcero-necrosante',
      protocoles: ['Critères de Bell modifiés (Walsh et Kliegman) — stadification de l’entérocolite', POCKET, OMS_PREMA],
      verifie:
        'Distension, résidus bilieux, rectorragies, pneumatose ou pneumopéritoine ; arrêt de l’alimentation 7–14 jours, sonde gastrique, perfusion ; ampicilline + gentamicine + métronidazole 7–14 jours ; avis chirurgical si perforation ; prévention par le lait maternel.',
    },
    {
      slug: 'faible-poids-naissance-methode-kangourou',
      protocoles: [OMS_PREMA, POCKET],
      verifie:
        'Méthode mère kangourou immédiate et continue dès la naissance pour les < 2 000 g stables (OMS 2022) ; allaitement exclusif, lait exprimé, apports progressifs jusqu’à 150–180 mL/kg/j, prise de poids ≥ 15 g/kg/j ; vitamine K, chlorhexidine, fer et vitamine D ; critères de sortie et suivi.',
    },
    {
      slug: 'hypocalcemie-neonatale',
      protocoles: [OMS_PROBLEMES, POCKET],
      verifie:
        'Seuils (calcémie totale < 2 mmol/L, ionisé < 1,1 mmol/L), formes précoce et tardive ; gluconate de calcium 10 % 2 mL/kg IV lent sous surveillance cardiaque, entretien 4–8 mL/kg/j ; correction du magnésium ; arrêt du lait de vache, vitamine D.',
    },
    {
      slug: 'hypoglycemie-neonatale',
      protocoles: [POCKET, MSF_NN, AAP_GLUCOSE],
      verifie:
        'Seuil de 2,5 mmol/L (0,45 g/L), dépistage des nouveau-nés à risque ; allaitement précoce ; lait 10 mL/kg si asymptomatique ; glucose 10 % 2 mL/kg puis 60–80 mL/kg/j si symptomatique ou sévère, jamais de glucose hypertonique ; recherche d’une cause si persistante.',
    },
    {
      slug: 'hypothermie-neonatale',
      protocoles: [OMS_NN, POCKET, OMS_PREMA],
      verifie:
        'Seuils (< 36,5 °C, sévère < 32 °C) ; chaîne du chaud (séchage, peau à peau, bain différé) ; réchauffement en kangourou ou incubateur, sans bouillotte directe ; glucose et antibiotiques dans l’hypothermie sévère ou persistante.',
    },
    {
      slug: 'ictere-neonatal',
      protocoles: ['AAP — Clinical practice guideline revision: management of hyperbilirubinemia in the newborn ≥ 35 weeks (2022)', POCKET],
      verifie:
        'Ictère physiologique et signes de gravité (avant 24 h, paumes et plantes, signes neurologiques, ictère prolongé, selles décolorées) ; bilirubine sur la courbe horaire, bilan d’hémolyse, G6PD ; photothérapie selon les courbes, exsanguinotransfusion, pas de lumière solaire comme traitement ; cholestase : avis rapide (atrésie).',
    },
    {
      slug: 'sepsis-neonatal',
      protocoles: [OMS_PSBI, POCKET, 'NICE — Neonatal infection: antibiotics for prevention and treatment (NG195, 2021)'],
      verifie:
        'Sept signes de danger OMS, facteurs de risque ; ampicilline (ou amoxicilline) + gentamicine dès la suspicion, schémas simplifiés OMS si transfert impossible ; 7–10 jours si hémoculture positive, 14–21 jours si méningite, arrêt à 48–72 h si hémocultures négatives ; chaleur, alimentation, oxygène ; choc : NaCl 0,9 % 10 mL/kg.',
      corrige:
        'Le seuil d’hypoglycémie de la fiche (« < 2,6 mmol/L », « < 2,2 mmol/L selon l’OMS ») ne concordait pas avec la fiche « Hypoglycémie néonatale » : seuil aligné sur 2,5 mmol/L (0,45 g/L), celui de l’OMS et de MSF.',
      corrections: [
        {
          examen: 'glycemie',
          categorie: 'gravite',
          champ: 'interpretation',
          remplacer: [
            'Hypoglycémie néonatale : < 2,6 mmol/L (0,47 g/L) selon de nombreux protocoles (< 2,2 mmol/L selon l’OMS).',
            'Hypoglycémie néonatale : < 2,5 mmol/L (0,45 g/L), seuil de l’OMS et de MSF (voir la fiche dédiée).',
          ],
        },
      ],
    },
    {
      slug: 'inhalation-meconiale',
      protocoles: [ILCOR, OMS_REA],
      verifie:
        'Nouveau-né vigoureux : soins habituels ; non vigoureux : ventilation au ballon dans la minute, pas d’aspiration trachéale systématique ; oxygène, CPAP, surfactant en unité équipée ; antibiotiques si risque infectieux, arrêt à 48 h ; pneumothorax et hypertension pulmonaire.',
    },
    {
      slug: 'maladie-des-membranes-hyalines',
      protocoles: [ERDS, OMS_PREMA],
      verifie:
        'Clinique et radiographie ; CPAP précoce 5–7 cmH2O (y compris à bulles), SpO2 90–95 %, poractant alfa 200 mg/kg si disponible ; caféine (citrate 20 mg/kg puis 5 mg/kg/j) ; antibiotiques jusqu’à exclusion du sepsis ; corticoïdes anténatals entre 24 et 34 SA.',
    },
    {
      slug: 'maladie-hemorragique-du-nouveau-ne',
      protocoles: [OMS_NN, 'AAP — Vitamin K and the newborn infant (2022)'],
      verifie:
        'Formes classique et tardive, TP et TCA allongés avec plaquettes normales, test de l’Apt ; vitamine K1 1 mg IM à la naissance (0,5 mg si < 1 500 g), rattrapage ; traitement par vitamine K1 1 mg IV lente ou SC, plasma 10–20 mL/kg si saignement grave.',
    },
    {
      slug: 'malformations-congenitales-majeures',
      protocoles: [OMS_PROBLEMES, 'OMS — Prévention des anomalies du tube neural : supplémentation en acide folique'],
      verifie:
        'Examen systématique, signes d’atrésie de l’œsophage et d’imperforation anale ; gestes immédiats (myéloméningocèle, laparoschisis, atrésie de l’œsophage) ; fentes (lèvre vers 3 mois, palais vers 9–12 mois), Ponseti, dérivation de l’hydrocéphalie ; acide folique 0,4 mg (5 mg si antécédent).',
    },
    {
      slug: 'meningite-neonatale',
      protocoles: [POCKET, 'NICE — Neonatal infection: antibiotics for prevention and treatment (NG195, 2021)'],
      verifie:
        'Signes peu spécifiques, PL chez tout nouveau-né suspect de sepsis dès que possible ; ampicilline 100 mg/kg + céfotaxime 50 mg/kg (ou gentamicine), 14 jours (streptocoque B) à 21 jours (Gram négatif), pas de ceftriaxone en cas d’ictère ou de calcium IV ; phénobarbital ; suivi auditif et neurologique.',
    },
    {
      slug: 'nouveau-ne-mere-diabetique',
      protocoles: [AAP_GLUCOSE, POCKET],
      verifie:
        'Complications (hypoglycémie, détresse respiratoire, polyglobulie, hypocalcémie, traumatismes, malformations) ; mise au sein dans l’heure, glycémie à 1–2 h puis avant les tétées 24–48 h ; glucose 10 % 2 mL/kg puis perfusion si hypoglycémie persistante ou symptomatique.',
    },
    {
      slug: 'nouveau-ne-mere-hepatite-b',
      protocoles: ['OMS — Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection (2024)', 'OMS — Hepatitis B vaccines: WHO position paper (2017)'],
      verifie:
        'AgHBs chez toute femme enceinte ; vaccin à la naissance idéalement < 12 h, au plus tard 24 h, y compris chez le prématuré, immunoglobulines si disponibles ; pentavalent à 6, 10, 14 semaines ; allaitement autorisé ; contrôle AgHBs et anti-HBs à 9–12 mois.',
      corrige:
        'Le résumé faisait débuter le ténofovir maternel « dès 28 SA », le principe « dès 24–28 SA » : résumé aligné sur le principe et sur l’OMS.',
      corrections: [{ champ: 'resume', remplacer: ['ténofovir maternel dès 28 SA', 'ténofovir maternel dès 24–28 SA'] }],
    },
    {
      slug: 'nouveau-ne-expose-au-vih',
      protocoles: ['OMS — Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring (2021)'],
      verifie:
        'Évaluation du risque ; névirapine 6 semaines (bas risque), zidovudine + névirapine puis névirapine jusqu’à 12 semaines (haut risque, allaitement) ; PCR à la naissance, à 6 semaines et à 9 mois, sérologie à 18 mois et après le sevrage ; cotrimoxazole dès 6 semaines ; allaitement exclusif sous ARV maternels ; ARV immédiats si PCR positive.',
    },
    {
      slug: 'omphalite',
      protocoles: [POCKET, 'OMS — Recommendations on postnatal care (2022) : chlorhexidine sur le cordon'],
      verifie:
        'Forme localisée (rougeur < 1 cm) ou grave ; soins locaux ; cloxacilline + gentamicine IV 7–10 jours dans les formes graves, métronidazole si nécrose, débridement d’une fasciite ; chlorhexidine 7,1 % là où des applications traditionnelles sont fréquentes.',
    },
    {
      slug: 'paludisme-congenital',
      protocoles: ['OMS — Guidelines for malaria (2022 : nourrissons de moins de 5 kg)', POCKET],
      verifie:
        'Début entre 10 et 30 jours, TDR ou goutte épaisse devant toute fièvre ou anémie du nouveau-né ; artésunate 3 mg/kg à H0, H12, H24 puis par jour si grave ; artéméther-luméfantrine à la même dose par kg que pour 5 kg ; antibiotiques tant qu’un sepsis n’est pas exclu.',
    },
    {
      slug: 'polyglobulie-neonatale',
      protocoles: [OMS_PROBLEMES],
      verifie:
        'Hématocrite veineux > 65 %, facteurs ; alimentation et surveillance glycémique dans les formes asymptomatiques ; exsanguinotransfusion partielle au sérum salé si symptomatique ou hématocrite > 70 % (volume = poids × 80–90 × (Ht − 55) / Ht).',
    },
    {
      slug: 'prematurite',
      protocoles: [OMS_PREMA, ERDS, 'OMS — Recommendations on antenatal corticosteroids for improving preterm birth outcomes (2022)'],
      verifie:
        'Définitions, évaluation de l’âge gestationnel ; corticoïdes anténatals 24–34 SA, sulfate de magnésium avant 32 SA ; chaleur, méthode kangourou, lait maternel, vitamine K ; CPAP, caféine, antibiotiques, photothérapie à seuils bas ; dépistage de la rétinopathie ; suivi.',
    },
    {
      slug: 'syphilis-congenitale',
      protocoles: ['OMS — Guidelines for the treatment of Treponema pallidum (syphilis) (2016)', 'CDC — Sexually transmitted infections treatment guidelines (2021)'],
      verifie:
        'Clinique, RPR de l’enfant comparé à celui de la mère ; benzylpénicilline 50 000 UI/kg toutes les 12 h la 1re semaine puis toutes les 8 h, ou pénicilline procaïne 50 000 UI/kg/j, 10 jours ; benzathine pénicilline 50 000 UI/kg dose unique si enfant normal de mère insuffisamment traitée ; RPR à 3, 6 et 12 mois.',
    },
    {
      slug: 'tetanos-neonatal',
      protocoles: ['MSF — Guide clinique et thérapeutique : tétanos', 'OMS — Current recommendations for treatment of tetanus during humanitarian emergencies (2010)'],
      verifie:
        'Définition de cas OMS ; immunoglobulines antitétaniques 500 UI IM, métronidazole (ou benzylpénicilline) 7–10 jours, soins de l’ombilic ; diazépam adapté aux spasmes, phénobarbital, environnement calme, sonde gastrique ; vaccination Td des femmes, notification.',
    },
    {
      slug: 'traumatismes-obstetricaux-nouveau-ne',
      protocoles: [OMS_PROBLEMES],
      verifie:
        'Distinction bosse sérosanguine, céphalhématome et hématome sous-galéal (urgence) ; fracture de clavicule (manche épinglée), paralysie d’Erb (kinésithérapie, avis chirurgical à 3–6 mois), paralysie faciale ; vitamine K, remplissage et transfusion de l’hématome sous-galéal.',
    },
    {
      slug: 'reanimation-nouveau-ne-salle-de-naissance',
      protocoles: [HBB, ILCOR, OMS_REA],
      verifie:
        'Préparation (ballon et masques testés) ; séchage, stimulation, aspiration seulement si obstruction ; ventilation au ballon dans la minute, 40/min, air ambiant ; massage 3:1 si FC < 60 après 30 s de ventilation efficace, adrénaline 10–30 µg/kg IV, NaCl 10 mL/kg si hypovolémie ; arrêt après 10–20 min sans activité cardiaque.',
    },
    {
      slug: 'soins-essentiels-nouveau-ne',
      protocoles: [OMS_NN, 'OMS — Recommendations on maternal and newborn care for a positive postnatal experience (2022)'],
      verifie:
        'Séchage, peau à peau, clampage retardé, allaitement dans l’heure, bain après 24 h ; vitamine K, tétracycline oculaire, chlorhexidine 7,1 %, BCG, VPO 0, hépatite B dans les 24 h, prophylaxie ARV si mère VIH+ ; signes de danger ; séjour d’au moins 24 h et visites postnatales.',
    },
  ],
};
