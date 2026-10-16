-- Contrôle de conformité du contenu aux protocoles de prise en charge.
-- Un rapport par fiche (pathologie ou molécule) : protocoles consultés, points
-- vérifiés, écarts corrigés et points laissés à l'arbitrage du médecin. Il prépare
-- la relecture : il ne vaut pas validation (le statut de la fiche ne change pas).
-- Les corrections elles-mêmes sont tracées dans `modifications` (version avant / après).
CREATE TABLE controles_conformite (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  entite      ENUM('pathologie', 'molecule') NOT NULL,
  entite_id   INT UNSIGNED NOT NULL,
  lot         VARCHAR(40) NOT NULL,
  controle_le DATE NOT NULL,
  protocoles  TEXT NULL,
  verifie     TEXT NULL,
  corrige     TEXT NULL,
  a_arbitrer  TEXT NULL,
  nb_corrections SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  updated_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_controles_entite (entite, entite_id),
  KEY idx_controles_lot (lot)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
