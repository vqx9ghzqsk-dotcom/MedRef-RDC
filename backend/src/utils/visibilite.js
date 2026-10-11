'use strict';

/**
 * Produit d'un opérateur retenu (operateurs.visible, voir seed-data/operateurs-retenus.js).
 * Les produits des autres opérateurs restent en base mais ne sont pas affichés.
 * Suppose l'alias `m` pour la table medicaments.
 */
const OPERATEUR_VISIBLE =
  '(m.operateur_id IS NULL OR EXISTS (SELECT 1 FROM operateurs ov WHERE ov.id = m.operateur_id AND ov.visible = 1))';

module.exports = { OPERATEUR_VISIBLE };
