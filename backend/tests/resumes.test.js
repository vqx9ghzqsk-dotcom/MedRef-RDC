'use strict';

jest.mock('../src/services/etats', () => ({
  etatPathologie: jest.fn(async () => ({ resume: 'instantané' })),
}));

const { completerResumesTronques, ANCIENNE_LIMITE } = require('../db/resumes');

/** Connexion factice : une table `pathologies` en mémoire, et la trace des écritures. */
function base(lignes) {
  const ecritures = [];
  const conn = {
    query: async (sql, params) => {
      if (sql.startsWith('SELECT id, resume FROM pathologies')) {
        const l = lignes.find((x) => x.slug === params[0]);
        return [l ? [l] : []];
      }
      if (sql.startsWith('UPDATE pathologies SET resume')) {
        lignes.find((x) => x.id === params[1]).resume = params[0];
      }
      ecritures.push(sql.trim().split(/\s+/)[0] + ' ' + sql.trim().split(/\s+/)[2]);
      return [[]];
    },
  };
  return { conn, ecritures };
}

const long = 'a'.repeat(ANCIENNE_LIMITE - 10) + 'fin coupée ici, puis la suite du résumé.';

describe('Résumés tronqués à 500 caractères', () => {
  it('complète un résumé coupé à la limite et consigne la modification', async () => {
    const lignes = [{ id: 1, slug: 'x', resume: long.slice(0, ANCIENNE_LIMITE) }];
    const { conn, ecritures } = base(lignes);
    expect(await completerResumesTronques(conn, [{ slug: 'x', resume: long }])).toEqual({ completes: 1 });
    expect(lignes[0].resume).toBe(long);
    expect(ecritures).toEqual(['UPDATE SET', 'INSERT modifications']);
  });

  it('ne retouche ni un résumé complet, ni un résumé réécrit, ni un résumé court', async () => {
    const lignes = [
      { id: 1, slug: 'complet', resume: long },
      { id: 2, slug: 'reecrit', resume: 'Résumé réécrit par le médecin.' },
      { id: 3, slug: 'court', resume: 'Court.' },
    ];
    const { conn, ecritures } = base(lignes);
    const sources = [
      { slug: 'complet', resume: long },
      { slug: 'reecrit', resume: long },
      { slug: 'court', resume: 'Court.' },
      { slug: 'absente', resume: long },
    ];
    expect(await completerResumesTronques(conn, sources)).toEqual({ completes: 0 });
    expect(ecritures).toEqual([]);
    expect(lignes.map((l) => l.resume)).toEqual([long, 'Résumé réécrit par le médecin.', 'Court.']);
  });

  it('compte en caractères comme MySQL, pas en unités UTF-16', async () => {
    const emoji = '😀'.repeat(ANCIENNE_LIMITE) + ' suite';
    const coupe = Array.from(emoji).slice(0, ANCIENNE_LIMITE).join('');
    const lignes = [{ id: 1, slug: 'e', resume: coupe }];
    const { conn } = base(lignes);
    await completerResumesTronques(conn, [{ slug: 'e', resume: emoji }]);
    expect(lignes[0].resume).toBe(emoji);
  });
});
