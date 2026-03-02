---
description: Analyze current frontend architecture and generate improvement recommendations
---

# Architecture Audit Workflow

## Purpose
Perform comprehensive analysis of existing frontend system architecture, identify issues, and generate actionable recommendations.

## Prerequisites
- Access to the codebase
- Ability to run build commands
- Access to production or staging environment

## Steps

### Step 1: Automated Analysis

Run the following commands to gather data:

```bash
# Bundle analysis
// turbo
npm run build -- --analyze

# Lighthouse audit (requires running dev server)
// turbo
npx lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html

# Check bundle size
// turbo
npx source-map-explorer dist/*.js --no-open
```

### Step 2: Code Structure Analysis

Examine the following:

1. **Folder Structure**
   - Is it feature-based or type-based?
   - Are components properly separated?
   - Is there a clear API layer?

2. **State Management**
   - What state management is used?
   - Is server state separated from UI state?
   - Are there duplicate API calls?

3. **Rendering Strategy**
   - What rendering methods are used?
   - Is it appropriate for each page type?
   - Are there SEO issues?

### Step 3: Performance Analysis

Check the following metrics:

1. **Core Web Vitals**
   - LCP (Largest Contentful Paint)
   - INP (Interaction to Next Paint)
   - CLS (Cumulative Layout Shift)

2. **Bundle Size**
   - Total JS bundle size
   - CSS bundle size
   - Unused dependencies

3. **Network**
   - Number of requests
   - Waterfall analysis
   - Caching headers

### Step 4: Generate Report

Create a structured report with:

```markdown
# Architecture Audit Report

## Executive Summary
- Overall health score
- Critical issues count
- Quick wins available

## Current Architecture
- Framework and version
- Rendering strategy per page
- State management approach
- Build configuration

## Performance Metrics
| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| LCP    | X.Xs    | <2.5s  | ❌/✅  |
| INP    | X.Xms   | <200ms | ❌/✅  |
| CLS    | X.XX    | <0.1   | ❌/✅  |
| Bundle | XXXKB   | <300KB | ❌/✅  |

## Page Classification
| Page | Current | Recommended | Priority |
|------|---------|-------------|----------|

## Issues Found
### Critical
- [Issue description and fix]

### High
- [Issue description and fix]

### Medium
- [Issue description and fix]

## Recommendations
1. [Priority 1 recommendation]
2. [Priority 2 recommendation]
...

## Implementation Roadmap
- Week 1: [Quick wins]
- Week 2-4: [Major improvements]
- Month 2+: [Long-term investments]
```

### Step 5: Present Findings

Summarize key findings for the user:
- Top 3 critical issues
- Top 3 quick wins
- Recommended next steps
