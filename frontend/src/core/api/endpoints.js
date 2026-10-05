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
    medicaments: (filtres) => data(client.get('/api/medicaments', filtres)),
    medicamentFiltres: () => data(client.get('/api/medicaments/filtres')),
    medicament: (id) => data(client.get(`/api/medicaments/${enc(id)}`)),
    molecules: () => data(client.get('/api/molecules')),
    molecule: (slug) => data(client.get(`/api/molecules/${enc(slug)}`)),
    examens: () => data(client.get('/api/examens')),
    examen: (slug) => data(client.get(`/api/examens/${enc(slug)}`)),
    sources: (filtres) => data(client.get('/api/sources', filtres)),
    recherche: (q) => client.get('/api/recherche', { q }),

    // Prescriptions
    prescriptions: () => data(client.get('/api/prescriptions')),
    syncPrescriptions: (prescriptions) => client.post('/api/prescriptions/sync', { prescriptions }),
    deletePrescription: (id) => client.del(`/api/prescriptions/${enc(id)}`),
  };
}
