/**
 * Calculatrices et scores cliniques — fonctions pures, sans dépendance UI.
 * Chaque calculatrice est identifiée par `code` (colonne scores.code en base).
 *
 * compute(values) renvoie :
 *   { value: number, display: string, unit?: string, interpretation: string,
 *     level: 'normal' | 'attention' | 'grave', details?: string[] }
 * ou lève une CalculatorError si une valeur est manquante ou hors bornes.
 */

export class CalculatorError extends Error {}

const round = (n, d = 1) => Math.round(n * 10 ** d) / 10 ** d;
const fmt = (n, d = 1) => round(n, d).toLocaleString('fr-FR', { maximumFractionDigits: d });

function num(values, field) {
  const raw = values[field.name];
  if (raw === undefined || raw === null || raw === '') {
    if (field.optional) return null;
    throw new CalculatorError(`Renseignez « ${field.label} »`);
  }
  const n = typeof raw === 'number' ? raw : Number(String(raw).replace(',', '.'));
  if (!Number.isFinite(n)) throw new CalculatorError(`« ${field.label} » doit être un nombre`);
  if (field.min !== undefined && n < field.min) {
    throw new CalculatorError(`« ${field.label} » doit être ≥ ${field.min}`);
  }
  if (field.max !== undefined && n > field.max) {
    throw new CalculatorError(`« ${field.label} » doit être ≤ ${field.max}`);
  }
  return n;
}

/** Lit toutes les valeurs d'une calculatrice selon ses champs. */
function read(calc, values) {
  const out = {};
  for (const f of calc.fields) {
    if (f.type === 'boolean') out[f.name] = Boolean(values[f.name]);
    else if (f.type === 'select' && !f.numeric) {
      if (!values[f.name]) throw new CalculatorError(`Choisissez « ${f.label} »`);
      out[f.name] = values[f.name];
    } else out[f.name] = num(values, f);
  }
  return out;
}

const scoreOptions = (labels) => labels.map(([value, label]) => ({ value, label: `${label} (${value})` }));

export const calculators = [
  {
    code: 'imc',
    fields: [
      { name: 'poids', label: 'Poids', unit: 'kg', type: 'number', min: 1, max: 400, step: 0.1 },
      { name: 'taille', label: 'Taille', unit: 'cm', type: 'number', min: 30, max: 250 },
    ],
    compute(v) {
      const { poids, taille } = read(this, v);
      const imc = poids / (taille / 100) ** 2;
      let interpretation = 'Corpulence normale';
      let level = 'normal';
      if (imc < 16) [interpretation, level] = ['Maigreur sévère', 'grave'];
      else if (imc < 18.5) [interpretation, level] = ['Maigreur', 'attention'];
      else if (imc >= 40) [interpretation, level] = ['Obésité sévère (classe III)', 'grave'];
      else if (imc >= 30) [interpretation, level] = ['Obésité', 'attention'];
      else if (imc >= 25) [interpretation, level] = ['Surpoids', 'attention'];
      return { value: round(imc), display: fmt(imc), unit: 'kg/m²', interpretation, level };
    },
  },
  {
    code: 'glasgow',
    fields: [
      {
        name: 'yeux',
        label: 'Ouverture des yeux (Y)',
        type: 'select',
        numeric: true,
        min: 1,
        max: 4,
        options: scoreOptions([
          [4, 'spontanée'],
          [3, 'à la demande'],
          [2, 'à la douleur'],
          [1, 'aucune'],
        ]),
      },
      {
        name: 'verbal',
        label: 'Réponse verbale (V)',
        type: 'select',
        numeric: true,
        min: 1,
        max: 5,
        options: scoreOptions([
          [5, 'orientée'],
          [4, 'confuse'],
          [3, 'mots inappropriés'],
          [2, 'sons incompréhensibles'],
          [1, 'aucune'],
        ]),
      },
      {
        name: 'moteur',
        label: 'Réponse motrice (M)',
        type: 'select',
        numeric: true,
        min: 1,
        max: 6,
        options: scoreOptions([
          [6, 'obéit aux ordres'],
          [5, 'localise la douleur'],
          [4, 'évitement'],
          [3, 'flexion anormale (décortication)'],
          [2, 'extension (décérébration)'],
          [1, 'aucune'],
        ]),
      },
    ],
    compute(v) {
      const { yeux, verbal, moteur } = read(this, v);
      const total = yeux + verbal + moteur;
      let interpretation = 'Conscience normale';
      let level = 'normal';
      if (total <= 8) [interpretation, level] = ['Coma — protéger les voies aériennes', 'grave'];
      else if (total <= 12) [interpretation, level] = ['Altération modérée de la conscience', 'attention'];
      else if (total < 15) [interpretation, level] = ['Altération légère de la conscience', 'attention'];
      return {
        value: total,
        display: `${total}/15`,
        interpretation,
        level,
        details: [`Y${yeux} V${verbal} M${moteur}`],
      };
    },
  },
  {
    code: 'apgar',
    fields: [
      ['fc', 'Fréquence cardiaque', ['absente', '< 100/min', '≥ 100/min']],
      ['respiration', 'Respiration', ['absente', 'lente, irrégulière', 'cri vigoureux']],
      ['tonus', 'Tonus', ['flasque', 'flexion des membres', 'mouvements actifs']],
      ['reactivite', 'Réactivité', ['aucune', 'grimace', 'cri, toux, éternuement']],
      ['coloration', 'Coloration', ['cyanose ou pâleur globale', 'extrémités cyanosées', 'rose']],
    ].map(([name, label, opts]) => ({
      name,
      label,
      type: 'select',
      numeric: true,
      min: 0,
      max: 2,
      options: scoreOptions(opts.map((o, i) => [i, o])),
    })),
    compute(v) {
      const values = read(this, v);
      const total = Object.values(values).reduce((a, b) => a + b, 0);
      let interpretation = 'Adaptation normale';
      let level = 'normal';
      if (total <= 3) [interpretation, level] = ['Détresse sévère — réanimation néonatale', 'grave'];
      else if (total <= 6)
        [interpretation, level] = ['Détresse modérée — stimuler, ventiler si besoin', 'attention'];
      return { value: total, display: `${total}/10`, interpretation, level };
    },
  },
  {
    code: 'cockcroft',
    fields: [
      { name: 'age', label: 'Âge', unit: 'ans', type: 'number', min: 18, max: 120 },
      { name: 'poids', label: 'Poids', unit: 'kg', type: 'number', min: 20, max: 300, step: 0.1 },
      {
        name: 'sexe',
        label: 'Sexe',
        type: 'select',
        options: [
          { value: 'homme', label: 'Homme' },
          { value: 'femme', label: 'Femme' },
        ],
      },
      { name: 'creatinine', label: 'Créatininémie', type: 'number', min: 0.01, max: 5000, step: 0.01 },
      {
        name: 'unite',
        label: 'Unité de la créatinine',
        type: 'select',
        options: [
          { value: 'umol', label: 'µmol/L' },
          { value: 'mgL', label: 'mg/L' },
          { value: 'mgdL', label: 'mg/dL' },
        ],
      },
    ],
    compute(v) {
      const { age, poids, sexe, creatinine, unite } = read(this, v);
      const factor = { umol: 1, mgL: 8.84, mgdL: 88.4 }[unite];
      if (!factor) throw new CalculatorError('Unité de créatinine inconnue');
      const umol = creatinine * factor;
      const k = sexe === 'femme' ? 1.04 : 1.23;
      const clairance = ((140 - age) * poids * k) / umol;
      let interpretation = 'Fonction rénale normale';
      let level = 'normal';
      if (clairance < 15) [interpretation, level] = ['Insuffisance rénale terminale', 'grave'];
      else if (clairance < 30)
        [interpretation, level] = ['Insuffisance rénale sévère — adapter les posologies', 'grave'];
      else if (clairance < 60)
        [interpretation, level] = ['Insuffisance rénale modérée — adapter les posologies', 'attention'];
      else if (clairance < 90) [interpretation, level] = ['Diminution légère', 'attention'];
      return { value: round(clairance), display: fmt(clairance, 0), unit: 'mL/min', interpretation, level };
    },
  },
  {
    code: 'holliday_segar',
    fields: [{ name: 'poids', label: 'Poids', unit: 'kg', type: 'number', min: 0.5, max: 150, step: 0.1 }],
    compute(v) {
      const { poids } = read(this, v);
      let total;
      if (poids <= 10) total = 100 * poids;
      else if (poids <= 20) total = 1000 + 50 * (poids - 10);
      else total = 1500 + 20 * (poids - 20);
      return {
        value: round(total, 0),
        display: fmt(total, 0),
        unit: 'mL/24 h',
        interpretation: `Soit environ ${fmt(total / 24, 0)} mL/h`,
        level: 'normal',
        details: ["Besoins d'entretien uniquement — ne pas appliquer à l'enfant malnutri sévère."],
      };
    },
  },
  {
    code: 'debit_perfusion',
    fields: [
      { name: 'volume', label: 'Volume à perfuser', unit: 'mL', type: 'number', min: 1, max: 10000 },
      { name: 'duree', label: 'Durée', unit: 'heures', type: 'number', min: 0.1, max: 72, step: 0.1 },
      {
        name: 'facteur',
        label: 'Perfuseur',
        type: 'select',
        numeric: true,
        min: 10,
        max: 60,
        options: [
          { value: 20, label: 'Standard (20 gouttes/mL)' },
          { value: 60, label: 'Microperfuseur (60 gouttes/mL)' },
          { value: 15, label: 'Transfusion (15 gouttes/mL)' },
        ],
      },
    ],
    compute(v) {
      const { volume, duree, facteur } = read(this, v);
      const gouttes = (volume * facteur) / (duree * 60);
      return {
        value: round(gouttes, 0),
        display: fmt(gouttes, 0),
        unit: 'gouttes/min',
        interpretation: `Débit : ${fmt(volume / duree, 0)} mL/h`,
        level: 'normal',
      };
    },
  },
  {
    code: 'dose_ponderale',
    fields: [
      { name: 'poids', label: 'Poids', unit: 'kg', type: 'number', min: 0.3, max: 300, step: 0.1 },
      {
        name: 'dose',
        label: 'Dose prescrite',
        unit: 'mg/kg',
        type: 'number',
        min: 0.001,
        max: 1000,
        step: 0.001,
      },
      {
        name: 'max',
        label: 'Dose maximale (facultatif)',
        unit: 'mg',
        type: 'number',
        min: 0,
        optional: true,
      },
    ],
    compute(v) {
      const { poids, dose, max } = read(this, v);
      const brute = poids * dose;
      const plafonnee = max ? Math.min(brute, max) : brute;
      const capped = max && brute > max;
      return {
        value: round(plafonnee, 2),
        display: fmt(plafonnee, 2),
        unit: 'mg',
        interpretation: capped
          ? `Dose plafonnée (calcul brut : ${fmt(brute, 2)} mg)`
          : 'Vérifiez toujours la dose maximale adulte',
        level: capped ? 'attention' : 'normal',
      };
    },
  },
  {
    code: 'alvarado',
    fields: [
      ['migration', 'Douleur migrant vers la fosse iliaque droite', 1],
      ['anorexie', 'Anorexie', 1],
      ['nausees', 'Nausées ou vomissements', 1],
      ['defense', 'Défense en fosse iliaque droite', 2],
      ['rebond', 'Douleur au rebond', 1],
      ['fievre', 'Température ≥ 37,3 °C', 1],
      ['leucocytose', 'Leucocytose > 10 000/mm³', 2],
      ['neutrophilie', 'Polynucléose neutrophile > 75 %', 1],
    ].map(([name, label, points]) => ({ name, label, type: 'boolean', points })),
    compute(v) {
      const values = read(this, v);
      const total = this.fields.reduce((sum, f) => sum + (values[f.name] ? f.points : 0), 0);
      let interpretation = 'Appendicite peu probable';
      let level = 'normal';
      if (total >= 9) [interpretation, level] = ['Appendicite très probable', 'grave'];
      else if (total >= 7) [interpretation, level] = ['Appendicite probable — avis chirurgical', 'grave'];
      else if (total >= 5)
        [interpretation, level] = ['Appendicite possible — surveillance, imagerie', 'attention'];
      return { value: total, display: `${total}/10`, interpretation, level };
    },
  },
  {
    code: 'blantyre',
    fields: [
      [
        'yeux',
        'Mouvements oculaires',
        [
          [0, 'ne suit pas'],
          [1, 'suit du regard (visage, objet)'],
        ],
        1,
      ],
      [
        'moteur',
        'Meilleure réponse motrice',
        [
          [0, 'absente ou inadaptée'],
          [1, 'retrait du membre à la douleur'],
          [2, 'localise la douleur'],
        ],
        2,
      ],
      [
        'verbal',
        'Meilleure réponse verbale',
        [
          [0, 'aucune'],
          [1, 'gémissement ou cri inapproprié'],
          [2, 'cri approprié'],
        ],
        2,
      ],
    ].map(([name, label, opts, max]) => ({
      name,
      label,
      type: 'select',
      numeric: true,
      min: 0,
      max,
      options: scoreOptions(opts),
    })),
    compute(v) {
      const { yeux, moteur, verbal } = read(this, v);
      const total = yeux + moteur + verbal;
      let interpretation = 'Conscience normale';
      let level = 'normal';
      if (total <= 2) [interpretation, level] = ['Coma : critère de paludisme grave', 'grave'];
      else if (total <= 4) [interpretation, level] = ['Altération de la conscience', 'attention'];
      return {
        value: total,
        display: `${total}/5`,
        interpretation,
        level,
        details: [`Y${yeux} M${moteur} V${verbal}`],
      };
    },
  },
  {
    code: 'silverman',
    fields: [
      [
        'balancement',
        'Balancement thoraco-abdominal',
        ['respiration synchrone', 'thorax immobile', 'respiration paradoxale'],
      ],
      ['tirage', 'Tirage intercostal', ['absent', 'modéré', 'intense']],
      ['xiphoide', 'Entonnoir xiphoïdien', ['absent', 'modéré', 'intense']],
      ['ailes_nez', 'Battement des ailes du nez', ['absent', 'modéré', 'intense']],
      ['geignement', 'Geignement expiratoire', ['absent', 'audible au stéthoscope', 'audible à l’oreille']],
    ].map(([name, label, opts]) => ({
      name,
      label,
      type: 'select',
      numeric: true,
      min: 0,
      max: 2,
      options: scoreOptions(opts.map((o, i) => [i, o])),
    })),
    compute(v) {
      const values = read(this, v);
      const total = Object.values(values).reduce((a, b) => a + b, 0);
      let interpretation = 'Pas de détresse respiratoire';
      let level = 'normal';
      if (total >= 7) [interpretation, level] = ['Détresse respiratoire sévère', 'grave'];
      else if (total >= 5) [interpretation, level] = ['Détresse respiratoire modérée', 'grave'];
      else if (total >= 1) [interpretation, level] = ['Détresse respiratoire légère', 'attention'];
      return { value: total, display: `${total}/10`, interpretation, level };
    },
  },
  {
    code: 'qsofa',
    fields: [
      ['fr', 'Fréquence respiratoire ≥ 22/min'],
      ['conscience', 'Altération de la conscience (Glasgow < 15)'],
      ['pas', 'Pression artérielle systolique ≤ 100 mmHg'],
    ].map(([name, label]) => ({ name, label, type: 'boolean' })),
    compute(v) {
      const values = read(this, v);
      const total = Object.values(values).filter(Boolean).length;
      const grave = total >= 2;
      return {
        value: total,
        display: `${total}/3`,
        interpretation: grave
          ? 'Risque élevé de mauvaise évolution : rechercher une dysfonction d’organe, traiter sans délai'
          : 'Score bas : ne permet pas d’éliminer un sepsis, réévaluer',
        level: grave ? 'grave' : total === 1 ? 'attention' : 'normal',
      };
    },
  },
  {
    code: 'index_choc',
    fields: [
      { name: 'fc', label: 'Fréquence cardiaque', unit: '/min', type: 'number', min: 20, max: 250 },
      {
        name: 'pas',
        label: 'Pression artérielle systolique',
        unit: 'mmHg',
        type: 'number',
        min: 30,
        max: 300,
      },
    ],
    compute(v) {
      const { fc, pas } = read(this, v);
      const indice = fc / pas;
      let interpretation = 'Normal';
      let level = 'normal';
      if (indice >= 1.4)
        [interpretation, level] = ['Critique : choc hémorragique probable, transfusion', 'grave'];
      else if (indice >= 1)
        [interpretation, level] = ['Hémorragie importante probable : réanimation', 'grave'];
      else if (indice >= 0.9) [interpretation, level] = ['Alerte : surveillance rapprochée', 'attention'];
      return { value: round(indice, 2), display: fmt(indice, 2), interpretation, level };
    },
  },
  {
    code: 'deshydratation_oms',
    fields: [
      {
        name: 'etat',
        label: 'État général',
        type: 'select',
        options: [
          { value: 'normal', label: 'Normal, éveillé' },
          { value: 'agite', label: 'Agité, irritable' },
          { value: 'lethargique', label: 'Léthargique ou inconscient' },
        ],
      },
      { name: 'yeux', label: 'Yeux enfoncés', type: 'boolean' },
      {
        name: 'boire',
        label: 'Boire',
        type: 'select',
        options: [
          { value: 'normal', label: 'Boit normalement' },
          { value: 'avide', label: 'Assoiffé, boit avidement' },
          { value: 'incapable', label: 'Boit difficilement ou incapable de boire' },
        ],
      },
      {
        name: 'pli',
        label: 'Pli cutané abdominal',
        type: 'select',
        options: [
          { value: 'immediat', label: 'S’efface immédiatement' },
          { value: 'lent', label: 'S’efface lentement' },
          { value: 'tres_lent', label: 'S’efface très lentement (> 2 s)' },
        ],
      },
    ],
    compute(v) {
      const { etat, yeux, boire, pli } = read(this, v);
      const severes = [etat === 'lethargique', yeux, boire === 'incapable', pli === 'tres_lent'].filter(
        Boolean,
      ).length;
      // Un signe « sévère » vaut aussi comme signe « évident »
      const evidents = [etat !== 'normal', yeux, boire !== 'normal', pli !== 'immediat'].filter(
        Boolean,
      ).length;
      if (severes >= 2) {
        return {
          value: 3,
          display: 'Sévère',
          interpretation:
            'Déshydratation sévère : plan C (réhydratation IV) — protocole spécifique si malnutrition',
          level: 'grave',
        };
      }
      if (evidents >= 2) {
        return {
          value: 2,
          display: 'Signes évidents',
          interpretation: 'Signes évidents de déshydratation : plan B (SRO 75 mL/kg en 4 h)',
          level: 'attention',
        };
      }
      return {
        value: 1,
        display: 'Pas de déshydratation',
        interpretation: 'Pas de déshydratation : plan A (SRO à domicile, zinc)',
        level: 'normal',
      };
    },
  },
  {
    code: 'gina_controle',
    fields: [
      ['diurnes', 'Symptômes diurnes plus de 2 fois par semaine'],
      ['nocturnes', 'Réveil nocturne dû à l’asthme'],
      ['secours', 'Besoin du traitement de secours plus de 2 fois par semaine'],
      ['limitation', 'Limitation des activités due à l’asthme'],
    ].map(([name, label]) => ({ name, label, type: 'boolean' })),
    compute(v) {
      const values = read(this, v);
      const total = Object.values(values).filter(Boolean).length;
      let interpretation = 'Asthme bien contrôlé';
      let level = 'normal';
      if (total >= 3)
        [interpretation, level] = ['Asthme non contrôlé : intensifier le traitement de fond', 'grave'];
      else if (total >= 1) [interpretation, level] = ['Asthme partiellement contrôlé', 'attention'];
      return {
        value: total,
        display: `${total}/4`,
        interpretation,
        level,
        details: ['Sur les 4 dernières semaines'],
      };
    },
  },
  {
    code: 'child_pugh',
    fields: [
      [
        'bilirubine',
        'Bilirubine totale',
        ['< 34 µmol/L (< 20 mg/L)', '34–50 µmol/L', '> 50 µmol/L (> 30 mg/L)'],
      ],
      ['albumine', 'Albumine', ['> 35 g/L', '28–35 g/L', '< 28 g/L']],
      ['inr', 'INR (ou TP)', ['< 1,7 (TP > 50 %)', '1,7–2,3 (TP 40–50 %)', '> 2,3 (TP < 40 %)']],
      ['ascite', 'Ascite', ['absente', 'minime ou contrôlée', 'modérée à importante']],
      ['encephalopathie', 'Encéphalopathie hépatique', ['absente', 'grade 1–2', 'grade 3–4']],
    ].map(([name, label, opts]) => ({
      name,
      label,
      type: 'select',
      numeric: true,
      min: 1,
      max: 3,
      options: scoreOptions(opts.map((o, i) => [i + 1, o])),
    })),
    compute(v) {
      const values = read(this, v);
      const total = Object.values(values).reduce((a, b) => a + b, 0);
      let classe = 'A';
      let interpretation = 'Classe A : cirrhose compensée';
      let level = 'attention';
      if (total >= 10)
        [classe, interpretation, level] = ['C', 'Classe C : cirrhose décompensée, pronostic sévère', 'grave'];
      else if (total >= 7)
        [classe, interpretation] = ['B', 'Classe B : atteinte fonctionnelle significative'];
      return { value: total, display: `${classe} (${total})`, interpretation, level };
    },
  },
  {
    code: 'apri',
    fields: [
      { name: 'asat', label: 'ASAT', unit: 'UI/L', type: 'number', min: 1, max: 10000 },
      {
        name: 'lsn',
        label: 'Limite supérieure normale de l’ASAT (laboratoire)',
        unit: 'UI/L',
        type: 'number',
        min: 10,
        max: 100,
      },
      { name: 'plaquettes', label: 'Plaquettes', unit: 'G/L', type: 'number', min: 1, max: 2000 },
    ],
    compute(v) {
      const { asat, lsn, plaquettes } = read(this, v);
      const apri = (asat / lsn / plaquettes) * 100;
      let interpretation = 'Fibrose significative peu probable';
      let level = 'normal';
      if (apri > 2) [interpretation, level] = ['Cirrhose probable', 'grave'];
      else if (apri > 0.5)
        [interpretation, level] = [
          'Fibrose significative probable (seuil de traitement OMS 2024)',
          'attention',
        ];
      return { value: round(apri, 2), display: fmt(apri, 2), interpretation, level };
    },
  },
  {
    code: 'ckd_epi',
    fields: [
      { name: 'age', label: 'Âge', unit: 'ans', type: 'number', min: 18, max: 120 },
      {
        name: 'sexe',
        label: 'Sexe',
        type: 'select',
        options: [
          { value: 'homme', label: 'Homme' },
          { value: 'femme', label: 'Femme' },
        ],
      },
      { name: 'creatinine', label: 'Créatininémie', type: 'number', min: 0.01, max: 5000, step: 0.01 },
      {
        name: 'unite',
        label: 'Unité de la créatinine',
        type: 'select',
        options: [
          { value: 'umol', label: 'µmol/L' },
          { value: 'mgL', label: 'mg/L' },
          { value: 'mgdL', label: 'mg/dL' },
        ],
      },
    ],
    compute(v) {
      const { age, sexe, creatinine, unite } = read(this, v);
      const divisor = { umol: 88.4, mgL: 10, mgdL: 1 }[unite];
      if (!divisor) throw new CalculatorError('Unité de créatinine inconnue');
      const scr = creatinine / divisor; // mg/dL
      const femme = sexe === 'femme';
      const kappa = femme ? 0.7 : 0.9;
      const alpha = femme ? -0.241 : -0.302;
      const ratio = scr / kappa;
      const dfg =
        142 * Math.min(ratio, 1) ** alpha * Math.max(ratio, 1) ** -1.2 * 0.9938 ** age * (femme ? 1.012 : 1);
      let interpretation = 'G1 : DFG normal ou élevé';
      let level = 'normal';
      if (dfg < 15) [interpretation, level] = ['G5 : insuffisance rénale terminale', 'grave'];
      else if (dfg < 30) [interpretation, level] = ['G4 : diminution sévère', 'grave'];
      else if (dfg < 45) [interpretation, level] = ['G3b : diminution modérée à sévère', 'attention'];
      else if (dfg < 60) [interpretation, level] = ['G3a : diminution légère à modérée', 'attention'];
      else if (dfg < 90)
        [interpretation, level] = ['G2 : diminution légère (MRC si marqueur d’atteinte rénale)', 'normal'];
      return {
        value: round(dfg),
        display: fmt(dfg, 0),
        unit: 'mL/min/1,73 m²',
        interpretation,
        level,
        details: ['Équation CKD-EPI 2021, sans coefficient ethnique'],
      };
    },
  },
];

const byCode = new Map(calculators.map((c) => [c.code, c]));

export function getCalculator(code) {
  return byCode.get(code) || null;
}

/** Calcule et renvoie { ok, result } ou { ok: false, error } (jamais d'exception). */
export function runCalculator(code, values) {
  const calc = getCalculator(code);
  if (!calc) return { ok: false, error: 'Calculatrice non disponible' };
  try {
    return { ok: true, result: calc.compute(values) };
  } catch (err) {
    if (err instanceof CalculatorError) return { ok: false, error: err.message };
    throw err;
  }
}
