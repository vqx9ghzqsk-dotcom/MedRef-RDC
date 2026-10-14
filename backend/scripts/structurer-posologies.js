'use strict';

/**
 * Lot B : structure les posologies existantes et propose des présentations par DCI.
 *   npm run posologies:structurer                 → simulation (n'écrit rien, affiche le bilan)
 *   npm run posologies:structurer -- --appliquer  → écrit en base (après une sauvegarde)
 *
 * - Ne remplit que les champs encore vides (n'écrase jamais une saisie) ; tout ce qui est
 *   produit est marqué « à valider » (structure_a_valider, a_valider).
 * - « Dose par kg » s'entend par prise (convention de l'administration) : dose_base = par_prise.
 * - Présentations : lues dans le dosage déclaré des produits à un seul principe actif, retenues
 *   seulement si au moins 2 produits distincts les déclarent.
 */

const config = require('../src/config');
const { connect } = require('../db/connexion');
const { backup } = require('../db/sauvegarde');
const {
  analyserFrequence,
  analyserDuree,
  analyserDosage,
  clePresentation,
} = require('../db/posologiesStructurees');

const appliquer = process.argv.includes('--appliquer');

async function main() {
  const conn = await connect();
  try {
    if (appliquer) {
      const fichier = await backup(conn, {
        dir: config.backup.dir,
        keep: 0,
        motif: 'avant-structuration',
      });
      console.log(`✔ Sauvegarde préalable : ${fichier.file}`);
    }
    // ---------------------------------------------------------------- Posologies
    const [posologies] = await conn.query(
      `SELECT id, frequence, duree, dose_par_kg, dose_base, frequence_type, durees FROM molecule_posologies`,
    );
    const bilan = { posologies: posologies.length, frequences: 0, durees: 0, bases: 0, nonLues: [] };
    const misesAJour = [];
    for (const p of posologies) {
      const maj = {};
      if (!p.frequence_type && p.frequence) {
        const f = analyserFrequence(p.frequence);
        if (f) {
          Object.assign(maj, f);
          bilan.frequences += 1;
        } else bilan.nonLues.push(`fréquence « ${p.frequence} »`);
      }
      if (!p.durees && p.duree) {
        const d = analyserDuree(p.duree);
        if (d) {
          maj.durees = JSON.stringify(d);
          bilan.durees += 1;
        } else bilan.nonLues.push(`durée « ${p.duree} »`);
      }
      if (!p.dose_base && p.dose_par_kg !== null) {
        maj.dose_base = 'par_prise';
        bilan.bases += 1;
      }
      if (Object.keys(maj).length) misesAJour.push([p.id, maj]);
    }

    // ---------------------------------------------------------------- Présentations
    const [produits] = await conn.query(
      `SELECT mm.molecule_id, me.id AS medicament_id, me.dosage, me.forme, me.forme_categorie
         FROM medicament_molecules mm JOIN medicaments me ON me.id = mm.medicament_id
        WHERE me.nb_composants = 1 AND me.dosage IS NOT NULL AND me.dosage <> ''`,
    );
    // Une présentation n'est proposée que si au moins 2 produits distincts la déclarent :
    // écarte les erreurs de saisie isolées du catalogue (ex. « comprimé 1 mg »).
    const appuis = new Map();
    for (const pr of produits) {
      for (const p of analyserDosage(pr.dosage, pr.forme_categorie, pr.forme || '')) {
        const cle = `${pr.molecule_id}#${clePresentation(p)}`;
        if (!appuis.has(cle)) appuis.set(cle, new Set());
        appuis.get(cle).add(pr.medicament_id);
      }
    }
    const [existantes] = await conn.query(
      'SELECT molecule_id, forme, quantite, unite, par_quantite, par_unite FROM molecule_presentations',
    );
    const vues = new Set(
      existantes.map(
        (e) =>
          `${e.molecule_id}#${clePresentation({ ...e, quantite: Number(e.quantite), par_quantite: Number(e.par_quantite) })}`,
      ),
    );
    const nouvelles = [];
    for (const pr of produits) {
      for (const p of analyserDosage(pr.dosage, pr.forme_categorie, pr.forme || '')) {
        const cle = `${pr.molecule_id}#${clePresentation(p)}`;
        if (vues.has(cle) || appuis.get(cle).size < 2) continue;
        vues.add(cle);
        nouvelles.push({ molecule_id: pr.molecule_id, ...p, appui: appuis.get(cle).size });
      }
    }
    // Les présentations les plus répandues en premier
    nouvelles.sort((x, y) => x.molecule_id - y.molecule_id || y.appui - x.appui);
    const molecules = new Set(nouvelles.map((p) => p.molecule_id));

    console.log(`Posologies : ${bilan.posologies}`);
    console.log(`  fréquences structurées : ${bilan.frequences}`);
    console.log(`  durées structurées     : ${bilan.durees}`);
    console.log(`  base « par prise »     : ${bilan.bases}`);
    console.log(`  textes non lus (à compléter à la main) : ${bilan.nonLues.length}`);
    console.log(`Présentations proposées : ${nouvelles.length} pour ${molecules.size} molécules`);

    if (!appliquer) {
      console.log('\nSimulation : rien n’a été écrit. Relancez avec --appliquer pour enregistrer.');
      return;
    }
    await conn.beginTransaction();
    try {
      for (const [id, maj] of misesAJour) {
        const cols = Object.keys(maj);
        await conn.query(
          `UPDATE molecule_posologies SET ${cols.map((c) => `${c} = ?`).join(', ')}, structure_a_valider = 1
            WHERE id = ?`,
          [...cols.map((c) => maj[c]), id],
        );
      }
      const ordres = new Map();
      for (const p of nouvelles) {
        const ordre = (ordres.get(p.molecule_id) || 0) + 1;
        ordres.set(p.molecule_id, ordre);
        await conn.query(
          `INSERT IGNORE INTO molecule_presentations
             (molecule_id, forme, voie, quantite, unite, par_quantite, par_unite, libelle, source, a_valider, ordre)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)`,
          [
            p.molecule_id,
            p.forme,
            p.voie,
            p.quantite,
            p.unite,
            p.par_quantite,
            p.par_unite,
            p.libelle,
            `Catalogue des firmes : déclarée par ${p.appui} produits`,
            ordre,
          ],
        );
      }
      await conn.commit();
    } catch (err) {
      await conn.rollback();
      throw err;
    }
    console.log(`✔ Enregistré dans ${config.db.database} (tout est marqué « à valider »)`);
  } finally {
    await conn.end();
  }
}

main().catch((err) => {
  console.error('✖', err.message);
  process.exit(1);
});
