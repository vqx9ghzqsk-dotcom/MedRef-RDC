-- Produits ajoutés par l'IA (recherches sur internet, pas un document fourni par la firme ou
-- l'ACOREP) : leur photo ne suffit pas à les afficher, il leur faut une AMM en RDC comme aux
-- produits sans photo. Seul le catalogue Organon est dans ce cas à ce jour.
ALTER TABLE medicaments
  ADD COLUMN ajoute_par_ia TINYINT(1) NOT NULL DEFAULT 0 AFTER photo_url;

UPDATE medicaments SET ajoute_par_ia = 1 WHERE catalogue_ref LIKE 'organon-%';
