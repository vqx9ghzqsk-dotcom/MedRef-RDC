'use strict';

/**
 * Posologies — lot 10 : molécules suivantes les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, PEV, rage), MSF Guide clinique et
 * thérapeutique et Médicaments essentiels, notices. Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Peroxyde de benzoyle
  'peroxyde-de-benzoyle': [
    p('adulte', 'Gel à 2,5–5 % : 1 application par jour le soir, puis 1 à 2 par jour', {
      ind: 'Acné inflammatoire légère à modérée (seul ou avec un rétinoïde ou un antibiotique local)',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 à 2 fois par jour',
      f: { n: 1 },
      durees: [[8, 12, 'semaines']],
      rem: 'Irritation, décoloration des textiles. Débuter tous les 2 jours si peau sensible.',
    }),
    p('enfant', 'Adolescent : même utilisation que l’adulte', {
      ind: 'Acné',
      voie: 'Cutanée',
      unite: 'application',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[8, 12, 'semaines']],
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Polystyrène sulfonate de sodium
  'polystyrene-sulfonate-de-sodium': [
    p('adulte', '15 g 1 à 4 fois par jour per os ; lavement de 30 g', {
      ind: 'Hyperkaliémie (après traitement d’urgence), insuffisance rénale chronique',
      voie: 'Orale ou rectale',
      unite: 'g',
      freq: '1 à 4 fois par jour',
      f: { n: 3 },
      rem: 'Action lente (heures) : pas un traitement d’urgence isolé. Constipation, risque de nécrose colique (éviter le sorbitol).',
    }),
    p('enfant', '0,5–1 g/kg/j en 2 à 4 prises (maximum 60 g/j)', {
      ind: 'Hyperkaliémie',
      voie: 'Orale ou rectale',
      kg: 1,
      max: 60,
      base: 'par_jour',
      unite: 'g',
      freq: '2 à 4 fois par jour',
      f: { n: 3 },
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Pralidoxime
  pralidoxime: [
    p('adulte', '30 mg/kg IV en 20 min, puis 8 mg/kg/h en perfusion continue', {
      ind: 'Intoxication aux organophosphorés (avec l’atropine, en priorité)',
      voie: 'IV',
      kg: 30,
      max: 2000,
      f: 'perfusion',
      rem: 'L’atropine reste le traitement essentiel. Bénéfice discuté selon le toxique.',
    }),
    p('enfant', '25–50 mg/kg IV en 20 min, puis 10–20 mg/kg/h', {
      ind: 'Intoxication aux organophosphorés',
      voie: 'IV',
      kg: 30,
      max: 2000,
      f: 'perfusion',
    }),
    p('grossesse', 'Utilisable en urgence', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Progestérone
  progesterone: [
    p('grossesse', '200 mg/j par voie vaginale de 16–24 SA à 36 SA', {
      ind: 'Prévention de l’accouchement prématuré (col court ou antécédent)',
      voie: 'Vaginale',
      freq: '1 fois par jour, le soir',
      f: { n: 1 },
      sec: 'autorise',
    }),
    p('adulte', '200 mg/j du 16e au 25e jour du cycle (ou 100–200 mg en continu avec l’estrogène)', {
      ind: 'Insuffisance lutéale, traitement hormonal de la ménopause, soutien de phase lutéale (AMP)',
      voie: 'Orale ou vaginale',
      freq: '1 fois par jour, au coucher',
      f: { n: 1 },
      durees: [[10, null, 'jours', 'Par cycle']],
    }),
  ],

  // ------------------------------------------------------------ Propofol
  propofol: [
    p('adulte', 'Induction : 1,5–2,5 mg/kg IV ; entretien : 4–12 mg/kg/h ; sédation : 0,5–4 mg/kg/h', {
      ind: 'Anesthésie générale, sédation en réanimation',
      voie: 'IV',
      kg: 2,
      f: 'schema',
      rem: 'Personnel formé, ventilation disponible. Hypotension, apnée. Sujet âgé : réduire. Syndrome de perfusion du propofol si fortes doses prolongées.',
    }),
    p('enfant', '≥ 1 mois : induction 2,5–4 mg/kg IV', {
      ind: 'Anesthésie générale (anesthésiste)',
      voie: 'IV',
      kg: 3,
      f: 'schema',
      sec: 'prudence',
      rem: 'Pas de sédation prolongée en réanimation pédiatrique.',
    }),
    p('grossesse', 'Utilisable (césarienne sous anesthésie générale)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Propylthiouracile
  propylthiouracile: [
    p('adulte', '100–150 mg 3 fois par jour, puis réduire à 50–150 mg/j', {
      ind: 'Hyperthyroïdie (1er trimestre de grossesse, crise thyréotoxique)',
      voie: 'Orale',
      freq: '3 fois par jour',
      f: { n: 3 },
      rem: 'Hépatotoxicité grave : réserver au 1er trimestre de la grossesse et à la crise aiguë (200–250 mg toutes les 4 h). Agranulocytose.',
    }),
    p('grossesse', '50–150 mg/j en 2 à 3 prises au 1er trimestre, puis relais par le carbimazole', {
      ind: 'Hyperthyroïdie pendant la grossesse',
      sec: 'autorise',
    }),
    p('enfant', 'Déconseillé (hépatotoxicité) : préférer le carbimazole', {
      ind: 'Hyperthyroïdie',
      voie: 'Orale',
      sec: 'contre_indique',
    }),
  ],

  // ------------------------------------------------------------ Quétiapine
  quetiapine: [
    p(
      'adulte',
      'Schizophrénie : 50 mg J1, 100 mg J2, 200 mg J3, 300 mg J4, puis 300–750 mg/j ; dépression bipolaire : 50 → 300 mg le soir',
      {
        ind: 'Schizophrénie, trouble bipolaire',
        voie: 'Orale',
        freq: '1 à 2 fois par jour',
        f: { n: 2 },
        rem: 'Sédation, hypotension orthostatique, prise de poids. Sujet âgé : débuter à 25 mg.',
      },
    ),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Rocuronium
  rocuronium: [
    p('adulte', 'Intubation : 0,6 mg/kg IV (séquence rapide : 1–1,2 mg/kg) ; entretien : 0,15 mg/kg', {
      ind: 'Curarisation pour intubation et chirurgie',
      voie: 'IV',
      kg: 0.6,
      f: 'schema',
      rem: 'Anesthésiste uniquement ; ventilation obligatoire. Antagonisation : néostigmine ou sugammadex.',
    }),
    p('enfant', '0,6 mg/kg IV', {
      ind: 'Curarisation (anesthésiste)',
      voie: 'IV',
      kg: 0.6,
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable (césarienne)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Secnidazole
  secnidazole: [
    p('adulte', '2 g en dose unique, au début d’un repas', {
      ind: 'Trichomonase, vaginose bactérienne, amibiase intestinale, giardiase',
      voie: 'Orale',
      f: 'unique',
      rem: 'Pas d’alcool pendant 48 h. Traiter le partenaire (trichomonase).',
    }),
    p('enfant', '30 mg/kg en dose unique (maximum 2 g)', {
      ind: 'Amibiase intestinale, giardiase',
      voie: 'Orale',
      kg: 30,
      max: 2000,
      f: 'unique',
    }),
    p('grossesse', 'À éviter au 1er trimestre', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Streptokinase
  streptokinase: [
    p('adulte', '1,5 million UI IV en 30 à 60 min', {
      ind: 'Infarctus du myocarde avec sus-décalage du ST (dans les 12 h, si pas d’angioplastie possible)',
      voie: 'IV',
      unite: 'UI',
      f: 'unique',
      rem: 'Contre-indications hémorragiques à vérifier. Ne pas réadministrer après 5 jours (anticorps). Hypotension : ralentir la perfusion.',
    }),
    p('grossesse', 'Contre-indication relative (hémorragie)', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Tamsulosine
  tamsulosine: [
    p('adulte', '0,4 mg/j après le petit-déjeuner', {
      ind: 'Hypertrophie bénigne de la prostate ; expulsion d’un calcul urétéral distal',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[4, null, 'semaines', 'Calcul urétéral']],
      rem: 'Hypotension orthostatique ; prévenir l’ophtalmologiste avant une chirurgie de la cataracte.',
    }),
    p('grossesse', 'Sans objet', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Terbinafine
  terbinafine: [
    p('adulte', '250 mg/j per os', {
      ind: 'Onychomycoses, dermatophyties étendues, teigne',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [
        [6, null, 'semaines', 'Ongles des mains', true],
        [12, null, 'semaines', 'Ongles des pieds'],
        [2, 4, 'semaines', 'Peau'],
      ],
      rem: 'Bilan hépatique avant traitement. Crème à 1 % : 1 à 2 fois par jour pendant 1 à 2 semaines (dermatophyties localisées).',
    }),
    p('enfant', '< 20 kg : 62,5 mg/j ; 20–40 kg : 125 mg/j ; > 40 kg : 250 mg/j', {
      ind: 'Teigne à Trichophyton',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[4, null, 'semaines']],
    }),
    p('grossesse', 'Voie orale à éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Tétrabénazine
  tetrabenazine: [
    p(
      'adulte',
      '12,5 mg/j, augmenter de 12,5 mg tous les 3 à 5 jours (habituellement 25–100 mg/j en 2 à 3 prises)',
      {
        ind: 'Chorée (maladie de Huntington), dyskinésies tardives, hémiballisme',
        voie: 'Orale',
        freq: '2 à 3 fois par jour',
        f: { n: 3 },
        rem: 'Dépression et risque suicidaire, parkinsonisme. Prescription spécialisée.',
      },
    ),
    p('enfant', 'Avis spécialisé (doses réduites, augmentation lente)', {
      ind: 'Mouvements anormaux hyperkinétiques',
      voie: 'Orale',
      f: { n: 2 },
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Timolol (collyre)
  'timolol-collyre': [
    p('adulte', 'Collyre à 0,25–0,5 % : 1 goutte 2 fois par jour (gel : 1 fois par jour)', {
      ind: 'Glaucome chronique à angle ouvert, hypertonie oculaire, glaucome aigu (en association)',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: '2 fois par jour',
      f: { n: 2 },
      rem: 'Effets systémiques : bradycardie, bronchospasme (contre-indiqué si asthme). Comprimer le point lacrymal.',
    }),
    p('enfant', 'Collyre à 0,25 % : 1 goutte 2 fois par jour (avis spécialisé)', {
      ind: 'Glaucome congénital ; hémangiome infantile superficiel (gel à 0,5 %, application locale)',
      voie: 'Ophtalmique ou cutanée',
      unite: 'goutte',
      freq: '2 fois par jour',
      f: { n: 2 },
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable avec prudence', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Tobramycine (ophtalmique)
  'tobramycine-ophtalmique': [
    p(
      'adulte',
      'Collyre à 0,3 % : 1 à 2 gouttes toutes les 4 h (formes graves : toutes les heures au début)',
      {
        ind: 'Conjonctivite bactérienne, kératite bactérienne',
        voie: 'Ophtalmique',
        unite: 'goutte',
        freq: 'Toutes les 4 h',
        f: { h: 4 },
        durees: [[7, null, 'jours']],
      },
    ),
    p('enfant', '1 goutte toutes les 4 h', {
      ind: 'Conjonctivite bactérienne',
      voie: 'Ophtalmique',
      unite: 'goutte',
      freq: 'Toutes les 4 h',
      f: { h: 4 },
      durees: [[7, null, 'jours']],
    }),
    p('grossesse', 'Utilisable (voie locale)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Tropicamide (collyre)
  'tropicamide-collyre': [
    p('adulte', 'Collyre à 0,5–1 % : 1 goutte, à répéter après 5 min ; examen après 15 à 20 min', {
      ind: 'Dilatation pupillaire pour l’examen du fond d’œil',
      voie: 'Ophtalmique',
      unite: 'goutte',
      f: 'schema',
      rem: 'Effet de 4 à 6 h : pas de conduite. Risque de glaucome aigu si angle étroit.',
    }),
    p('enfant', 'Collyre à 0,5 % : 1 goutte (avec phényléphrine 2,5 % si besoin)', {
      ind: 'Fond d’œil, dépistage de la rétinopathie du prématuré',
      voie: 'Ophtalmique',
      unite: 'goutte',
      f: 'schema',
    }),
    p('grossesse', 'Usage ponctuel possible', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Vaccin antirabique
  'vaccin-antirabique': [
    p(
      'adulte',
      'Prophylaxie post-exposition : 1 dose IM à J0, J3, J7 et J14–28 (Essen modifié) ; ou intradermique 0,1 mL en 2 sites à J0, J3, J7 (schéma OMS d’une semaine)',
      {
        ind: 'Morsure ou exposition à un animal suspect de rage (catégories II et III)',
        voie: 'IM (deltoïde) ou intradermique',
        f: 'schema',
        rem: 'Lavage abondant de la plaie 15 min. Catégorie III : immunoglobulines antirabiques dans et autour de la plaie. Déjà vacciné : 1 dose à J0 et J3.',
      },
    ),
    p('enfant', 'Même schéma que l’adulte (dose identique, quel que soit l’âge)', {
      ind: 'Prophylaxie post-exposition',
      voie: 'IM (cuisse chez le petit enfant) ou intradermique',
      f: 'schema',
    }),
    p('grossesse', 'Aucune contre-indication en post-exposition', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Vaccin BCG
  'vaccin-bcg': [
    p('nouveau_ne', '0,05 mL intradermique (bras gauche) à la naissance', {
      ind: 'Prévention des formes graves de tuberculose de l’enfant (PEV)',
      voie: 'Intradermique',
      unite: 'mL',
      f: 'unique',
      rem: 'Nourrisson de mère traitée pour tuberculose : d’abord isoniazide préventif. VIH symptomatique : contre-indiqué.',
    }),
    p('enfant', '< 1 an : 0,05 mL ID ; ≥ 1 an : 0,1 mL ID (rattrapage selon le programme)', {
      ind: 'Rattrapage',
      voie: 'Intradermique',
      unite: 'mL',
      f: 'unique',
    }),
    p('grossesse', 'Contre-indiqué (vaccin vivant)', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Vaccin Haemophilus influenzae b
  'vaccin-haemophilus-influenzae-b': [
    p('enfant', '0,5 mL IM à 6, 10 et 14 semaines (inclus dans le pentavalent)', {
      ind: 'Prévention des méningites et pneumonies à Hib',
      voie: 'IM',
      unite: 'mL',
      f: 'schema',
      rem: 'Rattrapage : 1 dose unique après 12 mois. Asplénie, drépanocytose : vérifier le statut.',
    }),
    p('adulte', '0,5 mL IM en dose unique', {
      ind: 'Asplénie, drépanocytose non vaccinée',
      voie: 'IM',
      unite: 'mL',
      f: 'unique',
    }),
  ],

  // ------------------------------------------------------------ Vaccin typhoïdique conjugué
  'vaccin-typhoidique-conjugue-vi-tt': [
    p('enfant', '0,5 mL IM en dose unique à partir de 6 mois (habituellement à 9 mois avec le RR)', {
      ind: 'Prévention de la fièvre typhoïde (pays d’endémie, campagnes)',
      voie: 'IM',
      unite: 'mL',
      f: 'unique',
    }),
    p('adulte', '0,5 mL IM en dose unique (jusqu’à 45 ans selon les spécialités)', {
      ind: 'Rattrapage, zones d’endémie et d’épidémie',
      voie: 'IM',
      unite: 'mL',
      f: 'unique',
    }),
    p('grossesse', 'Données limitées ; si risque élevé', { sec: 'prudence' }),
  ],
};
