'use strict';

const { construireIndex, rapprocher, normaliser } = require('../db/correspondance');
const data = require('../db/seed-data');

const index = construireIndex(data.molecules);
const lier = (produit) => rapprocher(produit, index);

describe('rapprochement produit de catalogue → molécules', () => {
  it('retire doses, sels et formes, mais garde les chiffres collés au nom', () => {
    expect(normaliser('Quinine bichlorhydrate 300 mg')).toBe('quinine bichlorhydrate');
    expect(normaliser('Vitamine B12 3,75 mcg')).toBe('vitamine b12');
    expect(normaliser('Paracétamol (BP) 500mg')).toBe('paracetamol');
  });

  it('lie une association entièrement connue', () => {
    expect(lier({ dci: 'Artéméther + Luméfantrine' })).toEqual({
      molecules: ['artemether', 'lumefantrine'],
      nbComposants: 2,
      liaison: 'auto',
    });
  });

  it('lie partiellement une association dont un composant est absent de MedRef', () => {
    const r = lier({ dci: 'Paracétamol + Codéine' });
    expect(r).toMatchObject({ molecules: ['paracetamol'], nbComposants: 2, liaison: 'partielle' });
  });

  it('reconnaît synonymes, noms anglais et sels', () => {
    expect(lier({ dci: 'Sulfaméthoxazole + Triméthoprime (cotrimoxazole)' }).molecules).toEqual([
      'cotrimoxazole',
    ]);
    expect(lier({ dci: 'Amoxicillin + Potassium clavulanate' }).molecules).toEqual([
      'amoxicilline',
      'acide-clavulanique',
    ]);
    expect(lier({ dci: 'Losartan potassique' }).molecules).toEqual(['losartan']);
    expect(construireIndex([{ slug: 'meropeneme', dci: 'Méropénème' }]).size).toBe(1);
    expect(
      rapprocher({ dci: 'Méropénem' }, construireIndex([{ slug: 'meropeneme', dci: 'Méropénème' }]))
        .molecules,
    ).toEqual(['meropeneme']);
  });

  it('ne confond pas vitamine B12 et vitamine B6, ni un sel de réhydratation avec du sérum physiologique', () => {
    expect(lier({ dci: 'Vitamine B12' }).molecules).toEqual([]);
    expect(lier({ dci: 'Vitamine B6' }).molecules).toEqual(['pyridoxine']);
    const sro = lier({ dci: 'Chlorure de sodium + Chlorure de potassium + Citrate de sodium + Glucose' });
    expect(sro.molecules).not.toContain('chlorure-de-sodium-0-9');
    expect(sro.molecules).not.toContain('glucose-10');
  });

  it('lit la composition dosée quand l’intitulé n’est qu’un titre de classe (« ± »)', () => {
    const r = lier({ dci: 'Ofloxacine (± Ornidazole)', composition: 'Métronidazole 500 mg' });
    expect(r.molecules).toEqual(['metronidazole']);
    // Variante inconnue sans composition : jamais « auto »
    expect(lier({ dci: 'Amlodipine (± Hydrochlorothiazide)' }).liaison).toBe('partielle');
  });

  it('reconnaît les autres noms (parenthèses), sels, hydrates et variantes d’orthographe', () => {
    const idx = construireIndex([
      { slug: 'vitamine-c', dci: 'Vitamine C (acide ascorbique)' },
      { slug: 'zinc', dci: 'Zinc (sulfate)' },
      { slug: 'gentamicine', dci: 'Gentamicine' },
      { slug: 'vitamine-b1', dci: 'Vitamine B1 (thiamine)' },
      { slug: 'levofloxacine', dci: 'Lévofloxacine' },
      { slug: 'vitamines', dci: 'Vitamines (association)' },
    ]);
    const l = (dci) => rapprocher({ dci }, idx).molecules;
    expect(l('Acide ascorbique')).toEqual(['vitamine-c']);
    expect(l('Sulfate de zinc')).toEqual(['zinc']);
    expect(l('Gentamycine')).toEqual(['gentamicine']);
    expect(l('Thiamine mononitrate')).toEqual(['vitamine-b1']);
    expect(l('Vitamines B1')).toEqual(['vitamine-b1']);
    expect(l('Lévofloxacine hémihydrate')).toEqual(['levofloxacine']);
    // Une précision entre parenthèses n'est pas un nom : « association », « sulfate » seuls
    expect(l('Association')).toEqual([]);
    expect(l('Sulfate')).toEqual([]);
  });

  it('ne prend pas le DHA des oméga-3 pour la dihydroartémisinine', () => {
    expect(
      lier({ dci: 'Oméga-3', composition: 'Huile de poisson 500 mg (18% EPA, 12% DHA)' }).molecules,
    ).toEqual([]);
    expect(lier({ dci: 'DHA + Pipéraquine' }).molecules).toEqual(['dihydroartemisinine', 'piperaquine']);
  });

  it('le répertoire ACOREP est complet : 6 352 lignes AMM, 1 081 opérateurs, 547 fiches à quatre rubriques', () => {
    const { acorep } = data;
    const lignes = acorep.firmes.flatMap((f) => f.produits);
    expect(lignes).toHaveLength(6352);
    expect(acorep.operateurs).toHaveLength(1081);
    // Firmes de la liste des 61, puis tous les autres opérateurs du répertoire
    expect(acorep.firmes.filter((f) => f.section === 'liste')).toHaveLength(35);
    expect(lignes.filter((p) => p.nature === 'cosmetique').length).toBeGreaterThan(500);
    expect(lignes.every((p) => p.marque && 'amm' in p && 'conditionnement' in p)).toBe(true);
    expect(acorep.substances).toHaveLength(547);
    for (const s of acorep.substances) {
      expect([s.mecanisme, s.indications, s.posologie, s.precautions].every(Boolean)).toBe(true);
      expect(s.nb_amm).toBeGreaterThan(0);
    }
  });

  it('les catalogues importés ont des références uniques et une photo pour chaque produit', () => {
    const refs = data.catalogues.flatMap((c) => c.produits.map((p) => p.ref));
    expect(new Set(refs).size).toBe(refs.length);
    expect(
      data.catalogues.every((c) => c.produits.every((p) => /^\/medias\/produits\/.+\.webp$/.test(p.photo))),
    ).toBe(true);
  });

  it('le répertoire fourni par le médecin : marques sans photo, références propres, source indiquée', () => {
    const produits = data.repertoire.flatMap((c) => c.produits);
    const refs = [...produits, ...data.catalogues.flatMap((c) => c.produits)].map((p) => p.ref);
    expect(new Set(refs).size).toBe(refs.length);
    expect(produits.length).toBeGreaterThan(150);
    for (const p of produits) {
      expect(p.ref).toMatch(/^repertoire-[a-z0-9-]+$/);
      expect(p.photo).toBeUndefined();
      expect(p.dci).toBeTruthy();
      expect(p.source).toMatch(/Dr Mingalu/);
    }
    // Pas « ajouté par l'IA » : la photo ajoutée par le médecin suffira à l'afficher
    expect(data.repertoire.every((c) => c.firme.ajoute_par_ia === false && c.firme.nom)).toBe(true);
  });
});

describe('photos de produits fournies par le médecin', () => {
  const fs = require('fs');
  const path = require('path');
  const { PHOTOS, CATALOGUE } = require('../db/seed-data/photos-produits');
  const fichier = (url) => path.join(__dirname, '..', url.replace(/^\//, ''));

  it('chaque photo existe sur le disque, avec sa vignette, et chaque produit a une référence propre', () => {
    const produits = CATALOGUE.flatMap((c) => c.produits);
    const toutes = [...PHOTOS.map((p) => p.photo), ...produits.map((p) => p.photo)];
    for (const url of toutes) {
      expect(url).toMatch(/^\/medias\/produits\/[a-z-]+\/[a-z0-9-]+\.webp$/);
      expect(fs.existsSync(fichier(url))).toBe(true);
      expect(fs.existsSync(fichier(url.replace(/\.webp$/, '-mini.webp')))).toBe(true);
    }
    expect(new Set(produits.map((p) => p.ref)).size).toBe(produits.length);
    for (const p of produits) {
      expect(p.ref).toMatch(/^photo-[a-z0-9-]+$/);
      expect(p.dci).toBeTruthy();
      expect(p.source).toMatch(/Dr Mingalu/);
    }
    // Chaque photo attribuée vise un produit précis : une référence, ou un nom de fiche de départ
    for (const p of PHOTOS) expect(Boolean(p.ref) !== Boolean(p.nom)).toBe(true);
  });
});
