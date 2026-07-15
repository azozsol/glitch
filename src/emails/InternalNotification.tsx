import { Column, Row, Section, Text } from "@react-email/components";

import type { ContactSubmissionRecord } from "@/lib/google-sheets.server";

import { colors, EmailLayout, fontFamily } from "./components/EmailLayout";

interface InternalNotificationProps {
  record: ContactSubmissionRecord;
}

// Audience is the GLITCH team, not the submitter -- labels stay bilingual
// FR/EN regardless of record.lang so anyone on the team can scan it.
const FIELD_ROWS: Array<[labelFr: string, labelEn: string, key: keyof ContactSubmissionRecord]> = [
  ["Nom", "Name", "name"],
  ["Société", "Company", "company"],
  ["Email", "Email", "email"],
  ["Téléphone", "Phone", "phone"],
  ["Besoin", "Need", "need"],
  ["Budget", "Budget", "budget"],
  ["Message", "Message", "message"],
  ["Langue", "Lang", "lang"],
  ["Reçu le", "Received at", "submittedAt"],
];

function FieldRow({
  labelFr,
  labelEn,
  value,
}: {
  labelFr: string;
  labelEn: string;
  value: string;
}) {
  if (!value) return null;
  return (
    <Row style={{ borderBottom: `1px solid ${colors.border}` }}>
      <Column style={{ padding: "10px 0", width: "34%", verticalAlign: "top" }}>
        <Text
          style={{
            margin: 0,
            fontFamily: fontFamily.mono,
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: colors.mutedForeground,
          }}
        >
          {labelFr} / {labelEn}
        </Text>
      </Column>
      <Column style={{ padding: "10px 0", verticalAlign: "top" }}>
        <Text
          style={{
            margin: 0,
            fontFamily: fontFamily.sans,
            fontSize: "14px",
            lineHeight: "1.5",
            color: colors.foreground,
            whiteSpace: "pre-wrap",
          }}
        >
          {value}
        </Text>
      </Column>
    </Row>
  );
}

export function InternalNotification({ record }: InternalNotificationProps) {
  return (
    <EmailLayout
      previewText={`New enquiry from ${record.name}${record.company ? ` (${record.company})` : ""}`}
    >
      <Text
        style={{
          margin: "0 0 4px",
          fontFamily: fontFamily.mono,
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: colors.acid,
        }}
      >
        New enquiry
      </Text>
      <Text
        style={{
          margin: "0 0 20px",
          fontFamily: fontFamily.sans,
          fontSize: "20px",
          fontWeight: 600,
          color: colors.foreground,
        }}
      >
        {record.name}
        {record.company ? ` — ${record.company}` : ""}
      </Text>
      <Section>
        {FIELD_ROWS.map(([labelFr, labelEn, key]) => (
          <FieldRow key={key} labelFr={labelFr} labelEn={labelEn} value={record[key]} />
        ))}
      </Section>
    </EmailLayout>
  );
}
