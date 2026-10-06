import { describe, expect, it, vi } from 'vitest';
import { compterEnCache, ecrireEtat, lireEtat, telechargerTout } from '../src/core/horsLigne.js';

describe('téléchargement hors ligne', () => {
  it('télécharge toutes les adresses avec un parallélisme limité et compte les échecs', async () => {
    let enCours = 0;
    let max = 0;
    const fetchImpl = vi.fn(async (url) => {
      enCours += 1;
      max = Math.max(max, enCours);
      await new Promise((r) => setTimeout(r, 5));
      enCours -= 1;
      if (url.endsWith('/erreur')) return { ok: false };
      if (url.endsWith('/reseau')) throw new Error('réseau');
      return { ok: true };
    });
    const urls = ['/api/a', '/api/b', '/api/erreur', '/api/c', '/api/reseau', '/api/d'];
    const progres = vi.fn();
    const res = await telechargerTout(urls, { fetchImpl, limite: 2, onProgres: progres });
    expect(fetchImpl).toHaveBeenCalledTimes(6);
    expect(max).toBeLessThanOrEqual(2);
    expect(res.echecs.sort()).toEqual(['/api/erreur', '/api/reseau']);
    expect(progres).toHaveBeenLastCalledWith(6, 6, 2);
  });

  it('compte les réponses en cache et tolère l’absence de cache', async () => {
    const cache = { keys: async () => [1, 2, 3] };
    const caches = { has: async () => true, open: async () => cache };
    expect(await compterEnCache(caches)).toBe(3);
    expect(await compterEnCache({ has: async () => false })).toBe(0);
    expect(await compterEnCache(undefined)).toBeNull();
  });

  it('mémorise la date du dernier téléchargement sans planter si le stockage est bloqué', () => {
    const store = new Map();
    const storage = {
      getItem: (k) => store.get(k) ?? null,
      setItem: (k, v) => store.set(k, v),
      removeItem: (k) => store.delete(k),
    };
    ecrireEtat({ date: '2026-10-06T10:00:00Z', total: 3 }, storage);
    expect(lireEtat(storage)).toEqual({ date: '2026-10-06T10:00:00Z', total: 3 });
    const bloque = {
      getItem: () => {
        throw new Error('bloqué');
      },
      setItem: () => {
        throw new Error('bloqué');
      },
    };
    expect(lireEtat(bloque)).toBeNull();
    expect(() => ecrireEtat({ date: 'x' }, bloque)).not.toThrow();
  });
});
