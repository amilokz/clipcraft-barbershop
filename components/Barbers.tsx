"use client";

import { BadgeCheck, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { BARBERS } from "@/data/barbershop";

export default function Barbers() {
  const pickBarber = (id: string) => {
    window.dispatchEvent(new CustomEvent("clipcraft:barber", { detail: id }));
  };

  return (
    <section id="barbers" className="relative bg-coal-900 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold-500">
            The Craftsmen
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Meet Your <span className="text-gold-grad">Barbers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Certified craftsmen, not just cutters. Pick your artist when you
            book — or trust whoever holds the clippers.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {BARBERS.map((b, i) => (
            <Reveal key={b.id} delay={i * 110}>
              <article className="card-edge flex h-full flex-col rounded-2xl bg-coal-950 p-8 text-center">
                <div className="relative mx-auto">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold-500/60 bg-gradient-to-br from-coal-700 to-coal-950 font-display text-3xl font-bold text-gold-grad shadow-[0_0_40px_rgba(212,175,55,0.25)]">
                    {b.monogram}
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-coal-950">
                    <BadgeCheck className="h-4.5 w-4.5" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                  {b.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-gold-500">
                  {b.title} · {b.experience}
                </p>
                <p className="mt-4 text-sm italic leading-relaxed text-zinc-400">
                  &ldquo;{b.quote}&rdquo;
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {b.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href="#booking"
                  onClick={() => pickBarber(b.id)}
                  className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full border border-gold-500/40 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-gold-300 transition-all hover:bg-gold-500 hover:text-coal-950"
                >
                  Book with {b.name.split(" ")[0]}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
