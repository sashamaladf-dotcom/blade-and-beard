import { Clock, MapPin, Phone } from "lucide-react";
import { BookingForm } from "./BookingForm";

export function Contacts() {
  return (
    <section
      id="booking"
      className="border-t border-border/70 scroll-mt-24"
      aria-labelledby="booking-title"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
        <div id="contacts">
          <span className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Book your seat
          </span>
          <h2
            id="booking-title"
            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl"
          >
            Leave your number.
            <br />
            <span className="italic text-accent">We&apos;ll call you back.</span>
          </h2>
          <p className="mt-5 max-w-md text-base text-muted">
            No forms to fight with. Drop your name and phone — we&apos;ll ring
            within an hour to confirm the time.
          </p>

          <dl className="mt-12 space-y-6 text-sm">
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                  Address
                </dt>
                <dd className="mt-1 text-foreground">
                  18 Chapel Street, Downtown
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                  Phone
                </dt>
                <dd className="mt-1 text-foreground">+1 (555) 010-4242</dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                  Hours
                </dt>
                <dd className="mt-1 text-foreground">
                  Mon–Sat · 10:00 – 21:00
                  <br />
                  Sun · 12:00 – 18:00
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="border border-border bg-card p-8 md:p-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
