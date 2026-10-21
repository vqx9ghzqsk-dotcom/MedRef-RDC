-- Photo d'illustration des actualités de la veille : l'image que la source elle-même associe à
-- l'article (balise og:image, image du flux). Elle reste hébergée chez la source et s'affiche avec
-- son crédit et le lien vers l'article ; aucune copie n'est conservée par MedRef RDC.

ALTER TABLE actualites
  ADD COLUMN image_url VARCHAR(500) NULL AFTER source_url,
  -- 1 = page de l'article déjà consultée (avec ou sans photo trouvée) : pas de nouvel essai
  ADD COLUMN image_cherchee TINYINT(1) NOT NULL DEFAULT 0 AFTER image_url;
