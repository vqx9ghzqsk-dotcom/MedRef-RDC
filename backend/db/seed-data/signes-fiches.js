/**
 * Signes discriminants des fiches pour l'aide au diagnostic (complètent pathologie_symptomes
 * sans modifier les fiches) :
 *   ajouter   : signes manquants au tableau de la fiche, [nom, fréquence] (la fréquence la plus
 *               haute l'emporte si le signe y est déjà) ;
 *   cles      : signes presque constants : présents, ils renforcent l'hypothèse ; notés absents,
 *               ils l'affaiblissent nettement ;
 *   exclusion : signes qui, présents, rendent l'hypothèse peu probable ;
 *   requiert  : terrain ou contexte sans lequel la fiche est peu probable ({ terrains, contextes }).
 * Rédigé par Claude, par lots (lot 1 : échecs du banc de cas et fiches très fréquentes en RDC).
 * À VALIDER par le Dr Mingalu ; liste lisible : docs/signes-discriminants.md.
 */

const SIGNES_FICHES = {
  // ---------- Paludisme ----------
  'paludisme-simple': {
    ajouter: [
      ['Frissons', 'tres_frequent'],
      ['Sueurs', 'frequent'],
      ['Myalgies', 'frequent'],
      ['Arthralgies', 'occasionnel'],
      ['Nausées', 'frequent'],
    ],
    cles: ['Fièvre'],
    exclusion: ['Troubles de la conscience', 'Convulsions'],
  },
  'paludisme-simple-enfant': {
    ajouter: [
      ['Frissons', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
      ['Diarrhée', 'occasionnel'],
      ['Toux', 'occasionnel'],
    ],
    cles: ['Fièvre'],
    exclusion: ['Troubles de la conscience', 'Convulsions'],
  },
  'paludisme-grave': {
    ajouter: [
      ['Frissons', 'frequent'],
      ['Hypotension', 'occasionnel'],
      ['Urines foncées', 'occasionnel'],
      ['Hémorragies', 'rare'],
    ],
    cles: ['Fièvre'],
  },
  'paludisme-grave-enfant': {
    ajouter: [
      ['Refus de téter', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Somnolence', 'frequent'],
      ['Hypotension', 'occasionnel'],
    ],
    cles: ['Fièvre'],
  },
  'neuropaludisme-adulte': {
    ajouter: [
      ['Vomissements', 'frequent'],
      ['Frissons', 'frequent'],
      ['Pâleur', 'frequent'],
    ],
    cles: ['Fièvre', 'Troubles de la conscience'],
  },
  'paludisme-et-grossesse': {
    ajouter: [
      ['Frissons', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Myalgies', 'frequent'],
      ['Contractions utérines', 'occasionnel'],
      ['Convulsions', 'rare'],
    ],
    cles: ['Fièvre'],
  },

  // ---------- Enfant (PCIME) ----------
  'diarrhee-aigue-enfant': {
    ajouter: [['Pleurs excessifs', 'occasionnel']],
    cles: ['Diarrhée'],
    exclusion: ['Diarrhée sanglante'],
  },
  'pneumonie-enfant': {
    ajouter: [
      ['Geignement expiratoire', 'occasionnel'],
      ['Douleur thoracique', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    cles: ['Toux'],
    exclusion: ['Stridor'],
  },
  'bronchiolite-aigue-nourrisson': {
    ajouter: [
      ['Rhinorrhée', 'tres_frequent'],
      ['Obstruction nasale', 'frequent'],
      ['Dyspnée', 'tres_frequent'],
    ],
    cles: ['Sibilants', 'Toux'],
  },
  'asthme-enfant': {
    ajouter: [['Toux quinteuse', 'occasionnel']],
    cles: ['Sibilants'],
  },
  'otite-moyenne-aigue': {
    ajouter: [
      ['Pleurs excessifs', 'frequent'],
      ['Irritabilité', 'frequent'],
      ['Rhinorrhée', 'frequent'],
      ['Hypoacousie', 'occasionnel'],
    ],
    cles: ['Otalgie'],
  },
  'angine-pharyngite-enfant': {
    ajouter: [
      ['Odynophagie', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
    ],
    cles: ['Mal de gorge'],
    exclusion: ['Stridor'],
  },
  'anemie-enfant': {
    ajouter: [
      ['Tachypnée', 'occasionnel'],
      ['Anorexie', 'occasionnel'],
      ['Œdèmes', 'rare'],
    ],
    cles: ['Pâleur'],
  },
  'malnutrition-aigue-severe': {
    ajouter: [
      ['Retard de croissance', 'frequent'],
      ['Irritabilité', 'frequent'],
      ['Apathie', 'frequent'],
      ['Lésions eczématiformes', 'occasionnel'],
      ['Pâleur', 'frequent'],
    ],
  },

  // ---------- Infections ----------
  'tuberculose-pulmonaire': {
    ajouter: [
      ['Expectoration', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Adénopathies', 'occasionnel'],
    ],
    cles: ['Toux'],
  },
  'tuberculose-enfant': {
    ajouter: [
      ['Asthénie', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Hépatomégalie', 'occasionnel'],
    ],
    cles: ['Toux'],
  },
  'coinfection-tuberculose-vih': {
    requiert: { terrains: ['vih', 'immunodepression'] },
  },
  'tuberculose-pharmacoresistante': {
    requiert: { terrains: ['tuberculose'], contextes: ['tb-contact'] },
  },
  'infection-vih': {
    ajouter: [
      ['Adénopathies', 'frequent'],
      ['Ulcérations buccales', 'frequent'],
      ['Infections récidivantes', 'frequent'],
      ['Éruption cutanée', 'occasionnel'],
    ],
  },
  'fievre-typhoide': {
    ajouter: [
      ['Constipation', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Frissons', 'occasionnel'],
      ['Hépatomégalie', 'occasionnel'],
    ],
    cles: ['Fièvre'],
  },
  'fievre-typhoide-enfant': {
    ajouter: [
      ['Asthénie', 'frequent'],
      ['Constipation', 'occasionnel'],
      ['Hépatomégalie', 'occasionnel'],
      ['Splénomégalie', 'occasionnel'],
    ],
    cles: ['Fièvre'],
  },
  'meningite-bacterienne': {
    ajouter: [
      ['Photophobie', 'frequent'],
      ['Frissons', 'frequent'],
      ['Purpura', 'occasionnel'],
    ],
    cles: ['Fièvre'],
  },
  'hemorragie-meningee': {
    exclusion: ['Fièvre'],
  },
  'infections-sexuellement-transmissibles': {
    ajouter: [
      ['Brûlures mictionnelles', 'frequent'],
      ['Dysurie', 'frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Végétations génitales', 'occasionnel'],
    ],
  },
  'ist-adolescent': {
    ajouter: [['Dysurie', 'frequent']],
  },
  'infections-genitales-basses': {
    ajouter: [['Dyspareunie', 'frequent']],
    cles: ['Leucorrhées'],
  },
  'infections-urinaires-adulte': {
    ajouter: [
      ['Dysurie', 'tres_frequent'],
      ['Douleur pelvienne', 'frequent'],
    ],
  },
  grippe: {
    ajouter: [['Frissons', 'frequent']],
    cles: ['Fièvre'],
  },
  mpox: {
    ajouter: [
      ['Éruption vésiculeuse', 'tres_frequent'],
      ['Ulcérations buccales', 'frequent'],
      ['Ulcération génitale', 'frequent'],
      ['Myalgies', 'frequent'],
      ['Mal de gorge', 'occasionnel'],
    ],
  },
  pyodermites: {
    ajouter: [
      ['Écoulement purulent d’une plaie', 'frequent'],
      ['Comédons et pustules', 'frequent'],
    ],
  },
  gale: {
    ajouter: [['Papules cutanées', 'tres_frequent']],
    cles: ['Prurit'],
  },
  'gale-enfant': {
    ajouter: [
      ['Papules cutanées', 'tres_frequent'],
      ['Irritabilité', 'frequent'],
    ],
    cles: ['Prurit'],
  },
  'dermatophyties-et-pityriasis-versicolor': {
    ajouter: [['Plaques érythémato-squameuses', 'tres_frequent']],
  },
  'conjonctivites-adulte': {
    ajouter: [['Larmoiement', 'frequent']],
    cles: ['Yeux rouges'],
    exclusion: ['Troubles visuels', 'Douleur oculaire'],
  },
  'conjonctivite-enfant': {
    ajouter: [['Larmoiement', 'frequent']],
    cles: ['Yeux rouges'],
    exclusion: ['Troubles visuels'],
  },

  // ---------- Adulte ----------
  'hypertension-arterielle': {
    ajouter: [
      ['Vertiges', 'occasionnel'],
      ['Acouphènes', 'occasionnel'],
      ['Épistaxis', 'occasionnel'],
    ],
  },
  'insuffisance-cardiaque': {
    ajouter: [
      ['Palpitations', 'frequent'],
      ['Hépatomégalie', 'frequent'],
      ['Toux', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Prise de poids', 'occasionnel'],
    ],
    cles: ['Dyspnée'],
  },
  'anemie-ferriprive': {
    ajouter: [
      ['Vertiges', 'frequent'],
      ['Troubles du cycle menstruel', 'occasionnel'],
    ],
    cles: ['Pâleur'],
  },
  'anemie-de-la-grossesse': {
    ajouter: [
      ['Vertiges', 'frequent'],
      ['Céphalées', 'occasionnel'],
    ],
    cles: ['Pâleur'],
  },
  'dyspepsie-et-gastrite': {
    ajouter: [
      ['Nausées', 'frequent'],
      ['Pyrosis', 'frequent'],
    ],
    cles: ['Épigastralgies'],
    exclusion: ['Fièvre', 'Hypotension', 'Hématémèse', 'Méléna', 'Arrêt des matières et des gaz'],
  },
  'perforation-ulcere-gastroduodenal': {
    ajouter: [
      ['Épigastralgies', 'tres_frequent'],
      ['Distension abdominale', 'frequent'],
      ['Arrêt des matières et des gaz', 'frequent'],
      ['Nausées', 'frequent'],
    ],
    cles: ['Douleur abdominale'],
  },
  'cephalee-de-tension': {
    ajouter: [
      ['Anxiété', 'frequent'],
      ['Douleur rachidienne', 'occasionnel'],
    ],
    cles: ['Céphalées'],
    exclusion: [
      'Fièvre',
      'Vomissements',
      'Raideur de nuque',
      'Déficit moteur',
      'Convulsions',
      'Troubles de la conscience',
    ],
  },
  'lombalgie-et-sciatique': {
    ajouter: [['Douleur radiculaire', 'frequent']],
  },
  'carie-dentaire': {
    cles: ['Douleur dentaire'],
  },

  // ---------- Neurologie ----------
  avc: {
    ajouter: [
      ['Paralysie faciale', 'frequent'],
      ['Aphasie', 'frequent'],
      ['Dysarthrie', 'frequent'],
    ],
    cles: ['Déficit moteur'],
    exclusion: ['Fièvre'],
  },
  'avc-ischemique': {
    ajouter: [
      ['Paralysie faciale', 'frequent'],
      ['Aphasie', 'frequent'],
      ['Dysarthrie', 'frequent'],
    ],
    cles: ['Déficit moteur'],
    exclusion: ['Fièvre'],
  },
  'avc-hemorragique': {
    ajouter: [
      ['Paralysie faciale', 'frequent'],
      ['Aphasie', 'frequent'],
      ['Dysarthrie', 'occasionnel'],
    ],
    cles: ['Déficit moteur'],
    exclusion: ['Fièvre'],
  },
  'avc-du-sujet-jeune': {
    requiert: { terrains: ['drepanocytose', 'vih', 'cardiopathie', 'drogues'] },
  },

  // ---------- Femme, grossesse ----------
  'grossesse-extra-uterine': {
    ajouter: [
      ['Douleur pelvienne', 'tres_frequent'],
      ['Hypotension', 'occasionnel'],
      ['Syncope', 'occasionnel'],
      ['Douleur de l’épaule', 'occasionnel'],
    ],
    cles: ['Aménorrhée'],
  },
  'hemorragie-post-partum': {
    ajouter: [
      ['Hypotension', 'frequent'],
      ['Syncope', 'occasionnel'],
      ['Hémorragies', 'tres_frequent'],
    ],
    cles: ['Saignement vaginal'],
  },
  'retention-placentaire': {
    ajouter: [
      ['Pâleur', 'frequent'],
      ['Douleur pelvienne', 'occasionnel'],
    ],
    cles: ['Saignement vaginal'],
  },
  'placenta-praevia': {
    exclusion: ['Douleur abdominale'],
  },
  'saignements-premier-trimestre': {
    cles: ['Saignement vaginal'],
  },
};

module.exports = { SIGNES_FICHES };
