import { it, type Translations } from './it'
import { en } from './en'

export type Lang = 'it' | 'en'
export type { Translations }

export function t(lang: Lang): Translations {
  return lang === 'en' ? en : it
}
