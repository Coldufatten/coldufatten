"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/i18n/dictionaries";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { locale } = useLanguage();
  const t = getDictionary(locale);
  const c = t.contact;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setSending(true);

    const form = e.currentTarget;
    const data = {
      naam: (form.elements.namedItem("naam") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefoon: (form.elements.namedItem("telefoon") as HTMLInputElement).value,
      bericht: (form.elements.namedItem("bericht") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error ?? c.errorGeneric);
      } else {
        setSubmitted(true);
      }
    } catch {
      setErrorMsg(c.errorNetwork);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-[#3a5a40] text-white pt-20 pb-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/60 uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            {c.headerSubtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {c.title}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            {c.intro}
          </p>
        </div>
      </section>

      {/* Two-column contact section */}
      <section className="bg-[#f2ede4] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Left: contact details */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-[#3a5a40]">
                {c.detailsTitle}
              </h2>
              <address className="not-italic text-[#4a4a4a] text-lg leading-relaxed space-y-1">
                <p className="font-semibold text-[#3a5a40]">Col du Fatten</p>
                <p>Fattenbergstraat 18</p>
                <p>6191 ER Beek</p>
                <p>{c.country}</p>
                <div className="pt-3 flex flex-col gap-1">
                  <a href="mailto:coldufatten@gmail.com" className="text-[#3a5a40] hover:underline underline-offset-4 transition-colors">
                    coldufatten@gmail.com
                  </a>
                  <a href="tel:+31657681200" className="text-[#3a5a40] hover:underline underline-offset-4 transition-colors">
                    +31 6 57 68 12 00
                  </a>
                  <a href="tel:+31622976659" className="text-[#3a5a40] hover:underline underline-offset-4 transition-colors">
                    +31 6 22 97 66 59
                  </a>
                </div>
              </address>
            </div>

            {/* Right: contact form */}
            <div>
              <h2 className="text-2xl font-bold text-[#3a5a40] mb-6">
                {c.formTitle}
              </h2>

              {submitted ? (
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                  <p className="text-[#3a5a40] font-semibold text-lg mb-2">{c.successTitle}</p>
                  <p className="text-[#4a4a4a]">{c.successText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="naam" className="text-sm font-medium text-[#3a5a40]">
                      {c.labelName} <span aria-hidden="true">*</span>
                    </label>
                    <input id="naam" name="naam" type="text" required autoComplete="name"
                      className="rounded-xl border border-[#c8bfb0] bg-white px-4 py-3 text-[#2c2c2c] placeholder:text-[#a0998e] focus:outline-none focus:ring-2 focus:ring-[#3a5a40] transition"
                      placeholder={c.placeholderName} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-[#3a5a40]">
                      {c.labelEmail} <span aria-hidden="true">*</span>
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email"
                      className="rounded-xl border border-[#c8bfb0] bg-white px-4 py-3 text-[#2c2c2c] placeholder:text-[#a0998e] focus:outline-none focus:ring-2 focus:ring-[#3a5a40] transition"
                      placeholder={c.placeholderEmail} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="telefoon" className="text-sm font-medium text-[#3a5a40]">
                      {c.labelPhone}{" "}
                      <span className="text-[#8a7968] font-normal">{c.labelPhoneOptional}</span>
                    </label>
                    <input id="telefoon" name="telefoon" type="tel" autoComplete="tel"
                      className="rounded-xl border border-[#c8bfb0] bg-white px-4 py-3 text-[#2c2c2c] placeholder:text-[#a0998e] focus:outline-none focus:ring-2 focus:ring-[#3a5a40] transition"
                      placeholder={c.placeholderPhone} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="bericht" className="text-sm font-medium text-[#3a5a40]">
                      {c.labelMessage} <span aria-hidden="true">*</span>
                    </label>
                    <textarea id="bericht" name="bericht" required rows={5}
                      className="rounded-xl border border-[#c8bfb0] bg-white px-4 py-3 text-[#2c2c2c] placeholder:text-[#a0998e] focus:outline-none focus:ring-2 focus:ring-[#3a5a40] transition resize-none"
                      placeholder={c.placeholderMessage} />
                  </div>

                  {errorMsg && (
                    <p role="alert" className="text-red-700 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      {errorMsg}
                    </p>
                  )}

                  <button type="submit" disabled={sending}
                    className="self-start bg-[#3a5a40] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#2e4a34] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                    {sending ? c.btnSending : c.btnSend}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col gap-5">
          <p className="text-[#4a4a4a] text-lg leading-relaxed">{c.ctaText}</p>
          <div>
            <Link href="/beschikbaarheid"
              className="inline-block bg-[#3a5a40] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#2e4a34] transition-colors">
              {t.common.viewAvailability}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
