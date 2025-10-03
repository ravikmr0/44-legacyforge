import type { Request, Response } from "express";
import { z } from "zod";
import { Resend } from "resend";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContactForm(req: Request, res: Response) {
  try {
    const validatedData = contactFormSchema.parse(req.body);

    const { name, email, phone, message } = validatedData;

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured. Email will not be sent.");
      console.log("Contact form submission received:");
      console.log({
        name,
        email,
        phone: phone || "Not provided",
        message,
        timestamp: new Date().toISOString(),
      });

      return res.json({
        status: "success",
        message: "Thank you for contacting us! We'll respond within one business day.",
      });
    }

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
      console.error("Failed to send email:", result.error);
      return res.status(500).json({
        status: "error",
        message: "Failed to send your message. Please try again.",
      });
    }

    console.log("Email sent successfully:", result.data?.id);

    res.json({
      status: "success",
      message: "Thank you for contacting us! We'll respond within one business day.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
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
