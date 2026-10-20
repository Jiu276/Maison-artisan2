"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-charcoal-900">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=90&fit=crop"
          alt="Luxury handmade wedding gift bags with ribbon details"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlay for luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-charcoal-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/60 via-transparent to-transparent" />
      </div>

      {/* Vertical brand marquee - decorative right side */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10">
        <div className="h-16 w-px bg-ivory-200/20" />
        <span className="writing-vertical text-[10px] tracking-widest3 uppercase text-ivory-200/40 font-sans">
          Handcrafted · Est. 2018 · Worldwide
        </span>
        <div className="h-16 w-px bg-ivory-200/20" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container-luxury pb-20 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-gold-400" />
            <span className="text-[10px] tracking-widest3 uppercase text-gold-400 font-sans font-medium">
              Bespoke · Handcrafted · Premium
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ivory-50 mb-6 leading-[1.05]">
            Custom Bags<br />
            <em className="text-gold-300">Crafted for</em><br />
            Unforgettable<br />Moments
          </h1>

          {/* Sub copy */}
          <p className="text-base lg:text-lg text-ivory-200/70 font-sans font-light max-w-xl mb-10 leading-relaxed">
            Premium handmade bags for weddings, luxury events, and global brands.
            Every piece is made by hand, made to last, and made to impress.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/collections" className="btn-primary group">
              Explore Collections
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="btn-outline border-ivory-200/40 text-ivory-100 hover:bg-ivory-100 hover:text-charcoal-900">
              Request Custom Design
            </Link>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-16 pt-10 border-t border-ivory-200/10 flex flex-wrap gap-10">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "40+", label: "Countries Reached" },
            { value: "100%", label: "Handmade Quality" },
            { value: "5 Star", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl text-ivory-50 leading-none mb-1">{stat.value}</p>
              <p className="text-[10px] tracking-widest uppercase text-ivory-200/40 font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase text-ivory-200/30 font-sans">Scroll</span>
        <ArrowDown size={14} className="text-ivory-200/30" />
      </div>
    </section>
  );
}
