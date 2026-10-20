'use strict';

/**
 * Contrôle de conformité — lot M02 : molécules antipaludiques et antiparasitaires (31 fiches
 * pharmacologiques et leurs posologies). Références : recommandations OMS sur le paludisme,
 * la THA, les schistosomiases, les géohelminthiases et la filariose ; guide MSF Médicaments essentiels.
 */

const PALU = 'OMS — WHO guidelines for malaria (version consolidée 2024–2025)';
const MSF = 'MSF — Médicaments essentiels (guide en ligne, mise à jour 2024)';
const THA = 'OMS — Guidelines for the treatment of human African trypanosomiasis (2024) et PNLTHA RDC';
const SCHISTO = 'OMS — Guideline on control and elimination of human schistosomiasis (2022)';
const STH = 'OMS — Preventive chemotherapy to control soil-transmitted helminth infections (2017)';
const FL = 'OMS — Alternative mass drug administration regimens to eliminate lymphatic filariasis (2017)';
const BNF = 'BNF / BNF for Children — monographies (2024)';

const m = (slug, protocoles, verifie, extra = {}) => ({ slug, protocoles, verifie, ...extra });

module.exports = {
  lot: 'M02',
  date: '2026-10-19',
  titre: 'Molécules : antipaludiques et antiparasitaires',
  fiches: [],
  molecules: [
    m('amodiaquine', [PALU, MSF], 'ASAQ : 10 mg/kg/j d’amodiaquine base 3 jours, adulte ≥ 36 kg 2 comprimés de 100/270 mg par jour ; hépatotoxicité et agranulocytose (traitements répétés), éviter avec l’éfavirenz ; 2e–3e trimestres, artéméther-luméfantrine préféré au 1er.'),
    m('artemether', [PALU, MSF], 'IM du paludisme grave si artésunate indisponible : 3,2 mg/kg puis 1,6 mg/kg/24 h ; artéméther-luméfantrine en 6 prises sur 3 jours selon le poids (1 à 4 comprimés de 20/120 mg), avec un aliment gras, utilisable à tous les trimestres (OMS 2022) ; inducteurs du CYP3A4.'),
    m('artemisinine', [PALU], 'Jamais en monothérapie ; uniquement au sein d’une CTA.'),
    m('artesunate', [PALU, MSF], 'Paludisme grave : 2,4 mg/kg IV ou IM à H0, H12, H24 puis toutes les 24 h (3 mg/kg si < 20 kg), au moins 24 h puis CTA complète ; pré-transfert rectal 10 mg/kg chez l’enfant < 6 ans ; à tous les trimestres ; hémolyse retardée (Hb à J7, J14, J28).'),
    m('atovaquone', [PALU, BNF], 'Atovaquone-proguanil : 4 comprimés adulte par jour 3 jours, enfant selon le poids (11–40 kg) ; prophylaxie 1 comprimé/j ; pneumocystose 750 mg 2 fois par jour ; à éviter pendant la grossesse.'),
    m('dihydroartemisinine', [PALU], 'DHA-pipéraquine : 4 mg/kg/j de DHA 3 jours, au moins 2,5 mg/kg/j de DHA et 20 mg/kg/j de pipéraquine chez l’enfant < 25 kg, à jeun ; 2e–3e trimestres.'),
    m('lumefantrine', [PALU, MSF], 'Uniquement avec l’artéméther : 480 mg par prise chez l’adulte, 6 prises sur 3 jours avec un aliment gras ; redonner la dose si vomissement dans les 30 min ; rifampicine à éviter, QT.'),
    m('piperaquine', [PALU], 'DHA-pipéraquine : 18 mg/kg/j (20 mg/kg/j si < 25 kg) 3 jours, à jeun ; allongement du QT ; 2e–3e trimestres.'),
    m('proguanil', [BNF], 'Associé à l’atovaquone ; prophylaxie 100 mg/j.'),
    m('pyrimethamine', [MSF, 'CDC/NIH — Guidelines for opportunistic infections : toxoplasmose'], 'Toxoplasmose : 200 mg le 1er jour puis 50 mg/j (< 60 kg) ou 75 mg/j, avec sulfadiazine et acide folinique 10–25 mg/j ; congénitale 2 mg/kg/j 2 jours puis 1 mg/kg/j ; contre-indiquée au 1er trimestre.'),
    m('pyronaridine', [PALU], 'Pyronaridine-artésunate 3 jours selon le poids (comprimés 180/60 mg : 3 de 45 à 65 kg, 4 au-delà ; granulés chez l’enfant ≥ 5 kg) ; transaminases ; 2e–3e trimestres.'),
    m('quinine', [PALU, MSF], 'Si artésunate indisponible : charge 20 mg de sel/kg en 4 h (sauf quinine ou méfloquine dans les 12–24 h), puis 10 mg/kg toutes les 8 h en perfusion de 4 h, relais par une CTA ; hypoglycémie (glycémie toutes les 4 h), cinchonisme, QT ; jamais en IV directe.'),
    m('sulfadoxine', [PALU, MSF], 'TPIp : 3 comprimés de SP (500/25 mg) à chaque CPN dès 13 SA, à au moins 1 mois d’intervalle, pas si cotrimoxazole, acide folique ≤ 0,4 mg/j ; chimioprévention de l’enfant selon l’âge ; allergie aux sulfamides (Lyell).'),
    m('sulfalene-sulfametopyrazine', [BNF], 'Ancienne association avec la pyriméthamine ; allergie aux sulfamides.'),
    m('albendazole', [STH, MSF, 'IDSA/ASTMH — Clinical practice guidelines for neurocysticercosis (2017)'], '400 mg dose unique (200 mg de 1 à 2 ans) ; trichocéphalose intense ou strongyloïdose 400 mg/j 3 jours ; neurocysticercose 15 mg/kg/j (maximum 1 200 mg) avec corticoïdes ; à éviter au 1er trimestre, possible aux 2e–3e trimestres.'),
    m('benzoate-de-benzyle', [MSF], 'Lotion 25 % pendant 24 h, diluée à 1 pour 1 de 2 à 12 ans, à 1 pour 3 et 12 h avant 2 ans ; préférer la perméthrine pendant la grossesse ; traiter les contacts.'),
    m('diethylcarbamazine', [FL, MSF], 'Filariose lymphatique : 6 mg/kg (IDA, dose annuelle) ou 6 mg/kg/j 12 jours ; contre-indiquée en zone d’onchocercose (Mazzotti) et en cas de forte microfilarémie de Loa loa (encéphalopathie) ; loase seulement si microfilarémie < 2 000/mL ; contre-indiquée pendant la grossesse.'),
    m('eflornithine', [THA], 'NECT (stade 2 sévère) : 200 mg/kg IV toutes les 12 h 7 jours avec nifurtimox 5 mg/kg 3 fois par jour 10 jours ; hospitalisation ; convulsions, myélosuppression.'),
    m('fexinidazole', [THA], 'Stade 1 et stade 2 non sévère (LCR ≤ 100 leucocytes/µL), à partir de 6 ans et 20 kg : 1 800 mg/j 4 jours puis 1 200 mg/j 6 jours (≥ 35 kg), 1 200 puis 600 mg/j de 20 à 34 kg, au repas principal, prise supervisée ; QT.'),
    m('ivermectine', [MSF, 'OMS/APOC — Ivermectine et zones de coendémie de la loase'], 'Onchocercose 150 µg/kg tous les 6–12 mois, gale et strongyloïdose 200 µg/kg renouvelés ; précaution loase (microfilarémie élevée de Loa loa : encéphalopathie) ; non recommandée < 15 kg et pendant la grossesse.'),
    m('levamisole', [BNF], 'Anthelminthique 2,5 mg/kg dose unique ; agranulocytose rare.'),
    m('mebendazole', [STH, MSF], '500 mg dose unique ou 100 mg 2 fois par jour 3 jours dès 1 an ; oxyurose 100 mg renouvelé à 2–3 semaines ; à éviter au 1er trimestre.'),
    m('nifurtimox', [THA], 'NECT : 5 mg/kg 3 fois par jour 10 jours avec l’éflornithine, au repas ; troubles digestifs et neurologiques.'),
    m('paromomycine', [MSF, 'OMS — Control of the leishmaniases (TRS 949, 2010)'], 'Amœbicide de contact 25–35 mg/kg/j en 3 prises 7 jours ; leishmaniose viscérale d’Afrique de l’Est 15 mg/kg/j IM 17 jours avec stibogluconate (oto- et néphrotoxicité).'),
    m('pentamidine', [THA, MSF], 'THA stade 1 si fexinidazole impossible : 4 mg/kg/j IM ou IV lente 7 jours ; patient allongé et ayant mangé (hypotension, hypoglycémie) ; pneumocystose 4 mg/kg/j 21 jours.'),
    m('permethrine', [MSF], 'Gale : crème 5 % du cou aux pieds 8–12 h, renouvelée à J7–J14, dès 2 mois (cuir chevelu et visage chez le nourrisson) ; traitement de choix pendant la grossesse ; pédiculose : lotion 1 %.'),
    m('piperazine', [BNF], 'Anthelminthique ancien (75 mg/kg/j, maximum 3,5 g) ; neurotoxicité en surdosage.'),
    m('praziquantel', [SCHISTO, MSF, 'IDSA/ASTMH — Clinical practice guidelines for neurocysticercosis (2017)'], 'Schistosomiase 40 mg/kg en dose unique (ou en 2 prises), utilisable pendant la grossesse et dès 2 ans (OMS 2022) ; téniasis 5–10 mg/kg ; neurocysticercose 50 mg/kg/j en 3 prises avec l’albendazole.'),
    m('primaquine', [PALU], 'Dose unique faible de 0,25 mg/kg contre la transmission de P. falciparum, sans test G6PD ; cure radicale de P. vivax ou ovale 0,25–0,5 mg/kg/j 7 à 14 jours après test G6PD ; hémolyse en cas de déficit en G6PD ; contre-indiquée pendant la grossesse.', {
      a_arbitrer: 'L’OMS a assoupli les exclusions de la dose unique faible (versions de novembre 2024 puis 2025 : seule la grossesse reste exclue, plus les nourrissons de moins de 6 mois ni l’allaitement) et l’a étendue aux zones de transmission modérée à forte (version de septembre 2026) ; la fiche maintient « ≥ 6 mois » et l’exclusion de l’allaitement d’un enfant < 6 mois. À aligner sur la version OMS en vigueur et le programme national (PNLP).',
    }),
    m('pyrantel-embonate', [BNF], '10 mg/kg dose unique (maximum 1 g), dès 6 mois, oxyurose renouvelée à 2–3 semaines, ankylostomose 3 jours.'),
    m('tiliquinol-tilbroquinol', [BNF], 'Amœbicide de contact ancien ; neurotoxicité en usage prolongé.'),
  ],
};
