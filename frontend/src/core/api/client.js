/**
 * Client HTTP indépendant du DOM et de React (réutilisable tel quel dans
 * Capacitor ou React Native) : `fetch`, le jeton et l'URL de base sont injectés.
 */

export class ApiError extends Error {
  constructor(status, message, details) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }

  get isNetworkError() {
    return this.status === 0;
  }
}

function buildQuery(params) {
  if (!params) return '';
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== '') search.append(key, String(value));
  }
  const qs = search.toString();
  return qs ? `?${qs}` : '';
}

/**
 * @param {object} options
 * @param {string} [options.baseUrl]          ex. "https://api.medref.cd" ou "" (même origine)
 * @param {() => string|null} [options.getToken]
 * @param {typeof fetch} [options.fetchImpl]
 * @param {() => void} [options.onUnauthorized] appelé sur 401 avec jeton (session expirée)
 */
export function createApiClient({
  baseUrl = '',
  getToken = () => null,
  fetchImpl = (...args) => globalThis.fetch(...args),
  onUnauthorized,
} = {}) {
  async function request(method, path, { params, body } = {}) {
    const token = getToken();
    const headers = { Accept: 'application/json' };
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    if (token) headers.Authorization = `Bearer ${token}`;

    let response;
    try {
      response = await fetchImpl(`${baseUrl}${path}${buildQuery(params)}`, {
        method,
        headers,
        body: body !== undefined ? JSON.stringify(body) : undefined,
      });
    } catch {
      throw new ApiError(0, 'Serveur injoignable. Vérifiez votre connexion internet.');
    }

    if (response.status === 204) return null;
    let payload = null;
    try {
      payload = await response.json();
    } catch {
      payload = null;
    }
    if (!response.ok) {
      if (response.status === 401 && token && onUnauthorized) onUnauthorized();
      const message = (payload && payload.error) || `Erreur ${response.status}`;
      throw new ApiError(response.status, message, payload && payload.details);
    }
    return payload;
  }

  return {
    get: (path, params) => request('GET', path, { params }),
    post: (path, body) => request('POST', path, { body }),
    del: (path) => request('DELETE', path),
  };
}
