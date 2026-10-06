-- Historique complet : état de la fiche avant et après chaque enregistrement
ALTER TABLE modifications
  ADD COLUMN avant JSON NULL AFTER resume,
  ADD COLUMN apres JSON NULL AFTER avant;

-- Date à laquelle une fiche validée doit être relue
ALTER TABLE pathologies
  ADD COLUMN revision_le DATE NULL AFTER valide_le,
  ADD KEY idx_pathologies_revision (revision_le);

-- Fiches déjà validées : révision dans 24 mois
UPDATE pathologies
   SET revision_le = DATE_ADD(DATE(valide_le), INTERVAL 24 MONTH)
 WHERE statut = 'valide' AND valide_le IS NOT NULL;

-- Sécurité des comptes : révocation des sessions et blocage après échecs répétés
ALTER TABLE users
  ADD COLUMN token_version INT UNSIGNED NOT NULL DEFAULT 0 AFTER role,
  ADD COLUMN echecs_connexion SMALLINT UNSIGNED NOT NULL DEFAULT 0 AFTER token_version,
  ADD COLUMN bloque_jusqu_a DATETIME NULL AFTER echecs_connexion;
