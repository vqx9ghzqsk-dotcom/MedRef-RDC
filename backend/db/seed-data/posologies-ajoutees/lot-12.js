'use strict';

/**
 * Posologies — lot 12 : molécules suivantes les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, santé maternelle, rage, avortement sécurisé),
 * MSF Guide clinique et thérapeutique et Médicaments essentiels, WFH, notices.
 * Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Ergocalciférol (vitamine D2)
  'ergocalciferol-vitamine-d2': [
    p('adulte', 'Carence : 50 000 UI par semaine pendant 8 semaines, puis 800–2 000 UI/j', {
      ind: 'Carence en vitamine D, ostéomalacie',
      voie: 'Orale',
      unite: 'UI',
      f: 'schema',
      rem: 'Le cholécalciférol (D3) est préféré quand il est disponible.',
    }),
    p('enfant', 'Prévention : 400 UI/j ; rachitisme : 2 000–5 000 UI/j pendant 3 mois (avec calcium)', {
      ind: 'Rachitisme carentiel',
      voie: 'Orale',
      unite: 'UI',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[3, null, 'mois']],
    }),
    p('grossesse', '400–600 UI/j si apport insuffisant', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Ergométrine
  ergometrine: [
    p(
      'grossesse',
      '0,2 mg IM ou IV lente, à répéter après 15 min si besoin (maximum 1 mg ; puis 0,2 mg toutes les 4 h)',
      {
        ind: 'Hémorragie du post-partum (2e intention après l’ocytocine)',
        voie: 'IM ou IV lente',
        f: 'schema',
        sec: 'autorise',
        rem: 'Uniquement après l’expulsion du placenta (ou du dernier enfant). Contre-indiquée si HTA, pré-éclampsie, cardiopathie.',
      },
    ),
    p('adulte', '0,2 mg IM après un avortement incomplet ou un curetage si saignement', {
      ind: 'Hémorragie après avortement',
      voie: 'IM',
      f: 'unique',
    }),
  ],

  // ------------------------------------------------------------ Facteur IX
  'facteur-ix': [
    p(
      'adulte',
      'Dose (UI) = poids (kg) × élévation souhaitée (%) × 1 ; hémorragie grave : 80–100 UI/kg puis selon les taux',
      {
        ind: 'Hémophilie B : hémorragies, chirurgie, prophylaxie',
        voie: 'IV lente',
        kg: 50,
        unite: 'UI',
        f: 'schema',
        rem: 'Hémarthrose : 40–60 UI/kg (objectif 40–60 %). Avis du centre de traitement de l’hémophilie.',
      },
    ),
    p('enfant', 'Même calcul ; hémarthrose : 40–60 UI/kg, à répéter toutes les 24 h selon l’évolution', {
      ind: 'Hémophilie B',
      voie: 'IV lente',
      kg: 50,
      unite: 'UI',
      f: 'schema',
    }),
  ],

  // ------------------------------------------------------------ Facteur VIII
  'facteur-viii': [
    p(
      'adulte',
      'Dose (UI) = poids (kg) × élévation souhaitée (%) × 0,5 ; hémarthrose : 20–30 UI/kg ; hémorragie grave : 50 UI/kg puis toutes les 8 à 12 h',
      {
        ind: 'Hémophilie A : hémorragies, chirurgie, prophylaxie',
        voie: 'IV lente',
        kg: 25,
        unite: 'UI',
        f: 'schema',
        rem: 'Rechercher un inhibiteur si réponse insuffisante. Avis du centre de traitement de l’hémophilie.',
      },
    ),
    p('enfant', 'Même calcul ; prophylaxie : 25–40 UI/kg 3 fois par semaine', {
      ind: 'Hémophilie A',
      voie: 'IV lente',
      kg: 25,
      unite: 'UI',
      f: 'schema',
    }),
  ],

  // ------------------------------------------------------------ Fentanyl
  fentanyl: [
    p(
      'adulte',
      'Analgésie : 1–2 µg/kg IV ; anesthésie : 2–5 µg/kg ; patch 12–25 µg/h tous les 3 jours (douleur chronique stable sous opioïdes)',
      {
        ind: 'Analgésie peropératoire et en réanimation, douleur cancéreuse',
        voie: 'IV, transdermique',
        kg: 1,
        unite: 'µg',
        f: 'schema',
        rem: 'Dépression respiratoire : surveillance, naloxone disponible. Patch jamais chez le patient naïf d’opioïdes.',
      },
    ),
    p('enfant', '1–2 µg/kg IV ; intranasal 1,5 µg/kg (maximum 100 µg)', {
      ind: 'Douleur aiguë sévère, sédation-analgésie',
      voie: 'IV ou intranasale',
      kg: 1.5,
      max: 100,
      unite: 'µg',
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Usage ponctuel (analgésie du travail, césarienne) ; dépression respiratoire néonatale', {
      sec: 'prudence',
    }),
  ],

  // ------------------------------------------------------------ Fer dextran
  'fer-dextran': [
    p(
      'adulte',
      'Dose totale selon la formule de Ganzoni : poids (kg) × (Hb cible − Hb) (g/dL) × 2,4 + 500 mg, en perfusion après une dose test',
      {
        ind: 'Carence martiale sévère avec intolérance ou échec du fer oral, 3e trimestre de grossesse',
        voie: 'IV (perfusion)',
        f: 'schema',
        rem: 'Dose test de 25 mg ; réactions anaphylactiques : réanimation disponible. Préférer les fers IV récents si disponibles.',
      },
    ),
    p('grossesse', 'Après le 1er trimestre si anémie sévère et fer oral impossible', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Flumazénil
  flumazenil: [
    p('adulte', '0,2 mg IV en 15 s, puis 0,1 mg toutes les minutes (maximum 1 mg)', {
      ind: 'Réversion d’une sédation aux benzodiazépines (geste médical)',
      voie: 'IV',
      f: 'schema',
      rem: 'Pas dans les intoxications mixtes (tricycliques) ni chez l’épileptique ou le dépendant : convulsions. Durée d’action courte.',
    }),
    p('enfant', '0,01 mg/kg IV (maximum 0,2 mg), à répéter (maximum 0,05 mg/kg ou 1 mg)', {
      ind: 'Réversion d’une sédation aux benzodiazépines',
      voie: 'IV',
      kg: 0.01,
      max: 0.2,
      f: 'schema',
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Fluphénazine
  fluphenazine: [
    p('adulte', 'Décanoate : 12,5 mg IM (dose test), puis 12,5–50 mg toutes les 2 à 4 semaines', {
      ind: 'Schizophrénie (traitement d’entretien, observance difficile)',
      voie: 'IM profonde',
      f: 'schema',
      rem: 'Effets extrapyramidaux fréquents ; bipéridène si besoin.',
    }),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Griséofulvine
  griseofulvine: [
    p('enfant', '20–25 mg/kg/j en 1 à 2 prises au cours d’un repas gras (maximum 1 g/j)', {
      ind: 'Teignes du cuir chevelu',
      voie: 'Orale',
      kg: 20,
      max: 1000,
      base: 'par_jour',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      durees: [[6, 8, 'semaines']],
    }),
    p('adulte', '500 mg–1 g/j en 1 à 2 prises', {
      ind: 'Teignes, dermatophyties étendues',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      durees: [[6, 8, 'semaines']],
      rem: 'Photosensibilisation, effet antabuse ; inducteur enzymatique (pilule moins efficace).',
    }),
    p('grossesse', 'Contre-indiquée ; contraception pendant et 1 mois après (homme : 6 mois)', {
      sec: 'contre_indique',
    }),
  ],

  // ------------------------------------------------------------ Hydroxocobalamine
  hydroxocobalamine: [
    p('adulte', '5 g IV en 15 min, à renouveler une fois (maximum 10 g)', {
      ind: 'Intoxication aux cyanures (fumées d’incendie)',
      voie: 'IV',
      unite: 'g',
      f: 'schema',
      rem: 'Coloration rouge de la peau et des urines.',
    }),
    p('adulte', '1 mg IM tous les 2 à 3 jours (5 injections), puis tous les 3 mois', {
      ind: 'Carence en vitamine B12',
      voie: 'IM',
      f: 'schema',
    }),
    p('enfant', '70 mg/kg IV (maximum 5 g)', {
      ind: 'Intoxication aux cyanures',
      voie: 'IV',
      kg: 70,
      max: 5000,
      f: 'unique',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Immunoglobulines anti-HBs
  'immunoglobulines-anti-hbs': [
    p(
      'nouveau_ne',
      '100–200 UI IM dans les 12 h après la naissance, en même temps que la 1re dose de vaccin (site différent)',
      {
        ind: 'Nouveau-né de mère AgHBs positive',
        voie: 'IM',
        unite: 'UI',
        f: 'unique',
      },
    ),
    p('adulte', '500 UI IM (ou 0,06 mL/kg) dans les 72 h, avec la vaccination', {
      ind: 'Exposition au sang (non vacciné ou non répondeur), contact sexuel avec un porteur',
      voie: 'IM',
      unite: 'UI',
      f: 'unique',
    }),
    p('grossesse', 'Utilisable après exposition', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Immunoglobulines antirabiques
  'immunoglobulines-antirabiques': [
    p(
      'adulte',
      'Humaines : 20 UI/kg ; équines : 40 UI/kg — infiltrer le maximum dans et autour des plaies, le reste en IM à distance du vaccin',
      {
        ind: 'Exposition de catégorie III à la rage (avec vaccin)',
        voie: 'Infiltration de la plaie',
        kg: 20,
        unite: 'UI',
        f: 'unique',
        rem: 'Au plus tard 7 jours après la 1re dose de vaccin. Inutile si déjà vacciné.',
      },
    ),
    p('enfant', 'Même dose par kg que l’adulte', {
      ind: 'Exposition de catégorie III',
      voie: 'Infiltration de la plaie',
      kg: 20,
      unite: 'UI',
      f: 'unique',
    }),
    p('grossesse', 'Aucune contre-indication', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Indométacine
  indometacine: [
    p('adulte', '25–50 mg 2 à 3 fois par jour (maximum 150 mg/j)', {
      ind: 'Crise de goutte, rhumatismes inflammatoires, péricardite',
      voie: 'Orale, au repas',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      durees: [[3, 7, 'jours']],
    }),
    p('nouveau_ne', '0,2 mg/kg IV, puis 0,1–0,25 mg/kg toutes les 12 à 24 h (3 doses)', {
      ind: 'Fermeture du canal artériel du prématuré (avis spécialisé)',
      voie: 'IV',
      kg: 0.2,
      f: 'schema',
      sec: 'prudence',
    }),
    p(
      'grossesse',
      'Contre-indiquée à partir de 20 SA sauf tocolyse spécialisée de courte durée avant 32 SA',
      {
        sec: 'contre_indique',
      },
    ),
  ],

  // ------------------------------------------------------------ Lithium
  lithium: [
    p(
      'adulte',
      '400–800 mg/j de carbonate, puis adapter pour une lithiémie de 0,5–0,8 mmol/L (12 h après la prise)',
      {
        ind: 'Trouble bipolaire (prévention des rechutes, manie)',
        voie: 'Orale',
        freq: '1 à 2 fois par jour',
        f: { n: 1 },
        rem: 'Bilan rénal, thyroïdien et ECG avant ; lithiémie à J5 puis régulièrement. Interactions (AINS, IEC, diurétiques). Déshydratation : intoxication.',
      },
    ),
    p('grossesse', 'À éviter au 1er trimestre (malformations cardiaques) ; décision spécialisée', {
      sec: 'contre_indique',
    }),
  ],

  // ------------------------------------------------------------ Mémantine
  memantine: [
    p('adulte', '5 mg/j, augmenter de 5 mg par semaine jusqu’à 20 mg/j', {
      ind: 'Maladie d’Alzheimer modérée à sévère',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Insuffisance rénale sévère : 10 mg/j.',
    }),
    p('grossesse', 'Sans objet', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Mifépristone
  mifepristone: [
    p('adulte', '200 mg per os, puis misoprostol 24 à 48 h plus tard', {
      ind: 'Interruption médicamenteuse de grossesse (selon la loi et le protocole national), mort fœtale in utero',
      voie: 'Orale',
      f: 'unique',
      rem: 'Misoprostol : 800 µg sublingual ou vaginal avant 12 SA. Cadre légal de la RDC (protocole de Maputo) à respecter.',
    }),
    p('grossesse', 'Utilisée pour l’interruption de grossesse ou la mort fœtale', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Modafinil
  modafinil: [
    p('adulte', '200 mg/j le matin (ou 100 mg le matin et 100 mg à midi), maximum 400 mg/j', {
      ind: 'Narcolepsie',
      voie: 'Orale',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      rem: 'Éruptions graves, troubles psychiatriques ; diminue l’efficacité de la pilule. Prescription spécialisée.',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Natamycine
  natamycine: [
    p(
      'adulte',
      'Collyre à 5 % : 1 goutte toutes les heures (ou toutes les 2 h) pendant 3 à 4 jours, puis 6 à 8 fois par jour',
      {
        ind: 'Kératite fongique (Fusarium, Aspergillus)',
        voie: 'Ophtalmique',
        unite: 'goutte',
        f: 'schema',
        durees: [[14, 21, 'jours']],
        rem: 'Avis ophtalmologique urgent. Pas de corticoïde local.',
      },
    ),
    p('enfant', 'Même schéma que l’adulte', {
      ind: 'Kératite fongique',
      voie: 'Ophtalmique',
      unite: 'goutte',
      f: 'schema',
      durees: [[14, 21, 'jours']],
    }),
    p('grossesse', 'Utilisable (non absorbée)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Norfloxacine
  norfloxacine: [
    p('adulte', '400 mg 2 fois par jour', {
      ind: 'Infections urinaires basses, prostatite',
      voie: 'Orale, à jeun',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[3, 7, 'jours']],
      rem: 'Cirrhose : 400 mg/j en prophylaxie de l’infection du liquide d’ascite.',
    }),
    p('enfant', 'Déconseillée (préférer d’autres antibiotiques)', {
      ind: 'Infections urinaires',
      voie: 'Orale',
      sec: 'contre_indique',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Paromomycine
  paromomycine: [
    p('adulte', '15 mg/kg/j IM (sulfate) pendant 17 jours, avec stibogluconate de sodium', {
      ind: 'Leishmaniose viscérale (Afrique de l’Est, selon le protocole)',
      voie: 'IM',
      kg: 15,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[17, null, 'jours']],
      rem: 'Ototoxicité, néphrotoxicité.',
    }),
    p('adulte', '25–35 mg/kg/j per os en 3 prises', {
      ind: 'Amibiase intestinale (portage kystique), cryptosporidiose',
      voie: 'Orale',
      kg: 30,
      base: 'par_jour',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[7, 10, 'jours']],
    }),
    p('enfant', '25–35 mg/kg/j per os en 3 prises', {
      ind: 'Amibiase intestinale',
      voie: 'Orale',
      kg: 30,
      base: 'par_jour',
      freq: '3 fois par jour',
      f: { n: 3 },
      durees: [[7, null, 'jours']],
    }),
    p('grossesse', 'Voie orale utilisable (peu absorbée)', { sec: 'prudence' }),
  ],
};
