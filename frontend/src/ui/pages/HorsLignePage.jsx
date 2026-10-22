import { useEffect, useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
import { useServices } from '../context/services.jsx';
import { useOnline } from '../hooks/useOnline.js';
import { compterEnCache, ecrireEtat, lireEtat, telechargerTout, viderCache } from '../../core/horsLigne.js';

const swActif = () => typeof navigator !== 'undefined' && Boolean(navigator.serviceWorker?.controller);

function formatDate(iso) {
  return iso ? new Date(iso).toLocaleString('fr-FR', { dateStyle: 'long', timeStyle: 'short' }) : null;
}

/** Télécharger toutes les fiches pour les consulter sans réseau (zones mal couvertes, gardes). */
export function HorsLignePage() {
  const { api, actualitesHorsLigne } = useServices();
  const online = useOnline();
  const [etat, setEtat] = useState(() => lireEtat());
  const [enCache, setEnCache] = useState(null);
  const [progres, setProgres] = useState(null);
  const [erreur, setErreur] = useState(null);
  const [actus, setActus] = useState(null);
  const [actusEnCours, setActusEnCours] = useState(false);
  const disponible = swActif();

  // Actualités gardées sur l'appareil (lot de nouveautés, expiration automatique)
  useEffect(() => {
    if (!actualitesHorsLigne) return undefined;
    let actif = true;
    actualitesHorsLigne
      .etat()
      .then((e) => actif && setActus(e))
      .catch(() => {});
    return () => {
      actif = false;
    };
  }, [actualitesHorsLigne, actusEnCours]);

  async function telechargerActus() {
    setActusEnCours(true);
    try {
      await actualitesHorsLigne.synchroniser(api);
    } catch (err) {
      setErreur(err.message || 'Téléchargement des actualités interrompu');
    } finally {
      setActusEnCours(false);
    }
  }

  async function viderActus() {
    await actualitesHorsLigne.vider();
    setActus(await actualitesHorsLigne.etat());
  }

  useEffect(() => {
    let actif = true;
    const compter = () => compterEnCache().then((n) => actif && setEnCache(n));
    compter();
    // Le service worker écrit en cache juste après chaque réponse : recompter un peu plus tard
    const t = setTimeout(compter, 2000);
    return () => {
      actif = false;
      clearTimeout(t);
    };
  }, [progres]);

  async function telecharger() {
    setErreur(null);
    try {
      const { urls } = await api.horsLigne();
      setProgres({ fait: 0, total: urls.length, echecs: 0 });
      const res = await telechargerTout(urls, {
        onProgres: (fait, total, echecs) => setProgres({ fait, total, echecs }),
      });
      const nouvelEtat = { date: new Date().toISOString(), total: res.total, echecs: res.echecs.length };
      ecrireEtat(nouvelEtat);
      setEtat(nouvelEtat);
      setProgres(null);
    } catch (err) {
      setProgres(null);
      setErreur(err.message || 'Téléchargement interrompu');
    }
  }

  async function vider() {
    await viderCache();
    setEtat(null);
    setEnCache(0);
  }

  const enCours = Boolean(progres);
  const pourcent = progres && progres.total ? Math.round((progres.fait / progres.total) * 100) : 0;

  return (
    <article className="narrow">
      <Breadcrumb items={[{ label: 'Utiliser sans connexion' }]} />
      <h1>Utiliser MedRef RDC sans connexion</h1>
      <p className="lead">
        Téléchargez toutes les fiches (pathologies, urgences, médicaments, examens, scores) pour les consulter
        là où le réseau est absent ou instable. Les pages déjà consultées sont aussi gardées automatiquement.
      </p>

      {!disponible ? (
        <p className="status status-empty">
          Le mode hors ligne est disponible dans la version installée de l’application (site en ligne ou
          version compilée). Il n’est pas actif en mode développement.
        </p>
      ) : (
        <section className="card hors-ligne">
          <dl className="hors-ligne-etat">
            <div>
              <dt>Réponses gardées sur cet appareil</dt>
              <dd>{enCache ?? '—'}</dd>
            </div>
            <div>
              <dt>Dernier téléchargement complet</dt>
              <dd>{formatDate(etat?.date) || 'jamais'}</dd>
            </div>
          </dl>
          {etat?.echecs > 0 && (
            <p className="hint">{etat.echecs} éléments n’ont pas pu être téléchargés : relancez plus tard.</p>
          )}

          {enCours && (
            <div className="progression" role="status" aria-live="polite">
              <progress max={progres.total} value={progres.fait} />
              <span>
                {progres.fait} / {progres.total} ({pourcent} %)
              </span>
            </div>
          )}
          {erreur && (
            <p className="status status-error" role="alert">
              {erreur}
            </p>
          )}

          <div className="hors-ligne-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={telecharger}
              disabled={!online || enCours}
            >
              {etat ? 'Mettre à jour les fiches' : 'Télécharger toutes les fiches'}
            </button>
            <button type="button" className="btn btn-ghost" onClick={vider} disabled={enCours || !enCache}>
              Supprimer les données hors ligne
            </button>
          </div>
          {!online && <p className="hint">Connectez-vous à internet pour télécharger ou mettre à jour.</p>}
        </section>
      )}

      {actualitesHorsLigne && (
        <section className="card hors-ligne" aria-labelledby="hl-actus">
          <h2 id="hl-actus">Actualités</h2>
          <p>
            Les nouveautés sont téléchargées automatiquement par lots (au démarrage, au retour d’internet et
            toutes les 3 heures), avec leurs photos. Chaque actualité reste lisible sans réseau{' '}
            {actus?.conservation_jours || 30} jours après sa publication, ou jusqu’à la fin d’une alerte, puis
            elle est effacée de l’appareil.
          </p>
          <dl className="hors-ligne-etat">
            <div>
              <dt>Actualités gardées</dt>
              <dd>
                {actus ? actus.actualites : '—'}
                {actus?.photos ? ` (${actus.photos} avec photo)` : ''}
              </dd>
            </div>
            <div>
              <dt>Dernier lot téléchargé</dt>
              <dd>{formatDate(actus?.telecharge_le) || 'jamais'}</dd>
            </div>
          </dl>
          <div className="hors-ligne-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={telechargerActus}
              disabled={!online || actusEnCours}
            >
              {actusEnCours ? 'Téléchargement…' : 'Télécharger les nouveautés'}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={viderActus}
              disabled={!actus?.actualites}
            >
              Effacer les actualités gardées
            </button>
          </div>
        </section>
      )}

      <h2>Bon à savoir</h2>
      <ul>
        <li>
          Hors connexion, chaque fiche affiche la dernière version téléchargée : mettez à jour régulièrement,
          en particulier après une correction ou une validation.
        </li>
        <li>
          Installez l’application sur l’écran d’accueil (menu du navigateur, « Installer » ou « Ajouter à
          l’écran d’accueil ») pour l’ouvrir même sans réseau.
        </li>
        <li>La recherche plein texte et la connexion au compte nécessitent le réseau.</li>
      </ul>
    </article>
  );
}
