'use strict';

/**
 * Molécules des marques du répertoire fourni par le Dr Mingalu (19 octobre 2026), absentes de
 * MedRef — partie A : anti-infectieux, antalgiques, rhumatologie, gastro-entérologie. Fiches
 * rédigées à partir des références (BNF, RCP européens, OMS), à valider.
 */
module.exports = [
  {
    dci: 'Halofantrine',
    slug: 'halofantrine',
    classe: 'Antipaludiques (phénanthrène-méthanols)',
    groupe: 'Antipaludiques',
    mecanisme:
      'Schizonticide sanguin : inhibe la détoxification de l’hème dans la vacuole digestive du parasite.',
    indications:
      'Paludisme non compliqué (molécule ancienne, retirée de nombreux marchés et non recommandée par l’OMS en raison de sa cardiotoxicité : préférer une CTA).',
    posologie:
      'Adulte : 500 mg toutes les 6 h pour 3 prises, à jeun ; enfant : 8 mg/kg toutes les 6 h pour 3 prises.',
    contre_indications:
      'Allongement du QT congénital ou acquis, cardiopathie, prise récente de méfloquine, de quinine ou d’autres médicaments allongeant le QT, grossesse, allaitement.',
    effets_indesirables:
      'Allongement du QT, torsades de pointes et arythmies parfois mortelles ; troubles digestifs, prurit.',
    precautions: 'ECG avant traitement ; jamais avec un repas gras (absorption et toxicité accrues).',
  },
  {
    dci: 'Nitazoxanide',
    slug: 'nitazoxanide',
    classe: 'Thiazolides',
    groupe: 'Antiparasitaires',
    mecanisme:
      'Inhibe la pyruvate-ferrédoxine oxydoréductase, enzyme du métabolisme énergétique des protozoaires anaérobies.',
    indications:
      'Diarrhée à Cryptosporidium ou à Giardia de l’enfant (≥ 1 an) et de l’adulte immunocompétent.',
    posologie:
      'Pendant 3 jours, au cours d’un repas : 1–3 ans 100 mg 2 fois par jour ; 4–11 ans 200 mg 2 fois par jour ; ≥ 12 ans et adulte 500 mg 2 fois par jour.',
    contre_indications: 'Hypersensibilité.',
    effets_indesirables: 'Douleurs abdominales, nausées, céphalées, coloration jaune des urines.',
    precautions:
      'Efficacité limitée chez le patient VIH très immunodéprimé : la restauration immunitaire par les antirétroviraux reste essentielle.',
  },
  {
    dci: 'Téicoplanine',
    slug: 'teicoplanine',
    classe: 'Glycopeptides',
    groupe: 'Antibiotiques',
    mecanisme:
      'Inhibe la synthèse du peptidoglycane de la paroi des bactéries à Gram positif ; bactéricide lent.',
    indications:
      'Infections graves à Gram positif résistants (staphylocoque résistant à la méticilline, entérocoque) ou en cas d’allergie aux bêtalactamines ; réserve hospitalière.',
    posologie:
      'Adulte : charge 6 mg/kg (12 mg/kg dans les infections graves) toutes les 12 h pour 3 à 5 doses, puis 6–12 mg/kg une fois par jour IV ou IM ; enfant : charge 10 mg/kg toutes les 12 h pour 3 doses puis 6–10 mg/kg/j ; adapter à la fonction rénale.',
    contre_indications: 'Hypersensibilité à la téicoplanine.',
    effets_indesirables:
      'Réactions au point d’injection, éruptions, fièvre, thrombopénie, élévation des transaminases ; néphro- et ototoxicité moindres qu’avec la vancomycine.',
    precautions:
      'Taux résiduels dans les infections graves, créatinine, NFS, audition en traitement prolongé.',
  },
  {
    dci: 'Tigécycline',
    slug: 'tigecycline',
    classe: 'Glycylcyclines',
    groupe: 'Antibiotiques',
    mecanisme:
      'Inhibe la sous-unité 30S du ribosome bactérien ; spectre large incluant des bactéries multirésistantes.',
    indications:
      'Infections compliquées de la peau et intra-abdominales à bactéries multirésistantes, en l’absence d’alternative (antibiotique de réserve).',
    posologie:
      '100 mg IV puis 50 mg toutes les 12 h pendant 5 à 14 jours ; adaptation en insuffisance hépatique sévère.',
    contre_indications: 'Hypersensibilité aux cyclines ; grossesse ; enfant de moins de 8 ans.',
    effets_indesirables:
      'Nausées et vomissements fréquents, pancréatite, hépatotoxicité, troubles de la coagulation ; surmortalité observée dans les essais (à réserver).',
    precautions:
      'Bilan hépatique et hémostase ; inefficace dans les bactériémies et les infections urinaires.',
  },
  {
    dci: 'Daptomycine',
    slug: 'daptomycine',
    classe: 'Lipopeptides',
    groupe: 'Antibiotiques',
    mecanisme: 'Dépolarise la membrane des bactéries à Gram positif ; bactéricide rapide.',
    indications:
      'Infections compliquées de la peau, bactériémies et endocardites du cœur droit à Staphylococcus aureus, y compris résistant à la méticilline.',
    posologie:
      '4 mg/kg/j IV (peau) à 6 mg/kg/j (bactériémie, endocardite), jusqu’à 8–10 mg/kg/j sur avis spécialisé ; toutes les 48 h si clairance < 30 mL/min.',
    contre_indications: 'Hypersensibilité ; inefficace dans la pneumonie (inactivée par le surfactant).',
    effets_indesirables:
      'Myopathie et élévation des CPK, rhabdomyolyse, pneumopathie à éosinophiles, troubles digestifs.',
    precautions: 'CPK chaque semaine ; suspendre les statines pendant le traitement.',
  },
  {
    dci: 'Voriconazole',
    slug: 'voriconazole',
    classe: 'Triazolés systémiques',
    groupe: 'Antifongiques',
    mecanisme: 'Inhibe la 14-α-déméthylase fongique et la synthèse de l’ergostérol ; actif sur Aspergillus.',
    indications:
      'Aspergillose invasive (1re intention), candidoses invasives résistantes au fluconazole, fusarioses et scédosporioses.',
    posologie:
      'IV : 6 mg/kg toutes les 12 h le 1er jour puis 4 mg/kg toutes les 12 h ; per os, à jeun : 400 mg toutes les 12 h le 1er jour puis 200 mg toutes les 12 h (adulte ≥ 40 kg) ; enfant selon le poids (avis spécialisé).',
    contre_indications:
      'Association à la rifampicine, à la carbamazépine, au phénobarbital, à l’éfavirenz à forte dose, au ritonavir à forte dose, aux dérivés de l’ergot de seigle.',
    effets_indesirables:
      'Troubles visuels transitoires, hallucinations, hépatotoxicité, photosensibilité et cancers cutanés en traitement prolongé, allongement du QT.',
    precautions:
      'Dosage de la concentration résiduelle, bilan hépatique, ECG ; éviter pendant la grossesse ; protection solaire.',
  },
  {
    dci: 'Posaconazole',
    slug: 'posaconazole',
    classe: 'Triazolés systémiques',
    groupe: 'Antifongiques',
    mecanisme:
      'Inhibe la synthèse de l’ergostérol (14-α-déméthylase) ; spectre large incluant les mucorales.',
    indications:
      'Prophylaxie des infections fongiques invasives (leucémie aiguë, greffe), mucormycose en relais, aspergillose réfractaire.',
    posologie:
      'Comprimés gastrorésistants : 300 mg 2 fois par jour le 1er jour puis 300 mg une fois par jour, au cours d’un repas.',
    contre_indications:
      'Association aux dérivés de l’ergot de seigle, à la simvastatine, à certains médicaments allongeant le QT.',
    effets_indesirables: 'Troubles digestifs, hépatotoxicité, allongement du QT, hypokaliémie.',
    precautions: 'Nombreuses interactions (inhibiteur puissant du CYP3A4) ; bilan hépatique, kaliémie, ECG.',
  },
  {
    dci: 'Caspofungine',
    slug: 'caspofungine',
    classe: 'Échinocandines',
    groupe: 'Antifongiques',
    mecanisme: 'Inhibe la synthèse du β-1,3-D-glucane de la paroi fongique ; fongicide sur Candida.',
    indications:
      'Candidémie et candidose invasive, aspergillose invasive réfractaire, traitement empirique de la neutropénie fébrile persistante.',
    posologie:
      'Adulte : 70 mg IV le 1er jour puis 50 mg/j (70 mg/j au-delà de 80 kg ; 35 mg/j en insuffisance hépatique modérée) ; enfant : 70 mg/m² puis 50 mg/m²/j (maximum 70 mg).',
    contre_indications: 'Hypersensibilité.',
    effets_indesirables:
      'Fièvre, phlébite, élévation des transaminases, réactions de type histaminique, hypokaliémie.',
    precautions: 'Augmenter la dose avec les inducteurs (rifampicine) ; prudence avec la ciclosporine.',
  },
  {
    dci: 'Naproxène',
    slug: 'naproxene',
    classe: 'AINS',
    groupe: 'Antalgiques et anti-inflammatoires',
    mecanisme:
      'Inhibition des cyclo-oxygénases (COX-1 et COX-2) : effet antalgique, anti-inflammatoire et antipyrétique.',
    indications: 'Douleurs aiguës, rhumatismes inflammatoires et arthrose, dysménorrhée, crise de goutte.',
    posologie:
      '250–500 mg 2 fois par jour au cours des repas (maximum 1 000 mg/j), à la dose minimale et pour la durée la plus courte.',
    contre_indications:
      'Ulcère évolutif ou antécédent d’hémorragie digestive, insuffisances rénale, hépatique ou cardiaque sévères, allergie aux AINS, grossesse à partir du 6e mois.',
    effets_indesirables:
      'Douleurs gastriques, ulcère et hémorragie digestive, insuffisance rénale, rétention hydrosodée, HTA, risque cardiovasculaire.',
    precautions:
      'IPP si risque digestif ; éviter chez le drépanocytaire déshydraté et avec les anticoagulants.',
  },
  {
    dci: 'Insaponifiables d’avocat et de soja',
    slug: 'insaponifiables-avocat-soja',
    classe: 'Anti-arthrosiques symptomatiques d’action lente',
    groupe: 'Rhumatologie et métabolisme osseux',
    mecanisme: 'Fraction lipidique d’avocat et de soja, d’action anti-catabolique supposée sur le cartilage.',
    indications:
      'Traitement symptomatique d’action lente de l’arthrose de la hanche et du genou (intérêt clinique faible).',
    posologie: '300 mg une fois par jour au cours d’un repas ; effet après 6 à 8 semaines.',
    contre_indications: 'Hypersensibilité.',
    effets_indesirables:
      'Troubles digestifs, régurgitations à odeur lipidique, rares élévations des transaminases.',
    precautions: 'Ne remplace pas la perte de poids, l’activité physique et les antalgiques.',
  },
  {
    dci: 'Risédronate',
    slug: 'risedronate',
    classe: 'Bisphosphonates',
    groupe: 'Rhumatologie et métabolisme osseux',
    mecanisme: 'Inhibe la résorption osseuse par les ostéoclastes.',
    indications: 'Ostéoporose post-ménopausique, masculine et cortisonique ; maladie de Paget.',
    posologie:
      'Ostéoporose : 35 mg une fois par semaine ou 5 mg/j ; Paget : 30 mg/j pendant 2 mois. À jeun, avec un grand verre d’eau, rester debout 30 min.',
    contre_indications:
      'Hypocalcémie, clairance de la créatinine < 30 mL/min, grossesse et allaitement, impossibilité de rester debout 30 min.',
    effets_indesirables:
      'Œsophagite, troubles digestifs, douleurs musculosquelettiques ; ostéonécrose de la mâchoire et fractures atypiques du fémur (rares).',
    precautions: 'Corriger la carence en calcium et en vitamine D ; soins dentaires avant traitement.',
  },
  {
    dci: 'Métopimazine',
    slug: 'metopimazine',
    classe: 'Antiémétiques (phénothiazines)',
    groupe: 'Hépato-gastro-entérologie',
    mecanisme: 'Antagoniste des récepteurs D2 de la dopamine, à action surtout périphérique.',
    indications: 'Nausées et vomissements.',
    posologie:
      'Adulte : 15–30 mg/j en 2 à 3 prises (maximum 30 mg/j) ; enfant : 0,5–1 mg/kg/j en 2 à 3 prises.',
    contre_indications:
      'Glaucome à angle fermé, rétention urinaire liée à un obstacle urétroprostatique, hypersensibilité.',
    effets_indesirables:
      'Somnolence, hypotension orthostatique, effets anticholinergiques ; rares mouvements anormaux.',
    precautions: 'Traitement court ; vomissements de l’enfant : rechercher d’abord la cause et réhydrater.',
  },
  {
    dci: 'Montmorillonite beidellitique',
    slug: 'montmorillonite-beidellitique',
    classe: 'Pansements digestifs (argiles)',
    groupe: 'Hépato-gastro-entérologie',
    mecanisme: 'Argile adsorbante qui tapisse et protège la muqueuse digestive.',
    indications: 'Traitement symptomatique des douleurs des colopathies fonctionnelles.',
    posologie: '1 sachet 3 fois par jour.',
    contre_indications: 'Hypersensibilité ; occlusion intestinale.',
    effets_indesirables: 'Constipation.',
    precautions: 'Prendre les autres médicaments à 2 h d’intervalle (absorption diminuée).',
  },
  {
    dci: 'Gomme de sterculia',
    slug: 'gomme-de-sterculia',
    classe: 'Laxatifs de lest',
    groupe: 'Hépato-gastro-entérologie',
    mecanisme: 'Mucilage qui gonfle dans l’intestin et augmente le volume et l’hydratation des selles.',
    indications: 'Constipation.',
    posologie:
      '1 à 2 cuillères à café de granulés 1 à 2 fois par jour après les repas, avec un grand verre d’eau.',
    contre_indications: 'Occlusion, sténose digestive, fécalome, troubles de la déglutition.',
    effets_indesirables:
      'Ballonnements ; obstruction œsophagienne ou intestinale si l’apport d’eau est insuffisant.',
    precautions: 'Boire suffisamment ; ne pas prendre en position couchée ni juste avant le coucher.',
  },
];
