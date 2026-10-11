-- Répertoire complet des AMM de l'ACOREP : tous les opérateurs, produits non
-- médicamenteux (cosmétiques, dispositifs, compléments) et conditionnements.

-- Nature du produit ; « sans_objet » : pas de principe actif à lier (cosmétique, dispositif)
ALTER TABLE medicaments
  ADD COLUMN nature ENUM('medicament', 'complement', 'dispositif', 'cosmetique', 'autre')
    NOT NULL DEFAULT 'medicament' AFTER dci,
  MODIFY liaison ENUM('verifiee', 'auto', 'partielle', 'aucune', 'sans_objet') NOT NULL DEFAULT 'verifiee',
  ADD KEY idx_medicaments_nature (nature);

-- liste : firme de la liste des 61 ; autre : autre opérateur du répertoire
ALTER TABLE autorisations_amm
  ADD COLUMN section ENUM('liste', 'autre') NOT NULL DEFAULT 'liste' AFTER source,
  MODIFY dosage VARCHAR(400),
  MODIFY forme VARCHAR(255),
  ADD COLUMN conditionnement VARCHAR(255) NULL AFTER forme;

-- Nombre d'AMM du répertoire contenant la substance
ALTER TABLE molecule_fiches_externes
  ADD COLUMN nb_amm SMALLINT UNSIGNED NULL AFTER presente_chez;

-- liste : synthèse des firmes de la liste ; fabricant : tableau de tous les opérateurs
ALTER TABLE repertoire_amm_firmes
  DROP INDEX uq_repertoire_firme,
  ADD COLUMN section ENUM('liste', 'fabricant') NOT NULL DEFAULT 'liste' AFTER source,
  MODIFY firme VARCHAR(255) NOT NULL,
  ADD COLUMN firme_liste VARCHAR(190) NULL AFTER firme,
  ADD COLUMN pays VARCHAR(255) NULL,
  ADD COLUMN importateurs VARCHAR(500) NULL,
  ADD UNIQUE KEY uq_repertoire_firme (source, section, firme);
