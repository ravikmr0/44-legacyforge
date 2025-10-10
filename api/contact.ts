// Import nodemailer for sending emails through Gmail SMTP
import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  // Only allow POST requests for form submissions
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Extract form data from request body
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create Gmail SMTP transporter using nodemailer
    // This uses Gmail's SMTP server with app password authentication
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // Use Gmail's SMTP service
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address (himanshu.legacyforge@gmail.com)
        pass: process.env.GMAIL_APP_PASSWORD, // App password generated from Google Account settings
      },
    });

    // Configure email content and recipients
    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender address (your Gmail)
      to: process.env.GMAIL_USER, // Recipient (same Gmail - you'll receive the contact form submissions)
      subject: `New Contact Form Submission from ${name}`, // Email subject line
      html: `
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
            This email was sent from your website contact form.
          </p>
        </div>
      `,
      // Also include plain text version for email clients that don't support HTML
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Message:
        ${message}
      `,
    };

    // Send the email using the configured transporter
    await transporter.sendMail(mailOptions);

    // Return success response to the frontend
    res.status(200).json({ 
      message: 'Email sent successfully',
      success: true 
    });

  } catch (error) {
    // Log error for debugging (you can check server logs)
    console.error('Email sending error:', error);
    
    // Return error response to frontend
    res.status(500).json({ 
      message: 'Failed to send email',
      success: false,
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}