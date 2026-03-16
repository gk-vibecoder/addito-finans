# Website Brief — Addito Finans

## 1. Project Overview

| Field | Value |
|---|---|
| **Client name** | Addito Finans AB |
| **Product / service** | Full-service accounting firm for Swedish SMEs |
| **Tagline** | Ekonomin i ordning. Fokus på affärerna. |
| **Domain** | additofinans.se |
| **Status** | Initial draft — in review |

---

## 2. Brand & Visual Identity

| Field | Value |
|---|---|
| **Voice** | Professional, direct, warm. We know our stuff — no jargon. |
| **Tone** | Confident and trustworthy. Like a knowledgeable friend, not a stiff institution. |
| **Logo** | Wordmark: "Addito Finans" — Geist Variable, semibold |
| **Primary color** | Deep forest green `oklch(0.32 0.10 155)` ≈ #1A5C3A |
| **Secondary** | Soft green tint `oklch(0.94 0.03 155)` ≈ #E8F5EE |
| **Background (light)** | Cool off-white `oklch(0.977 0.005 155)` ≈ #F7FAF8 |
| **Background (dark)** | Deep green-charcoal `oklch(0.12 0.015 155)` |
| **Typography** | Geist Variable (sans), Geist Mono (mono) |
| **Aesthetic** | Clean, minimal, corporate. High contrast, generous whitespace. |
| **Dark mode** | Yes — both modes fully supported |
| **Border radius** | 0.375rem — sharper than default, more corporate |

---

## 3. Design Inspiration & References

- **Inspiration style:** YC aesthetic — clean, minimal, high contrast, no gradients
- **Reference feel:** Stripe, Linear, Plain — professional SaaS applied to professional services
- **Differentiate from:** Old-school accounting firm sites (stock photos, dark blue, serif fonts)
- **Key differentiator:** Modern, digital-first accounting firm that looks like a tech company

---

## 4. Target Audience

| Field | Value |
|---|---|
| **Primary** | Swedish SME founders and business owners (10–50 employees) |
| **Secondary** | Newly started companies needing their first accountant |
| **Geography** | Sweden (Stockholm primary) |
| **Languages** | Swedish (primary, root `/`), English (secondary, `/en/`) |

---

## 5. Services

| Service | Description |
|---|---|
| Bokföring | Ongoing accounting, always up to date |
| Skatteplanering | Proactive, legal tax optimisation |
| Lönehantering | Payroll processing, employer declarations |
| Årsredovisning | Annual reports and tax returns |
| Momshantering | VAT reporting and advisory |
| Företagsrådgivning | Financial advisory for business decisions |

---

## 6. Pages Required

- [x] Home (Swedish root `/`)
- [x] Services (`/services`)
- [x] About Us (`/about-us`)
- [x] Contact (`/contact`)
- [x] English mirrors (`/en/`, `/en/services`, `/en/about-us`, `/en/contact`)
- [x] Blog index + detail pages (existing)
- [x] FAQ index + detail pages (existing)
- [x] Privacy Policy (existing)
- [x] Terms of Service (existing)

---

## 7. Key Sections (Home page)

- [x] Hero — headline, tagline, two CTAs, trust badges
- [x] Stats strip — 500+ kunder, 15+ år, 100M+ kr
- [x] Features — 6 service cards
- [x] How it works — 3-step animated process
- [x] Testimonials — 6 client quotes
- [x] FAQ — 6 accounting Q&As
- [x] CTA — Book free meeting

---

## 8. Tech & Integrations

| Field | Value |
|---|---|
| **Framework** | Astro 5 (SSG) |
| **Styling** | Tailwind v4 + shadcn/ui |
| **CMS** | Astro Content Collections (MDX) |
| **Analytics** | TBD — add Plausible or Fathom |
| **Forms** | Static HTML form — connect to Formspree or Netlify Forms |
| **i18n** | Swedish default (root), English at `/en/` |

---

## 9. SEO

| Field | Value |
|---|---|
| **Primary keywords (SV)** | redovisningsbyrå Stockholm, bokföring företag, skatteplanering AB |
| **Primary keywords (EN)** | accounting firm Sweden, bookkeeping Stockholm, tax planning Sweden |
| **Meta description template** | [Service] för svenska företag. [Key benefit]. Boka kostnadsfritt möte. |
| **Schema type** | `AccountingService` (schema.org) |
| **OG image** | `/og-default.png` — to be created (1200×630) |

---

## 10. Content Status

| Asset | Status |
|---|---|
| Swedish copy | ✅ Complete (draft) |
| English copy | ✅ Complete (draft) |
| Team photos | ❌ Needed — using initials placeholder |
| OG image | ❌ Needed — using default |
| Real address/phone | ❌ Placeholder — replace before launch |
| Blog posts | ❌ Needed — at least 3 for launch |
| Form endpoint | ❌ Needed — connect to Formspree/Netlify |

---

## 11. Notes & Constraints

- All text uses Geist Variable — no other fonts
- CSS variables only — no hardcoded hex values
- Both light and dark mode fully supported at all times
- Swedish at root (`/`), English at `/en/` prefix
- Replace all placeholder contact details before launch
- "Boka möte" CTA links to `/contact` — no external booking tool yet
