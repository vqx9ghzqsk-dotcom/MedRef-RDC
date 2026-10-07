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

  it('les catalogues importés ont des références uniques et une photo pour chaque produit', () => {
    const refs = data.catalogues.flatMap((c) => c.produits.map((p) => p.ref));
    expect(new Set(refs).size).toBe(refs.length);
    expect(
      data.catalogues.every((c) => c.produits.every((p) => /^\/medias\/produits\/.+\.webp$/.test(p.photo))),
    ).toBe(true);
  });
});
