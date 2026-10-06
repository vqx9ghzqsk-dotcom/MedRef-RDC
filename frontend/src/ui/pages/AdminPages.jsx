import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
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
import {
  CATEGORIES_EXAMEN,
  FICHE_PHARMACO,
  GRADES,
  NIVEAUX_SOINS,
  POPULATIONS,
  SECURITES,
  STATUTS_FICHE,
  TYPES_EXAMEN,
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
      setState({ saving: false, message: 'Modifications enregistrées.', error: null, errors: {} });
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
  ['historique', 'Historique'],
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
                {Object.entries(STATUTS_FICHE).map(([k, label]) => (
                  <li key={k} className={`stat-tile statut-${k}`}>
                    <span className="stat-value">{d.statuts[k] ?? 0}</span>
                    <span className="stat-label">{label}</span>
                  </li>
                ))}
              </ul>

              <div className="segmented" role="group" aria-label="Section">
                {ONGLETS_ADMIN.map(([k, label]) => (
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

              {onglet !== 'historique' && (
                <form className="filter-bar" onSubmit={(e) => e.preventDefault()} aria-label="Filtres">
                  <div className="field">
                    <label htmlFor="admin-q">Rechercher</label>
                    <input id="admin-q" type="search" value={q} onChange={(e) => setQ(e.target.value)} />
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
                      </select>
                    </div>
                  )}
                </form>
              )}

              {onglet === 'fiches' && (
                <div className="table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th scope="col">Fiche</th>
                        <th scope="col">Département</th>
                        <th scope="col">Statut</th>
                        <th scope="col">Validation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {d.pathologies
                        .filter((p) => (!statut || p.statut === statut) && filtre(`${p.nom} ${p.specialite}`))
                        .map((p) => (
                          <tr key={p.id}>
                            <td>
                              <Link to={`/admin/pathologies/${p.id}`}>{p.nom}</Link>
                              <span className="row-sub">{p.specialite}</span>
                            </td>
                            <td>{p.departement}</td>
                            <td>
                              <span className={`tag statut-${p.statut}`}>{STATUTS_FICHE[p.statut]}</span>
                            </td>
                            <td className="muted">
                              {p.statut === 'valide'
                                ? `${p.valide_par || '—'}, ${formatDateTime(p.valide_le)}`
                                : '—'}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
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
    const { id: _id, slug: _slug, valide_le: _v, valide_par: _p, updated_at: _u, ...payload } = form;
    if (await run(payload)) {
      setDirty(false);
      onSaved();
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

      <Historique items={historique} />
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
    const { id: _id, dci: _dci, slug: _slug, ...payload } = form;
    if (await run(payload)) {
      setDirty(false);
      onSaved();
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
                />
                <TextField
                  label="Voie"
                  value={p.voie}
                  onChange={(voie) => update({ voie })}
                  error={err(`posologies[${i}].voie`)}
                />
              </div>
              <TextField
                label="Posologie (texte affiché)"
                value={p.dose_texte}
                onChange={(dose_texte) => update({ dose_texte })}
                error={err(`posologies[${i}].dose_texte`)}
                required
              />
              <div className="form-grid form-grid-3">
                <TextField
                  label="Dose par kg et par prise"
                  inputMode="decimal"
                  value={p.dose_par_kg ?? ''}
                  onChange={(v) => update({ dose_par_kg: v === '' ? null : v })}
                  error={err(`posologies[${i}].dose_par_kg`)}
                />
                <TextField
                  label="Dose maximale par prise"
                  inputMode="decimal"
                  value={p.dose_max ?? ''}
                  onChange={(v) => update({ dose_max: v === '' ? null : v })}
                  error={err(`posologies[${i}].dose_max`)}
                />
                <TextField
                  label="Unité"
                  value={p.unite}
                  onChange={(unite) => update({ unite })}
                  hint="mg, UI, mL, g, µg, kcal"
                  error={err(`posologies[${i}].unite`)}
                />
              </div>
              <div className="form-grid form-grid-3">
                <TextField
                  label="Fréquence"
                  value={p.frequence}
                  onChange={(frequence) => update({ frequence })}
                  error={err(`posologies[${i}].frequence`)}
                />
                <TextField
                  label="Durée"
                  value={p.duree}
                  onChange={(duree) => update({ duree })}
                  error={err(`posologies[${i}].duree`)}
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
            </>
          )}
        />
      </section>

      <section className="card">
        <h2>Fiche pharmacologique</h2>
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

      <Historique items={historique} />
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
  const { historique, ...depart } = initial;
  const [form, setForm] = useState(depart);
  const [dirty, setDirty] = useState(false);
  const [save, run] = useSave((payload) => api.adminSaveMedicament(id, payload));
  useUnsavedWarning(dirty);
  const err = (k) => save.errors[k];
  const set = (patch) => {
    setForm((f) => ({ ...f, ...patch }));
    setDirty(true);
  };

  const onSave = async () => {
    const { id: _id, nom_commercial: _n, dci: _d, operateur: _o, ...payload } = form;
    if (await run(payload)) {
      setDirty(false);
      onSaved();
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
      </header>

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
          <TextField
            label="Prix indicatif (FC)"
            inputMode="decimal"
            value={form.prix_indicatif_cdf ?? ''}
            onChange={(v) => set({ prix_indicatif_cdf: v === '' ? null : v })}
            error={err('prix_indicatif_cdf')}
          />
          <TextField
            label="Photo (adresse https)"
            value={form.photo_url}
            onChange={(photo_url) => set({ photo_url })}
            error={err('photo_url')}
          />
        </div>
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

      <Historique items={historique} />
      <SaveBar saving={save.saving} dirty={dirty} message={save.message} error={save.error} onSave={onSave} />
    </article>
  );
}
