import { Star } from "lucide-react";
import { reviews } from "@/lib/reviews";
import { SectionHeading } from "./SectionHeading";

export function Reviews() {
  return (
    <section className="border-t border-border/70 bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Reviews"
          title="What the regulars say."
        />
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col border border-border bg-background p-8"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-xl leading-snug text-foreground">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <div className="font-medium text-foreground">{r.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted">
                  {r.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
