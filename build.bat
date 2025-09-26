@echo off
REM Build script for contact information page

echo Building contact information page...

REM Create dist directory if it doesn't exist
if not exist dist mkdir dist

REM Build static version
echo Building static version...
if not exist dist\static mkdir dist\static
copy contact.html dist\static\ >nul
copy contact-data-browser.js dist\static\ >nul
copy index.js dist\static\ >nul
copy index.d.ts dist\static\ >nul

REM Copy dependencies for static version
if not exist dist\static\css mkdir dist\static\css
if not exist dist\static\js mkdir dist\static\js

echo Static version built in dist\static\

REM Build Vue app version
echo Building Vue app version...
cd contact-app
npm run build
cd ..

echo Vue app version built in dist\vue\

echo Build process completed!
echo Static version: dist\static\
echo Vue app version: dist\vue\