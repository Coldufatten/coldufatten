"use client";

import Link from "next/link";
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

const footerTexts = {
  nl: {
    description: "Sfeervol vakantieverblijf in het hart van Neerbeek, Limburg. Omgeven door heuvels, natuur en Bourgondische gezelligheid.",
    navigation: "Navigatie",
    contact: "Contact",
    location: "Neerbeek, Limburg",
    country: "Nederland",
    rights: "Alle rechten voorbehouden.",
  },
  en: {
    description: "Atmospheric holiday home in the heart of Neerbeek, Limburg. Surrounded by hills, nature and Burgundian hospitality.",
    navigation: "Navigation",
    contact: "Contact",
    location: "Neerbeek, Limburg",
    country: "The Netherlands",
    rights: "All rights reserved.",
  },
  de: {
    description: "Stimmungsvolles Ferienhaus im Herzen von Neerbeek, Limburg. Umgeben von Hügeln, Natur und burgundischer Gastfreundschaft.",
    navigation: "Navigation",
    contact: "Kontakt",
    location: "Neerbeek, Limburg",
    country: "Niederlande",
    rights: "Alle Rechte vorbehalten.",
  },
  fr: {
    description: "Gîte chaleureux au cœur de Neerbeek, Limbourg. Entouré de collines, de nature et de convivialité bourguignonne.",
    navigation: "Navigation",
    contact: "Contact",
    location: "Neerbeek, Limbourg",
    country: "Pays-Bas",
    rights: "Tous droits réservés.",
  },
  es: {
    description: "Casa rural con encanto en el corazón de Neerbeek, Limburg. Rodeada de colinas, naturaleza y hospitalidad borgoñona.",
    navigation: "Navegación",
    contact: "Contacto",
    location: "Neerbeek, Limburg",
    country: "Países Bajos",
    rights: "Todos los derechos reservados.",
  },
  it: {
    description: "Casa vacanze suggestiva nel cuore di Neerbeek, Limburg. Circondata da colline, natura e ospitalità borgognona.",
    navigation: "Navigazione",
    contact: "Contatto",
    location: "Neerbeek, Limburg",
    country: "Paesi Bassi",
    rights: "Tutti i diritti riservati.",
  },
};

export default function Footer() {
  const year = new Date().getFullYear();
  const { locale } = useLanguage();
  const t = getDictionary(locale);
  const ft = footerTexts[locale];

  return (
    <footer className="bg-[#3a5a40] text-white/80 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="text-white font-semibold mb-3 uppercase tracking-wide text-xs">
            Col du Fatten
          </h3>
          <p className="leading-relaxed">
            {ft.description}
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3 uppercase tracking-wide text-xs">
            {ft.navigation}
          </h3>
          <ul className="space-y-1">
            {navKeys.map((key, i) => (
              <li key={navHrefs[i]}>
                <Link
                  href={navHrefs[i]}
                  className="hover:text-white transition-colors"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3 uppercase tracking-wide text-xs">
            {ft.contact}
          </h3>
          <address className="not-italic leading-relaxed space-y-1">
            <p>Col du Fatten</p>
            <p>{ft.location}</p>
            <p>{ft.country}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {year} Col du Fatten. {ft.rights}
      </div>
    </footer>
  );
}
