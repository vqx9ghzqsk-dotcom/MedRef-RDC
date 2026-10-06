/**
 * Calcul d'une dose selon le poids à partir d'une posologie structurée
 * ({ dose_par_kg, dose_max, unite }). Fonction pure, sans dépendance UI.
 *
 * Renvoie null si la posologie n'est pas pondérale ou si le poids est invalide,
 * sinon { valeur, brute, plafonnee, unite, affichage }.
 */

const round = (n) => {
  if (n >= 100) return Math.round(n);
  if (n >= 10) return Math.round(n * 10) / 10;
  return Math.round(n * 100) / 100;
};

export const POIDS_MIN = 0.3;
export const POIDS_MAX = 300;

export function parsePoids(raw) {
  if (raw === undefined || raw === null || raw === '') return null;
  const n = typeof raw === 'number' ? raw : Number(String(raw).replace(',', '.'));
  if (!Number.isFinite(n) || n < POIDS_MIN || n > POIDS_MAX) return null;
  return n;
}

export function calculerDose(posologie, poidsBrut) {
  const poids = parsePoids(poidsBrut);
  const parKg = posologie?.dose_par_kg;
  if (poids === null || parKg === null || parKg === undefined || !(parKg > 0)) return null;
  const brute = poids * parKg;
  const max = posologie.dose_max;
  const plafonnee = Boolean(max) && brute > max;
  const valeur = round(plafonnee ? max : brute);
  const unite = posologie.unite || 'mg';
  return {
    valeur,
    brute: round(brute),
    plafonnee,
    unite,
    affichage: `${valeur.toLocaleString('fr-FR')} ${unite}`,
  };
}
