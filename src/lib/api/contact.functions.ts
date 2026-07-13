import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

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

// Invoked from the client after react-hook-form + zodResolver already
// passed: await submitContactForm({ data: values })
// The .handler body runs server-only and is tree-shaken from the client
// bundle; the schema above (module-level) ships to the client, which is
// intentional since it's reused by zodResolver.
//
// Fast-follow (explicitly out of scope for now): replace the console.log
// with real email/CRM delivery.
export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(contactFormSchema)
  .handler(async ({ data }) => {
    if (data.website) {
      // Honeypot tripped -- pretend success so the bot gets no signal it
      // was caught, but skip logging/processing the submission.
      return { success: true as const };
    }
    console.log("[contact] new submission:", data);
    return { success: true as const };
  });
