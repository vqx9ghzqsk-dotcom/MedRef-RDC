-- Aide au diagnostic : calibration du moteur et signalement d'erreurs.
-- Aucune donnée de patient : ni identité, ni signes, ni compte de l'auteur pour les diagnostics
-- retenus ; seulement la fiche retenue, sa place parmi les hypothèses proposées, la tranche
-- d'âge, le niveau de soins et le jour.

CREATE TABLE diagnostic_retenus (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  pathologie_id  INT UNSIGNED NULL,
  -- Première hypothèse proposée par le moteur
  premiere_id    INT UNSIGNED NULL,
  -- Rang de la fiche retenue parmi les hypothèses (0 : absente de la liste)
  rang           TINYINT UNSIGNED NOT NULL DEFAULT 0,
  nb_hypotheses  TINYINT UNSIGNED NOT NULL DEFAULT 0,
  tranche_age    VARCHAR(10) NULL,
  niveau         VARCHAR(30) NULL,
  version_moteur VARCHAR(20) NULL,
  cree_le        DATE NOT NULL,
  KEY idx_retenus_pathologie (pathologie_id),
  KEY idx_retenus_date (cree_le),
  CONSTRAINT fk_retenus_pathologie FOREIGN KEY (pathologie_id) REFERENCES pathologies (id) ON DELETE SET NULL,
  CONSTRAINT fk_retenus_premiere FOREIGN KEY (premiere_id) REFERENCES pathologies (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Signalements des professionnels : hypothèse manquante ou inadaptée, fiche ou traitement erroné
CREATE TABLE diagnostic_signalements (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  type           ENUM('hypothese_manquante', 'hypothese_inadaptee', 'fiche', 'traitement', 'autre') NOT NULL,
  pathologie_id  INT UNSIGNED NULL,
  message        VARCHAR(1000) NOT NULL,
  statut         ENUM('nouveau', 'traite') NOT NULL DEFAULT 'nouveau',
  user_id        INT UNSIGNED NULL,
  cree_le        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  traite_le      DATETIME NULL,
  KEY idx_signalements_statut (statut, cree_le),
  CONSTRAINT fk_diag_signal_pathologie FOREIGN KEY (pathologie_id) REFERENCES pathologies (id) ON DELETE SET NULL,
  CONSTRAINT fk_diag_signal_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
