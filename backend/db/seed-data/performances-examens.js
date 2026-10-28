/**
 * Performances diagnostiques des examens courants : [sensibilité %, spécificité %] pour la
 * maladie que l'examen confirme ou oriente dans les fiches. Valeurs moyennes de la littérature
 * (OMS, Cochrane, méta-analyses), arrondies, en conditions de terrain quand elles sont connues.
 * Elles pondèrent un résultat par son rapport de vraisemblance (RV+ = Se / (1 − Sp),
 * RV− = (1 − Se) / Sp). À VALIDER par le Dr Mingalu ; examen absent : pondération forfaitaire.
 */

const PERFORMANCES = {
  // Paludisme
  'tdr-paludisme': [95, 95],
  'goutte-epaisse': [90, 98],
  'frottis-sanguin': [75, 98],
  // Tuberculose
  'xpert-mtb-rif': [85, 98],
  bacilloscopie: [55, 98],
  'tb-lam': [42, 91],
  'idr-tuberculine': [70, 70],
  // VIH, IST, hépatites
  'tdr-vih': [99, 99],
  'pcr-vih-nourrisson': [98, 99],
  'serologie-syphilis': [90, 95],
  aghbs: [98, 99],
  // Infections
  'crag-cryptocoque': [99, 99],
  lcr: [95, 90],
  hemocultures: [50, 95],
  ecbu: [95, 90],
  'bandelette-urinaire': [75, 80],
  'prelevement-de-gorge': [86, 95],
  'tdr-cholera': [90, 70],
  'test-covid': [70, 99],
  'test-grippe': [60, 98],
  'pcr-mpox': [98, 99],
  'pcr-ebola': [99, 99],
  'tdr-peste': [95, 90],
  'serologie-leptospirose': [70, 90],
  'serologie-amibienne': [95, 90],
  'test-helicobacter': [94, 97],
  'examen-parasitologique-selles': [60, 99],
  'oeufs-schistosomes-urines': [60, 99],
  'recherche-microfilaires': [70, 99],
  'depistage-tha': [90, 95],
  'parasitologie-tha': [80, 99],
  'frottis-lepre': [50, 99],
  'pcr-buruli': [85, 99],
  crp: [75, 70],
  procalcitonine: [77, 79],
  // Hématologie
  'test-rapide-drepanocytose': [98, 99],
  'electrophorese-hb': [99, 99],
  'test-g6pd': [95, 95],
  // Cardio-vasculaire, thrombose
  'd-dimeres': [95, 40],
  troponine: [90, 85],
  bnp: [95, 70],
  // Digestif, chirurgie
  lipasemie: [80, 95],
  'echographie-abdominale': [80, 90],
  // Grossesse
  'beta-hcg': [99, 99],
  'echographie-pelvienne': [80, 95],
  'test-rupture-membranes': [95, 95],
  // Imagerie thoracique
  'radiographie-thoracique': [75, 85],
};

module.exports = { PERFORMANCES };
