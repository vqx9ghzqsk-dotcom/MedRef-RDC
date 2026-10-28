'use strict';

const { publicVise } = require('../src/routes/diagnostic');

describe('aide au diagnostic : public visé des fiches', () => {
  it('déduit l’âge, le sexe et le contexte obstétrical de la spécialité et du nom', () => {
    expect(publicVise('Paludisme grave de l’enfant', 'Infectiologie pédiatrique').ages).toEqual([
      'nn',
      'petit',
      'grand',
    ]);
    expect(publicVise('Ictère néonatal', 'Néonatologie').ages).toEqual(['nn']);
    expect(publicVise('Neuropaludisme de l’adulte', 'Neuro-infectiologie').ages).toEqual(['adulte', 'age']);
    expect(publicVise('Éclampsie', 'Urgences obstétricales')).toEqual({
      ages: null,
      sexe: 'F',
      obstetrique: true,
    });
    expect(publicVise('Fibrome utérin', 'Gynécologie').sexe).toBe('F');
    expect(publicVise('Hypertrophie bénigne de la prostate', 'Urologie').sexe).toBe('M');
    expect(publicVise('Tuberculose pulmonaire', 'Pneumologie')).toEqual({
      ages: null,
      sexe: null,
      obstetrique: false,
    });
  });
});

describe('aide au diagnostic : référentiel de la démarche sémiologique', () => {
  const data = require('../db/seed-data');
  const { APPAREILS, PHYSIQUES, TERRAINS, CONTEXTES } = require('../db/seed-data/diagnostic');
  const fiches = [...data.pathologies, ...(data.ajouts.fiches || [])];
  const noms = new Set([
    ...data.symptomes.map((s) => s[0] ?? s.nom),
    ...fiches.flatMap((p) => (p.symptomes || []).map(([n]) => n)),
  ]);

  it('chaque signe de la base est rangé dans un seul appareil, sans nom inconnu', () => {
    const ranges = APPAREILS.flatMap((a) => a.symptomes);
    expect(ranges.filter((n) => !noms.has(n))).toEqual([]);
    expect(new Set(ranges).size).toBe(ranges.length);
    expect([...noms].filter((n) => !ranges.includes(n))).toEqual([]);
    expect(PHYSIQUES.filter((n) => !ranges.includes(n))).toEqual([]);
  });

  it('terrains et contextes : identifiants uniques et motifs valides', () => {
    for (const liste of [TERRAINS, CONTEXTES]) {
      expect(new Set(liste.map((t) => t.id)).size).toBe(liste.length);
      for (const t of liste) expect(() => new RegExp(t.motif)).not.toThrow();
    }
  });
});

describe('aide au diagnostic : fiches proposées comme hypothèses', () => {
  const { publicVise, estDiagnostic } = require('../src/routes/diagnostic');
  it('obstétrique reconnue par le nom ; ménopause hors grossesse ; fiches de prise en charge exclues', () => {
    expect(publicVise('Tuberculose et grossesse', 'Infectiologie').obstetrique).toBe(true);
    expect(publicVise('Psychose puerpérale', 'Psychiatrie').obstetrique).toBe(true);
    expect(publicVise('Grossesse extra-utérine', 'Gynécologie').obstetrique).toBe(false);
    expect(publicVise('Saignements après la ménopause', 'Gynécologie')).toMatchObject({
      horsGrossesse: true,
    });
    expect(estDiagnostic('Rééducation après un AVC')).toBe(false);
    expect(estDiagnostic('Contraception d’urgence')).toBe(false);
    expect(estDiagnostic('AVC ischémique')).toBe(true);
  });
});

describe('aide au diagnostic : épidémiologie en RDC', () => {
  const data = require('../db/seed-data');
  const epi = require('../db/seed-data/epidemiologie');
  const slugs = new Set([...data.pathologies, ...(data.ajouts.fiches || [])].map((p) => p.slug));

  it('chaque fiche classée existe, une seule fréquence par fiche, foyers dans les 26 provinces', () => {
    const classees = [...epi.TRES_FREQUENTES, ...epi.FREQUENTES, ...epi.RARES];
    expect(classees.filter((s) => !slugs.has(s))).toEqual([]);
    expect(new Set(classees).size).toBe(classees.length);
    expect(epi.PROVINCES).toHaveLength(26);
    for (const [slug, provinces] of Object.entries(epi.FOYERS)) {
      expect(slugs.has(slug)).toBe(true);
      expect(provinces.filter((p) => !epi.PROVINCES.includes(p))).toEqual([]);
    }
    expect(epi.frequenceDe('paludisme-simple')).toBe('tres_frequente');
    expect(epi.frequenceDe('fiche-inconnue')).toBe('peu_frequente');
    expect(epi.saisonDe('cholera-enfant')).toBe('pluies');
  });
});

describe('aide au diagnostic : signes discriminants des fiches', () => {
  const data = require('../db/seed-data');
  const { SIGNES_FICHES } = require('../db/seed-data/signes-fiches');
  const { APPAREILS, TERRAINS, CONTEXTES } = require('../db/seed-data/diagnostic');
  const { periodeObstetricale } = require('../src/routes/diagnostic');
  const slugs = new Set([...data.pathologies, ...(data.ajouts.fiches || [])].map((p) => p.slug));
  const signes = new Set(APPAREILS.flatMap((a) => a.symptomes));

  it('fiches, signes, fréquences, terrains et contextes existent', () => {
    const frequences = ['tres_frequent', 'frequent', 'occasionnel', 'rare'];
    for (const [slug, s] of Object.entries(SIGNES_FICHES)) {
      expect(slugs.has(slug)).toBe(true);
      for (const [nom, f] of s.ajouter || []) {
        expect(signes.has(nom)).toBe(true);
        expect(frequences).toContain(f);
      }
      for (const nom of [...(s.cles || []), ...(s.exclusion || [])]) expect(signes.has(nom)).toBe(true);
      for (const t of s.requiert?.terrains || []) expect(TERRAINS.some((x) => x.id === t)).toBe(true);
      for (const c of s.requiert?.contextes || []) expect(CONTEXTES.some((x) => x.id === c)).toBe(true);
    }
  });

  it('période obstétricale : avant ou après l’accouchement', () => {
    expect(periodeObstetricale('hemorragie-post-partum', 'Urgences obstétricales')).toBe('apres');
    expect(periodeObstetricale('mastite-abces-du-sein', 'Post-partum')).toBe('apres');
    expect(periodeObstetricale('placenta-praevia', 'Pathologies obstétricales')).toBe('avant');
    expect(periodeObstetricale('eclampsie', 'Pathologies obstétricales')).toBeNull();
  });
});

describe('aide au diagnostic : performances des examens', () => {
  const data = require('../db/seed-data');
  const { PERFORMANCES } = require('../db/seed-data/performances-examens');
  const texte = JSON.stringify([data.examens, data.pathologies, data.ajouts]);

  it('examens connus, sensibilité et spécificité entre 1 et 100', () => {
    for (const [slug, [se, sp]] of Object.entries(PERFORMANCES)) {
      expect(texte.includes(`"${slug}"`)).toBe(true);
      expect(se).toBeGreaterThan(0);
      expect(se).toBeLessThanOrEqual(100);
      expect(sp).toBeGreaterThan(0);
      expect(sp).toBeLessThanOrEqual(100);
    }
  });
});

describe('aide au diagnostic : médicaments essentiels et AWaRe', () => {
  const data = require('../db/seed-data');
  const ess = require('../db/seed-data/medicaments-essentiels');
  const texte = JSON.stringify([data.molecules, data.ajouts, data.posologiesAjoutees]);

  it('groupes AWaRe valides, LNME sans doublon, priorité à la LNME pour le groupe', () => {
    for (const g of [...Object.values(ess.AWARE_LNME), ...Object.values(ess.AWARE_OMS)]) {
      expect(['acces', 'surveillance', 'reserve']).toContain(g);
    }
    expect(new Set(ess.LNME).size).toBe(ess.LNME.length);
    expect(ess.awareDe('amoxicilline')).toEqual({ groupe: 'acces', source: 'LNME 2020' });
    expect(ess.awareDe('levofloxacine')).toEqual({ groupe: 'surveillance', source: 'OMS AWaRe 2023' });
    expect(ess.awareDe('paracetamol')).toBeNull();
    expect(texte.includes('"amoxicilline"')).toBe(true);
  });
});
