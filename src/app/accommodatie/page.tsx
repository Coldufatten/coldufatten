"use client";

import Image from "next/image";
import Link from "next/link";
import FloorPlanGallery from "@/components/FloorPlanGallery";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/i18n/dictionaries";

const amenityIcons = ["🅿️", "📶", "🚪", "🛏️"];

function GalleryImage({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 66vw"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 py-4">
        <p className="text-white text-sm font-medium drop-shadow">{caption}</p>
      </div>
    </div>
  );
}

export default function AccommodatiePage() {
  const { locale } = useLanguage();
  const t = getDictionary(locale);
  const a = t.accommodatie;

  return (
    <>
      {/* Page hero */}
      <section className="relative w-full" style={{ height: "60vh", minHeight: "320px" }}>
        <Image
          src="/Binnenplaats-overdag.JPG"
          alt="Col du Fatten courtyard"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <p className="text-white/70 uppercase tracking-[0.3em] text-xs font-semibold drop-shadow mb-3">
            {a.heroSubtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
            {a.heroTitle}
          </h1>
          <p className="mt-4 text-white/85 text-lg md:text-xl max-w-xl leading-relaxed drop-shadow">
            {a.heroText}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-14">
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#f2ede4" />
          </svg>
        </div>
      </section>

      {/* Intro text */}
      <section className="bg-[#f2ede4] pt-10 pb-6 md:pb-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#3a5a40] mb-5">
            {a.introTitle}
          </h2>
          <p className="text-[#4a4a4a] leading-relaxed text-lg">
            {a.introText}
          </p>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-[#f2ede4] pt-6 pb-14 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#3a5a40] text-center mb-10">
            {a.galleryTitle}
          </h2>

          <div className="flex flex-col gap-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GalleryImage src="/Bibliotheek.JPG" alt="Bibliotheek" caption={a.captions.bibliotheek} className="md:col-span-2 aspect-[16/9]" />
              <GalleryImage src="/Pianokamer.JPG" alt="Pianokamer" caption={a.captions.pianokamer} className="md:col-span-1 aspect-[4/3] md:aspect-auto" />
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GalleryImage src="/eetruimte.JPG" alt="Eetruimte" caption={a.captions.eetruimte} className="aspect-[4/3]" />
              <GalleryImage src="/Slaapkamer-1.JPG" alt="Slaapkamer 1" caption={a.captions.slaapkamer1} className="aspect-[4/3]" />
              <GalleryImage src="/Slaapkamer-2.JPG" alt="Slaapkamer 2" caption={a.captions.slaapkamer2} className="aspect-[4/3]" />
            </div>
            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GalleryImage src="/Badkamer.JPG" alt="Badkamer" caption={a.captions.badkamer} className="md:col-span-1 aspect-[4/3] md:aspect-auto" />
              <GalleryImage src="/Grote-achtertuin.JPG" alt="Grote achtertuin" caption={a.captions.achtertuin} className="md:col-span-2 aspect-[16/9]" />
            </div>
            {/* Row 4 */}
            <div className="grid grid-cols-1 gap-4">
              <GalleryImage src="/Binnenplaats-avond.JPG" alt="Binnenplaats avond" caption={a.captions.binnenplaatsAvond} className="aspect-[21/9] md:aspect-[21/7]" />
            </div>
          </div>
        </div>
      </section>

      {/* Voorzieningen / Amenities */}
      <section className="bg-[#f2ede4] py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#3a5a40] text-center mb-10">
            {a.amenitiesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {a.amenities.map((label, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 flex items-center gap-4">
                <span className="text-2xl">{amenityIcons[i]}</span>
                <span className="text-[#4a4a4a] text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slapen & verblijf */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#3a5a40] mb-6">
            {a.sleepTitle}
          </h2>
          <div className="text-[#4a4a4a] leading-relaxed text-lg space-y-4">
            {a.sleepTexts.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Slaapmogelijkheden galerij */}
      <section className="bg-[#f2ede4] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#3a5a40] text-center mb-10">
            {a.sleepGalleryTitle}
          </h2>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "/activiteiten/verhuur 061.JPG",
                "/activiteiten/verhuur 063.JPG",
              ].map((src, i) => (
                <div key={src} className="relative rounded-2xl overflow-hidden shadow-md bg-white">
                  <img src={src} alt={a.sleepCaptions[i]} className="w-full h-auto" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4">
                    <p className="text-white text-sm font-medium drop-shadow">{a.sleepCaptions[i]}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              {[
                "/activiteiten/verhuur 064.JPG",
                "/activiteiten/verhuur 074.JPG",
              ].map((src, i) => (
                <div key={src} className="relative rounded-2xl overflow-hidden shadow-md bg-white w-full sm:w-[calc(33.333%-0.35rem)]">
                  <img src={src} alt={a.sleepCaptions[2 + i]} className="w-full h-auto" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4">
                    <p className="text-white text-sm font-medium drop-shadow">{a.sleepCaptions[2 + i]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plattegronden */}
      <section className="bg-[#f2ede4] py-14">
        <div className="max-w-[90rem] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#3a5a40] text-center mb-10">
            {a.floorPlansTitle}
          </h2>
          <FloorPlanGallery />
        </div>
      </section>

      {/* Huisregels */}
      <section className="bg-[#f2ede4] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#3a5a40] mb-6">
            {a.houseRulesTitle}
          </h2>
          <div className="text-[#4a4a4a] leading-relaxed text-lg space-y-4">
            {a.houseRules.map((rule, i) => (
              <p key={i}>{rule}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Zomer video */}
      <section className="bg-[#f2ede4] py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#3a5a40] mb-4">
            {a.videoTitle}
          </h2>
          <p className="text-[#4a4a4a] leading-relaxed text-lg max-w-3xl mx-auto mb-8">
            {a.videoText}
          </p>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <video className="w-full h-auto" controls preload="metadata" playsInline>
              <source src="/zomer-col-du-fatten.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#3a5a40] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl font-bold">
            {a.ctaTitle}
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            {a.ctaText}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/beschikbaarheid"
              className="bg-white text-[#3a5a40] font-semibold px-6 py-3 rounded-full hover:bg-[#f2ede4] transition-colors"
            >
              {t.common.viewAvailability}
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
