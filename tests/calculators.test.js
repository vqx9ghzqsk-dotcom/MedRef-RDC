import { describe, expect, it } from 'vitest';
import { calculators, getCalculator, runCalculator } from '../src/core/calculators/index.js';

describe('calculatrices', () => {
  it('chaque calculatrice a un code unique et des champs', () => {
    const codes = calculators.map((c) => c.code);
    expect(new Set(codes).size).toBe(codes.length);
    for (const c of calculators) expect(c.fields.length).toBeGreaterThan(0);
  });

  it('couvre tous les codes présents dans les données d’amorçage', () => {
    for (const code of [
      'imc',
      'glasgow',
      'apgar',
      'cockcroft',
      'holliday_segar',
      'debit_perfusion',
      'dose_ponderale',
      'alvarado',
      'blantyre',
      'silverman',
      'qsofa',
      'index_choc',
      'deshydratation_oms',
      'gina_controle',
      'child_pugh',
      'apri',
      'ckd_epi',
    ]) {
      expect(getCalculator(code)).not.toBeNull();
    }
  });

  it('IMC', () => {
    const r = runCalculator('imc', { poids: '70', taille: '175' });
    expect(r.ok).toBe(true);
    expect(r.result.value).toBe(22.9);
    expect(r.result.level).toBe('normal');
    expect(runCalculator('imc', { poids: '55', taille: '175' }).result.interpretation).toBe('Maigreur');
  });

  it('accepte la virgule décimale', () => {
    expect(runCalculator('imc', { poids: '70,5', taille: '175' }).result.value).toBe(23);
  });

  it('signale les champs manquants ou hors bornes', () => {
    expect(runCalculator('imc', { poids: '70' })).toEqual({ ok: false, error: 'Renseignez « Taille »' });
    expect(runCalculator('imc', { poids: 'abc', taille: '170' }).ok).toBe(false);
    expect(runCalculator('imc', { poids: '-3', taille: '170' }).ok).toBe(false);
  });

  it('Glasgow', () => {
    expect(runCalculator('glasgow', { yeux: '4', verbal: '5', moteur: '6' }).result.display).toBe('15/15');
    const coma = runCalculator('glasgow', { yeux: '1', verbal: '2', moteur: '4' }).result;
    expect(coma.value).toBe(7);
    expect(coma.level).toBe('grave');
  });

  it('Apgar', () => {
    const r = runCalculator('apgar', {
      fc: '2',
      respiration: '2',
      tonus: '2',
      reactivite: '1',
      coloration: '1',
    });
    expect(r.result.value).toBe(8);
    expect(r.result.level).toBe('normal');
    expect(
      runCalculator('apgar', { fc: '0', respiration: '0', tonus: '1', reactivite: '0', coloration: '0' })
        .result.level,
    ).toBe('grave');
  });

  it('Cockcroft-Gault avec conversion d’unités', () => {
    const base = { age: '60', poids: '70', sexe: 'homme' };
    const umol = runCalculator('cockcroft', { ...base, creatinine: '100', unite: 'umol' }).result.value;
    expect(umol).toBeCloseTo(68.9, 1);
    const mgL = runCalculator('cockcroft', { ...base, creatinine: '11.312', unite: 'mgL' }).result.value;
    expect(mgL).toBeCloseTo(umol, 0);
    const femme = runCalculator('cockcroft', { ...base, sexe: 'femme', creatinine: '100', unite: 'umol' })
      .result.value;
    expect(femme).toBeLessThan(umol);
  });

  it('Holliday-Segar (100/50/20)', () => {
    expect(runCalculator('holliday_segar', { poids: '8' }).result.value).toBe(800);
    expect(runCalculator('holliday_segar', { poids: '15' }).result.value).toBe(1250);
    expect(runCalculator('holliday_segar', { poids: '30' }).result.value).toBe(1700);
  });

  it('débit de perfusion', () => {
    const r = runCalculator('debit_perfusion', { volume: '500', duree: '4', facteur: '20' }).result;
    expect(r.value).toBe(42);
    expect(r.interpretation).toBe('Débit : 125 mL/h');
  });

  it('dose pondérale avec plafond', () => {
    expect(runCalculator('dose_ponderale', { poids: '12', dose: '2.4' }).result.value).toBe(28.8);
    const capped = runCalculator('dose_ponderale', { poids: '50', dose: '0.5', max: '10' }).result;
    expect(capped.value).toBe(10);
    expect(capped.level).toBe('attention');
  });

  it('Alvarado', () => {
    const all = Object.fromEntries(getCalculator('alvarado').fields.map((f) => [f.name, true]));
    expect(runCalculator('alvarado', all).result.value).toBe(10);
    expect(runCalculator('alvarado', {}).result.value).toBe(0);
    expect(
      runCalculator('alvarado', { defense: true, leucocytose: true, migration: true }).result.level,
    ).toBe('attention');
  });

  it('DFG CKD-EPI 2021 (valeurs de référence)', () => {
    const h = runCalculator('ckd_epi', { age: '50', sexe: 'homme', creatinine: '1', unite: 'mgdL' });
    expect(h.result.value).toBeCloseTo(91.7, 1);
    expect(h.result.interpretation).toMatch(/^G1/);
    const f = runCalculator('ckd_epi', { age: '60', sexe: 'femme', creatinine: '70', unite: 'umol' });
    expect(f.result.value).toBeCloseTo(85.3, 0);
    expect(f.result.interpretation).toMatch(/^G2/);
  });

  it('APRI (seuils OMS 2024)', () => {
    const r = runCalculator('apri', { asat: '80', lsn: '40', plaquettes: '100' });
    expect(r.result.value).toBe(2);
    expect(r.result.level).toBe('attention');
    expect(runCalculator('apri', { asat: '200', lsn: '40', plaquettes: '100' }).result.level).toBe('grave');
  });

  it('index de choc', () => {
    const r = runCalculator('index_choc', { fc: '120', pas: '100' });
    expect(r.result.value).toBe(1.2);
    expect(r.result.level).toBe('grave');
  });

  it('classification OMS de la déshydratation (plans A, B, C)', () => {
    const base = { etat: 'normal', yeux: false, boire: 'normal', pli: 'immediat' };
    expect(runCalculator('deshydratation_oms', base).result.display).toBe('Pas de déshydratation');
    expect(
      runCalculator('deshydratation_oms', { ...base, etat: 'agite', boire: 'avide' }).result.display,
    ).toBe('Signes évidents');
    expect(
      runCalculator('deshydratation_oms', { ...base, etat: 'lethargique', yeux: true }).result.level,
    ).toBe('grave');
    expect(runCalculator('deshydratation_oms', { ...base, boire: '' }).ok).toBe(false);
  });

  it('Child-Pugh, Blantyre, qSOFA', () => {
    const cp = runCalculator('child_pugh', {
      bilirubine: 2,
      albumine: 2,
      inr: 2,
      ascite: 2,
      encephalopathie: 2,
    });
    expect(cp.result.display).toBe('C (10)');
    expect(runCalculator('blantyre', { yeux: 1, moteur: 1, verbal: 0 }).result.level).toBe('grave');
    expect(runCalculator('qsofa', { fr: true, pas: true }).result.value).toBe(2);
  });

  it('code inconnu', () => {
    expect(runCalculator('inconnu', {}).ok).toBe(false);
  });
});
