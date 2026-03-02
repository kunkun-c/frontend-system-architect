import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, writeFile, cp } from 'node:fs/promises';
import type { AIType } from '../types/index.js';
import { PLATFORM_CONFIG } from '../types/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '..', '..', 'assets');

const SKILL_TEMPLATE = `---
name: frontend-system-architect
description: "Frontend system architecture intelligence. Rendering decisions (SSG, SSR, CSR, ISR, Hybrid), performance optimization (Core Web Vitals), state management patterns, caching strategies, monitoring setup. Actions: analyze, audit, design, recommend, optimize, refactor, review architecture. Projects: Next.js, Nuxt, SvelteKit, Astro, React, Vue, Angular, Remix. Topics: rendering strategy, page classification, bundle optimization, CDN, lazy loading, code splitting, state management, SEO, performance, scalability. Metrics: LCP, FID, INP, CLS, TTFB. Patterns: Clean Architecture, Atomic Design, Feature-based structure."
---

# Frontend System Architect - Architecture Intelligence

This skill provides architecture intelligence for frontend systems. It contains rules for rendering decisions, performance optimization, state management, caching strategies, and tech stack selection.

## Quick Reference

### Decision Framework (Answer in Order)

1. **Data Freshness**: Real-time? → SSR/CSR | Periodic? → ISR | Static? → SSG
2. **SEO**: Critical? → SSG/SSR/ISR | Low? → CSR OK
3. **Server Budget**: Low? → SSG/ISR | High? → SSR OK
4. **UX**: SPA-like? → CSR/Hybrid | Standard? → Any

### Page Classification

| Page Type | Rendering |
|-----------|-----------|
| Landing/Blog | SSG |
| Product List | ISR |
| Product Detail | SSR/ISR |
| Cart/Checkout | CSR |
| Dashboard | CSR |
| Admin | CSR |

### Core Web Vitals

| Metric | Good | Poor |
|--------|------|------|
| LCP | ≤2.5s | >4.0s |
| INP | ≤200ms | >500ms |
| CLS | ≤0.1 | >0.25 |

## How to Use

1. Search database: \`python3 data/../scripts/search.py "query"\`
2. Apply decision framework to each page
3. Generate architecture report
4. Validate against anti-patterns
`;

export async function generatePlatformFiles(
  targetDir: string,
  aiType: AIType
): Promise<string[]> {
  const config = PLATFORM_CONFIG[aiType];
  if (!config) {
    throw new Error(`Unknown AI type: ${aiType}`);
  }

  const skillDir = join(targetDir, config.folder);
  const copiedFolders: string[] = [];

  // Create skill directory
  await mkdir(skillDir, { recursive: true });

  // Write SKILL.md
  await writeFile(join(skillDir, 'SKILL.md'), SKILL_TEMPLATE);
  copiedFolders.push(config.folder);

  // Copy data and scripts from assets
  try {
    await cp(join(ASSETS_DIR, 'data'), join(skillDir, 'data'), { recursive: true });
    await cp(join(ASSETS_DIR, 'scripts'), join(skillDir, 'scripts'), { recursive: true });
  } catch {
    // Assets may not exist in dev mode
    console.log('Note: Assets not found, skipping data/scripts copy');
  }

  return copiedFolders;
}

export async function generateAllPlatformFiles(
  targetDir: string
): Promise<string[]> {
  const allFolders: string[] = [];

  for (const [aiType] of Object.entries(PLATFORM_CONFIG)) {
    if (aiType === 'all') continue;
    
    const folders = await generatePlatformFiles(targetDir, aiType as AIType);
    allFolders.push(...folders);
  }

  return allFolders;
}
