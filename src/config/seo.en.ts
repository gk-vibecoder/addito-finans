// ─────────────────────────────────────────────────────────────────────────────
// English SEO config — used by all pages under /en/.
// Mirrors src/config/seo.ts — every page must appear here.
//
// RULES (same as seo.ts):
//   - Do NOT include "| Addito Finans" in titles — appended automatically by BaseLayout.
//   - Descriptions: 120–160 characters, unique per page.
// ─────────────────────────────────────────────────────────────────────────────

import type { PageSeo } from './seo';

export const seoEn = {

  // ── Core pages ─────────────────────────────────────────────────────────────

  home: {
    title: 'Modern Accounting for Growing Businesses',
    description:
      'Addito Finans handles your bookkeeping, tax planning, and payroll — professionally and reliably. Book a free consultation today.',
  },

  aboutUs: {
    title: 'About Addito Finans',
    description:
      'Get to know the team behind Addito Finans. A modern accounting firm with over 15 years of experience helping Swedish businesses grow.',
  },

  contact: {
    title: 'Contact Us — Book a Free Consultation',
    description:
      'Ready to get your finances in order? Book a free 30-minute consultation with Addito Finans today. We respond within 24 hours.',
  },

  services: {
    title: 'Our Services — Tax, Bookkeeping & Advisory',
    description:
      'From ongoing bookkeeping and tax planning to payroll management and business advisory — Addito Finans offers a complete range of financial services.',
  },

  faq: {
    title: 'Frequently Asked Questions',
    description:
      'Answers to the most common questions about Addito Finans — services, pricing, switching accountants, and how we work.',
  },

  // ── Content ────────────────────────────────────────────────────────────────

  blog: {
    title: 'Blog',
    description:
      'Advice, news, and insights on accounting, tax, and business finance from Addito Finans.',
  },

  // ── Legal (noindex — not for search engines) ───────────────────────────────

  privacyPolicy: {
    title: 'Privacy Policy',
    description:
      'How Addito Finans collects, uses, stores, and protects your personal data in accordance with GDPR and applicable data protection law.',
    noindex: true,
  },

  termsOfService: {
    title: 'Terms of Service',
    description:
      'The terms and conditions governing your use of Addito Finans services, including liability limitations and account policies.',
    noindex: true,
  },

} satisfies Record<string, PageSeo>;
