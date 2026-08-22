"use client";

import { useLanguage, Locale } from "@/context/LanguageContext";

const locales: { code: Locale; label: string }[] = [
  { code: "nl", label: "NL" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
  { code: "it", label: "IT" },
];

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center">
          <button
            onClick={() => setLocale(l.code)}
            className={[
              "text-xs font-medium px-1.5 py-0.5 rounded transition-colors",
              locale === l.code
                ? "bg-white/20 text-white"
                : "text-white/60 hover:text-white",
            ].join(" ")}
            aria-label={`Taal: ${l.label}`}
            aria-current={locale === l.code ? "true" : undefined}
          >
            {l.label}
          </button>
          {i < locales.length - 1 && (
            <span className="text-white/30 text-xs">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
