import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Col du Fatten – Vakantieverblijf in Neerbeek, Limburg",
  description:
    "Welkom bij Col du Fatten, een sfeervol vakantieverblijf in het hart van Neerbeek, Limburg. Geniet van rust, natuur en de rijke Limburgse cultuur.",
  keywords: "vakantie, Limburg, Neerbeek, vakantieverblijf, Col du Fatten",
  openGraph: {
    title: "Col du Fatten – Vakantieverblijf in Neerbeek, Limburg",
    description:
      "Een sfeervol vakantieverblijf in het hart van Neerbeek, Limburg.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col relative">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
