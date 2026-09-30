import { MapPin, Clock3, Phone, MessageCircle, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import {
  HOURS,
  ADDRESS,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "@/data/barbershop";

export default function Visit() {
  return (
    <section id="visit" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold-500">
            Find Us
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Walk In <span className="text-gold-grad">Sharp</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* location card */}
          <Reveal>
            <div className="card-edge flex h-full flex-col rounded-3xl bg-coal-900 p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                <MapPin className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-white">
                The Lounge
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-zinc-300">
                {ADDRESS}
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Street parking available · 2 min from Giga Mall road
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-coal-950 shadow-[0_0_28px_rgba(212,175,55,0.4)] transition-all hover:bg-gold-400"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gold-500/40 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-gold-300 transition-all hover:bg-gold-500 hover:text-coal-950"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
                className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-gold-300"
              >
                <Phone className="h-4 w-4 text-gold-500" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>

          {/* hours card */}
          <Reveal delay={120}>
            <div className="card-edge flex h-full flex-col rounded-3xl bg-coal-900 p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                <Clock3 className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-white">
                Opening Hours
              </h3>
              <ul className="mt-6 flex-1 divide-y divide-white/[0.07]">
                {HOURS.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                      {h.days}
                    </span>
                    <span className="text-right text-sm text-gold-300">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl border border-gold-500/25 bg-gold-500/[0.07] px-4 py-3 text-sm text-zinc-400">
                <span className="font-semibold text-gold-300">Pro tip:</span>{" "}
                evenings fill fast — book your slot a day ahead on WhatsApp.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
