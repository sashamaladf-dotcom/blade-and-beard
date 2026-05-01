import Image from "next/image";
import { services } from "@/lib/services";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="border-t border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Services"
          title="A short menu, done properly."
          description="Six services, that's it. Each one sharpened over years until it became the reason people keep coming back."
        />

        <ul className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.id}
              className="group flex flex-col border-t border-border pt-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-card">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl tracking-tight text-foreground">
                  {s.title}
                </h3>
                <span className="shrink-0 font-serif text-xl text-accent">
                  ${s.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{s.description}</p>
              <span className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
                {s.duration}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
