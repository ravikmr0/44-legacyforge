import { z } from "zod";
import { Resend } from "resend";

// Minimal Vercel-compatible serverless handler. Avoids external @vercel/node types so
// it compiles in any TypeScript setup.
export default async function handler(req: any, res: any) {
  // Basic CORS response for preflight and actual responses
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional().default("") ,
    message: z.string().min(1, "Message is required"),
  });

  try {
    const body = req.body ?? {};
    const validated = contactFormSchema.parse(body);
    const { name, email, phone, message } = validated;

    // If RESEND_API_KEY is not configured, try forwarding to a Google Apps Script
    // webhook (GAS_WEBHOOK_URL). This allows deployments without Resend to still
    // deliver contact messages via your Apps Script.
    if (!process.env.RESEND_API_KEY) {
      const gasUrl = process.env.GAS_WEBHOOK_URL;
      if (gasUrl) {
        try {
          console.log("RESEND_API_KEY not configured — forwarding to GAS webhook:", gasUrl);
          const upstream = await fetch(gasUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, message }),
          });

          const text = await upstream.text().catch(() => "");
          console.log("GAS upstream response status:", upstream.status, text);

          if (!upstream.ok) {
            return res.status(502).json({ status: "error", message: "Failed to deliver message via webhook.", upstreamStatus: upstream.status, upstreamBody: text });
          }

          return res.status(200).json({ status: "success", message: "Thank you for contacting us! We'll respond within one business day." });
        } catch (err) {
          console.error("Error forwarding to GAS webhook:", err);
          return res.status(502).json({ status: "error", message: "Failed to forward message to webhook. Please contact the site administrator." });
        }
      }

      console.error("❌ RESEND_API_KEY not configured and no GAS_WEBHOOK_URL provided. Cannot send email.");
      return res.status(500).json({ status: "error", message: "Email service not configured. Set RESEND_API_KEY or GAS_WEBHOOK_URL in your environment variables." });
    }

    // Send email via Resend
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

    const emailText = `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}\n\n---\nSubmitted at: ${new Date().toISOString()}`;

    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sales@legacyforgegroup.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      text: emailText,
    });

    const sendId = (result as any)?.id ?? (result as any)?.data?.id ?? null;
    console.log("Resend result:", result);

    if (!sendId) {
      console.error("❌ Resend send did not return an id:", result);
      return res.status(500).json({ status: "error", message: "Failed to send your message. Please try again." });
    }

    return res.status(200).json({ status: "success", message: "Thank you for contacting us! We'll respond within one business day." });
  } catch (err: unknown) {
    console.error("Contact API error:", err);

    // If it's a Zod validation error, it has an `issues` property (Zod v3)
    // or `errors` in some cases; check and return 400 with details when present.
    // Use runtime checks to satisfy TypeScript.
    const maybeZod = err as { issues?: unknown; errors?: unknown };
    if (maybeZod && (maybeZod.issues || maybeZod.errors)) {
      return res.status(400).json({ status: "error", message: "Invalid form data", errors: maybeZod.issues ?? maybeZod.errors });
    }

    return res.status(500).json({ status: "error", message: "Failed to process your request. Please try again." });
  }
}
