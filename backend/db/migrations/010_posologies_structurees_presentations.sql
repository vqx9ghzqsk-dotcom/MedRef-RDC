-- Lot B : posologies structurées (base de la dose, fréquence, durées) et présentations par DCI.
-- Ces champs servent au calcul automatique de la fiche de prescription (lot C). Le texte existant
-- (dose_texte, frequence, duree) reste la référence affichée ; la structure le complète.

ALTER TABLE molecule_posologies
  -- La dose par kg (et la dose maximale) s'entendent par prise ou par jour (à répartir)
  ADD COLUMN dose_base ENUM('par_prise', 'par_jour') NULL AFTER dose_max,
  -- Fréquence structurée : nombre de prises par jour, intervalle, dose unique, perfusion ou schéma particulier
  ADD COLUMN frequence_type ENUM('prises_par_jour', 'intervalle', 'dose_unique', 'perfusion', 'schema') NULL
    AFTER frequence,
  ADD COLUMN prises_par_jour TINYINT UNSIGNED NULL AFTER frequence_type,
  ADD COLUMN intervalle_heures DECIMAL(5, 2) NULL AFTER prises_par_jour,
  -- Durées proposées au prescripteur : [{ min, max, unite, contexte, defaut }]
  -- unite : heures | jours | semaines | mois | doses
  ADD COLUMN durees JSON NULL AFTER duree,
  -- Structure produite automatiquement (conversion du texte) : à relire par un médecin
  ADD COLUMN structure_a_valider TINYINT(1) NOT NULL DEFAULT 0 AFTER remarque;

-- Présentations standard d'une molécule (indépendantes des marques) : servent à convertir une dose
-- en nombre de comprimés, en mL ou en ampoules. Ex. 125 mg par 5 mL, 500 mg par comprimé sécable.
CREATE TABLE molecule_presentations (
  id                       INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  molecule_id              INT UNSIGNED NOT NULL,
  forme                    ENUM('comprime', 'gelule', 'suspension_buvable', 'sirop', 'solution_buvable',
                                'gouttes_buvables', 'sachet', 'injectable', 'perfusion', 'suppositoire',
                                'ovule', 'creme_pommade', 'collyre', 'inhalation', 'autre') NOT NULL,
  voie                     VARCHAR(60) NULL,
  quantite                 DECIMAL(12, 3) NOT NULL,
  unite                    VARCHAR(20) NOT NULL DEFAULT 'mg',
  par_quantite             DECIMAL(10, 3) NOT NULL DEFAULT 1,
  par_unite                ENUM('comprime', 'gelule', 'ml', 'sachet', 'ampoule', 'flacon', 'suppositoire',
                                'ovule', 'dose', 'g') NOT NULL,
  secable                  TINYINT(1) NOT NULL DEFAULT 0,
  conditionnement_quantite DECIMAL(10, 2) NULL,
  conditionnement_unite    VARCHAR(30) NULL,
  libelle                  VARCHAR(190) NULL,
  source                   VARCHAR(120) NULL,
  a_valider                TINYINT(1) NOT NULL DEFAULT 1,
  ordre                    SMALLINT NOT NULL DEFAULT 0,
  UNIQUE KEY uq_presentation (molecule_id, forme, quantite, unite, par_quantite, par_unite),
  KEY idx_presentation_molecule (molecule_id, ordre),
  CONSTRAINT fk_presentation_molecule FOREIGN KEY (molecule_id) REFERENCES molecules (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
