-- Coquille du répertoire ACOREP : « Noortropyl » pour Nootropyl (piracétam, UCB). Seul le nom du
-- produit affiché est corrigé ; la ligne d'AMM garde l'orthographe du document officiel.

UPDATE medicaments
   SET nom_commercial = 'Nootropyl'
 WHERE nom_commercial = 'Noortropyl' AND dci LIKE '%piracétam%';
