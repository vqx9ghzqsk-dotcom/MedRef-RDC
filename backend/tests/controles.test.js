'use strict';

const { remplacerPassage, verifierDonnees } = require('../db/controles');
const lots = require('../db/seed-data/controles');

describe('Contrôle de conformité aux protocoles', () => {
  it('données des lots cohérentes', () => {
    expect(verifierDonnees(lots)).toEqual([]);
  });

  it('chaque fiche contrôlée cite ses protocoles et ses points vérifiés', () => {
    for (const lot of lots) {
      for (const f of [...(lot.fiches || []), ...(lot.molecules || [])]) {
        expect([f.slug, f.protocoles.length > 0, Boolean(f.verifie)]).toEqual([f.slug, true, true]);
        // Un écart corrigé est décrit dans le rapport
        if ((f.corrections || []).length) expect([f.slug, Boolean(f.corrige)]).toEqual([f.slug, true]);
      }
    }
  });

  describe('remplacement d’un passage', () => {
    it('remplace un passage présent une seule fois', () => {
      expect(remplacerPassage('Dose : 2 mg/kg. Puis relais.', ['2 mg/kg', '2,4 mg/kg'])).toEqual({
        etat: 'applique',
        valeur: 'Dose : 2,4 mg/kg. Puis relais.',
      });
    });

    it('ne refait pas une correction déjà appliquée, même quand le nouveau texte contient l’ancien', () => {
      expect(remplacerPassage('Dose : 2,4 mg/kg.', ['2 mg/kg', '2,4 mg/kg']).etat).toBe('deja');
      const complement = ['Hb < 5 g/dL', 'Hb < 5 g/dL avec parasitémie > 10 000/µL'];
      const une = remplacerPassage('Anémie : Hb < 5 g/dL.', complement);
      expect(une.etat).toBe('applique');
      expect(remplacerPassage(une.valeur, complement).etat).toBe('deja');
    });

    it('supprime un passage (le nouveau texte est contenu dans l’ancien)', () => {
      const r = remplacerPassage('A, B et C.', ['A, B et C', 'A et C']);
      expect(r).toEqual({ etat: 'applique', valeur: 'A et C.' });
      expect(remplacerPassage(r.valeur, ['A, B et C', 'A et C']).etat).toBe('deja');
    });

    it('signale un conflit quand le passage a été retouché, et une ambiguïté quand il est répété', () => {
      expect(remplacerPassage('Texte réécrit par le médecin.', ['2 mg/kg', '2,4 mg/kg']).etat).toBe(
        'conflit',
      );
      expect(remplacerPassage(null, ['2 mg/kg', '2,4 mg/kg']).etat).toBe('conflit');
      expect(remplacerPassage('2 mg/kg puis 2 mg/kg', ['2 mg/kg', '3 mg/kg']).etat).toBe('ambigu');
    });
  });

  it('refuse des données incohérentes', () => {
    const pb = verifierDonnees([
      {
        lot: 'X',
        date: '16/10/2026',
        fiches: [
          {
            slug: 'a',
            protocoles: [],
            verifie: '',
            corrections: [{ champ: 'statut', remplacer: ['a', 'b'] }],
          },
          {
            slug: 'a',
            protocoles: ['P'],
            verifie: 'v',
            corrections: [{ principe: 'T', champ: 'details', remplacer: ['x', 'x'] }],
          },
          {
            slug: 'b',
            protocoles: ['P'],
            verifie: 'v',
            corrections: [{ niveau: 'cs', champ: 'prise_en_charge', remplacer: ['x', 'y'] }],
          },
          {
            slug: 'c',
            protocoles: ['P'],
            verifie: 'v',
            corrections: [{ ajouter: 'statut' }, { champ: 'diagnostic' }],
          },
        ],
        examens: [
          { slug: 'nfs', champ: 'type', valeur: 'x', ancienne: 'y' },
          { slug: 'tsh', motif: 'm', champ: 'nom', remplacer: ['a'] },
        ],
      },
    ]);
    expect(pb).toEqual(
      expect.arrayContaining([
        'X : date invalide',
        'X/a : aucun protocole cité',
        'X/a : points vérifiés absents',
        'X/a correction 1 : champ statut non modifiable (champ)',
        'X/a : contrôlée deux fois',
        'X/a correction 1 : remplacement invalide',
        'X/b correction 1 : niveau cs',
        'X/c correction 1 : ajout inconnu statut',
        'X/c correction 2 : ni remplacement ni valeur',
        'X examen nfs : motif absent',
        'X examen nfs : champ type non modifiable (examen)',
        'X examen tsh : remplacement invalide',
      ]),
    );
  });
});
