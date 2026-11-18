import { beforeEach, describe, expect, it, vi } from 'vitest';
import { openDB } from 'idb';
import { createPrescriptionsRepo, openMedRefDB } from '../src/core/offline/prescriptionsRepo.js';
import { syncPrescriptions } from '../src/core/offline/sync.js';

let dbCounter = 0;
let clock;
const tick = () => new Date((clock += 1000));

function makeRepo() {
  dbCounter += 1;
  return createPrescriptionsRepo(openMedRefDB(openDB, `medref-test-${dbCounter}`), { now: tick });
}

/** Faux serveur reproduisant les règles de /api/prescriptions/sync. */
function fakeServer() {
  const rows = new Map();
  const visible = () =>
    [...rows.values()].filter((r) => !r.deleted).map(({ deleted: _d, ...r }) => ({ ...r }));
  return {
    rows,
    prescriptions: vi.fn(async () => visible()),
    syncPrescriptions: vi.fn(async (items) => {
      const results = items.map((it) => {
        const ex = rows.get(it.id);
        if (ex && it.updated_at <= ex.updated_at) return { id: it.id, status: 'unchanged' };
        rows.set(it.id, { ...it });
        return { id: it.id, status: ex ? 'updated' : 'created' };
      });
      return { results, data: visible() };
    }),
  };
}

const draft = {
  patient_label: 'Enfant 3 ans ',
  contenu: { lignes: [{ dci: 'Artésunate', posologie: '2,4 mg/kg' }] },
};

beforeEach(() => {
  clock = Date.parse('2026-09-01T08:00:00Z');
});

describe('dépôt IndexedDB', () => {
  it('crée une prescription en attente avec un UUID', async () => {
    const repo = makeRepo();
    const rx = await repo.create(draft, 1);
    expect(rx.id).toMatch(/^[0-9a-f-]{36}$/);
    expect(rx.patient_label).toBe('Enfant 3 ans');
    expect(rx.sync_status).toBe('pending');
    expect(await repo.list(1)).toHaveLength(1);
    expect(await repo.countPending(1)).toBe(1);
  });

  it('trie par date décroissante et isole les utilisateurs', async () => {
    const repo = makeRepo();
    const a = await repo.create(draft, 1);
    const b = await repo.create(draft, 1);
    await repo.create(draft, 2);
    expect((await repo.list(1)).map((r) => r.id)).toEqual([b.id, a.id]);
  });

  it('supprime immédiatement une prescription jamais envoyée', async () => {
    const repo = makeRepo();
    const rx = await repo.create(draft, 1);
    await repo.remove(rx.id);
    expect(await repo.get(rx.id)).toBeUndefined();
  });
});

describe('synchronisation', () => {
  it('envoie les prescriptions en attente puis les marque synchronisées', async () => {
    const repo = makeRepo();
    const api = fakeServer();
    const rx = await repo.create(draft, 1);
    const res = await syncPrescriptions({ repo, api, userId: 1 });
    expect(res).toEqual({ sent: 1, synced: 1, errors: 0 });
    expect(api.syncPrescriptions.mock.calls[0][0][0]).toMatchObject({
      id: rx.id,
      patient_label: 'Enfant 3 ans',
    });
    const [stored] = await repo.list(1);
    expect(stored.sync_status).toBe('synced');
    expect(stored.server_known).toBe(true);
  });

  it('est idempotente : une seconde synchro n’envoie rien', async () => {
    const repo = makeRepo();
    const api = fakeServer();
    await repo.create(draft, 1);
    await syncPrescriptions({ repo, api, userId: 1 });
    const second = await syncPrescriptions({ repo, api, userId: 1 });
    expect(second.sent).toBe(0);
    expect(api.syncPrescriptions).toHaveBeenCalledTimes(1);
    expect(api.rows.size).toBe(1);
  });

  it('propage une suppression d’une prescription déjà envoyée', async () => {
    const repo = makeRepo();
    const api = fakeServer();
    const rx = await repo.create(draft, 1);
    await syncPrescriptions({ repo, api, userId: 1 });
    await repo.remove(rx.id);
    expect(await repo.list(1)).toHaveLength(0);
    expect((await repo.pending(1))[0].deleted).toBe(true);
    await syncPrescriptions({ repo, api, userId: 1 });
    expect(await repo.get(rx.id)).toBeUndefined();
    expect(api.rows.get(rx.id).deleted).toBe(true);
  });

  it('récupère les prescriptions créées sur un autre appareil', async () => {
    const repo = makeRepo();
    const api = fakeServer();
    api.rows.set('3f2b8c1e-9a4d-4c7e-8b1a-2d3e4f5a6b7c', {
      id: '3f2b8c1e-9a4d-4c7e-8b1a-2d3e4f5a6b7c',
      patient_label: 'Autre appareil',
      contenu: { lignes: [] },
      updated_at: '2026-08-01T00:00:00.000Z',
    });
    await syncPrescriptions({ repo, api, userId: 1 });
    const list = await repo.list(1);
    expect(list).toHaveLength(1);
    expect(list[0].patient_label).toBe('Autre appareil');
  });

  it('marque en erreur un élément refusé et garde les autres', async () => {
    const repo = makeRepo();
    const a = await repo.create(draft, 1);
    const b = await repo.create(draft, 1);
    const api = {
      prescriptions: vi.fn(async () => []),
      syncPrescriptions: vi.fn(async () => ({
        results: [
          { id: a.id, status: 'created' },
          { id: b.id, status: 'conflict' },
        ],
        data: [{ id: a.id, patient_label: 'Enfant 3 ans', contenu: draft.contenu, updated_at: a.updated_at }],
      })),
    };
    const res = await syncPrescriptions({ repo, api, userId: 1 });
    expect(res).toEqual({ sent: 2, synced: 1, errors: 1 });
    expect((await repo.get(b.id)).sync_status).toBe('error');
    expect((await repo.get(a.id)).sync_status).toBe('synced');
  });

  it('ne perd pas une modification faite pendant l’envoi', async () => {
    const repo = makeRepo();
    const rx = await repo.create(draft, 1);
    const api = fakeServer();
    const original = api.syncPrescriptions.getMockImplementation();
    api.syncPrescriptions.mockImplementationOnce(async (items) => {
      await repo.remove(rx.id); // l'utilisateur agit pendant la requête
      return original(items);
    });
    await syncPrescriptions({ repo, api, userId: 1 });
    // La suppression faite pendant l'envoi n'est pas écrasée par la réponse du serveur…
    expect(await repo.list(1)).toHaveLength(0);
    const [tombstone] = await repo.pending(1);
    expect(tombstone).toMatchObject({ id: rx.id, deleted: true, server_known: true });
    // …et elle est propagée à la synchronisation suivante.
    await syncPrescriptions({ repo, api, userId: 1 });
    expect(await repo.get(rx.id)).toBeUndefined();
    expect(api.rows.get(rx.id).deleted).toBe(true);
  });

  it('laisse les éléments en attente si le réseau tombe', async () => {
    const repo = makeRepo();
    await repo.create(draft, 1);
    const api = {
      syncPrescriptions: vi.fn(async () => Promise.reject(new Error('réseau'))),
      prescriptions: vi.fn(),
    };
    await expect(syncPrescriptions({ repo, api, userId: 1 })).rejects.toThrow('réseau');
    expect(await repo.countPending(1)).toBe(1);
  });
});
