import { Link, Navigate, useParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView, Empty } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import {
  organiserDepartement,
  organiserGroupeDocument,
  organiserSectionDocument,
  trouverSectionSpecialite,
} from '../../core/organisationDocument.js';

export function DepartementPage() {
  const { slug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => Promise.all([api.departement(slug), api.pathologies()]), [api, slug]);

  return (
    <AsyncView state={state}>
      {([dep, pathologies]) => {
        const organisation = organiserDepartement(dep.slug, pathologies);
        const sections = organisation?.sections || [];

        return (
          <>
            <Breadcrumb items={[{ label: dep.nom }]} />
            <header className="page-header">
              <h1>
                <span aria-hidden="true">{dep.icone} </span>
                {dep.nom}
              </h1>
              <p className="lead">
                Organisation des spécialités selon le document de référence. Les fiches existantes sont
                conservées.
              </p>
            </header>
            {organisation ? (
              <ul className="list-links">
                {sections.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/organisation/${dep.slug}/${item.slug}`}>
                      <span>{item.nom}</span>
                      <span className="count">
                        {item.nb_pathologies} fiche{item.nb_pathologies === 1 ? '' : 's'}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="list-links">
                {dep.specialites.map((item) => (
                  <li key={item.id}>
                    <Link to={`/specialites/${item.slug}`}>
                      <span>{item.nom}</span>
                      <span className="count">{item.nb_pathologies} fiches</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        );
      }}
    </AsyncView>
  );
}

export function OrganisationSectionPage() {
  const { departementSlug, sectionSlug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.pathologies(), [api]);

  return (
    <AsyncView state={state}>
      {(pathologies) => {
        const organisation = organiserSectionDocument(departementSlug, sectionSlug, pathologies);
        if (!organisation) {
          return <Empty>Cette spécialité n’existe pas dans l’organisation du document.</Empty>;
        }

        return (
          <>
            <Breadcrumb
              items={[
                {
                  label: organisation.departement.nom,
                  to: `/departements/${organisation.departement.slug}`,
                },
                { label: organisation.section.nom },
              ]}
            />
            <header className="page-header">
              <h1>{organisation.section.nom}</h1>
              <p className="lead">
                {organisation.nb_pathologies} fiche{organisation.nb_pathologies === 1 ? '' : 's'} dans cette
                spécialité. Choisissez une rubrique pour afficher ses pathologies.
              </p>
            </header>
            <ul className="list-links">
              {organisation.groupes.map((item) => (
                <li key={item.slug}>
                  <Link to={`/organisation/${departementSlug}/${sectionSlug}/${item.slug}`}>
                    <span>{item.nom}</span>
                    <span className="count">
                      {item.pathologies.length} fiche{item.pathologies.length === 1 ? '' : 's'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        );
      }}
    </AsyncView>
  );
}

export function OrganisationGroupePage() {
  const { departementSlug, sectionSlug, groupSlug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.pathologies(), [api]);

  return (
    <AsyncView state={state}>
      {(pathologies) => {
        const organisation = organiserGroupeDocument(departementSlug, sectionSlug, groupSlug, pathologies);
        if (!organisation) {
          return <Empty>Cette rubrique n’existe pas dans l’organisation du document.</Empty>;
        }

        return (
          <>
            <Breadcrumb
              items={[
                {
                  label: organisation.departement.nom,
                  to: `/departements/${organisation.departement.slug}`,
                },
                {
                  label: organisation.section.nom,
                  to: `/organisation/${departementSlug}/${sectionSlug}`,
                },
                { label: organisation.groupe.nom },
              ]}
            />
            <header className="page-header">
              <h1>{organisation.groupe.nom}</h1>
              <p className="lead">
                {organisation.nb_pathologies} fiche{organisation.nb_pathologies === 1 ? '' : 's'} dans cette
                rubrique.
              </p>
            </header>
            {organisation.groupe.pathologies.length ? (
              <ul className="patho-list">
                {organisation.groupe.pathologies.map((pathologie) => (
                  <li key={pathologie.slug}>
                    <Link to={`/pathologies/${pathologie.slug}`}>
                      <span className="patho-name">{pathologie.nom}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>Aucune fiche existante dans cette rubrique pour le moment.</Empty>
            )}
          </>
        );
      }}
    </AsyncView>
  );
}

export function SpecialitePage() {
  const { slug } = useParams();
  const { api } = useServices();
  const state = useAsync(() => api.specialite(slug), [api, slug]);

  return (
    <AsyncView state={state}>
      {(sp) => {
        const organisation = trouverSectionSpecialite(sp.slug);
        if (!organisation) {
          return <Empty>Cette spécialité n’est pas encore classée dans le document de référence.</Empty>;
        }
        return (
          <Navigate
            to={`/organisation/${organisation.departement.slug}/${organisation.section.slug}`}
            replace
          />
        );
      }}
    </AsyncView>
  );
}
