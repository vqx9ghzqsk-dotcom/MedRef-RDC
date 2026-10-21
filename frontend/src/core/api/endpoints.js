/**
 * Points d'accès typés de l'API MedRef RDC. Chaque fonction renvoie le champ
 * `data` (ou la réponse complète quand elle porte d'autres informations).
 */
export function createMedRefApi(client) {
  const data = (p) => p.then((r) => r.data);
  const enc = encodeURIComponent;

  return {
    // Auth
    register: (payload) => client.post('/api/auth/register', payload),
    login: (payload) => client.post('/api/auth/login', payload),
    me: () => client.get('/api/auth/me').then((r) => r.user),
    changePassword: (payload) => client.post('/api/auth/password', payload),
    updateProfil: (payload) => client.put('/api/auth/profil', payload).then((r) => r.user),
    demanderVerification: (payload) => client.post('/api/auth/verification', payload).then((r) => r.user),
    motDePasseOublie: (email) => client.post('/api/auth/mot-de-passe-oublie', { email }),
    reinitialiserMotDePasse: (jeton, nouveau) =>
      client.post('/api/auth/reinitialiser-mot-de-passe', { jeton, nouveau }),

    // Catalogue
    departements: () => data(client.get('/api/departements')),
    departement: (slug) => data(client.get(`/api/departements/${enc(slug)}`)),
    specialite: (slug) => data(client.get(`/api/specialites/${enc(slug)}`)),
    pathologies: () => data(client.get('/api/pathologies')),
    accueil: () => data(client.get('/api/accueil')),
    accueilPourMoi: () => data(client.get('/api/accueil/pour-moi')),
    /** Archive publique : { data, page, par_page, total }. */
    actualites: (filtres = {}) => client.get('/api/actualites', filtres),

    // Avis sur les produits et traitements (lot E)
    avisPublics: (cibleType, cible) => data(client.get('/api/avis', { cible_type: cibleType, cible })),
    avis: (id) => data(client.get(`/api/avis/${enc(id)}`)),
    mesAvis: () => data(client.get('/api/avis/mes')),
    avisExamen: () => data(client.get('/api/avis/examen')),
    creerAvis: (payload) => data(client.post('/api/avis', payload)),
    modifierAvis: (id, payload) => data(client.put(`/api/avis/${enc(id)}`, payload)),
    retirerAvis: (id) => data(client.post(`/api/avis/${enc(id)}/retirer`, {})),
    photoAvis: (id, dataUrl, legende) =>
      data(client.post(`/api/avis/${enc(id)}/photos`, { data: dataUrl, legende })),
    voterAvis: (id) => data(client.post(`/api/avis/${enc(id)}/vote`, {})),
    commenterAvis: (id, texte) => data(client.post(`/api/avis/${enc(id)}/commentaires`, { texte })),
    signalerAvis: (id, motif, commentaireId) =>
      client.post(`/api/avis/${enc(id)}/signalements`, { motif, commentaire_id: commentaireId || undefined }),
    pharmacovigilance: () => data(client.get('/api/parametres/pharmacovigilance')),
    pathologie: (slug) => data(client.get(`/api/pathologies/${enc(slug)}`)),

    // Portes d'entrée transversales
    urgences: (categorie) => data(client.get('/api/urgences', { categorie })),
    urgence: (slug) => data(client.get(`/api/urgences/${enc(slug)}`)),
    symptomes: () => data(client.get('/api/symptomes')),
    symptome: (slug) => data(client.get(`/api/symptomes/${enc(slug)}`)),
    scores: () => data(client.get('/api/scores')),
    score: (slug) => data(client.get(`/api/scores/${enc(slug)}`)),
    // { data, total, limite } : la liste est limitée, le total permet d'inviter à affiner
    medicaments: (filtres) => client.get('/api/medicaments', filtres),
    medicamentFiltres: () => data(client.get('/api/medicaments/filtres')),
    medicamentDomaines: () => data(client.get('/api/medicaments/domaines')),
    suggestionsProduits: (q) => data(client.get('/api/medicaments/suggestions', { q })),
    medicament: (id) => data(client.get(`/api/medicaments/${enc(id)}`)),
    molecules: () => data(client.get('/api/molecules')),
    molecule: (slug) => data(client.get(`/api/molecules/${enc(slug)}`)),
    examens: () => data(client.get('/api/examens')),
    examen: (slug) => data(client.get(`/api/examens/${enc(slug)}`)),
    sources: (filtres) => data(client.get('/api/sources', filtres)),
    recherche: (q) => client.get('/api/recherche', { q }),
    glossaire: () => data(client.get('/api/glossaire')),
    syndromes: () => data(client.get('/api/syndromes')),
    syndrome: (slug) => data(client.get(`/api/syndromes/${enc(slug)}`)),
    horsLigne: () => data(client.get('/api/hors-ligne')),
    signalerErreur: (payload) => client.post('/api/journal/erreur', payload),

    // Administration (rôles admin et medecin)
    adminResume: () => data(client.get('/api/admin/resume')),
    adminPathologie: (id) => data(client.get(`/api/admin/pathologies/${enc(id)}`)),
    adminSavePathologie: (id, payload) => client.put(`/api/admin/pathologies/${enc(id)}`, payload),
    adminValiderPathologies: (ids, confirme) =>
      client.post('/api/admin/pathologies/validation', { ids, confirme }),
    adminMolecule: (id) => data(client.get(`/api/admin/molecules/${enc(id)}`)),
    adminSaveMolecule: (id, payload) => client.put(`/api/admin/molecules/${enc(id)}`, payload),
    adminMedicament: (id) => data(client.get(`/api/admin/medicaments/${enc(id)}`)),
    adminSaveMedicament: (id, payload) => client.put(`/api/admin/medicaments/${enc(id)}`, payload),
    adminComptes: () => data(client.get('/api/admin/comptes')),
    adminAvis: (statut) => data(client.get('/api/admin/avis', statut ? { statut } : undefined)),
    adminModererAvis: (id, decision, motif) =>
      data(client.post(`/api/admin/avis/${enc(id)}/moderation`, { decision, motif })),
    adminSignalements: () => data(client.get('/api/admin/signalements')),
    adminTraiterSignalement: (id, masquerCommentaire) =>
      client.post(`/api/admin/signalements/${enc(id)}/traiter`, { masquer_commentaire: masquerCommentaire }),
    adminSavePharmacovigilance: (contact) =>
      data(client.put('/api/admin/parametres/pharmacovigilance', { contact })),
    adminActualites: () => data(client.get('/api/admin/actualites')),
    adminVeille: () => data(client.get('/api/admin/veille')),
    adminRelancerVeille: () => data(client.post('/api/admin/veille/relancer', {})),
    adminActualite: (id) => data(client.get(`/api/admin/actualites/${enc(id)}`)),
    adminSaveActualite: (id, payload) =>
      id
        ? client.put(`/api/admin/actualites/${enc(id)}`, payload)
        : client.post('/api/admin/actualites', payload),
    adminDecisionVerification: (id, decision, motif) =>
      client.post(`/api/admin/comptes/${enc(id)}/verification`, { decision, motif }),
    adminLienReinitialisation: (id) => client.post(`/api/admin/comptes/${enc(id)}/lien-reinitialisation`, {}),
    adminVersion: (id) => data(client.get(`/api/admin/modifications/${enc(id)}`)),
    adminSemiologie: () => data(client.get('/api/admin/semiologie')),
    adminCatalogue: (filtres) => data(client.get('/api/admin/catalogue', filtres)),
    adminRelierCatalogue: () => client.post('/api/admin/catalogue/relier', {}),
    adminCreerMolecule: (payload) => client.post('/api/admin/molecules', payload),
    adminProduitsMolecule: (id) => data(client.get(`/api/admin/molecules/${enc(id)}/produits`)),
    adminLierProduit: (moleculeId, medicamentId) =>
      client.post(`/api/admin/molecules/${enc(moleculeId)}/produits`, { medicament_id: medicamentId }),
    adminDelierProduit: (moleculeId, medicamentId) =>
      client.del(`/api/admin/molecules/${enc(moleculeId)}/produits/${enc(medicamentId)}`),
    adminTerme: (id) => data(client.get(`/api/admin/glossaire/${enc(id)}`)),
    adminSaveTerme: (id, payload) =>
      id
        ? client.put(`/api/admin/glossaire/${enc(id)}`, payload)
        : client.post('/api/admin/glossaire', payload),
    adminSyndrome: (id) => data(client.get(`/api/admin/syndromes/${enc(id)}`)),
    adminSaveSyndrome: (id, payload) =>
      id
        ? client.put(`/api/admin/syndromes/${enc(id)}`, payload)
        : client.post('/api/admin/syndromes', payload),

    // Prescriptions
    prescriptions: () => data(client.get('/api/prescriptions')),
    syncPrescriptions: (prescriptions) => client.post('/api/prescriptions/sync', { prescriptions }),
    deletePrescription: (id) => client.del(`/api/prescriptions/${enc(id)}`),
  };
}
