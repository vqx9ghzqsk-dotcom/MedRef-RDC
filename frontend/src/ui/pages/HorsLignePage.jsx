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
  const { api } = useServices();
  const online = useOnline();
  const [etat, setEtat] = useState(() => lireEtat());
  const [enCache, setEnCache] = useState(null);
  const [progres, setProgres] = useState(null);
  const [erreur, setErreur] = useState(null);
  const disponible = swActif();

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
