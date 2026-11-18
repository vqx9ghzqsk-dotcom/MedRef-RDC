/**
 * Dépôt local des prescriptions (IndexedDB via `idb`).
 *
 * Enregistrement :
 * {
 *   id: UUID (généré ici → clé d'idempotence côté serveur),
 *   owner: id utilisateur ou null (créée sans être connecté),
 *   patient_label, contenu: { lignes: [{ dci, nom_commercial, posologie, duree }], notes },
 *   updated_at: ISO 8601,
 *   sync_status: 'pending' | 'synced' | 'error',
 *   sync_error?: string,
 *   deleted: boolean        (suppression en attente de synchronisation)
 *   server_known: boolean   (le serveur possède déjà cet id)
 * }
 */

import { openDB as idbOpenDB } from 'idb';
import { uuid } from '../uuid.js';

export const DB_NAME = 'medref-rdc';
export const STORE = 'prescriptions';

export function openMedRefDB(openDB = idbOpenDB, name = DB_NAME) {
  return openDB(name, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: 'id' });
        store.createIndex('by_status', 'sync_status');
      }
    },
  });
}

const visibleTo = (userId) => (r) => r.owner === null || r.owner === undefined || r.owner === userId;
const byDateDesc = (a, b) => (a.updated_at < b.updated_at ? 1 : -1);

/**
 * @param {Promise<import('idb').IDBPDatabase>} dbPromise
 * @param {{ now?: () => Date }} [opts]
 */
export function createPrescriptionsRepo(dbPromise, { now = () => new Date() } = {}) {
  const db = () => dbPromise;

  return {
    async list(userId = null) {
      const all = await (await db()).getAll(STORE);
      return all.filter((r) => !r.deleted && visibleTo(userId)(r)).sort(byDateDesc);
    },

    async get(id) {
      return (await db()).get(STORE, id);
    },

    async create({ patient_label = '', contenu }, userId = null) {
      const record = {
        id: uuid(),
        owner: userId,
        patient_label: patient_label.trim(),
        contenu,
        updated_at: now().toISOString(),
        sync_status: 'pending',
        deleted: false,
        server_known: false,
      };
      await (await db()).put(STORE, record);
      return record;
    },

    /**
     * Suppression : immédiate si jamais envoyée ; sinon (connue du serveur ou
     * en cours d'envoi) tombstone en attente de synchronisation.
     */
    async remove(id) {
      const d = await db();
      const record = await d.get(STORE, id);
      if (!record) return;
      if (!record.server_known && !record.in_flight) {
        await d.delete(STORE, id);
        return;
      }
      await d.put(STORE, {
        ...record,
        deleted: true,
        sync_status: 'pending',
        updated_at: now().toISOString(),
      });
    },

    async pending(userId = null) {
      const all = await (await db()).getAll(STORE);
      return all.filter((r) => r.sync_status !== 'synced' && visibleTo(userId)(r));
    },

    async countPending(userId = null) {
      return (await this.pending(userId)).length;
    },

    /** Signale les éléments en cours d'envoi (ou la fin de l'envoi). */
    async setInFlight(ids, value) {
      const d = await db();
      const tx = d.transaction(STORE, 'readwrite');
      for (const id of ids) {
        const record = await tx.store.get(id);
        if (record) await tx.store.put({ ...record, in_flight: value });
      }
      await tx.done;
    },

    /**
     * Marque un élément comme synchronisé. S'il a été modifié localement
     * pendant l'envoi (updated_at différent), il reste en attente mais on
     * retient que le serveur le connaît désormais.
     */
    async markSynced(id, sentUpdatedAt, userId) {
      const d = await db();
      const record = await d.get(STORE, id);
      if (!record) return;
      if (record.updated_at !== sentUpdatedAt) {
        await d.put(STORE, { ...record, owner: userId, server_known: true, in_flight: false });
        return;
      }
      if (record.deleted) {
        await d.delete(STORE, id);
        return;
      }
      await d.put(STORE, {
        ...record,
        owner: userId,
        sync_status: 'synced',
        server_known: true,
        in_flight: false,
        sync_error: undefined,
      });
    },

    async markError(id, message) {
      const d = await db();
      const record = await d.get(STORE, id);
      if (record) await d.put(STORE, { ...record, sync_status: 'error', sync_error: message });
    },

    /**
     * Aligne le cache local sur l'état serveur : ajoute / met à jour les
     * éléments synchronisés, retire ceux supprimés ailleurs, ne touche jamais
     * aux éléments en attente.
     */
    async applyServerState(serverItems, userId) {
      const d = await db();
      const tx = d.transaction(STORE, 'readwrite');
      const serverIds = new Set(serverItems.map((s) => s.id));
      const local = await tx.store.getAll();
      for (const r of local) {
        if (r.owner === userId && r.sync_status === 'synced' && !serverIds.has(r.id)) {
          await tx.store.delete(r.id);
        }
      }
      for (const s of serverItems) {
        const existing = await tx.store.get(s.id);
        if (existing && existing.sync_status !== 'synced') continue;
        await tx.store.put({
          id: s.id,
          owner: userId,
          patient_label: s.patient_label || '',
          contenu: s.contenu,
          updated_at: s.updated_at,
          sync_status: 'synced',
          deleted: false,
          server_known: true,
        });
      }
      await tx.done;
    },
  };
}
