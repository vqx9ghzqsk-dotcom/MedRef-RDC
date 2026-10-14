'use strict';

/**
 * Posologies — lot 14 : molécules suivantes les plus citées dans les fiches sans posologie.
 * Sources : OMS (Pocket book, médicaments essentiels, Ebola, malnutrition, diphtérie),
 * MSF Guide clinique et thérapeutique et Médicaments essentiels, notices.
 * Rédigé par IA : à valider.
 */

const { p } = require('./outils');

module.exports = {
  // ------------------------------------------------------------ Valganciclovir
  valganciclovir: [
    p('adulte', '900 mg 2 fois par jour pendant 21 jours, puis 900 mg/j', {
      ind: 'Rétinite à CMV (VIH), prévention du CMV après greffe (900 mg/j)',
      voie: 'Orale, au repas',
      freq: '2 fois par jour, puis 1 fois',
      f: 'schema',
      durees: [[21, null, 'jours', 'Induction']],
      rem: 'Neutropénie, thrombopénie : NFS. Adapter à la fonction rénale. Tératogène.',
    }),
    p('nouveau_ne', '16 mg/kg 2 fois par jour', {
      ind: 'Infection congénitale à CMV symptomatique (avis spécialisé)',
      voie: 'Orale',
      kg: 16,
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[6, null, 'mois']],
      sec: 'prudence',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Vitamine C
  'vitamine-c-acide-ascorbique': [
    p('adulte', '250 mg 2 fois par jour (scorbut : 1 g/j pendant 1 à 2 semaines puis 250 mg/j)', {
      ind: 'Scorbut, carence',
      voie: 'Orale',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[1, 3, 'mois']],
    }),
    p('enfant', '100–300 mg/j en 2 à 3 prises', {
      ind: 'Scorbut',
      voie: 'Orale',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      durees: [[1, 3, 'mois']],
    }),
    p('grossesse', 'Pas de supplémentation à forte dose', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Zolmitriptan
  zolmitriptan: [
    p('adulte', '2,5 mg au début de la crise, à renouveler après 2 h si récidive (maximum 10 mg/j)', {
      ind: 'Crise de migraine, algie vasculaire (spray nasal 5 mg)',
      voie: 'Orale ou nasale',
      f: 'schema',
      rem: 'Contre-indiqué si coronaropathie, HTA non contrôlée, AVC. Pas plus de 10 jours par mois.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Abiratérone
  abiraterone: [
    p('adulte', '1 000 mg/j à jeun, avec prednisone 5 mg 2 fois par jour et analogue de la LH-RH', {
      ind: 'Cancer de la prostate métastatique',
      voie: 'Orale, à jeun',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Kaliémie, tension, transaminases.',
    }),
  ],

  // ------------------------------------------------------------ Acide azélaïque
  'acide-azelaique': [
    p('adulte', 'Crème à 20 % ou gel à 15 % : 2 applications par jour', {
      ind: 'Acné, rosacée papulopustuleuse, hyperpigmentation (mélasma)',
      voie: 'Cutanée',
      unite: 'application',
      freq: '2 fois par jour',
      f: { n: 2 },
      durees: [[3, 6, 'mois']],
    }),
    p('enfant', 'Adolescent : même utilisation', {
      ind: 'Acné',
      voie: 'Cutanée',
      unite: 'application',
      freq: '2 fois par jour',
      f: { n: 2 },
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Adénosine
  adenosine: [
    p('adulte', '6 mg IV rapide suivi d’un flush de sérum physiologique, puis 12 mg si besoin (2 fois)', {
      ind: 'Tachycardie supraventriculaire paroxystique (après manœuvres vagales)',
      voie: 'IV rapide (veine proche du cœur)',
      f: 'schema',
      rem: 'Monitorage ECG ; sensation de malaise transitoire. Contre-indiquée si asthme sévère. Dose réduite (3 mg) si voie centrale ou dipyridamole.',
    }),
    p('enfant', '0,1 mg/kg IV rapide (maximum 6 mg), puis 0,2 mg/kg (maximum 12 mg)', {
      ind: 'Tachycardie supraventriculaire',
      voie: 'IV rapide',
      kg: 0.1,
      max: 6,
      f: 'schema',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Alprazolam
  alprazolam: [
    p('adulte', '0,25–0,5 mg 2 à 3 fois par jour (maximum 4 mg/j ; trouble panique jusqu’à 6 mg/j)', {
      ind: 'Anxiété sévère, trouble panique (courte durée)',
      voie: 'Orale',
      freq: '2 à 3 fois par jour',
      f: { n: 3 },
      durees: [[2, 12, 'semaines', 'Arrêt progressif inclus']],
      rem: 'Dépendance, sevrage marqué. Sujet âgé : 0,25 mg.',
    }),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Amikacine
  amikacine: [
    p('adulte', '15 mg/kg IV en 1 injection par jour (forme grave : 20–30 mg/kg)', {
      ind: 'Infections graves à bacilles Gram négatif résistants, tuberculose multirésistante (selon le programme)',
      voie: 'IV (30 min) ou IM',
      kg: 15,
      base: 'par_jour',
      max: 1500,
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[5, 7, 'jours']],
      rem: 'Néphro- et ototoxicité ; dosages si traitement > 5 jours ou insuffisance rénale.',
    }),
    p('enfant', '15–20 mg/kg IV 1 fois par jour', {
      ind: 'Infections graves, sepsis à bactéries résistantes',
      voie: 'IV ou IM',
      kg: 15,
      base: 'par_jour',
      max: 1500,
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[5, 7, 'jours']],
    }),
    p('nouveau_ne', '15 mg/kg IV toutes les 24 à 48 h selon l’âge gestationnel', {
      ind: 'Sepsis néonatal à bactéries résistantes',
      voie: 'IV',
      kg: 15,
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter (ototoxicité fœtale) sauf infection grave', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Aminophylline
  aminophylline: [
    p('adulte', '5 mg/kg IV en 20 min (sauf si théophylline orale), puis 0,5 mg/kg/h', {
      ind: 'Asthme aigu grave réfractaire (3e intention)',
      voie: 'IV',
      kg: 5,
      max: 500,
      f: 'perfusion',
      rem: 'Marge thérapeutique étroite : troubles du rythme, convulsions. Théophyllinémie 10–20 mg/L.',
    }),
    p('enfant', '5 mg/kg IV en 20 min, puis 1 mg/kg/h (enfant de 1 à 12 ans)', {
      ind: 'Asthme aigu grave réfractaire',
      voie: 'IV',
      kg: 5,
      max: 500,
      f: 'perfusion',
      sec: 'prudence',
    }),
    p(
      'nouveau_ne',
      'Apnées du prématuré : 5–6 mg/kg puis 2,5 mg/kg toutes les 12 h (la caféine est préférée)',
      {
        ind: 'Apnées du prématuré',
        voie: 'IV',
        kg: 5,
        f: 'schema',
        sec: 'prudence',
      },
    ),
    p('grossesse', 'Si nécessaire', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Amphotéricine B
  'amphotericine-b': [
    p(
      'adulte',
      'Désoxycholate : 1 mg/kg/j IV ; liposomale : 3 mg/kg/j (cryptococcose : dose unique de 10 mg/kg avec flucytosine et fluconazole)',
      {
        ind: 'Méningite à cryptocoque, histoplasmose, candidoses invasives, leishmaniose viscérale',
        voie: 'IV (perfusion de 4 à 6 h pour le désoxycholate)',
        kg: 1,
        base: 'par_jour',
        freq: '1 fois par jour',
        f: { n: 1 },
        durees: [[7, 14, 'jours']],
        rem: 'Préhydratation (1 L de NaCl 0,9 %) et potassium ; créatinine et kaliémie 2 à 3 fois par semaine.',
      },
    ),
    p('enfant', 'Désoxycholate : 1 mg/kg/j ; liposomale : 3 mg/kg/j', {
      ind: 'Infections fongiques invasives, leishmaniose viscérale',
      voie: 'IV',
      kg: 1,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[7, 14, 'jours']],
    }),
    p('grossesse', 'Utilisable (antifongique de choix)', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Anastrozole
  anastrozole: [
    p('adulte', '1 mg/j', {
      ind: 'Cancer du sein hormonodépendant de la femme ménopausée',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[5, null, 'mois', 'Adjuvant : en pratique 5 ans']],
      rem: 'Ostéoporose (densitométrie), arthralgies.',
    }),
  ],

  // ------------------------------------------------------------ Ansuvimab
  ansuvimab: [
    p('adulte', '50 mg/kg IV en dose unique (perfusion de 60 min)', {
      ind: 'Maladie à virus Ebola (Zaïre) confirmée',
      voie: 'IV',
      kg: 50,
      f: 'unique',
      rem: 'Centre de traitement Ebola ; protocole national.',
    }),
    p('enfant', '50 mg/kg IV en dose unique, y compris le nouveau-né', {
      ind: 'Maladie à virus Ebola (Zaïre) confirmée',
      voie: 'IV',
      kg: 50,
      f: 'unique',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Antitoxine botulique
  'antitoxine-botulique': [
    p('adulte', '1 flacon IV (antitoxine heptavalente) en dose unique, le plus tôt possible', {
      ind: 'Botulisme alimentaire ou par blessure',
      voie: 'IV',
      f: 'unique',
      rem: 'Origine équine : réactions d’hypersensibilité. Soins de réanimation (ventilation).',
    }),
    p(
      'enfant',
      'Fraction de flacon selon le poids (notice) ; botulisme du nourrisson : immunoglobuline humaine spécifique',
      {
        ind: 'Botulisme',
        voie: 'IV',
        f: 'unique',
        sec: 'prudence',
      },
    ),
  ],

  // ------------------------------------------------------------ Antitoxine diphtérique
  'antitoxine-diphterique': [
    p(
      'adulte',
      '20 000–100 000 UI IM ou IV selon la gravité (atteinte laryngée ou pharyngée : 20 000–60 000 UI ; forme maligne : 80 000–100 000 UI)',
      {
        ind: 'Diphtérie (dès la suspicion clinique)',
        voie: 'IV (perfusion) ou IM',
        unite: 'UI',
        f: 'unique',
        rem: 'Origine équine : méthode de Besredka ou adrénaline prête. Associer antibiotique et isolement.',
      },
    ),
    p('enfant', 'Même dose que l’adulte (dépend de la gravité, pas du poids)', {
      ind: 'Diphtérie',
      voie: 'IV ou IM',
      unite: 'UI',
      f: 'unique',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ ASPE
  aspe: [
    p('enfant', '1 sachet de 92 g par jour (6–59 mois)', {
      ind: 'Malnutrition aiguë modérée, prévention en situation de crise',
      voie: 'Orale',
      unite: 'sachet',
      freq: '1 fois par jour',
      f: { n: 1 },
      durees: [[2, 3, 'mois', 'Jusqu’à la sortie du programme']],
      rem: 'Poursuivre l’allaitement. Contre-indiqué si allergie à l’arachide.',
    }),
    p('grossesse', 'Femme enceinte ou allaitante malnutrie : selon le programme national', {
      ind: 'Malnutrition de la femme enceinte ou allaitante',
      unite: 'sachet',
      sec: 'autorise',
    }),
  ],

  // ------------------------------------------------------------ Aténolol
  atenolol: [
    p('adulte', '25–100 mg/j en 1 prise', {
      ind: 'Hypertension artérielle, angor, troubles du rythme',
      voie: 'Orale',
      freq: '1 fois par jour',
      f: { n: 1 },
      rem: 'Adapter à la fonction rénale. Contre-indiqué si asthme, bloc AV. Ne pas arrêter brutalement.',
    }),
    p('enfant', '0,5–1 mg/kg/j en 1 à 2 prises (maximum 2 mg/kg/j ou 100 mg/j)', {
      ind: 'Hypertension, troubles du rythme (avis spécialisé)',
      voie: 'Orale',
      kg: 1,
      max: 100,
      base: 'par_jour',
      freq: '1 fois par jour',
      f: { n: 1 },
      sec: 'prudence',
    }),
    p('grossesse', 'À éviter (retard de croissance) : préférer le labétalol ou la méthyldopa', {
      sec: 'prudence',
    }),
  ],

  // ------------------------------------------------------------ Atézolizumab
  atezolizumab: [
    p('adulte', '1 200 mg IV toutes les 3 semaines (ou 840 mg toutes les 2 semaines), selon le protocole', {
      ind: 'Cancers bronchiques, urothéliaux, carcinome hépatocellulaire (oncologie)',
      voie: 'IV',
      f: 'schema',
      rem: 'Effets indésirables immunologiques (pneumopathie, colite, hépatite, endocrinopathies).',
    }),
    p('grossesse', 'Contre-indiqué', { sec: 'contre_indique' }),
  ],

  // ------------------------------------------------------------ Atoltivimab-maftivimab-odésivimab
  'atoltivimab-maftivimab-odesivimab': [
    p('adulte', '50 mg de chaque anticorps/kg (3 mL/kg) IV en dose unique', {
      ind: 'Maladie à virus Ebola (Zaïre) confirmée',
      voie: 'IV (perfusion de 2 h)',
      kg: 3,
      unite: 'mL',
      f: 'unique',
      rem: 'Centre de traitement Ebola ; protocole national.',
    }),
    p('enfant', '3 mL/kg IV en dose unique, y compris le nouveau-né', {
      ind: 'Maladie à virus Ebola (Zaïre) confirmée',
      voie: 'IV',
      kg: 3,
      unite: 'mL',
      f: 'unique',
    }),
    p('grossesse', 'Utilisable', { sec: 'autorise' }),
  ],

  // ------------------------------------------------------------ Atovaquone
  atovaquone: [
    p(
      'adulte',
      'Atovaquone-proguanil : 4 comprimés adulte (250/100 mg) par jour pendant 3 jours ; prophylaxie : 1 comprimé/j',
      {
        ind: 'Paludisme simple (alternative), prophylaxie du voyageur ; pneumocystose (750 mg 2 fois par jour)',
        voie: 'Orale, au repas',
        freq: '1 fois par jour',
        f: { n: 1 },
        durees: [[3, null, 'jours', 'Traitement du paludisme']],
      },
    ),
    p(
      'enfant',
      'Atovaquone-proguanil selon le poids : 11–20 kg : 1 comprimé adulte/j ; 21–30 kg : 2 ; 31–40 kg : 3 (pendant 3 jours)',
      {
        ind: 'Paludisme simple (alternative)',
        voie: 'Orale, au repas',
        freq: '1 fois par jour',
        f: { n: 1 },
        durees: [[3, null, 'jours']],
      },
    ),
    p('grossesse', 'À éviter', { sec: 'prudence' }),
  ],

  // ------------------------------------------------------------ Atracurium
  atracurium: [
    p('adulte', '0,3–0,6 mg/kg IV, puis 0,1–0,2 mg/kg selon les besoins', {
      ind: 'Curarisation (intubation, chirurgie), notamment en insuffisance rénale ou hépatique',
      voie: 'IV',
      kg: 0.5,
      f: 'schema',
      rem: 'Anesthésiste uniquement ; ventilation. Libération d’histamine.',
    }),
    p('enfant', '≥ 1 mois : 0,3–0,6 mg/kg IV', {
      ind: 'Curarisation',
      voie: 'IV',
      kg: 0.5,
      f: 'schema',
      sec: 'prudence',
    }),
    p('grossesse', 'Utilisable (césarienne)', { sec: 'autorise' }),
  ],
};
