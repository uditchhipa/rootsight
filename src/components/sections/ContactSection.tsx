"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
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
      className="bg-[#ffffff] py-28 md:py-36 border-b border-[#ededed]"
    >
      <div className="mx-auto max-w-[1520px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7a7a7a]">
              Initiate Contact // Clearance
            </span>
            <h2 className="mt-2 font-extrabold uppercase tracking-[-0.03em] text-[#222222] text-4xl sm:text-5xl">
              START A PROJECT
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#555555]">
              Looking for law enforcement investigation automation, adversarial penetration testing, or bespoke intelligence tooling? Transmit your brief and our team will respond within 24 hours.
            </p>

            <div className="mt-10 space-y-6 border-t border-[#ededed] pt-8">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7a7a7a]">
                  Direct Inquiries
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="mt-2 flex items-center gap-2 text-sm font-medium text-[#222222] hover:text-[#00c875] transition-colors"
                >
                  <Mail size={16} className="text-[#00c875]" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </div>

              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7a7a7a]">
                  Official Channels
                </span>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {(
                    [
                      ["LinkedIn", SITE_CONFIG.socials.linkedin],
                      ["GitHub", SITE_CONFIG.socials.github],
                      ["Instagram", SITE_CONFIG.socials.instagram],
                    ] as const
                  ).map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#dedede] bg-[#f8f8f8] px-4 py-2 text-xs font-medium text-[#222222] transition-all hover:border-[#222222] hover:bg-[#ffffff]"
                    >
                      <span>{label}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-[24px] border border-[#ededed] bg-[#f8f8f8] p-8 sm:p-12 shadow-xs"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#222222]"
                  >
                    Name / Organization
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Arjun Mehta · Agency / Company"
                    className="mt-2 w-full rounded-xl border border-[#dedede] bg-[#ffffff] px-4 py-3 text-sm text-[#222222] placeholder:text-[#a7a7a7] focus:border-[#222222] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#222222]"
                  >
                    Official Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@agency.gov.in"
                    className="mt-2 w-full rounded-xl border border-[#dedede] bg-[#ffffff] px-4 py-3 text-sm text-[#222222] placeholder:text-[#a7a7a7] focus:border-[#222222] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="contact-service"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#222222]"
                >
                  Practice / Capability Required
                </label>
                <select
                  id="contact-service"
                  value={form.service}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, service: e.target.value }))
                  }
                  className="mt-2 w-full rounded-xl border border-[#dedede] bg-[#ffffff] px-4 py-3 text-sm text-[#222222] focus:border-[#222222] focus:outline-none"
                >
                  {SERVICES.map((svc) => (
                    <option key={svc.id} value={svc.title}>
                      {svc.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#222222]"
                >
                  Operational Scope &amp; Brief
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="Describe your threat model, automation requirements, or project scope..."
                  className="mt-2 w-full rounded-xl border border-[#dedede] bg-[#ffffff] px-4 py-3 text-sm text-[#222222] placeholder:text-[#a7a7a7] focus:border-[#222222] focus:outline-none"
                />
              </div>

              {status === "error" && (
                <p className="mt-4 text-xs font-medium text-red-600">
                  {errorMsg}
                </p>
              )}

              {status === "sent" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-xs font-medium text-emerald-800 border border-emerald-200">
                  <CheckCircle2 size={16} className="text-[#00c875]" />
                  <span>Brief received. An architect will contact you shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#222222] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-black disabled:opacity-50"
              >
                <span>{status === "sending" ? "Transmitting..." : "Submit Project Brief"}</span>
                <ArrowUpRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
