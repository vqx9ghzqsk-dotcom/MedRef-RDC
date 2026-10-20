'use strict';

/**
 * Contrôle de conformité — lot M01 : molécules du groupe « Antibiotiques » (63 fiches
 * pharmacologiques et leurs posologies). Références : guide MSF Médicaments essentiels
 * (mise à jour 2024), livre des antibiotiques AWaRe de l’OMS (2022), recommandations OMS 2024
 * sur la gonococcie.
 */

const MSF = 'MSF — Médicaments essentiels (guide en ligne, mise à jour 2024)';
const AWARE = 'OMS — The WHO AWaRe (Access, Watch, Reserve) antibiotic book (2022)';
const BNF = 'BNF / BNF for Children — monographies (2024)';
const POCKET = 'OMS — Pocket book of hospital care for children (2013)';
const IST = 'OMS — Updated recommendations for the treatment of N. gonorrhoeae, C. trachomatis and T. pallidum (2024)';
const TB = 'OMS — Consolidated guidelines on tuberculosis, module 4 : treatment (2022)';
const LEPRE = 'OMS — Guidelines for the diagnosis, treatment and prevention of leprosy (2018)';

const m = (slug, protocoles, verifie, extra = {}) => ({ slug, protocoles, verifie, ...extra });

module.exports = {
  lot: 'M01',
  date: '2026-10-19',
  titre: 'Molécules : antibiotiques',
  fiches: [],
  molecules: [
    m('acide-clavulanique', [MSF, AWARE], 'Association à l’amoxicilline uniquement ; posologie exprimée en amoxicilline (8:1 ou 7:1) ; enfant 45–50 mg/kg/j en 2 prises ; contre-indication en cas d’hépatite antérieure sous l’association ; diarrhée ; éviter en cas de rupture prématurée des membranes.', {
      corrige: 'Plafond d’acide clavulanique per os aligné sur MSF : 375 mg/j chez l’adulte et 12,5 mg/kg/j chez l’enfant (la fiche indiquait 600 mg/j) ; jusqu’à 1 200 mg/j par voie IV.',
      corrections: [
        {
          champ: 'posologie',
          remplacer: [
            'ne pas dépasser 600 mg/j d’acide clavulanique chez l’adulte (IV : 1 200 mg/j).',
            'ne pas dépasser 375 mg/j d’acide clavulanique per os chez l’adulte et 12,5 mg/kg/j chez l’enfant (MSF) ; IV : jusqu’à 1 200 mg/j.',
          ],
        },
      ],
    }),
    m('acide-nalidixique', [BNF], 'Quinolone urinaire de 1re génération, 1 g 4 fois par jour chez l’adulte, 55 mg/kg/j chez l’enfant ; photosensibilisation, hypertension intracrânienne de l’enfant, hémolyse en cas de déficit en G6PD ; molécule obsolète (résistances).'),
    m('amikacine', [AWARE, TB], 'Aminoside de réserve : 15 mg/kg/j en une injection (formes graves 20–30 mg/kg), 15–20 mg/kg chez l’enfant, nouveau-né toutes les 24–48 h ; néphro- et ototoxicité, dosages au-delà de 5 jours ; à éviter pendant la grossesse sauf infection grave.'),
    m('amoxicilline', [MSF, AWARE, POCKET], 'Pneumonie de l’enfant 40 mg/kg/dose 2 fois par jour (PCIME), MAS 50–100 mg/kg/j en 2 prises, adulte 1 g 3 fois par jour ; allergie aux pénicillines ; éruption en cas de mononucléose ; utilisable pendant la grossesse.'),
    m('ampicilline', [MSF, POCKET], 'Nouveau-né 50 mg/kg toutes les 12 h la 1re semaine puis toutes les 8 h, enfant 50 mg/kg toutes les 6 h, avec la gentamicine ; relais oral par l’amoxicilline ; utilisable pendant la grossesse.'),
    m('azithromycine', [MSF, AWARE, 'GTFCC — Antibiotiques du choléra (2024)'], 'Choléra : 1 g (adulte, femme enceinte) ou 20 mg/kg (enfant) en dose unique ; autres indications 500 mg/j 3 jours ; allongement du QT.'),
    m('benzathine-benzylpenicilline', [MSF, IST, 'OMS — Guideline for the prevention, diagnosis and treatment of rheumatic fever and rheumatic heart disease (2024)'], 'Syphilis précoce 2,4 MUI IM dose unique, tardive 3 doses hebdomadaires, grossesse ; prévention du RAA 1,2 MUI toutes les 3–4 semaines ; enfant 50 000 UI/kg, angine 600 000 UI (< 30 kg) ou 1,2 MUI ; IM profonde stricte, jamais IV.'),
    m('benzylpenicilline-penicilline-g', [MSF, POCKET], 'Adulte 1–2 MUI toutes les 4–6 h, neurosyphilis et méningite 3–4 MUI toutes les 4 h ; enfant 50 000 UI/kg toutes les 6 h (méningite 100 000 UI/kg) ; nouveau-né toutes les 12 h avant 7 jours puis toutes les 8 h ; convulsions à forte dose en insuffisance rénale.'),
    m('cefadroxil', [BNF], 'Céphalosporine orale de 1re génération, 1–2 g/j, enfant 25–50 mg/kg/j ; allergie aux bêtalactamines.'),
    m('cefalexine', [MSF, BNF], 'Adulte 250–500 mg toutes les 6 h, enfant 25–50 mg/kg/j ; prudence en cas d’allergie grave aux pénicillines ; adaptation rénale.'),
    m('cefdinir', [BNF], 'Céphalosporine orale de 3e génération, 300 mg 2 fois par jour, enfant 14 mg/kg/j ; selles rouges avec le fer.'),
    m('cefepime', [AWARE], 'Céphalosporine de 4e génération (anti-Pseudomonas) : 2 g toutes les 8 h, enfant 50 mg/kg toutes les 8 h ; encéphalopathie en cas d’insuffisance rénale non adaptée.'),
    m('cefixime', [MSF, AWARE, IST], 'Adulte 200 mg 2 fois par jour, enfant 8 mg/kg/j (typhoïde 15–20 mg/kg/j), maximum 200 mg par prise ; utilisable pendant la grossesse.', {
      corrige: 'Gonococcie (si ceftriaxone impossible) : 800 mg en dose unique avec contrôle de guérison selon l’OMS 2024 (et non 400 mg), avec azithromycine 2 g si le contrôle est impossible ou en cas d’atteinte pharyngée.',
      corrections: [
        {
          posologie: { population: 'adulte', indication: 'Gonococcie non compliquée (si ceftriaxone indisponible)', voie: 'Orale' },
          champ: 'dose_texte',
          remplacer: [
            '400 mg en dose unique',
            '800 mg en dose unique (OMS 2024), avec contrôle de guérison ; + azithromycine 2 g si contrôle impossible ou atteinte pharyngée',
          ],
        },
      ],
    }),
    m('cefoperazone', [BNF], 'Céphalosporine injectable anti-Pseudomonas, 1–2 g toutes les 12 h, souvent avec le sulbactam ; troubles de l’hémostase (vitamine K), effet antabuse.'),
    m('cefotaxime', [MSF, POCKET], 'Adulte 1–2 g toutes les 8 h (méningite 2 g toutes les 4–6 h) ; enfant 50 mg/kg toutes les 8 h (méningite 75 mg/kg toutes les 6 h) ; nouveau-né toutes les 12 h avant 7 jours puis toutes les 8 h, préféré à la ceftriaxone en cas d’ictère.'),
    m('cefpodoxime-proxetil', [BNF], 'Céphalosporine orale de 3e génération, 100–200 mg 2 fois par jour, enfant 8 mg/kg/j ; adaptation rénale.'),
    m('ceftazidime', [AWARE], 'Anti-Pseudomonas : 2 g toutes les 8 h, enfant 50 mg/kg toutes les 8 h, nouveau-né toutes les 12 h la 1re semaine ; adaptation rénale.'),
    m('ceftriaxone', [MSF, AWARE, IST, 'OMS — Guidelines on meningitis diagnosis, treatment and care (2025)'], 'Méningite : adulte 2 g toutes les 12 h, enfant 100 mg/kg/j ; autres infections 1–2 g/j, enfant 50–80 mg/kg/j ; gonococcie 1 g IM (OMS 2024) ; contre-indiquée chez le nouveau-né ictérique ou prématuré et jamais avec du calcium IV chez le nouveau-né.'),
    m('cefuroxime', [BNF, AWARE], 'Per os 250–500 mg 2 fois par jour, IV 750 mg–1,5 g toutes les 8 h ; enfant 15 mg/kg 2 fois par jour per os ; adaptation rénale.'),
    m('chloramphenicol', [MSF, 'OMS — Méningite épidémique : chloramphénicol huileux'], 'Réservé en l’absence d’alternative : adulte 1 g toutes les 6–8 h, enfant 25 mg/kg toutes les 6–8 h, nouveau-né 12,5 mg/kg toutes les 12 h si indispensable (syndrome gris) ; forme huileuse 100 mg/kg IM dose unique (maximum 3 g) en épidémie ; aplasie médullaire.'),
    m('ciprofloxacine', [MSF, AWARE, 'OMS — Guidelines for the control of shigellosis (2005)'], 'Choléra 1 g dose unique, shigellose 500 mg 2 fois par jour 3 jours, enfant 15 mg/kg 2 fois par jour ; tendinopathies, QT, chélation par les cations ; à éviter pendant la grossesse sauf absence d’alternative.'),
    m('clarithromycine', [MSF, AWARE], 'Adulte 500 mg 2 fois par jour (H. pylori, pneumonie, Buruli), enfant 7,5 mg/kg 2 fois par jour ; interactions CYP3A4, QT ; à éviter au 1er trimestre.'),
    m('clindamycine', [MSF, AWARE], 'Adulte 600 mg IV toutes les 8 h ou 300–450 mg per os toutes les 6–8 h, enfant 10 mg/kg toutes les 8 h ; effet antitoxinique (fasciite) ; colite à C. difficile ; utilisable pendant la grossesse.'),
    m('cloxacilline', [MSF, AWARE], 'Adulte 1 g per os toutes les 6–8 h à jeun, 2 g IV toutes les 6 h si grave ; enfant 25 mg/kg toutes les 6 h (jusqu’à 50 mg/kg IV) ; nouveau-né toutes les 12 h avant 7 jours puis toutes les 8 h ; inactive sur SARM.'),
    m('dapsone', [MSF, LEPRE], 'Lèpre : adulte 100 mg/j ; hémolyse (G6PD), méthémoglobinémie, syndrome d’hypersensibilité ; prophylaxie de la pneumocystose 100 mg/j.', {
      corrige: 'Polychimiothérapie de la lèpre alignée sur l’OMS 2018 et MSF : dapsone toujours associée à la rifampicine ET à la clofazimine ; enfant de moins de 10 ans : 2 mg/kg/j (et non 25 mg/j fixes).',
      corrections: [
        {
          posologie: { population: 'adulte', indication: 'Lèpre (polychimiothérapie OMS) ; prophylaxie de la pneumocystose si intolérance au cotrimoxazole', voie: 'Orale' },
          champ: 'dose_texte',
          remplacer: ['100 mg/j (avec rifampicine ± clofazimine)', '100 mg/j (lèpre : avec rifampicine et clofazimine, polychimiothérapie OMS à 3 médicaments)'],
        },
        {
          posologie: { population: 'enfant', indication: 'Lèpre', voie: 'Orale' },
          champ: 'dose_texte',
          remplacer: ['2 mg/kg/j (10–14 ans : 50 mg/j ; < 10 ans : 25 mg/j)', '< 10 ans : 2 mg/kg/j ; 10–14 ans : 50 mg/j'],
        },
      ],
    }),
    m('doxycycline', [MSF, AWARE, 'GTFCC — Antibiotiques du choléra (2024)'], 'Choléra 300 mg dose unique chez l’adulte, 100 mg 2 fois par jour pour les autres indications ; œsophagite, photosensibilisation ; chélation ; à éviter en traitement prolongé pendant la grossesse et avant 8 ans.'),
    m('erythromycine', [MSF, 'ORACLE I — Antibiotiques dans la rupture prématurée des membranes'], 'Adulte 500 mg 4 fois par jour, enfant et nouveau-né 12,5 mg/kg 4 fois par jour (sténose du pylore avant 2 semaines) ; RPM 250 mg 4 fois par jour 10 jours ; interactions CYP3A4.'),
    m('flucloxacilline', [BNF], 'Adulte 500 mg–1 g 4 fois par jour per os ou 1–2 g IV toutes les 6 h, enfant 12,5–25 mg/kg 4 fois par jour ; hépatite cholestatique rare.'),
    m('fosfomycine', [MSF, AWARE], 'Cystite simple de la femme : 3 g en dose unique, utilisable pendant la grossesse ; ne convient pas à la pyélonéphrite.'),
    m('gentamicine', [MSF, POCKET], 'Nouveau-né 5 mg/kg/24 h (3 mg/kg si petit poids la 1re semaine), 7,5 mg/kg après ; enfant et adulte 5–7 mg/kg en une injection par jour ; durée courte, créatinine ; à éviter pendant la grossesse sauf infection grave.'),
    m('imipeneme-cilastatine', [AWARE], 'Réserve : 500 mg toutes les 6 h ou 1 g toutes les 8 h (maximum 4 g/j), enfant 15–25 mg/kg toutes les 6 h ; convulsions (préférer le méropénème en cas d’atteinte neurologique) ; adaptation rénale.'),
    m('kanamycine', [TB], 'Aminoside injectable, 15 mg/kg/j ; retiré des schémas OMS de la tuberculose résistante ; oto- et néphrotoxicité.'),
    m('levofloxacine', [AWARE, TB], 'Adulte 500–750 mg/j (tuberculose résistante 750–1 000 mg/j), enfant 15–20 mg/kg/j ; tendinopathies, QT, dysglycémies.'),
    m('lincomycine', [BNF], 'Lincosamide (allergie aux pénicillines), 500 mg 3–4 fois par jour per os ; colite pseudomembraneuse.'),
    m('linezolide', [AWARE, TB], 'Réserve : 600 mg 2 fois par jour (tuberculose résistante BPaLM 600 mg/j), enfant < 12 ans 10 mg/kg toutes les 8 h ; myélosuppression, neuropathies au-delà de 28 jours, syndrome sérotoninergique.'),
    m('meropeneme', [AWARE], 'Réserve : 1 g toutes les 8 h (2 g si méningite), enfant 20 mg/kg (40 mg/kg si méningite), nouveau-né toutes les 12 h la 1re semaine ; diminue les taux de valproate ; adaptation rénale.'),
    m('metronidazole', [MSF, AWARE], 'Adulte 500 mg toutes les 8 h (orale aussi efficace que l’IV), enfant 7,5–10 mg/kg toutes les 8 h ; effet antabuse, interaction avec les AVK ; utilisable pendant la grossesse si nécessaire.'),
    m('moxifloxacine', [TB], 'Adulte 400 mg/j, enfant 10–15 mg/kg/j (tuberculose résistante) ; QT, tendinopathies.'),
    m('neomycine', [BNF], 'Usage local ou digestif, durée limitée ; allergie de contact ; toxicité si absorption.'),
    m('nitrofurantoine', [MSF, AWARE], 'Cystite : 100 mg 2 fois par jour (LP) ou 50–100 mg 4 fois par jour, enfant ≥ 3 mois 1,5 mg/kg 4 fois par jour ; contre-indiquée si DFG < 45 mL/min et à terme ; pas de traitement prolongé.'),
    m('norfloxacine', [BNF], '400 mg 2 fois par jour ; prophylaxie de l’infection d’ascite 400 mg/j ; déconseillée chez l’enfant et pendant la grossesse.'),
    m('ofloxacine', [BNF, AWARE], '200–400 mg 2 fois par jour per os ; gouttes et collyre à 0,3 % ; voie orale à éviter chez l’enfant et pendant la grossesse.'),
    m('ornidazole', [BNF], 'Nitro-imidazolé, 500 mg 2 fois par jour 5–10 jours ; pas d’alcool.'),
    m('penicilline-procaine-benzathine', [MSF, IST], 'Pénicilline procaïne 1,2 MUI IM/j (neurosyphilis 2,4 MUI/j avec probénécide), enfant 50 000 UI/kg/j, syphilis congénitale 10 jours ; IM stricte.'),
    m('phenoxymethylpenicilline', [MSF, 'NHLBI — Evidence-based management of sickle cell disease (2014)'], 'Prophylaxie de la drépanocytose : 125 mg 2 fois par jour avant 3 ans, 250 mg 2 fois par jour de 3 à 5 ans ; angine 10 jours.'),
    m('piperacilline', [AWARE], 'Pipéracilline-tazobactam 4 g/0,5 g toutes les 6–8 h, enfant 90 mg/kg de pipéracilline ; adaptation rénale.'),
    m('polymyxine-b', [AWARE], 'Usage local ; voie IV de réserve (1,5–2,5 mg/kg/j) ; néphro- et neurotoxicité.'),
    m('rifamycine-sv', [BNF], 'Usage local ; coloration orangée.'),
    m('secnidazole', [BNF], '2 g en dose unique (adulte), 30 mg/kg chez l’enfant ; pas d’alcool ; à éviter au 1er trimestre.'),
    m('spectinomycine', [IST], 'Gonococcie : 2 g IM en dose unique (alternative en cas d’allergie aux céphalosporines).'),
    m('spiramycine', [BNF, 'HAS — Toxoplasmose et grossesse'], 'Adulte 3 MUI 2–3 fois par jour, enfant 150 000–300 000 UI/kg/j ; toxoplasmose maternelle 9 MUI/j jusqu’à l’accouchement, pyriméthamine-sulfadiazine si infection fœtale prouvée.'),
    m('spiramycine-rovamycine', [BNF], 'Doublon de la spiramycine (6–9 MUI/j).'),
    m('streptomycine', [MSF, 'OMS — Plague manual : traitement (2021)'], 'Peste 1 g IM toutes les 12 h (enfant 15 mg/kg toutes les 12 h) 10 jours ; 15 mg/kg/j dans les autres indications ; contre-indiquée pendant la grossesse (surdité congénitale).'),
    m('sulbactam', [BNF], 'Associé à une bêtalactamine, maximum 4 g/j de sulbactam ; adaptation rénale.'),
    m('sulfadiazine', [MSF, 'CDC/NIH — Guidelines for opportunistic infections : toxoplasmose'], 'Toxoplasmose : 1 g (< 60 kg) ou 1,5 g (≥ 60 kg) 4 fois par jour avec pyriméthamine et acide folinique, enfant 50 mg/kg 2 fois par jour ; hydratation (cristallurie) ; allergie aux sulfamides.'),
    m('sulfamethoxazole', [MSF], 'Uniquement associé au triméthoprime (cotrimoxazole) ; allergie aux sulfamides, déficit en G6PD.'),
    m('tazobactam', [AWARE], 'Toujours associé à la pipéracilline (4 g/0,5 g toutes les 6–8 h, enfant 90 mg/kg de pipéracilline).'),
    m('tetracycline', [MSF, 'OMS — Trachome et prophylaxie de l’ophtalmie du nouveau-né'], 'Pommade ophtalmique 1 % (trachome 2 fois par jour 6 semaines, prophylaxie néonatale) ; voie orale 250–500 mg 4 fois par jour, contre-indiquée avant 8 ans et aux 2e–3e trimestres.'),
    m('thiamphenicol', [BNF], '1,5–2 g/j en 2–3 prises ; toxicité hématologique réversible.'),
    m('tinidazole', [MSF], '2 g dose unique (3 jours pour l’amibiase), enfant 50 mg/kg ; effet antabuse ; préférer le métronidazole au 1er trimestre.'),
    m('trimethoprime', [MSF], 'Associé au sulfaméthoxazole (160/800 mg 2 fois par jour) ; hyperkaliémie, cytopénies.'),
    m('tyrothricine', [BNF], 'Usage local buccal ; allergie.'),
    m('vancomycine', [AWARE, 'ASHP/IDSA/PIDS/SIDP — Therapeutic monitoring of vancomycin (2020)'], 'Adulte 15–20 mg/kg toutes les 8–12 h (charge 25–30 mg/kg), enfant 15 mg/kg toutes les 6 h ; C. difficile 125 mg per os 4 fois par jour ; perfusion d’au moins 1 h (red man syndrome) ; néphrotoxicité, suivi des concentrations.'),
  ],
};
