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
