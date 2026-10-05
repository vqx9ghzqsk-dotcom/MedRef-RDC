import { describe, expect, it, vi } from 'vitest';
import { parseInline, parseRichText } from '../src/core/richText.js';
import { createApiClient, ApiError } from '../src/core/api/client.js';
import { createMedRefApi } from '../src/core/api/endpoints.js';
import { createTokenStore } from '../src/core/auth/tokenStore.js';
import { groupByInitial, formatPrixCdf } from '../src/core/labels.js';
import { uuid } from '../src/core/uuid.js';

describe('richText', () => {
  it('analyse titres, listes et paragraphes', () => {
    const blocks = parseRichText('## Titre\n- un\n- **deux**\n\nUn paragraphe\nsur deux lignes.');
    expect(blocks).toEqual([
      { type: 'heading', text: 'Titre' },
      { type: 'list', items: [[{ type: 'text', text: 'un' }], [{ type: 'strong', text: 'deux' }]] },
      { type: 'paragraph', inline: [{ type: 'text', text: 'Un paragraphe sur deux lignes.' }] },
    ]);
  });

  it('gère gras et italique en ligne', () => {
    expect(parseInline('a **b** *c* d')).toEqual([
      { type: 'text', text: 'a ' },
      { type: 'strong', text: 'b' },
      { type: 'text', text: ' ' },
      { type: 'em', text: 'c' },
      { type: 'text', text: ' d' },
    ]);
  });

  it('ne produit jamais de HTML', () => {
    const blocks = parseRichText('<img src=x onerror=alert(1)>');
    expect(blocks[0].inline[0]).toEqual({ type: 'text', text: '<img src=x onerror=alert(1)>' });
  });

  it('renvoie une liste vide pour un texte vide', () => {
    expect(parseRichText(null)).toEqual([]);
  });
});

const jsonResponse = (status, body) => ({
  ok: status >= 200 && status < 300,
  status,
  json: async () => body,
});

describe('client API', () => {
  it('ajoute le jeton et construit la query string', async () => {
    const fetchImpl = vi.fn(async () => jsonResponse(200, { data: [] }));
    const client = createApiClient({ baseUrl: 'https://api.test', getToken: () => 'tok', fetchImpl });
    await client.get('/api/medicaments', { classe: 2, operateur: '', molecule: 'Artésunate' });
    const [url, init] = fetchImpl.mock.calls[0];
    expect(url).toBe('https://api.test/api/medicaments?classe=2&molecule=Art%C3%A9sunate');
    expect(init.headers.Authorization).toBe('Bearer tok');
  });

  it('transforme les erreurs HTTP en ApiError', async () => {
    const client = createApiClient({
      fetchImpl: async () => jsonResponse(400, { error: 'Données invalides', details: { email: 'x' } }),
    });
    await expect(client.post('/api/auth/register', {})).rejects.toMatchObject({
      status: 400,
      message: 'Données invalides',
      details: { email: 'x' },
    });
  });

  it('signale une erreur réseau avec status 0', async () => {
    const client = createApiClient({
      fetchImpl: async () => {
        throw new TypeError('Failed to fetch');
      },
    });
    const err = await client.get('/api/departements').catch((e) => e);
    expect(err).toBeInstanceOf(ApiError);
    expect(err.isNetworkError).toBe(true);
  });

  it('prévient la session expirée sur 401 avec jeton', async () => {
    const onUnauthorized = vi.fn();
    const client = createApiClient({
      getToken: () => 'tok',
      onUnauthorized,
      fetchImpl: async () => jsonResponse(401, { error: 'x' }),
    });
    await client.get('/api/auth/me').catch(() => {});
    expect(onUnauthorized).toHaveBeenCalledTimes(1);
  });

  it('renvoie null pour 204', async () => {
    const client = createApiClient({ fetchImpl: async () => ({ ok: true, status: 204 }) });
    expect(await client.del('/api/prescriptions/x')).toBeNull();
  });

  it('endpoints : extrait data et encode les slugs', async () => {
    const fetchImpl = vi.fn(async () => jsonResponse(200, { data: { nom: 'X' } }));
    const api = createMedRefApi(createApiClient({ fetchImpl }));
    expect(await api.pathologie('a b')).toEqual({ nom: 'X' });
    expect(fetchImpl.mock.calls[0][0]).toBe('/api/pathologies/a%20b');
  });
});

describe('tokenStore', () => {
  it('sauve, relit et efface la session', () => {
    const mem = new Map();
    const store = createTokenStore({
      getItem: (k) => (mem.has(k) ? mem.get(k) : null),
      setItem: (k, v) => mem.set(k, v),
      removeItem: (k) => mem.delete(k),
    });
    store.save('tok', { id: 1, nom: 'A' });
    expect(store.getToken()).toBe('tok');
    expect(store.getUser()).toEqual({ id: 1, nom: 'A' });
    store.clear();
    expect(store.getToken()).toBeNull();
    expect(store.getUser()).toBeNull();
  });
});

describe('utilitaires', () => {
  it('regroupe par initiale sans tenir compte des accents', () => {
    const groups = groupByInitial([{ nom: 'Éclampsie' }, { nom: 'Abdomen aigu' }, { nom: 'État de mal' }]);
    expect(groups.map(([l, items]) => [l, items.length])).toEqual([
      ['A', 1],
      ['E', 2],
    ]);
  });

  it('formate le prix indicatif', () => {
    expect(formatPrixCdf(null)).toBe('Non renseigné');
    expect(formatPrixCdf('2500.00')).toMatch(/2\s?500 FC/);
  });

  it('génère des UUID v4 valides', () => {
    const id = uuid();
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    expect(uuid()).not.toBe(id);
  });
});
