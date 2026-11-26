"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Shield } from "lucide-react";
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
      className="py-24 md:py-32 bg-[#171717] border-b border-[#262626]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ecaf30]">
                Contact &amp; Clearance
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black text-[#f3f3ed] tracking-tight">
                Let’s talk security.
              </h2>
              <p className="mt-4 text-sm text-[#86867f] leading-relaxed">
                Whether you represent a law enforcement agency seeking automated evidence correlation, an enterprise defense team, or a technical partner—reach out directly.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#262626]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#242424] border border-[#2d2d2d] text-[#ecaf30] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#86867f] block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm font-bold text-[#f3f3ed] hover:text-[#ecaf30] transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#242424] border border-[#2d2d2d] text-[#9cd696] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#86867f] block">
                    Headquarters
                  </span>
                  <span className="text-sm font-bold text-[#f3f3ed]">
                    {SITE_CONFIG.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1c1c1c] border border-[#262626] space-y-2">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#9cd696]" />
                <span className="text-xs font-bold text-[#f3f3ed]">
                  Strict Operational Discretion
                </span>
              </div>
              <p className="text-xs text-[#86867f] leading-relaxed">
                All communications and vulnerability disclosures are handled with chain-of-custody protocols and under strict confidentiality.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Dark Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1f1f1f] border border-[#2d2d2d] shadow-2xl">
              <h3 className="text-xl font-bold text-[#f3f3ed]">
                Send an Operational Inquiry
              </h3>
              <p className="mt-1 text-xs text-[#86867f]">
                Submissions are routed directly to our 4 founding partners.
              </p>

              {status === "sent" ? (
                <div className="mt-8 rounded-2xl border border-[#9cd696]/30 bg-[#9cd696]/10 p-8 text-center space-y-3">
                  <CheckCircle2 size={36} className="mx-auto text-[#9cd696]" />
                  <h4 className="text-lg font-bold text-[#f3f3ed]">
                    Inquiry Transmitted
                  </h4>
                  <p className="text-xs text-[#86867f] max-w-sm mx-auto">
                    Thank you. Your message has been received by our founders. We will respond within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-3 ttm-pill bg-[#f3f3ed] text-[#171717] px-5 py-2 text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#d4d4d0] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-[#333333] bg-[#171717] px-4 py-3 text-xs text-[#f3f3ed] placeholder:text-[#666666] focus:border-[#ecaf30] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#d4d4d0] mb-1.5">
                        Official Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@agency.gov.in"
                        className="w-full rounded-xl border border-[#333333] bg-[#171717] px-4 py-3 text-xs text-[#f3f3ed] placeholder:text-[#666666] focus:border-[#ecaf30] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-[#d4d4d0] mb-1.5">
                      Practice / Area of Focus
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-xl border border-[#333333] bg-[#171717] px-4 py-3 text-xs text-[#f3f3ed] focus:border-[#ecaf30] focus:outline-none"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Strategic Partnership">General Strategic Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#d4d4d0] mb-1.5">
                      Project Objective / Scope *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please describe your investigation requirement, penetration testing scope, or challenge..."
                      className="w-full rounded-xl border border-[#333333] bg-[#171717] px-4 py-3 text-xs text-[#f3f3ed] placeholder:text-[#666666] focus:border-[#ecaf30] focus:outline-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs font-semibold text-[#ff8a7a]">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="ttm-pill w-full bg-[#ecaf30] py-3.5 text-xs font-bold text-[#171717] hover:bg-[#ffd13b] disabled:opacity-50"
                  >
                    <span>{status === "sending" ? "Transmitting..." : "Send Operational Inquiry"}</span>
                    <ArrowUpRight size={14} className="ml-1" />
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
