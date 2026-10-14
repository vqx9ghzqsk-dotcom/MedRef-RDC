'use strict';

/**
 * Profils professionnels, lieux d'exercice et ordres (lot A). Le profil décrit le métier
 * de l'utilisateur ; il est distinct du rôle technique (user, medecin, admin).
 */

const PROFILS = {
  medecin_generaliste: 'Médecin généraliste',
  medecin_specialiste: 'Médecin spécialiste',
  infirmier: 'Infirmier(ère)',
  sage_femme: 'Sage-femme',
  pharmacien: 'Pharmacien(ne)',
  etudiant: 'Étudiant(e) / interne',
};

const STRUCTURES = {
  centre_sante: 'Centre de santé',
  hopital_general: 'Hôpital général de référence',
  hopital_tertiaire: 'Hôpital tertiaire / universitaire',
  clinique_privee: 'Clinique privée',
  pharmacie: 'Pharmacie',
  universite: 'Université / institut',
  autre: 'Autre',
};

const ORDRES = {
  medecins: 'Ordre des médecins',
  pharmaciens: 'Ordre des pharmaciens',
  infirmiers: 'Ordre des infirmiers',
  sages_femmes: 'Ordre des sages-femmes',
};

/** Ordre attendu pour chaque profil (l'étudiant n'en a pas). */
const ORDRE_DU_PROFIL = {
  medecin_generaliste: 'medecins',
  medecin_specialiste: 'medecins',
  infirmier: 'infirmiers',
  sage_femme: 'sages_femmes',
  pharmacien: 'pharmaciens',
};

const PROVINCES = [
  'Bas-Uélé',
  'Équateur',
  'Haut-Katanga',
  'Haut-Lomami',
  'Haut-Uélé',
  'Ituri',
  'Kasaï',
  'Kasaï-Central',
  'Kasaï-Oriental',
  'Kinshasa',
  'Kongo-Central',
  'Kwango',
  'Kwilu',
  'Lomami',
  'Lualaba',
  'Mai-Ndombe',
  'Maniema',
  'Mongala',
  'Nord-Kivu',
  'Nord-Ubangi',
  'Sankuru',
  'Sud-Kivu',
  'Sud-Ubangi',
  'Tanganyika',
  'Tshopo',
  'Tshuapa',
];

module.exports = { PROFILS, STRUCTURES, ORDRES, ORDRE_DU_PROFIL, PROVINCES };
