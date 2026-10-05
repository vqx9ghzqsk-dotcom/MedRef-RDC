'use strict';

const { signToken } = require('../src/middleware/auth');

/** Jeton valide pour un utilisateur fictif. */
const tokenFor = (id = 1, role = 'user') => signToken({ id, role });

/**
 * Faux stockage « prescriptions » en mémoire simulant les requêtes de
 * services/prescriptionSync (SELECT … FOR UPDATE + UPSERT conditionnel).
 */
function createFakePrescriptionStore() {
  const rows = new Map();
  const conn = {
    execute: jest.fn(async (sql, params) => {
      if (sql.includes('FOR UPDATE')) {
        const row = rows.get(params[0]);
        return [row ? [{ user_id: row.user_id, client_updated_at: row.client_updated_at }] : []];
      }
      if (sql.includes('INSERT INTO prescriptions')) {
        const [id, userId, label, contenu, ts, deletedAt] = params;
        const existing = rows.get(id);
        if (!existing) {
          rows.set(id, {
            id,
            user_id: userId,
            patient_label: label,
            contenu,
            client_updated_at: ts,
            deleted_at: deletedAt,
          });
        } else if (existing.user_id === userId && ts > existing.client_updated_at) {
          Object.assign(existing, {
            patient_label: label,
            contenu,
            client_updated_at: ts,
            deleted_at: deletedAt,
          });
        }
        return [{ affectedRows: 1 }];
      }
      throw new Error(`SQL inattendu : ${sql}`);
    }),
  };
  const transaction = jest.fn(async (fn) => fn(conn));
  const listFor = (userId) =>
    [...rows.values()]
      .filter((r) => r.user_id === userId && !r.deleted_at)
      .map((r) => ({ ...r, created_at: '2026-01-01 00:00:00' }));
  return { rows, conn, transaction, listFor };
}

module.exports = { tokenFor, createFakePrescriptionStore };
