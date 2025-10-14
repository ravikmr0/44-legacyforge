import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      console.log("Submitting form data:", formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let result: { message?: string; success?: boolean } | null = null;

      // Try to parse JSON response
      try {
        result = await response.json();
      } catch (parseError) {
        console.error("Failed to parse response:", parseError);
        const text = await response.text().catch(() => "");
        result = { message: text || "Invalid server response" };
      }

      console.log("Response status:", response.status, "data:", result);

      if (response.ok) {
        setSubmitMessage(
          "Thank you! Your message has been sent successfully. We'll get back to you soon."
        );
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const message =
          result?.message ||
          response.statusText ||
          "Sorry, there was an error sending your message. Please try again.";
        setSubmitMessage(message);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <section className="container py-16">
        <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-500 mb-6 text-center">
            Tell us about your goals. We&apos;ll respond within one business day.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-md hover:shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            {submitMessage && (
              <div
                className={`mt-2 p-4 rounded-md ${
                  submitMessage.includes("Thank you")
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                <p className="text-sm font-medium">{submitMessage}</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}