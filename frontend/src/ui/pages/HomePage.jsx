import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAuth } from '../context/auth.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { SearchBar } from '../components/SearchBar.jsx';
import { AsyncView } from '../components/Status.jsx';
import { QUICK_ACCESS } from '../components/Layout.jsx';
import { PROFILS, VERIFICATIONS } from '../../core/labels.js';
import { PROFILS_PRESCRIPTEURS } from '../../core/prescription.js';
import { dateLocale } from '../../core/dates.js';

const plural = (n, one, many) => `${n} ${n > 1 ? many : one}`;
const nombre = (n) => Number(n || 0).toLocaleString('fr-FR');
const court = (t, n) => (t && t.length > n ? `${t.slice(0, n - 1).trimEnd()}…` : t);
const date = (d) => (d ? dateLocale(d).toLocaleDateString('fr-FR', { dateStyle: 'medium' }) : '');

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

function PourVous({ moi, derniere }) {
  if (!moi && !derniere) return null;
  const elements = [];
  if (moi) {
    const prescripteur = PROFILS_PRESCRIPTEURS.includes(moi.profil);
    if (!moi.profil) {
      elements.push(
        <li key="profil">
          Indiquez votre profil professionnel dans <Link to="/compte">Mon compte</Link> pour un accueil
          adapté.
        </li>,
      );
    } else if (prescripteur && moi.verification !== 'verifie') {
      elements.push(
        <li key="verif">
          {PROFILS[moi.profil]} — {VERIFICATIONS[moi.verification] || 'Non vérifié'} :{' '}
          <Link to="/compte">faites vérifier votre numéro d’ordre</Link> pour imprimer des ordonnances à
          en-tête.
        </li>,
      );
    }
    if (moi.fiches_a_valider) {
      elements.push(
        <li key="valider">
          <Link to="/admin">{plural(moi.fiches_a_valider, 'fiche à valider', 'fiches à valider')}</Link>
        </li>,
      );
    }
    if (moi.fiches_a_revoir) {
      elements.push(
        <li key="revoir">
          <Link to="/admin">{plural(moi.fiches_a_revoir, 'fiche à revoir', 'fiches à revoir')}</Link>{' '}
          (révision dépassée)
        </li>,
      );
    }
    if (moi.actualites_a_publier) {
      elements.push(
        <li key="actu">
          <Link to="/admin">
            {plural(moi.actualites_a_publier, 'actualité en brouillon', 'actualités en brouillon')}
          </Link>
        </li>,
      );
    }
    if (moi.comptes_a_verifier) {
      elements.push(
        <li key="comptes">
          <Link to="/admin">{plural(moi.comptes_a_verifier, 'compte à vérifier', 'comptes à vérifier')}</Link>
        </li>,
      );
    }
  }
  if (moi && PROFILS_PRESCRIPTEURS.concat('pharmacien').includes(moi.profil)) {
    elements.push(
      <li key="avis">
        <Link to="/avis">Mes avis et avis à examiner</Link> sur les produits et les traitements
      </li>,
    );
  }
  if (derniere) {
    elements.push(
      <li key="rx">
        Dernière prescription :{' '}
        <Link to={`/prescriptions/${derniere.id}`}>{derniere.patient_label || 'patient non précisé'}</Link>
        <span className="muted"> · {date(derniere.updated_at)}</span>
      </li>,
    );
  }
  if (!elements.length) return null;
  return (
    <section aria-labelledby="moi-title" className="section card">
      <h2 id="moi-title" className="section-title">
        Pour vous
      </h2>
      <ul className="moi-liste">{elements}</ul>
    </section>
  );
}

function Nouveautes({ accueil }) {
  const {
    produits = [],
    fiches_validees: validees = [],
    fiches_mises_a_jour: majs = [],
    totaux = {},
  } = accueil;
  return (
    <section aria-labelledby="nouv-title" className="section">
      <h2 id="nouv-title" className="section-title">
        Nouveautés
      </h2>
      <div className="nouv-grid">
        <div className="card">
          <h3>Traitements et recommandations</h3>
          {validees.length ? (
            <ul className="nouv-liste">
              {validees.map((f) => (
                <li key={f.slug}>
                  <Link to={`/pathologies/${f.slug}`}>{f.nom}</Link>
                  <span className="row-sub">
                    Validée le {date(f.valide_le)}
                    {f.valide_par && ` par ${f.valide_par}`}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted">
              Aucune fiche encore validée : {nombre(totaux.fiches)} fiches en relecture médicale.
            </p>
          )}
          {majs.length > 0 && (
            <>
              <h4>Mises à jour récentes</h4>
              <ul className="nouv-liste">
                {majs.slice(0, 5).map((f) => (
                  <li key={f.slug}>
                    <Link to={`/pathologies/${f.slug}`}>{f.nom}</Link>
                    <span className="row-sub">
                      {date(f.updated_at)}
                      {f.statut !== 'valide' && ' · à valider'}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="card">
          <h3>Produits ajoutés au catalogue</h3>
          {produits.length ? (
            <ul className="nouv-liste">
              {produits.slice(0, 8).map((p) => (
                <li key={p.id}>
                  <Link to={`/medicaments/${p.id}`}>{p.nom_commercial}</Link>
                  <span className="row-sub">
                    {[court(p.dci, 80), p.operateur].filter(Boolean).join(' · ')}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted">Aucun produit récent.</p>
          )}
          <p className="hint">
            {nombre(totaux.produits)} produits consultables, {nombre(totaux.amm)} AMM ACOREP au répertoire,{' '}
            {nombre(totaux.molecules)} molécules.
          </p>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const { api, repo } = useServices();
  const { user } = useAuth();
  const departements = useAsync(() => api.departements(), [api]);
  const accueil = useFacultatif(() => (typeof api.accueil === 'function' ? api.accueil() : null), [api]);
  const moi = useFacultatif(
    () => (user && typeof api.accueilPourMoi === 'function' ? api.accueilPourMoi() : null),
    [api, user?.id],
  );
  const derniere = useFacultatif(
    async () =>
      repo && typeof repo.list === 'function' ? (await repo.list(user ? user.id : null))[0] : null,
    [repo, user?.id],
  );

  // Mon espace est réservé aux comptes connectés
  if (!user) return <Navigate to="/connexion" state={{ from: '/espace' }} replace />;

  // Les alertes sanitaires et le fil d'actualités ne paraissent que sur la page d'accueil (« / »)
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <p className="hero-espace">Mon espace · {user.nom}</p>
        <h1 id="hero-title">
          MedRef RDC
          <span className="hero-byline">par le Dr Ben Mingalu</span>
        </h1>
        <p className="hero-lead">
          La référence clinique pensée pour la République démocratique du Congo : pathologies, urgences,
          médicaments disponibles localement et protocoles nationaux, reliés entre eux.
        </p>
        <SearchBar size="large" />
      </section>

      <section aria-labelledby="acces-title" className="section">
        <h2 id="acces-title" className="section-title">
          Accès rapides
        </h2>
        <ul className="quick-grid">
          {QUICK_ACCESS.map((q) => (
            <li key={q.to}>
              <Link to={q.to} className={`quick-tile${q.tone ? ` quick-${q.tone}` : ''}`}>
                <span className="quick-label">{q.label}</span>
                <span className="quick-hint">{q.hint}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <PourVous moi={moi} derniere={derniere} />

      {accueil && <Nouveautes accueil={accueil} />}

      <section aria-labelledby="dep-title" className="section">
        <h2 id="dep-title" className="section-title">
          Départements
        </h2>
        <AsyncView state={departements}>
          {(deps) => (
            <ul className="dep-grid">
              {deps.map((d) => (
                <li key={d.id}>
                  <Link to={`/departements/${d.slug}`} className="dep-card">
                    <span className="dep-icon" aria-hidden="true">
                      {d.icone}
                    </span>
                    <span className="dep-name">{d.nom}</span>
                    <span className="dep-desc">{d.description}</span>
                    <span className="dep-count">
                      {plural(Number(d.nb_specialites), 'spécialité', 'spécialités')},{' '}
                      {plural(Number(d.nb_pathologies), 'fiche', 'fiches')}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </AsyncView>
      </section>
    </>
  );
}
