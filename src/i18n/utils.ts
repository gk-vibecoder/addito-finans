import { en } from './locales/en';
import { sv } from './locales/sv';

const translations = { en, sv } as const;

export type Lang = keyof typeof translations;
export type Translations = typeof sv;

export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment === 'en') return 'en';
  return 'sv';
}

export function useTranslations(lang: Lang): Translations {
  return translations[lang] as Translations;
}

/**
 * Returns a locale-prefixed path.
 * Swedish stays at root (/about-us), English gets /en prefix (/en/about-us).
 */
export function getLocalePath(lang: Lang, path: string): string {
  if (lang === 'sv') return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/en${cleanPath}`;
}
