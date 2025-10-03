import "dotenv/config";
import { Resend } from "resend";

async function main() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_RECEIVER || "sales@legacyforgegroup.com";
  const from = process.env.RESEND_FROM || "Contact Form <no-reply@legacyforgegroup.com>";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set in the environment. Aborting.");
    process.exit(1);
  }

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from,
      to,
      subject: "Test email from LegacyForge",
      html: `<p>This is a test message sent at ${new Date().toISOString()}</p>`,
      text: `This is a test message sent at ${new Date().toISOString()}`,
    });

    console.log("Send result:", result);
    console.log("If the result looks successful, check the inbox for:", to);
  } catch (err) {
    console.error("Failed to send test email:", err);
    process.exit(2);
  }
}

main();
