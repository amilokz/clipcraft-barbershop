import { Scissors, MessageCircle, MapPin } from "lucide-react";
import { WHATSAPP_LINK, ADDRESS, PHONE_DISPLAY } from "@/data/barbershop";

export default function Footer() {
  return (
    <footer className="relative bg-coal-950">
      <div className="barber-pole h-2 w-full" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-coal-950">
                <Scissors className="h-4.5 w-4.5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-bold uppercase tracking-[0.18em] text-white">
                Clip<span className="text-gold-grad">Craft</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              Islamabad&apos;s premium grooming lounge. Precision cuts, sculpted
              beards and old-school shaves — crafted by masters, finished to
              perfection.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-gold-300 transition-all hover:bg-gold-500 hover:text-coal-950"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-gold-500">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["#services", "Services & Pricing"],
                ["#barbers", "Our Barbers"],
                ["#booking", "Book a Chair"],
                ["#gallery", "Gallery"],
                ["#membership", "Membership"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-zinc-400 transition-colors hover:text-gold-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-gold-500">
              Visit
            </h4>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-zinc-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
              {ADDRESS}
            </p>
            <p className="mt-3 text-sm text-zinc-400">{PHONE_DISPLAY}</p>
            <p className="mt-1 text-sm text-zinc-500">
              Open daily · 11 AM – 10 PM
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row">
          <span>© 2026 ClipCraft Barbershop. All rights reserved.</span>
          <span className="uppercase tracking-widest">
            Demo website · Fictional business
          </span>
        </div>
      </div>
    </footer>
  );
}
