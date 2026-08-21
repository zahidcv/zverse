"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLocale, type Locale } from "@/components/locale-provider"

const LANGUAGES = [
  { code: "en", label: "🇬🇧 English" },
  { code: "de", label: "🇩🇪 Deutsch" },
] as const satisfies { code: Locale; label: string }[]

const SELECT_ITEMS = LANGUAGES.map(({ code, label }) => ({
  value: code,
  label,
}))

export function LanguageSelect() {
  const { locale, setLocale } = useLocale()

  return (
    <Select
      value={locale}
      onValueChange={(value) => value && setLocale(value)}
      items={SELECT_ITEMS}
    >
      <SelectTrigger size="sm" aria-label="Select language">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {LANGUAGES.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
