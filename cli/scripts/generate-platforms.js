import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const platforms = [
  { platform: 'antigravity', displayName: 'Antigravity', root: '.antigravity' },
  { platform: 'kiro', displayName: 'Kiro', root: '.kiro' },
  { platform: 'codex', displayName: 'Codex CLI', root: '.codex' },
  { platform: 'qoder', displayName: 'Qoder', root: '.qoder' },
  { platform: 'roocode', displayName: 'Roo Code', root: '.roocode' },
  { platform: 'gemini', displayName: 'Gemini CLI', root: '.gemini' },
  { platform: 'trae', displayName: 'Trae', root: '.trae' },
  { platform: 'opencode', displayName: 'OpenCode', root: '.opencode' },
  { platform: 'continue', displayName: 'Continue', root: '.continue' },
  { platform: 'codebuddy', displayName: 'CodeBuddy', root: '.codebuddy' },
  { platform: 'droid', displayName: 'Droid (Factory)', root: '.droid' }
];

const baseConfig = {
  installType: 'full',
  scriptPath: 'skills/frontend-system-architect/scripts/search.py',
  frontmatter: {
    name: 'frontend-system-architect',
    description: 'Frontend system architecture intelligence. Rendering decisions (SSG, SSR, CSR, ISR, Hybrid), performance optimization (Core Web Vitals), state management patterns, caching strategies, monitoring setup.'
  },
  sections: {
    quickReference: true
  },
  title: 'Frontend System Architect - Architecture Intelligence',
  description: 'Comprehensive architecture guide for Frontend systems. Contains rendering strategy decisions, performance optimization rules, state management patterns, caching strategies, and monitoring guidelines.',
  skillOrWorkflow: 'skill'
};

platforms.forEach(p => {
  const config = {
    platform: p.platform,
    displayName: p.displayName,
    ...baseConfig,
    folderStructure: {
      root: p.root,
      skillPath: 'skills/frontend-system-architect',
      filename: 'SKILL.md'
    }
  };
  
  const outputPath = path.join(__dirname, '../assets/templates/platforms', `${p.platform}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(config, null, 2) + '\n');
  console.log(`Created ${p.platform}.json`);
});

console.log(`\nTotal: ${platforms.length} platform configs created`);
