import { describe, expect, it } from 'vitest';
import { calculerDose, parsePoids } from '../src/core/posologie.js';

describe('calcul de dose selon le poids', () => {
  it('multiplie la dose par kg par le poids', () => {
    const r = calculerDose({ dose_par_kg: 3, dose_max: null, unite: 'mg' }, '12');
    expect(r).toMatchObject({ valeur: 36, plafonnee: false, affichage: '36 mg' });
  });

  it('plafonne à la dose maximale et garde le calcul brut', () => {
    const r = calculerDose({ dose_par_kg: 15, dose_max: 1000, unite: 'mg' }, 80);
    expect(r).toMatchObject({ valeur: 1000, brute: 1200, plafonnee: true });
  });

  it('accepte la virgule et les unités autres que mg', () => {
    expect(calculerDose({ dose_par_kg: 0.1, unite: 'UI' }, '7,5').affichage).toBe('0,75 UI');
    expect(calculerDose({ dose_par_kg: 5, unite: 'mL' }, '3,2').valeur).toBe(16);
  });

  it('arrondit selon l’ordre de grandeur', () => {
    expect(calculerDose({ dose_par_kg: 2.4 }, 63).valeur).toBe(151);
    expect(calculerDose({ dose_par_kg: 0.3 }, 37).valeur).toBe(11.1);
    expect(calculerDose({ dose_par_kg: 0.15 }, 3.4).valeur).toBe(0.51);
  });

  it('ne calcule rien sans dose pondérale ou avec un poids invalide', () => {
    expect(calculerDose({ dose_par_kg: null }, 20)).toBeNull();
    expect(calculerDose({ dose_par_kg: 10 }, '')).toBeNull();
    expect(calculerDose({ dose_par_kg: 10 }, 'abc')).toBeNull();
    expect(calculerDose({ dose_par_kg: 10 }, 0.1)).toBeNull();
    expect(calculerDose({ dose_par_kg: 10 }, 400)).toBeNull();
    expect(parsePoids('0,3')).toBe(0.3);
  });
});
