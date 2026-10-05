'use strict';

/**
 * Logique de synchronisation des prescriptions créées hors ligne.
 *
 * Idempotence : l'identifiant (UUID) est généré côté client. Rejouer la même
 * requête /sync autant de fois que nécessaire produit toujours le même état.
 * Résolution des conflits : « dernier écrit gagne » sur `updated_at` client.
 */

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const MAX_ITEMS = 200;
const MAX_CONTENT_BYTES = 64 * 1024;

/** Date JS → littéral DATETIME(3) MySQL en UTC. */
const toSqlDate = (d) => new Date(d).toISOString().replace('T', ' ').replace('Z', '');
/** Littéral DATETIME(3) (UTC) → millisecondes. */
const fromSqlDate = (s) => (s instanceof Date ? s.getTime() : Date.parse(`${String(s).replace(' ', 'T')}Z`));

/**
 * Valide et normalise un élément envoyé par le client.
 * @returns {{ ok: true, value: object } | { ok: false, error: string }}
 */
function validateItem(raw) {
  if (!raw || typeof raw !== 'object') return { ok: false, error: 'Élément invalide' };
  const { id, patient_label: label, contenu, updated_at: updatedAt, deleted } = raw;
  if (typeof id !== 'string' || !UUID_RE.test(id)) return { ok: false, error: 'id doit être un UUID' };
  const ts = Date.parse(updatedAt);
  if (!Number.isFinite(ts)) return { ok: false, error: 'updated_at invalide' };
  if (ts > Date.now() + 5 * 60 * 1000) return { ok: false, error: 'updated_at dans le futur' };
  if (!deleted) {
    if (!contenu || typeof contenu !== 'object' || Array.isArray(contenu)) {
      return { ok: false, error: 'contenu doit être un objet' };
    }
    if (Buffer.byteLength(JSON.stringify(contenu)) > MAX_CONTENT_BYTES) {
      return { ok: false, error: 'contenu trop volumineux' };
    }
  }
  if (label != null && (typeof label !== 'string' || label.length > 190)) {
    return { ok: false, error: 'patient_label invalide' };
  }
  return {
    ok: true,
    value: {
      id: id.toLowerCase(),
      patient_label: label ? label.trim() : null,
      contenu: contenu && typeof contenu === 'object' ? contenu : {},
      updated_at: ts,
      deleted: Boolean(deleted),
    },
  };
}

/**
 * Décide de l'action à mener pour un élément.
 * @param {{user_id:number, client_updated_at:string}|undefined} existing
 * @returns {'created'|'updated'|'unchanged'|'conflict'}
 */
function decide(existing, item, userId) {
  if (!existing) return 'created';
  if (Number(existing.user_id) !== Number(userId)) return 'conflict';
  return item.updated_at > fromSqlDate(existing.client_updated_at) ? 'updated' : 'unchanged';
}

const UPSERT_SQL = `
  INSERT INTO prescriptions (id, user_id, patient_label, contenu, client_updated_at, deleted_at)
  VALUES (?, ?, ?, ?, ?, ?) AS new
  ON DUPLICATE KEY UPDATE
    patient_label = IF(prescriptions.user_id = new.user_id AND new.client_updated_at > prescriptions.client_updated_at,
                       new.patient_label, prescriptions.patient_label),
    contenu       = IF(prescriptions.user_id = new.user_id AND new.client_updated_at > prescriptions.client_updated_at,
                       new.contenu, prescriptions.contenu),
    deleted_at    = IF(prescriptions.user_id = new.user_id AND new.client_updated_at > prescriptions.client_updated_at,
                       new.deleted_at, prescriptions.deleted_at),
    -- toujours en dernier : les conditions ci-dessus lisent l'ancienne valeur
    client_updated_at = IF(prescriptions.user_id = new.user_id AND new.client_updated_at > prescriptions.client_updated_at,
                       new.client_updated_at, prescriptions.client_updated_at)`;

/**
 * Applique un lot d'éléments dans une transaction.
 * @param {(fn: (conn) => Promise<any>) => Promise<any>} transaction
 */
async function syncPrescriptions(transaction, userId, items) {
  return transaction(async (conn) => {
    const results = [];
    for (const raw of items) {
      const check = validateItem(raw);
      if (!check.ok) {
        results.push({ id: raw && raw.id, status: 'invalid', error: check.error });
        continue;
      }
      const item = check.value;
      const [rows] = await conn.execute(
        'SELECT user_id, client_updated_at FROM prescriptions WHERE id = ? FOR UPDATE',
        [item.id],
      );
      const status = decide(rows[0], item, userId);
      if (status === 'created' || status === 'updated') {
        const ts = toSqlDate(item.updated_at);
        await conn.execute(UPSERT_SQL, [
          item.id,
          userId,
          item.patient_label,
          JSON.stringify(item.contenu),
          ts,
          item.deleted ? ts : null,
        ]);
      }
      results.push({ id: item.id, status });
    }
    return results;
  });
}

module.exports = {
  syncPrescriptions,
  validateItem,
  decide,
  toSqlDate,
  fromSqlDate,
  MAX_ITEMS,
  UUID_RE,
};
