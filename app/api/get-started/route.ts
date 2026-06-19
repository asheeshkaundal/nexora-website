import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.fullName || !body.businessEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const subject = `New Get Started Request from ${body.fullName} (${body.companyName || "N/A"})`;

    const emailText = `
New Get Started Form Submission
================================

CONTACT INFORMATION
-------------------
Full Name:       ${body.fullName || "N/A"}
Business Email:  ${body.businessEmail || "N/A"}
Contact Number:  ${body.contactNumber || "N/A"}

COMPANY INFORMATION
-------------------
Company Name:    ${body.companyName || "N/A"}
Industry:        ${body.industry || "N/A"}
Company Size:    ${body.companySize || "N/A"}

AREA OF INTEREST
----------------
${body.areaOfInterest || "N/A"}

FOLLOW-UP DETAILS (Step 2)
--------------------------
ERP Status:         ${body.erpStatus || "N/A"}
ERP Areas:          ${body.erpAreas || "N/A"}
Document Volume:    ${body.docVolume || "N/A"}
DMS Goal:           ${body.dmsGoal || "N/A"}
AI Project Type:    ${body.aiType || "N/A"}
Internal IT Team:   ${body.hasITTeam || "N/A"}
IT Support Type:    ${body.supportType || "N/A"}

PROJECT DETAILS (Step 3)
------------------------
Project Timeline:    ${body.projectTimeline || "N/A"}
How Heard About Us:  ${body.howHeard || "N/A"}

Project Description:
${body.projectDescription || "N/A"}

================================
Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
`.trim();

    const emailHtml = `
<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
  <div style="background:linear-gradient(135deg,#6D28D9,#A78BFA);padding:24px">
    <h1 style="color:#fff;margin:0;font-size:22px">New Get Started Request</h1>
    <p style="color:rgba(255,255,255,0.85);margin:4px 0 0">Submitted via nxglobal.in</p>
  </div>
  <div style="padding:24px;background:#f9fafb">

    <h2 style="color:#6D28D9;font-size:15px;text-transform:uppercase;letter-spacing:1px;margin-top:0">Contact Information</h2>
    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:6px;overflow:hidden;margin-bottom:16px">
      <tr><td style="padding:8px 12px;color:#6b7280;width:40%">Full Name</td><td style="padding:8px 12px;font-weight:600">${body.fullName || "N/A"}</td></tr>
      <tr style="background:#f3f4f6"><td style="padding:8px 12px;color:#6b7280">Business Email</td><td style="padding:8px 12px;font-weight:600">${body.businessEmail || "N/A"}</td></tr>
      <tr><td style="padding:8px 12px;color:#6b7280">Contact Number</td><td style="padding:8px 12px;font-weight:600">${body.contactNumber || "N/A"}</td></tr>
    </table>

    <h2 style="color:#6D28D9;font-size:15px;text-transform:uppercase;letter-spacing:1px">Company Information</h2>
    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:6px;overflow:hidden;margin-bottom:16px">
      <tr><td style="padding:8px 12px;color:#6b7280;width:40%">Company Name</td><td style="padding:8px 12px;font-weight:600">${body.companyName || "N/A"}</td></tr>
      <tr style="background:#f3f4f6"><td style="padding:8px 12px;color:#6b7280">Industry</td><td style="padding:8px 12px;font-weight:600">${body.industry || "N/A"}</td></tr>
      <tr><td style="padding:8px 12px;color:#6b7280">Company Size</td><td style="padding:8px 12px;font-weight:600">${body.companySize || "N/A"}</td></tr>
    </table>

    <h2 style="color:#6D28D9;font-size:15px;text-transform:uppercase;letter-spacing:1px">Area of Interest</h2>
    <div style="background:#fff;border-radius:6px;padding:10px 12px;margin-bottom:16px;font-weight:600">${body.areaOfInterest || "N/A"}</div>

    <h2 style="color:#6D28D9;font-size:15px;text-transform:uppercase;letter-spacing:1px">Follow-Up Details</h2>
    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:6px;overflow:hidden;margin-bottom:16px">
      ${body.erpStatus ? `<tr><td style="padding:8px 12px;color:#6b7280;width:40%">ERP Status</td><td style="padding:8px 12px">${body.erpStatus}</td></tr>` : ""}
      ${body.erpAreas ? `<tr style="background:#f3f4f6"><td style="padding:8px 12px;color:#6b7280">ERP Areas</td><td style="padding:8px 12px">${body.erpAreas}</td></tr>` : ""}
      ${body.docVolume ? `<tr><td style="padding:8px 12px;color:#6b7280">Document Volume</td><td style="padding:8px 12px">${body.docVolume}</td></tr>` : ""}
      ${body.dmsGoal ? `<tr style="background:#f3f4f6"><td style="padding:8px 12px;color:#6b7280">DMS Goal</td><td style="padding:8px 12px">${body.dmsGoal}</td></tr>` : ""}
      ${body.aiType ? `<tr><td style="padding:8px 12px;color:#6b7280">AI Project Type</td><td style="padding:8px 12px">${body.aiType}</td></tr>` : ""}
      ${body.hasITTeam ? `<tr style="background:#f3f4f6"><td style="padding:8px 12px;color:#6b7280">Internal IT Team</td><td style="padding:8px 12px">${body.hasITTeam}</td></tr>` : ""}
      ${body.supportType ? `<tr><td style="padding:8px 12px;color:#6b7280">IT Support Type</td><td style="padding:8px 12px">${body.supportType}</td></tr>` : ""}
    </table>

    <h2 style="color:#6D28D9;font-size:15px;text-transform:uppercase;letter-spacing:1px">Project Details</h2>
    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:6px;overflow:hidden;margin-bottom:16px">
      <tr><td style="padding:8px 12px;color:#6b7280;width:40%">Project Timeline</td><td style="padding:8px 12px;font-weight:600">${body.projectTimeline || "N/A"}</td></tr>
      <tr style="background:#f3f4f6"><td style="padding:8px 12px;color:#6b7280">How Heard About Us</td><td style="padding:8px 12px;font-weight:600">${body.howHeard || "N/A"}</td></tr>
    </table>

    <h2 style="color:#6D28D9;font-size:15px;text-transform:uppercase;letter-spacing:1px">Project Description</h2>
    <div style="background:#fff;border-radius:6px;padding:12px;white-space:pre-wrap;line-height:1.6;margin-bottom:16px">${body.projectDescription || "N/A"}</div>

    <p style="color:#9ca3af;font-size:12px;margin:0">Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
  </div>
</div>
`;

    // 1) Try SMTP first
    const smtpConfigured =
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;
    if (smtpConfigured) {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const from = process.env.SENDER_EMAIL || process.env.SMTP_USER;

        await transporter.sendMail({
          from,
          to: process.env.SMTP_USER,
          subject,
          text: emailText,
          html: emailHtml,
        });

        return NextResponse.json({ message: "Submitted" }, { status: 200 });
      } catch (err) {
        console.error("GET-STARTED: SMTP send failed:", err);
        // fall through to Web3Forms
      }
    }

    // 2) Fallback: Web3Forms
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY?.trim();
    if (web3Key) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3Key,
            subject,
            from_name: "Nexora Website",
            name: body.fullName,
            email: body.businessEmail,
            phone: body.contactNumber || "",
            message: emailText,
          }),
        });

        const data = await response.json();
        if (data.success) {
          return NextResponse.json({ message: "Submitted" }, { status: 200 });
        }
        console.error("GET-STARTED: Web3Forms failure", data);
      } catch (err) {
        console.error("GET-STARTED: Web3Forms error:", err);
      }
    }

    return NextResponse.json(
      {
        error:
          "No email provider configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS in your environment variables.",
      },
      { status: 500 }
    );
  } catch (err) {
    console.error("GET-STARTED: Unexpected error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
