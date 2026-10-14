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
