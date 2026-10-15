-- Lot D : actualités de la page d'accueil (alertes sanitaires, pharmacovigilance et retraits de lots,
-- changements de protocoles nationaux, innovations), rédigées par les éditeurs avec leur source
-- obligatoire, publiées par un administrateur. Les nouveautés produits et fiches sont calculées
-- à partir du catalogue et des fiches : rien à saisir pour elles.

CREATE TABLE actualites (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  type          ENUM('alerte_sanitaire', 'pharmacovigilance', 'protocole', 'innovation', 'information') NOT NULL,
  titre         VARCHAR(190) NOT NULL,
  resume        TEXT NOT NULL,
  -- Source obligatoire (ministère, OMS, ACOREP, publication…) ; lien facultatif
  source_titre  VARCHAR(255) NOT NULL,
  source_url    VARCHAR(500) NULL,
  -- Zone concernée (province, zone de santé) pour les alertes ; vide = tout le pays
  zone          VARCHAR(190) NULL,
  pathologie_id INT UNSIGNED NULL,
  molecule_id   INT UNSIGNED NULL,
  publie_le     DATE NOT NULL,
  -- Une alerte expirée disparaît de l'accueil (reste consultable dans l'administration)
  expire_le     DATE NULL,
  statut        ENUM('brouillon', 'publie', 'archive') NOT NULL DEFAULT 'brouillon',
  auteur_id     INT UNSIGNED NULL,
  publie_par    INT UNSIGNED NULL,
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_actualites_accueil (statut, publie_le),
  CONSTRAINT fk_actualites_pathologie FOREIGN KEY (pathologie_id) REFERENCES pathologies (id) ON DELETE SET NULL,
  CONSTRAINT fk_actualites_molecule FOREIGN KEY (molecule_id) REFERENCES molecules (id) ON DELETE SET NULL,
  CONSTRAINT fk_actualites_auteur FOREIGN KEY (auteur_id) REFERENCES users (id) ON DELETE SET NULL,
  CONSTRAINT fk_actualites_publie_par FOREIGN KEY (publie_par) REFERENCES users (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Historique des actualités dans le journal des modifications
ALTER TABLE modifications
  MODIFY entite ENUM('pathologie', 'molecule', 'medicament', 'glossaire', 'syndrome', 'actualite') NOT NULL;
