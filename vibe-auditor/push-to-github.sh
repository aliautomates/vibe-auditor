#!/bin/bash
# MADE BY ALI HASSAN | FOUNDER AURALIX INC. SHORKOT | PIAIC FAISALABAD
echo "=== VIBE-AUDITOR GitHub Push ==="
echo "Enter your GitHub username:"
read USERNAME
echo "Enter repo name (default: vibe-auditor):"
read REPO
REPO=${REPO:-vibe-auditor}

git init
git add .
git commit -m "feat: vibe-auditor v2 PRO MAX - MADE BY ALI HASSAN | AURALIX INC."

echo "Creating repo https://github.com/$USERNAME/$REPO"
git branch -M main
git remote add origin https://github.com/$USERNAME/$REPO.git
git push -u origin main

echo "Done! Make it public from GitHub settings."
