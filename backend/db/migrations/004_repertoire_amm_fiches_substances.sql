-- Répertoire des autorisations de mise sur le marché (ACOREP) et fiches de substances
-- issues de documents externes.

-- Fiche molécule : rubrique « Précautions », groupe thérapeutique et provenance.
-- fiche_a_valider = 1 : fiche importée (rédigée par IA), à relire par un médecin.
ALTER TABLE molecules
  ADD COLUMN groupe_therapeutique VARCHAR(120) NULL AFTER classe_id,
  ADD COLUMN precautions TEXT NULL AFTER surveillance,
  ADD COLUMN fiche_source VARCHAR(255) NULL AFTER precautions,
  ADD COLUMN fiche_a_valider TINYINT(1) NOT NULL DEFAULT 0 AFTER fiche_source,
  ADD KEY idx_molecules_groupe (groupe_therapeutique);

-- Fiche d'une substance telle que publiée par un document externe, conservée intacte
-- (y compris pour les molécules qui avaient déjà une fiche MedRef).
CREATE TABLE molecule_fiches_externes (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  molecule_id   INT UNSIGNED NOT NULL,
  source        VARCHAR(120) NOT NULL,
  nom           VARCHAR(190) NOT NULL,
  classe        VARCHAR(190),
  groupe        VARCHAR(120),
  mecanisme     TEXT,
  indications   TEXT,
  posologie     TEXT,
  precautions   TEXT,
  presente_chez VARCHAR(1000),
  a_valider     TINYINT(1) NOT NULL DEFAULT 1,
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_fiches_externes (molecule_id, source),
  CONSTRAINT fk_fiches_externes_molecule FOREIGN KEY (molecule_id)
    REFERENCES molecules (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Une ligne du répertoire = un dosage ou un conditionnement enregistré, rattaché au
-- produit MedRef correspondant (produit de catalogue existant ou produit créé).
CREATE TABLE autorisations_amm (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  source        VARCHAR(60) NOT NULL,
  ref           VARCHAR(120) NOT NULL,
  operateur_id  INT UNSIGNED NULL,
  medicament_id INT UNSIGNED NULL,
  marque        VARCHAR(255) NOT NULL,
  dci           VARCHAR(500),
  dosage        VARCHAR(190),
  forme         VARCHAR(190),
  classe        VARCHAR(190),
  provenance    VARCHAR(120),
  numero        VARCHAR(190),
  -- « Complète » : toutes les substances du produit ont une fiche dans le document
  fiche         VARCHAR(30),
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_amm_ref (ref),
  KEY idx_amm_medicament (medicament_id),
  KEY idx_amm_numero (numero),
  CONSTRAINT fk_amm_operateur FOREIGN KEY (operateur_id)
    REFERENCES operateurs (id) ON DELETE SET NULL,
  CONSTRAINT fk_amm_medicament FOREIGN KEY (medicament_id)
    REFERENCES medicaments (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Synthèse du répertoire par firme (y compris les firmes sans AMM trouvée)
CREATE TABLE repertoire_amm_firmes (
  id                 INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  source             VARCHAR(60) NOT NULL,
  firme              VARCHAR(190) NOT NULL,
  operateur_id       INT UNSIGNED NULL,
  amm_fabricant      SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  amm_importateur    SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  lignes             SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  produits_distincts SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  UNIQUE KEY uq_repertoire_firme (source, firme),
  CONSTRAINT fk_repertoire_operateur FOREIGN KEY (operateur_id)
    REFERENCES operateurs (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
