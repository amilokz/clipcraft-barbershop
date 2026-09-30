import Image from "next/image";
import Reveal from "./Reveal";
import { GALLERY } from "@/data/barbershop";

export default function Gallery() {
  const strip = [...GALLERY, ...GALLERY];

  return (
    <section id="gallery" className="relative overflow-hidden bg-coal-900 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold-500">
            The Work Speaks
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            From the <span className="text-gold-grad">Chair</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Real craft, zero filters. A glimpse of what leaves our chairs every
            single day.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div
          className="group relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused]">
            {strip.map((g, i) => (
              <figure
                key={`${g.src}-${i}`}
                className="card-edge relative h-60 w-80 shrink-0 overflow-hidden rounded-2xl sm:h-72 sm:w-96"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 320px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal-950/85 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 font-display text-lg font-semibold uppercase tracking-widest text-white">
                  <span className="text-gold-400">—</span> {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
