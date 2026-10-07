# -*- coding: utf-8 -*-
"""Bibliothèque pharmacologique partagée par tous les catalogues de firmes.

Chaque entrée : clé -> (DCI affichée, classe, sous-classe, mécanisme, indications,
repère posologique, précautions).
Contenu rédigé à partir des références pharmacologiques usuelles (Liste modèle OMS,
RCP) — À VALIDER par un médecin avant tout usage clinique.
"""
import importlib
import pkgutil

LIB = {}
for _m in pkgutil.iter_modules(__path__):
    _mod = importlib.import_module('lib.' + _m.name)
    for _k, _v in getattr(_mod, 'MOL', {}).items():
        if _k in LIB:
            raise SystemExit('doublon dans la bibliothèque : ' + _k)
        LIB[_k] = _v
