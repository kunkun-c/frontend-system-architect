# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Frontend System Architect is an AI-powered architecture intelligence toolkit providing searchable databases of rendering decisions, performance patterns, state management rules, caching strategies, and tech stack recommendations. It works as a skill for AI coding assistants (Claude Code, Windsurf, Cursor, etc.).

## Search Command

```bash
python3 src/frontend-system-architect/scripts/search.py "<query>" --domain <domain> [-n <max_results>]
```

**Domain search:**
- `rendering` - Rendering strategy recommendations (SSG, SSR, CSR, ISR)
- `page` - Page classification and rendering recommendations
- `performance` - Performance optimization patterns and metrics
- `state` - State management decisions and patterns
- `caching` - Caching strategy recommendations
- `monitoring` - Monitoring and observability patterns
- `tech` - Technology stack selection

**Stack search:**
```bash
python3 src/frontend-system-architect/scripts/search.py "<query>" --stack <stack>
```
Available stacks: `nextjs`, `react`, `vue`, `sveltekit`, `astro`, `angular`

## Architecture

```
frontend-system-architect/
├── .windsurf/
│   └── skills/
│       └── frontend-system-architect/
│           └── SKILL.md              # Main skill definition
├── src/
│   └── frontend-system-architect/
│       ├── data/                     # Canonical CSV databases
│       │   ├── rendering-decisions.csv
│       │   ├── page-classification.csv
│       │   ├── performance-metrics.csv
│       │   ├── state-patterns.csv
│       │   ├── caching-strategies.csv
│       │   ├── tech-stack.csv
│       │   ├── monitoring-patterns.csv
│       │   └── stacks/               # Stack-specific guidelines
│       │       ├── nextjs.csv
│       │       ├── react.csv
│       │       ├── vue.csv
│       │       ├── sveltekit.csv
│       │       ├── astro.csv
│       │       └── angular.csv
│       └── scripts/
│           ├── search.py             # CLI entry point
│           └── core.py               # BM25 + regex hybrid search engine
├── CLAUDE.md                         # This file
└── README.md                         # Project documentation
```

The search engine uses BM25 ranking combined with regex matching. Domain auto-detection is available when `--domain` is omitted.

## When to Use This Skill

Use this skill when:
- Designing new frontend architecture
- Choosing rendering strategy (SSG, SSR, CSR, ISR)
- Optimizing Core Web Vitals performance
- Setting up state management
- Planning caching and CDN strategy
- Auditing existing systems
- Selecting technology stack

## Decision Framework

Always answer these 4 questions in order:

1. **Data Freshness**: Is real-time data required?
2. **SEO**: Does it need good bot indexing?
3. **Server Cost**: What's the server budget?
4. **UX**: Does it need SPA-like smoothness?

## Prerequisites

Python 3.x (no external dependencies required)

## Git Workflow

Never push directly to `main`. Always:

1. Create a new branch: `git checkout -b feat/...` or `fix/...`
2. Commit changes
3. Push branch: `git push -u origin <branch>`
4. Create PR: `gh pr create`
