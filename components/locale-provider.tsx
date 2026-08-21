"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react"

export const SUPPORTED_LOCALES = ["en", "de"] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"

const STORAGE_KEY = "zverse-locale"

function isSupportedLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

function detectBrowserLocale(): Locale {
  for (const language of navigator.languages ?? [navigator.language]) {
    const candidate = language.split("-")[0]
    if (isSupportedLocale(candidate)) return candidate
  }
  return DEFAULT_LOCALE
}

// Module-level store so every LanguageSelect instance (desktop + mobile
// nav) reads/writes the same locale without prop drilling.
let cachedLocale: Locale | null = null
const listeners = new Set<() => void>()

function getSnapshot(): Locale {
  if (cachedLocale === null) {
    const stored = localStorage.getItem(STORAGE_KEY)
    cachedLocale =
      stored && isSupportedLocale(stored) ? stored : detectBrowserLocale()
  }
  return cachedLocale
}

// Static export has no request to read a language preference from, so the
// server (and the client's first hydration pass) always renders the
// default; useSyncExternalStore swaps in the real snapshot right after.
function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function setStoreLocale(next: Locale) {
  localStorage.setItem(STORAGE_KEY, next)
  cachedLocale = next
  listeners.forEach((listener) => listener())
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setStoreLocale(next)
  }, [])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
