import Image from "next/image";
import { gallery } from "@/lib/services";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  return (
    <section id="gallery" className="border-t border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading eyebrow="Gallery" title="Work from the chair." />
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {gallery.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-sm ${
                i % 5 === 0 ? "aspect-[4/5]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
