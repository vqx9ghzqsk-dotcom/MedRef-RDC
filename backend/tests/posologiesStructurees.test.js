'use strict';

const { analyserFrequence, analyserDuree, analyserDosage } = require('../db/posologiesStructurees');

describe('analyserFrequence', () => {
  it.each([
    ['1 fois par jour', { frequence_type: 'prises_par_jour', prises_par_jour: 1 }],
    ['2 fois par jour', { frequence_type: 'prises_par_jour', prises_par_jour: 2 }],
    ['1 fois par jour, à jeun', { frequence_type: 'prises_par_jour', prises_par_jour: 1 }],
    ['Toutes les 8 h', { frequence_type: 'intervalle', prises_par_jour: 3, intervalle_heures: 8 }],
    ['Toutes les 6 h', { frequence_type: 'intervalle', prises_par_jour: 4, intervalle_heures: 6 }],
    ['Dose unique', { frequence_type: 'dose_unique' }],
    ['Perfusion', { frequence_type: 'perfusion' }],
    ['H0, H12, H24 puis toutes les 24 h', { frequence_type: 'schema' }],
    ['Dose de charge', { frequence_type: 'schema' }],
  ])('« %s »', (texte, attendu) => {
    expect(analyserFrequence(texte)).toMatchObject(attendu);
  });

  it.each([
    '1–2 fois par jour',
    '2 à 3 fois par jour',
    'Par jour, en 8 repas',
    '30–60 min avant l’incision',
    '',
  ])('laisse « %s » à compléter à la main', (texte) => {
    expect(analyserFrequence(texte)).toBeNull();
  });
});

describe('analyserDuree', () => {
  it.each([
    ['3 jours', { min: 3, max: null, unite: 'jours' }],
    ['5–7 jours', { min: 5, max: 7, unite: 'jours' }],
    ['≤ 5–7 jours', { min: 5, max: 7, unite: 'jours' }],
    ['10–14 jours', { min: 10, max: 14, unite: 'jours' }],
    ['6 mois', { min: 6, max: null, unite: 'mois' }],
    ['4 doses', { min: 4, unite: 'doses' }],
    ['Maximum 10 h', { min: 10, unite: 'heures' }],
  ])('« %s »', (texte, attendu) => {
    expect(analyserDuree(texte)).toEqual([expect.objectContaining({ ...attendu, defaut: true })]);
  });

  it.each([
    'Jusqu’à reprise de la voie orale',
    '6 mois (2RHZE/4RH)',
    'Au moins 24 h, puis CTA de 3 jours',
    '< 12 mois : 6 h ; ≥ 12 mois : 3 h',
    'De 12 à 36 SA',
  ])('laisse « %s » à compléter à la main', (texte) => {
    expect(analyserDuree(texte)).toBeNull();
  });
});

describe('analyserDosage (catalogue)', () => {
  it('comprimés et gélules : par unité, grammes convertis en mg', () => {
    expect(analyserDosage('500 mg', 'Comprimé')).toEqual([
      expect.objectContaining({
        forme: 'comprime',
        quantite: 500,
        unite: 'mg',
        par_quantite: 1,
        par_unite: 'comprime',
      }),
    ]);
    expect(analyserDosage('1 g', 'Comprimé')[0]).toMatchObject({ quantite: 1000, unite: 'mg' });
  });

  it('suspension buvable : quantité par volume', () => {
    expect(analyserDosage('125 mg/5 ml ; 250 mg/5 ml', 'Sirop, suspension, solution buvable')).toEqual([
      expect.objectContaining({
        forme: 'suspension_buvable',
        quantite: 125,
        par_quantite: 5,
        par_unite: 'ml',
      }),
      expect.objectContaining({
        forme: 'suspension_buvable',
        quantite: 250,
        par_quantite: 5,
        par_unite: 'ml',
      }),
    ]);
  });

  it('liste mixte gélules et suspension', () => {
    const r = analyserDosage('250 mg ; 500 mg ; 125 mg/5 ml', 'Gélule', 'Gél. ; Pd. Pr. Susp. Orale');
    expect(r.map((p) => p.libelle)).toEqual([
      'Gélule 250 mg',
      'Gélule 500 mg',
      'Solution ou suspension buvable 125 mg/5 mL',
    ]);
  });

  it('injectable : par flacon, ou par mL', () => {
    expect(analyserDosage('1 g', 'Injectable', 'Pd. pr. Sol. Inj.')[0]).toMatchObject({
      forme: 'injectable',
      quantite: 1000,
      par_unite: 'flacon',
    });
    expect(analyserDosage('40 mg/ml', 'Injectable', 'Sol. inj.')[0]).toMatchObject({
      forme: 'injectable',
      quantite: 40,
      par_quantite: 1,
      par_unite: 'ml',
    });
  });

  it('ignore les associations et les formes non reconnues', () => {
    expect(analyserDosage('100 mg/12,5 mg', 'Sirop, suspension, solution buvable')).toEqual([]);
    expect(analyserDosage('1 %', 'Topique (crème, pommade, gel, solution cutanée)')).toEqual([]);
    expect(analyserDosage('500 mg', null)).toEqual([]);
  });
});
