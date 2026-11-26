import React from "react";
import { Stay22Navbar } from "@/components/stay22/Stay22Navbar";
import { Stay22Hero } from "@/components/stay22/Stay22Hero";
import { Stay22ValueProps } from "@/components/stay22/Stay22ValueProps";
import { Stay22Products } from "@/components/stay22/Stay22Products";
import { Stay22CaseStudies } from "@/components/stay22/Stay22CaseStudies";
import { Stay22Faq } from "@/components/stay22/Stay22Faq";
import { Stay22Footer } from "@/components/stay22/Stay22Footer";
import { Stay22ChatWidget } from "@/components/stay22/Stay22ChatWidget";

export default function HomePage() {
  return (
    <>
      <Stay22Navbar />
      <main className="relative w-full">
        <Stay22Hero />
        <Stay22ValueProps />
        <Stay22Products />
        <Stay22CaseStudies />
        <Stay22Faq />
      </main>
      <Stay22Footer />
      <Stay22ChatWidget />
    </>
  );
}
