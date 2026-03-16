// ─────────────────────────────────────────────────────────────────────────────
// Central SEO config — edit titles and descriptions here.
// Changes propagate to every page automatically.
//
// RULES:
//   - Do NOT include "| Addito Finans" in titles — it is appended
//     automatically by BaseLayout via titleTemplate.
//   - Descriptions: 120–160 characters, unique per page, no keyword stuffing.
//   - og.image: path relative to /public (e.g. '/og-home.png').
//     File must exist. Falls back to /og-default.svg if omitted.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Addito Finans",
  url: "https://additofinans.se",
  description: "Modern redovisning för växande företag.",
  ogImage: "/og-default.png",
  twitterHandle: "@additofinans",
};

export interface PageSeo {
  title: string;
  description: string;
  og?: { image?: string };
  noindex?: boolean;
}

export const seo = {

  // ── Core pages ─────────────────────────────────────────────────────────────

  home: {
    title: 'Modern Redovisning för Växande Företag',
    description:
      'Addito Finans hanterar din bokföring, skatteplanering och lönehantering — professionellt och pålitligt. Boka ett kostnadsfritt möte idag.',
  },

  aboutUs: {
    title: 'Om Addito Finans',
    description:
      'Lär känna teamet bakom Addito Finans. Vi är en modern redovisningsbyrå med över 15 års erfarenhet av att hjälpa svenska företag att växa.',
  },

  contact: {
    title: 'Kontakta Oss — Boka ett Kostnadsfritt Möte',
    description:
      'Redo att ta hand om din ekonomi? Boka ett kostnadsfritt inledande möte med Addito Finans idag. Vi återkommer inom 24 timmar.',
  },

  services: {
    title: 'Våra Tjänster — Skatt, Bokföring & Rådgivning',
    description:
      'Från löpande bokföring och skatteplanering till lönehantering och företagsrådgivning — Addito Finans erbjuder ett komplett utbud för ditt företag.',
  },

  faq: {
    title: 'Vanliga Frågor',
    description:
      'Svar på de vanligaste frågorna om Addito Finans — tjänster, prissättning, byte av revisor och hur vi arbetar.',
  },

  // ── Content ────────────────────────────────────────────────────────────────

  blog: {
    title: 'Blogg',
    description:
      'Råd, nyheter och insikter inom redovisning, skatt och företagsekonomi från Addito Finans.',
  },

  // ── Legal (noindex — not for search engines) ───────────────────────────────

  privacyPolicy: {
    title: 'Integritetspolicy',
    description:
      'Hur Addito Finans samlar in, använder, lagrar och skyddar dina personuppgifter i enlighet med GDPR och tillämplig dataskyddslagstiftning.',
    noindex: true,
  },

  termsOfService: {
    title: 'Användarvillkor',
    description:
      'Villkoren som gäller för din användning av Addito Finans tjänster, inklusive ansvarsbegränsningar och kontopolicyer.',
    noindex: true,
  },

} satisfies Record<string, PageSeo>;
