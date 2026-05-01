"use client";

import { useActionState } from "react";
import { ArrowRight } from "lucide-react";
import { submitBooking, type BookingState } from "@/app/actions";
import { services } from "@/lib/services";

const initialState: BookingState = { ok: false, message: "" };

export function BookingForm() {
  const [state, action, pending] = useActionState(submitBooking, initialState);

  return (
    <form
      action={action}
      className="flex flex-col gap-5"
      aria-live="polite"
      noValidate
    >
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <Field label="Full name" error={state.fieldErrors?.name}>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="John Doe"
          className="input"
        />
      </Field>

      <Field label="Phone number" error={state.fieldErrors?.phone}>
        <input
          type="tel"
          name="phone"
          required
          autoComplete="tel"
          placeholder="+1 555 123 4567"
          className="input"
        />
      </Field>

      <Field label="Service (optional)">
        <select name="service" defaultValue="" className="input">
          <option value="">Any — let the barber decide</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title} — ${s.price}
            </option>
          ))}
        </select>
      </Field>

      <button
        type="submit"
        disabled={pending}
        className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending..." : "Request a seat"}
        {!pending && (
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </button>

      {state.message && (
        <p
          className={`text-sm ${
            state.ok ? "text-accent" : "text-red-600"
          }`}
          role="status"
        >
          {state.message}
        </p>
      )}

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 14px 16px;
          font-size: 15px;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.2s;
        }
        .input:focus {
          border-color: var(--accent);
        }
        .input::placeholder {
          color: var(--muted);
          opacity: 0.6;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
