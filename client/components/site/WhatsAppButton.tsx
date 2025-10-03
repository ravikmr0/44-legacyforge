import React from "react";
import { MessageCircle } from "lucide-react";

const PHONE = "919599782925"; // country code + number without + sign for wa.me

export function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white bg-gradient-to-br from-emerald-500 to-green-600 hover:scale-105 transform-gpu transition-transform duration-150 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-700"
    >
      <MessageCircle />
       
       
      {/* Hidden phone label on larger screens */}
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
