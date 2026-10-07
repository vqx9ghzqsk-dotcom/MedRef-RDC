# -*- coding: utf-8 -*-
"""Mission Pharma : lit le catalogue de stock (texte extrait du PDF) et produit le JSON du catalogue."""
import json, re, sys, os

SRC = sys.argv[1]  # texte extrait du PDF
RULES = [  # (motif sur le libellé en minuscules, clé de la bibliothèque) — ordre = priorité
 (r'abacavir', 'abacavir-lamivudine'), (r'acetylsalicylic', 'acide-acetylsalicylique'), (r'aciclovir', 'aciclovir'),
 (r'actrapid', 'insuline-humaine-rapide'), (r'mixtard', 'insuline-humaine-mixte'), (r'adrenaline', 'adrenaline'),
 (r'albendazole', 'albendazole'), (r'amitriptyline', 'amitriptyline'), (r'amlodipine', 'amlodipine'),
 (r'amoxicillin.*clavulanic', 'amoxicilline-clavulanate'), (r'^amoxicillin', 'amoxicilline'), (r'ampicillin', 'ampicilline'),
 (r'artemether', 'artemether-lumefantrine'), (r'artesunate', 'artesunate-inj'), (r'atenolol', 'atenolol'),
 (r'atropine', 'atropine'), (r'azithromycin', 'azithromycine'), (r'beclomethasone', 'beclometasone'),
 (r'benzathine', 'benzathine-benzylpenicilline'), (r'benzyl benzoate', 'benzoate-benzyle'),
 (r'benzylpenicillin', 'benzylpenicilline'), (r'bisacodyl', 'bisacodyl'), (r'bisoprolol', 'bisoprolol'),
 (r'bleomycin', 'bleomycine'), (r'calamine', 'calamine'), (r'calcium gluconate', 'calcium-gluconate'),
 (r'captopril', 'captopril'), (r'carbamazepine', 'carbamazepine'), (r'cefalexin', 'cefalexine'), (r'cefixime', 'cefixime'),
 (r'cefotaxime', 'cefotaxime'), (r'ceftriaxone', 'ceftriaxone'), (r'chloramphenicol', 'chloramphenicol'),
 (r'chlorhexidine', 'chlorhexidine'), (r'chlorphenamine', 'chlorphenamine'), (r'chlorpromazine', 'chlorpromazine'),
 (r'ciprofloxacin', 'ciprofloxacine'), (r'clotrimazole', 'clotrimazole'), (r'cloxacillin', 'cloxacilline'),
 (r'compound benzoic', 'acide-benzoique-compose'), (r'cotrimoxazole', 'cotrimoxazole'),
 (r'dexamethasone', 'dexamethasone'), (r'dextrose', 'dextrose'), (r'diclofenac', 'diclofenac'),
 (r'divalproex|valproic', 'valproate'), (r'tenofovir', 'tenofovir-lamivudine-dolutegravir'),
 (r'dolutegravir', 'dolutegravir'), (r'dopamine', 'dopamine'), (r'doxycycline', 'doxycycline'),
 (r'enalapril', 'enalapril'), (r'ephedrine', 'ephedrine'), (r'erythromycin', 'erythromycine'),
 (r'ferrous fumarate', 'fer-fumarate'), (r'folic acid', 'acide-folique'), (r'furosemide', 'furosemide'),
 (r'gentamicin.*(eye|ear)', 'gentamicine-collyre'), (r'gentamicin', 'gentamicine'), (r'glibenclamide', 'glibenclamide'),
 (r'glyceryl trinitrate', 'trinitrine'), (r'griseofulvin', 'griseofulvine'), (r'haloperidol', 'haloperidol'),
 (r'hydralazine', 'hydralazine'), (r'hydrochlorothiazide', 'hydrochlorothiazide'),
 (r'hydrocortisone acetate', 'hydrocortisone-creme'), (r'hydrocortisone', 'hydrocortisone'),
 (r'hyoscine', 'hyoscine-butylbromure'), (r'ibuprofen', 'ibuprofene'), (r'levonorgestrel', 'levonorgestrel'),
 (r'lidocaine', 'lidocaine'), (r'loperamide', 'loperamide'), (r'magnesium sulphate', 'magnesium-sulfate'),
 (r'malaria', 'test-paludisme'), (r'mebendazole', 'mebendazole'), (r'medroxyprogesterone', 'medroxyprogesterone-inj'),
 (r'metformin', 'metformine'), (r'methyldopa', 'methyldopa'), (r'metoclopramide', 'metoclopramide'),
 (r'metronidazole', 'metronidazole'), (r'miconazole', 'miconazole'), (r'misoprostol', 'misoprostol'),
 (r'multivitamin', 'multivitamines'), (r'naloxone', 'naloxone'), (r'nitrofurantoin', 'nitrofurantoine'),
 (r'nystatin', 'nystatine'), (r'omeprazole', 'omeprazole'), (r'oral rehydration', 'sro'), (r'oxytocin', 'oxytocine'),
 (r'paracetamol', 'paracetamol'), (r'permethrin', 'permethrine'), (r'phenoxymethylpenicillin', 'phenoxymethylpenicilline'),
 (r'povidone', 'povidone-iodee'), (r'praziquantel', 'praziquantel'), (r'prednisolone', 'prednisolone'),
 (r'protamine', 'protamine'), (r'pyrantel', 'pyrantel'), (r'quinine', 'quinine-dichlorhydrate'),
 (r'ringers', 'ringer-lactate'), (r'salbutamol', 'salbutamol'), (r'silver sulphadiazine', 'sulfadiazine-argentique'),
 (r'sodium chloride', 'chlorure-sodium'), (r'sulfadoxine', 'sulfadoxine-pyrimethamine'),
 (r'tetracycline', 'tetracycline'), (r'tranexamic', 'acide-tranexamique'), (r'vitamin a', 'vitamine-a'),
 (r'vitamin b1', 'vitamine-b1'), (r'vitamin b6', 'vitamine-b6'), (r'vitamin c', 'vitamine-c'),
 (r'vitamin k1', 'vitamine-k'), (r'water for injection', 'eau-ppi'), (r'zinc oxide', 'oxyde-zinc'), (r'zinc sulphate', 'zinc'),
]
txt = open(SRC, encoding='utf8').read().split('=====PAGE')
produits, vus, manquants = [], set(), []
for pg in txt[2:6]:
    for ln in pg.split('\n'):
        m = re.match(r'^(\d{6})\s+(.+?)\s*$', ln)
        if not m: continue
        code, lib = m.groups()
        if code in vus: continue
        vus.add(code)
        low = lib.lower()
        cle = next((k for pat, k in RULES if re.search(pat, low)), None)
        if not cle:
            manquants.append(lib); continue
        # séparer libellé / conditionnement (dernière expression « N unités »)
        mm = re.match(r'^(.*?)\s+(\d[\d,]*\s*(?:tablets?|capsules?|vials?|ampoules?|bottles?|bottle|tube|tubes|kit|treatments?|sachets?|inhaler|pieces?|vaginal tablets?|chewable tablets?))\s*$', lib)
        nom, cond = (mm.group(1), mm.group(2)) if mm else (lib, '')
        produits.append({'nom': nom.split(',')[0].strip(), 'presentation': (', '.join(nom.split(',')[1:]).strip() + (' — conditionnement : ' + cond if cond else '')).strip(' —'),
                         'mol': cle})
print(len(produits), 'produits ; non classés :', manquants, file=sys.stderr)
json.dump({
    'firme': 'Missionpharma',
    'source': "catalogue de stock Missionpharma (Danemark/Inde) — missionpharma.com, édition 2026, section « Pharmaceuticals »",
    'note': "Missionpharma est un fournisseur/distributeur (génériques et marques) : le catalogue ne comporte pas de photos de produits ; il est rangé par DCI. Les dispositifs médicaux et kits d'urgence OMS du catalogue ne sont pas repris.",
    'produits': produits}, open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'mission_pharma.json'), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
