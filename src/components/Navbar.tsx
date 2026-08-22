"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/i18n/dictionaries";

const navHrefs = [
  "/",
  "/accommodatie",
  "/historie",
  "/activiteiten",
  "/omgeving",
  "/beschikbaarheid",
  "/contact",
] as const;

const navKeys: Array<keyof ReturnType<typeof getDictionary>["nav"]> = [
  "home",
  "accommodatie",
  "historie",
  "activiteiten",
  "omgeving",
  "beschikbaarheid",
  "contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { locale } = useLanguage();
  const t = getDictionary(locale);

  return (
    <header
      className={[
        "text-white z-20 w-full",
        isHome
          ? "absolute top-0 left-0"
          : "relative bg-[#3a5a40] shadow-md",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / site name */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl md:text-lg font-bold tracking-wide uppercase drop-shadow" style={{ fontSize: "18px" }}>
            Col du Fatten
          </span>
          <span
            className={[
              "text-xs md:text-[11px] tracking-widest uppercase drop-shadow",
              isHome ? "text-white/70" : "text-[#a8c5a0]",
            ].join(" ")}
          >
            {t.common.subtitle}
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Hoofdnavigatie"
        >
          {navKeys.map((key, i) => (
            <Link
              key={navHrefs[i]}
              href={navHrefs[i]}
              className="text-[15px] font-medium text-white/90 hover:text-white hover:underline underline-offset-4 transition-colors drop-shadow"
            >
              {t.nav[key]}
            </Link>
          ))}
          <LanguageSwitcher className="ml-5" />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white drop-shadow transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white drop-shadow transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white drop-shadow transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-black/60 backdrop-blur-sm px-4 pb-4"
          aria-label="Mobiele navigatie"
        >
          <ul className="flex flex-col gap-1">
            {navKeys.map((key, i) => (
              <li key={navHrefs[i]}>
                <Link
                  href={navHrefs[i]}
                  className="block py-2 px-2 text-white/90 hover:text-white hover:bg-white/10 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-white/10 mt-2">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
