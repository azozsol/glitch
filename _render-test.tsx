import React from "react";
import { render } from "@react-email/render";
import { writeFileSync } from "node:fs";

import { AutoReply } from "./src/emails/AutoReply";
import { InternalNotification } from "./src/emails/InternalNotification";

const record = {
  submittedAt: new Date().toISOString(),
  name: "Jane Doe",
  company: "Acme Corp",
  email: "jane@acme.test",
  phone: "+32 470 00 00 00",
  need: "Website",
  budget: "€10-25k",
  message: "We need a new site.",
  lang: "fr" as const,
};

async function main() {
  const autoReplyHtml = await render(<AutoReply record={record} />);
  const internalHtml = await render(<InternalNotification record={record} />);
  writeFileSync("./_autoreply-out.html", autoReplyHtml);
  writeFileSync("./_internal-out.html", internalHtml);
  console.log("AutoReply length:", autoReplyHtml.length);
  console.log("Internal length:", internalHtml.length);
  console.log("AutoReply contains #049cd8:", autoReplyHtml.includes("#049cd8"));
  console.log("AutoReply contains GLITCH:", autoReplyHtml.includes("GLITCH"));
}

main();
