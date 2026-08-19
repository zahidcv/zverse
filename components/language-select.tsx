"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const LANGUAGES = [
  { code: "en", label: "🇬🇧 English" },
  { code: "de", label: "🇩🇪 Deutsch" },
] as const

const SELECT_ITEMS = LANGUAGES.map(({ code, label }) => ({
  value: code,
  label,
}))

export function LanguageSelect() {
  return (
    <Select defaultValue="en" items={SELECT_ITEMS}>
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
