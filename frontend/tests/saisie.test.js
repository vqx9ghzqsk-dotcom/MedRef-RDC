import { describe, expect, it } from 'vitest';
import {
  bornesTexte,
  exempleNombre,
  nettoyerTexte,
  normaliserNombre,
  validerNombre,
} from '../src/core/saisie.js';

describe('normalisation des nombres saisis', () => {
  it('accepte la virgule, le point, les espaces de milliers et une unité tapée à la suite', () => {
    expect(normaliserNombre('12,5')).toBe(12.5);
    expect(normaliserNombre('12.5')).toBe(12.5);
    expect(normaliserNombre('1 000')).toBe(1000);
    expect(normaliserNombre(`12${String.fromCharCode(0x202f)}500`)).toBe(12500);
    expect(normaliserNombre('70 kg')).toBe(70);
    expect(normaliserNombre('120mmHg')).toBe(120);
    expect(normaliserNombre('1.234,5')).toBe(1234.5);
    expect(normaliserNombre(' 3 ')).toBe(3);
  });

  it('distingue le vide (null) de l’illisible (NaN)', () => {
    expect(normaliserNombre('')).toBeNull();
    expect(normaliserNombre('   ')).toBeNull();
    expect(normaliserNombre(undefined)).toBeNull();
    expect(normaliserNombre('abc')).toBeNaN();
    expect(normaliserNombre('120/80')).toBeNaN();
    expect(normaliserNombre('12,5,3')).toBeNaN();
  });
});

describe('validation et aides de saisie', () => {
  const poids = { label: 'Poids', min: 0.3, max: 300, unit: 'kg' };

  it('renvoie la valeur ou un message prêt à afficher', () => {
    expect(validerNombre('70 kg', poids)).toEqual({ valeur: 70, erreur: null });
    expect(validerNombre('', poids).erreur).toBe('Renseignez « Poids »');
    expect(validerNombre('', { ...poids, optional: true })).toEqual({ valeur: null, erreur: null });
    expect(validerNombre('soixante', poids).erreur).toMatch(/doit être un nombre/);
    expect(validerNombre('900', poids).erreur).toMatch(/entre 0,3 et 300 kg/);
  });

  it('propose un exemple et les bornes en français', () => {
    expect(exempleNombre({ name: 'poids' })).toBe('ex. 12,5');
    expect(exempleNombre({ name: 'inconnu', min: 0, max: 100 })).toBe('ex. 25');
    expect(exempleNombre({ name: 'inconnu' })).toBe('');
    expect(bornesTexte({ min: 1, max: 400, unit: 'kg' })).toBe('Entre 1 et 400 kg');
    expect(bornesTexte({ min: 0 })).toBe('Au moins 0');
  });

  it('nettoie le texte libre sans toucher aux retours à la ligne', () => {
    expect(nettoyerTexte('  Amoxicilline    500 mg  ')).toBe('Amoxicilline 500 mg');
    expect(nettoyerTexte('ligne 1\nligne   2')).toBe('ligne 1\nligne 2');
    expect(nettoyerTexte('abcdef', 3)).toBe('abc');
  });
});
