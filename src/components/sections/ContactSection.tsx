"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/data/content";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: SERVICES[0].title,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setStatus("sent");
      setForm({
        name: "",
        email: "",
        service: SERVICES[0].title,
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 hairline-b bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Context & Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="mono-tag text-[#A3A39E]">04 // ENGAGEMENT</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.035em] text-[#111213]">
                Initiate Contact
              </h2>
            </div>

            <p className="text-sm text-[#525457] leading-relaxed">
              We work with national law enforcement agencies, cyber cells, enterprise defenders, and academic partners. All technical inquiries and vulnerability disclosures are handled with strict operational discretion.
            </p>

            <div className="space-y-3 pt-6 hairline-t text-xs">
              <div className="flex items-center gap-3 text-[#2A2B2D]">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#F9F9F7] border border-[#E5E5E2] text-[#111213]">
                  <Mail size={14} />
                </div>
                <div>
                  <span className="text-[10px] mono-tag text-[#A3A39E] block">OFFICIAL INQUIRY</span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-medium text-[#111213] hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#2A2B2D]">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#F9F9F7] border border-[#E5E5E2] text-[#111213]">
                  <MapPin size={14} />
                </div>
                <div>
                  <span className="text-[10px] mono-tag text-[#A3A39E] block">HEADQUARTERS</span>
                  <span className="font-medium text-[#111213]">{SITE_CONFIG.location}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F9F9F7] border border-[#E5E5E2] rounded-lg">
              <span className="mono-tag text-[10px] text-[#111213] font-bold block mb-1">
                DISCRETION &amp; CHAIN OF CUSTODY
              </span>
              <p className="text-[11px] text-[#6E7073] leading-relaxed">
                Rootsight operates under rigorous chain-of-custody protocols for all evidence-related consultations and sensitive adversarial simulations.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#F9F9F7] border border-[#E5E5E2] rounded-xl">
              <h3 className="text-lg font-bold text-[#111213] tracking-tight">
                Submit an Operational Inquiry
              </h3>
              <p className="mt-1 text-xs text-[#6E7073]">
                Direct intake forwarded to our four founding partners.
              </p>

              {status === "sent" ? (
                <div className="mt-8 rounded-lg border border-[#111213]/20 bg-white p-6 text-center space-y-3">
                  <CheckCircle2 size={32} className="mx-auto text-[#111213]" />
                  <h4 className="text-base font-bold text-[#111213]">
                    Inquiry Forwarded
                  </h4>
                  <p className="text-xs text-[#6E7073] max-w-sm mx-auto">
                    Thank you. Your message has been routed to our founding partners. A member of our team will reach out directly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-3 rounded-full bg-[#111213] px-4 py-2 text-xs font-medium text-[#F9F9F7]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-[11px] mono-tag text-[#2A2B2D]">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Officer / Director Name"
                        className="w-full rounded border border-[#E5E5E2] bg-white px-3.5 py-2.5 text-xs text-[#111213] placeholder:text-[#A3A39E] focus:border-[#111213] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-[11px] mono-tag text-[#2A2B2D]">
                        Official Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@agency.gov.in"
                        className="w-full rounded border border-[#E5E5E2] bg-white px-3.5 py-2.5 text-xs text-[#111213] placeholder:text-[#A3A39E] focus:border-[#111213] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="service" className="block text-[11px] mono-tag text-[#2A2B2D]">
                      Subject Matter / Practice Focus
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded border border-[#E5E5E2] bg-white px-3.5 py-2.5 text-xs text-[#111213] focus:border-[#111213] focus:outline-none"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Strategic Partnership">General Strategic Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-[11px] mono-tag text-[#2A2B2D]">
                      Project Scope / Operational Challenge *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please outline the nature of your investigation, assessment scope, or inquiry..."
                      className="w-full rounded border border-[#E5E5E2] bg-white px-3.5 py-2.5 text-xs text-[#111213] placeholder:text-[#A3A39E] focus:border-[#111213] focus:outline-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs font-mono text-[#D8281E]">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#111213] px-6 py-3 text-xs font-semibold text-[#F9F9F7] hover:bg-black transition-colors disabled:opacity-50"
                  >
                    <span>{status === "sending" ? "Transmitting..." : "Send Operational Inquiry"}</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
