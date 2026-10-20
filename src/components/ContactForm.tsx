"use client";

import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

/**
 * 面向个人顾客的留言表单，不收集批发数量。
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-gold-500/10 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-gold-500" />
        </div>
        <h2 className="font-display text-3xl text-charcoal-800 mb-3">
          Message received
        </h2>
        <div className="w-10 h-px bg-gold-400 mx-auto mb-5" />
        <p className="text-charcoal-700/60 max-w-md leading-relaxed text-base">
          We will reply within one business day. If you already added a piece to your bag, it is still saved in this browser.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="form-label" htmlFor="name">Name *</label>
          <input id="name" required type="text" placeholder="Your name" className="form-input" />
        </div>
        <div>
          <label className="form-label" htmlFor="email">Email *</label>
          <input id="email" required type="email" placeholder="you@email.com" className="form-input" />
        </div>
      </div>
      <div>
        <label className="form-label" htmlFor="piece">Piece</label>
        <input id="piece" type="text" placeholder="Atelier Tote, cognac" className="form-input" />
      </div>
      <div>
        <label className="form-label" htmlFor="message">Message *</label>
        <textarea
          id="message"
          required
          rows={6}
          placeholder="A question about size, hide, or care."
          className="form-input resize-none"
        />
      </div>
      <button type="submit" className="btn-primary">
        Send message
        <Send size={14} />
      </button>
    </form>
  );
}
