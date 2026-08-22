"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/i18n/dictionaries";

const highlightHrefs = ["/accommodatie", "/omgeving", "/activiteiten"];
const highlightIcons = ["🏡", "🌿", "🚴"];

export default function HomePage() {
  const { locale } = useLanguage();
  const t = getDictionary(locale);
  const h = t.home;

  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden" style={{ minHeight: "75vh" }}>
        <Image
          src="/col-du-fatten.JPG"
          alt="Col du Fatten"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-40 pb-16 md:pt-56 md:pb-20 flex flex-col items-center text-center gap-6">
          <p className="text-white/70 uppercase tracking-[0.3em] text-xs font-semibold drop-shadow">
            {h.heroSubtitle}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            {h.heroTitle}{" "}
            <span className="text-[#c8e6c8]">Col du Fatten</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed drop-shadow">
            {h.heroText}
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link
              href="/accommodatie"
              className="bg-white text-[#3a5a40] font-semibold px-6 py-3 rounded-full hover:bg-[#f2ede4] transition-colors"
            >
              {h.heroBtn1}
            </Link>
            <Link
              href="/beschikbaarheid"
              className="border border-white/70 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/15 transition-colors backdrop-blur-sm"
            >
              {h.heroBtn2}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f2ede4" />
          </svg>
        </div>
      </section>

      {/* Introductie */}
      <section className="bg-[#f2ede4] pt-10 pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#3a5a40] mb-6">
            {h.introTitle}
          </h2>
          <p className="text-[#4a4a4a] leading-relaxed text-lg">
            {h.introText}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#3a5a40] text-center mb-12">
            {h.highlightsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {h.highlights.map((item, i) => (
              <Link
                key={highlightHrefs[i]}
                href={highlightHrefs[i]}
                className="group bg-[#f2ede4] rounded-2xl p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl">{highlightIcons[i]}</span>
                <h3 className="text-xl font-bold text-[#3a5a40] group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed text-sm">
                  {item.description}
                </p>
                <span className="mt-auto text-[#52796f] text-sm font-medium">
                  {t.common.readMore} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locatie-banner */}
      <section className="bg-[#3a5a40] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            {h.locationTitle}
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            {h.locationText}
          </p>
          <Link
            href="/omgeving"
            className="self-center mt-2 border border-white/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            {h.locationBtn}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f2ede4] py-20">
        <div className="max-w-2xl mx-auto px-4 text-center flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#3a5a40]">
            {h.ctaTitle}
          </h2>
          <p className="text-[#4a4a4a] text-lg leading-relaxed">
            {h.ctaText}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/beschikbaarheid"
              className="bg-[#3a5a40] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2e4a34] transition-colors"
            >
              {t.common.viewAvailability}
            </Link>
            <Link
              href="/contact"
              className="border border-[#3a5a40] text-[#3a5a40] font-semibold px-6 py-3 rounded-full hover:bg-[#3a5a40]/10 transition-colors"
            >
              {t.common.contactUs}
            </Link>
          </div>
        </div>
      </section>

      {/* Wat onze gasten zeggen */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3a5a40] text-center mb-10">
            {h.reviewsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Airbnb */}
            <div className="bg-[#f2ede4] rounded-2xl p-8 flex flex-col gap-4 items-center text-center">
              <h3 className="text-xl font-bold text-[#3a5a40]">Airbnb</h3>
              <p className="text-3xl font-bold text-[#3a5a40]">4,93 / 5</p>
              <p className="text-[#4a4a4a] text-sm">139 {h.reviewsLabel}</p>
              <p className="text-[#4a4a4a] italic">{h.reviewsFavorite}</p>
              <a
                href="https://www.airbnb.nl/rooms/3379653"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-[#3a5a40] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2e4a34] transition-colors"
              >
                {h.reviewsBtnAirbnb}
              </a>
            </div>

            {/* Booking.com */}
            <div className="bg-[#f2ede4] rounded-2xl p-8 flex flex-col gap-4 items-center text-center">
              <h3 className="text-xl font-bold text-[#3a5a40]">Booking.com</h3>
              <p className="text-3xl font-bold text-[#3a5a40]">9,7 / 10</p>
              <p className="text-[#4a4a4a] text-sm">20 {h.reviewsLabel2}</p>
              <a
                href="https://www.booking.com/hotel/nl/col-du-fatten.nl.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-[#3a5a40] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2e4a34] transition-colors"
              >
                {h.reviewsBtnBooking}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Volg Col du Fatten */}
      <section className="bg-[#3a5a40] text-white py-8 md:py-14">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl font-bold">
            {h.followTitle}
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.facebook.com/coldufatten/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#3a5a40] font-semibold px-8 py-3 rounded-full hover:bg-[#f2ede4] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/coldufatten/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#3a5a40] font-semibold px-8 py-3 rounded-full hover:bg-[#f2ede4] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
