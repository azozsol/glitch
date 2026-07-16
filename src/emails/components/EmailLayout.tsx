import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";

// Shared visual language for all transactional emails -- mirrors the site's
// light-mode design tokens (src/styles.css) and the footer wordmark treatment
// in src/components/glitch/layout.tsx. Light background is used deliberately
// (not the site's dark-first theme) since dark backgrounds render unreliably
// across Outlook/Gmail/Apple Mail.
export const colors = {
  background: "#f8f9fa",
  card: "#ffffff",
  foreground: "#0a0a0a",
  border: "#d8d4cb",
  mutedForeground: "#555555",
  acid: "#049cd8",
};

export const fontFamily = {
  sans: '"Space Grotesk", Helvetica, Arial, sans-serif',
  mono: '"Space Mono", "Courier New", Courier, monospace',
};

interface EmailLayoutProps {
  previewText: string;
  children: ReactNode;
}

export function EmailLayout({ previewText, children }: EmailLayoutProps) {
  return (
    <Html lang="en">
      {/*
                No <Font> web-font loading here on purpose: Outlook and Gmail
                strip @font-face in HTML email anyway, so the fontFamily
                stacks below (Space Grotesk/Space Mono with system fallbacks)
                are relied on to degrade gracefully rather than pointing at a
                font file URL that may not resolve in every client.
            */}
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={{ backgroundColor: colors.background, margin: 0, padding: "32px 16px" }}>
        <Container
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            backgroundColor: colors.card,
            border: `1px solid ${colors.border}`,
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <Section style={{ padding: "28px 32px 20px" }}>
            {/*
                Absolute production URL -- email clients fetch images over
                HTTP, they can't read local repo files. Case-sensitive path
                (glitch-Logo.svg, capital L) matters on prod hosting even
                though local Windows dev is case-insensitive.
            */}
            <Img
              src="https://glitchbrussels.com/images/glitch-Logo.svg"
              alt="glitchbrussels.com"
              width={179}
              height={30}
            />
          </Section>
          <Hr style={{ borderColor: colors.border, margin: 0 }} />
          <Section style={{ padding: "28px 32px" }}>{children}</Section>
          <Hr style={{ borderColor: colors.border, margin: 0 }} />
          <Section style={{ padding: "20px 32px 28px" }}>
            <Text
              style={{
                margin: 0,
                fontFamily: fontFamily.mono,
                fontSize: "10px",
                letterSpacing: "0.06em",
                color: colors.mutedForeground,
              }}
            >
              © 2024 GLITCHBRUSSELS.COM — Creative &amp; Digital Engineering · All rights reserved ·
              Legal notice
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
