---
description: Determine optimal rendering strategy for a page or feature
---

# Rendering Decision Workflow

## Purpose
Systematically determine the best rendering architecture (SSG, SSR, CSR, ISR, or Hybrid) for a given page or feature.

## Decision Framework

Answer these 4 questions in order:

### Question 1: Data Freshness
**Is real-time or near real-time data required?**

- **Yes** → Consider SSR or CSR
- **No** → Consider SSG or ISR

**Indicators:**
- Stock prices, live scores → Real-time
- User-specific pricing → Per-request
- Blog posts, docs → Static
- Product catalog → Periodic updates

### Question 2: SEO Requirements
**Does the page need search engine indexing?**

- **Critical** → Must use SSG, ISR, or SSR
- **Important** → Prefer SSG or ISR
- **Low/None** → CSR is acceptable

**Indicators:**
- Public landing pages → Critical
- Product pages → Critical
- User dashboard → None
- Checkout → None

### Question 3: Server Budget
**What are the server/hosting constraints?**

- **Low budget** → Prefer SSG or ISR (cheapest)
- **Medium budget** → SSR acceptable
- **High budget** → Any strategy viable

**Cost comparison (lowest to highest):**
1. SSG - Static hosting (cheapest)
2. ISR - Periodic server compute
3. SSR - Per-request server compute
4. CSR - Server for API only

### Question 4: UX Requirements
**Does the user need SPA-like smooth transitions?**

- **Yes** → Consider CSR or Hybrid
- **No** → Any strategy works

**Indicators:**
- Interactive dashboards → SPA-like needed
- Content pages → Standard navigation OK
- Multi-step forms → SPA-like preferred

## Decision Matrix

| Data | SEO | Budget | UX | Recommendation |
|------|-----|--------|-----|----------------|
| Static | High | Low | Any | **SSG** |
| Periodic | High | Low | Any | **ISR** |
| Real-time | Low | Any | SPA | **CSR** |
| Per-user | High | Medium | Any | **SSR** |
| Mixed | Mixed | Medium | Mixed | **Hybrid** |

## Page Type Quick Reference

| Page Type | Default | Alternative | Reason |
|-----------|---------|-------------|--------|
| Landing Page | SSG | ISR | SEO + Speed |
| Blog/Docs | SSG | - | Static, SEO |
| Product List | ISR | SSR | SEO + Updates |
| Product Detail | SSR | ISR | Dynamic + SEO |
| Cart/Checkout | CSR | - | Private, Real-time |
| Dashboard | CSR | - | Real-time, Auth |
| User Profile | CSR | - | Private |
| Admin Panel | CSR | - | Auth, Real-time |

## Workflow Steps

### Step 1: Identify Page Type
Categorize the page or feature:
- Is it public or private?
- What type of content does it show?
- Who is the target audience?

### Step 2: Answer Decision Questions
Go through the 4 questions systematically:
1. Data Freshness: [real-time / periodic / static / per-user]
2. SEO: [critical / important / low / none]
3. Server Budget: [low / medium / high]
4. UX: [spa-like / standard]

### Step 3: Map to Strategy
Use the decision matrix to find the best match.

### Step 4: Validate Tradeoffs
Consider the tradeoffs:
- **SSG**: Fast but requires rebuild for updates
- **ISR**: Balanced but slight staleness possible
- **SSR**: Dynamic but higher server cost
- **CSR**: Smooth UX but poor SEO, large initial load

### Step 5: Document Decision
Record the decision with rationale:
```markdown
## Rendering Decision: [Page Name]

**Decision:** [SSG/SSR/CSR/ISR/Hybrid]

**Rationale:**
- Data Freshness: [reasoning]
- SEO: [reasoning]
- Server Budget: [reasoning]
- UX: [reasoning]

**Tradeoffs Accepted:**
- [tradeoff 1]
- [tradeoff 2]

**Implementation Notes:**
- [specific implementation details]
```

## Common Scenarios

### E-commerce Product Page
- Data: Per-user (pricing), Periodic (inventory)
- SEO: Critical
- Budget: Medium
- **Decision:** SSR with ISR fallback

### Real-time Dashboard
- Data: Real-time
- SEO: None
- Budget: High
- **Decision:** CSR with WebSocket

### Marketing Landing Page
- Data: Static
- SEO: Critical
- Budget: Low
- **Decision:** SSG with CDN

### User Settings Page
- Data: Per-user
- SEO: None
- Budget: Medium
- **Decision:** CSR with optimistic updates
