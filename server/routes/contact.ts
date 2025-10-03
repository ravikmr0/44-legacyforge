import type { Request, Response } from "express";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export async function handleContactForm(req: Request, res: Response) {
  try {
    const validatedData = contactFormSchema.parse(req.body);

    const { name, email, phone, message } = validatedData;

    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
To: sales@legacyforgegroup.com
    `;

    console.log("Contact form submission received:");
    console.log(emailContent);

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
