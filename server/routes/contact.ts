import { Request, Response } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function handleContactForm(req: Request, res: Response) {
  console.log("Contact form endpoint hit");
  console.log("Request body:", req.body);

  try {
    const validatedData = contactFormSchema.parse(req.body);
    const { name, email, phone, message } = validatedData;

    console.log("Form data validated:", { name, email, phone: phone || "Not provided" });

    // Check if Gmail credentials are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("❌ Gmail credentials not configured. Cannot send email.");
      return res.status(500).json({
        success: false,
        message: "Email service not configured. Please contact the site administrator.",
      });
    }

    console.log("Attempting to send email via Gmail SMTP...");
    
    // Create Gmail SMTP transporter using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Message:</h3>
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; border-radius: 3px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #dee2e6;">
        <p style="color: #6c757d; font-size: 12px;">
          This email was sent from your website contact form at ${new Date().toISOString()}
        </p>
      </div>
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

    // Configure email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      text: emailText,
    };

    // Send the email
    const result = await transporter.sendMail(mailOptions);
    console.log("Gmail SMTP result:", result);
    console.log("✅ Email sent successfully! Message ID:", result.messageId);

    return res.json({ 
      success: true,
      message: "Thank you for contacting us! We'll respond within one business day."
    });
  } catch (error) {
    console.error("❌ Contact form error:", error);

    if (error instanceof z.ZodError) {
      console.error("Validation errors:", error.errors);
      return res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error.errors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to process your request. Please try again.",
    });
  }
}
