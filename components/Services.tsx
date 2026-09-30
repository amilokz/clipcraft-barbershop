import { Clock } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICES, formatPKR } from "@/data/barbershop";

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold-500">
            Services & Pricing
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            The <span className="text-gold-grad">Craft Menu</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Honest PKR pricing, no surprises. Every service ends with a styled
            finish and a hot-lather neckline cleanup.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 90}>
              <article className="card-edge group flex h-full items-start gap-5 rounded-2xl bg-coal-900 p-6">
                <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-400 transition-all group-hover:bg-gold-500 group-hover:text-coal-950">
                  <s.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
                      {s.name}
                    </h3>
                    <span className="price-leader hidden flex-1 sm:block" />
                    <span className="ml-auto shrink-0 font-display text-xl font-bold text-gold-400">
                      {formatPKR(s.price)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {s.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-zinc-500">
                      <Clock className="h-3.5 w-3.5 text-gold-600" />
                      {s.duration}
                    </span>
                    {s.tag && (
                      <span className="rounded-full bg-gold-500/15 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-gold-300">
                        {s.tag}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
