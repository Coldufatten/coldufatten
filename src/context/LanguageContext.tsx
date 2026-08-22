"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "nl" | "en" | "de" | "fr" | "es" | "it";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "nl",
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("nl");
  const [mounted, setMounted] = useState(false);

  // Load saved locale from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cdf-locale") as Locale | null;
    if (saved && ["nl", "en", "de", "fr", "es", "it"].includes(saved)) {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  // Persist locale to localStorage when changed
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("cdf-locale", newLocale);
  };

  // Prevent flash of wrong language on first render
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: "nl", setLocale }}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
