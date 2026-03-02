# {{TITLE}}

{{DESCRIPTION}}

{{QUICK_REFERENCE}}

---

## How to Use This {{SKILL_OR_WORKFLOW}}

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
- `react` - SPA patterns
- `vue` - Composition API
- `sveltekit` - SSR, Edge
- `astro` - Islands, Partial Hydration
- `angular` - Standalone Components

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
