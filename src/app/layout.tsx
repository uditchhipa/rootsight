import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#171717",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "ROOTSIGHT — Security that protects. Root cause identified.",
    template: "%s | ROOTSIGHT",
  },
  description:
    "Registered Indian cyber security & automation startup (Startup India). Law enforcement investigation automation, offensive red teaming, OSINT, and malware research.",
  keywords: [
    "ROOTSIGHT",
    "Cyber Security India",
    "Startup India",
    "Law Enforcement Automation",
    "OSINT",
    "Threat Intelligence",
    "Penetration Testing",
    "Red Teaming",
    "Malware Analysis",
  ],
  openGraph: {
    title: "ROOTSIGHT — Security that protects. Root cause identified.",
    description:
      "Law enforcement investigation automation, offensive cyber security, and threat intelligence engineered in India.",
    url: SITE_CONFIG.url,
    siteName: "ROOTSIGHT",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROOTSIGHT — Security that protects. Root cause identified.",
    description:
      "Cyber security & investigation automation startup registered under Startup India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#171717] text-[#f3f3ed] antialiased selection:bg-[#ecaf30] selection:text-[#171717] font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
