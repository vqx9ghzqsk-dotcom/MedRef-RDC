'use strict';

/**
 * Posologies — lot 15 : molécules suivantes les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, tuberculose, hépatite C, douleur),
 * MSF Guide clinique et thérapeutique et Médicaments essentiels, notices.
 * Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Bédaquiline
  bedaquiline: [
    p(
      'adulte',
      '400 mg/j pendant 2 semaines, puis 200 mg 3 fois par semaine (ou 200 mg/j pendant 8 semaines puis 100 mg/j), en association',
      {
        ind: 'Tuberculose multirésistante ou résistante à la rifampicine (schémas BPaLM, protocole national)',
        voie: 'Orale, au repas',
        f: 'schema',
        durees: [[6, 9, 'mois', 'Selon le schéma']],
        rem: 'ECG (QT) avant et pendant le traitement ; bilan hépatique.',
      },
    ),
    p('enfant', 'Selon les bandes de poids du programme national (formulation 20 mg dispersible)', {
      ind: 'Tuberculose résistante de l’enfant',
      voie: 'Orale',
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable si nécessaire (programme national)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Bétahistine
  betahistine: [
    p('adulte', '8–16 mg 3 fois par jour, au repas', {
      ind: 'Vertiges de la maladie de Ménière',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      rem: 'Efficacité discutée ; prudence si asthme ou ulcère.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Bicalutamide
  bicalutamide: [
    p('adulte', '50 mg/j avec un analogue de la LH-RH (débuter 1 semaine avant) ; 150 mg/j en monothérapie', {
      ind: 'Cancer de la prostate avancé',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Bilan hépatique ; gynécomastie.',
    }),
  ],

  // ------------------------------------------------------------ Biotine
  'biotine-vitamine-b8-h': [
    p('adulte', '5–10 mg/j', {
      ind: 'Carence en biotine, alopécie et ongles fragiles (bénéfice limité)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Interfère avec de nombreux dosages biologiques (TSH, troponine) : arrêter 48 h avant.',
    }),
    p('enfant', 'Déficit en biotinidase : 5–20 mg/j à vie', {
      ind: 'Déficit en biotinidase, déficit en holocarboxylase synthétase',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Bisacodyl
  bisacodyl: [
    p('adulte', '5–10 mg per os le soir ; suppositoire 10 mg le matin', {
      ind: 'Constipation occasionnelle, constipation sous opioïdes, préparation colique',
      voie: 'Orale ou rectale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[1, 7, 'jours', 'Usage court sauf constipation sous opioïdes']],
    }),
    p('enfant', '≥ 4 ans : 5 mg per os ou suppositoire 5 mg', {
      ind: 'Constipation (après échec des mesures diététiques et du macrogol)',
      voie: 'Orale ou rectale',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Usage ponctuel', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Bismuth
  'bismuth-subgallate-sous-salicylate': [
    p(
      'adulte',
      'Sous-citrate de bismuth : 120 mg 4 fois par jour (quadrithérapie avec IPP, métronidazole et tétracycline)',
      {
        ind: 'Éradication d’Helicobacter pylori ; diarrhée (sous-salicylate : 525 mg toutes les 30–60 min, maximum 8 doses/j)',
        voie: 'Orale',
        freq: '4 fois par jour',
        f: { n: 4 },
        durees: [[10, 14, 'jours']],
        rem: 'Selles noires. Sous-salicylate : éviter chez l’enfant et avec les anticoagulants.',
      },
    ),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Bléomycine
  bleomycine: [
    p('adulte', '10–15 UI/m² IV ou IM selon le protocole (ABVD, BEP)', {
      ind: 'Lymphome de Hodgkin, tumeurs germinales, sarcome de Kaposi',
      voie: 'IV ou IM',
      f: 'schema',
      rem: 'Fibrose pulmonaire (dose cumulée < 400 UI) ; fièvre et frissons.',
    }),
    p('enfant', 'Selon le protocole d’oncologie pédiatrique', {
      ind: 'Lymphome de Hodgkin, tumeurs germinales',
      voie: 'IV',
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiquée au 1er trimestre', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Bortézomib
  bortezomib: [
    p('adulte', '1,3 mg/m² SC à J1, J4, J8 et J11 de cycles de 21 jours, selon le protocole', {
      ind: 'Myélome multiple, lymphome du manteau',
      voie: 'SC (ou IV)',
      f: 'schema',
      rem: 'Neuropathie périphérique ; prophylaxie du zona (aciclovir).',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Brimonidine (collyre)
  'brimonidine-collyre': [
    p('adulte', 'Collyre à 0,2 % : 1 goutte 2 à 3 fois par jour', {
      ind: 'Glaucome à angle ouvert, hypertonie oculaire',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '2 à 3 fois par jour',
      f: { n: 2 },
      rem: 'Allergie oculaire fréquente ; somnolence.',
    }),
    p('enfant', 'Contre-indiquée avant 2 ans (dépression respiratoire) ; déconseillée avant 12 ans', {
      ind: 'Glaucome',
      voie: 'Ophtalmique',
      sec: 'contre_indique',
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Buprénorphine
  buprenorphine: [
    p(
      'adulte',
      'Substitution : 2–4 mg sublingual à J1 (au moins 12 h après le dernier opioïde, signes de manque présents), puis 8–16 mg/j',
      {
        ind: 'Traitement de la dépendance aux opioïdes',
        voie: 'Sublinguale',
        freq: '1 fois par jour',
        f: { n: 1 },
        rem: 'Maximum 24 mg/j. Analgésie : 0,2–0,4 mg sublingual toutes les 6–8 h. Dépression respiratoire avec benzodiazépines ou alcool.',
      },
    ),
    p('grossesse', 'Utilisable (substitution) ; sevrage néonatal à surveiller', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Calcipotriol
  calcipotriol: [
    p('adulte', 'Pommade ou crème à 0,005 % : 1 à 2 applications par jour (maximum 100 g par semaine)', {
      ind: 'Psoriasis en plaques (souvent associé à la bétaméthasone)',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      durees: [[4, 8, 'semaines']],
      rem: 'Éviter le visage ; hypercalcémie si surdosage.',
    }),
    p('enfant', '≥ 6 ans : 1 à 2 applications par jour (maximum 50–75 g par semaine selon l’âge)', {
      ind: 'Psoriasis',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Surfaces limitées', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Capsaïcine
  capsaicine: [
    p(
      'adulte',
      'Crème à 0,025–0,075 % : 3 à 4 applications par jour ; patch à 8 % (milieu hospitalier) tous les 3 mois',
      {
        ind: 'Douleurs neuropathiques localisées (post-zostériennes, diabétiques), arthrose',
        voie: 'Cutanée',
        unite: 'application',
        freq: '3 à 4 fois par jour',
        f: { n: 4 },
        rem: 'Brûlure initiale ; se laver les mains, éviter les yeux et les muqueuses. Effet après 2 à 4 semaines.',
      },
    ),
    p('grossesse', 'Usage local limité', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Céfotaxime
  cefotaxime: [
    p('adulte', '1–2 g IV toutes les 8 h (méningite : 2 g toutes les 4 à 6 h)', {
      ind: 'Méningite, sepsis, pneumonie grave, infection du liquide d’ascite',
      voie: 'IV',
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[7, 14, 'jours']],
    }),
    p('enfant', '50 mg/kg IV toutes les 8 h (méningite : 75 mg/kg toutes les 6 h ; maximum 2 g par dose)', {
      ind: 'Méningite, sepsis, pneumonie grave',
      voie: 'IV',
      kg: 50,
      max: 2000,
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[7, 14, 'jours']],
    }),
    p('nouveau_ne', '50 mg/kg IV toutes les 12 h (< 7 jours) ou toutes les 8 h (≥ 7 jours)', {
      ind: 'Sepsis et méningite néonatals (préféré à la ceftriaxone chez le nouveau-né ictérique)',
      voie: 'IV',
      kg: 50,
      freq: 'Toutes les 8 à 12 h',
      f: 'schema',
      durees: [
        [7, 10, 'jours', 'Sepsis', true],
        [14, 21, 'jours', 'Méningite'],
      ],
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Ceftazidime
  ceftazidime: [
    p('adulte', '2 g IV toutes les 8 h', {
      ind: 'Infections à Pseudomonas, neutropénie fébrile, mélioïdose',
      voie: 'IV',
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[7, 14, 'jours']],
      rem: 'Adapter à la fonction rénale.',
    }),
    p('enfant', '50 mg/kg IV toutes les 8 h (maximum 2 g par dose)', {
      ind: 'Infections à Pseudomonas, neutropénie fébrile',
      voie: 'IV',
      kg: 50,
      max: 2000,
      freq: 'Toutes les 8 h',
      f: { h: 8 },
      durees: [[7, 14, 'jours']],
    }),
    p('nouveau_ne', '50 mg/kg IV toutes les 12 h (< 7 jours) ou toutes les 8 h', {
      ind: 'Sepsis à Pseudomonas',
      voie: 'IV',
      kg: 50,
      freq: 'Toutes les 8 à 12 h',
      f: 'schema',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Chlorpromazine
  chlorpromazine: [
    p('adulte', '25–50 mg IM (agitation), ou 75–300 mg/j per os en 2 à 3 prises', {
      ind: 'Psychoses, agitation, hoquet rebelle, tétanos (sédation)',
      voie: 'Orale ou IM',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      rem: 'Hypotension (patient allongé après IM), effets anticholinergiques, photosensibilisation.',
    }),
    p(
      'enfant',
      '≥ 1 an : 0,5 mg/kg toutes les 6 à 8 h (maximum 40 mg/j avant 5 ans, 75 mg/j de 5 à 12 ans)',
      {
        ind: 'Agitation sévère, tétanos',
        voie: 'Orale ou IM',
        kg: 0.5,
        max: 25,
        freq: 'Toutes les 8 h',
        f: { h: 8 },
        sec: 'prudence',
      },
    ),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Chondroïtine sulfate
  'chondroitine-sulfate': [
    p('adulte', '800–1 200 mg/j en 1 à 3 prises', {
      ind: 'Arthrose symptomatique (genou, hanche)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[3, 6, 'mois', 'Arrêter si pas d’amélioration']],
      rem: 'Bénéfice faible et inconstant.',
    }),
    p('grossesse', 'Sans objet', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Codéine
  codeine: [
    p('adulte', '30–60 mg toutes les 4 à 6 h (maximum 240 mg/j), souvent avec le paracétamol', {
      ind: 'Douleur modérée, toux sèche invalidante',
      voie: 'Orale',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      durees: [[1, 3, 'jours', 'Durée la plus courte possible']],
      rem: 'Métaboliseurs ultrarapides : dépression respiratoire. Constipation.',
    }),
    p(
      'enfant',
      'Contre-indiquée avant 12 ans et après amygdalectomie (OMS : ne pas utiliser chez l’enfant)',
      {
        ind: 'Douleur',
        voie: 'Orale',
        sec: 'contre_indique',
      },
    ),
    p('grossesse', 'Usage ponctuel ; contre-indiquée pendant l’allaitement', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Cyprotérone
  cyproterone: [
    p('adulte', '2 mg avec éthinylestradiol 35 µg (21 jours sur 28)', {
      ind: 'Acné sévère et hirsutisme de la femme (après échec des autres traitements)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Risque thromboembolique. Fortes doses (≥ 25 mg/j) : méningiomes — IRM si usage prolongé.',
    }),
    p('adulte', '100 mg 2 à 3 fois par jour', {
      ind: 'Cancer de la prostate (prévention de l’effet flare, bouffées de chaleur)',
      voie: 'Orale',
      freq: '2 à 3 fois par jour',
      f: { n: 2 },
      rem: 'Hépatotoxicité : bilan hépatique.',
    }),
    p('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Daclatasvir
  daclatasvir: [
    p('adulte', '60 mg/j avec sofosbuvir 400 mg/j', {
      ind: 'Hépatite C chronique (tous génotypes)',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [12, null, 'semaines', 'Sans cirrhose', true],
        [24, null, 'semaines', 'Cirrhose'],
      ],
      rem: 'Dose à 30 mg/j avec les inhibiteurs puissants du CYP3A4, 90 mg/j avec l’éfavirenz. Dépister l’hépatite B. Pas d’amiodarone.',
    }),
    p('enfant', '≥ 3 ans : selon le poids (avis spécialisé)', {
      ind: 'Hépatite C chronique',
      voie: 'Orale',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Non recommandé (traiter après l’accouchement)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Dapoxétine
  dapoxetine: [
    p('adulte', '30 mg 1 à 3 h avant le rapport (maximum 60 mg, 1 fois par 24 h)', {
      ind: 'Éjaculation précoce (18–64 ans)',
      voie: 'Orale',
      f: 'schema',
      rem: 'Hypotension orthostatique, syncope ; pas d’alcool. Interactions avec les antidépresseurs.',
    }),
  ],
};
