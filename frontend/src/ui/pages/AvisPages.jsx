import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAuth } from '../context/auth.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { AsyncView, Empty, Loading } from '../components/Status.jsx';
import { CarteAvis, LienCible, Pharmacovigilance } from '../components/Avis.jsx';
import { CIBLES_AVIS, PROFILS, STATUTS_AVIS, TYPES_AVIS, TYPES_SOURCE_AVIS } from '../../core/labels.js';
import { dateLocale } from '../../core/dates.js';

/** Profils pouvant donner un avis et examiner ceux des autres (le serveur vérifie aussi). */
const PROFILS_AVIS = ['medecin_generaliste', 'medecin_specialiste', 'pharmacien', 'infirmier', 'sage_femme'];
const peutContribuer = (u) => Boolean(u) && u.verification === 'verifie' && PROFILS_AVIS.includes(u.profil);
const date = (d) => (d ? dateLocale(d).toLocaleDateString('fr-FR', { dateStyle: 'medium' }) : '');
const PHOTOS_MAX = 4;

/** Réduit une photo à 1280 px (JPEG) avant l'envoi : connexions lentes, 900 Ko maximum côté serveur. */
function reduireImage(fichier, cote = 1280) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(fichier);
    const img = new Image();
    img.onload = () => {
      const echelle = Math.min(1, cote / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * echelle);
      canvas.height = Math.round(img.height * echelle);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/jpeg', 0.82));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Image illisible'));
    };
    img.src = url;
  });
}

function Connexion({ retour }) {
  return (
    <Empty>
      <Link to="/connexion" state={{ from: retour }}>
        Connectez-vous
      </Link>{' '}
      avec un compte professionnel vérifié pour donner ou examiner un avis.
    </Empty>
  );
}

function NonAutorise() {
  return (
    <div className="card">
      <p>
        Les avis sont réservés aux médecins, pharmaciens, infirmiers et sages-femmes dont le numéro d’ordre a
        été vérifié.
      </p>
      <p>
        <Link to="/compte">Compléter mon profil et demander la vérification</Link>
      </p>
    </div>
  );
}

// ------------------------------------------------------------------ formulaire

const vide = () => ({
  type: 'tolerance',
  grave: false,
  titre: '',
  description: '',
  nb_patients: '',
  duree_observation: '',
  population: '',
  numero_lot: '',
  liens_interets: '',
  sources: [],
  engagement: false,
});

export function AvisFormPage() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const { api } = useServices();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [a, setA] = useState(vide);
  const [cible, setCible] = useState(() =>
    id
      ? null
      : {
          type: params.get('cible_type'),
          cible: params.get('cible'),
          nom: params.get('nom'),
        },
  );
  const [photos, setPhotos] = useState([]);
  const [erreurs, setErreurs] = useState({});
  const [message, setMessage] = useState(null);
  const [envoi, setEnvoi] = useState(false);
  const [charge, setCharge] = useState(!id);

  // Modification : on recharge l'avis de l'auteur (complément demandé)
  useEffect(() => {
    if (!id) return undefined;
    let actif = true;
    api.avis(id).then((x) => {
      if (!actif) return;
      setCible({ type: x.cible.type, nom: x.cible.nom, lien: x.cible });
      setA({
        type: x.type,
        grave: x.grave,
        titre: x.titre,
        description: x.description,
        nb_patients: x.nb_patients ?? '',
        duree_observation: x.duree_observation || '',
        population: x.population || '',
        numero_lot: x.numero_lot || '',
        liens_interets: x.liens_interets,
        sources: x.sources.map((s) => ({ ...s, url: s.url || '' })),
        engagement: false,
        motif: x.motif_moderation,
        droits: x.droits,
      });
      setCharge(true);
    });
    return () => {
      actif = false;
    };
  }, [api, id]);

  if (!user) return <Connexion retour={id ? `/avis/${id}/modifier` : '/avis/nouveau'} />;
  if (!peutContribuer(user)) return <NonAutorise />;
  if (!charge) return <Loading />;
  if (!id && (!cible?.type || !cible?.cible)) {
    return (
      <Empty>
        Choisissez d’abord le produit, la molécule ou la fiche concernée, puis « Donner un avis argumenté ».
      </Empty>
    );
  }

  const set = (k) => (e) =>
    setA((x) => ({ ...x, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));
  const err = (k) => erreurs[k] && <span className="field-error">{erreurs[k]}</span>;
  const setSource = (i, patch) =>
    setA((x) => ({ ...x, sources: x.sources.map((s, j) => (j === i ? { ...s, ...patch } : s)) }));
  const rappelPv = (a.type === 'tolerance' && a.grave) || a.type === 'qualite';

  const soumettre = async (e) => {
    e.preventDefault();
    setEnvoi(true);
    setErreurs({});
    setMessage(null);
    const payload = {
      type: a.type,
      grave: Boolean(a.grave) && ['tolerance', 'qualite'].includes(a.type),
      titre: a.titre,
      description: a.description,
      nb_patients: a.nb_patients === '' ? null : a.nb_patients,
      duree_observation: a.duree_observation,
      population: a.population,
      numero_lot: a.numero_lot,
      liens_interets: a.liens_interets,
      engagement: a.engagement,
      sources: a.sources.map((s) => ({ type: s.type, titre: s.titre, url: s.url || null })),
    };
    try {
      const enregistre = id
        ? await api.modifierAvis(id, payload)
        : await api.creerAvis({ ...payload, cible_type: cible.type, cible: cible.cible });
      for (const p of photos) {
        await api.photoAvis(enregistre.id, p.data, p.legende);
      }
      navigate(`/avis/${enregistre.id}`);
    } catch (ex) {
      setErreurs(ex.details || {});
      setMessage(ex.message || 'Envoi impossible');
    } finally {
      setEnvoi(false);
    }
  };

  const ajouterPhotos = async (e) => {
    const fichiers = [...(e.target.files || [])].slice(0, PHOTOS_MAX - photos.length);
    e.target.value = '';
    for (const f of fichiers) {
      try {
        const data = await reduireImage(f);
        setPhotos((x) => [...x, { data, legende: '' }]);
      } catch {
        setMessage('Une image n’a pas pu être lue.');
      }
    }
  };

  return (
    <>
      <Breadcrumb
        items={[{ label: 'Avis', to: '/avis' }, { label: id ? 'Compléter un avis' : 'Nouvel avis' }]}
      />
      <header className="page-header">
        <h1>{id ? 'Compléter mon avis' : 'Donner un avis argumenté'}</h1>
        <p className="lead">
          {CIBLES_AVIS[cible.type]} : <strong>{cible.nom}</strong>. Décrivez des faits vérifiables ; l’avis
          sera examiné par des professionnels vérifiés puis par un relecteur médical avant publication.
        </p>
      </header>
      {a.motif && (
        <p className="alerte-dose">
          <strong>Complément demandé :</strong> {a.motif}
        </p>
      )}
      <form className="card avis-form" onSubmit={soumettre} noValidate>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="avis-type">Type d’avis *</label>
            <select id="avis-type" value={a.type} onChange={set('type')}>
              {Object.entries(TYPES_AVIS).map(([k, l]) => (
                <option key={k} value={k}>
                  {l}
                </option>
              ))}
            </select>
            {err('type')}
          </div>
          {['tolerance', 'qualite'].includes(a.type) && (
            <label className="checkbox avis-grave-case">
              <input type="checkbox" checked={a.grave} onChange={set('grave')} /> Effet indésirable grave ou
              produit suspect (falsification, défaut dangereux)
            </label>
          )}
        </div>
        {rappelPv && <Pharmacovigilance />}
        <div className="field">
          <label htmlFor="avis-titre">Titre *</label>
          <input id="avis-titre" value={a.titre} onChange={set('titre')} maxLength={190} autoComplete="off" />
          {err('titre')}
        </div>
        <div className="field">
          <label htmlFor="avis-desc">Description factuelle *</label>
          <textarea
            id="avis-desc"
            rows={6}
            value={a.description}
            onChange={set('description')}
            maxLength={5000}
            placeholder="Ce qui a été observé, chez qui, à quelle dose, avec quelle évolution. Pas de nom de patient ni de confrère."
          />
          {err('description')}
        </div>
        <div className="form-grid form-grid-3">
          <div className="field">
            <label htmlFor="avis-nb">Nombre de patients</label>
            <input id="avis-nb" inputMode="numeric" value={a.nb_patients} onChange={set('nb_patients')} />
            {err('nb_patients')}
          </div>
          <div className="field">
            <label htmlFor="avis-duree">Durée d’observation</label>
            <input
              id="avis-duree"
              value={a.duree_observation}
              onChange={set('duree_observation')}
              maxLength={120}
              placeholder="ex. 6 mois"
            />
          </div>
          <div className="field">
            <label htmlFor="avis-pop">Population</label>
            <input
              id="avis-pop"
              value={a.population}
              onChange={set('population')}
              maxLength={190}
              placeholder="ex. enfants de 1 à 5 ans"
            />
          </div>
        </div>
        {cible.type === 'produit' && (
          <div className="field">
            <label htmlFor="avis-lot">Numéro de lot</label>
            <input
              id="avis-lot"
              value={a.numero_lot}
              onChange={set('numero_lot')}
              maxLength={80}
              autoComplete="off"
            />
          </div>
        )}

        <fieldset className="avis-sources">
          <legend>
            Sources
            {['efficacite', 'donnee_scientifique'].includes(a.type)
              ? ' * (obligatoires pour une donnée scientifique)'
              : ''}
          </legend>
          {a.sources.map((s, i) => (
            <div key={i} className="form-grid form-grid-3 avis-source">
              <div className="field">
                <label htmlFor={`src-type-${i}`}>Type</label>
                <select
                  id={`src-type-${i}`}
                  value={s.type}
                  onChange={(e) => setSource(i, { type: e.target.value })}
                >
                  {Object.entries(TYPES_SOURCE_AVIS).map(([k, l]) => (
                    <option key={k} value={k}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor={`src-titre-${i}`}>Référence</label>
                <input
                  id={`src-titre-${i}`}
                  value={s.titre}
                  onChange={(e) => setSource(i, { titre: e.target.value })}
                  maxLength={500}
                  placeholder="Auteurs, titre, revue, année"
                />
                {err(`sources[${i}].titre`)}
              </div>
              <div className="field">
                <label htmlFor={`src-url-${i}`}>Lien</label>
                <input
                  id={`src-url-${i}`}
                  value={s.url}
                  onChange={(e) => setSource(i, { url: e.target.value })}
                  maxLength={500}
                  placeholder="https://…"
                />
                {err(`sources[${i}].url`)}
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-small"
                onClick={() => setA((x) => ({ ...x, sources: x.sources.filter((_, j) => j !== i) }))}
              >
                Retirer la source
              </button>
            </div>
          ))}
          {err('sources')}
          {a.sources.length < 10 && (
            <button
              type="button"
              className="btn btn-secondary btn-small"
              onClick={() =>
                setA((x) => ({ ...x, sources: [...x.sources, { type: 'etude', titre: '', url: '' }] }))
              }
            >
              Ajouter une source
            </button>
          )}
        </fieldset>

        <fieldset className="avis-sources">
          <legend>Photos (emballage, numéro de lot)</legend>
          <p className="hint">
            {PHOTOS_MAX} photos au maximum, réduites avant l’envoi. Aucune photo permettant d’identifier un
            patient.
          </p>
          {photos.length > 0 && (
            <ul className="avis-photos">
              {photos.map((p, i) => (
                <li key={i}>
                  <img src={p.data} alt={`Photo ${i + 1}`} />
                  <input
                    aria-label={`Légende de la photo ${i + 1}`}
                    value={p.legende}
                    maxLength={190}
                    onChange={(e) =>
                      setPhotos((x) => x.map((q, j) => (j === i ? { ...q, legende: e.target.value } : q)))
                    }
                    placeholder="Légende"
                  />
                  <button
                    type="button"
                    className="btn btn-ghost btn-small"
                    onClick={() => setPhotos((x) => x.filter((_, j) => j !== i))}
                  >
                    Retirer
                  </button>
                </li>
              ))}
            </ul>
          )}
          {photos.length < PHOTOS_MAX && (
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              onChange={ajouterPhotos}
              aria-label="Ajouter des photos"
            />
          )}
        </fieldset>

        <div className="field">
          <label htmlFor="avis-liens">Déclaration de liens d’intérêts *</label>
          <textarea
            id="avis-liens"
            rows={2}
            value={a.liens_interets}
            onChange={set('liens_interets')}
            maxLength={1000}
            placeholder="« Aucun », ou vos liens avec une firme (emploi, rémunération, invitation, essai clinique…)"
          />
          {err('liens_interets')}
        </div>
        <label className="checkbox">
          <input type="checkbox" checked={a.engagement} onChange={set('engagement')} /> Je certifie que cet
          avis décrit des faits vérifiables, sans publicité ni critique nominative d’un confrère, et sans
          donnée permettant d’identifier un patient.
        </label>
        {err('engagement')}
        {message && (
          <p className="form-error" role="alert">
            {message}
          </p>
        )}
        <div className="ordo-actions">
          <button type="submit" className="btn btn-primary" disabled={envoi}>
            {envoi ? 'Envoi…' : id ? 'Renvoyer pour examen' : 'Soumettre pour examen'}
          </button>
        </div>
      </form>
    </>
  );
}

// ------------------------------------------------------------------ détail

function Signaler({ onSignaler, libelle = 'Signaler' }) {
  const [ouvert, setOuvert] = useState(false);
  const [motif, setMotif] = useState('');
  const [fait, setFait] = useState(false);
  if (fait) return <span className="muted">Signalement envoyé.</span>;
  if (!ouvert)
    return (
      <button type="button" className="btn btn-ghost btn-small" onClick={() => setOuvert(true)}>
        {libelle}
      </button>
    );
  return (
    <span className="avis-signaler">
      <input
        aria-label="Motif du signalement"
        value={motif}
        maxLength={500}
        onChange={(e) => setMotif(e.target.value)}
        placeholder="Publicité, critique nominative, donnée erronée…"
      />
      <button
        type="button"
        className="btn btn-secondary btn-small"
        disabled={!motif.trim()}
        onClick={async () => {
          await onSignaler(motif.trim());
          setFait(true);
        }}
      >
        Envoyer
      </button>
    </span>
  );
}

export function AvisPage() {
  const { id } = useParams();
  const { api } = useServices();
  const navigate = useNavigate();
  const state = useAsync(() => api.avis(id), [api, id]);
  const [commentaire, setCommentaire] = useState('');
  const [erreur, setErreur] = useState(null);
  const [confirmer, setConfirmer] = useState(false);

  const action = async (fn) => {
    setErreur(null);
    try {
      await fn();
      state.reload();
    } catch (ex) {
      setErreur(ex.message);
    }
  };

  return (
    <AsyncView state={state}>
      {(a) => (
        <article className="avis-detail">
          <Breadcrumb items={[{ label: 'Avis', to: '/avis' }, { label: a.titre }]} />
          <header className="page-header">
            <p className="actu-type">
              {TYPES_AVIS[a.type]}
              {a.grave && ' · grave'} · {STATUTS_AVIS[a.statut]}
            </p>
            <h1>{a.titre}</h1>
            <p className="lead">
              {CIBLES_AVIS[a.cible.type]} : <LienCible cible={a.cible} />
              {a.numero_lot && ` · lot ${a.numero_lot}`}
            </p>
            <p className="row-sub">
              {[a.auteur_nom, PROFILS[a.auteur_profil]].filter(Boolean).join(', ')} · soumis le{' '}
              {date(a.created_at)}
              {a.statut === 'publie' &&
                a.modere_par_nom &&
                ` · publié par ${a.modere_par_nom} le ${date(a.modere_le)}`}
            </p>
          </header>
          {a.motif_moderation && a.statut !== 'publie' && (
            <p className="alerte-dose">
              <strong>{a.statut === 'rejete' ? 'Motif du rejet' : 'Complément demandé'} :</strong>{' '}
              {a.motif_moderation}
            </p>
          )}
          {(a.grave || a.type === 'qualite') && <Pharmacovigilance />}
          <section className="card">
            <p className="actu-resume">{a.description}</p>
            {(a.nb_patients !== null || a.duree_observation || a.population) && (
              <p className="row-sub">
                {[
                  a.nb_patients !== null && `${a.nb_patients} patient${a.nb_patients > 1 ? 's' : ''}`,
                  a.duree_observation,
                  a.population,
                ]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            )}
            {a.sources.length > 0 && (
              <>
                <h2>Sources</h2>
                <ul>
                  {a.sources.map((s, i) => (
                    <li key={i}>
                      <span className="tag">{TYPES_SOURCE_AVIS[s.type]}</span>{' '}
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noopener noreferrer">
                          {s.titre}
                        </a>
                      ) : (
                        s.titre
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {a.photos.length > 0 && (
              <ul className="avis-photos">
                {a.photos.map((p) => (
                  <li key={p.id}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      <img src={p.url} alt={p.legende || 'Photo jointe'} loading="lazy" />
                    </a>
                    {p.legende && <span className="row-sub">{p.legende}</span>}
                  </li>
                ))}
              </ul>
            )}
            <p className="row-sub">Liens d’intérêts déclarés : {a.liens_interets}</p>
          </section>

          <section className="card">
            <h2>Examen par les pairs</h2>
            <p>
              {a.votes} professionnel{a.votes > 1 ? 's' : ''} vérifié{a.votes > 1 ? 's' : ''} jugent cet
              élément pertinent et sourcé.
            </p>
            {a.droits.examiner && (
              <button
                type="button"
                className={`btn btn-small ${a.a_vote ? 'btn-secondary' : 'btn-primary'}`}
                aria-pressed={a.a_vote}
                onClick={() => action(() => api.voterAvis(a.id))}
              >
                {a.a_vote ? 'Retirer mon vote' : 'Élément pertinent et sourcé'}
              </button>
            )}
            {a.commentaires.length > 0 && (
              <ul className="avis-commentaires">
                {a.commentaires.map((c) => (
                  <li key={c.id} className={c.masque ? 'masque' : undefined}>
                    <p className="row-sub">
                      {[c.auteur_nom, PROFILS[c.auteur_profil]].filter(Boolean).join(', ')} ·{' '}
                      {date(c.created_at)}
                      {c.masque && ' · masqué'}
                    </p>
                    <p className="actu-resume">{c.texte}</p>
                    {a.droits.signaler && (
                      <Signaler
                        libelle="Signaler ce commentaire"
                        onSignaler={(motif) => api.signalerAvis(a.id, motif, c.id)}
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
            {a.droits.examiner && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!commentaire.trim()) return;
                  action(async () => {
                    await api.commenterAvis(a.id, commentaire.trim());
                    setCommentaire('');
                  });
                }}
              >
                <div className="field">
                  <label htmlFor="avis-commentaire">
                    Votre commentaire (l’avis ne peut pas être modifié par les pairs)
                  </label>
                  <textarea
                    id="avis-commentaire"
                    rows={3}
                    maxLength={3000}
                    value={commentaire}
                    onChange={(e) => setCommentaire(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-secondary btn-small" disabled={!commentaire.trim()}>
                  Commenter
                </button>
              </form>
            )}
          </section>

          {erreur && (
            <p className="form-error" role="alert">
              {erreur}
            </p>
          )}
          <div className="ordo-actions">
            {a.droits.modifier && (
              <Link to={`/avis/${a.id}/modifier`} className="btn btn-secondary">
                Compléter mon avis
              </Link>
            )}
            {a.droits.retirer &&
              (confirmer ? (
                <>
                  <span>Retirer cet avis ?</span>
                  <button
                    type="button"
                    className="btn btn-danger btn-small"
                    onClick={() => action(() => api.retirerAvis(a.id))}
                  >
                    Retirer
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-small"
                    onClick={() => setConfirmer(false)}
                  >
                    Annuler
                  </button>
                </>
              ) : (
                <button type="button" className="btn btn-ghost" onClick={() => setConfirmer(true)}>
                  Retirer mon avis
                </button>
              ))}
            {a.droits.moderer && (
              <button type="button" className="btn btn-ghost" onClick={() => navigate('/admin?onglet=avis')}>
                Modérer
              </button>
            )}
            {a.droits.signaler && (
              <Signaler libelle="Signaler cet avis" onSignaler={(motif) => api.signalerAvis(a.id, motif)} />
            )}
          </div>
        </article>
      )}
    </AsyncView>
  );
}

// ------------------------------------------------------------------ mes avis

export function MesAvisPage() {
  const { api } = useServices();
  const { user } = useAuth();
  const [onglet, setOnglet] = useState('mes');
  const mes = useAsync(() => (user ? api.mesAvis() : Promise.resolve([])), [api, user?.id]);
  const examen = useAsync(
    () => (peutContribuer(user) ? api.avisExamen() : Promise.resolve([])),
    [api, user?.id],
  );
  if (!user) return <Connexion retour="/avis" />;
  const liste = onglet === 'mes' ? mes : examen;
  return (
    <>
      <Breadcrumb items={[{ label: 'Avis' }]} />
      <header className="page-header">
        <h1>Avis sur les produits et les traitements</h1>
        <p className="lead">
          Pour donner un avis, ouvrez la fiche du produit, de la molécule ou de la pathologie concernée.
        </p>
      </header>
      {!peutContribuer(user) && <NonAutorise />}
      <div className="segmented" role="group" aria-label="Section">
        <button type="button" aria-pressed={onglet === 'mes'} onClick={() => setOnglet('mes')}>
          Mes avis
        </button>
        {peutContribuer(user) && (
          <button type="button" aria-pressed={onglet === 'examen'} onClick={() => setOnglet('examen')}>
            À examiner
          </button>
        )}
      </div>
      <AsyncView state={liste}>
        {(l) =>
          l.length ? (
            <ul className="actu-liste">
              {l.map((a) => (
                <CarteAvis key={a.id} a={a} avecCible />
              ))}
            </ul>
          ) : (
            <Empty>
              {onglet === 'mes' ? 'Vous n’avez encore donné aucun avis.' : 'Aucun avis en attente d’examen.'}
            </Empty>
          )
        }
      </AsyncView>
    </>
  );
}
