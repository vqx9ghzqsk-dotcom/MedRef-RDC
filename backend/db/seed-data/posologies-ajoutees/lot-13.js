'use strict';

/**
 * Posologies — lot 13 : molécules suivantes les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, PEV, envenimations), MSF Guide clinique
 * et thérapeutique et Médicaments essentiels, notices. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Pilocarpine
  pilocarpine: [
    p('adulte', 'Collyre à 1–2 % : 1 goutte toutes les 15 min pendant 1 h, puis 4 fois par jour', {
      ind: 'Glaucome aigu par fermeture de l’angle (en attendant l’iridotomie), glaucome chronique',
      voie: 'Ophtalmique',
      unite: 'goutte',
      f: 'schema',
      rem: 'Associer acétazolamide et bêtabloquant local. Myosis, baisse de vision nocturne.',
    }),
    p('enfant', 'Collyre à 1 % : 1 goutte 2 à 4 fois par jour (avis spécialisé)', {
      ind: 'Glaucome (avant chirurgie)',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '2 à 4 fois par jour',
      f: { n: 4 },
      sec: 'prudence',
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Poractant alfa (surfactant)
  'poractant-alfa': [
    p(
      'nouveau_ne',
      '200 mg/kg (2,5 mL/kg) par voie intratrachéale, puis 100 mg/kg toutes les 12 h si besoin (2 fois au maximum)',
      {
        ind: 'Maladie des membranes hyalines du prématuré',
        voie: 'Intratrachéale (intubation ou technique moins invasive)',
        kg: 200,
        f: 'schema',
        rem: 'Unité néonatale avec ventilation ; CPAP associée.',
      },
    ),
  ],

  // ------------------------------------------------------------ Pyrantel (embonate)
  'pyrantel-embonate': [
    p('enfant', '10 mg/kg en dose unique (maximum 1 g)', {
      ind: 'Ascaridiase, oxyurose (renouveler à 2–3 semaines), ankylostomose (3 jours)',
      voie: 'Orale',
      kg: 10,
      max: 1000,
      f: 'unique',
      rem: 'Utilisable dès 6 mois.',
    }),
    p('adulte', '10 mg/kg en dose unique (maximum 1 g)', {
      ind: 'Ascaridiase, oxyurose, ankylostomose',
      voie: 'Orale',
      kg: 10,
      max: 1000,
      f: 'unique',
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Ramipril
  ramipril: [
    p('adulte', '2,5 mg/j, augmenter toutes les 2 à 4 semaines jusqu’à 5–10 mg/j', {
      ind: 'Hypertension artérielle, insuffisance cardiaque, post-infarctus, néphropathie diabétique',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Insuffisance cardiaque : débuter à 1,25 mg. Créatinine et kaliémie à 1–2 semaines. Toux, angio-œdème.',
    }),
    p('grossesse', 'Contre-indiqué (2e et 3e trimestres)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Rosuvastatine
  rosuvastatine: [
    p('adulte', '5–20 mg/j (maximum 40 mg/j)', {
      ind: 'Hypercholestérolémie, prévention cardiovasculaire',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Myalgies (CPK si symptômes), transaminases. Insuffisance rénale sévère : 5 mg/j au maximum.',
    }),
    p('enfant', '≥ 6 ans : 5–10 mg/j (avis spécialisé)', {
      ind: 'Hypercholestérolémie familiale hétérozygote',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Sérum antivenimeux
  'serum-antivenimeux': [
    p(
      'adulte',
      'Selon le fabricant : habituellement 2 à 4 ampoules (ou 20–40 mL) IV en perfusion de 30 à 60 min, à répéter selon la coagulation et les signes neurologiques',
      {
        ind: 'Envenimation par morsure de serpent avec signes systémiques (syndrome hémorragique, neurotoxique, nécrose extensive)',
        voie: 'IV (perfusion)',
        f: 'schema',
        rem: 'Test de coagulation sur tube sec à 20 min, répété toutes les 6 h. Adrénaline prête (réactions anaphylactiques). Sérum adapté aux espèces d’Afrique centrale.',
      },
    ),
    p('enfant', 'Même dose que l’adulte (non réduite selon le poids)', {
      ind: 'Envenimation avec signes systémiques',
      voie: 'IV',
      f: 'schema',
      rem: 'Surveiller la surcharge volémique chez le petit enfant (volume de dilution réduit).',
    }),
    p('grossesse', 'Mêmes doses ; la vie maternelle prime', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Somatropine
  somatropine: [
    p('enfant', '0,025–0,05 mg/kg/j SC le soir, selon l’indication', {
      ind: 'Déficit en hormone de croissance, syndrome de Turner, insuffisance rénale chronique',
      voie: 'SC',
      kg: 0.035,
      base: 'par_jour',
      freq: '1 fois par jour, le soir',
      f: { n: 1 },
      sec: 'prudence',
      rem: 'Prescription par un endocrinologue pédiatre ; IGF-1, glycémie, fond d’œil.',
    }),
    p('adulte', '0,15–0,3 mg/j SC, puis adapter selon l’IGF-1', {
      ind: 'Déficit somatotrope de l’adulte',
      voie: 'SC',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
  ],

  // ------------------------------------------------------------ Spiramycine
  spiramycine: [
    p('grossesse', '3 MUI 3 fois par jour (9 MUI/j) jusqu’à l’accouchement', {
      ind: 'Toxoplasmose maternelle en cours de grossesse (prévention de la transmission fœtale)',
      voie: 'Orale',
      unite: 'MUI',
      freq: '3 fois par jour',
      f: { n: 3 },
      sec: 'autorise',
      rem: 'Si infection fœtale prouvée : pyriméthamine-sulfadiazine après 18 SA.',
    }),
    p('adulte', '3 MUI 2 à 3 fois par jour', {
      ind: 'Infections respiratoires et stomatologiques (allergie aux bêtalactamines)',
      voie: 'Orale',
      unite: 'MUI',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      durees: [[7, 10, 'jours']],
    }),
    p('enfant', '150 000–300 000 UI/kg/j en 2 à 3 prises', {
      ind: 'Infections ORL et respiratoires',
      voie: 'Orale',
      kg: 100000,
      unite: 'UI',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[7, 10, 'jours']],
    }),
  ],

  // ------------------------------------------------------------ Sulfasalazine
  sulfasalazine: [
    p('adulte', '500 mg/j, augmenter de 500 mg par semaine jusqu’à 2–3 g/j en 2 à 4 prises', {
      ind: 'Rectocolite hémorragique, polyarthrite rhumatoïde, spondylarthrite',
      voie: 'Orale',
      freq: '2 à 4 fois par jour',
      f: { n: 2 },
      rem: 'NFS et bilan hépatique ; oligospermie réversible ; coloration orange des urines. Allergie aux sulfamides : contre-indiquée.',
    }),
    p('enfant', '≥ 2 ans : 40–60 mg/kg/j en 3 à 4 prises (maximum 2–4 g/j)', {
      ind: 'Maladies inflammatoires intestinales, arthrite juvénile',
      voie: 'Orale',
      kg: 50,
      max: 3000,
      base: 'par_jour',
      freq: '3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable avec acide folique 5 mg/j', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Suxaméthonium
  suxamethonium: [
    p('adulte', '1–1,5 mg/kg IV', {
      ind: 'Intubation en séquence rapide',
      voie: 'IV',
      kg: 1,
      max: 150,
      f: 'unique',
      rem: 'Contre-indiqué : hyperkaliémie, brûlés et traumatisés médullaires après 48 h, antécédent d’hyperthermie maligne. Anesthésiste et ventilation.',
    }),
    p('enfant', '2 mg/kg IV (nourrisson) ; 1–2 mg/kg (enfant)', {
      ind: 'Intubation en séquence rapide',
      voie: 'IV',
      kg: 2,
      max: 150,
      f: 'unique',
      rem: 'Atropine préalable chez le jeune enfant (bradycardie).',
    }),
    p('grossesse', 'Utilisable (césarienne sous anesthésie générale)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Terlipressine
  terlipressine: [
    p('adulte', '2 mg IV toutes les 4 h, puis 1 mg toutes les 4 h après contrôle du saignement', {
      ind: 'Hémorragie par rupture de varices œsophagiennes ; syndrome hépatorénal (avec albumine)',
      voie: 'IV',
      freq: 'Toutes les 4 h',
      f: { h: 4 },
      durees: [[2, 5, 'jours']],
      rem: 'Contre-indications relatives : cardiopathie ischémique, artériopathie. Hyponatrémie.',
    }),
    p('grossesse', 'Contre-indiquée (contractions utérines)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Ticagrélor
  ticagrelor: [
    p('adulte', '180 mg en dose de charge, puis 90 mg 2 fois par jour (avec aspirine)', {
      ind: 'Syndrome coronarien aigu',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[12, null, 'mois']],
      rem: 'Dyspnée, saignements. Aspirine ≤ 100 mg/j.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Tocophérol (vitamine E)
  'tocopherol-vitamine-e': [
    p('adulte', '100–400 UI/j', {
      ind: 'Carence en vitamine E (malabsorption, cholestase)',
      voie: 'Orale',
      unite: 'UI',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Intérêt non démontré en supplémentation systématique.',
    }),
    p('enfant', 'Cholestase ou mucoviscidose : 25–50 UI/kg/j (avis spécialisé)', {
      ind: 'Carence par malabsorption',
      voie: 'Orale',
      kg: 25,
      base: 'par_jour',
      unite: 'UI',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Pas de supplémentation systématique', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Trétinoïne
  tretinoine: [
    p('adulte', 'Crème ou gel à 0,025–0,05 % : 1 application le soir sur peau sèche', {
      ind: 'Acné comédonienne',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 fois par jour, le soir',
      f: { n: 1 },
      durees: [[8, 12, 'semaines']],
      rem: 'Irritation, photosensibilité : écran solaire. Débuter un soir sur deux.',
    }),
    p('adulte', '45 mg/m²/j per os en 2 prises (avec chimiothérapie)', {
      ind: 'Leucémie aiguë promyélocytaire (protocole d’hématologie)',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Syndrome de différenciation : corticoïdes. Tératogène.',
    }),
    p('grossesse', 'Contre-indiquée (voie orale et locale)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Triptoréline
  triptoreline: [
    p('adulte', '3 mg IM toutes les 4 semaines ou 11,25 mg toutes les 12 semaines', {
      ind: 'Cancer de la prostate avancé, endométriose, fibromes (préopératoire)',
      voie: 'IM',
      f: 'schema',
      rem: 'Effet flare initial (prostate : antiandrogène associé). Ostéoporose au long cours.',
    }),
    p(
      'enfant',
      '3 mg IM toutes les 4 semaines (≥ 20 kg ; 1,5 mg si < 20 kg) ou 11,25 mg toutes les 12 semaines',
      {
        ind: 'Puberté précoce centrale (endocrinologue pédiatre)',
        voie: 'IM',
        f: 'schema',
        sec: 'prudence',
      },
    ),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Ulipristal
  ulipristal: [
    p('adulte', '30 mg en dose unique, le plus tôt possible et au plus tard 120 h après le rapport', {
      ind: 'Contraception d’urgence',
      voie: 'Orale',
      f: 'unique',
      rem: 'Reprendre la dose si vomissement dans les 3 h. Attendre 5 jours avant de (re)commencer une contraception hormonale.',
    }),
    p('enfant', 'Adolescente : même dose', {
      ind: 'Contraception d’urgence, violences sexuelles',
      voie: 'Orale',
      f: 'unique',
    }),
    p('grossesse', 'Inutile si grossesse installée', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Urée
  uree: [
    p('adulte', 'Crème à 10–30 % : 1 à 2 applications par jour', {
      ind: 'Xérose, hyperkératose (talons, ichtyose), kératodermie',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
      rem: 'Picotements sur peau lésée. 40 % : ongles dystrophiques (sous occlusion).',
    }),
    p('enfant', 'Crème à 5–10 % : 1 à 2 applications par jour (après 1 an)', {
      ind: 'Xérose, ichtyose, dermatite atopique (entretien)',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Vaccin antiamaril
  'vaccin-antiamaril': [
    p('enfant', '0,5 mL SC ou IM en dose unique à 9 mois (avec le vaccin RR)', {
      ind: 'Prévention de la fièvre jaune (PEV, campagnes de riposte)',
      voie: 'SC ou IM',
      unite: 'mL',
      f: 'unique',
      rem: 'Dose unique protectrice à vie. Contre-indiqué avant 6 mois et si immunodépression sévère.',
    }),
    p('adulte', '0,5 mL SC en dose unique', {
      ind: 'Rattrapage, voyageurs',
      voie: 'SC ou IM',
      unite: 'mL',
      f: 'unique',
      rem: 'Prudence après 60 ans (maladie viscérotrope post-vaccinale).',
    }),
    p('grossesse', 'À éviter, sauf épidémie ou risque élevé', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Vaccin méningococcique A conjugué
  'vaccin-meningococcique-a-conjugue': [
    p('enfant', '0,5 mL IM en dose unique à 9–18 mois (selon le calendrier national)', {
      ind: 'Prévention de la méningite à méningocoque A (ceinture africaine de la méningite)',
      voie: 'IM',
      unite: 'mL',
      f: 'unique',
      rem: 'Les vaccins conjugués multivalents (ACWYX) remplacent progressivement le MenAfriVac.',
    }),
    p('adulte', '0,5 mL IM en dose unique (campagnes jusqu’à 29 ans)', {
      ind: 'Campagnes de masse, riposte',
      voie: 'IM',
      unite: 'mL',
      f: 'unique',
    }),
    p('grossesse', 'Utilisable en campagne', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Vaccin polio
  'vaccin-polio': [
    p(
      'enfant',
      'VPO : 2 gouttes à la naissance, 6, 10 et 14 semaines ; VPI : 0,5 mL IM à 14 semaines (et 2e dose selon le programme)',
      {
        ind: 'Vaccination de routine contre la poliomyélite, campagnes (nVPO2)',
        voie: 'Orale (VPO) ou IM (VPI)',
        f: 'schema',
        rem: 'Campagnes de riposte aux poliovirus dérivés de souches vaccinales : nVPO2 selon le programme.',
      },
    ),
  ],
};
