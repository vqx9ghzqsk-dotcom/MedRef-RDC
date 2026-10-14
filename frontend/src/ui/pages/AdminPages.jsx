import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAuth } from '../context/auth.jsx';
import { useAsync } from '../hooks/useAsync.js';
import { AsyncView, Empty } from '../components/Status.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import {
  EditorGuard,
  Historique,
  ListEditor,
  SaveBar,
  SelectField,
  TextArea,
  TextField,
  formatDateTime,
  useUnsavedWarning,
} from '../components/AdminForm.jsx';
import { NumberField } from '../components/NumberField.jsx';
import { LienProduit, PhotoProduit } from '../components/Produits.jsx';
import { SUGGESTIONS } from '../../core/saisie.js';
import {
  CATEGORIES_EXAMEN,
  FICHE_PHARMACO,
  GRADES,
  NIVEAUX_SOINS,
  POPULATIONS,
  SECURITES,
  RUBRIQUES_SEMIOLOGIE,
  DOSE_BASES,
  FORMES_PRESENTATION,
  FREQUENCE_TYPES,
  ORDRES,
  PAR_UNITES,
  PROFILS,
  UNITES_DUREE,
  STATUTS_FICHE,
  STRUCTURES,
  VERIFICATIONS,
  TYPES_EXAMEN,
  TYPES_FORME,
  formatPrixCdf,
} from '../../core/labels.js';

const entries = (obj) => Object.entries(obj).map(([k, v]) => [k, typeof v === 'string' ? v : v.label]);

/** Enregistrement commun : état, erreurs par champ renvoyées par l'API, message. */
function useSave(save) {
  const [state, setState] = useState({ saving: false, message: null, error: null, errors: {} });
  const run = async (payload) => {
    setState({ saving: true, message: null, error: null, errors: {} });
    try {
      const res = await save(payload);
      const message =
        res && res.inchange ? 'Aucune modification à enregistrer.' : 'Modifications enregistrées.';
      setState({ saving: false, message, error: null, errors: {} });
      return res || true;
    } catch (err) {
      setState({
        saving: false,
        message: null,
        error: err.details ? 'Certains champs sont invalides (voir ci-dessous).' : err.message,
        errors: err.details || {},
      });
      return null;
    }
  };
  return [state, run];
}

// ================================================================== Tableau de bord

const ONGLETS_ADMIN = [
  ['fiches', 'Fiches pathologie'],
  ['molecules', 'Molécules et posologies'],
  ['produits', 'Produits'],
  ['catalogue', 'Catalogue des firmes'],
  ['semiologie', 'Glossaire et syndromes'],
  ['historique', 'Historique'],
  ['comptes', 'Comptes', 'admin'],
];

export function AdminHomePage() {
  return (
    <EditorGuard>
      <AdminHome />
    </EditorGuard>
  );
}

function AdminHome() {
  const { api } = useServices();
  const { user } = useAuth();
  const state = useAsync(() => api.adminResume(), [api]);
  const [onglet, setOnglet] = useState('fiches');
  const [statut, setStatut] = useState('');
  const [q, setQ] = useState('');
  const norm = (s) =>
    String(s || '')
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase();

  return (
    <>
      <Breadcrumb items={[{ label: 'Administration' }]} />
      <header className="page-header">
        <h1>Administration du contenu</h1>
        <p className="lead">
          Corriger, compléter et valider les fiches. Chaque enregistrement est tracé dans l’historique.
        </p>
      </header>
      <AsyncView state={state}>
        {(d) => {
          const filtre = (texte) => !q || norm(texte).includes(norm(q));
          return (
            <>
              <ul className="stat-tiles" aria-label="Statut des fiches">
                {[...Object.entries(STATUTS_FICHE), ['a_revoir', 'À revoir']].map(([k, label]) => (
                  <li key={k} className={`stat-tile statut-${k}`}>
                    <span className="stat-value">{d.statuts[k] ?? 0}</span>
                    <span className="stat-label">{label}</span>
                  </li>
                ))}
              </ul>
              <p className="hint">
                Une fiche validée est à revoir après {d.parametres?.revision_mois ?? 24} mois.
                {d.parametres?.double_validation &&
                  ' Validation à deux relecteurs active : on ne valide pas une version qu’on a soi-même rédigée.'}
              </p>

              <div className="segmented" role="group" aria-label="Section">
                {ONGLETS_ADMIN.filter(([, , role]) => !role || user?.role === role).map(([k, label]) => (
                  <button
                    key={k}
                    type="button"
                    className="segmented-btn"
                    aria-pressed={onglet === k}
                    onClick={() => setOnglet(k)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {!['historique', 'catalogue', 'comptes'].includes(onglet) && (
                <form className="filter-bar" onSubmit={(e) => e.preventDefault()} aria-label="Filtres">
                  <div className="field">
                    <label htmlFor="admin-q">Rechercher</label>
                    <input
                      id="admin-q"
                      type="search"
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="ex. paludisme, Kernig"
                    />
                  </div>
                  {onglet === 'fiches' && (
                    <div className="field">
                      <label htmlFor="admin-statut">Statut</label>
                      <select id="admin-statut" value={statut} onChange={(e) => setStatut(e.target.value)}>
                        <option value="">Tous</option>
                        {Object.entries(STATUTS_FICHE).map(([k, l]) => (
                          <option key={k} value={k}>
                            {l}
                          </option>
                        ))}
                        <option value="a_revoir">À revoir (révision dépassée)</option>
                      </select>
                    </div>
                  )}
                </form>
              )}

              {onglet === 'fiches' && (
                <FichesAdmin
                  fiches={d.pathologies.filter(
                    (p) =>
                      (!statut || (statut === 'a_revoir' ? p.a_revoir : p.statut === statut)) &&
                      filtre(`${p.nom} ${p.specialite} ${p.departement}`),
                  )}
                  onValidees={state.reload}
                />
              )}

              {onglet === 'molecules' && (
                <div className="table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th scope="col">Molécule</th>
                        <th scope="col">Classe</th>
                        <th scope="col">Posologies</th>
                      </tr>
                    </thead>
                    <tbody>
                      {d.molecules
                        .filter((m) => filtre(`${m.dci} ${m.classe}`))
                        .map((m) => (
                          <tr key={m.id}>
                            <td>
                              <Link to={`/admin/molecules/${m.id}`}>{m.dci}</Link>
                            </td>
                            <td>{m.classe}</td>
                            <td>
                              {Number(m.nb_posologies) > 0 ? (
                                m.nb_posologies
                              ) : (
                                <span className="tag tag-warn">à saisir</span>
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}

              {onglet === 'produits' && (
                <div className="table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th scope="col">Produit</th>
                        <th scope="col">Opérateur</th>
                        <th scope="col">RDC</th>
                        <th scope="col">Prix</th>
                      </tr>
                    </thead>
                    <tbody>
                      {d.medicaments
                        .filter((m) => filtre(`${m.nom_commercial} ${m.dci} ${m.operateur}`))
                        .map((m) => (
                          <tr key={m.id}>
                            <td>
                              <Link to={`/admin/medicaments/${m.id}`}>{m.nom_commercial}</Link>
                              <span className="row-sub">{m.dci}</span>
                            </td>
                            <td>{m.operateur}</td>
                            <td>
                              {m.disponible_rdc ? (
                                <span className="tag tag-ok">Oui</span>
                              ) : (
                                <span className="tag">À confirmer</span>
                              )}
                            </td>
                            <td>{formatPrixCdf(m.prix_indicatif_cdf)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}

              {onglet === 'semiologie' && <SemiologieAdmin filtre={filtre} />}
              {onglet === 'catalogue' && <CatalogueAdmin />}
              {onglet === 'comptes' && user?.role === 'admin' && <ComptesAdmin />}

              {onglet === 'historique' &&
                (d.modifications.length ? (
                  <ul className="historique card">
                    {d.modifications.map((h) => (
                      <li key={h.id}>
                        <span className={`tag ${h.action === 'validation' ? 'tag-ok' : ''}`}>
                          {h.action === 'validation' ? 'Validation' : 'Modification'}
                        </span>{' '}
                        <strong>{h.libelle || `${h.entite} n° ${h.entite_id}`}</strong> : {h.resume}{' '}
                        <span className="muted">
                          — {h.auteur || 'compte supprimé'}, {formatDateTime(h.created_at)}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Empty>Aucune modification enregistrée pour le moment.</Empty>
                ))}
            </>
          );
        }}
      </AsyncView>
    </>
  );
}

// ================================================================== Fiche pathologie

const AIDE_PUCES = 'Une ligne par signe, commençant par « - ». **gras** pour l’essentiel.';

/** Syndromes d'une forme : puces retirables + liste déroulante pour en ajouter. */
/**
 * Comptes (administrateurs) : vérification du statut professionnel et liens de
 * réinitialisation du mot de passe pour les demandes reçues sans serveur d'e-mail.
 */
function ComptesAdmin() {
  const { api } = useServices();
  const [version, setVersion] = useState(0);
  const state = useAsync(() => api.adminComptes(), [api, version]);
  const [filtre, setFiltre] = useState('en_attente');
  const [motifs, setMotifs] = useState({});
  const [lien, setLien] = useState(null);
  const [erreur, setErreur] = useState(null);
  const [copie, setCopie] = useState(false);

  const agir = async (action) => {
    setErreur(null);
    try {
      await action();
      setVersion((v) => v + 1);
    } catch (err) {
      setErreur(err.details ? Object.values(err.details).join(' ') : err.message);
    }
  };
  const decider = (id, decision) => agir(() => api.adminDecisionVerification(id, decision, motifs[id] || ''));
  const genererLien = (id) =>
    agir(async () => {
      setCopie(false);
      setLien(await api.adminLienReinitialisation(id));
    });
  const copier = async () => {
    try {
      await navigator.clipboard.writeText(lien.lien);
      setCopie(true);
    } catch {
      setCopie(false);
    }
  };

  return (
    <AsyncView state={state}>
      {(d) => {
        const comptes = d.comptes.filter((c) => !filtre || c.verification === filtre);
        return (
          <div className="admin-comptes">
            {erreur && (
              <p className="form-error" role="alert">
                {erreur}
              </p>
            )}
            {lien && (
              <div className="validation-confirmation" role="status">
                <p>
                  Lien pour <strong>{lien.nom}</strong> ({lien.email}), valable {lien.valide_heures} h et
                  utilisable une seule fois. Transmettez-le à la personne elle-même (WhatsApp, SMS…) ; il ne
                  sera plus affiché.
                </p>
                <input
                  className="lien-reinitialisation"
                  value={lien.lien}
                  readOnly
                  aria-label="Lien de réinitialisation"
                />
                <button type="button" className="btn btn-secondary btn-small" onClick={copier}>
                  {copie ? 'Copié' : 'Copier le lien'}
                </button>
                <button type="button" className="btn-link" onClick={() => setLien(null)}>
                  Masquer
                </button>
              </div>
            )}

            <h2>Demandes de mot de passe oublié</h2>
            {d.demandes_reinitialisation.length ? (
              <ul className="historique card">
                {d.demandes_reinitialisation.map((r) => (
                  <li key={r.id}>
                    <strong>{r.nom}</strong> ({r.email}) — demandé le {formatDateTime(r.created_at)}{' '}
                    <button
                      type="button"
                      className="btn btn-secondary btn-small"
                      onClick={() => genererLien(r.user_id)}
                    >
                      Générer un lien
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>Aucune demande en attente.</Empty>
            )}

            <h2>Comptes</h2>
            <div className="field">
              <label htmlFor="comptes-filtre">Vérification</label>
              <select id="comptes-filtre" value={filtre} onChange={(e) => setFiltre(e.target.value)}>
                <option value="">Tous les comptes</option>
                {Object.entries(VERIFICATIONS).map(([k, l]) => (
                  <option key={k} value={k}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
            <div className="table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th scope="col">Compte</th>
                    <th scope="col">Profil et lieu</th>
                    <th scope="col">Ordre</th>
                    <th scope="col">Vérification</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {comptes.map((c) => (
                    <tr key={c.id}>
                      <td>
                        <strong>{c.nom}</strong>
                        <span className="row-sub">{c.email}</span>
                        <span className="row-sub">Inscrit le {formatDateTime(c.created_at)}</span>
                      </td>
                      <td>
                        {PROFILS[c.profil] || 'Profil non renseigné'}
                        {c.specialite_exercee && <span className="row-sub">{c.specialite_exercee}</span>}
                        <span className="row-sub">
                          {[STRUCTURES[c.structure_type], c.structure_nom, c.province]
                            .filter(Boolean)
                            .join(' — ')}
                        </span>
                      </td>
                      <td>
                        {c.numero_ordre ? (
                          <>
                            {ORDRES[c.ordre_professionnel]}
                            <span className="row-sub">n° {c.numero_ordre}</span>
                          </>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td>
                        <span className={`tag verification-${c.verification}`}>
                          {VERIFICATIONS[c.verification]}
                        </span>
                        {c.verifie_le && (
                          <span className="row-sub">
                            {c.verifie_par || '—'}, {formatDateTime(c.verifie_le)}
                          </span>
                        )}
                        {c.verification_motif && (
                          <span className="row-sub">Motif : {c.verification_motif}</span>
                        )}
                      </td>
                      <td>
                        {c.numero_ordre && c.verification !== 'non_demandee' && (
                          <div className="actions-compte">
                            {c.verification !== 'verifie' && (
                              <button
                                type="button"
                                className="btn btn-primary btn-small"
                                onClick={() => decider(c.id, 'verifie')}
                              >
                                Vérifier
                              </button>
                            )}
                            {c.verification !== 'refuse' && (
                              <>
                                <input
                                  aria-label={`Motif du refus pour ${c.nom}`}
                                  placeholder="Motif du refus"
                                  maxLength={300}
                                  value={motifs[c.id] || ''}
                                  onChange={(e) => setMotifs((m) => ({ ...m, [c.id]: e.target.value }))}
                                />
                                <button
                                  type="button"
                                  className="btn btn-danger btn-small"
                                  onClick={() => decider(c.id, 'refuse')}
                                >
                                  Refuser
                                </button>
                              </>
                            )}
                          </div>
                        )}
                        <button type="button" className="btn-link" onClick={() => genererLien(c.id)}>
                          Lien de réinitialisation
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!comptes.length && <Empty>Aucun compte dans cette catégorie.</Empty>}
            </div>
          </div>
        );
      }}
    </AsyncView>
  );
}

/**
 * Liste des fiches avec validation groupée : seules les fiches « à valider »
 * sont sélectionnables ; la validation exige une confirmation explicite de relecture.
 */
function FichesAdmin({ fiches, onValidees }) {
  const { api } = useServices();
  const [selection, setSelection] = useState(() => new Set());
  const [confirmation, setConfirmation] = useState(false);
  const [envoi, setEnvoi] = useState({ enCours: false, erreur: null, resultat: null });

  const selectionnables = fiches.filter((p) => p.statut === 'a_valider');
  const choisies = selectionnables.filter((p) => selection.has(p.id));
  const toutesCochees = selectionnables.length > 0 && choisies.length === selectionnables.length;

  const basculer = (id) =>
    setSelection((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  const toutBasculer = () =>
    setSelection((s) => {
      const n = new Set(s);
      for (const p of selectionnables) {
        if (toutesCochees) n.delete(p.id);
        else n.add(p.id);
      }
      return n;
    });

  const valider = async () => {
    setEnvoi({ enCours: true, erreur: null, resultat: null });
    try {
      const r = await api.adminValiderPathologies(
        choisies.map((p) => p.id),
        true,
      );
      setEnvoi({ enCours: false, erreur: null, resultat: r });
      setSelection(new Set());
      setConfirmation(false);
      onValidees();
    } catch (err) {
      setEnvoi({ enCours: false, erreur: err.message, resultat: null });
    }
  };

  return (
    <>
      <div className="validation-groupee" role="group" aria-label="Validation groupée">
        <p className="hint">
          {selectionnables.length
            ? `${choisies.length} fiche(s) sélectionnée(s) sur ${selectionnables.length} « à valider » affichée(s). ` +
              'Filtrez par recherche ou par statut pour cibler un ensemble relu.'
            : 'Aucune fiche « à valider » dans la liste affichée.'}
        </p>
        {choisies.length > 0 && (
          <div className="validation-confirmation">
            <div className="field field-check">
              <input
                id="confirmation-relecture"
                type="checkbox"
                checked={confirmation}
                onChange={(e) => setConfirmation(e.target.checked)}
              />
              <label htmlFor="confirmation-relecture">
                J’ai relu ces {choisies.length} fiche(s) et je les valide sous ma responsabilité médicale.
              </label>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              disabled={!confirmation || envoi.enCours}
              onClick={valider}
            >
              {envoi.enCours ? 'Validation…' : `Valider la sélection (${choisies.length})`}
            </button>
          </div>
        )}
        {envoi.erreur && (
          <p className="form-error" role="alert">
            {envoi.erreur}
          </p>
        )}
        {envoi.resultat && (
          <div role="status">
            <p className="form-success">{envoi.resultat.validees.length} fiche(s) validée(s).</p>
            {envoi.resultat.ignorees.length > 0 && (
              <details>
                <summary>{envoi.resultat.ignorees.length} fiche(s) non validée(s)</summary>
                <ul>
                  {envoi.resultat.ignorees.map((f) => (
                    <li key={f.id}>
                      {f.nom || `Fiche ${f.id}`} : {f.raison}
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        )}
      </div>
      <div className="table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th scope="col" className="col-check">
                <input
                  type="checkbox"
                  aria-label="Sélectionner toutes les fiches « à valider » affichées"
                  checked={toutesCochees}
                  disabled={!selectionnables.length}
                  onChange={toutBasculer}
                />
              </th>
              <th scope="col">Fiche</th>
              <th scope="col">Département</th>
              <th scope="col">Statut</th>
              <th scope="col">Validation</th>
            </tr>
          </thead>
          <tbody>
            {fiches.map((p) => (
              <tr key={p.id}>
                <td className="col-check">
                  {p.statut === 'a_valider' && (
                    <input
                      type="checkbox"
                      aria-label={`Sélectionner ${p.nom}`}
                      checked={selection.has(p.id)}
                      onChange={() => basculer(p.id)}
                    />
                  )}
                </td>
                <td>
                  <Link to={`/admin/pathologies/${p.id}`}>{p.nom}</Link>
                  <span className="row-sub">{p.specialite}</span>
                </td>
                <td>{p.departement}</td>
                <td>
                  <span className={`tag statut-${p.statut}`}>{STATUTS_FICHE[p.statut]}</span>
                  {p.a_revoir && <span className="tag tag-warn"> À revoir</span>}
                </td>
                <td className="muted">
                  {p.statut === 'valide' ? `${p.valide_par || '—'}, ${formatDateTime(p.valide_le)}` : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function SyndromesForme({ valeur, options, onChange, erreur }) {
  const restants = options.filter((o) => !valeur.includes(o.slug));
  return (
    <div className="field">
      <span className="field-label">Regroupement syndromique</span>
      {valeur.length > 0 && (
        <ul className="chips">
          {valeur.map((slug) => (
            <li key={slug}>
              <span className="chip chip-syndrome chip-retirable">
                {options.find((o) => o.slug === slug)?.nom || slug}
                <button
                  type="button"
                  className="btn-link"
                  aria-label={`Retirer ${options.find((o) => o.slug === slug)?.nom || slug}`}
                  onClick={() => onChange(valeur.filter((x) => x !== slug))}
                >
                  ×
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
      <SelectField
        label="Ajouter un syndrome"
        value={null}
        onChange={(slug) => slug && onChange([...valeur, slug])}
        options={restants.map((o) => [o.slug, o.nom])}
        emptyLabel="— Choisir un syndrome —"
        error={erreur}
      />
    </div>
  );
}

function FormeEditor({ forme, update, i, err, options, examensOptions }) {
  const examens = forme.examens || [];
  const setExamen = (j, patch) =>
    update({ examens: examens.map((e, k) => (k === j ? { ...e, ...patch } : e)) });
  return (
    <>
      <div className="form-grid">
        <TextField
          label="Nom de la forme"
          value={forme.nom}
          onChange={(nom) => update({ nom })}
          error={err(`formes[${i}].nom`)}
          placeholder="ex. Neuropaludisme, forme de l’enfant"
          required
        />
        <SelectField
          label="Type de forme"
          value={forme.type}
          onChange={(type) => update({ type })}
          options={entries(TYPES_FORME)}
          error={err(`formes[${i}].type`)}
          required
        />
      </div>
      <TextArea
        label="Description (onglet Définition)"
        rows={2}
        value={forme.description}
        onChange={(description) => update({ description })}
        error={err(`formes[${i}].description`)}
        placeholder="ex. Coma persistant plus de 30 min après une convulsion, sans autre cause."
      />
      {RUBRIQUES_SEMIOLOGIE.map(([k, label]) => (
        <TextArea
          key={k}
          label={label}
          rows={3}
          value={forme[k]}
          onChange={(v) => update({ [k]: v })}
          error={err(`formes[${i}].${k}`)}
          placeholder={
            k === 'signes_physiques'
              ? '- **Inspection** : …\n- **Palpation** : …\n- **Auscultation** : …'
              : '- …'
          }
          hint={AIDE_PUCES}
        />
      ))}
      <TextArea
        label="Étiologies de cette forme (onglet Étiologies)"
        rows={3}
        value={forme.etiologies}
        onChange={(etiologies) => update({ etiologies })}
        error={err(`formes[${i}].etiologies`)}
        placeholder="- *Plasmodium falciparum*"
        hint={AIDE_PUCES}
      />
      <SyndromesForme
        valeur={forme.syndromes || []}
        options={options.syndromes || []}
        onChange={(syndromes) => update({ syndromes })}
        erreur={(forme.syndromes || []).map((_, j) => err(`formes[${i}].syndromes[${j}]`)).find(Boolean)}
      />
      <fieldset className="sous-liste">
        <legend>Examens de confirmation</legend>
        {examens.map((e, j) => (
          <div key={j} className="sous-liste-item">
            <SelectField
              label={`Examen ${j + 1}`}
              value={e.examen_slug}
              onChange={(examen_slug) => setExamen(j, { examen_slug })}
              options={examensOptions}
              emptyLabel="— Choisir —"
              error={err(`formes[${i}].examens[${j}].examen_slug`)}
              required
            />
            <TextField
              label="Ce qu’il montre dans cette forme"
              value={e.interpretation}
              onChange={(interpretation) => setExamen(j, { interpretation })}
              placeholder="ex. LCR normal : élimine une méningite"
            />
            <button
              type="button"
              className="btn btn-danger btn-small"
              onClick={() => update({ examens: examens.filter((_, k) => k !== j) })}
              aria-label={`Retirer l’examen ${j + 1}`}
            >
              Retirer
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary btn-small"
          onClick={() => update({ examens: [...examens, { examen_slug: null, interpretation: '' }] })}
        >
          + Ajouter un examen
        </button>
      </fieldset>
    </>
  );
}

const TEXTES_FICHE = [
  ['definition', 'Définition', 4],
  ['physiopathologie', 'Physiopathologie', 5],
  ['diagnostic', 'Diagnostic clinique', 6],
  ['etiologies', 'Étiologies', 5],
  ['therapeutique', 'Notes thérapeutiques complémentaires', 3],
  ['evolution', 'Évolution et pronostic', 4],
];

export function AdminPathologiePage() {
  return (
    <EditorGuard>
      <Reloadable load={(api, id) => api.adminPathologie(id)} Editor={PathologieEditor} />
    </EditorGuard>
  );
}

/** Charge l'entité et remonte l'éditeur après chaque enregistrement (historique à jour). */
function Reloadable({ load, Editor }) {
  const { id } = useParams();
  const { api } = useServices();
  const [version, setVersion] = useState(0);
  const state = useAsync(() => load(api, id), [api, id, version]);
  return (
    <AsyncView state={state}>
      {(data) => <Editor key={version} id={id} initial={data} onSaved={() => setVersion((v) => v + 1)} />}
    </AsyncView>
  );
}

function PathologieEditor({ id, initial, onSaved }) {
  const { api } = useServices();
  const { options, historique, ...depart } = initial;
  const [form, setForm] = useState(depart);
  const [dirty, setDirty] = useState(false);
  const [revalidation, setRevalidation] = useState(false);
  const [save, run] = useSave((payload) => api.adminSavePathologie(id, payload));
  useUnsavedWarning(dirty);
  const err = (k) => save.errors[k];

  // Toute modification d'une fiche validée la repasse « à valider »
  const set = (patch) => {
    const repasse = !('statut' in patch) && form.statut === 'valide';
    if (repasse) setRevalidation(true);
    setForm((f) => ({ ...f, ...patch, ...(repasse ? { statut: 'a_valider' } : {}) }));
    setDirty(true);
  };

  const fichesOptions = useMemo(() => options.pathologies.map((p) => [p.slug, p.nom]), [options]);
  const examensOptions = useMemo(
    () => options.examens.map((e) => [e.slug, `${TYPES_EXAMEN[e.type]} — ${e.nom}`]),
    [options],
  );

  const onSave = async () => {
    const {
      id: _id,
      slug: _slug,
      valide_le: _v,
      valide_par: _p,
      updated_at: _u,
      revision_le: _r,
      a_revoir: _ar,
      ...payload
    } = form;
    const res = await run(payload);
    if (res) {
      setDirty(false);
      if (!res.inchange) onSaved();
    }
  };

  return (
    <article className="admin-editor">
      <Breadcrumb items={[{ label: 'Administration', to: '/admin' }, { label: form.nom || 'Fiche' }]} />
      <header className="page-header">
        <h1>{initial.nom}</h1>
        <p className="lead">
          <Link to={`/pathologies/${initial.slug}`}>Voir la fiche publique</Link>
          {initial.statut === 'valide' && initial.valide_par && (
            <span className="muted">
              {' '}
              · validée par {initial.valide_par} le {formatDateTime(initial.valide_le)}
            </span>
          )}
          {initial.statut === 'valide' && initial.revision_le && (
            <span className={initial.a_revoir ? 'tag tag-warn' : 'muted'}>
              {' '}
              · {initial.a_revoir ? 'révision en retard depuis le' : 'à revoir le'}{' '}
              {new Date(`${initial.revision_le}T00:00:00`).toLocaleDateString('fr-FR')}
            </span>
          )}
        </p>
      </header>

      <section className="card">
        <h2>Statut et identification</h2>
        <div className="form-grid">
          <SelectField
            label="Statut de validation"
            value={form.statut}
            onChange={(statut) => {
              set({ statut });
              setRevalidation(false);
            }}
            options={entries(STATUTS_FICHE)}
            error={err('statut')}
            required
          />
          <TextField
            label="Nom"
            value={form.nom}
            onChange={(nom) => set({ nom })}
            error={err('nom')}
            required
          />
        </div>
        {revalidation && (
          <p className="validation validation-pending">
            La fiche repassera « À valider ». Choisissez « Validée » pour la valider de nouveau sous votre
            nom.
          </p>
        )}
        <TextField
          label="Résumé"
          value={form.resume}
          onChange={(resume) => set({ resume })}
          error={err('resume')}
          maxLength={500}
        />
      </section>

      <section className="card">
        <h2>Textes de la fiche</h2>
        <p className="hint">
          Mise en forme : « ## Titre », « - puce », « **gras** », ligne vide = nouveau paragraphe.
        </p>
        {TEXTES_FICHE.map(([k, label, rows]) => (
          <TextArea
            key={k}
            label={label}
            rows={rows}
            value={form[k]}
            onChange={(v) => set({ [k]: v })}
            error={err(k)}
          />
        ))}
      </section>

      <section className="card">
        <h2>Formes cliniques et sémiologie</h2>
        <p className="hint">
          Commencez par la forme commune. Chaque forme a sa sémiologie systématisée, ses syndromes, ses
          examens de confirmation et ses étiologies.
        </p>
        <ListEditor
          title="Formes cliniques"
          items={form.formes || []}
          onChange={(formes) => set({ formes })}
          newItem={() => ({
            nom: '',
            type: (form.formes || []).length ? 'gravite' : 'commune',
            syndromes: [],
            examens: [],
          })}
          itemLabel={(fo) => fo.nom && `${fo.nom} — ${TYPES_FORME[fo.type] || ''}`}
          addLabel="Ajouter une forme"
          renderItem={(fo, update, i) => (
            <FormeEditor
              forme={fo}
              update={update}
              i={i}
              err={err}
              options={options}
              examensOptions={examensOptions}
            />
          )}
        />
      </section>

      {(form.urgences || []).length > 0 && (
        <section className="card">
          <h2>Urgences associées : signes d’alerte</h2>
          <p className="hint">
            Affichés en tête de la fiche sous la forme « signes (urgence) ». Courts et concrets : ce qui doit
            faire agir.
          </p>
          {form.urgences.map((u, i) => (
            <TextField
              key={u.urgence_slug}
              label={u.nom}
              value={u.signes_alerte}
              onChange={(signes_alerte) =>
                set({ urgences: form.urgences.map((x, j) => (j === i ? { ...x, signes_alerte } : x)) })
              }
              error={err(`urgences[${i}].signes_alerte`)}
              placeholder="ex. Convulsions, troubles de la conscience, détresse respiratoire"
              maxLength={500}
            />
          ))}
        </section>
      )}

      <section className="card">
        <h2>Diagnostic : bilan paraclinique</h2>
        <ListEditor
          title="Examens"
          items={form.examens}
          onChange={(examens) => set({ examens })}
          newItem={() => ({ examen_slug: null, categorie: 'premiere_intention', interpretation: '' })}
          itemLabel={(e) => options.examens.find((x) => x.slug === e.examen_slug)?.nom}
          addLabel="Ajouter un examen"
          renderItem={(e, update, i) => (
            <>
              <div className="form-grid">
                <SelectField
                  label="Examen"
                  value={e.examen_slug}
                  onChange={(examen_slug) => update({ examen_slug })}
                  options={examensOptions}
                  emptyLabel="— Choisir —"
                  error={err(`examens[${i}].examen_slug`)}
                  required
                />
                <SelectField
                  label="Catégorie"
                  value={e.categorie}
                  onChange={(categorie) => update({ categorie })}
                  options={entries(CATEGORIES_EXAMEN)}
                  error={err(`examens[${i}].categorie`)}
                  required
                />
              </div>
              <TextArea
                label="Interprétation dans cette pathologie"
                rows={2}
                markdown={false}
                value={e.interpretation}
                onChange={(interpretation) => update({ interpretation })}
                error={err(`examens[${i}].interpretation`)}
              />
            </>
          )}
        />
        <ListEditor
          title="Diagnostics différentiels"
          items={form.differentiels}
          onChange={(differentiels) => set({ differentiels })}
          newItem={() => ({ fiche_slug: null, nom: '', elements_distinctifs: '' })}
          itemLabel={(d) =>
            d.fiche_slug ? options.pathologies.find((p) => p.slug === d.fiche_slug)?.nom : d.nom
          }
          addLabel="Ajouter un différentiel"
          renderItem={(d, update, i) => (
            <>
              <div className="form-grid">
                <SelectField
                  label="Fiche liée"
                  value={d.fiche_slug}
                  onChange={(fiche_slug) => update({ fiche_slug })}
                  options={fichesOptions}
                  emptyLabel="— Aucune (libellé libre) —"
                  error={err(`differentiels[${i}].fiche_slug`)}
                />
                {!d.fiche_slug && (
                  <TextField
                    label="Libellé"
                    value={d.nom}
                    onChange={(nom) => update({ nom })}
                    error={err(`differentiels[${i}].nom`)}
                    required
                  />
                )}
              </div>
              <TextArea
                label="Éléments distinctifs"
                rows={2}
                markdown={false}
                value={d.elements_distinctifs}
                onChange={(elements_distinctifs) => update({ elements_distinctifs })}
              />
            </>
          )}
        />
      </section>

      <section className="card">
        <h2>Thérapeutique : principes de prise en charge</h2>
        <ListEditor
          title="Principes"
          items={form.principes}
          onChange={(principes) => set({ principes })}
          newItem={() => ({
            titre: '',
            objectif: '',
            details: '',
            grade_force: null,
            grade_detail: '',
            grade_source: '',
          })}
          itemLabel={(p) => p.titre}
          addLabel="Ajouter un principe"
          renderItem={(p, update, i) => (
            <>
              <TextField
                label="Titre"
                value={p.titre}
                onChange={(titre) => update({ titre })}
                error={err(`principes[${i}].titre`)}
                required
              />
              <TextField
                label="Objectif"
                value={p.objectif}
                onChange={(objectif) => update({ objectif })}
                error={err(`principes[${i}].objectif`)}
              />
              <TextArea
                label="Détails"
                rows={4}
                value={p.details}
                onChange={(details) => update({ details })}
                error={err(`principes[${i}].details`)}
              />
              <div className="form-grid form-grid-3">
                <SelectField
                  label="Force de la recommandation"
                  value={p.grade_force}
                  onChange={(grade_force) => update({ grade_force })}
                  options={entries(GRADES)}
                  emptyLabel="— Non renseignée —"
                  error={err(`principes[${i}].grade_force`)}
                />
                <TextField
                  label="Niveau de preuve / classe"
                  value={p.grade_detail}
                  onChange={(grade_detail) => update({ grade_detail })}
                  hint="ex. certitude des preuves élevée, classe I"
                  error={err(`principes[${i}].grade_detail`)}
                />
                <TextField
                  label="Source du grade"
                  value={p.grade_source}
                  onChange={(grade_source) => update({ grade_source })}
                  hint="ex. OMS 2023, ESC 2024"
                  error={err(`principes[${i}].grade_source`)}
                />
              </div>
            </>
          )}
        />
      </section>

      <section className="card">
        <h2>Complications : traitement et surveillance</h2>
        <ListEditor
          title="Complications"
          items={form.complications}
          onChange={(complications) => set({ complications })}
          newItem={() => ({
            nom: '',
            fiche_slug: null,
            description: '',
            traitement: '',
            surveillance_clinique: '',
            surveillance_paraclinique: '',
          })}
          itemLabel={(c) => c.nom}
          addLabel="Ajouter une complication"
          renderItem={(c, update, i) => (
            <>
              <div className="form-grid">
                <TextField
                  label="Nom"
                  value={c.nom}
                  onChange={(nom) => update({ nom })}
                  error={err(`complications[${i}].nom`)}
                  required
                />
                <SelectField
                  label="Fiche liée"
                  value={c.fiche_slug}
                  onChange={(fiche_slug) => update({ fiche_slug })}
                  options={fichesOptions}
                  emptyLabel="— Aucune —"
                  error={err(`complications[${i}].fiche_slug`)}
                />
              </div>
              <TextArea
                label="Description"
                rows={2}
                markdown={false}
                value={c.description}
                onChange={(description) => update({ description })}
              />
              <TextArea
                label="Traitement"
                rows={3}
                value={c.traitement}
                onChange={(traitement) => update({ traitement })}
              />
              <div className="form-grid">
                <TextArea
                  label="Surveillance clinique"
                  rows={2}
                  value={c.surveillance_clinique}
                  onChange={(surveillance_clinique) => update({ surveillance_clinique })}
                />
                <TextArea
                  label="Surveillance paraclinique"
                  rows={2}
                  value={c.surveillance_paraclinique}
                  onChange={(surveillance_paraclinique) => update({ surveillance_paraclinique })}
                />
              </div>
            </>
          )}
        />
      </section>

      <section className="card">
        <h2>Niveaux de soins</h2>
        {form.niveaux.map((n, i) => (
          <fieldset key={n.niveau} className="list-editor">
            <legend>{NIVEAUX_SOINS[n.niveau].label}</legend>
            <div className="form-grid">
              <TextArea
                label="Ce qu’on peut faire sur place"
                rows={4}
                value={n.prise_en_charge}
                onChange={(prise_en_charge) =>
                  set({ niveaux: form.niveaux.map((x, j) => (j === i ? { ...x, prise_en_charge } : x)) })
                }
                error={err(`niveaux[${i}].prise_en_charge`)}
              />
              <TextArea
                label="Quand transférer"
                rows={4}
                value={n.criteres_transfert}
                onChange={(criteres_transfert) =>
                  set({ niveaux: form.niveaux.map((x, j) => (j === i ? { ...x, criteres_transfert } : x)) })
                }
                error={err(`niveaux[${i}].criteres_transfert`)}
              />
            </div>
          </fieldset>
        ))}
      </section>

      <Historique
        items={historique}
        charger={api.adminVersion}
        onRestaurer={(etat) => {
          // Une version restaurée doit être relue : elle repasse « à valider »
          setForm((f) => ({ ...f, ...etat, statut: 'a_valider' }));
          setRevalidation(form.statut === 'valide');
          setDirty(true);
        }}
      />
      <SaveBar saving={save.saving} dirty={dirty} message={save.message} error={save.error} onSave={onSave}>
        <span className={`tag statut-${form.statut}`}>{STATUTS_FICHE[form.statut]}</span>
      </SaveBar>
    </article>
  );
}

// ================================================================== Molécule et posologies

export function AdminMoleculePage() {
  return (
    <EditorGuard>
      <Reloadable load={(api, id) => api.adminMolecule(id)} Editor={MoleculeEditor} />
    </EditorGuard>
  );
}

/** Case à cocher « relu et validé » d'un élément produit automatiquement (lot B). */
function CaseValidation({ id, aValider, onChange, label }) {
  return (
    <div className="field field-check">
      <input id={id} type="checkbox" checked={!aValider} onChange={(e) => onChange(!e.target.checked)} />
      <label htmlFor={id}>
        {label}
        {aValider && <span className="tag tag-warn"> À valider</span>}
      </label>
    </div>
  );
}

/**
 * Structure d'une posologie (lot B) : base de la dose, fréquence et durées proposées,
 * utilisées par le calcul automatique de la fiche de prescription.
 */
function StructurePosologie({ p, update, i, err }) {
  const durees = p.durees || [];
  const setDuree = (j, patch) => update({ durees: durees.map((d, k) => (k === j ? { ...d, ...patch } : d)) });
  const champ = (k) => `posologies[${i}].${k}`;
  return (
    <fieldset className="structure-posologie">
      <legend>Calcul automatique (fiche de prescription)</legend>
      <div className="form-grid form-grid-3">
        <SelectField
          label="La dose par kg et la dose maximale s’entendent"
          value={p.dose_base}
          onChange={(dose_base) => update({ dose_base })}
          options={entries(DOSE_BASES)}
          emptyLabel="— Non précisé —"
          error={err(champ('dose_base'))}
        />
        <SelectField
          label="Fréquence structurée"
          value={p.frequence_type}
          onChange={(frequence_type) => update({ frequence_type })}
          options={entries(FREQUENCE_TYPES)}
          emptyLabel="— Non structurée —"
          error={err(champ('frequence_type'))}
        />
        {p.frequence_type === 'prises_par_jour' && (
          <NumberField
            label="Prises par jour"
            name="prises_par_jour"
            min={1}
            max={24}
            value={p.prises_par_jour ?? ''}
            onChange={(v) => update({ prises_par_jour: v === '' ? null : v })}
            error={err(champ('prises_par_jour'))}
          />
        )}
        {p.frequence_type === 'intervalle' && (
          <NumberField
            label="Intervalle entre les prises"
            name="intervalle_heures"
            unit="h"
            min={0.25}
            max={168}
            value={p.intervalle_heures ?? ''}
            onChange={(v) => {
              const h = Number(String(v).replace(',', '.'));
              const prises = h > 0 && Number.isInteger(24 / h) ? 24 / h : null;
              update({ intervalle_heures: v === '' ? null : v, prises_par_jour: prises });
            }}
            error={err(champ('intervalle_heures'))}
          />
        )}
      </div>
      <div className="durees">
        <p className="field-label">Durées proposées au prescripteur</p>
        {err(champ('durees')) && <p className="field-error">{err(champ('durees'))}</p>}
        {durees.map((d, j) => (
          <div key={j} className="form-grid form-grid-4 duree-ligne">
            <NumberField
              label="De"
              name={`duree-min-${i}-${j}`}
              min={0.01}
              max={1000}
              value={d.min ?? ''}
              onChange={(v) => setDuree(j, { min: v === '' ? null : v })}
              error={err(`posologies[${i}].durees[${j}].min`)}
            />
            <NumberField
              label="À (facultatif)"
              name={`duree-max-${i}-${j}`}
              min={0.01}
              max={1000}
              value={d.max ?? ''}
              onChange={(v) => setDuree(j, { max: v === '' ? null : v })}
              error={err(`posologies[${i}].durees[${j}].max`)}
            />
            <SelectField
              label="Unité"
              value={d.unite}
              onChange={(unite) => setDuree(j, { unite })}
              options={entries(UNITES_DUREE)}
              error={err(`posologies[${i}].durees[${j}].unite`)}
              required
            />
            <TextField
              label="Contexte"
              value={d.contexte}
              onChange={(contexte) => setDuree(j, { contexte })}
              placeholder="ex. Forme non compliquée"
              maxLength={190}
            />
            <div className="field field-check">
              <input
                id={`duree-defaut-${i}-${j}`}
                type="radio"
                name={`duree-defaut-${i}`}
                checked={Boolean(d.defaut)}
                onChange={() => update({ durees: durees.map((x, k) => ({ ...x, defaut: k === j })) })}
              />
              <label htmlFor={`duree-defaut-${i}-${j}`}>Par défaut</label>
            </div>
            <button
              type="button"
              className="btn btn-ghost btn-small"
              onClick={() => update({ durees: durees.filter((_, k) => k !== j) })}
              aria-label={`Retirer la durée ${j + 1}`}
            >
              Retirer
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary btn-small"
          onClick={() =>
            update({
              durees: [
                ...durees,
                { min: null, max: null, unite: 'jours', contexte: '', defaut: !durees.length },
              ],
            })
          }
        >
          Ajouter une durée
        </button>
      </div>
      {(p.structure_a_valider || p.frequence_type || p.dose_base || durees.length > 0) && (
        <CaseValidation
          id={`structure-validee-${i}`}
          aValider={p.structure_a_valider}
          onChange={(structure_a_valider) => update({ structure_a_valider })}
          label="Structure relue et validée par un médecin"
        />
      )}
    </fieldset>
  );
}

/** Présentations standard de la molécule (lot B) : conversion de la dose en comprimés ou en mL. */
function PresentationsEditor({ items, onChange, err }) {
  return (
    <ListEditor
      title="Présentations"
      items={items}
      onChange={onChange}
      newItem={() => ({
        forme: 'comprime',
        voie: 'orale',
        quantite: null,
        unite: 'mg',
        par_quantite: 1,
        par_unite: 'comprime',
        secable: false,
        conditionnement_quantite: null,
        conditionnement_unite: '',
        libelle: '',
        source: 'Saisie manuelle',
        a_valider: false,
      })}
      itemLabel={(pr) =>
        pr.libelle ||
        [FORMES_PRESENTATION[pr.forme], pr.quantite && `${pr.quantite} ${pr.unite}`].filter(Boolean).join(' ')
      }
      addLabel="Ajouter une présentation"
      renderItem={(pr, update, i) => (
        <>
          <div className="form-grid form-grid-3">
            <SelectField
              label="Forme"
              value={pr.forme}
              onChange={(forme) => update({ forme })}
              options={entries(FORMES_PRESENTATION)}
              error={err(`presentations[${i}].forme`)}
              required
            />
            <TextField
              label="Voie"
              value={pr.voie}
              onChange={(voie) => update({ voie })}
              suggestions={SUGGESTIONS.voie}
              maxLength={60}
            />
            <TextField
              label="Libellé (affiché)"
              value={pr.libelle}
              onChange={(libelle) => update({ libelle })}
              placeholder="ex. Suspension buvable 125 mg/5 mL"
              maxLength={190}
            />
          </div>
          <div className="form-grid form-grid-4">
            <NumberField
              label="Quantité de principe actif"
              name={`pres-quantite-${i}`}
              min={0.001}
              value={pr.quantite ?? ''}
              onChange={(v) => update({ quantite: v === '' ? null : v })}
              error={err(`presentations[${i}].quantite`)}
              required
            />
            <TextField
              label="Unité"
              value={pr.unite}
              onChange={(unite) => update({ unite })}
              suggestions={SUGGESTIONS.unite}
              maxLength={20}
              error={err(`presentations[${i}].unite`)}
            />
            <NumberField
              label="Pour"
              name={`pres-par-${i}`}
              min={0.001}
              value={pr.par_quantite ?? ''}
              onChange={(v) => update({ par_quantite: v === '' ? null : v })}
              error={err(`presentations[${i}].par_quantite`)}
            />
            <SelectField
              label="Unité de prise"
              value={pr.par_unite}
              onChange={(par_unite) => update({ par_unite })}
              options={entries(PAR_UNITES)}
              error={err(`presentations[${i}].par_unite`)}
              required
            />
          </div>
          <div className="form-grid form-grid-3">
            <NumberField
              label="Conditionnement"
              name={`pres-cond-${i}`}
              min={0}
              value={pr.conditionnement_quantite ?? ''}
              onChange={(v) => update({ conditionnement_quantite: v === '' ? null : v })}
              hint="Quantité par boîte ou flacon"
            />
            <TextField
              label="Unité du conditionnement"
              value={pr.conditionnement_unite}
              onChange={(conditionnement_unite) => update({ conditionnement_unite })}
              placeholder="ex. comprimés, mL"
              maxLength={30}
            />
            <div className="field field-check">
              <input
                id={`pres-secable-${i}`}
                type="checkbox"
                checked={Boolean(pr.secable)}
                onChange={(e) => update({ secable: e.target.checked })}
              />
              <label htmlFor={`pres-secable-${i}`}>Comprimé sécable</label>
            </div>
          </div>
          {pr.source && <p className="hint">Source : {pr.source}</p>}
          <CaseValidation
            id={`pres-validee-${i}`}
            aValider={pr.a_valider}
            onChange={(a_valider) => update({ a_valider })}
            label="Présentation vérifiée"
          />
        </>
      )}
    />
  );
}

function MoleculeEditor({ id, initial, onSaved }) {
  const { api } = useServices();
  const { historique, ...depart } = initial;
  const [form, setForm] = useState(depart);
  const [dirty, setDirty] = useState(false);
  const [save, run] = useSave((payload) => api.adminSaveMolecule(id, payload));
  useUnsavedWarning(dirty);
  const err = (k) => save.errors[k];
  const set = (patch) => {
    setForm((f) => ({ ...f, ...patch }));
    setDirty(true);
  };

  const onSave = async () => {
    const { id: _id, dci: _dci, slug: _slug, fiche_source: _source, ...payload } = form;
    const res = await run(payload);
    if (res) {
      setDirty(false);
      if (!res.inchange) onSaved();
    }
  };

  return (
    <article className="admin-editor">
      <Breadcrumb items={[{ label: 'Administration', to: '/admin' }, { label: form.dci }]} />
      <header className="page-header">
        <h1>{form.dci}</h1>
        <p className="lead">
          <Link to={`/molecules/${form.slug}`}>Voir la fiche publique</Link>
        </p>
      </header>

      <section className="card">
        <h2>Posologies par population</h2>
        <p className="hint">
          « Dose par kg » est la dose <strong>par prise</strong> : elle active le calcul automatique selon le
          poids, plafonné par la « dose maximale par prise » (même unité).
        </p>
        <ListEditor
          title="Posologies"
          items={form.posologies}
          onChange={(posologies) => set({ posologies })}
          newItem={() => ({
            population: 'adulte',
            indication: '',
            voie: '',
            dose_texte: '',
            dose_par_kg: null,
            dose_max: null,
            unite: 'mg',
            frequence: '',
            duree: '',
            securite: null,
            remarque: '',
            dose_base: 'par_prise',
            frequence_type: null,
            prises_par_jour: null,
            intervalle_heures: null,
            durees: [],
            structure_a_valider: false,
          })}
          itemLabel={(p) =>
            [POPULATIONS[p.population], p.indication || p.dose_texte].filter(Boolean).join(' — ')
          }
          addLabel="Ajouter une posologie"
          renderItem={(p, update, i) => (
            <>
              <div className="form-grid form-grid-3">
                <SelectField
                  label="Population"
                  value={p.population}
                  onChange={(population) => update({ population })}
                  options={entries(POPULATIONS)}
                  error={err(`posologies[${i}].population`)}
                  required
                />
                <TextField
                  label="Indication"
                  value={p.indication}
                  onChange={(indication) => update({ indication })}
                  error={err(`posologies[${i}].indication`)}
                  placeholder="ex. Paludisme grave"
                  maxLength={190}
                />
                <TextField
                  label="Voie"
                  value={p.voie}
                  onChange={(voie) => update({ voie })}
                  error={err(`posologies[${i}].voie`)}
                  suggestions={SUGGESTIONS.voie}
                  placeholder="ex. IV"
                  maxLength={60}
                />
              </div>
              <TextField
                label="Posologie (texte affiché)"
                value={p.dose_texte}
                onChange={(dose_texte) => update({ dose_texte })}
                error={err(`posologies[${i}].dose_texte`)}
                placeholder="ex. 2,4 mg/kg à H0, H12, H24 puis toutes les 24 h"
                maxLength={400}
                required
              />
              <div className="form-grid form-grid-3">
                <NumberField
                  label="Dose par kg et par prise"
                  name="dose_par_kg"
                  unit={p.unite ? `${p.unite}/kg` : undefined}
                  min={0}
                  max={100000}
                  value={p.dose_par_kg ?? ''}
                  onChange={(v) => update({ dose_par_kg: v === '' ? null : v })}
                  error={err(`posologies[${i}].dose_par_kg`)}
                  hint="Laisser vide si la dose n’est pas calculée au poids"
                />
                <NumberField
                  label="Dose maximale par prise"
                  name="dose_max"
                  unit={p.unite || undefined}
                  min={0}
                  max={1000000}
                  value={p.dose_max ?? ''}
                  onChange={(v) => update({ dose_max: v === '' ? null : v })}
                  error={err(`posologies[${i}].dose_max`)}
                  hint="Plafond du calcul au poids"
                />
                <TextField
                  label="Unité"
                  value={p.unite}
                  onChange={(unite) => update({ unite })}
                  suggestions={SUGGESTIONS.unite}
                  placeholder="mg"
                  maxLength={20}
                  error={err(`posologies[${i}].unite`)}
                />
              </div>
              <div className="form-grid form-grid-3">
                <TextField
                  label="Fréquence"
                  value={p.frequence}
                  onChange={(frequence) => update({ frequence })}
                  error={err(`posologies[${i}].frequence`)}
                  suggestions={SUGGESTIONS.frequence}
                  placeholder="ex. Toutes les 8 h"
                  maxLength={160}
                />
                <TextField
                  label="Durée"
                  value={p.duree}
                  onChange={(duree) => update({ duree })}
                  error={err(`posologies[${i}].duree`)}
                  suggestions={SUGGESTIONS.duree}
                  placeholder="ex. 7 jours"
                  maxLength={160}
                />
                <SelectField
                  label="Sécurité"
                  value={p.securite}
                  onChange={(securite) => update({ securite })}
                  options={entries(SECURITES)}
                  emptyLabel="— Non précisée —"
                  error={err(`posologies[${i}].securite`)}
                />
              </div>
              <TextArea
                label="Remarque"
                rows={2}
                markdown={false}
                value={p.remarque}
                onChange={(remarque) => update({ remarque })}
              />
              <StructurePosologie p={p} update={update} i={i} err={err} />
            </>
          )}
        />
      </section>

      <section className="card">
        <h2>Présentations (par DCI)</h2>
        <p className="hint">
          Formes standard, indépendantes des marques : elles servent à convertir une dose en nombre de
          comprimés, en mL ou en ampoules sur l’ordonnance. Les présentations lues dans le catalogue sont « à
          valider ».
        </p>
        <PresentationsEditor
          items={form.presentations || []}
          onChange={(presentations) => set({ presentations })}
          err={err}
        />
      </section>

      <section className="card">
        <h2>Fiche pharmacologique</h2>
        {(initial.fiche_a_valider || initial.fiche_source) && (
          <div className="field field-check">
            <input
              id="fiche-validee"
              type="checkbox"
              checked={!form.fiche_a_valider}
              onChange={(e) => set({ fiche_a_valider: !e.target.checked })}
            />
            <label htmlFor="fiche-validee">
              Fiche relue et validée par un médecin
              {initial.fiche_source && <span className="row-sub">Importée : {initial.fiche_source}</span>}
            </label>
          </div>
        )}
        {FICHE_PHARMACO.map(([k, label]) => (
          <TextArea
            key={k}
            label={label}
            rows={3}
            value={form[k]}
            onChange={(v) => set({ [k]: v })}
            error={err(k)}
          />
        ))}
      </section>

      <ProduitsMoleculeAdmin moleculeId={id} dci={form.dci} />

      <Historique
        items={historique}
        charger={api.adminVersion}
        onRestaurer={(etat) => {
          setForm((f) => ({ ...f, ...etat }));
          setDirty(true);
        }}
      />
      <SaveBar saving={save.saving} dirty={dirty} message={save.message} error={save.error} onSave={onSave} />
    </article>
  );
}

// ================================================================== Produit

const TEXTES_PRODUIT = [
  ['forme', 'Forme', false],
  ['dosage', 'Dosage', false],
  ['presentation', 'Présentation', false],
  ['conservation', 'Conservation', false],
  ['composition_texte', 'Composition (texte du catalogue)', false],
  ['mecanisme', 'Mécanisme d’action', true],
  ['indication', 'Indications propres au produit', true],
  ['posologie', 'Posologie propre au produit', true],
  ['contre_indications', 'Contre-indications', true],
  ['effets_indesirables', 'Effets indésirables', true],
  ['interactions', 'Interactions', true],
  ['sources_text', 'Sources', true],
];

export function AdminMedicamentPage() {
  return (
    <EditorGuard>
      <Reloadable load={(api, id) => api.adminMedicament(id)} Editor={MedicamentEditor} />
    </EditorGuard>
  );
}

function MedicamentEditor({ id, initial, onSaved }) {
  const { api } = useServices();
  const { historique, options = { molecules: [] }, ...depart } = initial;
  const [form, setForm] = useState({ ...depart, molecules: depart.molecules || [] });
  const [dirty, setDirty] = useState(false);
  const [save, run] = useSave((payload) => api.adminSaveMedicament(id, payload));
  const moleculesOptions = useMemo(() => options.molecules.map((m) => [m.slug, m.dci]), [options]);
  useUnsavedWarning(dirty);
  const err = (k) => save.errors[k];
  const set = (patch) => {
    setForm((f) => ({ ...f, ...patch }));
    setDirty(true);
  };

  const onSave = async () => {
    const {
      id: _id,
      nom_commercial: _n,
      dci: _d,
      operateur: _o,
      catalogue_ref: _r,
      catalogue_classe: _c,
      catalogue_sous_classe: _sc,
      forme_categorie: _f,
      liaison: _l,
      ...payload
    } = form;
    const res = await run(payload);
    if (res) {
      setDirty(false);
      if (!res.inchange) onSaved();
    }
  };

  return (
    <article className="admin-editor">
      <Breadcrumb items={[{ label: 'Administration', to: '/admin' }, { label: form.nom_commercial }]} />
      <header className="page-header">
        <h1>{form.nom_commercial}</h1>
        <p className="lead">
          {form.dci} · {form.operateur} · <Link to={`/medicaments/${id}`}>Voir la fiche publique</Link>
        </p>
        {form.catalogue_ref && (
          <p className="hint">
            Importé du catalogue {form.operateur}
            {form.catalogue_classe ? ` — ${form.catalogue_classe}` : ''}
            {form.catalogue_sous_classe ? ` / ${form.catalogue_sous_classe}` : ''}.
          </p>
        )}
      </header>

      <section className="card">
        <h2>Molécules contenues</h2>
        <p className="hint">
          Le produit apparaît dans la galerie de chaque molécule liée, « seule » ou « en association » selon
          le nombre de principes actifs. Enregistrer ces liens les marque comme vérifiés.
        </p>
        {form.liaison && (
          <p>
            <span className={`tag liaison-${form.liaison}`}>{LIAISONS[form.liaison]}</span>
          </p>
        )}
        <ListEditor
          title="Molécules"
          items={form.molecules}
          onChange={(molecules) => set({ molecules })}
          newItem={() => ({ molecule_slug: null, dosage: '' })}
          itemLabel={(m) => options.molecules.find((x) => x.slug === m.molecule_slug)?.dci}
          addLabel="Ajouter une molécule"
          renderItem={(m, update, i) => (
            <div className="form-grid">
              <SelectField
                label="Molécule"
                value={m.molecule_slug}
                onChange={(molecule_slug) => update({ molecule_slug })}
                options={moleculesOptions}
                emptyLabel="— Choisir —"
                error={err(`molecules[${i}].molecule_slug`)}
                required
              />
              <TextField
                label="Dosage dans ce produit"
                value={m.dosage}
                onChange={(dosage) => update({ dosage })}
                placeholder="ex. 500 mg"
                maxLength={120}
              />
            </div>
          )}
        />
        <NumberField
          label="Nombre de principes actifs du produit"
          name="nb_composants"
          min={1}
          max={30}
          exemple={2}
          value={form.nb_composants ?? ''}
          onChange={(v) => set({ nb_composants: v === '' ? null : v })}
          error={err('nb_composants')}
          hint="Y compris ceux qui n’ont pas encore de fiche molécule (association si plus de 1)"
        />
        <p className="hint">
          Molécule absente de la liste ? Créez-la depuis l’onglet « Catalogue des firmes » de
          l’administration.
        </p>
      </section>

      <section className="card">
        <h2>Disponibilité en RDC</h2>
        <div className="field field-check">
          <input
            id="rdc"
            type="checkbox"
            checked={form.disponible_rdc}
            onChange={(e) => set({ disponible_rdc: e.target.checked })}
          />
          <label htmlFor="rdc">Disponible dans le circuit national (LNME, FEDECAME, programmes)</label>
        </div>
        <div className="form-grid">
          <NumberField
            label="Prix indicatif"
            name="prix_indicatif_cdf"
            unit="FC"
            min={0}
            max={10000000000}
            value={form.prix_indicatif_cdf ?? ''}
            onChange={(v) => set({ prix_indicatif_cdf: v === '' ? null : v })}
            error={err('prix_indicatif_cdf')}
            hint="Prix public constaté en francs congolais ; laisser vide si inconnu"
          />
          <TextField
            label="Photo (adresse https ou photo du catalogue)"
            value={form.photo_url}
            placeholder="https://… ou /medias/produits/…"
            inputMode="url"
            onChange={(photo_url) => set({ photo_url })}
            error={err('photo_url')}
          />
        </div>
        {form.photo_url && (
          <div className="admin-photo">
            <PhotoProduit produit={{ ...form, nom_commercial: form.nom_commercial }} />
          </div>
        )}
      </section>

      <section className="card">
        <h2>Informations du produit</h2>
        <p className="hint">
          Laisser vide pour reprendre la fiche de la molécule (produit à une seule molécule).
        </p>
        {TEXTES_PRODUIT.map(([k, label, long]) =>
          long ? (
            <TextArea
              key={k}
              label={label}
              rows={3}
              value={form[k]}
              onChange={(v) => set({ [k]: v })}
              error={err(k)}
            />
          ) : (
            <TextField
              key={k}
              label={label}
              value={form[k]}
              onChange={(v) => set({ [k]: v })}
              error={err(k)}
            />
          ),
        )}
      </section>

      <Historique
        items={historique}
        charger={api.adminVersion}
        onRestaurer={(etat) => {
          setForm((f) => ({ ...f, ...etat }));
          setDirty(true);
        }}
      />
      <SaveBar saving={save.saving} dirty={dirty} message={save.message} error={save.error} onSave={onSave} />
    </article>
  );
}

// ================================================================== Glossaire et syndromes

/** Onglet du tableau de bord : termes du glossaire et syndromes, chargés à la demande. */
function SemiologieAdmin({ filtre }) {
  const { api } = useServices();
  const state = useAsync(() => api.adminSemiologie(), [api]);
  return (
    <AsyncView state={state}>
      {(d) => (
        <div className="admin-semiologie">
          <section>
            <div className="section-title">
              <h2>Syndromes ({d.syndromes.length})</h2>
              <Link to="/admin/syndromes/nouveau" className="btn btn-secondary btn-small">
                + Nouveau syndrome
              </Link>
            </div>
            <div className="table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th scope="col">Syndrome</th>
                    <th scope="col">Formes liées</th>
                  </tr>
                </thead>
                <tbody>
                  {d.syndromes
                    .filter((sy) => filtre(sy.nom))
                    .map((sy) => (
                      <tr key={sy.id}>
                        <td>
                          <Link to={`/admin/syndromes/${sy.id}`}>{sy.nom}</Link>
                        </td>
                        <td>{sy.nb_formes}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <div className="section-title">
              <h2>Glossaire ({d.glossaire.length} termes)</h2>
              <Link to="/admin/glossaire/nouveau" className="btn btn-secondary btn-small">
                + Nouveau terme
              </Link>
            </div>
            <div className="table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th scope="col">Terme</th>
                    <th scope="col">Syndrome</th>
                  </tr>
                </thead>
                <tbody>
                  {d.glossaire
                    .filter((t) => filtre(`${t.terme} ${t.syndrome || ''}`))
                    .map((t) => (
                      <tr key={t.id}>
                        <td>
                          <Link to={`/admin/glossaire/${t.id}`}>{t.terme}</Link>
                        </td>
                        <td className="muted">{t.syndrome || '—'}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}
    </AsyncView>
  );
}

/** Liste de texte libre saisie à raison d'un élément par ligne. */
const versLignes = (liste) => (liste || []).join('\n');
const depuisLignes = (texte) =>
  String(texte || '')
    .split('\n')
    .map((x) => x.trim())
    .filter(Boolean);

export function AdminTermePage() {
  return (
    <EditorGuard>
      <Reloadable
        load={async (api, id) => {
          if (id !== 'nouveau') return api.adminTerme(id);
          const { syndromes } = await api.adminSemiologie();
          return {
            id: null,
            terme: '',
            definition: '',
            variantes: [],
            syndrome: null,
            options: { syndromes: syndromes.map(({ slug, nom }) => ({ slug, nom })) },
            historique: [],
          };
        }}
        Editor={TermeEditor}
      />
    </EditorGuard>
  );
}

function TermeEditor({ initial, onSaved }) {
  const { api } = useServices();
  const navigate = useNavigate();
  const { options, historique, id, ...depart } = initial;
  const [form, setForm] = useState({ ...depart, variantesTexte: versLignes(depart.variantes) });
  const [dirty, setDirty] = useState(false);
  const [save, run] = useSave((payload) => api.adminSaveTerme(id, payload));
  useUnsavedWarning(dirty);
  const set = (patch) => {
    setForm((f) => ({ ...f, ...patch }));
    setDirty(true);
  };

  const onSave = async () => {
    const res = await run({
      terme: form.terme,
      definition: form.definition,
      variantes: depuisLignes(form.variantesTexte),
      syndrome: form.syndrome,
    });
    if (!res) return;
    setDirty(false);
    if (!id) navigate(`/admin/glossaire/${res.id}`, { replace: true });
    else if (!res.inchange) onSaved();
  };

  return (
    <article className="admin-editor">
      <Breadcrumb
        items={[{ label: 'Administration', to: '/admin' }, { label: form.terme || 'Nouveau terme' }]}
      />
      <header className="page-header">
        <h1>{id ? initial.terme : 'Nouveau terme du glossaire'}</h1>
        {id && (
          <p className="lead">
            <Link to={`/glossaire#${initial.slug || ''}`}>Voir dans le glossaire</Link>
          </p>
        )}
      </header>
      <section className="card">
        <TextField
          label="Terme"
          value={form.terme}
          onChange={(terme) => set({ terme })}
          error={save.errors.terme}
          placeholder="ex. Signe de Murphy"
          maxLength={190}
          required
        />
        <TextArea
          label="Définition"
          rows={3}
          markdown={false}
          value={form.definition}
          onChange={(definition) => set({ definition })}
          error={save.errors.definition}
          placeholder="Une ou deux phrases : ce que l’on observe et ce que cela évoque."
          maxLength={2000}
        />
        <TextArea
          label="Autres formes reconnues dans le texte"
          rows={3}
          markdown={false}
          value={form.variantesTexte}
          onChange={(variantesTexte) => set({ variantesTexte })}
          error={save.errors.variantes}
          placeholder={'Une par ligne, ex. :\nMurphy\nsigne de Murphy positif'}
          hint="Pluriel, synonyme, abréviation. Une abréviation en MAJUSCULES n’est reconnue qu’en majuscules."
        />
        <SelectField
          label="Syndrome associé"
          value={form.syndrome}
          onChange={(syndrome) => set({ syndrome })}
          options={options.syndromes.map((sy) => [sy.slug, sy.nom])}
          emptyLabel="— Aucun —"
          error={save.errors.syndrome}
        />
      </section>
      <Historique
        items={historique}
        charger={api.adminVersion}
        onRestaurer={(etat) => {
          setForm((f) => ({ ...f, ...etat, variantesTexte: versLignes(etat.variantes) }));
          setDirty(true);
        }}
      />
      <SaveBar saving={save.saving} dirty={dirty} message={save.message} error={save.error} onSave={onSave} />
    </article>
  );
}

export function AdminSyndromePage() {
  return (
    <EditorGuard>
      <Reloadable
        load={async (api, id) => {
          if (id !== 'nouveau') return api.adminSyndrome(id);
          const symptomes = await api.symptomes();
          return {
            id: null,
            nom: '',
            definition: '',
            elements: '',
            symptomes: [],
            options: { symptomes: symptomes.map((sy) => sy.nom) },
            historique: [],
          };
        }}
        Editor={SyndromeEditor}
      />
    </EditorGuard>
  );
}

function SyndromeEditor({ initial, onSaved }) {
  const { api } = useServices();
  const navigate = useNavigate();
  const { options, historique, id, slug, ...depart } = initial;
  const [form, setForm] = useState(depart);
  const [dirty, setDirty] = useState(false);
  const [save, run] = useSave((payload) => api.adminSaveSyndrome(id, payload));
  useUnsavedWarning(dirty);
  const set = (patch) => {
    setForm((f) => ({ ...f, ...patch }));
    setDirty(true);
  };
  const basculer = (nom) =>
    set({
      symptomes: form.symptomes.includes(nom)
        ? form.symptomes.filter((x) => x !== nom)
        : [...form.symptomes, nom],
    });

  const onSave = async () => {
    const res = await run(form);
    if (!res) return;
    setDirty(false);
    if (!id) navigate(`/admin/syndromes/${res.id}`, { replace: true });
    else if (!res.inchange) onSaved();
  };

  return (
    <article className="admin-editor">
      <Breadcrumb
        items={[{ label: 'Administration', to: '/admin' }, { label: form.nom || 'Nouveau syndrome' }]}
      />
      <header className="page-header">
        <h1>{id ? initial.nom : 'Nouveau syndrome'}</h1>
        {slug && (
          <p className="lead">
            <Link to={`/syndromes/${slug}`}>Voir la page publique</Link>
          </p>
        )}
      </header>
      <section className="card">
        <TextField
          label="Nom"
          value={form.nom}
          onChange={(nom) => set({ nom })}
          error={save.errors.nom}
          placeholder="ex. Syndrome méningé"
          maxLength={190}
          required
        />
        <TextArea
          label="Définition"
          rows={2}
          markdown={false}
          value={form.definition}
          onChange={(definition) => set({ definition })}
          error={save.errors.definition}
          placeholder="Ce que le syndrome traduit, en une phrase."
          maxLength={2000}
        />
        <TextArea
          label="Éléments sémiologiques"
          rows={6}
          value={form.elements}
          onChange={(elements) => set({ elements })}
          error={save.errors.elements}
          placeholder={'- **Signes fonctionnels** : …\n- **Signes physiques** : …'}
          hint="Une ligne par élément, commençant par « - »."
        />
        <fieldset className="field">
          <legend>Symptômes qui composent ce syndrome</legend>
          <div className="checks">
            {options.symptomes.map((nom) => (
              <label key={nom} className="field-check">
                <input
                  type="checkbox"
                  checked={form.symptomes.includes(nom)}
                  onChange={() => basculer(nom)}
                />{' '}
                {nom}
              </label>
            ))}
          </div>
        </fieldset>
      </section>
      <Historique
        items={historique}
        charger={api.adminVersion}
        onRestaurer={(etat) => {
          setForm((f) => ({ ...f, ...etat }));
          setDirty(true);
        }}
      />
      <SaveBar saving={save.saving} dirty={dirty} message={save.message} error={save.error} onSave={onSave} />
    </article>
  );
}

// ================================================================== Catalogue des firmes

const LIAISONS = {
  aucune: 'À lier',
  partielle: 'Liaison partielle',
  auto: 'Liée automatiquement',
  verifiee: 'Liaison vérifiée',
  sans_objet: 'Sans principe actif (cosmétique, dispositif)',
};

/** Créer une molécule absente : les produits du catalogue qui la contiennent sont liés aussitôt. */
function CreerMolecule() {
  const { api } = useServices();
  const navigate = useNavigate();
  const [form, setForm] = useState({ dci: '', classe: '' });
  const [save, run] = useSave((payload) => api.adminCreerMolecule(payload));
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await run(form);
    if (res) navigate(`/admin/molecules/${res.id}`);
  };
  return (
    <form className="card" onSubmit={onSubmit} noValidate>
      <h2>Créer une molécule</h2>
      <p className="hint">
        Pour une DCI des catalogues absente de MedRef RDC. Les produits qui la contiennent sont liés
        automatiquement ; complétez ensuite sa fiche pharmacologique.
      </p>
      <div className="form-grid">
        <TextField
          label="DCI"
          value={form.dci}
          onChange={(dci) => setForm((f) => ({ ...f, dci }))}
          error={save.errors.dci}
          placeholder="ex. Clotrimazole"
          maxLength={190}
          required
        />
        <TextField
          label="Classe pharmacologique"
          value={form.classe}
          onChange={(classe) => setForm((f) => ({ ...f, classe }))}
          error={save.errors.classe}
          placeholder="ex. Antifongiques"
          maxLength={190}
        />
      </div>
      {save.error && (
        <p className="form-error" role="alert">
          {save.error}
        </p>
      )}
      <button type="submit" className="btn btn-primary" disabled={save.saving || !form.dci.trim()}>
        {save.saving ? 'Création…' : 'Créer et lier les produits'}
      </button>
    </form>
  );
}

/** Onglet « Catalogue des firmes » : état des liaisons produit → molécule. */
function CatalogueAdmin() {
  const { api } = useServices();
  const [filtres, setFiltres] = useState({ liaison: 'aucune', firme: '', q: '' });
  const [version, setVersion] = useState(0);
  const [message, setMessage] = useState(null);
  const state = useAsync(
    () => api.adminCatalogue(filtres),
    [api, filtres.liaison, filtres.firme, filtres.q, version],
  );
  const relier = async () => {
    setMessage(null);
    try {
      const r = await api.adminRelierCatalogue();
      setMessage(`${r.completes} produit(s) complété(s) sur ${r.examines} examiné(s).`);
      setVersion((v) => v + 1);
    } catch (err) {
      setMessage(err.message);
    }
  };
  return (
    <div className="admin-catalogue">
      <AsyncView state={state}>
        {(d) => (
          <>
            <ul className="stat-tiles" aria-label="Liaison des produits aux molécules">
              {Object.entries(LIAISONS).map(([k, label]) => (
                <li key={k} className={`stat-tile liaison-${k}`}>
                  <button
                    type="button"
                    className="stat-bouton"
                    aria-pressed={filtres.liaison === k}
                    onClick={() => setFiltres((f) => ({ ...f, liaison: f.liaison === k ? '' : k }))}
                  >
                    <span className="stat-value">{d.compteurs[k]}</span>
                    <span className="stat-label">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
            <form
              className="filter-bar"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Filtres du catalogue"
            >
              <div className="field">
                <label htmlFor="cat-firme">Firme</label>
                <select
                  id="cat-firme"
                  value={filtres.firme}
                  onChange={(e) => setFiltres((f) => ({ ...f, firme: e.target.value }))}
                >
                  <option value="">Toutes</option>
                  {d.firmes.map((f) => (
                    <option key={f.slug} value={f.slug}>
                      {f.nom} ({f.n})
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="cat-q">Rechercher (Entrée)</label>
                <input
                  id="cat-q"
                  type="search"
                  defaultValue={filtres.q}
                  placeholder="ex. clotrimazole, Shal’Artem"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const q = e.currentTarget.value.trim();
                      setFiltres((f) => ({ ...f, q }));
                    }
                  }}
                />
              </div>
              <button type="button" className="btn btn-secondary" onClick={relier}>
                Relancer le rapprochement automatique
              </button>
            </form>
            {message && (
              <p className="form-success" role="status">
                {message}
              </p>
            )}
            <p className="muted">
              {d.produits.length >= 300 ? 'Les 300 premiers produits' : `${d.produits.length} produit(s)`}
              {filtres.liaison ? ` — ${LIAISONS[filtres.liaison].toLowerCase()}` : ''}
            </p>
            <div className="table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th scope="col">Produit</th>
                    <th scope="col">DCI du catalogue</th>
                    <th scope="col">Molécules liées</th>
                    <th scope="col">Liaison</th>
                  </tr>
                </thead>
                <tbody>
                  {d.produits.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <div className="admin-produit">
                          <PhotoProduit produit={p} />
                          <span>
                            <Link to={`/admin/medicaments/${p.id}`}>{p.nom_commercial}</Link>
                            <span className="row-sub">
                              {p.operateur} · <LienProduit id={p.id}>fiche</LienProduit>
                            </span>
                          </span>
                        </div>
                      </td>
                      <td>{p.dci}</td>
                      <td>{p.molecules_liees || '—'}</td>
                      <td>
                        <span className={`tag liaison-${p.liaison}`}>{LIAISONS[p.liaison]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </AsyncView>
      <CreerMolecule />
    </div>
  );
}

/** Fiche molécule (admin) : produits liés et suggestions du catalogue à lier d'un clic. */
function ProduitsMoleculeAdmin({ moleculeId, dci }) {
  const { api } = useServices();
  const [version, setVersion] = useState(0);
  const [erreur, setErreur] = useState(null);
  const state = useAsync(() => api.adminProduitsMolecule(moleculeId), [api, moleculeId, version]);
  const agir = async (action, medicamentId) => {
    setErreur(null);
    try {
      await (action === 'lier'
        ? api.adminLierProduit(moleculeId, medicamentId)
        : api.adminDelierProduit(moleculeId, medicamentId));
      setVersion((v) => v + 1);
    } catch (err) {
      setErreur(err.message);
    }
  };
  const ligne = (p, action) => (
    <li key={p.id} className="admin-produit-ligne">
      <PhotoProduit produit={p} />
      <span className="admin-produit-texte">
        <Link to={`/admin/medicaments/${p.id}`}>{p.nom_commercial}</Link>
        <span className="row-sub">
          {[p.operateur, p.dci, p.origine === 'auto' ? 'lien automatique' : null].filter(Boolean).join(' · ')}
          {' · '}
          <LienProduit id={p.id}>fiche</LienProduit>
        </span>
      </span>
      <button
        type="button"
        className={`btn btn-small ${action === 'lier' ? 'btn-secondary' : 'btn-ghost'}`}
        onClick={() => agir(action, p.id)}
        aria-label={`${action === 'lier' ? 'Lier' : 'Délier'} ${p.nom_commercial} (${p.operateur})`}
      >
        {action === 'lier' ? 'Lier' : 'Délier'}
      </button>
    </li>
  );
  return (
    <section className="card">
      <h2>Produits des firmes</h2>
      <AsyncView state={state}>
        {({ lies, suggestions }) => (
          <>
            <h3>
              Liés à {dci} ({lies.length})
            </h3>
            {lies.length ? (
              <ul className="admin-produits">{lies.map((p) => ligne(p, 'delier'))}</ul>
            ) : (
              <p className="muted">Aucun produit lié.</p>
            )}
            <h3>Suggestions du catalogue ({suggestions.length})</h3>
            <p className="hint">
              Produits dont l’intitulé ou la composition cite « {dci} » mais qui ne lui sont pas liés.
            </p>
            {suggestions.length ? (
              <ul className="admin-produits">{suggestions.map((p) => ligne(p, 'lier'))}</ul>
            ) : (
              <p className="muted">Aucune suggestion.</p>
            )}
          </>
        )}
      </AsyncView>
      {erreur && (
        <p className="form-error" role="alert">
          {erreur}
        </p>
      )}
    </section>
  );
}
