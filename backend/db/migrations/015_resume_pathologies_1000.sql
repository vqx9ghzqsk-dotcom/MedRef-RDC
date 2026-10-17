-- Résumé des fiches : 500 caractères ne suffisaient pas. Sur une base sans mode strict, MySQL
-- tronquait en silence les résumés plus longs (302 fiches coupées au milieu d'un mot). La limite
-- passe à 1 000 caractères, comme dans l'éditeur d'administration.

ALTER TABLE pathologies
  MODIFY resume VARCHAR(1000) NULL;
