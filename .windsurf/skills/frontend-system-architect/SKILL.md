---
name: frontend-system-architect
description: "Frontend system architecture intelligence. Rendering decisions (SSG, SSR, CSR, ISR, Hybrid), performance optimization (Core Web Vitals), state management patterns, caching strategies, monitoring setup. Actions: analyze, audit, design, recommend, optimize, refactor, review architecture. Projects: Next.js, Nuxt, SvelteKit, Astro, React, Vue, Angular, Remix. Topics: rendering strategy, page classification, bundle optimization, CDN, lazy loading, code splitting, state management, SEO, performance, scalability. Metrics: LCP, FID, INP, CLS, TTFB. Patterns: Clean Architecture, Atomic Design, Feature-based structure."
---

# Frontend System Architect - Architecture Intelligence

Comprehensive architecture guide for Frontend systems. Contains rendering strategy decisions, performance optimization rules, state management patterns, caching strategies, and monitoring guidelines.

## When to Apply

Reference these guidelines when:
- Designing new frontend architecture
- Choosing rendering strategy (SSG, SSR, CSR, ISR)
- Optimizing Core Web Vitals performance
- Setting up state management
- Planning caching and CDN strategy
- Auditing existing systems
- Selecting technology stack
- Planning migrations or refactors

## Rule Categories by Priority

| Priority | Category | Impact | Domain |
|----------|----------|--------|--------|
| 1 | Architecture Decision | CRITICAL | `rendering` |
| 2 | Performance | CRITICAL | `performance` |
| 3 | State Management | HIGH | `state` |
| 4 | Caching Strategy | HIGH | `caching` |
| 5 | SEO & Accessibility | HIGH | `rendering` |
| 6 | Monitoring | MEDIUM | `monitoring` |
| 7 | Tech Stack Selection | MEDIUM | `tech` |
| 8 | Maintainability | MEDIUM | `arch` |

---

## Quick Reference

### 1. Architecture Decision Framework (CRITICAL)

#### By Data Nature

| Data Type | Recommended Architecture |
|-----------|-------------------------|
| Static, rarely changes | **SSG** (Static Site Generation) |
| Changes periodically | **ISR** (Incremental Static Regeneration) |
| Real-time updates | **CSR** (Client-Side Rendering) |
| Per-user request + SEO | **SSR** (Server-Side Rendering) |
| Large complex system | **Hybrid** (Mixed strategies) |

#### Decision Flow (MANDATORY ORDER)

Answer these 4 questions in order:

1. **Data Freshness**: Is real-time data required?
   - Yes → SSR or CSR
   - No → SSG or ISR

2. **SEO**: Does it need good bot indexing?
   - Yes → SSG, ISR, or SSR
   - No → CSR acceptable

3. **Server Cost**: What's the server budget?
   - Low → SSG or ISR (cheaper)
   - High → SSR acceptable

4. **UX**: Does it need SPA-like smoothness?
   - Yes → CSR or Hybrid
   - No → Any strategy works

### 2. Page Classification Rules (CRITICAL)

| Page Type | Recommended Rendering | Reason |
|-----------|----------------------|--------|
| Landing Page | SSG / ISR | SEO + Speed |
| Blog / Docs | SSG | Static content, SEO |
| Product List | ISR | Periodic updates, SEO |
| Product Detail | SSR / ISR | Dynamic pricing, SEO |
| Cart / Checkout | CSR | Real-time, private |
| Dashboard | CSR | Real-time data, auth |
| Profile | CSR | User-specific, private |
| Admin Panel | CSR | Auth, real-time |
| Marketing SEO Page | SSG | SEO priority |

### 3. Performance Engineering (CRITICAL)

#### Core Web Vitals Thresholds

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | ≤2.5s | 2.5s-4.0s | >4.0s |
| FID | ≤100ms | 100ms-300ms | >300ms |
| INP | ≤200ms | 200ms-500ms | >500ms |
| CLS | ≤0.1 | 0.1-0.25 | >0.25 |
| TTFB | ≤800ms | 800ms-1800ms | >1800ms |

#### Required Tools

| Tool | Purpose |
|------|---------|
| Lighthouse | Comprehensive audit |
| Web Vitals | Real user metrics |
| Chrome DevTools | Performance profiling |
| Sentry | Error tracking + performance |
| Datadog | APM + RUM |
| Vercel Analytics | Next.js specific |

### 4. State Management Rules (HIGH)

#### State Type Separation

| State Type | Tool | Use Case |
|------------|------|----------|
| Local State | useState, signals | Component-only state |
| Global UI State | Zustand, Redux | App-wide UI state |
| Server Cache | TanStack Query | API data, caching |
| Persistent State | LocalStorage, IndexedDB | Survives refresh |

#### Anti-Patterns (NEVER DO)

- ❌ Using Redux for all server data
- ❌ Duplicate API calls without cache
- ❌ No cache strategy for server data
- ❌ Business logic in UI components
- ❌ Prop drilling for global state

### 5. Resource Optimization (HIGH)

| Technique | Implementation |
|-----------|---------------|
| CDN | Cloudflare, Vercel, AWS CloudFront |
| Lazy Loading | React.lazy(), dynamic imports |
| Code Splitting | Route-based, component-based |
| Tree Shaking | ES modules, sideEffects: false |
| Image Optimization | WebP, AVIF, next/image |
| Font Preload | `<link rel="preload">` |
| HTTP Caching | Cache-Control headers |

### 6. Caching Strategy (HIGH)

| Cache Type | Strategy | Use Case |
|------------|----------|----------|
| CDN Cache | stale-while-revalidate | Static assets |
| Server Cache | TanStack Query | API responses |
| Browser Cache | Cache-Control | Immutable assets |
| Service Worker | cache-first | Offline support |

### 7. Monitoring & Observability (MEDIUM)

#### Required Monitoring

- **Error Tracking**: Sentry, Bugsnag
- **Performance**: Web Vitals, Lighthouse CI
- **APM**: Datadog, New Relic
- **Analytics**: Vercel Analytics, Google Analytics
- **Logs**: LogRocket, Datadog Logs

#### Alert Thresholds

| Metric | Alert Threshold |
|--------|----------------|
| Error Rate | >1% of requests |
| LCP | >4.0s |
| TTFB | >1.8s |
| Bundle Size | >300KB gzip |

### 8. Tech Stack Selection (MEDIUM)

| Concern | Recommended | Alternative |
|---------|-------------|-------------|
| Framework | Next.js | Nuxt, SvelteKit, Astro |
| State | Zustand | Redux Toolkit, Jotai |
| Server Cache | TanStack Query | SWR |
| Styling | Tailwind CSS | CSS Modules |
| Monitoring | Sentry + Vercel | Datadog |
| CDN | Cloudflare | Vercel Edge |
| CI/CD | GitHub Actions | GitLab CI |
| Testing | Playwright + Vitest | Cypress + Jest |

---

## How to Use This Skill

### Step 1: Analyze Requirements

When user requests architecture help, identify:
- Project type (new, existing, migration)
- Scale (small, medium, large)
- Constraints (budget, team, timeline)
- Priorities (SEO, performance, UX)

### Step 2: Apply Decision Framework

1. Classify each page by type
2. Answer 4 decision questions per page
3. Map to rendering strategy
4. Document tradeoffs

### Step 3: Generate Architecture Report

Output structured analysis:
1. Current System Analysis
2. Page Classification Table
3. Recommended Architecture
4. Refactor Flow Diagram
5. Tech Stack Proposal
6. Scripts & Tools
7. Risk & Tradeoffs
8. Implementation Roadmap

### Step 4: Stack-Specific Guidelines

Apply framework-specific rules:
- `nextjs` - App Router, Server Components
- `nuxt` - Nitro, Server Routes
- `sveltekit` - SSR, Edge
- `astro` - Islands, Partial Hydration
- `react` - SPA patterns
- `vue` - Composition API

---

## Search Reference

### Available Domains

- `rendering` - Architecture decision rules
- `performance` - Optimization patterns
- `state` - State management patterns
- `caching` - Caching strategies
- `monitoring` - Observability patterns
- `tech` - Technology selection

### Available Stacks

- `nextjs` - Next.js specific rules
- `nuxt` - Nuxt.js specific rules
- `sveltekit` - SvelteKit specific rules
- `astro` - Astro specific rules
- `react` - React SPA rules
- `vue` - Vue SPA rules
- `angular` - Angular rules
- `remix` - Remix rules

---

## Example Workflow

### Scenario: E-commerce Site Architecture

**User Request**: "Design architecture for an e-commerce site with 10K products"

**Step 1: Analyze Requirements**
- Scale: Medium (10K products)
- SEO: Critical for products
- Real-time: Cart, inventory
- Budget: Moderate

**Step 2: Page Classification**

| Page | Rendering | Reason |
|------|-----------|--------|
| Homepage | ISR (5min) | Marketing, SEO, updates |
| Product List | ISR (1min) | SEO, frequent updates |
| Product Detail | SSR | Dynamic pricing, SEO |
| Cart | CSR | Real-time, private |
| Checkout | CSR | Secure, user-specific |
| Search | CSR | Dynamic, user-specific |
| Account | CSR | Private, auth-required |

**Step 3: Architecture Decision**
- Primary: Hybrid (ISR + SSR + CSR)
- CDN: Cloudflare for static assets
- Cache: TanStack Query for API
- State: Zustand (UI) + TanStack Query (server)

**Step 4: Tech Stack**
- Framework: Next.js 14 (App Router)
- State: Zustand + TanStack Query
- Styling: Tailwind CSS
- Monitoring: Sentry + Vercel Analytics
- Testing: Playwright + Vitest

**Step 5: Implementation Roadmap**
1. Setup Next.js with App Router
2. Implement ISR for product pages
3. Setup TanStack Query for API cache
4. Implement CSR cart/checkout
5. Configure CDN and caching headers
6. Setup monitoring and alerts
7. Performance testing and optimization

---

## Output Formats

### Architecture Analysis Report

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

---

## Pre-Delivery Checklist

### Architecture Quality
- [ ] All pages have defined rendering strategy
- [ ] Decision framework questions answered
- [ ] Tradeoffs documented and accepted

### Performance
- [ ] Core Web Vitals thresholds met
- [ ] Bundle size under 300KB gzip
- [ ] Lighthouse score >90
- [ ] Monitoring configured

### State Management
- [ ] State types properly separated
- [ ] No duplicate API calls
- [ ] Cache strategy implemented
- [ ] No business logic in UI

### SEO & Accessibility
- [ ] SEO pages use SSR/SSG/ISR
- [ ] Meta tags properly configured
- [ ] Structured data implemented
- [ ] Accessibility standards met

### Maintainability
- [ ] Clean Architecture applied
- [ ] Feature-based folder structure
- [ ] Typed API layer
- [ ] Documentation updated

---

## Constraints (NEVER VIOLATE)

- ❌ Never recommend CSR for entire site if SEO is needed
- ❌ Never recommend SSR if server budget is very low
- ❌ Never combine all state into Redux
- ❌ Never ignore monitoring and logging
- ❌ Never skip performance testing
- ❌ Never implement without cache strategy

---

## Meta Rule (IMPORTANT)

Always think like a **Frontend Architect**, not just a coder. Always ask:

- **Why** choose this architecture?
- **What** are the tradeoffs?
- **How much** does it cost?
- **Can** it scale?
- **How** do we measure success?
