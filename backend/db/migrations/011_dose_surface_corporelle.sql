-- Lot C : dose rapportée à la surface corporelle (mg/m²), pour les chimiothérapies et certains
-- traitements pédiatriques. Même base (par prise ou par jour) et même dose maximale que la dose par kg ;
-- la fiche de prescription calcule la surface corporelle (Mosteller) à partir du poids et de la taille.

ALTER TABLE molecule_posologies
  ADD COLUMN dose_par_m2 DECIMAL(10, 3) NULL AFTER dose_par_kg;
