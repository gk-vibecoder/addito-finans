# SEO — Remaining tickets

## 1. Create OG default image
**Priority: High**
- Create `/public/og-default.png` at exactly 1200×630px
- Should show the Addito Finans logo/wordmark on a forest green background (`oklch(0.32 0.10 155)`)
- Referenced in `src/config/seo.ts` → `ogImage: "/og-default.png"`
- Until this exists, all social shares (LinkedIn, WhatsApp, etc.) will show no preview

## 2. Replace sample content files
**Priority: High**
The following files contain Acme placeholder content and should be replaced with real Addito Finans content before the site is indexed:
- `src/content/blog/hello-world.mdx` — replace with first real blog post
- `src/content/faq/sample-faq.md` — replace with real FAQ entry (other FAQ files are already correct)
- `src/content/testimonials/sample-testimonial.md` — replace with real customer testimonial

## 3. Commit untracked content files
**Priority: High**
These files exist locally but are untracked (won't deploy):
- `src/content/faq/bokforing-vad-ingar.md`
- `src/content/faq/byta-revisor.md`
- `src/content/faq/nystartat-foretag.md`
- `src/content/faq/prissattning.md`
- `src/content/testimonials/erik-bergstrom.md`
- `src/content/testimonials/karin-lindstrom.md`

## 4. EN blog/FAQ index pages
**Priority: Medium**
Check if `/en/blog` and `/en/faq` exist. If not, mirror `blog/index.astro` and `faq/index.astro` under `src/pages/en/` and use `seoEn.blog` / `seoEn.faq` for their metadata.

## 5. Swedish blog index heroDescription
**Priority: Low**
`src/pages/sv/blog/index.astro` (if it exists) may also have an Acme reference — verify and update to Addito Finans.

## 6. package.json name
**Priority: Low**
`package.json` still has `"name": "astro-starter"` — change to `"addito-web"` (cosmetic only, no SEO impact).
