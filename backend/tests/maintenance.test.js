'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { isTestDatabase } = require('../db/connexion');
const { listMigrations, checksum } = require('../db/migrations');
const { listBackups, pruneBackups } = require('../db/sauvegarde');

let tmp;
beforeEach(() => {
  tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'medref-'));
});
afterEach(() => fs.rmSync(tmp, { recursive: true, force: true }));

describe('garde-fou des bases', () => {
  it('ne reconnaît comme base de test que les noms explicites', () => {
    expect(isTestDatabase('medref_rdc_test')).toBe(true);
    expect(isTestDatabase('medref_test')).toBe(true);
    expect(isTestDatabase('test')).toBe(true);
    expect(isTestDatabase('medref_rdc')).toBe(false);
    expect(isTestDatabase('medref_rdc_attestation')).toBe(false);
  });
});

describe('migrations', () => {
  it('ordonne les fichiers par numéro et ignore les autres fichiers', () => {
    fs.writeFileSync(path.join(tmp, '002_index.sql'), 'SELECT 2;');
    fs.writeFileSync(path.join(tmp, '001_colonne.sql'), 'SELECT 1;');
    fs.writeFileSync(path.join(tmp, 'LISEZMOI.md'), '# doc');
    expect(listMigrations(tmp).map((m) => m.file)).toEqual(['001_colonne.sql', '002_index.sql']);
  });

  it('refuse un nom invalide, un numéro en double ou le numéro 000', () => {
    fs.writeFileSync(path.join(tmp, '1_trop_court.sql'), '');
    expect(() => listMigrations(tmp)).toThrow(/invalide/);
    fs.rmSync(path.join(tmp, '1_trop_court.sql'));
    fs.writeFileSync(path.join(tmp, '003_a.sql'), '');
    fs.writeFileSync(path.join(tmp, '003_b.sql'), '');
    expect(() => listMigrations(tmp)).toThrow(/003/);
    fs.rmSync(path.join(tmp, '003_b.sql'));
    fs.writeFileSync(path.join(tmp, '000_depart.sql'), '');
    expect(() => listMigrations(tmp)).toThrow(/réservé/);
  });

  it('calcule la même empreinte quelles que soient les fins de ligne (Windows / Linux)', () => {
    expect(checksum('ALTER TABLE a;\r\nSELECT 1;\r\n')).toBe(checksum('ALTER TABLE a;\nSELECT 1;\n'));
  });

  it('les migrations du projet sont valides', () => {
    expect(() => listMigrations()).not.toThrow();
  });
});

describe('rotation des sauvegardes', () => {
  const creer = (nom, ageJours) => {
    const file = path.join(tmp, nom);
    fs.writeFileSync(file, '');
    const t = new Date(Date.now() - ageJours * 86400000);
    fs.utimesSync(file, t, t);
  };

  it('garde les plus récentes et ne supprime jamais les sauvegardes « avant-… »', () => {
    for (let j = 0; j < 5; j += 1) creer(`medref_rdc-2026-10-0${5 - j}_120000.sql.gz`, j);
    creer('medref_rdc-2026-09-01_120000-avant-reset.sql.gz', 40);
    creer('medref_rdc_test-2026-09-01_120000.sql.gz', 40);
    creer('notes.txt', 50);

    const removed = pruneBackups(tmp, 'medref_rdc', 2).map((f) => path.basename(f));
    expect(removed).toEqual([
      'medref_rdc-2026-10-03_120000.sql.gz',
      'medref_rdc-2026-10-02_120000.sql.gz',
      'medref_rdc-2026-10-01_120000.sql.gz',
    ]);
    const restantes = listBackups(tmp, 'medref_rdc');
    expect(restantes.map((b) => path.basename(b.file))).toEqual([
      'medref_rdc-2026-10-05_120000.sql.gz',
      'medref_rdc-2026-10-04_120000.sql.gz',
      'medref_rdc-2026-09-01_120000-avant-reset.sql.gz',
    ]);
    expect(restantes[2].motif).toBe('avant-reset');
    expect(fs.existsSync(path.join(tmp, 'medref_rdc_test-2026-09-01_120000.sql.gz'))).toBe(true);
  });
});

describe('sauvegarde automatique', () => {
  it("ne refait pas de sauvegarde si la dernière date de moins de l'intervalle", async () => {
    jest.resetModules();
    process.env.BACKUP_DIR = tmp;
    const config = require('../src/config');
    const nom = `${config.db.database}-2026-10-05_120000.sql.gz`;
    fs.writeFileSync(path.join(tmp, nom), '');
    const { sauvegarderSiNecessaire } = require('../src/sauvegardeAuto');
    const log = { log: jest.fn(), error: jest.fn() };
    expect(await sauvegarderSiNecessaire({ log })).toBeNull();
    expect(log.error).not.toHaveBeenCalled();
    delete process.env.BACKUP_DIR;
  });
});

describe('contenu sémiologique', () => {
  const data = require('../db/seed-data');
  const { verifier } = require('../db/semiologie');
  const { signesAlerte } = require('../src/services/formes');

  it('couvre toutes les fiches et toutes leurs urgences, avec des références valides', () => {
    expect(() => verifier(data)).not.toThrow();
    for (const p of data.pathologies) {
      expect(data.semiologie[p.slug]?.formes.length).toBeGreaterThan(0);
      for (const u of p.urgences || []) expect(data.semiologie[p.slug].urgences?.[u]).toBeTruthy();
    }
    const examens = new Set(data.examens.map((e) => e.slug));
    const symptomes = new Set(data.symptomes.map(([nom]) => nom));
    for (const fiche of Object.values(data.semiologie)) {
      for (const f of fiche.formes)
        for (const [slug] of f.examens || []) expect(examens.has(slug)).toBe(true);
    }
    for (const s of data.syndromes)
      for (const nom of s.symptomes || []) expect(symptomes.has(nom)).toBe(true);
  });

  it('refuse une forme de type inconnu, un syndrome inexistant ou une fiche sans forme commune', () => {
    const base = { syndromes: [{ slug: 'syndrome-x' }], glossaire: [] };
    expect(() =>
      verifier({ ...base, semiologie: { a: { formes: [{ nom: 'F', type: 'bizarre' }] } } }),
    ).toThrow(/type bizarre/);
    expect(() =>
      verifier({ ...base, semiologie: { a: { formes: [{ nom: 'F', type: 'commune', syndromes: ['y'] }] } } }),
    ).toThrow(/syndrome y/);
    expect(() =>
      verifier({ ...base, semiologie: { a: { formes: [{ nom: 'F', type: 'gravite' }] } } }),
    ).toThrow(/pas de forme commune/);
  });

  it('signes d’alerte : ceux de la fiche, sinon les premiers signes de gravité de l’urgence', () => {
    expect(signesAlerte('Coma, convulsions', '- autre')).toBe('Coma, convulsions');
    expect(signesAlerte(null, '- **Coma**\n- Convulsions\n- Choc\n- Ictère')).toBe(
      'Coma ; Convulsions ; Choc',
    );
    expect(signesAlerte(null, null)).toBeNull();
  });
});
