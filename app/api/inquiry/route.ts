import { NextResponse } from "next/server";
import { Resend } from "resend";

const recipient = "sibusisongonyama@outsourceacademic.co.za";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (name.length > 120 || email.length > 254 || phone.length > 40 || service.length > 120 || message.length > 5000) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !from) {
      return NextResponse.json({ error: "The inquiry form is not configured yet. Please reach out on WhatsApp or email." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: recipient,
      replyTo: email,
      subject: `New academic support inquiry: ${service}`,
      text: `A new inquiry has arrived.\n\nName: ${name}\nEmail: ${email}\nPhone / WhatsApp: ${phone || "Not provided"}\nService: ${service}\n\nMessage:\n${message}`,
    });
    if (error) return NextResponse.json({ error: "We couldn't send your message just now. Please try WhatsApp or email." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We couldn't process your message. Please try again or reach out directly." }, { status: 400 });
  }
}
