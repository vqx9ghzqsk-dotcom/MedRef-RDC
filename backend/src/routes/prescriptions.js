'use strict';

const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');
const { asyncHandler, HttpError, notFound } = require('../utils/http');
const { syncPrescriptions, MAX_ITEMS, UUID_RE, toSqlDate } = require('../services/prescriptionSync');

const router = express.Router();
router.use('/prescriptions', requireAuth);

const serialize = (r) => ({
  id: r.id,
  patient_label: r.patient_label,
  contenu: typeof r.contenu === 'string' ? JSON.parse(r.contenu) : r.contenu,
  updated_at: new Date(`${String(r.client_updated_at).replace(' ', 'T')}Z`).toISOString(),
  created_at: r.created_at,
});

router.get(
  '/prescriptions',
  asyncHandler(async (req, res) => {
    const rows = await db.query(
      `SELECT id, patient_label, contenu, client_updated_at, created_at
         FROM prescriptions WHERE user_id = ? AND deleted_at IS NULL
        ORDER BY client_updated_at DESC`,
      [req.user.id],
    );
    res.json({ data: rows.map(serialize) });
  }),
);

/**
 * POST /api/prescriptions/sync
 * Corps : { prescriptions: [{ id, patient_label, contenu, updated_at, deleted? }] }
 * Réponse : { results: [{ id, status: created|updated|unchanged|conflict|invalid }], data: [...] }
 */
router.post(
  '/prescriptions/sync',
  asyncHandler(async (req, res) => {
    const items = req.body && req.body.prescriptions;
    if (!Array.isArray(items)) throw new HttpError(400, '« prescriptions » doit être un tableau');
    if (items.length > MAX_ITEMS) throw new HttpError(413, `Maximum ${MAX_ITEMS} prescriptions par lot`);
    const results = await syncPrescriptions(db.transaction, req.user.id, items);
    const rows = await db.query(
      `SELECT id, patient_label, contenu, client_updated_at, created_at
         FROM prescriptions WHERE user_id = ? AND deleted_at IS NULL
        ORDER BY client_updated_at DESC`,
      [req.user.id],
    );
    res.json({ results, data: rows.map(serialize) });
  }),
);

router.delete(
  '/prescriptions/:id',
  asyncHandler(async (req, res) => {
    if (!UUID_RE.test(req.params.id)) throw notFound('Prescription');
    const now = toSqlDate(Date.now());
    const result = await db.query(
      `UPDATE prescriptions SET deleted_at = ?, client_updated_at = ?
        WHERE id = ? AND user_id = ? AND deleted_at IS NULL`,
      [now, now, req.params.id.toLowerCase(), req.user.id],
    );
    if (!result.affectedRows) throw notFound('Prescription');
    res.status(204).end();
  }),
);

module.exports = router;
