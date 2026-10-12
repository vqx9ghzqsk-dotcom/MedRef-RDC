'use strict';

/**
 * Posologies corrigées lors de l'audit des posologies (2026-10-11) pour les fiches de molécules
 * créées à partir du répertoire ACOREP. La fiche MedRef reçoit le texte corrigé ; la fiche
 * externe « ACOREP » conserve le texte du document source. Rédigé par IA : à valider.
 */

module.exports = {
  'serum-immunoglobuline-antitetanique':
    'Prophylaxie (plaie à risque, vaccination incomplète ou inconnue) : 250 UI IM (500 UI si plaie très souillée ou datant de plus de 24 h). Traitement du tétanos : 500 UI chez le nouveau-né ; 1 500 à 6 000 UI IM chez l’enfant et l’adulte selon les protocoles (MSF, OMS). Injecter dans un site différent du vaccin.',
  phenylephrine:
    'Décongestionnant : 10 mg toutes les 4 h per os ; gouttes nasales 0,25 %. Priapisme ischémique : injection intracaverneuse de 100 à 200 µg (solution diluée à 100–500 µg/mL) toutes les 3 à 5 min, maximum 1 mg en 1 h, sous surveillance de la pression artérielle et du pouls.',
  promethazine:
    'Adulte 25-75 mg/j ; IM 25-50 mg ; enfant de plus de 2 ans : 0,5 mg/kg/dose. Contre-indiquée avant 2 ans (dépression respiratoire).',
  flucloxacilline: '250-500 mg 4x/j (oral) ; IV 1-2 g toutes les 6 h ; enfant 50-100 mg/kg/j en 4 prises.',
  fluconazole:
    '150 mg dose unique (candidose vaginale) ; 200-400 mg/j (systémique) ; cryptococcose : 1 200 mg/j en induction (avec amphotéricine B et flucytosine), 800 mg/j en consolidation pendant 8 semaines, puis 200 mg/j en entretien.',
  griseofulvine:
    'Adulte 500-1000 mg/j ; enfant 20-25 mg/kg/j (forme microcristalline) en 1-2 prises, au repas gras ; 6-8 semaines (teigne).',
  'chlorhexidine-gluconate':
    'Solution 5 % à diluer selon l’usage (ex. 0,05 % pour les plaies) ; cordon ombilical : digluconate de chlorhexidine 7,1 % (gel ou solution, soit 4 % de chlorhexidine), 1 application/j pendant 7 jours.',
};
