# Signes discriminants des fiches (à valider)

Source : backend/db/seed-data/signes-fiches.js (`npm run diagnostic:signes` régénère cette page).
Ces signes complètent les fiches dans l’aide au diagnostic seulement :

- **Signes ajoutés** : manquaient au tableau de la fiche.
- **Signes clés** : presque constants ; notés absents, ils affaiblissent nettement l’hypothèse (× 0,6).
- **Signes d’exclusion** : présents, ils rendent l’hypothèse peu probable (× 0,7).
- **Terrain requis** : sans lui, l’hypothèse recule (× 0,85).

Dites-moi simplement ce qu’il faut corriger (fiche, signe, fréquence).

**54 fiches** traitées.

## Accident vasculaire cérébral (AVC)

- Tableau actuel : Déficit moteur (très fréquent), Troubles du langage (fréquent), Céphalées (fréquent), Troubles de la conscience (occasionnel), Troubles visuels (occasionnel), Vomissements (occasionnel), Convulsions (rare)
- Signes ajoutés : Paralysie faciale (fréquent), Aphasie (fréquent), Dysarthrie (fréquent)
- Signes clés : Déficit moteur
- Signes d’exclusion : Fièvre

## Anémie de l’enfant

- Tableau actuel : Pâleur (très fréquent), Asthénie (fréquent), Dyspnée (occasionnel), Splénomégalie (occasionnel), Fièvre (fréquent), Ictère (occasionnel)
- Signes ajoutés : Tachypnée (occasionnel), Anorexie (occasionnel), Œdèmes (rare)
- Signes clés : Pâleur

## Anémie de la grossesse

- Tableau actuel : Pâleur (très fréquent), Asthénie (très fréquent), Dyspnée (fréquent), Palpitations (fréquent)
- Signes ajoutés : Vertiges (fréquent), Céphalées (occasionnel)
- Signes clés : Pâleur

## Anémie ferriprive

- Tableau actuel : Pâleur (très fréquent), Asthénie (très fréquent), Dyspnée (fréquent), Palpitations (fréquent), Céphalées (occasionnel), Syncope (rare)
- Signes ajoutés : Vertiges (fréquent), Troubles du cycle menstruel (occasionnel)
- Signes clés : Pâleur

## Angine et pharyngite de l’enfant

- Tableau actuel : Mal de gorge (très fréquent), Fièvre (très fréquent), Dysphagie (fréquent), Adénopathies (fréquent), Céphalées (occasionnel)
- Signes ajoutés : Odynophagie (fréquent), Vomissements (occasionnel), Douleur abdominale (occasionnel)
- Signes clés : Mal de gorge
- Signes d’exclusion : Stridor

## Asthme de l’enfant

- Tableau actuel : Sibilants (très fréquent), Toux (très fréquent), Dyspnée (très fréquent), Troubles du sommeil (fréquent), Tachypnée (fréquent)
- Signes ajoutés : Toux quinteuse (occasionnel)
- Signes clés : Sibilants

## AVC du sujet jeune (drépanocytose, VIH)

- Tableau actuel : Déficit moteur (très fréquent), Aphasie (fréquent), Céphalées (fréquent), Convulsions (occasionnel), Troubles de la conscience (occasionnel), Paralysie faciale (fréquent)
- Terrain ou contexte requis (l’un des) : Drépanocytose, Infection à VIH, Cardiopathie connue, Usage de drogues

## AVC hémorragique

- Tableau actuel : Déficit moteur (très fréquent), Céphalées (fréquent), Vomissements (fréquent), Troubles de la conscience (fréquent), Troubles du langage (fréquent), Convulsions (occasionnel)
- Signes ajoutés : Paralysie faciale (fréquent), Aphasie (fréquent), Dysarthrie (occasionnel)
- Signes clés : Déficit moteur
- Signes d’exclusion : Fièvre

## AVC ischémique

- Tableau actuel : Déficit moteur (très fréquent), Troubles du langage (fréquent), Troubles sensitifs (fréquent), Troubles visuels (occasionnel), Vertiges (occasionnel), Troubles de la conscience (occasionnel), Céphalées (occasionnel)
- Signes ajoutés : Paralysie faciale (fréquent), Aphasie (fréquent), Dysarthrie (fréquent)
- Signes clés : Déficit moteur
- Signes d’exclusion : Fièvre

## Bronchiolite aiguë du nourrisson

- Tableau actuel : Toux (très fréquent), Tachypnée (très fréquent), Sibilants (très fréquent), Fièvre (fréquent), Refus de téter (fréquent), Geignement expiratoire (occasionnel), Cyanose (occasionnel)
- Signes ajoutés : Rhinorrhée (très fréquent), Obstruction nasale (fréquent), Dyspnée (très fréquent)
- Signes clés : Sibilants, Toux

## Carie dentaire

- Tableau actuel : Douleur dentaire (très fréquent), Haleine fétide (occasionnel), Œdème du visage (occasionnel)
- Signes clés : Douleur dentaire

## Céphalée de tension

- Tableau actuel : Céphalées (très fréquent), Troubles du sommeil (occasionnel)
- Signes ajoutés : Anxiété (fréquent), Douleur rachidienne (occasionnel)
- Signes clés : Céphalées
- Signes d’exclusion : Fièvre, Vomissements, Raideur de nuque, Déficit moteur, Convulsions, Troubles de la conscience

## Coïnfection tuberculose-VIH

- Tableau actuel : Toux (très fréquent), Fièvre (très fréquent), Perte de poids (très fréquent), Sueurs nocturnes (fréquent), Adénopathies (fréquent), Dyspnée (occasionnel)
- Terrain ou contexte requis (l’un des) : Infection à VIH, Corticoïdes au long cours, chimiothérapie

## Conjonctivite de l’enfant

- Tableau actuel : Yeux rouges (très fréquent), Sécrétions oculaires (très fréquent), Prurit (occasionnel), Troubles visuels (rare)
- Signes ajoutés : Larmoiement (fréquent)
- Signes clés : Yeux rouges
- Signes d’exclusion : Troubles visuels

## Conjonctivites de l’adulte

- Tableau actuel : Yeux rouges (très fréquent), Sécrétions oculaires (très fréquent), Prurit (fréquent), Photophobie (occasionnel)
- Signes ajoutés : Larmoiement (fréquent)
- Signes clés : Yeux rouges
- Signes d’exclusion : Troubles visuels, Douleur oculaire

## Dermatophyties et pityriasis versicolor

- Tableau actuel : Prurit (fréquent), Éruption cutanée (très fréquent), Taches cutanées hypopigmentées (fréquent)
- Signes ajoutés : Plaques érythémato-squameuses (très fréquent)

## Diarrhée aiguë et déshydratation de l'enfant

- Tableau actuel : Diarrhée (très fréquent), Vomissements (fréquent), Fièvre (fréquent), Anorexie (occasionnel), Oligurie (occasionnel), Douleur abdominale (occasionnel), Troubles de la conscience (rare)
- Signes ajoutés : Pleurs excessifs (occasionnel)
- Signes clés : Diarrhée
- Signes d’exclusion : Diarrhée sanglante

## Dyspepsie et gastrite

- Tableau actuel : Épigastralgies (très fréquent), Vomissements (occasionnel), Anorexie (occasionnel), Distension abdominale (fréquent)
- Signes ajoutés : Nausées (fréquent), Pyrosis (fréquent)
- Signes clés : Épigastralgies
- Signes d’exclusion : Fièvre, Hypotension, Hématémèse, Méléna, Arrêt des matières et des gaz

## Fièvre typhoïde

- Tableau actuel : Fièvre (très fréquent), Céphalées (fréquent), Douleur abdominale (fréquent), Asthénie (fréquent), Diarrhée (occasionnel), Troubles de la conscience (occasionnel), Splénomégalie (occasionnel)
- Signes ajoutés : Constipation (fréquent), Anorexie (fréquent), Frissons (occasionnel), Hépatomégalie (occasionnel)
- Signes clés : Fièvre

## Fièvre typhoïde de l’enfant

- Tableau actuel : Fièvre (très fréquent), Douleur abdominale (fréquent), Céphalées (fréquent), Diarrhée (occasionnel), Vomissements (fréquent), Anorexie (fréquent)
- Signes ajoutés : Asthénie (fréquent), Constipation (occasionnel), Hépatomégalie (occasionnel), Splénomégalie (occasionnel)
- Signes clés : Fièvre

## Gale

- Tableau actuel : Prurit (très fréquent), Éruption cutanée (très fréquent), Troubles du sommeil (fréquent)
- Signes ajoutés : Papules cutanées (très fréquent)
- Signes clés : Prurit

## Gale de l’enfant

- Tableau actuel : Prurit (très fréquent), Éruption cutanée (très fréquent), Troubles du sommeil (fréquent)
- Signes ajoutés : Papules cutanées (très fréquent), Irritabilité (fréquent)
- Signes clés : Prurit

## Grippe

- Tableau actuel : Fièvre (très fréquent), Myalgies (très fréquent), Céphalées (très fréquent), Toux (très fréquent), Mal de gorge (fréquent), Rhinorrhée (fréquent), Asthénie (très fréquent), Dyspnée (occasionnel)
- Signes ajoutés : Frissons (fréquent)
- Signes clés : Fièvre

## Grossesse extra-utérine

- Tableau actuel : Douleur abdominale (très fréquent), Aménorrhée (très fréquent), Saignement vaginal (fréquent), Pâleur (occasionnel), Troubles de la conscience (rare)
- Signes ajoutés : Douleur pelvienne (très fréquent), Hypotension (occasionnel), Syncope (occasionnel), Douleur de l’épaule (occasionnel)
- Signes clés : Aménorrhée

## Hémorragie du post-partum

- Tableau actuel : Saignement vaginal (très fréquent), Pâleur (fréquent), Asthénie (fréquent), Troubles de la conscience (occasionnel), Oligurie (occasionnel)
- Signes ajoutés : Hypotension (fréquent), Syncope (occasionnel), Hémorragies (très fréquent)
- Signes clés : Saignement vaginal

## Hémorragie méningée

- Tableau actuel : Céphalées (très fréquent), Vomissements (très fréquent), Raideur de nuque (fréquent), Troubles de la conscience (fréquent), Photophobie (fréquent), Convulsions (occasionnel)
- Signes d’exclusion : Fièvre

## Hypertension artérielle

- Tableau actuel : Céphalées (fréquent), Troubles visuels (occasionnel), Dyspnée (occasionnel), Palpitations (occasionnel), Douleur thoracique (rare)
- Signes ajoutés : Vertiges (occasionnel), Acouphènes (occasionnel), Épistaxis (occasionnel)

## Infection à VIH

- Tableau actuel : Perte de poids (fréquent), Fièvre (fréquent), Diarrhée (fréquent), Toux (fréquent), Asthénie (fréquent), Sueurs nocturnes (occasionnel)
- Signes ajoutés : Adénopathies (fréquent), Ulcérations buccales (fréquent), Infections récidivantes (fréquent), Éruption cutanée (occasionnel)

## Infections génitales basses (vaginoses, candidoses, trichomonase)

- Tableau actuel : Leucorrhées (très fréquent), Prurit (fréquent), Brûlures mictionnelles (occasionnel), Douleur pelvienne (occasionnel)
- Signes ajoutés : Dyspareunie (fréquent)
- Signes clés : Leucorrhées

## Infections sexuellement transmissibles (approche syndromique)

- Tableau actuel : Écoulement urétral (fréquent), Leucorrhées (fréquent), Ulcération génitale (fréquent), Douleur abdominale (fréquent), Adénopathies (occasionnel), Fièvre (occasionnel)
- Signes ajoutés : Brûlures mictionnelles (fréquent), Dysurie (fréquent), Douleur pelvienne (fréquent), Végétations génitales (occasionnel)

## Infections sexuellement transmissibles de l’adolescent

- Tableau actuel : Écoulement urétral (fréquent), Leucorrhées (fréquent), Ulcération génitale (fréquent), Brûlures mictionnelles (fréquent), Douleur pelvienne (occasionnel)
- Signes ajoutés : Dysurie (fréquent)

## Infections urinaires de l’adulte (cystite, pyélonéphrite)

- Tableau actuel : Brûlures mictionnelles (très fréquent), Fièvre (fréquent), Douleur lombaire (fréquent), Frissons (fréquent), Hématurie (occasionnel), Douleur abdominale (occasionnel), Vomissements (occasionnel)
- Signes ajoutés : Dysurie (très fréquent), Douleur pelvienne (fréquent)

## Insuffisance cardiaque

- Tableau actuel : Dyspnée (très fréquent), Œdèmes (très fréquent), Asthénie (fréquent), Toux (occasionnel), Palpitations (occasionnel), Distension abdominale (occasionnel), Oligurie (occasionnel)
- Signes ajoutés : Palpitations (fréquent), Hépatomégalie (fréquent), Toux (fréquent), Tachypnée (fréquent), Prise de poids (occasionnel)
- Signes clés : Dyspnée

## Lombalgie et sciatique

- Tableau actuel : Douleur lombaire (très fréquent), Douleur rachidienne (très fréquent), Troubles sensitifs (fréquent), Troubles de la marche (occasionnel), Troubles sphinctériens (occasionnel)
- Signes ajoutés : Douleur radiculaire (fréquent)

## Malnutrition aiguë sévère

- Tableau actuel : Perte de poids (très fréquent), Œdèmes (fréquent), Anorexie (fréquent), Diarrhée (fréquent), Hypothermie (occasionnel), Fièvre (occasionnel), Vomissements (occasionnel)
- Signes ajoutés : Retard de croissance (fréquent), Irritabilité (fréquent), Apathie (fréquent), Lésions eczématiformes (occasionnel), Pâleur (fréquent)

## Méningite bactérienne aiguë

- Tableau actuel : Fièvre (très fréquent), Céphalées (très fréquent), Raideur de nuque (fréquent), Vomissements (fréquent), Troubles de la conscience (fréquent), Convulsions (occasionnel), Refus de téter (occasionnel)
- Signes ajoutés : Photophobie (fréquent), Frissons (fréquent), Purpura (occasionnel)
- Signes clés : Fièvre

## Mpox (variole simienne)

- Tableau actuel : Éruption cutanée (très fréquent), Fièvre (très fréquent), Adénopathies (très fréquent), Céphalées (fréquent), Asthénie (fréquent)
- Signes ajoutés : Éruption vésiculeuse (très fréquent), Ulcérations buccales (fréquent), Ulcération génitale (fréquent), Myalgies (fréquent), Mal de gorge (occasionnel)

## Neuropaludisme de l’adulte

- Tableau actuel : Fièvre (très fréquent), Troubles de la conscience (très fréquent), Convulsions (fréquent), Ictère (occasionnel), Oligurie (occasionnel), Céphalées (fréquent)
- Signes ajoutés : Vomissements (fréquent), Frissons (fréquent), Pâleur (fréquent)
- Signes clés : Fièvre, Troubles de la conscience

## Neutropénie fébrile

- Tableau actuel : Fièvre (très fréquent), Frissons (fréquent), Hypotension (occasionnel), Tachypnée (occasionnel)
- Terrain ou contexte requis (l’un des) : Cancer connu, Corticoïdes au long cours, chimiothérapie

## Otite moyenne aiguë

- Tableau actuel : Otalgie (très fréquent), Fièvre (très fréquent), Otorrhée (fréquent), Troubles du sommeil (fréquent), Vomissements (occasionnel)
- Signes ajoutés : Pleurs excessifs (fréquent), Irritabilité (fréquent), Rhinorrhée (fréquent), Hypoacousie (occasionnel)
- Signes clés : Otalgie

## Paludisme et grossesse

- Tableau actuel : Fièvre (très fréquent), Céphalées (fréquent), Vomissements (fréquent), Pâleur (fréquent), Troubles de la conscience (occasionnel)
- Signes ajoutés : Frissons (très fréquent), Asthénie (fréquent), Myalgies (fréquent), Contractions utérines (occasionnel), Convulsions (rare)
- Signes clés : Fièvre

## Paludisme grave

- Tableau actuel : Fièvre (très fréquent), Troubles de la conscience (fréquent), Convulsions (fréquent), Pâleur (fréquent), Vomissements (fréquent), Ictère (occasionnel), Dyspnée (occasionnel), Oligurie (occasionnel)
- Signes ajoutés : Frissons (fréquent), Hypotension (occasionnel), Urines foncées (occasionnel), Hémorragies (rare)
- Signes clés : Fièvre

## Paludisme grave de l’enfant

- Tableau actuel : Fièvre (très fréquent), Troubles de la conscience (fréquent), Convulsions (fréquent), Pâleur (fréquent), Tachypnée (fréquent), Vomissements (fréquent), Urines foncées (occasionnel), Ictère (occasionnel)
- Signes ajoutés : Refus de téter (fréquent), Dyspnée (fréquent), Somnolence (fréquent), Hypotension (occasionnel)
- Signes clés : Fièvre

## Paludisme simple

- Tableau actuel : Fièvre (très fréquent), Céphalées (fréquent), Vomissements (fréquent), Asthénie (fréquent), Anorexie (fréquent), Splénomégalie (occasionnel), Diarrhée (occasionnel)
- Signes ajoutés : Frissons (très fréquent), Sueurs (fréquent), Myalgies (fréquent), Arthralgies (occasionnel), Nausées (fréquent)
- Signes clés : Fièvre
- Signes d’exclusion : Troubles de la conscience, Convulsions

## Paludisme simple de l’enfant

- Tableau actuel : Fièvre (très fréquent), Vomissements (fréquent), Céphalées (fréquent), Anorexie (fréquent), Pâleur (occasionnel), Splénomégalie (occasionnel)
- Signes ajoutés : Frissons (fréquent), Asthénie (fréquent), Douleur abdominale (occasionnel), Diarrhée (occasionnel), Toux (occasionnel)
- Signes clés : Fièvre
- Signes d’exclusion : Troubles de la conscience, Convulsions

## Perforation d’ulcère gastroduodénal

- Tableau actuel : Douleur abdominale (très fréquent), Vomissements (fréquent), Fièvre (occasionnel), Hypotension (occasionnel)
- Signes ajoutés : Épigastralgies (très fréquent), Distension abdominale (fréquent), Arrêt des matières et des gaz (fréquent), Nausées (fréquent)
- Signes clés : Douleur abdominale

## Placenta prævia

- Tableau actuel : Saignement vaginal (très fréquent), Pâleur (fréquent), Hypotension (occasionnel)
- Signes d’exclusion : Douleur abdominale

## Pneumonie de l'enfant

- Tableau actuel : Toux (très fréquent), Tachypnée (très fréquent), Fièvre (très fréquent), Dyspnée (fréquent), Refus de téter (occasionnel), Convulsions (rare)
- Signes ajoutés : Geignement expiratoire (occasionnel), Douleur thoracique (occasionnel), Vomissements (occasionnel)
- Signes clés : Toux
- Signes d’exclusion : Stridor

## Pyodermites (impétigo, furoncles)

- Tableau actuel : Éruption cutanée (très fréquent), Prurit (fréquent), Fièvre (occasionnel), Adénopathies (occasionnel)
- Signes ajoutés : Écoulement purulent d’une plaie (fréquent), Comédons et pustules (fréquent)

## Rétention placentaire

- Tableau actuel : Saignement vaginal (fréquent), Hypotension (occasionnel)
- Signes ajoutés : Pâleur (fréquent), Douleur pelvienne (occasionnel)
- Signes clés : Saignement vaginal

## Saignements du premier trimestre (démarche)

- Tableau actuel : Saignement vaginal (très fréquent), Douleur pelvienne (fréquent), Aménorrhée (très fréquent), Hypotension (occasionnel), Syncope (occasionnel)
- Signes clés : Saignement vaginal

## Tuberculose de l’enfant

- Tableau actuel : Toux (très fréquent), Fièvre (fréquent), Perte de poids (très fréquent), Retard de croissance (fréquent), Sueurs nocturnes (fréquent), Adénopathies (occasionnel)
- Signes ajoutés : Asthénie (fréquent), Anorexie (fréquent), Hépatomégalie (occasionnel)
- Signes clés : Toux

## Tuberculose pharmacorésistante

- Tableau actuel : Toux (très fréquent), Fièvre (fréquent), Sueurs nocturnes (fréquent), Perte de poids (fréquent), Hémoptysie (occasionnel)
- Terrain ou contexte requis (l’un des) : Tuberculose (antécédent ou contage), Contact avec un tuberculeux

## Tuberculose pulmonaire

- Tableau actuel : Toux (très fréquent), Perte de poids (très fréquent), Fièvre (fréquent), Sueurs nocturnes (fréquent), Asthénie (fréquent), Anorexie (fréquent), Hémoptysie (occasionnel), Douleur thoracique (occasionnel)
- Signes ajoutés : Expectoration (fréquent), Dyspnée (occasionnel), Adénopathies (occasionnel)
- Signes clés : Toux
