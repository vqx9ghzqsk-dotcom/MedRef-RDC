# Banc de cas cliniques de l’aide au diagnostic

Généré le 29/10/2026 par `npm run diagnostic:banc` (cas à valider).

- **Banc de validation (cas indépendants, jamais utilisés pour régler le moteur)** : 40 cas · 1re position : 32 (80 %) · 3 premiers : 38 (95 %)
- Banc de réglage (cas ayant servi à corriger les fiches, donc optimiste) : 60 cas · 1re position : 57 (95 %) · 3 premiers : 60 (100 %)

## Validation (backend/db/seed-data/cas-validation.js)

| Cas | Rang du bon diagnostic | 3 premières hypothèses |
|---|---|---|
| Nourrisson fébrile qui tousse et respire vite | 1 | Pneumonie de l'enfant ; Toux et difficultés respiratoires de l’enfant (PCIME) ; Staphylococcie pleuropulmonaire |
| Enfant de 4 ans, diarrhée aqueuse et vomissements | 1 | Diarrhée aiguë et déshydratation de l'enfant ; Vomissements de l’enfant ; Choléra de l’enfant |
| Enfant de 3 ans, selles glaireuses et sanglantes | 1 | Shigellose (dysenterie bacillaire) ; Dysenterie de l’enfant ; Amibiase intestinale |
| Enfant de 2 ans, fièvre, éruption et yeux rouges | 1 | Rougeole ; Rubéole ; Impétigo |
| Enfant de 18 mois, œdèmes des pieds et cheveux clairsemés | 1 | Malnutrition aiguë sévère ; Kwashiorkor ; Malnutrition de l’enfant infecté par le VIH |
| Enfant de 5 ans, otalgie fébrile | 1 | Otite moyenne aiguë ; Mastoïdite ; Otite externe |
| Enfant de 7 ans, mal de gorge fébrile | 1 | Angine et pharyngite de l’enfant ; Abcès péri-amygdalien ; Diphtérie |
| Enfant de 2 ans, fièvre et convulsion brève, examen normal ensuite | 1 | Convulsions fébriles ; Encéphalites virales de l’enfant ; Épilepsie et VIH |
| Nourrisson de 3 mois, toux quinteuse et vomissements | 1 | Coqueluche ; Asthme de l’enfant ; Arrêt cardiorespiratoire de l’enfant |
| Enfant drépanocytaire, douleurs des membres | 2 | Infections de l’enfant drépanocytaire ; Crise vaso-occlusive de l’enfant drépanocytaire ; Drépanocytose |
| Nouveau-né de 5 jours, jaune | 1 | Ictère néonatal ; Prématurité ; Polyglobulie néonatale |
| Nouveau-né de 8 jours, ombilic rouge et fièvre | 1 | Omphalite ; Tétanos néonatal ; Paludisme grave de l’enfant |
| Enfant de 9 ans, prurit nocturne familial | 1 | Gale ; Gale de l’enfant ; Molluscum contagiosum |
| Adulte, toux productive et douleur thoracique fébriles | 1 | Pneumonie communautaire de l’adulte ; Syndrome thoracique aigu drépanocytaire ; Abcès pulmonaire |
| Femme, brûlures mictionnelles sans fièvre | 1 | Infections urinaires de l’adulte (cystite, pyélonéphrite) ; Infections urinaires récidivantes de la femme ; Urétrites et gonococcie de l’homme |
| Femme, leucorrhées malodorantes et prurit | 1 | Infections génitales basses (vaginoses, candidoses, trichomonase) ; Cervicites ; Fistules obstétricales vésico-vaginales et recto-vaginales |
| Adulte, fièvre prolongée, douleurs abdominales et constipation | 1 | Fièvre typhoïde ; Maladie à virus Ebola ; Grippe |
| Adulte, diarrhée aqueuse profuse en contexte d’épidémie | 1 | Choléra ; Maladie à virus Ebola ; Maladie à virus Marburg |
| Adulte VIH, dysphagie douloureuse | 3 | Corps étrangers ORL ; Abcès péri-amygdalien ; Candidose oropharyngée et œsophagienne |
| Adulte, vésicules en bande douloureuses sur le thorax | 1 | Zona ; Herpès cutanéo-muqueux ; Mpox (variole simienne) |
| Homme, ulcération génitale indolore | 1 | Syphilis ; Herpès cutanéo-muqueux ; Mpox (variole simienne) |
| Adulte, jambe rouge chaude et fièvre | absent | Abcès et phlegmons des parties molles ; Pyomyosite tropicale ; Infection du site opératoire |
| Adulte, ictère fébrile après quelques jours de malaise | 1 | Hépatites virales aiguës (A et E) ; Déficit en G6PD ; Hépatite D (delta) |
| Adulte, polyurie, soif et amaigrissement | 2 | Diabète de type 1 de l’adulte ; Diabète de type 2 ; État hyperosmolaire hyperglycémique |
| Hypertendu, céphalées et vision trouble | 3 | Hypertension intracrânienne ; Rétinopathies diabétique et hypertensive ; Urgences hypertensives |
| Adulte, crise de dyspnée sifflante | 1 | Asthme ; Asthme aigu grave ; Bronchopneumopathie chronique obstructive |
| Adulte, brûlure épigastrique chronique | 1 | Dyspepsie et gastrite ; Reflux gastro-œsophagien ; Perforation d’ulcère gastroduodénal |
| Adulte, douleur de la fosse iliaque droite et fièvre | 1 | Appendicite aiguë ; Hépatites virales aiguës (A et E) ; Infection à Helicobacter pylori |
| Adulte, arrêt des matières et ventre distendu | 1 | Occlusion intestinale aiguë ; Volvulus du sigmoïde ; Péritonite aiguë généralisée |
| Homme âgé, difficulté à uriner | 1 | Rétention aiguë d’urine ; Rétrécissement urétral ; Hypertrophie bénigne de la prostate |
| Adulte, humeur triste et perte d’intérêt depuis 2 mois | 1 | Dépression ; Troubles psychiques des maladies chroniques ; Deuil compliqué |
| Adulte, crise convulsive généralisée chez un épileptique connu | 1 | Épilepsie ; État de mal épileptique ; Première crise convulsive de l’adulte (démarche) |
| Adulte, morsure de serpent avec saignement des gencives | 2 | Gingivites et parodontites ; Envenimations par morsure de serpent ; Thrombose veineuse profonde |
| Adulte, gros genou chaud et très douloureux nocturne | 1 | Goutte ; Arthrite septique ; Polyarthrite rhumatoïde |
| Enceinte de 34 SA, céphalées et œdèmes avec hypertension | 1 | Pré-éclampsie sévère ; Éclampsie ; Hypertension gravidique |
| Enceinte de 30 SA, saignement indolore rouge vif | 1 | Placenta prævia ; Môle hydatiforme ; Saignements du premier trimestre (démarche) |
| Enceinte de 10 SA, vomissements incoercibles | 1 | Hyperemesis gravidarum ; Hépatite E et grossesse ; Sténose du pylore de l’adulte |
| Accouchée de 5 jours, sein rouge douloureux et fièvre | 2 | Difficultés de l’allaitement ; Mastite et abcès du sein ; Mastodynies |
| Femme, ménorragies et masse pelvienne | 1 | Fibromes utérins ; Sarcomes utérins ; Ménométrorragies |
| Enceinte de 33 SA, contractions régulières | 4 | Dystocie et disproportion fœto-pelvienne ; Souffrance fœtale aiguë ; Travail prolongé et partogramme |

## Réglage (backend/db/seed-data/cas-cliniques.js)

| Cas | Rang du bon diagnostic | 3 premières hypothèses |
|---|---|---|
| Enfant fébrile qui convulse, TDR positif | 1 | Paludisme grave ; Paludisme grave de l’enfant ; Coma de l’enfant |
| Enfant fébrile sans signe de gravité, TDR positif | 1 | Paludisme simple ; Paludisme simple de l’enfant ; Paludisme grave |
| Nourrisson fébrile, fontanelle bombée | 1 | Méningo-encéphalite de l’enfant ; Méningite bactérienne de l’enfant ; Convulsions fébriles |
| Enfant qui tousse et respire vite | 1 | Pneumonie de l'enfant ; Toux et difficultés respiratoires de l’enfant (PCIME) ; Pneumonies récidivantes de l’enfant |
| Nourrisson sifflant, premier épisode | 1 | Bronchiolite aiguë du nourrisson ; Asthme de l’enfant ; Asthme aigu grave |
| Diarrhée aiguë de l’enfant | 1 | Diarrhée aiguë et déshydratation de l'enfant ; Vomissements de l’enfant ; Choléra de l’enfant |
| Toux quinteuse du nourrisson | 1 | Coqueluche ; Asthme de l’enfant ; Arrêt cardiorespiratoire de l’enfant |
| Fièvre éruptive avec yeux rouges | 1 | Rougeole ; Rubéole ; Impétigo |
| Enfant œdématié et dénutri | 1 | Malnutrition aiguë sévère ; Kwashiorkor ; Malnutrition de l’enfant infecté par le VIH |
| Enfant pâle et essoufflé | 3 | Anémie ferriprive ; Anémie mégaloblastique ; Anémie de l’enfant |
| Enfant drépanocytaire avec douleurs osseuses | 1 | Ostéomyélite aiguë ; Crise vaso-occlusive de l’enfant drépanocytaire ; Infections de l’enfant drépanocytaire |
| Otite de l’enfant | 1 | Otite moyenne aiguë ; Mastoïdite ; Otite externe |
| Angine de l’enfant | 1 | Angine et pharyngite de l’enfant ; Diphtérie ; Scarlatine |
| Nouveau-né qui ne tète plus, hypothermie | 1 | Infection néonatale bactérienne (sepsis néonatal) ; Hypothermie néonatale ; Prématurité |
| Nouveau-né avec trismus | 1 | Tétanos néonatal ; Tétanos ; Abcès péri-amygdalien |
| Hématurie de l’enfant baigneur | 1 | Schistosomiase urogénitale ; Schistosomiase de l’enfant ; Hypertrophie bénigne de la prostate |
| Enfant asthmatique en crise | 1 | Asthme de l’enfant ; Asthme ; Asthme aigu grave |
| Convulsion fébrile brève | 1 | Convulsions fébriles ; Encéphalites virales de l’enfant ; Épilepsie et VIH |
| Enfant diabétique déshydraté | 1 | Acidocétose diabétique de l’enfant ; Diabète de type 1 de l’enfant ; Acidocétose diabétique |
| Enfant qui tousse depuis un mois et maigrit | 1 | Tuberculose de l’enfant ; Tuberculose pharmacorésistante ; Tuberculose pulmonaire |
| Adulte fébrile avec frissons, TDR positif | 1 | Paludisme simple ; Grippe ; Paludisme grave |
| Adulte comateux fébrile, TDR positif | 1 | Neuropaludisme de l’adulte ; Paludisme grave ; État de mal épileptique |
| Méningite bactérienne de l’adulte | 1 | Méningite bactérienne aiguë ; Méningite tuberculeuse ; Céphalées et migraine |
| Céphalées subaiguës chez un patient VIH | 1 | Méningite à cryptocoque ; Méningite tuberculeuse ; Neuropaludisme de l’adulte |
| Toux chronique, sueurs, amaigrissement | 1 | Tuberculose pulmonaire ; Tuberculose pharmacorésistante ; Hémoptysie |
| Pneumonie de l’adulte | 1 | Pneumonie communautaire de l’adulte ; Syndrome thoracique aigu drépanocytaire ; Tuberculose pulmonaire |
| Diarrhée aqueuse profuse en zone de choléra | 1 | Choléra ; Malnutrition aiguë sévère ; Maladie à virus Ebola |
| Fièvre prolongée en plateau avec troubles digestifs | 1 | Fièvre typhoïde ; Maladie à virus Ebola ; Grippe |
| Fièvre hémorragique en zone d’Ebola | 1 | Maladie à virus Ebola ; Maladie à virus Marburg ; Paludisme simple |
| Éruption vésiculeuse fébrile, contact mpox | 1 | Mpox (variole simienne) ; Herpès cutanéo-muqueux ; Zona |
| Morsure de chien puis hydrophobie | 1 | Rage ; Sevrage alcoolique et delirium tremens ; Usage de substances chez l’adolescent |
| Trismus après une plaie souillée | 1 | Tétanos ; Abcès péri-amygdalien ; Cellulite cervico-faciale |
| Écoulement urétral purulent | 1 | Urétrites et gonococcie de l’homme ; Infections sexuellement transmissibles de l’adolescent ; Infections sexuellement transmissibles (approche syndromique) |
| Ulcération génitale indolore | 1 | Syphilis ; Herpès cutanéo-muqueux ; Mpox (variole simienne) |
| Somnolence diurne en zone de trypanosomiase | 1 | Trypanosomiase humaine africaine (maladie du sommeil) ; Trypanosomiase en phase neurologique ; Traumatismes liés aux conflits armés |
| Plaie chronique indolore en zone rurale | 1 | Ulcère de Buruli ; Escarres ; Ulcères chroniques de jambe |
| Taches hypopigmentées anesthésiques | 1 | Lèpre ; Neuropathie lépreuse ; Complications de la dépigmentation volontaire |
| Brûlures mictionnelles avec fièvre et douleur lombaire | 1 | Infections urinaires de l’adulte (cystite, pyélonéphrite) ; Lithiase urinaire et colique néphrétique ; Infections urinaires récidivantes de la femme |
| Femme enceinte : céphalées, troubles visuels, œdèmes | 1 | Pré-éclampsie sévère ; Éclampsie ; Hypertension gravidique |
| Convulsions au troisième trimestre | 1 | Éclampsie ; Épilepsie ; Épilepsie et grossesse |
| Saignement abondant après l’accouchement | 2 | Choc hémorragique obstétrical ; Hémorragie du post-partum ; Rétention placentaire |
| Douleur pelvienne et aménorrhée avec choc | 2 | Saignements du premier trimestre (démarche) ; Grossesse extra-utérine ; Avortement spontané |
| Saignement indolore du troisième trimestre | 1 | Placenta prævia ; Tumeurs trophoblastiques gestationnelles ; Môle hydatiforme |
| Fièvre et lochies fétides après l’accouchement | 1 | Sepsis maternel et endométrite du post-partum ; Hémorragie secondaire du post-partum ; Abcès tubo-ovarien |
| Saignement et fièvre après un avortement | 1 | Avortement septique ; Avortement incomplet et soins après avortement ; Infection génitale haute (salpingite) |
| Douleur de la fosse iliaque droite | 1 | Appendicite aiguë ; Hépatites virales aiguës (A et E) ; Infection à Helicobacter pylori |
| Arrêt des matières et des gaz après chirurgie | 1 | Occlusion intestinale aiguë ; Volvulus du sigmoïde ; Hernie étranglée |
| Douleur épigastrique brutale et défense | 1 | Perforation d’ulcère gastroduodénal ; Cancer de l’estomac ; Dyspepsie et gastrite |
| Ictère et ascite chez un buveur | 1 | Cirrhose hépatique ; Ascite et décompensation de la cirrhose ; Hépatite B chronique |
| Hématémèse chez un cirrhotique | 1 | Hémorragie digestive haute ; Schistosomiase hépatosplénique ; Cirrhose hépatique |
| Dyspnée d’effort et œdèmes des membres | 1 | Insuffisance cardiaque ; Cardiomyopathie dilatée ; Valvulopathies rhumatismales |
| Hémiplégie brutale chez un hypertendu | 1 | AVC hémorragique ; Accident vasculaire cérébral (AVC) ; AVC ischémique |
| Céphalée brutale avec raideur de nuque | 1 | Hémorragie méningée ; Méningite tuberculeuse ; Méningite à cryptocoque |
| Crises convulsives répétées sans fièvre | 1 | Épilepsie ; Épilepsie pharmacorésistante ; Crises non épileptiques psychogènes |
| Diabétique confus et en sueur | 1 | Hypoglycémie de l’adulte ; Syndrome malin des neuroleptiques et effets des psychotropes ; Réanimation du choc |
| Polyurie, soif et amaigrissement | 1 | Diabète de type 1 de l’adulte ; Diabète de type 2 ; État hyperosmolaire hyperglycémique |
| Crise d’asthme de l’adulte | 1 | Asthme ; Asthme aigu grave ; Bronchopneumopathie chronique obstructive |
| Tristesse, insomnie et idées noires | 1 | Dépression ; Troubles psychiques des maladies chroniques ; Risque suicidaire et tentative de suicide |
| Agitation et tremblements après arrêt de l’alcool | 1 | Sevrage alcoolique et delirium tremens ; Usage de cocaïne et d’amphétamines ; Syndrome sérotoninergique |
| Œil rouge et douloureux avec baisse de vision | 1 | Glaucome ; Baisse brutale de l’acuité visuelle ; Kératite et ulcère de cornée |
