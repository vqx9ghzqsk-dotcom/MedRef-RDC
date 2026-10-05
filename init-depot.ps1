# MedRef RDC — initialisation du dépôt Git (à lancer une fois, dans ce dossier)
#   Clic droit > "Exécuter avec PowerShell", ou :  powershell -ExecutionPolicy Bypass -File .\init-depot.ps1
$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

# 1. Remet le workflow GitHub Actions à sa place
New-Item -ItemType Directory -Force -Path '.github\workflows' | Out-Null
if (Test-Path '_a_installer\ci.yml') {
  Move-Item -Force '_a_installer\ci.yml' '.github\workflows\ci.yml'
  Remove-Item -Recurse -Force '_a_installer'
}

# 2. Crée le dépôt et le premier commit
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host 'Git n''est pas installé : https://git-scm.com/download/win' -ForegroundColor Red
  exit 1
}
if (-not (Test-Path '.git')) { git init -b main }
git add -A
git commit -m "MedRef RDC : application web complète (phase 1)"
Write-Host 'Dépôt prêt.' -ForegroundColor Green
git log --oneline -1
