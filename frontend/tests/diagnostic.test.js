import { describe, expect, it } from 'vitest';
import {
  analyser,
  convientAuPatient,
  effetsIndesirablesPossibles,
  examensUtiles,
  indexer,
  lireConstantes,
  motifsFrequents,
  pertinenceSignes,
  posologiePour,
  profilDuPatient,
  terrainPossible,
  terrainsAPreciser,
} from '../src/core/diagnostic.js';

// Jeu réduit : 1 fièvre, 2 convulsions, 3 coma, 4 raideur de nuque, 5 toux, 6 pâleur
const donnees = {
  symptomes: [
    { id: 1, nom: 'Fièvre' },
    { id: 2, nom: 'Convulsions' },
    { id: 3, nom: 'Troubles de la conscience' },
    { id: 4, nom: 'Raideur de nuque' },
    { id: 5, nom: 'Toux' },
    { id: 6, nom: 'Pâleur' },
  ],
  examens: [{ id: 10, slug: 'tdr-paludisme', nom: 'TDR paludisme' }],
  pathologies: [
    {
      id: 100,
      slug: 'palu-grave-enfant',
      nom: 'Paludisme grave de l’enfant',
      urgence: true,
      public: { ages: ['petit', 'grand'] },
      tests: { 10: 'c' },
    },
    {
      id: 101,
      slug: 'meningite',
      nom: 'Méningite bactérienne',
      urgence: true,
      public: { ages: null },
      tests: {},
    },
    {
      id: 102,
      slug: 'pneumonie-adulte',
      nom: 'Pneumonie de l’adulte',
      urgence: false,
      public: { ages: ['adulte', 'age'] },
      tests: {},
    },
    {
      id: 103,
      slug: 'eclampsie',
      nom: 'Éclampsie',
      urgence: true,
      public: { ages: null, sexe: 'F', obstetrique: true },
      tests: {},
    },
  ],
  liens: [
    [100, 1, 3],
    [100, 2, 2],
    [100, 3, 2],
    [100, 6, 2],
    [101, 1, 3],
    [101, 4, 2],
    [101, 3, 2],
    [101, 2, 1],
    [102, 1, 3],
    [102, 5, 3],
    [103, 2, 3],
    [103, 3, 2],
  ],
  syndromes: [
    {
      id: 50,
      nom: 'Syndrome méningé',
      slug: 'syndrome-meninge',
      symptomes: [1, 4],
      cles: { tous: [], un: [4] },
    },
  ],
  physiques: [4, 6],
  terrains: [{ id: 'vih', libelle: 'Infection à VIH', motif: 'meningite' }],
  contextes: [],
};
const index = indexer(donnees);

describe('aide au diagnostic : moteur', () => {
  it('classe les fiches par concordance et signale la gravité', () => {
    const r = analyser(index, { age: 'petit', sexe: 'M', symptomes: [1, 2, 3] });
    expect(r.hypotheses[0].fiche.slug).toBe('palu-grave-enfant');
    expect(r.hypotheses[0].niveau).toBe('tres_probable');
    expect(r.gravite.map((s) => s.nom)).toEqual(['Convulsions', 'Troubles de la conscience']);
    // La pneumonie de l'adulte et l'éclampsie ne s'adressent pas à un garçon de 3 ans
    expect(r.hypotheses.map((h) => h.fiche.slug)).not.toContain('pneumonie-adulte');
    expect(r.hypotheses.map((h) => h.fiche.slug)).not.toContain('eclampsie');
    // Signes pour départager : pâleur (paludisme) ou raideur de nuque (méningite)
    expect(r.aRechercher.map((s) => s.nom)).toEqual(expect.arrayContaining(['Raideur de nuque', 'Pâleur']));
    expect(r.hypotheses[1]).toMatchObject({ aEliminer: true });
  });

  it('un examen de confirmation négatif fait reculer la fiche', () => {
    const positif = analyser(index, { age: 'petit', symptomes: [1, 2, 3], examens: { 10: 'positif' } });
    const negatif = analyser(index, { age: 'petit', symptomes: [1, 2, 3], examens: { 10: 'negatif' } });
    expect(positif.hypotheses[0].fiche.slug).toBe('palu-grave-enfant');
    expect(positif.hypotheses[0].tests).toEqual([{ nom: 'TDR paludisme', resultat: 'positif', role: 'c' }]);
    expect(negatif.hypotheses[0].fiche.slug).toBe('meningite');
  });

  it('public visé : âge, sexe et grossesse', () => {
    const ecl = donnees.pathologies[3];
    expect(convientAuPatient(ecl, { sexe: 'F', grossesse: true })).toBe(true);
    expect(convientAuPatient(ecl, { sexe: 'F', grossesse: false })).toBe(false);
    expect(convientAuPatient(ecl, { sexe: 'M' })).toBe(false);
    expect(convientAuPatient(donnees.pathologies[0], { age: 'adulte' })).toBe(false);
    expect(convientAuPatient(donnees.pathologies[1], {})).toBe(true);
    // Pas de fiche obstétricale chez le jeune enfant, même sans sexe renseigné
    expect(convientAuPatient(ecl, { age: 'petit' })).toBe(false);
  });

  it('sans signe, aucune hypothèse', () => {
    expect(analyser(index, { age: 'adulte', symptomes: [] }).hypotheses).toEqual([]);
  });

  it('posologie : indication de la pathologie et population selon l’âge', () => {
    const posologies = [
      { population: 'adulte', indication: 'Paludisme grave', dose_par_kg: 2.4 },
      { population: 'enfant', indication: 'Pré-transfert (enfant < 6 ans)', dose_par_kg: 10 },
      { population: 'enfant', indication: 'Paludisme grave', dose_par_kg: 3 },
    ];
    expect(posologiePour(posologies, 'Paludisme grave de l’enfant', 'petit').dose_par_kg).toBe(3);
    expect(posologiePour(posologies, 'Paludisme grave', 'adulte').dose_par_kg).toBe(2.4);
    expect(posologiePour([], 'X', 'adulte')).toBeNull();
    // Le contexte de la molécule dans la fiche choisit la voie : relais oral plutôt que charge IM
    const artemether = [
      { population: 'enfant', indication: 'Paludisme grave', voie: 'IM', dose_par_kg: 3.2 },
      { population: 'enfant', indication: 'Paludisme simple', voie: 'Orale', dose_par_kg: null },
    ];
    expect(posologiePour(artemether, 'Paludisme grave de l’enfant', 'petit', 'Relais oral').voie).toBe(
      'Orale',
    );
    expect(posologiePour(artemether, 'Paludisme grave de l’enfant', 'petit', 'IM').voie).toBe('IM');
  });

  it('un signe noté absent fait reculer la fiche qui l’attend', () => {
    const sans = analyser(index, { age: 'petit', signes: { 1: 'present', 3: 'present' } });
    const avec = analyser(index, { age: 'petit', signes: { 1: 'present', 3: 'present', 6: 'absent' } });
    const score = (r, slug) => r.hypotheses.find((h) => h.fiche.slug === slug).score;
    expect(score(avec, 'palu-grave-enfant')).toBeLessThan(score(sans, 'palu-grave-enfant'));
    expect(avec.hypotheses.find((h) => h.fiche.slug === 'palu-grave-enfant').discordants[0].nom).toBe(
      'Pâleur',
    );
  });

  it('les constantes donnent des signes présents ou absents et des alertes', () => {
    expect(lireConstantes({ temperature: '39,2', fr: '45', glycemie: '1,8' }, 'petit')).toMatchObject({
      presents: ['Fièvre', 'Tachypnée'],
      orientations: ['hypoglyc'],
    });
    expect(lireConstantes({ temperature: '36,8', tas: '120' }, 'adulte').absents).toEqual([
      'Fièvre',
      'Hypotension',
    ]);
    expect(lireConstantes({ glasgow: '7', spo2: '85' }, 'adulte').alertes).toHaveLength(2);
    const r = analyser(index, { age: 'petit', constantes: { temperature: '39' }, signes: { 2: 'present' } });
    expect(r.deduits).toEqual([{ id: 1, nom: 'Fièvre', etat: 'present' }]);
  });

  it('motif, terrain, synthèse syndromique et question suivante', () => {
    const r = analyser(index, { age: 'adulte', motif: 4, terrains: ['vih'], signes: { 1: 'present' } });
    expect(r.hypotheses[0].fiche.slug).toBe('meningite');
    expect(r.hypotheses[0].raisons).toEqual(['Infection à VIH']);
    expect(r.syndromes.map((s) => s.nom)).toEqual(['Syndrome méningé']);
    const q = analyser(index, { age: 'petit', signes: { 1: 'present', 3: 'present' } }).questions;
    expect(q.length).toBeGreaterThan(0);
    expect(q.map((x) => x.symptome.nom)).toEqual(expect.arrayContaining(['Pâleur']));
    expect(q.find((x) => x.symptome.nom === 'Pâleur').examen).toBe(true);
  });

  it('effets indésirables : un signe du cas cité dans la fiche d’un traitement en cours', () => {
    const molecules = [
      { dci: 'Isoniazide', slug: 'isoniazide', effets_indesirables: 'Neuropathie, paresthésies, hépatite.' },
      { dci: 'Paracétamol', slug: 'paracetamol', effets_indesirables: 'Rares.' },
    ];
    expect(effetsIndesirablesPossibles(molecules, ['Paresthésies', 'Fièvre'])).toEqual([
      { molecule: molecules[0], signes: ['Paresthésies'] },
    ]);
  });

  it('parcours adaptatif : le profil restreint les fiches et les signes possibles', () => {
    // Ajout d'un signe propre à l'éclampsie (7) : il ne doit pas être proposé chez un homme
    const d = {
      ...donnees,
      symptomes: [...donnees.symptomes, { id: 7, nom: 'Contractions utérines' }],
      liens: [...donnees.liens, [103, 7, 2]],
      restrictions: [
        { motif: 'Anatomie féminine', sexe: 'F', symptomes: [7] },
        { motif: 'Grossesse', grossesse: true, symptomes: [7] },
      ],
    };
    const idx = indexer(d);
    const homme = profilDuPatient(idx, { age: 'adulte', sexe: 'M' });
    expect(homme.fiches.map((f) => f.slug)).not.toContain('eclampsie');
    expect(homme.signes.has(7)).toBe(false);
    const enceinte = profilDuPatient(idx, { age: 'adulte', sexe: 'F', grossesse: true });
    expect(enceinte.signes.has(7)).toBe(true);
    // Chez le jeune enfant, ni fiche de l'adulte ni fiche obstétricale
    expect(
      profilDuPatient(idx, { age: 'petit' })
        .fiches.map((f) => f.slug)
        .sort(),
    ).toEqual(['meningite', 'palu-grave-enfant']);
  });

  it('le motif puis les hypothèses ordonnent les signes à rechercher', () => {
    const profil = profilDuPatient(index, { age: 'petit' });
    // Motif « raideur de nuque » : seule la méningite l'explique, ses signes passent devant
    const parMotif = pertinenceSignes(index, { age: 'petit', motif: 4, signes: {} }, [], profil);
    expect(parMotif.has(4)).toBe(false);
    expect(parMotif.get(1)).toBeGreaterThan(parMotif.get(6) || 0);
    // Hypothèses en tête : la pâleur (paludisme) devient pertinente
    const r = analyser(index, { age: 'petit', signes: { 1: 'present', 2: 'present' } });
    const parHyp = pertinenceSignes(
      index,
      { age: 'petit', signes: { 1: 'present', 2: 'present' } },
      r.hypotheses,
      profil,
    );
    expect(parHyp.get(6)).toBeGreaterThan(0);
    expect(parHyp.has(1)).toBe(false);
    expect(motifsFrequents(index, profil).map((s) => s.nom)).toContain('Fièvre');
  });

  it('examens utiles et antécédents à préciser selon les hypothèses en tête', () => {
    const r = analyser(index, { age: 'petit', signes: { 1: 'present', 2: 'present', 3: 'present' } });
    const utiles = examensUtiles(index, r.hypotheses);
    expect(utiles[0].examen.slug).toBe('tdr-paludisme');
    expect(utiles[0].hypotheses).toEqual([{ nom: 'Paludisme grave de l’enfant', role: 'c' }]);
    expect(examensUtiles(index, r.hypotheses, { 10: 'positif' })).toEqual([]);
    expect([...terrainsAPreciser(index, r.hypotheses, donnees.terrains)]).toEqual(['vih']);
    expect(terrainPossible({ sexe: 'F' }, { sexe: 'M' })).toBe(false);
    expect(terrainPossible({ ages: ['adulte'] }, { age: 'petit' })).toBe(false);
    expect(terrainPossible({ ages: ['adulte'] }, {})).toBe(true);
  });
});

describe('aide au diagnostic : signes clés des syndromes', () => {
  it('pas de syndrome méningé sans raideur de nuque ; contexte exigé', () => {
    const d = {
      symptomes: [
        { id: 1, nom: 'Fièvre' },
        { id: 2, nom: 'Céphalées' },
        { id: 3, nom: 'Raideur de nuque' },
        { id: 4, nom: 'Douleur thoracique' },
      ],
      examens: [],
      pathologies: [{ id: 9, nom: 'X', slug: 'x', public: {}, tests: {} }],
      liens: [[9, 1, 3]],
      syndromes: [
        { id: 1, nom: 'Syndrome méningé', slug: 'm', symptomes: [1, 2, 3], cles: { tous: [], un: [3] } },
        {
          id: 2,
          nom: 'Syndrome thoracique aigu',
          slug: 't',
          symptomes: [1, 4],
          cles: { tous: [4], un: [], terrain: 'drepanocytose' },
        },
      ],
    };
    const idx = indexer(d);
    const noms = (cas) => analyser(idx, cas).syndromes.map((s) => s.nom);
    expect(noms({ signes: { 1: 'present', 2: 'present' } })).toEqual([]);
    expect(noms({ signes: { 1: 'present', 2: 'present', 3: 'present' } })).toEqual(['Syndrome méningé']);
    expect(noms({ signes: { 1: 'present', 4: 'present' } })).toEqual([]);
    expect(noms({ signes: { 1: 'present', 4: 'present' }, terrains: ['drepanocytose'] })).toEqual([
      'Syndrome thoracique aigu',
    ]);
  });
});

describe('aide au diagnostic : âge exact', () => {
  it('âge en mois, tranche déduite et seuils PCIME précis', async () => {
    const { ageEnMois, trancheDepuisAge } = await import('../src/core/diagnostic.js');
    expect(ageEnMois({ ageValeur: '3', ageUnite: 'ans' })).toBe(36);
    expect(ageEnMois({ ageValeur: '15', ageUnite: 'jours' })).toBeCloseTo(0.49, 2);
    expect(trancheDepuisAge(ageEnMois({ ageValeur: '6', ageUnite: 'mois' }))).toBe('petit');
    expect(trancheDepuisAge(ageEnMois({ ageValeur: '70', ageUnite: 'ans' }))).toBe('age');
    // Fréquence respiratoire 45 : tachypnée à 8 mois (seuil 50 : non), à 2 ans (seuil 40 : oui)
    expect(lireConstantes({ fr: '45' }, 'petit', 8).presents).toEqual([]);
    expect(lireConstantes({ fr: '45' }, 'petit', 24).presents).toEqual(['Tachypnée']);
    // Tension 75 à 6 ans : seuil 70 + 2 × 6 = 82 → hypotension
    expect(lireConstantes({ tas: '75' }, 'grand', 72).presents).toEqual(['Hypotension']);
    // Périmètre brachial seulement de 6 à 59 mois
    expect(lireConstantes({ pb: '110' }, 'petit', 3).alertes).toEqual([]);
    expect(lireConstantes({ pb: '110' }, 'petit', 18).alertes).toHaveLength(1);
  });
});

describe('aide au diagnostic : résultats biologiques chiffrés', () => {
  it('interprète selon l’âge, alerte et oriente', async () => {
    const { lireBiologie } = await import('../src/core/diagnostic.js');
    // Hb 6 : anémie sévère chez l'adulte (< 7), anémie simple chez l'enfant (seuil 5)
    expect(lireBiologie({ hb: '6' }, 'adulte').interpretations[0]).toMatchObject({
      texte: 'anémie sévère',
      grave: true,
    });
    expect(lireBiologie({ hb: '6' }, 'petit', 24).interpretations[0].texte).toBe('anémie');
    const r = lireBiologie({ plaquettes: '15', potassium: '7', gb: '18' }, 'adulte');
    expect(r.alertes).toHaveLength(2);
    expect(r.orientations.join(' ')).toMatch(/palud/);
    expect(r.orientations.join(' ')).toMatch(/bacter/);
    expect(lireBiologie({ crp: '4' }).interpretations[0].texte).toBe('normale');
  });

  it('une orientation biologique fait monter la fiche correspondante', () => {
    const sans = analyser(index, { age: 'petit', signes: { 1: 'present', 3: 'present' } });
    const avec = analyser(index, {
      age: 'petit',
      signes: { 1: 'present', 3: 'present' },
      biologie: { plaquettes: '40' },
    });
    const score = (r) => r.hypotheses.find((h) => h.fiche.slug === 'palu-grave-enfant').score;
    expect(score(avec)).toBeGreaterThan(score(sans));
    expect(avec.biologie).toEqual([{ cle: 'plaquettes', texte: 'thrombopénie', grave: false }]);
  });
});
