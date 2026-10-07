'use strict';

/**
 * Navigation catalogue : Département → Spécialité → Pathologie (fiche complète).
 */

const express = require('express');
const db = require('../db');
const { asyncHandler, notFound } = require('../utils/http');

const { chargerFormes, signesAlerte } = require('../services/formes');

const router = express.Router();

const FREQ_ORDER = "FIELD(ps.frequence, 'tres_frequent', 'frequent', 'occasionnel', 'rare')";
const LIGNE_ORDER = "FIELD(mp.ligne, 'premiere', 'deuxieme', 'alternative', 'adjuvant')";
const NIVEAU_ORDER = "'centre_sante', 'hopital_general', 'hopital_tertiaire'";
const EXAMEN_ORDER = `FIELD(e.type, 'biologie', 'imagerie', 'exploration'),
  FIELD(pe.categorie, 'premiere_intention', 'deuxieme_intention', 'presomption', 'confirmation', 'gravite',
        'etiologique', 'pretherapeutique', 'suivi'), pe.ordre`;

/** Rattache à chaque molécule les produits (seuls ou en association) qui la contiennent. */
function withProduits(molecules, produits) {
  const byMolecule = new Map(molecules.map((m) => [m.id, { ...m, produits: [] }]));
  for (const { molecule_id: moleculeId, nb_molecules: nb, disponible_rdc: rdc, ...prod } of produits) {
    byMolecule.get(moleculeId)?.produits.push({
      ...prod,
      disponible_rdc: Boolean(rdc),
      pediatrique: Boolean(prod.pediatrique),
      association: Number(nb) > 1,
    });
  }
  return [...byMolecule.values()];
}

router.get(
  '/departements',
  asyncHandler(async (_req, res) => {
    const rows = await db.query(
      `SELECT d.id, d.nom, d.slug, d.description, d.icone,
              COUNT(DISTINCT s.id) AS nb_specialites, COUNT(p.id) AS nb_pathologies
         FROM departements d
         LEFT JOIN specialites s ON s.departement_id = d.id
         LEFT JOIN pathologies p ON p.specialite_id = s.id
        GROUP BY d.id
        ORDER BY d.ordre, d.nom`,
    );
    res.json({ data: rows });
  }),
);

router.get(
  '/departements/:slug',
  asyncHandler(async (req, res) => {
    const [dep] = await db.query(
      'SELECT id, nom, slug, description, icone FROM departements WHERE slug = ?',
      [req.params.slug],
    );
    if (!dep) throw notFound('Département');
    const specialites = await db.query(
      `SELECT s.id, s.nom, s.slug, s.description, COUNT(p.id) AS nb_pathologies
         FROM specialites s
         LEFT JOIN pathologies p ON p.specialite_id = s.id
        WHERE s.departement_id = ?
        GROUP BY s.id
        ORDER BY s.ordre, s.nom`,
      [dep.id],
    );
    res.json({ data: { ...dep, specialites } });
  }),
);

router.get(
  '/specialites/:slug',
  asyncHandler(async (req, res) => {
    const [sp] = await db.query(
      `SELECT s.id, s.nom, s.slug, s.description,
              d.id AS departement_id, d.nom AS departement_nom, d.slug AS departement_slug
         FROM specialites s
         JOIN departements d ON d.id = s.departement_id
        WHERE s.slug = ?`,
      [req.params.slug],
    );
    if (!sp) throw notFound('Spécialité');
    const pathologies = await db.query(
      'SELECT id, nom, slug, resume FROM pathologies WHERE specialite_id = ? ORDER BY nom',
      [sp.id],
    );
    res.json({
      data: {
        id: sp.id,
        nom: sp.nom,
        slug: sp.slug,
        description: sp.description,
        departement: { id: sp.departement_id, nom: sp.departement_nom, slug: sp.departement_slug },
        pathologies,
      },
    });
  }),
);

/** Fiche pathologie complète, avec tous les blocs interconnectés. */
router.get(
  '/pathologies/:slug',
  asyncHandler(async (req, res) => {
    const [p] = await db.query(
      `SELECT p.id, p.nom, p.slug, p.resume, p.definition, p.physiopathologie, p.diagnostic,
              p.etiologies, p.therapeutique, p.evolution, p.updated_at, p.statut, p.valide_le, p.revision_le,
              (p.revision_le IS NOT NULL AND p.revision_le <= CURDATE()) AS a_revoir,
              v.nom AS valide_par_nom,
              s.id AS specialite_id, s.nom AS specialite_nom, s.slug AS specialite_slug,
              d.id AS departement_id, d.nom AS departement_nom, d.slug AS departement_slug
         FROM pathologies p
         JOIN specialites s ON s.id = p.specialite_id
         JOIN departements d ON d.id = s.departement_id
         LEFT JOIN users v ON v.id = p.valide_par
        WHERE p.slug = ?`,
      [req.params.slug],
    );
    if (!p) throw notFound('Pathologie');

    const [
      urgences,
      symptomes,
      moleculeRows,
      produits,
      scores,
      sources,
      examens,
      differentiels,
      principes,
      complications,
      niveaux,
      formes,
    ] = await Promise.all([
      db.query(
        `SELECT u.id, u.nom, u.slug, u.categorie, u.signes_gravite, pu.signes_alerte
           FROM pathologie_urgences pu JOIN urgences u ON u.id = pu.urgence_id
          WHERE pu.pathologie_id = ? ORDER BY u.nom`,
        [p.id],
      ),
      db.query(
        `SELECT sy.id, sy.nom, sy.slug, ps.frequence
           FROM pathologie_symptomes ps JOIN symptomes sy ON sy.id = ps.symptome_id
          WHERE ps.pathologie_id = ? ORDER BY ${FREQ_ORDER}, sy.nom`,
        [p.id],
      ),
      db.query(
        `SELECT mo.id, mo.dci, mo.slug, mp.ligne, mp.contexte, c.nom AS classe
           FROM molecule_pathologies mp
           JOIN molecules mo ON mo.id = mp.molecule_id
           LEFT JOIN classes_pharmacologiques c ON c.id = mo.classe_id
          WHERE mp.pathologie_id = ? ORDER BY ${LIGNE_ORDER}, mo.dci`,
        [p.id],
      ),
      // Produits (par opérateur) contenant chacune des molécules de la fiche
      db.query(
        `SELECT mm.molecule_id, m.id, m.nom_commercial, m.dci AS composition, m.forme, m.dosage,
                m.disponible_rdc, m.photo_url, m.forme_categorie, m.pediatrique, o.nom AS operateur,
                COALESCE(m.nb_composants, (SELECT COUNT(*) FROM medicament_molecules x WHERE x.medicament_id = m.id)) AS nb_molecules
           FROM medicament_molecules mm
           JOIN medicaments m ON m.id = mm.medicament_id
           LEFT JOIN operateurs o ON o.id = m.operateur_id
          WHERE mm.molecule_id IN (SELECT molecule_id FROM molecule_pathologies WHERE pathologie_id = ?)
          ORDER BY nb_molecules, o.nom, m.nom_commercial`,
        [p.id],
      ),
      db.query(
        `SELECT sc.id, sc.nom, sc.slug, sc.code, sc.type, sc.description, sc.interpretation
           FROM pathologie_scores psc JOIN scores sc ON sc.id = psc.score_id
          WHERE psc.pathologie_id = ? ORDER BY sc.nom`,
        [p.id],
      ),
      db.query(
        `SELECT so.id, so.titre, so.organisation, so.niveau, so.type, so.annee, so.url
           FROM pathologie_sources psrc JOIN sources so ON so.id = psrc.source_id
          WHERE psrc.pathologie_id = ? ORDER BY so.niveau, so.titre`,
        [p.id],
      ),
      db.query(
        `SELECT e.id, e.nom, e.slug, e.type, e.valeurs_normales, pe.categorie, pe.interpretation
           FROM pathologie_examens pe JOIN examens e ON e.id = pe.examen_id
          WHERE pe.pathologie_id = ? ORDER BY ${EXAMEN_ORDER}`,
        [p.id],
      ),
      db.query(
        `SELECT d.id, d.nom, d.elements_distinctifs, f.slug AS fiche_slug
           FROM pathologie_differentiels d LEFT JOIN pathologies f ON f.id = d.differentiel_id
          WHERE d.pathologie_id = ? ORDER BY d.ordre`,
        [p.id],
      ),
      db.query(
        `SELECT id, ordre, titre, objectif, details, grade_force, grade_detail, grade_source
           FROM pathologie_principes WHERE pathologie_id = ? ORDER BY ordre`,
        [p.id],
      ),
      db.query(
        `SELECT c.id, c.ordre, c.nom, c.description, c.traitement, c.surveillance_clinique,
                c.surveillance_paraclinique, f.slug AS fiche_slug, f.nom AS fiche_nom
           FROM complications c LEFT JOIN pathologies f ON f.id = c.fiche_id
          WHERE c.pathologie_id = ? ORDER BY c.ordre`,
        [p.id],
      ),
      db.query(
        `SELECT niveau, prise_en_charge, criteres_transfert FROM pathologie_niveaux
          WHERE pathologie_id = ? ORDER BY FIELD(niveau, ${NIVEAU_ORDER})`,
        [p.id],
      ),
      chargerFormes((sql, params) => db.query(sql, params), p.id),
    ]);

    const molecules = withProduits(moleculeRows, produits);
    const fiche = ({ fiche_slug: slug, fiche_nom: nom }) => (slug ? { slug, nom } : null);

    res.json({
      data: {
        id: p.id,
        nom: p.nom,
        slug: p.slug,
        resume: p.resume,
        updated_at: p.updated_at,
        validation: {
          statut: p.statut,
          valide_le: p.valide_le,
          valide_par: p.valide_par_nom || null,
          revision_le: p.revision_le || null,
          a_revoir: Boolean(Number(p.a_revoir)),
        },
        onglets: {
          definition: {
            definition: p.definition,
            physiopathologie: p.physiopathologie,
            formes: formes.map(({ id, nom, type, description }) => ({ id, nom, type, description })),
          },
          diagnostic: {
            clinique: p.diagnostic,
            // Sémiologie systématisée par forme clinique
            formes: formes.map(({ etiologies: _e, description: _d, ...f }) => f),
            examens,
            scores,
            differentiels: differentiels.map(({ fiche_slug: slug, ...d }) => ({
              ...d,
              fiche: slug ? { slug } : null,
            })),
          },
          etiologies: {
            texte: p.etiologies,
            formes: formes
              .filter((f) => f.etiologies)
              .map(({ id, nom, type, etiologies }) => ({ id, nom, type, etiologies })),
          },
          therapeutique: {
            principes,
            notes: p.therapeutique,
            molecules,
            complications: complications.map((c) => ({
              id: c.id,
              nom: c.nom,
              description: c.description,
              traitement: c.traitement,
              fiche: fiche(c),
            })),
          },
          niveaux,
          evolution: {
            texte: p.evolution,
            complications: complications.map((c) => ({
              id: c.id,
              nom: c.nom,
              surveillance_clinique: c.surveillance_clinique,
              surveillance_paraclinique: c.surveillance_paraclinique,
              fiche: fiche(c),
            })),
          },
        },
        specialite: { id: p.specialite_id, nom: p.specialite_nom, slug: p.specialite_slug },
        departement: { id: p.departement_id, nom: p.departement_nom, slug: p.departement_slug },
        urgences: urgences.map(({ signes_gravite: gravite, signes_alerte: propres, ...u }) => ({
          ...u,
          signes_alerte: signesAlerte(propres, gravite),
        })),
        symptomes,
        molecules: moleculeRows,
        scores,
        sources,
      },
    });
  }),
);

module.exports = router;
