import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/data/barbershop";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-coal-900 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold-500">
            Word on the Street
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Gentlemen <span className="text-gold-grad">Approve</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="card-edge flex h-full flex-col rounded-2xl bg-coal-950 p-7">
                <Quote className="h-8 w-8 text-gold-600" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-300">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-display text-base font-semibold uppercase tracking-wide text-white">
                    {t.name}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gold-600">
                    {t.detail}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
