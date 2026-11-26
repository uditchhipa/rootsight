import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#24133b",
  colorScheme: "dark light",
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#24133b] text-[#262222] antialiased selection:bg-[#ffb200] selection:text-[#262222]">
        {children}
      </body>
    </html>
  );
}
