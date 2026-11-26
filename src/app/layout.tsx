import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#24133b",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  title: "ROOTSIGHT | Intelligent Cyber Security & Investigation Automation",
  description:
    "Rootsight builds sovereign cyber investigation automation, adversarial penetration testing, and real-time threat intelligence pipelines for law enforcement and critical infrastructure. Startup India (DPIIT) Registered.",
  keywords: [
    "Rootsight",
    "Rootsight Cyber Technologies",
    "Cyber Security Automation",
    "Investigation Automation",
    "CDR IPDR Analysis",
    "Law Enforcement Tech",
    "Adversarial Red Team",
    "Threat Intelligence",
    "Startup India",
  ],
  openGraph: {
    title: "ROOTSIGHT | Intelligent Cyber Security & Investigation Automation",
    description:
      "Sovereign cyber tooling, telecom correlation, and automated digital forensics for law enforcement agencies and enterprise defense.",
    siteName: "ROOTSIGHT",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#24133b] text-[#262222] antialiased selection:bg-[#ffb200] selection:text-[#262222]">
        {children}
      </body>
    </html>
  );
}
