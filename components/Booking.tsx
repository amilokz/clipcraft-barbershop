"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  Clock3,
  UserCheck,
  Scissors,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import Reveal from "./Reveal";
import {
  SERVICES,
  BARBERS,
  TIME_SLOTS,
  WHATSAPP_NUMBER,
  formatPKR,
} from "@/data/barbershop";

function prettyDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function Booking() {
  const [barberId, setBarberId] = useState("any");
  const [serviceId, setServiceId] = useState(SERVICES[0].id);
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState<string | null>(null);

  // Allow "Book with <barber>" buttons to preselect the barber here.
  useEffect(() => {
    const onPick = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (BARBERS.some((b) => b.id === id)) setBarberId(id);
    };
    window.addEventListener("clipcraft:barber", onPick);
    return () => window.removeEventListener("clipcraft:barber", onPick);
  }, []);

  const service = SERVICES.find((s) => s.id === serviceId) ?? SERVICES[0];
  const barber =
    barberId === "any" ? null : (BARBERS.find((b) => b.id === barberId) ?? null);

  const valid = Boolean(serviceId && date && time);

  const waLink = useMemo(() => {
    if (!valid || !time) return "#";
    const lines = [
      "Assalam-o-Alaikum ClipCraft! I would like to book an appointment:",
      "",
      `Service: ${service.name} (${formatPKR(service.price)})`,
      `Barber: ${barber ? barber.name : "Any available barber"}`,
      `Date: ${prettyDate(date)}`,
      `Time: ${time}`,
      "",
      "Please confirm my slot. Thank you!",
    ];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [valid, time, service, barber, date]);

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-coal-950 px-4 py-3.5 text-white outline-none transition-colors focus:border-gold-500/70";

  return (
    <section id="booking" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-gold-500/[0.07] blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold-500">
            Reserve Your Chair
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Book in <span className="text-gold-grad">60 Seconds</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Pick your barber, service and slot — we confirm instantly on
            WhatsApp. No advance payment, no waiting in line.
          </p>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-gold-500/25 bg-coal-900 shadow-[0_0_80px_rgba(212,175,55,0.1)]">
            <div className="border-b border-white/10 bg-gradient-to-r from-gold-500/15 to-transparent px-6 py-5 sm:px-8">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                Your Appointment
              </h3>
              <p className="text-sm text-zinc-500">
                {formatPKR(service.price)} · {service.duration}
                {barber ? ` · with ${barber.name}` : ""}
              </p>
            </div>

            <div className="grid gap-6 px-6 py-7 sm:grid-cols-2 sm:px-8">
              {/* service */}
              <div>
                <label
                  htmlFor="bk-service"
                  className="mb-2 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-zinc-300"
                >
                  <Scissors className="h-4 w-4 text-gold-500" />
                  Service
                </label>
                <select
                  id="bk-service"
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className={inputCls}
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} — {formatPKR(s.price)}
                    </option>
                  ))}
                </select>
              </div>

              {/* barber */}
              <div>
                <label
                  htmlFor="bk-barber"
                  className="mb-2 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-zinc-300"
                >
                  <UserCheck className="h-4 w-4 text-gold-500" />
                  Barber
                </label>
                <select
                  id="bk-barber"
                  value={barberId}
                  onChange={(e) => setBarberId(e.target.value)}
                  className={inputCls}
                >
                  <option value="any">Any available barber</option>
                  {BARBERS.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name} — {b.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* date */}
              <div>
                <label
                  htmlFor="bk-date"
                  className="mb-2 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-zinc-300"
                >
                  <CalendarDays className="h-4 w-4 text-gold-500" />
                  Date
                </label>
                <input
                  id="bk-date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`${inputCls} [color-scheme:dark]`}
                />
              </div>

              {/* time */}
              <div>
                <span className="mb-2 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                  <Clock3 className="h-4 w-4 text-gold-500" />
                  Time Slot
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`rounded-lg border px-1 py-2 text-xs font-semibold transition-all ${
                        time === t
                          ? "border-gold-500 bg-gold-500 text-coal-950 shadow-[0_0_16px_rgba(212,175,55,0.45)]"
                          : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-gold-500/50 hover:text-gold-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* summary + CTA */}
            <div className="border-t border-white/10 px-6 py-6 sm:px-8">
              <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2
                    className={`h-4 w-4 ${serviceId ? "text-gold-500" : "text-zinc-600"}`}
                  />
                  {service.name}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2
                    className={`h-4 w-4 ${date ? "text-gold-500" : "text-zinc-600"}`}
                  />
                  {date ? prettyDate(date) : "Pick a date"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2
                    className={`h-4 w-4 ${time ? "text-gold-500" : "text-zinc-600"}`}
                  />
                  {time ?? "Pick a time"}
                </span>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!valid) e.preventDefault();
                }}
                aria-disabled={!valid}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold uppercase tracking-wider transition-all ${
                  valid
                    ? "bg-gold-500 text-coal-950 shadow-[0_0_36px_rgba(212,175,55,0.45)] hover:bg-gold-400"
                    : "cursor-not-allowed bg-zinc-800 text-zinc-500"
                }`}
              >
                <MessageCircle className="h-5 w-5" />
                {valid ? "Confirm on WhatsApp" : "Select a time slot"}
              </a>
              <p className="mt-3 text-center text-xs text-zinc-600">
                Free cancellation up to 2 hours before your slot.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
