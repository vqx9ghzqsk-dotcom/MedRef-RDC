-- Nom d'affichage d'un opérateur (« Janssen (Johnson & Johnson) » plutôt que le libellé brut
-- du répertoire) ; le nom d'origine reste celui qui sert aux imports.
ALTER TABLE operateurs
  ADD COLUMN nom_affiche VARCHAR(190) NULL AFTER nom;
