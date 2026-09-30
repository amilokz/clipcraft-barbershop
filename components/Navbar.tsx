"use client";

import { useEffect, useState } from "react";
import { Scissors, Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/barbershop";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#barbers", label: "Barbers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#membership", label: "Membership" },
  { href: "#visit", label: "Visit Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-coal-950/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-coal-950 shadow-[0_0_24px_rgba(212,175,55,0.5)]">
            <Scissors className="h-4.5 w-4.5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-[0.18em] text-white">
            Clip<span className="text-gold-grad">Craft</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-gold-400"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="hidden items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-coal-950 shadow-[0_0_24px_rgba(212,175,55,0.4)] transition-all hover:bg-gold-400 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Book Chair
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-zinc-300 hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-coal-950/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-widest text-zinc-300 hover:bg-white/5 hover:text-gold-400"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-bold uppercase tracking-wider text-coal-950"
            >
              <MessageCircle className="h-4 w-4" />
              Book Chair
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sr-only"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
