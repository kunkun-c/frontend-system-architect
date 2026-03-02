<p align="center">
  <a href="https://github.com/kunkun-c/frontend-system-architect/releases"><img src="https://img.shields.io/github/v/release/kunkun-c/frontend-system-architect?style=for-the-badge&color=blue" alt="GitHub Release"></a>
  <img src="https://img.shields.io/badge/architecture_rules-200+-green?style=for-the-badge" alt="200+ Architecture Rules">
  <img src="https://img.shields.io/badge/rendering_strategies-25-purple?style=for-the-badge" alt="25 Rendering Strategies">
  <img src="https://img.shields.io/badge/python-3.x-yellow?style=for-the-badge&logo=python&logoColor=white" alt="Python 3.x">
  <a href="https://github.com/kunkun-c/frontend-system-architect/blob/main/LICENSE"><img src="https://img.shields.io/github/license/kunkun-c/frontend-system-architect?style=for-the-badge&color=green" alt="License"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/fe-architect-cli"><img src="https://img.shields.io/npm/v/fe-architect-cli?style=flat-square&logo=npm&label=CLI" alt="npm"></a>
  <a href="https://www.npmjs.com/package/fe-architect-cli"><img src="https://img.shields.io/npm/dm/fe-architect-cli?style=flat-square&label=downloads" alt="npm downloads"></a>
  <a href="https://github.com/kunkun-c/frontend-system-architect/stargazers"><img src="https://img.shields.io/github/stars/kunkun-c/frontend-system-architect?style=flat-square&logo=github" alt="GitHub stars"></a>
</p>

<h1 align="center">Frontend System Architect</h1>

<p align="center">
  <b>AI-Powered Architecture Intelligence for Frontend Systems</b><br>
  <i>Rendering decisions, performance optimization, state management, caching strategies, and tech stack selection</i>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#supported-frameworks">Frameworks</a> •
  <a href="#architecture">Architecture</a>
</p>

---

## Features

- **25 Rendering Strategies** - SSG, SSR, CSR, ISR, Hybrid with decision framework
- **25 Page Classifications** - Automatic rendering recommendation by page type
- **20 Performance Metrics** - Core Web Vitals (LCP, INP, CLS, TTFB) optimization rules
- **20 State Patterns** - Local, Global, Server Cache, Persistent state separation
- **25 Caching Strategies** - CDN, Service Worker, Browser, Server caching
- **25 Tech Stack Recommendations** - Framework, state, styling, testing, monitoring
- **25 Monitoring Patterns** - Sentry, Datadog, Vercel Analytics, Lighthouse CI
- **30 Anti-Patterns** - Common mistakes with detection and fixes
- **6 Framework-Specific Guides** - Next.js, React, Vue, SvelteKit, Astro, Angular (25 patterns each)

## Installation

### Using CLI (Recommended)

```bash
# Install CLI globally
npm install -g fe-architect-cli

# Go to your project
cd /path/to/your/project

# Install for your AI assistant
fea init --ai claude      # Claude Code
fea init --ai cursor      # Cursor
fea init --ai windsurf    # Windsurf
fea init --ai antigravity # Antigravity
fea init --ai copilot     # GitHub Copilot
fea init --ai kiro        # Kiro
fea init --ai codex       # Codex CLI
fea init --ai qoder       # Qoder
fea init --ai roocode     # Roo Code
fea init --ai gemini      # Gemini CLI
fea init --ai trae        # Trae
fea init --ai opencode    # OpenCode
fea init --ai continue    # Continue
fea init --ai codebuddy   # CodeBuddy
fea init --ai droid       # Droid (Factory)
fea init --ai all         # All assistants
```

### Other CLI Commands

```bash
fea versions              # List available versions
fea update                # Update to latest version
fea init --offline        # Skip GitHub download, use bundled assets
fea search "e-commerce"   # Search architecture database
fea search "LCP" --domain performance  # Domain-specific search
```

### Using Claude Marketplace (Claude Code)

```bash
/plugin marketplace add lenhatquang2000/frontend-system-architect
/plugin install fe-architect@frontend-system-architect
```

### Manual Installation

1. Clone or download this repository
2. Copy `.windsurf/skills/frontend-system-architect/` to your project
3. Copy `src/frontend-system-architect/` to your project
4. The skill activates automatically for architecture discussions

## Usage

### Skill Mode (Auto-activate)

**Supported:** Claude Code, Cursor, Windsurf, Antigravity, Codex CLI, Continue, Gemini CLI, OpenCode, Qoder, CodeBuddy, Droid (Factory)

The skill activates automatically when you request frontend architecture work:

```
Analyze my Next.js app architecture and recommend improvements

What rendering strategy should I use for my e-commerce site?

Design a caching strategy for my dashboard application

Audit my React app performance and suggest optimizations

Help me choose between SSG and SSR for my blog

Recommend state management for my real-time dashboard
```

> **Trae**: Switch to **SOLO** mode first. The skill will activate for architecture requests.

### Workflow Mode (Slash Command)

**Supported:** Kiro, GitHub Copilot, Roo Code

```bash
/fe-architect Analyze current architecture
/fe-architect Recommend rendering strategy
/fe-architect Performance audit
/fe-architect State management review
/fe-architect Caching strategy design
```

### Example Prompts

```
Analyze my Next.js app architecture and recommend improvements

What rendering strategy for an e-commerce site with 10K products?

Design a caching strategy for a real-time dashboard

Audit my React SPA performance and suggest optimizations

Help me migrate from CSR to SSR for better SEO

Recommend tech stack for a SaaS application

Design state management for a collaborative editing app

What's the best architecture for a PWA with offline support?
```

## How It Works

1. **You ask** - Request any frontend architecture task (analyze, design, audit, optimize, recommend)
2. **Decision Framework** - AI applies the 4-question decision flow: Data Freshness → SEO → Budget → UX
3. **Architecture Analysis** - Analyzes your system against 200+ rules and patterns
4. **Smart Recommendations** - Finds optimal rendering, caching, and state strategies
5. **Implementation Guidance** - Provides step-by-step refactor flow with code examples
6. **Validation** - Checks against 30 anti-patterns and performance issues

## Decision Framework

Answer these 4 questions in order:

| Question | Options | Impact |
|----------|---------|--------|
| **1. Data Freshness** | Real-time / Periodic / Static / Per-user | Determines SSR vs SSG/ISR |
| **2. SEO** | Critical / Important / Low / None | Requires SSG/SSR if high |
| **3. Server Budget** | Low / Medium / High | SSG cheapest, SSR expensive |
| **4. UX** | SPA-like / Standard | CSR for SPA-like |

## Page Classification Quick Reference

| Page Type | Rendering | Reason |
|-----------|-----------|--------|
| Landing Page | SSG / ISR | SEO + Speed |
| Blog / Docs | SSG | Static, SEO |
| Product List | ISR | SEO + Updates |
| Product Detail | SSR / ISR | Dynamic + SEO |
| Cart / Checkout | CSR | Private, Real-time |
| Dashboard | CSR | Real-time, Auth |
| User Profile | CSR | Private |
| Admin Panel | CSR | Auth, Real-time |

## Supported Frameworks

| Category | Frameworks |
|----------|-----------|
| **Meta Frameworks** | Next.js, Nuxt.js, SvelteKit, Astro, Remix |
| **Core Frameworks** | React, Vue, Svelte, Angular |
| **State Management** | Zustand, Redux Toolkit, TanStack Query, Jotai, Recoil |
| **Styling** | Tailwind CSS, CSS Modules, Styled Components, Emotion |
| **Testing** | Playwright, Vitest, Jest, Cypress |
| **Monitoring** | Sentry, Datadog, Vercel Analytics, LogRocket |
| **CDN** | Cloudflare, Vercel Edge, AWS CloudFront |

## Architecture

```
frontend-system-architect/
├── .windsurf/
│   ├── skills/
│   │   └── frontend-system-architect/
│   │       └── SKILL.md              # Main skill definition
│   └── workflows/
│       ├── architecture-audit.md     # Audit workflow
│       ├── rendering-decision.md     # Decision framework
│       └── performance-optimization.md
├── src/frontend-system-architect/
│   ├── data/                         # CSV databases
│   │   ├── rendering-decisions.csv   # 25 rendering scenarios
│   │   ├── page-classification.csv   # 25 page types
│   │   ├── performance-metrics.csv   # 20 Core Web Vitals
│   │   ├── state-patterns.csv        # 20 state patterns
│   │   ├── caching-strategies.csv    # 25 caching strategies
│   │   ├── tech-stack.csv            # 25 tech selections
│   │   ├── monitoring-patterns.csv   # 25 monitoring tools
│   │   ├── anti-patterns.csv         # 30 anti-patterns
│   │   └── stacks/                   # Framework-specific
│   │       ├── nextjs.csv            # 25 Next.js patterns
│   │       ├── react.csv             # 25 React SPA patterns
│   │       ├── vue.csv               # 25 Vue patterns
│   │       ├── sveltekit.csv         # 25 SvelteKit patterns
│   │       ├── astro.csv             # 25 Astro patterns
│   │       └── angular.csv           # 25 Angular patterns
│   └── scripts/
│       ├── search.py                 # CLI search tool
│       └── core.py                   # BM25 search engine
├── cli/                              # CLI installer (npm)
│   ├── src/
│   │   ├── commands/init.ts          # Install command
│   │   └── utils/template.ts         # Template engine
│   └── assets/                       # Bundled assets
├── CLAUDE.md                         # Claude Code guidance
└── README.md                         # This file
```

## Search Command

```bash
python3 src/frontend-system-architect/scripts/search.py "<query>" --domain <domain>
```

**Domain search:**
- `rendering` - Rendering strategy recommendations (SSG, SSR, CSR, ISR)
- `page` - Page classification and rendering recommendations
- `performance` - Performance optimization patterns and metrics
- `state` - State management decisions and patterns
- `caching` - Caching strategy recommendations
- `monitoring` - Monitoring and observability patterns
- `tech` - Technology stack selection
- `antipattern` - Common mistakes and fixes

**Stack search:**
```bash
python3 src/frontend-system-architect/scripts/search.py "<query>" --stack <stack>
```
Available stacks: `nextjs`, `react`, `vue`, `sveltekit`, `astro`, `angular`

## Output Format

When analyzing a system, the skill produces:

```markdown
# Architecture Analysis Report

## 1. Current System Analysis
- Architecture: [Current state]
- Pain Points: [Issues identified]
- Bottlenecks: [Performance problems]

## 2. Page Classification Table
| Page | Current | Recommended | Reason |
|------|---------|-------------|--------|

## 3. Recommended Architecture
- Primary Strategy: [SSG/SSR/CSR/ISR/Hybrid]
- Decision Rationale: [Why this choice]
- Tradeoffs: [Pros and cons]

## 4. Refactor Flow
[Step-by-step implementation]

## 5. Tech Stack Proposal
| Concern | Tool | Reason |
|---------|------|--------|

## 6. Scripts & Tools
[Commands and tools to use]

## 7. Risk & Tradeoffs
- Cost: [Server/CDN costs]
- Complexity: [Team skill requirements]
- Scalability: [Growth considerations]

## 8. Implementation Roadmap
1. [Priority 1 task]
2. [Priority 2 task]
...
```

## Architecture & Contributing

### For Users

**Always use the CLI to install:**

```bash
npm install -g fe-architect-cli
fea init --ai <platform>
```

This ensures you get the latest templates and correct file structure for your AI assistant.

### For Contributors

```bash
# 1. Clone the repository
git clone https://github.com/kunkun-c/frontend-system-architect.git
cd frontend-system-architect

# 2. Understand the structure
src/frontend-system-architect/   # Source of truth (data, scripts, templates)
cli/                             # CLI installer

# 3. Make changes in src/frontend-system-architect/
# - data/*.csv              → Database files
# - scripts/*.py            → Search engine

# 4. Sync to CLI and test locally
cp -r src/frontend-system-architect/data/* cli/assets/data/
cp -r src/frontend-system-architect/scripts/* cli/assets/scripts/

# 5. Build and test CLI
cd cli && bun run build
node dist/index.js init --ai claude --offline

# 6. Create PR (never push directly to main)
git checkout -b feat/your-feature
git commit -m "feat: description"
git push -u origin feat/your-feature
gh pr create
```

## License

MIT License - See [LICENSE](LICENSE) file for details
