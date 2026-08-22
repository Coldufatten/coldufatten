"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/i18n/dictionaries";

const chapterSrcs = [
  "/Teun en Willie oprit Fattenberstraat.jpg",
  "/Teun, Maria Oma en Opa bij kar nr2.jpg",
  "/Maria bij op Akker.jpg",
  "/Teun Opa en Maria op veld nr2.jpg",
  "/Peter Jan en Kalf in huiswei.jpg",
  "/Peter met varkentjes.jpg",
];

export default function HistoriePage() {
  const { locale } = useLanguage();
  const t = getDictionary(locale);
  const hi = t.historie;

  return (
    <>
      {/* Page header */}
      <section className="bg-[#3a5a40] text-white pt-20 pb-10 md:pt-24 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/60 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            {hi.headerSubtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {hi.title}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            {hi.intro}
          </p>
        </div>

        {/* Wave transition */}
        <div className="relative mt-6 md:mt-12 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 50"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-10 md:h-14"
          >
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#f2ede4" />
          </svg>
        </div>
      </section>

      {/* Story chapters */}
      <section className="bg-[#f2ede4]">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-14 flex flex-col gap-12 md:gap-20">
          {hi.chapters.map((chapter, i) => {
            const imageRight = i % 2 === 0;
            return (
              <article
                key={chapterSrcs[i]}
                className={[
                  "flex flex-col gap-4 md:gap-8",
                  imageRight ? "md:flex-row" : "md:flex-row-reverse",
                ].join(" ")}
              >
                {/* Photo */}
                <div className="md:w-1/2 flex flex-col gap-3">
                  <div className="relative w-full overflow-hidden rounded-2xl shadow-md bg-white">
                    <Image
                      src={chapterSrcs[i]}
                      alt={chapter.caption}
                      width={800}
                      height={600}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto object-contain"
                      style={{ display: "block" }}
                    />
                    {/* Caption bar */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4">
                      <p className="text-white text-sm font-medium drop-shadow italic">
                        {chapter.caption}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={[
                    "md:w-1/2 flex flex-col justify-center",
                    imageRight ? "md:pl-8" : "md:pr-8",
                  ].join(" ")}
                >
                  <p className="text-[#4a4a4a] text-lg leading-relaxed">
                    {chapter.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Closing reflection */}
      <section className="bg-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#4a4a4a] text-lg leading-relaxed">
            {hi.closing}
          </p>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#3a5a40] text-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl font-bold">
            {hi.ctaTitle}
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            {hi.ctaText}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/accommodatie"
              className="bg-white text-[#3a5a40] font-semibold px-6 py-3 rounded-full hover:bg-[#f2ede4] transition-colors"
            >
              {hi.ctaBtn}
            </Link>
            <Link
              href="/contact"
              className="border border-white/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              {t.common.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
