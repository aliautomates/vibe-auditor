@echo off
REM MADE BY ALI HASSAN | FOUNDER AURALIX INC.
echo === VIBE-AUDITOR GitHub Push (Windows) ===
set /p USERNAME=Enter your GitHub username: 
set /p REPO=Enter repo name (default vibe-auditor): 
if "%REPO%"=="" set REPO=vibe-auditor

git init
git add .
git commit -m "feat: vibe-auditor v2 PRO MAX - MADE BY ALI HASSAN | AURALIX INC."
git branch -M main
git remote add origin https://github.com/%USERNAME%/%REPO%.git
git push -u origin main

echo Done! Now go to GitHub and make it public.
pause
