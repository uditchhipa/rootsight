import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "TTM — Templates That Move | Real-time WebGL Studio",
  description:
    "A growing library of customizable video and motion templates you can edit, timeline-scrub, and export as MP4 directly in your browser. Powered by Three.js WebGL and GSAP.",
  keywords: [
    "TTM",
    "Templates that move",
    "WebGL Studio",
    "Motion Templates",
    "Browser Video Export",
    "Three.js",
    "GSAP Timeline",
    "WebCodecs MP4",
  ],
  openGraph: {
    title: "TTM — Templates That Move",
    description:
      "A growing library of customizable 3D and motion templates you can edit and export in your browser.",
    siteName: "TTM Supply",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TTM — Templates That Move",
    description: "Real-time WebGL motion templates and browser MP4 studio.",
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
