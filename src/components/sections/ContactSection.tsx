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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
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
        throw new Error(data.error || "Failed to send message.");
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
      className="bg-[#ffffff] py-20 md:py-28 border-b border-[#ededed]"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: Contact Info & Institutional Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#71717a]">
                Contact
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09090b]">
                Connect directly with our founding team.
              </h2>
              <p className="mt-4 text-base text-[#71717a] leading-relaxed">
                Whether you represent a law enforcement agency seeking evidence automation, an enterprise needing a penetration test, or an academic collaborator—we welcome your inquiry.
              </p>

              <div className="mt-8 space-y-4 pt-6 border-t border-[#f4f4f5]">
                <div className="flex items-center gap-3 text-sm text-[#27272a]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fafafa] border border-[#e4e4e7] text-[#09090b] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-[#71717a] block">Direct Email</span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-semibold text-[#09090b] hover:underline"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#27272a]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fafafa] border border-[#e4e4e7] text-[#09090b] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-[#71717a] block">Headquarters</span>
                    <span className="font-semibold text-[#09090b]">{SITE_CONFIG.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-xl bg-[#fafafa] border border-[#e4e4e7]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#09090b]">
                <Shield size={14} className="text-[#10b981]" />
                <span>Confidentiality &amp; Discretion</span>
              </div>
              <p className="mt-1 text-xs text-[#71717a] leading-relaxed">
                All communications and vulnerability disclosures are handled under strict confidentiality.
              </p>
            </div>
          </div>

          {/* Right: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#fafafa] border border-[#e4e4e7] shadow-xs">
              <h3 className="text-lg font-bold text-[#09090b]">
                Send an Inquiry
              </h3>
              <p className="mt-1 text-xs text-[#71717a]">
                Fill out the form below. We typically respond within 24 business hours.
              </p>

              {status === "sent" ? (
                <div className="mt-8 rounded-xl border border-[#10b981]/30 bg-[#10b981]/10 p-6 text-center">
                  <CheckCircle2 size={32} className="mx-auto text-[#10b981]" />
                  <h4 className="mt-3 text-base font-bold text-[#09090b]">
                    Inquiry Received
                  </h4>
                  <p className="mt-1 text-xs text-[#52525b]">
                    Thank you. A member of the Rootsight founding team will reach out to your email shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 rounded-lg bg-[#09090b] px-4 py-2 text-xs font-semibold text-white hover:bg-[#27272a] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#27272a] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-[#e4e4e7] bg-white px-3.5 py-2.5 text-xs text-[#09090b] placeholder:text-[#a1a1aa] focus:border-[#09090b] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#27272a] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@organization.gov"
                        className="w-full rounded-lg border border-[#e4e4e7] bg-white px-3.5 py-2.5 text-xs text-[#09090b] placeholder:text-[#a1a1aa] focus:border-[#09090b] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-[#27272a] mb-1.5">
                      Practice / Area of Interest
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-lg border border-[#e4e4e7] bg-white px-3.5 py-2.5 text-xs text-[#09090b] focus:border-[#09090b] focus:outline-none"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Consultation">General Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#27272a] mb-1.5">
                      Message / Objective *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please describe your requirements, challenge, or project scope..."
                      className="w-full rounded-lg border border-[#e4e4e7] bg-white px-3.5 py-2.5 text-xs text-[#09090b] placeholder:text-[#a1a1aa] focus:border-[#09090b] focus:outline-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs font-medium text-red-600">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#09090b] px-6 py-3 text-xs font-semibold text-white shadow-xs hover:bg-[#27272a] transition-colors disabled:opacity-50"
                  >
                    <span>{status === "sending" ? "Submitting..." : "Send Message"}</span>
                    <ArrowUpRight size={14} />
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
