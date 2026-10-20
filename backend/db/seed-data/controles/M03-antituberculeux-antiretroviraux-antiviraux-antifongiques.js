'use strict';

/**
 * Contrôle de conformité — lot M03 : antituberculeux et antilépreux, antirétroviraux, antiviraux,
 * antifongiques (43 fiches pharmacologiques et leurs posologies).
 */

const TB = 'OMS — Consolidated guidelines on tuberculosis, modules 4 (traitement, 2022) et 1 (prévention, 2024)';
const VIH = 'OMS — Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring (2021, mises à jour 2023)';
const LEPRE = 'OMS — Guidelines for the diagnosis, treatment and prevention of leprosy (2018)';
const MSF = 'MSF — Médicaments essentiels (guide en ligne, mise à jour 2024)';
const CRYPTO = 'OMS — Guidelines for diagnosing, preventing and managing cryptococcal disease (2022)';
const VHC = 'OMS — Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C (2022)';
const EBOLA = 'OMS — Therapeutics for Ebola virus disease : guideline (2022)';
const BNF = 'BNF / BNF for Children — monographies (2024)';

const m = (slug, protocoles, verifie, extra = {}) => ({ slug, protocoles, verifie, ...extra });

module.exports = {
  lot: 'M03',
  date: '2026-10-19',
  titre: 'Molécules : antituberculeux, antirétroviraux, antiviraux, antifongiques',
  fiches: [],
  molecules: [
    m('bedaquiline', [TB], 'BPaLM et schémas longs : 400 mg/j 2 semaines puis 200 mg 3 fois par semaine (ou 200 mg/j 8 semaines puis 100 mg/j) ; QT (ECG, kaliémie), hépatotoxicité.'),
    m('clofazimine', [LEPRE, TB], 'Lèpre : 300 mg par mois supervisé + 50 mg/j chez l’adulte, schémas enfant (10–14 ans et < 10 ans) ; réaction de type 2 jusqu’à 300 mg/j sur une courte durée ; tuberculose résistante 100 mg/j ; coloration cutanée, QT.', {
      corrige: 'Indication alignée sur l’OMS 2018 : la clofazimine fait partie de la polychimiothérapie de toutes les lèpres (paucibacillaires et multibacillaires), et non des seules formes multibacillaires.',
      corrections: [
        {
          champ: 'indications',
          remplacer: [
            'Lèpre multibacillaire (polychimiothérapie OMS)',
            'Lèpre paucibacillaire et multibacillaire (polychimiothérapie OMS à 3 médicaments pour tous depuis 2018)',
          ],
        },
      ],
    }),
    m('isoniazide', [TB, MSF], 'Traitement 5 mg/kg/j (maximum 300 mg), enfant 10 mg/kg ; TPT 300 mg/j 6 mois ; hépatite, neuropathie prévenue par la pyridoxine ; utilisable pendant la grossesse avec pyridoxine.'),
    m('pretomanide', [TB], 'BPaL/BPaLM à partir de 14 ans : 200 mg/j avec bédaquiline et linézolide (± moxifloxacine) ; hépatotoxicité ; données insuffisantes pendant la grossesse.'),
    m('rifapentine', [TB], '3HP : 900 mg + isoniazide 900 mg par semaine 12 semaines (enfant ≥ 2 ans selon le poids) ; 1HP : 600 mg/j + isoniazide 300 mg/j 1 mois ; inducteur (compatible avec dolutégravir et éfavirenz).'),
    m('abacavir', [VIH, MSF], 'Enfant 8 mg/kg 2 fois par jour ou 16 mg/kg/j, adulte 600 mg/j ; syndrome d’hypersensibilité (HLA-B*5701) : arrêt définitif, jamais de réintroduction.'),
    m('atazanavir', [VIH], 'Atazanavir/ritonavir 300/100 mg/j en 2e ligne ; hyperbilirubinémie, interactions.'),
    m('darunavir', [VIH], 'Darunavir/ritonavir 800/100 mg/j, 600/100 mg 2 fois par jour si prétraité ; éruption, interactions.'),
    m('dolutegravir', [VIH, MSF], '50 mg/j (2 fois par jour avec la rifampicine), comprimés dispersibles de l’enfant selon le poids (5 à 25 mg, 50 mg dès 20 kg) ; cations à espacer, metformine ; recommandé pendant la grossesse.'),
    m('efavirenz', [VIH, MSF], '600 mg (400 mg possible) au coucher, enfant ≥ 3 ans et ≥ 10 kg selon le poids ; troubles neuropsychiques, inducteur (implant moins efficace).'),
    m('etravirine', [VIH], '200 mg 2 fois par jour après le repas ; éruption, interactions.'),
    m('lamivudine', [VIH, MSF], 'Adulte 300 mg/j, enfant 4 mg/kg 2 fois par jour ; active sur le VHB (jamais seule chez le porteur du VHB) ; adaptation rénale.'),
    m('lopinavir', [VIH], 'Lopinavir/ritonavir 400/100 mg 2 fois par jour, enfant selon les bandes de poids ; interactions (rifampicine), troubles digestifs, dyslipidémie.'),
    m('nevirapine', [VIH, MSF], 'Adulte 200 mg/j 14 jours puis 2 fois par jour ; prophylaxie du nourrisson exposé selon le poids (2 mg/kg, 10 mg, 15 mg) ; hépatotoxicité et éruptions graves les premières semaines.'),
    m('raltegravir', [VIH], '400 mg 2 fois par jour ; formes pédiatriques selon le poids.'),
    m('ritonavir', [VIH], 'Booster 100 mg 1–2 fois par jour d’un inhibiteur de protéase ; inhibiteur puissant du CYP3A4.'),
    m('tenofovir-disoproxil', [VIH, 'OMS — Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection (2024)'], '300 mg/j (VIH, VHB, PrEP, prévention de la transmission du VHB) ; tubulopathie, adaptation si clairance < 50 mL/min ; pas d’arrêt brutal chez le porteur du VHB ; recommandé pendant la grossesse.'),
    m('zidovudine', [VIH, MSF], 'Adulte 300 mg 2 fois par jour, enfant selon le poids, nourrisson exposé à haut risque 4 mg/kg 2 fois par jour ; anémie, neutropénie (éviter si Hb < 8 g/dL).'),
    m('aciclovir', [MSF, BNF, 'IDSA — The management of encephalitis (2008)'], 'Herpès 400 mg 3 fois par jour, zona 800 mg 5 fois par jour, encéphalite 10 mg/kg IV toutes les 8 h chez l’adulte, nouveau-né 20 mg/kg toutes les 8 h, gingivostomatite 15 mg/kg 5 fois par jour ; hydratation, adaptation rénale.', {
      corrige: 'Encéphalite herpétique de l’enfant : 20 mg/kg IV toutes les 8 h de 3 mois à 12 ans (10 mg/kg au-delà), comme dans la fiche « Méningo-encéphalite de l’enfant » et le BNFc (la molécule indiquait 10–15 mg/kg).',
      corrections: [
        {
          posologie: { population: 'enfant', indication: 'Encéphalite herpétique', voie: 'IV' },
          champ: 'dose_texte',
          remplacer: ['10–15 mg/kg IV toutes les 8 h', '3 mois–12 ans : 20 mg/kg IV toutes les 8 h ; ≥ 12 ans : 10 mg/kg IV toutes les 8 h'],
        },
        {
          posologie: { population: 'enfant', indication: 'Encéphalite herpétique', voie: 'IV' },
          champ: 'dose_par_kg',
          ancienne: '10.000',
          valeur: '20.000',
        },
      ],
    }),
    m('ansuvimab', [EBOLA], 'Ebola (Zaïre) confirmé : 50 mg/kg IV en dose unique, dès la naissance ; sans effet sur les virus Soudan et Bundibugyo.'),
    m('atoltivimab-maftivimab-odesivimab', [EBOLA], 'Ebola (Zaïre) confirmé : 50 mg de chaque anticorps/kg (3 mL/kg) IV en dose unique, dès la naissance.'),
    m('daclatasvir', [VHC], '60 mg/j avec sofosbuvir (30 mg avec les inhibiteurs puissants du CYP3A4, 90 mg avec l’éfavirenz) ; dépister le VHB ; pas d’amiodarone ; traiter après l’accouchement.'),
    m('molnupiravir', ['OMS — Therapeutics and COVID-19 : living guideline (2023)'], '800 mg 2 fois par jour 5 jours ; tératogène (contraception).'),
    m('oseltamivir', ['OMS — Clinical practice guidelines for influenza (2024)', 'CDC — Influenza antiviral medications (2024)'], 'Adulte 75 mg 2 fois par jour 5 jours (prophylaxie 75 mg/j 10 jours), enfant ≥ 1 an selon le poids (30 à 75 mg), nourrisson < 1 an 3 mg/kg ; adaptation rénale ; utilisable pendant la grossesse.', {
      corrige: 'Indications alignées sur la fiche « Grippe » (correction C01) : oseltamivir pour les formes graves ou hospitalisées ; dans les formes non graves à risque élevé, l’OMS 2024 préfère le baloxavir et déconseille l’oseltamivir, que les CDC recommandent encore (point à arbitrer dans la fiche « Grippe »).',
      corrections: [
        {
          champ: 'indications',
          remplacer: [
            'Grippe grave ou chez les patients à risque de complications (grossesse, enfant < 2 ans, sujet âgé, maladies chroniques, immunodépression) ;',
            'Grippe grave ou hospitalisée (OMS 2024) ; formes non graves à risque élevé (grossesse, enfant < 2 ans, sujet âgé, maladies chroniques, immunodépression) : l’OMS préfère le baloxavir et déconseille l’oseltamivir, les CDC le recommandent (selon le protocole national) ;',
          ],
        },
      ],
    }),
    m('remdesivir', ['OMS — Therapeutics and COVID-19 : living guideline (2023)'], '200 mg IV à J1 puis 100 mg/j, enfant ≥ 3 kg 5 mg/kg puis 2,5 mg/kg ; transaminases, bradycardie.'),
    m('sofosbuvir', [VHC], '400 mg/j avec daclatasvir ou velpatasvir 12 semaines ; amiodarone contre-indiquée (bradycardie) ; dépister le VHB ; traiter après l’accouchement.'),
    m('valaciclovir', [BNF], 'Zona 1 g 3 fois par jour 7 jours, herpès génital 500 mg–1 g 2 fois par jour, suppression 500 mg/j, enfant 20 mg/kg 3 fois par jour (maximum 1 g) ; adaptation rénale.'),
    m('valganciclovir', [BNF, 'Kimberlin et al. — Valganciclovir for symptomatic congenital CMV disease (N Engl J Med 2015)'], 'CMV congénital symptomatique : 16 mg/kg 2 fois par jour 6 mois débuté dans le 1er mois ; rétinite à CMV 900 mg 2 fois par jour 21 jours puis 900 mg/j ; neutropénie (NFS), adaptation rénale ; contre-indiqué pendant la grossesse.'),
    m('velpatasvir', [VHC], 'Sofosbuvir-velpatasvir 400/100 mg 1 comprimé par jour (pangénotypique) ; éviter les IPP à forte dose et les inducteurs ; amiodarone contre-indiquée.'),
    m('amphotericine-b', [CRYPTO, MSF], 'Cryptococcose : liposomale 10 mg/kg en dose unique avec flucytosine et fluconazole (OMS 2022) ; désoxycholate 1 mg/kg/j, liposomale 3 mg/kg/j ; préhydratation, potassium et magnésium, créatinine et kaliémie 2–3 fois par semaine ; utilisable pendant la grossesse.'),
    m('ciclopirox-olamine', [BNF], 'Crème 1 % 2 fois par jour 2–4 semaines ; vernis pour les onychomycoses.'),
    m('clotrimazole', [MSF], 'Crème 1 % 2–3 fois par jour ; comprimé vaginal 500 mg en dose unique (ou 200 mg/j 3 jours) ; utilisable pendant la grossesse.'),
    m('econazole', [BNF], 'Crème 1 % 2 fois par jour, ovule 150 mg 3 soirs.'),
    m('fluconazole', [CRYPTO, MSF], 'Candidose vaginale 150 mg dose unique ; oropharyngée ou œsophagienne 200 mg puis 100–200 mg/j ; cryptococcose 1 200 mg/j en induction puis 800 puis 200 mg/j ; enfant 3–6 mg/kg/j (12 mg/kg/j dans la cryptococcose) ; QT, interactions ; éviter les fortes doses prolongées pendant la grossesse.'),
    m('flucytosine', [CRYPTO, MSF], 'Cryptococcose : 25 mg/kg 4 fois par jour (100 mg/kg/j) 14 jours en association ; myélotoxicité (NFS, créatinine chaque semaine) ; adaptation rénale.'),
    m('griseofulvine', [MSF, 'British Association of Dermatologists — Tinea capitis (2014)'], 'Adulte 500 mg–1 g/j, enfant 20–25 mg/kg/j au repas gras (maximum 1 g), 6–8 semaines pour la teigne ; inducteur enzymatique ; contre-indiquée pendant la grossesse (contraception pendant et 1 mois après, 6 mois chez l’homme).'),
    m('itraconazole', [BNF], '200 mg 1–2 fois par jour au repas, enfant 5 mg/kg/j ; contre-indiqué en cas d’insuffisance cardiaque ; interactions CYP3A4 ; bilan hépatique.'),
    m('ketoconazole', [BNF], 'Usage local (crème, gel moussant 2 %) ; voie orale abandonnée (hépatotoxicité).'),
    m('miconazole-nitrate', [MSF], 'Crème 2 % 2 fois par jour ; gel buccal 2,5 mL 4 fois par jour (1,25 mL chez le nourrisson ≥ 4 mois, risque de fausse route) ; gel buccal contre-indiqué avec la warfarine.'),
    m('nystatine', [MSF], 'Muguet : 100 000 UI 4 fois par jour (nourrisson), jusqu’à 400 000–600 000 UI chez l’adulte, traiter les mamelons de la mère ; ovule 100 000 UI 14 jours ; non absorbée.'),
    m('sertaconazole', [BNF], 'Antifongique local 1–2 fois par jour 2–4 semaines.'),
    m('terbinafine', [BNF, 'British Association of Dermatologists — Tinea capitis (2014)'], '250 mg/j, enfant < 20 kg 62,5 mg, 20–40 kg 125 mg ; crème 1 % ; bilan hépatique ; voie orale à éviter pendant la grossesse.'),
    m('tolnaftate', [BNF], 'Antifongique local 2 fois par jour 2–6 semaines.'),
  ],
};
