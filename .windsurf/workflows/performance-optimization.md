---
description: Optimize Core Web Vitals and overall frontend performance
---

# Performance Optimization Workflow

## Purpose
Systematically identify and fix performance issues to achieve good Core Web Vitals scores.

## Target Metrics

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | ≤2.5s | 2.5s-4.0s | >4.0s |
| INP | ≤200ms | 200ms-500ms | >500ms |
| CLS | ≤0.1 | 0.1-0.25 | >0.25 |
| TTFB | ≤800ms | 800ms-1800ms | >1800ms |

## Workflow Steps

### Step 1: Measure Current Performance

```bash
# Run Lighthouse
// turbo
npx lighthouse http://localhost:3000 --view

# Measure Web Vitals in browser
# Install web-vitals package and log to console
```

Record baseline metrics:
- LCP: ___
- INP: ___
- CLS: ___
- TTFB: ___
- Bundle Size: ___

### Step 2: Identify Bottlenecks

#### LCP Issues
- [ ] Large unoptimized images
- [ ] Render-blocking JavaScript
- [ ] Slow server response (TTFB)
- [ ] Missing resource preload
- [ ] Web fonts loading late

#### INP Issues
- [ ] Long JavaScript tasks
- [ ] Heavy event handlers
- [ ] Complex re-renders
- [ ] No code splitting
- [ ] Main thread blocking

#### CLS Issues
- [ ] Images without dimensions
- [ ] Dynamically injected content
- [ ] Web fonts causing layout shift
- [ ] Animations affecting layout
- [ ] Ads or embeds without reserved space

### Step 3: Apply Fixes by Priority

#### Priority 1: Critical (LCP)

**Images:**
```javascript
// Use next/image for automatic optimization
import Image from 'next/image';

<Image 
  src="/hero.jpg" 
  width={1200} 
  height={600}
  priority // For above-fold images
  alt="Hero image"
/>
```

**Preload Critical Resources:**
```html
<link rel="preload" href="/critical-font.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/hero-image.webp" as="image" />
```

**Server Response:**
- Use CDN for static assets
- Implement caching headers
- Optimize database queries
- Use edge functions where possible

#### Priority 2: Critical (INP)

**Code Splitting:**
```javascript
// Route-based splitting
const Dashboard = lazy(() => import('./Dashboard'));

// Component-based splitting
const HeavyChart = dynamic(() => import('./Chart'), { ssr: false });
```

**Optimize Event Handlers:**
```javascript
// Use requestIdleCallback for non-critical work
const handleScroll = () => {
  requestIdleCallback(() => {
    // Non-critical scroll handling
  });
};

// Debounce expensive handlers
const handleSearch = debounce((query) => {
  // Search logic
}, 300);
```

**Break Up Long Tasks:**
```javascript
// Use setTimeout to break up long tasks
function processLargeArray(array) {
  const chunk = array.splice(0, 100);
  // Process chunk
  
  if (array.length > 0) {
    setTimeout(() => processLargeArray(array), 0);
  }
}
```

#### Priority 3: High (CLS)

**Set Image Dimensions:**
```css
img {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
}
```

**Reserve Space for Dynamic Content:**
```css
.ad-container {
  min-height: 250px;
  background: #f0f0f0;
}
```

**Font Loading:**
```css
@font-face {
  font-family: 'MyFont';
  font-display: swap; /* Prevents FOIT */
}
```

### Step 4: Bundle Optimization

```bash
# Analyze bundle
// turbo
npx webpack-bundle-analyzer dist/stats.json

# Check for duplicate dependencies
// turbo
npx depcheck
```

**Common Fixes:**
- Remove unused dependencies
- Use tree-shakeable imports
- Lazy load heavy libraries
- Replace large libraries with smaller alternatives

### Step 5: Verify Improvements

Run Lighthouse again and compare:
- LCP: ___ (improvement: ___)
- INP: ___ (improvement: ___)
- CLS: ___ (improvement: ___)
- TTFB: ___ (improvement: ___)

### Step 6: Set Up Monitoring

```javascript
// Track Web Vitals in production
import { getCLS, getLCP, getINP, getTTFB } from 'web-vitals';

getCLS(sendToAnalytics);
getLCP(sendToAnalytics);
getINP(sendToAnalytics);
getTTFB(sendToAnalytics);

function sendToAnalytics(metric) {
  // Send to your analytics service
  fetch('/analytics', {
    method: 'POST',
    body: JSON.stringify({
      name: metric.name,
      value: metric.value,
      id: metric.id,
    }),
  });
}
```

## Quick Wins Checklist

- [ ] Enable text compression (gzip/brotli)
- [ ] Add Cache-Control headers
- [ ] Use next/image for all images
- [ ] Preload critical fonts
- [ ] Implement route-based code splitting
- [ ] Remove unused CSS
- [ ] Lazy load below-fold images
- [ ] Use font-display: swap
