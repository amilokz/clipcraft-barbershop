import { Check, Crown } from "lucide-react";
import Reveal from "./Reveal";
import { PACKAGES, formatPKR } from "@/data/barbershop";

export default function Membership() {
  return (
    <section id="membership" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold-500">
            Membership
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            The <span className="text-gold-grad">Gentleman&apos;s Club</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Monthly plans for men who never let themselves go. Pause or cancel
            anytime — no lock-ins, no fine print.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => {
            const featured = p.tag !== undefined;
            return (
              <Reveal key={p.id} delay={i * 110} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-3xl p-8 ${
                    featured
                      ? "border-2 border-gold-500 bg-gradient-to-b from-gold-500/[0.12] to-coal-900 shadow-[0_0_60px_rgba(212,175,55,0.18)]"
                      : "card-edge bg-coal-900"
                  }`}
                >
                  {p.tag && (
                    <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gold-500 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-coal-950 shadow-[0_0_24px_rgba(212,175,55,0.5)]">
                      <Crown className="h-3.5 w-3.5" />
                      {p.tag}
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">{p.tagline}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold text-gold-grad">
                      {formatPKR(p.price)}
                    </span>
                    <span className="text-sm text-zinc-500">/ month</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-2.5 text-sm text-zinc-300"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                          <Check className="h-3 w-3 text-gold-400" strokeWidth={3} />
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#booking"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-all ${
                      featured
                        ? "bg-gold-500 text-coal-950 shadow-[0_0_28px_rgba(212,175,55,0.4)] hover:bg-gold-400"
                        : "border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-coal-950"
                    }`}
                  >
                    Join {p.name}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
