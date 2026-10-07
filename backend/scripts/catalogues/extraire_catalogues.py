"""
Extraction des catalogues de firmes pharmaceutiques (.docx) vers MedRef RDC.

Pour chaque catalogue : produits (nom, présentation, DCI, composition, mécanisme,
indications, repère posologique, classe), photo optimisée (WebP 800 px + vignette
240 px), et coordonnées de la firme lues sur la ligne « Source : … ».

Usage (depuis backend/) :
    python scripts/catalogues/extraire_catalogues.py "C:/chemin/vers/Catalogues" [fichier.docx …]

Sorties :
    db/seed-data/catalogues/<firme>.json   données importées par `npm run db:enrichir`
    medias/produits/<firme>/<ref>.webp      photo (et <ref>-mini.webp, vignette)

Deux mises en page sont reconnues :
  A. photo → nom → présentation → « DCI : … » → « Mécanisme d'action : … » → …
  B. (Unique Pharma) titre de niveau 3 = molécule, suivi de ses rubriques, puis
     pour chaque produit : photo → « Nom — Chaque … contient : composition » → présentation.
"""
import hashlib
import io
import json
import re
import sys
import unicodedata
from pathlib import Path

import docx
from PIL import Image

RACINE = Path(__file__).resolve().parents[2]
SORTIE_DONNEES = RACINE / "db" / "seed-data" / "catalogues"
SORTIE_MEDIAS = RACINE / "medias" / "produits"
TAILLE_PHOTO = 800
TAILLE_MINI = 240

RUBRIQUES = {
    "dci": "dci",
    "mécanisme d'action": "mecanisme",
    "indications": "indications",
    "repère posologique": "posologie",
}

# Catégories de forme (filtre de la galerie) : (catégorie, motifs recherchés)
FORMES = [
    ("Kit combiné", r"\bkit\b"),
    ("Collyre / gouttes auriculaires", r"collyre|ophtalm|auriculaire|gouttes? (oculaire|auricul)"),
    ("Injectable", r"inject|perfusion|intraveine|intraveineu|\bIV\b|\bIM\b|ampoule|seringue|infusion"),
    ("Ovule / voie vaginale", r"ovule|vaginal|gynéco"),
    ("Suppositoire", r"suppositoire"),
    ("Pastille", r"pastille|lozenge"),
    ("Inhalation", r"inhal|aérosol|nébulis|spray nasal"),
    ("Topique (crème, pommade, gel, solution cutanée)",
     r"crème|creme|pommade|\bgel\b|lotion|onguent|savon|shampo|\btube\b|baume|balm|\boil\b|huile|spray|"
     r"bain de bouche|lavant|antiseptique|poudre antifongique|brushing"),
    ("Sirop, suspension, solution buvable",
     r"sirop|suspension|buvable|solution orale|gouttes|élixir|syrup|émulsion|emulsion|\bORS\b|\bSRO\b|"
     r"tetra|chaque 5 ?m[lL]|par 5 ?m[lL]|flacon de \d+ ?m[lL][^,]*voie orale"),
    ("Sachet / poudre orale", r"sachet|granul|poudre (orale|pour solution buvable)"),
    ("Gélule", r"gélule|gelule|capsule|softgel"),
    ("Comprimé", r"comprim|\bcp\b|tablet|dispersible|effervescent"),
]
ENFANT = re.compile(
    r"sirop|suspension|dispersible|gouttes|pédiatr|pediatr|junior|enfant|\bkid|\bbaby|bébé|nourrisson|"
    r"suppositoire",
    re.I,
)


def slugify(texte):
    t = unicodedata.normalize("NFD", texte).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", "-", t).strip("-")


def rubrique(texte):
    m = re.match(r"^([^:]{2,40}?)\s*:\s*(.+)$", texte)
    if not m:
        return None, None
    return RUBRIQUES.get(m.group(1).strip().lower()), m.group(2).strip()


def forme_de(*textes):
    texte = " ".join(t for t in textes if t)
    for categorie, motif in FORMES:
        if re.search(motif, texte, re.I):
            return categorie
    return "Forme non précisée"


def firme_depuis_source(source):
    """« Source : catalogue produits Arauphar SARL (Kinshasa, RDC) » → pays, site."""
    pays = "RDC" if re.search(r"\bRDC\b|Kinshasa", source or "") else None
    if re.search(r"Allemagne", source or ""):
        pays = "Allemagne"
    site = re.search(r"\b([a-z0-9-]+\.(?:com|co|cd|net|org))\b", source or "", re.I)
    return pays, (f"https://{site.group(1).lower()}" if site else None)


def photo(document, rid, dossier, ref):
    """Écrit la photo et sa vignette en WebP ; renvoie l'adresse publique."""
    part = document.part.related_parts.get(rid)
    if part is None:
        return None
    image = Image.open(io.BytesIO(part.blob)).convert("RGB")
    dossier.mkdir(parents=True, exist_ok=True)
    for taille, suffixe, qualite in ((TAILLE_PHOTO, "", 78), (TAILLE_MINI, "-mini", 72)):
        copie = image.copy()
        copie.thumbnail((taille, taille))
        copie.save(dossier / f"{ref}{suffixe}.webp", "WEBP", quality=qualite, method=6)
    return f"/medias/produits/{dossier.name}/{ref}.webp"


def extraire(chemin):
    document = docx.Document(chemin)
    paragraphes = [
        (p.style.name if p.style is not None else "", p.text.strip(), p._p.xpath(".//a:blip/@r:embed"))
        for p in document.paragraphs
    ]
    entete = [t for _, t, _ in paragraphes[:8] if t]
    nom_firme = re.sub(r"^catalogue\s+", "", entete[0], flags=re.I).strip()
    nom_firme = re.sub(r"\s+(SARL|S\.A\.R\.L\.)$", "", nom_firme, flags=re.I).strip()
    if nom_firme.isupper():  # « DENK PHARMA » → « Denk Pharma »
        nom_firme = " ".join(m.capitalize() for m in nom_firme.split())
    source = next((t for t in entete if t.lower().startswith("source")), "")

    produits = []
    classe = sous_classe = molecule = None
    info_molecule = {}
    courant = None
    for style, texte, images in paragraphes:
        if style.startswith("Heading"):
            courant = None
            niveau = style[-1]
            if niveau == "1":
                # « 1. Antipaludéens » → « Antipaludéens »
                classe = re.sub(r"^\d+\.\s*", "", texte)
                sous_classe, molecule, info_molecule = None, None, {}
            elif niveau == "2":
                sous_classe, molecule, info_molecule = texte, None, {}
            elif niveau == "3":
                molecule, info_molecule = texte, {}
            continue
        if images:
            courant = {"classe": classe, "sous_classe": sous_classe, "rid": images[0], "nom": None,
                       "presentation": None, "molecule_titre": molecule, **info_molecule}
            produits.append(courant)
            continue
        if not texte:
            continue
        cle, valeur = rubrique(texte)
        if courant is None:
            if molecule and cle:
                info_molecule[cle] = valeur
            continue
        if courant["nom"] is None:
            courant["nom"] = texte
        elif cle:
            courant[cle] = valeur
        elif courant["presentation"] is None:
            courant["presentation"] = texte
    return document, nom_firme, source, produits


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    dossier = Path(sys.argv[1])
    fichiers = [dossier / f for f in sys.argv[2:]] or sorted(dossier.glob("Catalogue_*.docx"))
    SORTIE_DONNEES.mkdir(parents=True, exist_ok=True)
    for chemin in fichiers:
        document, nom_firme, source, bruts = extraire(chemin)
        slug_firme = slugify(nom_firme)
        pays, site = firme_depuis_source(source)
        produits, vus = [], set()
        for b in bruts:
            if not b["nom"]:
                continue
            nom, composition = b["nom"], None
            if "—" in nom:  # mise en page B
                nom, composition = [x.strip() for x in nom.split("—", 1)]
                composition = re.sub(r"^chaque [^:]*contient\s*:?\s*", "", composition, flags=re.I).strip()
            elif b["presentation"] and re.match(r"^chaque [^:]*contient", b["presentation"], re.I):
                composition = re.sub(r"^chaque [^:]*contient\s*:?\s*", "", b["presentation"], flags=re.I)
            dci = b.get("dci") or b.get("molecule_titre") or composition or ""
            empreinte = hashlib.sha1(f"{nom}|{b['presentation']}|{dci}|{composition}".encode()).hexdigest()[:8]
            ref = f"{slug_firme}-{slugify(nom)[:60]}-{empreinte}"
            if ref in vus:
                continue
            vus.add(ref)
            textes = (nom, b["presentation"], composition, dci)
            produits.append({
                "ref": ref,
                "nom": nom,
                "presentation": b["presentation"],
                "composition": composition,
                "dci": dci,
                "forme": forme_de(*textes),
                "enfant": bool(ENFANT.search(" ".join(t for t in textes if t))),
                "classe": b["classe"],
                "sous_classe": b["sous_classe"],
                "mecanisme": b.get("mecanisme"),
                "indications": b.get("indications"),
                "posologie": b.get("posologie"),
                "photo": photo(document, b["rid"], SORTIE_MEDIAS / slug_firme, ref),
            })
        donnees = {
            "firme": {"nom": nom_firme, "slug": slug_firme, "pays": pays, "site_web": site,
                      "source": source, "fichier": chemin.name},
            "produits": produits,
        }
        (SORTIE_DONNEES / f"{slug_firme}.json").write_text(
            json.dumps(donnees, ensure_ascii=False, indent=1), encoding="utf-8"
        )
        print(f"{nom_firme}: {len(produits)} produits")


if __name__ == "__main__":
    main()
