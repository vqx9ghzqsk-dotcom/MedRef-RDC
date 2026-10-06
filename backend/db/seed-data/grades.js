'use strict';

/**
 * Grades des recommandations, par fiche et par numéro de principe :
 *   { slug: { ordre: [force, détail, source] } }
 * force : 'forte' | 'conditionnelle' | 'bonne_pratique' | 'consensus' | null
 *         (null quand la source utilise uniquement des niveaux de preuve : GINA, ADA, AES…)
 *
 * ⚠️ Seuls les grades vérifiables dans la source citée sont renseignés. Les principes sans
 * grade sont à compléter depuis l'administration après vérification du texte original.
 */

const OMS_PALU = 'OMS — Guidelines for malaria';
const ESC_HTA = 'ESC 2024 (hypertension)';
const ESC_IC = 'ESC 2021, mise à jour 2023 (insuffisance cardiaque)';

module.exports = {
  'paludisme-grave': {
    2: ['forte', 'certitude des preuves élevée', OMS_PALU],
    4: ['forte', null, OMS_PALU],
  },
  'paludisme-simple': {
    1: ['bonne_pratique', 'déclaration de bonne pratique', OMS_PALU],
    2: ['forte', 'certitude des preuves élevée', OMS_PALU],
  },
  'infection-vih': {
    3: ['forte', null, 'OMS — Consolidated HIV guidelines 2021'],
    4: ['forte', null, 'OMS — Consolidated HIV guidelines 2021'],
  },
  'tuberculose-pulmonaire': {
    1: ['forte', null, 'OMS — Consolidated TB guidelines, module 3'],
    2: ['forte', null, 'OMS — Consolidated TB guidelines, module 4'],
    3: ['forte', null, 'OMS — Consolidated TB guidelines, module 4'],
  },
  'hepatite-b-chronique': {
    3: ['forte', null, 'OMS 2024 (hépatite B)'],
  },
  asthme: {
    2: [null, 'niveau de preuve A', 'GINA'],
  },
  'hypertension-arterielle': {
    2: ['forte', 'classe I', ESC_HTA],
    3: ['forte', 'classe I', ESC_HTA],
    4: ['forte', 'classe I', ESC_HTA],
  },
  'insuffisance-cardiaque': {
    2: ['forte', 'classe I, niveau C', ESC_IC],
    3: ['forte', 'classe I, niveau A', ESC_IC],
    4: ['forte', 'classe I, niveau A', ESC_IC],
  },
  'diabete-type-2': {
    3: [null, 'niveau de preuve A', 'ADA — Standards of Care'],
  },
  drepanocytose: {
    2: ['forte', 'qualité des preuves élevée', 'NHLBI 2014'],
    3: ['forte', 'qualité des preuves élevée', 'NHLBI 2014'],
  },
  'diarrhee-aigue-enfant': {
    2: ['forte', null, 'OMS'],
    3: ['forte', null, 'OMS'],
  },
  'pneumonie-enfant': {
    2: ['forte', null, 'OMS — Pocket book / PCIME'],
    4: ['forte', null, 'OMS'],
  },
  'sepsis-neonatal': {
    2: ['forte', null, 'OMS 2024 (infections bactériennes graves du nourrisson)'],
  },
  'pre-eclampsie-severe': {
    2: ['forte', 'qualité des preuves élevée', 'OMS 2011 (pré-éclampsie)'],
    3: ['forte', null, 'OMS 2018 (HTA sévère de la grossesse)'],
    5: ['forte', null, 'OMS (corticothérapie anténatale)'],
  },
  'hemorragie-post-partum': {
    1: ['forte', 'qualité des preuves modérée', 'OMS 2012 (HPP)'],
    3: ['forte', 'acide tranexamique : qualité des preuves modérée', 'OMS 2017 (acide tranexamique)'],
  },
  'peritonite-aigue': {
    2: ['forte', null, 'Surviving Sepsis Campaign 2021'],
    3: ['bonne_pratique', 'déclaration de bonne pratique', 'Surviving Sepsis Campaign 2021'],
  },
  'etat-de-mal-epileptique': {
    2: [null, 'niveau de preuve A', 'American Epilepsy Society 2016'],
  },
  avc: {
    3: ['forte', 'qualité des preuves élevée (0–4 h 30)', 'ESO 2021 (thrombolyse)'],
    4: ['forte', 'classe I, niveau A', 'AHA/ASA 2019'],
  },
};
