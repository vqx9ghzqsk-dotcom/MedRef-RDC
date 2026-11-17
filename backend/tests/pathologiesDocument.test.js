'use strict';

const { fiches } = require('../db/seed-data/pathologies-document');
const { sources } = require('../db/seed-data/sources');

describe('document pathology catalogue — cardiology lot', () => {
  test('contains the 23 cardiology entries and no duplicate slugs', () => {
    expect(fiches).toHaveLength(23);
    expect(new Set(fiches.map((fiche) => fiche.slug)).size).toBe(fiches.length);
  });

  test('every cardiology fiche has structured content and registered sources', () => {
    const sourceTitles = new Set(sources.map((source) => source.titre));

    for (const fiche of fiches) {
      expect(fiche.specialite).toBe('Cardiologie');
      expect(fiche.resume).toBeTruthy();
      expect(fiche.definition).toBeTruthy();
      expect(fiche.diagnostic).toBeTruthy();
      expect(fiche.etiologies).toBeTruthy();
      expect(fiche.therapeutique).toBeTruthy();
      expect(fiche.evolution).toBeTruthy();
      expect(fiche.sources.length).toBeGreaterThan(0);
      for (const title of fiche.sources) {
        expect(sourceTitles.has(title)).toBe(true);
      }
    }
  });
});
