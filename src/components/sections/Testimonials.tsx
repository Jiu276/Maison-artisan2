"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Atelier Tote arrived heavier than I expected, in a good way. The cognac has already darkened along the handle.",
    author: "Elena Petrov",
    role: "Customer",
    company: "Lisbon",
    stars: 5,
    initial: "E",
  },
  {
    quote:
      "I bought the slim wallet first, then the belt. Both are plain, both are still the things I reach for.",
    author: "Marcus Hale",
    role: "Customer",
    company: "Chicago",
    stars: 5,
    initial: "M",
  },
  {
    quote:
      "The saddle bag sits close and does not swing. Black leather, brass that is not shiny. Exactly the photo, only better in the hand.",
    author: "Aiko Sato",
    role: "Customer",
    company: "Osaka",
    stars: 5,
    initial: "A",
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
          <span className="section-label">From customers</span>
          <h2 className="font-display text-4xl lg:text-5xl text-charcoal-800 mb-3">
            Carried, not<br />
            <em>commissioned</em>
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
            { value: "8", label: "Pieces" },
            { value: "1", label: "Minimum order" },
            { value: "Free", label: "Shipping" },
            { value: "1 year", label: "Stitch repairs" },
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
