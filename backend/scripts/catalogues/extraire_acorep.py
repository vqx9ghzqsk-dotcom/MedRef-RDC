"""
Extraction des documents tirés du répertoire des AMM de l'ACOREP vers
backend/db/seed-data/acorep.json, chargé ensuite par `npm run db:enrichir` :
- « Produits des firmes pharmaceutiques autorisés en RDC » (firmes de la liste) ;
- « Tous les produits des opérateurs pharmaceutiques autorisés en RDC » (en plus :
  tableau de tous les opérateurs, produits des autres opérateurs, conditionnements).
Les deux contiennent aussi les fiches pharmacologiques des substances.

Usage : python extraire_acorep.py <fichier.docx> [sortie.json]
"""

import json
import re
import sys
import unicodedata
from pathlib import Path

import docx

RACINE = Path(__file__).resolve().parents[2]
SORTIE = RACINE / "db" / "seed-data" / "acorep.json"

ENTETE_PRODUITS = ["Marque", "DCI", "Dosage", "Forme", "Classe (ACOREP)", "Provenance", "N° AMM", "Fiche"]
ENTETE_COMPLET = ENTETE_PRODUITS[:3] + ["Forme et conditionnement"] + ENTETE_PRODUITS[4:]
# Colonne « Fiche » → nature du produit (les autres valeurs : médicament)
NATURES = {"Cosmétique": "cosmetique", "Dispositif": "dispositif", "Complément": "complement", "Autre": "autre"}
# « Co. Bte de 4 x 50 » → forme « Co. », conditionnement « Bte de 4 x 50 »
CONDITIONNEMENT = re.compile(
    r"\s(?=(?:Bte|Btes|Boîte|Boite|Fl|Fll|Flacon|Tube|Tub|Pot|Sachets?|Blister|Plaq\w*|Amp\w*|Étui|Etui|Carton|"
    r"Bouteilles?|Bidons?|Seau|Kit|Coffret|Pqt|Paquets?|Bocal|Sac|Rouleau|Cartouche|Stylo|Seringue|Pc|Vial|Poche|"
    r"Pilulier)\b)",
    re.I,
)
RUBRIQUES = {
    "Mécanisme d'action": "mecanisme",
    "Indications": "indications",
    "Repère posologique": "posologie",
    "Précautions": "precautions",
}


# Abréviations de forme du répertoire (« Co. pell. », « Pd. pr. sol. inj. ») → mêmes
# catégories que les catalogues de firmes (filtre « Forme » de la galerie).
FORMES = [
    ("Collyre / gouttes auriculaires", r"oph|opht|occu|\baur|coll\."),
    ("Injectable", r"inj|perf|\bper\b|\binf\b|\binf\.|\biv\b|implant"),
    ("Ovule / voie vaginale", r"vag|ovu|\bov\.|bain intime|bain int|hyg"),
    ("Suppositoire", r"supp"),
    ("Pastille", r"past"),
    ("Inhalation", r"inh|nas"),
    ("Topique (crème, pommade, gel, solution cutanée)",
     r"\bcr\b|\bcr\.|pom|\bgel\b|lot|savon|top|cut|huile|pâte|dent|bain de bouche|aéro|pans|"
     r"baume|shamp|lingette|badig|sem-solid|ext\.|pulv|mousse|derm|appl|app\. ?loc"),
    ("Sirop, suspension, solution buvable", r"sir|susp|orale|buv|gtt|liq"),
    ("Sachet / poudre orale", r"\bpd|pdre|gran|grad|lait"),
    ("Gélule", r"gél|gelule|caps"),
    ("Comprimé", r"\bco\b|\bco\.|comprim|drag"),
]
ENFANT = re.compile(
    r"sir|susp|disp|gtt\.? orale|supp|infantile|pédiatr|pediatr|enfant|nourrisson|junior|baby|bébé|/ ?5 ?ml",
    re.I,
)


def categorie_forme(forme):
    f = forme.lower()
    return next((nom for nom, motif in FORMES if re.search(motif, f)), None)


def separer_forme(texte):
    parties = CONDITIONNEMENT.split(texte, 1)
    if len(parties) == 2:
        return parties[0].strip(), parties[1].strip()
    return texte, None


def slugifier(texte):
    t = unicodedata.normalize("NFD", texte).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", "-", t).strip("-")


def propre(texte):
    return re.sub(r"\s+", " ", texte or "").strip()


def blocs(document):
    """Paragraphes et tableaux dans l'ordre du document."""
    paras = {p._p: p for p in document.paragraphs}
    tables = {t._tbl: t for t in document.tables}
    for el in document.element.body.iterchildren():
        if el in paras:
            yield "p", paras[el]
        elif el in tables:
            yield "t", tables[el]


def extraire(chemin):
    document = docx.Document(chemin)
    partie = None
    meta = {"titre": None, "source": None, "avertissement": None}
    synthese, sans_amm, operateurs, firmes, groupes = [], [], [], [], []
    firme = groupe = substance = None
    section = "liste"

    for genre, bloc in blocs(document):
        if genre == "p":
            style, texte = bloc.style.name, propre(bloc.text)
            if not texte:
                continue
            if style == "Heading 1":
                partie = texte[0]
                continue
            if partie is None:
                if texte.startswith("Source :"):
                    meta["source"] = texte.split(":", 1)[1].strip()
                elif texte.startswith("Une ligne du répertoire"):
                    meta["avertissement"] = texte
                elif texte.startswith(("Produits des firmes", "Tous les produits")):
                    meta["titre"] = texte
            elif partie == "1" and texte.startswith("Firmes de la liste sans AMM"):
                sans_amm = [propre(x) for x in texte.split(":", 1)[1].rstrip(".").split(",")]
            elif partie == "2" and style == "Heading 2" and re.match(r"2[AB]\.", texte):
                section = "liste" if texte.startswith("2A") else "autre"
            elif partie == "2" and style == "Heading 2":
                nom = texte.rsplit(" — ", 1)[0].strip() if " — " in texte else texte
                firme = {"nom": nom, "section": section, "resume": texte, "produits": []}
                firmes.append(firme)
            elif partie == "2" and firme and not firme["produits"]:
                firme["roles"] = texte
            elif partie == "3" and style == "Heading 2":
                groupe = {"nom": re.sub(r"\s*\(\d+\)$", "", texte), "substances": []}
                groupes.append(groupe)
            elif partie == "3" and groupe and "·" in texte and ("présente chez" in texte or "AMM en RDC" in texte):
                # « Atropine   Anticholinergiques   ·   présente chez : New Cesamex, Unique Pharma »
                # ou « Atropine   Anticholinergiques   ·   9 AMM en RDC »
                gras = propre("".join(r.text for r in bloc.runs if r.bold))
                reste = propre(bloc.text[len(gras):] if bloc.text.startswith(gras) else bloc.text)
                classe, _, chez = reste.partition("·")
                substance = {
                    "nom": gras,
                    "slug": slugifier(gras),
                    "classe": propre(classe),
                    "groupe": groupe["nom"],
                    "presente_chez": [propre(x) for x in chez.split(":", 1)[1].split(",")] if ":" in chez else [],
                }
                nb = re.search(r"(\d+)\s+AMM en RDC", chez)
                if nb:
                    substance["nb_amm"] = int(nb.group(1))
                groupe["substances"].append(substance)
            elif partie == "3" and substance:
                etiquette, _, valeur = texte.partition(" : ")
                if etiquette in RUBRIQUES:
                    substance[RUBRIQUES[etiquette]] = valeur.strip()
        else:
            lignes = [[propre(c.text) for c in r.cells] for r in bloc.rows]
            if partie == "1" and lignes[0][0].startswith("Opérateur"):
                # Tous les opérateurs (fabricants) du répertoire
                for l in lignes[1:]:
                    operateurs.append(
                        {
                            "nom": l[0],
                            "firme_liste": l[1] or None,
                            "lignes": int(l[2] or 0),
                            "produits_distincts": int(l[3] or 0),
                            "pays": l[4] or None,
                            "importateurs": l[5] or None,
                        }
                    )
            elif partie == "1":
                for l in lignes[1:]:
                    synthese.append(
                        {
                            "firme": l[0],
                            "amm_fabricant": int(l[1] or 0),
                            "amm_importateur": int(l[2] or 0),
                            "lignes": int(l[3] or 0),
                            "produits_distincts": int(l[4] or 0),
                        }
                    )
            elif partie == "2" and firme:
                if lignes[0] not in (ENTETE_PRODUITS, ENTETE_COMPLET):
                    raise SystemExit(f"Entête de tableau inattendue pour {firme['nom']} : {lignes[0]}")
                for l in lignes[1:]:
                    p = dict(zip(["marque", "dci", "dosage", "forme", "classe", "provenance", "amm", "fiche"], l))
                    p["forme"], p["conditionnement"] = separer_forme(p["forme"])
                    p["nature"] = NATURES.get(p["fiche"], "medicament")
                    p["forme_categorie"] = categorie_forme(p["forme"])
                    p["enfant"] = bool(ENFANT.search(" ".join([p["marque"], p["forme"], p["dosage"]])))
                    firme["produits"].append(p)

    substances = [s for g in groupes for s in g["substances"]]
    incompletes = [s["nom"] for s in substances if not all(k in s for k in RUBRIQUES.values())]
    if incompletes:
        raise SystemExit(f"Fiches incomplètes : {incompletes[:10]}")
    return {
        **meta,
        "synthese": synthese,
        "firmes_sans_amm": sans_amm,
        "operateurs": operateurs,
        "firmes": firmes,
        "substances": substances,
    }


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    donnees = extraire(sys.argv[1])
    sortie = Path(sys.argv[2]) if len(sys.argv) > 2 else SORTIE
    sortie.write_text(json.dumps(donnees, ensure_ascii=False, indent=1), encoding="utf-8")
    nb = sum(len(f["produits"]) for f in donnees["firmes"])
    print(f"{len(donnees['firmes'])} firmes, {nb} lignes AMM, {len(donnees['substances'])} fiches → {sortie}")


if __name__ == "__main__":
    main()
