import type { Locale } from "@/components/locale-provider"

export type LocalizedText = Record<Locale, string>

export function localize(text: LocalizedText, locale: Locale): string {
  return text[locale]
}
