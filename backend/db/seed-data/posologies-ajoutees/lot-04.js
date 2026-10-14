'use strict';

/**
 * Posologies — lot 4 : molécules 61 à 80 les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, planification familiale, programmes NTD),
 * MSF Guide clinique et thérapeutique et Médicaments essentiels, notices. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Diclofénac
  diclofenac: [
    p(
      'adulte',
      '50 mg 2 à 3 fois par jour (maximum 150 mg/j) ; IM : 75 mg 1 à 2 fois par jour pendant 2 jours au plus',
      {
        ind: 'Douleurs, inflammation, colique néphrétique, dysménorrhée',
        voie: 'Orale ou IM',
        freq: '2 à 3 fois par jour, au cours des repas',
        f: { n: 3 },
        durees: [[3, 7, 'jours']],
        rem: 'Durée la plus courte possible. Éviter si ulcère, insuffisance rénale, cardiopathie ischémique, déshydratation.',
      },
    ),
    p('enfant', '≥ 1 an : 1 mg/kg 2 à 3 fois par jour (maximum 50 mg par prise)', {
      ind: 'Douleurs, inflammation',
      voie: 'Orale',
      kg: 1,
      max: 50,
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      durees: [[3, 5, 'jours']],
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiqué à partir de 20 SA ; éviter avant', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Immunoglobulines polyvalentes
  'immunoglobulines-humaines-polyvalentes': [
    p('enfant', '2 g/kg IV en une perfusion de 10 à 12 h, avec l’aspirine', {
      ind: 'Maladie de Kawasaki (dans les 10 premiers jours)',
      voie: 'IV',
      kg: 2,
      unite: 'g',
      f: 'unique',
      rem: 'Débit progressif ; surveiller les réactions à la perfusion.',
    }),
    p('adulte', '0,4 g/kg/j IV pendant 5 jours (ou 1 g/kg/j pendant 2 jours)', {
      ind: 'Syndrome de Guillain-Barré, myasthénie grave, purpura thrombopénique immunologique',
      voie: 'IV',
      kg: 0.4,
      base: 'par_jour',
      unite: 'g',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[5, null, 'jours']],
      rem: 'Bonne hydratation ; prudence en insuffisance rénale et en cas de risque thrombotique.',
    }),
    p('enfant', '0,8–1 g/kg IV en dose unique (ou 0,4 g/kg/j pendant 5 jours)', {
      ind: 'Purpura thrombopénique immunologique avec saignement, Guillain-Barré',
      voie: 'IV',
      kg: 1,
      unite: 'g',
      f: 'unique',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Lévonorgestrel (contraception régulière)
  levonorgestrel: [
    p(
      'adulte',
      'Pilule progestative 30 µg/j en continu, ou 150 µg avec 30 µg d’éthinylestradiol (pilule combinée) 21 jours sur 28',
      {
        ind: 'Contraception orale',
        voie: 'Orale',
        unite: 'µg',
        freq: '1 fois par jour, à heure fixe',
        f: { n: 1 },
        rem: 'Pilule progestative : utilisable pendant l’allaitement ; retard de prise toléré < 3 h. DIU au lévonorgestrel : 5 ans (52 mg).',
      },
    ),
    p('grossesse', 'Sans objet (arrêter si grossesse)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Mébendazole
  mebendazole: [
    p('enfant', '≥ 1 an : 500 mg en dose unique (déparasitage) ou 100 mg 2 fois par jour pendant 3 jours', {
      ind: 'Ascaridiase, ankylostomose, trichocéphalose (déparasitage de masse tous les 6 mois)',
      voie: 'Orale (à croquer)',
      freq: 'Dose unique',
      f: 'unique',
      rem: '1–2 ans : 250 mg selon certains programmes ; oxyurose : 100 mg dose unique, à répéter après 2 à 3 semaines.',
    }),
    p('adulte', '500 mg en dose unique ou 100 mg 2 fois par jour pendant 3 jours', {
      ind: 'Helminthiases intestinales',
      voie: 'Orale',
      f: 'unique',
    }),
    p('grossesse', 'À éviter au 1er trimestre ; utilisable ensuite (déparasitage OMS)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Métoclopramide
  metoclopramide: [
    p('adulte', '10 mg 3 fois par jour au maximum (0,5 mg/kg/j au plus)', {
      ind: 'Nausées et vomissements',
      voie: 'Orale, IM ou IV lente',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[1, 5, 'jours']],
      rem: 'Durée maximale de 5 jours (effets extrapyramidaux, dyskinésies tardives). Contre-indiqué si occlusion.',
    }),
    p('enfant', '≥ 1 an, en 2e intention : 0,1–0,15 mg/kg jusqu’à 3 fois par jour (maximum 0,5 mg/kg/j)', {
      ind: 'Vomissements postopératoires ou de chimiothérapie',
      voie: 'Orale ou IV lente',
      kg: 0.1,
      max: 10,
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[1, 5, 'jours']],
      sec: 'prudence',
      rem: 'Contre-indiqué avant 1 an ; risque de dystonie aiguë.',
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Naloxone
  naloxone: [
    p(
      'adulte',
      '0,4 mg IV (ou 0,04–0,1 mg par titration si dépendance), à répéter toutes les 2 à 3 min (maximum 10 mg)',
      {
        ind: 'Surdosage en opioïdes (dépression respiratoire)',
        voie: 'IV, IM, SC ou intranasale',
        f: 'schema',
        rem: 'Durée d’action courte (30–90 min) : surveiller la récidive, perfusion si opioïde à longue durée d’action.',
      },
    ),
    p('enfant', '0,01 mg/kg IV, puis 0,1 mg/kg si pas de réponse (maximum 2 mg par dose)', {
      ind: 'Surdosage en opioïdes',
      voie: 'IV, IM ou intra-osseuse',
      kg: 0.1,
      max: 2,
      f: 'schema',
    }),
    p('nouveau_ne', '0,1 mg/kg IM ou IV', {
      ind: 'Dépression respiratoire liée aux opioïdes maternels, après ventilation efficace',
      voie: 'IM ou IV',
      kg: 0.1,
      f: 'unique',
      sec: 'prudence',
      rem: 'Ne pas utiliser si mère dépendante aux opioïdes (sevrage brutal, convulsions). La ventilation reste prioritaire.',
    }),
    p('grossesse', 'Utilisable en cas de surdosage', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Trinitrine
  trinitrine: [
    p(
      'adulte',
      '0,3–0,6 mg sublingual (ou 1 bouffée de 0,4 mg), à répéter toutes les 5 min (3 fois au maximum)',
      {
        ind: 'Crise d’angor, syndrome coronarien aigu',
        voie: 'Sublinguale',
        freq: 'Toutes les 5 min si besoin',
        f: 'schema',
        rem: 'Contre-indiqué si PAS < 90 mmHg, inhibiteur de la PDE-5 dans les 24–48 h, infarctus du ventricule droit.',
      },
    ),
    p('adulte', '5–10 µg/min IV, augmenter de 5–10 µg/min toutes les 5 min selon la tension', {
      ind: 'Œdème aigu du poumon hypertensif, angor instable',
      voie: 'IV continue',
      unite: 'µg/min',
      f: 'perfusion',
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Acétazolamide
  acetazolamide: [
    p('adulte', '250 mg 2 à 4 fois par jour (urgence : 500 mg IV ou per os puis 250 mg toutes les 6 h)', {
      ind: 'Glaucome aigu par fermeture de l’angle, hypertension intracrânienne idiopathique',
      voie: 'Orale ou IV',
      freq: '4 fois par jour',
      f: { n: 4 },
      rem: 'Surveiller la kaliémie ; contre-indiqué si allergie aux sulfamides, insuffisance hépatique.',
    }),
    p('adulte', '125 mg 2 fois par jour, à débuter la veille de l’ascension', {
      ind: 'Prévention du mal aigu des montagnes',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('enfant', '5 mg/kg 2 à 3 fois par jour (maximum 250 mg par prise)', {
      ind: 'Glaucome, hypertension intracrânienne (avis spécialisé)',
      voie: 'Orale',
      kg: 5,
      max: 250,
      freq: '3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter au 1er trimestre', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Chlorphénamine
  chlorphenamine: [
    p('adulte', '4 mg toutes les 4 à 6 h (maximum 24 mg/j) ; injection : 10 mg IM ou IV lente', {
      ind: 'Allergie, urticaire, prurit, anaphylaxie (après l’adrénaline)',
      voie: 'Orale, IM ou IV',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      rem: 'Somnolence ; prudence chez le conducteur et le sujet âgé.',
    }),
    p('enfant', '1–5 ans : 1 mg toutes les 4 à 6 h ; 6–12 ans : 2 mg toutes les 4 à 6 h', {
      ind: 'Allergie, urticaire, prurit',
      voie: 'Orale',
      freq: 'Toutes les 6 h',
      f: { h: 6 },
      sec: 'prudence',
      rem: 'Déconseillée avant 1 an.',
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Iode
  iode: [
    p('enfant', 'Huile iodée per os : 200 mg (< 1 an : 100 mg) une fois par an', {
      ind: 'Prévention de la carence iodée en zone d’endémie sans sel iodé',
      voie: 'Orale',
      f: 'unique',
    }),
    p('adulte', 'Huile iodée per os : 400 mg une fois par an (femme en âge de procréer)', {
      ind: 'Prévention de la carence iodée en zone d’endémie',
      voie: 'Orale',
      f: 'unique',
    }),
    p('adulte', 'Iodure de potassium 130 mg en dose unique (sur consigne des autorités)', {
      ind: 'Accident nucléaire (protection de la thyroïde)',
      voie: 'Orale',
      f: 'unique',
      rem: 'Enfant de 3 à 12 ans : 65 mg ; 1 mois à 3 ans : 32 mg ; nouveau-né : 16 mg.',
    }),
    p('grossesse', 'Huile iodée 400 mg en dose unique ; ou 250 µg/j d’iode', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Lévonorgestrel 1,5 mg
  'levonorgestrel-1-5-mg': [
    p('adulte', '1,5 mg en dose unique, le plus tôt possible et au plus tard 72 h après le rapport', {
      ind: 'Contraception d’urgence',
      voie: 'Orale',
      f: 'unique',
      rem: 'Efficace jusqu’à 120 h avec une efficacité moindre. Doubler (3 mg) si inducteur enzymatique (éfavirenz, rifampicine) ou IMC > 30 (selon certaines recommandations). Reprendre la dose si vomissements dans les 3 h.',
    }),
    p('enfant', 'Adolescente : même dose que l’adulte', {
      ind: 'Contraception d’urgence, violences sexuelles',
      voie: 'Orale',
      f: 'unique',
    }),
    p('grossesse', 'Sans effet sur une grossesse installée (inutile)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Macrogol
  macrogol: [
    p('adulte', '10–20 g/j (1 à 2 sachets)', {
      ind: 'Constipation',
      voie: 'Orale',
      unite: 'g',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
    }),
    p('enfant', '0,4–0,8 g/kg/j en 1 prise (désimpaction : 1–1,5 g/kg/j pendant 3 à 6 jours)', {
      ind: 'Constipation de l’enfant (≥ 6 mois)',
      voie: 'Orale',
      kg: 0.5,
      max: 20,
      base: 'par_jour',
      unite: 'g',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Traitement d’entretien prolongé (au moins 2 mois) puis arrêt progressif.',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Povidone iodée
  'povidone-iodee': [
    p('adulte', 'Solution à 10 % : application sur la peau ou la plaie, 1 à 2 fois par jour', {
      ind: 'Antisepsie cutanée, préparation opératoire, plaies',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 2 fois par jour',
      f: { n: 2 },
      rem: 'Laisser sécher 2 min. Éviter l’usage prolongé sur de grandes surfaces (résorption d’iode).',
    }),
    p('nouveau_ne', 'À éviter (risque d’hypothyroïdie) : préférer la chlorhexidine', {
      ind: 'Antisepsie',
      voie: 'Cutanée',
      sec: 'contre_indique',
    }),
    p('grossesse', 'Usage ponctuel uniquement ; éviter l’usage prolongé', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Prégabaline
  pregabaline: [
    p('adulte', '75 mg 2 fois par jour, augmenter jusqu’à 150–300 mg 2 fois par jour', {
      ind: 'Douleurs neuropathiques, épilepsie focale, anxiété généralisée',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Adapter à la fonction rénale. Risque de mésusage et de dépendance ; arrêt progressif sur au moins 1 semaine.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Prométhazine
  promethazine: [
    p('adulte', '25 mg 1 à 3 fois par jour (maximum 100 mg/j)', {
      ind: 'Allergie, nausées, sédation, mal des transports',
      voie: 'Orale ou IM profonde',
      freq: '1 à 3 fois par jour',
      f: { n: 3 },
      rem: 'Pas d’IV (nécrose tissulaire). Somnolence marquée.',
    }),
    p('enfant', '≥ 2 ans : 0,25–0,5 mg/kg par prise, 1 à 3 fois par jour (maximum 25 mg par prise)', {
      ind: 'Allergie, nausées',
      voie: 'Orale',
      kg: 0.5,
      max: 25,
      freq: '1 à 3 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
      rem: 'Contre-indiquée avant 2 ans (dépression respiratoire, mort subite).',
    }),
    p('grossesse', 'Utilisable (vomissements gravidiques)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Allopurinol
  allopurinol: [
    p(
      'adulte',
      '100 mg/j, augmenter de 100 mg toutes les 2 à 4 semaines selon l’uricémie (habituellement 300 mg/j, maximum 800 mg/j)',
      {
        ind: 'Goutte chronique (traitement de fond), hyperuricémie',
        voie: 'Orale',
        freq: '1 fois par jour, après le repas',
        f: { n: 1 },
        rem: 'Ne pas débuter pendant une crise ; associer la colchicine les premiers mois. Adapter à la fonction rénale. Arrêt si éruption (syndrome DRESS, Lyell).',
      },
    ),
    p('enfant', '10 mg/kg/j en 2 à 3 prises (maximum 400 mg/j)', {
      ind: 'Prévention du syndrome de lyse tumorale',
      voie: 'Orale',
      kg: 10,
      max: 400,
      base: 'par_jour',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      durees: [[7, null, 'jours', 'Pendant la chimiothérapie d’induction']],
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Azathioprine
  azathioprine: [
    p('adulte', '1–2,5 mg/kg/j en 1 à 2 prises', {
      ind: 'Maladies auto-immunes (lupus, hépatite auto-immune, MICI, vascularites), greffe',
      voie: 'Orale',
      kg: 2,
      base: 'par_jour',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      rem: 'NFS chaque semaine le premier mois puis tous les 3 mois. Réduire de 75 % avec l’allopurinol.',
    }),
    p('enfant', '1–3 mg/kg/j (avis spécialisé)', {
      ind: 'Maladies auto-immunes, syndrome néphrotique corticodépendant',
      voie: 'Orale',
      kg: 2,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable si nécessaire (maladies auto-immunes, greffe)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Clarithromycine
  clarithromycine: [
    p('adulte', '500 mg 2 fois par jour', {
      ind: 'Éradication d’Helicobacter pylori, pneumonie, infections à mycobactéries atypiques',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [
        [14, null, 'jours', 'Helicobacter pylori (trithérapie)', true],
        [7, null, 'jours', 'Pneumonie'],
      ],
      rem: 'Interactions nombreuses (CYP3A4) ; allongement du QT.',
    }),
    p('enfant', '7,5 mg/kg 2 fois par jour (maximum 500 mg par prise)', {
      ind: 'Infections respiratoires, coqueluche',
      voie: 'Orale',
      kg: 7.5,
      max: 500,
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[7, 10, 'jours']],
    }),
    p('grossesse', 'À éviter, surtout au 1er trimestre', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Digoxine
  digoxine: [
    p('adulte', '0,125–0,25 mg/j (sujet âgé ou insuffisant rénal : 0,0625–0,125 mg/j)', {
      ind: 'Fibrillation atriale (contrôle de la fréquence), insuffisance cardiaque',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Charge éventuelle : 0,5 mg puis 0,25 mg toutes les 6 h (maximum 1 mg). Toxicité majorée par l’hypokaliémie. Digoxinémie 0,5–0,9 ng/mL.',
    }),
    p('enfant', 'Entretien : 5–10 µg/kg/j en 2 prises selon l’âge (avis spécialisé)', {
      ind: 'Insuffisance cardiaque, tachycardies supraventriculaires',
      voie: 'Orale',
      kg: 5,
      base: 'par_jour',
      max: 250,
      unite: 'µg',
      freq: '2 fois par jour',
      f: { n: 2 },
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Doxorubicine
  doxorubicine: [
    p('adulte', '50–75 mg/m² IV toutes les 3 semaines (ou 60 mg/m² en association) selon le protocole', {
      ind: 'Cancer du sein, lymphomes, sarcomes, sarcome de Kaposi (protocoles d’oncologie)',
      voie: 'IV',
      f: 'schema',
      rem: 'Dose cumulée maximale 450–550 mg/m² (cardiotoxicité : échographie cardiaque). Vésicante.',
    }),
    p('enfant', 'Selon le protocole d’oncologie pédiatrique (mg/m²)', {
      ind: 'Leucémies, néphroblastome, lymphomes, sarcomes',
      voie: 'IV',
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiquée au 1er trimestre ; décision spécialisée ensuite', {
      sec: 'contre_indique',
    }),
  ],
};
