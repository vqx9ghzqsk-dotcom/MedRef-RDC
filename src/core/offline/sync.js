/**
 * Synchronisation des prescriptions locales avec /api/prescriptions/sync.
 * Sûre à rejouer : le serveur fait un UPSERT idempotent sur l'UUID.
 */

const toPayload = (r) =>
  r.deleted
    ? { id: r.id, deleted: true, updated_at: r.updated_at }
    : { id: r.id, patient_label: r.patient_label || null, contenu: r.contenu, updated_at: r.updated_at };

const CONFLICT_MESSAGE = 'Cet identifiant appartient à un autre compte';

/**
 * @param {{ repo: ReturnType<import('./prescriptionsRepo.js').createPrescriptionsRepo>,
 *           api: { syncPrescriptions: Function, prescriptions: Function },
 *           userId: number }} deps
 * @returns {Promise<{ sent: number, synced: number, errors: number }>}
 */
export async function syncPrescriptions({ repo, api, userId }) {
  const pending = await repo.pending(userId);
  if (!pending.length) {
    const serverItems = await api.prescriptions();
    await repo.applyServerState(serverItems, userId);
    return { sent: 0, synced: 0, errors: 0 };
  }

  const sentAt = new Map(pending.map((r) => [r.id, r.updated_at]));
  const ids = [...sentAt.keys()];
  await repo.setInFlight(ids, true);
  let response;
  try {
    response = await api.syncPrescriptions(pending.map(toPayload));
  } finally {
    await repo.setInFlight(ids, false);
  }
  const { results, data } = response;

  let synced = 0;
  let errors = 0;
  for (const result of results) {
    if (['created', 'updated', 'unchanged'].includes(result.status)) {
      await repo.markSynced(result.id, sentAt.get(result.id), userId);
      synced += 1;
    } else {
      await repo.markError(
        result.id,
        result.status === 'conflict' ? CONFLICT_MESSAGE : result.error || 'Données refusées',
      );
      errors += 1;
    }
  }
  await repo.applyServerState(data, userId);
  return { sent: pending.length, synced, errors };
}
