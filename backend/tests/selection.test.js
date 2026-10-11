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
    ]) {
      expect(retenu(nom)).toBe(false);
    }
  });
});
