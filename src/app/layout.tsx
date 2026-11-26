import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f2e4d8",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Stay22 | Affiliate monetization for creators & platforms",
  description:
    "The best monetization platforms disappear into your site. Stay22 helps creators and publishers monetize travel intent with seamless, high-converting integrations.",
  keywords: [
    "Stay22",
    "Affiliate monetization",
    "Travel tech",
    "Creator monetization",
    "Awwwards Nominee",
    "Rive Animation",
  ],
  openGraph: {
    title: "Stay22 | Affiliate monetization for creators & platforms",
    description: "The best monetization platforms disappear into your site.",
    siteName: "Stay22",
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
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <body className="bg-[#f2e4d8] text-[#2a2626] antialiased selection:bg-[#786ddc] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
