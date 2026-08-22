"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/i18n/dictionaries";

const planSrcs = [
  "/plattegrond-begane-grond.jpg",
  "/platte-grond-eerst-verdieping.png",
];

export default function FloorPlanGallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");
  const { locale } = useLanguage();
  const t = getDictionary(locale);
  const labels = t.accommodatie.floorPlanLabels;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        {planSrcs.map((src, i) => (
          <div key={src} className={`flex flex-col gap-3 ${i === 1 ? "md:scale-110 md:origin-bottom" : ""}`}>
            <h3 className="text-lg font-semibold text-[#3a5a40] text-center">{labels[i]}</h3>
            <button
              type="button"
              onClick={() => {
                setLightboxSrc(src);
                setLightboxAlt(labels[i]);
              }}
              className="rounded-2xl overflow-hidden shadow-md bg-white p-4 cursor-zoom-in hover:shadow-lg transition-shadow"
            >
              <img
                src={src}
                alt={labels[i]}
                className="w-full h-auto"
              />
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label={labels[0]}
        >
          <button
            type="button"
            onClick={() => setLightboxSrc(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-white/70 transition-colors z-10"
            aria-label="✕"
          >
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
