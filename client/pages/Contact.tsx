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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const sendTo = async (url: string) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      let result: any = null;
      const ct = response.headers.get('content-type') || '';
      if (ct.includes('application/json')) {
        try { result = await response.json(); } catch {}
      }
      if (!result) {
        const text = await response.text().catch(() => '');
        try { result = JSON.parse(text); } catch { result = { message: text }; }
      }
      return { response, result } as const;
    };

    try {
      console.log('Submitting form data:', formData);

      // Try Express route first, then Netlify fallback
      let attempt = await sendTo('/api/contact');
      if (!(attempt.response.ok && (attempt.result?.success || attempt.result?.status === 'success'))) {
        console.warn('Primary /api/contact failed, trying Netlify function fallback');
        attempt = await sendTo('/.netlify/functions/api');
      }

      const { response, result } = attempt;
      console.log('Final response status:', response.status, 'data:', result);

      const isSuccess = response.ok && (result?.success === true || result?.status === 'success');

      if (isSuccess) {
        setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const message = result?.message || response.statusText || 'Sorry, there was an error sending your message. Please try again.';
        setSubmitMessage(message);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      <section className="container py-16">
        <div className="max-w-2xl mx-auto bg-white shadow-md p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-500 mb-6 text-center">
            Tell us about your goals. We'll respond within one business day.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded-md p-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-md p-2 w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
            <textarea
              name="message"
              placeholder="How can we help?"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="border rounded-md p-2 w-full"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <p className={`mt-2 ${submitMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}