export const language = {
  en: 'en',
  pt: 'pt'
} as const;

export type TLanguage = keyof typeof language;
