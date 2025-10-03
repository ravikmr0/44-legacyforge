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
      // If Resend is not configured but a Google Apps Script webhook is provided,
      // forward the payload to that webhook (server-to-server) so messages can
      // still be delivered without Resend.
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
      // Return 500 so the frontend doesn't display a misleading success message
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

    // Resend's SDK may throw on error; if it returns a result, try to detect success
    const sendId = (result as any)?.id ?? (result as any)?.data?.id ?? null;
    console.log("Resend result:", result);

    if (!sendId) {
      // No send id — treat as failure
      console.error("❌ Resend send did not return an id:", result);
      return res.status(500).json({ status: "error", message: "Failed to send your message. Please try again." });
    }

    console.log("✅ Email sent successfully! ID:", sendId);

    return res.json({ status: "success", message: "Thank you for contacting us! We'll respond within one business day." });
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
