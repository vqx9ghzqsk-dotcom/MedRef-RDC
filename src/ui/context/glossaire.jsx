import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useServices } from './services.jsx';
import { construireIndex } from '../../core/glossaire.js';

const GlossaireContext = createContext(null);

/**
 * Charge le glossaire une seule fois (en arrière-plan) pour toute l'application.
 * Sans réseau ou en cas d'erreur, les textes s'affichent simplement sans infobulles.
 */
export function GlossaireProvider({ children }) {
  const { api } = useServices();
  const [termes, setTermes] = useState(null);

  useEffect(() => {
    if (typeof api.glossaire !== 'function') return undefined;
    let actif = true;
    api
      .glossaire()
      .then((liste) => actif && setTermes(liste))
      .catch(() => {});
    return () => {
      actif = false;
    };
  }, [api]);

  const index = useMemo(() => construireIndex(termes), [termes]);
  return <GlossaireContext.Provider value={index}>{children}</GlossaireContext.Provider>;
}

/** Index de repérage des termes, ou null s'il n'est pas (encore) disponible. */
export function useGlossaire() {
  return useContext(GlossaireContext);
}
