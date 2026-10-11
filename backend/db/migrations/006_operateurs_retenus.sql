-- Sélection des opérateurs affichés dans l'application : les autres restent en base
-- (produits, AMM, historique) mais ne sont plus montrés. Liste dans seed-data/operateurs-retenus.js.
ALTER TABLE operateurs
  ADD COLUMN visible TINYINT(1) NOT NULL DEFAULT 1 AFTER type,
  ADD KEY idx_operateurs_visible (visible);
