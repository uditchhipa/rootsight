"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";
import { Fit, Alignment } from "@rive-app/react-canvas";

const ROOTSIGHT_FAQS = [
  {
    q: "What is Rootsight Cyber Technologies?",
    a: "Rootsight Cyber Technologies is an Indian cybersecurity and investigation automation startup recognized by Startup India (DPIIT). We build sovereign intelligence software for law enforcement agencies, execute continuous adversarial penetration testing, and engineer dedicated digital forensics pipelines.",
  },
  {
    q: "Who founded Rootsight?",
    a: "Rootsight was founded by a team of systems researchers, offensive security specialists, and digital forensics architects: Sumit, Vishwas, Praveen, and Udit. The team combines deep technical expertise in kernel reverse engineering, telecommunications telemetry, and national defense tooling.",
  },
  {
    q: "Is Rootsight recognized by Startup India (DPIIT)?",
    a: "Yes. Rootsight is an officially registered and recognized startup under the Startup India initiative (DPIIT), Government of India, operating in the cybersecurity and public safety technology sector.",
  },
  {
    q: "What is the Nexus CDR & IPDR correlation engine?",
    a: "Nexus is our proprietary telecommunications analysis platform. It ingests multi-carrier Call Detail Records (CDR), Internet Protocol Detail Records (IPDR), and cell tower dumps, automatically performing geo-temporal correlation, suspect rendezvous mapping, and evidentiary timeline generation in seconds.",
  },
  {
    q: "Can Rootsight be deployed on-premises or air-gapped?",
    a: "Absolutely. All Rootsight software appliances can be deployed 100% on-premises in air-gapped environments with zero external network connectivity. Suspect data, logs, and forensics never leave your bureau's physical infrastructure.",
  },
  {
    q: "How does Rootsight ensure data sovereignty and chain of custody?",
    a: "Rootsight operates with strict 100% sovereign data residency. We adhere to Indian digital evidence preservation standards (Section 65B compliance), generating cryptographically signed audit logs and immutable chain-of-custody documentation for courtroom submission.",
  },
  {
    q: "What is Rootsight's approach to offensive security?",
    a: "Unlike superficial automated vulnerability scanners, our Vanguard red teaming operations emulate advanced threat actor tactics, techniques, and procedures (TTPs). We identify deep architectural flaws, kernel-level vulnerabilities, and credential chaining risks across web, mobile, and cloud environments.",
  },
  {
    q: "Who can deploy Rootsight technology?",
    a: "Our tooling is purpose-built for two primary groups: Law Enforcement Agencies (State Police Cyber Cells, CID, specialized investigative bureaus) and Enterprises with Critical Digital Infrastructure (Banking & Financial Services, Telecom Operators, Defense Contractors).",
  },
  {
    q: "Why is the startup named ROOTSIGHT?",
    a: "The name reflects our core methodology: 'ROOT' represents root-cause diagnostics, binary reverse engineering, and low-level kernel visibility; 'SIGHT' represents total situational awareness, actionable intelligence, and eliminating blindspots.",
  },
  {
    q: "How can our agency or enterprise schedule a confidential briefing?",
    a: "You can request an encrypted technical dossier or schedule a confidential on-premises demonstration by reaching out through our contact portal or emailing contact@rootsight.in.",
  },
];

export function Stay22Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#eadecc] border-b border-[#262222]/10 relative z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Column with Rive FAQ Character */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#262222]/60">
                Frequently Asked Questions
              </span>
              <h2
                className="font-heading text-4xl sm:text-6xl font-normal leading-[0.95] tracking-tight text-[#262222]"
                style={{ fontFamily: "'Exposure', Georgia, serif" }}
              >
                Everything you need to know
              </h2>
              <p className="text-base sm:text-lg text-[#262222]/80 leading-relaxed font-medium">
                Clear answers regarding our sovereign cyber tech, law enforcement automation, deployment models, and compliance.
              </p>
            </div>

            {/* Sticky Interactive Rive FAQ Animation (faq.riv) */}
            <div className="w-full aspect-[607/622] max-w-sm rounded-[32px] overflow-hidden bg-[#ffb200]/15 border border-black/5 shadow-xl relative flex items-center justify-center p-4">
              <RiveAnimation
                src="/stay22/faq.riv"
                stateMachines="State Machine 1"
                fit={Fit.Contain}
                alignment={Alignment.Center}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Accordion Questions */}
          <div className="lg:col-span-7 space-y-4">
            {ROOTSIGHT_FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-[#faf4ec] border border-[#262222]/10 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-black/[0.02] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-heading text-lg sm:text-xl font-normal text-[#262222] tracking-tight leading-snug"
                      style={{ fontFamily: "'Exposure', Georgia, serif" }}
                    >
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#262222]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#262222]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-[#262222]/85 text-sm sm:text-base leading-relaxed border-t border-[#262222]/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
