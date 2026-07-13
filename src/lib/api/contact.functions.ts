import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { SUPPORTED_LANGS } from "@/i18n";
import { appendContactSubmissionToSheet } from "../google-sheets.server";
import { sendContactEmails } from "../resend.server";

// Shared between the client (react-hook-form + zodResolver, for inline
// validation in ContactForm) and the server (.inputValidator below, as a
// safety net for requests that bypass client JS). Messages are short i18n
// keys ("required" / "invalidEmail"), not display text -- ContactForm looks
// the real, language-specific copy up in t.contactForm.errors so validation
// stays bilingual instead of baking in zod's English defaults.
//
// Required fields mirror the asterisk already present in contactForm.fields
// copy (name, email, need) in both en.ts/fr.ts; company/phone/budget/message
// stay optional.
export const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: "required" }),
  company: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, { message: "required" })
    .email({ message: "invalidEmail" }),
  phone: z.string().trim().optional(),
  need: z.string().trim().min(1, { message: "required" }),
  budget: z.string().trim().optional(),
  message: z.string().trim().optional(),
  // Honeypot: a hidden field real users never fill in (see ContactForm).
  // Bots that auto-fill every input trip it; never shown/validated in the UI.
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Server-fn-only extension: adds `lang` so the auto-reply email can be sent
// in the submitter's language. `lang` isn't a user-editable form field --
// it comes from useLang() on the client (see ContactForm.onSubmit) -- so
// it's kept out of contactFormSchema/ContactFormValues, which stay exactly
// the react-hook-form-facing 8 fields.
const submitContactFormSchema = contactFormSchema.extend({
  lang: z.enum(SUPPORTED_LANGS),
});

// Invoked from the client after react-hook-form + zodResolver already
// passed: await submitContactForm({ data: { ...values, lang } })
// The .handler body runs server-only and is tree-shaken from the client
// bundle; the schema above (module-level) ships to the client, which is
// intentional since it's reused by zodResolver.
export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(submitContactFormSchema)
  .handler(async ({ data }) => {
    if (data.website) {
      // Honeypot tripped -- pretend success so the bot gets no signal it
      // was caught, but skip logging/processing the submission.
      return { success: true as const };
    }

    const record = {
      submittedAt: new Date().toISOString(),
      name: data.name,
      company: data.company ?? "",
      email: data.email,
      phone: data.phone ?? "",
      need: data.need,
      budget: data.budget ?? "",
      message: data.message ?? "",
      lang: data.lang,
    };

    // Best-effort delivery: a Google Sheets or Resend outage must never
    // surface as a failed submission to the user -- their data already
    // passed validation and was accepted. Log with enough context to
    // diagnose from server logs, but always resolve success to the client.
    const [sheetResult, emailResult] = await Promise.allSettled([
      appendContactSubmissionToSheet(record),
      sendContactEmails(record),
    ]);
    if (sheetResult.status === "rejected") {
      console.error("[contact] Google Sheets append failed:", sheetResult.reason);
    }
    if (emailResult.status === "rejected") {
      console.error("[contact] Resend dispatch failed:", emailResult.reason);
    }

    return { success: true as const };
  });
