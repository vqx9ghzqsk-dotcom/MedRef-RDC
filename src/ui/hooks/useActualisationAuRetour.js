import { useEffect, useRef } from 'react';
import { useServices } from '../context/services.jsx';

/**
 * Actualités rafraîchies quand l'appareil retrouve internet (événement « online ») : la page
 * recharge aussitôt ce que le serveur a déjà, lui demande de relever les sources officielles,
 * puis recharge encore une fois la relève terminée. Le serveur ne relance pas une relève récente.
 */
export function useActualisationAuRetour(recharger) {
  const { api } = useServices();
  const dernier = useRef(recharger);
  useEffect(() => {
    dernier.current = recharger;
  }, [recharger]);

  useEffect(() => {
    let actif = true;
    const auRetour = () => {
      dernier.current?.();
      if (typeof api.actualiserActualites !== 'function') return;
      Promise.resolve()
        .then(() => api.actualiserActualites())
        .then((r) => {
          if (actif && r?.statut !== 'recente') dernier.current?.();
        })
        .catch(() => {});
    };
    window.addEventListener('online', auRetour);
    return () => {
      actif = false;
      window.removeEventListener('online', auRetour);
    };
  }, [api]);
}
