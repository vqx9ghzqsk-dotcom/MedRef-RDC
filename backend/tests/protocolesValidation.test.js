'use strict';

const { chargerProtocolesValidation, verifierDonnees } = require('../db/protocolesValidation');
const data = require('../db/seed-data/protocoles-validation.json');

describe('Protocoles de validation des fiches', () => {
  it('données cohérentes : codes uniques, titres uniques, niveaux, types, adresses, références connues', () => {
    expect(verifierDonnees(data)).toEqual([]);
  });

  it('chaque fiche a au moins un protocole, et les 792 fiches sont couvertes', () => {
    const fiches = Object.entries(data.fiches);
    expect(fiches.length).toBe(792);
    for (const [, codes] of fiches) expect(codes.length).toBeGreaterThan(0);
  });

  it('aucune recommandation réservée à l’adulte sur une fiche pédiatrique', () => {
    const titres = new Map(data.sources.map((s) => [s.code, s.titre]));
    const adulte = /in adults|in over 16|adults and adolescents|Tome 1 : Médecine interne/i;
    const pediatriques = Object.entries(data.fiches).filter(([slug]) =>
      /enfant|nourrisson|nouveau-ne|neonat|adolescent|congenital/.test(slug),
    );
    expect(pediatriques.length).toBeGreaterThan(50);
    for (const [slug, codes] of pediatriques) {
      expect([slug, codes.filter((c) => adulte.test(titres.get(c)))]).toEqual([slug, []]);
    }
  });

  it('chaque fiche a au moins deux protocoles : sa référence propre et le manuel de sa spécialité', () => {
    for (const [slug, codes] of Object.entries(data.fiches)) {
      expect([slug, codes.length >= 2]).toEqual([slug, true]);
    }
  });

  it('refuse des données incohérentes', () => {
    const pb = verifierDonnees({
      sources: [
        { code: 'a', titre: 'A', niveau: 7, type: 'guide', url: 'javascript:x' },
        { code: 'b2', titre: 'a', niveau: 2, type: 'revue', url: null },
      ],
      fiches: { paludisme: ['b'], vide: [] },
    });
    expect(pb).toEqual(
      expect.arrayContaining([
        'a : niveau 7',
        'a : adresse invalide',
        'b2 : titre en double',
        'b2 : une revue est de niveau 3',
        'paludisme : source inconnue b',
        'vide : aucun protocole',
      ]),
    );
  });

  /** Connexion factice : la source « Existante » est déjà en base, le lien (1, 10) aussi. */
  function connexion() {
    const appels = [];
    let id = 100;
    const conn = {
      appels,
      query: jest.fn(async (sql, params) => {
        appels.push([sql, params]);
        if (/FROM departements/.test(sql)) return [[{ id: 1, slug: 'medecine-interne' }]];
        if (/FROM pathologies/.test(sql)) return [[{ id: 1, slug: 'peste' }]];
        if (/SELECT id, titre FROM sources/.test(sql)) return [[{ id: 10, titre: 'Existante' }]];
        if (/INSERT INTO sources/.test(sql)) return [{ affectedRows: 1, insertId: ++id }];
        if (/INSERT IGNORE INTO pathologie_sources/.test(sql))
          return [{ affectedRows: params[1] === 10 ? 0 : 1 }];
        return [[]];
      }),
    };
    return conn;
  }

  it('n’ajoute que les sources et les liens absents, sans rien modifier ni supprimer', async () => {
    const conn = connexion();
    const res = await chargerProtocolesValidation(conn, {
      sources: [
        { code: 'db-1', titre: 'Existante', niveau: 1, type: 'recommandation', url: 'https://example.org' },
        {
          code: 'oms-peste',
          titre: 'WHO guidelines for plague management',
          niveau: 1,
          type: 'recommandation',
          url: 'https://www.who.int/x',
          departement: 'medecine-interne',
        },
      ],
      fiches: { peste: ['db-1', 'oms-peste'] },
    });
    expect(res).toEqual({ sources_ajoutees: 1, liens_ajoutes: 1 });
    const sql = conn.appels.map(([s]) => s).join('\n');
    expect(sql).not.toMatch(/DELETE|UPDATE sources SET|REPLACE/);
    // La source existante n'est ni réinsérée ni modifiée
    expect(conn.appels.filter(([q, p]) => /INSERT INTO sources/.test(q) && p[0] === 'Existante')).toEqual([]);
  });

  it('arrête le chargement si une fiche est inconnue', async () => {
    await expect(
      chargerProtocolesValidation(connexion(), {
        sources: [{ code: 's', titre: 'S', niveau: 1, type: 'guide', url: null }],
        fiches: { 'fiche-inexistante': ['s'] },
      }),
    ).rejects.toThrow(/Fiches inconnues : fiche-inexistante/);
  });
});
