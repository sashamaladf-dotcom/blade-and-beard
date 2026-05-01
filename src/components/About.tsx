import Image from "next/image";
import { aboutImage } from "@/lib/services";

const stats = [
  { value: "6", label: "Years in the chair" },
  { value: "4", label: "Master barbers" },
  { value: "12k+", label: "Cuts delivered" },
];

export function About() {
  return (
    <section id="about" className="border-t border-border/70 bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="relative order-2 aspect-[4/5] w-full overflow-hidden rounded-sm md:order-1">
          <Image
            src={aboutImage}
            alt="Close-up of barber's hands with scissors"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 flex flex-col justify-center md:order-2">
          <span className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            The story
          </span>
          <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            A shop built around
            <br />
            <span className="italic text-accent">craft</span>, not hype.
          </h2>
          <div className="mt-8 space-y-5 text-base text-muted">
            <p>
              Blade &amp; Beard opened in 2019 with one rule: no rushing. Every
              chair gets the same unhurried attention — a proper consultation,
              classical tools, and a finish you can see in the mirror before
              you leave.
            </p>
            <p>
              We work with imported straight razors, natural bristle brushes,
              and a rotation of small-batch grooming products you won&apos;t
              find in a supermarket. If it doesn&apos;t make the cut better, it
              doesn&apos;t make the shelf.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-3xl text-foreground">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
