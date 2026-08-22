"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/i18n/dictionaries";

const photoSrcs = [
  "/activiteiten/Tuin Terras.JPG",
  "/activiteiten/Binnenplaats overdag.JPG",
  "/activiteiten/High tea.JPG",
  "/activiteiten/Stoelen in tuin.JPG",
  "/activiteiten/Feest Dansen.JPG",
  "/activiteiten/Binnenplaats avond.JPG",
];

export default function ActiviteitenPage() {
  const { locale } = useLanguage();
  const t = getDictionary(locale);
  const a = t.activiteiten;

  return (
    <>
      {/* Page header */}
      <section className="bg-[#3a5a40] text-white pt-24 pb-0 md:pb-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/60 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            {a.headerSubtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {a.title}
          </h1>
        </div>

        <div className="relative mt-4 md:mt-12 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-14">
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#f2ede4" />
          </svg>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-14">
        <div className="max-w-[90rem] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#3a5a40] text-center mb-4">
            {a.galleryTitle}
          </h2>
          <p className="text-[#4a4a4a] text-center leading-relaxed text-lg max-w-3xl mx-auto mb-10">
            {a.galleryIntro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photoSrcs.map((src, i) => (
              <div key={src} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src={src}
                  alt={a.captions[i]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4">
                  <p className="text-white text-sm font-medium drop-shadow">{a.captions[i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relax text */}
      <section className="bg-[#f2ede4] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#3a5a40] mb-6">
            {a.relaxTitle}
          </h2>
          <div className="text-[#4a4a4a] leading-relaxed text-lg space-y-4">
            {a.relaxTexts.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Amstel Gold Race video */}
      <section className="bg-white py-8 md:py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#3a5a40] mb-4">
            {a.videoTitle}
          </h2>
          <p className="text-[#4a4a4a] leading-relaxed text-lg max-w-3xl mx-auto mb-8">
            {a.videoText}
          </p>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <video className="w-full h-auto" controls preload="metadata" playsInline>
              <source src="/activiteiten/AmstelGoldrace_CdF.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
