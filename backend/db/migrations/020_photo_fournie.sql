-- Photo fournie par le Dr Mingalu (boîte réelle) : le produit est affiché avec sa photo même s'il
-- vient d'un catalogue constitué par l'IA (ajoute_par_ia) et que son AMM n'est pas encore relevée.
-- Posé par attribuerPhotos (seed-data/photos-produits.js, liste PHOTOS) quand la photo du produit
-- est celle de la liste.

ALTER TABLE medicaments
  ADD COLUMN photo_fournie TINYINT(1) NOT NULL DEFAULT 0 AFTER photo_url;
