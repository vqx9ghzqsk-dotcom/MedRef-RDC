# -*- coding: utf-8 -*-
"""Aide commune : produit le JSON d'un catalogue à partir de la liste DailyMed (étiquetage officiel + images)."""
import json, os, re, shutil

HERE = os.path.dirname(os.path.abspath(__file__))


def slug(s):
    return re.sub(r'[^a-z0-9]+', '_', s.lower()).strip('_')


def meilleure_image(d):
    mj = os.path.join(d, 'media.json')
    if not os.path.exists(mj):
        return None
    bon = re.compile(r'carton|label|package|container|pdp|principal|blister|vial|bottle|syringe|pen|kit|tube|box|pack|inhal', re.I)
    mauvais = re.compile(r'logo|fig|structure|step|chart|table|graph|curve|ifu|instruction|plot|forest|kaplan|pic\d', re.I)
    ims = [i for i in json.load(open(mj))['imgs'] if os.path.getsize(os.path.join(d, i)) > 20000]
    taille = lambda n: os.path.getsize(os.path.join(d, n))
    for crit in (lambda i: bon.search(i) and not mauvais.search(i), lambda i: not mauvais.search(i), lambda i: True):
        c = [i for i in ims if crit(i)]
        if c:
            return max(c, key=taille)
    return None


def construire(sp, labelers, mapping, extras, firme, dossier_img, source, note, sortie, overrides=None, img_override=None):
    """mapping : (mot-clé du titre DailyMed, nom commercial, clé bibliothèque, présentation[, images supplémentaires?])"""
    labs = json.load(open(os.path.join(sp, 'dm_labelers.json'), encoding='utf8'))
    items = [x for l in labelers for x in labs[l]]
    img_dir = os.path.join(HERE, dossier_img); os.makedirs(img_dir, exist_ok=True)
    prod, vus = [], set()
    for key, nom, mol, pres in mapping:
        cand = [x for x in items if re.search(key, x['title'])]
        assert cand, 'introuvable : ' + key
        x = cand[0]; vus.add(x['setid'])
        d = os.path.join(sp, 'dm', x['setid'])
        best = meilleure_image(d)
        if img_override and nom in img_override:
            lst = json.load(open(os.path.join(d, 'media.json')))['imgs']
            if img_override[nom] == 'LAST':  # dernière image volumineuse = en général le carton
                best = [n for n in lst if os.path.getsize(os.path.join(d, n)) > 25000][-1]
            else:
                best = next(n for n in lst if n.endswith(img_override[nom]))
        img = None
        if best:
            dest = os.path.join(img_dir, slug(nom) + os.path.splitext(best)[1])
            shutil.copy(os.path.join(d, best), dest); img = dossier_img + '/' + os.path.basename(dest)
        p = {'nom': nom, 'presentation': pres, 'mol': mol, 'image': img}
        if overrides and nom in overrides: p['ov'] = overrides[nom]
        prod.append(p)
    nonmap = [x['title'][:60] for x in items if x['setid'] not in vus]
    for nom, mol, pres in extras:
        prod.append({'nom': nom, 'presentation': pres, 'mol': mol})
    json.dump({'firme': firme, 'source': source, 'note': note, 'produits': prod},
              open(os.path.join(HERE, sortie), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
    print(firme, len(prod), 'produits,', sum(1 for p in prod if p.get('image')), 'avec image ; non repris :', nonmap)
