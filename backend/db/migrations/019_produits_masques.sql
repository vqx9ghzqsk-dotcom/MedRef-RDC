-- Produit masqué : une firme peut n'être retenue que pour certaines marques (celles qui servent
-- aux fiches de l'application) ; ses autres produits restent en base sans être affichés.
-- Recalculé à chaque application de la sélection (seed-data/operateurs-retenus.js, champ `marques`).

ALTER TABLE medicaments
  ADD COLUMN masque TINYINT(1) NOT NULL DEFAULT 0 AFTER operateur_id;
