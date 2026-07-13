import process from "node:process";
import { JWT } from "google-auth-library";

import type { Lang } from "@/i18n";

// Server-only. The .server.ts suffix keeps this out of the client bundle --
// see src/lib/config.server.ts for the pattern this follows (env reads
// happen inside functions, never at module scope).

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

// Shared submission shape appended to the sheet and emailed via Resend
// (src/lib/resend.server.ts) -- built once in contact.functions.ts so both
// delivery paths can't drift from each other.
export interface ContactSubmissionRecord {
  submittedAt: string; // ISO 8601 UTC
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  budget: string;
  message: string;
  lang: Lang;
}

function getSheetsConfig() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  // Service-account private keys are typically stored in env as a single
  // line with literal "\n" sequences -- unescape them into real newlines,
  // otherwise PEM parsing fails.
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Submissions";

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error(
      "[google-sheets] Missing GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY / GOOGLE_SHEETS_SPREADSHEET_ID env vars",
    );
  }
  return { clientEmail, privateKey, spreadsheetId, sheetName };
}

async function getAccessToken(clientEmail: string, privateKey: string): Promise<string> {
  const client = new JWT({ email: clientEmail, key: privateKey, scopes: [SHEETS_SCOPE] });
  const { token } = await client.getAccessToken();
  if (!token) throw new Error("[google-sheets] Failed to obtain access token");
  return token;
}

// Appends one row to the shared "Submissions" Google Sheet -- this is the
// "save into an Excel file on Drive" delivery path (one persistent
// spreadsheet, appended to, rather than a new file per submission).
export async function appendContactSubmissionToSheet(
  record: ContactSubmissionRecord,
): Promise<void> {
  const { clientEmail, privateKey, spreadsheetId, sheetName } = getSheetsConfig();
  const token = await getAccessToken(clientEmail, privateKey);

  const range = `${sheetName}!A:I`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      values: [
        [
          record.submittedAt,
          record.name,
          record.company,
          record.email,
          record.phone,
          record.need,
          record.budget,
          record.message,
          record.lang,
        ],
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`[google-sheets] append failed: ${res.status} ${res.statusText} ${body}`);
  }
}
