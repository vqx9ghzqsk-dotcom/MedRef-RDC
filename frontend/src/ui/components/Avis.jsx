import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { PROFILS, STATUTS_AVIS, TYPES_AVIS } from '../../core/labels.js';
import { dateLocale } from '../../core/dates.js';

const date = (d) => (d ? dateLocale(d).toLocaleDateString('fr-FR', { dateStyle: 'medium' }) : '');

/** Lien vers la cible d'un avis (produit, molécule ou fiche). */
export function LienCible({ cible }) {
  if (!cible) return null;
  if (cible.type === 'produit') return <Link to={`/medicaments/${cible.id}`}>{cible.nom}</Link>;
  if (cible.type === 'molecule') return <Link to={`/molecules/${cible.slug}`}>{cible.nom}</Link>;
  return <Link to={`/pathologies/${cible.slug}?onglet=therapeutique`}>{cible.nom}</Link>;
}

export function CarteAvis({ a, avecCible = false }) {
  return (
    <li className={`avis-carte${a.grave ? ' avis-grave' : ''}`}>
      <p className="actu-type">
        {TYPES_AVIS[a.type]}
        {a.grave && ' · grave'}
        {a.statut !== 'publie' && ` · ${STATUTS_AVIS[a.statut]}`}
      </p>
      <h3>
        <Link to={`/avis/${a.id}`}>{a.titre}</Link>
      </h3>
      {avecCible && (
        <p>
          <LienCible cible={a.cible} />
        </p>
      )}
      <p className="row-sub">
        {[a.auteur_nom, PROFILS[a.auteur_profil]].filter(Boolean).join(', ')} · {date(a.created_at)} ·{' '}
        {a.votes} vote{a.votes > 1 ? 's' : ''} « pertinent et sourcé » · {a.commentaires} commentaire
        {a.commentaires > 1 ? 's' : ''}
      </p>
    </li>
  );
}

/**
 * Rappel de la notification officielle de pharmacovigilance (effet indésirable grave, produit
 * suspect). Les coordonnées viennent de l'administration : elles ne sont jamais inventées.
 */
export function Pharmacovigilance() {
  const { api } = useServices();
  const [contact, setContact] = useState(undefined);
  useEffect(() => {
    let actif = true;
    if (typeof api.pharmacovigilance !== 'function') return undefined;
    api
      .pharmacovigilance()
      .then((d) => actif && setContact(d?.contact || null))
      .catch(() => actif && setContact(null));
    return () => {
      actif = false;
    };
  }, [api]);
  return (
    <aside className="pharmacovigilance" role="note">
      <h3>Effet indésirable grave ou produit suspect : notification officielle</h3>
      <p>
        MedRef RDC ne remplace pas la notification de pharmacovigilance auprès de l’autorité nationale
        (ACOREP). Notifiez aussi le cas par le circuit officiel et conservez le produit, son emballage et son
        numéro de lot.
      </p>
      {contact ? (
        <p className="actu-resume">{contact}</p>
      ) : (
        contact === null && (
          <p className="muted">
            Les coordonnées officielles n’ont pas encore été renseignées par l’administration.
          </p>
        )
      )}
    </aside>
  );
}

/** Avis publiés sur un produit, une molécule ou une fiche, avec le lien pour en donner un. */
export function AvisCible({ type, cible, nom }) {
  const { api } = useServices();
  const [liste, setListe] = useState(null);
  useEffect(() => {
    let actif = true;
    if (typeof api.avisPublics !== 'function' || cible === undefined || cible === null) return undefined;
    api
      .avisPublics(type, cible)
      .then((l) => actif && setListe(l || []))
      .catch(() => actif && setListe(null));
    return () => {
      actif = false;
    };
  }, [api, type, cible]);
  const lien = `/avis/nouveau?cible_type=${type}&cible=${encodeURIComponent(cible)}&nom=${encodeURIComponent(nom || '')}`;
  return (
    <section className="card avis-cible" aria-label="Avis des professionnels">
      <div className="avis-cible-tete">
        <h2>Avis des professionnels</h2>
        <Link to={lien} className="btn btn-secondary btn-small">
          Donner un avis argumenté
        </Link>
      </div>
      {liste && liste.length > 0 ? (
        <ul className="actu-liste">
          {liste.map((a) => (
            <CarteAvis key={a.id} a={a} />
          ))}
        </ul>
      ) : (
        <p className="muted">
          Aucun avis publié. Les avis sont sourcés, examinés par des professionnels vérifiés puis par un
          relecteur médical avant publication.
        </p>
      )}
    </section>
  );
}
