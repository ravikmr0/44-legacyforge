import React, { useState } from "react";

// ✅ Replace with your deployed Apps Script /exec URL
const GOOGLE_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbwe0l3hS9QWzODN7rL0vesTHFI7iVqqGZ3P3Qf9TIGDnziRiC4UBWO06zsGh_oJBWd3/exec";

// ✅ Must match the SECRET in Apps Script
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

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      // Send POST request to Apps Script
      const response = await fetch(GOOGLE_WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, token: FORM_SECRET }),
      });

      // Parse JSON safely
      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch (err) {
        throw new Error("Invalid response from server: " + text);
      }

      // Handle response
      if (result.status === "success") {
        setStatus({ loading: false, success: "Message sent successfully!", error: "" });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(result.message || "Unknown error occurred");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus({ loading: false, success: "", error: "Failed to send message. Please try again." });
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <textarea
            name="message"
            placeholder="How can we help?"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status.success && <p className="text-green-600 mt-3">{status.success}</p>}
        {status.error && <p className="text-red-600 mt-3">{status.error}</p>}
      </div>
    </div>
  );
}
