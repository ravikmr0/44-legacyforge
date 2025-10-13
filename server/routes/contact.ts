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
      // In non-production, default to dev mock when email service isn't configured
      const isDev = process.env.NODE_ENV !== 'production';
      const devMock = process.env.DEV_EMAIL_MOCK === 'true' || isDev;
      if (devMock) {
        console.log('DEV_EMAIL_MOCK enabled (default in non-production) — simulating email send.');
        console.log({ name, email, phone, message });
        return res.json({ status: 'success', message: "Thank you for contacting us! We'll respond within one business day." });
      }

      const gasUrl = process.env.GAS_WEBHOOK_URL;
      if (gasUrl) {
        try {
          console.log("RESEND_API_KEY not configured — forwarding to GAS webhook:", gasUrl);
          const upstream = await globalThis.fetch(gasUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, message }),
          });

          const text = await upstream.text().catch(() => "");
          console.log("GAS upstream response status:", upstream.status, text);

          if (!upstream.ok) {
            return res.status(502).json({ status: "error", message: "Failed to deliver message via webhook.", upstreamStatus: upstream.status, upstreamBody: text });
          }

          return res.json({ status: "success", message: "Thank you for contacting us! We'll respond within one business day." });
        } catch (err) {
          console.error("Error forwarding to GAS webhook:", err);
          return res.status(502).json({ status: "error", message: "Failed to forward message to webhook. Please contact the site administrator." });
        }
      }

      console.error("❌ RESEND_API_KEY not configured and no GAS_WEBHOOK_URL provided. Cannot send email.");
      return res.status(500).json({
        status: "error",
        message: "Email service not configured. Set RESEND_API_KEY or GAS_WEBHOOK_URL in your environment variables.",
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
      from: process.env.RESEND_FROM || "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER || "sales@legacyforgegroup.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      text: emailText,
    });
    console.log("Resend result:", result);
    const sendId = (result as any)?.id ?? (result as any)?.data?.id ?? null;

    if (!sendId) {
      console.warn("⚠️ Resend send did not return an id but completed without throwing. Treating as success.");
    } else {
      console.log("✅ Email sent successfully! ID:", sendId);
    }

    return res.json({ status: "success", message: "Thank you for contacting us! We'll respond within one business day.", sendId: sendId ?? undefined });
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