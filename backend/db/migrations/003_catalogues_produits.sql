-- Produits issus des catalogues de firmes : un même nom commercial peut exister en
-- plusieurs dosages ou chez plusieurs firmes ; l'unicité passe par la référence catalogue.
ALTER TABLE medicaments
  DROP INDEX uq_medicaments_nom,
  ADD KEY idx_medicaments_nom (nom_commercial),
  MODIFY dci VARCHAR(500) NOT NULL,
  ADD COLUMN catalogue_ref VARCHAR(120) NULL AFTER sources_text,
  ADD COLUMN catalogue_classe VARCHAR(190) NULL AFTER catalogue_ref,
  ADD COLUMN catalogue_sous_classe VARCHAR(190) NULL AFTER catalogue_classe,
  ADD COLUMN composition_texte VARCHAR(500) NULL AFTER catalogue_sous_classe,
  ADD COLUMN mecanisme TEXT NULL AFTER composition_texte,
  ADD COLUMN forme_categorie VARCHAR(80) NULL AFTER mecanisme,
  ADD COLUMN pediatrique TINYINT(1) NOT NULL DEFAULT 0 AFTER forme_categorie,
  -- Nombre de principes actifs du produit (association si > 1), même ceux absents de MedRef
  ADD COLUMN nb_composants TINYINT UNSIGNED NULL AFTER pediatrique,
  -- verifiee : liens molécules contrôlés ; auto : tous trouvés automatiquement ;
  -- partielle : une partie des principes actifs seulement ; aucune : à lier dans /admin
  ADD COLUMN liaison ENUM('verifiee', 'auto', 'partielle', 'aucune') NOT NULL DEFAULT 'verifiee' AFTER nb_composants,
  ADD UNIQUE KEY uq_medicaments_catalogue (catalogue_ref),
  ADD KEY idx_medicaments_liaison (liaison),
  ADD KEY idx_medicaments_forme (forme_categorie);

-- Origine de chaque lien produit → molécule
ALTER TABLE medicament_molecules
  ADD COLUMN origine ENUM('manuel', 'auto') NOT NULL DEFAULT 'manuel';

-- Firmes : référence au catalogue d'origine
ALTER TABLE operateurs
  ADD COLUMN slug VARCHAR(190) NULL AFTER nom,
  ADD COLUMN source_catalogue VARCHAR(255) NULL;
