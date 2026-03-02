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

---

## Search Reference

### Available Domains

- `rendering` - Architecture decision rules
- `performance` - Optimization patterns
- `state` - State management patterns
- `caching` - Caching strategies
- `monitoring` - Observability patterns
- `tech` - Technology selection
- `antipattern` - Common mistakes to avoid

### Available Stacks

- `nextjs` - Next.js specific rules
- `react` - React SPA rules
- `vue` - Vue SPA rules
- `sveltekit` - SvelteKit specific rules
- `astro` - Astro specific rules
- `angular` - Angular rules

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
