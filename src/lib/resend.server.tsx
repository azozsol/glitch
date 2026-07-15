import process from "node:process";
import { render } from "@react-email/render";
import { Resend } from "resend";

import { AUTOREPLY_SUBJECT, AutoReply } from "@/emails/AutoReply";
import { InternalNotification } from "@/emails/InternalNotification";

import type { ContactSubmissionRecord } from "./google-sheets.server";

// Server-only. The .server suffix (this file is .tsx, not .ts, purely so it
// can render the JSX email templates below) keeps it out of the client
// bundle -- see src/lib/config.server.ts for the pattern this follows (env
// reads happen inside functions, never at module scope).

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

// Sends both the internal team notification and the submitter's auto-reply
// copy. Never throws -- the two sends (render + dispatch, bundled together)
// are isolated from each other via Promise.allSettled and any failure is
// logged only, since a Resend outage -- or a template render error -- must
// not turn an already-accepted submission into a client-visible error, nor
// let one broken template block the other email from going out (see
// submitContactForm in contact.functions.ts).
export async function sendContactEmails(record: ContactSubmissionRecord): Promise<void> {
  const { apiKey, fromEmail, notificationEmail } = getResendConfig();
  const resend = new Resend(apiKey);

  const [internalResult, autoReplyResult] = await Promise.allSettled([
    (async () => {
      const html = await render(<InternalNotification record={record} />);
      return resend.emails.send({
        from: fromEmail,
        to: notificationEmail.split(",").map((s) => s.trim()),
        replyTo: record.email,
        subject: `New enquiry — ${record.name}${record.company ? ` (${record.company})` : ""}`,
        html,
      });
    })(),
    (async () => {
      const html = await render(<AutoReply record={record} />);
      return resend.emails.send({
        from: fromEmail,
        to: record.email,
        subject: AUTOREPLY_SUBJECT[record.lang],
        html,
      });
    })(),
  ]);

  if (internalResult.status === "rejected") {
    console.error("[resend] internal notification failed:", internalResult.reason);
  }
  if (autoReplyResult.status === "rejected") {
    console.error("[resend] auto-reply failed:", autoReplyResult.reason);
  }
}
