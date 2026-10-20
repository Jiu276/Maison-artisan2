"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The welcome bags for our wedding were absolutely breathtaking. Every single guest commented on them. Maison Artisan elevated our entire aesthetic �?I couldn't have asked for a more perfect partner.",
    author: "Alexandra Whitfield",
    role: "Bride, Hampshire UK",
    company: "Private Client",
    stars: 5,
    initial: "A",
  },
  {
    quote:
      "We've been sourcing custom branded bags from Maison Artisan for our boutique launches for three years. The quality is consistently exceptional and the team always exceeds our expectations on design.",
    author: "Camille Durand",
    role: "Creative Director",
    company: "Maison Lumière Paris",
    stars: 5,
    initial: "C",
  },
  {
    quote:
      "As a luxury event planner, packaging is the first and last impression. Maison Artisan understands this intrinsically. Their attention to detail is unmatched �?they are the only supplier I trust for high-end events.",
    author: "Victoria Ashworth",
    role: "Lead Event Planner",
    company: "The Ashworth Agency, New York",
    stars: 5,
    initial: "V",
  },
  {
    quote:
      "Our corporate gift program was completely transformed by Maison Artisan's bespoke boxes and bags. The response from our clients has been extraordinary. This is packaging that tells a story.",
    author: "James Holloway",
    role: "Head of Brand Experience",
    company: "Helix Capital, London",
    stars: 5,
    initial: "J",
  },
  {
    quote:
      "The sample arrived in two weeks and was exactly what we envisioned. Full production was smooth, on time, and every piece was individually inspected. This is how a luxury supplier should operate.",
    author: "Sofía Müller",
    role: "Procurement Manager",
    company: "Boutique Zurich AG",
    stars: 5,
    initial: "S",
  },
  {
    quote:
      "I've worked with suppliers across Europe and Asia. Maison Artisan is in a category of their own. The craftsmanship is extraordinary, and the team communicates beautifully throughout the entire process.",
    author: "Nathaniel Brooks",
    role: "Co-Founder",
    company: "Thornton & Brooks Fine Gifts, Boston",
    stars: 5,
    initial: "N",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-100 overflow-hidden">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Client Stories</span>
          <h2 className="font-display text-4xl lg:text-5xl text-charcoal-800 mb-3">
            Trusted by discerning<br />
            <em>brands worldwide</em>
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`bg-ivory-50 p-8 flex flex-col ${
                idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <StarRating count={t.stars} />
              <blockquote className="font-serif text-charcoal-800 text-lg leading-relaxed mb-8 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 border-t border-ivory-200 pt-6">
                {/* Avatar */}
                <div className="w-10 h-10 bg-gold-400 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-ivory-50 text-lg">{t.initial}</span>
                </div>
                <div>
                  <p className="font-sans font-medium text-charcoal-800 text-sm">{t.author}</p>
                  <p className="text-[11px] text-charcoal-700/50 tracking-wide">{t.role}</p>
                  <p className="text-[10px] text-gold-500 tracking-widest uppercase font-medium mt-0.5">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-12 border-t border-ivory-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "40+", label: "Countries" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "On-time Delivery" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl lg:text-4xl text-charcoal-800 mb-1">{stat.value}</p>
              <p className="text-[10px] tracking-widest uppercase text-charcoal-700/40 font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
