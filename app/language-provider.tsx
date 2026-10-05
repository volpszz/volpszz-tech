"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import type { Locale } from "./content";

const storageKey = "volpsz-locale";
const eventName = "volpsz-language-change";
let memoryLocale: Locale = "pt";
let storageWritable = true;

function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(eventName, listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(eventName, listener);
  };
}

function getSnapshot(): Locale {
  if (!storageWritable) return memoryLocale;
  try {
    return window.localStorage.getItem(storageKey) === "en" ? "en" : "pt";
  } catch {
    return memoryLocale;
  }
}

function setLocale(locale: Locale) {
  memoryLocale = locale;
  try {
    window.localStorage.setItem(storageKey, locale);
  } catch {
    // The switch remains usable when browser storage is unavailable.
    storageWritable = false;
  }
  window.dispatchEvent(new Event(eventName));
}

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => "pt" as Locale,
  );
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value)
    throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
