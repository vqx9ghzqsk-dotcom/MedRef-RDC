# -*- coding: utf-8 -*-
"""Organon : liste officielle (organon.com/our-focus/products-list + DailyMed) + gammes hors États-Unis.
Usage : python firmes/organon.py <dossier scratch contenant dm/ et dm_labelers.json>"""
import json, os, shutil, sys

SP = sys.argv[1]
HERE = os.path.dirname(os.path.abspath(__file__))
IMG = os.path.join(HERE, 'img_organon'); os.makedirs(IMG, exist_ok=True)
labs = json.load(open(os.path.join(SP, 'dm_labelers.json'), encoding='utf8'))['Organon']

# (mot-clé du titre DailyMed, nom commercial, clé bibliothèque, présentation)
MAP = [
 ('RENFLEXIS', 'Renflexis', 'infliximab', 'Infliximab-abda, poudre pour solution à diluer pour perfusion IV, flacon 100 mg'),
 ('SINEMET', 'Sinemet', 'carbidopa-levodopa', 'Carbidopa/lévodopa, comprimés (10/100, 25/100, 25/250 mg)'),
 ('BILPREVDA', 'Bilprevda', 'denosumab', 'Dénosumab 120 mg, solution injectable SC'),
 ('BILDYOS', 'Bildyos', 'denosumab', 'Dénosumab 60 mg, seringue préremplie SC'),
 ('ASMANEX HFA', 'Asmanex HFA', 'mometasone-inhalee', 'Mométasone furoate, aérosol-doseur pour inhalation (50/100/200 µg)'),
 ('DULERA', 'Dulera', 'mometasone-formoterol', 'Mométasone furoate/formotérol, aérosol-doseur pour inhalation'),
 ('ASMANEX (MOMETASONE FUROATE) INHALANT', 'Asmanex Twisthaler', 'mometasone-inhalee', 'Mométasone furoate, poudre pour inhalation (Twisthaler)'),
 ('MIUDELLA', 'Miudella', 'sterilet-cuivre', 'Système intra-utérin au cuivre'),
 ('NEXPLANON', 'Nexplanon', 'etonogestrel-implant', 'Étonogestrel 68 mg, implant radio-opaque sous-cutané'),
 ('TOFIDENCE', 'Tofidence', 'tocilizumab', 'Tocilizumab-bavi 20 mg/mL, solution à diluer pour perfusion IV'),
 ('FOLLISTIM', 'Follistim AQ Cartridge', 'follitropine-beta', 'Follitropine bêta, cartouche pour stylo injecteur SC'),
 ('ONTRUZANT', 'Ontruzant', 'trastuzumab', 'Trastuzumab-dttb, poudre pour solution à diluer pour perfusion IV'),
 ('PROSCAR', 'Proscar', 'finasteride', 'Finastéride 5 mg, comprimés pelliculés'),
 ('FOSAMAX (ALENDRONATE', 'Fosamax', 'alendronate', 'Alendronate sodique 70 mg, comprimés'),
 ('CELESTONE', 'Celestone Soluspan', 'betamethasone-inj', 'Bétaméthasone phosphate + acétate, suspension injectable 6 mg/mL'),
 ('XACIATO', 'Xaciato', 'clindamycine-gel-vaginal', 'Clindamycine phosphate 2 %, gel vaginal'),
 ('FOSAMAX PLUS D', 'Fosamax Plus D', 'alendronate-colecalciferol', 'Alendronate 70 mg + colécalciférol, comprimés'),
 ('MAXALT', 'Maxalt / Maxalt-MLT', 'rizatriptan', 'Rizatriptan benzoate 5 et 10 mg, comprimés et lyophilisats oraux'),
 ('VYTORIN', 'Vytorin', 'ezetimibe-simvastatine', 'Ézétimibe + simvastatine, comprimés'),
 ('COZAAR', 'Cozaar', 'losartan', 'Losartan potassique 25, 50, 100 mg, comprimés pelliculés'),
 ('HADLIMA', 'Hadlima', 'adalimumab', 'Adalimumab-bwwd 40 mg, stylo ou seringue préremplie SC'),
 ('PREGNYL', 'Pregnyl', 'hcg', 'Gonadotrophine chorionique, poudre pour injection IM'),
 ('HYZAAR', 'Hyzaar', 'losartan-hctz', 'Losartan/hydrochlorothiazide, comprimés pelliculés'),
 ('ZETIA', 'Zetia', 'ezetimibe', 'Ézétimibe 10 mg, comprimés'),
 ('DIPROLENE', 'Diprolene', 'betamethasone-dipropionate', 'Bétaméthasone dipropionate augmentée 0,05 %, pommade'),
 ('NUVARING', 'NuvaRing', 'etonogestrel-ee-anneau', 'Étonogestrel/éthinylestradiol, anneau vaginal'),
 ('CLARINEX-D', 'Clarinex-D 12 heures', 'desloratadine-pseudoephedrine', 'Desloratadine 2,5 mg + pseudoéphédrine 120 mg, comprimés LP'),
 ('GANIRELIX', 'Ganirelix acétate', 'ganirelix', 'Ganirélix 250 µg/0,5 mL, seringue préremplie SC'),
 ('REMERON', 'Remeron / RemeronSolTab', 'mirtazapine', 'Mirtazapine 15-45 mg, comprimés et lyophilisats oraux'),
 ('VTAMA', 'Vtama', 'tapinarof', 'Tapinarof 1 %, crème'),
 ('SINGULAIR', 'Singulair', 'montelukast', 'Montélukast 4 mg (granulés), 4-5 mg (comprimés à croquer), 10 mg (comprimés)'),
 ('CLARINEX (DESLORATADINE)', 'Clarinex', 'desloratadine', 'Desloratadine 5 mg, comprimés et solution buvable'),
 ('ZOCOR', 'Zocor', 'simvastatine', 'Simvastatine 5-80 mg, comprimés pelliculés'),
 ('PROPECIA', 'Propecia', 'finasteride', 'Finastéride 1 mg, comprimés pelliculés'),
]
EXTRA = [  # gammes Organon commercialisées hors États-Unis (liste officielle Organon Suisse/International) — sans photo
 ('Cerazette', 'desogestrel', 'Désogestrel 75 µg, comprimés'),
 ('Marvelon', 'desogestrel-ee', 'Désogestrel 150 µg + éthinylestradiol 30 µg, comprimés'),
 ('Mercilon', 'desogestrel-ee', 'Désogestrel 150 µg + éthinylestradiol 20 µg, comprimés'),
 ('Livial', 'tibolone', 'Tibolone 2,5 mg, comprimés'),
 ('Arcoxia', 'etoricoxib', 'Étoricoxib 30/60/90/120 mg, comprimés pelliculés'),
 ('Nasonex', 'mometasone-nasale', 'Mométasone furoate 50 µg/dose, spray nasal'),
 ('Elocom / Elocon', 'mometasone-creme', 'Mométasone furoate 0,1 %, crème / pommade / lotion'),
 ('Diprosone', 'betamethasone-dipropionate', 'Bétaméthasone dipropionate 0,05 %, crème / pommade'),
 ('Diprophos / Diprospan', 'betamethasone-inj', 'Bétaméthasone dipropionate + phosphate, suspension injectable'),
 ('Cosaar / Cosaar Plus', 'losartan', 'Losartan potassique (± hydrochlorothiazide), comprimés'),
 ('Aerius', 'desloratadine', 'Desloratadine 5 mg, comprimés ; sirop 0,5 mg/mL'),
 ('Lukair', 'montelukast', 'Montélukast, comprimés pelliculés et à croquer'),
 ('Ezetrol / Ezetimibe Organon', 'ezetimibe', 'Ézétimibe 10 mg, comprimés'),
 ('Inegy', 'ezetimibe-simvastatine', 'Ézétimibe + simvastatine, comprimés'),
 ('Atozet', 'ezetimibe-atorvastatine', 'Ézétimibe + atorvastatine, comprimés pelliculés'),
 ('Fosavance', 'alendronate-colecalciferol', 'Alendronate + colécalciférol, comprimés'),
 ('Implanon NXT', 'etonogestrel-implant', 'Étonogestrel 68 mg, implant sous-cutané'),
 ('Puregon', 'follitropine-beta', 'Follitropine bêta, solution injectable (cartouches)'),
 ('Elonva', 'corifollitropine', 'Corifollitropine alfa, seringue préremplie SC'),

 ('Celestene (comprimés, gouttes, injectable)', 'betamethasone-orale', 'Bétaméthasone 0,05 % gouttes, 2 mg comprimés dispersibles, 4 mg/mL injectable — gamme Organon France'),
 ('Diprostene', 'betamethasone-inj', 'Bétaméthasone dipropionate + phosphate, suspension injectable en seringue préremplie — gamme Organon France'),
 ('Diprosalic', 'betamethasone-salicylique', 'Bétaméthasone dipropionate + acide salicylique, pommade / lotion — gamme Organon France'),
 ('Co-Renitec / Renitec', 'enalapril-hctz', 'Énalapril 20 mg + hydrochlorothiazide 12,5 mg (Co-Renitec) ; énalapril 20 mg (Renitec) — gamme Organon France'),
 ('Fortzaar', 'losartan-hctz', 'Losartan 100 mg + hydrochlorothiazide 12,5 / 25 mg, comprimés — gamme Organon France/Asie'),
 ('Norset', 'mirtazapine', 'Mirtazapine 15 mg, comprimés — gamme Organon France'),
 ('Liptruzet', 'ezetimibe-atorvastatine', 'Ézétimibe 10 mg + atorvastatine 10-80 mg, comprimés pelliculés — gamme Organon France'),
 ('Nilemdo / Nustendi', 'acide-bempedoique', 'Acide bempédoïque 180 mg (± ézétimibe 10 mg), comprimés pelliculés — gamme Organon Europe'),
 ('Emgality', 'galcanezumab', 'Galcanézumab 120 mg, stylo prérempli SC — gamme Organon France'),
 ('Ryaltris', 'olopatadine-mometasone', 'Olopatadine + mométasone, spray nasal — gamme Organon'),
 ('Brenzys', 'etanercept', 'Étanercept (biosimilaire) 50 mg, stylo/seringue SC — gamme Organon'),
 ('Aybintio', 'bevacizumab', 'Bévacizumab (biosimilaire), perfusion IV — gamme Organon'),
 ('Poherdy', 'pertuzumab', 'Pertuzumab (biosimilaire), perfusion IV — gamme Organon'),
]
prod = []
for key, nom, mol, pres in MAP:
    cand = [x for x in labs if key in x['title']]
    assert cand, key
    sid = cand[0]['setid']
    d = os.path.join(SP, 'dm', sid)
    img = None
    mj = os.path.join(d, 'media.json')
    if os.path.exists(mj):
        ims = json.load(open(mj))['imgs']
        ims = [i for i in ims if 'logo' not in i.lower() and 'pic' not in i.lower().split('-')[0][:3]]
        if ims:
            best = max(ims, key=lambda n: os.path.getsize(os.path.join(d, n)))
            ext = os.path.splitext(best)[1]
            dest = os.path.join(IMG, nom.lower().replace(' ', '_').replace('/', '_') + ext)
            shutil.copy(os.path.join(d, best), dest); img = 'img_organon/' + os.path.basename(dest)
    p = {'nom': nom, 'presentation': pres, 'mol': mol, 'image': img}
    if nom == 'Propecia': p['ov'] = {'indications': "Alopécie androgénétique masculine (1 mg).", 'posologie': "1 mg/j en continu ; résultats après 3-6 mois ; arrêt = perte du bénéfice."}
    if nom == 'Proscar': p['ov'] = {'indications': "Hypertrophie bénigne de la prostate (5 mg).", 'posologie': "5 mg/j en une prise ; amélioration progressive sur 6 mois."}
    prod.append(p)
PHOTOS = {'Marvelon': 'marvelon.jpg', 'Aerius': 'aerius.jpg', 'Implanon NXT': 'implanon.jpg'}  # Wikimedia Commons, CC BY-SA
for nom, mol, pres in EXTRA:
    img = 'img_organon/' + PHOTOS[nom] if nom in PHOTOS else None
    prod.append({'nom': nom, 'presentation': pres + ('' if img else " — gamme hors États-Unis (pas de photo)"), 'mol': mol, 'image': img})
json.dump({'firme': 'Organon',
           'source': "liste officielle des produits Organon (organon.com/our-focus/products-list), gammes hors États-Unis (organon.com/switzerland-en/products) ; images : étiquetage/cartons officiels des notices (DailyMed, NLM/FDA) ; photos de Marvelon (Lupus Soeur), Aerius (Tomi) et Implanon (Ciell) : Wikimedia Commons, licences CC BY-SA ; liste des gammes françaises : VIDAL (Organon France) et MIMS",
           'note': "Les visuels sont les maquettes de carton/étiquette déposées auprès de la FDA : ils identifient le produit mais l'emballage commercialisé en RDC peut différer. Les produits sans photo sont des gammes vendues hors États-Unis. Disponibilité en RDC : à confirmer pour chaque produit.",
           'produits': prod}, open(os.path.join(HERE, 'organon.json'), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
print(len(prod), 'produits', sum(1 for p in prod if p.get('image')), 'avec image')
