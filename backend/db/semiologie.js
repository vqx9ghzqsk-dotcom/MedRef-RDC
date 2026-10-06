'use strict';

/**
 * Chargement des formes cliniques (sémiologie systématisée, étiologies et examens
 * par forme), des syndromes, du glossaire et des signes d'alerte des urgences.
 *
 * Utilisé par seed.js (base neuve) et par `npm run db:enrichir` sur une base en
 * service : dans ce cas rien n'est écrasé. Une fiche qui a déjà des formes (saisies
 * ou corrigées dans /admin) est laissée telle quelle ; un terme ou un syndrome déjà
 * présent n'est pas modifié ; un signe d'alerte déjà renseigné est conservé.
 */

const { slugify } = require('../src/utils/slugify');

const TYPES_FORME = ['commune', 'gravite', 'terrain', 'topographique', 'evolutive', 'paraclinique', 'etiologique'];
const RUBRIQUES = ['description', 'terrain', 'fonctionnels', 'generaux', 'physiques', 'paraclinique', 'etiologies'];

/** Vérifie la cohérence interne des données avant toute écriture. */
function verifier(data) {
  const erreurs = [];
  const syndromes = new Set(data.syndromes.map((s) => s.slug));
  for (const g of data.glossaire) {
    if (g.syndrome && !syndromes.has(g.syndrome)) erreurs.push(`glossaire « ${g.terme} » : syndrome ${g.syndrome}`);
  }
  for (const [slug, fiche] of Object.entries(data.semiologie)) {
    if (!fiche.formes?.length) erreurs.push(`${slug} : aucune forme`);
    if (!fiche.formes?.some((f) => f.type === 'commune')) erreurs.push(`${slug} : pas de forme commune`);
    for (const f of fiche.formes || []) {
      if (!TYPES_FORME.includes(f.type)) erreurs.push(`${slug} / ${f.nom} : type ${f.type}`);
      for (const k of Object.keys(f)) {
        if (![...RUBRIQUES, 'nom', 'type', 'syndromes', 'examens'].includes(k)) {
          erreurs.push(`${slug} / ${f.nom} : rubrique inconnue ${k}`);
        }
      }
      for (const s of f.syndromes || []) if (!syndromes.has(s)) erreurs.push(`${slug} / ${f.nom} : syndrome ${s}`);
    }
  }
  if (erreurs.length) throw new Error(`Sémiologie : références invalides\n  - ${erreurs.join('\n  - ')}`);
}

async function chargerSemiologie(conn, data) {
  verifier(data);
  const q = async (sql, params = []) => (await conn.execute(sql, params))[0];
  const ids = async (sql) => new Map((await q(sql)).map((r) => [r.k, r.id]));
  const need = (map, key, what, where) => {
    if (!map.has(key)) throw new Error(`Sémiologie : ${what} introuvable « ${key} » (${where})`);
    return map.get(key);
  };
  const compte = { syndromes: 0, glossaire: 0, fiches: 0, formes: 0, fiches_conservees: 0, signes_alerte: 0 };

  // Syndromes (et leurs symptômes)
  const symptomes = await ids('SELECT id, nom AS k FROM symptomes');
  const syndromes = await ids('SELECT id, slug AS k FROM syndromes');
  for (const s of data.syndromes) {
    if (syndromes.has(s.slug)) continue;
    const [r] = await conn.execute('INSERT INTO syndromes (nom, slug, definition, elements) VALUES (?, ?, ?, ?)', [
      s.nom,
      s.slug,
      s.definition,
      s.elements || null,
    ]);
    syndromes.set(s.slug, r.insertId);
    for (const nom of s.symptomes || []) {
      await q('INSERT INTO syndrome_symptomes (syndrome_id, symptome_id) VALUES (?, ?)', [
        r.insertId,
        need(symptomes, nom, 'symptôme', s.slug),
      ]);
    }
    compte.syndromes += 1;
  }

  // Glossaire
  const termes = await ids('SELECT id, slug AS k FROM glossaire');
  for (const g of data.glossaire) {
    const slug = slugify(g.terme);
    if (termes.has(slug)) continue;
    const [r] = await conn.execute(
      'INSERT INTO glossaire (terme, slug, variantes, definition, syndrome_id) VALUES (?, ?, ?, ?, ?)',
      [g.terme, slug, (g.variantes || []).join('|') || null, g.definition, g.syndrome ? syndromes.get(g.syndrome) : null],
    );
    termes.set(slug, r.insertId);
    compte.glossaire += 1;
  }

  // Formes cliniques par fiche
  const pathologies = await ids('SELECT id, slug AS k FROM pathologies');
  const examens = await ids('SELECT id, slug AS k FROM examens');
  const urgences = await ids('SELECT id, slug AS k FROM urgences');
  for (const [slug, fiche] of Object.entries(data.semiologie)) {
    const pathologieId = need(pathologies, slug, 'fiche', 'semiologie');
    const [{ n }] = await q('SELECT COUNT(*) AS n FROM pathologie_formes WHERE pathologie_id = ?', [pathologieId]);
    if (Number(n) > 0) {
      compte.fiches_conservees += 1;
    } else {
      for (const [i, f] of fiche.formes.entries()) {
        const [r] = await conn.execute(
          `INSERT INTO pathologie_formes (pathologie_id, ordre, nom, type, description, terrain, signes_fonctionnels,
             signes_generaux, signes_physiques, paraclinique, etiologies)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            pathologieId,
            i + 1,
            f.nom,
            f.type,
            f.description || null,
            f.terrain || null,
            f.fonctionnels || null,
            f.generaux || null,
            f.physiques || null,
            f.paraclinique || null,
            f.etiologies || null,
          ],
        );
        for (const [j, s] of (f.syndromes || []).entries()) {
          await q('INSERT INTO forme_syndromes (forme_id, syndrome_id, ordre) VALUES (?, ?, ?)', [
            r.insertId,
            syndromes.get(s),
            j + 1,
          ]);
        }
        for (const [j, [examen, interpretation]] of (f.examens || []).entries()) {
          await q('INSERT INTO forme_examens (forme_id, examen_id, interpretation, ordre) VALUES (?, ?, ?, ?)', [
            r.insertId,
            need(examens, examen, 'examen', `${slug} / ${f.nom}`),
            interpretation || null,
            j + 1,
          ]);
        }
        compte.formes += 1;
      }
      compte.fiches += 1;
    }

    for (const [urgence, signes] of Object.entries(fiche.urgences || {})) {
      const urgenceId = need(urgences, urgence, 'urgence', slug);
      const lien = await q('SELECT signes_alerte FROM pathologie_urgences WHERE pathologie_id = ? AND urgence_id = ?', [
        pathologieId,
        urgenceId,
      ]);
      if (!lien.length) throw new Error(`Sémiologie : ${slug} n'est pas liée à l'urgence « ${urgence} »`);
      if (lien[0].signes_alerte) continue;
      await q('UPDATE pathologie_urgences SET signes_alerte = ? WHERE pathologie_id = ? AND urgence_id = ?', [
        signes,
        pathologieId,
        urgenceId,
      ]);
      compte.signes_alerte += 1;
    }
  }
  return compte;
}

module.exports = { chargerSemiologie, verifier, TYPES_FORME };
