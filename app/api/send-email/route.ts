import { NextRequest, NextResponse } from "next/server";

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

    // Create email content
    const emailContent = `
      New Contact Form Submission
      
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Message: ${message}
      
      Submitted at: ${new Date().toLocaleString()}
    `;

    // Using Web3Forms API (free email service)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Contact Form Submission from ${name}`,
        from_name: "Nexora Global Website",
        to: "asheesh.kaundal@nxglobal.in",
        name: name,
        email: email,
        phone: phone,
        message: message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json(
        { message: "Email sent successfully!" },
        { status: 200 }
      );
    } else {
      throw new Error(data.message || "Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
