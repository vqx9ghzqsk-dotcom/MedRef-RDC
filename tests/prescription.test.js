import { describe, expect, it } from 'vitest';
import {
  ageEnJours,
  alertesLigne,
  alertesOrdonnance,
  alertesPatient,
  arrondiPratique,
  calculerDosePatient,
  choisirPosologie,
  convertirMasse,
  droitOrdonnance,
  dureeEnJours,
  libelleDuree,
  meilleurePresentation,
  optionsDuree,
  populationPrincipale,
  populationsPatient,
  posologieEnClair,
  posologiesDosees,
  presentationsCompatibles,
  quantiteADelivrer,
  quantitePresentation,
  rechercherPathologies,
  surfaceCorporelle,
} from '../src/core/prescription.js';

const amoxEnfant = {
  population: 'enfant',
  indication: 'Pneumonie',
  voie: 'Orale',
  dose_par_kg: 40,
  dose_max: 1000,
  dose_base: 'par_prise',
  unite: 'mg',
  frequence_type: 'prises_par_jour',
  prises_par_jour: 2,
  durees: [{ min: 5, max: null, unite: 'jours', contexte: null, defaut: true }],
};
const suspension = {
  forme: 'suspension_buvable',
  voie: 'orale',
  quantite: 250,
  unite: 'mg',
  par_quantite: 5,
  par_unite: 'ml',
  secable: false,
  conditionnement_quantite: 100,
  conditionnement_unite: 'ml',
  libelle: 'Suspension 250 mg/5 mL',
};

describe('patient', () => {
  it('âge et population', () => {
    expect(ageEnJours({ valeur: '2', unite: 'mois' })).toBeCloseTo(60.9, 0);
    expect(populationsPatient({ age: { valeur: 10, unite: 'jours' } })).toEqual(['nouveau_ne', 'enfant']);
    expect(populationsPatient({ age: { valeur: 4, unite: 'ans' } })).toEqual(['enfant']);
    expect(populationsPatient({ age: { valeur: 30, unite: 'ans' }, grossesse: true })).toEqual([
      'grossesse',
      'adulte',
    ]);
    expect(populationPrincipale({ age: { valeur: 30, unite: 'ans' }, grossesse: true })).toBe('adulte');
    expect(populationsPatient({})).toEqual(['adulte']);
  });

  it('surface corporelle de Mosteller', () => {
    expect(surfaceCorporelle(70, 175)).toBe(1.84);
    expect(surfaceCorporelle(70, '')).toBeNull();
    expect(surfaceCorporelle('20,5', 115)).toBe(0.81);
  });

  it('poids obligatoire et cohérence avec l’âge', () => {
    expect(alertesPatient({})[0].niveau).toBe('danger');
    expect(alertesPatient({ poids: '60', age: { valeur: 3, unite: 'ans' } })[0].message).toMatch(
      /inhabituel/,
    );
    expect(alertesPatient({ poids: '14', age: { valeur: 3, unite: 'ans' } })).toEqual([]);
  });
});

describe('dose', () => {
  it('dose par prise au poids avec la dose journalière', () => {
    const d = calculerDosePatient(amoxEnfant, { poids: 12 });
    expect(d.parPrise).toBe(480);
    expect(d.parJour).toBe(960);
    expect(d.calcul).toBe('40 mg/kg × 12 kg = 480 mg par prise');
  });

  it('plafonnement à la dose maximale', () => {
    const d = calculerDosePatient(amoxEnfant, { poids: 30 });
    expect(d.plafonnee).toBe(true);
    expect(d.parPrise).toBe(1000);
    expect(d.calcul).toMatch(/plafonné à 1\s000 mg/);
  });

  it('dose journalière répartie entre les prises', () => {
    const p = { ...amoxEnfant, dose_base: 'par_jour', dose_par_kg: 90, dose_max: 3000, prises_par_jour: 3 };
    const d = calculerDosePatient(p, { poids: 10 });
    expect(d.parJour).toBe(900);
    expect(d.parPrise).toBe(300);
    expect(d.calcul).toMatch(/soit 300 mg × 3 prises/);
  });

  it('intervalle en heures et dose à la surface corporelle', () => {
    const p = { dose_par_m2: 75, unite: 'mg', frequence_type: 'dose_unique' };
    expect(calculerDosePatient(p, { poids: 70, surface: 1.8 }).parPrise).toBe(135);
    const q = { dose_par_kg: 10, unite: 'mg', frequence_type: 'intervalle', intervalle_heures: 8 };
    expect(calculerDosePatient(q, { poids: 10 }).parJour).toBe(300);
  });

  it('pas de calcul sans dose au poids', () => {
    expect(calculerDosePatient({ dose_texte: '1 g', unite: 'mg' }, { poids: 70 })).toBeNull();
  });
});

describe('présentation et quantités', () => {
  it('conversion de masse', () => {
    expect(convertirMasse(1, 'g', 'mg')).toBe(1000);
    expect(convertirMasse(500, 'µg', 'mg')).toBe(0.5);
    expect(convertirMasse(1, 'UI', 'mg')).toBeNull();
  });

  it('volume de suspension arrondi au demi-millilitre', () => {
    const q = quantitePresentation(480, 'mg', suspension);
    expect(q.exact).toBe(9.6);
    expect(q.nombre).toBe(9.5);
    expect(q.texte).toBe('9,5 mL');
  });

  it('demi-comprimé si sécable, comprimé entier sinon', () => {
    expect(arrondiPratique(0.6, 'comprime', true)).toBe(0.5);
    expect(arrondiPratique(0.6, 'comprime', false)).toBe(1);
    expect(arrondiPratique(1.26, 'ml', false)).toBe(1.3);
  });

  it('quantité à délivrer et nombre de flacons', () => {
    const q = quantiteADelivrer({ nombreParPrise: 9.5, prises: 2, jours: 5, presentation: suspension });
    expect(q.unites).toBe(95);
    expect(q.conditionnements).toBe(1);
    expect(
      quantiteADelivrer({ nombreParPrise: 2, doseUnique: true, presentation: { par_unite: 'comprime' } })
        .unites,
    ).toBe(2);
  });

  it('présentations filtrées selon la voie', () => {
    const liste = [suspension, { ...suspension, voie: 'injectable', par_unite: 'flacon' }];
    expect(presentationsCompatibles(liste, { voie: 'Orale' })).toHaveLength(1);
    expect(presentationsCompatibles(liste, { voie: 'IV' })[0].par_unite).toBe('flacon');
  });
});

describe('durées', () => {
  it('menu des durées et durée en jours', () => {
    const p = {
      durees: [
        { min: 7, max: 10, unite: 'jours', contexte: 'Primo-infection', defaut: true },
        { min: 2, max: null, unite: 'semaines', contexte: null, defaut: false },
      ],
    };
    const o = optionsDuree(p);
    expect(o[0].libelle).toBe('7 à 10 jours (Primo-infection)');
    expect(o[0].defaut).toBe(true);
    expect(dureeEnJours(o[0].duree)).toBe(10);
    expect(dureeEnJours(o[1].duree)).toBe(14);
    expect(libelleDuree({ min: 1, max: null, unite: 'jours' })).toBe('1 jour');
    expect(dureeEnJours({ min: 3, unite: 'doses' })).toBeNull();
  });
});

describe('choix de la posologie', () => {
  it('privilégie l’indication la plus proche du diagnostic', () => {
    const lignes = [
      { population: 'adulte', indication: 'Herpès génital' },
      { population: 'adulte', indication: 'Zona (dans les 72 h)' },
    ];
    expect(choisirPosologie(lignes, ['Zona ophtalmique']).indication).toMatch(/Zona/);
    expect(choisirPosologie([], [])).toBeNull();
  });

  it('femme enceinte : dose de l’adulte, ligne grossesse réservée à la sécurité', () => {
    const pos = [
      { population: 'adulte', dose_texte: '500 mg' },
      { population: 'grossesse', dose_texte: 'Utilisable', securite: 'autorise' },
    ];
    expect(posologiesDosees(pos, { grossesse: true })[0].population).toBe('adulte');
  });
});

describe('alertes', () => {
  const molecule = {
    dci: 'Amoxicilline',
    slug: 'amoxicilline',
    classe: 'Pénicillines',
    interactions: 'Méthotrexate (toxicité), allopurinol (éruptions).',
    posologies: [{ population: 'grossesse', securite: 'autorise' }],
  };

  it('allergie, grossesse, plafond', () => {
    const a = alertesLigne(
      { molecule, posologie: amoxEnfant, dose: { plafonnee: true, brute: 1200, unite: 'mg' } },
      { allergies: 'pénicilline', grossesse: true, poids: 30 },
    );
    expect(a.some((x) => x.niveau === 'danger' && /allergie/.test(x.message))).toBe(true);
    expect(a.some((x) => /plafonnée/.test(x.message))).toBe(true);
  });

  it('contre-indication pendant la grossesse', () => {
    const m = { dci: 'Warfarine', posologies: [{ population: 'grossesse', securite: 'contre_indique' }] };
    expect(alertesLigne({ molecule: m }, { grossesse: true })[0].niveau).toBe('danger');
  });

  it('doublon de classe et interaction citée', () => {
    const allo = { dci: 'Allopurinol', slug: 'allopurinol', classe: 'Antigoutteux' };
    const ampi = { dci: 'Ampicilline', slug: 'ampicilline', classe: 'Pénicillines' };
    const a = alertesOrdonnance([{ molecule }, { molecule: allo }, { molecule: ampi }]);
    expect(a.some((x) => /Même classe/.test(x.message))).toBe(true);
    expect(
      a.some((x) => /Interaction possible : la fiche de Amoxicilline cite Allopurinol/.test(x.message)),
    ).toBe(true);
  });
});

describe('ordonnance', () => {
  it('posologie en clair', () => {
    const texte = posologieEnClair({
      quantite: { texte: '9,5 mL' },
      presentation: suspension,
      posologie: { ...amoxEnfant, frequence: '2 fois par jour' },
    });
    expect(texte).toBe('9,5 mL de Suspension 250 mg/5 mL, 2 fois par jour, voie orale');
  });

  it('droit d’imprimer une ordonnance à en-tête', () => {
    expect(droitOrdonnance({ profil: 'medecin_generaliste', verification: 'verifie' }).entete).toBe(true);
    expect(droitOrdonnance({ profil: 'medecin_generaliste', verification: 'en_attente' }).entete).toBe(false);
    expect(droitOrdonnance({ profil: 'pharmacien', verification: 'verifie' }).motif).toMatch(
      /document de travail/,
    );
    expect(droitOrdonnance(null).entete).toBe(false);
  });
});

describe('recherche de diagnostic', () => {
  const liste = [
    { nom: 'Paludisme grave', slug: 'paludisme-grave' },
    { nom: 'Paludisme simple', slug: 'paludisme-simple' },
    { nom: 'Pneumonie communautaire', slug: 'pneumonie' },
    { nom: 'Méningite bactérienne', slug: 'meningite' },
  ];
  it('tolère les accents et les fautes de frappe', () => {
    expect(rechercherPathologies(liste, 'meningite').map((p) => p.slug)).toEqual(['meningite']);
    expect(rechercherPathologies(liste, 'paludsime grave')[0].slug).toBe('paludisme-grave');
    expect(rechercherPathologies(liste, 'palu').length).toBe(2);
    expect(rechercherPathologies(liste, 'p')).toEqual([]);
  });
});

describe('injectables', () => {
  const flacon = {
    voie: 'injectable',
    quantite: 60,
    unite: 'mg',
    par_quantite: 1,
    par_unite: 'flacon',
    libelle: 'Flacon 60 mg',
  };
  it('fraction de flacon prélevée, un flacon neuf par administration', () => {
    const q = quantitePresentation(45, 'mg', flacon);
    expect(q.nombre).toBe(0.75);
    expect(q.ecart).toBe(0);
    const d = quantiteADelivrer({ nombreParPrise: 0.75, prises: 1, jours: 3, presentation: flacon });
    expect(d.unites).toBe(3);
    expect(
      posologieEnClair({
        quantite: q,
        dose: { parPrise: 45, unite: 'mg' },
        presentation: flacon,
        posologie: { voie: 'IV' },
      }),
    ).toBe('45 mg (0,75 flacon de Flacon 60 mg), voie IV');
  });
});

describe('présentation par défaut', () => {
  const cp500 = {
    voie: 'orale',
    quantite: 500,
    unite: 'mg',
    par_quantite: 1,
    par_unite: 'comprime',
    secable: true,
  };
  const sirop = { voie: 'orale', quantite: 120, unite: 'mg', par_quantite: 5, par_unite: 'ml' };
  it('choisit la présentation la plus proche de la dose, buvable avant 6 ans', () => {
    expect(meilleurePresentation([cp500, sirop], 225, 'mg', { jeuneEnfant: true })).toBe(1);
    expect(meilleurePresentation([sirop, cp500], 500, 'mg')).toBe(1);
    expect(meilleurePresentation([], 100, 'mg')).toBe(0);
  });
});

describe('présentation par défaut et voie', () => {
  it('voie orale possible : forme orale avant un injectable en mL', () => {
    const inj = { voie: 'injectable', quantite: 750, unite: 'mg', par_quantite: 5, par_unite: 'ml' };
    const sirop = { voie: 'orale', quantite: 120, unite: 'mg', par_quantite: 5, par_unite: 'ml' };
    expect(meilleurePresentation([inj, sirop], 225, 'mg', { jeuneEnfant: true, oralePossible: true })).toBe(
      1,
    );
  });
});

describe('posologie en clair : voie et sigles', () => {
  it('garde H0 et IV, voie de la présentation orale', () => {
    const sirop = { voie: 'orale', par_unite: 'ml', libelle: 'Sirop 125 mg/5 mL' };
    expect(
      posologieEnClair({
        quantite: { texte: '9 mL', unite: 'ml' },
        presentation: sirop,
        posologie: { voie: 'Orale, rectale ou IV', frequence: 'Toutes les 6 h' },
      }),
    ).toBe('9 mL de Sirop 125 mg/5 mL, toutes les 6 h, voie orale');
    expect(
      posologieEnClair({ posologie: { dose_texte: '2,4 mg/kg', frequence: 'H0, H12, H24', voie: 'IV' } }),
    ).toBe('2,4 mg/kg, H0, H12, H24, voie IV');
  });
});
