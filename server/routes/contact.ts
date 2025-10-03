import type { Request, Response } from "express";
import { z } from "zod";
import { Resend } from "resend";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().default(""),
  message: z.string().min(1, "Message is required"),
});

export async function handleContactForm(req: Request, res: Response) {
  console.log("Contact form endpoint hit");
  console.log("Request body:", req.body);

  try {
    const validatedData = contactFormSchema.parse(req.body);
    const { name, email, phone, message } = validatedData;

    console.log("Form data validated:", { name, email, phone: phone || "Not provided" });

    if (!process.env.RESEND_API_KEY) {
      console.warn("⚠️  RESEND_API_KEY not configured. Logging form submission only.");
      console.log("📧 Contact form submission:");
      console.log({
        to: "sales@legacyforgegroup.com",
        from: name,
        email: email,
        phone: phone || "Not provided",
        message: message,
        timestamp: new Date().toISOString(),
      });

      return res.json({
        status: "success",
        message: "Thank you for contacting us! We'll respond within one business day.",
      });
    }

    console.log("Attempting to send email via Resend...");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toISOString()}</small></p>
    `;

    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
    `;

    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sales@legacyforgegroup.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      text: emailText,
    });

    if (result.error) {
      console.error("❌ Resend API error:", result.error);
      return res.status(500).json({
        status: "error",
        message: "Failed to send your message. Please try again.",
      });
    }

    console.log("✅ Email sent successfully! ID:", result.data?.id);

    res.json({
      status: "success",
      message: "Thank you for contacting us! We'll respond within one business day.",
    });
  } catch (error) {
    console.error("❌ Contact form error:", error);

    if (error instanceof z.ZodError) {
      console.error("Validation errors:", error.errors);
      return res.status(400).json({
        status: "error",
        message: "Invalid form data",
        errors: error.errors,
      });
    }

    res.status(500).json({
      status: "error",
      message: "Failed to process your request. Please try again.",
    });
  }
}
