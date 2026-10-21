'use strict';

const { nomNormalise } = require('../db/selection');
const { OPERATEURS_RETENUS } = require('../db/seed-data/operateurs-retenus');

const retenu = (nom) => OPERATEURS_RETENUS.some((r) => r.motif.test(nomNormalise(nom)));

describe('opérateurs retenus', () => {
  it('reconnaît les écritures du répertoire des AMM', () => {
    for (const nom of [
      'Arau Phar',
      'Shalina Healthcare',
      'Zydus/Cadila',
      'JANSSEN CILAG S.P.A.Via C. JANSSEN',
      'Novo Nordisk Production SAS',
      'MACLEODS PHARMACEUTICALS LTD. Atlanta Arcade',
      'Générique multisource',
      'Organon',
      'Nutriset Hameau du Bois Richard',
      'AstraZeneca',
      'Eli Lilly',
      'Guilin Pharmaceutical Co. Ltd',
      'KBN-ZHEJIANG PHARMACEUTICAL CO. LTD',
      'OPELLA HEALTHCARE INTERNATIONAL SAS',
      'Shanhai Fosun Pharmaceutical Development Co',
      'Laboratoire PhatkinN°',
      'Cooperation Pharmaceutique Francaise Place Lucien Auvert',
      'A. Nattermann & Cie. GmbH Nattermannallee',
    ]) {
      expect(retenu(nom)).toBe(true);
    }
  });

  it('ne retient pas les noms voisins d’autres firmes', () => {
    for (const nom of [
      'Hetero',
      'UNIQUE GLOBAL HEALTHCARE PVT LTD GUT NO',
      'PRINCE SUPPLICO',
      'SaintSun Pharmaco Ltd',
      'Rochem International',
      'SP LABO N.V',
      'GUILIN ZIZHU LATEX CO.,LTDNo',
      'COOPER PHARMA LIMITED',
      'Delpharm Dijon',
      'Exphar',
    ]) {
      expect(retenu(nom)).toBe(false);
    }
  });
});

describe('firme retenue pour certaines marques seulement', () => {
  const { appliquerSelection } = require('../db/selection');

  it('Biocodex : seul Acupan (néfopam, fiche Douleur postopératoire) est affiché', async () => {
    const biocodex = OPERATEURS_RETENUS.find((r) => r.nom === 'Biocodex');
    expect(biocodex.marques).toEqual(['Acupan']);
    expect(retenu('Biocodex')).toBe(true);

    const requetes = [];
    const conn = {
      execute: jest.fn(async (sql, params) => {
        requetes.push([sql, params]);
        if (/SELECT id, nom FROM operateurs/.test(sql)) return [[{ id: 54, nom: 'Biocodex' }]];
        if (/SELECT id FROM operateurs WHERE nom = \?/.test(sql)) return [[]];
        return [{ affectedRows: 0 }];
      }),
      query: jest.fn(async (sql, params) => {
        requetes.push([sql, params]);
        return [{ affectedRows: /masque = 1/.test(sql) ? 1 : 0 }];
      }),
    };
    const r = await appliquerSelection(conn, {
      OPERATEURS_RETENUS: [biocodex],
      TITULAIRES: [],
    });
    expect(r.produits_masques).toBe(1);
    const masquage = requetes.find(([sql]) => /SET masque = 1/.test(sql));
    expect(masquage[1]).toEqual([[54], ['Acupan']]);
  });
});
