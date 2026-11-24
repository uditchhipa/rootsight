import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const service = body.service?.trim() || "General Inquiry";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Option 1: Resend API (recommended for Vercel)
    const resendKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO_EMAIL || "contact@rootsight.in";

    if (resendKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "ROOTSIGHT <onboarding@resend.dev>",
          to: [contactTo],
          reply_to: email,
          subject: `[ROOTSIGHT] ${service} — ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        console.error("Resend error:", errText);
        return NextResponse.json(
          { error: "Email delivery service error." },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, provider: "resend" });
    }

    // Option 2: Formspree endpoint
    const formspreeUrl = process.env.FORMSPREE_ENDPOINT;
    if (formspreeUrl) {
      const fsRes = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, service, message }),
      });

      if (!fsRes.ok) {
        return NextResponse.json(
          { error: "Formspree submission failed." },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, provider: "formspree" });
    }

    // Local development / unconfigured fallback
    console.info("[ROOTSIGHT Contact Submission]", {
      name,
      email,
      service,
      message,
    });

    return NextResponse.json({
      ok: true,
      provider: "dev-log",
      note: "Configure RESEND_API_KEY or FORMSPREE_ENDPOINT in .env.local for live delivery.",
    });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
