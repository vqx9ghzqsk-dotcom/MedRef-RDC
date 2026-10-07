# -*- coding: utf-8 -*-
"""Télécharge les photos de produits Organon publiées par MIMS Thaïlande (company/info/organon)."""
import os, sys, urllib.parse, urllib.request

BASE = 'https://cdn.mimsprd.mims.com/drug-resources/TH/pic/'
FICHIERS = [
 'Aerius oral soln 0.5 mg_mL0dc984c3-92e6-4668-93a2-b45601058199.GIF',
 'Aerius tab 5 mg25c75409-0a5a-497c-88b1-b00d00e1a670.GIF',
 'Atozet 10_10 mg FC tabaec3684a-1ca2-457d-af71-aff60104d711.GIF',
 'Cerazette tab 75 mcge6fd2f9c-1e6b-4569-89f3-b00d00e2d136.GIF',
 'Cozaar tab 100 mgf80aab39-2c93-48b9-aafb-b00d00e352c7.GIF',
 'Cozaar tab 50 mg90c46f41-1b1a-43af-8179-b00d00e352cc.GIF',
 'Elonva soln for inj 100 mcg_0.5 mL79212447-2aec-4254-b095-b069008763b1.GIF',
 'Ezetrol tab 10 mg8969597c-6091-4015-9deb-b00d00e519de.GIF',
 'Fortzaar tab2bec262d-65f8-46f7-bccc-b00d00e5780f.GIF',
 'Fosamax Plus tab 70 mg_5_600 iu6e4f5d84-bfdb-4d6a-8ecd-b00d00e646c9.GIF',
 'Hyzaar 100_12.5 mg tabf0bf4518-1ec6-4259-812f-9fab001f4c29.GIF',
 'Implanon NXT implant 68 mgb12db011-ff31-458a-b1ea-b00d00e72ad8.GIF',
 'Livial tab 2.5 mgc38bb3ec-180f-46ee-a422-b32900d6f630.GIF',
 'Marvelon 28 tabf3f39040-a7e3-4598-9b56-b00d00e7d0c6.GIF',
 'Mercilon 28 tabefd96f7b-35f2-4a9b-90c1-b00d00e8c9b9.GIF',
 'Nasonex aqueous nasal spray 50 mcg_dose7d9a28ff-f534-4141-b976-b00d00e9e028.GIF',
 'Orgalutran soln for inj 0.25 mg_0.5 mLc51a84b1-a990-4a4f-b6c3-b00d00eaac43.GIF',
 'Propecia tab 1 mg9f52e342-fb68-4057-a653-b00d00eb0ae0.GIF',
 'Puregon soln for inj 300 IU_0.36 mL5eaf35bc-931e-44ac-84df-b00d00ed25eb.GIF',
 'Ryaltris nasal sprayf8fece40-6aec-4fab-a280-b3de00fafaba.GIF',
 'Singulair chewable tab 4 mgcd4cbc0b-fb85-4dae-b32d-b00d00ef9d8b.GIF',
 'Singulair FC tab 10 mg3e8bea4d-db99-4c37-8134-b00d00ef9dcc.GIF',
 'Vytorin 10_10 mg tabc6b6d627-9f69-4c7e-a602-b00d00f162e5.GIF',
]
out = sys.argv[1]; os.makedirs(out, exist_ok=True)
for f in FICHIERS:
    dest = os.path.join(out, f.split(' ')[0].lower() + '_' + str(abs(hash(f)) % 1000) + '.gif')
    try:
        d = urllib.request.urlopen(urllib.request.Request(BASE + urllib.parse.quote(f), headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36', 'Referer': 'https://www.mims.com/'}), timeout=40).read()
        open(os.path.join(out, f.replace(' ', '_').replace('/', '_')), 'wb').write(d)
    except Exception as e:
        print('ERR', f, e)
print(len(os.listdir(out)), 'images')
