"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pieces = [
  {
    title: "Atelier Tote",
    href: "/collections/atelier-tote",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=85&fit=crop",
    desc: "A structured tote in vegetable-tanned leather. $428.",
  },
  {
    title: "Saddle Crossbody",
    href: "/collections/saddle-crossbody",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=85&fit=crop",
    desc: "A curved flap and an adjustable strap. $348.",
  },
  {
    title: "Classic Bifold",
    href: "/collections/classic-bifold",
    image: "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=600&q=85&fit=crop",
    desc: "Six card slots and a skived spine. $128.",
  },
  {
    title: "Leather Journal",
    href: "/collections/leather-journal",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=85&fit=crop",
    desc: "A soft cover for an A5 notebook. $118.",
  },
];

export default function WeddingFeature() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-100 overflow-hidden">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Start here</span>
          <h2 className="font-display text-4xl lg:text-5xl text-charcoal-800 mb-4 leading-tight">
            Four pieces people<br />
            <em>carry every day</em>
          </h2>
          <div className="divider-gold" />
          <p className="text-charcoal-700/60 text-base leading-relaxed">
            Open any of them to choose a color and add it to your bag. The rest of the shop is one page away.
          </p>
        </div>

        {/* Full-width feature image */}
        <div className="relative h-64 sm:h-80 lg:h-[480px] mb-4 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?w=1600&q=85&fit=crop"
            alt="Leather goods arranged on a studio table"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory-100/80" />
          <div className="absolute bottom-8 left-8 right-8 text-center">
            <p className="font-serif italic text-charcoal-800 text-xl lg:text-2xl text-balance">
              &ldquo;It looks better after a year than it did on the first day.&rdquo;
            </p>
            <p className="text-xs tracking-widest uppercase text-charcoal-700/50 mt-2 font-sans">
              - Elena P., customer, Lisbon
            </p>
          </div>
        </div>

        {/* 4-column product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {pieces.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <div className="relative h-72 overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="img-overlay" />
              </div>
              <h3 className="font-display text-xl text-charcoal-800 mb-2">{item.title}</h3>
              <p className="text-sm text-charcoal-700/60 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/collections" className="btn-primary group">
            Shop all pieces
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
