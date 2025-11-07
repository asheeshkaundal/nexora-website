import { NextRequest, NextResponse } from "next/server";

// This API route accepts POST requests with JSON body:
// { name, phone, email, message }
// It will attempt to send the submission to asheesh.kaundal@nxglobal.in using
// one of the configured providers (in order):
// 1. WEB3FORMS_ACCESS_KEY (Web3Forms)
// 2. RESEND_API_KEY (Resend)
// If none are configured it returns an informative error.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const subject = `New Contact Form Submission from ${name}`;
    const emailText = `New Contact Form Submission\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}\n\nSubmitted at: ${new Date().toLocaleString()}`;

    // 1) If WEB3FORMS_ACCESS_KEY is available, use Web3Forms (existing behavior)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: "Nexora Global Website",
          to: "asheesh.kaundal@nxglobal.in",
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (data && data.success) {
        return NextResponse.json(
          { message: "Email sent successfully!" },
          { status: 200 }
        );
      }
      console.error("Web3Forms send failed:", data);
      // fallthrough to try other providers if available
    }

    // 2) If RESEND_API_KEY is available, use Resend (recommended if you have an API key)
    if (process.env.RESEND_API_KEY) {
      try {
        // Lazy import to avoid bundling if not used
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY as string);

        const from =
          process.env.SENDER_EMAIL ||
          `no-reply@${process.env.VERCEL_URL || "nexora"}.com`;

        await resend.emails.send({
          from,
          to: "asheesh.kaundal@nxglobal.in",
          subject,
          html: `<pre style="white-space:pre-wrap;font-family:inherit">${emailText}</pre>`,
        });

        return NextResponse.json(
          { message: "Email sent successfully via Resend!" },
          { status: 200 }
        );
      } catch (err) {
        console.error("Resend send failed:", err);
        // fallthrough to other providers if any
      }
    }

    // If we reach here, no provider succeeded or was configured
    return NextResponse.json(
      {
        error:
          "Email provider not configured or sending failed. Please set WEB3FORMS_ACCESS_KEY or RESEND_API_KEY (or configure SMTP). See README_ENV.md for details.",
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
