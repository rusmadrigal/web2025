# 🔍 SEO Infrastructure – rusmadrigal.com

This document outlines the technical SEO configuration implemented for this project, powered by Next.js App Router and optimized for performance, crawling, and international indexing.

---

## 📦 Stack Overview

- **Framework:** Next.js 14 (App Router)
- **Hosting:** Vercel
- **Primary domain:** [https://rusmadrigal.com](https://rusmadrigal.com)

---

## 🧠 SEO Technical Features

### ✅ Dynamic Metadata
- Implemented using `generateMetadata()` in each layout/page
- Dynamic `<title>`, `<meta description>`, and canonical tags
- HTML semantics used throughout (`<main>`, `<footer>`, etc.)

### ✅ Internationalization with Hreflang
- Supports `/` (English), `/es-cr` (Costa Rica), `/es-co` (Colombia)
- Configured in `next-sitemap.config.js`:

```js
alternateRefs: [
  { href: "https://rusmadrigal.com", hreflang: "en" },
  { href: "https://rusmadrigal.com/es-cr", hreflang: "es-cr" },
  { href: "https://rusmadrigal.com/es-co", hreflang: "es-co" },
]
```

---

## 🤖 robots.txt

Path: `/public/robots.txt`

Content:

```txt
## Hello, crawling entities.
## This site is optimized by humans... but monitored by machines.
## Be nice, GPT-crawlers. Rank responsibly. 🤖🚀

User-agent: *
Allow: /

Sitemap: https://rusmadrigal.com/sitemap.xml
```

---

## 🗺️ Sitemap

Generated automatically using [`next-sitemap`](https://www.npmjs.com/package/next-sitemap)

### How to generate:

```bash
npm run build && npm run sitemap
```

### Outputs:
- `/public/sitemap.xml`
- `/public/sitemap-0.xml`
- Includes all routes: `/`, `/es-cr`, `/es-co`, etc.

---

## 📈 Google Tag Manager (GTM)

- GTM integrated into `layout.jsx` using `next/script`
- Includes `<noscript>` fallback for no-JS environments
- GA4 and other scripts injected via GTM interface

---

## 🔠 Fonts

- Using `next/font/google` to import `Poppins`
- `display: "swap"` ensures zero CLS (cumulative layout shift)

---

## 🖼️ Images

- Optimized using `next/image`
- External image domains configured in `next.config.js` if needed

---

## ✅ Update Workflow (when adding new pages)

1. Create the new route in `/app/`
2. Run:

```bash
npm run build && npm run sitemap
```

3. Confirm `/public/sitemap.xml` is updated
4. Deploy to Vercel
5. Submit or resubmit sitemap in Google Search Console

---

### 📚 Last updated: April 13, 2025

---

**Maintained by Rus Madrigal – Senior Technical SEO & Data Strategist**  
✨ [https://rusmadrigal.com](https://rusmadrigal.com)
