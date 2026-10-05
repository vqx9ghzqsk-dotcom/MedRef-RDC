-- =====================================================================
-- MedRef RDC — schéma MySQL 8 (utf8mb4)
-- Principe : un seul contenu médical, plusieurs portes d'entrée.
-- Hiérarchie : departements → specialites → pathologies
-- Liaisons N:N : pathologie_urgences, pathologie_symptomes, pathologie_examens,
--   molecule_pathologies, medicament_molecules, pathologie_scores, pathologie_sources
-- Contenu structuré des onglets : pathologie_differentiels, pathologie_principes,
--   complications (traitement + surveillance)
-- =====================================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS prescriptions;
DROP TABLE IF EXISTS pathologie_sources;
DROP TABLE IF EXISTS sources;
DROP TABLE IF EXISTS pathologie_scores;
DROP TABLE IF EXISTS scores;
DROP TABLE IF EXISTS complications;
DROP TABLE IF EXISTS pathologie_principes;
DROP TABLE IF EXISTS pathologie_differentiels;
DROP TABLE IF EXISTS pathologie_examens;
DROP TABLE IF EXISTS examens;
DROP TABLE IF EXISTS medicament_pathologies;
DROP TABLE IF EXISTS molecule_pathologies;
DROP TABLE IF EXISTS medicament_molecules;
DROP TABLE IF EXISTS medicaments;
DROP TABLE IF EXISTS molecules;
DROP TABLE IF EXISTS classes_pharmacologiques;
DROP TABLE IF EXISTS operateurs;
DROP TABLE IF EXISTS pathologie_symptomes;
DROP TABLE IF EXISTS symptomes;
DROP TABLE IF EXISTS pathologie_urgences;
DROP TABLE IF EXISTS urgences;
DROP TABLE IF EXISTS pathologies;
DROP TABLE IF EXISTS specialites;
DROP TABLE IF EXISTS departements;
DROP TABLE IF EXISTS users;

SET FOREIGN_KEY_CHECKS = 1;

-- ---------------------------------------------------------------------
-- Utilisateurs
-- ---------------------------------------------------------------------
CREATE TABLE users (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email         VARCHAR(190) NOT NULL,
  password_hash VARCHAR(100) NOT NULL,
  nom           VARCHAR(120) NOT NULL,
  role          ENUM('user', 'medecin', 'admin') NOT NULL DEFAULT 'user',
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Catalogue : Département → Spécialité → Pathologie
-- ---------------------------------------------------------------------
CREATE TABLE departements (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom         VARCHAR(120) NOT NULL,
  slug        VARCHAR(120) NOT NULL,
  description TEXT,
  icone       VARCHAR(16),
  ordre       SMALLINT NOT NULL DEFAULT 0,
  UNIQUE KEY uq_departements_nom (nom),
  UNIQUE KEY uq_departements_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE specialites (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  departement_id INT UNSIGNED NOT NULL,
  nom            VARCHAR(120) NOT NULL,
  slug           VARCHAR(140) NOT NULL,
  description    TEXT,
  ordre          SMALLINT NOT NULL DEFAULT 0,
  UNIQUE KEY uq_specialites_dep_nom (departement_id, nom),
  UNIQUE KEY uq_specialites_slug (slug),
  CONSTRAINT fk_specialites_departement FOREIGN KEY (departement_id)
    REFERENCES departements (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE pathologies (
  id               INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  specialite_id    INT UNSIGNED NOT NULL,
  nom              VARCHAR(190) NOT NULL,
  slug             VARCHAR(190) NOT NULL,
  resume           VARCHAR(500),
  -- Onglet 1 : Définition / physiopathologie
  definition       TEXT,
  physiopathologie TEXT,
  -- Onglet 2 : Diagnostic clinique (le bilan paraclinique est dans pathologie_examens,
  --            les différentiels dans pathologie_differentiels)
  diagnostic       TEXT,
  -- Onglet 3 : Étiologies, terrain, facteurs déclenchants
  etiologies       TEXT,
  -- Onglet 4 : Thérapeutique — notes complémentaires (les principes sont dans pathologie_principes,
  --            le traitement des complications dans complications)
  therapeutique    TEXT,
  -- Onglet 5 : Évolution, pronostic, critères de guérison (surveillance des complications : complications)
  evolution        TEXT,
  created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_pathologies_specialite_nom (specialite_id, nom),
  UNIQUE KEY uq_pathologies_slug (slug),
  FULLTEXT KEY ft_pathologies (nom, definition),
  CONSTRAINT fk_pathologies_specialite FOREIGN KEY (specialite_id)
    REFERENCES specialites (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Urgences (section indépendante, liée N:N aux pathologies)
-- ---------------------------------------------------------------------
CREATE TABLE urgences (
  id               INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom              VARCHAR(190) NOT NULL,
  slug             VARCHAR(190) NOT NULL,
  categorie        ENUM('medicale', 'chirurgicale', 'gyneco-obstetricale', 'pediatrique') NOT NULL,
  description      TEXT,
  signes_gravite   TEXT,
  conduite_abcde   TEXT,
  quand_transferer TEXT,
  UNIQUE KEY uq_urgences_nom (nom),
  UNIQUE KEY uq_urgences_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE pathologie_urgences (
  pathologie_id INT UNSIGNED NOT NULL,
  urgence_id    INT UNSIGNED NOT NULL,
  PRIMARY KEY (pathologie_id, urgence_id),
  KEY idx_pu_urgence (urgence_id),
  CONSTRAINT fk_pu_pathologie FOREIGN KEY (pathologie_id)
    REFERENCES pathologies (id) ON DELETE CASCADE,
  CONSTRAINT fk_pu_urgence FOREIGN KEY (urgence_id)
    REFERENCES urgences (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Symptômes (entrée par symptôme)
-- ---------------------------------------------------------------------
CREATE TABLE symptomes (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom         VARCHAR(190) NOT NULL,
  slug        VARCHAR(190) NOT NULL,
  description TEXT,
  UNIQUE KEY uq_symptomes_nom (nom),
  UNIQUE KEY uq_symptomes_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE pathologie_symptomes (
  pathologie_id INT UNSIGNED NOT NULL,
  symptome_id   INT UNSIGNED NOT NULL,
  frequence     ENUM('tres_frequent', 'frequent', 'occasionnel', 'rare') NOT NULL DEFAULT 'frequent',
  PRIMARY KEY (pathologie_id, symptome_id),
  KEY idx_ps_symptome (symptome_id),
  CONSTRAINT fk_ps_pathologie FOREIGN KEY (pathologie_id)
    REFERENCES pathologies (id) ON DELETE CASCADE,
  CONSTRAINT fk_ps_symptome FOREIGN KEY (symptome_id)
    REFERENCES symptomes (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Médicaments : classe → molécule (DCI, fiche pharmacologique) → produit
-- commercial d'un opérateur. Un produit contient une ou plusieurs molécules
-- (associations à dose fixe) : medicament_molecules.
-- Les pathologies sont liées aux MOLÉCULES ; les produits en découlent.
-- ---------------------------------------------------------------------
CREATE TABLE operateurs (
  id       INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom      VARCHAR(190) NOT NULL,
  type     ENUM('fabricant', 'importateur', 'distributeur', 'programme') NOT NULL DEFAULT 'fabricant',
  pays     VARCHAR(80),
  site_web VARCHAR(255),
  UNIQUE KEY uq_operateurs_nom (nom)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE classes_pharmacologiques (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom         VARCHAR(190) NOT NULL,
  description TEXT,
  UNIQUE KEY uq_classes_nom (nom)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Fiche pharmacologique de référence de la molécule (indépendante du fabricant)
CREATE TABLE molecules (
  id                    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  dci                   VARCHAR(190) NOT NULL,
  slug                  VARCHAR(190) NOT NULL,
  classe_id             INT UNSIGNED NULL,
  mecanisme             TEXT,
  pharmacocinetique     TEXT,
  indications           TEXT,
  posologie             TEXT,
  contre_indications    TEXT,
  effets_indesirables   TEXT,
  interactions          TEXT,
  grossesse_allaitement TEXT,
  surveillance          TEXT,
  UNIQUE KEY uq_molecules_dci (dci),
  UNIQUE KEY uq_molecules_slug (slug),
  FULLTEXT KEY ft_molecules (dci, indications),
  CONSTRAINT fk_molecules_classe FOREIGN KEY (classe_id)
    REFERENCES classes_pharmacologiques (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Produit commercial d'un opérateur. Les champs cliniques NULL héritent de la
-- fiche de la molécule ; ils sont renseignés quand le produit a une posologie
-- ou des précautions propres (association à dose fixe, forme pédiatrique…).
CREATE TABLE medicaments (
  id                  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom_commercial      VARCHAR(190) NOT NULL,
  -- Libellé de la composition (« Artéméther + luméfantrine »), dérivé des molécules
  dci                 VARCHAR(190) NOT NULL,
  classe_id           INT UNSIGNED NULL,
  operateur_id        INT UNSIGNED NULL,
  forme               VARCHAR(120),
  dosage              VARCHAR(120),
  presentation        VARCHAR(255),
  conservation        VARCHAR(255),
  indication          TEXT,
  posologie           TEXT,
  contre_indications  TEXT,
  effets_indesirables TEXT,
  interactions        TEXT,
  photo_url           VARCHAR(255),
  disponible_rdc      TINYINT(1) NOT NULL DEFAULT 0,
  prix_indicatif_cdf  DECIMAL(12, 2) NULL,
  sources_text        TEXT,
  created_at          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_medicaments_nom (nom_commercial),
  KEY idx_medicaments_dci (dci),
  FULLTEXT KEY ft_medicaments (nom_commercial, dci, indication),
  CONSTRAINT fk_medicaments_classe FOREIGN KEY (classe_id)
    REFERENCES classes_pharmacologiques (id) ON DELETE SET NULL,
  CONSTRAINT fk_medicaments_operateur FOREIGN KEY (operateur_id)
    REFERENCES operateurs (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE medicament_molecules (
  medicament_id INT UNSIGNED NOT NULL,
  molecule_id   INT UNSIGNED NOT NULL,
  dosage        VARCHAR(120),
  ordre         SMALLINT NOT NULL DEFAULT 0,
  PRIMARY KEY (medicament_id, molecule_id),
  KEY idx_mm_molecule (molecule_id),
  CONSTRAINT fk_mm_medicament FOREIGN KEY (medicament_id)
    REFERENCES medicaments (id) ON DELETE CASCADE,
  CONSTRAINT fk_mm_molecule FOREIGN KEY (molecule_id)
    REFERENCES molecules (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE molecule_pathologies (
  molecule_id   INT UNSIGNED NOT NULL,
  pathologie_id INT UNSIGNED NOT NULL,
  ligne         ENUM('premiere', 'deuxieme', 'alternative', 'adjuvant') NOT NULL DEFAULT 'premiere',
  -- Place dans la stratégie (« relais oral », « forme grave », « enfant < 5 ans »…)
  contexte      VARCHAR(300),
  PRIMARY KEY (molecule_id, pathologie_id),
  KEY idx_molp_pathologie (pathologie_id),
  CONSTRAINT fk_molp_molecule FOREIGN KEY (molecule_id)
    REFERENCES molecules (id) ON DELETE CASCADE,
  CONSTRAINT fk_molp_pathologie FOREIGN KEY (pathologie_id)
    REFERENCES pathologies (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Examens complémentaires : référentiel partagé (un examen et ses valeurs
-- normales universelles), interprété ensuite dans chaque pathologie
-- ---------------------------------------------------------------------
CREATE TABLE examens (
  id               INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom              VARCHAR(190) NOT NULL,
  slug             VARCHAR(190) NOT NULL,
  type             ENUM('biologie', 'imagerie', 'exploration') NOT NULL,
  description      TEXT,
  valeurs_normales TEXT,
  UNIQUE KEY uq_examens_nom (nom),
  UNIQUE KEY uq_examens_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE pathologie_examens (
  pathologie_id  INT UNSIGNED NOT NULL,
  examen_id      INT UNSIGNED NOT NULL,
  categorie      ENUM('premiere_intention', 'deuxieme_intention', 'confirmation', 'presomption',
                      'etiologique', 'gravite', 'pretherapeutique', 'suivi') NOT NULL,
  -- Résultat attendu / interprétation dans CETTE pathologie
  interpretation TEXT,
  ordre          SMALLINT NOT NULL DEFAULT 0,
  PRIMARY KEY (pathologie_id, examen_id, categorie),
  KEY idx_pe_examen (examen_id),
  CONSTRAINT fk_pe_pathologie FOREIGN KEY (pathologie_id)
    REFERENCES pathologies (id) ON DELETE CASCADE,
  CONSTRAINT fk_pe_examen FOREIGN KEY (examen_id)
    REFERENCES examens (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Diagnostics différentiels : lien vers une fiche existante (differentiel_id)
-- ou simple libellé si la fiche n'est pas encore rédigée
-- ---------------------------------------------------------------------
CREATE TABLE pathologie_differentiels (
  id                   INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  pathologie_id        INT UNSIGNED NOT NULL,
  differentiel_id      INT UNSIGNED NULL,
  nom                  VARCHAR(190) NOT NULL,
  elements_distinctifs TEXT,
  ordre                SMALLINT NOT NULL DEFAULT 0,
  KEY idx_pd_pathologie (pathologie_id, ordre),
  CONSTRAINT fk_pd_pathologie FOREIGN KEY (pathologie_id)
    REFERENCES pathologies (id) ON DELETE CASCADE,
  CONSTRAINT fk_pd_differentiel FOREIGN KEY (differentiel_id)
    REFERENCES pathologies (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Principes de prise en charge (sommaire), chacun suivi de ses détails
-- ---------------------------------------------------------------------
CREATE TABLE pathologie_principes (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  pathologie_id INT UNSIGNED NOT NULL,
  ordre         SMALLINT NOT NULL DEFAULT 0,
  titre         VARCHAR(190) NOT NULL,
  objectif      VARCHAR(500),
  details       TEXT,
  KEY idx_pp_pathologie (pathologie_id, ordre),
  CONSTRAINT fk_pp_pathologie FOREIGN KEY (pathologie_id)
    REFERENCES pathologies (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Complications : traitement (onglet Thérapeutique) et surveillance clinique /
-- paraclinique (onglet Évolution). fiche_id = la complication a sa propre fiche.
-- ---------------------------------------------------------------------
CREATE TABLE complications (
  id                        INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  pathologie_id             INT UNSIGNED NOT NULL,
  ordre                     SMALLINT NOT NULL DEFAULT 0,
  nom                       VARCHAR(190) NOT NULL,
  description               TEXT,
  traitement                TEXT,
  surveillance_clinique     TEXT,
  surveillance_paraclinique TEXT,
  fiche_id                  INT UNSIGNED NULL,
  KEY idx_compl_pathologie (pathologie_id, ordre),
  CONSTRAINT fk_compl_pathologie FOREIGN KEY (pathologie_id)
    REFERENCES pathologies (id) ON DELETE CASCADE,
  CONSTRAINT fk_compl_fiche FOREIGN KEY (fiche_id)
    REFERENCES pathologies (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Scores, classifications et calculatrices
-- code : identifiant de la calculatrice implémentée côté client
--        (NULL = score descriptif, sans calcul automatique)
-- ---------------------------------------------------------------------
CREATE TABLE scores (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom            VARCHAR(190) NOT NULL,
  slug           VARCHAR(190) NOT NULL,
  code           VARCHAR(60) NULL,
  type           ENUM('score', 'calculatrice', 'classification') NOT NULL DEFAULT 'score',
  description    TEXT,
  interpretation TEXT,
  reference      VARCHAR(500),
  UNIQUE KEY uq_scores_slug (slug),
  UNIQUE KEY uq_scores_code (code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE pathologie_scores (
  pathologie_id INT UNSIGNED NOT NULL,
  score_id      INT UNSIGNED NOT NULL,
  PRIMARY KEY (pathologie_id, score_id),
  KEY idx_psc_score (score_id),
  CONSTRAINT fk_psc_pathologie FOREIGN KEY (pathologie_id)
    REFERENCES pathologies (id) ON DELETE CASCADE,
  CONSTRAINT fk_psc_score FOREIGN KEY (score_id)
    REFERENCES scores (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Sources (hiérarchie en 4 niveaux)
--  1 = OMS + sources nationales RDC ; 2 = sociétés savantes ;
--  3 = revues / méta-analyses ; 4 = ouvrages de référence
-- departement_id NULL = source transversale (globale)
-- ---------------------------------------------------------------------
CREATE TABLE sources (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  titre          VARCHAR(300) NOT NULL,
  organisation   VARCHAR(190),
  niveau         TINYINT UNSIGNED NOT NULL,
  type           ENUM('guide', 'recommandation', 'revue', 'ouvrage', 'base_de_donnees') NOT NULL DEFAULT 'guide',
  annee          SMALLINT UNSIGNED NULL,
  url            VARCHAR(500),
  -- Domaine couvert (« Cardiologie », « Obstétrique »…), pour le regroupement
  domaine        VARCHAR(120),
  departement_id INT UNSIGNED NULL,
  UNIQUE KEY uq_sources_titre (titre),
  KEY idx_sources_niveau (niveau),
  CONSTRAINT chk_sources_niveau CHECK (niveau BETWEEN 1 AND 4),
  CONSTRAINT fk_sources_departement FOREIGN KEY (departement_id)
    REFERENCES departements (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE pathologie_sources (
  pathologie_id INT UNSIGNED NOT NULL,
  source_id     INT UNSIGNED NOT NULL,
  PRIMARY KEY (pathologie_id, source_id),
  KEY idx_psrc_source (source_id),
  CONSTRAINT fk_psrc_pathologie FOREIGN KEY (pathologie_id)
    REFERENCES pathologies (id) ON DELETE CASCADE,
  CONSTRAINT fk_psrc_source FOREIGN KEY (source_id)
    REFERENCES sources (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Prescriptions (créées hors ligne, synchronisées via /api/prescriptions/sync)
-- id = UUID généré côté client → UPSERT idempotent
-- deleted_at = suppression logique (tombstone) pour la synchronisation
-- ---------------------------------------------------------------------
CREATE TABLE prescriptions (
  id                CHAR(36) NOT NULL PRIMARY KEY,
  user_id           INT UNSIGNED NOT NULL,
  patient_label     VARCHAR(190),
  contenu           JSON NOT NULL,
  client_updated_at DATETIME(3) NOT NULL,
  deleted_at        DATETIME(3) NULL,
  created_at        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_prescriptions_user (user_id, client_updated_at),
  CONSTRAINT fk_prescriptions_user FOREIGN KEY (user_id)
    REFERENCES users (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
