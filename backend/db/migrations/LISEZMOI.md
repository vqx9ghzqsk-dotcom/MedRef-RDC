# Migrations du schéma

`db/schema.sql` est le schéma de départ (version 000) : **ne le modifiez plus**.
Toute évolution de la base (nouvelle table, colonne, index…) s'écrit ici, dans un
nouveau fichier numéroté :

```
001_ajout_date_revision.sql
002_index_recherche_examens.sql
```

- Numéro sur 3 chiffres, unique et croissant, puis une description en minuscules.
- Contenu : des instructions SQL (`ALTER TABLE …; CREATE TABLE …;`) qui **conservent
  les données** existantes.
- Une migration n'est appliquée qu'une fois (`npm run db:migrate`, après une
  sauvegarde automatique) et consignée dans la table `schema_migrations`.
- Ne modifiez jamais une migration déjà appliquée : son empreinte est vérifiée et
  toute différence bloque `db:migrate`. Corrigez par une nouvelle migration.
- Si la nouveauté doit aussi être chargée par `npm run db:reset`, mettez à jour
  `db/seed.js` et `seed-data/` en conséquence (ils s'exécutent après les migrations).
