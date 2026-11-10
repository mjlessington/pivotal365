import { NextResponse } from "next/server";

/**
 * Join-the-movement sign-ups.
 *
 * Forwards { email, firstName, source } as JSON to SUBSCRIBE_WEBHOOK_URL (set it in Vercel's
 * environment variables). That can be a Zapier/Make webhook, a Formspree endpoint, or a small
 * adapter for ConvertKit, Mailchimp, Beehiiv, etc. Until it is set, sign-ups are declined with a
 * friendly message rather than silently dropped.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot field filled in: almost certainly a bot. Pretend it worked.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const firstName = typeof body.firstName === "string" ? body.firstName.trim().slice(0, 80) : "";
  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const webhook = process.env.SUBSCRIBE_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ message: "Sign-ups open soon. Until then, start with the planner." }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email, firstName, source: "pivotal365.com" }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("subscribe failed", err);
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 502 });
  }
}
