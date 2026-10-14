'use strict';

const { verifierLigne } = require('../db/posologiesAjoutees');
const lots = require('../db/seed-data/posologies-ajoutees');

describe('Posologies ajoutées par lots', () => {
  it('chaque ligne est complète et cohérente (population, structure, durées)', () => {
    const problemes = Object.entries(lots).flatMap(([slug, lignes]) =>
      lignes.flatMap((l, i) => verifierLigne(slug, l, i)),
    );
    expect(problemes).toEqual([]);
  });

  it('une dose par kg est toujours accompagnée de sa base (par prise ou par jour)', () => {
    for (const lignes of Object.values(lots)) {
      for (const l of lignes.filter((x) => x.dose_par_kg !== null)) {
        expect(['par_prise', 'par_jour']).toContain(l.dose_base);
      }
    }
  });

  it('chaque molécule a au moins une ligne adulte ou enfant', () => {
    for (const [slug, lignes] of Object.entries(lots)) {
      expect([slug, lignes.some((l) => ['adulte', 'enfant', 'nouveau_ne'].includes(l.population))]).toEqual([
        slug,
        true,
      ]);
    }
  });
});
