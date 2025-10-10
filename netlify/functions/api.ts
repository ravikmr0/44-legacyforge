// Import nodemailer for Gmail SMTP functionality
import nodemailer from 'nodemailer';

// Netlify function handler for contact form submissions
export const handler = async (event: any, context: any) => {
  // Set CORS headers to allow frontend requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight OPTIONS request for CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests for form submissions
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    // Parse the request body to get form data
    const { name, email, phone, message } = JSON.parse(event.body);

    // Validate that required fields are present
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Missing required fields' }),
      };
    }

    // Create Gmail SMTP transporter
    // This connects to Gmail's SMTP server using your credentials
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // Use Gmail's built-in SMTP configuration
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address: himanshu.legacyforge@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD, // 16-character app password from Google
      },
    });

    // Configure the email that will be sent
    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender (your Gmail)
      to: process.env.GMAIL_USER, // Recipient (same Gmail - you receive the submissions)
      subject: `New Contact Form Submission from ${name}`, // Subject line
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
      // Plain text version for email clients that don't support HTML
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Message:
        ${message}
      `,
    };

    // Send the email using nodemailer
    await transporter.sendMail(mailOptions);

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Email sent successfully',
        success: true 
      }),
    };

  } catch (error) {
    // Log error for debugging purposes
    console.error('Email sending error:', error);
    
    // Return error response
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        message: 'Failed to send email',
        success: false,
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      }),
    };
  }
};