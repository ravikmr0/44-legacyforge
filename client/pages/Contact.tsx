import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Replace with your deployed Apps Script Web App URL
const GOOGLE_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyeeqOGWQldvJTxPfSjlVOJtoEx3G98OrDH_9joGLEH6yP-8-9gFMMzvzXzTbk6wiE/exec";

// Must match the SECRET in Apps Script
const FORM_SECRET = "MY_FORM_SECRET";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      const response = await fetch(GOOGLE_WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token: FORM_SECRET }),
      });

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON: " + text);
      }

      if (result.status === "success") {
        setStatus({ loading: false, success: "Message sent successfully!", error: "" });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(result.message || "Unknown error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus({ loading: false, success: "", error: err.message });
    }
  };

  return (
    <div className="bg-background text-foreground">
      <section className="container py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Let’s build your legacy</h1>
          <p className="text-muted-foreground mb-6">
            Tell us about your goals. We’ll respond within one business day.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border rounded-md p-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border rounded-md p-2 w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
            <textarea
              name="message"
              placeholder="How can we help?"
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
              className="border rounded-md p-2 w-full"
            />

            <button
              type="submit"
              disabled={status.loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.success && <p className="text-green-600 mt-2">{status.success}</p>}
            {status.error && <p className="text-red-600 mt-2">{status.error}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}
