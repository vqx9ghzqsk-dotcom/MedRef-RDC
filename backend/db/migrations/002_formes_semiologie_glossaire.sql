-- Syndromes : regroupements sémiologiques cliquables (syndrome méningé, anémique…)
CREATE TABLE syndromes (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom        VARCHAR(190) NOT NULL,
  slug       VARCHAR(190) NOT NULL,
  definition TEXT,
  elements   TEXT,
  UNIQUE KEY uq_syndromes_nom (nom),
  UNIQUE KEY uq_syndromes_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE syndrome_symptomes (
  syndrome_id INT UNSIGNED NOT NULL,
  symptome_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (syndrome_id, symptome_id),
  CONSTRAINT fk_ss_syndrome FOREIGN KEY (syndrome_id) REFERENCES syndromes (id) ON DELETE CASCADE,
  CONSTRAINT fk_ss_symptome FOREIGN KEY (symptome_id) REFERENCES symptomes (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Formes cliniques d'une pathologie, chacune avec sa sémiologie systématisée et ses étiologies
CREATE TABLE pathologie_formes (
  id                  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  pathologie_id       INT UNSIGNED NOT NULL,
  ordre               SMALLINT NOT NULL DEFAULT 0,
  nom                 VARCHAR(190) NOT NULL,
  type                ENUM('commune', 'gravite', 'terrain', 'topographique', 'evolutive', 'paraclinique',
                           'etiologique') NOT NULL DEFAULT 'commune',
  description         TEXT,
  terrain             TEXT,
  signes_fonctionnels TEXT,
  signes_generaux     TEXT,
  signes_physiques    TEXT,
  paraclinique        TEXT,
  etiologies          TEXT,
  UNIQUE KEY uq_formes_nom (pathologie_id, nom),
  KEY idx_formes_ordre (pathologie_id, ordre),
  CONSTRAINT fk_formes_pathologie FOREIGN KEY (pathologie_id) REFERENCES pathologies (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE forme_syndromes (
  forme_id    INT UNSIGNED NOT NULL,
  syndrome_id INT UNSIGNED NOT NULL,
  ordre       SMALLINT NOT NULL DEFAULT 0,
  PRIMARY KEY (forme_id, syndrome_id),
  KEY idx_fs_syndrome (syndrome_id),
  CONSTRAINT fk_fs_forme FOREIGN KEY (forme_id) REFERENCES pathologie_formes (id) ON DELETE CASCADE,
  CONSTRAINT fk_fs_syndrome FOREIGN KEY (syndrome_id) REFERENCES syndromes (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE forme_examens (
  forme_id       INT UNSIGNED NOT NULL,
  examen_id      INT UNSIGNED NOT NULL,
  interpretation TEXT,
  ordre          SMALLINT NOT NULL DEFAULT 0,
  PRIMARY KEY (forme_id, examen_id),
  KEY idx_fe_examen (examen_id),
  CONSTRAINT fk_fe_forme FOREIGN KEY (forme_id) REFERENCES pathologie_formes (id) ON DELETE CASCADE,
  CONSTRAINT fk_fe_examen FOREIGN KEY (examen_id) REFERENCES examens (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Glossaire sémiologique (définition affichée au survol des termes)
CREATE TABLE glossaire (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  terme       VARCHAR(190) NOT NULL,
  slug        VARCHAR(190) NOT NULL,
  variantes   VARCHAR(500) NULL,
  definition  TEXT NOT NULL,
  syndrome_id INT UNSIGNED NULL,
  UNIQUE KEY uq_glossaire_terme (terme),
  UNIQUE KEY uq_glossaire_slug (slug),
  CONSTRAINT fk_glossaire_syndrome FOREIGN KEY (syndrome_id) REFERENCES syndromes (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Signes d'alerte propres à chaque couple pathologie / urgence (bandeau « Urgence associée »)
ALTER TABLE pathologie_urgences ADD COLUMN signes_alerte VARCHAR(500) NULL;

-- Historique : modifications du glossaire et des syndromes
ALTER TABLE modifications
  MODIFY entite ENUM('pathologie', 'molecule', 'medicament', 'glossaire', 'syndrome') NOT NULL;
