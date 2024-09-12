import EmailTemplate from "@/app/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phonenumber, emailsub, message } = await req.json();

    console.log("name ",name)
    console.log("email ",email)
    console.log("phonenumber ",phonenumber)
    console.log("emailsub ",emailsub)

    if (typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({
        message: "Invalid name",
        success: false,
        status: 400,
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        message: "Invalid email",
        success: false,
        status: 400,
      });
    }

    // Validate phone number (basic validation for demonstration)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phonenumber)) {
      return NextResponse.json({
        message: "Invalid phone number",
        success: false,
        status: 400,
      });
    }

    const test = Math.floor(1000 + Math.random() * 9000);

    const data = await resend.emails.send({
      from: `${name} <modernaura${test}@resend.dev>`,
      // from: `${name} <${name}${test}@resend.dev>`,
      to: "modernauraa09@gmail.com",
      subject: emailsub,
      react: EmailTemplate({
        name: name,
        phonenumber: phonenumber,
        email: email,
        emailsub: emailsub,
        message: message,
      }),
    });

    console.log("data is:", data.data?.id);

    return NextResponse.json({
      data,
      message: "Email sent successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      error,
      message: "Failed to send email",
      success: false,
      status: 500,
    });
  }
}
