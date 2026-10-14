-- Lot A : profils professionnels, vérification des comptes, mot de passe oublié.

-- Profil professionnel (choisi à l'inscription) et lieu d'exercice.
-- Les comptes existants gardent un profil vide : « Mon compte » invite à le compléter.
ALTER TABLE users
  ADD COLUMN profil ENUM('medecin_generaliste', 'medecin_specialiste', 'infirmier', 'sage_femme',
                         'pharmacien', 'etudiant') NULL AFTER role,
  ADD COLUMN specialite_exercee VARCHAR(120) NULL AFTER profil,
  ADD COLUMN structure_type ENUM('centre_sante', 'hopital_general', 'hopital_tertiaire', 'clinique_privee',
                                 'pharmacie', 'universite', 'autre') NULL AFTER specialite_exercee,
  ADD COLUMN structure_nom VARCHAR(190) NULL AFTER structure_type,
  ADD COLUMN province VARCHAR(60) NULL AFTER structure_nom,
  -- Vérification du statut professionnel par un administrateur (numéro d'ordre saisi après l'inscription)
  ADD COLUMN ordre_professionnel ENUM('medecins', 'pharmaciens', 'infirmiers', 'sages_femmes') NULL
    AFTER province,
  ADD COLUMN numero_ordre VARCHAR(60) NULL AFTER ordre_professionnel,
  ADD COLUMN verification ENUM('non_demandee', 'en_attente', 'verifie', 'refuse') NOT NULL
    DEFAULT 'non_demandee' AFTER numero_ordre,
  ADD COLUMN verification_demandee_le DATETIME NULL AFTER verification,
  ADD COLUMN verifie_par INT UNSIGNED NULL AFTER verification_demandee_le,
  ADD COLUMN verifie_le DATETIME NULL AFTER verifie_par,
  ADD COLUMN verification_motif VARCHAR(300) NULL AFTER verifie_le,
  ADD KEY idx_users_verification (verification, verification_demandee_le),
  ADD CONSTRAINT fk_users_verifie_par FOREIGN KEY (verifie_par) REFERENCES users (id) ON DELETE SET NULL;

-- Liens de réinitialisation du mot de passe : seul le hachage (SHA-256) du jeton est conservé.
CREATE TABLE reinitialisations_mot_de_passe (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id     INT UNSIGNED NOT NULL,
  jeton_hash  CHAR(64) NULL,
  -- 'email' : lien envoyé par e-mail ; 'admin' : lien généré par un administrateur ;
  -- 'demande' : demande en attente d'un administrateur (pas de serveur d'e-mail)
  canal       ENUM('email', 'admin', 'demande') NOT NULL,
  expire_le   DATETIME NULL,
  utilise_le  DATETIME NULL,
  cree_par    INT UNSIGNED NULL,
  traite_le   DATETIME NULL,
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_reinit_jeton (jeton_hash),
  KEY idx_reinit_user (user_id, created_at),
  KEY idx_reinit_demandes (canal, traite_le),
  CONSTRAINT fk_reinit_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
  CONSTRAINT fk_reinit_cree_par FOREIGN KEY (cree_par) REFERENCES users (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
