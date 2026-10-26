# vibe-auditor - Claude Skill

Elite audit skill for vibe-coded websites.

## Install

1. Copy .claude folder into your project or global:
   - Project: your-project/.claude/skills/vibe-auditor/
   - Global: ~/.claude/skills/vibe-auditor/
2. Restart Claude Code
3. Run: /vibe-auditor audit https://your-site.com

## What it does
- 7 Pillar audit: Functional, Security, Performance, Code Quality, UI/UX, SEO/Prod, Data/Edge
- Detects vibe slop: mock data, secrets, broken flows, hallucinations
- Generates VIBE_AUDIT_REPORT.md with P0-P3 fixes + code snippets
