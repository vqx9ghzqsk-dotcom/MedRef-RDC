'use strict';

/**
 * Pharmacologie : opérateurs, classes, molécules (fiche de référence) et produits.
 *
 * - Une MOLÉCULE porte la fiche pharmacologique (mécanisme, cinétique, posologie
 *   usuelle, CI, EI, interactions, grossesse/allaitement, surveillance).
 * - Un PRODUIT appartient à un opérateur et contient une ou plusieurs molécules
 *   (composition). Ses champs cliniques sont renseignés quand ils diffèrent de la
 *   fiche de la molécule (association à dose fixe, forme pédiatrique, LP…).
 * - `rdc: true` = disponibilité confirmée dans le circuit national (LNME /
 *   FEDECAME / programmes). Les autres produits sont « à confirmer » localement.
 *
 * ⚠️ Posologies de référence (adulte sauf mention) : toujours vérifier la notice du
 * produit, le protocole national en vigueur et adapter au patient.
 */

const operateurs = [
  // [nom, type, pays, site]
  ['Novartis', 'fabricant', 'Suisse', 'https://www.novartis.com'],
  ['Sandoz', 'fabricant', 'Suisse', 'https://www.sandoz.com'],
  ['Sanofi', 'fabricant', 'France', 'https://www.sanofi.com'],
  ['GSK', 'fabricant', 'Royaume-Uni', 'https://www.gsk.com'],
  ['ViiV Healthcare', 'fabricant', 'Royaume-Uni', 'https://viivhealthcare.com'],
  ['Pfizer', 'fabricant', 'États-Unis', 'https://www.pfizer.com'],
  ['Viatris', 'fabricant', 'États-Unis', 'https://www.viatris.com'],
  ['Roche', 'fabricant', 'Suisse', 'https://www.roche.com'],
  ['Bayer', 'fabricant', 'Allemagne', 'https://www.bayer.com'],
  ['AstraZeneca', 'fabricant', 'Royaume-Uni', 'https://www.astrazeneca.com'],
  ['Merck KGaA', 'fabricant', 'Allemagne', 'https://www.merckgroup.com'],
  ['Organon', 'fabricant', 'États-Unis', 'https://www.organon.com'],
  ['Servier', 'fabricant', 'France', 'https://servier.com'],
  ['Novo Nordisk', 'fabricant', 'Danemark', 'https://www.novonordisk.com'],
  ['Boehringer Ingelheim', 'fabricant', 'Allemagne', 'https://www.boehringer-ingelheim.com'],
  ['UCB', 'fabricant', 'Belgique', 'https://www.ucb.com'],
  ['Gilead Sciences', 'fabricant', 'États-Unis', 'https://www.gilead.com'],
  ['Bristol Myers Squibb', 'fabricant', 'États-Unis', 'https://www.bms.com'],
  ['Alfasigma', 'fabricant', 'Italie', 'https://www.alfasigma.com'],
  ['Theravia', 'fabricant', 'France', null],
  ['Fosun Pharma', 'fabricant', 'Chine', 'https://www.fosunpharma.com'],
  ['Cipla', 'fabricant', 'Inde', 'https://www.cipla.com'],
  ['Macleods Pharmaceuticals', 'fabricant', 'Inde', 'https://www.macleodspharma.com'],
  ['Lupin', 'fabricant', 'Inde', 'https://www.lupin.com'],
  ['Ferring', 'fabricant', 'Suisse', 'https://www.ferring.com'],
  ['Fresenius Kabi', 'fabricant', 'Allemagne', 'https://www.fresenius-kabi.com'],
  ['B. Braun', 'fabricant', 'Allemagne', 'https://www.bbraun.com'],
  ['Pharmakina', 'fabricant', 'RDC', null],
  ['Nutriset', 'fabricant', 'France', 'https://www.nutriset.fr'],
  ['UNICEF Supply Division', 'programme', 'Danemark', 'https://www.unicef.org/supply'],
  ['FEDECAME', 'distributeur', 'RDC', null],
  ['Générique multisource', 'distributeur', null, null],
];

const classes = [
  ['Antipaludiques', "Dérivés de l'artémisinine et molécules partenaires des CTA, quinine."],
  [
    'Antibiotiques',
    'Bêta-lactamines, aminosides, macrolides, cyclines, fluoroquinolones, nitro-imidazolés, sulfamides.',
  ],
  ['Antituberculeux', 'Rifampicine, isoniazide, pyrazinamide, éthambutol (associations à dose fixe).'],
  ['Antirétroviraux', 'INTI, inhibiteurs d’intégrase et associations à dose fixe.'],
  ['Antiviraux anti-VHB', 'Analogues nucléos(t)idiques de l’hépatite B.'],
  ['Antihypertenseurs', 'Inhibiteurs calciques, IEC, ARA2, antihypertenseurs centraux, vasodilatateurs.'],
  ['Bêtabloquants', 'Bêtabloquants cardiosélectifs et alpha-bêtabloquants.'],
  ['Diurétiques', "Diurétiques de l'anse, thiazidiques, antialdostérones, osmotiques."],
  ["Médicaments de l'insuffisance cardiaque", 'Inhibiteurs de la néprilysine (ARNI).'],
  ['Inhibiteurs SGLT2', 'Gliflozines : cardio-néphroprotection et effet hypoglycémiant.'],
  ['Antithrombotiques', 'Antiagrégants plaquettaires et thrombolytiques.'],
  ['Hypolipémiants', 'Statines.'],
  ['Antidiabétiques oraux', 'Biguanides, sulfamides hypoglycémiants.'],
  ['Insulines', 'Insulines humaines et analogues.'],
  ['Bronchodilatateurs', 'Bêta-2 mimétiques et anticholinergiques inhalés.'],
  ['Corticoïdes', 'Corticoïdes inhalés et systémiques.'],
  ['Anticonvulsivants', 'Benzodiazépines, antiépileptiques, sulfate de magnésium.'],
  ['Utérotoniques', 'Ocytocine et analogues, prostaglandines.'],
  ['Antifibrinolytiques', 'Acide tranexamique.'],
  ['Antimétabolites', 'Méthotrexate, hydroxycarbamide.'],
  ['Antalgiques', 'Paracétamol, AINS, opioïdes.'],
  ['Solutés et électrolytes', 'Cristalloïdes, glucosés, électrolytes, solutions de réhydratation.'],
  ['Micronutriments et vitamines', 'Zinc, acide folique, pyridoxine.'],
  ['Produits nutritionnels thérapeutiques', 'Laits thérapeutiques et ATPE.'],
];

/** Fiches pharmacologiques de référence. */
const molecules = [
  // ================================================================ Antipaludiques
  {
    slug: 'artesunate',
    dci: 'Artésunate',
    classe: 'Antipaludiques',
    mecanisme:
      "Dérivé hémisuccinate de l'artémisinine. Le pont endoperoxyde, activé par le fer de l'hème, libère des radicaux libres toxiques pour le parasite. Action très rapide sur tous les stades sanguins, y compris les jeunes trophozoïtes (anneaux) : réduction rapide de la biomasse parasitaire.",
    pharmacocinetique:
      'Prodrogue rapidement hydrolysée en dihydroartémisinine (DHA, métabolite actif). Demi-vie < 1 h (artésunate) et ≈ 1 h (DHA). Biodisponibilité IM élevée ; absorption rectale variable.',
    indications:
      "- Paludisme grave (1re intention, adulte, enfant, femme enceinte à tous les trimestres)\n- Traitement pré-transfert (voie rectale) chez l'enfant < 6 ans\n- En association (CTA) dans le paludisme simple",
    posologie:
      "- **Paludisme grave** : 2,4 mg/kg IV ou IM à H0, H12, H24, puis toutes les 24 h jusqu'à reprise de la voie orale (minimum 24 h) ; enfant < 20 kg : 3 mg/kg/dose\n- Relais par une cure complète de CTA de 3 jours\n- **Pré-transfert (enfant < 6 ans)** : 10 mg/kg par voie rectale en dose unique",
    contre_indications: "Hypersensibilité connue aux dérivés de l'artémisinine.",
    effets_indesirables:
      '- Hémolyse retardée post-artésunate (PADH), 1 à 3 semaines après le traitement, surtout si hyperparasitémie\n- Réactions allergiques rares, neutropénie transitoire',
    interactions: "Peu d'interactions cliniquement significatives.",
    grossesse_allaitement:
      'Paludisme grave : artésunate IV/IM recommandé à TOUS les trimestres (bénéfice maternel et fœtal). Allaitement possible.',
    surveillance:
      '- Conscience, glycémie, diurèse, température\n- Parasitémie à 24–48 h si disponible\n- Hémoglobine à J7, J14 et J28 (hémolyse retardée)',
  },
  {
    slug: 'artemether',
    dci: 'Artéméther',
    classe: 'Antipaludiques',
    mecanisme: "Dérivé liposoluble de l'artémisinine ; même mécanisme endoperoxyde que l'artésunate.",
    pharmacocinetique:
      'Métabolisé en DHA par le CYP3A4. Absorption IM lente et irrégulière (solution huileuse). Demi-vie 1–3 h.',
    indications:
      "- En association avec la luméfantrine (paludisme simple)\n- Forme IM : paludisme grave si l'artésunate n'est pas disponible",
    posologie:
      '- **IM (paludisme grave, alternative)** : 3,2 mg/kg à H0, puis 1,6 mg/kg/24 h jusqu’à reprise de la voie orale\n- **Oral** : voir l’association artéméther-luméfantrine',
    contre_indications: "Hypersensibilité aux dérivés de l'artémisinine.",
    effets_indesirables: 'Céphalées, vertiges, troubles digestifs ; douleur au point d’injection.',
    interactions: 'Inducteurs du CYP3A4 (rifampicine, carbamazépine, éfavirenz) : baisse des concentrations.',
    grossesse_allaitement:
      'Artéméther-luméfantrine utilisable à tous les trimestres pour le paludisme simple (OMS, mise à jour 2022).',
    surveillance: 'Évolution clinique et parasitologique.',
  },
  {
    slug: 'lumefantrine',
    dci: 'Luméfantrine',
    classe: 'Antipaludiques',
    mecanisme:
      "Aryl-amino-alcool : inhibe la détoxification de l'hème en hémozoïne. Molécule partenaire de longue durée d'action qui élimine les parasites résiduels.",
    pharmacocinetique:
      'Très lipophile : absorption fortement augmentée par un repas gras (à prendre avec du lait ou un aliment gras). Demi-vie 3–6 jours. Métabolisme CYP3A4.',
    indications: 'Uniquement en association avec l’artéméther (paludisme simple).',
    posologie: 'Voir l’association artéméther-luméfantrine.',
    contre_indications: 'Hypersensibilité ; antécédent d’allongement congénital du QT (prudence).',
    effets_indesirables: 'Céphalées, vertiges, anorexie, troubles digestifs ; allongement modéré du QT.',
    interactions:
      'Rifampicine (réduction majeure des concentrations : à éviter), éfavirenz ; médicaments allongeant le QT.',
    grossesse_allaitement: 'Voir artéméther.',
    surveillance:
      'Prise avec un aliment gras ; redonner la dose si vomissement dans les 30 min (demi-dose entre 30 et 60 min).',
  },
  {
    slug: 'amodiaquine',
    dci: 'Amodiaquine',
    classe: 'Antipaludiques',
    mecanisme:
      '4-aminoquinoléine : inhibe la polymérisation de l’hème dans la vacuole digestive du parasite.',
    pharmacocinetique: 'Prodrogue transformée en déséthylamodiaquine (active), demi-vie ≈ 9–18 jours.',
    indications:
      'En association avec l’artésunate (ASAQ) pour le paludisme simple ; chimioprévention saisonnière (avec SP).',
    posologie: 'Voir l’association artésunate-amodiaquine (≈ 10 mg/kg/j d’amodiaquine base pendant 3 jours).',
    contre_indications: 'Atteinte hépatique, antécédent d’hépatite ou d’agranulocytose sous amodiaquine.',
    effets_indesirables:
      'Troubles digestifs, prurit, fatigue ; rarement agranulocytose et hépatotoxicité (surtout en traitements répétés).',
    interactions: 'Éfavirenz (hépatotoxicité : à éviter), zidovudine et cotrimoxazole (neutropénie).',
    grossesse_allaitement:
      'ASAQ utilisable aux 2e et 3e trimestres ; au 1er trimestre : selon le protocole national (AL préférée).',
    surveillance: 'NFS si traitements répétés ; signes d’hépatite.',
  },
  {
    slug: 'quinine',
    dci: 'Quinine',
    classe: 'Antipaludiques',
    mecanisme: 'Alcaloïde du quinquina : schizonticide sanguin (inhibition de la détoxification de l’hème).',
    pharmacocinetique: 'Demi-vie 11–18 h, allongée au cours du paludisme grave. Marge thérapeutique étroite.',
    indications: 'Paludisme grave quand l’artésunate (ou l’artéméther) n’est pas disponible.',
    posologie:
      '- **Dose de charge** : 20 mg de sel/kg en perfusion de 4 h dans du glucosé 5–10 % (pas de dose de charge si quinine ou méfloquine reçue dans les 12–24 h)\n- **Entretien** : 10 mg/kg toutes les 8 h (perfusion de 4 h)\n- Relais oral par une CTA complète dès que possible',
    contre_indications:
      'Hypersensibilité, troubles de la conduction, antécédent de fièvre bilieuse hémoglobinurique, myasthénie.',
    effets_indesirables:
      '- Hypoglycémie (hyperinsulinisme), surtout chez l’enfant et la femme enceinte\n- Cinchonisme : acouphènes, vertiges, troubles visuels\n- Allongement du QT, hypotension si perfusion trop rapide',
    interactions:
      'Méfloquine, halofantrine et autres médicaments allongeant le QT ; digoxine (↑ concentrations).',
    grossesse_allaitement:
      'Utilisable pendant la grossesse ; surveillance glycémique rapprochée. Allaitement possible.',
    surveillance:
      '- Glycémie toutes les 4 h\n- Débit de perfusion (jamais en IV directe)\n- ECG si cardiopathie',
  },
  {
    slug: 'dihydroartemisinine',
    dci: 'Dihydroartémisinine',
    classe: 'Antipaludiques',
    mecanisme: 'Métabolite actif commun des dérivés de l’artémisinine (pont endoperoxyde).',
    pharmacocinetique: 'Demi-vie ≈ 1 h.',
    indications: 'En association avec la pipéraquine (paludisme simple).',
    posologie:
      'Voir l’association dihydroartémisinine-pipéraquine (cible : 4 mg/kg/j de DHA pendant 3 jours).',
    contre_indications: 'Hypersensibilité.',
    effets_indesirables: 'Troubles digestifs, céphalées.',
    interactions: 'Voir pipéraquine.',
    grossesse_allaitement: 'Utilisable aux 2e et 3e trimestres.',
    surveillance: 'Évolution clinique.',
  },
  {
    slug: 'piperaquine',
    dci: 'Pipéraquine',
    classe: 'Antipaludiques',
    mecanisme:
      'Bisquinoléine apparentée à la chloroquine ; molécule partenaire de très longue durée d’action.',
    pharmacocinetique:
      'Demi-vie ≈ 3–4 semaines (effet prophylactique post-traitement). Absorption augmentée par les graisses : prendre à jeun.',
    indications: 'En association avec la dihydroartémisinine (paludisme simple).',
    posologie: 'Cible : 18 mg/kg/j pendant 3 jours (20 mg/kg/j chez l’enfant < 25 kg), à jeun.',
    contre_indications: 'Allongement du QT congénital ou acquis, hypokaliémie non corrigée.',
    effets_indesirables: 'Allongement du QTc dose-dépendant.',
    interactions: 'Médicaments allongeant le QT ; inhibiteurs du CYP3A4.',
    grossesse_allaitement: 'Utilisable aux 2e et 3e trimestres.',
    surveillance: 'ECG si facteur de risque d’allongement du QT.',
  },

  // ================================================================ Antibiotiques
  {
    slug: 'amoxicilline',
    dci: 'Amoxicilline',
    classe: 'Antibiotiques',
    mecanisme:
      'Aminopénicilline bactéricide : inhibition des protéines liant la pénicilline (synthèse de la paroi).',
    pharmacocinetique: 'Biodisponibilité orale ≈ 80 %, élimination rénale, demi-vie ≈ 1 h.',
    indications:
      '- Pneumonie de l’enfant (PCIME) et de l’adulte\n- Antibiothérapie systématique de la MAS\n- Otites, sinusites, angines\n- Relais oral des infections néonatales (selon OMS)',
    posologie:
      '- **Enfant** : 40–45 mg/kg/dose 2 fois par jour (pneumonie : 5 jours ; 3 jours si respiration rapide seule selon protocole)\n- **MAS** : 50–100 mg/kg/j en 2 prises pendant 7 jours\n- **Adulte** : 1 g 3 fois par jour',
    contre_indications: 'Allergie aux pénicillines.',
    effets_indesirables:
      'Diarrhée, éruption cutanée (fréquente en cas de mononucléose), réactions allergiques.',
    interactions: 'Méthotrexate (toxicité), allopurinol (éruptions).',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Efficacité clinique à 48–72 h.',
  },
  {
    slug: 'acide-clavulanique',
    dci: 'Acide clavulanique',
    classe: 'Antibiotiques',
    mecanisme:
      'Inhibiteur de bêta-lactamases : protège l’amoxicilline de l’hydrolyse et élargit son spectre (anaérobies, staphylocoque méti-S, entérobactéries productrices de pénicillinases).',
    pharmacocinetique: 'Absorption orale correcte, demi-vie ≈ 1 h.',
    indications:
      'Uniquement en association avec l’amoxicilline : infections intra-abdominales, morsures, infections ORL et respiratoires compliquées.',
    posologie:
      'Selon l’amoxicilline (rapport 8:1 ou 7:1 per os) ; ne pas dépasser 600 mg/j d’acide clavulanique chez l’adulte (IV : 1 200 mg/j).',
    contre_indications:
      'Allergie aux bêta-lactamines ; antécédent d’ictère ou d’hépatite sous amoxicilline-acide clavulanique.',
    effets_indesirables:
      'Diarrhée (plus fréquente qu’avec l’amoxicilline seule), hépatite cholestatique (rare).',
    interactions: 'Voir amoxicilline.',
    grossesse_allaitement:
      'Utilisable (éviter en cas de rupture prématurée des membranes : entérocolite néonatale).',
    surveillance: 'Bilan hépatique si traitement prolongé.',
  },
  {
    slug: 'ampicilline',
    dci: 'Ampicilline',
    classe: 'Antibiotiques',
    mecanisme: 'Aminopénicilline bactéricide (voie parentérale).',
    pharmacocinetique: 'Élimination rénale ; demi-vie allongée chez le nouveau-né.',
    indications:
      'Infections bactériennes graves du nouveau-né et du nourrisson (avec la gentamicine), pneumonie sévère de l’enfant.',
    posologie:
      '- **Nouveau-né** : 50 mg/kg IV/IM toutes les 12 h (1re semaine), toutes les 8 h ensuite\n- **Enfant** : 50 mg/kg IV/IM toutes les 6 h',
    contre_indications: 'Allergie aux pénicillines.',
    effets_indesirables: 'Éruption, diarrhée, allergie.',
    interactions: 'Allopurinol (éruptions).',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Évolution clinique, relais oral (amoxicilline) dès amélioration.',
  },
  {
    slug: 'ceftriaxone',
    dci: 'Ceftriaxone',
    classe: 'Antibiotiques',
    mecanisme:
      'Céphalosporine de 3e génération bactéricide, large spectre (pneumocoque, méningocoque, entérobactéries, Haemophilus).',
    pharmacocinetique:
      'Demi-vie ≈ 8 h (une injection par jour), élimination biliaire et rénale, excellente diffusion méningée.',
    indications:
      '- Méningite bactérienne\n- Sepsis, pneumonie sévère, infections intra-abdominales (avec métronidazole)\n- Infection néonatale (alternative), fièvre typhoïde',
    posologie:
      '- **Méningite** : adulte 2 g IV toutes les 12 h ; enfant 100 mg/kg/j (en 1 ou 2 injections, max 4 g/j)\n- **Autres infections** : adulte 1–2 g/j ; enfant 50–80 mg/kg/j',
    contre_indications:
      'Allergie aux céphalosporines (prudence si allergie grave aux pénicillines) ; nouveau-né ictérique ou prématuré ; ne jamais administrer avec du calcium IV chez le nouveau-né (précipités).',
    effets_indesirables:
      'Diarrhée (dont Clostridioides difficile), lithiase biliaire, réactions allergiques.',
    interactions: 'Solutés calciques (incompatibilité).',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Évolution clinique ; adapter selon l’antibiogramme.',
  },
  {
    slug: 'cefazoline',
    dci: 'Céfazoline',
    classe: 'Antibiotiques',
    mecanisme: 'Céphalosporine de 1re génération (staphylocoque méti-S, streptocoques).',
    pharmacocinetique: 'Demi-vie ≈ 2 h ; réinjection si chirurgie > 4 h.',
    indications: 'Antibioprophylaxie chirurgicale (césarienne, chirurgie propre et propre-contaminée).',
    posologie: '2 g IV (3 g si ≥ 120 kg) 30–60 min avant l’incision ; enfant 30 mg/kg.',
    contre_indications: 'Allergie aux céphalosporines.',
    effets_indesirables: 'Allergie, phlébite.',
    interactions: 'Aucune notable en dose unique.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Horaire d’injection par rapport à l’incision.',
  },
  {
    slug: 'gentamicine',
    dci: 'Gentamicine',
    classe: 'Antibiotiques',
    mecanisme:
      'Aminoside bactéricide concentration-dépendant (inhibition de la sous-unité 30S du ribosome) ; synergie avec les bêta-lactamines.',
    pharmacocinetique:
      'Pas d’absorption orale ; élimination rénale ; demi-vie 2–3 h (allongée chez le nouveau-né et l’insuffisant rénal).',
    indications:
      'Infection bactérienne grave du nouveau-né et de l’enfant (avec ampicilline), sepsis à Gram négatif, pyélonéphrite.',
    posologie:
      '- **Nouveau-né** : 5 mg/kg/24 h (3 mg/kg si petit poids de naissance, 1re semaine) ; 7,5 mg/kg/24 h après la 1re semaine\n- **Enfant / adulte** : 5–7 mg/kg en 1 injection par jour',
    contre_indications: 'Myasthénie, allergie aux aminosides ; prudence si insuffisance rénale.',
    effets_indesirables: 'Néphrotoxicité (réversible), ototoxicité (irréversible), blocage neuromusculaire.',
    interactions: 'Autres néphro/ototoxiques (furosémide, vancomycine), curares.',
    grossesse_allaitement:
      'À éviter pendant la grossesse (ototoxicité fœtale), sauf infection grave sans alternative.',
    surveillance: 'Créatinine ; durée courte (≤ 5–7 jours) ; dosages si disponibles.',
  },
  {
    slug: 'metronidazole',
    dci: 'Métronidazole',
    classe: 'Antibiotiques',
    mecanisme:
      'Nitro-imidazolé : formation de dérivés réduits toxiques pour l’ADN des bactéries anaérobies et des protozoaires.',
    pharmacocinetique:
      'Biodisponibilité orale ≈ 100 % (la voie orale est aussi efficace que l’IV), métabolisme hépatique.',
    indications:
      'Infections à anaérobies (intra-abdominales, gynécologiques), amibiase, giardiase, trichomonose, vaginose.',
    posologie: '- **Adulte** : 500 mg toutes les 8 h (IV ou per os)\n- **Enfant** : 7,5 mg/kg toutes les 8 h',
    contre_indications: 'Hypersensibilité aux nitro-imidazolés.',
    effets_indesirables: 'Goût métallique, nausées, effet antabuse ; neuropathie en traitement prolongé.',
    interactions: 'Alcool (effet antabuse), anticoagulants oraux (↑ INR), lithium.',
    grossesse_allaitement: 'Utilisable si nécessaire.',
    surveillance: 'Éviter l’alcool pendant et 48 h après le traitement.',
  },
  {
    slug: 'cotrimoxazole',
    dci: 'Cotrimoxazole (sulfaméthoxazole + triméthoprime)',
    classe: 'Antibiotiques',
    mecanisme: 'Double blocage séquentiel de la synthèse des folates bactériens.',
    pharmacocinetique: 'Bonne biodisponibilité orale, demi-vie ≈ 10 h, élimination rénale.',
    indications:
      '- Prophylaxie des infections opportunistes chez la personne vivant avec le VIH (et l’enfant exposé)\n- Pneumocystose, toxoplasmose, infections urinaires',
    posologie:
      '- **Prophylaxie adulte** : 960 mg (800/160) 1 fois par jour\n- **Prophylaxie enfant** : selon le poids (≈ 24 mg/kg/j de cotrimoxazole)\n- **Pneumocystose** : 15–20 mg/kg/j de triméthoprime en 3–4 prises, 21 jours',
    contre_indications:
      'Allergie aux sulfamides, déficit en G6PD (prudence), nouveau-né < 6 semaines, insuffisance hépatique ou rénale sévère.',
    effets_indesirables:
      'Éruptions (jusqu’au syndrome de Stevens-Johnson), cytopénies, hyperkaliémie, hépatite.',
    interactions:
      'Méthotrexate, anticoagulants oraux, phénytoïne ; associer prudemment à la SP (sulfamides).',
    grossesse_allaitement:
      'Prophylaxie poursuivie chez la femme enceinte vivant avec le VIH (bénéfice supérieur au risque).',
    surveillance: 'NFS, éruption cutanée.',
  },
  {
    slug: 'azithromycine',
    dci: 'Azithromycine',
    classe: 'Antibiotiques',
    mecanisme: 'Macrolide (inhibition de la sous-unité 50S) ; bactériostatique.',
    pharmacocinetique: 'Demi-vie ≈ 68 h, forte concentration tissulaire.',
    indications:
      'Choléra (dose unique, enfant et femme enceinte), infections respiratoires atypiques, trachome, IST.',
    posologie:
      '- **Choléra** : adulte 1 g dose unique ; enfant 20 mg/kg dose unique\n- Autres indications : 500 mg/j 3 jours',
    contre_indications: 'Allergie aux macrolides.',
    effets_indesirables: 'Troubles digestifs, allongement du QT.',
    interactions: 'Médicaments allongeant le QT.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'QT si facteur de risque.',
  },
  {
    slug: 'doxycycline',
    dci: 'Doxycycline',
    classe: 'Antibiotiques',
    mecanisme: 'Cycline (inhibition de la sous-unité 30S) ; bactériostatique.',
    pharmacocinetique: 'Bonne absorption orale (réduite par calcium, fer, antiacides), demi-vie ≈ 18 h.',
    indications: 'Choléra (adulte), rickettsioses, IST, leptospirose, prophylaxie du paludisme.',
    posologie: '- **Choléra** : adulte 300 mg en dose unique\n- Autres : 100 mg 2 fois par jour',
    contre_indications:
      'Traitement prolongé : grossesse et enfant < 8 ans (dyschromie dentaire). La dose unique du choléra fait l’objet de recommandations spécifiques du GTFCC.',
    effets_indesirables:
      'Œsophagite (prendre avec un grand verre d’eau, debout), photosensibilisation, troubles digestifs.',
    interactions: 'Sels de calcium, fer, magnésium, antiacides (espacer de 2 h).',
    grossesse_allaitement: 'Éviter en traitement prolongé.',
    surveillance: 'Tolérance digestive.',
  },
  {
    slug: 'ciprofloxacine',
    dci: 'Ciprofloxacine',
    classe: 'Antibiotiques',
    mecanisme: 'Fluoroquinolone : inhibition de l’ADN gyrase et de la topo-isomérase IV ; bactéricide.',
    pharmacocinetique: 'Biodisponibilité orale ≈ 70 % (réduite par les cations), élimination rénale.',
    indications:
      'Choléra (alternative), shigellose, fièvre typhoïde (selon résistances), infections urinaires compliquées.',
    posologie:
      '- **Choléra** : adulte 1 g dose unique\n- **Shigellose** : 500 mg 2 fois par jour 3 jours ; enfant 15 mg/kg 2 fois par jour',
    contre_indications:
      'Antécédent de tendinopathie sous quinolone ; prudence chez l’enfant et la femme enceinte.',
    effets_indesirables:
      'Tendinopathies, allongement du QT, convulsions, photosensibilisation, troubles digestifs.',
    interactions: 'Calcium, fer, antiacides (espacer) ; théophylline ; médicaments allongeant le QT.',
    grossesse_allaitement: 'Éviter sauf absence d’alternative.',
    surveillance: 'Douleurs tendineuses.',
  },
  {
    slug: 'phenoxymethylpenicilline',
    dci: 'Phénoxyméthylpénicilline (pénicilline V)',
    classe: 'Antibiotiques',
    mecanisme: 'Pénicilline orale active sur le pneumocoque et le streptocoque.',
    pharmacocinetique: 'Absorption orale correcte, demi-vie courte (2 prises par jour en prophylaxie).',
    indications:
      'Prophylaxie des infections à pneumocoque chez l’enfant drépanocytaire ; angine streptococcique.',
    posologie:
      '- **Drépanocytose** : < 3 ans 125 mg 2 fois par jour ; 3–5 ans 250 mg 2 fois par jour (au moins jusqu’à 5 ans)\n- Angine : 1 MUI (adulte) 2–3 fois par jour 10 jours',
    contre_indications: 'Allergie aux pénicillines.',
    effets_indesirables: 'Troubles digestifs, allergie.',
    interactions: 'Méthotrexate.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Observance (prophylaxie au long cours).',
  },

  // ================================================================ Antituberculeux
  {
    slug: 'rifampicine',
    dci: 'Rifampicine',
    classe: 'Antituberculeux',
    mecanisme: 'Inhibe l’ARN polymérase ADN-dépendante des mycobactéries ; bactéricide, stérilisante.',
    pharmacocinetique:
      'Prise à jeun ; puissant inducteur enzymatique (CYP3A4, P-gp) ; colore les urines et les larmes en orange.',
    indications:
      'Tuberculose sensible (phases intensive et de continuation), certaines infections à staphylocoque, lèpre.',
    posologie: '10 mg/kg/j (8–12 mg/kg, max 600 mg/j) en 1 prise à jeun, en association à dose fixe.',
    contre_indications:
      'Hépatopathie sévère, ictère ; association à certains antirétroviraux (inhibiteurs de protéase boostés).',
    effets_indesirables:
      'Hépatite, troubles digestifs, syndrome pseudo-grippal, thrombopénie, coloration orangée des liquides biologiques.',
    interactions:
      'Très nombreuses : contraceptifs hormonaux (inefficaces), dolutégravir (doubler la dose : 50 mg 2 fois par jour), artéméther-luméfantrine, anticoagulants, antidiabétiques oraux, corticoïdes.',
    grossesse_allaitement: 'Utilisable (traitement standard de la tuberculose).',
    surveillance: 'Bilan hépatique si symptômes ou terrain à risque ; contraception non hormonale.',
  },
  {
    slug: 'isoniazide',
    dci: 'Isoniazide',
    classe: 'Antituberculeux',
    mecanisme:
      'Inhibe la synthèse des acides mycoliques de la paroi mycobactérienne ; très bactéricide en phase initiale.',
    pharmacocinetique: 'Acétylation hépatique (acétyleurs lents / rapides).',
    indications:
      'Tuberculose (association) ; traitement préventif de la tuberculose (TPT) chez le PVVIH et les contacts.',
    posologie:
      '- **Traitement** : 5 mg/kg/j (4–6 mg/kg, max 300 mg/j)\n- **TPT** : 300 mg/j pendant 6 mois (adulte), 10 mg/kg/j chez l’enfant',
    contre_indications: 'Hépatopathie active, antécédent d’hépatite à l’isoniazide.',
    effets_indesirables: 'Hépatite, neuropathie périphérique (prévenue par la pyridoxine), éruption.',
    interactions: 'Phénytoïne, carbamazépine (↑ concentrations), paracétamol (hépatotoxicité).',
    grossesse_allaitement: 'Utilisable, avec pyridoxine.',
    surveillance:
      'Signes d’hépatite (ictère, vomissements) et de neuropathie ; pyridoxine systématique si terrain à risque.',
  },
  {
    slug: 'pyrazinamide',
    dci: 'Pyrazinamide',
    classe: 'Antituberculeux',
    mecanisme:
      'Actif sur les bacilles intracellulaires en milieu acide ; raccourcit la durée du traitement à 6 mois.',
    pharmacocinetique: 'Bonne absorption orale, métabolisme hépatique.',
    indications: 'Phase intensive (2 mois) du traitement de la tuberculose.',
    posologie: '25 mg/kg/j (20–30 mg/kg) en association à dose fixe.',
    contre_indications: 'Hépatopathie sévère, goutte aiguë.',
    effets_indesirables: 'Hépatotoxicité, hyperuricémie, arthralgies, troubles digestifs.',
    interactions: 'Allopurinol (inefficace sur l’hyperuricémie induite).',
    grossesse_allaitement: 'Utilisable (OMS).',
    surveillance: 'Bilan hépatique si symptômes ; uricémie si arthralgies.',
  },
  {
    slug: 'ethambutol',
    dci: 'Éthambutol',
    classe: 'Antituberculeux',
    mecanisme:
      'Inhibe la synthèse de l’arabinogalactane ; bactériostatique, prévient l’émergence de résistances.',
    pharmacocinetique: 'Élimination rénale : adapter en cas d’insuffisance rénale.',
    indications: 'Phase intensive du traitement de la tuberculose.',
    posologie: '15 mg/kg/j (15–20 mg/kg) en association à dose fixe.',
    contre_indications:
      'Névrite optique préexistante ; enfant incapable de signaler des troubles visuels (prudence, doses OMS sûres).',
    effets_indesirables:
      'Névrite optique rétrobulbaire (baisse d’acuité, dyschromatopsie rouge-vert), dose-dépendante.',
    interactions: 'Antiacides (absorption).',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Acuité visuelle et vision des couleurs ; arrêt immédiat si troubles visuels.',
  },

  // ================================================================ Antirétroviraux / anti-VHB
  {
    slug: 'tenofovir-disoproxil',
    dci: 'Ténofovir disoproxil (TDF)',
    classe: 'Antirétroviraux',
    mecanisme: 'Inhibiteur nucléotidique de la transcriptase inverse (INTI) ; actif sur le VIH et le VHB.',
    pharmacocinetique: 'Prodrogue ; élimination rénale ; une prise par jour.',
    indications:
      '- VIH : schéma de 1re ligne (TLD)\n- Hépatite B chronique (1re intention)\n- Prophylaxie pré-exposition (PrEP) et prévention de la transmission mère-enfant du VHB',
    posologie:
      '300 mg 1 fois par jour ; espacer les prises si clairance < 50 mL/min (ou préférer une alternative).',
    contre_indications: 'Clairance de la créatinine < 30 mL/min (sauf adaptation), hypersensibilité.',
    effets_indesirables:
      'Tubulopathie proximale, insuffisance rénale, baisse de la densité minérale osseuse ; troubles digestifs.',
    interactions: 'Médicaments néphrotoxiques (aminosides, AINS au long cours).',
    grossesse_allaitement: 'Recommandé (VIH et VHB). Allaitement possible.',
    surveillance:
      'Créatinine (DFG) avant puis régulièrement ; ne pas arrêter brutalement chez le porteur du VHB (rebond hépatique).',
  },
  {
    slug: 'lamivudine',
    dci: 'Lamivudine (3TC)',
    classe: 'Antirétroviraux',
    mecanisme: 'Inhibiteur nucléosidique de la transcriptase inverse ; actif sur VIH et VHB.',
    pharmacocinetique: 'Élimination rénale ; demi-vie intracellulaire longue.',
    indications: 'VIH (toujours en association) ; VHB (en association avec le TDF chez le co-infecté).',
    posologie:
      'Adulte : 300 mg/j (ou 150 mg 2 fois par jour) ; enfant 4 mg/kg 2 fois par jour ou 8 mg/kg/j ; adapter à la fonction rénale.',
    contre_indications: 'Hypersensibilité.',
    effets_indesirables: 'Bien toléré : céphalées, troubles digestifs ; rare pancréatite chez l’enfant.',
    interactions: 'Peu d’interactions.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Ne jamais utiliser seule chez le porteur du VHB (résistance).',
  },
  {
    slug: 'dolutegravir',
    dci: 'Dolutégravir (DTG)',
    classe: 'Antirétroviraux',
    mecanisme: 'Inhibiteur de l’intégrase du VIH ; haute barrière génétique à la résistance.',
    pharmacocinetique:
      'Demi-vie ≈ 14 h ; métabolisme UGT1A1/CYP3A4 ; inhibiteur de l’OCT2 (élévation de la créatinine sans baisse réelle du DFG).',
    indications:
      'VIH : 1re ligne préférentielle chez l’adulte, l’adolescent, la femme enceinte et l’enfant (DTG pédiatrique).',
    posologie:
      '- Adulte et enfant ≥ 20 kg : 50 mg 1 fois par jour\n- Avec rifampicine : 50 mg 2 fois par jour\n- Enfant < 20 kg : comprimés dispersibles selon le poids',
    contre_indications: 'Association au dofétilide ; hypersensibilité.',
    effets_indesirables:
      'Insomnie, céphalées, prise de poids, troubles neuropsychiatriques (rares), hypersensibilité (rare).',
    interactions:
      '- Cations polyvalents (calcium, fer, magnésium, aluminium, antiacides) : prendre le DTG 2 h avant ou 6 h après\n- Metformine (↑ concentrations : limiter la dose)\n- Inducteurs (rifampicine, carbamazépine, phénytoïne) : ajuster',
    grossesse_allaitement:
      'Recommandé pendant la grossesse (OMS 2019) avec acide folique. Allaitement possible.',
    surveillance: 'Charge virale à 6 mois puis annuelle ; glycémie si metformine associée.',
  },
  {
    slug: 'abacavir',
    dci: 'Abacavir (ABC)',
    classe: 'Antirétroviraux',
    mecanisme: 'Inhibiteur nucléosidique de la transcriptase inverse.',
    pharmacocinetique:
      'Métabolisme hépatique (alcool déshydrogénase), demi-vie intracellulaire longue (1 prise par jour possible).',
    indications: 'VIH de l’enfant (ABC/3TC + DTG) ; alternative chez l’adulte si TDF contre-indiqué.',
    posologie:
      'Enfant : 8 mg/kg 2 fois par jour ou 16 mg/kg/j (max 600 mg/j), en association à dose fixe selon le poids.',
    contre_indications:
      'Antécédent d’hypersensibilité à l’abacavir ; porteur HLA-B*5701 ; insuffisance hépatique sévère.',
    effets_indesirables:
      'Syndrome d’hypersensibilité (fièvre, éruption, signes digestifs ou respiratoires) dans les 6 premières semaines : arrêt définitif, ne JAMAIS réintroduire.',
    interactions: 'Alcool (↑ concentrations).',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Informer la famille des signes d’hypersensibilité.',
  },
  {
    slug: 'entecavir',
    dci: 'Entécavir',
    classe: 'Antiviraux anti-VHB',
    mecanisme:
      'Analogue nucléosidique de la guanosine inhibant la polymérase du VHB ; haute barrière génétique.',
    pharmacocinetique: 'Prise à jeun ; élimination rénale.',
    indications:
      'Hépatite B chronique (alternative au TDF, notamment si atteinte rénale ou osseuse ; enfant ≥ 2 ans).',
    posologie:
      '0,5 mg/j à jeun (1 mg/j si cirrhose décompensée ou résistance à la lamivudine) ; adapter à la clairance.',
    contre_indications: 'Hypersensibilité.',
    effets_indesirables:
      'Céphalées, fatigue, troubles digestifs ; acidose lactique rare (cirrhose décompensée).',
    interactions: 'Peu d’interactions.',
    grossesse_allaitement: 'Non recommandé pendant la grossesse (préférer le TDF).',
    surveillance: 'ADN VHB, ALAT, créatinine ; ne pas arrêter brutalement.',
  },

  // ================================================================ Cardiovasculaire
  {
    slug: 'amlodipine',
    dci: 'Amlodipine',
    classe: 'Antihypertenseurs',
    mecanisme:
      'Inhibiteur calcique dihydropyridinique : vasodilatation artérielle par blocage des canaux calciques de type L.',
    pharmacocinetique: 'Demi-vie 35–50 h (1 prise par jour, effet progressif), métabolisme CYP3A4.',
    indications: 'HTA (1re intention, notamment chez le patient d’ascendance africaine), angor stable.',
    posologie: '5 mg 1 fois par jour, jusqu’à 10 mg/j.',
    contre_indications: 'Choc cardiogénique, sténose aortique serrée, angor instable.',
    effets_indesirables:
      'Œdèmes des membres inférieurs, céphalées, bouffées de chaleur, hypertrophie gingivale.',
    interactions: 'Inhibiteurs du CYP3A4 (↑ concentrations) ; simvastatine (limiter à 20 mg/j).',
    grossesse_allaitement:
      'Données limitées mais rassurantes ; utilisée dans l’HTA chronique de la grossesse selon les protocoles.',
    surveillance: 'PA, œdèmes.',
  },
  {
    slug: 'nifedipine',
    dci: 'Nifédipine',
    classe: 'Antihypertenseurs',
    mecanisme: 'Inhibiteur calcique dihydropyridinique (vasodilatateur artériel).',
    pharmacocinetique:
      'Forme à libération immédiate : action en 10–20 min ; formes LP : 1–2 prises par jour.',
    indications:
      'HTA sévère de la grossesse (forme orale à libération immédiate), HTA chronique et de la grossesse (LP).',
    posologie:
      '- **HTA sévère de la grossesse** : 10 mg per os (libération immédiate, à avaler), à répéter après 20–30 min si PA ≥ 160/110 (max selon protocole)\n- **Entretien** : LP 20–60 mg/j\n- Ne jamais administrer par voie sublinguale',
    contre_indications: 'Choc cardiogénique, infarctus récent, sténose aortique serrée.',
    effets_indesirables:
      'Céphalées, bouffées vasomotrices, tachycardie réflexe, œdèmes ; hypotension brutale (forme immédiate).',
    interactions: 'Sulfate de magnésium (hypotension, théorique), inhibiteurs du CYP3A4.',
    grossesse_allaitement:
      'Utilisable (recommandée par l’OMS dans l’HTA sévère de la grossesse). Allaitement possible.',
    surveillance: 'PA toutes les 15 min lors du traitement d’attaque ; rythme cardiaque fœtal.',
  },
  {
    slug: 'nicardipine',
    dci: 'Nicardipine',
    classe: 'Antihypertenseurs',
    mecanisme: 'Inhibiteur calcique dihydropyridinique injectable, vasodilatateur artériel titrable.',
    pharmacocinetique: 'Action en 5–15 min, durée 30 min à 4 h après arrêt.',
    indications:
      'Urgence hypertensive, HTA de l’AVC (avant/après thrombolyse), HTA sévère de la grossesse (alternative).',
    posologie: '5 mg/h IV au pousse-seringue, augmenter de 2,5 mg/h toutes les 5–15 min (max 15 mg/h).',
    contre_indications: 'Sténose aortique serrée, choc.',
    effets_indesirables: 'Tachycardie, céphalées, hypotension, veinite (voie veineuse de gros calibre).',
    interactions: 'Autres antihypertenseurs, inhibiteurs du CYP3A4.',
    grossesse_allaitement: 'Utilisable en milieu spécialisé.',
    surveillance: 'PA toutes les 5–15 min pendant la titration ; éviter une baisse > 25 % la 1re heure.',
  },
  {
    slug: 'methyldopa',
    dci: 'Méthyldopa',
    classe: 'Antihypertenseurs',
    mecanisme: 'Agoniste alpha-2 central (via l’alpha-méthylnoradrénaline) : baisse du tonus sympathique.',
    pharmacocinetique: 'Action maximale en 4–6 h ; ajustement sur plusieurs jours.',
    indications: 'HTA de la grossesse (traitement de fond de référence).',
    posologie: '250 mg 2 à 3 fois par jour, à augmenter tous les 2 jours (max 3 g/j).',
    contre_indications: 'Hépatopathie active, dépression sévère, phéochromocytome.',
    effets_indesirables:
      'Somnolence, sécheresse buccale, hypotension orthostatique, dépression, test de Coombs positif, hépatite, anémie hémolytique (rare).',
    interactions: 'Fer oral (↓ absorption), lithium, autres antihypertenseurs.',
    grossesse_allaitement:
      'Molécule de référence pendant la grossesse. Post-partum : préférer un relais (risque de dépression).',
    surveillance: 'PA, bilan hépatique si symptômes.',
  },
  {
    slug: 'hydralazine',
    dci: 'Hydralazine',
    classe: 'Antihypertenseurs',
    mecanisme: 'Vasodilatateur artériolaire direct.',
    pharmacocinetique: 'Action IV en 10–20 min.',
    indications: 'HTA sévère de la grossesse (IV).',
    posologie:
      '5 mg IV lente, à répéter toutes les 20–30 min selon la PA (max 20–30 mg) ; ou perfusion selon protocole.',
    contre_indications: 'Lupus, cardiopathie ischémique sévère, rétrécissement mitral.',
    effets_indesirables:
      'Tachycardie, céphalées, hypotension brutale (souffrance fœtale), syndrome lupique (au long cours).',
    interactions: 'Autres antihypertenseurs.',
    grossesse_allaitement: 'Utilisable (OMS).',
    surveillance: 'PA toutes les 5–15 min, rythme cardiaque fœtal.',
  },
  {
    slug: 'enalapril',
    dci: 'Énalapril',
    classe: 'Antihypertenseurs',
    mecanisme:
      "Inhibiteur de l'enzyme de conversion (IEC) : baisse de l'angiotensine II et de l'aldostérone, néphroprotection.",
    pharmacocinetique: 'Prodrogue (énalaprilate), demi-vie ≈ 11 h, élimination rénale.',
    indications:
      'HTA (surtout si diabète, protéinurie), insuffisance cardiaque à FE réduite, néphropathie protéinurique.',
    posologie:
      '- **HTA** : 5–20 mg/j (max 40 mg)\n- **Insuffisance cardiaque** : 2,5 mg 2 fois par jour, à augmenter toutes les 2 semaines jusqu’à 10–20 mg 2 fois par jour',
    contre_indications:
      'Grossesse, antécédent d’angio-œdème, sténose bilatérale des artères rénales, association à sacubitril-valsartan.',
    effets_indesirables:
      'Toux sèche, hyperkaliémie, insuffisance rénale fonctionnelle, hypotension, angio-œdème.',
    interactions:
      'Diurétiques épargneurs de potassium, suppléments potassiques, AINS (insuffisance rénale), lithium.',
    grossesse_allaitement: 'Contre-indiqué pendant la grossesse (fœtotoxicité). Allaitement : possible.',
    surveillance: 'Créatinine et kaliémie avant, puis 1–2 semaines après chaque augmentation.',
  },
  {
    slug: 'losartan',
    dci: 'Losartan',
    classe: 'Antihypertenseurs',
    mecanisme: "Antagoniste des récepteurs AT1 de l'angiotensine II (ARA2).",
    pharmacocinetique: 'Métabolite actif, 1 prise par jour ; léger effet uricosurique.',
    indications: 'HTA, néphropathie diabétique, insuffisance cardiaque (si IEC non toléré).',
    posologie: '50 mg/j, jusqu’à 100 mg/j.',
    contre_indications: 'Grossesse, sténose bilatérale des artères rénales, association IEC.',
    effets_indesirables: 'Hyperkaliémie, insuffisance rénale fonctionnelle, hypotension (pas de toux).',
    interactions: 'Comme les IEC.',
    grossesse_allaitement: 'Contre-indiqué pendant la grossesse.',
    surveillance: 'Créatinine, kaliémie.',
  },
  {
    slug: 'valsartan',
    dci: 'Valsartan',
    classe: 'Antihypertenseurs',
    mecanisme: 'Antagoniste des récepteurs AT1 (ARA2).',
    pharmacocinetique: 'Demi-vie ≈ 6–9 h, élimination biliaire majoritaire.',
    indications: 'HTA, insuffisance cardiaque, post-infarctus ; composant du sacubitril-valsartan.',
    posologie: 'HTA : 80–160 mg/j (max 320 mg) ; IC : 40 mg 2 fois par jour, jusqu’à 160 mg 2 fois par jour.',
    contre_indications: 'Grossesse, insuffisance hépatique sévère, association IEC.',
    effets_indesirables: 'Hyperkaliémie, hypotension, insuffisance rénale fonctionnelle.',
    interactions: 'Comme les IEC.',
    grossesse_allaitement: 'Contre-indiqué pendant la grossesse.',
    surveillance: 'Créatinine, kaliémie, PA.',
  },
  {
    slug: 'sacubitril',
    dci: 'Sacubitril',
    classe: "Médicaments de l'insuffisance cardiaque",
    mecanisme:
      'Inhibiteur de la néprilysine : augmente les peptides natriurétiques (natriurèse, vasodilatation). Toujours associé au valsartan (ARNI).',
    pharmacocinetique: 'Prodrogue (LBQ657), 2 prises par jour.',
    indications: 'Insuffisance cardiaque à FE réduite, en remplacement de l’IEC/ARA2.',
    posologie: 'Uniquement en association avec le valsartan (voir le produit).',
    contre_indications:
      'Antécédent d’angio-œdème, association ou arrêt d’un IEC depuis moins de 36 h, grossesse, insuffisance hépatique sévère.',
    effets_indesirables: 'Hypotension, hyperkaliémie, insuffisance rénale, angio-œdème.',
    interactions: 'IEC (contre-indiqué), autres hyperkaliémiants.',
    grossesse_allaitement: 'Contre-indiqué.',
    surveillance:
      'PA, créatinine, kaliémie à chaque palier. Le BNP n’est plus interprétable (préférer le NT-proBNP).',
  },
  {
    slug: 'bisoprolol',
    dci: 'Bisoprolol',
    classe: 'Bêtabloquants',
    mecanisme:
      'Bêtabloquant bêta-1 sélectif : baisse de la fréquence cardiaque et de la consommation d’oxygène, effet anti-remodelage.',
    pharmacocinetique: 'Demi-vie 10–12 h, élimination mixte hépatique et rénale.',
    indications:
      'Insuffisance cardiaque à FE réduite (stable), HTA, angor, contrôle de la fréquence en fibrillation atriale.',
    posologie:
      '- **IC** : débuter à 1,25 mg/j, doubler toutes les 2 semaines si toléré jusqu’à 10 mg/j\n- **HTA** : 5–10 mg/j',
    contre_indications:
      'Asthme sévère, BAV 2e–3e degré non appareillé, bradycardie < 50/min, IC aiguë décompensée (ne pas initier), choc.',
    effets_indesirables:
      'Bradycardie, fatigue, hypotension, aggravation transitoire de l’IC à l’initiation, extrémités froides.',
    interactions: 'Vérapamil, diltiazem (bradycardie, BAV), amiodarone, digoxine.',
    grossesse_allaitement: 'Possible si nécessaire (surveillance de la croissance fœtale et du nouveau-né).',
    surveillance: 'FC, PA, signes congestifs ; ne pas arrêter brutalement.',
  },
  {
    slug: 'labetalol',
    dci: 'Labétalol',
    classe: 'Bêtabloquants',
    mecanisme:
      'Alpha-1 et bêtabloquant non sélectif : baisse des résistances périphériques sans tachycardie réflexe.',
    pharmacocinetique: 'Action IV en 5 min.',
    indications: 'HTA sévère de la grossesse, urgence hypertensive, HTA de l’AVC.',
    posologie:
      '- **IV** : 20 mg en 2 min, puis 40–80 mg toutes les 10 min (max 220–300 mg), ou perfusion 1–2 mg/min\n- **Oral** : 100–400 mg 2 à 3 fois par jour',
    contre_indications: 'Asthme, BAV, bradycardie, insuffisance cardiaque décompensée.',
    effets_indesirables:
      'Hypotension orthostatique, bradycardie, bronchospasme ; bradycardie et hypoglycémie néonatales.',
    interactions: 'Autres antihypertenseurs, inhibiteurs calciques bradycardisants.',
    grossesse_allaitement: 'Utilisable (OMS, ACOG). Surveiller le nouveau-né (glycémie, FC).',
    surveillance: 'PA et FC toutes les 5–15 min en phase IV.',
  },
  {
    slug: 'furosemide',
    dci: 'Furosémide',
    classe: 'Diurétiques',
    mecanisme: "Diurétique de l'anse : inhibition du cotransport Na-K-2Cl de la branche ascendante de Henle.",
    pharmacocinetique: 'Action IV en 5 min (durée 2 h), per os en 30–60 min (durée 6 h).',
    indications:
      'OAP et congestion de l’insuffisance cardiaque, syndrome œdémateux, hyperkaliémie (si diurèse conservée), HTA avec insuffisance rénale.',
    posologie:
      '- **OAP** : 40–80 mg IV (ou 1 à 2,5 fois la dose orale habituelle), à répéter selon la diurèse\n- **Entretien** : 20–80 mg/j per os',
    contre_indications:
      'Hypovolémie, déshydratation, anurie obstructive, hypokaliémie sévère, encéphalopathie hépatique.',
    effets_indesirables:
      'Hypokaliémie, hyponatrémie, déshydratation, insuffisance rénale fonctionnelle, hyperuricémie, ototoxicité (fortes doses IV rapides).',
    interactions: 'Aminosides (ototoxicité), lithium, digoxine (toxicité si hypokaliémie), AINS.',
    grossesse_allaitement: 'Éviter sauf OAP (risque d’hypovolémie fœto-placentaire).',
    surveillance: 'Diurèse, poids, PA, kaliémie, natrémie, créatinine.',
  },
  {
    slug: 'hydrochlorothiazide',
    dci: 'Hydrochlorothiazide',
    classe: 'Diurétiques',
    mecanisme: 'Diurétique thiazidique : inhibition du cotransport Na-Cl du tube contourné distal.',
    pharmacocinetique: 'Action en 2 h, durée 12–24 h ; peu efficace si DFG < 30 mL/min.',
    indications:
      'HTA (1re intention, notamment chez le patient d’ascendance africaine), en monothérapie ou association.',
    posologie: '12,5 à 25 mg 1 fois par jour.',
    contre_indications: 'Insuffisance rénale sévère, hypokaliémie, goutte, allergie aux sulfamides.',
    effets_indesirables: 'Hypokaliémie, hyponatrémie, hyperuricémie, hyperglycémie, photosensibilisation.',
    interactions: 'Lithium, AINS, digitaliques (si hypokaliémie).',
    grossesse_allaitement: 'Éviter de débuter pendant la grossesse.',
    surveillance: 'Kaliémie, natrémie, glycémie, uricémie.',
  },
  {
    slug: 'spironolactone',
    dci: 'Spironolactone',
    classe: 'Diurétiques',
    mecanisme:
      "Antagoniste des récepteurs de l'aldostérone (épargneur de potassium), anti-fibrosant myocardique.",
    pharmacocinetique: 'Métabolites actifs à demi-vie longue ; effet maximal en 2–3 jours.',
    indications:
      'Insuffisance cardiaque à FE réduite, ascite cirrhotique, HTA résistante, hyperaldostéronisme.',
    posologie: '- **IC** : 25 mg/j (jusqu’à 50 mg)\n- **Ascite** : 100–400 mg/j',
    contre_indications: 'Kaliémie > 5,0 mmol/L, DFG < 30 mL/min, insuffisance rénale aiguë.',
    effets_indesirables: 'Hyperkaliémie, gynécomastie, troubles des règles.',
    interactions: 'IEC, ARA2, suppléments potassiques, AINS, cotrimoxazole (hyperkaliémie).',
    grossesse_allaitement: 'Déconseillée pendant la grossesse.',
    surveillance: 'Kaliémie et créatinine à J3–7, M1, puis régulièrement.',
  },
  {
    slug: 'mannitol',
    dci: 'Mannitol',
    classe: 'Diurétiques',
    mecanisme:
      'Diurétique osmotique : crée un gradient osmotique qui réduit l’œdème cérébral et la pression intracrânienne.',
    pharmacocinetique: 'Action en 15–30 min, durée 2–6 h ; élimination rénale.',
    indications:
      'Hypertension intracrânienne avec signes d’engagement (traumatisme crânien), en attendant le geste neurochirurgical.',
    posologie: '0,25 à 1 g/kg IV en 15–20 min (mannitol 20 % = 0,2 g/mL), à répéter selon l’osmolalité.',
    contre_indications: 'Anurie, hypovolémie non corrigée, OAP, déshydratation sévère.',
    effets_indesirables:
      'Hypovolémie et hypotension, troubles électrolytiques, insuffisance rénale, effet rebond.',
    interactions: 'Autres diurétiques.',
    grossesse_allaitement: 'Selon le rapport bénéfice/risque (urgence vitale).',
    surveillance: 'PA (éviter l’hypotension), diurèse, natrémie, osmolalité (< 320 mOsm/kg).',
  },
  {
    slug: 'dapagliflozine',
    dci: 'Dapagliflozine',
    classe: 'Inhibiteurs SGLT2',
    mecanisme:
      'Inhibition du cotransporteur sodium-glucose de type 2 du tubule proximal : glycosurie, natriurèse, cardio- et néphroprotection indépendantes de la glycémie.',
    pharmacocinetique: 'Demi-vie ≈ 13 h, 1 prise par jour.',
    indications:
      'Insuffisance cardiaque (quelle que soit la FE), maladie rénale chronique, diabète de type 2 (surtout si atteinte cardiovasculaire ou rénale).',
    posologie: '10 mg 1 fois par jour.',
    contre_indications: 'Diabète de type 1, antécédent d’acidocétose ; ne pas débuter si DFG < 20–25 mL/min.',
    effets_indesirables:
      'Mycoses génitales, infections urinaires, déshydratation, acidocétose euglycémique (rare).',
    interactions: 'Diurétiques (hypovolémie), insuline et sulfamides (hypoglycémie).',
    grossesse_allaitement: 'Déconseillée.',
    surveillance:
      'Hydratation, créatinine ; suspendre en cas de maladie aiguë, jeûne ou 3 jours avant une chirurgie.',
  },
  {
    slug: 'acide-acetylsalicylique',
    dci: 'Acide acétylsalicylique (aspirine)',
    classe: 'Antithrombotiques',
    mecanisme:
      'Inhibition irréversible de la cyclo-oxygénase-1 plaquettaire (thromboxane A2) pour toute la durée de vie des plaquettes.',
    pharmacocinetique: 'Effet antiagrégant en 1 h, durée 7–10 jours.',
    indications:
      'AVC ischémique et AIT, syndrome coronarien, prévention cardiovasculaire secondaire ; prévention de la pré-éclampsie (faible dose).',
    posologie:
      '- **AVC ischémique** : 160–300 mg/j dès l’hémorragie exclue (24 h après une thrombolyse), puis 75–100 mg/j\n- **Prévention de la pré-éclampsie** : 75–150 mg le soir de 12 à 36 SA chez la femme à risque',
    contre_indications:
      'Hémorragie active, ulcère évolutif, allergie, enfant < 16 ans (syndrome de Reye) hors indication spécifique, grossesse > 24 SA aux doses antalgiques.',
    effets_indesirables: 'Hémorragies, ulcère gastroduodénal, bronchospasme (asthme à l’aspirine).',
    interactions: 'Anticoagulants, AINS, méthotrexate, corticoïdes.',
    grossesse_allaitement: 'Faible dose (≤ 150 mg/j) autorisée en prévention de la pré-éclampsie.',
    surveillance: 'Signes hémorragiques.',
  },
  {
    slug: 'alteplase',
    dci: 'Altéplase (rt-PA)',
    classe: 'Antithrombotiques',
    mecanisme: 'Activateur tissulaire recombinant du plasminogène : fibrinolyse du thrombus.',
    pharmacocinetique: 'Demi-vie ≈ 5 min.',
    indications:
      'AVC ischémique dans les 4 h 30 suivant le début des symptômes, après scanner excluant une hémorragie.',
    posologie: '0,9 mg/kg (max 90 mg) : 10 % en bolus IV en 1 min, puis 90 % en perfusion de 60 min.',
    contre_indications:
      'Hémorragie intracrânienne, PA > 185/110 mmHg non contrôlée, chirurgie majeure ou traumatisme crânien récent, plaquettes < 100 G/L, INR > 1,7, glycémie < 0,5 g/L, AVC étendu.',
    effets_indesirables:
      'Hémorragie intracrânienne symptomatique (≈ 6 %), hémorragies systémiques, angio-œdème.',
    interactions: 'Antithrombotiques (pas d’antiagrégant ni d’anticoagulant pendant 24 h).',
    grossesse_allaitement: 'Décision au cas par cas (centre spécialisé).',
    surveillance:
      'Score neurologique et PA toutes les 15 min pendant 2 h puis rapprochées 24 h ; PA < 180/105 mmHg ; scanner de contrôle à 24 h.',
  },
  {
    slug: 'atorvastatine',
    dci: 'Atorvastatine',
    classe: 'Hypolipémiants',
    mecanisme: 'Inhibiteur de l’HMG-CoA réductase : baisse du LDL-cholestérol, stabilisation de la plaque.',
    pharmacocinetique: 'Métabolisme CYP3A4, demi-vie longue (prise à toute heure).',
    indications:
      'Prévention cardiovasculaire secondaire (AVC ischémique, coronaropathie), prévention primaire du diabétique à risque.',
    posologie: '10–80 mg/j selon l’objectif de LDL (40–80 mg après un AVC ischémique).',
    contre_indications: 'Hépatopathie active, grossesse et allaitement.',
    effets_indesirables: 'Myalgies, élévation des transaminases ; rhabdomyolyse rare.',
    interactions: 'Inhibiteurs puissants du CYP3A4 (clarithromycine, ritonavir), ciclosporine.',
    grossesse_allaitement: 'Contre-indiquée.',
    surveillance: 'Bilan lipidique à 6–8 semaines ; transaminases et CPK si symptômes.',
  },

  // ================================================================ Diabète
  {
    slug: 'metformine',
    dci: 'Metformine',
    classe: 'Antidiabétiques oraux',
    mecanisme:
      'Biguanide : diminue la production hépatique de glucose et améliore la sensibilité à l’insuline ; pas d’hypoglycémie en monothérapie.',
    pharmacocinetique: 'Élimination rénale sous forme inchangée.',
    indications: 'Diabète de type 2 (1re intention en l’absence de contre-indication).',
    posologie:
      '500 mg 1 à 2 fois par jour au cours des repas, augmenter progressivement jusqu’à 2 g/j (max 3 g/j) ; DFG 30–45 : max 1 g/j.',
    contre_indications:
      'DFG < 30 mL/min, insuffisance hépatique, hypoxie (IC décompensée, insuffisance respiratoire), alcoolisme, acidocétose.',
    effets_indesirables:
      'Troubles digestifs (diarrhée, nausées), carence en vitamine B12 ; acidose lactique rare.',
    interactions:
      'Produits de contraste iodés (suspendre si DFG altéré), dolutégravir (↑ concentrations), alcool.',
    grossesse_allaitement:
      'Utilisable selon les protocoles (diabète gestationnel ou de type 2) ; insuline préférée en cas d’échec.',
    surveillance: 'DFG au moins annuel, vitamine B12 si traitement prolongé.',
  },
  {
    slug: 'gliclazide',
    dci: 'Gliclazide',
    classe: 'Antidiabétiques oraux',
    mecanisme: 'Sulfamide hypoglycémiant : stimule la sécrétion d’insuline par les cellules bêta.',
    pharmacocinetique: 'Métabolisme hépatique ; forme LM (libération modifiée) en 1 prise.',
    indications: 'Diabète de type 2, en 2e intention ou si metformine contre-indiquée.',
    posologie:
      'Forme LM : 30–120 mg 1 fois par jour au petit-déjeuner ; forme standard 80 mg : 40–320 mg/j en 1–2 prises.',
    contre_indications: 'Diabète de type 1, acidocétose, insuffisance hépatique ou rénale sévère, grossesse.',
    effets_indesirables: 'Hypoglycémies (moins fréquentes qu’avec le glibenclamide), prise de poids.',
    interactions: 'Fluconazole, bêtabloquants (masquent l’hypoglycémie), alcool.',
    grossesse_allaitement: 'Contre-indiqué (passer à l’insuline).',
    surveillance: 'Glycémie capillaire, éducation aux hypoglycémies (repas réguliers).',
  },
  {
    slug: 'insuline-humaine-rapide',
    dci: 'Insuline humaine rapide (régulière)',
    classe: 'Insulines',
    mecanisme:
      'Hormone hypoglycémiante : captation cellulaire du glucose, inhibition de la lipolyse et de la cétogenèse.',
    pharmacocinetique:
      'SC : début 30 min, pic 2–4 h, durée 6–8 h. IV : action immédiate, demi-vie de quelques minutes.',
    indications:
      'Acidocétose et hyperglycémies sévères (IV), insulinothérapie prandiale, hyperkaliémie (avec glucose).',
    posologie:
      '- **Acidocétose** : 0,1 UI/kg/h IV au pousse-seringue (après vérification de la kaliémie)\n- **Hyperkaliémie** : 10 UI IV + 25 g de glucose\n- **SC** : 30 min avant les repas, selon le schéma',
    contre_indications:
      'Hypoglycémie ; kaliémie < 3,5 mmol/L (différer l’insuline IV et corriger le potassium).',
    effets_indesirables: 'Hypoglycémie, hypokaliémie (IV), lipodystrophies aux points d’injection.',
    interactions: 'Bêtabloquants (masquent l’hypoglycémie), corticoïdes (hyperglycémie).',
    grossesse_allaitement: 'Traitement de référence du diabète pendant la grossesse.',
    surveillance:
      'Glycémie horaire (IV), kaliémie toutes les 2–4 h en acidocétose. Conservation 2–8 °C (flacon entamé : 4 semaines < 25–30 °C).',
  },
  {
    slug: 'insuline-nph',
    dci: 'Insuline humaine NPH (isophane)',
    classe: 'Insulines',
    mecanisme: 'Insuline humaine complexée à la protamine : action intermédiaire.',
    pharmacocinetique:
      'SC : début 1–2 h, pic 4–12 h, durée 12–18 h. Suspension à homogénéiser avant injection.',
    indications:
      'Insulinothérapie basale (diabète de type 2 en échec des ADO, diabète de type 1, diabète gestationnel).',
    posologie:
      'DT2 : 10 UI (ou 0,1–0,2 UI/kg) au coucher, ajuster de 2 UI tous les 3 jours selon la glycémie à jeun.',
    contre_indications: 'Hypoglycémie.',
    effets_indesirables: 'Hypoglycémies (notamment nocturnes), prise de poids.',
    interactions: 'Comme l’insuline rapide.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Glycémie à jeun, éducation aux hypoglycémies, conservation au froid.',
  },
  {
    slug: 'insuline-glargine',
    dci: 'Insuline glargine',
    classe: 'Insulines',
    mecanisme: 'Analogue lent de l’insuline : profil plat sur ≈ 24 h.',
    pharmacocinetique: 'Début 1–2 h, pas de pic, durée ≈ 24 h.',
    indications: 'Insulinothérapie basale (DT1, DT2).',
    posologie:
      '10 UI/j ou 0,1–0,2 UI/kg/j à heure fixe ; titrer de 2 UI tous les 3 jours vers une glycémie à jeun de 0,80–1,30 g/L.',
    contre_indications: 'Hypoglycémie.',
    effets_indesirables: 'Hypoglycémies (moins nocturnes que la NPH).',
    interactions: 'Comme l’insuline rapide.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Glycémie à jeun, HbA1c tous les 3 mois.',
  },

  // ================================================================ Respiratoire / corticoïdes
  {
    slug: 'salbutamol',
    dci: 'Salbutamol',
    classe: 'Bronchodilatateurs',
    mecanisme: 'Bêta-2 mimétique de courte durée d’action : relaxation du muscle lisse bronchique.',
    pharmacocinetique: 'Inhalé : action en < 5 min, durée 4–6 h.',
    indications: 'Crise d’asthme et exacerbations, bronchospasme ; hyperkaliémie (nébulisation).',
    posologie:
      '- **Crise (adulte)** : 4–10 bouffées de 100 µg en chambre d’inhalation toutes les 20 min pendant la 1re heure, ou nébulisation 2,5–5 mg\n- **Enfant** : 2–6 bouffées (chambre ± masque) ou 2,5 mg nébulisé\n- GINA : le salbutamol seul n’est plus recommandé en traitement de fond de l’adulte et de l’adolescent',
    contre_indications: 'Hypersensibilité ; prudence si cardiopathie, hyperthyroïdie.',
    effets_indesirables: 'Tremblements, tachycardie, palpitations, hypokaliémie.',
    interactions: 'Bêtabloquants non sélectifs (antagonisme), diurétiques hypokaliémiants.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'FR, SpO2, DEP, FC, kaliémie si fortes doses.',
  },
  {
    slug: 'formoterol',
    dci: 'Formotérol',
    classe: 'Bronchodilatateurs',
    mecanisme: 'Bêta-2 mimétique de longue durée d’action à début d’action rapide (1–3 min).',
    pharmacocinetique: 'Durée ≈ 12 h.',
    indications: 'Asthme (toujours associé à un corticoïde inhalé), BPCO.',
    posologie: 'En association avec le budésonide (voir le produit) ; ne jamais utiliser seul dans l’asthme.',
    contre_indications: 'Monothérapie dans l’asthme (risque de décès).',
    effets_indesirables: 'Tremblements, palpitations, céphalées, crampes.',
    interactions: 'Bêtabloquants, médicaments allongeant le QT.',
    grossesse_allaitement: 'Utilisable si nécessaire.',
    surveillance: 'Contrôle de l’asthme, technique d’inhalation.',
  },
  {
    slug: 'ipratropium',
    dci: 'Ipratropium (bromure)',
    classe: 'Bronchodilatateurs',
    mecanisme:
      'Anticholinergique (antimuscarinique) de courte durée : bronchodilatation additive à celle du salbutamol.',
    pharmacocinetique: 'Action en 15 min, durée 4–6 h.',
    indications: 'Exacerbation sévère d’asthme (avec salbutamol), BPCO.',
    posologie:
      'Nébulisation : adulte 500 µg, enfant 250 µg, toutes les 20 min pendant 1 h, avec le salbutamol.',
    contre_indications: 'Hypersensibilité à l’atropine.',
    effets_indesirables: 'Sécheresse buccale ; glaucome aigu si contact oculaire (masque bien ajusté).',
    interactions: 'Autres anticholinergiques.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Efficacité respiratoire.',
  },
  {
    slug: 'budesonide',
    dci: 'Budésonide',
    classe: 'Corticoïdes',
    mecanisme:
      'Corticoïde inhalé : traitement anti-inflammatoire de fond de l’asthme, réduit les exacerbations et la mortalité.',
    pharmacocinetique: 'Fort effet de premier passage hépatique (faible exposition systémique).',
    indications:
      'Asthme (traitement de fond et, associé au formotérol, traitement à la demande), laryngite (nébulisation).',
    posologie: 'Dose faible 200–400 µg/j, moyenne 400–800 µg/j, forte > 800 µg/j (adulte).',
    contre_indications: 'Hypersensibilité ; tuberculose pulmonaire active non traitée (prudence).',
    effets_indesirables: 'Candidose oropharyngée, dysphonie (se rincer la bouche après inhalation).',
    interactions: 'Inhibiteurs puissants du CYP3A4 (ritonavir : syndrome de Cushing).',
    grossesse_allaitement: 'Corticoïde inhalé de référence pendant la grossesse.',
    surveillance: 'Technique d’inhalation, contrôle de l’asthme ; croissance chez l’enfant.',
  },
  {
    slug: 'prednisolone',
    dci: 'Prednisolone',
    classe: 'Corticoïdes',
    mecanisme: 'Glucocorticoïde de durée d’action intermédiaire : anti-inflammatoire et immunosuppresseur.',
    pharmacocinetique: 'Excellente biodisponibilité orale, demi-vie biologique 12–36 h.',
    indications: 'Exacerbation d’asthme, maladies inflammatoires et auto-immunes, syndrome néphrotique.',
    posologie:
      '- **Exacerbation d’asthme** : adulte 40–50 mg/j pendant 5–7 jours ; enfant 1–2 mg/kg/j (max 40 mg) pendant 3–5 jours\n- Pas de décroissance si traitement < 2 semaines',
    contre_indications:
      'Infection non contrôlée (dont anguillulose : déparasiter par ivermectine en zone d’endémie).',
    effets_indesirables:
      'Hyperglycémie, HTA, troubles de l’humeur, infections ; au long cours : ostéoporose, insuffisance surrénale.',
    interactions: 'Rifampicine (↓ efficacité), AINS (ulcère), antidiabétiques.',
    grossesse_allaitement: 'Utilisable si indiquée.',
    surveillance: 'Glycémie, PA.',
  },
  {
    slug: 'hydrocortisone',
    dci: 'Hydrocortisone',
    classe: 'Corticoïdes',
    mecanisme: 'Glucocorticoïde naturel (activité minéralocorticoïde associée).',
    pharmacocinetique: 'IV : action en 1–2 h ; demi-vie biologique 8–12 h.',
    indications:
      'Asthme aigu grave si voie orale impossible, insuffisance surrénale aiguë, choc septique réfractaire, réactions anaphylactiques (adjuvant).',
    posologie:
      '- **Asthme aigu grave** : adulte 100–200 mg IV toutes les 6 h ; enfant 4 mg/kg toutes les 6 h\n- **Choc septique réfractaire** : 200 mg/j (50 mg toutes les 6 h)',
    contre_indications: 'Pas de contre-indication absolue en urgence.',
    effets_indesirables: 'Hyperglycémie, rétention hydrosodée, hypokaliémie.',
    interactions: 'Comme la prednisolone.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Glycémie, kaliémie.',
  },
  {
    slug: 'dexamethasone',
    dci: 'Dexaméthasone',
    classe: 'Corticoïdes',
    mecanisme:
      'Glucocorticoïde puissant de longue durée d’action, sans effet minéralocorticoïde ; traverse le placenta.',
    pharmacocinetique: 'Demi-vie biologique 36–54 h.',
    indications:
      '- Maturation pulmonaire fœtale (24–34 SA) si accouchement prématuré imminent et conditions de soins réunies (OMS)\n- Méningite bactérienne (adjuvant, hors nouveau-né)\n- Œdème cérébral tumoral, laryngite sévère',
    posologie:
      '- **Maturation fœtale** : 6 mg IM toutes les 12 h, 4 doses\n- **Méningite** : 0,15 mg/kg IV toutes les 6 h pendant 4 jours, débuté avant ou avec la 1re dose d’antibiotique\n- **Laryngite** : 0,15–0,6 mg/kg dose unique',
    contre_indications: 'Infection systémique non traitée (hors méningite traitée), méningite du nouveau-né.',
    effets_indesirables: 'Hyperglycémie, troubles digestifs, agitation.',
    interactions: 'Inducteurs enzymatiques (↓ efficacité).',
    grossesse_allaitement: 'Indiquée pour la maturation pulmonaire fœtale.',
    surveillance: 'Glycémie (notamment chez la diabétique).',
  },

  // ================================================================ Anticonvulsivants
  {
    slug: 'diazepam',
    dci: 'Diazépam',
    classe: 'Anticonvulsivants',
    mecanisme: 'Benzodiazépine : potentialisation des récepteurs GABA-A.',
    pharmacocinetique:
      'Très liposoluble ; action IV en 1–3 min ; redistribution rapide (récidive possible) ; demi-vie 20–100 h (métabolites actifs).',
    indications:
      'Crise convulsive prolongée et état de mal épileptique (1re ligne), sevrage alcoolique, anxiété aiguë.',
    posologie:
      '- **Adulte** : 10 mg IV lente\n- **Enfant** : 0,3 mg/kg IV (max 10 mg) ou 0,5 mg/kg intrarectal (max 10 mg)\n- Une seule répétition après 5–10 min',
    contre_indications: 'Insuffisance respiratoire sévère non ventilée, myasthénie.',
    effets_indesirables: 'Dépression respiratoire, hypotension, sédation prolongée.',
    interactions: 'Autres dépresseurs du SNC (phénobarbital, opioïdes, alcool) : risque respiratoire accru.',
    grossesse_allaitement:
      'Utilisable en urgence (risque d’hypotonie néonatale si proche de l’accouchement).',
    surveillance: 'FR, SpO2, conscience ; antidote : flumazénil (prudence si épilepsie).',
  },
  {
    slug: 'midazolam',
    dci: 'Midazolam',
    classe: 'Anticonvulsivants',
    mecanisme: 'Benzodiazépine hydrosoluble de courte durée d’action.',
    pharmacocinetique: 'Absorption IM et buccale rapide (action en 5 min), demi-vie 2–3 h.',
    indications: 'État de mal épileptique (IM, buccal ou IV, alternative au diazépam), sédation.',
    posologie:
      '- **IM** : 10 mg si > 40 kg ; 5 mg si 13–40 kg\n- **Buccal/intranasal** : 0,3 mg/kg (max 10 mg)\n- **IV** : 0,1–0,2 mg/kg',
    contre_indications: 'Insuffisance respiratoire sévère non ventilée.',
    effets_indesirables: 'Dépression respiratoire, hypotension.',
    interactions: 'Inhibiteurs du CYP3A4 (↑ effet), dépresseurs du SNC.',
    grossesse_allaitement: 'Utilisable en urgence.',
    surveillance: 'FR, SpO2, conscience.',
  },
  {
    slug: 'phenobarbital',
    dci: 'Phénobarbital',
    classe: 'Anticonvulsivants',
    mecanisme: 'Barbiturique : prolonge l’ouverture des canaux chlore GABA-A.',
    pharmacocinetique: 'Demi-vie 75–120 h (1 prise par jour) ; puissant inducteur enzymatique.',
    indications:
      'État de mal épileptique (2e ligne), convulsions néonatales (1re ligne), épilepsie (traitement de fond en contexte de ressources limitées, mhGAP).',
    posologie:
      '- **État de mal / convulsions néonatales** : 20 mg/kg IV lente (≥ 20 min ; max 1 g chez l’adulte)\n- **Traitement de fond** : adulte 1–3 mg/kg/j (60–180 mg au coucher) ; enfant 3–6 mg/kg/j',
    contre_indications: 'Porphyrie, insuffisance respiratoire sévère.',
    effets_indesirables:
      'Sédation, dépression respiratoire (IV), troubles du comportement et de l’apprentissage chez l’enfant, éruptions, dépendance.',
    interactions:
      'Inducteur enzymatique : contraceptifs hormonaux, ARV, anticoagulants, antipaludiques, corticoïdes.',
    grossesse_allaitement:
      'Tératogène (cardiopathies, fentes) : dose minimale efficace, acide folique ; vitamine K au nouveau-né.',
    surveillance: 'Vigilance, FR (IV), observance ; arrêt progressif.',
  },
  {
    slug: 'phenytoine',
    dci: 'Phénytoïne',
    classe: 'Anticonvulsivants',
    mecanisme: 'Blocage des canaux sodiques voltage-dépendants.',
    pharmacocinetique:
      'Cinétique non linéaire (saturable) ; inducteur enzymatique ; liaison protéique forte.',
    indications: 'État de mal épileptique (2e ligne), épilepsie focale.',
    posologie:
      '20 mg/kg IV dans du NaCl 0,9 % (jamais dans du glucosé), débit ≤ 50 mg/min (adulte), ≤ 1 mg/kg/min (enfant).',
    contre_indications: 'Bradycardie sinusale, BAV, syndrome d’Adams-Stokes.',
    effets_indesirables:
      'Troubles du rythme et hypotension (perfusion rapide), nécrose cutanée (extravasation), nystagmus, ataxie, hypertrophie gingivale (au long cours).',
    interactions:
      'Nombreuses (inducteur) ; valproate, isoniazide, fluconazole augmentent ses concentrations.',
    grossesse_allaitement: 'Tératogène (syndrome d’hydantoïne fœtale) : éviter au long cours.',
    surveillance: 'ECG et PA pendant la perfusion, point de perfusion.',
  },
  {
    slug: 'levetiracetam',
    dci: 'Lévétiracétam',
    classe: 'Anticonvulsivants',
    mecanisme: 'Liaison à la protéine vésiculaire synaptique SV2A.',
    pharmacocinetique: 'Biodisponibilité ≈ 100 %, élimination rénale (adapter), quasi pas d’interactions.',
    indications: 'Épilepsies focales et généralisées, état de mal épileptique (2e ligne).',
    posologie:
      '- **État de mal** : 60 mg/kg IV (max 4 500 mg) en 10–15 min\n- **Fond** : 500 mg 2 fois par jour, jusqu’à 1 500 mg 2 fois par jour ; enfant 10–30 mg/kg 2 fois par jour',
    contre_indications: 'Hypersensibilité.',
    effets_indesirables: 'Somnolence, irritabilité, troubles de l’humeur (rarement idées suicidaires).',
    interactions: 'Très peu d’interactions.',
    grossesse_allaitement: 'Parmi les antiépileptiques les plus sûrs pendant la grossesse.',
    surveillance: 'Humeur, fonction rénale.',
  },
  {
    slug: 'acide-valproique',
    dci: 'Acide valproïque (valproate de sodium)',
    classe: 'Anticonvulsivants',
    mecanisme:
      'Mécanismes multiples : augmentation du GABA, blocage des canaux sodiques et calciques T ; large spectre.',
    pharmacocinetique: 'Demi-vie 8–15 h ; inhibiteur enzymatique ; liaison protéique forte.',
    indications:
      'Épilepsies généralisées (absences, myoclonies, crises tonico-cloniques), état de mal (2e ligne), trouble bipolaire.',
    posologie:
      '- **Fond** : 10–15 mg/kg/j en 2 prises, augmenter jusqu’à 20–30 mg/kg/j\n- **État de mal** : 40 mg/kg IV (max 3 000 mg) en 10 min',
    contre_indications:
      'Hépatopathie, maladie mitochondriale (POLG), porphyrie. Femme et fille en âge de procréer : uniquement en l’absence d’alternative, avec contraception efficace.',
    effets_indesirables:
      'Hépatotoxicité (enfant < 2 ans, polythérapie), pancréatite, prise de poids, tremblements, thrombopénie, hyperammoniémie, alopécie.',
    interactions: 'Lamotrigine (↑), carbapénèmes (effondrement des concentrations), aspirine, phénobarbital.',
    grossesse_allaitement:
      'Tératogène majeur (≈ 10 % de malformations, 30–40 % de troubles neurodéveloppementaux) : à éviter pendant la grossesse.',
    surveillance: 'Bilan hépatique et plaquettes avant et pendant les 6 premiers mois.',
  },
  {
    slug: 'carbamazepine',
    dci: 'Carbamazépine',
    classe: 'Anticonvulsivants',
    mecanisme: 'Blocage des canaux sodiques voltage-dépendants.',
    pharmacocinetique:
      'Auto-induction (adapter les doses après 2–4 semaines) ; puissant inducteur enzymatique.',
    indications: 'Épilepsie focale (± généralisation secondaire), névralgie du trijumeau, trouble bipolaire.',
    posologie:
      '100–200 mg 1 à 2 fois par jour, augmenter progressivement jusqu’à 800–1 200 mg/j ; enfant 10–20 mg/kg/j.',
    contre_indications:
      'BAV, antécédent d’aplasie médullaire, porphyrie ; épilepsies absences/myoclonies (aggravation).',
    effets_indesirables:
      'Vertiges, diplopie, hyponatrémie, éruptions (jusqu’au syndrome de Stevens-Johnson), leucopénie, hépatite.',
    interactions:
      'Inducteur : contraceptifs, ARV (dont dolutégravir), anticoagulants ; inhibiteurs du CYP3A4 (toxicité).',
    grossesse_allaitement: 'Tératogène (spina bifida ≈ 1 %) : acide folique, dose minimale.',
    surveillance: 'NFS, natrémie, bilan hépatique ; éruption cutanée dans les 2 premiers mois.',
  },
  {
    slug: 'sulfate-de-magnesium',
    dci: 'Sulfate de magnésium',
    classe: 'Anticonvulsivants',
    mecanisme: 'Antagoniste calcique et des récepteurs NMDA ; vasodilatation cérébrale ; bronchodilatation.',
    pharmacocinetique: 'Élimination rénale exclusive (accumulation en cas d’oligurie).',
    indications:
      'Prévention et traitement de l’éclampsie (référence), neuroprotection fœtale avant 32 SA, asthme aigu grave, torsades de pointes.',
    posologie:
      "- **Zuspan (IV)** : 4 g IV en 15–20 min, puis 1 g/h pendant 24 h après l'accouchement ou la dernière crise\n- **Pritchard (IM)** : 4 g IV + 10 g IM (5 g dans chaque fesse), puis 5 g IM toutes les 4 h\n- **Asthme aigu grave** : 2 g IV en 20 min (enfant 40 mg/kg, max 2 g)",
    contre_indications: 'Myasthénie, BAV, insuffisance rénale sévère (adapter l’entretien).',
    effets_indesirables:
      'Bouffées de chaleur. Surdosage : abolition des réflexes ostéotendineux, FR < 12/min, oligurie, arrêt respiratoire.',
    interactions: 'Inhibiteurs calciques (potentialisation), curares.',
    grossesse_allaitement: 'Molécule de référence dans la pré-éclampsie sévère et l’éclampsie.',
    surveillance:
      'Toutes les heures : réflexes rotuliens, FR (≥ 12/min), diurèse (≥ 30 mL/h). Antidote : gluconate de calcium 1 g IV lente.',
  },

  // ================================================================ Obstétrique
  {
    slug: 'ocytocine',
    dci: 'Ocytocine',
    classe: 'Utérotoniques',
    mecanisme: 'Hormone posthypophysaire de synthèse : contractions utérines rythmées.',
    pharmacocinetique: 'IV : action immédiate, demi-vie 3–5 min ; IM : action en 3–7 min.',
    indications:
      'Prévention de l’HPP (GATPA, 1re intention), traitement de l’HPP, induction et direction du travail.',
    posologie:
      '- **Prévention** : 10 UI IM (ou IV lente) dès la naissance\n- **Traitement de l’HPP** : 10 UI IV lente, puis perfusion de 20–40 UI dans 1 L de cristalloïde (≈ 60 gouttes/min)',
    contre_indications:
      'Hypertonie utérine, souffrance fœtale (en cours de travail), disproportion fœto-pelvienne.',
    effets_indesirables:
      'Hypotension (bolus IV rapide), hyperstimulation utérine, intoxication par l’eau (fortes doses prolongées).',
    interactions: 'Prostaglandines (potentialisation).',
    grossesse_allaitement: 'Indications obstétricales.',
    surveillance:
      'Tonus utérin, saignements, PA. **Thermosensible : conserver entre 2 et 8 °C** (chaîne du froid).',
  },
  {
    slug: 'carbetocine',
    dci: 'Carbétocine',
    classe: 'Utérotoniques',
    mecanisme: 'Analogue de l’ocytocine à longue durée d’action.',
    pharmacocinetique: 'Action en 2 min, durée ≈ 1 h (IV) à 2 h (IM).',
    indications:
      'Prévention de l’HPP (OMS 2018 : formulation thermostable si coût comparable à l’ocytocine).',
    posologie: '100 µg IM ou IV lente en dose unique, après l’expulsion de l’enfant.',
    contre_indications:
      'Induction ou direction du travail (jamais avant la naissance), hypersensibilité, épilepsie (prudence).',
    effets_indesirables: 'Nausées, céphalées, bouffées de chaleur, hypotension.',
    interactions: 'Ocytocine, prostaglandines.',
    grossesse_allaitement: 'Uniquement après la naissance.',
    surveillance: 'Tonus utérin, saignements. Formulation thermostable : conservation ≤ 30 °C.',
  },
  {
    slug: 'misoprostol',
    dci: 'Misoprostol',
    classe: 'Utérotoniques',
    mecanisme: 'Analogue de la prostaglandine E1 : contractions utérines, maturation cervicale.',
    pharmacocinetique: 'Absorption rapide (orale, sublinguale, rectale) ; thermostable.',
    indications:
      'Prévention de l’HPP si ocytocine indisponible, traitement de l’HPP (adjuvant), évacuation utérine, maturation cervicale (selon protocoles).',
    posologie:
      '- **Prévention de l’HPP** : 600 µg per os en dose unique\n- **Traitement de l’HPP** : 800 µg par voie sublinguale',
    contre_indications:
      'Grossesse en cours hors indications obstétricales encadrées ; ne pas administrer avant la naissance dans le cadre de la prévention de l’HPP.',
    effets_indesirables: 'Frissons, fièvre (parfois > 40 °C), diarrhée, nausées.',
    interactions: 'Ocytocine (potentialisation).',
    grossesse_allaitement: 'Indications obstétricales uniquement.',
    surveillance: 'Température, saignements.',
  },
  {
    slug: 'acide-tranexamique',
    dci: 'Acide tranexamique',
    classe: 'Antifibrinolytiques',
    mecanisme:
      'Analogue de la lysine : bloque la fixation du plasminogène sur la fibrine (inhibition de la fibrinolyse).',
    pharmacocinetique: 'Élimination rénale, demi-vie ≈ 2 h.',
    indications:
      'HPP (dans les 3 h, en plus des utérotoniques), traumatisme hémorragique et traumatisme crânien léger à modéré (dans les 3 h), ménorragies.',
    posologie:
      '- **HPP** : 1 g IV en 10 min dès le diagnostic (dans les 3 h) ; 2e dose de 1 g si le saignement persiste après 30 min ou reprend dans les 24 h\n- **Traumatisme** : 1 g IV en 10 min, puis 1 g sur 8 h',
    contre_indications:
      'Thrombose artérielle ou veineuse active, antécédent de convulsions (prudence), insuffisance rénale sévère.',
    effets_indesirables: 'Nausées, vomissements ; convulsions à fortes doses.',
    interactions: 'Médicaments prothrombotiques (œstrogènes).',
    grossesse_allaitement: 'Utilisable (HPP).',
    surveillance: 'Saignement ; ne pas administrer au-delà de 3 h après le début (perte d’efficacité).',
  },
  {
    slug: 'methotrexate',
    dci: 'Méthotrexate',
    classe: 'Antimétabolites',
    mecanisme:
      'Antifolique (inhibition de la dihydrofolate réductase) : bloque la prolifération du trophoblaste.',
    pharmacocinetique: 'Élimination rénale.',
    indications:
      'GEU non rompue, stable, sous conditions (traitement médical) ; maladies trophoblastiques ; polyarthrite rhumatoïde (faibles doses).',
    posologie:
      '**GEU (protocole monodose)** : 50 mg/m² IM ; β-hCG à J4 et J7 (baisse attendue ≥ 15 % entre J4 et J7, sinon 2e dose).',
    contre_indications:
      'GEU rompue ou instabilité hémodynamique, grossesse intra-utérine, allaitement, insuffisance rénale ou hépatique, cytopénie, ulcère évolutif, activité cardiaque embryonnaire (relative), β-hCG > 5 000 UI/L (relative), impossibilité de suivi.',
    effets_indesirables: 'Douleurs abdominales transitoires, stomatite, nausées, cytopénies, hépatotoxicité.',
    interactions: 'AINS, cotrimoxazole, pénicillines (↑ toxicité), acide folique (↓ efficacité), alcool.',
    grossesse_allaitement: 'Tératogène : contraception et délai de 3 mois avant une nouvelle grossesse.',
    surveillance:
      'β-hCG jusqu’à négativation ; NFS, créatinine, transaminases avant traitement ; signes de rupture.',
  },
  {
    slug: 'hydroxycarbamide',
    dci: 'Hydroxycarbamide (hydroxyurée)',
    classe: 'Antimétabolites',
    mecanisme:
      'Inhibiteur de la ribonucléotide réductase ; augmente l’hémoglobine fœtale (HbF), réduit les crises et les syndromes thoraciques.',
    pharmacocinetique: 'Biodisponibilité orale élevée, élimination rénale.',
    indications:
      'Drépanocytose (dès 9 mois selon ASH/NHLBI) : crises douloureuses répétées, syndrome thoracique aigu, anémie sévère, prévention de l’AVC (relais des transfusions).',
    posologie:
      'Débuter à 15–20 mg/kg/j, augmenter de 5 mg/kg toutes les 8 semaines jusqu’à la dose maximale tolérée (max 35 mg/kg/j).',
    contre_indications: 'Myélosuppression sévère, grossesse.',
    effets_indesirables:
      'Neutropénie, thrombopénie, troubles digestifs, hyperpigmentation cutanée et unguéale.',
    interactions: 'Autres myélosuppresseurs, ARV (didanosine, stavudine).',
    grossesse_allaitement: 'Contre-indiqué (tératogène) : contraception efficace.',
    surveillance:
      'NFS toutes les 4 semaines pendant la titration (neutrophiles ≥ 1–2 G/L, plaquettes ≥ 80 G/L), puis tous les 2–3 mois ; HbF.',
  },

  // ================================================================ Antalgiques
  {
    slug: 'paracetamol',
    dci: 'Paracétamol',
    classe: 'Antalgiques',
    mecanisme: 'Antalgique et antipyrétique d’action centrale ; pas d’effet anti-inflammatoire.',
    pharmacocinetique: 'Action en 30–60 min, demi-vie 2 h, métabolisme hépatique.',
    indications: 'Douleur légère à modérée, fièvre ; associé aux autres antalgiques (palier 1).',
    posologie:
      '- **Enfant** : 15 mg/kg toutes les 6 h (max 60 mg/kg/j)\n- **Adulte** : 1 g toutes les 6 h (max 4 g/j ; 3 g/j si < 50 kg, malnutrition, alcoolisme, hépatopathie)',
    contre_indications: 'Insuffisance hépatocellulaire sévère.',
    effets_indesirables: 'Rares aux doses thérapeutiques ; hépatite fulminante en cas de surdosage.',
    interactions: 'Anticoagulants oraux (↑ INR à fortes doses), isoniazide.',
    grossesse_allaitement: 'Antalgique de 1re intention.',
    surveillance: 'Dose cumulée quotidienne. Antidote : N-acétylcystéine.',
  },
  {
    slug: 'ibuprofene',
    dci: 'Ibuprofène',
    classe: 'Antalgiques',
    mecanisme: 'AINS : inhibition réversible des cyclo-oxygénases.',
    pharmacocinetique: 'Demi-vie 2 h.',
    indications:
      'Douleur, fièvre, inflammation ; crise vaso-occlusive peu sévère (en association, si fonction rénale normale).',
    posologie:
      '- **Enfant** : 10 mg/kg toutes les 8 h (max 30 mg/kg/j)\n- **Adulte** : 400 mg 3 fois par jour (max 1 200 mg/j en automédication)',
    contre_indications:
      'Grossesse à partir de 24 SA (dès 20 SA selon certaines agences), ulcère, insuffisance rénale, déshydratation, insuffisance cardiaque sévère, varicelle, asthme aux AINS, dengue suspectée.',
    effets_indesirables:
      'Ulcère et hémorragie digestive, insuffisance rénale aiguë, HTA, rétention hydrosodée.',
    interactions: 'IEC, ARA2, diurétiques (insuffisance rénale), anticoagulants, méthotrexate, lithium.',
    grossesse_allaitement:
      'Contre-indiqué au 3e trimestre ; éviter pendant toute la grossesse sauf nécessité.',
    surveillance: 'Créatinine si terrain à risque, tolérance digestive.',
  },
  {
    slug: 'morphine',
    dci: 'Morphine',
    classe: 'Antalgiques',
    mecanisme: 'Agoniste des récepteurs opioïdes mu : antalgique de palier 3.',
    pharmacocinetique:
      'IV : action en 5–10 min ; per os : 30–60 min, durée 4 h ; métabolite actif (M6G) éliminé par le rein.',
    indications:
      'Douleur intense : crise vaso-occlusive sévère, douleur postopératoire, traumatisme, cancer, OAP (prudence).',
    posologie:
      '- **IV (titration adulte)** : 2–3 mg toutes les 5–10 min jusqu’au soulagement\n- **Enfant > 1 an** : 0,1 mg/kg IV puis 0,025 mg/kg toutes les 5–10 min ; per os 0,2–0,4 mg/kg toutes les 4 h\n- Réduire les doses en cas d’insuffisance rénale',
    contre_indications:
      'Insuffisance respiratoire décompensée, HTIC non ventilée, insuffisance hépatocellulaire sévère.',
    effets_indesirables:
      'Dépression respiratoire, sédation, constipation (laxatif systématique), nausées, prurit, rétention urinaire.',
    interactions: 'Benzodiazépines et autres dépresseurs du SNC (dépression respiratoire).',
    grossesse_allaitement: 'Utilisable ; surveiller le nouveau-né (dépression respiratoire, sevrage).',
    surveillance:
      'FR, sédation (échelle), EVA ; antidote : naloxone 0,1 mg/kg (enfant) ou 0,04–0,4 mg titrés (adulte).',
  },

  // ================================================================ Solutés, électrolytes, nutrition
  {
    slug: 'ringer-lactate',
    dci: 'Ringer lactate',
    classe: 'Solutés et électrolytes',
    mecanisme:
      'Cristalloïde « équilibré » (Na 130, K 4, Ca 1,4–2, Cl 109, lactate 28 mmol/L) : expansion du volume extracellulaire.',
    pharmacocinetique: '≈ 25 % du volume perfusé reste dans le secteur vasculaire.',
    indications:
      'Choc hypovolémique et septique, déshydratation sévère (plan C OMS), choléra, remplissage per- et postopératoire.',
    posologie:
      '- **Plan C OMS** : 100 mL/kg (voir urgence « Déshydratation sévère »)\n- **Choc (adulte)** : bolus de 500–1 000 mL, réévaluer\n- **Enfant** : bolus de 10–20 mL/kg',
    contre_indications:
      'Surcharge hydrosodée ; MAS (schéma spécifique) ; prudence en cas d’hyperkaliémie sévère et de traumatisme crânien (légèrement hypotonique).',
    effets_indesirables: 'Surcharge volémique (OAP).',
    interactions: 'Incompatible avec la ceftriaxone et les transfusions sur la même ligne (calcium).',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'FC, PA, temps de recoloration, diurèse, auscultation pulmonaire.',
  },
  {
    slug: 'chlorure-de-sodium-0-9',
    dci: 'Chlorure de sodium 0,9 %',
    classe: 'Solutés et électrolytes',
    mecanisme: 'Cristalloïde isotonique (Na 154, Cl 154 mmol/L ; 308 mOsm/L).',
    pharmacocinetique: 'Comme le Ringer lactate.',
    indications: 'Remplissage, acidocétose, traumatisme crânien (soluté de choix), dilution des médicaments.',
    posologie: 'Selon l’indication (bolus de 10–20 mL/kg chez l’enfant, 500–1 000 mL chez l’adulte).',
    contre_indications: 'Surcharge hydrosodée, hypernatrémie.',
    effets_indesirables: 'Acidose hyperchlorémique (grands volumes), surcharge.',
    interactions: 'Incompatibilités propres à chaque médicament dilué.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Volémie, natrémie, chlorémie.',
  },
  {
    slug: 'glucose-10',
    dci: 'Glucose 10 %',
    classe: 'Solutés et électrolytes',
    mecanisme: 'Apport glucidique (10 g/100 mL).',
    pharmacocinetique: 'Correction de la glycémie en quelques minutes.',
    indications:
      'Hypoglycémie (enfant et adulte), apport glucidique (paludisme grave, quinine), acidocétose (dès glycémie < 2,5 g/L).',
    posologie:
      '- **Hypoglycémie de l’enfant** : 5 mL/kg IV (ou par sonde gastrique)\n- **Adulte** : 150–250 mL IV (ou glucose 30 % 50 mL)\n- Puis perfusion d’entretien et contrôle à 15–30 min',
    contre_indications: 'Hyperglycémie.',
    effets_indesirables: 'Veinite, hyperglycémie, hyponatrémie (soluté hypotonique en entretien).',
    interactions: 'Aucune notable.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Glycémie capillaire.',
  },
  {
    slug: 'chlorure-de-potassium',
    dci: 'Chlorure de potassium',
    classe: 'Solutés et électrolytes',
    mecanisme: 'Apport de potassium (1 g de KCl = 13,4 mmol).',
    pharmacocinetique: 'Répartition intracellulaire progressive.',
    indications: 'Hypokaliémie, acidocétose (dès K < 5,0–5,3 mmol/L avec diurèse), pertes digestives.',
    posologie:
      '- **Toujours dilué** en perfusion : 20–40 mmol/L de soluté\n- Débit max ≈ 10 mmol/h en voie périphérique (20 mmol/h sous scope)\n- **Jamais en IV directe** (arrêt cardiaque)',
    contre_indications: 'Hyperkaliémie, anurie, insuffisance rénale aiguë oligurique.',
    effets_indesirables: 'Hyperkaliémie, veinite, troubles du rythme si débit excessif.',
    interactions: 'IEC, ARA2, spironolactone (hyperkaliémie).',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Kaliémie toutes les 2–4 h, ECG si correction rapide, diurèse.',
  },
  {
    slug: 'gluconate-de-calcium',
    dci: 'Gluconate de calcium',
    classe: 'Solutés et électrolytes',
    mecanisme: 'Apport de calcium (10 mL à 10 % = 2,2 mmol) ; stabilisation de la membrane myocardique.',
    pharmacocinetique: 'Action immédiate (IV), durée 30–60 min.',
    indications:
      'Hyperkaliémie avec signes ECG, surdosage en sulfate de magnésium, hypocalcémie symptomatique.',
    posologie:
      '- **Hyperkaliémie** : 10 mL de gluconate de calcium 10 % IV en 3–5 min (répéter si ECG inchangé)\n- **Antidote du magnésium** : 1 g (10 mL à 10 %) IV lente en 10 min',
    contre_indications: 'Intoxication digitalique (prudence), hypercalcémie.',
    effets_indesirables: 'Bradycardie si injection rapide, nécrose en cas d’extravasation.',
    interactions: 'Ceftriaxone (précipités, surtout chez le nouveau-né), bicarbonate (précipités), digoxine.',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'ECG, FC pendant l’injection.',
  },
  {
    slug: 'sro',
    dci: 'Sels de réhydratation orale (SRO, osmolarité réduite)',
    classe: 'Solutés et électrolytes',
    mecanisme:
      'Cotransport sodium-glucose intestinal préservé au cours des diarrhées (Na 75, glucose 75, K 20, Cl 65, citrate 10 mmol/L ; 245 mOsm/L).',
    pharmacocinetique: 'Absorption intestinale active.',
    indications:
      'Prévention et traitement de la déshydratation des diarrhées aiguës (dont choléra) de l’enfant et de l’adulte.',
    posologie:
      '- **Plan A** (après chaque selle) : < 2 ans 50–100 mL ; 2–10 ans 100–200 mL ; plus âgés : à volonté\n- **Plan B** : 75 mL/kg en 4 h, puis réévaluer\n- 1 sachet dans 1 L d’eau potable, à utiliser dans les 24 h',
    contre_indications:
      'Choc (réhydratation IV d’abord), iléus, vomissements incoercibles ; MAS (préférer ReSoMal, sauf choléra).',
    effets_indesirables: 'Vomissements si prise trop rapide (donner à la cuillère, par petites gorgées).',
    interactions: 'Aucune.',
    grossesse_allaitement: 'Utilisable ; poursuivre l’allaitement.',
    surveillance: 'Signes de déshydratation, diurèse, nombre de selles.',
  },
  {
    slug: 'resomal',
    dci: 'ReSoMal (solution de réhydratation pour malnutris)',
    classe: 'Solutés et électrolytes',
    mecanisme:
      'Solution pauvre en sodium (≈ 45 mmol/L) et riche en potassium (≈ 40 mmol/L), adaptée au déséquilibre électrolytique de la MAS.',
    pharmacocinetique: 'Absorption intestinale.',
    indications: 'Déshydratation chez l’enfant atteint de malnutrition aiguë sévère (hors choléra).',
    posologie:
      '5 mL/kg toutes les 30 min pendant 2 h, puis 5–10 mL/kg/h en alternance avec le F-75, jusqu’à 10 h maximum, selon la réévaluation.',
    contre_indications:
      'Choléra ou diarrhée aqueuse profuse (préférer les SRO standard), enfant non malnutri.',
    effets_indesirables: 'Surcharge volémique si réhydratation trop rapide.',
    interactions: 'Aucune.',
    grossesse_allaitement: 'Non applicable.',
    surveillance:
      'Toutes les 30 min : FR, FC, poids, diurèse, signes de surcharge (arrêt si FR et FC augmentent).',
  },
  {
    slug: 'zinc',
    dci: 'Zinc (sulfate)',
    classe: 'Micronutriments et vitamines',
    mecanisme:
      'Restauration de la muqueuse intestinale et de l’immunité : réduit la durée, la sévérité et la récidive des diarrhées.',
    pharmacocinetique: 'Absorption intestinale.',
    indications: 'Diarrhée aiguë de l’enfant (avec les SRO).',
    posologie:
      '- < 6 mois : 10 mg/j pendant 10–14 jours\n- ≥ 6 mois : 20 mg/j pendant 10–14 jours (comprimé dispersible)',
    contre_indications: 'Aucune dans l’indication.',
    effets_indesirables: 'Vomissements (redonner la dose si vomie dans les 30 min).',
    interactions: 'Fer, cyclines, quinolones (espacer).',
    grossesse_allaitement: 'Non applicable.',
    surveillance: 'Poursuivre toute la durée même si la diarrhée cesse.',
  },
  {
    slug: 'acide-folique',
    dci: 'Acide folique',
    classe: 'Micronutriments et vitamines',
    mecanisme: 'Vitamine B9 nécessaire à la synthèse de l’ADN et à l’érythropoïèse.',
    pharmacocinetique: 'Absorption jéjunale.',
    indications:
      'Anémies hémolytiques chroniques (drépanocytose), prévention des anomalies du tube neural, traitement sous antiépileptiques.',
    posologie:
      '- **Drépanocytose** : 1 à 5 mg/j selon le protocole\n- **Péri-conception** : 0,4 mg/j (5 mg/j si antiépileptiques ou antécédent d’anomalie du tube neural)',
    contre_indications: 'Anémie mégaloblastique non explorée (carence en B12 masquée).',
    effets_indesirables: 'Très rares.',
    interactions: 'Méthotrexate et sulfadoxine-pyriméthamine (fortes doses : ↓ efficacité), phénytoïne.',
    grossesse_allaitement: 'Recommandé.',
    surveillance: 'Hémoglobine.',
  },
  {
    slug: 'pyridoxine',
    dci: 'Pyridoxine (vitamine B6)',
    classe: 'Micronutriments et vitamines',
    mecanisme: 'Prévient la neuropathie induite par l’isoniazide (antagoniste de la B6).',
    pharmacocinetique: 'Hydrosoluble.',
    indications:
      'Prévention de la neuropathie sous isoniazide chez les sujets à risque (VIH, grossesse, malnutrition, diabète, alcoolisme, insuffisance rénale).',
    posologie: '10–25 mg/j (enfant 5–10 mg/j) pendant le traitement par isoniazide.',
    contre_indications: 'Aucune.',
    effets_indesirables: 'Neuropathie à très fortes doses prolongées.',
    interactions: 'Lévodopa (↓ efficacité).',
    grossesse_allaitement: 'Utilisable.',
    surveillance: 'Paresthésies.',
  },
  {
    slug: 'atpe',
    dci: "Aliment thérapeutique prêt à l'emploi (ATPE)",
    classe: 'Produits nutritionnels thérapeutiques',
    mecanisme:
      'Pâte enrichie (arachide, lait, huile, sucre, vitamines et minéraux) de composition équivalente au F-100, sans eau (pas de contamination).',
    pharmacocinetique: 'Non applicable.',
    indications: 'MAS non compliquée (ambulatoire), phase de réhabilitation de la MAS compliquée.',
    posologie:
      '150–200 kcal/kg/j (1 sachet de 92 g = 500 kcal) selon le tableau par poids du protocole national ; donner de l’eau potable à volonté, poursuivre l’allaitement.',
    contre_indications:
      'Allergie à l’arachide ou aux protéines de lait ; MAS compliquée en phase aiguë ; test d’appétit négatif.',
    effets_indesirables: 'Rares.',
    interactions: 'Aucune.',
    grossesse_allaitement: 'Non applicable.',
    surveillance: 'Poids, PB, œdèmes, test d’appétit à chaque visite.',
  },
  {
    slug: 'lait-f75',
    dci: 'Lait thérapeutique F-75',
    classe: 'Produits nutritionnels thérapeutiques',
    mecanisme:
      'Lait pauvre en protéines et en sodium (75 kcal/100 mL) : couvre les besoins de base sans surcharger les fonctions métaboliques.',
    pharmacocinetique: 'Non applicable.',
    indications: 'Phase de stabilisation de la MAS compliquée.',
    posologie:
      '130 mL/kg/j répartis en 8 repas (100 mL/kg/j si œdèmes +++), selon le tableau du protocole national.',
    contre_indications: 'Aucune dans l’indication.',
    effets_indesirables: 'Syndrome de renutrition si progression trop rapide.',
    interactions: 'Aucune.',
    grossesse_allaitement: 'Non applicable.',
    surveillance: 'Poids quotidien, appétit, œdèmes, signes de surcharge.',
  },
  {
    slug: 'lait-f100',
    dci: 'Lait thérapeutique F-100',
    classe: 'Produits nutritionnels thérapeutiques',
    mecanisme: 'Lait riche en énergie et protéines (100 kcal/100 mL) pour la croissance de rattrapage.',
    pharmacocinetique: 'Non applicable.',
    indications:
      'Phases de transition et de réhabilitation de la MAS (alternative à l’ATPE) ; F-100 dilué chez le nourrisson < 6 mois.',
    posologie:
      'Transition : volume équivalent au F-75 ; réhabilitation : 150–220 kcal/kg/j selon le protocole.',
    contre_indications: 'Phase de stabilisation (risque de renutrition).',
    effets_indesirables: 'Diarrhée, surcharge si introduit trop tôt.',
    interactions: 'Aucune.',
    grossesse_allaitement: 'Non applicable.',
    surveillance: 'Gain de poids (objectif ≥ 5 g/kg/j), FR et FC (signes de surcharge).',
  },
];

/**
 * Produits commerciaux par opérateur.
 * composition : [[slug molécule, dosage], …] — plusieurs molécules = association.
 */
const p = (nom, operateur, forme, dosage, composition, extra = {}) => ({
  nom,
  operateur,
  forme,
  dosage,
  composition,
  ...extra,
});

const medicaments = [
  // ---------------------------------------------------------------- Antipaludiques
  p(
    'Artesun 60 mg',
    'Fosun Pharma',
    'Poudre pour solution injectable (IV/IM)',
    '60 mg',
    [['artesunate', '60 mg']],
    {
      presentation: 'Flacon de poudre + ampoule de bicarbonate de sodium 5 % + ampoule de NaCl 0,9 %',
      conservation: '< 30 °C ; solution reconstituée à utiliser dans l’heure',
      rdc: true,
      sources: 'Produit préqualifié OMS.',
    },
  ),
  p(
    'Artésunate suppositoire 100 mg',
    'Générique multisource',
    'Suppositoire',
    '100 mg',
    [['artesunate', '100 mg']],
    {
      indication: 'Traitement pré-transfert du paludisme grave chez l’enfant de moins de 6 ans.',
      posologie:
        '10 mg/kg en dose unique par voie rectale (6–13 kg : 1 suppositoire de 100 mg ; 14–19 kg : 2), puis transfert immédiat.',
      rdc: true,
    },
  ),
  p(
    'Artéméther 80 mg/mL injectable',
    'Générique multisource',
    'Solution huileuse injectable (IM)',
    '80 mg/mL',
    [['artemether', '80 mg/mL']],
    { rdc: true },
  ),
  p(
    'Coartem',
    'Novartis',
    'Comprimé',
    '20 mg / 120 mg',
    [
      ['artemether', '20 mg'],
      ['lumefantrine', '120 mg'],
    ],
    {
      presentation: 'Boîtes de 6, 12, 18 et 24 comprimés selon la tranche de poids',
      indication:
        'Paludisme simple à P. falciparum ; relais oral après traitement parentéral du paludisme grave.',
      posologie:
        '6 prises sur 3 jours (H0, H8, H24, H36, H48, H60), avec un aliment gras ou du lait :\n- 5–14 kg : 1 comprimé par prise\n- 15–24 kg : 2 comprimés\n- 25–34 kg : 3 comprimés\n- ≥ 35 kg : 4 comprimés',
      conservation: '< 30 °C',
      rdc: true,
    },
  ),
  p(
    'Coartem Dispersible',
    'Novartis',
    'Comprimé dispersible (goût cerise)',
    '20 mg / 120 mg',
    [
      ['artemether', '20 mg'],
      ['lumefantrine', '120 mg'],
    ],
    {
      indication: 'Paludisme simple de l’enfant (≥ 5 kg).',
      posologie:
        'Comme Coartem : 6 prises sur 3 jours ; disperser dans un peu d’eau, donner avec du lait ou un repas.',
      rdc: true,
    },
  ),
  p(
    'Artéméther-luméfantrine 20/120 mg (FEDECAME)',
    'FEDECAME',
    'Comprimé',
    '20 mg / 120 mg',
    [
      ['artemether', '20 mg'],
      ['lumefantrine', '120 mg'],
    ],
    {
      posologie: '6 prises sur 3 jours selon le poids (voir Coartem), avec un aliment gras.',
      rdc: true,
      sources: 'Approvisionnement du circuit national (PNLP).',
    },
  ),
  p(
    'ASAQ Winthrop',
    'Sanofi',
    'Comprimé (association à dose fixe)',
    '25/67,5 mg ; 50/135 mg ; 100/270 mg',
    [
      ['artesunate', '25–100 mg'],
      ['amodiaquine', '67,5–270 mg'],
    ],
    {
      indication: 'Paludisme simple à P. falciparum.',
      posologie:
        '1 prise par jour pendant 3 jours :\n- 4,5–8 kg : 1 cp 25/67,5\n- 9–17 kg : 1 cp 50/135\n- 18–35 kg : 1 cp 100/270\n- ≥ 36 kg : 2 cp 100/270',
      contre_indications:
        'Atteinte hépatique, antécédent d’agranulocytose ou d’hépatite sous amodiaquine ; association à l’éfavirenz.',
      rdc: true,
    },
  ),
  p(
    'Eurartesim',
    'Alfasigma',
    'Comprimé pelliculé',
    '40 mg / 320 mg ; 20 mg / 160 mg',
    [
      ['dihydroartemisinine', '40 mg'],
      ['piperaquine', '320 mg'],
    ],
    {
      indication: 'Paludisme simple à P. falciparum (adulte, enfant ≥ 6 mois et ≥ 5 kg).',
      posologie:
        '1 prise par jour pendant 3 jours, à jeun (≥ 3 h après un repas, pas de repas dans les 3 h suivantes). Nombre de comprimés selon le poids (tableau du fabricant) ; adulte 36–< 75 kg : 3 cp de 40/320 mg/j ; 75–100 kg : 4 cp/j.',
      contre_indications:
        'Allongement du QT, antécédents familiaux de mort subite, médicaments allongeant le QT.',
      rdc: false,
    },
  ),
  p(
    'Quinine Pharmakina',
    'Pharmakina',
    'Solution injectable',
    '500 mg / 2 mL (dichlorhydrate)',
    [['quinine', '250 mg/mL']],
    {
      presentation: 'Ampoule de 2 mL à diluer dans du glucosé 5 ou 10 %',
      rdc: true,
      sources: 'Fabrication locale (Bukavu).',
    },
  ),

  // ---------------------------------------------------------------- Antibiotiques
  p('Clamoxyl', 'GSK', 'Gélule / poudre pour suspension buvable', '500 mg ; 1 g ; 250 mg/5 mL', [
    ['amoxicilline', '500 mg'],
  ]),
  p(
    'Amoxicilline 250 mg comprimé dispersible',
    'UNICEF Supply Division',
    'Comprimé dispersible sécable',
    '250 mg',
    [['amoxicilline', '250 mg']],
    {
      indication: 'Pneumonie de l’enfant (PCIME), antibiothérapie de la MAS.',
      posologie:
        'Pneumonie : 40 mg/kg/dose 2 fois par jour pendant 5 jours :\n- 2–11 mois (4–< 10 kg) : 1 cp 2 fois par jour\n- 1–2 ans (10–< 14 kg) : 2 cp 2 fois par jour\n- 3–4 ans (14–< 19 kg) : 3 cp 2 fois par jour',
      rdc: true,
    },
  ),
  p('Amoxicilline 500 mg gélule (FEDECAME)', 'FEDECAME', 'Gélule', '500 mg', [['amoxicilline', '500 mg']], {
    rdc: true,
  }),
  p(
    'Augmentin',
    'GSK',
    'Comprimé ; poudre pour suspension ; poudre IV',
    '875/125 mg ; 1 g/200 mg (IV)',
    [
      ['amoxicilline', '875 mg'],
      ['acide-clavulanique', '125 mg'],
    ],
    {
      indication:
        'Infections intra-abdominales, ORL et respiratoires compliquées, morsures, infections cutanées.',
      posologie:
        '- Adulte per os : 875/125 mg 2 à 3 fois par jour\n- IV : 1 g/200 mg toutes les 8 h\n- Enfant : 40–50 mg/kg/j d’amoxicilline (rapport 7:1 ou 8:1) en 2–3 prises',
    },
  ),
  p(
    'Amoxicilline-acide clavulanique 500/62,5 mg (générique)',
    'Générique multisource',
    'Comprimé',
    '500 mg / 62,5 mg',
    [
      ['amoxicilline', '500 mg'],
      ['acide-clavulanique', '62,5 mg'],
    ],
    {
      posologie: 'Adulte : 1 g d’amoxicilline (2 cp) 2 à 3 fois par jour.',
      rdc: true,
    },
  ),
  p(
    'Ampicilline 1 g injectable',
    'Générique multisource',
    'Poudre pour solution injectable',
    '1 g',
    [['ampicilline', '1 g']],
    { rdc: true },
  ),
  p('Rocephin', 'Roche', 'Poudre pour solution injectable (IV/IM)', '1 g ; 2 g', [['ceftriaxone', '1 g']]),
  p(
    'Ceftriaxone 1 g (FEDECAME)',
    'FEDECAME',
    'Poudre pour solution injectable (IV/IM)',
    '1 g',
    [['ceftriaxone', '1 g']],
    { rdc: true },
  ),
  p('Céfazoline 1 g injectable', 'Générique multisource', 'Poudre pour solution injectable', '1 g', [
    ['cefazoline', '1 g'],
  ]),
  p(
    'Gentamicine 80 mg/2 mL',
    'Générique multisource',
    'Solution injectable',
    '80 mg/2 mL ; 20 mg/2 mL (pédiatrique)',
    [['gentamicine', '40 mg/mL']],
    { rdc: true },
  ),
  p('Flagyl', 'Sanofi', 'Comprimé ; solution pour perfusion', '250 mg ; 500 mg ; 500 mg/100 mL', [
    ['metronidazole', '500 mg'],
  ]),
  p(
    'Métronidazole 500 mg (FEDECAME)',
    'FEDECAME',
    'Comprimé ; solution pour perfusion',
    '500 mg ; 500 mg/100 mL',
    [['metronidazole', '500 mg']],
    { rdc: true },
  ),
  p(
    'Cotrimoxazole 960 mg',
    'Générique multisource',
    'Comprimé ; comprimé dispersible pédiatrique',
    '800/160 mg ; 400/80 mg ; 100/20 mg',
    [['cotrimoxazole', '960 mg']],
    { rdc: true },
  ),
  p('Zithromax', 'Pfizer', 'Comprimé ; poudre pour suspension buvable', '250 mg ; 500 mg ; 200 mg/5 mL', [
    ['azithromycine', '500 mg'],
  ]),
  p(
    'Azithromycine 500 mg',
    'Générique multisource',
    'Comprimé',
    '250 mg ; 500 mg',
    [['azithromycine', '500 mg']],
    { rdc: true },
  ),
  p(
    'Doxycycline 100 mg',
    'Générique multisource',
    'Comprimé / gélule',
    '100 mg',
    [['doxycycline', '100 mg']],
    { rdc: true },
  ),
  p(
    'Ciprofloxacine 500 mg',
    'Générique multisource',
    'Comprimé',
    '250 mg ; 500 mg',
    [['ciprofloxacine', '500 mg']],
    { rdc: true },
  ),
  p(
    'Pénicilline V 250 mg',
    'Générique multisource',
    'Comprimé / poudre pour suspension buvable',
    '250 mg ; 125 mg/5 mL',
    [['phenoxymethylpenicilline', '250 mg']],
    { rdc: true },
  ),

  // ---------------------------------------------------------------- Antituberculeux
  p(
    'RHZE 150/75/400/275 mg (4-DFC)',
    'Macleods Pharmaceuticals',
    'Comprimé (association à dose fixe)',
    '150/75/400/275 mg',
    [
      ['rifampicine', '150 mg'],
      ['isoniazide', '75 mg'],
      ['pyrazinamide', '400 mg'],
      ['ethambutol', '275 mg'],
    ],
    {
      indication: 'Phase intensive (2 mois) du traitement de la tuberculose sensible de l’adulte.',
      posologie:
        '1 prise par jour à jeun :\n- 25–39 kg : 2 cp\n- 40–54 kg : 3 cp\n- 55–70 kg : 4 cp\n- > 70 kg : 5 cp',
      rdc: true,
      sources: 'Approvisionnement PNLT / Fonds mondial (produit préqualifié OMS).',
    },
  ),
  p(
    'Rimstar',
    'Sandoz',
    'Comprimé (association à dose fixe)',
    '150/75/400/275 mg',
    [
      ['rifampicine', '150 mg'],
      ['isoniazide', '75 mg'],
      ['pyrazinamide', '400 mg'],
      ['ethambutol', '275 mg'],
    ],
    {
      posologie: 'Selon le poids, comme les autres 4-DFC (2 à 5 comprimés par jour).',
    },
  ),
  p(
    'RH 150/75 mg (2-DFC)',
    'Lupin',
    'Comprimé (association à dose fixe)',
    '150/75 mg',
    [
      ['rifampicine', '150 mg'],
      ['isoniazide', '75 mg'],
    ],
    {
      indication: 'Phase de continuation (4 mois) du traitement de la tuberculose sensible.',
      posologie: 'Même nombre de comprimés que le 4-DFC selon le poids (2 à 5 par jour).',
      rdc: true,
    },
  ),
  p(
    'RHZ 75/50/150 mg dispersible (pédiatrique)',
    'Macleods Pharmaceuticals',
    'Comprimé dispersible',
    '75/50/150 mg',
    [
      ['rifampicine', '75 mg'],
      ['isoniazide', '50 mg'],
      ['pyrazinamide', '150 mg'],
    ],
    {
      indication:
        'Phase intensive de la tuberculose de l’enfant < 25 kg (+ éthambutol 100 mg dispersible si indiqué).',
      posologie:
        '1 prise par jour :\n- 4–7 kg : 1 cp\n- 8–11 kg : 2 cp\n- 12–15 kg : 3 cp\n- 16–24 kg : 4 cp',
      rdc: true,
    },
  ),
  p('Isoniazide 300 mg', 'Générique multisource', 'Comprimé', '100 mg ; 300 mg', [['isoniazide', '300 mg']], {
    rdc: true,
  }),

  // ---------------------------------------------------------------- Antirétroviraux / VHB
  p(
    'Ténofovir/lamivudine/dolutégravir 300/300/50 mg (Viatris)',
    'Viatris',
    'Comprimé (association à dose fixe, « TLD »)',
    '300/300/50 mg',
    [
      ['tenofovir-disoproxil', '300 mg'],
      ['lamivudine', '300 mg'],
      ['dolutegravir', '50 mg'],
    ],
    {
      indication: 'VIH : 1re ligne préférentielle de l’adulte et de l’adolescent ≥ 30 kg.',
      posologie:
        '1 comprimé par jour. Avec la rifampicine : ajouter 1 comprimé de dolutégravir 50 mg 12 h plus tard.',
      rdc: true,
      sources: 'Approvisionnement PNLS / PEPFAR / Fonds mondial.',
    },
  ),
  p(
    'Ténofovir/lamivudine/dolutégravir 300/300/50 mg (Macleods)',
    'Macleods Pharmaceuticals',
    'Comprimé (association à dose fixe, « TLD »)',
    '300/300/50 mg',
    [
      ['tenofovir-disoproxil', '300 mg'],
      ['lamivudine', '300 mg'],
      ['dolutegravir', '50 mg'],
    ],
    {
      posologie: '1 comprimé par jour (voir ci-dessus).',
      rdc: true,
    },
  ),
  p('Tivicay', 'ViiV Healthcare', 'Comprimé pelliculé', '50 mg', [['dolutegravir', '50 mg']]),
  p(
    'Dolutégravir 10 mg dispersible (pDTG)',
    'Viatris',
    'Comprimé dispersible sécable',
    '10 mg',
    [['dolutegravir', '10 mg']],
    {
      indication: 'VIH de l’enfant ≥ 4 semaines et ≥ 3 kg.',
      posologie:
        '1 prise par jour selon le poids : 3–5,9 kg : 5 mg ; 6–9,9 kg : 15 mg ; 10–13,9 kg : 20 mg ; 14–19,9 kg : 25 mg ; ≥ 20 kg : 30 mg (dispersible) ou 50 mg (comprimé adulte).',
      rdc: true,
    },
  ),
  p(
    'Abacavir/lamivudine 120/60 mg dispersible',
    'Cipla',
    'Comprimé dispersible sécable',
    '120/60 mg',
    [
      ['abacavir', '120 mg'],
      ['lamivudine', '60 mg'],
    ],
    {
      indication: 'VIH de l’enfant (associé au dolutégravir pédiatrique).',
      posologie:
        '1 prise par jour : 3–5,9 kg : 1 cp ; 6–9,9 kg : 1,5 cp ; 10–13,9 kg : 2 cp ; 14–19,9 kg : 2,5 cp ; 20–24,9 kg : 3 cp.',
      rdc: true,
    },
  ),
  p('Epivir', 'ViiV Healthcare', 'Comprimé ; solution buvable', '150 mg ; 300 mg ; 10 mg/mL', [
    ['lamivudine', '150 mg'],
  ]),
  p('Viread', 'Gilead Sciences', 'Comprimé pelliculé', '245 mg (≈ 300 mg de fumarate)', [
    ['tenofovir-disoproxil', '300 mg'],
  ]),
  p(
    'Ténofovir disoproxil 300 mg (Cipla)',
    'Cipla',
    'Comprimé pelliculé',
    '300 mg',
    [['tenofovir-disoproxil', '300 mg']],
    {
      indication: 'Hépatite B chronique ; composante des schémas antirétroviraux.',
      rdc: true,
    },
  ),
  p('Baraclude', 'Bristol Myers Squibb', 'Comprimé pelliculé', '0,5 mg ; 1 mg', [['entecavir', '0,5 mg']]),
  p('Entécavir 0,5 mg', 'Générique multisource', 'Comprimé', '0,5 mg', [['entecavir', '0,5 mg']]),

  // ---------------------------------------------------------------- Cardiovasculaire
  p('Amlor', 'Viatris', 'Gélule / comprimé', '5 mg ; 10 mg', [['amlodipine', '5 mg']]),
  p('Amlodipine 5 mg (FEDECAME)', 'FEDECAME', 'Comprimé', '5 mg ; 10 mg', [['amlodipine', '5 mg']], {
    rdc: true,
  }),
  p(
    'Adalat LP',
    'Bayer',
    'Comprimé à libération prolongée',
    '20 mg ; 30 mg ; 60 mg',
    [['nifedipine', '20–60 mg']],
    {
      posologie:
        'Traitement de fond : 20–60 mg/j en 1–2 prises selon la forme LP. Ne pas utiliser pour une baisse tensionnelle rapide.',
    },
  ),
  p(
    'Nifédipine 10 mg (libération immédiate)',
    'Générique multisource',
    'Gélule / comprimé',
    '10 mg',
    [['nifedipine', '10 mg']],
    {
      indication: 'HTA sévère de la grossesse (traitement d’attaque, voie orale).',
      rdc: true,
    },
  ),
  p('Nicardipine 10 mg/10 mL injectable', 'Générique multisource', 'Solution injectable', '1 mg/mL', [
    ['nicardipine', '1 mg/mL'],
  ]),
  p('Méthyldopa 250 mg (FEDECAME)', 'FEDECAME', 'Comprimé', '250 mg', [['methyldopa', '250 mg']], {
    rdc: true,
  }),
  p('Hydralazine 20 mg injectable', 'Générique multisource', 'Poudre pour solution injectable', '20 mg', [
    ['hydralazine', '20 mg'],
  ]),
  p(
    'Labétalol 5 mg/mL injectable',
    'Générique multisource',
    'Solution injectable ; comprimé 200 mg',
    '5 mg/mL ; 200 mg',
    [['labetalol', '5 mg/mL']],
  ),
  p('Renitec', 'Organon', 'Comprimé', '5 mg ; 20 mg', [['enalapril', '5–20 mg']]),
  p(
    'Énalapril 10 mg',
    'Générique multisource',
    'Comprimé',
    '5 mg ; 10 mg ; 20 mg',
    [['enalapril', '10 mg']],
    { rdc: true },
  ),
  p('Cozaar', 'Organon', 'Comprimé pelliculé', '50 mg ; 100 mg', [['losartan', '50 mg']]),
  p('Losartan 50 mg', 'Générique multisource', 'Comprimé', '50 mg', [['losartan', '50 mg']], { rdc: true }),
  p('Diovan', 'Novartis', 'Comprimé pelliculé', '80 mg ; 160 mg', [['valsartan', '80–160 mg']]),
  p(
    'Exforge',
    'Novartis',
    'Comprimé pelliculé (association à dose fixe)',
    '5/80 mg ; 5/160 mg ; 10/160 mg',
    [
      ['amlodipine', '5–10 mg'],
      ['valsartan', '80–160 mg'],
    ],
    {
      indication: 'HTA non contrôlée par une monothérapie (bithérapie en un comprimé).',
      posologie: '1 comprimé par jour ; choisir le dosage selon le contrôle tensionnel.',
      contre_indications:
        'Grossesse, insuffisance hépatique sévère, choc cardiogénique, sténose aortique serrée.',
    },
  ),
  p(
    'Entresto',
    'Novartis',
    'Comprimé pelliculé (association)',
    '24/26 mg ; 49/51 mg ; 97/103 mg',
    [
      ['sacubitril', '24–97 mg'],
      ['valsartan', '26–103 mg'],
    ],
    {
      indication: 'Insuffisance cardiaque chronique à fraction d’éjection réduite.',
      posologie:
        'Débuter à 49/51 mg 2 fois par jour (24/26 mg si PAS 100–110 mmHg, DFG < 30 ou patient naïf d’IEC/ARA2), doubler toutes les 2–4 semaines jusqu’à 97/103 mg 2 fois par jour. Respecter un délai de 36 h après l’arrêt d’un IEC.',
    },
  ),
  p('Concor', 'Merck KGaA', 'Comprimé pelliculé sécable', '1,25 mg ; 2,5 mg ; 5 mg ; 10 mg', [
    ['bisoprolol', '1,25–10 mg'],
  ]),
  p(
    'Bisoprolol 5 mg',
    'Générique multisource',
    'Comprimé',
    '2,5 mg ; 5 mg ; 10 mg',
    [['bisoprolol', '5 mg']],
    { rdc: true },
  ),
  p('Lasix', 'Sanofi', 'Comprimé ; solution injectable', '40 mg ; 20 mg/2 mL', [['furosemide', '40 mg']]),
  p(
    'Furosémide 40 mg (FEDECAME)',
    'FEDECAME',
    'Comprimé ; solution injectable',
    '40 mg ; 20 mg/2 mL',
    [['furosemide', '40 mg']],
    { rdc: true },
  ),
  p(
    'Hydrochlorothiazide 25 mg',
    'Générique multisource',
    'Comprimé',
    '12,5 mg ; 25 mg',
    [['hydrochlorothiazide', '25 mg']],
    { rdc: true },
  ),
  p('Aldactone', 'Pfizer', 'Comprimé pelliculé', '25 mg ; 50 mg', [['spironolactone', '25 mg']]),
  p('Spironolactone 25 mg', 'Générique multisource', 'Comprimé', '25 mg', [['spironolactone', '25 mg']], {
    rdc: true,
  }),
  p(
    'Mannitol 20 % (B. Braun)',
    'B. Braun',
    'Solution pour perfusion',
    '20 % (200 mg/mL) ; 250–500 mL',
    [['mannitol', '200 mg/mL']],
    {
      conservation:
        '20–25 °C ; ne pas réfrigérer (cristallisation : réchauffer jusqu’à dissolution complète)',
    },
  ),
  p('Forxiga', 'AstraZeneca', 'Comprimé pelliculé', '10 mg', [['dapagliflozine', '10 mg']]),
  p(
    'Kardégic',
    'Sanofi',
    'Poudre pour solution buvable (acétylsalicylate de lysine)',
    '75 mg ; 160 mg ; 300 mg',
    [['acide-acetylsalicylique', '75–300 mg']],
  ),
  p(
    'Acide acétylsalicylique 100 mg',
    'Générique multisource',
    'Comprimé',
    '100 mg ; 300 mg',
    [['acide-acetylsalicylique', '100 mg']],
    { rdc: true },
  ),
  p(
    'Actilyse',
    'Boehringer Ingelheim',
    'Poudre et solvant pour solution injectable',
    '10 mg ; 20 mg ; 50 mg',
    [['alteplase', '50 mg']],
    {
      conservation: '< 25 °C ; reconstituer juste avant l’emploi',
    },
  ),
  p('Lipitor', 'Viatris', 'Comprimé pelliculé', '10 mg ; 20 mg ; 40 mg ; 80 mg', [
    ['atorvastatine', '10–80 mg'],
  ]),
  p(
    'Atorvastatine 20 mg',
    'Générique multisource',
    'Comprimé',
    '10 mg ; 20 mg ; 40 mg',
    [['atorvastatine', '20 mg']],
    { rdc: true },
  ),

  // ---------------------------------------------------------------- Diabète
  p('Glucophage', 'Merck KGaA', 'Comprimé pelliculé', '500 mg ; 850 mg ; 1 000 mg', [
    ['metformine', '500–1 000 mg'],
  ]),
  p('Metformine 500 mg (FEDECAME)', 'FEDECAME', 'Comprimé', '500 mg ; 850 mg', [['metformine', '500 mg']], {
    rdc: true,
  }),
  p(
    'Diamicron 60 mg',
    'Servier',
    'Comprimé sécable à libération modifiée',
    '60 mg',
    [['gliclazide', '60 mg']],
    {
      posologie:
        '30–120 mg (½ à 2 comprimés) en 1 prise au petit-déjeuner ; augmenter par paliers de 30 mg toutes les 2–4 semaines.',
    },
  ),
  p(
    'Gliclazide 80 mg',
    'Générique multisource',
    'Comprimé sécable (libération immédiate)',
    '80 mg',
    [['gliclazide', '80 mg']],
    {
      posologie: '40–80 mg/j au départ, jusqu’à 320 mg/j en 2 prises (avant les repas).',
      rdc: true,
    },
  ),
  p(
    'Actrapid',
    'Novo Nordisk',
    'Solution injectable (flacon, stylo)',
    '100 UI/mL',
    [['insuline-humaine-rapide', '100 UI/mL']],
    {
      conservation: '2–8 °C (ne pas congeler) ; en cours d’utilisation : 4–6 semaines < 25–30 °C',
    },
  ),
  p(
    'Insulatard',
    'Novo Nordisk',
    'Suspension injectable (flacon, stylo)',
    '100 UI/mL',
    [['insuline-nph', '100 UI/mL']],
    {
      conservation: '2–8 °C ; rouler le flacon entre les mains avant usage',
    },
  ),
  p(
    'Mixtard 30',
    'Novo Nordisk',
    'Suspension injectable (insuline biphasique)',
    '100 UI/mL (30 % rapide / 70 % NPH)',
    [
      ['insuline-humaine-rapide', '30 %'],
      ['insuline-nph', '70 %'],
    ],
    {
      indication:
        'Diabète nécessitant une insuline, schéma simplifié à 2 injections (contexte de ressources limitées).',
      posologie:
        '2 injections par jour, 30 min avant le petit-déjeuner (≈ 2/3 de la dose) et le dîner (≈ 1/3) ; ajuster selon les glycémies.',
      conservation: '2–8 °C ; homogénéiser avant injection',
    },
  ),
  p(
    'Lantus',
    'Sanofi',
    'Solution injectable (stylo SoloStar, flacon)',
    '100 UI/mL',
    [['insuline-glargine', '100 UI/mL']],
    {
      conservation: '2–8 °C ; en cours d’utilisation : 4 semaines < 30 °C',
    },
  ),

  // ---------------------------------------------------------------- Respiratoire / corticoïdes
  p(
    'Ventoline',
    'GSK',
    'Suspension pour inhalation (aérosol doseur) ; solution pour nébulisation',
    '100 µg/dose ; 5 mg/2,5 mL',
    [['salbutamol', '100 µg/dose']],
  ),
  p(
    'Salbutamol 100 µg aérosol doseur',
    'Générique multisource',
    'Aérosol doseur',
    '100 µg/dose (200 doses)',
    [['salbutamol', '100 µg/dose']],
    {
      posologie: 'Toujours avec une chambre d’inhalation (masque chez l’enfant < 4 ans) pendant les crises.',
      rdc: true,
    },
  ),
  p(
    'Pulmicort',
    'AstraZeneca',
    'Poudre pour inhalation (Turbuhaler) ; suspension pour nébulisation',
    '200 µg/dose ; 0,5 mg/2 mL',
    [['budesonide', '200 µg/dose']],
  ),
  p(
    'Symbicort Turbuhaler 200/6',
    'AstraZeneca',
    'Poudre pour inhalation',
    '200 µg / 6 µg par dose',
    [
      ['budesonide', '200 µg'],
      ['formoterol', '6 µg'],
    ],
    {
      indication:
        'Asthme : traitement anti-inflammatoire à la demande (GINA voie 1) ou traitement de fond et de secours (MART) ; BPCO.',
      posologie:
        '- À la demande (asthme léger, ≥ 12 ans) : 1 inhalation en cas de symptômes\n- MART : 1–2 inhalations 2 fois par jour + 1 inhalation à la demande\n- Maximum 12 inhalations par jour (ponctuellement)',
    },
  ),
  p(
    'Atrovent',
    'Boehringer Ingelheim',
    'Solution pour nébulisation ; aérosol doseur',
    '0,25 mg/mL ; 0,5 mg/2 mL ; 20 µg/dose',
    [['ipratropium', '0,5 mg/2 mL']],
  ),
  p('Prednisolone 5 mg', 'Générique multisource', 'Comprimé', '5 mg ; 20 mg', [['prednisolone', '5 mg']], {
    rdc: true,
  }),
  p('Solu-Cortef', 'Pfizer', 'Poudre pour solution injectable', '100 mg', [['hydrocortisone', '100 mg']]),
  p(
    'Hydrocortisone 100 mg injectable (FEDECAME)',
    'FEDECAME',
    'Poudre pour solution injectable',
    '100 mg',
    [['hydrocortisone', '100 mg']],
    { rdc: true },
  ),
  p(
    'Dexaméthasone 4 mg/mL injectable',
    'Générique multisource',
    'Solution injectable',
    '4 mg/mL',
    [['dexamethasone', '4 mg/mL']],
    { rdc: true },
  ),

  // ---------------------------------------------------------------- Anticonvulsivants
  p('Valium', 'Roche', 'Solution injectable ; comprimé', '10 mg/2 mL ; 2 mg ; 5 mg ; 10 mg', [
    ['diazepam', '10 mg/2 mL'],
  ]),
  p(
    'Diazépam 10 mg/2 mL (FEDECAME)',
    'FEDECAME',
    'Solution injectable (IV, intrarectale)',
    '10 mg/2 mL',
    [['diazepam', '5 mg/mL']],
    { rdc: true },
  ),
  p(
    'Midazolam 5 mg/mL injectable',
    'Générique multisource',
    'Solution injectable (IV, IM, buccale)',
    '5 mg/mL ; 5 mg/5 mL',
    [['midazolam', '5 mg/mL']],
  ),
  p('Gardénal', 'Sanofi', 'Comprimé', '10 mg ; 50 mg ; 100 mg', [['phenobarbital', '50–100 mg']]),
  p(
    'Phénobarbital 200 mg/mL injectable',
    'Générique multisource',
    'Solution injectable',
    '200 mg/mL',
    [['phenobarbital', '200 mg/mL']],
    { rdc: true },
  ),
  p(
    'Phénobarbital 50 mg comprimé (FEDECAME)',
    'FEDECAME',
    'Comprimé',
    '15 mg ; 50 mg ; 100 mg',
    [['phenobarbital', '50 mg']],
    { rdc: true },
  ),
  p('Phénytoïne 250 mg/5 mL injectable', 'Générique multisource', 'Solution injectable', '50 mg/mL', [
    ['phenytoine', '50 mg/mL'],
  ]),
  p(
    'Keppra',
    'UCB',
    'Comprimé ; solution buvable ; solution à diluer pour perfusion',
    '500 mg ; 100 mg/mL ; 500 mg/5 mL',
    [['levetiracetam', '500 mg']],
  ),
  p(
    'Dépakine',
    'Sanofi',
    'Comprimé gastrorésistant ; solution buvable ; forme LP (Chrono)',
    '200 mg ; 500 mg ; 200 mg/mL',
    [['acide-valproique', '200–500 mg']],
    {
      contre_indications:
        'Voir la molécule. Fille, adolescente et femme en âge de procréer : uniquement en l’absence d’alternative, avec contraception efficace et accord de soins.',
    },
  ),
  p(
    'Valproate de sodium 200 mg',
    'Générique multisource',
    'Comprimé gastrorésistant',
    '200 mg ; 500 mg',
    [['acide-valproique', '200 mg']],
    { rdc: true },
  ),
  p('Tégrétol', 'Novartis', 'Comprimé sécable ; comprimé LP', '200 mg ; LP 200 mg ; LP 400 mg', [
    ['carbamazepine', '200 mg'],
  ]),
  p(
    'Carbamazépine 200 mg (FEDECAME)',
    'FEDECAME',
    'Comprimé sécable',
    '200 mg',
    [['carbamazepine', '200 mg']],
    { rdc: true },
  ),
  p(
    'Sulfate de magnésium 50 %',
    'Générique multisource',
    'Solution injectable',
    '5 g / 10 mL (500 mg/mL)',
    [['sulfate-de-magnesium', '500 mg/mL']],
    {
      posologie:
        'Dose de charge IV : diluer 4 g (8 mL) dans du NaCl 0,9 % pour obtenir une solution à 20 %, en 15–20 min. Voie IM : solution à 50 % (+ lidocaïne selon protocole).',
      rdc: true,
    },
  ),

  // ---------------------------------------------------------------- Obstétrique
  p(
    'Ocytocine 10 UI/mL',
    'Générique multisource',
    'Solution injectable',
    '10 UI/mL ; 5 UI/mL',
    [['ocytocine', '10 UI/mL']],
    {
      conservation: '2–8 °C (chaîne du froid) ; ne pas congeler',
      rdc: true,
    },
  ),
  p(
    'Carbétocine thermostable 100 µg/mL',
    'Ferring',
    'Solution injectable',
    '100 µg/mL',
    [['carbetocine', '100 µg/mL']],
    {
      conservation: '≤ 30 °C (formulation thermostable) ; ne pas congeler',
    },
  ),
  p('Misoprostol 200 µg', 'Générique multisource', 'Comprimé', '200 µg', [['misoprostol', '200 µg']], {
    conservation: '< 25–30 °C, dans son blister (sensible à l’humidité)',
    rdc: true,
  }),
  p('Exacyl', 'Sanofi', 'Comprimé ; solution injectable', '500 mg ; 0,5 g/5 mL', [
    ['acide-tranexamique', '500 mg'],
  ]),
  p(
    'Acide tranexamique 100 mg/mL injectable',
    'Générique multisource',
    'Solution injectable',
    '1 g/10 mL ; 500 mg/5 mL',
    [['acide-tranexamique', '100 mg/mL']],
    { rdc: true },
  ),
  p(
    'Méthotrexate 25 mg/mL injectable',
    'Générique multisource',
    'Solution injectable',
    '25 mg/mL',
    [['methotrexate', '25 mg/mL']],
    {
      conservation: 'À l’abri de la lumière ; manipulation selon les règles des cytotoxiques',
    },
  ),

  // ---------------------------------------------------------------- Hématologie
  p(
    'Siklos',
    'Theravia',
    'Comprimé pelliculé sécable',
    '100 mg ; 1 000 mg',
    [['hydroxycarbamide', '100–1 000 mg']],
    {
      indication:
        'Prévention des crises vaso-occlusives de la drépanocytose (enfant > 2 ans et adulte, selon l’AMM européenne).',
    },
  ),
  p('Hydroxyurée 500 mg gélule', 'Générique multisource', 'Gélule', '500 mg', [
    ['hydroxycarbamide', '500 mg'],
  ]),
  p('Acide folique 5 mg (FEDECAME)', 'FEDECAME', 'Comprimé', '1 mg ; 5 mg', [['acide-folique', '5 mg']], {
    rdc: true,
  }),

  // ---------------------------------------------------------------- Antalgiques
  p(
    'Doliprane',
    'Sanofi',
    'Comprimé ; suspension buvable ; suppositoire',
    '500 mg ; 1 g ; 2,4 % (24 mg/mL)',
    [['paracetamol', '500 mg–1 g']],
  ),
  p(
    'Paracétamol 500 mg (FEDECAME)',
    'FEDECAME',
    'Comprimé ; sirop',
    '500 mg ; 120 mg/5 mL',
    [['paracetamol', '500 mg']],
    { rdc: true },
  ),
  p(
    'Paracétamol 10 mg/mL perfusion',
    'Fresenius Kabi',
    'Solution pour perfusion',
    '1 g/100 mL',
    [['paracetamol', '10 mg/mL']],
    {
      posologie:
        'Adulte > 50 kg : 1 g en 15 min toutes les 6 h ; ≤ 50 kg et enfant : 15 mg/kg (nouveau-né à terme : 7,5–10 mg/kg).',
    },
  ),
  p(
    'Ibuprofène 400 mg',
    'Générique multisource',
    'Comprimé ; suspension buvable',
    '200 mg ; 400 mg ; 100 mg/5 mL',
    [['ibuprofene', '400 mg']],
    { rdc: true },
  ),
  p(
    'Morphine 10 mg/mL injectable',
    'Générique multisource',
    'Solution injectable',
    '10 mg/mL',
    [['morphine', '10 mg/mL']],
    {
      conservation: 'Stupéfiant : stockage sécurisé et registre',
    },
  ),

  // ---------------------------------------------------------------- Solutés, micronutriments, nutrition
  p(
    'Ringer lactate 500 mL (FEDECAME)',
    'FEDECAME',
    'Solution pour perfusion',
    '500 mL ; 1 000 mL',
    [['ringer-lactate', '500 mL']],
    { rdc: true },
  ),
  p(
    'Ringer lactate (Fresenius Kabi)',
    'Fresenius Kabi',
    'Solution pour perfusion (poche)',
    '500 mL ; 1 000 mL',
    [['ringer-lactate', '500 mL']],
  ),
  p('Chlorure de sodium 0,9 % (B. Braun)', 'B. Braun', 'Solution pour perfusion', '100–1 000 mL', [
    ['chlorure-de-sodium-0-9', '0,9 %'],
  ]),
  p(
    'Sérum salé isotonique 0,9 % (FEDECAME)',
    'FEDECAME',
    'Solution pour perfusion',
    '500 mL',
    [['chlorure-de-sodium-0-9', '0,9 %']],
    { rdc: true },
  ),
  p(
    'Glucosé 10 % 500 mL (FEDECAME)',
    'FEDECAME',
    'Solution pour perfusion',
    '500 mL',
    [['glucose-10', '10 %']],
    { rdc: true },
  ),
  p(
    'Chlorure de potassium 10 % injectable',
    'Générique multisource',
    'Solution à diluer pour perfusion',
    '1 g/10 mL (13,4 mmol)',
    [['chlorure-de-potassium', '100 mg/mL']],
    { rdc: true },
  ),
  p(
    'Gluconate de calcium 10 % injectable',
    'Générique multisource',
    'Solution injectable',
    '1 g/10 mL',
    [['gluconate-de-calcium', '100 mg/mL']],
    { rdc: true },
  ),
  p(
    'SRO osmolarité réduite',
    'UNICEF Supply Division',
    'Poudre pour solution buvable (sachet pour 1 L)',
    '20,5 g/sachet',
    [['sro', '1 sachet/L']],
    { rdc: true },
  ),
  p(
    'Zinc 20 mg comprimé dispersible',
    'UNICEF Supply Division',
    'Comprimé dispersible',
    '20 mg',
    [['zinc', '20 mg']],
    { rdc: true },
  ),
  p(
    'Co-pack SRO + zinc',
    'UNICEF Supply Division',
    'Kit : 2 sachets de SRO + 10 comprimés de zinc',
    'SRO 1 L + zinc 20 mg',
    [
      ['sro', '2 sachets'],
      ['zinc', '10 × 20 mg'],
    ],
    {
      indication: 'Traitement de la diarrhée aiguë de l’enfant à domicile (PCIME, soins communautaires).',
      posologie: 'SRO selon le plan A ou B ; zinc 20 mg/j pendant 10 jours (10 mg/j avant 6 mois).',
      rdc: true,
    },
  ),
  p(
    'ReSoMal',
    'Nutriset',
    'Poudre pour solution buvable (sachet pour 2 L)',
    '84 g/sachet',
    [['resomal', '1 sachet/2 L']],
    { rdc: true },
  ),
  p('Pyridoxine 25 mg', 'Générique multisource', 'Comprimé', '25 mg ; 50 mg', [['pyridoxine', '25 mg']], {
    rdc: true,
  }),
  p('Plumpy’Nut', 'Nutriset', 'Pâte en sachet', '92 g (500 kcal)', [['atpe', '92 g']], { rdc: true }),
  p('F-75', 'Nutriset', 'Poudre à reconstituer', '75 kcal / 100 mL', [['lait-f75', '75 kcal/100 mL']], {
    rdc: true,
  }),
  p('F-100', 'Nutriset', 'Poudre à reconstituer', '100 kcal / 100 mL', [['lait-f100', '100 kcal/100 mL']], {
    rdc: true,
  }),
];

module.exports = { operateurs, classes, molecules, medicaments };
