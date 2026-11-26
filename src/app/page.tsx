import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[#171717] text-[#f3f3ed]">
        <HeroSection />
        <AboutSection />
        <ShowcaseSection />
        <HowItWorksSection />
        <PricingSection />
      </main>
      <FooterSection />
    </>
  );
}
