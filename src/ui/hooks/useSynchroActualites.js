import { useEffect } from 'react';
import { useServices } from '../context/services.jsx';

const INTERVALLE_MS = 3 * 60 * 60 * 1000;

/**
 * Garde sur l'appareil le lot de nouveautés des actualités (et leurs photos) pour la lecture hors
 * connexion : au démarrage de l'application, à chaque retour d'internet (après la relève des
 * sources) et toutes les 3 heures tant que l'application reste ouverte. Les actualités expirées
 * sont effacées à chaque fois. Sans réseau, rien n'est tenté.
 */
export function useSynchroActualites() {
  const { api, actualitesHorsLigne } = useServices();

  useEffect(() => {
    if (!actualitesHorsLigne || typeof api.lotActualites !== 'function') return undefined;
    let enCours = false;
    const enLigne = () => typeof navigator === 'undefined' || navigator.onLine !== false;
    const synchroniser = async ({ apresReleve = false } = {}) => {
      if (enCours || !enLigne()) return;
      enCours = true;
      try {
        if (apresReleve && typeof api.actualiserActualites === 'function') {
          await api.actualiserActualites().catch(() => {});
        }
        await actualitesHorsLigne.synchroniser(api);
      } catch {
        // réseau instable : nouvel essai au prochain retour d'internet ou dans 3 heures
      } finally {
        enCours = false;
      }
    };
    synchroniser();
    const auRetour = () => synchroniser({ apresReleve: true });
    window.addEventListener('online', auRetour);
    const minuterie = setInterval(synchroniser, INTERVALLE_MS);
    return () => {
      window.removeEventListener('online', auRetour);
      clearInterval(minuterie);
    };
  }, [api, actualitesHorsLigne]);
}
