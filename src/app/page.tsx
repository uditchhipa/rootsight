import React from "react";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { FloatingDock } from "@/components/FloatingDock";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="relative bg-[#f8f8f8] text-[#222222]">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <StatsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <FooterSection />
      <FloatingDock />
    </>
  );
}
