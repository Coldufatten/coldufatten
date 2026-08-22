"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/i18n/dictionaries";

export default function OmgevingPage() {
  const { locale } = useLanguage();
  const t = getDictionary(locale);
  const o = t.omgeving;

  return (
    <>
      {/* Page header */}
      <section className="bg-[#3a5a40] text-white pt-24 pb-0 md:pb-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/60 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            {o.headerSubtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {o.title}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            {o.intro}
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-14">
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#f2ede4" />
          </svg>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-[#f2ede4] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {o.cards.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 flex flex-col gap-3">
                <h2 className="text-xl font-bold text-[#3a5a40]">{item.title}</h2>
                <p className="text-[#4a4a4a] leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-[#f2ede4] py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#3a5a40] mb-4">{o.videoTitle}</h2>
          <p className="text-[#4a4a4a] leading-relaxed text-lg max-w-3xl mx-auto mb-8">{o.videoText}</p>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <video className="w-full h-auto" controls preload="metadata">
              <source src="/beleef-col-du-fatten.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Drone video */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#3a5a40] mb-4">{o.droneTitle}</h2>
          <p className="text-[#4a4a4a] leading-relaxed text-lg max-w-3xl mx-auto mb-8">{o.droneText}</p>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <video className="w-full h-auto" controls preload="metadata" playsInline>
              <source src="/drone-col-du-fatten.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#3a5a40] text-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl font-bold">{o.ctaTitle}</h2>
          <p className="text-white/80 text-lg leading-relaxed">{o.ctaText}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/beschikbaarheid" className="bg-white text-[#3a5a40] font-semibold px-6 py-3 rounded-full hover:bg-[#f2ede4] transition-colors">
              {t.common.viewAvailability}
            </Link>
            <Link href="/contact" className="border border-white/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              {t.common.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
