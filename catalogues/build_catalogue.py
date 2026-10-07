# -*- coding: utf-8 -*-
"""Génère un catalogue Word « par classe pharmacologique » à partir d'un JSON.
Usage : python build_catalogue.py firmes/pharmakina.json sortie.docx
Format du JSON : voir firmes/pharmakina.json. Mise en forme identique aux 6 catalogues existants.
"""
import json, os, sys
from docx import Document
from docx.shared import Pt, RGBColor, Emu, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

VIOLET, BLEU, GRIS = RGBColor(0x5B, 0x2C, 0x83), RGBColor(0x2E, 0x75, 0xB6), RGBColor(0x55, 0x55, 0x55)

def run(p, text, size, bold=False, color=None):
    r = p.add_run(text); r.font.name = 'Calibri'; r.font.size = Pt(size); r.bold = bold
    r._element.rPr.rFonts.set(qn('w:eastAsia'), 'Calibri')
    if color is not None: r.font.color.rgb = color
    return r

def para(doc, text='', size=11, bold=False, color=None, align=None, after=4):
    p = doc.add_paragraph(); p.paragraph_format.space_after = Pt(after)
    if align: p.alignment = align
    if text: run(p, text, size, bold, color)
    return p

def champ(doc, label, valeur):
    if not valeur: return
    p = doc.add_paragraph(); p.paragraph_format.space_after = Pt(2)
    run(p, label + ' : ', 10, True, VIOLET); run(p, valeur, 10)

CLASS_ORDER = ['Antipaludiques','Antibiotiques','Antiparasitaires','Antifongiques','Antiviraux','Antirétroviraux','Antituberculeux',
 'Cardiovasculaire','Antidiabétiques','Hormones et corticoïdes','Antalgiques et anti-inflammatoires','Neuropsychiatrie','Pneumologie',
 'Hépato-gastro-entérologie','Gynécologie-obstétrique','Hémostase','Anesthésie et réanimation','Oncologie','Dermatologie',
 'Immunologie et rhumatologie','Hématologie','Maladies métaboliques et enzymothérapies','Endocrinologie','Néphrologie','Antituberculeux et lèpre','Rhumatologie et métabolisme osseux','Urologie','Ophtalmologie et ORL','Antihistaminiques','Solutés et électrolytes','Vitamines et minéraux','Antiseptiques et désinfectants']

def depuis_produits(data):
    """Construit data['classes'] à partir de data['produits'] + bibliothèque pharmacologique."""
    from lib import LIB
    cls = {}
    for p in data['produits']:
        m = LIB[p['mol']]
        q = dict(nom=p['nom'], presentation=p.get('presentation'), dci=m[0], mecanisme=m[3], indications=m[4],
                 posologie=m[5], precautions=m[6], image=p.get('image'))
        q.update(p.get('ov', {}))
        cls.setdefault(p.get('classe') or m[1], {}).setdefault(p.get('sous') or m[2], []).append(q)
    ordre = sorted(cls, key=lambda c: (CLASS_ORDER.index(c) if c in CLASS_ORDER else 99, c))
    data['classes'] = [{'nom': c, 'sous': [{'nom': s, 'produits': ps} for s, ps in cls[c].items()]} for c in ordre]
    return data

def build(data, out, base):
    if 'produits' in data and 'classes' not in data: data = depuis_produits(data)
    doc = Document()
    s = doc.sections[0]; s.page_width, s.page_height = Emu(7772400), Emu(10058400)
    s.left_margin = s.right_margin = Emu(762000)
    for lvl, size, col in ((1, 18, VIOLET), (2, 13, BLEU)):
        st = doc.styles['Heading %d' % lvl]; st.font.name = 'Calibri'; st.font.size = Pt(size)
        st.font.bold = True; st.font.color.rgb = col
        st.element.rPr.rFonts.set(qn('w:asciiTheme'), 'minorHAnsi') if False else None
    C = WD_ALIGN_PARAGRAPH.CENTER
    n = sum(len(sc['produits']) for c in data['classes'] for sc in c['sous'])
    para(doc, 'CATALOGUE ' + data['firme'].upper(), 24, True, VIOLET, C, 6)
    para(doc, 'Classé par classe pharmacologique', 16, False, BLEU, C, 6)
    para(doc, '%d produit(s) · %d classe(s) pharmacologique(s)' % (n, len(data['classes'])), 13, align=C)
    para(doc, 'Source : ' + data['source'], 11, align=C)
    para(doc, "Organisation : classe pharmacologique > photo du produit > informations sur la ou les molécule(s). "
              "Les informations (mécanisme, indications, repères posologiques) sont des repères généraux de référence "
              "rédigés à partir des données pharmacologiques usuelles ; elles doivent être vérifiées sur la notice (RCP) "
              "de chaque produit et validées par un médecin avant usage clinique. " + data.get('note', ''),
         10, False, GRIS, C, 10)
    para(doc, 'Sommaire', 18, True, VIOLET, after=4)
    for i, c in enumerate(data['classes'], 1):
        k = sum(len(sc['produits']) for sc in c['sous'])
        p = para(doc, after=1); run(p, '%d. %s  ' % (i, c['nom']), 12, True); run(p, '(%d produit%s)' % (k, 's' if k > 1 else ''), 11, color=GRIS)
        for sc in c['sous']:
            if sc.get('nom'): para(doc, '    %s · %d' % (sc['nom'], len(sc['produits'])), 10, color=GRIS, after=0)
    doc.add_page_break()
    for i, c in enumerate(data['classes'], 1):
        h = doc.add_heading(level=1); run(h, '%d. %s' % (i, c['nom']), 18, True, VIOLET)
        for sc in c['sous']:
            if sc.get('nom'):
                h = doc.add_heading(level=2); run(h, sc['nom'], 13, True, BLEU)
            for pr in sc['produits']:
                img = pr.get('image')
                if img and os.path.exists(os.path.join(base, img)):
                    p = doc.add_paragraph(); p.paragraph_format.space_after = Pt(2)
                    from PIL import Image
                    w, h = Image.open(os.path.join(base, img)).size
                    k = min(9.0 / w, 5.5 / h)  # tient dans 9 x 5,5 cm
                    p.add_run().add_picture(os.path.join(base, img), width=Cm(w * k), height=Cm(h * k))
                p = para(doc, after=1); run(p, pr['nom'], 12, True)
                if pr.get('presentation'): para(doc, pr['presentation'], 10, color=GRIS, after=1)
                champ(doc, 'DCI', pr['dci']); champ(doc, "Mécanisme d'action", pr['mecanisme'])
                champ(doc, 'Indications', pr['indications']); champ(doc, 'Repère posologique', pr['posologie'])
                champ(doc, 'Précautions', pr.get('precautions'))
                para(doc, after=6)
    sec = doc.sections[0].footer.paragraphs[0]; sec.alignment = C
    run(sec, 'MedRef RDC · Catalogue %s · à valider par un médecin avant usage clinique' % data['firme'], 8, color=GRIS)
    doc.save(out)

if __name__ == '__main__':
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    src = sys.argv[1]
    build(json.load(open(src, encoding='utf-8')), sys.argv[2], os.path.dirname(os.path.abspath(src)))
