import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

// ✅ Replace with your actual Google Apps Script Web App URL
const GOOGLE_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzx5aTA-cJc2LLF6xC3KVoPz6t4MdL91OyFcMlWu1RqTCGJ7mtB5Y5wQBVGFFlJPgUj/exec";

// ✅ Must match SECRET in your Apps Script
const FORM_SECRET = "MY_FORM_SECRET";

export default function Contact() {
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
        body: JSON.stringify({
          ...form,
          token: FORM_SECRET, // ✅ Added token for security
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (result.status === "success") {
        setStatus({
          loading: false,
          success: "Message sent successfully!",
          error: "",
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: "",
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5170FF22] via-[#5D17EB11] to-transparent" />
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB]" />
              Get in touch
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Let’s build your legacy
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Tell us about your goals. We’ll respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Form */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border p-6 md:p-8">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="h-11 rounded-md border bg-background px-3 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="h-11 rounded-md border bg-background px-3 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="h-11 rounded-md border bg-background px-3 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="h-11 px-6 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow"
                  >
                    {status.loading ? "Sending..." : "Send message"}
                  </button>
                  <a
                    href="mailto:hello@legacyforge.marketing?subject=Consultation%20Request"
                    className="text-sm text-muted-foreground hover:text-foreground underline"
                  >
                    Or email us directly
                  </a>
                </div>

                {status.success && (
                  <p className="text-green-600 mt-2">{status.success}</p>
                )}
                {status.error && (
                  <p className="text-red-600 mt-2">{status.error}</p>
                )}
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-2xl border p-6">
              <p className="font-semibold">Contact information</p>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#5170FF]" />
                  <a
                    className="underline hover:text-foreground"
                    href="mailto:info@legacyforgegroup.com"
                  >
                    info@legacyforgegroup.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#5170FF]" />
                  <span>+91 9599782925</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-[#5170FF]" />
                  <span>Mon–Sat, 10am– 6pm</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[#5170FF] to-[#5D17EB] p-[1px]">
              <div className="relative rounded-2xl">
                <a
                  href="https://share.google/kVrdQuCNVbR4XyW7c"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open office location in Google Maps"
                >
                  <img
                    src="/images/office.png"
                    alt="Office location map preview"
                    className="h-56 w-full object-cover rounded-md"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-md bg-white/90 p-2 text-sm text-[#0e0e0e] shadow">
                  <MapPin className="h-4 w-4" />
                  <a href="https://share.google/Gp61LwXaKENg9tm54">
                    <span>LegacyForge Office — Tower B Unit No: 331A</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
