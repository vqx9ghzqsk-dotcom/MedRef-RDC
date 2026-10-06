@echo off
rem MedRef RDC : lancement en un clic (double-cliquez sur ce fichier).
rem Verifie WAMP (MySQL), installe ce qui manque, met la base a jour sans perte,
rem puis ouvre l'API et l'interface dans deux fenetres et le site dans le navigateur.
chcp 65001 >nul
title MedRef RDC
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [X] Node.js est introuvable. Installez-le depuis https://nodejs.org puis relancez.
  pause
  exit /b 1
)

netstat -an | find ":3306" | find "LISTENING" >nul
if errorlevel 1 (
  echo [X] MySQL ne repond pas sur le port 3306.
  echo     Demarrez WampServer et attendez que son icone soit VERTE, puis relancez ce fichier.
  pause
  exit /b 1
)
echo [OK] MySQL (WAMP) est demarre.

if not exist "backend\.env" (
  copy "backend\.env.example" "backend\.env" >nul
  echo [!] Fichier backend\.env cree a partir de l'exemple : verifiez les reglages DB_*.
)
if not exist "backend\node_modules" (
  echo Installation des dependances de l'API...
  call npm --prefix backend install --no-audit --no-fund || goto :echec
)
if not exist "frontend\node_modules" (
  echo Installation des dependances de l'interface...
  call npm --prefix frontend install --no-audit --no-fund || goto :echec
)

echo Mise a jour de la base (migrations, sans perte de donnees)...
call npm --prefix backend run db:migrate --silent || goto :echec

netstat -an | find ":4000" | find "LISTENING" >nul
if errorlevel 1 (
  start "MedRef RDC - API (ne pas fermer)" cmd /k "cd /d ""%~dp0backend"" && npm run dev"
) else (
  echo [OK] L'API tourne deja sur le port 4000.
)
netstat -an | find ":5173" | find "LISTENING" >nul
if errorlevel 1 (
  start "MedRef RDC - Interface (ne pas fermer)" cmd /k "cd /d ""%~dp0frontend"" && npm run dev"
) else (
  echo [OK] L'interface tourne deja sur le port 5173.
)

echo Attente du demarrage de l'interface...
for /l %%i in (1,1,60) do (
  netstat -an | find ":5173" | find "LISTENING" >nul && goto :pret
  timeout /t 1 /nobreak >nul
)
echo [!] L'interface tarde a demarrer : regardez la fenetre "Interface" pour le detail.
pause
exit /b 1

:pret
start "" "http://localhost:5173"
echo.
echo [OK] MedRef RDC est ouvert sur http://localhost:5173
echo     Laissez les fenetres "API" et "Interface" ouvertes : les fermer arrete le site.
timeout /t 8 >nul
exit /b 0

:echec
echo [X] Une etape a echoue : lisez le message ci-dessus.
pause
exit /b 1
