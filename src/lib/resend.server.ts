import process from "node:process";
import { Resend } from "resend";

import type { ContactSubmissionRecord } from "./google-sheets.server";

// Server-only. The .server.ts suffix keeps this out of the client bundle --
// see src/lib/config.server.ts for the pattern this follows (env reads
// happen inside functions, never at module scope).

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL;
  if (!apiKey || !fromEmail || !notificationEmail) {
    throw new Error(
      "[resend] Missing RESEND_API_KEY / RESEND_FROM_EMAIL / CONTACT_NOTIFICATION_EMAIL env vars",
    );
  }
  return { apiKey, fromEmail, notificationEmail };
}

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (c) => entities[c]);
}

// Internal audience is the GLITCH team, not the submitter -- labels stay
// bilingual FR/EN regardless of record.lang so anyone can scan it.
function internalNotificationHtml(record: ContactSubmissionRecord): string {
  const row = (labelFr: string, labelEn: string, value: string) =>
    value
      ? `<tr><td><strong>${labelFr} / ${labelEn}</strong></td><td>${escapeHtml(value)}</td></tr>`
      : "";
  return `<table>
    ${row("Nom", "Name", record.name)}
    ${row("Société", "Company", record.company)}
    ${row("Email", "Email", record.email)}
    ${row("Téléphone", "Phone", record.phone)}
    ${row("Besoin", "Need", record.need)}
    ${row("Budget", "Budget", record.budget)}
    ${row("Message", "Message", record.message)}
    ${row("Langue", "Lang", record.lang)}
    ${row("Reçu le", "Received at", record.submittedAt)}
  </table>`;
}

// Auto-reply copy is server-only email content, not UI copy -- it does not
// need to go through the src/i18n Dictionary system, so a small local map
// is kept here instead.
const AUTOREPLY_COPY = {
  fr: {
    subject: "Votre message a bien été reçu — GLITCH.BE",
    intro:
      "Merci, nous avons bien reçu votre message. Notre équipe l'étudie et revient vers vous rapidement.",
    recap: "Récapitulatif de votre soumission :",
  },
  en: {
    subject: "Your message has been received — GLITCH.BE",
    intro:
      "Thanks — we've received your message. Our team is reviewing it and will be in touch soon.",
    recap: "Summary of your submission:",
  },
} as const;

function autoReplyContent(record: ContactSubmissionRecord): { subject: string; html: string } {
  const copy = AUTOREPLY_COPY[record.lang];
  const fields: Array<[string, string]> = [
    ["Name", record.name],
    ["Company", record.company],
    ["Email", record.email],
    ["Phone", record.phone],
    ["Need", record.need],
    ["Budget", record.budget],
    ["Message", record.message],
  ];
  const recap = fields
    .filter(([, value]) => value)
    .map(([label, value]) => `<li><strong>${label}:</strong> ${escapeHtml(value)}</li>`)
    .join("");
  return {
    subject: copy.subject,
    html: `<p>${copy.intro}</p><p>${copy.recap}</p><ul>${recap}</ul>`,
  };
}

// Sends both the internal team notification and the submitter's auto-reply
// copy. Never throws -- the two sends are isolated from each other via
// Promise.allSettled and any failure is logged only, since a Resend outage
// must not turn an already-accepted submission into a client-visible error
// (see submitContactForm in contact.functions.ts).
export async function sendContactEmails(record: ContactSubmissionRecord): Promise<void> {
  const { apiKey, fromEmail, notificationEmail } = getResendConfig();
  const resend = new Resend(apiKey);
  const autoReply = autoReplyContent(record);

  const [internalResult, autoReplyResult] = await Promise.allSettled([
    resend.emails.send({
      from: fromEmail,
      to: notificationEmail.split(",").map((s) => s.trim()),
      replyTo: record.email,
      subject: `New enquiry — ${record.name}${record.company ? ` (${record.company})` : ""}`,
      html: internalNotificationHtml(record),
    }),
    resend.emails.send({
      from: fromEmail,
      to: record.email,
      subject: autoReply.subject,
      html: autoReply.html,
    }),
  ]);

  if (internalResult.status === "rejected") {
    console.error("[resend] internal notification failed:", internalResult.reason);
  }
  if (autoReplyResult.status === "rejected") {
    console.error("[resend] auto-reply failed:", autoReplyResult.reason);
  }
}
