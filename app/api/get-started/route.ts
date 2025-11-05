import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.fullName || !body.businessEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailContent = `New Get Started submission\n\n${JSON.stringify(
      body,
      null,
      2
    )}`;

    // If WEB3FORMS key is available, send an email. Otherwise just log and return success.
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          subject: `Get Started Request from ${body.fullName}`,
          from_name: "Nexora Website",
          to: "asheesh.kaundal@nxglobal.in",
          name: body.fullName,
          email: body.businessEmail,
          phone: body.contactNumber || "",
          message: emailContent,
        }),
      });

      const data = await response.json();
      if (data.success) {
        return NextResponse.json({ message: "Submitted" }, { status: 200 });
      }
      console.error("web3forms failure", data);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // No email service configured — return success for now
    console.log(emailContent);
    return NextResponse.json(
      { message: "Submitted (logged)" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
