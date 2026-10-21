'use strict';

/**
 * Illustrations des actualités sans photo propre (revues, PubMed, NICE, ESC…) : une image libre
 * de droits choisie selon le sujet (Ebola → virus Ebola, paludisme → anophèle, cœur → ECG…).
 * Toutes viennent de Wikimedia Commons, vérifiées le 21 octobre 2026 : domaine public (CDC, NIH,
 * USAID…), CC0 ou CC BY (auteur cité, lien vers la page de l'image). L'application les affiche
 * comme « Illustration », jamais comme photo de l'article.
 */

const COMMONS = 'https://commons.wikimedia.org/wiki/File:';
const VIGNETTE = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/';

const I = (fichier, chemin, credit) => ({
  image: chemin.startsWith('https://') ? chemin : `${VIGNETTE}${chemin}`,
  page: `${COMMONS}${fichier}`,
  credit,
});

const IMAGES = {
  ebola: I(
    'Ebola_virus_virion.jpg',
    'e/e6/Ebola_virus_virion.jpg/1280px-Ebola_virus_virion.jpg',
    'CDC / Cynthia Goldsmith, domaine public',
  ),
  cholera: I(
    'Vibrio_cholerae.jpg',
    'f/f6/Vibrio_cholerae.jpg/1280px-Vibrio_cholerae.jpg',
    'Louisa Howard (Dartmouth), domaine public',
  ),
  mpox: I(
    'Monkeypox_virus_particles.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d3/Monkeypox_virus_particles.jpg',
    'NIH, domaine public',
  ),
  paludisme: I(
    'Anopheles_gambiae_mosquito_feeding_(CDC_PHIL_1354).jpg',
    '1/18/Anopheles_gambiae_mosquito_feeding_%28CDC_PHIL_1354%29.jpg/1280px-Anopheles_gambiae_mosquito_feeding_%28CDC_PHIL_1354%29.jpg',
    'CDC / James Gathany, domaine public',
  ),
  arbovirose: I(
    'Aedes_aegypti_CDC9175.tif',
    '8/81/Aedes_aegypti_CDC9175.tif/lossy-page1-1280px-Aedes_aegypti_CDC9175.tif.jpg',
    'CDC / James Gathany, domaine public',
  ),
  vih: I(
    'HIV_H9_T-cell_II.jpg',
    '1/18/HIV_H9_T-cell_II.jpg/1280px-HIV_H9_T-cell_II.jpg',
    'NIH, domaine public',
  ),
  tuberculose: I(
    'Mycobacterium_Tuberculosis_Bacteria,_the_Cause_of_TB_(52766234426).jpg',
    '9/92/Mycobacterium_Tuberculosis_Bacteria%2C_the_Cause_of_TB_%2852766234426%29.jpg/1280px-Mycobacterium_Tuberculosis_Bacteria%2C_the_Cause_of_TB_%2852766234426%29.jpg',
    'NIAID, CC BY 2.0',
  ),
  respiratoire: I(
    'MERS_Coronavirus_Particles.jpg',
    '3/34/MERS_Coronavirus_Particles.jpg/1280px-MERS_Coronavirus_Particles.jpg',
    'NIAID, domaine public',
  ),
  rougeole: I(
    'Measles_virus.JPG',
    '6/62/Measles_virus.JPG/1280px-Measles_virus.JPG',
    'CDC / Cynthia Goldsmith, domaine public',
  ),
  vaccin: I(
    'Syringe_and_Vaccine_(14329622976).jpg',
    '6/6e/Syringe_and_Vaccine_%2814329622976%29.jpg/1280px-Syringe_and_Vaccine_%2814329622976%29.jpg',
    'NIAID, CC BY 2.0',
  ),
  cardio: I('12_lead_ECG.jpg', 'd/df/12_lead_ECG.jpg/1280px-12_lead_ECG.jpg', 'Peter H. Charlton, CC BY 4.0'),
  cancer: I(
    'Breast_cancer_cells_(2).jpg',
    '1/1f/Breast_cancer_cells_%282%29.jpg/1280px-Breast_cancer_cells_%282%29.jpg',
    'NCI / Cecil Fox, domaine public',
  ),
  medicaments: I(
    'Medicine_Drug_Pills_on_Plate.png',
    '2/21/Medicine_Drug_Pills_on_Plate.png/1280px-Medicine_Drug_Pills_on_Plate.png',
    'epSos.de, CC BY 2.0',
  ),
  recherche: I(
    'Testing_vaccine_in_laboratory._Holding_syringe_with_protective_medical_gloves_closeup._(51714051263).jpg',
    '0/01/Testing_vaccine_in_laboratory._Holding_syringe_with_protective_medical_gloves_closeup._%2851714051263%29.jpg/1280px-Testing_vaccine_in_laboratory._Holding_syringe_with_protective_medical_gloves_closeup._%2851714051263%29.jpg',
    'Nenad Stojkovic, CC BY 2.0',
  ),
  laboratoire: I(
    'Cdc-wDxFn_dBEC0-unsplash.jpg',
    'f/ff/Cdc-wDxFn_dBEC0-unsplash.jpg/1280px-Cdc-wDxFn_dBEC0-unsplash.jpg',
    'CDC, domaine public',
  ),
  communautaire: I(
    'Community_Health_Worker_treats_child_(19165929668).jpg',
    'f/f1/Community_Health_Worker_treats_child_%2819165929668%29.jpg/1280px-Community_Health_Worker_treats_child_%2819165929668%29.jpg',
    'President’s Malaria Initiative, domaine public',
  ),
  nutrition: I(
    'Uganda_Nutrition_(40911014075).jpg',
    'c/cf/Uganda_Nutrition_%2840911014075%29.jpg/1280px-Uganda_Nutrition_%2840911014075%29.jpg',
    'USAID, domaine public',
  ),
  consultation: I(
    'Healthcare_professional_checks_temperature_with_digital_thermometer_during_patient_consultation_in_a_medical_office_undefined.jpg',
    '9/93/Healthcare_professional_checks_temperature_with_digital_thermometer_during_patient_consultation_in_a_medical_office_undefined.jpg/1280px-Healthcare_professional_checks_temperature_with_digital_thermometer_during_patient_consultation_in_a_medical_office_undefined.jpg',
    'Shixart1985, CC BY 2.0',
  ),
  hygiene: I(
    'Washing_hands_kids.jpg',
    '5/53/Washing_hands_kids.jpg/1280px-Washing_hands_kids.jpg',
    'safaritravelplus, CC0',
  ),
};

// Début de mot compatible avec les lettres accentuées (voir traitement.js)
const mot = (alternatives) => new RegExp(`(?<![\\p{L}\\p{N}])(${alternatives})`, 'iu');

/** Thèmes dans l'ordre de priorité : le premier qui correspond au sujet l'emporte. */
const THEMES = [
  ['ebola', mot('ebola|bundibugyo|marburg|fi[èe]vre h[ée]morragique|hemorrhagic fever')],
  ['cholera', mot('chol[ée]r|vibrio|diarrh')],
  ['mpox', mot('mpox|monkeypox|variole')],
  ['rougeole', mot('rougeole|measles|rub[ée]ole|rubella')],
  ['paludisme', mot('paludisme|malaria|anoph|plasmodium|antipalud')],
  ['arbovirose', mot('dengue|chikungunya|zika|fi[èe]vre jaune|yellow fever|aedes|arbovir')],
  ['vih', mot('vih|hiv|sida|aids|antir[ée]trovir')],
  ['tuberculose', mot('tubercul|\\btb\\b|mycobact')],
  ['respiratoire', mot('coronavirus|covid|mers|sars|grippe|influenza|pneumon|respirat|bronch|asthm')],
  ['vaccin', mot('vaccin|vaccine|immunization|immunisation')],
  [
    'cancer',
    mot('cancer|tumeur|tumor|tumour|oncolog|leuc[ée]m|leukem|lymphom|my[ée]lom|carcinom|sarcom|m[ée]lanom'),
  ],
  ['cardio', mot('cardi|c(?:o|œ)ur|heart|hypertension|art[ée]ri|avc|stroke|vascul|coronar|lipid|cholest')],
  ['nutrition', mot('nutrition|malnutrition|ob[ée]sit|obesity|alimentation|food|di[ée]t')],
  [
    'hygiene',
    mot('eau potable|drinking water|hygi[èe]ne|sanitation|assainissement|lavage des mains|hand ?washing'),
  ],
  ['medicaments', mot('m[ée]dicament|insulin|drug|pharmac|retraits? de lot|recall|falsifi|antibiot|antimicrob')],
  ['laboratoire', mot('diab[èe]t|glyc[ée]m|glucose|diagnosti|d[ée]pistage|screening|laborato|test ')],
  ['recherche', mot('essai|trial|[ée]tude|study|cohort|research|recherche|m[ée]ta-analyse|meta-analysis')],
  [
    'consultation',
    mot('recommandation|guideline|protocole|prise en charge|management|soins|care|traitement|treatment'),
  ],
];

// Sans thème reconnu : selon la source, puis selon le type d'actualité
const PAR_SOURCE = {
  lancet: 'recherche',
  nejm: 'recherche',
  'pubmed-recommandations': 'consultation',
  nice: 'consultation',
  esc: 'cardio',
};
const PAR_TYPE = {
  alerte_sanitaire: 'communautaire',
  pharmacovigilance: 'medicaments',
  protocole: 'consultation',
  innovation: 'recherche',
  information: 'communautaire',
};

/** Illustration d'une actualité sans photo : { image, page, credit, theme }. */
function illustrationPour(a) {
  const texte = [a.titre, a.titre_original, a.resume, a.pathologie_nom].filter(Boolean).join(' ');
  const theme =
    THEMES.find(([, motif]) => motif.test(texte))?.[0] ||
    PAR_SOURCE[a.veille_source] ||
    PAR_TYPE[a.type] ||
    'communautaire';
  return { ...IMAGES[theme], theme };
}

/** Ajoute `illustration` aux actualités sans photo (les autres gardent la photo de la source). */
function illustrer(actualites) {
  return actualites.map((a) => (a.image_url ? a : { ...a, illustration: illustrationPour(a) }));
}

module.exports = { IMAGES, THEMES, illustrationPour, illustrer };
