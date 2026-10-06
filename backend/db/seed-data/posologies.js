'use strict';

/**
 * Posologies structurées par molécule et par population.
 *   r(population, dose lisible, options)
 *   population : 'adulte' | 'enfant' | 'nouveau_ne' | 'grossesse'
 *   options    : ind (indication), voie, kg (dose PAR PRISE et par kg), max (plafond par prise),
 *                unite ('mg' par défaut ; 'UI', 'mL', 'g', 'kcal', 'µg'), freq, duree,
 *                sec ('autorise' | 'prudence' | 'contre_indique', surtout pour la grossesse), rem
 *
 * Le calcul automatique (poids × kg, plafonné à max) n'est proposé que si `kg` est renseigné.
 * ⚠️ Toujours vérifier avec la notice du produit et le protocole national.
 */

const r = (population, dose_texte, o = {}) => ({
  population,
  dose_texte,
  indication: o.ind ?? null,
  voie: o.voie ?? null,
  dose_par_kg: o.kg ?? null,
  dose_max: o.max ?? null,
  unite: o.unite ?? 'mg',
  frequence: o.freq ?? null,
  duree: o.duree ?? null,
  securite: o.sec ?? null,
  remarque: o.rem ?? null,
});

const PALU_GRAVE = 'Paludisme grave';
const FREQ_ARTESUNATE = 'H0, H12, H24 puis toutes les 24 h';

module.exports = {
  // ------------------------------------------------------------ Antipaludiques
  artesunate: [
    r('adulte', '2,4 mg/kg', {
      ind: PALU_GRAVE,
      voie: 'IV ou IM',
      kg: 2.4,
      freq: FREQ_ARTESUNATE,
      duree: 'Au moins 24 h, puis CTA de 3 jours',
    }),
    r('enfant', '3 mg/kg si < 20 kg ; 2,4 mg/kg au-delà', {
      ind: PALU_GRAVE,
      voie: 'IV ou IM',
      kg: 3,
      freq: FREQ_ARTESUNATE,
      duree: 'Au moins 24 h, puis CTA de 3 jours',
      rem: 'Le calcul utilise 3 mg/kg (enfant < 20 kg) ; au-delà de 20 kg, utiliser 2,4 mg/kg.',
    }),
    r('enfant', '10 mg/kg en dose unique', {
      ind: 'Pré-transfert (enfant < 6 ans)',
      voie: 'Rectale',
      kg: 10,
      freq: 'Dose unique',
      rem: 'Transférer immédiatement après l’administration.',
    }),
    r('grossesse', 'Même posologie que l’adulte', {
      ind: PALU_GRAVE,
      voie: 'IV ou IM',
      sec: 'autorise',
      rem: 'Recommandé à tous les trimestres (OMS).',
    }),
  ],
  artemether: [
    r('adulte', '3,2 mg/kg (dose de charge)', {
      ind: `${PALU_GRAVE} (si artésunate indisponible)`,
      voie: 'IM',
      kg: 3.2,
      freq: 'H0',
    }),
    r('adulte', '1,6 mg/kg', {
      ind: `${PALU_GRAVE} — entretien`,
      voie: 'IM',
      kg: 1.6,
      freq: 'Toutes les 24 h',
      duree: 'Jusqu’à reprise de la voie orale',
    }),
    r('adulte', '4 comprimés de 20/120 mg par prise (≥ 35 kg)', {
      ind: 'Paludisme simple (artéméther-luméfantrine)',
      voie: 'Orale',
      freq: 'H0, H8, H24, H36, H48, H60',
      duree: '3 jours',
      rem: 'Avec un aliment gras ou du lait.',
    }),
    r('enfant', '3,2 mg/kg (charge) puis 1,6 mg/kg/24 h', {
      ind: `${PALU_GRAVE} (si artésunate indisponible)`,
      voie: 'IM',
      kg: 3.2,
      freq: 'Charge à H0',
    }),
    r('enfant', '5–14 kg : 1 cp ; 15–24 kg : 2 cp ; 25–34 kg : 3 cp par prise', {
      ind: 'Paludisme simple (artéméther-luméfantrine 20/120 mg)',
      voie: 'Orale',
      freq: 'H0, H8, H24, H36, H48, H60',
      duree: '3 jours',
    }),
    r('grossesse', 'Posologie adulte', {
      ind: 'Paludisme simple (artéméther-luméfantrine)',
      sec: 'autorise',
      rem: 'Utilisable à tous les trimestres (OMS, mise à jour 2022).',
    }),
  ],
  lumefantrine: [
    r('adulte', '480 mg par prise (4 comprimés de 20/120 mg)', {
      ind: 'Paludisme simple, en association',
      voie: 'Orale',
      freq: '6 prises en 3 jours',
      rem: 'Absorption dépendante d’un repas gras.',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise', rem: 'Voir artéméther.' }),
  ],
  quinine: [
    r('adulte', '20 mg de sel/kg en perfusion de 4 h (dose de charge)', {
      ind: `${PALU_GRAVE} (si artésunate indisponible)`,
      voie: 'Perfusion IV dans du glucosé',
      kg: 20,
      freq: 'Dose de charge',
      rem: 'Pas de dose de charge si quinine ou méfloquine dans les 12–24 h.',
    }),
    r('adulte', '10 mg de sel/kg en perfusion de 4 h', {
      ind: `${PALU_GRAVE} — entretien`,
      voie: 'Perfusion IV',
      kg: 10,
      freq: 'Toutes les 8 h',
      duree: 'Jusqu’au relais oral par CTA',
    }),
    r('enfant', '20 mg/kg (charge) puis 10 mg/kg toutes les 8 h', {
      ind: PALU_GRAVE,
      voie: 'Perfusion IV',
      kg: 20,
      freq: 'Charge, puis toutes les 8 h',
      rem: 'Le calcul porte sur la dose de charge ; l’entretien est la moitié.',
    }),
    r('grossesse', 'Posologie adulte', {
      ind: PALU_GRAVE,
      sec: 'autorise',
      rem: 'Surveillance glycémique rapprochée (hypoglycémie).',
    }),
  ],
  amodiaquine: [
    r('enfant', '10 mg/kg/j d’amodiaquine base', {
      ind: 'Paludisme simple (artésunate-amodiaquine)',
      voie: 'Orale',
      kg: 10,
      freq: '1 fois par jour',
      duree: '3 jours',
      rem: 'Utiliser les comprimés à dose fixe selon les tranches de poids.',
    }),
    r('adulte', '2 comprimés de 100/270 mg par jour (≥ 36 kg)', {
      ind: 'Paludisme simple (ASAQ)',
      voie: 'Orale',
      freq: '1 fois par jour',
      duree: '3 jours',
    }),
    r('grossesse', 'Posologie adulte', {
      sec: 'prudence',
      rem: '2e et 3e trimestres ; 1er trimestre selon le protocole national (artéméther-luméfantrine préféré).',
    }),
  ],
  dihydroartemisinine: [
    r('adulte', '4 mg/kg/j', {
      ind: 'Paludisme simple (DHA-pipéraquine)',
      voie: 'Orale',
      kg: 4,
      freq: '1 fois par jour, à jeun',
      duree: '3 jours',
    }),
    r('enfant', '4 mg/kg/j (2,5 mg/kg/j si < 25 kg selon l’OMS)', {
      ind: 'Paludisme simple (DHA-pipéraquine)',
      voie: 'Orale',
      kg: 4,
      freq: '1 fois par jour, à jeun',
      duree: '3 jours',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'prudence', rem: 'Utilisable aux 2e et 3e trimestres.' }),
  ],
  piperaquine: [
    r('adulte', '18 mg/kg/j', {
      ind: 'Paludisme simple (DHA-pipéraquine)',
      voie: 'Orale',
      kg: 18,
      freq: '1 fois par jour, à jeun',
      duree: '3 jours',
    }),
    r('enfant', '20 mg/kg/j si < 25 kg', {
      ind: 'Paludisme simple (DHA-pipéraquine)',
      voie: 'Orale',
      kg: 20,
      freq: '1 fois par jour, à jeun',
      duree: '3 jours',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'prudence', rem: 'Utilisable aux 2e et 3e trimestres.' }),
  ],

  // ------------------------------------------------------------ Antibiotiques
  amoxicilline: [
    r('adulte', '1 g', { voie: 'Orale', freq: '3 fois par jour' }),
    r('enfant', '40 mg/kg par prise', {
      ind: 'Pneumonie (PCIME)',
      voie: 'Orale',
      kg: 40,
      freq: '2 fois par jour',
      duree: '5 jours (3 jours si respiration rapide seule selon protocole)',
    }),
    r('enfant', '25 à 50 mg/kg par prise (50–100 mg/kg/j)', {
      ind: 'Malnutrition aiguë sévère',
      voie: 'Orale',
      kg: 25,
      freq: '2 fois par jour',
      duree: '7 jours',
      rem: 'Le calcul utilise la dose basse (25 mg/kg).',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  ampicilline: [
    r('nouveau_ne', '50 mg/kg', {
      ind: 'Infection bactérienne grave',
      voie: 'IV ou IM',
      kg: 50,
      freq: 'Toutes les 12 h (1re semaine), puis toutes les 8 h',
    }),
    r('enfant', '50 mg/kg', {
      ind: 'Pneumonie grave, infection grave',
      voie: 'IV ou IM',
      kg: 50,
      max: 2000,
      freq: 'Toutes les 6 h',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  ceftriaxone: [
    r('adulte', '2 g', { ind: 'Méningite bactérienne', voie: 'IV', freq: 'Toutes les 12 h' }),
    r('adulte', '1 à 2 g', { ind: 'Autres infections graves', voie: 'IV ou IM', freq: '1 fois par jour' }),
    r('enfant', '50 mg/kg par injection (100 mg/kg/j)', {
      ind: 'Méningite bactérienne',
      voie: 'IV',
      kg: 50,
      max: 2000,
      freq: 'Toutes les 12 h',
    }),
    r('enfant', '50 à 80 mg/kg', {
      ind: 'Autres infections graves',
      voie: 'IV ou IM',
      kg: 50,
      max: 2000,
      freq: '1 fois par jour',
      rem: 'Le calcul utilise 50 mg/kg.',
    }),
    r('nouveau_ne', '50 mg/kg', {
      ind: 'Échec ou méningite (2e ligne)',
      voie: 'IV',
      kg: 50,
      freq: '1 fois par jour',
      rem: 'Contre-indiquée si ictère ou prématurité ; jamais avec du calcium IV.',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  cefazoline: [
    r('adulte', '2 g (3 g si ≥ 120 kg)', {
      ind: 'Antibioprophylaxie chirurgicale',
      voie: 'IV',
      freq: '30–60 min avant l’incision',
    }),
    r('enfant', '30 mg/kg', {
      ind: 'Antibioprophylaxie chirurgicale',
      voie: 'IV',
      kg: 30,
      max: 2000,
      freq: '30–60 min avant l’incision',
    }),
    r('grossesse', 'Posologie adulte', { ind: 'Césarienne', sec: 'autorise' }),
  ],
  gentamicine: [
    r('nouveau_ne', '5 mg/kg (3 mg/kg si petit poids, 1re semaine ; 7,5 mg/kg après la 1re semaine)', {
      ind: 'Infection bactérienne grave',
      voie: 'IV ou IM',
      kg: 5,
      freq: 'Toutes les 24 h',
    }),
    r('enfant', '5 à 7 mg/kg', {
      voie: 'IV ou IM',
      kg: 5,
      freq: '1 fois par jour',
      rem: 'Le calcul utilise 5 mg/kg.',
    }),
    r('adulte', '5 à 7 mg/kg', {
      voie: 'IV ou IM',
      kg: 5,
      freq: '1 fois par jour',
      duree: '≤ 5–7 jours',
      rem: 'Adapter à la fonction rénale.',
    }),
    r('grossesse', 'Éviter', {
      sec: 'prudence',
      rem: 'Ototoxicité fœtale : seulement si infection grave sans alternative.',
    }),
  ],
  metronidazole: [
    r('adulte', '500 mg', { voie: 'Orale ou IV', freq: 'Toutes les 8 h' }),
    r('enfant', '7,5 mg/kg', { voie: 'Orale ou IV', kg: 7.5, max: 500, freq: 'Toutes les 8 h' }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise', rem: 'Si nécessaire.' }),
  ],
  cotrimoxazole: [
    r('adulte', '960 mg (800/160)', { ind: 'Prophylaxie (VIH)', voie: 'Orale', freq: '1 fois par jour' }),
    r('enfant', '≈ 24 mg/kg de cotrimoxazole', {
      ind: 'Prophylaxie (VIH)',
      voie: 'Orale',
      kg: 24,
      max: 960,
      freq: '1 fois par jour',
      rem: 'Utiliser les tranches de poids du protocole national.',
    }),
    r('grossesse', 'Posologie adulte', {
      ind: 'Prophylaxie (VIH)',
      sec: 'autorise',
      rem: 'Poursuivre chez la femme enceinte vivant avec le VIH.',
    }),
  ],
  azithromycine: [
    r('adulte', '1 g en dose unique', { ind: 'Choléra', voie: 'Orale', freq: 'Dose unique' }),
    r('enfant', '20 mg/kg en dose unique', {
      ind: 'Choléra',
      voie: 'Orale',
      kg: 20,
      max: 1000,
      freq: 'Dose unique',
    }),
    r('grossesse', '1 g en dose unique', { ind: 'Choléra', sec: 'autorise' }),
  ],
  doxycycline: [
    r('adulte', '300 mg en dose unique', { ind: 'Choléra', voie: 'Orale', freq: 'Dose unique' }),
    r('adulte', '100 mg', { ind: 'Autres indications', voie: 'Orale', freq: '2 fois par jour' }),
    r('grossesse', 'Éviter en traitement prolongé', {
      sec: 'prudence',
      rem: 'Dose unique du choléra : selon les recommandations du GTFCC.',
    }),
  ],
  ciprofloxacine: [
    r('adulte', '1 g en dose unique', { ind: 'Choléra (alternative)', voie: 'Orale', freq: 'Dose unique' }),
    r('adulte', '500 mg', { ind: 'Shigellose', voie: 'Orale', freq: '2 fois par jour', duree: '3 jours' }),
    r('enfant', '15 mg/kg', {
      ind: 'Dysenterie / shigellose',
      voie: 'Orale',
      kg: 15,
      max: 500,
      freq: '2 fois par jour',
      duree: '3 jours',
    }),
    r('grossesse', 'Éviter', { sec: 'prudence', rem: 'Sauf absence d’alternative.' }),
  ],
  phenoxymethylpenicilline: [
    r('enfant', '< 3 ans : 125 mg ; 3–5 ans : 250 mg', {
      ind: 'Prophylaxie (drépanocytose)',
      voie: 'Orale',
      freq: '2 fois par jour',
      duree: 'Au moins jusqu’à 5 ans',
    }),
  ],

  // ------------------------------------------------------------ Antituberculeux
  rifampicine: [
    r('adulte', '10 mg/kg (8–12 mg/kg)', {
      ind: 'Tuberculose',
      voie: 'Orale, à jeun',
      kg: 10,
      max: 600,
      freq: '1 fois par jour',
      duree: '6 mois (2RHZE/4RH)',
    }),
    r('enfant', '15 mg/kg (10–20 mg/kg)', {
      ind: 'Tuberculose',
      voie: 'Orale',
      kg: 15,
      max: 600,
      freq: '1 fois par jour',
      rem: 'Utiliser les associations dispersibles selon le poids.',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  isoniazide: [
    r('adulte', '5 mg/kg (4–6 mg/kg)', {
      ind: 'Tuberculose',
      voie: 'Orale',
      kg: 5,
      max: 300,
      freq: '1 fois par jour',
    }),
    r('adulte', '300 mg', {
      ind: 'Traitement préventif (TPT)',
      voie: 'Orale',
      freq: '1 fois par jour',
      duree: '6 mois',
    }),
    r('enfant', '10 mg/kg', {
      ind: 'Tuberculose et TPT',
      voie: 'Orale',
      kg: 10,
      max: 300,
      freq: '1 fois par jour',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise', rem: 'Avec pyridoxine.' }),
  ],
  pyrazinamide: [
    r('adulte', '25 mg/kg (20–30 mg/kg)', {
      ind: 'Tuberculose — phase intensive',
      voie: 'Orale',
      kg: 25,
      freq: '1 fois par jour',
      duree: '2 mois',
    }),
    r('enfant', '35 mg/kg (30–40 mg/kg)', {
      ind: 'Tuberculose — phase intensive',
      voie: 'Orale',
      kg: 35,
      freq: '1 fois par jour',
      duree: '2 mois',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  ethambutol: [
    r('adulte', '15 mg/kg (15–20 mg/kg)', {
      ind: 'Tuberculose — phase intensive',
      voie: 'Orale',
      kg: 15,
      freq: '1 fois par jour',
      duree: '2 mois',
    }),
    r('enfant', '20 mg/kg (15–25 mg/kg)', {
      ind: 'Tuberculose — phase intensive',
      voie: 'Orale',
      kg: 20,
      freq: '1 fois par jour',
      duree: '2 mois',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Antirétroviraux / VHB
  'tenofovir-disoproxil': [
    r('adulte', '300 mg', {
      ind: 'VIH (TLD), hépatite B',
      voie: 'Orale',
      freq: '1 fois par jour',
      rem: 'Espacer ou éviter si clairance < 50 mL/min.',
    }),
    r('grossesse', '300 mg', {
      sec: 'autorise',
      rem: 'Recommandé (VIH, hépatite B, prévention de la transmission mère-enfant).',
    }),
  ],
  lamivudine: [
    r('adulte', '300 mg (ou 150 mg 2 fois par jour)', { ind: 'VIH', voie: 'Orale', freq: '1 fois par jour' }),
    r('enfant', '4 mg/kg', { ind: 'VIH', voie: 'Orale', kg: 4, max: 150, freq: '2 fois par jour' }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  dolutegravir: [
    r('adulte', '50 mg (50 mg 2 fois par jour avec la rifampicine)', {
      ind: 'VIH',
      voie: 'Orale',
      freq: '1 fois par jour',
    }),
    r(
      'enfant',
      '3–5,9 kg : 5 mg ; 6–9,9 kg : 15 mg ; 10–13,9 kg : 20 mg ; 14–19,9 kg : 25 mg ; ≥ 20 kg : 50 mg',
      { ind: 'VIH', voie: 'Orale (comprimés dispersibles)', freq: '1 fois par jour' },
    ),
    r('grossesse', '50 mg', {
      sec: 'autorise',
      rem: 'Recommandé pendant la grossesse (OMS 2019), avec acide folique.',
    }),
  ],
  abacavir: [
    r('enfant', '8 mg/kg (ou 16 mg/kg/j en 1 prise)', {
      ind: 'VIH',
      voie: 'Orale',
      kg: 8,
      max: 300,
      freq: '2 fois par jour',
      rem: 'Arrêt définitif en cas d’hypersensibilité.',
    }),
    r('adulte', '600 mg/j', { ind: 'VIH (si TDF contre-indiqué)', voie: 'Orale', freq: '1 fois par jour' }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  entecavir: [
    r('adulte', '0,5 mg (1 mg si cirrhose décompensée ou résistance à la lamivudine)', {
      ind: 'Hépatite B',
      voie: 'Orale, à jeun',
      freq: '1 fois par jour',
      rem: 'Adapter à la clairance.',
    }),
    r('grossesse', 'Non recommandé', { sec: 'prudence', rem: 'Préférer le ténofovir.' }),
  ],

  // ------------------------------------------------------------ Cardiovasculaire
  amlodipine: [
    r('adulte', '5 mg, jusqu’à 10 mg', { ind: 'HTA', voie: 'Orale', freq: '1 fois par jour' }),
    r('grossesse', 'Posologie adulte', { sec: 'prudence', rem: 'Données limitées mais rassurantes.' }),
  ],
  nifedipine: [
    r('adulte', 'LP 20–60 mg/j', {
      ind: 'HTA (traitement de fond)',
      voie: 'Orale',
      freq: '1–2 fois par jour',
    }),
    r('grossesse', '10 mg (libération immédiate, à avaler)', {
      ind: 'HTA sévère de la grossesse',
      voie: 'Orale',
      freq: 'Répéter après 20–30 min si PA ≥ 160/110',
      sec: 'autorise',
      rem: 'Jamais par voie sublinguale.',
    }),
  ],
  nicardipine: [
    r('adulte', '5 mg/h, + 2,5 mg/h toutes les 5–15 min (max 15 mg/h)', {
      ind: 'Urgence hypertensive, AVC',
      voie: 'IV continue',
      freq: 'Perfusion',
    }),
    r('grossesse', 'Posologie adulte', {
      ind: 'HTA sévère (alternative)',
      sec: 'autorise',
      rem: 'Milieu spécialisé.',
    }),
  ],
  methyldopa: [
    r('grossesse', '250 mg 2 à 3 fois par jour (max 3 g/j)', {
      ind: 'HTA de la grossesse',
      voie: 'Orale',
      freq: '2 à 3 fois par jour',
      sec: 'autorise',
      rem: 'Molécule de référence ; relais conseillé en post-partum.',
    }),
  ],
  hydralazine: [
    r('grossesse', '5 mg IV lente', {
      ind: 'HTA sévère de la grossesse',
      voie: 'IV',
      freq: 'Toutes les 20–30 min selon la PA (max 20–30 mg)',
      sec: 'autorise',
    }),
  ],
  enalapril: [
    r('adulte', '5–20 mg/j (max 40 mg)', { ind: 'HTA', voie: 'Orale', freq: '1–2 fois par jour' }),
    r('adulte', '2,5 mg, jusqu’à 10–20 mg', {
      ind: 'Insuffisance cardiaque',
      voie: 'Orale',
      freq: '2 fois par jour',
      rem: 'Augmenter toutes les 2 semaines.',
    }),
    r('grossesse', 'Contre-indiqué', { sec: 'contre_indique', rem: 'Fœtotoxique.' }),
  ],
  losartan: [
    r('adulte', '50 mg, jusqu’à 100 mg', { ind: 'HTA', voie: 'Orale', freq: '1 fois par jour' }),
    r('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],
  valsartan: [
    r('adulte', '80–160 mg (max 320 mg/j)', { ind: 'HTA', voie: 'Orale', freq: '1 fois par jour' }),
    r('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],
  sacubitril: [
    r('adulte', '49/51 mg, jusqu’à 97/103 mg (sacubitril-valsartan)', {
      ind: 'IC à FE réduite',
      voie: 'Orale',
      freq: '2 fois par jour',
      rem: 'Délai de 36 h après l’arrêt d’un IEC.',
    }),
    r('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],
  bisoprolol: [
    r('adulte', '1,25 mg, doublé toutes les 2 semaines jusqu’à 10 mg', {
      ind: 'Insuffisance cardiaque',
      voie: 'Orale',
      freq: '1 fois par jour',
    }),
    r('adulte', '5–10 mg', { ind: 'HTA', voie: 'Orale', freq: '1 fois par jour' }),
    r('grossesse', 'Posologie adulte si nécessaire', {
      sec: 'prudence',
      rem: 'Surveiller la croissance fœtale et le nouveau-né.',
    }),
  ],
  labetalol: [
    r('grossesse', '20 mg IV en 2 min, puis 40–80 mg toutes les 10 min (max 220–300 mg)', {
      ind: 'HTA sévère de la grossesse',
      voie: 'IV',
      sec: 'autorise',
      rem: 'Surveiller la glycémie et la FC du nouveau-né.',
    }),
    r('adulte', '100–400 mg', { ind: 'HTA (oral)', voie: 'Orale', freq: '2 à 3 fois par jour' }),
  ],
  furosemide: [
    r('adulte', '40–80 mg IV (ou 1 à 2,5 fois la dose orale habituelle)', {
      ind: 'OAP, congestion',
      voie: 'IV',
      freq: 'À répéter selon la diurèse',
    }),
    r('adulte', '20–80 mg/j', { ind: 'Entretien', voie: 'Orale', freq: '1–2 fois par jour' }),
    r('enfant', '0,5–1 mg/kg', {
      ind: 'Surcharge, OAP',
      voie: 'IV ou orale',
      kg: 1,
      max: 40,
      freq: 'Selon la réponse',
      rem: 'Le calcul utilise 1 mg/kg.',
    }),
    r('grossesse', 'Seulement en cas d’OAP', {
      sec: 'prudence',
      rem: 'Risque d’hypovolémie fœto-placentaire.',
    }),
  ],
  hydrochlorothiazide: [
    r('adulte', '12,5–25 mg', { ind: 'HTA', voie: 'Orale', freq: '1 fois par jour' }),
    r('grossesse', 'Ne pas débuter', { sec: 'prudence' }),
  ],
  spironolactone: [
    r('adulte', '25 mg (jusqu’à 50 mg)', {
      ind: 'Insuffisance cardiaque',
      voie: 'Orale',
      freq: '1 fois par jour',
    }),
    r('adulte', '100–400 mg/j', { ind: 'Ascite cirrhotique', voie: 'Orale' }),
    r('grossesse', 'Déconseillée', { sec: 'prudence' }),
  ],
  mannitol: [
    r('adulte', '0,25 à 1 g/kg en 15–20 min', {
      ind: 'Hypertension intracrânienne',
      voie: 'IV',
      kg: 0.25,
      unite: 'g',
      freq: 'À répéter selon l’osmolalité',
      rem: 'Le calcul utilise la dose basse (0,25 g/kg). Mannitol 20 % = 0,2 g/mL.',
    }),
    r('enfant', '0,25 à 1 g/kg en 15–20 min', {
      ind: 'Hypertension intracrânienne',
      voie: 'IV',
      kg: 0.25,
      unite: 'g',
      rem: 'Le calcul utilise la dose basse.',
    }),
  ],
  dapagliflozine: [
    r('adulte', '10 mg', { ind: 'IC, MRC, diabète de type 2', voie: 'Orale', freq: '1 fois par jour' }),
    r('grossesse', 'Déconseillée', { sec: 'prudence' }),
  ],
  'acide-acetylsalicylique': [
    r('adulte', '160–300 mg/j puis 75–100 mg/j', {
      ind: 'AVC ischémique (après scanner)',
      voie: 'Orale',
      freq: '1 fois par jour',
    }),
    r('grossesse', '75–150 mg le soir', {
      ind: 'Prévention de la pré-éclampsie (femme à risque)',
      voie: 'Orale',
      freq: '1 fois par jour',
      duree: 'De 12 à 36 SA',
      sec: 'autorise',
      rem: 'Doses antalgiques contre-indiquées après 24 SA.',
    }),
  ],
  alteplase: [
    r('adulte', '0,9 mg/kg (max 90 mg) : 10 % en bolus, 90 % en 60 min', {
      ind: 'AVC ischémique < 4 h 30',
      voie: 'IV',
      kg: 0.9,
      max: 90,
      freq: 'Dose unique',
    }),
  ],
  atorvastatine: [
    r('adulte', '10–80 mg (40–80 mg après un AVC ischémique)', { voie: 'Orale', freq: '1 fois par jour' }),
    r('grossesse', 'Contre-indiquée', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Diabète
  metformine: [
    r('adulte', '500 mg, jusqu’à 2 g/j (max 3 g/j ; 1 g/j si DFG 30–45)', {
      ind: 'Diabète de type 2',
      voie: 'Orale',
      freq: '1 à 2 fois par jour, au repas',
    }),
    r('grossesse', 'Selon le protocole', { sec: 'autorise', rem: 'Insuline préférée en cas d’échec.' }),
  ],
  gliclazide: [
    r('adulte', 'LM : 30–120 mg ; standard : 40–320 mg/j', {
      ind: 'Diabète de type 2',
      voie: 'Orale',
      freq: 'LM : 1 fois par jour ; standard : 1–2 fois par jour',
    }),
    r('grossesse', 'Contre-indiqué', { sec: 'contre_indique', rem: 'Passer à l’insuline.' }),
  ],
  'insuline-humaine-rapide': [
    r('adulte', '0,1 UI/kg/h', {
      ind: 'Acidocétose diabétique',
      voie: 'IV continue (pousse-seringue)',
      kg: 0.1,
      unite: 'UI',
      freq: 'Par heure',
      rem: 'Après vérification de la kaliémie (≥ 3,5 mmol/L).',
    }),
    r('adulte', '10 UI + 25 g de glucose', {
      ind: 'Hyperkaliémie',
      voie: 'IV',
      freq: 'Dose unique, à répéter selon la kaliémie',
    }),
    r('enfant', '0,05–0,1 UI/kg/h', {
      ind: 'Acidocétose diabétique',
      voie: 'IV continue',
      kg: 0.1,
      unite: 'UI',
      freq: 'Par heure',
      rem: 'Le calcul utilise 0,1 UI/kg/h.',
    }),
    r('grossesse', 'Selon les glycémies', {
      sec: 'autorise',
      rem: 'Traitement de référence du diabète pendant la grossesse.',
    }),
  ],
  'insuline-nph': [
    r('adulte', '0,1–0,2 UI/kg (ou 10 UI) au coucher', {
      ind: 'Insulinothérapie basale (DT2)',
      voie: 'SC',
      kg: 0.1,
      unite: 'UI',
      freq: '1 fois par jour',
      rem: 'Ajuster de 2 UI tous les 3 jours selon la glycémie à jeun.',
    }),
    r('grossesse', 'Selon les glycémies', { sec: 'autorise' }),
  ],
  'insuline-glargine': [
    r('adulte', '0,1–0,2 UI/kg/j (ou 10 UI)', {
      ind: 'Insulinothérapie basale',
      voie: 'SC',
      kg: 0.1,
      unite: 'UI',
      freq: '1 fois par jour à heure fixe',
    }),
    r('grossesse', 'Selon les glycémies', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Respiratoire / corticoïdes
  salbutamol: [
    r('adulte', '4–10 bouffées de 100 µg en chambre d’inhalation, ou 2,5–5 mg en nébulisation', {
      ind: 'Crise d’asthme',
      voie: 'Inhalée',
      freq: 'Toutes les 20 min pendant 1 h, puis selon la réponse',
    }),
    r('enfant', '2–6 bouffées (chambre ± masque) ou 2,5 mg en nébulisation', {
      ind: 'Crise d’asthme',
      voie: 'Inhalée',
      freq: 'Toutes les 20 min pendant 1 h',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  formoterol: [
    r('adulte', 'Budésonide-formotérol 200/6 : 1 inhalation à la demande (max 12/j)', {
      ind: 'Asthme (GINA voie 1, MART)',
      voie: 'Inhalée',
    }),
    r('grossesse', 'Posologie adulte si nécessaire', { sec: 'autorise' }),
  ],
  ipratropium: [
    r('adulte', '500 µg', {
      ind: 'Exacerbation sévère d’asthme',
      voie: 'Nébulisation',
      freq: 'Toutes les 20 min pendant 1 h (avec salbutamol)',
    }),
    r('enfant', '250 µg', {
      ind: 'Exacerbation sévère d’asthme',
      voie: 'Nébulisation',
      freq: 'Toutes les 20 min pendant 1 h',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  budesonide: [
    r('adulte', 'Dose faible 200–400 µg/j ; moyenne 400–800 µg/j', {
      ind: 'Asthme (traitement de fond)',
      voie: 'Inhalée',
      freq: '1–2 fois par jour',
    }),
    r('grossesse', 'Posologie adulte', {
      sec: 'autorise',
      rem: 'Corticoïde inhalé de référence pendant la grossesse.',
    }),
  ],
  prednisolone: [
    r('adulte', '40–50 mg/j', {
      ind: 'Exacerbation d’asthme',
      voie: 'Orale',
      freq: '1 fois par jour',
      duree: '5–7 jours',
    }),
    r('enfant', '1–2 mg/kg/j (max 40 mg)', {
      ind: 'Exacerbation d’asthme',
      voie: 'Orale',
      kg: 1,
      max: 40,
      freq: '1 fois par jour',
      duree: '3–5 jours',
      rem: 'Le calcul utilise 1 mg/kg.',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  hydrocortisone: [
    r('adulte', '100–200 mg', { ind: 'Asthme aigu grave', voie: 'IV', freq: 'Toutes les 6 h' }),
    r('adulte', '50 mg', { ind: 'Choc septique réfractaire', voie: 'IV', freq: 'Toutes les 6 h' }),
    r('enfant', '4 mg/kg', { ind: 'Asthme aigu grave', voie: 'IV', kg: 4, max: 100, freq: 'Toutes les 6 h' }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  dexamethasone: [
    r('grossesse', '6 mg IM', {
      ind: 'Maturation pulmonaire fœtale (24–34 SA)',
      voie: 'IM',
      freq: 'Toutes les 12 h',
      duree: '4 doses',
      sec: 'autorise',
    }),
    r('adulte', '0,15 mg/kg (≈ 10 mg)', {
      ind: 'Méningite bactérienne',
      voie: 'IV',
      kg: 0.15,
      max: 10,
      freq: 'Toutes les 6 h',
      duree: '4 jours',
      rem: 'Avant ou avec la 1re dose d’antibiotique.',
    }),
    r('enfant', '0,15 mg/kg', {
      ind: 'Méningite bactérienne (hors nouveau-né)',
      voie: 'IV',
      kg: 0.15,
      max: 10,
      freq: 'Toutes les 6 h',
      duree: '4 jours',
    }),
    r('enfant', '0,15–0,6 mg/kg', {
      ind: 'Laryngite',
      voie: 'Orale ou IM',
      kg: 0.15,
      max: 10,
      freq: 'Dose unique',
      rem: 'Le calcul utilise 0,15 mg/kg.',
    }),
  ],

  // ------------------------------------------------------------ Anticonvulsivants
  diazepam: [
    r('adulte', '10 mg IV lente', {
      ind: 'Crise prolongée, état de mal',
      voie: 'IV',
      freq: 'Une répétition possible après 5–10 min',
    }),
    r('enfant', '0,3 mg/kg', {
      ind: 'Crise prolongée, état de mal',
      voie: 'IV',
      kg: 0.3,
      max: 10,
      freq: 'Une répétition possible après 5–10 min',
    }),
    r('enfant', '0,5 mg/kg', {
      ind: 'Crise prolongée, état de mal',
      voie: 'Intrarectale',
      kg: 0.5,
      max: 10,
      freq: 'Une répétition possible après 5–10 min',
    }),
    r('grossesse', 'Posologie adulte', {
      ind: 'Urgence',
      sec: 'autorise',
      rem: 'Hypotonie néonatale possible près du terme.',
    }),
  ],
  midazolam: [
    r('adulte', '10 mg (> 40 kg)', {
      ind: 'État de mal (sans voie veineuse)',
      voie: 'IM',
      freq: 'Dose unique',
    }),
    r('enfant', '0,3 mg/kg', {
      ind: 'État de mal',
      voie: 'Buccale ou intranasale',
      kg: 0.3,
      max: 10,
      freq: 'Dose unique',
    }),
    r('enfant', '5 mg (13–40 kg)', { ind: 'État de mal', voie: 'IM', freq: 'Dose unique' }),
    r('grossesse', 'Posologie adulte', { ind: 'Urgence', sec: 'autorise' }),
  ],
  phenobarbital: [
    r('adulte', '20 mg/kg (max 1 g) en ≥ 20 min', {
      ind: 'État de mal (2e ligne)',
      voie: 'IV',
      kg: 20,
      max: 1000,
      freq: 'Dose de charge',
    }),
    r('adulte', '1–3 mg/kg/j (60–180 mg au coucher)', {
      ind: 'Épilepsie (fond)',
      voie: 'Orale',
      freq: '1 fois par jour',
    }),
    r('enfant', '20 mg/kg', {
      ind: 'État de mal (2e ligne)',
      voie: 'IV',
      kg: 20,
      max: 1000,
      freq: 'Dose de charge',
    }),
    r('enfant', '3–6 mg/kg/j', {
      ind: 'Épilepsie (fond)',
      voie: 'Orale',
      kg: 3,
      freq: '1 fois par jour',
      rem: 'Le calcul utilise 3 mg/kg.',
    }),
    r('nouveau_ne', '20 mg/kg', {
      ind: 'Convulsions néonatales',
      voie: 'IV',
      kg: 20,
      freq: 'Dose de charge',
    }),
    r('grossesse', 'Dose minimale efficace', {
      sec: 'prudence',
      rem: 'Tératogène : acide folique, vitamine K au nouveau-né.',
    }),
  ],
  phenytoine: [
    r('adulte', '20 mg/kg (débit ≤ 50 mg/min)', {
      ind: 'État de mal (2e ligne)',
      voie: 'IV dans du NaCl 0,9 %',
      kg: 20,
      freq: 'Dose de charge',
      rem: 'Sous scope (ECG, PA).',
    }),
    r('enfant', '20 mg/kg (débit ≤ 1 mg/kg/min)', {
      ind: 'État de mal (2e ligne)',
      voie: 'IV',
      kg: 20,
      freq: 'Dose de charge',
    }),
    r('grossesse', 'Éviter au long cours', { sec: 'prudence', rem: 'Tératogène.' }),
  ],
  levetiracetam: [
    r('adulte', '60 mg/kg (max 4 500 mg) en 10–15 min', {
      ind: 'État de mal (2e ligne)',
      voie: 'IV',
      kg: 60,
      max: 4500,
      freq: 'Dose de charge',
    }),
    r('adulte', '500 mg, jusqu’à 1 500 mg', {
      ind: 'Épilepsie (fond)',
      voie: 'Orale',
      freq: '2 fois par jour',
    }),
    r('enfant', '60 mg/kg (max 4 500 mg)', {
      ind: 'État de mal (2e ligne)',
      voie: 'IV',
      kg: 60,
      max: 4500,
      freq: 'Dose de charge',
    }),
    r('enfant', '10–30 mg/kg', {
      ind: 'Épilepsie (fond)',
      voie: 'Orale',
      kg: 10,
      max: 1500,
      freq: '2 fois par jour',
      rem: 'Le calcul utilise 10 mg/kg.',
    }),
    r('grossesse', 'Posologie adulte', {
      sec: 'autorise',
      rem: 'Parmi les antiépileptiques les plus sûrs pendant la grossesse.',
    }),
  ],
  'acide-valproique': [
    r('adulte', '40 mg/kg (max 3 000 mg) en 10 min', {
      ind: 'État de mal (2e ligne)',
      voie: 'IV',
      kg: 40,
      max: 3000,
      freq: 'Dose de charge',
    }),
    r('enfant', '10–15 mg/kg/j, jusqu’à 20–30 mg/kg/j', {
      ind: 'Épilepsie (fond)',
      voie: 'Orale',
      kg: 5,
      freq: '2 fois par jour',
      rem: 'Le calcul donne la dose par prise pour 10 mg/kg/j en 2 prises.',
    }),
    r('grossesse', 'À éviter', {
      sec: 'contre_indique',
      rem: 'Tératogène majeur ; chez la femme en âge de procréer, seulement en l’absence d’alternative.',
    }),
  ],
  carbamazepine: [
    r('adulte', '100–200 mg, jusqu’à 800–1 200 mg/j', {
      ind: 'Épilepsie focale',
      voie: 'Orale',
      freq: '2 fois par jour',
    }),
    r('enfant', '10–20 mg/kg/j', {
      ind: 'Épilepsie focale',
      voie: 'Orale',
      kg: 5,
      freq: '2 fois par jour',
      rem: 'Le calcul donne la dose par prise pour 10 mg/kg/j en 2 prises.',
    }),
    r('grossesse', 'Dose minimale efficace', {
      sec: 'prudence',
      rem: 'Tératogène (spina bifida) : acide folique.',
    }),
  ],
  'sulfate-de-magnesium': [
    r('grossesse', '4 g IV en 15–20 min, puis 1 g/h pendant 24 h', {
      ind: 'Pré-éclampsie sévère, éclampsie (Zuspan)',
      voie: 'IV',
      freq: 'Charge puis entretien',
      duree: '24 h après l’accouchement ou la dernière crise',
      sec: 'autorise',
    }),
    r('grossesse', '4 g IV + 10 g IM, puis 5 g IM toutes les 4 h', {
      ind: 'Pré-éclampsie sévère, éclampsie (Pritchard)',
      voie: 'IV + IM',
      sec: 'autorise',
      rem: 'Surveillance horaire : réflexes, FR ≥ 12/min, diurèse ≥ 30 mL/h.',
    }),
    r('adulte', '2 g en 20 min', { ind: 'Asthme aigu grave', voie: 'IV', freq: 'Dose unique' }),
    r('enfant', '40 mg/kg (max 2 g) en 20 min', {
      ind: 'Asthme aigu grave',
      voie: 'IV',
      kg: 40,
      max: 2000,
      freq: 'Dose unique',
    }),
  ],

  // ------------------------------------------------------------ Obstétrique
  ocytocine: [
    r('adulte', '10 UI', {
      ind: 'Prévention de l’HPP (post-partum)',
      voie: 'IM ou IV lente',
      freq: 'Dès la naissance',
    }),
    r('adulte', '10 UI IV lente puis 20–40 UI dans 1 L de cristalloïde', {
      ind: 'Traitement de l’HPP',
      voie: 'IV',
      freq: 'Perfusion (≈ 60 gouttes/min)',
    }),
  ],
  carbetocine: [
    r('adulte', '100 µg', {
      ind: 'Prévention de l’HPP (post-partum)',
      voie: 'IM ou IV lente',
      freq: 'Dose unique après la naissance',
      rem: 'Jamais avant la naissance de l’enfant.',
    }),
  ],
  misoprostol: [
    r('adulte', '600 µg', {
      ind: 'Prévention de l’HPP (si ocytocine indisponible)',
      voie: 'Orale',
      freq: 'Dose unique',
    }),
    r('adulte', '800 µg', { ind: 'Traitement de l’HPP', voie: 'Sublinguale', freq: 'Dose unique' }),
    r('grossesse', 'Contre-indiqué hors indications obstétricales encadrées', { sec: 'contre_indique' }),
  ],
  'acide-tranexamique': [
    r('adulte', '1 g en 10 min (2e dose de 1 g si saignement persistant)', {
      ind: 'Hémorragie du post-partum (dans les 3 h)',
      voie: 'IV',
      freq: 'Dose unique, à répéter une fois',
    }),
    r('adulte', '1 g en 10 min, puis 1 g sur 8 h', { ind: 'Traumatisme (dans les 3 h)', voie: 'IV' }),
  ],
  methotrexate: [
    r('adulte', '50 mg/m²', {
      ind: 'GEU (protocole monodose)',
      voie: 'IM',
      freq: 'Dose unique (2e dose si baisse de la β-hCG < 15 % entre J4 et J7)',
    }),
    r('grossesse', 'Contre-indiqué (grossesse intra-utérine)', {
      sec: 'contre_indique',
      rem: 'Tératogène : délai de 3 mois avant une nouvelle grossesse.',
    }),
  ],
  hydroxycarbamide: [
    r('enfant', '15–20 mg/kg/j, augmenté de 5 mg/kg toutes les 8 semaines (max 35 mg/kg/j)', {
      ind: 'Drépanocytose (dès 9 mois)',
      voie: 'Orale',
      kg: 20,
      freq: '1 fois par jour',
      rem: 'Le calcul donne la dose de départ à 20 mg/kg/j.',
    }),
    r('adulte', '15–20 mg/kg/j puis dose maximale tolérée', {
      ind: 'Drépanocytose',
      voie: 'Orale',
      kg: 15,
      freq: '1 fois par jour',
      rem: 'Le calcul utilise 15 mg/kg/j.',
    }),
    r('grossesse', 'Contre-indiqué', { sec: 'contre_indique', rem: 'Contraception efficace.' }),
  ],

  // ------------------------------------------------------------ Antalgiques
  paracetamol: [
    r('adulte', '1 g (max 4 g/j ; 3 g/j si < 50 kg, malnutrition, hépatopathie)', {
      voie: 'Orale ou IV',
      freq: 'Toutes les 6 h',
    }),
    r('enfant', '15 mg/kg (max 60 mg/kg/j)', {
      voie: 'Orale, rectale ou IV',
      kg: 15,
      max: 1000,
      freq: 'Toutes les 6 h',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise', rem: 'Antalgique de 1re intention.' }),
  ],
  ibuprofene: [
    r('adulte', '400 mg (max 1 200 mg/j)', { voie: 'Orale', freq: '3 fois par jour' }),
    r('enfant', '10 mg/kg (max 30 mg/kg/j)', { voie: 'Orale', kg: 10, max: 400, freq: 'Toutes les 8 h' }),
    r('grossesse', 'Contre-indiqué au 3e trimestre ; à éviter', {
      sec: 'contre_indique',
      rem: 'À partir de 24 SA (20 SA selon certaines agences).',
    }),
  ],
  morphine: [
    r('adulte', '2–3 mg IV toutes les 5–10 min (titration)', {
      ind: 'Douleur intense',
      voie: 'IV',
      freq: 'Jusqu’au soulagement',
    }),
    r('enfant', '0,1 mg/kg puis 0,025 mg/kg toutes les 5–10 min', {
      ind: 'Douleur intense (> 1 an)',
      voie: 'IV',
      kg: 0.1,
      freq: 'Titration',
    }),
    r('enfant', '0,2–0,4 mg/kg', {
      ind: 'Douleur intense (> 1 an)',
      voie: 'Orale',
      kg: 0.2,
      freq: 'Toutes les 4 h',
      rem: 'Le calcul utilise 0,2 mg/kg.',
    }),
    r('grossesse', 'Posologie adulte', {
      sec: 'prudence',
      rem: 'Surveiller le nouveau-né (dépression respiratoire, sevrage).',
    }),
  ],

  // ------------------------------------------------------------ Solutés, micronutriments, nutrition
  'ringer-lactate': [
    r('adulte', 'Bolus de 500–1 000 mL', { ind: 'Choc', voie: 'IV', freq: 'Réévaluer après chaque bolus' }),
    r('enfant', '100 mL/kg', {
      ind: 'Plan C (déshydratation sévère)',
      voie: 'IV',
      kg: 100,
      unite: 'mL',
      duree: '< 12 mois : 6 h ; ≥ 12 mois : 3 h',
      rem: 'Jamais ce schéma chez le malnutri sévère.',
    }),
    r('enfant', '10–20 mL/kg', {
      ind: 'Choc (bolus)',
      voie: 'IV',
      kg: 10,
      unite: 'mL',
      rem: 'Le calcul utilise 10 mL/kg ; réévaluer.',
    }),
  ],
  'chlorure-de-sodium-0-9': [
    r('adulte', 'Bolus de 500–1 000 mL', { ind: 'Remplissage', voie: 'IV' }),
    r('enfant', '10–20 mL/kg', {
      ind: 'Remplissage (bolus)',
      voie: 'IV',
      kg: 10,
      unite: 'mL',
      rem: 'Le calcul utilise 10 mL/kg.',
    }),
    r('nouveau_ne', '10 mL/kg', {
      ind: 'Choc',
      voie: 'IV',
      kg: 10,
      unite: 'mL',
      freq: 'À répéter prudemment',
    }),
  ],
  'glucose-10': [
    r('adulte', '150–250 mL (ou glucosé 30 % 50 mL)', { ind: 'Hypoglycémie', voie: 'IV' }),
    r('enfant', '5 mL/kg', {
      ind: 'Hypoglycémie',
      voie: 'IV ou sonde gastrique',
      kg: 5,
      unite: 'mL',
      freq: 'Contrôle à 15–30 min',
    }),
    r('nouveau_ne', '2 mL/kg', {
      ind: 'Hypoglycémie',
      voie: 'IV',
      kg: 2,
      unite: 'mL',
      freq: 'Puis perfusion d’entretien',
    }),
  ],
  'chlorure-de-potassium': [
    r('adulte', '20–40 mmol/L de soluté (débit ≤ 10 mmol/h en voie périphérique)', {
      ind: 'Hypokaliémie, acidocétose',
      voie: 'IV, toujours dilué',
      rem: 'Jamais en IV directe.',
    }),
  ],
  'gluconate-de-calcium': [
    r('adulte', '10 mL de gluconate de calcium 10 % en 3–5 min', {
      ind: 'Hyperkaliémie avec signes ECG',
      voie: 'IV',
      freq: 'À répéter si l’ECG est inchangé',
    }),
    r('grossesse', '1 g (10 mL à 10 %) IV lente en 10 min', {
      ind: 'Surdosage en sulfate de magnésium',
      voie: 'IV',
      sec: 'autorise',
    }),
  ],
  sro: [
    r('enfant', '75 mL/kg en 4 h', {
      ind: 'Plan B (signes évidents de déshydratation)',
      voie: 'Orale',
      kg: 75,
      unite: 'mL',
      duree: '4 h puis réévaluer',
    }),
    r('enfant', '< 2 ans : 50–100 mL ; 2–10 ans : 100–200 mL après chaque selle', {
      ind: 'Plan A (prévention)',
      voie: 'Orale',
    }),
    r('adulte', 'À volonté, en compensant les pertes', { ind: 'Diarrhée, choléra', voie: 'Orale' }),
  ],
  resomal: [
    r('enfant', '5 mL/kg toutes les 30 min pendant 2 h, puis 5–10 mL/kg/h', {
      ind: 'Déshydratation chez l’enfant malnutri sévère',
      voie: 'Orale ou sonde',
      kg: 5,
      unite: 'mL',
      freq: 'Toutes les 30 min (2 premières heures)',
      duree: 'Maximum 10 h',
    }),
  ],
  zinc: [
    r('enfant', '< 6 mois : 10 mg ; ≥ 6 mois : 20 mg', {
      ind: 'Diarrhée aiguë',
      voie: 'Orale (comprimé dispersible)',
      freq: '1 fois par jour',
      duree: '10–14 jours',
    }),
  ],
  'acide-folique': [
    r('adulte', '1 à 5 mg/j', { ind: 'Drépanocytose', voie: 'Orale', freq: '1 fois par jour' }),
    r('enfant', '1 à 5 mg/j', { ind: 'Drépanocytose', voie: 'Orale', freq: '1 fois par jour' }),
    r('grossesse', '0,4 mg/j (5 mg/j si antiépileptique ou antécédent d’anomalie du tube neural)', {
      ind: 'Péri-conception',
      voie: 'Orale',
      sec: 'autorise',
    }),
  ],
  pyridoxine: [
    r('adulte', '10–25 mg/j', {
      ind: 'Prévention de la neuropathie sous isoniazide',
      voie: 'Orale',
      freq: '1 fois par jour',
    }),
    r('enfant', '5–10 mg/j', {
      ind: 'Prévention de la neuropathie sous isoniazide',
      voie: 'Orale',
      freq: '1 fois par jour',
    }),
    r('grossesse', 'Posologie adulte', { sec: 'autorise' }),
  ],
  atpe: [
    r('enfant', '150–200 kcal/kg/j (1 sachet de 92 g = 500 kcal)', {
      ind: 'MAS non compliquée, réhabilitation',
      voie: 'Orale',
      kg: 200,
      unite: 'kcal',
      freq: 'Par jour, réparti dans la journée',
      rem: 'Le calcul donne les kcal/j à 200 kcal/kg ; suivre le tableau par poids du protocole national.',
    }),
  ],
  'lait-f75': [
    r('enfant', '130 mL/kg/j (100 mL/kg/j si œdèmes +++)', {
      ind: 'Phase de stabilisation de la MAS',
      voie: 'Orale ou sonde',
      kg: 130,
      unite: 'mL',
      freq: 'Par jour, en 8 repas',
      rem: 'Le calcul donne le volume quotidien total.',
    }),
  ],
  'lait-f100': [
    r('enfant', '150–220 kcal/kg/j', {
      ind: 'Réhabilitation de la MAS',
      voie: 'Orale',
      kg: 150,
      unite: 'kcal',
      freq: 'Par jour',
      rem: 'Le calcul utilise 150 kcal/kg/j.',
    }),
  ],
};
