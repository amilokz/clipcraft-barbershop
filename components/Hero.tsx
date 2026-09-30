"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowRight, Star, MapPin, ChevronDown } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/barbershop";

const STATS = [
  { value: "12+", label: "Years of craft" },
  { value: "25k+", label: "Sharp cuts delivered" },
  { value: "4.9", label: "Google rating" },
  { value: "3", label: "Master barbers" },
];

export default function Hero() {
  // Respect reduced motion: show the poster frame instead of autoplaying.
  const [playVideo, setPlayVideo] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlayVideo(false);
    }
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* cinematic video backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          src="/hero.mp4"
          poster="/gallery-interior.webp"
          autoPlay={playVideo}
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-coal-950 via-coal-950/80 to-coal-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal-950 via-transparent to-coal-950/70" />
        {/* drifting gold ambience */}
        <div className="absolute -left-24 top-1/3 h-96 w-96 animate-glow-pulse rounded-full bg-gold-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300 backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            DHA Phase 2 · Islamabad
          </div>
          <h1 className="font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Sharp looks.
            <br />
            <span className="text-gold-grad">Gold standard.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Islamabad&apos;s premium grooming lounge — precision fades, sculpted
            beards and old-school hot-towel shaves, finished with obsessive
            attention to detail.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-bold uppercase tracking-wider text-coal-950 shadow-[0_0_40px_rgba(212,175,55,0.45)] transition-all hover:bg-gold-400 hover:shadow-[0_0_56px_rgba(212,175,55,0.65)]"
            >
              <MessageCircle className="h-5 w-5" />
              Book Your Chair
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold uppercase tracking-wider text-white backdrop-blur transition-all hover:border-gold-500/60 hover:text-gold-300"
            >
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-zinc-400">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
              ))}
            </span>
            Loved by 2,000+ gentlemen across the twin cities
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="sr-only"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="card-edge animate-rise rounded-2xl bg-white/[0.03] p-5 text-center backdrop-blur"
              style={{ animationDelay: `${200 + i * 120}ms` }}
            >
              <div className="font-display text-4xl font-bold text-gold-grad">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#services"
          aria-label="Scroll to services"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-float-slow text-gold-500/80 transition-colors hover:text-gold-400 md:block"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}
