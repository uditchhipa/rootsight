import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { SITE_CONFIG } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f8f8f8",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "ROOTSIGHT — See the root of every threat.",
    template: "%s | ROOTSIGHT",
  },
  description:
    "Registered Indian cyber security & automation startup (Startup India). Law enforcement investigation automation, red teaming, OSINT, malware analysis, and custom security engineering.",
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
    title: "ROOTSIGHT — See the root of every threat.",
    description:
      "Law enforcement investigation automation, offensive cyber security, and threat intelligence engineered in India.",
    url: SITE_CONFIG.url,
    siteName: "ROOTSIGHT",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROOTSIGHT — See the root of every threat.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#f8f8f8] text-[#222222] antialiased selection:bg-[#222222] selection:text-white font-sans"
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
