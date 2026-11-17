import { describe, expect, it } from 'vitest';
import {
  ORGANISATION_DOCUMENT,
  organiserDepartement,
  organiserGroupeDocument,
  organiserSectionDocument,
  trouverSectionSpecialite,
} from '../src/core/organisationDocument.js';

describe('organisation documentaire du catalogue', () => {
  it('ramène une spécialité ancienne vers sa section documentaire', () => {
    expect(trouverSectionSpecialite('medecine-interne-cardiologie')).toMatchObject({
      departement: { slug: 'medecine-interne' },
      section: { slug: 'cardiologie-pathologies-vasculaires' },
    });
  });

  it('range les troubles hydro-électrolytiques dans la section de néphrologie', () => {
    const pathologies = [
      {
        nom: 'Dyskaliémies (hyper- et hypokaliémie)',
        slug: 'dyskaliemies',
        specialite_slug: 'medecine-interne-endocrinologie-et-diabetologie',
        departement_slug: 'medecine-interne',
      },
      {
        nom: 'Hyponatrémie',
        slug: 'hyponatremie',
        specialite_slug: 'medecine-interne-endocrinologie-et-diabetologie',
        departement_slug: 'medecine-interne',
      },
    ];

    const nephrologie = organiserSectionDocument(
      'medecine-interne',
      'nephrologie-troubles-hydro-electrolytiques',
      pathologies,
    );
    const troublesHydroElectrolytiques = nephrologie.groupes.find(
      (item) => item.nom === 'Troubles Hydro-Électrolytiques & Acido-Basiques',
    );

    expect(troublesHydroElectrolytiques.pathologies.map((item) => item.slug).sort()).toEqual([
      'dyskaliemies',
      'hyponatremie',
    ]);
    expect(
      organiserSectionDocument('medecine-interne', 'endocrinologie-metabolisme', pathologies).nb_pathologies,
    ).toBe(0);
  });

  it('conserve chaque fiche exactement une fois, y compris les spécialités hors document', () => {
    for (const departement of ORGANISATION_DOCUMENT) {
      const pathologies = [];
      const specialites = new Set(departement.sections.flatMap((item) => item.sources));

      for (const specialite_slug of specialites) {
        pathologies.push({
          nom: `Fiche ${specialite_slug}`,
          slug: `fiche-${specialite_slug}`,
          specialite_slug,
          departement_slug: departement.slug,
        });
      }

      for (const specialite_slug of departement.horsDocument || []) {
        pathologies.push({
          nom: `Fiche ${specialite_slug}`,
          slug: `fiche-${specialite_slug}`,
          specialite_slug,
          departement_slug: departement.slug,
        });
      }

      pathologies.push({
        nom: 'Fiche non classée',
        slug: 'fiche-non-classee',
        specialite_slug: 'specialite-a-classer',
        departement_slug: departement.slug,
      });

      const organisation = organiserDepartement(departement.slug, pathologies);
      const classees = [
        ...organisation.sections.flatMap((item) => item.groupes.flatMap((groupe) => groupe.pathologies)),
        ...organisation.autres,
        ...organisation.horsDocument,
      ];

      expect(classees.map((item) => item.slug).sort()).toEqual(pathologies.map((item) => item.slug).sort());
    }
  });

  it('affiche les pathologies après le clic sur la rubrique correspondante', () => {
    const pathologies = [
      {
        nom: 'Hypertension artérielle',
        slug: 'hypertension-arterielle',
        specialite_slug: 'medecine-interne-cardiologie',
        departement_slug: 'medecine-interne',
      },
      {
        nom: 'Embolie pulmonaire',
        slug: 'embolie-pulmonaire',
        specialite_slug: 'medecine-interne-cardiologie',
        departement_slug: 'medecine-interne',
      },
      {
        nom: 'Urgences hypertensives',
        slug: 'urgences-hypertensives',
        specialite_slug: 'medecine-interne-cardiologie',
        departement_slug: 'medecine-interne',
      },
    ];

    const cardiologie = organiserSectionDocument(
      'medecine-interne',
      'cardiologie-pathologies-vasculaires',
      pathologies,
    );

    expect(cardiologie.nb_pathologies).toBe(3);
    expect(cardiologie.groupes.find((item) => item.nom === 'Vasculaire & Hypertension').slug).toBe(
      'vasculaire-hypertension',
    );

    const rubrique = organiserGroupeDocument(
      'medecine-interne',
      'cardiologie-pathologies-vasculaires',
      'vasculaire-hypertension',
      pathologies,
    );
    expect(rubrique.groupe.pathologies.map((item) => item.slug).sort()).toEqual(
      pathologies.map((item) => item.slug).sort(),
    );
  });

  it('classe les abcès dentaires dans la rubrique de stomatologie', () => {
    const pathologie = {
      nom: 'Abcès et cellulites d’origine dentaire',
      slug: 'abces-cellulites-origine-dentaire',
      specialite_slug: 'chirurgie-stomatologie-et-chirurgie-maxillo-faciale',
      departement_slug: 'chirurgie',
    };
    const chirurgie = organiserSectionDocument(
      'chirurgie',
      'chirurgie-plastique-vasculaire-petite-chirurgie',
      [pathologie],
    );
    const stomatologie = chirurgie.groupes.find(
      (item) => item.nom === 'Stomatologie & Chirurgie Maxillo-Faciale',
    );

    expect(stomatologie.pathologies).toEqual([pathologie]);
  });
});
