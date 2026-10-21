-- Veille automatique des sources officielles (OMS, Africa CDC, ministère de la Santé, ACOREP, NICE,
-- ESC, PubMed…) : les actualités relevées sont publiées directement, traduites en français, avec le
-- lien vers la page d'origine. Les actualités saisies à la main gardent leur circuit habituel.

ALTER TABLE actualites
  ADD COLUMN origine ENUM('manuelle', 'veille') NOT NULL DEFAULT 'manuelle' AFTER statut,
  -- Identifiant de la source dans la configuration de la veille (oms-fr, ministere-sante…)
  ADD COLUMN veille_source VARCHAR(60) NULL AFTER origine,
  -- Empreinte SHA-1 de l'adresse d'origine : une même page n'est jamais publiée deux fois
  ADD COLUMN url_cle CHAR(40) NULL AFTER veille_source,
  ADD COLUMN titre_original VARCHAR(500) NULL AFTER url_cle,
  ADD COLUMN langue_originale VARCHAR(10) NULL AFTER titre_original,
  -- 1 = titre et résumé traduits automatiquement
  ADD COLUMN traduction_auto TINYINT(1) NOT NULL DEFAULT 0 AFTER langue_originale,
  ADD UNIQUE KEY uq_actualites_url (url_cle);

-- État de chaque source : dernière relève, dernière erreur, volumes (affiché dans l'administration)
CREATE TABLE veille_sources (
  slug            VARCHAR(60) PRIMARY KEY,
  derniere_releve DATETIME NULL,
  dernier_succes  DATETIME NULL,
  derniere_erreur VARCHAR(500) NULL,
  items_lus       INT UNSIGNED NOT NULL DEFAULT 0,
  items_publies   INT UNSIGNED NOT NULL DEFAULT 0,
  items_ecartes   INT UNSIGNED NOT NULL DEFAULT 0,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
