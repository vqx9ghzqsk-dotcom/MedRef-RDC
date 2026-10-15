-- Lot E : avis argumentés sur les produits, les molécules et les traitements des fiches.
-- Circuit : soumis → examen par les pairs (commentaires et votes de professionnels vérifiés, sans
-- modification de l'avis) → modération (publié, complément demandé ou rejeté, avec motif).

CREATE TABLE avis (
  id                  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  auteur_id           INT UNSIGNED NULL,
  cible_type          ENUM('produit', 'molecule', 'pathologie') NOT NULL,
  medicament_id       INT UNSIGNED NULL,
  molecule_id         INT UNSIGNED NULL,
  pathologie_id       INT UNSIGNED NULL,
  numero_lot          VARCHAR(80) NULL,
  type                ENUM('efficacite', 'tolerance', 'qualite', 'disponibilite_prix', 'donnee_scientifique') NOT NULL,
  -- Effet indésirable grave ou produit suspect : rappel de la notification officielle de pharmacovigilance
  grave               TINYINT(1) NOT NULL DEFAULT 0,
  titre               VARCHAR(190) NOT NULL,
  description         TEXT NOT NULL,
  nb_patients         INT UNSIGNED NULL,
  duree_observation   VARCHAR(120) NULL,
  population          VARCHAR(190) NULL,
  liens_interets      VARCHAR(1000) NOT NULL,
  statut              ENUM('soumis', 'complement_demande', 'publie', 'rejete', 'retire') NOT NULL DEFAULT 'soumis',
  motif_moderation    TEXT NULL,
  modere_par          INT UNSIGNED NULL,
  modere_le           DATETIME NULL,
  created_at          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_avis_statut (statut, created_at),
  KEY idx_avis_medicament (medicament_id, statut),
  KEY idx_avis_molecule (molecule_id, statut),
  KEY idx_avis_pathologie (pathologie_id, statut),
  CONSTRAINT fk_avis_auteur FOREIGN KEY (auteur_id) REFERENCES users (id) ON DELETE SET NULL,
  CONSTRAINT fk_avis_medicament FOREIGN KEY (medicament_id) REFERENCES medicaments (id) ON DELETE CASCADE,
  CONSTRAINT fk_avis_molecule FOREIGN KEY (molecule_id) REFERENCES molecules (id) ON DELETE CASCADE,
  CONSTRAINT fk_avis_pathologie FOREIGN KEY (pathologie_id) REFERENCES pathologies (id) ON DELETE CASCADE,
  CONSTRAINT fk_avis_modere_par FOREIGN KEY (modere_par) REFERENCES users (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sources (obligatoires pour une donnée scientifique)
CREATE TABLE avis_sources (
  id      INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  avis_id INT UNSIGNED NOT NULL,
  type    ENUM('etude', 'recommandation', 'notice', 'autre') NOT NULL,
  titre   VARCHAR(500) NOT NULL,
  url     VARCHAR(500) NULL,
  ordre   SMALLINT NOT NULL DEFAULT 0,
  CONSTRAINT fk_avis_sources_avis FOREIGN KEY (avis_id) REFERENCES avis (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Photos (emballage, numéro de lot) : fichiers dans medias/avis, nom aléatoire
CREATE TABLE avis_photos (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  avis_id    INT UNSIGNED NOT NULL,
  fichier    VARCHAR(120) NOT NULL,
  legende    VARCHAR(190) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_avis_photos_avis FOREIGN KEY (avis_id) REFERENCES avis (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Examen par les pairs : un vote « élément pertinent et sourcé » par professionnel vérifié
CREATE TABLE avis_votes (
  avis_id    INT UNSIGNED NOT NULL,
  user_id    INT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (avis_id, user_id),
  CONSTRAINT fk_avis_votes_avis FOREIGN KEY (avis_id) REFERENCES avis (id) ON DELETE CASCADE,
  CONSTRAINT fk_avis_votes_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE avis_commentaires (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  avis_id    INT UNSIGNED NOT NULL,
  auteur_id  INT UNSIGNED NULL,
  texte      TEXT NOT NULL,
  masque     TINYINT(1) NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_avis_commentaires (avis_id, created_at),
  CONSTRAINT fk_avis_commentaires_avis FOREIGN KEY (avis_id) REFERENCES avis (id) ON DELETE CASCADE,
  CONSTRAINT fk_avis_commentaires_auteur FOREIGN KEY (auteur_id) REFERENCES users (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Signalements (publicité, critique nominative, contenu inexact…) d'un avis ou d'un commentaire
CREATE TABLE avis_signalements (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  avis_id        INT UNSIGNED NOT NULL,
  commentaire_id INT UNSIGNED NULL,
  auteur_id      INT UNSIGNED NULL,
  motif          VARCHAR(500) NOT NULL,
  traite_le      DATETIME NULL,
  traite_par     INT UNSIGNED NULL,
  created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_avis_signalements (traite_le, created_at),
  CONSTRAINT fk_avis_signalements_avis FOREIGN KEY (avis_id) REFERENCES avis (id) ON DELETE CASCADE,
  CONSTRAINT fk_avis_signalements_commentaire FOREIGN KEY (commentaire_id)
    REFERENCES avis_commentaires (id) ON DELETE CASCADE,
  CONSTRAINT fk_avis_signalements_auteur FOREIGN KEY (auteur_id) REFERENCES users (id) ON DELETE SET NULL,
  CONSTRAINT fk_avis_signalements_traite_par FOREIGN KEY (traite_par) REFERENCES users (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Paramètres saisis par l'administrateur (ex. coordonnées officielles de pharmacovigilance)
CREATE TABLE parametres (
  cle        VARCHAR(80) PRIMARY KEY,
  valeur     TEXT NULL,
  updated_by INT UNSIGNED NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_parametres_user FOREIGN KEY (updated_by) REFERENCES users (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE modifications
  MODIFY entite ENUM('pathologie', 'molecule', 'medicament', 'glossaire', 'syndrome', 'actualite', 'avis') NOT NULL;
