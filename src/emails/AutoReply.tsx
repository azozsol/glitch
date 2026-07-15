import { Section, Text } from "@react-email/components";

import type { Lang } from "@/i18n";
import type { ContactSubmissionRecord } from "@/lib/google-sheets.server";

import { colors, EmailLayout, fontFamily } from "./components/EmailLayout";

interface AutoReplyProps {
  record: ContactSubmissionRecord;
}

const COPY: Record<Lang, { subject: string; intro: string; recap: string; signoff: string }> = {
  fr: {
    subject: "Votre message a bien été reçu — GLITCH.BE",
    intro:
      "Merci, nous avons bien reçu votre message. Notre équipe l'étudie et revient vers vous rapidement.",
    recap: "Récapitulatif de votre soumission :",
    signoff: "À très vite,\nL'équipe GLITCH.BE",
  },
  en: {
    subject: "Your message has been received — GLITCH.BE",
    intro:
      "Thanks — we've received your message. Our team is reviewing it and will be in touch soon.",
    recap: "Summary of your submission:",
    signoff: "Talk soon,\nThe GLITCH.BE team",
  },
};

export const AUTOREPLY_SUBJECT: Record<Lang, string> = {
  fr: COPY.fr.subject,
  en: COPY.en.subject,
};

const FIELD_LABELS: Record<Lang, Array<[label: string, key: keyof ContactSubmissionRecord]>> = {
  fr: [
    ["Nom", "name"],
    ["Société", "company"],
    ["Email", "email"],
    ["Téléphone", "phone"],
    ["Besoin", "need"],
    ["Budget", "budget"],
    ["Message", "message"],
  ],
  en: [
    ["Name", "name"],
    ["Company", "company"],
    ["Email", "email"],
    ["Phone", "phone"],
    ["Need", "need"],
    ["Budget", "budget"],
    ["Message", "message"],
  ],
};

export function AutoReply({ record }: AutoReplyProps) {
  const copy = COPY[record.lang];
  const fields = FIELD_LABELS[record.lang].filter(([, key]) => record[key]);

  return (
    <EmailLayout previewText={copy.intro}>
      <Text
        style={{
          margin: "0 0 20px",
          fontFamily: fontFamily.sans,
          fontSize: "15px",
          lineHeight: "1.6",
          color: colors.foreground,
        }}
      >
        {copy.intro}
      </Text>
      <Text
        style={{
          margin: "0 0 8px",
          fontFamily: fontFamily.mono,
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: colors.acid,
        }}
      >
        {copy.recap}
      </Text>
      <Section
        style={{
          backgroundColor: colors.background,
          border: `1px solid ${colors.border}`,
          borderRadius: "4px",
          padding: "16px 20px",
        }}
      >
        {fields.map(([label, key]) => (
          <Text
            key={key}
            style={{
              margin: "0 0 8px",
              fontFamily: fontFamily.sans,
              fontSize: "13px",
              lineHeight: "1.5",
              color: colors.foreground,
            }}
          >
            <span style={{ fontFamily: fontFamily.mono, color: colors.mutedForeground }}>
              {label}:
            </span>{" "}
            {record[key]}
          </Text>
        ))}
      </Section>
      <Text
        style={{
          margin: "24px 0 0",
          fontFamily: fontFamily.sans,
          fontSize: "14px",
          lineHeight: "1.6",
          color: colors.mutedForeground,
          whiteSpace: "pre-line",
        }}
      >
        {copy.signoff}
      </Text>
    </EmailLayout>
  );
}
