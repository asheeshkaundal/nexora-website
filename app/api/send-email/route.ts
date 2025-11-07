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

    // We'll try providers in order and keep the last error to return if all fail.
    let lastError: {
      provider: string;
      message: string;
      status?: number;
    } | null = null;
    // Prefer SMTP first (if configured)
    const smtpConfigured =
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;
    console.log("SEND-EMAIL: SMTP configured?", !!smtpConfigured);
    if (smtpConfigured) {
      try {
        console.log("SEND-EMAIL: Attempting SMTP send");
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
          secure: process.env.SMTP_SECURE === "true" || false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const from = process.env.SENDER_EMAIL || process.env.SMTP_USER;

        await transporter.sendMail({
          from,
          to: "asheesh.kaundal@nxglobal.in",
          subject,
          text: emailText,
          html: `<pre style="white-space:pre-wrap;font-family:inherit">${emailText}</pre>`,
        });

        return NextResponse.json(
          { message: "Email sent successfully via SMTP!" },
          { status: 200 }
        );
      } catch (err) {
        console.error("SMTP send failed:", err);
        lastError = { provider: "SMTP", message: String(err) };
      }
    }

    // 2) Web3Forms (validate key first then attempt)
    console.log(
      "SEND-EMAIL: WEB3FORMS_ACCESS_KEY present?",
      !!process.env.WEB3FORMS_ACCESS_KEY
    );
    const rawWeb3Key = process.env.WEB3FORMS_ACCESS_KEY
      ? process.env.WEB3FORMS_ACCESS_KEY.trim()
      : undefined;
    if (rawWeb3Key) {
      // Validate UUID format before calling provider to give a clearer error early
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(rawWeb3Key)) {
        console.error(
          "SEND-EMAIL: WEB3FORMS_ACCESS_KEY has invalid UUID format",
          rawWeb3Key
        );
        lastError = {
          provider: "Web3Forms",
          message:
            "Invalid Web3Forms access key format. Please set a valid UUID for WEB3FORMS_ACCESS_KEY in your environment (.env.local).",
        };
      } else {
        try {
          console.log(
            "SEND-EMAIL: Attempting Web3Forms submit (will not print key)"
          );
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              access_key: rawWeb3Key,
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
          console.log("SEND-EMAIL: Web3Forms response:", data);
          if (data && data.success) {
            return NextResponse.json(
              { message: "Email sent successfully!" },
              { status: 200 }
            );
          }

          // record error and continue to fallbacks
          console.error("Web3Forms send failed:", data);
          const statusForClient =
            response.status && response.status !== 200 ? response.status : 502;
          lastError = {
            provider: "Web3Forms",
            message: data?.error || data?.message || JSON.stringify(data),
            status: statusForClient,
          };
        } catch (err) {
          console.error("Web3Forms request error:", err);
          lastError = { provider: "Web3Forms", message: String(err) };
        }
      }
    }

    // 3) Resend
    if (process.env.RESEND_API_KEY) {
      try {
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
        lastError = { provider: "Resend", message: String(err) };
      }
    }

    // If nothing succeeded, return a helpful message
    if (lastError) {
      return NextResponse.json(
        { error: `${lastError.provider} error: ${lastError.message}` },
        { status: lastError.status || 500 }
      );
    }

    return NextResponse.json(
      {
        error:
          "No email provider configured. Set WEB3FORMS_ACCESS_KEY, RESEND_API_KEY, or SMTP env vars (SMTP_HOST, SMTP_USER, SMTP_PASS).",
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
