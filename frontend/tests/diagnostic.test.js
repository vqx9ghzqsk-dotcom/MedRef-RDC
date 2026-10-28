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
    expect(positif.hypotheses[0].tests).toEqual([
      { nom: 'TDR paludisme', resultat: 'positif', role: 'c', rv: null },
    ]);
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

describe('aide au diagnostic : scores calculés', () => {
  it('qSOFA, index de choc, IMC, Centor et PCIME à partir de la saisie', async () => {
    const { calculerScores } = await import('../src/core/diagnostic.js');
    const d = {
      symptomes: [
        { id: 1, nom: 'Fièvre' },
        { id: 2, nom: 'Toux' },
        { id: 3, nom: 'Mal de gorge' },
        { id: 4, nom: 'Adénopathies' },
        { id: 5, nom: 'Tachypnée' },
        { id: 6, nom: 'Convulsions' },
      ],
      examens: [],
      pathologies: [],
      liens: [],
    };
    const idx = indexer(d);
    const nomme = (r) => Object.fromEntries(r.map((s) => [s.nom.split(' ')[0], s]));
    const adulte = nomme(
      calculerScores(
        idx,
        {
          age: 'adulte',
          poids: '45',
          constantes: { fr: '26', tas: '85', glasgow: '14', fc: '120', taille: '170' },
        },
        new Set(),
        new Set(),
      ),
    );
    expect(adulte.qSOFA).toMatchObject({ valeur: '3/3', grave: true });
    expect(adulte.Index).toMatchObject({ valeur: '1,4', grave: true });
    expect(adulte.IMC.interpretation).toBe('dénutrition sévère');
    const angine = nomme(
      calculerScores(idx, { ageValeur: '8', ageUnite: 'ans' }, new Set([1, 3, 4]), new Set([2])),
    );
    expect(angine['Centor-McIsaac'].valeur).toBe('4/5');
    const enfant = nomme(
      calculerScores(idx, { ageValeur: '2', ageUnite: 'ans' }, new Set([2, 5]), new Set()),
    );
    expect(enfant['PCIME'].valeur).toBe('Pneumonie');
    const grave = nomme(calculerScores(idx, { ageValeur: '2', ageUnite: 'ans' }, new Set([2, 6]), new Set()));
    expect(grave['PCIME']).toMatchObject({ valeur: 'Pneumonie grave ou maladie très grave', grave: true });
  });
});

describe('aide au diagnostic : triage d’urgence ABCDE', () => {
  it('catégorie, critères déduits des constantes et signes cochés', async () => {
    const { triageUrgence } = await import('../src/core/diagnostic.js');
    expect(triageUrgence({}).categorie).toBeNull();
    expect(triageUrgence({ triageFait: true }).categorie).toBe('non-urgent');
    expect(triageUrgence({ triage: { douleur: true } }).categorie).toBe('priorite');
    const t = triageUrgence({ triage: { douleur: true }, constantes: { spo2: '85' } });
    expect(t.categorie).toBe('urgence');
    expect(t.criteres.find((c) => c.id === 'cyanose').auto).toBe(true);
    // Nourrisson de moins de 2 mois : prioritaire d'office ; critère réservé à l'enfant absent chez l'adulte
    expect(triageUrgence({ ageValeur: '3', ageUnite: 'jours' }).categorie).toBe('priorite');
    expect(triageUrgence({ age: 'adulte', constantes: { temperature: '37' } }).categorie).toBeNull();
    // Un critère coché vaut signe présent : les convulsions deviennent un signe de gravité
    const r = analyser(indexer(donnees), { age: 'adulte', triage: { convulsions: true } });
    expect(r.gravite.map((s) => s.nom)).toContain('Convulsions');
    expect(r.triage.categorie).toBe('urgence');
  });
});

describe('aide au diagnostic : épidémiologie en RDC', () => {
  it('à tableau égal, la maladie fréquente passe devant la rare ; saison et foyer comptent', () => {
    const fiche = (id, slug, extra) => ({
      id,
      slug,
      nom: slug,
      specialite: 'Infectiologie',
      validee: false,
      public: { ages: null, sexe: null, obstetrique: false },
      tests: {},
      ...extra,
    });
    const d = {
      symptomes: [
        { id: 1, nom: 'Fièvre' },
        { id: 2, nom: 'Céphalées' },
      ],
      examens: [],
      pathologies: [
        fiche(1, 'rare', { frequence: 'rare' }),
        fiche(2, 'commune', { frequence: 'tres_frequente', saison: 'pluies' }),
        fiche(3, 'focale', { frequence: 'peu_frequente', foyers: ['Ituri'] }),
      ],
      liens: [1, 2, 3].flatMap((p) => [
        [p, 1, 3],
        [p, 2, 2],
      ]),
      syndromes: [],
      terrains: [],
      contextes: [],
    };
    const index = indexer(d);
    const cas = { age: 'adulte', signes: { 1: 'present', 2: 'present' } };
    const ordre = (c) => analyser(index, c).hypotheses.map((h) => h.fiche.slug);
    expect(ordre(cas)).toEqual(['commune', 'focale', 'rare']);
    const h = analyser(index, { ...cas, saison: 'pluies' }).hypotheses[0];
    expect(h.raisons).toEqual(expect.arrayContaining(['très fréquente en RDC', 'saison des pluies']));
    // Dans son foyer, la maladie focale remonte ; ailleurs elle perd des points sans disparaître
    expect(ordre({ ...cas, province: 'Ituri' })[0]).toBe('focale');
    const score = (c) => analyser(index, c).hypotheses.find((x) => x.fiche.slug === 'focale').score;
    expect(score({ ...cas, province: 'Kinshasa' })).toBeLessThan(score(cas));
  });
});

describe('aide au diagnostic : signes clés, exclusion, terrain requis, période', () => {
  it('ajustent le classement à tableau égal', () => {
    const fiche = (id, slug, extra) => ({
      id,
      slug,
      nom: slug,
      specialite: 'X',
      validee: false,
      public: { ages: null, sexe: null, obstetrique: false },
      tests: {},
      ...extra,
    });
    const d = {
      symptomes: [
        { id: 1, nom: 'Fièvre' },
        { id: 2, nom: 'Céphalées' },
        { id: 3, nom: 'Raideur de nuque' },
        { id: 4, nom: 'Toux' },
        { id: 5, nom: 'Asthénie' },
      ],
      examens: [],
      pathologies: [
        fiche(1, 'a', { cles: [1] }),
        fiche(2, 'b', { exclusion: [3] }),
        fiche(3, 'c', { requiert: { terrains: ['vih'], contextes: [] } }),
      ],
      liens: [1, 2, 3].flatMap((p) => [
        [p, 1, 3],
        [p, 2, 3],
        [p, 4, 3],
        [p, 5, 3],
      ]),
      syndromes: [],
      terrains: [],
      contextes: [],
    };
    const index = indexer(d);
    const score = (cas, slug) => analyser(index, cas).hypotheses.find((h) => h.fiche.slug === slug)?.score;
    const base = { age: 'adulte', signes: { 1: 'present', 2: 'present' } };
    expect(score(base, 'a')).toBeGreaterThan(score(base, 'b'));
    expect(score({ ...base, signes: { 1: 'absent', 2: 'present' } }, 'a')).toBeLessThan(
      score(base, 'a') * 0.7,
    );
    const avecRaideur = analyser(index, { ...base, signes: { ...base.signes, 3: 'present' } });
    const b = avecRaideur.hypotheses.find((h) => h.fiche.slug === 'b');
    expect(b.discordants).toEqual([expect.objectContaining({ nom: 'Raideur de nuque', exclusion: true })]);
    expect(score({ ...base, terrains: ['vih'] }, 'c')).toBeGreaterThan(score(base, 'c'));

    // Accouchée récemment : la fiche de la grossesse en cours recule
    const o = indexer({
      ...d,
      pathologies: [
        fiche(4, 'avant', { periode: 'avant', public: { ages: null, sexe: 'F', obstetrique: true } }),
        fiche(5, 'apres', { periode: 'apres', public: { ages: null, sexe: 'F', obstetrique: true } }),
      ],
      liens: [4, 5].flatMap((p) => [
        [p, 1, 3],
        [p, 2, 3],
        [p, 4, 3],
        [p, 5, 3],
      ]),
    });
    const ordre = (periode) =>
      analyser(o, { ...base, sexe: 'F', grossesse: true, periode }).hypotheses.map((h) => h.fiche.slug);
    expect(ordre('post-partum')).toEqual(['apres', 'avant']);
    expect(ordre('grossesse')).toEqual(['avant', 'apres']);
  });
});

describe('aide au diagnostic : maladies simultanées et diagnostics à ne pas manquer', () => {
  it('propose l’association qui explique les signes restants et sépare les fiches graves', () => {
    const fiche = (id, slug, nom, extra) => ({
      id,
      slug,
      nom,
      specialite: 'X',
      validee: false,
      public: { ages: null, sexe: null, obstetrique: false },
      tests: {},
      ...extra,
    });
    const d = {
      symptomes: [
        { id: 1, nom: 'Fièvre' },
        { id: 2, nom: 'Frissons' },
        { id: 3, nom: 'Céphalées' },
        { id: 4, nom: 'Toux' },
        { id: 5, nom: 'Tachypnée' },
        { id: 6, nom: 'Raideur de nuque' },
      ],
      examens: [],
      pathologies: [
        fiche(1, 'palu', 'Paludisme simple'),
        fiche(2, 'palu-grave', 'Paludisme grave', { urgence: true }),
        fiche(3, 'pneumo', 'Pneumonie'),
        fiche(4, 'meningite', 'Méningite', { urgence: true }),
      ],
      liens: [
        [1, 1, 3],
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 2, 2],
        [2, 4, 1],
        [3, 4, 3],
        [3, 5, 3],
        [3, 1, 2],
        [4, 1, 3],
        [4, 3, 3],
        [4, 6, 2],
      ],
      syndromes: [],
      terrains: [],
      contextes: [],
    };
    const r = analyser(indexer(d), {
      age: 'adulte',
      motif: 2,
      signes: { 1: 'present', 2: 'present', 3: 'present', 4: 'present', 5: 'present' },
    });
    expect(r.hypotheses[0].fiche.slug).toBe('palu');
    // Paludisme grave n'est pas une « association » du paludisme simple
    expect(r.associations.map((a) => a.associee.slug)).toEqual(['pneumo']);
    expect(r.associations[0].expliques).toEqual(['Toux', 'Tachypnée']);
    expect(r.aNePasManquer.map((g) => g.fiche.slug)).toContain('meningite');
    expect(r.aNePasManquer.find((g) => g.fiche.slug === 'meningite').aRechercher).toContain(
      'Raideur de nuque',
    );
  });
});

describe('aide au diagnostic : rapports de vraisemblance des examens', () => {
  it('un examen très spécifique pèse plus, un négatif peu sensible exclut peu', async () => {
    const { rapportsDeVraisemblance } = await import('../src/core/diagnostic.js');
    const tdr = rapportsDeVraisemblance([95, 95]);
    expect(tdr.positif).toBeCloseTo(19, 0);
    expect(tdr.negatif).toBeCloseTo(0.053, 2);
    expect(rapportsDeVraisemblance(null)).toBeNull();
    const d = {
      symptomes: [
        { id: 1, nom: 'Toux' },
        { id: 2, nom: 'Fièvre' },
        { id: 3, nom: 'Perte de poids' },
      ],
      examens: [
        { id: 20, slug: 'bacilloscopie', nom: 'Bacilloscopie', performance: [55, 98] },
        { id: 21, slug: 'xpert', nom: 'Xpert', performance: [85, 98] },
      ],
      pathologies: [
        {
          id: 1,
          slug: 'tb',
          nom: 'Tuberculose',
          specialite: 'X',
          public: { ages: null, sexe: null, obstetrique: false },
          tests: { 20: 'c', 21: 'c' },
        },
      ],
      liens: [
        [1, 1, 3],
        [1, 2, 2],
        [1, 3, 3],
      ],
      syndromes: [],
      terrains: [],
      contextes: [],
    };
    const index = indexer(d);
    const cas = { age: 'adulte', signes: { 1: 'present', 2: 'present' } };
    const score = (examens) => analyser(index, { ...cas, examens }).hypotheses[0]?.score || 0;
    const base = score({});
    // Bacilloscopie négative (Se 55 %) : l'hypothèse reste ; Xpert négatif (Se 85 %) l'affaiblit plus
    expect(score({ 20: 'negatif' })).toBeGreaterThan(base * 0.7);
    expect(score({ 21: 'negatif' })).toBeLessThan(score({ 20: 'negatif' }));
    const h = analyser(index, { ...cas, examens: { 21: 'positif' } }).hypotheses[0];
    expect(h.tests[0].rv.positif).toBeCloseTo(42.5, 0);
  });
});

describe('aide au diagnostic : chronologie, début, échec du traitement', () => {
  it('le début brutal, le premier signe et l’échec sous traitement pèsent sur le classement', () => {
    const fiche = (id, slug, nom, extra) => ({
      id,
      slug,
      nom,
      specialite: 'X',
      public: { ages: null, sexe: null, obstetrique: false },
      tests: {},
      ...extra,
    });
    const d = {
      symptomes: [
        { id: 1, nom: 'Céphalées' },
        { id: 2, nom: 'Déficit moteur' },
        { id: 3, nom: 'Fièvre' },
        { id: 4, nom: 'Toux' },
      ],
      examens: [],
      pathologies: [
        fiche(1, 'avc', 'AVC hémorragique'),
        fiche(2, 'tumeur', 'Tumeurs cérébrales'),
        fiche(3, 'pneumo', 'Pneumonie', { traitements: [9] }),
        fiche(4, 'tb', 'Tuberculose pulmonaire', { traitements: [7] }),
      ],
      liens: [
        [1, 1, 2],
        [1, 2, 3],
        [2, 1, 2],
        [2, 2, 3],
        [3, 3, 3],
        [3, 4, 3],
        [4, 3, 3],
        [4, 4, 3],
      ],
      syndromes: [],
      terrains: [],
      contextes: [],
    };
    const index = indexer(d);
    const ordre = (cas) => analyser(index, { age: 'adulte', ...cas }).hypotheses.map((h) => h.fiche.slug);
    const neuro = { signes: { 1: 'present', 2: 'present' } };
    expect(ordre({ ...neuro, debut: 'brutal' })[0]).toBe('avc');
    expect(ordre({ ...neuro, debut: 'progressif' })[0]).toBe('tumeur');
    // Toux et fièvre traitées par amoxicilline (9) sans amélioration : la pneumonie recule
    const resp = { signes: { 3: 'present', 4: 'present' }, traitements: [9] };
    expect(ordre({ ...resp, reponse: 'echec' })[0]).toBe('tb');
    const r = analyser(index, { age: 'adulte', ...resp, reponse: 'echec' });
    expect(r.echec.fiches).toEqual(['Pneumonie']);
    expect(r.echec.causes.length).toBeGreaterThan(3);
    expect(analyser(index, { age: 'adulte', ...resp, reponse: 'amelioration' }).echec).toBeNull();
  });
});

describe('aide au diagnostic : scores guidés', () => {
  it('totaux, interprétations, scores proposés selon le patient et effet sur le moteur', async () => {
    const { SCORES_GUIDES, evaluerScoreGuide, profilScores } = await import('../src/core/scoresGuides.js');
    const def = (id) => SCORES_GUIDES.find((d) => d.id === id);
    expect(evaluerScoreGuide(def('glasgow'), { y: 2, v: 2 })).toBeNull();
    expect(evaluerScoreGuide(def('glasgow'), { y: 2, v: 2, m: 4 })).toMatchObject({ total: 8, grave: true });
    expect(evaluerScoreGuide(def('curb65'), { c: 1, u: 1, r: 1, b: 0, a: 0 })).toMatchObject({
      total: 3,
      grave: true,
    });
    expect(
      evaluerScoreGuide(def('wells-tvp'), {
        cancer: 1,
        paralysie: 0,
        alitement: 0,
        trajet: 1,
        membre: 0,
        mollet: 1,
        godet: 0,
        veines: 0,
        atcd: 0,
        autre: -2,
      }).total,
    ).toBe(1);
    const enfant = profilScores({ ageValeur: '2', ageUnite: 'ans' }, 24);
    expect(SCORES_GUIDES.filter((d) => d.public(enfant)).map((d) => d.id)).toEqual(['blantyre']);
    // Blantyre ≤ 2 : trouble de la conscience présent et alerte de coma
    const r = analyser(indexer(donnees), {
      ageValeur: '2',
      ageUnite: 'ans',
      age: 'petit',
      signes: { 1: 'present' },
      scoresGuides: { blantyre: { yeux: 0, moteur: 1, verbal: 1 } },
    });
    expect(r.gravite.map((s) => s.nom)).toContain('Troubles de la conscience');
    expect(r.alertes.some((a) => a.includes('Blantyre'))).toBe(true);
    expect(r.scores.some((s) => s.nom.startsWith('Blantyre') && s.valeur === '2')).toBe(true);
  });
});

describe('aide au diagnostic : fonctions rénale et hépatique', () => {
  it('clairance de Cockcroft-Gault ou de Schwartz, insuffisance rénale et hépatique', async () => {
    const { clairanceCreatinine, fonctionsElimination } = await import('../src/core/diagnostic.js');
    // (140 − 60) × 70 × 1,23 / 200 = 34
    expect(
      clairanceCreatinine({
        ageValeur: '60',
        ageUnite: 'ans',
        sexe: 'M',
        poids: '70',
        biologie: { creatinine: '200' },
      }),
    ).toEqual({ valeur: 34, methode: 'Cockcroft-Gault' });
    // Enfant : 36,5 × 110 / 50 = 80
    expect(
      clairanceCreatinine({
        ageValeur: '6',
        ageUnite: 'ans',
        constantes: { taille: '110' },
        biologie: { creatinine: '50' },
      }),
    ).toEqual({ valeur: 80, methode: 'Schwartz' });
    expect(
      clairanceCreatinine({ ageValeur: '60', ageUnite: 'ans', biologie: { creatinine: '200' } }),
    ).toBeNull();
    const f = fonctionsElimination({
      ageValeur: '60',
      ageUnite: 'ans',
      sexe: 'M',
      poids: '70',
      biologie: { creatinine: '200', bilirubine: '80' },
      terrains: [],
    });
    expect(f).toMatchObject({ renale: true, hepatique: true });
    expect(fonctionsElimination({ terrains: ['insuffisance-renale'] }).renale).toBe(true);
    expect(fonctionsElimination({ terrains: [] })).toMatchObject({ renale: false, hepatique: false });
  });
});
