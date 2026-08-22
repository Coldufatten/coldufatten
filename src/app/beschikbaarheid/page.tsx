"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/i18n/dictionaries";

export default function BeschikbaarheidPage() {
  const { locale } = useLanguage();
  const t = getDictionary(locale);
  const b = t.beschikbaarheid;

  return (
    <>
      {/* Page header */}
      <section className="bg-[#3a5a40] text-white pt-24 pb-0 md:pb-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/60 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            {b.headerSubtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {b.title}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            {b.intro}
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-14">
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#f2ede4" />
          </svg>
        </div>
      </section>

      {/* Calendar */}
      <section className="bg-[#f2ede4] pt-6 pb-8 md:py-14">
        <div className="max-w-[900px] mx-auto px-2 md:px-4">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white">
            <iframe
              src="https://script.google.com/macros/s/AKfycbzLvdLrgOYG1r4AGh2sZMoSuXtqxzsgCDlK8E1DKr7u-VHuN36O5D-VQ6qiGNypu-HR/exec"
              className="w-full h-[390px] md:h-[570px]"
              style={{ border: "none", overflow: "hidden" }}
              frameBorder={0}
              scrolling="no"
              title={b.calendarTitle}
            />
          </div>
        </div>
      </section>
    </>
  );
}
