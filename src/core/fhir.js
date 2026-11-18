/**
 * Export FHIR R4 de l'observation de l'aide au diagnostic (paquet « collection ») pour un dossier
 * patient informatisé : patient anonyme (sexe seulement), constantes codées LOINC avec unités
 * UCUM, signes présents ou absents, hypothèses en diagnostics provisoires codés CIM-10.
 * Aucune identité : le soignant rattache l'export au dossier dans son propre logiciel.
 */

const LOINC = 'http://loinc.org';
const UCUM = 'http://unitsofmeasure.org';
const CIM10 = 'http://hl7.org/fhir/sid/icd-10';

/** Constantes : [clé de la saisie, code LOINC, libellé, unité affichée, code UCUM]. */
const CONSTANTES_LOINC = [
  ['temperature', '8310-5', 'Température corporelle', '°C', 'Cel'],
  ['fc', '8867-4', 'Fréquence cardiaque', '/min', '/min'],
  ['fr', '9279-1', 'Fréquence respiratoire', '/min', '/min'],
  ['tas', '8480-6', 'Pression artérielle systolique', 'mmHg', 'mm[Hg]'],
  ['tad', '8462-4', 'Pression artérielle diastolique', 'mmHg', 'mm[Hg]'],
  ['spo2', '59408-5', 'Saturation en oxygène (oxymétrie de pouls)', '%', '%'],
  ['glycemie', '15074-8', 'Glycémie', 'mmol/L', 'mmol/L'],
  ['glasgow', '9269-2', 'Score de Glasgow', '{score}', '{score}'],
  ['taille', '8302-2', 'Taille', 'cm', 'cm'],
];

const nombre = (v) => {
  const n = Number(String(v ?? '').replace(',', '.'));
  return v === '' || v === null || v === undefined || Number.isNaN(n) ? null : n;
};

/**
 * Paquet FHIR (objet JSON) d'un cas : cas (saisie), index (moteur), resultat (analyser), date ISO.
 */
export function exporterFHIR(cas, index, resultat, date = new Date().toISOString()) {
  const patient = {
    resourceType: 'Patient',
    id: 'patient',
    ...(cas.sexe ? { gender: cas.sexe === 'F' ? 'female' : 'male' } : {}),
  };
  const sujet = { reference: 'Patient/patient' };
  const ressources = [patient];
  let n = 0;
  const id = (prefixe) => `${prefixe}-${(n += 1)}`;

  for (const [cle, code, libelle, unite, ucum] of CONSTANTES_LOINC) {
    const v = nombre(cas.constantes?.[cle]);
    if (v === null) continue;
    ressources.push({
      resourceType: 'Observation',
      id: id('constante'),
      status: 'final',
      category: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/observation-category',
              code: cle === 'glycemie' ? 'laboratory' : 'vital-signs',
            },
          ],
        },
      ],
      code: { coding: [{ system: LOINC, code, display: libelle }], text: libelle },
      subject: sujet,
      effectiveDateTime: date,
      valueQuantity: { value: v, unit: unite, system: UCUM, code: ucum },
    });
  }
  const poids = nombre(cas.poids);
  if (poids !== null) {
    ressources.push({
      resourceType: 'Observation',
      id: id('constante'),
      status: 'final',
      code: { coding: [{ system: LOINC, code: '29463-7', display: 'Poids' }], text: 'Poids' },
      subject: sujet,
      effectiveDateTime: date,
      valueQuantity: { value: poids, unit: 'kg', system: UCUM, code: 'kg' },
    });
  }

  for (const [sid, etat] of Object.entries(cas.signes || {})) {
    const nom = index.symptomes.get(Number(sid))?.nom;
    if (!nom) continue;
    ressources.push({
      resourceType: 'Observation',
      id: id('signe'),
      status: 'final',
      code: { text: nom },
      subject: sujet,
      effectiveDateTime: date,
      valueBoolean: etat === 'present',
    });
  }

  resultat.hypotheses.forEach((h, i) => {
    ressources.push({
      resourceType: 'Condition',
      id: id('hypothese'),
      clinicalStatus: {
        coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active' }],
      },
      verificationStatus: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
            code: i === 0 ? 'provisional' : 'differential',
          },
        ],
      },
      code: {
        ...(h.fiche.cim10 ? { coding: [{ system: CIM10, code: h.fiche.cim10, display: h.fiche.nom }] } : {}),
        text: h.fiche.nom,
      },
      subject: sujet,
      recordedDate: date,
      note: [
        {
          text: `Hypothèse ${i + 1} de l’aide au diagnostic MedRef RDC (concordance ${Math.round(h.score * 100)} %)`,
        },
      ],
    });
  });

  return {
    resourceType: 'Bundle',
    type: 'collection',
    timestamp: date,
    entry: ressources.map((r) => ({ fullUrl: `urn:uuid:${r.id}`, resource: r })),
  };
}
