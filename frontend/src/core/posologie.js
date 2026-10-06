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

import { normaliserNombre } from './saisie.js';

export const POIDS_MIN = 0.3;
export const POIDS_MAX = 300;

export function parsePoids(raw) {
  const n = normaliserNombre(raw);
  if (n === null) return null;
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

/**
 * Cohérence entre le poids saisi et la population choisie : renvoie une liste
 * d'alertes { niveau: 'attention' | 'danger', message } (vide si tout est cohérent).
 */
export function alertesPoids(population, poidsBrut) {
  const poids = parsePoids(poidsBrut);
  if (poids === null) return [];
  const alertes = [];
  const attention = (message) => alertes.push({ niveau: 'attention', message });
  if (population === 'nouveau_ne') {
    if (poids > 6)
      attention('Poids inhabituel pour un nouveau-né (plus de 6 kg) : vérifier la population choisie.');
    if (poids < 0.5)
      attention('Poids très faible (prématuré extrême) : posologie à adapter avec un avis spécialisé.');
  } else if (population === 'enfant') {
    if (poids < 2.5) attention('Poids de nouveau-né : vérifier l’onglet « Nouveau-né ».');
    if (poids > 50) {
      attention(
        'Au-delà de 50 kg, la dose calculée peut dépasser la dose adulte : ne jamais dépasser la dose adulte.',
      );
    }
  } else if (population === 'adulte' || population === 'grossesse') {
    if (poids < 35) {
      attention(
        'Poids très bas pour un adulte : vérifier le poids saisi (en kg) ou utiliser l’onglet « Enfant ».',
      );
    }
    if (poids > 150) attention('Poids élevé : vérifier si la dose doit être calculée sur le poids idéal.');
  }
  return alertes;
}

/** Alertes propres à une ligne de posologie pour le poids saisi. */
export function alertesPosologie(posologie, poidsBrut) {
  const alertes = [];
  if (posologie?.securite === 'contre_indique') {
    alertes.push({
      niveau: 'danger',
      message: 'Contre-indiqué dans cette population : ne pas administrer sans avis spécialisé.',
    });
    return alertes;
  }
  const dose = calculerDose(posologie, poidsBrut);
  if (!dose) return alertes;
  if (dose.plafonnee) {
    alertes.push({
      niveau: 'attention',
      message: `Dose plafonnée à la dose maximale : le calcul au poids donnait ${dose.brute.toLocaleString('fr-FR')} ${dose.unite}.`,
    });
  } else if (!posologie.dose_max && parsePoids(poidsBrut) >= 40) {
    alertes.push({
      niveau: 'attention',
      message: 'Aucune dose maximale renseignée pour cette posologie : vérifier la dose adulte maximale.',
    });
  }
  return alertes;
}
