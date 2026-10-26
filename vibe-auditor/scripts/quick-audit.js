#!/usr/bin/env node
/**
 * VIBE-AUDITOR v2 - Fast + Billing Friendly Scanner
 * MADE BY ALI HASSAN | FOUNDER AURALIX INC. SHORKOT | PIAIC FAISALABAD
 */
const fs = require('fs');
const { execSync } = require('child_process');
const target = process.argv[2] || '.';
const mode = process.argv[3] || 'fast';

console.log(`
==============================================
  VIBE-AUDITOR v2.0 PRO MAX
  MADE BY ALI HASSAN | AURALIX INC.
  Mode: ${mode.toUpperCase()} | Target: ${target}
==============================================
`);

function count(pattern, dir) {
  try {
    const cmd = `grep -r "${pattern}" ${dir} --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" 2>/dev/null | wc -l`;
    return parseInt(execSync(cmd, {encoding:'utf8'}).trim());
  } catch { return 0; }
}

const checks = [
  { check: 'P0 - dangerouslySetInnerHTML (XSS)', count: count('dangerouslySetInnerHTML', target) },
  { check: 'P0 - Hardcoded secrets (sk-, apiKey)', count: count('sk-\|apiKey\s*[:=]', target) },
  { check: 'P0 - eval() usage', count: count('eval\(', target) },
  { check: 'P1 - console.log left', count: count('console\.log', target) },
  { check: 'P1 - TODO/FIXME', count: count('TODO\|FIXME', target) },
  { check: 'P1 - Mock data (lorem, John Doe)', count: count('lorem\|John Doe\|example\.com', target) },
  { check: 'P2 - any type abuse', count: count(': any', target) },
  { check: 'P2 - @ts-ignore', count: count('@ts-ignore\|@ts-nocheck', target) },
  { check: 'P2 - <img> not next/image', count: count('<img', target) },
  { check: 'P1 - Missing alt (img without alt)', count: count('<img((?!alt).)*>', target) },
];

console.table(checks);
const p0 = checks.filter(c=>c.check.startsWith('P0') && c.count>0).length;
console.log(`\nVibe Risk: ${p0>0 ? '🔥 FIRE HAZARD - Fix P0 now' : '⚠️ Needs review'}`);
console.log('Run /vibe-auditor deep for full 60+ checks + report\n');
