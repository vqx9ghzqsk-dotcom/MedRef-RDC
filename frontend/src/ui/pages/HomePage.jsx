import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAuth } from '../context/auth.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { SearchBar } from '../components/SearchBar.jsx';
import { AsyncView } from '../components/Status.jsx';
import { IconeAcces, QUICK_ACCESS } from '../components/Layout.jsx';
import { ORGANISATION_DOCUMENT } from '../../core/organisationDocument.js';

const plural = (n, one, many) => `${n} ${n > 1 ? many : one}`;
const nombre = (n) => Number(n || 0).toLocaleString('fr-FR');

/** Charge une donnée facultative de l'accueil : un bloc absent ne bloque jamais la page. */
function useFacultatif(charger, deps) {
  const [valeur, setValeur] = useState(null);
  useEffect(() => {
    let actif = true;
    Promise.resolve()
      .then(charger)
      .then((v) => actif && setValeur(v ?? null))
      .catch(() => actif && setValeur(null));
    return () => {
      actif = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return valeur;
}

function RepereCatalogue({ accueil }) {
  const totaux = accueil?.totaux || {};
  const reperes = [
    { valeur: totaux.fiches, libelle: 'Fiches cliniques' },
    { valeur: totaux.produits, libelle: 'Produits au catalogue' },
    { valeur: totaux.molecules, libelle: 'Molécules référencées' },
  ].filter((repere) => repere.valeur !== null && repere.valeur !== undefined);

  if (!reperes.length) return null;

  return (
    <section className="section" aria-labelledby="reperes-title">
      <h2 id="reperes-title" className="section-title">
        Dans votre bibliothèque
      </h2>
      <ul className="repere-grid">
        {reperes.map((repere) => (
          <li className="repere-card" key={repere.libelle}>
            <span className="repere-value">{nombre(repere.valeur)}</span>
            <span className="repere-label">{repere.libelle}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HomePage() {
  const { api } = useServices();
  const { user } = useAuth();
  const departements = useAsync(() => api.departements(), [api]);
  const accueil = useFacultatif(() => (typeof api.accueil === 'function' ? api.accueil() : null), [api]);

  // Mon espace est réservé aux comptes connectés
  if (!user) return <Navigate to="/connexion" state={{ from: '/espace' }} replace />;

  // Les alertes sanitaires et le fil d'actualités ne paraissent que sur la page d'accueil (« / »)
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <p className="hero-espace">Bienvenue dans votre espace</p>
        <h1 id="hero-title">
          Bonjour, {user.nom}
          <span className="hero-byline">MedRef RDC</span>
        </h1>
        <p className="hero-author">par le Dr Ben Mingalu</p>
        <p className="hero-lead">
          <strong>De quoi avez-vous besoin aujourd’hui ?</strong>
          <br />
          Pathologies, urgences, médicaments et protocoles pensés pour la pratique en RDC.
        </p>
        <SearchBar size="large" />
      </section>

      <section aria-labelledby="dep-title" className="section">
        <h2 id="dep-title" className="section-title">
          Explorer par département
        </h2>
        <AsyncView state={departements}>
          {(deps) => {
            const parSlug = new Map(deps.map((item) => [item.slug, item]));
            const presents = ORGANISATION_DOCUMENT.map((organisation) => ({
              organisation,
              departement: parSlug.get(organisation.slug),
            })).filter((item) => item.departement);
            const supplementaires = deps
              .filter(
                (item) => !ORGANISATION_DOCUMENT.some((organisation) => organisation.slug === item.slug),
              )
              .map((departement) => ({ organisation: departement, departement }));
            return (
              <ul className="dep-grid">
                {[...presents, ...supplementaires].map(({ organisation, departement }) => (
                  <li key={departement.id}>
                    <Link to={`/departements/${departement.slug}`} className="dep-card">
                      <span className="dep-icon" aria-hidden="true">
                        {organisation.icone || departement.icone}
                      </span>
                      <span className="dep-name">{organisation.nom}</span>
                      <span className="dep-desc">{departement.description}</span>
                      <span className="dep-count">
                        {plural(
                          organisation.sections?.length ?? Number(departement.nb_specialites),
                          'spécialité',
                          'spécialités',
                        )}
                        , {plural(Number(departement.nb_pathologies), 'fiche', 'fiches')}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            );
          }}
        </AsyncView>
      </section>

      <RepereCatalogue accueil={accueil} />

      <section aria-labelledby="acces-title" className="section">
        <h2 id="acces-title" className="section-title">
          Accès rapides
        </h2>
        <ul className="quick-grid">
          {QUICK_ACCESS.map((q) => (
            <li key={q.to}>
              <Link to={q.to} className={`quick-tile${q.tone ? ` quick-${q.tone}` : ''}`}>
                <span className="quick-icon">
                  <IconeAcces to={q.to} />
                </span>
                <span className="quick-label">{q.label}</span>
                <span className="quick-hint">{q.hint}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
