import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { heroImage } from "@/lib/services";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:gap-16 md:pb-32 md:pt-24 lg:items-center">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Est. 2019 · Downtown
          </span>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            The art
            <br />
            of a good
            <br />
            <span className="italic text-accent">shave.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg text-muted">
            Classic haircuts, hot towel shaves and beard sculpting — performed
            by craftsmen who still believe the chair is a ritual, not a pit
            stop.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              Book a seat
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              See the menu
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
          <Image
            src={heroImage}
            alt="Barber giving a client a classic cut in a warmly lit shop"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
