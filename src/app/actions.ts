"use server";

import { z } from "zod";
import { escapeHtml, sendTelegramMessage } from "@/lib/telegram";
import { services } from "@/lib/services";

const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(60, "Name is too long."),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s+()\-]{7,20}$/, "Please enter a valid phone number."),
  service: z.string().trim().max(60).optional(),
  website: z.string().max(0).optional(), // honeypot
});

export type BookingState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<"name" | "phone", string>>;
};

export async function submitBooking(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const raw = {
    name: (formData.get("name") ?? "").toString(),
    phone: (formData.get("phone") ?? "").toString(),
    service: (formData.get("service") ?? "").toString(),
    website: (formData.get("website") ?? "").toString(),
  };

  const parsed = bookingSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: BookingState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "phone") {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  // Honeypot: silently pretend success
  if (parsed.data.website && parsed.data.website.length > 0) {
    return { ok: true, message: "Thanks, we'll call you back shortly." };
  }

  const serviceLabel =
    services.find((s) => s.id === parsed.data.service)?.title ||
    parsed.data.service ||
    "Any";

  const text =
    `💈 <b>New booking — Blade &amp; Beard</b>\n` +
    `Name: ${escapeHtml(parsed.data.name)}\n` +
    `Phone: ${escapeHtml(parsed.data.phone)}\n` +
    `Service: ${escapeHtml(serviceLabel)}`;

  try {
    await sendTelegramMessage(text);
  } catch (err) {
    console.error("[submitBooking] telegram failed:", err);
    return {
      ok: false,
      message:
        "Something went wrong sending your request. Please try again or call us.",
    };
  }

  return { ok: true, message: "Thanks, we'll call you back shortly." };
}
